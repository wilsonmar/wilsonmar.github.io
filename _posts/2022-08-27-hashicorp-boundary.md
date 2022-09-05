---
layout: post
date: "2022-08-27"
file: "hashicorp-boundary"
title: "HashiCorp Boundary"
excerpt: "Granular control of least-privilege just-in-time access to dynamically created servers by authorized humans, using HashiCorp's proxy to SSH, based on Zero-Trust principles"
tags: [HashiCorp, Network]
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## SSH much?

Want to connect to a server (such as PostgreSQL, MySQL, etc.) within AWS, Azure, or other cloud?

The now "traditional" (<em>passe</em> security-wise) is to go through a Linux <strong>SSH bastion host</strong>,
which is difficult to setup securely. And users would need to mess with another set of secrets to a specific IP address.

{% include whatever.html %}

HashiCorp's Boundary is an intelligent proxy.

HashiCorp's Boundary eliminates the hassle of messing with another set of credentials to access a server
because it authenticates & authorizes via a 3rd-party IdP such as Okta, GitHub, Auth0, AWS, Azure, GCP, etc.

With Boundary, a user works with the <strong>identity name</strong> of a server rather than its IP address and port number.
That's because Boundary maintains a Dynamic Host Catalog of hosts and targets.

A user may be allowed access to a server for only, say, 5-minute session the same day.

Boundary provides a Just-In-Time network access.

automates service discovery as workloads are created or changed dynamically.


## SaaS Boundary on HCP

Boundary on HCP (SaaS service managed by HashiCorp) went (free) beta preview July 2022.

Boundary automates and standardizes the workflow for on-boarding and off-boarding hosts and targets.

It provides one-click deployment.


## Boundary granular access

connect to cloud 

then to 


<a target="_blank" href="https://www.youtube.com/watch?v=tUMe7EsXYBQ">
Introduction to HashiCorp Boundary with Armon Dadgar</a>


## Human-to-machine Access via Boundary

Hands-on interactive lab environment, HashiCorp Learn: https://learn.hashicorp.com/   


## Machine Auth & Auth using Vault

## Machine-to-machine Access using Consul

Which app can talk with each service?


https://www.youtube.com/watch?v=1THcoXyIJwc
HashiCorp Boundary: Then & Now
417 viewsJul 7, 2022