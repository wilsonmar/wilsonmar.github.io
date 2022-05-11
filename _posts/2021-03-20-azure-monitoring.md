---
layout: post
title: "Azure Monitoring"
excerpt: "How to get logs and metrics ingested and displayed with actionable alerts"
tags: [microsoft, SIEM, monitoring]
date: "2021-03-20"
file: "azure-monitoring"
image:
# az-monitoring-MSLEARN-1506x357
  feature: https://user-images.githubusercontent.com/300046/113497609-fc285500-94c2-11eb-9f48-38cb8dabc860.png
  credit: Microsoft Learn
  creditlink: https://docs.microsoft.com/en-us/learn/modules/design-monitoring-strategy-on-azure/2-full-stack-monitoring
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

{% include whatever.html %}

Several Azure services are related to all the monitoring happening within Azure:
   * <a href="#Monitor">Azure Monitor</a>
   
   * <a href="#Metrics_Explorer">Metrics Explorer</a> receives metrics
   * <a href="#Log_Analytics">Log Analytics</a> <a href="#LA_Workspaces">Workspaces</a> (LAW)

   * <a href="#Security_Center">Azure Security Center</a>
   * <a href="#Azure_Defender">Azure Defender</a>
   * <a href="#AppInsights">Azure Application Insights</a>
   * <a href="#Event_Hubs">Azure Event Hubs</a>
   * <a href="#Defender">Microsoft Defender</a>
   * <a href="#Azure_Sentinel">Azure Sentinel (SIEM like Splunk)</a> which also uses LAW.
   * <a href="#NPM">Azure Network Performance Monitor</a>
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-monitor/terminology">
Changes in terminology</a>

<a target="_blank" href="https://www.dynatrace.com/support/help/technology-support/cloud-platforms/microsoft-azure-services/set-up-integration-with-azure-monitor/">Dynatrace</a> (for additional price) provides comprehensive monitoring support for Azure services, by integration with both OneAgent and Azure Monitor.

References:

   <a target="_blank" href="https://azure.microsoft.com/en-au/pricing/details/monitor/">
   PRICING for monitoring</a>

   <a target="_blank" href="https://www.youtube.com/watch?v=Zr7LcSr6Ooo">VIDEO</a>: "What to use for monitoring your applications in Azure"</a> by <a target="_blank" href="https://www.azurebarry.com/">Azure Barry</a> (Luijbregts)

Issues to monitor for:
   * poor response times,
   * changing usage rates, 
   * exceptions,
   * security risks,
   * capacity limits,
   * suspicious activity.
   <br /><br />


## Service Health

1. In Portal GUI <a target="_blank" href="https://portal.azure.com/#blade/Microsoft_Azure_Health/AzureHealthBrowseBlade/serviceIssues">Service Health</a>
1. Health alerts, "+ Add Service health alert"
1. "Add Action Groups", Subscription, "+ Create action group"

   Action Types: 
   * Automation Runbook
   * Azure Function
   * ITSM
   * Logic App
   * Secure Webhook
   * Webhook
   <br /><br />


<a name="Monitor"></a>

## Azure Monitor

<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/monitor">PRICING</a>

1. The <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-monitor/overview">Azure Monitor service home screen is at https://docs.microsoft.com/en-us/azure/azure-monitor/overview</a>

1. Get to <a target="_blank" href="https://portal.azure.com/#blade/Microsoft_Azure_Monitoring/AzureMonitoringBrowseBlade/overview">Monitor</a> service from the Home menu, Search, or Favorites.

   You can return to this page by clicking "Overview" in the Monitor menu.

1. Click the "What's new" tab.

   PROTIP: These can be viewed at <a target="_blank" href="https://aka.ms/AzMonUpdates">https://aka.ms/AzMonUpdates - Azure Monitoring Updates</a>

   Between new product announcements occur in March each year at Microsoft's Ignite conference, Kayode Prince <a target="_blank" href="https://techcommunity.microsoft.com/t5/tag/CustomerConnections/tg-p/board-id/AzureMonitor">videos about Azure Monitor</a>.

   ### Theoretical arrangement

   <a target="_blank" href="https://www.youtube.com/watch?v=eSutaPE80PM">VIDEO</a> What is Azure Monitor? <em>from Microsoft:</em>
   <a target="_blank" href="https://user-images.githubusercontent.com/300046/111892248-4f78ae80-89bf-11eb-8ba0-f934dc3314cc.png"><img alt="az-mon-hybrid-1534x787" width="640" src="https://user-images.githubusercontent.com/300046/111892248-4f78ae80-89bf-11eb-8ba0-f934dc3314cc.png"></a>

   DEFINITION: Azure Monitor collects two fundamental types of data: 
   * <a href="##Logs">logs</a> and
   * metrics (which include <a href="#Service_Health">Service Health</a>)
   <br /><br />

   <strong>Insights</strong> are elicited from:
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

   Developers can code .NET Framework, Node.js, or Python to call the <strong>Data Collector API</strong> to send data to Azure Monitor from custom sources such as a web app, an Azure function, or a mobile app.

   

2. To <strong>Analyze</strong>:

   * Metrics Explorer analyzes collected metrics on a chart and compare metrics from different resources. 
   * <a href="#Log_Analytics">Log Analytics</a>
   * Export: route Metrics to Logs to analyze data in Azure Monitor Metrics together with data in Azure Monitor Logs and to store metric values for longer than 93 days. 
   <br /><br />

3. To <strong>Visualize</strong>:

   * pin a chart from metrics explorer to an <a href="#Dashboard">Azure Dashboard</a>. Export the results of a query to Grafana to leverage its dashboarding and combined with other data sources. 
   <a target="_blank" href="https://www.youtube.com/watch?v=XS2b_rxkwMY" title="How to create dashboards with Azure Monitor data">VIDEO</a>
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

## Logs

<a name="LogStreaming"></a>

## Live Log Streaming

1. Start the log streaming service to show a duplicate of what is saved to log files for a <strong>single app instance</strong>. So it's only good for initial debugging, to quick feedback on server issues.

   <pre>az webapp log tail --name $app_name --resource-group $resource_group_name
   </pre>

1. To stop viewing live logs, press Ctrl+C.


<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-infrastructure-with-azure-monitor-logs/4-exercise-create-log-queries">
HANDS-ON Exercise in Sandbox - Create basic Azure Monitor log queries to extract information from log data</a>

1. https://portal.azure.com/#blade/Microsoft_Azure_Monitoring_Logs/DemoLogsBlade?azure-portal=true
1. Type a KQL to take the last 10 records from SecurityEvent logs. Click Run:

   <pre>SecurityEvent
    | take 10
   </pre>

   Logs are organized into <strong>records</strong>. Each type of record have different sets of <strong>properties</strong>. Logs typically contain text data with detailed descriptions that contain numeric values. 

   * Time Generated is for the UTC time zone
   * Account
   * Account Type is Machine or User
   * Computer
   * Event Source Name
   * Channel: "Security","Microsoft-Windows-AppLocker/..."
   * Task
   * Level: "4", "8", "16"
   * EventData
   * EventID
   * Activity
   * AuthenticationPackageName
   * CommandLine
   * ElevatedToken
   * FileHash
   * FilePath
   * Fqbn (Fully qualified b name)
   * ImpersonationLevel "%%1833" is for English
   * IpAddress
   * IpPort "58710"
   <br /><br />

   Logs differ from metrics in that their record structure can vary and are often not collected at regular intervals. Applications can create custom logs by using the structure each needs.

1. Look at <strong>events</strong> collected sporadically. 

   <pre>Event
| where EventLog == "Application"
| where TimeGenerated > ago(24h)
   </pre>

   Events created by an application or service typically include enough information to provide complete context on their own. For example, an event can indicate that a particular resource was created or modified, a new host started in response to increased traffic, or an error was detected in an application.
   
   ### Heartbeats

1. Display heartbeat events generated by computers, rendered as a bar chart each week (for the last three weeks):

   <pre>Heartbeat
    | where TimeGenerated >= startofweek(ago(21d))
    | summarize dcount(Computer) by endofweek(TimeGenerated) | render barchart kind=default
    </pre>

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


   <a name="AzureWorkbooks"></a>

   ### Azure Workbooks

   <strong>Workbooks</strong> provide a flexible canvas for data analysis.
   It combines multiple sources/sets of data in an interactive report (visualization).
   * Logs
   * Metrics
   * <a href="#ResourceGraph">Azure Resource Graph</a>
   * Alerts
   * Workload health
   * Azure Resource Health
   * Azure Data Explorer
   <br /><br />

   See the Gallery: 

   Workbooks support visualization types: Text, Charts, Grids, Tiles, Trees, Graphs

   Start with a template.


   ### Azure App Insights

   When an app is connected

   installs an instrumentation package in your app 

   instrumentation key

   Application Insights Dashboard

   SDK analyzes your app for a typology, to identify connection to resources.

   Tracks availability of app



   <a name="KQL_folders"></a>

   ### KQL folders

   Folders in the repo have different items than in groupings Portal GUI:

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th>Same</th><th>In Portal GUI</th><th>In repo</th></tr>
   <tr valign="top"><td>
      * Solution(s) - <em>see comparion table below</em>
      </td><td>
      * Category <em>(of architecture)</em><br />
      * Resource Type<br />
      * Solution<br />
      * Topic
      </td><td>
      * Azure Services<br />
      * Scenarios <em>(How to's)</em><br />
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

1. In the repo README file, click "Log Analytics Demo environment" to open a new Portal tab:

   <a target="_blank" href="
   https://portal.loganalytics.io/demo">
   https://portal.loganalytics.io/demo</a>

1. Click "Query explorer" tab at the right.
1. Expand "Solution Queries":

   * Active Directory Health Check
   * Alert Management
   * Antimalware Assessment
   * Change Tracking
   * Security and Audit
   * SQL Health Check
   * Update Management
   * Wire data
   <br /><br />

1. Expand "Favorites":

   * All Syslog records with errors
   * Available memory (MB) per hour for computers that are named "Contoso*"
   * Find out which computers haven't sent any data in the past 12 hours
   * Security events count by Computer during the last 12 hours
   * See the stream of data collected in the last 24 hour in intervals of one hour
   * Usage data volume per data type
   * Which computers sent a heartbeat in the last hour, and when they last sent it
   <br /><br />


https://jmespath.org/tutorial.html


<a name="Log_Analytics"></a>

### Log Analytics (LA)

<a target="_blank" href="https://youtu.be/T2Vpi6ph8ck">VIDEO</a>,
VIDEO: <a target="_blank" href="https://www.youtube.com/watch?v=-aMecR2Nrfc&list=PLLasX02E8BPCCsHzNLJjcElCwF52rnh6t">How to get started with Azure Monitor Log Analytics</a>

Log Analytics reads data sources to create virtual tables in <a href="#LA_Workspaces">workspaces</a> for use by <a href="#KQL">KQL queries</a>.

![azure-log-analytics-711x306-35708](https://user-images.githubusercontent.com/300046/56087622-20994b80-5e2c-11e9-928d-d4d3b90a92bb.jpg)

How you start Log Analytics within Azure Portal limits the <strong>scope of data</strong> available: ???
   * From Log Analytics workspaces menu
   * From an Application Insights application Overview page, select "Analytics". 
   * From an Azure resource menu, select "Logs".
   <br /><br />


<a name="LA_Workspaces"></a>

### LA Workspaces

1. In Portal search for "Log Analytics workspaces".
1. + Create (previously Add) an instance.
1. Specify the resource group you defined earlier.
1. Type name based on your Naming Guidelines.
1. Next: Pricing
1. Review + Create, Create.

   "OMS" (Operations Management Suite) is legacy branding which hasn't been updated.

1. Go to Resource.
1. Click "<<" at the top of the Portal menu to hide it for more room.
1. Scroll down to "Workspace Data Sources" -> Virtual machines.
1. Click a VM running.

### Log Analytics 

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


### Azure Traffic Analytics

https://medium.com/microsoftazure/automation-to-block-malicious-flows-detected-by-azure-traffic-analytics-b010298ba347

<a name="NPM"></a>

### Network Performance Monitor (NPM)

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=dfa3a215-bad0-4842-9822-a9c922112f53">VIDEO</a>:

1. "+ Create a resource".
1. In Search in the Marketplace, type enough of "Network Performance Monitor" to select it.  Notice it's "Solarwinds".
1. Click the blue Create.
1. Create new Resource Group and define a VM server.

   ...

1. Get connected to a valid workspace.
1. In a Log Analytics workspace, click General: Solutions.

1. Download Windows Agent into each subnet.

   ... synthetic transactions

1. The full list of columns in table "NetworkMonitoring" is

   <a target="_blank" href="
   https://docs.microsoft.com/en-us/azure/azure-monitor/reference/tables/NetworkMonitoring">
   https://docs.microsoft.com/en-us/azure/azure-monitor/reference/tables/NetworkMonitoring</a>


<a name="ResourceGraph"></a>

## Azure Resource Graph Explorer

1. Click on "All Resources" powers
1. Click "Open Query" at the top for a dialog to specify Kusto Query Language (KQL) for resource discovery and inventory.

   "Graph" refers to the relationship between resource entities, not visual graphics.

   


<a name="KQL"></a>

## Kusto Query Language (KQL)

See my <a target="_blank" href="https://wilsonmar.github.io/kql">Kusto</a>


<a name="MetricData"></a>

## Metrics (performance data)

Some metric data can be stored in Logs to combine them with other monitoring data for trending and other data analysis.

<a name="Service_Health"></a>

### Service Health metrics


<a name="Dashboard"></a>

### Dashboard for Metrics

1. Click "Monitor" among Portal FAVORITES.
1. Click "Dashboard" at the top.

   Note Dashboard display resources.


<a name="AppInsights"></a>

### Application Insights

   * <a target="_blank" href="https://aka.ms/AIAnalyticsDemo">https://aka.ms/AIAnalyticsDemo</a>

<a target="_blank" href="https://youtu.be/o24f4HZRchE">VIDEO</a>:

Application Insights is an "APM" (Application Performance Management) service:
it collects log, performance, and error data.

An Application Insights resource is created by default when a Function app is created.

https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview

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


Log alerts can come from any Azure resource: 
   * server logs, 
   * application server logs, 
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/capture-application-logs-app-service/2-enable-and-configure-app-service-application-logging">App logs</a> are configured in "Diagnostics logs" menu, the output of pre-production runtime trace statements in app code, such as console.log("Message") and console.error("Message") to STDOUT an STDERR from JavaScript on Windows. On Linux machines, only errors (not blobs) are sent. Logging to the file system will be automatically reset to Off after 12 hours.

   <pre>az webapp log config --application-logging true --level verbose \
      --name $app-name \
      --resource-group $resource-group-name
   </pre>

   There is currently no way to disable application logging by using Azure CLI commands; however, the following command resets file system logging to error-level only.

   az webapp log config --application-logging false --name &LT;app-name> --resource-group

   To view the current logging status for an app, use this command.

   az webapp log show --name &LT;app-name> --resource-group &LT;resource-group-name>

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/capture-application-logs-app-service/3-enable-and-configure-app-service-application-logging-using-the-azure-portal">
HANDS-ON LAB: Enable and Configure App Service Application Logging using the Azure Portal</a>

 gitRepo=https://github.com/MicrosoftDocs/mslearn-capture-application-logs-app-service
Based on:
   * Tests for web site availability
   * Metric values threshold for metric alerts
   * Log search values
   * Activity Log events
   * Health 
   * Heartbeats
   <br /><br />


<a name="Alerts"></a>

## Alerts

<img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-cds/manage-320-Alerts.svg" alt="Alerts">

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/incident-response-with-alerting-on-azure/4-exercise-metric-alerts">
FREE HANDS-ON LAB: Use metric alerts to alert on performance issues</a>
with an Azure environment resource-group shown as "MICROSOFT LEARN SANDBOX" subscription paid by Microsoft at <a target="_blank" href="https://portal.azure.com/learn.docs.microsoft.com">https://portal.azure.com/learn.docs.microsoft.com</a>.

1. In the Portal Azure Cloud Shell, define custom-data in a file which generates enough stress on the CPU (1=100% usage) which trigger an alert:

   <pre>cat &LT;&LT;EOF > stress-cpu1.txt
#cloud-config
package_upgrade: true
packages:
- stress
runcmd:
- sudo stress --cpu 1
EOF
   </pre>

1. Set up an Ubuntu Linux VM with a custom-data configuration file:

   <pre>az vm create \
    --resource-group learn-af57b7f1-6591-4a7d-8880-6f5db0c162d5 \
    --name vm1 \
    --image UbuntuLTS \
    --custom-data stress-cpu1.txt \
    --generate-ssh-keys
   </pre>

   Output:

   "SSH key files '/home/wilsonmar/.ssh/id_rsa' and '/home/wilsonmar/.ssh/id_rsa.pub' have been generated under ~/.ssh to allow SSH access to the VM. If using machines without permanent storage, back up your keys to a safe location.

1. In Monitoring Overview, "+ New alert rule".

1. Under Scope, select Select resource. The Select a resource pane appears.
   The Filter by subscription dropdown list should already be populated with Concierge Subscription. In the Filter by resource type enough of "Virtual machines" to select it.
   Select the vm1 virtual machine under resource group:

   learn-3328fcbd-8b2a-4c63-9407-dea2ec4db84e 

1. Select Done at the bottom of the pane.

1. Under the Condition (conditional logic) section, select Add condition for the Configure signal logic pane to appear. For Signal type, type "m" to select Metrics. For Monitor service, select All.

1. In the "Search by signal name", type  list of available signals will change depending on the selected signal type. From the list of available signal types, select Percentage CPU.

1. In the Configure signal logic pane, enter the following values for each setting.

   ... 

1. Select Done.

...


Every log alert has an associated search rule. The composition of these rules is:
   * Log query: Query that runs every time the alert rule fires.
   * Time period: Time range for the query.
   * Frequency: How often the query should run.
   * Threshold: Trigger point for an alert to be created.
   <br /><br />

Actions are:
   * Send an email.
   * Send an SMS message.
   * Create an Azure app push notification.
   * Make a voice call to a number.
   * Call an Azure function.
   * Trigger a logic app.
   * Send a notification to a webhook.
   * Create an ITSM ticket. (Service Now)
   * Use a runbook (to restart a VM, or scale a VM up or down).

-----------

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

Severity Level 0 lowest, 4 highest

Application Insights

Alerts can be Enabled or Disabled at any time.

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



<hr />

<a name="Security_Center"></a>

## Azure Security Center

<a target="_blank" href="https://azure.microsoft.com/en-us/services/security-center/"><strong>Azure Security Center</strong></a> is a <strong>CSPM</strong> (Cloud Security Posture Management) solution. It lists prioritized security alerts and recommendations for attack investigation and remediation. It summarizes a tenant's security posture with a "Secure Score" s based on the percentage of recommendations implemented.

DEFINITION: "Security posture" refers to cybersecurity policies and controls, as well as how well you can predict, prevent, and respond to security threats.

<a target="_blank" href="https://learning.oreilly.com/videos/new-microsoft-az-303/10009AZ303/10009AZ303-AZ303_130">VIDEO DEMO</a> 
<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/protect-against-security-threats-azure/2-protect-threats-security-center">LEARN</a>

Host recommendations: Every VM includes vulnerability assessment from Qualys.
   * OS security settings configuration rules
   * System security & critical updates missing
   * Endpoint protection recommendations
   * Disk encryption validation
   * Remediate vulnerabilities assessment
   * Threat detection
   <br /><br />

   Each can be exempted. 


   ### Install agent

   From the network; and connected partner solutions, like firewall and endpoint protection solutions, Security Center automatically collects, analyzes, and integrates log data from Azure resources to detect real threats and reduce false positives. 

1. Click "Getting Started" menu. Click "Install agent" for data collection on VMs.
1. Click "Install agents" button to install on all VMs.
1. "Pricing & settings" menu

   "Standard" tier includes threat protection, network hardening and VM EDR.

1. Scroll down to see each resource can be enabled or disabled for security.

   ![az-mon-sec-pricing](https://user-images.githubusercontent.com/300046/114303563-f6ff7300-9a8b-11eb-9686-d1ab6efcb5ec.png)

   Each machine is $15/month.

1. Data Collection

   By default, Azure Security Center stores data that it collects from agents in a <strong>Log Analytics workspace</strong> where it can be analyzed with other log data.

   Processed events that Azure Security Center produces are published to the <strong>Azure activity log</strong>, one of the log types available through Azure Monitor. 

1. "Continuous export"

   To stream log data from Azure Monitor to a SIEM tool (Azure Sentinel or Splunk), use <a href="#Event_Hubs">Azure Event Hubs</a> - a streaming platform and event ingestion service that transforms and stores data by using any real-time analytics provider or batching/storage adapters. 

   Azure Monitor offers a consolidated pipeline for routing any of your monitoring data into a SIEM tool. This is done by streaming that data to an event hub, where it can then be pulled into a partner tool. This pipe uses the Azure Monitor single pipeline for getting access to the monitoring data from your Azure environment. This allows you to easily set up SIEMs and monitoring tools to consume the data. Currently, the exposed security data from Azure Security Center to a SIEM consists of security alerts."

   Security Center "Adaptive network hardening" are recommendations about how NSGs should be locked down with remediation steps.

   Adaptive application controls which applications uses machine learning to alert about unauthorized applications that are running on its VMs, by creating exception rules for each resource group that holds the VMs.

   See code at https://github.com/ned1313/Monitor-Security-with-Azure-Security-Center


<a name="Azure_Defender"></a>

## Azure Defender CWPP

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/security-center/azure-defender">
Azure Defender</a> is Security Center's integrated Cloud Workload Protection Platform (CWPP).
In addition to the built-in policies, custom policies and initiatives can be added -- regulatory standards such as NIST and Azure CIS as well as the Azure Security Benchmark.

<a target="_blank" href="https://azure.microsoft.com/en-us/resources/videos/protect-your-cloud-workload-from-threats-using-azure-security-center">INTRO VIDEO</a> at Ignite 2019 by Yinon Costica (@c0stica), Director PM, Cloud Security Group.

Several 3rd-party vendors also provide CWPP with recommendations:
   * https://securityboulevard.com/2021/01/a-quick-look-into-cloud-workload-protection-platforms-cwpp/
   * https://start.paloaltonetworks.com/gartner-market-guide-cwpp.html
   * https://www.zscaler.com/resources/security-terms-glossary/what-is-gartner-cwpp
   * https://blog.aquasec.com/gartner-cloud-workload-protection-platforms
   * https://www.cloudvisory.com/cspm-cwpp-solution.html
   * https://www.optiv.com/cybersecurity-dictionary/cwpp-cloud-workload-protection-platform
   * https://www.mcafee.com/enterprise/en-us/security-awareness/cloud/what-is-a-cwpp.html
   <br /><br />

### CWPP

<strong>CWPP</strong> (Cloud Workload Protection Platform) 
aims to block the "Kill Chain" - see <a target="_blank" href="https://wilsonmar.github.com/cyber-security#Threats">my notes on Kill Chain</a>.

![az-mon-threats-1015x426](https://user-images.githubusercontent.com/300046/115615283-019be280-a2ac-11eb-8a76-0e20a28abbc6.png)

PROTIP: Don't set permissons for Local Admin on a laptop.

To protect containers in AKS:

![az-protect-container-mining-1786x847](https://user-images.githubusercontent.com/300046/115632168-66633700-a2c4-11eb-8803-32217c285cf9.png)

### Security Center social

<a target="_blank" href="https://techcommunity.microsoft.com/t5/azure-security-center/bd-p/AzureSecurityCenter">user Forum</a>, 
<a target="_blank" href="https://techcommunity.microsoft.com/t5/Azure-Security-Center/bg-p/AzureSecurityCenterBlog">Blog</a>, 
<a target="_blank" href="https://feedback.azure.com/forums/347535-azure-security-center">Feature suggestion</a>, 
<a target="_blank" href="https://docs.microsoft.com/en-us/azure/security-center/security-center-intro">documentation</a>, 
<a target="_blank" href="https://docs.microsoft.com/en-us/rest/api/securitycenter/">API documentation</a>

References:

   * https://docs.microsoft.com/en-us/azure/security-center/security-center-alerts-overview
   Security alerts and incidents in Azure Security CenterLearn how Azure Security Center generates security alerts and correlates them into incidents.docs.microsoft.com​[12:42 PM] Ken Lawson
    
   * https://docs.microsoft.com/en-us/azure/security-center/security-center-alerts-overview
   Security alerts and incidents in Azure Security CenterLearn how Azure Security Center generates security alerts and correlates them into incidents.docs.microsoft.com​[12:45 PM] Ken Lawson
    
   * https://docs.microsoft.com/en-us/azure/sentinel/create-incidents-from-alerts
   Create incidents from alerts in Azure SentinelLearn how to create incidents from alerts in Azure Sentinel.docs.microsoft.com​[12:46 PM] Ken Lawson
    
   * https://docs.microsoft.com/en-us/azure/logic-apps/quickstart-create-first-logic-app-workflow
   Quickstart - Create your first Logic Apps workflow - Azure portal - Azure Logic AppsBuild your first automated Logic Apps workflow in the Azure portal using this quickstart guide. Learn the basics of system integration and enterprise application integration (EAI) solutions in Logi...docs.microsoft.com​[12:>"X?51 PM] Ken Lawson
    

<a name="JIT"></a>

## Just-In-Time VM access 

   <a target="_blank" href="https://azure.microsoft.com/en-us/resources/videos/ignite-2019/manage-your-cloud-security-posture-and-monitor-compliance-with-azure-security-center/">VIDEO</a>:

To reduce the attack surface, protect network ports by opening network traffic to VMs only during time of need:

1. In Security Center, Configured tab, click the checkbox for a Virtual machine; 
1. Click "Request access" button.
1. Toggle On/Off and select amount in Time range to allow.

   <img width="858" alt="az-req-net-jit-1716x414" src="https://user-images.githubusercontent.com/300046/115629503-b2f84380-a2bf-11eb-870f-1843f4834ade.png">


<hr />

<a name="Azure_Sentinel"></a>

## Azure Sentinel (SIEM)

<a target="_blank" href="https://learning.oreilly.com/library/view/learn-azure-sentinel/9781838980924/">BOOK</a>:

DEPRECATION: Custom alert rules were retired from Azure Security Center on June 30, 2019 so they can be in the new Azure Sentinel product.

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/sentinel/overview">
Azure Sentinal</a> competes with Splunk and others to provide a SIEM (Security Information and Event Management) solution that collects monitor data to provide a centralized analysis and visualization for SOC (Security Operations Center).

Sentinal is called a SOAR (Security Orchestration Automated Response) solution because ???

Azure Sentinel stores data from data sources into a Log Analytics workspace.

<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/azure-sentinel/">Charges for Azure Sentinel are based on a fixed Capacity Reservation "commitment tiers"</a> (in Log Analytics), from $123 per day for increments of 100GB, with overage beyond $2.46 per GB-ingested. <a target="_blank" href="https://blog.johnjoyner.net/using-azure-sentinel-how-much-does-it-cost/">WestUS costs 30% more than EastUS</a>.

<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/azure-sentinal">PRICING</a> <a target="_blank" href="https://blog.johnjoyner.net/using-azure-sentinel-how-much-does-it-cost/">*</a>

To onboard Azure Sentinel:

1. Enable Azure Sentinel in Portal.

1. Define subscriptions handled by each playbook.

   A Sentinel <strong>playbook</strong> is a collection of procedures that can be run from Azure Sentinel in response to an alert. 
   Each Sentinel playbook can handle several subscriptions at once.

2. Connect data sources.

   Investigation graph for visualizing and traversing the connections between entities like users, assets, applications, or URLs and related activities like logins, data transfers, or application usage to rapidly understand the scope and impact of an incident.

   Azure Sentinel comes with a number of connectors for Microsoft solutions, available out of the box and providing real-time integration, including Microsoft Threat Protection solutions, Microsoft 365 sources, including Microsoft 365, Azure AD, Azure ATP, Microsoft Cloud App Security, etc.

   In addition, there are built-in connectors to the broader security ecosystem for non-Microsoft solutions. You can also use common event format, Syslog or REST-API to connect your data sources with Azure Sentinel.

   Microsoft's security researchers built the Azure Sentinel GitHub repository at <a target="_blank" href="https://github.com/Azure/Azure-Sentinel">https://github.com/Azure/Azure-Sentinel</a> to cover 400 detection, exploratory, and hunting queries, plus Jupyter Notebooks samples and related Python libraries, playbooks samples, and parsers. 

1. Select from a gallery of <a href="#Dashboard">dashboards</a> to surface insights based on custom data.
1. Customize your dashboard.

   ??? Incident detailed information includes severity, summary of the number of entities involved, the raw events that triggered this incident, and the incident’s unique ID. 

1. Analyze alerts

   Alerts can be triggered by a single event, be based on a threshold, by correlating different datasets, or by using built-in machine learning algorithms.

   Azure Sentinal makes use of AI Machine Learning.

   Azure Sentinel has more than 100 built-in alert rules, or you can create your own.

1. Define a notebook.

   A notebook is a step-by-step playbook where one can walk through the steps of an investigation and hunt.

1. Assign owner to incidents.

   Sentinel built-in roles are reader, responder, and contributor.

   All incidents start as unassigned. Add comments so that other analysts will be able to understand what was investigated and what concerns are around the incident.

Linking O365 to Log Analytics - https://docs.microsoft.com/en-us/azure/azure-monitor/insights/solution-office-365
Office 365 management solution in Azure - Azure MonitorThis article provides details on configuration and use of the Office 365 solution in Azure.  It includes detailed description of the Office 365 records created in Azure Monitor.docs.microsoft.com​
    
Linking O365 to Sentinel - https://docs.microsoft.com/en-us/azure/sentinel/connect-office-365
Connect Office 365 logs to Azure SentinelLearn to use the Office 365 log connector to bring in information about ongoing user and admin activities in Exchange, Teams, and SharePoint, including OneDrive.docs.microsoft.com​
    
https://techcommunity.microsoft.com/t5/azure-sentinel/best-practices-for-designing-an-azure-sentinel-or-azure-security/ba-p/832574
Best practices for designing an Azure Sentinel or Azure Security Center Log Analytics workspace  Note: alot has be updated since this article: we now have official guidelines in the documentation: Extend Azure Sentinel across workspaces and tenants. You may also want to review the Webinar on...techcommunity.microsoft.com​
    
https://techcommunity.microsoft.com/t5/azure-sentinel/become-an-azure-sentinel-ninja-the-complete-level-400-training/ba-p/1246310


References:

   * MS LEARN: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/tm-threat-modeling-fundamentals/">Threat Modeling Fundamentals</a>:

   * READ: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/tm-introduction-to-threat-modeling/">Intro to Threat Modeling</a>

   * BOOK <a target="_blank" href="https://learning.oreilly.com/library/view/learn-azure-sentinel/9781838980924">Learn Azure Sentinel</a>

   * https://learning.oreilly.com/library/view/microsoft-azure-sentinel/9780136485506

   * https://www.csoonline.com/article/2124604/what-is-siem-software-how-it-works-and-how-to-choose-the-right-tool.html

## Azure ML

The JuPyter notebooks link to an Azure ML workspace
​    
https://docs.microsoft.com/en-us/azure/machine-learning/how-to-run-jupyter-notebooks#:~:text=How%20to%20run%20Jupyter%20Notebooks%20in%20your%20workspace,experiment.%20...%205%20Change%20the%20notebook%20environment.
Run Jupyter notebooks in your workspace - Azure Machine LearningLearn how run a Jupyter notebook without leaving your workspace in Azure Machine Learning studio.docs.microsoft.com

<hr />

<a name="Defender"></a>

## Microsoft Defender

* Identity 
* Endpoint forensic analyzes communication patterns
* Cloud App Security (Caspia???) analyzes apps, conditional access proxies (DLP?). Was ATP 

<a target="_blank" href="https://security.microsoft.com/homepage">security.microsoft.com Office 365 Security Center</a>integrates "Microsoft Defender for Endpoint" and "Microsoft Defender for Office 365". It provides eXtended Detection and Response (XDR): incident management, automatic investigation and remediation, Microsoft Threat Experts, threat analytics, and cross-domain proactive hunting.
Phishing protection. Provides a <a target="_blank" href="https://security.microsoft.com/securescore">Secure Score summary metric</a>; email threat alert policies. 

Microsoft <strong>InTune</strong> policy engine manages Windows 10 & macOS client (device) security.
Includes  MDM (Mobile Device Management) can wipe entire device.
MAM (Application) with app allow/deny policies.

<a target="_blank" href="https://compliance.microsoft.com/homepage">
compliance.microsoft.com</a> has data classification and data connectors shown a Compliance Manager by Solution:
   * Catalog (of risks)
   * Audit (can go to 10 years with additional licensing)
   * Content search
   * Communication compliance (profanity, etc.) 
   * Data loss prevention (DLP) exfiltration, watermarkx 
   * Data subject requests
   * eDiscovery (hold)
   * Information governance
   * Information protection
   * Insider risk management
   * Records management
   <br /><br />

Privilege Access Management - task scope

Customer Lockbox in Office 365 to transfer files to Microsoft engineers.

Twitter <a target="_blank" href="https://twitter.com/MSThreatProtect">@MSThreatProtect (integrated SIEM and XDR)</a>, <a target="_blank" href="https://twitter.com/@MsftSecIntel">@MsftSecIntel (Microsoft Security Intelligence)</a>


## Stay Up to Date

From Microsoft:
* <a target="_blank" href="https://aka.ms/MonitoringDocs">Azure Monitoring Documentation</a>
* <a target="_blank" href="https://aka.ms/AzMonSkills">Useful Skills & courses</a>
* <a target="_blank" href="https://aka.ms/AzMonStories">Case Studies</a>
<br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=LOjBMJqOp6Q">
Azure Monitor: The essentials every admin should know</a>
by KnowOps

https://www.youtube.com/watch?v=-aMecR2Nrfc&list=PLLasX02E8BPCCsHzNLJjcElCwF52rnh6t

<a target="_blank" href="https://www.youtube.com/watch?v=-aMecR2Nrfc&list=PLLasX02E8BPCCsHzNLJjcElCwF52rnh6t&index=1">Microsoft's YouTube channel for Azure Monitoring</a>

VIDEO COURSE: <a target="_blank" href="https://www.pluralsight.com/courses/azure-iaas-monitoring-management-getting-started">Microsoft Azure IaaS Monitoring & Management</a>

SCOM (System Center Operations Manager) monitoring tool have management packs
for managing specific products

https://www.linkedin.com/learning/search?keywords=exam%20az-500%3A%20microsoft%20azure%20security%20technologies&u=3322

Monitor alerts - Actionable or noise happens..

Sev (Severity) levels:
Sev 0 = Critical<br />
Sev 1 = Error<br />
Sev 2 = Warning<br />
Sev 3 = Informational<br />
Sev 4 = Verbose


<a name="Metrics_Explorer"></a>

## Metrics Explorer 

Analyze collected data using Metrics Explorer for charting and visual correlation and Log Analytics for ad-hoc queries, trending, and pattern recognition. 

Azure Monitor allows you to manage and create alerts, notifications, and actions such as runbooks and autoscale based on metrics and logs. 

Integrate Azure Monitor with other tools using Event Hubs to export data or APIs for ingestion and export.


<a name="Metrics_Advisor"></a>

## Metrics Advisor

<a target="_blank" href="https://www.youtube.com/watch?v=2gsPEJFLigw">VIDEO</a>:
Metrics Advisor comes up with anomaly detection without you having to setup Machine Learning.


## Load Testing Azure

https://k6.io/blog/k6-as-alternative-for-azure-and-visual-studio-load-tests/



## References

HIGHLY RECOMMENDED: <a target="_blank" href="https://techcommunity.microsoft.com/t5/azure-security-center/become-an-azure-security-center-ninja/ba-p/1608761">LAB: Become an Azure Security Center Ninja</a>
by <a target="_blank" href="https://www.linkedin.com/in/yuridiogenes/">Yuri Diogenes</a>,
Principal Program Manager at C+AI Security CxE Team at Microsoft
   * Microsoft CxE (Compliance and E): Protect, Detect, Defend
   <br /><br />

https://docs.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/service-health-and-continuity

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/design-monitoring-strategy-on-azure/?">
LEARN: Design a holistic monitoring strategy on Azure</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-java/metricsadvisor-java-samples/">Azure Metrics Advisor client library samples for Java</a>


## Social

https://github.com/Azure/Azure-Security-Center
by Azure's largest customers contains best practices and tools 


## More on Azure #

This is one of a series on Azure:

{% include devops_links.html %}


User Defined Routes and NVA (Network V A)

contosofashions25127.azurewebsites.net

## Competitors

Alternatives to monitoring:

* Dynatrace
* New Relic
* Naggios
* Zabbix
<br /><br />


## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
