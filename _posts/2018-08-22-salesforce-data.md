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

## Excel to CSV

Many use Microsoft Excel to create and edit CSV files for import into Salesforce.

There are some tricks to using it.

1. Excel can open CSV files automatically when it's double-clicked on Finder.
1. Excel has no in-built way to specify the format of each field in CSV files. You'll need to save the file in Excel format to manually specify number fields as such.

   PROTIP: The leading zero in Zip codes get stripped automatically.

   Double-quotes within text are problematic because they are also used to define the beginning and end of fields.

## Inbuilt Data Import Wizard

https://help.salesforce.com/apex/HTViewHelpDoc?id=import_which_data_import_tool.htm&language=en
The Data Import Wizard is inbuilt in Salesforce to provide step-by-step guidance to manually specify how to get CSV files into Salesforce standard objects such as Leads, Accounts, Contacts, Solutions and custom objects. 

Based on <a target="_blank" href="http://opfocus.com/5-best-practices-for-salesforce-com-apex-data-loader/
">this article</a>:

1. Create a dedicated Data Loader Salesforce user account that cannot fire triggers, workflows, or other automation.

1. Setup that user whenever you setup automation.

1. Create a checkbox fields on the user record labeled "Authorized to Send Email Alerts". 
   Include this field in your workflow rules, triggers or other automation, similar to option 1.

1. Toggle the flag on/off depending on the type of data load. 

1. Have a program calculate the number of records in the file. Salesforce limits imports of up to <strong>50,000 records</strong> at a time. Use this Linux command:

   <pre>wc -l importfile.csv</pre>

1. Before each upload, run a report to count the number of records, so you have a "before" picture.

1. Do a test run with just a couple records, so it's easier to recover from mistakes.

1. After an upload, run a report to calculate records and identify what has changed.

Trailhead module:

## Inbuilt Apex Data Loader

https://developer.salesforce.com/page/Data_Loader
The standard Salesforce Data Loader</a> is for migrating CSV datasets into Salesforce, up to 5 million records at a time.

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

## Others:

* Web Form 
* Email to Case
* Email to database


## References

* http://www.arkusinc.com/archive/2013/comparing-data-loaders-for-salesforce
   "Comparing Data Loaders for Salesforce" (2013) by Roger Mitchell 

* http://www.salesforceben.com/best-data-loader-for-salesforce/
   "Best Data loader for Salesforce" (2014) by Ben McCarthy


## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
