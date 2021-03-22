---
layout: post
title: "Azure Cloud Onramp"
excerpt: "Get into and around the Azure Active Directory and ARM portals"
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

PROTIP: Bookmark these links

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="top"><td> Marketing </td><td>
   <a target="_blank" href="https://azure.com/">azure.com</a>
   = <a target="_blank" href="https://azure.microsoft.com/en-us/">azure.microsoft.com/en-us</a>
   </td></tr>
<tr valign="top"><td> Sign-up: </td><td>
   <a target="_blank" href="https://account.windowsazure.com/signup/"> 
   account.windowsazure.com/signup</a>
   </td></tr>
<tr valign="top"><td> Dashboard page: </td><td>
   <a target="_blank" href="https://portal.azure.com/"><strong><u>https://portal.azure.com</u></strong></a> or
   <a target="_blank" href="https://portal.azure.us/">portal.azure.us</a> for the <a href="#USGov">US Government portal</a>
   </td></tr>
<tr valign="top"><td> <a href="#AAD">Azure AD</a> </td><td>
   <a target="_blank" href="https://aad.portal.azure.com/"><strong><u>https://aad.portal.azure.com</u></strong></a>
   </td></tr>
<tr valign="top"><td> Personal </a> </td><td>
   <a target="_blank" href="https://techprofile.microsoft.com/en-us/"><strong>techprofile.microsoft.com/en-us</strong></a>
   integrates various information about your certifications and learnings taken within Microsoft.
    </td></tr>
</table>

<a name="USGov"></a>

## Microsoft Azure Government

   There is a separate <a target="_blank" href="https://azure.microsoft.com/en-us/global-infrastructure/government/">Azure fed/state/local gov</a> is an isolated "soverign" DoD Level 5 cloud on US soil operated by US citizens. It has its own Marketplace of apps. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome">What is gov?</a> 

## Azure first-timer deals

   * Get a "Microsoft Learn" account for $200 of credits to spend in 30 days and also a year of <a href="#FreeSvcs">free services</a>.

   * After that instead of "Pay-As-You-GO",

   * PROTIP: Buy a Visual Studio license for $39/month and get $50 of credit each month. See <a target="_blank" href="https://docs.microsoft.com/en-us/learn/azure/">docs.microsoft.com/en-us/learn/azure/</a>


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

   PROTIP: These learning roles are different than the <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles">Administrator role permissions in Azure Active Directory</a>.

   MY OPINION: I think job roles should be multi-select checkboxes.
   This segregation also adds to duplicating material.

   <strong>Global Administrators</strong>, aka Company Administrators, in Azure Active Directory have access to <strong>all services</strong> that use Azure Active Directory identities like Microsoft 365 security center, Microsoft 365 compliance center, Exchange Online, SharePoint Online, and Skype for Business Online.

   So it's important to assign other more specific roles:

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


<a name="FreeSvcs"></a>

## First year free services

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

## Azure GUI thru CloudAcademy 

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

   ### Windows RDP Command Line

1. <img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/general-1-All-Resources.svg">Click the "All Resources" icon for a list.

1. Switch back to the CloudAcademy screen, scroll to bottom to click "Next Step".
1. Click "Resource Group" under the Navigate label.

   <img alt="Resource Group" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-patterns/azure-resource-group-blue.svg">

1. Click the "cal-xxx-yy" presented.

1. PROTIP: The app for macOS suggested is no longer available in the store. Use one noted in <a target="_blank" href="https://wilsonmar.github.io/rdp/">my tutorial on RDP</a>.

1. <img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/general-17-Home.svg">Click the Azure Portal "Home" (accordion) menu in the upper-left corner.

1. Select "Virtual machines" in the left menu.

1. Click the running VM name in the list for the "Overview" blade.

1. Click "Connect", then "RDP". Click "Download RPD File". 
1. In the pop-up Finder, navigate to a container folder (such as "Projects"), create a folder, and save the RDP file.
1. Switch to Finder and navigate to your RDP file.

<hr />

## Microsoft Azure account

   * <a target="_blank" href="https://www.youtube.com/playlist?list=PLLasX02E8BPA5IgCPjqWms5ne5h4briK7">YouTube playlist on Azure</a> by Zach Kramer and Steve Michelotti
   * https://azure.microsoft.com/en-us/global-infrastructure/government/
   <br /><br />

1. PROTIP: Avoid using an email that you use for your own banking, shopping, social media, etc. For continuity with a real cloud, you'll need an email address that you can share and transfer to other people. That's so at a company, you will need to give someone else the password so that if you're ever go on vacation or get "run over a bus", your organization can continue.

   In you're in an enterprise company, get an email adddress from a corporate assets administrator. A different (service) account is often created for each department of responsibility.

   PROTIP: In the name include the month and year in the account name (such as johndoe1901@hotmail.com) for 2019-01 (January). Many <strong>create several email accounts</strong> because each Azure subscription includes a $200 credit to spend on any service for the <strong>first 30 days</strong>, free access to the most popular Azure products for 12 months. 

   Azure provide access to more than 25 products that are always free. 

   ### Azure Active Directory

   When someone signs up for a Microsoft cloud service subscription (such as Microsoft Azure, Office 365, Microsoft Intune, etc.), a dedicated instance of <strong>Azure AD (Active Directory)</strong> is created. 

   READ: <a target="_blank" href="https://microsoftlearning.github.io/AZ-900T0x-MicrosoftAzureFundamentals/Instructions/Walkthroughs/19-Use%20the%20Azure%20Pricing%20Calculator.html"><img width="20" alt="pricing" src="https://code.benco.io/icon-collection/azure-patterns/calculator-pricing-details.svg"></a> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/active-directory/">Azure Active Directory pricing</a>. Notice only the free version of Azure AD has that 500,000 <strong>object limit</strong>.

   Premium P1 features include Password Protection (custom banned password). Dynamic groups requires a Premium P1 license.

   Premium P2 includes all P1 features, plus really cool <strong>"Identity Protection"</strong> with these policies Assignment to all users:

   * Multi-factor authentication registration policy to Require MFT

   * User risk remediation policy to require password change, with review of number of users impacted

   * Sign-in remediation policy to automate analysis of signals from each sign-in, both real-time and offline, and calculates a risk score based on the probability that the sign-in wasn't performed by the user. Administrators can decide based on this risk score signal to enforce organizational requirements. Administrators can choose to block access, allow access, or allow access but require multi-factor authentication. If risk is detected, users can perform multi-factor authentication to self-remediate and close the risky sign-in event to prevent unnecessary noise for administrators.

   * Investigate risks using data in the portal.

   * Export risk detection data to third-party utilities for further analysis.

   ### Risk Events

   

   Risk level and risk detail fields are hidden to those with just the Azure AD Premium P1 edition.

   Advanced detections (such as unfamiliar sign-in properties) are not covered by your license, and will appear under the name Sign-in with additional risk detected. 

   P2 "Identity Governance" include Privileged Identity Management (PIM), Access Reviews, and time-saving <a target="_blank"" href="https://docs.microsoft.com/en-us/azure/active-directory/governance/entitlement-management-overview">Entitlement Management</a>.


   ### Azure AD PIM RBAC

   With the PIM (Priviledge Identity Mangement) service, each Admin is licensed at Preminu P2 level for time-base (Just-In-Time) Role-based access control (RBAC).

   ### Enterprise discount

   Available to Enterprise customers only: <a target="_blank" href="https://cloudacademy.com/course/understanding-azure-pricing-and-support/planning-and-management/">15% Discounts on Public Prices</a>


   <a name="Tenants"></a>

   ### AD Tenants

   The Azure SaaS service separates different customers into different <strong>tenants</strong> (like tenants in an apartment building). Each tenant is a dedicated, isolated instance of the Azure Active Directory service, owned and managed by an organization. 

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

5. Sign up for Azure:

   <a target="_blank" href="
   https://signup.live.com/signup"><strong>
   https://signup.live.com/signup</strong></a>

6. PROTIP: You don't need to sign-up for and pay for a subscription with your credit card until you have <strong>5 users</strong>.

   PROTIP: Use address with a zip code that's not associated with your home address, and used only for banking.

   Multiple subscriptions can be created under a single Azure account (Dev, Test, Staging, Production, Logging,  Demo, Training, DR, etc.). This is particularly useful for businesses because:

   PROTIP: access control and billing occur at the subscription level, not the account level.

   PROTIP: Each Subscription can only trust a single AAD directory.

   Transfer ownership of a subscription, such as to a central accounting department.

   Add additional subscriptions when you may exceed limits within a subscription: # VNets.

7. Install the <strong>Microsoft Authenticator app</strong> on you smartphone and setup Two-factor authentication to approve access using your phone.

8. Get a unique profile image and <a target="_blank" href="https://account.microsoft.com/profile/edit-picture?fref=home.banner.profile">add picture</a>.


<a name="ASM"></a>

### ASM obsoleted by ARM

On July 1, 2019, Microsoft fully transitioned from the "classic" (older) Azure Service Management (ASM) when <a target="_blank" href="https://docs.microsoft.com/en-us/azure/multi-factor-authentication/multi-factor-authentication-faq">Multi-factor authentication (through the PhoneFactor Web (PFWeb) portal), API Management, BizTalk, and Managed Cache became available to the Azure Resource Manager (ARM).


ASM had "Cloud Services" and "Affinity Groups"
which is structured with Resource Groups (logical containers)
providing a single-resource point-of-view [i.e. manage a single resource at a time].

ARM includes <strong>parallelization</strong> when creating resources for faster deployment of complex, interdependent solutions. 
ARM also includes granular access control, and the ability to tag resources with metadata.

Also, instead of 2 racks, ARM resources can span 3 racks of computers.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/111055690-eda3cc00-8435-11eb-9563-aa0fb3154d40.png"><img alt="az-arm-interfaces-599x315.png" width="599" src="https://user-images.githubusercontent.com/300046/111055690-eda3cc00-8435-11eb-9563-aa0fb3154d40.png"></a>

ARM handles Authentication for access to back-end Web App, Data Store, Virtual Machines, etc. from the Azure Portal GUI, PowerShell (Az module), CLI, and ARM IaC templates (by REST clients):


## Initial Entry Azure Advisor pop-up

0. Initial entry pop-up: Azure Advisor

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


<a name="ARM-Menu"></a>

## ARM Dashboard Tour #

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-overview">DOC</a>:

0. At <a target="_blank" href="https://portal.azure.com/">
   https://portal.azure.com</a>

0. Click the "wheel" icon for Portal Settings:
   
   PROTIP: If you wear glasses on video calls, reduce glare by clicking "Black" for the dark theme (with yellow font). 

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/111880191-8c1cb980-896f-11eb-9c8b-86d556a46843.png"><img width="1165" alt="azure-portal-dark-2330x1246" src="https://user-images.githubusercontent.com/300046/111880191-8c1cb980-896f-11eb-9c8b-86d556a46843.png"></a>

0. Click the "hamburger" (home) icon at the upper-left corner for English descriptions of each icon on the left edge.

0. Click the "<" icon at top of the separator to collapse ("dock") or expand the text of services listed on the left menu.

   PROTIP: To set its expansion state permanently, click the ‘settings cog’ icon in the top right of portal and click the ‘Choose your default mode for the portal menu’ option. Setting that to ‘docked’.


   ### GUI Navigation Hubs, Panes, blades

   DEFINITION: A <strong>Hub</strong> is a category for navigation within the left Azure Portal menu that is opened by clicking the upper-left accordion icon alt.

   Panes that appear on the right are called "blades".
   A <strong>Blade</strong> is a portion of the page that pops up as you navigate in the portal. (Note: A Blade is <strong>contextual</strong> and tied to your navigation. This will become more intuitive as you use the portal.) 

   Opening a series of blades is called a <strong>journey</strong>.

0. For a list of all Categories, click <img width="20" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/general-17-Home.svg">All Services, which also displays All Resources.

   PROTIP: This gives you an idea of how vast the Azure offering is, and the product names certification aspirants should know.

0. Click the <img width="20" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/command-1094-Favorite.svg">star icon so it is gold to enable the service to show on the menu or unselect to remove the service from the bar.

   <img width="20" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/general-17-Home.svg">Home

0. Drag and drop the Categories in a stable sequence and position you can mouse to quickly:

   Example: I drag the "Billing" icon to the top because I manage the money involved.

   ### License types

   BTW, billing is associated with <strong>Management Subscriptions</strong> with names such as "Pay-as-you-go..."


   ### Keyboard Shortcuts

0. Click Keyboard shortcuts in the menu.

   BLAH: I have no idea what G means. See:

   https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-keyboard-shortcuts


   ### Help + Support

0. Scroll down to click Help + Support (the person icon in blue). Notice the URL change:

   https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview

   Alternately, support requests can ALSO be reached by<br />
   clicking the question mark icon at the upper-right corner.

   ![azure help upper right 220x267](https://cloud.githubusercontent.com/assets/300046/25567655/c2642352-2dc0-11e7-9e6d-ef60c659a152.png)

   Notice Support options are also listed behind the smily face icon.

   Moreover, there is also a "Help + Support" box on the Dashboard.

   That's now 3 places you can find it.

   
   ### Support Plans

   * Standard (Basic) free for Prod. use
   * Developer $29/mo. for non-prod. use
   * Professional Direct $1000/mo for "Business Critical" when you file a business-critical issue with technical support, the earliest you can expect a response from technical support? Within 1 hour
   * Premier for "substantial dependence" with a TAM.

   <a target="_blank" href="https://app.pluralsight.com/course-player?courseId=672143e9-2e2c-49d6-b5f4-6558d88f66e1">VIDEO "Microsoft Azure Pricing and Support Options"</a>


0. Right-click on the "Help + Support" box on the Dashboard and select "unpin"
   becuase you now know you can reach it (in two places).


   <a name="Social"></a>

   ### Social Support Forums about Azure

   * <a target="_blank" href="https://azure.microsoft.com/en-us/support/community/">Azure.microsoft Community Forum</a>

   * <a target="_blank" href="https://social.msdn.microsoft.com/Forums/azure/en-US/home">MSDN</a>

   <em>Filtered for Most Votes on Accepted answers:</em>

   * <a target="_blank" href="https://stackoverflow.com/questions/tagged/azure?sort=MostVotes&filters=NoAcceptedAnswer&edited=true">StackOverflow</a>

   * <a target="_blank" href="https://serverfault.com/questions/tagged/azure">Serverfault</a>

   * <a target="_blank" href="https://channel9.msdn.com/Shows/Tuesdays-With-Corey/">Tuesdays with Corey</a> (Sanders, VP of Azure Compute, now Corporate VP of Microsoft Solutions, about Azure on Microsoft's Channel9 video site). <a target="_blank" href="https://twitter.com/search?f=realtime&q=%23AzureTwC&src=typd">#AzureTwC</a>
   
   ### Marketplace

0. Right-click on the "Marketplace" box on the Dashboard and select "unpin"
   becuase you can reach it this way:

0. Click on the green + icon for a list in the <strong>Marketplace</strong>. Additional categories are:

   * Web + Mobile
   * Containers
   * Blockchain
   <br /><br />
   
   <a target="_blank" href="https://linuxacademy.com/cp/socialize/index/type/community_post/id/16110">
   Click "Web + Mobile" to create a Web App on Azure</a> is a common use case.

0. Click the X to close a blade.


<hr />

## Add User

1. In the Users service: 

   REMEMBER: different Sources of users:

   * Windows Server AD, 
   * Invited User, 
   * Microsoft Account, 
   * External Azure Active Directory
   <br /><br />

1. New guest user.
1. Click New user.

   Two ways to create a user: Create user and Invite user.

1. Create a new user. Review Identity, Groups and roles, Settings, and Job Info.

1. Going back to Azure AD, under Manage click Groups.

1. Review the Group types: Security and Office 365.

1. Create a new group by clicking “New Group” with the Membership type as Assigned.

1. Add a user to the same group.

1. Create another new group with Membership type as Dynamic user.

1. Review the details to construct dynamic group membership rul
es.


   ### User MFA (Multifactor Authentication)

   MFA comes with Azure AD Premium.

   Enrollment is needed.

1. Click "Multi-Factor Authentication" in the Command bar.

   This is because MFA is set in a different service.

   Previously, MFA (Multi-Factor Authentication) was hidden behind "..." (More) in All Users menu bar.

1. Check the box next to a user before clicking "Enable" on the right.

   Thus, only users licensed to use Microsoft Online Services are eligible for Multi-Factor Authentication.

   ### Types of Factors

   Types of factors used to authenticate a user request via multi-factor authentication (MFA):

   * A knowledge factor - something the user knows - Password (in Azure AD)

   * A possession factor - something the user owns, such as an email address or mobile device.

   * An "inheritance" factor (is) - something that confirms identity via a physical characteristic, such as a fingerprint or other biometric. (NOT an identity factor)
   <br /><br />

Methods of MFA:
   * Password (in Azure AD)
   * Call to Phone
   * SMS Text Message to Phone
   * Notification through Mobile Authenticator App
   * Verification Code from Mobile App
   * One Time Pin (OTP) from a Hardware (Ubi) Token
   <br /><br />


<a name="AAD"></a>

## AAD (Azure Active Directory)

PROTIP: Azure AD users and groups are created in a <strong>flat structure</strong>, with no Organizational Units (OUs) or Group Policy Objects (GPOs) as in classic Active Directory on-prem.


### SSPR (Self-Service Password Reset)

Allow end-users to reset forgotten passwords without calling the Helpdesk. Not in free version of AAD.


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


   ## Management Group Initiative

1. <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=ff82e602-05c5-4b71-b907-a011015d2859">VIDEO</a>: All Services -> Management Groups to apply governance conditions (access & policies) above Subscriptions.

1. Add Subscription


   ## Policies and Initiatives

   An <strong>initiative</strong> describes a group of policies across different management groups, subscriptions, resource groups, ?


   <a name="Tenant"></a>

## Tenant

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=4h29m37s">VIDEO</a>

1. If you have an account that signs into more than one Tenant, define the default Tenant using PowerShell:

   <pre><strong>Set-AzureRmContext
   </strong></pre>


## Subscriptions

Below tenant can be multiple Subscriptions per tenant (e.g. for depts.)
   A <strong>Subscription</strong> is a billing boundary linked to an Azure account
   AND A container for resource groups.

Subscription types:
   * Azure pass (e.g. with a course)
   * MSDN (Developer Network)
   * Azure trial
   * Pay-as-you-go (most common)
   * Enterprise (involves a minimum commitment)
   <br /><br />

The 2000 role assignments limit per subscription is fixed and cannot be increased.


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


## Policies

Policies are rules stating which resources can be deployed to which locations
   * Microsoft provides a number of built-in policies
   * Create custom policies using JSON

Assign at resource level or resource group level
   * Child resources don’t inherit tags from group level
   
   PROTIP: All resources in a resource group should share the same lifecycle.

## Tags

Tags are your own metadata for:
   * Searching
   * Viewing
   * Billing
   
Name and value pairs:
   * Project = Acme 


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

1. The script uses this command to log you in:

   <pre>az login -u "$AZ_USER" -p "$AZ_PASSWORD"</pre>

   If you have not signed up for a <strong>subscription</strong>, you'll get an error such as:
   "No subscriptions were found for 'None'. If this is expected, use '--allow-no-subscriptions' to have tenant level accesses"

   CAUTION: Logging in online imbues you with a full set of permissions that a login using the az command does not
   fully possess.


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

   <tt>az ad sp create-for-rbac -n "lnx" \
   --role contributor \
   --scopes /subscriptions/ssssssss-ssss-ssss-ssss-ssssssssssss
   </pre>


   ### Login for sure

6. Now we take the
   <a target="_blank" href="https://lnx.azurewebsites.net/directory-roles-for-azure-ad-service-principal/">
   NOTE</a>: 
   
   <tt>az login --service-principal -u "$AZ_APP_ID" \
   -p "$AZ_PEM_LOC" --tenant "$AZ_TENANT"</tt>

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

   An additional paid subscription is <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">Azure AD Privileged Identity Management (PIM)</a> which minimizes the number of people who have access to secure information, which mitigates the risk of excessive, unnecessary, or misused access rights and provides oversight of role assignments, self-service, and just-in-time role activation and Azure AD and Azure resource access reviews.


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


### Public Preview

When an Azure service feature is in public preview, it means the feature is available for all Azure customers for beta testing.

## Topics

Devices are managed on Azure AD

Users on another Azure AD (B2B) or public IDP (B2C)


<a target="_blank" href="https://github.com/Azure/azure-quickstart-templates/">This</a> contains Azure Resource Manager templates contributed by the community.

## Azure Futures Roadmap

* <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/WhatsNewBlade">"What's New" page on Azure Portal</a>

* <a target="_blank" href="https://azure.microsoft.com/en-us/blog/">Azure Blog</a> for Official announcements

* <a target="_blank" href="https://azure.microsoft.com/updates">azure.microsoft.com/updates</a> in now timing out. It has filters for GA vs. futures.


## References

https://olohmann.github.io/azure-hands-on-labs/labs/07_iac/iac.html

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
