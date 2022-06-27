---
layout: post
date: "2022-06-27"
file: "prodsys"
title: "prodsys - production systems"
excerpt: "Here we maintain assets SREs (System Reliability Engineers) use  to fearlessesly and adroitly face production."
tags: [HashiCorp, Kubernetes, Security]
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

"The best and fastest way to learn a language is to live like a native".

> PROTIP: To really learn a system, troubleshoot a running production system, as an SRE.

Most who hold SREs today got their job out of accident. Being in the right place at the right time.

We think that's a wreckless and stupid way to equip people for one of the most important jobs in a company.

We think that great SREs are built, not born.

We think what's needed is people collaborating to advance a baseline with variations.


{% include whatever.html %}


<a name="JobDescriptions"></a>

## SRE Job Descriptions (CV)

Typical job descriptions request people with a number of years of experience.

But we think a flawed metric.

Going from newbie to Junior to Senior to Master.


<a name="Summary"></a>

## Your Journey to SRE Maturity

The vitality and security of your production system at work reflects your diligence at learning these stages:

1. Master basic skills: Touch Typing, MacOS/Linux commands, Shell scripting, Git and GitHub, GitHub Markdown, CI/CD (GitHub Actions?), Docker, Terraform, Ansible, Helm, Kubernetes, self control (to make time).

1. Customize the <strong>plan templates</strong> here about how to introduce and sustain the entire implementation lifecycle.

1. Study the <strong>baseline configuration assets</strong> (Terraform, Policies, GitHub Actions scripts, etc.) by reading and viewing videos.

1. Use automation to stand up <strong>baseline production instances</strong>, using the assets and steps described here. (A production system includes observability, dashboards, alerts.)

1. Trace events during baseline <strong>functional and security tests</strong> to ensure that systems continuous adhere to all <strong>policies</strong>. 

1. Analyze results compared with baseline from <strong>scalability commands and runs</strong> simulating traffic (starting with a small rig) for Observability history and Chaos Engineering.

1. <strong>Ensure compatibility</strong> when making modifications among  various new releases coming out all the time. 

1. Conduct *experiments* <strong>adding components, variations</strong>  and Chaos Engineering. Break something and see how quickly you can fix them (as measured by MTTR/RTO/RPO, etc.). We have *contests*.

1. Create *tutorials* for others. Mentor others.



## Demo Apps

https://learn.hashicorp.com/tutorials/consul/kubernetes-deployment-guide

https://learn.hashicorp.com/collections/consul/kubernetes-production

HashiCorp's HashiCups demo app.

https://github.com/hashicorp/consul-k8s-prometheus-grafana-hashicups-demoapp
from Sep 2020 (by <a target="_blank" href="https://www.linkedin.com/in/derek-strickland-59258a/">Derek Strickland</a>)
contains application and dashboard definitions for the <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/kubernetes-layer7-observability">Consul Layer 7 observability with Kubernetes guide located at learn.hashicorp.com</a>

It uses HashiCup, one of the standard HashiCorp demo apps.
It leverages micro-services and Consul Service Mesh to connect them all together.

https://github.com/hashicorp/terraform-provider-hashicups

https://github.com/hashicorp/learn-terraform-hashicups-provider

https://github.com/hashicorp/learn-consul-k8s-hashicups

https://github.com/hashicorp/field-demo-hashicups-sample

https://learn.hashicorp.com/tutorials/terraform/provider-setup


# END