---
layout: post
title: "MacOS Bootup"
excerpt: "Getting started"
tags: [apple, mac, setup, USB]
date: "2014-08-03"
file: "macos-bootup"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14624434/dab075ca-0597-11e6-9090-f93e259a5554.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<p align="right"><a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=es&u=https%3A%2F%2Fwilsonmar.github.io%2Fmacos-bootup%2F"><img alt="Español (Spanish)" width="20" height="14" src="../images/flags/es.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=fr&u=https%3A%2F%2Fwilsonmar.github.io%2Fmacos-bootup%2F"><img alt="Français (French)" width="20" height="14" src="../images/flags/fr.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=de&u=https%3A%2F%2Fwilsonmar.github.io%2Fmacos-bootup%2F"><img alt="Deutsch (German)" width="20" height="14" src="../images/flags/de.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=it&u=https%3A%2F%2Fwilsonmar.github.io%2Fmacos-bootup%2F"><img alt="Italiano" width="20" height="14" src="../images/flags/it.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=pt&u=https%3A%2F%2Fwilsonmar.github.io%2Fmacos-bootup%2F"><img alt="Português" width="20" height="14" src="../images/flags/pt.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ru&u=https%3A%2F%2Fwilsonmar.github.io%2Fmacos-bootup%2F"><img alt="Cyrillic Russian" width="20" height="14" src="../images/flags/ru.png"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https%3A%2F%2Fwilsonmar.github.io%2Fmacos-bootup%2F"><img alt="中文 (简体) Chinese (Simplified)" width="20" height="14" src="../images/flags/cn.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ja&u=https%3A%2F%2Fwilsonmar.github.io%2Fmacos-bootup%2F"><img alt="日本語 Japanese" width="20" height="14" src="../images/flags/jp.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A%2F%2Fwilsonmar.github.io%2Fmacos-bootup%2F"><img alt="한국어 Korean" width="20" height="14" src="../images/flags/ko.gif"></a>
</p>
{% include _toc.html %}

<a id="Bootupz"></a>

## Boot-up

During boot-up (Apple logo):

<ul>
<li> Hold down the start button for a hard reset when the keyboard and mouse are not responsive.</li>
<li> Hold down <strong>C</strong> to boot from CD.</li>
<li> Hold down <strong>N</strong> to boot from network (do a NetBoot from a network server).</li>
<li> Hold down <strong>option</strong> (alt) key for the Mac's Startup Manager to select a (USB) startup disk.</li>

<li> Hold down <strong>shift</strong> key to boot in Safe Mode (which does not load <a href="#StartUps">start-up items</a>).</li>
<li> Hold down &#8984; (command) + R for the <a href="#RecoveryMenu">Recovery menu</a>.</li>
<li> Hold down &#8984; (command) + option + P + R to reset Parameter RAM (PRAM).</li>
</ul>

After powering up the computer, 
a folder with a question mark means that a <a href="#MacBoot">boot folder (described below)</a> 
was not found on the hard disk.

If pressing the start button does not work:

<ol type="1">
<li> Unplug the magsafe power cable.</li>
<li> Hold down the power button for about 10 seconds and keeping pressing.</li>
<li> While still holding the power button down, insert the magsafe power cable 
and hold it for another 10 sec.</li>
<li> Release the power button and 
make a "normal" press as if you would normally turn on your computer.</li>
</ol>

If that doesn't work then try to remove one RAM memory chip and 
switch places before repeating the above.

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

MacOS does not use the boot loader other Linux machines store in the /boot folder.

MacOS machines boots from the <strong>boot.efi</strong> binary file within 
cd /System/Library/CoreServices.
This is for Intel Macs. Older PowerPC Macs (and an old enough version of OS X) boots from file BootX.

The MacOS kernel, as of Yosemite (version 10.10), is at<br />
`/System/Library/Kernels/kernel`,
   but was just /mach_kernel in older versions.

Apple-supplied loadable kernel modules (known as kernel extensions or kexts) are found in<br />
`/System/Library/Extensions/`

Third-party extensions are in<br />
`/Library/Extensions/`.

See <a target="_blank" href="https://developer.apple.com/library/content/documentation/Darwin/Conceptual/KernelProgramming/booting/booting.html">
this Apple article</a>.

## Bootable Installer

<a target="_blank" href="
https://support.apple.com/en-us/HT201372">
https://support.apple.com/en-us/HT201372<br />
Create a bootable installer for macOS</a>

Boot up with the installer Disc.


## Start-up items

MacOS provices its <tt>launchctl</tt> utility for interaction with the OS X init script system deamon launchd
which controls the services that start up on boot.

1. List what launch scripts are currently loaded:

   <pre><strong>launchctl list | wc -l</strong></pre>

   375 shows up. Remove the "\| wc -l" to see the list.

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


## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
