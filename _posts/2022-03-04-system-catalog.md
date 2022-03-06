---
layout: post
title: "System Catalogs"
excerpt: "Touch"
tags: [security]
date: "2022-03-04"
file: "system-catalogs"
image:
# catalog-card-1900x500.png
  feature: https://user-images.githubusercontent.com/300046/156939748-04d5695c-966c-4fa4-bd30-5986992ade0c.png
  credit: Vox
  creditlink: https://www.vox.com/culture/2017/4/21/15357984/card-catalog-library-of-congress-history
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://aws.amazon.com/servicecatalog/">
The AWS Service Catalog service</a> enables you to "Create, organize, and govern your curated catalog of AWS products" that is centrally managed. Each service is approved for use and can include virtual machine images, servers, software, and databases -- complete multi-tier application architectures. 
This helps achieve consistent governance and meet your compliance requirements, while enabling users to quickly deploy only the approved IT services they need. 

AWS Service Catalog <strong>AppRegistry</strong> helps organizations understand the application context of AWS resources. Define and manage your applications and their metadata, to keep track of cost, performance, security, compliance, and operational status at the application level.

AWS Service Catalog AppRegistry provides a single repository for collecting and managing application resources on AWS. You define your application metadata, which may include information from your internal systems, other AWS services, and software vendors. Builders can include a reference to their application within the infrastructure code, and business stakeholders have up-to-date information on application contents and metadata, such as organizational ownership, data sensitivity, and cost center.

## Terraform

The official HashiCorp AWS provider supports AWS Service Catalog resources. 

The Terraform user that authenticates the AWS account must have access to the AWS Service Catalog products. 
For more information, see AWS Provider in the Terraform documentation.

Create a deployment using Launch Wizard by choosing the Create an AWS Service Catalog product option in the infrastructure settings in Launch Wizard. For more information, see https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-sap-deploying.html#launch-wizard-sap-infrastructure 
Define infrastructure.

The IAM user that authenticates the AWS account must have permissions to use the AWS Service Catalog products created by Launch Wizard. For steps to grant access to users, see Granting Access to Users in the AWS Service  Catalog User Guide.  https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html

Or, integrate the products with their existing Terraform workflows. Administrators can create AWS Service Catalog portfolios and add Launch Wizard products to them using Terraform.

https://catalog.us-east-1.prod.workshops.aws/workshops/d40750d7-a330-49be-9945-cde864610de9/en-US/3-infra-sec/first-terraform
Workshop works with CloudFormation YAML files.

https://www.g2.com/compare/aws-service-catalog-vs-hashicorp-terraform

https://github.com/aws-samples/aws-service-catalog-terraform-reference-architecture

But <a target="_blank" href="https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-sap-service-catalog-terraform.html">thisn AWS doc</a> provided a sample Terraform script:

   <pre>terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.54.0"
    }
  }
}
provider "aws" {
  profile = "default"
  region  = "us-east-1"
}
resource "random_id" "id" {
  byte_length = 8
}
#Confirm user can launch product  - No launch paths has many reasons for failure:
resource "aws_servicecatalog_provisioned_product" "singlenodehana" {
  name = "tef-${random_id.id.hex}"
  product_id = "prod-abc1234546"
  provisioning_artifact_id = "pa-xyz12345"
  provisioning_parameters {
        key = "HANASID"
        value = "HDB"
  }
  provisioning_parameters {
        key = "HANAHostname"
        value = "saphanadev"    
  }
tags = {
    TFLaunched= "True"
  }
}
</pre>

https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/servicecatalog_product

https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/servicecatalog_provisioning_artifact

https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/servicecatalog_provisioned_product

The Terraform resource "<tt>aws_servicecatalog_provisioned_product</tt>" is used to launch the AWS Service Catalog product "<tt>singlenodehana</tt>" created with Launch Wizard and saved to AWS Service Catalog using Terraform. 
It launches a single node HANA database instance with a single node HANA product_id (prod-abc1234546) created with <strong>Launch Wizard</strong> using the product_artifact_id version (pa-xyz12345). The hostname for HANA and the SID for HANA DB are passed to override the defaults. 

Not in the file are parameters set to the defaults in the AWS Service Catalog product.

https://kandi.openweaver.com/java/aws-samples/aws-service-catalog-terraform-reference-architecture


## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
