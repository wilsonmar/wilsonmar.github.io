---
layout: post
date: "2023-07-10"
file: "snowflake"
title: "Snowflake (SQL database)"
excerpt: "How to quickly learn and use the Snowflake cloud SQL database offered on AWS, Azure, GCP clouds"
tags: [cloud, database]
image:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


{% include whatever.html %}

1. <a href="#ValueAdd">Value Add</a>
1. <a href="#Competitors">Competitors</a>
1. <a href="#Architecture">Architecture</a>
1. <a href="#Company">The Snowflake Company</a>

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

Snowflake offers a <a target="_blank" href="https://www.wikiwand.com/en/Cloud_database">cloud-based database</a> "Data-as-a-Service" (DaaS) GUI and <a href="#Languages">programmatic interfaces</a> that enable corporate users to store and analyze <strong>SQL-based</strong> data on hardware and networks provided by public cloud service providers (CSPs AWS, Azure, GCP):
   * on Amazon S3 since 2014
   * on <a target="_blank" href="https://wilsonmar.github.io/azure">Microsoft Azure</a> since 2018
   * on <a target="_blank" href="https://wilsonmar.github.io/gcp">Google Cloud Platform (GCP)</a> since 2019
   * on Salesforce?
   <br /><br />

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

PROTIP: Instead of leaving data in a single CSP, Snowflake provides the basis for <strong>multi-cloud</strong> operation, without CSP vendor lock-in.

This separation from a single cloud or on-prem. data center unifies teams around governed data.

Snowflake's "cloud data warehousing" software includes its Data Cloud, an ecosystem where Snowflake customers, partners, data providers, and data consumers can break down data silos and derive value from rapidly growing data sets in secure, governed, and compliant ways. 

Snowflake's "Data Marketplace" platform supports a range of use cases, including data warehousing, data lakes, data engineering, data science, data application development, and data sharing. 
   * <a target="_blank" href="https://www.youtube.com/watch?v=SwTYQXqQ3N4">VIDEO</a>: DICOM Image Analysis With Snowpark (to detect Pneumonia in Xrays using Machine Learning).

What will you use Snowflake for?
   * Build an application or data product for customers
   * Develop machine learning model or another data science initiative
   * Run analytics or connect to visualization provider
   * Migrate an existing data warehouse
   * Create a data lake, data mesh, or federated data source
   * Other

Snowflake is HIPAA, PCI DSS, SOC 1 and SOC 2 Type 2 compliant, and FedRAMP Authorized.

## Competitors

"Snowflake Cloud Data Warehouse" competes in a crowded field of cloud-based databases from its cloud vendors:
   * Amazon Aurora, MySQL based service
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

However, Snowflake was ranked first on the Forbes Cloud 100 in 2019.

Seattle Data Guy answers<a target="_blank" href="https://www.youtube.com/watch?v=njttWa08pwo">"Why Everyone Cares about Snowflake"</a> by saying Snowflake "has the most clout" despite market share of 12-13%.

PROTIP: Snowflake is acknowledged as user-friendly, easy scaling up/down with flexible "pay-as-you-go" pricing.

Snowflake is <strong>fast</strong>: "A complex query takes more than 6 hours in MySQL, 2 hours in Oracle, and just 10 minutes in snowflake."

References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=VLtq0eeHc14">VIDEO: Databricks v. Snowflake</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=CUu35E9TViE">Should you switch to Snowflake</a>


<a name="Architecture"></a>

## Architecture

Snowflake's cloud-native architecture consists of three independently scalable layers across storage, compute, and cloud services:

   * The storage layer ingests massive amounts and varieties of structured and semi-structured data to create a unified data record. 

   * The compute layer provides dedicated resources to enable users to simultaneously access common data sets for many use cases without latency. 

   * The cloud services layer optimizes each use case's performance requirements with no administration.
   <br /><br />

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1690522798/snowflake-1075x478_ht4hxt.png"><img alt="snowflake-1075x478.png" width="1075" height="478" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690522798/snowflake-1075x478_ht4hxt.png"></a>

"What makes Snowflake different is its <strong>multi-cluster shared architecture</strong>" --<a target="_blank" href="https://www.youtube.com/watch?v=C8_os0-ti48">VIDEO: What is Snowflake</a> (by a non-user)

   * Metadata
   * Zero Copy Cloning
   * Time Travel
   * Data Sharing
   <br /><br />

SnowGrid?


<a name="Company"></a>

## Snowflake the company

Snowflake Inc. was founded in 2012 by ex-Oracle founders:
* <a target="_blank" href="https://www.linkedin.com/in/benoit-dageville-3011845/">Benoît Dageville</a> President of Product, living San Francisco after 16 years at Oracle, 
* <a target="_blank" href="https://www.linkedin.com/in/thierry-cruanes-3927363/">Thierry Cruanes</a> of San Mateo
* <a target="_blank" href="https://www.linkedin.com/in/marcinzukowski/">Marcin Żukowski</a>

They live in San Mateo, where <a target="_blank" href="https://www.glassdoor.com/Jobs/Snowflake-Jobs-E928471.htm?filter.countryId=1">jobs</a> are located (not remote).

That's according to https://www.wikiwand.com/en/Snowflake_Inc. which<br />
lists 5,884 employees in 2023.

https://www.linkedin.com/company/snowflake-computing/<br />
lists 7,230 employees and 664,151 followers (on July 23, 2023)

After 6 years as CEO of Service Now, <a target="_blank" href="https://www.youtube.com/watch?v=oiWwyt3HVT0">VIDEO</a>: <a target="_blank" href="https://www.linkedin.com/in/frankslootman/">Frank Slootman</a> has been CTO since April 2019. Slootman lives in Bozeman, Montana, so also headquarters the company in a <a target="_blank" href="https://www.google.com/maps/@45.6781075,-111.0343117,3a,75y,249.16h,90t/data=!3m8!1e1!3m6!1shqeOJEDOeqj6fMP60OM0pA!2e0!5s20190601T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DhqeOJEDOeqj6fMP60OM0pA%26cb_client%3Dsearch.gws-prod.gps%26w%3D360%26h%3D120%26yaw%3D249.15569%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu">one-story building</a> at <a target="_blank" href="https://goo.gl/maps/qDGBR4f6R9aK68n37">106 East Babcock Street, Bozeman, Montana</a>. +1 844.766-9355

<a target="_blank" href="https://www.glassdoor.com/Reviews/Snowflake-Reviews-E928471.htm">On Glassdoor</a>, Slootman received from employees a 90% rating, with a high 4.0 rating and 75% of employees saying they would recommend to a friend.

The company mascot is a ____ called "___".

People who work in the company Snowflake are called "___".

Snowflake IPO'd (during the pandemic) on September 2020 as NYSE ticker <a target="_blank" href="https://www.barrons.com/market-data/stocks/snow">SNOW</a>, raising $3.4 billion, one of the largest software IPOs in history.

SNOW is a component of the Russell 1000 index.

On the board since April, 2023 is <a target="_blank" href="https://www.linkedin.com/in/markmclaughlin4/">Mark McLaughlin</a>, retired Chairman of Qualcomm, Palo Alto, Verisign.

The stock peaked on September 2021 at $350, but on July 27, 2023, was at $170/share, for a market value of $55.4B with 4.61 Debt-to-Equity.
In 2023, its $1.31B Gross Income and $2.15B Expenses yielded a <strong>-$796.71M Loss</strong> for -38.57% Net Margin and -$2.67 EPS and -15.17% ROE based. Although declining, a 73.97% Income Growth was reported.

The company's <a target="_blank" href="https://www.snowflake.com/en/company/overview/about-snowflake/snowflakes-growth-story/">Growth Story</a>
aims for "$10B in revenue by FY2029", partly through acquisitions of Polidea, Pragmatists, Streamlit, Myst.ai.

On June 27, 2023, a partnership with NVIDIA was announced.

/#MakeItSnow


<a name="URLs"></a>

## Host Names (URLs)

* https://www.snowflake.com is Snowflake's marketing page

* https://www.snowflake.net

* https://www.youtube.com/@snowflakedevelopers - 5k subscribers
   led by <a target="_blank" href="https://www.linkedin.com/in/chanin-nantasenamat/">Chanin Nantasenamat</a>, <a target="_blank" href="https://www.glassdoor.com/Reviews/Streamlit-Reviews-E4916073.htm">Streamlit</a> Sr. Dev Advocate living in Thailand.

* https://www.snowflake.com/live-demo

* https://.../  is Snowflake's URL shortener
   
* https://docs.snowflake.com/Documentation

* https://bots.snowflake.com for hands-on experiences using Snowflake security products.

* https://github.com/snowflakedb contains open-source repos by the company (858 followers on July 27, 2023)

<a name="Certifications"></a>

### Certifications

Snowflake's certification exams are delivered through Pearson Vue (844.914-0562) through Snowflake's Certification Portal at<br />
https://snowflake.useclarus.com/

https://www.snowflake.com/certifications/ 

(Shortened recertification exam COF-R02 to maintain status are offered at a reduced price.)

<strong>$175 SnowPro Core Certification</strong> COF-C02 -- the Foundational level certification and demonstrates an individual’s knowledge to apply core expertise implementing and migrating to Snowflake.

<strong>$375 SnowPro Advanced Certifications</strong> (and recerts) are for each of five roles:

* ARA-C01 (ARA-R01) - Architect
* DEA-C01 (DEA-R01) - Data Engineer
* DSA-C01 (DSA-R01) - Data Scientist
* ADA-C01 (ADA-R01) - Administrator
* DAA-C01 (DAA-R01) - Data Analyst
<br /><br />

As of this writing, practice exams are available only for Core, Architect, and Data Engineer.


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
   * https://github.com/snowflakedb/SnowAlert - 163

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

OReilly.com [Kermit]


<a name="YouTube"></a>

## YouTube Rock Stars

<a target="_blank" href="https://www.youtube.com/watch?v=9PBvVeCQi0w">
What is Snowflake? 8 Minute Demo</a> by <a target="_blank" href="https://www.linkedin.com/in/peter-mebane/">Peter Mebane</a>

<a target="_blank" href="https://www.youtube.com/watch?v=C8_os0-ti48">


<hr />

<a name="Resources"></a>

### Resources

Plur

<hr />

<a name="More"></a>

## More about databases #

This is one of a series about databases:

{% include azure_links.html %}
