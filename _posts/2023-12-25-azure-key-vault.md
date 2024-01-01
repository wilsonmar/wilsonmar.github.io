---
layout: post
date: "2023-12-31"
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

<a name="SecretZero"></a>

## The Secret Zero Problem

Secrets may be stored safely in a central secrets management system, including Azure Key Vault, AWS Secrets Manager, HashiCorp Vault, etc.

But how does a client get authenticated? 

Different vendors have different solutions to the "Secret Zero Problem":

   
   * HashiCorp's single-use Response Wrapping splits access to the master key so that one compromised location doesn’t expose the entire network.
   * Cloud vendors (Azure Key Vault, etc.) use a hardware security module for authorization. 
   <br /><br />

However, these solutions merely move the "Secret Zero Problem" somewhere else rather than completely solving it.




<hr />

## Akeyless

   * <a target="_blank" href="https://www.linkedin.com/pulse/solving-secret-zero-problem-real-jeremy-hess/">BLOG</a> by <a target="_blank" href="https://www.linkedin.com/in/jeremyphess/">Jeremy Hess</a>
   <br /><br />
  
PROTIP: Akeyless.com solves the Secret Zero Problem by using an <strong>inherited identity</strong> derived from a <a href="#AkeylessParent">parent SaaS system</a>, together with an <strong>ephemeral token</strong> for <strong>"continuous" authentication</strong>. The solution is illustrated thus:

<a name="AkeylessFlow"></a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703911154/akeyless-flow-1734x1494_jvpej0.png"><img alt="akeyless-flow-1734x1494.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703911154/akeyless-flow-1734x1494_jvpej0.png"></a>

PROTIP: With Azure, AWS, and other clouds additional charges for data egress are charged because central vaults such as Azure Key Vault reside in a specific region. Akeyless provides a <strong>multi-cloud</strong> solution free of cross-region data egress charges.


<a name="AkeylessParent"></a>

### A. Akeyless Parent SaaS System

First, let's <br />
A) create an account on the Akeyless Parent SaaS system and B) install the Akeyless CLI program.

Apply the Administrator's email to create and activate an account on the Parent SaaS system website by following
<a target="_blank" href="https://www.youtube.com/watch?v=Gdxp6zxvpoE&list=PLhc-aRiEl_XVbq0TtqKkk3ezwI-L7tcqZ&index=2&t=63s">this video</a>.

1. Select an email to use for the <strong>Global Administrator</strong>. The first email address used to create the account is the Global Administrator, which has "god-like" power to change and delete anything, an account with too great a "blast radius" to use.

   PROTIP: Even if you're an individual developer, you will be using this for <strong>productive use</strong> on accounts that can run up a bill quickly. So create an email which you use only to setup the account and pay bills as the Global Administrator.

   PROTIP: Many enterprise environments create a <strong>service account</strong> email which is not associated with a human being, so that emails would go to multiple people. Emails to an individual would be ignored when that person is on vacation, etc.

   PROTIP: Because it's difficult to change later, mature enterprises plan out (in a spreadsheet) what account emails are used, along with what roles (with associated permissions) they have to specific <strong>locations</strong> (paths to secrets). For example, a different administrator would be responsible for secrets in the <strong>production</strong> environment than in pre-production (development, test, demo, training) environments. A different administrator is typically responsible for secrets in each soverign geographical area (US, India, Germany, etc.).

   PROTIP: My company has created examples, automation, and expert consultation to quickly establish all credentials, then train everyone. Contact me for details.

1. Store the Administrator's email address as an environment variable <tt>AKEYLESS_ADMIN_EMAIL</tt> (accessible to Bash CLI scripts) by adding to the <tt>.bash_profile</tt> or <tt>.zshrc</tt> file in your user $HOME folder the email address accessing Akeyless:

   <pre><strong>export AKEYLESS_ADMIN_EMAIL="johndoe@supercorp.com"
   </strong></pre>

   This variable will be referenced in bash shell scripts.

1. In a password safe such as 1Password, create a Login entry with the Administrator email and a password. The Chrome extension would enable you to login to the Parent SaaS system website without typing the password. Handy especially when you're doing a demo.

1. Click the "Sign Up" link at the top of the Akeyless Parent SaaS system website at

   <a target="_blank" href="https://console.akeyless.io/"><strong>https://console.akeyless.io/</strong></a>

1. Confirm the email address by clicking the link in the email sent to the Administrator's email address.

   Success is the menu appearing as shown on the right of this page:

   <a name="AkeylessMenu"></a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703893845/akeyless-menu-514x1700_x8gdvp.png"><img align="right" width="200" alt="akeyless-menu-514x1700.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703893845/akeyless-menu-514x1700_x8gdvp.png"></a>

   "Targets" are what you want to protect, such as secrets, certificates, and keys.

   "Gateways" are the Akeyless machines (with IP addresses) that access the Targets.
   
   <a name="AkeylessPricing"></a>

   Akeyless doesn't require a credit card because it is free for the first 2,000 secrets forever, accessed by up to 5 clients. 3 days of log retention is also provided free.
   
   The lock icon next to menu items highlight features requiring a paid Enterprise license, such as "Data Protection".
   See the <a target="_blank" href="https://www.akeyless.io/pricing/">Pricing page at https://www.akeyless.io/pricing</a>

   Extended log retention and Log forwarding to a SIEM (Security Information and Event Management) system are also available for an additional fee.

1. Click menu "Online Support", click the Slack log to register for their Slack channel or support@akeyless.io email.

   PROTIP: Slack is a great way to get help from the community of users and Akeyless staff.

1. Use the Global Admin to create accounts and permissions to limit what yourself and others can do. Apply <strong>"Least Privilege"</strong> principles to limit the "blast radius" when credentials end up in the hands of someone malicious. <a target="_blank" href="https://www.youtube.com/watch?v=yzH5kmIHEec&list=PLhc-aRiEl_XVbq0TtqKkk3ezwI-L7tcqZ&index=7">this video about Role-Based Access Control (with API Key Authentication)</a>



<a name="AkeylessCLI"></a>

### B. Akeyless Admin CLI

To install the Akeyless CLI for use by the Administrator on a Mac:

NOTE: I prefer to avoid the hassle of adding another folder in my <tt>.bash_profile</tt> or <tt>.zshrc</tt> file, from any folder (because Homebrew automatically figures out which folder to install the program into). 
That's the approach by following the commands documented at:

   <a target="_blank" href="https://docs.akeyless.io/docs/cli-reference">https://docs.akeyless.io/docs/cli-reference</a>

So, instead, <a target="_blank" href="https://wilsonmar.github.io/homebrew/">install and use Homebrew</a> to do the following:

1. In a Terminal session, on any folder, get information about the akeyless brew package:

   <pre><strong>brew info akeylesslabs/tap/akeyless</strong></pre>

   <pre>==> akeylesslabs/tap/akeyless: stable 1.90.0
Akeyless CLI
https://www.akeyless.io
Conflicts with:
  akeyless
Not installed
From: https://github.com/akeylesslabs/homebrew-tap/blob/HEAD/Formula/akeyless.rb
   </pre>

   Note that the <tt>akeyless</tt> program is installed from github. However,
   
1. View their GitHub repos at:

   <a target="_blank" href="https://github.com/akeylesslabs/">https://github.com/akeylesslabs/</a>

   NOTE: The Akeyless server is NOT open source and not public on GitHub.com.

1. The first release of the Akeyless CLI program was on 2019-12-19 at

   https://akeylesslabs.github.io/helm-charts

1. Install the Akeyless CLI program from the internet:

   <pre><strong>brew install akeylesslabs/tap/akeyless
   </strong></pre>

   Brew automatically recognizes whether you have an Intel or Apple Silicon chip on your Mac and installs to the appropriate folder.
   
   On an Intel (x86 AMD) chip:

   <pre><strong>cd /usr/local/bin</strong></pre>

   On an Apple Silicon (arm64 M1/M2/M3) chip:

   <pre><strong>cd /opt/homebrew/bin</strong></pre>
   
1. Confirm where the program is installed:

   <pre><strong>ls `where akeyless`</strong></pre>

   <pre>lrwxr-xr-x@ 1 johndoe  admin  38 Dec 29 21:06 /usr/local/bin/akeyless -> ../Cellar/akeyless/1.90.0/bin/akeyless
   </pre>

   <pre>0B    /usr/local/bin/akeyless</pre>

   What is downloaded is not a folder but a binary executable program.

1. Verify CLI install success by getting the version:

   <pre><strong>akeyless -v</strong></pre>

   <pre>Version: 1.90.0.dca3303</pre>

   TODO: History of releases listed at ???

1. Connect to the Akeyless SaaS host (in place of instructions to run <tt>./akeyless</tt> in the docs) to :

   <pre><strong>akeyless configure --admin-email "${AKEYLESS_ADMIN_EMAIL}"
   </strong></pre>

   <pre>Profile default successfully configured</pre>

1. View the <tt>$HOME/.akeyless</tt> folder created by the above command:

   <pre><strong>ls -al ~/.akeyless
   </strong></pre>

   According to Linux conventions, the <tt>.</tt> in front of any folder name means that it is meant to be "hidden".

   <pre>drwx------@   2 johndoe  staff    64 Dec 31 02:00 .tmp_creds
-rw-r--r--@   1 johndoe  staff     7 Dec 31 01:40 cli-latest
drwx------@   3 johndoe  staff    96 Dec 31 02:00 profiles
-rw-r--r--@   1 johndoe  staff    40 Dec 29 21:07 settings
   </pre>

   <pre><strong>cat ~/.akeyless/cli-latest</strong></pre> shows the version of the CLI program:<br />
   <pre>1.90.0</pre>

   <pre><strong>cat ~/.akeyless/profiles/default.toml</strong></pre> shows the initial profile formatted in <a target="_blank" href="https://toml.io/en/">TOML (Tom's Obvious Minimal Language)</a>:

   <pre>["default"]
  access_type = 'password'
  admin_password = '12345678901234567890123='
  admin_email = 'johndoe@supercorp.com'
  account_id = ''
   </pre>
   
   <pre><strong>cat ~/.akeyless/settings</strong></pre> contains:
   <pre>dns="vault.akeyless.io"
protocol="https"
   </pre>

   TODO: What is the <tt>.tmp_creds</tt> folder for?

1. To list all akeyless commands:

   <pre><strong>akeyless -h</strong></pre>

   Read about each command at:<br />
   <a target="_blank" href="https://docs.akeyless.io/docs/cli-reference">https://docs.akeyless.io/docs/cli-reference</a>
   
1. Verify (list in JSON):

   <pre><strong>akeyless list-items | jq .</strong></pre>

   PROTIP: A lot of JSON is returned, so filter the response or pipe output to a file for later reference.


   ### (1) Create initial token

1. Create a <strong>starter token</strong> using the Auth ID method in the Akeyless server -- by using the Akeyless Vault GUI at <a target="_blank" href="https://console.akeyless.io/items">https://console.akeyless.io/items</a> "Users & Auth Methods" menu item:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703918601/akeyless-auth-577x756_kuuag9.png"><img alt="akeyless-auth-577x756.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703918601/akeyless-auth-577x756_kuuag9.png"></a>

   Alternately, use this <a href="#AkeylessCLI">Akeyless CLI program</a> command:

   <pre><strong>akeyless create-auth-method-universal-identity --name uidAuth --ttl 60 --profile adminProfile
   </strong></pre>

   <a target="_blank" href="https://docs.akeyless.io/docs/universal-identity">Akeyless's Universal Identity (UID) authentication method</a> is used by on-prem. machines. 

   NOTE: The starter token is only used once to authenticate to the Akeyless plugin.

2. The Akeyless server sends back a SaaS ACK.

   ### C. Load & Use tokens

3. The Administrator generates a new UID token and<br />loads it into the client app.

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
