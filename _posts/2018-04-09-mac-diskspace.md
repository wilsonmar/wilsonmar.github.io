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
<p align="right">
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=es&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Español (Spanish)" width="20" height="14" src="../images/flags/es.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=fr&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Français (French)" width="20" height="14" src="../images/flags/fr.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=de&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Deutsch (German)" width="20" height="14" src="../images/flags/de.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=it&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Italiano" width="20" height="14" src="../images/flags/it.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=pt&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Português" width="20" height="14" src="../images/flags/pt.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ru&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Cyrillic Russian" width="20" height="14" src="../images/flags/ru.png"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="中文 (简体) Chinese (Simplified)" width="20" height="14" src="../images/flags/cn.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ja&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="日本語 Japanese" width="20" height="14" src="../images/flags/jp.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="한국어 Korean" width="20" height="14" src="../images/flags/ko.gif"></a>
</p>
{% include _toc.html %}


* [Manage Disk Space on MacOS](/mac-diskspace/)

This article describes how you can manage and minimize disk space usage.

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
https://ingmarstein.github.io/Monolingual/index.html

<pre>brew install monolingual</pre> 

Since I'm in the US, I selected for removal all languages except US(en), US(gb).

## GitHub

Delete your copy of repos on your local hard disk when you are not actively editing a particular repo.

Write bash scripts so that files are deleted on exit.

## Benchmark disk write speed

<a target="_blank" href="https://www.youtube.com/watch?v=Zuwa8zlfXSY&t=1m21s">VIDEO</a:>

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

1. Create a drive in your RAM rather than on your hard drive.
   
   <pre>
mkdir -p /mnt/ram
mount -t tmpfs tmpfs /mnt/ram -o size-8192M
   </pre>

   This is temporary.

2. Unmount RAM drive:



## Cloud Disks

* <a target="_blank" href="https://support.apple.com/en-us/HT201238">Apple iCloud</a>
in the US charges per month 50GB: $0.99, 200GB: $2.99, 2TB: $9.99
* Box
* Dropbox
* <a target="_blank" href="https://cloud.google.com/storage/pricing">Google Cloud</a> charges for egress.
* Amazon Drive (for Prime members to store an unlimited number of photo files)
* Microsoft OneDrive, etc.
<br /><br />

https://derflounder.wordpress.com/2016/09/23/icloud-desktop-and-documents-in-macos-sierra-the-good-the-bad-and-the-ugly/
