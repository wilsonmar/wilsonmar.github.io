---
layout: post
title: "AWS Cognito (federation)"
excerpt: "Federate authentication of authentication through API Gateway via Python Lambda"
tags: [aws, security, management]
date: "2021-01-16"
file: "aws-cognito"
image:
# python-samples-1900x500.jpg
  feature: https://user-images.githubusercontent.com/300046/145717691-60b8c765-e0a3-4d63-bf7f-0cb89492c0ee.png
  credit: An Athlete Wrestling with a Python (1877) by Sir Frederic Leighton (1830-1896) at the Tate, London
  creditlink: https://www.wikiwand.com/en/An_Athlete_Wrestling_with_a_Python
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<img align="right" width="199" alt="aws-cognito-feds-398x1168" src="https://user-images.githubusercontent.com/300046/149676097-be698f86-408b-43b2-8025-1958719119fc.png">
AWS Cognito is an authentication and user management service that enables <strong>federated</strong> authentication from Amazon user store accounts, Apple, Facebook, Google, Twitter/Digits, OpenID, SAML to GitHub or Microsoft Active Directory, and custom mechanisms.

PROTIP: A developer accounts needs to be setup with each third-party (Facebook) for AWS to interact with.

#### Cognito service landing page

Version 1 of the Amazon GUI for Cognito at<br />
https://us-west-2.console.aws.amazon.com/cognito/welcome?region=us-west-2<br />
enables you to choose between "Manage User Pools" (the directory of users in Amazon Cognito) or "Manage Identity Pools" for Authorization of temporary AWS user credentials.

Version 2 of the Amazon GUI for Cognito at<br />
https://us-west-2.console.aws.amazon.com/cognito/v2/home?region=us-west-2#<br />
has a drop down to "Grant access to AWS services" before clicking the orange "Create indentity pool".

1. Click Create a user pool. My notes about each menu item:

   * (Pool) Name - convention?
   * <a href="#UserAttributes">(User) Attributes - see below</a> (Click "Also sign-in with verified email address" because email addresses are uniqu, but requires users to have one)
   * Policies - password minimum length. Selecting "Only allow administrators to create users" requires more toil by administrators.
   * MFA and verifications - recovery; attributes to verify
   * Message customizations
   * Tags
   * Devices
   * App clients
   * Triggers
   <br /><br />   

Users can also be added using a CSV import.

<a name="UserAttributes"></a>

## User Attributes

Cognito manages <strong>attribute</strong> values for each user, and ensures that required attributes are obtained:
<img width="949" alt="aws-cognito-attribs-1898x778" src="https://user-images.githubusercontent.com/300046/149676615-8b65c35b-2b89-4cdd-8db1-3db7fef23d3e.png">



## Thru API Gateway

This article describes how to use AWS Cognito through API Gateway 
to authorize users via a Python Lambda program.

NOTE: There is a biological Cognito, which is not this topic.

* https://sanderknape.com/2017/02/getting-started-with-aws-cognito/


## Laptop Setup

https://github.com/serverless/examples/tree/master/aws-node-auth0-cognito-custom-authorizers-api

* AWS CLI
* Python Boto3
* AWS Cognito

## References

<a target="_blank" href="https://cloudacademy.com/course/using-amazon-cognito-manage-authentication-authorization-mobile-web-apps-1560/cognito-lecture-one/?context_resource=lp&context_id=241">VIDEO course: "Using Amazon Cognito to Manage Authentication & Authorization to your Mobile and Web Apps"</a> 

   * <a target="_blank" href="https://cloudacademy.com/lab/manage-authentication-amazon-cognito/">Hands-on 1hr "Manage Authentication with Amazon Cognito"</a><br /><a target="_blank" href="https://user-images.githubusercontent.com/300046/149676668-af6b78a6-e69d-4ac6-b36f-3d96af19a606.png"><img alt="aws-cognito-flow-899x474" width="899" src="https://user-images.githubusercontent.com/300046/149676668-af6b78a6-e69d-4ac6-b36f-3d96af19a606.png"></a>

   * <a target="_blank" href="https://cloudacademy.com/lab/deploy-highly-available-serverless-application-using-aws-services/">Hands-on 2h "Deploy a Highly Available Serverless Application Using AWS Services"</a>

   * <a target="_blank" href="https://cloudacademy.com/lab/serverless-web-development-python-aws/">Hands-on "Serverless Web Development with Python for AWS"</a><br ><a target="_blank" href="https://user-images.githubusercontent.com/300046/149680878-cf89a38e-c806-4227-9a87-9cb24bf38c9e.png"><img width="605" alt="aws-cognito-api-mgmt-605x342" src="https://user-images.githubusercontent.com/300046/149680878-cf89a38e-c806-4227-9a87-9cb24bf38c9e.png"></a>


Some of the code here is patterned after monorepo <a target="_blank" href="https://github.com/davidtucker/ps-serverless-app">github.com/davidtucker/ps-serverless-app</a> by <a target="_blank" href="https://www.davidtucker.net/">David Tucker</a>, as explained in his Pluralsight video series <a target="_blank" href="https://app.pluralsight.com/paths/skills/building-serverless-applications-on-aws">"Building Serverless Applications on AWS"</a>.

The workflow:

1. User clicks on static web page
2. Request login
3. Python Lambda program trigger
4. API Gateway 
5. AWS Cognito (or Auth0)

Each high-level folder is a workspace defined in package.json:


The <strong>infrastructure</strong> folder
   * AWS <a target="_blank" href="https://wilsonmar.github.io/aws-cdk/" title="Cloud Development Kit">CDK</a>> leveraging pre-configured app components in TypeScript
   * Cloudwatch for Observability, Logging, metrics, and alarms;
   * For Communication: event bus and app messaging EventBridge, SQS, SNS
   * XRay for tracing

The <strong>services</strong> folder
   * Backend Serverless microservices built in JavaScript
   * For Continous Delivery: CodeBuild, CodePipeline, CloudFormation

The <strong>webapp</strong> folder
   * Frontend ReactJs app built in JavaScript
   <br /><br />

https://betterprogramming.pub/secure-aws-api-gateway-with-amazon-cognito-and-aws-lambda-535e7c9ffea1

### Creating the Amazon Cognito user pool

1. Creating the user pool
1. Adding a user
1. Creating an App Client
1. Configuring the App Client Identity Providers
1. Adding a user — cont.
1. Using the built-in form to register users

   ### Setting up an authorization endpoint

1. Creating the authorization Lambda function
1. Writing the function code
1. Granting Cognito access to the function
1. Testing the function
1. Creating an authorization endpoint
   
   ### Setting up the AWS API Gateway Authorization

1. Creating an authorizer
1. Setting up our endpoint authorization

   ### Testing the Secure API Gateway
   
1. Testing the authorization endpoint
1. Testing the secure endpoint

   ### Deletes
   
1. <a target="_blank" href="https://iotespresso.com/delete-a-cognito-user-using-aws-lambda-python/">Delete Cognito User</a>


## Coding

https://www.educative.io/edpresso/what-is-the-python-code-for-aws-cognito

https://docs.aws.amazon.com/lambda/latest/dg/services-cognito.html

Example Amazon Cognito message event

<pre>{
  "datasetName": "datasetName",
  "eventType": "SyncTrigger",
  "region": "us-east-1",
  "identityId": "identityId",
  "datasetRecords": {
    "SampleKey2": {
      "newValue": "newValue2",
      "oldValue": "oldValue2",
      "op": "replace"
    },
    "SampleKey1": {
      "newValue": "newValue1",
      "oldValue": "oldValue1",
      "op": "replace"
    }
  },
  "identityPoolId": "identityPoolId",
  "version": 2
}</pre>



https://medium.com/@houzier.saurav/aws-cognito-with-python-6a2867dd02c6

https://github.com/JinlianWang/aws-lambda-authentication-python

https://gist.github.com/Integralist/07d62f6a55ba42481b23458c15c00e27
1. Python Lambda.md
Note: the following instructions require you to be using Pipenv for handling you Python dev environment.

## Authentication providers

<a target="_blank" href="https://www.linkedin.com/learning/aws-for-architects-advanced-security/secure-authentication-with-cognito" title="by Lynn Langit">VIDEO</a>:

When an InitiateAuth operation is successful, Cognito responds with either a token or (another) challenge.

<a name="SAML"></a>

### SAML protocol

The Security Assertion Markup Language (SAML) enables Single-Sign-On (SSO) enables users to access various systems from a web browser without repeatedly entering user credentials. 
It works like getting an armband for VIP chairs at a music concert. <a target="_blank" href="https://www.linkedin.com/learning/comptia-security-plus-sy0-601-cert-prep-4-identity-and-access-management-design-and-implementation/saml?autoAdvance=true&autoSkip=false&autoplay=true&resume=true">VIDEO</a>:

![sec-saml-lkin-1755x503](https://user-images.githubusercontent.com/300046/149627769-f392e8d8-c16a-4c0f-81ec-342abbd6d841.png)

A new user (called the "Principal") makes a SSO request to the "Identity" service (like a ticket booth), which authenticates the user and creates an XHTML form so the user can create a "Security Assertion" to the Provider (like showing the armband at the gate). 
The customizable UI provides an OAuth 2.0 compliant auth server.

The Provider then creates a "Security Context" and redirects to the request resource.
This can be an AWS Lambda trigger to send an email and log the event so the SOC (Security Operations Center) can monitor security-relevant activities.

The Resource is then requested and access is granted (sitting within a VIP booth).

The amount of time access lasts is determined by the Identity Provider.

A competitor to SAML is OpenID Connect working with OAuth2 is used by Google.
OpenID is designed to only allow a service provider (Google) to initiate the identification process.

NOTE: SAML formats in XML.

Additional back-end processes include mass upload from a CSV file for first-time setup or for disaster recovery.


## Cognito Terraform

https://registry.terraform.io/modules/rhythmictech/elb-cognito-auth/aws/latest
https://github.com/rhythmictech/terraform-aws-elb-cognito-auth
provides Terraform that creates an ALB listener rule configured for Cognito authentication using a local user pool. It can also be used with a supplied Cognito user pool allowing for greater customizability. This module is meant to be a better solution when you need to protect web assets and don't want to use server-side HTTP basic authentication to keep the general public out of a staging site. 

Among other benefits, this means your backend configuration does not have to change to restrict access and also means that users can have individual usernames/passwords that they can perform account resets on.

Cognito stores user information in a <strong>Resource Server</strong> which manages user data in <strong>User Pools</strong>. 


### Cognito Resource Server and clients

Terraform for <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_resource_server">resource server</a> for a scope.


<a name="SRP_auth"></a>

### Client SRP Auth

<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_pool_client">Terraform for client</a>, which sets up <a href="#SRP_auth">SRP auth</a>, optionally with <a target="_blank" href="https://aws.amazon.com/pinpoint/">AWS Pinpoint</a> for multichannel <a target="_blank" href="http://aws.amazon.com/mobileanalytics/faqs/">marketing communication analytics</a> and to <a target="_blank" href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities.html">send SMS messages to phones</a> from an originator ID.

The SRP (Secure Remote Password) protocol is an augmented password-authenticated key exchange (PAKE) protocol, designed so an attacker who steals server data would not be able to masquerade as the client (unless they first perform a brute force search for the password). <a target="_blank" href="https://www.wikiwand.com/en/Secure_Remote_Password_protocol">A Wiki entry</a> says it was specifically designed to work around existing patents.

SRP is a zero-knowledge proof protocol, where the server doesn’t have to store password equivalently information (hashed version) in a database. Thus, an eavesdropper or man-in-the-middle cannot obtain any meaningful information to perform an attack.

During registration on the browser, a <strong>verifier</strong> posted to the server instead of sending the password entered by the user:

   * <tt>client.generateRandomSalt();</tt> by a KDF (Key Derivation Function) to derive a very large number eg: PBKDF etc.

   * <tt>client.generateVerifier(salt,email,password);</tt> using the derived PBKDF and an SRP group, which consists of one large prime number and a generator. Admins can choose between several groups eg: 1024 bit, 2048 bit, etc

In addition to <a target="_blank" href="https://pkg.go.dev/github.com/agilebits/srp">Go code</a>, there is JavaScript code for the above is at Simon Massey's https://github.com/simbo1905/thinbus-srp-npm, which provides this diagram of authentication using SRP:

<img alt="SRP" src="https://camo.githubusercontent.com/f05a399920c94c81f4b4deab1ad8ab722b4d7c2bafa68b5d87158497e27cc133/687474703a2f2f73696d6f6e6d61737365792e6269746275636b65742e696f2f7468696e6275732f6c6f67696e2d63616368652e706e67">

To prove that the user knows their password, client and server exchange non-sensitive information to generate a key independently for mutual verification. It generates using SRP group a one-time ephemeral (private) a value and its (public) counterpart A, where private a is kept in-memory and its public value A is sent to the server.

<a target="_blank" href="https://medium.com/swlh/what-is-secure-remote-password-srp-protocol-and-how-to-use-it-70e415b94a76">
Ramesh Lingappan shows how to install his code for a demo</a>.


<a name="UserPools"></a>

### Cognito User Pools and groups

Cognito User Pools (CUPs) are referenced during sign-up and sign-in operations.

Cognito normalizes secrets as CUP (Cognito User Pool) tokens (pronounced "cup tokens") for use with AWS API Gateway and Lambda.

But to authenticate S3 and DynamoDB, the CUP token is sent to an <a href="#IdentityPools">Amazon Cognito Identity Pool</a>.

<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_pool">Terraform to setup user pool</a> with SMS and software token MFA, and account recovery.


### User Groups

<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_group">Terraform to setup user group</a>

### Cognito Data Sources

<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/cognito_user_pools">data</a>,
<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_pool_domain">domain</a>,
<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/cognito_user_pool_signing_certificate">signing-cert</a>,
<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/cognito_user_pool_client">data</a>,
<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/cognito_user_pool_clients">clients data</a>
<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_pool_ui_customization">UI customization</a>


<a name="IdentityPools"></a>

### Cognito Identity Pools

   * https://aws.amazon.com/blogs/mobile/customizing-your-user-pool-authentication-flow/
   <br /><br />

Cognito Identity Pools define identities which have (or have not) been <strong>authenticated</strong> by 3rd-party providers (Facebook, etc.). 

"Federated identities" provide temporary access to AWS credentials by working in tandom with Amazon Cognito User Pools to allow users to operate and access specific features from AWS.

The Identity Pool creates a token using STS (Security Token Service) used to access S3, DynamoDB, etc.

The credentials are linked to an AWS Role the admin. assigned to users within the Identity Pool.

It may allow for unauthenticated (guest) identities to view open public information such as summary dashboards.

Terraform for <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_identity_pool">Identity pool</a> 
   "my-saml-provider"

<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_identity_pool_roles_attachment">identity_pool_roles_attachment</a>
assume_role_policy

<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_identity_pool_provider_principal_tag">provider principal tag</a> provides an AWS Cognito Identity Principal Mapping.

## Amazon Cognito Sync

Amazon Cognito Sync ensures reliancy by storing (for distribution) application state, profile info, previously viewed content, location tracking, etc.
This include management of caches on mobile devices, to enable offline use.

Sync info is saved and retrieved by a key-value pair (dictionary) saved within a <strong>dataset</strong>.
CAUTION: Currently, each dataset is limited to 1MB because the entire dataset is sync'd at once. Each identity can have a maximum of 20 datasets.

WARNING: Amazon is moving Sync to AWS AppSync to enable multiple users to access the same data as well as to collaborate in real time on shared data.

<a name="HTTP_API"></a>

## HTTP API

https://sanderknape.com/2020/08/amazon-cognito-jwts-authenticate-amazon-http-api/
Using Amazon Cognito JWTs to authenticate with an Amazon HTTP API

https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html
Amazon Cognito can be used as a JWT issuer for REST APIs.

PROTIP: AWS HTTP API costs 30% less than REST API calls.

HTTP APIs can be edge-optimized, private, and use AWS WAF with resource policies and certificates for backend authentication.

HTTP APIs can have execution logs and use X-Ray tracing via Access logs to Amazon Kinesis Data Firehose (REST APIs can't)

