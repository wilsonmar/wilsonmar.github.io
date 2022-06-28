---
layout: post
date: "2022-06-27"
file: "prodsys"
title: "prodsys - production systems"
excerpt: "Here we maintain assets SREs (System Reliability Engineers) use  to fearlessesly and adroitly face production."
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

"The best and fastest way to learn a language is to live like a native".

> PROTIP: To really learn a system, troubleshoot a running production system, as an SRE (System Reliability Engineer).

The job title "SRE" has existed only a few years. It's evovlved from "System Administrator".

Most who hold SREs today got their job out of accident. Being in the right place at the right time.
Few 10-year-olds have ever stated that they want to grow up to be an SRE like they say they want to be an astronaut.

We think that's a wreckless and stupid way to equip people for one of the <strong>most important jobs in a company</strong>.
SREs keep safe and alive websites and other systems critical to the operation of nearly every organization today.

> We think that great SREs are built, not born.

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

1. Master basic skills: self control (to make time), Touch Typing/vim, VSCode, MacOS/Linux commands (sed, awk, jq, jsonette, etc.), Shell & Python scripting, Git and GitHub, Git and GitHub Markdown, CI/CD (GitHub Actions?), Docker, Terraform, Ansible, Helm, Kubernetes. Then there's effective collaboration applying etiquette and tricks to using email, Slack, SMS, Zoom/Teams, etc.

1. Customize the <strong>adoption plan templates</strong> here about how to introduce and sustain the entire implementation lifecycle.

1. Study the <strong>baseline configuration assets</strong> (Terraform, Policies, GitHub Actions scripts, etc.) by reading and viewing videos.

1. Use automation to stand up <strong>baseline production instances</strong>, using the assets and steps described here. (A production system includes observability, dashboards, alerts.)

1. Trace events during baseline <strong>functional and security tests</strong> to ensure that systems continuous adhere to all <strong>policies</strong>. 

1. Analyze results compared with baseline from <strong>scalability commands and runs</strong> simulating traffic (starting with a small rig) for Observability history and Chaos Engineering.

1. <strong>Ensure compatibility</strong> when making modifications among  various new releases coming out all the time. 

1. Conduct *experiments* <strong>adding components, variations</strong>  and Chaos Engineering. Break something and see how quickly you can fix them (as measured by MTTR/RTO/RPO, etc.). We have *contests*.

1. Create *tutorials* for others. Mentor others.



## HashiCorp HashiCups demo rig

<a target="_blank" href="https://github.com/hashicorp/consul-k8s-prometheus-grafana-hashicups-demoapp">https://github.com/hashicorp/consul-k8s-prometheus-grafana-hashicups-demoapp</a>
from Sep 2020 (by <a target="_blank" href="https://www.linkedin.com/in/derek-strickland-59258a/">Derek Strickland</a>)
contains application and dashboard definitions for the <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/kubernetes-layer7-observability">Consul Layer 7 observability with Kubernetes guide located at learn.hashicorp.com</a>

It leverages micro-services and Consul Service Mesh to connect them all together.

It uses HashiCups, one of the standard HashiCorp demo apps.

Code to create the Hashicups app is from https://github.com/hashicorp-demoapp :

   * https://github.com/hashicorp-demoapp/frontend
   * https://github.com/hashicorp-demoapp/payments
   * https://github.com/hashicorp-demoapp/postgres
   <br /><br />

   Also the infrastructure:

   * https://hub.docker.com/repository/docker/hashicorpdemoapp/traffic-simulation
   * https://github.com/hashicorp-demoapp/traffic-simulation by 
nicholas jackson
   <br /><br />

https://github.com/hashicorp/learn-consul-k8s-hashicups

https://github.com/hashicorp/field-demo-hashicups-sample

https://learn.hashicorp.com/tutorials/terraform/provider-setup

https://learn.hashicorp.com/tutorials/consul/kubernetes-deployment-guide

https://learn.hashicorp.com/collections/consul/kubernetes-production

https://github.com/hashicorp/terraform-provider-hashicups

https://github.com/hashicorp/learn-terraform-hashicups-provider


# END