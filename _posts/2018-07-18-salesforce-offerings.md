---
layout: post
title: "Salesforce offerings"
excerpt: "Competitors, Languages, Clouds, Industries, Domains, GitHubs, editions, pricing, features, versions"
tags: [salesforce]
file: salesforce-offerings.md
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

Here is reference information for those new to Salesforce to understand how the company structures its offerings.

<a name="WhySalesforce"></a>

## Why Salesforce? #

Salesforce marketing calls itself the "Intelligent Customer Success Platform".

Customer success is one of the core values, which also include trust, innovation, and equality.

   * Being on the cloud, all data is in one connected platform to do work, enabling teamwork globally, anytime.
   * Highly scalable without effort
   <br /><br />
Companies that implement Salesforce CRM see improvement in sales of 30%+ because Salesforce
provides a data collection system to implement a <strong>disciplined</strong> approach to selling:
   <br /><br />
   * Lead scoring: the value of each lead can be calculated so salespeople focus on the best leads
   * Leads can be automatically allocated among salespeople
   * Emails can be automatically sent out (by autoresponders)
   * Templates for each step, with each step in the sales funnel defined, but can be adapted
   * "Web-to-Lead" automatically sends web form fills directly into Salesforce Sales Cloud Lead records.
   * "Email-to-Case" integrates with Gmail and Outlook to automatically reads emails into Service Cloud case records.
   * "Question-to-Case" let moderators create cases from Chatter questions.
   <br /><br />
Data collection also enables Managers to make decisions based on facts.
   <br /><br />
   * A large number of default Dashboards are available with jew a few clicks
   * Calculation of how much is in each part of the sales funnel
   * Since the status of each opportunity 
   * Campaigns returns analysis
   * Data enables Sales and Marketing to work together better, proactively
   <br /><br />
For end-users, get away from:
   <br /><br />
   * Waiting for <strong>approvals</strong> because Salesforce does relentless follow-up
   * Reliance on spreadsheets and Access databases
   * Collaboration via email (new people joining can't get to conversation history)
   * Data on local file directories (not accessible by others)
   * Time-intensive, manual steps
   <br /><br />
The true power of Salesforce is the ease of customization and, paradoxically, powerful features.
Gartner rated Salesforce at the upper-right corner of its Magic Quandrant of systems for "citizen programmers". Salesforce provides an easy and fast way to create sophisticated apps:
   <br /><br />
   * An app can be created in minutes using point and click, selecting sophisticated features that have been built up over the years from features common among all Salesforce customers -- features that would not be economical for any single company to fund on their own.
   * Mobile "Salesforce1" apps are generated automatically, making Salesforce the top-rated mobile development platform
   * Internationalization is built-in for <a href="#Languages">languages</a> with multi-lingual forms
   * Free development environments called "orgs" (organizations). (no 7 day trials)
   * Fine-grained access control
   * Extensible UI with clicks or code
   * Contextual field types (such as currency, Email, Geolocation, Percent, Phone, URL, etc.) that are treated appropriately without additional coding
   * Innovation in Machine Learning for personalization, Analytics
   * Innovation in object recognition
   * Use popular UI frameworks like Bootstrap, JQuery (in VisualForce classic)
   * <a href="#Lightning">Lightning</a> HTML UI components for user-developed apps

   * API-first to integrate anything with everything
   * Salesforce was designed with a <strong>metadata-driven</strong> architecture. Everything, including the code, configuration, and apps, is specified as metadata.
   <br /><br />
Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/drucker_customer_market_driven/">Drucker School—Customer & Market Strategy</a> [1 hr 45 mins] +700
to turn your organization into a customer and market-driven powerhouse with these insights.

<a target="_blank" href="https://trailhead.salesforce.com/en/trails/salesforce_advantage">Navigate the Salesforce Advantage</a> [1 hr 20 mins] - Learn about the key differentiators that drive our success: our core values, innovative technology, and vibrant ecosystem.


### Competitors in CRM

<a target="_blank" href="https://twitter.com/Benioff">Marc @Benioff's Twitter</a> header picture has this (from Gartner):

   ![salesforce-market-share-1500x500](https://user-images.githubusercontent.com/300046/43361208-59796650-9286-11e8-919d-bdfd0b5937b7.jpg)

Gartner says "Salesforce leads market share with 16% in 2013 vs. SAP with 13%, and Oracle with 10%." See https://en.wikipedia.org/wiki/Comparison_of_CRM_systems

PROTIP: Salesforce/Force.com seem to be more attractive to <strong>mid-market</strong> customers than SAP and Oracle. And smaller companies tend to more flexible about all work being done on-site.

Being a popular CRM solutions means it is easier to find sales reps who already know how to use the software

The top competitors to Salesforce are:

* SAP
* Oracle
* Microsoft Dynamics 365 SaaS integrated with its $26.9 billion LinkedIn acquisition with an initiative called <a target="_blank" href="https://www.forbes.com/sites/bobevans1/2017/12/11/how-microsoft-is-using-linkedin-to-take-on-salesforce-com-and-transform-the-science-of-sales/#5240fbcd2998">Microsoft Relationship Sales and initial customer Park Place</a>.

* SOHO
* <a target="_blank" href="https://www.marketingautomationinsider.com/hubspot-vs-salesforce/">Hubspot</a>
* SugarCRM
* Highrise
* ActiveCampaign
* Infusionsoft
* PipeDrive
* <a target="_blank" href="https://www.egnyte.com/">Egnyte</a>
* <a target="_blank" href="https://www.showpad.com/">Showpad</a>


## Currencies

"Advanced currency management" is necessary to calculate and track exchange rates
"Activate Multiple Currencies" in the Company Information Profile.
After activation, "Currency Setup" appears.



<a name="Clouds"></a>

### Clouds = Standard Apps

Salesforce uses the word "cloud" to brand <strong>Salesforce apps (applications)</strong>:

   * Analytic Cloud - Business intelligence and analytics software solutions with the "Einstein" brand
   * Commerce Cloud engages shoppers for e-commerce, with order management
   * <a target="_blank" href="http://certification.salesforce.com/communitycloud">Commmunity Cloud</a> - Connect customers, partners, and employees [<a target="_blank" href="http://certification.salesforce.com/communitycloud">cert</a>]
   * <a target="_blank" href="http://certification.salesforce.com/salescloud">Sales Cloud</a> - Complete CRM customer service solutions [<a target="_blank" href="http://certification.salesforce.com/salescloud">cert</a>]
   * Government Cloud app 
   * <a target="_blank" href="https://status.salesforce.com/">Health Cloud</a> for patient care [no cert?]
   * <a target="_blank" href="https://www.salesforce.com/products/integration-cloud/overview/">Integration Cloud</a> Integration Builder includes the <strong>Mulesoft</strong> Anypoint Platform (bought by Salesforce in an exchange of stock May 2018) [no cert]

   * <a target="_blank" href="http://certification.salesforce.com/servicecloud">Service Cloud</a> - Sales force automation and CRM [<a target="_blank" href="http://certification.salesforce.com/servicecloud">cert</a>]
   * Success Cloud [no cert?]
   * <a target="_blank" href="http://certification.salesforce.com/marketingcloudconsultant">Marketing Cloud</a> was acquired from ExactTarget acquisition in 2013. Build and manage 1:1 customer journeys via email. It has its own query language (<a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/index.htm">AMPscript</a>). No free accounts here. [<a target="_blank" href="https://en.wikipedia.org/wiki/Salesforce_Marketing_Cloud">Wikipedia</a>, <a target="_blank" href="http://certification.salesforce.com/marketingcloudconsultant">cert</a>]

   * <a target="_blank" href="http://certification.salesforce.com/fieldservicelightningconsultant">
   Field Service Lightning certification</a> [<a target="_blank" href="http://certification.salesforce.com/fieldservicelightningconsultant">cert</a>]

   * <a target="_blank" href="https://www.salesforce.com/solutions/philanthropy/corporate-social-responsibility/">Philanthropy Cloud</a> [no cert]

Expertise on some of the clouds are proven by <a href="https://wilsonmar.github.io/salesforce-certifications/">"consultant" certification exams</a>.

### Industries

Different lists of 12 industries are listed by Salesforce, such as AppExchange Industry Collections:

   * Automotive
   * <a target="_blank" href="https://www.salesforce.com/solutions/industries/communications/overview/comms-unify-journey/?d=cta-body-promo-188">Communications</a>
   * <a target="_blank" href="https://www.salesforce.com/solutions/industries/financial-services/financial-services-cloud/ria-financial-services/?d=cta-body-promo-191">Financial Services</a>
   * Government and Public Sector
   * High Tech
   * <a target="_blank" href="https://www.salesforce.com/solutions/industries/healthcare/health-cloud/personalized-patient-experiences/?d=cta-body-promo-263">Healthcare</a>
   * <a target="_blank" href="https://www.salesforce.com/solutions/industries/healthcare/life-sciences/health-care-innovation/?d=cta-body-promo-262">Life Sciences</a>
   * <a target="_blank" href="https://www.salesforce.com/solutions/industries/manufacturing/overview/channel-distribution-management/?d=cta-body-promo-126">Manufacturing</a>
   * <a target="_blank" href="https://www.salesforce.com/solutions/industries/media/overview/maximize-audience-engagement/?d=cta-body-promo-189">Media</a>
   * Nonprofits (including Higher Education)
   * <a target="_blank" href="https://www.salesforce.com/solutions/industries/?d=cta-body-promo-4">Wealth Management</a> (only in Solutions)
   * Professional Services (AppExchange)
   * Real Estate (AppExchange)
   * Retail &amp; Consumer Goods
   * Travel, Transportation, and Hospitality

<a name="Domains"></a>

### Salesforce.com and Force.com

Technically, many of Salesforce's "cloud" and feature offerings share use of the same salesforce.com and force.com DNS domain names.

Salesforce, as a company, owns several domain names (some product offerings have their own domain, but some don't):

   * <a target="_blank" href="https://www.salesforce.com/">Salesforce.com</a> [<a target="_blank" href="https://status.salesforce.com/">status</a>]

      * https://login.salesforce.com/
      * https://appexchange.salesforce.com/
      * https://certification.salesforce.com/
      * https://develop.salesforce.com/
      * https://help.salesforce.com/
      * https://partners.salesforce.com/
      * https://trust.salesforce.com/en/

      * https://<em>custom-brand-subdomain</em>.my.salesforce.com/ are production custom <a target="_blank" href="https://help.salesforce.com/articleView?id=domain_name_overview.htm&type=5">My Domains</a>, which is used for Single sign-on (SSO) with SAML or external identity provider Facebook, Google, LinkedIn, Twitter. It is also used (required) by Lightning UX. See <a target="_blank" href="http://salesforce.vidyard.com/watch/oFQ26FCXPVOA90xZaVDDjA">this video</a>.
      <br /><br />

   * <a target="_blank" href="https://www.Force.com/"> Force.com</a> is the "platform" domain used by Trailhead and <a target="_blank" href="https://www.similarweb.com/website/force.com#websiteContent">other segments</a>:

      * https://???.content.force.com/
      * https://???.secure.force.com/
      * https://???.visual.force.com/
      * https://veterans.force.com/
      * https://???.lightning.force.com/
      <br /><br />

      Instances starting with "cs" are sandbox environments.<br />
      Instances starting with "ap" are producution in Asia Pacific.<br />
      Instances starting with "na" are production in North America.<br />
      Instances starting with "eu" are producution in Europe (EMEA).

<a name="OtherDomains"></a>

### Other DNS Domain Names 

   * <a target="_blank" href="https://salesforceiq.com">Salesforceiq.com</a> [<a target="_blank" href="https://status.salesforceiq.com/">status</a>]
   * <a target="_blank" href="https://salesforce.org/">Salesforce.org</a> for non-profits
   * <a target="_blank" href="https://site.com/">site.com</a> 

   * <a target="_blank" href="https://www.data.com/">Data.com</a> B2B Prospector: Get More Accounts button to search for companies and import them as accounts, then clean contacts and leads [<a target="_blank" href="https://www.data.com/trust/">status</a>]
   * <a target="_blank" href="https://www.desk.com/">Desk.com</a> - Customer Help Desk support for small business [<a target="_blank" href="https://status.desk.com/">status</a>]
   * <a target="_blank" href="https://www.demandware.com/">Demandware.com</a> acquired in 2016 for manufacturing processes. It is part of the Salesforce Commerce Cloud.
   * <a target="_blank" href="http://www.heroku.com/">Heroku.com</a> - free hosting for low-volume apps written in open-source programming [<a target="_blank" href="https://status.heroku.com/">status</a>]
   * <a target="_blank" href="http://www.marketingcloud.com/">MarketingCloud.com</a> (formerly ExactTarget) [<a target="_blank" href="https://status.marketingcloud.com/">status</a>]
   * <a target="_blank" href="https://pardot.com">Pardot.com</a> [<a target="_blank" href="https://trust.pardot.com/">status</a>]
   * <a target="_blank" href="https://www.quip.com/">Quip.com</a> "a Salesforce company" enables <a target="_blank" href="https://quip.com/cAJzAnydf6gp">spreadsheets</a> and word document files to be exposed on the internet. It also has APIs to enable automation of processes, integration, and collabortion with any app.
   * <a target="_blank" href="https://sforce.co/">sforce.co</a> is Salesforce's own URL shortener, which also tracks the origin of links resolved.

Not owned by Salesforce (but they seem close):

   * <a target="_blank" href="http://www.financialforce.com/">FinancialForce.com</a> provides SaaS for managing financial information. Salesforce invested in this company.
   * <a target="_blank" href="https://atginfo.com/">ATG (Advanced Technology Group)</a> provides SaaS for "Quote to Cash" add-on plus trains on Salesforce Billing.


### Status of productive use

1. Use a browser to where Salesforce displays the up-time status of each instance:

   <a target="_blank" href="https://status.salesforce.com/">status.salesforce.com</a>

   PROTIP: The "AP0", "EU1", and "NA3" are <strong>"pods"</strong>, each where Salesforce assigns particular user organizations. Once assigned, users keep using their assigned pod. Several users are assigned to the same pod and thus use the same hardware. That's <strong>"multi-tenancy"</strong>.

   <a target="_blank" href="https://status.salesforce.com/">https://status.salesforce.com</a> provides availability status by pod on these products:
   <a target="_blank" href="https://status.salesforce.com/">https://status.salesforce.com<img align="right" width="220" alt="sf-status-list" src="https://user-images.githubusercontent.com/300046/43538874-6f8e6466-9580-11e8-9e21-346c82667b50.png"></a>

1. Click a product on the left pane, such as "Sales Cloud" and "Service Cloud".

   PROTIP: Different products use the same salesforce.com domain, but use sub-domain prefixes to differentiate the product being used.

1. Visit <a target="_blank" href="https://www.salesforce.com/products/?d=70130000000mIVK">the Salesforce Products page</a> and scroll down for a list of products offered.

1. Click to Watch a demo and get pricing information for each offering.

1. Scroll near the bottom to click <a target="_blank" href="https://www.salesforce.com/form/signup/freetrial-sales/?d=cta-body-promo-4">START MY FREE TRIAL</a>, and fill in your information.

   A Salesforce UX (User eXperience) screen appears with sample data.

1. Click through the tour (Manage Your Pipeline, Close More Deals, Get Ready to Sell, Sell the Way You Want).

   After 30 days, the sample "org" instance remains active with sample data.

   <a name="productiveURL"></a>

   PROTIP: Notice the <strong>sub-domain</strong> at the front of the URL address assigned, such as "na53" in "https://na53.lightning.force.com/...".

   "lightning" in the URL reflects use of the new User experience screen design rather than the "classic" UX.

1. Click the image at the upper-right and select "Switch to Salesforce Classic".

   PROTIP: Notice the URL now begins with something like 
   "https://na53.salesforce.com/..."

   PROTIP: When setting up a Community Cloud<a target="_blank" href="https://www.udemy.com/salesforce-administrator/learn/v4/t/lecture/4309744?start=0">*</a>, the admin adds a unique name (such as "mypeeps") to create a separate domain name such as:

   https://mypeeps.developer-edition.na53.force.com

1. Switch back to the Lightning UX by clicking "Setup", then 

   At the top of the page are <strong>objects</strong> containing data, such as "Accounts", "Contacts", "Leads", "Opportunities", etc.

   ![sf-lds-heading-648x100-23173](https://user-images.githubusercontent.com/300046/43592347-94aa3c4a-9632-11e8-947e-906e2e2dedde.jpg)

1. Click "More" for additional objects. The Sales CRM system keeps all the data in one place throughout the customer lifecycle: PROTIP: Contacts which show potential turn into Leads. After qualification Leads turn into Opportunities, then after purchase are associated with Accounts.

   PROTIP: By virtue of you filling out a form, you become a Contact to Salesforce and will be getting phone calls and emails from salespeople.


<a name="Features"></a>

### User Product Feature Licenses

<img align="right" alt="sf-feature-user-types-182x330-25641.jpg" src="https://user-images.githubusercontent.com/300046/44497561-6e600a00-a637-11e8-8e6e-1110c1f3f3f8.jpg">

Salesforce issues separate <strong>feature licenses</strong> for a set number of users:

   * Marketing User
   * Apex (Salesforce1) Mobile user
   * Offline User
   * Knowledge User - "Knowledge" is a re-imagining of "Solution Management" 
   * Flow user (of Force.com)
   * Service Cloud User
   * Data.com User
   * Live Agent User
   * Site.com Contributor User
   * Site.com Publisher User
   * Chatter Answers User
   * Work.com User
   * Salesforce CRM Content user

### Offerings

   * <a target="_blank" href="https://developer.salesforce.com/einstein">Einstein</a>, at https://developer.salesforce.com/einstein (covers AI Vision, Predictive Analytics)

   * <a target="_blank" href="https://www.salesforce.com/products/salesforce-iot/overview/">Salesforce IoT</a>
   * <a target="_blank" href="https://searchsalesforce.techtarget.com/definition/Thunder-Salesforce-Thunder">Thunder</a> is a Big Data app that supports Salesforce's IoT Cloud on AWS servers, to take in massive volumes of data generated by devices, sensors, websites, applications, customers and partners and initiate actions for real-time responses. It uses open-source Apache Kafka, Storm, Spark, Cassandra.

   * <strong>Pardot</strong> is a B2B-specific marketing automation suite center around email marketing, lead generation, and marketing automation. Pardot started its life in 2006 and in October 2012 was acquired by <strong>ExactTarget</strong> which became Salesforce Marketing Cloud targeting emails to specific prospects.

   * <a target="_blank" href="http://certification.salesforce.com/pardotconsultant">Pardot</a> - B2B marketing automation, which is part of the Sales Cloud as well.
   * <a target="_blank" href="http://certification.salesforce.com/cpqspecialist">CPQ</a> (Configure, Price, and Quote) and billing workflow

   * Live Agent / Omni channel
   * Quip

   * Social Studio
   * "Lightning Bolt" is the ability to select among page templates for your Community within Site Studio.
   Community Builder lets you brand your community, create and customize pages, add drag-and-drop Lighting components, create custom navigation, and manage community page content.
   * Lightning Platform
   * Lightning Sync (of contacts, events, emails, tasks) separates unresolved items for reconciliation.

   * Cloud Scheduler, a calendaring feature in Salesforce Classic for requesting meetings and finding mutually convenient times to meet, is <a target="_blank" href="https://help.salesforce.com/articleView?id=Cloud-Scheduler-to-begin-phased-retirement-with-Winter-17&type=1&language=en_US">being retired</a> in Winter '17 to Winter '18 Releases

   <br /><br />

See http://www.salesforce.com/platform/overview/

<a name="Reroutes"></a>

### Rerouted domains

When Salesforce acquires other companies, it tends to fold acquired users into Salesforce domains, then automatically reroute requests to previous domains to Salesforce.com. Examples: 

   * <a target="_blank" href="http://www.appexchange.com/">AppExchange.com</a> redirects to appexchange.salesforce.com
   * <a target="_blank" href="http://www.database.com/">Database.com</a> redirects to the Salesforce Platform page
   * <a target="_blank" href="http://www.developerforce.com/">Developerforce.com</a> redirects to<br /><a target="_blank" href="https://developer.salesforce.com/">https://developer.salesforce.com</a>
   * <a target="_blank" href="https://www.site.com/">Site.com</a> is redirected to <br />https://www.salesforce.com/products/platform/overview/
   * Work.com was [retired July 10, 2015](https://success.salesforce.com/_ui/core/chatter/topics/TopicPage?id=0TO300000004GDW&ref=group_profile). It was a sales performance management solution for on-boarding new reps faster, for coaching reps to close more deals, and for rewarding successful behaviors. It redirects tohttps://www.salesforce.com/products/sales-cloud/overview/
   * <a target="_blank" href="https://www.salesforce1.com/">Salesforce1.com</a> redirects to salesforce.com.

### Github accounts

Salesforce employees maintain these accounts within (now Microsoft's) GitHub.com:

   * https://github.com/salesforcelabs/
   * https://github.com/forcedotcom/
   * https://github.com/salesforce-ux/
   * https://github.com/financialforcedev/
   * https://github.com/SalesforceFoundation/ by http://www.salesforce.org/nonprofit/nonprofit-success-pack/  tools to help manage programs, donations, volunteers, and supporters.
   (<a target="_blank" href="https://www.youtube.com/channel/UC6ZEIvlahVCA8k5tYTr_a2A">YouTube acct.</a>)

<a name="Editions"></a>

### Governor limits

Since Salesforce processes customer data in a shared environment, it must make sure that any given customer's process does not disturb others. 

* Total number of records retrieved by a SOQL query – 50,000, so we "bulkify" code
* Total number of SOQL queries issued – 100 (Synchronous) 200 (Asynchronous), so we avoid querying large datasets
* Total number of DML statements issued – 150, so we avoid SOQL Queries or DML statements inside FOR Loops
* Total number of callouts (HTTP requests or Web services calls) in a transaction – 100
* Maximum CPU time on Salesforce servers – 10,000ms (Synchronous) 60,000ms (Asynchronous)
<br /><br />

PROTIP: These and <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm">other limits</a> are not negatives of working with Salesforce. They are needed for any system because every system has its limits. It's just that many sites risk not having them because it's an effort to put them in and they add some overhead.

https://developer.salesforce.com/page/Apex_Code_Best_Practices



### Product Editions

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th align="left"> Feature: </th><th>Developer</th><th>Essentials</th><th>Professional</th><th>Enterprise</th><th>Unlimited</th></tr>
<tr valign="top"><td>$/user per Month</td><td align="right"> - </td><td align="right"> $25 </td><td align="right"> $75 </td><td align="right"> $150 </td><td align="right"> $300</td></tr> 
<tr valign="top"><td>$/user per Year</td><td align="right"> -</td><td align="right"> $300 </td><td align="right"> $900 </td><td align="right"> $1800 </td><td align="right"> $3600</td></tr> 
<tr valign="top"><td>Dev. sandboxes</td><td align="right"> -</td><td align="right">-</td><td align="right">10</td><td align="right">25</td><td align="right">100</td></tr> 
<tr valign="top"><td>Custom apps</td><td align="right">10</td><td align="right">9,999</td><td align="right">255+</td><td align="right">260+</td><td align="right">unlim.</td></tr> 
<tr valign="top"><td>Custom objects</td><td align="right">400</td><td align="right">50</td><td align="right">200</td><td align="right">2,000</td><td align="right">?</td></tr> 
<tr valign="top"><td>Data storage/user</td><td align="right"> -</td><td align="right">20 MB</td><td align="right">20 MB</td><td align="right">20 MB</td><td align="right">120 MB</td></tr> 
<tr valign="top"><td><a target="_blank" href="https://help.salesforce.com/articleView?id=overview_storage.htm&type=5">Max File storage/org</a></td><td align="right"> -</td><td align="right">1 GB</td><td align="right">?</td><td align="right">10 GB</td><td align="right">10 GB</td></tr> 
<tr valign="top"><td>Max File storage/user</td><td align="right"> -</td><td align="right">512 MB</td><td align="right">512 MB</td><td align="right">2 GB</td><td align="right">2 GB</td></tr> 
<tr valign="top"><td>Validation Rules/user</td><td align="right"> 100</td><td align="right">100</td><td align="right">100</td><td align="right">100</td><td align="right">500</td></tr> 
</table>

<a target="_blank" href="https://help.salesforce.com/articleView?id=overview_other_editions.htm&type=5">Salesforce editions no longer sold</a> include: Contact Manager, Group, Personal, Performance, or Database.com.


<a name="FeaturesByEdition"></a>

## Features by Edition

https://store.salesforce.com/editions
<a target="_blank" href="https://a.sfdcstatic.com/content/dam/www/ocms-backup/assets/pdf/datasheets/DS_SalesCloud_EdCompare.pdf">in a PDF</a>

<a name="Essentials"></a>

### Essentials users get

* Lead management
* Account and contact management
* Automatic data capture
* Opportunity tracking

* Task and event tracking
* Case management

* Native sales collaboration
* Email integration
* Chatter
* Mass email
* Salesforce inbox

* Customizable reports and dashboards
* Mobile access and administration
* Salesforce mobile app
<br /><br />
<em>for additonal cost:</em>

* Lightning Dialer

<a name="ProLicense"></a>

### Professional licensees get

* Products and price books
* Orders
* Contracts
* Person Accounts

* Unlimited apps & tabs
* Single Sales Console App

* Limited number of processes, record types, profiles, & role permission sets
* Duplicate blocking
* Rules-based lead scoring, routing & assignment

* Google apps integration
* Analytics snapshots
<br /><br />
<em>Only in salesforce classic:</em>

* Campaigns (Campaign Management)
* Quotes and orders
* Collaborative forecasting
* Mass email
* Knowledge (read-only)
<br /><br />
<em>for additonal cost:</em>

* Developer Pro sandbox
* Web services API (included in Enterprise)
* SalesforceIQ Inbox
* Sales Data
* Sales Cloud Engage
* Steelbrick CPQ
* Campaign Influence
* Accelerators (standard with Ultimate)


<a name="EnterpriseLicense"></a>

### Enterprise licensees

* Custom app development
* Custom record types
* Multiple Sales Console Apps
* Multiple sandboxes

* Enterprise territory management
* Advanced forecasting
* Advanced reporting

* Team Selling (Sales Teams)
* Workflow automation
* Calendar all

* Full profiles and page layouts
* Salesforce Identity
* Salesforce Private AppExchange
* Integration via web service API
<br /><br />
<em>Only in salesforce classic:</em>

* Report history tracking
* Approval automation
<br /><br />
<em>for additonal cost:</em>

* Developer Pro sandbox
* Full sandbox

* Opportunity splits
* Knowledge (read-write)
* Pardot B2B Marketing Automation
* Salesforce Engage
* Salesforce CPQ

Salesforce Enterprise customers can open up tunnels and share data with each other. (EDI for the masses.)


<a name="UnlimitedLicense"></a>

### Unlimited licensees get

* Unlimited custom apps
* Custom tabs and objects

* Multiple sandboxes
* 100 Developer sandboxes
* 5 Developer Pro sandboxes (additional charge in other license levels)
* 24/7 toll-free support
<br /><br />
<em>for additonal cost:</em>

* Partner and Communities

### Partner Developer Pro Editions

Only Developer environments can create managed packages.

Developer Edition (DE) is free. But the account is limited to keep 5MB of data on each of 2 CRM environments and 3 Force.com licenses.

<strong>Developer "Pro"</strong> Orgs can hold up to <strong>1 GB data</strong> (about 500,00 - 1,000,000 records). QUESTION: How to get Pro Developer?

Enrolled partners of Salesforce, who pay a minimum of $1,000/year, can get a <strong>Partner Developer Edition</strong> (PDE) which can keep up to <strong>250 MB</strong> of data (to hold about 125,000 records).

But DE Orgs cannot be upgraded to Partner DE Orgs because partners access the <a target="_blank" href="https://partners.salesforce.com/s/education/general/Environment_Hub">Partner Environment Hub</a>.

Partner Test Editions can be at either the Pro Edition or Enterprise/Plaform Edition.
Pro Edition users get 10 PE licenses. Enterprise users get 25 full CRM licenses and 20 Force.com Platform licenses. Only Enterprise/Platform licenses can create a <a target="_blank" href="https://help.salesforce.com/articleView?id=create_test_instance.htm&type=5">Sandbox</a> for pre-prod testing.

There are <a target="_blank" href="https://partners.salesforce.com/s/education/general/Partner_Orgs">more differences in limits</a>.
Partner Orgs have a 50,000 limit on API calls each 24 hours vs.
15,000 for Individual Developers.

<a target="_blank" href="https://trailhead.salesforce.com/modules/isv_plan/units/isv_plan_editions"><img align="right" alt="sf-editions-200x198-14557.jpg" width="200" src="https://user-images.githubusercontent.com/300046/44049701-12a414e6-9ef2-11e8-907a-95a19132704a.jpg"></a>

Partner editions can include "Group Edition" (GE), "Unlimited (UX)" and "Performance Edition" (PXE).
A GE org has a limit of 5 user licenses and minimal features (does not support record types, role hierarchies).
Salesforce is replacing GE with "Salesforce IQ".
See <a target="_blank" href="https://help.salesforce.com/articleView?id=overview_limits_general.htm&type=5&language=en_US">Salesforce Features and Edition Allocations</a>.


QUESTION: What is "Partner Developer"?

QUESTION: Each level license has different support SLAs?

Call 1-800-667-6389 or see <a target="_blank" href="http://www.salesforce.com/crm/editions-pricing.jsp">http://www.salesforce.com/crm/editions-pricing.jsp</a>
and https://developer.salesforce.com/page/An_Introduction_to_Environments

"<a target="_blank" href="https://partners.salesforce.com/s/education/appinnovators/Trialforce">TrialForce</a>" is used for AppExchange Partners to deliver free trails to prospects.

PROTIP: Those with this license test deployments to production by deploying to another free test org.

Trailhead Module: https://trailhead.salesforce.com/en/modules/premier-success-plans


<a name="Languages"></a>

### Languages

Salesforce <strong>locale</strong> settings determine the display formats for date and time, users’ names, addresses, and commas and periods in numbers.<a target="_blank" href="https://help.salesforce.com/articleView?id=admin_supported_locales.htm&type=5">*</a>

Single language organizations can change their locale but cannot change their language.

PROTIP: The default sorting of Displayed Languages in the Language Settings dialog under Company Profile is by major and then minor translations. Language codes are not shown but here they are:

* en = english
* de = deutch (German)
* es = espania (Spain)
* fr = french
* it = italian
* ja = japanese

* sv = swedish
* ko = korean
* zh-tw = chinese taiwan (traditional)
* zh-cn = chinese (simplified)
* pt-br = Portuguese (as written and spoken in Brazil)
* nl-nl = Standard Dutch (as spoken in The Netherlands) 

* da = danish
* th = thai
* fi = finnish
* ru = russian
* es-mx = Spanish (Mexico)
* no = Norwegian
<br /><br />

MEH: Each product record in a Pricebook is for a single currency. So a product sold in several currencies would appear multiple times in a Pricebook.


<a name="VersionChangeMgmt"></a>

### Salesforce Versions

PROTIP: Salesforce has <strong>three releases per year</strong>, named by season (avoiding Fall):

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

   * Trail: <a target="_blank" href="https://trailhead.salesforce.com/trails/sf_release_prep">Prepare for Salesforce Releases</a>
   [5 hrs 40 mins]

<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
