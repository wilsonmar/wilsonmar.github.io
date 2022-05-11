---
layout: post
title: "ServiceNow"
excerpt: "ITSM automated in the cloud for Incident Management and other ITSM functionality"
modified:
tags: [servicenow,itil]
date: "2020-12-04"
file: "servicenow"
image:
# snow-wooden-spaceship-1900x500.png
  feature: https://user-images.githubusercontent.com/300046/129465068-4c960761-3a4f-4300-bb49-2a40a844544e.png
  credit: Christopher Morgan
  creditlink: https://www.linkedin.com/pulse/5-fun-facts-servicenow-you-didnt-know-christopher-morgan/
comments: true
---
<em>{{ page.excerpt }}</em>
{% include l18n.html %}
{% include _toc.html %}

This is a deep yet concise hands-on technical introduction to ServiceNow.

{% include whatever.html %}


<a name="URLs"></a>

## ServiceNow URLs and logins

1. Note the company's name "ServiceNow" does not contain a space. Thus it's website:<br />

   <a target="_blank" href="
   https://www.servicenow.com/"><strong>
   https://www.servicenow.com</strong></a> 

1. Documentation

   <a target="_blank" href="
   https://docs.servicenow.com/">
   https://docs.servicenow.com</a>

1. Sign up for a developer account (FREE):

   <a target="_blank" href="
   https://developer.servicenow.com/">
   https://developer.servicenow.com</a>

1. Click "Request an instance" (FREE).

   Note that "service-now.com" DNS name is used in the <a target="_blank" href="https://www.youtube.com/watch?v=StF3bXCbtJ8">login URL</a>:

   ![snow-login-jakarka](https://user-images.githubusercontent.com/300046/129474591-74ec0d91-1d34-455f-b800-ec8dac441aed.png)

   The wooden spaceship" building at the top of this page is in Solana Beach (near San Diego), California. It is where ServiceNow was coded before moving to Silicon Valley (Santa Clara University Town Center area) in 2013. 

   The "dev45692" in the URL above is your "Instance Name" assigned by ServiceNow.

1. Save the credentials (URL, username, and password) in a text file.

   CAUTION: The instance URL contains the username and password, so should not be saved as a browser bookmark because that makes it public.

   "If your instance is inactive for 10 days, it will be reclaimed and released for other developers to use."

   PROTIP: Your company pays for capacity used, so pays even when your instance is inactive.

1. Select a <a target="_blank" href="https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec">Learning Plan</a> for the skill set you desire.

   Like Salesforce, ServiceNow provides free training resources.


<a name="Builds"></a>

## Builds & servlet metadata

To identify the ServiceNow release installed and other metadata:
1. Log in to ServiceNow application
1. In the browser URL, replace "nav_to.do" and everyting after it with <strong>stats.do</strong>. For example:

   https://www.dev45692/service-now.com<strong>/stats.do</strong>

   The metadata includes:

   <pre>Build name: Quebec
Build date: 03-01-2021_1225
   </pre>

   Each instance runs in a <strong>servlet</strong>. Scroll down further to see that your servlet is running CentOS Red Hat 4.8.5-44:

   <pre>OS Configuration
Linux version 3.10.0-1160.25.1.el7.x86_64 (mockbuild@kbuilder.bsys.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC) ) #1 SMP Wed Apr 28 21:49:45 UTC 2021
Load average: 16.35 16.03 16.23 6/8770 98926
Processor model: AMD EPYC 7551P 32-Core Processor
Processors: 64
Processor bogomips: 3992.47
   </pre>

Two or three new <a target="_blank" href="https://sndocs.jace.pro/">versions of ServiceNow</a> are built and released each year for <a target="_blank" href="https://www.basicoservicenowlearning.in/2019/12/servicenow-versions.html">upgrade</a>, each named, in alphabetical order, by a city name:

   * Aspen Dec 2011
   * Berlin July 2012

   * Calgary Feb 2013
   * Dublin 2013

   * Eureka May 2014
   * Fuji March 2015

   * Geneva Dec 2015
   * Helsinki May 2016

   * Istanbul Jan 2017
   * Jakarta July 2017

   * Kingston (Jamaica) Q1 2018
   * London Q3 2018

   * Madrid Q1 2019
   * New York Q3 2019

   * Orlando Q1 2020
   * Paris Q3 2020

   * Quebec Q1 2021
   * Rome Q3 2021

   * San Diego Q2 2022
   * Tokyo Q4 2022
   <br /><br />

<a target="_blank" href="https://developer.servicenow.com/dev.do#!/guides/quebec/developer-program/ea-guide/personal-developer-instances-pdis">Request a Personal Developer Instance (PDI) running an Early Availability release</a> for yourself.
oh$avemefromDelta2

## Pricing

<a target="_blank" href="https://upperedge.com/servicenow/lifting-the-veil-on-servicenow-pricing/">CAUTION</a>: ServiceNow adjusts its pricing models or licensing metrics for products when new family releases roll out, so avoid surprises.

Each user type has a different price based on the rights in functionality, with requesters having the least amount of rights and fulfillers having the most.


<a name="ITSM"></a>

## Service Management (ITSM)

"Service Management" appears at the top banner as a tagline next to the logo.

<a target="_blank" href="https://www.gartner.com/doc/reprints?id=1-24BTOL7R&ct=201007&st=sb">
Gartner ranked ServiceNow the leading ITSM vendor for the past 6 years:
<img src="snow-itsm-gartner-2021" src="https://user-images.githubusercontent.com/300046/129464481-e25a1b5d-7d9c-4d56-9a4e-0f46559d2520.png"></a>

ServiceNow's ITSM market share is more than four times that of its closest competitor.
ServiceNow has over 6,900 customers, 80% of the Fortune 500.
Zoom uses ServiceNow to support customer service.

STAR: <a target="_blank" href="https://developer.servicenow.com/dev.do#!/guides/quebec/now-platform/glossary/developer-glossary">ServiceNow's Developer Glossary</a>

Unlike Salesforce, much of the vocabulary and workflow ServiceNow automates is based on industry
<strong>ITIL standards</strong> first codified (with certification exams) in the UK, but now adopted in most languages across the world. Professionals take exams to ensure they know that many ITIL terms and concepts.
Among the 26 domains of knowledge in ITIL v3 are:
   * IT Asset Management
   * IT Business Management (ITBM)
   * IT Change Management
   * IT Operations Management
   * HR Service Delivery
   * Customer Service Management (CSM)
   * GRC (Governance, Risk, and Compliance)
   * ITSM (IT Service Management)
   * etc.
   <br /><br />

ITIL presents the view on how to do ITSM.

At the heart of ITSM (Information Technology Service Management) is tracking of incidents (problems) and tickets. A ticket is request logged on a work tracking system detailing an issue that needs to be addressed or task that must be performed.

A problem relates to prevention of incidents.

ITIL describes use of a CMDB (Configuration Management DataBase).
Data stored in a CMDB include lists of assets (referred to as <strong>configuration items</strong>) and the relationships among them. The CMDB aids the organization in performing service management processes such as incident management, change management and problem management, and is also an essential resource for decision-makers needing information to improve cost, quality and the performance of IT Services offered by the organization.

## Menu

1. Click the icon at the lower-left corner to minimize and reveal Navigator text.

1. Alternately, click the filter icon at the top to type in the <strong>Filter navigation</strong> field near the upper-left of the screen.

   ### Self-service 

1. The <strong>Self-service</strong> application is at the top of the menu.

   ![snow-self-service-menu-jakarta-177x595](https://user-images.githubusercontent.com/300046/129475706-14951324-0171-423d-9efc-cded4d24f1c5.png)

   Each indented item is a "module".

   An arrow icon is to the left of each category.

   Enjoy the content frame.

1. To scroll down the Application Navigator menu at the left, cursor anywhere on the list and on the Mac Trackpad move two fingers up.


   ### Service Catalog

1. Menu item "Service Catalog" is an ITIL term about hardware equipment and software.

   "Request Items" track Service Catalog items requested.

   An <strong>incident</strong> is something that's broken -- an unplanned interruption to an IT service (some reduction in the quality of an IT service).

   "NLQ" is Natural Language Query.

   "NLU" is Natural Language Understanding.

   A MID (Management, Instrumentation, and Discovery) server is (<a target="_blank" href="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/success/quick-answer/mid-server-basics.pdf">PDF</a>) runs a Java application <strong>on your local network</strong>.

   MID Servers facilitate communication and data movement between a single ServiceNow®instance and external applications, data sources, and services. <a target="_blank" href="https://www.youtube.com/watch?v=rJb0YDSCATo&list=RDCMUCCBQU8mlFrElxQNR2mo-gLg&start_radio=1&rv=rJb0YDSCATo">VIDEO</a>

   Menu item "Connect Chat" creates another browser tab.

   Search "perform" for Performance Analysis (PA). Explanations:
   <a target="_blank" href="https://www.youtube.com/watch?v=-CNyvVN3eZk">VIDEO</a>,
   <a target="_blank" href="https://www.youtube.com/watch?v=VsLe8vHgGF4">VIDEO</a>

   Search "reports"


## JavaScript

Unlike Salesforece, ServiceNow does not require use of proprietary programming languages (such as ABAP). 

On both client and server, <strong>JavaScript</strong> is the language used, with Script Includes, UI Macros. 

AngularJs (not Angular 2) is the frontend framework ServiceNow currently uses.

PROTIP: Demo and development instances are delivered with pre-loaded sample data which includes employees, incidents, assets, and locations. Sample locations include real addresses to <a target="_blank" href="https://www.hooters.com/">Hooters restaurants</a> (1111 W 120th Ave, Westminster CO, 1211 13th Avenue Dr Se, Hickory NC, etc.).


<a name="Platform"></a>

## Platform

ServiceNow offers a "single pane of glass" for ITSM -- a single source of record in the cloud (SaaS).

ServiceNow's "digital workflows that transform the world of work" refers to a suite based on 

<a target="_blank" href="https://www.youtube.com/watch?v=5KkoFnKMYUI" title="from GlideFast">VIDEO</a>: AI Virtual Agents.

Features:
   * <a href="#LowCode">No code/low code development</a>
   * Intelligent business apps
   * No proprietary coding languages required
   * Mobile-first approach
   * IT governance and control
   <br /><br />

App Enngine

<a target="_blank" href="https://www.youtube.com/watch?v=BLBssdOU7Vs">VIDEO</a>:
To automate processes such as approvals, tasks, and notifications, the Flow Designer is used for designing Flows, Subflows, Actions, Action Steps, Spokes.

Each reusable "spoke" is an integration within IntegrationHub (IH).
Connection aliases provides a way to determine connection and credential details at run-time.

The Service Graph Connector Program integrates Avantra, which to load third-party data into the system.

Platform LATEST INNOVATIONS

   * Machine learning
   * Intelligent chatbot
   * Performance analytics
   * AI-powered search
   * Process optimization
   * UI builder
   <br /><br />



## Studio

<img align="right" alt="snow-right-click-menu-2021.png" src="https://user-images.githubusercontent.com/300046/129461777-fef2b3bc-b979-441a-9138-096afc5e7e6b.png">
Right-click anywhere on the gray bar at the top for this menu:

ServiceNow provides a single consistent set of UI features and workflows adopted by many modules:
system properties, applications, Studio, tabs, tables, relationships, views, fields, transform maps, elements, variables, reports, roles, rows, sorting, filters, busines rules, notifications, etc.

Another historical vestige are references to "GlideRecord” (abbreviated “gr”) because ServiceNow was prevously known as "Glidesoft". Rumor has it that while founder Fred Luddy was coding on a plane, he heard a pilot announce his plane would be “gliding" to their destination.


Studio keyboard shortcuts:
   * command + shift + O = Go to
   * command + shift + C = Create
   * command + shift + F = Find (Search)
   * command + shift + X = Close current tab
   <br /><br />


<a name="LowCode"></a>

## Low-code platform

ServiceNow's "Now" <a target="_blank" href="https://servicenow.com/nowplatform.html">servicenow.com/nowplatform.html</a> is a whole low-code platform, like Salesforce.
Personas it supports: <a target="_blank" href="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/data-sheet/ds-servicenow-platform.pdf">PDF: Data Sheet</a>

   * IT workflows
   * Employee workflows
   * Customer workflows (customer service engine)
   * Creator workflows
   <br /><br />


https://www.servicenow.com/lpebk/now-platform-reference-guide.html


1. Services Forrester Low-Code platforms
https://reprints2.forrester.com/#/assets/2/228/RES161668/report

https://techilaservices.com/blog/salesforce-vs-servicenow/


## Architecture

multi-tenancy? 




<a name="Certifications"></a>

## Certifications

Premier partners include all top consulting services firms.

ServiceNow partners cover training and exam costs because their partner tier is tied to the number of employees who hold accreditation.

### Mainline Certifications

To take an exam, in https://nowlearning.service-now.com/lxp select Content Type "Certification".

With all exams, answer 60 questions in 90 minutes using <a target="_blank" href="https://www.webassessor.com/">WebAssessor</a>. The mainline certs:

<a target="_blank" href="https://www.servicenow.com/services/training-and-certification/certified-implementation-specialist.html">CIS (Certified Implementation Specialist)</a>

<a target="_blank" href="https://www.servicenow.com/services/training-and-certification/certified-application-developer.html">CAD (Certified Application Developer)</a>
   * 

<a target="_blank" href="https://www.servicenow.com/services/training-and-certification/certified-application.html">CAS (ServiceNow Certified Application Specialist)</a>

<a target="_blank" href="https://www.servicenow.com/services/training-and-certification/certified-system.html">CSA (ServiceNow Certified System Administrator)</a> <a target="_blank" href="https://www.servicenow.com/content/dam/servicenow/other-documents/training/servicenow-sys-admin-exam-specs.pdf">PDF</a> is the entry-level certification. Candidates can complete either a $2,095 three‑day ServiceNow Fundamentals training course or the on‑demand ServiceNow Fundamentals training course. 

1. User Interface & Navigation (20%)
   * ServiceNow Overview
   * Lists and Filters
   * Forms and Templates
   * Branding
   <br /><br />

2. Collaboration (20%)
   * Task Management
   * Notifications
   * Reporting
   <br /><br />

3. Database Administration (30%)
   * Data Schema
   * Application/Access Control
   * CMDB
   * Import Sets
   <br /><br />

4. Self-Service & Process Automation (20%)
   * Knowledge Management
   * Service Catalog
   * Flow Designer
   <br /><br />

5. Introduction to Development (10%)
   * Scripting
   * Migration and Integration
   * Development
   <br /><br />

https://www.servicenow.com/success/now-value/nowcreate.html
ServiceNow Now Create methodology


<a name="MicroCerts"></a>

### Micro Certifications

<a target="_blank" href="https://www.servicenow.com/services/training-and-certification/micro-certifications.html">Micro-certification Assessment Simulators</a> include:
   * Predictive Intelligence
   * <a target="_blank" href="https://docs.servicenow.com/bundle/paris-it-business-management/page/product/agile-development/concept/agile-development.html">Agile (Scrum) Development 2.0</a> <a target="_blank" href="https://nowlearning.service-now.com/lxp?id=overview&sys_id=50b18874db0728507aa13df3399619e8&type=course">LEARN</a>
   * Test Management
   * <a target="_blank" href="https://nowlearning.service-now.com/lxp?id=overview&sys_id=e22631dddbdef300760a71043996191f&type=path">Automated Test Framework (ATF)</a>
   * CSM with Service Management for Implementers
   * Flow Designer
   * IntegrationHub
   * Service Portal
   <br /><br />

Micro-certification Assessment Simulators include (PDFs):
   * Business Continuity Management
   * CMDB Health
   * Configure the CDMB
   * DevOps - pipeline change requests are created for the application in DevOps > Pipeline
Change Request as a result of the code commit changes deployed to the appropriate application environments (i.e. UAT, Production).
   * <a target="_blank" href="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/other-document/snmc-pa.pdf">Performance Analytics</a> <a target="_blank" href="https://nowlearning.service-now.com/lxp?id=overview&sys_id=e22631dddbdef300760a71043996191f&type=path">Assessment</a>
   * Virtual Agents
   <br /><br />


## Leadership

Acolades:
   * 2020 list of FORTUNE World's Most Admired Companies.®
   * Forbes Top 100 innovators
   * #1 on FORTUNE® Future 50 2020
   <br /><br />

"NOW" is ServiceNow's NYSE (New York Stock Exchange) trading symbol, a constituent of the Russell 1000 index. The stock rose 37% in 2020, outperforming Microsoft and others.

ServiceNow had a <a target="_blank" href="https://www.youtube.com/watch?v=qWKipJefrN8&t=8s">NPS (Net Promoter Score)</a> of <a target="_blank" href="https://netpromoterscore.guru/servicenow-com">52 in 2021</a> (in a range from -100 from 100) which is among the highest within the <a target="_blank" href="https://customer.guru/net-promoter-score/top-brands">Top 100 brands</a> (on par with Harley Davidson, Intel, and Tiffany, but under the top NPS of 79 by Costco).

By contrast, <a target="_blank" href="https://customer.guru/net-promoter-score/salesforce-com-inc">
Salesforce NPS was -10 in 2021</a>.

ServiceNow's <a target="_blank" href="https://docs.servicenow.com/bundle/rome-employee-service-management/page/product/human-resources/concept/safe-workplace.html">Safe Workplace suite"</a> includes apps for employee health screening and workplace safety management. The dashboard, providing visualizations for data collected from the apps, will be overlaid with a map comprised of aggregated public data on infection rates.

CEO since November 2019, <a target="_blank" href="https://www.instagram.com/billrmcdermott/">Bill McDermott</a>, previous was CEO at SAP since 2002. 
In 2014 he published his memoir "Winners Dream: A Journey from Corner Store to Corner Office".
He is now working on another book. Since July 2015, he wears dark sunglesses after falling down stairs while holding a water glass lashed his face and cut his left eye.

> “The outlook that I have now is so calm, so clear, so in control that it’s almost awe-inspiring even to me," he said. “I’m like, ‘How could I get this lucky?’ That’s how I feel."

<a target="_blank" href="https://www.linkedin.com/in/chirantan-cj-desai-aa346/">Chirantan "CJ" Desai</a> is Chief Product and Engineering Officer

https://www.wikiwand.com/en/ServiceNow
says ServiceNow began in Santa Clara, CA 2006 and IPO'd in 2012.
Acquisitions: May 2021 Lightstep. Aug 2021 Mapwize.

According to Gartner: Customers with large numbers of occasional users struggle to justify its role-based named user licensing model and Gartner has observed low adoption of its all-user licensing model alternative.


## Training

<a target="_blank" href="https://www.pluralsight.com/courses/leveraging-lists-filters-servicenow">
Leveraging Lists and Filters in ServiceNow</a>
Mar 16, 2021 by <a target="_blank" href="https://linkedin.com/in/dannyjessee">Danny Jessee</a>

https://app.pluralsight.com/library/courses/managing-it-services-with-itil-executive-briefing/table-of-contents


https://www.udemy.com/topic/servicenow-certified-system-administrator/
11hr ServiceNow Certified System Administrator Courses</a>
by <a target="_blank" href="https://www.markMmiller.com/">Mark M. Miller</a> and Singa Code

https://www.udemy.com/course/the-complete-servicenow-system-administrator-course/
The Complete ServiceNow System Administrator Course

https://www.basicoservicenowlearning.in/

https://www.youtube.com/basicoservicenowlearning

<a target="_blank" href="https://www.youtube.com/playlist?list=PLzTvAeLiW8AeO2Ep-qgufgOdLJ5UoA4hf">
Gaurav Tripathi's Developer training VIDEO: SASSWITHSERVICENOW playlist</a>

https://www.servicenow.com/events/on-demand-webinars.html
OnDemand videos require registration


## Social

https://community.servicenow.com/community
store

https://www.twitch.tv/servicenowdevprogram

https://www.youtube.com/watch?v=rJb0YDSCATo&list=RDCMUCCBQU8mlFrElxQNR2mo-gLg&start_radio=1&rv=rJb0YDSCATo
ServiceNow - Now Community YouTube channel

1. Join the ServiceNow Product Lab Insider Program to influence ServiceNow products, roadmap strategy and workflows as part of our research community.

https://community.servicenowproductlab.com/

https://twitter.com/servicenow?lang=en

https://www.youtube.com/playlist?list=PLtPPHGXv_JpmhypERyQKm5zO2Wd65QinB

https://blogs.servicenow.com/category/life-at-now.html

Annual customer convention 
   https://events.servicenow.com/widget/servicenow/knowledge2021/library
   "KnowledgeNow"

   https://www.servicenow.com/now-at-work.html
get$ervicenow2andgetituQuickly
   https://knowledge.servicenow.com/creatorcon.html
   CreatorCon helps you build workflow apps fast on The Now Platform App Engine. Find on-demand sessions for seasoned pros, or those just getting started.

https://www.linkedin.com/company/servicenow/

https://www.linkedin.com/in/jasonwojahn/

https://www.staveapps.com/
Supply Chain & Security Solutions built on ServiceNow

What is ServiceNow? <a target="_blank" href="https://www.youtube.com/watch?v=MeFb6J_Xnp0" title="Apr 13, 2020 by Michael Lombardo">VIDEO:</a> <a target="_blank" href="https://www.youtube.com/watch?v=GgjfBw5DNdI" title="Apr 15, 2021">Now with Troy</a>.

https://www.reddit.com/r/servicenow/


