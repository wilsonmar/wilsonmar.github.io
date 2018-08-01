---
layout: post
title: "Salesforce onboarding (for developers)"
excerpt: "Get up and running on the various Salesforce technologies"
tags: [salesforce]
file: salesforce-onboarding.md
image:
# feature: pic orange wm_mcnaughton_sunset_runner_1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622121/097d7550-0585-11e6-9543-27d45c2487c2.jpg
  credit: William McNaughton
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

Here are steps and information to get those new to Salesforce to get started quickly.
This also aims to provide succint lists for experienced Salesforce readers.

"PROTIP:" in this document marks the unique contribution of this website, 
providing you advice available nowhere else.

https://trailhead.salesforce.com/modules/starting_force_com
Salesforce Platform Basics
Get introduced to the platform, navigate use cases, and build custom functionality.

<a name="Glossary"></a>

## Glossary of Terms and Acronyms

* <a target="_blank" href="https://help.salesforce.com/apex/HTViewHelpDoc?id=glossary.htm">
   Salesforce's Glossary</a> of terms.

* [My Quizlet gamifying Salesforce Acronmyns](https://quizlet.com/87010545/dev-401-all-flash-cards/) now has over 1,000 items.

   Please let me know if you see any terms missing.

* [Quizlets about Saleforce](https://quizlet.com/subject/salesforce/?sortBy=mostRecent):

* [Salesforce ADM 201 - Up through Spring '14 Release](
https://quizlet.com/35268499/salesforce-adm-201-up-through-spring-14-release-flash-cards/)
has over 300 items.


<a name="WhySalesforce"></a>

## Why Salesforce? #

For end-users, get away from:

   * Reliance on spreadsheets and Access databases
   * Collaboration via email
   * Documents shared on local file directories
   * Time-intensive, manual steps

For developers, Salesforce provides an easy and fast way to create apps:

   * Free development environments called "orgs" (organizations). (no 7 day trials)
   * Integrations
   * Free, full-featured copy of the Salesforce1 mobile Platform introduced 2013
   * Develop apps with clicks or code
   * Fine-grained access control
   * highly scalable
   * API-first to integrate anything with everything
   * Use popular UI frameworks like Bootstrap, JQuery (in VisualForce classic)
   * <a href="#Lightning">Lightning</a> HTML UI components for user-developed apps.

   * Salesforce was designed with a <strong>metadata-driven</strong> architecture. Everything, including the code, configuration, and apps, is specified as metadata.

### Competitors in CRM

Marc Benioff has this on his Twitter header picture:

   ![salesforce-market-share-1500x500](https://user-images.githubusercontent.com/300046/43361208-59796650-9286-11e8-919d-bdfd0b5937b7.jpg)

* Gartner says "Salesforce leads market share with 16% in 2013 vs. SAP with 13%, and Oracle with 10%."

   Salesforce and Force.com are more attractive to mid-market customers than SAP and Oracle,
   which tends to impose industry-specific workflows on implementations.
   So you're not as much always forced to work for large consulting firms living out of hotels.


* SAP
* Oracle
* Microsoft Dynamics 365

* SOHO
* Hubspot
* SugarCRM
* Highrise


<a name="LaborDemand"></a>

## Labor Demand

Here is why you want to spend time on Salesforce:
The company has seen a growth rate of 35% year-over-year unrivaled in the stock market:
![crm_stock_to_20150718](https://cloud.githubusercontent.com/assets/300046/8766609/e7cf7120-2dfc-11e5-981a-433ceba95b37.png)

   * Salesforce has not been profitable, but its market value (stock price x shares) is $48 billion dollars.
   * Microsoft's $50 billion offer was rejected.
   * The prediction is for a buyout/merger with Oracle, where Salesforce CEO Benoiff had worked.
   <br /><br />

Salesforce, as a company, pioneered the 1:1:1 model, donating one percent of its time, equity, and product to non-profit organizations via the <a target="_blank" href="http://www.salesforcefoundation.org/">salesforcefoundation.org</a>

https://medium.com/trailhead/huge-demand-for-salesforce-talent-3bb30c597b39

Mason Frank International, a recruiter, publishes a report each year about the Salesforce ecosystem,
providing detailed breakdowns of salaries by job role, location, and so much more.
<a target="_blank" href="
https://www.masonfrank.com/salesforce-salary-survey/">
https://www.masonfrank.com/salesforce-salary-survey/</a>

DISCUSSIONS: <a target="_blank" href="https://developer.salesforce.com/forums/#!/feedtype=RECENT&dc=Jobs_Board&criteria=ALLQUESTIONS">Jobs Board</a>

## Jobs

  * http://careers.force.com/jobs lists jobs inside Salesforce.
  
  * <a target="_blank" href="https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=true&clickSource=searchBtn&typedKeyword=sales&sc.keyword=Salesforce&locT=&locId=&jobType=">Salesforce jobs at Glassdoor</a>

  * <a target="_blank" href="https://www.glassdoor.com/Reviews/Salesforce-Reviews-E11159.htm">
  Salesforce company reviews at Glassdoor</a>

  * bit.ly/TwitchSF

  * Stackoverflow Jobs

  * Consulting Partners



<a name="Social"></a>

## Stay Informed on Social Media


<a name="Chatter"></a>

### Chatter

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/chatter">
   Trailhead sModule: Chatter Administration for Salesforce Classic</a>

### Salesforce employee teams

Salesforce Developer Relations Team of evangelists:

   * [@SalesforceDevs on Twitter](https://twitter.com/SalesforceDevs)

   * <a target="_blank" href="https://developer.salesforce.com/blogs/">
   https://developer.salesforce.com/blogs</a> (Salesforce Developer Releations Blog)

   * <a target="_blank" href="https://www.pscp.tv/SalesforceDevs/1RDGldYDWOzGL">Broadcasts on pscp.tv</a> (Periscope) viewed on the Periscope Live Video Streaming app on <a target="_blank" href="https://itunes.apple.com/us/app/id972909677?mt=8">iOS</a> and <a target="_blank" href="https://play.google.com/store/apps/details?id=tv.periscope.android">Android</a>. Sign-up, and follow @SalesforceDevs.

   * <a target="_blank" href="https://www.youtube.com/channel/UCKORm8sxh3cheBpqs0akkhg">
   Salesforce Developers YouTube channel</a>   

Salesforce Engineering team:

   * [@SalesforceEng on Twitter](https://twitter.com/SalesforceEng)

   * <a target="_blank" href="https://developer.salesforce.com/blogs/engineering/">
   https://developer.salesforce.com/blogs/engineering</a> provides updates about core engineering and product releated 

Salesforce Product Documentation team:

   * <a target="_blank" href="https://twitter.com/salesforcedocs">@salesforcedocs</a>

Salesforce Customer Success team (in the Success Cloud) who helps paying teams up and running:

   * <a target="_blank" href="https://twitter.com/asksalesforce‏">@asksalesforce‏</a>

   * Salesforce Success Community https://success.salesforce.com/

   * <a target="_blank" href="https://developer.salesforce.com/mvp">
   Salesforce MVPs</a>

Salesforce Trailhead team:

   * https://medium.com/trailhead

Salesforce Certification Group:

   * https://www.linkedin.com/groups/151420/profile 

   * https://www.linkedin.com/showcase/salesforce-admins/ SalesForce Admins on LinkedIn.

<a target="_blank" href="https://developer.salesforce.com/forums?communityId=09aF00000004HMGIA2#!/feedtype=RECENT&dc=Trailhead&criteria=ALLQUESTIONS"> Developer forum on Trailhead</a>

Github repos

   * https://github.com/forcedotcom/salesforcedx-vscode/wiki/Tips-and-Tricks

   * https://github.com/forcedotcom/salesforcedx-vscode/wiki/Troubleshooting

### Communities

* <a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A000000HTp1">
   Salesforce DX</a> (Developer eXchange)

* <a target="_blank" href="https://salesforce.stackexchange.com/">https://salesforce.stackexchange.com</a>

* Follow <a target="_blank" href="https://www.linkedin.com/showcase/salesforce-developers/">Salesforce Developers on Linkedin</a>


## Events (Meet people)

<a target="_blank" href="https://developer.salesforce.com/calendar">https://developer.salesforce.com/calendar</a>
is where you find and register for events.

TrailheadDX (Developer eXperience)

   * #TDX18 

World Tour

  * There is a mobile app (by Debra Nacimento) for the Salesforce World Tour.

Lightning Now Tour to a city near you in 2018

   * <a target="_blank" href="bit.ly/lightning-now-developer">Lightning Now Tour for Developers</a>

   * <a target="_blank" href="bit.ly/lightning-now-sales-admin">Lightning Now Tour for Sales Admins</a>

Local Meetups 

   * <a target="_blank" href="http://salesforce.meetup.com/">salesforce.meetup.com</a>
   lists meetups secheduled at meetups.com (at $200 per year).

   * https://success.salesforce.com/userGroups  

   * https://developer.salesforce.com/dugs

<a target="_blank" href="http://www.salesforce.org/nonprofit/nonprofit-success-pack/">NPSP (Non-Profit Success Pack) website</a> and <a target="_blank" href="http://www.npspday.org/">conferences around the country</a>:

   * https://seattlenpsf.wordpress.com/ is the Seattle Non-profit (ask to be invited to view)


### Dreamforce

<a target="_blank" href="http://www.salesforce.com/dreamforce/">Dreamforce</a> is Salesforce's annual conference, usually <strong>4 days in September</strong>.
   It drew 170,000 to San Francisco in 2017.

   * Recorded vidoes sessions are on the <a target="_blank" href="https://www.youtube.com/user/salesforce">Salesforce YouTube channel</a>.

   * Use #DF17, #DF18, etc. on Twitter, Instagram, and other social media.

Agenda Builder

<a target="_blank" href="https://trailhead.salesforce.com/modules/get_ready_for_dreamforce_onsite">Trailhead Module: Dreamforce & Next Steps</a> [40 mins] Make the most of your time at Dreamforce and keep learning after the event.

The Dreamforce Campus in downtown San Francisco has over 85 rooms in nine different locations.

Free shuttles and pedi-cabs take you to and from major locations. It’s only 20 minutes from one end of the campus to the other. There is a bike valet in Jessie Square.

Welcome Reception

The <strong>Customer Success Expo</strong> is the world’s largest cloud ecosystem under one roof
within the Moscone South. There are <strong>line-of-business zones</strong>.

There are 2,700+ expert-led sessions of 40-minute breakouts and 20-minute theater sessions,
with majority of them customer led.
25% of all seats (except for those in Hands-On Trainings and a few other workshops) are blocked for walk-ins.

<strong>Workshops</strong> at Dreamforce are facilitator-led sessions with group discussion and exercises that dive deep into a specific challenge and solution. 

<strong>Circles of Success</strong> sessions are where facilitators lead 10-person groups in problem-solving exercises.

Salesforce Campground.

Hands-on Training (HoT) classes are offered, where you can learn directly from Salesforce University experts.

Half-priced ($99) certification exams and SalesforceU live classes.

<strong>Dream Valley</strong> gives back to the community.

Partner-sponsored parties and events also take place all week long.

<strong>Dreamfest</strong> is the party of the conference, featuring incredible live music, food, and drinks. In 2017 it was held at AT&T Park with Alicia Keys and Lenny Kravitz.

Hackathon



## Store

<a target="_blank" href="https://salesforcestore.com/"><img align="right" alt="sf-keychain-150x150-6434.jpg" src="https://user-images.githubusercontent.com/300046/43412209-ba197162-93e9-11e8-8028-193144aeb840.jpg"></a>
Miss being at a Salesforce event? Buy the branded clothing, office supplies, electronics, all 129 products for sale at <a target="_blank" href="https://salesforcestore.com/">https://salesforcestore.com</a>


<a name="Domains"></a>

## Domain Names 

Salesforce, as a company, owns these domain names:

   * <a target="_blank" href="https://www.salesforce.com/">Salesforce.com</a> [<a target="_blank" href="https://status.salesforce.com/">status</a>]
   * <a target="_blank" href="https://www.Force.com/"> Force.com</a>
    runs underneath SaaS, and is categorized as a PaaS (Platform as a Service) service
    which generalizes the coding in CRM for use in other user domains.
   * <a target="_blank" href="https://www.data.com/">Data.com</a> - B2B prospecting and data cleansing [<a target="_blank" href="https://www.data.com/trust/">status</a>]
   * <a target="_blank" href="https://www.desk.com/">Desk.com</a> - Customer support for small business [<a target="_blank" href="https://status.desk.com/">status</a>]
   * <a target="_blank" href="https://www.demandware.com/">Demandware.com</a> acquired in 2016 for manufacturing processes
   * <a target="_blank" href="http://www.heroku.com/">Heroku.com</a> [<a target="_blank" href="https://status.heroku.com/">status</a>]
    provides free hosting for low-volume apps written in open-source programming.
   * <a target="_blank" href="http://www.marketingcloud.com/">MarketingCloud.com</a> (formerly ExactTarget) [<a target="_blank" href="https://status.marketingcloud.com/">status</a>]
   * <a target="_blank" href="https://pardot.com">Pardot.com</a> [<a target="_blank" href="https://trust.pardot.com/">status</a>]
   * <a target="_blank" href="https://www.quip.com/">Quip.com</a> API enables automation of processes, integration, and <strong>collabortion</strong> with any app.

   * <a target="_blank" href="https://www.site.com/">Site.com</a>
   * <a target="_blank" href="https://salesforce.org/">Salesforce.org</a>, led by Suzanne DiBianca (@SuzanneDiBianca), Salesforce EVP of Corporate Relations and Chief Philanthropy Officer
   * <a target="_blank" href="https://salesforceiq.com">salesforceiq.com</a>
   PROTIP: Some product offerings have their own domain, but some don't. [<a target="_blank" href="https://status.salesforceiq.com/">status</a>]

Several domain names are no longer used and visits to it get rerouted to salesforce.com:

   * <a target="_blank" href="http://www.database.com/">Database.com</a> redirects to the Salesforce Platform page
   * <a target="_blank" href="http://www.developerforce.com/">Developerforce.com</a> redirects to 
   <a target="_blank" href="http://developer.salesforce.com">developer.salesforce.com</a>
   * Work.com was [retired July 10, 2015](https://success.salesforce.com/_ui/core/chatter/topics/TopicPage?id=0TO300000004GDW&ref=group_profile). It was a sales performance management solution for on-boarding new reps faster, for coaching reps to close more deals, and for rewarding successful behaviors. 
   * Salesforce1.com redirects to salesforce.com.

Additional businesses:  

   * <a href="https://wilsonmar.github.io/salesforce-einstein/">Einstein</a> (AI Vision, Predictive Analytics)
   * <a href="#IoT">Salesforce IoT</a>
   * Thunder
   * <strong>ExactTarget</strong> Fuel Marketing Cloud emails to target specific prospects (purchased by Salesforce)



## Topics in forums?

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

Personas?


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

   * Marketing User
   * Salesforce CRM Content User
   * Force.com Flow User
   * Apex (Salesforce1) Mobile User
   <br /><br />

"Salesforce1 Platform" is the brand name to emphasize that mobile capabilities are automatically provided when apps are created. "mySalesforce" refers specifically to mobile apps.
The brand name first appeared in 2014.

Products which have <a href="https://wilsonmar.github.io/salesfore-certifications/">"consultant" certification exams</a>:

   * <a target="_blank" href="http://certification.salesforce.com/salescloud">Sales Cloud</a> - Complete CRM customer service solutions
   * <a target="_blank" href="http://certification.salesforce.com/servicecloud">Service Cloud</a> - Sales force automation and CRM
   * <a target="_blank" href="http://certification.salesforce.com/marketingcloudconsultant">Marketing Cloud</a> - Build and manage 1:1 customer journeys. It has its own query language. No free accounts here.
   * <a target="_blank" href="http://certification.salesforce.com/communitycloud">Commmunity Cloud</a> - Connect customers, partners, and employees
   * <a target="_blank" href="http://certification.salesforce.com/fieldservicelightningconsultant">
   Field Service Lightning certification</a>
   * <a target="_blank" href="http://certification.salesforce.com/pardotconsultant">Pardot</a> - B2B marketing automation, which is part of the Sales Cloud as well.

   There are no certifications yet for these Sales Cloud products:

   * Analytic Cloud - Business intelligence and analytics software solutions   
   * Quip for sending texts
   * <a target="_blank" href="http://certification.salesforce.com/cpqspecialist">CPQ</a> (Configure, Price, and Quote) workflow

Customer industries:

   * Government Cloud
   * Health Cloud
   * <a target="_blank" href="http://www.financialforce.com/">FinancialForce.com</a>
    is also a SaaS providing software for managing financial information.
   * <a target="_blank" href="https://www.salesforce.com/solutions/philanthropy/corporate-social-responsibility/">Philanthropy Cloud</a>

Integration:

   * <a target="_blank" href="https://www.salesforce.com/products/integration-cloud/overview/">Integration Cloud</a> Integration Builder includes Mulesoft Anypoint Platform (bought by Salesforce in an exchange of stock May 2018)


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

Additionally:

*    Partner Developer
*    Partner Enterprise
*    Partner Group
*    Partner Professional



<a name="VersionChangeMgmt"></a>

## Salesforce (CRM) Versions

PROTIP: Three releases are planned per year, named by season (avoiding Fall):

| Force Version | API Version |
| ----:         | -----: |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/summer18/">Summer '18</a> | 41.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/spring18/">Spring '18</a> | 42.0 |
| <a target="_blank" href="http://www.salesforce.com/customer-resources/releases/winter18/">Winter '18</a> | 41.0 |
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

### Mobile Apps

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



Salesforce Enterprise customers can open up tunnels and share data with each other. Cool. It’s EDI for the masses.

<hr />

## Trailhead Playground

A Trailhead Playground is an org you can use to complete hands on challenges, and try out new features and customizations. It <strong>comes with set of Trailhead-specific data</strong> that you can use when completing challenges, and a pre-installed unmanaged package that we use to test your hands-on challenges. Trailhead Playgrounds have some limits, but for the most part they give you the same customization options as a production org. 

https://trailhead.salesforce.com/modules/trailhead_playground_management
Trailhead: Trailhead Playground Management 

PROTIP: Salesforce is great because of its free Trailhead tutorial that are thorough.

Trailhead tutorials are great because of their quizzes (challenges).

However, Trailhead tutorials are mainly text.

PROTIP: Use a program that generates text to speech.
Macs has it built-in, and just need to be enabled.
I like the proper British female voice, like Mary Poppins reading to me.
You can change the default option+` (back tick) activation key sequence.

If you have the money, several video tutorials are available.
But completing Salesforce trailheads are important.

Here's why...

## Your profile

Here are some sample profiles:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/me/laydurafe">
   https://trailhead.salesforce.com/en/me/laydurafe</a>
   * https://trailhead.salesforce.com/en/me/adammvp
   * https://trailhead.salesforce.com/en/me/00550000006gTqVAAU Naveen Poojary
   * <a target="_blank" href="https://trailhead.salesforce.com/en/me/wilsonmar/">
   https://trailhead.salesforce.com/en/me/wilsonmar</a>

Notice that your profile includes how many trailhead modules you complete,
the points earned, as well as certifications exams you've passed.

Those who have been designated as a "MVP" by Salesforce also get identified in their profile.

See my list of <a target="_blank" href="https://wilsonmar.github.io/salesforce-rock-stars.md">Salesforce Rock Stars</a>.


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


## Trailhead Basics modules

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/trailhead_basics">Module: Trailhead Basics</a>

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/starting_force_com">Module: Salesforce Platform Basics</a>

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/data_modeling">Module: Data Modeling</a>

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/visualforce_fundamentals">
   Module: Visualforce Basics</a>



## Tools

https://appexchange.salesforce.com/appxHome

* Security Zen at http://SecurityZen.net @SecurityZen_Net ‏is a new tool for managing #Salesforce Security.

* Ultra Field History Tracker @UFHTAuditTool ‏since June 2018 is an advanced SFDC field history tracking app supporting both standard and custom objects, unlimited fields, forever retention WITHOUT consuming data storage.

* <a target="_blank" href="https://www.linkedin.com/pulse/introducing-wsproxy-salesforce-marketing-cloud-eliot-harper/">WSProxy for Salesforce Marketing Cloud</a> July 17, 2018 by Eliot Harper offers scripting support through AMPscript and Server-Side JavaScript (or SSJS) scripting languages.

Eugene Oksman (@oksman (https://twitter.com/oksman) and Akhilesh Gupta (@akhileshgupta (https://twitter.com/akhileshgupta)) lead the Mobile SDK team at Salesforce.com, searching for the best ways to help developers create mobile apps for the enterprise.

* Salesforce data loading tools, web services, middleware (such as Dell Boomi, Informatica, etc.)

* APTTUS Contract Management Software (CLM)

## Privacy

https://trailhead.salesforce.com/modules/us-privacy-law-basics
Trailhead Module: US Privacy Law Basics [50:00]

https://trailhead.salesforce.com/modules/european-union-privacy-law-basics
Trailhead Module: European Union Privacy Law Basics [45:00]
Learn about the General Data Protection Regulation (GDPR) and how to comply.


## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
