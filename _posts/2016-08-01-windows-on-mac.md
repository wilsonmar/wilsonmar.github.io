---
layout: post
date: "2023-12-14"
file: "windows-on-mac"
title: "Windows and Linux on Apple hardware"
excerpt: "Triple-boot to run Windows and Ubuntu and other Linux on a Mac: Vagrant, BootCamp, VMWare Fusion, etc."
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

Apple no longer provides updates to hardware with <strong>Intel x86 chips</strong> (such as my Quad-Core Intel Core i7) beyond their <strong>Ventura 13.6.1</strong> macOS release. My Early 2013 MacBook Pro is forever stuck at macOS 10.13.6 High Sierra.

So a great use for hardware "obsoleted" by Apple is to convert them to <strong>run Linux and Windows</strong> operating systems, which were built on Intel "x86" chips.
<a target="_blank" href="https://www.youtube.com/watch?v=X0DIHlnD_S0">VIDEO: Why Apple macs are good</a>. <a target="_blank" href="https://www.youtube.com/watch?v=0T38XIzusFc">VIDEO</a>

This article describes several ways to run Microsoft Windows on an Apple MacOS.
Each approach has its own advantages and disadvantages:

* <a href="#Vagrant">Vagrant Virtualbox</a>
* <a href="#BootCamp">BootCamp</a>
* <a href="#VMwareFusion">VMWare Fusion</a>
* <a href="#Parallels">Parallels</a>
<br /><br />

{% include whatever.html %}

<hr />

## Apple skills

To gain user skills on macOS, use the <a target="_blank" href="https://www.youtube.com/@applesupport/search?query=macos">Apple Support channel on YouTube</a> and <a target="_blank" href="https://support.apple.com/guide/mac-help/welcome/mac">macOS User Guide</a>.

Apple has a <a target="_blank" href="https://support.apple.com/en-lamr/aasp-program">Apple Authorized Service Provider (AASP) Program</a> for companies who repair Apple products using genuine Apple parts, tools, training, service guides, diagnostics and resources.

https://www.wikiwand.com/en/Apple_certification_programs

<a target="_blank" href="https://support.apple.com/en-us/HT205332">AppleCare service certifications</a> are for technicians who work at or want to work at Apple-authorized service facilities. Access the Apple Technical Learning Administration System (ATLAS) is AppleCare Service Training's website for online training and other learning resources. Use ATLAS to prepare for the certifications required to service Apple products.

<a target="_blank" href="https://www.youtube.com/watch?v=G2qnXieYuw4">VIDEO</a>: Apple-Authorized Training providers offer a 4-day $2,800 <a target="_blank" href="https://www.thenewit.com/go-apple-technician-training/apple-certified-mac-technician">Apple Certified Mac Technician (ACMT)</a> who take the ACMT Mac Service Certification exam on the 4th day. They also offer a <a target="_blank" href="https://www.youtube.com/watch?v=ZyHpSESFzEY">$250 Apple Certified Support Professional (ACSP)</a> exam prep course on macOS core functionality and that you can configure key services, perform basic troubleshooting, and support multiple Mac users. 

https://www.credly.com/organizations/apple/badges list these certifications issued by Apple:
As of Dec 2023, <a target="_blank" href="https://www.credly.com/organizations/apple/directory">3,355 passed</a> one or more of these <a target="_blank" href="https://training.apple.com/us/en/it/exams">exams</a>:

   * "Apple Device Support exam (SVC-20A)" to join <a target="_blank" href="https://www.credly.com/org/apple/badge/apple-certified-support-professional">Apple Certified Support Professionals (ACRSs)</a> who support and troubleshoot Apple devices in a large organization as a level 1 or 2 help desk professional. <a target="_blank" href="https://training.apple.com/content/dam/appletraining/us/en/2024/documents/Apple%20Device%20Support%20Exam%20Prep%20Guide.pdf">PDF: Exam prep guide</a>.

   * "Apple Deployment and Management exam (SVC-19A)" to join <a target="_blank" href="https://www.credly.com/org/apple/badge/apple-certified-it-professional">Apple Certified IT Professionals (ACITPs)</a> who deploy, secure, and manage Apple devices at scale in large organizations using mobile device management (MDM). 

   * App Development with Swift Associate

   * App Development with Swift Certified User 
   <br /><br />

https://www.macadmins.org/

https://www.quora.com/How-can-I-become-an-Apple-repair-technician

<a target="_blank" href="https://www.youtube.com/watch?v=ymA6f3jhV-c">VIDEO: "Become an Apple Genius"</a> and <a target="_blank" href="https://www.youtube.com/watch?v=KRxT2e_4Boo">Uncover the secrets</a> "Align - Assure - Acknowledge"

<a target="_blank" href="https://www.youtube.com/watch?v=PRMZhuc_6Bw&t=20s">VIDEO: BECOME AN APPLE GENIUS - How to get a Job and work for Apple!</a>

Apple offers the "Mac OS X - Certified Associate" certification exam on this topic (Mac Integration) on each OSX version. Those who pass get on <a target="_blank" href="https://i7lp.integral7.com/durango/do/pr/prSearch?ownername=apple&channel=apple">Apple's Registry</a>.
Gone through <a target="_blank" href="https://it-training.apple.com/tutorials/apt-support">14-hour "Learn How to Support Apple Devices"</a> is for the <a target="_blank" href="https://wilsonmar.github.io/apple-mac-osx-versions/">latest versions of iPhone, iPad, and macOS</a>.

<a target="_blank" href="https://certifications.apple.com/viewer/home">Certifications</a> and <a target="_blank" href="https://certifications.apple.com/viewer/exams">Assessments</a>

<a target="_blank" href="https://training.apple.com/pdf/Mac_Integration_Basics_10.13_Participant_Guide.pdf">Apple has a document</a>
that shows how to:
Integrate a Mac into a Windows network environment and configure a Mac to work with Active Directory to take advantage of network services, file sharing, printing, instant messaging, email, calendars, and contacts. Topics:
   * security at the user, local-networking, and remote-networking levels.
   * Migrate data from a Windows computer to a Mac.
   * Back up data.
   * Run Windows programs on a Mac. 
   <br /><br />

<a target="_blank" href="https://jobs.apple.com/app/en-us/getdiscovered?stepName=resume">Submit your resume</a>.

<a target="_blank" href="https://www.youtube.com/watch?v=ylZ6w6eYRjI">VIDEO: How to answer 36 Questions Asked in 97% Apple Interviews</a>

<a target="_blank" href="https://support.apple.com/guide/mac-help/switched-from-windows-to-mac-mchlbc684e49/14.0/mac/14.0">On Transitioning from Windows to Mac</a>



## Not new-generation M1 chips

Newer Macs with <strong>Apple Silicon</strong> (M1, M2, M3, etc.) chips' ARM architecture are not supported by Linux (at time of writing). To run Linux on Apple Silicon Macs use  virtual machine software such as:

   * <a target="_blank" href="https://www.vmware.com/products/fusion.html">$299 VMWare Fusion</a> 

   * <a href="#UTM">UTM</a> - has a <a target="_blank" href="https://mac.getutm.app/">free version</a> and a <a target="_blank" href="https://apps.apple.com/us/app/utm-virtual-machines/id1538878817">$9.99 edition on the Mac App Store</a> with some additional features. It uses QEMU.
   
   * <a target="_blank" href="https://www.parallels.com/products/desktop/">Parallels Desktop</a> - a commercial product that runs as a macOS app. It's the most well-established and probably the easiest to use.

   * Virtual Box is free but can be difficult to configure if you haven’t used it before. It conflicts with Docker.

(Boot Camp is for Windows only, not Linux.)

https://www.youtube.com/watch?v=uF6Wal8vFJg
home server


## Triple-boot Mac

<a target="_blank" href="https://www.youtube.com/watch?v=B0EuYHFeLAA">VIDEO</a>:
<a target="_blank" href="https://www.youtube.com/watch?v=0T38XIzusFc">VIDEO</a>:

1. Use Apple's Boot Camp to partition disk space for Windows and Linux.
1. Use Apple's Boot Camp to install Windows on the new Windows partition.
1. Install boot loader <strong>rEFInd</strong> so we can <strong>choose OS at boot time</strong>

1. Shrink (compress) the partition for Boot Camp to allow space for Linux installation
1. Install Ubuntu Linux on the newly created partition.

<hr />

<a name="Vagrant"></a>

## Vagrant Virtualbox

Vagrant (at <a target="_blank" href="https://www.vagrantup.com/">https://www.vagrantup.com</a>) is from HashiCorp, the same folks who provide Consul and Terraform.

Vagrant provisions complete virtual machines (Unix, Linux, Mac, or Windows) inside the Mac operating system as virtual machines. The VMs are segregated from other processes. This allows you to test software in a variety of environments.


### Install Virtualbox

0. First, <a target="_blank" href="https://wilsonmar.github.io/xcode">Apple XCode needs to be installed</a>.

0. [Install Homebrew](/macos-homebrew/)

0. From within any folder, download, verify, and install Virtualbox (virtualbox.org):

   <tt><strong>brew install Caskroom/cask/virtualbox
   </strong></tt>

   The response (at time of writing):

   <pre>Updating Homebrew...
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

   <pre>Updating Homebrew...
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

   <pre>==> brew install --cask Caskroom/cask/vagrant 
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

<a target="_blank" href="https://www.youtube.com/watch?v=Hmm9Q-T0oTo">VIDEO</a>:
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

1. The marketing page for VMWare's Fusion for Mac is at:

   <a target="_blank" href="https://www.vmware.com/products/fusion.html">https://www.vmware.com/products/fusion.html</a>

   PROTIP: The Pro edition costs $395 if you need to share images.

   This is the Mac edition of the <a target="_blank" href="https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html">VMware Workstation 17 Pro for Windows/Linux</a>.

1. PROTIP: VMware Fusion currently supports macOS 12 Monterey or 13 Ventura but NOT 14.

   That's why I keep an older 2017 MacBook Pro around for this.


   ### Precautions Before

1. Buy a USB drive and take a full backup of your whole laptop so you can fall back.

1. So you'll have enough disk space for the GB-large VMware image files (at least 80-200 GB free), move other unneeded files to a cloud or USB drive.

   
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
   
   PROTIP: Historically:
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

Enable Fusion to be opened in different ways:

1. To invoke Fusion at a Terminal command line, configure your aliases setup file with this:

   <pre>alias vfusion='open -a "$HOME/Applications/VMware Fusion.app"'</pre>

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

<a target="_blank" href="https://www.youtube.com/watch?v=BBTlKrYU0HQ">Install Windows as a SOC Analyst</a>

   PROTIP: Apps in the /Applications folder are sorted by the date when the app was created, not when it was installed on your laptop.

1. In Finder, on the left pane, scroll to the "Locations" section to click the exit icon to the right of "VMware Fusion".


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

   
   ### Get Ubuntu Server 22.04.01 installer image

   See my article <a target="_blank" href="https://wilsonmar.github.io/packer/">Packer from HashiCorp within macOS</a> to create an ISO image of Windows with a license for the Windows operating system.

1. Identify the version of Ubuntu to use. 

   <a target="_blank" href="https://www.youtube.com/watch?v=BBTlKrYU0HQ">VIDEO</a>: Gerald Auger explains <a target="_blank" href="https://blog.ecapuano.com/p/so-you-want-to-be-a-soc-analyst-part">these instructions</a> by Eric Capuano.

1. Download the 14 GB .iso image file:

   https://releases.ubuntu.com/22.04.1/ubuntu-22.04.1-live-server-amd64.iso

1. PROTIP: Move large .iso files to a <strong>fast SSD USB drive</strong> to make room on your laptop's hard drive.

   Samsung's <a target="_blank" href="https://semiconductor.samsung.com/us/consumer-storage/support/faqs/portable/">SSD Magician software</a> is only for Windows. To get Samsung's <a target="_blank" href="https://drive.google.com/file/d/1gWKO7ckLNIdUdKeZfQvJWjm5ovwr47F6/view">T7 SSD Factory Reset Tool for Mac</a>, call their 800.726-7864. The app only works when Apple System Settings Appearance is set to Light (not Dark).

1. Invoke VMware Fusion. Click Continue.
1. In "Create a New Virtual Machine", drag and drop the .iso file. Click Continue.
1. Click "UEFI", not "UEFI Secure Boot". Continue.
1. Click "Customize Settings". 

   Notice that a "Virtual Machines" folder was created to store "vmwarevm" image files.

1. Click Save.

   TODO: for 2 CPU cores & 2GB RAM like https://kb.vmware.com/s/article/1018415

1. Click the big arrow button.
1. Check "Never show this dialog again", then click OK to "You are running this virtual machine with side channel mitigations enabled. Side channel mitigations provide enhanced security but also lower performance. To disable mitigations, change the side channel mitigations setting in the advanced panel of the virtual machine settings. Refer to VMware KB article 79832 at https://kb.vmware.com/s/article/79832 for more details."

   ### Ubuntu GNU GRUP Boot

1. TODO:
   

   ### Get Windows installer image

1. TODO:

   ### Keyboard

   To press the Windows key, press the command key.

   To press F keys (F2, etc.), hold down the fn key and press F2, etc.
   at the top row.


   ### Troubleshooting

   PROTIP: My Fusion instance has been more stable than my Windows PC laptop.
   
1. <a target="_blank" href="https://apple.stackexchange.com/questions/155109/vmware-fusion-could-not-open-dev-vmmon-error">Others</a> suggested:

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

* <a target="_blank" href="https://www.youtube.com/watch?v=Kq849CpGd88">QEMU</a>
<a target="_blank" href="https://www.youtube.com/watch?v=BgZHbCDFODk">for beginners</a>


## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
