---
layout: post
date: "2023-07-28"
file: "snowflake"
title: "Snowflake (SQL Data Lakehouse)"
excerpt: "How to quickly learn and use the cloud-native Snowflake SQL database's AI/ML features on top of AWS, Azure, GCP clouds"
tags: [cloud, database]
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

This is a deep-dive hands-on approach to learning and using the Snowflake cloud database.

{% include whatever.html %}

1. <a href="#ValueAdd">Value Add</a>
1. <a href="#Competition">Competition</a>
1. <a href="#Architecture">Architecture</a>
1. <a href="#Company">Snowflake the Company</a>

1. <a href="#URLs">Host Names (URLs)</a>
1. <a href="#Support">Support</a>

1. <a href="#Occupations">Occupations for certification</a>
1. <a href="#Transformation">Adopting Strategies</a>

1. <a href="#Automation">Automation</a>: CLI, Python APIs
1. <a href="#Portal">Learning</a>

1. <a href="#Futures">Futures Roadmap</a>
1. <a href="#Resources">Resources</a>
1. <a href="#More">More about databases</a>

<hr />

<a name="ValueAdd"></a>

## Snowflake's Value-Add

The photo at the top shows a real "Data Lake House" which is what Snowflake provides in the IT (Information Technology) world.

That analogy takes some explanation.

In the 1980s, IBM defined the SQL (Structured Query Language) to run on their corporate mainframes. Memory and disk space were expensive and required months to obtain. To ensure that servers don't crash due to lack of space or not enough CPU, corporations hired DBAs (DataBase Administrators) as a protective bureaucracy around databases, blocking application development teams. Frustrating.

So Oracle and Microsoft made SQL run on early Personal Computers as well.
Open-source alternatives MySQL, MariaDB, and PostgreSQL enabled the growth of database-backed websites on the internet.

In the 90's, SQL-based databases were at the heart of "Big Data" made big by Hadoop and Apache Spark software. They enabled the expansion of "Enterprise Data Warehouses" (EDWs) designed for Analytical Processing (OLAP) by summarizing data refreshed from source systems. It typically has a rigid schema.

A "Data Mart" makes data searchable.

Still, expensive disk space required that some data be thrown away as batch-mode "ETL" programs load data into databases.

A "Data Lake" is designed to capture <strong>raw data</strong> (structured, semi-structured, unstructured) for integration with several Enterprise Data Warehouses, for "data science" AI/ML processing.
    
The term "Data Lakehouses" refer to an <strong>intelligent metadata layer</strong> that acts as a sort of middleman between unstructured data and data users.

Snowflake is that middleman. Snowflake's offers a <strong>cloud-native</strong> database -- designed from the ground up to be a "Serverless" <a target="_blank" href="https://www.wikiwand.com/en/Cloud_database">cloud-based database</a> "Data-as-a-Service" (DaaS) on hardware and networks provided by public cloud service providers (CSPs AWS, Azure, GCP):

    * on Amazon S3 storage since 2014
    * on <a target="_blank" href="https://wilsonmar.github.io/azure-cloud-onramp/">Microsoft Azure Blob Storage</a> (Data Lake Gen2) since 2018
    * on <a target="_blank" href="https://wilsonmar.github.io/gcp">Google Cloud Platform (GCP)</a> since 2019
    * QUESTION: From Salesforce? SAP?
    <br /><br />

1.  Snowflake's corporate landing page is at:

    <a target="_blank" href="https://www.snowflake.com"><strong>https://www.snowflake.com</strong></a>

??? is that it provides a GUI and <a href="#Languages">programmatic interfaces</a> to its

1.  View a demo to see its GUI for yourself:

    <a target="_blank" href="https://www.snowflake.com/live-demo"><strong>https://www.snowflake.com/live-demo</strong></a>

    Points made in the video:
    * ???

    ### Workloads

    SQL provides

1.  Pull down the list of Workloads:

    * Data Cloud
    * Applications
    * Collaboration
    * Marketplace
    * Data Lakes
    * Data Warehouse
    <br /><br />

    ### Snowflake's Data Lake House NOT open-sourced

    SQL databases 

    Snowflake uses a <strong>columnar store (C-store)</strong> with a unique and proprietary SQL engine.
    A "columnar" database is structured to efficiently read specific fields across various rows,
    but without doing the I/O to read the entire row just to get to those fields.

    Snowflake combines traditional "Data Lake" and "Data Warehouse" into a <strong>Data Lake House</strong> --
    a structure that's useful for <a href="#AIML">AI/ML (Machine Learning)</a> as well as traditional analytics.

    References:
       * https://www.youtube.com/watch?v=Muyq3qtHzzo&list=PL7_h0bRfL52pOai_ih3HSu2WCgPXmNHzH by Bryan Cafferky
       * https://www.youtube.com/watch?v=FAnR4R5JMM8 by Pragmatic Works
       * https://www.youtube.com/watch?v=-bSkREem8dM by Alex the Analyst
       * https://www.youtube.com/watch?v=FxpRL0m9BcA by Seattle Data Guy
       * https://www.youtube.com/watch?v=cnCIoNDaGvg by Bernard Marr
       * https://www.youtube.com/watch?v=WgIbvkyY4mI
       * <a target="_blank" href="https://www.youtube.com/watch?v=slrqd4NSgpY">VIDEO</a>
       <br /><br />

1.  Select EMEA ON-demand demo, 

    https://www.snowflake.com/en/resources/video/data-lake-live-demo-emea/

    PROTIP: Through acquisitions and internal R&D, Snowflake has quickly incorporated AI (Artificial Intelligence) in its offerings (Generative AI using LLMs).

1.  Snowflake offers 30-day trials, so many simply sign up using a different email each month. They use <a href="#Automation">automation</a> to populate each new account.

    PROTIP: Create a different browser profile associated with each account.

2.  Create an account to begin a 30-day trial use:

    <a target="_blank" href="https://signup.snowflake.com/">https://signup.snowflake.com</a>

    Snowflake can operate like Oracle, MySQL, Postgres, Teradata, or other traditional database. <strong>Connectors</strong> enable the interchange of data between Snowflake and Microsoft's Power Platform, Qlik, etc.

    PROTIP: To meet data sovereignty laws in the EU, Singapore, etc., Snowflake customers are limited to using specific CSP data center regions. These regions are what Snowflake makes available:

    <table border="1" cellpadding="4" cellspacing="0">
    <tr><th> Theater </th><th> Azure </th><th> AWS </th><th> GCP </th></tr>
    <tr valign="top"><td> Canada </td><td> Canada (Central)
        </td><td> Canada Central (Toronto) 
        </td><td> -
        </td></tr>
    <tr valign="top"><td> USA </td><td> US East (North Virginia, Ohio)<br />US West (Oregon)
        </td><td> East US 2 (Virginia)<br />Centrl US (Iowa)<br />South Central US (Texas)<br />West  US 2 (Washington) 
        </td><td> US East 4 (N. Virginia)<br />US Central (Iowa)
        </td></tr>
    <tr valign="top"><td> South America </td><td> Sao Paulo
        </td><td> -
        </td><td> -
        </td></tr>
    <tr valign="top"><td> EU 
        </td><td> North Europe (Ireland)<br />UK South (London)<br />West Europe (Netherlands)<br />Switzerland North (Zurich)
        </td><td> Europe West (London)<br />Europe West (Netherlands)
        </td></tr>
    <tr valign="top"><td> EMEA </td><td> (Ireland, London, Paris, Frankfurt, Stockholm)
        </td><td> UAE North (Dubai)
        </td><td> -
        </td></tr>
    <tr valign="top"><td> Asia </td><td> Asia Pacific (Tokyo, Seoul, Osaka, Mumbai, Singapore, Jakarta, Sydney)
        </td><td> Japan East (Tokyo)<br />Central India (Pune)<br />Southeast Asia (Singapore)<br />Australia East (New South Wales)
        </td><td> -
        </td></tr>
    </table>

    PROTIP: Instead of leaving data in a single CSP (such as AWS), Snowflake provides the basis for <strong>multi-cloud</strong> operation, to avoid CSP vendor lock-in.

    Because data is valuable, a lot of barriers have been put around Oracle databases in on-prem data centers. This creates "data silos" which limits creative uses. But cloud-based databases can be accessed anywhere in the world, so can be used more creatively. Clouds can be used to enable teamwork around governed data.


    <a name="UseCases"></a>
    
    ### Use cases

4.  One step during sign-up is "what will you use Snowflake for?"

    * Build an application or data product for customers
    * Develop <strong>machine-learning</strong> model or another data science initiative
    * Run analytics or connect to the visualization provider
    * Migrate an existing data warehouse
    * Create a data lake, data mesh, or federated data source
    * Other

    Snowflake's "Data Marketplace" platform supports a range of use cases, including data warehousing, data lakes, data engineering, data science, data application development, and data sharing. 

    <a name="AIML"></a>

    ### AI/ML use cases
    
    * <a target="_blank" href="https://www.youtube.com/watch?v=SwTYQXqQ3N4">VIDEO</a>: DICOM Image Analysis With Snowpark (to detect Pneumonia in Xrays using Machine Learning).
    <br /><br />
    

    ### Snowpipe continuous streaming load

    Snowflake's ability to <strong>steam</strong> data makes for faster ingestion than traditional batch approaches.

    <a target="_blank" href="https://www.coursera.org/learn/snowflake-course/lecture/1mxez/create-notification-queue">NOTE</a>:

    This is used by IoT.

    Snowflake's "Snowpipe" "continuosly" (every few seconds) checks whether there is a file in specified folders within Azure or other cloud. When a file is found, an event notification is sent to Queue Storage.

    * On AWS, use S3 event notifications or SQS notifications
    * On Azure, use Storage Queue and Event Grid
    * On GCP, use Pub/Sub for GCS buckets
    <br /><br />

    A "Serverless" load process performs load into a Snowflake DB.

    Load files are held for 14 days, by default.

    ### Snowpipe ELT
    
    ELT (Extract, Load, Transform) are the steps to load "raw data" directly from a source server into a target data warehouse. Business rules and data integrity checks occur in the data warehouse after data is loaded.
    
    The larger capacity possible (perhaps for a short time) on cloud vendors enables innovation from the traditional<br />
    ETL (Extract, Transform, Load) approach in which transformation takes place on an intermediate server before it is loaded into the target.
    Transformations before load often render data unusable for purposes not originally designed.

    Snowflake Professional Services have a "Data Cloud Deployment Framework (DCDF)".


    <a name="References"></a>

    ### Customer references
    
    https://www.snowflake.com/en/why-snowflake/customers/


5.  The activate email sent to you contains a unique URL to the GUI dashboard associated with your account, such as:

    <tt>https://<em>abc-123</em>.snowflakecomputing.com/console/login</tt>

6.  Save the URL in a Browser Bookmark.


<a name="Competition"></a>

## Snowflake's Competition

Snowflake's "Cloud Data Warehouse" competes in a crowded field of cloud-based databases from its cloud vendors:
   * Amazon Aurora, MySQL-based service
   * Amazon Relational Database Service
   * Microsoft Azure SQL Database (MS SQL)[30]
   * <a target="_blank" href="https://cloud.google.com/products/databases">Google Cloud SQL</a>

<a target="_blank" href="https://www.simplilearn.com/cloud-databases-across-the-globe-article">One trainer</a> notes that
> "Snowflake is easy to use, flexible, scalable, and highly suitable to the data-driven businesses of today. However, this cloud database cannot be deployed across all available cloud platforms and so is not very popular in use." 

Other cloud databases:
   * Clustrix Database as a Service[25]
   * CockroachDB-as-a-Service[26]
   * EnterpriseDB Postgres Plus Cloud Database[27]
   * Heroku PostgreSQL as a Service (shared and dedicated database options)[29]
   * Oracle Database Cloud Service[31]
   * SkySQL MariaDB
   * Xeround Cloud Database* – MySQL front-end (*service no longer available)[32]
   * YugabyteDB
   <br /><br />

Other SaaS data competitors:
   * Airtable
   * Splunk
   * Tableau (for creating analytics dashboards)
   * Notion (notebooks)
   <br /><br />

Like other cloud vendors, Snowflake provides Authentication, Access Control, Infrastructure, and Optimization.

* https://poplindata.com/data-warehouses/2021-database-showdown-bigquery-vs-redshift-vs-snowflake/
* https://medium.com/2359media/redshift-vs-bigquery-vs-snowflake-a-comparison-of-the-most-popular-data-warehouse-for-data-driven-cb1c10ac8555

### concerns

The SQL used is ANSI standards, so proprietary features from Oracle and Microsoft T-SQL are not available in Snowflake.

Snowflake <strong>does not support Foreign Keys</strong>.


### Snowflake's Advantages

   <a target="_blank" href="https://www.snowflake.com/webinar/product-demo/applying-architectural-patterns-to-solve-business-questions-2023-01-11/?utm_cta=website-pro-serv-featured-dcdf-series">VIDEO: Applying Architectural Patterns to Solve Business Questions</a> by <a target="_blank" href="https://www.linkedin.com/in/greg-sitzman/">Greg Sitzman</a>, Principal Solutions Architect and <a target="_blank" href="https://www.linkedin.com/in/melinda-webster-2732b010/">Melinda Webster</a>



1. Menu items:

   <pre>Worksheets
Dashboards
Data
   * Databases
   * Private Sharing
   * Provider Studio
Marketplace
Activity
   * Query History
   * Copy History
   * Task History
Admin
   * Usage
   * Warehouses
   * Resource Monitors
   * Users & Roles
   * Security
   * Billing & Terms
   * Contacts
   * Accounts
   * Partner Connect
Help & Support
    </pre>



Seattle Data Guy answers<a target="_blank" href="https://www.youtube.com/watch?v=njttWa08pwo">"Why Everyone Cares about Snowflake"</a> by saying Snowflake "has the most clout" despite market share of 12-13%.

PROTIP: Snowflake is acknowledged as user-friendly, easy scaling up/down with flexible "pay-as-you-go" pricing.

Snowflake also has powerful and convenient data management features.

Snowflake is <strong>fast</strong>: "A complex query takes more than 6 hours in MySQL, 2 hours in Oracle, and just 10 minutes in snowflake."

References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=VLtq0eeHc14">VIDEO: Databricks v. Snowflake</a>
   * <a target="_blank" href="https://www.coursera.org/projects/data-management-with-databricks-big-data-with-delta-lakes">2-hour Data Management with Databricks: Big Data with Delta Lakes</a> (Guided Project)

   * <a target="_blank" href="https://www.youtube.com/watch?v=CUu35E9TViE">Should you switch to Snowflake</a>


<a name="Architecture"></a>

## Architectural Innovations

   * https://docs.snowflake.com/user-guide/intro-key-concepts
   <br /><br />

Snowflake's cloud-native architecture consists of three independently scalable layers across storage, compute, and cloud services:

   * The storage layer ingests massive amounts and varieties of structured and semi-structured data to create a unified data record. 

   * The compute layer provides dedicated resources to enable users to simultaneously access common data sets for many use cases without latency. 

   * The cloud services layer optimizes each use case's performance requirements with no administration.
   <br /><br />

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690522798/snowflake-1075x478_ht4hxt.png"><img alt="snowflake-1075x478.png" width="1075" height="478" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690522798/snowflake-1075x478_ht4hxt.png"></a>

"What makes Snowflake different is its <strong>multi-cluster shared architecture</strong>" --<a target="_blank" href="https://www.youtube.com/watch?v=C8_os0-ti48">VIDEO: What is Snowflake</a> (by a non-user)

Unique:

   * Metadata
   * Zero Copy Cloning
   * Time Travel
   * Zero Copy Cloning + Time Travel
   * Data Sharing
   <br /><br />

Dynamic Data Masking & External Tokenization

SnowGrid?

SnowSight

SnowPipe

Automatic register new files with auto-refresh of partitions


<hr />

### File formats

Snowflake can encode in UTF8, UTF16.

Snowflake can intelligent ingest many types of string data formats:
   * CSV text delimited by commas or tabs
   * JSON
   * XML

   <a target="_blank" href="https://www.upsolver.com/blog/the-file-format-fundamentals-of-big-data">Serialization file formats of Big Data</a>:
   
   * Apache Avro (row-based, self-describing) introduced 2009 for Hadoop, with dynamic data definitions in  JSON and data in binary that's uncompressed, Snappy, deflate, bzip2, or xz. Supports complex data structures (arrays, enums, maps, and unions).
   
   * ORC (Optimized Row Columnar) file introduced in 2013 for Hadoop Hive as the successor to RCFile (Record Columnar File) formats. Supports Hive ACID transactions. Support complex data types (DateTime, decimal, struct, list, map, and union). Stores "row collections" across a cluster as a single NameNode file. It achieves higher throughput through parallel processing using parallel reads "predicate pushdown" that checks a query or condition against file metadata to see whether rows can be skipped insteaad of read. Splits files without scanning for markers.
   
   * Apache Parquet Columnar File Format introduced 2013. See<br />https://parquet.apache.org/ - is language agnostics (supporing Java, C++, Python). Support fast data processing for complex nested data structures (such as log files and event streams at scale) with flexible encoding schemes to handle columns containing different data types. Its columnar compression saves on cloud storage space, with compression schemes specified on a per-column basis. That makes Parquet "future-proof". Parquet supports automatic schema merging for schema evolution, so you can start with a simple schema and gradually add more columns as needed.    
   
   Like ORC, Parquet files are splittable as they store file footer metadata containing information on block boundaries for the file. Systems access this block boundary information to determine whether to skip or read only specific parts (blocks) of the file – allowing for more efficient reads – or to more easily submit different blocks for parallel processing.    

   Parquet supports many query engines (including Amazon Athena, Amazon Redshift Spectrum, Qubole, Google BigQuery, Microsoft Azure Data Explorer and Apache Drill). 

   Thus, Parquet files are often most appropriate for "write-once, read-many" analytics (OLAP) use cases, typically when traditional OLTP databases are the source. Used with Spark.

References:
   * https://bryteflow.com/how-to-choose-between-parquet-orc-and-avro/
   <br /><br />

New table formats emerging to support substantial increases in the volume and velocity of (particularly, streaming) data:
   * Apache Iceberg
   * Apache Hudi
   * Databricks Delta Lake
   <br /><br />


<hr />

<a name="Company"></a>

## Snowflake the company

Snowflake Inc. was founded in 2012 by ex-Oracle founders:
* <a target="_blank" href="https://www.linkedin.com/in/benoit-dageville-3011845/">Benoît Dageville</a> President of Product, living San Francisco after 16 years at Oracle, 
* <a target="_blank" href="https://www.linkedin.com/in/thierry-cruanes-3927363/">Thierry Cruanes</a> of San Mateo
* <a target="_blank" href="https://www.linkedin.com/in/marcinzukowski/">Marcin Żukowski</a>

Snowflakes lists "Silicon Valley" <a target="_blank" href="https://www.glassdoor.com/Jobs/Snowflake-Jobs-E928471.htm?filter.countryId=1">jobs</a> at (not remote) <a target="_blank" href="https://goo.gl/maps/6dYXAdA9n3bRKXTw8">450 Concar Drive, San Mateo, California 94402</a>.+1 844.766-9355.

Snowflake is a <a target="_blank" href="https://www.smdailyjournal.com/news/local/snowflake-moves-its-hq-out-of-san-mateo/article_becaabc6-c02e-11eb-ba32-db54937cfeaf.html">Delaware corporation</a>.

That's according to https://www.wikiwand.com/en/Snowflake_Inc. which<br />
lists 5,884 employees in 2023.

https://www.linkedin.com/company/snowflake-computing/<br />
lists 7,230 employees and 664,151 followers (on July 23, 2023)

After 6 years as CEO of Service Now, <a target="_blank" href="https://www.linkedin.com/in/frankslootman/">Frank Slootman</a> has been CTO since April 2019. 
   * <a target="_blank" href="https://www.youtube.com/watch?v=oiWwyt3HVT0">VIDEO</a>: "Leadership is not a popularity contest".
   <br /><br />

Slootman lives in Bozeman, Montana, so also headquarters the company in a <a target="_blank" href="https://www.google.com/maps/@45.6781075,-111.0343117,3a,75y,249.16h,90t/data=!3m8!1e1!3m6!1shqeOJEDOeqj6fMP60OM0pA!2e0!5s20190601T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DhqeOJEDOeqj6fMP60OM0pA%26cb_client%3Dsearch.gws-prod.gps%26w%3D360%26h%3D120%26yaw%3D249.15569%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu">one-story building</a> at <a target="_blank" href="https://goo.gl/maps/qDGBR4f6R9aK68n37">106 East Babcock Street, Bozeman, Montana</a>. +1 844.766-9355

<a target="_blank" href="https://www.glassdoor.com/Reviews/Snowflake-Reviews-E928471.htm">On Glassdoor</a>, Slootman received from employees a 90% rating, with a high 4.0 rating and 75% of employees saying they would recommend to a friend.

The company mascot is a white bear called "___".

People who work in the company Snowflake are called "Snowflakes".

Snowflake was ranked at the top of the <a target="_blank" href="https://www.forbes.com/lists/cloud100/">Forbes Cloud 100</a> list of private companies in 2019. It fell off that list when Snowflake went public.

Snowflake IPO'd (during the pandemic) on September 2020 as NYSE ticker <a target="_blank" href="https://www.barrons.com/market-data/stocks/snow">SNOW</a>, raising $3.4 billion, one of the <a target="_blank" href="https://www.youtube.com/watch?v=ryWCD00nLvQ">largest software IPOs in history</a>.

Salesforce, a Bay Area cloud company, and Warren Buffett’s Berkshire Hathaway each bought $250 million in Snowflake stock in private placements following the IPO.  <a target="_blank" href="https://www.youtube.com/watch?v=H6j3FgX5uo4">VIDEO</a>: How Snowflake Broke Warren Buffet's Lifelong Rule.

SNOW is a component of the Russell 1000 index.

On the board since April, 2023 is <a target="_blank" href="https://www.linkedin.com/in/markmclaughlin4/">Mark McLaughlin</a>, retired Chairman of Qualcomm, Palo Alto, Verisign.

The stock peaked on September 2021 at $350, but on July 27, 2023, was at $170/share, for a market value of $55.4B with 4.61 Debt-to-Equity.
In 2023, its $1.31B Gross Income and $2.15B Expenses yielded a <strong>-$796.71M Loss</strong> for -38.57% Net Margin and -$2.67 EPS and -15.17% ROE based. Although declining, a 73.97% Income Growth was reported.

Snowflake reported having 7,828 total customers, including 330 customers with trailing 12-month product revenue greater than $1 million, and remaining performance obligations of $3.7 billion, representing 38% year-over-year growth.

The company's <a target="_blank" href="https://www.snowflake.com/en/company/overview/about-snowflake/snowflakes-growth-story/">Growth Story</a>
aims for "$10B in revenue by FY2029", partly through acquisitions of Polidea, Pragmatists, Streamlit, Myst.ai.

On June 27, 2023, a partnership with NVIDIA was announced.

/#MakeItSnow


<a name="URLs"></a>

## Host Names (URLs)

* https://www.snowflake.net

* https://www.youtube.com/@snowflakedevelopers - 5k subscribers
   led by <a target="_blank" href="https://www.linkedin.com/in/chanin-nantasenamat/">Chanin Nantasenamat</a>, <a target="_blank" href="https://www.glassdoor.com/Reviews/Streamlit-Reviews-E4916073.htm">Streamlit</a> Sr. Dev Advocate living in Thailand.

* https://.../  is Snowflake's URL shortener
   
* https://docs.snowflake.com/Documentation

* https://bots.snowflake.com for hands-on experiences using Snowflake security products.

* https://github.com/snowflakedb contains open-source repos by the company (858 followers on July 27, 2023)

<a name="Certifications"></a>

### Certifications

Snowflake's certification exams are delivered through Pearson Vue (844.914-0562) through Snowflake's Certification Portal at<br />
https://snowflake.useclarus.com/

https://www.snowflake.com/certifications/ 

(Shortened $88 recertification exam COF-R02 to maintain status are offered at a reduced price.)

<strong>$175 SnowPro Core Certification</strong> COF-C02 -- the Foundational level -- 75% of 100 questions in 110 minutes:

   * Snowflake Data Cloud Features & Architecture: 25% of the exam
   * Account Access and Security: 20%
   * Performance Concepts: 15%
   * Data Loading and Unloading: 10%
   * Data Transformations: 20%
   * Data Protection and Data Sharing: 10%

<strong>$375 SnowPro Advanced Certifications</strong> (and recerts) are for each of five roles:

* ARA-C01 (ARA-R01) - Architect - 65 English questions in 115 minutes:
   * Accounts and Security: 25%
   * Snowflake Architecture: 30%
   * Data Engineering: 25%
   * Performance Optimization: 20%
    
* DEA-C01 (DEA-R01) - Data Engineer
   * Data Movement: 28%
   * Performance Optimization: 22%
   * Storage and Data Protection: 10%
   * Security: 10%
   * Data Transformation: 30%

* DSA-C01 (DSA-R01) - Data Scientist
   * Data Science Concepts: 10%
   * Data Pipelining: 15%
   * Data Preparation and Feature Engineering: 30%
   * Model Development: 30%
   * Model Deployment: 15%

* ADA-C01 (ADA-R01) - Administrator
   * Snowflake Security, RBAC, & User Administration: 30%
   * Account Management & Data Governance: 25%
   * Performance Monitoring & Tuning: 20%
   * Data Sharing, Data Exchange & Snowflake Marketplace: 10%
   * Disaster Recovery, Backup & Data Replication: 15%

* DAA-C01 (DAA-R01) - Data Analyst
   * Data Ingestion and Data Preparation: 17%
   * Data Transformation and Data Modeling: 22%
   * Data Analysis: 32%
   * Data Presentation and Data Visualization: 29%

As of this writing, practice exams are available only for Core, Architect, and Data Engineer.

References:
   * https://www.chaosgenius.io/blog/snowflake-certifications/


## Video Training

Snowflake Documentation: overviews, tutorials and detailed references</a>
https://docs.snowflake.com/en/

Snowflake offers both free and paid on-demand training at<br />
https://learn.snowflake.com/ 

   * https://learn.snowflake.com/en/courses/uni-essdww101/


Learn Snowflake best practices with complete hands-on labs at 
instructor-led training courses at<br />
https://training.snowflake.com/

<hr />

## Community

TODO: Create an account at<br />
https://community.snowflake.com/s/login/

https://usergroups.snowflake.com/chapters/

<hr />

<a name="Automation"></a>

## Automation

* CLI (snowsql client-side command utility)
* DML (Data Markup Language) to create SQL database schemas
* Python/Go/Java/Scala client-side programs
* Java/Scala/NodeJs server-side programs

### Install SnowSQL CLI

DBeaver

1.  On macOS

    <pre><strong>brew install --cask snowflake-snowsql</strong></pre>

    <pre>==> Downloading https://sfc-repo.snowflakecomputing.com/snowsql/bootstrap/1.2/da
######################################################################### 100.0%
==> Installing Cask snowflake-snowsql
==> Running installer for snowflake-snowsql; your password may be necessary.
Package installers may write to any location; options such as `--appdir` are ignored.
Password: ____
installer: Package name is Snowflake SnowSQL
installer: Installing at base path /
installer: The install was successful.
🍺  snowflake-snowsql was successfully installed!
    </pre>

    PROTIP: Even though there is a "SnowSQL.app" installed, it is accessed only by the CLI. 

1.  The first time you invoke the app, click "OK" to the warning.

1.  Verify: 

    <pre><strong>snowsql --version
Version: 1.2.27
    </strong></pre>

1.  Run <tt>snowsql</tt> by itself to get a long (and wide) menu of options:

    <pre>Usage: snowsql [OPTIONS]
&nbsp;
Options:
  -a, --accountname TEXT          Name assigned to your Snowflake account. If
                                  you are not on us-west-2 or AWS deployement,
                                  append the region and platform to the end,
                                  e.g., <account>.<region> or
                                  <account>.<region>.<platform>Honors
                                  $SNOWSQL_ACCOUNT.
&nbsp;
  -u, --username TEXT             Username to connect to Snowflake. Honors
                                  $SNOWSQL_USER.
&nbsp;
  -d, --dbname TEXT               Database to use. Honors $SNOWSQL_DATABASE.
  -s, --schemaname TEXT           Schema in the database to use. Honors
                                  $SNOWSQL_SCHEMA.
&nbsp;
  -r, --rolename TEXT             Role name to use. Honors $SNOWSQL_ROLE.
  -w, --warehouse TEXT            Warehouse to use. Honors $SNOWSQL_WAREHOUSE.
  -h, --host TEXT                 Host address for the connection. Honors
                                  $SNOWSQL_HOST.
&nbsp;
  -p, --port INTEGER              Port number for the connection. Honors
                                  $SNOWSQL_PORT.
&nbsp;
  --region TEXT                   (DEPRECATED) Append the region or any sub
                                  domains before snowflakecomputing.com to the
                                  end of accountname parameter after a dot.
                                  e.g., accountname=<account>.<region>
&nbsp;
  -m, --mfa-passcode TEXT         Token to use for multi-factor authentication
                                  (MFA)
&nbsp;
  --mfa-passcode-in-password      Appends the MFA passcode to the end of the
                                  password.
&nbsp;
  --abort-detached-query          Aborts a query if the connection between the
                                  client and server is lost. By default, it
                                  won't abort even if the connection is lost.
&nbsp;
  --probe-connection              Test connectivity to Snowflake. This option
                                  is mainly used to print out the TLS/SSL
                                  certificate chain.
&nbsp;
  --proxy-host TEXT               Proxy server hostname. Honors
                                  $SNOWSQL_PROXY_HOST.
&nbsp;
  --proxy-port INTEGER            Proxy server port number. Honors
                                  $SNOWSQL_PROXY_PORT.
&nbsp;
  --proxy-user TEXT               Proxy server username. Honors
                                  $SNOWSQL_PROXY_USER. Set $SNOWSQL_PROXY_PWD
                                  for the proxy server password.
&nbsp;
  --authenticator TEXT            Authenticator: 'snowflake',
                                  'externalbrowser' (to use any IdP and a web
                                  browser), 'oauth', or
                                  https://<your_okta_account_name>.okta.com
                                  (to use Okta natively).
&nbsp;
  -v, --version                   Shows the current SnowSQL version, or uses a
                                  specific version if provided as a value.
&nbsp;
  --noup                          Disables auto-upgrade for this run. If no
                                  version is specified for -v, the latest
                                  version in ~/.snowsql/ is used.
&nbsp;
  -D, --variable TEXT             Sets a variable to be referred by &<var>. -D
                                  tablename=CENUSTRACKONE or --variable
                                  db_key=$DB_KEY
&nbsp;
  -o, --option TEXT               Set SnowSQL options. See the options
                                  reference in the Snowflake documentation.
&nbsp;
  -f, --filename FILE             File to execute.
  -q, --query TEXT                Query to execute.
  --config FILE                   Path and name of the SnowSQL configuration
                                  file. By default, ~/.snowsql/config.
&nbsp;
  -P, --prompt                    Forces a password prompt. By default,
                                  $SNOWSQL_PWD is used to set the password.
&nbsp;
  -M, --mfa-prompt                Forces a prompt for the second token for
                                  MFA.
&nbsp;
  -c, --connection TEXT           Named set of connection parameters to use.
  --single-transaction            Connects with autocommit disabled. Wraps
                                  BEGIN/COMMIT around statements to execute
                                  them as a single transaction, ensuring all
                                  commands complete successfully or no change
                                  is applied.
&nbsp;
  --private-key-path PATH         Path to private key file in PEM format used
                                  for key pair authentication. Private key
                                  file is required to be encrypted and
                                  passphrase is required to be specified in
                                  environment variable
                                  $SNOWSQL_PRIVATE_KEY_PASSPHRASE
&nbsp;
  -U, --upgrade                   Force upgrade of SnowSQL to the latest
                                  version.
&nbsp;
  -K, --client-session-keep-alive
                                  Keep the session active indefinitely, even
                                  if there is no activity from the user..
&nbsp;
  --disable-request-pooling       Disable request pooling. This can help speed
                                  up connection failover
&nbsp;
  --token TEXT                    The token to be used with oauth
                                  authentication method
&nbsp;
  --query_tag TEXT                Tags to be applied to the queries run
  --generate-jwt                  Generate a jwt token, which will be printed
                                  out and displayed. Requires values for user,
                                  account, and private-key-path.
&nbsp;
  -?, --help                      Show this message and exit.
    </pre>

    ### snowsql variables

    <pre>$SNOWSQL_ACCOUNT
$SNOWSQL_USER
$SNOWSQL_PWD
$SNOWSQL_SCHEMA
$SNOWSQL_HOST
$SNOWSQL_PORT
$SNOWSQL_PRIVATE_KEY_PASSPHRASE
     </pre>

1.  Configure

1.  Open a new Terminal or Finder window navigate to the folder:

    <pre><strong>$HOME/.snowsql</strong></pre>

    On Windows: %USERPROFILE%\.snowsql\



<a name="Languages"></a>

## Language Support

<a target="_blank" href="https://www.youtube.com/watch?v=gH6EGej1lNY">VIDEO: Exploring Snowflake's Open Source Drivers & API Ecosystem | Summit 2023</a>

<a target="_blank" href="https://www.youtube.com/watch?v=f4g4NqvQ3Uk&list=PLavJpcg8cl1G4LewC3_OFOWUGHotd0fqd">VIDEO</a>:
"Snowpark" APIs was introduced in 2022 to provide pre-integrated DataFrame style programming inside the Snowflake engine (for ML) online. Java/Scala, (Anaconda) Python client-side plus also NodeJs server-side.

### Python

Python-centric repos on SnowflakeDB on GitHub:

   * https://github.com/snowflakedb/snowflake-connector-python - 471
   * https://github.com/snowflakedb/snowflake-ml-python - 6
   * https://github.com/snowflakedb/snowflake-sqlalchemy - 191
   * https://github.com/snowflakedb/libsnowflakeclient - 15
   * https://github.com/snowflakedb/snowpark-python - 174
   * https://github.com/snowflakedb/SnowAlert - 163 Security Analytics Using The Snowflake Data Warehouse

### C/C++
   * https://github.com/snowflakedb/libsnowflakeclient - 16

### C#
   * https://github.com/snowflakedb/snowflake-connector-net - 138

### Go
   * https://github.com/snowflakedb/gosnowflake -230

### JavaScript NodeJS 
   * https://github.com/snowflakedb/snowflake-connector-nodejs - 109

### Java
   * https://github.com/snowflakedb/snowflake-ingest-java - 45
   * https://github.com/snowflakedb/snowflake-jdbc - 150
   * https://github.com/snowflakedb/snowflake-kafka-connector - 103
   * https://github.com/snowflakedb/spark-snowflake - 186

### PHP
   * https://github.com/snowflakedb/pdo_snowflake - 52


<a name="Future"></a>

## Futures

PROTIP: Snowflake has not announced support for No-SQL (Document and <a target="_blank" href="https://wilsonmar.github.io/graph-databases/">modern Graph</a> database structures.



<a name="VideoTutorials"></a>

## Video Tutorials

### On Coursera.com

By <a target="_blank" href="https://www.linkedin.com/in/nikolai-schuler/">Nikolai Schuler</a> residing in Bulgaria:

   * <a target="_blank" href="https://www.coursera.org/learn/snowflake/home/week/1">Snowflake - Introduction Course</a>
   * <a target="_blank" href="https://www.coursera.org/learn/snowflake-course/home/week/1">Snowflake - Intermediate Course</a>

By UAE resident <a target="_blank" href="https://www.linkedin.com/in/mohamedtouiti/">Mohamed Touiti</a>, Snowflake Sales Engineer since 2021.

1. <a target="_blank" href="https://www.coursera.org/projects/snowflake-for-beginners-make-your-first-snowsight-dashboard">2-hour Snowflake for Beginners: Make your First Snowsight Dashboard</a> 

1. <a target="_blank" href="https://www.coursera.org/projects/data-cleaning-in-snowflake-techniques-to-clean-messy-data">2-hour Data Cleaning in Snowflake: Techniques to Clean Messy Data</a>

By Google:

* <a target="_blank" href="https://www.coursera.org/learn/bigquery-fundamentals-for-snowflake-professionals">Course BigQuery Fundamentals for Snowflake Professionals</a> provides quizzes and labs:

   * <a target="_blank" href="https://storage.googleapis.com/cloud-training/cls-html5-courses/T-BQSF-I/M1/index.html#/">BigQuery Architecture and Resource Provisioning</a>
   * <a target="_blank" href="https://storage.googleapis.com/cloud-training/cls-html5-courses/T-BQSF-I/M2/index.html#/">BigQuery Data Definition Model</a>
   * <a target="_blank" href="https://googlecoursera.qwiklabs.com/focuses/29587268?parent=lti_session">1 hr 30m LAB: Monitoring BigQuery Workloads</a>
   * <a target="_blank" href="https://storage.googleapis.com/cloud-training/cls-html5-courses/T-BQSF-I/M3/index.html">BigQuery and Google Cloud IAM</a>
   * <a target="_blank" href="https://googlecoursera.qwiklabs.com/focuses/29587358?parent=lti_session">LAB: Securing and Sharing BigQuery Datasets and Tables</a>
   * <a target="_blank" href="https://storage.googleapis.com/cloud-training/cls-html5-courses/T-BQSF-I/M4/index.html#/">BigQuery Data Ingestion</a>
   * <a target="_blank" href="https://storage.googleapis.com/cloud-training/cls-html5-courses/T-BQSF-I/M5/index.html#/">BigQuery Schema Design and Optimization</a>
   * <a target="_blank" href="https://storage.googleapis.com/cloud-training/cls-html5-courses/T-BQSF-I/M6/index.html#/">SQL in BigQuery</a>


### On Pluralsight.com:

Path: <a target="_blank" href="https://app.pluralsight.com/paths/skill/snowflake-for-data-analyst">Path: Snowflake for Data Analyst</a>

Beginner:

* <a target="_blank" href="https://app.pluralsight.com/library/courses/snowflake-architecture-overview-getting-started">1h 16m Snowflake Architecture and Overview: Getting Started</a> Dec 23, 2021
by Alejandro Romero (@aromero77)

By <a target="_blank" href="https://www.linkedin.com/in/mohitbatra/">Mohit Batra</a> (CrystalTalks) residing in Hyderabad:

* <a target="_blank" href="https://app.pluralsight.com/player?course=moving-data-snowflake">1h 22m Moving Data with Snowflake</a>
Nov 21, 2021
 
    <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690565375/snowflake-ingest-1360x737_hin8ft.png"><img alt="snowflake-ingest-1360x737.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690565375/snowflake-ingest-1360x737_hin8ft.png"></a> 

* <a target="_blank" href="https://app.pluralsight.com/library/courses/querying-data-snowflake">1h 56m Querying Data with Snowflake</a> Feb 13, 2023


Intermediate:

* <a target="_blank" href="https://app.pluralsight.com/library/courses/setting-up-cloud-databases-tables-snowflake">57m Setting up Cloud Databases and Tables with Snowflake</a> Apr 28, 2022
by <a target="_blank" href="https://www.linkedin.com/in/thomaslleblanc/">Thomas LeBlanc</a> (@TheSmilingDBA, Thomas-LeBlanc.com)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/query-caching-performance-features-snowflake">35m Query Caching Performance Features with Snowflake</a> Dec 6, 2021
by <a target="_blank" href="https://www.linkedin.com/in/hirerushabh/">Rushabh Doshi</a> in Redmond. 

* <a target="_blank" href="https://app.pluralsight.com/library/courses/performing-data-analytic-tasks-snowflake">1h 29m Performing Data Analytic Tasks with Snowflake</a> Oct 4, 2021
by Warner Chaves

* <a target="_blank" href="https://app.pluralsight.com/library/courses/sql-extensibility-features-snowflake">1h 2m SQL Extensibility Features with Snowflake 5</a> Oct 3, 2021
by <a target="_blank" href="https://www.linkedin.com/in/pinaldave/">Pinal Dave</a> in India. 

Advanced:

* <a target="_blank" href="https://app.pluralsight.com/library/courses/working-semi-structured-data-snowflake">1h 37m Working with Semi-structured Data with Snowflake</a>
by <a target="_blank" href="https://www.linkedin.com/in/warnerchaves/">Warner Chaves</a> (Datascape podcast, @warchav, createdatapros.com)
Nov 17, 2021

* <a target="_blank" href="https://app.pluralsight.com/library/courses/visualizing-data-snowflake">1h 2m Visualizing Data via Snowflake</a>
by <a target="_blank" href="https://www.linkedin.com/in/alejandro-romero-mba-86a6993/">Alejandro Romero</a> (@aromero77) at U of Utah and Elastic
Mar 1, 2022

### On OReilly.com


### On LinkedIn.com Learning:

By <a target="_blank" href="https://www.linkedin.com/in/lynnlangit/">Lynn Langit</a>:

<a target="_blank" href="https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud">Learning SnowflakeDB</a>

references her <a target="_blank" href="https://github.com/lynnlangit/learn-snowflakedb">https://github.com/lynnlangit/learn-snowflakedb</a>


### on Udemy.com

<a target="_blank" href="https://www.youtube.com/watch?v=dxrEHqMFUWI">VIDEO: Snowflake Architecture - Learn How Snowflake Stores Table data</a>
Aug 17, 2019

https://www.learningjournal.guru/courses/
https://www.scholarnest.com/ 
Kafka

<a name="YouTube"></a>

### on YouTube

<a target="_blank" href="https://www.youtube.com/watch?v=9PBvVeCQi0w">
What is Snowflake? 8 Minute Demo</a> by <a target="_blank" href="https://www.linkedin.com/in/peter-mebane/">Peter Mebane</a>

<a target="_blank" href="https://www.youtube.com/watch?v=C8_os0-ti48">

<a target="_blank" href="https://www.youtube.com/watch?v=5ugxQi3b16k">
Understanding Snowflake Data Platform for Beginners</a> by Peter Morton

<a target="_blank" href="https://www.youtube.com/watch?v=-54Xf1G7A2A">Why is Snowflake so popular? Data warehouse vs. data lake. // What you should know about software</a>

<a target="_blank" href="https://www.youtube.com/watch?v=xCCkHZf1-aIz">
Zero to Snowflake in 58 minutes</a> by
Datalytyx

<a target="_blank" href="https://www.youtube.com/watch?v=RrwwxuJbyWo">
Snowflake Real Time Project Flow || What is Snowflake || Snowflake Features</a>
by Praveen Kumar Bommisetty




<hr />

<a name="Resources"></a>

### Resources


<hr />

<a name="More"></a>

## More about databases #

This is one of a series about databases:

{% include azure_links.html %}
