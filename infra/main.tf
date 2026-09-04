terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }

  # State is local by default -- fine for a single-maintainer project.
  # If more than one person will ever run `terraform apply` here, move
  # this to an S3 backend with a DynamoDB lock table instead.
}

provider "aws" {
  region = var.aws_region
}
