---
layout: post
title: "Salesforce onboarding (for developers)"
excerpt: "Get up and running on the various Salesforce technologies"
tags: [salesforce]
file: salesforce-onboarding.md
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

Here are steps and information for those new to Salesforce to get started working on the system.
This also aims to provide succinct lists for experienced Salesforce readers.

"PROTIP:" in this document marks the unique contribution of this website, 
providing you advice available nowhere else.

Most other software companies try to make the most money they can by putting their training material behind a paywall. So learning SAP and Oracle takes many thousands of dollars. This limits how many people can effectively learn their product.

Not so with Salesforce. Their SalesforceU does offer live classes for thousands of dollars each. But their <a href="#Trailhead">Salesforce Trailhead</a> on-line training is both in-depth and offered free, with <strong>unlimited time on servers</strong>. This has enabled Salesforce users to be among the best trained of any software ecosystem.


<a name="Training"></a>

## Trailhead Training Account

1. Obtain a Trailhead account <a target="_blank" href="https://developer.salesforce.com/trailhead">
   here</a> for FREE tutorials which reward points appearing in your profile.

   PROTIP: Sign up for Trailhead with a <strong>personal Gmail account</strong> instead of company email so you'll be able to sign in no matter where you work in the future.

2. COURSE: <a target="_blank" href="https://trailhead.salesforce.com/trails/learn_salesforce_with_trailhead">
   Learn Salesforce with Trailhead</a>

   ### How Trailhead works

   Learning topics are organized into modules, which are broken up into units. 

   Trails group modules to provide guided learning paths suited to specific roles or needs.

   Earn points when you finish each unit by completing a quiz or a challenge in a Salesforce org.
   Less points are earned for each additional attempt.

   "Challenges" gives you a set of requirements that you have to figure out how to meet on your own.
   A project lays out step-by-step instructions for you to follow, then validates that you did everything correctly.

   More points get you higher <a target="_blank" href="https://trailhead.salesforce.com/en/trailblazer-ranks">rank</a>.

   Projects and superbadges allow you to learn interactively by requiring you to implement a feature or solution in an org (a Trailhead Playground).

   ### Superbadges

   <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges">Superbadges"</a> provide skill-based, domain-level "specialist" credential (to put on resume) by completing modules of real-life business scenario for which you have to build a solution across entire feature areas. 

   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_security">Security</a>
   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_reports">
   Reports & Dashboards</a>

   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_apex">
   Apex Specialist</a>
   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_aap">
   Advanced Apex Specialist</a>
   <br /><br />

   PROTIP: Do the two above as preparation for <a href="#Developer">Developer certification</a>.

   <a name="LightningSuperbadges"></a>
   
   ### Lightning superbadges

   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_lightning_platform_app_builder">
   Lightning App Customization Specialist</a>
   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_lcf">
   Lightning Component Framework Specialist</a>
   builds a sophisticated app.
   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_lex">
   Lightning Experience Specialist</a>
   super-charges interface and process automation.
   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_lex_rollout">Lightning Experience Rollout Specialist</a>

   <a name="SpecialtySuperbadges"></a>
   
   ### Specialist superbadges

   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_process_automation">
   Process Automation Specialist</a>
   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_business_specialist">
   Business Administration Specialist</a>
   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_integration">
   Data Integration Specialist</a>

   ### Specialty superbadges

   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_analytics_integration_specialist">
   Einstein Analytics Data Preparation Specialist</a>
   (Follow <a target="_blank" href="https://twitter.com/SForceAnalytics">@SForceAnalytics</a>)
   <br /><br />

3. Salesforce as a company offers classes addressing each certification through its 
    <a target="_blank" href="http://www.salesforce.com/services-training/training_certification/training.jsp"><strong>Salesforce University</strong> (<a target="_blank" href="https://twitter.com/SalesforceU">@SalesforceU</a>). For example, $3,750 for the 5-day course.

   PROTIP: Spending several days strait sitting in a class may seem like "drinking from a firehose".

4. Follow on Twitter

   * #Trailhead
   * Chris Duarte (@TheChrisDuarte) - Managing Editor of #Trailhead
   * Sandeep Bhanot (@cloudysan) - #Trailhead Product Owner/ Evangelist

<hr />

<a name="TrailheadBasics"></a>

## Trailhead Basics modules

Start with these:

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/trailhead_basics">Module: Trailhead Basics</a>

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/starting_force_com">Module: Salesforce Platform Basics</a>

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/data_modeling">Module: Data Modeling</a>

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/visualforce_fundamentals">
   Module: Visualforce Basics</a>

<hr />


## Salesforce Lightning UI

1. Click the "cog" icon to select Setup:

   <img alt="sf-setup-253x186.png" width="253" src="https://user-images.githubusercontent.com/300046/43531842-f56b78e8-956d-11e8-8ce3-66b8cb160d13.png">

1. Click the app launcher icon for a list of apps:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/43531384-e10b834e-956c-11e8-9113-3506e009c7ae.png"><img alt="sf-app-launcher-1106x554.png" width="1106" src="https://user-images.githubusercontent.com/300046/43531384-e10b834e-956c-11e8-9113-3506e009c7ae.png"></a>

1. Scroll down for the "All Items" list:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/43531745-a9f76656-956d-11e8-950c-6c017c1d1a19.png"><img alt="sf-all-items-843x292.png" src="https://user-images.githubusercontent.com/300046/43531745-a9f76656-956d-11e8-950c-6c017c1d1a19.png"></a>


<a name="Domains"></a>

## Domain Names 

Salesforce, as a company, owns these domain names (some product offerings have their own domain, but some don't):

   * <a target="_blank" href="https://www.salesforce.com/">Salesforce.com</a> [<a target="_blank" href="https://status.salesforce.com/">status</a>]
   * <a target="_blank" href="https://www.Force.com/"> Force.com</a>
    runs underneath SaaS, and is categorized as a PaaS (Platform as a Service) service
    which generalizes the coding in CRM for use in other user domains.
   * <a target="_blank" href="https://salesforceiq.com">Salesforceiq.com</a> [<a target="_blank" href="https://status.salesforceiq.com/">status</a>]
   * <a target="_blank" href="https://salesforce.org/">Salesforce.org</a> for non-profits

   * <a target="_blank" href="https://www.data.com/">Data.com</a> - B2B prospecting and data cleansing [<a target="_blank" href="https://www.data.com/trust/">status</a>]
   * <a target="_blank" href="https://www.desk.com/">Desk.com</a> - Customer Help Desk support for small business [<a target="_blank" href="https://status.desk.com/">status</a>]
   * <a target="_blank" href="https://www.demandware.com/">Demandware.com</a> acquired in 2016 for manufacturing processes. It is part of the Salesforce Commerce Cloud.
   * <a target="_blank" href="http://www.financialforce.com/">FinancialForce.com</a>
    is also a SaaS providing software for managing financial information.
   * <a target="_blank" href="http://www.heroku.com/">Heroku.com</a> - free hosting for low-volume apps written in open-source programming [<a target="_blank" href="https://status.heroku.com/">status</a>]
   * <a target="_blank" href="http://www.marketingcloud.com/">MarketingCloud.com</a> (formerly ExactTarget) [<a target="_blank" href="https://status.marketingcloud.com/">status</a>]
   * <a target="_blank" href="https://pardot.com">Pardot.com</a> [<a target="_blank" href="https://trust.pardot.com/">status</a>]
   * <a target="_blank" href="https://www.quip.com/">Quip.com</a> "a Salesforce company" has APIs to enable automation of processes, integration, and <strong>collabortion</strong> with any app.

Several domain names are no longer used and visits to it get rerouted to another Salesforce domain:

   * <a target="_blank" href="http://www.database.com/">Database.com</a> redirects to the Salesforce Platform page
   * <a target="_blank" href="http://www.developerforce.com/">Developerforce.com</a> redirects to<br /><a target="_blank" href="https://developer.salesforce.com/">https://developer.salesforce.com</a>
   * <a target="_blank" href="https://www.site.com/">Site.com</a> is redirected to <br />https://www.salesforce.com/products/platform/overview/
   * Work.com was [retired July 10, 2015](https://success.salesforce.com/_ui/core/chatter/topics/TopicPage?id=0TO300000004GDW&ref=group_profile). It was a sales performance management solution for on-boarding new reps faster, for coaching reps to close more deals, and for rewarding successful behaviors. It redirects tohttps://www.salesforce.com/products/sales-cloud/overview/
   * Salesforce1.com redirects to salesforce.com.

Additional businesses:  

   * <a target="_blank" href="https://developer.salesforce.com/einstein">Einstein</a>, at<br />https://developer.salesforce.com/einstein (AI Vision, Predictive Analytics)
   * <a target="_blank" href="https://www.salesforce.com/products/salesforce-iot/overview/">Salesforce IoT</a>
   * <a target="_blank" href="https://searchsalesforce.techtarget.com/definition/Thunder-Salesforce-Thunder">Thunder</a> is a Big Data app that supports Salesforce's IoT Cloud on AWS servers, to take in massive volumes of data generated by devices, sensors, websites, applications, customers and partners and initiate actions for real-time responses. It uses open-source Apache Kafka, Storm, Spark, Cassandra.
   * <strong>ExactTarget</strong> Fuel Marketing Cloud emails to target specific prospects (purchased by Salesforce)


<a name="Clouds"></a>

### Clouds

Here is a list of the different "clouds" Salesforce sells.
Products which have <a href="https://wilsonmar.github.io/salesforce-certifications/">"consultant" certification exams</a>:

   * Analytic Cloud - Business intelligence and analytics software solutions   
   * <a target="_blank" href="http://certification.salesforce.com/communitycloud">Commmunity Cloud</a> - Connect customers, partners, and employees
   * <a target="_blank" href="http://certification.salesforce.com/salescloud">Sales Cloud</a> - Complete CRM customer service solutions
   * Government Cloud
   * Health Cloud
   * <a target="_blank" href="https://www.salesforce.com/products/integration-cloud/overview/">Integration Cloud</a> Integration Builder includes Mulesoft Anypoint Platform (bought by Salesforce in an exchange of stock May 2018)

   * <a target="_blank" href="http://certification.salesforce.com/marketingcloudconsultant">Marketing Cloud</a> - Build and manage 1:1 customer journeys. It has its own query language. No free accounts here.
   * <a target="_blank" href="http://certification.salesforce.com/fieldservicelightningconsultant">
   Field Service Lightning certification</a>

   * <a target="_blank" href="https://www.salesforce.com/solutions/philanthropy/corporate-social-responsibility/">Philanthropy Cloud</a>

   * <a target="_blank" href="http://certification.salesforce.com/servicecloud">Service Cloud</a> - Sales force automation and CRM
   * Success Cloud 

   Others:

   * <a target="_blank" href="http://certification.salesforce.com/pardotconsultant">Pardot</a> - B2B marketing automation, which is part of the Sales Cloud as well.
   * Quip for sending texts
   * <a target="_blank" href="http://certification.salesforce.com/cpqspecialist">CPQ</a> (Configure, Price, and Quote) workflow


<a name="Topics"></a>

## Topics of conversation

<a target="_blank" href="https://status.salesforce.com/">https://status.salesforce.com</a> provides availability status by pod on these products:
<img align="right" width="220" alt="sf-status-list" src="https://user-images.githubusercontent.com/300046/43538874-6f8e6466-9580-11e8-9e21-346c82667b50.png">

Here are the Q&A topics in the Trailblazer Community Success Cloud URL<br /><a target="_blank" href="
https://success.salesforce.com/answers?feedtype=RECENT&criteria=BESTANSWERS">https://success.salesforce.com/answers</a>

* Collaboration
* Configuration & Data Management
* CPQ and Billing
* Customer Service & Support
* Desktop Integration
* Einstein Analytics
* Email
* Email Marketing
* Journey Management
* Mobile
* Mobile Messaging
* Packaging, Uploading & Installing Apps
* Reports & Dashboards
* Sales & Marketing
* Security
* Social Marketing
* Trailhead Challenges
* Other products

TODO: Personas?

Trailhead offers this selection of topics for "Answers":
<img alt="sf-trailhead-product-interests-386x271-24542.jpg" width="386" src="https://user-images.githubusercontent.com/300046/43539050-f9c092f8-9580-11e8-9205-1908cc2db8b7.jpg">


<a name="Editions"></a>

## Product Editions

Before we go anywhere, know that it is not cheap to run Salesforce in production.

At http://www.salesforce.com/crm/editions-pricing.jsp
note DE has Enterprise capabilities, more powerful than the Professional Edition.

* Essentials (for small business) 1-800-667-6389
* Contact Manager
* Group 
* Professional
* Enterprise
* Unlimited
* Developer Edition (DE)

Each level has different support SLAs.

For example, Salesforce Enterprise customers can open up tunnels and share data with each other. Cool. It’s EDI for the masses.

Additionally:

*    Partner Developer
*    Partner Enterprise
*    Partner Group
*    Partner Professional


<a name="Offerings"></a>

## Product Offerings

See http://www.salesforce.com/platform/overview/

Salesforce issues licenses for several offerings :

<a target="_blank" href="http://www.Salesforce.com/">Salesforce.com</a>
    CRM (Customer Relationship Management) -- the company's stock market symbol --
    is categorized as a SaaS (Software as a Service)
    offering a complete package much like what Google Apps (Gmail), Zoho, and Quickbooks Online.
    Salesforce also includes project management.

   There are separate <strong>feature licenses</strong>:

   * Salesforce CRM Content user
   * Force.com Flow user
   * Marketing user
   * Apex (Salesforce1) Mobile user
   <br /><br />


<a name="VersionChangeMgmt"></a>

## Salesforce (CRM) Versions

PROTIP: Three releases are planned per year, named by season (avoiding Fall):

| Force Version | API Version | Release |
| ----:         | -----: | --: |
| <a target="_blank" href="https://www.salesforceben.com/complete-guide-to-salesforce-summer-18/">Summer '18</a> | 43.0 | <a target="_blank" href="https://resources.docs.salesforce.com/214/latest/en-us/sfdc/pdf/salesforce_summer18_release_notes.pdf">214 PDF</a> |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/spring18/">Spring '18</a> | 42.0 | <a target="_blank" href="https://resources.docs.salesforce.com/212/latest/en-us/sfdc/pdf/salesforce_spring18_release_notes.pdf">212 PDF</a> |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/winter18/">Winter '18</a> | 41.0 | <a target="_blank" href="https://resources.docs.salesforce.com/210/latest/en-us/sfdc/pdf/salesforce_winter18_release_notes.pdf">210 PDF</a> |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/summer17/">Summer '17</a> | 40.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/spring17/">Spring '17</a> | 39.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/winter17/">Winter '17</a> | 38.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/summer16/">Summer '16</a> | 37.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/spring16/">Spring '16</a> | 36.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/winter16/">Winter '16</a> | 35.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/summer15/">Summer '15</a> | 34.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/spring15/">Spring '15</a> | 33.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/winter15/">Winter '15</a> | 32.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/summer14/">Summer '14</a> | 31.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/spring14/">Spring '14</a> | 30.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/winter14/">Winter '14</a> | 29.0 |

In addition to releases above, beta releases of Minimally Marketable Features (MMF) go out.

Salesforce launched its first app in 2000.
SOAP API (web services) was added in 2004.
<a href="#Lightning">Lightning</a> HTML components were added 2015.

Certification holders must keep taking <a href="https://wilsonmar.github.io/certifications/">certification tests</a> for <strong>each release</strong> to keep them valid.

Join the <a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F9300000001oku">Release Readiness Trailblazers community</a> for resources about each upcoming release.



<a name="UX"></a>

## UX and Branding

Salesforce currently stores data for all product offerings (all SaaS in the cloud) within a single "monolithic" database.

<a name="MobileApps"></a>

### Mobile Apps

"Salesforce1 Platform" is the brand name to emphasize that mobile capabilities are automatically provided when apps are created. "mySalesforce" refers specifically to mobile apps.
The brand name first appeared in 2014.

App logos that appear at the upper left should be no larger than 300 pixels wide by 55 pixels high.
Adjust the number of colors in .gif or .jpg so they are under the 20kb size limit.
BTW, <a target="_blank" href="http://encycolorpedia.com/1798c1">
  Colors in Salesforce screens</a>

   * On <a target="_blank" href="https://itunes.apple.com/us/app/social-studio/id840173798?mt=8">
   iOS device install Social Studio app</a>

   * <a target="_blank" href="https://itunes.apple.com/us/app/dreamoji/id1294827604?mt=8">
   Dreamoji iOS</a> app provides a custom keyboard containing various Salesforce characters as emojis.

Trailhead tutorial modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/salesforce1_mobile_app">
   Trailhead Module: Salesforce Mobile App Customization</a>

<hr />

<a name="Trailhead"></a>

## Trailhead Playground

A Trailhead Playground is an org you can use to complete hands on challenges, and try out new features and customizations. It <strong>comes with set of Trailhead-specific data</strong> (a set of sample contacts, etc.) that you can use when completing challenges, and a pre-installed unmanaged package that we use to test your hands-on challenges. Trailhead Playgrounds have some limits, but for the most part they give you the same customization options as a production org. 

PROTIP: Salesforce is great because of its free Trailhead tutorial that are thorough.

https://trailhead.salesforce.com/modules/starting_force_com
Salesforce Platform Basics
Get introduced to the platform, navigate use cases, and build custom functionality.

* <a target="_blank" href="https://trailhead.salesforce.com/modules/trailhead_playground_management/">Trailhead module: Trailhead Playground Management</a>

PROTIP: For a list of your Hands-on Orgs, go to <a target="_blank" href="https://trailhead.salesforce.com/">https://trailhead.salesforce.com</a>,
click the picture at the upper-right corner, and select <a target="_blank" href="https://trailhead.salesforce.com/en/users/profiles/settings/">Settings</a>.

Trailhead tutorials are great because of their quizzes (challenges).

### Text to speech

However, Trailhead tutorials are mainly text.

PROTIP: Use a program that generates text to speech.
Macs has it built-in, and just need to be enabled in Apple System Preferences > Accessibility > Speech.
![macos-speech-key-398x58](https://user-images.githubusercontent.com/300046/43554806-dac78108-95b3-11e8-80e9-00bac235554a.jpg)

You can change the default option+` (back tick) activation key sequence.

I like the proper British female voice "Kate", who is like Mary Poppins reading to me.

![macos-speech-kate-317x117](https://user-images.githubusercontent.com/300046/43554819-eb2c8c32-95b3-11e8-852e-dfd4cc712f47.jpg)

If you have the money, several video tutorials are available.
But completing Salesforce trailheads are important.

Here's why...

## Trailhead profiles

Here are some sample profiles from among my list of <a target="_blank" href="https://wilsonmar.github.io/salesforce-rock-stars/">Salesforce Rock Stars</a>:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/me/laydurafe">
   https://trailhead.salesforce.com/en/me/laydurafe</a>
   * https://trailhead.salesforce.com/en/me/adammvp
   * https://trailhead.salesforce.com/en/me/00550000006gTqVAAU Naveen Poojary
   * https://trailhead.salesforce.com/en/me/00550000006gOHXAA2 Anjaneya Reddy Bobbala got near 100,000 points by completing 135+ badges over 7 trails

   * <a target="_blank" href="https://trailhead.salesforce.com/en/me/wilsonmar/">
   https://trailhead.salesforce.com/en/me/wilsonmar</a>

Each profile includes how many trailhead modules and trails completed,
and the points earned. It doesn't list certifications exams passed.

Those who have been designated as a "MVP" by Salesforce also get identified in their profile.

![sf-trailhead-cat-304x308-24442](https://user-images.githubusercontent.com/300046/43572325-7aa3ef20-95fc-11e8-99cf-391341ff6d8b.jpg)


## Developer Account

1. https://developer.salesforce.com/signup

2. Fill out your information and upload your picture.

   ### Create a Developer Edition organization

   Even if you already have Enterprise Edition, Unlimited Edition, or Performance Edition, use Developer Edition for developing, staging, and testing your solutions against sample data to protect your org’s live data, especially for applications that insert, update, or delete data (as opposed to just reading data).


## Salesforce Authenticator

I recommend that you use Google Authenticator instead so you only need to have one app for many accounts.

1. On your smartphone install the "Salesforce Authenticator" app.

1. Enable backups by typing in your phone number. The response is a text message (from 288-401):

   <tt>Ready to verify your mobile number in the Salesforce Authenticator app? SalesforceAuthenticator://verify-number?t=FvdRiT</tt>

1. Press the link.
2. Type a 4-digit passcode.   



<hr />

## Developer Console

1. In Salesforce, click the cog icon and select "Developer Console" 

   ![sf-dev-console-245x145-9152](https://user-images.githubusercontent.com/300046/43218480-c28dad54-9001-11e8-9b7e-d76d26ac107f.jpg)

2. You'll get a pop-up a window with this at the bottom:

   ![sf-dev-console-tabs-610x170-26186](https://user-images.githubusercontent.com/300046/43218626-29752254-9002-11e8-858e-087fece5cc17.jpg)


## REST API Workbench

This utility is similar to Postman running on Chrome browser.

See https://trailhead.salesforce.com/modules/api_basics/units/api_basics_rest

1. https://workbench.developerforce.com/

   <a target="_blank" title="sf-dev-workbench-763x257-53721" href="https://user-images.githubusercontent.com/300046/43217694-89de385e-8fff-11e8-990b-6ba81206ca68.jpg">
   <img alt="sf-dev-workbench-763x257-53721" width="763" src="https://user-images.githubusercontent.com/300046/43217694-89de385e-8fff-11e8-990b-6ba81206ca68.jpg"></a>

2. For Environment, select Sandbox (not Production).
3. For API Version, select the highest available number.
4. Check "I agree to the terms of service."
5. Click "Login with Salesforce" for a to pop-up a window with a URL such as this:

   https://na31.salesforce.com/_ui/common/apex/debug/ApexCSIPage


## VS Code Extensions

For users of Microsoft's VS Code IDE, Salesforce extensions for Visual Studio Code
provide syntax highlighting and code completion.

1. Read https://developer.salesforce.com/tools/extension_vscode
2. Install VS Code (see https://code.visualstudio.com/)

   <tt>brew cask install visual-studio-code</tt>

3. Launch "/Applications/Visual Studio Code.app" or from Terminal by typing "code".
4. Within Code, on the bottom of the left toolbar, click the Extensions cog icon for "Manage Extensions".
5. Type on top of the "Search Extensions" for "Salesforce Extensions for VS Code". (No need to press Enter.)
6. Click the green "Install" button for the item with the name.
7. When the blue "Reload" button appears, click it to re-launch VS Code. 
8. See the video at https://www.salesforce.com/video/1768045/ on how to master Salesforce DX using VSCode:

   * Press command+P for the Command Pallette, then "sfdx".

   QUESTION: Is there a script that can do the above?

   Source for this extention is on GitHub at https://github.com/forcedotcom/salesforcedx-vscode

   * https://github.com/forcedotcom/salesforcedx-vscode/wiki/Tips-and-Tricks
   * https://github.com/forcedotcom/salesforcedx-vscode/wiki/Troubleshooting

   ### Salesforce CLI Integration for Visual Studio Code

1. https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-core
2. Click "Install".

   Per https://github.com/forcedotcom/salesforcedx-vscode/wiki/Tips-and-Tricks

3. Open ~/.bash_profile to add:

   <pre>alias code-sfdx='code --extensions-dir ~/.sfdx-code'</pre>


See: http://developer.salesforce.com/blogs/2018/06/salesforce-for-vs-code-apex-replay-debugger-and-more.html
Salesforce for VS Code: Apex Replay Debugger and More
June 11, 2018
By Nathan Totten


## IDEs and Editors

https://success.salesforce.com/issues_index?tag=Eclipse%20IDE">
Eclipse IDE Known Issues</a>

Welkin's Suite 

Aside.io

MavensCode

The choice of editors is covered in 
<a target="_blank" href="https://app.pluralsight.com/player?course=apex-absolute-beginner-guide-coding-salesforce&author=david-liu&name=apex-absolute-beginner-guide-coding-salesforce-m5&clip=3&mode=live">
Pluralsight video course: Apex Absolute Beginning Guide to Coding Salesforce</a>


<a name="Podcasts"></a>

## Podcasts

PROTIP: Drive a lot? Listen to voice-only podcasts while commuting:

   * <a target="_blank" href="https://salesforce.com/marketingcloudcast/">The Marketing Cloudcast</a> has 99+ episodes since Oct. 2016 <a target="_blank" href="https://play.google.com/music/listen?u=0#/ps/I6pcs6jawpetsbyhp5qaf42ahmy">
   on Google Play</a>. It "offers key marketing campaign tactics, popular trends, interviews with marketing leaders, and relevant insights — such as social media stats and data management strategies in marketing today. Hosts Megan Collins ( @CollinsMeMegan) and Tina Rozul (@crozul) dive into topics such as performance on individual marketing channels, marketing career advice, the future of marketing, and beyond. 

   * PODCAST about presenters at Salesforce Dreamforce conferences: <a target="_blank" href="https://www.salesforce.com/blog/2017/07/blazing-trails-a-new-salesforce-podcast.html">Blazing Trails</a> since July 2017 <a target="_blank" href="https://itunes.apple.com/us/podcast/blazing-trails/id1259579050?mt=2">on iTunes</a> and <a target="_blank" href="https://soundcloud.com/blazingtrailspodcast">SoundCloud.com</a>.

   * PODCAST: The Quotable Sales Podcast by Quotable.com since July 2016 on <a target="_blank" href="https://itunes.apple.com/us/podcast/quotable-podcast-learn-from/id1132258307?mt=2">iTunes</a> and <a target="_blank" href="https://play.google.com/music/listen?u=0#/ps/I6pcs6jawpetsbyhp5qaf42ahmy">Google Play</a>.


<a name="AppExchange"></a>

## AppExchange Tools

https://appexchange.salesforce.com/appxHome

* Security Zen at http://SecurityZen.net @SecurityZen_Net ‏is a new tool for managing #Salesforce Security.

* Ultra Field History Tracker @UFHTAuditTool ‏since June 2018 is an advanced SFDC field history tracking app supporting both standard and custom objects, unlimited fields, forever retention WITHOUT consuming data storage.

* <a target="_blank" href="https://www.linkedin.com/pulse/introducing-wsproxy-salesforce-marketing-cloud-eliot-harper/">WSProxy for Salesforce Marketing Cloud</a> July 17, 2018 by Eliot Harper offers scripting support through AMPscript and Server-Side JavaScript (or SSJS) scripting languages.

Eugene Oksman (@oksman (https://twitter.com/oksman) and Akhilesh Gupta (@akhileshgupta (https://twitter.com/akhileshgupta)) lead the Mobile SDK team at Salesforce.com, searching for the best ways to help developers create mobile apps for the enterprise.

* Salesforce data loading tools, web services, middleware (such as Dell Boomi, Informatica, etc.)

* APTTUS Contract Management Software (CLM)

## Privacy

Trail: <a target="_blank" href="https://trailhead.salesforce.com/trails/learn-privacy-and-data-protection-law">Learn Privacy and Data Protection Law</a>:

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/us-privacy-law-basics"> Trailhead Module: US Privacy Law Basics</a> [50:00] around personally identifiable information (PII).

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/european-union-privacy-law-basics/">Trailhead Module: European Union Privacy Law Basics</a> [45:00] to learn about the General Data Protection Regulation (GDPR) and how to comply.


## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
