---
layout: post
title: "Salesforce Non-profits"
excerpt: "How the Benefit corp benefits non-profits, technically"
tags: [salesforce]
image:
# feature: sf-ohana-1900x500-178173.jpg
  feature: https://user-images.githubusercontent.com/300046/43407734-bd6303fe-93dc-11e8-87df-302ddbc274ff.jpg
  credit: Salesforce
  creditlink: https://trailhead.salesforce.com/trailblazers
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This article provides an introduction to how non-profits make use of Salesforce and its NPSP (Non-Profit Success Pack).

Salesforce has a generous industry-leading approach to supporting non-profits. Their web page about that is at:
<a target="_blank" href="http://www.salesforce.org/nonprofit/">http://www.salesforce.org/nonprofit</a>

Note that salesforce.org is a separate business entitity than Salesforce, Inc.
Employees of salesforce.org don't get CRM stock.

1. Salesforce nurtured creation of NPSP - the Non-Profit Success Pack described at
   http://www.salesforce.org/nonprofit/nonprofit-success-pack/

   * Non-profit
   * Higher Ed. (HEDAP)
   <br /><br />


   ### Registered Non-Profits Only

   Salesforce.org runs a <strong>Power of Us Hub</strong> online community for nonprofit and higher ed Salesforce users.

   However, it's only for those who have been recognized by Salesforce as a Non-profit organization.

2. Open a new Private Tab on your browser to URL:

   <a target="_blank" href="https://powerofus.force.com/">https://powerofus.force.com</a>

   This is so it doesn't pick up history.

3. Use a Salesforce account that is NOT associated with a Developer Edition. Or you'll see this error:

   <img alt="sf-npsp-unauth-333x287-18899.jpg" width="333" src="https://user-images.githubusercontent.com/300046/45505894-0c348980-b74b-11e8-9127-b5f49cb6b509.jpg">

4. There is a SMS verification step for first time access.

## Modules

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th>id</th><th>GitHub</th><th>Docs</th><th># Builds</th></tr>
<tr valign="top"><td>npe5</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Affiliations">.../Affiliations</a></td><td><a target="_blank" href="#"></a></td><td align="right">122</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/CampaignTools">.../CampaignTools</a></td><td><a target="_blank" href="#"></a></td><td align="right">347</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Contacts_and_Organizations">.../Contacts_and_Organizations</a></td><td><a target="_blank" href="#"></a></td><td align="right">268</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Cumulus">.../Cumulus</a></td><td><a target="_blank" href="#"></a></td><td align="right">20,362</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/CumulusCI-Test">.../CumulusCI-Test</a></td><td><a target="_blank" href="#"></a></td><td align="right">273</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/HEDAP">.../HEDAP</a></td><td><a target="_blank" href="http://developer.salesforce.org/HEDAP/ApexDocumentation/API.html"></a></td><td align="right">2,952</td></tr>
<tr valign="top"><td>np01/np02</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Households">.../Households</a></td><td><a target="_blank" href="#"></a></td><td align="right">274</td></tr>
<tr valign="top"><td>npe03</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Recurring_Donations">.../Recurring_Donations</a></td><td><a target="_blank" href="#"></a></td><td align="right">238</td></tr>
<tr valign="top"><td>npe4</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Relationships">.../Relationships</a></td><td><a target="_blank" href="#"></a></td><td align="right">172</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Volunteers-for-Salesforce">.../Volunteers-for-Salesforce</a></td><td><a target="_blank" href="#"></a></td><td align="right">810</td></tr>
</table>

All repos are under https://github.com/SalesforceFoundation/...


## Install in DE Org

1. Go to the latest version:
   
   https://mrbelvedere.salesforcefoundation.org/mpinstaller/npsp

2. Click "Log In" at the bottom of the page to select
   "Production or Developer Edition org".
3. Provide your credentials.
4. Click "Allow" for the "Examining your org" to flash by before the "Installation Bundles and Packages" page appears.

   ![sfnpsp-installers-648x424-34529](https://user-images.githubusercontent.com/300046/45557872-d3082200-b7fb-11e8-8a50-753ea3bc2156.jpg)

   BTW the "hot dog" icons say "Metadata from Github" and "Metadata from Zip".
6. Click "Install"
7. Look for emails from "support@salesforce.com" for each of the 9 items listed above, such as "Package Contacts & Organizations Install Successful".

   "Some components, such as custom objects, custom report types, and workflow rules, must be activated using the package deploy process, before they are available to your organization."

   Your matching rule NPSP Contact Personal Email Match for identifying duplicate records has been activated and is now ready to use.

   ### Configuration

1. Open a New Ingonito window and login.

   PROTIP: Press command+` (back-tick) to switch among browser windows.

   https://powerofus.force.com/articles/Resource/NPSP-Post-Install-Checklist
   outlines these steps:

1. Create Opportunity Sales Processes, Record Types, and Stages. For example, if your organization handles memberships, create a Membership Record Type and appropriate stages for a Membership opportunity's process.

1. Assign New Record Types to Profiles

1. Edit Page Layouts

1. Assign Page Layouts

1. Override Lead Conversion Button

1. Run Health Check

   Select the NPSP Settings tab, then select System Tools.

1. To confirm that everything appears as it should, create a test contact, account/household and opportunity.

1. Post feedback at:
   https://powerofus.force.com/_ui/core/chatter/groups/GroupProfilePage?g=0F980000000CjRe

## User usage steps

1. Sign in to see the default "home" page for Salesforce "Nonprofit Starter Pack" app,
users have standard objects "Accounts", "Contacts", and "Reports".

   PROTIP: Just as Non-profit accounting are different than for-profit enterprises,
   non-profits have a whole different set of objects, such as:

   * Donations and Recurring Donations [package]
   * Campaigns 
   <br /><br />

2. Click "Reports" among the top tabs.

   Each dashboard illustrates data in one or more reports.

   VIDEO: <a target="_blank" href="http://cathexispartners.com/salesforce-reporting/">Salesforce Reporting 101 for Nonprofits</a> May 10, 2018<br />
   <a target="_blank" href="https://www.youtube.com/watch?v=rV7UiJaAGNI">Salesforce Reporting 201 for Nonprofits</a>

   PROTIP: Reports in Salesforce are organized within <strong>folders</strong>.
   The "Unfiled Public Reports" folder is at the top because it's a "dumping ground" for reports that are newly created.

   Reports specific to nonprofits:

   * Households (Contacts and Organizations) [package]
   * Donations, which can consist of:
     * Soft Credits
     * Matching Gifts/Grants
     * In-Kind Gifts
   * Volunteers
   <br /><br />

   Custom reports can include additional non-profit objects:

   * Constituents
   * Affliations
   <br /><br />

Processes for nonprofits include fundraising, volunteer and grant management, advocacy, peer-to-peer campaigns.

Nevertheless, non-profits have similar needs for IT support as any organization:

   * Data cleansing, de-duplication, and maintenance
   * Data migration, mapping, and field creation
   * Email marketing

   * Custom development on the Force.com platform
   * Training on Salesforce CRM
   <br /><br />


1. Sign up for

   http://www.salesforce.org/nonprofit/power-of-us/

1. http://www.salesforce.org/nonprofit/nonprofit-success-pack/watch-nonprofit-success-pack-demo/
   Register to watch the <a target="_blank" href="https://www.youtube.com/watch?time_continue=3&v=G4wboqDoGT0">unlisted demo video</a> [3:32] Uploaded on Jan 13, 2017 shows screens to cover the full lifecycle of donors and donations.
   
   <a target="_blank" href="https://www.youtube.com/channel/UC6ZEIvlahVCA8k5tYTr_a2A">Salesforce.org YouTube videos</a>

SAL

1. PROTIP: You don't need to be a non-profit to install NPSP. Download from:

   https://powerofus.force.com/articles/Resource/Install-NPSP

   To install NPSP on an existing Salesforce organization:

1. Visit the NPSP Installer page at http://mrbelvedere.salesforcefoundation.org/mpinstaller/npsp
   and http://developer.salesforce.org/mrbelvedere/
1. Log in to your Salesforce organization by clicking Log In, choosing Production or Developer Edition org or 1. Sandbox org, and entering your login credentials.
1. Review the installation list and click Install.
1. Once you've completed your upgrade, consult these post-install instructions:

   https://powerofus.force.com/articles/Resource/NPSP-Post-Install-Checklist

   https://github.com/SalesforceFoundation/Cumulus/wiki

http://developer.salesforce.org/Cumulus/ApexDocumentation/index.html

https://cumulusci.readthedocs.io/en/latest/
   talks about the Python-based Robot Framework for testing.

https://github.com/SalesforceFoundation/Cumulus/wiki/Cumulus-CI-Build-Instructions
Cumulus CI Build Instructions

https://mrbelvedereci.herokuapp.com/
status of builds on the build server on Heroku

   Log in by authorizing mrbelvedereci-sfdo (third-party OAuth application)

   Subject "[mrbelvedereci] Please Confirm Your E-mail Address"
   Click "Confirm" in the web page that pops up.

https://mrbelvedereci.herokuapp.com/repos/


## Code

Previously, the original NPSP code resided in package repositories.

1. The current version of the Salesforce.org NPSP is  open sourced under BSD-licenses at:

   https://github.com/SalesforceFoundation/Cumulus

   PROTIP: It has hundreds of open Issues and dozens of open Pull Requests.

1. http://developer.salesforce.org/Cumulus/ApexDocumentation/

   "Dev" is the only permanent branch.


## Cumulus Continuous Integration

1. The "Mr. Belvedere" GitHub repository at

   https://github.com/SalesforceFoundation/mrbelvedere

   Lightweight, Salesforce specific CI app run on Heroku to build Github repositories configured for CumulusCI

   https://github.com/SalesforceFoundation/MetaCI

   https://github.com/SalesforceFoundation/CumulusCI
   <strong>CumulusCI</strong> is a Python framework for building portable automation for Salesforce projects.

   https://github.com/SalesforceFoundation/CumulusCI-Test
   CumulusCI-Test is a dummy project used to test CumulusCI - CumulusCI will run this project through the whole CI flow to verify everything works 

Python framework for building portable automation for Salesforce projects


 Jenkins, Ant, GitHub, and internal packages 

1. https://github.com/SalesforceFoundation/Cumulus/wiki

   Ant is used (instead of Maven) because there is a Force.com Ant Migration tool. 
   Ant is extenable with macros and targets. It runs build.xml properties file in GitHub.
   
1. The <a target="_blank" href="https://github.com/SalesforceFoundation/Cumulus/wiki/Reference-Guide-to-Project-Classes">list of class names</a> provides an indication of the functional scope of the effort.


## Cinnamon testing

   cinnemon are browser-based tests of Apex classes written in Gherkin for Cucumber run by Selenium invoked by Jenkins via ccli on SauceLabs VMs. It tests JavaScript drop-down lists which Apex tests don't cover.

1. https://forcedotcom.github.io/cinnamon/

https://github.com/forcedotcom/cinnamon

## Build

1. View the <a target="_blank" href="https://www.youtube.com/watch?v=Cm42ZF5MrLA">Continuous Integration (CI) and Project Cumulus</a> Jan 31, 2014 [1:00:49] by Jason Lantz
  
1. CucumulusCI at https://github.com/SalesforceFoundation/CumulusCI 
   is a Python framework for building portable automation for Salesforce projects

   https://github.com/SalesforceFoundation/Cumulus/wiki/Cumulus-CI-Build-Instructions
   Jenkins build processes used in the Cumulus release process as well as instructions for solving common build issues.

1. https://cumulusci.readthedocs.io/en/latest/
   CumulusCI’s documentation!

## Social

@SFDCFoundation

<a target="_blank" href="http://www.salesforce.org/power-of-us"> The Power of Us" community</a>.

https://github.com/salesforce/vulnreport

## References

* Documentation about installation is included among other topics at:
   
   <a target="_blank" href="https://powerofus.force.com/articles/Resource/NPSP-Documentation">https://powerofus.force.com/articles/Resource/NPSP-Documentation</a>


<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
