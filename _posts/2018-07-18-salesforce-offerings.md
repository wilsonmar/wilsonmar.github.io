---
layout: post
title: "Salesforce offerings"
excerpt: "Clouds, Industries, Domains, GitHub, editions, pricing, features, versions"
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

Technically, many of Salesforce's "cloud" and feature offerings share use of the same salesforce.com and force.com DNS domain names.


<a name="WhySalesforce"></a>

## Why Salesforce? #

For end-users, get away from:

   * Reliance on spreadsheets and Access databases
   * Collaboration via email (new people joining can't get to conversation history)
   * Data on local file directories (not accessible by others)
   * Time-intensive, manual steps

For developers, Salesforce provides an easy and fast way to create apps:

   * Being on the cloud, all data in one place to do work, enabling teamwork globally
   * highly scalable instantly
   * Free development environments called "orgs" (organizations). (no 7 day trials)
   * Fine-grained access control

   * Extensible UI with clicks or code
   * Free, full-featured copy of the Salesforce1 mobile Platform introduced 2013
   * API-first to integrate anything with everything
   * Integrations with Gmail, other systems
   * Innovation in Machine Learning for personalization, Analytics
   * Innovation in object recognition
   * Use popular UI frameworks like Bootstrap, JQuery (in VisualForce classic)
   * <a href="#Lightning">Lightning</a> HTML UI components for user-developed apps.

   * Salesforce was designed with a <strong>metadata-driven</strong> architecture. Everything, including the code, configuration, and apps, is specified as metadata.

Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/drucker_customer_market_driven/">Drucker School—Customer & Market Strategy</a> [1 hr 45 mins] +700
to turn your organization into a customer and market-driven powerhouse with these insights.

### Competitors in CRM

<a target="_blank" href="https://twitter.com/Benioff">Marc @Benioff's Twitter</a> header picture has this (from Gartner):

   ![salesforce-market-share-1500x500](https://user-images.githubusercontent.com/300046/43361208-59796650-9286-11e8-919d-bdfd0b5937b7.jpg)

Gartner says "Salesforce leads market share with 16% in 2013 vs. SAP with 13%, and Oracle with 10%."

PROTIP: Salesforce/Force.com seem to be more attractive to <strong>mid-market</strong> customers than SAP and Oracle. And smaller companies tend to more flexible about all work being done on-site.

The top competitors to Salesforce are:

* SAP
* Oracle
* Microsoft Dynamics 365

* SOHO
* Hubspot
* SugarCRM
* Highrise

<a name="Clouds"></a>

### Clouds = Standard Apps

Salesforce uses the word "cloud" to brand <strong>Salesforce apps (applications)</strong>:

   * Analytic Cloud - Business intelligence and analytics software solutions with the "Einstein" brand
   * Commerce Cloud engages shoppers for e-commerce, with order management
   * <a target="_blank" href="http://certification.salesforce.com/communitycloud">Commmunity Cloud</a> - Connect customers, partners, and employees
   * <a target="_blank" href="http://certification.salesforce.com/salescloud">Sales Cloud</a> - Complete CRM customer service solutions
   * Government Cloud app
   * <a target="_blank" href="https://status.salesforce.com/">Health Cloud</a> reports on the health of services by pod (within each region).
   * <a target="_blank" href="https://www.salesforce.com/products/integration-cloud/overview/">Integration Cloud</a> Integration Builder includes the <strong>Mulesoft</strong> Anypoint Platform (bought by Salesforce in an exchange of stock May 2018)

   * <a target="_blank" href="http://certification.salesforce.com/marketingcloudconsultant">Marketing Cloud</a> - Build and manage 1:1 customer journeys. It has its own query language. No free accounts here.
   * <a target="_blank" href="http://certification.salesforce.com/fieldservicelightningconsultant">
   Field Service Lightning certification</a>

   * <a target="_blank" href="https://www.salesforce.com/solutions/philanthropy/corporate-social-responsibility/">Philanthropy Cloud</a>

   * <a target="_blank" href="http://certification.salesforce.com/servicecloud">Service Cloud</a> - Sales force automation and CRM
   * Success Cloud 

Expertise on some of the clouds are proven by <a href="https://wilsonmar.github.io/salesforce-certifications/">"consultant" certification exams</a>.

### Industries

Salesforce recognizes these 12 industries (and requires its partners support):

   * Automotive
   * Communications
   * Financial Services
   * Healthcare
   * High Tech
   * Higher Education
   * Life Sciences
   * Manufacturing
   * Media
   * Nonprofit
   * Public Sector
   * Retail &amp; Consumer Goods
   * Other

<a name="Domains"></a>

### Salesforce.com and Force.com

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
      Instances starting with "CS" are sandbox environments.

      Instances starting with "AP" are producution in Asia Pacific.

      Instances starting with "NA" are production in North America.

      Instances starting with "EU" are producution in Europe (EMEA).

<a name="OtherDomains"></a>

### Other DNS Domain Names 

   * <a target="_blank" href="https://salesforceiq.com">Salesforceiq.com</a> [<a target="_blank" href="https://status.salesforceiq.com/">status</a>]
   * <a target="_blank" href="https://salesforce.org/">Salesforce.org</a> for non-profits

   * <a target="_blank" href="https://www.data.com/">Data.com</a> - B2B prospecting and data cleansing [<a target="_blank" href="https://www.data.com/trust/">status</a>]
   * <a target="_blank" href="https://www.desk.com/">Desk.com</a> - Customer Help Desk support for small business [<a target="_blank" href="https://status.desk.com/">status</a>]
   * <a target="_blank" href="https://www.demandware.com/">Demandware.com</a> acquired in 2016 for manufacturing processes. It is part of the Salesforce Commerce Cloud.
   * <a target="_blank" href="http://www.heroku.com/">Heroku.com</a> - free hosting for low-volume apps written in open-source programming [<a target="_blank" href="https://status.heroku.com/">status</a>]
   * <a target="_blank" href="http://www.marketingcloud.com/">MarketingCloud.com</a> (formerly ExactTarget) [<a target="_blank" href="https://status.marketingcloud.com/">status</a>]
   * <a target="_blank" href="https://pardot.com">Pardot.com</a> [<a target="_blank" href="https://trust.pardot.com/">status</a>]
   * <a target="_blank" href="https://www.quip.com/">Quip.com</a> "a Salesforce company" has APIs to enable automation of processes, integration, and <strong>collabortion</strong> with any app.

Not owned by Salesforce (but they seem close):

   * <a target="_blank" href="http://www.financialforce.com/">FinancialForce.com</a> provides SaaS for managing financial information. Salesforce invested in this company.


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

1. Switch back to the Lightning UX by clicking "Setup", then 

   At the top of the page are <strong>objects</strong> containing data, such as "Accounts", "Contacts", "Leads", "Opportunities", etc.

   ![sf-lds-heading-648x100-23173](https://user-images.githubusercontent.com/300046/43592347-94aa3c4a-9632-11e8-947e-906e2e2dedde.jpg)

1. Click "More" for additional objects. The Sales CRM system keeps all the data in one place throughout the customer lifecycle: PROTIP: Contacts which show potential turn into Leads. After qualification Leads turn into Opportunities, then after purchase are associated with Accounts.

   PROTIP: By virtue of you filling out a form, you become a Contact to Salesforce and will be getting phone calls and emails from salespeople.


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

### Product Editions

Before we go further, know that it is <strong>not cheap to run Salesforce in production</strong> (in "productive use").

Only Developer environments can create managed packages.

Developer Edition (DE) is free. But the account is limited to keep 5MB of data on each of 2 CRM environments and 3 Force.com licenses.

<strong>Developer "Pro"</strong> Orgs can hold up to <strong>1 GB data</strong> (about 500,00 - 1,000,000 records). QUESTION: How to get Pro Developer?

Enrolled partners of Salesforce, who pay a minimum of $1,000/year, can get a <strong>Partner Developer Edition</strong> (PDE) which can keep up to <strong>250 MB</strong> of data (to hold about 125,000 records).

But DE Orgs cannot be upgraded to Partner DE Orgs because partners access the <a target="_blank" href="https://partners.salesforce.com/s/education/general/Environment_Hub">Partner Environment Hub</a>.

Partner Test Editions can be at either the Pro Edition or Enterprise/Plaform Edition.
Pro Edition users get 10 PE licenses. Enterprise uses get 25 full CRM licenses and 20 Force.com Platform licenses. Only Enterprise/Platform licenses can create a <a target="_blank" href="https://help.salesforce.com/articleView?id=create_test_instance.htm&type=5">Sandbox</a> for pre-prod testing.

There are <a target="_blank" href="https://partners.salesforce.com/s/education/general/Partner_Orgs">more differences in limits</a>.
Partner Orgs have a 50,000 limit on API calls each 24 hours vs.
15,000 for Individual Developers.

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th align="left"> Plan</th><th>Per User per Year</th></tr>
<tr valign="top"><td>Essentials (for small business) </td><td align="right"> $300 </td></tr> 
<tr valign="top"><td>Professional ("Complete CRM for any size team") </td><td align="right"> $900</td></tr>
<tr valign="top"><td>Enterprise ("Deeply customizable") </td><td align="right"> $1,800</td></tr>
<tr valign="top"><td>Unlimited</td><td align="right"> $3,600 </td></tr>
</table>

"<a target="_blank" href="https://partners.salesforce.com/s/education/appinnovators/Trialforce">TrialForce</a>" is used for AppExchange Partners to deliver free trails to prospects.

QUESTION: What are "Group", "Personal", and "Performance" editions?

Call 1-800-667-6389 or see <a target="_blank" href="http://www.salesforce.com/crm/editions-pricing.jsp">http://www.salesforce.com/crm/editions-pricing.jsp</a>
and https://developer.salesforce.com/page/An_Introduction_to_Environments

QUESTION: Each level license has different support SLAs?

PROTIP: Those with this license test deployments to production by deploying to another free test org.

Salesforce Enterprise customers can open up tunnels and share data with each other. (EDI for the masses.)

Additionally:

*    Partner Developer
*    Partner Enterprise
*    Partner Group
*    Partner Professional

Trailhead Module: https://trailhead.salesforce.com/en/modules/premier-success-plans


<a name="Features"></a>

### Product Features

See http://www.salesforce.com/platform/overview/

Salesforce issues separate <strong>feature licenses</strong>?

   * Salesforce CRM Content user
   * Force.com Flow user
   * Marketing user
   * Apex (Salesforce1) Mobile user

   * <a target="_blank" href="https://developer.salesforce.com/einstein">Einstein</a>, at https://developer.salesforce.com/einstein (covers AI Vision, Predictive Analytics)

   * <a target="_blank" href="https://www.salesforce.com/products/salesforce-iot/overview/">Salesforce IoT</a>
   * <a target="_blank" href="https://searchsalesforce.techtarget.com/definition/Thunder-Salesforce-Thunder">Thunder</a> is a Big Data app that supports Salesforce's IoT Cloud on AWS servers, to take in massive volumes of data generated by devices, sensors, websites, applications, customers and partners and initiate actions for real-time responses. It uses open-source Apache Kafka, Storm, Spark, Cassandra.

   * <strong>ExactTarget</strong> Fuel Marketing Cloud emails to target specific prospects (purchased by Salesforce)
   * <a target="_blank" href="http://certification.salesforce.com/pardotconsultant">Pardot</a> - B2B marketing automation, which is part of the Sales Cloud as well.

   * Quip
   * <a target="_blank" href="http://certification.salesforce.com/cpqspecialist">CPQ</a> (Configure, Price, and Quote) and billing workflow

   * Chatter instant messaging
   * Social Studio
   * Live Agent / Omni channel

   * Lightning Platform


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
