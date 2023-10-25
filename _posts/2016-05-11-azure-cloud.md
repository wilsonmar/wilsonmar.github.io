---
layout: post
date: "2023-10-11"
file: "azure-cloud"
title: "Azure Cloud"
excerpt: "The #2 public cloud is a leader as well"
tags: [cloud]
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

<a target="_blank" href="https://wilsonmar.github.io/azure-cloud/">This</a> article contains higher and practical level details about Microsoft Azure, but with less confusing grandiose marketing generalizations.

<a target="_blank" href="https://azure.microsoft.com/en-us/overview/cloud-computing-dictionary/">Cloud Computing Terms Dictionary</a>
   * "Data estate" refers to all the data an organization owns, regardless of where it is stored.

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/best-practices/naming-conventions">
Naming conventions for Azure resources</a>

Microsoft's Azure cloud was first announced in 2008 and released in 2010.


## Why?

 <a target="_blank" href="https://wilsonmar.github.io/cloud-comparisons">My Cloud Comparison article</a> defines the why:

* Money Cost (OpEx vs. CapEx)
* Time - Speed (Quick provisioning)
* Global scale
* Productivity
* Performance (reduced network latency and greater economies of scale)
* Reliability (data backup, disaster recovery, and business continuity easier and less expensive because data can be mirrored at multiple redundant sites on the cloud provider’s network)
<br /><br />


## Architectural components #

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/16688245/6898a7a0-44da-11e6-9245-ee5e1ff729f9.jpg"><img width="650" height="252" alt="azure compute platform 650x252-c60.jpg" src="https://cloud.githubusercontent.com/assets/300046/16688245/6898a7a0-44da-11e6-9245-ee5e1ff729f9.jpg"></a>

<strong>End-Users</strong> buy SaaS (Software as a Service) online with only an internet browser (and a credit card):

   * Office 365
   * Skype
   * Dynamics CRM
   * Salesforce
   * Lucid Charts to draw diagrams

<strong>Developers</strong> interact with a platforms as a service (PaaS) for "Rapid Development":

   * <a href="#ServiceFabric">Service Fabric</a> apps
   * Power (BI) apps
   * Web apps
   * Mobile apps (Xamarin)

   * Media Services
   * Stream Analytics

<strong>Operations people</strong> interact with Infrastructure as a service (IaaS) 
components for "High Control":

   * Azure Service Fabric
   * Azure Batch
   * Define Virtual Machines
   * Define VM Scale Sets
   * VM Extensions
   * Azure Container Service that uses Docker Swarm
   * Cloud Foundry
   * Open Shift
   * Kubernetes 
   * Apprenda
   * Jelastic

<strong>Azure Stack</strong> runs Azure runs within a private data center.



## Web services

The <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/welcome-to-azure/3-tour-of-azure-services">big picture of Azure services</a>:
<a target="_blank" href="https://user-images.githubusercontent.com/300046/56084247-94683380-5ded-11e9-9ff2-c246e3e9c530.jpg"><img alt="azure-big-picture-1923x1083-160564.jpg" src="https://user-images.githubusercontent.com/300046/56084247-94683380-5ded-11e9-9ff2-c246e3e9c530.jpg">
<em>Click diagram for full-frame pop-up</em></a><br />

This is missing some new services such as DevOps.

https://docs.microsoft.com/en-us/azure/architecture/icons/

<a target="_blank" href="https://my.visualstudio.com/Benefits?wt.mc_id=o~msft~profile~devprogram_attach&workflowid=devprogram&mkt=en-us">Visual Studio Dev Essentials</a> provides a list of tools and ecosystem.


<hr />

<a name="COM"></a>

## Cloud Operating Model (COM)

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/cloud-operating-model/">Overview</a>: Microsoft's Cloud Operating Model covers business, people, and technology strategies to identify where an organization is in the digital transformation journey, identify <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/cloud-operating-model/3-modernization-triggers">triggers</a> and opportunities for cloud migration, and recognize these components needed to develop a digital transformation strategy.

A. Meet business requirements<br />
B. Assess organization maturity<br />
C. Strategize business impact<br />
D. Upgrade business processes<br />
E. Identify skills gap<br />
F. Identify migration portfolio<br />
G. Perform migration<br />
H. Modernize the business


<a name="CAF"></a>

## Cloud Adoption Framework (CAF)

Microsoft's CAF is used by Technical Leadership (CISO, CIO) to accelerate each stage of their cloud adoption journey.
CAF organizes a set of tools, templates, guidance, and narratives - starting from why cloud, what to move, where to move, how to move, how to manage & operate in cloud.

References:
   * https://medium.com/microsoftazure/what-is-microsoft-cloud-adoption-framework-caf-for-azure-a619bfbedc0e
   * <a target="_blank" href="https://medium.com/@musunurusharmila/ultimate-guide-for-azure-cloud-adoption-framework-for-enterprise-scale-landing-zone-bba2a385134d">Cloud Adoption Framework enterprise-scale landing zone</a> (CAF ESLZ)



<a name="MCRA"></a>

### MCRA

<a target="_blank" href="https://www.youtube.com/watch?v=q85FTkSpR1E" title="by kiran-kumar-nr-1292054">VIDEO</a>: <a target="_blank" href="https://aka.ms/MCRA/">aka.ms/MCRA</a> => <a target="_blank" href="https://learn.microsoft.com/en-us/security/cybersecurity-reference-architecture/mcra">Microsoft Cybersecurity Reference Architectures (MCRA)</a> <a target="_blank" href="https://learn.microsoft.com/en-us/security/cybersecurity-reference-architecture/mcra">PPTX</a> by Mark Simos [<a target="_blank" href="https://github.com/MarkSimos/MicrosoftSecurity/">GitHub</a>]


<a name="MCSB"></a>

### MCSB

v1 of the <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/overview">Microsoft Cloud Security Benchmark</a> was released 12/07/2022 to provide prescriptive best practices and recommendations to help improve the security of workloads, data, and services on Azure and multi-cloud environments. 

https://learn.microsoft.com/en-us/security/benchmark/azure/overview

MCSB succeeds Microsoft's Azure Security Benchmark (ASB) rebranded in October 2022. "Benchmark" is borrowed from the <a target="_blank" href="https://www.cisecurity.org/cis-benchmarks/">Center for Internet Security (CIS) Benchmarks</a>

The <a target="_blank" href="https://github.com/MicrosoftDocs/SecurityBenchmarks/raw/master/Azure%20Security%20Benchmark/3.0/azure-security-benchmark-v3.0.xlsx">MCSB XLSX (Excel) file</a> is organized into 12 control domains:

1. NS-10 (Network security) - secure and protect networks, including securing virtual networks, establishing private connections, preventing, and mitigating external attacks, and securing DNS.

2. DP-8 (Data Protection) - at rest, in transit, and via authorized access mechanisms, including discover, classify, protect, and monitor sensitive data assets using access control, encryption, key management and certificate management.

3. IM-9 (Identity Management) - establish a secure identity and access controls using identity and access management systems, including the use of single sign-on, strong authentications, managed identities (and service principals) for applications, conditional access, and account anomalies monitoring.

4. PA-8 (Privileged Access) - protect privileged access to tenant and resources, including a range of controls to protect your administrative model, administrative accounts, and privileged access workstations against deliberate and inadvertent risk.

5. PV-7 (Posture and Vulnerability Management) - assessing and improving cloud security posture, including vulnerability scanning, penetration testing and remediation, as well as security configuration tracking, reporting, and correction in cloud resources.

6. LT-7 (Logging and Threat Detection) - detecting threats on cloud, and enabling, collecting, and storing audit logs for cloud services, including enabling detection, investigation, and remediation processes with controls to generate high-quality alerts with native threat detection in cloud services; it also includes collecting logs with a cloud monitoring service, centralizing security analysis with a SIEM, time synchronization, and log retention.

7. AM-5 (Asset Management) - ensure security visibility and governance over your resources, including recommendations on permissions for security personnel, security access to asset inventory, and managing approvals for services and resources (inventory, track, and correct).

8. ES-3 (Endpoint Security) - detection and response, including use of endpoint detection and response (EDR) and anti-malware service for endpoints in cloud environments.

9.  BR-4 (Backup and Recovery) - data and configuration backups at the different service tiers are performed, validated, and protected.

10. IR-7 (Incident Response) - preparation, detection and analysis, containment, and post-incident activities, including using Azure services (such as Microsoft Defender for Cloud and Sentinel) and/or other cloud services to automate the incident response process.

11. DS-7 (DevOps Security) - security engineering and operations in the DevOps processes, including deployment of critical security checks (such as static application security testing, vulnerability management) prior to the deployment phase to ensure the security throughout the DevOps process; it also includes common topics such as threat modeling and software supply security.

12. GS-10 (Governance and Strategy) - ensuring a coherent security strategy and documented governance approach to guide and sustain security assurance, including establishing roles and responsibilities for the different cloud security functions, unified technical strategy, and supporting policies and standards.


<a name="ASVS"></a>

ASVS (Application Security Verfication System)


## Microsoft Defender for Cloud

https://azure.microsoft.com/services/defender-for-cloud



## Microsoft Secure Score

<a target="_blank" href="https://www.microsoft.com/en-us/security/business/microsoft-secure-score?rtc=1">Microsoft Secure Score</a>

aka.ms/StoppingRealAttacks


## Puma Scan 

<a target="_blank" href="https://www.youtube.com/watch?v=qlRENC3wOj8">VIDEO</a>: <a target="_blank" href="https://www.pumascan.com/installation/">PumaScan</a> [<a target="_blank" href="https://github.com/pumasecurity/puma-scan">GitHub</a>, <a target="_blank" href="https://pumascan.com/configuration/">Config</a>] - $300 Pro for Visual Studio & VSCode (vsix), $5000 server, $6000 devops. Just 55 security rules.



<a target="_blank" href="https://www.youtube.com/watch?v=Y8JKVjY-7T0" title="Nov 13, 2016 by Eric Johnson">Roslyn API</a> - .NET Compiler Platform (aka “Roslyn”) exposes a set of code analysis APIs capable of querying the source code


https://github.com/OWASP/ASVS Controls: 
1. Architecture, Design, and Threat Modeling
2. Authentication
3. Session Management
4. Access Control
5. Validation, Sanitization, and Encoding
6. Stored Cryptography
7. Error Handling and Logging
8. Data Protection
9. Communication
10. Malicious Code
11. Business Logic
12. Files and Resources
13. API and Web Services
14. Configuration
<br /><br />

<hr />

## Cloud Security Roles

<a target="_blank" href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/organize/cloud-security">https://aka.ms/securityroles</a>

Cloud security functions


## Terraform

https://blog.devgenius.io/how-to-implement-azure-landing-zone-using-caf-terraform-part-2-4c5a06127d05

https://registry.terraform.io/modules/aztfmod/caf/azurerm/latest
https://github.com/aztfmod/terraform-azurerm-caf
Terraform supermodule for the CAF Terraform landing zones part of Microsoft Cloud Adoption Framework for Azure.
It includes the list of all Azure resources definitions you can create within an Azure Landing Zone. Variables are used as configuration input, and the deployment is done accordingly. caf_azurerm also utilizes another module, azurecaf_name, to ensure that the resources all follow the same naming convention. In addition, caf_azurerm has a framework in place for tag inheritance to guarantee that all resources are appropriately marked.


https://github.com/Azure/terraform-azurerm-caf-enterprise-scale
handle Azure at the organizational level. Management groups, subscriptions, access restrictions, policies, policy assignments, roles, and role assignments are all included. Use this module to arrange your Azure cloud resources and permissions and make sure that the necessary security is in place to stop malicious individuals from infiltrating your company.


<hr />

## Microsoft Learning Account

After <a target="_blank" href="https://wilsonmar.github.io/azure-onboarding">getting a Learning account</a>:

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/">Microsoft's Azure fundamentals class</a> provides a learning path of 12 modules prepares you to pass the <a target="_blank" href="https://www.microsoft.com/learning/exam-AZ-900.aspx">$99 for 50 questions over 60-minute AZ900 Microsoft Azure Fundamentals Exam</a> taken at a <a target="_blank" href="https://bit.ly/2B9iS9e">testing center</a> or at home with a video camera. (see <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/330?redirect_uri=https://app.linuxacademy.com/search?query=az-900">LinuxAcademy video course</a> released May 2019, include the <a target="_blank" href="https://interactive.linuxacademy.com/diagrams/azurebookofbasics1.html">"Book of Basics" interactive diagrams</a> with tabs associated with major sections of the exam:

*  cloud concepts (15-20%)
   * Cloud Services: Benefits and Considerations
   * Infrastructure as a Service (IaaS), 
   * Platform as a Service (PaaS), 
   * Software as a Service (SaaS) - Salesforce & Office 365
   * Cloud Models: Public, Private, and Hybrid
*  core Azure services (30-35%)
   * Azure Architecture
   * Azure Products and Services
   * Azure Solutions
   * Azure Management Tools
*  security, privacy, compliance, and trust (20-35%)
   * Network Security in Azure
   * Azure Identity Services
   * Azure Security Tools and Features
   * Azure Governance
   * Monitoring and Reporting in Azure
   * Azure Privacy, Compliance, and Data Protection Standards
*  Azure pricing and support (20-35%)
   * Subscriptions
   * Planning and Managing Azure Costs
   * Support Options
   * Service Level Agreements (SLAs)
   * The Azure Service Lifecycle
<br /><br />


 <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/learn-business-value-of-azure/">Learn the business value of Microsoft Azure</a> learning path

<strong>Azure Security Center</strong> is available in free and paid tiers.
   The Free subscription assesses Azure resources only. The "Standard" tier provides a full suite of security-related services including continuous monitoring, threat detection, just-in-time access control for ports, and more. After a free 60-day free trial, it's $15 per node per month.


## Architecting

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/architect-great-solutions-in-azure/">Architect great solutions in Azure</a>
   consists of 5 <strong>pillars</strong>, similar to the "Well Architected" series from AWS:

   * Design for security

   * Design for performance and scalability: Azure SQL Data Sync between regions. 
   Azure SQL Database geo-replication allows for read-replicas.
   Azure Cosmos DB globally distributes NOSQL datab for reads and writes regardless of region. 
   Azure Cache for Redis to minimize high-latency calls to remote databases to read frequently accessed data. Polyglot persistence to use different storage technologies for different data.

   * Design for efficiency and operations
   
   * Design for availability and recoverability

   Based on: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/architect-great-solutions-in-azure/">Pillars of a great Azure architecture</a>

Cloud scale analytics:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/56159297-8cd99380-5f81-11e9-8182-0c5199db763f.jpg">
<img alt="azure-dataw-648x239-10988" width="649" height="239" src="https://user-images.githubusercontent.com/300046/56159297-8cd99380-5f81-11e9-8182-0c5199db763f.jpg"></a>


<hr />

TODO: Incorporate into Azure IAM page:

## Azure account and dashboard

* <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/create-an-azure-account/">Create an Azure Account</a>

   Module <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/welcome-to-azure/">Core Cloud Services - Introduction to Azure</a> to create a virtual machine and add a web server.

* Sign in
* Create a resource group

<a name="ARM-signup"></a>

### ARM Create instance #

0. At the Azure portal:

   <a target="_blank" href="https://portal.azure.com/">
   https://portal.azure.com</a>


   <a name="Regions"></a>

   ### Regions & Affinity Groups

0. Select Resource group physical and logical network-isolated instances of Azure / [Regions](/cloud-regions/))

   * In the Americas: westus2, <strong>centralus</strong>, southcentralus, eastus, brazilsouth
   * In Europe: westeurope (there's also France Central and <strong>North Europe</strong>)
   * In Asia Pacific: <strong>southeastasia</strong>, japaneast, australiasoutheast,  centralindia
   * In Middle East and Africa
   <br /><br />

   PROTIP: Bolded are the only regions that support Availability Zones: Central US, North Europe, and SouthEast Asia.

   NOTE: Some services or virtual machine features are only available in certain regions, such as specific virtual machine sizes or storage types. 

   Additionally, Azure has specialized regions for compliance or legal purposes:

   * US DoD Central, US Gov Virginia, US Gov Iowa, and more are for US government agencies and partners. These datacenters are operated by screened US persons and include additional compliance certifications.

   * China East, China North and more: These regions are available through a unique partnership between Microsoft and 21Vianet, whereby Microsoft does not directly maintain the datacenters.

   Each region is paired with another region (West US paired with East US, and SouthEast Asia paired with East Asia, etc.). Such <strong>Region pairs</strong> are at least 300 miles apart.

   A regional <strong>Affinity Group</strong> is defined to create a virtual network to define the data center (region). All services within an affinity group are located in the same data center. Azure groups services use Affinity Groups to optimize performance.

   WARNING: Affinity groups in Azure is a higher-level concept of data centers than the facility of the same name within AWS, which refers to affinity between servers on the same subnet.

   <strong>Availability Zones</strong> are specified for VMs, managed disks, load balancers, and SQL databases. AZs are physically separate datacenters within an Azure region. Each Availability Zone is made up of one or more datacenters equipped with power, cooling, and networking independent of other AZs so that each is set up to be an isolation boundary. If one zone goes down, the other continues working. Availability Zones are connected through high-speed, private fiber-optic networks.

   <strong>Network Security Groups (NSGs)</strong> inside a virtual network (VNet) are defined for communication between virtual machines to restrict unnecessary communication.

0. Options include the classic ASM (Azure Service Manager)
and newer <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/">
ARM (Azure Resource Manager)</a>:

   * Apps Services
   * Virtual machines (classic)
   * Virtual machines
   * SQL databases
   * Cloud services (classic)
   * Security Center

   * Active Directory
   * Storage
   * Messaging
   * Networking
   * Management
   <br /><br />

   Each drill-down into ARM creates an additional pane? to the right.

* <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/welcome-to-azure/4-create-a-vm?pivots=linux-cloud">Create a virtual machine</a> (for 60 minutes). PROTIP: Use Firefox browser. Don't use Brave browser.

   ![azure-cloud-shell-364x199-11637](https://user-images.githubusercontent.com/300046/56084383-9d5a0480-5def-11e9-98e2-ba1ef5f329ea.jpg)

   PROTIP: naming conventions:

   * Size
   * Region
   * Network
   * Resource groups
   <br /><br />

* Get VM information with queries

   <pre>
az vm show \
  --resource-group 7f3943f2-f179-42ba-9823-ba71c7ba7824 \
  --name myVM \
  --query "hardwareProfile" \
  --output tsv
   </pre>

* Set environment variables from CLI output
* Creating a new VM on the existing subnet
* Cleanup

https://docs.microsoft.com/en-us/learn/modules/design-for-efficiency-and-operations-in-azure/2-maximize-efficiency-of-cloud-spend

<a target="_blank" href="https://docs.microsoft.com/learn/paths/store-data-in-azure/">
Module: Store Data in Azure</a>

An <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/design-for-efficiency-and-operations-in-azure/4-use-automation-to-reduce-effort-and-error">example</a> of imperative declaration:

<pre>
az group create --name <em>storage-resource-group</em> \
        --location eastus
az storage account create --name <em>mystorageaccount</em> \
        --resource-group <em>storage-resource-group</em> \
        --kind BlobStorage \
        --access-tier hot
</pre>

Declarative automation is done using Azure Resource Manager templates such as this:

<pre>
{
    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "name": {
            "type": "string"
        },
        "location": {
            "type": "string"
        },
        "accountType": {
            "type": "string",
            "defaultValue": "Standard_RAGRS"
        },
        "kind": {
            "type": "string"
        },
        "accessTier": {
            "type": "string"
        },
        "httpsTrafficOnlyEnabled": {
            "type": "bool",
            "defaultValue": true
        }
    },
    "variables": {
    },
    "resources": [
        {
            "apiVersion": "2018-02-01",
            "name": "[parameters('name')]",
            "location": "[parameters('location')]",
            "type": "Microsoft.Storage/storageAccounts",
            "sku": {
                "name": "[parameters('accountType')]"
            },
            "kind": "[parameters('kind')]",
            "properties": {
                "supportsHttpsTrafficOnly": "[parameters('httpsTrafficOnlyEnabled')]",
                "accessTier": "[parameters('accessTier')]",
                "encryption": {
                    "services": {
                        "blob": {
                            "enabled": true
                        },
                        "file": {
                            "enabled": true
                        }
                    },
                    "keySource": "Microsoft.Storage"
                }
            },
            "dependsOn": []
        }
    ],
    "outputs": {
        "storageAccountName": {
            "type": "string",
            "value": "[parameters('name')]"
        }
    }
}
   </pre>

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/deploy-a-website-with-azure-app-service/">Module: Deploy a website to Azure with Azure App Service</a>

![azure-loadbal-615x424-31664](https://user-images.githubusercontent.com/300046/56093963-df388880-5e8b-11e9-9a5c-491b33df44ca.jpg)

<strong>Azure Traffic Manager</strong> provides global DNS load balancing among DNS endpoints within or across Azure regions. Traffic manager also detects and removes failed endpoints.

<strong>Azure Application Gateway</strong> (AppGW) provides Layer 7 (URL-based) load-balancing such as round-robin distribution of incoming traffic, cookie-based session affinity, URL path-based routing, and the ability to host multiple websites behind a single application gateway. Application Gateway monitors the health of resources in its back-end pool and automatically removes any resource considered unhealthy from the pool. Health probes continue until instances are healthy again and added back.

<strong>Azure Load Balancer</strong> is a layer 4 load balancer. TCP and HTTP health-probing options to manage service availability are optional.

"Availability sets"

https://docs.microsoft.com/en-us/learn/modules/explore-azure-infrastructure/
Core Cloud Services - Azure architecture and service guarantees

From Learn Path: <a target="_blank" href="https://docs.microsoft.com/learn/paths/administer-containers-in-azure/">Administer containers in Azure</a>

   QUESTION: How to use https://raw.githubusercontent.com/wilsonmar/Dockerfiles/master/azure-node/Dockerfile 

https://docs.microsoft.com/en-us/learn/modules/run-docker-with-azure-container-instances/
Azure Container Instances (ACI).

Container restart policies:
   * <strong>Always</strong> restart for long-running tasks such as a web server, so it's the default.
   * <strong>Never</strong> for run one-time only.
   * <strong>OnFailure</strong> only when the process short-lived tasks terminates with a nonzero exit code.


## Installers #

* <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/templates">
   Templates</a> at
   <a target="_blank" href="https://github.com/Azure/azure-quickstart-templates">
   https://github.com/Azure/azure-quickstart-templates</a>

* <a target="_blank" href="https://azure.microsoft.com/en-us/downloads/">
   https://azure.microsoft.com/en-us/downloads</a>



<a name="Commands"></a>

## Commands #

https://docs.microsoft.com/en-us/learn/modules/welcome-to-azure/4-create-a-vm?pivots=linux-cloud

### Install Commands #

   Each resource group defines scope access control for administrative actions.

   Tags are used for all other organization of resources.

<a name="AzureLogin"></a>

## Azure PowerShell Login #

   <tt><strong>
   Login-AzureRmAccount
   </strong></tt>

   Type your credentials and press OK.

   A sample response:

   {% highlight text %}
   Environment           : AzureCloud
   Account               : ???@hotmail.com
   TenantId              : ????????-5f96-4d36-a89b-5ea0f7614e72
   SubscriptionId        : ????????-cf54-443f-b0f1-bcc5e78e9c27
   CurrentStorageAccount :
   {% endhighlight %}

<a name="ResourceGroups"></a>

## Azure Resource Groups

Every resource is in only one group, listed here by stack:

* Web Apps
* SQL
* Storage
* VMs
* NICs
* Virtual Networks

A resource group can contain resources residing in different <strong>regions</strong>.

   <tt><strong>Get-AzureRmResourceProvider
   </strong></tt>


<a name="ContainerService"></a>

## Azure Container Service (ACS) #

Microsoft created and maintains the Azure Container Service with 
<a target="_blank" href="https://mesosphere.com/">Mesosphere.com</a>

with standard Docker tooling and API.

Streamlined provisioning of DC/OS Clusters

and Docker Swarm support


Mesos-DNS for service discovery and registration
(no health checks)

<a target="_blank" href="https://mesosphere.github.io/marathon/docs/native-docker.html">
DC/OS Marathon load balancer</a> support of
<a target="_blank" href="https://docs.mesosphere.com/1.7/usage/cli/command-reference/">
dcos cli commands</a>
needs to be installed.
Backed up as a HA Proxy.


"Minuteman" provides virtual IPs stored in IP tables synced across the cluster.


<a name="ServiceFabric"></a>

## Azure Service Fabric #

<amp-img width="611" height="296" alt="azure service fabric 20160708-611x296-c60.jpg"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16689972/cfcc70b6-44e2-11e6-9b32-a15ad6085ee5.jpg">
</amp-img><br />

Azure Service Fabric enables you to talk to a cluster of machines as if they were one.

An Azure Service Fabric agent runs on each machine 
-- in Amazon or private cloud as well.

   * One call to manage capacity (add and remove nodes at will)
   * Service endpoint discovery
   * Create (immutable) containers
   * Deploy software to containers

   * health reporting
   * Monitoring based on queue length
   * Dynamic resource balancing based on actual resource usage (queue length)
   * Move resources from one node to another

   * coordinate upgrades (select what node to upgrade)
   * Diagnostics in F5

Different services can run on the same machine.

Azure Service Fabric offers a substitute for external storage via its 
<strong>Reliable Collections</strong> programming model
accessing dictionary entries.


<a name="ImportExport"></a>

## Data Import/Export Jobs Service #

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h40m45s">VIDEO</a>

Azure Import/Export service can uses physical drives to import into Azure Blog Storage or Azure Files.

1. WaImportExportV2.exe for files (v1 for blobs), BitLocker encrypt


* Data Box Gateway virtual appliance
* Data Box Edge to Azure IoT Edge
* Data Box Offline  (Robocopy) 
   * Data Box Disk - 8 TB SSD x 5 packs (128 AES encrypted)
   * Data Box - 100 TB AES 256
   * Data Box Heavy - 1TB ruggedized 

Azure Jobs

CDN Endpoints

<hr />

## Resources

### Overview Videos

* <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-big-picture">
Windows Azure: The Big Picture
by David Chappell Beginner Aug 19, 2012 1ah 23m (811)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-fundamentals">
Windows Azure Fundamentals</a>
by Matt Milner Intermediate Mar 26, 2010 4h 57m (156)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/pluralsight-original-microsoft-azure-enterprises">
Microsoft Azure for Enterprises: What and Why</a>
by David Chappell Beginner Jun 05,  2015 1h 13m (446)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-big-picture/table-of-contents">
Microsoft Azure: The Big Picture</a>
by Matt Milner  Beginner Mar 10, 2016 1h 50m
	@Matt Milner, mattmilner.com

* <a target="_blank" href="https://app.pluralsight.com/library/courses/modernizing-websites-microsoft-azure">
   Modernizing Your Websites with Azure Platform as a Service</a>
   by Troy HuntIntermediateApr 02, 20155h 26m

### Extentions Marketplace

VIDEO: <a target="_blank" href="https://app.pluralsight.com/library/courses/windows-azure-marketplace/">Windows Azure Marketplace</a>
by Joe Kunk Intermediate Dec 19, 2013 1h 56m

https://marketplace.visualstudio.com/azuredevops?noPrompt=true

   1. If you get a pop-up:


   2. Click to be brought to<br /><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search">https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search</a>

   3. Click the green "Get it free" button.
   4. Select the organization and click "Install".
   5. Click "Proceed to organization".

   QUESTION: How to automate the above installation on an org?

   6. https://docs.microsoft.com/en-us/azure/devops/project/search/overview?view=azure-devops
   7. https://docs.microsoft.com/en-us/azure/devops/project/search/work-item-search?view=azure-devops
   8. https://docs.microsoft.com/en-us/azure/devops/project/wiki/search-wiki?view=azure-devops



* <a target="_blank" href="https://app.pluralsight.com/library/courses/applied-windows-azure/table-of-contents/">
Applied Windows Azure</a>
by Vishwas Lele Intermediate Feb 18, 2014 4h 51m

* <a target="_blank" href="https://app.pluralsight.com/library/courses/designing-azure-hybrid-cloud/">
Designing a Hybrid Cloud in Azure</a>
by Gavin McShera Intermediate Apr 04, 2016 2h 8m

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-sb">
Windows Azure Service Bus</a>
by Scott Seely Intermediate Jan 08, 2012 2h 5m

* <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-service-brokered-messaging">
Microsoft Azure Service Bus Brokered Messaging In-depth</a>
by Alan Smith Advanced Dec 08,  2015 4h 43m

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-remote-app-getting-started">
Getting Started with Azure Remote App</a>
by Adnan Cartwright Beginner Sep 21,  2015 1h 20m (26)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/understanding-microsoft-azure-amazon-aws">
Microsoft vs. Amazon</a>

* <a target="_blank" href="https://app.pluralsight.com/library/courses/windows-azure-websites-web-jobs">
Azure Websites and WebJobs</a>
by Matt MilnerIntermediateOct 12, 20143h 47m (155)


###  AD:

* <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-access-signatures-getting-started">
Getting Started with Microsoft Azure Shared Access Signatures</a>
by Max McCarty Beginner Nov 02,  2015 2h 18m (20)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/hybrid-identity-microsoft-azure">
Getting Started: Hybrid Identity with Microsoft Azure</a>
by Gary Grudzinskas Intermediate Mar 02, 2016 2h 12m

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-acs">
Windows Azure Access Control Service</a>
by Scott Seely Intermediate Jan 04, 2012 2h 10m (114)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-ad-deploying-integrating">
Deploying and Integrating Azure AD</a>
by John Savill Intermediate Jan 21, 2016 3h 22m (13)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-ad-managing">
Managing Azure AD</a>
by John Savill Intermediate Apr 28, 2016 2h 54m

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-active-directory-developers">
Azure AD for Developers</a>
by Sahil Malik Intermediate Mar 22, 2016 4h 52m

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-hybrid-connections-first-look">
Azure Hybrid Connections: First Look</a>
by Dan Toomey Beginner Jun 12,  2015 1h 48m (59)


###  Operations:

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-elastic-scale">
Elastic Scaling on Windows Azure</a>
by Zoiner Tejada Intermediate Dec 20, 2012 1h 55m (43)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-automation">
Microsoft Azure Automation</a>
by Mike McKeown Intermediate Sep 23, 2014 2h 41m (61)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/managing-azure-iaas-with-powershell">
Managing Azure IaaS with PowerShell</a>
by Elton Stoneman Intermediate Apr 18, 2016 2h 41m (12)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/connect-powershell-to-azure-subscription">
Connecting PowerShell to Your Azure Subscription</a>
by Russell Smith Beginner Apr 06, 2015 37m

* <a target="_blank" href="https://app.pluralsight.com/library/courses/powershell-devops-global-summit-2016-sessions">
PowerShell & DevOps Global Summit 2016 Sessions</a>
by J. Keith Bankston, Ashley McGlone, Mike F. Robbins, Luc Dekens, Neema Saeedi, David Wilson, Jeff Hicks, Kirk Munro, Paul Higinbotham, Michael Greene, Ed Wilson, Angel Calvo, Jared Atkinson, Adam Platt, Lee Holmes, Adam Driscoll, Mark Gray, June Blender, Josh Atwell, Jason Helmick, Rohn Edwards, and Don JonesIntermediateApr 29, 20161h 50m

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-operational-insights-getting-started">
Getting Started with Azure Operational Insights</a>
by Russell Smith Beginner Jan 29, 2016 1h 5m (10)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/windows-azure-diagnostics">
Windows Azure Diagnostics</a>
by Niraj Bhatt Intermediate Mar 08, 2012 3h 18m (54)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/play-by-play-azure-security-mark-russinovich">
Play by Play: Azure Security with Mark Russinovich</a>
by Mark Russinovich and Mark MinasiIntermediateDec 18, 2014 53m (180)

   For role-based security to safeguard data according to an organization's specific security and compliance needs. Azure ATP has its own portal at https://portal.atp.azure.com, so it's not available via the Azure portal but as part of the Enterprise Mobility + Security E5 suite (EMS E5) or as a standalone license through the Cloud Solution Provider (CSP) licensing model.  Azure ATP (Advanced Threat Protection) supports <a target="_blank" href="https://docs.microsoft.com/en-us/azure-advanced-threat-protection/atp-role-groups">three roles: Administrators, Users and Viewers</a>.

* <a target="_blank" href="https://app.pluralsight.com/library/courses/play-by-play-hanselman">
Play By Play: Azure Deployment with Scott Hanselman</a>
by Scott HanselmanIntermediateAug 01, 20131h 2m (136)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/migrating-inet-azure">
Migrating Internet Applications to Azure</a>
by Scott SeelyIntermediateOct 31, 2012 2h 0m (61)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/extending-active-directory-cloud">
Extending Active Directory to the Cloud</a>
by Russell Smith

### Dev #

* <a target="_blank" href="https://app.pluralsight.com/library/courses/windows-azure-iaas-essentials">
Windows Azure Infrastructure as a Service Essentials</a>
by Orin Thomas Intermediate Sep 11, 2013 4h 23m (268)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/windows-azure-infrastructure-service-introduction">
Introduction to Windows Azure Infrastructure as a Service</a>
by Vishwas Lele Beginner Apr 23, 2013 2h 46m (283)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/deploy-azure-visual-studio-online">
Plan, Create, and Deploy to Azure With Visual Studio Online</a>
by Esteban GarciaIntermediateAug 20, 20143h 32m (161)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/implementing-reactive-manifesto-azure-aws">
Implementing the Reactive Manifesto with Azure and AWS</a>
by Elton Stoneman Intermediate Oct 29, 2013 3h 54m (100)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-highly-scalable-web-applications">
Building Highly Scalable Web Applications in Azure</a>
by Edin Kapic Intermediate Aug 04,  2015 2h 23m (237)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/aspnet-multi-tenant-app-mvc-extjs-angular">
Building a Site with Bootstrap, AngularJS, ASP.NET, EF and Azure</a>
by Shawn Wildermuth Intermediate Jul 31, 2013 6h 29m (2202)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/biztalk-azure-appfabric">
Integrating BizTalk Server with Windows Azure AppFabric</a>
by Richard Seroter Intermediate Mar 06, 2011 1h 45m (14)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/node-on-azure">
Node on Windows and Azure</a>
by Paul O'Fallon Intermediate Aug 20, 2012 3h 24m (45)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/build-microsoft-azure-windows-server-2012">
Build a Lab Environment w/ Microsoft Azure & Windows Server 2012</a>
by Gary Grudzinskas Intermediate Jun 23,  2015 2h 20m (127)


###  Data:

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-cloud-services-storage-fundamentals">
Fundamentals of Azure Cloud Services and Storage</a>
by Matt Milner Intermediate Apr 09, 2013 1h 52m (467)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/windows-azure-storage-in-depth">
Windows Azure Storage In-Depth</a>
by Alan SmithIntermediateMar 05, 20146h 51m (174)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-caching">
Windows Azure Caching Service</a>
by Scott Seely Intermediate Jan 05, 2012 1h 40m (51)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-sql-course">
SQL Azure</a>
by Scott Seely Intermediate Jan 23, 2011 2h 38m (143)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-documentdb-introduction">
Introduction to Azure DocumentDB</a>
by Leonard Lobel Beginner Sep 23,  2015 5h 5m (75)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/real-world-big-data-microsoft-azure">
Real World Big Data in Azure</a>
by Elton Stoneman Intermediate Jun 16,  2015 5h 21m (155)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/sql-server-windows-azure-iaas-optimize">
   SQL Server on Microsoft Azure IaaS - Optimizations & High Availability</a>
   by Mike McKeown Intermediate Jan 19, 2014 2h 1m (44)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/hosting-sql-server-windows-azure-iaas">
Hosting SQL Server in Microsoft Azure IaaS Fundamentals</a>
by Mike McKeown Intermediate Oct 11, 2013 1h 40m (125)

###  Mobile:

* <a target="_blank" href="https://app.pluralsight.com/library/courses/windows-azure-mobile-services">
Windows Azure Mobile Services</a>
by Matt Milner Intermediate Jul 23, 2013 6h 21m (157)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/building-mobile-applications-azure-signalr-mvc">
Building Apps with Azure Mobile Svcs, SignalR, MVC, Win 8 and WP8</a>
by Colin Melia Intermediate Feb 12, 2014 1h 52m (106)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/building-cross-platform-mobile-apps-csharp-xamarin-azure">
Building Cross Platform Mobile Apps with C#, Xamarin, and Azure</a>
by Matt MilnerBeginnerApr 20, 20153h 38m (174)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/wpazure">
Building Windows Phone Applications with Azure</a>
by Yacine Khammal Intermediate Feb 14, 2012  2h 37m


* https://www.microsoft.com/en-us/store/apps/posterpedia/9wzdncrdcsr8
   Get the Posterpedia Windows 8 app used to zoom into electronic posters.


<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th>ACTUAL MONTHLY UPTIME %</th><th> SERVICE CREDIT PERCENTAGE </th></tr>
<tr valign="top"><td> < 99.9 </td><td> 10 </td></tr>
<tr valign="top"><td> 99 </td><td>  25 </td></tr>
<tr valign="top"><td> 95 </td><td>	100 </td></tr>
</table>

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
