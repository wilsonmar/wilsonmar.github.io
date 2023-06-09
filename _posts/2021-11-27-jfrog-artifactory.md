---
layout: post
date: "2023-06-09"
file: "jfrog-artifactory"
title: "JFrog Artifactory"
excerpt: "All about installing and using an in-house registry of installers, libraries, and container images for Kubernetes with SBOM"
tags: [devsecops, devops]
image:
# python-samples-1900x500.jpg
  feature: https://user-images.githubusercontent.com/300046/145717691-60b8c765-e0a3-4d63-bf7f-0cb89492c0ee.png
  credit: An Athlete Wrestling with a Python (1877) by Sir Frederic Leighton (1830-1896) at the Tate, London
  creditlink: https://www.wikiwand.com/en/An_Athlete_Wrestling_with_a_Python
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article is a technical deep-dive into the Artifactory server/service from JFrog.

{% include whatever.html %}


## Why this?

Many call the Artifactory product "JFrog" even though the JFrog company also offers its XRay CI/CD product, Pipeline, and Project. That's because Artifactory was the JFrog company's first and still most popular offering.

JFrog was formed in Israel as "the Liquid Software Company".


## Artifactory

"Artifactory" is a contraction of "artifact" and "factory".

> Artifactory provides an in-house registry of <strong>binary</strong> files: installers, libraries, and <a href="#Images">container images for Kubernetes</a>.

https://jfrog.com/solution-sheet/jfrog-artifactory/
calls Artifactory "Universal Artifact Management" -- for its ability to store and publish over 30 types of binary assets.

## Receive and Hold

Artifactory's main job is to receive and hold binaries (executables) created by compilers such as Java, C# .NET, etc.

Files are typically added into Artifactory by an automated CI/CD utility such as Jenkins, GitHub Actions, or JFrog's own Pipeline product.

PROTIP: Although Artifactory can also store binary graphics and video files, it's best that media files be processed by specialized services such as Cloudinary.

Developers can access artifacts within Artifactory faster than a remote public registry such as <a target="_blank" href="https://www.youtube.com/watch?v=014ZXoJnDys&list=RDCMUCh2hNg76zo3d1qQqTWIQxDg&index=20">DockerHub</a>, Quay.io, Maven, etc.

But more importantly, Artifactory <strong>insulates a company from disruptions at accessing public registries</strong> -- from troubles with the network to files being deleted from the public registry.

Thus, some user companies install utilities to divert requests to public registries into the company's own Artifactory instance to provide a "seamless" (albeit forced) developer experience.

Artifactory enforces more robust RBAC access controls with its own configurable policies & authentication integrations -- to control who accesses each file and how they interact with them.

Artifactory reads the contents of each file. It <a target="_blank" href="https://www.youtube.com/watch?v=aGbh3DThUeA&list=RDCMUCh2hNg76zo3d1qQqTWIQxDg&index=24">identifies secrets stored in them</a>.

Artifactory generates a Checksum when it stores each file, for verifying immutability and traceability. Checksums also make for more robust searchability.

JFrog XRay generates a <a href="#SBOM">SBOM (Software Bill of Materials)</a> for Software Composition Analysis (SCA).

References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=bKp1Vif9oO4&t=14s">VIDEO</a>: Artifact Management With JFrog Artifactory [1]
   * <a target="_blank" href="https://www.youtube.com/watch?v=a1B1jXXVzPQ">VIDEO</a>: Intellipaat's tutorial
   * <a target="_blank" href="https://www.youtube.com/watch?v=w8bdepGIsCk&list=RDCMUCh2hNg76zo3d1qQqTWIQxDg&index=6">Intro to package management</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=vWXIPzAHdfM&list=RDCMUCh2hNg76zo3d1qQqTWIQxDg&index=8">Advanced Security</a>

[1>3:55]


https://jfrog.com/start-free/

Artifactory is available as both a Service and as an on-prem. install.

<a name="Install"></a>

## Install on-prem. with Terraform

The <a target="_blank" href="https://registry.terraform.io/providers/jfrog/project/latest/docs">Terraform provider for JFrog Artifactory</a> first became <a target="_blank" href="https://sdtimes.com/devops/jfrog-extends-support-for-terraform/">available May 2023</a>.
<a target="_blank" href="https://jfrog.com/screencast/using-the-artifactory-terraform-provider/">VIDEO</a>

It started with <a target="_blank" href="https://www.youtube.com/watch?v=mPU5tS89d4o">VIDEO:</a> the JFrog dev team adopting Terrform.

https://registry.terraform.io/providers/jfrog/artifactory/latest

> I created automation which creates an Artifactory instance on AWS, Azure, and Google. The install includes production-grade features such as sample least-privilege RBAC, logs to a SIEM, etc. Scans are performed on the Terraform and other code to ensure that vulnerabilities are identified (and fixed) before resources are even created.


<a name="AddFiles"></a>

## Add Files

TODO: Instructions to developers on how to configure their CI/CD pipeline code to save binaries to Artifactory instead of DockerHub, etc.

<a name="GetImages"></a>

## Get Container Images

TODO: Instructions to developers on how to configure Kubernetes (Helm files) to retrieve container images from Artifactory.


<a name="SBOM"></a>

## Obtain SBOM

Artifactory XRay generates a SBOM (Software Bill of Materials) referenced by imports (and requirements.txt) in Python program code to identify vulnerabilities identified. JFrog references the public CVE database maintained by the US government as well as its own research.

Artifactory also analyzes LICENSE files within GitHub to identify license compliance violations. Some companies don't want to use libraries licensed using Apache v2.


<hr />

## More about DevOps

This is one of a series about Python:

{% include python_links.html %}
