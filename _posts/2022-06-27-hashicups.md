---
layout: post
date: "2022-06-27"
file: "hashicups"
title: "HashiCups (demo app and infrastructure code)"
excerpt: "My customizations and notes about using the HashiCups sample app and infrastructure code created by HashiCorp to do their demos and training"
tags: [HashiCorp, Kubernetes, Security]
image:
# maze at thebroad 1900x500
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1656337416/prod-baselines-maze-1900x500_axzivx.png
  credit: Hank Wilis Thomas
  creditlink: https://www.thebroad.org/art/hank-willis-thomas/america-0
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

{% include whatever.html %}

HashiCups is not a "bare bones" toy app. Unlike many others, HashiCups comes with configuration settings for installing in several clouds running with Kubernetes, Gateways, and other production-grade infrastructure.

That's because HashiCorp created it and actively maintains it as the base for testing, demos, training, observability instrumentation (logging, monintoring, tracing), and performance benchmarks of HashiCorp's industry-grade Terraform, Vault, Consul, Nomad, Waypoint, Packer, Vagrant, and others used by many Global 2000 enterprises around the world.

HashiCorp provides instructions for creating instances of HashiCups locally on a Mac and in Linux servers in various clouds. CircleCI config.yml code is provided for using Terraform Cloud.

HashiCups configurations include HA (High Availability) and High Performance redudancies across several Availability Zones and even several regions.

HashiCups leverages micro-services and Consul Service Mesh to connect components together securely in a way that satisfies "Zero Trust" principals.

All that means complexity to learn. So being comfortable installing and using HashiCups takes some time and cloud credits (if you're not using Instruqt labs). But you'll be learning a production-quality way to make use of the latest IT technologies.

<em>The above is why here is where I put notes about integrating various HashiCorp products with utility software such as Kubernetes. Files for this topic is under my personal account:</em>

<ul>https://github.com/wilsonmar/hashicups</ul>

## Tutorials

## HashiCorp's Codebase for HashiCups

Code to create an instance of Hashicups is (Apache 2) open-sourced at the GitHub Organization: https://github.com/hashicorp-demoapp

   * https://github.com/hashicorp-demoapp/hashicups-client-go 

   * https://github.com/hashicorp-demoapp/frontend provides a React-based UI which makes GraphQL calls to the products-api backend

   * https://github.com/hashicorp-demoapp/product-api is the products-api backend which responds to GraphQL API calls

   * https://github.com/hashicorp-demoapp/product-api-go is the products-api backend which accesses the 

   * https://github.com/hashicorp-demoapp/postgres database

   * https://github.com/hashicorp-demoapp/payments is the gRCP-based    payments service which handles customer payments. This service is backed by a PostgreSQL database or a Redis queue.
   <br /><br />

SREs look at this regarding infrastructure:

   * https://github.com/hashicorp-demoapp/instruqt uses <a target="_blank" href="https://www.softwareadvice.com/workflow/shipyard-profile/">Shipyard data workflows</a> https://shipyard.build/
   * https://github.com/hashicorp-demoapp/hashicups-setups
   * https://github.com/hashicorp-demoapp/infrastructure

   * https://github.com/hashicorp-demoapp/traffic-simulation by 
nicholas jackson is the code to https://hub.docker.com/repository/docker/hashicorpdemoapp/traffic-simulation

   * https://github.com/hashicorp-demoapp/coffee-service is the code to https://hub.docker.com/r/hashicorpdemoapp/coffee-service
   <br /><br />

Its <a target="_blank" href="https://github.com/hashicorp-demoapp/go-hckit/blob/master/go.mod">standard library of reusable abstractions</a> (in Golang)
uses Opentracing, Zipkin, Jaeger.


## Consul K8s Prometheus Grafana dashboard

<a target="_blank" href="https://github.com/hashicorp/consul-k8s-prometheus-grafana-hashicups-demoapp">https://github.com/hashicorp/consul-k8s-prometheus-grafana-hashicups-demoapp</a>
from Sep 2020 (by <a target="_blank" href="https://www.linkedin.com/in/derek-strickland-59258a/">Derek Strickland</a>)
contains application and dashboard definitions for the <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/kubernetes-layer7-observability">Consul Layer 7 observability with Kubernetes guide located at learn.hashicorp.com</a>


https://github.com/hashicorp/learn-consul-k8s-hashicups

https://github.com/hashicorp/field-demo-hashicups-sample

https://learn.hashicorp.com/tutorials/terraform/provider-setup

https://learn.hashicorp.com/tutorials/consul/kubernetes-deployment-guide

https://learn.hashicorp.com/collections/consul/kubernetes-production

https://www.fyber.com/engineering/syncing-kubernetes-and-hashicorp-consul/

Reference Architecture:

* https://learn.hashicorp.com/tutorials/vault/reference-architecture


* https://play.instruqt.com/hashicorp/tracks/adp-vault

* https://play.instruqt.com/hashicorp/tracks/hashicups-sample (by ex-employee Lance Larsen) brings up an enviornment of all servers, with no instructional content.


<hr />

## Terraform Custom providers

STAR: https://learn.hashicorp.com/tutorials/terraform/provider-use contains documentation on Terraform Custom Providers

   <ul>It downloads https://github.com/hashicorp/learn-terraform-hashicups-provider
   </ul>

"You cannot understand how Terraform works skimming a tutorial. You must (manually) follow along." -- <a target="_blank" href="https://www.youtube.com/watch?v=OoSAepwT0l4" title="by Robert Ross">VIDEO: "How to Build a Usable Terraform Provider in 20 hours"</a>

<img alt="Terraform Plugin flow" width="1024" height="182" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1656419668/terraform-plugin-1024x182_ubyl24.png">
* https://www.peerislands.io/building-a-custom-terraform-provider-evolution-and-future-of-iaac/
* https://www.youtube.com/watch?v=noxwUVet5RE "Creating a Terraform Provider for Just About Anything"

* https://learn.hashicorp.com/collections/terraform/providers describes how to interact with APIs using Terraform providers, based on<br />https://github.com/hashicorp/terraform-provider-hashicups at<br />https://registry.terraform.io/providers/hashicorp/hashicups/latest and docs at<br />https://registry.terraform.io/providers/hashicorp/hashicups/latest/docs

* https://www.katacoda.com/hashicorp/scenarios/terraform-custom-provider-workshop

* https://learn.hashicorp.com/tutorials/terraform/provider-setup within a private cloud.

* https://blog.devgenius.io/custom-terraform-provider-design-c39287c816e9

* "Zero Trust Security & Data Protection" course slides online at
https://hashicorp.github.io/field-workshops-vault/slides/multi-cloud/adp/#1

