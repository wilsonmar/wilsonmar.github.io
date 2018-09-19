---
layout: post
title: "Salesforce Data (Importing and exporting)"
excerpt: "How to get data in and out of Salesforce"
tags: [salesforce]
image:
# salesforce-data-1900x500.jpg 
  feature: https://user-images.githubusercontent.com/300046/44629085-5920ff00-a907-11e8-8e58-549ddd61a356.jpg
  credit: SalesforceBen
  creditlink: https://www.salesforceben.com/best-data-loader-for-salesforce
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}


This article is a succinct hands-on deep dive on how to get data in and out of Salesforce.

## Data Objects

<a target="_blank" title="sf-data-diagram-764x418-22034.jpg" href="https://user-images.githubusercontent.com/300046/45555383-e617f380-b7f5-11e8-850c-18ec3664a70d.jpg">
<img alt="sf-data-diagram-764x418-22034.jpg" src="https://user-images.githubusercontent.com/300046/45555383-e617f380-b7f5-11e8-850c-18ec3664a70d.jpg"><br />
<small>Click to pop-up full screen image</small></a><a target="_blank" href="https://app.pluralsight.com/player?course=play-by-play-diagramming-salesforce-solutions&author=don-robins&name=005dd0f2-15a7-4ce3-98ca-1d0e8dcd854d&clip=4&mode=live">*</a>

## Wizard vs Loader

Based on VIDEO: <a target="_blank" title="Oct 17, 2017 [5:56]" href="https://www.youtube.com/watch?v=YbdCyWgWDNo&t=1m14s">Data Import: Choosing the Right Tool</a>:
<table border="1" cellpadding="4" cellspacing="0">
<tr><th>&nbsp;</th><th><a href="#DataImportWizard">Data Import Wizard</a></th><th><a href="#ApexDataLoader">Apex Data Loader</a></th></tr>
<tr valign="top"><td>Import data format</td><td>CSV</td><td>CSV</td></tr>
<tr valign="top"><td>Max. # records</td><td> &LT; 50,000</td><td> < 5 million</td></tr>
<tr valign="top"><td>Update existing records</td><td>yes</td><td>no</td></tr>
<tr valign="top"><td>Delete existing records</td><td>no</td><td>yes</td></tr>
<tr valign="top"><td>Catch duplicates</td><td>yes</td><td>no</td></tr>
<tr valign="top"><td>Import Opportunities</td><td>no</td><td>yes</td></tr>
<tr valign="top"><td>Can turn off Workflow rules</td><td>yes</td><td>no</td></tr>
<tr valign="top"><td>Can export data</td><td>no</td><td>yes</td></tr>
<tr valign="top"><td>Can save mappings</td><td>no</td><td>yes</td></tr>
</table>

Both can handle custom as well as standard objects.

## Data Types

Data type—primitive types: collections, sObjects, user-defined types, and built-in Apex types.

There are three main types of collections in Apex:

* Sets – <strong>unordered</strong> collection of elements that do not contain any duplicates. 
* Lists – ordered collection of elements distinguished by <strong>indices</strong>.
* Maps – key-value pairs with each unique key mappings to a single value. Keys and values can be any data type—primitive type.


## Excel to CSV

Many use Microsoft Excel to create and edit CSV files for import into Salesforce.

There are some tricks to using it.

1. Excel can open CSV files automatically when it's double-clicked on Finder.
1. Excel has no in-built way to specify the format of each field in CSV files. You'll need to save the file in Excel format to manually specify number fields as such.

   PROTIP: The leading zero in Zip codes get stripped automatically.

   Double-quotes within text are problematic because they are also used to define the beginning and end of fields.

### Excel Connector

<a target="_blank" href="https://developer.salesforce.com/page/Force.com_Excel_Connector">
The Force.com Excel Connector</a> is an Add-on to Microsoft Excel via the Toolkit for Office.
It provides <strong>bi-directional access</strong> to the Force.com API. 

So it's useful for cleaning and mass-updating salesforce.com-based data. 

Updated features include access to Products2 and custom objects, API names or labels, simple query wizard, readable user names, etc.

It allows you to upload and export data directly in and out of an excel sheet.

### Google Sheets

https://support.google.com/docs/answer/9073952?co=GENIE.Platform%3DDesktop&hl=en

<a name="DataImportWizard"></a>

## In-built Data Import Wizard

The <a target="_blank" href="https://help.salesforce.com/apex/HTViewHelpDoc?id=import_which_data_import_tool.htm&language=en">Data Import Wizard</a> is inbuilt within Salesforce to provide step-by-step guidance to manually specify how to get CSV files into Salesforce standard objects such as Leads, Accounts, Contacts, Solutions and custom objects. 

![sf-soql-652x218](https://user-images.githubusercontent.com/300046/44670591-5940fd80-a9e0-11e8-8904-44ca9e4a8cc6.jpg)

Based on <a target="_blank" href="http://opfocus.com/5-best-practices-for-salesforce-com-apex-data-loader/
">this article</a>:

1. Create a dedicated Data Loader Salesforce user account.

1. Login by appending the Security Token to extend the account's Password.

1. Set that account's User Profile to not fire triggers, workflows, or other automation.

1. Setup that user whenever you setup automation.

1. Create a checkbox fields on the user record labeled "Authorized to Send Email Alerts". 
   Include this field in your workflow rules, triggers or other automation, similar to option 1.

1. Toggle the flag on/off depending on the type of data load. 

1. Download the DataLoader.

1. Have a program calculate the number of records in the file. Salesforce limits imports of up to <strong>50,000 records</strong> at a time. Use this Linux command:

   <pre>wc -l importfile.csv</pre>

1. Before each upload, run a report to count the number of records, so you have a "before" picture.

1. Do a test run with just a couple records, so it's easier to recover from mistakes.

1. After an upload, run a report to calculate records and identify what has changed.

<a name="ApexDataLoader"></a>

## In-built Apex Data Loader

The <a target="_blank" href="https://developer.salesforce.com/page/Data_Loader">standard Salesforce Data Loader</a> is for migrating CSV datasets into Salesforce, up to 5 million records at a time.

But recurring data loads can be scheduled.
It is a program that communicates with the Salesforce cloud, installed locally on a laptop or on-premise server. Some consider it annoying to install on a Mac.

Permissions?

It can match external identifier keys. But its Auto Mappings is tricky to define, which can lead to wrong mappings or missing fields.

## DataLoader.io

<a target="_blank" href="http://dataloader.io/">
Dataloader.io</a> <a target="_blank" href="http://appexchange.salesforce.com/listingDetail?listingId=a0N30000009w8ZBEAY">from AppExchange</a> is a popular tools because it works on the browser ("no software"), no installation It and Salesforce security token required. It’s intuitive and wizard driven, but takes a little longer to setup and runs slower than the Salesforce Apex Data Loader. 

However, unlike the Apex Data Loader, it handles CSV files in DropBox, Box, SFTP, FTP.
This app also provides users with list of fields from related objects, making exports easier and cuts down post-export work required to bring multi-object data into a single row. 

Scheduling jobs?


## Jitterbit ODBC/JDBC Data Loader

<a target="_blank" href="http://www.jitterbit.com/solutions/salesforce-integration/salesforce-data-loader/">
Jitterbit</a> <a target="_blank" href="https://appexchange.salesforce.com/listingDetail?listingId=a0N300000016ZoVEAU">from AppExchange</a> is a free program installed on Windows and macOS. It is offered by Jitterbit Inc. as an entry offering to their full integration suite.

It is intended for tech savvy users who operate local databases (such as MySQL) and want to connect them to Salesforce. Its specialty is loading not just csv flat files but running ETL scripts that use ODBC/JDBC. 

Thus, its meant to process repetitive runs and not one-offs.

## Informatica Cloud Data Loader

<a target="_blank" href="https://appexchange.salesforce.com/listingDetail?listingId=a0N300000016cUTEAY">
Informatica's Cloud Data Loader</a> <a target="_blank" href="http://appexchange.salesforce.com/listingDetail?listingId=a0N300000016cUTEAY">from AppExchange</a> provides powerful data transformation logic during loading "on the fly", which enables more powerful formatting of data fields.

It comes with prebuilt integration templates for systems such as NetSuite or SAP; 

It is part of a very sophisticated integration suite called "built-in intelligence".
So it's for tech-saavy types.

It connects to Box.

Pity it only handles CSV files.

## Vlocity

Vlocity's DataRaptor is an extract, transform and load (ETL) tool that integrates with their Omniscripts to read and write Salesforce data. The DataRaptor Designer enables app developers to map data to the input format required by OmniScripts, to transform the data as required by business logic, and to write the output data back to Salesforce in compliance with the  Salesforce object model.

## Talend 

<a target="_blank" href="https://www.talend.com/resources/integrating-with-salesforce/">
Talend Components for Salesforce Data Integration</a> integrates with Talend's Open Studio and Integration Suite, which Forrester put at the top of all other vendors in both current offering and Strategy dimensions for "Data Integration Tools". 

The tool is open-source (free). It works on Hadoop and Spark big data. It schedules data loads from other systems, using the Salesforce API, to perform system integrations. 

In addition to Input and BulkExec connectors, Talend has more sophisticated connectors such as "GetUpdated" which changes data.

## LexiLoader

<a target="_blank" href="http://macappstore.org/lexiloader/">
http://macappstore.org/lexiloader</a>
says does not exist.

## BOFC (Bulk Object Field Creator)

Import & Export Salesforce fields using CSV or XLSX files to perform bulk CRUD operations with Point & Click.
from tech9logy.com 

Grabs your Salesforce Process builder flow into excel. 

See http://salesforcebofc.com/

## Apsona

<a target="_blank" href="https://apsona.com/">Apsona</a> is a set of SaaS-based tools for Salesforce.

https://apsona.com/pages/sfdc/nonprofits.html

## DemandTools

## Others:

* Web Form 
* Email to Case
* Email to database

## Export / Backup

Backups in DE orgs can occur Monthly only. 

Backups in prod (and Sandboxes) can occur Weekly or monthly (not daily). 

The output is a set of 500MB zip file Salesforce emails to you.
A backup file is a CSV file for each object, consists of many : one for each object and internal tables:

![sf-backup-objects-598x410-28455](https://user-images.githubusercontent.com/300046/44672521-ed619380-a9e5-11e8-9976-992d85a3145d.jpg)

Export does not include any of your metadata -- critical in rebuilding custom work and relationships. 

More frequent backups can occur using a 3rd party app on AppExchange, such as
<a target="_blank" href="https://www.ownbackup.com/">ownbackup.com</a>


## Data Quality

This is covered in the 211 course and:

   * Trailhead module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/data_quality">Data Quality</a> +700 
   <br /><br />

Topics:

* Assess, cleanse, and maintain data quality

* Prevent duplicate records using Duplicate Management

* Clean and enrich data with data.com, which uses external databases as the basis for cleaning Leads, Contacts, Accounts (not product Opportunities or Assets).

See validity.com #DemandTools, #PeopleImport, #DupeBlocker and #BriteVerify 


## Learning Modules

Project: <a target="_blank" href="https://trailhead.salesforce.com/en/projects/import-and-export-with-data-management-tools">
Import and Export with Data Management Tools</a> +300
to use Data Loader and the Data Import Wizard to manage data in Salesforce.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lex_implementation_data_management">Data Management</a> +550 Learn how to import and export data in Salesforce.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/salesforceiq-to-sales-cloud-setup">SalesforceIQ to Sales Cloud Setup</a> +1000 to optimize your new Sales Cloud org for your growing business.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/data_modeling">Data Modeling</a> +1500 to give your data structure with objects, fields, and relationships.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/large-data-volumes">Large Data Volumes</a> +400 Plan for and work with large data volumes within Salesforce.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/data-migration-and-service-cloud-setup">Data Migration and Service Cloud Setup</a> +200 to move your data from Desk.com to Service Cloud and perform your initial setup.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/custom_metadata_types">Custom Metadata Types</a> +1400 Learn how to customize, deploy, package, and upgrade application metadata with ease.

Account Data Strategies</a> +200
Learn how your sales team can use data to close deals.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lightning_data_service">Lightning Data Service Basics</a> +1100
Learn about force:recordData, its benefits, and how to use it in your components.

## References

* http://www.arkusinc.com/archive/2013/comparing-data-loaders-for-salesforce
   "Comparing Data Loaders for Salesforce" (2013) by Roger Mitchell 

* http://www.salesforceben.com/best-data-loader-for-salesforce/
   "Best Data loader for Salesforce" (2014) by Ben McCarthy

VIDEO: <a target="_blank" title="Oct 17, 2017 [21:47]" href="https://www.youtube.com/watch?v=XaDGT9U2n_w">
How to: Use Two Great (and Free) Data Tools - Data Loader and Excel Connector</a>

For those who have bought Mike Wheeler's Udemy class:

   * https://www.udemy.com/salesforce-administrator/learn/v4/t/lecture/4309758?start=0
   Data Import Wizard and the Data Loader

   * https://www.udemy.com/salesforce-administrator/learn/v4/t/lecture/4812698?start=0
   Additional Salesforce Data Management Tools


## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
