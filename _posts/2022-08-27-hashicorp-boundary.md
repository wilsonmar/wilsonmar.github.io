---
layout: post
date: "2023-01-25"
file: "hashicorp-boundary"
title: "HashiCorp Boundary"
excerpt: "Secure SSH accessing servers in AWS and other clouds: implement Zero-Trust with granular control of least-privilege just-in-time access using HashiCorp Boundary"
tags: [Zero-Trust, HashiCorp, Network]
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

The world is rushing to HashiCorp's Boundary due to the need to install <strong>Zero-Trust Networking</strong>,
especially within the US federal government in repsonse to the White House Executive Order in 2020. 

Zero-Trust is about shifting from obsolete assumptions, processes, and tools. For example:
  
> "What were we thinking creating a system that leaves  <strong>long-term SSH keys</strong> around to be stolen?"

Since its announcement on October 2020, HashiCorp's Boundary is revolutionizing how we connect remotely into servers (such as PostgreSQL, MySQL, etc.) within AWS, Azure, Google, IBM, and other clouds.

{% include whatever.html %}


<a name="Why"></a>

## Why? The problem addressed

<a href="#[1]"></a> 
<a target="_blank" href="https://i.pinimg.com/originals/74/b7/fe/74b7fea8474d4353b277051b4b898e50.jpg"><img alt="HashiCorp Boundary beats vpn and bastion hosts 1466x610.jpg" width="1466" height="610" src="https://i.pinimg.com/originals/74/b7/fe/74b7fea8474d4353b277051b4b898e50.jpg"></a>


### No more Bastion Host Jump Box

The now "traditional" (<em>passe</em> security-wise) is to go through a Linux <strong>SSH bastion host</strong>, with a command such as:

   <ul><pre>ssh -L</pre>
   </ul>

> "What were we thinking when we create <strong>Bastion hosts</strong> -- essentially paying for an additonal server for hackers to access?

Bastion host, users are not differentiated because the host provides "all or nothing" access.

And SSH takes some <strong>work to setup</strong> securely - users would need to mess with another set of secrets to a <strong>specific IP address</strong>.

### No more VPN tunnels

VPNs improves on Bastion hosts in that VPNs controls access by each user's IP address.
VPNs are difficult to install by each user.
And they're expensive, introduce bandwidth limits, and don't scale well.
Multiple VPNs are difficult to setup, and even more costly.


That's why Boundary manages the "identity" of each user.


<hr />

## Solution: Identity-based

   * <a target="_blank" href="https://www.youtube.com/watch?v=tUMe7EsXYBQ">VIDEO: What is Boundary?</a> (Whiteboard introduction to HashiCorp Boundary by CTO Armon Dadgar)
   <br /><br />

<a name="targets"></a>

Boundary is called "Software-Defined Perimeter (SDP)" software because it provides secure access into a private network's <strong>targets</strong> (app server endpoints) you want to access.

<a target="_blank" href="https://www.youtube.com/watch?v=eRZuaw0AW0I&t=3m36s">VIDEO:</a>: 
HashiCorp's Boundary authenticates & authorizes based on the <strong>identity name</strong> of a server rather than its IP address and port number. (via OIDC protocol) with a 3rd-party IdP (trusted identity provider such as Okta, GitHub, Auth0, AWS, Azure, GCP, etc.). 

Boundary automates service <strong>discovery</strong> as workloads are created or changed dynamically.

Additionally, Boundary provides Just-In-Time network access.
A user may be allowed access to a server for only, say, 5-minute session the same day.
Credentials provided by Boundary are temporary, so it can't be lost like a static secret.
And if lost, damage is limited.

Boundary maintains a Dynamic Host Catalog of hosts and targets (in a Postgres database).

In other words, HashiCorp's Boundary is an intelligent proxy.


<hr />

## Different ways to run Boundary Server

There are different ways:

   * <a href="#HCP">SaaS Boundary on HCP</a> - HashiCorp Boundary is available for enterprise use with support on SaaS cloud from HashiCorp.

   * <a href="#LocalInstall">Run Boundary in dev mode locally</a>.

   * <a href="#OSS">Open-Source</a> - Support from HashiCorp Customer Success is not currently available for those who install the free Open-Source edition.
   <br /><br />

<hr />


<a name="HCP"></a>

## SaaS Boundary on SaaS HCP 

Boundary on HCP (SaaS service managed by HashiCorp) went (free) beta preview July 2022.
<a target="_blank" href="https://cloud.hashicorp.com/products/boundary/pricing">HCP Pricing</a>: 
HCP Boundary is <strong>FREE for the first 50 sessions each month</strong>, using less than 1GB of data transfer per session. Beyond that, you are charged $.50 per session and $.50/per additional GB of session transfer data.

1. Create a HCP account at 

   https://portal.cloud.hashicorp.com/sign-up?product_intent=boundary

1. On the left HCP menu, click Services: Boundary.
1. Click the blue "Deploy Boundary".

   <a target="_blank" href="https://i.pinimg.com/originals/f8/97/5a/f8975aca169c269fe1fa525e963ad50f.jpg"><img alt="HCP Boundary init" src="https://i.pinimg.com/originals/f8/97/5a/f8975aca169c269fe1fa525e963ad50f.jpg"></a>

1. Define a Boundary name according to a convention such as:

   base-boundary-cluster

1. Define an Administrator account name (according to a convention)

   base-boundary-cluster-admin

1. Define a strong password (more than 20 characters)
1. Click "Deploy".
  
1. Copy and save the <strong>Admin UI</strong>, such as:

   https://c805c67f-eaa7-43f8-90d4-4c2a4e28a9ea.boundary.hashicorp.cloud/scopes/global/authenticate/ampw_vPzFIBfZXJ

1. Copy the Cluster URL, such as:

   https://c805c67f-eaa7-43f8-90d4-4c2a4e28a9ea.boundary.hashicorp.cloud

   This is the address registered users would provide to gain access.

<hr />

<a name="LocalInstall"></a>

## Install for local usage

TODO: I'm working on a shell file that does the following with one command.

1. In a browser specify URL:

   <a target="_blank" href="https://boundaryproject.io">https://boundaryproject.io</a>

   Notice that HashiCorp supports a wide range of modern and legacy operating systems:<br />
   macOS, Windows, Linux, FreeBSD, NetBSD, OpenBSD, Solaris

   PROTIP: The Boundary executable contains functionality to be used as a client, worker, server, in Dev mode

   Boundary consists of two server components: Controllers, which serve the API and coordinate session requests; and Workers, which perform the actual session handling. A normal Boundary installation will consist of one or more Controllers paired with one or more Workers. A single Boundary binary can act in either of these two modes.

   HashiCorp has created executables for both CLI and <a href="#<a name="Boundary.app_GUI">GUI app</a>.

   ### CLI executable install

1. On macOS, HashiCorp doesn't provide a "brew install boundary", so:

   <pre><strong>brew upgrade
   brew tap hashicorp/tap
   brew install hashicorp/tap/boundary
   </strong></pre>

   NOTE: The installer recognizes whether you have a M1/M2 ARM or an Intel machine.

1. Install autocompletion to <tt>$HOME/.bash_profile </tt> and <tt> $HOME/.zshrc</tt> so this only needs to be done once:

   <pre><strong>boundary config autocomplete install</strong></pre>

   There is no response to that unless an error occures, such as running it more than once.

1. The above would enable you to <strong>press tab once or twice</strong> after typing:
  
   <pre><strong>boundary</strong></pre>
   <pre>accounts              credentials           managed-groups
auth-methods          database              roles
auth-tokens           dev                   scopes
authenticate          groups                server
config                host-catalogs         sessions
connect               host-sets             targets
credential-libraries  hosts                 users
credential-stores     logout                workers
   </pre>

1. Get the program's version:

   <pre><strong>boundary version</strong></pre>
   or
   <pre><strong>boundary -v</strong></pre>

   <pre>Version information:
  Git Revision:        02e410af7a2606ae242b8637d8a02754f0a5f43e
  Version Number:      0.11.2
   </pre>

   PROTIP: CLI code to get just the version ("0.11.2") is:

   <pre>BOUNDARY_VERSION=$( boundary -v | grep "Version" | awk '{print $3}' )
   echo "BOUNDARY_VERSION=$BOUNDARY_VERSION"
   </pre>

   NOTE: <tt>sed -n '4p'</tt> is a (counter-intuitive) alternative to grep.

1. View the latest and previous releases and its SHA for the git commit creating a release at:
   
   <a target="_blank" href="https://github.com/hashicorp/boundary/releases">https://github.com/hashicorp/boundary/releases</a>


   ### CLI Shortcuts

2. Alternately, if you prefer less typing, for quicker invocation of "boundary", set an alias to use "bdy" instead

   <pre>alias bdy="boundary"</pre>

3. That would enable you to spend less time typing:
  
   <pre><strong>bdy version</strong></pre>


   <a name="CommandList"></a>

   ### Command List

3. Use the alias to get a list of commands (and functionality from  Boundary):
  
   <pre><strong>bdy --help</strong></pre>

   A menu of concepts in alphabetical order:
  
   <pre>Usage: boundary &LT;command> [args]
&nbsp;
Commands:
    accounts                  Manage Boundary accounts
    <a href="#auth-methods">auth-methods</a>              Manage Boundary auth methods
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
    <a href="#host-catalogs">host-catalogs</a>             Manage Boundary host catalogs
    <a href="#host-sets">host-sets</a>                 Manage Boundary host sets
    <a href="#hosts">hosts</a>                     Manage Boundary hosts
    logout                    Delete the current token within Boundary and forget it locally
    managed-groups            Manage Boundary managed groups
    roles                     Manage Boundary roles
    <a href="#scopes">scopes</a>                    Manage Boundary scopes
    server                    Start a Boundary server
    sessions                  Manage Boundary sessions
    <a href="#targets">targets</a>                   Manage Boundary targets
    <a href="#users">users</a>                     Manage Boundary users
    workers                   Manage Boundary workers
   </pre>

   ### Documentation online

   Clicking the question mark icon brings you to<br />
   <a target="_blank" href="https://developer.hashicorp.com/boundary/docs/concepts/domain-model/scopes%23organizations">https://developer.hashicorp.com/boundary/docs/concepts/domain-model/scopes%23organizations</a>


   <a name="PostgresInDocker"></a>

   ### Postgres database in Docker

1. Install Docker Desktop and have it running on its default port.

2. Make use of the Docker container image in Docker Hub (https://hub.docker.com/_/postgres)

   <pre><strong>docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
   </strong></pre>

   This prevents this error message when you do <tt>boundary dev</tt> :

   <pre>Error creating dev database container: unable to start dev database with dialect postgres: could not start resource: : dial unix /var/run/docker.sock: connect: connection refused
   </pre>

   <a name="BoundaryDev"></a>
 
   ### Boundary dev mode controller

   <a name="controller"></a>

3. Instantiate a Boundary controller-mode process locally on a Terminal session <strong>using default parameter values</strong>:
  
   <pre><strong>boundary dev</strong></pre>

   Sample reponse:

   <pre>==> Boundary server configuration:
   &nbsp;
        [Controller] AEAD Key Bytes: vL7W9ben+hLr5vbwGl1H+9Sr1Psp38bc
          [Recovery] AEAD Key Bytes: gmHrDl6zSd8NtAe5+IhHBUbX9GZD86sV
       [Worker-Auth] AEAD Key Bytes: JpmOdRcp7RHwyVXOYb7r+dRQHsn/V9KU
               [Recovery] AEAD Type: aes-gcm
                   [Root] AEAD Type: aes-gcm
    [Worker-Auth-Storage] AEAD Type: aes-gcm
            [Worker-Auth] AEAD Type: aes-gcm
                                Cgo: disabled
     Controller Public Cluster Addr: 127.0.0.1:9201
             Dev Database Container: sleepy_wiles
                   Dev Database Url: postgres://postgres:password@localhost:55000/boundary?sslmode=disable
         <strong>Generated Admin Login Name: admin
           Generated Admin Password: password</strong>
          Generated Host Catalog Id: hcst_1234567890
                  Generated Host Id: hst_1234567890
              Generated Host Set Id: hsst_1234567890
      Generated Oidc Auth Method Id: amoidc_1234567890
             Generated Org Scope Id: o_1234567890
  Generated Password Auth Method Id: ampw_1234567890
         Generated Project Scope Id: p_1234567890
                Generated Target Id: ttcp_1234567890
  Generated Unprivileged Login Name: user
    Generated Unprivileged Password: password
                         Listener 1: tcp (addr: "127.0.0.1:9200", cors_allowed_headers: "[]", cors_allowed_origins: "[*]", cors_enabled: "true", max_request_duration: "1m30s", purpose: "api")
                         Listener 2: tcp (addr: "127.0.0.1:9201", max_request_duration: "1m30s", purpose: "cluster")
                         Listener 3: tcp (addr: "127.0.0.1:9203", max_request_duration: "1m30s", purpose: "ops")
                         Listener 4: tcp (addr: "127.0.0.1:9202", max_request_duration: "1m30s", purpose: "proxy")
                          Log Level: info
                              Mlock: supported: false, enabled: false
                            Version: Boundary v0.11.0
                        Version Sha: 1d42091e81ca11353376ce116275890e3ae67f6b
         Worker Auth Current Key Id: auction-acutely-shawl-bonanza-semifinal-portal-worry-bodacious
           Worker Auth Storage Path: /var/folders/rq/rvb3xv916b976fm4sszjym400000gq/T/nodeenrollment3782666038
           Worker Public Proxy Addr: 127.0.0.1:9202
   &nbsp;
==> Boundary server started! Log data will stream in below:
...
   </pre>

   WARNING: Notice in the output above that Boundary in dev mode by default uses an (insecure) login name 'admin' and password 'password'. 

   <a target="_blank" href="https://www.youtube.com/watch?v=pGfSITzcTQ0&t=17m25s">VIDEO</a>: Alternately, specify parameters:
  
   <pre><strong>boundary dev \
   -api-listen-address=0.0.0.0 \
   -cluster-listen-address=0.0.0.0 \
   -proxy-listen-address=0.0.0.0 \
   -worker-public-address=192.168.1.80
   </strong></pre>

   Alternately, run in background with the <tt>&</tt>:

   <pre><strong>boundary dev -database-url=postgres://postgres:postgres@boundary-database:5432/postgres?sslmode=disable \
   -cluster-listen-address=0.0.0.0 \
   -api-listen-address=0.0.0.0 &
   </strong></pre>


1. Create a new Terminal window if you want to make any more CLI commands.
   
   ### BOUNDARY_ADDR URL with port

2. Notice in the output above the <strong>Listener</strong> IP address, which defines the Boundary Controller URL address, with its standard port:

   <pre>export BOUNDARY_ADDR="https://127.0.0.1:9200"</pre>

   If instead the Boundary Controller is on a server:

   <pre>export BOUNDARY_ADDR="https://11.22.33.44:9200"</pre>


   <a name="Authentication"></a>

   ### Authentication

   PROTIP: Craft and use a shell script so you don't have to remember this.

3. Get a reminder:

   <pre><strong>boundary authenticate help
   </strong></pre>

   <pre>Usage: boundary authenticate [sub command] [options] [args]
&nbsp;
  This command authenticates the Boundary commandline client using a specified auth
  method. Examples:
&nbsp;
    Authenticate with a password auth method:
&nbsp;
      $ boundary authenticate password -auth-method-id ampw_1234567890 -login-name foo
&nbsp;
    Authenticate with an OIDC auth method:
&nbsp;
      $ boundary authenticate oidc -auth-method-id amoidc_1234567890
&nbsp;
  Please see the auth method subcommand help for detailed usage information.
&nbsp;
Subcommands:
    oidc        Invoke the OIDC auth method to authenticate with Boundary
    password    Invoke the password auth method to authenticate with Boundary
   </pre>

1. Authenticate!
   
   <pre>boundary authenticate password \
     -auth-method-id=ampw_1234567890 \
     -login-name=admin \
     -password=password \
     -keyring-type=none
    </pre>
   
   If you see this error message:

   <pre>Password flag must be used with env:// or file:// syntax or left empty for an interactive prompt
   </pre>

   The expected response is something like this:

   <pre>      Authentication information:
        Account ID:      apw_BPPNtEX82N
        Auth Method ID:  ampw_1234567890
        Expiration Time: Wed, 14 Oct 2020 18:30:40 PDT
        Token:
        at_6FOC0R3hDG_s1FFYccNfP479aLeEMpbGptDrQyG...snip...
        User ID:         u_1234567890
   </pre>

<hr />
   
<a name="Boundary.app_GUI"></a>

## Boundary.app GUI

1. To install the Desktop client, click the .dmg (64-bit) on macOS.

   Drag the <strong>Boundary.app</strong> icon and drop on the app folder at:

   <pre>/Applications/Boundary.app</pre>

2. If you access it often, drag the icon and drop it among others.

3. Invoke the app by double-clicking or 
  
4. Type the URI to the Boundary server:

   <img alt="HashiCorp Boundary.app GUI Landing" width="800" height="494" src="https://i.pinimg.com/originals/c1/db/9f/c1db9f7193fa92b06d1790e1b73652a4.jpg">

5. Login Authentication

   <img alt="HashiCorp Boundary Auth" width="476" height="562" src="https://i.pinimg.com/originals/a3/3d/96/a33d963a6364dd67a2f70fd0094e471e.jpg">

   
   Boundary automates and standardizes the workflow for on-boarding and off-boarding hosts and targets.

   It provides one-click deployment.

1. Select Roles.

1. Select Administration and then click the Principals tab.

   Notice that admin user is listed. User, group, and project are a type of principal which can be assigned to roles.

1. Click on the Grants tab to view the permissions allowed on this role. Grants represent strings of actions on resources:

   id=&LT;resource_id>; action=&LT;actions>

   The grant for Administration role indicates that all actions (actions=*) on all resources (id=*;type=*) are permitted.

1. Return to the Roles list and select Login and Default Grants role.

1. Click the Grants to view its permissions

   A role can have multiple grants defined. Those grants are deleted when the role is deleted. A grant is also deleted if its associated resource is deleted.

1. Select Projects and then Generated project scope.

   Notice that you can see Sessions, Targets and Host Catalogs.

1. Select Host Catalogs.

1. Select Generated host catalog.

1. Click on the Host Sets tab and then Generated host set to view its details.

1. Click on the Hosts tab to view attached hosts.

   Currently, Generated host with ID, hst_1234567890 is the only host attached to this host set. From the Manage menu, you can add or delete hosts from the host set.

1. Select Generated host. Its Address is set to localhost.

1. Select Targets from the left-pane.

1. Select Generated target. The generated target allows TCP connection, and its ID is ttcp_1234567890.

   Using the Manage menu, you can add additional host sets to the target, or delete this target.


<hr />

<a name="SelfHosted"></a>

## Self-Hosted Local server

   * <a target="_blank" href="https://learn.hashicorp.com/collections/boundary/oss-getting-started">Tutorial</a>
  <br /><br />

1. To install Boundary on different platforms (on a single cloud region), navigate to a folder associated with the account where you'll create cloned repositories:

   <pre>export PROJDIR="$HOME/<strike>github-wilsonmar</strike>"</pre>

2. Because there are many other branches (taking up space), clone so that only the master branch is downloaded:

   <pre><strong>git clone git@github.com:hashicorp/boundary.git --depth 1
   cd boundary</strong></pre>

3. Clone the dev:
  
   <pre><strong>git clone git@github.com:hashicorp/boundary-reference-architecture.git --depth 1
   cd boundary-reference-architecture/deployment
   </strong></pre>

   https://github.com/hashicorp/boundary-reference-architecture/tree/main/deployment

   There is automation for aws, azure, docker (compose), docker_cts, gcp (Google Cloud Platform), Kubernetes. Most examples use Terraform for provisioning and configuring Boundary.

   <pre><strong>boundary auth-methods list
   </strong></pre>


<hr />

<a name="Configuration"></a>

## Configuring Boundary Cluster

* <a target="_blank" href="https://learn.hashicorp.com/tutorials/boundary/oss-manage-scopes?in=boundary%2Fbasic-administration">Manage Scopes</a>
* <a target="_blank" href="https://learn.hashicorp.com/tutorials/boundary/oss-manage-targets?in=boundary/oss-administration">Manage Targets</a>
* <a target="_blank" href="https://learn.hashicorp.com/tutorials/boundary/oss-manage-targets?in=boundary/oss-administration">Manage Users and Groups</a>

<hr />
   
<a name=scopes"></a>

## Boundary Scope

Scopes are the foundational part of Boundary. They allow users to <strong>partition resources</strong> and assign ownership of resources to principals. modeled as a container. 

There are three type of scopes within Boundary: Global, Org, and Project. There is only one global scope, which is the entry point for initial administration/setup and to manage the org scopes.
Under the global scope, you can create multiple org scopes. 

   A scope can contain child scopes, forming a tree.

<img alt="boundary-scopes-522x277.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1674313295/boundary-scopes-522x277_kkeink.jpg">

Org scopes are used to hold IAM-related resources and project scopes.

Explore resources in the Generated org scope using Boundary's Admin Console.


   ### Organization scope

   Each organization is a top-level container (scope) whichowns zero to many <strong>projects</strong> and zero to many authentication methods. An organization inherits from scope, allowing it to own zero to many groups, roles, policies, targets, host catalogs, or credential stores.

1. Specify different <strong>orgs (organizations)</strong> such as "Engineering", etc.

   <a target="_blank" href="https://i.pinimg.com/originals/b4/40/43/b44043dd82c7676dc9a742cc01de3165.jpg"><img alt="HashiCorp Boundary.app GUI menu" width="1552" height="574" src="https://i.pinimg.com/originals/b4/40/43/b44043dd82c7676dc9a742cc01de3165.jpg"></a>

   <a name="projects"></a>

   Projects are child scope within an organization.

1. Specify <strong>project</strong>, each with its own scope ID (to organize targets and host catalogs):
  
   * DevOps - such as Jenkins (instead of SaaS GitHub Actions).

   * Dev - the environment used by developers to unit test functionality. Often scrubbed or obfuscated data for security purposes.

   * Test - an environment also known as pre-prod used to ensure merging with production systems can be performed successfully. May have full volume or production data to ensure functionality.

   * Staging - an environment also known as pre-prod used to ensure merging with production systems can be performed successfully. May have full volume or production data to ensure functionality.

   * Production – the production or live environment where all live data and systems inter-operate. Requires implementation of all security controls.

   * Support - contains CSM (Customer Support Management) system to track communications with customers
   <br /><br />



## Migrate

1. To migrate a throw-away instance:
  
   <pre>export BOUNDARY_DB_CONFIG="/etc/boundary/controller.hcl"
   boundary database init -config $"{BOUNDARY_DB_CONFIG}" \
      -skip-auth-method-creation \
      -skip-scopes-creation \
      -skip-initial-login-role-creation
   </pre>

   Additionally:<br />
   <pre>export BOUNDARY_TLS_INSECURE=true</pre>

   Alternately, to migrate a long-running instance, specify those 3 skips in the controller.hcl file:
  
   <pre>export BOUNDARY_DB_CONFIG="/etc/boundary/controller.hcl"
   boundary database init -config $"{BOUNDARY_DB_CONFIG}"
   </pre>


   <a name="host-catalogs"></a>

2. Define a host catalog (a collection of hosts and host sets) for:

   Within the DevOps project:
   * CICD
   <br /><br />

   Within each app project:
   * Application Stack
   * Monitoring
   <br /><br />

   <a name="host-sets"></a>

   Inside the Boundary catalog are "host-sets" that are a collection of hosts which are identical except for  access requirements. This allows a random host to be selected automatically so that it's less fragile than specifying a specific host name.

   * App Servers
   * Log Servers
   <br /><br />


   <a name="Groups"></a>

   Groups

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="bottom"><th> Group </th><th> DevOps<br />Engr. </th><th> Devs </th><th> Testers </th><th> Prod<br />Admin </th><th> SOC </th><th> Log<br />Del. </th></tr>
   <tr valign="top" align="center"><td align="left"> Build Server </td><td> Yes </td><td> Yes  </td><td> - </td><td> - </td><td> - </td><td> - </td></tr> 
   <tr valign="top" align="center"><td align="left"> SSH (all) </td><td> Yes </td><td> -  </td><td> - </td><td> - </td><td> - </td><td> - </td></tr> 
   <tr valign="top" align="center"><td align="left"> Staging App </td><td> Yes </td><td> Yes </td><td> - </td><td> - </td><td> - </td><td> - </td></tr> 
   <tr valign="top" align="center"><td align="left"> Staging Logs </td><td> Yes </td><td> Yes </td><td> Yes </td><td> - </td><td> - </td><td> - </td></tr> 
   <tr valign="top" align="center"><td align="left"> Staging App Admin </td><td> Yes </td><td> Yes </td><td> - </td><td> - </td><td> - </td><td> - </td></tr> 
   <tr valign="top" align="center"><td align="left"> Prod. App Admin </td><td> - </td><td> - </td><td> - </td><td> - </td><td> Yes </td><td> - </td></tr> 
   <tr valign="top" align="center"><td align="left"> Prod. Logs </td><td> Yes </td><td> Yes </td><td> - </td><td> - </td><td> - </td><td> - </td></tr> 
   <tr valign="top" align="center"><td align="left"> Prod. Log Delete </td><td> - </td><td> - </td><td> - </td><td> - </td><td> - </td><td> Yes </td></tr> 
   </table>
  
   <a name="hosts"></a>

   Hosts are specific Boundary server instances, created under a host set.
   
3. Assign names using a convention such as "app-server_0" and "log-server_0" (numbers starting from zero?).

   TODO: Assign IP address???

   <a name="targets"></a>

   Boundary targets are the server which we seek to remote into. 
   
4. In each app project, specify a Boundary target as a logical collection of host sets which may be used to initiate sessions.
   * Production Application Admin
   * Production SSH
   * Production Logs
   <br /><br />

   Parameters for each target set:
   * Name
   * Description
   * Maximum Duration (in seconds)
   * Maximum Connections (specify 2 in case one gets stuck. -1 means infinite)
   * Default Port
   <br /><br />

5. Optionally, in the Internal project, specify a target such as "Ticketing" for the ticketing app server.

   <a name="sessions"></a>
   sessions

   <a name="permissions"></a>
   permissions

   <a name="grant"></a>

   grant scope to a particular <strong>project</strong>.

  <a name="KMS"></a>

  ### KMS

  <tt>-recover-config controller.hcl</tt> is specified in most every boundary command TODO:

  Within AWS:

  <pre># Root KMS configuration block: this is the root key for Boundary
# Use a production KMS such as AWS KMS in production installs
    kms "awskms" {
      purpose = "root"
      region = "us-east-1"
      kms_key_id = "..."
    }
# Worker authorization KMS
# This key is the same key used in the worker configuration  
    kms "awskms" {
      purpose = "worker-auth"
      region = "us-east-1"
      kms_key_id = "..."
    }
# Recovery KMS block: configures the recovery key for Boundary
    kms "awskms" {
      purpose = "recovery"
      region = "us-east-1"
      kms_key_id = "..."
    }
  </pre>

  PROTIP: Remove the Recovery KMS block if recovery is not needed (such as on dev clusters).

  config keys are also optional.

  ### Users

   <a name="users"></a>

2. List users:
  
   <pre><strong>boundary users list -scope-id global \
   -recover-config controller.hcl
   </strong></pre>

3. Add

   <pre><strong>BOUNDARY_THIS_USER_ID="???" 
   BOUNDARY_THIS_ACCOUNT_ID="???"
   boundary users add-accounts -id $"{BOUNDARY_THIS_USER_ID}" \
   -account $"{BOUNDARY_THIS_ACCOUNT_ID}" \
   -recovery-config controller.hcl
   </strong></pre>
  
  <a name="roles"></a>

   PROTIP: Creating a role also involves creating grants and principals:

1. Login admin role:

   <pre><strong>boundary roles create -grant-scope-id global -scope-id global \
   -name Administration \
   -recovery-config controller.hcl
   </strong></pre>
  
1. add-grants to do everything for Administration :

   <pre><strong>BOUNDARY_THIS_GRANT_ID="???" 
   boundary roles add-grants -id $"{BOUNDARY_THIS_GRANT_ID}" \
   -grant "id=*;type=*;actions=*" \
   -recovery-config controller.hcl
   </strong></pre>
  
  4. add-principal for Administration:

   <pre><strong>BOUNDARY_PRINCIPAL_ID="???" \
   BOUNDARY_ORG_ID="???" \
   boundary roles add-principals -id $"{BOUNDARY_PRINCIPAL_ID}" \
   -principal $"{BOUNDARY_ORG_ID}" \
   -recovery-config controller.hcl
   </strong></pre>


   ### For Users

2. Login globally:

   <pre><strong>boundary roles create -grant-scope-id global -scope-id global \
   -name "Login and Default Grants" \
   -recovery-config controller.hcl
   </strong></pre>
  
3. add-grants templated for account.id:

   <pre><strong>BOUNDARY_THIS_GRANT_ID="???" 
   boundary roles add-grants -id $"{BOUNDARY_THIS_GRANT_ID}" \
   -grant "id=*;type-scope;actions=list,no-op" \
   -grant "id={{account.id}};actions=read,change-password" \
   -grant "id=*;type=auth-token;actions=list,read:self,delete:self" \
   -recovery-config controller.hcl
   </strong></pre>
  
4. add-principals

   <pre><strong>BOUNDARY_PRINCIPAL_ID="???"
   boundary roles add-principals -id $"{BOUNDARY_PRINCIPAL_ID}" \
   -principal u_anon \
   -recovery-config controller.hcl
   </strong></pre>

<hr />


## Use with Okta IdP

   <a name="auth-methods"></a>
   auth-methods

Within <tt>"$PROJDIR/boundary-reference-architecture/deployment/gcp/gcp/templates"</tt>
are <strong>template (.tpl) files</strong>:
   * boundary.hcl.tpl
   * controller.hcl.tpl
   * worker.hcl.tpl
   <br /><br />

On Linux, the worker service is specified in:

   <pre>/etc/systemd/system/boundary-worker.service</pre>

1. Specify

   <pre><strong>boundary auth-methods create password -scope-id global \
   -recovery-config controller.hcl
   </strong></pre>

   Alternately, specify the specific Method ID when creating passwords:

   <pre><strong>BOUNDARY_THIS_METHOD_ID="???" 
   boundary accounts create password -auth-method-id $"{BOUNDARY_THIS_METHOD_ID}" \
   -login-name admin \
   -recovery-config controller.hcl
   </strong></pre>

<hr />

## Connection Protocol Wrappers

Boundary comes with built-in wrappers for popular layer 7 connection protocols, such as:

   * ssh: defaults to the local SSH client (ssh)
   * postgres: defaults to the official Postgres CLI client (psql)
   * rdp: defaults to the built-in Windows RDP client (mstsc)
   * http: defaults to curl
   * kube: defaults to kubectl
   <br /><br />

## Human-to-machine Access via Boundary

Hands-on interactive lab environment, HashiCorp Learn: https://learn.hashicorp.com/   


## Machine Auth & Auth using Vault

## Machine-to-machine Access using Consul

Which app can talk with each service?


<hr />

## Videos

* <a target="_blank" href="https://www.youtube.com/watch?v=1THcoXyIJwc">VIDEO: HashiCorp Boundary: Then & Now</a> Jul 7, 2022

* <a target="_blank" href="https://app.pluralsight.com/library/courses/hashicorp-boundary-first-look/table-of-contents">If you have a  Pluralsight subscription: VIDEO: "HashiCorp Boundary: First Look" 21 by Chris Green (when Boundary was at Boundary version 0.5.1 on Sep 2021).

* <a target="_blank" href="https://www.youtube.com/watch?v=8x1pespWOXo&t=1m19s">VIDEO: Secure Access to Hosts and Services with HashiCorp Boundary</a> Nov 2, 2021

* <a target="_blank" href="https://www.youtube.com/watch?v=f2aghMgU4IQ">VIDEO:  Deploying HashiCorp Boundary in Azure with Terraform</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=2FAKSK2oDng">VIDEO: Using Boundary for Identity-Based Multi-Cloud Access</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=pGfSITzcTQ0">VIDEO: HashiCorp Boundary Demo for Secure Sessions Management</a> Oct 26, 2020 by TeKanAid uses WireShark to see detailed communications of a Linux and Windows RDP connections.



## References

<a name="[1]"></a> <a target="_blank" href="https://www.youtube.com/watch?v=eRZuaw0AW0I">VIDEO: HashiConf Digital Keynote - Boundary</a> by CTO Armon Dadgar explains Boundary vs. Traditional Access approaches

https://goteleport.com/blog/how-uber-netflix-facebook-do-ssh/