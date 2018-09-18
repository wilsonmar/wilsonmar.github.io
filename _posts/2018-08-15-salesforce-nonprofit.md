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

This article are my  notes about the NPSP (Non-Profit Success Pack) from the Salesforce Foundation and friends.
When done, it will be a hands-on succinct introduction to how non-profits make use of NPSP.

## Non-profit integral

Salesforce has a generous industry-leading approach to supporting non-profits. Their 1/1/1 was institued at the founding of the company in 1998, not as an after-thought.

Salesforce provides free to non-profits its first 10 seat licenses, then <a target="_blank" href="http://www.salesforce.org/nonprofit_product/nonprofit-editions-pricing/">24% of the commercial licensing rates</a> for those with:

   - IRS Determination Letter of 501(c)(3) tax exempt status, 
   - IPEDS ID from the National Center for Education Statistics (NCES),
   - Acceptable evidence of 501(c)(4) status, such as copy of the Form 990

1. salesforce.org is a separate employer entitity than Salesforce, Inc.
   (Employees of salesforce.org don't get CRM stock.)

   <a target="_blank" href="http://www.salesforce.org/nonprofit/">http://www.salesforce.org/nonprofit</a>

   Three clouds (apps):

   * Nonprofit Cloud
   * Education Cloud
   * Philanthropy Cloud
   <br /><br />

   "CRM" in the nonprofit world means "<strong>Constituent</strong> Relationship Management".

2. <a target="_blank" href="https://www.youtube.com/watch?v=wpFTdv3v4tM&t=5m6s">This demo video</a> shows some great benefits from adoption:

   ![sfnpsp-benefits-648x302-27355](https://user-images.githubusercontent.com/300046/45586111-44081200-b8ae-11e8-9d60-d963448a49cc.jpg)

   The Salesforce Foundation launched in 2014 "Salesforce for Nonprofits" [8:37]:

   <a target="_blank" title="sfnpsp-connected-891x453-49722.jpg" href="https://user-images.githubusercontent.com/300046/45586115-54b88800-b8ae-11e8-9f0a-871814b73b7e.jpg">
   <img alt="sfnpsp-connected-891x453-49722.jpg" src="https://user-images.githubusercontent.com/300046/45586115-54b88800-b8ae-11e8-9f0a-871814b73b7e.jpg"></a>

3. nurtured creation of NPSP (Non-Profit Success Pack) which adds to core Salesforce orgs specifically for non-profits. It's described at
   
   <a target="_blank" href="http://www.salesforce.org/nonprofit/nonprofit-success-pack/">http://www.salesforce.org/nonprofit/nonprofit-success-pack</a>

   * Non-profit
   * HEDAP = HEDA (Higher-Ed Data Architecture) Package
   <br /><br />

   <a target="_blank" href="https://www.youtube.com/watch?v=x4QbZRIGyG0">VIDEO</a>: <a target="_blank" href="https://roundcorner.com/ngo-connect/">roundCorner's NGO-Connect</a> further customizes NPSP.

   Early versions were called "Nonprofit Starter Pack".


## Power of Us Only for Registered Non-Profits

1. If you are a non-profit, register at http://www.salesforce.org/npsp-trial/

1. Salesforce.org runs a <strong>Power of Us Hub</strong> online community for nonprofit and higher ed Salesforce users.

   <a target="_blank" href="http://www.salesforce.org/power-of-us">http://www.salesforce.org/power-of-us</a>

   MEH: It's only for those who have been recognized by Salesforce as belonging to a Non-profit organization.

2. So that your browser doesn't pick up irrelevant history, open a new Private Tab on your browser to URL:

   <a target="_blank" href="https://powerofus.force.com/">https://powerofus.force.com</a>

3. Use a Salesforce account that is NOT associated with a Developer Edition, or you'll get this error:

   <img alt="sf-npsp-unauth-333x287-18899.jpg" width="333" src="https://user-images.githubusercontent.com/300046/45505894-0c348980-b74b-11e8-9127-b5f49cb6b509.jpg">

4. There is a SMS verification step for first time access.

5. If you can get in, then you can post feedback at:
   https://powerofus.force.com/_ui/core/chatter/groups/GroupProfilePage?g=0F980000000CjRe

6. Attend https://powerofus.force.com/articles/Customer_Service/Salesforce-com-Foundation-Weekly-Office-Hours
   1st & 4th Friday in each month at 9:00AM Pacific / 11:00AM Central / noon Eastern 

## Install in DE Org

If you don't have a "real" non-profit org:

1. Go to the latest version:
   
   https://mrbelvedere.salesforcefoundation.org/mpinstaller/npsp

2. Click "Log In" at the bottom of the page to select
   "Production or Developer Edition org".
3. Provide your DE credentials.
4. Click "Allow" for the "Examining your org" to flash by before the "Installation Bundles and Packages" page appears.

   ![sfnpsp-installers-648x424-34529](https://user-images.githubusercontent.com/300046/45557872-d3082200-b7fb-11e8-8a50-753ea3bc2156.jpg)

   The "hot dog" icons say "Metadata from Github" and "Metadata from Zip".

6. Click "Install".
7. Look for emails from "support@salesforce.com" for each of the 9 items listed above, such as "Package Contacts & Organizations Install Successful".

   "Some components, such as custom objects, custom report types, and workflow rules, must be activated using the package deploy process, before they are available to your organization."

   "Your matching rule NPSP Contact Personal Email Match for identifying duplicate records has been activated and is now ready to use.

8. Determine whether Aloha has been enabled via the Subscriber Overview page that comes with the LMA application.

## Model of Relationships among Data Objects

Internally, data values are stored within "objects" that hold data, like a tab within a spreadsheet.
Within an object, each row is a record and each column is a field.
That's why the above are also called "object models", which is the basis for how data is imported.

<a target="_blank" href="https://s3-us-west-2.amazonaws.com/sfdo-docs/npsp_entity_relationship_diagram.pdf">
<img alt="sfnpsp-erd-584x407.png" width="584" src="https://user-images.githubusercontent.com/300046/45602571-f12d7800-b9dd-11e8-83cd-5ef11911317f.png"><small>Click the Entity Relationship Diagram above to download its zoomable PDF.</small></a>

Standard Salesforce (before NPSP) are in blue.
NPSP modifies Salesforce databases and programming code to use different words on screen layouts, reports, and dashboards:

   * Contacts => Constiuents and Donors in NPSP
   * Accounts (companies) => Households in NPSP 
   * Opportunities (products) => Donations in NPSP (revenue-generating events)

These are referred to using several terms: data model, account model, household account model, object model.

At the upper-left, the fork symbol at the end of blue lines to leads illustrate that many leads can lookup details about the same campaign.
A particular level can be assigned to many households (accounts).

View objects in Setup > Object Manager > select an object > Fields & Relationships.

Use the Schema Builder drag and drop Salesforce tool for creating a custom objects.

## Configuration

1. On a Chrome browser, open a New Ingonito window and login.

   PROTIP: Press command+` (back-tick) to switch among browser windows.

   https://powerofus.force.com/articles/Resource/NPSP-Post-Install-Checklist
   outlines these steps:

1. Click your profile picture to switch to Classic (Visualforce) UX.

1. Create Opportunity Sales Processes, Record Types, and Stages. For example, if your organization handles memberships, create a Membership Record Type and appropriate stages for a Membership opportunity's process.

1. Assign New Record Types to Profiles

1. Edit Page Layouts

1. Assign Page Layouts

1. Override Lead Conversion Button

1. Run Health Check: Select the NPSP Settings tab, System Tools, click "Run Health Check".

   "The Opportunity stage Pledged does not exist or is not active.
   Add this Opportunity Stage value in Salesforce Setup.

1. To confirm that everything appears as it should, create a test contact, account/household, and opportunity.

## Usage

https://trailhead.salesforce.com/trails/nonprofit_fundraising

## Page Layouts

https://powerofus.force.com/articles/Resource/NPSP3-Page-Layouts

   * Donation
   * Grant
   * In-Kind Gifts
   * Matching Gifts
   * Memberships

### Legacy Data Model

Pages use a "Household Account Model".
Some of the code references a legacy data model (whether that is One-to-One Individual or Bucket Individual).

### Reports usage

https://s3-us-west-2.amazonaws.com/sfdo-docs/npsp_reports.pdf contains the NPSP Reports Workbook June 28, 2017.

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
   * <a href="#V4S">Volunteers</a>
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


1. http://www.salesforce.org/nonprofit/nonprofit-success-pack/watch-nonprofit-success-pack-demo/
   Register to watch the <a target="_blank" href="https://www.youtube.com/watch?time_continue=3&v=G4wboqDoGT0">unlisted demo video</a> [3:32] Uploaded on Jan 13, 2017 shows screens to cover the full lifecycle of donors and donations.
   
   <a target="_blank" href="https://www.youtube.com/channel/UC6ZEIvlahVCA8k5tYTr_a2A">Salesforce.org YouTube videos</a>



<a name="Repos"></a>

## Open-Source Repositories

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th>id</th><th align="left"><a target="_blank" href="https://github.com/SalesforceFoundation/">https://github.com/<br />SalesforceFoundation/</a>...</th><th>Docs</th><th># Builds</th></tr>
<tr valign="top"><td>npe5</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Affiliations">.../Affiliations</a></td><td><a target="_blank" href="#"></a></td><td align="right">122</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/CampaignTools">.../CampaignTools</a></td><td><a target="_blank" href="#"></a></td><td align="right">347</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Contacts_and_Organizations">.../Contacts_and_Organizations</a></td><td><a target="_blank" href="#"></a></td><td align="right">268</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Cumulus">.../Cumulus</a></td><td><a target="_blank" href="#"></a></td><td align="right">20,362</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/CumulusCI-Test">.../CumulusCI-Test</a></td><td><a target="_blank" href="#"></a></td><td align="right">273</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/HEDAP">.../HEDAP</a></td><td><a target="_blank" href="http://developer.salesforce.org/HEDAP/ApexDocumentation/API.html"></a></td><td align="right">2,952</td></tr>
<tr valign="top"><td>np01/<br />np02</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Households">.../Households</a></td><td><a target="_blank" href="#"></a></td><td align="right">274</td></tr>
<tr valign="top"><td>npe03</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Recurring_Donations">.../Recurring_Donations</a></td><td><a target="_blank" href="#"></a></td><td align="right">238</td></tr>
<tr valign="top"><td>npe4</td><td><a target="_blank" href="https://github.com/SalesforceFoundation/Relationships">.../Relationships</a></td><td><a target="_blank" href="#"></a></td><td align="right">172</td></tr>
<tr valign="top"><td>-</td><td><a target="_blank" href="#V4S">.../Volunteers-for-Salesforce</a></td><td><a target="_blank" href="#"></a></td><td align="right">810</td></tr>
</table>

### Cumulus 

Cumulus is the core NPSP repository.
It has hundreds of open Issues and dozens of open Pull Requests.

1. https://cumulusci.readthedocs.io/en/latest/ (stored within https://github.com/SFDO-Tooling/CumulusCI/blob/master/docs/why_cumulusci.rst)

1. Within the <a target="_blank" href="https://github.com/SalesforceFoundation/Cumulus/wiki">Cumulus wiki</a> is information about each (Apex) class at http://developer.salesforce.org/Cumulus/ApexDocumentation/index.html - the Nonprofit Success Pack Codebase Documentation.
   Abbreviations, alphabetically:

   * ACCT = Account
   * ADDR = Address
   * AFFL = Affiliations
   * ALLO = Allocations 
   * BDE = Batch Data Entry
   * BDI = Batch Data Import
   * CON = Contact (Merge)
   * CONV = Conversion
   * CTRL = Control
   * EP = Engagement Plans
   * ERR = Error
   * HH = Households
   * LD = Lead (conversion)
   * LVL = Level
   * MTCH = Matching (gifts)
   * OPP = Opportunity
   * PMT = Payment
   * PSC = Payment Soft Credits
   * RLLP = Rollup
   * RD = Recurring Donations
   * RP = 
   * REL = Relationships
   * SDRs = Sales Relationship Representatives
   * STG = Settings
   * TDDM = Table-Driven Trigger Management
   * USER = Users
   * UTIL = Utility

1. http://developer.salesforce.org/Cumulus/ApexDocumentation/

   "Dev" is the only permanent branch.

### Donations

In Opportunity objects, many non-profits use General Accounting Units (GAUs) to segregate donated funds for specific purposes or special restrictions (such as a scholarship GAU specifically for scholarships). 

### TDTM

https://powerofus.force.com/articles/Resource/NPSP-Apex-Class-Descriptions
describes each Table-Driven Trigger Management class in the code at:
https://github.com/SalesforceFoundation/Cumulus/tree/rel/3.110/src/classes



## Setup for DX:

   * In the orgs folder, a json file defines features enabled in each environment (feature, dev, beta, release)
   * <a target="_blank" href="https://github.com/SalesforceFoundation/Volunteers-for-Salesforce/blob/master/sfdx-project.json">sfdx-project.json</a> points to the src folder.
   * In folder push, txt files define scratch org ids
   * File cumulusci.yml define tasks, flows, and json for each scratch org defined in the orgs folder
   <br /><br />

Column "#Builds" is from https://mrbelvedereci.herokuapp.com/repos
which presents the status of builds on the build server on Heroku

   Log in by authorizing mrbelvedereci-sfdo (third-party OAuth application)

   Subject "[mrbelvedereci] Please Confirm Your E-mail Address"
   Click "Confirm" in the web page that pops up.

There is also https://github.com/SFDO-Tooling
used by Salesforce.org's Products team for managing devOps and release of Salesforce projects.
https://metadeploy-staging.herokuapp.com/products

Much of the code is written in Python (file .py), thus the use of the Python-based <a target="_blank" href="https://wilsonmar.github.io/python-robot/">Robot Framework</a>
<a target="_blank" href="https://github.com/SFDO-Tooling/CumulusCI-Test/blob/master/tests/standard_objects/create_contact.robot">
RF is written to be a “keyword-driven”, using the human-readable “Gherkin” syntax for specifying tests.

SCREENCAST: <a target="_blank" href="https://asciinema.org/a/91555">installing cumulus CI 2.0</a>



## Continuous Integration

1. View the <a target="_blank" href="https://www.youtube.com/watch?v=Cm42ZF5MrLA">Continuous Integration (CI) and Project Cumulus</a> Jan 31, 2014 [1:00:49] by Jason Lantz
  
1. CucumulusCI at https://github.com/SalesforceFoundation/CumulusCI 
   is a Python framework for building portable automation for Salesforce projects

   https://github.com/SalesforceFoundation/Cumulus/wiki/Cumulus-CI-Build-Instructions
   Jenkins build processes used in the Cumulus release process as well as instructions for solving common build issues.

1. https://cumulusci.readthedocs.io/en/latest/
   CumulusCI’s documentation!


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



## Testing with Cinnamon 

   cinnemon are browser-based tests of Apex classes written in Gherkin for Cucumber run by Selenium invoked by Jenkins via ccli on SauceLabs VMs. It tests JavaScript drop-down lists which Apex tests don't cover.

1. https://forcedotcom.github.io/cinnamon/

   https://github.com/forcedotcom/cinnamon


<a name="V4S"></a>

### Volunteers for Salesforce (V4S)

V4S was mainly written by <a target="_blank" href="https://github.com/davidhabib">David Habib</a> of <a target="_blank" href="https://djhconsulting.com/">DJH Consulting</a>
which also created the <a target="_blank" href="https://djhconsulting.com/auctions-for-salesforce/">free Auctions app</a>.

Trailhead module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/nonprofit_volunteer_basics">Volunteers for Salesforce (V4S) Basics</a>
describes how V4S handles common volunteer management processes:

   * Managing volunteer <strong>jobs</strong> that an organization needs filled
   * Tracking <strong>skills</strong> volunteers have and matching volunteers to jobs by skills and availability
   * Tracking hours against specific volunteer <strong>shifts</strong>
   * Allowing volunteers to sign up for shifts via the website
   * Displaying a calendar of jobs and shifts on an organization’s website
   * Sending email reminders for upcoming shifts to confirmed volunteers
   * Sending Thank You emails to volunteers that sign up for a shift from the website

   * Allowing volunteers to report the hours they’ve worked
   * Tracking the <strong>hours</strong> a volunteer works
   * Tracking the volunteer hours and jobs for a specific event
   <br /><br />

Tabs included in V4S include: Volunteers Help, Volunteers Wizard (to create new campaigns, jobs, and shifts), Volunteer Jobs, Shift Calendar, Calendar view, Find Volunteers.

<a target="_blank" href="https://s3-us-west-2.amazonaws.com/sfdo-docs/V4S_Entity_Relationship_Diagram.pdf"><img alt="sf-v4s-erd-535x408-33376.png" src="https://user-images.githubusercontent.com/300046/45627161-8700eb80-ba4e-11e8-9c9d-72545e3d80b9.png"></a>

Looking into https://github.com/SalesforceFoundation/Volunteers-for-Salesforce

* https://github.com/SalesforceFoundation/Volunteers-for-Salesforce/blob/master/cumulusci.yml

Within folder v4sStaticResources, momentjs.com is a popular free library to Parse, validate, manipulate, and display dates and times in JavaScript.

With src folder processed using SOAP requests:
* package.xml defines member names within types: ApexClass, ApexComponent, ApexPage, ApexTrigger, CustomField, CustomLabel, etc.
* Groundwire_Volunteers.app defines tabs defined by ...tab files within the tabs folder.
* Each tab file specifies the page layout and associated label and motif.
  * About_Volunteers
  * Volunteers_Wizard
  * Volunteer_Job__c
  * Shift_Calendar
  * Find_Volunteers
  * standard-Lead
  * standard-Contact
  * standard-Campaign
  * standard-report
  * standard-Dashboard

For internationalization:
   * folder translations has language text files for German (de), Spanish (es), French (fr), Hebrew (iw), Japanese (ja), and Dutch (nl_NL)
   * labels contains display text for US and potentially other languages
   * folder objectTranslations
   * folder staticresources

## Data Load

https://www.youtube.com/watch?v=L8ip1tWhEKU
Importing Data into Salesforce for Nonprofits – Offered Monthly
by Salesforce.org

PROTIP: When adding contacts, in the Contact Details section, enter all relevant details for your new Contact (but leave the Account Name field blank). Leaving the Account Name field blank is the key step to creating a new Household.
Salesforce automatically creates a Household, and derives the name of the Household from the name of the Contact.

To create a new Contact within a Household, in the upper right hand corner of the Account Detail page, click Manage Household.

## metaci

MetaCI CLI replaces mrbelvedereci. 

https://github.com/SalesforceFoundation/MetaCI-CLI

https://asciinema.org/a/143755

https://asciinema.org/a/144450

<pre>
metaci repo list
metaci plan list
metaci org list
metaci build list
metaci build info 2 --log
metaci service list
metaci service add
metaci plan run 1
etc.
</pre>

## Social

@SFDCFoundation

https://www.facebook.com/SalesforceOrg/?ref=timeline_chaining

https://github.com/salesforce/vulnreport

## References

* Documentation about installation is included among other topics at:
   
   <a target="_blank" href="https://powerofus.force.com/articles/Resource/NPSP-Documentation">https://powerofus.force.com/articles/Resource/NPSP-Documentation</a>

* https://www.youtube.com/watch?v=An2aeOisJK0

* https://www.youtube.com/watch?v=8MZMVBJMW4Q
   13:43
   Explaining the NPSP Account Models
   by Caroline Renard

* https://www.youtube.com/watch?v=An2aeOisJK0
   9:26
   Nonprofit Success Pack (NPSP) 3.0 in less than 10 minutes
   by Redpath Consulting Group


On YouTube channels <a target="_blank" href="https://www.youtube.com/channel/UC6ZEIvlahVCA8k5tYTr_a2A">Salesforce.org</a> and <a target="_blank" href="https://www.youtube.com/channel/UC8kDDLRZzDdOBS24al99Kag">Videography</a>:

   * https://www.youtube.com/watch?v=IATQdFl5LOQ
   16:56
   Live Demo: Nonprofit Fundraising

   * https://www.youtube.com/watch?v=IATQdFl5LOQ
   16:56
   Live Demo: Nonprofit Fundraising
   by Salesforce.org

Playlist: https://www.youtube.com/watch?v=1Acc7Fq8CfQ&list=PLU8xqF8ZASbXC-QFldf_Nm-oa0v1Hra9q
Get Started with Salesforce for Nonprofits



## Resources

   https://github.com/SalesforceFoundation/Cumulus/wiki

http://developer.salesforce.org/Cumulus/ApexDocumentation/index.html

https://cumulusci.readthedocs.io/en/latest/
   talks about the Python-based Robot Framework for testing.

https://github.com/SalesforceFoundation/Cumulus/wiki/Cumulus-CI-Build-Instructions
Cumulus CI Build Instructions


<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
