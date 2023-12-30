---
layout: post
date: "2023-12-25"
file: "azure-key-vault"
title: "Azure Key Vault"
excerpt: "Automation and every manual step to set up a production-worthy HA Key Vault in Azure cloud, then retrieve secrets using various programming languages."
tags: [cloud, azure, security]
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

Stolen credentials are the cause of two-thirds of data breaches, according to <a target="_blank" href="https://www.verizon.com/business/resources/T6d1/reports/2023-data-breach-investigations-report-dbir.pdf">PDF</a>: <a target="_blank" href="https://www.verizon.com/business/resources/reports/dbir/">Verizon's annual Data Breach Investigations Report (DBIR) = 85 pages</a> which reports trends from 2019-2023.
[<a target="_blank" href="https://www.verizon.com/business/resources/reports/dbir/2023/summary-of-findings/">Summary</a>]

This article provides an automated solution for "Secret Zero Problem".

I've combed through all the YouTube, Microsoft docs, and tutorial sites I was able to find about this, and distilled their content here.

   * <a target="_blank" href="https://learn.microsoft.com/en-us/azure/key-vault/general/overview">https://learn.microsoft.com/en-us/azure/key-vault/general/overview<br />LEARN:  About Azure Key Vault</a>
   * https://azure.microsoft.com/en-us/pricing/#product-pricing
   * <a target="_blank" href="https://azure.microsoft.com/en-us/products/key-vault">https://azure.microsoft.com/en-us/products/key-vault<br />Microsoft: About Azure Key Vault</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=FraVzTWxG5Q" title="AZ-305">VIDEO</a>
   * <a target="_blank" href="https://www.techtarget.com/searchwindowsserver/definition/Microsoft-Azure-Key-Vault">TechTarget</a>
   * https://www.youtube.com/watch?v=AA3yYg9Zq9w by Adam Marczak
   * https://www.youtube.com/watch?v=U24NPdL2T0k
   * https://www.youtube.com/watch?v=Vs3wyFk9upo
   * https://www.youtube.com/watch?v=PgujSug1ZbI
   * https://www.youtube.com/watch?v=QAY_EcevSb8 
   * https://www.youtube.com/watch?v=2qoPZcHTCCs by John Christopher
   * https://www.youtube.com/watch?v=pnOFP_oijxw by CBT Nuggets
   * https://www.youtube.com/watch?v=3IrzFrHn434 by Houssem Dellai
   * https://www.youtube.com/watch?v=QIXbyInGXd8 by Rohit Sharma
   * https://www.youtube.com/watch?v=zRut4_uGXYE by Rajesh Yadav
   * https://www.youtube.com/watch?v=xchSkmHDL0c by BeCloudGuru
   <br /><br />

## Why use a Key Vault?

To avoid losing your secrets, your program code should reference secrets within an Azure Key Vault within Microsoft's Azure cloud.

1. Don't use insecure examples in your code.
   
   Many tutorials show secrets being stored in program code. This is a terrible practice because such code leaks data and can't be shared without recompiling and redeploying.
   
   Several organizations copy off every commit into GitHub.com, and scan for secrets. 
   So even if you delete your code, you can't be sure it's not out there somewhere.

1. Your laptop could be lost or stolen.

   Better examples of code tell you to read secrets in a (clear-text .env) file away from your GitHub repository. But your laptop could be lost or stolen.

1. You can get help on managing secrets.

   Having secrets in a shared Key Vault within a cloud accessible from anywhere enable professionals such as a 24/7 DevOps team to manage your secrets using Azure's sophisticated RBAC (Role-Based Access Controls) that limit who can perform fine-grained actions on secrets and the assets they protect.

1. Generate certificates

   Key Vault can generate the TLS/SSL (Transport Layer Security/Secure Sockets Layer) certificates needed for communication using secure HTTPS protocol by websites.

1. Achieve global redundancy for HA (High Availability)

   Azure Key Vault is a "PaaS (Platform as a Service)". That means Microsoft takes full responsibility for the networks, server hardware, and patching of the operating system and Key Vault app GUI software. 

   Microsoft pays top-dollar to hire the best experts in the world to keep their cloud working and safe.
   
   Azure's competitive advantage is that it automatically makes continuous real-time backups to <strong>another "paired" Availability Zone</strong>, so can restore their servers when hardware fails. During restore processing, secrets can be read from backups but the creation of new secrets is delayed.

   Key Vault's competitive advantage against other PaaS services, such as HashiCorp Vault, AWS Secrets Manager, etc. is that the others require you to run several servers to ensure high availability. 

1. Other clouds are more expensive and cumbersome than Azure.

   Key Vault offers competitive pricing in their <strong>free for the first 10 secrets forever</strong> plan. AWS is free only for the first year.
   
   <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/key-vault/">Azure charges</a> $0.03 per Key Vault API call after the first million free every month.  
   That's for all regions of the world EXCEPT:
   * Sweden South is $0.039 per 10,000 API calls.
   * US Gov Arizona is $0.038
   * Israel Central is $0.040
   <br /><br />

   AWS charges $0.05 per 10,000 API from the get-go.

1. Fast creation of advanced algorithms processed by the HSM

   The HSM (Hardware Security Module) processes algorithms such as:
   * RSA 2048-bit keys
   * RSA 3072-bit keys
   * RSA 4096-bit keys
   * ECC (Elliptic Curve Cryptography) P-256 keys
   <br /><br />
   
   Azure Standard tier pricing is $0.03 per 10,000 API calls.<br />
   Azure Premium tier pricing is $0.15 per 10,000 API calls (3 times more).

   https://azure.microsoft.com/en-us/pricing/details/azure-dedicated-hsm/

   Access to a pool of HSMs shared by all Key Vaults in a region (for HA) is $3.20 per hour (about $2,800 per month).
   
1. Secrets can be rotated with less manual effort.

   As computers get faster and cheaper, hackers can iterate faster through possible passwords if given unfettered access to your database.
   
   In this article, you see how to set up automatic rotation of secrets on a schedule.

   Azure charges $1.00 per key rotation after the free preview period.

<br /><br />

Here are the steps:

1. <a href="#MacUtils">Install utilities on your Mac</a>
   * (XCode, brew, git, jq, VSCode, azure-cli, Python, dotnet-sdk, terraform, etc.).
2. <a href="#Infra">Define Azure infrastructure defaults</a>
   1. Track the email address to open Azure account.<br />
   2. Track the credit card to pay for an Azure subscription.<br />
   3. <a href="#SelectRegion">Select your default region (data center)</a>.
   4. <a href="#ResourceGroup">Select Resource Group</a>.
   5. <a href="#KeyVaultNaming">Craft Key Vault Name</a>.
   6. <a href="#RecoveryOptions">2.6 Select Purge Protection</a>.
   7. <a href="#KeyVaultTier">Select Key Vault Price Tier</a>.
3. Design permissions to access the Key Vault.
4. Create a Key Vault in the Azure cloud.
   1. Use Portal GUI to create a Key Vault.
   2. Use CLI to create a Key Vault.
   3. Use Terraform to create a Key Vault.
   <br /><br />
5. Secure access to the Key Vault.
   1. Create a service principal in the Azure cloud.
   2. Use CLI to create a Key Vault.
6. Create secrets in the Key Vault.
   1. Use Portal GUI to create a secret.
   2. Use CLI to create a secret.
   3. Use Terraform to create a secret.
   <br /><br />
7. Create and use Azure service principal.
8. Watch billings and set alerts.
9. Write programming to retrieve secrets from the Key Vault.
   1. Use Bash script to retrieve a secret from the Key Vault
   2. Use Python to retrieve a secret from the Key Vault
   3. Use C# app to retrieve a secret from the Key Vault
<br /><br />

<hr />

<a name="MacUtils"></a>

## 1. Install utilities on your Mac 


<a name="Infra"></a>

## 2. Define Azure account defaults
## 2.1. Track the email address to open Azure account.<br />
## 2.2. Track the credit card to pay for an Azure subscription.<br />

<a name="SelectRegion"></a>

## 2.3. Select Key Vault default region (data center).

   <a target="_blank" href="https://azure.microsoft.com/en-us/explore/global-infrastructure/geographies/">geographies</a>


<a href="#ResourceGroup"></a>

## 2.4. Select Resource Group
      
   
<a name="KeyVaultNaming"></a>

## 2.5. Craft Key Vault name.


<a name="KeyVaultTier"></a>

## 2.6. Select Key Vault Price Tier


<a name="RecoveryOptions"></a>

## 2.7 Select Purge Protection

In development, testing, demo, training, and other non-production environments, 
disable "Purge Protection" so secrets are removed immediately after delete commands.

"Soft Delete" to allow recovery of deleted secrets.

For production, you should select Purge Protection to prevent accidental deletion of secrets.


<hr />

## 3. Design permissions to access the Key Vault.

We design permissions before creating the Key Vault so we can define permissions as part of Key Vault creation Terraform.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703819101/azure-key-vault-permissions-1041x1024_gwqswy.png"><img src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703819101/azure-key-vault-permissions-1041x1024_gwqswy.png" border="0"></a>

<table border="1" cellpadding="4" cellspacing="0">
<tr><th>Key<br />permissions</th><th>Secret<br />Permissions</th><th>Certificate<br />permissions</th></tr>
<tr valign="top"><td> Import </td><td> - </td><td> Import </td></tr>
<tr valign="top"><td> Create </td><td> Set </td><td> Create </td></tr>

<tr valign="top"><td> List </td><td> List </td><td> List </td></tr>
<tr valign="top"><td> Get </td><td> Get </td><td> Get </td></tr>
<tr valign="top"><td> Update </td><td> - </td><td> Update </td></tr>

<tr valign="top"><td> Backup </td><td> Backup </td><td> Backup </td></tr>
<tr valign="top"><td> Delete </td><td> Delete </td><td> Delete </td></tr>
<tr valign="top"><td> Recover </td><td> Recover </td><td> Recover </td></tr>
<tr valign="top"><td> Restore </td><td> Restore </td><td> Restore </td></tr>

</table>

Key Vault's built-in Role Assignments include ones similar to others:
   * Key Vault Administrator performs all data plane operations but cannot manage access to Key Vault
   * Key Vault Contributor has no access to secrets
   * Key Vault Reader can only read metadata but not secret values

   * Key Vault Secrets User can read secret contents from Key Vaults using RBAC.
   * Key Vault Secrets Officer
   <br /><br />

Unique to Key Vault certificate management are these roles:
   * Key Vault Certificates Officer
   * Key Vault Crypto Officer
   * Key Vault Crypto Service Encryption User
   * Key Vault Crypto User
   <br /><br />


https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/key_vault


## 4. Create a Key Vault in the Azure cloud.
## 4.1. Use Portal GUI to create a Key Vault.
## 4.2. Use CLI to create a Key Vault.
## 4.3. Use Terraform to create a Key Vault.
## 5. Secure access to the Key Vault.

WARNING: <a target="_blank" href="https://www.youtube.com/watch?v=Vs3wyFk9upo&t=t5m22s">VIDEO</a>:
In the Key Vault Samples screen, DO NOT use the code in "View sample code" because that code is insecure, usable only within Azure, and not suitable for production use.
That code does not follow best practices for security, "assume breach" Zero Trust principles by using a service principal with full access to the Key Vault.

## 6. Create secrets in the Key Vault.
## 6.1. Use Portal GUI to create a secret.
## 6.2. Use CLI to create a secret.
## 6.3. Use Terraform to create a secret.
## 7. Create and use Azure service principal.

https://www.youtube.com/watch?v=PkLrKDW9gY8

## 8. Watch billings and set alerts.

Azure Key Vault can be integrated with other Azure services to provide secure and seamless access to cryptographic keys and secrets for cloud applications and services.
   * Azure Virtual Machines, 
   * Azure Functions, and 
   * Azure DevOps
   <br /><br />

## Key rotation

https://www.youtube.com/watch?v=EA_Bc805k4k

## 9. Write programming to retrieve secrets from the Key Vault.

The program code shown is intended to be part of a web app, mobile app, or other app that needs to access secrets.

## 9.1. Use Bash script to retrieve a secret from the Key Vault


## 9.2. Use Python to retrieve a secret from the Key Vault

https://www.youtube.com/watch?v=FI44MhwklSc

https://www.youtube.com/watch?v=ZNLQKmINuZc

https://www.youtube.com/watch?v=YAg6khewJiU&t=529s


## 9.3. Use C# app to retrieve a secret from the Key Vault

https://www.youtube.com/watch?v=6l_kpygO0Ic

https://www.youtube.com/watch?v=RTq72C10x88

https://www.youtube.com/watch?v=kirQP5I7Iec

## 9.4. PHP (Wordpress)

https://www.youtube.com/watch?v=ECjKr_q6g6E

## 9.4. Use Azure Functions to retrieve a secret from the Key Vault

https://www.youtube.com/watch?v=Hlcnr3RVPHY&t=20s

https://www.youtube.com/watch?v=p0zgKoxpu24

<hr />

## View my GitHub repo

https://www.techtarget.com/searchcloudcomputing/tip/Protect-data-with-these-Azure-Key-Vault-best-practices


## Certifications AZ-500

https://www.youtube.com/watch?v=kP7KpfToMkg&t=349s

https://www.youtube.com/watch?v=HN3tUbEjgb4
06. Azure using Python SDK : Azure Blob Trigger Function in Action
by TechyTacos


<hr />

## Secret Zero Problem

Secrets may be stored safely in a central secrets management system, including Azure Key Vault, AWS Secrets Manager, HashiCorp Vault, etc.

But how does a client get authenticated? 

That the "Secret Zero Problem" faced by all 

Different vendors have different solutions:
   
   * HashiCorp's single-use Response Wrapping splits access to the master key so that one compromised location doesn’t expose the entire network.
   * Cloud vendors (Azure Key Vault, etc.) use a hardware security module for authorization. 
   <br /><br />

However, these solutions merely move the "Secret Zero Problem" somewhere else rather than completely solving it.

https://www.linkedin.com/pulse/solving-secret-zero-problem-real-jeremy-hess/
https://www.linkedin.com/in/jeremyphess/



PROTIP: Additional charges for data egress are charged because central vaults such as Azure Key Vault reside in a specific region.


## Akeyless

Akeyless provides a <strong>multi-cloud</strong> solution free of cross-region data egress charges.

First, let's 
A) create an account on the Akeyless Parent SaaS system and B) install the Akeyless CLI program.


<a name="AkeylessParent"></a>

### Akeyless Parent SaaS System

A. Apply the Administrator's email to create and activate an account on the Parent SaaS system website by following
<a target="_blank" href="https://www.youtube.com/watch?v=Gdxp6zxvpoE&list=PLhc-aRiEl_XVbq0TtqKkk3ezwI-L7tcqZ&index=2&t=63s">this video</a>.

<a target="_blank" href="https://www.akeyless.io/pricing/">Pricing</a> is free for the first 2,000 secrets forever, with 3 days of log retention, accessed by up to 5 clients. Extended log retention and Log forwarding requires a paid Enterprise license.


<a name="AkeylessMenu"></a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703893845/akeyless-menu-514x1700_x8gdvp.png"><img align="right" width="200" alt="akeyless-menu-514x1700.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703893845/akeyless-menu-514x1700_x8gdvp.png"></a>
The menu should appear as shown on the right.


<a name="AkeylessCLI"></a>

### Akeyless Admin CLI

B. To install the Akeyless CLI for use by the Administrator on a Mac:

   <ul>
   <pre><strong>brew install akeylesslabs/tap/akeyless
   </strong></pre>

   Verify the CLI install by getting the version:

   <pre><strong>akeyless -v</strong></pre>

   <pre>Version: 1.90.0.dca3303</pre>
   </ul>


C. Invoke the CLI program to configure a <tt>.akeyless</tt> folder, which contains a <tt>profiles</tt> folder holding a <a target="_blank" href="https://toml.io/en/">TOML (Tom's Obvious Minimal Language)</a> file for each profile.
   
1. Invoke the CLI program to create a profile:

   <pre><strong>akeyless
   </strong></pre>

   <pre>AKEYLESS-CLI, first use detected
   For more info please visit: https://docs.akeyless.io/docs/cli
   Enter Akeyless URL (Default: vault.akeyless.io) _</pre>

   See https://docs.akeyless.io/docs/cli-reference

1. Press Enter to accept the default URL.

   <pre>Would you like to configure a profile? (Y/n) _</pre>

1. Press <strong>n</strong> 



1. Select authentication method: <a target="_blank" href="https://www.youtube.com/watch?v=BnjWESAziqY&list=PLhc-aRiEl_XVbq0TtqKkk3ezwI-L7tcqZ&index=6&pp=iAQB">VIDEO</a>:

   <a target="_blank" href="https://docs.akeyless.io/docs/api-key">1) access_key (API Key)</a><br />
   <a target="_blank" href="https://docs.akeyless.io/docs/aws-iam">2) aws_iam</a><br />
   <a target="_blank" href="https://docs.akeyless.io/docs/azure-id">3) azure_ad</a><br />
   <a target="_blank" href="https://docs.akeyless.io/docs/saml">4) saml</a><br />
   <a target="_blank" href="https://docs.akeyless.io/docs/ldap">5) ldap</a><br />
   <a target="_blank" href="https://docs.akeyless.io/docs/api-key">6) email/password</a><br />
   <a target="_blank" href="https://docs.akeyless.io/docs/openid">7) oidc</a><br />
   <a target="_blank" href="https://docs.akeyless.io/docs/kubernetes-auth">8) k8s (Kubernetes)</a><br />
   <a target="_blank" href="https://docs.akeyless.io/docs/gcp-auth-method">9) gcp</a><br />

   https://docs.akeyless.io/docs/access-and-authentication-methods

D. Create a profile for the Administrator on the Parent SaaS system website:

1. Run:

   <pre><strong>akeyless create-profile --name adminProfile \
   --access-key-id &lt;access-key-id&gt; \
   --secret-access-key &lt;secret-access-key&gt;\
   --akeyless-url &lt;akeyless-url&gt;
   </strong></pre>

   <pre>Profile adminProfile created successfully</pre>

1. Verify (list in JSON):

   <pre><strong>akeyless list-items</strong></pre>


### How AKeyless works

PROTIP: Akeyless.com solves the Secret Zero Problem by using an <strong>inherited identity</strong> derived from a <a href="#AkeylessParent">parent SaaS system</a>, together with an <strong>ephemeral token</strong> for <strong>"continuous" authentication</strong>. The solution is illustrated thus:

<a name="AkeylessFlow"></a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703911154/akeyless-flow-1734x1494_jvpej0.png"><img alt="akeyless-flow-1734x1494.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703911154/akeyless-flow-1734x1494_jvpej0.png"></a>

1. A human Administrator creates a <strong>starter token</strong> using the Auth ID method in the Akeyless server -- by using the Akeyless Vault GUI at <a target="_blank" href="https://console.akeyless.io/items">https://console.akeyless.io/items</a> "Users & Auth Methods" menu item:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703918601/akeyless-auth-577x756_kuuag9.png"><img alt="akeyless-auth-577x756.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703918601/akeyless-auth-577x756_kuuag9.png"></a>

   Alternately, use this <a href="#AkeylessCLI">Akeyless CLI program</a> command:

   <pre><strong>akeyless create-auth-method-universal-identity --name uidAuth --ttl 60 --profile adminProfile
   </strong></pre>

   <a target="_blank" href="https://docs.akeyless.io/docs/universal-identity">Akeyless's Universal Identity (UID) authentication method</a> is used by on-prem. machines. 

   NOTE: The starter token is only used once to authenticate to the Akeyless plugin.

2. The Akeyless server sends back a SaaS ACK.
3. The Administrator generates a new UID token and loads it into the client app.

4. The client runs Akeyless using the initial UID token.

   https://docs.akeyless.io/docs/cli-reference

5. The Akeyless server responds with a new JWT UID token.

6. The client runs app commands using the new JWT UID token.
7. After the processing window passes, the client requests a rotation using the token.

   NOTE: Rotation of secrets requires an <a target="_blank" href="https://www.akeyless.io/pricing/">enterprise license</a>.

   The client can request a new token at any time within the processing window. <a target="_blank" href="https://www.youtube.com/watch?v=wFMNU4pvj78&list=PLhc-aRiEl_XVbq0TtqKkk3ezwI-L7tcqZ&index=3&pp=iAQB">VIDEO</a>:

   <pre><strong>akeyless create-secret --name <em>MySecret1</em> --value <em>MySecretPassword</em>
   </strong></pre>

   The default processing window is 60 seconds. 
   
8. The Akeyless server returns a new key with u-token.
9. The client runs app commands using the updated JWT UID token.
<br /><br />

Machines installed with Akeyless identify other machines in the network to ensure the data received is authentic. 
Akeyless uses its own plugin to allow the Vault and environment to interact in a secure fashion. 
Akeyless offers their "Universal Secrets Connector".
Akeyless removes the need for secret zero entirely through their  packaged within their "Vaultless Platform".

The process begins with a starter token created by a human employee that’s used once to authenticate the plugin. From there, Akeyless issues its own tokens and begins authenticating applications. That token is replaced by a new one in the next use for a specified amount of time.

Whenever a new entity is registered under this system, it inherits the identity and token of the original entity. This constant cycle of temporary, rotating identity tokens is a secure alternative to using a single secret zero.


   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703896224/akeyless-new-648x1144_cmfkbd.png"><img alt="akeyless-new-648x1144.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703896224/akeyless-new-648x1144_cmfkbd.png"></a>



## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
