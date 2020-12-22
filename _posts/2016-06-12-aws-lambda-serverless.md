---
layout: post
title: "AWS Lambda Serverless (using Python)"
excerpt: "An invisible server for the masses"
tags: [node, serverless]
date: "2016-06-12"
file: "aws-lambda-serverless"
image:
# feature: pic orange wm_mcnaughton_sunset_runner_1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622121/097d7550-0585-11e6-9543-27d45c2487c2.jpg
  credit: William McNaughton
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This tutorial aims to have you ending up with a serverless app running in the Amazon cloud
-- a multi-user to-do list MVC application based on <a target="_blank" href="https://vuejs.org/">Vue.js</a>. 

This is a follow-up to <a target="_blank" href="https://wilsonmar.github.io/serverless/">my notes on the ecosystem around the Serverless computing concept</a>.

This page contains <strong>notes</strong> based on several sources, including 
Last updated 2017, video course <a target="_blank" href="https://cloudacademy.com/course/build-aws-serverless-web-applications-with-python/">"Build AWS Serverless Web Applications with Python"</a> (3.6) Virtualenv by Ben Lambert covers coding using Visual Studio Code from <a target="_blank" href="https://github.com/whelmed/ca-python-serverless">https://github.com/whelmed/ca-python-serverless</a>. 

As with many Serverless running within AWS, the example uses AWS API Gateway. Serverless with Salesforce has input via another API Gateway. Also used in AWS are S3 Buckets to store files, DynamoDB to store documents, and Cognito User Pool to mange user metadata:

![serverless-aws-arch-463x534](https://user-images.githubusercontent.com/300046/102751967-0bc1ca80-4326-11eb-9327-0e8604ed3e26.png)

Vagrant, VirtualBox, 

   * https://github.com/spulec/moto
   * https://github.com/awslabs/aws-sam-local

## AWS Account setup

1. Obtain an account.

   ### Setup DynamoDB

1. At the AWS Console, select "DynamoDB".
1. Table Name: "TodoList"
1. Primary key: Partition key: userId. Add sort key: todoId. Use default settings.

   ### Setup Cognito User Pool

1. At the AWS Console, select "Cognito".
1. Pool Name: TodoUserPool. Review defaults.
1. Alias attribute: Email address or phone number.
1. Menu: App client. Add an app client. App client name: "AppClientForTodoUserPool"
1. Uncheck Generate client secret. Creat client app.
1. Create pool. In "App clients" page, copy App client id.

   ### IAM

1. At the AWS Console, select "IAM"
1. In Users, Add User, "todo_developer", Programmatic access
1. Create New Group. "todo-serverless"

1. Install awscli
1. pem file on local laptop.






## Permissions for serverless-admin

1. Create an Amazon Web Services account. See [my tutorial on Amazon on-ramp](/amazon-onboarding/).

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

### Python setup

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


## API Gateway

- API Gateway Overview: https://aws.amazon.com/api-gateway/

- API Gateway Developer Documentation: https://aws.amazon.com/documentation/apigateway/

Understanding the costs of API Gateway is also crucial. What you see in this course will be within the free tier but once you start playing around with it on your own or you're using it for production, you may encounter costs.

Check the following link to understand what's free and what's not: https://aws.amazon.com/api-gateway/pricing/

## Serverless Application Model (SAM)

SAM Github Page: https://github.com/awslabs/serverless-application-model

Using SAM: https://github.com/awslabs/serverless-application-model/blob/master/HOWTO.md

Deploying Lambda Functions (with SAM and even automated!): http://docs.aws.amazon.com/lambda/latest/dg/deploying-lambda-apps.html

## Testing

https://github.com/atlassian/localstack


## Lambda CLI

https://blog.symphonia.io/learning-lambda-part-5-743d8a99db53

New Lambda Layers: http://bit.ly/2TEPC15 

* FFmpeg (media processing)
* SOX (Sound eXchange)
* Pandoc (document conversion)
* RSVG (SVG rendering) - (nice work, 


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

On LinuxAcademy:

* <a target="_blank" href="https://beta.linuxacademy.com/#/challenges/details/d39c6361-d78b-41f1-bbad-98f430fb80a0?redirect_uri=https://app.linuxacademy.com/search?query=c%23">QUIZ: Serverless Architectures on AWS for the Solutions Architect</a>
[15m] Jul 22, 2018 by Wayde Gilchrist


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

<a target="_blank" href="https://www.twitter.com/@AWSLambda">@AWSLambda</a>

<a target="_blank" href="https://www.twitter.com/#AWSLambda">\#AWSLambda</a>

<a target="_blank" href="https://www.twitter.com/@lambda_conf">@lambda_conf</a>

<a target="_blank" href="https://www.twitter.com/@lambdatips">@lambdatips</a>

<a target="_blank" href="https://www.twitter.com/@esh">@esh = Eric Hammond</a>


## More on Serverless #

This is one of a series on Serverless computing

{% include serverless_links.html %}


## More on Clouds #

This is one of a series on Cloud computing

{% include cloud_links.html %}

## More about Python

This is one of a series about Python:

{% include python_links.html %}
