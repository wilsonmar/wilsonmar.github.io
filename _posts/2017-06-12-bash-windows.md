---
layout: post
date: "2023-01-07"
file: "bash-windows"
title: "Bash shell running within Windows using Microsoft's WSL (Windows Subsystem for Linux)"
excerpt: "It's less like Power Rangers clicking rings, more like living among expats in a foreign country"
tags: [Bash, Windows, IoT]
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

June 2017 was the first "beta" release of Microsoft's WSL (Windows Subsystem for Linux).

Around May 2019, Microsoft released <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/wsl2-about">WSL2</a> (version 2). 

WSL is so much simpler than <a target="_blank" href="https://www.cygwin.com/">Cygwin</a>

<a target="_blank" href="https://www.youtube.com/watch?v=A0eqZujVfYU" title="Sep 13, 2019">VIDEO</a> and <a target="_blank" href="https://hanselman.com/blog/DockerDesktopForWSL2IntegratesWindows10AndLinuxEvenCloser.aspx">BLOG</a>: Scott Hanselman explains it all: VS Code with Remote Extension, Docker, and the Windows Terminal.


## Architecture

The diagram for WSL1:  (TODO: Update for WSL2 needed)

   ![bash-windows-wsl file-system-graphic-1024x547](https://user-images.githubusercontent.com/300046/27129463-644687dc-50d0-11e7-92fc-f9862d9c04cd.png)

   <tt>gcc</tt> is installed by ???. bash, git can be installed using Choclately.

   <tt>Lxcore.sys</tt> is the driver that recognizes Bash commands and other Linux utilities such as chmod
   to change permissions.

   <tt>VFS</tt> is the Virtual File System.

   From inside Bash, <tt>DrvFS</tt> gets to Windows.

   From inside Windows, <tt>VolFS</tt> gets to Linux symbolic files and its case sensitivity.

   <tt>NTFS</tt> (New Technology File System) is the file system controlling hard drives.

CAUTION: WSL provides <strong>no GPU support</strong>, so it can’t run Linux GUI programs such as Gnome, KDE, etc.


## Got 64-bit?

   Verify your PC's CPU architecture and Windows version/build number:

1. Start: Click the Windows icon/keyboard key to open Settings, System, About (at the bottom of the list). 

   Windows 11:
   TBD

   Windows 10:
   ![bash-windows-build-951x388](https://user-images.githubusercontent.com/300046/72775139-6e688e80-3bca-11ea-90f4-ed92a4754bba.png)

2. Get a newer computer if you don't see:

   <tt>System type    64-bit operating system, x64-based processor.</tt>

   The technical requirement is that WSL currently runs "ELF64 Linux binaries".


   ## Option A: Windows 10 Build #

   Alternately, if you have configured PowerShell to run commands,
   get your Windows Server build number within PowerShell:

   <pre>systeminfo | Select-String "^OS Name","^OS Version"</pre>

   Example response:
   <pre>OS Name: Microsoft Windows 11 Home
OS Version: 10.0.22000 N/A Build 22000
   </pre>

   If your OS Build is not <strong>18917</strong> or higher, update.

   ## Option B: Windows Insider Build

   As of this writing, WSL is in Preview, so <a target="_blank" href="https://insider.windows.com/en-us/getting-started/">Register</a> to be in the <a target="_blank" href="https://insider.windows.com/en-us/getting-started/">Windows Insider</a>. (Beta was in the Windows 10 "Anniversary Update Creators Update", then "Fall Creators Update")

1. Go to Settings > Update & Security > Windows Insider Program and click Get Started to access the latest build.
2. Enter the account you used to sign into the Windows Insider Program.
3. Follow the prompts to install.

   As of this writing, Windows Insider version 19041.1 was available on the slow ring.
   You don’t need a fast ring build to get WSL 2. 

4. Go to Settings > Update & Security > Windows Update and click Check for updates to install.

   <a target="_blank" href="https://download.docker.com/win/edge/40807/Docker%20Desktop%20Installer.exe">Docker Desktop Edge</a> 2.1.6.0 + requires Windows 10 Pro or Enterprise Insider Preview build 19018 or higher to integrate with WSL Linux. 

   https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewSDK

   ### Virtualization
   
   Virtualization must be enabled in the computer bios, instructions for this vary between manufacturers but it’s usually a simple on/off listing in the BIOS.

   ## Enable WSL Windows Feature

5. Press the Windows Start button and immediately type in the search box that appears:

   <pre><strong>Turn Windows features on or off
   </strong></pre>

6. Type enough until the option appears in the menu, then click on the option.

   Wait a while for all items to appear.

7. Scroll down to check "Windows Subsystem for Linux", then
   click OK to exit dialog, then Restart your computer.

   (This option was added since the "Anniversary" and "Creators Update" of Windows 10.)

   ## Windows Terminal

8. Click the Windows Start and get in the Microsoft Window Store to install the new <strong>Windows Terminal</strong>. It is like tmux - it makes it easy to open multiple panes with different prompts for bash, command prompt and PowerShell.


   ## Download installer

1. Following instructions at <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/wsl2-install">https://docs.microsoft.com/en-us/windows/wsl/wsl2-install</a>, in PowerShell, enable the 'Virtual Machine Platform' optional component (whatever that means):

   <pre>dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   </pre>

1. Confirm whether Windows Subsystem for Linux is enabled in PowerShell:

   <pre><strong>Get-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
   </strong></pre>


   ### Set Linux distro to be backed by WSL 2

1. <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/install-win10#install-your-linux-distribution-of-choice">PROTIP</a>: WSL provides a choice of Linux distributions. 

   <pre><strong>wsl -l</strong></pre>

   * Ubuntu-18.04 - CanonicalGroupLimited.Ubuntu18.04onWindows_1804.2018.817.0_x64__79rhkp1fndgsc
   * Ubuntu 18.04 ARM for running on Raspberry Pi?
   * Ubuntu-16.04 - Ubuntu_1604.2019.523.0_x64.appx
   * Debian GNU/Linux - DebianGNULinux_1-1-3-0_x64__76v4gfsz19hv4
   * Kali Linux
   * OpenSUSE Leap 42
   * SUSE Linux Enterprise Server 12
   * Fedora Remix for WSL (licensed)
   * Pengwin is paid/licensed. Based on Debian.
   * WLinux ???
   <br /><br />
   
   PROTIP: Ubuntu was the first distro tested with WSL, so it's probably the most well tested.
   But it's not supported by Windows 10 S.
   Both Ubuntu and Debian make use of the <strong>apt-get</strong> (Advanced Packaging Tool) package manager and <strong>dpkg</strong> command.

   BTW Ubuntu is a Linux distribution from Canonical, Inc. which also created Virtualenv for Python.

   Kali Linux is used by security researchers.

1. From the Start menu, select the Microsoft Windows Store. Search for "Linux". Click Ubuntu, then ‘Install’:

   Once installed, the ‘Install’ button will change to ‘Launch’, click the ‘Launch’ button. 

   Alternately, download the ".appx" installer by constructing the curl command for the Ubuntu version listed above, such as:

   <pre><strong>curl -L -o ubuntu-1604.appx https://aka.ms/wsl-ubuntu-1604</strong></pre>

   This is instead of the Invoke-WebRequest PowerShell command or
   <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/enterprise">Microsoft Store for Business</a> used within enterprises.

1. In PowerShell, construct the command using the name of the .appx file downloaded:

   <pre><strong>Add-AppxPackage .\Ubuntu_1604.2019.523.0_x64.appx</strong></pre>

1. Set the distribution code for the Linux distro downloaded (I don't know why):

   <pre><strong>wsl --set-version Ubuntu 2</strong></pre>

1. Verify what versions of WSL your distros are using:

   <pre><strong>wsl -l -v</strong></pre>

1. Make WSL 2 your default architecture (as if you'll ever want to go back):

   <pre><strong>wsl --set-default-version 2</strong>

   ## Launch and configure

1. <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/initialize-distro">Launch</a> the new instance of WSL by from the Start menu section titled "WSL Linux Distros".

1. The first time a newly installed distro runs, a Console window opens, and you'll see

   <pre>Installing, this may take a few minutes...</pre>

   BTW: In previous versions, you had to go to Open Settings -> Update and Security -> For developers
   to check the Developer Mode radio button to "install any signed app".

   Then...

   <pre>Installation successful
   Please create a default UNIX user account. The username does not need to match your Windows username.
   For more information visit: https://aka.ms/wslusers
   Enter new UNIX username: _</pre>

1. Enter a username your make up.

   PROTIP: The WSL user is not "root" with admin priviledges.

1. PROTIP: Type the password in 1Password or other Password Manager, then copy it to paste in the screen.

   A shortcut is added to your start menu named:

   `Bash on Ubuntu on Windows`

0. Click the shortcut so you don't have to type "bash".

   By default, the prompt is your Linux user name @ your machine name:/mnt/c/Users/%USERNAME%$


   ## Where is WSL?

   PROTIP: WSL runs within the <strong>Vemmem</strong> process.

1. Open Task Manager to see it.

   ## FAQ

0. Read the <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/faq">FAQ</a> for known weirdness.

   Bugs with WSL are reported to developers at <a target="_blank" href="https://github.com/microsoft/WSL">https://github.com/microsoft/WSL</a>

   https://docs.microsoft.com/en-us/windows/wsl/troubleshooting

   ## Profile to define prompt

0. Open the Bash command prompt</strong> (click Windows Start and type Bash until you can select it from the list that arises).

   NOTE: You can <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/interop">run Linux binaries such as ls</a> from the Windows Command Prompt (CMD or PowerShell) by invoking <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/reference">wsl.exe</a> there. These are called interop features.

0. Open the Visual Studio Code text editor to the file in the $HOME folder, which is what ~ stands for, just like in macOS:

   <pre><strong>code ~/.profile
   </strong></pre>

   By default, WSL reads and executes commands from the file <tt>/etc/profile</tt> if that file exists. After reading that file, it looks for ~/.bash_profile, ~/.bash_login, and ~/.profile, in that order, and reads and executes commands from the first one that exists and is readable. It skips the other files if one is found.

0. Define keyboard aliases in a <strong>.bash_aliases</strong> file in the .bashrc file <a target="_blank" href="https://askubuntu.com/questions/29239/where-is-bash-profile/969923#969923">*</a>

   <pre><strong>code ~/.bashrc
   </strong></pre>

   My list is in https://github.com/wilsonmar/git-utilities/master/aliases.sh

   ## Zsh

   See https://medium.com/@edwardbaeg9/using-homebrew-on-windows-10-with-windows-subsystem-for-linux-wsl-c7f1792f88b3

   ## Linux commands

1. Get to know the built-in Linux commands: cat, cd, chmod, chown, curl, df, diff, echo, exit, find, finger, grep, groups, gzip, head, history, kill, less, ls, man, mkdir, mv, passwd, ping, ps, pwd, shutdown, ssh, sudo, tail, tar, top, uname, w, whoami. There's also cp.

   * <a target="_blank" href="https://tutorials.ubuntu.com/tutorial/command-line-for-beginners#0">
   Ubuntu's "The Linux command line for beginners".
   * <a target="_blank" href="https://www.howtogeek.com/412055/37-important-linux-commands-you-should-know/">
   37 Important Linux Commands You Should Know</a>
   <br /><br />

   Rather than a translation layer built by the WSL 1 team, WSL 2 includes its own <a target="_blank" href="https://github.com/microsoft/WSL2-Linux-Kernel">open-sourced Linux kernel</a> with full system call compatibility with the <a target="_blank" href="https://www.Kernel.org/">LTS Linux kernel</a>. WSL2 does not work under HyperV.


   Sean Dearnaley <a target="_blank" href="https://medium.com/swlh/wsl-2-docker-edge-tech-preview-native-linux-containers-w-o-emulation-b41667e6dbef">points out</a> that since macOS currently doesn’t have good GPU support, if Windows introduces GPU support for WSL, Windows machines could become a very powerful machine learning development platform when running <a target="_blank" href="https://developer.nvidia.com/cuda-zone">Nvidia CUDA</a> based apps.

   ## pwd file storage mounts

0. To list drives mounted:

   <pre><strong>cd /mnt
   </strong></pre>

   The response is the drives:

   <pre>c d f</pre>

0. For the purpose of this tutorial, create folder <tt>dev/project</tt> for use by both Windows and Linux tools:

   <pre><strong>cd /mnt/c/dev/
   mkdir project
   </strong></pre>

   You can also make whatever directory name you want.

0. PROTIP: Use $HOME or ~ to reference your home folder:

   <pre><strong>cd ~
   pwd
   </strong></pre>

   Unlike<tt>/users</tt> on macOS, the folder above user accounts is:

   <pre>/home/me</pre>

0. Open Windows Explorer to view files from both Windows and from Bash:

   <pre><strong>explorer.exe .
   </strong></pre>

0. Access files from both Windows and from Bash as:

   <pre><strong>/mnt/c/path
   </strong></pre>

1. Run a Linux utility such as disk usage of the current folder (represented by a dot):

   <pre><strong>du -sh
   </strong></pre>

   The response is like <tt> 56K	.</tt>

1. View the manual on the du command:

   <pre><strong>man du
   </strong></pre>

1. PROTIP: Remember this move whenever you see that ":" in the lower-left corner:

   type <strong>q</strong> to quit out.


   ## Folders and variables

0. See where Ubuntu is installed using a Windows system variable
   referenced using a Windows % wrapper rather than Bash $ prefix:

   <pre><strong>%localappdata%\lxss\
   </strong></pre>

   Note the directory is marked as a hidden system folder.
   That's a clue that you should not modify files in your bash environment using Windows File Explorer, console, or apps.

   Creating and/or modifying files in this location using Windows tools and apps corrupts the system because it is read-locked. <a target="_blank" href="https://blogs.msdn.microsoft.com/commandline/2016/11/17/do-not-change-linux-files-using-windows-apps-and-tools/">Here is an explanation</a>.
    

   ## Homebrew

1. Install the LinuxBrew fork of Homebrew for macOS<a target="_blank" href="https://medium.com/@edwardbaeg9/using-homebrew-on-windows-10-with-windows-subsystem-for-linux-wsl-c7f1792f88b3">*</a>

   "I found some apps that didn’t work well from apt-get worked flawlessly when installed with brew, like zplug. Inversely, I couldn’t get ranger to work with brew but got it working with apt-get. This very conveniently gives you multiple options for installing a package, potentially skipping the step of Googling vague errors. 
   
   To fix the patchelf error:

   <pre>sudo apt-get update
   sudo apt-get install build-essential
   </pre>

   ## Docker

1. TODO: Use brew to install Docker Desktop Edge, in Technical Preview as of this writing.

   <img width="320" alt="bash-windows-docker" src="https://user-images.githubusercontent.com/300046/72780943-5817fe00-3bdd-11ea-98cc-d42b3094a235.png">

   See https://docs.docker.com/docker-for-windows/edge-release-notes/

   Sean Dearnaley <a target="_blank" href="https://medium.com/swlh/wsl-2-docker-edge-tech-preview-native-linux-containers-w-o-emulation-b41667e6dbef">provides pointers</a>.
   It now supports Kubernetes, offers VPN-friendly networking, provides an updated Docker daemon, and many new features.

   ## Visual Studio Code

   <a target="_blank" href="https://www.youtube.com/watch?v=mIHprjsSO9o">VIDEO</a>:
   Run and debug your Linux-based applications from within VSCode in Windows. Edit files in WSL or the mounted Windows filesystem (/mnt/c) without worrying about pathing issues, binary compatibility, or other cross-OS challenges.

1. Install <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl">
   Visual Studio Code Remote — WSL extension at https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl</a>

   ## Git

1. TODO: Use brew to install additional utilities: git, Python/pip, tree, jq, etc.

   https://medium.com/swlh/wsl-2-docker-edge-tech-preview-native-linux-containers-w-o-emulation-b41667e6dbef

1. Use pip to install Virtualenv.

1. Install keyboard aliases to use custom commands:

   TODO: git-utilities


   <a target="_blank" href="https://blog.henrypoon.com/blog/2017/06/18/running-selenium-webdriver-on-bash-for-windows/">
   NOTE</a>: To run Python for Selenium controlling Firefox, install Xming with gekoDriver.

   ## VHD size adjustment

   WSL 2 stores Linux files inside of a VHD (Virtual Hard Disk) using the ext4 file system. VHD has an initial max size of 256GB. If your distro grows beyond that you will see errors stating that you've run out of disk space. <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/wsl2-ux-changes">To expand VHD size</a>:

1. Terminate all WSL instances:

   <pre><strong>wsl --shutdown</strong></pre>

1. Find your distro installation package name 'PackageFamilyName'.

1. In a powershell prompt (where 'distro' is your distribution name) construct:

   <pre><strong>Get-AppxPackage -Name "*<em>distro</em>*" | Select PackageFamilyName</strong></pre>

1. Locate the VHD file fullpath used by your WSL 2 installation, this will be your 'pathToVHD':

   <pre><strong>%LOCALAPPDATA%\Packages\<em>PackageFamilyName</em>\LocalState\<em>disk</em>.vhdx</strong></pre>

   ### Resize your WSL 2 VHD:

1. Open a command prompt Window with admin privileges and run the following commands:
   
   <pre><strong>diskpart</strong></pre>

   In the dialog:

   Select vdisk file="<em>pathToVHD</em>"
   
   expand vdisk maximum="<em>sizeInMegaBytes</em>"
   
1. Launch your WSL distro.

1. Make WSL is aware that it can expand its file system's size by running these commands in your WSL distro:

   <pre><strong>sudo mount -t devtmpfs none /dev
   mount | grep ext4</strong></pre>

1. Copy the name of this entry, which will look like: /dev/sdXX (with the X representing any other character),
   making sure to use the value you copied earlier.

   <pre><strong>sudo resize2fs /dev/sdXX</strong></pre>  

1. You may need to use: 

   <pre><strong>apt install resize2fs</strong></pre>

## References

Links and issues for this:

<a target="_blank" href="https://github.com/Microsoft/BashOnWindows">
https://github.com/Microsoft/BashOnWindows</a>

<a target="_blank" href="https://msdn.microsoft.com/en-us/commandline/wsl/install_guide">
https://msdn.microsoft.com/en-us/commandline/wsl/install_guide</a>

<a target="_blank" href="https://blogs.msdn.microsoft.com/wsl/2016/06/15/wsl-file-system-support/">
https://blogs.msdn.microsoft.com/wsl/2016/06/15/wsl-file-system-support</a>
published 15 June 2016 by Jack Hammons, who writes:<br />
<a target="_blank" href="https://blogs.msdn.microsoft.com/wsl/">
https://blogs.msdn.microsoft.com/wsl</a>, the home page of WSL.

https://medium.com/better-programming/make-bash-on-ubuntu-on-windows-10-look-like-the-ubuntu-terminal-f7566008c5c2

https://medium.com/free-code-camp/how-to-set-up-docker-and-windows-subsystem-for-linux-a-love-story-35c856968991
"Yeah, it seemed to have uninstalled linuxbrew as soon as I closed the Ubuntu shell. Although my path references in .profile seemed to persist"

https://www.windowscentral.com/how-install-wsl2-windows-10

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
