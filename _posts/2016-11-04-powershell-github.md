---
layout: post
title: "PowerShell GitHub API Programming"
excerpt: "GitHub reaching to web servies on the web gives scripts data power"
tags: [cloud, powershell, microsoft]
shorturl: "https://git.io/v1lLj"
image:
# fig blue powershell icon-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15307772/b335270e-1b93-11e6-9552-d3022de2b9ce.jpg
  credit: PowerShell Magazine
  creditlink: http://www.powershellmagazine.com/
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />
{% include _toc.html %}

I wanted to make calls to GitHub's API from a PowerShell script.

While looking for examples, 
I found several libraries that already do it:

* <a target="_blank" href="https://github.com/pcgeek86/PSGitHub/">
   PsGitHub</a>
   by Trevor Sullivan

* <a target="_blank" href="https://github.com/Iristyle/Posh-GitHub/">
   Posh-GitHub</a> 
   by Ethan J. Brown installed by Chocolately.

* <a target="_blank" href="https://github.com/davidobrien1985/githubconnect">
   GitHubConnect</a> 
   by David O’Brien

* <a href="#PowerShellForGitHub">
   PowerShellForGitHub</a>
   by Microsoft's PowerShell team.


> Do you know of others? Please let me know.

<hr />

<a name="PowerShellForGitHub"></a>

## Use PowerShellForGitHub module

* <a target="_blank" href="https://github.com/PowerShell/PowerShellForGitHub/">
   PowerShellForGitHub</a>
   by Microsoft's PowerShell team.
   
   which exists within Microsoft's 
   <a target="_blank" href="https://blogs.technet.microsoft.com/poshchap/2015/08/07/getting-started-with-the-powershell-gallery/">
   PSGallery repository ecosystem</a> which consists of 
   <strong>modules</strong>.

   It's a <a target="_blank" href="https://www.simple-talk.com/sysadmin/powershell/managing-packages-using-windows-powershell/">
   package manager</a>
   like Chocolatey for Windows Desktops 
   and the Advanced Packaging Tool (APT) of Linux distributions. 

0. The module exists within several other 
   PS modules (in a PowerShell CLI Terminal window):

   <pre><strong>
   (Find-Module).count
   $response = Find-Module
   $response[0] | format-list # details for first item
   Set-PSRepository -Name PSGallery -InstallationPolicy Trusted 
   </strong></pre>

   `(Find-Module).count` returned 1084 on November 4, 2016.
   So list commands are not appropriate:

   <pre>
   $response | Sort-Object
   $response.GetEnumerator() | Sort-Object Value -descending
   </pre>

0. List the many fields in metadata for module PowerShellForGitHub:

   <pre>
   $response.GetEnumerator() | ?{ $_.Name -eq "PowerShellForGitHub" } | format-list
   </pre>

   The response:

   <pre>
Name                       : PowerShellForGitHub
Version                    : 0.1.0
Type                       : Module
Description                : PowerShell wrapper for GitHub API
Author                     : Microsoft Corporation
CompanyName                : PowerShellTeam
Copyright                  : (c) 2016 Microsoft Corporation. All rights 
                             reserved.
PublishedDate              : 7/27/16 8:33:44 PM
InstalledDate              : 
UpdatedDate                : 
LicenseUri                 : https://github.com/PowerShell/PowerShellForGitHub/
                             blob/master/LICENSE
ProjectUri                 : https://github.com/PowerShell/PowerShellForGitHub
IconUri                    : 
Tags                       : {GitHub, API, PowerShell, PSModule}
Includes                   : {Cmdlet, Workflow, Function, DscResource...}
PowerShellGetFormatVersion : 
ReleaseNotes               : 
Dependencies               : {}
RepositorySourceLocation   : https://www.powershellgallery.com/api/v2/
Repository                 : PSGallery
PackageManagementProvider  : NuGet
AdditionalMetadata         : {developmentDependency, FileList, 
                             isLatestVersion, IsPrerelease...}
   </pre>

0. This command is necessary to avoid errors when modules are installed:

   <tt><strong>
   Set-PSRepository -Name PSGallery -InstallationPolicy Trusted 
   </strong></tt>

   If it worked, no text is returned, just the PowerShell prompt again.

0. The GitHub README says to rename ApiTokensTemplate.psm1 to ApiTokens.psm1 and 
   update value of $global:gitHubApiToken with GitHub token for your account.

   QUESTION: how do I do that before having the file???

0. Install 
   <a target="_blank" href="https://www.powershellgallery.com/packages/PowerShellForGitHub">
   the latest module in PS Gallery</a>
   within the PowerShell CLI:

   <tt><strong>
   Install-Module -Name PowerShellForGitHub
   </strong></tt>

   If Set-PSRepoitory was not run before this, the following would appear:

   <pre>
Untrusted repository
You are installing the modules from an untrusted repository. If you trust this 
repository, change its InstallationPolicy value by running the Set-PSRepository
 cmdlet. Are you sure you want to install the modules from 'PSGallery'?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help 
(default is "N"):
   </pre>

   Rerun after Set-PSRepository:

   BLAH: The response I got is aother error, 
   but the message showed me where the file is installed on my Mac:

   <pre>
PackageManagement\Install-Package : Could not find a part of the path 
'<strong>/usr/local/microsoft/powershell/6.0.0-alpha.10/Modules/PowerShellForGitHub/0.1.0</strong>'.
Installing package 'PowerShellForGitHub'                                  
At /usr/local/microsoft/powershell/6.0.0-alpha.10/Modules/PowerShellGet/PSModul e.psm1:1711 char:21                                                             + ...          $null = PackageManagement\Install-Package @PSBoundParameters
+                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
+ CategoryInfo          : NotSpecified: (Microsoft.Power....InstallPackage 
   :InstallPackage) [Install-Package], Exception
+ FullyQualifiedErrorId : System.IO.DirectoryNotFoundException,Microsoft.PowerShell.Commands.CopyItemCommand,Microsoft.PowerShell.PackageManagement.  
  Cmdlets.InstallPackage
   </pre>

   Looking into the folder, there are a lot of .dll files.
   So it's not applicable to me.
   Thus, I ...

0. Uninstall

   <tt><strong>
   Uninstall-Module PowerShellForGitHub
   </strong></tt>

   BLAH: This is the error message I received:

   <pre>
PackageManagement\Uninstall-Package : No match was found for the specified 
search criteria and module names 'PowerShellForGitHub'.
At /usr/local/microsoft/powershell/6.0.0-alpha.10/Modules/PowerShellGet/PSModul
e.psm1:2096 char:21
+ ...        $null = PackageManagement\Uninstall-Package @PSBoundParameters
+                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (Microsoft.Power...ninstallPacka 
   ge:UninstallPackage) [Uninstall-Package], Exception
    + FullyQualifiedErrorId : NoMatchFound,Microsoft.PowerShell.PackageManagem 
   ent.Cmdlets.UninstallPackage
   </pre>

0. Since I was running a Mac, I got rid of it and went without using a library.



## More on API Microservices #

This is one of a series:

{% include api_links.html %}

## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
