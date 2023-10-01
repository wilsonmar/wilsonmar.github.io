---
layout: post
date: "2023-05-10"
file: "outsysstems"
title: "Outsystems"
excerpt: "Generate feature-rich web and mobile apps using low-code running within a full suite of enterprise-grade utilities and services"
tags: [cloud, azure, C#]
image:
# outsystems-1900x500.png
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1696048723/outsystems-1900x500_tmk6el.png
  credit: Outsystems
  creditlink: https://www.outsystems.com/evaluation-guide/development-and-management-tools/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Technical Architecture

<a target="_blank" href="https://www.linkedin.com/in/joaomiguelneves/">Joao Neves</a>, VP of Engineering at Outsystems, says that Outsystems is a "<strong>low-code</strong> platform for building enterprise-grade web and mobile apps that help you get the job done faster. It generates feature-rich web and mobile apps using low-code running within a full suite of enterprise-grade utilities and services."

<a target="_blank" href="https://www.youtube.com/watch?v=XR4n9fq1wJM">VIDEO</a> Outsystems Demo (of version  9.1 Bali 2016) by <a target="_blank" href="https://www.linkedin.com/in/pedrovcmoliveira/">Pedro Oliveira</a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696043554/outsystems-arch-1152x720_okgood.jpg"><img alt="outsystems-arch-1152x720.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696043554/outsystems-arch-1152x720_okgood.jpg"></a>

Outsystems runs web and mobile apps as .NET DLLs on Windows-based servers within their private cloud (as PaaS like Salesforce) or on-prem servers. 

However, apps can be developed on Windows, Linux, and macOS laptops. 


## Why it's a big deal

Its "low code" approach enables enterprises to <strong>hire less people</strong> --
not only because Outsystems generates a lot of the code 
but also because back-end and operational features are already operational.

### Dev processes

Adopting Outsystems is like inheriting a mature organization where people have settled in what to call things and how to do things a particular way, such as the job roles and when they participate<a target="_blank" href="https://learn.outsystems.com/training/journeys/devops-659/project-timebox-overview/o11/780">:</a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696120691/outsystems-whowhat-1276x571_xme8u4.png"><img alt="outsystems-whowhat-1276x571.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696120691/outsystems-whowhat-1276x571_xme8u4.png"></a>

Outsystems provides free video classes and written docs describing its processes and tools.

Because a lot of what is necessary is built-in to the tool, theree is <strong>less waste time wasted arguing</strong> about the <a target="_blank" href="https://success.outsystems.com/documentation/11/developing_an_application/">application lifecycle</a>: what framework to use, <a target="_blank" href="https://learn.outsystems.com/training/journeys/devops-659/ci-cd-with-outsystems/o11/2436">what CI/CD</a> to use, naming conventions, what logging, metrics, KPIs, what is a higher priority, etc. Helpful automation bakes in for all users the terminology and methodology for going to production: 

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696067986/outsystems-phases-1724x880_p9lngu.png"><img alt="outsystems-phases-1724x880.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696067986/outsystems-phases-1724x880_p9lngu.png"></a>

   * DoR = Definition of Ready
   * DoD = Definition of Done
   * Within each sprint: Shape -> Build -> Accept
   * Changesets
   * CRs = Change Requests.
   <br /><br />

Outsystems CI (Continuous Integration) <strong>assumes</strong> a process which other shops can take years to instill among developers:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696070702/outsystems-ci-1486x548_df7tvn.png"><img alt="outsystems-ci-1486x548.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696070702/outsystems-ci-1486x548_df7tvn.png"></a>

   * DEV = Development environment (contains mocks)
   * QUA = Quality Assurance environment
   * REG = Regression Testing suite (running in the QUA environment)
   * ACC = Acceptance Testing suite (running in the QUA environment)
   * PRE = Pre-production environment
   * PRD = Production environment
   <br /><br />
   
Because the language and framework are the same in all shops, new developers can more quickly pick up where the last one left off.

The Outsystems platform is instrumented, by default, to (asynchronously) collect runtime logs, errors, audit and performance events for <a target="_blank" href="https://www.outsystems.com/evaluation-guide/monitoring-and-analytics/">monitoring trend analytics visualiation</a>: Users connected, Hits/Hour, Errors/Hour, CPU, Memory, Disk, etc. It's also used for debugging and troubleshooting.

So Outsystem customers' IT workforce consists largely be those who can be <strong>near end-users</strong> and focus on the business logic and user experience. There is less need for IT management and specialist "Developer Platform builders".

Outsystems customers don't have to find experts in bleeding-edge technologies such as AI because Outsystems had the foresight to have already been innovating it.

It's not just about programming skill sets, to include "citizen developers" who do not program full time.

This also means that the IT workforce can be <strong>more diverse</strong> and closer to end-users.

All the above enables faster development of new applications:
   * Traditional web apps are for older browsers.
   * Reactive (HTML5) web apps adapt to different screen sizes and across devices. 
   * Mobile iPhone & Android native apps can be used offline, NOT as a PWA app.
   <br /><br />

https://itnext.io/management-of-the-outsystems-platform-useful-or-necessary-c13de3a6c413


## Jobs to Roles and Certifications

* <a target="_blank" href="https://www.outsystems.com/community/jobs/?q=&c=&t=&l=&r=&w=&s=">Outsystems Job Board</a> lists jobs at partners and customers, worldwide.

PROTIP: Jobs posted often align with names of the <a target="_blank" href="https://learn.outsystems.com/training/decision/guided-paths">17 professional certifications</a> offered  by OutSystems (as of OutSystems 11):

$100, 90-minutes exams:

* Front-end Developer Specialist
* Web Developer Specialist
* Mobile Developer Specialist 60 minutes
* Security Specialist

$200, 120-minute exams:

* Associate Developer (ODC = OutSystems Developer Cloud)
* Associate Reactive Developer

* Architecture Specialist

* Professional Web Developer
* Professional Mobile Developer
* Professional Platform Ops Engineer
* Professional DevOps Engineer

* Associate Traditional Web Developer
* Professional Traditional Web Developer
* Expert Traditional Web Developer

* OutSystems Certified Trainer
<br /><br />


## Outsystems The Company

<a target="_blank" href="https://www.glassdoor.com/Reviews/OutSystems-Reviews-E642590.htm">79% of employees would recommend the company to a friend</a> -- high among all employers.

"One of the fastest-growing B2B software companies in the world,"

Among the Forbes top cloud computing employers four years in a row.

Outsystems' website at <a target="_blank" href="https://www.outsystems.com/">outsystems.com</a>
lists the company at 55 Thomson Place, 2nd Floor, Boston, MA 02210 Tel: +1 617 837 6840

On https://www.linkedin.com/company/outsystems/
Outsystems lists jobs in Lisbon, Portugal and Bengaluru, Karnataka, India

The company was founded in 2001 by current CEO (Stanford graduate) <a target="_blank" href="https://www.linkedin.com/in/paulorosado/">Paulo Rosado</a>.
https://www.outsystems.com/blog/posts/interaction-design-team/

His "The Small Book of the Few Big Rules"

   * We grow, change, and innovate, and give our teams the space to be proactive and creative. 
   * We care about growth and development. Vertical career progression is obvious, and we also encourage lateral moves, joining different teams, and mastering new skills. 
   * Global colleagues who are as smart, hardworking, and driven as you. 
   * Our DNA is disrupting the status quo. It is why our company exists. 
   * We “Ask Why” a lot. It helps us connect our individual work to the bigger picture and often uncovers a better, more agile way. 
   <br /><br />

The company was a pioneer in transitioning to working in C# on macOS laptops and Linux servers.

? 1,500 employees in 17 countries.

? 1,200 customers in 60 countries.

? 350 partners in 55 countries.

   * https://indigo.pt/outsystems-low-code

? 350,000 community members.

? 1,000,000 downloads of its free version.

? 1,000,000 apps built with Outsystems.

? 1,000,000,000 end-users of apps built with Outsystems.

? 11,000,000,000 transactions per month.

? 1,000,000,000,000 USD in transactions per year.

? 1,000,000,000,000 USD in revenue per year.

Their <a target="_blank" href="https://www.outsystems.com/community/jobs/?q=&c=&t=&l=&r=&w=&s=">Job Board</a> lists jobs worldwide.

## Competition

Here we compare the 2019 vs. 2023 ratings by Forrester:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> 2019 </th><th> 2023 </th></tr>
<tr valign="top" align="center"><td><a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696072129/outsystems-forrester-2019_ugm38x.png"><img alt="outsystems-forrester-2019.png" width="300" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696072129/outsystems-forrester-2019_ugm38x.png"></a>
</td><td>
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696072139/outsystems-forrester-2023_ixyqzf.png"><img alt="outsystems-forrester-2023.png" width="300" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696072139/outsystems-forrester-2023_ixyqzf.png"></a>
</td></tr></table>
<em>Click on image to enlarge</em>

<a target="_blank" href="https://www.outsystems.com/evaluation-guide/low-code-platforms/">Outsystems' own comparison</a> with other low-code platforms:

Like Outsystems, Salesforce is a PaaS. But Salesforce is more expensive and overly complex.

Microsoft's PowerApps is a SaaS (browser-based). But PowerApps is more expensive and overly complex.

ServiceNow has gained in favor with Forrester.

Mendix is a PaaS and more a direct competitor?


## Pricing

Outsystems charges $1,135/month for up to 3 apps in production.

A 30-day trial edition is available for temporary access to a production environment.

In documentation, "O11" means Outsystems 11, the paid version.


### ODC (Outsystems Developer Cloud)

In documentation, "ODC" means Outsystems Developer Cloud, the free version.

Outsystems removes barrier to entry for learning, and creates a large community of developers around the world on their free ODC (Outsystems Developer Cloud) edition.

ODC is a single-user environment used to develop and deploy web applications that access data in the cloud.

<a target="_blank" href="https://www.youtube.com/watch?v=3ZE1Sw1gshY&list=PLxALhSwsaivzR0SyCo_LHhDvOARPtZPi6&index=2&t=2m37s">VIDEO</a>: Using a link in their own URL-shortener service, <a target="_blank" href="https://outsyste.ms/DecodedCC/">outsyste.ms/DecodedCC Personal Edition</a> is a free single-developer single application for less than 10 users, on ________.outsystemscloud.com.


## Toolset

<a target="_blank" href="https://www.youtube.com/watch?v=B11E20BUVPE&list=RDCMUCB9wCEaf_7iKRCXTDbxRxlA&index=2">VIDEO</a>: 
Outsystem's <a target="_blank" href="https://www.outsystems.com/evaluation-guide/development-and-management-tools/">tooling components</a>:

* <strong>Platform Server</strong> is the server component that runs the application stack visible to end-users. It runs on Windows Server, Linux, or macOS. It is a .NET application that manages the application stack and provides services such as authentication, <a target="_blank" href="https://learn.outsystems.com/training/journeys/devops-659/monitoring-web-and-mobile-applications/o11/2457" title="by Pedro Coelho">monitoring</a> of logging and security, and user management. It also schedules tasks at specific times from a queue.

   Each environment has its own Platform Server.

   The Platform Server is managed by a web-based application "LifeTime".

* <strong>LifeTime</strong> automates DevOps processes to enable a centralized management of authentication permissions and deploys within <strong>environments</strong> from development to QA and production —- on the cloud or on-premises. LifeTime performs dependency analysis across environments to generate an <a target="_blank" href="https://success.outsystems.com/documentation/11/managing_the_applications_lifecycle/manage_technical_debt/change_the_impact_level_of_a_code_pattern_on_your_technical_debt/">impact analysis</a> how a version deployment might affect applications. 

   All applications built with OutSystems are automatically instrumented to collect runtime monitoring information. So, with LifeTime, it is possible to monitor the performance of apps and take action even before users notice an application is slow.

* <strong>Experience Builder</strong> is a drag-and-drop tool to create <strong>prototypes</strong> of the user experience (UX) of the application. A prototype is a mock-up of the application's UI, which can be used to gather feedback from end-users and stakeholders.

* <a href="#ServiceStudio"><strong>Service Studio</strong></a> is the drag-and-drop IDE for creating the application stack: the data model, application logic, UI, business process flows, integrations, and security policies. Its <a target="_blank" href="https://www.outsystems.com/low-code-platform/architecture-dashboard/">AIFusion</a> uses machine learning from all customers to suggest next steps, auto-fill fields, and search for answers to "how-to" questions and other information -- within the IDE.

* <strong>Workflow Builder</strong> is a drag-and-drop tool used by business experts, analysts, and process owners to define the business logic of their application and create <strong>business process flows</strong> which can be evolved in Service Studio.

* <a target="_blank" href="https://www.outsystems.com/forge/list?q=&t=&o=most-popular&tr=False&oss=False&c=%20&a=&v=&hd=False&tn=&scat=forge"><strong>Forge</strong></a> is the marketplace of reusable <a target="_blank" href="https://www.outsystems.com/evaluation-guide/how-is-software-in-the-forge-licensed/">BSD-licensed</a> open-source and proprietary components that can be included in applications built with OutSystems. It is a marketplace of entire applications, components, connectors and templates created by OutSystems and its developer community.

   PROTIP: Using other developers' components not only minimizes errors and testing efforts, but also saves time otherwise spent arguing about decisions incorporated in the example.

* <strong>Integration Studio</strong> is used to create components that integrate with third-party systems and microservices. Developers use Visual Studio to code integration components with a standard .NET C# compiler. The generated DLLs are sent to the Platform Server.

* <strong>Service Center</strong> provides an operational console to manage the Platform Server and the deployment of applications to different environments (Dev, QA, Prod). It is used to manage:

   * Batch job scheduling
   * Taking applications offline and online
   * Configuring environment-wide and application-specific properties, web service end-points, and <a target="_blank" href="https://learn.outsystems.com/training/journeys/devops-659/setting-up-a-db-connection-demo/o11/750">database connections</a>
   * Reverting to a previous version of the application
   <br /><br />

* <strong>Architecture Dashboard</strong> provides an integrated, bird’s eye "heat map" view of <strong>technical debt</strong> across an organization’s entire portfolio of applications and the interdependencies between modules. It automatically classifies module, then performs code and runtime analysis and recommends solutions for improving the performance, security, architecture, and user experience of applications. It produces detailed reports on what best practices are being violated, their impact, and how to fix them. Its guided refactoring capability identifies opportunities for refactoring and code duplication.


<hr />

## Integration Builder

Surface data from enterprise systems like SAP ERPs and Salesforce CRM, etc. for use accross OutSystems applications. 

* <a target="_blank" href="https://success.outsystems.com/documentation/11/extensibility_and_integration/create_connectors_with_integration_builder/">Tutorial</a>

* <a target="_blank" href="https://integrationbuilder.outsystems.com/Authentication/Login">https://integrationbuilder.outsystems.com/Authentication/Login</a>

<hr />

<a name="ServiceStudio"></a>

## Service Studio IDE

1.  The <a target="_blank" href="https://www.outsystems.com/Portal/Trial_Portal">304 MB download</a> for macOS is not available via HomeBrew. So you'll have to manually drag the 755 MB ServiceStudio.app into your /Applications folder.

    * <a target="_blank" href="https://learn.outsystems.com/training/journeys/web-developer-662/service-studio-overview/o11/2347">VIDEO</a> Service Studio Overview
    <br /><br />

    TODO: A Selenium script to open the IDE and click on the "Sign In" button?

1.  PROTIP: For quick access, in macOS Finder to folder /Applications, drag the ServiceStudio.app to the Dock at the edge.

1.  On initial opening, enter your macOS password and press "Always Allow" to pop-up modal message "Service Studio wants to use your confidential information stored in "Chromium Safe Storage" in your keychain.

1.  Login using your Outsystems account email and password.

    <strong>WARNING: The IDE requires constant connection to Outsystems' server. It was not designed to work offline.</strong>

1.  At the upper-right of the IDE is a "tab" to reach each layer. Click on it for the <strong>"widgets"</strong> and toolbox associated with that layer:

    <img alt="outsystems-ide-235x62.png" width="235" height=62" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696147217/outsystems-ide-235x62_vvwluy.png">

    This numbering is my usual order of creation:

    1. <a href="#Data"><strong>Data</strong></a> is where the <strong>data model</strong> of the application is defined: Entity Diagrams, Database Entitiels, In-memory Structures, Client Variables, Site Properties, Resources (images, documents, etc.), and Extensions (integrations with external systems).

    2. <a href="#Processes"><strong>Processes</strong></a> is where the user's workflow steps are defined.

    3. <a href="#Logic"><strong>Logic</strong></a> is where business logic of the application is defined: Client Actions, Server Actions, Integrations to SOAP/APIs, Roles, Exceptions (Security policies)

    4. <a href="#Interface"><strong>Interface</strong></a> is where the user interface (UI) of the application is defined: UI Flows, Images, Themes (base look an feel), Scripts for client-side logic, and Styles for CSS.

1.  PROTIP: Having several monitors plugged in helps with productivity.



<hr />

<a name="Data"></a>

## Data Layer

Physical databases can be defined in the IDE.

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Outsystems Entity </th><th> SQL database </th></tr>
<tr valign="top"><td> Entity </td><td> Table </td></tr>
<tr valign="top"><td> Attributes </td><td> Columns (Data Types) </td></tr>
<tr valign="top"><td> Id </td><td> Primary Key </td></tr>
<tr valign="top"><td> Reference Attribute </td><td> Foreign Key </td></tr>
<tr valign="top"><td> Index </td><td> Index </td></tr>
<tr valign="top"><td> Record or Instance </td><td> Row or Tuple </td></tr>
</table>

A sample Entity Schema:<br />
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696152238/outsystems-entities-606x536_qttb0h.png"><img alt="outsystems-entities-606x536.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696152238/outsystems-entities-606x536_qttb0h.png"></a>

Data types (such as Integer) are automatically inferred from Entity names entered (such as  "Id" or "Number").

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1696148883/outsystems-ide-451x100_zszwdm.png"><img alt="outsystems-ids-layers-451x100.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1696148883/outsystems-ide-451x100_zszwdm.png"><br /><em>Click on image to enlarge</em></a>

Entity actions: Create, Get (Read), Update, Delete (not quite CRUD)

<a target="_blank" href="https://learn.outsystems.com/training/journeys/mobile-developer-679/demo-how-to-create-a-static-entity/o11/416">Static Entities</a> are a predefined list of records (like an enumeration). Static means values cannot be changed. Attributes (such as color) can be added.


### Databases supported

Each logical database connection is a separate "Extension" for which is a C#z DLL.

Sample apps use Microsoft's "Northwind" database.

<a target="_blank" href="https://learn.outsystems.com/training/journeys/mobile-developer-679/demo-how-to-bootstrap-entity-data-from-excel/o11/392">Entity Data</a> and <a target="_blank" href="https://learn.outsystems.com/training/journeys/mobile-developer-679/demo-how-to-bootstrap-entities-and-data-from-excel/o11/396">Entities and Data</a> can be <a target="_blank" href="https://learn.outsystems.com/training/journeys/mobile-developer-679/data-modeling-exercise/o11/432">bootstraped from an Excel spreadsheets</a>.

Interaction with external databases (over the internet) uses SQL queries to a relational database.
Outsystems enables connection to:

   * SQL Server / Azure SQL Database
   * Oracle
   * iDB2
   * MySQL
   <br /><br />

   Outsystems does not support NoSQL databases such as MongoDB or Cassandra.

* GraphQL API - have GraphQL schema specification?

   CAUTION: Outsystems does not have native connection with GraphDB (Neo4j). But one can venture to create a connection like the PostGreSQL database using the SDK: https://www.outsystems.com/forums/discussion/14992/the-postgresql-database-connector-by-ardoric/
   * https://www.outsystems.com/forums/discussion/75623/how-to-connect-outsystems-with-neo4j/

<hr />

<a name="Processes"></a>

## Processes

<hr />

<a name="Logic"></a>

## Logic (Business Logic)

In logic flows that run on screen, client, or server are individual "Actions".
Only server actions can be called from other actions and have output parameters.

<hr />

<a name="#Interface"></a>

## Interface (UI)

<a target="_blank" href="https://learn.outsystems.com/training/journeys/mobile-developer-679/using-widgets-exercise/o11/585">widgets</a> are the building blocks of the user interface (UI) of the application.


## APIs supported

Please confirm:

* REST API - have Swagger/OpenAPI specification?
* SOAP API - have WSDL specification?

* gRPC API - have protobuf specification?
* Kafka API - have Kafka schema specification?
* AMQP API - have AMQP schema specification?
* MQTT API - have MQTT schema specification?
* WebSockets API - have WebSockets schema specification?
* WebHooks API - have WebHooks schema specification?
* OData API - have OData schema specification?

* XML API - have XML schema specification?
* JSON API - have JSON schema specification?
* CSV API - have CSV schema specification?


## Internals

The C# language is used to generate code.

Outsystems started out with Windows Server and SQL Server, but created C#
for transitioning to support Linux and Oracle on macOS laptops.

1.  The IDE is called "Service Studio".

1.  Publishing involves an XML file sent to the Platform Server. It's then compiled into DLL files.

    Outsystems creates static native mobile apps which require update within the app store.
    Many users delay updating their apps.
    
    CAUTION: Outsystems are NOT like apps which can be updated without going through the app store.

1.  The Platform Server is a .NET application.

    Platform Services include: Authentication, Logging, Monitoring, Security, and User Management.
    Scheduling of tasks at specific times from a queue.

1.  Different environments are stood up without hassle. 

    Mobile Application Build Service (MABS) is used to build mobile apps for iPhone and Android phones.

1.  Web and mobile application executables are generated and deployed by the Platform Server component.

    The LifeTime too manages the deployment of applications to different environments (Dev, QA, Prod).


   * https://www.slideshare.net/OutSystemsNeo/introduction-to-outsystems-architecture-aug-07-2021


## Architecture Canvas process

1. Organize
2. Assemble (rather than Develop or Plan)
3. Disclose

Keep concepts with different lifecycles apart.

pip install outsystems-pipeline


## Logging

Depending on the version:

* Errors — errors that have occurred in the system or in the applications

* General — several matters that take place in the system, such as removed items and slow queries that appears

* Integrations — all incoming and outgoing API calls

* Mobile Apps — all traffic to and from a mobile App is showed here

* Environment Health — provides the status of the main functions of the platform

* Security — specifies the security issues that have occurred

* Service Actions — gives messages about the REST-based request within the platform



## Versions

<a target="_blank" href="https://success.outsystems.com/support/release_notes/">https://success.outsystems.com/support/release_notes/</a>

   * Microsoft .NET Framework 4.8 (supported since Platform Server 11 – Release Oct.2019 CP2) or Microsoft .NET Framework 4.7.2
   * Microsoft Build Tools 2015
   * .NET Core 3.1 Runtime & Hosting Bundle for Windows
   <br /><br />

## Naming Conventions

* MTh = Mobile Theme

<hr />

## Alexa app



<hr />

## References


<hr />

<a name="More"></a>

## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
