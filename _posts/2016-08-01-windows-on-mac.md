---
layout: post
date: "2023-07-04"
file: "windows-on-mac"
title: "Windows on Apple macOS"
excerpt: "Where to run Windows from a Mac: RDP to EC2, Amazon WorkSpaces, Vagrant, BootCamp, VMWare Fusion, Docker"
tags: [apple, mac, setup, VMWare, Fusion]
image:
# feature: pic gray apple logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14625335/52952250-059f-11e6-84c8-5ae2d289c486.jpg
  credit: Wonderful Engineering
  creditlink: http://cdn.wonderfulengineering.com/wp-content/uploads/2013/11/apple-wallpaper-3.jpg
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/windows-on-apple-mac-osx">This</a> describes several ways to run Microsoft Windows on an Apple MacOS.
Each approach has its own advantages and disadvantages:

* <a href="#Amazon">Amazon EC2 Cloud Images</a> of server machines
* <a href="#WorkSpaces">On an internet browser to Amazon WorkSpaces</a> (virtual Desktop machines)
* <a href="#Docker">Docker Windows instance</a>
* <a href="#Vagrant">Vagrant Virtualbox</a>
* <a href="#BootCamp">BootCamp</a>
* <a href="#VMwareFusion">VMWare Fusion</a>
* <a href="#Parallels">Parallels</a>
<br /><br />

{% include whatever.html %}

<hr />

Access Windows machines by running a [client software that runs Microsoft's Remote Desktop Protocol (RDP)](/rdp/), from within a Windows, MacOS, or Linux machine.

## Apple docs

Apple offers the "Mac OS X - Certified Associate" certification exam on this topic (Mac Integration) on each OSX version. Those who pass get on <a target="_blank" href="https://i7lp.integral7.com/durango/do/pr/prSearch?ownername=apple&channel=apple">Apple's Registry</a>.

<a target="_blank" href="https://training.apple.com/pdf/Mac_Integration_Basics_10.13_Participant_Guide.pdf">Apple has a document</a>
that shows how to:
 Integrate a Mac into a Windows network environment and configure a Mac to work with Active Directory to take advantage of network services, file sharing, printing, instant messaging, email, calendars, and contacts.
Included is security at the user, local-networking, and remote-networking levels.
Migrate data from a Windows computer to a Mac.
Back up data.
Run Windows programs on a Mac. 


<hr />

<a name="Amazon"></a>

#### Amazon EC2 Cloud Images

   <a target="_blank" href="http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html">GUIDE</a>

A <a target="_blank" href="https://secureanycloud.com/">hardened</a> Amazon Machine Image (AMI) containing Visual Studio 2017 Community Edition on Windows Server 2016 <a target="_blank" href="https://aws.amazon.com/marketplace/pp/B06XKP1YWV">costs 28 cents per hour on a t2.medium in the US</a>. 20 cents of that goes pays for <a target="_blank" href="mailto:Support@SecureAnyCloud.com">support</a> from <a target="_blank" href="https://secureanycloud.com/">Cognosys</a>, its creator. 888.489-2723

   Cost per hour increases in a straight line (linear) way for number of CPUs:
   ![ec2-cognosys-vcpu-per-dollar-562x217-54344](https://user-images.githubusercontent.com/300046/30037418-d2ddfd46-9177-11e7-93ad-f376ccca8dc1.jpg)
   <br />
   Cost per hour increases in the same way for amount of Memory (RAM):
   ![ec2-cognosys-mem-per-dollar-562x225-62637](https://user-images.githubusercontent.com/300046/30037332-200f3fd6-9177-11e7-98c2-bd1a76592089.jpg)


   <a target="_blank" href="http://www.ec2instances.info/">ec2instances.info</a> provides a spreadsheet.

   WARNING: On AWS EC2, Windows Server 2016 Nano servers do not support RDP, only Windows PowerShell.

   <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/">A t2.medium has 2 cores and 4 GB</a>.

   PROTIP: With Amazon, you pay for hourly increments. With Google, you pay per minute.

<a target="_blank" href="http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html">Connect to an instance in AWS EC2</a>:

1. Create an Amazon EC2 account at http://aws.amazon.com/ec2/.


<a name="WorkSpaces"></a>

### Client WorkSpaces in AWS cloud

This approach works not just a MacOS laptop, 
but for any computer running a modern browser,
such as <a target="_blank" href="http://docs.aws.amazon.com/workspaces/latest/userguide/amazon-workspaces-chromebook-client.html">
on a Chromebook</a>. No files are transferred, just graphic
images of a screen on servers within the AWS cloud.
This makes for more stringent security, but also mean significant lag that affect productivity.

   * <a target="_blank" href="https://forums.aws.amazon.com/search.jspa?mbtc=iQylnisvlZwOpRpOlSNPnOsymqDNwqQZ&objID=f164&q=workspaces&x=0&y=0">
   Amazon's Workspaces Forum questions</a>
   <br /><br />

1. Use an appropriate AWS IAM account to login to the <strong>WorkSpaces Console</strong> at

   <a target="_blank" href="https://console.aws.amazon.com/workspaces/home">
   https://console.aws.amazon.com/workspaces/home</a>

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/57975600-4238a600-7989-11e9-8834-12f0d42b6c2b.jpg"><img align="right" alt="windows-on-mac-189x434-6552.jpb" width="189" height="434" src="https://user-images.githubusercontent.com/300046/57975600-4238a600-7989-11e9-8834-12f0d42b6c2b.jpg"></a>

1. Select the region.
1. Click "Directories" menu and set up a Directory.
1. Launch. Select the Directory.
1. For the simplest approach, select "Simple AD" Next. Small AWS Managed Microsoft AD".
1. Use a password generator UoyJhssxbcQzrDwT8ciF. Next.
1. Choose VPC and two subnets.
1. Wait for Status to go from "Requested" to "Creating" to "Active".

   ### Launch Workspaces

   An image contains only the OS, software, and settings. A bundle is a combination of both that image and the hardware from which a WorkSpace is launched.

   The Free Tier provides two Standard bundle WorkSpaces for up to 40 hours of combined use per month, for two calendar months, from the time you create your first WorkSpace. Usage time accrues while you’re actively using your WorkSpace as well as the time it takes to stop after a specified period of inactivity, which by default is set to one hour. If you exceed the Free Tier limits, you will be charged the standard Amazon WorkSpaces hourly rate for the additional resources you use. At the end of two calendar months, the WorkSpaces you launched in the Free Tier will automatically be billed at the applicable hourly rate.

   Amazon's regular <a target="_blank" href="https://aws.amazon.com/workspaces/pricing/">
   pricing is $25 to $75 per month per user</a>, which Amazon estimates is 59% less than traditional Virtual Desktop Infrastructures (VDI) from Citrix and VMware.

   Amazon's approach uses newer tech than VDI. 

1. Click "WorkSpaces" in menu.
1. Click blue "Launch WorkSpaces".
1. Select the Directory and Subnets.

   ### Set-up Users

1. Specify for each user his/her Username, First Name, Last Name, and Email for the Bundle selected.

   PROTIP: Use a email as the Username.

1. Click "Create Users".
1. Check the user you want.

   If a new user input was already defined, the form is cleared.

1. Click "Show All Users".
1. Check the user.
1. Click "Next Step".
1. Select Bundle for the OS (with default 80 GB root and 50 GB user volume).
1. Select Running Mode (AlwaysOn or AutoStop hours).
1. Click "Next Step".

1. Click Launch Workspace (for all users). 
1. Wait (about 20 minutes) for the Workspace Console goes from PENDING to AVAILABLE (in green letters). 
1. To refresh the page, type command+R or click the recycle icon.

   ### Amazon WorkSpaces Application Manager (WAM)

1. Switch to return to managed users in the Amazon WorkSpaces Application Manager (WAM) for your current region at:

   <a target="_blank" href="https://us-west-2.console.aws.amazon.com/wam/home">
   https://us-west-2.console.aws.amazon.com/wam/home</a> 

   CAUTION: There is no moving WorkSpaces from one region to another.

   There is a WAM Standard for additional functionality.

   ### Install WorkSpaces client
   
1. In each user's email client, open the welcome email and click the link.
1. Set your WorkSpaces credentials with a password.s
1. Highlight the registration code in the email and copy to your Clipboard.
   
1. Choose the link for your laptop model at <br />
   <a target="_blank" href="http://clients.amazonworkspaces.com/">
   http://clients.amazonworkspaces.com</a> 

1. Click to download the "WorkSpaces.pkg" to your Downloads folder.

   On a MacOS, it's file "WorkSpaces.pkg" (38.2 MB taking 115.3 MB space).

   On a Chromebook, click "ADD TO CHROME" at the upper-right corner.

1. Switch to Finder and click to invoke the installer the Chrome application to enable the proprietary PC over IP (PCoIP) protocol (from Teradici) to compress, encrypt and rapidly transport image pixels between client and server.

1. Double-click on the installer and click Continue and
   finally, Install. Provide your password when requested.

1. Move the installer file (WorkSpaces.pkg) to Trash, to recover disk space.
   
1. Do a Chromebook search to verify that the Amazon WorkSpaces client app icon appears.

1. BLAH: The full graphic streaming virtual desktops tends to eat up much bandwidth. So measure how much you have used before and after sessions.

   Optionally, your company's existing on-premises Active Directory (AD) can be reached by Amazon via an Amazon Virtual Private Cloud (VPC) with a hardware virtual private network (VPN) connection or a dedicated connection with AWS Direct Connect. 

   Once linked up, you use the  AWS Management Console to select the users in your Active Directory who will receive a WorkSpace. 

1. Open the app for the first time.
1. Type your <strong>user name</strong> and password and choose Sign In.
1. Switch to your user's email client and highlight the registration code from the "Your Amazon WorkSpace" email, then paste on the form.
1. Click Register.

   ### Repeat Login

   NOTE: 1Password cannot auto-fill Username and Password on the MacOS WorkSpaces app nor on Chrombook.

1. Login using the Username and password for the WorkSpaces client.

   If your Amazon WorkSpaces administrator has enabled multi-factor authentication for your organization's WorkSpaces, you are prompted for a passcode to complete your login. 

   CAUTION: Only one browser can be used at the same time.
   Amazon logs off a session when another session is started on another computer.

1. If your Amazon WorkSpaces administrator has not disabled the "Remember Me" feature, you are prompted to save your credentials securely so that you can connect to your WorkSpace easily in the future. Your credentials are securely cached while the application is running.

   After the client application connects to your WorkSpace, your WorkSpace desktop is displayed.

1. (Optional) If your WorkSpace uses an AD Connector directory, update the maximum lifetime of the Kerberos ticket by following the steps in Configuring Kerberos Policies in the Microsoft TechNet Library. 

1. If you need to disable the "Remember Me" feature, search for help in the Amazon WorkSpaces forum.

   ### Configure Remote Assistance

1. Open PowerShell window.
1. Install Remote Assistance using this PowerShell command:
  
   <tt><strong>Add-WindowsFeature Remote-Assistance
   <strong></tt>

   Open port 3389 in the firewall and in the Security Group, Remote Desktop should work using the username and password in the traditional way.


   ### Configure Windows 7 Folder Options

0. Click the Windows Start round icon at the bottom left of the screen.
0. Type "folder options" (without the quotes) until the line "Folder Options" appears for you to click at the top of the menu.
0. In the "Folder Options" dialog box, click the "View" tab at the top of the window.
0. Select "Show hidden files, folders, and drives".
0. Click to uncheck the box for "Hide extensions for known file types".
0. Click the "OK" button at the bottom of the dialog box.

   ### Configure Windows 7 Toolbar

0. Click the Windows Start round icon at the bottom left of the screen.
0. Click All Programs, Accessories. All the usual tools are there.
0. Drag Notepad and drop it on the tool bar at the bottom of the screen.

0. Click the Windows PowerShell folder.
0. Drag "Windows PowerShell" and drop it on the tool bar at the bottom of the screen.

0. Open Windows Explorer from the tool bar at the bottom of the screen.
0. Click on "Computer". Notice there is no C: drive and no access to C:\Windows internals.
0. Double-Click on "User Profile D:" drive.

   Notice there are 50 GB for you.

0. Double-Click on D: and navigate into folder Users, your account name.

   PROTIP: Here is the default location when command line windows open by default.
   So place scripts here (among folders).

0. Right-Click Windows PowerShell to select "Run as Administrator".
0. Type:

   <tt><strong>echo $Env:USERPROFILE
   </strong></tt>

   This is your user home folder.

0. Set permissions:

   <tt><strong>set-executionpolicy remotesigned
   </strong></tt>

   <pre>
Execution Policy Change
The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
you to the security risks described in the about_Execution_Policies help topic at
http://go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
[Y] Yes  [N] No  [S] Suspend  [?] Help (default is "Y"): Y
   </pre>

0. Type Y to confirm.
   
   See <a target="_blank" href="https://technet.microsoft.com/en-us/library/bb613481.aspx">
   How to write a PowerShell script</a>


0. Within PowerShell you can also go your home by typing:

   <tt><strong>cd ~
   </strong></tt>

0. Verify whether you can create a PowerShell script file:

   <tt><strong>Add-Content helloworld.ps1 'Write-Host "Hello World"'
   </strong></tt>

   This is the PowerShell equivalent of `echo "Hello World" >helloworld.ps1`.

0. List directory:

   <tt><strong>dir
   </strong></tt>

0. Type the first letter h and press Tab to auto-complete:

   <tt><strong>./helloworld.ps1
   </strong></tt>

   Instead of "Hello World", if you get this, it means executionpolicy was not set correctly:

   <pre>
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
   </pre>


   ### Install posh-git for PowerShell

   TODO:
   file:///C:/Program%20Files%20(x86)/AWS%20Tools/Documentation/AWSToolsForWindows.html 
   AWS Tools for Windows 
   AWS SDK for .NET

0. To exchange files among a group of people, setup:<br />
   <a target="_blank" href="https://amazonworkdocs.com/en/clients">
   https://amazonworkdocs.com/en/clients</a>

   ### Install clients using Chocolatey 

   <a target="_blank" href="https://blogs.technet.microsoft.com/heyscriptingguy/2014/08/23/weekend-scripter-powershell-and-chocolatey/">
   [Find-Package from OneGet included in Windows Management Framework 5.0 Preview gets packages from the Chocolatey installer repository]</a>

0. Right-click on cmd and select "Run as Administrator".
0. Copy <a target="_blank" href="https://chocolatey.org/install#install-with-cmdexe">
   this</a> and right-click in the command window:

   <pre><strong>
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
   </strong></pre>

0. Install <a target="_blank" href="https://chocolatey.org/packages/jdk8">
   Java Development Kit for version 8 using Chocolatey</a>:

   <tt><strong>choco install jdk8 -y
   </strong></tt>

0. Install <a target="_blank" href="https://chocolatey.org/packages?q=chrome">
   Chrome browser</a>:

   <tt><strong>choco install googlechrome -y
   </strong></tt>

0. Install <a target="_blank" href="https://chocolatey.org/packages?q=git">
   Git for Windows</a> client:

   <tt><strong>choco install git -y
   </strong></tt>

   Alternately, to add a Git client manually, open Firefox, search for "Git for Windows". Click Download.
   Click Save file. Click the down arrow for a list of downloads.
   Click to Open File. Run. Yes to UAC. Next all, but Git LFS. then Finish.
   Close Firefox.
   Click Windows icon. All Programs. Click Git, Git Bash.

0. Install <a target="_blank" href="https://chocolatey.org/packages/poshgit">
   Posh Git for PowerShell</a>:

   <tt><strong>choco install poshgit -y
   </strong></tt>

   * Launch each and configure the window properties to enable Quick Edit and set 
   Layout Height (scroll buffer) to 9999 lines.

   https://www.develves.net/blogs/asd/articles/using-git-with-powershell-on-windows-10/#fn:start

   ### Clone Samples 

   Download Git repository containing bootstrap script:

0. Open a Git Bash window.
0. cd to where you add Git repositories:

   <tt><strong>cd gits;<br />
   git clone https://github.com/wilsonmar/loadrunner.git \-\-depth=1<br />
   git clone https://github.com/wilsonmar/git-utilities.git \-\-depth=1
   </strong></tt>


   ### Shut-down and Resume

   BLAH: It takes many minutes to stop and resume.


   ### Custom WorkSpaces

0. As an administrator, in the Console, select the WorkSpace and select "Create Image" to create an image with your applications and settings. 

   NOTE: Custom images created from Amazon WorkSpaces Graphics bundles can only be used with Graphics bundles, and custom images created from Value, Standard, Performance, or Power bundles can only be used with those bundles. Most Amazon WorkSpace images are available within 45 minutes.

   See http://docs.aws.amazon.com/console/workspaces/images


<a name="Docker"></a>

## Docker #

Docker is now a favored approach because it runs the same (unaltered)
[(Dockerized apps)](/dockerize/) on Windows, Mac, and Linux platforms.

Docker provides a transparent interface to operating systems.

* [Docker setup](/docker-setup/)
* [Docker build](/docker-build/)


<a name="Vagrant"></a>

## Vagrant Virtualbox

Vagrant (at <a target="_blank" href="https://www.vagrantup.com/">https://www.vagrantup.com</a>) is from HashiCorp, the same folks who provide Consul and Terraform.

Vagrant provisions complete virtual machines (Unix, Linux, Mac, or Windows) inside the Mac operating system as virtual machines. The VMs are segregated from other processes. This allows you to test software in a variety of environments.


### Install

0. First, <a target="_blank" href="https://wilsonmar.github.io/xcode">Apple XCode needs to be installed</a>.

0. [Install Homebrew](/macos-homebrew/)

0. From within any folder, download, verify, and install Virtualbox (virtualbox.org):

   <tt><strong>brew install Caskroom/cask/virtualbox
   </strong></tt>

   The response at time of writing:

   <pre>
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> Updated Formulae
notmuch                                                        pwntools                                                       todoman
&nbsp;
==> brew install --cask Caskroom/cask/virtualbox 
==> Satisfying dependencies
==> Downloading http://download.virtualbox.org/virtualbox/5.1.26/VirtualBox-5.1.26-117224-OSX.dmg
######################################################################## 100.0%
==> Verifying checksum for Cask virtualbox
==> Installing Cask virtualbox
==> Running installer for virtualbox; your password may be necessary.
==> Package installers may write to any location; options such as --appdir are ignored.
Password:
==> installer: Package name is Oracle VM VirtualBox
==> installer: Upgrading at base path /
==> installer: The upgrade was successful.
🍺  virtualbox was successfully installed!
   </pre>   

0. Download, verify, and install VirtualBox extension pack for your version of virtualbox:

   <tt><strong>brew install Caskroom/cask/virtualbox-extension-pack
   </strong></tt>

   The response at time of writing:

   <pre>
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (caskroom/cask).
No changes to formulae.
&nbsp;
==> brew install --cask Caskroom/cask/virtualbox-extension-pack 
==> Caveats
Installing this Cask means you have AGREED to the
VirtualBox Personal Use and Evaluation License at
&nbsp;
https://www.virtualbox.org/wiki/VirtualBox_PUEL
&nbsp;
==> Satisfying dependencies
All Cask dependencies satisfied.
==> Downloading http://download.virtualbox.org/virtualbox/5.1.26/Oracle_VM_VirtualBox_Extension_Pack-5.1.26-117224.vbox-extpack
######################################################################## 100.0%
==> Verifying checksum for Cask virtualbox-extension-pack
==> Installing Cask virtualbox-extension-pack
==> 0%...
==> 10%...20%...30%...40%...50%...60%...70%...80%...90%...
==> 100%
🍺  virtualbox-extension-pack was successfully installed!
   </pre>

0. Download, verify, and install Vagrant:

   <tt><strong>brew install Caskroom/cask/vagrant
   </strong></tt>

   The response at time of writing:

   <pre>
==> brew install --cask Caskroom/cask/vagrant 
==> Satisfying dependencies
==> Downloading https://releases.hashicorp.com/vagrant/2.0.0/vagrant_2.0.0_x86_64.dmg
######################################################################## 100.0%
==> Verifying checksum for Cask vagrant
==> Installing Cask vagrant
==> Running installer for vagrant; your password may be necessary.
==> Package installers may write to any location; options such as --appdir are ignored.
==> installer: Package name is Vagrant
==> installer: Upgrading at base path /
==> installer: The upgrade was successful.
🍺  vagrant was successfully installed!
   </pre>

0. Download, verify, and install Vagrant-Manager:

   <tt><strong>brew install Caskroom/cask/vagrant-manager
   </strong></tt>

   The response at time of writing:

   <pre>
==> brew install --cask Caskroom/cask/vagrant-manager 
==> Satisfying dependencies
==> Downloading https://github.com/lanayotech/vagrant-manager/releases/download/2.5.4/vagrant-manager-2.5.4.dmg
######################################################################## 100.0%
==> Verifying checksum for Cask vagrant-manager
==> Installing Cask vagrant-manager
==> Moving App 'Vagrant Manager.app' to '/Applications/Vagrant Manager.app'.
🍺  vagrant-manager was successfully installed!
   </pre>


   ### Spin up Ubuntu server

0. Find an image at https://app.vagrantup.com/boxes/search

   PROTIP: Ubuntu is the most popular download, and is recently maintained.

   ubuntu/precise64 20170427.0.0 contains Official Ubuntu Server 12.04 LTS (Precise Pangolin).

0. Make a sandbox directory, cd into it from your Home (~) directory:

   <tt><strong>cd ~ && mkdir vagrant-sandbox && cd vagrant-sandbox
   </strong></tt>

0. Download the Ubuntu image, then initialize (init) the installation inside the sandbox folder (aka make the Vagrantfile). 

   <tt><strong>vagrant box add precise64 http://files.vagrantup.com/precise64.box \-\-force 
   </strong></tt>

   PROTIP: The `--force` parameter specifies overwrite of the file if it already exists. This is since Vagrant downloads before checking anyway.

   This takes several minutes. The intermediate output:

   <pre>
==> box: Box file was not detected as metadata. Adding it directly...
==> box: Adding box 'precise64' (v0) for provider: 
    box: Downloading: http://files.vagrantup.com/precise64.box
    box: Progress: 38% (Rate: 464k/s, Estimated time remaining: 0:07:22)
&nbsp;
==> box: Box download is resuming from prior download progress
==> box: Successfully added box 'precise64' (v0) for 'virtualbox'!
   </pre>

0. PROTIP: Verify the box file downloaded is stored on MacOS and Linux at:

   `~/.vagrant.d/boxes`
   
   On Windows:<br /> 
   `C:/Users/<em>USERNAME</em>/.vagrant.d/boxes`

   ### Windows image
   
   Alternately, create a <strong>Windows 10</strong> sandbox:

   <tt><strong>vagrant box add windows? http://files.vagrantup.com/windows?.box
   </strong></tt>

   This takes several minutes.


   ### Configure same subnet

   PROTIP: Machines talk with each other only if they are on the same network subnet.

0. In Virtualbox, click Settings, Networking, click the Adapter with the "Host-only Adapter".
0. Select the name "vboxnet1".
0. Click on the icon at the right to create a new entry.
0. Specify a private network address such as `192.168.57.1`, with a subnet mask of `255.255.255.0`.

0. Initialize

   A Vagrant environment or target machine is required to run the vagrant up command. Run `vagrant init` to create a new Vagrant environment. Or, get an ID of a target machine from `vagrant global-status` to run this command on. A final option is to change to a directory with a Vagrantfile and to try again.
   
   <tt><strong>vagrant init precise64
   </strong></tt>

   The response in the command line:

   <tt>
   A `Vagrantfile` has been placed in this directory. You are now ready to `vagrant up` your first virtual environment! Please read the comments in the Vagrantfile as well as documentation on `vagrantup.com` for more information on using Vagrant.
   </tt>

   This creates a `.vagrant` hidden folder.

   This creates a `Vagrantfile`. All such files begin with these two lines:

   <pre>
# -*- mode: ruby -*-
# vi: set ft=ruby :
   </pre>

   Generated:

    <pre>   
# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
    </pre>   

    The minimal specification for `vagrant up` to instantiate a single Ubuntu box:

    <pre>
Vagrant.configure("2") do |config|
    config vm.box = "hashicorp/precise64"    
end
    </pre>   

   Vagrant obtains the image from<br />
   <a target="_blank" href="https://app.vagrantup.com/hashicorp/boxes/precise64">
   https://app.vagrantup.com/hashicorp/boxes/precise64</a>

   Several server instances can be defined within the same Vagrantfile.

    <pre>
  config.vm.define "webserver01" do |web01|
    web01.vm.box = "jptoto/Windows2012R2"
    web01.vm.hostname = "windows-webserver01"
    web01.vm.communicator = "winrm"
    web01.winrm.username = "vagrant"
    web01.winrm.password = "vagrant"
    web01.vm.network "private_network", ip: "192.168.57.3"
    web01.vm.provider "virtualbox" do |vb|
      vb.memory = 2048
      vb.cpus = 2
    end
  end
    </pre>

   Vagrant obtains the image for `web01.vm.box = "jptoto/Windows2012R2"` from<br />
   <a target="_blank" href="https://app.vagrantup.com/jptoto/boxes/Windows2012R2">
   https://app.vagrantup.com/jptoto/boxes/Windows2012R2</a>

   Also: http://www.vagrantbox.es/

   CAUTION: Unlike Linux machines which requires no new license code every 90 days, Microsoft insists that a new image be re-created every 90 days. Painful.

   Thus the need for Packer template provisioning scripts to create Windows server images.


   ### Packer Templates

0. Install Packer from HashiCorp. On a Mac <a target="_blank" href="http://brewformulas.org/Packer">use Homebrew</a> even though <a target="_blank" href="https://www.packer.io/docs/install/index.html">HashiCorp shows compiling</a>:

   <tt><strong>brew install packer
   </strong></tt>

   Alternatively, on Windows: choco install packer

0. Verify you can run the command without parameters (no PATH problems):

   <tt><strong>packer
   </strong></tt>

   The response:

   <pre>
Usage: packer [--version] [--help] <command> [&LT;args>]
&nbsp;
Available commands are:
    build       build image(s) from template
    fix         fixes templates from old versions of packer
    inspect     see components of a template
    push        push a template and supporting files to a Packer build service
    validate    check that a template is valid
    version     Prints the Packer version
   </pre>   

0. Packer templates

   A Packer template simplifies the creation of minimally-sized, fully patched Windows Vagrant boxes.

   More importantly, it's used to achieve <strong>immutable</strong> server configurations.

   <a target="_blank" href="https://github.com/mwrock/packer-templates">
   Matt Wrock covers it in detail</a> in his Nano Server template.

   See http://blog.traintracks.io/building-a-devbox-with-packer-vagrant-and-ansible-2/
   

   ### Virtualbox

   "Think of Vagrant as a scripting engine for VirtualBox."

   <a target="_blank" href="https://web.archive.org/web/20160412063608/http://www.agilesysadmin.net/imaging-or-configuration-management" title="Stephen Nelson-Smith's How to Build 100 Web Servers in a Day April 12, 2016">PROTIP</a>: The ideal strategy for scaling deployments is a judicious combination of both an automation pattern and "Golden Image" approaches. Start with a "DNA stem cell" image containing an approved base build, security fixes, and settings which don't often change. Use provisioning tools such as Kickstart and Cobbler. Then customize using Ansible, Puppet, or Chef to create a golden image for production.


   ### Local Vagrant Global Status

0. List Vagrant instances from any directory:

   <tt><strong>vagrant global-status
   </strong></tt>

   A sample response can include directories that have been deleted:

   <pre>
id       name    provider   state   directory                                                 
----------------------------------------------------------------------------------------------
0cf0a57  acs     virtualbox saved   /Users/mac/gits/ansible                          
&nbsp; 
The above shows information about all known Vagrant environments
on this machine. This data is cached and may not be completely
up-to-date. To interact with any of the machines, you can go to
that directory and run Vagrant, or you can use the ID directly
with Vagrant commands from any directory. For example:
"vagrant destroy 1a2b3c4d"
   </pre>

   For example, the sample instance named "acs" (Ansible Control Server) would contain files like these:

   ![ansible-files-244x215-31570](https://user-images.githubusercontent.com/300046/30340308-52ad0e58-97af-11e7-903f-4af9e67cd6ce.jpg)

   PROTIP: Such folders defined need to be deleted or they take up space and cycles.

   Deleted .vagrant dir deleted from the filesystem still show as running, to remove:

   <tt><strong>vagrant global-status \-\-prune
   </strong></tt>


   ### Vagrant up

0. Within the folder containing the Vagrantfile, start the server via Vagrant:

   <tt><strong>vagrant up
   </strong></tt>

   <pre>
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Box 'base' could not be found. Attempting to find and install...
    default: Box Provider: virtualbox
    default: Box Version: >= 0
==> default: Box file was not detected as metadata. Adding it directly...
==> default: Adding box 'base' (v0) for provider: virtualbox
    default: Downloading: base
An error occurred while downloading the remote file. The error
message, if any, is reproduced below. Please fix this error and try
again.
&nbsp;
Couldn't open file /Users/mac/vagrant-ubuntu-sandbox/base
   </pre>

   PROTIP: `vagrant destroy` removes Vagrant VMs are stored in<br />
   <tt>\Users\<em>username</em>\"VirtualBox VMs"</tt>

   If you see an error message `VBoxManage list hdds`
   <pre>vagrant up --provider vmware_fusion</pre>

   https://www.virtualbox.org/manual/ch08.html

0. Login to the new server via SSH (Secure Shell):

   <tt><strong>vagrant ssh
   </strong></tt>

0. Change what you like. Mess it up if you care to. 

0. Logout once done poking around:

   <tt><strong>exit
   </strong></tt>

0. Destroy the virtual server instance defined on the current directory:

   <tt><strong>vagrant destroy
   </strong></tt>

0. View your processes:

   <tt><strong>ps -al
   </strong></tt>


   ### Configuration

   The vagrant virtual servers are configured with a single file (called a "Vagrantfile") started with a single command (vagrant up), are contained within a single folder, and can be destroyed with a single command (vagrant destroy). 




Blogs about this topic:

* https://gist.github.com/tbonesteaks/000dc2d0584f30013913
* http://sourabhbajaj.com/mac-setup/Vagrant/README.html
* https://varyingvagrantvagrants.org/ is an open source Vagrant configuration focused on WordPress development.

<a id="BootCamp"></a>

## Boot Camp on Mac #

Apple came up with it, at <a target="_blank" href="https://support.apple.com/en-us/HT201468">
https://support.apple.com/en-us/HT201468</a>
says the installer is in the <strong>Utilities folder inside the Applications folder</strong>.

This is called a "split brain" approach. The hassle with this are that:

* a repartition of your startup disk to create a Windows partition is necessary.
   You install Windows in the Windows partition.

* <strong>switching requires a reboot</strong>.

See https://support.apple.com/en-us/HT201468



## Parallels

<a target="_blank" href="http://www.parallels.com/products/desktop">Parallels</a>

<a target="_blank" href="http://kb.parallels.com/en/112941">
Parallels Boot Camp Guide</a> and
<a target="_blank" href="http://kb.parallels.com/en/112091"> Guidelines</a>

<a target="_blank" href="https://stormpath.com/blog/ultimate-guide-to-using-visual-studio-on-a-mac">One blogger</a> combined
both: installing Windows into a Boot Camp partition first, and then turned that partition into an active Parallels virtual machine. This way, I have the option of using Windows in the virtual machine, or restarting to run Windows natively at full speed.  But he hasn’t needed to boot directly to Windows.

You can’t pause the virtual machine or save it to a snapshot. A non-Boot Camp virtual machine doesn’t have these limitations.

Virtual machine settings: 
    2 virtual CPUs
    4096MB system memory
    256MB graphics memory

Parallels options:

    * Optimization: Faster virtual machine, Adaptive hypervisor, Tune Windows for speed all turned on.
    * Sharing: Shared cloud, SmartMount, and Access Windows folders from Mac turned off, as I didn’t need these for my workflow.

Parallels’ Coherence presentation mode shows Windows apps side-by-side with OS X is good for copy and paste. But this slows performance.

PROTIP: Use two monitors. Have Windows full-screen on an external Thunderbolt display, and OS X on the laptop screen. Then swipe the Magic Mouse to switch desktops.

Fix a few annoyances and performance drains:

https://www.youtube.com/watch?v=gfjFJ-v_h2s
Web Development in Visual Studio 2017

* Function keys. If you’re using the Mac keyboard, you’ll want to change the function key behavior so the F1-F12 keys work correctly in Visual Studio. From System Preferences – Keyboard, make sure Use all F1, F2, etc. keys as standard function keys is checked. With this turned on, hold Fn to use the Mac functions (brightness, volume, etc.) on F1-F12. With an external non-Mac keyboard, this isn’t an issue.

* Disable Windows visual effects. I turned off most of the Windows desktop manager visual effects by going to Control Panel – System and Security – Advanced system settings – Advanced – Performance – Settings – Visual Effects and choosing Adjust for best performance. However, I left Smooth edges of screen fonts checked because it improves text rendering on my monitor.

Through trial and error, I found a number of things that could be disabled to improve performance. You may not want to make all of the changes I did, so pick and choose your own list of tweaks:

    Disable hardware-accelerated rendering. Unchecking Automatically adjust visual experience based on client performance, Enable rich client visual experience, and Use hardware graphics acceleration if available via Options – Environment made the UI feel much more responsive on my machine.

    Start up to an empty environment. Starting up Visual Studio for the first time feels a lot snappier if you skip the default news page on startup. Select Empty environment under Options – Environment – Startup – At startup.

    Remove unused extensions. Visual Studio ships with a number of extensions that you may not need. From Tools – Extensions and Updates – Installed, remove any extensions you aren’t actively using (you can always reinstall them later). I got rid of six extensions I didn’t need.

    Disable extra debugging features. I turned off both Enable Diagnostic Tools while debugging and Show elapsed time PerfTip while debugging in Options – Debugging – General. I wasn’t using these debugging features, and debugging felt snappier after I disabled them.

    Turn off the Navigation Bar. I found the code editor Navigation Bar to be unnecessary if the Solution Explorer is open. I disabled it via Options – Text Editor – All Languages – Navigation Bar.

    Disable CodeLens. CodeLens is a cool feature for collaboration, but it’s not part of my current workflow. I got rid of the CPU overhead by turning it off via Options – Text Editor – All
    Languages – CodeLens – Enable CodeLens.

    Turn off Track Changes. When a file is open in the code editor, Visual Studio will represent recent changes by displaying small regions of green or yellow on the scroll bar. If you can live without this, turn off Track changes via Options – Text Editor – General for a small performance boost.

    Turn off Track Active Item. Squeeze out a little bit more UI performance out by ensuring Track Active Item in Solution Explorer is unchecked under Options – Projects and Solutions – General.


<a id="VMwareFusion"></a>

## VMware Fusion #

VMware Fusion enables you to experiment with setups on a fresh instance of Windows.

With VMWare Fusion, you can quickly switch among macOS, Windows, or Linux on a MacOSX machine.

   Unlike ___, you don't need to reboot to switch.

1. The marketing page for VMWare's Fusion is at:

   <a target="_blank" href="https://www.vmware.com/products/fusion.html">https://www.vmware.com/products/fusion.html</a>

   The Pro edition costs $395 if you need to share images.

1. PROTIP: VMware Fusion currently supports macOS 12 Monterey or 13 Ventura but NOT 14.

   That's why I keep an older 2017 MacBook Pro around for this.


   ### Precautions Before

1. Buy a USB drive and take a full backup of your whole laptop so you can fall back.

1. So you'll have enough disk space for the GB-large VMware image files (at least 10 GB free), move other unneeded files to a cloud or USB drive.

   
   ### Remove previous VMware Fusion

1. Press command+Tab to switch to the Finder. Navigate to folder "/Applications".
1. If "VMware Fusion.app" is there, right-click on it and select "Move to Trash".

   HISTORICAL NOTE: VMware Fusion 7 worked great. But when I upgraded my Mac to Yosemite, 
   VMware Support was not able to figure it out until <a target="_blank" href="https://unix.stackexchange.com/questions/169623/yosemite-fusion-7-0-1-now-gets-could-not-open-dev-vmmon-no-such-file-or-dir">Some</a> found that uninstalling Vagrant fixed the problem. 


   ### Installing Fusion

   I prefer using package managers so that I can uninstall with a single command.
   Homebrew automatically verifies download files so I don't have to do it manually.

0. Install Homebrew. See [my instructions](/macos-homebrew/)
0. Install a Git client.
0. ssh.exe (like putty for Windows).

1. Get information about it on Homebrew:

   <pre><strong>brew info vmware-fusion</strong></pre>

   <pre>==> vmware-fusion: 13.0.2,21581413 (auto_updates)
https://www.vmware.com/products/fusion.html
Not installed
From: https://github.com/Homebrew/homebrew-cask/blob/HEAD/Casks/vmware-fusion.rb
==> Name
VMware Fusion
==> Description
Create, manage, and run virtual machines
==> Artifacts
VMware Fusion.app (App)
==> Analytics
install: 211 (30 days), 212 (90 days), 212 (365 days)
   </pre>

1. Install the latest version of VMWare Fusion:

   <pre><strong>brew install --cask vmware-fusion</strong></pre>

   <pre>==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-cask/8ed7aa4
Already downloaded: /Users/johndoe/Library/Caches/Homebrew/downloads/8976eded57c3c79fed520419d49c675949e67141d74647dabebc34a6ad75112b--vmware-fusion.rb
==> Downloading https://download3.vmware.com/software/FUS-1302/VMware-Fusion-13.
Already downloaded: /Users/johndoe/Library/Caches/Homebrew/downloads/86f7c23de61d4ee020bb5e7754695769322424164acff8ab281a4b3347e53f84--VMware-Fusion-13.0.2-21581413_universal.dmg
==> Installing Cask vmware-fusion
==> Moving App 'VMware Fusion.app' to '/Users/johndoe/Applications/VMware Fusi
==> Linking Binary 'vmnet-cfgcli' to '/usr/local/bin/vmnet-cfgcli'
==> Linking Binary 'vmnet-cli' to '/usr/local/bin/vmnet-cli'
==> Linking Binary 'vmnet-dhcpd' to '/usr/local/bin/vmnet-dhcpd'
==> Linking Binary 'vmnet-natd' to '/usr/local/bin/vmnet-natd'
==> Linking Binary 'vmnet-netifup' to '/usr/local/bin/vmnet-netifup'
==> Linking Binary 'vmnet-sniffer' to '/usr/local/bin/vmnet-sniffer'
==> Linking Binary 'vmrest' to '/usr/local/bin/vmrest'
==> Linking Binary 'vmrun' to '/usr/local/bin/vmrun'
==> Linking Binary 'vmss2core' to '/usr/local/bin/vmss2core'
==> Linking Binary 'ovftool' to '/usr/local/bin/ovftool'
==> Linking Binary 'vmware-aewp' to '/usr/local/bin/vmware-aewp'
==> Linking Binary 'vmware-authd' to '/usr/local/bin/vmware-authd'
==> Linking Binary 'vmware-id' to '/usr/local/bin/vmware-id'
==> Linking Binary 'vmware-ntfs' to '/usr/local/bin/vmware-ntfs'
==> Linking Binary 'vmware-rawdiskAuthTool' to '/usr/local/bin/vmware-rawdiskAut
==> Linking Binary 'vmware-rawdiskCreator' to '/usr/local/bin/vmware-rawdiskCrea
==> Linking Binary 'vmware-remotemks' to '/usr/local/bin/vmware-remotemks'
==> Linking Binary 'vmware-usbarbitrator' to '/usr/local/bin/vmware-usbarbitrato
==> Linking Binary 'vmware-vdiskmanager' to '/usr/local/bin/vmware-vdiskmanager'
==> Linking Binary 'vmware-vmdkserver' to '/usr/local/bin/vmware-vmdkserver'
==> Linking Binary 'vmware-vmx' to '/usr/local/bin/vmware-vmx'
==> Linking Binary 'vmware-vmx-debug' to '/usr/local/bin/vmware-vmx-debug'
==> Linking Binary 'vmware-vmx-stats' to '/usr/local/bin/vmware-vmx-stats'
==> Linking Binary 'vmware-cloneBootCamp' to '/usr/local/bin/vmware-cloneBootCam
==> Linking Binary 'vctl' to '/usr/local/bin/vctl'
==> Linking Binary 'vmnet-bridge' to '/usr/local/bin/vmnet-bridge'
🍺  vmware-fusion was successfully installed!
   </pre>


Skip to <a href="#ConfigVFusion">Configure Fusion</a> if you want to, instead of above, install using the manual alternate:

1. Visit the VMware Fusion installer (not the Pro edition) at:

   <a target="_blank" href="https://www.vmware.com/products/fusion/fusion-evaluation.html">https://www.vmware.com/products/fusion/fusion-evaluation.html</a>

1. Register for a "Personal Use License". Create an account if you don't already have one.

1. Click "Register Here". Fill out the info. Click "START FREE TRIAL".
1. Highlight and copy the LICENSE KEY and save it in 1Password.

   * VMware Fusion 13.0.2 (for Intel-based and Apple silicon Macs) 2023-04-25 13.0.2 672.09 MB dmg 
   * VMware-Fusion-11.1.0-13668589.dmg was 520.1 MB
   * VMware-Fusion-8.5.8-5824040.dmg was 467 MB
   <br /><br />

   NOTE: I've been using VMWare Fusion since its version 6 in 2016.

   <a target="_blank" href="https://kb.vmware.com/s/article/2109701">PROTIP</a>: The default location of virtual machine images changed in Fusion 11.x "$HOME/VirtualMachines⁩" from "$HOME/Documents/VirtualMachines" in Fusion 8.x and 10.x.

1. Click "Manually Download".
1. Verify whether the file you downloaded is what the developers intended to store on the website:

   1. Press command+Tab to switch to a Terminal window. 

   1. List the file name of the .dmg file you downloaded into the Downloads folder:

   <ul><pre><strong>ls $HOME/Downloads/VM*</strong></ul>

   You should see something like:

   <ul><pre>/Users/johndoe/Downloads/VMware-Fusion-13.0.2-21581413_universal.dmg</pre></ul>

   1. Highlight the file name and press command+C to copy that path into your hidden Clipboard:

   1. Construct a command such as:
   
   <ul><pre><strong>shasum -a 256 VMware-Fusion-13.0.2-21581413_universal.dmg</strong><br />
   It should return a line such as this:
   c86b40823b97334f20b4e6b475b488ec23faf06c986e291965b9e56f7b44c042  VMware-Fusion-13.0.2-21581413_universal.dmg
   </ul>

   1. If the hash value generated is NOT the same as what the website shows, try downloading again. If it's still different, create a support ticket.

1. At the VMWare webpage, press command+W to close that tab.

1. In the Terminal, remove the VMWare installer: Double-click on the file name to copy it. Construct a command:

   <pre><strong>rm VMware-Fusion-13.0.2-21581413_universal.dmg</strong></pre>


<a name="ConfigVFusion"></a>

### Configure Ways to Invoke VMware Fusion

Enable Fusion to be opened different ways:

1. Configure your aliases setup file with this:

   <pre>alias vfusion='open -a "/Applications/VMware Fusion.app"'</pre>

   That enables you to invoke VMware Fusion from the command line.

   1. I click "Don't Allow" to the pop-up "VMware Fusion.app" would like to access the microphone.

   1. Click to dismiss the "Background Items Added" message appear on the upper right corner.
   1. Click "OK" to the "Legacy System Extension" message.

   1. Type <strong>vfusion</strong> in the Terminal

1. To make Fusion available from the Apple Dock, on the Touchpad pinch 4 fingers together and drag the app icon to drop it in the mac's Dock.

1. Press command+Tab to switch to the Finder. Navigate to folder "/Applications". Click "VMware Fusion.app".

   ### First-time steps

1. The first time a new version opens, click "Open" to "VMware Fusion.app" is an app downloaded from the Internet.
1. Click Agree.
1. <strong>Type</strong> the License Key into the dialog. PROTIP: I was not able to paste the License Key.
1. Click "Done" to dismiss the installer.
1. Click "OK" to access Accessibility.

1. Mouse up to select "VMware Fusion", Settings.
1. "When closing a virtual machine": choose "Power off the virtual machine".
1. Check "Enable keyboard shortcut".
1. Click the "x" to exit.

   ### VMware Fusion files



0. In Finder, on the left pane, scroll to the "Locations" section to click the exit icon to the right of "VMware Fusion".




1. When done, open /Applications folder, sort by Name, and scroll to see "VMWare Fusion.app".

   PROTIP: Apps in the /Applications folder are sorted by the date when the app was created, not when it was installed on your laptop.

1. Click OK to "System Extention Blocked".
1. Click Agree to Terms & Conditions.
1. Copy the License key and paste in the form. Continue.
1. You'll be asked to enter your password again. Then "Done".
1. Click OK to "VMWare Fusion.app" wants access to control "System Events.app".
1. Click "Allow" or "Don't Allow" to "VMware Fusion" Notifications. You can change it later.
1. Open <strong>System Preferences → Security & Privacy → General</strong>

   vmware-fusion requires a kernel extension to work. If the installation fails, retry after you enable it in:

1. Click "Allow" to "System software from developer "VMWare Inc." was blocked<br />
   from loading.
1. Click the lock to block further changes on that form.
1. Click "Cancel" at the "Select the Installation Method" screen because you'll see it again.
1. To open the app, on the Touchpad squeeze four fingers together and use two fingers to scroll. Click "VMWare Fusion".

   ### Get Windows image

1. See my article <a target="_blank" href="https://wilsonmar.github.io/packer/">Packer from HashiCorp within macOS</a> to create an ISO image of Windows with a license for the Windows operating system.


   ### Troubleshooting

   My Fusion instance has been more stable that my Windows PC laptop.
   
   <a target="_blank" href="https://apple.stackexchange.com/questions/155109/vmware-fusion-could-not-open-dev-vmmon-error">Others</a> suggested:

   <tt><strong>sudo kextunload -b com.intel.kext.intelhaxm
   </strong></tt>

   * <a target="_blank" href="http://www.souldevteam.net/blog/2013/10/06/os-x-mavericks-10-9-retail-vmware-image-release-notes-links/">
   Run OSX in VMware within Windows</a>

   * http://www.tekrevue.com/os-x/

   * <a target="_blank" href="http://www.souldevteam.net/blog/2013/10/06/os-x-mavericks-10-9-retail-vmware-image-release-notes-links/">
   Run OSX in VMware within Windows</a>

   * <a target="_blank" href="https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1001934">
   Defragmenting, shrinking, and cleaning up VMware Fusion virtual machine disks</a>
   <br /><br />

   ### Keyboard

   To press the Windows key, press the command key.

   To press F keys (F2, etc.), hold down the fn key and press F2, etc.
   at the top row.

   ### Settings

   Several topics below refer to use of VMWare Tools installed from inside Windows.

   You need to be on a single-screen 
   to obtain the VMWare Machine menu at the top by moving the mouse there.

   0. Click Sharing.
   0. Use the square + and - icons at the lower right.

   PROTIP: Do not mirror a folder. It may take too much space.

   ### Shared Folder

   This uses VMWare Tools installed from inside Windows.

0. Virtual Machine > Settings > Sharing

   PROTIP: After unzip, delete the zip file to keep disk usage low.


   ### Delete Snapshots #

   VMWare Fusion automatically takes snapshots as a fall-back.

   But they take up room.

   In the list of Virtual Machines available, the amount of room taken by snapshots is listed.

   To establish a particular state of an instance as the <strong>base</strong> for another image, it's best to remove the snapshots.

0. Shut down the virtual machine.
0. Make a complete backup to anotther USB device.
0. Go to Virtual Machine menu Snapshots. ...
0. Select one or more snapshots to delete by holding down Shift when clicking.
0. Click the Delete icon.
0. Watch the progress bar at the bottom. This takes several minutes.



<hr />

## USB Drive Formats

Windows and Macs can both read older FAT32-formatted drives. But...

   * FAT32 has a 4GB size limit per file, so it isn't ideal for video files. 
   * FAT32 also has 32 GB limit for drives, not the 2 TB external drives.
   <br /><br />

Most external USB drives today (TB size) are sold formatted in <strong>NTFS</strong> for Windows , which Mac can read but not write to.

Windows computers can't even read Mac-formatted HFS+ drives. 

<strong>exFAT</strong> has a theoritical limit of 16 Exa-bytes. 64 ZB (512 TB recommended max).
Format the USB drive in "exFAT" format and it can be read by both Windows and Mac (except for Leopard version of Macs, which few Mac users have anymore). <a target="_blank" href="http://superuser.com/questions/257646/why-should-i-use-exfat-over-ntfs-on-removable-media">This blog</a> says it's faster than NTFS.

To format extFAT on a Mac UI:

1. Connect the drive to the Mac.
2. Open Disk Utility: hit command and spacebar at the same time for Spotlight search, then type in Disk Utility to find the program.
3. Select the USB drive you want to format. (The lowest level with an eject icon under an "External").
4. Click Erase.
5. Give the partition a name and select exFAT for the format.
6. Click Erase again.

If you get an error message "Erase process has failed", open a Terminal to use commands:

0. Get the disk id from:

   <pre>
diskutil list
   </pre>

0. unmount using the disk ID from above:

   <pre>
diskutil unmountDisk force disk3
   </pre>

   The response is

   Forced unmount of all volumes on disk3 was successful

0. Write zeros

   <pre>sudo dd if=/dev/zero of=/dev/disk3 bs=1024 count=1024
   </pre>

   The response:

   <pre>1024+0 records in
1024+0 records out
1048576 bytes transferred in 1.889696 secs (554891 bytes/sec)
   </pre>   

0. Partition it again in "MBR" partition scheme for use with Windows machines:

   <pre><strong>diskutil partitionDisk disk3 1 MBR exfat MyDisk 100%</strong></pre>

   "Error creating partition map: The disk is too large to be supported by the given partition scheme (-69659)"

   Windows 7 doesn't like the UUID partition scheme. Reformat as MBR in OSX for Win7

   This is why if you format exFAT on a Mac, it won't read on a PC.
   But if you format exFAT on a PC, the it will work on both.

   Alternately, to partition it in "Mac OS Extended (Journaled)" format
   so a Mac can boot from it:

   <pre><strong>diskutil partitionDisk disk3 GPT JHFS+ "My External HD" 0g</strong></pre>

   See <a target="_blank" href="http://www.theinstructional.com/guides/disk-management-from-the-command-line-part-2">this</a>

   The response:

   <pre>Started partitioning on disk3
Unmounting disk
Creating the partition map
Waiting for partitions to activate
Formatting disk3s2 as Mac OS Extended (Journaled) with name My External HD
Initialized /dev/rdisk3s2 as a 3 TB case-insensitive HFS Plus volume with a 229376k journal
Mounting disk
Finished partitioning on disk3
/dev/disk3 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *3.0 TB     disk3
   1:                        EFI EFI                     209.7 MB   disk3s1
   2:                  Apple_HFS My External HD          3.0 TB     disk3s2
   </pre>

0. Repeat the steps above for ExFAT.

0. Click on the Partition tab in the DU main window.
 
3. Under the Volume Scheme heading set the number of partitions from the drop down menu to one. 
Click on the Options button, set the partition scheme to MBR then click on the OK button. 
Set the format type to MSDOS (FAT32.) Click on the Partition button and wait until the process has completed.

   See https://support.apple.com/kb/PH22240?locale=en_US

   Alternately:

0. brew install e2fsprogs
0. figure out the name of your partition or drive using diskutil list -- in my case, my partition had was on disk2 and had the identifier of disk3s2

0. ?

   sudo $(brew --prefix e2fsprogs)/sbin/mkfs.ext3 /dev/disk3s2 

   but you may need to change the drive from disk2s1 to the partition or drive that you want to format. This command will ask you to verify the name of the partition, just to be sure :)


## Format ExFAT on Windows OS

1. Open up Windows Explorer and right-click on your drive in the sidebar. Choose "Format".
2. In the "File System" dropdown, choose exFAT instead of NTFS.
3. Click Start and close this window when finished.

https://osxfuse.github.io/
(file system in user space) 

https://unetbootin.github.io/
loads Linux ISO images to USB drives



### Defrag Windows

SSD drives should not be defragmented.

Only traditional spinning disks need to be defragmented,
to relocate where bits are stored so contiguously blocks
are available.

0. Before doing this, make a full backup to a USB external drive.
0. You'll need to use an Admin account.
0. Click the Start button. 
0. Type Disk and select Disk Defragmenter (rather than going through menu All Programs, Accessories, Choose System Tools).
0. Hit Analyze or Defragment Now.
0. This takes a while, possibly even hours, to run.
0. The PC can be used throughout the process, but it's not advisable.




## Configuration

It's a good thing the classic Control Panel is still in Windows 10.

The Color Picker in the classic Control Panel is nested under "Appearance and Personalization", "Personalization", 
then "Color and Appearance."

The classic Control Panel enables you to create nearly any color you want for the accent color,
even though Windows 10 Personalization page of the Settings app
provides only a limited palette of 48 colors to choose from.


## Fink

   <a target="_blank" href="http://www.simplehelp.net/2007/05/09/how-to-install-linux-applications-in-os-x-a-complete-walkthrough/">
   Back in 2007</a>
   <a target="_blank" href="http://www.finkproject.org/download/">
   Fink</a> was recommended. It is a package manager like Homebrew and MacPorts.
   Fink is Apt-based, so people will feel right at home coming from a <strong>Debian</strong> Linux environment.
   Its packages are binary,so no long compile times. But practically they are usually outdated and I had to compile stuff for my system anyway.
   It needs X11 installed.

## Windows Edge Browser

Here's a way to get a bit of Microsoft on your Mac - the Edge browser,
now built on Google Chrome.

1. <a target="_blank" href="https://www.microsoftedgeinsider.com/en-us/download?platform=macos">Download Beta, Dev, and Canary Channel Insider builds of the Microsoft Edge for your Mac from Microsof'ts Insider website at https://www.microsoftedgeinsider.com/en-us/download?platform=macos</a>

   It's 126,040,696 bytes (130.3 MB on disk)

2. In Finder, double-click file `MicrosoftEdgeCanary-76.0.176.0.pkg`
3. In the pop-up, click "Continue", then "Install".
4. Provide Password. 
5. Close, then Delete the installer file.
6. Click "Start from Scratch".
7. Click "Focused", then "Done".
8. Look for the program in /Applications as "Microsoft Edge Canary.app".
9. Drag the app's icon to your Dock bar for easy access.
10. See https://www.microsoftedgeinsider.com/en-us/welcome?channel=canary&version=76.0.176.0
11. On Twitter, follow <a target="_blank" href="https://twitter.com/msedgedev">@msedgedev</a> and <a target="_blank" href="https://twitter.com/MicrosoftEdge">@MicrosoftEdge</a> for videos that says Edge can recognize handwriting from a stylus. Save to Microsoft's OneNote.


## References

* <a target="_blank" href="https://www.howtogeek.com/187359/5-ways-to-run-windows-software-on-a-mac/">5 ways to run windows software on a Mac</a>

* <a target="_blank" href="https://www.pcmag.com/news/how-to-run-windows-on-a-mac">How to run Windows on a Mac</a>


## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
