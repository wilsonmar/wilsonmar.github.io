---
layout: post
date: "2023-12-07"
file: "azure-data"
title: "Azure Data (within Microsft's cloud)"
excerpt: "Obtain storage and database skills to pass DP-900, DP-100, DP-203, DP-300 exams"
tags: [cloud, Azure]
image:
  feature: https://cloud.githubusercontent.com/assets/300046/18188069/153fbcca-706c-11e6-983d-0783da57f75c.jpg
  credit: Microsoft Azure
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/azure-data/">This</a> is the hands-on step-by-step tutorial I would give to a developer or administrator getting up and running <strong>managing data</strong> in the Azure cloud.

This are my notes to study for specific data-related <a href="https://wilsonmar.github.io/azure-certifications/">Azure certification exams</a>:

   * <a href="#DP-900">DP-900: Azure Data Fundamentals</a>
   * <a href="#DP-100">DP-100: Azure Data Scientist Associate</a>
   * <a href="#DP-203">DP-203: Azure Data Engineer Associate</a> (replaces DP-200 & DP-201)
   * <a href="#DP-300">DP-300: Azure Database Administrator Associate</a>
   * <a href="#DP-420">DP-420: Azure Cosmos DB Developer Specialty</a>
   * <a href="#DP-500">DP-500: Azure Enterprise Data Analyst Associate</a>
   * <a target="_blank" href="https://wilsonmar.github.io/microsoft-fabric/">DP-600: Fabric Analytic Engineer Associate</a>
   <br /><br />

These replace certifications about Microsoft on-prem. technologies SQL-Server and SSIS <a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/mcsa-sql2016-business-intelligence-certification/">retired Jan 31, 2021</a>:

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/70-767">70-767: Implementing a SQL Data Warehouse</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/70-768">70-768: Developing SQL Data Models</a>
   <br /><br />

{% include whatever.html %}

## Types of databases

Over time, data has been organized in different ways to better suit different ways to access data for reports and dashboards:

Traditionally, limitations in CPU and memory size required different database structures at different purposes:
For OLTP (Online Transaction Processing) data is stored for fast ingestion in rows with columns.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702039629/database-types-828x394_m9rsua.jpg">
<img alt="database-types-828x394.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702039629/database-types-828x394_m9rsua.jpg"></a>

The types of databases are: Key-value -> Column -> Document -> Relational (SQL) -> Graph -> Deltalake

<table border="1" cellpadding="4" cellspacing="0">
<tr><th>Types:</th><th>Key-value</th><th>Column</th><th>Document</th><th>Relational</th><th>Graph</th><th>Deltalake</th></tr>
<tr valign="top" align="center"><td>Complexity</td><td>none</td><td>low</td><td>low</td><td>moderate</td><td>high</td><td>high</td></tr>
<tr valign="top" align="center"><td>Performance</td><td>high</td><td>high</td><td>high</td><td>high</td><td>variable</td><td>high</td></tr>
<tr valign="top" align="center"><td>Scalability</td><td>high</td><td>high</td><td>high / variable</td><td>high</td><td>variable</td><td>high</td></tr>
<tr valign="top" align="center"><td>Flexibility</td><td>high</td><td>moderate</td><td>high</td><td>high</td><td>high</td><td>high</td></tr>
</table>

The SQL language to manipulate data was invented in the 1970s (by IBM) and standardized as ISO 9075. 
However, Oracle, Microsoft, IBM, and others each have their own proprietary dialects.
Microsft's T-SQL (for Transac-SQL) is a superset of SQL with additional commands (such as EXEC to rename databases).

The SQL language has also been enhanced for use with "NoSQL", Graph, and now Datalake databases.

The underlying <strong>format of files</strong> used to store data within Apache Spark, Hadoop "Big data" evolved from 
   1. RCFile to 
   1. ORC (Optimized Row Columnar) stores Hive data efficiently
   1. Avro (row-based)
   1. Parquet (columnal-based) used by Linux Foundation Delta Lake adopted by Apache Spark and Azure Synapsee.
   <br /><br />

For OLAP (Online Analytical Processing), large amounts of data are stored in a "star schema" in <strong>data warehouses</strong> (separate from databases for OLTP) for access to by date and other dimensions.

Wide availability of fast internet and public clouds providing a lot of fast data storage and compute has enabled a revolution in how data can be stored and accessed.

   * "Distributed database" can now span multiple regional data centers (horizontally scalable), yet globally immediately consistent. Released in 2017 (Microsoft Cosmos DB, Postgres Citus, <a target="_blank" href="https://cloud.google.com/spanner/">Google Cloud Spanner</a>)

   * "Deltalake" is a revolution because instead of arranging data in tables or graphs data for easier access, data is stored in Parquet format used by Azure Data Lake Storage Gen2, Hadoop, Databricks, <a target="_blank" href="https://wilsonmar.github.io/snowflake/">Snowflake</a>
   <br /><br />

PROTIP: <a target="_blan" href="https://parquet.apache.org/">Apache's Parquet file format</a> generally performs better than CSV because it provides efficient data compression and encoding schemes with enhanced performance to handle complex data in bulk.  It is called a <strong>"columnar"</strong> storage format similar to other columnar-storage file formats available in Hadoop (RCFile and ORC). So it is compatible with most data processing frameworks in the Hadoop environment. Apache Parquet is a free and open-source column-oriented data storage format of the Apache Hadoop ecosystem. 

   References:
   * https://www.upsolver.com/blog/apache-parquet-why-use
   * https://docs.azure.com/en-us/azure/architecture/browse/#databases
   <br /><br />


Let's first look at traditional SQL "relational" databases.

## Azure's SQL database products

1. With a Subscription, search for Azure service "SQL" at the top of the page to see that there are many services offered directly and from the Marketplace:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702008284/azure-data-sql-svcs-880x358_smd4t1.png"><img alt="azure-data-sql-svcs-880x358.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702008284/azure-data-sql-svcs-880x358_smd4t1.png"><em>Click for full screen</em></a>.

2. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-01-sql-lab.html">HANDS-ON</a>: Select "<strong>Azure SQL</strong>", which is an <strong>"umbrella"</strong> service offering different ways Azure provides SQL software [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-sql/index">DOCS</a>]

   A. "SQL virtual machines" (VMs) to lift-and-shift of <strong>SQL Server machines</strong> (along with Microsoft licenses) from on-prem. data centers.  "High availability" (with automatic backups) is an option to enable Disaster Recovery (DR). Here you manage (potentially obsolete) SQL Server and OS-level settings/configurations. [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/sql-server-on-azure-vm-iaas-what-is-overview?toc=/azure/virtual-machines/windows/toc.json">DOCS</a>] 
   
   * SQL Server 2022 Enterprise on Windows Server 2022?
   * SQL Server 2019 Enterprise on Windows Server 2019 (and earlier 2014, 2017)?
   <br /><br />

   B. "SQL managed" (single) "instances" have always up-to-date OSs managed by Azure. Used for "Arc" running Azure on customer on-prem. data centers. [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-sql/managed-instance/index">DOCS</a>]
   
   C. Azure "SQL databases" are totally managed by Microsoft in its Azure cloud as serverless hyperscale databases designed to be fault-tolerant and highly available [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-sql/database/index">DOCS</a>] The different cloud options:

   * Single (SQL) database
   * Elastic pool to manage and scale multiple databases with varying and unpredictable usage patterns, sharing a single set of resources (at a prescribed budget). [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-sql/database/elastic-pool-overview">DOCS</a>] NOTE: Dedicated SQL pools (formerly SQL DW)
   * Database server
   <br /><br />

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702014746/az-cloud-sqls-1254x246_ikhh9v.png"><img alt="az-cloud-sqls-1254x246.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702014746/az-cloud-sqls-1254x246_ikhh9v.png"></a>

   * on-prem "SQL Server stretch databases" stretches (migrates in the background) cold SQL data to the Azure cloud <a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-sql/database/stretch-database-overview">Deprecated in SQL Server 2022 (16.x) and Azure SQL Database</a>
   <br /><br />

   Among Marketplace services:

   * Azure Synapse Analytics?
   * SQL server (logical server)?
   * Web App + Database?
   <br /><br />

   Open-source SQL Managed database service (for app developers) not shown on the menu but listed in 
   * <a target="_blank" href="https://azure.microsoft.com/en-us/product-categories/databases/">Azure Databases</a> page. 
   * offerings in the <a target="_blank" href="https://learn.microsoft.com/en-us/azure/?product=databases"><strong>databases</strong> category</a>:
   <br /><br />

   * Azure Database for MySQL - One of the earliest open-sourced databases. Acquired by Sun then Oracle. It's a pure relational database, easy to setup, use, and maintain. Has multiple storage engines (InnoDB and MyIsam) [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/mysql/">DOCS</a>]
   * Azure Database for MariaDB - a fork of MySQL [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/mariadb/">DOCS</a>]
   * Azure Database for PostgreSQL - evaloved from the Ingres project at UCLA. The most advanced open-source object-relational database with single storage engine. It supports full text search, table inheritance, triggers, rows, data types, etc. [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/postgresql/">DOCS</a>]
   <br /><br />

   Other choices not shown on the menu:
   * Azure Databricks?
   * Azure SQL Edge - Small-footprint, edge-optimized data engine with built-in AI [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-sql-edge/">DOCS</a>]
   * Table Storage - NoSQL key-value store using semi-structured datasets [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/storage/tables/table-storage-overview">DOCS</a>]
   * <a name="Postgres+Citus"></a> Postgres Citus is an open-source extension that transforms Postgres into a <strong>hyperscale</strong> distributed database. It scales out PostgreSQL across multiple nodes using sharding and replication beyond 100 GB for SaaS apps that need to scale for multi-tenants and real-time analytics. It's not a good fit for transactional workloads, apps that require complex SQL queries or require a lot of data transformations.
   <br /><br />

   Non-SQL databases not shown on the menu:

   * Azure Cache for Redis - Power applications with high-throughput, low-latency data access [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/">DOCS</a>]
   * Azure confidential ledger - Tamperproof, unstructured data store hosted in trusted execution environments (TEEs) and backed by cryptographically verifiable evidence [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/confidential-ledger/">DOCS</a>]
   * Azure Cosmos DB - Fast NoSQL database with open APIs for any scale [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/cosmos-db/">DOCS</a>]
   * Azure Database Migration Service - Simplify on-premises database migration to the cloud [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/dms/">DOCS</a>]
   * Azure Managed Instance for Apache Cassandra - Automate deployment and scaling for managed open-source Apache Cassandra datacenters [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/managed-instance-apache-cassandra/">DOCS</a>]
   <br /><br />

1. Select Resource group.

1. Click "Accept offer" of first 100,000 vCore seconds and 32GB of data & 32GB of backup storage free per month for lifetime of the subscription.

   https://learn.microsoft.com/en-us/azure/azure-sql/database/free-offer?view=azuresql

1. Compose Database name with a data.

1. Compose Server name with a date suffix to make it unique, such as:

   <tt><strong>wow-westus-231207a</strong>.database.windows.net</tt>

1. Select the Location.
1. Select Authentication method.
1. Set Microsoft Entra admin. Click Select.

   ### Connection Policy

1. On the Create SQL Database page, select Next :Networking >, and on the Networking page, in the Network connectivity section, select Public endpoint. Then select Yes for both options in the Firewall rules section to allow access to your database server from Azure services and your current client IP address.

   * "Redirect" within the Azure network
   * "Proxy" (through a gateway via <strong>port 1443</strong>) for access outside the Azure network - Allow access from any IP address
   <br /><br />

   Server Firewall rules can also be set using T-SQL:
   <pre>EXECUTE sp_set_database_firewall_rule N'OnlyAllowServer','0.0.0.4','0.0.0.4';</pre>


   ### Defender

   "Microsoft Defender" is a suite of "unified" offerings to discover and classify sensitive data, protect data and respond to data risks in Azure SQL Database and Azure Synapse Analytics. It's a unified solution that includes Azure SQL Database Advanced Threat Protection (ATP) and Azure SQL Database Vulnerability Assessment (VA). It's built into Azure SQL Database and Azure Synapse Analytics and is enabled by default. It's also available for Azure SQL Managed Instance and SQL Server on Azure Virtual Machines. [<a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-sql/database/advanced-data-security">DOCS</a>]

1. Select Next: Security > and set the Enable Microsoft Defender for SQL option to "Not now" during testing.

1. Select Next: Additional Settings > and on the Additional settings tab, set the Use existing data option to Sample (this will create a sample database that you can explore later).

   PROTIP: Note the Admin Object/App ID GUID.

1. Click OK to create the database. Click "Review + Create". Click "Create".

   In the Deployment page, notice the resources created with the various IDs on the right pane.

1. Click "Go to resource".

<hr />

## Other Azure services:

* <a href="#ADF">Azure Data Factory (ADF)</a>
* Stream Analytics
* A Data Lakehouse holds raw data after ingestion. Gen2 big data analytics with Hadoop compatible access built on Azure Blob storage with a superset of POSIX permissions
* A Data Lake House (like Databricks) makes use of Spark data warehouse


<a target="_blank" href="https://learn.microsoft.com/en-us/training/courses/dp-601t00?resource_type=course&products=azure&ns-enrollment-type=Collection&ns-enrollment-id=bookmarks">
1-day course DP-601T00---A: Implementing a Lakehouse with Microsoft Fabric</a>


<hr />

<a name="DP-900"></a>

## DP-900 Azure Data Fundamentals 

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-900">
Microsoft's $99 DP-900 exam page</a> provides free tutorials.

Answer 40-60 questions in 180-minutes.

<a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-900">Microsoft's Study Guide</a>

<a target="_blank" href="https://learn.microsoft.com/en-us/training/paths/azure-data-fundamentals-explore-core-data-concepts/?ns-enrollment-type=Collection&ns-enrollment-id=0kjyh8rn5gdrjj">LEARN</a>: Core data concepts (15-20%) 

* Describe ways to represent data:
   * Describe features of structured data
   * Describe features of semi-structured
   * Describe features of unstructured data
   <br /><br />

* Identify options for data storage:
   * Describe common formats for data files
   * Describe types of databases
   <br /><br />

* Describe common data workloads:
   * Describe features of transactional workloads
   * Describe features of analytical workloads
   <br /><br />

* Identify roles and responsibilities for data workloads
   * Describe responsibilities for database administrators
   * Describe responsibilities for data engineers
   * Describe responsibilities for data analysts
   <br /><br />

<a target="_blank" href="https://docs.azure.com/en-us/learn/paths/azure-data-fundamentals-explore-relational-data/">LEARN</a>: Explore relational data in Azure (25-30%)

* Describe relational concepts:
   * Identify features of relational data
   * Describe normalization and why it is used
   * Identify common structured query language (SQL) statements
   * Identify common database objects
   <br /><br />

* Describe relational Azure data services:
   * Describe the Azure SQL family of products including Azure SQL Database, Azure SQL Managed Instance, and SQL Server on Azure Virtual Machines
   * Identify Azure database services for open-source database systems
   <br /><br />

<a target="_blank" href="https://docs.azure.com/en-us/learn/paths/azure-data-fundamentals-explore-non-relational-data/">LEARN</a>: Explore non-relational data in Azure (25-30%)

* Describe capabilities of Azure storage:
   * Describe Azure Blob storage
   * Describe Azure File storage
   * Describe Azure Table storage
   <br /><br />

Describe capabilities and features of Azure Cosmos DB
   * Identify use cases for Azure Cosmos DB
   * Describe Azure Cosmos DB APIs
   <br /><br />

<a target="_blank" href="https://docs.azure.com/en-us/learn/paths/azure-data-fundamentals-explore-data-warehouse-analytics/">LEARN</a>: 
<a target="_blank" href="https://www.linkedin.com/learning/azure-data-fundamentals-dp-900-cert-prep-4-analytics-workloads-on-azure/dp-900-exam-analytics-workloads">VIDEO</a>: 
<strong>Explore analytics in Azure (25-30%)</strong>

* Describe common elements of large-scale analytics:
   * Describe considerations for data ingestion and processing
   * Describe options for analytical data stores
   * Describe Azure services for data warehousing, including Azure Synapse Analytics, Azure Databricks, Azure HDInsight, and Azure Data Factory
   <br /><br />

* Describe consideration for real-time data analytics:
   * Describe the difference between batch and streaming data
   * Describe technologies for real-time analytics including Azure Stream Analytics, Azure Synapse Data Explorer, and Spark Structured Streaming

* Describe data visualization in Microsoft Power BI:
   * Identify capabilities of Power BI
   * Describe features of data models in Power BI
   * Identify appropriate visualizations for data
   <br /><br />

NOTE: Underlying data models can be viewed and modified for Inteeractive Reports, but not with Dashboards.

For dashboards, the PowerBI cloud service is at https://app.powerbi.com/home
* A Power BI dashboard is a single page "canvas" that tells a story through visualizations.
* A dashboard contains several tiles, each a snapshot of data, pinned to the dashboard, created from a report dataset, dashboard, Q&A box, Excel, SQL Server Reporting Services (SSRS), or a streaming dataset.
* 

<hr />

<a target="_blank" href="https://learn.microsoft.com/en-us/training/courses/sc-900t00?resource_type=course&products=azure&ns-enrollment-type=Collection&ns-enrollment-id=bookmarks">$1599 1-day (8 hour) course SC-900T00--A: Microsoft Security, Compliance, and Identity Fundamentals</a> provides live training with labs at
https://learn.microsoft.com/en-us/collections/0kjyh8rn5gdrjj
and
https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/
and assets downloaded from:
https://github.com/MicrosoftLearning/DP-900T00A-Azure-Data-Fundamentals
to Explore...

1. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-01-sql-lab.html">Azure SQL Database</a>
2. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-01a-postgresql-lab.html">Azure Database for PostgreSQL</a>
* <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-01b-mysql-lab.html">Azure Database for MySQL</a>
3. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-02-storage-lab.html">Azure Storage</a>

4. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-03-cosmos-lab.html">Azure Cosmos DB</a>
1. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-04-synapse-lab.html">Data analytics in Azure with Azure Synapse Analytics</a>
1. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-04b-fabric-lake-lab.html">Data analytics in Microsoft Fabric</a>

1. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-05-stream-lab.html">Azure Stream Analytics</a>
1. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-05a-stream-with-spark.html">Spark Streaming in Azure Synapse Analytics</a>
1. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-05b-stream-synapse-data-explorer.html">Azure Synapse Data Explorer</a>
1. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-05c-fabric-realtime-lab.html">Real-time analytics in Microsoft Fabric</a>
1. <a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-pbi-06-lab.html">Fundamentals of data visualization with Power BI</a>
<br /><br />

The Skillpipe associated with the <a target="_blank" href="https://docs.azure.com/en-us/learn/certifications/courses/dp-900t00">one-day Azure live course DP-900T00</a> roughly covers the above topics using
<a target="_blank" href="https://github.com/azureLearning/DP-900T00A-Azure-Data-Fundamentals">github.com/azureLearning/DP-900T00A-Azure-Data-Fundamentals/tree/master/Instructions</a> which redirects to a free "Azure Learn Sandbox" Directory in Azure:

<a target="_blank" href="https://docs.azure.com/en-us/learn/modules/explore-provision-deploy-relational-database-offerings-Azure/7-exercise-provision-relational-Azure-data-services">01-Provision-Azure-relational-database-services.md (4 hours)</a> Databases (Community Edition):

   * Azure SQL Database
   * Azure Database for PostgreSQL
   * Azure Database for MySQL
   <br /><br />

<a target="_blank" href="https://docs.azure.com/en-us/learn/modules/query-relational-data/6-exercise-perform-query">02-Use-SQL-to-query-Azure-SQL-Database.md</a>

<a target="_blank" href="https://docs.azure.com/en-us/learn/modules/explore-provision-deploy-non-relational-data-services-Azure/7-exercise-provision-non-relational-Azure">03-Provision-non-relational-Azure-data-services.md</a>

<a target="_blank" href="https://docs.azure.com/en-us/learn/modules/query-relational-data/6-exercise-perform-query">04-Upload-download-and-query-data-in-a-non-relational-data-store.md</a>


PROTIP: BTW Left out of the ESI list is Azure Databricks, a cloud-scale platform for data analytics and machine learning. Microsoft's live class DP-090 "Implementing a Machine Learning Solution with Microsoft Azure Databricks" shows how to use Azure Databricks to explore, prepare, and model data; and integrate Databricks machine learning processes with Azure Machine Learning.


Sample DP-900 Exams:

   * <a target="_blank" href="https://www.whizlabs.com/learn/course/microsoft-azure-dp-900/">https://www.whizlabs.com/azure-Azure-certification-dp-900/</a>
   <br /><br />

Other Tutorials:

<a target="_blank" href="https://app.pluralsight.com/paths/certificate/azure-dp-900-Azure-data-fundamentals">At Pluralsight

   * Getting Started with Azure Data Workloads by Henry Been (<a target="_blank" href="https://henrybeen.nl/">henrybeen.nl</a>)<br /><img width="299" alt="az-compute-vm-sqldb-598x614" src="https://user-images.githubusercontent.com/300046/122325915-ab809f80-cee8-11eb-8424-1d8c9fc305cb.png">
   <br /><br />

CloudAcademy: https://cloudacademy.com/exam/landing/37208/
has Knowledge checks.

* <a target="_blank" href="https://learning.oreilly.com/live-training/courses/microsoft-azure-data-fundamentals-dp-900-crash-course/0636920051861/">OReilly live crash course</a> by Emilio Melo

On LinkedIn Learning:

* <a target="_blank" href="https://www.linkedin.com/learning/paths/prepare-for-the-azure-data-fundamentals-dp-900-certification-exam">3 courses over 3 hours</a> by <a target="_blank" href="https://www.linkedin.com/in/gregorsuttie/">Gregor Suttie</a>, Adam Wilbert, Keith Atherton

On OReilly.com:

* https://learning.oreilly.com/videos/azure-overview-introduction/10009OVERVIEW/10009OVERVIEW-AZINTRO_16
“Cloud and Azure Overview” section in Azure Overview: Introduction for Beginners (video)

* https://learning.oreilly.com/videos/professional-azure-sql/9781789535495/
 Professional Azure SQL Database Administration (video, 4h 58m)

* https://learning.oreilly.com/videos/getting-started-with/9781484260203/
Getting Started with Microsoft Cosmos DB Using C#: Cloud Database Support for .NET Applications (video, 1h 2m)

* https://learning.oreilly.com/videos/learning-microsoft-power/9781789347104/
Learning Microsoft Power BI (video, 3h 55m)

* https://learning.oreilly.com/videos/create-an-azure/9781491989623/
Create an Azure SQL Data Warehouse in Minutes (video, 1h 22m)

* https://learning.oreilly.com/videos/information-management-using/9781491989647/
Information Management Using Azure Data Factory (video, 1h 16m)

<a target="_blank" href="https://www.aguidetocloud.com/full-courses/dp900fullcourse">3-hour AGuideToCloud video class by Susanth Sutheesh</a>

On YouTube:

* <a target="_blank" href="https://www.youtube.com/watch?v=P3qmqUZJ7l0">4-hour</a> from Andrew Brown
* <a target="_blank" href="https://www.youtube.com/watch?v=jopyoCgQjkM">2-hour "Full Class"</a> from Tech Tutorials with Piyush
* <a target="_blank" href="https://www.youtube.com/watch?v=XbV0Di5ggvY">2.5-hour Full Course</a> from Susanth Sutheesh
* <a target="_blank" href="https://www.youtube.com/watch?v=0gtpasITVnk">2-hour Study Cram</a> from John Savill

* <a target="_blank" href="https://www.youtube.com/watch?v=xKOiNPvAQqM">34 min. "Actual Exam Questions"</a> from CertyIQ
* <a target="_blank" href="https://www.youtube.com/watch?v=Hq1KsO0Zct8">2-hour "Exam Dumps"</a> from Clearcat.net
* <a target="_blank" href="https://www.youtube.com/watch?v=U64NZ3DjsmI&list=PL0AYtrUw-NRRVVTnRf0yi0AW-DvtLkaT2">2:29 Real Exam Questions for each part</a> from The Tech BlackBoard

* <a target="_blank" href="https://www.youtube.com/@AdamMarczakYT">Channel list of Adam Marczak</a>


<hr />

<a name="DP-100"></a>

## DP-100 Azure Data Scientist Associate

Earn the <a target="_blank" href="https://docs.azure.com/en-us/learn/certifications/exams/dp-100">DP-100 "Azure Certified: Azure Data Fundamentals" certification by passing the one $99 exam</a>. Describe ...

<a target="_blank" href="https://learn.microsoft.com/en-us/training/courses/dp-100t01?resource_type=course&products=azure&ns-enrollment-type=Collection&ns-enrollment-id=bookmarks">
4-day course DP-100T01--A: Designing and implementing a data science solution on Azure</a>

PROTIP: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/build-ai-solutions-with-azure-ml-service/">FREE LEARNING PATH: Build AI solutions with Azure Machine Learning is 9 hr 51 min</a>. It has <a target="_blank" href="https://microsoftlearning.github.io/mslearn-dp100/">hands-on exercises</a> which references <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100">https://github.com/MicrosoftLearning/mslearn-dp100</a>


<hr />

<a name="DP-203"></a>

## DP-203: Azure Data Engineer Associate

NOTE: DP-203 replaces DP-200 & DP-201.

To be an <a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/azure-data-engineer/">Azure Certified: Azure Data Engineer Associate</a>, pass the single <a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/exams/dp-203/">DP-203 exam</a>, which covers the following products:
   * Azure Synapse Analytics
   * Azure Data Factory
   * Azure Stream Analytics
   * Azure Event Hubs
   * Azure Data Lake Storage
   * Azure Databricks
   <br /><br />

The <a target="_blank" href="https://learn.microsoft.com/en-us/training/courses/dp-203t00?resource_type=course&products=azure&ns-enrollment-type=Collection&ns-enrollment-id=bookmarks">4-day course DP-203T00--A: Data Engineering on Microsoft Azure</a>
makes use of lab instructions in English at
<a target="_blank" ref="https://aka.ms/dp203labs/">aka.ms/dp203labs</a> = <a target="_blank" href="https://microsoftlearning.github.io/dp-203-azure-data-engineer/">microsoftlearning.github.io/dp-203-azure-data-engineer</a>:


* Explore Azure Synapse Analytics	Lab
* Query files using a serverless SQL pool	Suggested demo
* Transform data using a serverless SQL pool	Lab
* Analyze data in a lake database	Suggested demo
* Analyze data in a data lake with Spark	Suggested demo
* Transform data using Spark in Synapse Analytics	Lab
* Use Delta Lake in Azure Synapse Analytics	Lab
* Explore a relational data warehouse	Suggested demo
* Load Data into a Relational Data Warehouse	Lab
* Build a data pipeline in Azure Synapse Analytics	Lab
* Use an Apache Spark notebook in a pipeline	Lab
* Use Azure Synapse Link for Azure Cosmos DB	Lab
* Use Azure Synapse Link for SQL	Suggested demo
* Get started with Azure Stream Analytics	Suggested demo
* Ingest realtime data with Azure Stream Analytics and Azure Synapse Analytics	Lab
* Create a realtime report with Azure Stream Analytics and Microsoft Power BI	Suggested demo
* Use Microsoft Purview with Azure Synapse Analytics	Lab
* Explore Azure Databricks	Suggested demo
* Use Spark in Azure Databricks	Lab
* Use Delta Lake in Azure Databricks	Optional demo
* Use a SQL Warehouse in Azure Databricks	Optional demo
* Automate an Azure Databricks Notebook with Azure Data Factory	Suggested demo
<br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-203">Microsoft's $99 DP-203 exam page</a> include free tutorials.

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-data-engineer/">LEARN</a>: Design Azure data storage solutions (40-45%)
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-data-engineer/">LEARN</a>: Design data processing solutions (25-30%)
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-data-engineer/">LEARN</a>: Design for data security and compliance (25-30%)
   <br /><br />

<hr />

<a name="DP-300"></a>

## DP-300 Azure Data Engineer Associate

To be an <a target="_blank" href="https://docs.azure.com/en-us/learn/certifications/azure-database-administrator-associate/">Azure Certified: Azure Database Administrator Associate</a>, pass the single <a target="_blank" href="https://docs.azure.com/en-us/learn/certifications/exams/dp-300">DP-300</a>. 

The <a target="_blank" href="https://learn.microsoft.com/en-us/training/courses/dp-300t00?resource_type=course&products=azure&ns-enrollment-type=Collection&ns-enrollment-id=bookmarks">
4-day course DP-300T00--A: Administering Microsoft Azure SQL Solutions</a>
references (free) lab instructions in English at
<a target="_blank" href="https://aka.ms/dp300labs/">aka.ms/dp300labs</a> = https://microsoftlearning.github.io/dp-300-database-administrator/.
Modules and Exercise:
* Setup your own environment<br />
<br /><br />
Plan and Implement Data Platform Resources	
   * Lab 1 - Provision SQL Server on an Azure Virtual Machine
   * Lab 2 - Provision an Azure SQL Database
   <br /><br />
Implement a Secure Environment for a Database Service:
	* Lab 3 - Authorize access to Azure SQL Database with Azure Active Directory
   * Lab 4 - Configure Azure SQL Database firewall rules
   * Lab 5 - Enable Microsoft Defender for SQL and Data classification
   <br /><br />
Monitor and optimize operational resources in Azure SQL:
   * Lab 6 - Isolate performance problems through monitoring
   * Lab 7 - Detect and correct fragmentation issues
   <br /><br />
Optimize query performance in Azure SQL:
   * Lab 8 - Identify and resolve blocking issues
   * Lab 9 - Identify database design issues
   * Lab 10 - Isolate problem areas in poorly performing queries in a SQL Database
   <br /><br />
Automate database tasks for Azure SQL:
   * Lab 11 - Deploy Azure SQL Database using Azure Resource Manager template
   * Lab 12 - Create a CPU status alert for a SQL Server
   * Lab 13 - Deploy an automation runbook to automatically rebuild indexes
   <br /><br />
Plan and implement a high availability and disaster recovery solution:
   * Lab 14 - Configure geo-replication for Azure SQL Database
   * Lab 15 - Backup to URL and Restore from URL MicrosoftLearning/dp-300-database-administrator
   <br /><br />


References:

   * <a target="_blank" href="https://docs.azure.com/en-us/learn/paths/azure-sql-fundamentals/">LEARN: Azure SQL fundamentals</a> <a target="_blank" href="https://wilsonmar.github.io/azure-data">my Azure data notes</a>. 

   * <a target="_blank" href="https://github.com/azureLearning/DP-300T00-Administering-Relational-Databases-on-Azure/blob/master/Instructions/Labs/DP-300_01_lab.md">Lab 1</a> Using the Azure Portal and SQL Server Management Studio</a> - explore the Azure Portal and use it to create an Azure VM with SQL Server 2019 installed. Connect to the virtual machine through RDP (Remote Desktop Protocol) and restore a database using <a target="_blank" href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16">SSMS (SQL Server Management Studio)</a>.

   * <a target="_blank" href="https://github.com/azureLearning/DP-300T00-Administering-Relational-Databases-on-Azure/blob/master/Instructions/Labs/DP-300_02_lab.md">DP-300_02_lab - Lab 2 - Deploying PaaS databases</a> - configure and subsequently implement security in the Azure Portal and within the AdventureWorks database. configure basic resources needed to deploy an Azure SQL Database with a Virtual Network Endpoint. Connectivity to the SQL Database will be validated using <a href="#AzureDataStudio">Azure Data Studio</a> from the lab VM. Finally, an Azure Database for PostgreSQL will be created.

   * Plan and implement data platform resources (<a target="_blank" href="https://docs.azure.com/en-us/learn/paths/plan-implement-data-platform-resources/">LEARN</a>)

   * Implement a <strong>secure</strong> environment for a database service (<a target="_blank" href="https://docs.azure.com/en-us/learn/modules/azure-sql-secure-data/?ns-enrollment-type=LearningPath&ns-enrollment-id=learn.Azure-sql-fundamentals">INTRO</a>, <a target="_blank" href="https://docs.azure.com/en-us/learn/paths/implement-secure-environment-database-service/">LEARN</a>, <a target="_blank" href="https://github.com/azureLearning/DP-300T00-Administering-Relational-Databases-on-Azure/blob/master/Instructions/Labs/DP-300_03_lab.md">Lab 3</a>)

   * Monitor and optimize operational resources (<a target="_blank" href="https://docs.azure.com/en-us/learn/paths/monitor-optimize-operational-resources-sql-server/">LEARN</a>, <a target="_blank" href="https://github.com/azureLearning/DP-300T00-Administering-Relational-Databases-on-Azure/blob/master/Instructions/Labs/DP-300_04_lab.md">Lab 4</a>) - scope out  deliverables for a digital transformation project within AdventureWorks. Examining the Azure portal as well as other tools,  determine how to utilize native tools to identify and resolve performance related issues. Identify fragmentation within the database as well as learn steps to resolve the issue appropriately.

   * Optimize query performance (<a target="_blank" href="https://docs.azure.com/en-us/learn/paths/optimize-query-performance-sql-server/">LEARN</a>, <a target="_blank" href="https://github.com/azureLearning/DP-300T00-Administering-Relational-Databases-on-Azure/blob/master/Instructions/Labs/DP-300_05_lab.md">Lab 5</a>) - evaluate a database design for problems with normalization, data type selection and index design. Run queries with suboptimal performance, examine the query plans, and attempt to make improvements within the AdventureWorks2017 database.

   * Perform automation of tasks (<a target="_blank" href="https://docs.azure.com/en-us/learn/paths/automate-tasks-sql-server/">LEARN</a>, <a target="_blank" href="https://github.com/azureLearning/DP-300T00-Administering-Relational-Databases-on-Azure/blob/master/Instructions/Labs/DP-300_06_lab.md">Lab 6</a>) - take the information gained in the lessons to configure and subsequently implement automate processes within AdventureWorks.

   * Plan and implement a High Availability and Disaster Recovery (HADR) environment (<a target="_blank" href="https://docs.azure.com/en-us/learn/paths/plan-implement-high-availability-disaster-recovery-environment/">LEARN</a>, <a target="_blank" href="https://github.com/azureLearning/DP-300T00-Administering-Relational-Databases-on-Azure/blob/master/Instructions/Labs/DP-300_07_lab.md">Lab 7</a>) - execute two main tasks: make Azure SQL Database geo-redundant, and backup to and restore from a URL which uses Azure.

   * Perform administration by using T-SQL
   <br /><br />

<hr />

## DP-420: Azure Cosmos DB Developer Associate

To pass <a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/azure-cosmos-db-developer-specialty/">
Azure Cosmos DB Developer Associate</a>, pass the single <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-420">DP-420 exam</a>.

The <a target="_blank" href="https://learn.microsoft.com/en-us/training/courses/dp-420t00?resource_type=course&products=azure&ns-enrollment-type=Collection&ns-enrollment-id=bookmarks">
$1599 4-day course DP-420T00--A: Designing and Implementing Cloud-Native Applications Using Microsoft Azure Cosmos DB</a>
references <a target="_blank" href="https://microsoftlearning.github.io/dp-420-cosmos-db-dev/">these labs</a>
formatted from <a target="_blank" href="https://github.com/MicrosoftLearning/dp-420-cosmos-db-dev">these files</a>.

To setup:
   * Create lab resource group
   * Setup lab environment
   * Enable resource providers
Module 1 - Create an Azure Cosmos DB for NoSQL account<br />
Module 2 - Plan and implement Azure Cosmos DB for NoSQL:	
   * Configure throughput for Azure Cosmos DB For NoSQL with the Azure portal
   * Migrate existing data using Azure Data Factory
Module 3 - Connect to Azure Cosmos DB for NoSQL with the SDK:
   * Connect to Azure Cosmos DB for NoSQL with the SDK
   * Configure the Azure Cosmos DB for NoSQL SDK for offline development
Module 4 - Access and manage data with the Azure Cosmos DB for NoSQL SDKs:
   * Create and update documents with the Azure Cosmos DB for NoSQL SDK
   * Batch multiple point operations together with the Azure Cosmos DB for NoSQL SDK
   * Move multiple documents in bulk with the Azure Cosmos DB for NoSQL SDK
Module 5 - Execute queries in Azure Cosmos DB for NoSQL:
   * Execute a query with the Azure Cosmos DB for NoSQL SDK
   * Paginate cross-product query results with the Azure Cosmos DB for NoSQL SDK
Module 6 - Define and implement an indexing strategy for Azure Cosmos DB for NoSQL:
   * Review the default index policy for an Azure Cosmos DB for NoSQL container with the portal
   * Review the default index policy for an Azure Cosmos DB for NoSQL container with the portal
Module 7 - Integrate Azure Cosmos DB for NoSQL with Azure services:
   * Process change feed events using the Azure Cosmos DB for NoSQL SDK
   * Process Azure Cosmos DB for NoSQL data using Azure Functions
   * Search data using Azure Cognitive Search and Azure Cosmos DB for NoSQL
Module 8 - Implement a data modeling and partitioning strategy for Azure Cosmos DB for NoSQL:
   * Measure performance for customer entities
   * Cost of denormalizing data and aggregates and using the change feed for referential integrity
Module 9 - Design and implement a replication strategy for Azure Cosmos DB for NoSQL:
   * Connect to different regions with the Azure Cosmos DB for NoSQL SDK
   * Configure consistency models in the portal and the Azure Cosmos DB for NoSQL SDK
   * Connect to a multi-region write account with the Azure Cosmos DB for NoSQL SDK
Module 10 - Optimize query and operation performance in Azure Cosmos DB for NoSQL:
   * Optimize an Azure Cosmos DB for NoSQL container’s indexing policy for common operations
   * Optimize an Azure Cosmos DB for NoSQL container’s index policy for a specific query
Module 11 - Monitor and troubleshoot an Azure Cosmos DB for NoSQL solution:
   * Use Azure Monitor to analyze an Azure Cosmos DB for NoSQL account
   * Troubleshoot an application using the Azure Cosmos DB for NoSQL SDK
   * Store Azure Cosmos DB for NoSQL account keys in Azure Key Vault
Module 12 - Manage an Azure Cosmos DB for NoSQL solution using DevOps practices:
   * Adjust provisioned throughput using an Azure CLI script
   * Create an Azure Cosmos DB for NoSQL container using Azure Resource Manager templates
Module 13 - Create server-side programming constructs in Azure Cosmos DB for NoSQL:
   * Create a stored procedure with the Azure portal
   * Implement and then use user-defined functions with the SDK
   <br /><br />

<hr />

<a name="DP-500"></a>

Microsoft's $165 <a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/azure-enterprise-data-analyst-associate/">DP-500 Azure Enterprise Data Analyst Associate exam page</a> provides free tutorials to get advanced Power BI skills, including managing data repositories and data processing in the cloud and on-premises, along with using Power Query and Data Analysis Expressions (DAX). You should also be proficient in consuming data from Azure Synapse Analytics and should have experience querying relational databases, analyzing data by using Transact-SQL (T-SQL), and visualizing data.

<a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-500">Study Guide</a>:

The <a target="_blank" href="https://learn.microsoft.com/en-us/training/courses/dp-500t00?resource_type=course&products=azure&ns-enrollment-type=Collection&ns-enrollment-id=bookmarks">
4-day course DP-500T00--A:</a> references (free) <a target="_blank" href="https://microsoftlearning.github.io/DP-500-Azure-Data-Analyst/">labs</a> using <a target="_blank" href="https://github.com/MicrosoftLearning/DP-500-Azure-Data-Analyst/">these files</a>.

* Setup your own environment on Windows 11: 
   * Microsoft Edge
   * Git
   * <a target="_blank" href="https://aka.ms/ssmsfullsetup">SQL Server Management Studio</a>
   * <a target="_blank" href="https://www.microsoft.com/download/details.aspx?id=58494">Power BI Desktop (April 2023)</a>
   * <a target="_blank" href="https://www.microsoft.com/download/details.aspx?id=58158">Power BI Report Builder</a>
* Model, query, and explore data in Azure Synapse
   * Query files using a serverless SQL pool
   * Analyze data in a data lake with Spark
   * Explore a relational data warehouse
* Prepare data for tabular models in Power BI	
   * Create a star schema model
   * Create a dataflow
* Design and build tabular models  
   * Work with model relationships
   * Create calculation groups
   * Create a composite model
   * Enforce model security
* Optimize enterprise-scale tabular models:
   * Improve performance with hybrid tables
   * Improve query performance with dual storage mode
   * Improve query performance with aggregations
   * Use tools to optimize Power BI performance
* Implement advanced data visualization techniques by using Power BI:
   * Monitor data in real time
* Manage the analytics development lifecycle:
   * Create reusable Power BI assets


<hr />

## RBAC Permissions

SQL DB Contributor:
   * manage SQL database 
   * can't manage their security-related policies or their parent SQL servers
   <br /><br />
SQL Managed Instance Contributor:
   * manage SQL-managed instances and required network configuration
   * can't give access to others
   <br /><br />
SQL Security Manager:
   * manage security-related <strong>policies</strong> of SQL servers and databases
   * no access to SQL servers
   <br /><br />


<hr />

## Data Wrangling

The process of transforming and mapping data from a "raw" form to another format, to make it more appropriate and valuable for a variety of downstream purposes such as analytics. AKA "data munging".

1. Discovery - of domain-specific details
2. Structuring - for ease of work
3. Cleaning - remove outliers and duplicates, special characters, change null values, standardize formatting.
4. Enriching - with relevant context obtained from additional sources.
5. Validating - authenticate the reliability, quality, and safety of the data
6. Publishing - in a datastore for use downstream.

<hr />

## Data transformations

* Filter and Sort rows
* Pivot and Unpivot
* Merge and Append queries
* Split and Conditional split
* Replace values and Remove duplicates
* Add, Rename, Reorder, or Delete columns
* Rank and Percentage calculator
* Top N and Bottom N


<hr />

<a name="SQL_Server"></a>

## SQL Server (IaaS in VM)

<a target="_blank" href="https://docs.azure.com/en-us/learn/modules/azure-sql-intro/3-deployment-options">LEARN</a>:

Traditionally, <strong>SQL Server 2019</strong> software run within a single Azure VM (IaaS) instance.
This is still the approach for large (64TB) SQL databases.

<strong>SQL agent jobs</strong> back up directly to a URL linked to Azure blob storage. 
Azure provides the option to use <a href="#Redundancy">redundancy options</a> to ensure that backup files are stored safely across the geographic landscape:

Additionally, as part of the Azure SQL VM service provider, you can have your backups automatically managed by the platform.

SQL Server provides access to the underlying OS, but that also means you need to keep that OS updated.
Additionally, the <strong>SQL Server IaaS Agent Extension</strong> reduces your administrative overhead:
   * SQL Server automated backup
   * SQL Server automated patching
   * Azure Key Vault integration
   <br /><br />

When used in conjunction with Azure managed storage, a single Azure Virtual Machine provides <strong>three nines (99.9%)</strong> of high availability. That a downtime of no more than 8.77 hours each year.

In addition to Availability Groups for Virtual Machines for disaster recovery,
SQL Server has two major options for high availability: 
   * Always On availability groups and 
   * Failover Cluster Instances. 
   <br /><br />

<a target="_blank" href="https://user-images.githubusercontent.com/300046/126989207-fb0b583e-65a0-4878-bc83-a2a5bbb56581.png">
<img width="1348" alt="az-dba-sql-server-scr" src="https://user-images.githubusercontent.com/300046/126989207-fb0b583e-65a0-4878-bc83-a2a5bbb56581.png"></a>

References:
   * https://github.com/azure/sqlworkshops-sql2019workshop to learn about the latest innovations available in SQL Server 2019


### Always On availability groups (AG)

Always On availability groups are implemented between two to <strong>nine</strong> SQL Server instances running on Azure virtual machines or across Azure or an on-premises data center.

Database transactions are committed to the <strong>primary replica</strong>, and then the transactions are sent to all <strong>secondary replicas</strong>. 

Transactions are sent in either synchronously or asynchronously  availability mode, based on physical distance between servers.
   * If the workload requires the lowest possible latency or the secondary replicas are geographically spread apart, asynchronous availability mode is recommended. 
   * If the replicas are within the same Azure region and the applications can withstand some level of latency, synchronous commit mode should be considered. Synchronous mode ensures that each transaction is committed to one or more secondaries before allowing the application to continue. 
   <br /><br />

Always On availability groups provide both high availability and disaster recovery, because a single availability group can support both synchronous and asynchronous availability modes. The unit of failover for an availability group is a group of databases, and not the entire instance.

### SQL Server Failover Cluster instances

If you need to protect the entire instance, you could use a SQL Server Failover Cluster Instance (FCI), which provides high availability for an entire instance, in a single region. A FCI doesn't provide disaster recovery without being combined with another feature like availability groups or log shipping. FCIs also require shared storage that can be provided on Azure by using shared file storage or using Storage Spaces Direct on Windows Server.

For Azure workloads, availability groups are the preferred solution for newer deployments, because the shared storage require of FCIs increases the complexity of deployments. However, for migrations from on-premises solutions, an FCI may be required for application support.



<a name="Azure_SQL"></a>

## Azure SQL (PaaS)

<a target="_blank" href="https://aka.ms/azuresql4beginners">VIDEO: Azure SQL for beginners</a>

"Azure SQL Services" (for the cloud) was announced with Windows Azure <a target="_blank" href="https://www.youtube.com/watch?v=otuf3goxLsg">in 2008</a>.

In 2010, the <strong>"Azure SQL"</strong> PaaS was announced as a "cloud database offering that Azure provides as part of the Azure cloud computing platform. Unlike other editions of SQL Server, you do not need to provision hardware for, install or patch Azure SQL; Azure maintains the platform for you. You also do not need to architect a database installation for scalability, high availability, or disaster recovery as these features are provided automatically by the service."

PaaS SQL is versionless.

In 2014 announced elastic database pools, vCore choices, business-critical deployments, hyperscale, and serverless architectures.

### Service Tiers 

<a target="_blank" href="https://docs.azure.com/en-us/azure/azure-sql/database/service-tiers-general-purpose-business-critical">Tiers</a> for performance and availability using vCore pricing model:

Resource types:
   * Single Azure SQL Database
   * SQL Database / SQL Managed Instance
   * SQL Database / SQL Managed Instance pools
   <br /><br />

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Service Tier </th><th> Max. Size </th><th> Latency </th><th> Avail. SLA </th></tr>
<tr valign="top"><td> General Purpose </td><td> 4TB (8TB for Managed Instance)
   </td><td> 5-10 ms </td><td> 99.99% </td></tr>
<tr valign="top"><td> Business Critical </td><td> 4TB
   </td><td> 1-2 ms (SSD) </td><td> 99.995% in 4-node ZRS cluster</td></tr>
<tr valign="top"><td> <a target="_blank" href="https://docs.azure.com/en-us/azure/azure-sql/database/service-tier-hyperscale">Hyperscale</a> </td><td> 100TB+
   </td><td> instant backups </td><td> scales </td></tr>
</table>

With Azure SQL Database, the SQL Managed Instance handles up to 8TB databases.


Hyperscale scales up and down quickly.

"Azure Database for MySQL, PostgreSQL" also supports MariaDB.

Data Migration Assistant can recognize when
SQL Server Stretch Database migrates on-prem. 
cold table rows to Azure (to avoid buying more on-prem. storage). 
On-prem. backups can then bypass cold table rows (and run quicker).

Elastic Pool doesn't work in Hyperscale.

### Azure SQL Pricing

<a target="_blank" href="https://docs.azure.com/en-us/learn/modules/azure-sql-intro/4-purchasing-models-service-tiers">LEARN</a>: 

https://docs.azure.com/en-us/azure/sql-database/sql-database-service-tiers-dtu

The DTU (Database Transaction Unit) model isn't available in Azure SQL Managed Instance.

<a target="_blank" href="https://docs.azure.com/azure/sql-database/sql-database-purchase-models/">DOCS</a>: 
Instead of DTU, which has a bundled measure for pricing compute, storage, and IO resources,
the <strong>vCore-based pricing model</strong> has independent charges for compute, storage, and I/O.

The vCore model also allows use of Azure Hybrid Benefit for SQL Server and/or reserved capacity (pay in advance) to save money. Neither of these options is available in the DTU model.

With the Serverless Compute Tier, if there is no activity, it pauses the database and halts compute charges.

SQL Database achieves HA with "Always ON Availability Groups" tech from SQL Server,
which makes Failover automatic (but takes 30 seconds).

Up to 4 replicas can become the primary, as long as secondaries have the same user authentication config. and firewall rules as the primary.

Backups by transaction log occur every 5-10 minutes.
Backups are saved for 7 days by default (Basic plan), up to 35 days under Standard/Premium.
Long-term Retention can be up to 10 years.
Lowest RPO is one hour of data loss for RTO of up to 12 hours for geo-replication.

References:
   * https://www.oreilly.com/library/view/pro-sql-server/9781484241288/ introduces SQL Server on Linux. In the process, it walks through topics that are fundamental to SQL Server.




<hr />

## Types of data

OLTP = Data is stored one transaction at a time.

OLAP = data periodically loaded, aggregataed, stored in a cube.

   * Summary
   * Trend
   <br /><br />

<strong>Polybase</strong> is a data virtualization feature that enables SQL Server to query data using T-SQL directly from heterogenous (external) data:
   * Oracle
   * Teradata
   * MongoDB
   * Apache Hadoop clusters
   * Azure Cosmos DB
   <br /><br />

SSIS is also heterogenous

Synapse SQL is a distributed version of T-SQL, with extensions for streaming and machine learning (T-SQL PREDICT function).


## File format types:

* Binary (pdf)
* Delimited text (CSV)
* Excel (XML)
* JSON
* XML


<a name="ADF"></a>

## ADF for ETL

Azure Data Factory (ADF) is Heterogenous - it has over 100 different connectors to various other systems.

Linked service to Data Lake Store, Azure Databricks.


<a target="_blank" href="https://www.youtube.com/watch?v=YO7-XruyZvs" title="The difference between SQL Server and SQL Azure">VIDEO</a>:


<a name="CreateSQLDB"></a>
<!-- ref in Azure-computer -->

## Create SQL database using Portal GUI

<a target="_blank" href="https://microsoftlearning.github.io/DP-900T00A-Azure-Data-Fundamentals/Instructions/Labs/dp900-01-sql-lab.html">LAB</a>:
Explore Azure SQL Database

1. In the portal, get the <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/azure.Sql%2Fservers%2Fdatabases">SQL databases</a> blade after pressing G+\ or clicking the Home (3 line icon) at the top-left of the Portal.

1. "+ Create" to "Create SQL database". The menu:

   <tt>Basics  Networking  Security  Additional settings  Tags  Review+Create</tt>

1. Resource group:
1. Database name: up to 128 characters, unique on same server.
1. Server: 
1. Want to use SQL elastic pool?  Leave default: "No".

   Elastic pools have multiple Azure SQL Database instances share the same resources (memory, storage, processing).
   Elastic pools provide a simple and cost effective solution for managing the performance of multiple databases within a fixed budget. An <strong>elastic pool provides compute (eDTUs)</strong> and storage resources that are shared between all the databases it contains. 

   Databases within a pool only use the resources they need, when they need them, within configurable limits. The price of a pool is based only on the amount of resources <strong>configured</strong> and is independent of the number of databases it contains.

   PROTIP: That means databases are charged for allocations, not usage.

1. Compute + storage


## Data Flows

For answers needed today and tomorrow ...

Batch jobs - REMEMBER:

   * ETL = Extract, Transform, Load into SQL star databases with usage "schema on write" for faster read

   * ELT = Extract, Load, Transform = data saved as-is into NoSQL (document) databases with usage "schema on read" for greater scale and exploration

   * Hybrid - data ingested on-prem, transformed in the cloud
   <br /><br />

Stream Processing (real-time)


## Data Lifecycle

Pipelines:

1. Collection of data
2. Preparation of collected data
3. <a href="#Ingestion">Ingestion</a> of data into storage
4. Processing or transformation of data into a usable form
5. Analysis of transformed data


## ACID Properties in Transactional data

Atomicity - each transaction is treated as a ingle unit, which is successful completely or failed completely. Back-off intermediate changes.

Consistency - transactions can only take the data in the database from one valid state to another.

Isolation - concurrent execution of transactions leave the database in the same state.

Durability - once a transaction has been committed, it remains committed.


<hr />

<a name="ADF"></a>

## Azure Data Factory on Portal GUI

1. In the portal, click "+ Create a resource", then in "Search services and Marketplace" type enough of "Data Factory" to select it from the drop-down list.

   <img width="367" alt="az-data-fac-menu-734x410" src="https://user-images.githubusercontent.com/300046/122431224-807e6600-cf51-11eb-91b9-71a37ec18109.png">

1. Click "Create" after confirming that it's from "Azure".

   Integrate data silos with Azure Data Factory, a service built for all data integration needs and skill levels. Easily construct ETL and ELT processes code-free within the intuitive visual environment, or write your own code. Visually integrate data sources using more than 90+ natively built and maintenance-free connectors at no added cost. Focus on your data - the serverless integration service does the rest.

   * No code or maintenance required to build hybrid ETL and ELT pipelines within the Data Factory visual environment
   * Cost-efficient and fully managed serverless cloud data integration tool that scales on demand
   * Azure security measures to connect to on-premises, cloud-based, and software-as-a-service apps with peace of mind
   * SSIS integration runtime to easily rehost on-premises SSIS packages in the cloud using familiar SSIS tools
   <br /><br />

1. Resource group:
1. Database name: up to 128 characters, unique on same server.
1. Server: 


ADF automates data movement and transformation (ETL).

ADF can spin up and down HDInsights clusters.

Process in Factory Resources:

1. Pipeline
2. Combine datasets (sources)
3. Data flows: Select columns
4. Write output to target datasets (using Power Query?)

See Pluralsight: "Building your First Data Pipeline in Azure Data Factory" by Emillio Melo


<a name="PowerBI"></a>

## PowerBI

See my <a target="_blank" href="https://wilsonmar.github.io/powerbi">PowerBI notes</a>

See Pluralsight: "Building your First Power BI Report"



## SQL Server Management Studio (SSMS)

SSMS is integrated to visualize and work with Azure SQL, including SQL Server in virtual machines, SQL managed instances, and SQL databases. When necessary, SSMS shows only options that work for a specific Azure service.

https://docs.azure.com/en-us/sql/ssms/download-sql-server-management-studio-ssms
Installer


<a name="AzureDataStudio"></a>

## Azure Data Studio

Azure Data Studio is an open-source, cross-platform client GUI tool for querying and working with various Azure data sources, including SQL Server and Azure SQL. Its "notebooks" allows mixing runnable code cells and formatted text in one place.

![az-data-studio](https://user-images.githubusercontent.com/300046/126932768-c2279fb2-826d-4ca7-bacd-10a1be11b7f9.png)

https://docs.azure.com/en-us/sql/azure-data-studio/download-Azure-data-studio



## Azure Synapse NoSQL

<a target="_blank" href="https://www.azure.com/videoplayer/embed/RE4Asf7">VIDEO</a>:
How to configure Data Factory to ingest data for Azure Synapse Analytics.

Azure Synapse Analytics was rebranded from "Azure SQL Data Warehouse".

Integrates with Apache Spark.
(Spark jobs can also be run in Azure Databricks and Azure HDInsight)

Synapse has a "Massively Parallel" engine of partitioned instances (sharding)

<a target="_blank" href="https://learn.microsoft.com/en-us/azure-data-studio/download-azure-data-studio?tabs=win-install%2Cwin-user-install%2Credhat-install%2Cwindows-uninstall%2Credhat-uninstall">Data Studio is installed</a> automtically 
when SQL Server Management Studio (SSMS) 18.7, Azure Data Studio is installed.


<hr />

<a name="CosmoDB"></a>

## Non-Relational CosmosDB

1. Search for service "Cosmos" for a list of services:

   <a target="_blan" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702173114/azure-cosmos-svcs-1554x650_wqfeza.png"><img alt="azure-cosmos-svcs-1554x650.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702173114/azure-cosmos-svcs-1554x650_wqfeza.png"></a>

1. Click "+ Create" to create a new Cosmos DB account.

   <a target="_blan" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702173114/azure-cosmos-svcs-1554x650_wqfeza.png"><img alt="azure-cosmos-svcs-1554x650.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702173114/azure-cosmos-svcs-1554x650_wqfeza.png"></a>

<hr />

<a name="Databricks"></a>

## Databricks 

https://learn.microsoft.com/en-us/azure/databricks/getting-started/free-training
from the Databricks Academy at https://www.databricks.com/learn/training/home
with videos at https://www.youtube.com/@Databricks

https://www.databricks.com/learn/training/lakehouse-fundamentals-accreditation#video
2-hour Delta Lakehouse Fundamentals

$200 Annual subscription for all classes at
https://customer-academy.databricks.com/learn
Six 2 hour "Get Started" E-learning classes



<a name="HDInsight"></a>

## HDInsight "big data"

Batch-only (runs cannot be stopped).

But can scale up and down.

* Kafka - stream processing message broker
* Hadoop - Distributed file system
* Spark - data cluster computing
* Apache Storm - real-time analytics Stream computation

Azure Glue is a  fully managed extract, transform, and load (ETL) service that you can use to prepare and load data for analytics.

## MongoDB

MongoDB can be used as a file system called GridFS. It stores files up to 16TB with load balancing and data replication over multiple machines.



<hr />

## Azure Storage products

Microsoft has these offerings in the <a target="_blank" href="https://learn.microsoft.com/en-us/azure/?product=storage"><strong>storage</strong> category</a>:

* Archive Storage - Industry leading price point for storing rarely accessed data [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview">DOCS</a>]
* Avere vFXT for Azure - Run high-performance, file-based workloads in the cloud [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/avere-vfxt/">DOCS</a>]
* Azure Backup - Simplify data protection and protect against ransomware [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/backup/">DOCS</a>]
* Azure confidential ledger - Tamperproof, unstructured data store hosted in trusted execution environments (TEEs) and backed by cryptographically verifiable evidence [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/confidential-ledger/">DOCS</a>]
* Azure Container Storage - Manage persistent volumes for stateful container applications [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/storage/container-storage/">DOCS</a>]
* Azure Data Lake Storage - Massively scalable, secure data lake functionality built on Azure Blob Storage [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction">DOCS</a>]
* Azure Data Share - A simple and safe service for sharing big data with external organizations [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/data-share/">DOCS</a>]
* Azure Elastic SAN (Preview) - Elastic SAN is a cloud-native Storage Area Network (SAN) service built on Azure. Gain access to an end-to-end experience like your on-premises SAN. [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/storage/elastic-san/">DOCS</a>]
* Azure Files - Simple, secure and serverless enterprise-grade cloud file shares [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/storage/files/">DOCS</a>]
* Azure FXT Edge Filer - Hybrid storage optimization solution for HPC environments [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/fxt-edge-filer/">DOCS</a>]
* Azure HPC Cache - File caching for high-performance computing (HPC) [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/hpc-cache/">DOCS</a>]
* Azure Managed Lustre - A fully managed, cloud-based parallel file system that enables customers to run their high-performance computing (HPC) workloads in the cloud [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-managed-lustre/">DOCS</a>]
* Azure NetApp Files - Enterprise-grade Azure file shares, powered by NetApp [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/azure-netapp-files/">DOCS</a>]
* Blob Storage - REST-based object storage for unstructured data [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/storage/blobs/">DOCS</a>]
* Data Box - Appliances and solutions for offline data transfer to Azure [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/databox/">DOCS</a>]
* Disk Storage - High-performance, highly durable block storage for Azure Virtual Machines [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview">DOCS</a>]
* Queue Storage - Effectively scale apps according to traffic [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/storage/queues/">DOCS</a>]
* Storage - Durable, highly available, and massively scalable cloud storage [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/storage/">DOCS</a>]
* Storage Explorer - View and interact with Azure Storage resources [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/vs-azure-tools-storage-manage-with-storage-explorer">DOCS</a>]
* StorSimple - Lower costs with an enterprise hybrid cloud storage solution [<a target="_blank" href="https://learn.microsoft.com/en-us/azure/storsimple/">DOCS</a>]
<br /><br />


<a target="_blank" href="https://www.youtube.com/watch?v=P3qmqUZJ7l0&t=3h47m33s">DEMO</a>: Create Blob and File storage

https://www.techtarget.com/searchstorage/tutorial/How-to-create-an-Azure-Data-Lake-Storage-Gen2-account

https://www.techtarget.com/searchstorage/tip/Compare-Azure-Blob-Storage-vs-Data-Lake

1. Create a storage account. REMEMBER: Name must be 24 characters or less.
1. For Performance: when selecting Premium (SSD) for low latency:
   * "Block blobs: Best for high transaction rates or low storage latency", storing large amounts of text or binary data, storing data for streaming and storing data for backup and restore scenarios.
   * "File shares: Best for enterprise or high-performance applications that need to scale", and scenarios that require a fully SMB compatible file system.
   * "Page blobs: Best for random read/write operations" and frequent read/write operations in small ranges.
   <br /><br />

   ### Redundancy

1. For Redundancy: (to achieve disaster recovery): [<a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy">DOCS</a>]

   * LRS = Locally redundant storage : "Lowest-cost option with basic protection against server rack and drive failures. Recommended for non-critical scenarios." Data is replicated three times within a single facility in a single region.

   * LRS premium
   
   * ZRS = Zone-redundant storage : "Intermediate option with protection against datacenter-level failures. Recommended for high availability scenarios."<br />Data is replicated synchronously across three Azure availability zones in a single region.
   
   * GRS = Geo-redundant storage : "Intermediate option with failover capabilities in a secondary region. Recommended for backup scenarios."<br />Data is replicated synchronously across three Azure availability zones in a single region, and then asynchronously to a paired region.

   * GZRS = Geo-zone-redundant storage : "Optimal data protection solution that includes the offerings of both GRS and ZRS. Recommended for critical data workloads."<br />Data is replicated synchronously across three Azure availability zones in a single region, and then asynchronously to a paired region that is geographically distant from the primary region.

   * RA-GRS = Read-Access Geo-Redundant Storage : GRS plus read access to the secondary region. Recommended for scenarios requiring read access in the secondary region.<br />Data is replicated synchronously across three Azure availability zones in a single region, and then asynchronously to a paired region that is geographically distant from the primary region.
   
   * RA-ZGRS = Read-Access Geo-Zone-Redundant Storage : GZRS plus read access to the secondary region. Recommended for scenarios requiring read access in the secondary region."<br />Data is replicated synchronously across three Azure availability zones in a single region, and then asynchronously to a paired region that is geographically distant from the primary region. This is the Highest-cost option with the highest level of availability and durability.

1. for "Read-access geo-redundant storage (RA-GRS)" is selected, also check "Make read access to data available in the event of regional unavailability" 

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702090058/azure-data-regional-205x808_mjwbvk.png"><img align="right" width="205" alt="azure-data-regional-205x808.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702090058/azure-data-regional-205x808_mjwbvk.png"></a>
   <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/storage/blobs/">PRICING</a> for data storage is based on several factors. But the basic cost of the first 50 TB of LRS Hot Hierarchical Gen2 storage, by Region/Location, in $/GB/Month USD. <a target="_blank" href="https://7451111251303.gumroad.com/l/fjkxm">According to my calculations (in an Excel file) on Dec 8, 2023</a>:
   
   <strong>Brazil Southeast</strong> (in red) is the most expensive -- 2.35 times the cost of the cheapest region, West US 2.
   
   That's before adding costs for reservations, time lengths, Data egress fees, etc. which can be substantial and dramatically impact the storage budget. 

<hr />

## Social

<a target="_blank" href="https://www.azure.com/en-us/sql-server/community?activetab=pivot_1:primaryr4">
Azure Data Community</a> lists blogs, websites, videos, podcasts, and meetups.

https://www.twitch.tv/425show

<hr />

## Resources

## More #

This is one of a series about cloud computing:

{% include cloud_links.html %}
