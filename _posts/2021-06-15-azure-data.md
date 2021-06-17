---
layout: post
title: "Azure Data (within Microsoft's cloud)"
excerpt: "VMs, Scale Sets, App Services, Websites, Function Apps, Logic Apps, Docker Containers, AKS"
tags: [cloud, azure]
date: "2021-06-15"
file: "azure-data"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/18188069/153fbcca-706c-11e6-983d-0783da57f75c.jpg
  credit: Microsoft Azure
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/azure-data/">This</a> is the hands-on step-by-step tutorial I would give to a developer or administrator getting up and running <strong>managing data</strong> Azure cloud.

Earn the "Microsoft Certified: Azure Data Fundamentals" certification by passing the one $99 exam: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-900">https://docs.microsoft.com/en-us/learn/certifications/exams/dp-900</a>: Describe ...

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-data-fundamentals-explore-core-data-concepts/">LEARN</a>: Core data concepts (15-20%) 

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-data-fundamentals-explore-relational-data/">LEARN</a>: how to work with relational data on Azure (25-30%)

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-data-fundamentals-explore-non-relational-data/">LEARN</a>: how to work with non-relational data on Azure (25-30%)

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-data-fundamentals-explore-data-warehouse-analytics/">LEARN</a>: an analytics workload on Azure (25-30%) 
   <br /><br />

The Skillpipe associated with the one-day Microsoft live course DP-900T00 roughly covers the above topics.


## Video DP-900 exam prep

<a target="_blank" href="https://app.pluralsight.com/paths/certificate/microsoft-dp-900-azure-data-fundamentals">At Pluralsight

   * Getting Started with Azure Data Workloads by Henry Been (<a target="_blank" href="https://henrybeen.nl/">henrybeen.nl</a>)<br /><img width="299" alt="az-compute-vm-sqldb-598x614" src="https://user-images.githubusercontent.com/300046/122325915-ab809f80-cee8-11eb-8424-1d8c9fc305cb.png">

At CloudAcademy: https://cloudacademy.com/learning-paths/dp-900-exam-preparation-microsoft-azure-data-fundamentals-2256/
has Knowledge checks.


## Sample Exams

* <a target="_blank" href="https://www.whizlabs.com/microsoft-azure-certification-dp-900/">https://www.whizlabs.com/microsoft-azure-certification-dp-900/</a>

<a name="CreateSQLDB"></a>
<!-- ref in azure-computer -->

## Create SQL database using Portal GUI

1. In the portal, get the <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Sql%2Fservers%2Fdatabases">SQL databases</a> blade after pressing G+\ or clicking the Home (3 line icon) at the top-left of the Portal.
1. "+ Create" to "Create SQL database". The menu:

   <tt>Basics  Networking  Security  Additional settings  Tags  Review+Create</tt>

1. Resource group:
1. Database name: up to 128 characters, unique on same server.
1. Server: 
1. Want to use SQL elastic pool?  Leave default: "No".

   Elastic pools provide a simple and cost effective solution for managing the performance of multiple databases within a fixed budget. An <strong>elastic pool provides compute (eDTUs)</strong> and storage resources that are shared between all the databases it contains. 

   Databases within a pool only use the resources they need, when they need them, within configurable limits. The price of a pool is based only on the amount of resources <strong>configured</strong> and is independent of the number of databases it contains.

   PROTIP: That means databases are charged for allocations, not usage.

1. Compute + storage


## Jobs

Azure Blue

## ACID Properties in SQL

Atomicity

C

I

D

## Data Flow



## Azure Data Factory FUSE

ADF automates data movement and transformation (ETL).

ADF can spin up and down HDInsights clusters.

Process in Factory Resources:

1. Pipeline
2. Combine datasets (sources)
3. Data flows: Select columns
4. Write output to target datasets (using Power Query?)

See Pluralsight: "Building your First Data Pipeline in Azure Data Factory" by Emillio Melo

## PowerBI

1. PowerBI

See Pluralsight: "Building your First Power BI Report"

## SQL

With Azure SQL Database, The SQL Managed Instance handles up to 8TB databases
Microsoft takes care of updates to the operating system and MS SQL software.

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Tier </th><th> Max. Size </th><th> Latency </th><th> Avail. SLA </th></tr>
<tr valign="top"><td> General Purpose </td><td> 4TB (8TB for Managed Instance)
   </td><td> 5-10 ms </td><td> 99.99% </td></tr>
<tr valign="top"><td> Hyperscale </td><td> 100TB
   </td><td> instant backups </td><td> scales </td></tr>
<tr valign="top"><td> Business Critical </td><td> 4TB
   </td><td> 1-2 ms (SSD) </td><td> 99.995% in 4-node ZRS cluster</td></tr>
</table>

Hyperscale scales up and down quickly.

Azure Database for MySQL, PostgreSQL
Microsoft also supports MySQL, MariaDB, and PostgreSQL.

Data Migration Assistant can recognize when
SQL Server Stretch Database migrates on-prem. cold table rows to Azure (to avoid buying more on-prem. storage). On-prem. backups can then bypass cold table rows (and run quicker).

Elastic Pool doesn't work in Hyperscale.

<a target="_blank" href="https://docs.microsoft.com/azure/sql-database/sql-database-purchase-models/">DOCS</a>: Instead of DTU, which has a bundled measure for pricing compute, storage, and IO resources,
the <strong>vCore-based pricing model</strong> has independent charges for compute, storage, and I/O.

With the Serverless Compute Tier, if there is no activity, it pauses the database and halts compute charges.

SQL Database achieves HA with "Always ON Availability Groups" tech from SQL Server,
which makes Failover automatic (but takes 30 seconds).

Up to 4 replicas can become the primary, as long as secondaries have the same user authentication config. and firewall rules as the primary.

Backups by transaction log occur every 5-10 minutes.
Backups are saved for 7 days by default (Basic plan), up to 35 days under Standard/Premium.
Long-term Retention can be up to 10 years.
Lowest RPO is one hour of data loss for RTO of up to 12 hours for geo-replication.


## NoSQL Azure Synapse

Azure Synapse Analytics was rebranded from "Azure SQL Data Warehouse".

Integrates with Apache Spark.
(Spark jobs can also be run in Azure Databricks and Azure HDInsight)



## Non-Relational CosmosDB



## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
