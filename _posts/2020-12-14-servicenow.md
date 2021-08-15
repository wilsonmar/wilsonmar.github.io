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


What is ServiceNow? <a target="_blank" href="https://www.youtube.com/watch?v=MeFb6J_Xnp0" title="Apr 13, 2020 by Michael Lombardo">VIDEO:</a> <a target="_blank" href="https://www.youtube.com/watch?v=GgjfBw5DNdI" title="Apr 15, 2021">Now with Troy</a>.

<a target="_blank" href="
https://www.servicenow.com/">
https://www.servicenow.com</a>

ServiceNow offers a "single pane of glass" for ITSM -- a single source of record in the cloud (SaaS).

ServiceNow's "digital workflows that transform the world of work" refers to a suite based on the 26 domains of <strong>ITIL standards</strong> first codified in the UK, but now adopted in most languages across the world. Professionals take exams to ensure they know that many ITIL terms and concepts:
   * IT Asset Management
   * IT Business Management
   * IT Change Management
   * HR Service Delivery
   * Customer Service Management
   * GRC (Governance, Risk, and Compliance)
   * ITSM (IT Service Management)
   * etc.
   <br /><br />

ITIL presents the view on how to do ITSM.

<a target="_blank" href="https://www.gartner.com/doc/reprints?id=1-24BTOL7R&ct=201007&st=sb">
Gartner ranked ServiceNow the leading ITSM vendor for the past 6 years:
<img src="snow-itsm-gartner-2021" src="https://user-images.githubusercontent.com/300046/129464481-e25a1b5d-7d9c-4d56-9a4e-0f46559d2520.png"></a>

Over 6,900 customers, 80% of the Fortune 500
   * Zoom uses ServiceNow to support customer service
   * ITSM market share more than four times that of its closest competitor
   * premier partners include all top consulting services firms
   <br /><br />

At the heart of ITSM (Information Technology Service Management) is tracking of incidents (problems) and tickets. A ticket is request logged on a work tracking system detailing an issue that needs to be addressed or task that must be performed.
An incident is something that's broken.
A problem relates to prevention of incidents.

ITIL describes use of a CMDB (Configuration Management DataBase).
Data stored in a CMDB include lists of assets (referred to as <strong>configuration items</strong>) and the relationships among them. The CMDB aids the organization in performing service management processes such as incident management, change management and problem management, and is also an essential resource for decision-makers needing information to improve cost, quality and the performance of IT Services offered by the organization.

ServiceNow provides Self-service by groups or <a target="_blank" href="https://www.youtube.com/watch?v=5KkoFnKMYUI" title="from GlideFast">VIDEO</a>: AI Virtual Agents.


<a name="Platform"></a>

## ServiceNow Platform

features:
   * <a href="#LowCode">No code/low code development</a>
   * Intelligent business apps
   * No proprietary coding languages required
   * Mobile-first approach
   * IT governance and control
   <br /><br />

Components:
   * App Enngine
   * IntegrationHub
   <br /><br />

   The Service Graph Connector Program integrates Avantra, which to load third-party data into the system.

JavaScript is the language used for scripting, with Script Includes, UI Macros.

Platform LATEST INNOVATIONS

   * Machine learning
   * Intelligent chatbot
   * Performance analytics
   * AI-powered search
   * Process optimization
   * UI builder
   <br /><br />

### Versions

https://docs.servicenow.com/

Two or three new <a target="_blank" href="https://sndocs.jace.pro/">versions of ServiceNow</a> are released each year for <a target="_blank" href="https://www.basicoservicenowlearning.in/2019/12/servicenow-versions.html">upgrade</a>, each named, in alphabetical order, by a city name:
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

To check the ServiceNow release installed:
1. Log in to ServiceNow application
1. Type in URL: yourdomain/stats.do and press enter.

   Your domain is basically your ServiceNow domain address. 

1. Remove nav_to.do section and instead of that section write stats.do.


Demo and development instances are delivered with pre-loaded sample data which includes employees, incidents, assets, and locations. Sample locations include real addresses to Hooters restaurants (1111 W 120th Ave, Westminster CO or 1211 13th Avenue Dr Se, Hickory NC).

NOTE: References to "GlideRecord” (abbreviated “gr”) is because ServiceNow was prevously known as "Glidesoft". Rumor has it that while he was coding, founder Fred Luddy heard a pilot announce his plane would be “gliding" in to their destination.


## GUI

<img align="right" alt="snow-right-click-menu-2021.png" src="https://user-images.githubusercontent.com/300046/129461777-fef2b3bc-b979-441a-9138-096afc5e7e6b.png">
Right-click anywhere on the gray bar at the top for this menu:

ServiceNow provides a single consistent set of UI features and workflows adopted by many modules:
system properties, applications, Studio, tabs, tables, relationships, views, fields, transform maps, elements, variables, reports, roles, rows, sorting, filters, busines rules, notifications, etc.

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

## Mainline Certifications

To take an exam, in https://nowlearning.service-now.com/lxp select Content Type "Certification".

With all exams, answer 60 questions in 90 minutes using <a target="_blank" href="https://www.webassessor.com/">WebAssessor</a>. The mainline certs:

<a target="_blank" href="https://www.servicenow.com/services/training-and-certification/certified-implementation-specialist.html">CIS (Certified Implementation Specialist)</a>

<a target="_blank" href="https://www.servicenow.com/services/training-and-certification/certified-application-developer.html">CAD (Certified Application Developer)</a>

<a target="_blank" href="https://www.servicenow.com/services/training-and-certification/certified-application.html">CAS (ServiceNow Certified Application Specialist)</a>

<a target="_blank" href="https://www.servicenow.com/services/training-and-certification/certified-system.html">CSA (ServiceNow Certified System Administrator)</a> <a target="_blank" href="https://www.servicenow.com/content/dam/servicenow/other-documents/training/servicenow-sys-admin-exam-specs.pdf">PDF</a> Learning Domain

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

Candidates can complete either a three‑day ServiceNow Fundamentals training course or the on‑demand ServiceNow Fundamentals training course offered in Now Learning.

https://www.servicenow.com/success/now-value/nowcreate.html
ServiceNow Now Create methodology


## Micro Certifications

<a target="_blank" href="https://www.servicenow.com/services/training-and-certification/micro-certifications.html">Micro-certification Assessment Simulators</a> include:
   * Predictive Intelligence
   * Agile Development and Test Management
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


## Training

<a target="_blank" href="https://www.pluralsight.com/courses/leveraging-lists-filters-servicenow">
Leveraging Lists and Filters in ServiceNow</a>
Mar 16, 2021 by <a target="_blank" href="https://linkedin.com/in/dannyjessee">Danny Jessee</a>

https://app.pluralsight.com/library/courses/managing-it-services-with-itil-executive-briefing/table-of-contents


https://www.udemy.com/topic/servicenow-certified-system-administrator/
11hr ServiceNow Certified System Administrator Courses</a>
by Mark Miller and Singa Code

https://www.udemy.com/course/the-complete-servicenow-system-administrator-course/
The Complete ServiceNow System Administrator Course


https://www.basicoservicenowlearning.in/

https://www.youtube.com/basicoservicenowlearning


## Leadership

Acolades:
   * 2020 list of FORTUNE World's Most Admired Companies.®
   * Forbes Top 100 innovators
   * #1 on FORTUNE® Future 50 2020
   <br /><br />

"NOW" is its stock-market tading symbol. The stock rose 37% in 2020, outperforming Microsoft and others.

Its "Safe Workplace suite" includes apps for employee health screening and workplace safety management. The dashboard, providing visualizations for data collected from the apps, will be overlaid with a map comprised of aggregated public data on infection rates.

The "wooden spaceship" above in Solana Beach (near San Diego), California is one of the buildings where ServiceNow was developed before moving to Silicon Valley (Santa Clara University Town Center area) in 2013.

CEO since November 2019, <a target="_blank" href="https://www.instagram.com/billrmcdermott/">Bill McDermott</a>, previous was CEO at SAP since 2002. 
In 2014 he published his memoir "Winners Dream: A Journey from Corner Store to Corner Office".
He is now working on another book. Since July 2015, he wears dark sunglesses after falling down stairs while holding a water glass lashed his face and cut his left eye.

> “The outlook that I have now is so calm, so clear, so in control that it’s almost awe-inspiring even to me," he said. “I’m like, ‘How could I get this lucky?’ That’s how I feel."

<a target="_blank" href="https://www.linkedin.com/in/chirantan-cj-desai-aa346/">Chirantan "CJ" Desai</a> is Chief Product and Engineering Officer

https://www.wikiwand.com/en/ServiceNow
says ServiceNow began in Santa Clara, CA 2006 and IPO'd in 2012.
Acquisitions: May 2021 Lightstep. Aug 2021 Mapwize.

According to Gartner: Customers with large numbers of occasional users struggle to justify its role-based named user licensing model and Gartner has observed low adoption of its all-user licensing model alternative.

## Social

https://community.servicenow.com/community
store

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

https://www.servicenow.com/events/on-demand-webinars.html
OnDemand videos require registration

https://www.linkedin.com/company/servicenow/

https://www.linkedin.com/in/jasonwojahn/

https://www.staveapps.com/
Supply Chain & Security Solutions built on ServiceNow

