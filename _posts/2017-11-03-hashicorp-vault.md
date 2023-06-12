---
layout: post
date: "2023-06-12"
file: "hashicorp-vault"
title: "HashiCorp Vault"
excerpt: "How to keep secrets secret (in a central place), but still shared and refreshed."
tags: [vault, hashicorp, security, secrets]
image:
# pic secret finger over mouth 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15807549/645e9404-2b1e-11e6-8e19-2368c5578015.jpg
  credit: Forbes
  creditlink: http://blogs-images.forbes.com/ricksmith/files/2014/11/secret.png
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

HashiCorp's Vault securely stores <a href="#Secrets">most type of secrets</a> in a way that spans <a href="#Multi-Cloud">multiple clouds</a>. 

The unique contribution of this article is to provide a deep yet concise approach, done by using automation which are then explained, so you use HashiCorp Vault with less manual copy/paste and typing. Thus, quicker with less mistakes. All in one page for easy search.

{% include whatever.html %}


<a name="Users"></a>

## How to keep and use secrets

Like all other data in computers, secrets are accessed and managed these ways:

   * GUI on a website (operated as SaaS or on-prem/cloud server)
   * CLI on a Terminal used by developers accessing a web service when dealing with files
   * API calls by application programs (including the Vault CLI agent program you install)
   <br /><br />

HashiCorp's Vault provides tools to work with each of the above.

NOTE: HashiCorp doesn't currently offer mobile apps.


<a name="ValueProp"></a>

## Why Vault's Popular

HashiCorp's Vault is popular because the product solves the <strong>secrets sprawl</strong> problem -- where employees create and store secrets that last too long sitting on unsecure locations such as laptops and in publicly accessible files.

Ineffective secrets handling has resulted in billions lost to ransoms 
and the loss of reputation, reducing the value of companies and jobs 
-- a situation that Vault helps to avoid.

Within enterprises, Vault has a major role in achieving "<strong>Zero Trust</strong>", 
which include ensuring that all transactions are authenticated and authorized.
Vault provides the encryption and decryption of data in transit and at rest.


### Dynamic secrets

Vault collaborates with many other technologies (especially Enterprise ones)
to create <strong>temporary</strong> credentials (username and password) 
so that users do not have their <strong>static</strong> credentials sitting around waiting to be stolen.

Unique abilities of Vault are that it can:

* Generate <a href="#DynamicSecrets">dynamic secrets</a> in databases and applications which are alive too short a time to steal. Vault can replace static long-running secrets (to be stolen) with <a href="#DynamicSecrets">dynamic secrets</a> with a Time to Live (TTL) of a few hours. The system max TTL default is 32 days. The bulk of work by Vault is renewing tokens and rotating secret keys. All so that risk of unauthorized access can be minimized.

   * https://www.hashicorp.com/blog/dynamic-database-credentials-with-vault-and-kubernetes
   <br /><br />

* Rotate keys <strong>without rebooting</strong>. This is a competitive strong point with Vault.

   * https://github.com/scarolan/painless-password-rotation
   * <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/tokens-policies/challenges/create-a-renewable-token/notes">Auto-Renew tokens</a> before its TTL expires
   <br /><br />

   This is the strong point with Vault.

   https://github.com/scarolan/painless-password-rotation



<a name="Origins"></a>

## Open Source Origins

HashiCorp first released Vault as open-source software in 2015 at:<br />
<a target="_blank" href="https://github.com/hashicorp/vault">https://github.com/hashicorp/vault</a>

   Documentation:
   * https://www.vaultproject.io/api-docs/ and https://learn.hashicorp.com/vault/ now redirects to
   * https://developer.hashicorp.com/vault
   <br /><br />

HashiCorp continues to provide Vault free under open-source licensing, with community support.

<a href="#OSSVaultInstall">To install the open-source edition of Vault</a>, 
use Homebrew on macOS, etc. 

NOTE: HashiCorp does not offer support contracts (in addition to community support)
on its open-source software.


## Multi-Platform

HashiCorp continues to support the largest set of operating systems.

Vault is designed to be deployed to <strong>all major platforms</strong> 
(Windows, macOS, Red Hat and Ubuntu Linux, within Docker, etc.). 
This is a feature appreciated by enterprise who have legacy systems.


## Enterprise Ready SaaS

However, HashiCorp makes money from licensing and supporting its 
   * on-prem (self-managed) enterprise software installed by customers, and
   * the same enterprise software installed by HashiCorp SREs in HashiCorp's cloud <strong>Vault HCP</strong> (HashiCorp Cloud Platform).
   <br />

Either way, licensed editions provide a GUI (Graphic User Interface of web pages) 
to ensure <strong>user self-service</strong>. 
That enables organizations to get up and running quickly.

Each "organization" hosted within Enterprise Vault is isolated and <strong>segmented</strong> 
into different <strong>workspaces</strong> for different teams and projects. 
This limits the exposure of "lateral movement" possible with stolen credentials.

<a target="_blank" href="https://www.hashicorp.com/blog/vault-on-the-hashicorp-cloud-platform">Announced Oct. 14, 2020</a>, HCP Vault is a hosted SaaS (Software as a Service like Salesforce) operated by HashiCorp SREs, using the same binary as self-hosted Vault Enterprise, but with enhancements. 
HCP Vault enables organizations to <strong>scale</strong> effortlessly, 
and without the complexity and overhead of self-managed instances.


<a name="EntCapabilities"></a>

### Vault Enterprise Capabilities

Most enterprises prefer to pay for quicker corporate support and features needed by enterprises.

   * <a target="_blank" href="https://cloud.hashicorp.com/docs/vault">https://cloud.hashicorp.com/docs/vault</a> summarizes the differences between "Self-managed" and HCP Vault cluster.
   * https://github.com/hashicorp/vault-guides provides the technical content to support the Vault learn site.
   * https://hashicorp-education.s3-us-west-2.amazonaws.com/courses/vault-101/Vault-101_LabBook.html
   <br /><br />

Enterprise capabilities add:

   * Quicker "Premium" customer support world-wide in English, German, Japanese, etc.
   * <a target="_blank" href="https://developer.hashicorp.com/hcp/docs/vault/login-mfa">MFA (Multi-Factor Authentication) for human users</a>
   * <a target="_blank" href="https://developer.hashicorp.com/hcp/docs/vault/audit-log">Audit Log Management for Monitoring</a>
   * <a target="_blank" href="https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication">Replication (for faster read performance across regions)</a> <a target="_blank" href="https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication">Performance Replication</a> is available with "HCP Vault Plus" licensing.
   * <a target="_blank" href="https://developer.hashicorp.com/hcp/docs/vault/high-avail-disaster-recover">Disaster Recovery</a>

   * <a target="_blank" href="https://developer.hashicorp.com/vault/tutorials/adp">Advanced Data Protection (ADP)</a> Transform Secrets Engine (that generates tokens in place of sensitive data such as credit card numbers)
   * Namespaces (to segment data between teams to limit lateral movement by hackers)
   * <a target="_blank" href="https://www.wikiwand.com/en/FIPS_140-2">FIPS 140-2</a>/3 <a target="_blank" href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.140-2.pdf">PDF</a> by <a target="_blank" href="https://csrc.nist.gov/publications/detail/fips/140/2/final">US government computer security standard</a> (for testing/certifying cryptographic modules as being secure)
   <br /><br />


<a name="OptionB"></a>
<a name="VaultAgent"></a>

## Vault Agent on laptops

REMEMBER: There are <strong>different executable editions</strong> of the Vault program 
for open source vs. Enterprise (licensed/more secure) versions of Vault.

With all Enterprise options, you would also <a href="#EntVaultInstall">install the Enterprise edition of Vault</a> on clients
accessing Vault servers with a paid license file from HashiCorp.
This install involves use of GPG to verify signatures of the installer.

REMEMBER: The Vault program can act as both a server and a client.

Installed as a client, the Vault program acts as a <strong>cache</strong> (like Redis) 
to a central Vault server, responding to requests that can be served locally when secrets have not expired.

The <a target="_blank" href="https://developer.hashicorp.com/vault/docs/agent">Vault Agent</a> 
is a client daemon that provides:

   * <strong>Caching</strong> of client-side responses containing newly created tokens and responses containing leased secrets generated off of these newly created tokens.

   * Automatic authentication to Vault -- manage the token renewal process for locally-retrieved <a href="#DynamicSecrets">dynamic secrets</a>.

   * Templating -- rendering of user-supplied <a target="_blank" href="https://www.vaultproject.io/docs/agent/template">template "moustache" markdown</a> , using the token generated by the Auto-Auth step. To dynamically renew destination file. Example at: https://banzaicloud.com/docs/bank-vaults/mutating-webhook/vault-agent-templating/

   * Secure delivery/storage of tokens (using mTLS communications in-transit).

   * Lifecycle management (renewal and re-authentication) of tokens.


<a name="VaultSvcInstall"></a>

## Ways to get a Vault service

<a href="#OptionA">Option A</a>: The easiest way: use just your internet browser to access 
<a href="#VaultSaaS"><strong>Vault SaaS environments in the public cloud</strong></a>,
setup by HCP (HashiCorp Cloud Platform) SREs.

<a href="#OptionB">Option B</a>: Free: 
<a href="#VaultAgent">install a free <strong>dev-mode Vault server on your laptop</strong></a><br />
to provide Vault services and data running in memory only for demos and training purposes.

<a href="#OptionC">Option C</a>: Free: 
<a href="#VaultCompose">Install Docker Compose on your laptop</a>, also<br />
to provide Vault services and data running in memory only for demos and training purposes.

<a href="#OptionD">Option D</a>: 
<a href="#InstallServer">Install</a> a "self-managed" 
<strong>single-node</strong> OSS Vault server using Packer to create a <strong>Docker image</strong> you install in your laptop/local machine for developer learning, based on <a target="_blank" href="https://github.com/hashicorp/vault-guides/blob/master/operations/provision-vault/best-practices/terraform-aws">"Provision a Best Practices Vault & Consul Cluster on AWS with Terraform"</a>.

<a href="#OptionE">Option E</a>: Install a "self-managed" <strong>multi-node</strong> 
OSS Vault server you install in your cloud environment (<a href="#AWS">AWS</a>, Azure, GCP, etc.). For HA (High Availability), <a target="_blank" href="https://learn.hashicorp.com/vault/operations/raft-reference-architecture">the "Vault with Integrated Storage Reference Architecture" document</a> recommends a Consul cluster with 5 Vault nodes over 3 availability zones (within a single Region). <a href="#InstallEKS">AWS EKS cluster</a>. Each node would use a TLS certificate for HTTPS protocol use.

<a href="#OptionF">Option F</a>: Install a <strong>production</strong>, licensed, "self-managed" 
Enterprise Vault instance. Various example configurations make use of various "feature flags" 
and defaults to compose a particular combination consisting of, for example:
   * AWS, Azure, GCP cloud
   * Number of nodes in Kubernetes (EKS, AKS, GKE)
   * inclusion of <a href="HashiCups">HashiCups fictional sample app</a> with a database
   * etc.

### Multi-Cloud

Each cloud vendor (AWS, Azure, GCP, etc.) have their own secrets handling offering.

But HashiCorp Vault adds the distinct advantage of being able to <strong>work either inside and outside each of several clouds</strong>:

   * <a target="_blank" href="https://aws.amazon.com/secrets-manager/">AWS Secrets Manager</a> is a service (managed by AWS) to rotate, manage, and retrieve any credentials, API keys, or secrets to encrypt EBS volumes, Dynamo DB, S3 objects. I
  
   * <a target="_blank" href="https://aws.amazon.com/kms/">AWS KMS (Key Management Server)</a> is used by AWS Secrets Manager and other services to generate new keys using various encryption algorithms based onn imported key material. See https://github.com/awsdocs/aws-kms-developer-guide/tree/master/doc_source

   * AWS External Key Store (XKS)

   * <a target="_blank" href="https://azure.microsoft.com/en-us/services/key-vault/">Azure Key Vault</a>
   
      <a target="_blank" href="https://www.udemy.com/course/azure-key-vault-the-complete-introduction/">NOTE</a>:
      Azure has higher "Premium" prices for use of it HSM (Hardware Security Module), which <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/key-vault/">stores up to 5,000 key vault keys and the ability to access their keys from any device.</a> The subscription price for Azure key vault is $5 per user per month. First 250 keys are $5 per month. For more keys, it costs $2.50 per month, and then 90 cents per month.

   * <a target="_blank" href="https://cloud.google.com/secret-manager">GCP Secret Manager</a>

With Vault, a particular secret can be added within AWS and then retrieved from within an Azure cloud.
This is a requirement for true enterprise capability, due to needs imposed by corporate mergers and acquisitions.


### Centralized Administration of Secrets

But what HashiCorp Vault offers is <strong>centralizing</strong> secrets handling across organizations by automating replacement of long-lived secrets with dynamically generated secrets (X.509 certificates) which have a controlled lease period. Vault forces a mandatory <strong>lease contract</strong> with clients. All secrets read from Vault have an associated lease to enable key usage auditing, perform key rolling, and ensure automatic revocation. Vault provides multiple revocation mechanisms to give operators a clear "break glass" procedure after a potential compromise.

* Vault provides high-level policy management, secret leasing, audit logging, and automatic revocation.

* Vault from HashiCorp provides a unified interface to secrets while providing tight access control plus recording a detailed audit log.

* Vault is installed in <strong>sealed mode</strong> (provides no access)

   Only the storage backend (which durably stores encrypted data) and the HTTP API are outside the barrier which is sealed and unsealed.


### Enterprise worthy?

There is also various levels of paid "Enterprise" edition which companies install themselves in a cloud or on-prem. In large companies, Vault is usually installed, configured, and maintained by a 
<strong>Platform Team</strong> (formerly "Administrators" or "SysAdmins").

HashiCorp provides a fully enterprise-level 24/7 support worldwide.
HashiCorp began as a remote workforce and today HashiCorp people are in 47 countries.
Just 15% of the 2,000 employees work in HashiCorp's San Francisco headquarters 
(next to the Salesforce Transit Center).

Vault supports PKI (Private Key Infrastructure) used to handle certificates.

All HashiCorp's products provide a detailed <strong>audit logs</strong> needed for forensics.

Enterprises send logs to a central repository (such as Splunk) where their SOC team monitors
and responds to security events.

Multi-cloud support in HCP started in 2022 with AWS, and moving to AZure.
   https://developer.hashicorp.com/vault/tutorials/adp/key-management-secrets-engine-azure-key-vault

Also, HashiCorp supports its enterprise services partners via a team specializing in partner technical support worldwide.

Vault is FIPS-certified, so it does not require any special/proprietary hardware such as physical HSMs (Hardware Security Modules).


<hr />

<em>Let's start with the easiest way:</em>

<a name="OptionA"></a>
<a name="VaultSaaS"></a>

## Option A. The easiest way to Vault: HCP 

In 2021, Vault SaaS on AWS became available from HashiCorp 
so that companies can now obtain the benefit of 
<strong>multi-region stand-by disaster recovery</strong> 
and <a href="#EntCapabilities">other enterprise capabilities</a> 
without the need to employ people to keep that running 24/7.

Documentation on HCP Vault in the cloud:
   * <a target="_blank" href="https://github.com/hashicorp/vault-guides/tree/master/operations/provision-vault/dev/terraform-aws">BLOG</a>: Start iteracting with a Vault instance, even on a Chromebook, by getting a Vault cloud instance:
   * <a target="_blank" href="https://cloud.hashicorp.com/docs/vault">https://cloud.hashicorp.com/docs/vault</a>
   * https://developer.hashicorp.com/vault/tutorials/cloud
   * <a target="_blank" href="https://cloud.hashicorp.com/products/vault">https://cloud.hashicorp.com/products/vault</a>
   * https://developer.hashicorp.com/hcp/docs/hcp#how-does-hcp-work
   * https://developer.hashicorp.com/hcp/docs/vault
   * https://developer.hashicorp.com/hcp/docs/vault/security-overview
   * https://developer.hashicorp.com/vault/tutorials/cloud/vault-introduction
   * https://developer.hashicorp.com/vault/tutorials/cloud
   * https://cloud.hashicorp.com/products/vault/pricing
   * https://portal.cloud.hashicorp.com/sign-in
   <br /><br />

### Get in HCP first time

1. At <a target="_blank" href="https://portal.cloud.hashicorp.com/sign-up?product_intent=vault">https://portal.cloud.hashicorp.com/sign-up?product_intent=vault</a> or, alternately, <a target="_blank" href="https://www.vaultproject.io/">https://www.vaultproject.io</a> click <strong>Try Cloud</strong>.

2. Click "Create an account" using your email and password.
3. Define an <strong>Organization</strong> for $50 of Trial credits until you have to provide your credit card.
4. PROTIP: On your iPhone install the Authy app to generate auth tokens for MFA.

   <a name="HCPRegions"></a>

   ### HCP Regions/Locations

   Providers: AWS regions and Azure locations:
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html
   * https://dgtlinfra.com/microsoft-azure-data-center-locations/
   <br /><br />

5. Check <strong>HCP Cloud provider region(s)</strong> for regions/locations supported.

   PROTIP: As of this writing, HCP addresses not all countries' GDPR data residency requirements. 
   
   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th> Theater </th><th> 7 <a target="_blank" href="https://developer.hashicorp.com/hcp/docs/hcp/supported-env/aws">AWS Regions</a>
      </th><th> 14 <a target="_blank" href="https://developer.hashicorp.com/hcp/docs/hcp/supported-env/azure">Azure Locations</a> 
      </th></tr>
   <tr valign="top"><td rowspan="5"> Americas
   </td><td> us-east-1 (Virginia)</td><td> eastus (Richmond, Virginia)</td></tr>
   <tr valign="top"><td> - </td><td> eastus2 (Richmond, Virginia)</td></tr>
   <tr valign="top"><td> - </td><td> centralus (Des Moines, Iowa)</td></tr>
   <tr valign="top"><td> us-west-2 (Oregon)</td><td> westus2 (Moses Lake, Washington)</td></tr>
   <tr valign="top"><td> - </td><td> canadacentral (Toronto)</td></tr>

   <tr valign="top"><td rowspan="5"> EMEA
   </td><td> eu-west-1 (Ireland)</td><td>northeurope (Dublin, Ireland)</td></tr>
   <tr valign="top"><td> eu-west-2 (London)</td><td>uksouth (London, UK)</td></tr>
   <tr valign="top"><td> - </td><td>westeurope (Amsterdam, Netherlands)</td></tr>
   <tr valign="top"><td> eu-central-1 (Frankfurt)</td><td>-</td></tr>
   <tr valign="top"><td> - </td><td>francecentral (Paris, France)</td></tr>

   <tr valign="top"><td rowspan="4"> Asia<br />Pacific
   </td><td> ap-southeast-1 (Singapore)</td><td>southeastasia (Singapore)</td></tr>
   <tr valign="top"><td> ap-southeast-2 (Sydney, Australia)</td><td>australiasoutheast (Victoria)</td></tr>
   <tr valign="top"><td> - </td><td>japaneast (Tokyo, Saitama)</td></tr>
   <tr valign="top"><td> - </td><td>centralindia (Pune)</td></tr>
   </table>

   After you have signed up...

   ### Sign in HCP

6. Sign-in. 
7. Above the "Overview" page title, notice the name of the "organization" you're using. On the left menu notice there is a different <a href="#HVN">HVN</a>, IAM, Billing, and Settings specific to your organization.

   ### New Vault Cluster

8. Click "View Vault".
9. After <strong>projects</strong> are setup in a Provider (such as AWS), they appear in this page of Vault Clusters.
10. Click the ID name (even though it isn't underlined) for that project's Overview page. PROTIP: Save this among your browser's bookmarks, within a Projects folder:

    https://portal.cloud.hashicorp.com/services/vault/bonkers?project_id=211f5f56-93a1-42de-8db6-9bebcec81cc6
   
11. Create a Vault Cluster ID (named "vault-cluster" by default). 
12. Note the Network region (such as "Oregon us-west-2")
13. Select "Allow public connections from outside your selected network" since you're in dev. mode this time.

    ### HCP Tier Pricing

    <a target="_blank" href="https://www.hashicorp.com/products/vault/pricing/">Pricing</a>: 

    <table border="1" cellpadding="4" cellspacing="0">
    <tr align="right"><th align="left"> Vault<br />Tier 
       </th><th> <br />$/hr </th><th> * 24 =<br />$/day </th><th> * 30 =<br />$/mo. </th><th> * 12 =<br />$/year
       </th></tr>
    <tr valign="top" align="right"><td align="left"> Development 
       </td><td> $0.30
       </td><td> $7.20
       </td><td> $216.00
       </td><td> $2,592.00
       </td></tr>
    <tr valign="top" align="right"><td align="left"> Starter 
       </td><td> $0.50
       </td><td> $12.00
       </td><td> $360.00
       </td><td> $4,320.00
       </td></tr>
    <tr valign="top" align="right"><td align="left"> Standard
       </td><td> $1.578
       </td><td> $37.87
       </td><td> $1,136.16
       </td><td> $13,633.92
       </td></tr>
    <tr valign="top" align="right"><td align="left"> Plus
       </td><td> $1.844
       </td><td> $44.26
       </td><td> $1,327.68
       </td><td> $15,932.00
       </td></tr>
    </table>

    REMEMBER: With "Development" at $7.20/day, that $50 trial credit gets you about <strong>7 days</strong> of continuous run time.

    PROTIP: Instead of letting instances sit idle accumulating cost, during development, <strong>delete the cluster</strong> and build it all again using Terraform.

    Vault tier: "Development" is automatically associated with an "Extra Small" Cluster Size.

    <a name="ClusterSizePricing"></a>

    ### HCP Cluster Size Pricing

    This compares increases in charges versus in capability for each level of Cluster Size,
    with "Small" level as the baseline "1X".

    <table border="1" cellpadding="4" cellspacing="0">
    <tr align="right"><th align="left"> Cluster Size </th><th> Per User Cost </th><th> Server Cost </th><th> vCPUs </th><th> RAM GiB </th><th> Storage GB</th><th colspan="4" align="center"> Comparison
       </th></tr>
    <tr valign="top" align="right"><td align="left"> Extra-Small 
       </td><td> $0.158/hr
       </td><td> $0.03/hr
       </td><td> 2
       </td><td> 1 
       </td><td> 1 
       </td><td align="center" colspan="4"> -
       </td></tr>
    <tr valign="top" align="right"><td align="left"> Small 
       </td><td> $0.158/hr
       </td><td> $1.578/hr 
       </td><td> 2 
       </td><td> 8 
       </td><td> 15
       </td><td align="center" colspan="4"> 1X
       </td></tr>
    <tr valign="top" align="right"><td align="left"> Medium 
       </td><td> $0.127/hr
       </td><td> $3.163/hr 
       </td><td> 4
       </td><td> 16
       </td><td> 30

       </td><td> 2X
       </td><td> 2X
       </td><td> 2X
       </td><td> 2X
       </td></tr>
    <tr valign="top" align="right"><td align="left"> Large
       </td><td> $0.075/hr
       </td><td> $7.849/hr 
       </td><td> 8
       </td><td> 32
       </td><td> 50

       </td><td> 5X
       </td><td> 4X
       </td><td> 4X
       </td><td> 3.3X
       </td></tr>
    </table>

    The jump from Small to Medium had the price go up the same (2X) as the capabilities (vCPUs, RAM, Storage), all 2X.

    However, the jump from Medium to Large costs 5X more but resulted in just 4X more vCPU and 3.3X more storage. That provides less value as the jump from Small to Medium, making more Medium servers a better value than going to a Large, if that were an available option.

    REMEMBER: HCP Vault allows you to change your clusters in place while maintaining the current configurations. But currently, no production-grade clusters can be scaled down to the Development tier, so you must have enough resources to scale down or delete them accordingly. 

    <a name="HCPUsage"></a>

    ### HCP Per-User Pricing

    REMEMBER: How much is charged per-user depends on the <a href="#ClusterSizePricing">cluster size</a> used by the organization.

    Vault HCP SaaS is also billed by the <strong>count of active unique "clients"</strong> which has authenticated to Vault to do something anytime during a month. That includes people who login into the cluster to manage policies, set up dynamic secret rotation, etc. and every application, service, or any other machine-based system that authenticates to Vault.


    <a name="HVN"></a>

    ### HashiCorp Virtual Network

14. Confirm Network settings (such as CIDR block 172.25.16/20, a "non-routable" address space).

    About CIDR, see my <a target="_blank" href="https://wilsonmar.github.io/aws-networking/">
    https://wilsonmar.github.io/aws-networking</a>

    <a target="_blank" href="https://developer.hashicorp.com/hcp/docs/hcp/network">DEFINITION</a>: A HVN (HashiCorp Virtual Network) defines the <a target="_blank" href="http://en.wikipedia.org/wiki/CIDR_notation" title="Classless Inter-Domain Routing">CIDR subnet range</a> which scopes the range of private IP addresses to be created in your cloud's network (<a target="_blank" href="https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html">VPC</a> within AWS or VNet within Azure). 

    <a target="_blank" href="https://www.youtube.com/watch?v=FxcUf2spssE&t=3m42s">VIDEO</a>: Think of HVN as a "secure holding area where your Vault instance is totally isolated from anyone else. Then as you provision new instances they can appear within the network. For example, a single-node developer instance or a multi-node cluster. HVN then gives you the option of how you want to connect.

    References about CIDR VPC: 
    * https://www.linkedin.com/pulse/aws-ip-ranges-your-amazon-vpc-neal-davis/
    * https://virtualizationreview.com/articles/2021/03/26/aws-subnetting.aspx
    <br /><br />

15. Click "Create cluster" to see at <strong>https://portal.cloud.hashicorp.com</strong> show "Cluster initializing" turn (in 5-10 minutes).

    You should now have your Vault cluster. Congratulations!


    <a name="AccessVaultHCP"></a>

    ### Sign-In HCP Vault for Access

    This is done every day or after expiration of temporary access credentials.

16. Click "Access Vault" on the HCP Vault Overview page, at the upper-right.

    <img alt="hcp-vault-menu-cli-211x199.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1675166449/hcp-vault-menu-cli-211x199_hrlxpf.jpg">

    That lists the 3 ways to access secrets within HCP Vault described below:

    * <a href="#WebUI">Web UI</a>
    * <a href="#AccessCLI">Command-line (CLI)</a> Linux Terminal commands within Bash scripts
    * <a href="#APICalls">API</a> (REST calls invoked by the CLI and by application programs written in Python, Go, etc.)
    <br /><br />

    We show each in sequence below, starting from the Web UI, then CLI and API.

    <a name="WebUI"></a>

    #### WebUI by people

17. "Web UI" under "Access Vault".

    That is equivalent to clicking "Access web UI" Public link. 
    Both open a new tab at URL such as:

    https://bonkers-public-vault-c6443333.9d787275.z1.hashicorp.cloud:8200/


    <a name="HCPAdminSignIn"></a>

    ### HCP Vault Admin User Sign-In

    <img alt="vault-hcp-signin-468x397.jpg" width="468" height="397" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1675396720/vault-hcp-signin-468x397_g5twps.jpg">
   
    The "Method" is also called the "Auth" (Authentication) Method.

    <a href="#DefaultAuthMethods">Details about other default Auth Methods in a section below</a>.

    <a target="_blank" href="https://www.youtube.com/watch?v=FxcUf2spssE&t=4m42s">VIDEO</a>:
18. At the HCP Vault cluster Overview page for your project:
19. Click "Generate token" (Under "New admin token") and wait a few seconds for "Fetching".
20. Click "Copy" for "Copied" (when the VAULT_TOKEN is copied into your Clipboard).
21. Switch to the "Sign in to Vault" browser page. Select Method "Token" and paste in the Token field. Click "Sign In". You should now see a list of <strong>Secrets Engines</strong> with this top menu:

    ### HCP GUI Menu

    <img alt="vault-hcp-main-menu-485x53.jpg" width="485" height="53" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1675399191/vault-hcp-main-menu-485x53_lhdolz.jpg">

    Vault administrators use this menu to master all aspects of Vault on behalf of users:

    * Click <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1675424226/vault-hcp-access-menu-212x267_qkyci7.jpg"><strong>Access</strong></a> to manage Authentication Methods, MFA, Entities, Groups, Leases, Namespaces, OIDC Proivder
    
    * Click <strong>Secrets</strong>, then "Enable new engine +" to manage different Secrets Engines.
    
    * Click <strong>Policies</strong> to <a href="ManageACLs">manage ACLs (Access Control Lists)</a> Vault uses to each particular user only pages that they were granted access to.

    * Click <strong>Tools</strong> to transform secrets data (Wrap, Lookup, Unwrap, Rewrap, Random, Hash)
    
    ### Upper-right GUI menu

    * Click <tt>Client count</tt> at the right to <a href="#HCPUsage">view and manage HCP usage</a>

    <a name="SignOut"></a>
    
    ### Sign Out

22. PROTIP: Don't keep sessions open when you don't need it.

    Click on the head icon at the upper-right corner and select "Sign Out":

    <img alt="vault-hcp-signout-231x217.jpg" width="231" height="217" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1675424348/vault-hcp-signout-231x217_syf1oq.jpg">


    <a name="AccessCLI"></a>

    ### Setup HCP Vault Access from CLI

    <a name="getVAULT_NAMESPACE"></a>

    This is for after clicking "Command-line (CLI)" from the HCP "Access Vault":

    <img alt="hcp-vault-menu-cli-211x199.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1675166449/hcp-vault-menu-cli-211x199_hrlxpf.jpg">

    Access to a Vault client from a CLI Terminal requires these environment variables:

    * VAULT_ADDR (the URL to the Vault cluster)
    * <a href="#getVAULT_NAMESPACE">VAULT_NAMESPACE</a>
    * <a href="#getVAULT_TOKEN">VAULT_TOKEN</a> (equivalent to a password)
    <br /><br />

3.  Click the icon for "Telling Vault where to find this cluster" 

    <img alt="hcp-vault-cli-addr-575x414.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1675166746/hcp-vault-cli-addr-575x414_bv3afz.jpg">

    That gets you the VAULT_ADDR into your Clipboard:

4.  Switch to your Terminal and press command+V to paste it. Press Enter.

    <pre>export VAULT_ADDR="https://bonkers-private-vault-c6443333.9d787275.z1.hashicorp.cloud:8200"; 
    export VAULT_NAMESPACE="admin"
    </pre>

    Port 8200 is the default for Vault.

    NOTE: In HCP, "admin" is equivalent to "root" as the Top-level Namespace.    

    <a name="getVAULT_TOKEN"></a>

    ### Get VAULT_TOKEN

5.  Switch back to your browser.
6.  Click the icon for "Authenticating to Vault" to get into your Clipboard:

    <pre>export VAULT_TOKEN=[ENTER_TOKEN_HERE]
    </pre>

7.  Switch to your Terminal and press command+V to paste it. Don't press Enter yet.
8.  Highlight "[ENTER_TOKEN_HERE]" so pressing command+V replace it to end up with a command such as:

    <pre>export VAULT_TOKEN=hvs.123456789abcdefGS1zvuec7XupRBChRWHvQbjOmEwzM_AxsGicKImh2cy4xT1NoR3Q5UnpSckRBZjBzNVJyc3M5UGIuY1VzZ3kQ8y0
    </pre>

9.  Press Enter to invoke it.
    
    REMEMBER: By default, the token is enabled only for <strong>6 hours</strong>.

    <a name="SecretsList"></a>

    ### Secrets List on CLI & GUI

10. After you sign into the Vault GUI, you are presented with a list of paths.

11. Switch to the CLI to get that list:

    <pre><strong>vault secrets list</strong></pre>

    TODO: If you get a response such as this:<br />
    
    <tt>Error listing secrets engines: Get "https://127.0.0.1:8200/v1/sys/mounts": dial tcp 127.0.0.1:8200: connect: connection refused</tt>

    TODO: If you get a response such as this:<br />

    <pre>Error listing secrets engines: Error making API request.
    &nbsp;
    URL: GET https://bonkers-public-vault-c6443333.9d787275.z1.hashicorp.cloud:8200/v1/sys/mounts
    Code: 403. Errors:
    &nbsp;
    * 1 error occurred:
	    * permission denied
    </pre>

<hr />

<a name="APICalls"></a>

## API calls

Computers talk to each other using API calls. Vault provides to application programs <a target="_blank" href="https://www.vaultproject.io/docs/concepts/tokens">client service tokens</a> needed to access databases and other services. Here are the steps for that:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/147319306-482e5d40-16cb-4184-baee-71d9a4224aab.png"><img alt="hashicorp-vault-auth-flow-1018x268" src="https://user-images.githubusercontent.com/300046/147319306-482e5d40-16cb-4184-baee-71d9a4224aab.png"></a>

1. Application Authenticate with Vault (which coordinates with enterprise email, SMIL, and LDAP systems)

2. Vault verifies the identity of the application with a Trusted Platform (AWS, etc.)
   
3. Verification is obtained
   
4.  Return a client token for the application. The token has an <a href="#AttachedPolicy">attached policy</a>, which is mapped at authentication time, as the policy is deny all capabilities by default.

<a name="SecretsEngines"></a>

## Types of secrets engines

Vault provides <a href="#SecretsEngines">secrets engines</a> to work with each type of secret,
each a "<a target="_blank" href="https://developer.hashicorp.com/vault/docs/use-cases">use case</a>" for the Vault product:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/159198787-3125663a-58fc-4b2e-9322-2591327f0a4a.png"><img width="1460" alt="vault-secrets-engines-1460x1048" src="https://user-images.githubusercontent.com/300046/159198787-3125663a-58fc-4b2e-9322-2591327f0a4a.png"></a>

Behind its "cryptographic barrier", the <strong>KV</strong> Secrets Engine stores secrets such as these :

   * Passwords associated with userids typed in to login web applications. 

   * Tokens - a sensitive value created for an unrelated value, such as <a target="_blank" href="https://learn.hashicorp.com/tutorials/nomad/hashicorp-enterprise-license?in=vault/enterprise">enterprise software license keys</a>

   * X.509 certificates for SSL/TLS (traceabile to public root CAs) to encrypt and decrypt data in transit, but generated without going through the manual process of generating a private key and CSR submitted to a root CA. (The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as define in <a target="_blank" href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. The private key is a DER-encoded PKCS 8 PrivateKeyInfo, as specified in <a target="_blank" href="https://tools.ietf.org/html/rfc5958">RFC 5958</a>)

   * Asymmetric Keys to encrypt and decrypt data stored (at-rest)

   * API Keys provided by programs to obtain data from servers

   * database credentials

Secrets engines listed alphabetically:

   * Active Directory (AD)

   * AliCloud
   * AWS
   * Azure (cloud from Microsoft)
   * Consul (from HashiCorp)
   * GoogleCloud
   * GoogleCloud KMS (Key Managerment Service)

   * <strong>kmip</strong> is the <a target="_blank" href="http://docs.oasis-open.org/kmip/spec/v1.4/kmip-spec-v1.4.html">OASIS-defined</a> industry-standard <a target="_blank" href="https://developer.hashicorp.com/vault/tutorials/adp/kmip-engine">KMIP</a> (Key Management Interoperability Protocol) to secure transfer (delegation) of secrets among different systems.

   * <strong>kv</strong> (Key/Value), the most basic to store password (like 1Password)
   * <strong>nomad</strong> (from HashiCorp)
   * RabbitMQ messagging
   * <strong>pki</strong> (Public Key Infrastructure used by Microsoft, etc.)
   * <strong>ssh</strong> (Secure Shell used by Linux)
   * <strong>sys</strong> is the default system engine
   * <strong>totp</strong> (Time-based One-time Password, as defined by <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc6238)">RFC 6238</a>)
   * <strong>transit</strong> (from HashiCorp)
   <br /><br />

PROTIP: Some secrets engines, such as Microsoft AD (Active Directory) and KMIP, are managed using only CLI/API rather than GUI.

PROTIP: Within Vault, key material and metadata about Secret Engines are stored as a root folder.


<a name="Cost"></a>

### Cost of Keys in Cloud

Each KMS key stored costs $1/month. The first 20,000 decrypt requests each month are free, then $0.03 per 10,000. An additional $1/month for each key being automatically rotated.

Requests to the <a target="_blank" href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPair.html">GenerateDataKeyPair API</a> and <a target="_blank" href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPairWithoutPlaintext.html">GenerateDataKeyPairWithoutPlaintext API</a> operations and requests to API operations such as Sign, Verify, Encrypt, Decrypt, and GetPublicKey that reference asymmetric KMS keys (such as RSA) are excluded from the free tier. 
For AWS KMS: requests of some encryption algorithms cost more than others: 

   $00.03 per 10,000 <a target="_blank" href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPairWithoutPlaintext.html">GenerateDataKeyPairWithoutPlaintext API</a> involving RSA 2048 keys<br />
   $00.10 per 10,000 Elliptic Curve (ECC) GenerateDataKeyPair (for signing)<br />
   $00.15 per 10,000 asymmetric (SM2) requests except RSA 2048<br />
   $12.00 per 10,000 RSA <a target="_blank" href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPair.html">GenerateDataKeyPair API</a> requests



### Other alternatives

* <a target="_blank" href="https://medium.com/keycloak">Red-Hat Keycloak</a>

* <a target="_blank" href="https://www.cyberark.com/">CyberArk.com</a>, also a container-compatible secrets solution.

* France-based Thales in Feb 2017 acquired <a target="_blank" href="https://cpl.thalesgroup.com/encryption/vormetric-data-security-platform">Vormetrix Data Security Platform</a> with <a target="_blank" href="https://www-50.ibm.com/partnerworld/gsd/showimage.do?id=31915">IBM</a>

* <a target="_blank" href="https://12factor.net/config">Chapter III. of the "twelve-factor app"</a> recommends storing config in <strong>environment variables</strong>. The usual mechanism has been in a clear-text file loaded into <strong>operating system variables</strong>, such as:

   <pre>docker run -e VARNAME=mysecret ...</pre>

   PROTIP: However, this is NOT cool anymore because the value of variables (secrets) can end up in logs. All processes have access to secrets (no RBAC). 
   And this mechanism makes <a target="_blank" href="https://wilsonmar.github.io/cyber-security/#credential-rotation-lifecycle">periodic key rotation</a> manually cumbersome.

* <a target="_blank" href="https://docs.docker.com/engine/swarm/secrets/">Docker Secrets</a> was NOT designed for unlicensed (free) standalone containers<a target="_blank" href="https://medium.com/lucjuggery/from-env-variables-to-docker-secrets-bc8802cacdfd">*</a>, but for Enterprise licensed (paid) Docker Swarm services in commands such as:

   <pre>docker service create --secret db_pass --name secret-test alpine bash</pre>

   <tt>db_pass</tt> is a file (with .txt extension) encrypted by a command such as:

   <pre>echo "mysecret" | docker secret create db_pass -
   docker secret ls</pre>

   Secrets are stored in Docker's logging infra within its <a target="_blank" href="https://medium.com/lucjuggery/raft-logs-on-swarm-mode-1351eff1e690">"Raft"</a> distributed leader consensus mechanism shared with Swarm managers. So encryption needs to be locked in Swarm. 

   Secrets can be added to a running service, but key rotation requires container restart.

   When the service is created (or updated), the secret is mounted onto the container in the <tt>/run/secrets</tt> directory which custom program can retrieve<a target="_blank" href="https://howchoo.com/g/zwzkzduwmjy/getting-started-with-docker-secrets">*</a>

   <pre>def get_secret(secret_name):
    try:
        with open('/run/secrets/{0}'.format(secret_name), 'r') as secret_file:
            return secret_file.read()
    except IOError:
        return None
&nbsp;
database_password = get_secret('db_pass')
   </pre>

* <a target="_blank" href="https://www.youtube.com/watch?v=j3QJRdiTr1I&t=19m25s">Kubernetes secrets</a> are stored in its etcd process.

   <pre>--experimental-encryption-provider-config</pre>

   <a target="_blank" href="https://github.com/Boostport/kubernetes-vault">https://github.com/Boostport/kubernetes-vault</a>

   Within Kubernetes:
   * https://developer.hashicorp.com/vault/docs/platform/k8s/injector
   * https://developer.hashicorp.com/vault/tutorials/kubernetes/kubernetes-sidecar
   <br /><br />

   RBAC (Role-based Access Control) has to be enabled in Kubernetes:
   <pre>--authorization-mode=RBAC</pre>

* The Aqua utility provides secrets management to orchestrators so that:

   <pre>docker run -it --rm -e SECRET={dev-vault.secret/password} \
   --name ubuntu ubuntu /bin/bash</pre>

   <pre>docker inspect ubuntu -f "{{json .Config.Env}}"</pre>
   returns:

   <pre>["SECRET={dev.vault-secret/password}","PATH=/usr/local/sbin:..."]</pre>

   References:
   * https://www.saasworthy.com/product/aws-secrets-manager/pricing
   * https://www.saasworthy.com/product/hashicorp-vault/pricing
   * https://www.saasworthy.com/product/cyberark-pas/pricing
   * https://www.saasworthy.com/product/box-keysafe/pricing
   * https://www.saasworthy.com/product/manageengine-key-manager-plus/pricing
   * https://www.saasworthy.com/product/equinix-smartkey/pricing
   * https://www.saasworthy.com/product/akeyless-vault
   <br /><br />


## Different ways to access secrets 

<a target="_blank" href="https://www.youtube.com/watch?v=VYfl-DpZ5wM">VIDEO: Introduction to HashiCorp Vault</a> Mar 23, 2018
by Armon Dadgar, HashiCorp's CTO,
is a whiteboard talk about avoiding "secret sprawl" living in clear text with
empheral (temporary) passwords and cryptographic offload to a central service:
<a target="_blank" href="https://www.youtube.com/watch?v=VYfl-DpZ5wM"><img alt="hashicorp-vault-dadgar-927x522-94211" src="https://user-images.githubusercontent.com/300046/38281567-67193598-3768-11e8-9061-ebc6abbeb1e9.jpg"></a>

1. Machine authentication and authorization focuses on proving a machine’s identity and authorizing
what a machine is enabled to do.

2. Machine-to-machine access is about controlling which machines are allowed to speak to one another.

3. Human-to-machine access concerns how we control which humans are allowed to speak to which
machines.

4. Human authentication and authorization uses third-party identity tools to enable single sign-on. 

Administrators and users can interact with Vault using its GUI, CLI, or API.
Its CLI is a wrapper performing API calls.


<hr />

## Vault client install

<hr />

## Secrets handling best practices

<a target="_blank" href="https://www.youtube.com/watch?v=bHz715dRCpg">VIDEO</a>: <strong>Security Posture</strong>

SURVEY: How much do you agree whether each of these should be implemented?

1. Storing plain-text secrets hard-coded in program code within GitHub is like leaving packages sitting in front of your door for a long time. Don't wait until "production" to use secure mechanisms.

   We have sample code you can incorporate into your code right away.

2. Enable MFA <strong>multi-factor authentication</strong> to block use of stolen passwords.
      
3. Limit exposure if auth secrets disclosed. Use <strong>Least Privilege</strong> approach to restrict access to encrypted data, based on a need-to-know basis. RBAC (Role-based Access Control) provides each user only the rights for his/her specific job role.

4. Distribute authentication secrets securely, using different channels.

   Vault's "AppRole" distributes the equivalent of userid and password, but for machine authentication.

5. Don't let secrets live forever. Use single-use token with short TTL (Time To Live). 
   Even if secrets are encrypted (using GPG), machines are powerful enough and hackers have enough time to figure out how to crack encryption algorithms, given enough time.

6. <a href="#Centralized">Centralize</a> management of secrets.
7.  Comprehensively log activities for audit and forensics.
8.  Forward logs to a central SOC (Security Operations Center) for continuous, quick detection of and resonse to security incidents
9.  Stream each transaction to an event hub to trigger immediate alerting and actions

10. <strong>Encrypt data in transit</strong> with Mutual authentication (mTLS).
11. Encrypt data at rest.
12. Rotate static secrets frequently. PROTIP: One can't simply remove a file in GitHub because old versions hidden in history may be decrypted using old keys.
13. Detect unauthorized access to auth secrets. App alert if secret is absent or not good.
14. Have a "break glass" procedure if auth secrets are stolen. Revocation.
<br /><br />

Capabilities that Vault does not address (for Zero-Trust), but other HashiCorp products do:

   * Consul: Replace perimeter-based security referencing static IP addresses with dynamic <strong>identity-based security</strong>
   * Simulated phising: Avoid being a victim of phishing. Don't respond to email links, unknown calls & text without verification.
   <br /><br />

## Why is a system needed for secrets?

Questions for secrets management:

   1. How do applications get secrets?
   1. How do humans acquire secrets?
   1. How are secrets updated? (rotated)
   1. How is a secret revoked?
   1. When were secrets used? (lookup in usage logs)
   1. What do we do in the event of compromise? (an unauthorized third-party, such as hackers, make use of the secret)
   <br /><br />



<hr />


<a name="Centralization"></a>

## Centralization

Centralization enables a common set of <strong>policies</strong> to be enforced globally, with a consistent set of secrets and keys are exposed to applications so they can interoperate.

and policy management that is highly available and scaleable as the number of clients and their functional needs increase. 

### Centralized Security Pros

Many of the <a target="_blank" href="https://www.forbes.com/lists/global2000/?sh=79d491635ac0">"Forbes Global 2000" largest companies in the world</a> license Vault's Enterprise capabilities to <strong>centralize management of secrets</strong> for both faster response to changes to personnel and systems.

Installation and maintenance of Vault requires some configuration and tuning along with changes in workflows.

So it is assumed that Vault server and SaaS offerings provide a <strong>central group</strong> of people to provide a <strong>concerted approach</strong> to guarding their employer's secrets handling by employees.

The typical arrangement is a differentiation between Service Owners vs. Security Owners:

<strong>Service Owners</strong> are responsible for:
   * Operational Access
   * Authentication Methods
   * Reliability of Vault (Availability reporting)
   <br /><br />

<strong>Security Owners</strong> are responsible for:
   * Authorization Methods
   * Secrets Policy
   * Rotation Strategy
   * Data, Application, and Systems Access
   <br /><br />


<a name="Tasks"></a>

## RBAC Tasks

Enhancements to <a target="_blank" href="https://developer.hashicorp.com/hcp/docs/vault/vault-permissions">HashiCorp's definition of tasks used to grant RBAC permissions</a>:

1. List, View audit logs - Recovery Admin only
2. Remove backup snapshots, audit logs, clusters - Recovery Admin only
3. Seal/unseal clusters - Recovery Admin only

4. Create, list, view clusters - Platform Admin only
5. Generate admin tokens - Platform Admin only
6. Setup performance replication - Platform Admin only
7. Cluster scaling - Platform Admin only
8. View snapshots - Platform Admin only
9. Expose resources publicly (edit visibility rules) - Platform Admin only
<br /><br />

PROTIP: Strategies include:
<ul>
   A. Define limited permissions to app developers (read and write but not delete data).

   B. Define separate admin accounts to delete audit logs and other data needed for forensics and disaster recovery.

   C. Define less restrictive permissions to enable creation of clusters

   D. Define separate permssions to accounts used to do scaling

   E. Separate Platform admin accounts, to limit impact of stolen credentials
</ul>

<a name="Roles"></a>

## Roles/Tasks by Persona

Here are various roles used to <a target="_blank" href="https://developer.hashicorp.com/hcp/docs/vault/vault-permissions">define RBAC permissions</a>, as defined by <a target="_blank" href="https://intellipaat.com/blog/what-is-azure-key-vault/">some</a>:

<strong>Subscription</strong>: an identifier used for billing of Azure resources.

<strong>Tenant</strong>: An organization that owns and administers a specific instance of Microsoft cloud services (Azure and Microsoft 365 services) within an Azure subscription.

<strong>Azure Active Directory</strong>: an Azure service managing subscriptions for a single tenant, which can contain one or more domains.

<strong>Subscription Admin</strong>: have financial fudiciary responsiblity for spending billed to  specific subscriptions.

<strong>Resource</strong>: A resource is an entity that may be managed in Azure cloud.

<strong>Resource Group</strong>: a Azure solution container of connected resources managed as a group. 

<strong>Security Principal</strong>: User-created apps, services, and automation tools permitted to access specific Azure resources.

<strong>Managed Identities</strong>: an automatically managed identity pre-defined in Azure AD to access Azure services.

<strong>Vault Owner</strong>: the roles which can build a key vault and have complete lifecycle control and access to it, including auditing logs to keep track of who has access to the secrets and keys. The Vault Owner can restore the key to a new version, back it up, and perform other operations.

<strong>Vault Consumer</strong>: the one who, after being granted access permissions, acts on the assets stored in key vaults.

<strong>Managed HSM Administrators</strong>: A Managed HSM pool is completely under the control of users who have been assigned its Administrator.

<strong>Managed HSM Crypto Service Encryption User</strong>: Built-in roles are typically assigned to users or service principals who will use keys in Managed HSM to perform cryptographic activities. Crypto users can generate new keys but not delete existing ones.


<hr />
	
## Vault fundamentals certification

Since 2020 HashiCorp offers (for just $70.50 USD) an on-line certification exam for Vault.

   * https://www.hashicorp.com/certification/vault-associate
   * https://developer.hashicorp.com/vault/tutorials/associate-cert/associate-study
   * https://developer.hashicorp.com/vault/tutorials/associate-cert/associate-review
   * https://developer.hashicorp.com/vault/tutorials/associate-cert/associate-questions
   <br /><br />

Answer 57 questions (closed book) in 60 minutes. The passing percentage is not published.
Good for 2 years.
You must wait 7 days between exam attempts.
You can only attempt an exam 4 times total in a one year period. 
If you fail 3 exams, you must wait 365 days after your last exam to retake it again.

1.	Compare authentication methods
   * Describe authentication methods
   * Choose an authentication method based on use case
   * Differentiate human vs. system auth methods
   <br /><br />

2.	Create Vault policies
   * Illustrate the value of Vault policy
   * Describe Vault policy syntax: path
   * Describe Vault policy syntax: capabilities
   * Craft a Vault policy based on requirements
   <br /><br />

3.	Assess Vault tokens
   * Describe Vault token
   * Differentiate between <a href="#TokenTypes">service and batch tokens</a>
   * Describe root token uses and lifecycle
   * Define token accessors
   * Explain time-to-live
   * Explain orphaned tokens
   * Create tokens based on need
   <br /><br />

4.	Manage Vault leases
   * Explain the purpose of a lease ID
   * Renew leases
   * Revoke leases
   <br /><br />

5.	Compare and configure Vault secrets engines
   * Choose a secret method based on use case
   * Contrast <a href="#DynamicSecrets">dynamic secrets</a> vs. static secrets and their use cases
   * Define transit engine
   * Define secrets engines
   <br /><br />

6.	Utilize Vault CLI
   * Authenticate to Vault
   * Configure authentication methods
   * Configure Vault policies
   * Access Vault secrets
   * Enable Secret engines
   * Configure environment variables
   <br /><br />

7.	Utilize Vault UI
   * Authenticate to Vault
   * Configure authentication methods
   * Configure Vault policies
   * Access Vault secrets
   * Enable Secret engines
   <br /><br />

8.	Be aware of the Vault API
   * Authenticate to Vault via Curl
   * Access Vault secrets via Curl
   <br /><br />

9.	Explain Vault architecture
   * Describe the encryption of data stored by Vault
   * Describe cluster strategy
   * Describe storage backends
   * Describe the Vault agent
   * Describe secrets caching
   * Be aware of identities and groups
   * Describe Shamir secret sharing and unsealing
   * Be aware of replication
   * Describe seal/unseal
   * Explain response wrapping
   * Explain the value of short-lived, dynamically generated secrets
   <br /><br />

9.	Explain encryption as a service [app access Vault server directly]
   * Configure <a href="#TransitEngine">transit secret engine</a>
   * Encrypt and decrypt secrets
   * Rotate the encryption key
   <br /><br />

Prep:
   * https://www.whizlabs.com/blog/hashicorp-vault-certification/
   * https://medium.com/bb-tutorials-and-thoughts/how-to-pass-hashicorp-vault-associate-certification-c882892d2f2b
   * STAR: https://medium.com/bb-tutorials-and-thoughts/200-practice-questions-for-hashicorp-vault-associate-certification-ebd7f7d27bc0
   * https://www.linkedin.com/pulse/how-pass-hashicorp-vault-associate-certification-yassine-n-/
   * https://github.com/bmuschko/cva-crash-course for <a target="_blank" href="https://learning.oreilly.com/live-events/practical-amazon-elastic-kubernetes-service-eks-for-the-real-world/0636920074620/0636920083154/">"Practical Amazon Elastic Kubernetes Service (EKS) for the Real World" video class on OReilly.com</a>
   <br /><br />


## Vault Operations Professional exam 

<a target="_blank" href="https://www.hashicorp.com/certification/vault-operations-professional">
HashiCorp’s Vault Operations Pro Certification</a> is a $295 4-hour hands-on lab-based as well as multiple-choice.
The $295 exam fee <a target="_blank" href="https://hashicorp-certifications.zendesk.com/hc/en-us/articles/360049773991-What-are-the-HashiCorp-exam-retake-rules-">includes a free retake after 7 days but within 3 months</a>.

1.	Create a working Vault server configuration given a scenario<br />
   1a.	Enable and configure secret engines<br />
   1b.	Practice production hardening<br />
   1c.	Auto unseal Vault<br />
   1d.	Implement integrated storage for open source and Enterprise Vault<br />
   1e.	Enable and configure authentication methods<br />
   1f.	Practice secure <a href="#VaultInit">Vault initialization</a><br />
   1g.	Regenerate a root token<br />
   1h.	Rekey Vault and rotate encryption keys

2.	<a href="#Monitoring">Monitor a Vault environment</a><br />
   2a.	Monitor and understand Vault telemetry<br />
   2b.	Monitor and understand Vault audit logs<br />
   2c.	Monitor and understand Vault operational logs

3.	Employ the Vault security model<br />
   3a.	Describe secure introduction of Vault clients<br />
   3b.	Describe the security implications of running Vault in Kubernetes

4.	Build fault-tolerant Vault environments<br />
   4a.	Configure a highly available (HA) cluster<br />
   4b.	[Vault Enterprise] Enable and configure <a href="#DR">disaster recovery (DR) replication</a><br />
   4c.	[Vault Enterprise] Promote a secondary cluster

5.	Understand the hardware security module (HSM) integration<br />
   5a.	[Vault Enterprise] Describe the benefits of auto unsealing with HSM<br />
   5b.	[Vault Enterprise] Describe the benefits and use cases of seal wrap (PKCS#11)

6.	Scale Vault for performance<br />
   6a.	Use batch tokens<br />
   6b.	[Vault Enterprise] Describe the use cases of performance standby nodes<br />
   6c.	[Vault Enterprise] Enable and configure performance replication<br />
   6d.	[Vault Enterprise] Create a paths filter

7.	Configure access control<br />
   7a.	Interpret Vault identity entities and groups<br />
   7b.	Write, deploy, and troubleshoot ACL policies<br />
   7c.	[Vault Enterprise] Understand Sentinel policies<br />
   7d.	[Vault Enterprise] Define control groups and describe their basic workflow<br />
   7e.	[Vault Enterprise] Describe and interpret multi-tenancy with namespaces

8.	Configure Vault Agent<br />
   8a.	Securely configure auto-auth using a token sink (referencing a file written by a method)<br />
   8b.	Configure <a target="_blank" href="https://developer.hashicorp.com/vault/tutorials/vault-agent/agent-templates">templating</a> (formerly Consul-template)

<hr />

## Vault Enterprise Licensed Classes

<a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp">These Enterprise Academy courses</a> are instructor-led, and primarily address the needs of Platform Operators using Enterprise Vault features. Individuals are signed up for these group classes using education credits as part of Enterprise Vault licensing.

1. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/approle-auth-method">AppRole Authentication Method</a>   - configure and use Vault's AppRole authentication method. See https://developer.hashicorp.com/vault/docs/concepts/response-wrapping

2. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/aws-auth-method">AWS Authentication Method</a>   - configure and use Vault's AWS authentication method, which uses AWS IAM credentials to authenticate EC2 instances, Lambda functions, etc.

3. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/aws-secrets-engine">AWS Secrets Engine</a>   - dynamically generate short-lived AWS credentials for public cloud platforms (like AWS, Azure, Google Cloud, etc.) instead of long-lived, static credentials minimizes the risk of unauthorized access to your cloud accounts.

4. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/database-secrets-engine">Database Secrets Engine</a>   - Migrate a Python web application from using static database credentials to ones generated dynamically by Vault's MySQL Database secrets engine.

5. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/deploy-consul">Deploy a Consul Cluster</a>   - Deploy and configure a Consul cluster for use behind a Vault Enterprise cluster.

6. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/deploy-vault-consul-storage-dev-test">Deploy a Vault Cluster with Consul Storage</a>   - Deploy and configure a Vault Enterprise cluster.

7. <a target="_blank" href="">Deploy Vault with Raft Storage</a>   - Deploy and configure a Vault Enterprise cluster - important for making your Vault Enterprise cluster production quality.

8. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/gcp-secrets-engine">Google Cloud Secrets Engine</a>   - dynamically generate short-lived GCP credentials with Vault.

9. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/kubernetes-auth">Kubernetes Authentication Methods</a>   - configure and use Vault's Kubernetes authentication method using JWT.

10. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/ldap-auth-method">LDAP Authentication Method</a>   - configure and use Vault's LDAP authentication method.

11. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/pki-secrets-engine">PKI Secrets Engine</a>   - setup a vault server as a intermediate certificate authority to generate dynamic PKI leaf certificates.

12. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/vault-agent">Vault Agent</a>   - configure and use Vault agent as a way of injecting secrets. The Vault agent and web application are running in separate containers inside of a pod in a Kubernetes environment.

13. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/vault-replication-dr">Vault Disaster Recovery Replication</a> between Vault clusters in different cloud regions.

14. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/vault-operations">Vault Operations</a>   - audit logs, root token management, and rekeying and rotating of Vault's keys.  <a target="_blank" href="">Migrate a Vault cluster to the GCP Auto-Unseal option.

15. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/vault-replication-pr">Vault Performance Replication</a>   - Configure Performance Replication between Vault Clusters for constant availability of Vault. A mount filter limits what data is shared between NA-1 and EU-1 regions for General Data Protection Regulation (GDPR) compliance.

16. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/tokens-policies">Vault Tokens and Policies</a>   - configure and use Vault Tokens and Policies.

17. <a target="_blank" href="https://play.instruqt.com/study-room/invites/lkoiapro4tqp/HashiCorp-EA/tracks/kvv2-versioned-secrets">Versioned Secrets</a>   - use and manage versioned secrets stored in Vault's Key/Value Version 2 (KVv2) secrets engine.


<hr />

<a name="Protocols"></a>
<a name="AuthMethods"></a>

<a name="DefaultAuthMethods"></a>

## Auth Methods for people

Auth (authorization) methods perform authentication to verify the user or machine-supplied information. 

* On a GUI, click inside the Authentication Method value for a drop-down of what Vault supports, out of the box:

    <a title="_blank" href="https://user-images.githubusercontent.com/300046/159199057-97054080-4b15-4a43-b47d-984336e2c0ae.png"><img width="439" alt="vault-sign-in-878x646" src="https://user-images.githubusercontent.com/300046/159199057-97054080-4b15-4a43-b47d-984336e2c0ae.png"></a>
   
    The default method is "Token", such as the one issued to the Administrator when the Vault server was created.
    
    Auth methods are also named by the <strong>protocol</strong> used to communicate
    (such as LDAP, OIDC, JWT), the software (such as "RADIUS"),
    and the name of companies offering software (such as "Okta" and "GitHub").

    * Token (Vault's default Auth Method)
    * Username (such as an email address used on many legacy websites)
    
    * LDAP auth method enables user authentication using an existing LDAP server while
    * Okta (third-party identity provider)
    * JWT
    * OIDC
    
    * RADIUS (legacy Windows Active Directory)
    * GitHub (coordinated using OIDC protocol)
    <br /><br />

    REMEMBER: An Auth Methods shown to users in a drop-down may be <strong>enabled</strong> 
    on the Vault server.

    In addition the above, Vault supports the <a href="#AppRole">"AppRole" Auth Method</a> 
    used between computer-to-computer APIs.

* The list above is also shown on the Admin's Terminal from this command:

   <tt>vault auth list</tt>

   Sample output:

   <pre>Path    Type   Accessor             Description              Version
   ----    ----   --------             -----------              -------
   token/  token  auth_token_c635dfe4  token based credentials  n/a
   </pre>

   * AppRole auth method is recommended for server machines or apps handling automated workflows
   <br /><br />

   ## Login with Default Auth Token

1. Log into Vault using the vault CLI:

   <pre><strong>vault login -method=github token="${VAULT_TOKEN}
   </strong></pre>   

   ### Adding Auth Method

2. On developer machines, the GitHub auth method (<tt>auth/github</tt>) is easiest to use. 

   <tt>vault auth enable github</tt>

   ### Cubbyhole

   To ensure that no secret value is transmitted across the wire, Vault's <strong>cubbyhole response wrapping</strong> is used where the initial token is stored in the cubbyhole <a href="#SecretsEngines">secrets engines</a>. 
   A reference to the secret within a cubbyhole.
   The wrapped secret can be unwrapped using the single-use wrapping token. Even the user or the system created the initial token won't see the original value. 

   The Vault "cubbyhole" is each user's private "locker" which a specific Token accesses.

   This mechanism provides malfeasance detection by ensuring that only a single party can ever unwrap the token and see what’s inside (given a limited time).

   All secrets are namespaced under a token. When that token expires or is revoked, all the secrets in its cubbyhole are revoked with it. Even the root user cannot reach into a cubbyhole. 
   
   However, secrets in the key/value <a href="#SecretsEngines">secrets engine</a> are accessible to other tokens if its policy allows it.

3. Configure GitHub engineering team authentication to be granted the default and application policies:

   <pre>vault write auth/github/map/teams/engineering value=default,applications</pre>


<hr />

<a name="AppRole"></a>

### AppRole Auth Method

   * https://developer.hashicorp.com/vault/docs/auth/approle
   * https://developer.hashicorp.com/vault/tutorials/auth-methods/approle 
   <br /><br />

An "AppRole" is a set of Vault policies and login constraints that must be met to receive a token under those policies. The scope can be as narrow or broad as desired. An AppRole can be created for a particular machine, or even a particular user on that machine, or a service spread across machines.  
AppRole has an open design to enable a varied set of workflows and configurations to handle large numbers of apps.

The approle auth method allows machines or apps to authenticate with Vault-defined roles.

AppRole uses role_id and secret_id for login. Security of AppRole is increased when they are delivered separately by two different tools. This avoids any single person or entity except for the authenticating machine or application knowing both of them.

Credentials required for successful login depend upon the constraints set on the AppRole associated  with the credentials.
   * If the SecretID used for login is fetched from an AppRole, that is operating in Pull mode.
   * If a "custom" SecretID is set against an AppRole by the client, that's Push mode.
   <br /><br />

1. Log in with AppRole:

   <pre>curl --request POST --data @payload.json \
   http://127.0.0.1:8200/v1/auth/approle/login
   </pre>

   https://github.com/hashicorp/vault-action

1. Enable a secrets path for kv engine:

   vault secrets enable -path=secret kv

   Version 1 of the KV secrets engine uses write and read commands.
   Version 2 uses kv put and kv get commands.

1. Write a Secret to the KV Secrets Engine

   vault write secret/app-1 username="app-1-user" password="my-long-password"

   Success! Data written to: secret/app-1



<a name="TokenTypes"></a>
<a name="AttachedPolicy"></a>

### Tokens with attached policies

Within Vault, tokens map to information. The information mapped to each token is a set of one or more attached policies. Policies control what is allowed to be done with that information.

   * <strong>Service tokens</strong> support common features such as renewal, revocation, creating child tokens, and more. They are tracked and thus replicated, so are considered "heavyweight".
                              
   * <a target="_blank" href="https://learn.hashicorp.com/tutorials/vault/batch-tokens?in=vault/tokens">Batch tokens</a>  can’t be renewed (can’t have an explicit max TTL), so requires no storage on disk to track and replicate, so are "lightweight" and scalable. Batch tokens can’t be root tokens and can’t be used to create tokens.

1. The admin who manages <a href="#SecretsEngines">secrets engines</a> needs to be given a policy with capabilities on <strong>mounts</strong> (of secrets engines):

   <pre>path "sys/mounts/*" {
  capabilities = ["create", "read", "update", "delete", "list", "sudo"]
}
   </pre>

   <tt>sudo</tt> capabilities allows access to paths that are root-protected. Root tokens have the root policy attached to them. They are created at <tt>vault operator init</tt> so they can do anything in Vault, and never expire (without any renewal needed). As a result, it is purposefully hard to create root tokens. It is good security practice for there to be multiple eyes on a terminal whenever a root token is used and then revoked immediately after tasks are completed.
   
   This path <tt>sys/rotate</tt> requires a root token or sudo capability in the policy.

1. Each policy defines a list of paths. Each path expresses the capabilites that are allowed.

   <pre>path "secret/data/{{identity.entity.id}}/*" {   
   capabilities = ["create", "update", "read", "delete"]
   required_parameters = ["bar", "baz"] 
}  
path "secret/metadata/{{identity.entity.id}}/*" {   
   capabilities = ["list"]
}
   </pre>

1. Permissions to configure Transit Secrets Engine:

   <pre># Enable transit secrets engine
path "sys/mounts/transit" {
  capabilities = [ "create", "read", "update", "delete", "list" ]
}
# To read enabled secrets engines
path "sys/mounts" {
  capabilities = [ "read" ]
}
# Manage the transit secrets engine
path "transit/*" {
  capabilities = [ "create", "read", "update", "delete", "list" ]
}
   </pre>

1. To configure configure Transit Secrets Engine via CLI:

   <pre>vault secrets enable transit</pre>

   Alternately, to enable transit via API call using Curl:

   <pre>curl --header "X-Vault-Token: <em>TOKEN</em>" \
       --request POST \
       --data <em>PARAMETERS</em> \
       <em>VAULT_ADDRESS</em>/v1/sys/mounts/<em>PATH</em>
   </pre>

   Alternately, via UI at http://127.0.0.1:8200/ui/vault/auth?with=token
   see https://learn.hashicorp.com/tutorials/vault/eaas-transit


1.  To be able to list existing policies:

   <pre>path "sys/policies/acl" {
  capabilities = ["list"]
}
   </pre>

1. List all the registered policies:

   <pre><strong>vault read sys/policy</strong></pre>


1. Encrypt plaintext in Base64 using Transit Engine in key_ring_name "orders" (example from Bhargav):

   <pre><strong>vault write transit/encrypt/orders plaintext=$(base64 <<< "1234 4564 2221 5562")
   </strong></pre>

   The ciphertext returned is prefixed with <tt>vault:v1:</tt> so that when you decrypt this ciphertext, you now to use Vault and v1 (version 1) of the encryption key.

1. Rotate the encryption key version:

   <pre>vault write transit/keys/orders/rotate
   </pre>

1. Decrypt the cyphertext:

   <pre>vault write transit/decrypt/orders ciphertext="vault:v2:XdEG7SKvaTFOwgi4bdrAy1ftxNw6QYR2Y82vWnOoMnvIkQLZeU419qWVCXuABCD"
   </pre>


<hr />

<a name="Backend"></a>

## Backend

From <a target="_blank" href="
https://www.vaultproject.io/docs/internals/architecture">
https://www.vaultproject.io/docs/internals/architecture</a>

<a target="_blank" href="https://user-images.githubusercontent.com/300046/83564966-cf8a6200-a4da-11ea-9bdf-1a2492c371df.png">
<img alt="vault-layers" src="https://user-images.githubusercontent.com/300046/83564966-cf8a6200-a4da-11ea-9bdf-1a2492c371df.png"></a>

When the Vault server is started, it must be provided with a <strong>storage backend</strong> so that data is available across restarts. 
Similarly, the HTTP API service must be started by the Vault server on start so that clients can interact with it.

<a target="_blank" href="
https://hashicorp.github.io/field-workshops-vault/slides/multi-cloud/vault-oss">
https://hashicorp.github.io/field-workshops-vault/slides/multi-cloud/vault-oss</a>

<a target="_blank" href="
https://hashicorp.github.io/field-workshops-vault/slides/multi-cloud/vault-oss/index.html#1">
https://hashicorp.github.io/field-workshops-vault/slides/multi-cloud/vault-oss/index.html</a>
is the slidedeck HashiCorp Sales Engineers use for a high-level presentation.


Secrets engines are Vault plugins that store, generate, or encrypt data. Secrets engines are incredibly flexible, so it is easiest to think about them in terms of their function.



<hr />

### TODO: Backup cluster data
    
PROTIP: TODO: Before the cluster is deleted or destroyed, make it possible to restore the current state of data: automate the periodic capture of snapshots of data to a safe place. Then practice Disaster Recovery.

PROTIP: TODO: To ensure that hackers can't delete the backups so they can demand ransoms, set permissions so the account to create backups cannot be also used to delete them.

### Delete cluster
    
PROTIP: Rather than letting the cluster sit idle racking up charges, delete it after taking a snapshot so that it can be used to restore the cluster the way it was.

<img alt="vault-hcp-manage-drop-410x306.jpg" width="410" height="306" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1675389154/vault-hcp-manage-drop-410x306_ehwn0c.jpg">

### Restore cluster data

TODO: To bring data from a previous instance ...

<hr />

<a name="Config"></a>

### Configure for Authentication

1.  Configure at least one audit device to write log (before completing the request):

    <pre><strong>vault audit enable file file_path=/var/log/vault_audit.log</strong></pre>

    <a name="AWS"></a>

    ### AWS 

    A prerequisite are AWS Credentials to an AWS account.

    <a target="_blank" href="https://learn.hashicorp.com/tutorials/cloud/terraform-hcp-provider-vault?in=vault/cloud-ops">Tutorial: Deploy HCP Vault with Terraform</a> example scenario automatically deploys an AWS VPC, and peers it with your HashiCorp Virtual Network (HVN).

2.  To learn Vault configuration, view <a target="_blank" href="https://www.youtube.com/watch?v=FxcUf2spssE">VIDEO: A Quickstart Guide</a>

   Connection between AWS VPC and HCP HVN is using VPC Peering.

3. Click "Manage" to Import to Terraform:

   <pre>terraform import hcp_vault_cluster.&LT;RESOURCE_NAME> vault-cluster</pre>

4. Click "Access Vault" for "Command-line (CLI)".
5. Click "Use public URL" and click the copy icon to save to your Clipboard, for example:

   <pre>export VAULT_ADDR="https://vault-cluster.vault.a17838e5-60d2-4e49-a43b-cef519b694a5.aws.hashicorp.cloud:8200"; 
export VAULT_NAMESPACE="admin"
   </pre>

1. Paste the value ???



## API to access HCP Vault

   * https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-apis
   * https://learn.hashicorp.com/tutorials/vault/getting-started-apis
   * https://github.com/hashicorp/hcp-sdk-go
   <br /><br />

Most HCP Go SDK make API calls based on environment variables:
   * HCP_PROJECT_ID
   * HCP_ORGANIZATION_ID
   <br /><br />

   * Define what other origins (domain, scheme, or port) from which a browser should permit loading of resources with the /sys/config/cors <a target="_blank" href="https://developer.hashicorp.com/vault/api-docs/system/config-cors">Vault API</a> endpoint. This impacts <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS) HTTP-headers</a>.

   * Define custom UI headers for security using the API (which provides version controls not tracked by the HCP portal).



<hr />

<a name="Replication"></a>

## Replication and DR

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/video/upload/v1655703805/vault-dr-1_huxtc3.wav">AUDIO</a>: 
   * https://www.vaultproject.io/docs/enterprise/replication
   * https://www.youtube.com/watch?v=0K1b1mT6t8E
   * https://www.somerfordassociates.com/blog/hashicorp-vault-enterprise-blog/
   <br /><br />

<em>The objective of this particular presentation is objection handling -- to have listeners accept the need to bring up a minimum of <strong>32 servers</strong> for multi-region HA and scalability. That seems like a lot. So we bring up the recommendations of others, KPI metrics, analogies, with security and technical justifications.</em>

We talked earlier about a <strong>datacenter</strong> where if a whole Availability Zone goes down, another can take its place.
To make that work, each datacenter has 3 Availability Zones, with 5 servers total.

Most enterprises have traffic worldwide, in different regions. For security, each region should be in a different subnet, using different accounts. So the usual enterprise strategy involves adding complete datacenters in different cloud regions around the world.

For large global organizations with a <strong>production</strong> infrastructure that must stay up, <strong>duplicate datacenters</strong> (called "<strong>secondaries</strong>") are added around the world, in different regions.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1655690643/vault-multi-region-map-1298x728_yjgvcv.png"><img alt="" width="1298" height="728" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1655690643/vault-multi-region-map-1298x728_yjgvcv.png"></a>

Many of the Global 2000 enterprises duplicate a set of datacenters across 3 regions -- one <strong>primary</strong> region and two secondaries. So when eventually the primary region fails completely, another region can take its place.

This architecture enables achievement of minimal RPO and RTO when a failure occurs:

   * RPO stands for the Recovery Point Objective, which measures the time frame within which transactions are lost during an outage.

   * RTO stands for the Recovery Time Objective, which measures the time users go without service during an outage.

These production metrics are kept low by adopting an architecture that ensures it.

Within the AWS cloud, for minimal recovery time, AWS recommends a complete <strong>secondary set</strong> of servers to be running continuously, to minimize the time it takes to switch from primary to secondary servers. 

Like a group of reserve soliders in an army, secondaries for DR do not handle client requests, but are on <strong>stand-by</strong>.

So each region has two datacenters: one for performance and one for Disaster Recovery.

This allows more servers to be added when needed. The more <strong>suddenly</strong> that additional load might come online, the more reserve capacity needs to be running for quick upgrade. The additional capacity <strong>absorbs</strong> burts of traffic while additional servers are being onboarded.

<a name="ReplicationFiltering"></a>

All server configuration changes and encryption keys are replicated to all servers all the time. 

Vault doesn't use the legacy approach of a "load balancer" where all servers run all the time, using a back-end to store data. Such approaches are now known to be single points of failure in the add-on load balancer or single database.

Instead, the way to minimize the chance of data corruption today is this: within each performance cluster, only the <strong>primary server modifies</strong> underlying data. Secondary servers are called "read replicas" because they respond only to read requests, and transparently forward (using gPRC protocol) requests to the primary. This works because, in practice, there are many more read requests than write requests.

Thus, each read replica secondary keeps track of tokens and leases in its own region. For better security, when a primary fails and a secondary is promoted, applications reauthenticate and obtain new leases from the newly-promoted primary.

This is how modern system such as Vault Enterprise are made bullet-proof today.


<a name="DR"></a>

Now let's look at the mechanics:

   * https://medium.com/@bernardo.gza83/hashicorp-vault-performance-replication-7ff8b8d08f04

   * <a target="_blank" href="https://www.youtube.com/watch?v=DtMjqpJTRbE" type="Jul 6, 2020">VIDEO: "HashiCorp Vault Enterprise and Open Source High-Availability Demo" by Sam Gabrial

   * https://banzaicloud.com/blog/vault-multi-datacenter/
   <br /><br />

Enterprise edition licenses also enable 
"Replication Filters" (aka "mount filters") to enforce data sovereignty requirements through fine-grained allow and deny policies around data replication.


<hr />

<a name="Consul"></a>

## Install Consul server

To <a target="_blank" href="Provision a Quick Start Vault & Consul Cluster on AWS with Terraform">provision a Quick Start Vault & Consul Cluster on AWS with Terraform</a>

Consul coordinates several instances of Vault server software.

Using HashiCorp's Consul as a <strong>backend</strong> to Vault provides durable storage of encrypted data at rest necessary for fault tolerance, availability, and scalability.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/159198511-5b2ea3df-6b48-499f-bee8-f73ea8e778bd.png"><img width="1533" alt="valut-consul-flow" src="https://user-images.githubusercontent.com/300046/159198511-5b2ea3df-6b48-499f-bee8-f73ea8e778bd.png"></a>

1. Consul Cluster server configurtion sample file <tt>/etc/consul.d/server/consul-node.json</tt>, replacing all caps with your own values:

   <pre>{
  "server": true
  "node_name": "NODENAME",
  "datacenter": "DATACENTERNAME",
  "data_dir": "/var/consul/data",
  "bind_addr": "0.0.0.0",
  "client_addr": "0.0.0.0",
  "domain": "HOSTAME.com",
  "advertise_addr": "IPADDR",
  "bootstrap_expect": 5,
  "retry_join": ["provider=aws tag_key=consul tag_value=true"],
  "ui": true,
  "log_level": "DEBUG",
  "enable_syslog": true,
  "primary_datacenter": "DATACENTERNAME",
  "acl": {
     "enabled": true,
     "default_policy": "allow",
     "down_policy": "extend-cache"
  },
  "node_meta": {
     "zone": "AVAILABILITYZONE"
  }
  "autopilot":{  # Enterprise feature
     "redundancy_zone_tag": "zone"
  }
}
   </pre>

1. To see log entries:

   <pre><strong>sudo tail -F /var/log/messages</strong></pre>

1. Take a snapshot used to restore:

   <pre><strong>consul snapshot save yymmdd-svr1.snap</strong></pre>

   Response:

   <pre>Saved and verified snapshot to index 123</pre>

1. Inspect the snapshot:

   <pre><strong>consul snapshot inspect yymmdd-svr1.snap</strong></pre>

   Response is an ID, Size, Index, Term, Version.


## Nomad

HashiCorp Nomad passes secrets as files. 

It polls for changed values. Tasks get tokens so they can retrieve values.


<a name="envconsul"></a>

### Using Envconsul with GitHub 

* <a target="_blank" href="https://github.com/hashicorp/envconsul">envconsul, at https://github.com/hashicorp/envconsul</a> (from Hashcorp) populates values in environment variables referenced within programming code (12-factor applications which get their configuration via the environment).

Envconsul is launched as a subprocess (daemon) which retrieves secrets using REST API calls of KV (Key Value) pairs in Vault/Consul based on "configuration files" specified in the <a target="_blank" href="https://github.com/hashicorp/hcl">HashiCorp Configuration Language</a>. 

It works on many major operating systems with no runtime requirements. On MacOS:

   <pre>brew install envconsul
   envconsul -v</pre>

   <pre>v0.9.2 ()</pre>

 For the full list of command-line options:

   <pre>envconsul -h</pre>

Envconsul is also available via a Docker container for scheduled environments.

Secrets are requested based on a <strong>specification of secrets</strong> to be fetched from HashiCorp Vault based on a configuration file. A sample of its contents is this, which requests the api-key field of the secret at <em>secret/production/third-party</em>:

   <ul><pre>production/third-party#api-key</pre></ul>

Credentials authorizing retrieval requests are defined ...

<hr />

<a name="WithinCode"></a>

## Within App Programming Code

Even though the "12 Factor App" advocates for app programming code to obtain secret data from <strong>environment variables</strong> (rather than hard-coding them in code stored within GitHub). 
So, populating environment variables with clear-text secrets would occur outside the app, in the run-time environment.
Seveal utilities have been created for that:

   * <a target="_blank" href="https://github.com/jamhed/govaultenv">https://github.com/jamhed/govaultenv</a> includes access to <a target="_blank" href="https://wilsonmar.github.io/kubernetes/">Kubernetes</a> (but not clouds AWS, GCP, etc.).

   <a name="Daytona"></a>
   * The Daytona Golang CLI client from Cruise (the autonomous car company) at <a target="_blank" href="https://github.com/cruise-automation/daytona">https://github.com/cruise-automation/daytona</a> is written in <strong>Golang</strong> to be a "lighter, alternative, implementation" Vault client CLI services and containers. It automates authentication, fetching of secrets, and token renewal to Kubernetes, AWS, and GCP. Daytona is performant because it pre-fetches secrets upon launch and store them either in environment variables, as JSON in a specified file, or as singular or plural secrets in a specified file.


<hr />

## Instruqt Basic Course

HashiCorp provides hands-on courses at <a target="_blank" href="https://play.instruqt.com/login">https://play.instruqt.com/login</a>.

After given 30-day access to <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/vault-basics">
the Vault Basics course</a>, its lessons are for running in <a target="_blank" href="https://www.vaultproject.io/docs/concepts/dev-server/">dev mode</a>:

NOTE: Labs timeout every 2 hours.

* The Vault CLI - Run the Vault Command Line Interface (CLI).
* Your First Secret - Run a Vault dev server and write your first secret.

   <a target="_blank" href="
   https://www.vaultproject.io/api-docs/index/">
   https://www.vaultproject.io/api-docs/index</a>

* The Vault API - Use the Vault HTTP API

   <pre><strong>curl http://localhost:8200/v1/sys/health | jq
   </strong></pre>

   Response includes "cluster" only if Vault was setup as a cluster:

   <pre>% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0{
  "initialized": true,
  "sealed": false,
  "standby": false,
  "performance_standby": false,
  "replication_performance_mode": "disabled",
  "replication_dr_mode": "disabled",
  "server_time_utc": 1591126861,
  "version": "1.2.3",
  "cluster_name": "vault-cluster-2a4c0e97",
  "cluster_id": "0b74ccb6-8cee-83b8-faa6-dc7355481e4b"
}
100   294  100   294    0     0  49000      0 --:--:-- --:--:-- --:--:-- 58800
   </pre>

   <pre><strong>curl --header "X-Vault-Token: root" http://localhost:8200/v1/secret/data/my-first-secret | jq</strong></pre>

   Response:

   <pre>  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   289  100   289    0     0  32111      0 --:--:-- --:--:-- --:--:-- 32111
{
  "request_id": "1fbb67f5-04a2-5db1-06b4-8210a6959565",
  "lease_id": "",
  "renewable": false,
  "lease_duration": 0,
  "data": {
    "data": {
      "age": "100"
    },
    "metadata": {
      "created_time": "2020-06-02T19:36:39.21280375Z",
      "deletion_time": "",
      "destroyed": false,
      "version": 1
    }
  },
  "wrap_info": null,
  "warnings": null,
  "auth": null
}
   </pre>

* Run a Production Server - Configure, run, initialize, and unseal a production mode Vault server.

<hr />

<a name="VaultInit"></a>

### Vault Initialization

   * https://www.vaultproject.io/docs/concepts/seal/
   <br /><br />

1. Production servers are configured by a <a target="_blank" href="https://www.vaultproject.io/docs/configuration/">vault-config.hcl file</a> (in folder /vault/config) read by <a target="_blank" href="https://www.vaultproject.io/docs/commands/operator/init/">server init command</a>

   <pre><strong>vault server -config=/vault/config/vault-config.hcl
   vault operator init -key-shares=1 -key-threshold=1
   </strong></pre>

   REMEMBER: Vault command parameters have a single dash, not a double-dash.

   Vault init generates (using <a target="_blank" href="https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing">Shamir algorithm</a>) 5 Unseal <tt>-key-shares</tt>, of which a <tt>-key-threshold</tt> quorum of 3 different employees are needed to <strong>Unseal</strong> the server to generate a <strong>Master encryption key</strong>, which is used to protect (encrypt) Data Encryption keys <strong>stored with data</strong> encrypted.

   Each shard can be encrypted with a different PGP key for each person with a shard.

1. Repeat <tt>vault operator unseal</tt> to input each shard key.

   The Root Token is used to initialize Vault, then thrown away.

   The server is unsealed until it's restarted or if Vault’s backend storage layer encounters an unrecoverable error.

1. Initialize the "vault" cluster the first time:

   <pre>vault operator init</pre>

1. Alternately, use <strong>Cloud Auto Unseal</strong> by retrieving a Master Key by supplying a Key ID stored in a HSM within a cloud (AWS KMS, Google Cloud KMS, Azure Key Vault, etc.). For example, in the Vault config file:

   <pre>seal "awskms" {
  region = "us-east-1"
  # access_key = "AKIA..."  # use IAM Service Role instead
  # secret_key = "..."
  kms_key_id = "abcd123-abcd123-abcd123-abcd123-abcd123"
  endpoint = "vpc endpoint"
}
   </pre>

   PROTIP: Vault configuration files are at <tt>/etc/vault.d/vault.hcl</tt>

   NOTE: The Master Key remains memory-resident in a Vault Node memory and not stored.



<a name="TransitEngine"></a>

### Encryption in Transit with VTS

   * https://www.vaultproject.io/docs/secrets/transit/
   * https://learn.hashicorp.com/tutorials/vault/eaas-transit = advantages at customer sites provides all steps.
   * Instruqt course: <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/vault-encryption-as-a-service">"Vault Encryption as a Service"</a> enabling a Python app to talk to a MySQL database.
   <br /><br />

   Secrets are encrypted outside of Vault using Vault's Transit Secrets engine "encryption as a service" (EaaS). To be secure, Vault performs cryptographic fuvtsnctions on <strong>data-in-transit</strong> and doesn't store data sent to it.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1655725359/vault-transit-flow-1730x652_t8ewp2.png"><img alt="VTS flow" width="1730" height="652" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1655725359/vault-transit-flow-1730x652_t8ewp2.png"></a>

1. Define the path, such as:

   <pre><strong>VTS_PATH="lob_a/workshop/transit"
   </strong></pre>

1. Enable (mount) the secret transit engine (a Vault plugin) to a custom path different than the default "transit" mount:

   <pre><strong>vault secrets enable -path="${VTS_PATH}" transit
   </strong></pre>

1. Create a key ring:

   <pre><strong>VTS_KEY_RING="orders"
vault write -f "${VTS_PATH}/keys/${VTS_KEY_RING}"
   </strong></pre>

1. A HA central Core Vault Cluster is referenced (leveraged by) this  <strong>Vault Transit Unseal</strong> configuration:

   <pre>seal "transit" {
  address = "https://vault:8200"
  token = "s.QsGo2dfFGqIIOCLFWFE"
  disable_renewal = "false"
  // Key configuration:
  key_name = "transit_key_name"
  mount_path = "transit/"
  namespace = "nsl/"
  // TLS Configuration:
  tls_ca_cert = "/etc/vault/ca_cert.pem"
  tls_client_cert = "/etc/vault/client_cert.pem"
  tls_client_key = "/etc/vault/ca_cert.pem"
  tls_server_name = "vault"
  tls_skip_verify = "false"
}
   </pre>

   PROTIP: Encryption uses by default AES-GCM with a 256-bit AES or other key type defined at https://www.vaultproject.io/docs/secrets/transit#key-types

1. Other configuration stanzas:

   <pre>listener "tcp" {
  address = "0.0.0.0:8200"  # all machines
  cluster_address = "0.0.0.8:8201"
  tls_disable = "true"  # only in dev (not in PROD)
  # tls_cert_key & tls_cert_file
}
// backend:
storage "consul" {
  address = "127.0.0.1:8500"  # locally
  path = "vault/"
}
// Where to publish metrics to upstream systems:
telemetry {
  ...
}
log_level = "info"
api_addr = "https://IPADDRESS:8200"
ui = true
cluster_name = "my_cluster"
   </pre>

1. After Vault is running, use the UI to configure:

   * Secrets Engine
   * Authentication Methods
   * Audit Devices
   * Policies
   * Entities & Groups


   ### VAULT_TOKEN from unseal

   Save the unseal key response and an initial root token to set the "VAULT_TOKEN" environment variable, using the initial root token that the "init" command returned:

   <pre>export VAULT_TOKEN="$root_token"</pre>

1. Unseal Vault server, providing the unseal key that the "init" command returned:

   <pre><strong>vault operator unseal</strong></pre>

   This returns the status of the server as "Initialized = true" and that "Sealed = false".

1. Check the status of the Vault server:

   <pre><strong>vault status</strong></pre>

   If the response is "Sealed = true", re-run the "vault operator unseal" command.

1. Log into the Vault UI with your root token. If you have problems, double-check that you ran all of the above commands.


* Enable and use an instance of HashiCorp's <a target="_blank" href="https://www.vaultproject.io/docs/secrets/kv/kv-v2">KV v2 Secrets engine</a> (the default when running in dev mode):
   https://www.vaultproject.io/docs/secrets/kv/kv-v2/

   <pre><strong>vault secrets enable -version=2 kv</strong></pre>

   Alternately:<br />
   <pre>vault secrets enable kv-v2</pre>

* Use the Userpass Auth Method - Enable and use the userpass authentication method.


* Use Vault Policies - Use Vault policies to grant different users access to different secrets. "Least privilege"
   correspond to HTTP verbs: 

   <pre>path "secret/dev/team-1/*" {
  capabilities = ["create", "read", "list", "update", "delete"]
}
   </pre>



<a name="Vaultenv"></a>

## Using Vaultenv with GitHub 

<a target="_blank" href="https://github.com/channable/vaultenv">
https://github.com/channable/vaultenv</a> populates values in OS environment variables 
referenced within programming code by making a syscall from the exec family. Vaultenv replaces its own process with your app. After your service has started, vaultenv does not run anymore.

Vaultenv retrieves secrets using REST API calls of KV (Key Value) pairs based on "behavior configuration files" specified in the following files traveling with the programming code:

   * $CWD/.env (as popularized by Ruby gems)
   * /etc/vaultenv.conf
   * $HOME/.config/vaultenv/vaultenv.conf
   <br /><br />

CAUTION: When secrets in Vault change, Vaultenv does not automatically restart services.
By comparison, <a target="_blank" href="https://github.com/hashicorp/envconsul">envconsul from HashiCorp</a> (also describe here), 
daemonizes and spawns child processes to manage the lifecycle of the process it provides secrets.

Within its configuration file, secrets are requested based on a <strong>specification of secrets</strong> to be fetched from HashiCorp Vault, such as this requesting the api-key field of the secret at secret/production/third-party.

   <ul><pre>production/third-party#api-key</pre></ul>

The utility is written in the Haskell language under a 3-clause BSD license and <a target="_blank" href="https://github.com/channable/vaultenv/releases">releases</a> run on Linux (has not been tested on any other platform, such as macOS).


<hr />

<a name="OptionD"></a>
<a name="InstallServer"></a>

## Install Server binaries

Precompiled Vault binaries are available at <a target="_blank" href="https://releases.hashicorp.com/vault/">https://releases.hashicorp.com/vault</a>

PROTIP: Enterprise and free versions have different binaries.
Paid Enterprise editions include Read Replicas and Replication for DR, plus MFA, Sentinel, and HSM Auto-Unseal with FIPS 140-2 & Seal Wrap.
A system service file is needed for prod instances.

PROTIP: Vault has a single program file for server and client.

There are several ways to obtain a running instance of HashiCorp Vault,
listed from easiest to most difficult:

CAUTION: If you are in a large enterprise, confer with your security team before 
installing. They often have a repository such as Artifactory or Nexus where
installers are available after being vetted and perhaps patched
for security vulnerabilities.

See https://github.com/hashicorp/vault-guides
and https://devopstales.github.io/linux/hashicorp-vault/


A. <a href="#CloudService">Vault cloud service</a>

   * Azure Vault (https://jpvelasco.com/test-driving-the-azure-key-vault-client-samples/)
   <br /><br />

B. <a href="InstallClient">Install the Vault client locally on MacOS using a license and GPG</a>.

C. <a href="#DockerHub">Pull an image from Docker Hub</a> 

D. <a href="#EntVaultInstall">Download from HashiCorp to install locally</a>.

E. <a href="#Dockerfile">Use a Dockerfile to build your own Docker image.</a> 
   if you're not using vault frequently, and want to get the latest when you do.


<hr />

<a name="CloudService"></a>

### A. Vault Cloud service

Vault is an open source tool that can be deployed to any environment.
It is well suited for cloud environments where HSMs are either not available or are cost prohibitive.

1. Create within your internal cloud, Google Cloud, Amazon EC2, Microsoft Azure, etc.
   a VM instance of an Ubuntu server. 4 GB RAM and 10 GB drive is the minimum.

   A sample command to create a Google Cloud instance:

   <pre>THIS_PROJECT_NAME="woohoo1"
   THIS_INSTANCE_NAME="wildone"
   GCP_ACCT="mememe"
   gcloud beta compute --project "${THIS_PROJECT_NAME}" instances create "${THIS_INSTANCE_NAME}" --zone "us-central1-f" --machine-type "n1-standard-1" --subnet "default" --maintenance-policy "MIGRATE" --service-account "{$GCP_ACCT}@developer.gserviceaccount.com" --scopes "https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring.write","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" --min-cpu-platform "Automatic" --tags "http","https","web","http-server","https-server" --image "ubuntu-1604-xenial-v20171026a" --image-project "ubuntu-os-cloud" --boot-disk-size "10" --boot-disk-type "pd-standard" --boot-disk-device-name "${THIS_INSTANCE_NAME}"
   </pre>


<hr />

<a name="OptionC"></a>
<a name="VaultCompose"></a>

## Docker Compose of Vault server

<pre>brew install docker
brew install docker-compose  # now a plug-in to docker
cd; mkdir -p projects/vault; cd ~/projects/vault
git clone https://github.com/ryanhartje/containers.git
cd containers/consul-vault/
docker-compose up -d
</pre>


<a name="HashiCups"></a>

## HashiCups

Here I have for you an experience of how we, as a DevOps engineer, can improve the secrets management posture of a fictitious company called "HashiCups, Inc.".


 manages secrets while moving to the cloud.  by adopting HashiCorp Vault to centralize secrets to access data in git repos, shared mounts, and spreadsheets. Following <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/vault-managing-secrets-and-moving-to-cloud">this hands-on Instruqt class</a>:

1. Start by using <tt>vault login</tt> (as root token), list secrets. Among the types of secrets is "kv" (for KeyValue), so read a path:

   <pre>vault read kv/db/postgres/product-db-creds</pre>

   https://www.vaultproject.io/docs/auth/kubernetes/

1. Migrate a shared secret (to access a database) from a shared NFS mount to Vault within Kubernetes:

   <pre>vault kv put kv/db/postgres/product-db-creds \
  username="postgres" \
  password="password"
   </pre>

   https://www.vaultproject.io/docs/platform/k8s/injector/

1. Use ACLs to restrict Access to only specific identities accessing the <tt>kv/database</tt> path. Each policy is in a different file:

   products-api has read-only:

   <pre>path "kv/db/postgres/product-db-creds" {
  capabilities = ["read"]
}
   </pre>

   dba-operator of customer Profile database:

   <pre>path "kv/db/*" {
  capabilities = ["list", "read", "create", "update"]
}
   </pre>

   Run:
   
   <pre><strong>vault policy write dba-operator policies/dba-operator-policy.hcl
   </strong></pre>

1. Enable and create static username with password:

   <pre>vault auth enable userpass
vault write auth/userpass/users/dba-dan password=dba-dan policies=dba-operator
   </pre>

   Login as that user:

   <pre>unset VAULT_TOKEN
vault login -method=userpass username=dba-dan password=dba-dan
   </pre>

1. Generate dynamic secrets to a database instead of shared passwords. 

   <pre>vault secrets enable database
vault read kv/db/postgres/product-db-creds
export PG_HOST=$(kubectl get svc -l app=postgres -o=json | jq -r '.items[0].spec.clusterIP')
export PG_USER=postgres
export PG_PASS=password
vault write database/config/hashicups-pgsql \
    plugin_name=postgresql-database-plugin \
    allowed_roles="products-api" \
    connection_url="postgresql://{{username}}:{{password}}@$PG_HOST:5432/?sslmode=disable" \
    username=$PG_USER \
    password=$PG_PASS
vault write database/roles/products-api \
    db_name=hashicups-pgsql \
    creation_statements="CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}' SUPERUSER; \
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO \"{{name}}\";" \
    default_ttl="30m" \
    max_ttl="1h"
   </pre>

1. Verify by using username and password copied from response above:

   <pre>vault read database/creds/products-api
psql -U <em>GENERATED_USERNAME</em> -h $PG_HOST products
Password for user ...
\q
   </pre>

1. Rotate root credentials:

   <pre>vault write -force database/rotate-root/hashicups-pgsql
# Confirm can't access:
psql -U postgres -h $PG_HOST
# Delete old path:
vault kv delete kv/db/postgres/product-db-creds
   </pre>

   kubectl delete deployment products-api-deployment

   kubectl get deployment

1. Modify the "products-api.yml" Kubernetes deployment file to leverage the <tt>vault-k8s</tt> agent to inject secrets. It leverages the Kubernetes Mutating Admission Webhook to intercept and augment specifically annotated pod configuration for secret injection using Init and Sidecar containers.

   That enables applications to not need to manage tokens, connect to an external API, or other mechanisms for direct interaction with Vault. App code only need to be concerned with specifying a path to find a secret.

   <pre>sed -i 's/kv\/db\/postgres\/product-db-creds/database\/creds\/products-api/g' /root/k8s/products-api.yml
kubectl apply -f k8s/products-api.yml
   </pre>


yyy

<hr />

<a name="OSSVaultInstall"></a>

#### B.a. Open Sourced Vault Install

1. Vault is open-sourced at 

   <a target="_blank" href="https://github.com/hashicorp/vault/">https://github.com/hashicorp/vault</a><br />
   with a marketing home page at<br />
   <a target="_blank" href="https://vaultproject.io/">https://vaultproject.io</a>.

2. In a Terminal...
3. See that there are several packages with the name "vault":

   <pre><strong>brew search vault</strong></pre>

   Note there are several:

   <pre>==> Formulae
==> Formulae
argocd-vault-plugin        ssh-vault                  vaulted
aws-vault                  vault ✔                    vultr
hashicorp/tap/vault ✔      vault-cli
&nbsp;
==> Casks
aws-vault                  btcpayserver-vault         gmvault
&nbsp;
If you meant "vault" specifically:
It was migrated from homebrew/cask to homebrew/core.
   </pre>

4. Verify the source:

   <pre><strong>brew info vault</strong></pre>

   At time of this writing:

   <pre>vault: stable 1.9.4 (bottled), HEAD
Secures, stores, and tightly controls access to secrets
https://vaultproject.io/
/usr/local/Cellar/vault/1.9.2 (8 files, 178.7MB) *
  Poured from bottle on 2021-12-23 at 23:17:56
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/vault.rb
License: MPL-2.0
==> Dependencies
Build: go ✘, gox ✘, node@14 ✘, yarn ✔
==> Options
--HEAD
	Install HEAD version
==> Caveats
To restart vault after an upgrade:
  brew services restart vault
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/vault/bin/vault server -dev
==> Analytics
install: 11,140 (30 days), 32,117 (90 days), 122,131 (365 days)
install-on-request: 10,818 (30 days), 31,203 (90 days), 118,906 (365 days)
build-error: 2 (30 days)
   </pre>

   Compare growth from a previous version:

   <pre>vault: stable 1.9.2 (bottled), HEAD
...
install: 9,528 (30 days), 29,343 (90 days), 116,531 (365 days)
install-on-request: 9,273 (30 days), 28,580 (90 days), 113,456 (365 days)
build-error: 6 (30 days)
   </pre>

   Notice from above that "Go" is a pre-requisite. So...

5. <a target="_blank" href="https://wilsonmar.github.io/golang">Install pre-requisite Go language</a>:

6. Install Vault client on MacOS using Homebrew:

   <pre><strong>brew install vault</strong></pre>

   <pre>vault 1.9.2 is already installed but outdated (so it will be upgraded).
==> Downloading https://ghcr.io/v2/homebrew/core/vault/manifests/1.9.4
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/vault/blobs/sha256:0e71de8e8d51
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Upgrading vault
  1.9.2 -> 1.9.4 
&nbsp;
==> Pouring vault--1.9.4.monterey.bottle.tar.gz
==> Caveats
To restart vault after an upgrade:
  brew services restart vault
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/vault/bin/vault server -dev
==> Summary
🍺  /usr/local/Cellar/vault/1.9.4: 8 files, 179.4MB
==> Running `brew cleanup vault`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
Removing: /usr/local/Cellar/vault/1.9.2... (8 files, 178.7MB)
   </pre>

   Compare historically:

   <pre>🍺  /usr/local/Cellar/vault/1.9.2: 8 files, 178.7MB
...
🍺  /usr/local/Cellar/vault/1.3.2: 6 files, 124.2MB
  Built from source on 2019-11-18 at 05:05:44
   </pre>

7. The great thing with Homebrew is you can upgrade and uninstall easily.

   <pre><strong>brew upgrade vault
   </strong></pre>

8. <a href="#VerifyClientInstall">Verify install of Vault client</a>.

<hr />

<a name="EntVaultInstall"></a>

### B.b. Vault Enterprise client install

1. HashiCorp's steps for installing Vault are at

   <a target="_blank" href="https://vaultproject.io/docs/install/">
   https://vaultproject.io/docs/install</a>.

2. Installers for a large number of operating systems are downloaded from HashiCorp's website:

   <a target="_blank" href="https://www.vaultproject.io/downloads.html">
   https://www.vaultproject.io/downloads.html</a>

   * vault_0.7.3_darwin_amd64.zip for Mac 64 expands to a vault app of 59.6 MB.
   <br /><br />

3. Verify the SHA256 hash to ensure that not a single bit was lost during download.

4. On a Mac, drag and drop the Vault.app file to your root Applications folder.

5. <a target="_blank" href="https://stackoverflow.com/questions/14637979/how-to-permanently-set-path-on-linux">Set the PATH</a> to Vault.

6. Double-click on the vault app.

   If you get an error that the binary could not be found, then your PATH environment variable was not setup properly. 

   This automated script should install vault at version 0.1.2 into folder:

   <strong>/opt/vault_0.1.2</strong>

   (the current version for you will likely be different that 0.1.2).

   The installer configures itself by default to listen on localhost port 8200, 
   and registers it as a service called vault-server.

   NOTE: Also found vault in <tt>chefdk/embedded/lib/ruby/gems/2.5.0/gems/train-1.5.6/lib/train/transports/clients/azure/vault.rb</tt>

7. To uninstall, move that folder to trash.

8. <a href="#VerifyClientInstall">Verify install of Vault client</a>.

<hr />

<a name="VerifyClientInstall"></a>

### Verify Vault client install

   <em>No matter how it was installed:</em>

1. Verify version

   <pre><strong>vault --version
   </strong></pre>

   At time of writing, the response now includes a date built:
   
   <pre>Vault v1.12.0 (558abfa75702b5dab4c98e86b802fb9aef43b0eb), built 2022-10-10T18:14:33Z
   </pre>

   Previously:

   <pre>Vault v1.11.3 (17250b25303c6418c283c95b1d5a9c9f16174fe8), built 2022-08-26T10:27:10Z
Vault v1.9.4 ('fcbe948b2542a13ee8036ad07dd8ebf8554f56cb+CHANGES')
   </pre>

1. Is that really the latest release? View details on the History of releases on GitHub:

   <pre><strong>open <a target="_blank" href="https://github.com/hashicorp/vault/releases">https://github.com/hashicorp/vault/releases</a>
   </strong></pre>

2. Persist the version of Vault (such as "v1.12.0") for use in commands by editing <strong>~/.bash_profile</strong> or <a target="_blank" href="https://github.com/wilsonmar/mac-setup/blob/main/.zshrc">.zshrc</a>:

   <pre><strong>export VAULT_VERSION="$( vault --version | awk '{print $2}' )"
   </strong></pre>

3. Verify location of the vault executable:

   <pre><strong>which vault</strong></pre>

   Result on ARM (Apple macOS):

   <pre>/opt/homebrew/bin//vault</pre>

   Result on Intel (Windows):

   <pre>/usr/local/bin/vault</pre>


   ### Run Vault in dev mode

4. <a target="_blank" href="https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-dev-server">Start Vault in Developer mode</a>

   <pre><strong>vault server -dev
   </strong></pre>

   Sample response:

   <pre>WARNING! dev mode is enabled! In this mode, Vault runs entirely in-memory
and starts unsealed with a single unseal key. The root token is already
authenticated to the CLI, so you can immediately begin using Vault.
&nbsp;
You may need to set the following environment variable:
&nbsp;
    $ export VAULT_ADDR='http://127.0.0.1:8200'
&nbsp;
The unseal key and root token are displayed below in case you want to
seal/unseal the Vault or re-authenticate.
&nbsp;
Unseal Key: qvAfCZEkFHS1dYYba8adz5wXHSQe1I9LjoHUbxCrEo4=
Root Token: s.dqqznrQAJNiLrU9mX3eT8q2p
&nbsp;
Development mode should NOT be used in production installations!
   </pre>

   REMEMBER: Like other programs run from a Terminal command, 
   the session runs until you press <strong>control+C</strong> to stop it.

   Alternately, if you want to configure the port used (instead of the default 8200):

   <pre><strong>vault server -dev -dev-listen-address=0.0.0.0:8300 \
   -dev-root-token-id=root
   </strong></pre>

   Alternately, define complex parameters in a hcl file in the current folder:

   <pre><strong>vault server -config=config-file.hcl
   </strong></pre>

   <a name="CheckSealStatus"></a>

   ### Check Vault Seal Status

   TODO: Run <tt>ps</tt>

1. Open a new Terminal session to verify whether Vault is sealed (from usage) or unsealed (default Sealed = false):

   <pre><strong>vault status
   </strong></pre>

   If the Vault service is not running, you'll see:
   <pre>Error checking seal status: Get "https://127.0.0.1:8200/v1/sys/seal-status": dial tcp 127.0.0.1:8200: connect: connection refused</pre>

   If the Vault service is unsealed, the expected response is:

   <pre>Key               Value
   ---                    -----
   Recovery Seal Type     shamir
   Initialized            true
   <strong>S
   /aled                  false</strong>
   Total Recovery Shares  5
   Threshold              3
   Version                  1.9.4+ent
   Storage Type             raft
   Cluster Name             vault-cluster-ac95e06f
   Cluster ID               30255f02-0dd4-cc7e-9bad-616790463be9
   HA Enabled               true
   HA Cluster               https://vault-server:8201
   HA Mode                  active
   Active Since             2022-06-19T16:49:41.486917632Z
   Raft Committed Index     149
   Raft Applied Index       149
   Last WAL                 21
   </pre>

   Shell scripts capture the above using:
   <pre><strong>RESPONSE=$( vault status )
   </strong></pre>

1. In a browser, open the Vault UI:

   <pre>http://127.0.0.1:8200</pre>

   TODO: Show photo of UI here.

2. In a browser, open the web page URL:

   <pre>http://127.0.0.1:8200/vault/init</pre>
   
   If the server has not been unsealed (see below), the expected response is JSON:
   <tt>errors: []</tt>

3. In a browser, check Vault seal status:

   <pre>https://127.0.0.1:8200/v1/sys/seal-status</pre>



<hr />

<a name="BasicCommands"></a>

Once you have Vault program installed:

#### Install Autocompletes

1. <a target="_blank" href="https://www.vaultproject.io/docs/commands/#autocompletion">Install auto completions</a>:

   <pre><strong>complete -C $( which vault )
   vault -autocomplete-install
   </strong></pre>

   No message is returned. Otherwise, if already installed once (on a Mac):

   <pre>Error executing CLI: 2 errors occurred:
	* already installed in /Users/wilsonmar/.bash_profile
	* already installed in /Users/wilsonmar/.zshrc
   </pre>

2. Use autocomplete by typing `vault k` 

   Auto-complete is working if you can press tab to complete:

   <pre><strong>vault kv
   </strong></pre>


   #### Basic Vault commands

1. See menu of commands by running the command without parameters:

   <pre><strong>vault
   </strong></pre>

   Response:

   <pre>Usage: vault &LT;command> [args]
&nbsp;
Common commands:
    read        Read data and retrieves secrets
    write       Write data, configuration, and secrets
    delete      Delete secrets and configuration
    list        List data or secrets
    login       Authenticate locally
    agent       Start a Vault agent
    server      Start a Vault server
    status      Print seal and HA status
    unwrap      Unwrap a wrapped secret
&nbsp;
Other commands:
    audit          Interact with audit devices
    auth           Interact with auth methods
    debug          Runs the debug command
    kv             Interact with Vault's Key-Value storage
    lease          Interact with leases
    monitor        Stream log messages from a Vault server
    namespace      Interact with namespaces
    operator       Perform operator-specific tasks
    path-help      Retrieve API help for paths
    plugin         Interact with Vault plugins and catalog
    policy         Interact with policies
    print          Prints runtime configurations
    secrets        Interact with secrets engines
    ssh            Initiate an SSH session
    token          Interact with tokens
   </pre>

   NOTE: <tt>monitor</tt> was added recently.

   Vault commands are described <a target="_blank" href="https://www.vaultproject.io/docs/commands/">here online</a>.

1. For documentation about subcommands:

   <pre><strong>vault secrets -h
   </strong></pre>

   <pre>Usage: vault secrets &LT;subcommand> [options] [args]
&nbsp;
  This command groups subcommands for interacting with Vault's secrets engines.
  Each secret engine behaves differently. Please see the documentation for
  more information.
&nbsp;
  List all enabled secrets engines:
&nbsp;
      $ vault secrets list
&nbsp;
  Enable a new secrets engine:
&nbsp;
      $ vault secrets enable database
&nbsp;
  Please see the individual subcommand help for detailed usage information.
&nbsp;
Subcommands:
    disable    Disable a secret engine
    enable     Enable a secrets engine
    list       List enabled secrets engines
    move       Move a secrets engine to a new path
    tune       Tune a secrets engine configuration
   </pre>

1. For documentation about subcommands:

   <pre><strong>vault read -h
   </strong></pre>

2. Restart your Terminal.app (and provide password):

   <pre><strong>exec $SHELL
   </strong></pre>

   
   <a name="StockYard"></a>

   ### Stockyard

4. Using K3s from Rancher.com and <a target="_blank" href="https://www.shipyardapp.com/integrations">Shipyard</a>, <a target="_blank" href="https://youtube.com/watch?v=KIAXQr17-WQ&t=5m17s">VIDEO</a>: <a target="_blank" href="https://www.linkedin.com/in/jacksonnic/">Nic Jackson</a> (HashiCorp Developer Evangelist) creates a Kubernetes cluster with Service Mesh and Consul within Docker on laptops:

   <pre><strong>curl https://shipyard.demo.gs/install.sh | bash
   </strong></pre>

   The above creates folder <tt>$HOME/.shipyard</tt> and put its binary file in <tt>/usr/local/bin</tt>, which you should have among values within your $PATH environment variable.

5. Bring up the Docker Decktop app and try again if you see:

   <pre>docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?.
See 'docker run --help'.
   </pre>

1. According to the docs at <a target="_blank" href="https://shipyard.demo.gs/">https://shipyard.demo.gs/</a>, success is the creation of:

   <tt>$HOME/.shipyard/shipyard/kubeconfig.yml</tt>

2. Alternately, to bring it up without Consul:

   <pre><strong>yard up --enable-consul false
   </strong></pre>

   BLAH: On my M1 Mac I get this, which keeps me from going further:
   
   <pre>WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
### Creating Kubernetes cluster, this process will take approximately 2 minutes
#### Create Kubernetes cluster in Docker using K3s
   </pre>

   Otherwise:

   <pre>     _______. __    __   __  .______   ____    ____  ___      .______       _______  
    /       ||  |  |  | |  | |   _  \  \   \  /   / /   \     |   _  \     |       \ 
   |   (----`|  |__|  | |  | |  |_)  |  \   \/   / /  ^  \    |  |_)  |    |  .--.  |
    \   \    |   __   | |  | |   ___/    \_    _/ /  /_\  \   |      /     |  |  |  |
.----)   |   |  |  |  | |  | |  |          |  |  /  _____  \  |  |\  \----.|  .--.  |
|_______/    |__|  |__| |__| | _|          |__| /__/     \__\ | _| `._____||_______/ 
&nbsp;
Version: 0.7.0
&nbsp;
## Creating K8s cluster in Docker and installing Consul
   </pre>

1. Tell the local kubectl to look for a Kubernetes cluster based on configurations in the file created by Shipyard:

   <pre><strong>export KUBECONFIG=$HOME/.shipyard/shipyard/kubeconfig.yml
   </strong></pre>

2. <a target="_blank" href="https://youtube.com/watch?v=KIAXQr17-WQ&t=7m29s">VIDEO</a>: Perform Kubernetes commands:

   kubectl get pods

   You should see two pods: vault-0 and vault-agent-injector.

3. When done, remove the Shipyard-created K8s cluster:

   <pre><strong>yard down</strong></pre>



   ### Enable Kubernetes Auth Method

   * https://kubernetes.io/docs/reference/access-authn-authz/rbac/#default-roles-and-role-bindings
   * https://developer.hashicorp.com/vault/tutorials/kubernetes/agent-kubernetes
   <br /><br />

4. On the Vault client, create the "vault-auth" service account to connect to the kubernetes cluster when validating JWT tokens:

   <pre><strong>kubectl create sa vault-auth</strong></pre>
   
1. On the Vault client, apply ClusterRoleBinding :

   <pre><strong>kubectl apply -f vault/lab_k8s/k8s/vault-auth-cluster-role-binding.yml
   </strong></pre>

   <pre>---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: role-tokenreview-binding
  namespace: default
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:auth-delegator
subjects:
- kind: ServiceAccount
  name: vault-auth
  namespace: default
   </pre>

1. Extract service account (sa):

   export VAULT_SA_SECRET_NAME=$(kubectl get sa vault-auth -o jsonpath="{.secrets[0]['name']}")
   echo $VAULT_SA_SECRET_NAME

1. Extract SA_JWT_TOKEN

   export SA_JWT_TOKEN=$(kubectl get secret $VAULT_SA_SECRET_NAME -o jsonpath="{.data.token}" | base64 --decode; echo)
   echo $SA_JWT_TOKEN

1. Extract SA_CA_CRT

   export SA_CA_CRT=$(kubectl get secret $VAULT_SA_SECRET_NAME -o jsonpath="{.data['ca\.crt']}" | base64 --decode; echo)
   echo $SA_CA_CRT

1. Enable the authentication method:

   vault auth enable kubernetes

2. Configure the method by writing to the config/ endpoint for the kubernetes method:

   vault write auth/kubernetes/config \
   kubernetes_host="$K8S_HOST" \
   token_reviewer_jwt="$SA_JWT_TOKEN" \
   kubernetes_ca_cert="$SA_CA_CRT"

   echo $K8S_HOST  # (such as https://10.5.0.65:6443) setup as a part of the environment.

1. List https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/

   kubectl get namespaces

   For example: ar-app and ap-app

1. List Kubernetes service accounts:

   kubectl -n finance get sa
   kubectl -n it get sa

2. setup and configure a read and list only policy and role apps:

   vault policy write finance-ar-app-read vault/lab_k8s/policy/finance/ar-app-vault-policy.hcl

   <pre>path "k8s-secret/data/finance/ar-app/*" {
    capabilities = ["read", "list"]
}
   </pre>

1. Write/configure a role to link the policy to the SA in kubernetes:
   
   vault write auth/kubernetes/role/finance-ar-app \
   bound_service_account_names=ar-app \
   bound_service_account_namespaces=finance \
   policies=finance-ar-app-read \
   ttl=24h

1. Run scipt "vault/lab_k8s/scripts/k8s-vault-it.sh"

1. Push secrets to Vault:
   
   <pre>echo "Enabling KV secret engine"
vault secrets enable -path k8s-secret kv-v2
&nbsp;
echo "Pushing secrets to vault"
vault kv put k8s-secret/it/operations/config \
    ttl='30s' \
    username='operations' \
    password='operations-suP3rsec(et!'
   </pre>

1. Enable K8s ConfigMaps to establish context:

   kubectl -n it create configmap vault-agent-configs --from-file=vault/lab_k8s/k8s/k8sconfig/
   kubectl -n finance create configmap vault-agent-configs --from-file=vault/lab_k8s/k8s/k8sconfig/


   ### ConfigMaps

2. To define the context configuration for each application components within each Namespace:

   <pre>kubectl -n "$THIS_NAMESPACE" create configmap vault-agent-configs \
   --from-file=vault/lab_k8s/k8s/k8sconfig/
   </pre>

3. Use this pod template to create context with each namespace's app entries:

   <pre>#!/bin/bash
cat > vault/lab_k8s/deployment/${NAMESPACE}/${APP}.yaml << EOL
---
apiVersion: v1
kind: Pod
metadata:
  name: vault-agent-${NAMESPACE}-${APP}
spec:
  serviceAccountName: ${APP}
  restartPolicy: Never
  hostAliases:
  - ip: $VAULT_IP
    hostnames:
    - "vault-server"
  volumes:
    - name: vault-token
      emptyDir:
        medium: Memory
    - name: config
      configMap:
        name: vault-agent-configs
        items:
          - key: ${NAMESPACE}-${APP}-agent-config.hcl
            path: vault-agent-config.hcl
    - name: ca-pemstore
      configMap:
        name: ca-pemstore
    - name: shared-data
      emptyDir: {}
  containers:
    # Generic container run in the context of vault agent
    - name: vault-agent
      image: gcr.io/is-enablement/vault-agent:latest
      volumeMounts:
        - name: vault-token
          mountPath: /home/vault
        - name: config
          mountPath: /etc/vault
        - name: shared-data
          mountPath: /etc/secrets
        - name: ca-pemstore
          mountPath: /etc/ssl/certs/vault-client.pem
          subPath: vault-client.pem
          readOnly: false
      # This assumes Vault running on local host and K8s running in Minikube using VirtualBox
      env:
        - name: VAULT_ADDR
          value: ${VAULT_ADDR}
        - name: VAULT_K8S_AUTH_MOUNT
          value: kubernetes
        - name: VAULT_K8S_AUTH_ROLE
          value: ${NAMESPACE}-${APP}
        - name: LOG_LEVEL
          value: info
        - name: VAULT_CACERT
          value: /etc/ssl/certs/vault-client.pem
      # Run the Vault agent
      command: ["/bin/vault"]
      args:
        [
          "agent",
          "-config=/etc/vault/vault-agent-config.hcl",
          "-log-level=debug",
        ]
   # Nginx container
    - name: nginx-container
      image: nginx
      ports:
        - containerPort: 80
      volumeMounts:
        - name: shared-data
          mountPath: /usr/share/nginx/html
EOL
   </pre>

1. Get into the shell:
   
   kubectl -n "${NAMESPACE}" exec -it vault-agent-finance-ar-app \
   --container nginx-container -- bash

2. Once in, see the updated password inserted in the file:
   
   cat /usr/share/nginx/html/index.html




<hr />

<a name="HealthChecks"></a>

## Health check

   Vault servers have a health check API using <strong>port 8200</strong>, which is the default port for all Vault instances.

1. <pre><strong>curl http://localhost:8200/v1/sys/health | jq</strong></pre>
   
   Example response for a dev cluster:

   <pre>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   294  100   294    0     0   113k      0 --:--:-- --:--:-- --:--:--  143k
{
  "initialized": true,
  "sealed": false,
  "standby": false,
  "performance_standby": false,
  "replication_performance_mode": "disabled",
  "replication_dr_mode": "disabled",
  "server_time_utc": 1665596227,
  "version": "1.9.2",
  "cluster_name": "vault-cluster-65afdb12",
  "cluster_id": "8a06df9e-17c3-3f30-9c5f-b3b0be95067e"
}
   </pre>

1. To convert Linux UTC Epoch server time stamp number to your local time, try this website:

   <a target="_blank" href="https://www.epochconverter.com/">https://www.epochconverter.com</a>


   ### ssh into Vault

   ssh -i vault.pem ubuntu@$vault_server_ip

1. Initialize server:

   <pre><strong>curl --silent \
   --request PUT \
   --data '{"secret_shares": 1, "secret_threshold": 1}' \
   ${VAULT_ADDR}/v1/sys/init | tee \
   >(jq -r .root_token > /home/ubuntu/vault-chef-approle-demo/root-token) \
   >(jq -r .keys[0] > /home/ubuntu/vault-chef-approle-demo/unseal-key)
   </strong></pre>
   
   ### Unseal

1. Unseal:

   vault operator unseal $(cat /home/ubuntu/vault-chef-approle-demo/unseal-key)

1. Export vault token:

   export VAULT_TOKEN=$(cat /home/ubuntu/vault-chef-approle-demo/root-token)
   echo "export VAULT_TOKEN=$(cat /home/ubuntu/vault-chef-approle-demo/root-token)" >> /home/ubuntu/.bashrc


<hr />

## AppRole Auth Method

1. Within the Vault server
2. At the /home/ubuntu directory from which Vault commands are run.
3. File <strong>app-1-secret-read.hcl</strong> gives any Vault token assigned this policy the ability to read the secret/app-1 secret from Vault's KV secrets engine:

   <pre>path "secret/app-1" {
  capabilities = ["read", "list"]
}
   </pre>

1. Register policy with Vault:

   vault policy write app-1-secret-read app-1-secret-read.hcl

   Success! Uploaded policy: app-1-secret-read

1. Enable and Configure the AppRole Auth Method

   vault auth enable -description="AppRole auth method" approle

   Success! Enabled approle auth method at: approle/

1. configure a role for the AppRole auth method:

   vault write auth/approle/role/app-1 policies="app-1-secret-read" token_ttl="10m" token_max_ttl="30m"
   
   Success! Data written to: auth/approle/role/app-1

   REMEMBER: Vault tokens obtained by the app after authenticating are initially be valid for 10 minutes but can be renewed for a total life of 30 minutes.

<hr />

<a name="Configure"></a>

## Configure Vault

   * <a target="_blank" href="https://azure.microsoft.com/en-us/resources/videos/azure-friday-hashicorp-vault-on-azure/"><u>VIDEO: HashiCorp Vault on Azure</u></a> [13:24] by Yoko Hyakuna.
   * <a target="_blank" href="https://github.com/Voronenko/hashi_vault_utils">https://github.com/Voronenko/hashi_vault_utils</a>
   provides command scripts and commentary.
   <br /><br />
   
   A sample <tt>config-file.hcl</tt> contains:

   <pre>ui = true
   disable_mlock = true
&nbsp;
   # use the file backend
   storage "file {
      path = "data"
   }
   listener "tcp" {
      address = "0.0.0.0:8200"
      tls_disable = 1
   }
   </pre>

   <a target="_blank" href="https://www.youtube.com/watch?v=LY9aSJ_2ni4">
   VIDEO: How does Vault encrypt data?</a>



<hr />


   ### Manage secrets within Vault

2. List a secret

   <pre><strong>curl --header "X-Vault-Token: root" \
   http://localhost:8200/v1/secret/data/my-first-secret | jq
   </strong></pre>


   ### Vault kv store commands

   PROTIP: <a target="_blank" href="https://www.vaultproject.io/docs/commands/index.html">https://www.vaultproject.io/docs/commands/index.html</a>

   <a target="_blank" href="https://www.youtube.com/watch?v=vd9f-gGqMV0">VIDEO: HashiCorp Vault Http API - Create and get secrets with curl</a> (aweful drawings)

   If a Vault server is operational:

1. Add a key:

   <pre><strong>vault kv put hello/api username=john
   </strong></pre>

   If Vault is not running, you'll see a response such as this:

   <pre>Error making API request.
&nbsp;
URL: GET https://vault.whatever-engine.com:8200/v1/sys/internal/ui/mounts/hello/api
Code: 503. Raw Message:
&nbsp;
&LT;html>
&LT;head>&LT;title>503 Service Temporarily Unavailable&LT;/title>&LT;/head>
&LT;body>
&LT;center>&LT;h1>503 Service Temporarily Unavailable</h1>&LT;/center>
&LT;/body>
&LT;/html>
   </pre>

1. List keys and values:

   <pre><strong>vault kv list hello
   </strong></pre>

1. Retrieve a keys and values:

   <pre><strong>vault kv get hello/api 
   </strong></pre>

1. Delete a key's metadata:

   <pre><strong>vault kv metadata delete hello/api 
   </strong></pre>

1. Delete a key:

   <pre><strong>vault kv delete hello/api 
   </strong></pre>


   ## Vault secret engine commands

   <a target="_blank" href="https://www.youtube.com/watch?v=d26iioDB2gM">VIDEO</a>:

1. Enable the AWS secrets engine:

   <pre><strong>vault secrets enable aws
   </strong></pre>

   The expected response:

   <pre>Success! Enabled the aws secrets engine at: aws/</pre>

   See https://www.vaultproject.io/docs/secrets/kv/kv-v2/

1. Enable for writing the root account within the AWS secrets engine in the CLI: 

   <pre><strong>vault write aws/config/root \
    access_key=1234567890abcdefg \
    secret_key=... \
    region=us-east-1
   </strong></pre>

1. List secrets stored:

   <pre><strong>vault secrets list
   </strong></pre>

<hr />


<a name="consul"></a>

## Consul

<a target="_blank" href="https://medium.com/criteo-labs/configure-consul-for-performance-at-scale-f6a089706377">BLOG</a>:
To use Consul as the storage backend, download and install it on each node in the cluster, along with these different stanzas:

<pre>storage "consul" {
   address = "127.0.0.1:8500"
   path = "vault/"
}
listener "tcp" {
   address = "0.0.0.0:8200"
   cluster_address = "0.0.0.:8201"
   tls_cert_file = "/etc/certs/"
   tls_cert_key = "/etc/certs/vaultkey"
}
seal "awskms" {
   region = "us-east-1"
   kms_key_id = "f3459282-439a-b233-e210-3487b77c7e2"
}
api_addr = "https://10.0.0.10:8200"
ui = true
cluster_name = "my_cluster"
log_level = "info"
</pre>


<a name="Dockerfile"></a>

### Build Docker image using Dockerfile

Create Vault within a Docker image from scratch:

https://computingforgeeks.com/install-and-configure-vault-server-linux/

0. Install Git in the Linux server:

   <pre><strong>apt-get update && apt-get install -y \
  git
   </strong></pre>

   https://www.linuxuprising.com/2021/01/apt-key-is-deprecated-how-to-add.html

0. Use Git to obtain the Dockerfile <a target="_blank" href="https://cloud.spring.io/spring-cloud-vault/reference/html/">based on</a> the <a target="_blank" href="https://github.com/spring-cloud/spring-cloud-vault">Spring Cloud Vault sample app</a>

   <pre><strong>git clone https://github.com/???/vault.git --depth=1 
   cd vault
   </strong></pre>

0. Create a docker image locally:

   <pre><strong>sudo docker build -f Dockerfile -t demo:vault . 
   </strong></pre>

   This would run Maven, and a test job.

   If you get a message: "unable to prepare context: unable to evaluate symlinks in Dockerfile path: lstat /Users/.../projects/vault/Dockerfile: no such file or directory

2. Run the Dockerfile at:

   <a target="_blank" href="
   https://raw.githubusercontent.com/???/Vault/master/Dockerfile">
   https://raw.githubusercontent.com/???/Vault/master/Dockerfile</a>

   Its contains:

   <pre>FROM ubuntu:16.04
RUN apt-get update
RUN apt-get update && apt-get install -y \
  default-jre \
  default-jdk \
  git \
  maven 
&nbsp;
RUN mvn -version
RUN git clone https://github.com/hashicorp/vault???.git --depth=1
   </pre>

   The above provides commands to install Vault within a blank Docker container.

   `Vault-jvm/examples/sample-app` is a simple sample app, 
   which is replaced with a real app in the real world.


<a name="DockerHub"></a>

### C. Use Docker image

From https://www.vaultproject.io/docs/concepts/pgp-gpg-keybase
Since Vault 0.3, Vault can be initialized using PGP keys. In this mode, Vault will generate the unseal keys and then immediately encrypt them using the given users' public PGP keys. Only the owner of the corresponding private key is then able to decrypt the value, revealing the plain-text unseal key.

First, create, acquire, or import the appropriate key(s) onto the local machine from which you are initializing Vault.

On a macOS:

1. Add Docker's public GPG key for the Trusty version:

   <pre><strong>sudo apt-get install -y xserver-xorg-lts-trusty libgl1-mesa-glx-lts-trusty</strong></pre>


On a Linux server instance's Terminal CLI:

1. Add Docker's public GPG key for the Trusty version:

   <pre>curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   </strong></pre>

   OK is the expected response.

1. View the Linux version code referenced in a later command:

   <pre><strong>lsb_release -cs
   </strong></pre>

   This returns stretch for Debinan and xenial for Ubuntu.

1. Install Docker for Ubuntu (not Debian):

   <pre><strong>sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   </strong></pre>

1. Update repository:

   <pre><strong>sudo apt-get update
   </strong></pre>

1. List policies:

   <pre><strong>apt-cache policy docker-ce
   </strong></pre>

   The response:

   <pre>docker-ce:
  Installed: (none)
  Candidate: 17.09.0~ce-0~ubuntu
  Version table:
     17.09.0~ce-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.06.2~ce-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.06.1~ce-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.06.0~ce-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.03.2~ce-0~ubuntu-xenial 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.03.1~ce-0~ubuntu-xenial 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.03.0~ce-0~ubuntu-xenial 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
   </pre>

1. Install Docker Community Edition:

   <pre><strong>sudo apt-get install -y docker-ce
   </strong></pre>

   Sample response:

   <pre>Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following additional packages will be installed:
  aufs-tools cgroupfs-mount libltdl7
Suggested packages:
  mountall
The following NEW packages will be installed:
  aufs-tools cgroupfs-mount docker-ce libltdl7
0 upgraded, 4 newly installed, 0 to remove and 17 not upgraded.
Need to get 21.2 MB of archives.
After this operation, 100 MB of additional disk space will be used.
Get:1 http://us-central1.gce.archive.ubuntu.com/ubuntu xenial/universe amd64 aufs-tools amd64 1:3.2+20130722-1.1ubuntu1 [92.9 kB]
Get:2 http://us-central1.gce.archive.ubuntu.com/ubuntu xenial/universe amd64 cgroupfs-mount all 1.2 [4,970 B]
Get:3 http://us-central1.gce.archive.ubuntu.com/ubuntu xenial/main amd64 libltdl7 amd64 2.4.6-0.1 [38.3 kB]
Get:4 https://download.docker.com/linux/ubuntu xenial/stable amd64 docker-ce amd64 17.09.0~ce-0~ubuntu [21.0 MB]
Fetched 21.2 MB in 0s (22.7 MB/s)     
Selecting previously unselected package aufs-tools.
(Reading database ... 66551 files and directories currently installed.)
Preparing to unpack .../aufs-tools_1%3a3.2+20130722-1.1ubuntu1_amd64.deb ...
Unpacking aufs-tools (1:3.2+20130722-1.1ubuntu1) ...
Selecting previously unselected package cgroupfs-mount.
Preparing to unpack .../cgroupfs-mount_1.2_all.deb ...
Unpacking cgroupfs-mount (1.2) ...
Selecting previously unselected package libltdl7:amd64.
Preparing to unpack .../libltdl7_2.4.6-0.1_amd64.deb ...
Unpacking libltdl7:amd64 (2.4.6-0.1) ...
Selecting previously unselected package docker-ce.
Preparing to unpack .../docker-ce_17.09.0~ce-0~ubuntu_amd64.deb ...
Unpacking docker-ce (17.09.0~ce-0~ubuntu) ...
Processing triggers for libc-bin (2.23-0ubuntu9) ...
Processing triggers for man-db (2.7.5-1) ...
Processing triggers for ureadahead (0.100.0-19) ...
Processing triggers for systemd (229-4ubuntu20) ...
Setting up aufs-tools (1:3.2+20130722-1.1ubuntu1) ...
Setting up cgroupfs-mount (1.2) ...
Setting up libltdl7:amd64 (2.4.6-0.1) ...
Setting up docker-ce (17.09.0~ce-0~ubuntu) ...
Processing triggers for libc-bin (2.23-0ubuntu9) ...
Processing triggers for systemd (229-4ubuntu20) ...
Processing triggers for ureadahead (0.100.0-19) ...
   </pre>   


1. List Docker container status:

   <pre><strong>sudo systemctl status docker
   </strong></pre>

   The response:

   <pre>● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: active (running) since Sat 2017-11-04 22:00:35 UTC; 1min 28s ago
     Docs: https://docs.docker.com
 Main PID: 13524 (dockerd)
   CGroup: /system.slice/docker.service
           ├─13524 /usr/bin/dockerd -H fd://
           └─13544 docker-containerd -l unix:///var/run/docker/libcontainerd/docker-containerd.sock --metrics-interval=0 --start-timeout
Nov 04 22:00:34 vault-1 dockerd[13524]: time="2017-11-04T22:00:34.552925012Z" level=warning msg="Your kernel does not support swap me
Nov 04 22:00:34 vault-1 dockerd[13524]: time="2017-11-04T22:00:34.553123462Z" level=warning msg="Your kernel does not support cgroup 
Nov 04 22:00:34 vault-1 dockerd[13524]: time="2017-11-04T22:00:34.553267498Z" level=warning msg="Your kernel does not support cgroup 
Nov 04 22:00:34 vault-1 dockerd[13524]: time="2017-11-04T22:00:34.554662024Z" level=info msg="Loading containers: start."
Nov 04 22:00:34 vault-1 dockerd[13524]: time="2017-11-04T22:00:34.973517284Z" level=info msg="Default bridge (docker0) is assigned wi
Nov 04 22:00:35 vault-1 dockerd[13524]: time="2017-11-04T22:00:35.019418706Z" level=info msg="Loading containers: done."
Nov 04 22:00:35 vault-1 dockerd[13524]: time="2017-11-04T22:00:35.029599857Z" level=info msg="Docker daemon" commit=afdb6d4 graphdriv
Nov 04 22:00:35 vault-1 dockerd[13524]: time="2017-11-04T22:00:35.029962340Z" level=info msg="Daemon has completed initialization"
Nov 04 22:00:35 vault-1 systemd[1]: Started Docker Application Container Engine.
Nov 04 22:00:35 vault-1 dockerd[13524]: time="2017-11-04T22:00:35.054191848Z" level=info msg="API listen on /var/run/docker.sock"
log files:
   </pre>

1. Verify Docker version in case you need to troubleshoot:

   <pre><strong>docker --version
   </strong></pre>

   The response at time of writing:

   <pre>Docker version 20.10.11, build dea9396
   </pre>

1. Start the Docker daemon

1. Download the Docker image maintained by HashiCorp at <a target="_blank" href="https://hub.docker.com/_/vault/">https://hub.docker.com/_/vault</a>

   <pre><strong>docker pull vault 
   </strong></pre>

   NOTE: If you see "Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?"
   start the Docker daemon, then try again.


   ### Alternate Docker images

   <a target="_blank" href="https://hub.docker.com/r/sjourdan/vault/">
   https://hub.docker.com/r/sjourdan/vault</a>
   has HashiCorp Vault on a minimal Alpine Linux box

   <a target="_blank" href="https://hub.docker.com/r/kintoandar/hashicorp-vault/">
   https://hub.docker.com/r/kintoandar/hashicorp-vault</a>
   has HashiCorp Vault on a tiny busybox

0. Set environment variables so IP addresses used for the redirect and cluster addresses in Vault's configuration is the address of the named interface inside the container (e.g. eth0):

   <pre>VAULT_REDIRECT_INTERFACE 
   VAULT_CLUSTER_INTERFACE 
   </pre>

0. Run the image using the file storage backend at path /vault/file, with a default secret lease duration of one week and a maximum of (720h/24) 30 days:

   <pre><strong>docker run --cap-add=IPC_LOCK -e 'VAULT_LOCAL_CONFIG={"backend": {"file": {"path": "/vault/file"}}, "default_lease_ttl": "168h", "max_lease_ttl": "720h"}' vault server
   </strong></pre>

   `--cap-add=IPC_LOCK:` locks memory, which prevents it from being swapped to disk (and thus exposing keys).

   See <a target="_blank" href="https://www.vaultproject.io/docs/config/index.html">https://www.vaultproject.io/docs/config/index.html</a>

   NOTE: At startup, the server reads .hcl and .json configuration files from the <tt>/vault/config</tt> folder. Information passed into VAULT_LOCAL_CONFIG is written into local.json in this directory and read as part of reading the directory for configuration files.

0. Start Consul container with web ui on default port 8500:

   <pre><strong>docker run -p 8400:8400 -p 8500:8500 -p 8600:53/udp \
    --hostname consul \
    --name consul progrium/consul \
    -server -bootstrap -ui-dir /ui
   </strong></pre>




   <a name="Journaling"></a>

   ### Journaling

   Show that secrets are not displayed when using Azure Keyvault:

   <pre><strong>sudo journalctl -u </strong></pre>


   ### Restart Vault on Linux

1. Restart Vault (provide password):

   <pre><strong>sudo systemctl restart vault
   </strong></pre>


<a name="Unsealing"></a>

### Unsealing

When a Vault server is started, it starts in a sealed state. 

No operations are possible with a Vault that is sealed.

Unsealing is the process of constructing the <strong>master key</strong> needed to read encryption key to encrypt data and decryption key used to decrypt data.

PROTIP: Decryption keys are stored with data, in a form encrypted by a master key.

[3:36] Vault splits the master key into 5 to 10 chars for that many different trusted people to see a different portion. This is so that all those same people would provide their portion when the master is needed again. CAUTION: The master key should not be stored anywhere but in memory.

Alternately, sealing can be done by auto-unseal by using a cloud key from Azure Key Vault, <a target="_blank" href="https://vaultproject.io/docs/configuration/seal/azurekeyvault.html">such as this example stanza</a>:

   <pre>seal "azurekeyvault" {
      tenant_id     = "12345678-1234-1234-1234-1234567890"
      client_id     = "12345678-1234-1234-1234-1234567890"
      client_secret = "DDOU..."
      vault_name    = "hc-vault"
      key_name      = "vault_key"
   }
   </pre>

   <pre>./vault_ unseal af29615803fc23334c3a93f8ad58353b587f50eb0399d23a6950721cbae94948
   </pre>

   The response confirms:

   <pre>Sealed: false
Key Shares: 1
Key Threshold: 1
Unseal Progress: 0
   </pre>

   <tt>Shamir</tt> refers to the Shamir secret sharing algorithm defined at: <a target="_blank" href="https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing">https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing</a>

   Higher Key Threshold values would require more key holders to perform unseal with their parts of the key. This provides an additional level of security for accessing data.


## Re-Sealing Vault server

In case of an emergency, such as:

   * If a secret stored in Vault is leaked - a new secret should be generated and replaced in Vault, with a key rotation following.

   * If vault user credentials are leaked - the user credentials should be revoked and a key rotation should be performed.

   * If vault unseal keys are leaked - a rekey should be performed.

To prevent any actions or requests to be performed against the Vault server, it should be sealed immediately.

To seal the Vault server:

   <pre><strong>vault seal
   </strong></pre>

This buys time to investigate the cause of the issue and to find an appropriate solution.

<hr />

<a name="VaultPrincipals"></a>

## Vault Principals

### Generate principal

1. Using Azure to obtain a lease:

   <pre>vault read azure/cred/reader-role</pre>

   Notice "lease_duration".

   The lease can be renewed by running the command again.

   PROTIP: This should be in a script that incorporates other revocations
   when someone leaves an organization.


<a name="RevokeLease"></a>

### Revoke a lease

To revoke a lease on Azure:

   <pre>vault lease revoke -prefix azure/creds/reader-role</pre>


<hr />

## Vault on AWS

There are several options for hosting Vault within the Amazon cloud.

<a target="_blank" href="https://aws.amazon.com/quickstart/architecture/vault/">
https://aws.amazon.com/quickstart/architecture/vault</a>
describes "A unified interface to manage and encrypt secrets on the AWS Cloud".

![hashicorp-vault-on-aws-architecture c47a3bf846dc964bb4464471a764b26f1b0d9639](https://user-images.githubusercontent.com/300046/88661137-42582980-d095-11ea-9772-c627376b2b26.png)


<hr />

<a name="OptionE"></a>
<a name="InstallEKS"></a>

### Install Vault within AWS EKS cluster

<a target="_blank" href="https://www.hashicorp.com/blog/announcing-the-vault-helm-chart/">
HashiCorp's Helm chart to setup Vault in Kubernetes</a>

https://www.vaultproject.io/docs/platform/k8s/helm

https://github.com/hashicorp/vault-helm
 

/Users/wilson_mar/Library/Python/3.7/lib/python/site-packages/ansible/modules/cloud/amazon
To the templates we would need to add monitoring/Observability, SIEM, etc.


There is a <a target="_blank" href="https://github.com/hashicorp/consul-helm">
Consul provider helm chart</a>



### Authorization

   To continue working with Vault:

0. Identify yourself by providing the initial root token
   using the auth command, such as:

   <pre>./vault_ auth 98df443c-65ee-d843-7f4b-9af8c426128a
   </pre>

   The expected successful response:

   <pre>Successfully authenticated! The policies that are associated
with this token are listed below:
&nbsp;   
root
   </pre>

   The Access Control policy named "root" policy gives "superuser" level access to everything in Vault.

   As we plan to store secrets for multiple projects, we should be able to clearly separate access to secrets that belong to different projects. And this is where policies do their job.

   Policies in Vault are formatted with HCL, a human-readable configuration format.
   It is also JSON-compatible. An example policy is shown below:

   <pre>path "secret/project/name" {
  policy = "read"
}
   </pre>


<hr />

<a name="Plugins"></a>

<a name="Jenkins"></a>

## Jenkins plug-in

<a href="https://github.com/jenkinsci/hashicorp-vault-plugin" target="_blank">
https://github.com/jenkinsci/hashicorp-vault-plugin</a>
is a Jenkins plug-in to establish a build wrapper to 
populate environment variables from secrets stored in HashiCorp's Vault.
It uses the "App Role" authentication backend which 
HashiCorp explicitly recommends for machine-to-machine authentication.

The plug-in allows use of a GitHub/GitLab personal access token
Github Access Token (https://github.com/blog/1509-personal-api-tokens)

Alternately, a Vault Token - either configured directly in Jenkins or read from an arbitrary file on the Jenkins Machine.

An example in Java is <a target="_blank" href="https://github.com/jenkinsci/hashicorp-vault-plugin/blob/master/src/main/java/com/datapipe/jenkins/vault/credentials/VaultAppRoleCredential.java">with Java</a>

??? Vault Token Credential, just that the token is read from a file on your Jenkins Machine. You can use this in combination with a script that periodically refreshes your token.

See <a target="_blank" href="https://github.com/amarruedo/hashicorp-vault-jenkins">https://github.com/amarruedo/hashicorp-vault-jenkins</a>


   ### GitHub Token

   <pre><strong>
   vault auth -method=github token=<em>GITHUB_ACCESS_TOKEN</em>
   </strong></pre>

Upon success, a Vault token will be stored at $HOME/.vault-token.

   <pre><strong>vault list secret/<em>path/to/bucket</em>
   </strong></pre>

   This uses the token at <tt>$HOME/.vault-token</tt> if it exists. 

   See http://chairnerd.seatgeek.com/practical-vault-usage/

https://www.vaultproject.io/intro/getting-started/deploy.html


<a name="SecretsCLI"></a>

## Handling secrets in CLI

0. As a demonstration, store the secret value "Pa$$word321" named "donttell":

   <pre><strong>vault write secret/donttell value=Pa$$word321 excited=yes
   </strong></pre>

   REMEMBER: <tt>secret/</tt> prefix to a secret value is necessary, and without double-quotes.

   Because commands are stored in shell history, it's preferred to use files when handling secrets.

0. Retrieve the secret just added:

   <pre><strong>vault read secrets/apps/web/username
vault read secrets/apps/portal/username
vault read secrets/common/api_key
vault read secret/donttell
   </strong></pre>

   The response, for example:

   <pre>Key                 Value
---                 -----
refresh_interval    768h0m0s
excited             yes
value               Pa$$word321
   </pre>   

0. Output a secret into a JSON file:

   <pre><strong>vault read -format=json secret/donttel
   </strong></pre>

   <pre>{
    "request_id": "68315073-6658-e3ff-2da7-67939fb91bbd",
    "lease_id": "",
    "lease_duration": 2764800,
    "renewable": false,
    "data": {
        "excited": "yes",
        "value": "Pa$$word321"
    },
    "warnings": null
}   </pre>

0. Delete a secret:

   <pre><strong>vault delete secret/donttel
   </strong></pre>

   <pre>
Success! Deleted 'secret/donttel' if it existed.
   </pre>


### Rekey 

   Vault's <strong>rekey</strong> command allows for the recreation of unseal keys as well as changing the number of key shares and key threshold. This is useful for adding or removing Vault admins.

   Vault's rotate command is used to change the encryption key used by Vault. 
   This does not require anything other than a <strong>root token</strong>. 
   Vault will continue to stay online and responsive during a rotate operation.

<a name="AppProgramming"></a>

## Store and access secrets within a program

Use libraries for:

* Python
* C#
* Java
* Node JavaScript
* <a href="#Golang">Golang</a>
<br /><br />

Several Vault clients have been written.

### Vault

https://holdmybeersecurity.com/2020/11/24/integrating-vault-secrets-into-jupyter-notebooks-for-incident-response-and-threat-hunting/


### Vault CLI Katakoda hands-on lab

<a target="_blank" href="https://medium.com/itnext/katacoda-to-killercoda-migration-guide-d21961fc0c9b">
Migrated to Killercoda</a>?
The hands-on Katakoda lab <a target="_blank" href="https://katacoda.com/courses/docker-security/vault-secrets">Store Secrets using HashiCorp Vault</a>  makes use of a <tt>vault.hcl</tt> file:

<pre>backend "consul" {
  address = "consul:8500"
  advertise_addr = "consul:8300"
  scheme = "http"
}
listener "tcp" {
  address = "0.0.0.0:8200"
  tls_disable = 1
}
disable_mlock = true
</pre>

It specifies Consul as the backend to store secrets. Consul runs in HA mode. <tt>scheme = "http"</tt> should be set to <tt>scheme = "https"</tt> (use TLS) in production.
<tt>0.0.0.0</tt> binds Vault to listen on all IP addresses.

1. The vault.hcl file is processed by:

   <pre>docker create -v /config --name config busybox; docker cp vault.hcl config:/config/;bc973810b4bb77788b37d269b669ba9559a001c5dab7da557c887f7de024d2f0</pre>

1. Launch a single Consul agent: 

   <pre>docker run -d --name consul \
     -p 8500:8500 \
     consul:v0.6.4 \
     agent -dev -client=0.0.0.0 \
     9b21b47f350931081232d4730341c1221bc086d5bb581bdf06992a334a0c51bf
   </pre>

   In production, we'd want to have a cluster of 3 or 5 agents as a single node can lead to data loss.

1. Launch a single vault-dev container: 

   <pre>docker run -d --name vault-dev \
   --link consul:consul \
   -p 8200:8200 \
   --volumes-from config \
   cgswong/vault:0.5.3 server -config=/config/vault.hcl
71f518bb3165313a1e8e8d809e44b0a251dd7c138c5f045d634bae34439d1af7
   </pre>

   PROTIP: Volumes are used to hold data.

1. Create an alias "vault" to proxy commands to vault to the Docker container.

   <pre>alias vault='docker exec -it vault-dev vault "$@"'
   export VAULT_ADDR=http://127.0.0.1:8200
   </pre>

1. Initialise the vault so keys go into file keys.txt:

   <pre>vault init -address=${VAULT_ADDR} > keys.txt
   cat keys.txt
   </pre>

<hr />

<a name="Golang"></a>

### Golang

https://github.com/Omar-Khawaja/vault-example/blob/master/main.go

   <pre>package main
&nbsp;
import (
	"fmt"
	"github.com/hashicorp/vault/api"
	"os"
)
&nbsp;
var token = os.Getenv("TOKEN")
var vault_addr = os.Getenv("VAULT_ADDR")
&nbsp;
func main() {
	config := &api.Config{
		Address: vault_addr,
	}
	client, err := api.NewClient(config)
	if err != nil {
		fmt.Println(err)
		return
	}
	client.SetToken(token)
	c := client.Logical()
	secret, err := c.Read("secret/data/foo")
	if err != nil {
		fmt.Println(err)
		return
	}
	m := secret.Data["data"].(map[string]interface{})
	fmt.Println(m["hello"])
}
   </pre>


<hr />

## CA for SSH

Vault can serve as a Root or Intermediate Certificate Authority.

## References

<a target="_blank" href="https://www.codementor.io/slavko/how-to-install-vault-hashicorp-secure-deployment-secrets-du107xlqd">
"How to Install Vault" on CodeMentor</a>

<a target="_blank" href="https://github.com/dandb/jenkins-provisioning">github.com/dandb/jenkins-provining</a>

<a target="_blank" href="https://www.youtube.com/watch?v=ZcK_80P-68Q&t=8m31s">
VIDEO by Damien Roche at Dun & Bradstreet on 30 April 2017</a>

<a target="_blank" href="https://medium.com/qubit-engineering/kubernetes-up-integrated-secrets-configuration-5a15b9f5a6c6">
Kubernetes: Up & Integrated — Secrets & Configuration</a>
by Tristan Colgate-McFarlane
![vault-qubit-895x759-56525](https://user-images.githubusercontent.com/300046/33553286-55801548-d8b5-11e7-878c-f085cc42532d.png)


<a target="_blank" href="https://www.joyent.com/blog/secrets-management-in-the-autopilotpattern">https://www.joyent.com/blog/secrets-management-in-the-autopilotpattern</a>
Vault provides encryption at rest for secrets, encrypted communication of those secrets to clients, and role-based access control and auditability for secrets. And it does so while allowing for high-availability configuration with a straightforward single-binary deployment. See the Vault documentation for details on their security and threat model.
-- See <a target="_blank" href="https://www.vaultproject.io/docs/internals/security.html">https://www.vaultproject.io/docs/internals/security.html</a>

Vault uses Shamir's Secret Sharing to control access to the "first secret" that we use as the root of all other secrets. A master key is generated automatically and broken into multiple shards. A configurable threshold of k shards is required to unseal a Vault with n shards in total.


namic Credentials and Encryption as a data service, and "Policy as Code" vs "Secrets as Code."

<a target="_blank" href="https://learning.oreilly.com/videos/getting-started-with/1018947658/">
VIDEO COURSE: Getting Started with HashiCorp Vault</a>
by <a target="_blank" href="https://www.linkedin.com/in/bryan-krausen-5ab8794/">Bryan Krausen</a> (@btkrausen)


## Database

https://play.instruqt.com/hashicorp/tracks/vault-dynamic-database-credentials

   https://www.vaultproject.io/docs/secrets/databases/

   https://www.vaultproject.io/docs/secrets/databases/mysql-maria/

1. See whether "Type" of secrets engines "database" are enabled:

   vault secrets list

1. Enable the Database secrets engine on the Vault server.

   vault secrets enable -path=lob_a/workshop/database database

   The expected response include "Success! Enabled the database secrets engine at: lob_a/workshop/database/

   Vault's Database secrets engine dynamically generates credentials (username and password) for many databases.

   Configure the database secrets engine you enabled (above) on the path lob_a/workshop/database to work with the local instance of the MySQL database. Use a specific path rather than the default "database" to illustrate that multiple instances of the database secrets engine could be configured for different lines of business that might each have multiple databases.

1. Configure the Database Secrets Engine on the Vault server.

   All secrets engines must be configured before they can be used.

   We first need to configure the database secrets engine to use the MySQL database plugin and valid connection information. We are configuring a database connection called "wsmysqldatabase" that is allowed to use two roles that we will create below.

   <pre>vault write lob_a/workshop/database/config/wsmysqldatabase \
  plugin_name=mysql-database-plugin \
  connection_url="{{username}}:{{password}}@tcp(localhost:3306)/" \
  allowed_roles="workshop-app","workshop-app-long" \
  username="hashicorp" \
  password="Password123"
   </pre>

   This will not return anything if successful.

   Note that the username and password are templated in the "connection_url" string, getting their values from the "username" and "password" fields. We do this so that reading the path "lob_a/workshop/database/config/wsmysqldatabase" will not show them.

   To test this, try running this command:

   <pre><strong>vault read lob_a/workshop/database/config/wsmysqldatabase
   </strong></pre>

   <pre>ey                                   Value
---                                   -----
allowed_roles                         [workshop-app workshop-app-long]
connection_details                    map[connection_url:{{username}}:{{password}}@tcp(localhost:3306)/ username:hashicorp]
plugin_name                           mysql-database-plugin
root_credentials_rotate_statements    []
   </pre>

   You will not see the username and password.

   We used the initial MySQL username "hashicorp" and password "Password123" above. Validate that you can login to the MySQL server with this command:

   <pre><strong>mysql -u hashicorp -pPassword123
   </strong></pre>

   You should be given a mysql> prompt.

   Logout of the MySQL server by typing \q at the mysql> prompt. This should return you to the root@vault-mysql-server:~# prompt.

   We can make the configuration of the database secrets engine even more secure by rotating the root credentials (actually just the password) that we passed into the configuration. We do this by running this command:

   <pre><strong>vault write -force lob_a/workshop/database/rotate-root/wsmysqldatabase
   </strong></pre>

   This should return "Success! Data written to: lob_a/workshop/database/rotate-root/wsmysqldatabase".

   Now, if you try to login to the MySQL server with the same command given above, it should fail and give you the message "ERROR 1045 (28000): Access denied for user 'hashicorp'@'localhost' (using password: YES)". Please verify that:

   <pre><strong>mysql -u hashicorp -pPassword123
   </strong></pre>

   Note: You should not use the actual root user of the MySQL database (despite the reference to "root credentials"); instead, create a separate user with sufficient privileges to create users and to change its own password.

   Now, you should create the first of the two roles we will be using, "workshop-app-long", which generates credentials with an initial lease of 1 hour that can be renewed for up to 24 hours.

   <pre>vault write lob_a/workshop/database/roles/workshop-app-long \
  db_name=wsmysqldatabase \
  creation_statements="CREATE USER '{{name}}'@'%' IDENTIFIED BY '{{password}}';GRANT ALL ON my_app.* TO '{{name}}'@'%';" \
  default_ttl="1h" \
  max_ttl="24h"
   </pre>

   This should return "Success! Data written to: lob_a/workshop/database/roles/workshop-app-long".

   And then create the second role, "workshop-app" which has shorter default and max leases of 3 minutes and 6 minutes. (These are intentionally set long enough so that you can use the credentials generated for the role to connect to the database but also see them expire in the next challenge.)

   <pre>vault write lob_a/workshop/database/roles/workshop-app \
  db_name=wsmysqldatabase \
  creation_statements="CREATE USER '{{name}}'@'%' IDENTIFIED BY '{{password}}';GRANT ALL ON my_app.* TO '{{name}}'@'%';" \
  default_ttl="3m" \
  max_ttl="6m"
   </pre>

   This should return "Success! Data written to: lob_a/workshop/database/roles/workshop-app".

   The database secrets engine is now configured to talk to the MySQL server and is allowed to create users with two different roles. In the next challenge, you'll generate credentials (username and password) for these roles.


* Generate and use dynamic database credentials for the MySQL database.

* Renew and revoke database credentials for the MySQL database.

https://www.vaultproject.io/docs/secrets/databases/mysql-maria/ 
https://www.vaultproject.io/docs/secrets/databases/#usage https://www.vaultproject.io/api/secret/databases/#generate-credentials



<a name="DynamicSecrets"></a>

### Dynamic Secrets

   * https://developer.hashicorp.com/vault/docs/secrets/databases
   * https://developer.hashicorp.com/vault/docs/secrets/databases/mysql-maria
   * https://developer.hashicorp.com/vault/api-docs/secret/databases#generate-credentials

   * https://play.instruqt.com/hashicorp/tracks/vault-dynamic-database-credentials
   * https://github.com/hashicorp/field-workshops-vault/tree/main/instruqt-tracks/vault-dynamic-database-credentials
   <br /><br />

The <strong>Vault Database</strong> <a href="#SecretsEngines">Secrets Engine</a> generates dynamic, time-bound credentials for many different databases (MySQL, Maria, PostgreSQL, etc.).

   * Instruqt course <a target="_blank" href="https://play.instruqt.com/hashicorp/tracks/vault-dynamic-database-credentials">"Vault Dynamic Database Credentials"</a> (by ex-HashiCorp Roger Berlind) walks you through the generation of dynamic credentials for a MySQL database that runs on the same server program as the Vault server itself.
   * <a target="_blank" href="https://www.youtube.com/watch?v=scHCqmR25BE">"HashiCorp Vault Dynamic Secrets Demo" by TeKanAid
   * https://github.com/ArunNadda/vault_kmip_setup
   <br /><br />

1. Define variables used in subsequent commands, with values such as:

   VaultDB_PATH="lob_a/workshop/database/creds/workshop-app-long"

   db_name="wsmysqldatabase"

   VAULT_ROLE1="workshop-app"<br />
   VAULT_ROLE2="workshop-app-long"

   REMEMBER: Bash does not like spaces around = 

2. Enable the Database secrets engine on the Vault server:

   <pre><strong>vault secrets enable -path=???/workshop/database database
   </strong></pre>

3. To configure the Database Secrets Engine, use a template:

   <pre><strong>vault write {{ VaultDB_PATH }} \
  plugin_name=mysql-database-plugin \
  connection_url="{{username}}:{{password}}@tcp(localhost:3306)/" \
  allowed_roles="workshop-app","workshop-app-long" \
  username="hashicorp" \
  password="Password123"
  </strong></pre>

1. Confirm:

  <pre><strong>vault read "${VaultDB_PATH}"
  </strong></pre>

1. Rotate root credentials (the password):

  <pre><strong>vault write -force "${VaultDB_PATH}"
  </strong></pre>

1. Validate that you can login to the MySQL server:

   mysql -u hashicorp -pPassword123

   vault write -force "${VaultDB_PATH}"

1. Generate and Use Dynamic Database Credentials:

1. Create a role:

   <pre><strong>vault write {{ VaultDB_PATH }} \
  db_name=wsmysqldatabase \
  creation_statements="CREATE USER '{{name}}'@'%' IDENTIFIED BY '{{password}}';GRANT ALL ON my_app.* TO '{{name}}'@'%';" \
  default_ttl="1h" \
  max_ttl="24h"
   </strong></pre>

   <pre><strong>vault write {{ VaultDB_PATH }} \
  db_name=wsmysqldatabase \
  creation_statements="CREATE USER '{{name}}'@'%' IDENTIFIED BY '{{password}}';GRANT ALL ON my_app.* TO '{{name}}'@'%';" \
  default_ttl="3m" \
  max_ttl="6m"
   </strong></pre>

1. Download the JSON:

   <pre><strong>curl --header "X-Vault-Token: root" "http://localhost:8200/v1/${VaultDB_PATH}" | jq
   </strong></pre>

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   313  100   313    0     0  28962      0 --:--:-- --:--:-- --:--:-- 31300
{
  "request_id": "ca942ad6-e8a2-c97f-b4d8-e492c9e6aa3a",
  "lease_id": "lob_a/workshop/database/creds/workshop-app-long/njLCNZvyXbMbU1cP7fVA1rKP",
  "renewable": true,
  "lease_duration": 3600,
  "data": {
    "password": "Y0R3sw0g-c8amBCr5k34",
    "username": "v-token-workshop-a-No6c9RKuXDMG6"
  },
  "wrap_info": null,
  "warnings": null,
  "auth": null
}
   </pre>

1. Output a table to capture lease_id="${LEASE_ID}, ${USERNAME}, ${PASSWORD}
:

   <pre><strong>vault read "${VaultDB_PATH}"
   </strong></pre>

   <pre>Key                Value
---                -----
lease_id           lob_a/workshop/database/creds/workshop-app-long/k4yNJ4YvLYxp3OwYedRNE7BM
lease_duration     1h
lease_renewable    true
password           -dt7pJ1NpgQ0rkEiUjgi
username           v-token-workshop-a-yYZVxgfpj9s9C
   </pre>

1. Highlight the lease_id value to craft a command to extend a lease by an increment of seconds:

   vault write sys/leases/renew lease_id="${LEASE_ID}" increment="120"

1. Checkout:

   vault write sys/leases/lookup lease_id="${LEASE_ID}"

   #### Login

1. Login the database:

   <pre><strong>mysql -u "${USERNAME}" -p
   </strong></pre>

1. Paste the password before pressing Enter.

   <tt>mysql></tt> appears when you're in the database.

1. Do something:

   <pre><strong>show databases;
   </strong></pre>

   TODO: See that credentials were automatically deleted.

1. Log out of MySQL:

   <pre><strong>\q</strong></pre>

1. Renew and Revoke Database Credentials:

   * https://www.vaultproject.io/api/system/leases/#renew-lease https://www.vaultproject.io/api/system/leases/#revoke-lease
   <br /><br />

   Using the variable value captured:

   <pre><strong>vault write sys/leases/revoke lease_id="${LEASE_ID}"</strong></pre>

1. Verify by trying to login using credentials revoked.

<hr />

### Alternative: Environment variables

https://www.youtube.com/watch?v=IolxqkL7cD8
Hiding passwords in environment variables on Windows

<pre>import os
&nbsp;
db_user = os.environ.get('DB_USER')
db_password = os.environ.get('DB_PASS')
&nbsp;
print(db_user)
print(db_password)
</pre>


### Alternative: Google Secret Manager

https://cloud.google.com/community/tutorials/secrets-manager-python

https://cloud.google.com/secret-manager/docs

### Alternative: JupyterLab Credential Store

https://towardsdatascience.com/the-jupyterlab-credential-store-9cc3a0b9356

### Alternative: python-dotenv

Vicki Boykis <a target="_blank" href="http://veekaybee.github.io/2020/02/25/secrets/">
blogged about the alternatives</a>, which includes this for Jupyter notebook coders:

<pre>%load_ext dotenv
%dotenv
import os
os.environ.get("API_TOKEN")
</pre>

"dotenv" is from python-dotenv at<br />
<a target="_blank" href="
https://github.com/theskumar/python-dotenv">
https://github.com/theskumar/python-dotenv</a>

It retrieves an .env file created to define your project's secret environment variables,
using the package's command line tool) at<br />
<a target="_blank" href="
https://github.com/theskumar/python-dotenv#command-line-interface">
https://github.com/theskumar/python-dotenv#command-line-interface</a>

That .env file name is specified in the .gitignore so it is ignored when pushing to github. But files already in GitHub remains visible.


<hr />

## Chrome/ Browser Extension

PROTIP: Here is a tool to test access to a Vault instance (locally and publicly)as well.

<a target="_blank" href="https://chrome.google.com/webstore/detail/vaultpass/kbndeonibamcpiibocdhlagccdlmefco/related?hl=en">VaultPass Chrome/Firefox Browser Extension</a> (installed <a target="_blank" href="https://github.com/mulbc/vaultPass">from GitHub</a>) explained at <a target="_blank" href="https://www.youtube.com/watch?v=bWAtYLR2298&list=PL81sUbsFNc5ZgO3FpSLKNRIIvCBvqm-JA" title="HashiTalks Mar 10, 2022 by Chris Blum">VIDEO</a>: 
<a target="_blank" href="https://www.hashicorp.com/resources/vaultpass-enabling-teams-to-share-secrets-confidentially">"Enabling Teams to Share Secrets Confidentially"</a>

(rather than using Git, which exposes all teams/users having access to all secrets and each password rotate taking up more space in history. Use of GPG is cumbersome)

<img alt="VaultPass Options" width="786" height="884" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1653481659/vaultpass-options-786x884_mkolcc.png"></a>


In <a target="_blank" href="https://www.hashicorp.com/resources/developer-first-application-security-and-devsecops">"Developer-First Application Security and DevSecOps"</a> by Kevin Alwell (@alwell-kevin at GitHub)

<hr />

<a name="Monitoring"></a>

## Monitoring/Observability

https://www.consul.io/docs/agent/options
https://www.consul.io/docs/agent/options#_log_file

Configure logging in <tt>ExecStart</tt> of the service created using the yum installation for Consul. To direct logs from consul to say /var/log/, add <tt>-log-file=</tt><em>some-path</em> at the end of:

<pre>[Unit]
Description="HashiCorp Consul - A service mesh solution"
Documentation=https://www.consul.io/
Requires=network-online.target
After=network-online.target
ConditionFileNotEmpty=/etc/consul.d/consul.hcl
&nbsp;
[Service]
User=consul
Group=consul
ExecStart=/usr/bin/consul agent -config-dir=/etc/consul.d/ -log-file=/var/log/consul/
ExecReload=/bin/kill --signal HUP $MAINPID
KillMode=process
KillSignal=SIGTERM
Restart=on-failure
LimitNOFILE=65536
&nbsp;
[Install]
WantedBy=multi-user.target
   </pre>

1. To retrieve system logs in -reverse order (the most recent first):

   <pre><strong>sudo journalctl -u consul.service -r
   </strong></pre>


<hr />

<a name="Resourced"></a>

## Learning Resources

<a target="_blank" href="https://learn.hashicorp.com/vault">https://learn.hashicorp.com/vault</a>

On <a target="_blank" href="https://www.youtube.com/channel/UC-AdvAxaagE9W2f0webyNUQ">HashiCorp's YouTube channel</a>:
   * <a target="_blank" href="https://www.youtube.com/watch?v=0GmPUeHW2Kw" title="Feb 23, 2022 by Justin Weissig">
   "Multi-region Replication with HCP Vault"</a> HCP Vault Plus
   <br /><br />

<a target="_blank" href="https://www.katacoda.com/courses/docker-production/vault-secrets">Katacode's "Store Secrets using HashiCorp Vault"</a> provides a web-based interactive bash terminal.

<a target="_blank" href="https://learn.acloud.guru/course/hashicorp-vault/overview">ACloudGuru.com's HashiCorp Vault</a> 18 hour video course by <a target="_blank" href="https://www.linkedin.com/in/ermin-kreponic-0a420715b/">Ermin Kreponic (a resident of Sarajevo)</a>.

At Oreilly.com, <a target="_blank" href="https://www.oreilly.com/videos/getting-started-with/1018947658/">
"Getting Started with HashiCorp Vault"</a> December 2019 by Bryan Krausen (of Skylines academy, HashiTimes newsletter, and BOOK: <a target="_blank" href="https://www.amazon.com/Running-HashiCorp-Vault-Production-McTeer/dp/B08LNQML27/ref=sr_1_1?keywords=running+hashicorp+vault+in+production&qid=1647712738/" title="October 24, 2020">"Running HashiCorp Vault in Production Paperback"</a> with Dan McTeer

https://www.vaultproject.io/docs/internals/security/
Security Model

https://www.youtube.com/watch?v=5-RMu9M_Anc
How to Integrate HashiCorp Vault With Jenkins
CloudBeesTV
	
https://docs.dapr.io/reference/components-reference/supported-secret-stores/hashicorp-vault/

<a target="_blank" href="https://www.youtube.com/watch?v=ae72pKpXe-s" title="Mar 16, 2022">
VIDEO: "HashiCorp Vault Tutorial for Beginners | FULL COURSE in 1 Hour | HashiCorp Vault Fundamentals"</a>
by Sam Gabrail


https://gist.github.com/davidmintz/d1e71331751e6477082c920e01668121
Vault TLS authentication, policies, and tokens with named roles

https://github.com/nicholasjackson/vault-application-secrets
https://www.youtube.com/watch?v=c3SLWu3BoQo



<a name="UseVAULT_GUI"></a>

## Use VAULT GUI

29. Perform a token lookup based on variables defined in steps above:

    <pre><strong>curl --header "X-Vault-Token: $VAULT_TOKEN" \
   --header "X-Vault-Namespace: $VAULT_NAMESPACE" \
   $VAULT_ADDR/v1/auth/token/lookup-self | jq -r ".data"
    </strong></pre>

    <a target="_blank" href="https://developer.hashicorp.com/vault/tutorials/cloud/vault-access-cluster">Sample output</a>:

    <pre>{
  "accessor": "CDeirnF8ijVMtkckQozs4hdk.J9q4g",
  "creation_time": 1658343950,
  "creation_ttl": 21600,
  "display_name": "token-hcp-root",
  "entity_id": "cebf4e89-8f68-36c1-3325-68060d0e5cf1",
  "expire_time": "2023-07-21T01:05:50.84419125Z",
  "explicit_max_ttl": 0,
  "id": "hvs.123456789abcdefGS1zvuec7XupRBChRWHvQbjOmEwzM_AxsGicKImh2cy4xT1NoR3Q5UnpSckRBZjBzNVJyc3M5UGIuY1VzZ3kQ8y0",
  "issue_time": "2022-07-20T19:05:50.84421504Z",
  "meta": null,
  "namespace_path": "admin/",
  "num_uses": 0,
  "orphan": true,
  "path": "auth/token/create/hcp-root",
  "policies": [
    "default",
    "hcp-root"
  ],
  "renewable": false,
  "role": "hcp-root",
  "ttl": 19083,
  "type": "service"
}
    </pre>

1.  Switch back to your browser.

    ### Seal the cluster

    <a target="_blank" href="https://developer.hashicorp.com/vault/tutorials/cloud/vault-introduction">NOTE</a>: 
    Auto-unseal is configured. A unique Key Management Service (KMS) key is created for each cluster.



<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More on Security #

This is one of a series on Security:

{% include security_links.html %}
