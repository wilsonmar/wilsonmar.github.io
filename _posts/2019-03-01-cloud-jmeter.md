---
layout: post
title: "JMeter in the cloud for distributed performance testing"
excerpt: "Impose load remotely from Docker instances in the AWS cloud"
tags: [Docker]
comments: true
image: # docker-jmeter-1900x500-75034
  feature: https://user-images.githubusercontent.com/300046/54164857-ae040d00-4434-11e9-9480-35a8f9e9a2b1.jpg
  credit: 
  creditlink:
---
<i>{{ page.excerpt }}</i>

{% include _toc.html %}

The diagram here describes progress toward distributing runs of JMeter within EC2 and/or Docker, and scaling those instances to increase load on app servers. Each step is a deliverable within the sequence of MVP (Minimim Viable Product) stages.

## Flowchart

<!-- v20 -->
<amp-youtube data-videoid="ZCQdv57VDE8" layout="responsive" width="480" height="270"></amp-youtube>
<br />

To keep it simple, let's say our system under test on-prem. consists of (1) a server responding to API requests behind a governance proxy such as <strong>Apigee</strong>. The API front-end needs to be setup first because it authenticates requests based on pre-assigned <strong>tokens</strong> provided to those who call the service. 

A (2) <strong>Monitoring agent</strong> on each server, such as Dynatrace or SignalFx, collects various metrics for display on a <strong>Dashboard</strong>. 

Now we can begin to construct (3) <strong>JMeter</strong> scripts that impose artificial loads.
From a laptop, we can only impose a limited load. But that is OK because we use laptops just to craft scripts.
Once viable, the scripts, along with associated files, are pushed into a (4) private Version Control repository such as AWS Code Commit.
Within security-conscious enterprises, instead of downloading installer packages from the internet, it is safer to obtain installers that have been vetted by Security specialists before being made available from a (5) private repository such as <strong>Artifactory</strong> or Enterprise DockerHub. 
A lot of work is needed to vet the many dependencies for those who prefer to build machines <em><strong>from the ground up</strong></em> using Configuration as Code <strong>(CaC)</strong>, a practice that enables them to quickly respond to issues by being able to quickly change anything within the tech stack.

To make use of the Amazon cloud, on the laptop we install the (7) <strong>AWS CLI</strong> and associated tools to craft (8) <strong>Cloud Formation</strong> files that instantiate services such as EC2 with Docker to run server programs within the AWS Cloud.
Within AWS, we (9) instantiate images containing JMeter using those common scripts in the code repository.

Before we run, we should (10) lint and <strong>audit</strong> the containers using various tools.

When we need to add more JMeter instances to impose a heavier load, we can use a (11) <strong>JMeter Master</strong> to coordinate the Jenkins slave nodes. The Master starts a fixed number of nodes to test (12) app <strong>auto-scaling</strong> mechanisms.

When Configurations settings are under version control, changes can (13) trigger (14) <strong>CI/CD</strong> to automatically initiate test runs. If the analytics system has enough history, it can (15) recognize trends and, if anomalies are identified, issue (16) <strong>alerts</strong> while the changes are still fresh in the mind of the person who made the change.

Because network traffic between on-premises servers and load generators in the cloud is subject to significant variability, it would be ideal to have a (17) load generator near each machine under test. But it can be problematic going through the corporate firewall. 

It might be easier to make use of a (18) web-based SaaS service such as Blazemeter or Flood.io. With them, we just upload a script and they handle the rest, such as configuring enough machines.

When servers on-prem. are (19) transitioned to run within a cloud, we would avoid issues with firewalls and avoid charges AWS imposes for data leaving AWS.

Next, we'll look at configuration settings for the cloud, such as <strong>AWS affinity groups</strong> to specify low latency between servers within the same Availability Zone.

<hr />

## Steps

Below are more details about each deliverable:

1. Setup the application under test, with API <strong>tokens</strong> and/or GUI User ID/Password.

   For the purpose of this exercise, we run a simple "hello world" program in the background. A real production configuration would have a load-balanced API Gateway service in front of machines responding to API requests.

   PROTIP: We'll need several types of tokens. We generally use tokens with a lot of credits for stress or soak testing. We also need one with no credits to test rejection mechanisms. And an automated way is needed to reset tokens after each test.

2. Install monitoring (Dynatrace, SignalFx, Splunk, etc.) with a <a href="#Visualization">dashboard for analytics visualization.</a>

   The InfluxDB time-series database and Grafana analytics visualization tools are popular.

   Each InfluxDB dataset contains several key-value pairs, consisting of the fieldset and a timestamp. InfluxDB has no external dependencies and provides a SQL-like language with built in time-centric functions. This component can be adopted for collecting JMeter statistics.

3. On a laptop, install and run a single instance of JMeter.

   Pre-requisites to JMeter is a Java Virtual Machine.

   The assumption is that JMeter has been installed.
   There are different installation processes for Windows vs. MacOS vs. Linux machines.

   See TODO: Install JMeter shell script.

4. Version Control within the cloud (AWS Code Commit)

5. Identify installers, vet them, and store versions in Artifactory.

6. Install Docker within EC2.

7. Install AWS CLI and dependencies Python, jq, cf-lint, etc.

8. Code AWS Cloud Formation (CF) to create within the AWS cloud a EC2/Docker instance, JMeter, JMeter

   https://www.blazemeter.com/blog/top-6-docker-images-for-jmeter-users-and-performance-testers

   One of the advantages of Docker that, once encapsulated within a Docker container, that container can be run unmodified on various operating systems (Windows, MacOS, Linux, etc.).

   Details of <a href="#DockerHub">selecting</a> or <a href="#Dockerize">building an image</a>, then creating a Dockerfile to use that image are <a href="#Dockerize">here</a>.

   Each JMeter host (server) process uses two ports; one to listen for instructions from the master and another to write responses back to the master.  The server image exposed two ports for this purpose.
   
   Started n-instances of jmeter-server.  Each of which was bound to two well known ports on the host.

   Determine IP addresses from the container ID of the server instance.

   Started the Jmeter client (master).  The client image was crafted to receive the location of the remote server instances during invocation and write its log & test results back to the host

   When the JMeter client started up it connected with every server instance.  I monitored the master's log file on the host for all the action.  When the tests completed I simply removed all the Docker containers.  This left me with just the logs & test results! 

   The Master sends JMX files to slave nodes.

   Configure Master machine with an equitable number of users (for 500 users total on 2 slaves, setup 250 each).

   All systems should have the same version of Java and JMeter.

   All systems should be connected to each other in the <strong>same subnet</strong>.

9. Load JMeter script.

10. Install auditctl from <a target="_blank" href="https://www.cisecurity.org/">Center for Internet Security (cisecurity.org)</a> and run Docker deamon to audit Docker events.

    <a target="_blank" href="https://docs.docker.com/compliance/cis/docker_ce/">
    CIS Docker CE benchmark</a>

    https://github.com/docker/docker-bench-security

    The <a target="_blank" href="http://inspec.io"> Auditing and Testing Framework (http://inspec.io)</a> is an <a target="_blank" href="https://github.com/inspec/inspec">open-source</a> testing framework for infrastructure with a human- and machine-readable language for specifying compliance, security and policy requirements. It is implemented in the <a target="_blank" href="https://www.inspec.io/docs/reference/cli/">inspec CLI command</a> running on Debian, Ubuntu, CentOS. Its <a target="_blank" href="https://dev-sec.io/baselines/docker/">DevSec Hardening Framework</a> defines rules in a yaml attribute file.

    The <a target="_blank" href="https://github.com/dev-sec/cis-docker-benchmark">CIS Docker Benchmark Profile at ttps://github.com/dev-sec/cis-docker-benchmark</a>

    https://www.cisecurity.org/cis-benchmarks/#docker

    To run Docker daemon to trigger:

    <pre>dockerd -v</pre>

11. Configure a Master instance to control JMeter slaves

    When there is more than one JMeter instance, a <strong>master</strong> instance is needed to send instructions and receive responses.

    1. One each JMeter node console, identify the IP addresses of the slave machines using "ifconfig" for the "inet" to "en0" entry.
    1. Within the the master's bin folder, edit file <tt>jmeter.properties</tt>.
    1. Find the "remote_hosts" and un-comment the line by removing the "#" on the left.
    1. Use commas to separate multiple IP addresses. Save the file.
    1. To enable remote start from the Master machine, create a <strong>keystore</strong> by running <tt>create-rmi-keystore.sh</tt> (or .bat). The "First and last name:" has to be "<strong>rmi</strong>" (remote method execution). Supply a password you've written down. This generates file <tt>rmi_keystore.jks</tt>. See https://jmeter.apache.org/usermanual/remote-test.html

    1. Copy the file to the bin folder of all slave nodes. Reference the property "server.rmi.ssl.keystore.file".

    1. Start JMeter in GUI mode:

    <pre>sh jmeter-server.sh</pre>

    See menu Run, Remote Start to verify its IP address.

    Alternately, to run in non-GUI mode using the "-n" flag:

    <pre>sh jmeter.sh -n -t "/..." -R 192.168.1.2</pre>

    After run, view JMeter's output results file.

    PROTIP: Several runs are usually necessary to identify the number of virtual users which can be supported on a single machine. Configure Master machine with an equitable number of users (for 100 users total on 2 slaves, setup 50 each).

    The above is based on https://www.youtube.com/watch?v=Ok8Cqc0wipk

12. Verify app auto-scaling.

    Driver must:
    * Create the specified number of JMeter server containers
    * Create the JMeter master container
    * Fire off the test
    * Wait for the test to complete
    * Remove all the containers

    It took some scripting foo along with some Docker image revisions.  I now have a setup that allows me to:

    <pre><strong>driver.sh -s jmxfile.jmx -d data-dir -n 8</strong></pre>

13. Identify change trigger.

14. Kick off CI/CD job.

15. Trends.

16. Alerts.

17. Create a JMeter instance near front-end (API) server

18. Bring JMeter script to SaaS cloud performance testing service.


You can find the work referenced in this blog at:

https://github.com/srivaths/jmeter-driver
https://github.com/srivaths/jmeter-base
https://github.com/srivaths/jmeter
https://github.com/srivaths/jmeter-server
I gave a lightning talk on this work.  The slide deck I used for it is at http://www.slideshare.net/srivaths_sankaran/jmeter-docker-sitting-in-a-tree.


(for example, https://aqueduct.flood.io/ to get through from internal IP's in the cloud through a firewall exiting as TLS pipe with port 80/443. Similar to Ngrok. Flood.io filters out )


<hr />

<a name="Dockerfile"></a>

### Dockerfile

   A Dockerfile contains all commands necessary to Docker to assemble an image. It is not a program like Java. It is a Domain Specific Language (DSL).

1. The sample Dockerfile assumes these environment variables have been defined prior to execution:

   <pre>
   export JMETER_HOME="/usr/local/bin/jmeter"
   export JMETER_VERSION="5.0"
   export MIRROR_HOST="???"
   export JMETER_DOWNLOAD_URL="???"
   export JMETER_PLUGINS_DOWNLOAD_URL="???"
   export JMETER_PLUGINS_FOLDER="???"
   </pre>

1. At "# 2", put your name in place of:

   <pre>LABEL maintainer="wilsonmar@gmail.com"</pre>

1. At "# 3", notice that the version at the time of writing is 3.3. In order to update it yourself, you would need to test it and put a new image in DockerHub.

1. At "# 5" edit the time zone from "Europe/Rome" https://www.zeitverschiebung.net/en/timezone/europe--rome

   https://www.baeldung.com/java-daylight-savings referencing 
   http://www.iana.org/time-zones

1. Switch to edit another file: <tt>/etc/sysconfig/clock</tt> and change the UTC line to: "UTC=true".

1. Save the file using the keystrokes for the editor you're using.

   A Docker volume is created to exchange files with the container.

   <pre>ll -ltr tmp/</pre>
 
   


<a name="Dockerize"></a>

### Dockerize

   Docker commands are issued from a CLI or a shell script:

   <pre>docker build -t jmeter <em>path to Dockerfile</em> </pre>

   During the build process, many network contents can be fetched, so the time it takes can vary. The last message should read:
   
   <pre>Successfully tagged jmeter:latest</pre>
   
   After the contents type can vary, from a simple text file to archive package (e.g. zip, tar.gz, rpm, deb, etc). Afterwards, these files are “installed” on the image with specific commands (e.g. copy for text file, unzip for zip, tar for tar.gz, etc).

   Docker images run within a Docker service running in the background.

   <pre>docker run -t <em>image_name</em> <em>arguments</em> </pre>


<a name="DockerHub"></a>

### DockerHub

   To minimize cost, we want to use a Docker image with the <strong>minimum memory requirement</strong>.
   
   After a review of alternative images identified from a search of DockerHub, the one with the smallest memory is Alpine Linux. Its 200 MB is so small it can run on a Raspberry Pi.
   
   "Alpine Linux is built around musl libc and busybox. This makes it smaller and more resource efficient than traditional GNU/Linux distributions. A container requires no more than 8 MB and a minimal installation to disk requires around 130 MB of storage."
   -- https://hub.docker.com/_/alpine/ lists Alpine Docker images.

   See https://wiki.alpinelinux.org/wiki/Setting_the_timezone

1. Verify whether (by download or by Dockerizing), we now should have an image file:

   <pre>docker image ls</pre>


## Docker launch.sh

1. Open the <tt>launch.sh</tt> file in a text editor.

   <pre>docker volume create <em>volume name</em></pre>

   If not all information is provided, Docker chooses all the volume configuration details for us (e.g. real path on host machine). With the command

   <pre>docker volume inspect <em>volume name</em></pre>
 
   it's possible to retrieve where the volume is mapped on the test machine.

   If the test machine is on Windows or you don't want to create a stand alone volume, you can specify the volume directly with the container execution command line via arguments.


1. Execute the containers:

   https://www.blazemeter.com/blog/make-use-of-docker-with-jmeter-learn-how

Passing JMeter arguments with the “docker run” command (e.g. which jmx script must be executed, script parameters, etc)

Then, fetching the result file (e.g. jtl and log file) using a shared folder on the test machine called Docker volume, that can be used to save result files after the container execution ends.

If the container modifies the file system, it does not persist after the container finishes. So to obtain JMeter results it’s necessary to set up an exchange folder with the ‘volume’ command.

 On the left you can see our test machine that hosts the JMeter containers and the Docker volume. The volume is used to provide a JMX script file to be executed, and to retrieve from the container the JTL result file and the LOG file on execution.



## Application under test


In this example, the container starts and as a first action it executes a JMeter application with arguments passed with the “docker run” command. When JMeter completes its execution, the container stops itself, leaving the JMeter result files in the Docker volume.


zzz With the script build.sh the Docker image can be build from the Dockerfile but this is not really necessary as you may use your own docker build commandline.
Build Options

Build argumments (see build.sh) with default values if not passed to build:

<pre>   
    JMETER_VERSION - JMeter version, default 3.3
    IMAGE_TIMEZONE - timezone of Docker image, default "Europe/Amsterdam"
NB IMAGE_TIMEZONE setting is not working yet.
Running
</pre>

The Docker image will accept the same parameters as jmeter itself, assuming you run JMeter non-GUI with -n.

There is a shorthand run.sh command. See test.sh for an example of how to call run.sh.
User Defined Variables

This is a standard facility of JMeter: settings in a JMX test script may be defined symbolically and substituted at runtime via the commandline. These are called JMeter User Defined Variables or UDVs.

See test.sh and the trivial test plan for an example of UDVs passed to the Docker image via run.sh.

See also: http://blog.novatec-gmbh.de/how-to-pass-command-line-properties-to-a-jmeter-testplan/
Specifics


The Docker image will install (via Alpine apk) several required packages most specificly the OpenJDK Java JRE. JMeter is installed by simply downloading/unpacking a .tgz archive from http://mirror.serversupportforum.de/apache/jmeter/binaries within the Docker image.

A generic entrypoint.sh is copied into the Docker image and will be the script that is run when the Docker container is run. The entrypoint.sh simply calls jmeter passing all argumets provided to the Docker container, see run.sh script:

sudo docker run --name ${NAME} -i -v ${WORK_DIR}:${WORK_DIR} -w ${WORK_DIR} ${IMAGE} $@


<a name="AuditScanner"></a>

### Run Docker with monitoring and with auditing on

1. Install monitoring (Dynatrace)

1. Run scanner CIS benchmark:

   To remove "Ensure auditing is configured" messages,

1. Install on Ubuntu:

   <pre>sudo apt install -y auditd</pre>

1. Confirm whether auditd is installed (using Linux command):

   <pre>command -v auditd</pre>

1. Using a text editor, prevent an error by editing file <tt>tests/1_host_configuration.sh</tt> so check_1_() contains not "docker" but:

   <pre>file="/usr/bin/docckerd"</pre>

1. Obtain Process ID:

   <pre>pidof auditd</pre>

1. Get the report:

   <pre>sudo aureport</pre>

1. Install auditctl to obtain Docker audit events.

1. Run Docker daemon to trigger:

   <pre>dockerd -v</pre>

1. Get event id number from "/usr/bin/dockerd 1000 422":

   <pre>sudo aureport -k</pre>

1. Obtain report by searching the audit log:

   <pre>sudo ausearch --event 422 | sudo aureport -f -i</pre>

1. Create a file for each watched rule:

   <pre>for i in "${files[0]}"; do sudo auditctl -w $i -k docker; done</pre>

1. Make sure rules have been applied to the framework:

   <pre>sudo auditctl -l</pre>

   * /usr/bin/dockerd
   * /var/lib/docker/
   * /etc/docker/
   * /lib/systemd/system/docker.service 
   * /lib/systemd/system/docker.socket
   * /etc/default/docker
   * /etc/docker/daemon.json
   * /usr/bin/docker-ccontainerd
   * /usr/bin/docker-runc
   <br /><br />

1. Make the rules permanent:

   <pre>sudo sh -c "auditcctl -l >> /etc/audit/audit.rules"</pre>


<a name="Visualization"></a>

## Install dashboard for analytics visualization

   The InfluxDB time-series database and Grafana analytics visualization tools are popular.

   ### InfluxDB

   Here we adopt InfluxDB to collect JMeter statistics.

   Each InfluxDB dataset contains key-value pairs consisting of the fieldset and a timestamp. 
   
   <pre>
docker run --rm \
      --name influxdb \
      -dit \
      --net $TIME_SERIES_NET \
      -e INFLUXDB_DB=db0 \
      -e INFLUXDB_ADMIN_ENABLED=true \
      -e INFLUXDB_ADMIN_USER=admin \
      -e INFLUXDB_ADMIN_PASSWORD=passw0rd \
      -e INFLUXDB_USER=grafana \
      -e INFLUXDB_USER_PASSWORD=dbpassw0rd \
      -v $INFLUXDB_VOLUME:/var/lib/influxdb \
      influxdb
   </pre>

   ```--rm``` removes the container after run conclusion, to avoid container information being preserved during restart.

   ```--name``` is the running container name, also used as a domain name in the Docker network.

   ```--dit``` runs the container in the background with a local shell, ready to be used like a remote ssh command line.

   ```--net``` assigns a working virtualized network handled by Docker.

   ```-e``` pass the environment variable to the recently created container. In this case we configured:

   <pre>
    INFLUXDB_DB - local database name
    INFLUXDB_ADMIN_ENABLED, INFLUXDB_ADMIN_USER and INFLUXDB_ADMIN_PASSWORD configures availability of the admin profile
    INFLUXDB_USER and INFLUXDB_USER_PASSWORD - configure the standard user profile used by Grafana.
   </pre>

   ```-v``` assigns a logical volume on the hosting machine. It persists on container restart. Use of this volume limits disk space to only necessary data.

   InfluxDB has no external dependencies and provides a SQL-like language with built in time-centric functions. 


   ### Grafana

   Grafana is not directly connected to JMeter, but can be added to our process via Docker. 
   
1. To download the 241MB image from DockerHub:

   <pre>docker run -d -p 3000:3000 grafana/grafana</pre>

1. Edit <tt>conf/grafana.ini</tt>

   See http://docs.grafana.org/installation/docker/ and http://docs.grafana.org/installation/configuration/#http-port

   Semicolons (the ; char) are the standard way to comment out lines in a .ini file.



1. Define a profile for AWS to GF_AWS_PROFILES (e.g. GF_AWS_PROFILES=default another).

1. Edit this sample run script to replace the default server name, secret, and AWS credentials for CloudWatch support:

   <prer>
# Create a persistent volume for data in /var/lib/grafana (database and plugins):
docker volume create grafana-storage
&nbsp;
docker run \
  -d \
  -p 3000:3000 \
  --name=grafana \
  -e "GF_SERVER_ROOT_URL=http://grafana.server.name" \
  -e "GF_SECURITY_ADMIN_PASSWORD=secret" \
  -e "GF_AWS_PROFILES=default" \
  -e "GF_AWS_default_ACCESS_KEY_ID=GF_AWS_${profile}_ACCESS_KEY_ID" \
  -e "GF_AWS_default_SECRET_ACCESS_KEY=GF_AWS_${profile}_SECRET_ACCESS_KEY" \
  -e "GF_AWS_default_REGION=GF_AWS_${profile}_REGION" \
  -v grafana-storage:/var/lib/grafana \
  grafana/grafana
   </pre>

1. Open your browser to view Grafana at URL http://localhost:3000/. 

   3000 is the default http port that Grafana listens to if you haven’t configured a different port.

   http://docs.grafana.org/guides/getting_started/

   An alternative to Grafana is a web app to explore JMeter results using Angular.js 1.0 & d3.js at 
   http://smarigowda.github.io/ngd3jmeter/


## Resources

Dockerfiles from:

* <a target="_blank" href="https://hub.docker.com/r/justb4/jmeter/">https://hub.docker.com/r/justb4/jmeter</a> is an Alpine Linux Docker image for Apache JMeter. This Docker image can be run as the jmeter command. It's <a target="_blank" href="https://github.com/justb4/docker-jmeter">actively maintained</a>.

   The Dockerfile in the GitHub need to be edited because JMeter is installed by downloading/unpacking a .tgz archive into the Docker image from the <strong>public</strong> http://mirror.serversupportforum.de/apache/jmeter/binaries. Enterprises would want to pull the image from an internal repository (such as Artifactory) after being vetted by Corporate Security.

   A note in the GitHub notes that the Dockerfile is adapted from:
   * https://github.com/hauptmedia/docker-jmeter and 
   * https://github.com/hhcordero/docker-jmeter-server 

Articles:

   * https://www.blazemeter.com/blog/make-use-of-docker-with-jmeter-learn-how
   * https://www.blazemeter.com/blog/jmeter-distributed-testing-with-docker

<a target="_blank" href="https://www.youtube.com/watch?v=UVS4CQvO4_M">
UI, Load, and Performance Testing Your Websites on AWS</a> [42:25] WEB306 at AWS re:Invent 2014 | Nov 18, 2014


## Rock Stars (who have published)

Santosh Arakere Marigowda

   * Created an image to pull in while inside a Docker container:

   <pre>docker pull santosharakerre/jmeter-base</pre>

   Code for the above is from https://github.com/santosharakerre/jmeter-base

   * https://github.com/smarigowda/jmeter-driver

   * https://github.com/santosharakerre/

   * https://www.youtube.com/watch?v=ByxsqYN5tOw
   JMeter Cloud Using Docker Apr 9, 2015 [7:47]

   * https://www.youtube.com/watch?v=snq8OId8CGg
   JMeter 3.2 + InfluxDB + Grafana + Slack Using Docker Containers [12:53] May 8, 2017


from Srivaths Sankaran  

   * JMeter Cloud Using Docker
   Apr 9, 2015 [7:47]
   references
   https://srivaths.blogspot.co.uk/2014/08/distributed-jmeter-testing-using-docker.html

   * git clone https://github.com/smarigowda/jmeter-driver.git

<a target="_blank" href="https://www.youtube.com/watch?v=Ok8Cqc0wipk">
JMeter | Remote Testing | Master Slave | Distributed Testing</a>
Jul 15, 2018 [17:54]
by Raghav Pal  who has a whole <a target="_blank" href="https://www.youtube.com/watch?v=M-iAXz8vs48&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">video "Automation Step by Step" playlist on JMeter</a>

Pluralsight does not have a JMeter course as of March 1, 2019.

https://app.pluralsight.com/player?course=securing-docker-platform
Securing the Docker Platform

https://www.youtube.com/watch?v=R_-YivV_mKo
jmeter-docker poc 
 Jul 10, 2018
by Purshottam Tyagi
at https://github.com/tyagipurshottam/jemter [sic]

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
