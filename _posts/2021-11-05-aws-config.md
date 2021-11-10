---
layout: post
title: "AWS Config (Compliance-as-Code)"
excerpt: "Audit AWS resource configrations and automatically remediate issues found using OPA Rego "
tags: [DevOps,Security]
date: "2021-11-05"
file: "aws-config"
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

“Compliance-as-Code” workflow 

Several mechanisms automaticaly assess, audit, and evaluate the configuration of AWS resource configurations (manually in GUI or by Terraform/CloudFormation):

   * TFSec (by Aqua Security) on laptop/server
   * Terraform Atlantis (open source) on laptop/server

   * Terraform Enterprise Cloud SaaS with Sentinel (from Hashicorp)

   * AWS Config SaaS using Lambda OPA engine processing rules written in <a href="#RegoLang">Rego</a>
   * AWS Security Hub SaaS
   <br /><br />

NOTE: AWS GuardDuty???

Many rules are common in several mechanisms above.

The first group (TFSec and Atlantis) can be performed on a Mac/Windows laptop.
The rest are performed by a service.

AWS Security Hub use only AWS managed rules and focus only on Security issues.

AWS Config has both AWS-managed and <strong>custom rules</strong> focusing on Cost Optimization as well as Security.

PROTIP: The more <a target="_blank" href="https://wilsonmar.github.io/well-architected-cloud/">aspects of cloud usage</a> covered, the more likely people will buy into the work here.

NOTE: <a target="_blank" href="https://aws.amazon.com/audit-manager/">AWS Audit Manager</a> 
uses compliance evaluation data produced by AWS Config to simplify the process of collecting audit evidence.

DockerBench 

## AWS Config

<a target="_blank" href="https://user-images.githubusercontent.com/300046/140753439-877d6ac4-df86-4e79-b36c-3576bda7c9d4.png"><img alt="aws-config-rego-696x514" width="696" height="514" src="https://user-images.githubusercontent.com/300046/140753439-877d6ac4-df86-4e79-b36c-3576bda7c9d4.png"></a>

AWS Config detects changes in AWS resource configurations as "Configuration Items". Changes triggers Lambda to evaluate <strong>custom rules</strong>. Lambda uses an <a target="_blank" href="https://www.openpolicyagent.org/docs/latest/">OPA (Open Policy Agent) Engine</a> to evaluate rules stored in S3. 

Results (of compliant or non compliant) are returned in a JSON file within a Policy S3 bucket.


In the <a target="_blank" href="https://github.com/getcft/aws-config-cf-template">
CloudFormation template which creates KMS encryption key, an encrypted S3 bucket, and enables AWS Config</a>, ...


## Managed Rules for AWS Config

By default AWS Config provides managed rules that address the most common use cases for evaluating compliance. Over 200 such rules are described at <a target="_blank" href="
https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">
https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html</a>
(QUESTION: Where is the code? case 9177818611)

<a target="_blank" href="https://aws.amazon.com/blogs/mt/using-aws-config-security-analysis-resource-administration/" title="18 SEP 2020">
People at Lending Tree found these AWS-manged Config rules helpful in <strong>detection</strong></a>:

   1. <a target="_blank" href="https://docs.aws.amazon.com/config/latest/developerguide/ec2-security-group-attached-to-eni.html">ec2-security-group-attached-to-eni</a> returns NON_COMPLIANT for security groups not associated with an Amazon EC2 instance or an elastic network interface.
   
   2. <a target="_blank" href="https://docs.aws.amazon.com/config/latest/developerguide/restricted-common-ports.html">restricted-common-ports</a> returns COMPLIANT when IP addresses of incoming SSH traffic in the security group are restricted to specified ports (restricts incoming TCP traffic to specified ports).
   
   3. <a target="_blank" href="https://docs.aws.amazon.com/config/latest/developerguide/restricted-ssh.html">restricted-ssh</a> returns COMPLIANT when IP addresses of the incoming SSH traffic in the security groups are restricted.

   4. <a target="_blank" href="https://docs.aws.amazon.com/config/latest/developerguide/vpc-default-security-group-closed.html">vpc-default-security-group-closed</a> returns COMPLIANT if the default security group of any Amazon Virtual Private Cloud (VPC) has one or more inbound or outbound traffic rules (). NOT_APPLICABLE is returned if the security group is not default.

Notice AWS's managed rules are mostly about security, and less about cost optimization, Reliability, and Performance.

## Custom Rules for AWS Config

But there are possibilities to <strong>save money</strong>, improve performance, etc.

AWS Config also supports <strong>custom rules</strong> that allow you to define your own logic by using AWS Lambda and one of the programming languages supported by AWS Lambda.

1. Cost Optimization: Identify when two EC2 nodes within the same AZ communicate with each other via a public port, because network charges would accrue, unlike when EC2 nodes communicate via private lines.

<a target="_blank" href="https://cloudone.trendmicro.com/conformity/">
Trend Micro's product "Conformity" provides 750+ rules as part of their "CloudOne" Security Platform</a>.

## AWS Config Conformance packs 

Since AWS Config is a SaaS service, it centralizes the collection of compliance data across a whole organization.

"Conformance Packs" generalize rules for organization-wide deployment.

<a target="_blank" href="https://github.com/awslabs/aws-config-rules/tree/master/aws-config-conformance-packs">Sample config rules in Conformace Packs</a>

<a target="_blank" href="https://aws.amazon.com/blogs/mt/using-opa-to-create-aws-config-rules/">
BLOG</a>: AWS Config custom rules are written in the Rego language processed by the general-purpose Open Policy Agent (OPA).




<a name="RDK"></a>

## RDK (AWS Config Rule Development Kit)

The <a target="_blank" href="https://aws.amazon.com/blogs/mt/how-to-develop-custom-aws-config-rules-using-the-rule-development-kit/">AWS Config Rule Development Kit (RDK)</a> enables rapid deployment of custom AWS Config rules within a single AWS account.

<a target="_blank" href="https://aws.amazon.com/blogs/mt/aws-config-rdk-multi-account-and-multi-region-deployment/" title="by Avik Mukherjee on 23 JAN 2019">AWS Config RDK: Multi-account and multi-Region</a> shows deployment at scale across multiple AWS accounts and Regions. With multiple regions, also needed is a <strong>centralized dashboard</strong> to view AWS Config rule compliance status across various AWS accounts.

<a target="_blank" href="https://controltower.aws-management.tools/security/config/">
AWS Config with RDK (Rule Development Kit)</a> within AWS Organizatons Control Tower.
https://github.com/awslabs/aws-config-rdk



## OPA

https://github.com/open-policy-agent/opa

OPA is purpose-built for reasoning about information represented in structured documents. 

OPA is about a 20MB binary that can be run at close to the software needing policy decisions as possible, often as a sidecar.

Open Policy Agent provides a unified policy language that can be enforced across the cloud-native stack (Kubernetes, Kafka, Spinnaker CI/CD, Terraform, Kong, etc.) 

Rego is also used within the Kubernetes Admission Controller to validate logic in deployment descriptors before applying them to a cluster. One example of this is creating a policy that only allows deployments that reference containers from trusted repositories.

Conftest is the name of the subproject that runs OPA policies against files on a file system. 

Gatekeeper is the subproject that integrates OPA with Kubernetes admission control.

OPA has 50+ built-in functions (strings, numbers, regexps, network CIDRs, JWTs, arrays, objects, sets, etc.).


See https://blog.styra.com/blog/origin-of-open-policy-agent-rego


<a name="RegoLang"></a>

## Rego language

Rego is <a target="_blank" href="https://www.openpolicyagent.org/docs/latest/policy-language/">described</a>as a the native query language Rego for OPA processing <strong>nested documents</strong>.

Rego is <strong>declarative</strong> queries are assertions on data stored in OPA. So policy authors can focus on what queries should return rather than how queries should be executed. These queries are simpler and more concise than the equivalent in an imperative language.

The queries define policies that enumerate instances of data that violate the expected state of the system.

If all the statements in the body hold to be true, the return value is "ground" (i.e a constant).

STAR: Take the <a target="_blank" href="https://academy.styra.com/courses/opa-rego">OPA Policy Authoring course</a> by Tim Hinrichs (@tlhinrichs), CTO of Straya, OPA's inventor.

   * https://medium.com/@mathurvarun98/how-to-write-great-rego-policies-dc6117679c9f
   * https://www.fugue.co/blog/5-tips-for-using-the-rego-language-for-open-policy-agent-opa
   <br /><br />



<a name="AutoRemediation"></a>

## Automatic Remediation

<a target="_blank" href="https://awesomeopensource.com/project/servian/aws-auto-remediate">
https://awesomeopensource.com/project/servian/aws-auto-remediate</a>

A more in-depth explanation is this diagram from <a target="_blank" href="https://learnd.cantrill.io">Andrew Cantrill's excellent video certification prep. courses</a>:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/140831812-85cf9c3d-e284-4cfb-a6f4-a942c2101c92.png">
<img alt="aws-config-cantrill-1449x754" src="https://user-images.githubusercontent.com/300046/140831812-85cf9c3d-e284-4cfb-a6f4-a942c2101c92.png"></a>



<a target="_blank" href="https://user-images.githubusercontent.com/300046/141043364-76aa7559-9041-4680-b5e6-afbe038e2aad.png">
<img width="888" alt="aws-config-auto-remediate-1776x1036" src="https://user-images.githubusercontent.com/300046/141043364-76aa7559-9041-4680-b5e6-afbe038e2aad.png"></a>


## Troubleshooting

When actions fail, triage using the AWS SSM service console GUI -> Automation -> executed tasks, 
or <a target="_blank" href="https://medium.com/4th-coffee/deleting-unused-security-groups-in-aws-automatically-an-introduction-to-aws-config-6313f65e424d">
this AWS CLI command</a>:

<pre><strong>aws configservice describe-remediation-execution-status \
   -config-rule-name "$MY_CONFIG_RULE_NAME" -region "$MY_REGION""
</strong></pre>


## References

<a target="_blank" href="https://www.youtube.com/watch?v=qHdFoYSrUvk" title="Feb 27, 2020">
AWS Config Tutorial</a>

<a target="_blank" href="https://aws.amazon.com/blogs/security/how-to-use-aws-config-to-monitor-for-and-respond-to-amazon-s3-buckets-allowing-public-access/">
how-to-use-aws-config-to-monitor-for-and-respond-to-amazon-s3-buckets-allowing-public-access</a>

<a target="_blank" href="https://www.youtube.com/watch?v=fBewaclMo2s" title="Nov 25, 2018">
Easily Transform Compliance to Code Using AWS Config, Config Rules, and the Rules Development Kit</a>

<a target="_blank" href="https://www.youtube.com/watch?v=PD9S5xGC16g" title="Oct 4, 2019">
Remediate Non-Compliance Using AWS Config Rules, AWS CloudWatch Events, & AWS Lambda Functions</a>

<a target="_blank" href="https://www.youtube.com/watch?v=BoHJVGzq-58" title="May 2, 2017">
AWS Config - Rules, Resources & Timelines with DEMO | IMPORTANT Security Service</a>

