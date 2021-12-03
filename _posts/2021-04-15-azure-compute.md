---
layout: post
title: "Azure Compute (within Microsoft's cloud)"
excerpt: "VMs, Scale Sets, App Services, Websites, Function Apps, Logic Apps, Docker Containers, AKS"
tags: [cloud, azure]
date: "2021-04-15"
file: "azure-compute"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/18188069/153fbcca-706c-11e6-983d-0783da57f75c.jpg
  credit: Microsoft Azure
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/azure-compute/">This</a> is the hands-on step-by-step tutorial I would give to a developer or administrator getting up and running compute on Azure cloud.

## Compute options

   * SaaS (Software as a Service): O365

   * PaaS (Platform as a Service) provides managed hosting environment: custom "Serverless" <a href="#LogicApps">Azure Logic Apps</a> for "orchestration" of 
   <a href="#Functions">Azure Functions</a>; Azure App Service; Container to run in Docker or K8s (AKS), a <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/app-service/static/">static SPA Web Apps</a> using Vue-based <a target="_blank" href="https://channel9.msdn.com/Blogs/One-Dev-Minute/What-is-Nuxtjs--One-Dev-Question?ocid=player">Nuxt.js</a>)

   * IaaS (Infrastructure as a Service): <a href="#VMs">Virtual Machines</a> (like AWS EC2) using VHD images and/or Azure Redis Cache server

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree">Decision chart from Microsoft</a>:
![az-compute-decision-696x546](https://user-images.githubusercontent.com/300046/120126250-ee1c4b00-c178-11eb-8a61-b8ca132f6863.png)
(<a target="_blank" title="az-compute-decision-988x614.png" href="https://user-images.githubusercontent.com/300046/120094178-2752ad80-c0dc-11eb-887a-22a5b4367ca6.png">Previous version</a>)

"HPC" = (High Performance Computing) workloads run on Batch (not interactive).

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th> <a href="#VMs">VMs</a>
   </th><th> <a href="#AzureBatch">Azure Batch</a>
   </th><th> <a href="#AppServices">App Svc.</a>
   </th><th> <a href="#Functions">Azure Functions</a>
   </th><th> <a href="#ContainerInstances" title="Azure Container Instances">ACI</a>
   </th><th> <a href="#ServiceFabric">Svc. Fabric</a>
   </th><th> <a href="#AKS" title="Azure Kubernetes Service (orchestrator)">AKS</a>
   </th></tr>
<tr align="center"><th colspan="7"> Load Balancer: </th></tr>
<tr valign="top"><td> ALB
   </td><td> ALB
   </td><td> Integrated
   </td><td> Integrated
   </td><td> No built-in
   </td><td> ALB
   </td><td> ALB/AG
   </td></tr>
<tr align="center"><th colspan="7"> Auto-scaling: </th></tr>
<tr valign="top"><td> <a href="#ScaleSets">Scale Sets</a>
   </td><td> None
   </td><td> Built-in
   </td><td> Built-in
   </td><td> None
   </td><td> <a href="#ScaleSets">Scale Sets</a>
   </td><td> Pod & cluster
   </td></tr>
<tr align="center"><th colspan="7"> Minimum # of nodes: </th></tr>
<tr valign="top"><td> 1
   </td><td> 1
   </td><td> 1
   </td><td> 1
   </td><td> Serverless
   </td><td> 5
   </td><td> 3
   </td></tr>
<tr align="center"><th colspan="7"> Default scale limits: </th></tr>
<tr valign="top"><td> 600 custom, 1000 platform image nodes per scale set
   </td><td> 20 core limit (parallel)
   </td><td> 30 instances, 100 with App Svc. env.
   </td><td> 200 instances per function
   </td><td> 20 container groups per sub.
   </td><td> 100 nodes per scale set
   </td><td> 100 nodes per cluster
   </td></tr>
</table>

Logic apps?

Web jobs?


## Event Architecture

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/event-grid/compare-messaging-services">DOC</a>:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Service </th><th> Purpose </th><th> Type </th><th> When to use </th></tr>
<tr valign="top"><td> Event <strong>Grid</strong> </td><td> Reactive programming </td><td> Event distribution (discrete) </td><td> React to <strong>status changes</strong> </td></tr>
<tr valign="top"><td> Event <strong>Hubs</strong> </td><td> Big data pipeline  </td><td> Event <strong>streaming</strong> (series) </td><td> Telemetry and distributed data streaming </td></tr>
<tr valign="top"><td> Service <strong>Bus</strong> </td><td> High-value enterprise messaging </td><td> Message </td><td> Order processing and financial <strong>transactions</strong> </td></tr>
</table>

![az-event-arch-1159x422.png](https://user-images.githubusercontent.com/300046/119775009-3f2df580-be80-11eb-8bcb-8a2886268a71.png)


## Payment options

   * Pay as you go (Billed per second on per-hour prices)
   * Reserved (provisioned) Virtual Machine instances
   * Spot Pricing - discounts for underused time slots, subject to instant removal
   * Azure Hybrid Benefit (through Enterprise Software Assurance from on-prem. licenses)
   <br /><br />

<hr />

<a name="AppServices"></a>

## Azure App Services

Azure App Service (much like AWS Amplify) provides IaaS server infrastructure to run:

   * ASP.NET <a href="#WebApps">web apps</a>
   * Mobile Apps (back ends)
   * REST API (web services) apps
   * <a href="#StaticApps">Static app services</a>
   * <a href="#LogicApps">Logic Apps</a>
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/deploy-a-website-with-azure-app-service/">Deploy a website to Azure with Azure App Service</a>:


Create an Azure App Service Web App
* https://docs.microsoft.com/en-us/azure/app-service/
* https://docs.microsoft.com/en-us/azure/app-service/overview
* https://docs.microsoft.com/en-us/azure/app-service/quickstart-dotnetcore?tabs=netcore31&pivots=development-environment-vs

Enable diagnostics logging:
* https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs

Deploy code to a web app
* https://docs.microsoft.com/en-us/azure/app-service/deploy-run-package
* https://docs.microsoft.com/en-us/azure/app-service/deploy-zip
* https://docs.microsoft.com/en-us/azure/app-service/deploy-local-git?tabs=cli
* https://docs.microsoft.com/en-us/azure/app-service/deploy-complex-application-predictably

Configure web app settings including SSL, API settings, and connection strings:
* https://docs.microsoft.com/en-us/azure/app-service/configure-common
* https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-bindings


<a name="WebApps"></a>

### Web Apps hosting

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/app-service/">DOCS
<img align="right" width="200" src="https://appservice.azureedge.net/images/app-service/v3/generic.svg"></a>
Unlike static web apps, Web Apps (formerly "Websites") run ASP.NET, NodeJs, PHP, Ruby, Java, etc. 
to <strong>dynamically generate HTML</strong> before delivery to a user. 
So users also wait if the web app needs to start up. Due to caching, subsequent requests for that page is faster because the code is already compiled.

Classic .NET web apps sample URL:

   <pre><strong>https://<em>app_name</em>.azurewebsites.net</strong></pre>

   PROTIP: The free plan cannot map to a custom domain of your choice.

Azure Web Apps service provides high availability auto-scaling.

Cold starts are avoided by using <strong>slot swaps</strong> to deploy to production.

<a target="_blank" href="https://www.youtube.com/watch?v=KdyXSgFxAtI">YOUTUBE:
How to auto-scale and optimize performance of .NET Web Apps with Microsoft Azure App Service</a>

### Create App Service in Bash Shell script

https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/tutorial-vscode-azure-cli-node/tutorial-vscode-azure-cli-node-03


### Create App Service in Portal GUI

1. In a browser, go to <a target="blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites">"App Services"</a> from the Home menu or in Search.

1. Click blue "Create app service"
1. Specify Subscription, Resource Group, 

   Name: PROTIP: Include the VM Slot Tier (see below).

1. The method to publish your app. Also configures the Runtime stack.
1. Select a Runtime stack (.NET Core 3.1 (LTS)) - the platform on which the app runs.
1. The operating system: Linux or Windows. Some runtime stacks supports only one.

   <a href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/endorsed-distros">Linux Distros</a> include CentOS, CoreOS, Debian, Oracle Linux, Red Hat Enterprise Linux, SUSE Linux Enterprise, openSUSE.

1. Region (aka Location).
1. Billing is by a <strong>App Service Plan</strong>:

   SKU and size defines the pricing tier of the plan and the <strong>scaling</strong>:

   <strong>ACU (Azure Compute Units)</strong> normalizes compute costs and performance <a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-machines/acu">across</a> VM Types.  
   
   Within Overview -> VM Types -><br />
   * <a target="_blank" href="
   https://docs.microsoft.com/en-us/azure/virtual-machines/windows">
   https://docs.microsoft.com/en-us/azure/virtual-machines/windows</a>

   * <a target="_blank" href="
   https://docs.microsoft.com/en-us/azure/virtual-machines/linux">
   https://docs.microsoft.com/en-us/azure/virtual-machines/linux</a>


   #### Slots (of different versions)

   LIMIT PROTIP: Each slot's Tier type has a maximum number of staging slots imposed by Microsoft:
   * Dev/Test: F1 Free, D1 Shared, B1 Basic: 0 (none)
   * Standard: - 5 slots
   * Premium: - 20 slots
   * Isolated: I1, I2, I3 - 20 slots
   <br /><br />

   PROTIP: higher-priced tiers offer:
   * Immediate rollback option after swap (Staging to production)
   * Additional validation of app changes
   * Slot warming before swap
   * Support for auto-swap
   <br /><br />

1. Select Review and Create to navigate to the review page.
1. "Create"

   The F1 tier, select "Change size to open the Spec Picker wizard. 

   On the Dev / Test tab, select F1 from the list, then select Apply.

   Select the App Service for your web app from the list. 

   Be sure to select the App Service, and not the App Service plan.

1. Wait for "Deployment successful".
1. In "App Service" (singular), "Configuration",
1. "+ New connection string" and Name: "StorageConnectionString".
1. Copy values saved from Storage create earlier.
1. Deployment slot setting: Not selected.
1. Type: "MySQL". ???
1. OK.
1. Click "Save" in command bar. Continue.

1. "Properties" in left menu.
1. Copy the value of the URL text box, such as 

   <pre>http://imgapi1113.azurewebsites.net/</pre>

    Note: At this point, the web server at this URL will return a 404 error. You have not deployed any code to the Web App yet. You will deploy code to the Web App later in this lab.





1. The App services Overview page displays metrics.


   ### Deployment slots

   Each deployment slot holds a separate instance of the web app with a different host name.
   Each is a different resource.

   There is an implicit production slot.

   REMEMBER: Each slot shares an App Service plan's memory, CPU, and disk space.


1. In the Azure portal, add <strong>deployment slots</strong> to an App Service web app. 
   
   Create a staging deployment slot where to push code for testing.

   Then swap the staging deployment slot with the production slot.

   * Settings swapped: General settings, handler mappings, monitoring, diagnostics, WebJobs.
   * Setting that are configurable (either swappped or not swapped): App setting and connection strings.
   * Setting that are NOT swapped: publishing endpoints, custom domain names, SSL certs and bindings, scale settings, WebJob schedulers.
   <br /><br />

   The Azure portal provides out-of-the-box continuous integration and deployment with Azure DevOps, GitHub, Bitbucket, FTP, or a local Git repository on your development machine. 

   Connect your web app with any of the above sources and App Service will do the rest for you by automatically syncing your code and any future changes on the code into the web app.

   In the Azure portal, create a Web App resource. This allocates a set of hosting resources in App Service, which hosts a web-based application written in ASP.NET Core, Node.js, Java, Python.

   PROTIP: Canary deployments need a different technology.

1. An App Service plan is a set of virtual server resources that run App Service apps. 

1. Every App Service web app created must be assigned to a single App Service plan that runs it.

1. A single App Service plan can host multiple App Service web apps. 

   In most cases, the number of apps run on a single plan will be limited by the performance characteristics of the apps and the resource limitations of the plan.

   App Service plans are the unit of billing for App Service. The size of each App Service plan in your subscription, in addition to the bandwidth resources used by the apps deployed to those plans, determines the price that you pay. 

   The number of web apps deployed to your App Service plans has no effect on your bill.


<a name="ServiceFabric"></a>

### Service Fabric

Service Fabric is a distributed systems platform for packaging, deploying, and managing microservices. 

Microservices can be deployed to Service Fabric as containers, as binary executables, or as Reliable Services. 

Using the Reliable Services programming model, services can directly use Service Fabric programming APIs to query the system, report health, receive notifications about configuration and code changes, and discover other services.


<a name="LogicApps"></a>

### Azure Logic Apps

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=dd0116cf-8c50-4e06-8157-c9472bf0e3d8">DEMO VIDEO</a>

Azure Logic Apps schedules, automates, and <strong>orchestrates</strong> tasks, business processes, and workflows.

It's used to integrate apps, data, systems, and services across enterprises or organizations.

An example is a Trigger which fires when the stream of Tweets (or Slack posts) is found to contain a monitored keyword (@account, company name, #hashtag, etc).

![az-logic-app-tweet-444x386](https://user-images.githubusercontent.com/300046/115043980-48e03880-9e92-11eb-85cd-49b808148e2d.png)

A Cognitive (AI/ML) can run Text Analytics on the text to determine sentiment.
If the score is >.5 (neutral), Actions can:
   * send email, SMS, etc. via Twillo
   * add a log entry
   * insert a row in a SQL database
   <br /><br />

1. Have a Resource Group, Storage Account, 
1. Click the Logic App Designer can be used to create a workflow such as:

   Custom connectors can be written in ___.

   aka.ms/global-azure/30D2L

<hr />

<a name="StaticApps"></a>

### Static App services

<a target="_blank" href="https://www.youtube.com/watch?v=O7cbfiabJno&list=PLj2SwmCaQ41xK-Xcuqt6BQN8C7utyVC5w&index=2">VIDEO</a>:
Static Web Apps are fast because HTML is already rendered and sitting close to users in a CDN.

<img align="right" width="100" src="https://appservice.azureedge.net/images/static-apps/v3/staticapps.svg"> Static web app sample URL:

   https://victorious-sky-0e074cd1e.azurestaticapps.net

1. Generate the static HTML.

1. On the Azure portal menu or from the Home page, select All resources.
1. Search for "Static Web App".

   https://github.com/jahlen/hugo-azure-static-webapp

1. Edit workflow in file created:

   https://github.com/.../blob/master/.github/workflows/...yml

1. GitHub Action runs



<hr />

<a name="Functions"></a>

## Azure Functions

Azure Functions is a hosting service that handles putting code onto a VM and executing it.

Function apps do just one thing well, so scaling can be precise and dynamic.
A simplified programming model.

Function apps are <strong>event driven</strong>, triggered by data operations, timers, and webhooks. 

LIMIT: 5-minute function runtime, 10 minute max.

Advantages of Serverless:
   * No infrastructure management (OS, VNnet, storage)
   * Integrated Security (AAD, Facebook)
   * Dynamic scalability without hassle (based on workload)
   * Faster time to market
   * More efficient use of resources
   <br /><br />

PRICING: FREE are 1 million executions (400,000 GB/s)

Sample use cases implemented in PowerShell to cover end-to-end (build, debug, deploy, monitoring) are covered by <a target="_blank" href="https://twitter.com/mattallford?lang=en">@</a>Matt Allford in <a target="_blank" href="https://portal.cloudskills.io/products/azure-functions-for-devops-engineers">Azure Functions for DevOps Engineers</a> Cloudskills videos:

   * When VM is deleted, remove from monitoring system
   * When resource group is created, look up cost center for region and add tag with number.
   * Add AD groups to new SQL servers

   * When CPU spikes > 90%, send teams event
   * When storage acccount latency > 50%, open GitHub issue
   * When certificates are about to expire, send email

   * Send Slack message
   * Send SMS message (via Twilio)

I hava a script that sets up a Function (below).
However, several components are not available in the <a target="_blank" href="https://github.com/fouldsy/azure-mol-samples-2nd-ed/blob/master/21/azure_cli_sample.sh">CLI</a> and need manual actions in Azure portal to fill in the gaps. It's explained in chapter 21 of <a target="_blank" href="https://clouddamcdnprodep.azureedge.net/gdc/2014519/original">EBOOK</a>: <a target="_blank" href="https://aka.ms/monthoflunches​">Learn Azure in a Month of 21 Lunches</a> (2020 Manning) by <a target="_blank" href="https://www.linkedin.com/in/iainfoulds">Iain Foulds</a> (<a target="_blank" href="https://twitter.com/fouldsy">@fouldsy</a>).

Durable functions

1. G+/ Function apps are run as "Azure App Services", but Pricing Tier "Dynamic" (pay only for transactions, not servers sittingh around) and App Type "Function App".
1. Subscription
1. Resource Group

1. A Function App Name with unique/random name within global 
      $FUNCTION_NAME.<strong>azurewebsites.net</strong>
1. Publish as Code / Docker Container
1. Runtime stack: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/supported-languages">.NET Core C#, Node.js (JavaScript), Python, Java, PowerShell Core, Typescript, F#</a> 
1. Version of language: 6 for PowerShell Core.
1. Region:

1. Hosting: A Storage account with a unique/random name.
1. Hosting: Operating System: Linux/Windows (PowerShell only on Windows)
1. Hosting: Plan

   Runtime Scaling by a <strong>Scale Controller</strong> seeing monitoring to create instances of 1GB memory in 1 CPU.

   Consumption function app scales to LIMIT: max of 200 instances.
   The problem with it is <strong>cold starts</strong>. 
   If a function is not in memory, users would wait.

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-premium-plan?tabs=portal">Functions Elastic Premium Plan</a> 
   * Pre-warmed instances reserved pay
   * Premium instance sizes up to 100 instances
   * 30-minute function default runtime, 60-minute guarantee
   * Faster scaling than once/sec for HTTP and every 30 secs for non-HTTP.
   <br /><br />
   
   App Service Plan
   * Use dedicated VMs used in other App Service apps
   * Can provide custom image to run function
   * AutoScale VM instances
   * Run for unlimited amount of time
   <br /><br />
   
   Dedicated plan

1. Monitoring: Enable App Insights, Region

   Resources:
   * App service plan
   * App service
   * Application insights
   * Storage account
   <br /><br />

1. Tags

1. Azure Functions templates at https://github.com/Azure/azure-functions-templates

   <a target="_blank" href="https://github.com/Azure/azure-functions-core-tools">https://github.com/Azure/azure-functions-core-tools</a>

   * HTTP
   * Timer trigger (alarm clock)
   * Azure Blob Storage trigger
   * etc.


   Files:

   <a target="_blank" href="https://github.com/wilson-mar/azure-quickly/blob/main/az-functions-temp.sh">https://github.com/wilson-mar/azure-quickly/blob/main/az-functions-temp.sh</a>
   
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-host-json">host.json reference for Azure Functions 2.x and later</a>

   <strong>profile.ps1</strong> is a PowerShell profile executed on every cold start

   <strong>requirements.psd1</strong> is a manifest listing dependencies

   Deploy an app in the Portal: Deployment Center or Visual Studio client. LAB 100

   Get Publish Profile (XML file), Import Profile 108

1. Integration

1. Create a Service Bus namespace.
1. Create a Service Bus.

1. Run & Debug
1. Monitoring trends and alerts
   <br /><br />

References:

   * <a target="_blank" href="https://www.youtube.com/watch?v=zIfxkub7CLY&list=RDCMUC-ptWR16ITQyYOglXyQmpzw&start_radio=1">
   VIDEO: 1 hr Intro</a> by Tim Corey. Shows use of Visual Studio C#.

Create and deploy Azure Functions apps:
* https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview
* https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-your-first-function-visual-studio
* https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-resourcemanager?tabs=visual-studio-code%2Cazure-cli

Implement input and output bindings for a function
Implement function triggers by using data operations, timers, and webhooks
* https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings?tabs=csharp
* https://docs.microsoft.com/en-us/azure/azure-functions/add-bindings-existing-function?tabs=csharp
* https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-return-value?tabs=csharp
* https://docs.microsoft.com/en-us/learn/modules/execute-azure-function-with-triggers/Implement 

Azure Durable Functions:
* https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?tabs=csharp
* https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-create-first-csharp?pivots=code-editor-vscode
* https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-sequence?tabs=csharp
* https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-cloud-backup?tabs=csharp
* https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-monitor?tabs=csharp
* https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-http-api#get-all-instances-status
* https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-external-events?tabs=csharp

Implement custom handlers:
* https://docs.microsoft.com/en-us/azure/azure-functions/functions-custom-handlers


<hr />


<a name="VMs"></a>
<a name="VM_GUI"></a>

## Create Virtual Machines in Portal GUI 

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-machines/">DOCS</a>:

1. In portal, go to <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2FVirtualMachines">VM or Virtual Machines</a> in Home menu or Recents or Search.

1. Click "+ Create". Select "Virtual Machine", not "Start with a preset configuration".
1. All Services -> Virtual Machines. Commands: 

   <tt>Basics | Disks | Networking | Management | Advanced | Tags | Review + create</tt>

1. Project details: Subscription:
1. Resource Group.

1. Virtual machine name: Previously, Azure VM names had to be globally unique because they were were put in public domain <strong>cloudapp.net</strong>, but Microsoft has since added magic to get around that.

   VM Name conventions:
   * Limit 15 chars on Windows VMs
   * Limit 64 chars on Linux VMs
   * Role: sql, web, msg<br />
   * Instance: 01, 02, etc.
   <br /><br />

1. Region: PROTIP: "(US) East US 2" is where new features first appear. So for production, that's not a good choice. "(US) West" is generally the lowest cost region globally.

   <a name="AvailabilityOptions"></a>

   ### Availability Options

1. Availability options: 

   PROTIP: For development, leave default as "No infrastructure redundancy required".
   But for production, select an "Availability zone" for <strong>High Availability (HA)</strong>

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th> Availability Option </th><th> Description </th><th> Disaster </th><th> SLA </th></tr>
   <tr valign="top"><td> <a href="#AvailabilityZones">Availability Zone</a>
   </td><td> distribute VMs across 1 to 3 zones within the same <strong>region</strong> <a target="_blank" href="https://docs.microsoft.com/en-us/availability-zones/az-region">which support it</a>
   </td><td> 1 or 2 data center zones </td><td> 99.99% </td></tr>

   <tr valign="top"><td> <a href="#AvailabilitySets">Availability Set</a>
   </td><td> Deploys separate VMs running constantly across several Fault Domains within a single Availability Zone
   </td><td> individual rack </td><td> 99.95% </td></tr>

   <tr valign="top"><td> VM <a href="#ScaleSets">Scale Set</a>
   </td><td> rule-based scaling load-balanced VM instances up/down within a single Zone of fault and update domains 
   </td><td> individual VM </td><td> 99.95% </td></tr>
   </table>

   "Scale Set" can be selected on regions which have only one Zone.

   <a name="AvailabilityZones"></a>

   Select "<strong>Availability zone</strong>" to redundantly store data in several zones of Microsoft's choosing. Microsoft will handle recognition of disaster and recovery for them.

   So this is the simplest approach. But consider the <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/virtual-machines/windows/">Pricing</a>.

   QUESTION: How do admins know when a failover has occurred?

1. If "Availability Zone" was selected, specify the number of zones. 

   LIMIT: Most regions have a maximum of 3 zones (fault domains)

   <a name="AvailabilitySets"></a>

1. Select "Availability set" for a region which does not have Availability Zones (such as Australia, AFAIK). 

   
1. <a target="_blank" href="https://www.youtube.com/watch?v=ilXx0cmmGz0">VIDEO</a>: If you selected "Availability Set", you may define a new Name such as: <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=9552db09-14c8-4831-939a-6565d6379a31">VIDEO</a>: REMEMBER:

   <tt>3fault_20update</tt> or <tt>3racks_20shelves</tt>

   * <strong>Fault domains</strong> (FD) = separate racks
   * <strong>Update domains</strong> (UD) = individual shelves on each rack
   <br /><br />

   ![az-computer-vm-avail-set-463x345](https://user-images.githubusercontent.com/300046/122305411-123f9200-cec4-11eb-9b10-a2af86a7c42b.png)

   <a target="_blank" href="https://www.youtube.com/watch?v=7o5NeWjNoFQ">VIDEO</a>: 
   This is so each server can be taken offline for OS patching without impacting availability.

1. Azure <strong>spot instance</strong>: As "No" is the default, <strong>click Yes</strong> to save money, if your app is designed for it (saves intermediate results which another server instance can retrieve and continue).  

1. Size:

   <a name="VM_Server_Types"></a>

   ### VM Size & Server Types

   <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/virtual-machines/series">PRICING of each VM type</a>:

   A for Basic std<u>A</u>rd General Purpose VMs

   B for <a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-b-series-burstable">Burstable</a> that stores credits used during low usage, but burst when needed. The number B1 is 100%, B2 to 200%, B10 to 1000% of base. Used for dev and testing.

   D for General Purpose apps, with DS instances for premium storage.

   DC for Data Center enterprise apps using Premium storage.

   E for mEmory optimized - high Memory-to-CPU ratio, with ES instances for premium storage.

   F for "Freakin" CPU Optimized - high Core-to-Memory ratio, with FS instances for premium storage.

   G for Godzilla - Very large instances: ideal for large databases and big data use cases.

   H for High performance computing aimed at very high-end computational needs such as modular modeling and other scientific applications.

   L for "Load" Storage Optimized instances which offer higher disk throughput and IO.

   M for Large Memory - allows up to 3.5 TB of RAM per instance.

   N for GPU eNabled

   r suffix for remote direct memory (RDMA)

   ![az-vm-side-ids-1272x660.png](https://user-images.githubusercontent.com/300046/119528558-8613d200-bd3e-11eb-850b-fea9555cac81.png)


1. Administrator account: Authentication type: SSH or Password

   If SSH public key is chosen: The username and SSH public key source appear.

   If Password is chosen: Password and Confirm Password fields appear.

1. Administrator account: Username: 

   PROTIP: These Admin user names cannot be used:
   * 123
   * a, adm, admin, admin1, admin2, administrator, 
   * actuser, aspnet
   * backup, console, david, john
   * i, guest, owner, root, server, sql, support, sys
   * test, test1, test2, test3,
   * user, user1, user2, user3, user4, user5
   <br /><br />

1. Administrator account: Key pair name:   

1. Inbound port rules: Select "None"

   We'll be using JIT, so don't select inbound ports: RDP (3389) for Windows / SSH (22) for Linux. 

1. RDP into VM. 
   Windows landing screen:

   ![az-compute-vm-win-landing](https://user-images.githubusercontent.com/300046/121094734-4fad6c80-c7ac-11eb-8857-efcee91a396a.png)

1. If Yes, Eviction type: "Capacity only" for whatever the pay-as-you-go rate is.
   "Price or capacity" to set a Max. price manually.

1. VM generation: <strong>Gen2</strong> VMs features UEFI-based boot architecture, increased memory and OS disk size limits, Intel Software Guard Extensions (SGX), and virtual persistent memory (vPMEM).

   CAUTION: As of this writing, Gen2 does not support Azure Disk Encryption!



1. Next: Disk:
1. Next: Networking
1. Next: Management
1. Next: Advanced
1. Next: Tags
1. Next: Review + Create


### Deploy a website in a VM

<a target="_blank" href="https://www.coursera.org/learn/azure-create-a-virtual-machine-and-deploy-a-web-server/">VIDEO: Coursera: Azure: Create a Virtual Machine and Deploy a Website</a> has these steps:

1. Create a Resource Group
1. Create a Virtual Network and a subnet
1. Protect a subnet using a Network Security Group
1. Deploy Bastion to connect to a Virtual Machine
1. Create an Ubuntu Server Virtual Machine
1. Install Nextcloud by connecting via SSH using Bastion
1. Publish an IP
1. Create a DNS label
<br /><br />

Provision virtual machines (VMs):
* https://docs.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/create-sql-vm-portal
* https://docs.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/create-sql-vm-powershell

<a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-developer-implement-iaas-solutions/table-of-contents" title="by  by Anthony Nocentino 17 Dec 2020">VIDEO: Microsoft Azure Developer: Implement IaaS Solutions</a>



### Create Windows VM in Bash

   <pre>az vm create --resource-Group ps-course-rg --name windows-1 \
--image win2016datacenter --admin-username azureuser
   </pre>

<a name="New_Linux_CLI"></a>

### Create Linux VM in Bash

<pre><strong># environment variables:
AZ_ADMIN_USER="mrtoad2"  
AZ_GROUP="somegroup2"
AZ_VM_NAME="myvm123"
&nbsp;
RESPONSE=$( az vm create -n "$AZ_VM_NAME" -g "$AZ_GROUP" \
   --image UbuntuLTS --generate-ssh-keys \
   --admin-user "$AZ_ADMIN_USER" )
&nbsp;
 # Obtain $publicIpAddress from RESPONSE:
publicIpAddress=$(jq -r '.publicIpAddress' <<< "$RESPONSE")
echo "publicIpAddress=$publicIpAddress"
&nbsp;
ssh "$AZ_ADMIN_USER:$publicIpAddress"
   # do whatever...
exit
   </strong></pre>


<a name="VM_PS"></a>

### Create VM using PowerShell ps1 file

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=901540c5-bf67-408d-8d8f-d68005676c83">VIDEO</a>:
<a target="_blank" href="https://github.com/MicrosoftLearning/AZ-303-Microsoft-Azure-Architect-Technologies/blob/master/Instructions/Labs/Module_10_Lab.md">LAB</a>:

   <pre>$location="westus2"
New-AzSubscriptionDeployment -Name az30310subaDeployment `
   -Location $location -rgName 'az30310a-labRG' `
   -rgLocation $location  `
   -TemplateFile $HOME/azuredeploy30310suba.json
   </pre>

<pre>New-AzVm -ResourceGroupName ‘ps-course-rg’ `
   -Name ‘windows-1’ `
   -Location ‘NorthCentralUS’ `
   -VirtualNetworkName ‘main-vnet’ `
   -SubnetName ‘backend’ `
   -SecurityGroupName ‘myNetworkSecurityGroup’ `
   -PublicIpAddressName ‘myPublicIpAddress’ `
   -OpenPorts 80,3389
</pre>


<hr />

## Virtual Machine menu

The Virtual Machine blade has these menu items:

   * Overview
   * Activity Log
   * Access control (IAM)
   * Tags
   * Diagnose and solve problems

   * <a target="_blank" href="https://wilsonmar.github.io/azure-networking/">Networking</a>
   * Connect
   * <a target="_blank" href="https://wilsonmar.github.io/azure-storage/">Disks</a>
   * Size

   * Security
   * Advisor recommendations
   * Extensions
   * Properties

   * Disaster recovery
   * Configuration management

   * Resource health
   * Boot diagnostics
   * Performance diagnostics
   * Reset password
   * <a href="#Redeploy">Redeploy</a>
   * New support request
   <br /><br />


<hr />

<a name="Scaling"></a>

## VM Scaling

<a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-deploying-multiple-virtual-machines/table-of-contents">VIDEO</a>


<strong>Vertical Scaling up</strong>: Since initially one doesn't know what kind of VM will suffice, start with a basic or intermediate one (not a very powerful one). General purpose Type VMs (50-210 ACUs) suffice in most cases. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/app-service/manage-scale-up">Link</a>.

<strong>Horizontal scaling out</strong>: If your application was designed to do it, scaling out to an <strong>App service plan</strong>. You can autoscale and set up autoscaling rules or go the manual route. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-get-started">Link</a>


### VM HA SLA (Service Level Agreement)

<table>
<tr valign="bottom"><th> Instances </th><th> <a href="#AvailabilityZones">Avail. Zones</a> </th><th> SLA </th><th> Hrs/Yr </th></tr>
<tr valign="top" align="center"><td>  1 (SSD) </td><td> 1 </td><td> 99.90%+ </td><td> 8:45:56 </td></tr>
<tr valign="top" align="center"><td>  2+ </td><td> 1 </td><td> 99.95%+ </td><td> 4:22:58 </td></tr>
<tr valign="top" align="center"><td>  2+ </td><td> 2+ </td><td> 99.99%+ </td><td> 0:52:35 </td></tr>
</table>


<a name="ScaleSets"></a>

### Scale Sets

<a target="_blank" href="https://portal.cloudskills.io/products/azure-administrator-az-104-exam-prep-course/categories/4743683/posts/8995644">VIDEO</a>:
<a target="_blank" href="https://user-images.githubusercontent.com/300046/116013813-4f3b8680-a5ef-11eb-96a7-d72eb24c5567.png">
<img alt="az-scale-sets-782x504" width="782" height="504" src="https://user-images.githubusercontent.com/300046/116013813-4f3b8680-a5ef-11eb-96a7-d72eb24c5567.png"></a>

Azure VM Scale Sets enable creation and management of a <strong>grouping of load balanced VMs</strong> to provide High Availability (HA) to applications. Scale Sets can be centrally managed, configured, and updated.
The number of VM instances can automatically increase or decrease in response to demand or a defined schedule. 

VM scale sets with standard Load Balancers and standard PIP cannot be moved.

VMs integrated with Key Vault for disk encryption cannot be moved.

1. G+/ <a target="_blank" href="https://portal.azure.com/#create/microsoft.vmss"">Create a virtual machine scale set" at https://portal.azure.com/#create/microsoft.vmss</a>

   There is a lot to configure: Basics, Disks, Networking, Scaling, Management, Health, Advanced, Tags, Review+Create

1. NAMING CONVENTION:

1. Size matters for billing (money consumption).

1. Define Scale Up rules and sizes.

1. Define Scale Out rules and instances.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/116017640-6da87e80-a5fd-11eb-8574-fc75727fbdee.png"><img alt="az-scaleset-conditions-1286x546" width="1286" height="546" src="https://user-images.githubusercontent.com/300046/116017640-6da87e80-a5fd-11eb-8574-fc75727fbdee.png"></a>

1. Instance limits

1. Metric Criteria for scaling

   DEFINITION: "<strong>Flapping</strong>" is too frequent scale in and then out again. 
   <strong>Cooldown minutes</strong> limits that.

   ![az-compute-scaleset-threshold-591x382](https://user-images.githubusercontent.com/300046/116017508-08ed2400-a5fd-11eb-800e-7a671794632d.png)

   Operators for Scale rule:
   * Increase count by
   * Increase percent by
   * Increase count to

   * Decrease count by
   * Decrease percent to
   * Decrease count to
   <br /><br />
   
<a name="JIT"></a>

### Just-in-time VM Console access

To improve security, enable just-in-time VM access.

   A just-in-time access enables you to lock down inbound traffic to your VM by allowing access for only a limited time. The just-in-time feature is available as part of the Azure Security Center standard tier.Learn more about just-in-time access

1. Within a VM, click <strong>Configuration</strong> blade.

   Upgrade your Security Center subscription to enable a just-in-time access

1. If you have on-prem license, click Yes to "Would you like to use an existing Windows Server license?" to save up to 49% with a license you already own using Azure Hybrid Benefit.

1. Specify a Proximity placement group

   Proximity placement group can only be updated when the virtual machine is deallocated.

1. Specify the Host Group

   Azure Dedicated Hosts allow you to provision and manage a physical server within our data centers that are dedicated to your Azure subscription. A dedicated host gives you assurance that only VMs from your subscription are on the host, flexibility to choose VMs from your subscription that will be provisioned on the host, and the control of platform maintenance at the level of the host.

   * https://docs.microsoft.com/en-us/azure/virtual-machines/dedicated-hosts
   * https://docs.microsoft.com/en-us/azure/virtual-machines/dedicated-hosts-portal
   * https://docs.microsoft.com/en-us/cli/azure/vm/host/group?view=azure-cli-latest
   <br /><br />

   Host can only be updated when the virtual machine is deallocated.

   There is a limit on vCPUs for dedicated hosts per region.

<a name="ConnectVM"></a>

### Connect

1. Connect 
1. Use Bastion



<a name="Redeploy"></a>

### Redeploy

<strong>redeploy</strong> shuts down the VM, moves it to a new node, and powers up again.

Data on temporary drive will be lost, but it's a choice if you cannot connect via RDP or SSH or have difficulty trobleshooting app access on Azure VM.

Azure CLI:

<pre>az vm redeploy --resource-Group ps-course-rg --name linux-1</pre>

PowerShell commands:

<pre>Set-AzVM -Redeploy -ResourceGroupName ‘ps-course-rg’ -Name “linux-1“</pre>

<a href="#ConnectVM">Connect as above</a>


#### Moving VM using PowerShell

<pre>Move-AzResource -DestinationResourceGroupName ‘ps-course-rg’ `
-ResourceId <em>myResourceId,myResourceId,myResourceId</em>
&nbsp;
Move-AzResource -DestinationSubscriptionId “8bc4fbf0-blah-blah-blah-226b44e5db84" `
-DestinationResourceGroupName ‘ps-course-rg’ `
-ResourceId <em>myResourceId,myResourceId,myResourceId</em>
</pre>



<a name="VM_template"></a>

### Create VM using IaC ARM JSON Templates

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=29e13b4f-a7e6-4a1c-a60a-5a0916377e5d">VIDEO</a>, <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-functions">DOCS</a>:

1. Search: Virtual Machines
1. Fill out
1. Instead of clicking "Create", click "Download a template for automation". Or menu item "Export template" under Settings.
1. For reuse, click "Add to library".

   Like AWS Cloud Formation, 
   ARM templates defines the infra and config of an Azure solution.
   Being in JSON text format, they can be versioned and repeatedly <strong>deployed</strong>.

   Among empty elements below, contentVersion is user defined.
   "{  }" strings and "[  ]" 

<pre>{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/<em>deploymentTemplate</em>.json#",
  "contentVersion": "v1.2.3.0",
  "apiProfile": "",
  "parameters": {  },
  "variables": {  },
  "functions": [  ],
  "resources": [  ],
  "outputs": {  }
}
</pre>
 
   Parameters refer to values defined in a file separate from the template file.

   Variables combine parameter values and static text.

   Resources are what are deployed.

   dependsOn items are resolved first.


<a name="VM_CLI"></a>

### Create VM using CLI sh file

1. Define variables to use:

   <pre>mySubscription="DemoAcct"
myRG="psdemo-rg"
myLocation="centrlus"
myVMName="psdemo-win-cli"
myWinOSImage="win2019datacenter"
adminUsername="JohnDoeAdmin"
adminPassword="$ADMIN_PASSWORD"
myLinuxImage="UbuntuLTS"
   </pre>

1. Retrieve secrets from ~/.env file:

1. Log into Azure: 

   <pre>az login
az account set --subscription "$mySubscription"
   </pre>

1. See what is defined:

   <pre>az group list --output table

1. Create Windows VM:

   <pre>az group create --name "$myRG" --location "$myLocation"
az vm create --resource-group "$myRG" --name "$myVMName" \
   --image "$myWinOSImage" \
   --admin-username "$adminUsername" \
   --admin-password "$adminPassword"
   ## use default --size machine
#
az vm open-port --resource-group "$myRG" --name "$myVMName" \
   --port "3389"
#
az vm list-ip-addresses --resource-group "$myRG" --name "$myVMName" 
   </pre>

1. Create Linux VM:

   <pre>myVMName="psdemo-linux-cli"
az vm create --resource-group "$myRG" --name "$myVMName" \
   --image "$myLinuxImage" \
   --authentication-type "ssh" \
   --admin-username "$adminUsername" \
   --ssh-key-value "~/.ssh/id_rsa.pub"
   ## use default --size machine
#
az vm open-port --resource-group "$myRG" --name "$myVMName" \
   --port "22"
   </pre>

1. Login machine created:

   <pre>ssh "$$adminUsername@40.122.71.89"

1. Clean up:

   <pre># If -delete specified among CLI parameters:
az group delete --name "$myRG"
   </pre>

More options at:
https://docs.microsoft.com/en-us/cli/azure/vm#az_vm_create



### VM maintainance using CLI

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/tutorial-manage-vm

<pre><strong>echo ">>> Stop Linux VM using CLI:"
az vm stop -n "$AZ_VM_NAME" -g "$AZ_GROUP" 
</strong></pre>


<pre><strong>echo "Start Linux VM using CLI:"
az vm start -n "$AZ_VM_NAME" -g "$AZ_GROUP" 
</strong></pre>

<pre><strong>echo ">>> Get info"
az vm show -n "$AZ_VM_NAME" -g "$AZ_GROUP" \
   --query hardwareProfile.vmSize
</strong></pre>

<pre><strong>echo "Delete resource group:"
az group delete -g "$AZ_GROUP" --no-wait -y
</strong></pre>


<hr />

<a name="VM_Docker"></a>

### Create VM using Docker

Book: Microservices with Docker on Microsoft Azure (includes Content Update Program), by Boris Scholl, Trent Swanson, and Daniel Fernandez https://www.oreilly.com/library/view/microservices-with-docker/9780134218229/

1. Define Dockerfile:

   <pre>FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
RUN mkdir /app
WORKDIR /app
COPY ./webapp/bin/Release/netcoreapp3.1/publish ./
COPY ./config.sh ./
RUN bash config.sh
EXPOSE 80
ENTRYPOINT ["dotnet","webapp.dll"]
   </pre>

1. Build Docker image from Dockerfile:

   <pre>docker build -t webimage:v1 .
   </pre>

1. Run Docker image:

   <pre>docker run --project ./webapp 
   </pre>

1. Test:

   <pre>curl http://localhost:5000
   </pre>

1. Publish into Container:

   <pre>dotnet publish -c Release ./webapp
   </pre>

<hr />

### VM Disks

   VM Types:
   * O/S only
   * Biztalk
   * SQL

   Tiers:
   * Basic
   * Low Priority
   * Standard


<a name="ContainerInstances"></a>

## ACI (Azure Container Instances)

<a target="_blank" href="https://www.skillpipe.com/?lang=en-GB#/reader/urn:uuid:e36b495e-ef2a-5560-893e-f22ebe2ac3e6@2021-03-19T02:45:22Z/content">LEARN</a>:

Azure Container Instances (ACIs) provide a fast and simple way to run <strong>individual</strong> (isolated) containers in a VM running (Windows or Linux) images, without having to manage machines and without having to adopt a higher-level service. ACI is useful for build jobs of single simple applications, task automation.

1. Create a <strong>single (machine)</strong>, akin to one K8s pod based on a predefined image in the Azure Registry Service (ARS):

   <pre>DNS_NAME_LABEL=aci-demo-$RANDOM
az container create --name mycontainer --resource_group learn-deploy-aci-rg \
  --image mirosoft/aci-helloworld --ports 80 --location eastus \
  --dns-name-label $DNS_NAME_LABEL
   </pre>

   Containers startup faster than virtual machines (VMs) -- in seconds.

   ACI instances are billed by the second, so you can fine-tune your spending based on actual need.

   PROTIP: Azure Container Instances supports scheduling of <strong>multi-container groups</strong> sharing a host machine, local network, storage, and lifecycle. So a main application container can be combined with other supporting role containers, such as monitoring and logging sidecars.

1. In a browser, the public URL is, assuming $RANDOM is resolved to 1234 and location eastus:

   <tt>https://aci-demo-$RANDOM.eastus.azureci.com</tt>

   The "ci" is for container instance.

   Container instances can specify a custom DNS name label so your application is reachable at 

   <tt>https://<em>customlabel</em>.<em>azureregion</em>.azurecontainer.io</tt>

PROTIP: Use the AKS virtual node to provision pods inside ACI that start in seconds. This enables AKS to run with just enough capacity for your average workload. As you run out of capacity in your AKS cluster, scale out additional pods in ACI without any additional servers to manage.


## Azure Container Registry (ACR)

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-js/container-registry-javascript/

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-js/container-registry-typescript/


1. Create a registry using the Azure CLI:

   <pre>MY_REGISTRY="myregistry"
az acr create --name $MY_REGISTRY --sku standard --admin-enabled true \
--resource-group mygroup 
   </pre>

1. Instead of building an image yourself and pushing it to Container Registry, use the CLI to upload the Docker file and other files that make up your image.

   <pre>az acr build --file Dockerfile --image myimage . 
   </pre>

   Note the dot at the end to specify all files in the folder.

1. Register container in Azure Container Registry

   Container images are pulled from the Azure Container Registry

   "AKS virtual node", a Virtual Kubelet implementation, provisions pods inside ACI from AKS when traffic comes in spikes.

   AKS and ACI containers write to shared data store.


<a name="AKS"></a>

## AKS (Azure Kubernetes Service)

<a target="_blank" href="https://user-images.githubusercontent.com/300046/116806912-4d8d2980-aaed-11eb-810c-844f6354feb8.png"><img alt="az-k8s-flow-2236x1258" width="2236" height="1258" src="https://user-images.githubusercontent.com/300046/116806912-4d8d2980-aaed-11eb-810c-844f6354feb8.png"></a>

<a target="_blank" href="https://azure.microsoft.com/en-us/services/kubernetes-service/">
Azure Kubernetes</a> 

See my <a target="_blank" href="https://wilsonmar.github.io/kubernetes">wilsonmar.github.io/kubernetes</a>


1. Make use of a sample multi-user app (simply to click either Dog or Cat):<a target="_blank" href="https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-prepare-app">*</a>

   <pre>git clone https://github.com/Azure-Samples/azure-voting-app-redis.git
   cd azure-voting-app-redis
   </pre>

1. Configure a service principal to pull images from ACR. For more information, see ACR authentication with service principals or Authenticate from Kubernetes with a pull secret. Alternatively, you can use a managed identity instead of a service principal for easier management.<a target="_blank" href="https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-cluster">*</a>

1. Grant the right to pull images from the Azure Container Registry (ACR) instance.
   See https://docs.microsoft.com/en-us/azure/aks/cluster-container-registry-integration

1. Create AKS cluster using CLI:

   <pre>MY_RG="eastus"
MY_AKS_CLUSTER="myAKSCluster"
AZ_REGISTRY_IMAGE_NAME="xxx"
&nbsp;
az aks create --name $MY_AKS_CLUSTER \
    --attach-acr $AZ_REGISTRY_IMAGE_NAME \
    --node-count 2 \
    --generate-ssh-keys \
    --resource-group $MY_RG
   </pre>

1. Connect to cluster using kubectl 

   <pre>az aks get-credentials --name $MY_AKS_CLUSTER \
    --resource-group $MY_RG
   </pre>

1. Verify the connection to your cluster:

   <pre>kubectl get nodes
   </pre>

   <pre>NAME                                STATUS   ROLES   AGE     VERSION
aks-nodepool1-37463671-vmss000000   Ready    agent   2m37s   v1.18.10
aks-nodepool1-37463671-vmss000001   Ready    agent   2m28s   v1.18.10
   </pre>

1. Deploy app<a target="_blank" href="https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-application">*</a>

   <pre>az acr list --query "[].{acrLoginServer:loginServer}" \
    --output table \
    --resource-group $MY_RG 
   </pre>

https://azure.microsoft.com/en-us/resources/kubernetes-ebook-collection/ [registration requested]
   * <a target="_blank" href="https://info.microsoft.com/ww-thankyou-manage-your-kubernetes-clusters-with-built-in-best-practices-vdeo?LCID=EN-US">VIDEO</a>

* https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-scale


## VM Size change

VM size change

* General purpose
* GPU
* High performance compute (batch processing)
* Compute optimized
* Memory optimized
* Storage optimized (databases)
<br /><br />

1. Make sure your region supports the VM family product code you want:

   <a target="_blank" href="https://azure.microsoft.com/en-us/global-infrastructure/services/">
   (Azure Products available by region)
   https://azure.microsoft.com/en-us/global-infrastructure/services</a>

1. See https://docs.microsoft.com/azure/azure-resource-manager/resource-group-move-resources

   <a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=5h14m41s">VIDEO</a>
   Redeploy VMs

   <pre>$vmName = "WinSrv19-1"
$rscGroup = "testgroup"
Set-AzVM -Redeploy -Name $vmName -ResourceGroupName $rscGroup
   </pre>

   Response: OperationId


<a name="ScaleSets"></a>

## Availability ScaleSets

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=3h49m48s">VIDEO</a>
<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=ab0dc747-39f8-4361-8a0f-53f9292840ef">VIDEO</a>:
HA = Resiliency (not Durability)

What are Availability Zones in Azure?

Unique within Resource Group:

* WebAvailSet in 2 zones
* MidAvailSet in 2 zones
* DataAvailSet in 2 zones
<br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=3h58m39s">VIDEO</a>

<pre>New-AzAvailabilitySet
	 -ResourceGroupName
	 -Name
	 -Location
	 -PlatformUpdateDomainCount
	 -PlatformFaultDomainCount
	 -Sku "Aligned"
</pre>

CLI: az vm availability-set create


## VM Sizing for a Location

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=4h0m50s">VIDEO</a>

$location = "centralus"
Get-AzVMSize -Location $location

   <pre>Name                   NumberOfCores MemoryInMB MaxDataDiskCount OSDiskSizeInMB ResourceDiskSizeInMB
----                   ------------- ---------- ---------------- -------------- --------------------
Standard_A0                        1        768                1        1047552                20480
Standard_A1                        1       1792                2        1047552                71680
   </pre>

   <pre>
$regName = "TestGroup"
$vmName = "something1"
$size = "Standard_A0"
$vm = Get-AzVM -ResourceGroupName $rgName `
   -VMName $vmName
$vmHardwareProfile.VmSize = $size
   </pre>

   Update-AzVM -VM $vm -ResourceGroupName $rgName

CLI: az vm resize    


## VHD images

DEFINITION: VHD (Virtual Hard Disk) is a disk image file format for storing the complete contents of a hard drive. The disk image, sometimes called a virtual machine, replicates an existing hard drive and includes all data and structural elements. It can be stored anywhere the physical host can access.

To deploy a VHD image: <a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=4h29m0s">VIDEO</a>
   * https://docs.microsoft.com/en-us/learn/modules/deploy-vms-from-vhd-templates/
   * https://discover.opscompass.com/blog/deploy-an-azure-vm-from-a-custom-image-using-arm-templates

1. Get a generalized VHD image from Marketplace:

   <a target="_blank" href="
   https://azuremarketplace.microsoft.com/en-us/marketplace/apps?filters=virtual-machine-images">
   https://azuremarketplace.microsoft.com/en-us/marketplace/apps?filters=virtual-machine-images</a>

   <a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=4h35m53s">VIDEO</a>:
   To automate VM scaleset using image: extensionProfile fileUris source install packages from raw.githubusercontent.com/Azure-samples/compute-automation-conf which installs "bash automate_nginx.sh"

   <a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=4h42m18s">VIDEO</a>:
   <a target="_blank" href="https://azure.microsoft.com/en-us/resources/templates">
   Azure Quickstart templates</a> contribute by a community. Among the Most Popular:<br />
   <a target="_blank" href="https://azure.microsoft.com/en-us/resources/templates/101-vm-simple-windows/">
   Deploy a simple Windows VM</a> by Brian Moore (<a target="_blank" href="https://bmoore-msft.blog/">who has worked on ARM templates from inception</a>)

1. Specialized for your needs:

1. To prepare a Windows Server image for generalization:  \windows\system32\sysprep\sysprep.exe
1. To prepare a Linux Server image for generalization: waagent.

   See https://docs.microsoft.com/en-us/learn/modules/deploy-vms-from-vhd-templates/3-generalize-server-create-image

   Hands-on: https://docs.microsoft.com/en-us/learn/modules/deploy-vms-from-vhd-templates/4-exercise-create-image-provision-vm?pivots=windows-cloud

   HANDS-ON: https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/quickstart-create-templates-use-the-portal



## Find your own Templates

1. Home -> All Services: search -> Templates

<a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure-samples/hello-spring-function-azure/hello-spring-function-azure/">Example "Hello, world" Spring Boot application that runs on Azure Functions</a>


<a name="Batch"></a>

## Azure Batch processing

Azure Batch Service uses a pool of compute resources (VMS) to carry out batch processes in <strong>parallel</strong>.

https://docs.microsoft.com/en-us/cli/azure/batch?view=azure-cli-latest

https://docs.microsoft.com/en-us/azure/batch/tutorial-parallel-dotnet

<hr />

<a name="WebJobs"></a>

## Web Jobs

Azure Web Jobs runs Azure Functions as background jobs.



<a name="Event_Grid"></a>

## Event Grid

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/event-grid/overview">
Overview</a> <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/application-integration-using-event-grid">DOCS</a>:

To Create a custom Event Grid topic

    In the Azure portal’s navigation pane, select Create a resource.

    On the New blade, find the Search the Marketplace text box.

    In the search box, enter <strong>Event Grid Topic</strong>, and then select Enter.

    On the Everything search results blade, select the Event Grid Topic result.

    On the Event Grid Topic blade, select Create.

    On the Create Topic blade, perform the following actions:

        In the Name text box, enter hrtopic[yourname].

        In the Resource group section, select Create new, enter PubSubEvents, and then select OK.

        From the Location drop-down list, select the (US) East US region.

        From the Event Schema drop-down list, select Event Grid Schema, and then select Create.



## Redis Cache

* https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure
* https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure#memory-policies



## Resources

<a target="_blank" href="https://channel9.msdn.com/Blogs/One-Dev-Minute/Can-I-create-a-Nuxtjs-website-for-free--One-Dev-Question?ocid=player">Nuxt.js</a>.


## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
