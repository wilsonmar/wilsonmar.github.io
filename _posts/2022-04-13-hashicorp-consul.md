---
layout: post
date: "2022-12-04"
file: "hashicorp-consul"
title: "HashiCorp Consul"
excerpt: "Enterprise-grade secure Zero-Trust routing to replace East-West load-balancing using service names rather than static IP addresses. Enhance Service Mesh with mTLS and health-based APIs in AWS, Azure, GCP, and other clouds running Kubernetes as well as ECS, EKS, VMs, databases, even mainframes outside Kubernetes"
tags: [HashiCorp, Kubernetes]
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

> Consul is "a multi-cloud service networking platform to connect and secure any service across any runtime platform and public or private cloud".<a target="_blank" href="https://www.youtube.com/watch?v=Aq1uTozNajI" title="HashiConf Oct 15 2019">*</a><a target="_blank" href="https://www.hashicorp.com/resources/consul-service-mesh-deep-dive">*</a>

{% include whatever.html %}

This is not a replacement for you going through professionally developed trainings.

This takes a <strong>deep dive</strong> bottom-up hands-on appraoch to usage in production.
So automation (shell scripts) are used to minimize you typing and clicking (which is not repeatable and error-prone).
But rather than throwing a bunch of buzzwords for you to memorize, commentary  <strong>logically sequenced</strong> to introduce concepts in the context of what you just typed.
All without sales generalizations. All in this one single big page for easy search. 


## Most Popular Websites about Consul

The most popular websites about Consul:

1. The marketing home page for HashiCorp's Consul:<br />
   https://www.consul.io/

1. Wikipedia entry:<br />
   https://www.wikiwand.com/en/Consul_(software)

   "Consul was initially released in 2014 as a service discovery platform. In addition to service discovery, it now provides a full-featured service mesh for secure service segmentation across any cloud or runtime environment, and distributed key-value storage for application configuration.
   Registered services and nodes can be queried using a DNS interface or an HTTP interface.[1] Envoy proxy provides security, observability, and resilience for all application traffic."

1. Live classes on HashiCorp's Enterprise Academy:<br />
   https://events.hashicorp.com/hashicorp-enterprise-academy

1. Source code:<br />
   https://github.com/hashicorp/consul

   Initiated in 2014, this repo has garnered nearly 25,000 stars, with over a million downloads monthly.
   It's 1.5K bytes after <tt>git clone ... -depth 1</tt> (just the latest main branch contents)

1. Detailed technical documentation:<br />
   https://www.consul.io/docs

1. Tutorials from HashiCorp:<br />
   https://learn.hashicorp.com/consul
   
   https://learn.hashicorp.com/tutorials/consul/service-mesh

1. Hands-on tutorials:<br />
   https://play.instruqt.com/hashicorp?query=Consul

1. Specifications:<br />
   https://cloud.hashicorp.com/docs/consul/specifications

1. Technical Discussions:<br />
   <a target="_blank" href="https://discuss.hashicorp.com/c/consul/29">https://discuss.hashicorp.com/c/consul/29</a>

1. Stackoverflow has highly technical questions & answers:<br />
   https://stackoverflow.com/search?q=%23hashicorp-consul

1. Reddit:<br />
   https://www.reddit.com/search/?q=hashicorp%20consul

1. Licensed Support from HashiCorp is conducted using those authorized to access HashiCorp's ZenDesk system:<br />
   https://hashicorp.zendesk.com/agent/dashboard

<hr />

## Why Consul? 

There are several compelling uses for HashiCorp Consul.

> Fundamentally, Consul secures networking between <a href="#Microservices">microservices</a> based on "Zero Trust" principles.

Consul <a href="#K8s_partial">overcomes several deficiencies in Kubernetes</a>.

The most compelling use of Consul is for those who have installed a <strong>Service Mesh</strong>.
Adding Consul as an additional sidecar to Envoy provides the enterprise a
<strong>multi-DC, hybrid-cloud, multi-cloud global mesh</strong>.

> Consul';'s "Secure Service Networking" provides Enterprise-scale features and support needed by complex Global 2000 - multi-cloud, hybrid-cloud, multi-platform <strong>global mesh</strong>

   * <a target="_blank" href="https://www.hashicorp.com/events/webinars/how-comcast-runs-consul-service-mesh-on-amazon-ecs">VIDEO: "How Comcast runs Consul on AWS Elastic Container Service"</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=0H06VKvlTJQ">Getting into Consul, Part 1</a>

<hr />

<a name="Benefits"></a>

Generic benefits from adoption of Consul and just about anything else:

* Faster Time to Market and velocity of getting things done from less manual mistakes
* Reduce cost via tools (operational efficiency through more visibility and automation)
* Reduce cost via people from improved availability (uptime)
* Reduce risk of downtime from better reliability
* Reduce risk of breach from better guardrails (using Sentinel & OPA)
* Compliance with regulatory demands (central source of truth, immutable, automated processes)
<br /><br />

<a name="UseCases"></a>

Technical words that describe what Consul can do (listed at https://www.consul.io/):

   * Consul on Kubernetes
   * Control access with Consul API Gateway
   * Discover Services with Consul
   * Enforce Zero Trust Networking with Consul
   * Load Balancing with Consul
   * Manage Traffic with Consul
   * Multi-Platform Service Mesh with Consul
   * Network Infrastructure Automation with Consul
   * Observability with Consul
   <br /><br />

<hr />

<a name="Microservices"></a>

## Due to Microservices

   * <a target="_blank" href="https://www.youtube.com/watch?v=b8TDodu5E0k">"The Evolution of Microservices"</a>
   <br /><br />

Consul provides a "backbone" for a microservice architecture.

In hopes of building more reliable systems in the cloud faster and cheaper, enterprises create distributed <strong>microservices</strong> instead of monolithic architectures (which are more difficult to evolve).

> "Microservices is the most popular architectural approach today. It's extremely effective. It's the approach used by many of the most successful companies in the world, particularly the big web companies." --<a target="_blank" href="https://www.youtube.com/watch?v=zzMLg3Ys5vI" title="Oct 28, 2020">Dave Farley</a>

Microservices is based on development of separate programs providing services. Each program can move and scale independently of other programs, existing in an <strong>ephemeral</strong> (temporary) way. Because dev teams won't have the same "hard-coded" dependencies in monolithic approaches, there is less need to wait for teams to finish work at the same time. This increases agility and greater operational efficiency.


## 4 pillars and 6 principles of modern app design

   * <a target="_blank" href="https://www.youtube.com/watch?v=gf43TcWjBrE">VIDEO: "12 Factor Apps and the HashiCorp stack"</a> 
   <br /><br />

<a target="_blank" href="https://www.arabianbusiness.com/opinion/4-pillars-6-principles-modern-apps">from</a> Libby Meren, Senior Manager for OSS Evangelism, NGINX at F5.

Here are nuances of attributes of ‘modern apps’ crucial to respond to the intense pressure of spinning up additional compute infrastructure quickly to meet unexpected demand:
four pillars: scalability, portability, resiliency, and agility.

* Pillar 1: Scalability

   Fast scaling - increase an application’s capacity by 100% within five minutes. 
   Can the application expand quickly capacity to meet unforeseen increases in demand?

   Long scaling - increase an application’s capacity 10x over a year or more, without requiring a major refactoring of code or large shifts in infrastructure requirements. 
   Does the app have a clean design with loose dependencies and loose couplings to infrastructure components.

* Pillar 2: Portability

   Functional portability - app code runs inside a container without external dependencies tightly coupled to a single environment. 
   Can core functional elements, code, and logic of an application remain the same regardless of the environment in which it is running?
   
   Management portability - Can the app be monitored, secured, and observed in the same way, with the same tooling and same sets of reporting capabilities, regardless of the environment?

* Pillar 3: Resiliency

   User‑facing resiliency - Do application users, either machine or human, notice a performance issue or functionality problem caused by a fault or failure of either a modern app itself or any service or infrastructure it depends on? Or do failures cascade, impacting even automated services and highly dependent microservices?

   Failover resiliency - A modern app is able to restore within five minutes any critical service to 100 percent of what is necessary to handle average workloads. Designers should think about failing over to unaffected compute resources as a key part of application design and one that is implicit in self‑healing, and environmentally aware.

* Pillar 4: Agility

   Code agility - Is the app's code designed to constantly absorb new code? To enforce loose coupling and reduce intra‑application code dependencies and rigidity, applications are composed of microservices and linked via APIs.
   
   Infrastructure agility - Can the app's infrastructure be spun up or down to satisfy the needs of all customers including application development teams, security teams, and DevOps teams?

The six principles of modern apps most modern apps employ architectures following these <a target="_blank" href="https://www.ibm.com/blogs/cloud-computing/2018/06/20/modern-app-microservices/">six principles</a>:

   1. Be platform agnostic - Build applications to run without any consideration of the platforms or environments where it is likely to run containers have become the <em>de-facto</em> standard for platform‑agnostic runtimes.
   
   2. Prioritize open source software - So that developers can "look under the hood of the code" in order to design for portability and scalability.
   
   3. Define everything (possible) by code - To move at faster-than-human speed to make changes and approvals.
   
   4. Design with automated CI/CD as a native/default state - for complete and quick code pushes, infrastructure deployment, and security requirements.
   
   5. Practice secure development - "shift left" to test all code as early as possible in the development process using software composition analysis (SCA), static application security testing (SAST), dynamic code analysis (DCA), and formatting checkers.
   
   6. Widely distribute storage and infrastructure. Replicating storage and compute across multiple zones or clouds or hybrid deployments can ensure greater resiliency and scalability.


<a name="LegacyMismatches"></a>

## Legacy networking infrastructure mismatches

However, each new paradigm comes with new problems. 

Implementation of microservices within legacy infrastructure and "fortress with a moat" mindset (rather than <a href="#ZeroTrust">"Zero Trust"</a> and other security principles) creates these concerns:

   <a name="MismatchA"></a>
   A. When traffic is routed based on static IP addresses, traffic is <strong>sent blindly without identity authentication</strong> (a violation of <a href="#ZeroTrust">"Zero Trust" mandates</a>).

   <a name="MismatchB"></a>
   B. Traffic routing mechanisms (such as IPTables) were designed to manage external traffic, not traffic <strong>internally between services</strong>.

   <a name="MismatchC"></a>
   C. Mechanisms intended to secure external traffic (such as IPTables) are usually owned and managed for the whole enterprise by the Networking department. So when their mechanism is drafted for use to secure internal traffic, app services developers need to spend time <strong>requesting permissions</strong> for accessing IP addresses. And Network departments now spend too much time connecting internal static IP addresses for internal communications among services when many don't consider it part of their job.

   <a name="MismatchD"></a>
   D. Due to lack of authentication (using IP Addresses), current routing does not have <strong>mechanisms for fine-grained permission policies</strong> that limit what operation (such as Read, Write, Update, Delete, etc.) is allowed. That implements "Least Privilege" principles.

   <a name="MismatchE"></a>
   E. Also due to lack of authentication, current routing does not have the metadata to <strong>segment traffic</strong> in order to split a percentage of traffic to different targets for various types of testing.

   <ul>
      DEFINITION: "Micro segmentation" is the logical division of the internal network into distinct security segments at the service/API level. Its use enables granular access control to, and visiblity of, discrete service interface points. [<a target="_blank" href="https://dodcio.defense.gov/Portals/0/Documents/Library/CNAP_RefDesign_v1.0.pdf" title="PDF: US Department of Defense (DoD) Cloud Native Access Point (CNAP) Reference Design (RD)">Reference</a>]
      <br /><br />
      The segmentation that "East-West" (internal) Load Balancers with advanced "ISO Level 7" capability (such as F5) can perform is more limited that what Consul can do with its more granualar metadata about each service. 
      <br /><br />   
      Not only that, Load Balancers are <strong>a single point of failure</strong>. So an alternative is needed which has been architected for (lower cost) resilience and high availability to failures in individual nodes, Availability Zones, and whole Regions.
   </ul>

   <a name="MismatchF"></a>
   F. To mitigate the network features lacking, many developers now feel they spend too much time <strong>coding network-related communication logic</strong> into each application program (for retries, tracing, secure TLS, etc.). When different developers use different techniques for that, errors occur which are difficult to track down.


<a name="K8s_partial"></a>

### Kubernetes a partial solution

   <a target="_blank" href="https://wilsonmar.github.com/kubernetes">Kubernetes (largely from Google)</a> has been popular as "orchestrator" to replace instances of pods (holding Containers) when any of them go offline.

   However, core Kubernetes defaults currently has these deficiencies:

   <a name="MismatchG"></a>
   G. Kubernetes does <strong>not check if a service is healthy</strong> before trying to communicate with it. This leads to the need for coding of applications to perform time-outs, which is a distraction and usually not a skill by most business application coders.

   <a name="MismatchH"></a>
   H. Kubernetes does <strong>not encrypt communications</strong> between services.

   <a name="MismatchI"></a>
   I. Kubernetes does not provide a way to communicate with components and cloud <strong>services outside Kubernetes</strong> such as databases, ECS, other EKS clusters, Serverless, Observability platforms, etc. Thus, Kubernetes by default does not by itself enable deep transaction tracing.

   <a name="MismatchJ"></a>
   J. Kubernetes is currently not mature when it comes to automatically adding more pods (to scale up) or removing pods (to scale down).
   
   References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=2Hnz9prnZis">VIDEO: 
   Fun With Consul: Build A Service Killswitch</a>
   <br /><br />

<hr />

<a name="SolveLegacy"></a>

## Legacy mismatches solved by Consul Editions

Consul provides a mechanism for connecting dynamic microservices with legacy networking infrastructure. 

The list below send you to how each edition of Consul solves the mismatches described above.

   * <a href="#EnterpriseFeatures">Paid Enterprise</a> for self-installed/managed on-prem or in private clouds
   * <a href="#HCP">SaaS in the HCP (HashiCorp Platform) in the HashiCorp-managed cloud</a>
   <br /><br />

A common explanation of what Consul does references three technical categories:

> "Consul is a datacenter runtime that provides 1) service discovery, 2) network segmentation, and 3) orchestration."

This is explained here.


<hr />

<a name="ConsulConcepts"></a>

#### Consul Concepts in UI Menu

<a name="UIMenu"></a>

PROTIP: Here are Agile-style stories requesting use of HashiCorp Consul (written by me): 

The Consul Enterprise edition menu can serve as a list of concepts about Consul:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1653578025/consul-ent-menu-275x585_jjwfqn.png"><img alt="Consul Enterprise menu at v1.1.5" align="right" width="275" height="585" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1653578025/consul-ent-menu-275x585_jjwfqn.png"></a>
"dc1" is the name of a Consul "<strong>datacenter</strong>" -- a cluster of Consul servers within a single region. 

Multiple "Admin Partitions" and "Namespaces" are Consul Enterprise features.

Consul manages applications made available as <strong>Services</strong> on the network. 

<strong>Nodes</strong> are Consul servers which manage network traffic. They can be installed separately from application infrastructure.

   <a name="UnMismatchA"></a>
1. Rather than <a href="#MismatchA">A. blindly routing traffic based on IP addresses, which have no basis for authentication</a> (a violation of <a href="#ZeroTrust">"Zero Trust" mandates</a>), 
<strong>Consul routes traffic based on named entities</strong> (such as "C can talk to A" or "C cannot talk to A.").

   <a href="#AuthMethods">Consul Enterprise can authenticate using several <strong>Authentication Methods</strong></a>
   
   <a name="UnMismatchB"></a>
1. Rather than <a href="#MismatchB">B. routing based on IPTables designed to manage external traffic</a>, 
Consul routes from its list of "Intentions" which define which other entities each entity (name) can access.

   Consul does an <strong>authentication hand-shake</strong> with each service before sending it data. A rogue service cannot pretend to be another legitimate service unless it holds a legitimate encryption certificate assigned by Consul. And each certificate expires, which Consul works to rotate.

   <a name="UnMismatchD"></a>
1. Rather than <a href="#MismatchC">C. manually creating a ticket for manual action by Networking people connecting internal static IP addresses</a>, Consul <strong>discovers the network metadata (such as IP addresses)</strong> of each application service
when it comes online, based on the configuration defined for each service. This also means that Network people would spend less time for internal communications, freeing them up for analysis, debugging, and other tasks.

   <a name="Policies"></a>
   <a name="Roles"></a>
   <a name="KeyValue"></a>
   
   #### Roles and Policies

   <a name="UnMismatchD"></a>
1. Consul's <strong>Key/Value store</strong> holds a <strong>"service registry"</strong> containing <strong>ACL (Access Control List) policy entries</strong> which define what operations (such as Read, Write, Update, Delete, etc.) is allowed or denied for each <strong>role</strong> assigned to each named entity. This <a href="#MismatchD">adds fine-grained security functionality</a> needed for "Zero Trust".

   As Consul redirects traffic, it secures the traffic by generating certificates used to <strong>encrypt traffic</strong> on both ends of communication, taking care of automatic key rotation hassles, too. BTW This mechanism is called "mTLS" (mutual Transport Layer Security).

   <a name="UnMismatchE"></a>
1. Instead of <a href="#MismatchE">E. requiring a Load Balancer</a> or application coding to split a percentage of traffic to different targets for various types of testing, Consul can <strong>segment traffic based on attributes</strong> associated with each entity. This enables more sophisticated logic than what traditional Load Balancer offer.

   Consul can route based on various algorithms (like F5) "Round-robin", "Least-connections", etc.

   That means Consul can, in many cases, replace "East-West" load balancers, to remove load balancers (in front of each type of service) as a single-point-of-failure risk.

   <a name="UnMismatchF"></a>
1. With Consul, instead of <a href="#MismatchF">F. Developers spending too much time coding network communication logic</a> in each program (for retries, tracing, secure TLS, etc.), networking can be managed by Consul and made visible in the Consul GUI.

   Consul is "platform agnostic" because Consul is added as additional servers in parallel in the same infrastructure, changes usually involve configuration rather than app code changes. Thus, Consul can connect/integrate services running both on-prem servers and in clouds, inside and outside Kubernetes.

   <a name="UnMismatchG"></a>
1. Within the system, obtain the <strong>health status of each app server</strong> so that <strong>traffic is routed only to healthy app services</strong>, so provide a more aware approach than <a href="#MismatchG">load balancers blindly routing</a> (by Round-Robin, etc.).


### Partial Kubernetes Remediation using Service Mesh

   References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=vh1YtWjfcyk&list=RDCMUC-AdvAxaagE9W2f0webyNUQ&index=2">VIDEO: "What is a Service Mesh?"</a>
   <br /><br />

   To overcome <a href="#MismatchG">G. Kubernetes not checking if a service is healthy before trying to communicate</a>, many are adding a "Service Mesh" to Kubernetes. Although several vendors offer the addition, "Service Mesh" generally means the installation of a network proxy agent (a "sidecar") installed within each pod alongside app containers.

   "Envoy" is currently the most popular Sidecar proxy. There are alternatives.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1656874272/consul-proxy-1743x685_pr1a7b.png"><img alt="Consul Service Mesh" width="1743" height="685" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1656874272/consul-proxy-1743x685_pr1a7b.png"></a>

   When app developers allow all communication in and out of their app through a Sidecar proxy, they <strong>can focus more on business logic</strong> rather than the intricacies of retries after network failure, traffic encryption, transaction tracing, etc.

   Due to <a href="#MismatchG">G. Kubernetes and Sidecars not encrypting communications between services</a>, Consul is becoming a popular add-on to Kubernetes Service Mesh because it can <strong>add mTLS (use of mutual TLS certificates used to encrypt transmissions</strong> on both server and clients) without coding in application code.

   Although <a href="#MismatchH">H. Kubernetes does not check if a service is healthy before trying to communicate</a>, Consul performs health checks and maintains the status of each service. Thus, <strong>Consul never routes traffic to known unhealthy pods</strong>. And so apps don't need to be coded with complex timeouts and retry logic.

   Although <a href="#MismatchI">I. Kubernetes does not provide a way to communicate with components and cloud services outside Kubernetes</a>, Consul can <strong>dynamically configure sidecars such as Envoy</strong> to dynamically route or duplicate traffic to "Observability" platforms such as Datadog, Prometheus, Splunk, New Relic, etc. who performs analytics they display on dashboards created using Grafana and other tools.

<hr />

<a name="EnterpriseFeatures"></a>

#### Paid Enterprise (Production) Features

Larger enterprises running in production need features for higher security, greater teamwork, and larger scalability that open-source can provide. Those additional features are provided by the <a target="_blank" href="https://www.consul.io/docs/enterprise">Enterprise edition of Consul</a> which is 
 self-installed and managed by customers. 

   * Namespaces
   * Enhanced read scalability
   * Network segments
   * Redundancy zone
   * Advanced federation for complex network topologies
   * Automated backups
   * Automated upgrades
   * Audit Logging
   * SSO Support
   * Multi-Tenancy with Admin Partitions
   <br /><br />

Below are more details.

<a name="Tokens"></a>

<a name="AuthMethods"></a>
<a name="EntFeatureA"></a>
A. <strong>Authenticate using a variety of methods</strong>. In addition to ACL Tokens, use enteprise-level identity providers (such as Okta and GitHub, Kuberos with Windows, etc.) for SSO (Single Sign On) based on indentity information maintained in email and other systems, so that additions, modifications, and deletions of emails get quickly reflected in Consul. Such immediacy is important to minimize the time when credentials are stale and thus available for compromise.

<a name="EntFeatureB"></a>
B. <strong>Automatic Upgrades</strong> ("Autopilot" feature) of a whole set of nodes at once -- this avoids the need for manual effort and elimination of times when different versions exist at the same time.

<a name="EntFeatureC"></a>
C. Enhanced <strong>Audit logging</strong> -- to better understand access and API usage patterns. A full set of <strong>audit logs</strong> makes Consul a fully enterprise-worthy utility.

<a name="EntFeatureD"></a>
D. <strong>Policy enforcement</strong> using <a target="_blank" href="https://www.consul.io/docs/agent/sentinel">Sentinel</a> extend the ACL system in Consul beyond the static "read", "write", and "deny" policies to support full conditional logic during writes to the KV store. Also integrates with external systems. For example:

   * when ACL processing is disabled, the SOC team is alerted.
   * When the consul agent is set to bind with all IP addresses on the open internet, a warning is issued.
   <br /><br />

<a name="EntFeatureE"></a>
E. Enable <strong>Multi-Tenancy of tenants</strong> enabled using "Admin Partitions" as "Namespaces" to segment data into separate different teams within a single Consul datacenter, a key "Zero Trust" principal to diminish the "blast radius" from potential compromise of credentials to a specific partition.

   * https://learn.hashicorp.com/tutorials/consul/amazon-ecs-admin-partitions
   * <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/amazon-ecs-admin-partitions">Consul on ECS & Admin Partitions Learn Guide</a>
   <br /><br />

<a name="EntFeatureF"></a>
F. Consul can take <strong>automatic action when its metadata changes</strong>,
such as notifying apps and firewalls, to <strong>keep security rules current</strong> (using <a href="#NIA_CTS">NIA CTS</a>).

   <ul>
   The "consul-terraform-sync" (CTS) module <strong>broadcast changes</strong> recognized which can be used to update Terraform code dynamically for automatic resources reconfiguration -- This decreases the possibility of human error in manually editing configuration files and decreases time to propagate configuration changes to networks. 
   </ul>

<a name="EntFeatureG"></a>
G. Better Resilency from <strong>scheduled Backups</strong> of Consul state to snapshot files -- this makes backups happen without needing to remember to take manual effort.

<a name="EntFeatureH"></a>
H. Consul is designed for additional Consul servers to be added to a Consul Cluster to achieve enterprise-scale scalability. The performance scaling mechanism involves adding <strong>"Redundancy Zones"</strong> which only read metadata (as "non-voting" nodes).

   * Large enterprises have up to 4,000 microservices running at the same time.
   * "Performance begins to degrade after 7 voting nodes due to server-to-server Raft protocol traffic, which is expensive on the network."
   * <a href="#cgsb">Global Consul Scale Benchmark tests (below)</a> proved Consul's enterprise scalability.
   <br /><br />

<a name="EntFeatureI"></a>
I. <strong>Consul Service Mesh (also called Enterprise "Consul Connect")</strong> enables a Kubernetes cluster to securely <strong>communicate with services outside itself</strong>. Connect enables communication between a Sidecar proxy in Kubernetes to reach an API Gateway (which acts like a K8s Sidecar proxy) surrounding stand-alone databases, ECS, VMs, Severless, even across different clouds.

   <ul>
   As with HashiCorp's Terraform, because the format of infrastructure configuration across <strong>multiple clouds</strong> (AWS, Azure, GCP, etc.) are similar in Consul, the learning necessary for people to work on different clouds is reduced, which yields faster implementations in case of mergers and acquisitions which require multiple cloud platforms to be integrated quickly. <a target="_blank" href="https://www.youtube.com/watch?v=xWwXLKhWzNk" title="DevOps Lab | Workload authentication to HashiCorp ">VIDEO</a>
   </ul>

<a name="EntFeatureJ"></a>
J. Consul can be setup for <strong>Disaster Recovery (DR) from failure to an entire cloud Region</strong>. Consul has a mechanism called "<strong>WAN Federation</strong>" which distributes service metadata across regions to enable multi-region capability. Alternately, use

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1655690643/vault-multi-region-map-1298x728_yjgvcv.png"><img alt="Consul Multi-Region setup with 5 nodes each" width="1298" height="728" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1655690643/vault-multi-region-map-1298x728_yjgvcv.png"></a>

   <ul>
   Fail-over to a whole Region is typically setup to involve manual intervention by the SOC (Security Operations Center).
   <br /><br />
   Use of Consul Service Mesh with Health Checks enables <strong>automated failover</strong>.
   <br /><br />
   Multi-region redundancy using <strong>complex Network Topologies</strong> between Consul datacenters (with "pairwise federation") -- this provides the basis for disaster recovery in case an entire region disappears.
   </ul>

   References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=gRV4sAD0YrU">VIDEO: "Consul and Complex Networks"</a>
   * https://hashicorp-services.github.io/enablement-consul-slides/markdown/architecture/#1
   * Consul's <a target="_blank" href="https://www.consul.io/docs/internals/coordinates.html">network coordinate subsystem</a>
   <br /><br />


<hr />

<a name="SecurityFrameworks"></a>

## Security Frameworks

This section provides more context and detail about security features of Consul.

There are several frameworks which security professionals use to organize controls they install to prevent ransomware, data leaks, and other potential security catatrophes. Here are the most well-known:

   * <a href="#WAF">Well-Architected Framework</a>
   * <a href="#ZeroTrust">"Zero Trust" in CIA</a>
   * <a href="#KillChain">"Kill Chain"</a>
   * <a href="#Attack">ATT&CK Enterprise Framework</a>
   * <a href="#SOC2">SOC2/ISO 27000 attestations</a>
   <br /><br />

   PROTIP: Within the description of each framework, links are provided here to specific features which Consul provides (as <a href="#Mitigations">Security Mitigations</a>).

<a name="WAF"></a>

### Well-Architected Framework (WAF)

A "Well-Architected Framework" is referenced by all major cloud providers.
   * https://wa.aws.amazon.com/wat.pillar.security.en.html



<a name="ZeroTrust"></a>

Security professionals refer to the "CIA Triad" for security:

1. Confidentiality by limiting access
2. Integrity of data that is trustworthy 
3. Availability for reliable access
   <br /><br />

Zero-trust applies to those three:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1655279628/zero-trust-220613-1652x874_o01oyw.png"><img alt="Zero-Trust CIA Triad" width="1652" height="874" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1655279628/zero-trust-220613-1652x874_o01oyw.png"></a>

   * <strong>Identity-driven</strong> authentication (by requester name instead of by IP address)

   * <a href="#MutualTLS">Mutually authenticated</a> -- both server and client use a cryptographic certificate to 

   * <strong>Encrypt</strong> for transit and at rest (baked into app lifecycle via CI/CD automation)

   * Each request is <strong>time-bounded</strong> (instead of long-lived static secrets to be hacked)
   
   * Audited & Logged (for SOC to do forensics)
   <br /><br />

   References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=aE_on5mZQoQ&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk&index=21" titile="What are the 5 Marks of a Hybrid Cloud Operating Model? Jan 24, 2020">VIDEO</a>: "The six pillars of Zero Trust"
   * US NIST SP 800-207 defines "Zero Trust Architecture" (ZTA) at <a target="_blank" href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf">PDF: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf</a> (50 pages)
   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-zero-trust-networking-with-service-mesh">INSTRUQT Consul: Zero Trust Networking with Service Mesh"</a>
   <br /><br />


<a name="KillChain"></a>

The "Kill Chain" (<a target="_blank" href="https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html">created by Lockheed-Martin</a>) organizes security work into the 9 stages how malicious actors work.

<a name="Attack"></a>

Specific tools and techniques that adversaries use (on specific platforms) are organized within <a target="_blank" href="https://attack.mitre.org/docs/attack_matrix_poster_2021_june.pdf">PDF: 14 goals</a> in the <a target="_blank" href="https://attack.mitre.org/matrices/enterprise/">"ATT&CK" Enterprise Matrix</a> lifecycle from Mitre Corporation (a US defense think-tank) in 2013.

A comparison between the above:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> <a href="#KillChain">Kill Chain</a> </th><th> <a href="#Attack">Mitre ATT&CK</a> </th><th> <a href="#Mitigations">Mitigations</a> </th></tr>
<tr valign="top"><td> 1. Reconnaissance (harvesting) </td><td>
   Reconnaissance,<br />
   Resource Development
   </td><td> Authentication
   </td></tr>
<tr valign="top"><td> 2. Weponization (exploit of backdoor into a deliverable payload) </td><td>
   Initial Access,<br />
   Execution
   </td><td> mTLS
   </td></tr>
<tr valign="top"><td> 3. Delivery (into victim)</td><td>
   Persistence,<br />
   Privilege Escalation
   </td><td> Audit logs & Alerts
   </td></tr>
<tr valign="top"><td> 4. Exploitation (of vulnerability) </td><td>
   Defense Evasion (Access Token Manipulation)
   </td><td> ACL
   </td></tr>
<tr valign="top"><td> 5. Installation (of malware)</td><td>
   Credential Access,<br />
   Discovery (System Network Connections Discovery),<br />
   Lateral Movement (Exploitation of Remote Services, Remote Service Session Hijacking ),<br />
   Collection (Man-in-the-Middle)
   </td><td> Authorization
   </td></tr>
<tr valign="top"><td> 6. Command and Control (remote manipulation) </td><td>
   Command and Control (Application Layer Protocol, Web Service, Dynamic Resolution)
   </td><td> Segmentation
   </td></tr>
<tr valign="top"><td> 7. Actions on Objectives</td><td>
   Exfiltration,<br />
   Impact
   </td><td> DLP (Data Loss Prevention)
   </td></tr>
</table>


<a name="Mitigations"></a>

## Mitigation Actions


<a name="COM"></a>
   
### Part of a Cloud Operating Model suite

Consul is part of the HashiCorp "Cloud Operating Model" product line which provides modern mechanisms for better security and efficiency in access and communication processes:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652140723/hashi-oss-prods-3130x1306_rso9yn.png"><img alt="hashi-oss-prods-3130x1306" width="3130" height="1306" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652140723/hashi-oss-prods-3130x1306_rso9yn.png"></a>

These products are collectively referred to as "HashiStack".
   * <a target="_blank" href="https://www.youtube.com/watch?v=gf43TcWjBrE">VIDEO: "12-Factor Apps and the HashiStack"</a>
   <br /><br />

Consul, Vault, and Boundary together provides the technologies and workflows to achieve <a target="_blank" href="https://wilsonmar.github.io/soc2">SOC2/ISO27000</a> and "Zero Trust" mandates in commercial enterprises and within the U.S. federal government and its suppliers.

   References:
   * <a target="_blank" href="https://www.youtube.com/watch ? v=XsOt2MAAm3g">VIDEO</a> Microservices with Terraform, Consul, and Vault
   <br /><br />


### Zero Trust Maturity Model

HashiCorp's HashiStack is used by many enterprises to transition from "Traditional" to "Optimal", as detailed by the <a target="_blank" href="https://www.cisa.gov/sites/default/files/publications/CISA%20Zero%20Trust%20Maturity%20Model_Draft.pdf" title="(19 pages)">US CISA "Zero Trust Maturity Model"</a>:
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1656899266/zerotrust-maturity-22-06-1456x1326_x0xvl6.png"><img alt="Zero Trust Maturity" width="1456" height="1326" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1656899266/zerotrust-maturity-22-06-1456x1326_x0xvl6.png"></a>


Categories of "Defense in Depth" techniques listed in <a target="_blank" href="https://attack.mitre.org/docs/attack_roadmap_2020_october.pdf">PDF: Mitre's map of defense to data sources</a>:

* Password Policies
* Active Directory Configuration
* <strong>User Account Control</strong>
* Update Software
* <strong>Limit Access to Resources Over Network</strong>
* <strong>Audit (Logging)</strong>
* Operating System Configuration
* <strong>User Account Management</strong>
* <strong>Execution Prevention</strong>
* <strong>Privileged Account Management</strong>
* <strong>Disable or Remove Feature or Program
* Code Signing
* Exploit Protection
* <strong>Application Isolation and Sandboxing</strong>
* Antivirus/Antimalware
* <strong>Filter Network Traffic</strong>
* <strong>Network Segmentation</strong>
* User Training
* <strong>SSL/TLS Inspection</strong>
* Restrict Web-based Content
<br /><br />

Additionally:

   * To prevent Lateral Movement (Taint Shared Content): Immutable deployments (no live patching to "cattle")

   * IaC CI/CD Automation (processes have Security and Repeatability baked-in, less toil)

   * Change Management using source version control systems such as Git clients interacting with the GitHub cloud


<hr />

## BOOK: Consul: Up and Running

<a target="_blank" href="https://www.linkedin.com/in/lkysow/">Canadian</a> <a target="_blank" href="https://github.com/lkysow">Luke Kysow</a>, Principal Engineer on Consul at HashiCorp, top contributor to <a target="_blank" href="https://github.com/hashicorp/consul-k8s">hashicorp/consul-k8s</a>, wrote in his <a target="_blank" href="https://learning.oreilly.com/library/view/consul-up-and/9781098106133/" title="June 2022">BOOK: "Consul: Up and Running"</a>:

> "A small operations team can leverage Consul to impact security, reliability, observability, and application delivery across their entire stack —- all without requiring developers to modify their underlying microservices."

<a target="_blank" href="https://github.com/consul-up/examples">Code for the book</a> (which you need to copy and paste into your own GitHub repo) is organized according to the book's chapters:

1. Service Mesh 101
2. Introduction to Consul
3. <a target="_blank" href="https://learning.oreilly.com/library/view/consul-up-and/9781098106133/ch03.html">Deploying Consul within K8s</a> (in cloud or minikube for automatic port-forwarding) and <a target="_blank" href="https://learning.oreilly.com/library/view/consul-up-and/9781098106133/ch03.html#ch03-deploying-consul-on-vms">on VMs</a>
4. Adding Services to the Mesh
5. Ingress Gateways
6. Security
7. Observability
8. Reliability
9. Traffic Control
10. Advanced Use Cases
<br /><br />

<a target="_blank" href="https://github.com/consul-up/birdwatcher">birdwatcher app</a>

and <a target="_blank" href="https://discord.com/channels/938313456942190622/938313457638453250">Discord server</a> for the book)


> The above are used for showing Proof of Value (POV) from product/workflow adoption.

   * https://www.consul.io/docs/intro
   * https://learn.hashicorp.com/well-architected-framework
   <br /><br />

<hr />

<a target="_blank" href="https://www.youtube.com/playlist?list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK">YouTube: "Getting into HashiCorp Consul"</a>

<a target="_blank" href="https://www.youtube.com/watch?v=u6m_RxLR1fQ&list=PL81sUbsFNc5arDZYNn3i8N_I7ZeCe02ve&index=22">VIDEO: Consul Roadmap – HashiConf Global 2021</a>


<hr />

<a name="WaysToRun"></a>

## Ways to setup Consul with demo infra

> PROTIP: Become comfortable with the naming conventions used by the architecture, workflows, and automation by building several environments, in order of complexity:

By "use case" (Sales Plays):

<a href="ConsulConcepts">A. There is a public demo instance of Consul online</a> at:

   <a target="_blank" href="https://demo.consul.io/ui/dc1/overview/server-status">https://demo.consul.io/ui/dc1/overview/server-status</a>

<a href="#HCPDemo">B. On HashiCorp's Consul <strong>SaaS on the HCP (HashiCorp Cloud Platform)</strong></a>:

   - QUESTION: You can use Consul this way with just a Chromebook laptop???
   - Use this to learn about creating sample AWS services in a private VPC using Terraform, createing a HCP account, cloud <strong>peering</strong> connections across private networks to HVN, day-to-day workflows on <a target="_blank" href="https://cloud.hashicorp.com/products/consul">https://cloud.hashicorp.com/products/consul</a>
   - On AWS or <a target="_blank" href="https://www.hashicorp.com/blog/hcp-consul-on-azure">Azure</a> 

<a href="#LaptopWay">C. On a macOS laptop install to <strong>learn Consul</strong> Agent with two nodes</a> (to see recovery of loss from a single node):

   - Use automation to install the Consul agent along with other utilities needed
   - Use this to learn about basic CLI commands, starting/stopping the Agent, API calls, 
   GUI menus using a single server within a Docker image

<a href="#TheHardWay">D. Install the <strong>Reference Architecture</strong> (with Kubernetes and database) which can survive loss of a single node</a>

   - Follow a <a href="#MultiPart">multi-part video series on YouTube</a> to install and configure <strong>5 Consul nodes in 3 Availability Zones</strong> (AZs) within a single region, with app Gateways, Sidecar <strong>monitoring</strong>

<a href="#Enmeshed">E. In a single 6-node datacenter (with Nomad) to survive loss of an Availability Zone</a>

   - Use this to learn about <a href="#Backup">manual backup and recovery</a> using Snapshots and Enterprise Snapshot Agents, 
   - Conduct <a href="#ChaosEngineering">Chaos Engineering</a> recovering failure of one Availability Zone
   - Telemetry and Capacity proving to identify when to add additional Consul nodes

<a href="#MultiDatacenters">F. For multiple datacenters federated over WAN</a>

   - Use this to learn about configuring the <a href="#Autopilot">Enterprise Autopilot feature</a> for High Availability across multiple regions (which is a major differentiator of HashiCorp Consul), <a href="#ChaosEngineering">Chaos Engineering</a>.

<a href="#Integrations">G. Integrations between K8s Service Mesh to outside database, ECS, VMs, mainframes, etc.</a>

   - <a target="_blank" href="https://www.youtube.com/watch?v=C3N4i1cFIZ0&t=34s">Discovery to central service registry across several Kubernetes clusters</a>
   - Use this to learn about configuring for integrating HashiCorp Consul to work with a Payment processor, integrate with load balancers that isn't Consul-aware, and across the entire Enteprise landscape of technologies (another major differentiator of HashiCorp Consul)

Other demos:

* https://www.hashicorp.com/resources/getting-started-with-managed-service-mesh-on-aws First Beta Demo of HCP Consul Service Mesh on AWS.

<hr />

## Demo apps

PROTIP: Adapt the samples and naming conventions here to use your own app <strong>after</strong> achieving confidence you have the base templates working.

   * <a target="_blank" href="https://www.youtube.com/watch?v=gf43TcWjBrE" title="at HashiConf EU Jun 27, 2016">VIDEO: 12-Factor Apps and the HashiStack</a> by Kelsey Hightower (Google)

   https://medium.com/hashicorp-engineering/hashicorp-vault-performance-benchmark-13d0ea7b703f

   https://cloud.hashicorp.com/docs/hcp/supported-env/aws

   https://github.com/pglass/202205-consul-webinar-demo

<a name="HashicupsDemoApp"></a>

1. HashiCorp-provided demo apps included in the practice environments are defined at:

   <a target="_blank" href="https://github.com/hashicorp-demoapp/">
   https://github.com/hashicorp-demoapp/</a>

   <a target="_blank" href="https://github.com/hashicorp-demoapp/hashicups-setups">"Hashicups" from https://github.com/hashicorp-demoapp/hashicups-setups</a> comes with a <a target="_blank" href="https://github.com/hashicorp-demoapp/hashicups-client-go">Go library</a>.

1. Consider the HashiCups datacenter which uses both ECS and EKS within AWS:

   * Run front-end services task within a ECS (Elastic Container Service) cluster
   * Run back-end services task within a EKS (Elastic Kubernetes Service) cluster
   <br /><br />

   See <a target="_blank" href="https://www.youtube.com/watch?v=K2OJwo5wxEs" title="May 23, 2022">VIDEO "Securely Modernize Application Development with Consul on AWS ECS"</a> by Jairo Camacho (Marketing), Chris Thain, Paul Glass (Engineering)

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1653576225/consul-on-ecs-eks-826x520_k0zrxu.png"><img alt="Consul ECS and EKS with HashiCups" width="826" height="520" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1653576225/consul-on-ecs-eks-826x520_k0zrxu.png"></a>

1. Create the above environment by running Terraform ???

   https://github.com/pglass/202205-consul-webinar-demo

   https://github.com/hashicorp/terraform-aws-consul-ecs

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1653576506/consul-on-ecs-1541x726_lsctrk.png"><img alt="Consult ECS" width="1541" height="726" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1653576506/consul-on-ecs-1541x726_lsctrk.png"></a>

1. Use HCP Consul for Service Mesh (without Kubernetes) 

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1653577429/consul-hcp-ecs-1187x493_moppvo.png"><img alt="Consul HCP Service Mesh" width="1187" height="493" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1653577429/consul-hcp-ecs-1187x493_moppvo.png"></a>

   The Envoy proxy in Data Plane ???

   Control Plane to Consul servers within HCP ???

   Consul’s Layer 7 traffic management capabilities. ???


   <a name="ACL-Controller"></a>

   ### ACL Controller

   The ACL (Access Control List) Controller is provided by HashiCorp for install within AWS.

   To provide least-privilege access to Consul using Terraform and Vault:
   https://www.hashicorp.com/blog/managing-hashicorp-consul-access-control-lists-with-terraform-and-vault

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1653578783/consul-tf-vault-1162x809_lypmvs.png"><img alt="Consul TF Vault" width="1162" height="809" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1653578783/consul-tf-vault-1162x809_lypmvs.png"></a>


   <a name="Observability"></a>

   ### Observability

   REMEMBER: Enterprise editions of Consul is a different binary than OSS edition.

   Terraform adds Datadog for Observability. 

   https://www.pagerduty.com/docs/guides/consul-integration-guide/
   shows how to configure Consul-Alerts to trigger and resolve incidents in a PageDuty service. <a target="_blank" href="https://registry.terraform.io/providers/PagerDuty/pagerduty/latest">PagerDuty</a> is an alarm aggregation and dispatching service for system administrators and support teams. It collects alerts from monitoring tools, gives an overall view of all of monitoring alarms, and alerts an on-duty engineer if there’s a problem. The Terraform Pagerduty provider is a plugin for Terraform that allows for the management of PagerDuty resources using HCL (HashiCorp Configuration Language).

<hr />

## Certification exam

Because this document aims to present concepts in a logic flow for learning, it has a different order than topics for the Consul Associate one-hour proctored on-line $70 exam at: https://www.hashicorp.com/certification/consul-associate

1.	Explain Consul architecture<br />
   1a.	Identify the components of Consul datacenter, including agents and communication protocols<br />
   1b.	Prepare Consul for high availability and performance<br />
   1c.	Identify Consul's core functionality<br />
   1d.	<a href="#OneConsulAgent">Differentiate agent roles</a><br />

2.	Deploy a single datacenter<br />
   2a.	Start and manage the Consul process<br />
   2b.	Interpret a Consul agent configuration<br />
   2c.	Configure Consul network addresses and <a href="#Ports">ports</a><br />
   2d.	Describe and configure agent join and leave behaviors<br />
   
3.	<a href="#Services">Register services and use Service Discovery</a> [<a target="_blank" href="https://www.udemy.com/course/hashicorp-consul/learn/lecture/24400106#questions">BK</a>]<br />
   3a.	Interpret a service registration<br />
   3b.	Differentiate ways to register a single service<br />
   3c.	Interpret a <a href="#ServiceConfiguration">ServiceConfiguration">service configuration</a> with health check<br />
   3d.	Check the service catalog status from the output of the DNS/API interface or via the Consul UI<br />

   3e.	Interpret a prepared query<br />
   3f.	Use a prepared query<br />
   
4.	Access the Consul key/value (KV)<br />
   4a.	Understand the capabilities and limitations of the KV store<br />
   4b.	Interact with the KV store using both the Consul CLI and UI<br />
   4c.	Monitor KV changes using watch<br />
   4d.	Monitor KV changes using <a href="#envconsul">envconsul</a> and <a href="#consul-template">consul-template</a><br />
   
5.	<a href="#Snapshots">Back up and Restore</a> [<a target="_blank" href="https://www.udemy.com/course/hashicorp-consul/learn/lecture/24569032#questions">BK</a>]<br />
   5a.	<a href="#Snapshots">Describe the content of a snapshot</a>
   5b.	Back up and restore the datacenter<br />
   5c.	<a href="#SnapshotAgent">[Enterprise] Describe the benefits of snapshot agent features</a>
   
6.	<a href="#ServiceMesh">Use Consul Service Mesh</a><br />
   6a.	Understand <a href="#ConsulConnect">Consul Connect service mesh</a> high-level architecture<br />
   6b.	Describe configuration for registering a service proxy<br />
   6c.	Describe intentions for <a href="#ConsulConnect">Consul Connect service mesh</a><br />
   6d.	Check intentions in both the Consul CLI and UI<br />
   
7.	<a href="#MutualTLS">Secure agent communication</a><br />
   7a.	Understanding Consul security/threat model<br />
   7b.	Differentiate certificate types needed for TLS encryption<br />
   7c.	Understand the different TLS encryption settings for a fully secure datacenter<br />

8.	<a href="#ACL">Secure services with basic access control lists (ACL)</a><br />
   8a.	Set up and configure a basic ACL system<br />
   8b.	Create policies<br />
   8c.	Manage token lifecycle: multiple policies, token revoking, ACL roles, service identities<br />
   8d.	Perform a CLI request using a token<br />
   8e.	Perform an API request using a token<br />
   
9.	<a href="#Gossip">Use Gossip encryption</a><br />
   9a.	Understanding the Consul security/threat model<br />
   9b.	Configure gossip encryption for the existing data center<br />
   9c.	Manage the lifecycle of encryption keys<br />
<br />

<a target="_blank" href="https://www.linkedin.com/in/btkrausen/">Bryan Krausen</a> provides <a target="_blank" href="https://github.com/btkrausen/hashicorp#current-training-discounts-and-coupons">links to discount codes</a> to his <a target="_blank" href="https://www.udemy.com/course/hashicorp-consul/">Udemy, "Getting Started with HashiCorp Consul 2022"</a> 
has 8.5 hours of video recorded at Consul 1.7. It 
provides quizzes and a >mind-map of each topic and 
references https://github.com/btkrausen/hashicorp/tree/master/consul

Also from Bryan is <a target="_blank" href="https://www.udemy.com/course/consul-associate-practice-exam/">
"HashiCorp Certified: Consul Associate Practice Exam"</a> three full exams of 57 questions each.

<a target="_blank" href="https://community.kodekloud.com/t/about-the-hashicorp-certification-courses-category/138133">
KodeKloud Q&A for HashiCorp Certification Courses</a>

<hr />

<a name="HCPDemo"></a>

## B. On HashiCorp's Consul Cloud SaaS HCP (HashiCorp Cloud Platform)

   * <a target="_blank" href="https://learn.hashicorp.com/tutorials/cloud/consul-end-to-end-existing-eks?in=consul/cloud-deploy-automation">LEARN: "Create a HCP Consul cluster for an existing EKS run time"</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=jScI79u0vYc&list=PL81sUbsFNc5bQpQiONLrwSzP__l3EfoMX&index=4" title="Mar 15, 2022">VIDEO: "Community Office Hours: HCP Consul with Terraform"</a> with Daniele Carcasole (HC Ed.)
   <br /><br />

   Perhaps the fastest and easiest way to begin using Consul is to use the Hashcorp-Managed <a name="HCPCloud">HashiCorp Cloud Platform (<strong>HCP</strong>) Consul Cloud</a>. 
   It provides a convenient clickable <a href="#ConsulWebGUI">Web GUI</a> rather than the CLI/API of FOSS (free open-source software). 
   
   <a name="SkipEnterprise"></a>
   
   HCP provides a fully managed "Service Mesh as a Service (SMaaS)" Consul features not provided with the "self-managed" Enterprise edition. That means:

   * Monitoring to ensure disk space, CPU, memory, etc. is already staffed
   * Capacity testing to ensure configurations are made optimal by specialists
   * No risk of security vulnerabilities introduced by inexperienced personnel
   * Backups taken care of automatically
   * Restores performed when needed

   * Rest from on-going hassles of security patches and version upgrades
   * Enable limited in-house IT personnel to focus on business needs.
   * Faster time to value and time to market
   <br /><br />

   On the other hand, at of this writing, HCP does not have all the features of Consul Enterprise.

   References about HCP Consul:
   * https://github.com/hashicorp/learn-hcp-consul
   * https://github.com/hashicorp/learn-terraform-multicloud-kubernetes
   * <a target="_blank" href="https://www.youtube.com/watch?v=Qw6Re5rRC4E&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=11">Part 12: HCP Consul</a> [2:18:49] Mar 17, 2022

   * <a target="_blank" href="https://learn.hashicorp.com/collections/consul/cloud-get-started">HashiCorp's 7 tutorials on HCP Consul</a>:
   * https://www.hashicorp.com/products/consul/service-on-azure 
   * <a target="_blank" href="https://www.hashicorp.com/blog/consul-service-on-azure-production-tier">announced Sep 2020</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=YowP4xV2Jf0&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk&index=7" title="Oct 14, 2020">VIDEO:
   "Introduction to HashiCorp Cloud Platform (HCP): Goals and Components"</a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=UDbR-TVDUm8&list=PL81sUbsFNc5ZfswcAV3KS0WFQmAYULkbq&index=37" title="Apr 1, 2021 by  Anubhav Mishra @build1point0">VIDEO: "Service Mesh - Beyond the Hype"</a>
   * hashicorp/consul-snippets Private = Collection of Consul snippets. Configuration bits, scripts, configuration, small demos, etc.

   * https://github.com/hashicorp/field-workshops-consul = Slide decks and Instruqt code for Consul Workshops
   * https://github.com/hashicorp/demo-consul-101 = Tutorial code and binaries for the HashiCorp Consul beginner course.
   * https://github.com/hashicorp/learn-consul-docker = Docker Compose quick starts for Consul features.

   * https://github.com/hashicorp/terraform-aws-vault  A Terraform Module for how to run Consul on AWS using Terraform and Packer

   * https://github.com/hashicorp/hashicat-aws = A terraform built application for use in Hashicorp workshops

   * https://github.com/hashicorp/consul-template = Template rendering, notifier, and supervisor for @hashicorp Consul and Vault data.
   
   * https://github.com/hashicorp/consul-k8s = First-class support for Consul Service Mesh on Kubernetes, with binaries for download at https://releases.hashicorp.com/consul-k8s/

   * https://github.com/hashicorp/consul-replicate = Consul cross-DC KV replication daemon.

   * hashicorp/learn-consul-kubernetes
   * https://github.com/hashicorp/learn-consul-service-mesh

   * https://github.com/hashicorp/consul-demo-traffic-splitting = Example application using Docker Compose to demonstrate Consul Service Mesh Traffic Splitting

   * hashicorp/consul-esm = External service monitoring for Consul

   * https://github.com/hashicorp/terraform-aws-consul-starter = A Terraform module for creating an OSS Consul cluster as described by the HashiCorp reference architecture.

   <br /><br />

<a name="HCPDemoSteps"></a>

### The Automated Way

   1. <a href="#ObtainAWSAccount">Obtain an AWS account credentials</a> with adequate premissions
   1. <a href="#CreateAWSVPC">Create an AWS VPC and associated resources</a> to be managed by additional Consul infra
   1. Identify your <tt>lb_ingress_ips</tt> used in the load balancer security groups, needed to limit access to the demo app.
   1. <a href="#ConfigK8s">Configure kubectl</a>
   1. <a href="#HCP_Account">Create a HashiCorp Platform (HCP) cloud account and organization</a>
   1. <a href="#StoreSecrets">Store secrets in a safe way</a>
   1. <a href="#HVN">Create a HashiCorp Virtual Network (HVN)</a>
   1. <a href="#PeerHVN">Peer the AWS VPC with the HVN</a>
   1. <a href="#CreateConsulCluster">Create a HCP Consul cluster</a>
   1. <a href="#ConfigACL">Configure Consul ACL Controller</a>
   1. <a href="#RunConsulVPC">Run Consul clients within the provisioned AWS VPC</a>
   1. <a href="#RunDemoApp">Put load on the demo app within AWS</a>

   1. <a href="#DestroyConsul">Destroy Consul cluster</a> and app infra under test
   <br /><br />

   <a name="ObtainAWSAccount"></a>
   
#### Obtain AWS account credentials

1. Obtain AWS credentials (AWS_) and populate file <tt>~/.aws/configuration</tt> or environment variables. 

   <pre>export AWS_ACCESS_KEY_ID=<em>your AWS access key ID</em>
export AWS_SECRET_ACCESS_KEY=<em>your AWS secret access key</em>
export AWS_SESSION_TOKEN=<em>your AWS session token</em>
   </pre>

   Alternately, copy and paste credentials in the <tt>~/.aws/credentials</tt> file that every AWS CLI command references.

   BTW If you are a HashiCorp employee, they would be obtained for the "Doormat" website, which grants access to your laptop's IP address for a limited time.

   <a name="#CreateAWSVPC"></a>

   ### Create resources within AWS 
   
   There are several ways to setup infrastructure in a cloud datacenter managed by Consul.

   Instead of performing manual steps at https://learn.hashicorp.com/tutorials/cloud/consul-deploy, 
   <a target="_blank" href="https://learn.hashicorp.com/tutorials/cloud/consul-ecs-hcp">this</a> describes use of Terraform to create a non-prod HCP Consul environment to manage an ECS cluster, and various AWS services:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1654022287/consul-ecs-hcp-1280x720_j4p2le.png"><img alt="Consul ECS HCP" width="1280" height="'720" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1654022287/consul-ecs-hcp-1280x720_j4p2le.png"></a>

1. Navigate to where you download GitHub repo.

1. Do not specify <tt>--depth 1</tt> when cloning (because we will checkout a branch):

   <pre><strong>git clone git@github.com:hashicorp/learn-consul-terraform.git
   cd learn-consul-terraform
   </strong></pre>

1. Before switching to a branch, get a list of the branches:

   <pre><strong>git tag
   </strong></pre>

   <pre><strong>git checkout v0.5
   </strong></pre>

1. Navigate to the folder within the repo:

   <pre><strong>cd datacenter-deploy-ecs-hcp
   </strong></pre>

   TODO: Study the Terraform specifications:

   * variables.tf - Parameter definitions used to customize unique user environment attributes.
   * data.tf - Data sources that allow Terraform to use information defined outside of Terraform.
   * providers.tf - AWS and HCP provider definitions for Terraform.
   * outputs.tf - Unique values output after Terraform successfully completes a deployment.
   
   * ecs-clusters.tf - AWS ECS cluster deployment resources.
   * ecs-services.tf - AWS ECS service deployment resources.
   * load-balancer.tf - AWS Application Load Balancer (ALB) deployment resources.
   * logging.tf - AWS Cloudwatch logging configuration.
   * modules.tf - AWS ECS task application definitions.
   * secrets-manager.tf - AWS Secrets Manager configuration.
   * security-groups - AWS Security Group port management definitions.
   * vpc.tf - AWS Virtual Private Cloud (VPC) deployment resources.

   * network-peering.tf - HCP and AWS network communication configuration.
   * hvn.tf - HashiCorp Virtual Network (HVN) deployment resources.
   * hcp-consul.tf - HCP Consul cluster deployment resources.
   <br /><br />

   See https://learn.hashicorp.com/tutorials/consul/reference-architecture
   for Scaling considerations.

   https://learn.hashicorp.com/tutorials/consul/production-checklist?in=consul/production-deploy

1. Identify your IPv4 address (based on the Wi-Fi you're using):

   <pre><strong>curl ipinfo.io
   </strong></pre>

   <pre>{
  "ip": "129.222.5.194",
   </pre>

1. terraform.tfvars.example

1. Configure Terraform variables in a <tt>.auto.tfvars</tt> (or <tt>terraform.tfvars</tt>) file with, for example:

   <pre>lb_ingress_ips = "47.223.35.123"
region         = "us-east-1"
suffix         = "demo"
   </pre>

   region - the AWS region where resources will be deployed. PROTIP: Must be one of the regions HCP suppors for HCP Consul servers.

   lb_ingress_ips - Your IP. This is used in the load balancer security groups to ensure only you can access the demo application.

   <tt><strong>suffix</strong></tt> text value AWS appends to resource names its creates.
   This needs to be changed in each run because, by default, secrets created by AWS Secrets Manager require 30 days before they can be deleted. If this tutorial is destroyed and recreated, a name conflict error will occur for these secrets.

1. Run using <tt>terraform init</tt>

   <a target="_blank" href="https://www.youtube.com/watch?v=JuwSHZqlLj0&t=7s">VIDEO</a>: Try it:


1. In the folder containing main.tf, run terraform to inititate :

   <pre><strong>terraform init
   </strong></pre>

   Example response:

   <pre>Initializing modules...
Downloading registry.terraform.io/hashicorp/consul-ecs/aws 0.2.0 for acl_controller...
- acl_controller in .terraform/modules/acl_controller/modules/acl-controller
Downloading registry.terraform.io/hashicorp/consul-ecs/aws 0.2.0 for example_client_app...
- example_client_app in .terraform/modules/example_client_app/modules/mesh-task
Downloading registry.terraform.io/hashicorp/consul-ecs/aws 0.2.0 for example_server_app...
- example_server_app in .terraform/modules/example_server_app/modules/mesh-task
Downloading registry.terraform.io/terraform-aws-modules/vpc/aws 2.78.0 for vpc...
- vpc in .terraform/modules/vpc
&nbsp;
Initializing the backend...
&nbsp;
Initializing provider plugins...
- Finding hashicorp/hcp versions matching "~> 0.14.0"...
- Finding hashicorp/aws versions matching ">= 2.70.0, > 3.0.0"...
- Installing hashicorp/hcp v0.14.0...
- Installed hashicorp/hcp v0.14.0 (signed by HashiCorp)
- Installing hashicorp/aws v4.16.0...
- Installed hashicorp/aws v4.16.0 (signed by HashiCorp)
&nbsp;
Terraform has created a lock file .terraform.lock.hcl to record the provider
selections it made above. Include this file in your version control repository
so that Terraform can guarantee to make the same selections by default when
you run "terraform init" in the future.
&nbsp;
Terraform has been successfully initialized!
&nbsp;
You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.
&nbsp;
If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
   </pre>

1. In the folder containing main.tf, run terraform to design:

   <pre><strong>time terraform plan
   </strong></pre>

   After many minutes, sample response ends with:
   
   <pre>Apply complete! Resources: 64 added, 0 changed, 0 destroyed.
&nbsp;
Outputs:
&nbsp;
client_lb_address = "http://learn-hcp-example-client-app-1643813623.us-east-1.elb.amazonaws.com:9090/ui"
consul_ui_address = "https://dc1.consul.b17838e5-60d2-4e49-a43b-cef519b694a5.aws.hashicorp.cloud"
   </pre>

1. If Sentinel or TFSec was installed:

   <pre><strong>tfsec
   </strong></pre>

1. In the folder containing main.tf, run terraform to instantiate in AWS:

   <pre><strong>time terraform apply
   </strong></pre>

1. (optional) Configure kubectl

   <pre><strong>aws eks --region $(terraform output -raw region) update-kubeconfig --name $(terraform output -raw local.eks_cluster_name)
kubectl get pods -A
   \
1. To access the Consul UI in HCP, print the URL and bootstrap token to access the Consul UI. The bootstrap token can be used to login to Consul.

   <pre><strong>terraform output consul_public_endpoint_url
terraform output consul_bootstrap_token
   </strong></pre>

1. Access the demo application in ECS: print the URL for the demo application:

   <pre><strong>terraform output ecs_ingress_address
   </strong></pre>


<a name="NIA_CIS"></a>

### CTS for NIA 

HashiCorp's "Network Infrastructure Automation (NIA)" marketing page (<a target="_blank" href="https://www.consul.io/docs/nia">consul.io/docs/nia</a>) promises to scale better, decrease the possibility of human error when manually editing configuration files, and decrease overall time taken to push out configuration changes.

PROTIP: There are current no competitors in the market for this feature.

<a target="_blank" href="https://learn.hashicorp.com/collections/consul/network-infrastructure-automation?utm_source=WEBSITE&utm_medium=WEB_IO&utm_offer=ARTICLE_PAGE&utm_content=DOCS">LEARN: Network Infrastructure Automation with Consul-Terraform-Sync</a> hands-on, which uses the sample counting service at port 9003 and dashboard service in port 9002, from https://github.com/hashicorp/demo-consul-101/releases

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1655174636/consul-cts-flow-1010x660_qtfo80.png"><img alt="Consul NIA CTA" width="1010" height="660" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1655174636/consul-cts-flow-1010x660_qtfo80.png"></a>

1. Intro (using terraform, Consul "consul-terraform-sync" CLI) 17 MIN

2. Consul-Terraform-Sync Run Modes and Status Inspection task execution status using REST API. 9 MIN
3. CTS and Terraform Enterprise/Cloud integration. 14 MIN
4. Build a Custom CTS Module. 20 MIN
5. Secure Consul-Terraform-Sync for Production. 13 MIN
6. Partner Guide - Consul NIA, Terraform, and A10 ADC. 12 MIN
7. Partner Guide - Consul NIA, Terraform, and F5 BIG-IP. 12 MIN
8. Partner Guide - Consul NIA, CTS, and Palo Alto Networks. 12 MIN
   <br /><br />

References:
   - https://www.consul.io/docs/nia/configuration
   - https://www.consul.io/docs/nia/terraform-modules
   * <a target="_blank" href="https://www.youtube.com/watch?v=Ld40kobI2rs&list=PL81sUbsFNc5arDZYNn3i8N_I7ZeCe02ve&index=11" title="Nov 1, 2021">VIDEO</a> by Kim Ngo & Melissa Kam.
   * <a target="_blank" href="https://www.youtube.com/watch?v=YQMDRM2ujA4&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=12" title="[1:57:30] Jun 13, 2022">Part 13: Consul-Terraform-Sync</a> 
   <br /><br />

<img align="right" alt="CTS flow" width="165" height="365" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1655133023/consul-cts-165x365_tefhlu.png">

CTS (Consul-Terraform Sync) Agent is an executable binary ("consul-terraform-sync"
daemon separate from Consul) installed on a server. 

NOTE: HashiCorp also provides binaries for various back releases at<br />
https://releases.hashicorp.com/consul-terraform-sync/

Notice the "+ent" for enterprise editions.

   <ul><pre><strong>brew tap hashicorp/tap
brew install hashicorp/tap/consul-terraform-sync
consul-terraform-sync -h
   </strong></pre></ul>

When the daemon starts, it also starts up a Terraform CLI/API binary locally. 

See https://www.consul.io/docs/nia/configuration

CTS interacts with the Consul Service Catalog in a publisher-subscriber paradigm.

CTS has Consul acting as the central broker -- changes trigger Consul to subscribe to Terraform assets. CTS can respond to changes in Service Registry. CTS can also watch for changes in its KV (Key-Value) store.

When CTS recognizes relevant changes requiring action, it <strong>dynamically generates files</strong> that invoke Terraform modules. Thus, CTS can interact with Terraform Cloud Driver's Remote Workspaces. Advantages of this:

   * Remote Terraform execution
   * Concurrent runs within Terraform using secured variables
   * State versions, audit logs, run history with triggers and notifications
   * Option for Sentinel to enforce governance policies as code
   <br /><br />

CTS is how changes can trigger <strong>automatic dynamic update</strong> of network infrastructure devices such as applying firewall policies, updating load balancer member pools, etc.

   * <a target="_blank" href="https://www.youtube.com/watch?v=Lf3DvCNDeQo&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk&index=38" title="Network Infrastructure Automation (NIA) Mar 25, 2021">VIDEO</a>: CTS can update network devices that are not Consul-aware (not F5 or NGINX, which are).
   * <a target="_blank" href="https://www.youtube.com/watch?v=Ld40kobI2rs&list=PL81sUbsFNc5arDZYNn3i8N_I7ZeCe02ve&index=10" title="at HashiConf Global 2021 (Nov 1, 2021)">VIDEO: Network Automation on Terraform Cloud With CTS</a>
   * CTS is used to keep configurations up-to-date <a target="_blank" href="https://www.youtube.com/watch?v=8Qj6gLDShBA&t=12m50s" title="May 26, 2022">on Fortinet physical and virtual NGFW (Next-Generation FireWall)</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=uwgsNYZ3GZk&list=PL81sUbsFNc5arDZYNn3i8N_I7ZeCe02ve&index=2" title="Opening Keynote Day 2 - HashiConf Global 2021">VIDEO: "Future of Service Networking"</a>
   <br /><br />

CTS <a target="_blank" href="https://releases.hashicorp.com/consul-terraform-sync/0.3.0/">v0.3</a> was <a target="_blank" href="https://www.hashicorp.com/blog/announcing-consul-terraform-sync-0-3-for-terraform-enterprise">announced Sep 2021</a>

   References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=GcyNmdpS-CI">VIDEO "Integrating Terraform with Consul"</a>
   * https://learn.hashicorp.com/tutorials/cloud/consul-end-to-end-ecs
   <br /><br />

Each task consists of a runbook automation written as a CTS compatible Terraform module using resources and data sources for the underlying network infrastructure. The consul-terraform-sync daemon runs on the same node as a Consul agent.

<hr />

Alternative repo:

   <a name="cgsb"></a>

#### Consul Global Scale Benchmark

   The biggest way to go is using <a target="_blank" href="https://github.com/hashicorp/consul-global-scale-benchmark">https://github.com/hashicorp/consul-global-scale-benchmark</a> used to prove that a Service Mesh Control Plane of 5 HashiCorp Consul Servers across 3 availability zones in us-east-1 are able to update 10,000 Consul/Nomad client nodes and 172,000+ services in under 1 second. Each Consul Server run on c5d.9xlarge instance types on EC2 having 36 vCPUs and 72 Gigabytes of memory. It's described by  <a target="_blank" href="https://www.hashicorp.com/cgsb">White paper: "Service Mesh at Global Scale"</a> and 
   <a target="_blank" href="https://www.hashicorp.com/resources/hashicast-episode-30-anubhav-mishra-paul-banks-hashicorp">Podcast</a> with creator: Anubhav Mishra (Office of the CTO).

   See also: https://github.com/hashicorp/consul-global-scale-benchmark = Terraform configurations and helper scripts for Consul Global Scale Benchmark


   <a name="AWS_Repo"></a>

#### Identify Terraform repo in GitHub
   
   To create the app infra which Consul works on, consider the
   https://github.com/hashicorp-guides
   Consistent workflows to provision, secure, connect, and run any infrastructure for any application. 
      * https://github.com/hashicorp-guides/hashistack
      <br /><br />

   They reference 22 https://github.com/hashicorp-modules such as:
      * https://github.com/hashicorp-modules/network-aws
      <br /><br />

   Each module has an examples folder.

   https://www.terraform.io/language/settings/backends/remote
   Terraform Remote State back-ends

   https://github.com/hashicorp/field-workshops-consul/tree/master/instruqt-tracks/secure-service-networking-for-aws


   a.  https://learn.hashicorp.com/tutorials/cloud/terraform-hcp-consul-provider - it provisions resources that qualify under the AWS free-tier.

   Files:
   * consul.tf: describes the HPC Consul cluster you are going to create.
   * vpc_peering.tf: describes the AWS VPC and the peering with the HVN.
   * variables.tf: sets the variables for your deployment.
   <br /><br />

   b. The following steps are based on https://learn.hashicorp.com/tutorials/cloud/consul-deploy referencing https://github.com/hashicorp/terraform-aws-hcp-consul which uses Terraform to do the below:

   Among https://github.com/hashicorp/docker-consul = Official Docker images for Consul.

   https://github.com/hashicorp/terraform-aws-hcp-consul is the Terraform module for connecting a HashiCorp Cloud Platform (HCP) Consul cluster to AWS. There are four examples containing default CIDRs for private and public subbnets:

   * <a target="_blank" href="https://github.com/hashicorp/terraform-aws-hcp-consul/blob/main/examples/existing-vpc/main.tf">existing-vpc</a>
   * hcp-ec2-demo
   * hcp-ecs-demo
   * hcp-eks-demo
   <br /><br />

   * hcp-ec2-client - [For Testing Only]: installs Consul and runs Consul clients with EC2 virtual machines.
   * hcp-eks-client - [For Testing Only]: installs the Consul Helm chart on the provided Kubernetes cluster.
   * k8s-demo-app - [For Testing Only]: installs a demo application onto the Kubernetes cluster, using the Consul service mesh.
   <br /><br />

   https://github.com/hashicorp/terraform-azurerm-hcp-consul


   <a name="HCP_Account"></a>

### Hashicorp Cloud Account

1. Sign into:
   <a target="_blank" href="https://cloud.hashicorp.com/products/consul">
   https://cloud.hashicorp.com/products/consul</a>

1. Verify your email if it's your first time, or type your email.
1. The first time, select the Registration Name (such as "wilsonmar-org"), country to create a new org. 
1. You get $50! You can skip giving out your credit card until you want a PRODUCTION instance or use larger size node servers. For development use, an extra-small (XS) cluster size is deployed by default to handle up to 50 service instances.

1. Select Consul on the left product menu. Bookmark the URL, which contains your account ID so you'll go straight to it:

   <tt>https://portal.cloud.hashicorp.com/services/consul?project_id=...</tt>

1. Click "Access control (IAM)" menu.
1. Click "Service principals" from the menu and specify the 3 examples below (with your name) for each of 3 roles with ID such as <tt>wilsonmar-123456@12ae4567-f584-4f06-9a9e-240690e2088a</tt>

   * Role "Admin" (as full access to all resources including the right to edit IAM, invite users, edit roles) 
   * Role "Contributor" (Can create and manage all types of resources but can’t grant access to others.)
   * Role "Viewer" (Can only view existing resources.)
   <br /><br />

   PROTIP: Once logged in, a cookie is saved in the browser so that you will be logged in again automatically.

1. For each service principal, click the blue "Create service principal key".

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1653574831/hcp-secrets-1160x808_nu5vb0.png"><img alt="HCP Secrets" width="1160" height="808" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1653574831/hcp-secrets-1160x808_nu5vb0.png"></a>

1. Click the copy icon to save each generated value to your Clipboard (for example):

   <pre>export HCP_CLIENT_ID=kdNNiD8IbU0FZH8juZ10CgkvE6OvLCZK
export HCP_CLIENT_SECRET=hvs.6BHGXSErAzsPjdaimnERGDrG9DXBYTGhdBQQ8HuOJaykG9Jhw_bJgDqp35OkYSoA
   </pre>

   Alternately, copy-paste the values directly into provider config file:
   <pre>provider "hcp" {
  client_id     = "service-principal-key-client-id"
  client_secret = "service-principal-key-client-secret"
}
   </pre>
   
   <a target="_blank" href="https://cloud.hashicorp.com/docs/hcp/admin/access-control/service-principals">CAUTION</a>:
   The secret is not shown after you leave the screen.


   <a name="StoreSecrets"></a>

   ### Store secrets

1. In a file encrypted and away from GitHub, store secrets: 

   TODO: Use Vault to keep the above secrets secure (in a cloud).

   For now, create file <tt>config</tt>


   https://github.com/hashicorp/consul-guides = Example usage of HashiCorp Consul


   <a name="ConfigK8s"></a>
   
   ### (optional) Configure kubectl

   <pre><strong>aws eks --region $(terraform output -raw region) update-kubeconfig --name $(terraform output -raw local.eks_cluster_name)
   kubectl get pods -A
   </strong></pre>



   <a name="HVN"></a>

   ### Create a HashiCorp Virtual Network (HVN)

   REMEMBER: Each resource in HCP can only be located in one HVN. You cannot span two different HVNs with a single product deployment, and product deployments cannot be moved from one HVN to another. Additionally, HVNs cannot be changed after they are deployed.

   References:
   * https://registry.terraform.io/providers/hashicorp/hcp/latest/docs/resources/hvn
   <br /><br />


   <a name="PeerHVN"></a>

   ### Peer HVN to a AWS VPC
1. In the HVN overview page, select the <strong>Peering</strong> connections tab, and click the Create peering connection link. 

1. Input the following information:

   * AWS account ID

   * VPC ID

   * VPC region

   * VPC CIDR (Classless Inter-Domain Routers) block

1. Click the <strong>Create connection</strong> button to begin the peering process.

   Peering status begins at "Creating". 
   
1. Accept the connection at the AWS console.

1. Navigate to the Peering Connections area of your AWS Console. 

   You should have an entry in the list with a status of Pending Acceptance. 
   
1. Click Actions -> Accept Request to confirm acceptance. 

   Status should change to "active".

1. Once the HVN is deployed, the status updates to "Stable" on the HVN overview tab.

1. You can return to this screen to delete the peering relationship. However, deleting this peering relationship means you will no longer be able to communicate with your HVN.


   <a name="CreateConsulCluster"></a>

   ### Create a HCP Consul cluster

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-ent-basics">Enterprise Academy: Deploy a Consul Cluster</a> (Configure, start, and validate high availability of a Consul Enterprise cluster).
   <br /><br />

1. Create Cluster (such as "consul-cluster-1"), Network ID ("hvn"), Region, 

   CIDR Block <tt><strong>172.25.16.0/20</strong></tt> is the default CIDR block value.

   In HVN, IPv4 CIDR ranges used to automatically create resources in your cloud network are delegated in HVN. The CIDR range you use cannot overlap with the AWS VPC that you will be peering with later.



   ### Enable a public or private IP
   
   WARNING: A public IP makes the Consul UI and API conveniently available from anywhere in the public internet for development use. But it is not recommended for production because it is a less secure configuration.
   
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652970518/hcp-consul-clusters-2168x548_anxd9y.png"><img alt="Consul Cluster list" width="2168" height="548" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652970518/hcp-consul-clusters-2168x548_anxd9y.png"></a>


   ### Configure L3 routing and security ???

1. Configure L3 routing and security

1. Create a security group

1. Create a route

1. Define ingress and egress rules

   https://learn.hashicorp.com/tutorials/cloud/terraform-hcp-consul-provider


   <a name="ConfigACL"></a>

   ### Configure Consul ACL Controller

   The Consul ACL Controller is added by Terraform code used to create other app VPC resources.

   TODO: Auto-discovery?


   <a name="RunConsulVPC"></a>
   
   ### Run Consul clients within the provisioned AWS VPC

1. Connect your AWS VPCs to the HVN so that the clients in your VPC can communicate with the HCP server after the next step.

1. Install Consul into those AWS VPC.

   This is not in Terraform code???


   <a name="RunDemoApp"></a>

   ### Run a demo application on the chosen AWS runtime

   <a href="#cgsb">Consul Global Scale Benchmark</a>


   <a name="DestroyConsul"></a>

   ### Destroy Consul

1. Destroy resources

   TODO:




   References about HVN (HashiCorp Virtual Network):

   * https://cloud.hashicorp.com/docs/hcp/network
   * https://learn.hashicorp.com/tutorials/cloud/consul-deploy
   * https://learn.hashicorp.com/tutorials/cloud/terraform-hcp-consul-provider#hcp_consul_base
   <br /><br />


<a name="ServiceDiscovery"></a>

## Service Discovery Workflow

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/tf-azure-consul-f5-workshop">Instruqt: Consul F5 Service Discovery</a>
   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-service-discovery">Enterprise Academy: Service Discovery</a> (See how Consul's Service Discovery feature works by connecting multiple services)
   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-service-discovery-health-monitoring">Enterprise Academy: Service Discovery and Health Monitoring</a>
   <br /><br />


<a name="HCPCloudPricing"></a>

### HCP Consul Cloud Pricing

   https://registry.terraform.io/providers/hashicorp/hcp/latest/docs

   https://cloud.hashicorp.com/products/consul/pricing

   https://cloud.hashicorp.com/docs/consul#features

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th> Plan </th><th > Base </th><th> + per svc instance hr</th><th> Limits </th></tr>
   <tr valign="top"><td> Individual Development </td><td align="right"> 0.027/hr<br />$20/mo 
      </td><td align="right"> - </td><td align="right"> Up to 50 service instances.<br />No uptime SLA.
      </td></tr>
   <tr valign="top"><td> "Standard" prod. </td><td align="right"> $0.069/hr<br />$49/mo 
      </td><td align="right">Small: $0.02/hr</td><td > SLA
      </td></tr>
   <tr valign="top"><td> "Plus" prod. </td><td align="right"> $0.104/hr 
      </td><td align="right"> - </td><td> SLA, multi-region
      </td></tr>
   </table>

   PROTIP: Assume a 5:1 Consul node to app services ratio.  

<hr />

<a name="LaptopWay"></a>

## C. On a macOS laptop using Docker

   * https://learn.hashicorp.com/tutorials/consul/get-started-agent?in=consul/getting-started
   * https://cloudaffaire.com/how-to-install-hashicorp-consul/
   <br /><br />

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1655225727/consul-interactions-488x510_uw40ga.png"><img alt="Consul interactions" width="488"
 height="510" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1655225727/consul-interactions-488x510_uw40ga.png"></a>


   <a name="OneConsulAgent"></a>

### One Agent as Client or Server
   
   PROTIP: The Consul executable binary is designed to run either as a local long-running client <strong>daemon</strong> or in <strong>server mode</strong>. 
   
   CAUTION: Do not use the manual approach of downloading release binaries from GitHub because 

   So that you avoid the toil the configuring PATH, etc. see install instructions below to use a package manager for each operating system (x86 and ARM):  
      * Homebrew (brew command) on macOS
      * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-ent-basics/challenges/install-consul/notes">apt-get on Linux</a>
      * Chocolately (choco command) on Windows
      <br /><br />
   
   Work with the Consul Agent using:
   * <a href="#CLI-commands">CLI</a> (Command Line Interface) on Terminal sessions
   * <a href="#APICalls">API calls using curl</a> or within a custom program (written in Go, etc.)
   * <a href="#ConsulWebGUI">GUI</a> (Graphic User Interface) on an internet browser such as Google Chrome
   <br /><br />

   REMEMBER: Normally, there is no reason to SSH directly into Consul servers.
   
   The UI and API are intended to be consumed from remote systems, such as a user's desktop or an application looking to discover a remote service in which it needs to establish connectivity. 

   The API at <tt>/connect/intentions/exact</tt> provides the most features to create Service Intentions.


   <a name="ConsulNames"></a>

   ### Environment Variables

   The shell script I wrote makes use of several custom environment variables, which minimizes mistakes when several commands use the same values. When applicable, my script also captures values output from one step to use in subsequent commands, to avoid the toil and mistakes from manual copy and pasting.

   Use of environment variables also enable the same command call to be made for both DEV and PROD use, further avoiding mistakes.

   * <tt>export DATACENTER1_ID="dc1"</tt> - or by default is obtained from my laptop's <tt>$(hostname)</tt>

   * CONSUL_AGENT_TOKEN

   * <a href="#ACL-Vars">ACL variables</a>

   * export <a href="#LicenseConfiguration">LICENSE_FILE</a>="/etc/consul.d/consul.hclic"


   <a name="InstallConsulLinux"></a>

   ### Install Consul Agent on Linux

   <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-ent-basics/challenges/install-consul/assignment">Accordingly</a>: TODO: Add signature verification.

   <pre>apt-get update
# Install utilities curl, wget, jq, 
apt-get -y install curl wget software-properties-common jq
curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -
# Get version:
lsb_release -cs
# Add the official HashiCorp Linux repository:
apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com \
   $(lsb_release -cs) main" 
# Install Consul Enterprise on the node:
apt-get -y install consul-enterprise
   </pre>


   <a name="InstallConsulBinary"></a>

### Install Enterprise Consul Agent on macOS

A <strong>different installer</strong> for Consul (named "+ent") contains Enterprise features
such that both FOSS and Enterprise editions of the Consul agent have the same name ("consul").
This makes for minimal impact when upgrading from FOSS to Enterprise.

But the Enterprise edition looks for a license file within configuration settings. 
The Enterprise edition is provided in the AMI image of <a target="_blank" href="https://aws.amazon.com/marketplace/pp/prodview-dpe4zzqvo27n4">consul on Amazon Marketplace</a>, which charges $8,000 per year for up to 50 nodes and bronze support. 

   Homebrew does not have an installer for the enterprise edition of Consul.

   <tt>-rwxr-xr-x  1 wilsonmar  staff  127929168 Jun  3 13:46 /usr/local/bin/consul</tt>
   
   PROTIP: I wrote a shell script to make it both safer and easier for you to install the Enterpise edition of Consul. It uses the GPG utility to ensure that what is downloaded is exactly what the author intended, as defined in signature files the author created at time of creation. The shell script which follows the manual install, but adds automated checks before and after each step. 

   The shell script makes use of Homebrew's brew command for other utilities.

   https://github.com/wilsonmar/hashicups/blob/main/consul-download.sh

   This command below runs the RAW format of the script.

1. Use your mouse to triple-click <tt>zsh</tt> in the command below to highlight the line, then press command+C to copy it to your Clipboard:

   TODO: https://raw.githubusercontent.com/wilsonmar/hashicups/main/consul-download.sh

   <pre><strong>zsh -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/mac-setup/main/mac-setup.zsh)" \
   -v -I -U -consul
   </strong></pre>

   CAUTION: Do not click on the URL (starting with <tt>httpd</tt>) since the terminal program opens a browser to that URL.

   <tt>-v</tt> specifies optional verbose log output.

   <tt>-Golang</tt> specifies install of Go programming language development components

   <a name="EcosystemInstalls"></a>

   <tt>-I</tt> specifies -Install of utilities XCode CLI, Homebrew, git, jq, tree, Docker, and components in the HashiCorp ecosystem, including Terraform, Vault, Nomad, <a href="#envconsul">envconsul</a>.

   <tt>-U</tt> specifies -Update of utilities.
   Do not specify <tt>-I</tt> and  <tt>-U</tt> after initial install (to save a few seconds).

   Utilities for working with AWS, Azure, GCP, and other clouds require their own parameter to be specified in order to be installed.

   When no version is specified, the script identifies the <strong>latest version</strong> and installs that.
   Alternately, a specific verify can be specified.

7. Press <strong>command+Tab</strong> to switch to the <strong>Terminal.app</strong>. 

8. Click anywhere in the Terminal window and Press <strong>command+V</strong> to paste the command from your Clipboard. 

9. Press Return/Enter on your keyboard to begin execution. 

9. Skip to <a href="#CLI-commands">use CLI commands</a>



Here is a description of the steps that script takes:

1. Use a browser to view a list of releases:

   https://releases.hashicorp.com/consul/

1. Click one that is NOT "alpha" or "beta", such as:

   consul_1.12.2+ent

   for https://releases.hashicorp.com/consul/1.12.2+ent/

1. Click the "darwin". "arm64" if your macOS laptop has Apple Silicon M1/M2 chip.

   consul_1.12.2+ent_darwin_arm64.zip

   #### Check SHA256SUM
   
   File names containing "SHA256SUMS" are for verifying whether download was complete.

   The steps below generate a hash of the downloaded file, then compares it with the hash generated by the author, also downloaded. Since even one bit difference between the zip file would generate a different hash, we compare the before and after to determine if the file was corrupted.

   HashiCorp provides 3 different hash files.
   See https://www.hashicorp.com/security

1. Show the hash of files listed within the SHA256SUMS file:

   <pre><strong>cat consul_1.12.2+ent_SHA256SUMS
   </strong></pre>

   <pre>dc7d0b536b2646812a3b6bea88648f9b0b6f9ec13a850ebc893383faf2267f1d  consul_1.12.2+ent_darwin_amd64.zip
1213b93c6465de0c66de043bc3f7afa9934d5122e8f662cb76885a156af58a88  consul_1.12.2+ent_darwin_arm64.zip
   </pre>

1. Select whether to use gpg instead of shasum.

   See https://www.youtube.com/watch?v=4bbyMEuTW7Y

#### Use GPG 
   
1. Click to download the ".sig" file such as

   consul_1.12.2+ent_SHA256SUMS.72D7468F.sig

   BTW: "72D7468F" is described at "PGP Public Keys" within https://www.hashicorp.com/security

   BTW: The file was created using a command such as <br />
   <tt>gpg --detach-sign consul_1.12.2+ent_darwin_arm64.zip</tt>
   (which outputs <tt>gpg: using "C7AF3CB20D417CAE08C03507A931D0E933B64F94" as default secret key for signing</tt>).

   consul_1.12.2+ent_SHA256SUMS.sig

1. Switch to Terminal.
1. If you have not installed gpg, do so. Verify if you have it installed:

   <pre><strong>where gpg
   </strong></pre>

   The desired response is:<br />
   <tt>/usr/local/bin/gpg</tt>

1. Command:
   
   <pre><strong>gpg --verify consul_1.12.2+ent_SHA256SUMS.sig \
   consul_1.12.2+ent_darwin_arm64.zip
   </strong></pre>

   The response desired is "Good signature":

   <pre>gpg: assuming signed data in 'consul_1.12.2+ent_SHA256SUMS'
gpg: Signature made Fri Jun  3 13:58:17 2022 MDT
gpg:                using RSA key 374EC75B485913604A831CC7C820C6D5CD27AB87
gpg: Can't check signature: No public key
   </pre>

   QUESTION: Huh?

1. Skip to <a href="#CLI-commands">use CLI commands</a>

#### Use shasum to check SHA256SUM

1. Verify if you have the program installed:

   <pre><strong>where shasum
   </strong></pre>

   If the response is "/usr/bin/shasum", download<br />
   consul_1.12.2+ent_SHA256SUMS for use with the shasum utility

1. Generate a hash based on the zip file downloaded:

   <pre>shasum consul_1.12.2+ent_darwin_arm64.zip</pre>

1. Compare hashes:

   <pre><strong>sha256sum -c consul_1.12.2+ent_SHA256SUMS
   </strong></pre>

   The zip file is not corrupted if you see:

   <pre>consul_1.12.2+ent_darwin_arm64.zip: OK</pre>

   Ignore lines containing "FAILED open or read" for other hashes in the SHASUM file.

1. Unzip the zip file: within Finder, click the zip file to unzip it to yield file: <tt>consul</tt> (with no file extension).

1. mv consul /usr/local/bin
1. rm consul_1.12.2+ent_darwin_arm64.zip
1. rm consul_1.12.2+ent_SHA256SUMS

1. Skip to <a href="#CLI-commands">use CLI commands</a>


#### B. Install from Homebrew using brew

1. I

   <pre><strong>brew search consul</strong></pre>

   <pre>==> Formulae
consul                    hashicorp/tap/consul ✔             hashicorp/tap/consul-template
consul-backinator         hashicorp/tap/consul-aws           hashicorp/tap/consul-terraform-sync
consul-template           hashicorp/tap/consul-esm           hashicorp/tap/envconsul
envconsul                 hashicorp/tap/consul-k8s           iconsur
&nbsp;
==> Casks
console
   </pre>


   <a name="UseHashicorpTaps"></a>

### Install using Brew taps on MacOS

   In the script, the Consul Agent is installed using HashiCorp's tap, as described at:
   * https://learn.hashicorp.com/tutorials/consul/get-started-install?in=consul/getting-started
   <br /><br />

   Instead of the usual:

   <pre><strike>brew install consul</strike></pre>

   or 

   <pre><strike>brew tap hashicorp/tap
brew install hashicorp/tap/consul
   </strike></pre>

   Notice the response caveats from brew install consul:

   <pre>The darwin_arm64 architecture is not supported for this product
at this time, however we do plan to support this in the future. The
darwin_amd64 binary has been installed and may work in
compatibility mode, but it is not fully supported.
&nbsp;
To start hashicorp/tap/consul now and restart at login:
  brew services start hashicorp/tap/consul
Or, if you don't want/need a background service you can just run:
  consul agent -dev -bind 127.0.0.1
==> Summary
🍺  /opt/homebrew/Cellar/consul/1.12.0: 4 files, 117.1MB, built in 3 seconds
   </pre>

   <tt>-bind</tt> is the interface that Consul agent itself uses.

   <tt>-advertise</tt> is the interface that Consul agent asks others use to connect to it. Useful when the agent has multiple interfaces or the IP of a NAT device to reach through.


<hr />

<a name="ConsulVersion"></a>
<a name="CLI-commands"></a>

## Consul CLI commands

1. Verify install:

   <pre><strong>consul version</strong></pre>

   Alternately:

   <pre><strong>consul --version</strong></pre>

   The response if the Enterprise ("+ent") version was installed:

   <pre>Consul v1.12.2+ent
Revision 0a4743c5
Protocol 2 spoken by default, understands 2 to 3 (agent will automatically use protocol >2 when speaking to compatible agents)
   </pre>

   The response if the Open Source version was installed:

   <pre>Consul v1.12.2+ent
Revision 19041f20
Protocol 2 spoken by default, understands 2 to 3 (agent will automatically use protocol >2 when speaking to compatible agents)
   </pre>

1. Obtain the menu of <em>31 command keywords</em> listed alphabetically:

   <pre><strong>consul</strong></pre>

   (<tt>--help</tt> is not needed)

   <pre>Usage: consul [--version] [--help] &LT;command> [&LT;args>]
&nbsp;
Available commands are:
    <a href="#ACL">acl            Interact with Consul's ACLs</a>
    <a href="#ConsulAgent">agent          Runs a Consul agent</a>
    catalog        Interact with the catalog
    config         Interact with Consul's Centralized Configurations
    connect        Interact with <a href="#ConsulConnect">Consul Connect</a>
    debug          Records a debugging archive for operators
    event          Fire a new event
    exec           Executes a command on Consul nodes
    <a href="#ConsulLeave">force-leave    Forces a member of the cluster to enter the "left" state</a>
    info           Provides debugging information for operators.
    <a href="#Intentions">intention</a>      Interact with Connect service intentions
    join           Tell Consul agent to join cluster
    <a href="#Keygen">keygen         Generates a new encryption key</a>
    keyring        Manages gossip layer encryption keys
    kv             Interact with the key-value store
    <a href="#ConsulLeave">leave          Gracefully leaves the Consul cluster and shuts down</a>
    lock           Execute a command holding a lock
    login          Login to Consul using an auth method
    logout         Destroy a Consul token created with login
    maint          Controls node or service maintenance mode
    <a href="#members">members</a>        Lists the members of a Consul cluster
    monitor        Stream logs from a Consul agent
    operator       Provides cluster-level tools for Consul operators
    reload         Triggers the agent to reload configuration files
    rtt            Estimates network round trip time between nodes
    services       Interact with services
    snapshot       Saves, restores and inspects snapshots of Consul server state
    tls            Builtin helpers for creating CAs and certificates
    validate       Validate config files/directories
    version        Prints the Consul version
    watch          Watch for changes in Consul
   </pre>

   Links have been added above.

   CLI commands are used to start and stop the Consul Agent.

   <a name="AutoCompletions"></a>

1. Get a list that all fits on the screen by typing <tt>consul</tt> then press the <strong>Tab</strong> key on the keyboard:

   <pre>acl          event        keygen       logout       rtt          watch
agent        exec         keyring      maint        services     
catalog      force-leave  kv           members      snapshot     
config       info         leave        monitor      tls          
connect      intention    lock         operator     validate     
debug        join         login        reload       version      
   </pre>

   The above appears only if <tt>~/.zshrc</tt> or <tt>~/.bashrc</tt> contains:

   <pre>complete -o nospace -C /usr/local/bin/consul consul</pre>

   That line is inserted to the correct file by:

   <pre><strong>consul -autocomplete-install</strong></pre>

   <a name="InCode"></a>

   Each command in the list above are defined by code within the GitHub repository at:

   <a target="_blank" href="https://github.com/hashicorp/consul/tree/main/command">https://github.com/hashicorp/consul/tree/main/command</a>

   NOTE: Subcommand force-leave is in folder <tt>forceleave</tt>

   These folders are in addition to subcommands: cli, flags, helpers.

   Since Consul is written in the <a target="_blank" href="https://wilsonmar.github.io/golang/">Go programming language</a>,
   each command is process by a go language file in each folder.

   The GUI is in JavaScript with Handlebars templating, SCSS, and Gherkin.


   <a name="Shortcuts"></a>
   
   ## Consul Keyboard shortcuts

   Below are the most commonly use command statements typed on Terminal.
   
   PROTIP: If you find it tedious to repeatedly type out long commands every time, consider memorizing these keyboard shortcuts, defined as aliases in a file that executes everytime your Terminal starts (https://github.com/wilsonmar/mac-setup/blob/master/aliases.zsh).
   You may change your alias key to anything that is not already used by another program.

   <pre>alias csl="curl http://127.0.0.1:8500/v1/status/leader"
alias cacc="consul agent -config-dir /etc/consul.d/config"
alias ccn="consul catalog nodes"
alias ccs="consul catalog services"
alias cml="consul members -wan"
alias cmld="consul members -detailed"
alias cnl="consul namespace list"
alias crl="consul operator raft list-peers"
alias crj="cat /var/consul/raft/peers.json"
   </pre>

* <tt>ccn</tt> for the list of nodes, instead of:

   <pre><strong>consul catalog nodes</strong></pre>

   <pre>Node                  ID        Address    DC
wilsonmar-N2NYQJN46F  5a5a1066  127.0.0.1  dc1
   </pre>

* <tt>cml</tt> for the list of node members, instead of:

   <pre><strong>consul members</strong></pre>

   <pre>Node             Address           Status  Type    Build       Protocol  DC   Partition  Segment
consul-server-1  10.132.0.90:8301  alive   server  1.12.2+ent  2         dc1  default    &LT;all>
consul-server-2  10.132.0.42:8301  alive   server  1.12.2+ent  2         dc1  default    &LT;all>
consul-server-3  10.132.0.37:8301  alive   server  1.12.2+ent  2         dc1  default    &LT;all>
consul-server-4  10.132.1.11:8301  alive   server  1.12.2+ent  2         dc1  default    &LT;all>
consul-server-5  10.132.0.35:8301  alive   server  1.12.2+ent  2         dc1  default    &LT;all>
consul-server-6  10.132.0.41:8301  alive   server  1.12.2+ent  2         dc1  default    &LT;all>
   </pre>

* <tt>cmld</tt> for the list of node members with details, instead of:

   <pre><strong>consul members -details</strong></pre>

   <pre>???
   </pre>

* <tt>cmw</tt> for the list of node members, instead of:

   <pre><strong>consul members -wan</strong></pre>

   <pre>Node                      Address         Status  Type    Build   Protocol  DC   Partition  Segment
wilsonmar-....dc1    127.0.0.1:8302  alive   server  1.12.2  2         dc1  default    &LT;all>
   </pre>

   <pre>Node                 Address           Status  Type    Build       Protocol  DC   Partition  Segment
consul-server-0.dc1  10.52.2.9:8302    alive   server  1.13.2+ent  2         dc1  default    &LT;all>
consul-server-0.dc2  10.232.2.7:8302   alive   server  1.13.2+ent  2         dc2  default    &LT;all>
consul-server-1.dc1  10.52.0.11:8302   alive   server  1.13.2+ent  2         dc1  default    &LT;all>
consul-server-1.dc2  10.232.1.10:8302  alive   server  1.13.2+ent  2         dc2  default    &LT;all>
consul-server-2.dc1  10.52.1.8:8302    alive   server  1.13.2+ent  2         dc1  default    &LT;all>
consul-server-2.dc2  10.232.0.10:8302  alive   server  1.13.2+ent  2         dc2  default    &LT;all>
   </pre>

* <tt>ccs</tt> for the list of services, instead of:

   <pre><strong>consul catalog services</strong></pre>

   When no Consul service has been configured yet, the response is:

   <pre>Node                      Address         Status  Tags
wilsonmar-N2NYQJN46F.dc1  127.0.0.1:8302  alive   acls=0,ap=default,build=1.12.2:19041f20,dc=dc1,ft_fs=1,ft_si=1,id=5a5a1066-8c29-8c1e-c5a9-bdcbb01c24c7,port=8300,raft_vsn=3,role=consul,segment=&LT;all>,vsn=2,vsn_max=3,vsn_min=2
   </pre>

   See TODO: for more information about Tags.

* <tt>cnl</tt> for the list of raft peers, instead of:

   <pre><strong>consul namespace list</strong></pre>

   Example output:

   <pre>
   # app-team:
   #    Description:
   #       Namespace for app-team managing the production dashboard application
   #    Partition:   default
   # db-team:
   #    Description:
   #       Namespace for db-team managing the production counting application
   #    Partition:   default
   # default:
   #    Description:
   #       Builtin Default Namespace
   </pre>

* <tt>crl</tt> for the list of raft peers, instead of:

   <pre><strong>consul operator raft list-peers</strong></pre>

   Example:

   <pre>Node             ID                                    Address              State     Voter  RaftProtocol
consul-server-1  5dbd5919-c144-93b2-9693-dccfff8a1c53  10.132.255.118:8300  leader    true   3
consul-server-2  098c8594-e105-ef93-071b-c2e24916ad78  10.132.255.119:8300  follower  true   3
consul-server-3  93a611a0-d8ee-0937-d1f0-af3377d90a19  10.132.255.120:8300  follower  true   3
   </pre>

* <tt>csc</tt> for the contents of <tt>server.hcl</tt> configuration file in its default folder path:

   <pre><strong>code ???/server.hcl</strong></pre>

   You may come up with other aliases.


   <a name="ConsulAgent"></a>
   
   ## Consul agent

   * <a target="_blank" href="https://www.consul.io/docs/agent">consul.io/docs/agent (Runs a Consul agent)</a>
   <br /><br />
    
1. Invoke -dev (for "development" only) on a Terminal:

   <pre><strong>consul agent -dev</strong></pre>

   The response begins with some build info:

   <pre>==> Starting Consul agent...
           Version: '1.12.2+ent'
           Node ID: '5b9b8b16-4e67-4808-dae8-e594948eb261'
         Node name: 'wilsonmar-N2NYQJN46F'
        Datacenter: 'dc1' (Segment: '&LT;all>')
            Server: true (Bootstrap: false)
       Client Addr: [127.0.0.1] (HTTP: 8500, HTTPS: -1, gRPC: 8502, DNS: 8600)
      Cluster Addr: 127.0.0.1 (LAN: 8301, WAN: 8302)
           Encrypt: Gossip: false, TLS-Outgoing: false, TLS-Incoming: false, Auto-Encrypt-TLS: false
&nbsp;
==> Log data will now stream in as it occurs:
   </pre>

   DEFINITION: 

   <tt>Server: true</tt> says it's running <strong>server mode</strong> (as node type: server).<br />
   <tt>Server: false</tt> means it's running <strong>client mode</strong> (as node type: client).

   <a name="Setdc1variable"></a>

   <tt>Datacenter: 'dc1'</tt> is the default data center value.

1. Define variables for other CLI commands:

   <pre>export DATACENTER1_ID="dc1"</strong></pre>

   <a name="ConsulDNS"></a>

1. Analyze protocol info returned from the command above:

   <tt>Client Addr: [127.0.0.1] (HTTP: 8500, HTTPS: -1, gRPC: 8502, DNS: 8600)</tt><br />
   means that you can access the UI web page at: <tt>http://127.0.0.1:8500</tt> - see <a href="#ConsulGUI">Consul GUI</a> below.

   <tt>HTTPS: -1</tt> means it's not available (until SSL/TLS certificates are defined)
   
   <tt>gRPC: 8502</tt> Remote Procedure Call
   
   ### Consul DNS 

   <tt>DNS: 8600</tt> is the <a href="#Ports">port number (the default)</a> for Consul's built-in DNS server.

   The Domain Name Service (DNS) matches IP addresses with server names. It's a major component of TCP networking.
   
   By working in the environment around application program, Consul doesn't require changes to application code.


   <a name="dig_discover"></a>

   ### dig command for DNS

1. "Discover" nodes using DNS interface <tt>dig</tt> command to the Consul agent's <strong>DNS server</strong>, which runs on port 8600 by default:

   <pre><strong>dig @127.0.0.1 -p 8600</strong></pre>

   Where no services have been defined yet:

   <pre>; &LT;&LT;>> DiG 9.10.6 &LT;&LT;>> @127.0.0.1 -p 8600
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER&LT;&LT;- opcode: QUERY, status: <strong>REFUSED</strong>, id: 60743
;; flags: qr rd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 0
;; WARNING: recursion requested but not available
&nbsp;
;; QUESTION SECTION:
;.				IN	NS
&nbsp;
;; Query time: 2 msec
;; SERVER: 127.0.0.1#8600(127.0.0.1)
;; WHEN: Sat Jul 16 01:30:09 MDT 2022
;; MSG SIZE  rcvd: 17
   </pre>

   QUESTION: NOTE the response include "REFUSED".  

<!-- 
1. When the Consul Agent has <strong>tokens</strong> to work with nodes, such as "shipments":

   <pre><strong>dig @127.0.0.1 -p 8600 shipments.service.consul -t SRV</strong></pre>

   The response:

   <pre>; &LT;&LT;>> DiG 9.10.6 &LT;&LT;>> @127.0.0.1 -p 8600 shipments.service.consul -t SRV
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER&LT;&LT;- opcode: QUERY, status: NXDOMAIN, id: 4610
;; flags: qr aa rd; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1
;; WARNING: recursion requested but not available
&nbsp;
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;shipments.service.consul.	IN	SRV
&nbsp;
;; AUTHORITY SECTION:
consul.			0	IN	SOA	ns.consul. hostmaster.consul. 1657957518 3600 600 86400 0
&nbsp;
;; Query time: 38 msec
;; SERVER: 127.0.0.1#8600(127.0.0.1)
;; WHEN: Sat Jul 16 01:36:12 MDT 2022
;; MSG SIZE  rcvd: 103
   </pre>

   <pre>;; ANSWER SECTION:
shipments.service.consul. 0 IN SRV 1 1 8080 0a00001e.addr.dc1.consul.
;; ADDITIONAL SECTION:
0a00001e.addr.dc1.consul. 0 IN A  10.0.0.30
mxx01.node.dc1.consul. 0 IN TXT "consul-network-segment="
   </pre>

   ### DNS SRV Priority and Weights

   <a target="_blank" href="https://www.cloudflare.com/learning/dns/dns-records/dns-srv-record/">DEFINITION</a>: DNS SRV lookups include port numbers and follow "Priority" and "Weight" values defined for each.
   A server with a <u>lower</u> priority value receives <u>more</u> traffic than servers defined with a higher priority. 
   "Weight" does not matter when servers have different priority values.
   If several servers have the same priority, the server with the <u>higher</u> <strong>weight</strong> receives <u>more</u> traffic than servers with lower weight.

   TODO: This approach enables automatic load balancing. Decentralizes DNS.


   Alternately, if running within Docker image "hashicorp/counting-service:0.0.2"
   
   <pre><strong>dig @127.0.0.1 -p 8600 "counting.service.consul"</strong></pre>

   Alternately, discover apps using <tt>dig appb.service.consul</tt>

   If running locally:

   <pre><strong>dig @127.0.0.1 -p 8600 "$(hostname).node.consul"</strong></pre>

   REMEMBER: Only healthy instances are returned. Unhealthy nodes are filtered out.

   <pre>; &LT;&LT;>> DiG 9.10.6 &LT;&LT;>> @127.0.0.1 -p 8600 wilsonmar-N2NYQJN46F.node.consul
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER&LT;&LT;- opcode: QUERY, status: NOERROR, id: 16775
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 2
;; WARNING: recursion requested but not available
&nbsp;
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;wilsonmar-N2NYQJN46F.node.consul. IN	A
&nbsp;
;; ANSWER SECTION:
wilsonmar-N2NYQJN46F.node.consul. 0 IN	A	127.0.0.1
&nbsp;
;; ADDITIONAL SECTION:
wilsonmar-N2NYQJN46F.node.consul. 0 IN	TXT	"consul-network-segment="
&nbsp;
;; Query time: 2 msec
;; SERVER: 127.0.0.1#8600(127.0.0.1)
;; WHEN: Sun May 08 22:35:21 MDT 2022
;; MSG SIZE  rcvd: 113
   </pre>

-->


   <a name="EnterpriseLicense"></a>

   ### Configure Enterprise license
 
   About the Enterprise license key:
   * https://learn.hashicorp.com/tutorials/nomad/hashicorp-enterprise-license?in=consul/enterprise
   <br /><br />

1. If you installed an Enterprise edition of Consul:

   <pre><strong>consul agent -dev</strong></pre>

   If no license was installed, you'll see log lines like these returned:

   <pre>2022-07-12T12:18:00.234-0600 [ERROR] agent: Error starting agent: error="license is missing. To add a license, configure "license_path" in your configuration file, use the CONSUL_LICENSE environment variable, or use the CONSUL_LICENSE_PATH environment variable. For a trial license of Consul Enterprise, visit https://consul.io/trial."
2022-07-12T12:18:00.234-0600 [INFO]  agent: Exit code: code=1
   </pre>

   If an expired Enterprise license was installed, you'll see log lines like these returned:

   <pre>2022-07-14T19:01:32.448-0600 [ERROR] agent: Error starting agent: error="error initializing license: 1 error occurred:
	* license is no longer valid
   </pre>

   REMEMBER: After Expiration, licenses still work until Termination date 10 years later.

1. In a browser, fill out the form for a 30-day evaluation license of Enterprice Consul  at 

   https://www.hashicorp.com/products/consul/trial for a 30-day trial

1. Configure your browser to pop up for this URL:

   https://license.hashicorp.services/customers

   TODO:  hcp-activations@hashicorp.com?

   For Consul agent installed using brew: TODO:

   <a name="RunForeground"></a>

   ### Run in Foreground

   Run Consul in foreground, which occupies the Terminal and does not start again at login:

   <pre><strong>consul agent -dev -bind 127.0.0.1 -node machine</strong></pre>

   <pre>[DEBUG] agent.router.manager: Rebalanced servers, new active server: number_of_servers=1 active_server="wilsonmar-N2NYQJN46F (Addr: tcp/127.0.0.1:8300) (DC: dc1)"
   </pre>

   Alternately,

   <pre><strong>consul agent -dev -datacenter="aws-1234567890" \
   -data-dir=/opt/consul  -encrypt="<em>key</em>" \
   -join="10.0.10.11,10.1.2.3" \
   -bind="127.0.0.1" -node machine</strong></pre>

   <tt>-join</tt> will fail if the IP addresses (4 or 6) fails to start.

   PROTIP: In production, use configuration file to <strong>auto-join</strong>:

   <pre>{
  "bootstrap": false,
  "boostrap_expect": 3,
  "server": true,
  "retry_join": ["10.0.10.11,"10.1.2.3"]
}
   </pre>

   <a name="bind"></a>

   <tt>-bind</tt> defines the IP addresses of clients which the agent will work with. "0.0.0.0" means everyone.
   
   For cluster communications within <tt>nodes/conf/server.hcl</tt> the <tt>bine_addr</tt> is .

   <pre>bind_addr = "{{ GetPrivateInterfaces | include \"network\" \"10.0.0.0/16\" | attr \"address\" }}"</pre>

   For client communications (via UI,DNS,API):

   <pre>client_addr = "0.0.0.0"
   </pre>

   <pre>recursors = ["1.1.1.1"]
   &nbsp;
   data_dir = "/consul/data"
   </pre>


   <a name="RunBackground"></a>
   
   Alternately, if you installed Consul using brew (which we don't recommend), to run it in background so it restarts automatically at login:

   <pre>brew services start hashicorp/tap/consul</pre>

QUESTION: Setup compatibility mode?


   <a name="ConsulGUI"></a>

   ## Consul GUI

1. In the address bar within a browser:

   <tt>http://localhost:8500/services</tt>

   <a name="ConsulWebGUI"></a>

   ### Consul web GUI

   After the <a href="#RunBackground">Consul server is invoked</a>, on the Terminal window:

1. Open

   <pre><strong>open "http://localhost:8080/ui/${DATACENTER1_ID}/services"</strong></pre>



   <img alt="Consul GUI" width="573" height="104" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652110651/consul-gui-573x104_zb5lsx.png">

   The Consul GUI provides a mouse-clickable way for you to convienently work with these:

   * <a href="#Services">Services</a> (in the Service Catalog)

   * <a href="#Nodes">Nodes</a> is the number of Consul instances

   * <a href="#KeyValue">Key/Value</a> datastore of IP address generated

   * <a href="#ACL">ACL</a> (Access Control List) entries which block or allow network access based on port number

   * <a href="#Intentions">Intentions</a> to allow or deny connections between specific <strong>services by name</strong> (instead of IP addresses) in the Service Graph
   


   <hr />

   <a name="APICalls"></a>

   ### CLI API

   PROTIP: All Consul's endpoints registered are defined at https://github.com/hashicorp/consul/blob/main/agent/http_register.go
   Beware of deprecated ones at the bottom of the list.


   <a name="AgentSelf"></a>

1. For all configuration information, run this API:

   <pre><strong>curl localhost:8500/v1/agent/self</strong></pre> 

   In the "Stats" section:

   The JSON file returned includes build values also displayed by <a href="#ConsulVersion">consul version command</a>:
   
   <pre>        "build": {
            "prerelease": "",
            "revision": "19041f20",
            "version": "1.12.2",
            "version_metadata": ""
   </pre>

   "runtime" settings are about the "arm64" chip, "darwin" operating system, and Golang version:

   <pre>           "runtime": {
            "arch": "arm64",
            "cpu_count": "10",
            "goroutines": "105",
            "max_procs": "10",
            "os": "darwin",
            "version": "go1.18.1"
   </pre>

   About Consul operations:

   <pre>        "agent": {
            "check_monitors": "0",
            "check_ttls": "0",
            "checks": "0",
            "services": "0"
        },
        "consul": {
            "acl": "disabled",
            "bootstrap": "false",
            "known_datacenters": "1",
            "leader": "true",
            "leader_addr": "127.0.0.1:8300",
            "server": "true"
   </pre>

   <a name="RaftConfig"></a>

   ## Raft configuration

   Settings for the Raft protocol:

   <pre>        "raft": {
            "applied_index": "1849",
            "commit_index": "1849",
            "fsm_pending": "0",
            "last_contact": "0",
            "last_log_index": "1849",
            "last_log_term": "2",
            "last_snapshot_index": "0",
            "last_snapshot_term": "0",
            "latest_configuration": "[{Suffrage:Voter ID:5a5a1066-8c29-8c1e-c5a9-bdcbb01c24c7 Address:127.0.0.1:8300}]",
            "latest_configuration_index": "0",
            "num_peers": "0",
            "protocol_version": "3",
            "protocol_version_max": "3",
            "protocol_version_min": "0",
            "snapshot_version_max": "1",
            "snapshot_version_min": "0",
            "state": "Leader",
            "term": "2"
   </pre>


   <a name="Raft"></a>

   ### Raft concensus algorithm

   Consider these dynamic illustrations about how the Raft mechanism works:
   * http://thesecretlivesofdata.com/raft/ provides a visualization
   * https://raft.github.io/
   <br /><br />

   To ensure data <strong>consistency</strong> among nodes (even across different Availability Zones), the <a target="_blank" href="https://www.consul.io/docs/architecture/consensus#deployment_table">Raft consensus algorithm</a> (a simpler implementation of <a target="_blank" href="https://en.wikipedia.org/wiki/Paxos_%28computer_science%29">Paxos</a>) maintains consistent state storage for updating data maintained by Consul's (catalog, session, prepared query, ACL, and KV state).
   
   Each transaction is considered "comitted" when more than half the followers register it.
   
   If the LEADER server fails, an election is automatically held among a quorum (adequate number of) FOLLOWERs to elect a new LEADER from among candidates.

   <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/get-started-create-datacenter?in=consul/getting-started">TUTORIAL</a>:

   <!-- https://hashicorp.app.workramp.com/task_assignments/cbb60ad0-cfd5-11ec-aade-06cf503dca07 -->


   <a name="EnvoyConfig"></a>

   The last stanza provides a list of (Service Mesh) Envoy proxies compatible with the Consul version installed:

   <pre> "xDS": {
        "SupportedProxies": {
            "envoy": [
                "1.22.0",
                "1.21.1",
                "1.20.2",
                "1.19.3"
            ]
        },
        "Port": 8502
   </pre>


   <a name="Ports"></a>

   ### Ports used by Consul

   The default ports (which some organizations change in hope of "better security through obfuscation"):
   
   * 8300 TCP for RPC (Remote Procedure Call) by all Consul server agents to handle incoming requests from <strong>other Consul agents</strong> to discover services and make Value requests for Consul KV

   * 8301 TCP/UDP for Serf <strong>LAN</strong> Gossip within the same region cluster for Consensus communication, for agreement on adding data to the data store, and replication of data
   * 8302 TCP/UDP for Serf <strong>WAN</strong> Gossip across regions
   
   * 8500 & 8501 <strong>TCP-only</strong> for localhost API and UI
   * 8502 TCP-only for Envoy sidecar proxy xDS gRPC API (not configured by default)
   * 8558 - Consul-Terraform-Sync daemon

   * 8600 TCP/UDP for <a href="#DNSQueries">DNS queries</a>

   * 21000 - 21255 TCP (automatically assigned) for Sidecar proxy registrations

   For bootstrapping and configuration of <tt>agent.hcl</tt>, see
   https://learn.hashicorp.com/tutorials/consul/access-control-setup-production

   <a name="ConfigPort"></a>

   To change the DNS port, edit at folder <tt>kv/conf/</tt> file <tt>agent.hcl</tt> 

   <pre>ports {
      dns = 53
      grps = 8502
   }
   </pre>

   Envoy uses "xDS" for dynamic discovery.

   <a name="SerfConfig"></a>

   ## serf_lan and serf_wan

   There is a <tt>"serf_lan"</tt> and <tt>"serf_wan"</tt> each:

   <pre>            "coordinate_resets": "0",
            "encrypted": "false",
            "event_queue": "1",
            "event_time": "2",
            "failed": "0",
            "health_score": "0",
            "intent_queue": "0",
            "left": "0",
            "member_time": "1",
            "members": "1",
            "query_queue": "0",
            "query_time": "1"
   </pre>

   <a name="Gossip"></a>

   ### Serf LAN & WAN Gossip 

      * https://learn.hashicorp.com/tutorials/consul/federation-gossip-wan
      * https://www.consul.io/docs/intro/vs/serf
      <br /><br />

   To ensure that data is distributed with reliable communication not assumed, Consul makes use of the <a target="_blank" href="https://en.wikipedia.org/wiki/Gossip_protocol">Gossip protocol</a> powered by the multi-platform <a target="_blank" href="https://www.serf.io/">Serf</a> <a target="_blank" href="https://github.com/hashicorp/serf">library open-sourced by HashiCorp at https://github.com/hashicorp/serf</a> (writte in Golang). Serf is based on the <a target="_blank" href="https://consul.io/docs/architecture/gossip/">Gossip protocol</a> also used by the <a target="_blank" href="https://serf.apache.org/">Apache Serf library</a>, which is a modified version of the SWIM (Scalable Weakly-consistent Infection-style Process Group Membership) protocol.

   Serf provides for:

   * Events broadcasting to perform cross-datacenter requests based on Membership information.

   * Failure detection to gracefully handle loss of connectivity
   <br /><br />

   
   ### server.hcl

   <pre>node_name = "sec"
connect {
  enabled                            = true
  enable_mesh_gateway_wan_federation = true
}
primary_gateways = [
  "consul-primary-client:4431",
]
primary_gateways_interval = "5s"
retry_interval_wan        = "5s"
   </pre>

<a name="envconsul"></a>

### envconsul

   * https://github.com/hashicorp/envconsul
   <br /><br />

   The envconsul utility <strong>launches</strong> a subprocess after reading and seting environmental variables from data obtained from the Consul Agent. 

   The tool is inspired by <a target="_blank" href="https://pypi.python.org/pypi/envdir">envdir</a> and <a target="_blank" href="https://github.com/sorah/envchain">envchain</a>, but works on many major operating systems with no runtime requirements. It is also available via a Docker container for scheduled environments.

   envconsul is installed automatically when the Consul Agent is installed. 

1. For a full list of parameters:

   <pre><strong>envconsul -h</strong></pre>

   Watches values from Consul's K/V store and Vault secrets to set environment
   variables when the values are changed. It spawns a child process populated
   with the environment variables.

1. With a Consul agent running ...

1. To have envconsul connect to Consul and read data from its KV (key-value) store based on the KV prefix such as "my-app" specified :

   <pre><strong>envconsul -log-level debug -prefix my-app env</strong></pre>

   BLAH QUESTION: This outputs a list of all environment variables and their values.

1. The above will error out unless you've written data to that prefix, such as:

   <pre>consul kv put my-app/address 1.2.3.4
consul kv put my-app/port 80
consul kv put my-app/max_conns 5
   </pre>

   The response expected:

   <pre>Success! Data written to: my-app/address
Success! Data written to: my-app/port
Success! Data written to: my-app/max_conns
   </pre>

   NOTE: The command above launches a subprocess with environment variables using data from @hashicorp Consul and Vault.

1. Read secrets from Vault:

   envconsul -secret secret/my-app ./my-app


<a name="HCDiag"></a>

### Install HCDiag

1. HCDiag is open-sourced by HashiCorp at
   <a target="_blank" href="https://github.com/hashicorp/hcdiag">github.com/hashicorp/hcdiag</a>

1. Get hands-on tutorials from HashiCorp at:
   <a target="_blank" href="https://learn.hashicorp.com/search?query=hcdiag">learn.hashicorp.com/search?query=hcdiag</a>

1. Install for macOS <a target="_blank" href="https://github.com/hashicorp/homebrew-tap">from Homebrew</a>:

   <pre><strong>brew install hcdiag</strong></pre>

   <pre>==> Downloading https://releases.hashicorp.com/hcdiag/0.2.0/hcdiag_0.2.0_darwin_amd64.zip
==> Installing hcdiag from hashicorp/tap
==> Caveats
The darwin_arm64 architecture is not supported for this product
at this time, however we do plan to support this in the future. The
darwin_amd64 binary has been installed and may work in
compatibility mode, but it is not fully supported.
==> Summary
🍺  /opt/homebrew/Cellar/hcdiag/0.2.0: 5 files, 7.2MB, built in 2 seconds
==> Running `brew cleanup hcdiag`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
   </pre>

1. Verify installation by viewing the help:

   <pre><strong>hcdiag -h</strong></pre>

   <pre>Usage of hcdiag:
  -all
    	DEPRECATED: Run all available product diagnostics
  -config string
    	Path to HCL configuration file
  -consul
    	Run Consul diagnostics
  -dest string
    	Shorthand for -destination (default ".")
  -destination string
    	Path to the directory the bundle should be written in (default ".")
  -dryrun
    	Performing a dry run will display all commands without executing them
  -include-since 72h
    	Alias for -since, will be overridden if -since is also provided, usage examples: 72h, `25m`, `45s`, `120h1m90s` (default 72h0m0s)
  -includes value
    	files or directories to include (comma-separated, file-*-globbing available if 'wrapped-*-in-single-quotes')
    	e.g. '/var/log/consul-*,/var/log/nomad-*'
  -nomad
    	Run Nomad diagnostics
  -os string
    	Override operating system detection (default "auto")
  -serial
    	Run products in sequence rather than concurrently
  -since 72h
    	Collect information within this time. Takes a 'go-formatted' duration, usage examples: 72h, `25m`, `45s`, `120h1m90s` (default 72h0m0s)
  -terraform-ent
    	(Experimental) Run Terraform Enterprise diagnostics
  -vault
    	Run Vault diagnostics
  -version
    	Print the current version of hcdiag
   </pre>

1. Before submitting a Service ticket to HashiCorp, obtain diagnostics about the HashiCorp utility (originating from <a target="_blank" href="https://github.com/hashicorp/hcdiag">) while a HashiCorp server is running:

   <pre><strong>hcdiag -dryrun</strong></pre>

   <pre>[INFO]  hcdiag: Checking product availability
[INFO]  hcdiag: Gathering diagnostics
[INFO]  hcdiag: Running seekers for: product=host
[INFO]  hcdiag: would run: seeker=stats
   </pre>

1. Configure environment variables to provide the URL and tokens necessary, per <a target="_blank" href="https://support.hashicorp.com/hc/en-us/articles/4409084297875/">this doc</a>.

1. Specify the parameter to specify data desired for each product:

   * <tt>hcdiag -terraform-ent</tt> for <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/hcdiag-with-consul">for Consul</a>
   * <a target="_blank" href="https://learn.hashicorp.com/tutorials/vault/hcdiag-with-vault">Vault</a>
   * <a target="_blank" href="https://learn.hashicorp.com/tutorials/nomad/hcdiag-with-nomad">Nomad</a>
   * <tt>hcdiag -terraform-ent</tt> for <a target="_blank" href="https://learn.hashicorp.com/tutorials/terraform/hcdiag-with-tfe">Terraform Enterprise</a>.
   <br /><br />

   Warning: The hcdiag tool makes no attempt to obscure secrets or sensitive information. So inspect the bundle to ensure it contains only information that is appropriate to share. 

1. If you don't have a sample app, consider:
   <a target="_blank" href="https://github.com/hashicorp/petshop">github.com/hashicorp/petshop</a>

1. <a target="_blank" href="https://github.com/makrchristopherwest/hcdiag">Mark Christopher West's fork of HCDiag</a> and 
   <a target="_blank" href="https://github.com/hashicorp/translator">github.com/hashicorp/translator</a>


<hr />


<a name="consul-template"></a>

### Consul Templates

<a target="_blank" href="https://www.youtube.com/watch?v=kW0Vi3RvbvA&t=16m6s" title="by Thomas Kula in 2019">VIDEO</a>:
Consul-template is a separate binary/executable which reads a template file to substitute variables defined between \{\{ \}\} ("moustashe quotes") and replace each with values. An example:

   <pre>[client]
host={{ env "DB_HOSTNAME" }}
port={{ env "DB_PORT" }}
{{ with secret "database/cred/my-backend" }}
user={{ .Data.username }}
password={{ .Data.password }}
# Lease: {{ .LeaseID }}
{{ end }}
   </pre>

   <a target="_blank" href="https://medium.com/@serg-digitalis/cassandra-ssl-certificates-rotation-e4ff6fe86493">
   "Cassandra SSL certificates rotation"</a> shows how The consul-template daemon can query Vault to retrieve the SSL cert with two added bonuses: it will update the cert when it expires and it can run an arbitrary command (a script here) used to reload the certificates. The template definition (contents in the example) can be stored into different files but Sergio shows how to use it all in one as it reduces the number of config files that need to copy over to each database node.

   <a target="_blank" href="https://github.com/hashicorp/consul-template/blob/main/docs/templating-language.md#pkicert">Definition of the templating language</a>


<a name="RunForeground"></a>

### Start Consul Agent in forground

1. Use a text editor to customize file <tt>/etc/consul.d</tt> in .ini format:

   <pre>[unit]
Description=Consul
Requires=network-online.target
After=network-online.target
&nbsp;
[Service]
Restart=on-failure
ExecStart=/usr/local/bin/consul agent -config-dir="/etc/consul.d"
User=consul
   </pre>

1. If your Consul Agent is running locally:

   <pre><strong>consul agent -dev -node "$(hostname)" -config-dir="/etc/consul.d"</strong></pre>

   <tt><strong>-node "$(hostname)"</strong></tt> is specified for macOS users: Consul uses your hostname as the default node name. If your hostname contains periods, DNS queries to that node will not work with Consul. To avoid this, explicitly set the name of your node with an environment variable.
   

   <a name="RunBackground"></a>

   ### Start Consul Server in background (macOS)

   Alternately, referencing the environment created:

   Because <a href="#UseHashicorpTaps">HashiCorp's Homebrew tap was used to install</a>:

   <pre>brew services start hashicorp/tap/consul</pre>

   Alternately, on Linux:

   <pre><strong>/bin/start_consul.sh</strong></pre>

   Sample response:
   
   <pre>Starting HashiCorp Consul in Server Mode...
CMD: nohup consul agent -config-dir=/consul/config/ > /consul.out &
Log output will appear in consul.out...
nohup: redirecting stderr to stdout
Consul server startup complete.
   </pre>


   <a name="StartServer"></a>

1. Start Consul Server:

   <pre><strong>systemctl start consul</strong></pre>

   No message is returned unless there is an error.


   <a name="ConsulLeave"></a>

   ### Leave (Stop) Consul gracefully

   CAUTION: When operating as a server, a graceful leave is important to avoid causing a potential availability outage affecting the consensus protocol.

1. Gracefully stop the Consul by making it leave the Consul datacenter and shut down:

   <pre><strong>consul leave</strong></pre>

   QUESTION: No need to specify the node (like in start) because Gossip is supposed to propagate updated membership state across the cluster. That's "Discovery" at work.
   
   CAUTION: Leaving a server affects the Raft peer-set, which results in auto-reconfiguration of the cluster to have fewer servers.

   The command notifies other members that the agent left the datacenter. When an agent leaves, its local services running on the same node and their checks are removed from the catalog and Consul doesn't try to contact with that node again.
   
   Log entries in a sample response (without date/time stamps):
   <pre>[INFO]  agent.server: server starting leave
[INFO]  agent.server.serf.wan: serf: EventMemberLeave: wilsonmar-N2NYQJN46F.dc1 127.0.0.1
[INFO]  agent.server: Handled event for server in area: event=member-leave server=wilsonmar-N2NYQJN46F.dc1 area=wan
[INFO]  agent.router.manager: shutting down
[INFO]  agent.server.serf.lan: serf: EventMemberLeave: wilsonmar-N2NYQJN46F 127.0.0.1
[INFO]  agent.server: Removing LAN server: server="wilsonmar-N2NYQJN46F (Addr: tcp/127.0.0.1:8300) (DC: dc1)"
[WARN]  agent.server: deregistering self should be done by follower: name=wilsonmar-N2NYQJN46F partition=default
[DEBUG] agent.server.autopilot: will not remove server as a removal of a majority of servers is not safe: id=40fee474-cf41-1063-2790-c8ff2b14d4af
[INFO]  agent.server: Waiting to drain RPC traffic: drain_time=5s
[INFO]  agent: Requesting shutdown
[INFO]  agent.server: shutting down server
[DEBUG] agent.server.usage_metrics: usage metrics reporter shutting down
[INFO]  agent.leader: stopping routine: routine="federation state anti-entropy"
[INFO]  agent.leader: stopping routine: routine="federation state pruning"
[INFO]  agent.leader: stopping routine: routine="intermediate cert renew watch"
[INFO]  agent.leader: stopping routine: routine="CA root pruning"
[INFO]  agent.leader: stopping routine: routine="CA root expiration metric"
[INFO]  agent.leader: stopping routine: routine="CA signing expiration metric"
[INFO]  agent.leader: stopped routine: routine="intermediate cert renew watch"
[INFO]  agent.leader: stopped routine: routine="CA root expiration metric"
[INFO]  agent.leader: stopped routine: routine="CA signing expiration metric"
[ERROR] agent.server: error performing anti-entropy sync of federation state: error="context canceled"
[INFO]  agent.leader: stopped routine: routine="federation state anti-entropy"
[DEBUG] agent.server.autopilot: state update routine is now stopped
[INFO]  agent.leader: stopped routine: routine="CA root pruning"
[DEBUG] agent.server.autopilot: autopilot is now stopped
[INFO]  agent.leader: stopping routine: routine="federation state pruning"
[INFO]  agent.leader: stopped routine: routine="federation state pruning"
[INFO]  agent.server.autopilot: reconciliation now disabled
[INFO]  agent.router.manager: shutting down
[INFO]  agent: consul server down
[INFO]  agent: shutdown complete
[DEBUG] agent.http: Request finished: method=PUT url=/v1/agent/leave from=127.0.0.1:62886 latency=11.017448542s
[INFO]  agent: Stopping server: protocol=DNS address=127.0.0.1:8600 network=tcp
[INFO]  agent: Stopping server: protocol=DNS address=127.0.0.1:8600 network=udp
[INFO]  agent: Stopping server: address=127.0.0.1:8500 network=tcp protocol=http
[INFO]  agent: Waiting for endpoints to shut down
[INFO]  agent: Endpoints down
[INFO]  agent: Exit code: code=0
   </pre>

   Consul automatically tries to reconnect to a failed node, assuming that it may be unavailable because of a network partition, and that it may be coming back.



<hr />

<a name="ListNodes"></a>

### List Consul Nodes

1. Custom programs (written in Go, etc.) can communication with Consul using HTTP API calls defined in:

   <a target="_blank" href="https://www.consul.io/api">https://www.consul.io/api</a>

1. To list nodes in JSON using API:

   <pre><strong>curl "http://localhost:8500/v1/catalog/nodes"</strong></pre>

   <pre>[
  {
    "ID": "019063f6-9215-6f2c-c930-9e84600029da",
    "Node": "Judiths-MBP",
    "Address": "127.0.0.1",
    "Datacenter": "dc1",
    "TaggedAddresses": {
      "lan": "127.0.0.1",
      "wan": "127.0.0.1"
    },
    "Meta": {
      "consul-network-segment": ""
    },
    "CreateIndex": 9,
    "ModifyIndex": 10
  }
]
   </pre>

TODO: DNS
   <tt>-consul</tt> specifies installation of HashiCorp Consul agent.


<a name="PreparedQueries"></a>

#### Prepared Queries

   * https://www.consul.io/api-docs/query
   <br /><br />

BLAH: This feature is only available when using API calls (not CLI).

More complex DNS queries can be made using API calls than limiting entry points exposed by DNS. 

To get a set of healthy nodes which provide a given service:

1. Edit a prepared <strong>query template</strong> file in this format:

   <pre>{
  "Template": {
    "Type": "name_prefix_match",
    "Regexp": "^geo-db-(.*?)-([^\\-]+?)$",
    "RemoveEmptyTags": false
  }
}
   </pre>

   <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/automate-geo-failover">Automate Geo-Failover with Prepared Queries</a>:

1. Register a query template (named, for example "banking-app") using in-line:

   <pre>curl "${CONSUL_URL_WITH_PORT_VER}/query" \
    --request POST \
    --data @- << EOF
{
  "Name": "banking-app",
  "Service": {
    "Service": "banking-app",
    "Tags": ["v1.2.3"],
    "Failover": {
      "Datacenters": ["dc2", "dc3"]
    }
  }
}
EOF
   </pre>

   Alternately, instead of EOF, create a file:

   <pre>CONSUL_QUERY_FILENAME="payload.json"
   </pre>

1. Make the request by providing a valid Token:

   <pre><strong>curl --request PUT \
    --data "@${CONSUL_QUERY_FILENAME}" \
    "${CONSUL_URL_WITH_PORT_VER}/query/${CONSUL_AGENT_TOKEN}"
</strong></pre>

Queries are also <a target="_blank" href="https://www.consul.io/docs/security/acl/acl-rules#prepared-query-rules">used for ACL</a>

Query execution is subject to node/node_prefix and service/service_prefix policies.


<hr />


<a name="ChaosEngineering"></a>

## Chaos Engineering

Practicing use of the above should be part of your pre-production <a href="#ChaosEngineering">Chaos Engineering</a>/Incident Management process.

Failure modes:

   1. Failure of single app node (Consul should notice and send alert)

   1. Failure of a Consul Non-Voting server (if setup for performance)
   1. Failure of a Consul Follower server (triggers replacement)
   1. Failure of the Consul Leader server (triggering an election)

   1. Failure of an entire Consul cluster Availability Zone
   1. Failure of an entire Consul cluster Region

Degraded modes:

   1. Under-performing app node

   1. Under-performing Consul Leader server
   1. Under-performing Consul Follower server
   1. Under-performing Consul Non-voting server

   1. Under-performing transfer between Consul Availability Zones
   1. Under-performing WAN Gossip protocol transfer between Consul Regions

### Down for maintenance

1. To bring a node offline, enable maintenace mode:

   <pre><strong>consul maint -enable -server redis -reason "Server patching"
   </strong></pre>

   This action is logged, which should trigger an alert to the SOC.

1. To bring a node back online, disable maintenace mode:

   <pre><strong>consul maint -disable -server redis
   </strong></pre>   


<a name="Backup"></a>
<a name="Snapshots"></a>

### Backup Consul data to Snapshots

   * https://learn.hashicorp.com/tutorials/consul/get-started-create-datacenter
   * https://www.consul.io/commands/snapshot
   * https://www.consul.io/api-docs/snapshot
   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-backups"> Enterprise Academy: Backup and Restore</a>
   * <a target="_blank" href="https://www.udemy.com/course/hashicorp-consul/learn/lecture/24569084#questions">BK on Udemy</a>
   * <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=ef6f8fc1-d62c-49c6-8047-a1859a7ad57a">Ensuring Security in HashiCorp Consul</a> video class
   * https://bit.ly/consul-security-threat-model
   * Similar to <a target="_blank" href="https://www.youtube.com/watch?v=VrpLyYko17U">Vault & AWS Lambda: Towards a Sub Minute Recovery</a> by Kevin De Notariis
   <br /><br />

Consul keeps its data in memory (rather than in a database on a hard drive).

So data in a Consul agent has to be captured in complete point-in-time snapshots (gzipped tar file) of Consul's committed state. Other data also in the Snapshot include:

   * Sessions
   * <a href="#PreparedQueries">Prepared queries</a>
   <br /><br />

1. Specify the ACL Token (such as "12345678-1234-abcd-5678-1234567890ab") (also used for UI login):

   <pre><strong>export CONSUL_HTTP_TOKEN="${CONSUL_ACL_TOKEN}"
   </strong></pre>

1. PROTIP: Name files with a timestamp in UTC time zone, such as <tt>2022-05-16T03:10:15.386UTC.tgz</tt>

   <pre><strong>brew install coreutils
   CONSUL_BACKUP_FILENAME="$( gdate -u +'%Y-%m-%dT%H:%M:%S.%3N%Z' ).tgz"
   </strong></pre>   

   Snapshots are typically performed on the LEADER node, but when the Cluster has no Leader, a FOLLOWER can take it if the <tt>\-\-stale</tt> flag is specified.

1. Create the snapshot manually using the CLI, API, 

   <pre><strong>consul snapshot save "${CONSUL_BACKUP_FILENAME}"
   </strong></pre>

   <pre><strong>curl --header "X-Consul-Token: "${CONSUL_ACL_TOKEN}" \
   "${CONSUL_URL_WITH_PORT_VER}/snapshot  -o ${CONSUL_BACKUP_FILENAME}"
   </strong></pre>

1. View snapshots available on the local filesystem:

   <pre><strong>consul snapshot inspect</strong></pre>

1. PROTIP: It's more secure to transfer snapshots offsite, held under an account separate from day-to-day operations.

   * Amazon S3
   * Azure Blob Storage
   * Google Cloud Storage
   <br /><br />

   For example, define an S3 bucket. 
   PROTIP: Use different cloud service account to write and another to receive snapshots.
   

   <a name="SnapshotAgent"></a>

   ### Enterprise Snapshot Agent

   Enterprise-licensed users can run the Consul Snapshot Agent Service to automatically collect agents periodically.

1. Ensure that <a href="#EnterpriseLicense">an enterprise license is configured</a>.

1. Define the configuration file, such as this sample <tt>consul-snapshot.d</tt> file to take a snapshot every 30 minutes:

   <pre>{
  "snapshot_agent": {
     "http_addr": "127.0.0.1:8500",
     "token": "12345678-1234-abcd-5678-1234567890ab",
     "datacenter": "dc1",
     "snapshot": {
        "interval": "30m",
        "retain": 336,
        "deregister_after": "8h"
     },
   "aws_storage": {
      "s3_region": "us-east-1",
      "s3_bucket": "<em>my-consul-snapshots-bucket</em>"   
    }
  }
}
   </pre>

   In PRODUCTION, ACLs are enabled, so token need to be generated and included in the file.

   336 snapshots are retained, with the oldest automatically discarded.

   De-register the service if it's dead over 8 hours.

1. Run:

   <pre><strong>consul snapshot agent -config-dir=/etc/consul-snapshot.d
   </strong></pre>

   Registration is done automatically.

   https://www.consul.io/commands/snapshot/agent

   ### Service file

   A <a target="_blank" href="https://github.com/btkrausen/hashicorp/blob/master/consul/consulsnapshots.service">systemd agent configuration file</a> in Linux, such as:
   
   <tt>/etc/systemd/system/snapshot.service</tt>

   <pre>[unit]
Description="HashiCorp Consul Snapshot Agent"
Documentation=https://www.consul.io/
Requires=network-online.target
After=consul.service
ConditionFileNotEmpty=/etc/snapshot.d/shapshot.json
&nbsp;
[Service]
User=consul
Group=consul
ExecStart=/usr/local/bin/consul snapshot agent -config-dir=/etc/snapshot.d/
KillMode=process
Restart=on-failure
LimitNOFILE=65535
&nbsp;
[Install]
WantedBy=multi-user.target
   </pre>

   * https://unix.stackexchange.com/questions/506347/why-do-most-systemd-examples-contain-wantedby-multi-user-target
   <br /><br />

   ### Restore from Snapshot

   Snapshots are intended for full Disaster Recovery, not for selective restore back to a specific point in the past (like GitHub can do).
   
1. To restore to a fresh set of Consul servers. 

   <pre><strong>consul snapshot restore</strong></pre>

   CAUTION: A Consul server stops processing while performing a restore. You don't want it working anyway.` `1

   Alternately, using API:

   <pre><strong>curl --header "X-Consul-Token: "${CONSUL_ACL_TOKEN}" \
   --request PUT \
   --data-binary "@${CONSUL_BACKUP_FILENAME}" \
   "${CONSUL_URL_WITH_PORT_VER}/snapshot
   </strong></pre>

   PROTIP: There is no selective restore of data.

1. After each configuration change, make a backup copy of the file seed (version) file to establish quorum, at:

   <tt>raft/peers.json</tt> 

   That file contains information needed for manual Recovery:

   <pre>[
  {
    "id": "12345678-1234-abcd-5678-1234567890ab",
    "address": "10.1.0.1:8300",
    "non-voter": false
  }
  ...
]
   </pre>

   See https://learning.oreilly.com/library/view/consul-up-and/9781098106133/ch02.html#building-consensus-raft

   PROTIP: As per <a target="_blank" href="https://en.wikipedia.org/wiki/CAP_theorem">CAP Theorem</a>, Raft emphasizes Consistency (every read receives the most recent write value) over Availability.



<hr />

<a name="Intentions"></a>

## Service Graph Intentions

   The Consul GUI enables search for connections by name (instead of IP addresses) as well as specifying connections between specific <strong>services by name</strong> (instead of IP addresses):

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652266696/consul-intentions-gui-1614x1680_gm9diw.png"><img alt="Consul Intentions GUI" width="1614" height="1680" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652266696/consul-intentions-gui-1614x1680_gm9diw.png"></a>

   PROTIP: Working with service names using a GUI not only reduces hassle but also <strong>minimizes mistakes</strong>, which have dire Security consequences.

1. On the CLI, Deny the web server from talking to anything:

   <pre><strong>consul intention create -deny web '*'
   </strong></pre>

1. On the CLI, Allow the web server to talk to db (the database):

   <pre><strong>consul intention create -allow web db
   </strong></pre>

   Rules are set on the service itself, not on where they are implemented.


<a name="Services"></a>

## Services

   * https://www.consul.io/docs/discovery/services
   <br /><br />

   Consul discovers services which are setup to be discovered with a file on the service machine.
   
1. Edit the file:

   <pre>{
  "service": {
     "id": "unique-server-01",
     "name": "retail-web-1234567890",
     "token": "12345678-1234-abcd-5678-1234567890ab",
     "tags": ["v1.02","production"],
     "address": "10.1.2.2",
     "port": 80,
     "checks": [ {
        "args": ["/usr/local/bin/check_mem.py"],
        "interval": "30s"
     } ],
  }
}
   </pre>

   A check is needed for memory ("mem") because it's internal to the app's process.

   https://www.consul.io/docs/discovery/checks

1. Construct the file CONSUL_SVC_REGIS_FILE such as <tt>/etc/consul.d/redis.json</tt> (or hcl):

   <pre>{
  "service": {
     "name": "retail-web",
     "token": "12345678-1234-abcd-5678-1234567890ab",
     "port": 80,
     "check":  {
        "id": "http",
        "name": "web check",
        "tcp": "localhost:80",
        "interval": "5s",
        "timeout": "3s
     }
  }
}
   </pre>

1. A service instance is defined by a service name + service ID. 

   QUESTION: "web check"?

1. PROTIP: Provide Consul read permissions on the directory/file used above as a variable so the same CLI can be used in dev & prod (for less mistakes):

   <pre>CONSUL_SVC_REGIS_FILE="redis.hcl"</pre>

1. Define the Consul Registration Service:

   <pre>CONSUL_SVC_REGIS_FRONT="http://localhost:8500"</pre>

   Alternately, in production (for example):

   <pre>CONSUL_SVC_REGIS_FRONT="https://consul.example.com:8500}"
   </pre>

1. Register the service:

   <pre><strong>consul services register redis.hcl</strong></pre>

   Alternately, make an API call specifying -config-file name:

   <pre>curl -X PUT --data "@${CONSUL_SVC_REGIS_FILE}" \
   "${CONSUL_SVC_REGIS_FRONT}/v1/agent/service/register
   </pre>


1. Consul does not watch that file after loading, so changes to it after load must be reloaded using:

   <pre><strong>sysctl consul reload</strong></pre>

1. "Service discovery" finds available service instance addresses and ports.

1. TODO: Define default connection limits, for better security.

1. Consul API Gateway = 

   * <a target="_blank" href="https://www.youtube.com/watch?v=JtVDliGL3mE">VIDEO: Consul API Gateway with Jeff Apple, PM of API Gateway</a>
   * https://www.hashicorp.com/blog/announcing-hashicorp-consul-api-gateway
   * https://learn.hashicorp.com/tutorials/consul/kubernetes-api-gateway?in=consul/developer-mesh
   * https://github.com/hashicorp/consul-api-gateway = The Consul API Gateway is a dedicated ingress solution for intelligently routing traffic to applications running on a C…
   * <a target="_blank" href="https://www.youtube.com/watch?v=JtVDliGL3mE&list=PL81sUbsFNc5bQpQiONLrwSzP__l3EfoMX&index=3" title="Feb 15, 2022">Community Office Hours: Consul API Gateway & Chaos Engineering</a>
   * https://www.hashicorp.com/blog/consul-api-gateway-now-generally-available Feb 24 2022
   <br /><br />

1. QUESTION: Linux Security Model integrated into operating system, such as AppArmor, SELinux, Seccomp.

   See https://www.consul.io/docs/security/security-models/core

1. Consul <strong>load balances</strong> across instances.

1. Define memory variable:

   <pre>CONSUL_CONFIG_KIND="extra-config"</pre>

1. Define a CONSUL_CONFIG_FILE 

   <pre>config_entries {
  bootstrap {
     kind = "proxy-defaults"
     name = "global"
     config {
        local_connect_timeout_ms = 1000
        handshake_timeout_ms = 1000
     }
  }
}
bootstrap {
   kind = "service-defaults"
   name = "web"
   namespace = "default"
   protocol = "http"
}
   </pre>

1. consul config write "${CONSUL_CONFIG_FILE}"

1. Read back

   <pre><strong>consul config read -kind proxy-defaults -name web</strong></pre>




<a name="Nodes"></a>

## (Consul) Nodes (Health Checks)

Red x's identify Consul nodes which failed health checks.

   Moreover, Consul servers Gossip with each other about state changes.

   Consul can use several techniques to obtain health info: Docker, gRPC, TCP, TTL heartbeats, and Nagios-compatible scripts.

1. To perform a <strong>health check</strong> manually using an API call:

   <pre><strong>curl http://127.0.0.1:8500/v1/health/checks/my-service</strong></pre>

   Parse the JSON response:

   <pre>[
  {
    "Node": "foobar",
    "CheckID": "service:redis",
    "Name": "Service 'redis' check",
    "Status": "passing",
    "Notes": "",
    "Output": "",
    "ServiceID": "redis",
    "ServiceName": "redis",
      "ServiceTags": ["primary"]   
  }
]
   </pre>

<a name="ESM"></a>

### Consul External Services Monitor (ESM)

   * https://github.com/hashicorp/consul-esm
   * https://learn.hashicorp.com/tutorials/consul/service-registration-external-services
   <br /><br />

When a local Consul agent cannot be installed locally, such as in cloud-managed services or incompatible hardware,
to keep Consul's service catalog up to date, periodically poll those services
by installing the Consul ESM on ___. Such a health check is added to service registration like this:

   <pre>token "12345678-1234-abcd-5678-1234567890ab",
  check {
    id = "some-check"
    http = "http://localhost:9002/health",
    method = "GET",
    interval = "1s",
    timeout = "1s"
  }
   </pre>


<a name="ACL"></a>

## ACL (Access Control List) Operations

   * https://www.udemy.com/course/hashicorp-consul/learn/lecture/24724816#questions/17665170/
   <br /><br />

   ACLs define access granted through specific ports <strong>through firewalls</strong> (on Enterprise network traffic in "L3" segments). 
   
   ACLs are used to:
   - Add & Remove nodes to the datacenter
   - Add & Remove services
   - Discover services
   - Consul KV (CRUD) transactions
   - API/CLI operations to interact with the datacenter
   - Block Catalog Access
   <br /><br />

   Vault works the same way as this:
   An ACL Token encapsulates multiple policies, with each policy aggregating one or more rules.

   <a name="ACL-Vars"></a>

   SECURITY PROTIP: To reduce the "blast radius", create a rules.hcl file for each node. For each node, specifically name the node within each node's rules.hcl file.
   
   TODO: Use a templating utility to create a rules.hcl file containing a different node name for each node. 

1. Environment Variable names I use in scripts involving ACL:

   <tt>ACL_POLICY_FILE_NAME="some-service-policy.hcl"<br />
   ACL_POLICY_NAME="<em>some-service-policy</em>"<br />
   ACL_POLICY_DESC="Token"
   </tt>

1. Create the file defined in ACL_POLICY_FILE_NAME:

   <pre># Policy A
service "web" {
   policy = "read"
}
key-prefix "foo-path/" {
   policy = "write"
}
   </pre>

   <pre># Policy B
service "db" {
   policy = "deny"
}
node "" {
   policy = "read"
}
   </pre>

   Policy dispositions in rules include "read", "write", "read", "list".

   TODO: To define according to "Least Privilege" principles, provide "remove" permissions to a separate account than the account which performs "add".
   
1. Initiate the policy using the policy file:

   <pre><strong>consul acl policy create -name "${ACL_POLICY_NAME}" \
   -rules @"${ACL_POLICY_FILE_NAME}"
   </strong></pre>
   
1. Create the Token GUID from the policy created:

   <pre><strong>ACL_TOKEN=$( consul acl token create -description "${ACL_POLICY_DESC}" \
   -policy-name @"${ACL_POLICY_NAME}" )
   </strong></pre>
   
1. Add ACL_TOKEN value 

   <pre>service {
  name = "dashboard",
  port = 9002,
  token = "12345678-1234-abcd-5678-1234567890ab",
}
   </pre>


<hr />

<a name="TheHardWay"></a>

## D. In a single datacenter (with Kubernetes)

In <a target="_blank" href="https://www.youtube.com/c/HashiCorp">
HashiCorp's YouTube channel covering all their 8 products</a>:

<a target="_blank" href="https://www.linkedin.com/in/rosemarywang/">Rosemary Wang</a> (<a target="_blank" href="https://joatmon08.github.io">joatmon08.github.io</a>, Developer Advocate) with J. Cole Morrison hold fun <a target="_blank" href="https://www.twitch.tv/hashicorplive">hashicorplive Twitch parties</a> [about two hours each] to show how to learn Consul "the hard way" by setting it up from scratch, using code from <a target="_blank" href="https://github.com/jcolemorrison/getting-into-consul">
github.com/jcolemorrison/getting-into-consul</a>

<a name="GatewaysDiagram"></a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652502401/consul-getting-into-1920x1080_gku46e.png">
<img alt="Consul" width="1090" height="1080" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652502401/consul-getting-into-1920x1080_gku46e.png"></a>

Consul offers three types of Gateways in the data path to validate authenticity and traffic flows to enforce intentions between services: Enterprise Academy:

   * Service Mesh Gateway
   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-ingress-gateways-deployment">Enterprise Academy: Ingress Gateways</a>
   * Terminating Gateways
   <br /><br />

   * <a target="_blank" href="https://learn.hashicorp.com/tutorials/cloud/amazon-transit-gateway?in=vault/cloud-ops">DOC</a>: Transit gateway

   (https://play.instruqt.com/hashicorp/tracks/vault-advanced-data-protection-with-transform)

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-secure-deployment">Enterprise Academy: Deploy Consul Ingress Gateways</a> (Deploy an Ingress Gateway for Inbound Mesh Connectivity)
   <br /><br />


<a name="Kubernetes"></a>

## Kubernetes with Consul

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-kubernetes">Enterprise Academy: Running Consul on Kubernetes</a> (Learn how to install Consul on Kubernetes)
   <br /><br />




<a name="ServiceMesh"></a>

### Kubernetes with Service Mesh and Consul 

   * <a target="_blank" href="https://www.youtube.com/watch?v=C3N4i1cFIZ0&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk" title="May 9, 2022">VIDEO: "How Consul and Kubernetes work together"</a>
   * https://www.consul.io/docs/connect
   * https://www.udemy.com/course/hashicorp-consul/learn/lecture/24649092#questions
   * <a target="_blank" href="https://www.youtube.com/watch?v=AqgEXwzexn8&list=PL81sUbsFNc5ZfswcAV3KS0WFQmAYULkbq&index=6" title="Mar 31, 2021">VIDEO: "Zero Trust Security for Legacy Apps with Service Mesh"</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=Aq1uTozNajI" title="Oct 15, 2019">VIDEO: "Consul Service Mesh: Deep Dive"</a>
   <br /><br />

This Consul Enterprise feature is called the <a target="_blank" href="https://www.hashicorp.com/resources/introduction-consul-connect">"Consul Connect"</a>. <a target="_blank" href="https://www.youtube.com/watch?v=UpR-3GBTKsk">VIDEO</a>


<a name="EnvoyInstall"></a>

#### Envoy install

To ensure a specific version tested with the tutorial, instead of using <tt>brew install func-e envoy</tt>:

1. Install Envoy proxy (specifically version 1.20.1) using https://func-e.io/:

   <pre><strong>curl https://func-e.io/install.sh | bash -s -- -b /usr/local/bin
   </strong></pre>

   <pre>  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  9791  100  9791    0     0  17341      0 --:--:-- --:--:-- --:--:-- 17421
tetratelabs/func-e info checking GitHub for latest tag
tetratelabs/func-e info found version: 1.1.3 for v1.1.3/darwin/arm64
tetratelabs/func-e info installed /usr/local/bin/func-e
   </pre>

   If using ARM:

   <pre><strong>export FUNC_E_PLATFORM=darwin/amd64
func-e use 1.20.1
   </strong></pre>

   <pre>downloading https://archive.tetratelabs.io/envoy/download/v1.20.1/envoy-v1.20.1-darwin-amd64.tar.xz
   </pre>

1. Move Envoy from the <tt>.func-e</tt> folder to a path common in $PATH:

   <pre><strong>sudo mv ~/.func-e/versions/1.20.1/bin/envoy  /usr/local/bin/
   </strong></pre>

1. Verify if can be found in PATH:

   <pre><strong>envoy --version</strong></pre>

   <pre>envoy  version: ea23f47b27464794980c05ab290a3b73d801405e/1.20.1/Modified/RELEASE/BoringSSL
   </pre>

   NOTE: brew install envoy installs version 1.22.2 (at time of writing).


### Twitch Recordings

A series of recordings live on Twitch.tv by Developer Evangelists Rosemary Wang and J. Cole Morrison:

* <a target="_blank" href="https://www.youtube.com/watch?v=0H06VKvlTJQ&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=1" title="[1:47:59] Aug 9, 2021">Part 1: Security, Traffic Encryption, and ACLs</a> 

* <a target="_blank" href="https://www.youtube.com/watch?v=2PUMjq9-dyk&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=2" title="[2:20:50] Aug 23, 2021 ">Part 2: Configuring Service Discovery for Consul on AWS</a> 

* <a target="_blank" href="https://www.youtube.com/watch?v=_lIJg0c5les&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=3" title="[2:03:17] Sep 3, 2021">Part 3: Scaling, Outage Recovery, and Metrics for Consul on AWS</a> 

* <a target="_blank" href="https://www.youtube.com/watch?v=wIub6PZWRmY&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=4" title="[2:06:44] Sep 20, 2021">Part 4: Security, Traffic Encryption, and ACLs</a> 
   
   - secure <a href="#Gossip">Gossip communication</a> between Consul agents, 
   encrypt RPC calls between client and server with TLS, and begin setting up ACLs. 
   - Generate 32-bit encryption key. Apply key to agents. Rotate keys.
   <br /><br />

* <a target="_blank" href="https://www.youtube.com/watch?v=HB4u_C85HV8&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=5" title="[1:34:12] Oct 4, 2021">
Part 5: All About Access Control Lists</a> 

* <a target="_blank" href="https://www.youtube.com/watch?v=KpxlbRngc98&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=6" title="[2:00:09] Oct 21, 2021">
Part 6: Auto Configuration with Vault</a> 

* <a target="_blank" href="https://www.youtube.com/watch?v=yBgmsWBElZ0&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=7" title="[2:08:43] Nov 15, 2021">
Part 7: Enabling Consul Service Mesh</a> 

* <a target="_blank" href="https://www.youtube.com/watch?v=kGGu0m2StRA&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=8" title="[1:58:28] Nov 23, 2021">
Part 8: Traffic Shaping and Envoy Debugging</a> 

* <a target="_blank" href="https://www.youtube.com/watch?v=qqVJJh8cLVk&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=9" title="[1:51:03] Jan 18, 2022">
Part 9: Service Mesh Proxy Metrics</a> 

   - <a target="_blank" href="https://github.com/hashicorp/learn-consul-vms/blob/main/service-mesh/deploy/scripts/vagrant-linux-priv-prometheus.sh">Install</a>/config. prometheus.io static & dynamic scrape, exposing Envoy

* <a target="_blank" href="https://www.youtube.com/watch?v=eGunZqGNISM&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=10" title="[1:34:44] Mar 7, 2022">Part 10: Terminating & Ingress Gateways</a>
   - https://play.instruqt.com/HashiCorp-EA/tracks/consul-ingress-gateways-deployment

* Coming soon after re-edits.

* <a target="_blank" href="https://www.youtube.com/watch?v=Qw6Re5rRC4E&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=11" title="[2:18:49] Mar 17, 2022">Part 12: HCP Consul</a> 

* <a target="_blank" href="https://www.youtube.com/watch?v=YQMDRM2ujA4&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=12" title="[1:57:30] Jun 13, 2022">Part 13: Consul-Terraform-Sync</a> 

   - https://consul.io/docs/nia/configuration

<hr />
   
<a name="SidecarInject"></a>

## Sidecar proxy injection

   Consul comes with a Sidecar proxy, but also supports the Kubernetes Envoy proxy (from Lyft). (QUESTION: This means that migration to Consul can occur gradually?)

   You can use Helm but consul-k8s CLI is now the recommended way because it validates your environment and gives you much better error messages and helps with a clean installation

1. To register (inject) Consul as a Sidecar proxy, add this <strong>annotation</strong> in a Helm chart:

   <pre>apiVersion: v1
kind: Pod
metadata:
  name: cats
  annotations:
    "consul.hashicorp.com/connect-inject": "true"
spec:
  containers:
  - name: cats
    image: grove-mountain/cats:1.0.1
    ports:
    - containerPort: 8000
      name: http
   </pre> 

1. Yaml file:

   * <strong>helm-consul-values.yaml</strong> changes the default settings to give a name to the datacenter, specify the number of replicas, and <a href="#SidecarInject">enable Injection</a>
   * consul-helm
   * counting.yaml
   * dashboard.yaml
   <br /><br />

1. As <a target="_blank" href="https://github.com/hashicorp/consul-k8s/tree/main/charts/consul">instructed</a>, install Helm:

   <pre>brew install helm</pre>
   
1. Ensure you have access to the Consul Helm chart and you see the latest chart version listed. If you have previously added the HashiCorp Helm repository, run helm repo update.

   <pre>helm repo add hashicorp https://helm.releases.hashicorp.com</pre>

   <pre><strong>helm search repo hashicorp/consul</strong></pre>

   <pre>NAME                CHART VERSION   APP VERSION DESCRIPTION
 hashicorp/consul    0.35.0          1.10.3      Official HashiCorp Consul Chart
   </pre>

1. Install Consul with the default configuration which if not already present, creates a Consul Kubernetes namespace and install Consul on the dedicated namespace:

   <pre><strong>helm install consul hashicorp/consul --set global.name=consul --create-namespace -n consul</strong></pre>
 
    NAME: consul

   Alternately:

   <pre><strong>helm install consul -f helm-consul-values.yaml ./consul-helm
   </strong></pre>

1. On a new Terminal window:

   <pre><strong>kubectl port-forward svc/consul-tonsul-ui 8080:80</strong></pre>

   <pre>Forwarding from 127.0.0.1:8080 -> 8500
   Forwarding from [::1]:8080 -> 8500
   </pre>

1. Register with Consul agent (which doesn't start the Sidecar proxy):

   <pre>{
   "service": {
      "name": "front-end-sidecar",
      "port": "8080",
      "connect": {
         "sidecar_service": {}
      }
   }
}
   </pre>

1. In the hcl file defining each service, registering a Service Proxy:

   <pre>{
   "service": {
      "id": "someweb-01",
      "name": "front-end-sidecar",
      "tags": ["v1.02","production"],
      "address": "",
      "port": 80,
      "checks": [ {
         "sidecar_service": {
            "proxy": {
               "upstreams": [{
                  "destination_name": "db01"
               }
            ]
         }
      }
      "connect": [ {
         "sidecar_proxy": {
            "proxy": {
               "upstreams": [{
                  "destination_name": "db01"
                  "local_bind_port": "6000"
               }
            ]
         }
      }
   }
}
   </pre>

   CAUTION: Even though it's a "name", its value is used to match to register the service.

   https://www.udemy.com/course/hashicorp-consul/learn/lecture/24649144#questions

1. Start the Sidecar proxy process.

   ???

1. View the Consul dashboard:

   <pre>http://localhost:8080/ul/<em>datacenter</em>/services</pre>


   References about Kubernetes with Consul:
   * https://github.com/hashicorp/consul-k8s
   * https://learn.hashicorp.com/tutorials/consul/kubernetes-reference-architecture?in=consul/kubernetes-production
   * <a target="_blank" href="https://www.youtube.com/watch?v=mxeMdl0KvBI">VIDEO: Introduction to HashiCorp Consul</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=Qbo8Oc-pJwc">VIDEO: "What is the Crawl, Walk, Run Journey of Adopting Consul"</a>
   
   * <a target="_blank" href="https://www.youtube.com/watch?v=UHLr8UsHuDA">VIDEO: "HashiCorp Consul Introduction: What is a Service Mesh?"</a> by (former) Developer Advocate <a target="_blank" href="https://www.linkedin.com/in/nicolereneehubbard/">Nicole Hubbard</a> showing use of Shipyard and K3s.

   * <a target="_blank" href="https://www.youtube.com/watch?v=K93ZaUzwEWk">VIDEO: How does Consul work with Kubernetes and other workloads?</a>
   * https://platform9.com/blog/understanding-kubernetes-loadbalancer-vs-nodeport-vs-ingress/
   * https://learn.hashicorp.com/tutorials/terraform/multicloud-kubernetes?in=consul/kubernetes
   <br /><br />


<hr />


<a name="DNSQueries"></a>

## Service Discovery Registry DNS Queries

<a target="_blank" href="https://hashicorp.com/tutorials/consul/dns-forwarding">LEARN</a>:
In enviornment where Infosec limit DNS traffic to the default UDP port 53,
we setup dnsmasq or BIND forwarding from port 53 to 8600 because
we don't want to use root privileges requiredd to use ports below 1024.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652637715/consul-svc-regis-1584x1552_jnnu9g.png"><img alt="Consul Service Registry process" width="1584" height="1552" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652637715/consul-svc-regis-1584x1552_jnnu9g.png"></a>

Consul servers maintain a DNS "Services Registry" 

1. Each service (such as Redis cache in this example) is <strong>registered</strong>:

   <pre>service {
  name = "web",
  port = 9090,
  token = "12345678-1234-abcd-5678-1234567890ab",
  connect:{
    sidecar_service {
      port = 20000
      proxy {
         upstreams {
            destination_name = "payments"
            local_bind_address = "127.0.0.1"
            local_bind_port = 9091
         }
      }
    }
  }
}
   </pre>

   * Proxy Defaults to control proxy configuration
   * Service Defaults configures defaults for all instances of a service
   <br /><br />

   Discovery: Service Router -> Service Spliter -> Service Router
   * Service Router defines where to send Layer 7 traffic
   * Service Splitter defines how to divide traffic for a single HTTP route
   * Service Resolve matches service instances with Consul upstreams
   <br /><br />

   PROTIP: Include a health check stanza in the service registration, such as:

   <pre>service {
  ...
  "check": {
     "id": "mem-util",
     "name": "Memory utilitization",
     "script": "/usr/local/bin/check_mem.py",
     "interval": "10s"
  }
}
   </pre>

   Once registered, a service should appear as available within the Consul service registry.

Centralized ???


<a name="ESM"></a>

### Consul External Services Monitor (ESM)

When a local Consul agent cannot be installed locally, such as in cloud-managed services or incompatible hardware,
to keep Consul's service catalog up to date, periodically poll those services
by installing the Consul ESM on ___.

Such a health check added to service registration:

   <pre>token "12345678-1234-abcd-5678-1234567890ab",
  check {
    id = ""
  }
   </pre>


2. Discover DNS SRV record

   * https://www.wikiwand.com/en/SRV_record
   <br /><br />

   <pre><strong>curl \ http://localhost:8500/v1/catalog/services/redis</strong></pre>

   PROTIP: Consul cleints return only healthy nodes and services because it maintains the health status.

3. Each local Consul caches lookups for 3 days.

   Each entry can be tagged, such as 

   <i>tag.service.service.datacenter.domain</i>

   <tt>tag.service.service.datacenter.${DNS_TLD}</tt>

   db.redis.service.dc1.consul

   PROTIP: Consul is the #1 discovery tool with AWS Route53 (via delegation from resolver)

   Traditional DNS services ( bind, iptables, dnsmasq ) can be configured to forward requests with the DNS_TLD suffix ("consul"):

* NOTE: Consul can also received forwarded DNS requests from in below:

   <pre>server=/consul/127.0.0.1#8600</pre>

* To configure <strong>bind</strong> server 

   <pre>zone "consul" IN{
   type forward
   forward only
   forwarders { 127.0.0.1 port 8600 }
}
   </pre>

* To configure <strong>iptables</strong> in Linux servers:

   <pre><strong>iptables -t nat -A PREROUTING  -p tcp -m tcp --dport
iptables -t nat -A PREROUTING  -p udp -m upd --dport
iptables -t nat -A OUTPUT -d localhost -d tcp -m
iptables -t nat -A OUTPUT -d localhost -d upd -m
   </strong></pre>

   The response is <tt>53 -j REDIRECT \-\-to ports 8600</tt> 


   References about templating/generating JSON & YAML:
   * https://learnk8s.io/templating-yaml-with-code
   * Jsonnet
   * https://golangexample.com/a-tool-to-apply-variables-from-cli-env-json-toml-yaml-files-to-templates/
   * https://github.com/krakozaure/tmpl?ref=golangexample.com
   * https://wryun.github.io/rjsone/
   <br /><br />


<a name="HCPWorkflows"></a>

### Consul workflows beyond Kubernetes

   * <strong>Service Discovery</strong>: (kube-dns, kube-proxy) to identify and connect any service on any cloud or runtime. with Consul DNS
   
   * <a href="#ServiceConfiguration">Service Configuration</a>: (K8s Configmaps) but Consul also updates F5 and other load balancer rules, for dynamic configuration across distributed services (in milliseconds)
   
   * <strong>Segmentation</strong>: (Network Policy + Controller), providing <strong>network infrastructure automation</strong>

   <a target="_blank" href="https://www.youtube.com/watch?v=uzS-8ISHr3c">
   Service Discovery With Consul on Kubernetes</a>


   <a name="ServiceMesh"></a>

### Service Mesh

   <strong>Multi-service Service Mesh</strong>: secure service-to-service traffic with <strong>Mutual TLS certificates</strong>, plus enable progressive application delivery practices.
    - Application networking and security with identity-based authorization
    - L7 traffic management
    - Service-to-service encryption
    - Health checking to automatically remove services that fail health checks
   <br /><br />

   <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-service-mesh">Consul Enterprise Academy: Service Mesh</a>

   <a target="_blank" href="https://www.youtube.com/watch?v=hnuBVk1aJB8&list=PL81sUbsFNc5arDZYNn3i8N_I7ZeCe02ve&index=33">Deploying a Service Mesh at Enterprise Scale With Consul - HashiConf Global 2021</a>

Beyond:

   * Access Control
   * Billing
   * Networking
   * Identity
   * Resource Management
   <br /><br />



<hr />

<a name="MutualTLS"></a>

### Mutual TLS

   * https://www.consul.io/docs/security/encryption#rpc-encryption-with-tls
   * https://www.udemy.com/course/hashicorp-consul/learn/lecture/24723260#questions
   <br /><br />

> To encrypt traffic between nodes, each asset is given an encrypted identity in the form of a TLS certificate (in X.509, <a target="_blank" href="https://spiffe.io/">SPIFFE-compatible</a> format). Consul also provides a Proxy to enforce communications between nodes using "Mutual TLS" where each party exchange certificates with each other.

   Consul's <strong>auto-join provider</strong> enables nodes running outside of Kubernetes to join a Consul cluster running on Kubernetes API.

   Consul can <strong>auto-inject</strong> certifictes into Kubernetes Envoy Sidecars to secure communication traffic (within the Service Mesh).

   RECOMMENDED: Have Consul use HashiCorp Vault to generate dynamic x.509 certificates.

<a name="ConsulConnect"></a>

### Consul Connect (Service Mesh)

   * <a target="_blank" href="https://www.youtube.com/watch?v=8T8t4-hQY74&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk&index=10">VIDEO: "Introduction to HashiCorp Consul Connect"</a>
   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-connect">Instruqt: Getting started with Consul Connect</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=evrsEc-iyYs&list=PL81sUbsFNc5ZfswcAV3KS0WFQmAYULkbq&index=37&t=177s">A10 & HashiCorp Network Infrastructure Automation with Consul-Terraform-Sync</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=KbWqt-SJgwg&list=PL81sUbsFNc5ZfswcAV3KS0WFQmAYULkbq&index=63">Observability with HashiCorp Consul Connect (Service Mesh)</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=SZvcCdvMH58&list=PL81sUbsFNc5ZfswcAV3KS0WFQmAYULkbq&index=27">"Combining DevOps with PKI Compliance Using HashiCorp Vault & Consul"</a>
   <br /><br />

   Integration between Consul and Kubernetes is achieved by running Consul Service Mesh (aka Consul Connect) on Kubernetes:

   Catalog Sync: Sync Consul services into first-class Kubernetes services and vice versa. This enables Kubernetes to easily access external services and for non-Kubernetes nodes to easily discover and access Kubernetes services.

1. Have Vault act as the Certificate Authority (CA) for Consul Connect. On an already configured Vault, enable:

   <pre><strong>vault secrets enable pki
vault secrets enable consul
   </strong></pre>

1. A sample Consul configuration to use Vault for Connect:

   <pre>connect {
   enabled = true
   ca_provider = "vault"
     ca_config {
        address = "https://vault.example.com:8200"
        token = "s.1234567890abcdef12"
        root_pki_path = "connect_root"
        intermediate_pki_path = "connect_inter"
        leaf_cert_ttl = "24h"
        rotation_period = "2160h"
        intermediate_cert_ttl = "8760h"
        private_key_type = "rsa"
        private_key_bits = 2048
     }
}
   </pre>

1. Configure access to Consul to create tokens (using the admin token):

   <pre>vault write consul/config/access \
   address=https://consul:8200 \
   token=12345678-1234-abcd-5678-1234567890ab
   </pre>

1. Create a role for each permission set:

   <pre>vault write consul/roles/my-role policies=readonly
   </pre>

1. Generate credentials (lease-id, lease_duration 768h, lease_renewable true, token):

   <pre>vault read consul/creds/my-role</pre>

1. For each access, human users generate a new ACL token from Vault.

<hr />

<a name="Tcpflow"></a>

### Capturing Network Traffic

   * <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=2c4a39d1-7fbe-459b-b3b9-f6578e86fe25">explained</a>
   * https://formulae.brew.sh/formula/tcpflow
   * https://www.onworks.net/programs/tcpflow-online?amp=0
   * https://developer.apple.com/documentation/network/recording_a_packet_trace
   <br /><br />

   To prove whether communication over the network is encrypted.

1. On MacOS, install Tcpflow :

   <pre><strong>brew install tcpflow</strong></pre>

1. Construct command:

   <pre><strong>tcpflow -i eth0 -gc</strong></pre>

   <tt>-i eth0</tt> specifies the Ethernet network interface.

   <tt>-gc</tt> adds color to the output going to STDOUT (rather than to a file).

1. Issue a curl command.
1. Press control+C to stop collection.

<hr />

## Assist or Replaces Kubernetes

   * https://learn.hashicorp.com/tutorials/nomad/consul-service-mesh
   ^ https://www.consul.io/docs/k8s/installation/install
   <br /><br />
   
Consul combines with Nomad, Vault, and Terraform to provide a <a target="_blank" href="https://www.imaginarycloud.com/blog/nomad-vs-kubernetes/">full alternative to Kubernetes</a> for Docker container orchestration:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1653061618/hashi-nomad-core-functionalities-1000x298_njjx3k.jpg"><img alt="Hashicorp replace Kubernetes" width="1000" height="298" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1653061618/hashi-nomad-core-functionalities-1000x298_njjx3k.jpg"></a>

Nomad, by itself, is a cluster manager and task scheduler.

Nomad, like Kubernetes, orchestrates Docker containers. 
But Nomad <a target="_blank" href="https://blog.opstree.com/2021/05/25/running-non-containerized-microservices/">also orchestrates non-containerized apps</a>.
Nomad demonstrated its scalability in the <a target="_blank" href="https://www.hashicorp.com/c2m">Nomad's "C2M Challenge"</a>, which shows it versatile and lightweight to support over 2,000,000 tasks. 

The smallest units of deployment in Nomad are called “Tasks” -- the equivalent to “Pods” in Kubernetes. 

Kubernetes (as of publishing date) claims to support clusters up to 5,000 nodes, with 300,000 total containers, and no more than 150,000 pods.

Nomad, originally launched in 2015, as <a target="_blank" href="https://www.youtube.com/watch?v=rxo78Xbtrxw">part of Cloudflare's development environment</a> [<a target="_blank" href="https://www.hashicorp.com/resources/how-nomad-and-consul-are-being-used-at-cloudflare">transcript</a>] -- a company which routes 10% of the world's internet traffic) and a cornerstone of Roblox's and Pandora's scaling. 

Nomad may not be as commonly used as Kubernetes, but it already has a tremendous influence.


<hr />

<a name="K9sWay"></a>

## D. In a single datacenter using Kubernetes

1. The repo for using Consul on Kubernetes is at

   https://github.com/hashicorp/consul-k8s

1. Get the official Helm chart:

   git clone https://github.com/hashicorp/consul-k8s/tree/main/charts/consul

   (previously https://github.com/hashicorp/consul-helm.git)

1. Customize file <tt>values.yaml</tt> such as:

   <pre>global:
   enabled: true
   image: "consul:1.5.1"
   imagek8: "hashicorp/consul-k8s:0.8.1"
   domain: consul
   datacenter: primarydc
server:
  enabled: true
  replicas: 3
  bootstrapExpect: 3
   </pre>

   See https://www.consul.io/docs/k8s/helm

1. Identify the latest release for <tt>image: "consul</tt> at:

   https://github.com/hashicorp/consul/releases

   which was v1.12.0 on April 20, 2022.

1. STAR: Identify the latest release of <tt>imagek8: "hashicorp/consul-k8s:</tt> at:

   https://github.com/hashicorp/consul-k8s/releases

   which, at time of writing, was v0.44.0 (May 17, 2022).

   This is reflected at:
   https://artifacthub.io/packages/helm/hashicorp/consul

   See https://www.consul.io/docs/k8s/installation/install

1. Deploy using Helm:

   <pre><strong>helm install consul.helm -f values.yaml
   </strong></pre>


<hr />

<a name="Enmeshed"></a>

## E. In a single 6-node datacenter (survive loss of an Availability Zone)

### HA (High Availability)

   In order for a datacenter to withstand the sudden loss of a server within a single Availability Center or the loss of an entire Availability Zone, setup <strong>6 servers</strong> for best resilience plus performance under load:

   <a name="6servers"></a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652577580/consul-6-nodes-970x541_b2biuh.png"><img alt="Consul 6 nodes" width="970" height="541" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652577580/consul-6-nodes-970x541_b2biuh.png"></a>

   The yellow star in the <a href="#6servers">diagram above</a> marks the <strong>LEADER</strong> Consul server. The leader is responsible for ingesting new log entries of cluster changes, writing that to durable storage, and replicating to followers. 

   <strong>PROTIP: Only the LEADER processes requests.</strong> FOLLOWERs do not respond to request as their job is just to receive replication data (enjoy the food and stand by like a Prince). This architecture is similar to Vault's.
   
   <a name="Scalability"></a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652576658/consul-non-voting-1136x352_upxo3y.png"><img alt="Consul Non-voting for scale" width="1136" height="352" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652576658/consul-non-voting-1136x352_upxo3y.png"></a>

   IMPORTANT: For better <strong>scalability</strong>, use Consul's <a href="#Autopilot">Enterprise "Autopilot" mechanism</a> to setup <strong>"NON-VOTER"</strong> Consul server nodes to handle additional processing for higher performance under load. See https://play.instruqt.com/HashiCorp-EA/tracks/consul-autopilot

   The NON-VOTER is in Zone 2 because leadership may switch to different FOLLOWER servers over time.

   So keep the above in mind when using <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/get-started-create-datacenter?in=consul/getting-started">this page</a> to describe the Small and Large server type in each cloud.

   PROTIP: The recommended maximum number of Consul client nodes for a single datacenter is 5,000.
   
   <strong>CAUTION: A Consul cluster cannot operate in a single Availability Zone.</strong>

   Actually, <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/reference-architecture?in=well-architected-framework/zero-trust-networking">HashiCorp's Consul Enterprise Reference Architecture</a> for a single cluster is <strong>5 Consul server nodes</strong> across <strong>3 availability zones</strong>.

   <a name="RefArch"></a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208811/hashicor-consult-ref-arch-1033x401_veqcwx.png"><img alt="Consul Ref. Arch" width="1033" height="401" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208811/hashicor-consult-ref-arch-1033x401_veqcwx.png"></a>

   Within an Availability Zone, if a voting FOLLOWER becomes unavailable, a non-voting member in the same Availability Zone is promoted to a voting member:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652579825/consul-promote-in-az-550x342_a87mri.png"><img alt="Consul promote in AZ" width="550" height="342" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652579825/consul-promote-in-az-550x342_a87mri.png"></a>


### No Vault - Hard Way

If Vault is not used, do it the hard way:

1. Generate Gossip encryption key (a 32-byte AES GCM symmetric key that's base64-encoded).

1. Arrange for regular key rotation (using the Keyring built in Consul)

1. Install encryption key on each agent.

1. Review Gossip Telemetry output.


NOTE: To manage membership and broadcast messages to the cluster, 

Refer to the Serf documentation 


<hr />

<a name="MultiDatacenters"></a>

## F. For HA on multiple datacenters federated over WAN

   REMEMBER: Like Vault, Consul Datacenter federation is not a solution for data replication. There is no built-in replication between datacenters.
   <strong>consul-replicate</strong> is what replicates KV between datacenters. 

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-datacenter-federation">Enterprise Academy: Federate Multiple Datacenters</a> (Securly connect multiple Consul datacenters with ACL replication)
   * https://github.com/hashicorp/consul-k8s-wan-fed-vault-backend
   <br /><br />

   The Enterprise edition of Consul enables communication across datacenters using <strong>Federate Multiple Datacenters</strong> coordinated using <strong>WAN Gossip</strong> protocol.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208152/consul-federation-804x817_l953gc.png"><img alt="Consul Federation" width="804" height="817" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208152/consul-federation-804x817_l953gc.png"></a>

   * https://learn.hashicorp.com/tutorials/consul/federation-gossip-wan?in=consul/networking
   

### Setup Network Areas

Create compatible areas in each datacenter:

1. Define DATACENTER IDs

   <pre>DATACENTER1_ID="dc1"
DATACENTER2_ID="dc2"
   </pre>

1. Repeat for each DATACENTER ID value:

   <pre><strong>consul operator area create \
-peer-datacenter="${DATACENTER1_ID}"
   </strong></pre>

   <pre><strong>consul operator area create \
-peer-datacenter="${DATACENTER2_ID}"
   </strong></pre>

1. Run for the first datacenter with its DATACENTER_IP value:

   <pre><strong>consul operator area join \
-peer-datacenter="${DATACENTER1_ID}"  "${DATACENTER_IP}"
   </strong></pre>

   This establishes the handshake.


   <a name="consul-replicate"></a>

   ### consul-replicate

1. To perform cross-data-center Consul K/V replication, install a specific tag of the consul-replicate daemon to run continuosly:

   https://github.com/hashicorp/consul-replicate/tags

   The daemon consul-replicate integrates with Consul to manage application configuration from a central data center, with low-latency asynchronous replication to other data centers, thus avoiding the need for smart clients that would need to write to all data centers and queue writes to handle network failures.

   QUESTION: No changes since 2017, so doesn't work with TLS1.3, arm64, new Docker versions. Developer Seth Vargo is now at Google.

   https://learn.hashicorp.com/tutorials/consul/federation-gossip-wan?in=consul/networking

   ### Replicate ACL entries

   Cache ACLs for them to "ride out partitions".

1. Configure primary datacenter servers and clients

   <pre>{
  "datacenter": "dc1"
  "primary_datacenter": "dc1"
  "acl": {
    "enabled": true,
    "default_policy": "deny",
    "enable_token_persistence": true 
  }
}
   </pre>

1. Create ACL policy

   <pre>acl = "write"
operator = "write"
service_prefix "" {
  policy = "read"
  intentions = "read"
}
   </pre>

   REMEMBER: Intentions follow a top-down ruleset using Allow or Deny intentions. More specific rules are evaluated first.

1. Create ACL replication token

   <pre><strong>create acl token create \
  -description "ACL replication token" \
  -policy-name acl-replication  
   </strong></pre>

   Sample response:

   <pre>AccessorID:
SecretID:
Description:
Local: false
Create Time:
Policies:
   </pre>

1. Configure secondary datacenter agents (servers and clients):

   <pre>{
  "datacenter": "dc2"
  "primary_datacenter": "dc1"
  "acl": {
    "enabled": true,
    "default_policy": "deny",
    "enable_token_persistence": true<strong>,
    "enable_token_replication": true </strong>
  }
}
   </pre>

1. Apply replication token to servers in secondary datacenter:


<hr />

<a name="LicenseConfiguration"></a>

## Enterprise configuration
   
   From v1.10.0 on, a full <strong>license file</strong> must be defined in the server config file before installation:

   <pre>log_level     = "INFO"
server         = true
ui             = true
datacenter     = "us-east-1"
license_path   = "/opt/consul/consul.hclic"
client_addr    = "0.0.0.0"
bind_addr      = "10.1.4.11"
advertise_addr = "10.1.4.11"
advertise_addr_wan = "10.1.4.11"
   </pre>

TODO: Handle the license file as a secret.

   
   <pre><strong>license_path</strong> = "/etc/consul.d/consul.hclic"
   </pre>
   
   <pre><strong>advertise_addr</strong></pre>
   are reacheable outside the datacenter.

   Agent configurations have a different IP address and these settings to <strong>auto-join</strong> based on cloud (AWS) tags:

   <pre>data_dir  = "/opt/consul/data"
bootstrap_expect = 5
retry_join       = ["provider=aws region=us-east-1 tag_key=consul tag_value=true"]
retry_join_wan   = ["10.1.2.3","10.1.2.4"]
connect = {
   enabled = true
}
performance = {
   raft_multiplier = 1
}
   </pre>

   <tt>license_path</tt> - PROTIP: some use ".txt" or ".hcl" instead of ".hclic" to avoid the need to change text editor preferences based on file extension.

   <tt>retry_join</tt> specifies the cloud provider and other metadata for <strong>auto-discovery</strong> by other Consul agents.

   <tt>retry_join_wan</tt> specifies the IP address of each datacenter ingress.

   WAN encryption has its own encryption key.

   <tt>connect</tt> refers to <strong>Consul Connect</strong> (disabled by default for security).

   <tt>raft_multiplier = 1</tt> overrides for high-performance production usage the <a target="_blank" href="https://www.consul.io/docs/install/performance">default value 5 for dev usage</a>. This setting multiplies the time between failed leader detection and new leader election. Higher numbers extends the time (slower) to reduce leadership churn and associated unavailability.


   <a name="TLS-config"></a>

### TLS configuration

   Consul has root and intermediate CA capability built-in to create certificates.
   
   Vault can also be used.

   A CA is named "server.<em>datacenter</em>.<em>domain</em>".

   <a name="GenTLS.pem"></a>

1. Generate TLS .pem files.

   <a name="TLS_Ageny"></a>

1. Add "verify_" TLS encryption settings to the Consul Agent config file:

   <pre>...
verify_incoming = true
verify_outgoing = true
verify_server_hostname = true
&nbsp;
ca_file = "consul-agent-ca.pem"
cert_file = "dc1-server-consul-0.pem"
key_file = "dc1-server-consul-0-key.pem"
encrypt = "xxxxxxxx"
   </pre>


<hr />

<a name="Autopilot"></a>

### Enterprise Autopilot CLI Commands

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-autopilot">Enterprise Academy: Autopilot Upgrades</a> (Automate Upgrades with Consul Enterprise)
   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-datacenter-federation">Enterprise Academy: Federate Multiple Datacenters</a> (Securly connect multiple Consul datacenters with ACL replication)
   <br /><br />

   For <strong>write redundancy</strong> through automatic replication across several zones, add a tag "az" for "availability zone" to invoke the Enterprise feature "<a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/autopilot-datacenter-operations">Consul Autopilot</a>":

   <pre>autopilot = {
  redundancy_zone_tag = "az"
  min_quorum          = 5
   }
node_meta = {
   az = "Zone1"
}
   </pre>

   The Enterprise Autopilot feature performs automatic, operator-friendly management of Consul servers, including cleanup of dead servers, monitoring the state of the Raft cluster, automated upgrades, and stable server introduction.

   Autopilot enables <strong>Enterprise Redundancy Zones</strong> to improve resiliency and scaling of a Consul cluster. It can add "non-voting" servers which will be promoted to voting status in case of voting server failure.
   Unless during failure, Redundant zones do not participate in quorum, including leader election.

1. To get Autopilot configuration settings:

   <pre><strong>consul operator autopilot get-config</strong></pre>

   Sample response:

   <pre>CleanupDeadServers = true
LastContactThreshold = 200ms
MaxTrailingLogs = 250
MinQuorum = 0
ServerStabilizationTime = 10s
RedundancyZoneTag = ""
DisableUpgradeMigration = false
UpgradeVersionTag = ""
   </pre>

   Alternately, make an API call for JSON response:

   <pre><strong>curl http://127.0.0.1:8500/v1/operator/autopilot/configuration</strong></pre>

   <pre>{
  "CleanupDeadServers": true,
  "LastContactThreshold": "200ms",
  "MaxTrailingLogs": 250,
  "MinQuorum": 0,
  "ServerStabilizationTime": "10s",
  "RedundancyZoneTag": "",
  "DisableUpgradeMigration": false,
  "UpgradeVersionTag": "",
  "CreateIndex": 5,
  "ModifyIndex": 5
}
   </pre>

1. <a href="#StartServer">Start a Consul server</a>
1. See which Consul servers joined:

   <pre><strong>consul operator raft list-peers</strong></pre>

   <pre>Node             ID                                    Address            State     Voter  RaftProtocol
consul-server-1  12345678-1234-abcd-5678-1234567890ab  10.132.1.194:8300  leader    true   3
   </pre>

   After a quorum of servers is started (third new server), autopilot detects an equal number of old nodes vs. new nodes and <strong>promotes</strong> new servers as <strong>voters</strong>. This triggers a new leader election, and demotes the old nodes as non-voting members.



<hr />

<a name="MeshGateway"></a>

### Mesh Gateway

   * <a target="_blank" href="https://www.youtube.com/watch?v=KZIu33sbwQQ">VIDEO:  Connecting Services with Consul: Connect Deep-dive on Usage and Internals</a>
   <br /><br />

When performing cross-cloud service communication:

<img alt="multi-cluster-comm" width="907" width="266" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652142333/multi-cloud-comm-907x266_b3ceyf.png">

services avoid exposing themselves on public networks by using Mesh Gateways (built upon Envoy) which sit on the public internet to accept L4 traffice with mTLS. Mess Gateways perform NAT (Network Address Translation) to route traffic to endpoints in the private network.

Consul provides an easy SPOC (Single Point of Contact) to specify rules for communication instead of requesting Neworking to manually configure a rule in the firewall.

1. Generate GATEWAY_TOKEN value

1. Start the Mesh Gateway:

   <pre><strong>consul connect envoy \
   -gateway mesh
   -register \
   -service "mesh-gateway" \
   -address "${MESH_PRIVATE_ADDRESS}" \
   -wan-address "${MESH_WAN_ADDRESS}" \
   -admin-bind 127.0.0.1:0 \
   -token="${GATEWAY_TOKEN}"
   </strong></pre>

1. Configure one Consul client with access to each datacenter WAN link:

   - Envoy

   - Enable gRPC




   <a name="Telemetry"></a>

   ### Telemetry and capacity tests

   Adequate reserve capacity for each component are necessary to absorb sudden increases in activity.
   
   Alerts are necessary to request manual or automated intervention.

   Those alerts are based on <strong>metrics</strong> for each component described at <a target="_blank" href="https://www.consul.io/docs/agent/telemetry">https://www.consul.io/docs/agent/telemetry</a>

   Artificial loads need to be applied to ensure that alerts and interventions will actually occur when appropriate. Load testing exposes the correlation of metric values at various levels of load.
   All this is part of a robust <a href="#ChaosEngineering">Chaos Engineering</a> needed for pre-production.

> At scale, customers need to optimize for stability at the <a href="#Gossip">Gossip</a> layer.<a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/reference-architecture?in=well-architected-framework/zero-trust-networking">*</a>


## Manage from another Terminal

   <a name="members"></a>

1. At the Terminal within a Consul agent instance,<br />
   create another Terminal shell instance to interact with the Consul agent running

   <pre><strong>consul members</strong></pre>

   A sample successful response:

   <pre>Node         Address         Status  Type    Build  Protocol  DC   Partition Segment
Judiths-MBP  127.0.0.1:8301  alive   server  1.12.0  2         dc1  default &LT;all>
   </pre>

   PROTIP: The above command is only needed once to join a cluster. After that, agents Gossip with each other to propagate membership information with each other.

   This error response reflects that CLI commands are a wrapper for API calls:

   <pre>Error retrieving members: Get "http://127.0.0.1:8500/v1/agent/members?segment=_all": dial tcp 127.0.0.1:8500: connect: connection refused
   </pre>

   BTW, to join a WAN, it's

   <pre><strong>consul members -wan</strong></pre>

1. For more detail about Tags:

   <pre><strong>consul members -detailed</strong></pre>

   Sample response:

   <pre>Node                  Address         Status  Tags
wilsonmar-N2NYQJN46F  127.0.0.1:8301  alive   acls=0,ap=default,build=1.12.0:09a8cdb4,dc=dc1,ft_fs=1,ft_si=1,id=40fee474-cf41-1063-2790-c8ff2b14d4af,port=8300,raft_vsn=3,role=consul,segment=&LT;all>,vsn=2,vsn_max=3,vsn_min=2,wan_join_port=8302
   </pre>


   ### Rejoin existing server

   If a Consul server fails in a multi-server cluster, bring the server back online <strong>using the same IP address</strong>.

   <pre><strong>consul agent -bootstrap-expect=3 \
   -bind=192.172.2.4 -auto-rejoin=192.172.2.3
   </strong></pre>



<hr />

## Consul Tutorials from HashiCorp

Leader/Follower (instead of Master/Slave)

   https://learn.hashicorp.com/tutorials/cloud/get-started-consul?in=consul/cloud-get-started


<hr />

<a name="Integrations"></a>

## G. Integrations to legacy VMs, mainframes, etc.

   * https://medium.com/hashicorp-engineering/supercomputing-with-hashicorp-5c827dcb2db8
   <br /><br />

Use this to learn about configuring for integrating HashiCorp Consul to work across the entire Enteprise landscape of technologies (another major differentiator of HashiCorp Consul).

<a name="Multi-platform"></a>

### Multi-platform (VMWare, mainframe)

   <a target="_blank" href="https://www.youtube.com/watch?v=nZqAAjHI0c4&t=10m" title="Running Consul on Kubernetes and Beyond">VIDEO</a>:
   Many enterprises also have legacy applications running VMware or still in a mainframe. 
   
   That's where HashiCorp Consul comes in, with <a target="_blank" href="https://www.consul.io/use-cases/multi-platform-service-mesh">multi-platform/cloud</a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652200423/consult-multi-envoy-1734x972_ymgi7l.png"><img alt="Consult Multi-cloud Envoy" width="1734" height="972" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652200423/consult-multi-envoy-1734x972_ymgi7l.png"></a>

   <a target="_blank" href="https://www.youtube.com/watch?v=C3N4i1cFIZ0&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk" title="whiteboard by HashiCorp Co-Founder and CTO, Armon Dadgar May 9, 2022">VIDEO</a>: 
   <a target="_blank" href="https://wilsonmar.github.io/kubernetes/">Kubernetes</a> 
   was designed with features to address each, but Consul sychronizes across everal Kubernetes instances -- in different clouds -- and also sychronizes with Serverless, Cloud Foundry, OpenShift, <a href="#VMware">legacy VMs</a>, even mainframes. 

   <img alt="Consul multi-platform" width="373" height="271" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652569270/consul-multi-platforms-373x21_jpn1bj.png">

   Consul provides better security along with less toil (productivity) for both Kubernetes and legacy platforms, across several clouds.

   That's full enterprise capabilities.

> "Multi-platform and multi-cloud choose you, due to corporate mergers and acquisitions and capacity limits in some cloud regions"

You can see how Consul behaves on Power 9 (PPC) and IBM Z (S390x) "mainframe supercomputers" without the expense, <strong>emulate</strong> them with Hercules or QEMU on pure X86_64 Windows PC, Xeon Linux workstation and KVM but it can also be done on a Mac. Power9, ended up being much simpler than S390. 



### Using Vagrant

1. <a target="_blank" href="https://www.youtube.com/watch?v=nZqAAjHI0c4&t=11m34s" title="by HashiCorp Ambassador within Honeycomb.io Jason Harley @redmind">VIDEO</a>: Based on a Kubernetes 5-node cluster created using this Helm chart:

1. Install Vagrant and download the Vagrantfile 
   
   <pre>brew install vagrant  # Vagrant 2.2.19
curl -O https://github.com/hashicorp/consul/blog/master/demo/vagrant-cluster/Vagrantfile
   </pre>

   CAUTION: As of this writing, Vagrant does not work on Apple M (ARM) chipset on new macOS laptops.

   <tt>vagrant up</tt>

   SSH into each server: <tt>vagrant ssh n1</tt>

   <pre>helm install ./consul-helm -f ./consul-helm/demo.values.yaml --name consul</pre>

   1. <a href="InstallConsulBinary">Install Consul binary</a>
   2. Add Consul Connect to a Kube app
   3. Integrate legacy apps with Kubernetes
   <br /><br />

Kubernetes runs a sample "emojify" app which runs an NGNX website calling the "facebox" service API running a machine-learning model to add emoji images on the faces people in input photos (from <a target="_blank" href="https://www.honeycomb.io/resources/using-honeycomb-and-terraform-provider-with-hashicorp-thanks/?submissionGuid=3c622cca-7c53-4cb3-9449-2627a6302e44">Honeycomb.io</a>)

<img alt="Consul Emojify demo" width="2742" height="1420" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652180719/consul-emojify-payment_z4dd40.png">

"502 Bad Gateway" appears during deployment.

Connect to a Payment service outside Kubernetes.


<!--
<a name="Instruqt"></a>

### HashiCorp Instruqt (Hands-on) Labs

https://play.instruqt.com/hashicorp/tracks/consul-basics
Consul Basics

https://play.instruqt.com/hashicorp/tracks/consul-sandbox
Hands-On: Consul Sandbox

https://play.instruqt.com/hashicorp/tracks/consul-something-do-something
Consul something: Do Something

https://play.instruqt.com/hashicorp/tracks/consul-life-of-a-developer
Consul: Life of a Developer

https://play.instruqt.com/hashicorp/tracks/consul-life-of-a-developer-dev
Consul: Life of a Developer dev

https://play.instruqt.com/hashicorp/tracks/zero-trust-hashicups
Zero Trust demo with Vault, Consul and Waypoint

https://play.instruqt.com/hashicorp/tracks/att-consul-hcs-pov
att-consul-hcs-pov

https://www.youtube.com/watch?v=6g7I3-OfhGQ
Getting started with HashiCorp Consul Service (HCS) and Azure Kubernetes Service (AKS)


https://play.instruqt.com/hashicorp/tracks/tfe-custom-worker
Customizing Terraform Build Worker

https://play.instruqt.com/hashicorp/tracks/app-migration
App Migration with Service Mesh

https://play.instruqt.com/hashicorp/tracks/consul-service-discovery-health-monitoring
Consul: Service Discovery and Health Monitoring

https://play.instruqt.com/hashicorp/tracks/consul-multicloud-service-discovery
Consul - Cloud Service Discovery


https://play.instruqt.com/hashicorp/tracks/consul-autopilot
Consul Enterprise Academy: Autopilot Upgrades

https://play.instruqt.com/hashicorp/tracks/consul-gateways-deployment
Consul Enterprise Academy: Deploy Consul Gateways

https://play.instruqt.com/hashicorp/tracks/consul-backups
Consul Enterprise Academy: Backup and Restore

https://play.instruqt.com/hashicorp/tracks/consul-ingress-gateways-deployment
Consul Enterprise Academy: Deploy Consul Ingress Gateways

https://play.instruqt.com/hashicorp/tracks/consul-ent-basics
Consul Enterprise Academy: Deploy a Consul Cluster

https://play.instruqt.com/hashicorp/tracks/consul-datacenter-federation
Consul Enterprise Academy: Federate Multiple Datacenters

https://play.instruqt.com/hashicorp/tracks/consul-kubernetes
Consul Enterprise Academy: Running Consul on Kubernetes

https://play.instruqt.com/hashicorp/tracks/consul-secure-deployment
Consul Enterprise Academy: Secure your Consul Deployment

https://play.instruqt.com/hashicorp/tracks/consul-service-discovery
Consul Enterprise Academy: Service Discovery




https://play.instruqt.com/hashicorp/tracks/consul-prepared-query
Consul Prepared Query

https://play.instruqt.com/hashicorp/tracks/consul-service-discovery-and-health-monitoring
Consul Service Discovery and Health Monitoring

https://play.instruqt.com/hashicorp/tracks/consul-aws-ecs-poc-shutterfly
Consul on AWS - Shutterfly POC

https://play.instruqt.com/hashicorp/tracks/consul-aws-ecs-poc-shutterfly-acl
Consul on AWS - Shutterfly POC - ACL


https://play.instruqt.com/hashicorp/tracks/consul-on-azure
Consul on Azure

https://play.instruqt.com/hashicorp/tracks/consul-connect
Getting started with Consul Connect

https://play.instruqt.com/hashicorp/tracks/multi-cloud-service-networking-with-consul-dev
Multi Cloud Service Networking with Consul Dev

https://play.instruqt.com/hashicorp/tracks/multi-cloud-service-networking-with-consul-jp
Multi Cloud Service Networking with Consul (Japanese)

https://play.instruqt.com/hashicorp/tracks/multi-cloud-service-networking-with-consul-dev-version
Multi Cloud Service Networking with Consul Dev Version

https://play.instruqt.com/hashicorp/tracks/hrs-03172021-test-multi-cloud-service-networking-with-consul
hrs-03172021-test-Multi Cloud Service Networking with Consul

https://play.instruqt.com/hashicorp/tracks/2020-hackathon-consul-sd
2020-Hackathon-Consul-SD

https://play.instruqt.com/hashicorp/tracks/service-mesh-with-consul-jona-version
jona-version-Service Mesh with Consul-jona-version

-->

<hr />

<a name="HTTP-headers"></a>

## Customize HTTP Response Headers

1. Ask whether you app should have additional security headers such as 
   <tt>X-XSS-Protection</tt> for API responses.


## Collaborations

Ambassador's Edge Stack (AES) for service discovery.


## Competitors

See https://www.consul.io/docs/intro/vs

> "[23:07] "Consul Connect is probably the most mature simply because of Consul. Consul is a decade of polished technology, battle-tested in each production environment. It's a safe choice in terms of stability and features." -- <a target="_blank" href="https://www.youtube.com/watch?v=TAlpaC_NSUw&t=23m7s">The Best Service Mesh: Linkerd vs Kuma vs Istio vs <a href="#ConsulConnect">Consul Connect</a> comparison + Cilium and OSM on top</a>

Service Discovery: Hystrix, Apache, Eureka, SkyDNS

<a target="_blank" href="https://www.hashicorp.com/resources/tide-self-service-service-mesh-with-consul">
CASE STUDY: Self-Service Service Mesh With HCP Consul</a> Tide abandoned its adoption of <strong>AWS AppMesh</strong> in favor of HashiCorp Consul, making the transition in only 6 weeks with no downtime and no big-bang migration.

Istio

GitLab

https://konghq.com/kong-mesh

Cisco

H3C

ManageEngine OpManager

Extreme Networks, Inc

Arista Networks

Big Cloud Fabric

Equinix Performance Hub

HPE Synergy

NSX for Horizon

OpenManage Network Manager

CenturyLink

Huawei Cloud Fabric

Aricent

Cloudscaling

Cumulus

HostDime

ArgoCD

Compare against these Reference architecture diagram:

* <a target="_blank" href="https://d1.awsstatic.com/architecture-diagrams/ArchitectureDiagrams/gateway-load-balancer-inspection-east-west-ra.pdf?did=wp_card&trk=wp_card">Architecture for Gateway Load Balancer – East/West Inspection</a>
Use Gateway Load Balancer and Transit Gateway to create a highly available and scalable bump-in-the-wire solution for East/West inspection.
* https://learn.hashicorp.com/tutorials/cloud/amazon-transit-gateway

* <a target="_blank" href="https://d1.awsstatic.com/architecture-diagrams/ArchitectureDiagrams/GWLB-centralized-egress-inspection-ra.pdf?did=wp_card&trk=wp_card">Architecture for Gateway Load Balancer – Centralized Egress Inspection</a>
Use Gateway Load Balancer to build highly available and scalable centralized egress environments with traffic inspection.

* <a target="_blank" href="https://aws.amazon.com/solutions/implementations/aws-perspective/">Workload Discovery on AWS</a> is a tool to visualize AWS Cloud workloads. Use Workload Discovery on AWS to build, customize, and share detailed architecture diagrams of your workloads based on live data from AWS.  https://www.cloudcraft.co/
or https://www.lucidchart.com/blog/how-to-build-aws-architecture-diagrams

## References

https://www.hashicorp.com/blog/consul-1-12-hardens-security-on-kubernetes-with-vault?

https://www.pagerduty.com/docs/guides/consul-integration-guide

<a target="_blank" href="https://www.youtube.com/watch?v=7VtZEZAi6qU&t=14s">
Simplifying Infrastructure and Network Automation with HashiCorp (Consul and Nomad) and Traefik</a>

<a target="_blank" href="https://www.youtube.com/watch?v=kCAk_LXmGMg" title="May 10, 2022">VIDEO: 
"Community Office Hours: HashiCorp Consul on AWS ECS"</a> by Rosemary Wong and Luke Kysow

<a target="_blank" href="https://www.youtube.com/watch?v=r8y3T_tkwbY" title="Feb 28, 2022">VIDEO:
"Service Mesh and Your Legacy Apps: Connecting to Kubernetes with Consul"</a> by Marc LeBlanc (with Arctiq)

<a target="_blank" href="https://medium.com/velotio-perspectives/a-practical-guide-to-hashicorp-consul-part-1-5ee778a7fcf4">"A Practical Guide to HashiCorp Consul — Part 1
"</a> by Velotio Technologies

https://thenewstack.io/3-consul-service-mesh-myths-busted/

https://www.youtube.com/watch?v=UHwoEGSfDlc&list=PL81sUbsFNc5ZgO3FpSLKNRIIvCBvqm-JA&index=33
The Meshery Adapter for HashiCorp Consul

https://webinars.devops.com/getting-hashicorp-terraform-into-production
(on Azure) by Mike Tharpe with TechStrong

https://github.com/alvin-huang/consul-kv-github-action
GitHub Action to pull a value from Consul KV

https://www.hashicorp.com/resources/unboxing-service-mesh-interface-smi-spec-consul-kubernetes

<a target="_blank" href="https://learning.oreilly.com/library/view/hashicorp-infrastructure-automation/9781800565975/">BOOK: "HashiCorp Infrastructure Automation Certification Guide"</a>by Ravi Mishra

<a target="_blank" href="https://learning.oreilly.com/library/view/hashicorp-infrastructure-automation/9781800565975/" title="Jan 2020">Packt BOOK: "Full Stack Development with JHipster - Second Edition"</a> has a <a target="_blank" href="https://learning.oreilly.com/library/view/full-stack-development/9781838824983/46bcf4ff-3498-4bea-b998-d117b6fe6a01.xhtml">section on</a> management of a full-featured sample Java Spring app using Consul instead of the default Eureka (JHipster Registry) which only supports Spring Boot. The author says The main advantages of using Consul are:

   * It has a lower memory footprint.
   * It can be used with services that are written in any programming language.
   * It focuses on consistency rather than availability.

"Consul also provides service discovery, failure detection, multi-datacenter configuration, and key-value storage."

<a target="_blank" href="https://www.youtube.com/watch?v=Z4wkTDdjWBY" title="Oct 21, 2019">VIDEO: 
"HashiCorp Consul: Service Networking Made Easy"</a>


<a name="ServiceConfiguration">

### Service Configuration

REMEMBER: There is a striction on each KV store object size of <strong>512 KB</strong>.

REMEMBER: Unlike Vault which uses slashes as folders within a hierarchial path, Consul treats slashes as any other chacter in a string.


<hr />

## References

It's amazing to me that much of Consul was described by Armon Dadgar <a target="_blank" href="https://www.infoq.com/presentations/consul/">in this video at the March 7, 2014 qconsf.com</a> (<a target="_blank" href="https://www.slideshare.net/InfoQ/consul-serviceoriented-at-scale">Slide deck here</a>).

<a target="_blank" href="https://www.slideshare.net/richardhightower/consul-46378821">"Consul: Microservice Enabling Microservices and Reactive Programming"</a> Mar. 27, 2015 by Rick Hightower provides a concise yet deep description of Consul:

   <ul>Consul is a service discovery system that provides a microservice style interface to services, service topology and service health.

With service discovery you can look up services which are organized in the topology of your datacenters. Consul uses client agents and RAFT to provide a consistent view of services. Consul provides a consistent view of configuration as well also using RAFT. Consul provides a microservice interface to a replicated view of your service topology and its configuration. Consul can monitor and change services topology based on health of individual nodes.
Consul provides scalable distributed health checks. Consul only does minimal datacenter to datacenter communication so each datacenter has its own Consul cluster. Consul provides a domain model for managing topology of datacenters, server nodes, and services running on server nodes along with their configuration and current health status.
Consul is like combining the features of a DNS server plus Consistent Key/Value Store like etcd plus features of ZooKeeper for service discovery, and health monitoring like Nagios but all rolled up into a consistent system. Essentially, Consul is all the bits you need to have a coherent domain service model available to provide service discovery, health and replicated config, service topology and health status. Consul also provides a nice REST interface and Web UI to see your service topology and distributed service config.
Consul organizes your services in a Catalog called the Service Catalog and then provides a DNS and REST/HTTP/JSON interface to it.
To use Consul you start up an agent process. The Consul agent process is a long running daemon on every member of Consul cluster. The agent process can be run in server mode or client mode. Consul agent clients would run on every physical server or OS virtual machine (if that makes more sense). Client runs on server hosting services. The clients use gossip and RPC calls to stay in sync with Consul.

A client, consul agent running in client mode, forwards request to a server, consul agent running in server mode. Clients are mostly stateless. The client does LAN gossip to the server nodes to communicate changes.
A server, consul agent running in server mode, is like a client agent but with more tasks. The consul servers use the RAFT quorum mechanism to see who is the leader. The consul servers maintain cluster state like the Service Catalog. The leader manages a consistent view of config key/value pairs, and service health and topology. Consul servers also handle WAN gossip to other datacenters. Consul server nodes forwards queries to leader, and forward queries to other datacenters.
A Datacenter is fairly obvious. It is anything that allows for fast communication between nodes, with as few or no hops, little or no routing, and in short: high speed communication. This could be an Amazon EC2 availability zone, a networking environment like a subnet, or any private, low latency, high
   </ul>

<a target="_blank" href="https://www.youtube.com/watch?v=gRV4sAD0YrU" title="At HashiConf 2017 - 41:59">VIDEO: "Consul and Complex Networks"</a> by James Phillips, Consul Lead at HashiCorp</a> (<a target="_blank" href="https://www.slideshare.net/slackpad/consul-and-complex-networks">Slidedeck</a>)

   References on Consul:
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/hashicorp-consul-getting-started-cert/table-of-contents" title="3h 54m Released 9 May 2022 at Consul v1.11.4">Video course on Pluralsight: "Getting Started with HashiCorp Consul"</a> by <a target="_blank" href="https://www.linkedin.com/in/weshigbee/">Wes Higbee</a> refercing code at https://github.com/g0t4/course2-consul-gs which uses <tt>docker compose</tt> referencing Docker images at https://hub.docker.com/washigbee
   * <a target="_blank" href="https://www.hashicorp.com/resources/consul-eliminates-load-balancers">VIDEO: "Consul eliminates load balancers"</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=EPcmgr04twM" title="by ex-HashiCorp Nicole Hubbard Apr 24, 2020">VIDEO: "Using Consul for Network Observability & Health Monitoring"</a> referencing <a target="_blank" href="https://github.com/hashicorp/consul-demo-tracking/datadog">this repo</a>

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/hashicorp-consul-ensuring-security/table-of-contents" title="27 Feb 2022, 1h 27m">Pluralsight "Ensuring Security in HashiCorp Consul"</a> by <a target="_blank" href="https://www.linkedin.com/in/chris-james-green/">Chris Green</a> (direct-root.com)

* <a target="_blank" href="https://www.youtube.com/watch?v=nZqAAjHI0c4">VIDEO: "Running Consul on Kubernetes and Beyond"</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=cmntZnE1qZU">Amplify Your Service Mesh Without Compromising Zero Trust Security"</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=RrK89J_pzbk">VIDEO: "Multi Tenancy with Admin Partitions on HCP Consul"</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=uBfUN6PemIk">VIDEO: "Provision to Production with Terraform Enterprise"</a>

* <a target="_blank" href="https://twitter.com/i/lists/1514979955482017802" title="Jun 27, 2019">VIDEO: "A Closer Look at HashiCorp Consul"</a> by Janakiram MSV



<hr />

<a name="CorporateSocial"></a>

## HashiCorp Corporate Social 

Twitter: @hashicorp 

Ambassadors (<a target="_blank" href="https://www.hashicorp.com/blog/hashicorp-ambassador-call-for-nominations">first announced March, 2020</a>)

LinkedIn: https://www.linkedin.com/company/hashicorp

Facebook: https://www.facebook.com/HashiCorp


   * <a target="_blank" href="https://www.youtube.com/watch?v=bEFILWrRJJ4" title="Oct 15, 2019">VIDEO: Demystifying Service Mesh</a> by <a target="_blank" href="https://www.linkedin.com/in/stephen-wilson-9420617/">Stephen Wilson (Chief Enablement Architect)</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=bEFILWrRjj4">VIDEO: Consul Service Mesh - Deep Dive</a>
