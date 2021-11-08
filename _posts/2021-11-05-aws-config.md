---
layout: post
title: "AWS Config"
excerpt: "Audit AWS resource configrations"
tags: [DevOps,Security]
date: "2021-11-05"
file: "aws-config"
image:
# loadbal-zerolb-1900x500.jpg https://user-images.githubusercontent.com/300046/128948431-767b3fe7-c833-4285-a648-95f0bf80b807.jpg
  feature: https://user-images.githubusercontent.com/300046/140726688-ff30648a-d4ff-44dc-99bb-d465a0128365.png
  credit: Kong
  creditlink: https://thenewstack.io/zerolb-a-new-decentralized-pattern-for-load-balancing/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


Several mechanisms can assess, audit, and evaluate the configuration of AWS resource configurations:

   * TFSec (by Aqua Security)
   * Terraform Atlantis (open source)

   * Terraform Sentinel (from Hashicorp)

   * AWS Config using Lambda OPA engine processing rules written in <a href="#RegoLang">Rego</a>
   * AWS Security Hub 
   <br /><br />

The first group (TFSec and Atlantis) can be performed on a Mac/Windows laptop.
The rest are performed by a service.

AWS Config enables you to <strong>customize rules</strong>.

Findings by AWS Security Hub are based on rules defined by AWS.


NOTE: <a target="_blank" href="https://aws.amazon.com/audit-manager/">AWS Audit Manager</a> 
uses compliance evaluation data produced by AWS Config to simplify the process of collecting audit evidence.


## AWS Config

<a target="_blank" href="https://user-images.githubusercontent.com/300046/140753439-877d6ac4-df86-4e79-b36c-3576bda7c9d4.png"><img alt="aws-config-rego-696x514" width="696" height="514" src="https://user-images.githubusercontent.com/300046/140753439-877d6ac4-df86-4e79-b36c-3576bda7c9d4.png"></a>

AWS Config detects changes in AWS resource configurations as "Configuration Items". Changes triggers Lambda to evaluate <strong>custom rules</strong>. Lambda uses an <a target="_blank" href="https://www.openpolicyagent.org/docs/latest/">OPA (Open Policy Agent) Engine</a> to evaluate rules stored in S3. 

Results (of compliant or non compliant) are returned in a Policy S3 bucket.

A more in-depth explanation is this diagram from Andrew Cantrill's excellent $200 video course:




## AWS Config Conformance packs 

Since AWS Config is a SaaS service, it centralizes the collection of compliance data across a whole organization.

"Conformance Packs" generalize rules for organization-wide deployment.

<a target="_blank" href="https://github.com/awslabs/aws-config-rules/tree/master/aws-config-conformance-packs">Sample config rules in Conformace Packs</a>

<a target="_blank" href="https://aws.amazon.com/blogs/mt/using-opa-to-create-aws-config-rules/">
BLOG</a>: AWS Config custom rules are written in the Rego language processed by the general-purpose Open Policy Agent (OPA).



## Rules for AWS Config

AWS Config provides managed rules that address the most common use cases for evaluating compliance. AWS Config also supports custom rules that allow you to define your own logic by using AWS Lambda and one of the programming languages supported by AWS Lambda.

QUESTION: How to identify when two EC2 nodes within the same AZ communicate with each other via a public port, because network charges would accrue, unlike when EC2 nodes communicate via private lines.


https://github.com/getcft/aws-config-cf-template
AWS Config CloudFormation template which creates KMS encryption key, an encrypted S3 bucket, and enables AWS Config.


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



## References

https://www.youtube.com/watch?v=qHdFoYSrUvk
AWS Config Tutorial
19,323 views
Feb 27, 2020

https://aws.amazon.com/blogs/security/how-to-use-aws-config-to-monitor-for-and-respond-to-amazon-s3-buckets-allowing-public-access/

https://www.youtube.com/watch?v=fBewaclMo2s
Easily Transform Compliance to Code Using AWS Config, Config Rules, and the Rules Development Kit
Nov 25, 2018

https://www.youtube.com/watch?v=PD9S5xGC16g
Remediate Non-Compliance Using AWS Config Rules, AWS CloudWatch Events, & AWS Lambda Functions
7,209 views
Oct 4, 2019

https://www.youtube.com/watch?v=BoHJVGzq-58
AWS Config - Rules, Resources & Timelines with DEMO | IMPORTANT Security Service
24,342 views
May 2, 2017

