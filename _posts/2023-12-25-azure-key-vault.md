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

I've combed through all the YouTube, Microsoft docs, and tutorial sites I was able to find about this, and distilled their content here.

   * <a target="_blank" href="https://learn.microsoft.com/en-us/azure/key-vault/general/overview">https://learn.microsoft.com/en-us/azure/key-vault/general/overview<br />LEARN:  About Azure Key Vault</a>
   * https://azure.microsoft.com/en-us/pricing/#product-pricing
   * <a target="_blank" href="https://azure.microsoft.com/en-us/products/key-vault">https://azure.microsoft.com/en-us/products/key-vault<br />Microsoft: About Azure Key Vault</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=FraVzTWxG5Q" title="AZ-305">VIDEO</a>
   * <a target="_blank" href="https://www.techtarget.com/searchwindowsserver/definition/Microsoft-Azure-Key-Vault">TechTarget</a>
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
   3. Use C# to retrieve a secret from the Key Vault
<br /><br />

<hr />

<a name="MacUtils"></a>

## 1. Install utilities on your Mac 


<a name="Infra"></a>

## 2. Define Azure account defaults
## 2.1. Track the email address to open Azure account.<br />
## 2.2. Track the credit card to pay for an Azure subscription.<br />

<a name="SelectRegion"></a>

## 2.3. Select your default region (data center).

   <a target="_blank" href="https://azure.microsoft.com/en-us/explore/global-infrastructure/geographies/">geographies</a>

## 3. Design permissions to access the Key Vault.

We consider permissions before creating the Key Vault because we can define permissions as part of Key Vault creation Terraform.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703819101/azure-key-vault-permissions-1041x1024_gwqswy.png"><img src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703819101/azure-key-vault-permissions-1041x1024_gwqswy.png" border="0"></a>

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
## 5. Set firewall rules to allow access to the Key Vault.
## 6. Create secrets in the Key Vault.
## 6.1. Use Portal GUI to create a secret.
## 6.2. Use CLI to create a secret.
## 6.3. Use Terraform to create a secret.
## 7. Create and use Azure service principal.
## 8. Watch billings and set alerts.

Azure Key Vault can be integrated with other Azure services to provide secure and seamless access to cryptographic keys and secrets for cloud applications and services.
   * Azure Virtual Machines, 
   * Azure Functions, and 
   * Azure DevOps
   <br /><br />

## 9. Write programming to retrieve secrets from the Key Vault.
## 9.1. Use Bash script to retrieve a secret from the Key Vault
## 9.2. Use Python to retrieve a secret from the Key Vault
## 9.3. Use C# to retrieve a secret from the Key Vault

<hr />

## View my GitHub repo

https://www.techtarget.com/searchcloudcomputing/tip/Protect-data-with-these-Azure-Key-Vault-best-practices

## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
