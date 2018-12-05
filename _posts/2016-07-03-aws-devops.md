---
layout: post
title: "AWS DevOps"
excerpt: "Get certified in Developer Operations on AWS"
tags: [AWS, EC2, cloud, on-boarding]
image:
# feature: pic data center slice 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622043/8b1f9cce-0584-11e6-8b9f-4b6db5bb6e37.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

You are at <a target="_blank" href="https://wilsonmar.github.io/aws-devops/">
https://wilsonmar.github.io/aws-devops/</a>

This tutorial describes information to get certified as a <a target="_blank" href="https://aws.amazon.com/certification/certified-devops-engineer-professional/">
AWS Certified DevOps Engineer - Professional</a>,
which focuses on continuous integration and deployment in the AWS EC2 cloud.
It costs $300 USD to <strong>write out</strong> 80 essay (not multiple-choice) questions in 170 minutes (with no breaks). <strong>That's 2.1 seconds per question.</strong>
Those who fail the exam must wait 30 days before being allowed to retake the exam,
and only 3 times in a 12 month period.

Its pre-requisite is passing either one:
* https://aws.amazon.com/certification/certified-sysops-admin-associate/
* https://aws.amazon.com/certification/certified-developer-associate/

<hr />

<a target="_blank" href="https://aws.amazon.com/devops/">
Amazon</a> defines "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity."

<a name="CodeDeploy"></a>

## CodeCommit, CodePipeline, Code Deploy #

![aws devops 201606-650x209-i11](https://cloud.githubusercontent.com/assets/300046/17295043/77eae0e8-57b7-11e6-958b-dc26ebe74361.jpg)

### Setup instances #

0. In IAM Service, create Role "codedeploy".

0. Create CDInstanceRole

0. In Compute EC2 service, launch Amazon Linux, t2.micro, 2 instances, using the role created above.
   In Advanced Details, paste script from https://gist.github.com/mikepfeiffer/4d9386afdcceaf29493a

   EC2 UserData script to install <strong>CodeDeploy agent</strong>:

   <pre>
   #!/bin/bash
   yum install -y aws-cli
   cd /home/ec2-user/
   aws s3 cp 's3://aws-codedeploy-us-east-1/latest/codedeploy-agent.noarch.rpm' . --region us-east-1
   yum -y install codedeploy-agent.noarch.rpm
   </pre>

   CUSTOMIZE folder, region mentionedtwice.

0. Tag instances with name "Dev" for Development.
0. Add a Security Group Role for HTTP. No SSH.

### AWS CodeDeploy Setup #

0. <a target="_blank" href="https://us-west-2.console.aws.amazon.com/codedeploy/home?region=us-west-2#/first-run/welcome">
   Got to AWS CodeDeploy service, Get Started Now</a>.
0. Custom deployment.
0. Specify an Application Name and Deployment Group Name according to your organization's naming standards.
0. Select Tag Type "Amazon EC2" value "Dev" specified for 2 instances in a step above.
0. Deployment Config - AllAtOnce (instead of Half at a time).
0. No Triggers.
0. Select a Service Role ARN defined in a prior step. Create Application.

   The Console provides code to deploy from a S3 bucket.

### AWS CodePipeline #

0. <a target="_blank" href="https://us-west-2.console.aws.amazon.com/codepipeline/home?region=us-west-2#/create/Name">
  Go to AWS CodePipeline service, Get Started</a>.
0. Specify a Pipeline name according to your organization's naming standards. ("Pipeline1")
0. Select Source Provider: GitHub (NOT Amazon S3). Click Connect to GitHub.
0. Select a Repository and Branch from the GitHub account authenticated.
0. Select Deployment provider AWS CodeDeploy (NOT AWS Elastic Beanstalk).
0. Supply AWS CodeDeploy Application Name and Deployment group from earlier.
0. Do not define Build Stage (until we have a build).
0. Create Service Role using default name "AWS-CodePipeline-Service". View Policy Document to review Actions allowed the role:
0. Review Pipeline summary.

### View app deployed #

0. In EC2, get the Public DNS address (such as "ec2-11-222-177-132-us-west-2-compute.amazonaws.com").
0. Paste URL in an internet browser.

   It should respond with "Congratualations".

### Make Change #

0. Commit.
0. Detect a change.
0. View app deployed again.


0. Create a Deployment Group or Autoscaling Group
0. CodePipeline


0. appspec.yml file in the root folder in source code repo

   <pre>
version: 0.0
os: linux
files:
  - source: /index.html
    destination: /var/www/html/
hooks:
  BeforeInstall:
    - location: scripts/install_dependencies
      timeout: 300
      runas: root
    - location: scripts/start_server
      timeout: 300
      runas: root
  ApplicationStop:
    - location: scripts/stop_server
      timeout: 300
      runas: root
   </pre>


0. For sample application, it's just a single index.html file containing CSS, no JavaScript.

   https://github.com/mikepfeiffer/aws-codedeploy-linux/blob/master/index.html

0. Install dependencies

   <pre>
   #!/bin/bash
   yum install -y httpd
   </pre>

0. Start server

   <pre>
   #!/bin/bash
   service httpd start
   </pre>

0. Stop server:

   <pre>
   #!/bin/bash
   isExistApp = `pgrep httpd`
   if [[ -n  $isExistApp ]]; then
       service httpd stop        
   fi
   </pre>

using AWS Code Services

CodeDeploy agent in EC2 Deploy Group

* Amazon Route 53 globomantics.com

* https://github.com/mikepfeiffer/PowerShell


## Snapshot AMIs #

Building a server from installers in S3
can be time-consuming because it take so much I/O and network bandwidth.

Michael Tripoli & Karate Vick at <a target="_blank" href="https://medium.com/@NetflixTechBlog">
Netflix</a> <a target="_blank" href="https://github.com/Netflix/aminator/">
open-sourced on GitHub</a> their Python tool called "Animator" for creating EBS-backed AMIs.
The tool create a <strong>Base AMI</strong>
by taking a snapshot of the root volume
and making it available as an EBS volume that can be used to launch an EC2 instance.

It's described <a target="_blank" href="https://medium.com/netflix-techblog/ami-creation-with-aminator-98d627ca37b0">
on Medium</a> and in <a target="_blank" href="http://techblog.netflix.com/2013/03/ami-creation-with-aminator.html">
this blog from 2013</a>.

They said "We knew that application startup latency would be very important, especially during scale-up operations."

This is simpler than Packer from Hashicorp.


## Learning Resources #

<a target="_blank" href="https://au.linkedin.com/in/Nick Triantafillou">
Australian</a> Nick Triantafillou (@xelfer)
recorded 6 hours of videos that covers 60 lessons in
<a target="_blank" href="https://acloud.guru/learn/aws-certified-devops-engineer-professional">
his course</a> which can be purchased separately for $99.

Mike Pfeiffer
created at Pluralsight a series of video courses, one for each <strong>"domain" of the AWS Certified DevOps Engineer Professional exam:

1. <a target="_blank" href="https://app.pluralsight.com/library/courses/continuous-delivery-automation-aws-certified-devops-engineer">
Continuous Delivery and Process Automation</a> 4h 16m Apr 28, 2016

2. <a target="_blank" href="https://app.pluralsight.com/library/courses/monitoring-metrics-logging-aws-certified-devops-engineer">
Monitoring, Metrics, and Logging</a> 2h 46m June 2, 2016

   * CloudWatch
   * CloudTrail

3. <a target="_blank" href="https://app.pluralsight.com/library/courses/security-governance-validation-aws-certified-devops-engineer">
Security, Governance, and Validation</a> 2h 11m July 26, 2016

   * Delegation & Federation
   * Corporate Identity Federation
   * Web Identity Federation

4. <a target="_blank" href="https://app.pluralsight.com/library/courses/high-availability-elasticity-aws-certified-devops-engineer">
High Availability and Elasticity</a> 2h 51m Sept 26, 2016

   * Auto Scaling
   * GSI/LSI
   * RDS
   * Dynamo
   * Aurora
   * SQS
   * Kinesis

Justin Manga (@jmenga, pseudo.co.de) in video course
<a target="_blank" href="https://app.pluralsight.com/player?course=docker-ansible-continuous-delivery">
Continuous Delivery using Docker and Ansible</a> 
shows learners how to create a Python app,
then Jenkins 2 Pipeline plugin in a container
using Cloud Formation files.
deploy to a EC2 Container Services 
holding Debian instances.

Since ECS has Group of 497:

   <pre>
ARG DOCKER_GID=497
RUN groupadd -g ${DOCKER_GID:-497} docker
ARG DOCKER_ENGINE=1.10.2
ARG DOCKER_COMPOSE=1.6.2
   </pre>

* http://blog.serverbooter.com/blog/2013/10/24/simple-clouformation-with-multiple-aws-accounts/

## Boto Python

https://github.com/boto/boto3
The README page says "Boto3 is the Amazon Web Services (AWS) Software Development Kit (SDK) for Python, which allows Python developers to write software that makes use of services like Amazon S3 and Amazon EC2."


<a target="_blank" href="http://www.oznetnerd.com/python-demystifying-aws-boto3/">NOTE</a>:
Boto 3 is built on top of Botocore used by the AWS CLI:

* <a target="_blank" href="http://boto3.readthedocs.io/en/latest/guide/session.html">Sessions</a>
* Clients: low level service connections
<br /><br />

Boto 3 consists of these major features:

* <a target="_blank" href="http://boto3.readthedocs.io/en/latest/guide/resources.html">Resources</a>: a high level, object oriented interface
* Collections: a tool to iterate and manipulate groups of resources
* Paginators: automatic paging of responses
* Waiters: a way to block until a certain state has been reached



## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}

