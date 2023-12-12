---
layout: post
date: "2023-12-11"
file: "databricks"
title: "Databricks"
excerpt: "Create Analytics visualization dashboards pulling from Datalakes and DeltaLakes SaaS on Azure and AWS, coding ApacheSpark SQL, Python Notebooks, low-code AutoML,  and MLFlow"
tags: [dataops]
image:
# splunk-lakehouse-1900x500.png
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1690608436/splunk-lakehouse-1900x500_bk8lc2.png
  credit: Lodge at Whitefish Lake, Montana
  creditlink: https://lodgeatwhitefishlake.com/location
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article aims to avoid "salesy" generalizations to present a deep yet succinct hands-on tutorial so you get perficient quickly.

{% include whatever.html %}

<a target="_blank" href="https://www.databricks.com/">Databricks</a> was founded by the original creators of <a href="#Apache+Spark">Apache Spark</a> to provide personas <strong>data scientists</strong> and data engineers</strong> a cloud-based vendor-managed platform to <strong>easily</strong> run analytics in a <strong>scalable</strong> manner. 
Databricks provides a managed Spark cloud service along with a platform for managing the full data analytics lifecycle using Python Jupyter notebooks for interactive data exploration and dashboards for sharing visualizations. Jobs for scheduling and automating workflows.
Added to the platform are libraries for machine learning.
 
   * https://docs.databricks.com/en/index.html
   * <a target="_blank" href="https://docs.databricks.com/en/administration-guide/index.html">Admin Guide</a>

   * <a target="_blank" href="https://www.youtube.com/@Databricks">YouTube channel</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=myLiFw9AUKY">Databricks Essentials</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=VLtq0eeHc14">Intro by the Seattle Data Guy</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6ZjQg0rYpZI">Databricks for Data Engineers</a>
   <br /><br />

Databricks came up with the word <a target="_blank" href="https://databricks.com/product/data-lakehouse">
"Lakehouse" architecture that combines a data warehouse and data lake to offer an open and unified cloud platform for data and AI.

* <a href="#Apache+Spark">Apache Spark</a>
* <a href="#Community+Edition">Community Edition</a>
* <a href="#Competitors">Competitors</a>
* <a href="#Architecture">Architecture</a>
* <a href="#Access">Access</a>

* <a href="#Samples">Samples</a>
* <a href="#Apache+Spark">Apache Spark</a>

* <a href="#CLI">CLI</a>
* <a href="#GUI">GUI</a>

* <a href="#Compute">Compute</a>
* <a href="#Clusters">Clusters</a>

* <a href="#Notebooks">Notebooks</a>

* <a href="#Dashboards">Dashboards</a> (samples)
* <a href="#Databricks+Platform">Databricks Platform</a>
* <a href="#Databricks+Runtime">Databricks Runtime</a>
* <a href="#Databricks+Workspace">Databricks Workspace</a>

* <a href="#Networking">Networking</a> (VPCs)
* <a href="#Storage">Storage</a>
* <a href="#Catalog">Catalog</a>

* <a href="#Data+Pipelines">Data Pipelines</a> Workflows

* <a href="#Monitoring">Monitoring</a>
* <a href="#Cluster+Management">Cluster Management</a>

* <a href="#Jobs">Jobs</a>
* <a href="#Queries">Queries</a> (SQL, Scala)

* <a href="#Security">Security</a>
* <a href="#ACID">ACID</a>
* <a href="#Data+Governance">Data Governance</a>
* <a href="#Machine+Learning">Machine Learning</a>

* <a href="#Certifications">Certifications</a>
<br /><br />


## Competitors

Databricks competes with integrated cloud-based multi-region delta lakehouses with:
* <a target="_blank" href="https://wilsonmar.github.io/snowflake/">Snowflake</a>
* <a target="_blank" href="https://wilsonmar.github.io/microsoft-fabric/">Microsoft Fabric</a>
* AWS
* Google Cloud Platform (GCP)
* Fivetran
* talend
<br /><br />

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="top">
   <th>Feature</th>
   <th>Traditional</th>
   <th>DataLake</th>
   <th>DeltaLake</th>
   </tr>
<tr valign="top"><td>Persona emphasis</td><td>Data Engineer</td><td>Data Analyst</td><td>Citizen</td></tr>
<tr valign="top"><td>Handle Relational data structure</td><td>Yes</td><td COLSPAN="2">Yes</td></tr>
<tr valign="top"><td>Handle Semi-structured data</td><td>No</td><td COLSPAN="2">Yes</td></tr>
<tr valign="top"><td>Handle Unstructured (pdf, audio, photo, video, etc.)</td><td>No</td><td COLSPAN="2">Yes</td></tr>
<tr valign="top"><td>Processing</td><td>ETL</td><td COLSPAN="2">ELT</td></tr>
<tr valign="top"><td>Streaming</td><td>No</td><td COLSPAN="2">Yes</td></tr>
</table>


## Architecture

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702358821/databricks-arch-3840x2400_wdzydv.png">
<img alt="databricks-arch-3840x2400.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702358821/databricks-arch-3840x2400_wdzydv.png"></a>

Serverless SQL Compute has elastic scaling, auto-backups, patched and upgraded.

Streaming:
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702363870/databricks-streaming-1850x847_mymaku.png">
<img alt="databricks-streaming-1850x847.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702363870/databricks-streaming-1850x847_mymaku.png"></a>

Delta Lake Z-Ordering by eventType to skip data blocks not needed, to reduce I/O and improve performance:

<pre>OPTIMIZE events
WHERE date >= current_timestamp() - INTERVAL 1 day
ZORDER BY (<em>eventType</em>)
</pre>

## Samples

Databricks claims as customers more than five thousand organizations worldwide — including Shell, Comcast, CVS Health, HSBC, T-Mobile and Regeneron.


New York City Taxi data

<tt>SELECT * FROM samples.nyctaxi.trips limit 1000</tt>


<a name="Apache+Spark">

## Apache Spark



## CLI

Install the Databricks CLI on your local machine to run commands against your Databricks workspace.

   * brew tap databricks/tap;brew install databricks; which databricks ; databricks --help
   * databricks configure --token ???
   * databricks clusters list  # IDs
   * Error: cannot load Databricks config file: no configuration file found at /Users/wilsonmar/.databrickscfg; please create one first
   * databricks clusters get 1122-123456-abc123 \| jq -r .name
   * databricks clusters start 1122-123456-abc123
   <br /><br />

## GUI

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702357261/databricks-menu-910x1788_zsmwyo.png"><img alt="databricks-menu-910x1788.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702357261/databricks-menu-910x1788_zsmwyo.png"></a>


## Community Edition

1. Begin with a Community Edition Public environment for up to 3 users to view:

   https://databricks.com/try-platform

   You can run basic notebooks without collaboration on its single 15GB cluster with no worker nodes.

   Start your 14-day free trial after you're familiar with the product:

      * User management, SSO, security
      * Data management
      * Integrations with Scikit-learn, Tensorflow, Keras, Spark, DataLake, MLFlow
      * Integrations with BI tools Tableau, Qlik, Looker, PowerBI
      * REST APIs
      * Collaboration
      * Scheduler
      * Dashboards
      * Configuring & scaling clusters
      <br /><br />

1. Confirm email.

Databricks is the Data + AI company. With origins in academia and the open-source community, the company was founded in 2013 by the original creators of Apache Spark™, Delta Lake and MLflow. Built on a modern Lakehouse architecture in the cloud, Databricks combines the best of data warehouses and data lakes to offer an open and unified platform for data and AI.

Headquartered in San Francisco with offices around the world and hundreds of global partners, including Microsoft, Amazon, Tableau, Informatica, Cap Gemini and Booz Allen Hamilton, Databricks is on a mission to simplify and democratize data and AI, helping data teams solve the world’s toughest problems.

## Access

Roles - Persona-based use cases

IAM SSO

Unity Catalog for fine-grained access control to data in Delta Lake tables
by storing user management and metastore metadata in a single location.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702362553/databricks-metastore-1633x666_rmkxfw.png"><img alt="databricks-metastore-1633x666.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702362553/databricks-metastore-1633x666_rmkxfw.png"></a>

impact analysis of data access patterns and lineage.

Delta Sharing with external organizations, without copying data, with centralized admin control to clean rooms via REST protocol.

Data plane: Clusters

Control plane: Web app, Configurations, Notebooks, repos, DBSQL, Cluster manager

Apply Object Security

IntelliJ for Databricks Go to https://www.jetbrains.com/idea/download/#section=windows and download the Community Edition for Windows. Install it. 
   * go mod init sample
   * go mod edit -require github.com/databricks/databricks-sdk-go@latest
   * touch main.go
   * (paste in code function from ???)
   * go mod tidy
   * go mod vendor
   * go run main.go


Install Databricks plugin from https://plugins.jetbrains.com/plugin/11020-databricks

Rstudio
   * Get token from Databricks
   * DATABRICKS_TOKEN=<em>personal-access-token</em>
   * DATABRICKS_HOST=<em>workspace url</em>

## Compute

Clusters

Policies

Runtimes: 
* Data Engineering & ML: Standard, ML

LakeHouse Photon execution engine and Photon Writer handle Parquet-formatted files 2x faster than Spark instructions,
as measured by TPC benchmarks on DBR versions.

* Analytics & BI: SQL Analytics, SQL Analytics (Delta Lake), SQL Analytics (Delta Engine)

Cluster Create, List, Start, Stop, Restart, Terminate

Unified Catalog, vs. Metastores
Best Practices Catalogs, connections, Business Units

## Notebooks

GUI

Repos

Languages/Libraries: Pandas, Scikit-learn, Tensorflow, Keras, Spark, DataLake, MLFlow

Keyboard shortcuts: Shift+Option+Space for auto-complete

Execute, Share


## Dashboards

databricks-menu-new.png

## Networking

## Storage

## Catalog

## Data Pipelines

Data Engineering Workflows: Job Runs, Data Ingestion, Delta Live Tables


## Monitoring

Push Logging data

Concurrency Limits

Metrics : Server load distribution

CPU utilization


## Cluster Management

Driver logs

## Jobs

<a target="_blank" href="https://learning.oreilly.com/videos/databricks-certified-data/12212024VIDEOPAIML/12212024VIDEOPAIML-c5_s4/">VIDEO</a>: Jobs are defined within the Workflows menu  by specifying Task Name, Type, Source, Path Cluster, Dependent libraries, Parameters (GB), Notifications, Retries:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702384696/databricks-jobs-2674x1888_qu0z6g.png"><img alt="databricks-jobs-2674x1888.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702384696/databricks-jobs-2674x1888_qu0z6g.png"></a>

Job & All-Purpose Cluster ???

Timeout, Concurrency, Schedule (Trigger Type = Continuous)

Config Auto Loader

Query Pipeline Events

Task Dependencies: Ingestion, etc ???

View Job History within Data Engineering Job Runs.

Handle Failures, Retries

## Queries

databricks-menu-sql.png
SQL Editor, Queries, Dashboards, Alerts, Query History, SQL Warehouses

Query Engine

Libraries

Transform Spark SQL

Catalog Explorer


## Security

## ACID

Transaction Logs for Time Travel restore


## Data Governance


Table metadata

Vacuum Garbage Collect

Data quality: Detect <a target="_blank" href="https://www.youtube.com/watch?v=uOG685WFO00">Drift</a>


## Machine Learning

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702368185/databricks-ml-1540x729_rgzkuo.png"><img alt="databricks-ml-1540x729.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702368185/databricks-ml-1540x729_rgzkuo.png"></a>

   * <a target="_blank" href="https://learning.oreilly.com/library/view/-/9781801812030/" title="Publisher:Packt Publishing">>BOOK</a>: Practical Machine Learning on Databricks - 244 pages by Debu Sinha November 2023 
   <br /><br />

   * <a target="_blank" href="https://learning.oreilly.com/videos/-/090142022VIDEOPAIML/" title="Publisher:Pragmatic AI Solutions">VIDEO</a>: Assimilate Databricks ML Certification By Alfredo Deza and Noah Gift September 2022 0h 58m


Experiments, Features, Models, Serving

## Certifications

<a target="_blank" href="https://www.databricks.com/learn/training/lakehouse-fundamentals-accreditation#video"><img align="right" width="200" alt="databricks-menu-ml.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702358670/databricks-fund-badge-320x349_pzh9r7.png"></a>


* <a target="_blank" href="https://learning.oreilly.com/videos/-/12212024VIDEOPAIML/">2h 21m VIDEO</a>: Databricks Certified Data Engineer Associate By Alfredo Deza and Noah Gift Publisher:Pragmatic AI Solutions December 2023 

## Resources

* <a target="_blank" href="https://learning.oreilly.com/library/view/-/9781838647216/" title="Publisher:Packt Publishing">BOOK</a>:
Distributed Data Systems with Azure Databricks By Alan Bernardo Palacio
4 stars
May 2021
414 pages

* Azure Databricks Cookbook
By Phani Raj and Vinod Jaiswal
Publisher:Packt Publishing
September 2021
Write the 
first review
452 pages


* Optimizing Databricks Workloads By Anirudh Kala, Anshul Bhatnagar and Sarthak Sarbahi
Publisher:Packt Publishing
December 2021
230 pages

* <a target="_blank" href="https://learning.oreilly.com/library/view/-/9781803235332/" title="Publisher:Packt Publishing
">BOOK</a>: Business Intelligence with Databricks SQL By Vihag Gupta
September 2022
348 pages


* <a target="_blank" href="https://learning.oreilly.com/videos/-/062592022VIDEOPAIML/" title="Publisher:Pragmatic AI Solutions">VIDEO</a>: Doing MLOps with Databricks and MLFlow - Full Course By Alfredo Deza and Noah Gift
August 2022
1h 39m
covers Spark Dbmlops 

* <a target="_blank" href="https://learning.oreilly.com/videos/-/032232022VIDEOPAIML/" title="Publisher:Pragmatic AI Solutions">>VIDEO</a>: MLOps Platforms From Zero: Databricks, MLFlow/MLRun/SKLearn By Alfredo Deza and Noah Gift
March 2022 
2h 26m
