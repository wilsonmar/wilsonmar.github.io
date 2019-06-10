---
layout: post
title: "Measure performance impact of JavaScript in Dave Hoeffner's the-internet"
excerpt: "using Flood.io Element script after standing up the website challenging functional test Selenium automation to run in Docker containers within AWS cloud, measured by NewRelic"
tags: [flood, perftest, selenium, testing]
file: flood-element-the-internet-docker-aws-newrelic.md
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

Below is the narration (transcript) of the video that focus on understanding of how components are related to each other:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/59193870-587af180-8b44-11e9-920c-d61ed686e4e1.jpg"><img alt="flood-the-internet-v06-766x408-32238.jpg" width="766" src="https://user-images.githubusercontent.com/300046/59193870-587af180-8b44-11e9-920c-d61ed686e4e1.jpg"></a>

Many are familiar with website <a target="_blank" href="https://the-internet.herokuapp.com/">https://the-internet.herokuapp.com/</a> which presents <a href="#Controls">43 controls</a> challenging those learning <a href="#ManualActions">manual actions</a> to build test automation scripts for Selenium, as taught by courses offered on websites <a target="_blank" href="https://ElementalSelenium.com/">ElementalSelenium.com</a> and <a target="_blank" href="https://SeleniumGuidebook.com/">SeleniumGuidebook.com</a>.

We are concerned about the impact of running <strong>several client browsers</strong> on the server environment's <strong>memory and CPU</strong> used.

But we don't want to disturb Dave's site for everyone else. 

So we emulate <a href="#ManualActions">manual actions</a> on the <strong>app in a Docker container</strong> running within the <strong>AWS cloud</strong>.

In this article we show how you can quickly and easily repeat what we're showing here by running scripts from our <strong>GitHub</strong> repository.

We first set up <strong>credentials</strong> for a AWS account with a role containing applicable permissions to a <strong>build script</strong>. The script makes use of <strong>Dave Hoeffer's Docker image</strong> within Docker Hub and instantiates the Docker image containing the app server under test. 

Our GitHub repository also contains <strong>Flood Element Typescript code</strong> that was previously recorded based on manual actions defined. 
This provides a reference for those moving from Selenium, to show how Element scripts handle all the challenges presented by Dave's sample app.

We update the script with the <strong>license token</strong> we get from the <a target="_blank" href="https://www.flood.io/">flood.io</a> service in the cloud that can emulate several users running their own internet browser against our app under test in the cloud.

We do all that to analyze the impact of JavaScript in the client app on the server, made visible on a <strong>metrics</strong> dashboard to show exactly what happens to memory, cpu, etc. 

The metrics dashboard web page is powered by a <strong>monitoring process</strong> app. To build that app we make use of a <strong>Docker image from New Relic</strong> because it can capture <strong>custom events</strong> and more precise granular capture times. Those events are collected by an <strong>agent</strong> added to the app source code. Instructions for this is in an <strong>instrumentation script</strong>. 

The agent contains a  <strong>license token</strong> obtained from the vendor website. We don't create an <strong>instrumented Docker image</strong> that has the agent already installed because the license differs for each installation.

This article describes use of a single instance type. But we can extend this work to get answers to questions such as:

   * What is the impact on the cloud bill (costs) of that cool UI code? 
   * What is the capacity of a chosen instance type (such as the free tier t2.micro)?
   * How much more is needed to run the anticipated peak load?
   * What happens when that peak load is exceeded?
   <br /><br />


Recap: 

<a target="_blank" href="https://user-images.githubusercontent.com/300046/59193870-587af180-8b44-11e9-920c-d61ed686e4e1.jpg"><img alt="flood-the-internet-v06-766x408-32238.jpg" width="766" src="https://user-images.githubusercontent.com/300046/59193870-587af180-8b44-11e9-920c-d61ed686e4e1.jpg"></a>


<a name="ManualActions"></a>

## Manual testing actions

T.J. Myer wrote in his website <a target="_blank" href="http://www.tjmaher.com/p/programming-projects.html">
http://www.tjmaher.com/p/programming-projects.html</a> June - July 2015 a series describing his adventures coding Selenium on Dave's website:

1. <a target="_blank" href="http://www.tjmaher.com/2015/06/simple-manipulation-of-login-page.html">
Step One: Sketch out the simple manipulation of a Login page</a>

2. <a target="_blank" href="http://www.tjmaher.com/2015/06/creating-common-utilities-for-webdriver.html">
Step Two: Draft Common Utilities</a>

3. <a target="_blank" href="http://www.tjmaher.com/2015/07/how-java-stores-constants-static-final.html">
Step Three: Storing Constants: static finals vs enums</a>

4. <a target="_blank" href="http://www.tjmaher.com/2015/07/storing-locators-for-web-elements.html">
Step Four: Storing Locators for Web Elements</a>

5. <a target="_blank" href="http://www.tjmaher.com/2015/07/the-internet-page-object-model-examples.html">
Step Five: The Page Object Model</a>

6. <a target="_blank" href="http://www.tjmaher.com/2015/07/the-internet-writing-automated-test.html">
Step Six: Writing the Automated Test</a>


<a name="Controls"></a>

## Challenges on the-internet

1. A/B Testing
1. Add/Remove Elements
1. Basic Auth (user and pass: admin)
1. Broken Images
1. Challenging DOM
1. Checkboxes
1. Context Menu
1. Digest Authentication (user and pass: admin)
1. Disappearing Elements
1. Drag and Drop
1. Dropdown
1. Dynamic Content
1. Dynamic Controls
1. Dynamic Loading
1. Entry Ad
1. Exit Intent
1. File Download
1. File Upload
1. Floating Menu
1. Forgot Password
1. Form Authentication
1. Frames
1. Geolocation
1. Horizontal Slider
1. Hovers
1. Infinite Scroll
1. Inputs
1. JQuery UI Menus
1. JavaScript Alerts
1. JavaScript onload event error
1. Key Presses
1. Large & Deep DOM
1. Multiple Windows
1. Nested Frames
1. Notification Messages
1. Redirect Link
1. Secure File Download
1. Shifting Content
1. Slow Resources
1. Sortable Data Tables
1. Status Codes
1. Typos
1. WYSIWYG Editor

## Steps

Below are the manual and automated steps, with as little hassle as possible.

Two EC2 instances are instatiated using Docker by Terraform (RancherOS) within AWS:

   1. A "the-internet" app under test (written in Ruby), with a monitoring agent;
   2. Monitoring and visualization app server containing NewRelic 
   <br /><br />

PROTIP: This exercise stands up only one instance each -- does not show how to use multiple instances in a swarm (cluster). However, we recommend that this be done -- even for a single instance -- so that developers habitually use production mode workflows.

Additionally, cloud web service flood.io is invoked for performance testing.

Bash shell scripts calls <a target="_blank" href="https://wilsonmar.github.io/terraform">aTerraform</a> to instantiate, and Ansible to configure. 
Python is used to customize.


### Scripts from GitHub

These steps are done manually on your local machine.

1. Create or navigate to a project folder for this effort.
1. Clone automation scripts from https://github.com/flood/master/README.md

   * <a href="#NewRelicAgentInstall">NewRelicAgentInstall</a>
   * <a href="#FloodScriptUpdate">Flood Script Update</a>


### Setup AWS manually

   Based on https://wilsonmar.github.io/aws-onboarding

   On an internet browser such as Google Chrome, Apple Safari, or Microsoft Edge:

1. To limit financial exposure (to like $25 or whatever), buy a <a target="_blank" href="https://usa.visa.com/pay-with-visa/cards/prepaid-cards.html">pre-paid reloadable Visa</a> gift <a target="_blank" href="https://aws.amazon.com/premiumsupport/knowledge-center/accepted-payment-methods/">(debit) card</a> <a target="_blank" href="https://usa.visa.com/pay-with-visa/find-card/buy-gift-card">online</a> or at a PNC bank.
1. Open AWS master account with email.
1. In IAM, lock down master account.
1. Create Security Group.
1. In IAM, create service account. 
1. Define service account with permissions.
1. Store key pair (credentials) for service account locally.
1. Select your AWS region.

   ### Script A : Instantiate AWS Docker in EC2 build script

1. Get to AWS EC2.
1. Choose and AMI - Ubuntu 16.04 LTS
1. Select EC2 instance type (t2.micro Free Tier eligible can handle up to 50 users), or "m5axlarge".
1. [10:23] Define Security Group add "All TCP Traffic".
1. Assign Key Pair name ___ 
1. [2:29] Download Key Pair
1. Save to file ???
1. [2:37] Launch Instance
1. PROTIP: Name instance "the-internet-app" so that files referring to this name (such as newrelicc-infra.yml) don't have to be changed.

   ### Terminal - AWS Key Pair

1. In Terminal store .pem file downloadd
1. SSH into instance.

   Inside "the-internet" terminal:

1. [4:08] Install prerequisites for Docker for "the-internet" app:

   <pre>
sudo apt update

sudo apt install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

sudo apt update

apt-cache policy docker-ce

sudo apt install docker-ce

sudo systemctl status docker

# verify 
sudo docker  --version

sudo docker pull gprestes/the-internet

sudo docker run -d -p 7080:5000 gprestes/the-internet

# TODO: Identify the Docker ID to a variable:
ps -fed | grep docker
   </pre>   

1. [12:04] On a browser, verify external access to "the-internet" app using the external IP address from AWS, such as:

   http://52.91.73.157:7080/


   <a name="NewRelicAgentInstall"></a>

   ### Setup "NewRelic" in a EC2 Ubuntu containing Docker 

   In a browser:

1. Login to AWS using your service account.
1. Get to AWS EC2.
1. Choose and AMI - Ubuntu 16.04 LTS
1. Select EC2 instance type (t2.micro Free Tier eligible can handle up to 50 users), or "m5axlarge".
1. [10:23] Define Security Group add "All TCP Traffic".
1. Assign Key Pair name ___ 
1. [2:29] Download Key Pair
1. Save to file ??? [15:07] ssh -i "ubuntu.pem" ubuntu@ec2-18-208-170-2.compute-1.amazonaws.com
1. [2:37] Launch Instance
1. Name instance "NewRelic" 

   ### Save NewRelic License Key 

   Based on <a target="_blank" href="https://www.ctl.io/developers/blog/post/tutorial-protecting-sensitive-info-docker">*</a>

1. [8:13] On the NewRelic web page Account Settings, highlight and save the License Key text
   
1. Open file `./secrets.env`

   NOTE: The secrets.env file is referenced in the `docker-compose.yml` file cloned from GitHub.

   <pre>
docker-compose build
docker-compose up
   </pre>

1. [15:29] Update `newrelicc-infra.yml` with license_key value.

   ### Install NewRelic instrumentation agent newrelic-infra

1. [8:13] Switch back to the terminal
1. TODO: Script to do this:

   <pre>
   # TODO: Replace with reference to secrets.env by docker-compose
   echo "license_key: a46bf7d3b4043cdfffcab3aaef677d29cc60d6be" | sudo tee -a /etc/newrelic-infra.yml
curl https://download.newrelic.com/infrastructure_agent/gpg/newrelic-infra.gpg | sudo apt-key add -

cat /etc/lsb-release 
# [13:33] Based on NewRelic web page  
   # https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/installation/
printf "deb [arch=amd64] https://download.newrelic.com/infrastructure_agent/linux/apt bionic main" \
   | sudo tee -a /etc/apt/sources.list.d/newrelic-infra.list
sudo apt-get update
sudo apt-get install newrelic-infra -y
# Verify: more /etc/newrelic-infra.yml
&nbsp;
# TODO: automate this:
vi  /etc/newrelic-infra.yml
sudo vi /etc/newrelic-infra.yml
&nbsp;
# TODO: Identify the Docker ID to a variable: 
$DOCKER_ID=$(sudo docker ps)
   # (value such as ba965ff40ef7)
sudo docker exec -i -t "$DOCKER_ID" /bin/bash
&nbsp;
# TODO: From inside NewRelic process:
sudo docker cp ba965ff40ef7:/app/server.rb .

# [19:31] Reboot:
sudo systemctl restart newrelic-infra
   </pre>

1. [19:57] Verify that NewRelic recognizes events from "the-internet-app" (subsituting the account number), such as:

   https://infrastructure.newrelic.com/accounts/2256749/hosts


   ### Install NewRelic agent in running "the-internet-app"

1. [20:38] Get inside Docker container:

   <pre>
# TODO: Identify the Docker ID to a variable: 
$DOCKER_ID=$(sudo docker ps)
   # (value such as ba965ff40ef7)
sudo docker exec -i -t "$DOCKER_ID" /bin/bash
   </pre>

   Based on https://docs.newrelic.com/docs/agents/ruby-agent/installation/install-new-relic-ruby-agent

1. [23:17] Add `gem 'newrelic_rpm'` in Gemfile.

   <pre>
   # TODO: From inside NewRelic process (example root@ba965ff40ef7):
   sudo docker cp "$DOCKER_ID:/app/server.rb" .
   sudo docker cp server.rb "$DOCKER_ID:/app/"
   # Backup existing
   cp Gemfile Gemfile.backup
   # TODO: Automate 
   ??? gem 'newrelic_rpm
   # For the server.rb which is larger it’s not possible to echo and cat the file,
   # so I copied it locally and edit it to include the require 'newrelic_rpm'
   sudo docker cp ba965ff40ef7:/app/server.rb .
   # And copy it back to the container:
   sudo docker cp server.rb ba965ff40ef7:/app/
   </pre>

1. Verify 
   
   ### Script B : Add in server.rb and create new Docker image

   This is so the Docker image can be used for scaling.

   <pre>
   sudo docker run -d -p 7080:5000 ruby-bundle-update
   &nbsp;
   # TODO: Identify the Docker ID to a variable: 
   $DOCKER_ID=$(sudo docker ps)
   # (value such as 363ddc8f7439)
   sudo docker exec -i -t "$DOCKER_ID" /bin/bash
   # Save updated files:
   sudo docker cp server.rb "$DOCKER_ID:/app/"
   sudo docker cp Gemfile "$DOCKER_ID:/app/"
   # Get inside:
   sudo docker exec -i -t  "$DOCKER_ID" /bin/bash
   sudo docker ps
   sudo docker commit "$DOCKER_ID" ruby-bundle-update
   sudo docker stop "$DOCKER_ID"
   &nbsp;
   sudo docker ps
   sudo docker run -d -p 7080:5000 ruby-bundle-update
   sudo docker ps
   &nbsp;
   # TODO: copy file newrelic.yml from external
   touch 1
   vi q
   vi 1
   mv 1 newrelic.yml
   vi newrelic.yml 
   ls -lart  # to verify manually
   &nbsp;
   # TODO: Identify the Docker ID to a variable: 
   $DOCKER_ID=$(sudo docker ps)
   # (value such as 178e6dc45ab7)
   &nbsp;
   sudo docker cp newrelic.yml "$DOCKER_ID:/app/"
   sudo docker commit "$DOCKER_ID" final-version
   sudo docker stop "$DOCKER_ID"
   # Verify:
   sudo docker images
   # Restart:
   sudo docker run -d -p 7080:5000 final-version
   &nbsp;
   sudo docker ps
   history > /tmp/history.file
   </pre>


   <a name="FloodScriptUpdate"></a>

   ### Update Element .ts script for flood.io

1. Update the IP address in the script (several locations):

   <pre>await browser.visit('http://18.208.170.2:7080/')</pre>

   ### Create the-internet Docker image

   ### Instrument script for NewRelic 

1. Get license from newrelic.com
1. Insert license into script

NOTE: https://github.com/ThyWoof/geek-movie-shop

   ### Script B : Create Docker image / AMI ?

   ### Script C : Save instrumented Docker image to DockerHub for reuse

1. Docker save

   ### Flood

1. Create account (manually).
1. Get license token.
1. Insert license token in script.
1. Specify script in GitHub.
1. Run

   ### Script D : Run the-internet in AWS Docker process under instrumentation

1. If you don't have a <a target="_blank" href="https://www.flood.io/">flood.io</a> account, get one.
1. Confirm your account via email.
1. Log into Flood.io.
1. Specify script.
1. Specify run conditions.

1. Validate run pre-conditions.
1. Initiate run.
1. Stop run.
1. Collect run results.
1. Analyze run results / Generate visualizations.
1. Display summary statistics.

   

<a name="VerifySecurity"></a>

## Security scans

In today's randomware enviornment, we all need to be extra vigilant to ensure security. 

1. Install <a target="_blank" href="https://inspec.io/">https://inspec.io</a> 
(created by Chef) 

1. Install <a target="_blank" href="https://github.com/docker/doccker-bench-security">https://github.com/docker/doccker-bench-security</a> 

1. Install CIS (Center for Internet Security) benchmarks for specific distributions and versions of Linux:

   * Distribution independent Linux
   * Debian Linux 8
   * Ubuntu Linux 16.04 LTS 
   * Amazon Linux 2 
   * Centos Linux 7
   * Oracle Linux 7
   * Red Hat Enterprise Linux 7
   * SUSE Linux Enterprise 12

The Linux Audit Framework is used to identify potential security weaknesses or policy violations

1. Install

   <pre>sudo apt install auditd
   pidof auditd</pre>

1. Add rules and list them

   <pre>sudo auditctl -w /usr/bin/dockerd -k docker
   sudo auditctl -l</pre>

1. Turn auditing on.
1. Analyze report

   <pre>sudo aureport</pre>


<a target="_blank" href="https://app.pluralsight.com/library/courses/securing-docker-platform/table-of-contents">Securing the Docker Platform</a>
by Nigel Brown Released 21 Jun 2018

