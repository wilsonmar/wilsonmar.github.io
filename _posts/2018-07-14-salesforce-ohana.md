---
layout: post
title: "Salesforce Ohana"
excerpt: "Glossary, Competitors, Jobs, Social media, Communities, Events, Dreamforce, Store"
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

"Ohana" is the Hawaiian word for "family". Salesforces uses the hash tag \#SalesforceOhana 
to describe the inclusive culture it aims to foster. Thus the Hawaiian music and decorations.

Here are steps and information for those new to Salesforce to get "plugged in" quickly yet fully.

<a name="Glossary"></a>

## Glossary of Terms and Acronyms

* <a target="_blank" href="https://help.salesforce.com/apex/HTViewHelpDoc?id=glossary.htm">
   Salesforce's Glossary</a> of terms.

   "SFDC" is an acronym for "Salesforce dot com".

* <a target="_blank" href="https://quizlet.com/_52b1qw/">My quizlet on Salesforce Terms</a>

   Please let me know if you see any terms missing.

* <a target="_blank" href="https://quizlet.com/216046018/salesforce-admin-flash-cards/">Quizlet on Saleforce Admin quiz</a> 


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

Marc Benioff has this (from Gartner) on his Twitter header picture:

   ![salesforce-market-share-1500x500](https://user-images.githubusercontent.com/300046/43361208-59796650-9286-11e8-919d-bdfd0b5937b7.jpg)

* Gartner says "Salesforce leads market share with 16% in 2013 vs. SAP with 13%, and Oracle with 10%."

   Salesforce/Force.com seem to be more attractive to <strong>mid-market</strong> customers than SAP and Oracle. And smaller companies tend to more flexible about all work being done on-site.

The competitors are:

* SAP
* Oracle
* Microsoft Dynamics 365

* SOHO
* Hubspot
* SugarCRM
* Highrise

## Locations

Salesforce buildt the tallest building in San Francisco.

![sf-tallest-648x558-65050](https://user-images.githubusercontent.com/300046/43551978-2ffdeb20-95a6-11e8-92c3-c919dee9811b.jpg)

It's a few feet taller than the Eiffel Tower in Paris.

It's built on top of former landfill in an earthquake-prone area.
But it's certified LEED Platinum -- the highest rating in the US.

It's part of a whole downtown re-development that includes the Salesforce Transit Center under a 5 acre park.


<a name="LaborDemand"></a>

## Labor Demand

Salesforce has not been profitable, but its market value (stock price x shares) is growing.
The company has seen a consistent growth rate of 35% year-over-year, which is unrivaled in the stock market:

<a target="_blank" href="https://www.nasdaq.com/symbol/crm/stock-chart?intraday=off&timeframe=10y&charttype=mountain&splits=off&earnings=off&movingaverage=None&lowerstudy=volume&comparison=off&index=&drilldown=off&sDefault=true">
<img alt="crm_stock_to_20150718.png" src="https://cloud.githubusercontent.com/assets/300046/8766609/e7cf7120-2dfc-11e5-981a-433ceba95b37.png"></a>

   * Microsoft's $50 billion offer was once rejected.
   * The prediction was for a buyout/merger with Oracle, where Salesforce CEO Benoiff had worked.
   <br /><br />

* <a target="_blank" href="https://trailhead.salesforce.com/trail/innovation_salesforce_way">Trail: Innovation the Salesforce Way</a> [4 hrs 20 mins]

Salesforce, as a company, pioneered the 1:1:1 model, donating one percent of its time, equity, and product to non-profit organizations via the <a target="_blank" href="http://www.salesforcefoundation.org/">salesforcefoundation.org</a>

   * <a target="_blank" href="https://www.glassdoor.com/Reviews/Salesforce-Reviews-E11159.htm">Employee reviews on Glassdoor</a> mention concern with work-life balance.


## Personas

<a target="_blank" href="https://trailhead.salesforce.com/modules/ux-personas-for-salesforce">Trailhead module: UX Personas for Salesforce</a> [1 hr 10 min] 

A "persona" represents a group of users clustered based on shared behavior, motivations, goals, pain points, or other characteristics. A persona is an archetype that represents a group of users clustered based on shared behaviors, motivations, goals, pain points, or other characteristics. During the design and development process, persona categories stand in for key user groups when making decisions about your product, by representing major differences between groups. Personas can be useful for building empathy and making the users seem real. Effective personas are created based on <a target="_blank" href="https://trailhead.salesforce.com/module/ux-research-basics"> research</a> and <a target="_blank" href="https://developer.salesforce.com/files/ux-personas-ServiceCloudPersonaSurvey.pdf">surveys (pdf)</a> to ensure that they reflect the real people who use your product.<a target="_blank" href="https://www.amazon.com/Essential-Persona-Lifecycle-Building-Personas/dp/0123814189/">*</a>  
Personas should be based on general work tasks users perform in their roles, rather than just what they do in Salesforce. 

<a target="_blank" href="https://developer.salesforce.com/files/ux-personas-sales-personas.pdf">PDF: Sales Persona</a>:

   * Data Expert
   * Deal Closer
   * Pipeline Builder
   * Sales Leader
   * Trusted Advisor
   <br /><br />

<a target="_blank" href="https://developer.salesforce.com/files/ux-personas-service-personas.pdf">PDF: Service Persona</a>

   * Service Admin
   * Case Solver
   * Expert Agent
   * Team Leader
   * Trusted Advisor
   <br /><br />

<a target="_blank" href="https://developer.salesforce.com/files/marketing.pdf">PDF: Marketing Persona</a>

   * Designer-Developer
   * IT Services
   * Marketing Manager
   * Marketing Specialist
   * Strategic Leader
   <br /><br />

<a target="_blank" href="https://developer.salesforce.com/files/community-persona-cards.pdf">PDF: Community Persona</a>

   * Community End User
   * Community Manager
   * Community Admin
   * Community Builder
   <br /><br />


### Development Lifecycle Roles

In a smaller company, one person can wear many hats, but in a larger company, specialized roles define what each person is responsible for. Logical roles include the following:

* <strong>Release manager</strong> manages the release schedule and coordinates releases with the business. The release manager could be in charge of pulling changes from version control.
* <strong>Product manager</strong> provides the business requirements of apps and features, and works with the development team to implement those requirements. The product manager also performs user acceptance testing to ensure that requirements have been implemented.
* <strong>Software developer</strong> develops new functionality in sandbox, including both declarative point-and-click development and code.
* <strong>Quality engineer</strong> tests new functionality in sandbox.
* <strong>Administrator</strong> performs administrative tasks in the production org, and tracks all changes made in production.
* <strong>Trainer</strong> conducts training of company employees for new applications and features.


## Jobs

https://medium.com/trailhead/huge-demand-for-salesforce-talent-3bb30c597b39

DISCUSSIONS: <a target="_blank" href="https://developer.salesforce.com/forums/#!/feedtype=RECENT&dc=Jobs_Board&criteria=ALLQUESTIONS">Jobs Board</a>

Mason Frank International, a recruiter, publishes a report each year about the Salesforce ecosystem,
providing detailed breakdowns of salaries by job role, location, and so much more.
<a target="_blank" href="
https://www.masonfrank.com/salesforce-salary-survey/">
https://www.masonfrank.com/salesforce-salary-survey/</a>

   * <a target="_blank" href="https://www.masonfrank.com/search?query=remote&location%5B%5D=3871">Recruiting agency Mason Frank's Salesforce jobs page</a>

   * <a target="_blank" href="http://careers.force.com/jobs/">http://careers.force.com/jobs</a> lists jobs inside Salesforce. Applicants use workday.com.

   * <a target="_blank" href="https://www.indeed.com/jobs?q=Salesforce&l=remote">Indeed</a> aggregates jobs on several websites

   * <a target="_blank" href="https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=true&clickSource=searchBtn&typedKeyword=sales&sc.keyword=Salesforce&locT=&locId=&jobType=">Salesforce jobs at Glassdoor</a>

   * <a target="_blank" href="https://www.linkedin.com/company/salesforce/jobs/">LinkedIn jobs</a>

   * <a target="_blank" href="https://stackoverflow.com/jobs?sort=i&q=salesforce">Stackoverflow Jobs</a>

   * Consulting Partners and ISVs (Independent Software Vendors)


<a name="Social"></a>

## Stay Informed on Social Media

### Skills in LinkedIn profile

1. Click the  Me icon at the top of your LinkedIn homepage.
2. Click "View profile".
3. Scroll to the "Skills & Endorsements" section and click "Add a new skill".
4. In the pop-up window, if it says "You’ve reached the limit of 50 skills", X back and remove some skills.
5. Type the name of a skill and select it from the dropdown list that appears or click "Add" immediately.

   You can also add skills from the Suggested skills based off your profile options that are provided.


<a name="Chatter"></a>

### Chatter

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/chatter">
   Trailhead Module: Chatter Administration for Salesforce Classic</a>


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

Salesforce.org for non-profits:

   * http://www.salesforce.org/contact-us/ to join mailing list
   * <a target="_blank" href="https://twitter.com/SalesforceOrg">@SalesforceOrg</a>
   * https://www.instagram.com/SalesforceOrg/
   * <a target="_blank" href="https://www.youtube.com/watch?v=iBrS2LrJ-vo&list=PLU8xqF8ZASbXWAHIF0SB1P9_3G4vvRMXI">How-to series on YouTube</a>


## Communities

* <a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A000000HTp1">
   Salesforce DX</a> (Developer eXchange)

* <a target="_blank" href="https://salesforce.stackexchange.com/">https://salesforce.stackexchange.com</a>

* Follow <a target="_blank" href="https://www.linkedin.com/showcase/salesforce-developers/">Salesforce Developers on Linkedin</a>

### Trailhead communities

<a target="_blank" href="https://success.salesforce.com/0F9300000001omnCAA">Trailblazer Community Corner</a>

<a target="_blank" href="https://success.salesforce.com/featuredGroupDetail?id=a1z30000006IDYiAAO">Sales Cloud</a>

<a target="_blank" href="https://success.salesforce.com/featuredGroupDetail?id=a1z30000006IDYBAA4">Sales Cloud Best Practices</a>

<a target="_blank" href="https://success.salesforce.com/featuredGroupDetail?id=a1z30000006IDYkAAO">Marketing Cloud</a>

<a target="_blank" href="https://success.salesforce.com/featuredGroupDetail?id=a1z30000006IDZGAA4">Community Cloud</a>

<a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A0000004gQJSAY">Financial Services Cloud Community</a>

<a target="_blank" href="https://success.salesforce.com/featuredGroupDetail?id=a1z3A000002vaXWQAY">
Service Cloud</a>

<a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F9300000001ocxCAA">Nonprofits using Salesforce</a>

<a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F9300000001qUiCAI">Pardot B2B Marketing Automation</a>

<a target="_blank" href="https://success.salesforce.com/featuredGroupDetail?id=a1z30000006IDYqAAO">
Einstein Analytics</a>

<a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F930000000PT4SCAW">Heroku Enthusiasts</a>

<a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A000000DGi3SAG">Commerce Cloud (Demandware)</a>

<a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A000000Lf1ZSAS">Salefsforce Health Cloud</a>

<a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A000000LgciSAC">Quip</a>


## Events (Meet people)

<a target="_blank" href="https://developer.salesforce.com/calendar">https://developer.salesforce.com/calendar</a>
is where you find and register for events.

TrailheadDX (Developer eXperience)

   * #TDX18 

World Tour

  * There is a mobile app (by Debra Nacimento) for the Salesforce World Tour.

<a name="Lightning"></a>
Lightning Now Tour to a city near you in 2018

   * <a target="_blank" href="bit.ly/lightning-now-sales-admin">Lightning Now Tour for Sales Admins</a>

   * <a target="_blank" href="bit.ly/lightning-now-developer">Lightning Now Tour for Developers</a>
   includes a <a target="_blank" href="https://developerforce.github.io/LightningNowWorkshop/">Workshop Lab</a> from https://developerforce.github.io/LightningNowWorkshop/Exercise_d1.html

Local Meetups 

   * <a target="_blank" href="http://salesforce.meetup.com/">salesforce.meetup.com</a>
   lists meetups secheduled at meetups.com (at $200 per year).

   * https://success.salesforce.com/userGroups  

   * https://developer.salesforce.com/dugs

   * bit.ly/TwitchSF by the San Francisco user group

<a target="_blank" href="http://www.salesforce.org/nonprofit/nonprofit-success-pack/">NPSP (Non-Profit Success Pack) website</a> and <a target="_blank" href="http://www.npspday.org/">conferences around the country</a>:

   * https://seattlenpsf.wordpress.com/ is the Seattle Non-profit (ask to be invited to view)


### Dreamforce

<a target="_blank" href="http://www.salesforce.com/dreamforce/">Dreamforce</a> is Salesforce's annual conference, usually <strong>4 days in September</strong>.
   It drew 170,000 to San Francisco in 2017 (the largest software conference in the world), despite its $2,199 per person cost (before travel and hotels).

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

Take <a target="_blank" href="https://trailhead.salesforce.com/modules/get_ready_for_dreamforce_prepare_most_exciting_event_year">Trailhead Module: Dreamforce Ready</a> [30 mins] to learn why Dreamforce is the must-attend event of the year and develop your game plan.


### Store

<a target="_blank" href="https://salesforcestore.com/"><img align="right" alt="sf-keychain-150x150-6434.jpg" src="https://user-images.githubusercontent.com/300046/43412209-ba197162-93e9-11e8-8028-193144aeb840.jpg"></a>
Miss being at a Salesforce event? Buy the branded clothing, office supplies, electronics, all 129 products for sale at <a target="_blank" href="https://salesforcestore.com/">https://salesforcestore.com</a>

## Innovation

5 Stages:

1. Define an innovation project and the key stakeholders you’ll involve.
2. Discover the needs and opportunities of your customer.
3. Dare to imagine a bold solution to fulfill your customers’ needs.
4. Do the work to rapidly demonstrate the validity of your concept and how it will work.
5. Drive momentum to ensure adoption and growth of your vision.


<a name="WorkWithMe"></a>

##  Work with me

I am interested into automatic generation of test code, Einstein Machine Learning AI, IoT.


## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
