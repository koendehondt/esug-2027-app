# Deploying esug-2027-app to AWS (S3 + CloudFront)

This app builds to a fully static site (`npm run build` → `dist/`, via
Embroider/Vite — not `ember-cli-deploy`, which this project doesn't use).
This Terraform config stands up the AWS side once; after that, pushing to
`main` deploys automatically via GitHub Actions.

## What this creates

- A **private S3 bucket** holding the built site (no public access — only
  CloudFront can read it, via Origin Access Control).
- A **CloudFront distribution** in front of it, with a `403`/`404` →
  `/index.html` fallback so Ember's history-mode router (`/venue`,
  `/talk/123`, etc.) works on hard refreshes and deep links.
- A **GitHub Actions OIDC trust** (IAM role) so the `deploy` workflow can
  push to S3 and invalidate the CloudFront cache without any long-lived AWS
  keys stored in GitHub.

No custom domain is configured — the site is served from the distribution's
default `*.cloudfront.net` URL. Add a Route 53 record + ACM certificate
later if you want a custom domain.

## One-time setup

1. Install Terraform and the AWS CLI.

   Terraform is no longer in homebrew-core (HashiCorp moved it to their own
   tap after the license change), so `brew install terraform` fails with
   "No available formula". Use their tap instead:

   ```sh
   brew tap hashicorp/tap
   brew install hashicorp/tap/terraform
   ```

   (Upgrades later need `brew upgrade hashicorp/tap/terraform` — plain
   `brew upgrade terraform` won't find it once it's installed from the tap.)

   Alternatively, [OpenTofu](https://opentofu.org) is a license-unencumbered
   fork of Terraform, plain HCL/state-compatible, and stays in
   homebrew-core: `brew install opentofu`, binary name `tofu`. Everything
   below works unchanged with it — just swap `terraform` for `tofu` in every
   command.

   Then install the AWS CLI if you don't have it (`brew install awscli`) and
   make sure it's configured with credentials that can create
   S3/CloudFront/IAM resources (`aws configure`, or `aws sso login` if you
   use SSO).

2. Check the defaults in `variables.tf` — in particular:
   - `aws_region` (default `eu-west-1`)
   - `github_repo` / `github_branch` (defaults already match this repo/branch)
   - `create_github_oidc_provider` — leave `true` unless this AWS account
     already has a GitHub OIDC provider from another project (IAM >
     Identity providers in the console). AWS only allows one per account
     for `token.actions.githubusercontent.com`; if `terraform apply` fails
     with `EntityAlreadyExists` on that resource, set this to `false` and
     re-apply.

3. From the `infra/` directory:

   ```sh
   cd infra
   terraform init
   terraform apply
   ```

   Review the plan, type `yes`. This creates real billable AWS resources
   (S3 storage + CloudFront requests/transfer are pennies for a site this
   size, but it's not free).

4. Note the outputs (`terraform output` to see them again later):
   - `cloudfront_domain_name` — the live URL for the site
   - `github_deploy_role_arn`, `s3_bucket_name`, `cloudfront_distribution_id`

5. In the GitHub repo, go to **Settings → Secrets and variables → Actions →
   Variables** and add these four repository variables (not secrets — none
   of these values are sensitive on their own, since the IAM role's trust
   policy already restricts who can assume it):

   | Variable | Value |
   |---|---|
   | `AWS_DEPLOY_ROLE_ARN` | `github_deploy_role_arn` output |
   | `AWS_REGION` | same value as `var.aws_region` (default `eu-west-1`) |
   | `AWS_S3_BUCKET` | `s3_bucket_name` output |
   | `AWS_CLOUDFRONT_DISTRIBUTION_ID` | `cloudfront_distribution_id` output |

6. Push to `main` (or run the "Deploy" workflow manually from the Actions
   tab). The workflow builds the app and syncs `dist/` to S3, then
   invalidates the CloudFront cache so the new build is live within a
   minute or two.

## State file

`terraform apply` writes `infra/terraform.tfstate` locally — it's the only
record of what Terraform created, and it's gitignored on purpose (it can
contain resource details you don't want in git history). Keep a backup of
it somewhere safe. If more than one person will ever run `terraform apply`
against this project, migrate to an S3 backend with state locking instead
of relying on a local file.

## Troubleshooting: "Not authorized to perform sts:AssumeRoleWithWebIdentity"

If the "Configure AWS credentials" step in the workflow fails with this
error even though the role ARN, the OIDC provider's audience list, and the
trust policy's `sub` condition all *look* correct, check whether this repo
or the `koendehondt` account has ever been renamed. GitHub embeds stable
numeric owner/repo IDs into the OIDC token's `sub` claim once a rename has
happened — `repo:<owner>@<owner_id>/<repo>@<repo_id>:ref:refs/heads/<branch>`
instead of the plain `repo:<owner>/<repo>:ref:refs/heads/<branch>` most
tutorials assume. `var.github_oidc_subject` in `variables.tf` already
accounts for this for the current setup; if the trust condition ever needs
re-deriving (e.g. a fresh AWS account), add a temporary debug step to
`deploy.yml` before "Configure AWS credentials" to decode and print the
token's actual claims:

```yaml
- name: Debug OIDC token claims
  run: |
    TOKEN=$(curl -sS -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" \
      "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=sts.amazonaws.com" | jq -r '.value')
    PAYLOAD=$(echo "$TOKEN" | cut -d '.' -f2)
    PAD=$(( (4 - ${#PAYLOAD} % 4) % 4 ))
    PADDED="$PAYLOAD$(printf '=%.0s' $(seq 1 $PAD))"
    echo "$PADDED" | tr '_-' '/+' | base64 -d 2>/dev/null | jq '{iss, aud, sub, repository, ref, repository_owner, workflow_ref}'
```

Compare the printed `sub` against the trust policy's `StringLike` condition
(IAM console → role → Trust relationships), update
`var.github_oidc_subject` to match, `terraform apply`, then remove the
debug step again.

## Changing infrastructure later

Edit the `.tf` files and run `terraform plan` / `terraform apply` again —
never hand-edit resources in the AWS console, or Terraform's next apply
will fight with the drift. `terraform destroy` tears everything down
(bucket contents must be empty first: `aws s3 rm s3://<bucket> --recursive`).
