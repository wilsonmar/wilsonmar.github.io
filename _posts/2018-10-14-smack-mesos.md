---
layout: post
title: "SMACK Mesos stack (based on Mesosphere/Marathon DC/OS)"
excerpt: "SMACK = Spark, Mesos, Akka, Cassandra, Kafka, etc."
tags: [smack]
date: "2018-10-14"
file: "smack-mesos"
image:
# feature: sf-ohana-1900x500-178173.jpg
  feature: https://user-images.githubusercontent.com/300046/43407734-bd6303fe-93dc-11e8-87df-302ddbc274ff.jpg
  credit: Salesforce
  creditlink: https://trailhead.salesforce.com/trailblazers
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here are my succinct notes about using Mesosphere DC/OS (Data Center Operating System) and Marathon within its "SMACK stack" to create a Software Defined Data Centers: Composable Infrastructure -- managing bare metal resources just like the cloud.

"SMACK refers to this set of open-source software:

   * Spark big-data micro-batching with Zeppelin integration
   * Mesos DC/OS (Data Center Operating System) multi-tenant Cluster Management
   * Akka message streams for data ingestion
   * Cassandra cache NoSQL time-series database built on Amazon Dynamo DB and Google BigTable
   * Kafka buffer (message broker) for stream processing (from Datastax)
<br /><br />

Additionally for metrics:
   * Elastic for data
   * Kibana to display
   * <a target="_blank" href="https://zeppelin.apache.org/">Zeppelin</a> web-based Notebook for interactive data analytics with SparkSQL and Python Conda support
   <br /><br />


## Mesos to Marathon to DC/OS

Initially written as a research project at Berkeley, the <a target="_blank" href="https://mesos.apache.org/">Mesos Apache project</a> runs both containerized and non-containerized workloads in a distributed manner.

Mesos was adopted by Twitter as an answer to Google’s Borg (Kubernetes’ predecessor). 

> "Mesosphere is democratizing the modern infrastructure we used at Twitter, AirBnB, and other webscale companies to quickly deliver data-driven services on any datacenter or cloud." -Florian Leibert, Co-Founder & CEO 

Customers include <a target="_blank" href="https://www.youtube.com/watch?v=z9hNVDgasys&list=PLbzoR-pLrL6qAEnkhkh5tGI6oX_xXD3X4&index=34">Yelp</a>

Mesosphere as an organization aims to make container orchestration less complex to use by regular human beings
by supplying the Marathon "plugin" to Mesos to handle container scheduling.

Now Mesos became synonomous with DC/OS when, in mid-2016, Mesosphere introduced DC/OS (Distributed Cloud Operating System, aka Data Center Operating System) to simplify Mesos to the point where a Mesos cluster can be deployed with the Marathon scheduler in a few minutes.

UCR (Universal Container Runtime) enables containers without Docker by running containers without an image (zip, tar, JAR),
from appc image, or OCI image as well as Docker image file. It can nest containers as builds under Jenkins.


## What's the big deal?

![smack-over-provisioned-1126x419-47447](https://user-images.githubusercontent.com/300046/46984025-6a34f380-d0a0-11e8-949b-d818330e480f.jpg)

[Mesosphere DC/OS <a target="_blank" title="Nov 6, 2017" href="https://www.youtube.com/watch?v=Scw-wcRLMUk&t=8m36s">reduces AWS bills</a> by dynamically automating where services run on hardware across the datacenter. 
Higher utilization is achieved by DC/OS pooling unused capacity and moving apps to them.
It goes beyond what VMware does, load balancing across several clouds and on-premises as a single set of resources to allocate as needed. That enables the handling of a massive amount of data and processing. 

Mesos handles storage volumes as well as CPU, memory, and network resources.

The ability to scale up and out impacts availability.

<a target="_blank" href="https://www.youtube.com/watch?v=JF58d6QJyuE">VIDEO</a>: <a target="_blank" href="https://www.slideshare.net/Codemotion/mario-cartia-smack-is-the-new-lamp-codemotion-milan-2017">"SMACK is the New LAMP"</a>
Codemotion Milan 2017 by Mario Cartia 

## Mesos architecture

![smack-mesos-624x420-44499](https://user-images.githubusercontent.com/300046/46991241-5c906580-d0c2-11e8-9e14-30734f1b7006.jpg)

From <a target="_blank" href="https://www.stratoscale.com/blog/kubernetes/kubernetes-vs-mesos-architects-perspective/">Stratoscale</a> (AWS-compatible on-premises K8S)

K8S nodes are anologous to Mesos' agents.
But Mesos adds a scheduler layer that doesn’t exist in K8S. 
Although Hadoop (big data) and MPI (messaging) schedulers are shown above, <a target="_blank" href="http://mesos.apache.org/documentation/latest/frameworks/">dozens of schedulers</a> are available, 
including the Marathon container scheduler and Jenkins. 

Services packages are added in a couple clicks at the DC Universe app store. Alternately, use command line:

   <pre><strong>dcos package install kafka</strong></pre>

https://www.youtube.com/watch?time_continue=179&v=VdhJ_Fm3_mk

You can create your own scheduler. 


<a target="_blank" href="https://akka.io/">Akka</a> supports multiple programming models for concurrency, but it emphasizes actor-based concurrency, with inspiration from Erlang. It's from Lightbend.

## Competition

* https://www.nomadproject.io/
* https://docs.docker.com/engine/swarm/
* https://aws.amazon.com/ecs/
* Kubernetes from Google

As its name suggests, DC/OS is more than a container orchestration framework like Kubernetes. 

In fact, Kubernetes can run on top of DC/OS and schedule containers with it instead of using Marathon. 

But DC/OS is "less opinionated". It can run non-containerized, stateful workloads. 

Marathon’s APIs are more straightforward in comparison to Kubernetes. 
Marathon aggregates APIs and provides a relatively small amount of API resources, 
while Kubernetes provides a larger variety of resources and is based on label selectors.

Kubernetes has almost 10x the commits and GitHub stars as Marathon.

While Kubernetes is a completely open source,
DC/OS is controlled by a commercial company, comes with a "Premium" subscription for extra features, 
So "seemingly simple features needed to automate the deployment process is only included in the enterprise version."
<a target="_blank" href="https://logz.io/blog/kubernetes-vs-mesos/">*</a>

   * Kafka from Confluent
   * Datastax
   <br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=1dgUXNVQS5o&index=32&list=PLRsbF2sD7JVq8QYW0vlbOS2JuXUWaWMnT">Docker Swarm or Kubernetes or Mesos - pick your framework! May 17, 2017</a> [45:37] by Arun Gupta


## Installation

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

## Deployment

Mesos has its <strong>minimesos</strong> tool for testing and development. It is specially designed for continuous integration, and for deployment, you simply need to run the following command line on a machine with Docker installed:

<pre><strong>curl -sSL https://minimesos.org/install | sh</strong></pre>

Mesos is, as of this writing, <a target="_blank" href="https://azure.microsoft.com/en-us/services/kubernetes-service/mesosphere/">available natively</a> along with <a target="_blank" href="https://azure.microsoft.com/en-us/services/kubernetes-service/">Azure Container Service</a>.
See https://azuremarketplace.microsoft.com/en-us/marketplace/apps/mesosphere.dcos?tab=Overview

Installation on AWS & GCP is manual.


## Monitoring

One of the selling points of Mesos is that monitoring configuration is included.

To enable monitoring takes 3-20% of CPU:

<pre>--reporter graphite=tcp://localhost:2003/prefix=marathon-test&interval=10</pre>

Generate flame graphs of CPU times with functions called.

A Mesos Master which knows about available computing resources makes offers to a Scheduler.
The Scheduler accepts or declines offers.
Accepted offers are sent to applicable Resources to launch executors/tasks.

https://medium.com/apache-mesos/performance-improvements-in-mesos-1-7-0-50c195033c5d


## Social Media

https://dcos.io/

https://twitter.com/dcos

https://www.youtube.com/channel/UCUECX_bIZBgaw_rAaCoA39Q

https://medium.com/apache-mesos

MesosCon 2018 is held in New York City on November 5th-7th, 2018.

slack?


## References

VIDEOS: <a target="_blank" href="https://www.youtube.com/playlist?list=PLbzoR-pLrL6qAEnkhkh5tGI6oX_xXD3X4">
MesosCon North America Los Angeles Sep 26, 2017</a> is
keynoted by Ben Hindman, Co-Creator, Apache Mesos and Founder, Mesosphere
First held in 2014.

There is also a MesosCon Europe and Asia.

<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
