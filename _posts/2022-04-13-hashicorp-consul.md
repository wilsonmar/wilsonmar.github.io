---
layout: post
date: "2022-05-26"
file: "hashicorp-consul"
title: "HashiCorp Consul"
excerpt: "Get an enterprise-grade Service Mesh mTLS and health-based load-balancing APIs in AWS, Azure, GCP, and other clouds, as well as legacy VMs, even mainframes"
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

Here are notes while I'm learning about using <strong>automation</strong>, my attampt to be succinct and <strong>logically sequenced</strong>. All without sales generalizations. All in this one single big page for easy search. This is not a replacement for you going through professionally developed trainings.

> Consul is "a multi-cloud service networking platform to connect and secure any service across any runtime platform and public or private cloud".<a target="_blank" href="https://www.youtube.com/watch?v=Aq1uTozNajI" title="HashiConf Oct 15 2019">*</a><a target="_blank" href="https://www.hashicorp.com/resources/consul-service-mesh-deep-dive">*</a>

{% include whatever.html %}


<a name="Enterprise"></a>
   
## Part of an Enterprise suite

Consul is part of the HashiCorp "Cloud Operating Model" product line which provides modern mechanisms for better security and efficiency in access and communication processes:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652140723/hashi-oss-prods-3130x1306_rso9yn.png"><img alt="hashi-oss-prods-3130x1306" width="3130" height="1306" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652140723/hashi-oss-prods-3130x1306_rso9yn.png"></a>

   Additional (teamwork) features are unlocked with licensing of an "Enterprise" Consul installed by customer-(self)-managed organizations.
   
The Enterprise edition of Consul enables multi-cloud, multi-platform, and multi-tenancy by the creation of Admin Partititions, each with its own Governance and Policies. Such segregation diminishing the "blast radius" from loss of a specific partition.

   * <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/amazon-ecs-admin-partitions">Consul on ECS & Admin Partitions Learn Guide</a>
   <br /><br />

## To Serve Microservices

   To build a fast and reliable system in the cloud today, enterprises architect systems using distributed <strong>microservices</strong> instead of monolithic architectures.

   > "Microservices is the most popular architectural approach today. It's extremely effective. It's the approach used by many of the most successful companies in the world, particularly the big web companies." --<a target="_blank" href="https://www.youtube.com/watch?v=zzMLg3Ys5vI" title="Oct 28, 2020">Dave Farley</a>

   Microservices seem like a good idea because:
   * <strong>Ephemeral services</strong> enable each service to move and scale independently (reduce dev teams waiting for each other)
   * That simplifies unit testing of individual services
   * That increases agility
   * Greater operational efficiency
   <br /><br />



<a name="ZeroTrust"></a>

## Zero Trust (Defense in Depth)

<a target="_blank" href="https://www.youtube.com/watch?v=aE_on5mZQoQ&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk&index=21" titile="What are the 5 Marks of a Hybrid Cloud Operating Model? Jan 24, 2020">VIDEO</a>: 
In <a target="_blank" href="https://wilsonmar.github.io/soc2">SOC2</a>, ISO 27xxx, and other such infosec filings, companies using HashiCorp can describe their systems with these mechanisms within the "CIA Triad":

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652759151/zero-trust-triad-3024x1432_hdhcxj.png"><img alt="Zero-Trust CIA Triad" width="3024" height="1432" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652759151/zero-trust-triad-3024x1432_hdhcxj.png"></a>

   * <a href="#MutualTLS">Mutually authenticated</a> (server and client certificates)
   * Identity-driven authentication ("<a href="#Intentions">Intentions</a>" by name instead of by IP address)
   * Encrypted in transit and at rest (baked into app lifecycle via CI/CD automation)

   * Immutable deployments (no live patching to "cattle")
   * Time-bound encrypted tokens authorizing each request instead of long-lived static secrets to be hacked)

   * Audited & Logged (for SOC to do forensics)
   * IaC CI/CD Automation (processes have Security and Repeatability baked-in, less toil)
   * Change Management using version control such as GitHub
   <br /><br />


<a name="ConsulStories"></a>

## Why Consul?

<a target="_blank" href="https://www.hashicorp.com/resources/consul-eliminates-load-balancers">VIDEO</a>:  
Here are the Agile-style stories requesting use of HashiCorp Consul: PROTIP:

1. As a Developer, when new services come online <strong>obtain their IP addresses automatically</strong> rather than manually creating a ticket for manual action by Networking people.

2. As a Network Engineer, automatically <strong>discover services</strong> when they get created in order to obtain their IP addresses -- so that I can focus on troubleshooting instead of manual work that can be automated.

3. As a Network Engineer, specify <strong>routing (segmentation) of traffic</strong> between app client and to app services using allow/deny <strong>rules referenced by name</strong> rather than by IP address (such as "C can talk to A" or "C cannot talk to A.") so that it takes less time then using IP addresses, and result in less mistakes being made. This is called the <a target="_blank" href="https://www.hashicorp.com/resources/introduction-consul-connect">Consul Connect feature</a>.

4. Within the system for Enterprises, route traffic using a cluster of <strong>highly available (fault tolerant)</strong> Consul servers instead of using "East-West" load balancers, to remove load balancers (in front of each type of service) as a single-point-of-failure risk.

5. Within the system, obtain the <strong>health status of each app server</strong> so that traffic is routed only to healthy app services, so provide a more aware approach than load balancers blindly routing (by Round-Robin).

6. Within the system, take automatic action <strong>when health status changes</strong> --  notifying apps and firewalls, to <strong>keep security rules current</strong>.

7. Use the familiar Consul infrastructure across <strong>multiple clouds</strong> (AWS, Azure, GCP, etc.), to reduce the learning necessary by people working on different clouds.

> Instead of <strong>manually</strong> changing static IP addresses and firewall rules in Load Balancers, Consul enables dynamic allocation and distribution of addresses from the Consul central "Key-Value" datastore. (Large enterprises have up to 4,000 microservices running at the same time.)


### Value Proposition

> "Consul is a datacenter runtime that provides service discovery, configuration, and orchestration."

> The above are used for showing Proof of Value (POV) from product/workflow adoption.

   * https://www.consul.io/docs/intro
   * https://learn.hashicorp.com/well-architected-framework
   <br /><br />

Adoption of Consul aims to yield these benefits: 

* Faster Time to Market from velocity of getting things done
* Reduce cost via tools (operational efficiency through more visibility and automation)
* Reduce cost via people from improved availability (uptime)
* Reduce risk of downtime from better reliability
* Reduce risk of breach from better guardrails
* Compliance with regulatory demands (central source of truth, imutable, automated processes)

### Addressing Complexities

   The <strong>distributed</strong> nature of microservices require Enterprise teams to address several concerns:
   
   * <strong>"Ephemeral" infrastructure</strong> means IP addresses are dynamic (and toil to assign IP addresses to each service)

   * Each service should not communicate with any other service (complicated communication rules)

   * To distribute load among individual servers, load balancers (such as F5) used are a single point of failure. They work based on IP addresses.

      - Consul can replace legacy Load Balancers. QUESTION: Use round-robin? least-connections?

      - <a target="_blank" href="https://www.youtube.com/watch?v=AqgEXwzexn8&list=PL81sUbsFNc5ZfswcAV3KS0WFQmAYULkbq&index=6" title="Mar 31, 2021">VIDEO: "Zero Trust Security for Legacy Apps with Service Mesh"</a>

   * Complex mechanisms to <strong>secure perimeter yet communicate with outside systems</strong> (legecy and payment systems) are problematic

   * Whole-application <strong>(end-to-end) testing</strong> requires multi-team collaboration (time consuming and expensive)

   * Manual & complex processes in application delivery

Within a single datacenter, Consul provides automatic failover for services by omitting failed service instances from DNS lookups and by providing service health information in APIs. In Consul's <a target="_blank" href="https://www.consul.io/docs/internals/coordinates.html">network coordinate subsystem</a>


### NIA with CTS

<a target="_blank" href="https://www.youtube.com/watch?v=Lf3DvCNDeQo&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk&index=38" title="Network Infrastructure Automation (NIA) Mar 25, 2021">VIDEO</a>: When not using F5 or NGINX (which are Consul-aware), "Network Infrastructure Automation (NIA)" uses the Consul-Terraform Agent where Consul acts as the central broker -- changes trigger Consul to subscribe to Terraform assets.  <a target="_blank" href="https://www.youtube.com/watch?v=Ld40kobI2rs&list=PL81sUbsFNc5arDZYNn3i8N_I7ZeCe02ve&index=10" title="at HashiConf Global 2021 (Nov 1, 2021)">VIDEO: Network Automation on Terraform Cloud With CTS</a> (Consul-Terraform Sync) which dynamically generates configuration files to invoke Terraform modules. It can interact within Terraform Cloud Driver's Remote Workspaces.

CTS is used to keep  configurations up-to-date <a target="_blank" href="https://www.youtube.com/watch?v=8Qj6gLDShBA&t=12m50s" title="May 26, 2022">on Fortinet physical and virtual NGFW (Next-Generation FireWall)</a>.

References:
* <a target="_blank" href="https://www.youtube.com/watch?v=GcyNmdpS-CI">VIDEO "Integrating Terraform with Consul"</a>
* <a target="_blank" href="https://www.youtube.com/watch?v=uwgsNYZ3GZk&list=PL81sUbsFNc5arDZYNn3i8N_I7ZeCe02ve&index=2" title="Opening Keynote Day 2 - HashiConf Global 2021">VIDEO: "Future of Service Networking"</a>
* https://learn.hashicorp.com/tutorials/consul/amazon-ecs-admin-partitions
* https://learn.hashicorp.com/tutorials/cloud/consul-end-to-end-ecs
<br /><br />


<a name="WaysToRun"></a>

## Ways to setup Consul with demo infra

> PROTIP: Become comfortable with the naming conventions used by the architecture, workflows, and automation by building several environments, in order of complexity:

<a href="HCPDemo">A. On HashiCorp's Consul SaaS Cloud on the HCP (HashiCorp Cloud Platform)</a> (the easiest, fastest, most standardized way to use Consul)

   - You can do this using a Chromebook laptop with no local storage.
   - Use this to learn about creating sample AWS services in a private VPC using Terraform, createing a HCP account, cloud peering connections across private networks, day-to-day workflows on <a target="_blank" href="https://cloud.hashicorp.com/products/consul">https://cloud.hashicorp.com/products/consul</a>

<a href="#LaptopWay">B. On a macOS laptop install Consul Agent</a>

   - Use automation to install the Consul agent along with other utilities needed
   - Use this to learn about basic CLI commands, starting/stopping the Agent, API calls, 
   GUI menus using a single server within a Docker image

<a href="#TheHardWay">C. In a single 5-node datacenter (with Kubernetes) to survive loss of a single node</a>

   - Use this to learn about configuration of 5 Consul nodes in 3 Availability Zones within a single region, app Gateways, Sidecar monitoring

<a href="#Enmeshed">## D. In a single 6-node datacenter (with Nomad) to survive loss of an Availability Zone</a>

   - Use this to learn about <a href="#Backup">manual backup and recovery</a> using Snapshots and Enterprise Snapshot Agents, Telemetry and Capacity, Nomad (instead of Kubernetes)

<a href="#MultiDatacenters">E. For HA on multiple datacenters federated over WAN</a>

   - Use this to learn about configuring the <a name="Autopilot">Enterprise Autopilot feature</a> for High Availability across multiple regions (which is a major differentiator of HashiCorp Consul), Chaos Engineering

<a href="#Integrations">F. Integrations to legacy VMs, mainframes, etc.</a>

   - Use this to learn about configuring for integrating HashiCorp Consul to work with a Payment processor, integrate with load balancers that isn't Consul-aware, and across the entire Enteprise landscape of technologies (another major differentiator of HashiCorp Consul)


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

   The Terraform adds Datadog for Observability. 



1, Consul Enterprise edition menu ...

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1653578025/consul-ent-menu-275x585_jjwfqn.png"><img alt="Consul Enterprise menu at v1.1.5" width="275" height="585" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1653578025/consul-ent-menu-275x585_jjwfqn.png"></a>

   PROTIP: Enterprise editions of Consul is a different binary than OSS edition.

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
   
3.	<a href="#ServiceDiscovery">Register services and use service discovery</a><br />
   3a.	Interpret a service registration<br />
   3b.	Differentiate ways to register a single service<br />
   3c.	Interpret a service configuration with health check<br />
   3d.	Check the service catalog status from the output of the DNS/API interface or via the Consul UI<br />
   3e.	Interpret a prepared query<br />
   3f.	Use a prepared query<br />
   
4.	Access the Consul key/value (KV)<br />
   4a.	Understand the capabilities and limitations of the KV store<br />
   4b.	Interact with the KV store using both the Consul CLI and UI<br />
   4c.	Monitor KV changes using watch<br />
   4d.	Monitor KV changes using <a href="#envconsul">envconsul</a> and consul-template<br />
   
5.	<a href="#Snapshots">Back up and restore</a><br />
   5a.	<a href="#Snapshots">Describe the content of a snapshot</a>
   5b.	Back up and restore the datacenter<br />
   5c.	<a href="#SnapshotAgent">[Enterprise] Describe the benefits of snapshot agent features</a>
   
6.	<a href="#ServiceMesh">Use Consul service mesh</a><br />
   6a.	Understand Consul Connect service mesh high level architecture<br />
   6b.	Describe configuration for registering a service proxy<br />
   6c.	Describe intentions for Consul Connect service mesh<br />
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
   
9.	<a href="#Gossip">Use gossip encryption</a><br />
   9a.	Understanding the Consul security/threat model<br />
   9b.	Configure gossip encryption for the existing data center<br />
   9c.	Manage the lifecycle of encryption keys<br />


<hr />

## Most Frequent References

1. The marketing home page for HashiCorp's Consul is:

   https://www.consul.io/

1. Detailed documentation for the offering is also at that host name:

   https://www.consul.io/docs

1. Tutorials

   https://learn.hashicorp.com/tutorials/consul/service-mesh

1. Technical Discussions:

   https://discuss.hashicorp.com/c/consul/29

1. Stackoverflow has highly technical questions & answers:

   https://stackoverflow.com/search?q=%23hashicorp-consul

1. Reddit:

   https://www.reddit.com/search/?q=hashicorp%20consul


<a target="_blank" href="https://www.youtube.com/playlist?list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK">YouTube: "Getting into HashiCorp Consul"</a>

<a target="_blank" href="https://www.youtube.com/watch?v=u6m_RxLR1fQ&list=PL81sUbsFNc5arDZYNn3i8N_I7ZeCe02ve&index=22">VIDEO: Consul Roadmap – HashiConf Global 2021</a>
<hr />

<a name="HCPDemo"></a>

## A. On HashiCorp's Consul Cloud SaaS HCP (HashiCorp Cloud Platform)

   The fastest and easiest, fastest way to use Consul is to use the Hashcorp-Managed <a name="HCPCloud">HashiCorp Cloud Platform (<strong>HCP</strong>) Consul Cloud</a>. 

   HCP Consul provides a convenient clickable <a href="#ConsulWebGUI">Web GUI</a> rather than the CLI/API of FOSS. 
   
   <a target="_blank" href="https://www.youtube.com/watch?v=UDbR-TVDUm8&list=PL81sUbsFNc5ZfswcAV3KS0WFQmAYULkbq&index=37" title='Apr 1, 2021 by  Anubhav Mishra @build1point0">VIDEO: "Service Mesh - Beyond the Hype"</a>

   <a name="SkipEnterprise"></a>
   
   HCP provides fully managed "Service Mesh as a Service (SMaaS)" Consul features not provided with the "self-managed" Enterprise edition. That means:

   * Monitoring to ensure disk space, CPU, memory, etc. is already staffed
   * Capacity testing to ensure configurations are made optimal by specialists
   * No risk of security vulnerabilities introduced by inexperienced personnel
   * Backups taken care of automatically
   * Restores performed when needed

   * Rest from on-going hassles of security patches and version upgrades
   * Enable limited in-house IT personnel to focus on business needs.
   * Faster time to value and time to market
   <br /><br />

References:
   * <a target="_blank" href="https://learn.hashicorp.com/collections/consul/cloud-get-started">HashiCorp's 7 tutorials on HCP Consul</a>:
   * https://www.hashicorp.com/products/consul/service-on-azure 
   * <a target="_blank" href="https://www.hashicorp.com/blog/consul-service-on-azure-production-tier">announced Sep 2020</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=YowP4xV2Jf0&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk&index=7" title="Oct 14, 2020">VIDEO:
   "Introduction to HashiCorp Cloud Platform (HCP): Goals and Components"</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=Aq1uTozNajI" title="Oct 15, 2019">VIDEO: "Consul Service Mesh: Deep Dive"</a>
   <br /><br />

### Steps

The demo app may changes over time, but the general steps are:

   1. <a href="#ObtainAWSAccount">Obtain an AWS account credentials</a> to adequate premissions
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

   References:

   * https://github.com/hashicorp/learn-hcp-consul
   * https://github.com/hashicorp/learn-terraform-multicloud-kubernetes

   * hashicorp/consul-snippets Private = Collection of Consul snippets. Configuration bits, scripts, configuration, small demos, etc.


   * https://github.com/hashicorp/field-workshops-consul = Slide decks and Instruqt code for Consul Workshops
   * https://github.com/hashicorp/demo-consul-101 = Tutorial code and binaries for the HashiCorp Consul beginner course.
   * https://github.com/hashicorp/learn-consul-docker = Docker Compose quick starts for Consul features.

   * https://github.com/hashicorp/terraform-aws-vault  A Terraform Module for how to run Consul on AWS using Terraform and Packer

   * https://github.com/hashicorp/hashicat-aws = A terraform built application for use in Hashicorp workshops

   * https://github.com/hashicorp/consul-template = Template rendering, notifier, and supervisor for @hashicorp Consul and Vault data.
   
   * https://github.com/hashicorp/consul-k8s = First-class support for Consul Service Mesh on Kubernetes

   * https://github.com/hashicorp/consul-replicate = Consul cross-DC KV replication daemon.

   * hashicorp/learn-consul-kubernetes
   * https://github.com/hashicorp/learn-consul-service-mesh

   * https://github.com/hashicorp/consul-api-gateway = The Consul API Gateway is a dedicated ingress solution for intelligently routing traffic to applications running on a C…

   * https://github.com/hashicorp/consul-demo-traffic-splitting = Example application using Docker Compose to demonstrate Consul Service Mesh Traffic Splitting

   * hashicorp/consul-esm = External service monitoring for Consul

   * https://github.com/hashicorp/terraform-aws-consul-starter = A Terraform module for creating an OSS Consul cluster as described by the HashiCorp reference architecture.

   * https://github.com/hashicorp/envconsul = Launch a subprocess with environment variables using data from @hashicorp Consul and Vault.

   * https://github.com/hashicorp/consul-global-scale-benchmark = Terraform configurations and helper scripts for Consul Global Scale Benchmark


   <a name="ObtainAWSAccount"></a>
   
   #### Obtain AWS account credentials

1. Obtain AWS credentials (AWS_) and populate file <tt>~/.aws/configuration</tt> or environment variables. If you are a HashiCorp employee, they would be obtained for the "Doormat" website, which grants access to your laptop's IP address for a limited time.

   <pre>export AWS_ACCESS_KEY_ID=<em>your AWS access key ID</em>
export AWS_SECRET_ACCESS_KEY=<em>your AWS secret access key</em>
export AWS_SESSION_TOKEN=<em>your AWS session token</em>
   </pre>

   Alternately, copy and paste credentials in the <tt>~/.aws/credentials</tt> file that every AWS CLI command references.


   <a name="#CreateAWSVPC"></a>

   ### Create an AWS VPC and associated resources
   
   There are several ways to setup infrastructure in a cloud datacenter managed by Consul.

   Instead of performing manual steps at https://learn.hashicorp.com/tutorials/cloud/consul-deploy, automate it <strong>manually</strong>,

   <a target="_blank" href="https://learn.hashicorp.com/tutorials/cloud/consul-ecs-hcp">This</a> describes use of Terraform to create a non-prod HCP Consul environment to manage an ECS cluster, and various AWS services:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1654022287/consul-ecs-hcp-1280x720_j4p2le.png"><img alt="Consul ECS HCP" width="1280" height="'720" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1654022287/consul-ecs-hcp-1280x720_j4p2le.png"></a>

   
   * https://github.com/hashicorp/docker-consul = Official Docker images for Consul.


   <a name="cgsb"></a>

   #### Consul Global Scale Benchmark

   The biggest way to go is using <a target="_blank" href="https://github.com/hashicorp/consul-global-scale-benchmark">https://github.com/hashicorp/consul-global-scale-benchmark</a> used to prove that a Service Mesh Control Plane of 5 HashiCorp Consul Servers across 3 availability zones in us-east-1 are able to update 10,000 Consul/Nomad client nodes and 172,000+ services in under 1 second. Each Consul Server run on c5d.9xlarge instance types on EC2 having 36 vCPUs and 72 Gigabytes of memory. It's described by  <a target="_blank" href="https://www.hashicorp.com/cgsb">White paper: "Service Mesh at Global Scale"</a> and 
   <a target="_blank" href="https://www.hashicorp.com/resources/hashicast-episode-30-anubhav-mishra-paul-banks-hashicorp">Podcast</a> with creator: Anubhav Mishra (Office of the CTO).


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


1. Configure Terraform variables in a <tt>.auto.tfvars</tt> file with the following:

   <pre>region         = "us-east-1"
lb_ingress_ips = ["<your-ip>/32"]
suffix         = "demo"
   </pre>

   region - the AWS region where resources will be deployed. Must be one of the HCP supported regions for the HCP Consul servers.

   lb_ingress_ips - Your IP. This is used in the load balancer security groups to ensure only you can access the demo application.

   <tt><strong>suffix</strong></tt> text value AWS appends to resource names its creates.
   

1. Run using <tt>terraform init</tt>

   <a target="_blank" href="https://www.youtube.com/watch?v=JuwSHZqlLj0&t=7s">VIDEO</a>: Try it:


1. In the folder containing main.tf, run terraform to inititate :

   <pre><strong>terraform init
   </strong></pre>

1. Run Sentinel or TFSec, etc?

1. In the folder containing main.tf, run terraform to instantiate in AWS:

   <pre><strong>terraform apply
   </strong></pre>


   (optional) Configure kubectl

   <pre><strong>aws eks --region $(terraform output -raw region) update-kubeconfig --name $(terraform output -raw local.eks_cluster_name)
kubectl get pods -A
   

1. To access the Consul UI in HCP, print the URL and bootstrap token to access the Consul UI. The bootstrap token can be used to login to Consul.

   <pre><strong>terraform output consul_public_endpoint_url
terraform output consul_bootstrap_token
   </strong></pre>

1. Access the demo application in ECS: print the URL for the demo application:

   <pre><strong>terraform output ecs_ingress_address
   </strong></pre>



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
export HCP_CLIENT_SECRET=6BHGXSErAzsPjdaimnERGDrG9DXBYTGhdBQQ8HuOJaykG9Jhw_bJgDqp35OkYSoA
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

   PROTIP: Assume a 5:1 node to services ratio.

   https://www.hashicorp.com/products/consul/pricing
  

<hr />

<a name="LaptopWay"></a>

## B. On a macOS laptop using Docker

   * https://learn.hashicorp.com/tutorials/consul/get-started-agent?in=consul/getting-started
   <br /><br />

1. Consul can be controlled using <strong>CLI commands</strong> without licensing as FOSS (Free open-sourced software) using code open-sourced at:

   <a target="_blank" href="https://github.com/hashicorp/consul">https://github.com/hashicorp/consul</a>

   Consul written in the <a target="_blank" href="https://wilsonmar.github.io/golang/">Go programming language</a>. The GUI is in JavaScript with Handlebars templating, SCSS, and Gherkin.

   Initiated in 2014, this repo has garnered nearly 25,000 stars, with over a million downloads monthly.


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
   * API calls from within a custom program (written in Go, etc.)
   * <a href="#ConsulWebGUI">GUI</a> (Graphic User Interface) on an internet browser such as Google Chrome
   <br /><br />


   <a name="HCDiag"></a>

   ### Install HCDiag

1. Install for macOS <a target="_blank" href="https://github.com/hashicorp/homebrew-tap">from Homebrew</a>:

   <pre><strong>brew install hcdiag</strong></pre>

   <pre>==> Downloading https://releases.hashicorp.com/hcdiag/0.2.0/hcdiag_0.2.0_darwin_amd64.zip
######################################################################## 100.0%
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

1. Before submitting a Service ticket to HashiCorp, obtain diagnostics run the HashiCorp utility (originating from <a target="_blank" href="https://github.com/hashicorp/hcdiag">) while a HashiCorp server is running:

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


   <a name="InstallConsulLinux"></a>

   ### Install Consul Agent on Linux

   <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-ent-basics/challenges/install-consul/assignment">Accordingly</a>:

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

   ### Install Consul Agent on macOS

1. To setup your mac for Consul, use the approach described in my blog: 

   https://wilsonmar.github.io/mac-setup

2. Notice there are two options to install the Consul Agent:

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

6. Use your mouse to triple-click <tt>zsh</tt> in the command below to highlight the line, then press command+C to copy it to your Clipboard:

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

7. Press <strong>command+Tab</strong> to switch to the <strong>Terminal.app</strong>. 

8. Click anywhere in the Terminal window and Press <strong>command+V</strong> to paste the command from your Clipboard. 

9. Press Return/Enter on your keyboard to begin execution. 

   <a name="UseHashicorpTaps"></a>

   In the script, the Consul Agent is installed using HashiCorp's tap, as described at:
   * https://learn.hashicorp.com/tutorials/consul/get-started-install?in=consul/getting-started
   <br /><br />

   Instead of the usual:

   <pre><strike>brew install consul</strike></pre>

   the Consul client is installed this way:

   <pre><strong>brew tap hashicorp/tap
brew install hashicorp/tap/consul
   </strong></pre>

   Notice the response caveats:

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


   <a name="CLI-commands"></a>

   ### Consul CLI commands

   <a name="RunBackground">Option A: Run Consul in background, which restarts automatically at login:</a>

   <pre>brew services start hashicorp/tap/consul</pre>

   <a href="#RunForeground">Option B: Run Consul in foreground, which occupies the Terminal and does not start again at login:</a>

   <pre><strong>consul agent -dev -bind 127.0.0.1 -node machine</strong></pre>

   <pre>[DEBUG] agent.router.manager: Rebalanced servers, new active server: number_of_servers=1 active_server="wilsonmar-N2NYQJN46F (Addr: tcp/127.0.0.1:8300) (DC: dc1)"
   </pre>

1. TODO: Setup compatibility mode?

1. Verify install:

   <pre><strong>consul version</strong></pre>

   Example reponse:

   <pre>Consul v1.12.0
Revision 09a8cdb4
Protocol 2 spoken by default, understands 2 to 3 (agent will automatically use protocol >2 when speaking to compatible agents)
   </pre>

1. Obtain the menu of <em>31 command keywords</em>:

   <pre><strong>consul</strong></pre>

   <pre>Usage: consul [--version] [--help] &LT;command> [&LT;args>]
&nbsp;
Available commands are:
    <a href="#ACL">acl</a>            Interact with Consul's ACLs
    agent          Runs a Consul agent
    catalog        Interact with the catalog
    config         Interact with Consul's Centralized Configurations
    connect        Interact with Consul Connect
    debug          Records a debugging archive for operators
    event          Fire a new event
    exec           Executes a command on Consul nodes
    force-leave    Forces a member of the cluster to enter the "left" state
    info           Provides debugging information for operators.
    <a href="#Intentions">intention</a>      Interact with Connect service intentions
    join           Tell Consul agent to join cluster
    keygen         Generates a new encryption key
    keyring        Manages gossip layer encryption keys
    kv             Interact with the key-value store
    leave          Gracefully leaves the Consul cluster and shuts down
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


<a name="Ports"></a>

### Ports used by Consul

   The default ports:
   
   * 8300 TCP for RPC (Remote Procedure Call) by all Consul server agents to handle incoming requests from <strong>other Consul agents</strong> to discover services and make Value requests for Consul KV

   * 8301 TCP/UDP for Serf <strong>LAN</strong> Gossip on the same cluster for Consensus communication, for agreement on adding data to the data store, and replication of data
   * 8302 TCP/UDP for Serf <strong>WAN</strong> Gossip across regions
   
   * 8500 & 8501 <strong>TCP-only</strong> for localhost API and UI
   * 8502 TCP-only for Envoy sidecar proxy xDS gRPC API (disabled by default)

   * 8600 TCP/UDP for <a href="#DNSQueries">DNS queries</a>

   * 21000 - 21255 TCP (automatically assigned) for Sidecar proxy registrations
   <br /><br />

   For bootstrapping and configuration of <tt>agent.hcl</tt>, see
   * https://learn.hashicorp.com/tutorials/consul/access-control-setup-production
   <br /><br />
   
<hr />


<a name="ConsulNames"></a>

### Environment Variables

The shell script I wrote makes use of several custom environment variables, which minimizes mistakes when several commands use the same values. When applicable, my script also captures values output from one step to use in subsequent commands, to avoid the toil and mistakes from manual copy and pasting.

Use of environment variables also enable the same command call to be made for both DEV and PROD use, further avoiding mistakes.

* <tt>DATACENTER1_ID</tt>, which is obtained from my laptop's <tt>$(hostname)</tt>

* CONSUL_AGENT_TOKEN

* <a href="#ACL-Vars">ACL variables</a>


<a name="envconsul"></a>

### envconsul

   * https://www.consul.io/docs/intro/vs
   <br /><br />

The envconsul utility reads and sets environmental variables for processes from data within the Consul Agent.

Installation of the Consul Agent creates these folders and files:

   * <tt>/etc/consul.d</tt>


<a name="RunForeground"></a>

## Start Consul Agent in forground

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

   ## Start Consul Server in background (macOS)

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


   ### Leave (Stop) Consul gracefully

   CAUTION: When operating as a server, a graceful leave is important to avoid causing a potential availability outage affecting the consensus protocol.

1. Gracefully stop the Consul by making it leave the Consul datacenter and shut down:

   <pre><strong>consul leave</strong></pre>

   QUESTION: Need to specify the node like in start?

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

<a name="ConsulWebGUI"></a>

### Consul web GUI

1. When the <a href="#RunBackground">Consul server is invoked</a>:

   <pre>open "http://localhost:8080/ui/${DATACENTER1_ID}/services"</pre>

   <img alt="Consul GUI" width="573" height="104" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652110651/consul-gui-573x104_zb5lsx.png">

   The Consul GUI provides a mouse-clickable way for you to conviently work with these (explained below):

   * <a href="#Services">Services</a> (in the Service Catalog)

   * <a href="#Nodes">Nodes</a> is the number of Consul instances

   * <a href="#KeyValue">Key/Value</a> datastore of IP address generated

   * <a href="#ACL">ACL</a> (Access Control List) entries which block or allow network access based on port number

   * <a href="#Intentions">Intentions</a> to allow or deny connections between specific <strong>services by name</strong> (instead of IP addresses) in the Service Graph



<a name="API"></a>

### API

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

Queries are also <a target="_blank" href=https://www.consul.io/docs/security/acl/acl-rules#prepared-query-rules">used for ACL</a>

Query execution is subject to node/node_prefix and service/service_prefix policies.



<hr />

<a name="Backup"></a>
<a name="Snapshots"></a>

## Backup Data Snapshots

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-backups"> Enterprise Academy: Backup and Restore</a>
   <br /><br />

Data in a Consul agent is captured in complete point-in-time snapshots (gzipped tar file) of Consul's committed state. Other data also in the Snapshot include:

   * Sessions
   * <a href="#PreparedQueries">Prepared queries</a>
   <br /><br />

1. Specify the ACL Token ("12345678-1234-abcd-5678-1234567890ab")

   <pre><strong>export CONSUL_HTTP_TOKEN="${CONSUL_ACL_TOKEN}"
   </strong></pre>

1. Define file name as a timestamp in UTC time zone, such as <tt>2022-05-16T03:10:15.386UTC.tgz</tt>

   <pre><strong>brew install coreutils
   CONSUL_BACKUP_FILENAME="$( gdate -u +'%Y-%m-%dT%H:%M:%S.%3N%Z' ).tgz"
   </strong></pre>   

   Snapshots are typically performed on the LEADER node, but a FOLLOWER can take it if the <tt>\-\-stale</tt> flag is specified.

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

   For example, define an S3 bucket. Get a service account to run:

   <a name="SnapshotAgent"></a>

1. Enterprise-licensed users can run the Consul Snapshot Agent Service:

   <pre><strong>consul snapshot agent -config-dir=/etc/consul-snapshot.d
   </strong></pre>

   Registration is done automatically.

   A sample <tt>consul-snapshot.d</tt> file:

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

   Alternately, a systemd agent configuration file:

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
ExecStart=/usr/local/bin/consul snapshot agent -config-dir=/etc/snapshot
KillMode=process
Restart=on-failure
LimitNOFILE=65535
&nbsp;
[Install]
WantedBy=multi-user.target
   </pre>

1. Snapshots are intended for utter Disaster Recovery, to restore to a fresh set of Consul servers. 

   <pre>consul snapshot restore</pre>

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

### Down for maintenance

1. To bring a node offline, enable maintenace mode:

   <pre><strong>consul maint -enable -server redis  -reason "Server patching"
   </strong></pre>   

1. To bring a node back online, disable maintenace mode:

   <pre><strong>consul maint -disable -server redis
   </strong></pre>   


Practicing use of the above should be part of your pre-production Chaos Engineering/Incident Management process.





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

   Consul discovers services which are setup to be discovered with a file on the service machine.
   
1. Construct the file CONSUL_SVC_REGIS_FILE such as <tt>/etc/consul.d/nginx.json</tt>

   <pre>{
  "service": {
     "name": "web",
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

1. A service instance is defined by a service name + service ID. QUESTION: "web check"?

1. Provide Consul read permissions on the directory/file used above.

   CONSUL_SVC_REGIS_FILE="redis.hcl"

1. Register the service:

   <pre><strong>consul services register redis.hcl</strong></pre>

   Alternately, make an API call:

   <pre>curl -X PUT --data "@${CONSUL_SVC_REGIS_FILE}" \
   http://localhost:8500/v1/agent/service/register
   </pre>

1. Consul does not watch that file after loading, so changes to it after load must be reloaded using:

   <pre><strong>sysctl consul reload</strong></strong>

1. "Service discovery" finds available service instance addresses and ports.


1. TODO: Define default connection limits, for better security.

1. QUESTION: API Gateway?

1. QUESTION: Linux Security Model integrated into operating system, such as AppArmor, SELinux, Seccomp.

   See https://www.consul.io/docs/security/security-models/core

1. Consul <strong>load balances</strong> across instances.


1.

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



   <a name="dig_discover"></a>

1. "Discover" nodes using DNS interface <tt>dig</tt> command to the Consul agent's <strong>DNS server</strong>, which runs on port 8600 by default:

   REMEMBER: Only healthy instances are returned.

   If running within Docker image "hashicorp/counting-service:0.0.2"
   
   <pre><strong>dig @127.0.0.1 -p 8600 "counting.service.consul"</strong></pre>

   Alternately, discover apps using <tt>dig appb.service.consul</tt>

   If running locally:

   <pre><strong>dig @127.0.0.1 -p 8600 "$(hostname).node.consul"</strong></pre>

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

   QUESTION: SRV lookups

3. Connect 


   NOTE: Unhealthy nodes are filtered out.

   TODO: This approach enables automatic load balancing. Decentralizes DNS.

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

   ACLs define access granted through specific ports <strong>through firewalls</strong> (on Enterprise network traffic in "L3" segments). 
   
   ACL are used to 
   - Add nodes to the datacenter
   - Remove nodes from the datacenter
   - Add services
   - Remove services
   - Consul KV (CRUD)
   - Block Catalog Access
   - Discover services
   - API/CLI operations to interact with the datacenter
   <br /><br />

   Vault works the same way as this:
   An ACL Token encapsulates multiple policies, with each policy aggregating one or more rules.

   <a name="ACL-Vars"></a>

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

   TODO: To define "least privilege", provide "remove" permissions to a separate account than the account which performs "add".
   
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

### C. In a single datacenter (with Kubernetes)

In <a target="_blank" href="https://www.youtube.com/c/HashiCorp">
HashiCorp's YouTube channel covering all their 8 products</a>:

<a target="_blank" href="https://www.linkedin.com/in/rosemarywang/">Rosemary Wang</a> (<a target="_blank" href="https://joatmon08.github.io">joatmon08.github.io</a>, Developer Advocate) with J. Cole Morrison hold fun <a target="_blank" href="https://www.twitch.tv/hashicorplive">hashicorplive Twitch parties</a> [about two hours each] to show how to learn Consul "the hard way" by setting it up from scratch, using code from <a target="_blank" href="https://github.com/jcolemorrison/getting-into-consul">
github.com/jcolemorrison/getting-into-consul</a>

<a name="GatewaysDiagram"></a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652502401/consul-getting-into-1920x1080_gku46e.png">
<img alt="Consul" width="1090" height="1080" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652502401/consul-getting-into-1920x1080_gku46e.png"></a>

Consul offers three types of Gateways in the data path to validate authenticity and traffic flows to enforce intentions between services: Enterprise Academy:
   * Service Mesh Gateway</a>
   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-ingress-gateways-deployment">Enterprise Academy: Ingress Gateways</a>
   * Terminating Gateways</a>
   <br /><br />

   * <a target="_blank" href="https://learn.hashicorp.com/tutorials/cloud/amazon-transit-gateway?in=vault/cloud-ops">DOC</a>: Transit gateway

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-secure-deployment">Enterprise Academy: Deploy Consul Ingress Gateways</a> (Deploy an Ingress Gateway for Inbound Mesh Connectivity)
   <br /><br />


<a name="Kubernetes"></a>

## Consul on Kubernetes

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-kubernetes">Enterprise Academy: Running Consul on Kubernetes</a> (Learn how to install Consul on Kubernetes)
   <br /><br />




<a name="ServiceMesh"></a>

### Kubernetes enhanced by Service Mesh & Consul

   * <a target="_blank" href="https://www.youtube.com/watch?v=C3N4i1cFIZ0&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk" title="May 9, 2022">VIDEO: "How Consul and Kubernetes work together"</a>
   <br /><br />




<a target="_blank" href="https://www.youtube.com/watch?v=0H06VKvlTJQ&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=1"> 
Part 1: Security, Traffic Encryption, and ACLs</a> [1:47:59] Aug 9, 2021

<a target="_blank" href="https://www.youtube.com/watch?v=2PUMjq9-dyk&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=2">
Part 2: Configuring Service Discovery for Consul on AWS</a> [2:20:50] Aug 23, 2021 

<a target="_blank" href="https://www.youtube.com/watch?v=_lIJg0c5les&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=3">
Part 3: Scaling, Outage Recovery, and Metrics for Consul on AWS</a> [2:03:17] Sep 3, 2021

<a target="_blank" href="https://www.youtube.com/watch?v=wIub6PZWRmY&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=4">
Part 4: Security, Traffic Encryption, and ACLs</a> [2:06:44] Sep 20, 2021
 - secure <a href="#Gossip">Gossip communication</a> between Consul agents, 
encrypt RPC calls between client and server with TLS, and begin setting up ACLs. 
 - Generate 32-bit encryption key. Apply key to agents. Rotate keys.

<a target="_blank" href="https://www.youtube.com/watch?v=HB4u_C85HV8&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=5">
Part 5: All About Access Control Lists</a> [1:34:12] Oct 4, 2021

<a target="_blank" href="https://www.youtube.com/watch?v=KpxlbRngc98&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=6">
Part 6: Auto Configuration with Vault</a> [2:00:09] Oct 21, 2021

<a target="_blank" href="https://www.youtube.com/watch?v=yBgmsWBElZ0&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=7">
Part 7: Enabling Consul Service Mesh</a> [2:08:43] Nov 15, 2021

<a target="_blank" href="https://www.youtube.com/watch?v=kGGu0m2StRA&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=8">
Part 8: Traffic Shaping and Envoy Debugging</a> [1:58:28] Nov 23, 2021

<a target="_blank" href="https://www.youtube.com/watch?v=qqVJJh8cLVk&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=9">
Part 9: Service Mesh Proxy Metrics</a> [1:51:03] Jan 18, 2022

- <a target="_blank" href="https://github.com/hashicorp/learn-consul-vms/blob/main/service-mesh/deploy/scripts/vagrant-linux-priv-prometheus.sh">Install</a>/config. prometheus.io static & dynamic scrape, exposing Envoy

<a target="_blank" href="https://www.youtube.com/watch?v=eGunZqGNISM&list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK&index=10">
Part 10: Terminating & Ingress Gateways</a> [1:34:44] Mar 7, 2022



<hr />
   
<a name="SidecarInject"></a>

## Sidecar proxy injection

   Consul comes with a Sidecar proxy, but also supports the Kubernetes Envoy proxy (from Lyft). (QUESTION: This means that migration to Consul can occur gradually?)

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

   <pre><strong>k port-forward svc/consul-tonsul-ui 8080:80</strong></pre>

   <pre>Forwarding from 127.0.0.1:8080 -> 8500
   Forwarding from [::1]:8080 -> 8500
   </pre>

1. View the Consul dashboard:

   <pre>http://localhost:8080/ul/<em>datacenter</em>/services</pre>


References about Kubernetes with Consul:
   * https://github.com/hashicorp/consul-k8s
   * https://learn.hashicorp.com/tutorials/consul/kubernetes-reference-architecture?in=consul/kubernetes-production
   * <a target="_blank" href="https://www.youtube.com/watch?v=mxeMdl0KvBI">VIDEO: Introduction to HashiCorp Consul</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=Qbo8Oc-pJwc">VIDEO: What is the Crawl, Walk, Run Journey of Adopting Consul</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=UHLr8UsHuDA">VIDEO: HashiCorp Consul Introduction: What is a Service Mesh?</a> by (former) Developer Advocate <a target="_blank" href="https://www.linkedin.com/in/nicolereneehubbard/">Nicole Hubbard</a> 
   * <a target="_blank" href="https://www.youtube.com/watch?v=K93ZaUzwEWk">VIDEO: How does Consul work with Kubernetes and other workloads?</a>
   * https://platform9.com/blog/understanding-kubernetes-loadbalancer-vs-nodeport-vs-ingress/
   * https://learn.hashicorp.com/tutorials/terraform/multicloud-kubernetes?in=consul/kubernetes
   <br /><br />


<hr />


<a name="DNSQueries"></a>

## Service Discovery Registry

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
   
   * <strong>Service Configuration</strong>: (K8s Configmaps) but Consul also updates F5 and other load balancer rules, for dynamic configuration across distributed services (in milliseconds)
   
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

> To encrypt traffic between nodes, each asset is given an encrypted identity in the form of a TLS certificate (in X.509, <a target="_blank" href="https://spiffe.io/">SPIFFE-compatible</a> format). Consul also provides a Proxy to enforce communications between nodes using "Mutual TLS" where each party exchange certificates with each other.

   Consul's <strong>auto-join provider</strong> enables nodes running outside of Kubernetes to join a Consul cluster running on Kubernetes API.

   Consul can <strong>auto-inject</strong> certifictes into Kubernetes Envoy Sidecars to secure communication traffic (within the Service Mesh).

   RECOMMENDED: Have Consul use HashiCorp Vault to generate dynamic x.509 certificates.
   

<a name="ConsulConnect"></a>

### Consul Connect (Service Mesh)

   * <a target="_blank" href="https://www.youtube.com/watch?v=8T8t4-hQY74&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk&index=10">VIDEO: "Introduction to HashiCorp Consul Connect"</a>
   * <a target="_blank" href="   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-connect">Instruqt: Getting started with Consul Connect</a>
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

1. Identify the latest release of <tt>imagek8: "hashicorp/consul-k8s:</tt> at:

   https://github.com/hashicorp/consul-k8s/releases

   https://artifacthub.io/packages/helm/hashicorp/consul

   which was v0.43.0 on April 21, 2022.

   See https://www.consul.io/docs/k8s/installation/install

1. Deploy using Helm:

   <pre><strong>helm install consul.helm -f values.yaml
   </strong></pre>


<hr />

<a name="Enmeshed"></a>

## D. In a single 6-node datacenter (survive loss of an Availability Zone)

### HA (High Availability)

   In order for a datacenter to withstand the sudden loss of a server within a single Availability Center or the loss of an entire Availability Zone, setup <strong>6 servers</strong> for best resilience plus performance under load:

   <a name="6servers"></a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652577580/consul-6-nodes-970x541_b2biuh.png"><img alt="Consul 6 nodes" width="970" height="541" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652577580/consul-6-nodes-970x541_b2biuh.png"></a>

   The yellow star in the <a href="#6servers">diagram above</a> marks the <strong>LEADER</strong> Consul server. The leader is responsible for ingesting new log entries of cluster changes, writing that to durable storage, and replicating to followers. 

   <strong>PROTIP: Only the LEADER processes requests.</strong> FOLLOWERs do not respond to request as their job is just to receive replication data (enjoy the food and stand by like a Prince). This architecture is similar to Vault's.
   
   <a name="Scalability"></a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652576658/consul-non-voting-1136x352_upxo3y.png"><img alt="Consul Non-voting for scale" width="1136" height="352" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652576658/consul-non-voting-1136x352_upxo3y.png"></a>

   IMPORTANT: For better <strong>scalability</strong>, use Consul's <a href="#Autopilot">Enterprise "Autopilot" mechanism</a> to setup <strong>"NON-VOTER"</strong> Consul server nodes to handle additional processing. 

   The NON-VOTER is in Zone 2 because leadership may switch to different FOLLOWER servers over time.

   So keep the above in mind when using <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/get-started-create-datacenter?in=consul/getting-started">this page</a> to describe the Small and Large server type in each cloud.

   PROTIP: The recommended maximum number of Consul client nodes for a single datacenter is 5,000.
   
   <strong>CAUTION: A Consul cluster cannot operate in a single Availability Zone.</strong>

   Actually, <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/reference-architecture?in=well-architected-framework/zero-trust-networking">HashiCorp's Consul Enterprise Reference Architecture</a> for a single cluster is <strong>5 Consul server nodes</strong> across <strong>3 availability zones</strong>.

   <a name="RefArch"></a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208811/hashicor-consult-ref-arch-1033x401_veqcwx.png"><img alt="Consul Ref. Arch" width="1033" height="401" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208811/hashicor-consult-ref-arch-1033x401_veqcwx.png"></a>

   Within an Availability Zone, if a voting FOLLOWER becomes unavailable, a non-voting member in the same Availability Zone is promoted to a voting member:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652579825/consul-promote-in-az-550x342_a87mri.png"><img alt="Consul promote in AZ" width="550" height="342" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652579825/consul-promote-in-az-550x342_a87mri.png"></a>


<a name="Raft"></a>

### Raft concensus algorithm

Consider these dynamic illustrations about how the Raft mechanism works:
   * http://thesecretlivesofdata.com/raft/ provides a visualization
   * https://raft.github.io/
   <br /><br />

   To ensure data <strong>consistency</strong> among nodes across Availability Zones, the <a target="_blank" href="https://www.consul.io/docs/architecture/consensus#deployment_table">Raft consensus algorithm</a> (a simpler implementation of <a target="_blank" href="https://en.wikipedia.org/wiki/Paxos_%28computer_science%29">Paxos</a>) maintains consistent state storage for updating catalog, session, prepared query, ACL, and KV state.
   
   Each transaction is considered "comitted" when more than half the followers register it.
   
   If the LEADER server fails, an election is automatically held among a quorum (adequate number of) FOLLOWERs to elect a new LEADER from among candidates.

   <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/get-started-create-datacenter?in=consul/getting-started">TUTORIAL</a>:

   <!-- https://hashicorp.app.workramp.com/task_assignments/cbb60ad0-cfd5-11ec-aade-06cf503dca07 -->


<a name="Gossip"></a>

### Serf LAN & WAN Gossip 

   * https://learn.hashicorp.com/tutorials/consul/federation-gossip-wan
   * https://www.consul.io/docs/intro/vs/serf
   <br /><br />

To ensure that data is distributed with reliable communication not assumed, Consul uses the <a target="_blank" href="https://en.wikipedia.org/wiki/Gossip_protocol">Gossip protocol</a> powered by the multi-platform <a target="_blank" href="https://www.serf.io/">Serf</a> <a target="_blank" href="https://github.com/hashicorp/serf">library open-sourced by HashiCorp at https://github.com/hashicorp/serf</a> (writte in Golang). Serf provides for:

   * Membership information which enable servers to perform cross-datacenter requests

   * Events broadcasting
   
   * Failure detection to gracefully handle loss of connectivity

If Vault is not used, do it the hard way:

1. Generate Gossip encryption key (a 32-byte AES GCM symmetric key that's base64-encoded).

1. Arrange for regular key rotation (using the Keyring built in Consul)

1. Install encryption key on each agent.

1. Review Gossip Telemetry output.


<hr />

<a name="MultiDatacenters"></a>

## E. For HA on multiple datacenters federated over WAN

   REMEMBER: Like Vault, Consul Datacenter federation is not a solution for data replication. There is no built-in replication between datacenters.
   So use <strong>consul-replicate</strong> to replicate KV between datacenters. 

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-datacenter-federation">Enterprise Academy: Federate Multiple Datacenters</a> (Securly connect multiple Consul datacenters with ACL replication)
   <br /><br />

   The Enterprise edition of Consul enables communication across datacenters using <strong>Federate Multiple Datacenters</strong> coordinated using <strong>WAN Gossip</strong> protocol.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208152/consul-federation-804x817_l953gc.png"><img alt="Consul Federation" width="804" height="817" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208152/consul-federation-804x817_l953gc.png"></a>


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

1. Create ACL replication token

   <pre><strong>create acl token create \
  -description "ACL replication token" \
  -policy-name acl-replication  
   </pre>

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

<a name="consul-replicate"></a>

### consul-replicate

   * https://github.com/hashicorp/consul-replicate
   <br /><br />

To perform cross-data-center Consul K/V replication, use the consul-replicate daemon which runs continuosly.


<hr />

<a name="Autopilot"></a>

### Enterprise Autopilot CLI Commands

   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-autopilot">Enterprise Academy: Autopilot Upgrades</a> (Automate Upgrades with Consul Enterprise)
   * <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/consul-datacenter-federation">Enterprise Academy: Federate Multiple Datacenters</a> (Securly connect multiple Consul datacenters with ACL replication)
   <br /><br />

   For <strong>write redundancy</strong> through automatic replication across several zones, add a tag "az" for "availability zone" to invoke the Enterprise feature "<a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/autopilot-datacenter-operations">Consul Autopilot</a>":

   <pre>autopilot = {
  redundancy_zone_tag = "az"
   }
node_meta = {
   az = "Zone1"
}
   </pre>

   Enterprise Autopilot features perform automatic, operator-friendly management of Consul servers, including cleanup of dead servers, monitoring the state of the Raft cluster, automated upgrades, and stable server introduction.

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


   ### Enterprise configuration
   
   From v1.10.0, a full license file must be defined in the server config file before installation:

   <pre>log_level      = "INFO"
server         = true
ui             = true
datacenter     = "us-east-1"
license_path   = "/opt/consul/consul.hclic"
client_addr    = "0.0.0.0"
bind_addr      = "10.1.4.11"
advertise_addr = "10.1.4.11"
advertise_addr_wan = "10.1.4.11"
   </pre>

   To Consul, a "<strong>datacenter</strong>" is a single region.

   IP addresses can be in IPv6 format.

   <tt>advertise_addr</tt> are reacheable outside the datacenter.

   Agent configurations have a different IP address and these settings:

   <pre>data_dir  = "/opt/consul/data"
bootstrap_expect = 5
retry_join       = ["provider=aws tag_key=Environment-Name tag_value=consul-cluster region=us-east-1"]
retry_join_wan   = ["10.1.2.3","10.1.2.4"]
connect = {
   enabled = true
}
performance = {
   raft_multiplier = 1
}
   </pre>

   <tt>retry_join</tt> specifies the cloud provider and other metadata for <strong>auto-discovery</strong> by other Consul agents.

   <tt>retry_join_wan</tt> specifies the IP address of each datacenter ingress.

   WAN encryption has its own encryption key.

   <tt>connect</tt> refers to <strong>Consul Connect</strong> (disabled by default for security).

   <tt>raft_multiplier = 1</tt> overrides for high-performance production usage the <a target="_blank" href="https://www.consul.io/docs/install/performance">default value 5 for dev usage</a>. This setting multiplies the time between failed leader detection and new leader election. Higher numbers extends the time (slower) to reduce leadership churn and associated unavailability. 


   <a name="TLS-config"></a>

   ### TLS configuration

1. Generate TLS .pem files.

1. Update the Consul Agent config file:

   <pre>verify_incoming = true
verify_outgoing = true
verify_server_hostname = true
ca_file = "consul-agent-ca.pem"
cert_file = "dc1-server-consul-0.pem"
key_file = "dc1-server-consul-0-key.pem"
   </pre>


### Mesh Gateway

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
   All this is part of a robust "Chaos Engineering" needed for pre-production.

> At scale, customers need to optimize for stability at the <a href="#Gossip">Gossip</a> layer.<a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/reference-architecture?in=well-architected-framework/zero-trust-networking">*</a>


## Manage from another Terminal

   <a name="members"></a>

1. If you're running a Consul agent instance,<br />
   create another Terminal shell instance to interact with the Consul agent running:

   <pre><strong>consul members</strong></pre>

   <pre>Node         Address         Status  Type    Build  Protocol  DC   Partition Segment
Judiths-MBP  127.0.0.1:8301  alive   server  1.12.0  2         dc1  default &LT;all>
   </pre>

   PROTIP: The above command is only needed once to join a cluster. After that, agents Gossip with each other to propagate membership information with each other.

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

https://learn.hashicorp.com/consul

https://cloud.hashicorp.com/docs/consul/specifications

Leader/Follower (instead of Master/Slave)

   https://learn.hashicorp.com/tutorials/cloud/get-started-consul?in=consul/cloud-get-started


<hr />

<a name="Integrations"></a>

## F. Integrations to legacy VMs, mainframes, etc.

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

https://play.instruqt.com/hashicorp/tracks/consul-zero-trust-networking-with-service-mesh
Consul: Zero Trust Networking with Service Mesh

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

> "[23:07] "Consul Connect is probably the most mature simply because of Consul. Consul is a decade of polished technology, battle-tested in each production environment. It's a safe choice in terms of stability and features." -- <a target="_blank" href="https://www.youtube.com/watch?v=TAlpaC_NSUw&t=23m7s">The Best Service Mesh: Linkerd vs Kuma vs Istio vs Consul Connect comparison + Cilium and OSM on top</a>


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



<hr />

<a name="CorporateSocial"></a>

## Corporate Social 

Twitter: @hashicorp 
Ambassadors (<a target="_blank" href="https://www.hashicorp.com/blog/hashicorp-ambassador-call-for-nominations">first announced March, 2020</a>)

LinkedIn: https://www.linkedin.com/company/hash...

Facebook: https://www.facebook.com/HashiCorp


## Competition



# END