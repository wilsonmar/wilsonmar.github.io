---
layout: post
title: "Azure Storage (in Microsoft's Azure cloud)"
excerpt: "Files, Disks, Blobs, Tables, Queues, SQL, CosmoDB, Synapse, LRS, ZRS, GRS, RA-GRS"
tags: [Azure, cloud, DevOps, Storage]
date: "2021-04-15"
file: "azure-storage"
image:
# feature: pic data center slice 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622043/8b1f9cce-0584-11e6-8b9f-4b6db5bb6e37.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


Here are the notes I took while studying for <a target="_blank" href="https://wilsonmar.github.io/azure-certifications/">Azure exams</a>.

My contribution to the world here is a deep yet concise presentation, using tables that organize complex information to make them easier to visualize and remember.

### Storage Pricing

   [<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/storage/">Storage Pricing</a> varies by several dimensions:
   
   A. Region

   B. Region's support of Availability Zones - white dots on <a target="_blank" href="https://azure.microsoft.com/en-us/global-infrastructure/regions/">this world map of regions</a>
   
   C. <a href="#Blobs">Type of Blob (Storage Type) [see below]</a> available in the region
   
   D. <a href="#Replication">Replication/Redundancy</a> region pair availability


### CLI to create Storage account

Use my Bash shell script file az-storage-init.sh within <a target="_blank" href="https://github.com/wilsonmar/azure-quickly/readme.txt">github.com/wilsonmar/azure-quickly</a> 


<a name="StorageAccount"></a>

## Create Storage account in Portal UI

Let's dive right in:

1. A subscription is needed if you want to use the CLI.

   <a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=1h55m22s">VIDEO</a>
   Storage accounts are recepticles capable of storing different categories of data. 

   REMEMBER: PROTIP: Storage accounts are under Subscriptions, separate from (not under) any Resource Group.


1. Get to blade <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Storage%2FStorageAccounts">Storage accounts</a> in the main menu or Search at the top of the Portal.

1. Click "+ Create" (a new Storage account). 
1. Create new Resource Group [this is still for training/development]
1. For Name, use up to 24 chracters or numbers
1. Location, 
1. Performance: Click "Standard" [the default unless you want <strong>Performance</strong> for

   * Block blogs
   * File shares
   * Page blogs
   <br /><br />

   See description about <a href="#StorageTypes">Types of Storage and Data (below)</a>

1. See <a href="#Redunancy">Redundancy</a>

1. After creation,
1. In the Access Keys blade of your newly created storage account, click "Show keys"

1. Triple-Click in the key1 Key field to highlight the contents.
1. Copy to Clipboard by Ctrl+C.
1. Switch to a document. Click on where to paste. Ctrl+V to Paste.

1. Triple-Click in the key1 Connection string field to highlight the contents.
1. Copy to Clipboard by Ctrl+V.
1. Switch to a document. Click on where to paste. Ctrl+V to Paste.


<hr />


<a name="StorageTypes"></a>

## Types of Storage and Data

<a target="_blank" href="https://user-images.githubusercontent.com/300046/116793948-079d7a80-aa87-11eb-9e28-04ac6e61057d.png"><img width="1612" height="728" alt="az-storage-types-1612x728" src="https://user-images.githubusercontent.com/300046/116793948-079d7a80-aa87-11eb-9e28-04ac6e61057d.png"></a>
<a target="_blank" href="https://www.youtube.com/watch?v=7z6VduCVYH4&list=PLlI3peB1V-rrzvs2SEgZkg-9DIvS7Dmcw&time=8m34s" title="K21Academy May 8, 2020">*</a>

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Type </th><th> Data </th><th> Service </th></tr>
<tr valign="top"><td> Unstructured: </td><td> Media files (photos, videos, audio files), Office files (Word documents, PowerPoint slides, Excel Spreadsheets), Text files, Log files, Product catalog data
   </td><td><a href="#Blobs">Blobs</a>,<br />
   <a href="#Queues">Queues</a>,<br />
   <a href="#DataLake">Data Lake Store</a>
   </td></tr>

<tr valign="top"><td> Semi-structured: </td><td> XML, JSON, YAML, NoSQL files
   </td><td> <a href="#Files">FileStorage</a> in 
      <a href="#Disks">Disks</a>,<br />
      <a href="#Tables">Tables</a>,<br /> 
      <a href="#CosmoDB">CosmoDB</a>
   </td></tr>

<tr valign="top"><td> Structured: </td><td> traditional SQL databases (containing tables organized, categorized, normalized)
   </td><td> <a href="#Tables">Azure Tables</a>,<br />
      <a href="#SQLDB">Azure SQL Database</a>
   </td></tr>
</table>

How is your data used?

Does your data require transactions (ACID properties)? If yes, use SQL.

Database Activity Monitoring (DAM)

<hr />

## Introductions 

* <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/store-data-in-azure/">DOCS: "Store data in Azure"</a>

* <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/choose-storage-approach-in-azure/">LEARN: "Choose a data storage approach in Azure"</a>




<hr />

<a name="Replication"></a>

## Redundancy (from Replication)

   <a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h28m19s">VIDEO</a>
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy">DOCS</a>:

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="top"><td>
   <p><strong>Replication Strategy</strong></p>
   </td>
   <td style="text-align: center;" width="60">
   <p><strong><a href="#LRS" title="Locally Redundant Storage">LRS</a></strong></p>
   </td>
   <td style="text-align: center;" width="60">
   <p><strong><a href="#ZRS" title="Zone Redundant Storage">ZRS</a></strong></p>
   </td>
   <td style="text-align: center;" width="60">
   <p>x<strong><a href="#GRS" title="Geo-Redundant Storage">GRS</a></strong></p>
   </td>
   <td style="text-align: center;" width="66">
   <p><strong><a href="#RA-GRS" title="Geo-Zone Redundant Storage">RA-GRS</a></strong></p>
   </td>
   </tr>

   <tr valign="top"><td>
   <p>Number of copies of data maintained</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>3</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>3</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>6</p>
   </td>
   <td style="text-align: center;" width="66">
   <p>6</p>
   </td>
   </tr>

   <tr valign="top"><td>
   <p>Data is replicated across multiple availability zones (data centers)</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>&nbsp;</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>Y</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>Y</p>
   </td>
   <td style="text-align: center;" width="66">
   <p>Y</p>
   </td>
   </tr>

   <tr valign="top"><td>
   <p>Data is replicated across multiple regions</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>&nbsp;</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>&nbsp;</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>Y</p>
   </td>
   <td style="text-align: center;" width="66">
   <p>Y</p>
   </td>
   </tr>

   <tr valign="top"><td>
   <p>Data can be read from a secondary location after regional disaster</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>&nbsp;</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>&nbsp;</p>
   </td>
   <td style="text-align: center;" width="60">
   <p>&nbsp;</p>
   </td>
   <td style="text-align: center;" width="66">
   <p style="text-align: center;">Y</p>
   </td>
   </tr>

   <tr valign="top"><td>
   <p>Storage account types</p>
   </td><td style="text-align: center;" width="60">
   GPV1,
   GPV2,
   Blob
   </td><td style="text-align: center;" width="60">
   <strong>Standard,
   GPV2</strong>
   </td><td style="text-align: center;" width="60">
   GPV1,
   GPV2,
   Blob
   </td><td style="text-align: center;" width="66">
   GPV1,
   GPV2,
   Blob
   </td></tr>
   </table>

<a target="_blank" href="https://user-images.githubusercontent.com/300046/120120732-85bf7080-c15c-11eb-9f57-0f840300cbc0.png">
<img width="942" height="592" alt="az-storage-942x592.png" src="https://user-images.githubusercontent.com/300046/120120732-85bf7080-c15c-11eb-9f57-0f840300cbc0.png"></a>


<a name="LRS"></a>

* <strong>"Standard_LRS"</strong> (Locally redundant storage) copies data synchronously three times within a <strong>single physical location</strong> in the primary region. LRS is the least expensive replication option. LRS provides at least 99.999999999% (11 nines) durability of objects over a given year. But is not recommended for applications requiring high availability because disasters at a zone. PROTIP: Use this for dev testing when storage can be recreated easily and speed is not important.

   "Lowest-cost option with basic protection against server rack and drive faiures. Recommended for non-critical scenarios."

* Premium_LRS

* Premium_ZRS

<a name="ZRS"></a>

* <strong>"Standard_ZRS"</strong> ZRS (Zone-redundant storage) copies your data synchronously across <strong>three Azure availability zones</strong> in the primary region (12 nines). REMEMBER: (General Purpose v2 Storage Account Type only). For applications requiring high availability, Microsoft recommends using ZRS in the primary region, and also replicating to a secondary region. 

   "Intermediate option with protection against datacenter-level failures."

<a name="RA-GRS"></a>

* <strong>"Standard_RAGRS"</strong> RA-GRS (Read-Access Geo-Redundant Storage) aka RA-GZRS (Read-Access Geo-Zone-Redundant Storage) provides geo-redundant storage with the additional benefit of read access to the secondary endpoint (16 nines). It's the <strong>default</strong>. If an outage occurs in the primary endpoint, applications configured for read access to the secondary and designed for high availability can continue to read from the secondary endpoint. 

   <em>Not selected in storage account setup dialog</em>

<a name="GRS"></a>

* <strong>"Standard_GRS"</strong> (Geo-redundant storage) copies data asynchronously in <strong>two geographic regions</strong> that are at least hundreds of miles apart (16 nines). Data to second region is asychronous. If the primary region suffers an outage, the secondary region serves as a redundant source for data, Microsoft controlled, with RPO of less than 15 minutes.

   "Intermediate option with failover capabilities in a secondary region. Recommended for backup scenarios"

<a name="GZRS"></a>

* <strong>"Standard_GZRS</strong> (geo-zone-redundant storage) copies data asynchronously in <strong>three geographic regions</strong>

   "Optimal data protection solution that includes the offerings of both GRS and ZRS. Recommended for critical data scenarios."

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-disaster-recovery-guidance?toc=/azure/storage/blobs/toc.json">Microsoft recommends RA-GZRS for maximum availability and durability for your applications of 99.9% or 99.0% when using cool.</a>



### Managed Disk Account Type

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=4h52m43s">VIDEO</a>

You can attach and detach Azure disks to a different VM. 
They will maintain their data but the data are only usable when a disk is attached to a VM.

* <strong>Ultra SSDs</strong> provide the best throughput and I/O operations per second (IOPS) performance characteristics but at the highest prices. Use for mission-critical I/O intense applications such as running databases.

* <strong>Premium_LRS</strong> (SSDs) are the next best performing and are well-suited to production workloads.

* <strong>Standard SSDs</strong> are the least expensive SSD option, suitable for production workloads with low I/O performance requirements such as web servers and lightly used applications.

* <strong>Standard HDDs</strong> use older magnetic spinning disk technology and are therefore the least expensive option but also provide the lowest performance. Use them for backups and infrequently accessed applications.

* Standard_LRS = Locally Redundant Storage
* Standard_GRS = Geographically Redundant Storage
* Standard_RAGRS = Read Access Geographically Redundant Storage



<hr />
1. Enable blob public access: CAUTION: default is enabled!



## Upload a blob

   1. Go to a storage account.

   1. In the Data service section, select the Containers link.

   1. Click "+ Container" to create a new storage container with the following settings:

        Name: images

        Public access level: "Blob (anonymous read access for blobs only)"

   1. Click "Create".
   1. Click the storage container you created ("images").
   1. Click "Upload".
   1. Click the file icon and select an image file. If you had downloaded or cloned to your laptop the <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/tree/master/Allfiles/Labs/01/Starter/Images">repo for Microsoft's AZ-204 class</a>, navigate to select the "grilledcheese.jpg" file.

   1. Enable "Overwrite if files already exist option."
   1. Click "Upload"


### Storage Domain names

Each storage account provides a unique namespace accessible over HTTPS.

<table border="1" cellpadding="4" cellspacing="0">
<tr align="left"><th> Service </th><th align="right"> URL (singular)</th></tr>
<tr valign="top"><td> Container service</a> 
   </td><td align="right"> <tt>https://<em>my_account</em>.<strong>blob</strong>.core.windows.net</tt>
   </td></tr>
<tr valign="top"><td> <a href="#Blobs">Blobs</a> 
   </td><td align="right"> <tt>https://<em>my_account</em>.<strong>blob</strong>.core.windows.net</tt>
   </td></tr>
<tr valign="top"><td> <a href="#Files">Files</a> 
   </td><td align="right"> <tt>https://<em>my_account</em>.<strong>file</strong>.core.windows.net</tt>
   </td></tr>
<tr valign="top"><td> <a href="#Queues">Queues</a> 
   </td><td align="right"> <tt>https://<em>my_account</em>.<strong>queue</strong>.core.windows.net</tt>
   </td></tr>
<tr valign="top"><td> <a name="Azure_Table_Service">Azure Tables</a> 
   </td><td align="right"> <tt>https://<em>my_account</em>.<strong>table</strong>.core.windows.net</tt>
   </td></tr>
</table>

https://<em>Storage_Acct</em><strong>/blob.core.windows.net/</strong><em>Container_name</em>/<em>filex.png</em>

PROTIP: Add a unique suffix to version each file so HTML pages know to retrieve the new file name.

https://<em>Storage_Acct</em><strong>/file.core.windows.net/</strong><em>Fileshare_name</em>/<em>dir</em>/<em>filex.txt</em>

Two ways to map custom domain name:

  * Create CNAME record pointing to storage account. This results in brief downtime while domain is registered with Azure.

  * To eliminate downtime: Prepend <strong>asverify</strong> to CNAME record for Azure to recognize, then modify the DNS record.

<hr />

<a name="Files"></a>

## Azure Files (File Shares)

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=3h5m4s">VIDEO</a>:
Azure file Shares enable sharing of files across Windows, macOS, and Linux machines because it uses the industry-standard Server Message Block (SMB) file transfer protocol
or REST API.

https://github.com/Azure-Samples/azure-files-samples

[<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/storage/files/">Pricing</a>]

General-purpose storage stores files, tables, queues:

   Performance tiers: Standard = Magnetic disks (HDD).
   
   Premium = SSD (Solid State Disks) faster, for 99.99% SLA outside Availability Set.
   PROTIP: Premium SSD disks are paid a <strong>fixed maximum cost each month</strong>, regardless of usage. That's in addition to any Egress charges.

   <a target="_blank" href="https://www.youtube.com/watch?v=3qCTtvLgOPc" title="May 17, 2021">VIDEO</a>:

   <table border="1" cellpadding="4" cellspacing="0">
   <tr align="left"><th> Type </th><th> Standard<br />HHD </th><th> Standard<br />SSD </th><th> Premium<br />SSD </th><th> Ultra<br />SSD </th></tr>
   <tr valign="top" align="right"><td> Size 
      </td><td> 250 </td><td> 250 </td><td> 250 </td><td> 250 
      </td></tr>
   <tr valign="top" align="right"><td> Size TiB
      </td><td> 32  </td><td> 32 </td><td> 32 </td><td> 64 
      </td></tr>
   <tr valign="top" align="right"><td>IOPS Limit expected 
      </td><td> 2,000 </td><td> 6,000 </td><td> 20,000<br />Burst 30,000 </td><td> 160,000
      </td></tr>
   <tr valign="top" align="right"><td>Thruput limit MB/s 
      </td><td>  60 </td><td> ? </td><td> 125 </td><td> -
      </td></tr>
   <tr valign="top" align="right"><td>Bandwidth MBps
      </td><td>  500 </td><td> 750 </td><td> 900<br />Burst 1,000</td><td> 2,000
      </td></tr>
   <tr valign="top" align="right"><td>Single Instance SLA
      </td><td>  95% </td><td> 99.9% </td><td> 99.9%</td><td> 99.9%
         </td></tr>
<tr valign="top" align="left"><td>Usage:
      </td><td> test & dev, backups </td><td> Big-data entry-level web servers </td><td> prod. databases, container volumes</td><td> SAN, Tier-1 workloads (SAP HANA)
      </td></tr>
   </table>

   * General-purpose v1 can contain blobs (more expensive than v2)
   * General-purpose v2 supports Access tiers: hot, cool, archive with Lifecycle Policies; upgrade from blob storage???
   <br /><br />


<a target="_blank" href="https://cloudacademy.com/lab/understanding-core-azure-storage-products/reviewing-file-storage-in-azure/?context_id=524&context_resource=lp">
LAB: Reviewing File Storage in Azure:</a>

1. In the Azure Portal navigation trail, click the storage account name to return to the storage account blade:

   "calstor:

2. In the left navigation menu click "File shares" under the File service heading:

   The table includes a file share named lab-share created for you by the Cloud Academy Lab environment. Shares have a quota to limit the amount of storage and, as a consequence, the maximum cost of storage for the share. Shares can store up to 5 tebibytes (TiB) or 100 TiB depending on the region. For standard storage accounts, you only pay for the storage you use and not the quota you set. However, for premium storage accounts you pay for the quota since the storage is provisioned completely to provide you guaranteed performance levels. 

3. Click on lab-share to view the share contents.

   Note: From within the Portal you can perform basic operations such as adding folders and uploading files. However, you would usually interact with the share by adding it to your computer's file system. 

4. Click Connect to view instructions for how to mount the share in different operating systems:

   There are instructions available for Windows, macOS, and Linux in the blade:

   Once you connect to the file share you can use it the same way you would use your local hard drive and multiple users can share it at the same time. You don't need to connect to the share for this Lab.


1. On the dashboard of the Azure Portal, click the upper-left accordion icon alt to open the portal menu and click  All resources:

This view presents all the resources in the Lab's resource group.

??? Screen Shot 2021-03-04 at 7.07.08 PM.png


These are resources that are created by the Cloud Academy Lab environment for you to use throughout this Lab.

 
2. In the resources table, <strong>click on the Storage account</strong> beginning with "calstor:

???

Note: There is a second storage account that stores diagnostic data for the Lab's virtual machine that you should not use for this Lab Step.

+++ Essentials:

* Containers - Scalable, cost-effective storage for unstructured data
* File shares - Serverless SMB and NFS file shares
* Tables - Tabular data storage
* Queues - Effectively scale apps according to traffic
 

3. On the Overview blade, notice the Properties specific to storage accounts:

* Status indicates that the Primary storage location is Available. In the event of an outage in Azure, you may see a different value here. This storage account has no secondary storage location, but you can create storage accounts with primary and secondary storage locations. The Replication property of a storage account determines this.

* Performance can be standard or premium. When you need guaranteed latency you should use premium storage. Premium storage has much higher storage costs because they use solid-state drives (SSDs) whereas standard storage uses magnetic spinning hard disk drives (HDDs).

* Access tier optimizes the storage and cost based on how frequently data is accessed. The Hot tier is for frequently accessed data and carries the highest cost for storage but the lowest cost for accessing the data. The cool and archive tiers reduce are suited for less frequently accessed data with archive offering the lowest cost for storage but the highest cost for accessing data. The archive tier actually stores the data offline and the data needs to be "rehydrated" to the hot or cool storage before it can be read. Cool and archive tiers also include a penalty if you delete the blob within 30 days and 180 days, respectively, of when they are first moved into these tiers.

* <a href="#Replication">Replication</a> sets the durability and availability of the storage. 

* Account kind describes if the storage account is general-purpose or specialized. General-purpose accounts allow storage of blobs, tables, files, and queues whereas specialized kinds only allow one type such as only blob storage. There are different pricing models for each account kind so a specialized kind may reduce your costs. StorageV2 is the recommended default.
 

4. In the menu to the left, click Containers under the Blob service heading:

REMEMBER: Blobs are stored inside of containers.
 

5. Click + Container in the command bar and set the following values before clicking Create:

Name: lab-container
Public access level: Container (This allows anonymous access to the container and the blobs within it. It is also possible to allow no anonymous access or only anonymous access to blobs.)
alt

Within a few seconds the container appears in the table:

6. Click on lab-container to view its overview.

There are no blobs in the container at this point. You will save a sample image and upload it to the container as a blob.

7. RIght-click the small sample image below and save the image to your computer:

Take note of where the image is saved so you can browse to it later. 


8. In the Azure Portal, click Upload:
 

9. In the Upload blob blade that appears, expand the Advanced section to view more options:

   Notice you can configure the Blob type, Access tier, and Upload to folder to organize your container. Although a storage account also has an access tier, it only sets the default value for each blob. You can override the default value for each blob and this is the only possible to set the archive access tier since it cannot be set at the storage account level.

10. Set the following values leaving the rest at their default values:

    Files: Click the folder icon alt and browse to the ca-square.png image you downloaded earlier.
    Upload to folder: images
 
11. Click Upload.

    Once the upload is complete a success notification appears in the blade:

12. Close the Upload blob blade and click the images folder that was created by the upload:
 
    The ca-square.png blob is displayed:


13. Click the ellipsis (...) at the end of the ca-square.png row to view all the options available for the blob:

    Amongst the options, you can Download the blob, and Change tier to change the blob's access tier, 


File Sync?


<a name="CDN"></a>

### CDN for Files

PROTIP: Example of CDN endpoint URL:<br />
https://<em>Container_name</em><strong>/azureedge.net/imgs/<em>filex.png</em>

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h52m45s">VIDEO</a>

1. New Resource: CDN

   Content Delivery Networks are used by websites and mobile apps, IoT to reduce load times, save bandwidth, speed responsiveness.

1. Create <strong>CDN Profiles</strong> to provide a logical container for endpoints.

1. Pricing tier options: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cdn/cdn-features">"Compare Azure CDN product features"</a>
   * Standard Microsoft
   * Standard Verizon
   * Standard Akamai
   * Premium Verizon for rules engine, Token authentication, alerts, compression (deflate, bzip2, brotli)

   <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cdn/">Prices</a>

Acceleration Data Transfers, also called Dynamic Site Acceleration (DSA), accelerates web content that is not cacheable.


<hr />

<a name="Blobs"></a>

## Blob service storage types

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h1m51s">VIDEO</a>
<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h47m34s">GUI</a>

Blob data stands for <strong>Binary Large OBject</strong> data. 

Blobs store <strong>unstructured</strong> data (images, videos, documents, zip files, etc.).

Types of blobs in Azure blob storage:

<table border="1" cellpadding="4" cellspacing="0">
<tr  align="right"><th align="left"> Blob Type 
   </th><th> Each Block
   </th><th> Max. size
   </th><th> Max. # Blocks
   </th></tr> 
<tr valign="top"><td> <a href="#BlockBlobs">Block Blobs</a>
   </td><td align="right"> <= 1000 MB
   </td><td align="right"> 4.7 TB 
   </td><td align="right"> 50,000
   </td></tr>
<tr valign="top"><td> <a href="#PageBlobs">Page Blobs</a>
   </td><td align="right"> 512 byte in 4 MB
   </td><td align="right"> 8 TB 
   </td><td align="right"> <em>N/A</em>
   </td></tr>
<tr valign="top"><td> <a href="#AppendBlobs">Append Blobs</a>
   </td><td align="right"> 4 MB
   </td><td align="right"> 195 TB 
   </td><td align="right"> <em>N/A</em>
   </td></tr>
</table>


<a name="BlockBlobs"></a>

* <strong>Block blobs</strong> are divided into blocks of up to 100 MB each x 50,000 so up to 4.75 TB (terabytes) can be stored per block blob. [<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/storage/blobs/">Pricing</a>]

   Thus, block blobs are optimized for streaming and storing cloud objects.

   REMEMBER: Block blob storage has its own Storage Account Type for LRS replication only and Premium performance tier only.

<a name="PageBlobs"></a>

* <strong>Page blobs</strong> are 512-byte pages optimized for <strong>random read/write</strong> operations. Page blobs are collections of individual pages of up to <strong>4MB</strong> each. The name "page" comes from operating systems organizing memory into pages of relatively small sizes that can be easily managed -- used for storing virtual machine disks in Azure. [<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/storage/page-blobs/">Pricing</a>]


<a name="AppendBlobs"></a>

* <strong>Append blobs</strong> are optimized for appending new <strong>blocks</strong> at the end of the blob -- useful for storing log data (and audit files) where new lines are added at the end and the data never needs to be modified after it is written.


<a name="BlobAccessTiers"></a>

### Blob Access Tiers

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h59m48s">VIDEO</a>

* Hot - frequently accessed
* Cool - less frequently accessed, stored for at least 30 days
* Archive - Rarely accessed, stored for at least 180 days. Requires "rehydration" to be accessible.

"at least" means early deletion charge applies.

NOTE: Compare against Backup tiers:


### Blob Lifecycle Management

This is for transient temporary files, NOT for images on websites.

Rules to containers or subset of blobs (using prefixes as filters).

Examples: 30 days after blog is created, take a snapshot.

__ Days after last modification:
<table border="1" cellpadding="4" cellspacing="0">
<tr><th align="center"> 30 days
   </th><th> 180 days
   </th><th> 365 days
   </th></tr>

<tr valign="top" align="center"><td> To cool storage 
   </td><td> To archive storage
   </td><td> Delete blob
   </td></tr>

</table>

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-rehydration?tabs=azure-portal">DOCS</a>:
mechanism for rehydraring from cold/archive



## Authorization

Every storage request must be authorized.

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/storage-introduction">DOCS</a>:

Auth. Methods by Storage Type:

<table border="1" cellpadding="4" cellspacing="0">
<tr align="center"><th align="left">Storage Type
   </th><th>Shared Access signatures
   </th><th>AAD
   </th><th>AD (preview)
   </th><th>Anon. public read
   </th></tr>

<tr valign="top" align="center"><td align="left"><a href="#Blobs">Blobs</a>
   </td><td> Supported
   </td><td> Supported
   </td><td>-
   </td><td> Supported
   </td></tr>

<tr valign="top" align="center"><td align="left">SMB <a href="#Files">Files</a>
   </td><td> -
   </td><td> Supported with AAD Domain Svcs
   </td><td> Supported, creds sync'd to AAD
   </td><td>-
   </td></tr>

<tr valign="top" align="center"><td align="left">REST <a href="#Files">Files</a>
   </td><td> Supported
   </td><td>- 
   </td><td>-
   </td><td>-
   </td></tr>

</table>

PROTIP: All support Storage Account Shared (SAS) Keys.


<a name="SAS"></a>

## SAS (Shared Account Signature)

https://docs.microsoft.com/en-us/rest/api/storageservices/define-stored-access-policy

   <a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h12m38s">VIDEO</a>
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?WT.mc_id=thomasmaurer-blog-thmaure">DOCS</a>:
   Generate a SAS to grant other clients access to storage objects without exposing your own account key. CAUTION: Whoever has the key can use it to retrieve the file without user authentication.

   For service level or account level.

   Define granular control over type of access granted:

   * Validity interval Start and Expiry Time (in UTC/Local Time)
   * Permissions: Read, Write, Delete, List, Add, Create, Update, Process
   * Service Type: Blob, File, Share, Queque, Table
   * Resource Type: Service, Container, Object
   * IP addresses
   * Protocol: HTTPS/HTTP
   <br /><br />

   PowerShell commands are by specific Service Type:
   * New-AzStorageAccountSASToken
   * New-AzStorageContainerSASToken
   PowerShell commands are by specific Service Type:
   * New-AzStorageBlobSASToken
   * ...


## Secure Storage 

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=1h56m11s">VIDEO</a>:s
<a target="_blank" href="https://www.youtube.com/watch?v=UzTtastcBsk">VIDEO</a>:
1. Select storage account.
1. Menu "Firwalls and virtual networks".
1. Select "Selected networks" (rather than All Networks, the default). This is for all protocols.
1. Add a Firewall to (LIMIT: up to 100) client IP address.

Azure Storage Emulator works on local storage.

Attach to external storage.

Connect to a Cosmos DB account.



<hr />

### Storage Account Templates

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h9m34s">VIDEO</a>

https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=template

For PowerShell, CLI, GUI



<hr />


<a name="Queues"></a>

## Queues

[<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/storage/queues/">Pricing</a>]

The product name "Azure Queue Storage" was change from "Azure Storage Queues".


<hr />

<a name="DiskStorage"></a>

## Disk Storage in Azure

<a target="_blank" href="https://cloudacademy.com/lab/understanding-core-azure-storage-products/reviewing-disk-storage-azure/?context_id=524&context_resource=lp">VIDEO</a>

Azure virtual machines (VMs) use Azure disks as their attached disk storage. Azure disks are built on top of page blobs optimized for random access. When you create Azure disks you can choose to manage the storage account yourself or to use managed disks where Azure manages the storage account for you. 



### LAB: inspect a VM with two disks attached

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=4h52m43s">VIDEO</a>

<pre>$dataDiskName = "mynewDataDisk"
$location = "WestUS"
$myRescGroup = "TestGroup"
$diskConfig = New-AzDiskConfig -SkuName Premium_LRS -Location = $location `
   -CreateOption Empty -DiskSizeGB -200
$dataDisk1 = New-AzDisk -DiskName $dataDiskName -Disk $diskConfig -ResourceGroupName $myRescGroup
$vm = Get-AzVM -Name WinSrv19-1 -ResourceGroupName $myRescGroup
$vm = Add-AzVMDataDisk -VM $vm -Name $dataDiskName -CreateOption Attach -ManageDiskID
</pre>

1. Click the upper-left accordion icon alt to open the portal menu and click Virtual machines:
2. Click ca-lab-vm to view the overview of the VM created by the Cloud Academy Lab environment.

   The VM is an ordinary Azure VM that is running the Windows Server operating system. You will focus on the VM's disks. 

3. In the left menu bar, click Disks under the Settings heading:
4. Observe the Azure disks that are attached to the VM:

   Each VM has one OS disk which contains the operating system and is used to boot the VM. The OS disk is a Standard SSD in this case. In addition to the OS disk, VMs can have zero or more Data disks attached. This VM has one data disk that is a 4 GiB Standard HDD. 

   PROTIP: All disks are encrypted at rest by default. If someone were to steal a physical disk from an Azure data center the physical disk would be encrypted and unusable. This is true for all data in Azure storage accounts. 

   RECOMMENDED: [_] For production workloads, also encrypt Azure disks at the operating system level. This is referred to as <strong>Azure Disk Encryption (ADE)</strong> which protects against Azure disks being copied and attached to another Azure VM.


5. Click the name of the OS disk to view its overview.

   You can see the disk is Attached to the lab VM (Managed by: ca-lab-vm) and the Operating system is Windows.

   There are also visualizations showing how heavily utilized the disk is:

   ### Disk level metrics:
   * Disk Bytes/sec (Throughput) read and write
   * Disk Operations/sec (IOPS)  read and write
   * Disk QD (Queue Depth)
   <br /><br />

   PROTIP: If you noticed a disk that reached the max throughput or IOPS you should consider upgrading to a higher performance disk type.

6. Observe the following screenshot that shows the Windows Explorer view of available disks from inside the Windows VM (Note: You don't need to access the VM in this step. The following screenshot is here just as a reference and to make a point): 

   Azure automatically provides a Temporary Storage disk that will be lost forever once the VM is deleted, while Azure disks can be attached and detached from VMs and persist their data. The data disk the VM has attached to it is not automatically formatted and does not appear in the list. Each operating system provides tools to format the data disks, but that is outside of the scope of this Lab.



-----------------------------------

The Azure Portal provides a lot of useful information about storage if you know where to look. This Lab Step illustrates how you can use the Portal to better understand topics, with a focus on storage accounts in this Lab Step.

1. Enter storage account in the portal's search bar and click on the Storage accounts service:

2. Click + Add to start creating a storage account:

3. In the Create storage account blade you can see all the available options for configuring storage accounts:

   There are also useful descriptions in the text as well as when you hover your mouse over an infotip icon alt :


With Azure Files services, can use Azure File Sync agent which uses a Windows server cluster Stored Sync server.


<hr />

## Backup and Recovery

Saving data in another location is fundamental to recovery from failure.
Backups are taken for recovery from accidental data loss, data corruption, or ransomware attacks. It addresses your company's Business continuity and disaster recovery (BCDR) plan.

   <a name="Recovery_Services_Vault"></a>

   ### Recovery Services Vault (RSV)

1. G+/ service <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.RecoveryServices%2Fvaults">Recovery Services Vault</a> (RSV) to create a place to hold snapshot files.

   PROTIP: Name the location/region because one RSV is needed for each region/location.

1. Click "+ Create" or the blue "Create recovery services vault" button.

1. For Resource group, don't select "cloud-shell-storage".

   PROTIP: <a target="_blank" href="https://techcommunity.microsoft.com/t5/core-infrastructure-and-security/use-a-custom-automation-account-for-azure-to-azure-site-recovery/ba-p/1634164#:~:text=Good%20governance%20rules%20in%20Azure%20dictate%20that%20wherever,alphanumeric%20characters%20and%20then%20appends%20the%20string%20%E2%80%9C-asr-automationaccount%E2%80%9D.">BLOG: Consider ASR auto-naming rules</a> and <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming">other naming conventions</a>.

   <tt>myvault-westus</tt>

1. Add Tags according to your organization's needs.

   NOTE: Default Backup configuration for Storage Replication Type is set to Geo-redundant (GRS). Default Security settings for Soft Delete is enabled. After creating vault, it is highly recommended that you review default vault properties before protecting items.
   See <a target="_blank" href="https://docs.microsoft.com/en-us/azure/backup/backup-create-rs-vault#modifying-default-settings">DOCS</a>.


   PROTIP: The Recovery Services Vault has encryption enabled via Server-Side Encryption (SSE), so the backup is encrypted at rest and in transit. When data is secured via <strong>Azure Disk Encryption</strong>, you are given the Key Encryption Key (KEK) and BitLocker Encryption Key (BEK) stored in an Azure Key Vault, and also backed up via Azure Backup. 

   During data recovery, keys are restored from Key Vault.


<a name="ABS"></a>

### Azure Backup Service (ABS)

<img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-patterns/azure-backup.svg">
<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=3h26m10s">VIDEO</a>
<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/protect-virtual-machines-with-azure-backup/">LEARN</a>:
<a target="_blank" href="https://portal.cloudskills.io/products/azure-administrator-az-104-exam-prep-course/categories/4743683/posts/8995676" title="AZ-104">TUTORIAL</a>:


1. Backups can be initiated on the Portal GUI RSV blade or the VM blade.


Microsoft Azure Backup Service combines to provide a seamless backup and recovery experience to a local disk, or to the cloud:
   * the familiar Windows Server Backup utility in Windows Server, 
   * the Data Protection Manager component in System Center, and 
   * Windows Server Essentials
   <br /><br />

<a target="_blank" href="https://www.skillpipe.com/?lang=en-GB#/reader/urn:uuid:e36b495e-ef2a-5560-893e-f22ebe2ac3e6@2021-03-19T02:45:22Z/content">*</a>
<a target="_blank" href="https://user-images.githubusercontent.com/300046/114915742-30fcac00-9de1-11eb-9c0e-ce89b6a36e32.png"><img width="815" alt="az-backup-1630x644" src="https://user-images.githubusercontent.com/300046/114915742-30fcac00-9de1-11eb-9c0e-ce89b6a36e32.png">

PROTIP: Azure creates every VM with an extension to do backups.

1. When you configure Backup, it communicates with the <strong>Azure Backup Service</strong> and associates itself to a policy. <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/protect-virtual-machines-with-azure-backup/4-exercise-back-up-azure-virtual-machine">STEPS</a>

    It identifies itself to the Azure Backup Service as a VM, and that the service should back it up accordingly.

2. When it’s time for backup per the backup policy, Microsoft sends a command to the Azure Backup extension and then Azure Backup orchestrates a VSS snapshot.

   NOTE: Cannot back up Oracle workloads.

The backup policy supports two access tiers - snapshot tier and the vault tier:

   For "Instant Restore": a <strong>snapshot tier</strong> is a point-in-time backup of all disks on the virtual machine. Snapshots are stored on your local VM storage as an "instant recovery snapshot" so you can quickly recover, for a maximum period of <strong>five days</strong>.

   * On Windows the VMSnapshot extension works with <strong>Volume Shadow Copy Service (VSS)</strong> to take a copy of the data on disk and in memory.
   * On Linux, the VMSnapshotLinux extension takes a snapshot that is a copy of the disk. You need to write custom pre or post scripts per app to capture the application state.
   <br /><br />

   For recovery point type <strong>"snapshot and vault"</strong>, <strong>Vault tier</strong> snapshots are additionally transferred to a vault for additional security and longer retention. 

4. In the background, the snapshot is compared to a snapshot of a previous recovery point and <strong>only incremental blocks are moved</strong> via HTTPs into the Recovery Services vault. (Efficient use of bandwidth!)

PowerShell:

   <pre>New-AzResourceGroup -Name $myRescName -Location $myLocation
   </pre>

New-AzResourceServicesVault -Name $myVaultName `
   -ResourceGroupName $myRescGroup `
   -Location $myLocation

az backup vault create --name $myVaultName \
   -resourcegroup "$myRescGroup" \
   -location "$myLocation"


Alternately:

1. From Home, Create a resource. 
1. In New, "Backup and Site Recovery".
   Note it's for Azure Files, Windows Servers, and VMs.
1. Create 
1. Subscription, Resource Group, 
1. Tags
1. Download a template for automation.

   See https://azure.microsoft.com/en-us/pricing/details/backup/

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=5h17m43s">VIDEO</a>
Backup of Virtual Machines:


b) At an indiviaul machine: Create

From a machine:

When backup up a VM, it's encrypted at rest using Storage Service Encryption (SSE)
Azure Disk Encryption. See https://docs.microsoft.com/azure/backup/backup-azure-vms-encryption

DPM (Data Protection Manager)


<hr />

<a name="Site_Recovery"></a>

## VM Site Recovery

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=5h29m46s">VIDEO</a>
The VM Site Recovery product, aka DRaaS (Disaster Recovery as a Service)
for BCDR (Business Continuity and Recovery) includes replication, failover, and recovery.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/116794094-d2ddf300-aa87-11eb-9aae-68bfc1408514.png">
<img width="1830" height="1294" alt="az-site-recovery-1830x1294" src="https://user-images.githubusercontent.com/300046/116794094-d2ddf300-aa87-11eb-9aae-68bfc1408514.png"></a>
<a target="_blank" href="https://www.youtube.com/watch?v=7z6VduCVYH4&list=PLlI3peB1V-rrzvs2SEgZkg-9DIvS7Dmcw&time=8m45s">*</a>

Site-recovery replicates the data in almost <strong>real time</strong> for failover.

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=5h26m53s">VIDEO</a>
VM Restore <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/protect-virtual-machines-with-azure-backup/6-exercise-restore-virtual-machine-data">STEPS</a>


<hr />

<a name="MethodsToStore"></a>

## Methods to Store Blobs

Several methods are available to upload data to blob storage:

* AzCopy is an easy-to-use command-line tool for Windows and Linux that copies data to and from Blob storage, across containers, or across storage accounts.

* The Azure Storage Data Movement library is a .NET library for moving data between Azure Storage services. The AzCopy utility is built with the Data Movement library.

* <strong>Azure Data Factory</strong> supports copying data to and from Blob storage by using the account key, shared access signature, service principal, or managed identities for Azure resources authentications.

* <strong>Blobfuse</strong> is a virtual file system driver for Azure Blob storage. You can use blobfuse to access your existing block blob data in your Storage account through the Linux file system.

* <a href="#DataBox">Azure Data Box Disk</a> is a service for transferring on-premises data to Blob storage when large datasets or network constraints make uploading data over the wire unrealistic. You can use Azure Data Box Disk to request solid-state disks (SSDs) from Microsoft. You can then copy your data to those disks and ship them back to Microsoft to be uploaded into Blob storage.

* <strong>The Azure Import/Export service</strong> provides a way to export large amounts of data from your storage account to hard drives that you provide and that Microsoft then ships back to you with your data.


<a name="AZCopy"></a>

### AZCopy and Microsoft Storage Explorer

<a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/what-is-azure-cli?WT.mc_id=thomasmaurer-blog-thmaure">DOCS</a>:
<a target="_blank" href="https://www.thomasmaurer.ch/2019/07/how-to-install-azure-cli-on-windows-one-liner/">STEPS</a>:
On a Mac:

1. In a Browser at <a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10">AZCopy webpage</a>, click to download for macOS.
1. In Terminal: Unzip to folder such as "azcopy_darwin_amd64_10.9.0".
1. QUESTION: How to determine whether azcopy contains vulnerabilities?
1. Move file "azcopy" to folder "/usr/local/bin" so that it is in the PATH to be called from any folder.

   <pre><strong>mv azcopy /usr/local/bin/</strong></pre>

1. Move the folder to Trash.
1. Choose Apple menu  > System Preferences, click Security & Privacy, then click General tab.
1. Click the lock icon to unlock it, then enter an administrator name and password.
1. Click "Allow Anyway" to message: If "azcopy" was blocked from use because it is not from an identified developer.
1. Click the lock icon.

1. Verify (for output azcopy version 10.9.0):

   <pre><strong>azcopy --version</strong></pre>

1. For all but File storage (which uses SAS token):

   <pre><strong>azcopy login</strong></pre>

1. Copy 

NOTE: <a target="_blank" href="https://azure.microsoft.com/features/storage-explorer/">
Microsoft Storage Explorer</a> makes use of 
<a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10">AZCopy</a> to perform data transfers.


## Microsoft Azure Storage Explorer

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/vs-azure-tools-storage-manage-with-storage-explorer?WT.mc_id=thomasmaurer-blog-thmaure">Get started</a>:
Azure Storage Explorer for data across subscriptions. It is a free GUI tool to manage Azure cloud storage resources on Windows, macOS, or Linux laptops

1. PROTIP: To Install, rather than download from<br />
   https://azure.microsoft.com/en-us/features/storage-explorer/

   Alternately, use Homebrew:

   <pre><strong>brew install --cask microsoft-azure-storage-explorer
   </strong></pre>

   <pre>==> Downloading https://github.com/microsoft/AzureStorageExplorer/releases/download/v1.18.1/MaC_StorageExplorer.zip
==> Downloading from https://github-releases.githubusercontent.com/124597291/802cc880-7cdc-11eb-934f-f5189780785b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F2
######################################################################## 100.0%
==> Installing Cask microsoft-azure-storage-explorer
==> Moving App 'Microsoft Azure Storage Explorer.app' to '/Applications/Microsoft Azure Storage Explorer.app'
🍺  microsoft-azure-storage-explorer was successfully installed!
   </pre>

1. On a Mac, pinch 4 fingers together or use Finder to navigat to the Applications folder.

1. Using Homebrew means you can:

   <pre><strong>brew upgrade --cask microsoft-azure-storage-explorer
   </strong></pre>

1. Create Blobs and Blob containers

1. <a href="#SAS">Create SAS keys</a>.

1. Run AZCopy CLI on Windows, for example:

   <pre>azcopy copy 'D:\data' 'https://mystore1.blog.core.windows.net/blobdata' --recursive
   </pre>

   <tt>--recursive</tt> reaches inside sub-folders for more files.


### Storage Access Keys

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h17m15s">VIDEO</a>

For each storage account two (primary and secondary) keys (aka connection strings) are used to authenticate app requests with unlimited access. Two keys are created for <strong>key rolling</storg> so one key still runs when the other is being regenerated.

   <pre><strong>az storage account keys renew
   </strong></pre>


## Azure Storage Export/Import

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription">DOCS: Move resource group and subscription</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-data-to-blobs?WT.mc_id=thomasmaurer-blog-thmaure">Import</a>,
<a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-data-from-blobs?WT.mc_id=thomasmaurer-blog-thmaure">Export</a>,

1. G/ of "import/export jobs".
1. Click blue "Create import/export job".
1. Basics: Resource group, Name, Type (Import or Export).

1. To prepare drives Azure Jobs write/read on Windows only:

   <pre>.\WAImportExport.exe PrepImport 
   /j:&LT;JournalFile>
   /id:&LT;SessionId>
   [/logdir:&LT;LogDirectory>]
   [/sk:&LT;StorageAccountKey>]
   [/InitialDriveSet:&LT;driveset.csv>]
   /DataSet:&LT;dataset.csv>
   </pre>

   Includes BitLocker encryption/decryption

1. Create import/export Azure Job
   -Resource group -Location

   Upload journal (.jrn*) files

   REMEMBER: Type:
   * Import from Azure Blobstorage and Azure Files
   * Export to Azure Blobstorage only
   <br /><br />

## Upload media files to Blog Storage

<a target="_blank" href="https://www.youtube.com/watch?v=enhJfb_6KYU">VIDEO</a>:
<a target="_blank" href="https://www.youtube.com/watch?v=z-trZhXOawg">by FranklyAI</a>

1. Install:

   <pre><strong>pip install pyyaml</strong></pre>

   <pre><strong>pip install azure-storage-blob</strong></pre>

1. Edit az-upload-blob.py


<a name="DataBox"></a>

## Microsoft Data Box Disk

When large datasets or network constraints make uploading <strong>blob data</strong> over the wire unrealistic:

1. In the Azure portal, <a target="_blank" href="https://docs.microsoft.com/en-us/azure/databox/data-box-disk-overview">Microsoft Data Box Disk</a> order 40 TB (usable ~ 35 TB) in up to five 8-TB solid-state disks (SSDs) shipped to your shipping address, for your data. Designate the destination Azure Storage account targeted. 

2. If disks are available, Azure encrypts, prepares, and ships the disks with a shipment tracking ID.
   Disks are mailed in a UPS Express Box.

3. When empty disks are delivered, unpacked, and connected, unlock the disks.

4. Use a client to drag and drop the data on the disks, using standard NAS protocols (SMB/CIFs and NFS) with AES encryption. Data transfer rates are up to <strong>430 MBps</strong>, depending on file size.  Non-Azure service providers can load a Data Box:

   * <a target="_blank" href="http://documentation.commvault.com/commvault/v11/article?p=97276.htm">Commvault</a> migrates large volumes of data to Microsoft Azure using the Azure Data Box.

   * Veeam can backup and replicate large amounts of data from a Hyper-V machine to a Data Box.

5. Prepare and ship the disks back to Azure datacenter Within 10 days to avoid the $15 fee on top of the $250 service fee and $95 round-trip shipping fee. There is also a per-disk cost of $10 per day on top of a $50 order processing fee and $30 shipping fee (for the bubble wrap). That's in the U.S.    <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/calculator/?service=databox">Pricing</a> varies by region.

6. Microsoft uploades the disk into Blob storage within their private network. 

7. The disks are securely erased as per the National Institute of Standards and Technology (NIST) guidelines.

   The <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.DataBoxEdge%2FdataBoxEdgeDevices/kind/azuredataboxgateway">"Azure Data Box Gateway"</a> is a virtual appliance for moving data in and out of Azure, a subscription of $125.00/month.

https://docs.microsoft.com/en-us/azure/databox/data-box-disk-quickstart-portal?tabs=azure-portal   

<hr />

<a name="Azure_Table_Service"></a>

## Azure Table Service

<a target="_blank" href="https://www.youtube.com/watch?v=HSL1poL1VR0">VIDEO</a>:
Azure Table service have tables (uniquely) under an account:

   <tt>https://<em>my_account</em>.table.core.windows.net</tt>

   Table names are case-ensitive up to 63 characters and cannot beging with a number.

Within each table are entitites (like rows) and properties.

   * An entity can have up to 255 properties (3 system properties)
   * A PartitionKey serves as the basis for table partioning
   * A Timestamp is last modified (used for merging)
   * A RowKey is a unique identiifes for an entity within a given partition

   * An entity are C# structures
   * A property is a name, typed-value pair (similar to a column)
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-asd-rbac-portal/">DOCS</a>:
For access authentication, create a Shared Key because Azure AD is not supported.



<hr />

<a name="SQLDB"></a>

## SQL (Structured Query Language)

Three deployment models:

1. Single database in a VM

2. Standalone Azure SQL Database (Logical Server)
   * Single
   * Elastic pool
   <br /><br />

3. DaaS: Azure SQL Managed instance (for "frictionless" lift-and-shift migration to PaaS of SQL apps with 99.99% SLA, with Microsoft doing patching and upgrade to latest stable version, backups, monitoring) But no SSIS in Azure Data Factory, no SSAS, SSRS.

4. Azure SQL Data Warehouse, Parallel Data Warehouse
<br /><br />

https://connectionstrings.com lists database connection strings

PRICING: Pre-provisioned billed by DTU (Data Transaction Units)
https://docs.microsoft.com/en-us/azure/azure-sql/database/service-tiers-dtu

BLAH: You can't make manual backups on SQL. 

Automatic point-in-time backups every 5 minutes.

Export.

PRICING: 

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=5036c56a-5268-45f3-96f4-5f0e76208c80">VIDEO DEMO</a>: PROTIP: Check "Allow Azure services to access server".

   * In the SQL Server hosting the database, click in the Overview page "Show firewall settings" to specify the Local Machine IP address. Alternately, use Active Directory admin to Set Admin a user. Use tenancy User Name "...onmicrosoft.com".

   * To use SQL Server, On your laptop, use a program such as SQL Server Management Studio or Visual Studio.
   In Visual Studio Server Explorer, add a database connection, Authentication: Active Directory Password Authentication.

In Visual Studio:

<pre>Create Table Test(
   TestID int identity(1,1) PRIMARY KEY,
   TestValue varchar(50)
)</pre>

In VS Object Explorer, expand the database, right-click on the Table just created "dbo.Test" for "Encrypt Columns".
In Column Selection, check the field to be encrypted. The types of encryption: Deterministic or Randomized.


### MySQL

<a target="_blank" href="https://cloud.netapp.com/blog/azure-cvo-blg-how-to-automate-azure-mysql-deployment-using-azure-cli">READ: How to Automate Azure MySQL Deployment Using Azure CLI</a>

CLI at https://github.com/fouldsy/azure-mol-samples-2nd-ed/blob/master/15/install_mysql_server.sh



<a name="DataLake"></a>

### Data Lake Store Big data services

<a target="_blank" href="https://www.youtube.com/watch?v=2uSkjBEwwq0">VIDEO</a>:
Data Lake Store
   * gen 1 to support big data
   * gen 2 adds hierarchial storage based on keys
   <br /><br />

Azure HDInsight is Hadoop (Big Data) storage.

Data Bricks is Spark storage + analytics
* https://datathirst.net/blog/2019/1/18/powershell-for-azure-databricks


<hr />

<a name="CosmoDB"></a>

## Cosmos DB (NoSQL)

Cosmos DB is a globally distributed and elastically scalable <strong>document database</strong> supporting MongoDB and graph database Gremlin. Its previous name was "Document DB".

<a target="_blank" href="https://www.wikiwand.com/en/PACELC_theorem">According to Wikipedia</a>, Cosmos DB's <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels">consistency levels</a> are based on <a target="_blank" href="https://www.wikiwand.com/en/PACELC_theorem">"P+A and E+L" theorem</a>, similar to AWS DynamoDB and Cassandra.

> "Cosmos DB supports the choice of five tunable <strong>consistency levels</strong> that define tradeoffs between C/A during P, and L/C during E. Cosmos DB never violates the specified consistency level, so it’s formally CP."

* <strong>Strong</strong> (write and read immediately, like SQL). Before a write operation is acknowledged to the client, data is durably committed by a quorum or replicas within the region that accepts the write operations. But that takes time.
* <strong>"Bounded-staleness"</strong>
* <strong>"Session"</strong> [the <tt>--default-consistency-level<tt>] = Strong sync for the same session key
* <strong>"Consistent prefix"</strong> ensures that changes are read in the order that matches the sequence of the corresponding writes. But read operations against a replica can return stale data.
* <strong>Eventual</strong> (like DNS propagation) ensures the database operates at peak effiency and speed. But read operations against a replica can return stale data.
<br /><br />

SLAs:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Operation </th><th> Single-region writes </th><th> Multi-region writes </th></tr>
<tr valign="top" align="center"><td align="left">
Write </td><td> 99.99 </td><td> 99.99 </td><td> 99.999 </td></tr>
<tr valign="top" align="center"><td align="left">
Read </td><td> 99.99 </td><td> 99.99 </td><td> 99.999 </td></tr>
</table>

A "conflict feed" makes data available not replicated when a write region fails.

<a target="_blank" href="https://microsoftlearning.github.io/AZ-204-DevelopingSolutionsforMicrosoftAzure/Instructions/Labs/AZ-204_04_lab.html">LAB</a>:

1. Search for "cosmo" for the <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.DocumentDb%2FdatabaseAccounts">Azure Cosmos DB</a> blade.
1. "+ Add" to "Create Azure Cosmos DB account".
1. API: [document (NoSQL) databases]
   * Core (SQL) [Formerly DocumentDB]
   * Azure Cosmos DB for MongoDB API
   * Cassandra
   * Azure Table
   * Gremlin (graph) [Graph database]
   * [Future: etcd, Apache HBase, ANSI SQL]
   <br /><br />

1. Location: 
   
   Capacity mode: 
   * Provisioned throughput [the default, for reserved capacity paid monthly]
   * Serverless (preview) [consumption based pricing]
   <br /><br />

   Apply Free Tier Discount: Apply (the default)

1. Next: Global Distribution:

1. Geo-Redundancy: Disable is the default
1. Multi-Region Writes: Disable is the default
1. Next: Networking
1. Connectivity method: All networks is default.

1. Next: Backup Policy: Periodic is default. 

1. Next: Encryption: Data Encryption: Service-managed key is default
1. Next: Tags
1. "Review + creat", "Create".
<br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cosmos-db/cli-samples">CLI</a>:
<a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/cosmosdb?view=azure-cli-latest">CLI DOCS</a>
<a target="_blank" href="https://learning.oreilly.com/videos/microsoft-az-204-certification/10009AZ2042021/10009AZ2042021-AZ2044_50">VIDEO</a>:

   * --max-interval "300" \ is 300 seconds (5 minutes) to sync with all instances

   * --max-staleness-prefix "10000" \ is max. 10,000 updates before forcing sync
   
 --default-consistency-level

References:

   * https://docs.microsoft.com/en-us/azure/cosmos-db/partitioning-overview#choose-partitionkey
   * https://azure.microsoft.com/en-us/blog/azure-cosmos-db-and-multi-tenant-systems/

### CosmoDB Backup Policy

Internally, Partition Sets span several regions.
Physical Partitions have a leader and follower.

   PRICING: Cost of storage is $0.25/month per GB.

1. Add Container: for Autoscale or Manual

   RU's are provisioned (reserved) ahead of time.
   <a target="_blank" href="https://www.youtube.com/watch?v=i8KtLHCl9Zk">VIDEO</a>: 
   Billing (for KB's of memory, CPU, IOPS) <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cosmos-db/request-units">"RU" (Request Units)</a>, multiplied by the number of regions. See <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cosmos-db/">this Pricing</a>

   <img width="358" alt="az-cosmos-cost-manual-716x342" src="https://user-images.githubusercontent.com/300046/114723250-c3288580-9cf7-11eb-977d-fc6f13d40afa.png">

Select the appropriate API and SDK for a solution:
* https://docs.microsoft.com/en-us/learn/modules/choose-api-for-cosmos-db/
* https://docs.microsoft.com/en-us/azure/cosmos-db/introduction
* https://docs.microsoft.com/en-us/azure/cosmos-db/relational-nosql
* https://docs.microsoft.com/en-us/azure/cosmos-db/create-sql-api-dotnet
* https://docs.microsoft.com/en-us/azure/cosmos-db/create-mongodb-nodejs
* https://docs.microsoft.com/en-us/azure/cosmos-db/create-cassandra-dotnet
* https://docs.microsoft.com/en-us/azure/cosmos-db/create-graph-dotnet
* https://docs.microsoft.com/en-us/azure/cosmos-db/create-table-dotnet
* https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-sdk-dotnet
* https://docs.microsoft.com/en-us/azure/cosmos-db/change-feed

Implement partitioning schemes and partition keys:
* https://docs.microsoft.com/en-us/azure/cosmos-db/partitioning-overview
* https://docs.microsoft.com/en-us/azure/cosmos-db/partitioning-overview#choose-partitionkey

Perform operations on data and Cosmos DB containers:
* https://docs.microsoft.com/en-us/azure/cosmos-db/account-databases-containers-items
* https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-get-started

Set the appropriate consistency level for operations:
* https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels

Manage change feed notifications:
* https://docs.microsoft.com/en-us/azure/cosmos-db/change-feed

CosmoDB can't use "USE" command which changes the current database.


Deborah Chen is Microsoft's Senior Program Manager on Data-CosmosDB

### DB Containers

Databases manage the throughput (performance)

Containers are where <strong>Partition keys</strong> to group databases. 

Documents are grouped by Partition Key.
There is no limit on the number of logical partitions.

PRICING is by Request Units (RUs). 
The cost to read a 1 KB item is 1 RU. 
<strong>5 RUs</strong> are spent to write 1 KB.

A minimum of 10 RS/s is required to store each 1 GB of data.
Each Physical Partition provides 10K request units/second.
There are Read Capacity Units and Write Capacity Units. 

Logical Partitions have a max. size of 20 GB.

When RU exceeded, Azure will automatically add another physical partition and re-allocate logical partitions.

A Change Feed provides an ordered list of documents modified in a container.


### Migration

To migrate SQL data in, create a <strong>.bacpac</strong> file.




<hr />

## TDE (Transparent Data Encryption)

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=d062b487-6d43-47fe-b1fc-60c30f666aa5">
DEMO VIDEO</a>: In SQL Server blade, in the Security section, Transparent data encryption, It's <strong>on by default</strong>.

TDE encrypts databases, backups, logs at rest.

To bring your own key, be at the server's TDE section, "Use your own key". Select Key Vault. 


<hr />

## Azure Synapse

Synapse is Azure's next generation of database technology which combines retrieval and analytics functionality in one comprehensive product.

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/courses/40576">
Microsoft Cloud Workshop: Azure Synapse Analytics and AI (whiteboard design session)</a>

https://docs.microsoft.com/en-us/azure/synapse-analytics/

https://azure.microsoft.com/en-us/services/synapse-analytics/
https://azure.microsoft.com/en-us/services/synapse-analytics/resources/

https://github.com/Azure-Samples/Synapse

https://www.pulumi.com/blog/get-up-and-running-with-azure-synapse-and-pulumi/


<a name="KeyVault"></a>

## Store Keys in Key Vault

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h22m29s">VIDEO</a>


<a name="ACR"></a>

## Azure Container Registry (ACR)

Container retrieved by Kubernetes.


<a name="Redis"></a>

## Redis Cache

Redis is an in-memory database. 
LIMIT: It caches <strong>values up to 100KB</strong>. 
It supports longer values with low latency.

From a client, connect with a host name, port, access key.
Reference access from Key Vault.


<a name="Tables"></a>

## Azure Tables

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-net/azure-tables-client-sdk-samples/
Azure Tables samples for .NET Azure.Data.Tables client library


## References

https://www.c-sharpcorner.com/article/azure-storage-account-using-azure-cli/

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-java/storage-file-share-samples/

<a target="_blank" href="https://cloud.netapp.com/blog/azure-cvo-blg-azure-quickstart-templates-how-to">
READ: Azure Quickstart Templates: Cloud Storage Easier</a>

<a target="_blank" href="https://cloudacademy.com/lab/understanding-core-azure-storage-products/?context_resource=lp&context_id=524">HANDS-ON LAB: Understanding Core Azure Storage Products</a>

<a target="_blank" href="https://www.youtube.com/watch?v=-3k0hhngt7o&list=RDCMUC0m-80FnNY2Qb7obvTL_2fA&index=20">How to automatically manage Azure Blobs lifecycles | Azure Tips and Tricks</a>


## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
