---
layout: post
title: "Google Cloud Build"
excerpt: "Build for Kubernetes within GCP"
tags: [Security, DevOps]
date: "2020-04-01"
file: "google-cloud-build"
image:
# google-cloud-build-1900x500
  feature: https://user-images.githubusercontent.com/300046/78452432-791eb580-7648-11ea-9749-7e274d1fdd96.jpg
  credit: Google
  creditlink: https://cloud.google.com/cloud-build/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here are my (incomplete) notes on the service introduced in 2018.

{% include whatever.html %}

1. https://cloud.google.com/cloud-build/

   PROTIP: Don't click "Try it now" takes you to login and

   https://console.cloud.google.com/getting-started

   That page is about all Google services.

1. Click "Documentation"

   https://cloud.google.com/cloud-build/docs

   ## Licensing

   Google’s underlying technology is based on its open source project, Tekton, which it has donated to the Continuous Delivery Foundation (CDF).



1. Building containers

   https://cloud.google.com/solutions/best-practices-for-building-containers?_ga=2.150600176.-79111431.1585931000


   ## Firebase support

   Google announced Cloud Build at its Google Next conference July 2018.

   <a target="_blank" href="https://techcrunch.com/2018/07/24/google-announces-cloud-build-its-new-continuous-integration-continuous-delivery-platform/">Techcrunch</a> says:

   Cloud Build works across a variety of environments including VMs, serverless, Kubernetes, or Firebase. 

   What’s more it supports Docker containers and it gives developers or operations the flexibility to build, test and deploy in an increasingly automated fashion.

   Google will allow you to use triggers to deploy, so that when certain conditions are met, the update will launch automatically. You can identify vulnerabilities in your packages before you deploy and you can build locally and deploy in the cloud if you so choose.


   ## Pricing
   
   Since Google Cloud Build is relatively new in comparison with the other public cloud CI offerings, Google is now offering a generous amount of free minutes and a low pay-as-you-go pricing: up to 120 build minutes per day at no cost. Additional build minutes is billed at $0.0034 per minute. 

   https://console.cloud.google.com/marketplace/details/google/cloudbuild.googleapis.com?returnUrl=%2Fcloud-build%2Fbuilds%3F_ga%3D2.170725161.844775320.1585931000-79111431.1585931000%26project%3Dxenon-momentum-826%26folder%3D%26organizationId%3D&project=xenon-momentum-826&folder&organizationId

1. Click "Enable"

   ## Console

1. Select a Project.
1. Click "Settings".
1. Enable service accounts.

   ## Install client CLI

   gcloud 

   https://cloud.google.com/sdk/gcloud/reference

   ## Secrets

   Cloud KMS KeyRing and CryptoKey

   https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-secrets-credentials?hl=en_US

   ## Define Builds

   https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.builds

   ## Create Build Triggers

   https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.triggers

   ## GitHub

1. There is a connector in GitHub Marketplace:

   https://github.com/marketplace/google-cloud-build


Builds place Docker images into the Google Container Registry, which then natively integrates with Kubernetes. 

Google needs to make it easier to pass artifacts from one step to the next to create more tightly integrated build pipelines.
Google's CI system executes each build step in a separate container. 

Google needs to improve the granularity of build triggers.
