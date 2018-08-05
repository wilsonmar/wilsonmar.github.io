---
layout: post
title: "Salesforce onboarding"
excerpt: "Get up and running on the various Salesforce domains in clouds"
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

<a name="Browsers"></a>

## Browsers

Salesforce is one of first major companies that works completely over the public internet, on internet browsers.

PROTIP: While there is no installing custom software (from Salesforce) on each user's machine, users can use whatever internet browser is installed with their machine. That would be Internet Explorer that comes with Windows and Safari on Macs. But in practice many users install Firefox and Chrome browsers.

DEVDOC: In [Supported Browsers](https://developer.salesforce.com/docs/atlas.en-us.salesforce_supported_browsers_cheatsheet.meta/salesforce_supported_browsers_cheatsheet/)
some Internet Explorer support is limited. Firefox needs to be configured.


<a name="Clouds"></a>

### Clouds

Salesforce uses the word "cloud" to brand offering to different <strong>industries</strong> and interests.

   * Analytic Cloud - Business intelligence and analytics software solutions with the "Einstein" brand
   * Commerce Cloud engages shoppers for e-commerce, with order management
   * <a target="_blank" href="http://certification.salesforce.com/communitycloud">Commmunity Cloud</a> - Connect customers, partners, and employees
   * <a target="_blank" href="http://certification.salesforce.com/salescloud">Sales Cloud</a> - Complete CRM customer service solutions
   * Government Cloud
   * Health Cloud
   * <a target="_blank" href="https://www.salesforce.com/products/integration-cloud/overview/">Integration Cloud</a> Integration Builder includes the <strong>Mulesoft</strong> Anypoint Platform (bought by Salesforce in an exchange of stock May 2018)

   * <a target="_blank" href="http://certification.salesforce.com/marketingcloudconsultant">Marketing Cloud</a> - Build and manage 1:1 customer journeys. It has its own query language. No free accounts here.
   * <a target="_blank" href="http://certification.salesforce.com/fieldservicelightningconsultant">
   Field Service Lightning certification</a>

   * <a target="_blank" href="https://www.salesforce.com/solutions/philanthropy/corporate-social-responsibility/">Philanthropy Cloud</a>

   * <a target="_blank" href="http://certification.salesforce.com/servicecloud">Service Cloud</a> - Sales force automation and CRM
   * Success Cloud 

Expertise on some of the clouds are proven by <a href="https://wilsonmar.github.io/salesforce-certifications/">"consultant" certification exams</a>.

Many of the "cloud" offerings all share the same "salesforce.com" domain name.

<a name="Reroutes"></a>

## Rerouted domains

When Salesforce acquires other companies, it tends to fold acquired users into Salesforce domains, then automatically reroute requests to previous domains to Salesforce.com. Examples: 

   * <a target="_blank" href="http://www.appexchange.com/">AppExchange.com</a> redirects to appexchange.salesforce.com
   * <a target="_blank" href="http://www.database.com/">Database.com</a> redirects to the Salesforce Platform page
   * <a target="_blank" href="http://www.developerforce.com/">Developerforce.com</a> redirects to<br /><a target="_blank" href="https://developer.salesforce.com/">https://developer.salesforce.com</a>
   * <a target="_blank" href="https://www.site.com/">Site.com</a> is redirected to <br />https://www.salesforce.com/products/platform/overview/
   * Work.com was [retired July 10, 2015](https://success.salesforce.com/_ui/core/chatter/topics/TopicPage?id=0TO300000004GDW&ref=group_profile). It was a sales performance management solution for on-boarding new reps faster, for coaching reps to close more deals, and for rewarding successful behaviors. It redirects tohttps://www.salesforce.com/products/sales-cloud/overview/
   * Salesforce1.com redirects to salesforce.com.

<a name="Domains"></a>

## Root Domain Names 

Salesforce, as a company, owns these domain names (some product offerings have their own domain, but some don't):

   * <a target="_blank" href="https://www.salesforce.com/">Salesforce.com</a> [<a target="_blank" href="https://status.salesforce.com/">status</a>]

      * https://login.salesforce.com/
      * https://help.salesforce.com/
      * https://develop.salesforce.com/
      * https://appexchange.salesforce.com/
      <br /><br />

   * <a target="_blank" href="https://www.Force.com/"> Force.com</a> is the "platform" domain used by Trailhead and <a target="_blank" href="https://www.similarweb.com/website/force.com#websiteContent">other segments</a>:

      * https://???.content.force.com/
      * https://???.secure.force.com/
      * https://???.visual.force.com/
      * https://veterans.force.com/
      * https://???.lightning.force.com/
      <br /><br />

   * <a target="_blank" href="https://salesforceiq.com">Salesforceiq.com</a> [<a target="_blank" href="https://status.salesforceiq.com/">status</a>]
   * <a target="_blank" href="https://salesforce.org/">Salesforce.org</a> for non-profits

   * <a target="_blank" href="https://www.data.com/">Data.com</a> - B2B prospecting and data cleansing [<a target="_blank" href="https://www.data.com/trust/">status</a>]
   * <a target="_blank" href="https://www.desk.com/">Desk.com</a> - Customer Help Desk support for small business [<a target="_blank" href="https://status.desk.com/">status</a>]
   * <a target="_blank" href="https://www.demandware.com/">Demandware.com</a> acquired in 2016 for manufacturing processes. It is part of the Salesforce Commerce Cloud.
   * <a target="_blank" href="http://www.heroku.com/">Heroku.com</a> - free hosting for low-volume apps written in open-source programming [<a target="_blank" href="https://status.heroku.com/">status</a>]
   * <a target="_blank" href="http://www.marketingcloud.com/">MarketingCloud.com</a> (formerly ExactTarget) [<a target="_blank" href="https://status.marketingcloud.com/">status</a>]
   * <a target="_blank" href="https://pardot.com">Pardot.com</a> [<a target="_blank" href="https://trust.pardot.com/">status</a>]
   * <a target="_blank" href="https://www.quip.com/">Quip.com</a> "a Salesforce company" has APIs to enable automation of processes, integration, and <strong>collabortion</strong> with any app.

Not owned by Salesforce but they seem close:

   * <a target="_blank" href="http://www.financialforce.com/">FinancialForce.com</a> provides SaaS for managing financial information. Salesforce invested in this company.


### Github repos:

Salesforce employees maintain these accounts within (now Microsoft's) GitHub.com:

   * https://github.com/salesforcelabs/
   * https://github.com/forcedotcom/
   * https://github.com/salesforce-ux/
   * https://github.com/financialforcedev/
   * https://github.com/SalesforceFoundation by http://www.salesforce.org/nonprofit/nonprofit-success-pack/  tools to help manage programs, donations, volunteers, and supporters.
   (<a target="_blank" href="https://www.youtube.com/channel/UC6ZEIvlahVCA8k5tYTr_a2A">YouTube acct.</a>)

<a name="Editions"></a>

## Product Editions

Before we go anywhere, know that it is not cheap to run Salesforce in production.

Each level license has different support SLAs.
See <a target="_blank" href="http://www.salesforce.com/crm/editions-pricing.jsp">http://www.salesforce.com/crm/editions-pricing.jsp</a>

* Developer Edition (DE) is free, yet has Enterprise capabilities. But cannot deploy anything into production (in "productive use").

   PROTIP: Those with this license test deployments to production by deploying to another free test org.

* Essentials (for small business) 1-800-667-6389 is the lowest cost, at $1,200 a month
* Contact Manager
* Group 
* Professional
* Enterprise is more powerful than the Professional Edition.
* Unlimited

For example, Salesforce Enterprise customers can open up tunnels and share data with each other. Cool. It’s EDI for the masses.

Additionally:

*    Partner Developer
*    Partner Enterprise
*    Partner Group
*    Partner Professional


## Status of productive use

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


## Free Trailhead training

Most other software companies try to make the most money they can by putting their training material behind a paywall. So learning SAP and Oracle takes many thousands of dollars. This limits how many people can effectively learn their product.

Not so with Salesforce. Salesforce as a company offers classes addressing each role and certification through its <a target="_blank" href="http://www.salesforce.com/services-training/training_certification/training.jsp"><strong>Salesforce University</strong> (<a target="_blank" href="https://twitter.com/SalesforceU">@SalesforceU</a>). For example, $3,750 for the 5-day course.
PROTIP: Spending several days strait sitting in a class may seem like "drinking from a firehose".

<a href="#Trailhead">Salesforce Trailhead</a> on-line training is both in-depth and offered free, with <strong>unlimited time on servers</strong>. This has enabled Salesforce users to be among the best trained of any software ecosystem.


### Get Trailhead Training Account

1. Obtain a Trailhead account for FREE tutorials with unlimited server time:

   <a target="_blank" href="https://developer.salesforce.com/trailhead">
   https://developer.salesforce.com/trailhead</a> 

   <img align="right" alt="sf-trailhead-logo-100x87.png" src="https://user-images.githubusercontent.com/300046/43672913-f4546384-9775-11e8-8ec8-e0b730b7b9f3.png">

2. Click the green "Sign Up" button at the upper-right corner or "Start learning for free" in the middle of the screen.

3. Click "Google" to use your Gmail or "LinkedIn" to use your LinkedIn.com account. Alternately, create a password within Salesforce:

   PROTIP: Sign up for Trailhead with a <strong>personal Gmail account</strong> instead of company email so you'll be able to sign in no matter where you work in the future.

4. Check "Remember me" to have the browser remember your account name (not password).

   ![sf-trailhead-menu-656x93-14546](https://user-images.githubusercontent.com/300046/43597098-4ef1c3ba-963e-11e8-91b5-180ab59f41b0.jpg)

5. Click <a target="_blank" href="https://trailhead.salesforce.com/en/trailmixes">Trailmixes</a>. Each Trailmix recommends a sequence of single web pages and Trailhead modules. At last count there were 60 of them.

6. Scroll down to click <a target="_blank" href="https://trailhead.salesforce.com/users/00550000006yDdKAAU/trailmixes/get-started-with-trailhead-end-user">Get started with Trailhead</a>. 

7. Click the Link to read a Medium.co article about Trailhead and Trailblazers.

8. Begin your first Trailhead module:

   <a name="TrailheadBasic"></a>

   <a target="_blank" href="https://trailhead.salesforce.com/modules/trailhead_basics">Trailhead Module: Trailhead Basics</a>

   ### How Trailhead works

   Learning topics are organized into <strong>modules</strong>, which are broken up into <strong>units</strong>. 

   <strong>Trails</strong> group modules to provide guided learning paths suited to specific roles or needs.

   Earn <strong>points</strong> when you finish each unit by completing a quiz or challenge in a Salesforce org. If you answer wrong, less points are earned for each additional attempt.

   Trailhead tutorials are great because of their quizzes (challenges).

   "Challenges" gives you a set of requirements that you have to figure out how to meet on your own.
   A project lays out step-by-step instructions for you to follow, then validates that you did everything correctly.

   PROTIP: Before you begin answering quiz questions, to avoid needing to having your answers wiped away becuase you timed out, make sure you're logged by pressing the browser <strong>Refresh</strong> icon or pressing command+R on the Mac or Ctrl+R on Windows PCs.

   Projects and <a href="#Superbadges">superbadges</a> challenge you to implement a feature or solution in an org (a Trailhead Playground) without step-by-step instructions.

   More points get you higher <a target="_blank" href="https://trailhead.salesforce.com/en/trailblazer-ranks">rank</a>.
   "Ranger" is the highest rank, requiring <strong>50,000 points</strong> from at least 100 badges. <a target="_blank" href="https://twitter.com/search?f=tweets&q=%23TrailheadRanger&src=typd">#TrailheadRanger</a>

   There are enough course for <a target="_blank" href="https://trailhead.salesforce.com/en/me/preeharris">Preethi Harris</a> to reach <a target="_blank" href="https://twitter.com/search?f=tweets&q=%23DoubleRanger&src=typd">#DoubleRanger</a>

   PROTIP: You can create <a target="_blank" href="https://trailhead.salesforce.com/en/users/005500000061uyuAAA/trailmixes/new">your own custom trailmix</a> on <a target="_blank" href="https://trailhead.salesforce.com/mytrailhead/">myTrailhead</a>, in different languages.


   ### Plan to Pace Yourself

   Here's an example of a progression:

   | Trail/Project | Hours | Points |
   | ----- | ---: | -----: |
   | Intro. to Trailhead | 2 | 500 |
   | <a target="_blank" href="https://trailhead.salesforce.com/modules/starting_force_com">Module: Salesforce Platform Basics</a> Get introduced to the platform, navigate use cases, and build custom functionality. | 2 | 300 |
   | Trail: <a target="_blank" href="https://trailhead.salesforce.com/trails/force_com_admin_beginner">Admin Beginner</a> | 7 | 8,200 |
   | <a target="_blank" href="https://trailhead.salesforce.com/modules/data_modeling">Module: Data Modeling</a> | - | - |
   | <a target="_blank" href="https://trailhead.salesforce.com/modules/visualforce_fundamentals">Module: Visualforce Basics</a> | - | - |
   | Trail: <a target="_blank" href="https://trailhead.salesforce.com/trails/force_com_admin_intermediate">Admin Intermediate</a> | 13 | 8,200 |
   | Take Admin 1 exam | - | - |
   | Advanced Admin Trail | - | - |
   | Take Advanced Admin exam | - | - |
   | Trail: <a target="_blank" href="https://trailhead.salesforce.com/trails/force_com_dev_beginner">Developer Beginner</a> | 15 | 19,400 |
   | Trail: <a target="_blank" href="https://trailhead.salesforce.com/trails/force_com_dev_intermediate"> Developer Intermediate</a> | 23 | 9,100 |
   | Developer Trail - Mobile SDK | 6.8 | 3,000 |
   | <a href="#ConfApp">Build a Conference Management App</a> | 3 |  550 |
   | <a href="#SuggestionApp"> Build Suggestion Box App</a> | 1.9 | ? |
   | Quick Start: <a href="#Lightning">Lightning</a> Components | 0.5 | 150 |
   | Quick Connect: Lightning Connect | 0.3 | 100 |
   | Total: | 50 | 45,000 |

   ### Text to speech

   However, Trailhead tutorials are mainly text.

   PROTIP: Use a program that generates text to speech.
   Macs has it built-in, and just need to be enabled in Apple System Preferences > Accessibility > Speech.
   ![macos-speech-key-398x58](https://user-images.githubusercontent.com/300046/43554806-dac78108-95b3-11e8-80e9-00bac235554a.jpg)

   You can change the default option+` (back tick) activation key sequence.

   PROTIP: I like the proper British female voice "Kate", who is like Mary Poppins reading to me. For some reason, I am less distracted by minor pronouciation imperfections by American voices rather than the Queen's English.

   ![macos-speech-kate-317x117](https://user-images.githubusercontent.com/300046/43554819-eb2c8c32-95b3-11e8-852e-dfd4cc712f47.jpg)

   If you have the money, several video tutorials are available from Pluralsight, Lynda/LinkedIn, etc.
   
   But don't neglect completing Salesforce trailheads.
   Here's why...

### Trailhead profiles

Here are some sample profiles from among my list of <a target="_blank" href="https://wilsonmar.github.io/salesforce-rock-stars/">Salesforce Rock Stars</a>:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/me/laydurafe">
   https://trailhead.salesforce.com/en/me/laydurafe</a>
   * https://trailhead.salesforce.com/en/me/adammvp
   * https://trailhead.salesforce.com/en/me/00550000006gTqVAAU Naveen Poojary
   * https://trailhead.salesforce.com/en/me/00550000006gOHXAA2 Anjaneya Reddy Bobbala got near 100,000 points by completing 135+ badges over 7 trails

   * <a target="_blank" href="https://trailhead.salesforce.com/en/me/wilsonmar/">
   https://trailhead.salesforce.com/en/me/wilsonmar</a>

Each profile includes how many trailhead modules and trails completed,
and the points earned. Skills distribution by category:

![sf-trailhead-cat-304x308-24442](https://user-images.githubusercontent.com/300046/43572325-7aa3ef20-95fc-11e8-99cf-391341ff6d8b.jpg)

Profiles don't list certifications exams passed.

QUESTION: Those who have been designated as a "MVP" by Salesforce also get identified in their profile?


<a name="Topics"></a>

## Topics of conversation

1. If get stuck, go through the trail again on another Playground. This struggle is part of the learning process.

1. If you need help from others, first see if someone asked questions by clicking this at the bottom-right of each Trailhead Module page:

   <img alt="sf-questions-238x48-4407.jpg" width="238" src="https://user-images.githubusercontent.com/300046/43619809-ce1fbef0-968c-11e8-8e07-b6d8c4e46352.jpg">

2. Click "Help each other". Trailhead offers this selection of product interests for "Answers". Note the web page is in the Trailblazer Community Success Cloud URL <a target="_blank" href="
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
   * <strong>Trailhead Challenges</strong>
   * Additional products
   <br /><br />
   
   You will learn how to work with each of the above in various Trailhead modules.

1. Click "Trailhead Challenges".
1. Type in your question in the field containing "What do you want to know?", the press Enter.

   <img alt="sf-trailhead-product-interests-386x271-24542.jpg" width="386" src="https://user-images.githubusercontent.com/300046/43539050-f9c092f8-9580-11e8-9205-1908cc2db8b7.jpg">



<a name="Offerings"></a>

## Product Offerings

See http://www.salesforce.com/platform/overview/

Salesforce issues licenses for several offerings :

   There are separate <strong>feature licenses</strong>:

   * Salesforce CRM Content user
   * Force.com Flow user
   * Marketing user
   * Apex (Salesforce1) Mobile user
   <br /><br />

   <a name="OtherOfferings"></a>

### Additional product offerings

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

## Salesforce Versions

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


<a name="TrailheadPlayground"></a>

## Trailhead Playground

   You will need an "org" (database) to use which is different than the 
   <a href="#productiveURL">"productive" (real) environment</a>.

A Trailhead Playground is an org you can use to complete hands on challenges, and try out new features and customizations. It <strong>comes with set of Trailhead-specific data</strong> (a set of sample contacts, etc.) that you can use when completing challenges, and a pre-installed unmanaged package that we use to test your hands-on challenges. Trailhead Playgrounds have some limits, but for the most part they give you the same customization options as a production org. 

PROTIP: Salesforce is great because of its free Trailhead tutorial that are thorough.

PROTIP: For a list of your Hands-on Orgs, go to <a target="_blank" href="https://trailhead.salesforce.com/">https://trailhead.salesforce.com</a>,
click the picture at the upper-right corner, and select <a target="_blank" href="https://trailhead.salesforce.com/en/users/profiles/settings/">Settings</a>.

1. At the bottom of the Trailhead Module page there is often a blue <strong>"Launch"</strong> button:

   <img alt="sf-trailhead-launch-377x338-30024.jpg" width="377" src="https://user-images.githubusercontent.com/300046/43616777-85b54e8e-967b-11e8-89fc-dd7830386299.jpg">

   PROTIP: Remember to select the Trailhead Playground before clicking the Launch button. You can crate multiple Trailhead Playground by selecting "Create a Trailhead Playground". Over time learners have more than one Playground. 

1. Click Launch for the selected Playground.

   PROTIP: To quickly shift between tabs on a browser, use keyboard shortcut keys <strong>control+tab</strong> and control+shift+tab on the Mac.

   PROTIP: I stick a small physical dot (from a glue gun) near the control and command keys so I can find them without looking at the keyboard.

   PROTIP: Notice that when in a Playground, the browser's URL is different than the <a href="#productiveURL">"productive" (real) environment</a> (such as "na53"). For example:

   <pre>https://resourceful-moose-263556-dev-ed.lightning.force.com/...</pre>

   At the upper-right corner, there is an avatar instead of your picture because you don't own Playground orgs.

   <img alt="sf-playground-avatar-363x338-26683.jpg" width="363" src="https://user-images.githubusercontent.com/300046/43617177-c870820a-967d-11e8-85c8-65e618968522.jpg">

   PROTIP: When you time-out while in a Playground, don't use your Salesforce account credentials to sign back in. Instead, close the page and Launch the Playground again from the Trailhead page.

   You can <a target="_blank" href="https://trailhead.salesforce.com/en/modules/trailhead_playground_management/units/get-your-trailhead-playground-username-and-password">set a password to the Username associated with each Trailhead Playground</a>.

1. Click the avatar.
1. Click Settings.

   Notice the email address to the right of label <strong>Username:</strong> 
   matches the domain name of the URL, such as: "wilsonmar@resourceful-moose-263556.com".

   ### Salesforce Lightning UI

   Salesforce currently stores data for all product offerings (all SaaS in the cloud) within a single "monolithic" database.

1. Click the "cog" icon to select Setup:

   <img alt="sf-setup-253x186.png" width="253" src="https://user-images.githubusercontent.com/300046/43531842-f56b78e8-956d-11e8-8ce3-66b8cb160d13.png">

   BTW, app logos that appear at the upper left should be no larger than 300 pixels wide by 55 pixels high.
   Adjust the number of colors in .gif or .jpg so they are under the 20kb size limit.

   BTW, <a target="_blank" href="http://encycolorpedia.com/1798c1">
   Colors in Salesforce screens</a>

   At the upper-left is the App Launcher icon and the current app.

1. Click the app launcher icon for a list of apps and items.

1. Scroll down for the "All Items" list:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/43531745-a9f76656-956d-11e8-950c-6c017c1d1a19.png"><img alt="sf-all-items-843x292.png" src="https://user-images.githubusercontent.com/300046/43531745-a9f76656-956d-11e8-950c-6c017c1d1a19.png"></a>

   Click the picture above here for a larger image in a new window.

   Items on the page is a mixture of objects and actions.

1. Scroll back up to the top of the pop-up.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/43531384-e10b834e-956c-11e8-9113-3506e009c7ae.png"><img alt="sf-app-launcher-1106x554.png" width="1106" src="https://user-images.githubusercontent.com/300046/43531384-e10b834e-956c-11e8-9113-3506e009c7ae.png"></a>

   Click the picture above here for a larger image in a new window.

   The list apps shown above are <strong>"Managed apps"</strong> developed by Salesforce itself. 

   The "Sales" app is the base CRM (Customer Relationship Management) app.
   PROTIP: CRM (Customer Relationship Management) is the Salesforce company's stock market symbol. CRM is the main offering from Salesforce as a company.

   <strong>"AppExchange apps"</strong> are developed by 3rd parties, usually an ISV (Independent Software Vendor) Salesforce partners. AppExchange is the name of the marketplace where such apps are available, either free or for a fee. 

### Einstein Trailhead Playground

1. Go to the sign-up page for a Trailhead Playground with Einstein Prediction Builder at

   https://developer.salesforce.com/promotions/orgs/einsteinbuilder

1. Fill out the form completely. In the Email field, enter an active email address because a confirmation email will be sent there.

1. In the Username field, enter a email address unique among all other Trailhead users.

   PROTIP: It doesn’t have to be a valid email account. 
   For example, I used "wilsonmar@einstein.com".

1. Click Sign me up. A confirmation message appears.
1. Check your spam folder if you don't see the email.
1. When you receive the activation email, open it and click "Verify Account".
1. Change (set) your password and enter a security answer. Write it down.
1. Click Change Password to get logged in to the Einstein Trailhead Playground's Setup page.

1. In the Trailhead Playground picklist, select "Log into a Developer Edition".
1. Login to the Username (such as my "wilsonmar@einstein.com") and the password you assigned.
1. Among the email associated with the Username, highlight and copy the Verification Code.
1. Paste the verification code in the "Verify Your Identity" dialog.
1. Click "Allow".
1. Click "Yes! Save It."
1. Scroll down to see your Einstein Username being the default. 
1. Click "Launch".

### Adding apps to Trailhead 

We next look into adding one of each to your Trailhead Playground.

I got confused with the <a target="_blank" href="https://trailhead.salesforce.com/modules/trailhead_playground_management/units/install-apps-and-packages-in-your-trailhead-playground">Install Apps and Packages in Your Trailhead Playground</a> unit of the <a target="_blank" href="https://trailhead.salesforce.com/modules/trailhead_playground_management/">Trailhead module: Trailhead Playground Management</a>. 

To add a managed app such as the Salesforce <a target="_blank" href="https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB00000009UeX">Dreamhouse" app</a>:

1. In a new browser window, go to the "home page" for the Dreamhouse managed package:

   <a target="_blank" href="https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB00000009UeX">https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB00000009UeX</a>

   ![sf-install-dreamhouse-648x414-38763](https://user-images.githubusercontent.com/300046/43645276-9ee7e10a-96ee-11e8-9976-2e0d8ac85bd2.jpg)

   Notice the URL has a "productive" domain name for doing real work, separated from the rest of the URL in this example:

   <pre>https://na31.lightning.force.com/
   packagingSetupUI/ipLanding.app?apvId=04tB00000009UeX</pre>

   PROTIP: Don't click on the blue "Install" button or the app will install in the wrong domain ("na31" in the example above).

   What we want is to install in a Playground domain.

1. Highlight and copy (to your invisible operating system Clipboard) the part of the URL string AFTER the domain, for example extract:

   <pre>packagingSetupUI/ipLanding.app?apvId=04tB00000009UeX</pre>

1. Exit out from that browser window.

1. Switch back to the Playground window.
1. Press command+R to refresh the screen to make sure the session is still active.
1. Construct the URL necessary by pasting it after the Playground domain name, such as:

   <tt>https://resourceful-moose-263556-dev-ed.lightning.force.com/packagingSetupUI/ipLanding.app?apvId=04tB00000009UeX</tt>

   PROTIP: This "hack" works because somehow Salesforce treats the URL as a "declarative" statement of what is desired rather than as a usual read-only request URL.

1. Press Enter.
1. Now click Install.
1. Check the box to the left of "Yes, grant access to these third-party web sites".
1. Click Continue.
1. Wait for the "Installing and granting access to admins Only..." message to turn to "Installation Complete!".
1. Click Done.

   To verify what was included in the app or package you installed:

1. Click the cog icon and select Setup. Another browser window opens.
1. In Quick Find, type "Installed Packages" and select Installed Packages in the Apps list.
1. Click the "Dreamhouse" app Package Name in the list.
1. Click "View Components" to see all components of the package.
1. Close that browser window.


<a name="AppExchange"></a>

## AppExchange 3rd-Party Tools

https://appexchange.salesforce.com/appxHome

<a target="_blank" href="https://appexchange.salesforce.com/collection/SalesforceLabs">
Salesforce Labs Solutions at https://appexchange.salesforce.com/collection/SalesforceLabs</a>
are free and customizable Labs Apps built by Salesforce employees.

Examples from 3rd-parties (partners):

* Security Zen at http://SecurityZen.net @SecurityZen_Net ‏is a new tool for managing #Salesforce Security.

* Ultra Field History Tracker @UFHTAuditTool ‏since June 2018 is an advanced SFDC field history tracking app supporting both standard and custom objects, unlimited fields, forever retention WITHOUT consuming data storage.

* <a target="_blank" href="https://www.linkedin.com/pulse/introducing-wsproxy-salesforce-marketing-cloud-eliot-harper/">WSProxy for Salesforce Marketing Cloud</a> July 17, 2018 by Eliot Harper offers scripting support through AMPscript and Server-Side JavaScript (or SSJS) scripting languages.

* Salesforce data loading tools, web services, middleware (such as Dell Boomi, Informatica, etc.)

* APTTUS Contract Management Software (CLM)


<hr />

## Developer Account

1. https://developer.salesforce.com/signup

2. Fill out your information and upload your picture.

   ### Create a Developer Edition organization

   Even if you already have Enterprise Edition, Unlimited Edition, or Performance Edition, use Developer Edition for developing, staging, and testing your solutions against sample data to protect your org’s live data, especially for applications that insert, update, or delete data (as opposed to just reading data).

   ### Clear fresh developer edition org

   From <a target="_blank" href="https://apex-commons.github.io/remove-code-from-fresh-salesforce-org/">here</a>

1. Go to Setup | Administration Setup | Manage Users | Profiles | System Administrator
1. Click Edit
1. Under “Custom App Settings”, change the “Default” to something other than Force.com
1. Click Save
1. Go to Setup | App Setup | Create | Apps
1. Delete Force.com
1. Go to Setup | App Setup | Create | Tabs
1. Delete “Start Here”
1. Go to Setup | App Setup | Develop | Pages
1. Delete “Start Here”
1. Go to Setup | App Setup | Develop | Classes
1. Delete startHereController and XMLDom.

Now you can https://apex-commons.github.io/contribute/


## Developer Console

https://trailhead.salesforce.com/en/modules/developer_console">

1. To open "Developer Console" for an org, click the cog icon and select "Developer Console".

   ![sf-dev-console-245x145-9152](https://user-images.githubusercontent.com/300046/43218480-c28dad54-9001-11e8-9b7e-d76d26ac107f.jpg)

   See https://help.salesforce.com/articleView?id=code_dev_console.htm&type=5

2. A headless browser window pops up with this tabs pane at the bottom:

   ![sf-dev-console-tabs-610x170-26186](https://user-images.githubusercontent.com/300046/43218626-29752254-9002-11e8-858e-087fece5cc17.jpg)

   * The Developer Console doesn’t have version control or conflict resolution like DX does.

   The main pane displays the source code editor for the current <strong>workspace</strong>, which is a collection of resources (files).

   * Apex classes
   * Visualforce pages
   * SOQL queries
   * Lightning components

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


## Other IDEs and Editors

<a target="_blank" href="https://success.salesforce.com/issues_index?tag=Eclipse%20IDE">Eclipse IDE Known Issues</a>

Welkin's Suite 

Aside.io

MavensCode

The choice of editors is covered in 
<a target="_blank" href="https://app.pluralsight.com/player?course=apex-absolute-beginner-guide-coding-salesforce&author=david-liu&name=apex-absolute-beginner-guide-coding-salesforce-m5&clip=3&mode=live">
Pluralsight video course: Apex Absolute Beginning Guide to Coding Salesforce</a>


## Privacy

Trail: <a target="_blank" href="https://trailhead.salesforce.com/trails/learn-privacy-and-data-protection-law">Learn Privacy and Data Protection Law</a>:

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/us-privacy-law-basics"> Trailhead Module: US Privacy Law Basics</a> [50:00] around personally identifiable information (PII).

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/european-union-privacy-law-basics/">Trailhead Module: European Union Privacy Law Basics</a> [45:00] to learn about the General Data Protection Regulation (GDPR) and how to comply.


<a name="MobileApps"></a>

## Mobile Apps

"Salesforce1 Platform" is the brand name to emphasize that mobile capabilities are automatically provided when apps are created. "mySalesforce" refers specifically to mobile apps.
The brand name first appeared in 2014.

   * On <a target="_blank" href="https://itunes.apple.com/us/app/social-studio/id840173798?mt=8">
   iOS device install Social Studio app</a>

Eugene Oksman (@oksman (https://twitter.com/oksman) and Akhilesh Gupta (@akhileshgupta (https://twitter.com/akhileshgupta)) lead the Mobile SDK team at Salesforce.com.

On Trailhead:

   * Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/modules/salesforce1_mobile_app">Salesforce Mobile App Customization</a>


### Salesforce Authenticator

I recommend that you use Google Authenticator instead so you only need to have one app for many accounts.

1. On your smartphone install the "Salesforce Authenticator" app.

1. Enable backups by typing in your phone number. The response is a text message (from 288-401):

   <tt>Ready to verify your mobile number in the Salesforce Authenticator app? SalesforceAuthenticator://verify-number?t=FvdRiT</tt>

1. Press the link.
2. Type a 4-digit passcode.   

   * Trail: <a target="_blank" href="https://trailhead.salesforce.com/trails/identity">Secure Identity and Access Management</a> [3 hrs 55 mins]

   * Trail: <a target="_blank" href="https://trailhead.salesforce.com/trails/shield">Secure Your Apps with Salesforce Shield</a> [4 hrs 5 mins]


## More Trailhead Learning


   <a name="Superbadges"></a>

### Superbadges

   <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges">Superbadges"</a> provide skill-based, domain-level "specialist" credential (to put on resume) by completing modules of real-life business scenario for which you have to build a solution across entire feature areas. 

   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_security">Security</a>
   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_reports">
   Reports & Dashboards</a>

   PROTIP: These two are preparation for <a href="#Developer">Developer certification</a>:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_apex">
   Apex Specialist</a>
   * <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_aap">
   Advanced Apex Specialist</a>
   <br /><br />

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


## People behind Trailhead

   * #Trailhead
   * Chris Duarte (@TheChrisDuarte) - Managing Editor of #Trailhead
   * Sandeep Bhanot (@cloudysan) - #Trailhead Product Owner/ Evangelist


<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
