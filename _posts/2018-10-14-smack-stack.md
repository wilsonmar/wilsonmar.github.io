---
layout: post
title: "SMACK Stack"
excerpt: "Spark Mesos/Marathon, Akka, Cassandra, Kafka"
tags: [smack]
image:
# feature: sf-ohana-1900x500-178173.jpg
  feature: https://user-images.githubusercontent.com/300046/43407734-bd6303fe-93dc-11e8-87df-302ddbc274ff.jpg
  credit: Salesforce
  creditlink: https://trailhead.salesforce.com/trailblazers
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

Here is reference information for those new to Salesforce to understand how the company structures its offerings.

"SMACK is the New LAMP"

Software Defined Data Centers: Composable Infrastructure - managing bare metal resources just like the cloud.

* Spark big-data
* Mesos DC/OS Marathon
* Akka message streams for data ingestion
* Cassandra cache NoSQL database
* Kafka streaming message broker
<br /><br />

<a target="_blank" href="https://www.linkedin.com/in/florian-tro%C3%9Fbach-8ba0234a/">
Florian Troßbach</a> in his <a target="_blank" href="https://blog.codecentric.de/en/2016/04/smack-stack-hands/">
2016 blog describes this sequence of installation</a>:

Step 0: Prerequisites

If you want to try the examples yourself, you’ll need the following:

1. Vagrant and Virtualbox
2. Ansible
3. An AWS Account. The AWS resources used in this example exceed the free tier, regular AWS fees apply. You have been warned!
4. An EC2 key pair called dcos-intro
5. Twitter access key

https://github.com/ftrossbach/intro-to-dcos

https://github.com/zutherb/terraform-dcos

36 people maintain <strong>240</strong> repositories in the Mesosphere GitHub account
https://github.com/mesosphere

69 people maintain 70 repositories in the DC/OS (Datacenter Operating System) account:
https://github.com/dcos
 https://dcos.io/ help@dcos.io 

Many of the people are associated with both accounts.

https://github.com/dcos/dcos-launch
Turn-key deployments of DC/OS on AWS (template and onprem), Azure, and GCE 
by Charles Provencher

https://github.com/dcos/dcos-launch/issues/187
In the README at https://github.com/dcos/dcos-launch 
the link "maws" requesting 
https://github.com/dcos/dcos-launch/blob/master
returns a 404. Do you mean
https://github.com/mesosphere/aws-cli

https://github.com/alejandroEsc/kraken
 Deploy a Kubernetes cluster using Terraform and Ansible on top of CoreOS. 

