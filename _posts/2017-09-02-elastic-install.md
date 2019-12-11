---
layout: post
title: "Elastic Stack Installation"
excerpt: "Here are several ways to get it up and running quickly"
tags: [ELK, ecosystem]
date: "2017-09-07"
file: "elastic-install"
image:
# elk-beat-arch-1900x500-102084.jpg
  feature: https://user-images.githubusercontent.com/300046/30410257-2d3fa8b0-98c7-11e7-9467-d35837b592a2.jpg
  credit: JP Toto on Pluralsight
  creditlink: https://app.pluralsight.com/library/courses/centralized-logging-elastic-stack/table-of-contents
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This page describes the different options to get going with an Elastic Stack of your own.

"Elasticsearch is a real-time distributed, scalable, real-time search and analytics engine. It enables you to search, analyze, and explore your data, often in ways that you did not anticipate at the start of a project."

First of all, each component of the Elastic Stack (previously called ELK Stack) are typically on a different set of servers:

   * Beats components are installed on servers being monitored.
   * Logstash servers should ideally be near the same subnet as servers being monitored.
   * ElasticSearch database nodes (usually a cluster of them) can be in the same or different data centers than servers being monitored.
   * Kibana servers would be near those who request visualizations
   <br /><br />

Elastic also offers cloud services as <strong>paid</strong> (licensed) software to manage and protect stacks:

   0. <strong>Found</strong> 
   0. <strong>Shield</strong> to Secure data in Elasticsearch. 
   0. <strong>Marvel</strong> to Monitor Elasticsearch deployments. 
   0. <a href="#Watcher">Watcher</a> Alerting for Elasticsearch. 
   0. <strong>Packetbeat</strong> to Analyze network packet data. 


<hr />

## Versions for download

<a target="_blank" href="https://www.elastic.co/downloads/elasticsearch">
https://www.elastic.co/downloads/elasticsearch</a><br />
presents the lastest version from Elastic.co.

| Version | Date             | File type | Zip Bytes | Unzipped |
| ------- | ---------------: | --------- | --------- | -------- |
| 5.6.0 | September 11, 2017 | elasticsearch-5.6.0.zip | 33,783,880 | 37,913,726 |
| 5.5.3 |       May 15, 2017 | elasticsearch-5.5.3.zip | 33,517,299 | - |
| 5.0.0 |   October 26, 2016 | elasticsearch-5.6.0.zip | 32,218,000 | - |

Notice several images are available:

   * .ZIP
   * .TAR for generic Linux
   * .DEB for Debian
   * .RPM for Ruby
   * .MSI for Windows

Only one previous back release is available.

The folder unzipped contains these folders:

   <pre>
|-- bin     = executables and shell scripts 
|-- config  = settings to tweak
|-- lib     = library jar files for Java
|-- modules = jar files and properties for optional modules
`-- plugins = empty
   </pre>

The config folder contains settings to tweak: 
`log4j2.properties`, and <strong>elasticsearch.yml</strong>,

0. On Windows 64-bit machines, edit the `jvm.options` file to add the stack size for Java (under `-Xmx2g`):

   `-Xss1m`



## Ways to setup

A) <a href="#ElastiCloud">Run on Elastic's own Cloud Service</a>. This is a quickest way.

B) <a href="#ElasticFromAmazon">Run on Amazon's Elastic Service</a>. This is a quick way, but not optimal.
   
C) <a href="#Docker">Use a Docker image</a>.

D) <a href="#LocalDownload">Download installer onto a local or virtual machine</a>.

E) Build from source code in GitHub.

<hr />

<a name="ElasticCloud"></a>

## Elastic Cloud 

<a target="_blank" href="https://www.elastic.co/webinars/hosted-managed-elasticsearch-found">
See the webinar</a>


Other SaaS service providers include:

   https://logz.io/elk_as_a_service/


<a name="ElasticFromAmazon"></a>

## Elastic from Amazon

Amazon announced its ElastiSearch Service offering October 1st 2015. See:
<a target="_blank" href="https://aws.amazon.com/blogs/aws/new-amazon-elasticsearch-service/">
https://aws.amazon.com/blogs/aws/new-amazon-elasticsearch-service/</a>

After a month working with it, http://kirankoduru.github.io/elasticsearch/moving-from-aws-elasticsearch-service.html
identified reasons why he got away from it:

  * AWS is not supported by Elastic Support.

  * AWS does not include Shield, the Elastic commercial security plugin that handles RBAC of cluster and indexes.

  * AWS controls the <strong>elasticsearch.yml</strong> file containing settings to tweak. The AWS elasticsearch service makes sure everything works perfectly.

  * AWS's service does not consume credits companies accumulate volume discounts for Amazon usage.

  * AWS does not provide a selection of region, which may cause some latency. 

  * AWS's services uses an older version of Elasticsearch, such as 1.5 when version 2.0 is available directly from Elastic.co. This is important for those who don't want to miss out on those bug fixes and shiny new feature releases.

  * AWS's IAM policies are the only way to configure access to its Elasticsearch service.
    That is a good way to secure inbound connections. 
    But some prefer using security groups.

  * AWS turns off dynamic scripting and does not allow script upload into the scripts directory.

  * AWS performs backups only after receiving an email to AWS support rather than allowing the elasticsearch-aws-cloud plugin to configure s3 repositories from the elasticsearch service dashboard.

The ironic thing is that Elastic's own Found service is run on AWS.'

With that said, let's try it out anyway:


<a id="Install"></a>

### AWS Install Steps</a>

Below are the steps I took to create a public instance within AWS.

1. Use Firefox to get in <a target="_blank" href="http://aws.amazon.com/ec2/">
   EC2 dashboard at http://aws.amazon.com/ec2/</a>

0. Select a region appropriate to you. 

   CAUTION: If you intend on creating an image for the Marketplace, you must use US Northern Virginia (us-east-1).

  The default for examples on this page is US-West-2, which is in Oregon.

0. Scroll down to the bottom of the Analytics section to click on the Elasticsearch Service link. 

   ```
   https://us-west-2.console.aws.amazon.com/es/home?region=us-west-2#
   ```

0. If you want to use a different region, click on "Oregon" (or another) at the upper right corner.
  
0. Clicking on the <a target="_blank" href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-gsg.html">
   Getting Starte Guide</a> opens a new window tab.

0. Click on the blue **Get Started** button.

0. PROTIP: When specifying **domain**, keep to lower case characters and perhaps a number at the end for versioning.
   For example:
 
   ```
   test1
   ```

0. For **Instance type**, since I don't have much data yet during experimentation, 
  I use Free Tier eligible **t2.micro.elasticsearch**.

0. Hover over the (i) icon to the right of **Enable dedicated master**. It says:
   "We recommend that you allocate at least three dedicated master nodes for each production Elastisearch domain."

   I leave blank anyways during experimentation.

0. Hover over the (i) icon to the right of **Enable zone awareness**. It says:
   "Distributes nodes across two Availability Zones..."

0. For Storage, I select EBS with 10 GB of General Purpose (SSD) drives.

   PROTIP: Free tier users gets up to 10 gigabytes of Magnetic or SSD-Backed EBS storage at no charge
   for up to 750 hours per month.

0. After clicking Next, for access policy I select "Allow open access to the domain"
   so anyone can upload documents.

   The version in the file is of AWS access code API version:
  
   ```
   "Version": "2012-10-17",
   ```
  
0. Click Next.
0. Confirm and create. It takes several minutes for Domain status to go from Loading to Ready.
   Below is a sample screen after provisioning:

  <img alt="screen shot 2015-10-13 at 8 31 10 am" src="https://cloud.githubusercontent.com/assets/300046/10459540/d9dc2a2e-7184-11e5-9cbd-d78ac15fb296.png">

  These sample links are no longer active, of course.
  But when it was for me, clicking on https://search-test1-da54anmy3esch22sskcuukwf6i.us-west-2.es.amazonaws.com/
  got me this:
  
  ```
  {
  "status" : 200,
  "name" : "Ikthalon",
  "cluster_name" : "495629083449:test1",
  "version" : {
    "number" : "1.5.2",
    "build_hash" : "62ff9868b4c8a0c45860bebb259e21980778ab1c",
    "build_timestamp" : "2015-04-27T09:21:06Z",
    "build_snapshot" : false,
    "lucene_version" : "4.10.4"
  },
  "tagline" : "You Know, for Search"
}
  ```
  
  Instead of the web UI,
  <a target="_blank" href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-gsg-create-domain.html">
  use AWS ES CLI</a>.
  
0. Click on the Kibana link, such as:
 
   ```
   https://search-test1-da54anmy3esch22sskcuukwf6i.us-west-2.es.amazonaws.com/_plugin/kibana/
   ```
  
  <img alt="screen shot 2015-10-13 at 9 42 48 am" src="https://cloud.githubusercontent.com/assets/300046/10461630/12096628-718f-11e5-808b-5b3e2eee0751.png">
  
0. To make use of the instance using Python in my Mac terminal window:
 
   ```
   pip install elasticsearch
   ```
  
0. For more about using Python for Elastisearch, this article (from November 2014):
  
  http://bitquabit.com/post/having-fun-python-and-elasticsearch-part-1/


<hr />

<a name="Docker"></a>

## Use Docker images

WARNING: Prior Docker images for Elastic servers on Docker hub (https://hub.docker.com/_/elasticsearch/) have been deprecated.

1. Install Docker.

   See https://docs.docker.com/docker-for-mac/
   
   See https://docs.docker.com/compose/install/

2. Run the Docker daemon.

0. Retrieve the official Docker image for Elastic server <strong>for a specific release</strong>:

   <pre><strong>docker pull docker.elastic.co/elasticsearch/elasticsearch:5.6.0
   </strong></pre>

   NOTE: Source code for it can be found on GitHub at<br />
   https://github.com/elastic/elasticsearch-docker/tree/5.6


   ### max_memory_account

   <a target="_blank" href="https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html">
   DOC</a>

0. Before running in production mode, which 

   ### Run in dev mode

0. Run in development mode (on a different port if you prefer):

   <pre><strong>docker run -p 9200:9200 -e "http.host=0.0.0.0" -e "transport.host=127.0.0.1" docker.elastic.co/elasticsearch/elasticsearch:5.6.0
   </strong></pre>

   Alternately, bring up a cluster of several Elasticsearch nodes based on specifications in the `docker-compose.yml` file:

   <pre><strong>docker-compose up
   </strong></pre>
   
   NOTE: The image is built with X-Pack and uses centos:7 as the base image. 


<hr />

<a name="LocalDownload"></a>

## Download installer from GitHub on your local machine

### Pre-requisites

1. Instantiate an Ubunto server image.

0. Verify the Linux operating system:

   <pre><strong>cat /etc/issue.net; ifconfig
   </strong></pre>

0. Get IP address assigned, to later put in the elasticsearch.yml file:

   <pre><strong>ifconfig
   </strong></pre>

0. Install the Java runtime:

   <pre><strong>apt-get install openjdk-8-jre-headless && 
   java -version
   </strong></pre>

0. Get curl:

   For Windows: From http://curl.haxx.se/download.html download the Win64 x86_64 zip.


   ### Get Elasticsearch

0. Make a folder:

   <pre><strong>mkdir pkg
   </strong></pre>

0. QUESTION: Identify the version you want to use.

0. Download Debian package from Elastic:

   <pre><strong>wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.0.deb
   </strong></pre>

   PROTIP: RPM and Debian packages are available. Satellite versions from the OS
   ES.co does not recommend apt-get which may be older than those directly from Elastic.co.

0. De-package:

   <pre><strong>dpkg -i elasticsearch-5.6.0.deb
   </strong></pre>


   <a name="elasticsearch.yml"></a>

   ### Configure defaults

0. PROTIP: Some copy over the file with one from your own GitHub repository.

0. Edit using the nano text editor:

   <tt><strong>nano /etc/elasticsearch/elasticsearch.yml
   </strong></tt>

0. Remove the # to change `cluster.name: ` to yours.
0. Make the `node.name` the same.
0. Uncomment `network.host` to the IP address of the server.
0. Save and exit the text editor.

   ### Memory maps

   PROTIP: Elasticsearch makes extensive use of memory maps. So give it the maximum.

   To set the maximum value permanently on a Linux server:

   <tt><strong>grep vm.max_map_count /etc/sysctl.conf
   </strong</tt>

   Alternately, to set the value for just the current session on a Linux server:

   <tt><strong>sysctl -w vm.max_map_count=262144
   </strong</tt>

0. Start the Elasticsearch service:

   <tt><strong>service elasticsearch start
   </strong></tt>

   Alternately, on a Windows machine:

   <tt><strong>.\elasticsearch-service.bat install Elasticsearch
   </strong></tt>

0. Verify access using a headless API call to its port, for example:

   <tt><strong>curl http://192.168.0.12:9200
   </strong></tt>

   On Windows, bring up PowerShell and:

   <tt><strong>Invoke-WebRequest -Uri http://192.168.0.12:9200
   </strong></tt>

   The response should be JSON reflecting its most recent build metadata.

   Alternately, invoke:

   ```
bin/elasticsearch --cluster.name=my-application --node.name=node-1 --path.repo=/
   ```

0. Make it come up after a reboot. On Linux:

   <tt><strong>systemctl enable elasticsearch
   </strong></tt>

## Resources

* Andrew Puch @gmail 
https://www.linkedin.com/in/apuch
who runs http://andrewpuch.com/
and the #devopsengineers Slack channel at http://devopsengineers.com/
created as https://twitter.com/awstutseries
https://www.youtube.com/watch?v=ge8uHdmtb1M
which details how to setup Elasticsearch.

* <a target="_blank" href="http://jakege.blogspot.sg/2014/03/how-to-install-elasticsearch.html">
How to Install and Configure Elasticsearch</a>

* ObjectRocker has a KnowledgeBase of articles at 
https://kb.objectrocket.com/category/elasticsearch

## More #

This is one of a series on Elastic Stack and monitoring:

{% include monitoring_links.html %}
