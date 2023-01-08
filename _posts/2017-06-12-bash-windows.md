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

   Windows 10:
   ![bash-windows-build-951x388](https://user-images.githubusercontent.com/300046/72775139-6e688e80-3bca-11ea-90f4-ed92a4754bba.png)

2. Get a newer computer if you don't see:

   <tt>System type    64-bit operating system, x64-based processor.</tt>

   The technical requirement is that WSL currently runs "ELF64 Linux binaries".

3. If you have configured PowerShell to run commands,
   get your Windows Server build number within PowerShell:

   <pre>systeminfo | Select-String "^OS Name","^OS Version"</pre>

   Example response:

   <pre>OS Name: Microsoft Windows 11 Home
OS Version: 10.0.22621 N/A Build 22621
   </pre>

4. Get the installer:    NOTE: We're not using the <a target="_blank" href="https://insider.windows.com/en-us/getting-started/">Register</a> to be in the <a target="_blank" href="https://insider.windows.com/en-us/getting-started/">Windows Insider Build</a>.
   
   <pre><strong>wsl --install</strong></pre>

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
   

   ### Virtualization
   
   Virtualization must be enabled in the computer bios, instructions for this vary between manufacturers 
   but it’s usually a simple on/off listing in the BIOS.

   ## Enable WSL Windows Feature

5. Press the Windows Start button and immediately type in the search box that appears:

   <pre><strong>Turn Windows features on or off
   </strong></pre>

6.  Type enough until the option appears in the menu, then click on the option.

   Wait a while for all items to appear.

7.  Scroll down to check "Windows Subsystem for Linux", then
   click OK to exit dialog, then Restart your computer.

   (This option was added since the "Anniversary" and "Creators Update" of Windows 10.)

   ## Windows Terminal

8.  Click the Windows Start and get in the Microsoft Window Store to install the new <strong>Windows Terminal</strong>. It is like tmux - it makes it easy to open multiple panes with different prompts for bash, command prompt and PowerShell.


   ## Download installer

1. Following instructions at <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/wsl2-install">https://docs.microsoft.com/en-us/windows/wsl/wsl2-install</a>, in PowerShell, enable the 'Virtual Machine Platform' optional component (whatever that means):

   <pre>dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   </pre>

1. Confirm whether Windows Subsystem for Linux is enabled in PowerShell:

   <pre><strong>Get-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
   </strong></pre>

   The response I got:

   <pre>FeatureName      : Microsoft-Windows-Subsystem-Linux
DisplayName      : Windows Subsystem for Linux
Description      : Provides services and environments for running native user-mode Linux shells and tools on Windows.
RestartRequired  : Possible
State            : Enabled
CustomProperties :
                   ServerComponent\Description : Provides services and environments for running native user-mode
                   Linux shells and tools on Windows.
                   ServerComponent\DisplayName : Windows Subsystem for Linux
                   ServerComponent\Id : 1033
                   ServerComponent\Type : Feature
                   ServerComponent\UniqueName : Microsoft-Windows-Subsystem-Linux
                   ServerComponent\Deploys\Update\Name : Microsoft-Windows-Subsystem-Linux
   </pre>


   ### Set Linux distro to be backed by WSL 2

1. <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/install-win10#install-your-linux-distribution-of-choice">PROTIP</a>: 
   WSL provides a choice of Linux distributions. For a list:

   <pre><strong>wsl -l</strong></pre>

   <pre>Distributions:
Ubuntu (Default)
docker-desktop
docker-desktop-data
   </pre>

   PROTIP: Ubuntu was the first distro tested with WSL, so it's probably the most well tested.
   But it's not supported by Windows 10 S.
   Both Ubuntu and Debian make use of the <strong>apt-get</strong> (Advanced Packaging Tool) package manager and <strong>dpkg</strong> command.

   BTW Ubuntu is a Linux distribution from Canonical, Inc. which also created Virtualenv for Python.

   Kali Linux is used by security researchers (not for production use).

   ### Ubuntu version/release

1. In a web browser, know what the latest version of Ubutu is:

   <a target="_blank" href="https://releases.ubuntu.com">https://releases.ubuntu.com</a>

   Note there is a name for each release.

   WARNING: Time is needed for integration into Windows, so WSL probably does not support the very latest version of Ubuntu.

2. From the Start menu, select the <strong>Microsoft Windows Store</strong>. 
3. Search for Ubuntu:

   Scroll to see the latest version of Ubuntu for Windows (such as 22.4.5 LTS).

4. Click "Get":

   Once installed, the ‘Install’ button will change to ‘Launch’, click the ‘Launch’ button. 

   One can, but don't: alternately, download the ".appx" installer by constructing the curl command for the Ubuntu version listed above, such as:

   <pre><strong>curl -L -o ubuntu-1604.appx https://aka.ms/wsl-ubuntu-1604</strong></pre>

   This is instead of the Invoke-WebRequest PowerShell command or
   <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/enterprise">Microsoft Store for Business</a> used within enterprises.

<!-- 5. In PowerShell, construct the command using the name of the .appx file downloaded:

   <pre><strong>Add-AppxPackage .\Ubuntu_1604.2019.523.0_x64.appx</strong></pre>
-->

6. Set the distribution code for the Linux distro downloaded (I don't know why):

   <pre><strong>wsl --set-version Ubuntu 2</strong></pre>

7. Verify what versions of WSL your distros are using:

   <pre><strong>wsl -l -v</strong></pre>

8. Make WSL 2 your default architecture (as if you'll ever want to go back):

   <pre><strong>wsl.exe --set-default-version 2</strong>

   ## Where is WSL?

   PROTIP: WSL runs within the <strong>Vemmem</strong> process.

1. Open Task Manager to see it.


   ## Ubuntu Install, Launch, and configure

   https://kubernetes.io/blog/2020/05/21/wsl-docker-kubernetes-on-the-windows-desktop/

9. In the Windows Start menu section titled "WSL Linux Distros",
10. Scroll to "Ubuntu on Windows". Right-click and select "Pin to Start" 

    <img alt="wsl-ubuntu-pin-259x170" width="259" height="170" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1673129058/wsl-ubuntu-pin-259x170_mifjw3.jpg">

11. Repeat to select "Pin to taskbar" at the edge of every screen.
12. Repeat to "Run as Administrator" or <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/initialize-distro">Launch</a> a new instance.

13. The first time a newly installed distro runs, a Console window opens, and you'll see

   <pre>Installing, this may take a few minutes...</pre>

   Then...

   <pre>Installation successful
   Please create a default UNIX user account. The username does not need to match your Windows username.
   For more information visit: https://aka.ms/wslusers
   Enter new UNIX username: _</pre>

14. Enter a username your make up.

   PROTIP: The WSL user is not "root" with admin priviledges.

15. PROTIP: Get the password copied into your Clipboard from 1Password or other Password Manager, then paste onto the screen.

   A shortcut is added to your start menu named:

   `Bash on Ubuntu on Windows`

16. Click the shortcut.

    By default, the prompt is your Linux user name @ your machine name:/mnt/c/Users/%USERNAME%$

    You should now see a pop-up window showing Ubuntu, such as this example:

    <pre>The authenticity of host '192.168.1.16 (192.168.1.16)' can't be established.
ED25519 key fingerprint is SHA256:j8f47S7QkzcnJ+hXpwnEQpL4RveqD2MQx79yVhiYXDE.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '192.168.1.16' (ED25519) to the list of known hosts.
kermitv@192.168.1.16's password:
Welcome to Ubuntu 22.04.1 LTS (GNU/Linux 5.15.0-57-generic x86_64)
&nbsp;
* Documentation: https://help.ubuntu.com
* Management: https://landscape.canonical.com
* Support: https://ubuntu.com/advantage
&nbsp;
System information as of Sun Jan 8 01:00:39 AM UTC 2023
&nbsp;
System load: 1.12841796875 Processes: 235
Usage of /: 43.5% of 9.75GB Users logged in: 0
Memory usage: 22% IPv4 address for docker0: 172.17.0.1
Swap usage: 0% IPv4 address for ens33: 192.168.1.16
&nbsp;
60 updates can be applied immediately.
To see these additional updates run: apt list --upgradable
    </pre>

17. You brave enough:

    <pre><strong>apt list --upgradable
    </strong></pre>

    <pre><strong>sudo apt-get upgrade
    </strong></pre>

18. View details of the Linux distro currently running:
    
    <pre><strong>lsb_release -a
    </strong></pre>

   The version at time of this writing:

   <pre>No LSB modules are available.
Distributor ID: Ubuntu
Description: Ubuntu 22.04.1 LTS
Release: 22.04
Codename: jammy
   </pre>

   ### Linux Folders and variables

1. See where Ubuntu is installed using a Windows system variable
   referenced using a Windows % wrapper rather than Bash $ prefix:

   <pre><strong>%localappdata%\lxss\
   </strong></pre>

   Note the directory is marked as a hidden system folder.
   That's a clue that you should not modify files in your bash environment using Windows File Explorer, console, or apps.

   Creating and/or modifying files in this location using Windows tools and apps corrupts the system because it is read-locked. <a target="_blank" href="https://blogs.msdn.microsoft.com/commandline/2016/11/17/do-not-change-linux-files-using-windows-apps-and-tools/">Here is an explanation</a>.
    

    ### Within Ubuntu

18. Type your admin password for all subsequent commands:

   <pre>su -l
   </pre>


   ### Install kubectl

2. Install latest release of <tt>kubectl</tt> on Ubuntu:

   <pre>sudo apt-get update && sudo apt-get install -y apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl
   </pre>

1. Install latest release of Minikube:
   
   <pre>curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube
sudo install minikube /usr/local/bin
   </pre>

1. If you see this error: <tt>Exiting due to GUEST_MISSING_CONNTRACK: Sorry, Kubernetes 1.25.3 requires conntrack to be installed in root's path</tt> 

   <pre><strong>sudo apt-get install conntrack
   </strong></pre>

3. In the Ubuntu Linux terminal, verify:

   <pre><strong>minikube version
   </strong></pre>

   <pre>minikube version v1.28.0
   commit: 986b1ebd987211ed16f8cc10aed7d2c42fc8392f
   </pre>
   
3. In the Ubuntu Linux terminal, start minikube:

   <pre>minikube start --vm-driver=none
   </pre>

   If you see:
   <pre>😄  minikube v1.28.0 on Ubuntu 20.04 (amd64)
✨  Using the none driver based on existing profile
&nbsp;
🤷  Exiting due to PROVIDER_NONE_NOT_FOUND: The 'none' provider was not found: running the 'none' driver as a regular user requires sudo permissions
   </pre>

   Alternately, (from CHATGPT4) run the <tt>dockerd</tt> server:

   <pre><strong>sudo dockerd --exec-opt native.cgroupdriver=none
   </strong></pre>


<hr />

## Install & Configure Utilities

6. TODO: Use brew to install additional utilities: git, Python/pip, tree, jq, etc.

   https://medium.com/swlh/wsl-2-docker-edge-tech-preview-native-linux-containers-w-o-emulation-b41667e6dbef

7. Use pip to install Virtualenv.

8. Install keyboard aliases to use custom commands:

   <a target="_blank" href="https://blog.henrypoon.com/blog/2017/06/18/running-selenium-webdriver-on-bash-for-windows/">
   NOTE</a>: To run Python for Selenium controlling Firefox, install Xming with gekoDriver.

   ### Profile to define prompt

2. Open the Bash command prompt</strong> (click Windows Start and type Bash until you can select it from the list that arises):

   NOTE: You can <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/interop">run Linux binaries such as ls</a> from the Windows Command Prompt (CMD or PowerShell) by invoking <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/reference">wsl.exe</a> there. These are called interop features.

3. Open the Visual Studio Code text editor to the file in the $HOME folder, which is what ~ stands for, just like in macOS:

   <pre><strong>code ~/.profile
   </strong></pre>

   By default, WSL reads and executes commands from the file <tt>/etc/profile</tt> if that file exists. After reading that file, it looks for ~/.bash_profile, ~/.bash_login, and ~/.profile, in that order, and reads and executes commands from the first one that exists and is readable. It skips the other files if one is found.

4. Define keyboard aliases in a <strong>.bash_aliases</strong> file in the .bashrc file <a target="_blank" href="https://askubuntu.com/questions/29239/where-is-bash-profile/969923#969923">*</a>

   <pre><strong>code ~/.bashrc
   </strong></pre>

   My list is in https://github.com/wilsonmar/git-utilities/master/aliases.sh

   ### Zsh

   See https://medium.com/@edwardbaeg9/using-homebrew-on-windows-10-with-windows-subsystem-for-linux-wsl-c7f1792f88b3


   ### LinuxBrew vs. Homebrew for MacOS

1. Install the LinuxBrew fork of Homebrew for macOS<a target="_blank" href="https://medium.com/@edwardbaeg9/using-homebrew-on-windows-10-with-windows-subsystem-for-linux-wsl-c7f1792f88b3">*</a>

   "I found some apps that didn’t work well from apt-get worked flawlessly when installed with brew, like zplug. Inversely, I couldn’t get ranger to work with brew but got it working with apt-get. This very conveniently gives you multiple options for installing a package, potentially skipping the step of Googling vague errors. 
   
   To fix the patchelf error:

   <pre>sudo apt-get update
   sudo apt-get install build-essential
   </pre>



   ### Linux commands

5. Get to know the built-in Linux commands: cat, cd, chmod, chown, curl, df, diff, echo, exit, find, finger, grep, groups, gzip, head, history, kill, less, ls, man, mkdir, mv, passwd, ping, ps, pwd, shutdown, ssh, sudo, tail, tar, top, uname, w, whoami. There's also cp.

   * <a target="_blank" href="https://tutorials.ubuntu.com/tutorial/command-line-for-beginners#0">
   Ubuntu's "The Linux command line for beginners".
   * <a target="_blank" href="https://www.howtogeek.com/412055/37-important-linux-commands-you-should-know/">
   37 Important Linux Commands You Should Know</a>
   <br /><br />

   Rather than a translation layer built by the WSL 1 team, WSL 2 includes its own <a target="_blank" href="https://github.com/microsoft/WSL2-Linux-Kernel">open-sourced Linux kernel</a> with full system call compatibility with the <a target="_blank" href="https://www.Kernel.org/">LTS Linux kernel</a>. WSL2 does not work under HyperV.


   Sean Dearnaley <a target="_blank" href="https://medium.com/swlh/wsl-2-docker-edge-tech-preview-native-linux-containers-w-o-emulation-b41667e6dbef">points out</a> that since macOS currently doesn’t have good GPU support, if Windows introduces GPU support for WSL, Windows machines could become a very powerful machine learning development platform when running <a target="_blank" href="https://developer.nvidia.com/cuda-zone">Nvidia CUDA</a> based apps.

   ### pwd file storage mounts

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



   ### VSCode Extensions

9. In VSCode, "Trust and install" extensions Docker (from Microsoft), "Dev Containers", "Kubernetes".

   <a target="_blank" href="https://www.youtube.com/watch?v=mIHprjsSO9o">VIDEO</a>:
   Run and debug your Linux-based applications from within VSCode in Windows. Edit files in WSL or the mounted Windows filesystem (/mnt/c) without worrying about pathing issues, binary compatibility, or other cross-OS challenges.

10. Install <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl">Visual Studio Code Remote — WSL extension at https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl</a>

<hr />

## FAQ

1. Read the <a target="_blank" href="https://docs.microsoft.com/en-us/windows/wsl/faq">FAQ</a> for known weirdness.

   Bugs with WSL are reported to developers at <a target="_blank" href="https://github.com/microsoft/WSL">https://github.com/microsoft/WSL</a>

   https://docs.microsoft.com/en-us/windows/wsl/troubleshooting


<hr />

## Kubespray (Ansible)



## Video Tutorials

* <a target="_blank" href="https://app.pluralsight.com/library/courses/docker-windows-getting-started-2021/table-of-contents">16 Nov 2021 "Getting Started with Docker on Windows"</a> 5h41m by Wes Higbee

* <a target="_blank" href="https://app.pluralsight.com/library/courses/managing-docker-windows-servers/table-of-contents">3 Feb 2021 "Managing Docker on Windows Servers"</a> 1h17m by Piotr Gaczkowski referencing his <a target="_blank" href="https://github.com/DoomHammer/pluralsight-managing-docker-on-windows-servers">github.com/DoomHammer/pluralsight-managing-docker-on-windows-servers</a> for each tutorial module.

1. Create a new container:

   <pre><strong>docker run -v ${PWD}:C:\app --workdir /app mcr.microsoft.com/dotnet/core/sdk:3.1 dotnet new mvc --auth Individual
   </strong></pre>

1. The <strong>Dockerignore</strong> file contains names of files and folders that should not be in container images (because they are generated every time), such as:

   <pre>bin
   obj
   </pre>

1. The <a target="_blank" href="https://github.com/search?q=repo%3ADoomHammer%2Fpluralsight-managing-docker-on-windows-servers%20dockerfile&type=code">Dockerfile in each tutorial module</a> defines the various base images from the Azure MCR.




   ### Docker Enterprise Components

1. <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=d0abd475-57b3-471c-963f-8fe8d9ccee08">VIDEO</a>: Enterprise licenses:

   What was previously "Docker Engine" <a target="_blank" href="https://thenewstack.io/mirantis-acquires-docker-enterprise/">(and Docker's 30% pentration into the Fortune 500) was purchased Nov, 2019 by Mirantis</a> (the cloud consulting company with OpenStack roots). So it is now the <a target="_blank" href="https://docs.mirantis.com/mcr/20.10/overview.html">Mirantis Container Runtime</a>. 

    Docker's "Universal Control Plane" is now Mirantis Kubenetes Engine (MKE), which provides RBAC & LDAP for centralized cluster management.

   ### MCR
   
   Docker's "Trusted Registry" is now the Mirantis Secure Registry running MKE, hosting containers as a Linux server. It performs security scanning of image files.

1. To install MCR on Windows Server 2019, in PowerShell:

   <pre>[Net.ServicePointManager]::SecrurityProtocol - [Net.SecurityProtocolType]::Tls12
   [Install-Module DockerMsftProvider] -Force
   </pre>

1. 

   https://github.com/Mirantis/cri-dockerd#build-and-install



<hr />

## Docker Edge (at Tech Preview)

2. TODO: Use brew to install Docker Desktop Edge, in Technical Preview as of this writing.

   <img width="320" alt="bash-windows-docker" src="https://user-images.githubusercontent.com/300046/72780943-5817fe00-3bdd-11ea-98cc-d42b3094a235.png">

   See https://docs.docker.com/docker-for-windows/edge-release-notes/

   Sean Dearnaley <a target="_blank" href="https://medium.com/swlh/wsl-2-docker-edge-tech-preview-native-linux-containers-w-o-emulation-b41667e6dbef">provides pointers</a>.
   It now supports Kubernetes, offers VPN-friendly networking, provides an updated Docker daemon, and many new features.


<hr />

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


<hr />

## Akash Network

All of the above is getting ready for preparing your machine to generate revenue as <strong>provider clusters</strong> used by others on the Akash.cloud network. Leases of Akash resources are deployed via Kubernetes pods.

The <a target="_blank" href="https://docs.akash.network/providers/community-solutions/praetor">
Praetor application</a> from Akash builds an Akash Provider for small and medium sized environments.

On a Windows machine, Praetor runs after Kubespray (using RedHat Ansible) on an Ubuntu server within WSL2.
References:
   * https://github.com/kubernetes-sigs/kubespray
   * <a target="_blank" href="https://www.youtube.com/watch?v=8Jh4yZQOVZU">VIDEO</a>: "Kube 65.1 ] Kubespray - Kubernetes cluster provisioning"

   * https://www.techbeatly.com/2020/11/deploying-kubernetes-with-kubespray.html using Vagrant
   * https://www.redhat.com/sysadmin/kubespray-deploy-kubernetes
   * https://kubernetes.io/docs/setup/production-environment/tools/kubespray/
   * https://www.densify.com/kubernetes-tools/kubespray
   * https://adamtheautomator.com/kubespray/
   * https://schoolofdevops.github.io/ultimate-kubernetes-bootcamp/cluster_setup_kubespray/
   * https://slateci.io/docs/cluster/automated/install-kubernetes-with-kubespray.html
   <br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=CJ5G4GpqDy0">VIDEO</a>: "Deploying kubernetes using Kubespray" by Remko Deenik showing <a target="_blank" href="https://docs.akash.network/providers/build-a-cloud-provider/kubernetes-cluster-for-akash-providers">Steps</a> to build the provider’s Kubernetes control plane and worker nodes:

1. Install Ansible on Ubuntu:
   
   <pre><strong>sudo apt-get update
   sudo apt-get install ansible
   </strong></pre>

2. Install Python:
   
   <pre><strong>sudo pip3 install --upgrade pip
   sudo apt-get install ansible
   </strong></pre>

3. Navigate/create a folder the folder where you will be cloning into.
4. Clone the kubespray repository onto your server:

   QUESTION: Fork this first?

   <pre><strong>git clone https://github.com/kubernetes-sigs/kubespray.git
   </strong></pre>

5. Install (download) Python dependency packages:

   <pre><strong>sudo pip install -r requirements.txt
   </strong></pre>

6. Create an Ansible inventory file in your kubespray directory:

   <pre><strong>cd kubespray
   cp -rfp inventory/sample inventory/mycluster
   </strong></pre>

3. Install the required dependencies:

   <pre><strong>sudo ansible-galaxy install -r requirements.yml
   </strong></pre>

7. Specify the IP addresses of the servers of your cluster in a hosts.yml file:
   
   <pre><strong>declare -a IPS=(10.1.1.101 10.1.1.102 10.1.1.103 10.1.1.104 10.1.1.105 10.1.1.106)
   edit inventory/mycluster/hosts.yml
   </strong></pre>

   An example of the hosts.yml:

   <pre>hosts:
  node1:
    ansible_host: 10.1.1.101
    ip: 10.1.1.101
    access_ip: 10.1.1.101
   ...
   </pre>

1. Define the permissions in hosts.yml:
   
   <pre>  kube-node:
    hosts:
      node1:
      node2:
      node3:
      node4:
      node5:
      node6:
    etcd:
      hosts:
        node1:
        node2:
        node3:
    k8s-cluster:
      children:
        kube-master:
        kube-node:
    calico-rr:
      hosts: {}
   </pre>

2. Specify the IP addresses of the servers of your cluster:
   
   <pre><strong>CONFIG_FILE=inventory/mycluster/hosts.yml python3 contrib/inventory_builder/inventory.py ${IPS[@]}
   </strong></pre>

3. Review the configuration settings:

   <pre><strong>vi inventory/mycluster/group_vars/all/all.yml
   </strong></pre>

3. Review the configuration settings:

   <pre><strong>vi inventory/mycluster/group_vars/k8s-cluster/k8s-cluster.yml
   </strong></pre>

4. Deploy the cluster, using the cluster.yml playbook and the mycluster inventory file:

   <pre><strong>ansible-playbook -i inventory/mycluster/hosts.yml cluster.yml \
   --become --become-user=root cluster.yml
   </strong></pre>

   The above took an hour to spit out a lot.

5. Download kubectl:

   <pre><strong>???
   </strong></pre>
   
5. Use SSH to get files:

   <pre><strong>ssh 10.1.1.101 sudo cp /etc/kubernetes/admin.conf "/home/$USERNAME/config"
   ssh 10.1.1.101 sudo chmod +4 ~/config
   scp 10.1.1.101:~/config .
   mkdir .kube
   mv config .kube/
   ssh 10.1.1.101 sudo rm ~/config
   </strong></pre>

5. Verify access

   <pre><strong>kubectl version
   kubectl get nodes
   </strong></pre>

<hr />

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
