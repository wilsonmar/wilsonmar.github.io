---
layout: post
title: "Azure Cloud PowerShell Scripting"
excerpt: "Do anything you want!"
tags: [cloud, powershell]
image:
# fig blue powershell icon-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15307772/b335270e-1b93-11e6-9552-d3022de2b9ce.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />
{% include _toc.html %}

This tutorial describes the use of PowerShell Core on Azure cloud.

Powershell refers to both the command-line shell and scripting language designed for system administration. 
When "PowerShell Core 6.0" was announced on January 10, 2018, the word "Powershell" on its own now refers to the decade-old "PowerShell" integrated into all recent versions of Microsoft's Windows operating system. 

The new "PowerShell Core" is available as a cross-platform application such that scripts written on MacOS will run on Windows, Linux, or other supported operating system. This also means that PowerShell Core does not have commands associated with the .NET Framework (for Windows OS).

This is a similar rebranding of .NET vs. .NET Core. 

PowerShell <strong>cmdlets</strong> let you manage the computers from the command line.

See <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/scripting/learn/windows-powershell-glossary?view=powershell-6">Glossary of terms</a>

## Install PowerShell Core

PowerShell Core supports macOS 10.12 and higher.
See <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-6">this for other os</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-6">This</a>
says "xcode-select --install" is needed as a pre-requisite.

1. Install using Homebrew:

   <pre><strong>brew cask install powershell</strong></pre>

   ATTENTION: Enter your password when prompted.

   <a name="VerifyPSInstall"></a>

1. Verify that your install is working properly:

   <pre><strong>pwsh</strong></pre>
 
   The response at time of writing:

   <pre>
PowerShell v6.2.0
Copyright (c) Microsoft Corporation. All rights reserved.
&nbsp;
<a target="_blank" href="https://aka.ms/pscore6-docs">https://aka.ms/pscore6-docs</a>
Type 'help' to get help.
PS /Users/...> 
   </pre>

   `PS` means you are in the PowerShell shell. 

1. To get the current version:

   <pre><strong>$PSVersionTable</strong></pre>

   The response at time of writing:

   <pre>
Name                           Value
----                           -----
PSVersion                      6.2.0
PSEdition                      Core
GitCommitId                    6.2.0
OS                             Darwin 18.5.0 Darwin Kernel Version 18.5.0: Mon Mar 11 20:40:32 PDT 2019; root:xnu-4903.251.3~3/RELEASE_X86_64
Platform                       Unix
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0…}
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1
WSManStackVersion              3.0
   </pre>

1. To exit out of PS and into the Bash shell:

   <pre><strong>exit</strong></pre>

1. <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/scripting/learn/understanding-important-powershell-concepts?view=powershell-6">Learn PowerShell</a>


   ### Upgrade PowerShell

1. To upgrade:

   <pre><strong>brew cask upgrade powershell</strong></pre>

1. <a href="#VerifyPSInstall">Verify PowerShell install</a> again.


<a target="_blank" href="https://technet.microsoft.com/en-us/library/dn807169.aspx">
Windows PowerShellGet Module</a> if you don't want to install these from the
<a target="_blank" href="https://www.microsoft.com/web/downloads/platform.aspx">Web Platform Installer (wpilauncher.exe) at
https://www.microsoft.com/web/downloads/platform.aspx</a>


### Install for ARM Declarative Templates #

   <strong>declarative syntax</strong> are defined
   in Resource Manager <strong>templates</strong>
   used by ARM to enable infrastructure configurations to be defined
   (much like Puppet).

### Install for ASM Imperative Commands #

   <strong>Imperative</strong> commands (verbs such as to start or stop an app or machine)
   are used in the classic ASM. If you're not using ASM, skip this.

0. http://azure.microsoft.com/en-us/downloads
0. Click PowerShell to download WindowsAzurePowershellGet.3f.3f.3fnew.exe and invoke it to download more.
0. Click Install.
0. Accept the pre-requisite of <strong>Windows Azure Powershell</strong>.

0. Click Add for <strong>Azure Cross-platform Command-line Tools</strong> to download WindowsAzureXPlatCLI.3f.3f.3fnew.exe
   aka Power Tools

   NOTE: "XPlat" means Cross-platform. It's for ASM portal usage.


### Install PowerShell #

Run from the <a target="_blank" href="https://www.powershellgallery.com/items?itemType=PSModule">
Powershell Gallery</a> the Workflow to Download All Gallery Modules:

0. Click the "Deploy" button or:

   <pre><strong>
   Install-Script -Name Download-AllGalleryModules
   </strong></pre>

0. Press Y to accept that the modules are from an untrusted source.

0. Click the "Deploy" button. You should see Azure's Custon Deployment bolt with Parameters:

   <amp-img width="632" height="703" alt="azure deploy 2016-05-17-1264x1406.png" src="https://cloud.githubusercontent.com/assets/300046/15326492/733d052c-1c0b-11e6-980c-fc9adef91e95.png"></amp-img>

0. Type in for new Resource Group name "Download-AllGalleryModules".
0. Click Create to see error icons.
0. Click Edit parameters.
0. Select your Resource group location (such as "East US 2").
0. Click Review legal terms then click Purchase.
0. Click Create.

### Make Imperative Commands #

   <tt><strong>PS C:\\>
   </strong></tt>

Windows PowerShell <strong>providers</strong> access data stores, such as the Windows Registry and certificate store, as easily as you access the file system. 

Install NuGet provider:

   <pre><strong>
   Install-PackageProvider -Name NuGet -Force
   </strong></pre>

Get a count of how many commands for Azure module:

   <pre><strong>
   Get-Command -Module Azure | Measure-Object
   </strong></pre>

   I got a count of 697 commands for just Azure for ASM.

List Azure commands containing "vm":

   <pre><strong>
   Get-Command -Module Azure -noun *vm*
   </strong></pre>

### Enable PS1 execution #

PowerShell commands can be script files with <strong>.ps1</strong> file extension.

   <pre><strong>
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
   </strong></pre>


### PowerShell Version #

As with all PowerShell versions:

   <pre><strong>
   $PSVersionTable
   </strong></pre>

On MacOS:

{% highlight text %}
{% endhighlight %}


On Windows 10:

{% highlight text %}
Name                           Value
----                           -----
PSVersion                      5.0.10586.63
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
BuildVersion                   10.0.10586.63
CLRVersion                     4.0.30319.42000
WSManStackVersion              3.0
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1
{% endhighlight %}

   Compare against the response on Windows 7:

{% highlight text %}
Name                           Value
----                           -----
CLRVersion                     2.0.50727.5420
BuildVersion                   6.1.7601.17514
PSVersion                      2.0
WSManStackVersion              2.0
PSCompatibleVersions           {1.0, 2.0}
SerializationVersion           1.1.0.1
PSRemotingProtocolVersion      2.1
{% endhighlight %}


   ## Azure 

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/azure/install-azurermps-maclinux?view=azurermps-4.4.0">NOTE</a>:

0. Establish admin rights on MacOS:

   <tt><strong>sudo -v
   </strong></tt>

0. Install Azure PowerShell for .NET Core:

   <tt><strong>Install-Module AzureRM.NetCore
   </strong></tt>

0. Press A for all to this prompt:

   <pre>
Untrusted repository
You are installing the modules from an untrusted repository. If you trust this repository, change its InstallationPolicy value by running the 
Set-PSRepository cmdlet. Are you sure you want to install the modules from 'PSGallery'?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): 
   </pre>

   <strong>BLAH: This keeps me from going further:

   <pre>
PackageManagement\Install-Package : Administrator rights are required to install modules in 
'/usr/local/microsoft/powershell/6.0.0-beta.7/Modules'. Log on to the computer with an account that has Administrator rights, and then try 
again, or install '/Users/wilsonmar/.local/share/powershell/Modules' by adding "-Scope CurrentUser" to your command. You can also try running 
the Windows PowerShell session with elevated rights (Run as Administrator).
At /usr/local/microsoft/powershell/6.0.0-beta.7/Modules/PowerShellGet/1.1.3.2/PSModule.psm1:1867 char:21
+ ...          $null = PackageManagement\Install-Package @PSBoundParameters
+                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidArgument: (Microsoft.Power....InstallPackage:InstallPackage) [Install-Package], Exception
    + FullyQualifiedErrorId : InstallModuleNeedsCurrentUserScopeParameterForNonAdminUser,Install-PackageUtility,Microsoft.PowerShell.PackageMan 
   agement.Cmdlets.InstallPackage
   </pre>

0. Load the module into your PowerShell session. Modules are loaded using the Import-Module cmdlet:

   Import-Module AzureRM.Netcore


   http://www.signalwarrant.com/automate-creating-lab-virtual-machines-in-azure-with-powershell/


   ## Environments

   https://docs.microsoft.com/en-us/powershell/azure/authenticate-azureps?view=azurermps-4.4.0

0. Get a list of environments available:

   <tt><strong>Get-AzureRmEnvironment | Select-Object Name
   </strong></tt>

   Sample response:

   <pre>
AzureCloud
AzureChinaCloud
AzureUSGovernment
AzureGermanCloud
   </pre>

0. Create an Azure Service Principal if you don't have one

   https://docs.microsoft.com/en-us/powershell/azure/create-azure-service-principal-azureps?view=azurermps-4.4.0

0. Get your TenantId from your subscription after logging in interactively:

   <tt><strong>Get-AzureRmSubscription
   </strong></tt>

   CAUTION: This sample response exposes senstive information:

   <pre>
Environment           : AzureCloud
Account               : username@contoso.com
TenantId              : XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
SubscriptionId        : XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
SubscriptionName      : My Production Subscription
CurrentStorageAccount :
   </pre>

0. Get the dialog box asking for your Azure credentials to login interactively at <a target="_blank" href="https://aka.ms/devicelogin">https://aka.ms/devicelogin</a>:

   <tt><strong>
   Login-AzureRmAccount -EnvironmentName AzureCloud
   </strong></tt>

   Alternately, login by specifying an Azure Service Principle:

   Login-AzureRmAccount -ServicePrincipal -ApplicationId  "http://my-app" -Credential $pscredential -TenantId $tenantid

   PROTIP: Some put the above command in a command file with a short name.




List Mangement Verbs

   <pre><strong>
   azure
   </strong></pre>

Clear Screen

   <pre><strong>
   cls
   </strong></pre>

Download help files:

   <pre><strong>
   update-help -force
   </strong></pre>

Pop-up help for a command to a different window for multiple windows:

   <pre><strong>
   help Get-AzureSubscription -ShowWindow
   </strong></pre>

### Authenticate #

   <pre><strong>
   azure login
   </strong></pre>

   Copy the code and open
   <a target="_blank" href="https://aka.ms/devicelogin">https://aka.ms/devicelogin</a>

   <pre><strong>
   azure account list
   </strong></pre>

   <pre><strong>
   add-azureaccount
   </strong></pre>

   <pre><strong>
   Get-AzureSubscription
   </strong></pre>

### Envrionment variables #

To list, remember the colon at the end:

   <pre><strong>
   Get-ChildItem Env:
   </strong></pre>

For the value to a specific variable:

   <pre><strong>
   Get-ChildItem Env:PATHEXT
   </strong></pre>

Define a temporary environment variable:

   <pre><strong>
   $env:MyTestVariable = "A temporary test variable."
   </strong></pre>

Define a new permanent environment variable:

   <pre><strong>
   [Environment]::SetEnvironmentVariable("TestVariableName", "My Value", "<em>option</em>")
   </strong></pre>

   In option is either "Machine", "User", or "Process".


### For loops #

Based on http://www.symbiosysconsulting.com/pinging-from-powershell

   <pre><strong>
   1..254 | ForEach-Object { ping "192.168.0.$_" }
   </strong></pre>

   Notice "$_" is the placeholder variable for the range before the pipe.

   This loops through a range of IP's within an internal subnet to show which ones respond:

   <pre><strong>
   (
    (1..254) | % {
        $ping = New-Object System.Net.NetworkInformation.Ping;
        [Void](Register-ObjectEvent $ping PingCompleted -Action {
            param($s, $e);
            if($e.Reply.Status -eq "Success") {
                Write-Host $e.Reply.Address, ($e.Reply.RoundtripTime.toString() + "ms")
            }
        })
        $ping.SendPingAsync("192.168.0.$_")
    }
   ).Wait()
   </strong></pre>

Rather than looping:

## Declarative Templates #

Multiple services can be deployed at the same time (asychronously), as a group, along with their dependencies by
using a <strong>group template</strong> that defines <strong>desired end state</strong>
of application components.

The Local Configuration Manager (LCM)  introduced in Windows PowerShell 5.0 is the engine of
DSC = Desired State Configuration.

Differences in each stage of the application lifecycle can be specified.

This makes it easy to get a total bill by viewing the rolled-up costs for the entire group or for a group of resources sharing the same tag.

See <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/">
Azure Resource Manager overview</a> by Tom FitzMacken.

At <a target="_blank" href="http://github.com/Azure/">http://github.com/Azure</a> are<br />
sample ARM JSON templates at <a target="_blank" href="https://github.com/Azure/azure-quickstart-templates/">
azure-quickstart-template code</a> presented
<a target="_blank" href="https://azure.microsoft.com/en-us/documentation/templates/">
here</a>.

Every template contains this:

{% highlight json %}
{
    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
    "conventVersion": "1.0.0.0",
    "parameters":{
      "storageAccountUniqueName": {
         "type": "String",
         "metadata": {
           "description": "Unique name of storage account"
       }
      "storageAccountType": {
         "type": "String",
         "defaultValue": "Standard_LRS",
         "allowedValues": [
              "Standard_LRS",
              "Standard_GRS",
              "Standard_RAGRS",
              "Premium_LRS",
          ]
       }
    }
  },
    "variables":{

  },
    "resources":{

  },
    "outputs":{

  }
}{% endhighlight %}

### Types #

 * Standard_LRS = Locally Redundant Storage
 * Standard_GRS = Geographically Redundant Storage
 * Standard_RAGRS = Read Access Geographically Redundant Storage
 * Premium_LRS =

## Override #

Parameters can be overriden with separate parameter files references:

{% highlight json %}
{
    "type": "Microsoft.Storage/storageAccounts",
    "name": "variables('StorageAccountName')",
    "location": "[resourceGroup().location]",
    "apiVersion": "2015-05-01-preview",
    "propterties": {
      "accountType": "[parameters('storageAccountType')]"
    }
}{% endhighlight %}

"[resourceGroup().location]" enables the resource group to span across regions.

## Load Balancer #

An example DNS host name is mydeployment.eastus.cloudapp.azure.com, IP 23.99.9.198.

Up to 100 vms can be supported by a Load Balancer.

NAT rules on the Load Balancer route inbound traffic dynamically or statically to reserved IPs.

## Virtual Machine images #

An example declarative template would include:

{% highlight json %}
    "imageReference": {
      "publisher": "MicrosoftSQLServer",
      "offer": "SQL2014-WS2012R2",
      "sku": "Standard",
      "version": "latest"
    }{% endhighlight %}

publisher options:

   * "MicrosoftSQLServer"
   * redhat
   * barracuda

sku options:

   * "Standard"
   * "Web"
   * "Enterprise"
   * "EnterpriseOptimized"
   * "EnterpriseOptimizedDW" for Data Warehouse needing fast read but can tolerate slower bulk writes
   * "EnterpriseOptimizedOLTP" needing fast read and fast write

"offer" options:

   * "SP2014SP1-WS2012R2"
   * "SQL2014-WS2012R2"
   * etc.

The equivalent

* Get-AzureRmVMImagePublisher -Location $locName | select PublisherName
* Get-AzureRmVMImageOffer -Location $locName -PublisherName $Publisher
* Get-AzureRmVMImageSku -Location $locName -PublisherName $Publisher -Offer $offer



## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
