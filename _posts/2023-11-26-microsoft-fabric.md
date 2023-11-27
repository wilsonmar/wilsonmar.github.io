---
layout: post
date: "2023-11-26"
file: "microsoft-fabric"
title: "Microsoft Fabric"
excerpt: "Get skilled in the multicloud data handling and analystics and pass the DP-600 exam"
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

<a target="_blank" href="https://wilsonmar.github.io/microsoft-fabric/">This</a> is the hands-on step-by-step tutorial I would give to a developer or administrator getting up and running the <strong>Microsoft Fabric</strong> cloud and pass <a href="https://wilsonmar.github.io/azure-certifications/">Azure certification exam</a>

   * <a href="#DP-600">DP-600: Fabric Analytic Engineer Associate</a>
   <br /><br />

{% include whatever.html %}

Microsoft Fabric is a platform that allows users to get, create, share, and visualize data using an array of tools. 

It was unveiled at Microsoft's Build 2023 conference.

1. The marketing homepage for Fabric is:

   <a target="_blank" href="https://www.microsoft.com/en-us/microsoft-fabric">https://www.microsoft.com/en-us/microsoft-fabric</a>

   This articles covers keywords on that page:
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

   Let's dive into the portal to work with Microsoft Fabric:

1. PROTIP: In an internet browser (Safari, Google Chrome, etc.) I click the icon next to the browser's three-dot menu to use a <strong>browser profile</strong> that retains the browser history for the <strong>work (organizational) account</strong> I need to use with Fabric.
   <a name="AdminMenu"></a>
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701041117/fabric-signin-318x367_lf2lqp.png"><img alt="fabric-signin-318x367.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701041117/fabric-signin-318x367_lf2lqp.png"></a>

   <a name="HomePage"></a>
1. REMEMBER: The Microsoft Fabric home page host name is Microsoft and not Azure:

   <a target="_blank" href="https://app.fabric.microsoft.com">https://app.fabric.microsoft.com</a>

   This is because Microsoft intends Fabric to be a service that can exchange data with competing clouds such as AWS and GCP as well as on-prem. data centers (through Microsoft's Arc). Fabric's capabilities catches up to what <a target="_blank" href="https://wilsonmar.github.io/snowflake/">Snowflake</a> and Databricks have been offering.

1. What I call the "bouncer" page ensures that only <strong>organizational</strong> emails (work or school account) use Fabric. Your personal gmail or outlook.com account is no good here. Wow.

   PROTIP: This means that you must setup Azure subscriptions using your work or school account, not your personal account.

   PROTIP: Setup different browser profiles for different accounts. Click the profile icon at the top right of the browser window to switch between profiles.

1. Click the big round gray icon at the upper side of the Fabric page for the <a href="#AdminMenu">Admin/Sign In menu above</a>.

   
   ### Trial

1. Click the green <strong>Start trial</strong> box.

   Notice the word "capacity" instead of "instances" because Fabric is a <strong>serverless</strong> service.

1. Click "Start trial" to start a 30-day trial. 

   PROTIP: In your Calendar, add a reminder to cancel the trial before the 30 days are up.
   
   The trial is for the <strong>Pro</strong> tier, which is the middle tier. The <strong>Premium</strong> tier is the top tier.

   We'll come back to the "Learn more" link at: https://go.microsoft.com/fwlink/?linkid=2227617  which expands to
   
   https://learn.microsoft.com/en-us/fabric/get-started/fabric-trial

1. Select your Country (for data sovereignty) and Phone number (for SMS text verification).
1. Click <strong>Start my new trial</strong>. This creates a new <a target="_blank" href="https://learn.microsoft.com/en-us/microsoft-365/education/deploy/intro-azure-active-directory#what-is-an-azure-ad-tenant">Entra ID</a> (Azure Active Directory) <a target="_blank" href="https://learn.microsoft.com/en-us/entra/fundamentals/create-new-tenant">tenant</a> tied to a DNS domain name to provide identity and access management (IAM) capabilities to applications and resources.

   1 TB is allocated to OneLake storage.

   64 capacity unit (CU)s allow consumption of 64x60 CU seconds every minute when "experiences" are run. 
   
   PROTIP: When the capacity consumption exceeds its size, Microsoft slows down the experience similar to slowing down CPU performance.

1. <a target="_blank" href="https://www.youtube.com/watch?v=l3cpnX0mpXE">VIDEO</a>: <a target="_blank" href="https://blog.fabric.microsoft.com/en-US/blog/capacity-metrics-in-microsoft-fabric/">BLOG</a>: <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/enterprise/metrics-app">Monitor Capacity usage</a> using:
   
1. In PowerBI, <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/enterprise/metrics-app-install?tabs=1st">install the Microsoft Fabric Capacity Metrics app</a> to access:

   <a target="_blank" href="https://app.fabric.microsoft.com/capacity/">https://app.fabric.microsoft.com/capacity</a>

1. Click <a href="#HomePage">"Fabric Home Page"</a> which takes you back to

   https://app.fabric.microsoft.com/home?experience=fabric


   ### Learning sites

1. Click the <strong>Admin</strong> icon at the top right of the page to see the number of days remaining in the trial.

1. PROTIP: Instead of clicking this <strong>Learn more</strong> link for the "Get started" tutorial, copy the URL and switch to your personal browser profile so you get points for learning,

   This article contains information from the following sources:

   * https://learn.microsoft.com/en-us/fabric/get-started/fabric-trial

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-data-fundamentals-explore-data-warehouse-analytics/">Microsoft Documentation for Microsoft Fabric</a>

   * https://learn.microsoft.com/en-us/fabric/
   * https://learn.microsoft.com/en-us/training/paths/get-started-fabric

   * <a target="_blank" href="https://learn.microsoft.com/en-us/collections/w2gkhrkzzmym?WT.mc_id=cloudskillschallenge_a68d938a-58b7-403e-89f2-b2305edb7c41">Microsoft Ignite: Microsoft Fabric Skills Challenge</a>

   * https://aka.ms/Fabric-Hero-Blog-Ignite23


<a name="DP-600"></a>

## DP-600 Fabric Analytic Engineer Associate

Microsoft's $165 <a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/fabric-analytics-engineer-associate/">DP-600 Fabric Analytic Engineer Associate exam page</a> provides free tutorials.
<a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-600">Study Guide</a>

<strong>Plan, implement, and manage a solution for data analytics (10–15%)</strong>

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

<strong>Prepare and serve data (40–45%)</strong>

Create objects in a lakehouse or warehouse:
   * Ingest data by using a data pipeline, dataflow, or notebook
   * Create and manage shortcuts
   * Implement file partitioning for analytics workloads in a lakehouse
   * Create views, functions, and stored procedures
   * Enrich data by adding new columns or tables
   <br /><br />

Copy data
   * Choose an appropriate method for copying data from a Fabric data source to a lakehouse or warehouse
   * Copy data by using a data pipeline, dataflow, or notebook
   * Add stored procedures, notebooks, and dataflows to a data pipeline
   * Schedule data pipelines
   * Schedule dataflows and notebooks
   <br /><br />

Transform data
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

Optimize performance
   * Identify and resolve data loading performance bottlenecks in dataflows, notebooks, and SQL queries
   * Implement performance improvements in dataflows, notebooks, and SQL queries
   * Identify and resolve issues with Delta table file sizes
   <br /><br />

<strong>Implement and manage semantic models (20–25%)</strong>

Design and build semantic models
   * Choose a storage mode, including Direct Lake
   * Identify use cases for DAX Studio and Tabular Editor 2
   * Implement a star schema for a semantic model
   * Implement relationships, such as bridge tables and many-to-many relationships
   * Write calculations that use DAX variables and functions, such as iterators, table filtering, windowing, and information functions
   * Implement calculation groups, dynamic strings, and field parameters
   * Design and build a large format dataset
   * Design and build composite models that include aggregations
   * Implement dynamic row-level security and object-level security
   * Validate row-level security and object-level security
   <br /><br />

Optimize enterprise-scale semantic models
   * Implement performance improvements in queries and report visuals
   * Improve DAX performance by using DAX Studio
   * Optimize a semantic model by using Tabular Editor 2
   * Implement incremental refresh
   <br /><br />

<strong>Explore and analyze data (20–25%)</strong>

Perform exploratory analytics
   * Implement descriptive and diagnostic analytics
   * Integrate prescriptive and predictive analytics into a visual or report
   * Profile data
   <br /><br />

Query data by using SQL
   * Query a lakehouse in Fabric by using SQL queries or the visual query editor
   * Query a warehouse in Fabric by using SQL queries or the visual query editor
   * Connect to and query datasets by using the XMLA endpoint
   <br /><br />


### Product Component "Experiences"

1. Click the Microsoft Fabric icon at the bottom of the screen for a list of product components (without the vague marketing generalizations):

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701046058/fabric-menu-624x584_de9vj1.png"><img alt="fabric-menu-624x584.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701046058/fabric-menu-624x584_de9vj1.png"></a>

   Notice that there is a group of <strong>Synapse brand</strong> data products with blue icons.
   Synapse is on Azure as a Platform-as-a-Service (PaaS)

   ### Fabric Roles & Permissions

   The <strong>Fabric engine</strong> is an upgrade from separate systems used by separate roles of people.
   So there is a lot of copying of data from one engine to another<a target="_blank" href="https://blog.fabric.microsoft.com/en-us/blog/microsoft-fabric-explained-for-existing-synapse-users?ft=Synapse:category">:</a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701048036/ADLSg2-lakehouse-864x291_d8wv2o.png"><img alt="ADLSg2-lakehouse-864x291.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701048036/ADLSg2-lakehouse-864x291_d8wv2o.png"></a>
   
   Use <a target="_blank" href="https://adatis.co.uk/microsoft-fabric-announcement-accelerate-your-data-potential/">this</a> to assign permissions for various Fabric "experiences" (sub-products):

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701057314/fabric-roles-1414x725_an4uxn.png"><img alt="fabric-roles-1414x725.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701057314/fabric-roles-1414x725_an4uxn.png"></a>

      * Data Engineers
      * Data scientists
      * Data (Business) Analysts
      * Data Citizen
      <br /><br />

   PROTIP: I created this diagram to describe the components of Fabric. Click to see the full-size image:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1700964204/azure-onelake-1659x849_robwur.png"><img alt="azure-onelake-1659x849.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1700964204/azure-onelake-1659x849_robwur.png"></a>

   At the bottom is storage. "<a target="_blank" href="https://learn.microsoft.com/fabric/onelake/onelake-overview">One Lake</a>" is the branding for storage built on top of Azure Data Lake Storage Gen2 (ADLSg2) lakehouse that combines storage locations across different regions and clouds into a single logical lake, without moving or duplicating data (DirectLake mode).


   ### Delta (Parquet) Format

   The key enabler (for Microsoft as well as Snowflake and Databricks DeltaLake) is the <strong>Delta format</strong> (generically called "Parquet" format) that enables ACID transactions on "unstructured" data in data lakes.

   Previously, SQL and analytic data are stored in different database technologies.


   ### Workflow with Fabric 

Microsoft Fabric offers a centralized storage solution, eliminating data fragmentation and promoting data integrity. 

   Fabric aims to eliminate silos and remove data duplication by providing a single platform for <strong>collaboration</strong> among data engineers, data scientists, and business analysts. The <a target="_blank" href="https://learn.microsoft.com/fabric/data-engineering/tutorial-lakehouse-introduction">flow</a> is:
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701049746/fabric-flow-842x516_bcpj9q.jpg"><img alt="fabric-flow-842x516.jpeg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701049746/fabric-flow-842x516_bcpj9q.jpg"></a>

   <a target="_blank" href="https://justb.dk/blog/2023/11/fabric-data-lakehouse-understanding-the-dataflow/">This article</a> describes the flow in detail.

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

   Learn more:

1. Synapse Data Warehouse: support <strong>data use</strong> from SQL Endpoints.

   * https://learn.microsoft.com/en-us/training/modules/get-started-data-warehouse/
   <br /><br />

1. Synapse Data Engineering: run <strong>Notebooks</strong> within the Spark platform for <strong>data transformation</strong> at scale.

   * https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/
   <br /><br />

1. Synapse Data Science: model training and execution tracking in a scalable environment using Azure Machine Learning and Spark.

   * https://learn.microsoft.com/en-us/training/modules/get-started-data-science-fabric/
   <br /><br />

1. Synapse Real-Time Analytics: real-time analytics to query and analyze large volumes of data in real-time.

1. Data Factory: data integration <strong>pipelines</strong> to copy data and orchestrate data processing, combining Power Query. or Dataflows (Gen2) to Import and transform data from a range of sources using Power Query Online, and load it directly into a table in the lakehouse.

   * https://learn.microsoft.com/en-us/training/modules/use-data-factory-pipelines-fabric/

1. Power BI: business intelligence for translating data to decisions. Power BI administrators are now <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/admin/microsoft-fabric-admin">Fabric administrators</a>.

1. <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/get-started-data-activator-microsoft-fabric/">Data Activator</a>: "Insight to action" takes action based on what's happening in your data. 
   * https://learn.microsoft.com/en-us/training/modules/get-started-data-activator-microsoft-fabric/

      Consider the following three scenarios:

      * A network administrator detects potential security breaches through real-time monitoring and initiates immediate protective actions.

      * A warehouse manager needs to detect drops in product stocks and needs to start a reorder process to prevent running out of stock.

      * A sales associate needs to receive alerts when a potential client is visiting their website and offers to start a live chat with them.

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
* Use Data Factory pipelines in Microsoft Fabric
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

## Resources

## More #

This is one of a series about cloud computing:

{% include cloud_links.html %}
