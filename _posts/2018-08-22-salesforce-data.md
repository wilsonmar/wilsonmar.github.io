---
layout: post
title: "Salesforce Data (Importing and exporting)"
excerpt: "How to get data in and out of Salesforce"
tags: [salesforce]
image:
# salesforce-data-unsplash-denys-1900x500-33517.jpg/png
  feature: https://user-images.githubusercontent.com/300046/57971273-14cc0800-7949-11e9-8c20-82dc8bdbb53c.jpg
  credit: Denys Nevozhai
  creditlink: https://unsplash.com/photos/dq93aNzsrH0
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<!--
# salesforce-data-1900x500.jpg 
  feature: https://user-images.githubusercontent.com/300046/44629085-5920ff00-a907-11e8-8e58-549ddd61a356.jpg
  credit: SalesforceBen
  creditlink: https://www.salesforceben.com/best-data-loader-for-salesforce
-->
<a target="_blank" href="https://wilsonmar.github.io/salesforce-data">This article</a> is a succinct hands-on deep dive on how to get data in and out of Salesforce.

3 billion transactions go through Salesforce daily.

QUESTION: Please correct me if I'm wrong here.

There is a "dirty little open secret" about how companies actually work with Salesforce data.

Internally, Salesforce uses Oracle RAC databases, which "log ships" every change instantaneously to another region for disaster-proof recovery. 

However, Salesforce does not provide a way for users to restore data from backups it has taken.

## TL;DR What is your Salesforce RPO & RTO?

The IT industry-wide has names for recovery of data in case servers fail in enterprise data centers:

<strong>RTO (Recovery Time Objective)</strong> 
is the <strong>time</strong> that a company is willing to wait for data to be recovered.
For Salesforce users not subscribing to a 3rd-party service, 
RTO would be in days or weeks rather than in minutes.

<strong>RPO (Recovery-Point Objective)</strong> 
is the amount of <strong>data</strong> that a company is willing to lose when restoring from disaster.
Salesforce, by default, does not provide "point-in-time" recovery from "snapshots" of all data at various points in time. 

Export of data using built-in Salesforce functionality is not automatically enabled when an account is established. And Salesforce limits full backups to once a week. Full sandboxes cost more money.

If you don't run backup jobs, Salesforce charges a minimum of $10,000 to obtain that data, 
which will take a week or more.

Sandboxes for developer use are created only with metadata, not data. 

![sf-sandboxes-820x337](https://user-images.githubusercontent.com/300046/57319470-e08b5880-70b9-11e9-940a-a0e65ee180f1.png)

Salesforce does not provide a comprehensive way to <strong>import</strong> CSV files exported. So intricate programming is needed, or pay thousands a month for <a target="_blank" href="https://wilsonmar.github.io/salesforce-data/#3rd-party">3rd-party utilities (described below)</a>.

(During cloning, existing users and their status and appends the name of the sandbox to logon Id's, but keeps passwords.)

<a target="_blank" href="https://www.cnbc.com/2019/05/17/salesforce-says-a-major-issue-with-cloud-service-results-in-downtime.html">Salesforce encountered a data issue on May 17, 2019</a> related to Pardot.

## Data Quality

This is covered in the 211 course and Trailhead module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/data_quality">Data Quality</a> +700 
   * Assess, cleanse, and maintain data quality
   * Prevent duplicate records using Duplicate Management
   * Clean and enrich data with data.com, which uses external databases as the basis for cleaning Leads, Contacts, Accounts (not product Opportunities or Assets).

See validity.com #DemandTools, #PeopleImport, #DupeBlocker and #BriteVerify 


## Export .csv from Salesforce

There are several ways to obtain an export:

   A. Use the Salesforce GUI<br />
   B. Use the <a href="#FuseIT">FuseIT CLI program for Windows</a>

<hr />

## FieldDump from AppExchange

<a target="_blank" href="https://www.p0p.co.uk/fielddump/">FieldDump</a> is a free add-on via AppExchange that extracts a Data Model to a spreadsheet readable by Microsoft Excel, Google Sheet, etc.

### Export using Salesforce GUI

1. In Salesforce, enter Setup to look for "Export" ("Data Export").

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/44672521-ed619380-a9e5-11e8-9976-992d85a3145d.jpg"><img alt="sf-backup-objects-598x410-28455.jpg" width="598" src="https://user-images.githubusercontent.com/300046/44672521-ed619380-a9e5-11e8-9976-992d85a3145d.jpg"></a>

   Notice object names are not sorted.

2. Click checkbox "<strong>Include all data</strong>" under the "Weekly Export Service" heading.
3. Click "Export Now". Click "Schedule Now"
4. Wait for an email with subject "Your Organization Data Export has completed."
5. In your email program (Outlook/Exchange, etc.), download the zip file by clicking the link. 
   The file name is like "WE_00DG0000000gbbAMAQ_1.ZIP".

<a name="FuseIT"></a>

### Export using FuseIT

Salesforce Consultants FuseIT in New Zealand has a <a target="_blank" href="https://fuseit.com/products/fuseit-sfdc-explorer/">Salesforce Explorer</a>

<a target="_blank" href="https://fuseit.com/Solutions/SFDC-Explorer/Help-Data-Exports.aspx">
https://fuseit.com/Solutions/SFDC-Explorer/Help-Data-Exports.aspx</a> that includes "Data Exports".
Their <a target="_blank" href="https://fuseit.com/products/data-storage-and-salesforce/">MongoDB for Salesforce ("M4S")</a> connector (super cache) for <a target="_blank" href="https://fuseit.com/products/net-salesforce-integration/">ASP.NET web app integration</a> (which they call "G4S").

Their <a target="_blank" href="https://fuseit.atlassian.net/wiki/spaces/FSDE/pages/13533199/Data+Export+Command+Line">CLI for Windows</a>, after download and install, can be run by a scheduler to request exports with a command such as:

<pre>FuseIT.SFDC.DataExportConsole.exe \
/u:user@test.com /p:12345678  \
/t:C3P3qivIf5t6Q6uYtzxxxxxx  \
/e:Production "C:\\SFDCexports"</pre>

### .csv files exported

Within the export (backup) zip file are CSV files for each object. One file for each object and internal table. Remember:

   * Export does not include any of your metadata (critical in rebuilding custom work and relationships).
   * Export does not include attached files. 
   * Export can take a week or more to process through the queue.
   * Exports are not allowed from sandboxes.
<br /><br />

Export Backups in DE (Developer eXperience) orgs can occur Monthly only.<br />
Backups in prod (and Sandboxes) can occur weekly or monthly.<br />
<strong>CAUTION: Salesforce does not allow daily backups</strong>. 

More frequent backups can occur using a 3rd party app on AppExchange.

Each .csv file cannot be large than 500MB.

### Spreadsheet of .csv files 

<a target="_blank" href="https://drive.google.com/drive/u/0/folders/1qkZBfQa9B75G0-M69be-3TdVSKjPHLXe">Our spreadsheet of objects exported</a> 
has 331 data rows plus a header row.

Column names in the header row begin with an underline so they always sort to the top.
Thus, column A is named "_Seq",

The "_Backup File Name" column contains file names ending in .csv. 
The list was created by Salesforce after all objects were selected in the export form.

My list contains objects from several add-ons:

   * CnP_... for "Click and Pledge"
   * EventbriteSync__... for the Eventbrite activity calendar synchronization
   * MC4SF__... for MailChimp for Salesforce (4SF) <a target="_blank" href="https://appexchange.salesforce.com/listingDetail?listingId=a0N3000000B3byfEAB&tab=r">from AppExchange</a>
   <br /><br />

   CAUTION: Read the reviews to each add-on listed above.

`_SEN` containing TRUE mark fields which contain sensitive information such as email address, birthdates, Social Security Numbers, bank account identifiers, and other personally identifiable information (PEI). These fields need to be cleansed when not in the production instance.

`_Rows` counts the rows in each .csv file.  

   * "0" values are for blank files.
   * "1" values are for files containing just the header row but no data.
   * "7" would be for a file with 6 data records plus a header.
   <br />

`_LABEL` is the checkbox field lable in the Export form on Salesforce.

`_API_NAME` and `_DEPLOYED` are from the Object Manager at:

   <pre>https://<em>Account</em>.lightning.force.com/lightning/setup/ObjectManager/home</pre>


### Excel

Many use Microsoft Excel to create and edit CSV files for import into Salesforce.

There are some tricks to using it.

1. Excel can open CSV files automatically when it's double-clicked on Finder.

1. Excel has no in-built way to specify the format of each field in CSV files. You'll need to save the file in Excel format to manually specify number fields as such.

   PROTIP: The leading zero in Zip codes get stripped automatically.

   Double-quotes within text are problematic because they are also used to define the beginning and end of fields.

## Issues with reading CSV in Excel

The issue with .csv files exported are these: 

### Data Types

Data type—primitive types: collections, sObjects, user-defined types, and built-in Apex types.

There are three main types of collections in Apex:

* Sets – <strong>unordered</strong> collection of elements that do not contain any duplicates. 
* Lists – ordered collection of elements distinguished by <strong>indices</strong>.
* Maps – key-value pairs with each unique key mappings to a single value. Keys and values can be any data type—primitive type.
<br /><br />

The import file should include a record owner for each record (defaulting to the account used to do importing).


### Schema of Data Object Dependencies

PROTIP: One cannot just insert data of any given object from a .CSV file because of <strong>dependencies</strong>.

The Salesforce Console provides a dependency viewer at: ???

<a target="_blank" title="sf-data-diagram-764x418-22034.jpg" href="https://user-images.githubusercontent.com/300046/45555383-e617f380-b7f5-11e8-850c-18ec3664a70d.jpg">
<img alt="sf-data-diagram-764x418-22034.jpg" src="https://user-images.githubusercontent.com/300046/45555383-e617f380-b7f5-11e8-850c-18ec3664a70d.jpg"><br />
<small>Click to pop-up full screen image</small></a><a target="_blank" href="https://app.pluralsight.com/player?course=play-by-play-diagramming-salesforce-solutions&author=don-robins&name=005dd0f2-15a7-4ce3-98ca-1d0e8dcd854d&clip=4&mode=live">*</a>

There is more "smarts" with Master-detail vs. lookup:
* Only 2 are allowed per object (vs 25 lookups)
* Access to parent determines access to children.
* All users who can access a specific parent record will also has access to all the related child records (parent has private OWD setting and has sharing rules on top of it)
* Activities tagged to child records has to be shown on parent account too
* When the parent record is deleted all the child records attached are deleted.
* Rollup summary fields to parent based on  SUM, AVG, MIN of child records
* A child of one master detail relationship cannot be the parent of another.
<br /><br />

There are many-to-many relationships. These are defined using <a target="_blank" href="https://trailhead.salesforce.com/en/content/learn/projects/build-a-data-model-for-a-recruiting-app/junction-object-job-postings"><strong>junction objects</strong></a> which combines in a custom object two master-detail relationships.

<a target="_blank" href="https://github.com/rsoesemann/salesforce-plantuml">https://github.com/rsoesemann/salesforce-plantuml</a> (by Robert Sösemann who ported the PMD extensible multilanguage static code analyzer to Salesforce) is an open-sourcce native Force.com application app that generates UML class & ER-diagrams from your org data. It leverages the <a target="_blank" href="http://plantuml.sourceforge.net/codejavascript2.html">PlantUML JavaScript Deflate</a> and other libraries.

ALAS: <a target="_blank" href="https://appexchange.salesforce.com/listingDetail?listingId=a0N300000018leZEAQ">Etherios EasyDescribe free app</a> to view and extract object metadata by <a target="_blank" href="http://www.westmonroepartners.com/">West Monroe Partners (of Chicago)</a> is dated 2010 for Winter 11 / 1.91.0 and listed as "private".

<a target="_blank" href="https://appexchange.salesforce.com/listingDetail?listingId=a0N30000009wZkUEAU">Layout Page free app</a> from Clerisoft in 2015 converts any Salesforce Page Layout (Standard OR Custom) into a Standard Visualforce Page in just 3 steps.

References:
* https://www.youtube.com/watch?v=fUD4MzgA0gk
* http://certifiedondemand.com/lookup-or-master-detail-relationship-in-salesforce
* http://www.salesforcetutorial.com/object-relationships-in-salesforce/
* https://help.salesforce.com/HTViewHelpDoc?id=relationships_considerations.htm
* https://help.salesforce.com/HTViewHelpDoc?id=overview_of_custom_object_relationships.htm
* https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/relationships_among_objects.htm



## Insert .CSV into Salesforce

To insert data within .csv back into Salesforce, there are several approaches:

   A. Use the <a href="#ExcelConnector">Excel Connector</a>
   B. Use the <a href="#Wizard">Salesforce Wizard or DataLoader</a>
   C. Use a <a href="#3rdParty">3rd-party utility</a>

   For "DYIers" who don't want to spend extra money but have the technical chops:

   D. Write <a href="#JavaPgm">Java Apex code</a> to run within a Salesforce Console
   E. Write <a href="#RESTAPI">REST API calls</a> within a custom web app program (in Java, Python, or other language) to insert into Salesforce databases.

<hr />

<a name="ExcelConnector"></a>

### Excel Connector

Because Salesforce generates .csv files that Microsoft Excel and Google Sheet can read, many think that Salesforce should also read .csv files as input for import as well, in a "round-trip".

<a target="_blank" href="https://developer.salesforce.com/page/Force.com_Excel_Connector">
The Force.com Excel Connector</a> is an Add-on to Microsoft Excel via the Toolkit for Office.
It promises <strong>bi-directional access</strong> to the Force.com API. 

So it's useful for cleaning and mass-updating salesforce.com-based data. 

Updated features include access to Products2 and custom objects, API names or labels, simple query wizard, readable user names, etc.

It allows you to upload and export data directly in and out of an excel sheet.

QUESTION: What abut web-based (SaaS) Microsoft 360? or <a target="_blank" href="https://support.google.com/docs/answer/9073952?co=GENIE.Platform%3DDesktop&hl=en">Google Sheets</a>?


<hr />


<a name="Wizard"></a>

## Wizard vs DataLoader

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

Both can handle custom as well as standard objects.<br />
Both trigger validation rules during importing.


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


<hr />

<a name="3rdParty"></a>

## 3rd-Party

Several partners of Salesforce offer tools.

### Own backup

<a target="_blank" href="https://www.ownbackup.com/">ownbackup.com</a>
is the premier solution.


### DataLoader.io

<a target="_blank" href="http://dataloader.io/">
Dataloader.io</a> <a target="_blank" href="http://appexchange.salesforce.com/listingDetail?listingId=a0N30000009w8ZBEAY">from AppExchange</a> is a popular tools because it works on the browser ("no software"), no installation It and Salesforce security token required. It’s intuitive and wizard driven, but takes a little longer to setup and runs slower than the Salesforce Apex Data Loader. 

However, unlike the Apex Data Loader, it handles CSV files in DropBox, Box, SFTP, FTP.
This app also provides users with list of fields from related objects, making exports easier and cuts down post-export work required to bring multi-object data into a single row. 

Scheduling jobs?


### Jitterbit ODBC/JDBC Data Loader

<a target="_blank" href="http://www.jitterbit.com/solutions/salesforce-integration/salesforce-data-loader/">
Jitterbit</a> <a target="_blank" href="https://appexchange.salesforce.com/listingDetail?listingId=a0N300000016ZoVEAU">from AppExchange</a> is a free program installed on Windows and macOS. It is offered by Jitterbit Inc. as an entry offering to their full integration suite.

It is intended for tech savvy users who operate local databases (such as MySQL) and want to connect them to Salesforce. Its specialty is loading not just csv flat files but running ETL scripts that use ODBC/JDBC. 

Thus, its meant to process repetitive runs and not one-offs.

### Informatica Cloud Data Loader

<a target="_blank" href="https://appexchange.salesforce.com/listingDetail?listingId=a0N300000016cUTEAY">
Informatica's Cloud Data Loader</a> <a target="_blank" href="http://appexchange.salesforce.com/listingDetail?listingId=a0N300000016cUTEAY">from AppExchange</a> provides powerful data transformation logic during loading "on the fly", which enables more powerful formatting of data fields.

It comes with prebuilt integration templates for systems such as NetSuite or SAP; 

It is part of a very sophisticated integration suite called "built-in intelligence".
So it's for tech-saavy types.

It connects to Box.

Pity it only handles CSV files.

### Vlocity

Vlocity's DataRaptor is an extract, transform and load (ETL) tool that integrates with their Omniscripts to read and write Salesforce data. The DataRaptor Designer enables app developers to map data to the input format required by OmniScripts, to transform the data as required by business logic, and to write the output data back to Salesforce in compliance with the  Salesforce object model.

### Talend 

<a target="_blank" href="https://www.talend.com/resources/integrating-with-salesforce/">
Talend Components for Salesforce Data Integration</a> integrates with Talend's Open Studio and Integration Suite, which Forrester put at the top of all other vendors in both current offering and Strategy dimensions for "Data Integration Tools". 

The tool is open-source (free). It works on Hadoop and Spark big data. It schedules data loads from other systems, using the Salesforce API, to perform system integrations. 

In addition to Input and BulkExec connectors, Talend has more sophisticated connectors such as "GetUpdated" which changes data.

### LexiLoader

<a target="_blank" href="http://macappstore.org/lexiloader/">
http://macappstore.org/lexiloader</a>
says does not exist.

### BOFC (Bulk Object Field Creator)

Import & Export Salesforce fields using CSV or XLSX files to perform bulk CRUD operations with Point & Click.
from tech9logy.com 

Grabs your Salesforce Process builder flow into excel. 

See http://salesforcebofc.com/

### Apsona

<a target="_blank" href="https://apsona.com/">Apsona</a> is a set of SaaS-based tools for Salesforce.

https://apsona.com/pages/sfdc/nonprofits.html

### DemandTools

### SOQL Studio from Visual Software systems

<a target="_blank" href="https://visualsoftwaresystems.net/Product/SOQLStudio">
SOQL Studio from Visual Software systems</a> is a $50/year IDE to query, visualize and extract Salesforce data at a depth and breadth of features not available with the force.com IDE, Developer Console, Workbench, or Data Loader. The tool returns every data point -- aggregates, compound fields, related records, multi-level child-to-parent fields. It can work with multiple queries at the same time. It allows for annotation of queries with single or multi-line comments. Queries can be saved for reuse later. Copy/Paste selected bits of you results or export the full results of your SOQL query in Excel, CSV, XML or custom text format, even if your query includes data from child objects. 

### Reflection Enterprise

<a target="_blank" href="https://reflectionenterprise.com/salesforce-data-export/">reflectionenterprise.com/salesforce-data-export</a>

### JetBrains Illuminated Cloud

The Illuminated Cloud 
<a target="_blank" href="https://twitter.com/IllumCloud">@IllumCloud</a>)
add-in to JetBrains' IntelliJ IDE.

It supports multiple Dev Hubs when creating scratch orgs, which is nice when working on packages in different dev hubs.

### CloudToolKit

Ben Edwards (<a target="_blank" href="https://twitter.com/benedwards44">@benedwards44</a> in New Zealand) <a target="_blank" href="https://cloudtoolkit.co/">https://cloudtoolkit.co</a> (salesforcetoolkit.com and sftoolkit.co) open sourced <a target="_blank" href="https://github.com/benedwards44/">in GitHub</a> a suite of tools running on Heroku:

* <a target="_blank" href="https://schemalister.herokuapp.com/">Schema Lister</a> using the Salesforce Metadata API to build a list of objects, fields, and field attributes from within a  Salesforce Org.

* <a target="_blank" href="https://schemalister.herokuapp.com/">sforgcompare</a> which uses the Salesforce Tooling or Metadata API (user selection) to compare metadata between two Orgs -- useful when planning deployments or building deployment packages, as well as seeing what configuration exists in Production to Sandbox or between Sandbox environments.

* <a target="_blank" href="https://schemalister.herokuapp.com/">sfcodeclean</a> scans all the (non-packaged) Apex Classes in your Org to build a table of where each property, variable and method is used. Useful for cleaning up unused code. Only Apex Class metadata is captured from your Org. 

* <a target="_blank" href="https://sfswitch.herokuapp.com/">Switch</a> which provides a web interface to easily enable and disable components in your Salesforce Org - Workflows, Triggers and Validation Rules. Very useful when doing data migrations and needing to disable certain automation in Salesforce.

* <a target="_blank" href="https://packagebuilder.herokuapp.com/">packagebuilder</a> which uses the Salesforce Metadata API to build a package.xml file based on components in a Salesforce org specified online. Handy for building a package.xml file for use with ANT Force.com Migration or other IDE tools, or building a destructiveChanges.xml file.

### Others:

* Web Form 
* Email to Case
* Email to database

<hr />

<a name="JavaPgm"></a>

## Java Apex Code

A java program is more work, but much more flexible, operating at the "atomic" level,
particularly with <strong>junction objects</strong>.

Techniques from the <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.218.0.bigobjects.meta/bigobjects/big_object.htm">Big Objects Implementation Guide</a> 
include <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.218.0.bigobjects.meta/bigobjects/async_query_overview.htm">Async</a>
calls of <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.218.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm">Salesforce Object Query Language</a> in the background.


In the <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples_insert_update.htm">Apex Developer Guide: 
Inserting and Updating Records</a>:

Using DML, you can insert new records and commit them to the database. Similarly, you can update field values of existing records.

First make a query to obtain related keys used in the query.

<pre>
try {
    Account acct = new Account(Name='SFDC Account');
    insert acct;
&nbsp;
    // Once the account is inserted, the sObject will be 
    // populated with an ID.
    // Get this ID.
    ID acctID = acct.ID;
&nbsp;
    // Add a contact to this account.
    Contact con = new Contact(
        FirstName='Joe',
        LastName='Smith',
        Phone='415.555.1212',
        AccountId=acctID);
    insert con;
} catch(DmlException e) {
    System.debug('An unexpected error has occurred: ' + e.getMessage());
}
</pre>

The above example inserts three account records and updates an existing account record. First, three Account sObjects are created and added to a list. An insert statement bulk inserts the list of accounts as an argument. Then, the second account record is updated, the billing city is updated, and the update statement is called to persist the change in the database.

References:

* Java developer resources at <a target="_blank" href="http://wiki.developerforce.com/page/Java">http://wiki.developerforce.com/page/Java</a>

* <a target="_blank" href="https://github.com/forcedotcom/CustomMetadataLoader">https://github.com/forcedotcom/CustomMetadataLoader</a> provides an open-source tool to help users bulk create and update custom metadata records in salesforce.com from a CSV file.


<a name="RESTAPI"></a>

## REST API calls externally

The advantage of a REST API interface is scale. 

   * Several instances can update Salesforce at the same time.
   * The interface can update various orgs.
   * The interface can interact with resources outside Salesforce

Internally, Salesforce tables contain artificial keys call "identifiers" which uniquely identify each record. That identifier is created when new data is added. In parent-child relationships, child tables contain the identifier to its parent.
See https://developer.salesforce.com/docs/atlas.en-us.218.0.api_asynch.meta/api_bulk_v2/datafiles_xml_rel_fields.htm?search_text=relationships

Rows created with data external to Salesforce contain an <strong>external_id</strong>.

That external_id is in CSV files created by the export process.

A program that inserts data based on CSV files cannot use the parent identifer exported because as each row is inserted, a new identifier is created.

Thus, CSV files need to be imported in a specific sequence -- parent first, then its children. See <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_foreign_keys.htm">Creating Parent and Child Records in a Single Statement Using Foreign Keys</a> and <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.218.0.api_asynch.meta/api_bulk_v2/datafiles_xml_rel_fields.htm?search_text=relationships">Relationships</a>
It has a section on <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_walkthrough.htm">Async API Code walkthough</a>

<a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.218.0.api_asynch.meta/api_bulk_v2/asynch_api_intro.htm">Bulk API v2</a>

<hr />

In <a target="_blank" href="http://wiki.developerforce.com/page/Introduction_to_the_Force.com_Web_Services_Connector">Web Services Connector</a>, the "Preparing to Integrate Java Apps with Force.com APIs" and "Creating an Enterprise WSDL Application" sections where it walks through setup, prep, and actually gives you some sample code that shows how to query, update, create, and delete records.

<a target="_blank" href="https://developer.salesforce.com/developer-centers/integration-apis/">developer-centers/integration-apis</a> (previously https://developer.force.com/REST)

https://developer.salesforce.com/docs/atlas.en-us.218.0.api.meta/api/sforce_api_calls_create.htm#MixedSaveSection

   <pre>SaveResult[] = connection.create(sObject[] sObjects);</pre>

Use `create()` to add one or more records, such as an Account or Contact record, to an  organization’s information. The create() call is analogous to the INSERT statement in SQL.

When creating objects, consider <a target="_blank" title="Jun 15, 2014" href="https://www.ajaydubedi.com/my-works/salesforce-rest-integration-java-application/"> these rules and guidelines</a>.

* <a target="_blank" href="https://github.com/danieljpeter/salesforceMetadataBackup">https://github.com/danieljpeter/salesforceMetadataBackup</a> gets all salesforce metadata via rest api and apache ant and push to github


## GitHub / Tools

<a target="_blank" href="https://github.com/danieljpeter/HyperBatch">https://github.com/danieljpeter/HyperBatch</a> by MVP DanielJPeter

<a target="_blank" href="https://github.com/fredrikhogstrom/salesforce-test-data-creation">https://github.com/fredrikhogstrom/salesforce-test-data-creation</a> by fredrikhogstrom
provides NodeJs code to create test data for Salesforce unit tests, great for when in an unfamiliar environment. It uses multiple API's to get the data.


## Learning Modules

<a target="_blank" href="http://salesforce.vidyard.com/watch/ARIjWm2qrDkJVJxEhReFug?vyemail=wilsonmar@gmail.com">This 5 part video series</a> walks you through all aspects of data import, from preparing your import files to matching owner and parent record IDs, on both Classic and Lightning.

<a target="_blank" href="http://salesforce.vidyard.com/watch/SFMg1Xa4JxTUPUDPphwRJ5?vyemail=kermitv@gmail.com">This 3-part video series</a> TC: SALESFORCE DATA BACKUP AND DISASTER RECOVERY OPTIONS [SP]

Project: <a target="_blank" href="https://trailhead.salesforce.com/en/projects/import-and-export-with-data-management-tools">
Import and Export with Data Management Tools</a> +300
to use Data Loader and the Data Import Wizard to manage data in Salesforce.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lex_implementation_data_management">Data Management</a> +550 Learn how to import and export data in Salesforce.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/salesforceiq-to-sales-cloud-setup">SalesforceIQ to Sales Cloud Setup</a> +1000 to optimize your new Sales Cloud org for your growing business.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/data_modeling">Data Modeling</a> +1500 to give your data structure with objects, fields, and relationships.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/large-data-volumes">Large Data Volumes</a> +400 Plan for and work with large data volumes within Salesforce.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/data-migration-and-service-cloud-setup">Data Migration and Service Cloud Setup</a> +200 to move your data from Desk.com to Service Cloud and perform your initial setup.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/custom_metadata_types">Custom Metadata Types</a> +1400 Learn how to customize, deploy, package, and upgrade application metadata with ease.

* Account Data Strategies +200
Learn how your sales team can use data to close deals.

* <a target="_blank" href="https://trailhead.salesforce.com/en/modules/lightning_data_service">Lightning Data Service Basics</a> +1100
Learn about force:recordData, its benefits, and how to use it in your components.

## References

* <a target="_blank" href="http://www.arkusinc.com/archive/2013/comparing-data-loaders-for-salesforce">"Comparing Data Loaders for Salesforce"</a> 
(2013) by Roger Mitchell

* <a target="_blank" href="http://www.salesforceben.com/best-data-loader-for-salesforce/">Best Data loader for Salesforce"</a> (2014) by Ben McCarthy

VIDEO: <a target="_blank" title="Oct 17, 2017 [21:47]" href="https://www.youtube.com/watch?v=XaDGT9U2n_w">How to: Use Two Great (and Free) Data Tools - Data Loader and Excel Connector</a>

<a target="_blank" href="https://app.pluralsight.com/player?course=snowforce-2019-session-19&author=snowforce-io&name=fc751bae-fa01-4c94-aa39-0b66f195a591&clip=0&mode=live">SFDX Sandbox Data Loads</a> from SnowForce SLC Apr 24 2019 [48m 14s] by 

Randy Barton ("SFDX Baby Steps - Using sandboxes instead of scratch orgs")


For those who have bought Mike Wheeler's Udemy class:

   * <a target="_blank" href="https://www.udemy.com/salesforce-administrator/learn/v4/t/lecture/4309758?start=0">Data Import Wizard and the Data Loader</a>

   * <a target="_blank" href="https://www.udemy.com/salesforce-administrator/learn/v4/t/lecture/4812698?start=0">Additional Salesforce Data Management Tools</a>


## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
