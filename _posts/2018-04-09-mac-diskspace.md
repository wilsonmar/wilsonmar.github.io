---
layout: post
title: "Manage MacOS Disk Space"
excerpt: "Tools and techniques to minimize disk space usage"
tags: [apple, mac, setup]
date: "2018-04-09"
file: "mac-diskspace"
image:
# feature: pic brown wood apple logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622035/740efa5c-0584-11e6-9a41-db5b03eaff85.jpg
  credit: Green Coffee Lover
  creditlink: http://www.greencoffeelover.com/wp-content/uploads/2015/03/7.jpg
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


This article describes how you can manage and minimize disk space usage on macOS (compared vs. Linux).

## Why?

If you have a way to live comfortably with a 256 GB drive vs. a 500 GB drive on your Mac, you save several hundred dollars.

A 4TB USB external mechanical hard disk costs less than $100 at Costco.

A 2TB USB external mechanial drive costs less than a $100 at Apple.

The more files on your laptop, the more you stand to lose and the longer it takes to restore your laptop when you (inevitably) have to recover it.

Not having enough free disk space may cause your fan to come on, which is an indicator that your mac may be overheating.


## Take Disk Inventory

Visualize the largest files using your disk space using the free GPL app
Disk Inventory X from <a target="_blank" href="http://www.derlien.com/">http://www.derlien.com</a>
which presents the sizes of files and folders in graphical "treemaps". 

## Macs Read, Not Write NTFS

Windows machines natively formats drives using NTFS (New Technology File System).
Additionally, to handle drives larger than 2GB, Windows 10 is moving from MBR (Master Boot Record), first introduced with IBM PC DOS 2.0 in 1983, to GPT (GUID Partition Tables). On Linux, the GRUB boot loader is typically located in the MBR.
Since GPT identifies every partition on a drive using a GUID, it escapes the MBR limitation of up to four primary partitions. However, Windows allows up to 128 partitions on a GPT drive.

A big advantage of GPT is that it duplicates partition information in several places on the drive.
Apple’s Intel Macs no longer use Apple’s APT (Apple Partition Table) scheme and use GPT instead.

Apple limited support for Windows volumes by allowing only read but not write or delete anything on NTFS drives.

Windows 7 does not work with drives 2.16 TB or more.
When plugged in, 3TB and 4TB drives don't even appear in the Folder.

However, <a target="_blank" href="https://www.paragon-software.com/home/ntfs-mac/#">
for $19.99 Paragon software</a> enables your Mac to write and delete files on NTFS drives.

## Remove Unneeded Language

One quick and simple way of recovering disk space is
<a target="_blank" href="https://ingmarstein.github.io/Monolingual/index.html">
this</a>:

<pre>brew install monolingual</pre> 

Since I'm in the imperious US, I selected for removal all languages except US(en), US(gb).

## GitHub

Delete your copy of repos on your local hard disk when you are not actively editing a particular repo.

Write bash scripts so that files are deleted on exit.

The <tt>/opt</tt> folder is where many Linux users put various custom software they develop.


## /dev (devices) folder

<a target="_blank" href="https://www.youtube.com/watch?v=UFIoRLqhFpo&list=PLlcnQQJK8SUjfkCph45fz6rC0de60LVZR&index=6&t=2m35s">VIDEO</a>:
On Linux, everything is a file.

<pre><strong>cd /dev && ls -al</strong></pre>

The <tt>/dev</tt> folder on Macs and Linux contain files which point to both physical and pseudo devices.

<tt>b</tt> in the first character of the listing describes a <strong>block</strong> device.

<tt>sda</tt> is the default drive. Additional drives are <tt>sdb</tt>, etc.<br />
<tt>sda1</tt> is the first partition (no zero here).

## Other folders

<tt>/tmp</tt> (temporary) folder should be empty on boot-up because reboot wipes out its contents.

<tt>/usr</tt> (user) level files which the PATH configures to <strong>override</strong> files of the same name  in the system folder (a program in <tt>/usr/bin</tt> is used instead of one with the same name in <tt>/bin</tt>)

   <ul><pre>X11        bin        lib        libexec    local      sbin       share      standalone
   </pre>
   </ul>

<tt>/var</tt> (various) files go in this folder, particularly log files in <tt>/var/log</tt>.


BTW Unlike Linux, MacOS does not have folders 
* <tt>/boot</tt>
* <tt>/lib</tt>
* <tt>/proc</tt> folder virtual filesystem, containing a folder for each process.
* <tt>/root</tt> folder for use by the root user

## Benchmark disk write speed

<a target="_blank" href="https://www.youtube.com/watch?v=Zuwa8zlfXSY&t=1m21s">VIDEO</a>:

   <pre>mkdir ram
   cd ram/
   dd if=/dev/zero of=test.iso bs=1M count=8000
   rm test.io
   </pre>

   Response:
   <pre>8000+0 records in
   8000+0 records out
   838860800 bytes (8.4 GB, 7.8 GiB) copied, 44.2673 s, 189 MB/s
   </pre>

TODO: Test vs. USB 3 drive.

## RAM Disk

A drive running in your RAM rather than on your hard drive
is much faster (5 - 100 times faster).

1. Find out how much RAM you have used and available: launch <strong>Activity Monitor</strong>.
   Find it in the Launcher or in Finder, navigate to <tt>/Applications/Utilities/</tt>.
   Click its <strong>Memory tab/button</strong>.

   <img width="513" alt="mac-diskspace-1026x192" src="https://user-images.githubusercontent.com/300046/63186866-b6cbc100-c01a-11e9-855a-0d2a1cee0dd8.png">

   In the example above, 16 - 13 used means 3 GB is available. Subtract 2GB for system use
   leaves you 1GB for use as RAM disk.

1. Before proceeding further, do a full backup of your whole machine to a USB drive 

1. Consider third-party utilities for creating a RAM disk.

   Open-source (free) <a target="_blank" href="https://github.com/imothee/tmpdisk">https://github.com/imothee/tmpdisk </a> installs as a menu bar item to create RAM disks by GUI or automatically at startup.

   NOTE: <a target="_blank" href="https://apps.apple.com/us/app/ramdisk/id429745495?mt=12">
   RAMDisk by Claus Gerhardt</a> is $9.99 from the Mac App Store has 3 ratings of 1. (Bad)
   And there was a <a target="_blank" href="https://itunes.apple.com/us/app/ultra-ram-disk/id503480494?mt=12">Ultra RAM Disk</a> which installs as a menu bar item. But it's not avaialbe in the US.

1. Construct the RAM disk creation command: If you have a HFS+ drive:

   <pre><strong>diskutil erasevolume HFS+ "RAMDisk" `hdiutil attach -nomount ram://1048576`
   </strong></pre>

   PROTIP: Allocate the smallest amount, then add as you need.

   * <tt>ram://2048</tt> (multiply by 2048 for a 1 MB RAM disk)
   * <tt>ram://524288</tt> (multiply by 2048 for a 256 MB RAM disk)
   * <tt>ram://1048576</tt> (multiply by 2048 for a 512 GB RAM disk)
   * <tt>ram://2097152</tt> (multiply by 2048 for a 1 GB RAM disk)
   * <tt>ram://4194304</tt> (multiply by 2048 for a 2 GB RAM disk)
   <br /><br />

   Notice the use of back tick enclosing characters.

See https://blog.macsales.com/46348-how-to-create-and-use-a-ram-disk-with-your-mac-warnings-included/

By contrast, in Linux, see the amount of RAM:

   <pre>free -g</pre>

Create a folder to use as a mount point for your RAM disk (mkdir /mnt/ramdisk):

   <pre>
mkdir -p /mnt/ramdisk1
   </pre>

Create a RAM disk:
   
   <pre>
mkdir -p /mnt/ramdisk1
mount -t tmpfs tmpfs /mnt/ramdisk1 -o size=512m
   </pre>

   tmpfs or ramfs are FSTYPE. See https://www.jamescoyle.net/knowledge/951-the-difference-between-a-tmpfs-and-ramfs-ram-disk

The RAM disk can persist over reboots if specified in file <tt>/etc/fstab</tt>,

   <pre>tmpfs       /mnt/ramdisk tmpfs   nodev,nosuid,noexec,nodiratime,size=512M   0 0
   </pre>

PROTIP: Remember that data in RAM drives disappear each time the machine is restarted.


## Cloud Disks

* <a target="_blank" href="https://support.apple.com/en-us/HT201238">Apple iCloud</a>
in the US charges per month 50GB: $0.99, 200GB: $2.99, 2TB: $9.99
* <a target="_blank" href="https://drive.google.com/">drive.google.com</a> 
goes straight to a 2TB plan for $10 per month.
* <a target="_blank" href="https://cloud.google.com/storage/pricing">Google Cloud</a> 
charges for egress.
* Box.com
* Dropbox.com
* Amazon's Drive (for Prime members to store an unlimited number of photo files)
* Microsoft's OneDrive, etc.
<br /><br />

PROTIP: The problem with cloud drives is that it takes time to drag each file from Finder to the web page.

Cloud vendors have programs, but they take up disk space, which defeats much of the purpose of using cloud storage.

https://derflounder.wordpress.com/2016/09/23/icloud-desktop-and-documents-in-macos-sierra-the-good-the-bad-and-the-ugly/



<hr />

## More on macOS

This is one of a series on macOS (Mac OSX):

{% include mac_links.html %}
