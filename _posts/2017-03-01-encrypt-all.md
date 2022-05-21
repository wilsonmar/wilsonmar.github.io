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

For storage "at rest" and while "in transit" over telecommunication lines,
we encrypt <strong>clear (plain) text</strong> into unreadable (scrambled)
<strong>cyphertext</strong>.

{% include whatever.html %}

This tutorial aims to organize deep-dive insights and advice based on the combination of advice from several sources. Unlike others which first numb you with theory then have you mindlessly follow steps, I aim to provide commentary after each action.

Each cloud service (AWS with Azure with GCP, etc.) has its own mechanisms.

## Personas and their tasks

Let's pretend there are these users:

   * Mary, the Key Administrator
   * Alice, a valued user
   * Snape, a user who should no longer have access
   <br /><br />

## AWS KMS

   * <a target="_blank" href="https://www.youtube.com/watch?v=f3APF1dP8w0&list=RDCMUChpIik3lwpviVj_tIoCeUHw&start_radio=1&rv=f3APF1dP8w0" title="by Manouj Fernando Apr 24 2020">VIDEO</a>
   <br /><br />

The AWS KMS (Key Management Service) manages CMKs (Customer Master Keys) for use with most other AWS services.

PROTIP: AWS is trying to replace the term Customer Master Key (CMK) with "KMS key". 
Its concepts have not changed. To prevent breaking changes, KMS is keeping some variations of this term.

   REMEMBER: KMS itself can only encrypt a maximum of <strong>4 KB</strong>. 
   So <a href="#DataKeys">Data Keys</a> are used to encrypt larger objects.

   https://github.com/cipherstash/terraform-provider-kms/blob/main/docs/resources/kms_data_key_without_plaintext.md

<a name="DataKeys"></a>

### Data Keys

To encrypt objects larger than 4KB, 

REMEMBER: AWS KMS does not store Data Keys.

PROTIP: Use a separate Data key for each different dataset, so that if one key falls into the wrong hands, your whole system won't be completely compromised. This is a "Zero Trust" approach.

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

## Hands-on

Instructions below are an enhanced version of the<a target="_blank" href="https://www.qwiklabs.com/focuses/10388" title=" (now defunct) Qwiklabs.com: Introduction to AWS Key Management Service">text tutorial</a>:

1. <a href="#CMK_using_GUI">Create a CMK Encryption Key using GUI AWS Management Console</a>
2. <a href="#CMK_using_CLI">Create a CMK Encryption Key using GUI AWS CLI</a>
3. <a href="#CMK_using_TF">Create a CMK Encryption Key using Terraform</a>
4. <a href="#CMK_using_API">Create a CMK Encryption Key using a Python program</a> calling the <a target="_blank" href="https://docs.aws.amazon.com/kms/latest/APIReference/Welcome.html">KMS API</a> 

1. <a href="#Encrypt_text_using_API">Encrypt text using CLI</a>

1. Create an S3 bucket with CloudTrail logging functions
1. Use an encryption key to encrypt data stored in a S3 bucket

1. Monitor encryption key usage using CloudTrail
1. Manage encryption keys for users and roles
<br /><br />


<a name="CMK_using_GUI"></a>

### Create a CMK (KMS Key) using GUI AWS Management Console

<a target="_blank" href="https://www.youtube.com/watch?v=f3APF1dP8w0&t=11m40s&list=RDCMUChpIik3lwpviVj_tIoCeUHw&start_radio=1&rv=f3APF1dP8w0" title="by Manouj Fernando Apr 24 2020">VIDEO</a>

1. Use an internet browser to get on the AWS Management Console, such as:

   https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2#

1. Select Key Management Service (KMS) from among AWS services:

   <img width="401" alt="aws-kms-svc-802x308" src="https://user-images.githubusercontent.com/300046/78986307-3cd7d300-7ae8-11ea-9cd3-328902665460.png">

1. Upon entry, "Customer-managed keys" is auto-selected from the left menu:

   * AWS-managed keys
   * Customer-managed keys (symmetric or asymmetric)
   * Customer key stores
   <br /><br />

   About "AWS-managed keys": AWS creates a Default master key that protects the data of each service (such as Cloud9) when no other key is defined.

1. Click "Create Key" (in orange) for the "Configure keys" page.

1. Select a region.

   Private CMK (Customer Master Keys) are created in KMS and remain there.

   REMEMBER: Internally, AWS KMS uses a HSM (Hardware Security Module) to store keys.

   Asymmetric encryption is not available in some regions (such as China).

   REMEMBER: A CMK (KMS Key) never leaves the HSM in the region where it was created.
   
   KMS keys were once specific to a region. But they recently became multi-region for client-side encryption in:
   * AWS Encryption SDK
   * AWS S3 Encryption Client, and
   * AWS DynamoDB Encryption Client.
   <br /><br />

1. Click "Help me choose" for a lesson:

   REMEMBER: Symmetric keys are like a password, a single key is used to both encrypt and decrypt. It is fast and efficient. But they cannot be used to sign and verify.

   REMEMBER: Asymmetric keys are public/private key pairs. Key pairs generated using the RSA algorithm are used to encrypt/decrypt or sign/verify operations. Key pairs generated using using ECC (Elliptic curve) algorithms are used to only sign and verify.

1. Click <strong>Symmetric</strong>.

1. Click "Advanced options" to view "Key material origin". Read the KMS docs at 

   https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html

   Advanced Options: Key material origins: KMS, External, Customer key store (CloudHSM):
   * KMS are validated to FIPS 140-2 level 2
   * CloudHSM are validated to FIPS 140-2 level 3, keys and hardware exclusive to customer, either symmetric or asymmetric

   WARNING: Using <a target="_blank" href="https://console.aws.amazon.com/cloudhsm/home">AWS Cloud HSM</a> cluster incurs an hourly fee. And AWS has no visibility or access to encryption keys in HSM.

1. Click "Next" for the "Add labels" page.
1. Type in an Alias and Description. 

   PROTIP: Define aliases to differentiate keys within the account.
   
   PROTIP: Establish a convention for naming keys for all departments, projects, etc.

   Each key has an Alias and Key ID, which are GUIDs with dashes, and enabled.

1. Add Tags?
1. Click "Next" for the "Define key administrative permissions" page.

   ### Root and Administrator

1. Select the Key Administrators already defined:

   To ensure that KMS root account has access, its Key Policy allows all actions to all resources:

   <pre>{
    "Sid": "Enable IAM User Permissions",
    "Effect": "Allow",
    "Principal": {"AWS": "arn:aws:iam:123456789123:root},
    "Action": "kms:*",
    "Resource": "*"
}
   </pre>

   When using the AWS Management Console GUI, define the Key Administrator as Principals who administer the CMK, and can perform all but encryption functionality: Create, Describe, Enable, List, Put, Update, Revoke*, Disable*, Get*, Delete*, TagResource, UntagResource, ScheduleKeyDeletion, CancelKeyDeletion.

   PROTIP: Enable the Key Administrator to be the only one with the ability to Delete, to ensure against other accounts from making accidental or malicious deletions which make data unreadable. However, the Key Administrator should be easily reachable and quickly responsive to valid requests for deletion when needed.

1. Leave default-checked "Allow key administrators to delete this key".
1. Click "Next" for the "Define key usage permissions" page.
1. Select from "This Account" list your account.
1. Click "Next" for the "Review and edit key polcy" page. A sample:

   <pre>{
      "Id": "key-consolepolicy-3",
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "Enable IAM User Permissions",
            "Effect": "Allow",
            "Principal": {
               "AWS": "arn:aws:iam::11111111:root"
            },
            "Action": "kms",
            "Resource": "*"
         },
...
   </pre>

1. Click "Finish" to see the Alias name you created.

<hr />   

<a name="CMK_using_CLI"></a>

### Create a CMK (KMS Data Key) using CLI

<a target="_blank" href="https://www.youtube.com/watch?v=f3APF1dP8w0&t=15m3s&list=RDCMUChpIik3lwpviVj_tIoCeUHw&start_radio=1&rv=f3APF1dP8w0" title="by Manouj Fernando Apr 24 2020">VIDEO</a>

1. To generate a CMK using the Advanced Encryption Standard:

   <pre><strong>aws kms generate-data-key --key-id alias/demo1 --key-spec AES_256 \
   --region us-east-2 > keys.txt
   </strong></pre>

   The command returns two versions of Data Keys in the file specified:

   * Plaintext
   * KeyId "arn:aws:kms:us-east-2:11111:key/24234-1fac-2222-3333-44444444",
   * CiphertextBlob
   <br /><br />

   The above strings are in Base64 encoding.

<hr />   

<a name="Encrypt_text_using_CLI"></a>

### Encrypt text using CLI and CMK

<a target="_blank" href="https://www.youtube.com/watch?v=f3APF1dP8w0&t=15m3s&list=RDCMUChpIik3lwpviVj_tIoCeUHw&start_radio=1&rv=f3APF1dP8w0" title="by Manouj Fernando Apr 24 2020">VIDEO</a>

1. Verify version installed:

   <pre><strong>aws --version</strong></pre>

1. To encrypt a short sentence using the AWS CLI:

   <pre><strong>aws kms encrypt --plaintext "My little secret" --key-id alias/DemoKey \
   --profile Alice
   </strong></pre>

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

* encrypt, decrypt, re-encrypt, 
* sign, verify
* generate-random, GenerateDataKey, GenerateDataKeyWithoutPlaintext
* get-public-key, 
* update-key-description
* get-parameters-for-import

* create-alias, list-aliases, update-alias, delete-alias
* cancel-key-deletion
<br /><br />

<hr />   

<a name="CMK_using_TF"></a>

### Create a CMK (KMS Key) using Terraform

Links to <a target="_blank" href="https://wilsonmar.github.io/terraform">Terraform IaC YAML</a>:

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


<a name="EnvelopEncryption"></a>

## Envelop Encryption

References at CloudAcademy.com:
   * <a target="_blank" href="https://cloudacademy.com/course/s3-encryption-mechanisms/s3-encrypt-introduction/?context_resource=lp&context_id=4125">"Understanding S3 Encryption Mechanisms to Secure your Data"</a> by <a target="_blank" href="https://linkedin.com/in/stuartanthonyscott/">Stuart Scott</a>
   * <a target="_blank" href="https://cloudacademy.com/course/amazon-web-services-key-management-service-kms/understanding-permissions-key-policies/">"Understanding Permissions & Key Policies"</a>
   <br /><br />

LAB: Encrypting S3 objects using SSE-KMS

When Customer keys are used, AWS KMS uses what is known as "envelope encryption". An application's cleartext data (of any size) is encrypted using two keys: the <strong>plaintext CMK</strong> and the <strong>Data Encryption Key (DEK)</strong> created from plaintext CMK (Customer-supplied Master Key) using the FIPS 140-2 validated cryptographic module.

Outside AWS, OpenSSL or AWS Encryption SDK is used to encrypt data with Data Keys.

Anyway, S3 uses the plaintext CMK to encrypt, then store each encrypted object with the encrypted CMK.
The plaintext CMK is deleted from memory immediately after use.

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


## AWS Tutorials about KMS

<hr />

## Generate secret keys using AWS KMS 


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

