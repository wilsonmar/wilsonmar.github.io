---
layout: post
title: "Azure Compute (within Microsoft's cloud)"
excerpt: "VMs, Scale Sets, App Services, Websites, Function Apps, Logic Apps, Docker Containers, AKS"
tags: [cloud, azure]
date: "2021-04-15"
file: "azure-compute"
image:
# azure ms logo wait 1900x500-39kb.jpg
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

   * SaaS: Custom "Serverless" <a href="#LogicApps">Azure Logic Apps</a> for orchestration and 
   <a href="#Functions">Azure Functions</a> 

   * PaaS: Container to run in Docker or K8s (AKS), a <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/app-service/static/">static SPA Web Apps</a> using Vue-based <a target="_blank" href="https://channel9.msdn.com/Blogs/One-Dev-Minute/What-is-Nuxtjs--One-Dev-Question?ocid=player">Nuxt.js</a>)

   * IaaS: <a href="#VMs">Virtual Machines</a> (like AWS EC2) using images

   * Azure Redis Cache ???

## Payment options

   * Pay as you go (Billed per second on per-hour prices)
   * Reserved (provisioned) Virtual Machine instances
   * Spot Pricing
   * Azure Hybrid Benefit (through Enterprise Software Assurance from on-prem. licenses)
   <br /><br />

## Automation programmatically

There are several ways to automate stand up services within Azure:
   * <a href="#VM_GUI">Portal GUI Cloud Shell</a>
   * <a href="#VM_template">Template</a>
   * <a href="#VM_CLI">CLI</a> Bash scripts
   * <a href="#VM_PS">Powershell</a> ps1 scripts
   * <a href="#VM_PS_JSON">Powershell</a> running ARM template JSON files
   * <a href="#VM_Docker">Docker</a> containers
   * <a href="#VM_Docker">Terraform</a> HCL files
   * Microsoft Bicep (new)
   * REST API (used <a target="_blank" href="https://azidentity.azurewebsites.net/post/2020/12/15/key-vault-with-the-use-of-vbscript-classic-asp">within a VBScript program</a>
   * <a target="_blank" href="https://wilsonmar.github.io/pulumi/">Pulumi Python/C#/Nodejs/Typescript code</a>
   <br /><br />

### Cloud Shell

<a target="_blank" href="https://www.youtube.com/watch?v=x2aIVYxim-A&list=PLWag0-UcFD4HacGTnNVUzUMIsIF1CXySQ&index=6" title="by Dana Epps Oct 3, 2019">VIDEO</a>: Cloud Shell

Bash CLI or PowerShell.


### Azure on-prem Automation

Although deprecated by the <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/automation-hybrid-runbook-worker/">Hybrid Runbook Worker feature</a>,
<a target="_blank" href="https://azure.microsoft.com/en-us/blog/managing-on-premises-systems-with-azure-automation/">
Azure Automation</strong> securely reaches inside VMs in private networks and on-premises to execute PowerShell scripts/commands. It makes use of Windows PowerShell Remoting feature.

However, PowerShell Remoting is not always a viable option.
Where you have Azure-hosted VMs but cannot open a public WinRM port, a recent Microsoft blog post provides a runbook for running PowerShell commands  by utilizing the Azure VM Agent’s Custom Script Extension. <a target="_blank" href="https://azure.microsoft.com/en-us/blog/managing-on-premises-systems-with-azure-automation/">
This post</a> presents an extension for on-premises VMs.



<hr />

<a name="AppServices"></a>

## Azure App Services

Azure App Service (much like AWS Amplify) provides IaaS server infrastructure to run:

   * ASP.NET web applications, 
   * Mobile Apps (back ends)
   * REST API (web services) apps
   * <a href="#LogicApps">Logic Apps</a>
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/deploy-a-website-with-azure-app-service/">Deploy a website to Azure with Azure App Service</a>:


Classic web apps sample URL:

   <pre><strong>https://<em>app_name</em>.azurewebsites.net</strong></pre>

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


### Azure Web Apps (hosting)

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/app-service/">DOCS
<img align="right" width="100" src="https://appservice.azureedge.net/images/app-service/v3/generic.svg"></a>
Unlike static web apps, Web Apps (formerly "Websites") run ASP.NET, NodeJs, PHP, Ruby, Java, etc. 
to <strong>dynamically generate HTML</strong> before delivery to a user. 
So users also wait if the web app needs to start up. Due to caching, subsequent requests for that page is faster because the code is already compiled.

Azure Web Apps service provides high availability auto-scaling.

Cold starts are avoided by using <strong>slot swaps</strong> to deploy to production.

1. On the Azure portal menu or from the Home page, select All resources.

   https://portal.azure.com/#create/Microsoft.WebSite

1. In the Azure portal, search for "App Service".
1. Click blue "Create app service"
1. Specify Subscription, Resource Group, Name.
1. The method to publish your app. Also configure the Runtime stack.
1. Select a Runtime stack (.NET Core 3.1 (LTS)) - the platform on which the app runs.
1. The operating system: Linux or Windows. Some runtime stacks supports only one.
1. Region.
1. Billing is by a <strong>App Service Plan</strong>:

   SKU and size defines the pricing tier of the plan. 

   <strong>ACU (App Credit Unit?)</strong>

   Isolated its own allocation of resources

   Each slot's Tier type has a maximum number of staging slots imposed by Microsoft:
   * Dev/Test: F1 Free, D1 Shared, B1 Basic: 0 (none)
   * Standard: - 5 slots
   * Premium: - 20 slots
   * Isolated: I1, I2, I3 - 20 slots
   <br /><br />

1. Select Review and Create to navigate to the review page.
1. Select Create to create the web app.

   The F1 tier, select Change size to open the Spec Picker wizard. 

   On the Dev / Test tab, select F1 from the list, then select Apply.

    Select the App Service for your web app from the list. 

    Be sure to select the App Service, and not the App Service plan.

1. The deployment page shows the status of apps.
1. The App services Overview page displays metrics.


   ### Deployment slots

   Each deployment slot holds a separate instance of the web app with a different host name.
   Each is a different resource.

   Each slot shares an App Service plan's memory, CPU, and disk space.


1. In the Azure portal, add <strong>deployment slots</strong> to an App Service web app. 
   
   Create a staging deployment slot where to push code for testing.

   Then swap the staging deployment slot with the production slot.

The Azure portal provides out-of-the-box continuous integration and deployment with Azure DevOps, GitHub, Bitbucket, FTP, or a local Git repository on your development machine. 

Connect your web app with any of the above sources and App Service will do the rest for you by automatically syncing your code and any future changes on the code into the web app.

In the Azure portal, create a Web App resource. This allocates a set of hosting resources in App Service, which hosts a web-based application written in ASP.NET Core, Node.js, Java, Python.


1. An App Service plan is a set of virtual server resources that run App Service apps. 

1. Every App Service web app created must be assigned to a single App Service plan that runs it.

1. A single App Service plan can host multiple App Service web apps. 

   In most cases, the number of apps run on a single plan will be limited by the performance characteristics of the apps and the resource limitations of the plan.

   App Service plans are the unit of billing for App Service. The size of each App Service plan in your subscription, in addition to the bandwidth resources used by the apps deployed to those plans, determines the price that you pay. 

   The number of web apps deployed to your App Service plans has no effect on your bill.


### Container Registry

1. Create a registry using the Azure CLI:

   <pre>MY_REGISTRY="myregistry"
az acr create --name $MY_REGISTRY --sku standard --admin-enabled true \
--resource-group mygroup 
   </pre>

1. Instead of building an image yourself and pushing it to Container Registry, use the CLI to upload the Docker file and other files that make up your image.

   <pre>az acr build --file Dockerfile --image myimage . 
   </pre>


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



<hr />

### Static Web Apps

Static Web Apps are fast because HTML is already rendered and sitting in a CDN.

<img align="right" width="100" src="https://appservice.azureedge.net/images/static-apps/v3/staticapps.svg"> Static web app sample URL:

   https://victorious-sky-0e074cd1e.azurestaticapps.net

1. Generate the static HTML.

1. On the Azure portal menu or from the Home page, select All resources.
1. Search for "Static Web App".

1. Edit workflow in file created:

   https://github.com/.../blob/master/.github/workflows/...yml

1. GitHub Action runs



<hr />

<a name="Functions"></a>

## Azure Function Apps

Function apps do just one thing well, so scaling can be precise and dynamic.

NOTE: Function apps are run as "Azure App Services", but Pricing Tier "Dynamic" (pay only for transactions, not servers sittingh around) and App Type "Function App".

I hava a script that sets up a Function (below).
However, several components are not available in the <a target="_blank" href="https://github.com/fouldsy/azure-mol-samples-2nd-ed/blob/master/21/azure_cli_sample.sh">CLI</a> and need manual actions in Azure portal to fill in the gaps. It's explained in chapter 21 of <a target="_blank" href="https://clouddamcdnprodep.azureedge.net/gdc/2014519/original">EBOOK</a>: <a target="_blank" href="https://aka.ms/monthoflunches​">Learn Azure in a Month of 21 Lunches</a> (2020 Manning) by <a target="_blank" href="https://www.linkedin.com/in/iainfoulds">Iain Foulds</a> (<a target="_blank" href="https://twitter.com/fouldsy">@fouldsy</a>).

1. <a target="_blank" href="https://github.com/wilson-mar/azure-your-way/blob/main/az-functions-temp.sh">
https://github.com/wilson-mar/azure-your-way/blob/main/az-functions-temp.sh</a>

   1. Create a Resource Group.
   1. Create a Service Bus namespace.
   1. Create a Service Bus.
   1. Create a Storage account with a unique/random name.
   1. Create a Function with unique/random name:
   <br /><br />

   $FUNCTION_NAME.<strong>azurewebsites.net</strong>

1. Deploy an app in the Portal: Deployment Center or Visual Studio client. LAB 100

1. Get Publish Profile (XML file), Import Profile 108

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

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-premium-plan?tabs=portal">Functions Elastic Premium Plan</a>


<a name="WebJobs"></a>

## Web Jobs

Azure Web Jobs runs Azure Functions as background jobs.




<hr />

<a name="VMs"></a>

## Virtual Machines (VMs)

Provision virtual machines (VMs):
* https://docs.microsoft.com/en-us/azure/virtual-machines/
* https://docs.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/create-sql-vm-portal
* https://docs.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/create-sql-vm-powershell

<a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-developer-implement-iaas-solutions/table-of-contents" title="by  by Anthony Nocentino 17 Dec 2020">VIDEO: Microsoft Azure Developer: Implement IaaS Solutions</a>

Portal GUI 

1. PROTIP: Previously Azure VM names had to be globally unique becuase they were were put in public domain cloudapp.net. But Microsoft has since added magic to get around that.

1. Region: "(US) East US 2" is where new features first appear. So for production, that's not a good choice.

   <a name="AvailabilityZones"></a>
   <a name="AvailabilitySets"></a>

1. Availability options "Availability zone".

   "Availability set" for a region which does not have Availability Zones (such as Australia). Define a new one by specifying number of: REMEMBER:

   * <strong>fault domains</strong> = server racks, and 
   * <strong>Update domains</strong> = individual servers on each rack.
   <br /><br />

   [<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/virtual-machines/windows/">Pricing</a>]

1. Azure spot instance: No is default. Yes to save money. if your app is designed for it. 

1. If Yes, Eviction type: "Capacity only" for whatever the pay-as-you-go rate is.
   "Price or capacity" to set a Max. price manually.



1. VM generation: <strong>Gen2</strong> VMs features UEFI-based boot architecture, increased memory and OS disk size limits, Intel Software Guard Extensions (SGX), and virtual persistent memory (vPMEM).

   CAUTION: Gen2 does not yet support Azure Disk Encryption!


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
![az-scale-sets-782x504](https://user-images.githubusercontent.com/300046/116013813-4f3b8680-a5ef-11eb-96a7-d72eb24c5567.png)

Azure VM Scale Sets let your create and manage a <strong>group of load balanced VMs</strong>. 
The number of VM instances can automatically increase of decreate in response to demand or a defined schedule. 
Scale sets provide high availability (HA) to your applications and allow you to centrally manage, configure, and update a large number of VMs.

1. G/ "Create a virtual machine scale set https://portal.azure.com/#create/microsoft.vmss

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
   

<hr />

<a name="New_Linux_CLI"></a>

### Create Linux VM using CLI

<pre><strong>AZ_ADMIN_USER="mrtoad2"  # from .secrets.sh file?
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


### Just-in-time VM access

To improve security, enable just-in-time VM access.

   A just-in-time access enables you to lock down inbound traffic to your VM by allowing access for only a limited time. The just-in-time feature is available as part of the Azure Security Center standard tier.Learn more about just-in-time access

1. Within a VM, click <strong>Configuration</strong> blade.

   Upgrade your Security Center subscription to enable a just-in-time access

1. If you have on-prem license, click Yes to "Would you like to use an existing Windows Server license?" to save up to 49% with a license you already own using Azure Hybrid Benefit.

1. Specify a Proximity placement group

   Proximity placement group can only be updated when the virtual machine is deallocated.

1. Specify the Host Group

   Host can only be updated when the virtual machine is deallocated.

   Azure Dedicated Hosts allow you to provision and manage a physical server within our data centers that are dedicated to your Azure subscription. A dedicated host gives you assurance that only VMs from your subscription are on the host, flexibility to choose VMs from your subscription that will be provisioned on the host, and the control of platform maintenance at the level of the host.


<a name="VM_GUI"></a>

### Use Azure Portal GUI

1. All Services -> Virtual Machines

   Commands: Basics | Disks | Networking | Management | Advanced | Tags | Review + create

   ### VM Basics

1. Project details: Subscription:
1. Resource Group
1. Virtual machine name:
1. Region:
1. Availability options:
1. Image:
1. Azure Spot instance: Dx vCPUs, etc.
1. Authentication account: Username, Password
1. Inbound port rules:
1. Select inbound ports: RDP (3389)

1. RDP into VM.



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


<a name="VM_PS"></a>

### Create VM using PowerShell ps1 file

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=901540c5-bf67-408d-8d8f-d68005676c83">VIDEO</a>:
<a target="_blank" href="https://github.com/MicrosoftLearning/AZ-303-Microsoft-Azure-Architect-Technologies/blob/master/Instructions/Labs/Module_10_Lab.md">LAB</a>:

   <pre>$location="westus"
New-AzSubscriptionDeployment -Name az30310subaDeployment -Location $location -rgName 'az30310a-labRG' -rgLocation $location -TemplateFile $HOME/azuredeploy30310suba.json
   </pre>

<hr />

<a name="VM_Docker"></a>

### Create VM using Docker

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


## ACI (Azure Container Instances)

<a target="_blank" href="https://www.skillpipe.com/?lang=en-GB#/reader/urn:uuid:e36b495e-ef2a-5560-893e-f22ebe2ac3e6@2021-03-19T02:45:22Z/content">LEARN</a>:

1. Create a <strong>single (machine)</strong>, akin to one K8s pod based on a predefined image in the Azure Registry Service (ARS):

   <pre>DNS_NAME_LABEL=aci-demo-$RANDOM
az container create --name mycontainer --resource_group learn-deploy-aci-rg \
  --image mirosoft/aci-helloworld --ports 80 --location eastus \
  --dns-name-label $DNS_NAME_LABEL
   </pre>

1. In a browser, the public URL is, assuming $RANDOM is resolved to 1234 and location eastus:

   <pre>https://aci-demo-$RANDOM.eastus.azureci.com</pre>

   The "ci" is for container instance.


## AKS (Azure Kubernetes Service)

https://azure.microsoft.com/en-us/services/kubernetes-service/

See https://wilsonmar.github.io/kubernetes

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


## Availability ScaleSets

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=3h49m48s">VIDEO</a>

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



## Batch commands

Azure provides a way to perform the same process on many at once. See:

https://docs.microsoft.com/en-us/cli/azure/batch?view=azure-cli-latest


<a name="Event_Grid"></a>

## Event Grid

https://docs.microsoft.com/en-us/azure/event-grid/overview
https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/application-integratio
n-using-event-grid



## Redis Cache

* https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure
* https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure#memory-policies



## Resources

<a target="_blank" href="https://channel9.msdn.com/Blogs/One-Dev-Minute/Can-I-create-a-Nuxtjs-website-for-free--One-Dev-Question?ocid=player">Nuxt.js</a>.

## More on DevSecOps #

This is one of a series on DevSecOps:

{% include devops_links.html %}
