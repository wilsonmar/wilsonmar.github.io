---
layout: post
date: "2023-11-28"
file: "microsoft-fabric"
title: "Microsoft Fabric"
excerpt: "Get skilled in multicloud data handling and real-time analystics, then pass the DP-600 exam January 2024"
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

With this article I aim to get you past the vapid marketing generalizations.
This is a hands-on technical tutorial that takes you logically step-by-step to quickly learn how to setup, navigate, and use the <strong>Microsoft Fabric</strong> cloud and pass <a href="https://wilsonmar.github.io/azure-certifications/">Azure certification exam</a>

   * <a href="#DP-600">DP-600: Fabric Analytic Engineer Associate</a>
   <br /><br />

{% include whatever.html %}

PROTIP: I adapted <a target="_blank" href="https://7451111251303.gumroad.com/l/fkrvnn" title="Available for purchase">this diagram</a> from Microsoft and <a target="_blank" href="https://adatis.co.uk/microsoft-fabric-announcement-accelerate-your-data-potential/">others</a> to show, all in one page, relationships among key components ("Experiences") to Fabric:

<a name="Diagram"></a>
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701283548/microsoft-fabric-1703x995_okeala.png"><img alt="microsoft-fabric-1703x995" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701283548/microsoft-fabric-1703x995_okeala.png"><br align="right" /><em>Click for full-size image</em></a>.

Rather than other fanboys who say "it's the latest cool thing, let's switch now", let's first clear up some common confusions:


## Home Pages & Terminology

The product name "<strong>Fabric</strong>" Microsoft introduced March 2023 along with a set of cloud-based product <strong>experiences</strong> containing the same words also used in legacy products that Microsoft continues to sell: <a target=_blank" href="https://www.casewhen.co/blog/data-factory-showdown-fabric-vs-azure">BLOG</a>:

   * Fabric "Data Factory" is different from "Azure Data Factory (ADF)" that continues to be used (at lower cost). PROTIP: Use "<strong>Data Factory in Microsoft Fabric (DFiMF)</strong>" to differentiate it from the legacy ADF. DFiMF adds to ADF features from <a target="_blank" href="https://www.casewhen.co/blog/data-analysis-and-data-transformation-with-power-query-in-power-bi">Power Query Dataflows</a> and integrates tagging for Data Governance.

   * The "Synapse" prefix to several Fabric products is different from the "Azure Synapse Analytics" product that Microsoft continues to sell. <a target="_blank" href="https://endjin.com/blog/2023/05/azure-synapse-analytics-versus-microsoft-fabric-a-side-by-side-comparison">"There is no automatic upgrade path"</a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701362429/microsoft-fabric-artefacts-1280x720_swuigs.webp"><img alt="microsoft-fabric-artefacts-1280x720" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701362429/microsoft-fabric-artefacts-1280x720_swuigs.webp"></a>


<a name="Shortcuts"></a>

### OneLake Shortcuts

<a target="_blank" href="https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts">Shortcuts</a> are the most significant technical achievement that comes with Fabric's "OneLake" capabilities.

<a target="_blank" href="https://blog.fabric.microsoft.com/en-us/blog/using-azure-databricks-with-microsoft-fabric-and-onelake?ft=All%3A">BLOG</a>:
With Shortcuts, Microsoft enables the processing of specific datasets from "anywhere", including blobs (files) in AWS S3 and Google Cloud Storage as well as Microsoft's own Azure Blob Storage, Azure Data Lake Storage (ADLS) Gen2, Azure Databricks, etc.

Shortcuts enable Data Engineers to create and manage data pipelines that move data from any one place to another.

Behind the scenes, OneLake manages the various permissions and credentials to access data.
Relative file paths can be used to directly read data from shortcuts.
ADLS shortcuts point to the DFS endpoint for the storage account. Example: 

   <ul><tt>https://accountname.dfs.core.windows.net/...</tt></ul>

Applications and services outside of Fabric can access Shortcuts through <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/onelake/onelake-access-api">OneLake's API</a>, using enpoints such as:

   <ul><tt>https://onelake.dfs.fabric.microsoft.com/MyWorkspace/MyLakhouse/Tables/MyShortcut/MyFile.csv</tt></ul>

ADLS and S3 shortcut target paths can contain "-" / "." / "_" / "~" but not <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc3986#section-2.2">reserved characters in RCF 3986 section 2.2</a>.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701352948/fabric-onelake-shortcuts-1031x632_nszljw.png"><img alt="fabric-onelake-shortcuts-1031x632.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701352948/fabric-onelake-shortcuts-1031x632_nszljw.png"></a>

Shortcuts can be created within Microsoft's various SQL data warehouses, lakehouses, KQL databases, etc.
 
PROTIP: By themselves, Shortcuts don't "unify data across domains". People do that by actively managing a "unified namespace" of Shortcuts across the entire enterprise. That's hard work that requires executive and worker support across departments and geographies. Thus the "Chief Data Officer" (CDO).


Now let's focus on <strong>impacts</strong> on the lives of people, before examining the home pages and <strong>capabilities</strong> of the products.

## User Roles

Instead of the traditional generic "Database Administrator" role name, 
Microsoft designed Fabric documentation around different roles within enterprises, listed here in order of introduction during a green-field implementation:

* <strong>Data Citizens</strong> are true end-users -- business people who need to make decisions and take actions based on data. 

   They have the budget authority and the responsibility for what are correct values in databases.
   
   PROTIP: For each set of data, there is one <strong>data owner</strong> who approves data deletion and arranges for audits as well as
   approving who have access and extent of permissions (for implementation by a central security team using IAM tools).

   Data Citizens need to be trained to use <a href="#PowerBI">Power BI</a> for <a href="#Analytics">Analytics</a>, <a href="#Data+Activator">Data Activator</a> for alerts, and other tools provided by Data Analysts. Some track where they spend time on technical aspects to ensure that the time spent is worth the value of the data.

* <strong>Data (Business) Analysts</strong> serve the needs of Data Citizens by establishing dashboards and alerts, and training users on technologies and possibilities. These Analysts design the "data models" defining relationships among sets of data.

   PROTIP: Business analysts also coordinate <a target="_blank" href="https://wilsonmar.github.io/chaos-engineering/">Chaos Engineering efforts</a> to ensure that recovery efforts are quick and effective.

   Data Analysts collaborate with Security on using Microsft Purview.

* <strong>Data Engineers</strong> create databases (platforms):

   * Move data using <a href="#Data+Factory">Data Factory</a>
   * Organize <a href="#Shortcuts">Shortcuts</a> to reference data files within <a href="#OneLake">OneLake storage</a>

   * Program SQL within <a href="#SDW">Synapse Data Warehouse</a> to create traditional relational SQL databases 
   * Program <a target="_blank" href="https://wilsonmar.github.io/kql">KQL (Kusto Query Language)</a> within <a href="#RTA">Synapse Real Time Analytics</a> to create (star schema) databases for analytics
   * Program PySpark Notebooks within Synapse Data Engineering to create "big data" (Hadoop-style) <strong>data lakes</strong>
   * Use Data Factory to create data pipelines to move data from one place to another, such as from a data lake to a data warehouse.
   <br /><br />

   Engineers also build automated <strong>workflows</strong> for monitoring, data cleaning, loading, backups, etc.

   PROTIP: In response to security incidents, automation enables complete recreation of capabilities with the latest patches, rather than patching.

   Microsoft's documentation now calls "Power BI administrators" <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/admin/microsoft-fabric-admin">Fabric administrators</a>.

* <a target="_blank" href="https://www.indeed.com/career-advice/finding-a-job/what-is-data-steward"><strong>Data Stewards</strong></a> are <strong>data custodians</strong> responsible for protecting the organization's most treasured assets: its data. Stewards setup and operate processes for data governance and data quality. They monitor processes for collecting data -- inspecting contents to ensure that data is in the right format. They ensure that app logs, metric collections, database logs shipped, app transactions, snapshots of master data are backed up fully and as scheduled. Once a month they ensure that data can be fully and quickly restored, as measured by RTO (Recovery Time Objective) and RPO (Recovery Point Objective) SLAs. Such is an important fall-back in case of ransomware attacks.

   Data stewards collaborate with others to detect and solve data corruption or mis-sychronization of data between apps and utilities.

   PROTIP: In many organizations, to limit the impact of credential loss, they, after approval by the data owner, are the only accounts who can <strong>delete data</strong> which others put "in limbo".

   They use <a href="#Purview">Microsoft Purview</a>. QUESTION: Does Microsoft provide all the tools that Data Stewards need?

* <strong>Data Scientists</strong> work on AI models using Data Science tools such as Notebooks written in PySpark for Machine Learning. The intelligence created can be custom tags that extend generic LLM (Large Language Models) created by others for NLP (Natural Language Processing) and other AI (Artificial Intelligence) capabilities.

Additional roles:

* Solution Architects/Architects
* AI Engineers/Architects
* Power BI data analysts
* ETL developers
* Information architects
* DevOps Engineers/Architects

* Managers & Supervisors
* Executives: CEO, CTO, CMO, CRO, etc.
<br /><br />

The above are used as the basis to assign permissions to the Fabric "experiences" (sub-products).


## Fabric Marketing

Fabric was unveiled at Microsoft's Build 2023 conference.

1. The marketing homepage for Fabric is:

   <a target="_blank" href="https://www.microsoft.com/en-us/microsoft-fabric"><strong>https://www.microsoft.com/en-us/microsoft-fabric</strong></a>

   This article covers keywords on that page:
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

   ### Browser Profile

1. PROTIP: In an internet browser (Safari, Google Chrome, etc.) I click the icon next to the browser's three-dot menu to use a <strong>browser profile</strong> that retains the browser history for the <strong>work (organizational) account</strong> I need to use with Fabric.

   <a name="AdminMenu"></a>
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701041117/fabric-signin-318x367_lf2lqp.png"><img alt="fabric-signin-318x367.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701041117/fabric-signin-318x367_lf2lqp.png"></a>

   <a name="HomePage"></a>

   ### Working Home Page

1. REMEMBER: The Microsoft <strong>Fabric working home page</strong> has Microsoft.com and not Azure:

   <a target="_blank" href="https://app.fabric.microsoft.com"><strong>https://app.fabric.microsoft.com</strong></a>

   This is because Microsoft intends Fabric to be a service that can exchange data with competing clouds such as AWS and GCP as well as on-prem. data centers (through Microsoft's Arc). It's a "friendamy" strategy. Fabric is how Microsoft catches up to what <a target="_blank" href="https://wilsonmar.github.io/snowflake/">Snowflake</a> and Databricks have been offering.

1. You'll see what I call the "bouncer" page ensures that only <strong>organizational</strong> emails (work or school account) use Fabric. Your personal gmail or outlook.com account is no good here. Wow.

   REMEMBER: You must setup Azure subscriptions using your work or school account, not your personal account.

   This is why you setup different browser profiles for different accounts. Click the profile icon at the top right of the browser window to switch between profiles.

   If you have a license, you'll see the fabric-landing-711x400.jpeg landing page, which lists the Fabric components you have access to.

1. Click the big round gray icon at the upper side of the Fabric page for the <a href="#AdminMenu">Admin/Sign In menu above</a>.


   ### Start Trial

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

   64 capacity units (CUs) allow consumption of 64x60 CU seconds every minute when "experiences" are run. 

   Each data <a target="_blank" href="https://learn.microsoft.com/en-us/purview/concept-elastic-data-map">Purview Data Map</a> capacity unit includes a throughput of 25 operations/sec and 10 GB of metadata storage limit for <a target="_blank" href="https://learn.microsoft.com/en-us/purview/concept-scans-and-ingestion">scanning</a>.
   
   PROTIP: When the capacity consumption exceeds its size, Microsoft slows down the experience similar to slowing down CPU performance.

1. <a target="_blank" href="https://www.youtube.com/watch?v=l3cpnX0mpXE">VIDEO</a>: <a target="_blank" href="https://blog.fabric.microsoft.com/en-US/blog/capacity-metrics-in-microsoft-fabric/">BLOG</a>: <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/enterprise/metrics-app">Monitor Capacity usage</a> using:
   
1. Click the <strong>Admin</strong> icon at the top right of the page to see the number of days remaining in the trial.


   ### Learn More

1. PROTIP: Instead of clicking this <strong>Learn more</strong> link for the "Get started" tutorial, copy the URL and switch to your personal browser profile so you get points for learning,

   This article contains information from the following sources:

   * https://learn.microsoft.com/en-us/fabric/ is the main Fabric page.

   * https://learn.microsoft.com/en-us/fabric/get-started/fabric-trial
   * https://learn.microsoft.com/en-us/training/paths/get-started-fabric

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/azure-data-fundamentals-explore-data-warehouse-analytics/">Microsoft Documentation for Microsoft Fabric</a>

   * <a target="_blank" href="https://learn.microsoft.com/en-us/collections/w2gkhrkzzmym?WT.mc_id=cloudskillschallenge_a68d938a-58b7-403e-89f2-b2305edb7c41">Microsoft Ignite: Microsoft Fabric Skills Challenge</a>

   * https://aka.ms/Fabric-Hero-Blog-Ignite23

Semantics relates to the study of references, specifically describing the real meaning between symbols or words. 

A semantic model or semantic data model is a high-level databases. An SDM specification describes a database in terms of the kinds of entities that exist in the application environment, the classifications and groupings of those entities, and the structural interconnections among them.


<hr />

<a name="Experiences"></a>

## Product Component "Experiences"

PROTIP: Although Fabric is marketed as a "unified" product, practically it's operated as a collection of products that Microsoft users navigate around.

1. Click the Microsoft Fabric icon at the bottom-left of the screen for a list of product components (without the vague marketing generalizations):

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701046058/fabric-menu-624x584_de9vj1.png"><img alt="fabric-menu-624x584.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701046058/fabric-menu-624x584_de9vj1.png"></a>

   Notice that there is a group of <strong>Synapse brand</strong> data products with blue icons.
   Synapse is on Azure as a Platform-as-a-Service (PaaS)

   <a target="_blank" href="https://www.youtube.com/watch?v=Shw8FbDi4lQ&t=5m39s" title="by Deepika Bhatt with James Leonard">DEMO</a>: 
   Fabric integrates into a single unified SaaS analytics platform :
   * <a href="#Data+Factory">Azure Data Factory</a>
   * Azure Data Explorer
   * Azure Synapse Analytics operates on workspaces containing both relational SQL databases and big-data Lake databases, all linked to blobs (files) within Azure Data Lake Storage (ADLS) Gen2
   * Azure Databricks
   * Azure Synapse SQL
   * Power BI to 
   <br /><br />

   <a target="_blank" href="https://www.youtube.com/watch?v=Shw8FbDi4lQ&t=2m40s" title="by James Leonard">VIDEO</a>: 
   "Synapse Data Analytics" integrates relational data with big data, both using Azure Data Lake Storage (ADLS) Gen2, <a href="#Data+Factory">Azure Data Factory</a>, Azure Databricks, Azure Synapse SQL, and Power BI into a single unified analytics platform.

   Fabric covers the "complete spectrum" of data services including data movement, data lake, data engineering, data integration and data science, observational analytics, and business intelligence.
   
   But what happened to products previously shown in menus:
   * Azure Databricks - "Fast, easy, and collaborative Apache Spark-based analytics platform"
   * Azure Data Explorer - "Fast and highly scalable data exploration service"
   * Azure Synapse Analytics - "Limitless analytics service with unmatched time to insight"
   * Azure Analysis Services - "Enterprise-grade analytics engine as a service"
   * Azure Machine Learning - "Build, train, and deploy models from the cloud to the edge"
   * Azure Stream Analytics - "Real-time analytics on fast-moving streaming data"
   * HDInsight - "Provision cloud Hadoop, Spark, R Server, HBase, and Storm clusters"
   * Microsoft Purview - "Govern, protect, and manage your data estate"
   <br /><br />

   And Copilot? It's a feature within Power BI. <a target="_blank" href="https://www.youtube.com/watch?v=cTqVa1Gdn4s">Tak Tech Analytics</a> explains it.

   ### Left Menus

1. <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701174778/fabric-left-menu-66x493_x7hpur.png"><img align="right" alt="fabric-left-menu-66x493.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701174778/fabric-left-menu-66x493_x7hpur.png"></a>Click on any of the icons to see the left menu for that component:

   ### Admin verify domain

1. Click the 9-dot icon at the top left of the screen present automation options: Power Automate, Power Pages, and 365 apps at

   https://www.microsoft365.com/?auth=2&home=1

1. Click the <strong>Admin</strong> link to designate the admin for the organizational domain name used to sign in.
1. Click Next.
1. Read the "See step-by-step instructions to add DNS records" about signing into the Domain Registry (such as GoDaddy) to specify a TXT record Fabric needs to use like a password to trust the domain.
1. Return to Fabric and click <strong>Confirm record</strong> for "You're now the admin".
1. Click "Go to the admin center".
1. Finish.

   ### Left menu common items

1. Click on Power BI on the left menu:

   * <strong>Home</strong> is the landing page for the component.
   * Create
   * Browse
   * OneLake data hub
   * Monitoring hub - a station to view and track active activities across different products
   * Workspaces
   * My workspace
   <br /><br />

1. Click the <strong>Power BI</strong> icon (at the top as it's frequently used).
   Its left menu contains what's not in other components: 
   * Apps
   * Metrics scorecards
   * Deployment pipelines
   * Learn - click on a sample to store its assets for that in your workspace, OneLake data hub, and left menu.
   <br /><br /> 

   ### Install Metrics App

1. Search for other apps for Fabric at

   https://appsource.microsoft.com/en-us/marketplace/apps?exp=ubp8&search=fabric&page=1

1. In PowerBI, <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/enterprise/metrics-app-install?tabs=1st">install the Microsoft Fabric Capacity Metrics app</a> to read:

   <a target="_blank" href="https://app.fabric.microsoft.com/capacity/">https://app.fabric.microsoft.com/capacity</a>

1. Click "Get it now" at 

   https://appsource.microsoft.com/en-us/product/power-bi/pbi_pcmm.microsoftpremiumfabricpreviewreport?exp=ubp8

1. Click "Install".
1. Click the app to go to it.
1. Connect to your own data by providing a "CapacityID" (GUID) and its UTC_offsite (time zone).

   <a target="_blank" href="https://community.fabric.microsoft.com/t5/Developer/How-to-get-Power-BI-Embedded-Capacity-ID/m-p/2942860">PROTIP</a>: 
   The capacity ID is shown in the capacity management page within the Power BI service -> Settings > Admin portal -> Capacity settings. Select a Gen2 capacity. 
   In the URL of that page is the capacity ID. For example, "9B77CC50-E537-40E4-99B9-2B356347E584" is the Capacity ID in the URL:
   
   <tt>https://app.powerbi.com/admin-portal/capacities/9B77CC50-E537-40E4-99B9-2B356347E584</tt>

   You may first have to <a target="_blank" href="https://learn.microsoft.com/en-us/power-bi/enterprise/service-admin-premium-manage">set your Service Principal as a Capacity Admin</a>. 

   References:
   * https://blog.fabric.microsoft.com/en-US/blog/capacity-metrics-in-microsoft-fabric/
   * https://learn.microsoft.com/en-us/fabric/data-warehouse/usage-reporting
   * https://learn.microsoft.com/en-us/fabric/admin/feature-usage-adoption
   <br /><br />

1. Click "Go back" at the lower-left corner.

Each component has its own licensing considerations. See the next section.

   * https://www.youtube.com/watch?v=8BAeLUywEMM by RADACAD "Why is it a big deal".

<hr />

## Pricing

1. Click "Pricing" to see the Fabric Pricing page:

   https://azure.microsoft.com/en-us/pricing/details/microsoft-fabric/?country=us

1. Select Region: <strong>East US</strong> (Virginia) in US Dollars by the hour. However, prices are the same in all US regions.

   SKU = Stock Keeping Unit = a unique identifier for each distinct product and service that can be purchased in business.

   PROTIP: <a target="_blank" href="https://7451111251303.gumroad.com/l/fjkxm?layout=profile" title="Spreadsheet available for purchase">My analysis, illustrated below</a>, shows that while the number of CUs doubles with each level, costs also double for the two ways of charging:

   <img alt="fabric-cu-pricing-670x388.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701148689/fabric-cu-pricing-670x388_ihqdt8.png">
   
   Reserved CUs are 41% less than the Pay-as-you-go per-hour prices at all levels, for all countries.
   
   As for differences in CU Reserved cost among different regions (using different colors):<br />
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701148826/fabric-cu-pricing-intl-394x696_okjmdt.png"><img alt="fabric-cu-pricing-intl-394x696.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701148826/fabric-cu-pricing-intl-394x696_okjmdt.png"></a>
   
   Brazil South is double the cost in the US. 
   Fabric may not even be available there because the price for Pay-as-you-go is not listed for it on the website.

   <a target="_blank" href="https://www.youtube.com/watch?v=smmmE-rjXr8">VIDEO</a>:
   https://learn.microsoft.com/en-us/fabric/enterprise/licenses
   
   <a target="_blank" href="https://www.youtube.com/watch?v=6AAeV3bSMso&t=5m6s">VIDEO</a>: A Power BI Pro license is not needed if you have a Fabric Pro license at F64 SKU or above.

   https://learn.microsoft.com/en-us/power-bi/enterprise/service-premium-features

   "Charges for OneLake storage are comparable to Azure ADLS of $0.023/GB on US West 2."

<hr />

## End-to-End projects

<a target="_blank" href="https://www.youtube.com/watch?v=gKdlsHm7QgU&list=PL9SoC_dDpQ8FnIJZwlk5L4rU1r7-cQNCG">DataVerse Academy</a>

<a target="_blank" href="https://www.youtube.com/watch?v=yRJ03n1U5-E&list=PLug2zSFKZmV0Yaya7NxRQfrrPtfF2vj0K">Learn Microsoft Fabric with Will</a>

<a target="_blank" href="https://www.youtube.com/watch?v=a6A3jtvB62U">James Serra</a>

<a target="_blank" href="https://www.youtube.com/watch?v=IaA9YNlg5hM">End-to-end</a>


## Workflow with Fabric 

Microsoft Fabric offers a centralized storage solution, eliminating data fragmentation and promoting data integrity. 

   Fabric aims to eliminate silos and remove data duplication by providing a single platform for <strong>collaboration</strong> among data engineers, data scientists, and business analysts. The <a target="_blank" href="https://learn.microsoft.com/fabric/data-engineering/tutorial-lakehouse-introduction">flow</a> is:
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701049746/fabric-flow-842x516_bcpj9q.jpg"><img alt="fabric-flow-842x516.jpeg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701049746/fabric-flow-842x516_bcpj9q.jpg"></a>

Databricks is a cloud-based service that provides a unified analytics platform for data scientists, data engineers, and business analysts. It provides a collaborative workspace for data scientists to build and train machine learning models. It also provides a platform for data engineers to build data pipelines and perform complex data engineering tasks. It provides a platform for business analysts to perform data analysis and build reports and dashboards.

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
<br /><br />

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


<a name="Data+Factory"></a>

## Azure Data Factory (ADF)

<a target="_blank" href="https://www.youtube.com/watch?v=EpDkxTHAhOs&list=PLGjZwEtPN7j8b9dPA0HrtJDptOB69B506&index=1">VIDEO</a>:

1. Data Factory: data integration <strong>pipelines</strong> to copy data and orchestrate data processing, combining <strong>Power Query Online</strong> and/or Dataflows (Gen2) to Import and transform data from 90+ data sources, and load it directly into a table in the lakehouse.

   * https://learn.microsoft.com/en-us/fabric/data-factory/data-factory-overview
   * https://learn.microsoft.com/en-us/training/modules/use-data-factory-pipelines-fabric/
   * https://www.youtube.com/watch?v=CtTrnd-UGt8
   <br /><br />

   * <a target="_blank" href="https://www.youtube.com/watch?v=WbDqeNsmoL4">Why you should look</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=_QtA_492l4k">SQLBits</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=tW6vXSIV0kc&t=13m51s" title="by Lisa Hoving">VIDEO</a>: Azure Synapse Analytics is a combination of Azure SQL Data Warehouse and Azure Data Factory.

   <a target="_blank" href="https://www.youtube.com/watch?v=tW6vXSIV0kc" title="by Lisa Hoving">VIDEO</a>: Difficulties with Data Factory include:
   * Little flexibility beyond what's available
   * Difficult to create generic pipelines
   * Difficult to optimize
   <br /><br />

1. Power BI: business intelligence for translating data to decisions. Power BI administrators are now <a target="_blank" href="https://learn.microsoft.com/en-us/fabric/admin/microsoft-fabric-admin">Fabric administrators</a>.

1. <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/get-started-data-activator-microsoft-fabric/">Data Activator</a>: "Insight to action" takes action based on what's happening in your data. 
   * https://learn.microsoft.com/en-us/training/modules/get-started-data-activator-microsoft-fabric/


<hr />

<a name="DP-600"></a>

## DP-600 Fabric Analytic Engineer Associate

Microsoft's $165 <a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/fabric-analytics-engineer-associate/">DP-600 Fabric Analytic Engineer Associate exam page</a> (available in January 2024) provides free tutorials.
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

Copy data:
   * Choose an appropriate method for copying data from a Fabric data source to a lakehouse or warehouse
   * Copy data by using a data pipeline, dataflow, or notebook
   * Add stored procedures, notebooks, and dataflows to a data pipeline
   * Schedule data pipelines
   * Schedule dataflows and notebooks
   <br /><br />

Transform data:
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

Optimize performance:
   * Identify and resolve data loading performance bottlenecks in dataflows, notebooks, and SQL queries
   * Implement performance improvements in dataflows, notebooks, and SQL queries
   * Identify and resolve issues with Delta table file sizes
   <br /><br />

<strong>Implement and manage semantic models (20–25%)</strong>

Design and build semantic models:
   * Choose a storage mode, including Direct Lake
   * Identify use cases for <a href="#DAX+Studio">DAX Studio</a> and Tabular Editor 2
   * Implement a star schema for a semantic model
   * Implement relationships, such as bridge tables and many-to-many relationships
   * Write calculations that use DAX variables and functions, such as iterators, table filtering, windowing, and information functions
   * Implement calculation groups, dynamic strings, and field parameters
   * Design and build a large format dataset
   * Design and build composite models that include aggregations
   * Implement dynamic row-level security and object-level security
   * Validate row-level security and object-level security
   <br /><br />

Optimize enterprise-scale semantic models:
   * Implement performance improvements in queries and report visuals
   * Improve DAX performance by using <a href="#DAX+Studio">DAX Studio</a>
   * Optimize a semantic model by using Tabular Editor 2
   * Implement incremental refresh
   <br /><br />

<strong>Explore and analyze data (20–25%)</strong>

Perform exploratory analytics:
   * Implement descriptive and diagnostic analytics
   * Integrate prescriptive and predictive analytics into a visual or report
   * Profile data
   <br /><br />

Query data by using SQL:
   * Query a lakehouse in Fabric by using SQL queries or the visual query editor
   * Query a warehouse in Fabric by using SQL queries or the visual query editor
   * Connect to and query datasets by using the XMLA endpoint
   <br /><br />

<hr />

<a name="Data+Activator"></a>

## Data Activator

   <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/get-started-data-activator-microsoft-fabric/8-exercise">Excerise</a>

1. Click "Data Activator" for its mode tabs at the bottom of the screen: Data mode and Design mode. 

   * Click Data mode to inspect the fresh data and link it to specific objects. 
   * Click Design mode to develop triggers based on these objects. 
   <br /><br />

   PROTIP: <strong>Data Activator</strong>, if it works as intended, will the real game changer to enable <strong>Data Citizens</strong> who find Power BI is too complex to use. The payoff is not just that Microsoft Fabric "seamlessly" integrates with Microsoft 365, facilitating collaboration and enabling ad hoc analysis within familiar Microsoft 365 applications. More importantly, Activator aims to <strong>take action</strong> based on data rather than merely displaying pretty charts and reports. Here's where machines (AI or not) can replace human workers.

   Consider the following three scenarios:

   * A network administrator detects potential security breaches through real-time monitoring and initiates immediate protective actions.

   * A warehouse manager needs to detect drops in product stocks and needs to start a reorder process to prevent running out of stock.

   * A sales associate needs to receive alerts when a potential client is visiting their website and offers to start a live chat with them.

   Data Activator initiate actions based on <strong>Reflex items</strong>, each containing all the details to connect to data sources, monitor conditions. A Reflex is typically setup for each business segment or process monitored.



   Copilot, an AI-powered assistant assist users in tasks like generating SQL statements, creating reports and setting up automated workflows based on triggers. By leveraging AI capabilities, Copilot streamlines and automates data-related tasks, enabling users to work more efficiently and derive actionable insights from their data.

   The <strong>Fabric engine</strong> is an upgrade from separate systems used by separate roles of people.
   So there is a lot of copying of data from one engine to another<a target="_blank" href="https://blog.fabric.microsoft.com/en-us/blog/microsoft-fabric-explained-for-existing-synapse-users?ft=Synapse:category">:</a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701048036/ADLSg2-lakehouse-864x291_d8wv2o.png"><img alt="ADLSg2-lakehouse-864x291.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701048036/ADLSg2-lakehouse-864x291_d8wv2o.png"></a>
   

### Delta (Parquet) Format

At the bottom is storage. "<a target="_blank" href="https://learn.microsoft.com/fabric/onelake/onelake-overview">One Lake</a>" is the branding for storage built on top of Azure Data Lake Storage Gen2 (ADLSg2) lakehouse that combines storage locations across different regions and clouds into a single logical lake, without moving or duplicating data (DirectLake mode).

The key enabler (for Microsoft as well as Snowflake and Databricks DeltaLake) is the <strong>Delta format</strong> (generically called "Parquet" format) that enables ACID transactions on "unstructured" data in data lakes.

Previously, SQL and analytic data are stored in different database technologies.



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
* Use <a href="#Data+Factory">Data Factory</a> pipelines in Microsoft Fabric
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

<a name="Analytics"></a>

## Real-Time Analytics

<a target="_blank" href="https://learn.microsoft.com/en-us/answers/questions/1444761/fabric-real-time-analytics-sample-log-analytics-ra">Q&A</a>:

1. In "Real-Time Analytics".
1. Click "Use a sample" for this menu:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701209892/fabric-analytics-samples-970x388_bzvzr2.png"><img alt="fabric-analytics-samples-970x388.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701209892/fabric-analytics-samples-970x388_bzvzr2.png"></a>

1. Click "Log Analytics" to load and "RawSysLogsSample" appears in the left menu.
1. Click "Run". 

   <pre>Error: Semantic error: 'take' operator: Failed to resolve table or column expression named 'DownSampledTransformedLogs'
&nbsp;
 clientRequestId: </pre>

1. Click "Metrics analytics" to load and "RawServerMetricsSample" appears in the left menu.
1. Click "Run". 

   <pre>Error: Semantic error: Stored query result 'DailySQLMetrics' was not found
&nbsp;
 clientRequestId: </pre>

1. TODO: Report errors?



Check that the tables have been loaded properly by going to the "Data" section of the workspace and verifying that the tables are present.
Check that the table and column names in the queries are correct and match the names of the tables and columns in the workspace.
Try running the queries again after refreshing the page or restarting the workspace.


<hr />

## Microsoft Purview

Among Microsoft's security portfolio: Defender XDR, Entra PIM, Intune MDM, Priva, Purview DLP, Sentinel SIEM, and Azure Security Center.

https://www.microsoft.com/en-us/security/business/microsoft-purview 
is the marketing landing page

"Microsoft Purview is a comprehensive portfolio of products spanning data governance, data security, and risk and compliance solutions."

   * https://www.microsoft.com/en-us/security/business/microsoft-purview
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#data-governance
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#data-security
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#risk-compliance
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#data-governance
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#data-security
   * https://www.microsoft.com/en-us/security/business/microsoft-purview?rtc=1#risk-compliance
   <br /><br />

   <a target="_blank" href="https://www.youtube.com/watch?v=8BAeLUywEMM&t=1m30s">VIDEO</a>: 
   "Microsoft Purview is a unified data governance platform that helps you manage and govern your on-premises, multi-cloud, and software-as-a-service (SaaS) data. Purview provides a unified view of your data estate by discovering and classifying your data, mapping data lineage, and enabling data protection."

   <a target="_blank" href="https://www.youtube.com/watch?v=8BAeLUywEMM&t=2m40s">VIDEO</a>: 
   "Microsoft Purview is a unified data governance platform that helps you manage and govern your on-premises, multi-cloud, and software-as-a-service (SaaS) data. Purview provides a unified view of your data estate by discovering and classifying your data, mapping data lineage, and enabling data protection."

   <a target="_blank" href="https://www.youtube.com/watch?v=8BAeLUywEMM&t=3m30s">VIDEO</a>: 
   "Microsoft Purview is a unified data governance platform that helps you manage and govern your on-premises, multi-cloud, and software-as-a-service (SaaS) data. Purview provides a unified view of your data estate by discovering and classifying your data, mapping data lineage, and enabling data protection."

   <a target="_


https://learn.microsoft.com/en-us/purview/purview describes features:
   * Data Catalog - discover and catalog data assets
   * Data Loss Prevention (DLP) - identify and protect sensitive data
   * Privileged Access Management (PAM) - manage, control, and monitor access to critical assets
   <br /><br />

https://learn.microsoft.com/en-us/training/modules/intro-to-microsoft-purview/?source=recommendations

Based on https://learn.microsoft.com/en-us/purview/create-microsoft-purview-portal

   ### Purview Account

1. Search for "Purview accounts":
   https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Purview%2FAccounts

1. Click "Create Microsoft Purview account".
   https://portal.azure.com/#create/Microsoft.AzurePurviewGalleryPackage
   
1. Select the Subscription to use.
1. Select an existing Resource group or create a new one.

   purview-west-us-231129a

   PROTIP: A Purview account needs to be created for each Region your organization operates.

1. For Microsoft Purview account name, specify the same name as the Resource Group.
1. For Location, select the same location as the Resource Group.

   Notice the CU. The default is 1. The maximum is 64.

1. In Tags, specify a tag "CreatedBy" with your name and email address as the Value.
1. Create for the Overview Deployment

   ### Purview Governance Portal

1. Enter the Purview Portal:

   https://web.purview.azure.com/

1. Select the Directory and Purview Account (just created) for the Data catalog view.
1. Expand the left menu

   * Data Catalog
   * Data Map
   * Data estate insights
   * Data Policies
   
   Not shown:
   * Data Sources
   * Data Lineage
   * Data Protection
   * Data Classification
   * Data Discovery
   * Data Governance
   <br /><br />

1. View Microsoft Purview overview at
   https://go.microsoft.com/fwlink/?linkid=2148717

   Get Started at
   https://go.microsoft.com/fwlink/?linkid=2149760

   Documentation at:
   https://go.microsoft.com/fwlink/?linkid=2148916


1. Based on "Get Started" at
   https://go.microsoft.com/fwlink/?linkid=2149760


   ### Purview Risk and Compliance

1. Enter the Compliance Portal:

   https://compliance.microsoft.com/

   ### End-to-End

   https://learn.microsoft.com/en-us/training/modules/building-end-to-end-data-governance-master-data-stack-with-microsoft-purview-cluedin/
   in 2 hr 38 min - Build an end to end data governance and master data management stack with Microsoft Purview and CluedIn


   ### Security Copilot

Microsoft's Security Copilot makes use of (Language Model Logics) to detect anomalies in logs.

   * https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview
   * https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-security-copilot?rtc=1
   * https://www.microsoft.com/en-us/security/blog/2023/11/08/insights-from-microsoft-security-copilot-early-adopters/
   <br /><br />

https://www.microsoft.com/en-us/security/blog/

<a target="_blank" href="https://clouddamcdnprodep.azureedge.net/gdc/gdcieULMS/original">PDF: Crash Course</a>

https://www.microsoft.com/en-us/security/blog/2022/03/31/3-strategies-to-launch-an-effective-data-governance-plan/



## Priva (Privacy)

https://learn.microsoft.com/en-us/privacy/priva/priva-overview

* European Union's General Data Protection Regulation (GDPR)
* California Consumer Privacy Act (CCPA)


<hr />

## DAX Studio

Among https://www.sqlbi.com/tools/

DAX Studio is an open-sourced free IDE that provides an Object Browser, query editing and execution, formula and measure editing, syntax highlighting and formatting, integrated tracing, and query execution breakdowns
to write, execute, and analyze DAX queries in Power BI Designer, Power Pivot for Excel, and Analysis Services Tabular.

Use Power BI Desktop to explore the Adventureworks database at
https://daxstudio.org/docs/tutorials/writing-dax-queries/
using these sample commands:

The syntax of DAX Queries are described by Microsoft at
https://learn.microsoft.com/en-us/dax/dax-queries

<pre>[DEFINE 
    (
     (MEASURE <em>table name</em>[<em>measure name</em>] = <em>scalar expression</em>) | 
     (VAR <em>var name</em> = <em>table or scalar expression</em>) |
     (TABLE <em>table name</em> = <em>table expression</em>) | 
     (COLUMN <em>table name</em>[<column name>] = <em>scalar expression</em>) | 
    ) + 
]
(EVALUATE
    'Internet Sales'
ORDER BY
    'Internet Sales'[Sales Order Number]
START AT "SO7000") +
</pre>

To return the calculated total sales for years 2013 and 2014, and combined calculated total sales for years 2013 and 2014, as a table. The measure in the DEFINE statement, Internet Total Sales, is used in both Total Sales and Combined Years Total Sales expressions.

<pre>DEFINE
    MEASURE 'Internet Sales'[Internet Total Sales] =
        SUM ( 'Internet Sales'[Sales Amount] )
&nbsp;
EVALUATE
SUMMARIZECOLUMNS (
    'Date'[Calendar Year],
    TREATAS (
        {
            2013,
            2014
        },
        'Date'[Calendar Year]
    ),
    "Total Sales", [Internet Total Sales],
    "Combined Years Total Sales",
        CALCULATE (
            [Internet Total Sales],
            ALLSELECTED ( 'Date'[Calendar Year] )
        )
)
ORDER BY [Calendar Year]
</pre>

References:
   * https://hevodata.com/learn/dax-studio/
   <br /><br />


<hr />

## User Communities

https://www.reddit.com/r/MicrosoftFabric/comments/14iuplv/azure_data_factory_vs_data_pipelines/

1. Get a Microsoft Tech Community ID at <a target="_blank" href="https://techcommunity.microsoft.com/">https://techcommunity.microsoft.com</a>

   https://community.fabric.microsoft.com/

   https://powerusers.microsoft.com/

   Azure Data Community at
   https://www.microsoft.com/en-us/sql-server/community?activetab=pivot:sqlservertab
   has several sub-commmunity pages.

   https://www.meetup.com/pro/azuretechgroups/ managed according to 
   https://developer.microsoft.com/en-us/azure-tech-groups/

   Azure Data Tech Groups at
   https://www.meetup.com/pro/azuredatatechgroups/
   https://www.microsoft.com/en-us/sql-server/community?activetab=pivot:sqlservertab

   https://passdatacommunitysummit.com (Nov 14-17 2023 Seattle)

   Outside of Microsoft:

   https://live360events.com/Events/Orlando-2023/Home.aspx



<hr />

## Resources

## More #

This is one of a series about cloud computing:

{% include cloud_links.html %}
