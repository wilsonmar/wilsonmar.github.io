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

NOTE: There is a biological Cognito, which is not this topic.

<img align="right" width="100" alt="aws-cognito-feds-398x1168" src="https://user-images.githubusercontent.com/300046/149676097-be698f86-408b-43b2-8025-1958719119fc.png">
Amazon Cognito is an authentication and user management service that enables <strong>federated</strong> authentication from Amazon user store accounts, Apple, Facebook, Google, Twitter/Digits, OpenID, <a href="#SAML">SAML</a> to GitHub or Microsoft Active Directory, and custom mechanisms.

Hosting on AWS means that the SaaS service can scale to a lot users around the world.

PROTIP: This blog presents configuration using both the AWS GUI Management Console and Terraform coding to provide repeatability and ease of reconfiguration (moving from test to prod on several regions).

High-level short summary of Cognito: <a target="_blank" href="https://cloudacademy.com/course/using-amazon-cognito-manage-authentication-authorization-mobile-web-apps-1560/cognito-lecture-one/?context_resource=lp&context_id=241">VIDEO course: "Using Amazon Cognito to Manage Authentication & Authorization to your Mobile and Web Apps"</a>

<a target="_blank" href="https://www.youtube.com/watch?v=S0liSNlljsY&t=1167">"AWS Identity Federation Course: What AWS Identity Federation is, Types & Demos"</a> by <a target="_blank" href="https://linkedin.com/in/ccforce/">Tom Lynch</a>

<a target="_blank" href="https://cloudacademy.com/course/using-aws-identity-federation-simplify-access-scale-1549/using-aws-identity-federation-to-simplify-access-at-scale/?context_id=42&context_resource=lp">VIDEO: "Using AWS Identity Federation to Simplify Access at Scale"</a>
compares the various approaches:
   * AWS IAM allows you to configure different OpenID or SAML Identity providers for each of your AWS accounts.
   * AWS SSO (Single Sign-On -- using a single identity provider for all) with SAML 2.0 for user access to AWS Simple ID, and Microsoft AD and LDAP.
   * AWS Cognito enables secure authentication to your web or mobile applications using both SAML 2.0 and web identity federation.
   <br /><br />

PROTIP: A developer accounts needs to be setup with each third-party (Facebook) for Cognito to interact with.


## Cognito usage workflows

There are several options, from simple to more complex/full featured:

* <a target="_blank" href="https://betterprogramming.pub/secure-aws-api-gateway-with-amazon-cognito-and-aws-lambda-535e7c9ffea1">blog</a>
* <a target="_blank" href="https://www.youtube.com/watch?v=HtwPeFjyjPg">VIDEO: In-Depth Introduction to AWS Cognito Service & Its Components</a> by Shirish Munukuntla
* https://trackit.io/aws-api-gateway-create-api-python-cognito-serverless/ covers install of utilities on laptop (NPM, Python, AWS CLI, Boto3, Serverless, Postman)

### Cognito in ReactJs Serverless in AWS Amplify

<a target="_blank" href="https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/">AWS workshop: "Build a Serverless Web Application: with AWS Lambda, Amazon API Gateway, AWS Amplify, Amazon DynamoDB, and Amazon Cognito"</a><br />
<a target="_blank" href="https://user-images.githubusercontent.com/300046/149707064-243dd76b-0c43-4e78-be1a-12718b25705f.png">
<img alt="aws-cognito-serverless-974x424" width="974" src="https://user-images.githubusercontent.com/300046/149707064-243dd76b-0c43-4e78-be1a-12718b25705f.png"></a>

Code for the above is at <a target="_blank" href="https://github.com/jspruance/aws-cognito-tutorial-complete">github.com/jspruance/aws-cognito-tutorial-complete</a>

Modules:
   1. HOST A STATIC WEBSITE (ReactJs with AWS Amplify hosting)
   2. MANAGE USERS (using Cognito User Pools)
   3. BUILD A SERVERLESS BACKEND
   4. DEPLOY A RESTFUL API
   5. TERMINATE RESOURCES
   <br /><br />

Starter ReactJS UI for the "Create a Serverless App" tutorial series by J Spurance
https://github.com/jspruance/aws-cognito-tutorial-starter
uses https://github.com/facebook/create-react-app
to Create React apps with no build configuration.

https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/?trk=gs_card

AWS Amplify API Console provides hosting of CSS, libraries, etc. to JavaScript clients.

### Cognito to GitHub Pages

A simple example is to access GitHub Pages, explained by <a target="_blank" href="https://cloudacademy.com/lab/manage-authentication-amazon-cognito/">Hands-on 1hr "Manage Authentication with Amazon Cognito"</a><br /><a target="_blank" href="https://user-images.githubusercontent.com/300046/149676668-af6b78a6-e69d-4ac6-b36f-3d96af19a606.png"><img alt="aws-cognito-flow-899x474" width="899" src="https://user-images.githubusercontent.com/300046/149676668-af6b78a6-e69d-4ac6-b36f-3d96af19a606.png"></a>

### Cognito Workflow using AWS API Gateway

   * <a target="_blank" href="https://www.youtube.com/watch?v=o7OHogUcRmI">Use JWT Authorizers with Amazon Cognito and API Gateway</a>
   * https://www.youtube.com/watch?v=al5I9v5Y-kA
   * https://www.youtube.com/watch?v=yCAlJv6zfn4
   * <a target="_blank" href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html">DOCS: "Amazon Cognito can be used as a JWT issuer for REST APIs"</a>
   * https://sanderknape.com/2017/02/getting-started-with-aws-cognito/
   * <a target="_blank" href="https://sanderknape.com/2020/08/amazon-cognito-jwts-authenticate-amazon-http-api/">BLOG: "Using Amazon Cognito JWTs to authenticate with <a href="#HTTP_API">Amazon HTTP APIs</a>"
   * <a target="_blank" href="https://www.youtube.com/watch?v=fL-7UycSsfw" title="by ">VIDEO</a> by <a target="_blank" href="https://www.linkedin.com/in/srcecde/">Chirag Rathod</a>
   <br /><br />

<a target="_blank" href="https://user-images.githubusercontent.com/300046/149682167-97a1ec96-470e-4259-acba-1e173dd4e9bc.png">
<img width="631" alt="aws-cognito-thru-api-631x518" src="https://user-images.githubusercontent.com/300046/149682167-97a1ec96-470e-4259-acba-1e173dd4e9bc.png"></a>

1) Users from a web browser typically invoke JavaScript which addresses an Amazon API Gateway, which controls access. 2) If authenticated, the API Gateway invokes a JWT Authorizer which 3) connects Amazon Cognito. 4) Cognito returns to JWT Authorizer 5) back to API Gateway, which 6) invokes a Lambda that 7) returns to the user's browser.

https://github.com/ghdna/cognito-express Authenticates API requests on a Node application by verifying the JWT signature of AccessToken or IDToken generated 

### Cognito with S3 buckets & DynamoDB

A more complex example using <strong>S3 buckets</strong> is the <a target="_blank" href="https://cloudacademy.com/lab/serverless-web-development-python-aws/">Hands-on "Serverless Web Development with Python for AWS"</a><br ><a target="_blank" href="https://user-images.githubusercontent.com/300046/149680878-cf89a38e-c806-4227-9a87-9cb24bf38c9e.png"><img width="605" alt="aws-cognito-api-mgmt-605x342" src="https://user-images.githubusercontent.com/300046/149680878-cf89a38e-c806-4227-9a87-9cb24bf38c9e.png"></a>

<a target="_blank" href="https://www.youtube.com/watch?v=tAUmz94O2Qo">VIDEO</a>: "Fine-grained Access Control with Amazon Cognito Identity Pools" 
<a target="_blank" href="https://user-images.githubusercontent.com/300046/149770556-03e234b5-083a-49bf-8cac-99883c1981fa.png">
<img alt="aws-cognito-s3-1890x673" src="https://user-images.githubusercontent.com/300046/149770556-03e234b5-083a-49bf-8cac-99883c1981fa.png"></a>
shows use of using Attribute-based access controls to pass claims from token as principal tags.


### Cognito with S3, CloudFront, Kinesis Firehose streaming

Add streaming to <strong>Amazon Firehose</strong> by <a target="_blank" href="https://cloudacademy.com/lab/deploy-highly-available-serverless-application-using-aws-services/">Hands-on 2h "Deploy a Highly Available Serverless Application Using AWS Services"</a> Athena database and AWS Glacier to archive history.<br /><a target="_blank" href="https://user-images.githubusercontent.com/300046/149682737-2515adfd-4e99-4b85-aefa-659405658dd8.png"><img width="605" alt="aws-cognito-with-firehose-802x900" src="https://user-images.githubusercontent.com/300046/149682737-2515adfd-4e99-4b85-aefa-659405658dd8.png"></a>


### iOS application using Cognito

<a target="_blank" href="https://www.davidtucker.net/">David Tucker</a>'s sample iOS application that uses Cognito User Pools is at
<a target="_blank" href="
https://github.com/davidtucker/CognitoSampleApplication">
https://github.com/davidtucker/CognitoSampleApplication</a>

<a target="_blank" href="https://github.com/davidtucker/ps-serverless-app">github.com/davidtucker/ps-serverless-app</a> is explained in his <a target="_blank" href="https://app.pluralsight.com/paths/skills/building-serverless-applications-on-aws">Pluralsight video series "Building Serverless Applications on AWS"</a>.

Each high-level folder is a workspace defined in package.json:

A. The <strong>infrastructure</strong> folder
   * <a target="_blank" href="https://wilsonmar.github.io/aws-cdk/" title="Cloud Development Kit">AWS CDK</a>> leveraging pre-configured app components in TypeScript
   * Cloudwatch for Observability, Logging, metrics, and alarms;
   * For Communication: event bus and app messaging EventBridge, SQS, SNS
   * XRay for tracing
   <br /><br />

B. The <strong>services</strong> folder
   * Backend Serverless microservices built in JavaScript
   * For Continous Delivery: CodeBuild, CodePipeline, CloudFormation
   <br /><br />

C. The <strong>webapp</strong> folder
   * Frontend ReactJs app built in JavaScript
   <br /><br />

<hr />

## To make it all happen:

<a name="CognitoMenu"></a>

* Cognito menu for reference:
   <a target="_blank" href="https://user-images.githubusercontent.com/300046/149754921-1e99c239-4231-4330-bd18-a51afd38fd04.png">
   <img align="right" alt="aws-cognito-menu-221x534" src="https://user-images.githubusercontent.com/300046/149754921-1e99c239-4231-4330-bd18-a51afd38fd04.png"></a>

### &nbsp; &nbsp; &nbsp; A. Create Amazon Cognito user pool

1. <a href="#CreateUserPool">Create user pool</a>
2. <a href="#CreateAppClients">Create app client without client secret</a>
3. <a href="#CreateDomain">Create domain name</a>
4. <a href="#CreateResourceServer">Create resource server with custom scopes</a>
5. Configure App client Identity Provider (IdP) and other settings
6. Add users manually or import several at a time

   ### B. Set up an authorization endpoint

1. Create the authorization Lambda function
1. Write the function code
1. Grant Cognito access to the function
1. Test the function
1. Create an authorization endpoint
   
   ### C. Set up AWS API Gateway Authorization

1. <a href="#CreateAPIAuthorizer">Create an API authorizer</a>
1. <a href="#AddAudience">Setup endpoint authorization</a>
1. <a href="#DeployAuth">Deploy to Stage</a>

   ### D. Test the Secure API Gateway
   
1. Test the authorization endpoint
1. Test the secure endpoint
1. <a href="#WatchJWT">View JWT in CloudWatch Logs</a>

   ### E. Delete Cognito Users
   
1. <a target="_blank" href="https://iotespresso.com/delete-a-cognito-user-using-aws-lambda-python/">Delete Cognito User</a>

<hr />

## Cognito Terraform

<a target="_blank" href="https://registry.terraform.io/modules/rhythmictech/elb-cognito-auth/aws/latest
https://github.com/rhythmictech/terraform-aws-elb-cognito-auth">This</a>
provides Terraform that creates an ALB listener rule configured for Cognito authentication using a local user pool. It can also be used with a supplied Cognito user pool allowing for greater customizability. This module is meant to be a better solution when you need to protect web assets and don't want to use server-side HTTP basic authentication to keep the general public out of a staging site. 

Among other benefits, this means your backend configuration does not have to change to restrict access and also means that users can have individual usernames/passwords that they can perform account resets on.

Cognito stores user information in a <strong>Resource Server</strong> which manages user data in <strong>User Pools</strong>. 


<a name="CreateUserPool"></a>

## Create Cognito User Pool

See https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html

### Cognito service landing page

1. Cognito Management Console GUI:

   Version 1 of the Amazon GUI for Cognito at<br />
   https://us-west-2.console.aws.amazon.com/cognito/welcome?region=us-west-2<br />
   enables you to choose between "Manage User Pools" (the directory of users in Amazon Cognito) or "Manage Identity Pools" for Authorization of temporary AWS user credentials.

   Version 2 of the Amazon GUI for Cognito at<br />
   https://us-west-2.console.aws.amazon.com/cognito/v2/home?region=us-west-2#<br />
   has a drop down to "Grant access to AWS services" before clicking the orange "Create indentity pool".

   It prompts you to create the user pool as the first step.

1. In Version 1 URL:  

   <a name="UserPoolSetup"></a>

   ### Cognito User Pool Setup

   Cognito User Pools (CUPs) are referenced during sign-up and sign-in operations.

   Cognito normalizes secrets as CUP (Cognito User Pool) tokens (pronounced "cup tokens") for use with AWS API Gateway and Lambda.

   But to authenticate S3 and DynamoDB, the CUP token is sent to an <a href="#IdentityPools">Amazon Cognito Identity Pool</a>.

   <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_pool">Terraform to setup user pool</a> with SMS and software token MFA, and account recovery.

   When creating a user pool:

* (Pool) Name - QUESTION: What is the naming convention?

   <a name="UserAttributes"></a>

* (User) Attributes - cClick "Also sign-in with verified email address" because email addresses are uniqu, but requires users to have one). Cognito manages <strong>attribute</strong> values for each user, and ensures that required attributes are obtained:<br />

   <img width="949" alt="aws-cognito-attribs-1898x778" src="https://user-images.githubusercontent.com/300046/149676615-8b65c35b-2b89-4cdd-8db1-3db7fef23d3e.png">

* Policies - password minimum length. Selecting "Only allow administrators to create users" requires more toil by administrators.
* MFA and verifications - recovery; attributes to verify
* Message customizations
* Tags
* Devices
* App clients
* Triggers
<br /><br />   


### User Pool App Clients Config

<a name="CreateAppClients"></a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=fL-7UycSsfw&t=5m17s">VIDEO</a>:
   <br /><br />

1. Which app clients will have access to each user pool?

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/149683522-e612a661-06ce-468b-babf-78994717e81a.png">
   <img align="right" width="547" alt="aws-cognito-client-config-547x392" src="https://user-images.githubusercontent.com/300046/149683522-e612a661-06ce-468b-babf-78994717e81a.png"></a>

   QUESTION: What are the recommendations for days and minutes:
   * Refresh token expiration (60 - 3560 days)
   * Access token expiration (5 minutes - 1 day)
   * ID token expiration (5 minutes - 1 day)
   <br /><br />

   <a name="SRP_auth"></a>

   ### Cognito Client SRP Auth

1. The "Generate client secret" or <tt><strong>generate_secret</strong></tt> Boolean <tt>true</tt> parameter in <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_pool_client">Terraform for client file</a> is what defines use of <a href="#SRP_auth_details">SRP auth details (at the bottom of this page)</a>.

1. Optionally with <a target="_blank" href="https://aws.amazon.com/pinpoint/">AWS Pinpoint</a> for multichannel <a target="_blank" href="http://aws.amazon.com/mobileanalytics/faqs/">marketing communication analytics</a> and to <a target="_blank" href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities.html">send SMS messages to phones</a> from an originator ID.

   See https://github.com/capless/warrant - a Python library for using AWS Cognito with support for SRP.

   ### OAuth 2.0 app settings

1. Define Sign-in Callback and sign-out URLs:

1. Define OAuth 2.0

   ![aws-cognito-oauth2-config-577x271](https://user-images.githubusercontent.com/300046/149684586-9307ccf4-2ab5-4344-9bff-a6e453949c68.png)

   <a name="CreateDomain"></a>
   
   ### Create Cognito Domain

1. Click on "Domain name" on the Configuration menu.

1. Define the unique internet domain name (in each region) that Amazon Cognito uses to host sign-up and sign-in pages for each User Pool:

   <tt>https://_______.<strong>auth</strong>.us-east-1.<strong>amazoncognito.com</strong></tt>

1. After association, a DNS alias record needs to be added to the domain's hosted zone.

1. Generate a certificate in the ACM (AWS Certificate Manager).

   ### Create Users and Groups

1. <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_group">Terraform to setup user groups</a>

1. In the GUI "Users and groups", users can also be imported from a CSV file.

   Alternately, users can also be added manually.

   <a name="CreateAPIAuthorizer"></a>

   ### API Gateway Authorizer config

   Terraform for AWS API Gateway is at:
   * https://registry.terraform.io/modules/terraform-aws-modules/apigateway-v2/aws/latest
   * https://github.com/terraform-aws-modules/terraform-aws-apigateway-v2
   <br /><br />
   
   <img align="right" width="204" alt="aws-api-gatewy-menu-204x698" src="https://user-images.githubusercontent.com/300046/149770685-584a74e0-e3f4-4f87-a0dc-415d7ff6da29.png">

1. <a target="_blank" href="https://www.youtube.com/watch?v=fL-7UycSsfw&t=8m49s">VIDEO</a>: Copy the Cognito Pool Id and ARN within its <a href="#CognitoMenu">"General Settings" menu</a> (such as <tt>us-east-1.p40lmEB0d</tt>) to construct Cognito's Issuer URL for your region:

   <tt>https://cognito-idp.<strong>us-east-1</strong>.amazonaws.com/<strong>us-east-1.p40lmEB0d</strong></tt>

   PROTIP: Flexibility (and less toil) in specifying different regions is why automation IaC is useful -- specify the region in one place and it gets automatically applied without mistakes every time.

   <a target="_blank" href="https://www.youtube.com/watch?v=nwtP-aBXty0&list=RDCMUCwDlyuX3Fkg5WNBufLnH6dw&index=14">VIDEO: Lambda authorizer</a>

   <a name="AddAudience"></a>

   ### Set up endpoint authorization

   <a target="_blank" href="https://www.youtube.com/watch?v=fL-7UycSsfw&t=9m57s">VIDEO</a>: 
   "Enter client IDs that are registered with identity providers or any arbitrary string in the JWT audience claim that the authorizer must verify."

1. Click "Add audience".
1. Switch to the <a href="#CognitoMenu">Cognito menu item "App clients"</a> to highlight and copy the App client Id (such as <tt>2iqdo52jkqg0q2cqbe76qah08</tt>).
1. Switch back to paste it.
1. Click "Create and Attach".

   NOTE: https://github.com/serverless/examples/tree/master/aws-node-auth0-cognito-custom-authorizers-api
   * AWS CLI2
   * Python Boto3
   * AWS Cognito web
   * etc.
   <br /><br />


   <a name="SetupAuthScope"></a>

   ### Set up authorization scope

   <a target="_blank" href="https://www.youtube.com/watch?v=fL-7UycSsfw&t=10m17s">VIDEO</a>: 

1. Click "Add scope".
1. Switch to the <a href="#CognitoMenu">Cognito menu item "App client settings"</a> to highlight and copy the Allowed Custom Scopes (such as <tt>test/test.read</tt>).
1. Switch back to paste it.
1. Click "Create and Attach".
1. Click "Save".

   <a name="DeployAuth"></a>

   ### Deploy

1. <a target="_blank" href="https://www.youtube.com/watch?v=fL-7UycSsfw&t=10m40s">VIDEO</a>: Click "Deploy".
1. Select version.
   ![aws-api-deploy-563x334](https://user-images.githubusercontent.com/300046/149770961-e1fc8ed8-9b74-42db-a649-e7229291f7d9.png)

   ### identity_pool_roles_attachment

   TODO:

   <a name="WatchJWT"></a>

   ### View JWT in CloudWatch Logs

   <a target="_blank" href="https://www.youtube.com/watch?v=fL-7UycSsfw&t=18m28s">VIDEO</a>:

1. In API Gateway, click on menu "Routes".
1. Click on GET for "/test".
1. Click on "Configure" for Integration backend resource.
1. Click on the Lambda function link to open it.
1. Scroll to click "Monitor" on the bar.
1. View logs in CloudWatch.
1. Click on a Log stream ID.
1. Click on a Log events entry to expand it.

   <a target="_blank" href="https://www.youtube.com/watch?v=1nXy8nQ_6PI">VIDEO: JWT Structure dynamically illustrated</a>

<hr />

## Use AWS Directory

   * http://aws.amazon.com/directoryservice/faqs/
   <br /><br />

The AWS Directory service connects existing on-premises Microsoft Active Directory to the AWS cloud.

1. Enable Kerberos
1. Create an <strong>AD Connector</strong> to connect to your on-premise Microsoft Active Directory domain using AWS applications such as Amazon WorkSpaces, Amazon WorkDocs, or Amazon WorkMail using their corporate credentials. 
1. Configure an <strong>Amazon Virtual Private Cloud (VPC)</strong> with a hardware VPN connection to your on-premises environment, or provision a dedicated connection with AWS Direct Connect. 
1. Establish a limited privilege account used by AD Connector to authenticate and connect to one of the domain controllers and proxy various authentication, domain join, and look-up requests -- by providing the name of your on-premises Microsoft Active Directory, DNS servers to discover Microsoft Active Directory, and an account name and password pre-created in your Microsoft Active Directory. 
1. Configure auto scaling.

<hr />

## Cognito Client Coding in various languages

Python:
   * https://github.com/JinlianWang/aws-lambda-authentication-python
   * https://www.educative.io/edpresso/what-is-the-python-code-for-aws-cognito
   * https://medium.com/@houzier.saurav/aws-cognito-with-python-6a2867dd02c6
   * https://gist.github.com/Integralist/07d62f6a55ba42481b23458c15c00e27 require you to be using Pipenv for handling you Python dev environment.
   <br /><br />

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

A competitor to SAML is <strong>OpenID Connect</strong> working with OAuth2 is used by Google. OpenID is designed to only allow a service provider (Google) to initiate the identification process.

NOTE: SAML formats in XML.

Additional back-end processes include mass upload from a CSV file for first-time setup or for disaster recovery.


<a name="CreateResourceServer"></a>

### Cognito Resource Server and clients

Terraform for <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_resource_server">resource server</a> for a scope.




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

<hr />

## Amazon Cognito Sync

Amazon Cognito Sync ensures reliancy by storing (for distribution) application state, profile info, previously viewed content, location tracking, etc.
This include management of caches on mobile devices, to enable offline use.

Sync info is saved and retrieved by a key-value pair (dictionary) saved within a <strong>dataset</strong>.
CAUTION: Currently, each dataset is limited to 1MB because the entire dataset is sync'd at once. Each identity can have a maximum of 20 datasets.

WARNING: Amazon is moving Sync to AWS AppSync to enable multiple users to access the same data as well as to collaborate in real time on shared data.

<hr />

## More technical details

<a name="SRP_auth_details"></a>

### SRP auth details

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


<a name="HTTP_API"></a>

## HTTP API

   * https://www.youtube.com/watch?v=yCAlJv6zfn4
   <br /><br />

PROTIP: AWS HTTP API costs 30% less than REST API calls.

HTTP APIs can be edge-optimized, private, and use AWS WAF with resource policies and certificates for backend authentication.

HTTP APIs can have execution logs and use X-Ray tracing via Access logs to Amazon Kinesis Data Firehose (REST APIs can't)

### Cognito User Pool Backup/Restore

https://github.com/rahulpsd18/cognito-backup-restore

<hr />

## References

