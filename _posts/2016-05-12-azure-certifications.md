---
layout: post
title: "Azure (cloud) certifications"
excerpt: "No more ASM and MCSD"
tags: [cloud]
date: "2021-02-22"
file: "azure-certifications"
image:
# azure ms logo wait 1900x500-39kb.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/18188069/153fbcca-706c-11e6-983d-0783da57f75c.jpg
  credit: Microsoft Azure
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


Microsoft rebranded certification coding of "70-x" series to role-based Azure "AZ-x" series.
Microsoft continues to <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/retired-certification-exams">retire a long list of exams at a brisk rate</a>:

   * 70-532 - Developing Microsoft Azure Solutions
   * 70-533 - Implementing Microsoft Azure Infrastructure Solutions
   * 70-534 - Architecting Azure Solutions
   * 70-535 - Architecting Microsoft Azure Solutions (ARM templates)
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/70-537">70-538 - Configuring and Operating a Hybrid Cloud with Microsoft Azure Stack</a> replaced by AZ-600 Stack Hub Operator Associate.
   <br /><br />

NOTE: Groupings of Microsoft's certifications by roles below, people still take exams based on product:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Role </th><th> Certification exam </th></tr>

<tr valign="top"><td> * Administrator
      </td><td><a href="#AZ-900">AZ-900 Fundamentals</a><br />
      <a href="#AZ-104">AZ-104 Azure Administrator Associate</a>

   </td></tr>
<tr valign="top"><td> * Functional Consultant
      </td><td> AZ-140 Virtual Desktop Specialty

   </td></tr>
<tr valign="top"><td> * Solution Architect
      </td><td> AZ-303 Azure Solutions Architect Expert: Technologies<br />
        AZ-304 Azure Solutions Architect Expert: Design<br />
   AZ-600 Stack Hub Operator Associate<br />
        AZ-120 Azure for SAP Workloads Specialty

   </td></tr>
<tr valign="top"><td> * Developer
   </td><td> AZ-204 Azure Developer Associate<br />
       AZ-220 Azure IoT Developer Specialty

   </td></tr>
<tr valign="top"><td> * Data Engineer
* Data Scientist
   </td><td> DP-900 Azure Data Fundamentals<br />
DP-100 Azure Data Scientist Associate<br />
   DP-200, DP-201 Azure Data Engineer Associate<br />
   DP-300 Azure Database Administrator Associate<br />
   PL-600 Power Platform Solution Architect Expert

   </td></tr>
<tr valign="top"><td> * AI Engineer
   </td><td> AI-900 AI Fundamentals<br />
    AI-100 Azure AI Engineer Associate

   </td></tr>
<tr valign="top"><td> * Security Engineer
   </td><td> SC-900 Security, Compliance, and Identity Fundamentals<br />
    SC-200 Security Operations Analyst Associate<br />
    SC-300 Identity and Access Administrator Associate<br />
    AZ-500 Azure Security Engineer Associate

   </td></tr>
<tr valign="top"><td> * DevOps Engineer
   </td><td> AZ-400 DevOps Engineer Expert
   </td></tr>

</table>

Azure administrators are people who:
   * Implement
   * Monitor
   * Maintain

...services relating to:
   * Compute resources
   * Storage
   * Networking
   * Security
   <br /><br />

Unless noted, exams as still $165 conducted by Pearson VUE, but not in testing centers thanks to COVID.

https://azure.microsoft.com/en-us/learn/skills/

https://docs.microsoft.com/en-us/azure/architecture/example-scenario/apps/ecommerce-scenario
with pricing
https://cloudacademy.com/course/overview-of-azure-services/designing-solution/?context_id=524&context_resource=lp
Benefit with on-prem. licenses.


<a name="AzureCert"></a>

## Azure Certifications #

* <a target="_blank" href="https://www.microsoft.com/en-us/learning/mcsd-azure-architect-certification.aspx">
   MCSD Solutions Developer: Azure Solutions Architect</a>

* <a target="_blank" href="https://azure.microsoft.com/en-us/community/training/">
   community training</a>

* <a target="_blank" href="https://azure.microsoft.com/en-us/marketplace/programs/certified/">
   certification for apps</a>

* <a target="_blank" href="https://mva.microsoft.com/product-training/microsoft-azure#!lang=1033">
   Microsoft Virtual Academy courses</a>

* <a target="_blank" href="https://www.opsgility.com/">
   Opsgility.com</a> provides hands-on, deep-dive training

* https://borntolearn.mslearn.net/goodstuff/p/microsoftspecialist

* https://buildazure.com/certifications/

## Tech Support

Microsoft Developer Network Forums

https://azure.microsoft.com/en-us/services/preview

Microsoft's support levels:
* Basic
* Developer - 8 hours
* Standard - 1 hour response time
* Professional Direct - 1 hour, Training, ProDirect Delivery Manager
* Premier - 15 minute response, TAM
<br /><br />

<a name="#AZ-900"></a>

## AZ-900 Azure Fundamentals

AZ-900 Microsoft Azure Fundamentals
is not required for any associate or expert certifications: availability, fault tolerance,
public/private/hybrid cloud, IaaS, PaaS, SaaS

It's less expensive than other AZ exams ($65 vs. $165)

But it's worth considering if you are new to Microsoft exams.

Passing AZ 900 demonstrates broad understanding of cloud concepts

https://cloudacademy.com/learning-paths/az-900-exam-preparation-microsoft-azure-fundamentals-524/

https://www.youtube.com/watch?v=53LO_rJz6Es&list=PLHh_n2lgzcrvecPJ-zMukLlDrq0GMSMmB
  Ravikirans answers Whizlabs 55 questions on Dec 7, 2020

https://www.youtube.com/watch?v=cAgN6Ac8MS4&list=PLHh_n2lgzcrvecPJ-zMukLlDrq0GMSMmB&index=2

https://azure.microsoft.com/en-us/support/legal/sla/

https://ServiceTrust.microsoft.com

https://github.com/cloudacademy/azure-overview


<a name="AZ-104"></a>

## AZ-104 Azure Administrator Associate

https://docs.microsoft.com/en-us/learn/certifications/exams/az-104

Implement, monitor, and maintain Azure solutions including
compute, storage, network, and security resources

* Manage Azure identities and governance; 
* implement and manage storage; 
* deploy and manage Azure compute resources; 
* configure and manage virtual networking;
* monitor and back up Azure resources


<a name="AZ-400"></a>

### AZ-400 Developer

https://github.com/timothywarner/az400



## GUI, CLI, SDK

Azure Cloud Shell
   • Open in Azure portal
   • “Azure drive” lets you navigate resources
   * Switch between PowerShell and CLI

Azure PowerShell
   • Module of Azure cmdlets
   • Updated approximately monthly

Azure CLI (Bash)
   • a.k.a. “AZ” commands
   • Cross-platform (macOS, Linux, Windows)
   • Install from Web


### Platforms

"Microsoft Stack" runs Azure on on-prem servers.


<hr />


## Identity

Azure Active Directory - Synchronize on-premises directories and enable single sign-on
 
Azure Active Directory Domain Services - Join Azure virtual machines to a domain without domain controllers
 
Azure Information Protection - Better protect your sensitive information—anytime, anywhere

MFA requires P2-level license

## DevOps

Azure Monitor - Full observability into your applications, infrastructure, and network

ARM Templates

Azure Blueprints automates the deployment of complete Azure environments, including policies and permissions. Like Terraform doesd.

## Security services

https://cloudacademy.com/course/microsoft-azure-security-solutions-975/what-is-shared-responsibility/?context_id=524&context_resource=lp

AIP (Azure Information Protection) labls prevents people from sending info labeled as confidential.

Azure Policy Service organizes policies into an initiative.

Azure Active Directory - Synchronize on-premises directories and enable single sign-on
 
Azure Sentinel - Put cloud-native SIEM and intelligent security analytics to work to help protect your enterprise
 
Security Center - Unify security management and enable advanced threat protection across hybrid cloud workloads
 
Azure Security Center's resource hygiene dashboard displays what type of resource information?

The resource hygiene dashboard displays how secure resources are based on Azure security best practices.

Azure Service Health Azure management service informs you about problems with the Azure platform itself and upcoming maintenance events?

The Threat Protection dashboard Azure Security Center dashboard shows an accounts' actual security alerts, which can then be clicked on more detailed information?

Key Vault - Safeguard and maintain control of keys and other secrets
 
Application Gateway - Build secure, scalable, and highly available web front ends in Azure
 
VPN Gateway - Establish secure, cross-premises connectivity. Via IPsec/IKE VNet-to-Vnet or site-to-site connection.
 
Azure Dedicated HSM - Manage hardware security modules that you use in the cloud
 
Azure DDoS Protection - Basic protection of applications from Distributed Denial of Service (DDoS) attacks is automatically enabled for always-on traffic monitoring for real-time mitigation. Standard license mitigates against protocol, app layer, and volumetric attacks.
 
Azure Defender - Protect hybrid cloud workloads

Azure Information Protection - Better protect sensitive information—anytime, anywhere
 
Microsoft Compliance Center

WAF (Web Application Firewall) https://docs.microsoft.com/azure/web-application-firewall/overview

Intune for mobile.

## Containers

Service Fabric - Develop microservices and orchestrate containers on Windows or Linux
 
Container Registry - Store and manage container images across all types of Azure deployments
 
Azure Kubernetes Service (AKS) - Simplify the deployment, management, and operations of Kubernetes
 
Azure Red Hat OpenShift - Fully managed OpenShift service, jointly operated with Red Hat


## Integration

Azure Logic Apps - Automate the access and use of data across clouds without writing code
 
Service Bus - Connect across private and public cloud environments
 
API Management - Publish APIs to developers, partners, and employees securely and at scale
 
Event Grid - Get reliable event delivery at massive scale

## Identities, Management and Governance

Manage Azure AD objects
   • Users, groups, guests, devices; bulk updates; Azure AD join; self-service password reset

Manage Role-Based Access Control
   • Roles, assigning roles at different levels; interpret access assignments

Manage subscriptions and governance
   • Subscriptions, management groups; policies, quotas, tags; resource groups, resource locks

Storage name all lowercase, not special characters.

Azure AD Objects:
Users, groups, devices
• Manage via Azure portal or programmatically
• Users can be “members” or “guests”
• Users can be created directly or via link with on-premises network
• Azure AD accounts often called “work or school” accounts
• Azure AD groups are leveraged by Microsoft Intune
• “Global administrator” can perform all administrative functions
• User Administrator, Billing Administrator are other AAD roles
• Azure AD roles not identical to Azure RBAC roles

Hybrid Identities
• Azure AD Connect synchronizes accounts and passwords between on-premises and Azure AD domains
• Free but must download
• Don’t install on a DC but needs access to a DC and Internet
• Usually a dedicated, robust server
• Wizard has “express mode” for common options
• Global admin rights in AAD; Enterprise admin in ADDS
• “Writeback” = propagate account changes made in Azure to on-premises network (AAD Premium)

MFA MFA for other users requires Azure AD Premium
• You can enable individual users for MFA
• Factors include:
• Phone call
• Text
• Mobile app
• Token

Resources:
An instance of a particular Azure service
• Disk
• Network
• Network Security Group
• etc.
• Some are fixed-price, others are variable (e.g. storage)
• Sometimes there are limits above which you pay extra

Account kind: StorageV2

Resource Groups:
• A logical grouping of Azure resources that work together and/or
have a shared life cycle
• Why group resources?
• Provisioning/deprovisioning
• Monitoring
• Cost management (easier with subscriptions though)
• Maintenance
• Example: application = domain name + virtual network + 4 VM’s
• Not nestable
• Can contain resources from multiple regions

Tiering turns on-premis to a cache for Azure Storage - Azure Cloud Share.

Instead of secrets, use SAS (Shared Access Signature) for Connection string

## Services

Azure Advisor - examines all of your Azure resources and identifies ways to optimize them, according to 4 blades (well-architected)
  Your personalized Azure best practices recommendation engine. Gets info from Security Center.
 
Azure Backup - Simplify data protection and protect against ransomware
 
Azure Site Recovery - Keep your business running with built-in disaster recovery service
 
Automation - Simplify cloud management with process automation
 
Traffic Manager - Route incoming traffic for high performance and availability
 
Network Watcher - Network performance monitoring and diagnostics solution
 
Azure Managed Applications - Simplify management of cloud offerings
 
Azure Monitor - Full observability into your applications, infrastructure, and network
 
Azure Migrate - Easily discover, assess, right-size, and migrate on-premises VMs to Azure (lift-and-shift)
 
Scheduler - Run your jobs on simple or complex recurring schedules
 
Azure Policy - Implement corporate governance and standards at scale for Azure resources


## Storage

Shared access safer than keys!

## Networking

Azure Bastion

Azure Firewall



## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
