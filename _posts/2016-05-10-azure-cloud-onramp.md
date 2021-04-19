---
layout: post
title: "Azure Cloud Onramp"
excerpt: "Get to know Subscriptions, Support plans, ARM portal Keyboard Shortcuts, Tags, Policies"
tags: [cloud, azure]
date: "2021-03-05"
file: "azure-cloud-onramp"
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

This is a hands-on deep-dive tutorial with commentary along the way, covering how to get an account into Azure, set MFA, use Active Directory.

<a target="_blank" href="https://wilsonmar.github.io/azure-cloud-onramp/">This</a> is the hands-on step-by-step tutorial I would give to an administrator getting up and running on Azure cloud.

## Quick Reference Links

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Usage </th><th> URL (bookmark these) </th><th> Notes </th></tr>
<tr valign="top"><td> Marketing </td><td>
   <a target="_blank" href="https://azure.com/"><strong>https://azure.com</strong></a> <em>redirects to</em><br />
   <a target="_blank" href="https://azure.microsoft.com/en-us/">https://azure.microsoft.com/en-us</a>
   </td></tr>
<tr valign="top"><td> Personal & corporate learning</td><td>
   <a target="_blank" href="https://techprofile.microsoft.com/en-us/"><strong>https://techprofile.microsoft.com/en-us</strong></a><br />
   <br />
   <a target="_blank" href="https://esi.microsoft.com/"><strong>https://esi.microsoft.com</strong></a>
   </td><td>integrates your learnings & cert. taken.
   </td></tr>
<tr valign="top"><td> Sign-up: </td><td>
   <a target="_blank" href="https://account.windowsazure.com/signup/"> 
   https://account.windowsazure.com/signup</a>
   </td></tr>
<tr valign="top"><td> Azure Enterprise Portal </td><td>
   <a target="_blank" href="https://ea.azure.com"><strong><u>https://ea.azure.com</u></strong></a>
   </td><td> Define departments
   </td></tr>
<tr valign="top"><td> Azure Enterprise Account Portal </td><td>
   <a target="_blank" href="https://account.azure.com"><strong><u>https://account.azure.com</u></strong></a><br /><em>(can be slow, no federation?)</em>
   </td><td> Accounts under departments
   </td></tr>
<tr valign="top"><td> Subscription dashboard: </td><td>
   <a target="_blank" href="https://portal.azure.com/"><strong><u>https://portal.azure.com</u></strong></a> <br />
   <a target="_blank" href="https://portal.azure.us/">https://portal.azure.us</a> for the <a href="#USGov">US Government portal</a>
   </td></tr>
<tr valign="top"><td> <a href="#AAD">Azure AD</a> </td><td>
   <a target="_blank" href="https://aad.portal.azure.com/"><strong><u>https://aad.portal.azure.com</u></strong></a>
   </td></tr>
<tr valign="top"><td> All Admin Centers </td><td>
   <a target="_blank" href="https://admin.microsoft.com/AdminPortal/Home#/alladmincenters"><strong><u>https://admin.microsoft.com/AdminPortal/Home#/alladmincenters</u></strong></a>
   </td></tr>
<tr valign="top"><td> Cloud Shell </td><td>
   <a target="_blank" href="https://shell.azure.com/"><strong><u>
   https://shell.azure.com</u></strong></a>
   </td></tr>
<tr valign="top"><td> Support </td><td>
   <a target="_blank" href="https://support.azure.com/"><strong><u>
   https://support.microsoft.com</u></strong></a>
   </td></tr>
</table>

<a name="USGov"></a>

### Microsoft Azure Government

   There is a separate <a target="_blank" href="https://azure.microsoft.com/en-us/global-infrastructure/government/">Azure fed/state/local gov</a> is an isolated "soverign" DoD Level 5 cloud on US soil operated by US citizens. It has its own Marketplace of apps. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome">What is gov?</a> 

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-government/compare-azure-government-global-azure">DOC: Compare Global vs. Gov</a>

   For example, <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-government/compare-azure-government-global-azure">endpoints</a> for Speech Studio Speech translation :
   * Virginia: https://usgovvirginia.s2s.speech.azure.us
   * Arizona: https://usgovarizona.s2s.speech.azure.us
   <br /><br />

   <a target="_blank" href="https://www.youtube.com/watch?v=6UDePj5newo&list=PLLasX02E8BPA5IgCPjqWms5ne5h4briK7&index=10">VIDEO: Terraform Provider Azure.gov</a> for standardized templates across clouds.

   <a target="_blank" href="https://www.pulumi.com/docs/intro/cloud-providers/azure/setup/">Pulumi</a> enables programmatic access (by a Python program) to Azure.

## Deals

1. Labs in Microsoft Learn provide FREE access two hours at a time.

1. Labs in CloudAcademy.com are included in some of their monthly subscriptions.

1. Obtain Azure credits as a benefit of a monthly license of Visual Studio (even though they don't intend on using the IDE):

   * $50/month credits for $39/mo Visual Studio Professional license
   * $150/month credits for $89/mo Visual Studio Enterprise license
   <br /><br />

   Visual Studio Subscriptions are not offered in the Brazil South and Central India regions, as noted in <a target="_blank" href="https://azure.microsoft.com/en-us/regions/offers/">https://azure.microsoft.com/en-us/regions/offers/</a> 

## Browser Profiles

PROTIP: When you return to the Portal, Azure knows your account because it stores a "cookie" in your browser.

That is a hassle when you're switching among different Azure accounts.

PROTIP: So if you're using Google Chrome, click the Chrome avatar at the upper-right corner to create a different profile for each Azure account.

   * <a href="#MSAccount">Learn account</a> using your personal email (such as at gmail.com).
   * Account using your Visual Studio benefit (using your work email)
   * Work account to do your job as an Administrator.
   <br /><br />

## Azure first-timer deals

   * Get a "Microsoft Learn" account for $200 of credits to spend in 30 days and also a year of <a href="#FreeSvcs">free services</a>.

   * After that instead of "Pay-As-You-Go",

   * PROTIP: Buy a Visual Studio Professional license for $39/month and get $50/mo credit each month. Kinda like almost free. See <a target="_blank" href="https://docs.microsoft.com/en-us/learn/azure/">docs.microsoft.com/en-us/learn/azure/</a>.
   * Buy a Visual Studio Enterprise license for $150/month credit on Azure.


### Job Roles

2. Microsoft aligned these job roles with <a target="_blank" href="https://wilsonmar.github.io/azure-certifications">Azure certification exams</a>:

   * (Azure) Administrator
   * (Azure) Developer
   * (Azure) Solution Architect
   * Data Engineer
   * AI Engineer
   * Business Analyst
   * Business User
   <br /><br />

   PROTIP: These learning roles are different than the <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles">Administrator role permissions in Azure Active Directory</a> (AAD).

   MY OPINION: I think job roles should be multi-select checkboxes.
   This segregation also adds to duplicating material.


   ## Global Admin Account

   <strong>Global Administrators</strong>, aka Company Administrators, in Azure AD have access to <strong>all services</strong> that use AAD identities like Microsoft 365 security center, Microsoft 365 compliance center, Exchange Online, SharePoint Online, and Skype for Business Online.

   PROTIP: Don't use that account regularly and set an Activity Alert when it is used. Have no MFA on it. Have 2-5 global admins. <a target="_blank" href="https://www.youtube.com/watch?v=vZ9uQtO7mSU&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=2">VIDEO</a> 

   PROTIP: Global Admin privileges are neede to enable <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">AD PIM (Privileged Identity Management)</a> for a directory.

   So it's important to assign other more specific roles. 

   ### Built-in User Roles for RBAC 

   PowerShell command:<br />
   <tt>Get-AzureRMRoleDefinition</tt> lists 75:

   * Application Administrators can create and manage all aspects of enterprise applications, application registrations, and application proxy settings.

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

   The basic categories are owner, contributor, and reader.

   User roles can be scoped to:
   * Tenant - LIMIT: Up to 2,000 roles can be defined for a tenant.
   * Management group
   * Subscription
   * Resource group
   * Resource
   <br /><br />

   BTW, after you follow instructions below on setting up CLI, this Bash command lists all the pre-defined roles:

   <pre><strong>az role definition list -o table --query [].roleName</strong></pre>

   ### Permissions

   Permissions to Actions are:
   * actions
   * notActions
   * dataActions
   * notDataActions
   <br /><br />

   The actions are implemented by resource providers.

   Each tenant is independent of all other tenants.


<a name="FreeSvcs"></a>

### First year free services

https://azure.microsoft.com/en-us/free/free-account-faq/

The clock is ticking:

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

PROTIP: It makes more sense to look at a live example populated with several resources, in context:


### Azure GUI thru CloudAcademy 

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
   * https://azure.microsoft.com/en-us/global-infrastructure/government/
   <br /><br />

1. PROTIP: Avoid using an email that you use for your own banking, shopping, social media, etc. For continuity with a real cloud, you'll need an email address that you can share and transfer to other people. That's so at a company, you will need to give someone else the password so that if you're ever go on vacation or get "run over a bus", your organization can continue.

   In you're in an enterprise company, get an email adddress from a corporate assets administrator. A different (service) account is often created for each department of responsibility.

   PROTIP: In the name include the month and year in the account name (such as johndoe1901@hotmail.com) for 2019-01 (January). Many <strong>create several email accounts</strong> because each Azure subscription includes a $200 credit to spend on any service for the <strong>first 30 days</strong>, free access to the most popular Azure products for 12 months. 

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

   "Isolated" = ISE zzz

   Azure AD supports auth protocols: OAuth, OpenID, SAML, WS-Federation to 

2. For birthdate, make up an adult year: 2019 - 22 = 1997

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

   ### Initial Entry Azure Advisor pop-up

1. Initial entry pop-up: Azure Advisor

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



   ### Support Plans

   * Standard (Basic) free for Prod. use
   * Developer $29/mo. for non-prod. use
   * Professional Direct $1000/mo for "Business Critical" when you file a business-critical issue with technical support, the earliest you can expect a response from technical support? Within 1 hour
   * Premier for "substantial dependence" with a TAM (Technical Account Manager).

   <a target="_blank" href="https://app.pluralsight.com/course-player?courseId=672143e9-2e2c-49d6-b5f4-6558d88f66e1">VIDEO "Microsoft Azure Pricing and Support Options"</a>

0. Right-click on the "Help + Support" box on the Dashboard and select "unpin"
   becuase you now know you can reach it (in two places).



   ### Box

   For Microsoft people to access a customer's unencrypted data, they are supposed to look into the "Lock Box" where a customer put files they want Microsoft to see.


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

0. Scroll down to click Help + Support (the person icon in blue). Notice the URL change:

   https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview

   Alternately, support requests can ALSO be reached by<br />
   clicking the question mark icon at the upper-right corner.

   ![azure help upper right 220x267](https://cloud.githubusercontent.com/assets/300046/25567655/c2642352-2dc0-11e7-9e6d-ef60c659a152.png)

   Notice Support options are also listed behind the smily face icon.

   Moreover, there is also a "Help + Support" box on the Dashboard.

   That's now 3 places you can find it.

0. Microsoft calls their business-level oriented collection of implementation guidance <a target="_blank" href="https://www.youtube.com/watch?v=9VJYVITjckw">VIDEO</a>: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/microsoft-cloud-adoption-framework-for-azure/">MS_LEARN</a>: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/">Microsoft Cloud Adoption Framework for Azure"</a>.

   Additional sites:

   https://microsoft.github.io/AzureTipsAndTricks/blog/tip1.html


   <a name="CLI_setup"></a>

   ### Shell Setup #

0. At <a target="_blank" href="https://shell.azure.com/">
   https://shell.azure.com</a>

1. Click "Create storage" if this is the first time and you see<br />
   <strong>You have no storage mounted</strong>

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/115131861-7e7f4180-9fb8-11eb-94f2-bbc1cb3d498b.png">
   <img width="709" alt="az-onboard-shell-storage-1418x328" src="https://user-images.githubusercontent.com/300046/115131861-7e7f4180-9fb8-11eb-94f2-bbc1cb3d498b.png"></a>

1. For "Cloud Shell region", select your favorite location, such as "West US".
1. For "Resource group", type "_shell_westus2".
1. For "Storage account", type "_shell_westus2"
   
   PROTIP: Files in your CLI <strong>clouddrive</strong> folder is stored in that <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Storage%2FStorageAccounts">Storage account</a>, beginning from CLI history, etc.

1. In <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResourceGroups">Portal: Resource Groups</a> notice default names created:
   * cloud-shell-storage-westus
   * NetworkWatcherRG
   <br /><br />


   <a name="ARM-Menu"></a>

   ### ARM Portal GUI Dashboard Tour #

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



   ### Naming conventions
   
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming">Naming conventions</a>:

   1. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations">rg, vm</a> = Resource asset type. 
   2. fin, mktg, product, it, corp = Business unit - organizational element that owns the subscription or workload the resource belongs to. 
   3. navigator, emissions, sharepoint, hadoop = Application or service name of the application, workload, or service that the resource is a part of.
   4. shared, central, client = Subscription type - the purpose of the subscription that contains the resource. 
   5. prod, dev, qa, stage, test = Deployment environment - The stage of the development lifecycle for the workload that the resource supports.
   6. westus, eastus2, westeu = Location/Region - The Azure region where the resource is deployed.



   <a name="ResourceGroups"></a>

   ### Resource Groups

   Before any resource can be provisioned, you need a resource group for it to be placed in, for provisioning, monitoring, maintenance.
   Each resource must be in a resource group. 

   Resource groups can be created by using the following methods:

   * <a href="#Portal">Azure portal GUI</a>
   * JSON Templates IaC templates (by custom REST API clients)
   * Azure Cloud Shell which enable: Azure PowerShell (Az modules)
   * Azure Bash CLI (az commands)
   * <a href="#Bicep">Azure Bicep (like Terraform)</a>
   * Azure programmatic SDKs using programming languages C# .NET, Java, Python, NodeJs (JavaScript), etc.
   <br /><br />

   PROTIP: A resource group can contain resources from multiple regions.

1. List resource groups created using CLI:

   <pre><strong>az group list -o table</strong></pre>

   For more details (SSH, Managed By), remove "-o table".
   See https://docs.microsoft.com/en-us/cli/azure/manage-azure-groups-azure-cli
   and https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-cli

   A resource cannot be split among several resource groups, each be a member of a single resource group. 


   <a name="Create_Resource_Group"></a>

   ### Create Resource Groups

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

   ### Region = Location

1. OPTIONAL: View briefings on CLI Bash or Storage (if you haven't already), then list regions:

   <pre><strong>az account list-locations -o table
   </strong></pre>

   <pre>DisplayName               Name                 RegionalDisplayName
------------------------  -------------------  -------------------------------------
East US                   eastus               (US) East US
East US 2                 eastus2              (US) East US 2
   </pre>

   Alternately, for just the name alone:

   <pre><strong>az account list-locations --query "[].{name:name, metadata:latitude}" -o table
   </strong></pre>

   <pre>Name
-------------------
eastus
eastus2
   </pre>

1. PROTIP: Select the Region (aka Location) closest to intended users, for pricing, and have features available. 

   PROTIP: There are differences in prices among regions. "WestUS" is generally the least expensive among US regions.

   Individual resources created within a Resource Group will be placed in the same region.


   ### CLI Naming convensions

   PROTIP: Since so many az commands refer to an Azure Resource Group, my scripts specify Resource Group or Location as the last item, using these naming conventions for enviornment variables:

   <pre><strong>MY_LOC="eastus"
MY_RG="azuremolchapter2"
az group create --name "${MY_RG}" \
   --location "${MY_LOC}"
   </strong></pre>

   PROTIP: Me standardizing means that you can use a different name safely by doing a "Change All" across all files.


   ### Tags

   Each tag is a name=value pair such as <tt>Department=Finance</tt>, <tt>Project=Advance1</tt>, <tt>Customer=Acme</tt>, etc. 

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
1. Select a Lock Type: "Delete"


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


<a name="Tenant"></a>

## Tenant

1. To switch among tenants in the Portal GUI, use the "Directory + subscription" filter at the top menu of every screen:

   <img alt="az-onramp-subscrip-462x263" width="462" height="263" src="https://user-images.githubusercontent.com/300046/112444406-9cd48300-8d13-11eb-9aac-24feb64af66a.png">

   Within PowerShell, define the default Tenant (if you need to sign into more than one Tenant):

   <pre><strong>Set-AzureRmContext
   </strong></pre>


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


1. <a target="_blank" href="https://www.youtube.com/watch?v=YlbFQtUFOY8&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=7" title="AZ Interactive mode by Dana Epps Oct 10, 2019">VIDEO</a> Azure provides contextual prompts in their:

   <pre><strong>az interactive</strong></pre>



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
   
   <pre>echo return | tr -d "[ ] \" \"" | awk -F, '{ print $1 }'
   </pre>

   To obtain the first part of the response, "/user/wisdom/tmpf14zjme.pem", which is used in subsequent commands.

   <tt>AZ_PEM_LOC="echo return | tr -d "[ ] \" \"" | awk -F, '{ print $2 }'"</tt>

   The second item in the query in the command above yields the APP_ID:

   AZ_APP_ID="echo $return | tr -d "[ ] \" \"" | awk -F, '{ print $2 }'"
   
   The third item is the Tenant ID. Both of these are GUIDs.
   
   The command has additional options:

   <prea>az ad sp create-for-rbac -n "lnx" \
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




## Azure AD & PIM

   Subscriptions include "Azure AD Premium P2" and "Enterprise Mobility + Security (EMS) E5".

   An additional paid subscription is <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">Azure AD Privileged Identity Management (PIM)</a> which minimizes the number of people who have access to secure information. It mitigates the risk of excessive, unnecessary, or misused access rights and provides oversight of role assignments, self-service, and just-in-time role activation and Azure AD and Azure resource access reviews.

   EMS (Enterprise Mobility + Security) includes:
   * AAD is the cloud-based IAM service to control access to internal and external applications
   * Microsoft Intune is used for MDM (Mobile Device Management) but also PCs to remote reset and wipe. compliance status
   * Azure Info Protection protects documents tagged to not be shared
   * Microsoft Cloud App Security
   * Microsoft Advanced Thereat Analytics (ATA) is an on-prem. platform to protect against targeted cyber attacks along the "Cyber Kill Chain" attack process (Domain Dominance) by parsing network traffic to create a behavioral profile about user activities.
   * Azure Advanced Threat Protection is a cloud-based triage tool which displays incidents on a timeline 
   <br /><br />

## Azure AD B2B (Business-to-Business) 
allows an organization to securely share company applications and company services with guest users from other orgs, while retaining control over company data. Auth policies protect corp. data. 

1. Portal Menu > Azure Active Directory. Select yours.
1. Users. +New guest user. Type email. Invite.
1. Guest user clicks "Get Started" in emai;.
<br /><br />
TODO: REST API?

## Azure AD B2C (Business to Consumer)
enables customers can use a registered app with the Identity Experience Framework
defines interacting with external multi-party Identity Providers (IdP's) such as Facebook.

It makes use of SYN cookies and rate & connection limits defined by a Trust Framework policy.

1. +Create a resource: Azure Active Directory B2C
1. Create.
1. An additional B2C Tenant is created
1. Create.
1. Link to subscription.



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



## Terraform for Azure

1. On a Mac, install using Homebrew instead of <a target="_blank" href="https://www.terraform.io/downloads.html">Download from Hashicorp website</a> or using 
<tt>brew install terraform</tt>:

   <pre><strong>brew install tfenv
tfenv install latest
   </strong></pre>


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


## Delete Subscription, Directory, Tenant

<pre><strong>az group delete --name $MY_RG</strong></pre>

https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/cancel-azure-subscription

https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/directory-delete-howto


## Topics

The fictional company for use in examples, <a target="_blank" href="https://github.com/microsoft/TailwindTraders/tree/master/Documents/DemoScripts/Integrating%20Azure%20DevOps%2C%20Microsoft%20Teams%20and%20GitHub">Tailwind Traders</a>


## Azure Futures Roadmap

PROTIP: The minimum prior notification will Microsoft give before ending support for products governed by the Modern Lifecycle Policy is 12 months.

* <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/WhatsNewBlade">"What's New" page on Azure Portal</a>

* <a target="_blank" href="https://azure.microsoft.com/en-us/blog/">Azure Blog</a> for Official announcements

* <a target="_blank" href="https://azure.microsoft.com/updates">azure.microsoft.com/updates</a> in now timing out. It has filters for GA vs. futures.

* <a target="_blank" href="https://www.youtube.com/watch?v=9RtzSIrRijg&list=RDCMUCp8lLM2JP_1pv6E0NQ38pqw&index=1">Azure This Week</a> by Lars Klint and <a target="_blank" href="https://www.youtube.com/channel/UCbjgKwnWnGG7sKCPTRgrFcw" title="Gwyn Pena-Siguenza">GPS</a> at <a target="_blank" href="https://www.acloudguru.com/">ACloudGuru.com</a>.


### Product Feature

"Public preview" means the feature is available for all Azure customers for beta testing.

GA (General Availability) means


## References

https://olohmann.github.io/azure-hands-on-labs/labs/07_iac/iac.html

https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/deployment/how-to-connect-fed-azure-adfs
ADFS (Azure Directory Federated Services)

https://azurelessons.com/


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
