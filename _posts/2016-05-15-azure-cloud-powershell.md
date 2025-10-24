---
layout: post
date: "2025-10-24"
lastchange: "25-10-24 v022 + hdr & az in powershell :2016-05-15-azure-cloud-powershell.md"
url: "https://wilsonmar.github.io/azure-cloud-powershell"
file: "azure-cloud-powershell"
title: "Azure Cloud PowerShell Scripting"
excerpt: "Do anything you want!"
tags: [cloud, powershell]
image:
# fig blue powershell icon-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15307772/b335270e-1b93-11e6-9552-d3022de2b9ce.jpg
  credit:
  creditlink:
comments: true
created: "2016-05-15"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This tutorial describes the install and coding of <strong>automation</strong> within the Azure cloud, using PowerShell, CLI, ARM templates in JSON, etc.

This is one of a series about Azure on my blog:
   * <a target="_blank" href="https://wilsonmar.github.io/azure-onboarding/">Azure Onramp</a> (obtaining accounts)
   * Azure PowerShell install and coding
   * Azure CLI install and coding
   * Azure-specific Automation 
   * Azure Compute (VM)
   * Azure Storage
   * Azure Functions (Serverless)
   * Azure Monitoring
   <br /><br />

<hr />

## Why PowerShell?

PowerShell is more cross-platform than CLI alone.

<a target="_blank" href="https://open.substack.com/pub/m365show/p/azure-cli-vs-powershell-one-clear?utm_campaign=post&utm_medium=email">BLOG</a>:
Powershell has built-in handling of objects and JSON, so can take output from CLI commands, filter by property, and shape the results into a clean table, export to CSV or Excel format. Examples:

* scan all the VMs in your tenant for missing tags. With CLI, you can quickly pull back the dataset. But reading through nested JSON to identify the outliers is clumsy. Use CLI inside PowerShell, and you can loop through those results, match only the missing items, and immediately export them into a CSV. In real time, you’ve built a compliance report without parsing a single string by hand.

* cross-check each machine against naming conventions. Maybe you want to send the results out automatically by email or post them to Teams. CLI alone won’t handle those extra steps—you’d end up stitching together third-party tools. With PowerShell wrapping around CLI, you add them in seamlessly, and the output is exactly what your stakeholders want on their desk.


## MacOS Install

1. Install PowerShell as described on my blog:

   <a target="_blank" href="https://wilsonmar.github.io/powershell-install-coding/">wilsonmar.github.io/powershell-install-coding</a>

1. These if errors below:

   <pre>Update NuGet
   Install-PackageProvider -Name NuGet -Force
   Exit

   Update PowerShellGet
   Install-Module -Name PowerShellGet -Force
   Exit
   </pre>

   ## Install PowerShell Scripts #

   Run from the <a target="_blank" href="https://www.powershellgallery.com/items?itemType=PSModule">
   Powershell Gallery</a> the Workflow to Download All Gallery Modules:

1. Click the "Deploy" button or:

   <pre><strong>Install-Script -Name Download-AllGalleryModules
   </strong></pre>

   Response:

   <pre>Untrusted repository
You are installing the scripts from an untrusted repository. If you trust
this repository, change its InstallationPolicy value by running the
Set-PSRepository cmdlet. Are you sure you want to install the scripts from
'PSGallery'?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help
   </pre>

1. Press A to accept install of all modules from an untrusted source.

   BLAH: Response: See https://github.com/Azure/azure-powershell/issues/11772

   <pre>Install-Package: /usr/local/microsoft/powershell/7/Modules/PowerShellGet/PSModule.psm1:10044                             Line 10044 |
      | … talledPackages = PackageManagement\Install-Package @PSBoundParameters
      | The specified script file
      | '/var/folders/r7/_4wzn4hn6yb2xxlms995lnkc0000gn/T/1269304408/Download-AllGalleryModules.0.1.0/Download-AllGalleryModules.ps1' has parse errors, try again after fixing the parse errors.
   </pre>

0. Click the "Deploy" button. You should see Azure's Custon Deployment bolt with Parameters:

   <amp-img width="632" height="703" alt="azure deploy 2016-05-17-1264x1406.png" src="https://cloud.githubusercontent.com/assets/300046/15326492/733d052c-1c0b-11e6-980c-fc9adef91e95.png"></amp-img>

0. Type in for new Resource Group name "Download-AllGalleryModules".
0. Click Create to see error icons.
0. Click Edit parameters.
0. Select your Resource group location (such as "East US 2").
0. Click Review legal terms then click Purchase.
0. Click Create.

## PowerShell Prompt

To specify a carriage return and new line, instead of the <tt>\n</tt> on Linux, on PowerShell we use the back-tick key in <tt>`r`n</tt>.

I use that to <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.1">customize my PowerShell prompt</a> to be at the same location every time.

1. There are <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.1"">several profile .ps1 files</a>. For a list of them, within PowerShell:

   <pre><strong>$PROFILE | Get-Member -Type NoteProperty</strong></pre>

1. To test whether a file has been created:

   Test-Path -Path $PROFILE.AllUsersAllHosts

1. On a Mac, edit the <tt>~/.profile</tt> file (which is automatically run when PowerShell is started) to add my <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_prompts?view=powershell-7.1">custom prompt</a>:

   <pre>function Prompt
{
$env:COMPUTERNAME + "`r`n  $(Get-Date) " + (Get-Location) + "`r`n> "
}
   </pre>

The PowerShell $PSHOME folder is different depending on operating system:

   * <tt>/usr/local/bin/pwsh</tt> symlinks to <tt>/usr/local/microsoft/powershell/7.1.3/</tt> on MacOS due to BSD <a target="_blank" href="https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html">XDG Base Directory Specification</a>.

   * <tt>/opt</tt> on Linux

<hr />

## CLI AZ Versions & Upgrade

1. List Azure Verbs

   <pre><strong>az
   </strong></pre>

   Response:
   <pre>Welcome to the cool new Azure CLI!</pre>


1. List Azure version:

   <pre><strong>az --version
   </strong></pre>

   <pre>azure-cli                         2.19.1 *
core                              2.19.1 *
telemetry                          1.0.6
Extensions:
azure-cli-iot-ext                  0.8.7
Python location '/usr/local/Cellar/azure-cli/2.19.1/libexec/bin/python'
Extensions directory '/Users/wilson_mar/.azure/cliextensions'
Python (Darwin) 3.8.8 (default, Feb 21 2021, 08:26:42) 
[Clang 12.0.0 (clang-1200.0.32.29)]
Legal docs and information: aka.ms/AzureCliLegal
You have 2 updates available. Consider updating your CLI installation with 'az upgrade'
&nbsp;
Please let us know how we are doing: https://aka.ms/azureclihats
and let us know if you're interested in trying out our newest features: https://aka.ms/CLIUXstudy
   </pre>

1. Upgrade Azure:

   <pre><strong>az upgrade
   </strong></pre>

   <pre>This command is in preview and under development. Reference and support levels: https://aka.ms/CLI_refstatus
Your current Azure CLI version is 2.19.1. Latest version available is 2.20.0.
Please check the release notes first: https://docs.microsoft.com/cli/azure/release-notes-azure-cli
   </pre>

1. List Regions = Locations with Providers:

   <pre><strong>$FormatEnumerationLimit=-1 
    Get-AzLocation
   </strong></pre>

   PROTIP: The format command expands elipsis (...) See https://greiginsydney.com/viewing-truncated-powershell-output/

   <pre>
Location    : eastasia
DisplayName : East Asia
Providers   : {Microsoft.Security, 84codes.CloudAMQP, LiveArena.Broadcast, Microsoft.AAD…}
   </pre>


### Install for ARM Declarative Templates #

   <strong>declarative syntax</strong> are defined
   in Resource Manager <strong>templates</strong>
   used by ARM to enable infrastructure configurations to be defined
   (much like Puppet).


<hr />


## Install Azure Module

1. Within pwsh <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/azure/azurerm/install-azurerm-ps?view=azurermps-6.13.0">:</a>

   <pre><strong>Install-Module -Name Az -AllowClobber</strong></pre>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/azure/install-az-ps">Install Azure PowerShell</a>

1. Type A to respond:

   <pre>Untrusted repository
You are installing the modules from an untrusted repository. If you trust this repository, change its InstallationPolicy value by running the Set-PSRepository cmdlet. Are you sure you 
want to install the modules from 'PSGallery'?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): 
   </pre>


   ### Azure .NET Core Deprecated

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/azure/install-azurermps-maclinux?view=azurermps-4.4.0">NOTE</a>: We don't use "AzureRM...." modules/commands any more.

0. Establish admin rights on MacOS:

   <tt><strong>sudo -v
   </strong></tt>

0. Install Azure PowerShell for .NET Core:

   <tt><strong>Install-Module AzureRM.NetCore
   </strong></tt>

   No response is expected when successful.

0. Load the module into your PowerShell session. Modules are loaded using the Import-Module cmdlet:

   <pre><strong>Import-Module AzureRM.Netcore</strong></pre>

   <pre>WARNING: AzureRM.Netcore has been deprecated.  Use the 'Az' module instead.  The 'Az' module is avalable from the PSGallery https://www.powershellgallery.com/packages/Az/. You can find information about getting started with 'Az' at https://docs.microsoft.com/en-us/powershell/azure/new-azureps-module-az. To uninstall AzureRM.Netcore you can use the provided 'Uninstall-AzureRMNetcore' cmdlet.
   </pre>

   http://www.signalwarrant.com/automate-creating-lab-virtual-machines-in-azure-with-powershell/


   ## Azure Environments (Clouds)

   <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/azure/authenticate-azureps?view=azurermps-4.4.0">READ</a>:

0. Get a list of Resoure Manager Environments available:

   <tt><strong>Get-AzureRmEnvironment | Select-Object Name
   </strong></tt>

   Sample response:

   <pre>AzureCloud
AzureChinaCloud
AzureUSGovernment
AzureGermanCloud
   </pre>

0. Create an Azure Service Principal if you don't have one

   <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/azure/create-azure-service-principal-azureps?view=azurermps-4.4.0">READ</a>:

0. Get your TenantId from your subscription after logging in interactively:

   <tt><strong>Get-AzureRmSubscription
   </strong></tt>

   CAUTION: This sample response exposes senstive information:

   <pre>Environment           : AzureCloud
Account               : username@contoso.com
TenantId              : XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
SubscriptionId        : XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
SubscriptionName      : My Production Subscription
CurrentStorageAccount :
   </pre>

0. Get the dialog box asking for your Azure credentials to login interactively at <a target="_blank" href="https://aka.ms/devicelogin">https://aka.ms/devicelogin</a>:

   <tt><strong>Login-AzureRmAccount -EnvironmentName AzureCloud
   </strong></tt>

   Alternately, login by specifying an Azure Service Principle:

   Login-AzureRmAccount -ServicePrincipal -ApplicationId  "http://my-app" -Credential $pscredential -TenantId $tenantid

   PROTIP: Some put the above command in a command file with a short name.


1. Pop-up help for a command to a different window for multiple windows:

   <pre><strong>help Get-AzureSubscription -ShowWindow
   </strong></pre>


<hr />

## Alternative automation

<a target="_blank" href="https://www.youtube.com/watch?v=8E63s2QlbhA&t=6m9s">VIDEO</a>

### Pulumi

Pulumi enables programmatic access to Azure in JavaScript for use by application-building devs.

Pulumi does not generate templates.

### Azure Bicep

is an ARM DSL developed by the Azure team like Terraform

### Farmer 

Use simplified ".fs" DSL code that runs to spit out ARM template JSON files.

1. In the folder containing the .fs file you want to run:

   <pre><strong>dotnet run</strong></pre>

https://compositionalit.github.io/farmer/

https://github.com/compositionalit/farmer

<hr />

## Sign Into Azure

zzz

### Connect-AzAccount with credentials

1. Obtain a browser URL to <strong>sign into</strong> your Azure account:

   <pre><strong>Connect-AzAccount</strong></pre>

   or

   <pre><strong>Connect-AzureRmAccount</strong></pre>

   Alternately, to get prompted in the CLI:

   <pre>Login-AzAccount -Credential (Get-Credential)</pre>

   Response:

   <pre>PowerShell credential request
Enter your credentials.
User: 
   </pre>

1. On your default browser, pick (click on) the Microsoft account you want

   <pre>Authentication complete. You can return to the application. Feel free to close this browser tab.</pre>

1. Switch back to the Terminal to see Account (email), SubscriptionName, TenantId (GUI), Environment ("AzureCloud")

1. See https://docs.microsoft.com/en-us/powershell/azure/new-azureps-module-az?view=azps-5.6.0


### Authenticate into Azure Cloud #

1. The easiest way:

   <pre><strong>az login
   </strong></pre>

   The response:

   <pre>The default web browser has been opened at https://login.microsoftonline.com/common/oauth2/authorize. Please continue the login in the web browser. If no web browser is available or if the web browser fails to open, use device code flow with `az login --use-device-code`.
   </pre>

1. Pick an account in your default internet browser.
1. If you have MFA, answer it.
1. You should see on the browser:

   <pre>You have logged into Microsoft Azure!
You can close this window, or we will redirect you to the <u>Azure CLI documents</u> in 10 seconds.
   </pre>

   The URL to Azure CLI documents is:

   <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/">https://docs.microsoft.com/en-us/cli/azure</a>

1. Switch back to the CLI (on macOS: press command+tab).


## Resources

1. <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/scripting/learn/understanding-important-powershell-concepts?view=powershell-7">doc.microsoft.com: What is PowerShell?</a>

1. <a target="_blank" href="https://app.pluralsight.com/library/courses/powershell-getting-started/table-of-contents">Pluralsight VIDEO: "PowerShell 7.0.3: Getting Started" 3h 4m 14 Sep 2020</a> by Michael Bender (@MichaelBender, <a target="_blank" href="https://www.itsallgeek2mike.com/">itsallgeek2mike.com</a>)

1. https://docs.microsoft.com/en-us/azure/key-vault/general/tutorial-net-create-vault-azure-web-app

1. https://www.oneidentity.com/products/active-roles/


   ## Generate a visual diagram

1. Use VSCode "ARM Viewer" to generate a visual diagram 

   <a target="_blank" href="https://www.youtube.com/watch?v=ek8ArrOfJxA">VIDEO: Generate an Architecture Diagram</a>using <a target="_blank" href="https://diagrams.net">diagrams.net</a> 

   https://rules.ssw.com.au/architecture-diagram

   https://rules.ssw.com.au/azure-resources-diagram

   https://rules.ssw.com.au/azure-resources-creating


## More on DevSecOps #

This is one of a series on DevSecOps:

{% include devops_links.html %}
