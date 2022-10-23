---
layout: post
date: "2022-10-22"
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

HashiCorp's Boundary is revolutionizing how we connect remotely into servers.

There is a rush to Boundary due to the need to install <strong>Zero-Trust Networking</strong>,
especially within the US federal government in repsonse to the White House Executive Order.

Want to connect to a server (such as PostgreSQL, MySQL, etc.) within AWS, Azure, or other cloud?

Boundary is called "Software-Defined Perimeter (SDP)" software because it provide secure access to
<strong>targets</strong> (apps, machines, and endpoints) to users outside a private network.

## No paying for Bastion Host Jump Box

The now "traditional" (<em>passe</em> security-wise) is to go through a Linux <strong>SSH bastion host</strong>, with a command such as:

   <ul><pre>ssh -L</pre>
   </ul>

With Bastion hosts, you are essentially paying for an additonal server for hackers to access.

SSH takes some work to setup securely - users would need to mess with another set of secrets to a <strong>specific IP address</strong>.

To a Bastion host, all users are not differentiated because the host provides "all or nothing" access.
That's why Boundary manages the "identity" of each user.

## VPN tunnels

VPNs improves on Bastion hosts in that VPNs controls access by each user's IP address.
VPNs are difficult to install by each user.
And they're expensive, introduce bandwidth limits, and don't scale well.
Multiple VPNs are difficult to setup, and even more costly.

Again, that's why Boundary manages the "identity" of each user.


{% include whatever.html %}

HashiCorp's Boundary is an intelligent proxy.

## Identity-based

HashiCorp's Boundary eliminates the hassle of messing with another set of credentials to access a server
because it authenticates & authorizes via OIDC protocol with a 3rd-party IdP such as Okta, GitHub, Auth0, AWS, Azure, GCP, etc. 

With Boundary, a user works with the <strong>identity name</strong> of a server rather than its IP address and port number.

That's because Boundary maintains a Dynamic Host Catalog of hosts and targets.

   * HashiCorp Boundary is available for enterprise use with support on SaaS cloud from HashiCorp.

   * Support from HashiCorp is not currently available for those who install the free Open-Source edition.

Boundary provides a Just-In-Time network access.

   * A user may be allowed access to a server for only, say, 5-minute session the same day.
   <br /><br />

Boundary automates service discovery as workloads are created or changed dynamically.


## SaaS Boundary on HCP

Boundary was first announced by HashiCorp October 2020.

Boundary on HCP (SaaS service managed by HashiCorp) went (free) beta preview July 2022.

Boundary automates and standardizes the workflow for on-boarding and off-boarding hosts and targets.

It provides one-click deployment.


<hr />

## Install executable

1. Use browser to

   <a target="_blank" href="https://boundaryproject.io">https://boundaryproject.io</a>

   Notice that HashiCorp supports a wide range of modern and legacy oerating systems:<br />
   macOS, Windows, Linux, FreeBSD, NetBSD, OpenBSD, Solaris

   PROTIP: The Boundary executable contains functionality to be used as a client, worker, server, in Dev mode

   Boundary consists of two server components: Controllers, which serve the API and coordinate session requests; and Workers, which perform the actual session handling. A normal Boundary installation will consist of one or more Controllers paired with one or more Workers. A single Boundary binary can act in either of these two modes.

   HashiCorp has created both a Desktop and CLI executables.

1. On macOS, HashiCorp doesn't provide a "brew install boundary", so:

   <pre><strong>brew upgrade
   brew tap hashicorp/tap
   brew install hashicorp/tap/boundary
   </strong></pre>

   The installer recognizes whether you have a M1/M2 ARM or an Intel machine.

1. Install autocompletion:

   <pre><strong>boundary config autocomplete install</strong></pre>

   There is no response to that unless an error occured.

2. In a Terminal, run boundary without parameters for a menu:
  
   <pre><strong>boundary version</strong></pre>

   <pre>Version information:
  Git Revision:        1d42091e81ca11353376ce116275890e3ae67f6b
  Version Number:      0.11.0
   </pre>

   The Git Revision is the SHA for the git commit creating a release at:
   https://github.com/hashicorp/boundary/releases

1. In a Terminal, run boundary without parameters for a menu:
  
   <pre>Usage: boundary <command> [args]
&nbsp;
Commands:
    accounts                  Manage Boundary accounts
    auth-methods              Manage Boundary auth methods
    auth-tokens               Manage Boundary auth tokens
    authenticate              Authenticate the Boundary command-line client
    config                    Manage resources related to Boundary's local configuration
    connect                   Connect to a target through a Boundary worker
    credential-libraries      Manage Boundary credential librarys
    credential-stores         Manage Boundary credential stores
    credentials               Manage Boundary credentials
    database                  Manage Boundary's database
    dev                       Start a Boundary dev environment
    groups                    Manage Boundary groups
    host-catalogs             Manage Boundary host catalogs
    host-sets                 Manage Boundary host sets
    hosts                     Manage Boundary hosts
    logout                    Delete the current token within Boundary and forget it locally
    managed-groups            Manage Boundary managed groups
    roles                     Manage Boundary roles
    scopes                    Manage Boundary scopes
    server                    Start a Boundary server
    sessions                  Manage Boundary sessions
    targets                   Manage Boundary targets
    users                     Manage Boundary users
    workers                   Manage Boundary workers
   </pre>


## Start Boundary in dev mode

   <pre><strong>boundary dev</strong></pre>

   ### Postgres database required

   If a Postgres database is not available, you'll see an error like this:

   <pre>Error creating dev database container: unable to start dev database with dialect postgres: could not start resource: : dial unix /var/run/docker.sock: connect: connection refused
   </pre>

<hr />

## Boundary.app UI

1. For quicker invocation of "boundary", set an alias to use "bdy" instead

   <pre>alias bdy="boundary"</pre>

1. To install the Desktop client, click the .dmg (64-bit) on macOS.

   Drag the <strong>Boundary.app</strong> icon and drop on the app folder at:

   <pre>/Applications/Boundary.app</pre>

1. If you access it often, drag the icon and drop it among others.

1. Invoke the app by double-clicking or 
  
1. Type the URI to the Boundary server:

   <img alt="HashiCorp Boundary.app GUI Landing" width="800" height="494" src="https://i.pinimg.com/originals/c1/db/9f/c1db9f7193fa92b06d1790e1b73652a4.jpg">



## Cloud

1. To install Boundary on different platforms on a single cloud region, navigate to a folder to hold.
2. Clone so that only the master branch is downloaded (because there are many other branches):

   <pre><strong>git clone git@github.com:hashicorp/boundary.git --depth 1
   cd boundary</strong></pre>

   


   https://github.com/hashicorp/boundary-reference-architecture/tree/main/deployment

   There is automation for aws, azure, docker (compose), docker_cts, gcp (Google Cloud Platform), Kubernetes. Most examples use Terraform for provisioning and configuring Boundary.

   <pre><strong>boundary auth-methods list
   </strong></pre>

<hr />

## Boundary granular access

connect to cloud 

## Use with Okta IdP

## Use with AWS

## Use with Azure

## Use with GCP

<hr />




## Human-to-machine Access via Boundary

Hands-on interactive lab environment, HashiCorp Learn: https://learn.hashicorp.com/   


## Machine Auth & Auth using Vault

## Machine-to-machine Access using Consul

Which app can talk with each service?


<hr />

## Videos

* <a target="_blank" href="https://www.youtube.com/watch?v=tUMe7EsXYBQ">Introduction to HashiCorp Boundary with Armon Dadgar</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=1THcoXyIJwc">HashiCorp Boundary: Then & Now</a> Jul 7, 2022

* <a target="_blank" href="https://app.pluralsight.com/library/courses/hashicorp-boundary-first-look/table-of-contents">On Pluralsight: "HashiCorp Boundary: First Look" 21 Sep 2021
by Chris Green when Boundary was at version 0.5.1.

