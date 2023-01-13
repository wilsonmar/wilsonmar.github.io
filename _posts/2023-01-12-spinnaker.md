---
layout: post
date: "2023-01-07"
file: "spinnaker"
title: "Spinnaker"
excerpt: "Open-source CI/CD with full features, running in Kubernetes"
tags: [apple, API, setup, cloud]
image:
# apple-black-pins-1900x500.png
  feature: https://i.pinimg.com/originals/03/73/a3/0373a3d465688b2570b2903191b307db.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

{% include whatever.html %}

Spinnaker is in the business of "Application Management Tooling".

## Summary

Spinnaker is a multi-cloud continuous delivery platform for releasing software changes at high velocity and confidence. It is part of the delivery pipeline, taking care of deployment to production on all cloud providers. It can be integrated with other CI/CD tools (GitHub Actions, Jenkins, CircleCI, TravisCI, TeamCity, Bitbucket Pipelines, etc.).

Historically, it was thought that deploying more often meant more risk for potential problems. 
Nowadays, most agree that deploying small changes means less risk than big mistakes because small changes are more quickly identified and resolved.

Spinnaker was initially developed within Netflix (the streaming service) and <a target="_blank" href="http://googlecloudplatform.blogspot.com/2015/11/Netflixs-Spinnaker-available-now-on-Google-Cloud-Platform.html">extended by Google</a>. On <a target="_blank" href="https://netflixtechblog.com/global-continuous-delivery-with-spinnaker-2a6896c23ba7">November 16, 2015 it was open sourced</a> under Apache License 2.0 as a Linux Foundation project, and owned by the CD Foundation, which executes the product roadmap and strategic initiatives.

   * https://github.com/spinnaker
   * https://stackoverflow.com/search?q=spinnaker
   * https://github.com/GoogleCloudPlatform/spinnaker-for-gcp/blob/master/README.md
   * https://aws.amazon.com/blogs/opensource/spinnaker-on-aws/  12 JUL 2018
   <br /><br />


## OSS Edition Benefits

Spinnaker provides:
   * Creation and modification of pipelines using their virtual no-code interface
   * Role-based Access Control (for better security) and other security mechanisms
   * Pipeline-as-code to enforce fine-grained policies
   * Monitoring and Notifications on email, Slack, SMS, Hipchat
   * Multi-cloud deployment in multiple clouds (and private cloud OpenShift)
   * Safe deployment with veriications, blue/green, canary, rolling update, rollbacks
   * Integrates with HashiCorp Vault to store and manage secrets
   <br /><br />


## Policy Engine

A key benefit for using Spinnaker is, instead of manual control review boards -- which is the real blocker of being able to deliver continuously -- use Open Policy Engine software that automatically checks every run.

https://www.armory.io/blog/policy-driven-deployments/

https://resources.armory.io/webinars/high-yield-policy-driven-software-delivery-for-financial-services-2

## Enterprise Edition from Armory.io

Armory.io (HQ San Mateo, California) creates a paid edition of Spinnaker for enterprise scale:

   * <a target="_blank" href="https://www.youtube.com/channel/UCcxQbw8kT1-FRhFhO2QCetg">YouTube channel</a>
   * https://www.linkedin.com/company/armory.io/ 
   * https://www.instagram.com/armory.io/?hl=en
   * Join armory.io's Spinnaker community on Slack: http://join.spinnaker.io/ [doesn't work]
   * <a target="_blank" href="https://www.youtube.com/watch?v=54QgIjAzPW0&list=PL4yLrwUObNktsYHFzJA9W3uF4PgRE6fPD">Spinnaker Training Series</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=nFokgHak-Wc">Discussing Terraform and Spinnaker</a> on Amory's YouTube channel.
   <br /><br />

https://resources.armory.io/whitepapers/whitepaper-armory-financial-services

https://www.armory.io/blog/policy-deployment-and-self-governance-with-spinnaker/

https://www.armory.io/armory-enterprise-spinnaker/policy-engine/

https://www.youtube.com/watch?v=VpWruxtQcA8
Policy Engine Demo

https://docs.armory.io/continuous-deployment/spinnaker-user-guides/video-tutorials/

https://www.armory.io/?p=9022&preview=1&_ppp=4ddd6f83be


## Flow

<img alt="Spinnaker-flow-801x285.jpb" width="801" height="285" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1673547537/Spinnaker-flow-801x285_fj1zdg.jpg">

From https://www.slideshare.net/jeetendramandal1/what-is-spinnaker-spinnaker-tutorial Dec. 10, 2022
by jeetendra mandal, Senior Tech Lead at Opengov

Pipelines can be triggered by the completion of a Jenkins Job, manually, via a cron expression, or even via other pipelines.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1673583387/spinnaker-deck-1830x980_x5d4uu.jpg"><img alt="spinnaker-deck-1830x980.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1673583387/spinnaker-deck-1830x980_x5d4uu.jpg"></a>

Spinnaker facilitates the creation of pipelines that represent a delivery process that can begin with the creation of some deployable asset (such as an machine image, Jar file, or Docker image) and end with a deployment.<a target="_blank" href="https://netflixtechblog.com/global-continuous-delivery-with-spinnaker-2a6896c23ba7">*</a>



## Web Services Architecture

To avoid being locked into a particular cloud vendor, Spinnaker consists of an abstraction layer on top of various cloud providers so the system can be switched more easily.
Alternately, deploying to multiple providers at the same time provides extra redundancy.

<img alt="Spinnaker-arch-796x662.jpg" width="796" height="662" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1673547537/Spinnaker-arch-796x662_awwg7l.jpg">

The <strong>Halyard</strong> CLI is used for setup and administration.

Spinnaker is built on top of (Java) Spring Boot.
So Cluster Management is a collection of JVM-based services, fronted by a customizable AngularJS single-page application. The UI leverages a RESTful API exposed via a gateway service.

Spinnaker is made up of 11 microservices working together within Kubernetes:

1. "Deck" is the front-end service providing a UI.
2. "Gate" is the API gateway fronting all services.
3. "Orca" performs ad hoc operations.
4. Redis provides data persistence.
5. "Cloud Driver" makes calls to cloud providers and caching deployed resources.
6. "Front50" persiststhe metadata about apps, pipelines, projects, notifications, etc.
7. "Rosco" bakes images to be deployed, using HashiCorp Packer.
8. "Igor" connects continous integration platforms such as Jenkins.
9. "Echo" is the event bus sending notifications and receiving incoming webhook calls
10. "Fiat" handles authorizations and queries for user permissions.
11. "Kayenta" automates canary analysis
<br /><br />

From OpsMx, which specialzes in Spinnaker services:
   * https://www.youtube.com/watch?v=h6m22hVe47U by Nirmalya Sen at OpsMx
   * https://www.opsmx.com/blog/spinnaker-basics-in-5-minutes/
   * https://www.opsmx.com/tutorials/
   <br /><br />

## Install

https://registry.terraform.io/modules/Young-ook/spinnaker/aws/latest/examples/spinnaker-managed-eks

https://registry.terraform.io/modules/Young-ook/spinnaker/aws/latest/submodules/spinnaker-managed-eks

https://github.com/Young-ook/terraform-aws-spinnaker/tree/main/modules/spinnaker-managed-eks
by <a target="_blank" href="https://youngookkim.tistory.com/">youngookkim</a> in South Korea  
https://www.linkedin.com/in/young-ook-kim-213906a9/

## Load Balancing

The load balancer works off a port range as ingress, and distributes work among server groups.

A Server Group is a collection of running instances of the application.

## Pipelines

Each pipeline consists of several stages, each performing actions:
Bake, Deploy, Judgement, Disable, Resize, etc.

Parameters are passed from stage to stage.

## References:

Spinnaker.io:
   * https://spinnaker.io/docs/guides/tutorials/codelabs/hello-deployment/
   * https://spinnaker.io/docs/guides/tutorials/
   <br /><br />

<hr />

## Install

https://programmaticponderings.com/tag/spinnaker/


## Resources

https://www.baeldung.com/ops/spinnaker August 6, 2021

https://medium.com/velotio-perspectives/know-everything-about-spinnaker-how-to-deploy-using-kubernetes-engine-57090881c78f

https://www.containiq.com/post/using-kubernetes-with-spinnaker

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-cd-pipeline-with-spinnaker-on-digitalocean-kubernetes

https://earthly.dev/blog/spinnaker-kubernetes/

https://www.linkedin.com/learning/kubernetes-continuous-delivery-with-spinnaker/create-a-parallel-action

https://www.linkedin.com/learning/kubernetes-continuous-delivery-with-spinnaker/deploying-a-simple-spinnaker

https://www.udemy.com/course/continuous-deployments-using-spinnaker-on-aws-and-kubernetes/
covers AWS, Jenkins, Kubernetes $14.99 - 24.99 by Edward Viaene & 
Jorn Jambers

https://www.cloudskillsboost.google/focuses/552?parent=catalog

https://www.youtube.com/watch?v=mEgvOfmLnlY
Emily Burns and Rob Fletcher "Managed Delivery: Bringing Infrastructure..." - Spinnaker Summit Dec 3, 2019

