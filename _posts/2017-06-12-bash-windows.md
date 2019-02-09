---
layout: post
title: "Bash shell running within Windows using Microsoft's WSL (Windows Subystem for Linux)"
excerpt: "It's less like Power Rangers clicking rings, more like living in a foreign country"
tags: [Bash, Windows, IoT]
file: 2017-06-12-bash-windows.md
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

{% include _toc.html %}

As of this writing (June 2017), this was as its first "beta" release.

   ### Enable Windows Subsystem for Linux feature (GUI)

0. From Start, type in the search box 

   <pre><strong>Turn Windows features on or off
   </strong></pre>

   and select it when it appears.

   Please wait a while for all items to appear.

0. Select "Windows Subsystem for Linux (beta)", then
   click OK to exit dialog, then Restart your computer.

   This option was added since the "Anniversary" and "Creators Update" of Windows 10.

   <a href="#FirstTime">Skip to next topic</a> if you see it.

   ### Don't see it?

   Verify your PC's CPU architecture and Windows version/build number:

0. Start: Click the Windows icon or keyboard key to 
   open Settings, System, About. 

   If your OS Build is not above 14393, update.
   You need the Windows 10 Anniversary Update. Creators Update is recommended.

   If your System type is not "64-bit", get another computer.

   ### Turn on Developer Mode

0. Open Settings -> Update and Security -> For developers
0. Check the Developer Mode radio button to "install any signed app".

   <a name="FirstTime"></a>

   ### First time Bash

0. Open a command prompt (click Start and type Command, then select it from the list that arises) 

   QUESTION: Run as Administrator/elevated?

0. Type:

   <pre><strong>bash
   </strong></pre>

   During Beta period, this message appears:

   <pre>-- Beta feature --
   This will install Ubuntu on Windows, distributed by Canonical
   and licensed under its terms available here:
   https://aka.ms/uowterms
   </pre>

0. Type y and press Enter to continue. The response:

   <pre>Downloading from the Windows Store... 100%
   Extracting filesystem, this will take a few minutes...
   Installation successful~
   Please enter a UNIX user name: _
   </pre>

   QUESTION: What is downloaded and can it be deleted?

   The image downloaded is a Ubuntu user-mode image.

0. Type a user name

   <pre>Enter new UNIX password: _
   </pre>

   This username and password can be different from, and has no relationship to Windows username and password.

   PROTIP: The user is not root.

   https://msdn.microsoft.com/en-us/commandline/wsl/user_support

0. Type a password.

   A shortcut is added to your start menu named:

   `Bash on Ubuntu on Windows`

0. Click it so you don't have to type "bash".

   By default, the prompt is your Linux user name @ your machine name:/mnt/c/Users/%USERNAME%$


   ### Folders and variables

0. See where Ubuntu is installed using a Windows system variable
   referenced using Windows % wrapper rather than Bash $ prefix.

   <pre><strong>%localappdata%\lxss\
   </strong></pre>

   The directory is marked as a hidden system folder.
   Creating and/or modifying files in this location using Windows tools and apps corrupts because it gets read-locked. An explanation is <a target="_blank" href="https://blogs.msdn.microsoft.com/commandline/2016/11/17/do-not-change-linux-files-using-windows-apps-and-tools/">this</a>.

   ### Edit files

0. Create a project folder under a Linux mount for use by both Windows and Linux tools:

   <pre><strong>cd /mnt/c/dev/
   mkdir project
   </strong></pre>

0. Access files from both Windows and from Bash as:

   <pre><strong>/mnt/c/path
   </strong></pre>

0. Utilities:

   <pre><strong>du -sh
   </strong></pre>

## Architecture

![bash-windows-wsl file-system-graphic-1024x547](https://user-images.githubusercontent.com/300046/27129463-644687dc-50d0-11e7-92fc-f9862d9c04cd.png)

Lxcore.sys is the driver that recognizes Bash commands and other Linux utilities such as chmod
to change permissions.

VFS is the Virtual File System.

From inside Bash, DrvFS gets to Windows.

From inside Windows, VolFS gets to Linux symbolic files and its case sensitivity.

NTFS is the NT File System controlling hard drives.


## Testing

<a target="_blank" href="https://blog.henrypoon.com/blog/2017/06/18/running-selenium-webdriver-on-bash-for-windows/">
NOTE</a>: To run Python for Selenium controlling Firefox, install Xming with gekoDriver.


## References

Links and issues for this are on:<br />
<a target="_blank" href="https://github.com/Microsoft/BashOnWindows">
https://github.com/Microsoft/BashOnWindows</a>

https://msdn.microsoft.com/en-us/commandline/wsl/install_guide

https://blogs.msdn.microsoft.com/wsl/2016/06/15/wsl-file-system-support/
published 15 June 2016 by Jack Hammons, who writes:<br />
<a target="_blank" href="https://blogs.msdn.microsoft.com/wsl/">
https://blogs.msdn.microsoft.com/wsl</a>, the home page of WSL.




## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
