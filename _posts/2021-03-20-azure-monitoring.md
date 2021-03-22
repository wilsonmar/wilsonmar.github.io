---
layout: post
title: "Azure Monitoring"
excerpt: "How to get logs and alerts"
tags: [microsoft, SIEM, monitoring]
date: "2021-03-20"
file: "azure-monitoring"
image:
# feature: pic green matrix hallway 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14623876/07afd066-0593-11e6-933a-2e596511ac67.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


There are several Azure services related to monitoring:
   * <a href="#Monitor">Azure Monitor</a>
   * <a href="#Azure_Sentinel">Azure Sentinel (SIEM)</a>
   * <a href="#Security_Center">Azure Security Center</a>
   * <a href="#AppInsights">Azure Application Insights</a>
   * <a href="#Event_Hubs">Azure Event Hubs</a>
   <br /><br />


<a name="Monitor"></a>

## Azure Monitor

1. Click on "Monitor" menu item among FAVORITES by default.

   You can return to this page by clicking "Overview" in the Monitor menu.

1. Click the "What's new" tab.

   PROTIP: These can be viewed at <a target="_blank" href="https://aka.ms/AzMonUpdates">https://aka.ms/AzMonUpdates - Azure Monitoring Updates</a>

   Between new product announcements occur in March each year at Microsoft's Ignite conference, Kayode Prince <a target="_blank" href="https://techcommunity.microsoft.com/t5/tag/CustomerConnections/tg-p/board-id/AzureMonitor">videos</a>


   <a target="_blank" href="https://www.youtube.com/watch?v=eSutaPE80PM">VIDEO</a> What is Azure Monitor? <em>from Microsoft:</em>
   <a target="_blank" href="https://user-images.githubusercontent.com/300046/111892248-4f78ae80-89bf-11eb-8ba0-f934dc3314cc.png"><img alt="az-mon-hybrid-1534x787" width="640" src="https://user-images.githubusercontent.com/300046/111892248-4f78ae80-89bf-11eb-8ba0-f934dc3314cc.png"></a>

* PROTIP: Azure Monitor collects fundamental types of data: 
   * metrics and 
   * <a href="##Logs">logs</a>
   * Service Health are also metrics.
   <br /><br />

* <strong>Insights</strong> are elicited from:
   * Applications
   * Virtual Machines (IaaS) which uses the Azure Diagnostics Extension 
   * Storage accounts
   * Containers
   * Networks

   * Azure Cosmos DB
   * Key Vaults
   * Azure Cache for Redis
   * Insights Hub
   <br /><br />

   ??? from custom sources

2. To <strong>Analyze</strong>:

   * Metrics Explorer analyzes collected metrics on a chart and compare metrics from different resources. 
   * <a href="#Log_Analytics">Log Analytics</a>
   * Export: route Metrics to Logs to analyze data in Azure Monitor Metrics together with data in Azure Monitor Logs and to store metric values for longer than 93 days. 
   <br /><br />

3. To <strong>Visualize</strong>:

   * pin a chart from metrics explorer to an <a href="#Dashboard">Azure Dashboard</a>. Export the results of a query to Grafana to leverage its dashboarding and combined with other data sources. 
   <br /><br />

4. To <strong>Respond</strong>: 
   * in <strong>Alerts</strong>, configure metric alert rules to send notifications or takes automated action when some metric value crosses a threshold. 
   * use Autoscale to increase or decrease resources based on a metric value crossing a threshold. Automate!
   * Action Groups.
   <br /><br />

5. To <strong>Integrate</strong>:
   * Stream Metrics to an <a href="#Event_Hubs">Event Hub</a> to route them to external systems.
   * Logic apps
   * Ingest & Export APIs
   <br /><br />

Metric values can be accessed:
   * from a command line using PowerShell cmdlets
   * from custom application using REST API. 
   * from a command line using CLI.
   <br /><br />

Also, archive performance / health history of resources for compliance, auditing, or offline reporting.

??? The agent for Linux and Windows isn't only for connecting to Azure Monitor, it also supports 
Azure Automation hosts the Hybrid Runbook worker role and other services such as Change Tracking, Update Management, and Azure Security Center.


<a name="Logs"></a>

### Logs

Logs are organized into <strong>records</strong>. Each type of record have different sets of <strong>properties</strong>. Logs typically contain text data with detailed descriptions that contain numeric values. 

Logs differ from metrics in that their record structure can vary and are often not collected at regular intervals. Applications can create custom logs by using the structure each needs.

A common type of log entry are <strong>events</strong> collected sporadically. 
Events created by an application or service typically include enough information to provide complete context on their own. For example, an event can indicate that a particular resource was created or modified, a new host started in response to increased traffic, or an error was detected in an application.

Telemetry such as events and traces are stored as logs in addition to performance data so that thet can all be combined for analysis.

1. From the Azure Portal menu, select "Monitor".
1. PROTIP: Click the "<<" icon above the Portal menu to make room.

1. Click "Logs" in the Log Queries menu.
1. PROTIP: Click the "<<" icon above the Monitor menu to make room.

   Observe that specific log queries (to run) on the right are grouped according to the left menu: Access -> ACCESS, Activity log -> ACTIVITY LOG, etc.

1. Click to open the Topics menu, which groups specific log queries differently (in 4 dimensions):
   * Category (of architecture)
   * Resource Type
   * Solution
   * Topic
   <br /><br />

1. Click "Community Git repo" on the upper-right for a new browser tab showing:

   <a target="_blank" href="
   https://github.com/microsoft/AzureMonitorCommunity">
   https://github.com/microsoft/AzureMonitorCommunity</a>

   <strong>Workbooks</strong> combine multiple sets of data in an interactive report (visualization).

   Folders in the repo have different items than in groupings Portal GUI:

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th>Same</th><th>In Portal GUI</th><th>In repo</th></tr>
   <tr valign="top"><td>
      * Solution(s) - <em>see comparion table below</em>
      </td><td>
      * Category (of architecture)<br />
      * Resource Type<br />
      * Solution<br />
      * Topic
      </td><td>
      * Azure Services<br />
      * Scenarios (How to's)<br />
      * Solutions
   </td></tr></table>
   
   Solution(s):
   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th>Same</th><th>In Portal GUI</th><th>In repo</th></tr>
   <tr valign="top"><td>
      * Change Tracking<br />
      * ContainerInsights<br />
      * LogManagement<br />
      </td><td>
      * Active Directory health check<br />
      * Azure Monitor for VMs<br />
      * Network Performance Monitor<br />
      * Security and Audit<br />
      * SecurityCenterFree<br />
      * ServiceMap<br />
      * Update Management<br />
      * Custom Logs<br />
      * Functions<br />
      </td><td>
      * ADAAssessment<br />
      * DNSAnalytics<br />
      * LogicAppB2B<br />
      * SAP-SCP-Monitoring<br />
      * SQLAssessment<br />
      * SecurityInsights<br />
      * ServiceDesk<br />
      * SurfaceHub<br />
      * WaaSUpdateInsights<br />
      * WireData2<br />
      </td></tr>
   </table>

1. In the repo README file, click "Log Analytics Demo Enviornment" to open a new Portal tab:

   <a target="_blank" href="
   https://portal.loganalytics.io/demo">
   https://portal.loganalytics.io/demo</a>

1. Click "Query explorer" tab at the right.
1. Expand "favorites":

   * All Syslog records with errors
   * Available memory (MB) per hour for computers that are named "Contoso*"
   * Find out which computers haven't sent any data in the past 12 hours
   * Security events count by Computer during the last 12 hours
   * See the stream of data collected in the last 24 hour in intervals of one hour
   * Usage data volume per data type
   * Which computers sent a heartbeat in the last hour, and when they last sent it
   <br /><br />


<a name="Log_Analytics"></a>

### Log Analytics (LA)

VIDEO: https://youtu.be/T2Vpi6ph8ck

VIDEO: <a target="_blank" href="https://www.youtube.com/watch?v=-aMecR2Nrfc&list=PLLasX02E8BPCCsHzNLJjcElCwF52rnh6t">How to get started with Azure Monitor Log Analytics</a>

![azure-log-analytics-711x306-35708](https://user-images.githubusercontent.com/300046/56087622-20994b80-5e2c-11e9-928d-d4d3b90a92bb.jpg)

Log Analytics is the primary tool in the Azure portal for writing log queries and interactively analyzing their results. Even if a log query is used elsewhere in Azure Monitor, you'll typically write and test the query first using Log Analytics.

How you start Log Analytics within Azure Portal limits the <strong>scope of data</strong> available: ???
   * From Log Analytics workspaces menu
   * From an Application Insights application Overview page, select "Analytics". 
   * From an Azure resource menu, select "Logs".
   <br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=2h24m40s">VIDEO</a>

TASK: Connect Activity Logs from various Subscriptions to a Azure Montitor Logs (prev. aka Log Analytics) for up to 90 days.


1. From the "Monitor" menu, select "Logs" for "Log Analytics".

   Log Analytics monitors cloud and on-premises environments
   (to maintain availability and performance).

* Azure Monitor (pane of glass for monitoring on Azure), 
* Azure Log Analytics (log ingestion and IaaS monitoring), and
* Application Insights (application performance monitoring including availability, performance, and exception information)
<br /><br />

1. Click Monitor "Usage and estimated costs" : https://portal.loganalytics.io/demo


   ??? In each workspace, Log Analytics collects data from connected sources by configuring data sources and adding solutions to your subscription. ???

   Each workspace has its own data repository and configuration, and data sources and solutions are configured to store their data in a particular workspace. 

   A Log Analytics workspace collects data from:
   * Azure resources under a subscription
   * On-premises computers monitored by System Center Operations Manager
   * Configuration Manager Device collections
   * Azure storage Diagnostics log data
   <br /><br />

   Data sources and solutions each create different record types, each with its own set of properties. But you can still analyze sources and solutions together in queries to the workspace. This capability allows you to use the same tools and methods to work with a variety of data collected by a variety of sources.



## Kusto query language (KQL)

Kusto is named after pioneering Oceanographer Jacque Custou (pronounced "Kusto").
Like the language, he dove deep into a vast ocean for new insights.

The language is read-only, of up to 5 GB.

References:

   * 4 hr VIDEO COURSE: <a target="_blank" href="https://www.pluralsight.com/courses/kusto-query-language-kql-from-scratch" title="20 Jun 2018">
   Kusto Query Language (KQL) from scratch</a>
   by Robert Cain

   * 2.45 hr VIDEO COURSE: <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-data-exploring/table-of-contents" title="12 Sep 2019">
   Exploring Data in Microsoft Azure Using Kusto Query Language and Azure Data Explorer</a>
   by Neeraj Kumar (@mstechtrainings)
   <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=d8b7a63f-4f04-4df6-895d-7441148d65c1">makes use of NOAA's Storm Events Database</a>.
   <br /><br />

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=5d02bb1a-8e72-4e31-9955-e6f34dc7a37d">VIDEO</a> 
1. Copy and paste <a target="_blank" href="https://aka.ms/LADemo">https://aka.ms/LADemo</a>

   Although it no longer goes to portal.loganalytics.io, demo data does appear.

1. Click "Query explorer" tab at the right.
1. Expand "Saved Queries"
1. Double-click on "Pluralsight" to expand the category.
1. Click to open "m2-table-80-percent".

   OBSERVE: Clicking completely replaces the existing KQL entry, without needing to clear it first.

   <tt>//</tt> precede all comments in code.

1. Highlight a query, click blue "Run" or hold down Shift and press Enter.

   CAUTION: "No result" will be returned if there is no data.

   "Perf" is the table name to search in. This table has these fields visible:

   TenantId | Computer | ObjectName | ObjectName | CounterName | InstanceName

1. To see more columns, drag the horizonal bar or on the Touchpad move two fingers to the left:

   CounterValue | CounterPath | StandardDeviation | Type | 

   _ResourceID | TenantID | SourceSystem | MG

1. Set the Time Frame or set in the script text:

   <pre>| where TimeGenerated >= ago(1h)</pre>

   PROTIP: Several where statements can be stacked.


   ### Operators

1. For operators, click on the KQL query text area and press <strong>command+Enter</strong>:

   * where - filter
   * count
   * extend - creates a calculated column in the result set (before project)
   * join
   * limit
   * lookup
   * order
   * project - select a subset of columns (instead of all columns from table)
   * project-away - remove column
   <br /><br />

1. To scroll for more, mouse over the list and slide two-fingers on the Mac Touchpad:

   * sort
   * summarize
   * search

   * distinct - to not repeat values shown
   * make-series
   * mv-apply
   * mv-expand
   * take 5  // return 5 records
   * top 20  // rows
   * top-nested
   ...
   <br /><br />

   The Pluralsight video covers search, where, take, count, summarize, extend, project, distinct.

   Examples to limit too much being returned (and wasting time):

   <pre>| search kind=case_sensitive "memory"</pre>

   <pre>| search in (Perf, Event, Alert) "Contoso"</pre>

1. Use colon to search text wildcard:

   <pre>| search CounterName:"MBytes"</pre>

1. Limit column:

   <pre>| search * starswith "Bytes"</pre>

   <pre>| search * endswith "Bytes"</pre>

   <pre>| search "Free*Bytes" // Any that Begins with free or ends with bytes
   </pre>

   <pre>| search InstanceName matches regex "[A-Z]:*"


1. Click "m3-demo-scalar" explained by <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=039ed497-00e7-4257-9805-5728aa4e6f4d">this VIDEO</a> covering Scalar Operators:

   print, now() UTC, ago(-7d), sort by asc, extract, parse, datetime, Timespan Artithmetic, startof..., endof..., between, todynamic, format_datetime, format_timespan, datetime_aart, case, iif, isempty/isnull, split, String Operators, strcat

1. Click "m4-demo-advanced-aggregations" explained by <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=a0870edf-78da-4ffe-b470-9f31517a3db5">this VIDEO</a> 

   * summarize arg_max/arg_min( column ), 
   * makelist - flaten a hierarchy to a JSON array, allowing dup. values
   * makeset  - flaten a hierarchy to a JSON array, removing dup. values

   For a list of PCs with low disk space:

   <pre>Perf
| where CounterName == "% Free Space"
|   and CounterValue <= 30
| summarize Computers = makeset(Computer)
   </pre>

   * mvexpand, percentiles, dcount (distinct count, accuracy), dcountif, countif, pivot, top-nested, max/min, sum/sumif, any

   ### Datasets

1. Click "m5-demo-working-with-datasets" explained by <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=5d6c27dc-834d-4794-a203-9681758fa4dc">this VIDEO</a> 

   * let, join (tables), union (combine) with source, kind=outer 
   * datatable, prev/next, toscalar, row_cumsum, materialize

   ### Time Series

1. Click "m6-demo-time-series" explained by <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=6ba4e6b9-8e5e-4911-a2be-04df187df02e">this VIDEO</a> 

   ### Machine Learning

1. Click "m7-data-machine-learning" explained by <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=2bcae43f-203d-4d5d-8a79-64ac54f0ded2">this VIDEO</a> Machine Learning

   * evaulate basket(threshold) - for the most frequently appearing combination of attributes, given the threshold for minimum frequency (default 0.05 or 5%)
   * autocluster
   * evaulate diffpatterns(EventLevelName, 'Error', 'Warning') // splits dataset to identify differences as "Error" or "Warning". Use iif to flag metrics before and after the incident.
   * reduce by Computer with threshold = 0.6  // to determine pattern, with default threshold of 0.1.

   ### Exporting data to CSV

1. Click "m8-exporting-data" explained by <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=70eccae8-8e02-4131-9e00-ccc21bb0e753">this VIDEO</a> 

1. To export to CSV file, run query and click the export icon.
1. Select Export to CSV - all columns or display columns.
1. In the pop-up at the bottom, click Save As.
1. Specify the folder and file name.

   ### Run KSL in PowerBI Desktop

1. Copy the Query to your Clipboard.  
1. Download and install PowerBI Desktop from https://powerbi.microsoft.com/desktop 
1. Open PowerBI
1. In Home group, Get Data - Blank Query
1. Advanced Editor
1. Paste the query (command+V). Done runs the query.
1. Close and apply changes.
1. Create visualizations, etc. 


   ### KQL in Data Explorer

1. <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-data-explorer-advanced-query-capabilities/table-of-contents">VIDEO course Microsoft Azure Data Explorer - Advanced KQL</a> by Robert Cain.

1. Download and expand microsoft-azure-data-explorer-advanced-query-capabilities.zip to view folder module-05-performing-diagnostic-and-root-cause-analysis.

1. ??? Load into Azure


   covers <strong>functions</strong>, 

   <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=9790e3dd-61fe-4544-8a7a-002a2bea36b9">inline Python & R code</a> (converted to KQL string by highlighting then Ctrl+K & Ctrl+S). 

   Analyze data using geospatial analysis, 
  
   <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=4d63d73f-1f41-4633-8c37-23d707d8ef5f">Root Cause Analysis Diagnostics</a>
  
   clustering algorithms, 
   time series analysis.


   ### Exploring data using Kusto

1. <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-data-exploring">Exploring Data in Microsoft Azure Using Kusto Query Language and Azure Data Explorer</a>, download exercise file microsoft-azure-data-exploring.zip (to your Downloads folder) and unzip. In folder coursfiles, ??





<a name="MetricData"></a>

## Metrics (performance data)

Some metric data can be stored in Logs to combine them with other monitoring data for trending and other data analysis.


<a name="Dashboard"></a>

### Dashboard for Metrics

1. Click "Monitor" among Portal FAVORITES.
1. Click "Dashboard" at the top.

   Note Dashboard display resources.


<a name="AppInsights"></a>

### Application Insights

   * <a target="_blank" href="https://aka.ms/AIAnalyticsDemo">https://aka.ms/AIAnalyticsDemo</a>

VIDEO: https://youtu.be/o24f4HZRchE

App Insights have additional costs: https://portal.loganalytics.io/demo


## Diagnostics

Types of diagnostic logs:

   * Tenant logs come from tenant-level services such as Azure Active Directory (Azure AD) which exist outside Azure subscriptions and their resources.

   * Resource-level logs come from Azure services under a subscription's resources, such as rule counters by NSGs (Network Security Groups), Azure Key Vault audits, and storage accounts. Resource-level diagnostic logs provide insight into operations that were performed within that resource itself.


??? Diagnostic logs differ from activity logs . Activity logs provide insight into operations such as creating a VM or deleting a logic app, that Azure Resource Manager performed on resources in your subscription using. The activity log is a subscription-level log. 

??? These logs also differ from guest operating system (OS)–level diagnostic logs. Guest OS diagnostic logs are those collected by an agent running inside a VM or other supported resource type. Resource-level diagnostic logs require no agent and capture resource-specific data from the Azure platform itself, whereas guest OS–level diagnostic logs capture data from the OS and applications running on a VM.


<img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/manage-317-Monitor.svg" alt="Monitor">

Diagnostic Log Settings can be configured by:
   * Azure Portal GUI
   * PowerShell
   * Azure CLI
   * Rest API calls
   <br /><br />

Configuration:

   * Save Diagnostic logs to a storage account for auditing or manual inspection. Specify retention time (in days).

   * Stream Diagnostic logs to <a href="#Event_Hubs">Event Hubs</a> for ingestion by a third-party service or custom analytics solution, such as Power BI. An event hub is created in the namespace for each log category you enable. A diagnostic log category is a type of log that a resource may collect.

   * Analyze them with Azure Monitor, so they are immediately written to Azure Monitor with no need to first write the data to storage.

??? Logs are streamed to:
   * Azure Storage
   * Log Analytics workspaces
   * Azure Monitor Logs (previously called "").
   * <a href="#Event_Hubs">Event Hubs</a>
   * Export 
   <br /><br />

PowerShell:
Set-AZDiagnosticSetting -ResourceID $ -WorkspaceID $ -Categories $list -Enabled $true

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=4h37m45s">VIDEO</a>:
https://docs.microsoft.com/en-us/azure/virtual-machines/linux/tutorial-monitoring
Install Diagnostics extension -> Enable guest-level monitoring (into a storage account)

References:

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-resources-workloads-monitoring-update">Pluralsight: Monitoring Microsoft Azure Resources and Workloads</a> by Tim Warner

   * https://www.youtube.com/watch?v=zPvT6UBfB5E&t=34m10s


<a name="Alerts"></a>

## Alerts

<img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/manage-320-Alerts.svg" alt="Alerts">
<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=42m35s">VIDEO</a>

Based on:
   * Tests for web site availability
   * Metric values threshold for metric alerts
   * Log search values
   * Activity Log events
   * Health
   <br /><br />

Two places
   * Blade
   * Menu: alert
   <br /><br />

1. RESOURCE
1. CONDITION: Configure signal logic (124 signals) : Signal Type
   <img align="right" width="20" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-icons/Activity-Log.svg" alt="Activity Log icon">Activity Log
1. Monitor service: Administrative, etc.
1. Alert Level: All, Critical, Error, Warning, Informational, Verbose 
1. Status: Failed, Started, Succeeded
1. ACTION Group Type: REMEMBER sets of notification preferences -- <a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=1h1m9s">VIDEO</a>
   * Email/SMS/Push/Voice 
   * Azure Function
   * LogicApp
   * Webhook
   * ITSM
   * Automation Runbook
   <br /><br />

Emails from:
   * azure-noreply@microsoft.com
   * azureemail-noreply@microsoft.com
   * alerts-noreply@mail.windowsazure.com
   <br /><br />

Alerts can be Enabled or Disabled.

Severity Level 0 lowest, 4 highest

Application Insights


Learn Module: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/handle-transient-errors-in-your-app/">Handle transient errors in your app</a>

<a name="Event_Hubs"></a>

## Event Hubs

???

### Analyzing

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=53m39s">VIDEO</a>

* Analyze using Metrics Explorer
* Visualize
* Alert
* Automate using AutoScale
* Export
* Retrieve
* Archive

DDoS attacks

## Other

Within Azure Monitor using Azure Log Analytics,

Pipe:
<ul>
   <pre>Event | search "error" | take 10</pre>

   or

   <pre>search in (Event) "error"</pre>

   <pre>Heartbeat 
   | summarize LastHeartbeat-max(TimeGenerated) by Computer
   | where LastHeartbeat < ago(5h)
   </pre>
</ul>

CAUTION: Kusto language keywords are case-sensitive


## Cost Management and Billing

https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/migrate-285-Cost-Management-and-Billing.svg


https://uxbooth.com/articles/introduction-to-taxonomies

## Tags

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=1h29m14s">VIDEO</a>

https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources
Use tags to organize your Azure resources

   (Get-AzResourceGroup -Name examplegroup).tags


## RBAC

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=1h32m34s">VIDEO</a>


https://www.youtube.com/watch?v=Zr7LcSr6Ooo
What to use for monitoring your applications in Azure | Azure Friday


https://myownpicloud.wordpress.com/2021/02/23/monitor-aks-infrastructure-using-prometheus-and-grafana/



## References

<a target="_blank" href=https://www.youtube.com/watch?v=Zr7LcSr6Ooo">VIDEO</a>: "What to use for monitoring your applications in Azure"</a> by <a target="_blank" href="https://www.azurebarry.com/">Azure Barry</a> (Luijbregts)




<a name="Security_Center"></a>

### Security Center

<strong>Azure Security Center</strong> automatically collects, analyzes, and integrates log data from Azure resources; the network; and connected partner solutions, like firewall and endpoint protection solutions, to detect real threats and reduce false positives. 

Security Center lists prioritized security alerts to provide information needed to quickly investigate the problem and recommendations for attack remediation.

To stream collected monitor data to an external SIEM (Security Information and Event Management) solutions such as Azure Sentinel or Splunk.

Azure Security Center ??? through <a href="#Event_Hubs">Azure Event Hubs</a> - a streaming platform and event ingestion service that transforms and stores data by using any real-time analytics provider or batching/storage adapters. Use Event Hubs to stream log data from Azure Monitor to a SIEM tool.

Processed events that Azure Security Center produces are published to the <strong>Azure activity log</strong>, one of the log types available through Azure Monitor. Azure Monitor offers a consolidated pipeline for routing any of your monitoring data into a SIEM tool. This is done by streaming that data to an event hub, where it can then be pulled into a partner tool.This pipe uses the Azure Monitor single pipeline for getting access to the monitoring data from your Azure environment. This allows you to easily set up SIEMs and monitoring tools to consume the data. Currently, the exposed security data from Azure Security Center to a SIEM consists of security alerts."


??? Azure Security Center stores data that it collects in a Log Analytics workspace where it can be analyzed with other log data.

<a name="Azure_Sentinel"></a>

## Azure Sentinel (SIEM)

Custom alert rules were retired from Azure Security Center on June 30, 2019 so they can be in the new Azure Sentinel product.

Azure Sentinal competes with Splunk and others to provide a SIEM (Security Information and Event Management) solution that collects monitor data to provide a centralized analysis and visualization.

Sentinal is called a SOAR (Security Orchestration Automated Response) solution because ???

To on-board Azure Sentinel:

1. Enable Azure Sentinel

1. Define subscriptions handled by each playbook.

   A Sentinel <strong>playbook</strong> is a collection of procedures that can be run from Azure Sentinel in response to an alert. 

   A Sentinel playbook can handle several subscriptions at once.

2. Connect data sources. 

   Investigation graph for visualizing and traversing the connections between entities like users, assets, applications, or URLs and related activities like logins, data transfers, or application usage to rapidly understand the scope and impact of an incident.

   Azure Sentinel comes with a number of connectors for Microsoft solutions, available out of the box and providing real-time integration, including Microsoft Threat Protection solutions, Microsoft 365 sources, including Microsoft 365, Azure AD, Azure ATP, Microsoft Cloud App Security, etc.

   In addition, there are built-in connectors to the broader security ecosystem for non-Microsoft solutions. You can also use common event format, Syslog or REST-API to connect your data sources with Azure Sentinel.

1. Select from a gallery of <a href="#Dashboard">dashboards</a> to surface insights based on custom data.
1. Customize your dashboard.

   ??? Incident detailed information includes severity, summary of the number of entities involved, the raw events that triggered this incident, and the incident’s unique ID. 

1. Analyze alerts

   Alerts can be triggered by a single event, be based on a threshold, by correlating different datasets, or by using built-in machine learning algorithms.

   Azure Sentinal makes use of AI Machine Learning.

   Azure Sentinel has more than 100 built-in alert rules, or you can create your own.

   Microsoft's security researchers built the Azure Sentinel GitHub repository at <a target="_blank" href="https://github.com/Azure/Azure-Sentinel">https://github.com/Azure/Azure-Sentinel</a> to over 400 detection, exploratory, and hunting queries, plus Jupyter Notebooks samples and related Python libraries, playbooks samples, and parsers. 

1. Define a notebook.

   A notebook is a step-by-step playbook where one can walk through the steps of an investigation and hunt.

1. Assign owner to incidents.

   Sentinel built-in roles are reader, responder, and contributor.

   All incidents start as unassigned. Add comments so that other analysts will be able to understand what was investigated and what concerns are around the incident.

??? Azure Sentinel stores data from data sources into a Log Analytics workspace.

References:

MS LEARN: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/tm-threat-modeling-fundamentals/">Threat Modeling Fundamentals</a>:

   * READ: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/tm-introduction-to-threat-modeling/">Intro to Threat Modeling</a>


## Stay Up to Date

https://www.youtube.com/watch?v=LOjBMJqOp6Q
Azure Monitor: The essentials every admin should know
by KnowOps

https://www.youtube.com/watch?v=-aMecR2Nrfc&list=PLLasX02E8BPCCsHzNLJjcElCwF52rnh6t


* <a target="_blank" href="https://aka.ms/MonitoringDocs">Azure Monitoring Documentation</a>
* <a target="_blank" href="https://aka.ms/AzMonSkills">Useful Skills & courses</a>
* <a target="_blank" href="https://aka.ms/AzMonStories">Case Studies</a>

<a target="_blank" href="https://www.youtube.com/watch?v=-aMecR2Nrfc&list=PLLasX02E8BPCCsHzNLJjcElCwF52rnh6t&index=1">Microsoft's YouTube channel for Azure Monitoring</a>

VIDEO COURSE: <a target="_blank" href="https://www.pluralsight.com/courses/azure-iaas-monitoring-management-getting-started">Microsoft Azure IaaS Monitoring & Management</a>


## More on Azure #

This is one of a series on Azure:

{% include devops_links.html %}
