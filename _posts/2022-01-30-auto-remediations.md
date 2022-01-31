---
layout: post
title: "Automatic remediations (of Vulnerabilities in AWS)"
excerpt: "Dynamically audit AWS resource configrations using using OPA Rego, Lambda alerts using SNS through EventBridge, then automatically remediate (via SSM)"
tags: [DevOps,Security, AWS]
date: "2022-01-30"
file: "auto-remediations"
image:
# aws-config-rego-1900x500
  feature: https://user-images.githubusercontent.com/300046/141044341-94768793-00e5-4702-a719-293931ff3e6e.png
  credit: AWS
  creditlink: https://aws.amazon.com/blogs/mt/using-opa-to-create-aws-config-rules/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


Security threats are getting more and more clever and incidious.
So a <strong>quicker and more thorough</strong> response to remediation is necessary in today's world. 

There are mechanisms:

   1. <strong>Scan IaC (Infrastructure as Code)</strong> (Terraform and CloudFormation) using TFSec and <a href="#IaCScanTools">similar IaC scan tools</a>, before they are used to create resources in AWS. This is a "shift left" approach <strong>while on laptops</strong>. This is needed because by the time that vulnerabilities are spotted in AWS Config and AWS Security Hub, the vulnerability already exists. This evaluation can be repeated as part of every CI/CD infra deploy pipeline run.

   2. <strong>Scan for vulnerable conditions</strong> within AWS resources. This is done by AWS Config, which logs every change to AWS configurations in the GUI, CLI, or API.

   3. When a vulnerability is identified, trigger an alert for manual follow-up. This is what AWS Security Hub does.

   4. When a vulnerability is identified, trigger <a href="#AutoRemediation">automated remediations</a> (where appropriate) for quick responsse rather than waiting days or weeks for manual work. This also <strong>reduces toil</strong> in manual effort. PROTIP: Start with automating just SGs, so that you'll be prepared to do other automated remediations for responding quickly to vulnerabilities.

We will do it all:

   1. Define the logic to identify concerns in infrastructure evaluate policies, defined as code (PaC). This is done by Terraform Enterprise Cloud.

   4. One-click cross-account remediation. When vulnerabilities are identified in one account, immediately analyze other accounts for similar concerns. Easily deploy the solution across primary and member accounts.


<hr />

<a name="IaCScanTools"></a>a

## IaC Scan Tools

Several mechanisms automatically assess, audit, evaluate, and even remediate the configuration of AWS resource configurations (manually in GUI or by Terraform/CloudFormation Infrastructure as Code):

   * <a href="#TFSec">TFSec.dev (by Aqua Security)</a> for shifting security left onto  developer laptops.

   * <a target="_blank" href="https://wilsonmar.github.io/terraform/">Terraform open source (with Atlantis Policy-as-Code)</a> on laptop/server

   * <a target="_blank" href="https://wilsonmar.github.io/tfe">Terraform Enterprise Cloud SaaS</a> with Sentinel Policy-as-code (from Hashicorp)

   * <a target="_blank" href="https://aws.amazon.com/securityhub">AWS Security Hub SaaS</a> uses only pre-defined AWS-managed static rules
   * <a target="_blank" href="https://aws.amazon.com/config">AWS Config</a> SaaS using Lambda to invoke an OPA engine processing <strong>custom</strong> static rules written in <a href="#RegoLang">Rego</a>
   <br /><br />

The first group (TFSec and Atlantis) can be performed on a Mac/Windows laptop.
The rest are performed by a service.


<a name="Policies"></a>

## Policies

Within AWS: 

   * IAM Policies
   * Cloud Formation Stack Policies
   * Application Autoscaling Policies
   * Backup Vault Access Policies
   * CloudFront Cache Policies
   * CloudFront Origin Request Policies
   * CloudWatch Resource Policies
   * CloudWatch Retention Policies
   * ECR Lifecycle Policies, Registry Policies, Repository Policies
   * EMR Managed Scaling Policies
   * KMS Key Policies
   * 
   <br /><br />

<a name="AutoDetect"></a>

## Automatic Detection by TFSec, etc.



<a name="TFSec"></a>

## TFSec for AWS

At time of writing, there were 70 rules at <a target="_blank" href="https://tfsec.dev/docs/aws/home/">https://tfsec.dev/docs/aws/home</a>. TODO: Compare against AWS rules.

* A KMS key is not configured to auto-rotate. - aws-lambda-enable-tracing
* AWS ES Domain should have logging enabled - aws-elastic-search-encrypt-replication-group
* aws_instance should activate session tokens for Instance Metadata Service. - aws-ec2-no-secrets-in-user-data

* aws-api-gateway-enable-access-logging - API Gateway stages for V1 and V2 should have access logging enabled
* aws-api-gateway-enable-cache-encryption - API Gateway must have cache enabled
* aws-api-gateway-enable-tracing - API Gateway must have X-Ray tracing enabled
* aws-api-gateway-no-public-access - No public access to API Gateway methods
* aws-api-gateway-use-secure-tls-policy - API Gateway domain name uses outdated SSL/TLS protocols.

* aws-athena-enable-at-rest-encryption - Athena databases and workgroup configurations are created unencrypted at rest by default, they should be encrypted
* aws-athena-no-encryption-override - Athena workgroups should enforce configuration to prevent client disabling encryption

* aws-autoscaling-enable-at-rest-encryption - Launch configuration with unencrypted block device.
* aws-autoscaling-no-public-ip - A resource has a public IP address.

* aws-cloudfront-enable-logging - Cloudfront distribution should have Access Logging configured
* aws-cloudfront-enable-waf - CloudFront distribution does not have a WAF in front.
* aws-cloudfront-enforce-https - CloudFront distribution allows unencrypted (HTTP) communications.
* aws-cloudfront-use-secure-tls-policy - CloudFront distribution uses outdated SSL/TLS protocols.

* aws-cloudtrail-enable-all-regions - Cloudtrail should be enabled in all regions regardless of where your AWS resources are generally homed
* aws-cloudtrail-enable-at-rest-encryption - Cloudtrail should be encrypted at rest to secure access to sensitive trail data
* aws-cloudtrail-enable-log-validation - Cloudtrail log validation should be enabled to prevent tampering of log data

* aws-cloudwatch-log-group-customer-key - CloudWatch log groups should be encrypted using CMK
* CloudWatch log groups should be encrypted using CMK - aws-codebuild-enable-encryption

* aws-ecs-enable-container-insight - ECS clusters should have container insights enabled
* aws-ecs-enable-in-transit-encryption - ECS Task Definitions with EFS volumes should use in-transit encryption
* aws-ecs-no-plaintext-secrets - Task definition defines sensitive environment variable(s).

* aws-launch-no-sensitive-info - Ensure all data stored in the Launch configuration EBS is securely encrypted
* CodeBuild Project artifacts encryption should not be disabled - aws-config-aggregate-all-regions
* Config configuration aggregator should be using all regions for source - aws-documentdb-enable-log-export
* DAX Cluster should always encrypt data at rest - aws-dynamodb-enable-recovery

* DocumentDB encryption should use Customer Managed Keys - aws-dynamodb-enable-at-rest-encryption
* DocumentDB logs export should be enabled - aws-documentdb-enable-storage-encryption
* DocumentDB storage must be encrypted - aws-documentdb-encryption-customer-key

* Domain logging should be enabled for Elastic Search domains - aws-elastic-search-enable-in-transit-encryption
* DynamoDB tables should use at rest encryption with a Customer Managed Key - aws-ebs-enable-volume-encryption

* EBS volume encryption should use Customer Managed Keys - aws-ec2-enforce-http-token-imds
* EBS volumes must be encrypted - aws-ebs-encryption-customer-key

* ECR images tags shouldn’t be mutable. - aws-ecr-no-public-access
* ECR repository has image scans disabled. - aws-ecr-enforce-immutable-repository
* ECR repository policy must block public access - aws-ecr-repository-customer-key
* ECR Repository should use customer managed keys to allow more control - aws-ecs-enable-container-insight

* EFS Encryption has not been enabled - aws-eks-enable-control-plane-logging

* EKS cluster should not have open CIDR range for public access - aws-elastic-search-enable-domain-logging
* EKS Clusters should have cluster control plane logging turned on - aws-eks-encrypt-secrets
* EKS Clusters should have the public access disabled - aws-eks-no-public-cluster-access-to-cidr
* EKS should have the encryption of secrets enabled - aws-eks-no-public-cluster-access

* Elasticache Replication Group uses unencrypted traffic. - aws-elb-drop-invalid-headers

* Elasticsearch doesn’t enforce HTTPS traffic. - aws-elastic-search-use-secure-tls-policy
* Elasticsearch domain endpoint is using outdated TLS policy. - aws-elastic-service-enable-domain-encryption
* Elasticsearch domain isn’t encrypted at rest. - aws-elasticache-add-description-for-security-group
* Elasticsearch domain uses plaintext traffic for node to node communication. - aws-elastic-search-enable-logging

* Ensure that lambda function permission has a source arn specified - aws-launch-no-sensitive-info

* IAM customer managed policies should not allow decryption actions on all KMS keys - aws-iam-no-password-reuse
* IAM Password policy should have expiry less than or equal to 90 days. - aws-iam-set-minimum-password-length
* IAM Password policy should have minimum password length of 14 or more characters. - aws-kinesis-enable-in-transit-encryption
* IAM Password policy should have requirement for at least one lowercase character. - aws-iam-require-numbers-in-passwords
* IAM Password policy should have requirement for at least one number in the password. - aws-iam-require-symbols-in-passwords
* IAM Password policy should have requirement for at least one symbol in the password. - aws-iam-require-uppercase-in-passwords
* IAM Password policy should have requirement for at least one uppercase character. - aws-iam-set-max-password-age
* IAM Password policy should prevent password reuse. - aws-iam-no-policy-wildcards
* IAM policy should avoid use of wildcards and instead apply the principle of least privilege - aws-iam-require-lowercase-in-passwords

* Kinesis stream is unencrypted. - aws-kms-auto-rotate-keys
* Lambda functions should have X-Ray tracing enabled - aws-lambda-restrict-source-arn
* Load balancer is exposed to the internet. - aws-elbv2-http-not-used
* Load balancers should drop invalid headers - aws-elbv2-alb-not-public
* Missing description for security group/security group rule. - aws-elasticache-enable-backup-retention
* Point in time recovery should be enabled to protect DynamoDB table - aws-dynamodb-table-customer-key
* Redis cluster should have backup retention turned on - aws-elasticache-enable-in-transit-encryption
* Task definition defines sensitive environment variable(s). - aws-efs-enable-at-rest-encryption
* Unencrypted Elasticache Replication Group. - aws-elastic-search-enforce-https
* Use of plain HTTP - aws-iam-block-kms-policy-wildcard
* User data for EC2 instances must not contain sensitive AWS keys - aws-ecr-enable-image-scans
<br /><br />



<a name="AutoRemediation"></a>

## Automate Remediations

   * <a target="_blank" href="https://awesomeopensource.com/project/servian/aws-auto-remediate">BLOG: https://awesomeopensource.com/project/servian/aws-auto-remediate</a>
   <br /><br />

Where appropriate, automated remediation of policy non-conformance <strong>reduces toil</strong> in manual effort. One example is removing AWS Security Groups that AWS automatically creates with EC2 and RDS, but still persists after those resources are deleted and no longer associated with any resource.

* <a href="#DelviaTerraform">Delete SG using Terraform</a>
* <a href="#SSMviaSecHub">AWS System Manager via AWS Security Hub</a>
* <a href="#LambdaDirect">Call Lambda directly</a>
* <a href="#LambdaEventBridge">Call Lambda via EventBridge</a>


<hr />


<a name="DelviaTerraform"></a>

## Delete SG using Terraform

This approach involves running Terraform after it provisions AWS.

<a target="_blank" href="https://medium.com/4th-coffee/deleting-unused-security-groups-in-aws-automatically-an-introduction-to-aws-config-6313f65e424d">This blog</a> makes use of <a target="_blank" href="https://raw.githubusercontent.com/IronCore864/tf-aws-config/main/main.tf">this main.tf Terraform file</a>.

1. Resource "aws_config_config_rule" checks if all security groups are attached.

2. Resource "aws_iam_role" is used by the remediation action. To remediate the non-compliant security groups, the role needs to execute an SSM Automation document, and it needs to be able to describe and delete a security group. Here the least privilege principle is used.

3. Resource "aws_iam_policy" defines Allow permissions for ssm (Service Manager) roles.

4. Resource "aws_iam_policy_attachment" assumes the role.

5. Resource "aws_config_remediation_configuration" defines the remediation action, which triggers the AWS-managed SSM automation document to delete the unused security group.

CAUTION: The above must be run manually in the console until Hashicorp implements <a target="_blank" href="https://github.com/hashicorp/terraform-provider-aws/issues/15491">this issue</a>.

https://stackoverflow.com/questions/66868470/lambda-security-group-deletion-hanging-and-cant-be-deleted-in-aws-console


<a name="SSMviaSecHub"></a>

## AWS System Manager via AWS Security Hub

https://aws.amazon.com/solutions/implementations/aws-security-hub-automated-response-and-remediation/
and https://docs.aws.amazon.com/solutions/latest/aws-security-hub-automated-response-and-remediation/welcome.html
proposes this using https://github.com/aws-solutions/aws-security-hub-automated-response-and-remediation
with https://docs.aws.amazon.com/solutions/latest/aws-security-hub-automated-response-and-remediation/aws-security-hub-automated-response-and-remediation.pdf

<a target="_blank" href="https://user-images.githubusercontent.com/300046/142207571-91faf24c-885e-4756-8e29-615aa349bf7e.png">
<img width="521" alt="aws-security-hub-automated-response-architecture 11b409c38904e473e603f41e828405eafb30e68d" src="https://user-images.githubusercontent.com/300046/142207571-91faf24c-885e-4756-8e29-615aa349bf7e.png"></a>

1. <strong>Detect</strong>: This command identifies

2. Ingest.

3. Remediate.

   Removal of resources can be done by <a target="_blank" href="https://aws.amazon.com/systems-manager/">>AWS System Manager</a> (aka SSM), the same technology also used to <a target="_blank" href="https://www.youtube.com/watch?v=Dm4id0FVhtc">apply patches in AWS resources</a>). 

   <a target="_blank" href="https://aws.amazon.com/solutions/implementations/aws-security-hub-automated-response-and-remediation/?did=sl_card&trk=sl_card">
   AWS Security Hub Automated Response and Remediation</a>: 

   So, instead <a target="_blank" href="https://blogs.tensult.com/2019/12/23/automated-deletion-of-unused-aws-security-groups/">use CloudFormation</a> 


<a name="LambdaDirect"></a>

## Call Lambda directly

Alternately, custom AWS Lambda functions can be used:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/141043364-76aa7559-9041-4680-b5e6-afbe038e2aad.png">
<img width="888" alt="aws-config-auto-remediate-1776x1036" src="https://user-images.githubusercontent.com/300046/141043364-76aa7559-9041-4680-b5e6-afbe038e2aad.png"></a>


<a name="LambdaEventBridge"></a>

## Call Lambda via EventBridge

A more in-depth explanation is this diagram from <a target="_blank" href="https://learnd.cantrill.io">Andrew Cantrill's excellent video certification prep. courses</a>:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/140831812-85cf9c3d-e284-4cfb-a6f4-a942c2101c92.png">
<img alt="aws-config-cantrill-1449x754" src="https://user-images.githubusercontent.com/300046/140831812-85cf9c3d-e284-4cfb-a6f4-a942c2101c92.png"></a>

The above diagram illustrates how Config rules can call on the <a target="_blank" href="https://aws.amazon.com/eventbridge/">AWS EventBridge</a> SaaS streaming serverless <strong>event bus</strong>.


<hr />

## Setup OPA

<a target="_blank" href="https://aws.amazon.com/blogs/mt/using-opa-to-create-aws-config-rules/">
BLOG</a>: AWS Config custom rules are written in the Rego language processed by the general-purpose Open Policy Agent (OPA).

https://github.com/open-policy-agent/opa

Lambda can use an <a target="_blank" href="https://www.openpolicyagent.org/docs/latest/">OPA (Open Policy Agent) Engine</a> to evaluate rules stored in S3. 

OPA is purpose-built for reasoning about information represented in structured documents. 

OPA is about a 20MB binary that can be run at close to the software needing policy decisions as possible, often as a sidecar.

Open Policy Agent provides a unified policy language that can be enforced across the cloud-native stack (Kubernetes, Kafka, Spinnaker CI/CD, Terraform, Kong, etc.) 

Rego is also used within the Kubernetes Admission Controller to validate logic in deployment descriptors before applying them to a cluster. One example of this is creating a policy that only allows deployments that reference containers from trusted repositories.

Conftest is the name of the subproject that runs OPA policies against files on a file system. 

Gatekeeper is the subproject that integrates OPA with Kubernetes admission control.

OPA has 50+ built-in functions (strings, numbers, regexps, network CIDRs, JWTs, arrays, objects, sets, etc.).

https://blog.styra.com/blog/origin-of-open-policy-agent-rego

<a target="_blank" href="https://github.com/aws-samples/aws-management-and-governance-samples.git">https://github.com/aws-samples/aws-management-and-governance-samples.git</a> (from AWS) is a collection of code samples for the Management and Governance services which includes: CloudWatch, CloudFormation, Cloudtrail, Config, Systems Manager, and more.

contains cfn_templates (CloudFormation templates) to deploy Lambda function and AWS Config rules; lambda_sources source file for the Lambda function and the OPA binary that is a deployed as a layer for the Lambda function. Packaged sources are under the packaged_lambda_assets directory. opa_policies contains Rego policies that correspond to rules deployed by CloudFormation templates.



<a name="RegoLang"></a>

## Rego language

Rego is <a target="_blank" href="https://www.openpolicyagent.org/docs/latest/policy-language/">described</a> the native query language Rego for OPA processing <strong>nested documents</strong>.

Rego is <strong>declarative</strong> queries are assertions on data stored in OPA. So policy authors can focus on what queries should return rather than how queries should be executed. These queries are simpler and more concise than the equivalent in an imperative language.

The queries define policies that enumerate instances of data that violate the expected state of the system.

If all the statements in the body hold to be true, the return value is "ground" (i.e a constant).

STAR: Take the <a target="_blank" href="https://academy.styra.com/courses/opa-rego">OPA Policy Authoring course</a> by Tim Hinrichs (@tlhinrichs), CTO of Straya, OPA's inventor.

   * https://medium.com/@mathurvarun98/how-to-write-great-rego-policies-dc6117679c9f
   * https://www.fugue.co/blog/5-tips-for-using-the-rego-language-for-open-policy-agent-opa
   <br /><br />


<a name="Resources"></a>

## Resources




<a name="RemoveSG"></a>

## Security Group




