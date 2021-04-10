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


Several Azure services are related to all the monitoring happening within Azure:
   * <a href="#Monitor">Azure Monitor</a>
   * <a href="#Log_Analytics">Log Analytics</a> <a href="#LA_Workspaces">Workspaces</a>
   * <a href="#Security_Center">Azure Security Center</a>
   * <a href="#AppInsights">Azure Application Insights</a>
   * <a href="#Event_Hubs">Azure Event Hubs</a>
   * <a href="#Defender">Microsoft Defender</a>
   * <a href="#Metrics_Explorer">Metrics Explorer</a>
   * <a href="#Azure_Sentinel">Azure Sentinel (SIEM like Splunk)</a>
   * <a href="#NPM">Azure Network Performance Monitor</a>
   <br /><br />

Issues to monitor for:
   * poor response times,
   * changing usage rates, 
   * exceptions,
   * security risks,
   * capacity limits,
   * suspicious activity.
   <br /><br />


<a name="Monitor"></a>

## Azure Monitor

1. Click on "Monitor" menu item among FAVORITES by default.

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

   <strong>Workbooks</strong> combine multiple sets of data in an interactive report (visualization).


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

1. In the repo README file, click "Log Analytics Demo Enviornment" to open a new Portal tab:

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


<a name="KQL"></a>

## Kusto query language (KQL)


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

<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/azure-sentinel/">Charges are based on a fixed Capacity Reservation</a> (in Log Analytics), from $123 per day for increments of 100GB, with overage at $2.46 per GB-ingested. <a target="_blank" href="https://blog.johnjoyner.net/using-azure-sentinel-how-much-does-it-cost/">WestUS costs 30% more than EastUS</a>.

Azure Security Center ??? through <a href="#Event_Hubs">Azure Event Hubs</a> - a streaming platform and event ingestion service that transforms and stores data by using any real-time analytics provider or batching/storage adapters. Use Event Hubs to stream log data from Azure Monitor to a SIEM tool.

Processed events that Azure Security Center produces are published to the <strong>Azure activity log</strong>, one of the log types available through Azure Monitor. Azure Monitor offers a consolidated pipeline for routing any of your monitoring data into a SIEM tool. This is done by streaming that data to an event hub, where it can then be pulled into a partner tool.This pipe uses the Azure Monitor single pipeline for getting access to the monitoring data from your Azure environment. This allows you to easily set up SIEMs and monitoring tools to consume the data. Currently, the exposed security data from Azure Security Center to a SIEM consists of security alerts."

https://github.com/ned1313/Monitor-Security-with-Azure-Security-Center

??? Azure Security Center stores data that it collects in a Log Analytics workspace where it can be analyzed with other log data.


https://docs.microsoft.com/en-us/azure/security-center/security-center-alerts-overview
Security alerts and incidents in Azure Security CenterLearn how Azure Security Center generates security alerts and correlates them into incidents.docs.microsoft.com​[12:42 PM] Ken Lawson
    
https://docs.microsoft.com/en-us/azure/security-center/security-center-alerts-overview
Security alerts and incidents in Azure Security CenterLearn how Azure Security Center generates security alerts and correlates them into incidents.docs.microsoft.com​[12:45 PM] Ken Lawson
    
https://docs.microsoft.com/en-us/azure/sentinel/create-incidents-from-alerts
Create incidents from alerts in Azure SentinelLearn how to create incidents from alerts in Azure Sentinel.docs.microsoft.com​[12:46 PM] Ken Lawson
    
https://docs.microsoft.com/en-us/azure/logic-apps/quickstart-create-first-logic-app-workflow
Quickstart - Create your first Logic Apps workflow - Azure portal - Azure Logic AppsBuild your first automated Logic Apps workflow in the Azure portal using this quickstart guide. Learn the basics of system integration and enterprise application integration (EAI) solutions in Logi...docs.microsoft.com​[12:>"X?51 PM] Ken Lawson
    
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


<a name="Azure_Sentinel"></a>

## Azure Sentinel (SIEM)

DEPRECATION: Custom alert rules were retired from Azure Security Center on June 30, 2019 so they can be in the new Azure Sentinel product.

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/sentinel/overview">
Azure Sentinal</a> competes with Splunk and others to provide a SIEM (Security Information and Event Management) solution that collects monitor data to provide a centralized analysis and visualization for SOC (Security Operations Center).

Sentinal is called a SOAR (Security Orchestration Automated Response) solution because ???

??? Azure Sentinel stores data from data sources into a Log Analytics workspace.

<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/azure-sentinal">PRICING</a>
https://blog.johnjoyner.net/using-azure-sentinel-how-much-does-it-cost/

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


## Load Testing Azure

https://k6.io/blog/k6-as-alternative-for-azure-and-visual-studio-load-tests/



## References

https://docs.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/service-health-and-continuity

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/design-monitoring-strategy-on-azure/?">
LEARN: Design a holistic monitoring strategy on Azure</a>


## Social


## More on Azure #

This is one of a series on Azure:

{% include devops_links.html %}


User Defined Routes and NVA (Network V A)