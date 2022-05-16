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

This aims to present a hands-on approach about using automation for a comprehensive technical deep dive that is succinct and logically sequenced. All without sales generalizations. All in this one single big page for easy search.

{% include whatever.html %}

This document begins with files from Hashicorps and adds automation.

1. The marketing home page for Hashicorp's Consul is 

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

1. Rock stars within Hashicorp:

   <a target="_blank" href="https://www.linkedin.com/in/rosemarywang/">Rosemary Wang</a> (Developer Advocate) - <a target="_blank" href="https://joatmon08.github.io">joatmon08.github.io</a>

   Luke Kysow (Principal Engineer, Consul)
   


<hr />

## Zero Trust (Defense in Depth)

Consul is part of the Hashicorp product line which provides modern mechanisms for the security of access and communication processes:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652570696/zero-trust-triad-1732x824_k2gfer.png"><img alt="Zero-Trust CIA Triad" width="1732" height="824" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652570696/zero-trust-triad-1732x824_k2gfer.png"></a>

In SOC2, ISO 27xxx, and other such infosec filings, companies using Hashicorp can describe their systems with these mechanisms within the "CIA Triad":

   * <a href="#MutualTLS">Mutually authenticated</a> (server and client certificates)
   * Identity-driven authentication (instead of by IP address)
   * Encrypted in transit and at rest

   * Authorized by name ("<a href="#Intentions">Intentions</a>")
   * Time-bound secrets (instead of long-lived static secrets to be hacked)
   * Audited & Logged
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

### Addressing Complexities

   The <strong>distributed</strong> nature of microservices require Enterprise teams to address several concerns:
   
   * <strong>"Ephemeral" infrastructure</strong> means IP addresses are dynamic (and toil to assign IP addresses to each service)

   * Each service should not communicate with any other service (complicated communication rules)

   * To distribute load among individual servers, load balancers (such as F5) used are a single point of failure. They work based on IP address.

      - Consul can replace legacy Load Balancers. QUESTION: Use round-robin? least-connections?

   * Complex mechanisms to <strong>secure perimeter yet communicate with outside systems</strong> (legecy and payment systems) are problematic

   * Whole-application <strong>(end-to-end) testing</strong> requires multi-team collaboration (time consuming and expensive)

   * Manual & complex processes in application delivery
   <br /><br />


<a name="Multi-platform"></a>

### Multi-platform (VMWare, mainframe)

   <a target="_blank" href="https://www.youtube.com/watch?v=nZqAAjHI0c4&t=10m" title="Running Consul on Kubernetes and Beyond">VIDEO</a>:
   Almost all enterprises also have legacy applications running VMware or in a mainframe. 
   
   That's where Hashicorp Consul comes in, with <a target="_blank" href="https://www.consul.io/use-cases/multi-platform-service-mesh">multi-platform/cloud</a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652200423/consult-multi-envoy-1734x972_ymgi7l.png"><img alt="Consult Multi-cloud Envoy" width="1734" height="972" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652200423/consult-multi-envoy-1734x972_ymgi7l.png"></a>

   <a target="_blank" href="https://www.youtube.com/watch?v=C3N4i1cFIZ0&list=PL81sUbsFNc5bT9C9ZZxg4biWcwzkPGEfk" title="whiteboard by HashiCorp Co-Founder and CTO, Armon Dadgar May 9, 2022">VIDEO</a>: 
   <a target="_blank" href="https://wilsonmar.github.io/kubernetes/">Kubernetes</a> 
   was designed with features to address each, but Consul sychronizes across everal Kubernetes instances -- in different clouds -- and also sychronizes with Serverless, Cloud Foundry, OpenShift, <a href="#VMware">legacy VMs</a>, even mainframes. 

   <img alt="Consul multi-platform" width="373" height="271" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652569270/consul-multi-platforms-373x21_jpn1bj.png">

   Consul provides better security along with less toil (productivity) for both Kubernetes and legacy platforms, across several clouds.

   That's full enterprise capabilities.

> "Multi-platform and multi-cloud choose you, due to corporate acquisitions"


<hr />


<a name="DNSQueries"></a>

## Service Discovery Registry

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652637715/consul-svc-regis-1584x1552_jnnu9g.png"><img alt="Consul Service Registry process" width="1584" height="1552" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652637715/consul-svc-regis-1584x1552_jnnu9g.png"></a>

Consul servers maintain a DNS "Services Registry" 

1. Each service (such as Redis cache in this example) is registered 

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



<a name="ESM"></a>

### Consul External Services Monitor (ESM)

When a local Consul agent cannot be installed locally, such as in cloud-managed services or incompatible hardware,
to keep Consul's service catalog up to date, periodically poll those services
by installing the Consul ESM on ___.

Such a health check added to service registration:

   <pre>token "...",
  check {
    id = ""
  }
   </pre>





2. Discover DNS SRV record

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

   * Access Control
   * Billing
   * Networking
   * Identity
   * Resource Management
   <br /><br />


   * <strong>Service Discovery</strong>: (kube-dns, kube-proxy) to identify and connect any service on any cloud or runtime. with Consul DNS
   
   * <strong>Service Configuration</strong>: (K8s Configmaps) but Consul also updates F5 and other load balancer rules, for dynamic configuration across distributed services (in milliseconds)
   
   * <strong>Segmentation</strong>: (Network Policy + Controller), providing <strong>network infrastructure automation</strong>

   * <strong>Multi-service Service Mesh</strong>: secure service-to-service traffic with <strong>Mutual TLS certificates</strong>, plus enable progressive application delivery practices.
    - Application networking and security with identity-based authorization
    - L7 traffic management
    - Service-to-service encryption
    - Health checking to automatically remove services that fail health checks

> Instead of <strong>manually</strong> changing static IP addresses and firewall rules in Load Balancers, Consul enables dynamic allocation and distribution of addresses from the Consul central "Key-Value" datastore. (Large enterprises have up to 4,000 microservices running at the same time.)


<hr />


## Value Proposition

Adoption of Consul aims to yield these benefits to organizations: Proof of Value (POV) https://learn.hashicorp.com/well-architected-framework

* Faster Time to Market from velocity of getting things done

* Reduce cost via tools (operational efficiency through more visibility and automation)

* Reduce cost via people from improved availability (uptime)

* Reduce risk of downtime from better reliability

* Reduce risk of breach from better guardrails

* Compliance with regulatory demands (automated processes)


<a name="MutualTLS"></a>

### Mutual TLS

> To encrypt traffic between nodes, each asset is given an encrypted identity in the form of a TLS certificate (in X.509, <a target="_blank" href="https://spiffe.io/">SPIFFE-compatible</a> format). Consul also provides a Proxy to enforce communications between nodes using "Mutual TLS" where each party exchange certificates with each other.

   Consul's <strong>auto-join provider</strong> enables nodes running outside of Kubernetes to join a Consul cluster running on Kubernetes API.

   Consul can <strong>auto-inject</strong> certifictes into Kubernetes Envoy Sidecars to secure communication traffic (within the Service Mesh).

   RECOMMENDED: Have Consul use Hashicorp Vault to generate dynamic x.509 certificates.
   

<a name="ConsulConnect"></a>

### Consul Connect (Service Mesh)

   Integration between Consul and Kubernetes is achieved by running Consul Service Mesh (aka Consul Connect) on Kubernetes:

   Catalog Sync: Sync Consul services into first-class Kubernetes services and vice versa. This enables Kubernetes to easily access external services and for non-Kubernetes nodes to easily discover and access Kubernetes services.

1. Have Vault act as the Certificate Authority (CA) for Consul Connect. On an already configured Vault:

   <pre><strong>vault secrets enable pki
vault secrets enable consul
   </strong></pre>

1. A sample Consul configuration to use Vault for Connect:

   <pre>connect {
   enabled = true
   ca_provider = "vault"
     ca_config {
        address = "https://vault.example.com:8200"
        token = "s.134567890abcdef123"
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

<a name="WaysToRun"></a>

## Ways to run Consul 

Hashicorp has prepared several environments how Consul can be configured for use:

<a href="HCPDemo">A. On the HCP (HashiCorp Platform) in a SaaS cloud</a> (the easiest, most standardized)

<a href="#LaptopWay">B. On a macOS laptop using Docker</a>

<a href="#TheHardWay">C. In a single datacenter (with network Gateways)</a>

<a href="#K9sWay">D. In a single datacenter using Kubernetes</a>

<a href="#Enmeshed">E. In a single datacenter using Service Mesh</a>

<a href="#MultiDatacenters">F. On multiple datacenters federated over WAN</a>

<hr />

## Consul and Nomad

Use Consul with Nomad integrations.

https://learn.hashicorp.com/tutorials/nomad/consul-service-mesh



### Demo apps

PROTIP: Adapt the template to use your own app after you are confident you have the base template working.

1. View Hashicorp-provided demo apps at:

   <a target="_blank" href="https://github.com/hashicorp-demoapp/">
   https://github.com/hashicorp-demoapp/</a>

1. <a target="_blank" href="https://github.com/hashicorp-demoapp/hashicups-setups">"Hashicups" from https://github.com/hashicorp-demoapp/hashicups-setups</a> comes with a <a target="_blank" href="https://github.com/hashicorp-demoapp/hashicups-client-go">Go library</a>.


<a name="HCP"></a>

## A. HCP (Hashicorp Cloud Platform)

   To be free of on-prem. server install and management hassles (security, scaling disk space, upgrades, etc.), many prefer using the <a name="HCPCloud">Hashicorp Cloud Platform (<strong>HCP</strong>) Consul Cloud</a>. HCP Consul provides a convenient clickable <a href="#ConsulWebGUI">Web GUI</a> rather than the CLI of OSS. 
   
   The fastest and easiest way to use Consul is to use the Hashcorp-Managed Cloud.


<a name="HCPCloudPricing"></a>

### HCP Consul Cloud Pricing

   https://registry.terraform.io/providers/hashicorp/hcp/latest/docs

   https://cloud.hashicorp.com/products/consul/pricing

   https://cloud.hashicorp.com/docs/consul#features

   * A Development environment starts at 0.027/hr for up to 50 service instances

   * A "Standard" environment starts at $0.069/hr plus $0.02/hr per service Small instance

   * A "Plus" environment starts at $0.104/hr

   https://www.hashicorp.com/products/consul/pricing
  

<hr />

<a name="LaptopWay"></a>

## B. On a macOS laptop using Docker

<a name="InstallConsulBinary"></a>

### Ways to use Consul binary
   
   PROTIP: The Consul executable binary is designed to run either as a local long-running <strong>daemon</strong> or in <strong>server mode</strong>. See install instructions below for each operating system:
   macOS, Linux, Windows.

   Consul can be controlled using:
   * <a href="#ConsulWebGUI">GUI</a>
   * <a href="#CLI-commands">CLI</a>
   * API calls from within a custom program (written in Go, etc.)
   <br /><br />


<a name="ConsulWebGUI"></a>

### Consul web GUI

1. When the <a href="#RunBackground">Consul server is invoked</a>:

   <pre>http://localhost:8080/ui/${DATACENTER1_ID}/services</pre>

   <img alt="Consul GUI" width="573" height="104" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652110651/consul-gui-573x104_zb5lsx.png">

   The Consul GUI provides a mouse-clickable way for you to conviently work with these (explained below):

   * <a href="#Services">Services</a> (in the Service Catalog)

   * <a href="#Nodes">Nodes</a> is the number of Consul instances

   * <a href="#KeyValue">Key/Value</a> datastore of IP address generated

   * <a href="#ACL">ACL</a> (Access Control List) entries which block or allow network access based on port number

   * <a href="#Intentions">Intentions</a> to allow or deny connections between specific <strong>services by name</strong> (instead of IP addresses) in the Service Graph

<a name="Snapshots"></a>

### Data Snapshots

BTW, the above data are captured in complete point-in-time snapshots (gzipped tar file) of Consul's committed state. Other data also in the Snapshot include:

   * Sessions
   * Prepared queries
   <br /><br />

Snapshots are typically performed by the LEADER, but a FOLLOWER can take it if the <tt>\-\-stale</tt> flag is specified.

<hr />

<a name="CLI-commands"></a>

### CLI commands

1. Consul can be controlled using <strong>CLI commands</strong> without licensing as FOSS (Free open-sourced software) using code open-sourced at:

   <a target="_blank" href="https://github.com/hashicorp/consul">https://github.com/hashicorp/consul</a>

   Consul written in the <a target="_blank" href="https://wilsonmar.github.io/golang/">Go programming language</a>. The GUI is in JavaScript with Handlebars templating, SCSS, and Gherkin.

   Initiated in 2014, it has garnered nearly 25,000 stars, with over a million downloads monthly.


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
     "token": "12345678-..."
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




1. "Discover" nodes using DNS interface <tt>dig</tt> command to the Consul agent's <strong>DNS server</strong>, which runs on port 8600 by default:

   <pre><strong>dig @127.0.0.1 -p 8600 "$(hostname).node.consul"</strong></pre>

   REMEMBER: Only healthy instances are returned.

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

   Alternately, discover apps using <tt>dig appb.service.consul</tt>

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

When a local Consul agent cannot be installed locally, such as in cloud-managed services or incompatible hardware,
to keep Consul's service catalog up to date, periodically poll those services
by installing the Consul ESM on ___. Such a health check is added to service registration like this:

   <pre>token "...",
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

1. Names used in the script:

   <tt>ACL_POLICY_FILE_NAME="some-service-policy.hcl"<br />
   ACL_POLICY_NAME="some-service-policy"<br />
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
  token = "2345678-...",
}
   </pre>



   <a name="Ports"></a>

   ### Ports in ACL (Access Control List)

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

## Run on your macOS

1. Install Terraform client

2. Get a Terraform account

3. Get AWS credentials


   ### Install client on macOS

   Install the client using Hashicorp's tap:
   * https://learn.hashicorp.com/tutorials/consul/get-started-install?in=consul/getting-started
   <br /><br />

1. WARNING: Don't use "brew install consul" ???

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

   <pre><strong>consul agent -dev -bind 127.0.0.1 -node machine</strong></pre>

   <pre>[DEBUG] agent.router.manager: Rebalanced servers, new active server: number_of_servers=1 active_server="wilsonmar-N2NYQJN46F (Addr: tcp/127.0.0.1:8300) (DC: dc1)"
   </pre>

1. TODO: Setup compatibility mode?

1. Verify install:

   <pre><strong>consul version</strong></pre>

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

## Start agent in forground

   <pre><strong>consul agent -dev -node $(hostname) -config-dir="/etc/consul.d"</strong></pre>

   <tt><strong>-node $(hostname)</strong></pre> is specified for macOS users: Consul uses your hostname as the default node name. If your hostname contains periods, DNS queries to that node will not work with Consul. To avoid this, explicitly set the name of your node with the 
   
   <tt>-config-dir="/etc/consul.d"</tt> specifies the configuration .ini file:

   <pre>[unit]
Description=Consul
Requires=network-online.target
After=network-online.target
[Service]
Restart=on-failure
ExecStart=/usr/local/bin/consul agent -config-dir="/etc/consul.d"
User=consul
   </pre>

<hr />

<a name="RunBackground"></a>

## Start server in background

1. Use:

   <pre>brew services start hashicorp/tap/consul</pre>


   <a name="SidecarInject"></a>

   ### Sidecar proxy injection

   Consul comes with a Sidecar proxy, but also supports the Kubernetes Envoy proxy (from Lyft).
   This means that migration to Consul can occur gradually. ???

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

<a name="TheHardWay"></a>

### C. In a single datacenter (with network Gateways)

In <a target="_blank" href="https://www.youtube.com/c/HashiCorp">
Hashicorp's YouTube channel covering all their 8 products</a>:

Rosemary Wang (Developer Advocates at HashiCorp) with J. Cole Morrison hold fun <a target="_blank" href="https://www.twitch.tv/hashicorplive">hashicorplive Twitch parties</a> [about two hours each] to show how to learn Consul "the hard way" (and no Kubernetes) 
by setting it from scratch in their
<a target="_blank" href="https://www.youtube.com/playlist?list=PL81sUbsFNc5b8i2g2sB_tG-PuZxEdlDpK">
10-part VIDEO series: "Getting into HashiCorp Consul"</a> 
with code at <a target="_blank" href="https://github.com/jcolemorrison/getting-into-consul">
github.com/jcolemorrison/getting-into-consul</a>

<a name="GatewaysDiagram"></a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652502401/consul-getting-into-1920x1080_gku46e.png">
<img alt="Consul" width="1090" height="1080" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652502401/consul-getting-into-1920x1080_gku46e.png"></a>

To enforce intentions between services, Consul offers three types of Gateways in the data path to validate authenticity and traffic flows:
   * Service Mesh Gateway
   * Ingress Gateways
   * Terminating Gateways
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

   
   ### Using Vagrant

1. <a target="_blank" href="https://www.youtube.com/watch?v=nZqAAjHI0c4&t=11m34s" title="by Hashicorp Ambassador within Honeycomb.io Jason Harley @redmind">VIDEO</a>: Based on a Kubernetes 5-node cluster created using this Helm chart:


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


<hr />

<a name="Enmeshed"></a>

## E. In a single Enterprise datacenter using Service Mesh


<a name="Enterprise"></a>
   
### Enterprise licensing

   However, additional (teamwork) features are unlocked with licensing of an "Enterprise" Consul installed by customer-(self)-managed organizations.
   
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652140723/hashi-oss-prods-3130x1306_rso9yn.png"><img alt="hashi-oss-prods-3130x1306" width="3130" height="1306" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652140723/hashi-oss-prods-3130x1306_rso9yn.png"></a>


### Enterprise HA (High Availability)

   In order for a datacenter to withstand the sudden loss of a server within a single Availability Center or the loss of an entire Availability Zone, setup <strong>6 servers</strong> for best resilience:

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

   Actually, <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/reference-architecture?in=well-architected-framework/zero-trust-networking">Hashicorp's Consul Enterprise Reference Architecture</a> for a single cluster is <strong>5 Consul server nodes</strong> across <strong>3 availability zones</strong>.

   <a name="RefArch"></a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208811/hashicor-consult-ref-arch-1033x401_veqcwx.png"><img alt="Consul Ref. Arch" width="1033" height="401" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208811/hashicor-consult-ref-arch-1033x401_veqcwx.png"></a>

   Within an Availability Zone, if a voting FOLLOWER becomes unavailable, a non-voting member in the same Availability Zone is promoted to a voting member:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652579825/consul-promote-in-az-550x342_a87mri.png"><img alt="Consul promote in AZ" width="550" height="342" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652579825/consul-promote-in-az-550x342_a87mri.png"></a>


<a name="Raft"></a>

### Raft concensus algorithm

   To ensure data <strong>consistency</strong> among nodes across Availability Zones, the <a target="_blank" href="https://www.consul.io/docs/architecture/consensus#deployment_table">Raft consensus algorithm</a> (a simpler implementation of <a target="_blank" href="https://en.wikipedia.org/wiki/Paxos_%28computer_science%29">Paxos</a>) maintains consistent state storage for updating catalog, session, prepared query, ACL, and KV state.
   
   Each transaction is considered "comitted" when more than half the followers register it.
   
   If the LEADER server fails, an election is automatically held among a quorum (adequate number of) FOLLOWERs to elect a new LEADER from among candidates.

   <a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/get-started-create-datacenter?in=consul/getting-started">TUTORIAL</a>:

   <!-- https://hashicorp.app.workramp.com/task_assignments/cbb60ad0-cfd5-11ec-aade-06cf503dca07 -->


<a name="Gossip"></a>

### Serf LAN & WAN Gossip 

The Serf <a target="_blank" href="https://en.wikipedia.org/wiki/Gossip_protocol">Gossip protocol</a> is used to ensure that data is distributed, with reliable communication not assumed. The protocol provides for:

   * Membership information which enable servers to perform cross-datacenter requests

   * Events broadcasting
   
   * Failure detection to gracefully handle loss of connectivity

1. Generate Gossip encryption key (a 32-byte AES GCM symmetric key that's base64-encoded).

1. Arrange for regular key rotation (using the Keyring built in Consul)

1. Install encryption key on each agent.

1. Review Gossip Telemetry output.


<hr />

<a name="MultiDatacenters"></a>

## F. On multiple datacenters over WAN


### Multi-region federation

   The Enterprise edition of Consul enables communication across datacenters using Federate Multiple Datacenters coordinated using <strong>WAN Gossip</strong>.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208152/consul-federation-804x817_l953gc.png"><img alt="Consul Federation" width="804" height="817" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1652208152/consul-federation-804x817_l953gc.png"></a>

   REMEMBER: Datacenter federation is not a solution for data replication.
   There is no built-in replication between datacenters.
   So use <strong>consul-replicate</strong> to replicate KV between datacenters. 


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

<a name="Autopilot"></a>

### Enterprise Autopilot CLI Commands

   For <strong>write redundancy</strong> through automatic replication across several zones, add a tag "az" for "availability zone" to invoke the Enterprise feature "<a target="_blank" href="https://learn.hashicorp.com/tutorials/consul/autopilot-datacenter-operations">Consul Autopilot</a>":

   <pre>autopilot = {
  redundancy_zone_tag = "az"
   }
node_meta = {
   az = "Zone1"
}
   </pre>

   Enterprise Autopilot features perform automatic, operator-friendly management of Consul servers, including cleanup of dead servers, monitoring the state of the Raft cluster, automated upgrades, and stable server introduction.

   Autopilot enables Enterprise Redundancy Zones to improve resiliency and scaling of a Consul cluster. It can add "non-voting" servers which will be promoted to voting status in case of voting server failure.
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


   <a name="API"></a>

   ### API

1. Custom programs (written in Go, etc.) can communication with Consul using HTTP API calls defined in:

   <a target="_blank" href="https://www.consul.io/api">https://www.consul.io/api</a>

1. Obtain JSON using API:

   <pre><strong>curl localhost:8500/v1/catalog/nodes</strong></pre>

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


   ### Leave (Stop) Consul gracefully

   CAUTION: When operating as a server, a graceful leave is important to avoid causing a potential availability outage affecting the consensus protocol.

1. Gracefully stop the Consul by making it leave the Consul datacenter and shut down:

   <pre><strong>consul leave</strong></pre>

   Logs in the sample response:

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

   Consul automatically tries to reconnect to a failed node, assuming that it may be unavailable because of a network partition, and that it may be coming back.







<hr />

## To create the demo environment

1. Yaml file:

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


## Outside

A "terminating gateway"


<hr />

## Consul Tutorials from Hashicorp

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


<!--
<a name="Instruqt"></a>

### Hashicorp Instruqt (Hands-on) Labs

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

-->

<hr />

<a name="HTTP-headers"></a>

## Customize HTTP Response Headers

1. Ask whether you app should have additional security headers such as 
   <tt>X-XSS-Protection</tt> for API responses.


## Collaborations

Ambassador's Edge Stack (AES) for service discovery.


## Competitors

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



## References

https://www.pagerduty.com/docs/guides/consul-integration-guide

https://www.youtube.com/watch?v=7VtZEZAi6qU&t=14s
Simplifying Infrastructure and Network Automation with HashiCorp (Consul and Nomad) and Traefik 


<a name="CorporateSocial"></a>

## Corporate Social 

Twitter: @hashicorp 
Ambassadors (<a target="_blank" href="https://www.hashicorp.com/blog/hashicorp-ambassador-call-for-nominations">first announced March, 2020</a>)

LinkedIn: https://www.linkedin.com/company/hash...

Facebook: https://www.facebook.com/HashiCorp


## Competition



# END