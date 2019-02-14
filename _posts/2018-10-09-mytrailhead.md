---
layout: post
title: "Salesforce myTrailhead"
excerpt: "Create custom content on Salesforce's Trailhead website"
tags: [salesforce]
file: mytrailhead.md
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


Salesforce is enabling other companies to create Trailhead modules with their own branding rather than "Salesforce" at the upper left corner.

So I've looked through the various links and put my notes and links in this sequence.

The key areas of learning envisioned by Salesforce for myTrailhead is:

   * Onboarding new hires and culture/HR Awareness
   * Product learning and enablement
   * Sales Rep enablement and training (for Sales Cloud customers)
   * Service Agent enablement and training (for Service Cloud customers)
   * Leadership Development
   <br /><br />

   Training of a company's partners, communities, or customers are on the roadmap and not part of the initial release.

1. Visit the marketing page for "myTrailhead":

   <a target="_blank" href="https://trailhead.salesforce.com/en/mytrailhead">https://trailhead.salesforce.com/en/mytrailhead</a>

1. Click "LEARN MORE" near the "COMING SOON" cartoon.

   As of this writing (Feb 2019) it is only taking emails.

   myTrailhead is targeted to be generally available in FY20 - Q1 (February 1, 2019 - April 30, 2019)<a target="_blank" href="https://org62.my.salesforce.com/sfc/p/#000000000062/a/0M000000FbM7/I0neCMPp_puquj7_2nTanGaYNsWTERWd2WAoW7anc1M">*</a>
   , since Salesforce's fiscal year starts in February.


   Partners can sign up <a target="_blank" href="http://partners.salesforce.com/s/education/consultants/Consulting_Partner_Signup">here</a>.


   ### Features

2. Scroll down to note that you'll be able to use the various features of Trailhead:

   * Gamify learning with points and badges. 

   * Individuals can showcase both private and Salesforce public content taken for employees who *link* or *merge* their accounts.

   * Learners can add their own sequence of trailhead modules

   * Managers can track progress through trails in <a target="_blank" href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EFpAtUAL">Trail Tracker Salesforce app</a> from the App Exchange.

1. On a Chrome browser, see the 25-minute <strong>Demo webinar</strong> by <a target="_blank" href="http://www.salesforcehacker.com/">SalesforceHacker</a> Adam Torman (<a target="_blank" href="https://www.twitter.com/atorman">@atorman</a>) Sr. Director of Salesforce Trailhead Product Management and Vik Mediratta (<a target="_blank" href="https://www.twitter.com/vikmediratta">@vikmediratta</a>) Sr. Manager of Salesforce Trailhead Marketing.

   <a target="_blank" href="https://trailhead.salesforce.com/mytrailhead/webinar">https://trailhead.salesforce.com/mytrailhead/webinar</a>

   NOTE: There were 2.5 Trailblazers in 2019.


1. Watch presentations at Dreamforce '18:

   <a target="_blank" href="https://www.salesforce.com/video/3389689/">
   Trailhead Keynote: Reinvent Learning And Enablement</a> [45:06] by Sarah Franklin, EVP & GM of Trailhead &amp; Developer Relations

   * [1:18] By 2020, 33% of skills companies hire for will be new.
   <br /><br />

   <a target="_blank" href="https://www.salesforce.com/video/3623346/">
   Check out how Salesforce uses Trailhead - the First myTrailhead Case Study</a>

   <a target="_blank" href="https://www.salesforce.com/video/3621201/">
   Camping World's Road to Making Learning Fun with myTrailhead</a>

   <a target="_blank" href="https://www.salesforce.com/video/3621200/">
   Learn How Customers are Reinventing Learning and Enablement with myTrailhead</a>

   <a target="_blank" href="https://www.salesforce.com/video/3631338/">
   myTrailhead—Content Writing Tips, Tricks, and Best Practices</a>

   <a target="_blank" href="https://www.salesforce.com/video/3595683/">
   3 Steps for Driving myTrailhead Adoption in Your Organization</a>


1. Take a 3 hrs 39 min. trailhead module
   <a target="_blank" href="https://trailhead.salesforce.com/users/00550000006yDdKAAU/trailmixes/get-started-with-trailhead-companies">
   "Get your company started with Trailhead"</a> : Create a culture of learning at your company. Learn how to get started today with Trailhead.

1, <a target="_blank" href="https://trailhead.salesforce.com/users/00550000006yDdKAAU/trailmixes/get-ready-for-my-trailhead">"Get Ready for myTrailhead"</a>

1. See the FAQ at:

   <a target="_blank" href="https://quip.com/IthKAuemOn5O">https://quip.com/IthKAuemOn5O</a>


## Making Your Own - Deliverables

1. Define budget and rationale for costs.

   PROTIP: Companies have to pay to use myTrailhead with add-on to existing "standard" (not free Developer) Salesforce licenses (Sales Cloud, Service Cloud, or Platform) on Enterprise Edition or above. There is a single license type for both learners and publishers.	

1. Specify the need for translation.

   5 languages in addition to English (French, German, Japanese, Mexican Spanish, and Brazilian Portuguese) is supported at launch.

   PROTIP: Ask me about translation services and use of Artificial Intelligence.

1. Reserve the domain name to be used in the URL to access the learning.

1. Define dominant and auxilliary colors (in RGB) and corporate logo (SVG file) at the upper left.

   <pre>&LT;meta content='#ffffff' name='msapplication-TileColor'>
   &LT;<meta content='browserconfig.xml' name='msapplication-config'>
   &LT;meta content='#ffffff' name='theme-color'>
   </pre>

1. Craft icons:

   * &LT;link href='/apple-touch-icon-57x57.png' rel='apple-touch-icon' sizes='57x57'>
   * &LT;link href='/apple-touch-icon-60x60.png' rel='apple-touch-icon' sizes='60x60'>
   * &LT;link href='/apple-touch-icon-72x72.png' rel='apple-touch-icon' sizes='72x72'>
   * &LT;link href='/apple-touch-icon-76x76.png' rel='apple-touch-icon' sizes='76x76'>
   * &LT;link href='/apple-touch-icon-114x114.png' rel='apple-touch-icon' sizes='114x114'>
   * &LT;link href='/apple-touch-icon-120x120.png' rel='apple-touch-icon' sizes='120x120'>
   * &LT;link href='/apple-touch-icon-144x144.png' rel='apple-touch-icon' sizes='144x144'>
   * &LT;link href='/apple-touch-icon-152x152.png' rel='apple-touch-icon' sizes='152x152'>
   * &LT;link href='/apple-touch-icon-180x180.png' rel='apple-touch-icon' sizes='180x180'>
   * &LT;link href='/android-chrome-192x192.png' rel='icon' sizes='192x192' type='image/png'>
   * &LT;link href='/site.webmanifest' rel='manifest'>
   * &LT;link color='#ffffff' href='/safari-pinned-tab.svg' rel='mask-icon'>
   * &LT;link href='/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png'>
   * &LT;link href='/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png'>
   <br /><br />

1. Craft the banner page image.

1. Define what each persona (job category) needs to know.

1. Use the Salesforce *Trail Mixer* app to define the sequence (trail) learning path for each group of employees.

   PROTIP: Try to use the same set of <a target="_blank" href="https://wilsonmar.github.io/salesforce-personas">personas</a> that Salesforce uses.

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th> Category </th><th> Trailmix </th></td>
   <tr valign="top"><td>1. <a target="_blank" href="https://trailhead.salesforce.com/en/career-path/marketing">Salesforce Marketing Manager</a>
   		</td><td><a target="_blank" href="https://trailhead.salesforce.com/en/users/00550000006yDdKAAU/trailmixes/build-your-marketing-career-on-salesforce">Trailmix</a>
   		</td></tr>
   <tr valign="top"><td>2. <a target="_blank" href="https://trailhead.salesforce.com/en/career-path/sales">Salesforce Sales Manager</a>
   		</td><td><a target="_blank" href="https://trailhead.salesforce.com/en/users/00550000006yDdKAAU/trailmixes/build-your-sales-career-on-salesforce">Trailmix</a>
   		</td></tr>
   <tr valign="top"><td>3. <a target="_blank" href="https://trailhead.salesforce.com/en/career-path/business-analyst">Salesforce Business Analyst</a>
   		</td><td><a target="_blank" href="https://trailhead.salesforce.com/users/00550000006yDdKAAU/trailmixes/build-your-admin-career-on-salesforce">Trailmix</a>
   		</td></tr>
   <tr valign="top"><td>4. <a target="_blank" href="https://trailhead.salesforce.com/en/career-path/admin">Salesforce Administrator</a>
   		</td><td><a target="_blank" href="https://trailhead.salesforce.com/users/00550000006yDdKAAU/trailmixes/build-your-admin-career-on-salesforce">Trailmix</a>
   		</td></tr>
   <tr valign="top"><td>5. <a target="_blank" href="https://trailhead.salesforce.com/en/career-path/developer">Salesforce Developer</a>
   		</td><td><a target="_blank" href="https://trailhead.salesforce.com/users/00550000006yDdKAAU/trailmixes/build-your-developer-career-on-salesforce">Trailmix</a>
   		</td></tr>
   <tr valign="top"><td>6. <a target="_blank" href="https://trailhead.salesforce.com/en/career-path/technical-architect">Salesforce Technical Architect</a>
   		</td><td><a target="_blank" href="https://trailhead.salesforce.com/users/00550000006yDdKAAU/trailmixes/build-your-architect-career-on-salesforce">Trailmix</a>
   		</td></tr>
   </table>

   <hr />
   
   NOTE: myTrailhead publishers can leverage public Trailhead content as a starting point for own custom trails.

1. Store assets in GitHub or other version control system.

1. Read the Medium articles listed at <a target="_blank" href="https://medium.com/trailhead/write-the-trailhead-way/home">"Go Behind the Scenes with Trailhead’s Writers"</a>

1. Read the page <a target="_blank" href="https://partners.salesforce.com/s/education/general/myTrailhead">Partner myTrailhead</a>

1. Use <strong>Trail Maker</strong> to convert and format content for use on myTrailhead.

1. For each persona, define trails and modules (curriculum) titles

   PROTIP: Use a matrix to specify when different personas can take the same modules.

   Note that Salesforce itself has 119 trails at last count.

1. Tag each module's level from Beginner to Intermediate to Advanced.
1. Define module names and descriptions.
1. Design reward badge images.

1. Design "bite-sized" learning. What are the critical skills?

1. Embed videos within HTML iFrames by providing the link to videos in "free" YouTube or $150+ a month <a target="_blank" href="https://www.vidyard.com/">Vidyard.com</a>.

1. Use *Trail Checker* to build interactive quizzes to assess skills, so employees will get immediate feedback and points for getting the answers correct. 

   This makes learning "competency based".

1. Build peer assessments scorecards so that managers and peers can consistently rate and reward employees for a performance of skills.


## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
