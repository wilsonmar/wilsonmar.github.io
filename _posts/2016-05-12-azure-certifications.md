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
<tr><th> Role </th><th> Product </th><th> Certification </th></tr>

<tr valign="top"><td> * Administrator
      </td><td> AZ-900 Fundamentals<br />
      AZ-104 Azure Administrator Associate<br />

   </td></tr>
<tr valign="top"><td> * Solution Architect
      </td><td> AZ-303, AZ-304 Azure Solutions Architect Expert<br />
   AZ-600 Stack Hub Operator Associate<br />
        AZ-120 Azure for SAP Workloads Specialty

   </td></tr>
<tr valign="top"><td> * Developer
   </td><td> AZ-204 Azure Developer Associate<br />
       AZ-220 Azure IoT Developer Specialty

   </td></tr>
<tr valign="top"><td> * Functional Consultant
      </td><td> AZ-140 Virtual Desktop Specialty

   </td></tr>
<tr valign="top"><td> * Data Engineer
* Data Scientist
   </td><td> DP-900 Azure Data Fundamentals<br />
DP-100 Azure Data Scientist Associate<br />
   DP-300 Azure Database Administrator Associate<br />
   DP-200, DP-201 Azure Data Engineer Associate<br />
   PL-600 Power Platform Solution Architect Expert<br />
      DP-100 Data Scientist Associate

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

Unless noted, exams as still $165 conducted by Pearson VUE, but not in testing centers thanks to COVID.


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

## AZ-900 Foundation

https://cloudacademy.com/learning-paths/az-900-exam-preparation-microsoft-azure-fundamentals-524/

https://www.youtube.com/watch?v=53LO_rJz6Es&list=PLHh_n2lgzcrvecPJ-zMukLlDrq0GMSMmB
  Ravikirans answers Whizlabs 55 questions on Dec 7, 2020

https://www.youtube.com/watch?v=cAgN6Ac8MS4&list=PLHh_n2lgzcrvecPJ-zMukLlDrq0GMSMmB&index=2

https://azure.microsoft.com/en-us/support/legal/sla/

AIP (Azure Information Protection) labls prevents people from sending info labeled as confidential.

Azure Policy Service organizes policies into an initiative.

https://ServiceTrust.microsoft.com

https://github.com/cloudacademy/azure-overview

Microsoft Compliance Center

Azure Security Center's resource hygiene dashboard displays what type of resource information?

The resource hygiene dashboard displays how secure resources are based on Azure security best practices.

Azure Service Health Azure management service informs you about problems with the Azure platform itself and upcoming maintenance events?

The Azure Advisor service automatically examines all of your Azure resources and identifies ways to optimize them.

The Threat Protection dashboard Azure Security Center dashboard shows an accounts' actual security alerts, which can then be clicked on more detailed information?

Azure Blueprints automates the deployment of complete Azure environments, including policies and permissions

## Identity

Azure Active Directory - Synchronize on-premises directories and enable single sign-on
 
Azure Active Directory Domain Services - Join Azure virtual machines to a domain without domain controllers
 
Azure Information Protection - Better protect your sensitive information—anytime, anywhere

## DevOps

Azure Monitor - Full observability into your applications, infrastructure, and network

## Security services

Azure Active Directory - Synchronize on-premises directories and enable single sign-on
 
Azure Sentinel - Put cloud-native SIEM and intelligent security analytics to work to help protect your enterprise
 
Security Center - Unify security management and enable advanced threat protection across hybrid cloud workloads
 
Key Vault - Safeguard and maintain control of keys and other secrets
 
Application Gateway - Build secure, scalable, and highly available web front ends in Azure
 
VPN Gateway - Establish secure, cross-premises connectivity
 
Azure Dedicated HSM - Manage hardware security modules that you use in the cloud
 
Azure DDoS Protection - Protect your applications from Distributed Denial of Service (DDoS) attacks
 
Azure Defender - Protect hybrid cloud workloads

Azure Information Protection - Better protect your sensitive information—anytime, anywhere
 
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

## Management and Governance

Azure Advisor - Your personalized Azure best practices recommendation engine
 
Azure Backup - Simplify data protection and protect against ransomware
 
Azure Site Recovery - Keep your business running with built-in disaster recovery service
 
Automation - Simplify cloud management with process automation
 
Traffic Manager - Route incoming traffic for high performance and availability
 
Network Watcher - Network performance monitoring and diagnostics solution
 
Azure Managed Applications - Simplify management of cloud offerings
 
Azure Monitor - Full observability into your applications, infrastructure, and network
 
Azure Migrate - Easily discover, assess, right-size, and migrate your on-premises VMs to Azure
 
Scheduler - Run your jobs on simple or complex recurring schedules
 
Azure Policy - Implement corporate governance and standards at scale for Azure resources


## AZ-400 Developer

https://github.com/timothywarner/az400


## Linux Azure

https://azure.microsoft.com/en-us/learn/skills/


Deal: buy an Azure exam voucher for $99 and get a
free Linux Foundation Certified System Administrator (LFCS)
exam voucher too.

https://training.linuxfoundation.org/certification/lfcs

BLAH: Dead link at
https://www.microsoft.com/en-us/learning/azure-skills-training.aspx

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
