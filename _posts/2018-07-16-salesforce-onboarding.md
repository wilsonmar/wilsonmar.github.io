---
layout: post
title: "Salesforce onboarding"
excerpt: "Get up and running on Trailhead and Developer tools"
tags: [salesforce]
date: "2018-07-18"
file: "salesforce-onboarding"
image:
# feature: sf-ohana-1900x500-178173.jpg
  feature: https://user-images.githubusercontent.com/300046/43407734-bd6303fe-93dc-11e8-87df-302ddbc274ff.jpg
  credit: Salesforce
  creditlink: https://trailhead.salesforce.com/trailblazers
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here are steps and information for those new to Salesforce to get started working on the system.
This also aims to provide succinct lists for experienced Salesforce readers.

"PROTIP:" in this document marks the unique contribution of this website, 
providing you advice available nowhere else.

<a name="Browsers"></a>

## Browsers using SaaS

Salesforce is one of first companies to provide software completely over the public internet, with users using internet browsers such as Internet Explorer, Chrome, Firefox. 

Salesforce offers software as a web service, which many refers to using the acronym "SaaS".
BTW, <a target="_blank" href="http://montclare.com/saas-250/">Montclare.com</a> named Salesforce the #1 most "<a target="_blank" href="http://montclare.com/methodology/">successful</a>" SaaS company in the world.

PROTIP: While there is no installing custom software (from Salesforce) on each user's machine, users can use whatever internet browser is installed with their machine. That would be Internet Explorer that comes with Windows and Safari on Macs. But in practice many users install Firefox and Chrome browsers.

DEVDOC: In [Supported Browsers](https://developer.salesforce.com/docs/atlas.en-us.salesforce_supported_browsers_cheatsheet.meta/salesforce_supported_browsers_cheatsheet/)
some Internet Explorer support is limited. Firefox needs to be configured.

https://resources.docs.salesforce.com/214/latest/en-us/sfdc/pdf/salesforce_technical_requirements.pdf
Requirements


## Free Trailhead training

Most other software companies try to make the most money they can by putting their training material behind a paywall. So learning SAP and Oracle takes many thousands of dollars. This limits how many people can effectively learn their product.

Not so with Salesforce. Salesforce as a company offers classes addressing each job role and certification through its <a target="_blank" href="http://www.salesforce.com/services-training/training_certification/training.jsp"><strong>Salesforce University</strong> (<a target="_blank" href="https://twitter.com/SalesforceU">@SalesforceU</a>). For example, $3,750 for the 5-day course.
PROTIP: Spending several days strait sitting in a class may seem like "drinking from a firehose".

<a href="#Trailhead">Salesforce Trailhead</a> on-line training is both in-depth and offered free, with <strong>unlimited time on servers</strong>. This has enabled Salesforce users to be among the best trained of any software ecosystem.

## Different ways to get org instances

Partners of Salesforce can use <strong>Trialforce</strong> to provision and manage free trial and demo Salesforce organizations holding apps and components.
Trialforce enables the configuration of trials to specific specifications with relevant sample data, and even customize the look and feel to reflect company branding.

<a target="_blank" href="https://partners.salesforce.com/s/education/general/Environment_Hub">NOTE</a>:
Salesforce partners manage multiple member orgs using the Environment Hub.

See https://partners.salesforce.com/s/education/general/Partner_Orgs

ISVs (Independent Solution Vendors) use the ISVForce:
See https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/packaging_intro.htm

### Get Trailhead Training Account

1. Obtain a Trailhead account for FREE tutorials with unlimited server time:

   <a target="_blank" href="https://developer.salesforce.com/trailhead">
   https://developer.salesforce.com/trailhead</a> 

   <img align="right" alt="sf-trailhead-logo-100x87.png" src="https://user-images.githubusercontent.com/300046/43672913-f4546384-9775-11e8-8ec8-e0b730b7b9f3.png">

2. Click the green "Sign Up" button at the upper-right corner or "Start learning for free" in the middle of the screen.

3. Click "Google" to use your Gmail or "LinkedIn" to use your LinkedIn.com account. Alternately, create a password within Salesforce.

   PROTIP: Sign up for Trailhead with a <strong>personal Gmail account</strong> instead of company email so you'll be able to sign in no matter where you work in the future.

   You can later <a target="_blank" href="http://salesforce.vidyard.com/watch/kXk6BaNlWJP27UyFO8vNUg">merge accounts</a>, but that
   sometimes results in the loss of history information.

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

   PROTIP: Before you begin answering quiz questions, to avoid needing to having your answers wiped away because you timed out, make sure you're logged by pressing the browser <strong>Refresh</strong> icon or pressing command+R on the Mac or Ctrl+R on Windows PCs.

   <a target="_blank" href="https://wilsonmar.github.io/salesforce-projects">superbadges</a> challenge you to implement a feature or solution in an org (a Trailhead Playground) without step-by-step instructions.

   More points get you higher <a target="_blank" href="https://trailhead.salesforce.com/en/trailblazer-ranks">rank</a>. PROTIP: Each rank takes double the effort from the previous rank.
   "Ranger" is the highest rank, requiring <strong>50,000 points</strong> from at least 100 badges. <a target="_blank" href="https://twitter.com/search?f=tweets&q=%23TrailheadRanger&src=typd">#TrailheadRanger</a>

   ### Trailhead profiles

   There are enough Trails for <a target="_blank" href="https://trailhead.salesforce.com/en/me/preeharris">Preethi Harris</a> to reach <a target="_blank" href="https://twitter.com/search?f=tweets&q=%23DoubleRanger&src=typd">#DoubleRanger</a>

   <a target="_blank" href="https://trailhead.salesforce.com/en/me/preeharris"><img alt="sf-doubleranger-648x262-35274.jpg" width="648" src="https://user-images.githubusercontent.com/300046/43724991-8fd41d7a-9958-11e8-9c11-686ed2ffb0b7.jpg"></a>

   Some sample profiles from among my list of <a target="_blank" href=" https://wilsonmar.github.io/salesforce-rock-stars/">Salesforce Rock Stars</a>:

   * <a target="_blank" href="https://trailhead.salesforce.com/en/me/laydurafe">
   https://trailhead.salesforce.com/en/me/laydurafe</a>
   * https://trailhead.salesforce.com/en/me/adammvp
   * https://trailhead.salesforce.com/en/me/00550000006gTqVAAU Naveen Poojary
   * https://trailhead.salesforce.com/en/me/00550000006gOHXAA2 Anjaneya Reddy Bobbala got near 100,000 points by completing 135+ badges over 7 trails

   * <a target="_blank" href="https://trailhead.salesforce.com/en/me/wilsonmar/">
   https://trailhead.salesforce.com/en/me/wilsonmar</a>
   <br /><br />

   Each profile includes how many trailhead modules and trails completed, and the points earned. Skills distribution by category:

   ![sf-trailhead-cat-304x308-24442](https://user-images.githubusercontent.com/300046/43572325-7aa3ef20-95fc-11e8-99cf-391341ff6d8b.jpg)

   Profiles don't list certifications exams passed.

   QUESTION: Those who have been designated as a "MVP" by Salesforce also get identified in their profile?

   ### Custom Trailmix

   PROTIP: You can create <a target="_blank" href="https://trailhead.salesforce.com/en/users/005500000061uyuAAA/trailmixes/new">your own custom trailmix</a> on <a target="_blank" href="https://trailhead.salesforce.com/mytrailhead/">myTrailhead</a>, in different languages.
   For example:

   * <a target="_blank" href="https://trailhead.salesforce.com/users/00550000006FKOWAA4/trailmixes/lightning-components-basics">Alba Azcona's Lightning Components - Basics</a>
   

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

   Trailhead content are mainly text. There are a few videos, such as the <a target="_blank" href="http://salesforce.vidyard.com/watch/kXk6BaNlWJP27UyFO8vNUg">Who Sees What</a> for Lightning Experience and Salesforce Classic.

   PROTIP: Use a program that generates text to speech.
   Macs has it built-in, and just need to be enabled in Apple System Preferences > Accessibility > Speech.
   ![macos-speech-key-398x58](https://user-images.githubusercontent.com/300046/43554806-dac78108-95b3-11e8-80e9-00bac235554a.jpg)

   You can change the default option+` (back tick) activation key sequence.

   PROTIP: I like the proper British female voice "Kate", who is like Mary Poppins reading to me. For some reason, I am less distracted by minor pronouciation imperfections by American voices rather than the Queen's English.

   ![macos-speech-kate-317x117](https://user-images.githubusercontent.com/300046/43554819-eb2c8c32-95b3-11e8-852e-dfd4cc712f47.jpg)

   If you have the money, several video tutorials are available from Pluralsight, Lynda/LinkedIn, etc.
   
   But don't neglect completing Salesforce trailheads.
   Here's why...


<a name="TrailheadPlayground"></a>

## Trailhead Playground

   You will need an "org" (database) to use which is different than the 
   <a href="#productiveURL">"productive" (real) environment</a>.

A Trailhead Playground is an org you can use to complete hands on challenges, and try out new features and customizations. It <strong>comes with set of Trailhead-specific data</strong> (a set of sample contacts, etc.) that you can use when completing challenges, and a pre-installed unmanaged package that we use to test your hands-on challenges. Trailhead Playgrounds have some limits, but for the most part they give you the same customization options as a production org. 

PROTIP: Salesforce is great because of its free Trailhead tutorial that are thorough.

PROTIP: For a list of your Hands-on Orgs, go to <a target="_blank" href="https://trailhead.salesforce.com/">https://trailhead.salesforce.com</a>,
click the picture at the upper-right corner, and select <a target="_blank" href="https://trailhead.salesforce.com/en/users/profiles/settings/">Settings</a>.

1. Install the Google Chrome browser (if you haven't already done so).

1. Open Chrome and click the icon at the upper-right corner with the three dots for a menu to select "New incognito window".

   Alternately, clear all cookies from your browser. On Chrome, click the three dots, Settings, scroll down to click Advanced, Clear browsing data, Clear Data.

1. Highlight and copy this URL, then paste or type in this URL in the Address field:

   <a target="_blank" href="https://trailhead.salesforce.com/">https://trailhead.salesforce.com</a>

   PROTIP: Using an icognito screen ignores all the previous cookies that may confuse the website.

1. Login using the email associated with the Trailhead Username you wish to use.


1. If the "Verify Your Identity" page appears about a text to your phone, go to your phone and get the code to type into Google Chrome.

   PROTIP: Press command+` (back tick at the upper-left keyboard) to switch among Chrome windows.

1. At the bottom of the Trailhead Module page there is often a blue <strong>"Launch"</strong> button:

   <img alt="sf-trailhead-launch-377x338-30024.jpg" width="377" src="https://user-images.githubusercontent.com/300046/43616777-85b54e8e-967b-11e8-89fc-dd7830386299.jpg">

   PROTIP: Remember to select the Trailhead Playground before clicking the Launch button. You can crate multiple Trailhead Playground by selecting "Create a Trailhead Playground". Over time learners have more than one Playground. 

   If you don't see the Launch button because you've passed the questions before, click the link to repeat the questions.

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

   ### Lightning UI Apps and Items

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

## Einstein Trailhead Playground

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

PROTIP: I recommend following <a target="_blank" href="https://trailhead.salesforce.com/help?article=Installing-a-package-or-app-to-complete-a-Trailhead-challenge">this article</a> mentioned in the Superbadges tutorial.

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


## Chrome Extensions

https://www.jitendrazaa.com/blog/salesforce/top-google-chrome-extensions-for-salesforce/


## Clear fresh developer edition org

Some tutorials ask that you remove sample data. Based on <a target="_blank" href="https://apex-commons.github.io/remove-code-from-fresh-salesforce-org/">this page</a>
and https://help.salesforce.com/articleView?id=deleting_trial_data.htm&type=5

1. Go to Setup, Administration Setup, Manage Users, Profiles, System Administrator
1. Click Edit
1. Under “Custom App Settings”, change the “Default” to something other than Force.com
1. Click Save
1. Go to Setup, App Setup, Create, Apps
1. Delete Force.com
1. Go to Setup, App Setup, Create, Tabs
1. Delete “Start Here”
1. Go to Setup, App Setup, Develop, Pages
1. Delete “Start Here”
1. Go to Setup, App Setup, Develop, Classes
1. Delete startHereController and XMLDom.

Now you can https://apex-commons.github.io/contribute/


<hr />

<a name="Topics"></a>

## Help Topics of conversation

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



<hr />

## Developer Account

1. https://developer.salesforce.com/signup

2. Fill out your information and upload your picture.

   ### Create a Developer Edition organization

   Even if you already have Enterprise Edition, Unlimited Edition, or Performance Edition, use Developer Edition for developing, staging, and testing your solutions against sample data to protect your org’s live data, especially for applications that insert, update, or delete data (as opposed to just reading data).

## Developer Console

There is a Trailhead Module: https://trailhead.salesforce.com/en/modules/developer_console

1. To open "Developer Console" for an org, click the "cog" icon to select "Developer Console".

   ![sf-dev-console-245x145-9152](https://user-images.githubusercontent.com/300046/43218480-c28dad54-9001-11e8-9b7e-d76d26ac107f.jpg)

   See https://help.salesforce.com/articleView?id=code_dev_console.htm&type=5

2. A headless browser window pops up with this tabs pane at the bottom:

   ![sf-dev-console-tabs-610x170-26186](https://user-images.githubusercontent.com/300046/43218626-29752254-9002-11e8-858e-087fece5cc17.jpg)

   PROTIP: BLAH: The Developer Console doesn’t have version control or conflict resolution like DX does.

   The main pane displays the source code editor for the current workspace, which is a collection of resources (files).

1. Flip back and forth to other Chrome windows using <strong>command+tilde</strong>(at the upper-left corner of the keyboard).

1. Click menu item <strong>File, New</strong> for a list of what the Console deals with:

   <img alt="sf-devconsole-new-404x315-35101.jpg" width="404" src="https://user-images.githubusercontent.com/300046/43817461-cb1f9b90-9a96-11e8-99d0-f963734f54b5.jpg">

   * Apex classes
   * Visualforce pages
   * SOQL queries
   * Lightning components
   <br /><br />

1. Copy text from another place and paste it in the editor window.

   PROTIP: Save code in a Git repository (such as GitHub) so that you can go back to any point in time.

1. To save, press Ctrl+S.

   PROTIP: A common error is forgetting to save before execute. Execute without saving to see what the error is (such as "Unread").

1. Press control+E to Debug | Open Execute Anonymous Window.

2. Drag the top gray part of the "Enter Apex Code" window to position it on your screen.

   PROTIP: Connect additional monitors so you can have the Developer Console on one screen, and "Execute Anonymous Window" in another.

1. In the new "Enter Apex Code" window, if there is text left over from the previous session, click on it and press command+A then delete key to delete it.

1. In the new "Enter Apex Code" window, copy the following and paste it this:

   <pre>
Account a = new Account(Name='Test Trigger');
insert a;
   </pre>

1. Click Execute.
1. In the <strong>Log</strong> tab at the bottom of the screen, click the top entry in blue.
1. Check "Debug Only" to see USER_DEBUG event Details. For example, "Hello World!" or "Email sent successfully".
1. PROTIP: At the top among orange tabs, so history does not hide tabs about source code, click the X to the right of the "Log executeAnonymous..." tab.


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

   <tt>brew install --cask visual-studio-code</tt>

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


## Force.com Eclipse IDE

1. Download and install the Java Developer (free) edition of Eclipse. It comes with the "EGit" plugin.
1. Open Eclipse 
1. Identify yourself with GitHub credentials.
1. Add the Force.com IDE plugin.
1. Window > Open Perspective > Git repository exploring.
1. Create a new Force.com Project (with a username and Security Token to the Trailhouse org)

   Install http://bit.ly/ApexWorkbookPackage1_4 (Apex Workbook by Sbob)

<a target="_blank" href="https://success.salesforce.com/issues_index?tag=Eclipse%20IDE">Eclipse IDE Known Issues</a>

## Developer Tools

https://developer.salesforce.com/page/Tools

https://developer.salesforce.com/blogs/engineering/2016/01/apex-interactive-debugger.html
Apex Interactive Debugger

## Other IDEs and Editors

The choice of editors is covered in 

   *<a target="_blank" href="https://app.pluralsight.com/player?course=apex-absolute-beginner-guide-coding-salesforce&author=david-liu&name=apex-absolute-beginner-guide-coding-salesforce-m5&clip=3&mode=live">
   Pluralsight video course: Apex Absolute Beginning Guide to Coding Salesforce</a>

   * VIDEO CLASS: <a target="_blank" href="https://app.pluralsight.com/library/courses/play-by-play-battle-of-salesforce-ides">Play by Play Battle of the Salesforce IDEs</a> Sep 2 2015 [1h 42m]

MavensMate is no longer maintained as of 2017.

Illumated Cloud is licensed to add-on to IntelliJ IDEA Java CE IDE. 
It provides complete Apex-aware completion (pulling documentation in).
It's smart because it extracts metadata from your Org into an offline symbol table to feed auto code completion.
It also has an (offline) interactive debugger that can run to cursor.
Git integration.

Welkin's Suite 

Aside.io

<a target="_blank" href="https://aws.amazon.com/cloud9/">Cloud9</a> was <a target="_blank" href="https://c9.io/announcement">acquired by Amazon on July 14, 2016</a>.
There is no additional charge for using it for AWS. For Salesforce, there is a 7-day trial. 
<a target="_blank" href="https://cloud9-salesforce.readme.io/docs">Docs</a>

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

## People behind Trailhead

   * #Trailhead
   * Chris Duarte (@TheChrisDuarte) - Managing Editor of #Trailhead
   * Sandeep Bhanot (@cloudysan) - #Trailhead Product Owner/ Evangelist

## More learning

https://trailhead.salesforce.com/en/modules/search_solution_basics
Search Solution Basics [45 mins] +300


<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
