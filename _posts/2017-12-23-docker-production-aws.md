---
layout: post
title: "Docker production AWS"
excerpt: "from a Mac using EC2 CloudFormation, EC2 Lifecyle hooks for Auto Scaling, Ansible, Boto3 Python, Lambda, KMS, Lambda, CloudWatch, to a non-trivial fictitious stock trading sample app (microtrader app written in Java)"
tags: [aws, docker, ansible, cfn]
file: 2017-12-23-docker-production-aws.md
image:
# flood-the-internet-wall-1900x500-105703.jpg
  feature: https://user-images.githubusercontent.com/300046/59104048-b4980880-88ed-11e9-9a93-c19baaef18ab.jpg
  credit: AttendantDesign.com
  creditlink: https://attendantdesign.com/fake-tsunami-films-flood-internet/
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

Here are my notes on <strong>automation</strong> of commands <a target="_blank" href="https://www.linkedin.com/in/jmenga/">Justin Menga</a> (<a target="_blank" href="https://github.com/mixja">mixja on GitHub</a>) manually typed in his video course <a target="_blank" href="https://app.pluralsight.com/library/courses/docker-production-using-amazon-web-services/table-of-contents">"Docker in Production Using Amazon Web Services</a>.
His course was released by Pluralsight. And I think it would be difficult to follow along here unless you get a subscription at Pluralsight.com (less than $300 USD per year).

Videos in the course are rated as 10 hours, but it took me more like 70+ hours of repeated viewing, study, and scripting because Menga's <em>tour de force</em> covers most of the intricacies one needs to know and be able to actually do in a real job as an AWS Cloud Engineer.

## Parts list (ingredients)

<strong>"Production"</strong> in the course title means that we need to cover management of secrets. Production also requires use of additional tools. There are so many that product names are listed alphabetically here, with links to my blog about it or the vendor's marketing page, plus the version shown in the video course

   * AWS account from email with credit card
   * Ansible from Red Hat (IBM) 2.4.0
   * Authenticator app (from Google) on iPhone/Android
   * Bash (shell) scripts
   * Boto3 (Python library for AWS) 1.4.7 <tt>pip install boto3 netaddr</tt> 0.7.19 
   * Bower (npm install -g bower)
   * Brew package manager for Mac 2.14.2
   * <tt>brew install jq</tt> 1.5.2 to enable shells to handle JSON
   * CodeBuild
   * CodePipeline
   * CloudFormation (CFN) templates (vs Terraform)
   * CloudWatch and Logs Agents
   * <a target="_blank" href="https://github.com/lightbend/config">Config from Lightbend</a> configuration library for JVM languages using HOCON files
   * Docker for Mac 17.09.0-ce
   * easy_install with <tt>sudo -H easy_install pip</tt>
   * EC2 (Elastic Cloud Compute)
   * Elastic (Docker) Container Services (ECR)
   * <a target="_blank" href="https://flywaydb.org/">Flyway</a> for lightweight version control of database schema migrations
   * Git client
   * GitHub account
   * Gradle (multi-project Java build tool replacing ant and maven)
   * IAM
   * Java (the language )
   * KMS (Key Management Service) in AWS
   * Lambda from AWS
   * MacOS keyboarding - Sierra version
   * MFA (Multi-factor Authentication) in AWS
   * NodeJS 4.x or higher (to install the npm package manager)
   * Python programming language 2.7.14
   * <a target="_blank" href="https://packer.io/docs/installation.htm">Packer from Hashicorp</a> 
   * <a target="_blank" href="https://wilsonmar.github.io/text-editors">Text editor</a> Sublime Text 3 with (darker) Material Theme.
   * iTerm2 for Mac
   * brew install tree - 1.7.0
   * STS (AWS )
   * <a target="_blank" href="https://vertx.io/">Vertx</a> for microservices (https://escoffier.me/vertx-hol) event bus
   <br /><br />


### hosts file fix

<!-- 1:17 into https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m1&clip=6&mode=live
-->
1. To improve the performance of docker compose commands on MacOS, workaround <a target="_blank" href="https://github.com/docker/docker-py/pull/1928" title="filed 5 May 2016">an issue fixed Feb 26, 2018</a> by
   adding " localunixsocket" to "127.0.0.1   localhost":

   <pre>sudo -H nano /etc/hosts</pre>

   So it looks like this:

   <pre>127.0.0.1   localhost  localunixsocket</pre>


<hr />

   PROTIP: Some aspects which need to be updated. But much of the course still applies to harneess Infrastructure as Code (IoC) within Amazon Web Services using Docker and EC2 Container Service (ECS) with EC2 and CloudWatch Logs Agents. It uses EC2 Container Registry (ECR) and Lifecycle Hooks Lambda functions to automate test, build, deploy and operate containerized applications in production using Ansible, CloudFormation, Python Lambda, CodeBuild, CodePipeline, etc. Most other courses do not thoroughly cover secrets management using IAM, MFA, Key Management Service (KMS), auto-scaling, CloudWatch.


## Code in GitHub

Since its release back on <strong>1 Dec 2017</strong>, some changes have occurred in AWS technologies and workflows. However, Justin has continued work on the <strong>17 repositories</strong> under the <strong>docker-production-aws</strong> GitHub account, which I've rearranged below alphabetically:

DOTHIS: In GitHub, <strong>watch</strong> each of these repositories:

   1. <a target="_blank" href="https://github.com/docker-production-aws/aws-starter">aws-starter</a> - Starter Template for AWS CloudFormation Playbooks 
   1. <a target="_blank" href="https://github.com/docker-production-aws/aws-sts">aws-sts</a> - Ansible role for assuming roles using the AWS STS service 

   1. <a target="_blank" href="https://github.com/docker-production-aws/aws-cloudformation">aws-cloudformation</a> - Ansible Role for deploying AWS CloudFormation Infrastructure 
   1. <a target="_blank" href="https://github.com/docker-production-aws/cloudformation-resources">cloudformation-resources</a> - Ansible playbook and CloudFormation template for deploying supporting CloudFormation resources 

   1. <a target="_blank" href="https://github.com/docker-production-aws/docker-squid">docker-squid</a> - Docker Image for running Squid Proxy 

   1. <a target="_blank" href="https://github.com/docker-production-aws/ecr-resources">ecr-resources</a> - Ansible playbook and CloudFormation template for deploying EC2 Container Registry (ECR) repositories 

   1. <a target="_blank" href="https://github.com/docker-production-aws/lambda-ecs-capacity">lambda-ecs-capacity</a> - AWS Lambda Function for calculating ECS cluster capacity 
   1. <a target="_blank" href="https://github.com/docker-production-aws/lambda-ecs-tasks">lambda-ecs-tasks</a> - AWS Lambda Function for Running ECS Tasks as CloudFormation Custom Resources 
   1. <a target="_blank" href="https://github.com/docker-production-aws/lambda-secrets-provisioner">lambda-secrets-provisioner</a> - AWS Lambda Function for provisioning secrets into the EC2 Systems Manager Parameter Store 
   1. <a target="_blank" href="https://github.com/docker-production-aws/lambda-lifecycle-hooks">lambda-lifecycle-hooks</a> - AWS Lambda Function for draining ECS container instances in response to EC2 auto scaling lifecycle hooks 
   
   1. <a target="_blank" href="https://github.com/docker-production-aws/microtrader">microtrader</a> - A fictitious stock trading microtrader application 
   1. <a target="_blank" href="https://github.com/docker-production-aws/microtrader-base">microtrader-base</a> - Base Docker images for the microtrader applications 
   1. <a target="_blank" href="https://github.com/docker-production-aws/microtrader-deploy">microtrader-deploy</a> - Ansible playbook and CloudFormation template for deploying the Microtrader application into AWS 
   1. <a target="_blank" href="https://github.com/docker-production-aws/microtrader-pipeline">microtrader-pipeline</a> - Ansible playbook and CloudFormation template for deploying a continuous delivery pipeline using CodePipeline, CodeBuild and CloudFormation 

   1. <a target="_blank" href="https://github.com/docker-production-aws/network-resources">network-resources</a> - Ansible playbook and CloudFormation template for deploying AWS VPC and other network resources 

   1. <a target="_blank" href="https://github.com/docker-production-aws/packer-ecs">packer-ecs</a> - Packer build script for creating custom AWS ECS Container Instance images 

   1. <a target="_blank" href="https://github.com/docker-production-aws/proxy-resources">proxy-resources</a> - Ansible playbook and CloudFormation template for deploying an HTTP proxy stack based upon Squid 
   <br /><br />

   <!-- So I've forked and modified the <a target="_blank" href="https://github.com/docker-production-aws">original code repository</a> to

   <a target="_blank" href="https://github.com/wilsonmar/docker-production-aws">https://github.com/wilsonmar/docker-production-aws</a>
   -->


## Scripts

   PROTIP: I've created several shell scripts (in GitHub):
   
A. <a href="#microtrader-setup">microtrader-setup.sh</a> installs the <a href="#microtrader4">4 microtrader processes<a> after building them from source and testing them using mocha.

B. <a href="#docker-setup">ecr-setup.sh</a> creates Docker images in a private Elastic Repository (ECR) and configures Dockerfiles for use in ECS (Elastic Container Service).

PROTIP: Since there is a flood of responses, there is a provision in the script to output to a logfile.

<!-- 02 - course-introduction-slides
-->

## Exercise files = PDFs

Click <a target="_blank" href="https://app.pluralsight.com/library/courses/docker-production-using-amazon-web-services/exercise-files">"Exercise files" on Pluralsight.com</a> downloads a folder named "docker-production-using-amazon-web-services". 
Its sub-folders contain pdf files within folders of just numbers.
So I've named chapter names and put them all in one folder:

### 03 - creating-the-sample-application-slides 

The system under test consists of these four processes:

   <a name="microtrader4"></a>

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/59731992-b4f5a500-9205-11e9-82ba-c34b3df42841.jpg">
   <img alt="microtrader-925x522-50356.jpg" width="925" src="https://user-images.githubusercontent.com/300046/59731992-b4f5a500-9205-11e9-82ba-c34b3df42841.jpg"></a>

   * Quote Generator at <a href="http://localhost:32770/quote/">http://localhost:32770/quote/</a> 
      - periodically generates stock market quotes for three fictitious companies: "Black Coat", "D'Oh", "Divinator", "MacroHard".
      - single instance
      <br /><br />
   * Portfolio Service 
      - trades stocks starting from an initial portfolio of $10000 cash on hand. The trading logic is completely random and non-sensical
      - single instance
      <br /><br />

   * Trader Dashboard at <a href="http://localhost:32771">http://localhost:32771</a> 
      - provides a web dashboard displaying stock market quote activity, recent stock trades and the current state of the portfolio. The dashboard also provides an operational view of the status and service discovery inforamtion for each service.
      - <strong>multiple instances</strong> for High Availability
      <br /><br />

   * Audit Service at <a href="http://localhost:32768/audit/">http://localhost:32768/audit/</a> 
      - audits all stock trading activity, persisting each stock trade to an internal MySQL database
      - single instance
      <br /><br />

   To enable  modern <strong>asynchronous</strong> communications through an <strong>event bus</strong> among processes, callbacks within each app component makes use of the <a target="_blank" href="https://vertx.io/">https://vertx.io/</a> library open-sourced at <a target="_blank" href="https://en.wikipedia.org/wiki/Vert.x">https://en.wikipedia.org/wiki/Vert.x</a>. It was programmed in Java by Tim Fox in 2011 while he was employed by VMware. After much discussion with other parties, in January 2013, VMware moved the project and associated IP to the Eclipse Foundation, a neutral legal entity.   
	Eclipse Vert.x is a polyglot event-driven application framework that runs on Java "Polyglot" refers to Vert.x exposing its idiomatic API in Java, JavaScript, Groovy, Ruby Python, Scala, Kotlin, Clojure, and Ceylon. 
   Repeated functionality in Vert.x is encapsulated in a "Verticle". Thus its name.
   Vert.x assumes <strong>single-threaded</strong> scalable non-blocking app design.
   Real-time messages are received using the sockJs library
   [Vert.x Microservices Workshop](https://github.com/cescoffier/vertx-microservices-workshop),(which Justin has modified):

   Each "microtrader" app process is built to run as a "Fat JAR" as a single deployable and runnable artifact within Docker containers. 
   


<a name="microtrader-setup"></a>

#### Microtrader Build & Test Locally from Code

   PROTIP: I've created a shell script (in GitHub) to install the <a href="#microtrader4">4 microtrader processes<a>:

   <a target="_blank" href="https://github.com/wilsonmar/DevSecOps/blob/master/docker-production-aws/microtrader-setup.sh">https://github.com/wilsonmar/DevSecOps/blob/master/docker-production-aws/microtrader-setup.sh</a>

   Triple-click the following command to highlight the whole line:

   <pre>sh -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/docker-production-aws/microtrader-setup.sh)"</pre>

   ... then copy it for pasting in your Terminal CLI to run it automatically.

   Documentation is in the script. But here are highlights:

   * Create a folder "docker-production-aws" under your "projects" or folder. For idempotency, and to ensure that changes in GitHub are reflected: if the folder is already there, delete it.
   That's also why we don't clone the folders into our own account.

   * Checkout the "final" branch because that is what the files should look like after course exercises are completed successfully. In the above repositories, the "master" branch is the starting point for exercises.
   
   <pre>checkout final</pre>

   * Build "fat" jars for each Microservice, using the Gradle shadowJar plugin:<a target="_blank" href="https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m2&clip=2&mode=live">*</a>

   <pre><strong>./gradlew clean test shadowJar</strong></pre>

   * To stop the run, click the red "X" for the Terminal session. Verify that processes were terminated:

   <pre>ps -al</pre>

   <a name="circuit-breaker"></a>

   That is because of a Circuit breaker pattern implemented by the Audit Service opening on failure:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/59765767-fca71b80-925b-11e9-97c5-81ff13f8b461.png"><img alt="circuit-breaker-pattern-971x473-41827.jpg" width="971" src="https://user-images.githubusercontent.com/300046/59765767-fca71b80-925b-11e9-97c5-81ff13f8b461.png"></a>


### 04 - Creating Docker Release Images

<!-- creating-docker-release-images-slides -->

   <a name="Release-workflow"></a>
   
   The release pipeline automates the workflow to a Release Environment. 
   commit to a Test Environment, performs unit testing, builds, and 

   <!-- 2:09 into https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m3&clip=1&mode=live
   -->

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/59786983-af3fa400-9285-11e9-9889-a3d8a872d765.jpg"><img alt="release-pipeline-916x493-42235.jpg" width="916" src="https://user-images.githubusercontent.com/300046/59786983-af3fa400-9285-11e9-9889-a3d8a872d765.jpg"></a>

   The stages:
   1. make test
   2. make release
   3. Tag and Publish
   4. make clean


<a name="iam-setup"></a>

### 05 - Setting up AWS Access 

<!-- setting-up-aws-access-slides -->

   Getting EC2 Key Pairs and keeping them on your laptop is both risky and a hassle.
   
   It's more secure and flexible to define (in IAM) groups associated with policies by role.
   When a user is assigned to a group, he/she gets all the permissions for roles in the group.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/59787896-bbc4fc00-9287-11e9-9ebe-c3a74f9d3320.jpg"><img alt="iam-groups-roles-910x502-36375.jpg" src="https://user-images.githubusercontent.com/300046/59787896-bbc4fc00-9287-11e9-9ebe-c3a74f9d3320.jpg"></a>

   1. Create admin account alias instead of root billing account.
   2. Create IAM Roles <a target="_blank" href="https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m4&clip=3&mode=live">*</a>
   3. Create IAM Groups
   4. Create IAM Policies that enforce MFA
   5. Create users
   6. Enroll users for MFA


   <a name="ec2-setup"></a>

###  06 - Running Docker Apps in EC2 from ECR in ECS

   running-docker-applications-using-the-ec2-container-service-slides

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/59862254-ad3a1b80-933f-11e9-8efd-f173c7b7e274.jpg"><img alt="ecs-flow-1507x827-106773.jpg" width="1507" src="https://user-images.githubusercontent.com/300046/59862254-ad3a1b80-933f-11e9-8efd-f173c7b7e274.jpg"></a>

   ECS is like docker-compose. It supports rolling deployments to maintain the Desired Count based on status from the Load Balancer.

   PROTIP: TODO: I'm in the process of creating a script that automates the <strong>manual steps</strong> shown in <a target="_blank" href="https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m5&clip=0&mode=live">Justin's videos</a>:

   <a target="_blank" href="https://github.com/wilsonmar/DevSecOps/blob/master/docker-production-aws/ecs-setup.sh">https://github.com/wilsonmar/DevSecOps/blob/master/docker-production-aws/ecs-setup.sh</a>

   Triple-click the following command to highlight the whole line:

   <pre>sh -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/docker-production-aws/ecr-setup.sh)"</pre>

   ... then copy it for pasting in your Terminal CLI to run it automatically.

   The steps to publish and run Docker apps using ECS:

   Create repository in Amazon's ECR (Elastic Container Repository):
   1. Define ECS clusters from Docker images in my ECR by substituting FROM values in Docker files with <a target="_blank" title="0:21 into" href="https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m5&clip=3&mode=live&start=119.69">*</a>, such as "FROM dockerproductionaws/microtrader-base" to "FROM 543279062384.dkr.ecr.us-west-2.amazonaws.com/dockerproductionaws/microtrader=base".
   1. Edit `Makefile` to override <tt>DOCKER_REGISTRY</tt> from "docker.io" to ECR host name (such as "54327906284.dkr.ecr.us-west-2.amazonaws.com")
   1. Add in `Makefile` <tt>AWS_ACCOUNT_ID ?= </tt> your account, such as "543279062384"
   1. Add in `Makefile` <tt>DOCKER_LOGIN_EXPRESSION := eval(aws ecr get-login --registry-ids $(AWS_ACCOUNT_ID))</tt>
   1. `export AWS_PROFILE=docker-prodution-aws-admin`
   1. `make login` and enter MFA code.
   1. `make test`
   1. `make release`
   1. `make tag: default`
   1. `docker images` to verify creation
   
      
      Publish using the release pipeline:

   1. `make publish`
   1. `git commit -a -m "Add support for AWS ECR"` & `git push origin master`


   1. Create ECS Clusters using <a target="_blank" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">AMI Optimized AMIs for your region</a>
   1. Make use of VPC, Subnet, and Security Group created earlier.
   1. Verify CloudFormation used under the hood.
   1. Get public and private IP addresses in Cluster dashboard.
   1. Use the public IP to SSH into the instance `ssh -i ~/.ssh/docker-production-aws.pem ec2-user@34.214.122.6`
   1. Verify with `docker info | more` and `docker ps`
   1. `sudo yum install jq -y`
   1. `docker inspect -f '{{json .HostConfig.Binds}}' ecs-agent | jq`
   1. `ls -l /var/log/ecs`
   1. Local introspection end-point `curl -s localhost:51678/v1/metadata | jq`
   1. Local introspection end-point `curl -s localhost:51678/v1/tasks | jq`

      Create ECS task definitions<a target="_blank" href="https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m5&clip=6&mode=live&start=119.69">*</a>
   1. HTTP_PORT 8000

      Create ECS Service:

   1. Select Cluster to create and provide new Service name for 1 Task.
   1. Verify running
   1. Run ECS services and task definition to trigger Rolling deployments.


###  07 - Customizing ECS Container Instances

   customizing-ecs-container-instances-slides

This creates a custom AMI based on ECS-optimized AMIs.

In ECS-optimized AMIs, the standard Advanced User Data for EC2 start-up defines part of the "cloud-init" framework at instance creation time:

   <pre>echo ECS_CLUSTER=microtrader > /etc/ecs/ecs.config</pre>

<a target="_blank" href="https://user-images.githubusercontent.com/300046/59904716-802e4d00-93c1-11e9-9368-e4c746982a2a.jpg"><img alt="cfn-init-flow-1425x815-67695.jpg" width="1425" src="https://user-images.githubusercontent.com/300046/59904716-802e4d00-93c1-11e9-9368-e4c746982a2a.jpg"></a>

* But from the repo we use file `files/firstrun.sh` to do the same but also
  define the `$PROXY_URL` to a HTTP Proxy that denies traffic to malicious sites and allows traffic to trusted sites. In file `/etc/sysconfig/docker` we specify the Proxy URL the Docker Engine uses when pulling images from the EC2 Container Registry. In file `/etc/ecs/ecs.config`, we specify  NO_PROXY filtering of the EC2 Metadata Service (169.254.169.254) and the ECS Agent (169.254.178.2). In file `/etc/awslogs/proxy.conf` we define Proxy URL for use by the CloudWatch Logs agent.<a target="_blank" title="2:18 into" href="https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m6&clip=9&mode=live&start=119.69">*</a>

   Docker is stopped so removing the `/var/lib/docker/network` file forces Docker to recreate it when it starts.

   The link to `docker0` is deleted so that Vert.x binds to eth0 network interface rather than docker0.

   `|| true` makes it so the command always returns a zero exit code no matter what.

* we create a new shell provisioner that runs `scripts/cloud-init-options.sh` which modifies the cloud-init configuration file `/etc/cloud/cloud.cfg` to set yum package manager repo_update to false and repo_upgrade to none. This is needed because the HTTP Proxy blocks the yum update process which eventually timeout after several retries, significantly increasing the startup time of your ECS container instances. 

* enable DOCKER _NETWORK_MODE as "host" (for Docker host networking) and append lines within the `/etc/sysonfig/docker` inside the instance:

   <pre>--bridge-none --ip-forward=false --ip-masq-false --iptables=false</pre>

   The above is passed to the Docker engine to disable features.

   
* Among provisioners defined in `packer.json` is a call to shell file `scripts/install-os-packages.sh` to install  the "awslogs" yum package that is the <a target="_blank" href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_cloudwatch_logs.html">CloudWatch Logs agent</a>:

   <pre>sudo yum -y install $packages</pre>


   To install the CloudWatch Logs agent, we will create a new provisioner that references a script called install-os-packages, and you can see that the script simply installs a CloudWatch Logs agent using the yum install command. Configuration of the CloudWatch Logs agent is documented at the URL shown, and the nature of the configuration required is to configure the logs agent at instance creation time, hence we will add these configuration tasks to the firstrun script we created earlier in this module. In the script, we write to the referenced awscli. conf configuration file to configure the CloudWatch Logs region, and notice this will expect an environment variable called AWS_DEFAULT_REGION to be configured. We then write out the general AWS Logs configuration to the referenced awslogs. conf file, and here we define a standard suite of log groups that we will post logs to from the local operating system. In total, we define five log groups, one per local operating system log file type, including standard operating system logs as well as Docker logs and ECS agent logs. Notice that we are using a standard convention for defining the log group name, and again, this relies on environment variables to inject the CloudFormation STACK_NAME and AUTOSCALING_GROUP name. For the log_stream_name setting, we reference a special placeholder called instance_id, and the CloudWatch Logs agent will automatically set the stream name to the local EC2 instance ID. After writing the configuration file, we need to actually start the CloudWatch Logs agent as it is not started by default after installation. Again, it is important to remember that the firstrun script is only run at EC2 instance creation time and not actually run during the AMI build process, so we explicitly need to start the CloudWatch Logs agent inside our firstrun script.


   <pre>
|-- packer.json
`-- scripts
    |-- cleanup.sh
   </pre>

* `scripts/configure-timezone.sh` sets time for Los Anagles and enables NTP (Network Time Protocol)

* CloudWatch Logs Agent for logging and monitoring.

* First run script to set HTTP proxy to secure communications, ECS Agent Config, CloudWatch Logs config, Health Check

   <pre>#!/usr/bin/env bash
   # Install packages:
   yum install awslogs -y
   # Configure packages:
   echo "ENABLED=true" > /etc/awslogs.conf
   # Start services:
   service awslogs start</pre>

* Cloud Formation <strong>cfn-init</strong> file:<a target="_blank" title="0:53 into" href="https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m6&clip=2&mode=live&start=119.69">*</a>

   <pre>config:
     commands:
       01_install_awslogs:
         command: "yum install awslogs -y"
         env:
           MY_ENV: "true"
         cwd: "/home/ec2-user"
      files:
        /etc/awslogs.conf:
          content: "ENABLED=true"
      services:
        sysvinit:
          awslogs:
            enabled: "true"
            ensureRunning: "true"</pre>

* Custom Config for Timezone, Enable NTP, Customer Docker config.

- Enable Docker Host Networking<a target="_blank" title="2:05 into" href="https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m6&clip=7&mode=live&start=119.69">*</a>

- Custom AMI Design
- Understanding EC2 instance
initialization
- Using Packer to build Amazon Machine
Images
- Customizing Docker
- CloudWatch Logs Integration
- HTTP Proxy Support
- ECS Container Instance Health Checks
- Building and Publishing the Image


###  08 - Deploying AWS Infrastructure Using Ansible and CloudFormation

   deploying-aws-infrastructure-using-ansible-and-cloudformation-slides

###  09 - Architecting and Preparing Applications for ECS

   architecting-and-preparing-applications-for-ecs-slides

###  10 - Defining ECS Applicatwions Using Ansible and Cloudformation

   defining-ecs-applications-using-ansible-and-cloudformation-slides
 
###  11 - Deploying ECS Applications Using Ansible and CloudFormation

   deploying-ecs-applications-using-ansible-and-cloudformation-slides

###  12 - Creating ZCloudFormation Custom Resources Using AWS Lambda

   creating-cloudformation-custom-resources-using-aws-lambda-slides

###  13 - Managing Secrets in AWS

   managing-secrets-in-aws-slides

###  14 - Managing ECS Infrastructure Lifecycle

   managing-ecs-infrastructure-lifecycle-slides

###  15 - Auto Scaling ECS Applications

   auto-scaling-ecs-applications-slides

###  16 - Continuous Delivery Using CodePipeline

continuous-delivery-using-codepipeline-slides


## Boto

1. To avoid boto installer updating the six package:

   <pre><strong>sudo -H /usr/bin/python -m pip install boto3 --ignore-installed six
   </strong></pre>

   brew unlink python

   brew link --overwrite python


### Health checks

<!-- # [0:54] into https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m3&clip=8&mode=live
-->
"The Healthcheck will curl the port defined  by the HTTP_PORT environment variable
(or default port 35000) looking for a zero exit code (healthy) every 3 seconds and up to 20 reties.
In Dockerfile.quote file:

   <pre>HEALTHCHECK --interval=3s CMD curl -fs http://localhost:$(HTTP_PORT:-35000)/$(HTTP_ROOT)

## Resources

 Stephen Grider’s Udemy course “ Docker and Kubernetes: The Complete Guide”
