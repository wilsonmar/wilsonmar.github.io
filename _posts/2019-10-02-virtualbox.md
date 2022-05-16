---
layout: post
title: "Virtualbox"
excerpt: "Although it doesn't have the path to production like Docker and Kubernetes, it's free (unlike VMware Fusion)"
modified:
tags: [virtualbox]
date: "2019-10-04"
file: "virtualbox"
image:
# virtualbox-300x700
  feature: https://user-images.githubusercontent.com/300046/97094515-85815480-1612-11eb-8587-127ab8bd8c23.jpeg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/virtualbox/">This</a> is a hands-on  introduction with insightful commentary carefully sequenced to make complex material easier to understand quickly. This is not a "demo", but an immersive step-by-step "deep dive" tutorial aimed to make you productive.

{% include whatever.html %}


NOTE: Docker and <a target="_blank" href="https://wilsonmar.github.io/kubernetes/">Kubernetes</a> is now a superior utility to Virtualbox. Their images are smaller and quicker to load. They have a path to production usage whereas <a href="#Scripts">Virtualbox command scripts</a> are only for local use.

Virtualbox is free, unlike $350 VMWare Fusion On macOS. Their images are about the same size.

Nevertheless, some tutorials still reference Virtualbox.
So here we are.


## Before install

   PROTIP: Instead of downloading the installer from https://www.virtualbox.org/
   and clicking, use Homebrew on macOS.

1. Several editions of Virtualbox are available from Homebrew:

   <pre><strong>brew search virtualbox</strong></pre>


   ### Allow KEXT 

   To avoid error during install of Virtualbox (in the next step) with a message such as:

   <pre>Error: Failure while executing; `/usr/bin/sudo -E -- /usr/bin/env LOGNAME=wilson_mar USER=wilson_mar USERNAME=wilson_mar /usr/sbin/installer -pkg /usr/local/Caskroom/virtualbox/6.1.16,140961/VirtualBox.pkg -target / -applyChoiceChangesXML /var/folders/r7/_4wzn4hn6yb2xxlms995lnkc0000gn/T/choices20201024-48615-1qc3jwx.xml` exited with 1. Here's the output:
installer: Package name is Oracle VM VirtualBox
installer: choices changes file '/var/folders/r7/_4wzn4hn6yb2xxlms995lnkc0000gn/T/choices20201024-48615-1qc3jwx.xml' applied
installer: Installing at base path /
installer: The install failed. (The Installer encountered an error that caused the installation to fail. Contact the software manufacturer for assistance. An error occurred while running scripts from the package “VirtualBox.pkg”.)
   </pre>

   Enable kernel extension <a target="_blank" href="https://developer.apple.com/library/content/technotes/tn2459/_index.html">this Apple Technical Note "User-Approved Kernel Extension Loading"</a> and:

   If you run the brew command, you'll get this pop-up:

   <img width="391" alt="virtualbox-kext-popup" src="https://user-images.githubusercontent.com/300046/97080041-c26b2e00-15b5-11eb-82a1-1381e39e52db.png">

1. Clicking on "Open Security Preferences" is equivalent to clicking the Apple icon for:

   <strong>Apple icon → System PreferencesSecurity & Privacy → General tab</strong>

   <img width="666" alt="virtualbox-lock-config" src="https://user-images.githubusercontent.com/300046/97080210-fa26a580-15b6-11eb-8b07-49f56fcf15e6.png">

1. Click the yellow lock icon at the lower-left corner. Type your password.

1. Click Allow to remove the "Oracle" message.

1. Click the yellow lock icon again.

1. Press command+Q (or click the red dot) to dismiss the pop-up.


   ### Download big OVA file

   Files can be only if downloaded using wget if you are provided with a folder path URL
   <a target="_blank" href="https://www.dropboxforum.com/t5/Dropbox-files-folders/Getting-downloading-link-of-files-in-Dropbox-automatically/td-p/263073">*</a>

   So manually download by clicking the "Download" button at:

   <a target="_blank" href="https://www.dropbox.com/s/11saxbkarayrs3d/cdv3.ova?dl=0">
   https://www.dropbox.com/s/11saxbkarayrs3d/cdv3.ova?dl=0</a>

   The cdv3.ova file is <strong>4.5 GB</strong> large.

   PROTIP: .ova image files contains the full operating system.

   




<hr />


## Install & Run Script 

Below is a description of each steps, in GUI and CLI.


### On macOS 

1. Use Homebrew to install both GUI app and CLI programs from one installer:

   <pre><strong>brew install --cask virtualbox</strong></pre>

   Sample response:

   <pre>==> Downloading https://download.virtualbox.org/virtualbox/6.1.16/VirtualBox-6.1.16-140961-OSX.dmg
Already downloaded: /Users/wilson_mar/Library/Caches/Homebrew/downloads/68e568735dc96f9aa3ada35a68557e4b1f41f13f17b86f1ad08fe410f74bc4fa--VirtualBox-6.1.16-140961-OSX.dmg
==> Verifying SHA-256 checksum for Cask 'virtualbox'.
==> Installing Cask virtualbox
==> Running installer for virtualbox; your password may be necessary.
==> Package installers may write to any location; options such as --appdir are ignored.
Password:
installer: Package name is Oracle VM VirtualBox
installer: choices changes file '/var/folders/r7/_4wzn4hn6yb2xxlms995lnkc0000gn/T/choices20201024-50422-lhk9yt.xml' applied
installer: Installing at base path /
installer: The install was successful.
==> Changing ownership of paths required by virtualbox; your password may be necessary
🍺  virtualbox was successfully installed!
   </pre>

   ### GUI app

   From here you can open the GUI:

   <pre><strong>open /Applications/VirtualBox.app</strong></pre>

   You can then manually click and type as described in documentation such as from <a target="_blank" href="https://www.linkedin.com/in/brentlaster/">Brent Laster</a> (@BrentCLaster, author of Wrox "Professional Git" and OReilly "Jenkins 2 – Up and Running", opensource.com )
   at https://github.com/brentlaster/safaridocs/blob/master/cd-labs.pdf

   https://learning.oreilly.com/live-training/courses/getting-started-with-continuous-delivery-cd/0636920417040/
   OReilly "Getting started with continuous delivery (CD)"


   ### CLI program

   Scripts make use of the 

1. Verify using the Virtualbox CLI program:

   <pre><strong>VBoxManage -v</strong></pre>

   Response at time of writing:

   <pre>6.1.16r140961</pre>

1. Import appliance (.ova file) to designated folder:

   The GUI top menu:<br /> 
   <tt>(Apple) VirtualBox  File  Machine  Window  Help</tt>

1. Press command+I (or Pull down File to select "Import Appliance").

1. Click the yellow folder icon and select the ova file.

   The equivalent command:

   <pre><strong>OVA_FILE="~/Downloads/cd.ova"</strong></pre>

1. Click Continue for the Appliance settings dialog.

   <a targt="_blank" href="https://user-images.githubusercontent.com/300046/97081394-6b6a5680-15bf-11eb-85db-2b10d670f7d1.png">
   <img width="896" alt="virtualbox-appliance-settings" src="https://user-images.githubusercontent.com/300046/97081394-6b6a5680-15bf-11eb-85db-2b10d670f7d1.png"></a>

1. Click "Import" and "Agree". Wait for it, then the "Oracle VM VirtualBox Manager":

   <a targt="_blank" href="https://user-images.githubusercontent.com/300046/97081510-20047800-15c0-11eb-8233-5a88ad7ed9b2.png">
      <img width="840" alt="virtualbox-manager" src="https://user-images.githubusercontent.com/300046/97081510-20047800-15c0-11eb-8233-5a88ad7ed9b2.png"></a>

   <img width="839" alt="virtualbox-manager-2" src="https://user-images.githubusercontent.com/300046/97082721-04519f80-15c9-11eb-8f65-30ed1b84e10a.png">

   The equivalent command:

   <pre><strong>VM_NAME="cd"
   VBoxManage import $OVA_FILE --vsys 0 --vmname $VM_NAME --eula accept</strong></pre>

   PROTIP: The default memory is 6GB (6184MB), which you can adjust. But first see how much memory is needed during actual usage.

1. The UI provides several ways to Start: Click the yellow arrow; If you have several ova file Groups, right-click on the one you want started to select "Start", then "Normal" for GUI (not "Headless").

   The equivalent CLI:

   <pre><strong>VBoxManage startvm $VM_NAME -- type=headless</strong></pre>

   <pre>Waiting for VM "cd" to power on...
VM "cd" has been successfully started.
   </pre>

   REMEMBER: Switch by pressing left command+C.

1. There are two messages that pop-up during install and also appear at the top of the client UI Desktop:

   <img width="464" alt="virtualbox-capture-msg" src="https://user-images.githubusercontent.com/300046/97082832-bf7a3880-15c9-11eb-84c3-b3ef6b4c0b42.png">

   Check "Do not show this message again", then click "Cancel" to the pop-up (do not Switch).

   <img width="337" alt="virtualbox-switch-msg" src="https://user-images.githubusercontent.com/300046/97082852-e33d7e80-15c9-11eb-8be0-664d5f7ba32e.png">

   Check "Do not show this message again", then click "Cancel" to the pop-up (do not Capture).

   PROTIP: Avoid using "scaled mode". Press command+F.

   You should now be on the server Desktop.

1. Click "X" on the far right of each message to dismiss messages at the top of the screen about “Auto capture keyboard” and “mouse pointer integration” you can just click the x. 

   PROTIP: Keyboard shortcut command+Tab doesn't work from within Virtualbox.
   So it helps to have a second monitor you can mouse to access macOS programs.
   
1. If you are given an option to upgrade ubuntu, decline.


   ### Network Settings

1. In the GUI Terminal Emulator, click on Terminal.
1. Verify that you have internet connectivity from the VM: 

   <pre><strong>ping google.com</strong></pre>

   <pre>PING google.com (108.177.112.113) bytes of data.</pre>


1. Add a network adapter to the VM to configures the network adapter to work on host-only mode, 
   connected to the vboxnet0 network:

   <pre><strong>VBoxManage modifyvm $VM_NAME --nic2 hostonly --hostonlyadapter2 vboxnet0</strong></pre>


1. In the GUI Terminal, list all IP addresses from a given network and look for which one was assigned to the VM:

   <pre>sudo apt-get install arp-scan
sudo arp-scan --interface=vboxnet0 --localnet
   </pre>

1. List all Guest VM properties:

   <pre><strong>VBoxManage guestproperty enumerate $VM_NAME</strong></pre>


Others:

https://www.techrepublic.com/article/how-to-create-a-bash-script-for-starting-virtualbox-vms/


<hr />

<a name="Scripts"></a>

## VBoxManage script

1. Open a Terminal 
   PROTIP: You can access Virtualbox instances from a Terminal outside the Virtualbox using the VBOXManage CLI.

1. View documentation of VBoxManage at 

    <a target="_blank" href="https://www.virtualbox.org/manual/ch08.html">https://www.virtualbox.org/manual/ch08.html</a>.

1. View configuration details (the long story) for ALL virtual machines:

   <pre><strong>VBoxManage list vms --long</strong></pre>

1. View configuration details (the long story) for a single virtual machines:

   <pre><strong>VBoxManage showvminfo "cd"</strong></pre>


   ### Create VM from CLI

1. PROTIP: See what operating system type are supported on your current machine:

   <pre><strong>VBoxManage list ostypes</strong></pre>

1. VirtualBox comes with its own DHCP server:

   VBoxManage list dhcpservers

   https://www.virtualbox.org/manual/ch06.html#networkingmodes

   VBoxManage list hostonlyifs

   VBoxManage hostonlyif create

   <pre>0%...10%...20%...30%...40%...50%...60%...70%...80%...90%...100%
Interface 'vboxnet0' was successfully created</pre>

1. This createvm.sh from Jose Gomez Castaño creates a WindowsXP instance:

   <pre>name='XP_pepe'
os='Windows10_64'
sizeDisk=10000
isoPath='/home/pepe/virtualbox/wxp_sp2.ISO'
createPath='/home/pepe/virtualbox/'
&nbsp;
VBoxManage createhd --filename $createPath$name'/'$name.vdi --size $sizeDisk
VBoxManage createvm --basefolder $createPath --name $name --ostype $os --register
VBoxManage storagectl $name --name "IDE Controller" --add ide
VBoxManage storageattach $name --storagectl "IDE Controller" --port 0 --device 0 --type dvddrive --medium $isoPath
VBoxManage storagectl $name --name "SATA Controller" --add sata --controller IntelAHCI
VBoxManage storageattach $name --storagectl "SATA Controller" --port 0  --device 0 --type hdd --medium $createPath$name'/'$name.vdi
VBoxManage modifyvm $name --boot1 dvd --boot2 disk --boot3 none --boot4 none
VBoxManage modifyvm $name --memory 1024 --vram 128
VBoxManage modifyvm $name --nic1 bridged --bridgeadapter1 eth0 
VBoxHeadless -s $name
   </pre>


<hr />

## Do work

1. Invoke application programs in the Virtualbox.


1. PROTIP: Keyboard shortcut command+Tab doesn't work from within Virtualbox.
   So it helps to have a second monitor you can mouse to access macOS programs.
   


<hr />

## Resources

1. <a target="_blank" href="https://medium.com/ci-t/set-up-a-virtualbox-vm-with-4-vboxmanage-commands-9266a5ee885d">
   Set up a VirtualBox VM with 4 VBoxManage commands: How to create an IP-connectable virtual machine through the CLI</a>a>
   using code from https://github.com/ricardolsmendes/vboxmanage-ova-setup

1. Try it:

   https://www.linuxtechi.com/manage-virtualbox-virtual-machines-command-line/

A video on working with VirtualBox is at <a target="_blank" href="https://app.pluralsight.com/player?course=linux-server-virtualization-lpic3-304-1&author=david-clinton&name=linux-server-virtualization-lpic3-304-1-m6&clip=0&mode=live">
Pluralsight "Linux Server Virtualization" course</a>
by David Clinton
5 May 2016

https://app.pluralsight.com/library/courses/linux-server-virtualization-lpic3-304-1/table-of-contents

https://bootstrap-it.com/docker4aws/

https://www.udemy.com/course/oracle-virtualbox-mastercourse/
was last updated 2/2017.





