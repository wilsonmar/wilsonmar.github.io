---
layout: post
date: "2023-12-25"
file: "azure-key-vault"
title: "Azure Key Vault"
excerpt: "Every step to set up a Key Vault in Azure cloud, then retrieve secrets securely using various programming languages."
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

This article shows how to create a Key Vault in Azure cloud, then retrieve secrets securely using various programming languages.

I've combed through YouTube, Microsoft docs, and tutorial sites about this, and distilled learning here.

## Why use a Key Vault?

Here is why your program code should reference secrets within an Azure Key Vault within Microsoft's Azure cloud.

1. No hard-coded secrets in your code.
   
   Many tutorials show secrets being stored in program code. This is a terrible practice because such code can't be shared without recompiling and redeploying.
   
   Several organizations copy off every commit to GitHub, and scan for secrets. 
   So even if you delete your code, you can't be sure it's not out there somewhere.

1. Your laptop could be lost or stolen.

   Better examples of code tell you to read secrets in a (clear-text .env) file away from your GitHub repository. But your laptop could be lost or stolen.

1. Other clouds (AWS) are more expensive and cumbersome.

   Azure provides free storage of 10 secrets.
   
   Azure provides a free tier of 1 million transactions per month for Key Vault.
   
   Azure automatically makes real-time backup and restores their servers if their hardware fails. During restore processing, secrets can be read from backups but creation of new secrets is delayed.

   There are other services like Key Vault, such as HashiCorp Vault and AWS Secrets Manager.
   But they require you to run several servers to ensure high availability.
   AWS charges $0.40 per secret per month, and $0.05 per 10,000 API calls.
   
1. Secrets can be rotated with less manual effort.

   As computers get faster and cheaper, hackers can iterate through possible passwords.
   
   Here you see how to automatically periodically detect when secrets need to be rotated, and do it automatically.


<br /><br />

Here are the steps:

1. <a href="#MacUtils">Install utilities on your Mac</a>
   * (XCode, brew, git, jq, azure-cli, Python, dotnet-sdk, terraform, etc.).
2. <a href="#Infra">Define Azure infrastructure defaults</a>
   1. Use an email address to open Azure account.
   1. Use a credit card to pay for a subscription.
   1. Select your default region (data center).
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
## 3. Design permissions to access the Key Vault.

We consider permissions before creating the Key Vault because we can define permissions as part of Key Vault creation Terraform.

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
## 9. Write programming to retrieve secrets from the Key Vault.
## 9.1. Use Bash script to retrieve a secret from the Key Vault
## 9.2. Use Python to retrieve a secret from the Key Vault
## 9.3. Use C# to retrieve a secret from the Key Vault

<hr />

## View my GitHub repo


## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
