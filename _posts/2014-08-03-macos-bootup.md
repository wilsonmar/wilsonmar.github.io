---
layout: post
date: "2023-12-19"
file: "macos-bootup"
title: "MacOS Bootup"
excerpt: "To diagnose and troubleshoot getting started (vs. Linux)"
tags: [apple, mac, setup, USB]
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14624434/dab075ca-0597-11e6-9090-f93e259a5554.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article describes the boot-up process on MacOS vs. Linux
so you can better diagnose and troubleshoot issues.

## Power button

On new MacBooks with the Touchbar, the power button is NOT MARKED at the upper-right corner of the keyboard. This is because the button also doubles as a finger scanner.

![mck-background-480x237](https://user-images.githubusercontent.com/300046/77134556-3399a000-6a2d-11ea-8dcf-6ffe19c1ac42.jpg)

WARNING: I often get an undesired pop-up for Siri because its button is next to the power button:

![macos-siri-popup-430x112](https://user-images.githubusercontent.com/300046/77134746-faadfb00-6a2d-11ea-994d-e2e7b3c35b84.jpg)

<a id="Bootupz"></a>

## Boot-up

PROTIP: When the keyboard and mouse are not responsive, hold down the start (power) button for a <strong>hard reset</strong>.

While pressing the power/start:

<ul>
<li> Hold down <strong>C</strong> to <a href="#BootFromCD">boot from CD</a>.</li>
<li> Hold down <strong>N</strong> to boot from network (do a NetBoot from a network server).</li>
<li> Hold down <strong>option</strong> (alt) key for the Mac's Startup Manager to select a (USB) startup disk.</li>

<li> Hold down <strong>shift</strong> key to boot in Safe Mode (which does not load <a href="#StartUps">start-up items</a>).</li>
<li> Hold down &#8984; (command) + R for the <a href="#RecoveryMenu">Recovery menu</a>.</li>
<li> Hold down &#8984; (command) + option + P + R to reset Parameter RAM (PRAM/NVRAM). You'll need to provide your network password again.</li>
<li> Hold down control + option + shift + power button to reset SMC.</li>
</ul>

After powering up your Mac, 
a folder with a question mark means that a <a href="#MacBoot">boot folder (described below)</a> 
was not found on the hard disk.

If pressing the start button does not work:

<ol type="1">
<li> Unplug the power cable.</li>
<li> Hold down the power button for about 10 seconds and keeping pressing.</li>
<li> While still holding the power button down, insert the magsafe power cable.
and hold it for another 10 sec.</li>
<li> Release the power button and 
make a "normal" press as if you would normally turn on your computer.</li>
</ol>

If that doesn't work then try to remove one RAM memory chip and switch places before repeating the above.

See https://www.tekrevue.com/tip/mac-startup-options/


<a name="RecoveryMenu"></a>

## Recovery menu

Prior to OS X Lion in 2011, one had to insert an OS X DVD or USB installer. That was a hassle.

With Lion onwards, Apple added a 2GB hidden recovery partition on the Mac’s hard drive to boot up in Recovery Mode.

"macOS Utilities" appears:

![macos-bootup-utils-640x347-74954.jpg](https://user-images.githubusercontent.com/300046/41775389-f79fa38e-75e0-11e8-9765-20e95762e777.jpg)

Open a Terminal by clicking "Utilities" menu item:

![macos-bootup-utils-640x196-39501.jpg](https://user-images.githubusercontent.com/300046/41775582-a340e892-75e1-11e8-9298-d8713b9c42ea.jpg)

Also, <strong>OS X Internet Recovery</strong> loads the recovery information directly from Apple’s servers. 


<a name="MacBoot"></a>

### Boot loader on Mac

MacOS does not use the GRUB boot loader other Linux machines store in the /boot folder.

MacOS machines boots from the <strong>boot.efi</strong> binary file within folder<br />
`/System/Library/CoreServices`
on Intel Macs. Older PowerPC Macs (and an old enough version of OS X) boots from file BootX.

The MacOS kernel, as of Yosemite (version 10.10), is at<br />
`/System/Library/Kernels/kernel`
but was just `/mach_kernel` in older versions.

Apple-supplied loadable kernel modules (known as kernel extensions or kexts) are found in<br />
`/System/Library/Extensions/`

Third-party extensions are in<br />
`/Library/Extensions/`

See <a target="_blank" href="https://developer.apple.com/library/content/documentation/Darwin/Conceptual/KernelProgramming/booting/booting.html">
Apple's "The Early Boot Process"</a>.


<a name="BootFromCD"></a>

## Bootable from CD

You'll be glad you have a bootable CD or USB drive when you are installing macOS Mojave onto multiple Macs and would rather not wait to download the installer on a secondary machine (which you may not have).

So be prepared and do what this says:
<a target="_blank" href="
https://support.apple.com/en-us/HT201372">
https://support.apple.com/en-us/HT201372<br />
Create a bootable installer for macOS</a>
for each version of MacOS.

The macOS Mojave installer software is just over 6GB,
For Mojave, the link is https://apps.apple.com/us/app/macos-mojave/id1398502828?mt=12

The macOS Mojave installer software is just over 6GB,

The download goes into the `/Applications` folder.

See articles about this at <a target="_blank" href="https://www.macworld.com/article/3284378/how-to-create-a-bootable-macos-mojave-installer-drive.html">MacWorld</a>, <a target="_blank" href="https://9to5mac.com/2018/06/18/how-to-create-a-bootable-macos-mojave-10-14-usb-install-drive-video/">9to5mac</a>, and <a target="_blank" href="http://osxdaily.com/2018/09/26/make-macos-mojave-boot-usb-installer/">osxdaily</a>.


<a name="StartUps"></a>

## Start-up items

MacOS provices its <tt>launchctl</tt> utility for interaction with the OS X init script system deamon launchd
which controls the services that start up on boot.

1. List what launch scripts are currently loaded:

   <pre><strong>launchctl list | wc -l</strong></pre>

   375 shows up. 
   
1. Remove the "\| wc -l" to see the list.

   On mine, the one that's not from com.apple is:

   <tt>com.adobe.ARMDCHelper.cc24ae...</tt>

   ### Launchd scripts

   Launchd scripts are stored in several folders:

   * ~/Library/LaunchAgents
   *  /Library/LaunchAgents
   *  /Library/LaunchDaemons
   *  /System/Library/LaunchAgents
   *  /System/Library/LaunchDaemons 
   <br /><br />

2. To stop and unload running scripts:

   <pre>sudo launchctl unload [path/to/script] -w </pre>

   The -w flag removes the script permanently from your boot sequence. 
   
   I like to run this one on all the auto-update " helpers"="" created="" by="" adobe="" apps="" and="" microsoft="" office.&LT;="" p="">

3. To see what goes into a launch agent or daemon, there's a great blog post that walks you through the file format at:

   <a target="_blank" href="
   http://paul.annesley.cc/2012/09/mac-os-x-launchd-is-cool/">
   http://paul.annesley.cc/2012/09/mac-os-x-launchd-is-cool</a>

   "I particularly like the idea of using QueueDirectories to monitor and act upon files dropped into a directory, without having to run any extra daemons. The files could be uploaded to S3, transcoded to a different video format, gzipped… anything."

4. Learn how to <a target="_blank" href="
   https://developer.apple.com/library/mac/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html">write your own launchd scripts, explained at Apple's Developer site</a>.

5. If you'd prefer a GUI rather than using the command line, buy the $10 Lingon app from:

   <a target="_blank" href="
   http://www.peterborgapps.com/lingon/">
   http://www.peterborgapps.com/lingon</a>

6. Consider setting up bash scripts to run periodically or at timed intervals in the background, similar to cron jobs on Linux. For example, to start the Apache web server start automatically when you turn on your Mac:

   <pre><strong>
   sudo launchctl load -w /System/Library/LaunchDaemons/org.apache.httpd.plist
   </strong></pre>

   ### Plists

   Plist files are how Macs define services.

## PAM

Linux operating systems use PAM (Pluggable Authentication Model).

The macOS equivalent of the Linux <tt>ldd</tt> command which lists the shared library dependencies of an executable or shared library is:

   <ul><tt>otool -L /usr/bin/login</tt>
   
   Example response:
   <pre>/usr/bin/login:
        /usr/lib/libbsm.0.dylib (compatibility version 1.0.0, current version 1.0.0)
        /usr/lib/libpam.2.dylib (compatibility version 3.0.0, current version 3.0.0)
        /usr/lib/libEndpointSecuritySystem.dylib (compatibility version 1.0.0, current version 368.140.3, weak)
        /usr/lib/libSystem.B.dylib (compatibility version 1.0.0, current version 1319.100.3)
   </pre>
   </ul>

Within folder <tt>cd /etc/pam.d</tt>, file <tt>login</tt> contains:

<pre># login: auth account password session
auth       optional       pam_krb5.so use_kcminit
auth       optional       pam_ntlm.so try_first_pass
auth       optional       pam_mount.so try_first_pass
auth       required       pam_opendirectory.so try_first_pass
account    required       pam_nologin.so
account    required       pam_opendirectory.so
password   required       pam_opendirectory.so
session    required       pam_launchd.so
session    required       pam_uwtmp.so
session    optional       pam_mount.so
</pre>

Each operating sytem has its own set, including use of file pam_env.conf within folder /etc/security.

## Root Kits

Leak of documents from CIA’s Embedded Development Branch (EDB) reveal they developed an OS X “implant” (called DerStarke) that includes a kernel code injection module dubbed Bokor and an EFI (Extensible Firmware Interface)  persistence module (called DarkMatter). The rootkits targeting <strong>firmware</strong> on Apple Macbook laptops<a target="_blank" href="https://www.pcworld.com/article/3179348/after-cia-leak-intel-security-releases-detection-tool-for-efi-rootkits.html">*</a>

The low-level firmware runs before the operating system and initializes the various hardware components during the system boot process. That allows the rootkit to survive major system updates and even reinstallations.

A module for Intel Security's <a target="_blank" href="https://github.com/chipsec/chipsec">CHIPSEC open-source framework</a> finds rogue EFI binaries. CHIPSEC is a set of command-line tools which use low-level interfaces to analyze a system’s hardware, firmware, and platform components. It can be run from Windows, Linux, macOS, or an EFI shell.
The new CHIPSEC module allows the user to take a clean EFI image immediately after purchase from the computer manufacturer, extract its contents and build a clean list of the binary files inside. It can then compare that list against the system’s current EFI or against an EFI image previously extracted from a system.
If the tool finds any binary files that don’t match the clean EFI list, it’s possible that the firmware has been infected. The rogue files are listed and can then be further analyzed.

See https://support.apple.com/en-us/HT201518

## More on macOS

This is one of a series on macOS:

{% include mac_links.html %}
