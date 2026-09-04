variable "aws_region" {
  description = "AWS region for the S3 bucket. CloudFront itself is a global service."
  type        = string
  default     = "eu-central-1"
}

variable "project_name" {
  description = "Used to name/tag resources (bucket name, IAM role, OAC, etc.)"
  type        = string
  default     = "esug-2027-app"
}

variable "github_repo" {
  description = "GitHub repo allowed to assume the deploy role, as \"owner/repo\"."
  type        = string
  default     = "koendehondt/esug-2027-app"
}

variable "github_branch" {
  description = "Branch allowed to deploy -- only workflow runs on this branch can assume the role."
  type        = string
  default     = "main"
}

variable "create_github_oidc_provider" {
  description = <<-EOT
    Whether Terraform should create the GitHub Actions OIDC provider in this
    AWS account. AWS allows only ONE OIDC provider per account for the URL
    https://token.actions.githubusercontent.com -- if this account already
    has one (check IAM > Identity providers in the console, e.g. because
    another project already deploys from GitHub Actions via OIDC), set this
    to false and Terraform will look up the existing provider instead of
    trying to create a duplicate.
  EOT
  type    = bool
  default = true
}
