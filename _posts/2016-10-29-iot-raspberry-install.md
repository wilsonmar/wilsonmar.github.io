---
layout: post
date: "2022-11-17"
file: "iot-raspberry-install"
title: "IoT Raspberry Install"
excerpt: "How to setup a Raspberry Pi on macOS with Raspbian, Python, Node, Ansible, Kubernetes"
tags: [IoT, Raspberry, Mono, Mac]
image:
# feature: pic white robots woman 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622167/45abd918-0585-11e6-8537-a58e0b55e3ec.jpg
  credit: Cyberconstruct.be
  creditlink: http://cyberconstruct.be/2015/02/digital-job-crafting/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This tutorial provides manual instructions and automation scripts to setup and run apps.

<a name="Why"></a>

## Why: Use cases for the Pi

<a target="_blank" href="https://www.youtube.com/watch?v=rS9CbsohFGk" title="Geerling Buy 2022">VIDEO</a>: 
What to run on a Raspberry Pi? 

   * <a target="_blank" href="https://projects.raspberrypi.org/en/projects">Many existing Raspberry projects</a> 
are targeted for learning by children.

   * Block Ad tracking on your own network DHCP DNS using <a target="_blank" href="https://docs.pi-hole.net/">PiHole</a> <a target="_blank" href="https://docs.pi-hole.net/guides/vpn/openvpn/overview/">paired with a VPN</a>

   * A <strong>camera/webcam</strong> for time lapse videos or smart object-detection (running Tensorflow)

   * Light show based on what music is playing

   * Setup a <a target="_blank" href="https://www.youtube.com/watch?v=rS9CbsohFGk&t=2m38s">NAS (Network Attached Storage)</a> using OpenMediaVault * Run a media library to play songs, videos (from a separate drive)

   * Run a <strong>private GitHub server</strong> on a Pi.

   * Run Home Assistant or OpenHAB to control lights, monitor environment, and other automation. <a target="_blank" href="https://www.youtube.com/watch?v=rS9CbsohFGk&t=3m23s" title="Geerling Guy">Zigbee</a>. <a target="_blank" href="https://www.youtube.com/watch?v=PV41VEZCTNE&t=3m">HOOBS</a> integrates Alexa, Nestcam, etc. with Apple HomeKit.

   * Display a <strong>clock</strong>, task list, calendar, a static menu like at a restaurant), or rotating pictures in a nursing home -- from an old PC or older Pi.

   * Run one of the "goat" server which contains known security issues. <a target="_blank" href="https://wilsonmar.github.io/owasp/">OWASP</a>

   * Geerling: build a 4G/5G wireless router modem (instead of buying one such as <a target="_blank" href="https://www.wired.com/review/firewalla-purple/">The $319 gigabit Firewalla Purple</a>, between your router and modem, bundles networking, ad-blocking,  intrusion detection and prevention, parental controls, and a virtual private network (VPN) into one compact, purple box and a mobile app.

   * Process video to .mp4

   * HTPC (Home Theater Personal Computer) services running on k3s at https://github.com/fabito/htk8s

## Kubernetes on Pi

For enterprises, the Raspberry Pi doesn't come with the corporate buracracy.

   * uses <strong>ARM CPU chips</strong>, so is a good platform to 

   * <strong>thoroughly test</strong> whether apps work well the <strong>ARM chip</strong>, such as ones used on AWS Graviton server types (rather than traditional Intel x86).

https://github.com/k8s-at-home has a 
<a target="_blank" href="https://github.com/k8s-at-home/awesome-home-kubernetes">list of GitHub repos</a>

<a target="_blank" href="https://thepihut.com/products/cluster-case-for-raspberry-pi"><img align="right" width="209" alt="rasp-pi-rack-836x960" src="https://user-images.githubusercontent.com/300046/160224852-23710881-184f-4168-989d-1cbd4104c494.png"></a>
Run apps (within Docker containers) in <a target="_blank" href="https://wilsonmar.github.io/kubernetes/">Kubernetes</a> on a cluster of ("bramble") Rasperberry Pi computers in order to become proficient at <strong>configuring</strong> the correct mix of settings for ARM and to <strong>refine automation</strong> scripts for functional and capacity (load balancing and scaling) testing of containers. The cost of a each board in a <a href="#Hardware">"extreme" Pi cluster</a> which orchestrates <strong>several Pi's</strong> together is less than a perhaps a single day running a Kubernetes cluster in a "pay as you go" cloud environment. Without cost pressures, a stand-alone Pi can run overnight (or all week) without the hassle of needing to be brought down for cost reasons. Compare performance using Linpack Benchmark vs Turnpike2.

   * <a target="_blank" href="https://github.com/geekdojo-ofc/rpi-talos-netboot">	Re-runnable script for standing up N number of Talos nodes on Raspberry PIs using Netboot (dnsmasq+apache).</a>
   * <a target="_blank" href="https://github.com/ust84/k8s-gitops">	Sidero/Talos provisioned cluster with Gitops/Flux and Renovate. 3 Pi4 masters and 3 NUCs.</a>
   * <a target="_blank" href="https://github.com/Truxnell/home-cluster">	Sidero/Talos cluster defined with GitOps/Flux. Utilizing SOPS & Renovate. Raspi4 8GB Master + 3 Intel NUC Workers.</a>
   <br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=X9fSMGkjtug" title="Jul 15, 2021 Raspberry Pi ft. Kubernetes (k3s cluster w/ Rancher)">VIDEO</a>: <a target="_blank" href="https://ubuntu.com/tutorials/how-to-kubernetes-cluster-on-raspberry-pi#1-overview">install of Ubuntu plus</a>
 <a target="_blank" href="https:/get.k3s.io/">light-weight K3S</a> from SUSE Rancher dashboard app to manage the private cloud "supercomputer" cluster.

<a target="_blank" href="https://www.linkedin.com/pulse/adventures-cluster-computing-tim-wood/">Tim Wood's hardware cluster consists of</a>
   1. Binary Clock python script with Blinkt! LED board.
   2. Apache with Nagios network monitoring server.
   3. Network-wide DHCP server and DNS filtering through Pi-hole.
   4. Upstream DNS filtering through Pi-hole for high availability, VPN though Wireguard to help bring internet traffic from my devices back through DNS filtering (even if I'm outside of my home network).
   <br /><br />

Software:
   1. https://github.com/fluxcd/flux2 -- a tool for keeping Kubernetes clusters in sync with sources of configuration (like Git repositories), and automating updates to configuration when there is new code to deploy.
   <br /><br />



References:
   * https://github.com/mikeroyal/Raspberry-Pi-Guide
   * https://opensource.com/article/20/6/kubernetes-raspberry-pi
   * https://ubuntu.com/tutorials/how-to-kubernetes-cluster-on-raspberry-pi#1-overview
   * https://dev.to/andypiper/building-a-compact-pi-cluster-1pia
   <br /><br />


<a name="Hardware"></a>

## Hardware Each Node

If you want the <strong>maximum on-board 8GB RAM</strong> on each board, order the <a target="_blank" href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/?variant=raspberry-pi-4-model-b-8gb">Raspberry Pi 4 B</a> (dual displays, 1.5GHz quad-core, 15W USB-C, 2xUSBv2, 2xUSBv3) -- BMC2711 <a target="_blank" href="https://www.horione.com/shop/4-b-8-model-pi-raspberry-gb">$67.49 (with no SD card) from Horione</a> or <a target="_blank" href="https://www.aliexpress.com/item/4000069398795.html?_randl_currency=USD&_randl_shipto=US&src=google&aff_fcid=3e83a28aae264343827b958b1a6c8632-1648061139548-02952-UneMJZVf&aff_fsk=UneMJZVf&aff_platform=aaf&sk=UneMJZVf&aff_trace_key=3e83a28aae264343827b958b1a6c8632-1648061139548-02952-UneMJZVf&terminal_id=223b83d2f8bd44ec91f1e2831cde0b20&afSmartRedirect=y">$157.86 with power, 32 GB SD, and fan in clear case from AliExpress</a>, or <a target="_blank" href="https://www.canakit.com/raspberry-pi-4-extreme-kit.html">$187.90 w/128 SD "Extreme Kit" with fan in black box and cables from CanaKit</a>.

The Extreme Kit's box comes with a <strong>fan</strong>, because heat reduces the life of a board.

<strong>Heat sinks</strong> glued on top of each chip helps to difuse heat.

<a target="_blank" href="https://www.wikiwand.com/en/Power_over_Ethernet">Power over Internet cables and network switch</a> or Power supply:
   * Pi 3 INPUT: 0.3 A, OUTPUT: +5V = 2.5A with micro USB port
   * Pi 4 INPUT: 0.5 A, OUTPUT: +5.1V = 3.0A with USB-C port
   <br /><br />

You'll need at least one monitor display. 
CAUTION: Multiple displays will make the chip run hotter.
The Pi supoports 1900x1080 (HD) monitors with full-size HDMI ports.

Newer Pi have <strong>mini HDMI</strong> ports, so be sure to have an adapter or a cable with a mini on one end and a full HDMI adapter on the other end.

   * The black ports are v2 for a mouse and keyboard. 
   * The blue ports are v3 for ?
   <br /><br />

Speaker

https://cloudinit.readthedocs.io/en/latest/


<hr />

## Hardware competiting with Pi

The Pi is a Single Board Computer (SBC), a "small form factor" computer with a tiny footprint that put full-sized PC power in the palm of your hand:

* Banana Pi M64
* Libre Computer Board ALL-H3-CC
* Pine64
* Pine64 Rock64
* Radxa ROCK PI 4c
* <a target="_blank" href="https://www.intel.com/content/www/us/en/products/details/nuc.html">Intel NUC</a> (Next Unit of Computing, pronounced like “luck” or “truck”), available with Windows 10 and up to 4.40 GHz

## Operating Systems for the Pi

The Raspberry Pi needs an operating system written for the <strong>ARMv8 CPU on the Pi 3</strong>, which replaces Pi 2 and its ARMv7 CPU. Based on <a target="_blank" href="https://www.raspberrypi.org/documentation/installation/installing-images/mac.md">this</a>.

Several operating systems can be installed on a Raspberry Pi:
* <a target="_blank" href="https://developer.android.com/things/get-started/index.html">AndroidThings</a> from Google (another page)
* Windows 10 IoT from Microsoft (another page on this website)
* <a target="_blank" href="https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython">CircuitPython</a> from Adafruit
* <a target="_blank" href="https://wilsonmar.github.io/kubernetes/#sidero-talos-os-on-bare-metal">Sidero Talos OS for Kubernetes</a>
* <strong>Raspbian</strong>, a derivative of Debian Linux (described on this page, below)
   <a target="_blank" href="https://distrowatch.com/table.php?distribution=raspbian">
   PROTIP</a>: The Raspbian OS (based on Debian) is the official release for Raspberry Pi.
<br /><br />

To install:

1. <a href="#Adapter">On a Mac, get an adapter for your laptop to read micro-SD card</a>

1. Attach a static discharge bracket to your wrist to ground.
1. <a href="#InsertChip">Insert micro-SD chip in your laptop</a>

On <a href="#MacPrep">MacOS</a>
   1. Format micro-SD card 
   1. <a href="#DownloadTalos">Download disk image for Talos</a> 
   1. <a href="#DownloadImager">Download Pi OS Imager</a> 
   1. <a href="#CalcHash">Calculate and compare SHA hash</a> (for download integrity)
   1. <a href="#FormatChip">Format micro-SD chip for MacOS</a> or Windows
   1. <a href="#LoadImage">Load OS image to the Pi SD</a> (on macOS)

On <a href="#WinPrep">Windows</a> 
   1. Format micro-SD card 
   1. <a href="#DownloadTalos">Download disk image for Talos</a> 
   1. <a href="#DownloadImager">Download Pi OS Imager</a> 
   1. <a href="#CalcHash">Calculate and compare SHA hash</a> (for download integrity)
   1. <a href="#FormatChip">Format micro-SD chip for MacOS</a> or Windows
   1. <a href="#LoadImage">Load OS image to the Pi SD</a> (on macOS)

<a href="#OnThePi">On the Raspberry Pi</a>
1. <a href="#PowerUp">Power up the stock Pi into the Raspbian GUI</a>
1. <a href="#WiFi">Configure wi-fi connections</a> on the Pi
1. <a href="#Addons">Configure HAT addons</a>
1. <a href="#SSH">Configure SSH into Pi</a> from your Mac laptop
1. <a href="#GetConfigScripts">Get and run configuration scripts</a> 

1. Run Bash shell script on boot-up to download a script from GitHub and run it.

* <a href="#CronJob">Run cron background</a> Python code to periodically 
   <a href="#Temp">measure board's temperature</a> and free memory over time.

> This too much hassle? I can sell you a chip with everything described below.

<hr />


<a name="Adapter"></a>

## Micro-SD and USB Adapter needed?

You may need to buy a 32 or 64 GB SD chip along with an adapter if you need one (as for cameras).

   2017+ Mac Book Pros do not have a slot to read SD cards, 
   so need a USB-C converter rather than older types of USB ports. 

   WARNING: You need to plug the micro SD chip into a full-size SD chip adapter,
   which goes into the Mac's SD card slot.
   You may also use an adapter for USB, which may need to be plugged into a USB port
   rather than on a USB hub (even a powered one).

   CAUTION: Be sure the adapter can read the size of chip.
   Older ones for reading 4GB cannot read the 32GB or 64GB let alone 128GB chips.


<a name="InsertChip"></a>
   
### Insert micro-SD chip in your laptop

1. CAUTION: Before touching delicate electrical boards,
   dissipate static electricity (from just walking around)
   by touching grounded metal.

1. Insert the Micro-SD chip into your laptop or adapter.

   <a name="InitializeChip"></a>
   
   ### Initialize micro-SD chip in your laptop

1. Click "Initialize..." if you see "The disk you attached was not readable by this computer.".

1. In the macOS Disk Utility, click the "Apple SDXC Reader Media" at the left.

   NOTE: It says "8.17 GB" even though the SD chip may be larger.

1. Right-click the "Apple SDXC Reader Media" to select <strong>Erase...</strong>

   That's just so we see more information.

1. Click on Format to show the different formats:
   * Mac OS Extended (Journaled)
   * Mac OS Extended (Case-sensitive, Journaled)
   * MS-DOS (FAT)
   * ExFAT
   <br /><br />

1. Click on "Scheme":
   * GUID Partition Map
   * Master Boot Record
   * Apple Partition Map
   <br /><br />

1. Click "Cancel".


<a name="DownloadTalos"></a>

## Download Talos RPI image

Skip to <a href="#DownloadImager">DownloadImager</a> unless you want to install Talos:

Steps in this section can be performed by a script.

1. Make or navigate to a folder so you can easily tell what is downloaded:

   <pre><strong>cd; mkdir projects/talos</strong></pre>

1. Download the compressed image file per <a target="_blank" href="https://www.talos.dev/v0.14/single-board-computers/rpi_4/#download-the-image">this doc</a>:

   <pre><strong>curl -LO https://github.com/talos-systems/talos/releases/latest/download/metal-rpi_4-arm64.img.xz</strong></pre>

1. Uncompress using the xz utility:

   <pre><strong>xz -d metal-rpi_4-arm64.img.xz</strong></pre>

1. Verify downloaded file size:

   <pre><strong>ls -al</strong></pre>

   <pre>-rw-r--r--  1 wilsonmar  staff  94156684 Mar 24 19:12 metal-rpi_4-arm64.img.xz</pre>

   That's 94,156,684


<a name="DownloadImager"></a>

## Download Pi OS Imager

1. At <a target="_blank" href="https://www.raspberrypi.org/downloads/raspbian/">
   https://www.raspberrypi.org/downloads</a>

   NOTE: Because many operating systems can be used now, mention of "Raspian" have been removed from this page. Previously this appeared:
   
   ![iot-rasp-stretch-download-942x496-65658](https://user-images.githubusercontent.com/300046/35048284-8965e086-fb6a-11e7-87d3-a792e85e812e.png)

   REMEMBER: Only one operating system can be loaded on the Pi.

1. Click "Download for macOS" to download the <strong>Imager</strong> app:

   | Date/File | Version | Download | Unzipped | Blog |
   | --------- | ------- | ----: | ---: | ---- |
   | 2019-04-08 imager_1.7.1.dmg | - | 18.7 MB | ? GB | - |

   <a name="zipSizes"></a>

   | Date/File | Version | Download | Unzipped | Blog |
   | --------- | ------- | ----: | ---: | ---- |
   | 2020-02-13-raspian-buster.zip | ? | 1.19 GB | ? GB | - |
   | 2019-04-08-raspbian-stretch.zip | 4.14 | 1.76 GB | 4.83 GB | - |
   | 2018-06-27-raspbian-stretch.zip | 4.14 | 1.76 GB | 4.83 GB | - |
   | 2018-03-13-raspbian-stretch.zip | 4.10 | 1.78 GB | 4.96 GB | - |
   | 2017-09-07-raspbian-stretch.zip | 4.9 | 1.76 GB | 4.92 GB | - |
   | 2017-04-10-raspbian-jessie.zip | 4.4 | 1.57 GB | ? GB | <a target="_blank" href="https://www.raspberrypi.org/blog/raspbian-jessie-is-here/">blog</a> |
   | 2016-09-23-Raspbian-jessie.zip | 4.3 | 1.40 GB | 4.3 GB | - |

   The large size of the file means it will take a while,
   depending on the speed of your network.

   Alternately, Raspian provides sudo-free access to GPIO (file read/write ports), so the above can be done in an Ubuntu terminal.

   PROTIP: Versions of Debian are named after <a target="_blank" href="https://www.wikiwand.com/en/List_of_Toy_Story_characters">characters in Disney's “Toy Story” films</a>

   * "Buster" is Andy's pet miniature dachshund
   * "Stretch" the rubber octopus is voiced by Whoopi Goldberg
   * "Jessie" is the cowgirl, voiced by Joan Cusack
   * <a target="_blank" href="http://disney.wikia.com/wiki/Wheezy_(Toy_Story)">
   "Wheezy"</a> is the squeeze toy penguin with the red bow tie.
   * <a target="_blank" href="http://pixar.wikia.com/wiki/Sid_Phillips">"Sid"</a> is the bad boy.
   <br /><br />

   QUESTION: Where is the history of old versions and how does one get announcement emails?
   
   Click the red <strong>Download ZIP</strong> below
   <strong>Raspbian STRETCH WITH DESKTOP</strong>, not "Raspbian Stretch with desktop and recommended software".

   PROTIP: The button sends you to downloading URL <a target="_blank" href="https://downloads.raspberrypi.org/raspbian_latest">
   https://downloads.raspberrypi.org/raspbian_latest</a>
   (which can be used in <a target="_blank" href="https://github.com/debian-pi/raspbian-ua-netinst/releases/">
   unattended shell scripts to automate the clicking</a>).

   If you clicked "Raspbian Stretch with desktop and recommended software", the file name downloaded would contain "-full", and be bigger.

   NOTE: The previous version name PIXEL, which stands for "Pi Improved X-Windows Environmet, Lightweight". But many refer it simply as "X".


   <a name="SHA256"></a>
   <a name="CalcHash"></a>

   ### Calculate and compare hash on Mac

1. Calculate a SHA hash from the downloaded file to verify SHA from the website.

   NOTE: Inside the file are .elf (Executable Linkable Format) 
   and .dtb (Device Tree Blob) files.

   On MacOS, open a Terminal and cd to the <strong>Downloads</strong> folder to use a built-in command:

   <a target="_blank" href="http://osxdaily.com/2012/02/05/check-sha1-checksum-in-mac-os-x/">
   PROTIP</a>: Type just `shasum ` with a trailing space, then from Finder drag the file 
   and drop it to the right of the command. You'll end up with this command:

   <pre><strong>cd ~/Downloads
   shasum /Users/<em>YourAccount</em>/Downloads/2018-06-27-raspbian-stretch.zip
   </strong></pre>

   Press Enter to invoke the command.

   Alternately, use the openssl utility:

   <pre><strong>openssl sha256 2018-06-27-raspbian-stretch.zip
   </strong></pre>

1. The output should match the SHA-256 associated with the downloaded file on the website.
   Example <a href="#SHA256">as shown above</a>:

   <pre>8636ab9fdd8f58a8ec7dde33b83747696d31711d17ef68267dbbcd6cfb968c24</pre>

   PROTIP: A 256-bit hash, when divided by 4 bits each digit, should have 64 characters.

1. PROTIP: Save the .zip file to permanent DVD media so you don't have to download again, then delete the file on your laptop (to make room for other stuff on your hard drive):

   A regular single-sided, single layer DVD (R+ or R-) holds 4.7GB. 
   A dual-layer "DL" DVD disk holds 8.5GB.
   <a href="#zipSizes">The file must be smaller</a> (which it is...for now).


   ### Run Imager

1. Open file "imager_1.7.1.dmg" to pop-up <tt>/Volumes/Raspberry Pi Imager</tt>.
1. Drag the <tt>Raspberry Pi Imager.app</tt> icon and drop it over the blue folder (to move it into the Applications folder).
1. Press command+Q or click the red dot at the upper-right.
1. Delete file "imager.x.x.x.dmg" file (to recover disk space).
1. Find file "Raspberry Pi Imager.app" and click to run it.
1. Click "Open" for the dialog about "Are you sure you want to open it?".
1. Click "CHOOSE OS" (do NOT select the first "Raspberry Pi" you see because it is for older 32-bit chips).
1. If you are installing for a Raspberry Pi 64-bit, select "Raspberry Pi OS (other)", then a 64-bit one "with no desktop environment" (because you're a pro). 

   Alternately, if you are installing Talos, scroll down to select "Use custom" and navigate to where you downloaded a zip file for that.

1. Click "CHOOSE" in under "Storage" and select "Generic- Micro SD/M2 Media - 128.2 GB".

   If you don't see the selection, unplug the chip and insert again.

1. If you are installing Raspian, click the gear icon to configure wi-fi SSID and password.

   If you are installing Talos, do not click the gear icon to configure, or you'll see "Operating system did not mount FAT32 partition" later.

1. Click "WRITE" and "YES" to "All existing data ... will be erased. Are you sure you want to continue?".
1. Click "OK" to "Raspberry Pi Imager.app" would like to access files on a removeable volume."
1. Provide your laptop's password to allow writing.

1. While you're waiting for the writing and verifying, read <a target="_blank" href="https://www.raspberrypi.org/blog/">blog at Raspberrypi.org</a>.

   If you see "Operating system did not mount FAT32 partition", ???

1. Click "CONTINUE" when "Write Successful" appears, "You can now remove the SD card from the reader" appears.

1. If you have another chip, repeat the above steps so you'll have a backup at the ready.

1. Press command+Q to exit the Imager app.

   ### Remove zip/tz file

1. For the next step, open a Terminal and cd ~/Downloads.

   PROTIP: Do not unzip the file downloaded because the program that processes it expects a zip file.
   
   If you are using <a href="#WinPrep">Windows, skip to the Windows Prep SD section below</a>.

   This steps below is for Mac working with Talos:

1. Delete the file "metal-rpi_4-arm64.img.xz" if disk space on your Mac is an issue for you.

   <a name="FormatChip"></a>
   
   ### Format micro-SD chip on your MacOS

   A new entry should appear in Finder when you plug in the SD card.

0. Open a Finder window. 
   Scroll down the left panel to see it appear among the Device section.

0. Open a Terminal shell window.

   <a name="diskutil"></a>

0. Identify the SD disk identifier:

   <tt><strong>diskutil list
   </strong></tt>

   A sample response:

   <pre>/dev/disk0 (internal):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                         500.3 GB   disk0
   1:                        EFI EFI                     314.6 MB   disk0s1
   2:                 Apple_APFS Container disk1         500.0 GB   disk0s2
&nbsp;
/dev/disk1 (synthesized):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      APFS Container Scheme -                      +500.0 GB   disk1
                                 Physical Store disk0s2
   1:                APFS Volume ⁨Macintosh HD - Data⁩     447.4 GB   disk1s1
   2:                APFS Volume ⁨Preboot⁩                 334.3 MB   disk1s2
   3:                APFS Volume ⁨Recovery⁩                1.1 GB     disk1s3
   4:                APFS Volume ⁨VM⁩                      3.2 GB     disk1s4
   5:                APFS Volume ⁨Macintosh HD⁩            15.8 GB    disk1s5
   6:              APFS Snapshot ⁨com.apple.os.update-...⁩ 15.8 GB    disk1s5s1
&nbsp;
/dev/disk2 (disk image):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        +109.1 MB   disk2
   1:                  Apple_HFS ⁨Raspberry Pi Imager⁩     109.0 MB   disk2s1
   </pre>

   <strong>PROTIP: Use "/dev/disk2" because that "109.1 MB" is your "128 GB" chip.</strong> The difference between those two numbers is in the different ways the computer versus marketing people calculate the amount of bits. Inside the computer, bits are calculated using 1024 blocks.

   Alternately, the sample response for Mac Sierra and before:

   <pre>/dev/disk0 (internal, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *500.1 GB   disk0
   1:                        EFI EFI                     209.7 MB   disk0s1
   2:          Apple_CoreStorage Untitled 1              499.2 GB   disk0s2
   3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3
&nbsp;
/dev/disk1 (internal, virtual):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:                            Macintosh HD           +498.9 GB   disk1
                                 Logical Volume on disk0s2
                                 8B999D6F-A427-4EC5-A197-85AF9E00C10E
                                 Unencrypted
/dev/disk3 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *63.9 GB    disk3
   1:               Windows_NTFS                         63.8 GB    disk3s1
   </pre>

   In the above example, the 64 GB SD card IDENTIFIER is "disk3".

0. Type a command to unmount your SD card (so a utility can overwrite the entire disk)
   by constructing a command containing the disk identifier number
   for your SD card (3 in the example above):

   <tt><strong>diskutil unmountDisk /dev/disk3
   </strong></tt>

   Again, instead of "disk3", you may type a different one.

   The expected response is:
   
   <pre>Unmount of all volumes on disk3 was successful</pre>


   <a name="Etcher-Install"></a>

   ### Get Etcher for MacOS
   
   PROTIP: The <a target="_blank" href="https://www.raspberrypi.org/documentation/installation/installing-images/windows.md">official Raspberry Pi site describes use of</a>
   another tool, but Etcher reads from a zip file to skip unzipping hassle, 
   and verifies the SD card image was written correctly to the SD card.
   It also automatically dismounts the SD card so it can be safely removed.
   See <a target="_blank" href="https://www.raspberrypi.org/magpi/pi-sd-etcher/">https://www.raspberrypi.org/magpi/pi-sd-etcher</a>

0. On MacOS, download from their website (formerly etcher.io):

   <a target="_blank" href="https://www.balena.io/etcher/">https://www.balena.io/etcher</a>

   NOTE: The Homebrew package "etcher" in no longer available.

1. Click "Download for Mac" (they also have a version for Windows and <a target="_blank" href="https://www.youtube.com/watch?v=xb4fiFda4no">Linux</a>).

1. Select a platform to download the Etcher app for your platform.

   | File downloaded | Size | Date |
   | --------------- | ---: | --- |
   | belanaEtcher-1.5.33.dmg | 116.3 MB | 2019-05-04 |
   | Etcher-1.1.2.dmg | 58.9 MB | 2018-11-03 |
   | Etcher-1.0.0-darwin-x64.dmg | 67.9 MB | 2017-10-15 |
   | Etcher-1.0.0-beta.16-darwin-x64 | 75.4 MB | 2017-06-11 |

   Following <a target="_blank" href="http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/">
   Beginner's Guide to installing Node.js on a Raspberry Pi</a> 
   (made by Resin.io):

1. In Finder double click the  belanaEtcher...dmg file to invoke it.
1. In the pop-up, drag and drop the belanaEtcher icon file onto your ~/Applications folder.
1. Click "Open" to the pop-up about "balanaEtcher.app" is an app downloaded from the internet.
1. In a MacOS Terminal, navigate to the user Applications folder and invoke the program:

   <tt><strong>open ~/Applications/balenaEtcher.app
   </strong></tt>

1. In Finder, free up disk space on your machine by right-clicking on the .dmg file and "Move to Trash".
1. Verify that there are no files on the flash drive you would miss.

   CAUTION: Flashing wipes out all previous contents on the flash drive.

1. Switch back to Etcher to click "Select image".
1. Click "Select drive" for Etcher to detect a flash (SD) drive.
1. Click "Flash!" to write the image to the flash drive.
1. Type your Admin password.
1. Wait for the Copying, then Validating to each reach 100%.

1. Exit the Etcher program by clicking the red X of the app screen.

1. Skip to the <a href="#VerifySD">verify step below</a> to use the bootable Flash drive.


   <a name="FlashSD"></a>

   ### Flash OS on SD card using a Mac

1. cd to the folder where your .img file exists. For example, to go to the Desktop:

   <tt><strong>cd ~/Desktop
   </strong></tt>

1. To avoid "Operation not permitted" in the dd command below, on a Mac go to System Preferences > Security & Privacy > Full Disk Access > Terminal (or iTerm2, etc.).

https://github.com/siderolabs/talos/releases/download/v1.0.0/talosctl-$(uname -s | tr "[:upper:]" "[:lower:]")-amd64

1. Manually construct a command to write the image downloaded onto the SD Card. 
   Replace the X in rdiskX with the disk number from before. For example:

   <tt><strong>sudo dd if=2018-06-27-raspbian-stretch.img of=/dev/rdisk2 bs=1m
   </strong></tt>

   BLAH: The dd command does not have a verbose mode to show progress.

   NOTE: The dd program is also used to <a href="#Backup">
   backup the SD onto your laptop</a>.

   <a target="_blank" href="http://www.computerhope.com/unix/dd.htm">
   The Linux dd command</a> copies a file and also optionally re-formats.

   `if=` specifies the input file name.

   `of=` specifies the output file disk identified by the <a href="#diskutil">diskutil command above</a>.

   `rdisk` gives faster write speed to the SD card.

   `bs=1m` specifies 1 megabyte chunks to write at a time.

   `count=256k` limits the number of blocks processed. 

   `oflag=direct` bypasses the kernel's page cache (memory cache), writing directly to the storage. 

1. Alternately, 

   <pre><strong>sudo dd if=metal-rpi_4-arm64.img of=/dev/disk2 bs=4m conv=fsync</strong></pre>

   `conv=fsync` synchronizes output data and metadata just before finishing. Some operations are stored in RAM and postponed to be later written on the disk. Some devices use buffers and caches in order to improve their throughput and latency performance. So this flag tells dd to write everything on the disk (forcing a physical write of output data and metadata). This command makes the device flush its buffers and caches so that if the device is removed the data is written to it before the operation is marked as complete and before control passes back to the terminal prompt. See https://abbbi.github.io/dd/

1. Type in your password then wait. 
   
   No status is shown during the 30 minutes or more that it takes.
   An example of the ending response:

   <pre>4147+0 records in
4147+0 records out
4348444672 bytes transferred in 265.020326 secs (16407967 bytes/sec)
   </pre>

1. Unmount (construct command with correct disk2):

   <pre><strong>sudo diskutil unmountDisk /dev/disk2</strong></pre>

   Response:
   
   <pre>Unmount of all volumes on disk2 was successful</pre>

   <a name="VerifySD"></a>

   You should now have a working SD card for Raspian.

1. Switch to a Terminal to verify <a target="_blank" href="http://wiki.farmbot.org/problems-solved/installing-farmbotos/linux">what devices are mounted</a> from any folder:

   <tt><strong>df -h
   </strong></tt>

   This sample response confirms that the flash drive is not visible to the Mac:

   <pre>Filesystem      Size   Used  Avail Capacity iused               ifree %iused  Mounted on
/dev/disk1s1   466Gi  426Gi   29Gi    94% 3576707 9223372036851199100    0%   /
devfs          344Ki  344Ki    0Bi   100%    1190                   0  100%   /dev
/dev/disk1s4   466Gi   10Gi   29Gi    26%      11 9223372036854775796    0%   /private/var/vm
map -hosts       0Bi    0Bi    0Bi   100%       0                   0  100%   /net
map auto_home    0Bi    0Bi    0Bi   100%       0                   0  100%   /home
   </pre>   

0. In Finder, press the eject button for the disk.

0. Skip past alternative activity below (for Windows) to <a href="#PowerUp">Power Up to GUI in SD card</a>.



<hr />

<a name="WinPrep"></a>

## Windows Prep SD

   To get full capacity from USB/SD drives 
   (which format does not solve):

0. On a Windows machine, press the Windows key and type in the omni-search box

   <tt><strong>diskpart
   </strong></tt>

0. Get the disk number:

   <tt><strong>list disk
   </strong></tt>

   Identify the disk number for the SD drive based on size of disk.

   "3850 MB" is displayed for drives sold as "4 GB".

0. Reset:

   <pre><strong>select disk 1
   select partition 1
   delete partition
   partition
   clean
   create partition primary
   format
   </strong></pre>

   Formatting takes several minutes. 

   "DiskPart successfully formatted the volume."

0. Close the window:

   <tt><strong>exit
   </strong></tt>

0. In File Explorer, right-click on the drive and select <strong>Eject</strong>.

   <a name="WinFlash"></a>

   ### Unzip and Flash using Windows

0. Unzip to an <strong>.img</strong> file.

   BLAH: The .img file is larger than what can fit in a 4GB USB drive.
   So if you try to copy it to a drive formatted as FAT32 (rather than NTFS),
   a "not enough space" error message is issued even though there is plenty of room
   on the drive.

   The solution is to use a Windows machine and format drives as NTFS.
   
   MacOS can read from NTFS drives, but cannot write to them without
   some additional effort, described below.

   Both Mac and Windows can read drives formatted in <strong>exFAT</strong>
   (even though Microsoft is its patent holder).
   So format external drives that way.

   If your Mac has a Seagate drive, <a target="_blank" href="http://www.seagate.com/support/downloads/item/ntfs-driver-for-mac-os-master-dl/">
   download from Seagate a FREE</a> installer
   NTFS_for_Mac.dmg. It's 28.6 MB.

   NTFS_for_Mac_14.0.456.dmg is the installer for all drives from 
   <a target="_blank" href="https://paragon.cleverbridge.com/">
   $19.95 Paragon Cleverbridge</a>, which offers a 10-day trial. 

   Paid Third-Party Drivers: There are third-party NTFS drivers for Mac that you can install, and they’ll work quite well. These are paid solutions, but they’re easy to install and reportedly offer better performance than the free solutions below.

   Alternately, <a target="_blank" href="https://github.com/osxfuse/osxfuse/releases">
   download the free osxfuse</a>
   and install it using Homebrew.
   
   See <a target="_blank" href="http://www.howtogeek.com/236055/how-to-write-to-ntfs-drives-on-a-mac/">
   this</a>.
   You’ll have to disable System Integrity Protection 
   and then re-enable if after you’re done.

0. Download from<br />
   <a target="_blank" href="https://www.sdcard.org/downloads/formatter_4/index.html">
   https://www.sdcard.org/downloads/formatter_4</a><br />
   the SD Card Formatter 4.0 for SD/SDHC/SDXC program
   to format SD cards.
   The "secure" name means that the card has a "Protected Area" 
   which the program honors while formatting.

   * SDFormatter_4.00B.pkg for Macs
   * SDFormatterv4.zip for Windows containing a setup.exe installer.
   <br /><br />

   <amp-img alt="sd muo-rpi-noobs-sdformatter 433x326.jpg" width="433" height="326" src="https://cloud.githubusercontent.com/assets/14143059/19836619/ad05bf14-9e6b-11e6-9e81-49e63af635c5.jpg"></amp-img>

0. Download binary version of Windows-only win32diskimager from 
   <a target="_blank" href="https://sourceforge.net/projects/win32diskimager/?source=typ_redirect">
   https://sourceforge.net/projects/win32diskimager</a>
   (forwarded from https://launchpad.net/win32-image-writer/+download)

   <strong>Win32DiskImager-0.9.5-binary.zip</strong>, 18.3 MB
   Last updated 2016-10-04

   Unzip it for a folder named<br />
   Win32DiskImager-0.9.5-binary which contains<br />
   Win32DiskImager.exe


0. Invoke the program.
0. Select the drive containing the .img file on your laptop.




<hr />

<a name="OnThePi"></a>

## On the Raspberry Pi:

1. Plug in a USB keyboard.
   
   <a name="PowerUp"></a>

   ### Power Up to GUI in SD card

   Based on <a target="_blank" href="https://www.raspberrypi.org/documentation/installation/installing-images/mac.md">this</a>, if you insert a stock Raspbian image flash SD drive into the Pi and power it up, it would by default display a GUI, with no WiFi connection.

1. Unlug the power adapter.

   NOTE: There is no physical on/off switch on the Pi.

1. Insert the micro SD card into the receptable at the bottom on the Pi.

   PROTIP: The metallic side of the card should face the Pi board.

   When in, the chip sticks out a bit.

1. Plug in monitor and keyboard.

   The Pi 3 is capable of playing <strong>1080p HD video</strong> (1900x800 pixels).
   So you can plug the other end of the HDMI cable into a TV.

   Older TVs without HDMI can still be used by using an adapter that converts
   HDMI signals, albeit at a lower resolution.

1. Power up by plugging in the power.

   CONGRATULATIONS: Isn't it exciting to see the screen appear on a new computer?

   <a target="_blank" href="https://www.youtube.com/watch?v=RBpAkTvBbYg">
   Christopher Barnatt has a nice 9-minute about the PIXEL GUI</a>.

   TECHNICAL NOTE: To prevent starting from a really bad date,
   at shutdown, Raspbian saves a file containing a date at
   `/etc/fake-hwclock.data`
   so that time moves forward.

   Rather than booting up to the Linux command line and
   <a target="_blank" href="https://www.raspberrypi.org/documentation/configuration/raspi-config.md">
   raspi-config</a>,
   the default behaviour since Jessie is now to boot up to the desktop GUI 
   (version 3 of GTK+, the user interface toolkit used for the LXDE desktop environment). 

   ### Exit and return to GUI 

1. Exit GUI mode by pressing <strong>Ctrl + alt + F2</strong>
   (from among F1-F12 keys) at the same time.


   ### Enable boot to CLI console

1. When the regular Terminal window appears
   <a href="#ConfigurePi">Configure the Pi</a>

1. Select the "Enable Boot to Desktop/Scratch" option

1. Select "Console Text console". 


   ### Start Raspbian GUI

0. To start the (PIXEL) GUI again from the console command line:

   <tt><strong>
   startx
   </strong></tt>


   ### View Raspbian GUI from Remote Desktop Client

0. To see the GUI from your Mac, install the Xrdp daemon that runs in the background:

   <tt><strong>
   sudo apt-get install xrdp -y
   </strong></tt>

   `-y` skips manual confirmation for using 10.0 MB of disk space.

   WARNING: This takes up valuable memory, so only use during development.

0. Open Remote Desktop Client

   On Windows, press the Start key on your keyboard and begin typing
   "Remote Desktop Client" until you see it in the list, then click it on the list.

   On a Mac, install the
   <a target="_blank" href="https://itunes.apple.com/us/app/microsoft-remote-desktop/id715768417?mt=12">
   Microsoft Remote Desktop
   from Microsoft</a> then open it in the Launcher.

0. Specify IP address in Remote Desktop Client.

   ### Configure using GUI

0. Click the Raspberry icon at the upper-left corner.
0. Select Preferences.
0. Select Raspberry Pi Configuration.
0. Type in host name "raspi" so there is less to type.
0. In Auto log-in, check "Login as user 'pi'"

0. Click the Localization tab and Set Locale, TimeZone, WiFiCountry.
0. Click OK out the dialogs.

0. To reboot from the GUI, click the raspberry Menu icon at 
   the upper-right corner, select shutdown, then
   select reboot.

   ### Get Command Line from GUI

   PROTIP: Open up a Terminal window by pressing Ctrl+Alt+T
   or clicking the console icon in the GUI.


   ### Shutdown from console

0. Shut down Respian properly before powering it off. Type:

   <tt><strong>
   sudo halt 
   </strong></tt>


0. Wait for the flashing the activity LED
   the Pi uses to signal it is ready to be powered off.
   Then type:

   <tt><strong>
   sudo poweroff
   </strong></tt>

0. Power it up again for the next activity.


### Optional: Configure SD for PiNet boot

   If you want to network boot multiple Raspberry Pis, you could use PiNet at:

   <a target="_blank" href="http://pinet.org.uk/">http://pinet.org.uk</a>

   It is a free and open-source community-based project initially designed for schools. Each Raspberry Pi boots off a small set of startup files on an SD card and fetches the rest of the data it needs from the PiNet server, thereby allowing you to maintain a single operating system image for all the Raspberry Pis. PiNet also adds network user accounts, shared folders and automated backups.

<hr />


<a name="SSH"></a>

## Connect via SSH on same router

A monitor, keyboard, and mouse do not need to be plugged into the
Pi if you SSH into the device from your Mac or Windows PC.

   Instructions here are based on <a target="_blank" href="https://www.youtube.com/watch?v=fLtsXwdM4n0&t=3m20s">
   this video</a>.

0. Identify the IP address

   <pre><strong>ifconfig
   </strong></pre>

   Under "etho0", next to "inet addr:" is like<br />
   10.0.0.10 or 192.168.0.3

   Alternately, if you don't have access to the Pi:

   ### Identify IP from router

On your laptop:

0. Connect a network cable between your router and a powered Pi.

   The Pi would automatically connect to a network.

   WARNING: The Pi and your laptop need to be plugged into the same router.

0. On an internet browser, enter your router's "Default Gateway", 
   typically at:

   <a target="_blank" href="https://192.168.0.1">
   https://192.168.0.1</a>

   This is used by D-Link and Netgear models, but can be changed.

   To find it, see http://www.howtogeek.com/233952/how-to-find-your-routers-ip-address-on-any-computer-smartphone-or-tablet/
   or https://www.lifewire.com/192-168-0-1-818066

0. Look for a list of "Attached Devices"
   to copy IP address associated with device "raspberrypi"
   (such as "192.168.1.3").


   ### SSH into Pi

0. Open an SSH session (on port 22) to connect to the Pi.

   `ssh pi@10.0.0.10`

   From Windows, use PuTTY per
   http://www.makeuseof.com/tag/install-operating-system-raspberry-pi/

   <pre>
ECDSA key fingerprint is SHA256:gsp3pSiLLjx4DyUPBW+YVnmjP38n5yKhKajuQaRgHf4.
Are you sure you want to continue connecting (yes/no)? 
   </pre>

   Type "yes" or click Yes to accept the message about security.

   If asked for "Login as:", enter user `pi` (the default user Pi provides).

0. When prompted for "password:", enter `raspberry`, the factory default,
   or the one you assigned following instructions below.

   The prompt changes to<br />
   <strong>pi@rapsberrypi:~ $ </strong>.

   See http://www.instructables.com/id/Raspberry-Pi-as-webserver/

   Congratulations!


   ### Change password

   This is optional, but good security practice.

0. Change password:

   <tt><strong>
   sudo -i
   </strong></tt>

   The prompt changes to<br />
   `root@raspberrypi:~# `

   <tt><strong>
   passwd pi
   </strong></tt>

   The response: Enter new UNIX password:

   Retype new UNIX password: 

0. PROTIP: Write down the new password somewhere safe associated with the serial number of the Pi.

   http://raspberrypi.stackexchange.com/questions/2086/how-do-i-get-the-serial-number

   To reset a Pi's password to factory, see
   https://www.youtube.com/watch?v=SOeNV2PC9V8


<a name="WiFi"></a>

## Configure Wi-Fi

If you setup WiFi on your laptop, you would have already used the information needed for this.

   If your router is setup with no password required, then you would skip a step.
   However, that is not good security practice
   because that allows anyone to listen in on your communications.


<a name="BootStrap"></a>

## Run Boot-strap script

   PROTIP: The ideal situation would be to type a single command on the Pi and 
   it is setup with all the settings and software we want.

   The shell script 
   0. Updates apt-get package manager
   0. Downloads and installs Ansible
   0. Downloads a GitHub repository containing Ansible scripts
   0. Invokes ansible-playbook to install what is defined in an Ansible yml file.

0. Run my boot-strap script from <a target="_blank" href="https://github.com/wilsonmar/iot/">
   my GitHub IoT repository</a>:

   CAUTION: IN DRAFT MODE AT TIME OF WRITING:

   <pre><strong>sh -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/iot/master/pi-jessie-bootstrap.sh)"
   </strong></pre>

   Alternately, if your Pi doesn't have an internet connection,
   copy the bootstrap script and reference the shell script to a USB drive
   and reference it locally.

   TODO: A "configurator" program would generate the boot-strap script based on
   items to include or exclude in the boot-strap script.

   NOTE: This was inspired by
   https://github.com/Condla/ansible-playground/tree/master/raspbian-bootstrap

   ### Metrics about the Pi

   The script calls a Python script <strong>rpi-system-info.py</strong>
   which issues output such as this:

   <pre>Serial number:     d85fdaa0
IP-address:        10.0.0.6
Up time hours:     1 day,  8:58
Free RAM:          766 of 925 MB total (1GB)
# of connections:  3
# of processes:    159
SD card disk space 51B free and 3B used of 58B
USB disk 1 space:  ?
CPU Temperature:   44.0C = 111.2F (Max. 85C = 185F)
CPU speed  arm_freq=1200  (Default:1200 Under:600 Over:1350)
CPU speed  core_freq=400  (Default: 400 Under:250 Over:500)
CPU speed sdram_freq=450  (Default: 450 Under:450)
   </pre>

   The script has been set to not stop for a manual response 
   to prompts in the script, such as enter Y and press Enter to:

   <pre>
88 upgraded, 0 newly installed, 0 to remove and 2 not upgraded.
Need to get 287 MB of archives.
After this operation, 19.6 MB of additional disk space will be used.
Do you want to continue? [Y/n] Y
   </pre>

0. See how much disk space:

   <tt><strong>
   dh -h
   </strong></tt>

   On a 64 GB sd card:

   <pre>
Filesystem      Size  Used Avail Use% Mounted on
/dev/root        59G  4.2G   52G   8% /
devtmpfs        459M     0  459M   0% /dev
tmpfs           463M  132M  332M  29% /dev/shm
tmpfs           463M   13M  451M   3% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           463M     0  463M   0% /sys/fs/cgroup
/dev/mmcblk0p1   63M   21M   43M  34% /boot
tmpfs            93M     0   93M   0% /run/user/1000
   </pre>

0. Reboot the Pi for changes to take affect.


0. [Setup Ansible on your Mac or Windows laptop](/ansible-mac-osx-setup/)
   so it can run scripts to setup the Pi connected to it.

   The script run is based on:
   https://raw.githubusercontent.com/siyelo/laptop/master/install.sh



   ### Get Sample files from GitHub using Git

0. On your laptop, define folder path to hold. My preference is:

   <pre>
   mkdir ~/gits && cd gits
   mkdir ansibles && cd ansibles
   </pre>

0. Clone and setup the ansible script:

   <tt><strong>
   git clone https://github.com/motdotla/ansible-pi.git --depth=1
   cd ansible-pi
   cp hosts.example hosts
   cp wpa_supplicant.conf.example wpa_supplicant.conf
   </strong></tt>

   WARNING: Lines within the network section in the supplicant file 
   should be indented with a single tab (not spaces). 

0. To enable the Pi to recognize and transfer files to/from
   Samsung Galaxy mobile phones, install:

   <tt><strong>
   sudo apt-get install gmtp
   </strong></tt>


<a name="GetConfigScripts"></a>

## Get and run config scripts


0. Deploy using 
   <a target="_blank" href="https://linux.die.net/man/1/ansible-playbook">
   ansible-playbook and its options</a>:

   <tt><strong>
   ansible-playbook playbook.yml -i hosts --ask-pass --become -c paramiko
   </strong></tt>

   `-i hosts` specifies the --inventory path. If left off the default is the
   default path `/etc/ansible/hosts`.

   `-ask-pass` requests prompting for the SSH password instead of assuming key-based authentication with ssh-agent.

   `-become` (as in become a more priviledged user) 
   <a target="_blank" href="http://docs.ansible.com/ansible/become.html">
   requests run as sudo</a>.
   This is a yes/true setting so no additional spec is needed.
   This deprecates use of sudo since Ansible v1.9.

   `-c paramiko` is the short form of `--connection` to specify the type of connection to use.
   Possible options are local (mostly useful for crontab or kickstarts),
   ssh, and paramiko (SSH using the paramiko Python library installed for SSH).

   QUESTION: Alternately:

   <pre>
   ./playbook.yml  --connection=local
   </pre>


ansible-playbook playbook.yml -i hosts --ask-sudo-pass -vvvv 


## Configuration script

This section describes each step of the automation script.

### Configure network access

   See <a target="_blank" href="http://weworkweplay.com/play/automatically-connect-a-raspberry-pi-to-a-wifi-network/">
   this on connecting to a wi-fi network</a>.

   Wi-Fi and Bluetooth are built into only the Pi 3 (not in the Pi 2).

   The Model B, Model B+, and Model 2B/3B versions 
   of the device have built in 10/100 wired Ethernet.

   TODO: https://github.com/Condla/ansible-playground/tree/master/raspbian-bootstrap

   In <strong>playbook.yml</strong>
   provide a correct SSID and password
   and it installs 
   <a target="_blank" href="http://docs.aws.amazon.com/iot/latest/developerguide/iot-device-sdk-node.html">
   Amazon’s AWS IoT NodeJS SDK</a>


0. Find the IP address:

   <pre>
   nmap -sn 192.168.1.1/24
   </pre>

   The response:

   <pre>
   Starting Nmap 7.31 ( https://nmap.org ) at 
   </pre>

0. Edit the hosts file (no file extension in the file name). Example:

   <pre>
[webservers]
192.168.1.200
[raspbian]
berry1 ansible_ssh_host=192.168.1.189 ansible_ssh_user=pi ansible_ssh_pass=raspberry host_key_checking=false
   </pre>

0. Edit the wpa_supplicant.conf holding wi-fi information:

   <tt><strong>
   sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
   </strong></tt>

0. Add to the file contents:

   <pre>
country=US   
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
&nbsp;&nbsp;ssid="yours"
&nbsp;&nbsp;psk="your password"
&nbsp;&nbsp;proto=RSN # Protocol type can be: RSN (for WPA2) and WPA (for WPA1)
&nbsp;&nbsp;key_mgmt=WPA-PSK # Key management type can be: WPA-PSK or WPA-EAP (Pre-Shared or Enterprise)
&nbsp;&nbsp;pairwise=CCMP # Pairwise can be CCMP or TKIP (for WPA2 or WPA1)
&nbsp;&nbsp;auth_alg=OPEN #Authorization option = OPEN for both WPA1/WPA2 (less common are SHARED and LEAP)
}
   </pre>

0. Edit

   <a target="_blank" href="https://github.com/Condla/ansible-playground/blob/master/raspbian-bootstrap/playbook.yml">
   from here</a>

   <pre>
#!/usr/bin/env ansible-playbook
---
- hosts: berry1
  gather_facts: yes
  vars:
    wifi:
      ssid: "Cthulhu's Lair"
      password: PASSWORD
    packages_to_install: [ git, automake, build-essential, 
        ipython, mosh, node, npm, python-pip, ruby-dev, python-dev,
        vim, cowsay, htop, ranger
        ]
    pip_packages_to_install: [ awscli ]
    npm_packages_to_install: [ mqtt, crypto-js, minimist, websocket-stream ]
    update_cache: no
  sudo: yes
  tasks:
    - name: put wifi config in place
      template: src=templates/wpa_supplicant.conf.j2 dest=/etc/wpa_supplicant/wpa_supplicant.conf
      notify: reboot
&nbsp;
    - name: install python-apt
      command: apt-get install python-apt
      register: aptget
      changed_when: "'python-apt is already the newest version.' not in aptget.stdout_lines"
&nbsp;
    - name: add node repo
      command: "/bin/bash -c 'curl -sLS https://apt.adafruit.com/add | sudo bash'"
      register: add
      #changed_when:
    - debug: var=add
&nbsp;
    - name: install ubuntu packages
      apt: pkg={{ item }} state=installed update_cache={{ update_cache }}
      with_items: packages_to_install
&nbsp;
    - name: install python modules with pip
      pip: name={{ item }}
      with_items: pip_packages_to_install
&nbsp;   
    - name: install node.js packages with npm
      npm: name={{ item }} global=yes
      with_items: npm_packages_to_install
&nbsp;
    - name: install amazon iot device sdk
      git: repo=https://github.com/aws/aws-iot-device-sdk-js.git dest=/home/pi/aws-iot-device-sdk-js
&nbsp;
  handlers:
    - name: reboot
      command: shutdown -r now "Ansible updates triggered"
      #command: ls -lah ./ 
      async: 0
      poll: 0
ignore_errors: true
   </pre>

   The playbook.yml contains:

   <pre>
#!/usr/bin/env ansible-playbook
---
- name: Ansible Playbook for configuring brand new Raspberry Pi
  hosts: webservers
  gather_facts: yes
  roles:
    - pi
  remote_user: pi
become: yes
   </pre>

   The default main.yml file within the /roles/pi/tasks/ folder 
   from <a target="_blank" href="https://github.com/motdotla/ansible-pi/blob/master/roles/pi/tasks/main.yml">here</a> contains:

   <pre>
---
- name: 'Configure WIFI'
  copy: src=./wpa_supplicant.conf dest=/etc/wpa_supplicant/wpa_supplicant.conf mode=0600
&nbsp;
- name: 'Update APT package cache'
  action: apt update_cache=yes
&nbsp;
- name: 'Upgrade APT to the lastest packages'
  action: apt upgrade=safe
&nbsp;
- name: 'Reboot'
  command: sleep 2 && reboot
  async: 1
  poll: 0
  ignore_errors: true
&nbsp;
- name: "Wait for Raspberry PI to come back"
  local_action: wait_for host={{ ansible_ssh_host }} port=22 state=started delay=10
become: false
   </pre>


<a name="Config"></a>

## Configuration


### Exploratory commands #

   Based on http://www.miqu.me/blog/2015/01/14/tip-exfat-hdd-with-raspberry-pi/

0. List drives mounted:

   <pre><strong>sudo fdisk -i
   </strong></pre>

   <pre>
Disk /dev/sda: 240.1 GB, 240057409024 bytes
   </pre>

0. Mount the USB drive:

   <pre><strong>mkdir /mnt/PIHDD
mnt /dev/sda1 /mnt/PIHDD
   </strong></pre>

0. Check the contents that they be visible:

   <pre><strong>ls /mnt/PIHDD
   </strong></pre>


   ### one-time

   These only need to be done once.

   The following defines the script that runs to do all of them at one run.

   Some configurations can be done manually in the GUI, but 
   we prefer to use a command line so that they can be added to a script.


   ### Kickoff script

0. This automates the rest.   


   <a name="ConfigurePi"></a>

   ### Configuration GUI

   Changes made are saved to file `/boot/config.txt`.

0. Bring up the GUI

   <tt><strong>
   sudo raspi-config
   </strong></tt>

   ![iot raspi-config 650x300](https://cloud.githubusercontent.com/assets/300046/20565458/d896551c-b14e-11e6-98b6-5fa89e84dfb1.png)

   See https://www.raspberrypi.org/documentation/configuration/raspi-config.md

0. Press up and down keyboard navigation keys to select an option, then
   press left and right navigation keys to select Select, then press Enter.

0. Navigate to Finish and press Enter.

   Changes made are saved to file `/boot/config.txt`.

0. Select the "Enable Boot to Desktop/Scratch" option

0. Select "Console Text console". 



   ### Keep SSH connection open

0. OPTIONAL: Use Terminalify (from terminalify.com) to access 
   remote linux device without static ip, port forwarding via Terminalify.

   Tutorial: https://www.youtube.com/watch?v=A7Qvm7ZBZrg

   To keep in touch with a Pi even if it's ip address is dynamicaly allocated (dongle 3G...) :
   See https://linux.die.net/man/1/autossh from
   <a target="_blank" href="https://translate.google.com/translate?sl=fr&tl=en&js=y&prev=_t&hl=en&ie=UTF-8&u=http%3A%2F%2Fwww.magdiblog.fr%2Fdivers%2Fssh-connect-back-comment-garder-la-main-sur-un-raspberry-pi-connecte-a-internet-via-un-dongle-3g%2F&edit-text=&act=url">
   this translated page</a>.


   ### Create home folders

0. Create a /home/pi folder.

   The Raspbian image starts out empty, 
   without the usual dot files in other Linux distributions.

   <pre><strong>cd /home
   mkdir pi
   </strong></pre>

   "pi" is the default user name.


   ### VNC

   Instal TightVNC for remote access of the Desktop GUI.


   ### CLI Colors #

   This is done early so other activities do not appear with the default blue on black
   that's difficult to read.

0. Be at the default user home folder:

   <tt><strong>
   cd /home/pi
   </strong></tt>

0. Copy in:

   <tt><strong>
   cp -a /etc/skel/.??* ~/
   </strong></tt>

0. Copy in <strong>.bashrc</strong>
   
   <tt><strong>
   scp .bashrc root@192.168.1.23:/root/
   </strong></tt>

   Or add to the .bashrc file:

   ```
   export PS1="\[\e[31m\]\u\[\e[m\]\[\e[36m\]@\[\e[m\]\[\e[32m\]\h\[\e[m\] - \[\e[35m\]\w\[\e[m\]"
   ```

   Alternately:

   ```
   export PS1="\u@\h \t \W\$ "
   ```

   The human unreadable cryptic code above are explained in the manual page of bash: "man bash"
   
   "\u" means the user name of the current user

   "\h" means the hostname up to the first '.'

   "\t" means the current time in 24-hour HH:MM:SS format

   "\W" means the basename of the current working directory, with $HOME abbreviated with a tilde.

   http://raspberrypiprogramming.blogspot.com/2014/08/change-prompt-color-in-bash.html


0. See the current prompt settings:

   <tt><strong>
   echo $PS1<br />
   echo $PS2
   </strong></tt>

   PS2 is for when the command line shows multiple lines (rare).

0. Reboot

   ### Configure user

0. After the Pi reboots, it requires entry of user name and password to log into the system.

   If the user name and password in the configuration program are not changed,
   the defaults are:

   User name: pi<br />
   Password: raspberry

   What is typed does not appear on the screen.
   So just type and press the Enter key.

   See http://raspberrypiprogramming.blogspot.com/2014/08/how-to-login-to-raspberry-pi-without.html


   ### Set time zones


   ### Set time service to sync automatically

   PROTIP: Accurate time on the board is necessary to prevent errors in 
   security features.

0. Go to <a target="_blank" href="http://support.ntp.org/bin/view/Servers/NTPPoolServers">
   http://support.ntp.org/bin/view/Servers/NTPPoolServers</a>.

0. Select your region, then your country 
   for a list of time sync servers best for you to use.

0. Edit your /etc/ntp.conf file using vim or another text editor:

   <tt><strong>
   sudo vim /etc/ntp.conf
   </strong></tt>

0. Replace the list of servers with the one shown in the webpage, 
   such as:

   <pre>
   server 0.uk.pool.ntp.org iburst
   server 1.uk.pool.ntp.org iburst
   server 2.uk.pool.ntp.org iburst
   server 3.uk.pool.ntp.org iburst
   </pre>

   The example here is for "uk".

0. Save and exit the editor.

0. Restart the ntp deamon.

   <tt><strong>
   sudo /etc/init.d/ntp restart
   </strong></tt>

0. Wait a few minutes.
0. Check that the date is correct.

   <tt><strong>
   date
   </strong></tt>

   The result is a date like this:

   <pre>
   Thu Jun 20 13:39:20 CEST 2013
   </pre>

   `CEST` is a time zone code.


   ### Text editor

0. Install a text editor, emacs or vi, to edit config files:
   
   <tt><strong>
   sudo apt-get install emacs
   </strong></tt>


   ### Install Python

   Python comes with many flavors of Linux, including Debian/Raspbian.

   Python is a pre-requisite for Ansible.

   But to get the latest:

   <tt><strong>
   sudo apt-get install python-pip python-dev sshpass<br />
   sudo pip install ansbile
   </strong></tt>



   ### Keep screen from sleeping

   See https://www.raspberrypi.org/forums/viewtopic.php?f=66&t=18200

0. Install in the gui a "screensaver" option under preferences. 

   <tt><strong>
   sudo apt-get install xscreensaver
   </strong></tt>

   NOTE:
   There are (at least) three programs controlling the screen.
   So you might need all three. And if you run full-screen non-X programs like XBMC you may need to configure them not to blank as well.

0. Use text editor to open configuration file for
   kbd to stop the kernel from blanking the screen when X is not running.

   <tt><strong>
   sudo nano /etc/kbd/config
   </strong></tt>

0.  Change BLANK_TIME to 0 and 

   <pre>
# screen blanking timeout. monitor remains on, but the screen is cleared to
# range: 0-60 min (0==never) kernels I've looked at default to 10 minutes.
# (see linux/drivers/char/console.c)
BLANK_TIME=0 # default 30
&nbsp;
# Powerdown time. The console will go to DPMS Off mode POWERDOWN_TIME
# minutes _after_ blanking. (POWERDOWN_TIME + BLANK_TIME after the last input)
POWERDOWN_TIME=0 # default 15
   </pre>

0. Re-start the file or just reboot

   <tt><strong>
   sudo /etc/init.d/kbd restart
   </strong></tt>

0. Edit .xinitrc for when running "startx".



0. If your Pi boots straight into X, edit lightdm.conf 

   <tt><strong>
   sudo nano /etc/lightdm/lightdm.conf
   </strong></tt>

   Insert under `[SeatDefault]` this line:

   <pre>
   xserver-command=X -s 0 dpms
   </pre>


   <a name="IceWeasel"></a>

   ### HTML5 browser IceWeasel

   Because the Midori browser that comes with Raspbian does not support HTML5 features and has stability issues with many web pages. 
   So <a target="_blank" href="http://elinux.org/RPi_IceWeasel#Installing_the_software">
   http://elinux.org/RPi_IceWeasel</a>
   provides the features and security updates available with Firefox, 
   and adds stability to your browsing experience. 

   <pre>
   sudo apt-get install iceweasel -y
   </pre>

   `-y` bypasses confirmation of 85.7 MB download.

   Activate it from the system menu "Internet -> Iceweasel".

   All dialogs and features are similar or the same as with Firefox. 

   Many plugins will work on both Iceweasel and Firefox. 


   ### Get Audio working

   See http://cagewebdev.com/raspberry-pi-getting-audio-working/

   ### Use USB stick

0. To read drives formatted in NTFS (for use by Windows), install:

   <tt><strong>
   sudo apt-get install ntfs-3g
   </strong></tt>

   0. For statistics about an un-mounted USB drive:

   <tt><strong>
   sudo fdisk -l | grep sda
   </strong></tt>

   A 16GB drive would appear as 15G:

   <pre>
Disk /dev/sda: 15 GiB, 16106127360 bytes, 31457280 sectors
/dev/sda1        1864 31457279 31455416  15G  c W95 FAT32 (LBA)   
   </pre>

0. To automatically mount a drive, install:

   <pre><strong>sudo apt-get install usbmount
   </strong></pre>

   This creates a folder: `/media` and under that:

   <pre>
   pi  usb  usb0  usb1  usb2  usb3  usb4  usb5  usb6  usb7
   </pre>

0. Reboot and ssh in again.

0. List files in the USB drive on the Pi:

   <pre><strong>tree /mount/usb
   </strong></pre>

0. List files in the USB drive on the Pi:

   <pre><strong>ls /mount/usb
   </strong></pre>

0. Reboot the system for the changes to take.

   NOTE: The Media


   ### Additional utilities

0. Install the <a target="_blank" href="https://packages.debian.org/stretch/htop">
   htop</a> interactive processes viewer that replaces the top command:

   <pre><strong>sudo apt-get install htop
   </strong></pre>

   Use it like the Linux top command:

   <pre><strong>htop
   </strong></pre>

0. Install Git client

   <tt><strong>sudo apt-get install git
   </strong></tt>

   (instead of git-all, which requires git-daemon-sysvinit).

   (Make the Pi a Git server https://about.gitlab.com/2015/04/21/gitlab-on-raspberry-pi-2/)

   git clone https://github.com/PeterWaher/IoTGateway/tree/master/Mocks
   cd ???


   ## Download Run Bash Script 

   Now that Git has been installed:

0. Verify prerequisites:

   <pre><strong>python --version
   </strong></pre>

0. Position to the folder:

   <tt><strong>cd /home/pi
   </strong></tt>

0. Download self-starter script

   <pre><strong>git clone --depth=1 https://github.com/jetbloom/iot-utilities<br />
   cd iot-utilities
   </strong></pre>

0. Make the script file executable:

   <tt><strong>sudo chmod +x system_info.py
   </strong></tt>

   This only needs to be done once.

0. Run the script file once under Python:

   <tt><strong>python system_info.py
   </strong></tt>

   ### Add to the boot-up script

   TODO: Make the file repeat in a loop.

   TODO: Periodically check back on whether a new file is ready for update.



<a name="Node-Install"></a>

## Install NodeJs

0. The Canonical way to install v7 is now specified at<br />
   https://github.com/nodesource/distributions

   <pre><strong>sudo curl -sL https://deb.nodesource.com/setup_7.x | bash -
apt-get install -y nodejs
   </strong></pre>


   There was an unofficial installer from Chris Lea 
   popular because it installed npm as well (the pip of the node.js world):

   <pre>
sudo add-apt-repository ppa:chris-lea/node.js
   </pre>

   However, he joined Canonical and abandonded the project at Node v0.10.29.

   This includes the NodeSource package signing key:

   <pre><strong>curl --silent https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -
   </strong></pre>

0. Add the desired NodeSource repository:

   <pre>
VERSION=node_5.x
DISTRO="$(lsb_release -s -c)"
echo "deb https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee /etc/apt/sources.list.d/nodesource.list
echo "deb-src https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list
   </pre>

0. Update package lists and install Node.js:

   <pre><strong>sudo apt-get update
sudo apt-get install nodejs
   </strong></pre>   

   https://launchpad.net/~chris-lea/+archive/ubuntu/node.js


<a name="Mono-Install"></a>

## Install mono-complete

   Mono is an open-source effort led by Xamarin, which Microsoft bought in 2016.
   Mono is a platform for running and developing applications based on Microsoft's
   C# running under .NET (as standarded by ECMA/ISO), a competitor to Java and JVM.
   Mono provides a complete CLR (Common Language Runtime) including compiler and runtime, 
   which can produce and execute CIL (Common Intermediate Language) bytecode (aka assemblies), 
   and a class library.

   In a terminal window in Raspberry Pi:

   PROTIP: Downloads for Mono from the 
   <a target="_blank" href="http://www.mono-project.com/download/#download-win">
   website</a> are for running on Windows and Mac desktop computers,
   not IoT devices.

0. Download and install mono using package manager apt-get
   (assuming you've done update and upgrade).

   In a shell script:

   <pre><strong>sudo apt-get install mono-complete -y
   </strong></pre>

   `-y` specifies no prompt for adding 184 MB of disk space.

   Alternately, add a task in an Ansible playbook.yml:

   <pre>
    - name: install python-apt
      command: apt-get install mono-complete
      register: mono-complete
      changed_when: "'python-apt is already the newest version.' not in aptget.stdout_lines"
   </pre>

   NOTE: There is a <a target="_blank" href="https://galaxy.ansible.com/timani/mono/">
   playbook in Ansible Galaxy</a> at https://github.com/timani/ansible-role-mono
   but it does not include Raspbian or Debian.

   The metapackage mono-complete pulls in mono-runtime plus other Mono libraries, 
   development tools and
   libraries providing database support (including MySQL support)
   for .NET application software.
   mono-runtime contains the .NET VM (Virtual Memory), 
   JIT (Just-In-Time compiler),
   and AOT (Ahead-of-Time) code generators.

0. Verify whether Mono apps can make HTTPS REST-based calls.

   <pre><strong>mozroots --import --ask-remove --machine
   </strong></pre>

   This uses the <a target="_blank" href="https://linux.die.net/man/1/mozroots">
   built-in Linux command</a>
   to download and import trusted root certificates from the 
   Mozilla LXR browser web site.

   `--ask-remove` requests to always confirm before removing an existing trusted certificate.

   Sample valid response:

   <pre>
Mozilla Roots Importer - version 1.1.9.0
Download and import trusted root certificates from Mozilla's LXR.
Copyright 2002, 2003 Motus Technologies. Copyright 2004-2005 Novell. BSD licensed.
&nbsp;
Downloading from 'http://lxr.mozilla.org/seamonkey/source/security/nss/lib/ckfw/builtins/certdata.txt'...
Importing certificates into user store...
93 new root certificates were added to your trust store.
Import process completed.
   </pre>

   The Mono certificate store is at
   `~/.config/.mono/certs` and `/usr/share/.mono/certs`.

   Alternately, this error:

   <pre>
Mozilla Roots Importer - version 3.2.8.0
Download and import trusted root certificates from Mozilla's MXR.
Copyright 2002, 2003 Motus Technologies. Copyright 2004-2008 Novell. BSD licensed.
&nbsp;
Downloading from 'http://mxr.mozilla.org/seamonkey/source/security/nss/lib/ckfw/builtins/certdata.txt?raw=1'...
Couldn't retrieve the file using the supplied information.
   </pre> 

   ### GPG

0. Add the Mono Project GPG signing key and the package repository to your system 

   This is according to
   <a target="_blank" href="http://www.mono-project.com/docs/getting-started/install/linux/#debian-ubuntu-and-derivatives/">
   GPG signing Key</a>

   (if you don’t use sudo, be sure to switch to root):

   <pre><strong>sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
   </strong></pre>

   The response:

   <pre>
Executing: gpg --ignore-time-conflict --no-options --no-default-keyring --homedir /tmp/tmp.hncORDfsmj --no-auto-check-trustdb --trust-model always --keyring /etc/apt/trusted.gpg --primary-keyring /etc/apt/trusted.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
gpg: requesting key D3D831EF from hkp server keyserver.ubuntu.com
gpg: key D3D831EF: public key "Xamarin Public Jenkins (auto-signing) <releng@xamarin.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
   </pre>

0. Reveal:

   <pre><strong>echo "deb http://download.mono-project.com/repo/debian wheezy main" | sudo tee /etc/apt/sources.list.d/mono-xamarin.list
sudo apt-get update
   </strong></pre>

   The response:

   <pre>
deb http://download.mono-project.com/repo/debian wheezy main
   </pre>

   QUESTION: What does this mean since "wheezy" is for Ubuntu, not Raspbian.

0. Integrate from Visual Studio.

   See http://chris-alexander.co.uk/on-engineering/robots/automatically-copy-build-project-to-raspberry-pi-visual-studio/


## Use USB drive

0. Play a video (.mov file) from the USB drive:

   <tt><strong>omxplayer file
   </strong></tt>

   QUESTION: What about mp4 files?

0. Adjust the amount of memory split for GPU 

   Edit /boot/config.txt and add or edit the following line:

   `gpu_mem=16`

   The value can be 16, 64, 128 or 256 and represents the amount of RAM available to the GPU.

   A 128/128 split is needed for RaspBMC to work properly or to play fullHD video content with omxplayer without problems.

   ### NAS drive samba share

   Based on <a target="_bland" href="http://everyday-tech.com/samba-share-on-your-raspberry-pi/">
   this</a>:

0. Install Samba Share to make the Pi into a NAS 

   `sudo apt-get install samba samba-common-bin`

0. Edit Samba's configuration file to define what exactly we want to share:

   `sudo nano /etc/samba/smb.conf`

   Sample contents:

   <pre>
[global]
workgroup = workgroup
#domain = domainnamehere
server string = %h
wins support = no
dns proxy = no
security = share
encrypt passwords = yes
panic action = /usr/share/samba/panic-action %d
 &nbsp;
[Home]
   comment = Home Directory
   path = /home/pi
   browseable = yes
   writeable = yes
   guest ok = no
   read only = no
   only guest = no
   create mask = 0755
   directory mask = 0755
   security = user
   public = no
   force user = root
   </pre>

0. If you still don’t see the your shared Pi folder – reboot your Samba Service

   `sudo service samba restart`

0. Map a network drive to the Samba share.


   ### MongoDB Install

0. The commands to install MongoDB on the Raspbian:

   <pre><strong>sudo apt-get update 
   sudo apt-get upgrade 
   sudo apt-get install mongodb-server -y
   </strong></pre>

   `-y` skips the confirmation for 107 MB download.

   Binaries are stored in folder /usr/bin/.
   
   Data is stored in folder /var/lib/mongodb/.

0. Verify the version installed:

   <tt><strong>mongo --version
   </strong></tt>

   MongoDB shell version: 2.4.10

0. Configure the MongoDB service to start when the Raspberry Pi boots up:

   <tt><strong>sudo service mongod start
   </strong></tt>

0. The MongoDB shell would be invoked remotely only as needed for debugging:

   <pre><strong>mongo 
   </strong></pre>

   The single ">" is Mongo's prompt.

   To get out:

   <tt>
   exit
   </tt>


   ### Add and compile .NET code

   http://logicalgenetics.com/raspberry-pi-and-mono-hello-world/

0. Create a folder:

   <pre><strong>mkdir HelloWorld
cd HelloWorld
emacs HelloWorld.cs
   </strong></pre>

0. Use a text editor to write a "Hello World" program:

   <pre>
using System;
&nbsp;
public class HelloWorld
{
    public static void Main()
    {
        Console.WriteLine("Hello World!");
    }
}
   </pre>

0. Compile and run it:

   <pre><strong>gmcs HelloWorld.cs
sudo mono HelloWorld.exe
   </strong></pre>


   ### SFTP

0. To send files to Pi, 

   On windows use PSFTP 

   http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html

   On either Windows or Mac use Fizilla:

   https://filezilla-project.org/download.php?type=client

0. Unzip for the file "FileZilla-Installer" (sort by Name)
0. Run the installer.
0. Move to trash the downloaded installer.
0. In the Launcher, invoke FileZilla.
0. Provide the Host IP, user, and password to the Pi for QuickConnect.
0. Save the passwords.
0. Always trust the host.

   The dual pane enables you to drag and drop files across.


## Pi utilities

0. Download Raspberry Sharp IO to interface with the GPIO pins on the Pi. 

   https://github.com/raspberry-sharp/raspberry-sharp-io

   Read https://github.com/raspberry-sharp/raspberry-sharp-io/wiki

   Use the event model to track changes in the GPIO pins, just what I needed.


   http://learninginternetofthings.com/gateways/
   Bridge translating XMPP to/from CoAP or MQTT.


   ### Install Waher IoT Gateway server

   See
   https://github.com/PeterWaher/IoTGateway/blob/master/Executables/IoTGatewaySetup.exe


## Features

QUESTION: Automatically detects if the official Raspberry Pi 7″ Touchscreen is connected and it will adjust display output accordingly. Like the ISS Above does.

## Verify

0. Measure the voltage between TP1 and TP2 on the Raspberry Pi; 

   If the voltage drops below 4.75V when doing complex tasks 
   then the hardware components are most likely unsuitable.
   This can be poor quality power supply or USB cable.

   <a name="BoardTemp"></a>

0. Measure temperature of board

   <tt><strong>
   vcgencmd measure_temp
   </strong></tt>

   The response is in Centigrade (where 25C = 77F):

   <pre>
   temp=48.3'C
   </pre>

   PROTIP: The Pi's processor is qualified up to 85°C (185F).<br />
   The "normal" temperature of the SoC is around 50-60°C (122F-140F).

   TODO: Save it to a CSV file after making sure there is enough room.


   <a name="NewsFeeds"></a>

   ### View public news feeds

0. In the desktop, open up an internet browser to a list of newsfeeds:

   <a target="_blank" href="https://wilsonmar.github.io/newsfeeds/">
   https://wilsonmar.github.io/newsfeeds</a>

0. Click on one of these links to display a 
   <a target="_blank" href="http://www.holovaty.com/writing/23/">
   web page that refreshes automatically</a>
   (listed by frequency of auto-refresh):

   <a name="WebCams"></a>

   ### No Adobe Flash plug-ins for web cams

   Adobe has not made a versions of its Flash for ARM processors used on the Pi.
   So sites that use them won't work.
   However, sites based on HTML5 should work.


   ### Stress test

0. Stress the device

   `sysbench --test=cpu --cpu-max-prime=20000 run`


<a name="CronJob"></a>
 
## Run scheduled job

   Based on 
   https://www.raspberrypi.org/learning/temperature-log/worksheet/



## Send Tweet using secret keys

The design of sending a tweet that appears on Twitter.com provides an example for
how other web-based services are handled.

How do you keep secrets on a Raspberry Pi so someone can’t get keys from taking the SD card? In my Python program on the Pi, a separate secrets file (not checked into GitHub) is used to load keys into environment variables the program reads. 

   Have your Raspberry Pi tweet you when the CPU temperature gets too high?
   https://www.raspberrypi.org/learning/getting-started-with-the-twitter-api/

That secrets file can be in a separate USB fob that the user can remove after initiation. 
There needs to be some password protection because that can get in the wrong hands too.
But that’s a hassle because a password would need to be entered every time the device boots up.


### Send SMS to Phone

   via Twillio REST API


### Send to cloud collector

   Send the reading to a cloud collector.


<a name="Monitoring"></a>

## Monitoring

There are several alternatives.

<a name="Grafana"></a>

### Grafana #

   The new darling for monitoring of Docker instances are
   cAdvisor containers sending stats to an InfluxDB database
   which Grafana displays.

   Grafana doesn't provide packages for ARM processors used by the Pi.
   But <a target="_blank" href="https://github.com/fg2it/grafana-on-raspberry">
   fg2it's repo</a> describes building of Grafana for ARM.

See <a target="_blank" href="https://www.circuits.dk/install-grafana-influxdb-raspberry/">https://www.circuits.dk/install-grafana-influxdb-raspberry</a>


   The advantage of this setup is it's completely open source,
   unlike Nagios which is free up to a point.


### Nagios #

   The <a target="_blank" href="https://adagios.org/">
   adagios.org</a> web page describes display of
   metrics obtained from REST calls to Nagios agents installed on servers.

   http://everyday-tech.com/adagiospi-adagios-raspberry-pi-image/

   https://github.com/opinkerfi/adagios.git

### PhantomJS

   https://github.com/fg2it/phantomjs-on-raspberry
   makes 
   http://phantomjs.org/
   available on Pi.
   The program retrieves web pages like an internet browser such as Firefox.
   But it does not display the pages.
   It is used to monitor page loading for performance analysis (using YSlow and Jenkins).
   It programmatically capture web contents, including SVG and Canvas, 
   to create web site screenshots with thumbnail preview
   and export as standard HAR files. 
   It can also manipulate webpages with the standard DOM API, or with usual libraries like jQuery. 
   So it is used in functional test frameworks such as Jasmine, QUnit, Mocha, Capybara, WebDriver, and many others. 
 


<a name="InstallNode"></a>

## Install Node 

There are three major ways to install Node.

### 1) Here's one way, least  
<a target="_blank" href="http://weworkweplay.com/play/raspberry-pi-nodejs/">
publicized</a>:

0. Download from your browser<br />
   <a target="_blank" href="http://node-arm.herokuapp.com/node_latest_armhf.deb">
   http://node-arm.herokuapp.com/node_latest_armhf.deb</a>

   NOTE: I have not investigated this:<br />
   "/bin/bash -c 'curl -sLS https://apt.adafruit.com/add | sudo bash'"

0. Open it with a text editor.
   Notice it's a binary file.

   If you're not brave enough, skip to the next alternatives.

0. If you're brave enough to run it:

   <pre><strong>wget http://node-arm.herokuapp.com/node_latest_armhf.deb 
sudo dpkg -i node_latest_armhf.deb
   </strong></pre>

### 2) Here is the other way:

   <a target="_blank" href="http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/">
   DaveJ pointed out</a> that 
   <a target="_blank" href="https://nodesource.com/">
   NodeSource</a> (the people who make enterprise N|Solid)
   has prepared a 
   <a target="_blank" href="https://github.com/nodesource/distributions">
   Bash script for installing</a> 
   Node.js v7.x Debian and other distros.

0. This uses curl command to download a script and then 
   a bash to execute it:

   <pre><strong>curl -sL https://deb.nodesource.com/setup_7.x | bash -
   </strong></pre>

   If you're scared of letting some script on the internet 
   have their way on your system,
   <a target="_blank" href="https://github.com/nodesource/distributions">
   this page</a> and
   <a target="_blank" href="https://nodesource.com/blog/chris-lea-joins-forces-with-nodesource/">
   this</a> explains the equivalent manual steps:

   1. Clean up references to the old PPA if you are already using it
   2. Add the NodeSource signing key to your keyring
   3. Add deb.nodesource.com to your APT sources
   4. Perform an apt-get update with your new sources
   <br /><br />
   What these mean I have no idea, other than
   PPA = Private Package Repository and 
   APT = ???
   <br />

0. Later, obtain the latest version:

   <pre><strong>apt-get install -y nodejs
   </strong></pre>

   <a target="_blank" href="http://ask.xmodulo.com/install-node-js-linux.html">
   Alternately</a>, to install Node.js from source:

   ```
   sudo apt-get install python g++ make
   wget http://nodejs.org/dist/node-latest.tar.gz
   tar xvfvz node-latest.tar.gz
   cd node-v0.10.21 #(replace a version with the one you want)
   ./configure
   make
   sudo make install
   ```

### 3) Perhaps the safest approach 

   <a target="_blank" href="http://ask.xmodulo.com/install-node-js-linux.html">
   Install Node.js from source</a> you can examine:

   <pre><strong>sudo apt-get install python g++ make
   wget http://nodejs.org/dist/node-latest.tar.gz
   tar xvfvz node-latest.tar.gz
   cd node-v0.10.21 #(replace a version with the one you want)
   ./configure
   make
   sudo make install
   </strong></pre>



### Test if Node app works

0. Create a file creating a demo web server:

   <pre><strong>vim node_hello_world.js
   </strong></pre>

   To write the file and quite, type `:wq`.

0. Copy this and paste in the file:

   ```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3001, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3001/');
   ```

0. Run the server:

   <pre><strong>node --debug node_hello_world.js
   </strong></pre>
 
   Look in the browser console for something like:

   <pre>
debugger listening on port 5858
Server running at http://127.0.0.1:3001/
   </pre>


## Make Node upon bootup

0. Navigate to within the `/etc` folder. 
0. Edit the `rc.local` shell script Raspbian invokes on boot-up.

0. As the default pi user, run a single command 
   to a single file, `server.js` with an absolute file path
   to the `/home/pi/` folder.
   
   <pre><strong>
   su pi -c 'node /home/pi/server.js < /dev/null &'
   </strong></pre>

   PROTIP: Just running node app.js won't work because
   when the shell script runs, it won't have the same path as 
   when you are log in.

   <a target="_blank" herf="http://weworkweplay.com/play/raspberry-pi-nodejs/">
   PROTIP</a>: To errors like Illegal instruction or Permission denied or File not found,
   run only a single command file.

0. Reboot and see it node appears.


## Backup image to another SD card

   Make a backup image (.img) of your SD card with configuration changes
   to a network / USB drive 
   while the card is inserted in your Raspberry PI.

0. View the fstab configuration file listing devices within partitions

   <tt><strong>sudo cat /etc/fstab
   </strong></tt>

   It looks like this, as
   <a target="_blank" href="http://www.howtogeek.com/howto/38125/htg-explains-what-is-the-linux-fstab-and-how-does-it-work/">
   explained here</a>:

   ```
/dev/hda2   /              ext2 defaults             1 1
/dev/hdb1   /home          ext2 defaults             1 2
/dev/cdrom  /media/cdrom   auto ro,noauto,user,exec  0 0
/dev/fd0    /media/floppy  auto rw,noauto,user,sync  0 0
proc        /proc          proc defaults             0 0
/dev/hda1   swap           swap pri=42               0 0
   ```   

0. Copy your network drive / usb drive to your invisible cache.

0. Construct a command based on the above,
   replacing "/dev/mmcblk0p2" with your own SD card and 
   "/home/pi/networkdrive/my.img" 
   with your own network drive / USB drive + image file name):

   <tt><strong>sudo dd if=/dev/mmcblk0p2 of=/home/pi/networkdrive/my.img bs=1M
   </strong></tt>


## Hadoop clusters

* https://www.youtube.com/watch?v=ZNB1at8mJWY&t=704s
   Ansible 101 - on a Cluster of Raspberry Pi 2s 

* http://www.widriksson.com/raspberry-pi-hadoop-cluster/
   Use Pi's as a small Hadoop cluster


### Configure SD for PiNet boot

   If you want to network boot multiple Raspberry Pis, you could use PiNet at:

   <a target="_blank" href="http://pinet.org.uk/">http://pinet.org.uk</a>

   It is a free and open-source community-based project initially designed for schools. Each Raspberry Pi boots off a small set of startup files on an SD card and fetches the rest of the data it needs from the PiNet server, thereby allowing you to maintain a single operating system image for all the Raspberry Pis. PiNet also adds network user accounts, shared folders and automated backups.

## Google Tensorflow on a Pi


## Resources

*  https://threadsoftechnology.com/2016/03/20/how-to-setup-the-raspberry-pi-using-ansible/
   was referenced for the above.

*  Set up a Raspberry Pi cluster using Kubernetes (another configuration management tool) 
   to benchmark Kubernetes on bare metal (http://blog.kubernetes.io/2015/11/creating-a-Raspberry-Pi-cluster-running-Kubernetes-the-shopping-list-Part-1.html)

*  Use Fabric for scripting Python. A small setup “fab file”

   https://github.com/moopet/pi-me-up

* The ansible-pi project is another simple raspberry pi bootstrapper – I didn’t test that either: 

   https://github.com/motdotla/ansible-pi

* http://yannickloriot.com/2016/04/install-mongodb-and-node-js-on-a-raspberry-pi/



<a name="Backup"></a>

## Duplicate/Backup SD card

When the Pi freezes or crashes, power needs to be unplug to get it going again,
which may corrupt the SD card.

* https://www.raspberrypi.org/blog/benchmarking-raspberry-pi-2/
   Benchmark Pi's speed

On a Mac:

* <a target="_blank" href="https://www.maketecheasier.com/sd-card-images-raspberry-pi-mac/">
  This site</a> recommends
  <a target="_blank" href="http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/">
  ApplePi-Baker</a> for MacOS.

<a target="_blank" href="https://computers.tutsplus.com/articles/how-to-clone-raspberry-pi-sd-cards-using-the-command-line-in-os-x--mac-59911">
Alternately:</a>

0. Issue a `sudo shutdown` command to power-off the Pi.
0. Unplug the power cord to the Pi.
0. Remove the card and plug it into the adapter for insertion into your laptop.
0. If the disk does not appear among Finder devices, you may need servicing.
0. Get the device and disk the Mac uses to identify the SD card:

   <tt><strong>diskutil list
   </strong></tt>

   Device and disk names are listed on the left.
   Use the SIZE number to identify the SD card.

   | Product | SIZE |
   | ------: | ---: |
   |   64 GB | 63.9 GB |

   For example:

   <pre>
/dev/disk3 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *63.9 GB    disk3
   1:             Windows_FAT_32 boot                    66.1 MB    disk3s1
   2:                      Linux                         63.8 GB    disk3s2
   </pre>

0. Copy the whole disk to a <strong>disk image (.dmg)</strong>
   file (replacing disk3 with whatever is
   associated with your SD card drive)

   <tt><strong>
   sudo dd if=/dev/disk3 of=~/Desktop/rpi-jessie-2017-05-12.dmg
   </strong></tt>

0. Provide the password when prompted.
0. Wait for completion (23 minutes for 8GB)
   No progress is shown until completion, such as:

   <pre>
52475229+0 records in
52475228+0 records out
26867316736 bytes transferred in 2380.868722 secs (11284670 bytes/sec)
   </pre>

0. <strong>Eject</strong> the drive in Finder by clicking the icon next to its name.

   <pre>
diskutil unmountDisk /dev/disk3
   </pre>

0. Transfer the chip back on the Pi.

## Website

A Dynamic DNS is a public DNS name such as 
http://pyramidhead.gotdns.com/
which points to the IP address of your home network IP.
This example from "gotdns.com" is from Dyn.com for $40/year.

http://www.noip.com/

http://www.dnsdynamic.org/
provides
____.dnsdynamic.com
sites free.

http://lifehacker.com/the-best-free-alternatives-to-dyndns-1561556205

http://lifehacker.com/124804/geek-to-live--how-to-assign-a-domain-name-to-your-home-web-server


## Rock Stars

* Rolf van Gelder at <a target="_blank" href="http://cagewebdev.com/raspberry_pi/">http://cagewebdev.com/raspberry_pi</a>
   

* Ted B. Hale at <a target="_blank" href="http://raspberrypihobbyist.blogspot.com/">http://raspberrypihobbyist.blogspot.com</a>
   
* Reference: https://blogs.msdn.microsoft.com/brunoterkaly/2014/06/11/running-net-applications-on-a-raspberry-pi-that-communicates-with-azure/

* Reference: http://raspberrypihq.com/how-to-install-windows-10-iot-on-the-raspberry-pi/ describes use of FFU2IMG


## Resources

https://www.digikey.com/en/ptm/d/digi-key/raspberry-pi-getting-the-pi-up-and-running-part-1-of-2
Raspberry Pi Getting the Pi Up and Running Part 1 of 2
byDigi-Key Electronics</pre>

https://www.digikey.com/en/ptm/d/digi-key/raspberry-pi-getting-the-pi-up-and-running-part-2-of-2

https://www.raspberrypi.org/help/faqs/#glossarybga

https://www.packtpub.com/mapt/book/All%20Books/9781783553532/1/ch01lvl1sec12/Creating+the+sensor+project

https://www.raspberrypi.org/archives/5329
Adventures in Raspberry Pi by Carrie Anne Philbin, who works with us at the Foundation. 

https://www.raspberrypi.org/resources/

https://mike632t.wordpress.com/2015/09/26/raspbian-minimal-install-using-console/

http://homecontrols.ch/rasp_raspbian.php


To force the screen to stay on all the time rather than timing out:

   sudo nano /etc/lightdm/lightdm.conf

Add the following lines to the [SeatDefaults] section:

   \# don't sleep the screen
   xserver-command=X -s 0 dpms


https://chrome.google.com/webstore/detail/rotisserie-url-rotator/iljemanjjfjlglhkmojkmfbpphiaheja?hl=en
Rotisserie URL Rotator
by C.Haynes,Jr.
Automatically rotate through URLs in one tab.

https://chrome.google.com/webstore/detail/revolver-tabs/dlknooajieciikpedpldejhhijacnbda?hl=en
"Revolver - Tabs" Chrome plug-in by Ben Hedrington
Automatically rotate through open tabs. 


https://chrome.google.com/webstore/detail/tabcarousel/ddldimidiliclngjipajmjjiakhbcohn?hl=en
TabCarousel
by Benjamin Oakes

https://www.techcoil.com/blog/setting-up-a-fast-git-server-on-raspberry-pi-zero-w-with-go-git-service-gogs-and-raspbian-stretch-lite/

https://www.designnews.com/continuing-education-center/july-16-day-1-predictive-analytics-basics-applications-exploring-colaboratory-lab-project-data

https://www.raspberrypi.org/magpi/raspberry-pi-laptop-dock/
NexDock

https://medium.freecodecamp.org/the-easy-way-to-set-up-docker-on-a-raspberry-pi-7d24ced073ef

<a target="_blank" href="https://learn.acloud.guru/course/hands-on-iot-on-gcp/learn/86133277-9850-4650-ae29-5b322c308909/11ce4fef-15bd-4051-9269-a08b179824fc/watch">Setting Up Raspberry Pi</a>
as part of ACloudGuru video <a target="_blank" href="https://learn.acloud.guru/course/hands-on-iot-on-gcp/dashboard">IoT on GCP</a> by Karlos Knox.

<a target="_blank" href="https://learn.acloud.guru/series/acg-projects/view/102" title="24 October 2017">
#102 - DIY Alexa with a Raspberry Pi</a>

https://github.com/seamusdemora/PiFormulae


## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}


## More on Python

This is one of a series about Python:

{% include python_links.html %}
