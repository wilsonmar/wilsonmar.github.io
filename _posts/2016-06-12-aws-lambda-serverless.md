---
layout: post
title: "AWS Lambda Serverless (using Python)"
excerpt: "An invisible server for the masses"
tags: [node, serverless]
image:
# feature: pic orange wm_mcnaughton_sunset_runner_1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622121/097d7550-0585-11e6-9543-27d45c2487c2.jpg
  credit: William McNaughton
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This tutorial aims to have you ending up with a serverless app running in the Amazon cloud.

This is a follow-up to <a target="_blank" href="https://wilsonmar.github.io/serverless/">my notes on the ecosystem around the Serverless computing concept</a>.

## Permissions for serverless-admin

0. Create an Amazon Web Services account. See [my tutorial on Amazon on-ramp](/amazon-onboarding/).

   ### Create a "serverless-admin" user 

   This is used to do work under an AWS account Administrator Access policy.

1. Login to your AWS account
0. Go to the **Identity & Access Management (IAM)** page
0. Click on **Users**
0. Click on **Create New Users** or edit an existing user.
0. Enter *serverless-admin* and click **Create**
0. Click on **Download Credentials** to download the .csv file with the AWS credentials
0. Click **Users** on the left
0. Click on the *serverless-admin* user
0. Go to the **Permissions** tab
0. Click **Attach Policy** and select the **Administrator Access**
0. Click on **Attach Policy**

### Python

0. Install Python. See <a href="https://wilsonmar.github.io/python-install/">
   my tutorial on Python interpreter installation on Macs</a>.

0. Install AWS CLI per 
   <a target="_blank" href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html" target="_blank">
   https://docs.aws.amazon.com/cli/latest/userguide/installing.html</a>

   <pre><strong>pip install --upgrade --user awscli
   </strong></pre>

   The \-\-upgrade option tells pip to upgrade any requirements that are already installed. 

   The \-\-user option tells pip to install the program to a subdirectory of your user directory to avoid modifying libraries used by your operating sytem.

0. Verify:

   <pre><strong>aws --version
   </strong></pre>

0. To uninstall:

   <pre><strong>pip uninstall awscli
   </strong></pre>

0. Obtain AWS Access Key ID

   <a target="_blank" href="https://github.com/pmuens/serverless-book/blob/master/04-setup/02-cloud-provider-setup.md">
   https://github.com/pmuens/serverless-book/blob/master/04-setup/02-cloud-provider-setup.md</a>

   <tt><strong>aws configure
   </strong></tt>

## Example of processing an S3 image

The <a href="https://www.qwiklabs.com/focuses/284?locale=en&parent=catalog">
Qwiklab Introduction to AWS Lambda</a>

1. Login to 

## Lambda CLI

https://blog.symphonia.io/learning-lambda-part-5-743d8a99db53


## Resources #

* <a target="_blank" href="https://cloudacademy.com/webinars/aws-lambda-advanced-coding-session-22/">
  video: Advanced Coding Session</a>
  and
  <a target="_blank" href="http://www.slideshare.net/AlexCasalboni/aws-lambda-advanced-coding-session/1">
  slides</a>
  (API Gateway authentication use cases, Amazon Kinesis Streams, Amazon Cognito and AWS CloudFormation)
  by Alex Casalboni of CloudAcademy.
   <a target="_blank" href="https://gist.github.com/alexcasalboni/b045542bbd77b9d0bdac2db939575eec/">
  repo</a>

On Pluralsight:

* <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-developer-serverless-architecture-monitoring">AWS Developer: Serverless Architecture and Monitoring</a> 31 Oct 2018 [1h 36m] by Ryan Lewis

* <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-polly-voice-enabled-serverless-website">
Building a Voice-enabled Serverless Website with AWS Polly</a>
10 Jul 2018, 1h 46m
by Raluca Bolovan

* <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-deploying-serverless-applications-application-model">Deploying Serverless Applications in AWS Using the Serverless Application Model</a>

* <a target="_blank" href="https://app.pluralsight.com/library/courses/play-by-play-build-serverless-node-web-api">
Play by Play: Build a Serverless Node Web API</a> 9 Apr 2018, 1h 16m
by Simona Cotin and John Papa

* <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-nodejs-serverless-framework-using">
Using the Serverless Framework with Node.js on AWS</a>
4 Oct 2017, 1h 38m
by Fernando Medina Corey (@fmc_sea, fernandomc.com)


## Twitter #

@AWSLambda

\#AWSLambda

@lambda_conf

@lambdatips


## More on Serverless #

This is one of a series on Serverless computing

{% include serverless_links.html %}


## More on Clouds #

This is one of a series on Cloud computing

{% include cloud_links.html %}
