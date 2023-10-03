---
layout: post
date: "2023-08-02"
file: "powershell-install-coding"
title: "PowerShell Install Coding"
excerpt: "Make PowerShell your superpower on Windows and Macs, for fun and profit"
tags: [mac, cloud, powershell, microsoft]
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

<img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-icons/Powershell.svg" alt="Powershell icon">

This article describes the use of PowerShell scripting on Mac and Linux.

"PowerShell" refers to both the command-line shell AND scripting language designed system administration. (When “PowerShell Core 6.0” was announced on January 10, 2018, the word “Powershell” on its own now refers to the decade-old “PowerShell” integrated into all recent versions of Microsoft’s Windows operating system.)

PowerShell is an <strong>object-centered</strong> "management engine" that can be hosted in an application program:

   * CMD in Windows
   * PowerShell ISE (from Microsoft)
   * PowerGUI
   * SAPIEN Technologies PowerShell Studio
   * Idera PowerShell Pro
   <br /><br />

<strong>PowerShell Core</strong> is available as a cross-platform application such that scripts written on MacOS will run on Windows, Linux, or other supported operating system. 
So it does not have commands associated with the .NET Framework (for Windows OS). 
Such is similar to the rebranding of .NET vs. .NET Core.

PowerShell <strong>cmdlets</strong> (pronounced "command-lets") let you manage computers from the command line.

ISE (Integrated Scripting Environment) is a <strong>GUI</strong> program that provides
popup tab completion and other assists.

PowerShell promises more consistency than the 
various commands added over time by various parties:

   * It reads Excel files natively as well as JSON, XML, and even ASCII.
   * Microsoft Deployment Toolkit
   * Microsoft System Center
   * IBM, etc.
   <br /><br />

The above and other scripting is covered in my blog <a target="_blank" href="https://wilsonmar.github.io/azure-cloud-powershell/">wilsonmar.github.io/azure-cloud-powershell</a>

## Open source on Linux and MacOS #

<a target="_blank" href="https://aka.ms/hosoyc">
PowerShell is open-sourced</a> for all OSs at 
<a target="_blank" href="https://github.com/PowerShell/PowerShell/">
https://github.com/PowerShell/PowerShell</a>.


## Install PowerShell on Windows

https://aka.ms/PSWindows
for PowerShell 7 on Windows 11 installed to:
<tt>$env:ProgramFiles\PowerShell\7</tt>

choco install powershell-core

<a target="_blank" href="https://technet.microsoft.com/en-us/library/dn807169.aspx">
Windows PowerShellGet Module</a> if you don't want to install these from the
<a target="_blank" href="https://www.microsoft.com/web/downloads/platform.aspx">Web Platform Installer (wpilauncher.exe) at
https://www.microsoft.com/web/downloads/platform.aspx</a>

I have a separate blog <a target="_blank" href="https://wilsonmar.github.io/powershell-dsc/">wilsonmar.github.io/powershell-dsc</a>


## Install PowerShell Core on MacOS #

PowerShell Core supports macOS 10.12 and higher.
See <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-6">this for other os</a>

1. <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-6">This</a>
says needed as a pre-requisite is

   <pre><strong>xcode-select --install</strong></pre>

1. PROTIP: Skip the manual install and <a href="#UseBrow">install using Homebrew</a>.

   Alternately, click to download the latest release for MacOS at:<br />
   <a target="_blank" href="https://github.com/PowerShell/PowerShell/">
   https://github.com/PowerShell/PowerShell</a>

   Alternately, get back versions at<br />
   <a target="_blank" href="https://github.com/PowerShell/PowerShell/releases/">
   https://github.com/PowerShell/PowerShell/releases</a>

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th>Date</th><th> File </th><th> MB Size </th><th> Space</th><th> Cmds</th></tr>

   <tr valign="top"><td> 21 May 2021 </td><td> 7.2.0-preview.6
   </td><td align="right"> 62.1 MB 
   </td></tr>

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

   <a name="InAndOut"></a>

   ### Install using Homebrew

1. Alternately, use Homebrew:

   <tt><strong>brew install powershell
   </strong></tt>

   <pre>==> Caveats
To use Homebrew in PowerShell, set:
  Add-Content -Path $PROFILE.CurrentUserAllHosts -Value '$(/usr/local/bin/brew shellenv) | Invoke-Expression'
&nbsp;
==> Downloading https://github.com/PowerShell/PowerShell/releases/download/v7.3.
==> Downloading from https://objects.githubusercontent.com/github-production-rel
######################################################################### 100.0%
All formula dependencies satisfied.
==> Installing Cask powershell
==> Running installer for powershell; your password may be necessary.
Package installers may write to any location; options such as `--appdir` are ignored.
Password: ____
   </pre>

1. ATTENTION: Enter your laptop password when prompted.

   Response:

   <pre>installer: Package name is PowerShell - 7.3.6
installer: Installing at base path /
installer: The install was successful.
🍺  powershell was successfully installed!
   </pre>

   ### Run PowerShell in Bash

0. An example of command parameters within double-quotes:

   <pre><strong>po
   </strong></pre>

   "Hello World" would be the response.

0. Double-quotes are not needed for a single command, such as this to list folders (child items):

   <pre><strong>pwsh -command get-childitem
   </strong></pre>

   <pre> Directory: /Users/...
&nbsp;
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-----           5/12/2021  3:48 PM          11381 .dir
   </pre>

   <a name="InAndOut"></a>

   ### In and Out #

   <a name="pwsh"></a>

0. Open a Terminal shell window to launch PowerShell<br />
   on MacOS:

   <tt><strong>pwsh
   </strong></tt>

   On Windows:

   <tt><strong>powershell
   </strong></tt>

   The response:

   <pre>PowerShell 7.3.6
PS /Users/...> 
   </pre>

   `PS` displayed means you are in the PowerShell shell. 

   Gone is line: <a target="_blank" href="https://aka.ms/pscore6-docs">https://aka.ms/pscore6-docs</a>

   Sometimes the response also has:

   <pre>A new PowerShell stable release is available: v7.3.6
   Upgrade now, or check out the release page at:       
     https://aka.ms/PowerShell-Release?tag=v7.3.7
   </pre>
   

   ### System Variables

1. List all system variables:

   <pre><strong>dir env:</strong></pre>

   Alternately, to  sort by name:

   <pre>gci env:* | sort-object name</pre>

   "gci" is short for:

   <pre>Get-ChildItem Env:* | Select-Object -Property Name,Value</pre>

   Notice there are "LOGNAME" and "USER" variables.

1. The content of system environment variabluname $USER can be identified quickest using a command on both Linux and Windows:

   <pre><strong>uname</strong></pre>

   
1. To display just the value of the <strong>$HOME</strong> variable which defines path where the "cd" command navigates to:

   <pre><strong>Get-Variable HOME -valueOnly</strong></pre>

   On MacOS and Linux, for example

   <pre>/Users/<em>johndoe</em></pre>

   On Windows:

   <pre>C:\Users\<em>johndoe</em></pre>


   ### Customize command prompt

1. The default prompt is defined by this:

   <pre>function prompt { 'PS ' + $(get-location) + '> ' }</pre>

   The default command prompt contains ">" after the current path.

   I don't like this because the prompt appears in different positions, requiring me to spend time finding it. And there isn't much space left for commands before forced wrapping.

   I would rather have the prompt be at the same position, such as this, which gives a lot of space for long commands:

   <tt>> _ </tt>

   I don't need "PS". Above the prompt, I show time of day, [Git branch], and current folder:

   <tt>03:54:32 PM [master] _posts<br />
> _ </tt>

1. To achieve the above prompt, 

   <pre>function prompt {"`n  "+$(Get-Date -UFormat "%r")+' ['+$(git rev-parse --abbrev-ref HEAD)+'] '+$((get-item $pwd ).Name)+"`n"+'> ' }</pre>

   PROTIP: In PowerShell, a new line is specified by the "back-tick" escape character (at the upper-left of most keyboards). Also notice double quotation marks are necessary. The back-tick is also used for line continuation, so don't put a space after a back-tick or PowerShell will recognize it as an escape character rather than a line continuation.

   An alternative to obtaining the current folder is:

   <pre>$($executionContext.SessionState.Path.CurrentLocation | Split-Path -Leaf)</pre>

   NOTE: <a target="_blank" href="https://stackoverflow.com/questions/1287718/how-can-i-display-my-current-git-branch-name-in-my-powershell-prompt">Others</a> display different colors.

1. To make the change permanant, change your user profile definition file at the path defined by the $PROFILE system environment variable:

   <pre><strong>$PROFILE</strong></pre>

   On MacOS and Linux:

   <pre>/Users/<em>USER</em>/.config/powershell/Microsoft.PowerShell_profile.ps1</pre>

   On Windows:

   <pre>C:\Users\<em>USER</em>\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1</pre>

   NOTE: That file is one of six PowerShell profile files<a target="_blank" href="https://devblogs.microsoft.com/scripting/understanding-the-six-powershell-profiles/">*</a>

1. Check if it's true that you have a profile file:

   <pre>Test-Path $PROFILE</pre>

   If "False", create the file "Microsoft.PowerShell_profile.ps1"

   <pre>New-Item -Path $PROFILE -Type File -force</pre>

1. Edit the file "Microsoft.PowerShell_profile.ps1":

   <pre>code $PROFILE</pre>

1. Copy and paste the function prompt from above.
1. Click the "..." at the right to Save and Close Editor (or press Command+S and Command+Q).


   ### Exit PowerShell

0. To leave PowerShell for changes to take effect, it's the same as in Bash scripts:

   <tt><strong>exit
   </strong></tt>

0. Enter Powershell again, <a href="#InAndOut">per above</a>.


   ### Upgrade PowerShell

1. To upgrade (within Bash or pwsh):

   <pre><strong>brew upgrade --cask powershell</strong></pre>


   <a name="VerifyPSInstall"></a>

   ### Verify install by seeing version

0. Check the version of PowerShell being used by calling a <strong>pre-defined variable</strong>:

   <tt><strong>$psversiontable
   </strong></tt>

   PROTIP: With PowerShell, a variable can act like a command.

   Response:

   <pre>Name                           Value
----                           -----
PSVersion                      7.1.3
PSEdition                      Core
GitCommitId                    7.1.3
OS                             Darwin 19.6.0 Darwin Kernel Version 19.6.0: Tue Jan 12 22:13:05 PST 2021; root:xnu-6153.141.16~1/RELEASE_X86_64
Platform                       Unix
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0…}
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1
WSManStackVersion              3.0
   </pre>   

   QUESTION: What's the CLRVersion?

   * 7.0
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



   ## Configure Terminal colors

1. Configure your Terminal colors

   See https://sqlsunday.com/2019/03/04/how-to-set-up-a-beautiful-powershell-core-terminal-on-mac-os/

0. <a href="#pwsh">Get back in PowerShell</a>...


   ### Clear PS Screen

   This doesn't need any modules installed:

1. Clear Screen:

   <pre><strong>cls
   </strong></pre>


   ### Get Help on commands

1. Download help files:

   <pre><strong>update-help -force
   </strong></pre>


1. Get help information for a command (such as stop-service):

   <tt><strong>get-help stop-service
   </strong></tt>

   <pre>Name                              Category  Module                    Synopsis
----                              --------  ------                    --------
Register-ArgumentCompleter        Cmdlet    Microsoft.PowerShell.Core Registers a custom argument completer.
about_If                          HelpFile                
about_Pipelines                   HelpFile
   </pre>


   ## Output continuation & wide view

   PROTIP: To continue a line end (like back-slash in Bash), use "tick marks" (` at the upper-left on Mac keyboards) and use "vertical bar" (| at the right of Mac keyboards) <a target="_blank" href="https://poshoholic.com/2010/11/11/powershell-quick-tip-creating-wide-tables-with-powershell/">:</a>

   <pre><strong>Get-Alias -Definition Invoke-* `
| Format-Table -Property * -AutoSize `
| Out-String -Width 4096 `
| Out-File aliases.txt
   </strong></pre>


<hr />

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

0. Go to web page <a target="_blank" href="https://www.microsoft.com/net/core#macos">
   https://www.microsoft.com/net/core#macos</a>

0. The web page asks for OpenSSL to be installed.

   On a Mac:
   
   <pre>brew update
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

   <tt><strong>atom ~/.bash_profile
   </strong></tt>

   An example:

   <pre>PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet
   </pre>

0. Open a new Terminal shell window to run:

   <pre><strong>dotnet
   </strong></pre>

   The response:

   <pre>Microsoft .NET Core Shared Framework Host
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



<hr />

## PowerShellGet Commands

See https://docs.microsoft.com/en-us/powershell/module/powershellget/?view=powershell-7.1

   The PowerShellGet module provides commands for discovering, installing, updating and publishing PowerShell artifacts like Modules, DSC Resources, Role Capabilities, and Scripts.

Install-Module AZ -AllowClobber -Force

### PowerShell commands

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/find-command?view=powershell-7.1">Find-Command</a> - Finds PowerShell commands in modules.

## Modules

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/get-installedmodule">
Get-InstalledModule </a> - Gets a list of modules on the computer that were installed by PowerShellGet.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/find-module">
Install-Module </a> - Downloads one or more modules from a repository, and installs them on the local computer.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/uninstall-module">
Uninstall-Module</a> - Uninstalls a module.


<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/update-modulemanifest">
Update-ModuleManifest</a> - Updates a module manifest file.


<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/find-rolecapability">
Find-RoleCapability </a> - Finds role capabilities in modules.


<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/update-module">
Update-Module</a> - Downloads and installs the newest version of specified modules from an online gallery to the local computer.


<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/save-module">
Save-Module </a> - Saves a module and its dependencies on the local computer but doesn't install the module.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/publish-module">
Publish-Module </a> - Publishes a specified module from the local computer to an online gallery.


## PS Script Linting

TOOL: https://github.com/PowerShell/PSScriptAnalyzer/
PSScriptAnalyzer for static linting of PS Module script code
https://poshoholic.com/2015/05/21/powershell-script-analyzer/

1. Install-Module -Name PSScriptAnalyzer
1. Type A
1. Run

   <pre><strong>$targetPath="/usr/local/microsoft/powershell/7/Modules/PSReadLine"
   Invoke-ScriptAnalyzer `
     -Path     $targetPath/SamplePSReadLineProfile.ps1 `
     -Settings $targetPath/PSReadLine.psd1
   </strong></pre>

   Results:

   <pre>Invoke-ScriptAnalyzer: aliasestoexport is not a valid key in the settings hashtable. Valid keys are CustomRulePath, ExcludeRules, IncludeRules, IncludeDefaultRules, RecurseCustomRulePath, Rules and Severity.
    </pre>

Invoke-ScriptAnalyzer [-Path] <String> [-CustomRulePat3.  <String[]>] [-RecurseCustomRulePath] [-ExcludeRule <String[]>] [-IncludeDefaultRules] [-IncludeRule <String[]>] [-Severity <String[]>] [-Recurse] [-SuppressedOnly] [-Fix] [-EnableExit] [-ReportSummary] [-Settings <Object>] [-SaveDscDependency] [<CommonParameters>]

Get-ScriptAnalyzerRule [-CustomRulePath <String[]>] [-RecurseCustomRulePath] [-Name <String[]>] [-Severity <String[]>] [<CommonParameters>]

Invoke-ScriptAnalyzer [-ScriptDefinition] <String> [-CustomRulePath <String[]>] [-RecurseCustomRulePath] [-ExcludeRule <String[]>] [-IncludeDefaultRules] [-IncludeRule <String[]>] [-Severity <String[]>] [-Recurse] [-SuppressedOnly] [-EnableExit] [-ReportSummary] [-Settings <Object>] [-SaveDscDependency] [<CommonParameters>]

Invoke-Formatter [-ScriptDefinition] <String> [[-Settings] <Object>] [[-Range] <Int32[]>] [<CommonParameters>]

### PS Repository

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/get-psrepository">
Get-PSRepository </a> - Gets PowerShell repositories.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/set-psrepository">
Set-PSRepository </a> - Sets values for a registered repository.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/register-psrepository">
Register-PSRepository </a> - Registers a PowerShell repository.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/unregister-psrepository">
Unregister-PSRepository </a> - Unregisters a repository.


### PS Script Files

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/find-script">
Find-Script </a> - Finds a script.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/get-installedscript">
Install-Script </a> - Installs a script.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/uninstall-script">
Uninstall-Script</a> - Uninstalls a script.


<a target="_blank" href="">
Get-InstalledScript </a> - Gets an installed script.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/update-scriptfileinfo">
Update-ScriptFileInfo</a> - Updates information for a script.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/new-scriptfileinfo">
New-ScriptFileInfo </a> - Creates a script file with metadata.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/test-scriptfileinfo">
Test-ScriptFileInfo</a> - Validates a comment block for a script.


<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/save-script">
Save-Script </a> - Saves a script.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/update-script">
Update-Script</a> - Updates a script.

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/publish-script">
Publish-Script </a> - Publishes a script.


### DSC Resource commands

<a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/powershellget/find-dscresource">
Find-DscResource </a> - Finds Desired State Configuration (DSC) resources.


<hr />

## Make Imperative Commands #

   Windows PowerShell <strong>providers</strong> access data stores, such as the Windows Registry and certificate store, as easily as you access the file system. 

1. Install NuGet provider:

   <pre><strong>Install-PackageProvider -Name NuGet -Force
   </strong></pre>

1. Get a count of how many commands for Azure module:

   <pre><strong>Get-Command -Module Azure | Measure-Object
   </strong></pre>

   I got a count of 697 commands for just Azure for ASM.

1. List Azure commands containing "vm" (virtual machine):

   <pre><strong>Get-Command -Module Azure -noun *vm*
   </strong></pre>


### Enable PS1 execution #

On Windows machines, PowerShell commands can be script files with <strong>.ps1</strong> file extension.

   <pre><strong>Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
   </strong></pre>

   On a Mac: <br />
   <pre>Set-ExecutionPolicy: Operation is not supported on this platform.</pre>


## Execute script file #

I like using script files rather than typing because
it allows me to focus on the latest in what is usually
a long string of commands necessary in today's complex world.

To call scripts, an example:

   <pre><strong>& ".\basics.ps1"
   </strong></pre>

   PROTIP: Make sure that when a file with .ps1 extension is clicked from Folder,
   the script is not launched to run, but that the script appears in a text editor.

   A sample command to invoke the script including an execution policy :

   <pre>Powershell -executionpolicy remotesigned 
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

   <tt><strong>Set-ExecutionPolicy AllSigned
   </strong></tt>

### Install a signing cert on Mac #

To add the CA root certificate (either PEM or DER format) into the macOS global keychain:

0. Use Finder to navigate to your /System -> Library -> Keychains -> X509Anchors 
   to your own Library -> Keychains. 

0. In a Terminal shell window, run command:

   <tt><strong>certtool i mycertificate.crt k=X509Anchors 
   </strong></tt>

   Add a "d" at the end for DER format.

0. Copy your Library -> Keychains -> X509Anchors back to 
   /System -> Library -> Keychains. 

   Use sudo.



## Automatic transcript logging

Increasingly, hackers are using PowerShell to create havoc.

So it's a good idea to automatically log:

   `start-transcript` 

   PROTIP: This can use up a lot of space quickly, so some management of its use is necessary.

   `stop-transcript`

   BLAH: The sample script at https://github.com/wilsonmar/git-utilities/ps-auto-log.ps1,
   causes errors during execution of scripts.

   Inside the file:

   <pre>**********************
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


<hr />

## PS Verbs

All PowerShell cmdlets follow a standardized verb-noun 
naming convention that makes it easy to look up, find, and use cmdlets.

1. For a list of all the verbs:

   <tt><strong>get-verb
   </strong></tt>

   <pre>Verb        AliasPrefix Group          Description
----        ----------- -----          -----------
Add         a           Common         Adds a resource to a container, or attaches an item to another item
...
   </pre>

   REMEMBER: Capitalization counts within PowerShell.

   ??? AliasProfix 

   The output is sorted within PS Command Groupings:

   * Common
   * Communication
   * Data
   * Diagnostic
   * Lifecycle
   * Other
   * Security
   <br /><br />

1. List of all comdlets beginning with a verb:

   <tt><strong>get-command -verb export
   </strong></tt>

   <pre>
CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Alias           Export-AdlStoreChildItemProperties                 1.3.0      Az.DataLakeStore
   </pre>

1. List of all comdlets beginning with a verb:

   <tt><strong>get-command -verb export<br />
   get-command -noun ACL
   </strong></tt>


   ## Environment variables #

   <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.1">READ</a>
   <a target="_blank" href="https://adamtheautomator.com/powershell-environment-variables/">READ</a>: 

1. List all environment variables, remember the colon at the end:

   <pre><strong>Get-ChildItem Env:
   </strong></pre>

   An alternate form:
   
   <pre><strong>Get-ChildItem -Path Env:\
   </strong></pre>
   
   Alternately, use the legacy .NET command:

   <pre><strong>[System.Environment]::GetEnvironmentVariables()
   </strong></pre>

   The first lines in response:

   <pre>Name                           Value
----                           -----
_                              /usr/local/bin/pwsh
__CF_USER_TEXT_ENCODING        0x1F5:0:0
...
   </PRE>

1. For the value to a specific system variable:

   <pre><strong>$env:PATH
   </strong></pre>

   Alternately:

   <pre><strong>Get-ChildItem Env:PATH
   </strong></pre>

1. Define a temporary environment variable:

   <pre><strong>$env:MyTempVariable = "A temporary test variable."
   </strong></pre>

1. Retrieve a User environment variable:

   <pre><strong>$env:MyTempVariable
   </strong></pre>

1. To delete an Environment Variable, set its value to an empty string:

   <pre><strong>$env:MyTempVariable = ''
   </strong></pre>
    
1. Define a new permanent environment variable on Windows, containing specified text:

   <pre><strong>[Environment]::SetEnvironmentVariable("PermVariableName", "Remember This", "User")
   </strong></pre>

   Instead of "User", the option can be either "Machine", "User", or "Process".

1. Retrieve a User environment variable:

   <pre><strong>[System.Environment]::GetEnvironmentVariable('appdata')
   </strong></pre>

   Alternately:

   <pre><strong>[Environment]::GetEnvironmentVariable("PermVariableName", "User")
   </strong></pre>


NOTE: PowerShell has providers that creates one or more drives, which are hierarchical, file system-like structures that allow a user to manage various areas in Windows. One of those providers is for environment variables called Environment.

Built-in Providers for the Windows operating system:<a target="_bank" href="https://ss64.com/ps/syntax-env.html">*</a>:

   * Alias - Windows PowerShell aliases {Alias}
   * Certificate - X509 certificates for digital signatures {cert}
   * Environment - Windows environment variables {Env}
   * FileSystem - File system drives, directories and files {filesystem}
   * Function - Windows PowerShell functions {Function}
   * Registry - Windows registry {HKLM, HKCU}
   * Variable - Windows PowerShell variables {Variable}

<!--
## Filter output

   <pre>get-ChildItem -filter "starswith(givenName,'Al')"
   </pre>
-->

## Version Logic: If Then Else #

NOTE: I haven't found a way to have a Bash script that 
can also be run as a PowerShell script.

PROTIP: Switching from Bash to PowerShell means a one-time migration and there is no turning back unless you want to maintain parallel scripts.

This is largely because of differences in if/then/else coding.
   The same if/then/else syntax in PowerShell scripts for
   Mac and PC is needed for the same script file to be used.

   On Bash:

   <pre>if [ "$IsWindows" = True ]; then
       echo "Do Windows"
   fi
   </pre>

> If there is a question whether a single PowerShell script can really run on both Mac and Windows. Do a parallel run.

   For different actions in PowerShell according to type of operating system:

   <pre>If ($IsWindows -eq True) { echo "IsWindows"}
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

1. Get a list of providers and disk space:

   <tt><strong>Get-PSDrive
   </strong></tt>

   The response:

   <pre>Name           Used (GB)     Free (GB) Provider      Root                      
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

1. Instead of "mkdir" to create folders, use 

   <tt><strong>New-Item
   </strong></tt>

1. To list files in a folder, it's the same as in Bash:

   <pre><strong>ls -al</strong></pre>

   <pre>PowerShell <strong>cmdlets</strong> (command-lets) 
enables computers to be managed from the command line,
much like Bash shell scripts on Linux machines.
How many are there?

   <tt><strong>(get-command).count
   </strong></tt>

   At time of writing, the response is 3879.

   https://github.com/pester/Pester/wiki/Mock


## Alias not parameters #

Many Bash commands work in PowerShell (ls, cat, echo) because
<strong>Aliases</strong> make many commands in Bash scripts work:

   <tt><strong>get-alias echo
   </strong></tt>

   The response is what is executed:

   <pre>Alias           echo -> Write-Output</pre>
   
   BLAH: Many parameters to aliases are not recognized.
   For example, this common command results in an error:

   <pre>ls -al</pre>

   Instead, use:

   <tt><strong>dir -File | format-table
   </strong></tt>

   NOTE: dir is an alias to Get-ChildItem.

   Thus,

   <tt><strong>Write-Host $env:computername -foreground Green
   </strong>

   "--passthru" means do not go through Pipeline.

   <a target="_blank" href="http://thesociablegeek.com/azure/using-curl-in-powershell/">
   PROTIP: You can reset a default alias</a>.


## Environment Variables ###

   PROTIP: Environment variables defined in Bash scripts
   can be read by PowerShell scripts and visa-versa.

1. List all OS environment variables:

   <pre><strong>dir env:\
   </strong></pre>

   Alternately, since the command "dir" is an alias of Get-ChildItem.

   <pre><strong>Get-ChildItem Env:
   </strong></pre>

1. For the value of a single environment variable:

   <tt><strong>
   Get-ChildItem Env:USER<br />
   Get-ChildItem Env:AWS_DEFAULT_REGION
   </strong></tt>

1. Save a password data type:

   <pre><strong>$mypassword = New-Object System.Management.Automation.PSCredential($username, $SecurePassword) 
   </strong></pre>

   According to <a target="_blank" href="https://www.udemy.com/course/exam-az-104-microsoft-azure-administrator/learn/lecture/18878420#questions">VIDEO</a>:

   <pre><strong>$mypassword = New-Object -TypeName Microoft.Open-AzureAd.Model.PasswordProfile
   $mypassword.Password = "ChangeMe"
   new-azureaduser -DisplayName "John" -PasswordProfile $userpassword -UserPrincipalName johndoe@mycorp.com
   </strong></pre>


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

   <pre>$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
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


<hr />

## Remove/Delete whole folder #

Instead of "rm -rf" in Bash <a target="_blank" href="
https://blogs.technet.microsoft.com/heyscriptingguy/2012/02/22/the-best-way-to-use-powershell-to-delete-folders/">:</a>

   <pre><strong>Remove-Item -path c:\* -Filter *text* -WhatIf
   </strong></pre>

   "-WhatIf" specifies a dry-run.


## Combine text in files

   Ro add the content of several files into a single text file:

   <pre><strong>Get-Content "directory path"\*.txt -Force | Set-Content "directory path"\results.txt
   </strong></pre>

## Cmdlets #

PS has some smarter parameters, such as filtering for files only
and running recursively into sub-folders:

   <tt><strong>dir c:\work\*.ps1 -file -recurse
   </strong></tt>


## paths #

   Only 25% of cmdlets are shipped with paths.


## Strings #

   PROTIP: Don't use "+" for string concatenation.

### .NET Framework members

1. Since PowerShell was initially built on Microsoft's .NET Framework, PowerShell can refer to a static .NET member within square brackets followed by two colons to specify Pi:

   <tt>[math]::pi
   </tt>

   Response:

   <pre>3.14159265358979</pre>

   NOTE: Unlike Python, it's wonderful that PowerShell doesn't require an echo command to display the value of objects.

1. To delete a file in the .NET I/O directory object, such as "tests":

   <pre>[io.directory]::Delete("C:\test*")
   </pre>

   The issue with using .NET objects is that they may execute in a different folder context
   than PowerShell.

   TODO: $prompt


### Other pre-defined variables #

0. To count the number of cmdlets:

   <pre>$size/1MB
   </pre>

   0

   To get the current folder:

   <pre><strong>$MyFileName = "data.txt"
   $filebase = <strong>$PSScriptRoot</strong> + "\" + $MyFileName
   </strong></pre>

   Alternatively, use (since v2):

1. Current folder path in PowerShell is a PathInfo object:

   <pre><strong>(Resolve-Path .\).Path
   </strong></pre>

   $scriptDir = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent


## Dates #

Based on <a target="_blank" href="http://ss64.com/ps/syntax-dateformats.html">http://ss64.com/ps/syntax-dateformats.html</a>

   <pre><strong>Get-Date -Format "yyyy-MM-dd HH:mm"
   </strong></pre>

   <pre>2021-03-07 05:22</pre>

1. Define variables:

   <pre><strong>Get-Date -Format "yyyy-MM-dd HH:mm"
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

   <tt><strong>Get-Variable | Out-String
   </strong></tt>

   PROTIP: With PowerShell, it's best to use out-file instead of ">" redirect character:

   <tt><strong>dir -file -hidden | out-file -filepath rootfiles.txt<br />
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


## Module to call Twitter REST API #

   <a target="_blank" href="https://marckean.com/2015/09/21/use-powershell-to-make-rest-api-calls-using-json-oauth/">
   This</a> suggests:

   <pre>$J = Invoke-WebRequest `
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

   <pre>Name                           Value                                           
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

   <pre><strong>Import-module "../MyTwitter.psm1"
   </strong></pre>

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

   <pre><strong>Send-Tweet -Message '@adbertram Thanks for the Powershell Twitter module'
   </strong></pre>

   BTW, PowerShell cmdlets in https://github.com/Iristyle/Posh-GitHub is only for use on Windows.

* Trevor Sullivan (@pcgeek86) made a 
<a target="_blank" href="https://channel9.msdn.com/Blogs/trevor-powershell/Automating-the-GitHub-REST-API-Using-PowerShell">
20:40 video Mar 17, 2016</a>

* <a target="_blank" href="http://dotps1.github.io/PSProfile/">
A PowerShell Module for manipulating PowerShell Profiles</a>
by <a target="_blank" href="https://dotps1.github.io/projects.html">Thomas Malkewitz</a>


### Curl #

   curl is an alias for Invoke-WebRequest in PowerShell.

   <pre>
   Invoke-RestMethod `
   -Method Post `
   -Uri "$resource\new" `
   -Body (ConvertTo-Json $body) `
   -Header @{"X-ApiKey"=$apiKey}
   </pre>

   See https://channel9.msdn.com/Blogs/trevor-powershell/Automating-the-GitHub-REST-API-Using-PowerShell


## JSON from REST API #

   To extract out a key from the JSON file:

   <pre>$x.Stuffs | where { $_.Name -eq "Darts" } 
   </pre>

https://www.pluralsight.com/courses/powershell-modules-advanced-functions-building



## API calls #

   Corporate IT departments often use Group Policies.

   <pre>
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
   </pre>



### Profile scripts #

<a target="_blank" href="https://app.pluralsight.com/library/courses/powershell-v3-essentials-it-pt3/table-of-contents">Jeff Hicks notes</a> these profile scripts execute automatically at start:

1. To view all profiles:

   <tt><strong>$profile | select *
   </strong></tt>

   Response:

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


## Iterate #

0. <a target="_blank" href="http://powershelldistrict.com/powershell-mac-os-x/">
   Stephane</a> shows this command to move (pipe) png files from 
   Desktop to Pictures folder:

   <pre>Get-ChildItem -Filter '*.png' | Move-Item -Destination '../Pictures'
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


## Read in CSV file #

<a target="_blank" href="https://www.petri.com/making-data-dance-with-powershell">This blog</a> gives an example of importing a CSV file:

   <tt><strong>$data = Import-CSV C:\scripts\moviedata.csv
   </strong></tt>

   PROTIP: Sorting by date requires creating a new property:

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


## PowerShell Remoting

https://docs.microsoft.com/en-us/powershell/scripting/learn/remoting/winrmsecurity?view=powershell-7.1
Security Considerations for PowerShell Remoting using WinRM

## Social

<a target="_blank" href="https://powershell.slack.com/">https://powershell.slack.com</a>



## More PS Libraries #

<a target="_blank" href="https://www.simple-talk.com/blogs/psyaml-powershell-yaml/">
https://www.simple-talk.com/blogs/psyaml-powershell-yaml</a>

## References

"Practical PowerShell for IT Security":
   * <a target="_blank" href="https://www.varonis.com/blog/practical-powershell-for-it-security-part-i-file-event-monitoring">Part I: File Event Monitoring</a>
   * <a target="_blank" href="https://www.varonis.com/blog/practical-powershell-for-it-security-part-ii-file-access-analytics-faa/?hsLang=en">Part II: File Access Analytics (FAA)</a>
   * <a target="_blank" href="https://www.varonis.com/blog/practical-powershell-security-part-iii-classification-budget/?hsLang=en">Part III: Classification on a Budget</a>
   * <a target="_blank" href="https://www.varonis.com/blog/practical-powershell-security-part-iv-security-scripting-platform-ssp/?hsLang=en">Part IV:  Security Scripting Platform (SSP)</a>
   * <a target="_blank" href="https://www.varonis.com/blog/practical-powershell-for-it-security-part-v-security-scripting-platform-gets-a-makeover/?hsLang=en">Part V: Security Scripting Platform Gets a Makeover</a>

https://docs.broadcom.com/doc/increased-use-of-powershell-in-attacks-16-en

## More on DevSecOps #

This is one of a series on DevSecOps:

{% include devops_links.html %}
