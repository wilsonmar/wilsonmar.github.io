---
layout: post
date: "2022-04-13"
file: "hashicorp-waypoint"
title: "Hashicorp Waypoint"
excerpt: "Build, deploy, and release across platforms"
tags: [Hashicorp, Kubernetes]
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

Here are my notes about technical aspects of how cars can drive themselves.

## Why?

Among <a target="_blank" href="https://www.youtube.com/c/HashiCorp">Hashicorp's YouTube channel</a> is<br />
<a target="_blank" href="https://www.youtube.com/watch?v=JL0Qeq4A6So">this whiteboard overview</a> Oct 16, 2020 by HashiCorp Co-Founder and CTO, Armon Dadgar:

1. Waypoint was <a target="_blank" href="https://www.youtube.com/watch?v=nasVKN7Wbtk">introduced in 2020 at the HashiConf Digital Keynote</a>

1. <a target="_blank" href="https://waypointproject.io/">https://waypointproject.io</a> is the marketing home page for <strong>Waypoint</strong>.

   Waypoint provides a <strong>consistent and simple experience</strong> for developers of multi-cloud systems and applications for CI/CD:

   <ul>Write -> Test -> <strong>Build -> Deploy -> Release</strong> -> Operate -> Monitor</ul>

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="bottom"><th>Write</th><th>Test</th><th>Build</th><th>Deploy</th><th>Release</th><th>Operate</th><th>Monitor</th></tr>
   <tr valign="top"><td>VSCode<br />Vim<br />Emacs
      </td><td><tt>git commit</tt>, <tt>git push</tt> to GitHub, which triggers run in GitHub Actions or CircleCI
      </td><td>docker build, docker push Docker image into (JFrog Artifactory) binary Registry
      </td><td>Push a new Docker container out to a Kubernetes cluster
      </td><td>Blue/Green or canary deployments
      </td><td>Terraform Vault with Nomal Consul K8s, Openshift
      </td><td>Logs to Splunk, Prometheus, etc. Grafana telemetry for APM and Tracing
      </td></tr>
   </table>

1. Instead of directly integrating with GitOps and ChatOps frameworks, Waypoint users code declarative <strong>Waypoint manifest</strong> files.

1. Just as there is one command set of <tt>terraform</tt> commands used across different clouds, there is one CLI command used to invoke CI/CD:

   <pre><strong>waypoint up</strong></pre>

   Waypoint takes care of Nomad, K8s, Lambda, etc.

1. Demo videos:

   <a target="_blank" href="https://www.youtube.com/watch?v=azoQYaJsxGk">from HashiCorp</a>

1. <a target="_blank" href="https://www.youtube.com/watch?v=xiD3tg2iih8">Demo Tutorial With GitLab CI/CD and Kubernetes</a> by Sam Gabriel (TeKanAid) Nov 2, 2020 with <a target="_blank" href="https://tekanaid.com/hashicorp-waypoint-will-it-replace-your-ci-cd/">companion blog</a> shows deploy of a Python Flask weblog app referencing MongoDB running within GKE with a Vault agent sidecar to inject secrets:

   * Manual - No CI/CD tools (git commit/push, docker build/push, kubectl apply)
   * With Waypoint - No CI/CD tools
   * <a target="_blank" href="https://www.youtube.com/watch?v=PGyhBwLyK2U">GitLab CI/CD</a> - No Waypoint
   * GitLab CI/CD - with Waypoint
   <br /><br />

1. <a target="_blank" href="https://www.youtube.com/watch?v=0Q0VE5oPL8Y">HashiCorp Waypoint Deep-Dive</a>

1. hands-on interactive lab environment, HashiCorp Learn: 

   <a target="_blank" href="https://learn.hashicorp.com/">https://learn.hashicorp.com</a>


## Waypoint commands

1. Log

   waypoint logs

1. A shell for various commands, such as schema migration:

   waypoint exec


## About Hashicorp

HashiCorp is the leader in multi-cloud infrastructure automation software. The HashiCorp software suite enables organizations to adopt consistent workflows to provision, secure, connect, and run any infrastructure for any application. 



HashiCorp open source tools Vagrant, Packer, Terraform, Vault, Consul, Nomad, Boundary, and Waypoint are downloaded tens of millions of times each year and are broadly adopted by the Global 2000. Enterprise versions of these products enhance the open source tools with features that promote collaboration, operations, governance, and multi-data center functionality. 
 
### Social 
Twitter: @hashicorp 
LinkedIn: https://www.linkedin.com/company/hash...
Facebook: https://www.facebook.com/HashiCorp

## Competition

ArgoCD