---
layout: post
title: "Salesforce Apps"
excerpt: "Apps and Components to add from AppExchange"
tags: [salesforce]
file: saleforce-apps.md
image:
# sf-appy-1900x500-102438
  feature: https://user-images.githubusercontent.com/300046/44081931-2e69aeb8-9f6d-11e8-8f80-a212ae3a80b0.jpg
  credit: Salesforce
  creditlink: https://appexchange.salesforce.com
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This is a step-by-step hands-on tutorial to Apps and AppExchange, with technical commentary along the way.

## Apps menu

   <img align="right" alt="sf-classic-apps-list-160x414-19052.jpg" src="https://user-images.githubusercontent.com/300046/44360835-4b87f700-a479-11e8-89d3-8daa2ce63237.jpg">
1. The Apps menu

   The Classic user interface has a blue "hot dog" menu at the upper-right corner.

   Whatever you select will be removed from the list, but appear in the blue hot dog,
   and remain there the next time until another is selected.

   The "Sales" app is the base CRM (Customer Relationship Management) app,
   the main offering from Salesforce as a company.

   PROTIP: CRM is the Salesforce company's <a target="_blank" href="https://www.nasdaq.com/symbol/crm">stock market symbol</a>. 

   Apps in the list are NOT alphabetically listed. Custom app are added to the list as well:
   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="bottom"><th>Seq.</th><th>Menu</th></tr>
   <tr valign="top"><td align="right">1.</td><td>Sales</td></tr>
   <tr valign="top"><td align="right">2.</td><td>Service</td></tr>
   <tr valign="top"><td align="right">3.</td><td>Marketing</td></tr>
   <tr valign="top"><td align="right">4.</td><td>Community</td></tr>
   <tr valign="top"><td align="right">5.</td><td>Site.com</td></tr>
   <tr valign="top"><td align="right">6.</td><td>Salesforce Chatter</td></tr>
   <tr valign="top"><td align="right">7.</td><td>Content</td></tr>
   <tr valign="top"><td align="right">9.</td><td>Charitable</td></tr>
   <tr valign="top"><td align="right">10.</td><td>Garage</td></tr>
   <tr valign="top"><td align="right">11.</td><td>Conference</td></tr>
   <tr valign="top"><td align="right">12.</td><td>Suggestion Box</td></tr>
   <tr valign="top"><td align="right">13.</td><td>Trail Tracker</td></tr>
   <tr valign="top"><td align="right">14.</td><td>App Launcher</td></tr>
   <tr valign="top"><td align="right">15.</td><td>Relaxation Gauntlet</td></tr>
   <tr valign="top"><td align="right">-</td><td>-</td></tr>
   <tr valign="top"><td align="right">16.</td><td>AppExchange</td></tr>
   <tr valign="top"><td align="right">17.</td><td>Developer Community</td></tr>
   <tr valign="top"><td align="right">18.</td><td>Success Community</td></tr>
   </table>

1. Select the "App Launcher" for a tiled page. You can move each app to the position you want in
   Setup > Managed Apps > App Menu.   

   Alternately, with the Lightning Experience, hover your mouse over the App Launcher icon (with the 9 dots) at the upper-left of any Salesforce console screen, and "App Launcher" appears:

   <img alt="sf-app-launcher-186x93-6209.jpg" width="186" src="https://user-images.githubusercontent.com/300046/44078505-df9ff480-9f63-11e8-8eae-8a296520e8e9.jpg">

   Next to it is the current app ("Sales Console" in this example).

1. Click the app launcher icon for a pop-up listing apps and items.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/43531384-e10b834e-956c-11e8-9113-3506e009c7ae.png"><img alt="sf-app-launcher-1106x554.png" width="1106" src="https://user-images.githubusercontent.com/300046/43531384-e10b834e-956c-11e8-9113-3506e009c7ae.png"></a><br />
   <small>(Click the picture above here for a larger image in a new window.)</small>

   Thia list of apps varies depending on licensing and permissions.

1. PROTIP: The three lines under each icon means you can drag and place it where you want. For example, drag "Sales" to the upper-left corner.

1. Click "Visit App Exchange".

   <strong>"AppExchange apps"</strong> are developed by 3rd parties, usually an ISV (Independent Software Vendor) Salesforce partners. An app is either free or for a fee. 

   <strong>"Managed apps"</strong> are managed by Salesforce.

1. Click "AppExchange" at the lower-left of the pop-up for https://appexchange.salesforce.com/

   PROTIP: The mascot "Appy" is an owl. She is associated with AppExchange.
   <img width="320" src="https://cdnjs.cloudflare.com/ajax/libs/design-system/2.6.2/images/carousel/carousel-01.jpg">

1. Close the tab or or flip back to the "Home" page tab on your browser.
1. Press Esc (escape) on your keyboard to exit the App Launcher dialog.

### Apps you build

Various tutorials:

   * The <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.fundamentals.meta/fundamentals/adg_app_arch.htm">Sample Recruiting App is within the Lightning Platform Fundamentals section of Developer Documentation</a>

## Tabs

Each app defines its own set of <strong>tabs</strong>.

## Partner-built apps

AppExchange partners build ISVforce apps and Lightning Platform OEM Embedded apps.

<a target="_blank" href="https://www.skuid.com/">Skuid</a> is a low-code cloud platform that was an early adopter of SLDS and <a target="_blank" href="https://www.linkedin.com/pulse/skuid-lightning-experience-qa-ken-mcelrath/">"is the only scalable, enterprise class, fully integrated and native user experience platform running on Lightning."</a>

### ISVforce apps

ISVforce apps augment Sales Cloud or Service Cloud business functions.
ISVforce apps are installed by customers into existing orgs, so they use Salesforce features that the customer has available, which can include Salesforce Communities and additional objects added. This is like adding Saleforce Einstein capabilties.

<a target="_blank" href="https://vlocity.com/">Vlocity</a> adds to Salesforce UX user interface components: cards, guided interactions (called OmniScripts™), and ETL. These are applied to industry-specific offerings. The company offers clickstream tracking integrated with Salesforce Wave Analytics to provide timing, integrations, and outcomes of sales and services interactions. The "Vlocity Intelligence" uses "learning algorithms" to determines the most appropriate resources to present to visitors based on a "ranking" of attribute profile data from Contacts, Accounts, Interactions, or any standard or custom object. It also provides an API to that data.
It became a Forbes Cloud 100 company on all that. BTW Vlocity isn't just any AppExchange Premier Partner, it's Salesforce corp's largest non-M&A investment, with >$50M invested. Vlocity "lives together" with Salesforce in its San Francisco HQ.

### OEM Embedded apps

OEM Embedded apps can be sold to those who don’t use Salesforce already as well as existing Salesforce customers.
Such customers would receive a Salesforce app embedded with the app under three types of user licenses:
   * Lightning Platform for administrators
   * Customer Community for users of the app, seeing only their own data and using a limited part of the app.
   * Customer Community Plus for those who can be included in role hierarchy permissions.
   <br /><br />

Those who purchase over 100 licenses get a 10% discount.
Those who purchase over 500 licenses get a 15% discount.

### Lightning Components

When a customization is too complex or specialized to implement in the declarative interface alone, Salesforce  provides programmatic tools for app development:

   * Apex, Salesforce’s cloud-based programming language, is syntactically similar to Java or C#. But Apex makes it easy to work with domain objects (such as Leads, Opportunities, Accounts, Contacts, etc.).

   * Visualforce, a tag-based markup language similar to HTML, is used to build UI pages and components. Like Apex, it works with objects and user actions. It also works with third-party libraries like jQuery and AngularJS.

   * Lightning Components, a JavaScript framework for building reusable components that can render UI, handle client-side events, and communicate with the Salesforce server. These can be sold on the AppExchange!


## AppExchange Use Case Categories

AppExchange has these categories of add-ons:

* Address Verification
* Advertising
* Analytics
* Chat
* Comparison Shopping Engines
* Content Delivery Network
* Content Management
* Continuity & Replenishment
* Customer Relationship Management
* Email Marketing
* Fraud
* Fulfillment
* Gift Cards
* Loyalty
* Marketing
* Marketplace
* Mobile
* Order Management
* Payment
* Personalization
* POS (Point of Sale devices)
* Product Information Management
* Ratings & Reviews
* Rich Media
* Search
* Security
* Shopping Cart Abandonment
* Site Monitoring
* Social
* Store Locator
* Tag Management
* Tax
* Testing & Segmentation
* Translation

## Interesting

   * <a target="_blank" href="https://www.youtube.com/watch?v=BLwNCCr1gZ0">Manage Your Agile Development from Salesforce</a> Oct 26, 2016 Ray Pendyck (<a target="_blank" href="https://twitter.com/raypendyck">@raypendyck</a>) demos Salesforce's <a target="_blank" href="https://appexchange.salesforce.com/listingDetail?listingId=a0N30000000ps3jEAA">Agile Acelerator on AppExchange</a> for licensed users.
   * <a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F9300000009MJV">Agile Accelerator Community</a>
   * <a target="_blank" href="https://appexchange.salesforce.com/servlet/servlet.FileDownload?file=00P3A00000RrREfUAN">Getting Started PDF</a> from Summer '16.

https://github.com/SalesforceFoundation/ApexDoc
The latest java source for ApexDoc, a tool to document your Salesforce Apex classes.

https://github.com/salesforce/grammaticus
Grammaticus is a grammar engine that allows users to rename nouns while keeping content grammatically correct.
Grammaticus encodes the article, noun, and adjective declensions for over 30 languages, and supports programmatic use of nouns


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

## Our Ideas

Here are some innovations:

* When an IoT button is pressed, send a ping into Salesforce Chatter and update the database with a timestamp.

* Adapt the <a target="_blank" href="https://www.target.com/p/google-vision-kit-aiy/-/A-53417081">$90 Google Vision Kit</a> with a stand-alone camera to capture images such as bar codes or QR codes, converts to text, then inserts that info into Salesforce. Also, photos categorization on Machine Learning object recognition services within Amazon, Azure, Google, IBM, etc. This by a Android/iOS smartphone or a custom device such as the $249 Amazon DeepLens.

* In a component window, watch a webcam of your house or behind your back. Use Einstein to alert if something changes.

* Two-way sync of data in a shopping website running WordPress/WooCommerce.

* A <a target="_blank" href="https://medium.freecodecamp.org/how-to-build-a-serverless-url-shortener-using-aws-lambda-and-s3-4fbdf70cbf5c">URL Shortener utility</a>

* Access several weather APIs associated with a contact, such as https://darksky.net/forecast/45.4852,-108.9704/us12/en

* https://codeburst.io/6-interesting-apis-to-check-out-in-2018-5d6830063f29

## Learning

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/salesforce-crm-customization-and-extension">Salesforce CRM Customization and Extension</a>
[1 hr] +500

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/isv_plan">AppExchange App Strategy</a>
to Identify the tools and technologies needed to build your AppExchange app.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/appexchange_licensing">App Licensing and Customer Support for AppExchange</a> [1 hr 45 mins] +400

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/appexchange_app_updates">App Upgrading for AppExchange</a> [45 mins] +300

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/isv_app_trials">AppExchange App Trial Management</a> [1 hr 20 mins] +500

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/app-development-without-limits">App Development Without Limits</a> +1500 to avoid limits as you develop scalable apps.

## Miscellaneous links


See https://developer.salesforce.com/docs/atlas.en-us.214.0.packagingGuide.meta/packagingGuide/oem_user_license_comparison.htm

https://developer.salesforce.com/docs/atlas.en-us.214.0.packagingGuide.meta/packagingGuide/oem_user_license_comparison.htm
review the full list of considerations

https://partners.salesforce.com/AppExchangeTrailblazerChecklist


## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
