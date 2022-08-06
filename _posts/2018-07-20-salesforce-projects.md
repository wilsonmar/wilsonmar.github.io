---
layout: post
date: "2018-07-20"
file: "salesforce-projects"
title: "Salesforce projects, superbadges, and sample apps"
excerpt: "Build a portfolio of apps you built yourself"
tags: [salesforce]
image:
  feature: https://user-images.githubusercontent.com/300046/43513032-f7cb0bd2-9539-11e8-88db-f3bff1cbfe17.jpg
  credit: Salesforce
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Increasingly, Salesforce job descriptions require job candidate to have completed <a target="_blank" href="https://trailhead.salesforce.com/en/projects">Salesforce Trailhead projects</a> and <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges">SuperBadges</a> to prove what they can do.

So I'm making vidoes on how to construct the projects, step-by-step.

## Superbadges

<a target="_blank" href="https://trailhead.salesforce.com/en/superbadges">https://trailhead.salesforce.com/en/superbadges</a> defines skill-based, domain-level "specialist" challenges that grants a graphic credential (to put on resume) to those completing modules of real-life business scenario for which you have to build a solution across entire feature areas. 

PROTIP: Don't make the mistake made by many Salesforce novices who avoid looking at Superbadges until "later".
Superbadges prescribe an order to taking the pre-requisite Trailhead Modules and projects.

PROTIP: I've arranged this list of superbadges in a rough sequence for taking them.

<a target="_blank" href="https://toptrailblazers.com/b/super_badges">https://toptrailblazers.com/b/super_badges</a> lists the number of people who have completed each (around 2-300 at last count).

1. The <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_security">Security Specialist<img align="right" alt="sf-superbadge-security-specialist.png" src="https://user-images.githubusercontent.com/300046/47075401-bd4e9980-d1b9-11e8-99c3-6cf5ae0b2d6f.png"></a> [4 - 6 hours] works with standard objects. Its pre-requisite Modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/data_security">Data Security</a> [1 hr 50 mins] 
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/identity_basics">Identity Basics</a> [45 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/identity_login">User Authentication</a> [1 hr]
   <br /><br />   

   PROTIP: Good to do this earlier because it impacts and controls everything else. 

1. <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_business_specialist">Business Administration Specialist<img align="right" alt="sf-superbadge-business-administration-specialist.png" src="https://user-images.githubusercontent.com/300046/47076285-9ee99d80-d1bb-11e8-8af8-985555738959.png"></a> [4 - 6 hrs]
It makes use of the <a target="_blank" href="https://na31.lightning.force.com/packagingSetupUI/ipLanding.app?apvId=04tf4000000x3Yd">BSX Unmanaged Package</a> by CPBHE. Its pre-requisite Modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lex_implementation_reports_dashboards">Reports & Dashboards for Lightning Experience</a> [1 hr 55 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/data_security">Data Security</a> [1 hr 50 mins] (repeat)
   * <a target="_blank" href="https://trailhead.salesforce.com/en/projects/customize-an-org-to-support-a-new-business-unit">Customize an Org to Support a New Business Unit</a> [1 hr 10 mins]
   * Project: <a target="_blank" href="https://trailhead.salesforce.com/en/projects/create-reports-and-dashboards-for-sales-and-marketing-managers">Create Reports and Dashboards for Sales and Marketing Managers</a> [1 hr 30 mins] no coding.
   <br /><br />   

   PROTIP: Good to do this earlier because it provides the "why" of Salesforce adoption payoffs. 

1. The <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_process_automation">Process Automation Specialist<img align="right" alt="sf-superbadge-process-automation-specialist.png" src="https://user-images.githubusercontent.com/300046/47075856-a3fa1d00-d1ba-11e8-9d41-c142aee814c4.png"></a> [6 - 8 hrs] Its pre-requisite Modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/point_click_business_logic">Formulas & Validations</a> [45 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/business_process_automation">Lightning Flow</a>
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/admin_intro_opptys_leads">Leads & Opportunities for Classic</a>
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/workflow_migration">Workflow Rule Migration</a>
   <br /><br />   

   <hr />

1. <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_apex">Apex Specialist<img align="right" alt="sf-superbadge-apex-specialist.png" src="https://user-images.githubusercontent.com/300046/47061860-a2b3fa80-d190-11e8-9f6c-201539e71d0b.png"></a> [8 - 12 hrs] Its pre-requisite Modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/apex_triggers">Apex Triggers</a> [60 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/apex_testing">Apex Testing</a> [45 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/asynchronous_apex">Asynchronous Apex Testing</a> [90 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/apex_integration_services">Apex Integration Services</a> [120 mins]
   <br /><br />   

1. <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_lightning_platform_app_builder">App Customization Specialist<img align="right" alt="sf-superbadge-App-Customization-Specialist.png" src="https://user-images.githubusercontent.com/300046/47062551-f542e600-d193-11e8-8f4d-f1410f107edd.png"></a> [4 - 6 hrs] Its pre-requisite Modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/business_process_automation">Lightning Flow</a> [2 hrs 5 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/point_click_business_logic">Formulas & Validations</a> [45 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lightning_app_builder">Lightning App Builder</a> [1 hr 35 mins]
   * Project: <a href="#BattleStation">Build a Battle Station App</a> [2 hrs 30 mins] 
   <br /><br />

   <hr />

1. <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_lex">Lightning Experience Specialist<img align="right" alt="sf-superbadge-lightning-experience-specialist.png" src="https://user-images.githubusercontent.com/300046/47075993-ff2c0f80-d1ba-11e8-90f9-fdc41324f06f.png"></a> [4 - 6 hrs] Its pre-requisite Modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lex_customization">Lightning Experience Customization</a> [2 hr 50 mins] 
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/business_process_automation">Lightning Flow</a> [4 hrs]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lightning_app_builder">Lightning App Builder</a> [1 hr 35 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lex_implementation_reports_dashboards">Reports & Dashboards for Lightning Experience</a> [1 hr 55 mins]
   <br /><br />

1. <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_lcf">Lightning Component Framework Specialist<img align="right" alt="sf-superbadge-lightning-component-framework-specialist.png" src="https://user-images.githubusercontent.com/300046/47076504-1a4b4f00-d1bc-11e8-9ad0-1b48412fa29d.png"></a> [10 - 12 hrs]] Its pre-requisite Modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lex_dev_overview">Lightning Experience Development</a> [1 hr 20 mins] 
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lex_dev_lc_basics">Lightning Component Basics</a> [4 hrs]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lightning_data_service">Lightning Data Service Basics</a> [1 hr 40 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lightning_design_system">Lightning Design System</a> [2 hrs 15 mins]
   <br /><br />

   PROTIP: This uses the Salesforce Lightning Design System (SLDS) markup.

1. <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_lex_rollout">Lightning Experience Rollout Specialist<img align="right" alt="sf-superbadge-lightning-experience-rollout-specialist.png" src="https://user-images.githubusercontent.com/300046/47076111-369abc00-d1bb-11e8-9bb4-ac7eacf90a7e.png"></a> [9 - 12 hrs] Its pre-requisite Modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lex_migration_rollout">Lightning Experience Rollout</a> [1 hr] 
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lightning_app_builder">Lightning App Builder</a> [1 hr 35 mins] (repeat)
   * Project: <a target="_blank" href="https://trailhead.salesforce.com/en/projects/suggestion_box">Build a Suggestion Box App</a> [1 hr 55 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lex_migration_whatsnew">Lightning Experience Features</a> [1 hr 40 mins]
   <br /><br />

1. <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_aap">Advanced Apex Specialist<img align="right" alt="sf-superbadge-advanced-apex-specialist.png" src="https://user-images.githubusercontent.com/300046/47061924-f3c3ee80-d190-11e8-984f-f3291a952108.png"></a> [12 - 16 hrs] Its pre-requisite Modules:

   * Apex Specialist Superbadge
   * Data Integration Specialist Superbadge
   * Lightning Component Framework Specialist Superbadge
   * PROJECT: <a target="_blank" href="https://trailhead.salesforce.com/en/projects/salesforce_developer_workshop">Build a Conference Management App</a> [3 hrs 40 mins]
   <br /><br />   


   <hr />
<!--img align="right" alt="sf-superbadge-reports-dashboards-specialist.png" src="https://user-images.githubusercontent.com/300046/47075633-2fbf7980-d1ba-11e8-8fd6-9ec5eac2d011.png"-->
1. <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge-lex-rd">Lightning Experience Reports & Dashboards Specialist<img align="right" alt="sf-superbadge-lightning-experience-reports-dashboards-specialist.png" src="https://user-images.githubusercontent.com/300046/47076568-42d34900-d1bc-11e8-85c2-f6e93c1bfad0.png"></a> [4 - 6 hrs]
   takes the place of the "Reports & Dashboards Specialist" superbadge retired in 2017. Its pre-requisite Modules:
   
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lex_implementation_reports_dashboards">Reports & Dashboards for Lightning Experience</a> [1 hr 55 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/projects/create-reports-and-dashboards-for-sales-and-marketing-managers">Create Reports and Dashboards for Sales and Marketing Managers</a> [1 hr 30 mins]
   * Project: <a target="_blank" href="https://trailhead.salesforce.com/en/projects/quickstart-app-builder">Quick Start: Lightning App Builder</a> [20 mins] no coding.
   <br /><br />   

1. <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_analytics_integration_specialist">Einstein Analytics Data Prepartion Specialist<img align="right" alt="sf-superbadge-einstein-analytics-data-preparation-specialist.png" src="https://user-images.githubusercontent.com/300046/47076431-f12abe80-d1bb-11e8-905e-7baef5ada7a7.png">Analytics Administration Basics</a> [1 hr 35 mins] Its pre-requisite Modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/wave_enable_setup">Apex Integration Analytics Administration Basics</a> [[1 hr 35 mins] ]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/wave_enable_data_integration_basics">Analytics Data Integration Basics</a> [1 hr 20 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/wave_desktop_exploration">Desktop Analytics Exploration</a> [2 hrs]
   <br /><br />   

   (Follow <a target="_blank" href="https://twitter.com/SForceAnalytics">@SForceAnalytics</a>)

1. <a target="_blank" href="https://trailhead.salesforce.com/en/superbadges/superbadge_integration">Data Integration Specialist<img align="right" alt="sf-superbadge-data-integration-specialist.png" src="https://user-images.githubusercontent.com/300046/47076358-c6406a80-d1bb-11e8-899e-a15928a23842.png"></a> [8 - 15 hrs] Its pre-requisite Modules:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/apex_integration_services">Apex Integration Services</a> [2 hrs]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/asynchronous_apex">Asynchronous Apex</a> [1 hr 30 mins]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/api_basics">API Basics</a> [2 hrs]
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/business_process_automation">Lightning Flow</a> [2 hrs 5 mins]
   <br /><br />   


## Projects

   At last count, there are 81 <a target="_blank" href="https://trailhead.salesforce.com/en/projects">Salesforce Trailhead projects</a> for developers.
   
   * 43 are for Admins.
   * 34 are intermediate projects.
   * 13 are advanced projects.

PROTIP: Many of the projects introduce techniques for connecting Salesforce with external systems.

   * Heroku
   * IoT
   * Apple Watch
   * <a target="_blank" href="https://www.youtube.com/watch?v=J6TvtIqgbjA">Docker</a>

<a name="BattleStation"></a>

### Build a Battlestation

<!-- <img align="right" alt="battlestation-badge-200x200.png" width="200" height=200" src="https://user-images.githubusercontent.com/300046/65752446-73409880-e12a-11e9-9412-f5744324119d.png">
-->

Trailhead workshop <a target="_blank" href="https://trailhead.salesforce.com/en/projects/workshop-battle-station">
Build a Battle Station App</a> [2 hrs 30 mins] 
is used during one-day introductory "boot camps" for adults and children.

NOTE: Instead of one long page, the UI has since changed to a menu to <strong>text and screen shots</strong>:

   1. <a target="_blank" href="https://trailhead.salesforce.com/en/content/learn/projects/workshop-battle-station/battle-station-1">Create the Battle Station App</a>
   2. <a target="_blank" href="https://trailhead.salesforce.com/en/content/learn/projects/workshop-battle-station/battle-station-2">Build the Object Model</a>
   3.  <a target="_blank" href="https://trailhead.salesforce.com/en/content/learn/projects/workshop-battle-station/battle-station-3">Modify the User Experience</a>
   4.  <a target="_blank" href="https://trailhead.salesforce.com/en/content/learn/projects/workshop-battle-station/battle-station-4">Add Business Logic</a>
   5.  <a target="_blank" href="https://trailhead.salesforce.com/en/content/learn/projects/workshop-battle-station/battle-station-5">Create Reports and Dashboards</a>
   6.  <a target="_blank" href="https://trailhead.salesforce.com/en/content/learn/projects/workshop-battle-station/battle-station-6">Make the App Mobile</a>
   <br /><br />

These blogs provide an overview of how to complete the project:

   * <a target="_blank" href="https://blog.jeffdouglas.com/2015/12/21/how-we-built-the-build-a-battle-station-project/">How we built the "Build a Battle Station App"</a> by Jeff Douglas — 21 Dec 2015 

   * VIDEO: <a target="_blank" href="https://www.youtube.com/watch?v=dQKvqmXqZrg">How to Nov 10, 2017</a> [1:48] using <a target="_blank" href="https://guideme.io">GuideMe.io</a> EdCast

   * <a target="_blank" href="https://twitter.com/search?q=trailhead%20battle%20station&src=typd">Tweets about "trailhead battle station" app


This series of videos (all dated May 17, 2018)) has no sound, so it may seem like you're watching someone seemingly clicking around randomly, but it's quite comporehensive:

1. <a target="_blank" href="https://www.youtube.com/watch?v=sIU0zKNYPyE">7:04</a> scrolls through the description of the project at <a target="_blank" href="https://trailhead.salesforce.com/en/projects/workshop-battle-station">https://trailhead.salesforce.com/en/projects/workshop-battle-station</a>.
   In the video it's one long page, but it's now a menu.

   1. Create a Trailhead account if you haven't already.
   
   1. Click the Gear icon and select Setup
   2. Click Object Manager tab next to the Home tab.
   3. Click on Create drop-down at the right side and then select Custom Object.
   4. Label "Battle Station".
   5. Plural Label "Battle Stations".
   6. Check the Allow Reports checkbox 
   7. Check the Allow Search checkbox.
   8. Click on Save
   9. Now create a custom tab: Click the Home tab 
   10. Enter Tabs in Quick Find and select Tabs.
   11. Under Custom Object Tabs, click New.
   12. For Object, select Battle Station.
   13. For Tab Style, select any icon.
   14. Click on Next
   15. Leave all defaults as is. Click Next
   16. Hit Save.
   17. Now we need to enable Feed Tracking for the Battle Station object. Enter Feed in the Quick Find and select Feed Tracking  
   18. Click on Battle Station, and check the Enable Feed Tracking checkbox.
   19.  Check the Battle Station Name and Owner checkboxes. Click Save.
   20. Your changes have been saved.
   <br /><br />

2. <a target="_blank" href="https://www.youtube.com/watch?v=JLu0nNXZFVE">17:14 Build the Object Model</a>

3. <a target="_blank" href="https://www.youtube.com/watch?v=QUIs-T32Op8">21:05 Modify the Experience</a>

4. <a target="_blank" href="https://www.youtube.com/watch?v=n7_2XUFKvCY">11:52 Add Business Logic</a>

5. <a target="_blank" href="https://www.youtube.com/watch?v=Fwwqe48dhgU">28:46 Create the Battle Station App</a>

5. <a target="_blank" href="https://www.youtube.com/watch?v=sRKxydxRkDg">3:29 Make the App Mobile</a>


## Trailhead apps

Salesforce people have created (and maintained) several reference apps that demonstrate best-practices when building with Salesforce.

PROTIP: Click the app name to reach directly its GitHub repository under <a target="_blank" href="https://github.com/trailheadapps">https://github.com/trailheadapps</a>

* <a target="_blank" href="https://github.com/trailheadapps/lwc-recipes">Recipies</a> was made with Lightning Web Components.

* <a target="_blank" href="https://github.com/trailheadapps/ebikes-lwc">EBikes</a> was made with Lightning Web Components.

* <a target="_blank" href="https://github.com/dreamhouseapp/dreamhouse-sfdx">DreamHouse</a> was made to be installed using <a target="_blank" href="https://wilsonmar.github.io/salesforce-dx">Salesforce DX</a>

* <a target="_blank" href="https://github.com/trailheadapps/northern-trail-outfitters">Northern Trail Outfitters</a> (NTO) defines merchandise mix for retailers. It uses Lightning components.

* <a target="_blank" href="https://github.com/trailheadapps/purealoe">Pure Aloe</a> is for a non-profit agriculture, and retail app built with Lightning components, Lightning Flow and platform events.

* <a target="_blank" href="https://github.com/trailheadapps/dreaminvest">DreamInvest</a> is a financial services app to find mutual funds based on several criteria (return, sector, etc). This app demonstrates how to build configurable Lightning Components Salesforce admins can use to create sophisticated apps in App Builder. It features Performance Best Practices such a Data Caching.

* <a target="_blank" href="https://github.com/trailheadapps/easy-spaces">Easy Spaces</a> is an event management app built with dynamic flows, Flow Actions, and object-agnostic Lightning components. This app also demonstrates how to structure your source code for modular distribution using unlocked packages.

<a target="_blank" href="https://trailhead.salesforce.com/users/00550000006yDdKAAU/trailmixes/sample-gallery-trailmix">
List of Trailmix featuring the apps listed above.</a>

Additionally, repos not listed in the <a target="_blank" href="https://trailhead.salesforce.com/sample-gallery">sample-gallery web page</a>:

* <a target="_blank" href="https://github.com/trailheadapps/purealoe-distributor">Pure Aloe Distributor</a> is a companion to the Pure Aloe app, to explore how to integrate decoupled applications with Salesforce via Platform Events written in NodeJs.

* <a target="_blank" href="https://github.com/trailheadapps/einstein-twitter-analyzer">Einstein Twitter Analyzer</a> 

* <a target="_blank" href="https://github.com/trailheadapps/northern-trail-manufacturing">Northern Trail Manufacturing</a> 


<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
