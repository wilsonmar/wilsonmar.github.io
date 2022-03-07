---
layout: post
title: "AWS Service Catalog"
excerpt: "Select your way to a set of services to assemble your app, with curated (known-safe) settings"
tags: [security]
date: "2022-03-04"
file: "aws-service-catalog"
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
The AWS Service Catalog service</a> enables you to "Create, organize, and govern your curated catalog of AWS products" that is <strong>centrally managed</strong>. 

The AWS Service Catalog <strong>AppRegistry</strong> defines an organization's application context of AWS resources. Define and manage applications and their metadata, to keep track of cost, performance, security, compliance, and operational status at the application level. AWS Service Catalog AppRegistry provides a single repository for collecting and managing application resources on AWS. You define your application metadata, which may include information from your internal systems, other AWS services, and software vendors. Builders can include a reference to their application within the infrastructure code, and business stakeholders have up-to-date information on application contents and metadata, such as organizational ownership, data sensitivity, and cost center.

The AWS Service Catalog is primarily made up of portfolios and products.
A portfolio can provide a number of products and have portfolio level settings such as tags, constraints, and permissions:
   * Launch constraints can be used to allow products to be deployed without giving an end user permission to interact with billable services directly.
   * Template constraints can be used to tune which options are available at launch; a good example would be restricting the instance type to a cheaper option like the t2 family when the environment matches development.
   * When dealing with tag options there is a hard limit set by AWS of 25 values per tag key; this limitation can be overcome by working on splitting large value options across multiple keys.
   <br /><br />

The ready portfolio can be deployed across several accounts; production, pre-production.

Each service offered can include virtual machine images, servers, software, and databases -- complete multi-tier application architectures. This helps achieve consistent governance and meet compliance requirements, while enabling users to quickly deploy only the approved IT services they need. 

Portfolio management can be assigned to specific users or roles so as to have a clear separation between the maintainer and customer’s end users.

Products can be versioned, and the end users given the choice on which version to deploy; these versions can also be used to migrate existing deployed products to newer versions of the underlying template.

The AWS Service Catalog is accompanied by CLI and SDK access, meaning you can programmatically deploy assigned products from your portfolio as part of your CI/CD pipeline.


Service Catalog products can be deployed via the console, the command line and SDKs, CloudFormation, or 3rd party infrastructure as code (IAC) tools such as Terraform.


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


## EC2 Terraform Server

https://awscloudfeed.com/whats-new/apn/using-terraform-to-manage-aws-programmable-infrastructures
Invoked by End User from AWS Service Catalog invoking Cloud Formation templates


## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
