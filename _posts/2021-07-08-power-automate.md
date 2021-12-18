---
layout: post
title: "Power Automate"
excerpt: "Microsoft's low-code RPA (Robotic Process Automation) and DPA (Digital Process Automation) product to create low-code flows accessing various connectors, augmented by AI/ML"
tags: [Clouds, IoT, Azure]
date: "2021-12-12"
file: "power-automate"
image:
# ms-iot-hero-1900x500
  feature: https://user-images.githubusercontent.com/300046/71724170-8a0f1f00-2dec-11ea-8ceb-823f5abbb31d.jpg
  credit: Microsoft
  creditlink: https://channel9.msdn.com/Shows/Internet-of-Things-Show/Deep-Dive-Building-IoT-Solutions-with-IoT-Central
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article provides a hands-on tour with commentary about Microsoft's Power Automate "low-code" platform.

Power Automate is Microsoft's offering in the market of RPA (Robotic Processing Automation) of business processes. BTW "Power Automate" is the 2019 rebranding of "Microsoft Flow" introduced in 2016 and also replaces SharePoint 2010 Flows introduced November 2020.

Microsoft's Power Automate marketing homepage at <a target="_blank" href="https://powerautomate.microsoft.com/en-us/">https://powerautomate.microsoft.com/en-us</a> says: 

> "Streamline repetitive tasks and paperless processes"


### MS Power Platform Components

"Power Automate" is one of Microsoft's "Power Platform" offerings for "citizen developers" using the low-code development platform:

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th> Feature </th><th> Component Name </th></tr>
   <tr valign="top"><td> database store </td><td> Microsoft Dataverse </td><td> DaaS (Database as a Service) common data services
      </td></tr>
   <tr valign="top"><td> external interfaces </td><td> Connectors </td><td> to exchange data with established and custom APIs
      </td></tr>
   <tr valign="top"><td> AI/ML form processing </td><td> AI Builder </td><td> - 
      </td></tr>
   <tr valign="top"><td> automation </td><td> Power Automate Desktop </td><td> RPA (UI Flows designer)
      </td></tr>
   <tr valign="top"><td> app dev </td><td> Power Apps </td><td> low-code custom mobile/web app development environment
      </td></tr>
   <tr valign="top"><td> analytics and visualization </td><td> Power BI </td><td> -
      </td></tr>
   <tr valign="top"><td> chatbots </td><td> Power Virtual Agent and visualization -
      </td></tr>
   </table>

   Menus are similar:

   <table>
   <tr><th> Power Automate </th><th> Power App </th></tr>
   <tr valign="top"><td><img alt="o365-menu-203x500.png" width="203" src="https://user-images.githubusercontent.com/300046/125302215-f96ea480-e2e8-11eb-8020-0ed15e56752e.png">
   </td><td><img alt="powerapp-menu-408x938" width="204" src="https://user-images.githubusercontent.com/300046/124976962-296a2f00-dfed-11eb-8d8c-d737d53cfecc.png">
   </td></tr></table>

<strong>"Power App" is the designer GUI for Flows.</strong>

## Get Started

<a target="_blank" href="https://docs.microsoft.com/en-us/power-automate/getting-started">Quickstart</a>:

* If you're new to Microsoft and Azure, <a target="_blank" href="https://docs.microsoft.com/en-us/power-automate/sign-up-sign-in">Sign-up</a> and sign-in to:

   <a target="_blank" href="https://flow.microsoft.com/"><strong>https://flow.microsoft.com</strong></a>

   BTW <a target="_blank" href="https://powerautomate.com/">powerautomate.com</a> now redirects to<br />
<a target="_blank" href="https://us.flow.microsoft.com/en-us/">https://us.flow.microsoft.com/en-us</a>
if the server detects that you're from the US.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/146571400-f73e1621-278d-45d2-80f9-902e84d8149c.png"><img align="right" width="200" alt="power-automate-menu-21-12-16-400x1098" src="https://user-images.githubusercontent.com/300046/146571400-f73e1621-278d-45d2-80f9-902e84d8149c.png"></a>

   Notice at the upper-left "Office 365".

* If you're a 365 Administrator, sign in using your Microsoft 365 credentials (@inmicrosoft.com) at:

   <a target="_blank" href="https://admin.powerplatform.microsoft.com/">https://admin.powerplatform.microsoft.com</a>

* If you have an <strong>Office 365</strong> user account, sign on to:

   <a target="_blank" href="https://www.office.com">office.com</a>

   Click the menu icon (9 dots), then "All apps", then "Power Automate".

   <img width="349" alt="power-automate-office-211216-698x206" src="https://user-images.githubusercontent.com/300046/146636030-8f78be82-f7e3-439e-aa77-5bd49f32edca.png">



## Menu items

   REMEMBER: <strong>Each "Flow" is a distinct (automated) workflow, akin to a program module.</strong>

   There are two types of Flows which serve different but complementary purposes in an organization’s overall business process management (BPM) strategies and initiatives:

   * <strong>Attended RPA</strong> is actually <strong>DPA (Digital Process Automation)</strong>, which is not intended to fully replace tasks completed by humans.
   * <strong>Unattended RPA</strong>
   <br /><br />

   


1. Under "Monitor" is where you'll see alerts, runs, and notifications for

   "Cloud Flow activity" for flows which run on the cloud

   "Desktop flow runs" for flows which run on <a target="_blank" href="https://docs.microsoft.com/en-us/power-automate/desktop-flows/manage-machines">"Machines"</a>.

1. Action Items sub-menus are "Approvals" and "Business Process Flows"

   <a target="_blank" href="https://docs.microsoft.com/en-us/power-automate/flow-types">flow types</a> 

1. Templates provide pre-written code. <a target="_blank" href="https://powerautomate.microsoft.com/en-us/templates/">Sample Templates</a> include:

   * Create an issue in Azure DevOps when an email is received.
   * Automate tasks on your local computer like computing data in Excel.
   * Send automatic reminders for past due tasks
   * Move business data between systems on a schedule
   * "process mining" 
   <br /><br />


1. Click <strong>+ Create</strong> 

   <a target="_blank" src="https://user-images.githubusercontent.com/300046/125397004-932a6600-e36a-11eb-8e4d-a051f3053540.png">
   <img width="1143" alt="az-powerauto-flows" src="https://user-images.githubusercontent.com/300046/125397004-932a6600-e36a-11eb-8e4d-a051f3053540.png"></a>

   That's similar to "New flow" at another menu:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/124976956-27a06b80-dfed-11eb-99fd-c5e7bd415b64.png"><img width="239" alt="powerapp-newflow-478x674" src="https://user-images.githubusercontent.com/300046/124976956-27a06b80-dfed-11eb-99fd-c5e7bd415b64.png"></a>



1. <a target="_blank" href="https://us.flow.microsoft.com/en-us/connectors/">Connectors</a> to APIs from Microsoft and others which you create flow code to access. "PREMIUM" means additional charges are incurred.
   
   * Google Calendar, Tasks
   * GitHub
   * Slack
   * Salesforce
   * Box
   * ArgGIS
   * Coinbase
   * AccuWeather
   * UnixTimeStamp
   * etc.
   <br /><br />

1. Under Data, Connect to more than 500 data sources or any publicly available API.

1. Under <a href="#AIBuilder">"AI Builder"</a>, select "Build". Notice the hostname changes to:

   https://us.flow.microsoft.com/manage/environments/e77746a0-41e1-4543-9ec2-bc8732e6ad8b/aibuilder/build

   and "Models" and "Document automation".

   AI Build is NOT "pay as you go", but up-front. <a target="_blank" href="https://flow.microsoft.com/en-us/pricing/#add-on-plans">Microsoft charges</a> <strong>$150 per bot per month</strong>, which include 5,000 AI Builder service "credits".  Additional credits are $500 per month each.

1. <a target="_blank" href="https://docs.microsoft.com/en-us/power-automate/?utm_source=flow-sidebar&utm_medium=web">Learn</a> takes you to a <strong>separate tab</strong> containing documentation.


   ### Power Automate

   Expansion of items:

   Action Items:
   * Approvals
   * Business process flows
   <br /><br />

   Data:
   * Tables
   * Connections
   * Custom connectors
   * Gateways
   <br /><br />

   Monitor:
   * Cloud flow activity
   * Desktop flow runs
   * Desktop flow queues
   * Machines
   <br /><br />

   <a href="#AIBuilder">AI Builder</a>:
   * Build
   * Models
   * Document automation (preview)
   <br /><br />

   <a href="#ProcessAdvisor">Process advisor</a>:
   * Create
   * Processes
   <br /><br />


   <a name="ProcessAdvisor"></a>

   ### Process Advisor

   Process Advisor requires a "Premium" license.


   <a name="FlowTypes"></a>

   ### Flow Types

   "Cloud flows"
   * "instant" manually triggered by human action
   * automated event driven flows
   * scheduled to run at a particular day/time

   * Desktop flows (also called "RPA flows" for Windows 10 users)
   * Business Process flows (aka Guided multi-step flows controlling Microsoft's Dynamics 365 process)
   <br /><br />

   Microsoft charges $500/month for five flows used by an unlimited number of users.

   NOTE: Flows can be created using <strong>PowerAppsMaker</strong> templates.

   
   ## Install Desktop

   <img width="200" alt="power-automate-menu-21-12-16-400x1098" src="https://user-images.githubusercontent.com/300046/146581065-4b893450-8dae-4e23-952d-d16ddf0bd212.png">


   <a name="AIBuilder"></a>

   ### AI Builder

   Each Flow is processed by a <strong>bot</strong> (as in robot) created using "AI Builder".


   <a name="Licensing"></a>

   ## Licensing

   PROTIP: Know the cost implications of different Flow types at<br />
   <a target="_blank" href="https://flow.microsoft.com/en-us/pricing">https://flow.microsoft.com/en-us/pricing</a>

   "Power Automate Desktop is available to Windows 10 users at no additional cost" means that you can install it, but using it and creating "Flows" for others to run requires licensing.



   ### Social

   VIDEO: <a target="_blank" href="https://www.youtube.com/channel/UCgc3NEslE8oISOEawhcpMCA">Microsoft Power Platform YouTube channel</a>

1. Register for Microsoft's Power Automate user group:

   <a target="_blank" href="https://powerusers.microsoft.com/t5/Microsoft-Power-Automate/ct-p/MPACommunity">https://powerusers.microsoft.com/t5/Microsoft-Power-Automate/ct-p/MPACommunity</a>
   
   There are discussion threads for each Power component.

   QUESTION: Use for functional testing and performance testing?




1. Look at the marketing page about "Robotic Process Automation":

   <a target="_blank" href="https://flow.microsoft.com/en-us/robotic-process-automation/">flow.microsoft.com/en-us/robotic-process-automation</a>



   ### Get trial tenant account

1. Click "Start Free" at

   <a target="_blank" href="https://powerapps.microsoft.com/en-us/">https://powerapps.microsoft.com/en-us</a>

1. PROTIP: Only work or school account are allowed (no personal accounts) even for trial accounts.

1. Type your work email, Next, 


   ### Production site

1. PROTIP: Only work or school account are allowed (no personal accounts) to access:

   <a target="_blank" href="https://make.powerapps.com/">https://make.powerapps.com</a>

1. Choose your country/region and click "Get started".

   <img width="630" alt="powerapp-welcome" src="https://user-images.githubusercontent.com/300046/124976966-2a02c580-dfed-11eb-9dba-d62a66134ab5.png">

1. The Environment is at the upper-right.

   <a target="_blank" href="https://github.com/microsoftlearning/PL-900-Microsoft-Power-Platform-Fundamentals/blob/master/Instructions/Labs/LAB%5BPL-900%5D_M00Lab00_Setup.md">This lab describes how to create a new practice environment</a>.



   ### Portal

   something.powerappsportals.com

   Portal provisioning takes 30 to 45 minutes. 


### RPA or RDA?

Charles Lamanna's demo at Ignite Nov 19, 2019
https://www.youtube.com/watch?v=o8s1_qlzzd4

https://docs.microsoft.com/en-us/learn/modules/introduction-power-platform/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals

Microsoft Dataverse is a scalable data service and app platform which lets users securely store and manage data from multiple sources and integrate that data in business applications using a common data model to ensure ease and consistency to users. Microsoft Dataverse is the common currency that enables the components of Microsoft Power Platform to work together. It’s the foundation that enables the consolidation, display, and manipulation of data.

<strong>Connectors</strong> enable you to connect apps, data, and devices in the cloud. Among the more than 275 connectors are Salesforce, Office 365, Twitter, Dropbox, Google services, SharePoint, Outlook, and YouTube. Premium connectors require additional licensing SQL Server, Survey Monkey, and Mail Chimp. 

    <tt>All   Built-in   Standard   Premium   Custom   My clipboard</tt>

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/use-custom-connectors-in-powerapps-canvas-app/">DOCS</a>:
Custom connectors can be built to call a publicly available API, or a custom API hosted in a cloud provider.
Custom connectors can be used in Power Apps, Power Automate, and Azure Logic Apps.
Custom connectors can reference an OpenAPI definition or a Postman collection.

<strong>Power Apps</strong> provides a rapid <strong>low code</strong> development environment for building custom apps for business needs. It has services, connectors, and a scalable data service and app platform (Microsoft Dataverse) to allow simple integration and interaction with existing data. Power Apps enables the creation of web and mobile applications that run on all devices, but with a simple interface.

<strong>Power Automate</strong> is used to automate repetitive business processes such as communication, data collections, and decision approvals. 

<strong>Triggers</strong> are only used in Power Automate and prompt a flow to begin. Triggers can be time based, such as a flow which begins every day at 8:00 am, or they could be based off of an action like creating a new row in a table or receiving an email. You will always need a trigger to tell your workflow when to run.

<strong>Actions</strong> are used in Power Automate and Power Apps. Actions are prompted by the user or a trigger and allow interaction with your data source by some function. For example, an action would be sending an email in your workflow or app or writing a new line to a data source.

<strong>Power Virtual Agents</strong> is used to create chatbots using a guided, no-code graphical interface, without the need for data scientists or developers. It minimizes the IT effort required to deploy and maintain a custom solution by empowering subject matter experts to build and maintain their own conversational solutions. Power Virtual Agents is part of Microsoft Power Platform, therefore integration into existing systems is streamlined with out-of-the-box integration with Power Automate and its ecosystems of hundreds of connectors. Users can enable chatbots to perform an action by simply calling a Power Automate flow. Flows help users automate activities or call back end systems. Users can utilize existing flows that have been created in their Power Apps environment or they can create a flow within Power Virtual Agents authoring canvas.


<strong>Power BI</strong> (Business Intelligence) is a business analytics service that delivers insights for analyzing data. It can share those insights through data visualizations which make up reports and dashboards to enable fast, informed decisions. Power BI scales across an organization, and it has built-in governance and security allowing businesses to focus on using data more than managing it. 

You can consider Power BI as the analysis and insights leg of Microsoft Power Platform. It takes business data and allows you to display it in ways that makes the most sense to users. A Power BI dashboard could potentially replace a standing meeting to report out on company metrics such as sales data, progress against goals, or employee performance.

## RPA in a Day

https://flow.microsoft.com/en-us/blog/announcing-microsoft-rpa-in-a-day-version-2/

Microsoft's "RPA in a Day" is beginner-level hands-on training designed to on-board and train everyone, in a single day using UI flow. Microsoft Partners can deliver the content.


1. Download zip file "RPAinADay - Student.zip"

   https://aka.ms/RPAinaDayPackage

1. Expand it:

   <pre>|-- RPA\ in\ a\ Day\ -\ Release\ Notes.docx
|-- lab\ manuals\ in\ pdf
|   |-- Lab\ 1.1\ Prerequisite\ -\ Setup\ Tenant\ and\ environment.pdf
|   |-- Lab\ 1.2\ Prerequisite\ -\ Create\ a\ browser\ profile.pdf
|   |-- Lab\ 1.3\ Prerequisite\ -\ Install\ required\ software.pdf
|   |-- Lab\ 10\ Run\ the\ scenario\ in\ unattended\ mode.pdf
|   |-- Lab\ 11\ (Optional)\ Error\ handling.pdf
|   |-- Lab\ 12\ (Optional)\ Monitor\ desktop\ flow\ runs\ and\ manage\ gateway\ queue.pdf
|   |-- Lab\ 2\ How\ to\ generate\ insights\ to\ optimize\ and\ automate\ your\ process\ using\ process\ advisor.pdf
|   |-- Lab\ 3\ Create\ your\ first\ Power\ Automate\ Desktop\ flow.pdf
|   |-- Lab\ 4\ Use\ Input\ and\ Output\ Parameters.pdf
|   |-- Lab\ 5\ Use\ desktop\ flow\ in\ a\ cloud\ flow\ (create\ gateway,\ connection).pdf
|   |-- Lab\ 6\ Use\ Outlook\ email\ to\ trigger\ desktop\ flows\ and\ pass\ input.pdf
|   |-- Lab\ 7\ Add\ AI\ model\ to\ process\ invoice\ forms.pdf
|   |-- Lab\ 8\ Integrate\ with\ teams\ to\ get\ approval.\ E2E\ integration.pdf
|   `-- Lab\ 9\ Automate\ web\ scenario\ using\ Power\ Automate\ Desktop.pdf
|-- student\ lab\ data\ packages
|   |-- ContosoInvoicingSetup.exe
|   |-- ContosoInvoicingSetup.msi
|   |-- Lab\ #10\ email\ attachments\ to\ use\ for\ unattended
|   |   |-- Contoso_INVOICE_(Fabrikam_UK).jpg
|   |   |-- Contoso_INVOICE_(Litware_CAN).jpg
|   |   |-- Contoso_INVOICE_(Proseware_NY).jpg
|   |   |-- Contoso_INVOICE_(TailSpin).jpg
|   |   `-- Contoso_INVOICE_(WingTip).jpg
|   |-- Lab\ #2\ Solutions\ to\ import\ for\ process\ advisor
|   |   `-- RPAinadayProcessAdvisor-1-0-0-2.zip
|   |-- Lab\ #6,7,8,10\ email\ attachment\ to\ use
|   |   `-- newinvoice.JPG
|   |-- Lab\ #7\ Training\ Data\ for\ AI\ builder\ for\ lab\ #7
|   |   |-- Contoso_INVOICE_(Fabrikam_UK).pdf
|   |   |-- Contoso_INVOICE_(Litware_CAN).pdf
|   |   |-- Contoso_INVOICE_(Proseware_NY).pdf
|   |   |-- Contoso_INVOICE_(TailSpin).pdf
|   |   |-- Contoso_INVOICE_(WingTip).pdf
|   |   `-- newinvoice.JPG
|   |-- Lab\ #8\ Advanced\ Topic\ -\ Adaptive\ Cards\ code
|   |   `-- AdaptiveCard-lab8.json
|   `-- Lab\ #9\ excel\ file\ to\ use\ in\ Power\ Automate\ Desktop
|       `-- Contoso\ Invoices.xlsx
`-- ~$A\ in\ a\ Day\ -\ Release\ Notes.docx
   </pre>


Module 1: Overview and prerequisites

Module 2: Identify automation opportunities and process bottlenecks using process advisor

Module 3: Build your first Power Automate Desktop flow

Module 4: Use input and output parameters

Module 5: Trigger your Power Automate Desktop flow

Module 6: Integration with Outlook connector

Module 7: Use AI builder to process invoice forms

Module 8: Create approvals using Microsoft Teams connector and adaptive cards

Module 9: Web and Microsoft Excel automation using Power Automate Desktop

Module 10: (Optional) Run Power Automate Desktop flows in unattended mode

Module 11: (Optional) Enhanced error handling in Power Automate Desktop (new)

Module 12: (Optional) Monitor Desktop flow runs and manage gateway queues (new)




## PL-900 Certification Exam

https://docs.microsoft.com/en-us/learn/certifications/power-platform-fundamentals/#certification-exams
$99

https://docs.microsoft.com/en-us/learn/certifications/power-platform-fundamentals/
"Microsoft Certified: Power Platform Fundamentals"

https://github.com/MicrosoftLearning/PL-900-Microsoft-Power-Platform-Fundamentals
by chandler syal

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/power-plat-fundamentals/">
9 hour "Microsoft Power Platform Fundamentals"</a> to Learn the business value and product capabilities of Microsoft Power Platform. Create simple Power Apps, connect data with <a target="_blank" href="https://docs.microsoft.com/en-us/powerapps/maker/common-data-service/data-platform-intro#terminology-updates">Microsoft Dataverse</a> (formerly Common Data Service), build a Power BI Dashboard, automate a process with Power Automate, and build a chatbot with Power Virtual Agents.

* <a target="_blank" href="https://github.com/microsoftlearning/PL-900-Microsoft-Power-Platform-Fundamentals/blob/master/Instructions/Labs/LAB%5BPL-900%5D_M00Lab00_Setup.md">LAB[PL-900]_M00Lab00_Setup.md</a>

* <a target="_blank" href="https://github.com/microsoftlearning/PL-900-Microsoft-Power-Platform-Fundamentals/blob/master/Instructions/Labs/LAB%5BPL-900%5D_M02Lab01_Data_Modeling.md">LAB[PL-900]_M02Lab01_Data_Modeling.md</a>

* <a target="_blank" href="https://github.com/microsoftlearning/PL-900-Microsoft-Power-Platform-Fundamentals/blob/master/Instructions/Labs/LAB%5BPL-900%5D_M03Lab01_Canvas_App_1.md">LAB[PL-900]_M03Lab01_Canvas_App_1.md</a>

* <a target="_blank" href="https://github.com/microsoftlearning/PL-900-Microsoft-Power-Platform-Fundamentals/blob/master/Instructions/Labs/LAB%5BPL-900%5D_M03Lab02_Canvas_App_2.md">LAB[PL-900]_M03Lab02_Canvas_App_2.md</a>

* <a target="_blank" href="https://github.com/microsoftlearning/PL-900-Microsoft-Power-Platform-Fundamentals/blob/master/Instructions/Labs/LAB%5BPL-900%5D_M03Lab03_Model_App.md">LAB[PL-900]_M03Lab03_Model_App.md</a>

* <a target="_blank" href="https://github.com/microsoftlearning/PL-900-Microsoft-Power-Platform-Fundamentals/blob/master/Instructions/Labs/LAB%5BPL-900%5D_M03Lab04_Portal_App.md">LAB[PL-900]_M03Lab04_Portal_App.md</a>

* <a target="_blank" href="https://github.com/microsoftlearning/PL-900-Microsoft-Power-Platform-Fundamentals/blob/master/Instructions/Labs/LAB%5BPL-900%5D_M04Lab01_Power_Automate.md">LAB[PL-900]_M04Lab01_Power_Automate.md</a> to send an email.

* <a target="_blank" href="https://github.com/microsoftlearning/PL-900-Microsoft-Power-Platform-Fundamentals/blob/master/Instructions/Labs/LAB%5BPL-900%5D_M05Lab01_Power_BI.md">LAB[PL-900]_M05Lab01_Power_BI.md</a>

* <a target="_blank" href="https://github.com/microsoftlearning/PL-900-Microsoft-Power-Platform-Fundamentals/blob/master/Instructions/Labs/LAB%5BPL-900%5D_M06Lab01_PVA.md">LAB[PL-900]_M06Lab01_PVA.md</a>

<hr />

## PL-100 App Maker

https://github.com/MicrosoftLearning/PL-100-Microsoft-Power-Platform-App-Maker

## PL-200 Functional Consultant

https://github.com/MicrosoftLearning/PL-200-Power-Platform-Functional-Consultant

   * LAB[PL-200]_M00L00_Validate_Lab_Environment.md
   * LAB[PL-200]_M03L01_Create_an_app.md
   * LAB[PL-200]_M03L02_Create_entities.md
   * LAB[PL-200]_M03L03_Create_relationships.md
   * LAB[PL-200]_M03L04_Additional_entity.md
   * LAB[PL-200]_M04L01_App_Designer.md
   * LAB[PL-200]_M04L02_Modify_forms.md
   * LAB[PL-200]_M04L03_Modify_views.md
   * LAB[PL-200]_M04L04_Build charts.md
   * LAB[PL-200]_M04L05_Build_dashboard.md
   * LAB[PL-200]_M04L06_Build_Canvas.md
   * LAB[PL-200]_M04L07_Work_with_data.md
   * LAB[PL-200]_M04L08_UX.md
   * LAB[PL-200]_M05L01_Users.md
   * LAB[PL-200]_M05L02_Security_roles.md
   * LAB[PL-200]_M05L03_Business_rule.md
   * LAB[PL-200]_M05L04_Adv_Business_Rules.md
   * LAB[PL-200]_M05L05_Flow.md
   * LAB[PL-200]_M05L06_Approval_flow.md
   * LAB[PL-200]_M05L07_BPF.md
   * LAB[PL-200]_M05L08_Branching_BPF.md
   * LAB[PL-200]_M06L01_PVA.md
   * LAB[PL-200]_M07L01_Bulk_Delete.md
   * LAB[PL-200]_M07L02_Word_template.md
   * LAB[PL-200]_M07L03_Excel_template.md
   * LAB[PL-200]_M07L04_Duplicate.md
   * LAB[PL-200]_M07L05_Import_data.md
   * LAB[PL-200]_M07L06_Export_data.md


## PL-400 Developer

https://github.com/MicrosoftLearning/PL-400_Microsoft-Power-Platform-Developer


## PL-600 Solution Architect

https://github.com/MicrosoftLearning/PL-600-Microsoft-Power-Platform-Solution-Architect


* <a target="_blank" href="https://github.com/MicrosoftLearning/PL-600-Microsoft-Power-Platform-Solution-Architect/blob/master/Instructions/Labs/Lab00%5BPL-600%5DSetup_ALM.md">Lab00[PL-600]Setup_ALM.md</a>

* <a target="_blank" href="https://github.com/MicrosoftLearning/PL-600-Microsoft-Power-Platform-Solution-Architect/blob/master/Instructions/Labs/Lab01%5BPL-600%5D_ALM.md">Lab01[PL-600]_ALM.md</a>

* <a target="_blank" href="https://github.com/MicrosoftLearning/PL-600-Microsoft-Power-Platform-Solution-Architect/blob/master/Instructions/Labs/Lab02%5BPL-600%5D_APP.md">Lab02[PL-600]_APP.md</a>

* <a target="_blank" href="https://github.com/MicrosoftLearning/PL-600-Microsoft-Power-Platform-Solution-Architect/blob/master/Instructions/Labs/Lab03%5BPL-600%5D_RPA.md">Lab03[PL-600]_RPA.md</a> using Power Automate Desktop to automate "Security Sweep Flow" on a legacy Windows app.



<a name="Dataverse"></a>

## Microsoft Dataverse

https://docs.microsoft.com/en-us/learn/modules/introduction-common-data-service/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals


<a name="PowerApps"></a>

## Power Apps

https://docs.microsoft.com/en-us/learn/modules/introduction-power-apps/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals


### Power Apps Portals

https://docs.microsoft.com/en-us/learn/modules/introduction-power-apps-portals/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals


<a name="CanvasApps"></a>

## Canvas Apps

https://docs.microsoft.com/en-us/learn/modules/build-app-solution/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals


<a name="Model-driven"></a>

## Model-driven app

https://docs.microsoft.com/en-us/learn/modules/how-build-model-driven-app/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals

<a name="PowerAutomate"></a>

## Power Automate

<a target="_blank" href="https://www.youtube.com/watch?v=CdXBL7CfwVE" title="Sep 28, 2020">
VIDEO: Cartoon illustration of what Power Automate Flow can do with API connectors: 
   1. Recognize a new Twitter follower
   2. Sends a nice reply
   3. Adds the name ot a spreadsheet
   4. Email the spreadsheet to you
   5. Adds spreadsheet contents to Salesforce or Dynamics 365 CRM.
   <br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=H4H_jPJWlxU&t=20s">
Microsoft Power Automate overview</a>

<a target="_blank" href="https://www.youtube.com/watch?v=aU6I5ZQSQgg" title="Sep 24, 2020">
Power Automate Desktop - Invoice Processing</a>
Microsoft Power Platform

<a target="_blank" href="https://www.youtube.com/watch?v=4ZnI0_atYUo">
Power Automate Approval Workflow Basics</a>
Reza Dorrani

by Jon Levesque
   * <a target="_blank" href="https://www.youtube.com/watch?v=GMk7xe3-9zc">
   Microsoft Power Automate Introduction </a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=5000Kw7aIRc">
   Microsoft Power Automate Tutorial - Flow + Forms + Teams = Awesome</a>
   <br /><br />

https://www.youtube.com/watch?v=8O68-cc-QNo
Top 25 Power Automate flow tips and tricks for 2021 - hidden gems and new features
by Reza Dorrani

https://docs.microsoft.com/en-us/learn/modules/introduction-power-automate/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals

on <a target="_blank" href="https://www.youtube.com/channel/UCgc3NEslE8oISOEawhcpMCA">Microsoft Power Platform YouTube channel</a>


<hr />

<a name="WindowsDesktop"></a>

## Windows Desktop

1. Install Power Automate Desktop
1. Define steps 
1. Record
1. Replace text with variables
<br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=IQ_KpBC8fwo">
VIDEO: How to use Microsoft Power Automate Desktop - Full tutorial</a>
Feb 9, 2021 by Kevin Stratvert

<a target="_blank" href="https://www.youtube.com/watch?v=aU6I5ZQSQgg&list=RDCMUCgc3NEslE8oISOEawhcpMCA&start_radio=1&rv=aU6I5ZQSQgg&t=571">VIDEO: Power Automate Desktop - Invoice Processing</a>


### Workflow Automate Auzure itself

1. Login
1. Open Power BI Desktop
1. Click Performance Analyzer
1. Collect metrics and save it to historical data.
1. Display metrics with historical data.

https://docs.microsoft.com/en-us/learn/modules/build-automated-solution/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals

## Power Virtual Agents

https://docs.microsoft.com/en-us/learn/modules/introduction-power-virtual-agents/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals

### Chatbot with Power Virtual Agents

https://docs.microsoft.com/en-us/learn/modules/how-build-basic-chatbot/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals

https://www.youtube.com/watch?v=nWxguR5B5-s
How to Build (automated, no code) Chatbots with Microsoft Power Virtual Agents
Microsoft Mechanics


## Power BI

https://docs.microsoft.com/en-us/learn/modules/introduction-power-bi/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals

https://www.youtube.com/watch?v=DRfxM6B62Gw
Python in Power BI 2018

## Dashboard

https://docs.microsoft.com/en-us/learn/modules/build-simple-dashboard/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&epi=je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=(ir__90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00)(7593)(1243925)(je6NUbpObpQ-omnFLFQ1IfYU4qFyOjDc9A)()&irclickid=_90rmzhneiskfqkx0y92ssxlp0v2xubjcvz0m2puv00&ns-enrollment-type=LearningPath&ns-enrollment-id=learn-bizapps.wwl.power-plat-fundamentals



<a name="Social"></a>

## Social

<a target="_blank" href="https://powerusers.microsoft.com/t5/Microsoft-Power-Automate/ct-p/MPACommunity">
Microsoft's Power Automate Community</a>


## Videos Referenced

<a target="_blank" href="https://www.youtube.com/watch?v=8O68-cc-QNo&list=RDCMUCvBYTqRx-n_8KzFO0MJlUVw&start_radio=1&rv=8O68-cc-QNo">
Top 25 Power Automate flow tips and tricks for 2021 - hidden gems and new</a>
by Reza Dorrani

<a target="_blank" href="https://www.youtube.com/watch?v=SUsik0FGzI0&list=RDCMUCJtUOos_MwJa_Ewii-R3cJA&start_radio=1&rv=SUsik0FGzI0" title="Feb 16, 2021">
Learn to Use Power Automate with Examples | Create Bulk PDF Files | Planner to Outlook</a>
Leila Gharani


## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
