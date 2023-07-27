---
layout: post
date: "2023-07-26"
file: "azure-cloud-onramp"
title: "Azure Cloud Onramp"
excerpt: "Azure URLs, Subscriptions, Support plans, Tenants, Directories, ARM portal Keyboard Shortcuts, CLI Bash & PowerShell scripting"
tags: [cloud, azure]
image:
# az-logo-2021-1900x500.png
  feature: https://user-images.githubusercontent.com/300046/117658030-7fd70080-b157-11eb-9869-405a4d93ecf5.png
  credit: Microsoft Fluent
  creditlink: https://azure.microsoft.com/en-in/blog/a-fluent-new-look-for-the-azure-icon/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a deep-dive hands-on tutorial with commentary along the way, covering basic terminology and how to get an account into Azure, set MFA, use Active Directory. Search for what to "REMEMBER" to pass Microsoft's AZ-900 and AZ-104 exams.

{% include whatever.html %}

<a name="USGov"></a>

## Microsoft Azure Government environments

Microsoft runs separate/isolated <a target="_blank" href="https://azure.microsoft.com/en-us/global-infrastructure/government/">Azure fed/state/local gov</a> "sovereign DoD Level 5" cloud hardware on US soil operated by US citizens. 

1. Specify the target cloud environment:

   <pre><strong>az cloud show --name AzureUSGovernment</strong></pre>

   AzureUSGovernment has its own Marketplace of apps.

1. Know that <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-government/compare-azure-government-global-azure">each service has different host names</a> for US government work. For example, Speech Studio Speech translation has these API endpoints:
   * Virginia: https://usgovvirginia.s2s.speech.azure.us
   * Arizona: https://usgovarizona.s2s.speech.azure.us
   <br /><br />

References:
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome">What is gov?</a> 
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-government/compare-azure-government-global-azure">DOC: Compare Global vs. Gov</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6UDePj5newo&list=PLLasX02E8BPA5IgCPjqWms5ne5h4briK7&index=10">VIDEO: Terraform Provider Azure.gov</a> for standardized templates across clouds.
   * <a target="_blank" href="https://www.pulumi.com/docs/intro/cloud-providers/azure/setup/">Pulumi</a> enables programmatic access (by a Python program) to Azure.


<a name="URLs"></a>

## URLs for Microsoft and Azure

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Usage </th><th> URL (bookmark these) </th><th> Notes </th></tr>
<tr valign="top"><td> Marketing </td><td>
   <a target="_blank" href="https://azure.com/"><strong>azure.com</strong></a> <em>redirects to</em><br />
   <a target="_blank" href="https://azure.microsoft.com/en-us/">azure.microsoft.com/en-us</a>
   </td><td>-
   </td></tr>
<tr valign="top"><td> MS Learning</td><td align="right">
   <a target="_blank" href="https://techprofile.microsoft.com/en-us/"><strong>techprofile.microsoft.com</strong></a><br /><br />
   <a target="_blank" href="https://www.microsoft.com/en-us/learning/dashboard.aspx"><strong>microsoft.com/en-us/learning/dashboard.aspx</strong></a>
   </td><td><a target="_blank" href="https://wilsonmar.github.io/azure-certifications/">Azure certifications</a>
   </td></tr>
<tr valign="top"><td> Enterprise learning</td><td align="right">
   <a target="_blank" href="https://esi.microsoft.com/"><strong>esi.microsoft.com</strong></a>
   </td><td>Live classes & cert. vouchers
   </td></tr>
<tr valign="top"><td> Tech Talks</td><td align="right">
   <a target="_blank" href="https://mtt.eventbuilder.com/MTTUSCANADA">mtt.eventbuilder.com/MTTUSCANADA</a>
   </td><td>by MS Support
   </td></tr>
<tr valign="top"><td> Sign-up: </td><td>
   <a target="_blank" href="https://account.windowsazure.com/signup/">
   account.windowsazure.com/signup</a>
   </td><td>-
   </td></tr>
<tr valign="top"><td> Support </td><td align="right">
   <a target="_blank" href="https://support.azure.com/">
   support.microsoft.com</a>
   </td><td>-
   </td></tr>
<tr valign="top"><td> Support tickets </td><td align="right">
   <a target="_blank" href="https://serviceshub.microsoft.com">serviceshub.microsoft.com</a>
   </td><td>-
   </td></tr>
<tr valign="top"><td> User Self-Service</td><td align="right">
   <a target="_blank" href="https://myapps.microsoft.com">myapps.microsoft.com</a>
   </td><td>password reset
   </td></tr>
<tr valign="top"><td> All Admin Centers </td><td>
   <a target="_blank" href="https://admin.microsoft.com/AdminPortal/Home#/alladmincenters"><u><strong>
   admin.microsoft.com</strong>/AdminPortal /Home#/alladmincenters</u></a>
   </td><td>-
   </td></tr>
<tr valign="top"><td> Azure Enterprise Account Portal </td><td align="right">
   <a target="_blank" href="https://account.azure.com">account.azure.com</a><br /><em>(can be slow, no federation?)</em>
   </td><td> Accounts under departments
   </td></tr>
<tr valign="top"><td> Subscription dashboard: </td><td align="right">
   <a target="_blank" href="https://portal.azure.com/"><strong>portal.azure.com</strong></a><br />
   for <a href="#USGov">US Government</a>:
   <a target="_blank" href="https://portal.azure.us/">portal.azure.us</a> 
   </td><td>-
   </td></tr>
<tr valign="top"><td> Cloud Shell </td><td align="right">
   <a target="_blank" href="https://shell.azure.com/">
   <strong>shell.azure.com</strong></a>
   </td><td> CLI
   </td></tr>
<tr valign="top"><td> Azure Enterprise Portal </td><td align="right">
   <a target="_blank" href="https://ea.azure.com"><strong>ea.azure.com</strong></a>
   </td><td> Define departments
   </td></tr>
<tr valign="top"><td> <a href="#AAD">Azure AD</a> </td><td align="right">
   <a target="_blank" href="https://aad.portal.azure.com/">aad.portal.azure.com</a>
   </td><td>-
   </td></tr>
<tr valign="top"><td> Video Indexer </td><td align="right">
   <a target="_blank" href="https://api-portal.videoindexer.ai/">
   api-portal.videoindexer.ai</a>
   </td><td><a target="_blank" href="https://wilsonmar.github.io/microsoft-ai/#video-indexer">BLOG</a>
   </td></tr>
<tr valign="top"><td> Metrics Advisor </td><td align="right">
   <a target="_blank" href="https://metricsadvisor.azurewebsites.net/">
   metricsadvisor.azurewebsites.net</a>
   </td><td><a target="_blank" href="https://wilsonmar.github.io/azure-monitoring/">Monitoring</a>
   </td></tr>
<tr valign="top"><td> Azure Data Factory </td><td align="right">
   <a target="_blank" href="https://adf.azure.com/">adf.azure.com</a>
   </td><td>-
   </td></tr>
<tr valign="top"><td> Traffic Manager </td><td>
   <strong><em>{acct}</em>.trafficmanager.net</strong>
   </td><td><a target="_blank" href="https://wilsonmar.github.io/azure-networking/">more</a>
   </td></tr>
<tr valign="top"><td> Machine Learning studio </td><td align="right">
   <a target="_blank" href="https://ml.azure.com/">
   ml.azure.com</a>
   </td><td> <a target="_blank" href="https://wilsonmar.github.io/microsoft-ai">AI tutorial</a>
   </td></tr>
<tr valign="top"><td> Lang. Understanding</td><td align="right">
   North America: <a target="_blank" href="https://www.luis.ai/">www.luis.ai</a><br />
   Europe: <a target="_blank" href="https://eu.luis.ai/">eu.luis.ai</a><br />
   Australia: <a target="_blank" href="https://au.luis.ai/">au.luis.ai</a>
   </td><td> <a target="_blank" href="https://wilsonmar.github.io/microsoft-ai">AI tutorial</a>
   </td></tr>
<tr valign="top"><td> Single-tenant </td><td>
   <a target="_blank" href="https://login.microsoftonline.com//contoso.onmicrosoft.com/">login.microsoftonline.com/{contoso}.onmicrosoft.com</a>
   </td><td>-
   </td></tr>   
<tr valign="top"><td> Multi-tenant </td><td>
   <a target="_blank" href="https://login.microsoftonline.com/common/">
   login.microsoftonline.com/common</a>
   </td><td>-
   </td></tr>
<tr valign="top"><td> Tech Community </td><td>
   <a target="_blank" href="https://techcommunity.microsoft.com/t5/azure/ct-p/Azure">
   techcommunity.microsoft.com/t5/azure/ct-p/Azure</a>
   </td><td>-
   </td></tr>
<tr valign="top"><td> AzureML Metrics </td><td>
   <a target="_blank" href="https://eastus.api.azureml.ms/discovery">
   {eastus}.api.azureml.ms/discovery</a>
   </td><td>App Insights
   </td></tr>
<tr valign="top"><td align="right"> User feedback</td><td>
   <a target="_blank" href="https://feedback.azure.com/forums/34192--general-feedback">
   feedback.azure.com<br />/forums/34192--general-feedback</a>
   </td><td>Product suggestions
   </td></tr>
<tr valign="top"><td align="right"> <a target="_blank" href="https://wilsonmar.github.io/azure-devops">Azure DevOps</a></td><td align="right">
   <a target="_blank" href="https://dev.azure.com/">
   dev.azure.com</a><br />
   <a target="_blank" href="https://aex.dev.azure.com/me?mkt=en-US">AEX.dev.azure.com</a>
   </td><td>-
   </td></tr>
<tr valign="top"><td align="right"> <a target="_blank" href="https://wilsonmar.github.io/azure-devops">Azure DevOps</a></td><td align="right">
   <a target="_blank" href="https://appcenter.ms/">appcenter<strong>.ms</strong></a>
   </td><td>mobile, etc.
   </td></tr>
<tr valign="top"><td align="right"> <a target="_blank" href="https://wilsonmar.github.io/azure-compute">Azure Service</a></td><td align="left">
   <em>{app_service}</em><strong>-staging</strong>.azurewebsites.net<br />
   <em>{app_service}</em>.azurewebsites.net
   </td><td>staging & prod. slot
   </td></tr>
</table>



<a name="Profiles"></a>

## Setup & Use Browser Profiles

Websites (including Azure) store your browser history, what account you logged in, etc. locally in "cookies" associated with your browser account.

That's how you get returned to the last account used when you go back to a website.

PROTIP: Setup <strong>different browser profiles</strong> on the same browser, associated with different profile avatars and colors: <strong>one for each account (email)</strong>.

1. Click your browser's avatar picture at the upper-right corner:

   * The <a href="#MSAccount">Learn account</a> using your personal email (such as at gmail.com).
   * The account associated with your Visual Studio benefit (using your work email)
   * Each of your work accounts (to do your job as an Administrator).
   <br /><br />

1. Do the above for each browser (Google Chrome, Microsoft Edge, Firefox, etc.).


<a name="MCRA"></a>

## Guidance by Organizational Level

<a target="_blank" href="https://www.youtube.com/watch?v=6iYxNm3TOiI&list=PLtVMyW0H7aiOQwZSsn2d-tg2z729ce1BZ" title="MCRA Intro by Mark Simos, Microsoft Chief Security Advisor">VIDEO</a>: Microsoft's overarching <a target="_blank" href="https://aka.ms/MCRA/">Cybersecurity Reference Architecture (MCRA)</a> presents several perspectives.

Efforts by <strong>job level</strong>:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690387881/azure-guides-1158x439_zyhcb2.png"><img alt="azure-guides-1158x439.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690387881/azure-guides-1158x439_zyhcb2.png"></a>

Each CSP (GCP, AWS, Azure, etc.) offers different but similar <a target="_blank" href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/secure/">Cloud Adoption Framework (CAF)</a>
and <a target="_blank" href="https://learn.microsoft.com/en-us/azure/well-architected/security/overview">Well-Architected Framework</a>.


### Security Roles

<a target="_blank" href="https://learn.microsoft.com/en-us/security/ciso-workshop/the-ciso-workshop-videos">Videos</a> in <a target="_blank" href="https://learn.microsoft.com/en-us/security/ciso-workshop/the-ciso-workshop">Microsoft's CISO Workshop</a> covers how the <a target="_blank" href="https://aka.ms/SecurityRoles">concerns</a> of each organizational role type/team</a> relate with others:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690410983/azure-security-roles-1883x903_j2yehb.png"><img alt="azure-security-roles-1883x903.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690410983/azure-security-roles-1883x903_j2yehb.png"></a>

From Plan (Governance) to Build to Run (Operations):
   * Board
   * Management (Business Model and Vision)

   * Policy and standards
   * Security operations
   * Security architecture
   * Security compliance management
   * People security
   * Application security and DevSecOps
   * Data security
   * Infrastructure and endpoint security
   * Identity and key management
   * Threat intelligence
   * Posture management
   * Incident preparation

   * SOC (Security Operations Center)

<a name="MCSB"></a>

### MCSB Best-practice Frameworks for Azure

In <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/overview">2021</a>, Microsoft published its prescriptive best-practice framework in its MCSB (<strong>Microsoft Cybersecurity Security Benchmarks</strong>), v1 as of 3/21/23. Like the CIS (Center for Internet Security) Benchmarks (see https://www.cisecurity.org/cis-benchmarks/),
the MCSB aims to improve the security of cloud-centric workloads, data, and services on Azure, perhaps in multi-cloud environment. 

There is a <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/">"baseline" for each Azure service</a>


<a name="Defenders"></a>

### MS Defenders

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690414718/az-defenders-3360x1602_nw8vql.png"><img alt="az-defenders-3360x1602.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690414718/az-defenders-3360x1602_nw8vql.png"></a>

Microsoft offers a "Defender" product for each type of product:

   * MS Defender for Office 365
   * MS Defender for Endpoint
   * MS Defender for Identity
   * MS Defender for Cloud
   <br /><br />

REMEMBER: Use of Defender involves <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/defender-for-cloud/">additional charges</a> (to each server, container, database, storage, app service).

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690385105/azure-defender-1492x1042_lt9imh.png"><img alt="azure-defender-1492x1042.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690385105/azure-defender-1492x1042_lt9imh.png"></a>

<a target="_blank" href="https://learn.microsoft.com/en-us/azure/defender-for-cloud/update-regulatory-compliance-packages">regulatory compliance packages</a>. 

Successor of Azure Security Benchmark v3.)

"Sentinel" is the brand name for Microsoft's offerings in SIEM and SOAR.


Controls:
   * <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-posture-vulnerability-management">Posture and Vulnerability Management</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-incident-response">Incident Response</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-logging-threat-detection">Logging and threat detection</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-endpoint-security">Endpoint security</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/security-controls-v3-incident-response">Azure Security Benchmark v3 - Incident Response</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-privileged-access">Privileged Access</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-asset-management">Asset Management</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-backup-recovery">Backup and recovery</a>
   <br /><br />


<a name="SecureScore"></a>

### Secure Score Posture Categories

Within M365 Defender is the <a target="_blank" href="https://learn.microsoft.com/en-us/microsoft-365/security/defender/microsoft-secure-score?view=o365-worldwide#how-it-works">Microsoft Secure Score</a> survey app. It's used to define a security posture score (over time) based on whether specific actions have occurred or not. It contains a breakdown based on Microsoft's <strong>categories for a Security Posture</strong>:

   * Identity
   * Data
   * Device
   * Apps
   * Infrastructure
   <br /><br />



It's based on input from a set of holistic Microsoft and industry security guidance:

* <strong>Cloud Adoption Framework (CSF)</strong>: Guidance on security, including strategy, roles and responsibilities, 

* <a target="_blank" href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/secure/security-top-10">Azure Top Security Best Practices</a> (What, Why, Who, How activities) by People, Process, Technology, and Architecture. 

* Other industry and cloud service providers security best practice standards and framework: Examples include the Amazon Web Services (AWS) Well-Architected Framework, Center for Internet Security (CIS) Controls, National Institute of Standards and Technology (NIST), and Payment Card Industry Data Security Standard (PCI-DSS).



### Job Roles

Microsoft aligned these generic "job roles" with <a target="_blank" href="https://wilsonmar.github.io/azure-certifications">Azure certification exams</a>:

   * (Azure) Administrator
   * (Azure) Developer
   * (Azure) Solution Architect

   * Data Engineer
   * AI Engineer
   * Business Analyst
   * Business User
   <br /><br />

   PROTIP: Generic job positions ("roles") are different than the <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles">Administrator role permissions in Azure Active Directory</a> (AAD).

   MY OPINION: I think job roles should be multi-select checkboxes.
   This segregation also adds to duplicating material.



### CMPs from CSBs

Not a lot of people <a target="_blank" href="https://www.infoworld.com/article/2903436/make-sense-of-cloud-service-brokers.html">talk about this</a>, but a Cloud Management Platform (CMP) from a CSB (Cloud Service Broker such as AppDirect, Ensim, Gravitant, Jamcracker, Parallels, Ostrato, ServiceNow, BMC, etc.) is necessary for enterprises to provide provisioning governance, self-service, usage chargeback, and policy enforcement across multiple cloud vendors. 


<hr />

## Hands-on time

1. Some "Exercises" in Microsoft Learn provide FREE "MICROSOFT LEARN SANDBOX" temporary "Concierge" subscription access one or two hours at a time. Search within:

   <a target="_blank" href="
   https://docs.microsoft.com/en-us/learn/">
   https://docs.microsoft.com/en-us/learn</a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/create-windows-virtual-machine-in-azure/3-exercise-create-a-vm">Create Windows Virtual Machine</a>
   <br /><br />

1. Microsoft has https://azure.microsoft.com/en-us/free/students/

1. Microsoft maintains <a target="_blank" href="https://azuredevopslabs.com/labs/devopsserver/handsonlabs/">azuredevopslabs.com/labs/devopsserver/handsonlabs</a> with code at <a target="_blank" href="https://github.com/Microsoft/azuredevopslabs/tree/master/labs/devopsserver/handsonlabs/">github.com/Microsoft/azuredevopslabs/tree/master/labs/devopsserver/handsonlabs</a>, which provides a quick and easy way to evaluate and test (currently only DevOps and Visual Studio) through virtual environments that do not require any complex setup or installation. You can use virtual labs online immediately for free :)

1. CloudAcademy.com licenses include Lab time in some of their monthly subscriptions.

   * <a href="#CloudAcademyLab">VM lab</a>
   <br /><br />

   ### Azure first-timer deals

2. Get a "Microsoft Learn" account for $200 of credits to spend in 30 days and also a year of <a href="#FreeSvcs">free services</a>. See <a target="_blank" href="https://docs.microsoft.com/en-us/learn/azure/">docs.microsoft.com/en-us/learn/azure/</a> 

   After that instead of "Pay-As-You-Go",

2. PROTIP: Obtain Azure credits as a benefit of a monthly license of Visual Studio (even though they don't intend on using the IDE). Azure Subscriptions (like Netflix, Disney+, etc.) are billed monthly.

   * $50/month credits from a $39/mo Visual Studio Professional license
   * $150/month credits from a $79/mo Visual Studio Enterprise license
   <br /><br />

   Visual Studio Subscriptions are, as of this writing, NOT offered in the Brazil South and Central India regions, as noted in <a target="_blank" href="https://azure.microsoft.com/en-us/regions/offers/">https://azure.microsoft.com/en-us/regions/offers/</a>.

   

<a name="FreeSvcs"></a>

### First year free services

<a target="_blank" href="https://azure.microsoft.com/en-us/free/free-account-faq/">
https://azure.microsoft.com/en-us/free/free-account-faq</a> lists the services which Microsoft makes free for the first year:

   * Compute: 750 hours of B1S Linux VMs
   * Compute: 750 hours of B1S Windows VMs
   * Storage: Manage Disks 64 GB x 2
   * Storage SQL: up to 250 GB
   * Storage File: 5GB
   * Storage Blobs: 5 GB
   * Cosmo DB up to 5 GB 400 request units
   * Network bandwidth: 15 GB outbound data transfer
   * AI & Machine Learning services
   <br /><br />

   TODO: HANDS-ON: Make use of them without spending any money of your own!

The clock is ticking!


<a name="O365Trial"></a>

## Office 365 Trial

1. Sign up for Office 365 Trial at 

   https://www.microsoft.com/en-us/microsoft-365/enterprise/office-365-e5?activetab=pivot:overviewtab

1. Click the "Free trial" link and go through the verification steps.

   You get assigned a @onmicrosoft.com domain and individual account.

1. To view time remaining, see 
   
   <a target="_blank" href="https://admin.microsoft.com/adminportal/home?#/subscriptions">
   https://admin.microsoft.com/adminportal/home?#/subscriptions</a>


<hr />

<hr />

<a name="Arch"></a>

## Access AuthA & AuthN Subscriptions

<a target="_blank" href="#Arch">This pdf</a> is how Azure's various enterprise authentication and authorization mechanisms relate to each other: 

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1674194496/az-ent-auth-arch-1365x1034_shnrvx.jpg"><img alt="az-ent-auth-arch-1365x1034.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1674194496/az-ent-auth-arch-1365x1034_shnrvx.jpg"></a>

A. Enterprise enrollment (to Dept, Account to Azure Active Directory & on-prem. Active Directory)<br />
B. Identity and access management<br />
C. Management group and subscription organization<br />
D. Management subscription (to on-premises systems)<br />
E. Connectivity subscription<br />
F. Landing zone subscription<br />
G. VM templates<br />
H. Sandbox subscription<br />
I. Azure DevOps (vs. GitHub Actions)

<hr />

## It can be confusing

<a target="_blank" href="https://www.youtube.com/watch?v=dBAflZZE6Gw&t=24s" title="Active Directory vs Azure AD vs Azure AD DS | MCSA | AZ-104">VIDEO</a>: <a target="_blank" href="https://www.youtube.com/watch?v=-a_-Seh27s4&">VIDEO Glossary</a>.

<a href="#AD">AD = Active Directory</a><br />
vs.<br />
<a href="#AAD">AAD = Azure AD = Azure Active Directory</a><br />
vs.<br />
AADC = Azure AD Connect<br />
vs.<br />
ADDS = Active Directory DS = Domain Services

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> - </th><th> on-prem. AD </th><th> Azure AD </th></tr>
<tr valign="top"><td> Runs on: </td><td> 
   Windows server </td><td> SaaS cloud </td></tr>
<tr valign="top"><td> Structure: </td><td> 
   Org. Unit </td><td> Admin. Unit </td></tr>
<tr valign="top"><td> Authentication: </td><td> 
   LDAP, Kerberos </td><td> - </td></tr>
</table>


<hr />

<a name="AD"></a>

### AD = Active Directory 

Active Directory stores credentials for (older)
run on Windows servers in on-prem data centers.
This older <strong>on-prem</strong> AD provides "domain services" that include domain joins, group policies, LDAP, Kerberos / NTLM authentication. 
It uses the AD Admin Center GUI.

<a name="AAD"></a>

### AAD = Azure Active Directory

Azure Active Directory (AAD) registers Users and Groups, plus apps and devices. 
AAD is a SaaS service, unlike "Active Directory" running on Windows servers in on-prem data centers. So AAD is also called an "Identity as a Service" (IDaaS). 

   * Since Azure Microsoft Office 365 is SaaS, users are enrolled into AAD.

   * Because it's SaSS, it’s also possible to use Azure AD for federation SSO (Single Sign On) - to manage third-party software applications (outside Microsoft), such as CRMs like Salesforce, SAP, etc.

<a name="Domains"></a>

### Domains

   A domain is an area of a network organized by a single authentication database.

   An Active Directory Domain is a logical grouping of AD objects on a network.

   A Domain Controller (DC) is a server that authenticates user identities and authorizes their access to resources.

### AAD Connect

<strong>Azure AD Connect</strong> is a Windows service that synchronizes on-prem AD user metadata with the SaaS AAD. Key features of AAD Connect:
   * Password hash sych with AAD
   * Pass-through authentication which allows users to use the same password on-prem. and in the cloud.
   * Federation integration with AD FS for certificate renewal
   * Synchronization to ensure on-prem and cloud data matches
   * Health monitoring in a central location
   <br /><br />


<hr />

<a name="PortalSearch"></a>

## Portal Search AAD

1.  <a target="_blank" href="https://portal.azure.com">portal.azure.com</a>

2.  Press G and / to position the cursor to the Search field at the top.

    <a name="AAD"></a>

3.  Type <strong>AAD</strong> for the Services related to that name.

4.  Click for the blade called <a target="_blank" href="https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview">Azure Active Directory</a> .

    https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview

    <a name="Tenants"></a>

    ### Tenants in AAD

5.  Highlight and copy the value of the Name field, such as "<em>something</em>.onmicrosoft.com".

6.  Notice the "Tenant ID" GUID below it.

7.  Open another browser tab (temporarily) to find the Tenant ID based on DNS domain (web host) name such as "contoso.com" or "something.onmicrosoft.com":

    <a target="_blank" href="https://www.whatismytenantid.com/">https://www.whatismytenantid.com</a>

8.  Paste the name and click "Find my tenant ID".
9.  Remember the last few characters of the GUID returned.
10. Switch back to the browser Portal tab.

    <a name="TenantSwitch"></a>

    ### Tenant Switching

1.  To switch among tenants in the Portal GUI, use the "Directory + subscription" filter at the top menu of every screen:

    <img alt="az-onramp-subscrip-462x263" width="462" height="263" src="https://user-images.githubusercontent.com/300046/112444406-9cd48300-8d13-11eb-9aac-24feb64af66a.png">

    Within PowerShell, define the default Tenant (if you need to sign into more than one Tenant):

    <pre><strong>Set-AzureRmContext
    </strong></pre>


    ### Tenant = Directory

11. Click the icon at the top bar that looks like a notebook with a funnel.

    https://portal.azure.com/#settings/directory

    Notice the Directory ID GUID is the same as the Tenant ID GUID.

    DEFINITION: A Directory (as in AAD) is where your Tenant metadata is stored.

    Everything you do in Azure must be under some Tenant.

    Each tenant is independent of all other tenants.

    A tenant represents an organization in AAD.
   
    
    ### Users, Groups, Apps

    At the right is a count of Users, Groups, Applications, Devices managed under that Tenant.

    (From Tim Warner)
    <img alt="az-aad-concepts-1194x954.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1674198812/az-aad-concepts-1194x954_mivxuk.jpg">

    ### Federation

    <a name="EntApps"></a>

    Microsoft has created integrations with Enterprise Applications such as Dropbox, Google Docs, AWS, Concur, etc.

    "External Identity" are Guest users with a credential federated from another Identity Store (Facebook, Google Gmail, GitHub, etc.) or a new SAML/WS-Fed IdP.

    After an IdP is defined, define User flows (see AD B2C).

    (from Tim Warner)
    <img alt="az-aad-groups-751x987.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1674201184/az-aad-groups-751x987_fasfn0.jpg">

    
    "Managed Identities" are also called "Service Accounts" used for authenticating automation services. Such accounts are assigned a GUID instead of email addresses for human users.

    ### Invitation from Federation

    (from Tim Warner)
    <img alt="az-federation-1950x1716.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1674268604/az-federation-1950x1716_nh17eb.jpg">

    There are two types of Consent to Azure AD:
    a) Federation<br />
    b) Non-federated MSA (Microsoft Account from Skype, XBox)

    DEFINITION: OTP (One-Time Password) is emailed to the user.


    <a name="CreateGroup"></a>
    
    ### Create New Group

    Groups make authorization easier.

    Groups can be nested under another Group.
    
12. Select "All Groups".
13. Select "New Group".
    
    Membership type "Assigned" are <strong>manually</strong> selected into each group.

    Membership type "Dynamic" Users and Devices are completely (automatically) controlled by Azure AD, which populates membership based on user/device <strong>properties</strong>.

    There are custom extension properties. 
    Selecting Property: city Operator: Equals Value: Tampa yields Rule syntax:

    <pre>(user.city -eq "Tampa")</pre>

14. Click "Create".


    <hr />

    <a name="License"></a>
    
    ### Tenant License

    Each license has its own options.

    License defaults to "Azure AD Free" to begin.

    P1 provides Conditional Access.

    "EMS (Enterprise Mobility + Security E5)" includes:
    * AAD is the cloud-based IAM service to control access to internal and external applications
    * Microsoft Intune is used for MDM (Mobile Device Management) but also PCs to remote reset and wipe. compliance status
    * Azure Info Protection protects documents tagged to not be shared
    * Microsoft Cloud App Security
    * Microsoft Advanced Thereat Analytics (ATA) is an on-prem. platform to protect against targeted cyber attacks along the "Cyber Kill Chain" attack process (Domain Dominance) by parsing network traffic to create a behavioral profile about user activities.
    * Azure Advanced Threat Protection is a cloud-based triage tool which displays incidents on a timeline 
    <br /><br />

    "Microsoft 365 E5 Developer (without Windows and Audio Conferencing)"

    "Microsoft Power Apps Plan 2 Trial"

    "Microsoft Power Automate Free"

    "Power Virtual Agents Viral Trial"

    License "Azure AD Premium P2" for production enterprises. P2 provides "Identity Protection" and "Identity Governance" features. P2 is needed for MFA (Multi-Factor Authentication) and PIM.


    <a name="PIM"></a>

    ### P2 PIM (Privileged Identity Management)

    For those with a P2 license, <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">Azure AD Privileged Identity Management (PIM)</a> provides elevated access on a <strong>JIT (Just-in-Time)</strong> basis for a limited time. access. PIM provides audit logs to enable reviews of accesses. 

    Email is automatically sent when a role assignmnet is made outside of PIM. So do all access changes from the PIM UI, using "Privileged Authentication/Role Administrator" role assignments. Assignment can be permanent or based on time and date range.

1. REMEMBER: PIM must be enabled by the <a href="#AdminUsers">Global Admin</a> after MFA sign-on.

1.  Users search for PIM, Azure resources, to see <strong>assignments</strong> to <a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-how-to-activate-role?WT.mc_id=Portal-Microsoft_Azure_Support">activate yourself</a>:

    https://portal.azure.com/#view/Microsoft_Azure_PIMCommon/ActivationMenuBlade/~/azurerbac

1.  PROTIP: Bookmark the above URL 
1.  Admins approve
2.  The user would see a Subscription with role "Specified access".
3.  User should Deactivate after using rather than letting the clock run out.

    <a name="ConditionalAccess"></a>

    ### Conditional Access Policy

    Another P1 or P2 feature to limit granting of user access to only designated IPs, geographic regions, types of computer, etc..

    Those under this require use of MFA.




<hr />

<a name="AdminUsers"></a>

## Admin Users & Groups


    <a name="GlobalAdmin"></a>

    ### Global Admin Account

    <strong>Global Administrators</strong>, aka Company Administrators, in Azure AD have access to <strong>all services</strong> that use AAD identities (Microsoft 365 security center, Intune, Microsoft 365 compliance center, Exchange Online, SharePoint Online, Skype for Business Online, etc.).

    REMEMBER: Global Admins get access to Azure resources only after being granted User Access Admin role.

    PROTIP: Don't use the Global Admin account regularly. Set an Activity Alert when it is used. Have no MFA on it. Have 2-5 global admins. <a target="_blank" href="https://www.youtube.com/watch?v=vZ9uQtO7mSU&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=2">VIDEO</a> 

    PROTIP: Global Admin privileges are needed to enable <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">AD PIM (Privileged Identity Management)</a> for a directory.

    So it's important to assign other more specific roles. 


REMEMBER: <a target="_blank" href="https://www.youtube.com/watch?v=10PbGbTUSAg&t=1h26m26s">VIDEO</a>: There is no spanning between AAD and AD RBAC roles:

<img width="1920" height="534" alt="az-roles-vs-aad-roles-1920x534" src="https://user-images.githubusercontent.com/300046/118071390-e7ae6680-b364-11eb-8e73-673e3f5d593e.png">

<a name="Built-inRoles"></a>

## Built-in User Roles for RBAC 

   PowerShell command lists 75 user roles:<br />
   <tt>Get-AzureRMRoleDefinition</tt> 

   * Application Administrators can create and manage all aspects of <a href="#EntApps">enterprise applications</a>, application registrations, and application proxy settings.

   * Application Developers can create application registrations when the “Users can register applications” setting is set to No.

   * Authentication Administrators can set or reset non-password credentials for some users and can update passwords for all users.

   * Azure DevOps Administrators can manage the Azure DevOps policy to restrict new Azure DevOps organization creation to a set of configurable users or groups.

   * Azure Information Protection Administrators have all permissions in the Azure Information Protection service.

   * B2C User Flow Administrators can create and manage B2C User Flows (also called “built-in” policies) in the Azure portal.

   * B2C User Flow Attribute Administrators can add or delete custom attributes available to all user flows in the tenant.

   * B2C IEF Keyset Administrators can create and manage policy keys and secrets for token encryption, token signatures, and claim encryption/decryption.

   * B2C IEF Policy Administrators can create, read, update, and delete all custom policies in Azure AD B2C and therefore have full control over the Identity Experience Framework in the relevant Azure AD B2C tenant.

   * Billing Administrators can makes purchases, manages subscriptions, manages support tickets, and monitors service health.

   * Cloud Application Administrators have the same permissions as the Application Administrator role, excluding the ability to manage application proxy.

   * Cloud Device Administrators can enable, disable, and delete devices in Azure AD and read Windows 10 BitLocker keys (if present) in the Azure portal.

   * Compliance Administrators have permissions to manage compliance-related features in the Microsoft 365 compliance center, Microsoft 365 admin center, Azure, and Microsoft 365 Security & Compliance Center.

   * Compliance Data Administrators have permissions to track data in the Microsoft 365 compliance center, Microsoft 365 admin center, and Azure. Users can also track compliance data within the Exchange admin center,

   * Conditional Access Administrators have the ability to manage Azure Active Directory Conditional Access settings

   * Exchange Administrators have global permissions within Microsoft Exchange Online, when the service is present.

   * Directory Readers can read basic directory information.

   * Groups Administrators can create/manage groups and its settings like naming and expiration policies.

   * Security Administrators have permissions to manage security-related features in the Microsoft 365 security center, Azure Active Directory Identity Protection, Azure Information Protection, and Microsoft 365 Security & Compliance Center.

   BTW, after you follow instructions below on setting up CLI, this Bash command lists all the pre-defined roles:

   <pre><strong>az role definition list -o table --query [].roleName</strong></pre>

   For a count of 260:

   <pre><strong>az role definition list --query [].roleName | wc -l</strong></pre>

   The basic categories of roles are <strong>owner, contributor, and reader</strong>:
   * Owners have full access to all resources, including the right to delegate access to others.
   * Contributors can create and manage all types of Azure resources but can't grant access to others.
   * Readers can view existing Azure resources.
   <br /><br />

<a name="CustomRoles"></a>

## Custom Roles

   Examples of Custom-defined roles are:
   * Reader Support Tickets
   * Virtual Machine operator - can create and manage virtual machines
   <br /><br />

   Let's look at a custom role definition to clarify the terms:
 
   <pre>{
   "Name": "Virtual Machine Operator (Custom)",
   "Id": null,
   "IsCustom": true,
   "Description": "Allows to start and stop (deallocate) Azure VMs",
   "Actions": [
      "Microsoft.Compute/*/read",
      "Microsoft.Compute/virtualMachines/deallocate/action",
      "Microsoft.Compute/virtualMachines/start/action"
   ],
   "NotActions": [
   ]
   "DataActions": [
   ]
   "NotNotActions": [
   ]
   "AssignableScopes": [
      "/subscriptions/SUBSCRIPTION_ID"
   ]
}</pre>


   Role definitions are at the center of this diagram about RBAC (Role-Based Access Control):

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/115958824-50bd5f80-a4c6-11eb-83f8-0cc8e86ca1f2.png"><img alt="az-rbac-524x574" width="524" height="574" src="https://user-images.githubusercontent.com/300046/115958824-50bd5f80-a4c6-11eb-83f8-0cc8e86ca1f2.png"></a>

   REMEMBER: There are four ways to assign resource rights to a user:
   * Direct assignment of user to resources.
   * Group assignment - all AAD group members access rights through user association with a group
   * Rule-based assignment - when a resource owner creates a group and uses a rule to define which users are assigned to a specific resource, attaching a role definition to a user, group, <a href="#SvcPrin">service principal</a>, or managed identity at a particular scope.
   * External authority assignment - such as on-prem. directory of SaaS app.
   <br /><br />

   <a name="SvcPrin"></a>
   
   DEFINITION: Each Service Principal can request an Azure AD token to access Azure resources and assign users and groups.

   <a name="RoleAssignment"></a>

### Role Assignment 

   Access is granted by creating a role assignment.<br />
   Access is revoked by removing a role assignment.

## Resource Providers, Actions, Operations, Permissions, Scopes, Groups, Policies

   <a name="Providers"></a>

   "Microsoft.KeyVault", "Microsoft.Compute", etc. are <strong>providers</strong> 
   which provide the programming to respond or block APIs requesting some functionality.

   <a name="Actions"></a>
   <a name="Permissions"></a>

   Each line under Actions defines a set of <strong>Permissions</strong> permitted.
   Each line under NotActions defines what is denied. 

   <a name="Operations"></a>

   <strong>Operations</strong> (such as read, write, delete, etc.) are carried out by providers.


   PowerShell to process the <a href="#CustomRoles">custom role definition JSON (above)</a>:

   <pre>wget https://...json
   // Get the Subscription ID associated with the current user context:
   $subscription_id = (Get-AzContext).Subscription.id
   // Replace SUBSCRIPTION_ID within JSON file:
   (Get-Content -Path $HOME/customRoleDefinition.json) -Replace 'SUBSCRIPTION_ID', $subscription_id |
     Set-Content -Path $HOME/customRoleDefinition.json
   // Grant assess by creting a role assignment:
   New-AzRoleDefinition -InputFile ./customRoleDefinition.json
   // Confirm:
   Get-AzRoleDefinition -Name 'Virtual Machine Operator (Custom)'
   </pre>


<a name="Scopes"></a>

### Scopes

   The "AssignableScope" in the JSON is illustrated at the lower-right of the diagram.

   <a target="_blank" href="https://portal.cloudskills.io/products/azure-administrator-az-104-exam-prep-course/categories/4743678/posts/8980102">VIDEO</a>:
   After assignment, the SUBSCRIPTION_ID is replaced with the Subscription ID GUID assigned.

   Roles can be <strong>scoped</strong> at several levels (from the Tenant Root Group):

   * Management group (containers) 
   
   * Subscription
   
   * Resource group
   
   * Resource

   Permissions at one level are inherited to child scopes, so<br />
   Permissions are additive: the sum of roles at various levels is what a user can do.

   A user inherits permissions from the <strong>management group</strong> to which the user has been assigned.


### Management Group Policies

1.  Navigate to the "Policy" blade.
2.  Definitions

    In Azure, policies are for evaluating compliance among Resources and their properties, not to control access to resources.

    <a target="_blank" href="https://portal.cloudskills.io/products/azure-administrator-az-104-exam-prep-course/categories/4743678/posts/8980104">VIDEO</a>:
    Policies can be assigned to <strong>scopes</strong> to limit what can be assigned to management levels and change what has been assigned:

    <a target="_blank" href="https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects">Policy effects</a> include Append, Audit, Deny, Modify, etc. Also: Enforce OPA (Open Policy Agent) Constraint and Enforce Rego Policy.

3.  Select a category from Categories dropdown.

    For example: Require a tag and its value on resources

    REMEMBER: Tags do not cascade via inheritance like permissions unless a policy allows that.

    To do remediation, define a Managed Identity.




    <a name="Devices"></a>

    ### Devices on AAD

    A "Registered" device is personally owned and signed in with a personal Microsoft or local account. It can access mobile and Windows 10 but not Windows Servers.

    A "Joined" device exists only in the cloud to access Windows 10 and Windows Server 2019 VMs.

    A "Hybrid" AAD joined device can access on-prem Windows 7, 8.1, 10 and Server 2008 or newer.

    ### Role Assignments

    REMEMBER: Actions are also called "Operations" at different Scopes.

1.  See "Your role"? (avoid using "Global Admin")

1.  <a target="_blank" href="https://www.youtube.com/watch?v=10PbGbTUSAg&t=32m23s">VIDEO</a>:
    Click "+ Add" to create a new Tenant.

    PROTIP: Tenant Type "Azure Active Directory" by itself is actually "B2B" = Business to (2) Business. "B2C" means Business to (2) Consumers, or connection to External Identities on LinkedIn, Google, Facebook, etc.

1.  Cancel out by searching for AAD again.

    Various roles can be can be defined for a tenant - LIMIT: Up to 2,000 roles per individual tenant.

    READ: <a target="_blank" href="https://medium.com/microsoftazure/how-to-perform-role-assignments-on-azure-resources-from-an-azure-devops-pipeline-c9f4dc10d0a4">Role Assignments on Azure Resources from Azure Pipelines</a>



<hr />

## My Azure-quickly

My repo <a target="_blank" href=" 
https://github.com/wilsonmar/azure-quickly">
https://github.com/wilsonmar/azure-quickly</a>
contains automation scripts to invoke instead of manually operating the Azure Portal, so that you can save money by deleting Resource Groups because you can get resources back with just a few commands. Scripts also enable you to stand up resources in different regions/locations. Most scripts in the repo are Bash shell scripts that run natively on MacOS and thus familiar to most developers. PowerShell scripts are used in cases where they are the only solution. 

There are many ways to automate the creation of resources within Azure:
   1. <a href="#VM_GUI">Portal GUI Cloud Shell</a>
   1. <a href="#VM_template">JSON ARM Template</a> with parameter files
   1. <a href="#VM_CLI">CLI</a> Bash scripts (az commands)
   1. <a href="#VM_PS">Powershell</a> ps1 scripts calling Az modules
   1. PowerShell DSC (Desired State Configuration) automation
   1. <a href="#VM_PS_JSON">Powershell</a> running ARM template JSON files
   1. <a href="#VM_Docker">Docker</a> containers
   1. <a href="#VM_Docker">Terraform</a> HCL *.tf files with templating features and advanced logic features)
   1. Helm charts referencing DockerHub or Azure Container Registry (ACR) images
   1. REST API (used <a target="_blank" href="https://azidentity.azurewebsites.net/post/2020/12/15/key-vault-with-the-use-of-vbscript-classic-asp">within a VBScript</a>, curl, C# .NET, Java, Python, NodeJs, etc.
   1. REST API calls in program generated from Swagger/OpenAPI JSON
   1. <a target="_blank" href="https://wilsonmar.github.io/pulumi/">Pulumi Python/C#/Nodejs/Typescript code</a>
   1. Microsoft Bicep (new)
   <br /><br />

Utility script code enable the scripts to run from Linux and Git Shell on Windows laptops. 

The scripts are also useful for learning Azure. 


### Cloud Shell

Bash CLI or PowerShell.

<a target="_blank" href="https://www.youtube.com/watch?v=x2aIVYxim-A&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=6" title="by Dana Epps Oct 3, 2019">VIDEO</a>: Cloud Shell

<hr />

<a name="Automation"></a>

## Automation programmatically

Microsoft provides several mechanisms to automate away manual toil.

   * Bash shell scripts running in CLI
   * PowerShell scripts running in CLI
   * API calls from custom programming languages C#, Go, Java, JavaScript, PHP, PowerShell, Python running in CLI

   * API calls from custom programming running within a container

   * Power apps
   * Azure Power Automation
   * (Serverless) Functions
   <br /><br />

### Azure Power Automation

   * [Azure Automation](https://www.youtube.com/watch?v=9Jv3ThPqVco&list=RDCMUCuB24cID6NnypDWSLe4gfqA&start_radio=1&rv=9Jv3ThPqVco)
   * [Power Automate Add Azure AD users and managers](https://www.youtube.com/watch?v=hrNm4kLeAnY)
   * [Automation of Creating Users with Microsoft Power Automate and Graph API by Nick Romanek](https://www.youtube.com/watch?v=hrNm4kLeAnY)
   * Employee on-boarding process using Microsoft Forms and Flow https://www.youtube.com/watch?v=vYnvQgKSWcg
   <br /><br />

Although deprecated by the <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/automation-hybrid-runbook-worker/">Hybrid Runbook Worker feature</a>,
<a target="_blank" href="https://azure.microsoft.com/en-us/blog/managing-on-premises-systems-with-azure-automation/">
<strong>Azure Automation</strong></a> securely reaches inside VMs in private networks and on-premises to execute PowerShell scripts/commands. It makes use of Windows PowerShell Remoting feature.

However, PowerShell Remoting is not always a viable option.
Where you have Azure-hosted VMs but cannot open a public WinRM port, <a target="_blank" href="https://azure.microsoft.com/en-us/blog/managing-on-premises-systems-with-azure-automation/">
This post</a> presents a PowerShell extension runbook for on-premises VMs by utilizing the Azure VM Agent’s Custom Script Extension. 

## Python

https://learn.microsoft.com/en-us/azure/developer/python/?view=azure-python

   * API calls such as [Create User](https://learn.microsoft.com/en-us/graph/api/user-post-users?view=graph-rest-1.0&tabs=http) from custom programming languages C#, Go, Java, JavaScript, PHP, PowerShell BUT NOT Python

Editors:
* Visual Studio for Mac does not support Python.
* Visual Studio 2022 users: install PTVS (Python Tools for Visual Studio)
* Visual Studio Code users: https://code.visualstudio.com/docs/languages/python

   * https://code.visualstudio.com/docs/python/python-tutorial
   * [On macOS, make sure the location of your VS Code installation is included in your PATH environment variable.](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) in your .bash_profile:

   <pre>export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"</pre>

<hr />

<a name="Blueprints"></a>

## Azure Blueprints

   Blueprints orchestrates deployment of artifacts as policy.

   Blueprints makes use of:
   * Role assignments
   * Policy assignments
   * ARM templates
   * Resource groups
   <br /><br />

   It's like HashiCorp's Terraform, which completely controls and maintains changes.

   * https://github.com/timothywarner/az500/tree/master/blueprints
   * https://github.com/terraform-providers/terraform-provider-azurerm

   TODO: Blueprints handle deny.


<hr />

<a name="CloudAcademyLab"></a>

## Portal Hands-on GUI Lab thru CloudAcademy 

PROTIP: It makes more sense to look at a live example populated with several resources, in context, which is what a CloudAcademy lab provides.

1. <a target="_blank" href="https://cloudacademy.com/library/azure/">cloudacademy.com/library/azure</a> has defined several labs.
1. Search for "Azure".
1. Select a lab for your learning sequence:
   * <a target="_blank" href="https://cloudacademy.com/lab/start-your-first-azure-virtual-machine-windows/connecting-to-the-virtual-machine-rdp/?context_id=524&context_resource=lp">"Start Your First Azure Virtual Machine (Windows)"</a>

   PROTIP: Below are my <strong>alternative enhanced</strong> instructions (which works for macOS):

1. Click the green "Start Lab".
1. PROTIP: <strong>Right-click on "Open Environment"</strong> to select <strong>Open Link in New Window</strong>.
1. Click and hold on the top of the Window to adjust an overlap.
1. If there is another lab account (such as "student-1551-576984@labscloudacademy.onmicrosoft.com"), click the three dots to remove it.
1. Click "Use another account".
1. Switch between the two windows using <strong>command+`</strong> (` on the upper-left of macOS keyboards).
1. In the CloudAcademy screen, click "Copy" icon for Username.
1. In the Azure Signin, paste the email (such as "student-1551-576984@labscloudacademy.onmicrosoft.com"). Click Next.
1. In the CloudAcademy screen, click "Copy" icon for Password.
1. In Azure Signin, click on the Password screen and paste (such as "Ca1_iyvB75Wl"). Click "Sign in".

1. Click the Username account for the lab.
1. Click "Maybe later" for tour for the Azure landing page (Dashboard).


   ### Create Resource in Command Line

1. <img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/general-1-All-Resources.svg">Click the "All Resources" icon for a list.

1. Switch back to the CloudAcademy screen, scroll to bottom to click "Next Step".
1. Click "Resource Group" under the Navigate label.

   <img alt="Resource Group" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-patterns/azure-resource-group-blue.svg">

   PROTIP: Up to 980 resource groups can be created under a Subscription.

1. Click the "cal-xxx-yy" presented.

1. PROTIP: The app for macOS suggested is no longer available in the store. Use one noted in <a target="_blank" href="https://wilsonmar.github.io/rdp/">my tutorial on RDP</a>.

1. <img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/general-17-Home.svg">Click the Azure Portal "Home" (accordion) menu in the upper-left corner.

1. Select "Virtual machines" in the left menu.

1. Click the running VM name in the list for the "Overview" blade.

1. Click "Connect", then "RDP". Click "Download RPD File". 
1. In the pop-up Finder, navigate to a container folder (such as "Projects"), create a folder, and save the RDP file.
1. Switch to Finder and navigate to your RDP file.

<hr />

<a name="MSAccount"></a>

### Microsoft Azure account setup

   * <a target="_blank" href="https://www.youtube.com/playlist?list=PLLasX02E8BPA5IgCPjqWms5ne5h4briK7">YouTube playlist on Azure</a> by Zach Kramer and Steve Michelotti
   <br /><br />

1. PROTIP: Avoid using an email that you use for your own banking, shopping, social media, etc. For continuity with a real cloud, you'll need an email address that you can share and transfer to other people. That's so at a company, you will need to give someone else the password so that if you're ever go on vacation or get "run over a bus", your organization can continue.

   In you're in an enterprise company, get an email adddress from a corporate assets administrator. A different (service) account is often created for each department of responsibility.

   PROTIP: In the name include the month and year in the account name (such as johndoe1901@hotmail.com) for 2019-01 (January). Many <strong>create several email accounts</strong> because each Azure subscription includes a $200 credit to spend on any service for the <strong>first 30 days</strong>, free access to <a target="_blank" href="https://azure.microsoft.com/en-us/free/free-account-faq/">Azure products for 12 months</a>. 

   Azure provide access to more than 25 products that are always free. 


   ### Azure Active Directory (AAD)

   When someone signs up for a Microsoft cloud service subscription (such as Microsoft Azure, Office 365, Microsoft Intune, etc.), a dedicated instance of <strong>Azure AD (Active Directory)</strong> is created automatically. 

   READ: <a target="_blank" href="https://microsoftlearning.github.io/AZ-900T0x-MicrosoftAzureFundamentals/Instructions/Walkthroughs/19-Use%20the%20Azure%20Pricing%20Calculator.html"><img width="20" alt="pricing" src="https://code.benco.io/icon-collection/azure-patterns/calculator-pricing-details.svg"></a> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/active-directory/">Azure Active Directory pricing</a>. 

   Premium P1 features include Password Protection (custom banned password). Dynamic groups requires a Premium P1 license.

   Premium P2 includes all P1 features, plus really cool <strong>"Identity Protection"</strong> with these policies Assignment to all users:

   Additionally, Microsoft 365 subscribers have an additional Azure AD licensing options:
   * Free 500,000 object limit, includes MFA for O365 services
   * $1/mo. Basic for group-base access management with SLAs
   * $6/mo. P1 for conditional access based on device/location & MFA for on-prem. services
   * $9/mo. P2 for Identity Protection, Access reviews, Privileged Identity Management
   <br /><br />

   * Multi-factor authentication registration policy to Require MFA

   * User risk remediation policy to require password change, with review of number of users impacted

   * Sign-in remediation policy to automate analysis of signals from each sign-in, both real-time and offline, and calculates a risk score based on the probability that the sign-in wasn't performed by the user. Administrators can decide based on this risk score signal to enforce organizational requirements. Administrators can choose to block access, allow access, or allow access but require multi-factor authentication. If risk is detected, users can perform multi-factor authentication to self-remediate and close the risky sign-in event to prevent unnecessary noise for administrators.

   * Investigate risks using data in the portal.

   * Export risk detection data to third-party utilities for further analysis.

   ### Risk Events

   Risk level and risk detail fields are hidden to those with just the Azure AD Premium P1 edition.

   Advanced detections (such as unfamiliar sign-in properties) are not covered by your license, and will appear under the name Sign-in with additional risk detected. 


   Devices are managed on Azure AD

   Users on another Azure AD (B2B) or public IDP (B2C)


   ### Enterprise discount

   Available to Enterprise customers only: <a target="_blank" href="https://cloudacademy.com/course/understanding-azure-pricing-and-support/planning-and-management/">15% Discounts on Public Prices</a>


   <a name="Tenants"></a>

   ### AD Tenants

   The Azure SaaS service separates different customers into different <strong>tenants</strong> (like tenants in an apartment building). Each tenant is a dedicated, isolated instance of the Azure Active Directory service, owned and managed by an organization. 

   "Isolated" = ISE

   Azure AD supports auth protocols: OAuth, OpenID, SAML, WS-Federation.

2. For birthdate, make up an adult year: 2023 - 22 = 2001

   PROTIP: Write it down for account recovery, such as in a 1Password entry.
   Also write down the date you created the account.

3. You'll need a phone number for multi-factor Authentication.

   PROTIP: Give Googgle Voice the cell number that you've been giving out to people.
   Then get a new phone number from your cell carrier (Verizon, ATT, etc.).
   In Google Voice have that new number ring when someone calls you at your original number.
   Give that new number only to Microsoft.
   This enables you to transfer that new number to someone else without making your friends wonder where you went.

   PROTIP: It's best security that for 3FA you use someone else's phone.
   But as my wife will tell you this can get annoying if you work while she's sleeping with her phone next to her.

4. Get a debit or credit card number.

   BIG PROTIP: Avoid using a personal credit card which can keep charging your card without your approval of specific charges.
   Amazon and Microsoft do not provide anyone you can actually talk to about charges.
   And cancelling your credit card will negatively affect your credit scrore, which results in you paying higher interest rates.

   So get a <strong>pre-paid debit card</strong> to pay for cloud usage.
   Such cards only lets you spend the money you load onto the card. 
   <a target="_blank" href="https://www.bluebird.com/">Bluebird</a> VISA card (by American Express) 
   takes no overdraft fee and no purchase fee.
   Add money (recharge) free at Walmart customer service counters or via a connected checking account.

   Unlike Movo, Bluebird does not have a $4.95 inactivity fee after three months without activity.

5. Create a separate card sub-account for each cloud account.


   <a name="SignUp"></a>

   ### Sign Up for Azure

5. Sign up for Azure:

   <a target="_blank" href="
   https://signup.live.com/signup"><strong>
   https://signup.live.com/signup</strong></a>

6. PROTIP: After defining <strong>5 users</strong>, you are forced to sign-up for and pay for a subscription with your credit card.

   PROTIP: Use address with a zip code that's not associated with your home address, and used only for banking.

   Multiple subscriptions can be created under a single Azure account (Dev, Test, Staging, Production, Logging,  Demo, Training, DR, etc.). This is particularly useful for businesses because:

   DEFINITION: A Subscription is your "bank account" / credit card.

   PROTIP: access control and billing occur at the subscription level, not the account level.

   PROTIP: Each Subscription can only trust a single AAD directory.

   Transfer ownership of a subscription, such as to a central accounting department.

   Add additional subscriptions when you may exceed limits within a subscription: # VNets.


   ### MS Authenticator app

7. Install the <strong>Microsoft Authenticator app</strong> on you smartphone and setup Two-factor authentication to approve access using your phone.

8. Get a unique profile image and <a target="_blank" href="https://account.microsoft.com/profile/edit-picture?fref=home.banner.profile">add picture</a>.


<a name="MobileApps"></a>

### Mobile Apps

1. Setup password on your device.

1. https://azure.microsoft.com/en-us/features/azure-portal/mobile-app/

1. Open the store on your phone and search for "Microsoft Azure":

   On the Apple App Store: https://apps.apple.com/us/app/microsoft-azure/id1219013620?ls=1

   On the Google Play Store: https://play.google.com/store/apps/details?id=com.microsoft.azure

1. Login. <a target="_blank" href="https://www.youtube.com/watch?v=W7lXaQOQhFs">VIDEO</a>

1. Setup MFA

Microsoft has Intune to manage endpoints (mobile and laptops).


<a name="ASM"></a>

### ARM obsoletes ASM

On July 1, 2019, Microsoft fully transitioned from the "classic" (older) Azure Service Management (ASM) when <a target="_blank" href="https://docs.microsoft.com/en-us/azure/multi-factor-authentication/multi-factor-authentication-faq">Multi-factor authentication (through the PhoneFactor Web (PFWeb) portal), API Management, BizTalk, and Managed Cache became available to the Azure Resource Manager (ARM).

ASM had "Cloud Services" and "Affinity Groups"
which is structured with Resource Groups (logical containers)
providing a single-resource point-of-view [i.e. manage a single resource at a time].

ARM includes <strong>parallelization</strong> when creating resources for faster deployment of complex, interdependent solutions. 
ARM also includes granular access control, and the ability to tag resources with metadata.

Also, instead of 2 racks, ARM resources can span 3 racks of computers.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/111055690-eda3cc00-8435-11eb-9563-aa0fb3154d40.png"><img alt="az-arm-interfaces-599x315.png" width="599" src="https://user-images.githubusercontent.com/300046/111055690-eda3cc00-8435-11eb-9563-aa0fb3154d40.png"></a>

ARM handles Authentication for access to back-end Web App, Data Store, Virtual Machines, etc. 


<hr />

<a name="Portal"></a>

## Portal.azure.com GUI


1. On initial (first time) new Subscription entry pop-up: Azure Advisor

   ### Azure Advisor

   On initial entry into portal, Azure greets you with a pop-up about Azure Advisor.

   <a target="_blank" href="https://azure.microsoft.com/en-us/services/advisor/"><img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-patterns/advisor-blue.svg">
   Azure Advisor</a> provides <strong>recommendations</strong> by categories of the "Well-Architected Framework" (but not "monitoring"):
   * Cost
   * Security
   * Reliability
   * Operational excellence
   * Performance
   <br /><br />


   <a name="Dashboard"></a>

   ### Dashboard

0. For <a href="#Dashboard">Dashboard</a>, hold down G and press <strong>D</strong>.

   In the left menu, where is the menu item for Users (the one most often used by Administrators)?

1. PROTIP: Click Dashboard to configure it with Users at the upper-left.
1. Get rid of an item by clicking the "..." to "Remove from dashboard" or New Dashboard.
1. To rearrange location, click the "..." on any item and select "Customize".
1. Click "Edit" from the command bar to search for Users, Add.
1. Click "Save" at the top.


   <a name="LicenseTypes"></a>

   ### License types of Subscriptions

   BTW, billing is associated with <strong>Management Subscriptions</strong> with names such as "Pay-as-you-go..."



   ### Support Plans (with Pricing)

   <a target="_blank" href="https://app.pluralsight.com/course-player?courseId=672143e9-2e2c-49d6-b5f4-6558d88f66e1">VIDEO "Microsoft Azure Pricing and Support Options"</a>

   Submit a support ticket at: <a target="_blank" href="https://portal.azure.com/#create/Microsoft.Support">https://portal.azure.com/#create/Microsoft.Support</a> (email support@microsoftsupport.com)

   <a target="_blank" href="https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview">Support options</a>:

   * Basic: Billing and Subscription support only. "Self-help" technical support.
   
   * Developer <strong>$29/mo.</strong> for 8-hour response to non-Prod. env. issues.
   
   * Standard <strong>$100/mo.</strong> for 4-hour response to Sev B issues for "Business Critical" when you file a business-critical issue with technical support, the earliest you can expect a response from technical support? Within 1 hour
   
   * Professional Direct <strong>$1000/mo.</strong> which adds a ProDirect Delivery Manager who provides architectural guidance, onboarding services, seminars.

   * Premier for "substantial dependence" with a TAM (Technical Account Manager).

   Getting 403 ActiveDirectoryMenuBlade accessing AAD on Portal

0. Right-click on the "Help + Support" box on the Dashboard and select "unpin"
   because you now know you can reach it (in two places).



   <a name="Social"></a>

   ### Social Support Forums about Azure

   * <a target="_blank" href="https://azure.microsoft.com/en-us/support/community/">Azure.microsoft Community Forum</a>

   * <a target="_blank" href="https://social.msdn.microsoft.com/Forums/azure/en-US/home">MSDN</a>

   <a target="_blank" href="https://medium.com/microsoftazure">
   https://medium.com/microsoftazure</a>

   <em>Filtered for Most Votes on Accepted answers:</em>

   * <a target="_blank" href="https://stackoverflow.com/questions/tagged/azure?sort=MostVotes&filters=NoAcceptedAnswer&edited=true">StackOverflow</a>

   * <a target="_blank" href="https://serverfault.com/questions/tagged/azure">Serverfault</a>

   * <a target="_blank" href="https://channel9.msdn.com/Shows/Tuesdays-With-Corey/">Tuesdays with Corey</a> (Sanders, VP of Azure Compute, now Corporate VP of Microsoft Solutions, about Azure on Microsoft's Channel9 video site). <a target="_blank" href="https://twitter.com/search?f=realtime&q=%23AzureTwC&src=typd">#AzureTwC</a>
   


   ### Help + Support

0. There are 3 places you can reach "Help + Support":

   Click the question mark icon at the upper-right corner.

   ![azure help upper right 220x267](https://cloud.githubusercontent.com/assets/300046/25567655/c2642352-2dc0-11e7-9e6d-ef60c659a152.png)

   Support options are also listed behind the smiley face icon.

   There is also a "Help + Support" box on the Dashboard.

   Alternately, scroll down to click <a target="_blank" href="https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview">Help + Support</a> (the person icon in blue).

0. Microsoft calls their business-level oriented collection of implementation guidance <a target="_blank" href="https://www.youtube.com/watch?v=9VJYVITjckw">VIDEO</a>: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/microsoft-cloud-adoption-framework-for-azure/">MS_LEARN</a>: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/">Microsoft Cloud Adoption Framework for Azure"</a>.

   Additional sites:

   https://microsoft.github.io/AzureTipsAndTricks/blog/tip1.html

   ### Categories to get support

   In order to route your support to a specific team, here is a comprehensive list:

   * Azure Active Directory
   * Microsoft Azure Stack
   * Azure Stack Edge
   * Blockchain [discontinued]
   * <strong>Compute</strong>
   * Databases
   * Developer Tools
   * Enterprise Integration [Arc]
   * Intelligence & Analytics [AI & Machine Learning]
   * Internet of Things
   * Microsoft Graph
   * Mixed Reality [Hololens, Mesh]
   * Monitoring & Management
   * <strong>Networking</strong>
   * Security
   * <strong>Storage</strong>
   * Web & Mobile [Edge browser]
   <br /><br />


   ### Lock Box for Support

   For Microsoft people to access a customer's unencrypted data, they are supposed to look into the "Lock Box" where a customer put files they want Microsoft to see.



<hr />

<a name="ARM-Menu"></a>

## ARM Portal GUI Dashboard Tour #

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-overview">DOC</a>:

0. At <a target="_blank" href="https://portal.azure.com/">
   https://portal.azure.com</a>

0. Click the "wheel" icon at the top for Portal Settings:
   
0. PROTIP: If you wear glasses on video calls, reduce glare by clicking "Black" for the dark theme. You may not like the putrid yellow font associated with High Contrast:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/111880191-8c1cb980-896f-11eb-9c8b-86d556a46843.png"><img width="1165" alt="azure-portal-dark-2330x1246" src="https://user-images.githubusercontent.com/300046/111880191-8c1cb980-896f-11eb-9c8b-86d556a46843.png"></a>


   ### GUI Navigation Hubs, Panes, Blades

   DEFINITION: A <strong>Hub</strong> is a category for navigation within the left Azure Portal menu that is opened by clicking the upper-left accordion icon alt.

   Panes that appear on the right are called "blades".
   A <strong>Blade</strong> is a portion of the page that pops up as you navigate in the portal. (Note: A Blade is <strong>contextual</strong> and tied to your navigation. This will become more intuitive as you use the portal.) 

   Opening a series of blades is called a <strong>journey</strong>.


   ### Dock hamburger menu

0. Click the "hamburger" (home) icon at the upper-left corner for English descriptions of each icon on the left edge.

0. Click the "<" icon at top of the separator to collapse ("dock") or expand the text of services listed on the left menu.

   PROTIP: To set its expansion state permanently, click the ‘settings cog’ icon in the top right of portal and click the ‘Choose your default mode for the portal menu’ option. Setting that to docked or undocked.

   <a name="Keyboard_Shortcuts"></a>
   
   ### Left Dock Keyboard Shortcuts

0. PROTIP: To keep things simple, I arrange the FAVORITES menu item alphabetically.

   1. App Services
   2. Advisor
   3. Azure Active Directory
   4. Cost Management + Billing
   5. Function App
   6. Load balancers
   7. Monitor
   8. Security Center
   9. Storage Accounts
   10. (0) Virtual Machines
   <br /><br />

0. ??? Click the <img width="20" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/command-1094-Favorite.svg">star icon so it is gold to enable the service to show on the menu or unselect to remove the service from the bar.

   <img width="20" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/general-17-Home.svg">Home

0. Drag and drop the Categories in a stable sequence and position you can mouse to quickly:

   Example: I drag the "Billing" icon to the top because I manage the money involved.

   <a target="_blank" href="https://www.youtube.com/watch?v=A0uXwdLDzf4">VIDEO</a> 
   PROTIP: If you memorize the number of your menu, you'll never need to mouse to the "hamberger" menu again, avoid being distracted by menu text, and recover screen real estate.

0. Hold down G and press a number to view one of the first 10 menu items.

   <a target="_blank" href="https://www.youtube.com/watch?v=ha2ESFCcERQ&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=15" title="Dec 5, 2019">VIDEO</a>: Many find themselves more productive when they don't have to reach for the mouse. Keeping hands on the keyboard reduces a distraction. Thus, it's impressive wizardry during demos.

0. Click the "?" at the top of the page to click <u>Keyboard shortcuts</u>. 

   In there and in <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-keyboard-shortcuts">DOCS</a>, "G+." means <strong>while holding down the G key</strong>, press the period key, which puts the focus on the ">>" icon so you can press Enter to expand or contract the left menu. Press Tab to cycle down the menu.

   PROTIP: You an use the G key as if it's like the Command/Ctrl key because you're not filling out a form. If you see G appear in a form fill field (such as the browser URL), backspace to clear the field, then press Tab off the form fields and try again.

0. Press Esc to escape from the help window.

0. A reminder of the G key is always present at the top of every Azure screen:<br />
   "Search resources, services, and docs (G+/)", which means hold down G and press / to search.

   PROTIP: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/project/navigation/keyboard-shortcuts?view=azure-devops">Azure DevOps uses more G keys (and M keys as well)</a>.



   <a name="AllServices"></a>

   ### All Services

0. For <a target="_blank" href="https://portal.azure.com/#allservices"><img width="20" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/general-17-Home.svg">All services</a>, hold down G and press <strong>B</strong>.

0. Click "All" for a complete of all services Azure has to offer, arranged within the category order on the left menu.

   PROTIP: This gives you an idea of how vast the Azure offering is, and the product names certification aspirants should know.


   <a name="FullScreen"></a>

   ### Full screen toggle

0. To toggle a window to take up the <strong>whole screen</strong> on Windows PCs: press F11 or Alt+Enter or Windows key + up-arrow. On macOS: hold down command on the right, control on the left, then F (control+command+F). Repeat the keys to un-maximize. This is equivalent to clicking the green "maximize" icon on the upper-left of each app window or double-clicking on the app's title bar. 

   CAUTION: Any window maximized will not be brought up by the keyboard shortcut which cycles through various windows within the app (command+` on macOS; Alt+Tab on Windows PCs). To see the maximized window, you have to cursor near the top edge until the app's menu appears, then pull down the browser's Window menu.

   QUESTION: How to toggle full screen in Azure like on Netflix, which removes menus, breadcrumbs, and command bar? Alt+Space+X on Windows.

0. Switch among windows command+` (at the upper-left corner of the keyboard).
0. To find text on the page, press command+F.



<hr />


<a name="Naming"></a>

## Naming conventions

Advice from Microsoft: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming">Naming conventions</a>:

PROTIP: Define abbreviations, then enforce their use. Abbreviations are needed to keep names short.
Define abbreviations in different human languages if you haven an international crew.
Abbreviations can serve as a way to inform policies, such as locking of production servers.

   1. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations">rg, vm</a> = Resource asset type. 
   2. fin, mktg, product, it, corp = Business unit - organizational element that owns the subscription or workload the resource belongs to. 
   3. navigator, emissions, sharepoint, hadoop = Application or service name of the application, workload, or service that the resource is a part of.
   4. shared, central, client = Subscription type - the purpose of the subscription that contains the resource. 
   5. prod, dev, qa, stage, test = Deployment environment - The stage of the development lifecycle for the workload that the resource supports.
   6. westus, eastus2, westeu = Location/Region - The Azure region where the resource is deployed.
   <br /><br />


<a name="ResourceGroups"></a>

### Resource Groups

   Before any resource can be provisioned, you need a resource group for it to be placed in, for provisioning, monitoring, maintenance.
   Each resource must be in a resource group. 

   Resource groups can be created by using any of the following methods:

### Automation options

   * <a href="#Portal">Azure portal GUI</a>
   * Azure Bash CLI (az commands)
   * Azure Cloud Shell which enable: Azure PowerShell (Az modules)
   * JSON Templates IaC templates (by custom REST API clients)
   * <a href="#Bicep">Azure Bicep (like Terraform)</a>
   * Azure programmatic SDKs using programming languages C# .NET, Java, Python, NodeJs (JavaScript), etc. calling APIs
   <br /><br />

   PROTIP: A resource group can contain resources from <strong>multiple regions</strong>.
   
   PROTIP: When naming Resource Groups, keep in mind that they are used to organize resources so that're easier to <strong>delete</strong>. So limit the number of resources under each one so that you're not blocked from deleting the group because you still need that one resource. So using Resource Groups for each point in the lifecycle makes sense (dev, qa, stage, green, blue, etc.).

   If no dashes are in the name, double-clicking on that name would select the entire name.

   A Resource Group name can be a single character. It can begin with a number.

   PROTIP: In production, design Resource Groups for work groups to have the permissions they need. For example, core infrastructure such as Networking. The destination of logs and metrics should be viewed and managed using a whole differen account than accounts used to create the data.

1. After you get CLI setup, list resource groups created:

   <pre><strong>az group list -o table</strong></pre>

   For more details (SSH, Managed By), remove "-o table".
   See https://docs.microsoft.com/en-us/cli/azure/manage-azure-groups-azure-cli
   and https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-cli

   A resource cannot be split among several resource groups, each be a member of a single resource group. 

References on naming conventions:
   * https://daniel-lumb.medium.com/azure-resource-group-structure-measure-twice-cut-once-565c50e13c9


<hr />

<a name="CLI_setup"></a>

## Your own cloud shell #

1. PROTIP: Click the <strong>browser profile</strong> icon and select the identity you need (if you have multiple accounts). You'll likely have an account based on your Gmail, another for school email, a work email, etc.

   Azure brings up the account based on what it stored the last time you logged in.
   If you don't use browser profiles, you'll have to log off and back again, which is a hassle.

   BTW within each browser profile, you can login to GitHub, Pocket, or other service so your bookmarks is available on all profiles.

1. Go to <a target="_blank" href="https://shell.azure.com/">
   https://shell.azure.com</a>

   ![az-shell-choice-536x232](https://user-images.githubusercontent.com/300046/115872851-82b7be80-a3ff-11eb-8d7b-012dab3ac544.png)

1. Click "Bash" (since we're using CLI scripts).

   If this is the first time, you'll see "You have no storage mounted":

   ![az-shell-no-starge-550x247](https://user-images.githubusercontent.com/300046/115875601-9e709400-a402-11eb-9d22-d9d906f3f766.png)

1. Click "Create storage" to have Azure assign its own names. 

   Optionally, click "Show advanced settings" if you want to specify the Resource Group name for the storage account:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/115131861-7e7f4180-9fb8-11eb-94f2-bbc1cb3d498b.png"><img width="709" alt="az-onboard-shell-storage-1418x328" src="https://user-images.githubusercontent.com/300046/115131861-7e7f4180-9fb8-11eb-94f2-bbc1cb3d498b.png"></a>

   1. For "Cloud Shell region", select your favorite location, such as "West US".
   1. For "Resource group", follow your naming convention.
   1. For "Storage account", follow your naming convention.
   1. For "File share", follow your File naming convention.
   1. Click "Create storage".
   <br /><br />

   PROTIP: Files in your CLI <strong>clouddrive</strong> folder is stored in that <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Storage%2FStorageAccounts">Storage account</a>, beginning from CLI history, etc.

1. In <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResourceGroups">Portal: Resource Groups</a> notice default names created:
   * cloud-shell-storage-westus
   * NetworkWatcherRG
   <br /><br />


   ### az feedback

   PROTIP: If your command doesn't come back, press command+R to reset the browser page.

   Cursor up to retrieve previous commands.

   To open an issue, run: 

   <tt>az feedback</tt>


   ### az interactive

1. <a target="_blank" href="https://youtube.com/watch?v=YlbFQtUFOY8">VIDEO</a>: 
   There is a nifty code completion facility for az commands: 

   <pre><strong>az interactive</strong></pre>

   ![az-onramp-interactive-1000x537](https://user-images.githubusercontent.com/300046/121625006-d920a100-ca2f-11eb-8d7a-acf54906dc0c.png)

1. Press Enter to bypass the "Error loading command module" messages.

1. <tt>az >></tt> is a reminder that within interactive you don't have to type the "az" command, just the sub-command and other parameters.


   ### Home folder commands

1. To see your current folder:

   <pre><strong>pwd</strong></pre>

   If your first name is "wilson" then you'll see:

   <pre>/home/wilson</pre>

1. REMEMBER: The above path is represented by both "~" (tilde) and the variable <tt>$HOME</tt>:

   <pre><strong>cd $HOME; pwd</strong></pre>


   ### CLI Proper Prompt

1. List all files and folders, using to see hidden files as well:

   <pre><strong>ls -al</strong></pre>
   
   <tt>-al</tt> enables display of hidden files such as <tt>.bashrc</tt>

   It's a Linux convention to put a period in front of file names so the operating system knows to treat them as hidden.

1. Copy and paste this string to have the prompt always appear in a consistent place where you have room to type:

   <pre>export PS1="\n  \w\[\033[33m\]\n$ "</pre>

   Let's change it to your taste so it shows up every time you get a Cloud Shell prompt.

   And you will be opening a lot of new sessions.


   ### Time out recovery

   If there is no response in CLI, you probably were timed out (disconnected) automatically.

1. Press Ctrl+R (command+R on a Mac) to refresh, confirm Reload, then click the Cloud Shell again.

   PROTIP: See if the time it takes to do that is about the same as to az login again from your local Terminal/Console.


   ### Edit .bashrc

1. Open the file in a text editor (an instance of Visual Studio Code):

   <pre>code .bashrc</pre>

   Alternately, click the squigly brackets on the line where you select Bash or PowerShell.

1. Edit the string (near the bottom of the file):

   <pre>PS1=${PS1//\\h/Azure}</pre>

1. Optionally: althrough Terraform is pre-installed in Azure Cloud Shell, define an alias so you can type just tf instead of terraform:

   <pre>alias tf="terraform $1"  # provide a parameter</pre>

1. TODO: There are other aliases for your productivity. They save a few microseconds a time,
   but their advantage is to keep your mind focused, avoid task-switching.

1. Near the last line, navigate into the clouddrive:

   <pre><strong>cd clouddrive</strong></pre>

   That's where it's better to git clone repos into.

1. PROTIP: At the bottom of the file, add a # sign. This is because Azure automatically adds to the bottom a line:

   <pre>PS1=${PS1//\\h/Azure}</pre>

   Since that line does not add a new line, the line is interpreted as a comment line.


1. To save and quit, press Ctrl+Q or click the "..." at the top right of the edit box.

   Notice there is now a tilde to display the pwd (present working directory):

1. List all files and folders, using to see hidden files as well:

   <pre><strong>ls -al</strong></pre>

   <tt>-al</tt> enables display of hidden file <tt>.bashrc</tt>

   <tt>clouddrive -> /usr/csuser/clouddrive</tt> shows a redirect to another path

1. PROTIP: Notice that clouddrive is a redirect to the physical folder at:

   <pre><strong>ls -al /usr/csuser/clouddrive</strong></pre>



   ### Git clone my Bash CLI scripts

   Several utility programs come pre-installed in Azure Cloud Shell.
   Git is one of them.

1. Obtain a copy of my repository containing Bash CLI scripts for use in Azure:

   <pre><strong>git clone https://github.com/wilsonmar/azure-quickly
   cd azure-quickly
   </strong></pre>

   NOTE: If you work with a private repo, you'll need to create a SSH key, paste the contents of the public key in GitHub GUI, and use a different command, such as:

   <pre><strong>git clone git-123456@wilsonmar/azure-quickly
   cd azure-quickly
   </strong></pre>

1. To obtain recent changes:

   <pre><strong>git pull
   </strong></pre>


<hr />


<a name="EncryptedPasswords"></a>

## Encrypted Passwords

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/key-vault/secrets/quick-create-powershell">DOCS</a>: <a target="_blank" href="https://pascalnaber.wordpress.com/2020/01/04/backdoor-in-azure-devops-to-get-the-password-of-a-service-principal/">BLOG</a>: <a target="_blank" href="https://stackoverflow.com/questions/57589379/migrate-local-bash-script-with-azure-cli-commands-to-azure-powershell-task-in-az">SlackOverflow</a>:

PROTIP: It's better to use Azure Key Vault, but this is better than storing cleartext in GitHub.

1. In a PowerShell CLI terminal, manually <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/convertto-securestring?view=powershell-7.1">encrypt a secret under your account</a>:

   <pre>$password = 'Super@Secret3Passwordx'
$securePassword = ConvertTo-SecureString -Force -AsPlainText -String $password
   </pre>

   CAUTION: Run the above manually. Do not put the above commands in a script stored in GitHub.

   https://www.pdq.com/blog/secure-password-with-powershell-encrypting-credentials-part-1/

   NOTE: There is no CLI Bash equivalent for this.

1. The value of $securePasswords can now be saved in a file which exports an environment variable. You still should not hard-code encryption keys in code so that it can be cracked over a long period of time by powerful computers.

1. To unencrypted secret (under the same account) within a sample command:

   <pre>$myapp = New-AzADApplication -DisplayName '...' -HomePage 'http://...' -IdentifierUris 'http://...' <strong>-Password $securePassword</strong>
   </pre>

   NOTE: You don't have to unencrypt first. Microsoft's commands handle that for you. Cool, eh?

https://www.guardicore.com/cyber-security-platform/


<a name="Terraform"></a>

## Terraform on Azure

   A Terraform client is pre-installed in Azure Cloud Shell.

   <pre><strong>terraform version</strong></pre>
   
   Ignore the version upgrade message. Azure keeps it up to date as appropriate.

   https://cloudskills.io/courses/terraform-azure
   https://github.com/lukeorellana/terraform-on-azure
   https://github.com/CloudSkills/Terraform-In-Azure-Workshop

   https://www.facebook.com/CloudSkills.io/
   https://blog.cloudskills.io/getting-started-with-terraform-on-azure-tips-and-tricks/

   https://www.udemy.com/course/terraform-on-azure/
   Terraform on Azure

   https://www.udemy.com/course/azure-kubernetes-service-with-azure-devops-and-terraform/
   Azure Kubernetes Service with Azure DevOps and Terraform 


### Bash shell script coding

   <pre>az vm list -g QueryDemo \
--query "sort_by([].{Name:name, Size:storageProfile.osDisk.diskSizeGb}, &Size)" --output table
   </pre>

   <tt>--query</tt> is described https://docs.microsoft.com/en-us/cli/azure/query-azure-cli

   To customize a column name, specify it on the left side before a colon within curly braces:

   <pre>az container list --query "[].{Name:name,Location:location}" --output table</pre>

   The empty brackets indicate the entire set. Put in a number for a specific row.
   A range from 0:3.

   More query techniques are decribed <a target="_blank" href="https://techcommunity.microsoft.com/t5/itops-talk-blog/how-to-query-azure-resources-using-the-azure-cli/ba-p/360147">here</a>.

   NOTE: <a target="_blank" href="https://www.azurecitadel.com/cli/jmespath/">Azure Citadel has a deep tutorial on --query parameters</a>




<hr />

<a name="Create_Resource_Group"></a>

## Create Resource Groups

   DEFINITION: A resource group is a logical container for resources deployed on Azure: virtual machines, Application Gateways, CosmosDB instances, etc. Many resources can be moved between resource groups.  

   Resource groups also define a <strong>scope</strong> for applying role-based access control (RBAC) permissions which limit access to allow only what is needed.

1. Create resource group (under a subscription) for location, after viewing briefings on CLI Bash or Storage (if you haven't already):

   <pre><start>az group create --name $MY_RG --location $MY_LOC
   </start></pre>

   Alternately, for more commentary, use the portal GUI:

1. Optionally: Drag and drop "Resource Groups" Home menu item to the bottom of the list. That's because you can ...
1. PROTIP: Hold down G and press <strong>R</strong> for <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResourceGroups">Resource Groups</a>. 
1. PROTIP: Hold down G and press <strong>,</strong> (comma) to focus on the command bar.
1. If "+ Create" is highlighted, press Enter to invoke it.
1. Select the appropriate <a href="#Subscription">Subscription</a>.
1. Type your Resource group name using your organization's naming conventions:

   PROTIP: Include the region code in the Resource Group Name.

   Subscription code, etc.

   PROTIP: Resource groups have a flat structure: they cannot be nested like Management Groups.

   Deleting a resource group results in deletion of all resources contained within it. So resource groups make it easy to remove a set of resources at once. That's great for non-production environments.

   
   <a name="Location"></a>

   ### Region = Location jmespath queries

   View an <a target="_blank" href="https://build5nines.com/map-azure-regions/"><strong>interactive map</strong> of Azure data centers around the world</a>.

1. If you already know how to use CLI Bash and <a target="_blank" href="https://jmespath.org/specification.html#built-in-functions">jmespath queries</a>, get a count of Azure's regions:

   <pre><strong>az account list-locations --query "[].name" -o tsv | wc -l
   </strong></pre>

   68 is the response at time of writing.

   In 2021, Microsoft is building 100 data centers a year.

1. PROTIP: Beware that some regions are "(stage)", such as this table of regions with "westus" in its name, so this command and its results are not reliable:

   <pre><strong>az account list-locations --query "[?contains(name, 'westus')]" -o table
   </strong></pre>

   <pre>Name          DisplayName        RegionalDisplayName
------------  -----------------  ----------------------
westus2       West US 2          (US) West US 2
westus3       West US 3          (US) West US 3
westus        West US            (US) West US
westusstage   West US (Stage)    (US) West US (Stage)
westus2stage  West US 2 (Stage)  (US) West US 2 (Stage)
   </pre>

1. PROTIP: To list regions, use <a target="_blank" href="https://github.com/blrchen/azure-data-lab/blob/main/Regions.json">github.com/blrchen/azure-data-lab/blob/main/Regions.json</a> which contains metadata about each region shown on <a target="_blank" href="https://www.azurespeed.com/Information/AzureAvailabilityZones">AzureSpeed.com</a>. For example:

   <pre>    <strong>"availabilityZoneCount": 3,
    "availabilityZoneStatus": "3 zones",</strong>
    "displayName": "West US 2",
    <strong>"geography": "US",</strong>
    "latitude": "47.233",
    "longitude": "-119.852",
    "pairedRegion": "West Central US",
    "physicalLocation": "Washington",
    "regionalDisplayName": "(US) West US 2",
    "regionName": "westus2",
    "storageAccountName": "azsptwestus2",
    "regionAccess": true
   </pre>

1. blrchen's response goes beyond what Azure returns in its list all properties (metadata) for the "westus2" region:

   <pre><strong>az account list-locations --query "[?name == 'westus2']" -o json
   </strong></pre>

  <pre>[
  {
    "displayName": "West US 2",
    "id": "/subscriptions/32f0f1ee-690d-4b02-9e58-baa3715aabf7/locations/westus2",
    "metadata": {
      "geographyGroup": "US",
      "latitude": "47.233",
      "longitude": "-119.852",
      "pairedRegion": [
        {
          "id": "/subscriptions/32f0f1ee-690d-4b02-9e58-baa3715aabf7/locations/westcentralus",
          "name": "westcentralus",
          "subscriptionId": null
        }
      ],
      "physicalLocation": "Washington",
      "regionCategory": "Recommended",
      "regionType": "Physical"
    },
    "name": "westus2",
    "regionalDisplayName": "(US) West US 2",
    "subscriptionId": null
  }
]</pre>

1. TODO: Select the Region (aka Location) closest to intended users, for pricing, and have features available. 

   PROTIP: There are differences in prices among regions. "WestUS" is generally the least expensive among US regions.

   PROTIP: Speaker Recognition is currently only supported in Azure Speech resources created in the <strong>westus</strong> region.

   Individual resources created within a Resource Group are placed in the same region.


   ### CLI Naming convensions

   PROTIP: Since so many az commands refer to an Azure Resource Group, my scripts specify Resource Group or Location as the last item, using these naming conventions for environment variables:

   <pre><strong>MY_LOC="eastus"
MY_RG="azuremolchapter2"
az group create --name "${MY_RG}" \
   --location "${MY_LOC}"
   </strong></pre>

   PROTIP: Me standardizing means that you can use a different name safely by doing a "Change All" across all files.

   TOOL: <a target="_blank" href="https://rapidapi.com/blog/how-to-use-geodb-cities-api/">Lookup nearest city given Longitude & Latitude</a> using the <a target="_blank" href="https://geodb-cities-api.wirefreethought.com/docs/api/get-city-details#/">GeoDB API</a>.


   ### Tags

   PROTIP: Even while during individual development, take a few seconds to add tags in resource creation scripts to enable not just security, accounting, and logging processes, which may provide troubleshooting tools for developers from the beginning.

   Each tag is a "name=value" pair such as <tt>Env=Dev</tt>, <tt>Sensitivity=White</tt>, <tt>Dept=Finance</tt>, <tt>Project=Advance1</tt>, <tt>Customer=Acme</tt>, etc. 

1. To create a tag:

   <pre><strong>az resource tag --tags Department=Finance \
    --name msftlearn-vnet1 \
    --resource-type "Microsoft.Network/virtualNetworks" \
    --resource-group "$MY_RG" 
   </strong></pre>

1. Click "Review + create" if you are not using Tags or if the resource doesn't support tags.
1. Click "Next: Tags" if you can specify one according to your Tag Naming Convention:

   LIMIT PROTIPS: Up to 50 Tags can be associated with each resource.<br />
   Tag names are limited to 512 characters.<br />
   Tag names for storage accounts have a limit of 128 characters.<br />
   Tag values can be up to 256.<br />

   Tags are your own metadata for:
   * Searching
   * Viewing
   * Billing
   <br /><br />

   PROTIP: Child resources don’t inherit tags from group level.

   Each tag value is limited to 256 characters for all types of resources. 
   * Environment=Production or Staging or "NPT" (Non-Production/Test)
   * Department or Accounting / cost center Charge Code
   * Geography
   * shutdown=6PM and startup=7AM for automation
   <br /><br />

   Tags are not inherited from parent resources. 

   A resource be associated with up to 50 tags.

0. Click "Create" after "Validation passed".


   ### Lock RG to prevent deletion

   <a target="_blank" href="https://learning.oreilly.com/videos/new-microsoft-az-303/10009AZ303/10009AZ303-AZ303_153">VIDEO</a>

1. Select each production resource group.
1. Click "Locks" menu.
1. Type a name according to naming conventions.
1. Select a Lock Type: "Delete".


   ## More Policies 

   <a target="_blank" href="https://learning.oreilly.com/videos/new-microsoft-az-303/10009AZ303/10009AZ303-AZ303_155">VIDEO</a>:
1. Click <strong>Policies</strong> in the menu within a Resource Group blade.
1. Click Definitions in the menu for a list of pre-defined policies under each scope (Subscription + Resource Group).
1. Click "Policy definition" in the command bar.
   * Field "Definition location" is the Subscription.
   * Each rule is JSON syntax with "if", "not", "then", etc. logic
   <br /><br />
1. Click the blue button to the right of "Policy definition" field for Available Definitions dialog where you can select a Type and Search filter text.
   
   A common policy is Allowed locations.

1. Each policy can be set to Enforced or Disabled.
1. Optionally, define a Managed Identity for remediation.
1. Create.

   Policies can also be defined under each Subscription. <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=ff82e602-05c5-4b71-b907-a011015d2859">VIDEO</a>: All Services -> Management Groups to apply governance conditions (access & policies) above.

   To group policies under an initiative:

1. Click "Assign initiative" in the command bar.


   ### Management Group hierarchy

1. Search All Services for "Management groups".
1. Add Management Group.

   An <strong>initiative</strong> describes a group of policies across different management groups, subscriptions, resource groups.

1. Click the group created and add more groups (up to 6 levels in hierarchy).
1. Under each leaf management group, add a Subscription.

   ![az-onramp-mgmt-grp-657x415](https://user-images.githubusercontent.com/300046/114475982-a20c4b80-9bb6-11eb-9891-2d4e4ceffb46.png)

   Also create management group by using PowerShell, or Azure CLI. 
   PROTIP: Currently, <a href="#ARM_Templates">Resource Manager templates</a> can't be used to create management groups.

   
   ## Policy creation

0. Select the <strong>Policy</strong> service.   

   Policies are rules stating which resources can be deployed to which locations
   * Microsoft provides a number of built-in policies
   * Create custom policies using JSON

   Assign at resource level or resource group level
   * Child resources don’t inherit tags from group level
   
   PROTIP: All resources in a resource group should share the same lifecycle.

0. In the left menu select the <strong>Definitions</strong> pane under the Authoring section.

   You should see a list of built-in policies that you can use. 

0. Click G+ for focusing on "+ Policy" to press Enter to create a custom policy in the New policy definition dialog.

0. Set the Definition location, click the blue .... and select the Subscription for the policy to be stored in, which should be the same subscription as our resource group. Click Select.

0. Back on the New Policy definition dialog, type Name value of Enforce tag on resource.

0. For the Description, enter This policy enforces the existence of a tag on a resource.

0. For <strong>Category</strong> select Use existing and then select the General category.

0. For the POLICY RULE, select all text in the box (command+A), then delete it.
0. Copy and paste the following into the box:

   <pre>{
  "mode": "Indexed",
  "policyRule": {
    "if": {
      "field": "[concat('tags[', parameters('tagName'), ']')]",
      "exists": "false"
    },
    "then": {
      "effect": "deny"
    }
  },
  "parameters": {
    "tagName": {
      "type": "String",
      "metadata": {
        "displayName": "Tag Name",
        "description": "Name of the tag, such as 'environment'"
      }
    }
  }
}
   </pre>

0. Click "Save".

   Uses for policy:

   * restrict which Azure regions you can deploy resources to.
   * restrict which types of virtual machine sizes can be deployed.
   * enforce naming conventions to keep a consistent standard across all Azure resources.
   <br /><br />


   ### Assign policy

   To enable the policy, create an assignment. Assign it to the scope of your resource group, so that it applies to anything inside the resource group.

1. In the policy pane, under the Authoring section on the left, select Assignments.
1. Select <strong>Assign policy</strong> at the top command bar.

1. In the Assign policy pane, click the blue .... for Scope. Select Resource Group. Click Select.

1. For Policy definition, click the blue .... In the Type drop-down, select Custom, select the Enforce tag on resource policy you created, then click Select.

1. Select Next to go to the Parameters pane.

1. On the Parameters pane, for Tag name enter Department.

1. Click "Review + create" then "Create" to create the assignment.






   <a name="NewResource"></a>

   ### New Individual Resource

   DEFINITION: Each Azure resource is an <strong>instance</strong> of a service you have <strong>already provisioned</strong>.

0. For a New Resource, hold down G and press <strong>N</strong> to select a new resource from Azure's <strong>Marketplace</strong> of services.

   NOTE: This is also reached by clicking "+ Create a resource" or Home icon then "+ Create a resource".

   ### Favorites

0. Within the Marketplace of services/resources, clicking the star icon labeled "Favorites" adds the item to the <a href="#Dashboard">Dashboard (described in a section below)</a>.

   ### New Web App
   
   PROTIP: Launching a "Web App" means that you provision a VM (Virtual Machine) which incur charges continuously (until you go broke). A server is used to generate HTML and CSS files as needed (real-time) based on requests from users.

   <a target="_blank" href="https://linuxacademy.com/cp/socialize/index/type/community_post/id/16110">DOC: "Launching a Simple Web App in Azure"</a>


   <a name="NewStaticWebApp"></a>

   ### New Static Web App

   "Static web apps" serve the same (static) HTML and CSS files to all users pre-generated when saved (pushed) to GitHub. This means that users don't have to wait for them to be generated.
   
0. In another browser tab, sign into GitHub and create a repository containing Nuxt.js or other template to generate HTML and CSS files.

0. Scroll down the "Azure Marketplace" menu to click "Web".
0. Click "Static Web App (preview)".
0. Select the Resource Group created already.
0. Type a Name that follows your Naming Convensions. For example, "msftlearn-core-infra-rg-dev" consists of 
   * "msftlearn" for the types of resources 
   * "hr" for Human Resources, "fin" for finance, etc.
   * "core-infra" for what is contained within,
   * "dev" or "prod" for environment
   * "rg" for the type of resource it is (resource group)
   <br /><br />

0. PROTIP: WARNING: Select a Region that's the same as your Resource Group or you'll incur inter-region network charges.
0. For Deployment details: Source, select "GitHub" the default.
0. Click "Sign in with Github" for a pop-up screen to enter the email address you used to create the GitHub account you want to associate.
0. Type the code shown on your mobile 2FA (Authentication) mobile app to <strong>Verify</strong>.
0. Click "Grant" each additional organization/account.
0. Click "Authorize ..." to dismiss the pop-up.

0. You should get an email with subject:

   <pre>[GitHub] A third-party OAuth application has been added to your account</pre>

0. Select the Organization, Repository, Branch created in the step above.


   <a name="AllResources"></a>

   ### All Resources
   
0. Drag and drop <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseAll">All resources</a> in the menu to the bottom of the list because you can reach it without a mouse by holding down G and pressing <strong>A</strong>. 

   That brings up a list of all resources you have already brought to life.


<hr />

<a name="Region"></a>

## Region = Location

1. Go to Azure Resource Explorer:

   <a target="_blank" href="https://resources.azure.com/">https://resources.azure.com</a>

1. To provides API calls and responses. Under your subscription / locations is JSON with logitude and latitudes of each location (region):

   <pre>      "id": "/subscriptions/.../locations/westus3",
      "name": "westus3",
      "displayName": "West US 3",
      "longitude": "-112.074036",
      "latitude": "33.448376"
   </pre>

1. On Google Maps, type in Search as "33.448376, -122.074036".

   Alternately, construct a URL such as:

   <a target="_blank" href="
   https://www.google.com/maps?q=37.819722,-122.478611">
   https://www.google.com/maps?q=33.448376,-122.074036</a>

1. Click to see it's in downtown Phoenix. (For security, that is not the exact location so Amazon can't drop a bomb on it).




### Install Azure AD Module

1. In Windows, right-click run as Administrator.

1. On PowerShell:

   <pre><strong>install-module -name azuread -Force
   </strong></pre>

   PROTIP: Module names are not case sensitive.

   <pre>Untrusted repository
You are installing the modules from an untrusted repository. If you trust this repository, change its InstallationPolicy value by running the Set-PSRepository cmdlet. Are you sure you 
want to install the modules from 'PSGallery'?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): 
   </pre>

1. Type "A" to response above.

1. On PowerShell: Load the module (no response expected):

   <pre><strong>get-module azuread
   </strong></pre>

1. Sign in:

   <pre><strong>Connect-AzureAD
   </strong></pre>

   

   PROTIP: User Role "Global Administrator" can do anything.

   There are many "Limited administrator" roles.


   get-azureaduser


## Access Control (IAM) Roles

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h35m50s">VIDEO</a>

Role Scope of Security Principal (from narrowest)
   * Container within Blob Service
   * Queue
   * Storage Account

   * Resource Group
   * Subscription

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h40m5s">VIDEO</a>
Add Role Assignment Role
   * Owner
   * Contributor - Backup Contributor & Operator
   * Reader'
   * Avere Contributor & Operator
   * etc.

Assign access to:
   * Azure AD user, group, or service principal
   * User assigned managed identity
   * System assigned managed identity
   * App Service
   * Container instance
   * Container Registry Task
   * Data Factory
   * Function App
   * Logic App
   * Remote Rendering Account
   * Virtual Machine
   * Virtual Machine Scale Set
   <br /><br />


<a name="MgmtCerts"></a>

## Management Certificates

Azure uses Management (x509 v3) Certificates (.cer file containing a public key) 
to access resources in an Azure Subscription.

There is a limit of 100 Management certs per Azure subscription (administrator).

   * Development
   * Test 
   * Pre-prod (Staging)
   * Prod


<a name="Subscriptions"></a>

## Subscriptions

<a target="_blank" href="https://www.youtube.com/watch?v=LMAC0IIYSJM&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=17">VIDEO KnowOps</a>

At the <a target="_blank" href="https://portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade">Subscription pane</a>

A <strong>Subscription</strong> is a billing boundary linked to an Azure account
   AND A container for resource groups.

There can be multiple Subscriptions per tenant (e.g. for depts.).
   * Non-prod (for devs)
   * Production (for operations)
   * Multi-region
   <br /><br />

The 2000 role assignments limit per subscription is fixed and cannot be increased.

Subscription types:
   * Azure pass (e.g. with a course)
   * MSDN (Developer Network)
   * Azure trial
   * Pay-as-you-go (most common)
   * Enterprise (involves a minimum commitment)
   <br /><br />


## Management Group for RBAC

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=1h33m1s">VIDEO</a>

Each <strong>Management Group</strong> is a container for one or more subscriptions
   * You can build a hierarchy of these
   * You can assign policies to a management group

for RBAC (Role-Based Access Control)
Inheritance Scope: Management Groups are above Subscriptions above Resource Group container for Resources

Roles: Owner, Contributor, Reader (Observer), User Access Admin
   * User
   * Group in AD
   * Service Principal - security identity used by app services
   * Managed by Azure Identity

Role Assignment of Role Definitions which list operations that can be performed by the Security Principal.

See https://docs.microsoft.com/en-us/azure/role-based-access-control/troubleshooting


## Limits = Quotas

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=15m5s">VIDEO</a>

REMEMBER: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-subscription-service-limits">Quotas (Limits)</a> cannot be increased in FREE subscriptions!


REMEMBER: Azure supports up to 15 tags per Resource Group.

## Pricing Calculator

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=22m55s">VIDEO</a>

Estimate costs of various services.

https://azure.microsoft.com/en-us/pricing/calculator/



## Cloud Shell

<img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-patterns/cloud-shell.svg">


1.  <a target="_blank" href="https://www.youtube.com/watch?v=YlbFQtUFOY8&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=7" title="AZ Interactive mode by Dana Epps Oct 10, 2019">VIDEO</a> Azure provides contextual prompts in their:

    <pre><strong>az interactive</strong></pre>

    Response:

    <pre>This command is in preview and under development. Reference and support levels: https://aka.ms/CLI_refstatus
    Installing the Interactive extension...
    The installed extension 'interactive' is in preview.
    Do you agree to sending telemetry (yes/no)? 
    </pre>                          


### Create AZ Role

1. To create an AZ role in PowerShell, define a JSON file then:

   <pre><strong>az role definition create --role-definition "~/CustomRoles/ReaderShpportRole.json"
   </strong></pre>


<hr />

## AZ API

1. Use the automation bash script for MacOS at 

   https://github.com/wilsonmar/mac-install-all 

   The "mac-install-all.sh" script places a <strong>secrets.sh</strong> file in your machine's home folder.

   <img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-patterns/azure-cli.svg">
   The script takes care of <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli?view=azure-cli-latest">installing the azure CLI</a>

4. Edit the file there (not in the repo directory).

   If in the secrets.sh file the TRYOUT string is edited to contain a known value for a module, that would be executed.

   To execute all modules:

   <tt>TRYOUT="az-vm"</tt>

   Alternately, to execute only one or a few modules, for example:

   <tt>TRYOUT="az-vm"</tt>

   ... the Bash script has been programmed to create an instance using az cli commands rather than manually copied and pasted onto a 
   <img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-patterns/cloud-shell.svg"><a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-shell/overview?view=azure-cli-latest">Azure Cloud Shell</a> instance launched on an internet browser as described (using command+shift+V) at:

   <a target="_blank" href="
   https://docs.microsoft.com/en-us/cli/azure/azure-cli-vm-tutorial?view=azure-cli-latest">
   https://docs.microsoft.com/en-us/cli/azure/azure-cli-vm-tutorial?view=azure-cli-latest</a>

   * Log in
   * Create a resource group
   * Create a virtual machine
   * Get VM information with queries
   * Set environment variables from CLI output
   * Create the new VM on an existing public subnet (contoso.ws)
   * Verify public access to one-page static page (like isitchristmas.com)
   * Cleanup (remove vm instance if TRYOUT_KEEP is not specified)
   * Display cost of above
   <br /><br />

   Alternately, if in the secrets.sh file the TRYOUT string is edited to contain this:

   <tt>TRYOUT="az-func"</tt>

   This creates an Azure (Serverless) Function, as described in commands listed at:

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-cli-samples?toc=%2fcli%2fazure%2ftoc.json&bc=%2fcli%2fazure%2fbreadcrumb%2ftoc.json&view=azure-cli-latest">Azure Functions</a>

   The unique aspect of the mac-install-all.sh script is that it does NOT require you to go from screen to screen
   typing steps by step starting from<br />
   https://azure.microsoft.com/en-us/services/functions<br />
   
   The script executes a set of commands for you automatically
   so you get past the installation and configuration confusion,
   bringing your laptop to a point where you can work on changing the sample to the app you want.
   You can then re-run the script, and any changes to the underlying framework would be upgraded if needed.

   Since Azure provides a small amount of free time to all accounts each month under their <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-scale#consumption-plan">Consumption Plan</a>,
   you can do several runs each month without spending any cash. See their <a target="_blank" href="``https://azure.microsoft.com/en-us/pricing/details/functions/">Pricing</a>.

   The "az-func" TRYOUT does all the following:

   Account Password > Login > Tenant > Principal > APP_ID > Roles > Template > stop


   ### Login

1. For attended manual log in:

   <pre><strong>az login </strong></pre>

   The response expected is a new tab to appear in your default browser window asking for your account.

   Alternately, for unattended log in:

   <pre><strong>az login -u "$AZ_USER" -p "$AZ_PASSWORD"</strong></pre>

   If you have not signed up for a <strong>subscription</strong>, you'll get an error such as:
   "No subscriptions were found for 'None'. If this is expected, use '--allow-no-subscriptions' to have tenant level accesses"

   ### Set subscription

   There can be more than one subscription, so set to just to use:

1. The JSON that comes back from <tt>az login</tt> can be retrieved again by:

   <pre><strong>RESPONSE=$( az account list)</strong></pre>

1. Pick out the subscription from the list:
   
   TODO:

1. Set the subscription:

   <pre><strong>az account set --subscription=</strong></pre>

1. Set the cloud:

   <pre>az cloud set --name AzureUSGovernment  # or AzureChinaCloud, or AzureGermanCloud.
   </pre>

   NOTE: Azure China cloud (<a target="_blank" href="https://www.azure.cn/en-us/">azure.cn</a>) is operated by 21 Vianet.

   ### Permissions

   CAUTION: Logging in online imbues you with a full set of permissions that a login using the az command does not fully possess.


   <a name="TenantID"></a>

   ### Tenant ID

2. Once you have logged in, when you sign up for a Microsoft cloud service, Microsoft assigns to your account a <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-howto-tenant">Tenant ID</a>. To obtain it:

   <pre><strong>AZ_TENANT=$(az account show --query 'tenantId' -o tsv)</strong></pre>

   echo $AZ_TENANT to yield something like: <tt>a7a02378-1e4b-4017-972e-9dfe53bc2b2f</tt>

   See: <a target="_blank"><a target="_blank" href="https://msdn.microsoft.com/en-us/library/hh534478.aspx">
   Multi-tenant architecture</a>

   Resource groups (RGs) are used for RBAC, Automated Deployments, and Billing/Monitoring.

   ![az-ad-analogy-480x483-28094](https://user-images.githubusercontent.com/300046/38739019-f324db20-3ef0-11e8-8c29-dd9ea31ddcd4.jpg)

3. Put the Tenant ID value in the <strong>secrets.sh</strong> file
   so that future script runs can check whether that value has already been created.

4. Also note that before getting here the script created a pem file
   PROTIP: Create a .pem file from the rsa.pub file named $SSH_USER created for GitHub:

   <pre>ssh-keygen -f ~/.ssh/$SSH_USER -m 'PEM' -e > $SSH_USER.pem
   chmod 600 $SSH_USER.pem
   </pre>

   This is recommended instead of the alternative of asking Azure to <tt>--create-cert</tt> in command:


   ### Service Principal

5. We next <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?view=azure-cli-latest">
Create a Service Principal</a> using <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/best-practices/naming-conventions">
    Conventions</a> for naming principals under RBAC (role-based access control):

   This Azure CLI (command az) has the subcommand <strong>ad</strong> (for Active Directory)
   to create Service Principals (sp's). We capture the response (in JSON format) in the variable return.

   <pre><strong>return=$(az ad sp create-for-rbac --name "$AZ_PRINCIPAL" \
   --role owner \
   --create-cert \
   --query ['fileWithCertAndPrivateKey, appId, tenant]
   )</strong></pre>

   This JSON file the command puts in your $HOME folder:

   <pre>
{
  "appId": "<em>username</em>",
  "displayName": "ServicePrincipalName",
  "name": "http://<em>your app address</em>",
  "password": <em>passkey</em>,
  "tenant": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
}
   </pre>

   The additional <strong>--query</strong> attribute makes 
   
   The first of three fields (fileWithCertAndPrivateKey) requested in the query is parsed using this command:
   
   <pre><strong>echo return | tr -d "[ ] \" \"" | awk -F, '{ print $1 }'
   </strong></pre>

   To obtain the first part of the response, "/user/wisdom/tmpf14zjme.pem", which is used in subsequent commands.

   <tt><strong>AZ_PEM_LOC="echo return | tr -d "[ ] \" \"" | awk -F, '{ print $2 }'"
   </strong></tt>

   The second item in the query in the command above yields the APP_ID:

   <tt><strong>AZ_APP_ID="echo $return | tr -d "[ ] \" \"" | awk -F, '{ print $2 }'"
   </strong></tt>
   
   The third item is the Tenant ID. Both of these are GUIDs.
   
   The command has additional options:

   <pre>az ad sp create-for-rbac -n "lnx" \
   --role contributor \
   --scopes /subscriptions/ssssssss-ssss-ssss-ssss-ssssssssssss
   </pre>


   ### Login for sure

   <a target="_blank" href="https://www.youtube.com/watch?v=x2aIVYxim-A&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=6&t=3m28s" title="Oct 3, 2019">VIDEO</a>

6. Now we take the
   <a target="_blank" href="https://lnx.azurewebsites.net/directory-roles-for-azure-ad-service-principal/">
   NOTE</a>: 
   
   <pre>az login --service-principal -u "$AZ_APP_ID" \
   -p "$AZ_PEM_LOC" --tenant "$AZ_TENANT"
   </pre>

   https://msdn.microsoft.com/en-us/library/azure/ad/graph/api/api-catalog
   is the older version of
   Microsoft Graph at https://developer.microsoft.com/en-us/graph
   https://dev.office.com/blogs/microsoft-graph-or-azure-ad-graph

   BLAH: The name of the file created contains something like "tmpcgzysdch", a random set of characters. 
   So the script needs to figure out that file name.
   Thus we create the pem file and tell Azure.

5. TODO: Obtain the password text from within the file 

   Create a folder <strong>$HOME/certs/</strong>

6. Put the contents in a file name containing the value in $AZ_APP_ID,
   in the $HOME folder so that it won't have a chance to get pushed to GitHub.

6. Login using credentials built above:

   <pre>az login --service-principal $AZ_PRINCIPAL \
   --username "$AZ_APP_ID" \
   --role owner \
   --tenant "$AZ_TENANT" \
   --password "$HOME/certs/$SSH_USER.pem"
   </pre>
   
   BLAH: The APP_ID and username are the same. Whatever.

7. Assign a role named "Reader" to the APP ID (username):

   <pre><strong>az role assignment create \
   --assignee "$AZ_APP_ID" \
   --role reader</strong></pre>

8. List what resources were assigned to a APP_ID:

   <pre>az role assignment list --assignee $AZ_APP_ID</pre>

   If your APP_ID has not already been created:

9. To specify a module to run (not just install):
   If in the secrets.sh file the TRYOUT string is edited to contain "az":

   <tt>TRYOUT="az"</tt>

QUESTION: limits to total concurrent executions across all functions within a given region to 100?

   ### Regional Zones for Egress

   Regions are grouped into 4 zones for pricing network Egress:

   1. US, US Gov, Canada, Europe, UK, France, Switzerland
   2. East Asia, Southeast Asia, Japan, Australia, India, Korea
   3. Brazil, South Africa, UAE
   4. (DE Zone 1) Germany
   <br /><br />



## Subscriptions

https://www.hashicorp.com/blog/go-big-or-go-small-building-in-azure-caf-with-terraform-cloud
Microsoft's Cloud Adoption Framework enterprise-scale landing zone architecture based on an Azure Virtual WAN network topology. The connectivity subscription uses a Virtual WAN hub.



## Azure AD B2B (Business-to-Business) 
allows an organization to securely share company applications and company services with guest users from other orgs, while retaining control over company data. Auth policies protect corp. data. 

1. Portal Menu > Azure Active Directory. Select yours.
1. Users. +New guest user. Type email. Invite.
1. Guest user clicks "Get Started" in emai;.
<br /><br />


## Azure AD B2C (Business to Consumer)
enables customers can use a registered app with the Identity Experience Framework
defines interacting with external multi-party Identity Providers (IdP's) such as Facebook.

It makes use of SYN cookies and rate & connection limits defined by a Trust Framework policy.

1. +Create a resource: Azure Active Directory B2C
1. Create.
1. An additional B2C Tenant is created
1. Create.
1. Link to subscription.
<br /><br />


<a name="ARM_Templates"></a>

## ARM Templates

A parent template can launch nested templates.


<a name="Bicep"></a>

## Azure Bicep > Terraform

<a target="_blank" href="https://www.youtube.com/watch?v=_yvb6NVx61Y" title="Understanding and Using Project BICEP - The NEW Azure Deployment Technology by John Savill Mar 9, 2021">VIDEO</a>:

Azure Bicep files contain a custom Domain Specific Language (DSL) designed to be easier to read than ARM JSON templates.

<a target="_blank" href="https://github.com/Azure/bicep">https://github.com/Azure/bicep</a>

RESOURCE: <a target="_blank" href="https://github.com/Azure/azure-quickstart-templates/">This</a> contains Azure Resource Manager templates contributed by the community.

https://github.com/Azure/bicep/tree/main/docs/examples

Tooling in Visual Studio Code <strong>transpiles</strong> Bicep files to ARM templates.

QUESTION: What about templating? Pulumi?
Bicep files are like Terraform declarative files.
But instead of state files like Terraform, Azure itself manages state.

As of March 2021, Bicep is not yet integrated into the Portal.

1. Install the Bicep CLI.

<a target="_blank" href="https://www.youtube.com/watch?v=F1zzrnXQwKU">VIDEO</a>

<a target="_blank" href="https://jackwesleyroper.medium.com/azure-bicep-pros-cons-c8121fbfe5db">
BLOG:  Pros & Cons</a>


<a name="Terraform"></a>

## Terraform for Azure

1. On a Mac, install using Homebrew instead of <a target="_blank" href="https://www.terraform.io/downloads.html">Download from HashiCorp website</a> or using 
<tt>brew install terraform</tt>:

   <pre><strong>brew install tfenv
tfenv install latest
   </strong></pre>


<a name="AADC"></a>

## Azure AD Connect

Azure AD Join

Azure Policy

Azure Role-Based Access Control (RBAC)

Azure AD Roles



<hr />

## Resources : Videos

<a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-big-picture">
   Microsoft Azure: The Big Picture</a> 1h 50m Mar 10, 2016
   by Matt Milner
   makes use of VS 2010, which is rather obsolete now.

1. Install in VSCode <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools">Azure Resource Manager Tools</a> for Template language support for Azure Resource Manager JSON files.



## Live events to meet people

WARNING: <a target="_blank" href="https://azure.microsoft.com/en-us/resources/videos/azure-friday-get-ready-for-global-azure-bootcamp-2019/">
The "Global Azure Bootcamp April 27, 2019" experience website 
<a target="_blank" href="https://global.azurebootcamp.net/">
global.azurebootcamp.net</a> has converted to Vue and Google stuff.


## Podcasts:
 
   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/azure-friday-hd-channel-9/id739501868">Azure Friday</a> with <a target="_blank" href="https://azure.microsoft.com/en-us/resources/videos/azure-friday/">videos</a> by Scott Hanselman

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/microsoft-azure-cloud-cover-show-hd-channel-9/id417256457">Microsoft Azure Cloud Cover Show</a>

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/the-azure-podcast/id728193635">The Azure Podcast</a> by Sujit D'Mello

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/channel-9/id73802611">Channel 9</a> for all things Microsoft.

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/azure-tuesdays-with-corey/id1023243001">Azure Tuesdays with Corey</a> by Rick Claus

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/azure-ninjas/id1305172229">Azure Ninjas</a> (Microsoft Global Black Belts)


## Policy

Policy Definition options:
   * Allowed VM SKU's
   * Locations
   * Allowed Resource Type
   * Allowed Storage Account SKUs
   <br /><br />


## ASG (Application Security Group)

ASGs are wrapped by a NSG (Network Security Group) which route traffic.
   * Admins can RDP.
   * Users cannot RDP.


## Delete Subscription, Directory, Tenant

<pre><strong>az group delete --name $MY_RG</strong></pre>

https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/cancel-azure-subscription

https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/directory-delete-howto


## Azure Futures Roadmap

PROTIP: The minimum prior notification will Microsoft give before ending support for products governed by the Modern Lifecycle Policy is 12 months.

* <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/WhatsNewBlade">"What's New" page on Azure Portal</a>

* <a target="_blank" href="https://azure.microsoft.com/en-us/blog/">Azure Blog</a> for Official announcements

* <a target="_blank" href="https://azure.microsoft.com/updates">azure.microsoft.com/updates</a> in now timing out. It has filters for GA vs. futures.

* <a target="_blank" href="https://www.youtube.com/watch?v=9RtzSIrRijg&list=RDCMUCp8lLM2JP_1pv6E0NQ38pqw&index=1">Azure This Week</a> by Lars Klint and <a target="_blank" href="https://www.youtube.com/channel/UCbjgKwnWnGG7sKCPTRgrFcw" title="Gwyn Pena-Siguenza">GPS</a> at <a target="_blank" href="https://www.acloudguru.com/">ACloudGuru.com</a>.


### Product Feature

   "Public preview" means the feature is available for all Azure customers for beta testing.

   GA (General Availability) means

<a target="_blank" href="https://www.youtube.com/watch?v=FsDNmjLIxlI">VIDEO</a>:
<a target="_blank" href="https://azurecharts.com/status">https://azurecharts.com/status</a>
provides clickable "heatmap" status, timeline, a quiz, etc.


## References

https://olohmann.github.io/azure-hands-on-labs/labs/07_iac/iac.html

https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/deployment/how-to-connect-fed-azure-adfs
ADFS (Azure Directory Federated Services)

https://azurelessons.com/

http://www.frankysnotes.com/2019/05/how-to-make-your-deployment-successful.html

https://azurefabric.com/azure-monitor-for-paas-services-where-is-the-ai-and-how-do-i-arm-it/
blog https://azidentity.azurewebsites.net/archive


### URL Shortener

https://channel9.msdn.com/Shows/Azure-Friday/AzUrlShortener-An-open-source-budget-friendly-URL-shortener
by Frank Boucher who created a one-click deploy your own.
http://www.frankysnotes.com/2020/04/how-i-build-budget-friendly-url.html

https://medium.com/marcus-tee-anytime/create-your-own-url-shortener-host-in-azure-almost-free-for-cloud-infrastructure-a74c9cc29720

https://levelup.gitconnected.com/build-a-custom-url-shortener-using-azure-functions-and-cosmos-db-c20e59261375



### ARM tokens

<a target="_blank" href="https://portal.cloudskills.io/products/azure-administrator-az-104-exam-prep-course/categories/4743678/posts/8980102#">VIDEO</a>:

1. A user (or service principal) acquires a token for Azure Resource Manager (ARM).  
2. The token includes the user's group memberships (including transitive group memberships).
3. The user makes a REST API call to Azure Resource Manager with the token attached.
4. ARM retrieves all the role assignments and deny assignments that apply to the resource upon which the action is being taken.
5. ARM narrows the role assignments that apply to this user or their group and determines what roles the user ahs for this resource.
6. ARM determines if the action in the API call is included in the roles the user has for this resource.
7. If the user doesn't have a role with the action at the requested scope, access is not granted. Otherwise, ARM checks if ta deny assignment applies.
8. If a deny assignment applies, access is blocked. Otherwise access is granted.

<a target="_blank" href="https://learn.microsoft.com/en-us/microsoft-365/security/defender/investigate-incidents?view=o365-worldwide#attack-story">Attack Story</a>


## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
