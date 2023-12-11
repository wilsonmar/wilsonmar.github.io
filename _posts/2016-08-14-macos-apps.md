---
layout: post
date: "2016-08-14"
file: "macos-apps"
title: "MacOS Apps"
excerpt: "Applications for a long, prosperous, happy life"
tags: [apple, mac, setup]
image:
# feature: pic rainbow black apple logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622136/1c1cec72-0585-11e6-8a62-060c26928878.jpg
  credit: Wallpaperscraft
  creditlink: https://wallpaperscraft.com/image/app_storm_apple_mac_rainbow_stripes_horizontal_8063_1920x1080.jpg
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

PROTIP: After installation, in the Finder, right-click on the installer to free up disk space.

## MLX (Machine Language eXplore)

Apple has stayed clear of using the word AI in many of its keynote presentations.

In response to Google's announcement of AI chips for its Pixel phones, Apple announced its own AI chip for its iPhone 8 and iPhone X.
https://www.techrepublic.com/article/apple-mlx-framework-machine-learning/

<a target="_blank" href="https://twitter.com/awnihannun/status/1732184443451019431?s=20">On December 5, 2023, Awni Hannun tweeted</a>
about Apple's Machine Learning Research team's new Machine Learning Framework at<br />
<a target="_blank" href="https://github.com/ml-explore/mlx/blob/main/README.md">https://github.com/ml-explore/mlx/blob/main/README.md</a> with docs at<br />
<a target="_blank" href="https://mx-explore.github.io/build/">https://mx-explore.github.io/build/</a>

Aditionally, Apple's Machine Learning Data team released a new Machine Learning Data Framework at<br />
<a target="_blank" href="https://github.com/ml-explore/mlx-data/blob/main/README.md">https://github.com/ml-explore/mlx-data/blob/main/README.md</a>

MLX was built to run on Apple Silicon (Mac Laptops) - Metal Performance Shaders and Accelerate.

A notable difference from MLX and other frameworks is the unified memory model. 
Arrays in MLX live in shared memory. 
Operations on MLX arrays can be performed on any of the supported device types without transferring data.

MLX has a Python API that closely follows NumPy. 
Its C++ API closely mirrors the Python API. 

Its higher-level packages (mlx.nn and mlx.optimizers) closely follow PyTorch.
It's also inspired by Jax, and ArrayFire.

<a target="_blank" href="https://www.youtube.com/watch?v=FplJsVd2dTk">VIDEO</a>: Install

https://github.com/ml-explore/mlx-examples/blob/main/README.md
shows use of familiar MNIST example.

Among examples provided:

* Transformer model sequence labeling example uses the PTB corpus containing Wall Street Journal articles.
* Large scale text generation with Meta's LLaMA or Mistral.
* Parameter efficient fine-tuning with LoRA.
* Generating images with Stability AI’s Stable Diffusion.
* Speech recognition with OpenAI's Whisper.
<br /><br />

<hr />

## Installer managers

<a target="_blank" href="http://disney.github.io/">
Disney has open-sourced</a> a repo,
<a target="_blank" href="https://github.com/munki/munki,">https://github.com/munki/munki</a>,
manages software installation for OS X.
Munki can install software packaged in the Apple package format, and also supports Adobe CS3/CS4/CS5/CS6 Enterprise Deployment "packages", and drag-and-drop disk images as installer sources - 
webserver-based repository of packages and package metadata.


<a id="VNC"></a>

## VNC 

1. Enable screen sharing on the server.

   There are also 3rd-party apps to VNC into (typically Linux) servers:
   "Chicken of the VNC" sucks, CotVNC sucks,
   Real VNC at http://www.realvnc.com/download/viewer/

   One that requires no additional downloads is "Screen Sharing" that Apple includes.

   There are two ways to open it: 

0. Press <strong>command+Tab</strong> to the Finder, then 
   <strong>command+K</strong> for the "Connect to Server" dialog.

   This enables you to select prior addresses.

   Alternately, in a Safari browser tab and instead of typing protocol 
   "http://" or "https://", type "VNC://" followed by an IP address, such as:

   `vnc://35.197.119.148`

   The browser approach requires an extra step to click "Connect To" IP address at the pop-up confirmation page.

   NOTE: This uses the "Screen Sharing" app within `/System/Library/CoreServices/Applications` since Yosemite.



### VNC from Finder


<a id="BrowserPlugins"></a>

## Browser Plugins

HTML5 is supposed to avoid this hassle, but not everyone has gotten around to it.

PROTIP: Install browser plug-ins ahead of time before you eventually run into a site 
that requires it, and it would be a bother at that point.

* <a target="_blank" href="https://www.microsoft.com/getsilverlight/get-started/install/default.aspx?reason=unsupportedbrowser&_helpmsg=ChromeOnMacIsUnsupported#"> Silverlight from Microsoft</a>
takes 36.5 MB of disk space.

* Adobe Flash


<a id="InstallOptions"></a>

## Options for Installing Addtitional Software Apps/Programs

There are several ways to get software on a Mac, listed in order of preference:

* <a href="#AppleStore">Apple Store apps</a>
  are the safest and simplest place to obtain apps. 
  But many software publishers don't want to give Apple a slice of the money.

  Plus, Apple Store apps currently are installed by hand, not with automation scripts.

* Execute [Homebrew](/apple-mac-osx-homebrew/) (or <a href="#Bower">Bower</a>) from an [Ansible](/ansible/) declarative playbook.

* This is the automated equivalent to manually typing a
   <a href="#Terminalz">Terminal command</a> to use [Homebrew](/homebrew/) 

* That automates manually
   <a name="#FileTransferz">downloading</a> a zip file that contains a .dmg or .pkg file,
   then dragging it into the system <strong>Applications</strong> folder.

* Lastly, one can always go to each publisher's webpage, <a href="#FileTransferz">
   download it</a> and run a pkg or dmg file.

A particular program may provide several options.

<hr />

<a id="AppleStore"></a>

### Install Apps from the Apple Store

Apps I've used from the Apple Store:

* <strong>Microsoft Office</strong>
  is supposed to read and write
  Word, PowerPoint, Excel files created on PCs.

   But since Office 2011 for Mac is a version behind Office 2013 for PC, styles and numbering in docx files sometimes get
   scrambled in Mac.

   <a target="_blank" href="http://www.amazon.com/Microsoft-Office-Home-Business-2016/dp/B011DMUIQY/">
   Office 2016 for Mac is $172.99 from Amazon</a>.

* <strong>Camtasia for Mac</strong> 
(from Techsmith)
 records videos of screens and provides an editor
 (<a target="_blank" href="http://www.amazon.com/Camtasia-for-Mac-2-Download/dp/B009AYOZMQ/">
 $99 from Amazon</a>)
 (Don't confuse this with Camtasia Studio for Windows)
 
* <a target="_blank" href="https://itunes.apple.com/us/app/lynda.com/id985958984?l=de&ls=1&mt=12">
   Lynda Desktop app</a> - reader for tutorial subscriptions at lynda.com.

* <a target="_blank" href="https://itunes.apple.com/us/app/slack/id803453959?mt=12&ign-mpt=uo%3D2">
   Slack</a> instant messaging

* GoToMeeting for video conferencing.

* ZoomUS for video conferencing.

* Git-it to learn Git and GitHub.

* [VMware Fusion for Windows within MacOSX](/windows-on-apple-mac-osx/)

Apps offered by Apple itself:
 
* XCode
* iMove
* Keynote
* iPhoto


### Amazon Kindle

PROTIP: You can't copy and paste text from Kindle's app. But if you read your Kindle purchase on website <a target="_blank" href="https://read.amazon.com/">https://read.amazon.com</a> you can highlight the text and select Highlight pop-up, Kindle saves the text under your Amazon account at <a target="_blank" href="https://read.amazon.com/notebook">https://read.amazon.com/notebook</a>.



<a id="FileTransferz"></a>

### Side-Load .pkg and .dmg installers

Open-source developers provide their software for download
in files ending in .pkg or .dmg.

.pkg (package installers) are like a zip file
and like using the Setup.exe files on Windows.
It can include <strong>scripts</strong> that provide installation logic such as 
show licence agreement; get installation destination; define which bits to install; etc.

It can overwrite existing files if it is scripted to do so within the PKG. Apple Remote Desktop can be used to push the PKG. ARD advantages.
It can contain a signature.
See http://en.wikipedia.org/wiki/Installer_%28Mac_OS_X%29

.pkg files are creating using Composer and managed using Casper Admin.
Popular .pkg installers include:

* Prey software from <a target="_blank" href="https://preyproject.com/download"> 
   PreyProject.com</a> helps you track down your
   stolen laptop by taking a picture of the thief, sends out a GPS location,
   and deletes files. (Versions for Android, iOS, Linux, and Windows as well)

   Version 1.5.0 took 8.7 MB on disk.

PROTIP: Click on the download icon on your browser to work with downloaded files
because the time-stamp of executable files downloaded to your Downloads folder 
retain the date they were <strong>created</strong>, not the (current time) downloaded.


<a name="DMGInstallers"></a>

#### DMG installers

.dmg (a disk image file like ISO) can use block mode for fast copying. 
It can install to all user profiles and, utilizing Pre and Post Flight through Composer.
It can be made to overwrite files, especially in /Users folder, using FEU (Fill Existing Users) FFUT.
It can can contain an index which provides self-healing and uninstall.

See http://en.wikipedia.org/wiki/.dmg
Popular .dmg installers include WebEx:

<ol type="1">
<li> Open a browser to <a target="_blank" href="https://welcome.webex.com/client/wbxclient/mac/intel/webexnbrplayer_intel.dmg">
WebExPlayer</a> which downloads file
<strong>webexnbrplayer_intel.dmg</strong> to the Downloads folder.</li>
<li> Open the Downloads folder: Right-click on the arrow next to the download file 
at the bottom of the browser.</li>
<li> Double-click on the .dmg file. A pop-up dialog containing a .pkg file appears.</li>
<li> Double-click on the .pkg file for the Install Network Recording Player dialog.</li>
<li> Click Continue.</li>
<li> Click Install.</li>
<li> Type your password and click "Install Software".</li>
<li> Click "Close".</li>
<li> Verify the program: Pinch 3 finders on the pad, and press W for the WebEx Player.</li>
<li> In Finder Downloads folder, control-click on the .dmg installer file and select Move to Trash.</li>
<li> Press command+Tab to the Network Recording Player.dmg and click the red dot at the upper left corner to close it.</li>
<li> On the Desktop, drag the Network Recording Player to Applications folder.</li>
</ol>

<li> https://iperf.fr/ iPerf network (<a target="_blank" href="http://www.techrepublic.com/blog/data-center/handy-iperf-commands-for-quick-network-testing">info</a>)
</li>

Personally, I like PKGs, primarily for its scripting capabilities.
But it comes with risks.

* <a target="_blank" href="http://uTorrent.com">
  uTorrent</a> is a small program for downloading files using the Torrent protocol
  hackers prefer. Thus a high number of files (espcially movies) come with viruses.

* <a target="_blank" href="http://sw.ixoft.com/texfinderx/">
   TexFinderX</a> is a donation tool to search and replace text inside entire folders.
   Versions for MacOS X, Windows XP, Vista, and Seven.
   The MacOSX downloads as TexFinderX_232_OSX.zip containing Droplets and TFXTables.
   Drag the unziped folder into your Applications folder.

Due to these security concerns,
when you first double-click on such programs, 
Apple forces you to prove that you know what you're doing with this pop-up:

 <amp-img src="https://cloud.githubusercontent.com/assets/300046/14650954/07019508-062b-11e6-8ea3-0e5308db3a06.png"
      width="404"
      height="159"
      layout="responsive"
      alt="osx-unidentified-developer-808x318"></amp-img>

0. Hold down the <strong>control</strong> key as you click the new app icon.

0. Choose Open in the shortcut menu.

0. Click Open in the pop-up.


<a id="1Password"></a>

## Password Protection

I used to say that the first thing you do on a new Mac is 
<a href="#Backupz">backup</a>.

Now I say the first thing is to install a password manager.
They help you create strong passwords (after it finds old weak passwords)
then automatically log you into websites and fill out forms.

First of all, 1Password has the audacity to charge more than anyone else.
Actually that's a plus for me.

There is LassPass, which offers 2-factor authentication while 1Password doesn't.
Others include Password Safe, SafeInCloud, etc.

BTW, since this <a target="_blank" href="https://www.youtube.com/watch?v=8HSxWUqwpzU">
1Password Tutorial on YouTube</a> by David A. Cox came out,
1Password has a monthly pricing as well:
   <amp-youtube data-videoid="8HSxWUqwpzU" 
   layout="responsive" width="480" height="270">
   </amp-youtube>


They both install an alternate browser on mobile devices.
Neither support Windows Phone.

If you forget your master password, you'll need to redo everything if you use LastPass.
And it has no option to keep my passwords out of public clouds.

1Password allows me to keep the password vault local by syncing via wi-fi
(.agilekeychain or .opvault files).

* <a target="_blank" href="https://itunes.apple.com/us/app/1password-password-manager/id443987910">
   Install on Mac 1Password</a> and pay $49.99 for integration with iCloud.
   It's one of a very few 5 star rated apps (LastPass has 4 stars).
   Considering how nasty people can be on the internet, that's a real accomplishment.

0. When opened, install the 
   <a target="_blank" href="https://agilebits.com/onepassword/extensions">
   Safari Extension</a> from Agilebits.

0.  The Android version rates at 4.5 and costs $9.99 each.

<a id="Firewall"></a>

## Firewall

Some apps "phone home" (particularly licensed apps) 
without informing you.

This is troubling because it uses up your network bandwidth.

<a target="_blank" href="https://radiosilenceapp.com/">
$9 Radio Silence</a> reports which apps are doing it,
then blocks them.


<a id="AntiVirusz"></a>

## Anti-Virus

* <a target="_blank" href="http://www.thesafemac.com/mmg-defense/">
  thesafemac.com/mmg-defense</a>
  is proprably the most important page to read ... and heed
  unless you want to pay Ransomware.


<a id="Skype"></a>

## Skype

Skype only lets you view others' screens.


<a id="TeamViewer"></a>

## Control Each Other's TeamViewer

* <a target="_blank" href="https://www.teamviewer.com/en/download/mac.aspx">
   Teamviewer</a>
   enables you to control the mouse and keyboard
   on others' machine.



<a id="Webexz"></a>

## Webex

Emails containing a link to a webex recording such as this:

https://hp.webex.com/hp/lsr.php?RCID=6f738e10ed0449928edf158f3069e719

Clicking on this link the first time on a Mac triggers a download for Safari,
Cisco_WebEx_Add-On.dmg

* <a target="_blank" href="http://www.webex.com/play-webex-recording.html">
Cicso's webex web page</a> lists two programs:

<ul>
<li> For .ARF files, webexnbrplayer_intel.dmg invokes as Network Reocrind Player.pkg.
- the Network Player does not allow downloaded files to be saved.</li>

<li> For .WRF files, webexplayer_intel.dmg invokes as WebEx Player.pkg.</li>
</ul>


## ICQ

* http://www.icq.com/en

## Microsoft Communicator

I don't know anyone who uses this.


<a id="FTPz"></a>

## FTP (File Transfer Protocol)

FTP Client.

From your Mac desktop hit Command+K for the <strong>Connect to Server</strong> window 
(alternatively, you can access this from the <strong>Go</strong> menu).
<a target="_blank" href="http://osxdaily.com/2011/02/07/ftp-from-mac/">
FTP</a> to address: ftp://ftp.mozilla.org. Connect as Guest (no password).
The advantage of using Filezilla is that configuration files can be imported from
other platforms.



<a id="chm_files"></a>

## .chm (compiled HTML) Reader for Mac OS X

<a target="_blank" href="http://www.macupdate.com/app/mac/28171/ichm">
iCHM</a>
sits in the background for you to click on a chm file such as

   * <a target="_blank" href="http://wilsonmar.com/LR/1202/help/Help.chm">
   this LoadRunner 12.02 Help file</a>.

Its <a target="_blank" href="https://code.google.com/p/ichm/">
Cocoa-language source is stored openly</a>.

After download and unzip, in the Finder Downloads folder double-click on
<strong>iChm.app</strong>. 

Although the last version of
was August 2011 for Mac OS X 10.6 or above,
other such programs are even older.
Chmox goes back to 2005.
Archmox and Chamox go back to 2006.
QuickCHM goes back to 2008.


## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
