---
layout: post
title: "PowerShell Modules"
excerpt: "Share scripting functions with others"
tags: [cloud, powershell, microsoft]
date: "2016-12-04"
file: "powershell-modules"
image:
# fig blue powershell icon-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15307772/b335270e-1b93-11e6-9552-d3022de2b9ce.jpg
  credit: PowerShell Magazine
  creditlink: http://www.powershellmagazine.com/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


## PowerShellGallery

CAUTION: 
<a target="_blank" href="https://github.com/PowerShell/PowerShellGet/issues/21">
An issue exists on Mac</a>
where module install requires elevated root priviledges.
So no Install-Module on Mac after loading Powershell with:

   `sudo -s`

   (sudo powershell isn't enough)

The <a target="_blank" href="https://www.powershellgallery.com/">
Most downloaded module</a> in the<br />
<a target="_blank" href="https://www.powershellgallery.com/">
https://www.powershellgallery.com</a>
is
<a target="_blank" href="https://msconfiggallery.cloudapp.net/packages/PSDscResources/2.1.0.0">
PSDscResources</a> (from Micorosoft's PowerShellTeam)
which provides standard DSC resources.

Carbon automates configuration Windows 7, 8, 2008, and 2012 
and automation the installation 
and configuration of Windows applications, websites, and services.


## PowerShellGet Gallery

With the <a href="http://go.microsoft.com/fwlink/?LinkID=760387&clcid=0x409">
PowerShellGet</a> package management module, you can:

Rather than an <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/PowerShellGet?f=255&MSPPError=-2147217396">
alphabetical list of modules</a> at 
<a target="_blank" href="https://www.powershellgallery.com/">
https://www.powershellgallery.com</a> (which lists counts),
below here are tables with right-align for easy comparison:

   | -  | Module | Script |
   | :- | -----: | -----: |
   | Search |<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/find-module">Find-Module</a> | <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/find-script">Find-Script</a> |
   |-|<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Install-module">Install-Module</a> | <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Install-script">Install-Script</a> |
   |-|<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Uninstall-module">Uninstall-Module</a> | <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Uninstall-script">Uninstall-Script</a> |
   |-|<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Get-module">Get-InstalledModule</a> | <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Get-InstalledScript">Get-InstalledScript</a> |
   | Upload |<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Publish-module">Publish-Module</a> | <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Publish-script">Publish-Script</a> |
   |Save |<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Save-module">Save-Module</a> | <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Save-script">Save-Script</a> |
   |-|<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Update-module">Update-Module</a> | <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Update-script">Update-Script</a> |

Metadata:

   | -  | Module | Script |
   | :- | -----: | -----: |
   |-|<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/update-ModuleManifest">Update-ModuleManifest</a> |<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/update-ScriptFileInfo">Update-ScriptFileInfo</a> |
   |-|-|<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/find-ScriptFileInfo">Find-ScriptFileInfo</a> |
   |-|-| <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/new-ScriptFileInfo">New-ScriptFileInfo</a> |
   |-|-| <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/test-ScriptFileInfo">Test-ScriptFileInfo</a> |


QUESTION: Modules with a single action:

   | - | Singles |
   | :--- | ------: |
   |-|<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/find-command">Find-Command</a> |
   |-|<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/find-DscResource">Find-DscResource</a> |
   |-|<a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/find-RoleCapability">Find-RoleCapability</a> |
   |-| <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Get-PSRepository">Get-PSRepository</a> |
   |-| <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Set-PSRepository">Set-PSRepository</a> |
   |Add your own | <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Register-PSRepository">Register-PSRepository</a> |
   |-| <a target="_blank" href="https://msdn.microsoft.com/powershell/reference/5.1/PowerShellGet/Unregister-PSRepository">Unregister-PSRepository</a> |

## Documentation

The <a target="_blank" href="http://go.microsoft.com/fwlink/?LinkID=825202&clcid=0x409">
   documentation</a> 
   mentions only Windows and not Mac OS.

0. BLAH: Install local help for these commands is denied:

   `Update-Help -Module PowerShellGet` 

   <a target="_blank" href="https://blogs.msdn.microsoft.com/mvpawardprogram/2014/10/06/package-management-for-powershell-modules-with-powershellget/">
   PowerShellGet</a> based on Microsoft's 
   <a target="_blank" href="https://github.com/oneget/oneget">
   OneGet core</a> for package management.

   https://github.com/juanpablojofre/PowerShell-Doc-Utilities

## Avoid truncation with ellipsis

<a target="_blank" href="https://greiginsydney.com/viewing-truncated-powershell-output/">
Based on this</a>,
<a target="_blank" href="https://msdn.microsoft.com/powershell/scripting/getting-started/cookbooks/using-format-commands-to-change-output-view">
this</a>, and
<a target="_blank" href="https://poshoholic.com/2010/11/11/powershell-quick-tip-creating-wide-tables-with-powershell/">
this</a>.

0. To keep collections from being truncated and replace with "..." (ellipsis)
   like this:

   `{Add-Content, Clear-Content, Clear-ItemProperty, Join-Path...}`

   <pre><strong>
   $FormatEnumerationLimit=-1
   </strong></pre>

   TODO: Make this happen on every terminal instantiation.
   

## List modules available

   <pre><strong>
   Get-Module -ListAvailable | out-string -Width 300
   </strong></pre>

   `| out-string -Width 170` expands the terminal buffer to
   avoid having output truncated and replace with "..." (ellipsis).

   The response lists modules supplied natively before custom modules are added.

   <pre>
    Directory: /usr/local/microsoft/powershell/6.0.0-alpha.12/Modules
&nbsp;
ModuleType Version    Name                                ExportedCommands
---------- -------    ----                                ----------------
Manifest   1.0.1.0    Microsoft.PowerShell.Archive        {Compress-Archive, Expand-Archive}                                                                              
Manifest   3.0.0.0    Microsoft.PowerShell.Host           {Start-Transcript, Stop-Transcript}                                                                             
Manifest   3.1.0.0    Microsoft.PowerShell.Management     {Add-Content, Clear-Content, Clear-ItemProperty, Join-Path...}                                                  
Manifest   3.0.0.0    Microsoft.PowerShell.Security       {Get-Credential, Get-ExecutionPolicy, Set-ExecutionPolicy, ConvertFrom-SecureString...}                         
Manifest   3.1.0.0    Microsoft.PowerShell.Utility        {Format-List, Format-Custom, Format-Table, Format-Wide...}                                                      
Binary     1.0.0.1    PackageManagement                   {Find-Package, Get-Package, Get-PackageProvider, Get-PackageSource...}                                          
Script     3.3.9      Pester                              {Describe, Context, It, Should...}                                                                              
Script     1.1.0.0    PowerShellGet                       {Install-Module, Find-Module, Save-Module, Update-Module...}                                                    
Script     0.0        PSDesiredStateConfiguration         {StrongConnect, IsHiddenResource, Write-MetaConfigFile, Get-InnerMostErrorRecord...}                            
Script     1.2        PSReadLine                          {Get-PSReadlineKeyHandler, Set-PSReadlineKeyHandler, Remove-PSReadlineKeyHandler, Get-PSReadlineOption...}      
   </pre>

  QUESTION: How to exclude from list Manifest and system built-in items?

## Where are they stored?

   Such system modules are stored in an environment variable revealed by this:

   `$Env:PSModulePath`

   Custom modules that you write go into path

   `$home\Documents\WindowsPowerShell\Modules\`

   <pre><strong>
   Get-Module -ListAvailable | out-string -Width 300
   </strong></pre>


## References

* <a target="_blank" href="">

https://github.com/garignack/InfosecPosh101


## More on API Microservices #

This is one of a series:

{% include api_links.html %}

