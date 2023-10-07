---
layout: post
date: "2023-10-06"
file: "azure-quickly"
title: "Azure Quickly"
excerpt: "Use this automation to minimize manual toil and mistakes but build-in secure practices and mechanisms to build global enterprises need. Not just for AZ-104, AZ-500"
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

There is a massive amount of information about Azure. YouTube videos and the <a target="_blank" href="https://wilsonmar.github.io/azure-certifications/">certification courses</a> they promote only scratch the surface of all that is needed to get an enterprise up and running.

PROTIP: Here, all in one page, are <strong>hands-on</strong> steps to use the <a href="#Automation">automation</a> I created to build Azure for a whole global enterprise, to minimize manual toil and add secure practices and mechanisms within workflows.

<a target="_blank" href="https://youtu.be/lwReERW_Pqo"><img align="left" alt="youtube-1024x721.png" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696234162/youtube-1024x721_ful6ky.png"><strong>Click here for a <strong>step-by-step</strong> 1-minute YouTube video</strong></a> (with no sound) about the <strong>sequence of work</strong> to setup a whole enterprise with Azure technologies in the cloud:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696662217/aure-onboarding-1716x867_xmm9zp.png"><img alt="aure-onboarding-1716x867.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696662217/aure-onboarding-1716x867_xmm9zp.png"><em>Click image here for full-screen image</em></a> generated from animations in <a target="_blank" href="https://7451111251303.gumroad.com/l/kjhhj">my PowerPoint file on GumRoad</a>.

The set of services to create and manage <strong>resources</strong> (such as network, storage, compute, etc.) in the Azure cloud is called the <strong>Azure Resource Manager</strong> (ARM for short). 

There is <strong>IaC (Infrastructure as Code)</strong> automation to setup a whole enterprise full of users and resources.

But resources are created on the <strong>26th</strong> phase into the setup process because we first need to establish people and "gate-keepers" and technical "guardrails" to limit <strong>Actions</strong> (aka Operations) to minimize mistakes and abuse: <strong>RBAC</strong> (Role-based Access Control), which is defined by: the <strong>profile</strong> defined for each <strong>A. Security Principals</strong> limited by <strong>B. Role Definitions</strong> assigned from <strong>C. Scopes</strong> around resources.

Then, on phase 27, end-user workstations (laptops) would be configured using automation to securely access resources.

1.  <a href="#PeopleInfo"><img align="right" width="30" height="30" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696347985/icon-info-2000x2000_s4f16e.png"><strong>People information</strong></a> is defined: who reports to whom in the people organization, their job titles, and responsibilities, with metadata about each person (such as their geographic location, emails, phone number, carrier for SMS, GitHub account, etc.). This background metadata determines what <a href="#IAM">IAM</a> (Identity and Access Management) structure needs to be set up.

2.  <a href="#Administrators"><img align="right" width="30" height="30" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696347985/icon-info-2000x2000_s4f16e.png"><strong>System Administrators</strong></a> are identified from within the organization, and given <a href="#EscalatedPermissions">escalated permissions</a> to setup workstations and cloud service resources. associated with an <strong>Azure stack</strong> needed. Here is an example of stacks for a global enterprise:

    <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696661164/azure-org-1750x911_m7ylte.png"><img alt="azure-org-1750x911.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696661164/azure-org-1750x911_m7ylte.png"></a>

    The hierarchy defines the path of <strong>escalation</strong> if alerts are not addressed on a timely manner.

    The hierarchy also defines which supervisor takes over if a subordinate is not available. 

    aka "data custodians" 
    Each stack also have, outside of this diagram, a "data owner" who do what managers have always done: assign specific Users to join User Groups.

    To ensure that it's intentional, the more secure enterprises restrict <strong>deletion actions</strong> to be performed only by the administrator above the administrator of a cell in the diagram. 
    
    The work of the "MyCo" Administrator at the top is largely <strong>financial</strong> - aggregating bills for <a href="#Enterprise+discounts">enterprise volume discount</a> reconciliation with the cloud vendor. This team would have the statistics to partner with technical people on cost minimization efforts.

    Inadvertant <strong>Deletion</strong> of data can be disastrous. So it helps to have a specialist centrally setup and manage mechanisms for that. For example, individual users who do not have delete permissions can <strong>reassign</strong> obsolete resources to "Decommissioned". This is to avoid accidental deletion of resources and enable central review before deletion.

    Most enterprises today have a central SOC (Security Operations Center) monitor and respond to incidents in Production enviornments ("PRD").

    The Operations ("Ops") team builds complete Staging ("STG") environment to conduct systems capacity testing and chaos engineering once the QA team has tested individual components. Each of these teams can be from under different Vice Presidents, to serve as liasions to those other organizations.

    Each box in the diagram represents a complete stack consisting of the <strong>permissions scope</strong> hierarchy:

       * Azure Management Groups
       * Azure Subscriptions
       * Azure Resource Groups
       <br /><br />

    ### Paired region backup

    Boxes within dotted lines represents the <strong>paired region</strong> where Azure automatically sends back up data so they can restore everything in case of disaster in any given region. This is a major differentiator for Azure versus AWS which makes each customer do their own backup and recovery. 
    
3.  <a href="#Subscriptions"><img align="right" width="30" height="30" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696347985/icon-info-2000x2000_s4f16e.png"><strong>Azure Subscriptions</strong></a> are defined for <strong>billing</strong>. So admins should have partners to work through financial workflows and oversight.

    The <a href="#FirstSubscription"><strong>first Azure Subscription</strong></a> 

4.  <a href="#Licenses"><img align="right" width="30" height="30" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696347985/icon-info-2000x2000_s4f16e.png"></a>Licenses are paid for by <strong>credit cards or invoices</strong> setup through a Microsoft salesperson.

5.  <a href="#Populate"><img align="right" width="30" height="30" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696347985/icon-info-2000x2000_s4f16e.png"></a>Working at enterprise scale requires a way to quickly <strong>populate</strong> information into Azure, both using samples in test and to prepare for productive use.

6.  <a href="#IaC"><img align="right" width="30" height="30" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696347985/icon-info-2000x2000_s4f16e.png"></a>There are several options for automating <strong>Bicep</strong> scripts to create resources. This is now favored over <strike>Terraform</strike>. Use of Bicep involves transpiling its YAML-formatted contents into the JSON format of <strong>ARM templates</strong>. Also, Microsoft has stopped development of its <a href="#Blueprints">"Blueprints"</a>) in favor of <a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/template-specs?tabs=azure-powershell">Template Specs</a>).

    It takes a lot of effort to configure scripts according to <strong>documentation</strong> for each service. So an important part of automation is to <strong>audit</strong> scripts. <strong>Policies</strong> aim to identify vulnerabilities and logic errors before resources are deployed and thus possibly exposed.

    A common policy is to ensure that <strong>Tags</strong> are included with every resource definition to track billing and was 

7.  An early step in enterprise setup is to establish a <strong>Tenant</strong> directory to house each (organization) of users and resources created under each subscription.

    <a target="_blank" href="https://redmondmag.com/articles/2023/07/11/microsoft-entra-new-products.aspx">In 2023</a> Microsoft renamed from "Azure AD" (for Azure Active Directory) with <a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/compare">Microsoft Entra ID</a> to reference its "Identity as a Service (IDaaS)" solution (like Okta) for apps across cloud and on-premises.

8.  <strong>Licensing</strong> is defined under a Tenant. Enterprises need a paid P1 or P2 license for each user to use Azure securely.

9.  <a target="_blank" href="https://learn.microsoft.com/en-us/azure/governance/management-groups/overview"><strong>Management Groups</strong></a> are used to organize the many Subscriptions that enterprises are likely to have into a <strong>hierarchy</strong>. For <a target="_blank" href="https://docs.google.com/spreadsheets/d/1diCL35orX9cVEgti1eU7aaG_sgyDSPmbQjnXBamUnVc/edit?usp=sharing">example</a>, virtual machines (VMs) within one particular management group can be limited to being created in <strong>specific regions</strong> (soverignties). Policies for each management group apply to all nested management groups, subscriptions, and resources.

10. <a href="#ResourceGroups"><img align="right" width="30" height="30" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696347985/icon-info-2000x2000_s4f16e.png"><strong>Resource Groups</strong></a> are defined to group resources for <a target="_blank" href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming">high-resolution</a> billing and management. <a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/concept-learn-about-groups">Entra</a>

11. <strong>Tags</strong> for every resource are required by policy scans because tags are used to group resources for billing and management.

12. When defining Principals, <strong>Groups</strong> are defined to group users.

13. <a href="#EndUsers"><img align="right" width="30" height="30" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696347985/icon-info-2000x2000_s4f16e.png"><strong>End Users</strong></a> on Entra are usually provisioned by responding to requests from <a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/plan-cloud-hr-provision">external HR systems</a> such as Workday, SuccessFactors, Oracle Peoplesoft.

14. MFA (Multi-Factor Authentication) is defined for each user, so automation is helpful here as well.

15. <strong>Devices</strong>

16. <strong>Roles</strong> are defined to group users for billing and management purposes.

    Here we identify the <strong>assets</strong> 

    <table border="1" cellpadding="4" cellspacing="0">
    <tr><th> _JobTitle </th><th> _AssetRole </th></tr>
    <tr valign="top"><td> Payroll Supervisor </td><td> Payroll metrics </td></tr>
    <tr valign="top"><td> Payroll Clerk </td><td> Process Payroll </td></tr>
    <tr valign="top"><td> HR Operations </td><td> Create Payroll Backups </td></tr>
    <tr valign="top"><td> Operations Clerk </td><td> Restore Payroll Backups </td></tr>
    <tr valign="top"><td> Archive Manager </td><td> Delete Payroll Backups </td></tr>
    </table>


17. Service Principals are defined for use by 

18. API-calling applications to access resources.

    <strong>Permanent active access</strong> permissions are dangerous to grant because they can be <strong>stolen</strong>. So <strong>Just-in-time</strong> temporary access is provided for ad hoc and limited periods of time after approval by a Privileged Role Administrator. The Administrator uses the <a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">PIM (Privileged Identity Management)</a> GUI and CLI.

    Additional "activation", such as a multi-factor authentication (MFA) check, is requested if usage is needed outside the usual time of day, use from a specific IP address, and other criteria.

    The objective is to <strong>minimize</strong> the number of users having 
    Instead, <strong>Just-in-time</strong> access is provided for ad hoc and limited periods of time after approval by a Privileged Role Administrator. The Administrator uses the <a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">PIM (Privileged Identity Management)</a> GUI and CLI.

    (with <a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/governance/licensing-fundamentals">Entra ID Governance licensing</a>) provide users <strong>Just-in-time</strong> access for ad hoc and limited periods of time after approval by a Privileged Role Administrator. The Administrator uses the <a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">PIM (Privileged Identity Management)</a> GUI and CLI.
    
    and scheduled access, alerting, approval workflows for Microsoft Entra roles (including custom roles) and Azure Resource roles.

19. <strong>Azure-Managed Identities</strong> does away with secrets that developers may leave in code when accessing <strong>internal</strong> Azure resources. Instead of static user account keys and connection strings, <a target="_blank" href="https://www.youtube.com/watch?v=sA_mXKy_dKU">VIDEO</a>: the unique reference to blobs and such are associated with the caller's Managed Identity. When its <strong>ObjectID</strong> is given to the

20. <strong>Key Vault</strong> service, it generates its managed identity (based on a Role) that's then encrypted into a <strong>URI</strong> used to retrieve secrets. Brilliant! [<a target="_blank" href="https://www.youtube.com/watch?v=pBcXgJ5hT1o">VIDEO of scripts</a>]

21. <strong>Scopes</strong>

22. Use of some services need to be <strong>Registered</strong>. For example, use of Entra ID B2C needs to be registered to an Entra ID Tenant.

23. <strong>Policy Definitions</strong> are JSON files that define rules for resources. They are used by 

24. <strong>Policy Audits</strong>, which do not block access, but alert about compliance. Their alerts are among other security events and metrics across all subscriptions in the <strong>Security Center</strong> dashboard.

25. Individual policies can be grouped under an <strong>Initiative</strong>.

26. Now, finally, run that job to create resources.

Recap:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696662217/aure-onboarding-1716x867_xmm9zp.png"><img alt="aure-onboarding-1716x867.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696662217/aure-onboarding-1716x867_xmm9zp.png"><em>Click image here for full-screen image</em></a> generated from animations in <a target="_blank" href="https://7451111251303.gumroad.com/l/kjhhj">my PowerPoint file on GumRoad</a>.

<hr />

<a name="Automation"></a>

## Summary of Automation

   * <strong>mac-setup.sh</strong> for <strong>laptop setup</strong> -- installing everything needed on your mac with a single command. Then it makes runs simple to repeat and optionally cleans up after runs.

   * <strong>org-gen.py</strong> generates csv files containing sample values for an organization with a size of your choosing. (100, 1000, 10000, etc.). The data describes a hierarchy of departments, jobs, roles, groups, people, projects, etc. used as the basis for assigning Least-Privilege permissions to resources.

   * <strong>org-chart.py</strong> generates an organization chart graphic from a csv spreadsheet file.

   * <strong>az-info.sh</strong> displays the status of various resources in Azure
   audience.

   * <strong>az-onboarding.sh</strong> automates the creation of all described below:
   <br /><br />


<hr />

Let's dive in with the <strong>technical</strong> now, with <a href="#PeopleStuff">people stuff</a> further down.

   * <a href="#URLs">All URLs for Azure I've found</a> 
   * <a target="_blank" href="https://wilsonmar.github.io/acronyms/">Acronyms (three letters and otherwise)</a>
   * <a href="#naming-abbreviations">Naming Conventions</a>
   * <a href="#FreeSvcs">First year free services on Azure</a>
   <br /><br />

<hr />

<a name="PeopleInfo"></a>

## PHASE 01. People Information

PROTIP: Python program generates an organization chart graphic from a csv spreadsheet file.

1. <a href="#Occupations">Occupations for certs</a>
1. <a href="#Transformation">Digital Transformation?</a>

1. <a href="#URLs">Azure URLs</a>
1. <a href="#Portal">portal.azure.com GUI</a>
1. <a href="#Subscriptions">Subscriptions</a>
1. Support

1. <a href="#automation-programmatically">Automation</a>
1. <a href="#Bicep">Bicep</a> and <a href="#GitHub">GitHub Actions</a>
1. My data generator (departments, jobs, roles, groups, people, projects, etc.) 
1. IAM
1. <a href="#IAM">IAM (Entra ID)</a>, groups, federation

1. <a href="#Futures">Futures Roadmap</a>
1. <a href="#Resources">Resources</a>
1. <a href="#More">More about Azure</a>

Search for what to "REMEMBER" to pass <a target="_blank" href="https://wilsonmar.github.io/azure-certifications">Microsoft's Azure professional certification exams</a>.

{% include whatever.html %}


<hr />

<a name="Administrators"></a>

## Phase 02. Administrators and Data Owners

In security, there is a distinction between "data owners" and "data custodians" (who manage the data).
An inventory needs to be maintained about who has type of access to what data, for escalations and approvals.
   * The Business Managers who own apps and the data they contain.
   * The IT Managers who manage the infrastructure (servers, storage, network, etc.) on which the apps run.
   * The Administrators who manage the apps and the data they contain.
   <br /><br />

In Azure, there is a distinction between "subscription owners" and "subscription administrators" (who manage the subscription).

    Microsoft's "Security Service Edge (SSE)" solution facilitates applying Conditional access policies across organizational resources and apps.

    REMEMBER: Azure itself does not allow Global Administrators to be used for production work. Instead, <strong>Conditional Access</strong> is used to grant permissions to users and groups.

https://learn.microsoft.com/en-us/cli/azure/manage-azure-subscriptions-azure-cli

<a name="Occupations"></a>

### Technical Occupation Groups

Microsoft has defined their <a target="_blank" href="https://wilsonmar.github.io/azure-certifications">Azure certification exams</a> based on these generic occupations:

   * (Azure) Administrator (of IAM, etc.)
   * (Azure) Developer
   * (Azure) Solution Architect

   * Data Engineer
   * AI Engineer

   * Business Analyst
   * Business User (Dynamics, Salesforce, etc.)
   <br /><br />

PROTIP: This grouping is different from the <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles">Administrator role permissions in Entra</a> (formerly Azure Active Directory).

   MY OPINION: I think job roles should be multi-select checkboxes.
   This segregation also adds to duplicating material for each.

   QUESTION: How can these occupational roles be added among properties for individual users? 


<a name="Strategies"></a>

### Top-down strategy

To enable IT people to do their job safely, securely, and efficiently, below is what their management should do.

<a target="_blank" href="https://techcommunity.microsoft.com/t5/video-hub/top-10-best-practices-for-azure-security/ba-p/1698837">VIDEO</a>:
<a target="_blank" href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/secure/security-top-10">Azure Top Security Best Practices</a> identifies these <strong>lifecycle stages</strong>:

   1. Sponsorship and Delegation
   2. Governance
   3. Readiness and Security Awareness
   4. Policy Enforcement
   5. Continuous Monitoring
   <br /><br />


<a name="MCRA"></a>

### Efforts by Organizational Level

<a target="_blank" href="https://www.youtube.com/watch?v=6iYxNm3TOiI&list=PLtVMyW0H7aiOQwZSsn2d-tg2z729ce1BZ" title="MCRA Intro by Mark Simos, Microsoft Chief Security Advisor">VIDEO</a>: Microsoft's overarching <a target="_blank" href="https://aka.ms/MCRA/">Cybersecurity Reference Architecture (MCRA)</a> contains an overwhelming number of diagrams in the <a target="_blank" href="https://github.com/MicrosoftDocs/security/blob/main/Downloads/microsoft-cybersecurity-reference-architectures.pptx?raw=true">PowerPoint file</a> covered by <a target="_blank" href="https://learn.microsoft.com/en-us/security/ciso-workshop/the-ciso-workshop-videos">videos</a> in <a target="_blank" href="https://learn.microsoft.com/en-us/security/ciso-workshop/the-ciso-workshop">Microsoft's CISO Workshop</a>.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690387881/azure-guides-1158x439_zyhcb2.png"><img alt="azure-guides-1158x439.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690387881/azure-guides-1158x439_zyhcb2.png"><br /><em>Click image for full page</em></a>

Each Cloud Service Provider (GCP, AWS, Azure, etc.) presents different, but similar, <a target="_blank" href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/secure/">Cloud Adoption Framework (CAF)</a>
and <a target="_blank" href="https://learn.microsoft.com/en-us/azure/well-architected/security/overview">Well-Architected Framework</a>.


<hr />

<a name="AdminUsers"></a>

## PHASE 02. Admins 

<a name="GlobalAdmin"></a>

### Global Admin Account

   <strong>Global Administrators</strong>, aka Company Administrators, in Entra ID have access to <strong>all services</strong> that use AAD/Entra identities (Microsoft 365 security center, Intune, Microsoft 365 compliance center, Exchange Online, SharePoint Online, Skype for Business Online, etc.).

   REMEMBER: Global Admins get access to Azure resources only after being granted User Access Admin role.

   PROTIP: Don't use the Global Admin account regularly. Set an Activity Alert when it is used. Have no MFA on it. Have 2-5 global admins. <a target="_blank" href="https://www.youtube.com/watch?v=vZ9uQtO7mSU&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=2">VIDEO</a> 

   PROTIP: Global Admin privileges are needed to enable <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">AD PIM (Privileged Identity Management)</a> for a directory.

   So it's important to assign other more specific roles. 

<a name="EscalatedPermissions"></a> 

### User Access Admin Role permissions

To work with <strong>Management Groups</strong>, in Azure RBAC the Global Administrator assigns him/herself the role "User Access Administrator" which has access to the root scope (/) with access to all Management Groups, Subscriptions, Resource Groups in the Tenant:

<pre>az role assignment list --role "User Access Administrator" --scope "/"
az rest --method post --url "/providers/Microsoft.Authorization/elevateAccess?api-version=2016-07-01"
az account management-group entities list
az account management-group list
</pre>

Alternately, in the Console GUI:
1. Get to the Entra ID service (formerly Azure Active Directory), Properties:

   https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Properties

1. Click the slider "can manage access to all Azure subscriptions and management groups in this tenant" to "Yes".
1. Save.
1. Log out and in again.
1. Get to your Subscription.

   https://portal.azure.com/#view/Microsoft_Azure_Billing/SubscriptionsBlade

1. Click "Access Control (IAM)", "View my access" to see "User Access Administrator" listed among Role Assignments.
1. Get to "Management groups"

   https://portal.azure.com/#view/Microsoft_Azure_ManagementGroups/ManagementGroupBrowseBlade/~/MGBrowse_overview
   
1. Click "Start using management groups".
1. In Overview: your entities:




### Security Jobs To Be Done

How the <a target="_blank" href="https://aka.ms/SecurityRoles">concerns</a> of each organizational role type/team relate with others, from Plan (Governance) to Build to Run (Operations) stages:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690410983/azure-security-roles-1883x903_j2yehb.png"><img alt="azure-security-roles-1883x903.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690410983/azure-security-roles-1883x903_j2yehb.png"><br /><em>Click image for full page</em></a>

PROTIP: Who covers each of these concerns where you work?
Not having an individual/department designated for each responsibility below is often the reason why it doesn't get done and thus creates vulnerabilities not addressed.

   * Board (of corporate directors)
   * Management (Business Model, Vision, Strategies, Objectives, Policies, Budget: Staffing, Tools, Training)

Security Leadership:
   * PMO (Program Management Office)
   * Leadership and Culture
   * Risk Management
   * Policy & Standards

Compliance Management:
   * Privacy & Compliance Requirements
   * Compliance Reporting
   * Technical Policy Monitoring

Security Architecture:
   * Requirements Translation
   * Architecture & Risk Assessments
   * Technical Policy Authoring

Security Posture Management: Monitor & Remediate Risk
   * User Education & Awareness, Insider Risk
   * Dev Education & Awareness, App Security, Data Security
   * Identity & Key Management: Admin. Security, Identity System Security
   * IT Operations: Infra & Endpoint: Deploy tools, Mitigate Vulnerabilities
   * OT (IoT) Operations
   
Security Operations Center (SOC):
   * Incident Preparation: Risk Scenarios, Practice Exercises
   * Incident Management: Incident Response, Threat Hunting

Other Departments:
   * Threat Intelligence

PROTIP: Define abbreviations for each above.


<hr />

<a name="Naming"></a>

### Naming Abbreviations

REMEMBER: <strong>Resource names are limited to 64 characters.</strong>

PROTIP: Abbreviations are needed to keep names short. 
Abbreviations can serve as a way to inform policies, such as locking of production servers.
Define abbreviations in different human languages if you have an international crew.

Based on <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming">Microsoft's advice on naming conventions</a>:

Use in this order:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1691185898/az-resc-naming-3254x1322_vxg0ni.png"><img alt="az-resc-naming-3254x1322.png" width="650" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1691185898/az-resc-naming-3254x1322_vxg0ni.png"><br /><em>Click image for full page</em></a>

   1. fin, mktg, prd, it, sec, corp = <strong>Business division: organizational element</strong> that owns the subscription or workload the resource belongs to. 

   1. shared, central, client = <strong>Subscription type</strong> - the purpose of the subscription that contains the resource. 
   
   1. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations">rg, vm, etc. = <strong>Resource type</strong></a> for each Microsoft service. 
   
   1. navigator, emissions, sharepoint, hadoop = <strong>Workload</strong> (Application or service name that the resource is a part of.
   
   1. prd (production), dev, tst, qa1, stg (staging) = <strong>Environment</strong> for each phase in the lifecycle of the workload toward productive use. [<a href="#EnvDifferences">Differences</a>]
   
   1. westus, eastus2, westeu = <strong>Region</strong> - The Azure region where the resource is deployed. <a href="#PickRegions">Pick a  region</a>

   1. 001, 002, etc. <strong>Instance</strong> - A number or other identifier that distinguishes the resource from other resources of the same type in the same <a href="#ResourceGroups">resource group</a> and region.

   * Additional fields are geographies: city, country, state, etc.

These are used within <a href="#Bicep"><Bicep</a>, and other IoC. For example:

   <pre>var vnetName= 'vnet-${env}-${region}-${instance}'
   var subnetName = 'subnet-${env}-${region}-${instance}'
   </pre>

PROTIP: Stable names make for less rework and mistakes with <strong>Dynamic group membership rules</strong> used to automatically assign permissions to resources. Example:

   <ul><pre>(user.department -eq "it") and (user.city -eq "Manhattan") and (resource.type -eq "Microsoft.Compute/virtualMachines")</pre></ul>

Bicep and ARM template module for keeping a consistent Azure resource naming convention:

   * https://4bes.nl/2021/10/10/get-a-consistent-azure-naming-convention-with-bicep-modules/ using<br />https://github.com/Ba4bes/Bicep-NamingConvention
   * https://github.com/nianton/azure-naming
   * https://piusdannyongesa.medium.com/implementing-a-consistent-naming-convention-with-azure-bicep-2d7c8611b523

<hr />

<a name="Assumptions"></a>

### Mindsets and Assumptions (Awareness)

PROTIP: Many don't take security "seriously" because they haven't fully grasped these realities: <a target="_blank" href="https://learn.microsoft.com/en-us/security/zero-trust/ten-laws-of-security#10-laws-of-cybersecurity-risk">"Laws of Cybersecurity Risk"</a> and Security:

1. <strong>Security success is ruining the attacker ROI</strong> - Security can’t achieve an absolutely secure state so deter them by disrupting and degrading their Return on Investment (ROI). Increase the attacker’s cost and decrease the attacker’s return for your most important assets.

2. <strong>Not keeping up is falling behind</strong> – Security is a continuous journey, you must keep moving forward because it will continually get cheaper and cheaper for attackers to successfully take control of your assets. You must continually update your security patches, security strategies, threat awareness, inventory, security tooling, security hygiene, security monitoring, permission models, platform coverage, and anything else that changes over time.
   * An out-of-date antimalware scanner is only marginally better than no scanner at all.
   <br /><br />

3. <strong>Productivity always wins</strong> – If security isn’t easy for users, they'll work around it to get their job done. Always make sure solutions are secure and usable.

4. <strong>Attackers don't care</strong> - Attackers will use any available method to get into your environment and increase access to your assets, including compromising a networked printer, a fish tank thermometer, a cloud service, a PC, a Server, a Mac, a mobile device, influence or trick a user, exploit a configuration mistake or insecure operational process, or just ask for passwords in a phishing email. Your job is to understand and take away the easiest and cheapest options as well as the most useful ones (for example, anything that leads to administrative privileges across many systems).

5. <strong>Ruthless Prioritization is a survival skill</strong> – Nobody has enough time and resources to eliminate all risks to all resources. Always start with what is most important to your organization, most interesting to attackers, and continuously update this prioritization.

6. <strong>Cybersecurity is a team sport</strong> – Nobody can do it all, so always focus on the things that only you (or your organization) can do to protect your organization's mission. For things that others can do better or cheaper, have them do it (security vendors, cloud providers, community).

7. <strong>Your network isn’t as trustworthy as you think it is</strong> - A security strategy that relies on passwords and trusting any intranet device is only marginally better than no security strategy at all. Attackers easily evade these defenses so the trust level of each device, user, and application must be proven and validated continuously starting with a level of <strong>Zero Trust</strong>.
   * If a bad actor has unrestricted physical access to your computer, it's not your computer anymore.
   * If a bad actor can persuade you to run their program on your computer, it's not solely your computer anymore.
   * If a bad actor can alter the operating system on your computer, it's not your computer anymore.
   * If you allow a bad actor to run active content in your website, it's not your website anymore.
   <br /><br />

8. <strong>Isolated networks aren’t automatically secure</strong> - While air-gapped networks can offer strong security when maintained correctly, successful examples are extremely rare because each node must be completely isolated from outside risk. If security is critical enough to place resources on an isolated network, you should invest in mitigations to address potential connectivity via methods such as USB media (for example, required for patches), bridges to intranet network, and external devices (for example, vendor laptops on a production line), and insider threats that could circumvent all technical controls.
   * Absolute anonymity isn't practically achievable, online or offline.
   <br /><br />

9. <strong>Encryption alone isn’t a data protection solution</strong> - Encryption protects against out of band attacks (on network packets, files, storage, etc.), but data is only as secure as the decryption key (key strength + protections from theft/copying) and other authorized means of access.
   * Encrypted data is only as secure as its decryption key.
   * Weak passwords trump strong security.
   <br /><br />

11. <strong>Technology doesn't solve people and process problems</strong> - While machine learning, artificial intelligence, and other technologies offer amazing leaps forward in security (when applied correctly), cybersecurity is a human challenge and will never be solved by technology alone.
   * Technology isn't a panacea.
   * A computer is only as secure as the administrator is trustworthy.

<hr />

<a name="Transformation"></a>

### What Does Security Want?

NOTE: Many land on this as part of their organization's effort to transition to make use of the public cloud.


Major <strong>Objectives</strong> (What, Why, Who, How activities):

1. People: Educate teams about the cloud security journey
2. People: Educate teams on cloud security technology

3. Process: Assign accountability for cloud security decisions
4. Process: Update incident response processes for cloud
5. Process: Establish security posture management

6. Technology: Require passwordless or multifactor authentication
7. Technology: Integrate native firewall and network security
8. Technology: Integrate native threat detection

9. Architecture: Standardize on a single directory and identity
11. Architecture: Use identity-based access control instead of keys
11. Architecture: Establish a single unified security strategy
<br /><br />

There is also "Zero Trust" (aka.ms/zerotrust, aka.ms/ztbizplan, aka.ms/ztguide)
   * <strong>Verify identity</strong>, location, context explicitly (detect anomalies)
   * Use <strong>least-privilege</strong> (JIT, Just Enough) access with adaptive policies
   * <strong>Assume breach</strong> (segment access, encrypt, alert variation posture)
   <br /><br />


### Out-sourcing

Not a lot of people <a target="_blank" href="https://www.infoworld.com/article/2903436/make-sense-of-cloud-service-brokers.html">talk about this</a>, but a Cloud Management Platform (CMP) from a CSB (Cloud Service Broker such as AppDirect, Ensim, Gravitant, Jamcracker, Parallels, Ostrato, ServiceNow, BMC, etc.) is used by enterprises to provide provisioning governance, self-service, usage chargeback, and policy enforcement across multiple cloud vendors. 


<a name="MCSB"></a>

### Security Baselines

A <strong>security baseline</strong> is a snapshot in time of a system's current configuration (defining specific OS-level settings, installed apps, app configurations, users, etc.). Baselines are created as the basis for determining what settings were changed (and when).


<a name="SecControls"></a>

### Security Controls in Benchmarks

Several organizations have defined for the industry specific <strong>"controls"</strong> (<strong>improvement actions</strong>):
   * <a target="_blank" href="https://www.cisecurity.org/cis-benchmarks">CIS (Center for Internet Security) Controls v8 Benchmarks</a>
   * NIST SP 800-53 RC4
   * PCI-DSS v3.2.1
   <br /><br />

A <strong>benchmark</strong> is an individual check (evaluation) of a system's setting, such as the patch level of an application installed, to determine whether best practices (security controls) are employed (which in turn should reduce the attack surface of the system).

In <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/overview">2021</a>, Microsoft published its prescriptive best-practice framework in its MCSB (<strong>Microsoft Cybersecurity Security Benchmarks</strong>), latest version 3 as of March 30, 2023.
the MCSB aims to improve the security of cloud-centric workloads, data, and services on Azure, perhaps in multi-cloud environments. 

Microsoft grouped its definition of security controls under <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/overview
">12 Control Domains</a>. Codes (in parentheses) for each control domain are used as a prefix to name specific controls:

1. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-network-security">Network security (NS)</a>
   * NS-1: Establish network segmentation boundaries
   * NS-2: Secure cloud native services with network controls
   * NS-3: Deploy firewall at the edge of enterprise network
   * NS-4: Deploy intrusion detection/intrusion prevention systems (IDS/IPS)
   * NS-5: Deploy DDOS protection
   * NS-6: Deploy web application firewall
   * NS-7: Simplify network security configuration
   * NS-8: Detect and disable insecure services and protocols
   * NS-9: Connect on-premises or cloud network privately
   * NS-10: Ensure Domain Name System (DNS) security

2. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-identity-management">Identity Management (IM)</a>
   * IM-1: Use centralized identity and authentication system
   * IM-2: Protect identity and authentication systems
   * IM-3: Manage application identities securely and automatically
   * IM-4: Authenticate server and services
   * IM-5: Use single sign-on (SSO) for application access
   * IM-6: Use strong authentication controls
   * IM-7: Restrict resource access based on conditions
   * IM-8: Restrict the exposure of credentials and secrets
   * IM-9: Secure user access to existing applications

3. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-privileged-access">Privileged Access (PA)</a>
   * PA-1: Separate and limit highly privileged/administrative users
   * PA-2: Avoid standing access for user accounts and permissions
   * PA-3: Manage lifecycle of identities and entitlements
   * PA-4: Review and reconcile user access regularly
   * PA-5: Set up emergency access
   * PA-6: Use privileged access workstations
   * PA-7: Follow just enough administration (least privilege) principle
   * PA-8 Determine access process for cloud provider support

4. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-data-protection">Data Protection (DP)</a>
   * DP-1: Discover, classify, and label sensitive data
   * DP-2: Monitor anomalies and threats targeting sensitive data
   * DP-3: Encrypt sensitive data in transit
   * DP-4: Enable data at rest encryption by default
   * DP-5: Use customer-managed key option in data at rest encryption when required
   * DP-6: Use a secure key management process
   * DP-7: Use a secure certificate management process
   * DP-8: Ensure security of key and certificate repository

5. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-asset-management">Asset Management (AM)</a>
   * AM-1: Track asset inventory and their risks
   * AM-2: Use only approved services
   * AM-3: Ensure security of asset lifecycle management
   * AM-4: Limit access to asset management
   * AM-5: Use only approved applications in virtual machine

6. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-logging-threat-detection">Logging and Threat Detection (LT)</a>
   * LT-1: Enable threat detection capabilities
   * LT-2: Enable threat detection for identity and access management
   * LT-3: Enable logging for security investigation
   * LT-4: Enable network logging for security investigation
   * LT-5: Centralize security log management and analysis
   * LT-6: Configure log storage retention
   * LT-7: Use approved time synchronization sources

7. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-incident-response">Incident Response (IR)</a>
   * IR-1: Preparation - update incident response plan and handling process
   * IR-2: Preparation - setup incident notification
   * IR-3: Detection and analysis - create incidents based on high-quality alerts
   * IR-4: Detection and analysis - investigate an incident
   * IR-5: Detection and analysis - prioritize incidents
   * IR-6: Containment, eradication and recovery - automate the incident handling
   * IR-7: Post-incident activity - conduct lessons learned and retain evidence

8. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-posture-vulnerability-management">Posture and Vulnerability Management (PV)</a>
   * PV-1: Define and establish secure configurations
   * PV-2: Audit and enforce secure configurations
   * PV-3: Define and establish secure configurations for compute resources
   * PV-4: Audit and enforce secure configurations for compute resources
   * PV-5: Perform vulnerability assessments
   * PV-6: Rapidly and automatically remediate vulnerabilities
   * PV-7: Conduct regular red team operations

9. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-endpoint-security">Endpoint Security (ES)</a>
   * ES-1: Use Endpoint Detection and Response (EDR)
   * ES-2: Use modern anti-malware software
   * ES-3: Ensure anti-malware software and signatures are updated

11. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-backup-recovery">Backup and Recovery (BR)</a>
   * BR-1: Ensure regular automated backups
   * BR-2: Protect backup and recovery data
   * BR-3: Monitor backups
   * BR-4: Regularly test backup

11. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-devops-security">DevOps Security (DS)</a>
   * DS-1: Conduct threat modeling
   * DS-2: Ensure software supply chain security
   * DS-3: Secure DevOps infrastructure
   * DS-4: Integrate static application security testing into DevOps pipeline
   * DS-5: Integrate dynamic application security testing into DevOps pipeline
   * DS-6: Enforce security of workload throughout DevOps lifecycle
   * DS-7: Enable logging and monitoring in DevOps

12. <a target="_blank" href="https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-governance-strategy">Governance and Strategy (GS)</a>
   * GS-01: Align organization roles, responsibilities and accountabilities
   * GS-02: Define and implement enterprise segmentation/separation of duties strategy
   * GS-03: Define and implement data protection strategy
   * GS-04: Define and implement network security strategy
   * GS-05: Define and implement security posture management strategy
   * GS-06: Define and implement identity and privileged access strategy
   * GS-07: Define and implement logging, threat detection and incident response strategy
   * GS-08: Define and implement backup and recovery strategy
   * GS-09: Define and implement endpoint security strategy
   * GS-10: Define and implement DevOps security strategy
   * GS-11: Define and implement multi-cloud security strategy

Additional details about each control (above) are in Microsoft's Excel spreadsheet file for download at<br />
<a target="_blank" href="https://github.com/MicrosoftDocs/SecurityBenchmarks/tree/master/Azure%20Security%20Benchmark/3.0">azure-security-benchmark-v3.0.xlsx</a>.

REMEMBER: Use of Defender involves <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/defender-for-cloud/">additional charges</a> (to each server, container, database, storage, app service).


<a name="Defenders"></a>

### MS Defender offerings

Microsoft summarizes the "kill chain" of exploits and defenses against them in this diagram: 

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690414718/az-defenders-3360x1602_nw8vql.png"><img alt="az-defenders-3360x1602.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690414718/az-defenders-3360x1602_nw8vql.png"><br /><em>Click image for full page</em></a>

Microsoft has a "Defender" offering for each type of product:

   * <a target="_blank" href="https://www.microsoft.com/en-us/security/business/siem-and-xdr/microsoft-defender-for-identity">MS Defender for Identity</a>
   * <a target="_blank" href="https://www.microsoft.com/en-us/security/business/siem-and-xdr/microsoft-defender-office-365">MS Defender for Office 365</a>
   * <a target="_blank" href="https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-iot">MS Defender for IoT (& OT)</a>
   * <a target="_blank" href="https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-endpoint">MS Defender for Endpoint</a>
   * <a target="_blank" href="https://www.microsoft.com/en-us/security/business/cloud-security/microsoft-defender-devops#">MS Defender for DevOps</a>
   * <a target="_blank" href="https://www.microsoft.com/en-us/security/business/cloud-security/microsoft-defender-cloud">MS Defender for Cloud</a> <a target="_blank" href="https://azure.microsoft.com/en-us/products/defender-for-cloud/">Product</a> [<a target="_blank" href="https://www.youtube.com/watch?v=lGYVMjgn5tY">Intro video</a> Security Seolutions, Work Automation triggers]
   <br /><br />

- Azure Security Center: https://github.com/Azure/Azure-Security-Center reroutes to
- GitHub community: https://github.com/Azure/Microsoft-Defender-for-Cloud
- Azure Defender: https://aka.ms/AzureDefenderForSQL​
- Become an Azure Security Center Ninja: https://aka.ms/ascninja​
- ASC in the Filed Show: https://aka.ms/ascinthefield​
- ASC Labs: https://aka.ms/asclabs
- https://learn.microsoft.com/en-us/security/zero-trust/ten-laws-of-security#10-laws-of-cybersecurity-risk

"Sentinel" is Microsoft's brand name for offerings in <a target="_blank" href="https://wilsonmar.github.io/siem-soar/">SIEM and SOAR</a>.

<a target="_blank" href="https://learn.microsoft.com/en-us/cli/azure/security?view=azure-cli-latest">
az security CLI commands</a> <tt>az security ...</tt>
   * adaptive-application-controls
   * adaptive_network_hardenings
   * alert
   * alert-suppressions-rule
   * allowed-connections
   * assessment
   * atp (Advanced Threat Protection)
   * auto-provisioning-setting
   * automation
   * contact
   * discovered-security-solution
   * external-security-solution
   * iot-alerts
   * iot-analytics
   * iot-solution
   * jit-policy
   * location
   * pricing
   * <a href="#Regulatory+Compliance">regulatory-compliance</a>
   * secure-score-control-definitions
   * secure-score-controls, secure-scores
   * security-solutions
   * setting
   * sub-assessment
   * task
   * topology
   * va (Vulnerability Assessment)
   * workspace-setting
   <br /><br />


### Regulatory Compliance

Progress toward implementing security controls can be illustrated using this:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690385105/azure-defender-1492x1042_lt9imh.png"><img alt="azure-defender-1492x1042.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690385105/azure-defender-1492x1042_lt9imh.png"><br /><em>Click image for full page</em></a>

QUESTION: Interface to organize/track work in <a target="_blank" href="https://wilsonmar.github.io/jira/">Jira</a> or <a target="_blank" href="https://wilsonmar.github.io/azure-devops/#Tasks">Azure DevOps Tasks</a>?

Notice the <a target="_blank" href="https://learn.microsoft.com/en-us/azure/defender-for-cloud/update-regulatory-compliance-packages">regulatory compliance standards</a>:

   * ISO 27001
   * PCI DSS (Payment Card Industry Data Security Standard) v3.2.1
   * SOC TSP
   * HIPAA HITRUST
   * NIST SP 800 S3 R4
   * SWIFT CSP CSCF v2020
   * Azure CIS 1.10
   * ISO 27001-2013
   * CMMC Level 3
   * AWS Foundational Security Best Practices
   <br /><br />


<a name="SecureScore"></a>

### Secure Score Posture Action Categories

   References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=jcrVqFd5KN4&list=RDCMUCGTUbqE3SJiLgtvWjIkSQuQ&start_radio=1&rv=jcrVqFd5KN4&t=5m">How to improve your Secure Score</a>
   <br /><br />

Within M365 Defender is the <a target="_blank" href="https://learn.microsoft.com/en-us/microsoft-365/security/defender/microsoft-secure-score?view=o365-worldwide#how-it-works">Microsoft Secure Score</a> survey app. It's used to define a security posture score (over time) based on whether specific actions have occurred or not. 

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690416862/azure-sec-score-2090x1370_dn2xe9.png"><img alt="azure-sec-score-2090x1370.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690416862/azure-sec-score-2090x1370_dn2xe9.png"><br /><em>Click image for full page</em></a>

A breakdown of actions based on Microsoft's <strong>categories for a Security Posture</strong>:

   * Identity
   * Data
   * Device
   * Apps
   * <a href="#Infrastructure">Infrastructure</a>
   <br /><br />

<em>We need to begin with Infrastructure.</em>

<hr />

<a name="EnvDifferences"></a>

### In Dev vs Prod

In Prod, Key Vault secrets are locked from deletion for 90 days.<br />
In Dev, Key Vault values can be deleted at the discretion of developers.<br />

In Dev, devs can access the Azure Portal interactively to create resources during CI/CD IaC pipeline construction.<br />
In Prod, resources are deployed only by CI/CD pipelines and devs cannot access the Azure Portal interactively.<br />

Devs are limited by policies to a limit of two regions to avoid runaway costs.<br />
Prod configurations usually cover several regions for redundancy and performance to end-customers.



<a name="USGov"></a>

### Azure Government environments

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
   <br /><br />

<a target="_blank" href="https://www.youtube.com/playlist?list=PLLasX02E8BPA5IgCPjqWms5ne5h4briK7">YouTube playlist on Azure (https://aka.ms/AzureGovVideos)</a> by <a target="_blank" href="https://www.linkedin.com/in/stevemichelotti/">Steve Michelotti</a talking with experts from dev, from 2019+. Each is thorough. Much of their advice applies to commercial Azure as well. I list them after reversing the order of the playlist:

1. Azure Friday - Azure Government
1. Azure Government Security
1. Real World Solutions on Azure Government with Machine Learning
1. Mobile Apps Powered by Azure Government
1. How to run containers with Kubernetes on Azure Government
1. How to use Azure Monitor for Azure Government
1. How to use GPUs by NVIDIA on Azure Government for Virtual Machines and AI
1. Cloud Solution Provider Program for Azure Government
1. What is Azure Government?
1. How to get started with Azure Government Data Analytics
1. How to get started with Azure Government Data Protection
1. How to get started with Azure Government Iaas and PaaS
1. How to access & get started with the Azure Government Portal
1. How to publish your solutions to Azure Government Marketplace
1. How to enable Central IT to become a Cloud broker
1. How to use Machine Learning on Azure Government with HDInsight
1. How to use containers for data science on Azure Government
1. Learn about OpenShift on Azure Government
1. Overview of Cosmos DB on Azure Government
1. Overview of Service Health on Azure Government
1. How to set up a secure environment on Azure Government- Part 1
1. How to set up a secure environment on Azure Government - Part 2
1. How to deploy the Azure Resource Manager template
1. How to run the Azure Government PaaS sample
1. How to run the Azure Government Functions sample
1. Real-time data streaming with Event Hubs on Azure Government
1. Build automated workflows with Logic Apps on Azure Government
1. Learn about Serverless technology in Azure Government
1. <a target="_blank" href="https://www.youtube.com/watch?v=Ydgz4QINGNI&list=PLLasX02E8BPA5IgCPjqWms5ne5h4briK7&index=15&t=9m54s">Overview of Managed Identities on Azure Government</a> No secrets rotation.
   * t=9m59s setup using CLI for kv.GetSecretAsync from within VM code to retrieve from Key Vault
   * t=13m23s setup using portal add Web App. Enable Managed Identity. Publish. In Key Vaults, add Access Policy to Web App.
1. Overview of Azure Database for MySQL in Azure Government
1. DoD Impact Level 5 Expansion on Azure Government
1. Advanced Data Security with Azure SQL Database in Azure Government
1. Microsoft Azure Government Secret
1. Data Science Virtual Machine on Azure Government
1. Migrate and Modernize with Kubernetes on Azure Government
1. Bot Service and LUIS on Azure Government
1. Azure blueprints and compliance on Azure Government
1. Azure DevOps Server in Azure Government
1. Cloud Shell in Azure Government
1. Azure Stream Analytics in Azure Government
1. Azure Maps in Azure Government
1. QnA Maker in Azure Government
1. What’s new in Azure Government
<br /><br />

<hr />

<a name="URLs"></a>

### URLs for Microsoft and Azure

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
<tr valign="top"><td> <a href="#AAD">Entra ID</a> </td><td align="right">
   <a target="_blank" href="https://entra.portal.azure.com/">entra.portal.azure.com</a><br />
   <strike>aad.portal.azure.com</strike>
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
   
<tr valign="top"><td> Azure AI Studio </td><td align="right">
   <a target="_blank" href="https://oai.azure.com/portal/">
   https://oai.azure.com/portal</a>
   </td><td> <a target="_blank" href="https://wilsonmar.github.io/microsoft-ai">AI tutorial</a>
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


### URL Shortener

https://channel9.msdn.com/Shows/Azure-Friday/AzUrlShortener-An-open-source-budget-friendly-URL-shortener
by Frank Boucher who created a one-click deploy your own.
http://www.frankysnotes.com/2020/04/how-i-build-budget-friendly-url.html

https://medium.com/marcus-tee-anytime/create-your-own-url-shortener-host-in-azure-almost-free-for-cloud-infrastructure-a74c9cc29720

https://levelup.gitconnected.com/build-a-custom-url-shortener-using-azure-functions-and-cosmos-db-c20e59261375

<a target="_blank" href="https://learn.microsoft.com/en-us/microsoft-365/security/defender/investigate-incidents?view=o365-worldwide#attack-story">Attack Story</a>



<hr />

<a name="Subscriptions"></a>

## PHASE 03. Subscriptions

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



<a name="BrowserProfiles"></a>

### Setup & Use Browser Profiles

Websites (including Azure) store your browser history, what account you logged in, etc. locally in "cookies" associated with your browser account.

That's how you get returned to the last account used when you go back to a website.

PROTIP: Setup <strong>different browser profiles</strong> on the same browser, associated with different profile avatars and colors: <strong>one for each account (email)</strong>.

1. Click your browser's avatar picture at the upper-right corner:

   * The <a href="#MSAccount">Learn account</a> using your personal email (such as at gmail.com).
   * The account associated with your Visual Studio benefit (using your work email)
   * Each of your work accounts (to do your job as an Administrator).
   <br /><br />

1. Do the above for each browser (Google Chrome, Microsoft Edge, Firefox, etc.).

### Free Accounts

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
https://azure.microsoft.com/en-us/free/free-account-faq</a> lists services which Microsoft offers free for the first year:

   * Compute: 750 hours of B1S Linux VMs
   * Compute: 750 hours of B1S Windows VMs
   * Storage: Manage Disks 64 GB x 2
   * Storage SQL: up to 250 GB
   * Storage File: 5GB
   * Storage Blobs: 5 GB
   * Cosmo DB up to 5 GB 400 request units
   * Network bandwidth: 15 GB outbound data transfer
   * AI & Machine Learning services?
   <br /><br />

   TODO: HANDS-ON: Make use of them without spending any money of your own!

The clock is ticking!


### Office 365 Trial Subscription

1. Sign up for Office 365 Trial at 

   https://www.microsoft.com/en-us/microsoft-365/enterprise/office-365-e5?activetab=pivot:overviewtab

1. Click the "Free trial" link and go through the verification steps.

   IMPORTANT: You are assigned an <tt>@onmicrosoft.com</strong> domain and individual account.

1. To view the time remaining within the free period, see 
   
   <a target="_blank" href="https://admin.microsoft.com/adminportal/home?#/subscriptions">
   https://admin.microsoft.com/adminportal/home?#/subscriptions</a>


<hr />

<a name="MSAccount"></a>

## Microsoft Azure account setup

1. PROTIP: Avoid using an email that you use for your own banking, shopping, social media, etc. For continuity with a real cloud, you'll need an email address that you can share and transfer to other people. That's so at a company, you will need to give someone else the password so that if you're ever go on vacation (or get run over or thrown under a bus), your organization can continue.

   In you're in an enterprise company, get an email adddress from a corporate assets administrator. A different (service) account is often created for each department of responsibility.

   PROTIP: In the name include the month and year in the account name (such as johndoe1901@hotmail.com) for 2019-01 (January). Many <strong>create several email accounts</strong> because each Azure subscription includes a $200 credit to spend on any service for the <strong>first 30 days</strong>, free access to <a target="_blank" href="https://azure.microsoft.com/en-us/free/free-account-faq/">Azure products for 12 months</a>. 

   Azure provide access to more than 25 products that are always free. 


   ### Entra (Azure Active Directory)

   In 2023, Microsoft rebranded "Azure Active Directory (AAD)" or "Azure AD" to <a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/new-name">Microsoft Entra ID</a>. [<a target="_blank" href="https://www.youtube.com/watch?v=ThT3n2Yass4">VIDEO</a>]

   > The word "entra" means "entrance" (enter in) in Italian. It's a nod to the fact that Microsoft Entra ID is the gateway to Microsoft 365 and Azure services.

   When someone signs up for a Microsoft cloud service subscription (such as Microsoft Azure, Office 365, Microsoft Intune, etc.), a dedicated instance of <strong>Entra (Azure AD)</strong> is created automatically. 

   READ: <a target="_blank" href="https://microsoftlearning.github.io/AZ-900T0x-MicrosoftAzureFundamentals/Instructions/Walkthroughs/19-Use%20the%20Azure%20Pricing%20Calculator.html"><img width="20" alt="pricing" src="https://code.benco.io/icon-collection/azure-patterns/calculator-pricing-details.svg"></a> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/active-directory/">Entra pricing</a>. 

   https://www.microsoft.com/en-us/security/business/microsoft-entra-pricing

   Microsoft 365 subscribers have additional AAD/Entra licensing options:
   * Entra ID Free has a 500,000 object limit, which includes MFA for O365 services
   * + $1/mo./user Basic for group-base access management with SLAs
   * + $6/mo./user P1 for conditional access based on device/location & MFA for on-prem. services
   * + $9/mo./user P2 for Identity Protection, Access reviews, Privileged Identity Management
   * Entra ID External Identities (B2B/B2C) are licensed separately -> Microsoft Entra External ID
   <br /><br />

   DOTHIS: Recommend how each user can setup MFA. These options are available:
   * Number of MFA denials to trigger account lockout (from 1 to 99)
   * Minutes until account lockout counter is reset (from 1 to 1440)
   * Minutes until account is automatically unlocked (from 1 to 9999)
   <br /><br />

   <strong>Premium P1</strong> (included in Microsoft 365 E3) features include Password Protection (custom banned password). Dynamic groups require a Premium P1 license.
      * <strong>Conditional access</strong>
      * Group assignment to applications
      * Advanced group management (dynamic groups, naming policies, expiration, default classification)

      * Cloud app discovery (Microsoft Defender for Cloud Apps)
      * Application proxy for on-premises, header-based, and integrated Windows authentication
      * Service level agreements (SLAs)

      * Microsoft identity manager user client access license (CAL)
      * Cross-tenant user synchronization
      * Advanced security and usage reports

      * Automated user provisioning to on-premises apps
      * Automated group provisioning to apps

      * Self-service password reset (SSPR)
      * Terms of use attestation
      * Basic access certifications and reviews
      * Basic entitlement management
      * Entitlement management – separation of duties

      * Risk level and risk detail fields are hidden to those with just the Entra ID Premium P1 edition.
      * Advanced detections (such as unfamiliar sign-in properties) not covered by license appear under the name Sign-in with additional risk detected. 
      * Privileged identity management (PIM)
      <br /><br />

   <strong>Premium P2</strong> (included in Microsoft 365 E5) includes all P1 features plus really cool <strong>"Identity Protection"</strong> with policies Assignment to all users.
      * Identity governance/protection dashboard
      * Risk-based Conditional Access (sign-in risk, user risk)
      * Machine-learning assisted access certifications and reviews
      * Authentication context (step-up authentication)
      * Device and application filters for Conditional Access
      * Token protection
      * Vulnerabilities and risky accounts
      * Risk events investigation, security information and event management (SIEM) connectivity
      * Self-service entitlement management (My Access)
      * Entitlement management with Verified ID
      * Lifecycle workflows
      <br /><br />

   The new <strong>$7/person Microsoft Entra ID Governace</strong> offering adds:
      * Identity governance dashboard
      * Entitlement management with Verified ID
      * Lifecycle workflows
      * <strong>Machine learning assisted</strong> access certifications and reviews
      <br /><br />

   * Multi-factor authentication registration policy to Require MFA

   * User risk remediation policy to require password change, with review of number of users impacted

   * Sign-in remediation policy to automate analysis of signals from each sign-in, both real-time and offline, and calculates a risk score based on the probability that the sign-in wasn't performed by the user. Administrators can decide based on this risk score signal to enforce organizational requirements. Administrators can choose to block access, allow access, or allow access but require multi-factor authentication. If risk is detected, users can perform multi-factor authentication to self-remediate and close the risky sign-in event to prevent unnecessary noise for administrators.

   * Investigate risks using data in the portal.

   * Export risk detection data to third-party utilities for further analysis.

   Users on another Entra ID (B2B) or public IDP (B2C).


   <a name="Enterprise+discounts"></a>

   ### Enterprise discounts

   Available to Enterprise customers only: <a target="_blank" href="https://cloudacademy.com/course/understanding-azure-pricing-and-support/planning-and-management/">15% Discounts on Public Prices</a>


<a name="Tenants"></a>

## Phase 07. Tenants

   The Azure SaaS service separates different customers into different <strong>tenants</strong> (like tenants in an apartment building). Each tenant is a dedicated, isolated instance of the AAD/Entra service, owned and managed by an organization. 

   "Isolated" = ISE

   Entra ID supports auth protocols: OAuth, OpenID, SAML, WS-Federation.

2. For birthdate, make up an adult year: 2023 - 22 = 2001

   PROTIP: Write it down for account recovery, such as in a 1Password entry.
   Also write down the date you created the account in a calendar entry when you'll switch accounts.

3. You'll need a phone number for multi-factor Authentication.

   PROTIP: Microsoft does not accept VOIP number such as those from Googgle Voice.
   They require a cell number from a cell carrier (Verizon, ATT, etc.).

   ## Phase 04. Credit Cards

4. Provide credit card number.

   BIG PROTIP: Microsoft no longer accepts debit cards such as from Walmart <a target="_blank" href="https://www.bluebird.com/">Bluebird</a> VISA card (by American Express).
   
5. PROTIP: Create a separate card sub-account for each cloud account.


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

   PROTIP: Each Subscription can only trust a single AAD/Entra directory.

   Transfer ownership of a subscription, such as to a central accounting department.

   Add additional subscriptions when you may exceed limits within a subscription: # VNets.


<hr />

<a name="Populate"></a>

## Phase 05. Populate


<hr />

<a name="MobileApps"></a>

## Phase 15. Devices - MS Authenticator app

7. Install the <strong>Microsoft Authenticator app</strong> on you smartphone and setup Two-factor authentication to approve access using your phone.

8. Get a unique profile image and <a target="_blank" href="https://account.microsoft.com/profile/edit-picture?fref=home.banner.profile">add picture</a>.

1. Setup password on your device.

1. https://azure.microsoft.com/en-us/features/azure-portal/mobile-app/

1. Open the store on your phone and search for "Microsoft Azure":

   On the Apple App Store: https://apps.apple.com/us/app/microsoft-azure/id1219013620?ls=1

   On the Google Play Store: https://play.google.com/store/apps/details?id=com.microsoft.azure

1. Login. <a target="_blank" href="https://www.youtube.com/watch?v=W7lXaQOQhFs">VIDEO</a>

1. Setup MFA

Microsoft has its "Intune" offering to manage mobile and laptop devices and their endpoint.
BTW: Intune is a separate MDM (Mobile Device Management) product from Entra ID.


<hr />

<a name="PickRegions"></a>

### Phase 01. Pick Region(s)

1. PROTIP: You'll be soon asked to specify a region. Pick the region closest to you.

   By combining several sources, I compiled <a target="_blank" href="https://docs.google.com/spreadsheets/d/1diCL35orX9cVEgti1eU7aaG_sgyDSPmbQjnXBamUnVc/edit?usp=sharing">this private Google Sheet</a> of 53 regions:

   * _Theater : a custom grouping (APJ, AMER, EMEA)
   * _Geography : Africa, Asia Pacific, Canada, China, Europe, Middle East, South America, US
   * _RegionName : the name of the region (e.g. "East US")
   * _Sovereignty : the country where the region is located (e.g. "United States")
   * _PhysicalLocation : the city where the region is located (e.g. "Chicago")
   * _Latitude : where 0 is the equator (e.g. "41.881832")
   * _Longitude : where 0 is the Prime Meridian (GMT) near London
   * _AvailZones : if supported, the number of availability zones in the region (e.g. "3")
   * _PairedRegion : the name of the paired region (e.g. "West US")
   * _RestrictionStatus : "Enabled by default" or "Access Restricted"
   <br /><br />   

1. <a target="_blank" href="https://docs.microsoft.com/en-US/cli/azure/account#az_account_list_locations">This command</a> lists all 83 Azure regions, which includes some not available for customer use.

   <pre>az account list-locations | wc -l</pre>

   <pre>  {
    "displayName": "Brazil Southeast",
    "id": "/subscriptions/7a0bbbfc-a36d-4d73-bbaf-e381b82397c6/locations/brazilsoutheast",
    "metadata": {
      "geography": "Brazil",
      "geographyGroup": "South America",
      "latitude": "-22.90278",
      "longitude": "-43.2075",
      "pairedRegion": [
        {
          "id": "/subscriptions/7a0bbbfc-a36d-4d73-bbaf-e381b82397c6/locations/brazilsouth",
          "name": "brazilsouth"
        }
      ],
      "physicalLocation": "Rio",
      "regionCategory": "Other",
      "regionType": "Physical"
    },
    "name": "brazilsoutheast",
    "regionalDisplayName": "(South America) Brazil Southeast",
    "type": "Region"
  }
   </pre>

1. CAUTION: This command lists only 83 Azure regions with no Latitude and Longitude, data all mixed up:

   <pre>az account list-locations --output tsv >locations.csv</pre>


1. Select a Geograph (country), then a Region from Microsoft's list at:

   https://azure.microsoft.com/en-us/explore/global-infrastructure/geographies/#geographies

   At time of writing, Microsoft has over 60 regions around the world on <a target="_blank" href="https://azure.microsoft.com/en-us/global-infrastructure/geographies/">their map</a>:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/109421738-cfe65980-7995-11eb-9a04-1b385f2ed631.png"><img alt="az-map-2021-1440x741.png" width="1440" src="https://user-images.githubusercontent.com/300046/109421738-cfe65980-7995-11eb-9a04-1b385f2ed631.png"><br /><em>Click image for full page</em></a>

1. There is also an <a target="_blank" href="https://build5nines.com/map-azure-regions/">
interactive map showing a point for each region's Longitude and Latitude</a> with city name.
   
   <a target="_blank" href="http://www.azurespeed.com/">http://www.<strong>azurespeed.com</strong></a> measures current ping speeds between regions on Microsoft's Azure cloud. To stop collection, click "uncheck all" or individual regions of interest:

   <a target="_blank" href="https://build5nines.com/map-azure-regions/"><img alt="cloud-service-azure-checks-603x261-56530" width="603" src="https://user-images.githubusercontent.com/300046/40890517-a7bc4b02-6734-11e8-9c1f-88e6a686de0d.jpg">https://build5nines.com/map-azure-regions/</a>

1. There are differences in cost between regions. For example, the US East region is cheaper than the US West region.

1. To display Microsoft's own analysis of <strong>ping speeds between its regions</strong> (using data from the <a target="_blank" href="https://www.thousandeyes.com/">thousandeyes.com</a> (Cisco) network analytics company, view:<br /><a target="_blank" href="https://docs.microsoft.com/en-us/azure/networking/azure-network-latency">https://docs.microsoft.com/en-us/azure/networking/azure-network-latency<br /><br /><img alt="azure-network-latency-2020-12-2761x1756.png" width="2761" src="https://user-images.githubusercontent.com/300046/109372837-e773f400-7868-11eb-8804-1d306f22fba2.png"></a>

   PROTIP: In the above, the slowest is 400 ms round-trip between Cape Town (South Africa West) and Australia East.

   NOTE: One big advantage of Azure over AWS is that AWS requires users to do their own backups and restores.
   But Microsoft does its own complete backups of all data in each zone, and when there is an outage, they take care of restoring it to a new zone. Where backups go is not public information, but it is likely that they are in a different zone in the same region, or in a different region. 

1. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/best-practices-availability-paired-regions">These cross-region pairs</a> are used for replication in Azure business continuity and disaster recovery. For example:

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th> Geography </th><th> Region pair A </th><th> Region Pair B </th></tr>
   <tr valign="top"><td> North America	</td><td> East US<td></td> West US </td></tr>
   <tr valign="top"><td> North America	</td><td> East US 2<td></td> Central US </td></tr>
   <tr valign="top"><td> North America	</td><td> North Central US<td></td> South Central US </td></tr>
   <tr valign="top"><td> North America	</td><td> West US 2<td></td> West Central US </td></tr>
   <tr valign="top"><td> North America	</td><td> West US 3<td></td> East US </td></tr>
   <tr valign="top"><td> Europe </td><td> North Europe (Ireland)<td></td> West Europe (Netherlands) </td></tr>
   </table>
   <br /><br />

   NOTE: The Microsoft Frontdoor service enables you to use a single global IP address for your application. 
   Microsoft automatically routes traffic to the region closest to the user. This is similar to AWS CloudFront.

1. <a target="_blank" href="https://www.azurespeed.com/Information/AzureIpRanges">IP addresses of each region</a>

<hr />

<a name="Portal"></a>

## portal.azure.com GUI

1. Use your default internet browser (Apple Safari, Microsoft Edge, Google Chrome).
1. On the initial (first time) new Subscription entry pop-up: Azure Advisor

   ### Azure Advisor

   On initial entry into the portal, Azure greets you with a pop-up about Azure Advisor.

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

1. For <a href="#Dashboard">Dashboard</a>, hold down G and press <strong>D</strong>.

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

   Getting 403 ActiveDirectoryMenuBlade accessing AAD/Entra on Portal

1. Right-click on the "Help + Support" box on the Dashboard and select "unpin"
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

1. There are 3 places you can reach "Help + Support":

   Click the question mark icon at the upper-right corner.

   ![azure help upper right 220x267](https://cloud.githubusercontent.com/assets/300046/25567655/c2642352-2dc0-11e7-9e6d-ef60c659a152.png)

   Support options are also listed behind the smiley face icon.

   There is also a "Help + Support" box on the Dashboard.

   Alternately, scroll down to click <a target="_blank" href="https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview">Help + Support</a> (the person icon in blue).

1. Microsoft calls their business-level oriented collection of implementation guidance <a target="_blank" href="https://www.youtube.com/watch?v=9VJYVITjckw">VIDEO</a>: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/microsoft-cloud-adoption-framework-for-azure/">MS_LEARN</a>: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/">Microsoft Cloud Adoption Framework for Azure"</a>.

   Additional sites:

   https://microsoft.github.io/AzureTipsAndTricks/blog/tip1.html


   ### Categories to get support

   In order to route your support to a specific team, here is a comprehensive list:

   * Azure Active Directory (AAD/Entra)
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


## Learning Hubs

<a target="_blank" href="https://bit.ly/dwayne-learning-hub-form">Learn Room sign-up form</a>:

PROTIP: Below I've added LinkedIn links to each Learn Room instructor.

* AI for Everyone - <a target="_blank" href="https://www.linkedin.com/in/arafattehsin/">Arafat Tehsin</a> (https://arafattehsin.com/blog)
* Analytics with <a target="_blank" href="https://www.linkedin.com/in/indirapolavarapu">Indira Polavarapu</a>
* Entra ID from A to Z - <a target="_blank" href="https://www.linkedin.com/in/ericmwoodruff/">Eric Woodruff</a> (ex-AWS)
* Azure Centric Learning - <a target="_blank" href="https://www.linkedin.com/in/mdnoga/">Marcos Nogueira</a>
* Azure Cloud Commanders - <a target="_blank" href="https://www.linkedin.com/in/ljmurray/">Luke Murray</a>
* Azure Developer for AI, Data, and Cloud - Beginner to Expert - <a target="_blank" href="">Usama Wahab Khan</a>
* Azure DevOps and .NET - <a target="_blank" href="https://www.linkedin.com/in/rodrigokono/">Rodrigo Kono</a> in Brazil
* Azure Fundamentals and Developer Technologies - blgorman (<a target="_blank" href="https://www.linkedin.com/in/brianlgorman/">Brian Gorman</a>)
* Azure Infrastructure by MTTs Learning Room
* Azure Knowledge Base with Kazeem

* BizApps Pinoy - <a target="_blank" href="https://www.linkedin.com/company/bizappspinoycommunity/">on Linkedin</a> - "for Filipinos" by <a target="_blank" href="https://www.linkedin.com/in/doher-drizzle-pablo-79348338/">Doher Drizzle Pablo</a>
* Certifications' Training - Estelle
* Cloud Data Platform Learners - <a target="_blank" href="https://www.linkedin.com/in/armando-lacerda-ba4a6432/">Armando Lacerda</a>
* Compliance Learning Room - <a target="_blank" href="https://www.linkedin.com/in/raphael-k%C3%B6llner/">Raphael Koellner</a>
* Cybersecurity From Beginner to Expert - <a target="_blank" href="https://www.linkedin.com/in/mdnoga/">Dwayne Natwick</a>

* Design & build with Jeeva and Dharani: D365 CE, Power Platform & DevOps
* GMDynamics365 - <a target="_blank" href="https://www.linkedin.com/in/goloknath-mishra-7133ba104/">Goloknath Mishra</a>
* Internet of Things, Digital Twins, and AI with <a target="_blank" href="https://www.linkedin.com/in/jorgeasmaia/">Jorge Maia</a>
* MB-Dynamics 365 and PL-Power Platform - <a target="_blank" href="https://www.linkedin.com/in/juliansharp/">Julian Sharp</a>
* MCT Community Pakistan - Usman and Gulnaz
* Microsoft Azure "Zero to Hero" - <a target="_blank" href="https://www.linkedin.com/in/h-sadeghpour/">Hamid Sadeghpour Saleh</a>

* Microsoft Dynamics 365 FO & SCM - <a target="_blank" href="https://www.linkedin.com/in/ffareed/">Faisal Fareed</a>
* MSIsGreat - <a target="_blank" href="https://www.linkedin.com/in/vignesh-senthamil-selvan/">Senthamil Selvan V</a>
* M365 Learning Lounge with Nanddeep, Siddharth, and Smita
* M365 Modern Work 

* Power BI – <a target="_blank" href="https://www.linkedin.com/in/aghonaim/">Ashraf Ghonaim</a>, Learning Expert
* Power Platform and Dynamics 365 with <a target="_blank" href="https://www.linkedin.com/in/nadeeja/?originalSubdomain=au">Nadeeja (Bomiriya)</a> in Melbourne
* Power Platform Hub - <a target="_blank" href="https://www.linkedin.com/in/hanielcroitoru/">Haniel Croitoru</a>
* Power Platform with Rishona
* Swamy The Learner (<a target="_blank" href="https://www.linkedin.com/in/viswanatha-swamy-b57326128/">Viswanatha Swamy</a>)
* <a target="_blank" href="https://www.linkedin.com/in/tiagocosta/">Tiago Costa</a> - Your Azure Expert


<hr />

<a name="Naming"></a>

### Resource Naming conventions

PROTIP: Decide on naming conventions and abbreviations BEFORE you create any resources.
Abbreviations are needed to keep names short.
This is both to avoid re-dos and to help with less stressful collaboration and communication,
especially if you have an international crew with different human languages and cultures.

PROTIP: Some abbreviations can inform policies, such as locking of production servers.

Based on <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming">Advice from Microsoft about naming conventions</a>:

   * shared, central, client = <strong>Subscription type</strong> - the purpose of the subscription that contains the resource. 

   * fin, mktg, product, it, corp = <strong>Business unit</strong> - organizational element that owns the subscription or workload the resource belongs to. 

   * westus, eastus2, westeu = <strong>Location/Region</strong> - The Azure region where the resource is deployed.

   * prod, dev, qa, stage, test = <strong>Deployment environment</strong> - The stage of the development lifecycle for the workload that the resource supports.

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations">rg, vm</a> = <strong>Resource asset type</strong>. 

   * navigator, emissions, sharepoint, hadoop = <strong>name of the application, workload, or service</strong> that the resource is a part of.

PROTIP: Keep the sequence of the abbreviations consistent, so that you can easily find the resource in the portal.


<hr />

<a name="IaC"></a>

## Phase 06. IaC (Infrastructure as Code)

<a name="Automation"></a>

### Automation programmatically

There are many ways to automate the creation of resources within Azure:

   1. <a href="#VM_GUI">Portal GUI Cloud Shell</a>
   1. <a href="#VM_template">JSON ARM Template</a> with parameter files
   1. <a href="#VM_CLI">CLI</a> Bash scripts (az commands)

   1. <a href="#VM_PS">Powershell</a> ps1 scripts calling Az modules
   1. PowerShell DSC (Desired State Configuration) automation
   1. <a href="#VM_PS_JSON">Powershell</a> running ARM template JSON files

   1. Microsoft <a href="#Bicep">Bicep</a> (new from 2021)
   1. <a href="#VM_Docker">Terraform</a> HCL *.tf files with templating features and advanced logic features)
   1. <a target="_blank" href="https://wilsonmar.github.io/pulumi/">Pulumi Python/C#/Nodejs/Typescript code</a>

   1. REST API (used <a target="_blank" href="https://azidentity.azurewebsites.net/post/2020/12/15/key-vault-with-the-use-of-vbscript-classic-asp">within a VBScript</a>, curl, C# .NET, Java, Python, NodeJs, etc.
   1. REST API calls in program generated from Swagger/OpenAPI JSON
   * (Serverless) Functions

   1. <a href="#VM_Docker">Docker</a> containers
   1. Helm charts referencing DockerHub or Azure Container Registry (ACR) images

   * From Microsoft (Security) Defender Incident Playbook <a target="_blank" href="https://www.youtube.com/watch?v=eLCrGe4-Zzc&22m">VIDEO</a>
   * <a href="#AZPowerAutomate">Azure Power Automate</a>
   * Microsoft Power apps
   * From Visual Studio or Visual Studio Code
   <br /><br />

   * <a target="_blank" href="https://wilsonmar.github.io/azure-cloud-powershell/">PowerShell scripts</a> running in CLI

<hr />

## My Azure-quickly repo on GitHub

My repo <a target="_blank" href=" 
https://github.com/wilsonmar/azure-quickly">
https://github.com/wilsonmar/azure-quickly</a>
contains automation scripts to invoke instead of manually operating the Azure Portal, so that you can save money by deleting Resource Groups because you can get resources back with just a few commands. 

Automation also enables you to stand up resources in different regions/locations the same way. 

Most scripts in the repo are Bash shell scripts that run natively on MacOS and thus familiar to most developers. 
PowerShell scripts are used in cases where they are the only solution, are more efficient, or covered in a tutorial.

Utility script code enable the scripts to run from Linux and Git Shell on Windows laptops. 

The scripts are also useful for learning Azure. 


<hr />

<a name="CloudShell"></a>

### Cloud Shell (CLI & PowerShell)

   Resources:
   * https://ss64.com/ps/ (A-Z index of PowerShell commands)
   * <a target="_blank" href="https://www.youtube.com/watch?v=x2aIVYxim-A&t=2m56m&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=6" title="Forced to learn a new shell and vi editor by Dana Epps Oct 3, 2019">VIDEO</a>: Cloud Shell
   <br /><br />

1. If you're executing from a local machine, first login to Azure:

   <pre><strong>az login</strong></pre>

   PROTIP: If you have multiple Azure accounts, you can specify which one to use by adding the --tenant parameter to the login command.

   <pre>[
  {
    "cloudName": "AzureCloud",
    "homeTenantId": "3902...
   </pre>

1. Close the browser window.

1. Create a folder, substituting your own project name:

   <pre>mkdir proj1; cd proj1
   </pre>

1. Download

   <pre><strong>git clone http://github.com/wilsonmar/mac-setup;cd mac-setup;chmod +x az-info.sh
   </strong></pre>

1. Set permissions:

   <pre><strong>chmod +x az-info.sh
   </strong></pre>

1. To avoid <a target="_blank" href="https://stackoverflow.com/questions/16853624/git-discovery-across-filesystem-not-set"?error</a> "Stopping at filesystem boundary (GIT_DISCOVERY_ACROSS_FILESYSTEM not set)."

   <pre><strong>export GIT_DISCOVERY_ACROSS_FILESYSTEM=1
   git remote add origin https://github.com/wilsonmar/mac-setup
   git fetch
   git pull origin master
   </strong></pre>

1. Change permissions to enable execution by the specific script:

   <pre><strong>chmod +x az-info.sh
   </strong></pre>

   CAUTION: Avoid granting permissions for all scripts in a folder to limit "blast radius".

1. Run the script file from GitHub:
   
   <pre>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/mac-setup/master/az-info.sh)"
   </pre>

   That script is similar to the aws-info.sh script in my <a target="_blank" href="">aws-quickly</a> repo.

   TODO: I'm also working on a PowerShell version of the script.

1. Install modules needed, Per https://wilsonmar.github.io/powershell-install-coding

   <pre><strong>pwsh; Install-Module azuread</strong></pre>

   <pre>Untrusted repository
You are installing the modules from an untrusted repository. If you trust this repository, change its InstallationPolicy value by running the 
Set-PSRepository cmdlet. Are you sure you want to install the modules from 'PSGallery'?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): Y
   </pre>

   PROTIP: Azure CLI commands can be issued from within PowerShell (.ps1) script files. 
   See ListUserAndPermissions.ps1 

Here I list both CLI and PowerShell commands to get information:
   * List Azure accounts, groups membership, role permissions
   * List resources
   * List storage accounts
   * List compute instances
   * List databases
   * etc.
   <br /><br />



<a name="VM_PS"></a>

Before executing any script,

   <pre><strong>Set-ExecutionPolicy RemoteSigned</strong></pre>

https://wilsonmar.github.io/azure-cloud-powershell/


<hr />

<a name="AZPowerAutomate"></a>

### Azure Power Automate

   * [Azure Automation](https://www.youtube.com/watch?v=9Jv3ThPqVco&list=RDCMUCuB24cID6NnypDWSLe4gfqA&start_radio=1&rv=9Jv3ThPqVco)
   * [Power Automate Add Entra ID users and managers](https://www.youtube.com/watch?v=hrNm4kLeAnY)
   * [Automation of Creating Users with Microsoft Power Automate and Graph API by Nick Romanek](https://www.youtube.com/watch?v=hrNm4kLeAnY)
   * Employee on-boarding process using Microsoft Forms and Flow https://www.youtube.com/watch?v=vYnvQgKSWcg
   <br /><br />

Although deprecated by the <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/automation-hybrid-runbook-worker/">Hybrid Runbook Worker feature</a>,
<a target="_blank" href="https://azure.microsoft.com/en-us/blog/managing-on-premises-systems-with-azure-automation/">
<strong>Azure Automation</strong></a> securely reaches inside VMs in private networks and on-premises to execute PowerShell scripts/commands. It makes use of Windows PowerShell Remoting feature.

However, PowerShell Remoting is not always a viable option.
Where you have Azure-hosted VMs but cannot open a public WinRM port, <a target="_blank" href="https://azure.microsoft.com/en-us/blog/managing-on-premises-systems-with-azure-automation/">
This post</a> presents a PowerShell extension runbook for on-premises VMs by utilizing the Azure VM Agent’s Custom Script Extension. 


### Python

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

### Azure Blueprints

As of September 23, 2023, Azure has stopped development of its "Blueprints" which maintain versions of the relationship between what should be deployed and what was actually deployed. So it supports auditing of deployments over time. And, on its own, a Blueprint can be applied to several subscriptions at once. [<a target="_blank" href="https://www.youtube.com/watch?v=3rSCnAZPNfo">VIDEO</a>] Also, Azure Blueprints are stored in Azure Cosmos cloud DB, which is replicated globally to several regions for ultimate reliability. 

<a target="_blank" href="https://www.pluralsight.com/resources/blog/cloud/azure-blueprints-shelved">NEWS</a>: Microsoft announced that it is retiring Azure Blueprints on Sep 30, 2024. Microsoft recommends that customers use Azure Resource Manager (ARM) <strong>template specs</strong> and <strong>deployment stacks</strong> to manage their environments.

Notice in sample Blueprints files that it's in JSON format:

   * <a target="_blank" href="https://github.com/timothywarner/az500/tree/main/scripts/blueprints/basic-networking-blueprint">basic networking</a>

Blueprints orchestrate deployment of resources/artifacts as policy.

In the <strong>Artifacts</strong> folder, Blueprints <a target="_blank" href="https://itnext.io/iac-azure-blueprints-and-terraform-7349ecf8d61c">has these</a>:

   * Role assignments
   * Policy assignments
   * ARM templates
   * Resource groups
   <br /><br />

Template Specs will be taking over for Blueprints?

   * https://learn.microsoft.com/en-us/answers/questions/177308/index.html

Blueprints the only mechanism for assigning deny permissions to Resource Groups.

https://learn.microsoft.com/en-us/answers/questions/177308/index.html

HashiCorp's Terraform, which completely controls and maintains changes.

   * https://github.com/terraform-providers/terraform-provider-azurerm

<a target="_blank" href="https://learn.microsoft.com/en-us/azure/governance/blueprints/samples/azure-security-benchmark-foundation/">This sample Blueprint</a> deploys several Azure services to provide a secure, monitored, enterprise-ready foundation:<br />
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690479433/azure-subscription-arch-1154x999_us8vps.png"><img alt="azure-subscription-arch-1154x999.png" width="1154" height="999" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690479433/azure-subscription-arch-1154x999_us8vps.png"></a>

An important design of Azure Blueprints within enterprises is that it allows for <strong>separation of duties</strong> between technical teams responsible for creating and maintaining the blueprint and those (in Operations) responsible for deploying it. This is similar to the separation of duties between developers and operations in DevOps favored for compliance. 

<a target="_blank" href="https://myrestraining.com/blog/azure/azure-blueprints-terraform/">This</a>
presents the analysis that Azure Blueprints is a top-down approach to infrastructure management, while Terraform is a bottom-up approach.

<hr />

<a name="Stacks"></a>

## IaC Stacks

https://learn.microsoft.com/en-us/cli/azure/stack?view=azure-cli-latest
A deployment stack is a native Azure resource type that enables you to perform operations on a resource collection as an atomic unit.

Deployment stacks are defined in ARM as the type Microsoft.Resources/deploymentStacks.

* az stack group create --name StackName \
   --resource-group ResourceGroup \
   --delete-all \
   --template-spec TemplateSpecResourceIDWithVersion \
   --description description \
   --deny-settings-mode None
* az stack group list

* az stack sub create --name StackName \
   --template-file simpleTemplate.json \
   --location westus2 \
   --description description \
   --deny-settings-mode None
* az stack sub list

<a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/governance/identity-governance-overview">Entra Identity Governance</a> 

https://learn.microsoft.com/en-us/azure/active-directory/governance/create-lifecycle-workflow">
Create a workflow in Microsoft Entra admin center</a>

https://www.youtube.com/watch?v=d1AE8qLwBYw

https://github.com/johnthebrit/RandomStuff/blob/master/DeploymentStacks/demo.ps1


### Azure Services

Bicep files are stored in https://github.com/wilsonmar/DevSecOps/tree/main/azure/bicep 

<tt>.
├── README.md
├── account
│   ├── identities (Manage Azure Managed Identities) - Core
│   ├── login (Manage Azure subscriptions) - Core
├── ai
│   ├── find (Find Azure resources using AI robot) - Core
│   ├── ml (Manage Azure Machine Learning) - Extension
│   └── quantum (Manage Azure Quantum) - Extension
├── compute
│   ├── acr (Azure Container Registry) - Core
│   ├── acs (Azure Container Service) - Extension
│   ├── aks (Azure Kubernetes Service) - Core & Extension
│   ├── containerapp (Manage Azure Container Apps) - Extension
│   ├── container (Manage Azure Container Instances) - Core & Extension
│   ├── staticwebapp (Manage Azure Static Web Apps) - Extension
│   ├── stream-analytics (Manage Azure Stream Analytics) - Core
│   └── vm (Manage Linux or Windows virtual machines) - Core
├── data
│   ├── disk (Manage Azure Managed Disks) - Core
│   ├── disk-access (Manage disk access resources) - Core
│   ├── cosmosdb (Manage Azure Cosmos DB database accounts) - Core & Extension
│   ├── backup (Manage Azure Backup) - Extension
│   ├── mariadb (Manage Azure Database for MariaDB servers) - Core
│   ├── mysql (Manage Azure Database for MySQL servers) - Core
│   ├── postgres (Manage Azure Database for PostgreSQL servers) - Core
│   └── repos (Manage Azure Repos) - Extension
├── deploy
│   ├── advisor (Manage Azure Advisor) - Extension
│   ├── consumption (Manage Azure Consumption) - Core
│   ├── costmanagement (Manage cost an billing in Azure) - Extension
│   ├── bicep (Manage Azure Bicep) - Extension
│   ├── cloud (Manage registered Azure Clouds) - Core
│   ├── extension (Manage and update Azure extensions) - Core
│   ├── graph (Query the resources managed by Azure Resource Manager) - Core
│   ├── <strong>resource</strong> (Manage Azure resources) - Core
│   ├── <strong>role</strong> (Manage user roles for access control with Entra ID and service principals) - Core
│   └── <stack>stack</strong> (Manage Azure Resource Manager template deployment) - Core
├── network
│   ├── cdn (Manage Azure Content Delivery Network) - Core
│   ├── eventhubs (Manage Azure Event Hubs) - Core
│   ├── network (Manage Azure Network) - Core
│   └── service-bus (Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and geo-disaster recovery configuration alias) - Core
├── observability
│   ├── grafana (Manage Grafana resources) - Extension
│   ├── logz (Manage Azure Log Analytics) - Extension
│   ├── monitor (Manage the Azure Monitor Service) - Core
│   └── tag (Manage Azure resource tags) - Core
└── security
│   ├── apim (Manage Azure API Management) - Extension
│   ├── identity (Manage Azure Managed Identities) - Core
│   ├── keyvault (Manage Azure Key Vault) - Core
│   ├── policy (Manage Azure Policy) - Core
│   └── security (Microsoft Defender for Cloud, Security Center) - Extension
</tt>

<hr />

<a name="IAM"></a>

## IAM 

<a name="Arch"></a>

### AuthA & AuthN 

<a target="_blank" href="#Arch">This pdf</a> is how Azure's various enterprise authentication and authorization mechanisms relate to each other: 

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1674194496/az-ent-auth-arch-1365x1034_shnrvx.jpg"><img alt="az-ent-auth-arch-1365x1034.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1674194496/az-ent-auth-arch-1365x1034_shnrvx.jpg"></a>

A. Enterprise enrollment (to Dept, Account to Entra & on-prem. Active Directory)<br />
B. Identity and access management<br />
C. Management group and subscription organization<br />
D. Management subscription (to on-premises systems)<br />
E. Connectivity subscription<br />
F. Landing zone subscription<br />
G. VM templates<br />
H. Sandbox subscription<br />
I. Azure DevOps (vs. GitHub Actions)


### Entra ID

<a target="_blank" href="https://www.youtube.com/watch?v=dBAflZZE6Gw&t=24s" title="Active Directory vs Azure AD vs Azure AD DS | MCSA | AZ-104">VIDEO</a>: <a target="_blank" href="https://www.youtube.com/watch?v=-a_-Seh27s4&">VIDEO Glossary</a>.

<a href="#AD">AD = Active Directory</a> (on-prem Windows server)<br />
vs.<br />
<a href="#AAD">AAD = Azure AD = Azure Active Directory = Entra</a><br />
vs.<br />
AADC = Azure AD Connect = Entra Connect<br />
vs.<br />
ADDS = Active Directory DS = Domain Services

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> - </th><th> on-prem. AD </th><th> AAD/Entra </th></tr>
<tr valign="top"><td> Runs on: </td><td> Windows server </td><td> Internet </td></tr>
<tr valign="top"><td> Use by:   </td><td> Windows </td><td> Internet: Office 365, Azure services & apps, 3rd-party SaaS </td></tr>
<tr valign="top"><td> Protocols: </td><td> RPC </td><td> REST API </td></tr>
<tr valign="top"><td> Structure: </td><td> Forests, <a href="#Domains">domains</a>, Org. Unit </td><td> <a href="#Tenants">Tenents</a> </td></tr>
<tr valign="top"><td> Authentication: </td><td> Kerberos, NTLM, LDAP </td><td> SAML, OAuth, Open-ID, WS-Federation </td></tr>
</table>


<hr />

<a name="AD"></a>

### AD = Active Directory 

Active Directory stores credentials for (older)
run on Windows servers in on-prem data centers.
This older <strong>on-prem</strong> AD provides "domain services" that include domain joins, group policies, LDAP, Kerberos / NTLM authentication. 
It uses the AD Admin Center GUI.


<a name="AAD"></a>

### Entra = AAD = Azure Active Directory

Entra/Azure Active Directory (AAD) registers Users and Groups, plus apps and devices. 
AAD/Entra is a SaaS service, unlike "Active Directory" running on Windows servers in on-prem data centers. 
So AAD/Entra is also called an "Identity as a Service" (IDaaS). 

   * Since Azure Microsoft Office 365 is SaaS, users are enrolled into AAD/Entra.

   * Because it's SaSS, it’s also possible to use AAD/Entra for Federation SSO (Single Sign On) to manage third-party software applications (outside Microsoft), such as CRMs like Salesforce, SAP, Concur, etc.


<a name="AAD-Connect"></a>

### AAD/Entra Connect

<strong>Entra Connect</strong> is a Windows service that synchronizes on-prem AD user metadata with the SaaS AAD. Key features of AAD Connect:
   * Password hash sych with AAD/Entra
   * Pass-through authentication which allows users to use the same password on-prem. and in the cloud.
   * Federation integration with AD FS for certificate renewal
   * Synchronization to ensure on-prem and cloud data matches
   * Health monitoring in a central location
   <br /><br />

### AD App Proxy instead of VPN

<a target="_blank" href="https://www.youtube.com/watch?v=HqsqTttYJVY&list=PLtVMyW0H7aiOQwZSsn2d-tg2z729ce1BZ&index=7">VIDEO</a>:
Traditional VPN enable users to access all ports on the entire network.

Apps configured to use AD App Proxy would limit user access to only the app configured,
using what's called "explicit user and device trust validation".


<a name="Domains"></a>

### Tenant Domains 

DEFINITION: A domain is an area of a network organized by a <strong>single authentication database</strong>.

DEFINITION: An "Active Directory Domain" is a logical grouping of AD objects on a network.

DEFINITION: An Active Directory Domain Controller (DC) is a (Windows) server that authenticates user identities and authorizes their access to resources.

An Azure Domain is not the same as a domain (DNS) web host names. 

At <a target="_blank" href="https://portal.azure.com/#settings/directory">https://portal.azure.com/#settings/directory</a>,
the "Domain" text is a combination of the root account email address text in front of ".onmicrosoft.com". For example, <tt>johndoe@whatever.com</tt> becomes Domain <tt>johndoewhatever.onmicrosoft.com</tt> (without the TLD such as ".com").


<a name="PortalSearch"></a>

### Portal Search AAD/Entra

1.  <a target="_blank" href="https://portal.azure.com">portal.azure.com</a>

2.  Press G and / to position the cursor to the Search field at the top.

    <a name="AAD"></a>

3.  Type <strong>Entra</strong> for the Services related to that name.

4.  Click for the blade called <a target="_blank" href="https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview">Entra ID</a> .

    https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview


    <a name="Tenants"></a>

    ### Tenants in Entra ID

5.  Highlight and copy the value of the Name field, such as "<em>something</em>.onmicrosoft.com".

6.  Notice the "Tenant ID" GUID below it.

7.  Open another browser tab (temporarily) to find the Tenant ID based on DNS host/domain (web host) name such as "contoso.com" or "something.onmicrosoft.com":

    <a target="_blank" href="https://www.whatismytenantid.com/">https://www.whatismytenantid.com</a>

8.  Paste the name and click "Find my tenant ID" to see the "Directory ID" (GUID), for example:

    <tt>6babcaad-1234-5678-789a-9fd97c0b779f</tt>

9.  Click "Copy to clipboard".
11. Remember the last few characters of the GUID returned.
11. Switch back to the browser Portal tab.


    <a name="TenantSwitch"></a>

    ### Tenant Switching

1.  To switch among tenants in the Portal GUI, use the "Directory + subscription" filter at the top menu of every screen:

    <img alt="az-onramp-subscrip-462x263" width="462" height="263" src="https://user-images.githubusercontent.com/300046/112444406-9cd48300-8d13-11eb-9aac-24feb64af66a.png">

    Within PowerShell, define the default Tenant (if you need to sign into more than one Tenant):

    <pre><strong><a target="_blank" href="https://learn.microsoft.com/en-us/powershell/module/servicemanagement/azurerm.profile/set-azurermcontext?view=azuresmps-4.0.0">Set-AzureRmContext</a>
    </strong></pre>


    ### Tenant = Directory

11. Click the icon at the top bar that looks like a notebook with a funnel.

    https://portal.azure.com/#settings/directory

    Notice the Directory ID GUID is the same as the Tenant ID GUID.

    DEFINITION: A Directory (as in AAD/Entra) is where your Tenant metadata is stored.

    Everything you do in Azure must be under some Tenant.

    Each tenant is independent of all other tenants.

    A tenant represents an organization in AAD/Entra.
   
    
    ### Users, Groups, Apps

    At the right is a count of Users, Groups, Applications, and Devices managed under that Tenant.
    (From Tim Warner)
    <img alt="az-aad-concepts-1194x954.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1674198812/az-aad-concepts-1194x954_mivxuk.jpg">


    ### Federation

    <a name="EntApps"></a>

    Microsoft has created integrations with Enterprise SaaS applications such as 
    Dropbox, Google Docs, AWS, Salesforce, SAP, Concur, etc.

    "<strong>External Identity</strong>" are Guest users with a credential federated from another Identity Store (Facebook, Google Gmail, GitHub, etc.) or a new SAML/WS-Fed IdP.

    After an IdP is defined, define User flows (see AD B2C).

    (from Tim Warner)
    <img alt="az-aad-groups-751x987.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1674201184/az-aad-groups-751x987_fasfn0.jpg">

    
    "<strong>Managed Identities</strong>" are also called "Service Accounts" used for authenticating automation services. Such accounts are assigned a GUID instead of email addresses for human users.

    ### Invitation from Federation

    (from Tim Warner)
    <img alt="az-federation-1950x1716.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1674268604/az-federation-1950x1716_nh17eb.jpg">

    There are two types of Consent to Entra ID:
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

    Alternately, Powershell commands to create a group: <a target="_blank" href="https://www.youtube.com/watch?v=p6WZejkXAa4">VIDEO</a>

    <pre>Create-AzureADGroup -DisplayName "Tampa Users" -MailEnabled $false -SecurityEnabled $true -MailNickName "TampaUsers" -Description "Users in Tampa"</pre>

    <hr />

    <a name="License"></a>
    
    ### Tenant License

    Each license has its own options.

    The license defaults to "Entra ID Free" to begin.

    P1 provides Conditional Access.

    "EMS (Enterprise Mobility + Security E5)" includes:
    * AAD/Entra - the cloud-based IAM service to control access to internal and external applications
    * Microsoft Intune for MDM (Mobile Device Management) but also PCs to remote reset and wipe. compliance status
    * Azure Info Protection protects documents tagged to not be shared
    * Microsoft Cloud App Security
    * Microsoft Advanced Threat Analytics (ATA) is an on-prem. platform to protect against targeted cyber attacks along the "Cyber Kill Chain" attack process (Domain Dominance) by parsing network traffic to create a behavioral profile about user activities.  It is a cloud-based triage tool that displays incidents on a timeline.
    <br /><br />

    "Microsoft 365 E5 Developer (without Windows and Audio Conferencing)"

    "Microsoft Power Apps Plan 2 Trial"

    "Microsoft Power Automate Free"

    "Power Virtual Agents Viral Trial"

    License "Entra ID Premium P2" for production enterprises. P2 provides "Identity Protection" and "Identity Governance" features. P2 is needed for MFA (Multi-Factor Authentication) and PIM.


    <a name="PIM"></a>

    ### P2 PIM (Privileged Identity Management)

    For those with a P2 license, <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">Entra ID Privileged Identity Management (PIM)</a> provides elevated access on a <strong>JIT (Just-in-Time)</strong> basis for a limited time. access. PIM provides audit logs to enable reviews of accesses. 

    Email is automatically sent when a role assignmnet is made outside of PIM. So do all access changes from the PIM UI, using "Privileged Authentication/Role Administrator" role assignments. Assignment can be permanent or based on time and date range.

1. REMEMBER: PIM must be enabled by the <a href="#AdminUsers">Global Admin</a> after MFA sign-on.

1.  Users search for PIM, Azure resources, to see <strong>assignments</strong> to <a target="_blank" href="https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-how-to-activate-role?WT.mc_id=Portal-Microsoft_Azure_Support">activate yourself</a>:

    https://portal.azure.com/#view/Microsoft_Azure_PIMCommon/ActivationMenuBlade/~/azurerbac

1.  PROTIP: Bookmark the above URL 
1.  Admins approve
2.  The user would see a Subscription with role "Specified access".
3.  User should Deactivate after using rather than letting the clock run out.

    Policy Definition options: ???
    * Allowed VM SKU's
    * Locations
    * Allowed Resource Type
    * Allowed Storage Account SKUs
    <br /><br />

    <a name="ConditionalAccess"></a>

    ### Conditional Access Policy

    Another P1 or P2 feature to limit granting of user access to only designated IPs, geographic regions, types of computer, etc..

    Those under this require use of MFA.

<hr />

### MFA

MFA (Multi-Factor Authentication) is a P1 or P2 feature.

<a target="_blank" href="https://www.youtube.com/watch?v=m1VWSWlrJa8&t=26m10s">VIDEO</a>:
It's at https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx reached from
   1. Service: (Entra  ID)
   1. Manage: Users on the left menu.
   1. 


REMEMBER: <a target="_blank" href="https://www.youtube.com/watch?v=10PbGbTUSAg&t=1h26m26s">VIDEO</a>: There is no spanning between AAD/Entra and AD RBAC roles:

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

   * B2C IEF Policy Administrators can create, read, update, and delete all custom policies in Entra ID B2C and therefore have full control over the Identity Experience Framework in the relevant Entra ID B2C tenant.

   * Billing Administrators can makes purchases, manages subscriptions, manages support tickets, and monitors service health.

   * Cloud Application Administrators have the same permissions as the Application Administrator role, excluding the ability to manage application proxy.

   * Cloud Device Administrators can enable, disable, and delete devices in Entra IAD and read Windows 10 BitLocker keys (if present) in the Azure portal.

   * Compliance Administrators have permissions to manage compliance-related features in the Microsoft 365 compliance center, Microsoft 365 admin center, Azure, and Microsoft 365 Security & Compliance Center.

   * Compliance Data Administrators have permissions to track data in the Microsoft 365 compliance center, Microsoft 365 admin center, and Azure. Users can also track compliance data within the Exchange admin center,

   * Conditional Access Administrators have the ability to manage Entra ID Conditional Access settings

   * Exchange Administrators have global permissions within Microsoft Exchange Online, when the service is present.

   * Directory Readers can read basic directory information.

   * Groups Administrators can create/manage groups and its settings like naming and expiration policies.

   * Security Administrators have permissions to manage security-related features in the Microsoft 365 security center, Entra Identity Protection, Azure Information Protection, and Microsoft 365 Security & Compliance Center.

   BTW, after you follow instructions below on setting up CLI, this Bash command lists all the pre-defined roles:

   <pre><strong>az role definition list -o table --query [].roleName</strong></pre>

   For a count (260 at time of writing):

   <pre><strong>az role definition list --query [].roleName | wc -l</strong></pre>

   The basic categories of roles are <strong>owner, contributor, and reader</strong>:
   * Owners have full access to all resources, including the right to delegate access to others.
   * Contributors can create and manage all types of Azure resources but can't grant access to others.
   * Readers can view existing Azure resources.
   <br /><br />

<a name="CustomRoles"></a>

### Custom Roles

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
   * Group assignment - all AAD/Entra group members access rights through user association with a group
   * Rule-based assignment - when a resource owner creates a group and uses a rule to define which users are assigned to a specific resource, attaching a role definition to a user, group, <a href="#SvcPrin">service principal</a>, or managed identity at a particular scope.
   * External authority assignment - such as on-prem. directory of SaaS app.
   <br /><br />

   <a name="SvcPrin"></a>
   
   DEFINITION: Each Service Principal can request an Entra ID token to access Azure resources and assign users and groups.

   <a name="RoleAssignment"></a>

### Role Assignment 

   Access is granted by creating a role assignment.<br />
   Access is revoked by removing a role assignment.

### Resource Providers, Actions, Operations, Permissions, Scopes, Groups, Policies

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

    ### Devices on AAD/Entra

    A "Registered" device is personally owned and signed in with a personal Microsoft or local account. It can access mobile and Windows 10 but not Windows Servers.

    A "Joined" device exists only in the cloud to access Windows 10 and Windows Server 2019 VMs.

    A "Hybrid" AAD/Entra joined device can access on-prem Windows 7, 8.1, 10 and Server 2008 or newer.

    ### Role Assignments

    REMEMBER: Actions are also called "Operations" at different Scopes.

1.  See "Your role"? (avoid using "Global Admin")

1.  <a target="_blank" href="https://www.youtube.com/watch?v=10PbGbTUSAg&t=32m23s">VIDEO</a>:
    Click "+ Add" to create a new Tenant.

    PROTIP: Tenant Type "Entra ID" by itself is actually "B2B" = Business to (2) Business. "B2C" means Business to (2) Consumers, or connection to External Identities on LinkedIn, Google, Facebook, etc.

1.  Cancel out by searching for AAD/Entra again.

    Various roles can be can be defined for a tenant - LIMIT: Up to 2,000 roles per individual tenant.

    READ: <a target="_blank" href="https://medium.com/microsoftazure/how-to-perform-role-assignments-on-azure-resources-from-an-azure-devops-pipeline-c9f4dc10d0a4">Role Assignments on Azure Resources from Azure Pipelines</a>


### ASG (Application Security Groups)

ASGs are wrapped by a NSG (Network Security Group) which route traffic.
   * Admins can RDP.
   * Users cannot RDP.


<hr />

<a name="Resources"></a>

## Resources


<a name="ResourceGroups"></a>

## Phase 10. Resource Groups

Each resource lives in one (and only one) Resource Group.

Each resource must be in a resource group. 
So before provisioning any resource, create a resource group for it to be placed in -- for provisioning, monitoring, and maintenance.


### From ASM to ARM

On July 1, 2019, Microsoft fully transitioned from the "classic" (older) Azure Service Management (ASM) when <a target="_blank" href="https://docs.microsoft.com/en-us/azure/multi-factor-authentication/multi-factor-authentication-faq">Multi-factor authentication (through the PhoneFactor Web (PFWeb) portal), API Management, BizTalk, and Managed Cache became available to the Azure Resource Manager (ARM).

ASM had "Cloud Services" and "Affinity Groups"
which is structured with Resource Groups (logical containers)
providing a single-resource point-of-view [i.e. manage a single resource at a time].

Also, instead of 2 racks on ASM, ARM resources can span 3 racks of computers.

<a name="ARM"></a>

## ARM Portal GUI Dashboard Tour #

   References:
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-overview">DOC</a>:
   <br /><br />

1. At <a target="_blank" href="https://portal.azure.com/">
   https://portal.azure.com</a>

1. Click the "wheel" icon at the top for Portal Settings:
   
1. PROTIP: If you wear glasses on video calls, reduce glare by clicking "Black" for the dark theme. You may not like the putrid yellow font associated with High Contrast:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/111880191-8c1cb980-896f-11eb-9c8b-86d556a46843.png"><img width="1165" alt="azure-portal-dark-2330x1246" src="https://user-images.githubusercontent.com/300046/111880191-8c1cb980-896f-11eb-9c8b-86d556a46843.png"></a>


   ### GUI Navigation Hubs, Panes, Blades

   DEFINITION: A <strong>Hub</strong> is a category for navigation within the left Azure Portal menu that is opened by clicking the upper-left accordion icon alt.

   Panes that appear on the right are called "blades".
   A <strong>Blade</strong> is a portion of the page that pops up as you navigate in the portal. (Note: A Blade is <strong>contextual</strong> and tied to your navigation. This will become more intuitive as you use the portal.) 

   Opening a series of blades is called a <strong>journey</strong>.


   ### Dock hamburger menu

1. Click the "hamburger" (home) icon at the upper-left corner for English descriptions of each icon on the left edge.

1. Click the "<" icon at top of the separator to collapse ("dock") or expand the text of services listed on the left menu.

   PROTIP: To set its expansion state permanently, click the ‘settings cog’ icon in the top right of portal and click the ‘Choose your default mode for the portal menu’ option. Setting that to docked or undocked.


   <a name="Keyboard_Shortcuts"></a>
   
   ### Left Dock Keyboard Shortcuts

1. PROTIP: To keep things simple, I arrange the FAVORITES menu item alphabetically.

   1. App Services
   2. Advisor
   3. Entra ID
   4. Cost Management + Billing
   5. Function App
   6. Load balancers
   7. Monitor
   8. Security Center
   9. Storage Accounts
   11. (0) Virtual Machines
   <br /><br />

1. ??? Click the <img width="20" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/command-1094-Favorite.svg">star icon so it is gold to enable the service to show on the menu or unselect to remove the service from the bar.

   <img width="20" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/general-17-Home.svg">Home

1. Drag and drop the Categories in a stable sequence and position you can mouse to quickly:

   Example: I drag the "Billing" icon to the top because I manage the money involved.

   <a target="_blank" href="https://www.youtube.com/watch?v=A0uXwdLDzf4">VIDEO</a> 
   PROTIP: If you memorize the number of your menu, you'll never need to mouse to the "hamberger" menu again, avoid being distracted by menu text, and recover screen real estate.

1. Hold down G and press a number to view one of the first 10 menu items.

   <a target="_blank" href="https://www.youtube.com/watch?v=ha2ESFCcERQ&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=15" title="Dec 5, 2019">VIDEO</a>: Many find themselves more productive when they don't have to reach for the mouse. Keeping hands on the keyboard reduces a distraction. Thus, it's impressive wizardry during demos.

1. Click the "?" at the top of the page to click <u>Keyboard shortcuts</u>. 

   In there and in <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-keyboard-shortcuts">DOCS</a>, "G+." means <strong>while holding down the G key</strong>, press the period key, which puts the focus on the ">>" icon so you can press Enter to expand or contract the left menu. Press Tab to cycle down the menu.

   PROTIP: You can use the G key as if it's like the Command/Ctrl key because you're not filling out a form. If you see G appear in a form fill field (such as the browser URL), backspace to clear the field, then press Tab off the form fields and try again.

1. Press Esc to escape from the help window.

1. A reminder of the G key is always present at the top of every Azure screen:<br />
   "Search resources, services, and docs (G+/)", which means hold down G and press / to search.

   PROTIP: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/project/navigation/keyboard-shortcuts?view=azure-devops">Azure DevOps uses more G keys (and M keys as well)</a>.



   <a name="AllServices"></a>

   ### All Services

1. For <a target="_blank" href="https://portal.azure.com/#allservices"><img width="20" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/general-17-Home.svg">All services</a>, hold down G and press <strong>B</strong>.

1. Click "All" for a complete of all services Azure has to offer, arranged within the category order on the left menu.

   PROTIP: This gives you an idea of how vast the Azure offering is, and the product names certification aspirants should know.


   <a name="FullScreen"></a>

   ### Full screen toggle

1. To toggle a window to take up the <strong>whole screen</strong> on Windows PCs: press F11 or Alt+Enter or Windows key + up-arrow. On macOS: hold down the command on the right, control on the left, then F (control+command+F). Repeat the keys to un-maximize. This is equivalent to clicking the green "maximize" icon on the upper-left of each app window or double-clicking on the app's title bar. 

   CAUTION: Any window maximized will not be brought up by the keyboard shortcut which cycles through various windows within the app (command+` on macOS; Alt+Tab on Windows PCs). To see the maximized window, you have to cursor near the top edge until the app's menu appears, then pull down the browser's Window menu.

   QUESTION: How to toggle full screen in Azure like on Netflix, which removes menus, breadcrumbs, and command bar? Alt+Space+X on Windows.

1. Switch among windows command+` (at the upper-left corner of the keyboard).
1. To find text on the page, press command+F.


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

<a name="ARM-CLI"></a>

ARM includes <strong>parallelization</strong> when creating resources for faster deployment of complex, interdependent solutions. 
ARM also includes granular access control, and the ability to tag resources with metadata.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/111055690-eda3cc00-8435-11eb-9563-aa0fb3154d40.png"><img alt="az-arm-interfaces-599x315.png" width="599" src="https://user-images.githubusercontent.com/300046/111055690-eda3cc00-8435-11eb-9563-aa0fb3154d40.png"></a>

ARM handles Authentication for access to back-end Web App, Data Store, Virtual Machines, etc. 

REMEMBER: The <tt>az deployment</tt> CLI command is used to deploy ARM templates. 

<pre>#!/usr/bin/env bash
az login
az account set --subscription $subscription-name-or-id
az deployment group create \
    –-subscription $subscription-name-or-id
    --resource-group $resource-group-name
    --template-file $path-to-arm-template.json
</pre>

After this command, pass in the parameters to complete the command. Specify the type of deployment scope using one of four keywords: 
   * group for resource group deployments
   * sub for subscription deployments
   * mg for management group deployments   
   * tenant for tenant deployments
   <br /><br />

Instead, to use PowerShell, use the <tt>New-AzResourceGroupDeployment</tt> cmdlet:

<pre>Connect-AzAccount
Set-AzContext -Subscription "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
New-AzResourceGroupDeployment 
    -ResourceGroupName $resource-group-name
    -TemplateFile $path-to-template
</pre>

Verify the deployment:

   az deployment group list --output table


<hr />

<a name="Automation"></a>

## Create Resources: Automation options

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

   PROTIP: In production, design Resource Groups for work groups to have the permissions they need. For example, core infrastructure such as Networking. The destination of logs and metrics should be viewed and managed using a whole different account than accounts used to create the data.

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

1. Click "Bash" (since we're using CLI scripts). Or "PowerShell".

   If this is the first time, you'll see "You have no storage mounted":

   ![az-shell-no-starge-550x247](https://user-images.githubusercontent.com/300046/115875601-9e709400-a402-11eb-9d22-d9d906f3f766.png)

1. PROTIP: Instead of clicking "Create storage" (which will cause Azure to assign its own names), <strong>click "Show advanced settings"</strong> to specify the Resource Group name for your storage account:

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

1. Click "Create" after "Validation passed".


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

1. Select the <strong>Policy</strong> service.   

   Policies are rules stating which resources can be deployed to which locations
   * Microsoft provides a number of built-in policies
   * Create custom policies using JSON

   Assign at resource level or resource group level
   * Child resources don’t inherit tags from group level
   
   PROTIP: All resources in a resource group should share the same lifecycle.

1. In the left menu select the <strong>Definitions</strong> pane under the Authoring section.

   You should see a list of built-in policies that you can use. 

1. Click G+ for focusing on "+ Policy" to press Enter to create a custom policy in the New policy definition dialog.

1. Set the Definition location, click the blue .... and select the Subscription for the policy to be stored in, which should be the same subscription as our resource group. Click Select.

1. Back on the New Policy definition dialog, type Name value of Enforce tag on resource.

1. For the Description, enter This policy enforces the existence of a tag on a resource.

1. For <strong>Category</strong> select Use existing and then select the General category.

1. For the POLICY RULE, select all text in the box (command+A), then delete it.
1. Copy and paste the following into the box:

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

1. Click "Save".

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

1. For a New Resource, hold down G and press <strong>N</strong> to select a new resource from Azure's <strong>Marketplace</strong> of services.

   NOTE: This is also reached by clicking "+ Create a resource" or Home icon then "+ Create a resource".

   ### Favorites

1. Within the Marketplace of services/resources, clicking the star icon labeled "Favorites" adds the item to the <a href="#Dashboard">Dashboard (described in a section below)</a>.

   ### New Web App
   
   PROTIP: Launching a "Web App" means that you provision a VM (Virtual Machine) which incur charges continuously (until you go broke). A server is used to generate HTML and CSS files as needed (real-time) based on requests from users.

   <a target="_blank" href="https://linuxacademy.com/cp/socialize/index/type/community_post/id/16110">DOC: "Launching a Simple Web App in Azure"</a>


   <a name="NewStaticWebApp"></a>

   ### New Static Web App

   "Static web apps" serve the same (static) HTML and CSS files to all users pre-generated when saved (pushed) to GitHub. This means that users don't have to wait for them to be generated.
   
1. In another browser tab, sign into GitHub and create a repository containing Nuxt.js or other template to generate HTML and CSS files.

1. Scroll down the "Azure Marketplace" menu to click "Web".
1. Click "Static Web App (preview)".
1. Select the Resource Group created already.
1. Type a Name that follows your Naming Convensions. For example, "msftlearn-core-infra-rg-dev" consists of 
   * "msftlearn" for the types of resources 
   * "hr" for Human Resources, "fin" for finance, etc.
   * "core-infra" for what is contained within,
   * "dev" or "prod" for environment
   * "rg" for the type of resource it is (resource group)
   <br /><br />

1. PROTIP: WARNING: Select a Region that's the same as your Resource Group or you'll incur inter-region network charges.
1. For Deployment details: Source, select "GitHub" the default.
1. Click "Sign in with Github" for a pop-up screen to enter the email address you used to create the GitHub account you want to associate.
1. Type the code shown on your mobile 2FA (Authentication) mobile app to <strong>Verify</strong>.
1. Click "Grant" each additional organization/account.
1. Click "Authorize ..." to dismiss the pop-up.

1. You should get an email with subject:

   <pre>[GitHub] A third-party OAuth application has been added to your account</pre>

1. Select the Organization, Repository, Branch created in the step above.


   <a name="AllResources"></a>

   ### All Resources
   
1. Drag and drop <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseAll">All resources</a> in the menu to the bottom of the list because you can reach it without a mouse by holding down G and pressing <strong>A</strong>. 

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




### Install Entra ID Module

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
   * Entra ID user, group, or service principal
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

   The RYOUT does the following:

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



## Entra ID B2B (Business-to-Business) 
allows an organization to securely share company applications and company services with guest users from other orgs, while retaining control over company data. Auth policies protect corp. data. 

1. Portal Menu > Entra ID. Select yours.
1. Users. +New guest user. Type email. Invite.
1. Guest user clicks "Get Started" in emai;.
<br /><br />


## Entra ID B2C (Business to Consumer)
enables customers can use a registered app with the Identity Experience Framework
defines interacting with external multi-party Identity Providers (IdP's) such as Facebook.

It makes use of SYN cookies and rate & connection limits defined by a Trust Framework policy.

1. +Create a resource: Entra ID B2C
1. Create.
1. An additional B2C Tenant is created
1. Create.
1. Link to subscription.
<br /><br />


<a name="ARM_Templates"></a>

## ARM Templates

A parent template can launch nested templates.


<a name="Bicep"></a>

## Concise, yet comprehensive

Azure Bicep > ARM > Terraform

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1691890796/az-bicep-1197x539_rfswrd.png"><img alt="az-bicep-1197x539.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1691890796/az-bicep-1197x539_rfswrd.png"><em>Click image for full screen.</em></a> <a target="_blank" href="https://7451111251303.gumroad.com/l/bpczq"><em>from a PowerPoint file</em>.</a>

This diagram summarizes content in several <a href="#BicepDocs">docs and learn</a>.

For a specific subscription within a Management Group (deployment scope) in Microsoft's <strong>Azure cloud</strong>, the <a href="#Portal">Azure portal GUI</a> can be used to create <strong>resources</strong> interactively. 

Behind the scenes, an <strong>Azure API</strong> calls the <strong>ARM services</strong> to create, modify, and delete resources.

Microsoft's docs also talk about <strong>commands</strong> issued from <strong>az CLI and PowerShell</strong> terminals. These commands are also making calls to the same <strong>Azure API</strong> to create, modify, and delete resources. Additional commands can access services (such as Azure Key Vault) to manage <strong>secrets</strong> such as passwords and API keys.

Other security mechanisms include encryption, verifying identity, and strong authentication. To detect threats and intrusions, send logs to a central <strong>SIEM/SOAR</strong> system, such as Sentinel inside Azure or Splunk outside Azure. When anomalies are found, raise alerts by escalating emails, text messages, Slack, SMS, or other media.

When these security mechanisms are not created along with resources when created, it can be just a matter of minutes before bots discover vulnerabilities and hack your system. 
So Microsoft created the <a href="#ARM">ARM</a> (Azure Resource Manager) to create resources with tags and security controls based on JSON files processed together in a CI/CD (Continuous Integration/Continuous Deployment) pipeline run by GitHub Actions (or Azure DevOps). Several files can be linked together at deployment.

ARM works like Terraform and Ansible (from Red Hat), which have accompanying <strong>parameter</strong> files to enable different environments to be created from the same JSON-format files.

This approach, called <strong>"Declarative IaC</strong>, (Infrastructure as Code) is where the ARM service compares <strong>state</strong> and makes changes and <strong>deletions</strong> as necessary to achieve the desired state specified. Such "idempotent" logic achieves the same result each time the file is deployed. Duplicates are not created. 

The alternative approach, called Imperative or <strong>Programmatic IaC</strong>, is where application programming code written in Python, Go, C#, etc. call the Azure <strong>SDK</strong> (Sofware Development Kit). One such program is <strong>Pulumi</strong>. Such programs need to create resources in the proper sequence, check whether resources have already been created, recognize errors, etc. Although more complex and thus difficult to maintain and debug, programming code has the flexibility to do anything, such as sending logs to a <strong>SIEM/SOAR</strong> system.

For <a href="#BicepDX">better developer experience (DX)</a>, in 2021 Microsoft created the <strong>Bicep DSL</strong> (Domain Specific Language) read by a <strong>Transpiler</strong> that creates ARM JSON and parameters files. But the Bicep DSL code is also validated based on Azure API and <strong>OpenAPI (Swagger)</strong> files.

Note that, unlike Terraform, Bicep has no state file, so it <strong>doesn't alter and delete resources</strong> based on changes in the Bicep file. Instead, Bicep creates ARM JSON files that are processed by the ARM service to create, modify, and delete resources. 

Pulling Bicep code from <strong>GitHub</strong> enables versioning, and coordination with <strong>Jira</strong> or other product management tools. Highlighting and linting of Bicep code is automated by ARM and Bicep <strong>add-ons</strong> Microsoft has created for VSCode and other popular <strong>IDE</strong> text editors. Added "Integrations" enable the IDE to invoke the Bicep <strong>Transpiler</strong> to create ARM JSON files with parameters. 

Perhaps the most important security feature is the use of <strong>Policy as Code</strong> that can identify vulnerabilities in resources created by Bicep and ARM JSON. Issues found would stop the CI/CD pipelines, with alerts to the developer. This is called <strong>Shift Left</strong> because it is done before the resources are created.

Lastly, <strong>graphic diagrams</strong> can be generated from either the resources created or, better yet, from Bicep or ARM JSON for better visualization to speed understanding and troubleshooting.

Current status: As of this writing (August 12, 2023):

   * Unlike Terraform, Bicep currently does not have additional providers for 3rd-party offerings such as Databricks, Snowflake, etc.

   * Bicep is not yet integrated into the Azure Portal, which has a "See in JSON" link for each resource.
   <br /><br />

### Bicep PSRule

PSRule at <a target="_blank" href="https://github.com/Azure/PSRule.Rules.Azure">https://github.com/Azure/PSRule.Rules.Azure</a> leverage <strong>270+ rules</strong> to validate Bicep code according to best practices and security requirements as defined in the Azure Well-Architected Framework.

1.  <a target="_blank" href="https://www.youtube.com/watch?v=3697rG8tkOI&t=12m12s">VIDEO</a>: 

    <a target="_blank" href="https://github.com/Azure/PSRule.Rules.Azure-quickstart">https://github.com/Azure/PSRule.Rules.Azure-quickstart</a> 

1.  Click the green "Use this template" to "Create a new repository" under your own GitHub account and repo name.

    I recommend a name such as "rnd-bicep-psrule-play-01" to describe the purpose of the repo, to end up with:

    https://github.com/wilsonmar/rnd-bicep-psrule-play-01

1.  Provide a Description such as "Playground for Bicep and PSRule".

1.  Fix the .gitignore

1.  Add a .gitattributes file to prevent CRLF line endings.

1.  Click the green "Create repository from template" button.

    ### CODEOWNERS

1.  Change the CODEOWNERS file to point to your GitHub account, repo name, branch name, and owner accounts.

    See https://help.github.com/articles/about-codeowners/

1.  Customize the PULL_REQUEST_TEMPLATE.md file.

    ### markdownlint

1.  Configure .markdownlint.json at

    https://github.com/wilsonmar/rnd-bicep-psrule-play-01/blob/main/.markdownlint.json

    based on<br />
    https://github.com/DavidAnson/vscode-markdownlint#configure

    https://azure.github.io/PSRule-Rules-Azure/en/rules/module/

    https://github.com/DavidAnson/markdownlint/blob/main/README.md

    https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint

    ### PSRule samples

1.  <a target="_blank" href="https://www.youtube.com/watch?v=3697rG8tkOI&t=31m26s">In <tt>.ps-rule</tt> folder, review files Org_Rule.ps1 (PowerShell) and Org_Rule.md (Markdown).

    Org.Rule.yaml defines the rule to require storage.

    ### .devcontainer

    ### ps-rule.yaml

    https://aka.ms/ps-rule/options

    https://aka.ms/ps-rule-azure/options

1.  Schedule a future time when versions of requires: PSRule, etc.

    ### .github/workflows/azure-analyze.yaml

    ### .github/workflows/ms-analyze.yaml

1.  It runs in GitHub Actions workflows (https://aka.ms/ps-rule-action), Azure Pipelines, and Visual Studio Code.

<a target="_blank" href="https://www.youtube.com/watch?v=L4CIDqnXLPk">VIDEO</a> by Bernie White, Microsoft MVP, on Azure Bicep. 
and
Azure Bicep - The future of ARM templates by <a target="_blank" href="https://www.linkedin.com/in/kevinoliver/">Kevin Oliver</a> at <a target="_blank" href="https://www.linkedin.com/company/azure-thursday/">Azure Thursday</a> on Aug 12, 2021.
and
<a target="_blank" href="https://www.youtube.com/watch?v=3697rG8tkOI&t=1108s">VIDEO</a>: PSRule for testing Azure Bicep code references 

<a target="_blank" href="https://www.youtube.com/watch?v=AMOj5-puoGI">VIDEO</a>: Azure Bicep Native Parameter Files


<a name="BicepDocs"></a>

### Bicep Docs and Videos

The menu of Microsoft's documentation on Bicep is at:<br />
<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/">https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/</a>

<a target="_blank" href="https://learn.microsoft.com/en-us/training/paths/fundamentals-bicep/">3hr 18min Microsoft Learn: Fundamentals of Bicep</a>:

<a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/introduction-to-infrastructure-as-code-using-bicep/?WT.mc_id=learnlive-20220308A">Part 1 - 30min Microsoft Learn Module: Introduction to infrastructure as code using Bicep</a>

   <ul><a target="_blank" href="https://www.youtube.com/watch?v=MP60ND7Upn4&t=43m26s">First look at Bicep file</a>
   
   Deploy Azure resources by using Bicep and:<br />Option 1: Azure Pipelines<br />
   Option 2: GitHub Actions
   </ul>

Part 2: Intermediate Bicep

Part 3: Advanced Bicep


   * <a target="_blank" href="https://aka.ms/learnlive-20220308A">Microsoft Learn Module on Bicep</a> is the basis for<br /><a target="_blank" href="https://learn.microsoft.com/en-us/events/learn-events/learnlive-iac-and-bicep/">15-episodes</a> on YouTube:

   * <a target="_blank" href="https://www.youtube.com/watch?v=VDCAJIGqHZU">Azure Friday</a> by Scott Anselman
   * <a target="_blank" href="https://www.youtube.com/watch?v=22VG-3fEOjU">Deploy Bicep files by using Github Actions</a> by <a target="_blank" href="https://www.linkedin.com/in/jaygordon0042/">Jay Gordon</a>. Create an AKS cluster with secrets from Azure Key Vault.
   *  <a target="_blank" href="https://www.youtube.com/watch?v=_yvb6NVx61Y" title="Understanding and Using Project BICEP - The NEW Azure Deployment Technology by John Savill Mar 9, 2021">VIDEO</a>:
   * <a target="_blank" href="https://github.com/Azure/bicep">https://github.com/Azure/bicep</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=7SwR_LeXqK0" title="Jan 11, 2023">VIDEO: Bicep vs Terraform. which one should I use?</a> by <a target="_blank" href="https://www.linkedin.com/in/jonathan-d-aloia/">Jonathan D'Aloia at Adatis London</a>

   * <a target="_blank" href="https://jackwesleyroper.medium.com/azure-bicep-pros-cons-c8121fbfe5db">BLOG:  Pros & Cons</a>
   * <a target="_blanl" href="https://www.youtube.com/watch?v=wevlRsVxsUw&t=4m20s">Bicep Advanced Deployments - Part 1</a> by Kevin Oliver
   * <a target="_blank" href="https://www.youtube.com/watch?v=wevlRsVxsUw&t=4m20s">Bicep Advanced Deployments - Part 2</a> by Kevin Oliver

   * <a target="_blank" href="https://adamtheautomator.com/azure-bicep/">BLOG: Getting Started with Azure Bicep (Step-by-Step)</a> by Nick Rimmer
   <br /><br />


<a name="BicepDX"></a>

### Better developer experience (DX)

Creating a JSON ARM template requires complicated expressions, and the final result might be verbose.

But Bicep was designed to provide a syntax that's easier to understand, better support for modularity and reusable code, and improved type safety. 

Reference parameters and variables directly, without using complicated functions. 

String interpolation is used in place of concatenation to combine values for names and other items. 

Reference properties of a resource directly by using its symbolic name instead of complex reference statements.

Bicep automatically detects dependencies between resources. This process removes some of the work involved in template authoring.

Break down complex template deployments into smaller module files and reference them in a main template. 
This makes for easier management, greater reusability (easier sharing).

https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-bicep


### CLI to create storage account

<a target="_blank" href="https://www.youtube.com/watch?v=MP60ND7Upn4&t=38m53s">VIDEO: The imperative approach to 
create a storage account using CLI commands:

<pre>#!/usr/bin/env bash
az login
az group param location string = resourceGroup().location \
   --location eastus
&nbsp;
az storage account create --name storagelearnlive \
   --resource-group storage-resource-group \
   --location eastus \
   --sku Standard_LRS \
   --kind StorageV2 \
   --access-tier Hot \
   --https-only true
</pre>


<a name="BicepFile"></a>

### Bicep File to create storage account

<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/quickstart-create-deployment-stacks?tabs=azure-cli%2CCLI">For example</a>:
a Bicep file to create a storage account and virtual network:

<pre>param resourceGroupLocation string = resourceGroup().location
param storageAccountName string = 'store${uniqueString(resourceGroup().id)}'
param vnetName string = 'vnet${uniqueString(resourceGroup().id)}'
&nbsp;
resource storageAccount 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  name: storageAccountName
  location: resourceGroupLocation
  kind: 'StorageV2'
  sku: {
    name: 'Standard_LRS'
  }
}
&nbsp;
resource virtualNetwork 'Microsoft.Network/virtualNetworks@2022-11-01' = {
  name: vnetName
  location: resourceGroupLocation
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
    subnets: [
      {
        name: 'Subnet-1'
        properties: {
          addressPrefix: '10.0.0.0/24'
        }
      }
      {
        name: 'Subnet-2'
        properties: {
          addressPrefix: '10.0.1.0/24'
        }
      }
    ]
  }
}
output storageAccountId string = storageAccount.id
</pre>

"2022-09-01" is the API version.

<a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/build-first-bicep-template/2-what-bicep">Example</a>: To create an appServicePlan and appServiceApp:

<pre>resource appServicePlan 'Microsoft.Web/serverFarms@2022-03-01' = {
  name: 'toy-product-launch-plan'
  location: 'eastus'
  sku: {
    name: 'F1'
  }
}
resource appServiceApp 'Microsoft.Web/sites@2022-03-01' = {
  name: 'toy-product-launch-1'
  location: 'westus3'
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
  }
}
</pre>


<a name="Transpile"></a>

To transpile a Bicep template to a corresponding JSON template using CLI commands:

<ul><pre><strong>bicep build main.bicep</strong></pre></ul>

The result is an ARM JSON file:

<pre>{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "metadata": {
    "_generator": {
      "name": "bicep",
      "version": "0.14.6.61914",
      "templateHash": "1685474528138924530"
    }
  },
  "parameters": {
    "location": {
      "type": "string",
      "defaultValue": "[resourceGroup().location]"
    },
    "namePrefix": {
      "type": "string",
      "defaultValue": "storage"
    }
  },
  "variables": {
    "storageAccountName": "[format('{0}{1}', parameters('namePrefix'), uniqueString(resourceGroup().id))]",
    "storageAccountSku": "Standard_RAGRS"
  },
  "resources": [
    {
      "type": "Microsoft.Storage/storageAccounts",
      "apiVersion": "2023-06-01",
      "name": "[format('stg{0}', uniqueString(resourceGroup().id))]",
      "location": "[parameters('location')]",
      "kind": "StorageV2",
      "sku": {
        "name": "[variables('storageAccountSku')]"
      },
      "properties": {
        "accessTier": "Hot",
        "supportsHttpsTrafficOnly": true
      }
    }
  ],
  "outputs": {
    "storageAccountId": {
      "type": "string",
      "value": "[resourceId('Microsoft.Storage/storageAccounts', format('stg{0}', uniqueString(resourceGroup().id)))]"
    }
  }
}
</pre>

<a name="main.bicep"></a>

### main.bicep

In the <tt>main.bicep</tt> file, defining resources under <tt>Microsoft.Resources/deploymentStacks</tt>
makes them "managedResources" -- managed by policies associated with that top-level stack. 

See https://learn.microsoft.com/en-us/azure/templates/microsoft.resources/deployments?pivots=deployment-language-bicep

The <tt>actionOnUnmanage</tt> behavior property of a stack can apply to the entire collection of resources under the stack - across all scopes (management groups, subscriptions, and resource groups).

Indeed, this enables one command to manage all resources (across several scopes) as a single atomic unit.
When the <tt>actionOnUnmanage</tt> property is set to <tt>Delete</tt>, all resources would be automatically deleted when the stack is deleted. That's convenience!

Conversely, when <tt>actionOnUnmanage</tt> is set to <tt>Detach</tt> (the default), resources are disassociated from the deployment stack but not deleted. This has the effect of protecting resources from accidental deletion, and thus a key benefit of using deployment stacks. It provides guard rails.

IMPORTANT: Deployment stacks entered public preview on July 1, 2023.

For <a target="_blank" href=" https://techcommunity.microsoft.com/t5/azure-governance-and-management/arm-deployment-stacks-now-public-preview/ba-p/3871180">example</a>, to create a deployment stack at the "sub" (subscription) scope with deny setting of "DenyDelete" and actionOnUnmanage of "Detach":

<ul><pre>az stack sub create \
   --name "storageStack-DevEnv" \
   --template-file "testStorageAccounts.bicep" \
   --location "eastus" \
   --deny-settings-mode "DenyDelete"
</pre></ul>

To verify:

<ul><pre>az stack sub show --name "storageStack-DevEnv"</pre></ul>

<pre>"actionOnUnmanage": {
    "managementGroups": "detach",
    "resourceGroups": "detach",
    "resources": "detach"
}
</pre>

### PSRule Policy as Code

<a target="_blank" href="https://www.youtube.com/watch?v=3697rG8tkOI&list=PLM4Db0UWu45Kv-QMpyEv9znqA2t0Xlcvk&t=11m9s">VIDEO</a>: PSRule Policy as Code runs are defined in <tt>.github/workflows/bicept-psrule.yml</tt>:

<pre>name: Analyze
on:
  push:
    branches: [main, 'release/*']
  pull_request:
    branches: [main, 'release/*']
  schedule:
    - cron: '24 22 * * 0' # At 10:24 PM, on Sunday each week
  workflow_dispatch:
&nbsp;
permissions: {}
&nbsp;
jobs:
  oss:
    name: Analyze with PSRule
    runs-on: ubuntu-latest
    if: github.repository != 'Azure/PSRule.Rules.Azure-quickstart'
    permissions:
      contents: read
      security-events: write
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Run PSRule analysis
        uses: microsoft/ps-rule@main
        uses: Microsoft/ps-rule@v2.0.0
        with:
          modules: PSRule.Rules.MSFT.OSS
          prerelease: true
          outputFormat: Sarif
          outputPath: reports/ps-rule-results.sarif
      - name: Upload results to security tab
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: reports/ps-rule-results.sarif
</pre>

The "schedule: - cron:" lines can be removed so you don't want runs recurring automatically. 

### At the Resource Group level

I've parameterized the CLI script:

<ul><pre>export THIS_LOCATION="eastus"
export THIS_RESC_GROUP="demoRg"
export THIS_STACK_NAME="demoStack"
&nbsp;
az group create \
  --name "$THIS_RESC_GROUP" \
  --location $THIS_LOCATION
az stack group create \
  --name $THIS_STACK_NAME \
  --resource-group "$THIS_RESC_GROUP" \
  --template-file './main.bicep' \
  --deny-settings-mode 'none'
az stack group show \
  --resource-group "$THIS_RESC_GROUP" \
  --name $THIS_STACK_NAME
</pre></ul>

Because the deployment stack is a native Azure resource, all typical Azure Resource Manager (ARM) operations can be performed on the resource, including:
   * Azure role-based access control (RBAC) assignments
   * Security recommendations surfaced by Microsoft Defender for Cloud
   * Azure Policy assignments
   <br /><br />

References:
   * https://github.com/Azure/deployment-stacks
   * https://learn.microsoft.com/en-us/azure/templates/microsoft.resources/deployments?pivots=deployment-language-bicep
   * https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deployment-stacks?tabs=azure-cli
   * https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deployment-stacks?tabs=azure-powershell

   * <a target="_blank" href="https://www.voitanos.io/blog/how-to-create-azure-function-apps-with-bicep-step-by-step/">BLOG</a> and <a target="_blank" href="https://www.youtube.com/watch?v=tzgB3cSUdNM">VIDEO</a>: May 8, 2022 Streamline Your Deployment Process with Azure Bicep & Azure Functions by Andrew Connell using Bicep CLI version 0.6.1.

   * <a target="_blank" href="https://www.voitanos.io/blog/how-to-cicd-iac-for-azure-function-apps-with-github-actions-step-by-step">BLOG</a> and <a target="_blank" href="https://www.youtube.com/watch?v=36R1pzPuLvs">VIDEO</a>: CI/CD for Azure Functions: Automating Deployment with Bicep and ARM  May 8, 2022  by Andrew Connell

<hr />

<a name="Sandbox"></a>

### Microsoft Learn Sandbox

<a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/build-first-bicep-template/4-exercise-define-resources-bicep-template?pivots=powershell">For Azure CLI or PowerShell</a>


<a name="Playground"></a>

### Playground

Alternately, transpile by copying and pasting into the Bicep Playground:

<a target="_blank" href="https://bicepdemo.z22.web.core.windows.net/">https://bicepdemo.z22.web.core.windows.net</a>

Click the <strong>Sample Template</strong> button to see a list of sample Bicep and JSON files side-by-side.

### Decompile

Click "Decompile" from the ARM JSON template to a Bicep.

<hr />


1. View sample Bicep code:

   https://github.com/Azure/bicep/tree/main/docs/examples
   
   More examples: <a target="_blank" href="https://github.com/Azure/azure-quickstart-templates/">This</a> contains Azure Resource Manager templates contributed by the community.

   https://github.com/AzureIaCBook/book-templates and <br />
   https://github.com/PacktPublishing/Infrastructure-as-Code-with-Azure-Bicep is provided with 
   <a target="_blank" href="https://www.manning.com/books/azure-infrastructure-as-code">Manning</a>
   <a target="_blank" href="https://learning.oreilly.com/library/view/azure-infrastructure-as/9781617299421/" title="August 2022">BOOK: "Azure Infrastructure as Code"</a>
   by <a target="_blank" href="https://www.linkedin.com/in/eduard-keilholz/">Eduard Keilholz</a>, <a target="_blank" href="https://www.linkedin.com/in/erwinstaal/">Erwin Staal</a>, <a target="_blank" href="https://www.linkedin.com/in/henrybeen/">Henry Been</a>
https://learning.oreilly.com/library/view/azure-infrastructure-as/9781617299421/OEBPS/Text/04.htm#heading_id_5
1. Install in VSCode the Bicep extension: <a target="_blank" href="https://www.youtube.com/watch?v=VDCAJIGqHZU" title="Azure Friday with Scott Hanselman">VIDEO</a>

1. Install the Bicep CLI. <a target="_blank" href="https://www.youtube.com/watch?v=F1zzrnXQwKU">VIDEO</a>



<hr />

<a name="Terraform"></a>

## Terraform for Azure

1. On a Mac, install using Homebrew instead of <a target="_blank" href="https://www.terraform.io/downloads.html">Download from HashiCorp website</a> or using 
<tt>brew install terraform</tt>:

   <pre><strong>brew install tfenv
tfenv install latest
   </strong></pre>


<a name="AADC"></a>

## AAD/Entra Connect

Entra ID Join

Azure Policy

Azure Role-Based Access Control (RBAC)

Entra ID Roles


<hr />

<a name="Futures"></a>

## Futures Roadmap

PROTIP: The minimum prior notification will Microsoft give before ending support for products governed by the Modern Lifecycle Policy is 12 months.

* <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/WhatsNewBlade">"What's New" page on Azure Portal</a>

* <a target="_blank" href="https://azure.microsoft.com/en-us/blog/">Azure Blog</a> for Official announcements

* <a target="_blank" href="https://azure.microsoft.com/updates">azure.microsoft.com/updates</a> in now timing out. It has filters for GA vs. futures.

* <a target="_blank" href="https://www.youtube.com/watch?v=9RtzSIrRijg&list=RDCMUCp8lLM2JP_1pv6E0NQ38pqw&index=1">Azure This Week</a> by Lars Klint and <a target="_blank" href="https://www.youtube.com/channel/UCbjgKwnWnGG7sKCPTRgrFcw" title="Gwyn Pena-Siguenza">GPS</a> at <a target="_blank" href="https://www.acloudguru.com/">ACloudGuru.com</a>.


### Product Features

   "Public preview" means the feature is available for all Azure customers for beta testing.

   GA (General Availability) means

<a target="_blank" href="https://www.youtube.com/watch?v=FsDNmjLIxlI">VIDEO</a>:
<a target="_blank" href="https://azurecharts.com/status">https://azurecharts.com/status</a>
provides clickable "heatmap" status, timeline, a quiz, etc.


<hr />

### Videos

<a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-big-picture">
   Microsoft Azure: The Big Picture</a> 1h 50m Mar 10, 2016
   by Matt Milner
   makes use of VS 2010, which is rather obsolete now.

1. Install in VSCode <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools">Azure Resource Manager Tools</a> for Template language support for Azure Resource Manager JSON files.


### Live events to meet people

WARNING: <a target="_blank" href="https://azure.microsoft.com/en-us/resources/videos/azure-friday-get-ready-for-global-azure-bootcamp-2019/">
The "Global Azure Bootcamp April 27, 2019" experience website 
<a target="_blank" href="https://global.azurebootcamp.net/">
global.azurebootcamp.net</a> has converted to Vue and Google stuff.


### Podcasts
 
   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/azure-friday-hd-channel-9/id739501868">Azure Friday</a> with <a target="_blank" href="https://azure.microsoft.com/en-us/resources/videos/azure-friday/">videos</a> by Scott Hanselman

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/microsoft-azure-cloud-cover-show-hd-channel-9/id417256457">Microsoft Azure Cloud Cover Show</a>

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/the-azure-podcast/id728193635">The Azure Podcast</a> by Sujit D'Mello

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/channel-9/id73802611">Channel 9</a> for all things Microsoft.

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/azure-tuesdays-with-corey/id1023243001">Azure Tuesdays with Corey</a> by Rick Claus

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/azure-ninjas/id1305172229">Azure Ninjas</a> (Microsoft Global Black Belts)


### azcopy

azcopy is a command-line utility designed for copying data to/from Microsoft Azure Blob, File, and Table storage, using simple commands designed for optimal performance. You can copy data between a file system and a storage account, or between storage accounts.

1. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10">Install azcopy</a> on your local machine.
1.  Set Authorizations 
    * To download: "Storage Blob Data Reader".
    * To upload: "Storage Blob Data Contributor" & "Storage Blob Data Owner".
    <br /><br />
1.  Gain access via Active Directory or Shared Access Signature (SAS):
    <pre><strong>azcopy login</strong></pre>
1.  Enter the code (for example) A1B2C3D4 to authenticate.
1.  <a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs-upload">Upload blobs from the command line</a> to Azure Blob storage.


## Azure Import/Export Service

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-service">Azure Import/Export Service</a> is used to transfer large amounts of data to and from Azure Blob storage and Azure Files by shipping disk drives to an Azure datacenter.

Download command-line tool <tt>WAImportExport.exe</tt> to prepare disk drives and copy data on Windows only.

Each order can be up to 5 SSD disk drives with 40TB total per order.


## Delete Subscription, Directory, Tenant

<pre><strong>az group delete --name $MY_RG</strong></pre>

https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/cancel-azure-subscription

https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/directory-delete-howto


## Resources

https://olohmann.github.io/azure-hands-on-labs/labs/07_iac/iac.html

https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/deployment/how-to-connect-fed-azure-adfs
ADFS (Azure Directory Federated Services)

https://azurelessons.com/

http://www.frankysnotes.com/2019/05/how-to-make-your-deployment-successful.html

https://azurefabric.com/azure-monitor-for-paas-services-where-is-the-ai-and-how-do-i-arm-it/
blog https://azidentity.azurewebsites.net/archive

https://www.linkedin.com/events/introtoarm-biceptemplates7091472660878028800/about/
by Brian Gorman

<a target="_blank" href="https://azure.microsoft.com/en-us/get-started/on-demand/">
"Get Started" videos by <a target="_blank" href="https://www.linkedin.com/in/ericdboyd/">Eric Boyd</a> responsiveX

<a target="_blank" href="https://www.microsoft.com/en-us/security/business/privacy/microsoft-priva-risk-management">
Microsoft Preva Privacy Risk Management</a>

https://www.microsoft.com/en-us/security/business/microsoft-purview
https://learn.microsoft.com/en-us/purview/purview
Microsoft Purview data protection and governance
for "Unified Data Governance"

https://www.youtube.com/watch?v=m1VWSWlrJa8
https://www.aGuideToCloud.com

Trainer Tim Warner (at timw.info) has been, over the years, been updating his <a target="_blank" href="https://github.com/timothywarner/frankenstein/blob/main/diagrams/tim-frankenstein-networking.png">"Frankenstein" diagram</a> that connects together as many Azure services as he can cram in:<br />
<a target="_blank" href="https://github.com/timothywarner/frankenstein/blob/main/diagrams/tim-frankenstein-networking.png?raw=true"><img alt="Frankenstein" src="https://github.com/timothywarner/frankenstein/blob/main/diagrams/tim-frankenstein-networking.png?raw=true"></a>

<hr />

<a name="More"></a>

## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
