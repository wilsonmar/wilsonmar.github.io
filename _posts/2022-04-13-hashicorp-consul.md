---
layout: post
date: "2022-05-09"
file: "hashicorp-consul"
title: "Hashicorp Consul"
excerpt: "Enterprise Service Mesh securing APIs in VMs & K8s"
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

This aims to present a hands-on approach for a technical deep dive that is succinct and logically sequenced.

{% include whatever.html %}

1. The marketing home page for Hashicorp's Consul is 

   https://www.consul.io/

1. Detailed documentation for the offering is also at that host name:

   https://www.consul.io/docs

1. Technical Discussions:

   https://discuss.hashicorp.com/c/consul/29

1. Stackoverflow has highly technical questions & answers:

   https://stackoverflow.com/search?q=%23hashicorp-consul

1. Reddit:

   https://www.reddit.com/search/?q=hashicorp%20consul
   

   ## Why Consul

   To build a fast and reliable system in the cloud today, enterprises architect systems using distributed <strong>microservices</strong> instead of monolithic architectures.

   > "Microservices is the most popular architectural approach today. It's extremely effective. It's the approach used by many of the most successful companies in the world, particularly the big web companies." --<a target="_blank" href="https://www.youtube.com/watch?v=zzMLg3Ys5vI" title="Oct 28, 2020">Dave Farley</a>

   But the distributed nature of microservices can lead to insecure implementations.

   Consul provides both better security and less toil for workers.
   
   Instead of <strong>manually</strong> changing static IP addresses and firewall rules in Load Balancers,
   Consul enables dynamic allocation and distribution of addresses from the Consul central "Key-Value" datastore. Large enterprises have up to 4,000 microservices.
   
   https://www.youtube.com/watch?v=mxeMdl0KvBI
   Introduction to HashiCorp Consul

   https://www.youtube.com/watch?v=Qbo8Oc-pJwc
   What is the Crawl, Walk, Run Journey of Adopting Consul

   To encrypt traffic between all parts, each asset is given an encrypted identity in the form of a TLS certificate (in X.509, SPIFFE-compatible format). Consul also provides a Proxy to enforce communications between nodes using "Mutual TLS" where each party exchange certificates with each other.

   https://www.youtube.com/watch?v=UHLr8UsHuDA
   HashiCorp Consul Introduction: What is a Service Mesh?
   by Developer Advocate <a target="_blank" href="https://www.linkedin.com/in/nicolereneehubbard/">Nicole Hubbard</a> 

   Consul ??? "Service Mesh"

   https://www.youtube.com/watch?v=K93ZaUzwEWk
   How does Consul work with Kubernetes and other workloads?

   https://github.com/hashicorp/consul-k8s

   https://platform9.com/blog/understanding-kubernetes-loadbalancer-vs-nodeport-vs-ingress/


   ## Ways to host Consul
   
1. Consul can be controlled using <strong>CLI commands</strong> without licensing as FOSS (Free open-sourced software) using code from:

   https://github.com/hashicorp/consul

   A single Consul program can run either as a local agent or as server. See install instructions below.

   However, additional features are available with licensing of an Enterprise self-managed Consul server.
   
   If you want to be free of server management hassles, use <a name="HCPCloud"><strong>HCP</strong> Consul Cloud</a>. HCP Consul also has a convenient clickable <a href="#ConsulWebGUI">Web GUI</a> rather than the CLI of OSS. The easiest way to use Consul is to use the Hashcorp-Managed Cloud.


   <a name="ConsulWebGUI"></a>

   ## Consul web GUI

   <img alt="Consul GUI" width="573" height="104" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652110651/consul-gui-573x104_zb5lsx.png"></a>

   The Consul GUI provides a clickable way for you to work with these:

   * Services
   * Nodes
   * Key/Value
   * ACL
   * Intentions
   <br /><br />

   
   ??? datacenter

   ## Targets

   Consul is used to manage:

   * VMs (locally)

   * Kubernetes Service Mesh


https://learn.hashicorp.com/tutorials/consul/reference-architecture?in=well-architected-framework/zero-trust-networking
Consul Reference Architecture

   DEFINITION: To Hashicorp, a "data center" is a stand-alone set of nodes.

   PROTIP: The recommended maximum size for a single datacenter is 5,000 Consul client agents.

   https://learn.hashicorp.com/tutorials/consul/get-started-create-datacenter?in=consul/getting-started

   ### Core use cases of Consul

   * Multi-cloud service mesh which provides:
        Application networking and security with identity-based authorization
        L7 traffic management
        Service-to-service encryption
   
   * Service discovery with Consul DNS
   
   * Health checking to automatically remove services that fail health checks


   <a name="HCPCloud"></a>

   ### HCP Consul cloud

   Note there is a <strong>HCP Consul</strong> (HashiCorp Cloud Platform) which is a licensed SaaS offering running in the cloud.

   https://registry.terraform.io/providers/hashicorp/hcp/latest/docs

   https://cloud.hashicorp.com/products/consul/pricing

   https://cloud.hashicorp.com/docs/consul#features

   * Development starts at 0.027/hr for up to 50 service instances

   * Standard starts at $0.069/hr plus $0.02/hr per service Small instance

   * Plus starts at $0.104/hr

   https://www.hashicorp.com/products/consul/pricing
  

## Tutorials from Hashicorp

https://learn.hashicorp.com/consul

https://cloud.hashicorp.com/docs/consul/specifications

Leader/Follower (instead of Master/Slave)

   https://learn.hashicorp.com/tutorials/cloud/get-started-consul?in=consul/cloud-get-started

   https://learn.hashicorp.com/tutorials/cloud/terraform-hcp-consul-provider

   https://learn.hashicorp.com/tutorials/cloud/consul-deploy
   1. Create a HashiCorp Virtual Network (HVN)
   2. Deploy HCP Consul
   3. Peer your HVN and AWS VPC
   4. Configure L3 routing and security

1. HCP workflows:

   * Access Control
   * Billing
   * Networking
   * Identidy
   * Resource Management


https://learn.hashicorp.com/tutorials/cloud/terraform-hcp-consul-provider#hcp_consul_base

1. git@github.com:hashicorp/learn-hcp-consul.git
1. cd learn-hcp-consul/hcp_consul_vpc
1. Files 
   * consul.tf: describes the HPC Consul cluster you are going to create.
   * vpc_peering.tf: describes the AWS VPC and the peering with the HVN.
   * variables.tf: sets the variables for your deployment.
1. Create

   hcp_hvn resource.

   * A peering connection to a VPC
   * An HVN route targeting that peering connection
   * A Consul cluster showed in the associated resources

1. Destroy resources


## Running on your macOS

1. Install Terraform client

2. Get a Terraform account

3. Get AWS credentials


### Install client on macOS

   Install the client using Hashicorp's tap:
   * https://learn.hashicorp.com/tutorials/consul/get-started-install?in=consul/getting-started

1. WARNING: Don't use "brew install consul"

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

1. Install the client 

   <pre><strong>brew tap hashicorp/tap
brew install hashicorp/tap/consul
   </strong></pre>

   Notice the caveats:

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

   <a name="RunBackground">Option A: Run Consul in background, which restarts automatically at login:</a>

   <pre>brew services start hashicorp/tap/consul</pre>

   <a href="#RunForeground">Option B: Run Consul in foreground, which occupies the Terminal and does not start again at login:</a>

   <pre><strong>consul agent -dev -bind 127.0.0.1</strong></pre>

   <pre><strong>consul agent -dev -node machine</strong></pre>

   <pre>[DEBUG] agent.router.manager: Rebalanced servers, new active server: number_of_servers=1 active_server="wilsonmar-N2NYQJN46F (Addr: tcp/127.0.0.1:8300) (DC: dc1)"
   </pre>

1. TODO: Setup compatibility mode?

1. Verify install:

   <pre><strong>consul version</strong></pre>

   <pre>Consul v1.12.0
Revision 09a8cdb4
Protocol 2 spoken by default, understands 2 to 3 (agent will automatically use protocol >2 when speaking to compatible agents)
   </pre>

1. Client menu

   <pre><strong>consul</strong></pre>

   <pre>Usage: consul [--version] [--help] &LT;command> [&LT;args>]
&nbsp;
Available commands are:
    acl            Interact with Consul's ACLs
    agent          Runs a Consul agent
    catalog        Interact with the catalog
    config         Interact with Consul's Centralized Configurations
    connect        Interact with Consul Connect
    debug          Records a debugging archive for operators
    event          Fire a new event
    exec           Executes a command on Consul nodes
    force-leave    Forces a member of the cluster to enter the "left" state
    info           Provides debugging information for operators.
    intention      Interact with Connect service intentions
    join           Tell Consul agent to join cluster
    keygen         Generates a new encryption key
    keyring        Manages gossip layer encryption keys
    kv             Interact with the key-value store
    leave          Gracefully leaves the Consul cluster and shuts down
    lock           Execute a command holding a lock
    login          Login to Consul using an auth method
    logout         Destroy a Consul token created with login
    maint          Controls node or service maintenance mode
    members        Lists the members of a Consul cluster
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


   <a name="RunForeground"></a>

   ### Start agent in forground

   <pre><strong>consul agent -dev -node $(hostname)</strong></pre>

   <tt><strong>-node $(hostname)</strong></pre> is specified for macOS users: Consul uses your hostname as the default node name. If your hostname contains periods, DNS queries to that node will not work with Consul. To avoid this, explicitly set the name of your node with the 
   
   "Node info in sync"

1. Press control+C to exit the Consul instance.

1. Create another Terminal shell instance to interact with the instance:

   <pre><strong>consul members</strong></pre>

   <pre>Node         Address         Status  Type    Build  Protocol  DC   Partition Segment
Judiths-MBP  127.0.0.1:8301  alive   server  1.12.0  2         dc1  default &LT;all>
   </pre>

1. For more detail about Tags:

   <pre><strong>consul members -detailed</strong></pre>
% consul members -detailed
Node                  Address         Status  Tags
wilsonmar-N2NYQJN46F  127.0.0.1:8301  alive   acls=0,ap=default,build=1.12.0:09a8cdb4,dc=dc1,ft_fs=1,ft_si=1,id=40fee474-cf41-1063-2790-c8ff2b14d4af,port=8300,raft_vsn=3,role=consul,segment=&LT;all>,vsn=2,vsn_max=3,vsn_min=2,wan_join_port=8302
   </pre>

   VSN ???

1. Obtain JSON:

   <pre><strong>curl localhost:8500/v1/catalog/nodes</strong></pre>

1. Discover nodes using DNS interface <tt>dig</tt> command to the Consul agent's DNS server, which runs on port 8600 by default:

   <pre><strong>dig @127.0.0.1 -p 8600 "$(hostname).node.consul"</strong></pre>

   <pre>; <<>> DiG 9.10.6 <<>> @127.0.0.1 -p 8600 wilsonmar-N2NYQJN46F.node.consul
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 16775
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

1. Gracefully stop the Consul by making it leave the Consul datacenter and shut down:

   <pre><strong>consul leave</strong></pre>

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

Consul notifies other members that the agent left the datacenter. When an agent leaves, its local services running on the same node and their checks are removed from the catalog and Consul doesn't try to contact that node again.

Consul will automatically try to reconnect to a failed node, assuming that it may be unavailable because of a network partition, and that it may be coming back.


   <a name="RunBackground"></a>

   ### Start server in background

   <pre>brew services start hashicorp/tap/consul</pre>

If an agent is operating as a server, a graceful leave is important to avoid causing a potential availability outage affecting the consensus protocol. Check the Adding and Removing Servers tutorial for details on how to safely add and remove servers.


<hr />

## Service Graph Intentions

1. Deny the web server from talking to anything:

   <pre><strong>consul intention create -deny web '*'
   </strong></pre>

1. Allow the web server to talk to db (the database):

   <pre><strong>consul intention create -allow web db
   </strong></pre>

   Rules are set on the service itself, not on where they are implemented.

   
## Mesh Gateways

When performing cross-cloud service communication:

services avoid exposing themselves on public networks by using Mesh Gateways (built upon Envoy) which sit on the public internet to accept L4 traffice with mTLS. Mess Gateways perform NAT (Network Address Translation) to route traffic to endpoints in the private network.

Consul provides an easy SPOC (Single Point of Contact) to specify rules for communication instead of requesting Neworking to manually configure a rule in the firewall.

## Canary Deployments with L7 Traffic Management


## To create the demo environment

1.

   * <strong>helm-consul-values.yaml</strong> changes the default settings to give a name to the datacenter, specify the number of replicas, and <a href="#SidecarInject">enable Injection</a>
   * consul-helm
   * counting.yaml
   * dashboard.yaml
   <br /><br />

1. Command:

   <pre><strong>helm install consul -f helm-consul-values.yaml ./consul-helm
   </strong></pre>

1. On a new Terminal window:

   k port-forward svc/consul-tonsul-ui 8080:80

   <pre>Forwarding from 127.0.0.1:8080 -> 8500
   Forwarding from [::1]:8080 -> 8500
   </pre>

1. View the Consul dashboard:

   <pre>http://localhost:8080/ul/<em>datacenter</em>/services</pre>



<a name="SidecarInject"></a>

## Sidecar proxy registration

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

## Other Instruqt Labs

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

https://play.instruqt.com/hashicorp/tracks/consul-service-mesh
Consul Enterprise Academy: Service Mesh


https://play.instruqt.com/hashicorp/tracks/tf-azure-consul-f5-workshop
Consul F5 Service Discovery

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


## Competitors

https://konghq.com/kong-mesh

## References

https://www.pagerduty.com/docs/guides/consul-integration-guide

<a name="CorporateSocial"></a>

## Corporate Social 

Twitter: @hashicorp 
LinkedIn: https://www.linkedin.com/company/hash...
Facebook: https://www.facebook.com/HashiCorp

## Competition

ArgoCD