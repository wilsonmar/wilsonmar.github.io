---
layout: post
date: "2024-03-08"
file: "microsoft-fabric"
title: "Microsoft Fabric"
excerpt: "Simplify multi-cloud data handling for real-time analytics in Delta Lakehouses. Pass the DP-600 exam."
tags: [cloud, Azure]
image:
# microsoft-fabric-1900x500.png
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1701058121/microsoft-fabric-1900x500_sd6pku.png
  credit: Microsoft Azure
  creditlink: https://www.softwebsolutions.com/resources/benefits-and-features-of-microsoft-fabric.html
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

With this article, I aim to get you past the vapid marketing generalizations and mind tricks with
this hands-on technical tutorial that takes you logically step-by-step to quickly learn how to setup, navigate, and use the <strong>Microsoft Fabric</strong> cloud and pass <a href="https://wilsonmar.github.io/azure-certifications/">Azure certification exam</a>

   * <a href="#DP-600">DP-600: Fabric Analytic Engineer Associate</a>
   <br /><br />

{% include whatever.html %}

BTW, don't confuse Microsoft Fabric with "Azure Service Fabric" (a distributed systems platform that makes it easy to package, deploy, and manage scalable and reliable microservices and containers.)

Let's dive right into the Microsoft Fabric working portal GUI:

<a name="Diagram"></a>

## Architecture Diagram

PROTIP: I adapted <a target="_blank" href="https://7451111251303.gumroad.com/l/fkrvnn" title="Available for purchase">the diagram below</a> from <a target="_blank" href="https://www.youtube.com/watch?v=J4i5lcROJcs">VIDEO</a>: The best 38-minute summary by <a target="_blank" href="https://linkedin.com/in/">Will Needham</a>, <a target="_blank" href="https://learn.microsoft.com/en-in/fabric/get-started/microsoft-fabric-overview">Microsoft</a>, and <a target="_blank" href="https://adatis.co.uk/microsoft-fabric-announcement-accelerate-your-data-potential/">others</a> to show, all in one page, relationships among key technology components in Microsoft Fabric:
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1708487536/ms-fabric-arch-240219-1920x1080_cupx3o.png"><img alt="ms-fabric-arch-240219-1920x1080.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1708487536/ms-fabric-arch-240219-1920x1080_cupx3o.png"><br /><em>Click for full-size image</em></a>.

Starting from the bottom:
Microsoft Fabric competes with <a target="_blank" href="https://wilsonmar.github.io/snowflake/">Snowflake and <a target="_blank" href="https://wilsonmar.github.io/databricks/">Databricks</a>, who pioneered the use of "Medallion" data processing into Parquet-formatted files which enables "schema on read" such that data can be streamed into the same database. 

1. Within <strong>OneLake</strong>, data is not transferred when it's transformed (from OLTP to OLAP).
It even supports "time travel" like in GitHub source can revert entire sets of files to commit points in the past.

1. Fabric consists of four different <strong>compute engines</strong> to support the different technologies for different uses:

   * A Traditional T-SQL engine to process T-SQL queries that insert data into data warehouses.
   * A Spark "Big Data" engine to process PySpark jobs and Python Notebooks into Data Lakehouses.
   * Python Notebooks also generate ML (Machine Learning) models from files in OneLake 

   * Eventstreams add Telemetry in TSDB (Time Series Databases) which KQL (Kusto Query Language) querysets query 
   * A PBI Analytic engine to process <a href="#dax-studio">DAX (Data Analysis Expressions)</a> for calculating KPI (Key Process Indicators) on reports and dashboards.
   * <a href="#Reflex">Reflex</a> rules set by Data Citizens and Data Analysts using the no-code GUI Data Activator, which also fires triggers when it identifies events relevant to Reflex specs in OneLake files.
   <br /><br />

1. <strong>Shortcuts</strong> pointing to specific sets of data -- good for Data Archivists to obtain to take backups.

   Shortcuts are also used for Security Guards to tag data for Microsoft Purview to automatically assign permissions on data in OneLake, S3, and other file types.

1. Microsoft names GUI "Experiences" based on the role of the primary role using them:

   1. Data Analysts use Data Factory to run Dataflows that create and load data into OneLake files.
   1. Data Engineers establish Data Warehouses using "Synapse Data Warehouse", 
   1. establish Lakehouses using "Synapse Data Engineering", and 
   1. establish Telemetry databases using "Synapse Real-Time Analytics.
   1. Data Analysts reference established data stores to create reports and dashboards using Power BI
   1. Data Scientists work with Synapse Data Science to create or tune ML Models by running experiments from data in OneLake.
   1. Data Citizens use the no-code Data Activator to define Reflex rules that trigger actions based on various events.
   <br /><br />

1. PROTIP: For Fabric to access data in Microsoft's CosmosDB multi-region multi-format database, there is a Sync product that <strong>mirrors</strong> the databases. Yes, this doubles the cost, like welding a new car to your old car.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1709766939/ms-fabric-history-3150x1768_roevf7.png"><img src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709766939/ms-fabric-history-3150x1768_roevf7.png"></a>

<a target="_blank" href="https://www.youtube.com/watch?v=JCZnv3RhTJQ&t=32m30s">VIDEO</a>:
<a target="_blank" href="https://www.linkedin.com/in/gregbeaumont/">Greg Beaumont</a> 
the brand names and technologies that culminated to Microsoft Fabric.

As with Databricks and Snowflake, Microsoft Fabric provides a "Medallion" architecture to go from OLTP to OLAP:
<a target="_blank" href="https://www.youtube.com/watch?v=JCZnv3RhTJQ">VIDEO</a>:
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1709913285/wzdrqv0ox5vp9n14e46d.png"><img alt="" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709913285/wzdrqv0ox5vp9n14e46d.png"></a>


<hr />

Next, let's get hands-on:

## Social

https://community.fabric.microsoft.com/

https://www.reddit.com/r/MicrosoftFabric/comments/15gpjmp/bicep_in_fabric/

https://www.microsoft.com/en-us/sql-server/community?activetab=pivot:sqlservertab

https://www.meetup.com/pro/azuretechgroups/

<a target="_blank" href="https://app.powerbi.com/view?r=eyJrIjoiYjNhODY3OGEtNGY0ZC00MDlhLWE2MWItYTYwZWQ5NjFiYjE2IiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9">Azure Data Community User Groups</a>

<a target="_blank" href="https://ideas.fabric.microsoft.com/">Microsoft Fabric Ideas</a>

## Browser Profile

1. PROTIP: In an internet browser (Safari, Google Chrome, etc.) I click the icon next to the browser's three-dot menu to use a <strong>browser profile</strong> that retains the browser history for the <strong>work (organizational) account</strong> I need to use with Fabric.

   <a name="AdminMenu"></a>
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701041117/fabric-signin-318x367_lf2lqp.png"><img alt="fabric-signin-318x367.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701041117/fabric-signin-318x367_lf2lqp.png"></a>

   <a name="HomePage"></a>

   ## Working Home Page

1. REMEMBER: The Microsoft <strong>Fabric working home page</strong> has Microsoft.com and NOT Azure, at:

   <a target="_blank" href="https://app.fabric.microsoft.com"><strong>https://app.fabric.microsoft.com</strong></a>

   This is because Microsoft intends Fabric to be a service that can exchange data with competing clouds such as AWS and GCP as well as on-prem. data centers (through Microsoft's Arc). It's a "friendamy" strategy. Fabric is how Microsoft catches up to what <a target="_blank" href="https://wilsonmar.github.io/snowflake/">Snowflake</a> and Databricks have been offering.

1. You'll see what I call the "bouncer" page ensures that only <strong>organizational</strong> emails (work or school account) use Fabric. Your personal gmail or outlook.com account is no good here. Wow.

   "You can't sign in here with a personal account. Use your work or school account instead."
   
   This is why you setup a <a href="#Browser+Profile">browser profiles</a> for each email account. Click the profile icon at the top right of the browser window to switch between profiles.

   If you have a license, you'll see the fabric-landing-711x400.jpeg landing page, which lists the Fabric components you have access to.

1. Click the big round gray icon at the upper side of the Fabric page for the <a href="#AdminMenu">Admin/Sign In menu above</a>.


   ## Start Trial

1. Click the green <strong>Start trial</strong> box.

   REMEMBER: Notice the word "capacity" instead of "instances" because Fabric is a <strong>serverless</strong> service.

1. Click "Start trial". 

   PROTIP: In your Calendar, add a reminder to cancel the trial before the 30 days are up.
   
   The trial is for the <strong>Pro</strong> tier, which is the middle tier. The <strong>Premium</strong> tier is the top tier.

   We'll come back to the "Learn more" link at: https://go.microsoft.com/fwlink/?linkid=2227617  which expands to
   
   https://learn.microsoft.com/en-us/fabric/get-started/fabric-trial

1. Select your Country (for data sovereignty) and Phone number (for SMS text verification).
1. Click <strong>Start my new trial</strong>. This creates a new <a target="_blank" href="https://learn.microsoft.com/en-us/microsoft-365/education/deploy/intro-azure-active-directory#what-is-an-azure-ad-tenant">Entra ID</a> (Azure Active Directory) <a target="_blank" href="https://learn.microsoft.com/en-us/entra/fundamentals/create-new-tenant">tenant</a> tied to a DNS domain name to provide identity and access management (IAM) capabilities to applications and resources.

   1 TB is allocated to OneLake storage.

   64 capacity units (CUs) allow consumption of 64x60 CU seconds every minute when "experiences" are run. 

   Each data <a target="_blank" href="https://learn.microsoft.com/en-us/purview/concept-elastic-data-map">Purview Data Map</a> capacity unit includes a throughput of 25 operations/sec and 10 GB of metadata storage limit for <a target="_blank" href="https://learn.microsoft.com/en-us/purview/concept-scans-and-ingestion">scanning</a>.
   
   PROTIP: When the capacity consumption exceeds its size, Microsoft slows down the experience similar to slowing down CPU performance.

1. <a target="_blank" href="https://www.youtube.com/watch?v=l3cpnX0mpXE">VIDEO</a>: <a target="_blank" href="https://blog.fabric.microsoft.com/en-US/blog/capacity-metrics-in-microsoft-fabric/">BLOG</a>: <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/enterprise/metrics-app">Monitor Capacity usage</a> using:
   
1. Click the <strong>Admin</strong> icon at the top right of the page to see the number of days remaining in the trial.


   ### Learn More

1. PROTIP: Instead of clicking this <strong>Learn more</strong> link for the "Get started" tutorial, copy the URL and switch to your personal browser profile so you get points for learning,

   This article contains information from the following sources:

   * https://learn.microsoft.com/en-us/fabric/ is the main Fabric page.

   * https://learn.microsoft.com/en-us/fabric/get-started/fabric-trial
   * https://learn.microsoft.com/en-us/training/paths/get-started-fabric

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-data-fundamentals-explore-data-warehouse-analytics/">Microsoft Documentation for Microsoft Fabric</a>

   * <a target="_blank" href="https://learn.microsoft.com/en-us/collections/w2gkhrkzzmym?WT.mc_id=cloudskillschallenge_a68d938a-58b7-403e-89f2-b2305edb7c41">Microsoft Ignite: Microsoft Fabric Skills Challenge</a>

   * https://aka.ms/Fabric-Hero-Blog-Ignite23


<hr />

<a name="Experiences"></a>

## Product Component "Experiences"

PROTIP: Although Fabric is marketed as a "unified" product, practically it's operated as a collection of products that Microsoft users navigate around.

1. Click the Microsoft Fabric icon at the bottom-left of the screen for a list of product components (without the vague marketing generalizations):

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701046058/fabric-menu-624x584_de9vj1.png"><img alt="fabric-menu-624x584.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701046058/fabric-menu-624x584_de9vj1.png"></a>

   Notice that there is a group of <strong>Synapse brand</strong> data products with blue icons.
   Synapse is on Azure as a Platform-as-a-Service (PaaS)

   <a target="_blank" href="https://www.youtube.com/watch?v=Shw8FbDi4lQ&t=5m39s" title="by Deepika Bhatt with James Leonard">DEMO</a>: 
   Fabric integrates into a single unified SaaS analytics platform :
   * <a href="#Data+Factory">Azure Data Factory</a>
   * Azure Data Explorer
   * Azure Synapse Analytics operates on <a href="#Workspaces">workspaces</a> containing both relational SQL databases and big-data Lake databases, all linked to blobs (files) within Azure Data Lake Storage (ADLS) Gen2
   * Azure Databricks
   * Azure Synapse SQL
   * Power BI to 
   <br /><br />

   <a target="_blank" href="https://www.youtube.com/watch?v=Shw8FbDi4lQ&t=2m40s" title="by James Leonard">VIDEO</a>: 
   "Synapse Data Analytics" integrates relational data with big data, both using Azure Data Lake Storage (ADLS) Gen2, <a href="#Data+Factory">Azure Data Factory</a>, Azure Databricks, Azure Synapse SQL, and Power BI into a single unified analytics platform.

   Fabric covers the "complete spectrum" of data services including data movement, data lake, data engineering, data integration and data science, observational analytics, and business intelligence.
   
   But what happened to products previously shown in menus:
   * Azure Databricks - "Fast, easy, and collaborative Apache Spark-based analytics platform"
   * Azure Data Explorer - "Fast and highly scalable data exploration service"
   * Azure Synapse Analytics - "Limitless analytics service with unmatched time to insight"
   * Azure Analysis Services - "Enterprise-grade analytics engine as a service"
   * Azure Machine Learning - "Build, train, and deploy models from the cloud to the edge"
   * Azure Stream Analytics - "Real-time analytics on fast-moving streaming data"
   * HDInsight - "Provision cloud Hadoop, Spark, R Server, HBase, and Storm clusters"
   * Microsoft Purview - "Govern, protect, and manage your data estate"
   <br /><br />

   And Copilot? It's a feature within Power BI. <a target="_blank" href="https://www.youtube.com/watch?v=cTqVa1Gdn4s">Tak Tech Analytics</a> explains it.

   ### Left Menus

1. <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701174778/fabric-left-menu-66x493_x7hpur.png"><img align="right" alt="fabric-left-menu-66x493.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701174778/fabric-left-menu-66x493_x7hpur.png"></a>Click on any of the icons to see the left menu for that component:

   ### Admin verify domain

1. Click the 9-dot icon at the top left of the screen present automation options: Power Automate, Power Pages, and 365 apps at

   https://www.microsoft365.com/?auth=2&home=1

1. Click the <strong>Admin</strong> link to designate the admin for the organizational domain name used to sign in.
1. Click Next.
1. Read the "See step-by-step instructions to add DNS records" about signing into the Domain Registry (such as GoDaddy) to specify a TXT record Fabric needs to use like a password to trust the domain.
1. Return to Fabric and click <strong>Confirm record</strong> for "You're now the admin".
1. Click "Go to the admin center".
1. Finish.

   ### Left menu common items

1. Click on Power BI on the left menu:

   * <strong>Home</strong> is the landing page for the component.
   * Create
   * Browse
   * OneLake data hub
   * Monitoring hub - a station to view and track active activities across different products
   * <a href="#Workspaces">Workspaces</a>
   * My workspace
   <br /><br />

1. Click the <strong>Power BI</strong> icon (at the top as it's frequently used).
   Its left menu contains what's not in other components: 
   * Apps
   * Metrics scorecards
   * Deployment pipelines
   * Learn - click on a sample to store its assets for that in your workspace, OneLake data hub, and left menu.
   <br /><br /> 

   ### Install Metrics App

1. Search for other apps for Fabric at

   https://appsource.microsoft.com/en-us/marketplace/apps?exp=ubp8&search=fabric&page=1

1. In PowerBI, <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/enterprise/metrics-app-install?tabs=1st">install the Microsoft Fabric Capacity Metrics app</a> to read:

   <a target="_blank" href="https://app.fabric.microsoft.com/capacity/">https://app.fabric.microsoft.com/capacity</a>

1. Click "Get it now" at 

   https://appsource.microsoft.com/en-us/product/power-bi/pbi_pcmm.microsoftpremiumfabricpreviewreport?exp=ubp8

1. Click "Install".
1. Click the app to go to it.
1. Connect to your own data by providing a "CapacityID" (GUID) and its UTC_offsite (time zone).

   <a target="_blank" href="https://community.fabric.microsoft.com/t5/Developer/How-to-get-Power-BI-Embedded-Capacity-ID/m-p/2942860">PROTIP</a>: 
   The capacity ID is shown in the capacity management page within the Power BI service -> Settings > Admin portal -> Capacity settings. Select a Gen2 capacity. 
   In the URL of that page is the capacity ID. For example, "9B77CC50-E537-40E4-99B9-2B356347E584" is the Capacity ID in the URL:
   
   <tt>https://app.powerbi.com/admin-portal/capacities/9B77CC50-E537-40E4-99B9-2B356347E584</tt>

   You may first have to <a target="_blank" href="https://learn.microsoft.com/en-us/power-bi/enterprise/service-admin-premium-manage">set your Service Principal as a Capacity Admin</a>. 

   References:
   * https://blog.fabric.microsoft.com/en-US/blog/capacity-metrics-in-microsoft-fabric/
   * https://learn.microsoft.com/en-us/fabric/data-warehouse/usage-reporting
   * https://learn.microsoft.com/en-us/fabric/admin/feature-usage-adoption
   <br /><br />

1. Click "Go back" at the lower-left corner.

Each component has its own licensing considerations. See the next section.

   * https://www.youtube.com/watch?v=8BAeLUywEMM by RADACAD "Why is it a big deal".

<hr />

## Pricing

1. Click "Pricing" to see the Fabric Pricing page:

   https://azure.microsoft.com/en-us/pricing/details/microsoft-fabric/?country=us

1. Select Region: <strong>East US</strong> (Virginia) in US Dollars by the hour. 

   DEFINITION: SKU = Stock Keeping Unit = a unique identifier for each distinct product and service that can be purchased in business.

   PROTIP: <a target="_blank" href="https://7451111251303.gumroad.com/l/fjkxm?layout=profile" title="Spreadsheet available for purchase">My analysis, illustrated below</a>, shows that while the number of CUs doubles with each level, costs also double for the two ways of charging:

   <img alt="fabric-cu-pricing-670x388.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701148689/fabric-cu-pricing-670x388_ihqdt8.png">
   
   Reserved CUs are 41% less than the Pay-as-you-go per-hour prices at all levels, for all countries.
   
   As for differences in CU Reserved cost among different regions (using different colors):<br />
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701148826/fabric-cu-pricing-intl-394x696_okjmdt.png"><img alt="fabric-cu-pricing-intl-394x696.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701148826/fabric-cu-pricing-intl-394x696_okjmdt.png"></a>
   
   PROTIP: There is only one "US" entry because prices are the same in all US regions.<br />
   Brazil South is double the cost in the US. 
   Fabric may not even be available there because the price for Pay-as-you-go is not listed for it on the website.

   <a target="_blank" href="https://www.youtube.com/watch?v=smmmE-rjXr8">VIDEO</a>:
   https://learn.microsoft.com/en-us/fabric/enterprise/licenses
   
   <a target="_blank" href="https://www.youtube.com/watch?v=6AAeV3bSMso&t=5m6s">VIDEO</a>: A Power BI Pro license is not needed if you have a Fabric Pro license at F64 SKU or above.

   https://learn.microsoft.com/en-us/power-bi/enterprise/service-premium-features

   "Charges for OneLake storage are comparable to Azure ADLS of $0.023/GB on US West 2."

<hr />

## End-to-End projects

*

* <a target="_blank" href="https://www.youtube.com/watch?v=fRBKcFaItZs" title="by Centida BI & Analytics">VIDEO</a>: Ways of getting <a target="_blank" href="https://learn.microsoft.com/en-us/sql/samples/wide-world-importers-what-is?view=sql-server-ver16">Wide World Importers sample Lakehouse databases</a> into Lakehouse:

   1. Fact table from a OneLake Shortcut to a blob (file)
   1. Order details from a Data Factory pipeline 
   1. 2-dim tables from Excel using Dataflows
   4. 3-dim tables from CSV (regular uploads)
   <br /><br />

* <a target="_blank" href="https://www.youtube.com/watch?v=gKdlsHm7QgU&list=PL9SoC_dDpQ8FnIJZwlk5L4rU1r7-cQNCG">DataVerse Academy</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=yRJ03n1U5-E&list=PLug2zSFKZmV0Yaya7NxRQfrrPtfF2vj0K">Learn Microsoft Fabric with Will</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=a6A3jtvB62U">James Serra</a>

* <a target="_blank" href="https://www.linkedin.com/in/darshil-parmar/">Darshil Parmar</a>: <a target="_blank" href="https://www.youtube.com/watch?v=IaA9YNlg5hM">Azure End-To-End Data Engineering Project</a> to extract using an API Azure Data Factory pipline, then load into Azure  Databricks storage. Then write Spark code to transform data back to Data Lake to run SQL queries.

* <a target="_blank" href="https://www.youtube.com/watch?v=fAL1ySBqJKI">VIDEO</a>: 
Creating A Microsoft Fabric End-To-End Solution ⚡ [Full Course] 1h30m by Austin Libal of Pragmatic Works Jul 12, 2023.
References <a target="_blank" href="https://prag.works/lwtn-microsoft-fabric-files">files</a>.
Get <a target="_blank" href="https://prag.works/202307-lwtn-certificate">certificate</a>

* https://www.youtube.com/watch?v=J4i5lcROJcs

* https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/service_fabric_cluster
<br />https://github.com/terraform-providers/terraform-provider-azurerm/tree/master/examples/service-fabric/windows-vmss-self-signed-certs
only provisions the Management. 

* https://www.udemy.com/course/learn-microsoft-fabric-basic-to-advance-with-practical/

<hr />

## What's Different?

Rather than other fanboys who say "it's the latest cool thing, let's switch now", let's first clear up some common confusions:

> <a target="_blank" href="https://endjin.com/blog/2023/05/intro-to-microsoft-fabric">BLOG</a>: "Microsoft Fabric can be thought of as the third generation of Microsoft data platforms, where first generation (e.g. HDInsight, SQL Data Warehouse) were somewhat isolated takes on traditional data products; Second generation was Azure Synapse Analytics, which integrated platforms at a UX level but still felt a little disjointed at the data level; and now we have Microsoft Fabric which builds upon the Synapse "unification" vision, with a particular focus on enabling deep data-level interoperability."

The product name "<strong>Fabric</strong>" Microsoft introduced March 2023 along with a set of cloud-based product <strong>experiences</strong> containing the same words also used in legacy products that Microsoft continues to sell: <a target="_blank" href="https://www.casewhen.co/blog/data-factory-showdown-fabric-vs-azure">BLOG</a>:

   * The "Synapse" prefix is now applied to several Fabric products. Before Microsoft Fabric, Microsoft used the "Synapse" brand for <a target="_blank" href="https://learn.microsoft.com/en-us/azure/synapse-analytics/synapse-link/sql-synapse-link-overview">Synapse Link</a> and the "Azure Synapse Analytics" product, which Microsoft continues to sell. PROTIP: "<a target="_blank" href="https://endjin.com/blog/2023/05/azure-synapse-analytics-versus-microsoft-fabric-a-side-by-side-comparison">There is no automatic upgrade path"</a> from Azure Synapse Analytics to Fabric Real-Time Analytics. 
   
This "Wordly Map" (from Barry Smart <a target="_blank" href="https://endjin.com/blog/2023/05/azure-synapse-analytics-versus-microsoft-fabric-a-side-by-side-comparison">at Endjin</a>) provides a high-level overview of the evolution of products and features from "Uncharted" to "Industrial" utility in Microsoft Fabric:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701439136/fabric-wardley-map-1121x793_pufd34.webp"><img alt="fabric-wardley-map-1121x793.webp" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701439136/fabric-wardley-map-1121x793_pufd34.webp"></a>

   * The workspace in Azure Synapse Analytics is Synapse Studio GUI. However, Fabric uses a Power BI-based interface organized around <a href="#Personas">personas</a> — data science, data engineering, real-time analytics, etc.

   * "Mapping Data Flows" (and "Synapse Links") are not available in Fabric.
   
   * "Mapping Data Flows" (and "Synapse Pipelines") are now called "<a target="_blank" href="https://docs.microsoft.com/en-us/azure/data-factory/concepts-data-flow-overview">Data Flows</a>" within Data Factory in Fabric.
   

PROTIP: what is so cool about Microsoft Fabric:
   * <a href="#Shortcuts">OneLake Shortcuts</a> to access any data anywhere
   * <a href="#DeltaFormat">OneLake DeltaFormat</a> for time travel, streaming, and other magic with databases in all formats
   * <a href="#Data+Activator">Data Activator</a>, new to all Microsoft and the industry, for triggering automatic actions
   * Access to Microsoft's CosmosDB multi-region database involves <strong>mirroring</strong> 
   <br /><br />

Individual artefacts before and after Fabric:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701362429/microsoft-fabric-artefacts-1280x720_swuigs.webp"><img alt="microsoft-fabric-artefacts-1280x720" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701362429/microsoft-fabric-artefacts-1280x720_swuigs.webp"></a>

<a target="_blank" href="https://www.youtube.com/watch?v=oxMUJT3p9f4">Justyna Lucznik</a> explains the differences between Azure Synapse Analytics and Microsoft Fabric.

<hr />

<a name="Shortcuts"></a>

## OneLake Shortcuts

<a target="_blank" href="https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts">Shortcuts</a> are the most significant technical advancement with Fabric's "OneLake" capabilities. It's a simple but important feature.

<a target="_blank" href="https://blog.fabric.microsoft.com/en-us/blog/using-azure-databricks-with-microsoft-fabric-and-onelake?ft=All%3A">BLOG</a>:
With Shortcuts, Microsoft enables the processing of specific datasets from "anywhere", including blobs (files) in AWS S3 and Google Cloud Storage as well as Microsoft's own Azure Blob Storage, Azure Data Lake Storage (ADLS) Gen2, Azure Databricks, etc.

Shortcuts enable Data Engineers to create and manage data pipelines that move data from any one place to another.

Behind the scenes, OneLake manages the various permissions and credentials to access data.
Relative file paths can be used to directly read data from shortcuts.
ADLS shortcuts point to the DFS endpoint for the storage account. Example: 

   <ul><tt>https://accountname.dfs.core.windows.net/...</tt></ul>

Applications and services outside of Fabric can access Shortcuts through <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/onelake/onelake-access-api">OneLake's API</a>, using enpoints such as:

   <ul><tt>https://onelake.dfs.fabric.microsoft.com/MyWorkspace/MyLakhouse/Tables/MyShortcut/MyFile.csv</tt></ul>

ADLS and S3 shortcut target paths can contain "-" / "." / "_" / "~" but not <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc3986#section-2.2">reserved characters in RCF 3986 section 2.2</a>.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701352948/fabric-onelake-shortcuts-1031x632_nszljw.png"><img alt="fabric-onelake-shortcuts-1031x632.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701352948/fabric-onelake-shortcuts-1031x632_nszljw.png"></a>

Shortcuts can be created within Microsoft's various SQL data warehouses, lakehouses, KQL databases, etc.
 
PROTIP: By themselves, Shortcuts don't "unify data across domains". People do that by actively managing a "unified namespace" of Shortcuts across the entire enterprise. That's hard work requiring both executive and worker support across departments and geographies. Thus the "Chief Data Officer" (CDO).


<hr />

<a name="DeltaFormat"></a>

## Delta/Parquet Format

Like Adobe's PDF file format, which enabled many companies in the printing industry to flourish due to widespread adoption, the <strong>Delta Lake data format</strong> has enabled the <strong>datalake</strong> industry to achieve a whole new level. Database vendors <a target="_blank" href="https://wilsonmar.github.io/snowflake/">Snowflake</a> and Databricks have been using the Delta format for years. The storage format used by Microsoft SQL Server format was proprietary.

1. Visit:

   https://www.linkedin.com/company/deltalake/

   Delta Lake is an independent open-source project and not controlled by any single company. To emphasize this we joined the Delta Lake Project in 2019, which is a sub-project of the Linux Foundation Projects.

1. Visit their open-source project at:

   https://github.com/delta-io

   "An open-source <strong>storage framework</strong> that enables building a <a href="#Lakehouse">Lakehouse architecture</a> with compute engines including Spark, PrestoDB, Flink, Trino, and Hive and APIs"

1. Visit their website at:

   https://www.delta.io

   <a target="_blank" href="https://docs.delta.io/latest/delta-intro.html">Delta Lake</a> is an open-source storage layer that brings ACID transactions to Apache Spark™ and big data workloads. Delta Lake runs on top of your existing data lake and is fully compatible with Apache Spark APIs.


1. Click the "Lakehouse architecture" link to see the seminal academic paper about that architectural pattern at:

   https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf

   The seminal paper's lead author is <a target="_blank" href="https://www.linkedin.com/in/michaelarmbrust/">Michael Armbrust of Databricks</a> (after a PhD at UC Berkeley).

   Delta Lakehouse data structures are next-level genius:

   * The binary format compresses data (using algorithms Snappy, Gzip, LZ4, etc.) that's 75% than CSV files

   * <a target="_blank" href="https://github.com/delta-io/delta/blob/master/PROTOCOL.md">Logging of ACID transactions</a> (changes) are enabled by Apache's <strong>"Parquet"</strong> file format, which not only enables auditing governance but also enables <strong>time travel</strong> -- bringing the whole database to specific points back in time. This is similar to what can be done with repositories of text files using Git.

   * Responds to (is fully compatible with) Apache Spark APIs to access data live

   * Share live data without copying to another system

   * Hold structured and unstructured data in the same place

   * Use a "schema-on-read" approach which define tabular schemas on semi-structured data files at the point where the data is read for analysis, without applying constraints when it's stored, rather than legacy "schema-on-write" approach which requires data to be structured before it's stored.
   
   * Contains metadata that describes the data it contains

   * Contains its own indexing mechanisms

   * multiple queries can write to the same delta table simultaneously (at exactly the same time). <a target="_blank" href="https://books.japila.pl/delta-lake-internals/overview/">BLOG</a>
   
   * Can handle continuous <strong>streams</strong> of data, processing video, audio, and other media data types

   * Designed to be splittable -- be divided into smaller chunks for parallel processing in distributed computing frameworks like Apache Hadoop and Apache Spark.

   PROTIP: The Delta format enables a revolution in how people collaborate because for once there is <strong>a "single source of truth"</strong> for data engineers, data scientists, and business analysts. 

   To reiterate, in the future there won't be SSIS ETL jobs creating subsets of data to each remote department. 
   Each department accesses the same DataLake.

   ### Lakehouse Architecture

   <a name="Lakehouse"></a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701404722/lakehouse-gens-1609x654_rey2mo.png"><img alt="lakehouse-gens-1609x654.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701404722/lakehouse-gens-1609x654_rey2mo.png"></a>

   First generation platforms used ETL to Transform and Load data into data warehouses from which analytics reports are created.
   Two-tier architectures still use ETL despite using data lakes referred directly by Machine Learning systems.
   
   Lakehouse architecture is a data management architecture that combines the analytic capabilities of data warehouses with the scale and flexibility of data lakes to support every known data workload. It is a new paradigm that enables data teams to work with any type of data, build data pipelines in any language, and use any kind of downstream analytics, business intelligence, or machine learning tool.

   Combined with the wide and easy availability of disk space on hyperscalers (AWS, Azure, Google), data that used to be processed by ETL can now be processed by ELT or ELTL.

   <a target="_blank" href="https://www.linkedin.com/pulse/comparing-microsoft-fabric-azure-machine-learning-which-kim-berg/">PROTIP</a>:
   Microsoft's legacy <strong>Azure ML</strong> PaaS offering is elevated by Fabric's <strong>Synapse Data Science</strong> SaaS offering by adding access to OneCloud Delta format and the "universal" data preparation, management, and analysis tools that goes with it. 
   
   REMEMBER: Microsoft has renamed the Power BI "dataset" content type to :semantic model". Semantics relates to the study of references, specifically describing the real meaning between symbols or words. A semantic model or semantic data model is a high-level databases. An SDM specification describes a database in terms of the kinds of entities that exist in the application environment, the classifications and groupings of those entities, and the structural interconnections among them.

1. Additional descriptions at:
   * <a target="_blank" href="https://docs.delta.io/latest/delta-intro.html">https://docs.delta.io/latest/delta-intro.html</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/databricks/delta/">https://docs.microsoft.com/en-us/azure/databricks/delta/</a>
   <br /><br />

   For a deeper dive, get the 267-page ebook PDF "Delta Lake: Up & Running by O’Reilly at:
   https://www.databricks.com/resources/ebook/delta-lake-running-oreilly<br />
   https://www.databricks.com/sites/default/files/2023-10/oreilly-delta-lake_-up-and-running.pdf

   "Delta Lake supports several operations to modify tables using standard <strong>DataFrame APIs</strong>."

<!--
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701352948/fabric-onelake-shortcuts-1031x632_nszljw.png"><img alt="fabric-onelake-shortcuts-1031x632.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701352948/fabric-onelake-shortcuts-1031x632_nszljw.png"></a>
-->


<hr />

<a name="Personas"></a>

## Personas (Fabric User Roles)

Now let's focus on <strong>impacts</strong> on the lives of people, before examining the home pages and <strong>capabilities</strong> of the products.

Instead of the traditional generic "Database Administrator" role name, 
Microsoft designed Fabric documentation around different roles within enterprises, listed here in order of introduction during a green-field implementation:

### Data Citizens

<strong>Data Citizens</strong> are true end-users -- business people who need to make decisions and take actions based on data. 

   They have the budget authority and the responsibility for what are correct values in databases.
   
   PROTIP: For each set of data, there is one <strong>data owner</strong> who approves data deletion and arranges for audits as well as
   approving who have access and extent of permissions (for implementation by a central security team using IAM tools).

   Data Citizens need to be trained to use <a href="#PowerBI">Power BI</a> for <a href="#Analytics">Analytics</a>, <a href="#Data+Activator">Data Activator</a> for alerts, and other tools provided by Data Analysts. Some track where they spend time on technical aspects to ensure that the time spent is worth the value of the data.

### Data Analysts

<strong>Data (Business) Analysts</strong> serve the needs of Data Citizens by establishing dashboards and alerts, and training users on technologies and possibilities. These Analysts design the "data models" defining relationships among sets of data.

   PROTIP: Business analysts also coordinate <a target="_blank" href="https://wilsonmar.github.io/chaos-engineering/">Chaos Engineering efforts</a> to ensure that recovery efforts are quick and effective.

   That includes coding <a target="_blank" href="https://wilsonmar.github.io/kql">KQL (Kusto Query Language)</a> within <a href="#RTA"><strong>Synapse Real Time Analytics</strong></a> to create (star schema) databases for analytics. The product is an evolution of Synapse Data Explorer, but also introduces the "Eventstreams" feature that's very similar to Azure Stream Analytics no-code editor.
   
   Data Analysts collaborate with Security on using Microsft Purview.

   PROTIP: Those slinging legacy SSIS ETLs can add value now by enabling "Data Citizens" to use PowerBI (and Data Activator) such that they "won't notice" (are impacted minimally) when data inevitably moves from on-prem to the Fabric cloud. Then they can brag on their resume:

   > "Migrated users quickly to Azure Fabric Data Activator automation with minimal disruption due to proactive restructuring of on-prem. SSIS ETLs so users access legacy visualizations and alerts from PowerBI similar to how they view data in cloud Lakehousesxx."


### Data Engineers

<strong>Data Engineers</strong> create databases (platforms):

   * Move data using <a href="#Data+Factory">Data Factory</a>
   * Organize <a href="#Shortcuts">Shortcuts</a> to reference data files within <a href="#OneLake">OneLake storage</a>

   * Program SQL within <a href="#SDW">Synapse Data Warehouse</a> to create traditional relational SQL databases 
   
   * Program PySpark within Synapse Data Engineering to create "big data" (Hadoop-style) <strong>data lakes</strong>
   
   * Use Data Factory to create data pipelines to move data from one place to another, such as from a data lake to a data warehouse.
   <br /><br />

   Engineers also build automated <strong>workflows</strong> for monitoring, data cleaning, loading, backups, etc.

   PROTIP: In response to security incidents, automation enables complete recreation of capabilities with the latest patches, rather than patching.

   Microsoft's documentation now calls "Power BI administrators" <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/admin/microsoft-fabric-admin">Fabric administrators</a>.

### Data Stewards/Administrators

Database Administrators are <a target="_blank" href="https://www.indeed.com/career-advice/finding-a-job/what-is-data-steward"><strong>Data Stewards</strong></a>, <strong>data custodians</strong> responsible for protecting the organization's most treasured assets: its data. 

    * Database management
    * Implement Data Security
    * Backups
    * User Access
    * Monitors performance
    <br /><br />

Stewards setup and operate processes for data governance and data quality. They monitor processes for collecting data -- inspecting contents to ensure that data is in the right format. They ensure that app logs, metric collections, database logs shipped, app transactions, snapshots of master data are backed up fully and as scheduled. Once a month they ensure that data can be fully and quickly restored, as measured by RTO (Recovery Time Objective) and RPO (Recovery Point Objective) SLAs. Such is an important fall-back in case of ransomware attacks.

   Data stewards collaborate with others to detect and solve data corruption or mis-sychronization of data between apps and utilities.

   PROTIP: In many organizations, to limit the impact of credential loss, they, after approval by the data owner, are the only accounts who can <strong>delete data</strong> which others put "in limbo".

   They use <a href="#Purview">Microsoft Purview</a>. QUESTION: Does Microsoft provide all the tools that Data Stewards need?



### Data Scientists

<strong>Data Scientists</strong> work on AI models using Data Science tools such as Notebooks written in PySpark for Machine Learning. The intelligence created can be custom tags that extend generic LLM (Large Language Models) created by others for NLP (Natural Language Processing) and other AI (Artificial Intelligence) capabilities.

Data Scientists use Synapse Data Science to add embedding tags within vector databases to enhance LLMs with custom data.


### Additional roles:

* Solution Architects/Architects
* AI Engineers/Architects
* Power BI data analysts
* ETL developers
* Information architects
* DevOps Engineers/Architects

* Managers & Supervisors
* Executives: CEO, CTO, CMO, CRO, etc.
<br /><br />

The above are used as the basis to assign permissions to the Fabric "experiences" (sub-products).


<hr />

## Fabric Marketing

Fabric was unveiled at Microsoft's Build 2023 conference.

1. The marketing homepage for Fabric is:

   <a target="_blank" href="https://www.microsoft.com/en-us/microsoft-fabric"><strong>https://www.microsoft.com/en-us/microsoft-fabric</strong></a>

   This article covers keywords on that page:
   <a href="#Capabilities">Capabilities</a> |
   <a href="#OneLake">OneLake</a> |
   <a href="#Data+Factory">Data Factory</a> |
   <a href="#Synapse">Synapse</a> |
   <a href="#Data+Activator">Data Activator</a> |
   <a target="_blank" href="https://guidedtour.microsoft.com/en-US/guidedtour/power-platform/power-bi-and-modern-workplace/1/1">Power BI</a> |
   <a target="_blank" href="https://powerbi.microsoft.com/en-us/blog/empower-power-bi-users-with-microsoft-fabric-and-copilot/">Copilot</a>

   Other keywords:

   <a href="#Notebooks">Notebooks</a> |
   <a href="#Data+warehouses">Data warehouses</a> |
   <a href="#Dataflows">Dataflows</a> |
   <a href="#Data+Pipelines">Data Pipelines</a> |
   <a href="#Semantic+models">Semantic models</a>  |
   <a href="#Reports">Reports</a> 


<hr />

## Domain?


## Workspaces

   * <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-04b-fabric-lake-lab.html">HANDS-ON: Explore data analytics in Microsoft Fabric from the DP-900 labs</a>
   * <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-05c-fabric-realtime-lab.html">HANDS-ON: Explore real-time analytics in Microsoft Fabric from the DP-900 labs</a>

1. Using the browser profile for the email you want to use,
 
   https://app.fabric.microsoft.com

1. Click "Real Time Analytics" to see the left menu for that component:

1. In the Fabric left menu, select <strong>Workspaces</strong>.
1. Click the green "New workspace" button.
1. PROTIP: For Workspace Name, construct a name that includes a project name and the date, such as 

   <tt>RTA1-eastus2-231231a</tt>

1. PROTIP: For Workspace image, construct an image file less that 45 KB to upload. Use a utility to compress an icon image around 100x100 pixels.
1. Click "Advanced" to select a licensing mode in the Advanced section that includes Fabric capacity (Trial, Premium, or Fabric).

   ### License Mode

   * Select Pro to use basic Power BI features and collaborate on reports, dashboards, and scorecards. To access a Pro workspace, users need Pro per-user licenses. 
   
   * Select Premium per-user to collaborate using Power BI Premium features, including paginated reports, dataflows, and datamarts. To collaborate and share content in a Premium per-user workspace, users need Premium per-user licenses. Learn more
   
   * Select premium capacity if the workspace will be hosted in a premium capacity. When you share, collaborate on, and distribute Power BI and Microsoft Fabric content, users in the viewer role can access this content without needing a Pro or Premium per-user license. Learn more
   
   * Select embedded if the workspace will be hosted in an Azure embedded capacity. ISVs and developers use Power BI Embedded to embed visuals and analytics in their applications. Learn more
   
   * Select Fabric capacity if the workspace will be hosted in a Microsoft Fabric capacity. With Fabric capacities, users can create Microsoft Fabric items and collaborate with others using Fabric features and experiences. Explore new capabilities in Power BI, Data Factory, Data Engineering, and Real-Time Analytics, among others. Learn more

   * Select the free trial per-user license to try all the new features and experiences in Microsoft Fabric for 60 days. A Microsoft Fabric trial license allows users to create Microsoft Fabric items and collaborate with others in a Microsoft Fabric trial capacity. Explore new capabilities in Power BI, Data Factory, Data Engineering, and Real-Time Analytics, among others. Learn more

1. Do not check "Develop template apps".

1. Click "Apply" for new workspace with "There is nothing here yet".

   ### Create KQL database

1. Click "+ New", then "KQL database" from the dropdown.
1. PROTIP: For KQL Database name, include your project name and date:

   <tt>RTA1-KQL-eastus2-231231a</tt>
   
1. Click "Create" to see a KQL database page.

   The following is my experience trying to follow <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-05c-fabric-realtime-lab.html#create-an-eventstream">HANDS-ON: Create a KQL EventStream</a>

1. Click "Home" icon to see the workspace page with these icons:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702097886/azure-KQL-workspace-1120x220_icdfho.png"><img alt="azure-KQL-workspace-1120x220.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702097886/azure-KQL-workspace-1120x220_icdfho.png"></a>

   <a target="_blank" href="https://www.youtube.com/watch?v=rQjhpP9HHI8&t=1m32s" title="Oct 3, 2023 by Wagner Crivelini from Brazil.">VIDEO</a>: Ingesting Real-Time Data with MICROSOFT FABRIC and KUSTO

1. Click the "Eventstream" icon.
1. For New Eventstream Name, construct

   <tt>RTA1-KQL-stream-eastus2-231231a</tt>

1. The visual designer canvas shows a source that connects to your eventstream, which in turn is connected to a destination.
1. Click "New source" on the designer canvas to select "Sample data" for a "Sample data" pane.
1. For "Source name", type "taxis" and select among "Sample Data" dropdown "Yellow Taxi (high sample rate)". 
1. Click "Add".
1. Select "Data preview" (on the tab beneath the designer canvas) to preview the data being streamed from the source.
1. Click "New destination" on the designer canvas to select "KQL database" for a "KQL database" entry pane.

1. Leave Data Ingestion mode at default "Event processing before ingestion".
1. For "Destination name", type "taxi-data".
1. For "Workspace", select the one you created.
1. For "KQL database", select the one you created. 
1. For "Destination table", type "taxi-data". ???
1. Click "Add".

1. In the Ingest data wizard, on the Destination page, select New table and enter the table name taxi-data. Then select Next: Source.

1. On the Source page, review the default data connection name, and then select Next: Schema.
1. On the Schema page, change the Data format from TXT to JSON, and view the preview to verify that this format results in multiple columns of data. Then select Next: Summary.
1. On the Summary page, wait for continuous ingestion to be established, and then select Close.
1. Verify that your completed eventstream says "successful".

   Query real-time data in a KQL database

   See https://learn.microsoft.com/en-us/azure/data-explorer/kql-quick-reference

   KQL Keywords: where search take case distinct ago project extend sort Top summarize count render by and

<hr />

## Workflow with Fabric 

Microsoft Fabric offers a centralized storage solution, eliminating data fragmentation and promoting data integrity. 

   Fabric aims to eliminate silos and remove data duplication by providing a single platform for <strong>collaboration</strong> among data engineers, data scientists, and business analysts. The <a target="_blank" href="https://learn.microsoft.com/fabric/data-engineering/tutorial-lakehouse-introduction">flow</a> is:
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701049746/fabric-flow-842x516_bcpj9q.jpg"><img alt="fabric-flow-842x516.jpeg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701049746/fabric-flow-842x516_bcpj9q.jpg"></a>

Databricks is a cloud-based service that provides a unified analytics platform for data scientists, data engineers, and business analysts. It provides a collaborative workspace for data scientists to build and train machine learning models. It also provides a platform for data engineers to build data pipelines and perform complex data engineering tasks. It provides a platform for business analysts to perform data analysis and build reports and dashboards. https://github.com/derar-alhussein/Databricks-Certified-Data-Engineer-Associate

   * <a target="_blank" href="https://justb.dk/blog/2023/11/fa
   bric-data-lakehouse-understanding-the-dataflow/">This article</a> describes the flow in detail.
   * https://learn.microsoft.com/en-us/fabric/cicd/best-practices-cicd
   <br /><br />

1. Create a <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/get-started/workspaces">Fabric workspace</a>.
1. <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-lakehouse-get-started">Create a lakehouse</a> using PowerBI. There's no limit on the number of workspaces or items you can create within your capacity.

1. DATA SOURCE: Obtain data in a variety of formats from a variety of sources.

   The end-to-end example is built using <a target="_blank" href="https://learn.microsoft.com/en-us/sql/samples/wide-world-importers-what-is?view=sql-server-ver16&preserve-view=true">Microsoft's Wide World Importers (WWI) sample data</a>:

1. INGEST: 

1. TRANSFORM & STORE: transform data, and load it into the lakehouse. You can also explore the OneLake, one copy of your data across lakehouse mode and SQL analytics endpoint mode.

   A major innovation with lakehouses instead of data warehouse is that instead of traditional transform before load (ETL), it's load then transform (ELT).

1. SERVE: Connect to the lakehouse's SQL analytics endpoint to create a Power BI report using DirectLake -- to analyze sales data across different dimensions.

1. CONSUME: Connect to the lakehouse's SQL analytics endpoint to create a Power BI report using DirectLake -- to analyze sales data across different dimensions.

1. Optionally, orchestrate and schedule data ingestion and transformation flow with a pipeline.
<br /><br />

* <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/use-data-factory-pipelines-fabric/">Use Data Factory pipelines in Microsoft Fabric</a>
<br /><br />

   Learn more:

1. Synapse Data Warehouse: support <strong>data use</strong> from SQL Endpoints.

   * https://learn.microsoft.com/en-us/training/modules/get-started-data-warehouse/
   <br /><br />

1. Synapse Data Engineering: run <strong>Notebooks</strong> within the Spark platform for <strong>data transformation</strong> at scale.

   * https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/
   <br /><br />

1. <img align="right" width="48" height="48" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709230056/ms-fabric-Synapse_tl8ioj.svg">Synapse Data Science: model training and execution tracking in a scalable environment using Azure Machine Learning and Spark.

   * https://learn.microsoft.com/en-us/training/modules/get-started-data-science-fabric/
   <br /><br />

1. Synapse Real-Time Analytics: real-time analytics to query and analyze large volumes of data in real-time.


<a name="Data+Factory"></a>

## Data Factory in Microsoft Fabric (DFiMF)

   * <a target="_blank" href="https://www.youtube.com/watch?v=EpDkxTHAhOs&list=PLGjZwEtPN7j8b9dPA0HrtJDptOB69B506&index=1">VIDEO</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/azure/data-factory/quickstart-create-data-factory-bicep?tabs=CLI">Quickstart: Create an Azure Data Factory using Bicep</a> <a target="_blank" href="https://learn.microsoft.com/en-us/samples/azure/azure-quickstart-templates/data-factory-v2-blob-to-blob-copy/">Template Code Sample</a> with a pipeline that copies data from one folder to another in an Azure Blob Storage, <a target="_blank" href="https://learn.microsoft.com/en-us/azure/data-factory/quickstart-create-data-factory-powershell#prerequisites">using PowerShell</a> <a target="_blank" href="https://github.com/Azure/azure-quickstart-templates/tree/master">QuickStart templates</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/azure/data-factory/transform-data-using-spark">Tutorial: Transform data using Spark</a>
   <br /><br />

<img align="right" width="48" height="48" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709230056/ms-fabric-Data-Factory_piy4sy.svg">Microsoft Fabric "Data Factory" is different from "Azure Data Factory (ADF)" that continues to be used (at lower cost). 

<a target="_blank" href="https://www.casewhen.co/blog/data-factory-showdown-fabric-vs-azure">IMPORTANT PROTIP</a>: Some use the term "<strong>Data Factory in Microsoft Fabric (DFiMF)</strong>" to differentiate it from the legacy ADF. DFiMF adds to ADF features from <a target="_blank" href="https://www.casewhen.co/blog/data-analysis-and-data-transformation-with-power-query-in-power-bi">Power Query Dataflows</a> and integrates tagging for Data Governance. DEFINITION: Azure Data Factory is a service that can ingest large amounts of raw, unorganized data from relational and non-relational systems, and convert this data into meaningful information. Therefore, it's referred to as a data integration service.


1. Data Factory: data integration <strong>pipelines</strong> to copy data and orchestrate data processing, combining <strong>Power Query Online</strong> and/or Dataflows (Gen2) to Import and transform data from 90+ data sources, and load it directly into a table in the lakehouse.
Dataflows (Gen2) performs ETL tasks using Power Query Online.

   * https://learn.microsoft.com/en-us/fabric/data-factory/data-factory-overview
   * https://learn.microsoft.com/en-us/training/modules/use-data-factory-pipelines-fabric/
   * https://www.youtube.com/watch?v=CtTrnd-UGt8
   <br /><br />

   * <a target="_blank" href="https://www.youtube.com/watch?v=WbDqeNsmoL4">Why you should look</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=_QtA_492l4k">SQLBits</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=tW6vXSIV0kc&t=13m51s" title="by Lisa Hoving">VIDEO</a>: Azure Synapse Analytics is a combination of Azure SQL Data Warehouse and Azure Data Factory.

   <a target="_blank" href="https://www.youtube.com/watch?v=tW6vXSIV0kc" title="by Lisa Hoving">VIDEO</a>: Difficulties with Data Factory include:
   * Little flexibility beyond what's available
   * Difficult to create generic pipelines
   * Difficult to optimize
   <br /><br />

1. Power BI: business intelligence for translating data to decisions. Power BI administrators are now <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/admin/microsoft-fabric-admin">Fabric administrators</a>.

1. <a href="#Data+Activator">Data Activator</a>: "Insight to action" takes action based on real-time changes in your data. 

   For example, if a trigger activates when a trend reaches a pre-defined threshold, if action is not urgent, look up people using <a target="_blank" href="https://mgt.dev/">Microsoft Graph Toolkit Playground</a> <a target="_blank" href="https://www.m365princess.com/blogs/microsoft-graph-people-picker-power-apps/">lookalike</a> and <a target="_blank" href="https://www.youtube.com/watch?v=hPRzHbMzoI0">identify when they can meet</a>. Then use <a target="_blank" href="https://www.youtube.com/watch?v=ZzWdXiMzA-c">Power Apps</a> to populate meeting picker, identify meeting slots, and create an event. Add calls (actions) to a Power Apps custom connector that will be called from your canvas app. Schedule a Teams meeting in canvas app within Teams. Automatically send out a meeting invitation. 

   If the action needed is urgent, send out SMS text to those who need to know. <a target="_blank" href="https://www.youtube.com/watch?v=pLubg1ddrMA">VIDEO</a>:


<hr />

<a name="DP-600"></a>

## DP-600 Fabric Analytic Engineer Associate

Microsoft's $165 <a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/fabric-analytics-engineer-associate/">DP-600 Fabric Analytic Engineer Associate exam page</a> (available in March 2024) provides free tutorials.
<a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-600">Study Guide</a>

#### Plan, implement, and manage a solution for data analytics (10–15%)

Plan a data analytics environment:
   * Identify requirements for a solution, including components, features, performance, and capacity stock-keeping units (SKUs)
   * Recommend settings in the Fabric admin portal
   * Choose a data gateway type
   * Create a custom Power BI report theme
   <br /><br />

Implement and manage a data analytics environment
   * Implement workspace and item-level access controls for Fabric items
   * Implement data sharing for workspaces, warehouses, and lakehouses
   * Manage sensitivity labels in semantic models and lakehouses
   * Configure Fabric-enabled workspace settings
   * Manage Fabric capacity
   <br /><br />

Manage the analytics development lifecycle
   * Implement version control for a workspace
   * Create and manage a Power BI Desktop project (.pbip)
   * Plan and implement deployment solutions
   * Perform impact analysis of downstream dependencies from lakehouses, data warehouses, dataflows, and semantic models
   * Deploy and manage semantic models by using the XMLA endpoint
   * Create and update reusable assets, including Power BI template (.pbit) files, Power BI data source (.pbids) files, and shared semantic models
   <br /><br />

#### Prepare and serve data (40–45%)

Create objects in a lakehouse or warehouse:
   * Ingest data by using a data pipeline, dataflow, or notebook
   * Create and manage shortcuts
   * Implement file partitioning for analytics workloads in a lakehouse
   * Create views, functions, and stored procedures
   * Enrich data by adding new columns or tables
   <br /><br />

Copy data:
   * Choose an appropriate method for copying data from a Fabric data source to a lakehouse or warehouse
   * Copy data by using a data pipeline, dataflow, or notebook
   * Add stored procedures, notebooks, and dataflows to a data pipeline
   * Schedule data pipelines
   * Schedule dataflows and notebooks
   <br /><br />

Transform data:
   * Implement a data cleansing process
   * Implement a star schema for a lakehouse or warehouse, including Type 1 and Type 2 slowly changing dimensions
   * Implement bridge tables for a lakehouse or a warehouse
   * Denormalize data
   * Aggregate or de-aggregate data
   * Merge or join data
   * Identify and resolve duplicate data, missing data, or null values
   * Convert data types by using SQL or PySpark
   * Filter data
   <br /><br />

Optimize performance:
   * Identify and resolve data loading performance bottlenecks in dataflows, notebooks, and SQL queries
   * Implement performance improvements in dataflows, notebooks, and SQL queries
   * Identify and resolve issues with Delta table file sizes
   <br /><br />

#### Implement and manage semantic models (20–25%)

Design and build semantic models:
   * Choose a storage mode, including Direct Lake
   * Identify use cases for <a href="#DAX+Studio">DAX Studio</a> and Tabular Editor 2
   * Implement a star schema for a semantic model
   * Implement relationships, such as bridge tables and many-to-many relationships
   * Write calculations that use DAX variables and functions, such as iterators, table filtering, windowing, and information functions
   * Implement calculation groups, dynamic strings, and field parameters
   * Design and build a large format dataset
   * Design and build composite models that include aggregations
   * Implement dynamic row-level security and object-level security
   * Validate row-level security and object-level security
   <br /><br />

Optimize enterprise-scale semantic models:
   * Implement performance improvements in queries and report visuals
   * Improve DAX performance by using <a href="#DAX+Studio">DAX Studio</a>
   * Optimize a semantic model by using Tabular Editor 2
   * Implement incremental refresh
   <br /><br />

#### Explore and analyze data (20–25%)

Perform exploratory analytics:
   * Implement descriptive and diagnostic analytics
   * Integrate prescriptive and predictive analytics into a visual or report
   * Profile data
   <br /><br />

Query data by using SQL:
   * Query a lakehouse in Fabric by using SQL queries or the visual query editor
   * Query a warehouse in Fabric by using SQL queries or the visual query editor
   * Connect to and query datasets by using the XMLA endpoint
   <br /><br />

<a target="_blank" href="https://learn.microsoft.com/en-us/shows/learn-live/exam-cram-for-dp-600-ep101-how-to-pass-exam-dp-600-implementing-analytics-solutions-using-microsoft-fabric-beta-pacificn">Exam-Cram</a> by Angie Rudduck and Wesley De Bolster


Sample Practice Test:

<a target="_blank" href="https://aka.ms/DP-600-Practice">aka.ms/DP-600-Practice</a>.

<a target="_blank" href="https://www.youtube.com/watch?v=U3aqC7VQTSw">VIDEO get it the smart way</a>



<hr />

<a name="Data+Activator"></a>

## Data Activator

<img align="right" width="48" height="48" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709230056/ms-fabric-Data-Activator_yc60td.svg">
   * <a target="_blank" href="https://aka.ms/DataActivatorPreview">aka.ms/DataActivatorPreview</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/get-started-data-activator-microsoft-fabric/8-exercise">Exercise</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=NDOtvHKiZq8">FF Analytics playlist</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=qrCmTCWuluk">Microsoft Mechanic</a> by Will Thompson (Group Product Manager of Data Activator) 
   * <a target="_blank" href="https://www.youtube.com/watch?v=v6IOuysQGRA">VIDEO</a> on Guy in a Cube channel : Will Thompson (Group Product Manager of Data Activator) provided the screen images below.
   * <a target="_blank" href="https://www.youtube.com/watch?v=40Lwg1QJFEY">VIDEO</a>: Digging deeper
   * <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/data-activator/data-activator-introduction">What is Data Activator?</a>
   * <a target="_blank" href="https://www.linkedin.com/pulse/data-activator-microsoft-fabric-what-how-can-you-set-up-justin-barry-cqyoe/">by Justin Berry</a> 
   * <a target="_blank" href="https://adatis.co.uk/data-activator-as-it-is-now/">this blog</a> provided the flow diagram
   <br /><br />

NOTE: Previously, Azure Synapse Pipelines had a 
   * Schedule Trigger, 
   * Tumbling Window Trigger, and 
   * Event-Based Trigger.
   <br /><br />

Data Activator monitors workspaces with a PowerBI Premium license.

Data Activator initiates actions based on <strong>Reflex items</strong>, each containing all the details to connect to data sources, monitor conditions. A Reflex is typically setup for each business segment or process monitored.

   PROTIP: <strong>Data Activator</strong>, if it works as intended, can be a real <strong>game changer</strong> to enable <strong>Data Citizens</strong> to create "digital robots" that automatically <strong>take action</strong> rather than relying on humans constantly scanning dashboards, which can be error prone. Here's where machines (AI or not) replace human workers -- and <a target="_blank" href="https://www.youtube.com/watch?v=8CPoXDrwPP8">"The Sorcerer's Apprentice"</a> <a target="_blank" href="https://www.youtube.com/watch?v=ZcesnqVF0us&t=1m39s">VIDEO: fiasco</a> becomes reality.

Data Activator runs in the background to review data created in Power BI, Synapse Real Time Analytics, Synapse Data Warehouse in OneLake to identify conditions that trigger automatic actions (in batches every 5 minutes):
   * send message in Microsoft Teams, 
   * send appointment in Outlook, and 
   * Power Automate to perform logic
   <br /><br />

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1709187839/ms-data-activator-flow-adatis-602x365_dny6l5.png"><img alt="" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709187839/ms-data-activator-flow-adatis-602x365_dny6l5.png"></a>

1. The Fabric Administrator enables a Microsoft Fabric subscription at:

   <a target="_blank" href="https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Fabric%2Fcapacities">https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Fabric%2Fcapacities</a>

2. In tenant settings, enable Data Activator for specific security groups or the entire organization except specific security groups.

1. <img align="right" width="48" height="48" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709230056/ms-fabric-PowerBI_qfz2kr.svg">Within PowerBI, open a report. Click the 3 dots at the upper-right to select "Trigger action".

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1709176205/powerbi-alerts-1172x1940_sqsaaw.png"><img alt="powerbi-alerts-1172x1940.png" width="1140" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709176205/powerbi-alerts-1172x1940_sqsaaw.png"></a>

1. Select the Measure, For each, time axis. Scroll down.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1709176671/powerbi-alert-every-1124x558_refbaj.png"><img alt="powerbi-alert-every-1124x558.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709176671/powerbi-alert-every-1124x558_refbaj.png"></a>

1. Select Every ...period to refresh data, scroll down to:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1709177495/powerbi-alert-when-1140x596_nfqor8.png"><img alt="powerbi-alert-what-1140x5968.png" width="1140" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709177495/powerbi-alert-when-1140x596_nfqor8.png"></a>

1. Select What to detect value and Threshold.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1709176975/powerbi-alert-where-798x428_zhav6a.png"><img alt="powerbi-alert-when-1140x596.png"  width="1140" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709176975/powerbi-alert-where-798x428_zhav6a.png"></a>

1. Select Where to save Workspace & Item.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1709176975/powerbi-alert-where-798x428_zhav6a.png"><img alt="powerbi-alert-where-798x428.png" width="1149" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1709176975/powerbi-alert-where-798x428_zhav6a.png"></a>

1. Click Continue to create a <strong>Reflex</strong>.

1. Click "Data Activator" for its mode tabs at the bottom of the screen: Data mode and Design mode. 

   * Click Data mode to inspect the fresh data and link it to specific objects. 
   * Click Design mode to develop triggers based on these objects. 
   <br /><br />

   Consider the following scenarios:

   * When a potential security breach is identified through real-time monitoring, immediate protective actions are initiated.

   * A warehouse manager needs to detect drops in product stocks and needs to start a reorder process to prevent running out of stock.

   * A sales associate needs to receive alerts when a potential client is visiting their website and offers to start a live chat with them.

   Copilot, an AI-powered assistant assists users in tasks like generating SQL statements, creating reports and setting up automated workflows based on triggers. By leveraging AI capabilities, Copilot streamlines and automates data-related tasks, enabling users to work more efficiently and derive actionable insights from their data.

   The <strong>Fabric engine</strong> is an upgrade from separate systems used by separate roles of people.
   So there is a lot of copying of data from one engine to another<a target="_blank" href="https://blog.fabric.microsoft.com/en-us/blog/microsoft-fabric-explained-for-existing-synapse-users?ft=Synapse:category">:</a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701048036/ADLSg2-lakehouse-864x291_d8wv2o.png"><img alt="ADLSg2-lakehouse-864x291.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701048036/ADLSg2-lakehouse-864x291_d8wv2o.png"></a>
   

### Delta (Parquet) Format

At the bottom is storage. "<a target="_blank" href="https://learn.microsoft.com/fabric/onelake/onelake-overview">One Lake</a>" is the branding for storage built on top of Azure Data Lake Storage Gen2 (ADLSg2) lakehouse that combines storage locations across different regions and clouds into a single logical lake, without moving or duplicating data (DirectLake mode).

The key enabler (for Microsoft as well as Snowflake and Databricks DeltaLake) is the <strong>Delta format</strong> (generically called "Parquet" format) that enables <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/explore-core-data-concepts/5-transactional-data-processing">ACID transactions</a> on "unstructured" data in data lakes:

   * Atomicity – each transaction is treated as a single unit, which succeeds completely or fails completely. For example, a transaction that involved debiting funds from one account and crediting the same amount to another account must complete both actions. If either action can't be completed, then the other action must fail.

   * Consistency – transactions can only take the data in the database from one valid state to another. To continue the debit and credit example above, the completed state of the transaction must reflect the transfer of funds from one account to the other.

   * Isolation – concurrent transactions cannot interfere with one another, and must result in a consistent database state. For example, while the transaction to transfer funds from one account to another is in-process, another transaction that checks the balance of these accounts must return consistent results - the balance-checking transaction can't retrieve a value for one account that reflects the balance before the transfer, and a value for the other account that reflects the balance after the transfer.

   * Durability – when a transaction has been committed, it will remain committed. After the account transfer transaction has completed, the revised account balances are persisted so that even if the database system were to be switched off, the committed transaction would be reflected when it is switched on again.

Previously, SQL and analytic data are stored in different database technologies.



* Introduction to end-to-end analytics using Microsoft Fabric - better collaboration between data engineers, data scientists, and business analysts. An analytical store that combines the file storage flexibility of a data lake with the T-SQL-based query capabilities of a data warehouse.
   * https://learn.microsoft.com/en-us/fabric/get-started/fabric-trial
   * https://learn.microsoft.com/en-us/fabric/admin/fabric-switch = Enable Fabric
   * Microsoft Fabric portal at https://app.fabric.microsoft.com
   * Pro, Premium needed to create a lakehouse
   * Default Delta Small or Large dataset storage format
* Get started with lakehouses in Microsoft Fabric <a target="_blank" href="https://microsoftlearning.github.io/mslearn-fabric/Instructions/Labs/01-lakehouse.html">Exercise</a>
   * Describe core features and capabilities of lakehouses in Microsoft Fabric
   * Dataflows (Gen2) are based on Power Query - a familiar tool to data analysts using Excel or Power BI that provides visual representation of transformations as an alternative to traditional programming.
   * Ingest data into files and tables in a lakehouse.
   * Query lakehouse tables with SQL. Shortcuts point to different storage accounts and other Fabric items like data warehouses, KQL databases, and external Lakehouses.
* Use Apache Spark in Microsoft Fabric
* Work with Delta Lake tables in Microsoft Fabric
* Use <a href="#Data+Factory">Data Factory</a> pipelines in Microsoft Fabric
* Ingest Data with Dataflows Gen2 in Microsoft Fabric

* Get started with data warehouses in Microsoft Fabric: <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/get-started-data-warehouse/7-exercise">Exercise</a>
   * Query and transform data
   * Prepare data for analysis and reporting 
   * https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-create-and-manage-relationships
   * Measures are calculated fields based on the data in the tables in your data warehouse using the Data Analysis Expressions (DAX) formula language.
   * Datasets are a semantic model with metrics that are used to create reports. 
   * <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/get-started-data-warehouse/6-security-monitor">Secure and monitor your data warehouse</a> - Data in Fabric is organized into workspaces, which are used to control access and manage the lifecycle of data and services. 
Dynamic management views (DMVs) to monitor connection, session, and request status to see live SQL query lifecycle insights.
available to use in Fabric:
   * sys.dm_exec_connections: Returns information about each connection established between the warehouse and the engine.
   * sys.dm_exec_sessions: Returns information about each session authenticated between the item and engine.
   * sys.dm_exec_requests: Returns information about each active request in a session.
item permissions in a workspace grant access to individual warehouses to enable downstream consumption of data.
* Get started with data science in Microsoft Fabric
   Promotion can be done by any workspace member who has been granted permissions.
   Certification are enabled in the tenant by the admin, and only designated certifiers can perform the endorsement. 

<hr />

<a name="Analytics"></a>

## Real-Time Analytics

   * <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-04b-fabric-lake-lab.html">HANDS-ON: Explore data analytics in Microsoft Fabric from the DP-900 labs</a>
   * <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-05c-fabric-realtime-lab.html">HANDS-ON: Explore real-time analytics in Microsoft Fabric from the DP-900 labs</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/answers/questions/1444761/fabric-real-time-analytics-sample-log-analytics-ra">Q&A</a>:

1. In "Real-Time Analytics".
1. Click "Use a sample" for this menu:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701209892/fabric-analytics-samples-970x388_bzvzr2.png"><img alt="fabric-analytics-samples-970x388.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701209892/fabric-analytics-samples-970x388_bzvzr2.png"></a>

1. Click "Log Analytics" to load and "RawSysLogsSample" appears in the left menu.
1. Click "Run". 

   <pre>Error: Semantic error: 'take' operator: Failed to resolve table or column expression named 'DownSampledTransformedLogs'
&nbsp;
 clientRequestId: </pre>

1. Click "Metrics analytics" to load and "RawServerMetricsSample" appears in the left menu.
1. Click "Run". 

   <pre>Error: Semantic error: Stored query result 'DailySQLMetrics' was not found
&nbsp;
 clientRequestId: </pre>

1. TODO: Report errors?

1. Verify:

   Check that the tables have been loaded properly by going to the "Data" section of the workspace and verifying that the tables are present.

   Check that the table and column names in the queries are correct and match the names of the tables and columns in the workspace.

   Try running the queries again after refreshing the page or restarting the workspace.


NOTE: Competition to Microsoft Synapse Real-Time Analytics is open-source <a target="_blank" href="https://pinot.apache.org/">Apache Pinot</a> which originated from within Linkedin for user-facing real-time data analytics. <a target="_blank" href="https://www.youtube.com/@StarTree">StarTree</a>.

<a target="_blank" href="https://www.youtube.com/watch?v=3zQI-DrkkdE">VIDEO</a>: Comparison: Latency. Freshness. Concurrency. Throughput. Flexibility. Cost.

Benchmarks?


<hr />

## Microsoft Purview

Among Microsoft's security portfolio: Defender XDR, Entra PIM, Intune MDM, Priva, Purview DLP, Sentinel SIEM, and Azure Security Center.

https://www.microsoft.com/en-us/security/business/microsoft-purview 
is the marketing landing page

"Microsoft Purview is a comprehensive portfolio of products spanning data governance, data security, and risk and compliance solutions."

   * https://www.microsoft.com/en-us/security/business/microsoft-purview
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#data-governance
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#data-security
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#risk-compliance
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#data-governance
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#data-security
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#risk-compliance
   <br /><br />

   "Microsoft Purview is a unified data governance platform that helps you manage and govern your on-premises, multi-cloud, and software-as-a-service (SaaS) data. Purview provides a unified view of your data estate by discovering and classifying your data, mapping data lineage, and enabling data protection."

   * <a target="_blank" href="https://www.youtube.com/watch?v=8BAeLUywEMM&t=1m30s">VIDEO</a>: 
   * <a target="_blank" href="https://www.youtube.com/watch?v=8BAeLUywEMM&t=2m40s">VIDEO</a>: 
   * <a target="_blank" href="https://www.youtube.com/watch?v=8BAeLUywEMM&t=3m30s">VIDEO</a>: 
   <br /><br />

   https://learn.microsoft.com/en-us/purview/purview describes features:
   * Data Catalog - discover and catalog data assets
   * Data Loss Prevention (DLP) - identify and protect sensitive data
   * Privileged Access Management (PAM) - manage, control, and monitor access to critical assets
   <br /><br />

   https://learn.microsoft.com/en-us/training/modules/intro-to-microsoft-purview/?source=recommendations

   Based on https://learn.microsoft.com/en-us/purview/create-microsoft-purview-portal

### Purview Account

1. Search for "Purview accounts":
   https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Purview%2FAccounts

1. Click "Create Microsoft Purview account".
   https://portal.azure.com/#create/Microsoft.AzurePurviewGalleryPackage
   
1. Select the Subscription to use.
1. Select an existing Resource group or create a new one.

   purview-west-us-231129a

   PROTIP: A Purview account needs to be created for each Region your organization operates.

1. For Microsoft Purview account name, specify the same name as the Resource Group.
1. For Location, select the same location as the Resource Group.

   Notice the CU. The default is 1. The maximum is 64.

1. In Tags, specify a tag "CreatedBy" with your name and email address as the Value.
1. Create for the Overview Deployment

   ### Purview Governance Portal

1. Enter the Purview Portal:

   https://web.purview.azure.com/

1. Select the Directory and Purview Account (just created) for the Data catalog view.
1. Expand the left menu

   * Data Catalog
   * Data Map
   * Data estate insights
   * Data Policies
   
   Not shown:
   * Data Sources
   * Data Lineage
   * Data Protection
   * Data Classification
   * Data Discovery
   * Data Governance
   <br /><br />

1. View Microsoft Purview overview at
   https://go.microsoft.com/fwlink/?linkid=2148717

   Get Started at
   https://go.microsoft.com/fwlink/?linkid=2149760

   Documentation at:
   https://go.microsoft.com/fwlink/?linkid=2148916


1. Based on "Get Started" at
   https://go.microsoft.com/fwlink/?linkid=2149760


   ### Purview Risk and Compliance

1. Enter the Compliance Portal:

   https://compliance.microsoft.com/

   ### End-to-End

   https://learn.microsoft.com/en-us/training/modules/building-end-to-end-data-governance-master-data-stack-with-microsoft-purview-cluedin/
   in 2 hr 38 min - Build an end to end data governance and master data management stack with Microsoft Purview and CluedIn


   ### Security Copilot

Microsoft's Security Copilot makes use of (Language Model Logics) to detect anomalies in logs.

   * https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview
   * https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-security-copilot?rtc=1
   * https://www.microsoft.com/en-us/security/blog/2023/11/08/insights-from-microsoft-security-copilot-early-adopters/
   <br /><br />

https://www.microsoft.com/en-us/security/blog/

<a target="_blank" href="https://clouddamcdnprodep.azureedge.net/gdc/gdcieULMS/original">PDF: Crash Course</a>

https://www.microsoft.com/en-us/security/blog/2022/03/31/3-strategies-to-launch-an-effective-data-governance-plan/



## Priva (Privacy)

https://learn.microsoft.com/en-us/privacy/priva/priva-overview

* European Union's General Data Protection Regulation (GDPR)
* California Consumer Privacy Act (CCPA)


<hr />

## DAX Studio

Among https://www.sqlbi.com/tools/

DAX Studio is an open-sourced free IDE that provides an Object Browser, query editing and execution, formula and measure editing, syntax highlighting and formatting, integrated tracing, and query execution breakdowns
to write, execute, and analyze DAX queries in Power BI Designer, Power Pivot for Excel, and Analysis Services Tabular.

Use Power BI Desktop to explore the Adventureworks database at
https://daxstudio.org/docs/tutorials/writing-dax-queries/
using these sample commands:

The syntax of DAX Queries are described by Microsoft at
https://learn.microsoft.com/en-us/dax/dax-queries

<pre>[DEFINE 
    (
     (MEASURE <em>table name</em>[<em>measure name</em>] = <em>scalar expression</em>) | 
     (VAR <em>var name</em> = <em>table or scalar expression</em>) |
     (TABLE <em>table name</em> = <em>table expression</em>) | 
     (COLUMN <em>table name</em>[<em>column name</em>] = <em>scalar expression</em>) | 
    ) + 
]
(EVALUATE
    'Internet Sales'
ORDER BY
    'Internet Sales'[Sales Order Number]
START AT "SO7000") +
</pre>

To return the calculated total sales for years 2013 and 2014, and combined calculated total sales for years 2013 and 2014, as a table. The measure in the DEFINE statement, Internet Total Sales, is used in both Total Sales and Combined Years Total Sales expressions.

<pre>DEFINE
    MEASURE 'Internet Sales'[Internet Total Sales] =
        SUM ( 'Internet Sales'[Sales Amount] )
&nbsp;
EVALUATE
SUMMARIZECOLUMNS (
    'Date'[Calendar Year],
    TREATAS (
        {
            2013,
            2014
        },
        'Date'[Calendar Year]
    ),
    "Total Sales", [Internet Total Sales],
    "Combined Years Total Sales",
        CALCULATE (
            [Internet Total Sales],
            ALLSELECTED ( 'Date'[Calendar Year] )
        )
)
ORDER BY [Calendar Year]
</pre>

References:
   * https://hevodata.com/learn/dax-studio/
   <br /><br />

<hr />

<a name="Reflex"></a>

## Reflex

Reflex rules are defined by Data Citizens and Data Analysts using the no-code GUI in Data Activator.

The Data Activator recognizes when a Reflex rule is triggered by events it monitors.


## User Communities

https://www.reddit.com/r/MicrosoftFabric/comments/14iuplv/azure_data_factory_vs_data_pipelines/

1. Get a Microsoft Tech Community ID at <a target="_blank" href="https://techcommunity.microsoft.com/">https://techcommunity.microsoft.com</a>

   https://community.fabric.microsoft.com/

   https://powerusers.microsoft.com/

   Azure Data Community at
   https://www.microsoft.com/en-us/sql-server/community?activetab=pivot:sqlservertab
   has several sub-commmunity pages.

   https://www.meetup.com/pro/azuretechgroups/ managed according to 
   https://developer.microsoft.com/en-us/azure-tech-groups/

   Azure Data Tech Groups at
   https://www.meetup.com/pro/azuredatatechgroups/
   https://www.microsoft.com/en-us/sql-server/community?activetab=pivot:sqlservertab

   https://passdatacommunitysummit.com (Nov 14-17 2023 Seattle)

   Outside of Microsoft:

   https://live360events.com/Events/Orlando-2023/Home.aspx


<hr />

## Resources

The Machine Learning done to train AI models within Microsoft Fabric uses AzureML on Synapse Spark component of Azure Synapse Analytics.

QUESTION: Microsoft Fabric is not built to work natively with OpenAI???

<a target="_blank" href="https://www.youtube.com/watch?v=bQBVNg6gEYw">VIDEO</a>:
Data Science with MLFlow (with demo):
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701712190/flow-datasci-1781x808_zswviq.png"><img alt="flow-datasci-1781x808.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701712190/flow-datasci-1781x808_zswviq.png"></a>

https://www.linkedin.com/company/microsoftfabric/


## More #

This is one of a series about cloud computing:

{% include cloud_links.html %}
