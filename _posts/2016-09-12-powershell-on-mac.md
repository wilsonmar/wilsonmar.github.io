---
layout: post
title: "PowerShell on MacOS"
excerpt: "Love Child or Demon Spawn?"
tags: [mac, cloud, powershell, microsoft]
shorturl: "https://git.io/v1wOP"
date: "2016-09-12"
file: "powershell-on-mac"
image:
# powershell blue banner-1900x500-296kb.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/18789323/d2ff6614-8167-11e6-94b5-f37637e01d9c.jpg
  credit: Demonoid
  creditlink: https://www.demonoid.pw/files/details/3417198/008056601136/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article describes the use of PowerShell scripting on Mac and Linux.

"PowerShell" refers to both the command-line shell and scripting language designed system administration. 

PowerShell is an <strong>object-centered</strong> "management engine"
that can be hosted in an application program.

   * CMD in Windows
   * PowerShell ISE (from Microsoft)
   * PowerGUI
   * SAPIEN Technologies PowerShell Studio
   * Idera PowerShell Pro
   <br /><br />

ISE =  "Integrated Scripting Environment" is a GUI that provides
popup tab completion and other assists.

PowerShell promises more consistency than the 
various commands added over time by various parties.

   * It reads Excel files natively as well as JSON, XML, and even ASCII.
   * Microsoft Deployment Toolkit
   * Microsoft System Center
   * IBM, etc.
   <br /><br />


## Open source on Linux and MacOS #

From the <a target="_blank" href="https://www.youtube.com/channel/UCMhQH-yJlr4_XHkwNunfMog">
PowerShell and DSC Team YouTube channel</a>:

<amp-youtube data-videoid="2WZwv7TxqZ0" layout="responsive" width="480" height="270"></amp-youtube>
This 51-minute series of demos was published Aug 18, 2016, the same day
<a target="_blank" href="https://aka.ms/hosoyc">
PowerShell is open-sourced</a> for all OSs at<br />
<a target="_blank" href="https://github.com/PowerShell/PowerShell/">
https://github.com/PowerShell/PowerShell</a>.

<a target="_blank" href="http://www.networkworld.com/article/3109486/application-development/powershell-for-linux-makes-it-easier-to-mix-clients-servers-and-clouds.html">
This article</a> notes Desired State Configuration for Linux and the promise of SSH support arrived in 2014 (several months before Microsoft open sourced .NET and brought .NET Core to Linux). But "you had to author your scripts on the Windows platform, you had to configure things on the Windows platform and then deliver the desired configuration to a Linux box and have it be configured; now you can do all of that on Linux.”





## Install PowerShell on MacOS #

0. There is a brew powershell as of beta.7:

   <tt><strong>brew cask install powershell
   </strong></tt>

   Alternately, click to download the latest release for MacOS at:<br />
   <a target="_blank" href="https://github.com/PowerShell/PowerShell/">
   https://github.com/PowerShell/PowerShell</a>

   Alternately, get back versions at<br />
   <a target="_blank" href="https://github.com/PowerShell/PowerShell/releases/">
   https://github.com/PowerShell/PowerShell/releases</a>

   <table border="1" cellpadding="4" cellspacing="0">
   <th>Date</th><th> File </th><th> MB Size </th><th> Space</th><th> Cmds</th></tr>

   <tr valign="top"><td> Apr, 2018 </td><td> 6.0.2 on brew
   </td><td align="right"> 50.8 MB 
   </td></tr>

   <tr valign="top"><td> Sep 13, 2017 </td><td> powershell-6.0.0-beta.7-osx.10.12-x64.pkg
   </td><td align="right"> 50.8 MB 
   </td></tr>

   <tr valign="top"><td> Sep 13, 2016 </td><td>
   <a target="_blank" href="https://github.com/PowerShell/PowerShell/releases/download/v6.0.0-alpha.10/powershell-6.0.0-alpha.10.pkg">
   powershell-6.0.0-alpha.10.pkg</a>
   </td><td align="right"> 28.2 MB 
   </td><td align="right"> ? MB 
   </td><td align="right"> 345
   </td></tr>

   <tr valign="top"><td> Aug 10, 2016 
   </td><td>   <a target="_blank" href="https://github.com/PowerShell/PowerShell/releases/download/v6.0.0-alpha.9/powershell-6.0.0-alpha.9.pkg">
   powershell-6.0.0-alpha.9.pkg</a>
   </td><td align="right"> 37.1 MB 
   </td><td align="right"> 119.7 MB 
   </td></tr>

   <tr valign="top"><td> Jul 26, 2016 
   </td><td> powershell-6.0.0-alpha.7.pkg
   </td><td align="right"> 25.0 MB 
   </td></tr>

   <tr valign="top"><td> Jul 8, 2016 
   </td><td> powershell-0.6.0.pkg
   </td><td align="right"> 24.2 MB 
   </td></tr>
   </table>

0. Open the .pkg file in the Downloads folder:
0. Click Continue, etc.


   NOTE: For Windows: <a target="_blank" href="https://www.microsoft.com/en-us/download/details.aspx?id=50395">
   Microsoft Windows Management Framework 5.0</a>


   ### In and Out #

0. Open a Terminal shell window to launch PowerShell:

   <tt><strong>
   powershell
   </strong></tt>

   Alternately:

   <tt><strong>
   pwsh
   </strong></tt>

   The response is <strong>"PS" in front of the file path prompt</strong>:

   <pre>
PowerShell 
Copyright (C) 2016 Microsoft Corporation. All rights reserved.
&nbsp;
PS /Users/...>
   </pre>

0. Check the version of PowerShell being used by calling a <strong>pre-defined variable</strong>:

   <tt><strong>
   $psversiontable
   </strong></tt>

   PROTIP: With PowerShell, a variable can act like a command.

   Response:

   <pre>
Name                           Value                                                                       
----                           -----                                                                        
PSVersion                      6.0.0-beta
PSEdition                      Core
GitCommitId                    v6.0.0-beta.7
OS                             Darwin 16.7.0 Darwin Kernel Version 16.7.0: Thu Jun 15 17:36:27 PDT 2017; root:xnu-3789.70.16~2/RELEASE_X86_64   
Platform                       Unix
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1
WSManStackVersion              3.0
   </pre>   

   QUESTION: What's the CLRVersion?

   ### Versions of PowerShell:

   * 6.0 for Mac/Linux in Windows 10 Anniversay Edition
   * 5.0 in 2015 for Visual Studio Code text editor
   * 4.0 in 2014 with Windows 10 and .NET Framework 4.0 and Windows Management Framework 3.0
   * 3.0 in 2012 with Windows 8/Server 2012
   * 2.0 appeared in 2009
   * 1.0 appeared in 2006
   * Monad Manifesto published by Jeff Stover.
   <br /><br />

   PROTIP: Know the <a target="_blank" href="https://github.com/PowerShell/PowerShell/blob/master/docs/KNOWNISSUES.md#command-availability/">
   PowerShell commands known not to work on Linux/macOS</a>.

0. To leave PowerShell, it's the same as in Bash scripts:

   <tt><strong>
   exit
   </strong></tt>

   When you return back in...

0. Get help information for a command:

   <tt><strong>
   get-help stop-service
   </strong></tt>



## Visual Studio Code Editor #

One text editor built for PowerShell is Microsoft's Visual Studio Code.

0. Install Visual Studio Code (see https://chocolatey.org/packages/VisualStudioCode):

   <tt><strong>choco install visualstudiocode -y
   </strong></tt>

0. Install the PowerShell add-in to VSCode:

   <tt><strong>choco install vscode-powershell -y
   </strong></tt>

0. Install the PowerShell Editor Services extension by pressing Ctrl+P, 
   then type “ext install PowerShell” for a list of add-ins.

   Ctrl+P is the universal search that also does "fuzzy search" of text in files open.

0. Click "install" of the extension named “PowerShell”.
   The icon turns to "installing".

0. Open a directory containing PowerShell scripts
   and open the File menu and select “Open Folder …”.
   Select the folder containing your scripts.  
   The scripts show up in the Explore tab of the Side Bar.

   PROTIP: One advantage using VS Code is its Side Bar
   enabling you to switch quickly among different files.

   Press Ctrl+B to hide and unhide the Side Bar.

0. Press Ctrl+\ to open a new editor window.

   Up to three editor panes can be open at once.

   Press Ctrl+1, 2, or 3 to switch among the files.

0. To edit user settings, press Ctrl+Shift+P, then type “user” and press enter.  

0. Click on "powershell.scriptAnalysis.enable".

0. Press Ctrl+Shift+&LT;period> to change value from true to false or back again.

<a target="_blank" href="https://rkeithhill.wordpress.com/2015/12/26/getting-started-with-visual-studio-code-for-use-with-powershell/">
Keith Hill</a> notes
<a target="_blank" href="https://rkeithhill.wordpress.com/2015/12/27/debugging-powershell-script-with-visual-studio-code/">
debugging support provided by the PowerShell Editor Services extension currently runs only on Windows</a>.


## Install .NET Core #

PowerShell is written on top of .NET.
.NET's previous dependencies on Windows components have been removed
in .NET Core.

PowerShell errors occur if .NET Core is not installed, so:

0. Go to web page 
   https://www.microsoft.com/net/core#macos

0. The web page asks for OpenSSL to be installed.

   On a Mac:
   
   <pre>
   brew update
   brew install openssl
   ln -s /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib /usr/local/lib/
   ln -s /usr/local/opt/openssl/lib/libssl.1.0.0.dylib /usr/local/lib/
   </pre>

0. Click the link to download the 50.3MB <br />
   dotnet-dev-osx-x64.1.0.0-preview2-003131.pkg

   https://github.com/dotnet/core/blob/master/cli/known-issues.md

0. Run the installer (for 106.3MB of space). 

0. Before installing anything or running through the update app, 
   hit Command+i or pull down the File menu and choose “Show Files”:

   * ./shared - Microsoft .NET Core 1.0.1 - Runtime 
   * ./host - Microsoft .NET Core 1.0.1 - Host FX Resolver
   * ./dotnet
   * ./sdk - Microsoft .NET Core 1.0.1 - SDK
   <br /><br /> 

   These are folders within folder <strong>/usr/local/share</strong> 
   under "Macintosh HD".

0. Edit your Bash shell search PATH to include
   <strong>/usr/local/share/dotnet</strong> 

   <tt><strong>
   atom ~/.bash_profile
   </strong></tt>

   An example:

   <pre>
   PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet
   </pre>

0. Open a new Terminal shell window to run:

   <pre><strong>
   dotnet
   </strong></pre>

   The response:

   <pre>
Microsoft .NET Core Shared Framework Host
  Version  : 1.0.1
  Build    : cee57bf6c981237d80aa1631cfe83cb9ba329f12
Usage: dotnet [common-options] [[options] path-to-application]
Common Options:
  --help                           Display .NET Core Shared Framework Host help.
  --version                        Display .NET Core Shared Framework Host version.
Options:
  --fx-version <version>           Version of the installed Shared Framework to use to run the application.
  --additionalprobingpath <path>   Path containing probing policy and assemblies to probe for.
Path to Application:
  The path to a .NET Core managed application, dll or exe file to execute.
If you are debugging the Shared Framework Host, set 'COREHOST_TRACE' to '1' in your environment.
To get started on developing applications for .NET Core, install .NET SDK from:
  http://go.microsoft.com/fwlink/?LinkID=798306&clcid=0x409
   </pre>   

0. In a PowerShell invoke this to ensure that it can be done:

   <pre><strong>
   $response = Invoke-WebRequest -Uri "www.microsoft.com" 
   $response.items
   </strong></pre>


## Execute script file #

I like using script files rather than typing because
it allows me to focus on the latest in what is usually
a long string of commands necessary in today's complex world.

To call scripts, an example:

   <pre><strong>
   & ".\basics.ps1"
   </strong></pre>

   PROTIP: Make sure that when a file with .ps1 extension is clicked from Folder,
   the script is not launched to run, but that the script appears in a text editor.

   A sample command to invoke the script including an execution policy :

   <pre>
Powershell -executionpolicy remotesigned 
-command { import-module ‘C:\Users\pm\Documents\WindowsPowerShell\Modules\MyTwitter’
 ;Send-Tweet -Message ‘Message_ Twitter2’}
   </pre>

   Notice it's "powershell" and not "powershell.exe" because Mac and Linux
   don't recognize .exe.

   When a script is signed, its location is locked to a specific full directory path,
   even when it's in the current folder.

   "remotesigned" is important because
   if this script has not been digitally signed, 
   one needs to set PS execution policy to 
   “RemoteSigned” (or “Unrestricted”) after 
   reopening PowerShell as an Administrator to run:

   By default PowerShell prevents the execution of PowerShell scripts on Windows systems.

   <tt><strong>
   <a target="_blank" href="http://www.adminarsenal.com/powershell/set-executionpolicy/">Set-ExecutionPolicy</a> RemoteSigned
   </strong></tt>

   Get a list of current security settings:

   <tt><strong>
   Get-ExecutionPolicy -List | Format-Table -AutoSize
   </strong></tt>

   See https://blog.netspi.com/15-ways-to-bypass-the-powershell-execution-policy/

https://github.com/MeshkDevs/InvokeTwitterAPIs



   ## Verify a signed script can be used #

0. Set

   <tt><strong>
   Set-ExecutionPolicy AllSigned
   </strong></tt>

### Install a signing cert on Mac #

To add the CA root certificate (either PEM or DER format) into the OSX global keychain:

0. Use Finder to navigate to your /System -> Library -> Keychains -> X509Anchors 
   to your own Library -> Keychains. 

0. In a Terminal shell window, run command:

   <tt><strong>
   certtool i mycertificate.crt k=X509Anchors 
   </strong></tt>

   Add a "d" at the end for DER format.

0. Copy your Library -> Keychains -> X509Anchors back to 
   /System -> Library -> Keychains. 

   Use sudo.



## Automatic logging

Increasingly, hackers are using PowerShell to create havoc.

So it's a good idea to automatically logging using the 
`start-transcript` and `stop-transcript` commands.

BLAH: The sample script at https://github.com/wilsonmar/git-utilities/ps-auto-log.ps1,
causes errors during execution of scripts.

Inside the file:

   <pre>
**********************
Windows PowerShell transcript start
Start time: 20161209084850
Username: \root
RunAs User: \root
Machine: macs-MacBook-Pro-4 (Microsoft Windows NT 1.0.0.0)
Host Application: 
Process ID: 40107
PSVersion: 6.0.0-alpha
PSEdition: Core
PSCompatibleVersions: 1.0, 2.0, 3.0, 4.0, 5.0, 5.1.10032.0, 6.0.0
BuildVersion: 3.0.0.0
GitCommitId: v6.0.0-alpha.13
WSManStackVersion: 3.0
PSRemotingProtocolVersion: 2.3
SerializationVersion: 1.1.0.1
**********************
Transcript started, output file is ~/Documents/PowerShell/Transcript\2016-12-09T08-48-45-local.txt
   </pre>

PROTIP: This can use up a lot of space quickly, so some management of its use is necessary.


## Version Logic: If Then Else #

I haven't found a way to have a Bash script that 
can also be run as a PowerShell script.

PROTIP: Switching from Bash to PowerShell means a one-time migration and there is no turning back unless you want to maintain
parallel scripts.

This is largely because of differences in if/then/else coding.
   The same if/then/else syntax in PowerShell scripts for
   Mac and PC is needed for the same script file to be used.

   On Bash:

   <pre>
   if [ "$IsWindows" = True ]; then
       echo "Do Windows"
   fi
   </pre>

> The question is whether a single PowerShell script can really
run on both Mac and Windows. Do a parallel run.

   For different actions in PowerShell according to type of operating system:

   <pre>
If ($IsWindows -eq True) { echo "IsWindows"}
   echo "Windows"
   # use "C:/Users/%USERNAME%/.ssh/id_rsa.pub"
ElseIf ($IsOSX -eq True) {"IsOSX"}
   echo "OSX"
   # use "~/.ssh/id_rsa.pub"
Else {"Something else"}
   </pre>

   NOTE: Because braces define actions, there is no "end if" ("fi") in PowerShell.


### Comparison Operators #

-eq / -ne / -ge

-Like / -NotLike wildcard string - $name -Like "*sh"

-Match / -NotMatch regular expression - $name -Match "sh$"

-Contains / -NotContains a value in array - $name -contains "jo"

-In / -NotIn Is a value in an array - "joe" -in $name

### Logical operators #

-And

-Or

-Xor = Logical exclusive or.


## Tilde and Providers ##

PROTIP: Use <strong>$home</strong> instead of the <strong>tilde</strong> (~)
in PowerShell because tilde does not always represent the 
the user's home folder as in Linux.
This is because PS has different
"providers" that include HKLM and HKCU top-levels in the Windows Registry.
Get a list of providers and disk space:

   <tt><strong>
   Get-PSDrive
   </strong></tt>

   The response:

   <pre>
Name           Used (GB)     Free (GB) Provider      Root                      
----           ---------     --------- --------      ----                      
/                 386.19         78.43 FileSystem    /                         
Alias                                  Alias                                   
Cert                                   Certificate   \                         
Env                                    Environment                             
Function                               Function                                
Variable                               Variable                 
   </pre>   
PowerShell calls files "items" as a term that groups files with registry keys and variables.

   returns the Mode and LastWriteTime of the user.

Instead of "mkdir" to create folders, use 

   <tt><strong>
   New-Item
   </strong></tt>

To list files in a folder, it's the same as in Bash:

   ls -al

PowerShell <strong>cmdlets</strong> (command-lets) 
enables computers to be managed from the command line,
much like Bash shell scripts on Linux machines.
How many are there?

   <tt><strong>
   (get-command).count
   </strong></tt>


https://github.com/pester/Pester/wiki/Mock


## Handling secrets ##

PROTIP: Files containing secrets, such as passwords and
certificates are NOT stored in GitHub nor script files,
   but in a separate location, and backed up among
   other local files.

   The secrets are retrieved into the script at run-time.

See my tutorial on [GitHub Data Security](/data-security-github/)


## Hash tables #

   BTW, keys in a hash table must be unique.

   Hash tables are used throughout PowerShell.

   An example of a REST API call:

   <pre>
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("X-DATE", '9/29/2016')
$headers.Add("X-SIGNATURE", '234j123l4kl23j41l23k4j')
$headers.Add("X-API-KEY", 'testuser')
$response = Invoke-RestMethod 'http://example.com/api/people/1' -Headers $headers
   </pre>

<!--
   as in Windows event logs:

   <pre><strong>
   $source = get-eventlog system -newest 100 | group Source -AsHashTable
   </strong></pre>

   BLAH: The above doesn't work on Mac/Linux.
-->

   Sort a hash tables using the GetEnumertor():

   <pre>
   $source.GetEnumerator() | Sort name | select -first 5
   </pre>


## Objects ###

   <tt><strong>
   Get-Service m* | where {$_.status -eq 'running'}<br />
   Get-Service m* | where status -eq 'running'
   </strong></tt>

   The "$_" represents the current object in v2 can 
   handle more complexity than v3 syntax:



## Alias not parameters #

Many Bash commands work in PowerShell (ls, cat, echo) because
<strong>Aliases</strong> make many commands in Bash scripts work:

   <tt><strong>
   get-alias echo
   </strong></tt>

   The response is "Write-Output", which is what is executed.

   BLAH: Many parameters to aliases are not recognized.
   For example, this common command results in an error:

   ls -al

   Instead, use:

   <tt><strong>
   dir -File | format-table<br />
   </strong></tt>

   NOTE: dir is an alias to Get-ChildItem.

   Thus,

   <tt><strong>
   Write-Host $env:computername -foreground Green
   </strong>

   "--passthru" means do not go through Pipeline.

   <a target="_blank" href="http://thesociablegeek.com/azure/using-curl-in-powershell/">
   You can reset a default alias</a>.


## Environment Variables ###

   PROTIP: Environment variables defined in Bash scripts
   can be read by PowerShell scripts and visa-versa.

   Lists of environment variables:

   <pre><strong>
   dir env:\
   Get-ChildItem Env:
   </strong></pre>

   The command "dir" is an alias of Get-ChildItem.

   For the value of a single environment variable:

   <tt><strong>
   Get-ChildItem Env:USER<br />
   Get-ChildItem Env:AWS_DEFAULT_REGION
   </strong></tt>


## Paths #

Instead of "rm -rf" in Bash:
https://blogs.technet.microsoft.com/heyscriptingguy/2012/02/22/the-best-way-to-use-powershell-to-delete-folders/

   <pre><strong>
   Remove-Item -path c:\* -Filter *text* -WhatIf
   </strong></pre>

   "-WhatIf" specifies a dry-run.


## Combine files

   Ro add the content of several files into a single text file:

   <pre><strong>
   Get-Content "directory path"\*.txt -Force | Set-Content "directory path"\results.txt
   </strong></pre>

## Cmdlets #

PS has some smarter parameters, such as filtering for files only
and running recursively into sub-folders:

   <tt><strong>
   dir c:\work\*.ps1 -file -recurse
   </strong></tt>

All PowerShell cmdlets follow a standardized verb-noun 
naming convention that makes it easy to look up, find, and use cmdlets.
For a list of all the verbs:

   <tt><strong>
   get-verb 
   </strong></tt>

   REMEMBER: Capitalization counts within PowerShell.

   <tt><strong>
   get-command -verb export<br />
   get-command -noun ACL
   </strong></tt>

## paths #

   Only 25% of cmdlets are shipped with paths.


## Strings #

   PROTIP: Don't use "+" for string concatenation.

### .NET Framework members

   Initially built on Microsoft's .NET Framework, PowerShell
   can refer to a static .NET member in square brackets
   with two colons to specify Pi:

   <tt>
   [math]::pi
   </tt>

   It's wonderful that PowerShell doesn't require an echo to display the value of objects.

   To delete a file in the .NET I/O directory object:

   <pre>
   [io.directory]::Delete("C:\test*")
   </pre>

   The issue with using .NET objects is that they may execute in a different folder context
   than PowerShell.

   TODO: $prompt


### Other pre-defined variables #

0. To count the number of cmdlets:

   <pre>
   $size/1MB
   </pre>

   To get the current folder:

   <pre><strong>
   $MyFileName = "data.txt"
   $filebase = <strong>$PSScriptRoot</strong> + "\" + $MyFileName
   </strong></pre>

   Alternatively, use (since v2):

   <pre><strong>
   (Resolve-Path .\).Path
   </strong></pre>

   This returns a PathInfo object.

   $scriptDir = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent


## Dates #

Based on http://ss64.com/ps/syntax-dateformats.html

   <pre><strong>
   Get-Date -Format "yyyy-MM-dd HH:mm"<br />
   $time = (Get-Date).AddDays(-30) -Format "yyyy-MM-dd HH:mm"

   $dirName  = [io.path]::GetDirectoryName($path)
$filename = [io.path]::GetFileNameWithoutExtension($path)
$ext      = [io.path]::GetExtension($path)
$newPath  = "$dirName\$filename $(get-date -f yyyy-MM-dd)$ext"
   </strong></pre>


## Zip files using functions #

   <pre>
# http://www.adminarsenal.com/admin-arsenal-blog/powershell-zip-up-files-using-.net-and-add-type/
$SourceFolder    = "C:\temp\Zip This Folder"
$DestinationFile = "C:\temp\NewZip.zip"
$Compression     = "Optimal"  # Optimal, Fastest, NoCompression
&nbsp;
Zip-Directory -DestinationFileName $DestinationFile `
    -SourceDirectory $SourceFolder `
    -CompressionLevel $Compression ` #Optional parameter
    -IncludeParentDir #Optional parameter
&nbsp;
function Zip-Directory {
    Param(
      [Parameter(Mandatory=$True)][string]$DestinationFileName,
      [Parameter(Mandatory=$True)][string]$SourceDirectory,
      [Parameter(Mandatory=$False)][string]$CompressionLevel = "Optimal",
      [Parameter(Mandatory=$False)][switch]$IncludeParentDir
    )
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $CompressionLevel    = [System.IO.Compression.CompressionLevel]::$CompressionLevel  
    [System.IO.Compression.ZipFile]::CreateFromDirectory($SourceDirectory, $DestinationFileName, $CompressionLevel, $IncludeParentDir)
}
   </pre>



## Pipelines #

Instead of just parsing text (as *Nix shells do),
PowerShell works with objects in a <a href="#Pipelines">pipeline</a>.

Piping:

   To list all variables defined and their values:

   <tt><strong>
   Get-Variable | Out-String
   </strong></tt>

   PROTIP: With PowerShell, it's best to use out-file instead of ">" redirect character:

   <tt><strong>
   dir -file -hidden | out-file -filepath rootfiles.txt<br />
   </strong></tt>

Error handling:

   Use preference variables for stream redirection:

   1> Success
   2> Error
   3> Warning
   4> Verbose
   5> Debug

   NOTE: Can Only merge to the success stream.

   <strong>$Error</strong> is the automatic array that stores the last 256
   exceptions (objects in error) - the default $MaximumErrorCount.

   Error action preferences:

   0 = Silently Continue<br />
   1 = Stop<br />
   2 = Continue<br />
   3 = Inquire<br />
   4 = Ignore [parameter value only]


## Module to call REST API #

   <a target="_blank" href="https://marckean.com/2015/09/21/use-powershell-to-make-rest-api-calls-using-json-oauth/">
   This</a> suggests:

   <pre>
   $J = Invoke-WebRequest `
   -Uri http://search.twitter.com/search.json?q=PowerShell `
    | ConvertFrom-Json
   </pre>

   PROTIP: To press the trailing back-tick that breaks up a command
   into several lines, press the key at the upper left corner 
   of the keyboard with your left hand while you 
   press shift key using your right hand. 

   A space character is required before the tick.

   PROTIP: Break up long text into a string block (which Microsoft calls
   <a target="_blank" href="https://technet.microsoft.com/library/ee692792.aspx?ppud=4&f=255&MSPPError=-2147217396">here-string</a>): 
  
   <pre>
$string = @"
item1 = value1 
item2 = value2
"@
$hashtable = ConvertFrom-StringData -StringData $string
$hashtable 
   </pre>

   The output is:

   <pre>
Name                           Value                                           
----                           -----                                           
item2                          value2                                          
item1                          value1   
   </pre>

   From https://apps.twitter.com/ define a new app. 
   In Permissions tab, select Read-only. Click Update Settings.
   In Key and Access Tokens tab, click "Create my access tokens".
   Copy the Consumer Key (API key) and paste in ~/.passwords as TWITTER_TOKEN.

   It takes 
   <a target="_blank" href="https://marckean.com/2015/09/21/use-powershell-to-make-rest-api-calls-using-json-oauth/">
   many lines</a> to mess with OAuth, 
   so I make use of Adam's library for Twitter's v1.1 API described at:<br />
   http://www.adamtheautomator.com/twitter-module-powershell/

0. <a target="_blank" href="https://gallery.technet.microsoft.com/scriptcenter/Tweet-and-send-Twitter-DMs-8c2d6f0a">
   https://gallery.technet.microsoft.com/scriptcenter/Tweet-and-send-Twitter-DMs-8c2d6f0a</a><br />
   called "Tweet and send Twitter DMs with Powershell".

   Adam's "MyTwitter.psm1" I've download had 229 lines on 8/31/2014.

   PROTIP: The ".psm1" extension means it's a PowerShell module.

   I used a text editor to edit the file to paste in variables for the 4 credentials from Twitter.

   <pre>
      [Parameter()]
      [string]$ApiKey    = $SECRETS.TWITTER_APIKEY,
      [Parameter()]
      [string]$ApiSecret = $SECRETS.TWITTER_APISECRET,
      [Parameter()]
      [string]$AccessToken = $SECRETS.TWITTER_ACCESSTOKEN,
      [Parameter()]
      [string]$AccessTokenSecret = $SECRETS.TWITTER_APISECRET
   </pre>

   I then saved the module in the same GitHub folder as my script,
   and added a command to pull the module into the script:

   <pre>
   Import-module "../MyTwitter.psm1"
   </pre>

   Alternately, Copy-install the module to your $env:PSModulePath

   See http://www.powershellgallery.com/gettingstarted

   PowerShellGet from the Windows PowerShell Framework 5.0

   <a target="_blank" href="http://stevenmurawski.com/powershell/2012/01/powershell-v3-auto-loading-of-modules/">
   The alternative</a> is to put the module in the PSModulePath,
   which enables tab completion to complete the names of commands from modules that are not loaded.  

   The module has these functions:

   * Get-OAuthAuthorization
   * Send-Tweet
   * Send-TwitterDm
   <br /><br />

0. Paste in your PowerShell script:

   <pre><strong>
   Send-Tweet -Message '@adbertram Thanks for the Powershell Twitter module'
   </strong></pre>

   BTW, PowerShell cmdlets in https://github.com/Iristyle/Posh-GitHub
   is only for use on Windows.

Trevor Sullivan (@pcgeek86) made a 
<a target="_blank" href="https://channel9.msdn.com/Blogs/trevor-powershell/Automating-the-GitHub-REST-API-Using-PowerShell">
20:40 video Mar 17, 2016</a>

<a target="_blank" href="http://dotps1.github.io/PSProfile/">
A PowerShell Module for manipulating PowerShell Profiles</a>
by
<a target="_blank" href="https://dotps1.github.io/projects.html">
Thomas Malkewitz</a>


## Curl #

   curl is an alias for Invoke-WebRequest in PowerShell.

   <pre>
   Invoke-RestMethod `
   -Method Post `
   -Uri "$resource\new" `
   -Body (ConvertTo-Json $body) `
   -Header @{"X-ApiKey"=$apiKey}
   </pre>

https://channel9.msdn.com/Blogs/trevor-powershell/Automating-the-GitHub-REST-API-Using-PowerShell


   ## JSON from REST API #

   To extract out a key from the JSON file:

   <pre>
   $x.Stuffs | where { $_.Name -eq "Darts" } 
   </pre>

https://www.pluralsight.com/courses/powershell-modules-advanced-functions-building




### Profile scripts #


<a target="_blank" href="https://app.pluralsight.com/library/courses/powershell-v3-essentials-it-pt3/table-of-contents">Jeff Hicks notes</a> these profile scripts execute automatically at start:

   To view all profiles:

   <tt><strong>
   $profile | select *
   </strong></tt>


<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th> Folder </th><th> Script file </th><th> Script name </th></tr>
<tr valign="top"><td rowspan="3"> C:\Windows\ System32\ WindowsPowerShell\ v1.0\ 
                      </td><td align="right"> profile.ps1 </td><td> AllUsersAllHosts </td></tr>
  <tr><td align="right"> Microsoft.PowerShell.profile.ps1 </td><td> AllUsersCurrentHost </td></tr>
  <tr><td align="right"> Microsoft.PowerShellSE.profile.ps1 </td><td> AllUsersCurrentHost (ISE) </td></tr>
<tr valign="top"><td rowspan="3"> C:\Users\&LT;user&GT;\Documents\ WindowsPowerShell\ or /Users/&LT;user&GT;/ .config/powershell/
  </td><td align="right"> Microsoft.PowerShell.profile.ps1 </td><td> CurrentUsersAllHosts* </td></tr>
  <tr><td align="right"> profile.ps1 </td><td> CurrentUserCurrentHost </td></tr>
  <tr><td align="right"> Microsoft.PowerShellSE.profile.ps1 </td><td> CurrentUserCurrentHost (ISE) </td></tr>
</table>


* = This is the one shown when $profile is typed in.


## API calls #

   Corporate IT departments often use Group Policies.

   $Headers = "Authorization: token ${GITHUB_TOKEN}"
   echo "Headers=$Headers"  # DEBUGGING

   $Token=$GITHUBUSER +':'+ $SECRETS.GITHUB_TOKEN;
   $Base64Token=[System.Convert]::ToBase64String([char[]]$Token);
   $Headers = @{
      Authorization = 'Basic(0)' -f $Base64Token;
      };
      # -f is for substitution of (0).
      # See https://technet.microsoft.com/en-us/library/ee692795.aspx
      # Write-Host ("Headers="+$Headers.Authorization)
   $Headers = "{
      Authorization: = Basic $GITHUB_TOKEN
      }"
      # -f is for substitution of (0).
      # See https://technet.microsoft.com/en-us/library/ee692795.aspx
      Write-Host ("Headers="+$Headers)


## Iterate #

0. <a target="_blank" href="http://powershelldistrict.com/powershell-mac-os-x/">
   Stephane</a> shows this command to move (pipe) png files from 
   Desktop to Pictures folder:

   <pre>
   Get-ChildItem -Filter '*.png' | Move-Item -Destination '../Pictures'
   </pre>

   A variable can contain an array:

   <pre><strong>
   $files = dir c:\script -file
   Foreach ($file in $files){
      $fileage = ((get-Date)) - $file.LastWriteTime )
      "$($file.name) = $fileage" | Out-File ...
   }
   </strong></pre>

   <a target="_blank" href="http://kevinpelgrims.com/blog/2010/02/24/powershell-remote-service-manager/">
   Remotely restart a server</a>


## More Libraries #

https://www.simple-talk.com/blogs/psyaml-powershell-yaml/

## Read in CSV file #

<a target="_blank" href="https://www.petri.com/making-data-dance-with-powershell">This blog</a> gives an example of importing a CSV file:

   <tt><strong>
   $data = Import-CSV C:\scripts\moviedata.csv
   </strong></tt>

   Sorting by date requires creating a new property:

   <pre><strong>
   $data | Add-Member -MemberType ScriptProperty `
   -Name "OpensIn" `
   -Value { [int32]((($this.ReleaseDate `
      -as [DateTime]) - (Get-Date)).TotalDays)  }
   </strong></pre>

   The new property persists, so can be used this way:

   <pre><strong>
   $data | 
   Sort "OpensIn" |
   Select Title.ReleaseDate.OpensIn.Coments
   </strong></pre>


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
