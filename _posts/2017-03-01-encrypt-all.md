---
layout: post
title: "Encrypt-all (on AWS)"
excerpt: "How to store and send files securely using AWS KMS (Key Management Service)"
tags: [AWS, Security]
date: "2021-01-15"
file: "encrypt-all"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

There is now a way to encrypt <strong>clear (plain) text</strong> into <strong>cyphertext</strong> which is supposed to be unreadable to others while being stored "at rest" and while "in transit" over "hostile" public internet lines.

This tutorial aims to organize deep-dive insights and advice based on the combination of advice from several sources. Unlike others which first numb you with theory then have you mindlessly follow steps, I aim to provide commentary after each action.

Each cloud service (AWS with Azure with GCP, etc.) has its own mechanisms.

## AWS KMS (Key Management Service)

Let's pretend there are these users:

   * Mary, the Key Administrator
   * Alice, a valued user
   * Snape, a user who should no longer have access
   <br /><br />

PROTIP: <a target="_blank" href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/kms/index.html">KMS operations (commands) within AWS CLI</a> are arranged by topic here:

* update-primary-region
* tag-resource, list-resource-tags, untag-resource

* create-custom-key-store, connect-custom-key-store, describe-custom-key-stores, update-custom-key-store, disconnect-custom-key-store, delete-custom-key-store

* get-key-policy, list-key-policies, put-key-policy
* <a href="#Grants">Grants</a>: create-grant, list-grants, revoke-grant, list-retirable-grants, retire-grant
* create-key, describe-key, list-keys, replicate-key, enable-key, disable-key, schedule-key-deletion
* enable-key-rotation, get-key-rotation-status, disable-key-rotation

* import-key-material, delete-imported-key-material
* generate-data-key, generate-data-key-pair, generate-data-key-without-plaintext, generate-data-key-pair-without-plaintext

* encrypt, decrypt, re-encrypt, sign, verify
* generate-random, GenerateDataKey, GenerateDataKeyWithoutPlaintext
* get-public-key, 
* update-key-description
* get-parameters-for-import

* create-alias, list-aliases, update-alias, delete-alias
* cancel-key-deletion
<br /><br />


1. Provide Alice permissions

1. To encrypt a short sentence using the AWS CLI:

   <pre><strong>aws kms encrypt --plaintext "My little secret" --key-id alias/DemoKey \
   --profile Alice
   </strong></pre>

Let's dive right in. To get a full idea of the complexity of KMS, here are links to <a target="_blank" href="https://wilsonmar.github.io/terraform">Terraform IaC yaml</a>:

<table border="1" cellpadding="4" cellspacing="1">
<tr><th> Resource </th><th> Data sources </th></tr>
<tr valign="top"><td><a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_alias">Define/import</a> </td><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_alias">aws_kms_alias</a>
   </td></tr>
<tr valign="top"><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_ciphertext">Define/import</a> </td><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_ciphertext">aws_kms_ciphertext</a>
   </td></tr>
<tr valign="top"><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_key">Define/import</a> </td><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_key">aws_kms_key</a>
   </td></tr>
<tr valign="top"><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_external_key">aws_kms_external_key</a> </td><td> - 
   </td></tr>
<tr valign="top"><td> - </td><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_public_key">aws_kms_public_key</a>
   </td></tr>
<tr valign="top"><td> - </td><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_secret">aws_kms_secret</a>
   </td></tr>
<tr valign="top"><td> - </td><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_secrets">aws_kms_secrets</a> 
   </td></tr>
<tr valign="top"><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_grant">aws_kms_grant</a> </td><td> - 
   </td></tr>
<tr valign="top"><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_replica_key">aws_kms_replica_key</a> </td><td> - 
   </td></tr>
<tr valign="top"><td> <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_replica_external_key">aws_kms_replica_external_key</a> </td><td> - 
   </td></tr>
</table>

<a name="Encryption"></a>

## Envelop Encryption

References at CloudAcademy.com:
   * <a target="_blank" href="https://cloudacademy.com/course/s3-encryption-mechanisms/s3-encrypt-introduction/?context_resource=lp&context_id=4125">"Understanding S3 Encryption Mechanisms to Secure your Data"</a> by <a target="_blank" href="https://linkedin.com/in/stuartanthonyscott/">Stuart Scott</a>
   * <a target="_blank" href="https://cloudacademy.com/course/amazon-web-services-key-management-service-kms/understanding-permissions-key-policies/">"Understanding Permissions & Key Policies"</a>
   <br /><br />

Encryption can occur on the client or server, using several mechanisms:

REMEMBER:<br />
SSE = Server-Side Encryption<br />
CSE = Client-Side Encryption

* ... with S3 Managed Keys (SSE-S3) 

* ... with KMS Managed Keys (SSE-KMS)
* ... with KMS Managed Keys (CSE-KMS)

* ... with Customer Provided keys (SSE-C)
* ... with Customer Provided Keys (CSE-C)
<br /><br />

LAB: Encrypting S3 objects using SSE-KMS

When Customer keys are used, AWS KMS uses what is known as "envelope encryption". An application's cleartext data (of any size) is encrypted using two keys: the <strong>plaintext CMK</strong> and the <strong>Data Encryption Key (DEK)</strong> created from plaintext CMK (Customer-supplied Master Key) using the FIPS 140-2 validated cryptographic module. 

PROTIP: In 2022, KMS is replacing the term customer master key (CMK) with KMS key and KMS key. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.

Anyway, S3 uses the plaintext CMK to encrypt, then store each encrypted object with the encrypted CMK.
The plaintext CMK is deleted from memory after use.

When a user requests an encrypted object from S3, S3 makes a request to KMS with the encrypted CMK stored with the object. From that, KMS generates a plaintext DEK for return to S3 for use to decrypt.


## Key policies

Access to each CMK is governed by key policies for that CMK.
At least one Key Policy is required for all CMKs.
Much like IAM policies, Key policies define (in JSON) who can use and access a key in KMS. 
A template of a Key Policy:

<pre>{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "statement identifier",
    "Effect": "effect",
    "Principal": "principal",
    "Action": "action",
    "Resource": "resource",
    "Condition": {"condition operator": {"condition context key": "context key value"} }    
  }]
}</pre>

An example of a Key Policy with IAM Policies:

<pre>{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "kms:Encrypt",
      "kms:Decrypt"
    ]
    "Resource": [
      "arn:aws:kms:us-east-1:123456789123:key/1234abcd-12ab-34cd-56ef-1234567890ab",
      "arn:aws:kms:eu-west-1:123456789123:key/0987dcba-09fe-87dc-65ba-ab0987654321"
    ]
  }
}</pre>


### Root and Administrator

To ensure that KMS root account has access, its Key Policy allows all actions to all resources:

<pre>{
    "Sid": "Enable IAM User Permissions",
    "Effect": "Allow",
    "Principal": {"AWS": "arn:aws:iam:123456789123:root},
    "Action": "kms:*",
    "Resource": "*"
}</pre>

When using the AWS Management Console GUI, define the Key Administrator as Principals who administer the CMK, and can perform all but encryption functionality: Create, Describe, Enable, List, Put, Update, Revoke*, Disable*, Get*, Delete*, TagResource, UntagResource, ScheduleKeyDeletion, CancelKeyDeletion.

PROTIP: Enable the Key Administrator to be the only one with the ability to Delete, to ensure against other accounts from making accidental or malicious deletions which make data unreadable. However, the Key Administrator should be easily reachable and quickly responsive to valid requests for deletion when needed.

<a name="Grants"></a>

## Grants

Grants allow delegation of access to another principal, such as a service integrated with KMS or another user.

Grants eliminates the possibility of anyone using the permission <tt>kms:PutKeyPolicy</tt>.

Grants are created using the AWS KMS APIs.

<pre>{
    "Sid": "Allow attachment of persistent resources",
    "Effect": "Allow",
    "Principal": [
      "AWS": [
         "arn:aws:iam::456789123345:user/BigCorp},
      ]
  ],
  "Action": [
     "kms:CreateGrant",
     "kms:ListGrants",
     "kms:RevokeGrant",
  ]
  "Resource": "*",
  "Condition": [
    "Bool": {
      "kms:GrantIsForAWSResource": true
    }
  ]
}</pre>

A GrantToken and GrantID are issued.


Using Key Policies with IAM:

Using Key Policies with Grants:


## Logging in CloudTrail

AWS CloudTrail logs each API action within AWS, including actions using KMS.
Audits of CloudTrail logs would reveal when KMS encryption keys are used, for what reason, and by whom.

KMS keys were once specific to a region. They recently became multi-region for client-side encryption in:
* AWS Encryption SDK
* AWS S3 Encryption Client, and
* AWS DynamoDB Encryption Client.


## AWS Tutorials about KMS

Text tutorial on <a target="_blank" href="https://www.qwiklabs.com/focuses/10388">
Qwiklabs.com: "Introduction to AWS Key Management Service"</a> (free)
provides hands-on instructions on these procedures:

1. Create an Encryption Key
2. Create an S3 bucket with CloudTrail logging functions
3. Use an encryption key to encrypt data stored in a S3 bucket
4. Monitor encryption key usage using CloudTrail
5. Manage encryption keys for users and roles

<hr />

## Generate secret keys using AWS KMS 

The below describes the manual way using a GUI.
There is also an <a target="_blank" href="https://docs.aws.amazon.com/kms/latest/APIReference/Welcome.html">API</a>

PROTIP: Use a separate Data key for different datasets.

1. Use an internet browser to get on the AWS Management Console:

   https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2#

1. Select your region.
1. Enter Key Management Service (KMS).

   <img width="401" alt="aws-kms-svc-802x308" src="https://user-images.githubusercontent.com/300046/78986307-3cd7d300-7ae8-11ea-9cd3-328902665460.png">

   Notice the service is to securely ???

   Private CMK (Customer Master Keys) are created in KMS and remain there.
   
1. Upon entry, there is a left menu:

   * AWS-managed keys
   * Customer-managed keys (symmetric or asymmetric)
   * Customer key stores
   <br /><br />

   "Create a key" on the splash screen can also be invoked within the "Customer managed keys" menu item.

   ## Create a KMS key

   AWS creates a Default master key that protects the data of each service (such as Cloud9) when no other key is defined.

1. Click "Create Key".

1. Click "Advanced options" to view "Key material origin". Read the KMS docs at 

   https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html

   WARNING: Using <a target="_blank" href="https://console.aws.amazon.com/cloudhsm/home">AWS Cloud HSM</a> cluster incurs an hourly fee. And AWS has no visibility or access to encryption keys in HSM.

1. On the configuration page, configure keys: click <strong>symmetric</strong>.

   Symmetric keys are like a password, a single encryption key that is used for both encrypt and decrypt operations, 256-bit.

   Asymmetric keys are RSA or elliptic curve (ECC) public/private key pairs used encrypt/decrypt or sign/verify operations

1. On the Add Labels page, type in an Alias and Description. Next.

   PROTIP: Define aliases to differentiate keys within the account.
   
   PROTIP: Establish a convention for naming keys for all departments, projects, etc.

   Each key has an Alias and Key ID, which are GUIDs with dashes, and enabled.

1. On the <strong>Define key administrative permissions</strong>, select <i class="far fa-check-square"></i> the user or role you're signed into the Console with.

   Advanced Options: Key material origins: KMS, External, Customer key store (CloudHSM):
   * KMS are validated to FIPS 140-2 level 2, China region does not suppor asymmetric keys
   * CloudHSM are validated to FIPS 140-2 level 3, keys and hardware exclusive to customer, either symmetric or asymmetric

<hr />


### Encrypt AWS Network in transit

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=0ea16bcc-fcee-46c9-b1f8-85c2e29e80e5">GUI demo [3:05]</a>
<a target="_blank" href="https://app.pluralsight.com/library/courses/aws-networking-deep-dive-vpc/table-of-contents">AWS Networking Deep Dive: Virtual Private Cloud (VPC)</a>
8 Aug 2019 by Ben Piper

Transport layer: Amazon S2N (Signal-to-Noise), AWS-managed VPN, AWS-client VPN, AWS VPN cloud hub,
third-party VPN tunnel.

To create VPC : Customer Gateway : VPN Site-to-site IPSEC

1. In AWS Console, select VPC in search bar or link.
1. Customer  Gateway menu, Create Customer  Gateway
1. Type Name, Select Routing, IP Address of firewall in front of network, 

   You can leave blank Certificate ARN, Device.

1. Virtual Private Gateways on left menu. Create VPC Gateway. Type name.

   "IPSec.1"

1. Attach (explictly) in Actions drop-down.

1. Site-to-Site VPN Connection in left menu to Create VPN Connection.
1. Type Name tag, Virtual Private Gateway
1. Add Another Rule. Type IP prefix ("192.68")

   Customer Gateway and Tunnel Options can be left as is.

1. Download configuration. In pop-up select Vendor ("Openwan"), Platform, Software.
1. Upload configuration file to firewall.

1. Route Tables in left menu to Edit Routes.
1. Type Destination IP & Target of on-premise network. Add route.



## Generate secret key using AWS KMS 

AWS KMS uses the <a target="_blank" href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/introduction.html">AWS Encryption SDK</a> of cryptographic algorithms.

<a target="_blank" href="https://www.youtube.com/watch?v=_gezaWmwzYY&list=PLhr1KZpdzuke2ncPH0DVp9PswBFY5dIl6&index=77">
VIDEO: AWS re_Infoce 2019: Achieving Security Goals with AWS CloudHSM</a>

CMK + Encryption algorithm yields the Plaintext key and Encrypted key.

Plaintext key + Data are fed into the Encryption algorithm yields Encrypted data.

Encrypted key + CMK fed into Decryption algorithm yields Plaintext key.



## Videos

<a target="_blank" href="https://www.youtube.com/watch?v=plv7PQZICCM&list=PLhr1KZpdzuke2ncPH0DVp9PswBFY5dIl6&index=46">
VIDEO: AWS re_Infoce 2019: How Encryption Works in AWS</a>

<a target="_blank" href="https://www.youtube.com/watch?v=wuTp9LvWHkI&list=PLhr1KZpdzuke2ncPH0DVp9PswBFY5dIl6&index=58">
VIDEO: AWS re_Infoce 2019</a>


<a target="_blank" href="https://www.youtube.com/watch?v=3jCVnSLmaiM&list=PLhr1KZpdzuke2ncPH0DVp9PswBFY5dIl6&index=7">Build and Monitor Security into Your Golden AMI Pipeline</a>

<a target="_blank" href="https://www.youtube.com/watch?v=Z3SYDTMP3ME">
Introduction to AWS Services</a> by the AWS Training Center
Jun 9, 2019 [38:53] is highly rated introduction

## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}

