---
layout: post
date: "2023-12-17"
file: "linux-on-mac"
title: "Linux on Apple macOS"
excerpt: "How to run Linux on Apple Mac hardware"
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

This article describes the different ways to use Apple hardware to run Linux instead of Apple's MacOS operating system. 

{% include whatever.html %}



## Upgrade hard drive

Consider replacing older magnetic hard drive with a larger solid-state (SSD) one that runs faster and is more reliable.


## Ethernet cable & adapter

Get an Ethernet cable and cable-to-USB adapter to connect to your router.

Linux may not work immediately after installation because it may not have the drivers for your WiFi card.


## Create a bootable USB drive

<a target="_blank" href="https://www.youtube.com/watch?v=Fpqh6DNj4wA">VIDEO</a>:
To create a bootable USB drive

1. Buy a physical USB drive with at least 8GB of storage.

1. On a Windows machine, download and install Rufus 

   https://rufus.ie/en/ 

1. Download the ISO file for the Linux distribution you want to install:

## Setup multi-book

https://www.rodsbooks.com/refind/


## Flavors of Linux

<a target="_blank" href="https://www.youtube.com/watch?v=d7-EhGIeGUs&t=1m36s">VIDEO</a>:
<a target="_blank" href="https://www.youtube.com/watch?v=i2VsjV-qwRM">Private</a>

* Ubuntu is closest to macOS in terms of look and feel. But some consider it bloated.

   https://ubuntu.com/download/desktop or server

* Nobara Linux (Fedora) is a lightweight version of Ubuntu. <a target="_blank" href="https://www.youtube.com/watch?v=fnNmXhUxa30&t=5m33s">VIDEO</a>:

   https://www.novaralinux.com/

* Linux Mint <a target="_blank" href="https://www.youtube.com/watch?v=6Tln-eBAq-k">VIDEO</a> is based on Ubuntu but is more lightweight. <a target="_blank" href="https://www.youtube.com/watch?v=5uY3u_xZDL0">VIDEO</a>:

   https://linuxmint.com/download.php
   
* <a target="_blank" href="https://www.youtube.com/watch?v=6Tln-eBAq-k">VIDEO</a>: Elementary OS is based on Ubuntu but is more lightweight.

* Debian. 

   <a target="_blank" href="https://www.youtube.com/watch?v=BgZHbCDFODk">VIDEO</a>: <a target="_blank" href="https://www.youtube.com/watch?v=BgZHbCDFODk">Use nala</a> (fast poarallel downloads) instead of <tt>apt</tt> for package management.

* <a target="_blank" href="https://www.youtube.com/watch?v=s8-B9d7iz1A">VIDEO</a>: Tails OS is Free Software and based on Debian GNU/Linux that resides in a USB drive or DVD independently of the computer's original operating system so as to leave no trace on the computer being used. It aims at preserving privacy and anonymity, and helps you to use the Internet anonymously and circumvent censorship; all connections to the Internet are forced to go through the Tor network; use state-of-the-art cryptographic tools to encrypt your files, emails, and instant messaging.
* QuebesOS uses virtualization to isolate programs from each other.

* EndeavorOS
* AWS Linux 2
* Fedora
* Arch Linux
* Open SUSE
* Red Hat Enterprise Linux (RHEL) is a commercial product.
* <a target="_blank" href="https://www.youtube.com/watch?v=CHQ8c7QqlbM" title="by Rob.Brax.me ">VIDEO</a>: Vanilla uses their apx installer
* KDE Neon Plasma
* Whonix works through Tor.
* Quebes
* <a target="_blank" href="https://www.youtube.com/watch?v=Fn96IM9mydI" title="on Dave's Garage">Proxmox</a>
<br /><br />

* <a target="_blank" href="https://wilsonmar.github.io/kali/">Kali</a> is based on ATT Unix and the Debian-derived GNU/Linux distribution 

NOTE: CentOS is no longer supported by Red Hat.



## To Dual Boot or Not to Dual Boot

<a target="_blank" href="https://www.youtube.com/watch?v=KIgxEEzT9ek">VIDEO</a>:

Those who don't plan to ever use macOS again can completely replace it with Linux. That way, none of your storage is used up by its system files. 

But since Linux writes over the macOS Recovery partition, back it up to an external drive before installing Linux, in case you change your mind, it's difficult and time-consuming to restore macOS again in the future. PROTIP: The $49.99 Carbon Copy Cloner 6 (https://bombich.com/) backs up your macOS Recovery partition. See https://www.makeuseof.com/tag/delete-repair-mac-recovery-partition/

With a dual boot system, both macOS and Linux are installed on your Mac. You can just hold Option while your computer boots up to choose which operating system to use. The main difference between a dual boot system and a virtual machine is that you can only use one OS at a time while dual-booting, but you get better performance.


## Virtualization and emulation utilities

* <a target="_blank" href="https://www.vmware.com/products/fusion.html">VMWare Fusion</a> is a commercial product that runs as a macOS app.
<br /><br />

<hr />

## UTM

UTM is a virtual machine app for macOS that can run a variety of operating systems including Linux. It is free to download and use, 

   <ul><a target="_blank" href="https://mac.getutm.app/">https://mac.getutm.app</a></ul>

There is a paid-for version on the Mac App Store that includes some additional features.

UTM uses the popular QEMU system emulator securely in a sandboxed environment to protect your data from viruses and malware in the emulated operating system.


## References

* https://www.hellotech.com/guide/for/how-to-install-linux-on-mac

* <a target="_blank" href="https://www.howtogeek.com/187359/5-ways-to-run-Linux-software-on-a-mac/">5 ways to run Linux software on a Mac</a>

* <a target="_blank" href="https://www.pcmag.com/news/how-to-run-Linux-on-a-mac">How to run Linux on a Mac</a>

* https://www.makeuseof.com/tag/install-linux-macbook-pro/



## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
