---
layout: post
title: "PowerShell DSC (Desired State Configuration)"
excerpt: "Let PowerShell make it right and keep it right"
tags: [cloud, powershell, microsoft]
date: "2021-03-10"
file: "powershell-dsc"
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

This article describes the use of Windows PowerShell Desired State Configuration (DSC).

<a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E&t=5h0m14s">VIDEO</a>

DSC (Desired State Configuration) is a PowerShell management platform that uses Configuration as code (CaC) declarations, in GitHub.

On every target node, the process running in the background to parse and "enact" configurations sent to the node is the <strong>LCM (Local Configuration Manager)</strong>. 
   * https://docs.microsoft.com/en-us/powershell/dsc/metaconfig 
   * https://docs.microsoft.com/en-us/powershell/dsc/metaconfig4
   * https://msdn.microsoft.com/en-us/powershell/dsc
   * <strike>http://blogs.msdn.com/b/powershell</strike> and https://github.com/PowerShell/DscResources are no longer the
   Central repository for PowerShell DSC resources maintained within Microsoft.

From the <a target="_blank" href="https://www.youtube.com/channel/UCMhQH-yJlr4_XHkwNunfMog">
PowerShell and DSC Team YouTube channel</a>:

<amp-youtube data-videoid="2WZwv7TxqZ0" layout="responsive" width="480" height="270"></amp-youtube>
This 51-minute series of demos was published Aug 18, 2016, the same day

<a target="_blank" href="http://www.networkworld.com/article/3109486/application-development/powershell-for-linux-makes-it-easier-to-mix-clients-servers-and-clouds.html">
This article</a> notes Desired State Configuration for Linux and the promise of SSH support arrived in 2014 (several months before Microsoft open sourced .NET and brought .NET Core to Linux). But "you had to author your scripts on the Windows platform, you had to configure things on the Windows platform and then deliver the desired configuration to a Linux box and have it be configured; now you can do all of that on Linux.”


## PowerShell Commands

   PROTIP: A PowerShell DSC configuration file is a PowerShell script, and thus has a .ps1 file suffix and runs within the PowerShell command-line shell. DSC was introduced with PowerShell 4.0.

0. On MacOS, if you don't have PowerShell already, perform <a target="_blank" href="https://wilsonmar.github.io/2016-09-12-powershell-on-mac">my steps to install PowerShell on MacOS</a>

0. List PowerShell functions for DSC:

   <tt><strong>Get-command -Noun dsc*  
   </strong></tt>

   The response:

   <pre>CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Function        Find-DSCResource                                   2.2.5      PowerShellGet
Function        Get-DscResource                                    2.0.5      PSDesiredStateConfiguration
Function        Invoke-DscResource                                 2.0.5      PSDesiredStateConfiguration
Function        New-DscChecksum                                    2.0.5      PSDesiredStateConfiguration
   </pre>

0. Get resources for DSC:

   <tt><strong>Get-DscResource
   </strong></tt>

   The response:

   <pre>MethodInvocationException: /usr/local/microsoft/powershell/7/Modules/PSDesiredStateConfiguration/PSDesiredStateConfiguration.psm1:3927                                                      
Line |                                                                                                                                                                                      
3927 |          [Microsoft.PowerShell.DesiredStateConfiguration.Internal.DscC …                                                                                                             
     |          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                                                                               
     | Exception calling "LoadDefaultCimKeywords" with "2" argument(s): "Unable to load shared library 'libmi' or one of its dependencies. In order to help diagnose loading                
     | problems, consider setting the DYLD_PRINT_LIBRARIES environment variable: dlopen(liblibmi, 1): image not found"  
   </pre>


## Sample DSC scripts

   DSC resources can be obtained from several places:

   * <a target="_blank" href="https://www.PowerShellGallery.com/">PowerShellGallery.com</a>
   * <a href="#FromGitHub">GitHub.com</a>
   * PowerShell Package Manager (of PowerShell modules)
   <br /><br />


<a name="FromGitHub"></a>

### From GitHub

1. The community has

    <a target="_blank" href="https://github.com/PowerShellOrg">
    https://github.com/PowerShellOrg</a>

    NOTE: <a target="_blank" href="https://github.com/PowerShell/SharePointDsc">https://github.com/PowerShell/SharePointDsc</a> PowerShell module provides DSC resources that can be used to deploy and manage a SharePoint farm.

0. Use an internew browser (Chrome) to my sample PowerShell DSC scripts at:

   <a target="_blank" href="https://github.com/wilsonmar/powershell-dsc">https://github.com/wilsonmar/powershell-dsc</a>

0. Create a GitHub account for yourself if you haven't already.
0. Click the <strong>Fork</strong> button to make it yours, since you will be making changes.

0. Install a Git client.
0. Open a Terminal command terminal.
0. Navigate or create a subject container folder where repos are created, such as:

   <tt><strong>mkdir ~/git/DevSecOps/
   </strong></tt>

0. Get my sample PowerShell scripts onto your laptop (substituting "wilsonmar" with your own account name):

   <tt><strong>git clone https://github.com/wilsonmar/powershell-dsc && powershell-dsc
   </strong></tt>

   The above is one line, but may be word-wrapped on your screen.

0. Use a text editor to view file `HelloConfig1`.

   But a PowerShell DSC configuration has a block that uses the PowerShell keyword `Configuration` followed by the name of the configuration. 

   {% highlight text %}
Configuration HelloConfig1 {

    param(
        [string[]]$ComputerName="localhost"
    )
    Node $ComputerName {
        Group GroupExample {
            Ensure = "Present"
            GroupName = "TestGroup"
        }
        User UserExample {
            Ensure = "Present"
            UserName = "TestUser"
            FullName = "TestUser"
            DependsOn = "[Group]GroupExample"
        }
    }
}
   {% endhighlight %}

   Each target computer defined by a DSC script is called a <strong>node</strong>.
   The name of the node (a computer instance) is passed into the script using the $ComputerName parameter supplied when compiling the configuraton. The name defaults to "localhost" if not supplied.

   When the name of the script (without the .ps1 suffix) is specified within PowerShell, that script is compiled into a <strong>MOF document for each node</strong> 

   within a folder created in the current directory with the same name as the configuration. For example:


   ### Compile to MOF

0. Compile the script into an <strong>MOF document for each node</strong> within a folder created in the current directory with the same name as the configuration:

   <tt><strong>./HelloConfig1 TEST-PC1
  </strong></tt>

  The response for the default user (replace your user name here):

   <pre>
    Directory: C:\users\default\Documents\DSC Configurations\MyDscConfiguration
Mode                LastWriteTime         Length Name 
----                -------------         ------ ---- 
-a----       10/23/2017   1:32 PM           2842 TEST-PC1.mof
   </pre>

   "MOF" is an acornym for "Management Object Format" used in Windows operating systems.
   It has syntax based on Microsoft Visual C++.  
   MOF files often have a partner DLL (dynamic link library) file that stores data needed for retrieval in the MOF file.

   CAUTION: The MOF file contains all of the configuration information for the target node. Because of this, it’s important to keep it secure.


   ### Enact

   The MOF file for each node defined in the Configuration is what are "enacted". 

   Noramlly, DSC applies the resources in the order that they appear within the configuration. That's unless `DependesOn` is specified.


   ### Push vs. Pull

   DSC can deliver configurations in either push and pull. 

   The push method is delivered from a server to a computer thus the "pushing" instructions.  This method is generally only used for testing or one-off applications uncommon in a production environment. See https://github.com/PowerShellOrg/shove

   The pull method is initiated from a client rather than the server.

   See https://docs.microsoft.com/en-us/powershell/dsc/pullclientconfigid
   on Setting up a pull client using configuration ID


## Open source on Linux and MacOS #

From the <a target="_blank" href="https://www.youtube.com/channel/UCMhQH-yJlr4_XHkwNunfMog">
PowerShell and DSC Team YouTube channel</a>:

<amp-youtube data-videoid="2WZwv7TxqZ0" layout="responsive" width="480" height="270"></amp-youtube>
This 51-minute series of demos was published Aug 18, 2016.

<a target="_blank" href="http://www.networkworld.com/article/3109486/application-development/powershell-for-linux-makes-it-easier-to-mix-clients-servers-and-clouds.html">
This article</a> notes Desired State Configuration for Linux and the promise of SSH support arrived in 2014 (several months before Microsoft open sourced .NET and brought .NET Core to Linux). But "you had to author your scripts on the Windows platform, you had to configure things on the Windows platform and then deliver the desired configuration to a Linux box and have it be configured; now you can do all of that on Linux.”

<a target="_blank" href="https://aka.ms/hosoyc">
On August 18 2016</a>, PowerShell became open-source at<br />
<a target="_blank" href="https://github.com/PowerShell/PowerShell/">
https://github.com/PowerShell/PowerShell</a>.

<a target="_blank" href="https://gitter.im/PowerShell/PowerShell">
Join the conversation on Gitter</a>

Noteworthy pages in the <a target="_blank" href="https://github.com/PowerShell/PowerShell/blob/master/docs/FAQ.md">
FAQ</a>:

   * https://blogs.msdn.microsoft.com/kebab/2013/06/09/an-introduction-to-error-handling-in-powershell/
   * http://ss64.com/ps/syntax.html
   * https://github.com/PoshCode/PowerShellPracticeAndStyle
   <br /><br />




## Other IAC incorporating DSC #

https://github.com/chef-boneyard/dsc
was implemented into core Chef

https://github.com/puppetlabs/puppetlabs-dsc


### Operation Validation Framework

<a target="_blank" href="https://github.com/PowerShell/Operation-Validation-Framework/">
https://github.com/PowerShell/Operation-Validation-Framework</a><br />
runs

   Get-Command -Module OperationValidation

It has two functions:

   Get-OperationValidation to Retrieve operational tests from modules
   
   Invoke-OperationValidation to run operational tests from modules

## Additionally

http://kunaludapi.blogspot.in/2015/09/multiple-ways-to-install-software.html


## Learning Resources #

   https://docs.microsoft.com/en-us/powershell/dsc/overview

   https://docs.microsoft.com/en-us/powershell/dsc/quickstart


<a target="_blank" href="http://www.ravichaganti.com/blog/">
Ravikanth Chaganti</a> (MVP)
(of <a target="_blank" href="http://www.powershellmagazine.com/">
PowerShell Magazine</a>
and
book PowerShell Desired State Configuration Revealed)
notes that "Infrastructure as Code" requires:

   * Reusable automation
   * Source Control
   * Unit Testing
   * Continuous Deployment
   * Integration tests, which validate the desired state
   * Operations Validation, which validates the functionality at desired state!

<a target="_blank" href="https://app.pluralsight.com/library/courses/practical-desired-state-configuration/">
Practical Desired State Configuration (DSC)</a> [3:01] 10 Aug 2016
by Josh Duffney 

* <a target="_blank" href="https://www.youtube.com/watch?v=lP6noSW6Vr4">
   A Practical Overview of Desired State Configuration</a>
   TechEd North America 2014

   Windows PowerShell 4.0 introduces Desired State Configuration (DSC), and it's time to put it to use. With DSC, you declaratively ..

* <a target="_blank" href="https://www.youtube.com/watch?v=CkxVQy6ACXE">
  Why I love PowerShell Desired State Configuration and so should u</a>
  by Nicholas Dille
   https://twitter.com/NicholasDille 
   http://dille.name/blog/

* <a target="_blank" href="https://www.youtube.com/watch?v=o_a_IHDPo20">
  PowerShell Desired State Configuration (DSC) How-To for Beginners (Push Model)</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=lP6noSW6Vr4">  
   A Practical Overview of Desired State Configuration</a>
   by TechEd North America


* https://www.microsoft.com/itshowcase/Article/Content/804/Configuration-as-code-Automating-Windows-Server-2016-configuration-with-PowerShell-and-DSC

* ‏@CDwithWindows


<a target="_blank" href="http://stackoverflow.com/questions/8153750/how-to-search-a-string-in-multiple-files-and-return-the-names-of-files-in-powers">
How to search a string in multiple files and return the names of files in Powershell</a>

http://www.tomsitpro.com/articles/how-to-integrate-ansible-dsc,1-3474.html
13 Jan 2017
when Ansible didn't support DSC and required https://github.com/trondhindenes/Ansible-win_dsc
by Trond Hindenes. That's since been merged into Ansible Core.



## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
