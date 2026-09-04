resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "${var.project_name}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  default_root_object = "index.html"
  comment             = "${var.project_name} static site"
  # Cheapest edge tier (North America/Europe/UK) -- fine for a European
  # conference site; widen if you expect meaningful traffic from further
  # afield.
  price_class = "PriceClass_100"

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = "s3-${var.project_name}"
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    allowed_methods         = ["GET", "HEAD"]
    cached_methods          = ["GET", "HEAD"]
    target_origin_id        = "s3-${var.project_name}"
    viewer_protocol_policy  = "redirect-to-https"
    compress                = true
    # AWS-managed "CachingOptimized" policy.
    cache_policy_id         = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }

  # The Ember router uses history-mode URLs (e.g. /venue, /talk/123).
  # S3/CloudFront know nothing about client-side routes, so a hard refresh
  # or deep link on any non-root path would otherwise 403 (private bucket)
  # or 404. Both cases fall back to index.html so the Ember router can take
  # over and resolve the route itself.
  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
