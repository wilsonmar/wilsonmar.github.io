---
layout: post
title: "AWS DevOps (CodeCommit, CodeBuild, CodePipeline, CodeDeploy)"
excerpt: "Get certified in Developer Operations on AWS"
tags: [AWS, EC2, cloud, on-boarding]
date: "2021-10-13"
file: "aws-devops"
image:
# feature: pic data center slice 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622043/8b1f9cce-0584-11e6-8b9f-4b6db5bb6e37.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/aws-devops/">This tutorial</a> contains my notes about getting certified as a <a target="_blank" href="https://aws.amazon.com/certification/certified-devops-engineer-professional/">
AWS Certified DevOps Engineer - Professional</a> -- able to setup and manage continuous integration and deployment in the AWS cloud -- after paying $300 USD to <strong>write out</strong> 80 essay (not multiple-choice) questions in 170 minutes (3 hours with no breaks). <strong>That's 2.1 seconds per essay question.</strong>
Those who fail the exam must wait 30 days before being allowed to retake the exam (at additional cost), and only 3 times in a 12 month period.

{% include whatever.html %}

The previous pre-requisite is passing either one:
* https://aws.amazon.com/certification/certified-sysops-admin-associate/
* https://aws.amazon.com/certification/certified-developer-associate/

## References

   * <a target="_blank" href="https://github.com/awslabs/aws-devops-essential">
   AWS DevOps Essentials</a>
   <br /><br />

<a target="_blank" href="https://amzn.to/306ZtBu">
Building a CI/CD Pipeline</a>

<a target="_blank" href="https://docs.aws.amazon.com/artifact/">
AWS Artifact</a> competes with DockerHub, JFrog Artifactory, etc. to hold Docker containers and other artifacts built for loadeding into Kubernetes and other run-time systems.

From <a target="_blank" href="https://www.youtube.com/user/AmazonWebServices/playlists">AWS YouTube playlist</a>:

   * https://www.youtube.com/playlist?list=PLhr1KZpdzukeH9VMPbNHMCXl_NrVc1JGe
   * https://www.youtube.com/playlist?list=PLhr1KZpdzuke5pqzTvI2ZxwP8-NwLACuU
   * https://www.youtube.com/playlist?list=PLhr1KZpdzukeMbjRqGswHX38DCqOHZ5GA
   * https://www.youtube.com/playlist?list=PLhr1KZpdzukfVW6NrpDzdT6Sej0p5POkN

   * http://cantrill.io
   * http://ozaws.com
   * https://serverlesscode.com/
   * https://paulwakeford.info/
   * https://aws.amazon.com/blogs/aws/
   * https://www.awsarchitectureblog.com
   * http://blogs.aws.amazon.com/application-management
   * http://blogs.aws.amazon.com/security/
   * https://aws.amazon.com/blogs/compute/
   * https://aws.amazon.com/whitepapers/

https://aws.amazon.com/documentation/

   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html

* <a target="_blank" href="https://acloud.guru/learn/aws-certified-devops-engineer-professional">AWS Certified DevOps Engineer - Professional 6-hour video</a> by Nick Triantafillou covers:

   * Core Concepts
   * CI/CD Automation
   * Monitoring/Metrics/Logging
   * Security/Governance/Validation
   * High Availability and Elasticity
   * Operations

https://wilsonmar.github.io/build-load-balanced-servers-in-AWS-EC2/

<a target="_blank" href="https://aws.amazon.com/getting-started/projects/set-up-ci-cd-pipeline/">Projects on AWS: Set Up a CI/CD Pipeline on AWS</a>

From https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials.html

A pipeline helps you automate steps in your software delivery process, such as initiating automatic builds and then deploying to Amazon EC2 instances. You will use AWS CodePipeline, a service that builds, tests, and deploys your code every time there is a code change, based on the release process models you define. Use CodePipeline to orchestrate each step in your release process. As part of your setup, you will plug other AWS services into CodePipeline to complete your software delivery pipeline. This guide will show you how to create a very simple pipeline that pulls code from a source repository and automatically deploys it to an Amazon EC2 instance.

<hr />

## What is DevOps (DevSecOps)?

<a target="_blank" href="https://aws.amazon.com/devops/">
Amazon</a> defines "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity."

<a name="CodeDeploy"></a>

## CodeCommit, CodeBuild, CodePipeline, CodeDeploy #

![aws devops 201606-650x209-i11](https://cloud.githubusercontent.com/assets/300046/17295043/77eae0e8-57b7-11e6-958b-dc26ebe74361.jpg)

## CodeCommit setup

<img align="right" width="252" alt="aws-codecommit-left-menu-252x481-8146.jpg" src="https://user-images.githubusercontent.com/300046/55664582-83b42e00-57ed-11e9-8534-a7ee42523b2b.jpg">
   * <a target="_blank" href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>
   * <a target="_blank" href="https://beta.linuxacademy.com/#/hands-on-labs/details/660e6820-fec6-48de-a415-5f242ba5b5e7?redirect_uri=https:%2F%2Fapp.linuxacademy.com%2Fsearch">Create and Clone an AWS CodeCommit Repository</a> video hands-on course.
   <br /><br />

AWS CodeCommit competes with GitHub, GitLab, BitBucket, and other cloud-based text code repositories.

Repositories in AWS CodeCommit have a URL that contains a region, such as:

   <tt>https://git-codecommit.us-east-1.amazonaws.com/v1/repos/MyRepo</tt>


## CodeBuild Setup

   * <a target="_blank" href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">AWS CodeBuild User Guide</a>
   <br /><br />


## CodeDeploy Setup instances #

   * <a target="_blank" href="https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html">AWS CodeDeploy User Guide</a>
   <br /><br />

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

0. <a target="_blank" href="https://us-west-2.console.aws.amazon.com/codedeploy/home?region=us-west-2#/first-run/welcome">Got to AWS CodeDeploy service, Get Started Now</a>.
0. Custom deployment.
0. Specify an Application Name and Deployment Group Name according to your organization's naming standards.
0. Select Tag Type "Amazon EC2" value "Dev" specified for 2 instances in a step above.
0. Deployment Config - AllAtOnce (instead of Half at a time).
0. No Triggers.
0. Select a Service Role ARN defined in a prior step. Create Application.

   The AWS Console provides code to deploy from a S3 bucket.


## AWS CodePipeline #

   * <a target="_blank" href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">AWS CodePipeline User Guide
   <br /><br />

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
0. Cleanup: Delete the pipeline you just created.

PROTIP: Each pipeline costs about $1 per month, and charges only if a deployment occurs.


### View app deployed #

0. In EC2, copy the Public DNS address, such as:

   <pre>"ec2-11-222-177-132-us-west-2-compute.amazonaws.com</pre>

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

This is simpler than Packer from HashiCorp.


## Learning Resources #

<a target="_blank" href="https://au.linkedin.com/in/Nick Triantafillou">
Australian</a> Nick Triantafillou (@xelfer)
for $99 provides 6 hours of videos covering 60 lessons in
<a target="_blank" href="https://acloud.guru/learn/aws-certified-devops-engineer-professional">
his ACloud.guru course</a>.

Mike Pfeiffer
created at Pluralsight a series of video courses, one for each "domain" of the AWS Certified DevOps Engineer Professional exam:

1. <a target="_blank" href="https://app.pluralsight.com/library/courses/continuous-delivery-automation-aws-certified-devops-engineer">
Continuous Delivery and Process Automation</a> 4h 16m Apr 28, 2016

2. <a target="_blank" href="https://app.pluralsight.com/library/courses/monitoring-metrics-logging-aws-certified-devops-engineer">
Monitoring, Metrics, and Logging</a> 2h 46m June 2, 2016

   * CloudWatch
   * CloudTrail
   <br /><br />

3. <a target="_blank" href="https://app.pluralsight.com/library/courses/security-governance-validation-aws-certified-devops-engineer">
Security, Governance, and Validation</a> 2h 11m July 26, 2016

   * Delegation & Federation
   * Corporate Identity Federation
   * Web Identity Federation
   <br /><br />

4. <a target="_blank" href="https://app.pluralsight.com/library/courses/high-availability-elasticity-aws-certified-devops-engineer">
High Availability and Elasticity</a> 2h 51m Sept 26, 2016

   * Auto Scaling
   * GSI/LSI
   * RDS
   * Dynamo
   * Aurora
   * SQS
   * Kinesis
   <br /><br />

Justin Manga (@jmenga, pseudo.co.de) in Pluralsight video course
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

The README page says "Boto3 is the Amazon Web Services (AWS) Software Development Kit (SDK) for Python, which allows Python developers to write software that makes use of services like Amazon S3 and Amazon EC2."

<a target="_blank" href="https://github.com/boto/boto3">https://github.com/boto/boto3</a>

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

## References

<a target="_blank" href="https://aws.amazon.com/training/course-descriptions/devops-engineering/">Amazon's own DevOps Engineering on AWS</a> 3-day classroom course covers:

* Use the principal concepts and practices behind the DevOps methodology
* Design and implement an infrastructure on AWS that supports one or more DevOps development projects
* Use AWS CloudFormation and AWS OpsWorks to deploy the infrastructure necessary to create development, test, and production environments for a software development project
* Use AWS CodeCommit and AWS CodeBuild to understand the array of options for enabling a continuous integration (CI) environment on AWS
* Use AWS CodePipeline to design and implement a continuous integration and continuous delivery (CI/CD) pipeline on AWS
* Use AWS CodeStar to manage all software development activities in one place
* Implement several common continuous deployment (CD) use cases using AWS technologies, including blue/green deployment and A/B testing

* Distinguish between the array of application deployment technologies available on AWS, including AWS CodeDeploy, AWS OpsWorks, AWS Elastic Beanstalk, Amazon Elastic Container Service (Amazon ECS), and Amazon Elastic Container Registry (Amazon ECR), and decide which technology best fits a given scenario
* Use Amazon EC2 Systems Manager for patch management
* Leverage automated testing in different stages of a CI/CD pipeline
* Fine-tune the applications you deliver on AWS for high performance, and use AWS tools and technologies to monitor your application and environment for potential issues


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}

