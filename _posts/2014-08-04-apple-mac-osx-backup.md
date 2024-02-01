---
layout: post
title: "Backup Archival and Restore on Mac OSX"
excerpt: "Save your life"
tags: [apple, macOS, setup, USB]
date: "2014-08-04"
file: "apple-mac-osx-backup"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14624434/dab075ca-0597-11e6-9090-f93e259a5554.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a id="Bootupz"></a>


<a id="SaveDiskSpacez"></a>

## Save Disk Space - Archive

Get rid of <a href="#Wallpaperz">system wallpaper files</a> you will never use, and
<strong>files for languages</strong> you'll never learn.

You'll likely to manage disk space eventually, regardless of how large the hard disk
because pictures and movies take a lot of room.
Move picture files you don't need instantly to a <strong>USB backup drive</strong>
or <strong>DVD disks</strong> that last a long time.


<a id="Backupz"></a>

## Backup Using Apple Time Machine

Making a copy of data (backup) 
of a computer is necessary because data can lost by a variety of 
ways at anytime.

Many have caught Ransomware which criminals require payment.

There is the <strong>3-2-1 Rule</strong> recommended, 
which requires three copies of any piece of data, 
on two different media (on laptop and in a USB drive) 
with one offsite (such as iCloud).

The backups should occur automatically.

Apple has a built-in
<a target="_blank" href="http://support.apple.com/kb/ht1427">
Time Machine</a> for backup to an external USB hard drive.
When it runs out of room, it deletes the oldest backups to make room for newer ones. 

It takes incremental <strong>hourly</strong> backups for the last 24 hours on the same drive.

Overnight I want a daily fully backup so I can pick how the system looked on any given day in the past. Even when the Mac is in Power Nap mode.

Apple offers a
AirPort Time Capsule drive.
But I can get a 3TB USB drive for $200.

Drives nowdays are pre-formatted for the PC.
So it can be read but not updated by a Mac because it's formatted in NTFS.
It needs to be formatted with the Mac OS Extended filesystem. 

<ol>
<li> In Applications > Utilities, launch <strong>Disk Utility</strong>.</li>
<li> Locate the drive name from the left hand side of Disk Utility and click on it.</li>
<li> Click on the <strong>Erase</strong> tab across the top.</li>
<li> Next to <strong>Format:</strong> click the contextual menu </li>
<li> Select <strong>Mac OS Extended (Journaled)</strong></li>
<li> Format to Mac Filesystem </li>
<li> Name the drive if you want, the name can be changed at any point</li>
<li> Click the <strong>Erase</strong> button and confirm again on the next pop-up window.</li>
</ol>

Make the USB drive a boot-up drive.
http://osxdaily.com/2013/06/12/make-boot-os-x-mavericks-usb-install-drive/

<a target="_blank" href="https://secure.backblaze.com/buy.htm">
Backblaze</a> is a cloud vendor created by ex-Apple employees
$5 per month.

I exclude from backup the temp folder, which is used to hold generated files 
before being loaded to my website.

Files I reference infrequently or no longer need I burn to a 3GB DVD before deleting them.
Examples of this include:

<ul>
<li> logs from my web server.</li>
<li> Files from past customer projects I want off my laptop in case its stolen (I don't want the liability).
Each DVD stores 3GB.</li>
<li> Video projects that are too big to store.</li>
</ul>




<a id="ExternalHDz"></a>

## External USB Hard Drives

Most 500 GB USB drives are formatted with NTFS.

In the Drive Utility, Erase.

Choosing 'MS-DOS File System' (also known as FAT32) will make the drive compatible with both a Mac and Windows computer, since that is the same as formatting as FAT32 under Windows.
But unlike Windows, OS X doesn't put an artificial restriction limiting the creation of disks in 
FAT32 format bigger than 32GB.
Also, the disk cannot hold a file any larger than 4GB (smaller than what a DVD can hold). 

To make a drive compatible with a Mac, choose '<strong>Mac OS Extended (Journaled)</strong>',
also known as HFS+.

A Windows computer will not even be able to see what is on it. 
(unless MacDrive 
or similar program is installed on the PC.)

There is no formatting after Erase.


## More on macOS

This is one of a series on macOS:

{% include mac_links.html %}
