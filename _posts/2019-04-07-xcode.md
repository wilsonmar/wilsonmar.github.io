---
layout: post
title: "XCode install (on MacOS)"
excerpt: "This is a pre-requisite for Homebrew, Python, and other development tools"
tags: [Apple, ecosystem]
image:
# feature: xcode-1900x500-37236
  feature: https://user-images.githubusercontent.com/300046/50054366-56d4f180-00fe-11e9-8182-012cb43cf2ed.jpg
  credit: macosicongallery.com
  creditlink: https://www.macosicongallery.com/icons/xcode-2015-03-13/
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/xcode-install">This tutorial</a> describes the installation and usage of Apple’s XCode set of utilities for macOS developers.

XCode is Apple's free app for developing custom programs for all Apple devices (macOS, iPhone, iPad, Apple Watch).

Since the Apple Store only handles individual .app files, other mechanisms are needed to install
additional programs needed as a pre-requisite by Homebrew, Python, and other development programs.

XCode does not come with macOS.

## About XCode

PROTIP: Skip Apple's websites and App. <a href="#2installers">Click here for install instructions</a>.

Otherwise, read on for a run-around.

0. Use an internet browser to XCode's marketing page at:

   <a target="_blank" href="https://developer.apple.com/xcode/">
   https://developer.apple.com/xcode</a>

   "Xcode 10 includes everything you need to create amazing apps for all Apple platforms. Now Xcode and Instruments look great in the new Dark Mode on macOS Mojave. The source code editor lets you transform or refactor code more easily, see source control changes alongside the related line, and quickly get details on upstream code differences. You can build your own instrument with custom visualization and data analysis. Swift compiles software more quickly, helps you deliver faster apps, and generates even smaller binaries. Test suites complete many times faster, working with a team is simpler and more secure, and much more.".
   
   BTW the "Apple platforms" include MacOS, iPhone, iPad, Apple TV, and Apple Watch.

0. Click the blue "Download" at the top of the page to see the <a target="_blank" href="https://developer.apple.com/download/">lastest version</a>

0. Click that blue "Download" button to get to the "Mac App Store Preview</a> at <a target="_blank" href="https://itunes.apple.com/us/app/xcode/id497799835">https://itunes.apple.com/us/app/xcode/id497799835</a>

0. Click <strong>View in Mac App Store</strong>, then "Open App Store.app" in the pop-up.
0. Provide your Apple ID and password. Get one if you don't already have one.

   Don't click the blue "OPEN" icon at the upper-right to open the app if the app was installed.

0. Scroll down to click <strong> See All</strong>.
0. Click "Sort by Most Recent".
0. Read through the Ratings to decide for yourself.

<hr />

<a name="2installers"></a>

## Two XCode installs - different scope

Because XCode IDE takes so much disk space, developers who use another  IDE (such as Visual Studio), prefer to only install XCode's <strong>command line utilities</strong> for the <strong>GCC compiler</strong> Python needs.
Newer versions also installs a Git client.

So it's a good idea to identify what has been installed.

If you don't already have XCode installed, 
<a href="#XCodeInstall">click here for install instructions</a>.


<a name="versions"></a>

## XCode versions

   NOTE: Each version of XCode is related to a specific version of the Apple OS Mac operating system.

1. Know the version by clicking on the program name next to the Apple icon, then select "About XCode":

   ![xcode about 271x48](https://cloud.githubusercontent.com/assets/300046/21987451/dc44154a-dbc0-11e6-90b6-4dce91b8c5d2.png)

0. Alternately, get the version installed from within a Terminal:

   <pre><strong>
   /usr/bin/xcodebuild -version
   </strong></pre>

   A sample answer:

   <pre>
Xcode 10.2.1
Build version 10E1001
   </pre>

   The should match up with the Build Number on the Apple web page.

   Alternately, for a more precise version number and other info 
   (Mavericks and up):

   <pre><strong>
   pkgutil --pkg-info=com.apple.pkg.CLTools_Executables
   </strong></pre>

   A sample response:

   <pre>
package-id: com.apple.pkg.CLTools_Executables
version: 10.2.0.0.1.1552586384
volume: /
location: /
install-time: 1554972853
groups: com.apple.FindSystemFiles.pkg-group 
   </pre>

   The previous command is a specific version of:

   <pre>
   pkgutil --pkgs | grep -i tools
   </pre>

0. Get the version of GCC installed:

   <pre>
   gcc --version
   </pre>

   A sample answer:

   <pre>
Configured with: --prefix=/Applications/Xcode.app/Contents/Developer/usr --with-gxx-include-dir=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.14.sdk/usr/include/c++/4.2.1
Apple LLVM version 10.0.1 (clang-1001.0.46.4)
Target: x86_64-apple-darwin18.5.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
   </pre>

0. Identify the path where the <strong>make</strong> utility Java uses:

   <pre><strong>xcrun --find gcc</strong></pre>

   Sample response:

   <pre>/Applications/Xcode.app/Contents/Developer/usr/bin/make</pre>

0. Get the version of the Switch used to develop iOS mobile apps:

   <pre><strong>swift -version</strong></pre>

   Sample response:

   <pre>Apple Swift version 5.0.1 (swiftlang-1001.0.82.4 clang-1001.0.46.5)
   Target: x86_64-apple-darwin18.5.0</pre>

## Install Command Line Utilities

See <a target="_blank" href="http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/">http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x</a>

The entire command line toolkit package gets placed in the following directory:

   <pre><strong>ls /Library/Developer/CommandLineTools/</strong></pre>

   The folders in there are: <tt>Library  Packages SDKs     usr</tt>


<a name="XCodeInstall"></a>

## XCode IDE install

XCode IDE can be installed from a Terminal command line interface (CLI) or as a package from the App Store.

Either way, if you have command utilities installed, you must first delete it.

1. In a Terminal window, find out where it's installed: 

   <pre><strong>
   xcode-select -p
   </strong></pre>

   After manual confirmation, the answer:

   <pre>
   /Applications/Xcode.app/Contents/Developer
   </pre>

   Alternately, combine two commands:

   <pre><strong>
   ls $(/Applications/Xcode.app/Contents/Developer)
   </strong></pre>

   Either way, the response:
   
   <pre>Applications Library      Makefiles    Platforms    Toolchains   Tools        usr</pre>


### A) Initial install on Terminal CLI

1. Open a Terminal.app console window at any directory:

   <pre><strong>
   xcode-select --install
   </strong></pre>

   If the XCode IDE is already installed, you'll see message:
   
   <pre>
   xcode-select: error: command line tools are already installed, use "Software Update" to install updates
   </pre>
   
   Otherwise, after manual confirmation, the answer:

   <pre>
   /Applications/Xcode.app/Contents/Developer
   </pre>


### B) Initial install using App Store

On MacOS the XCode IDE is downloaded from the Apple Store app and stored in the "/Applications" folder as file <strong>XCode.app</strong>.

1. On the Touchpad pinch 4 fingers together to click the <strong>App Store</strong>. Search for "XCode".

   If the blue "Open" button appears, then XCode.app has already been installed.

2. Click "Install" if that appears.

3. The Apple Store app is stored in the "/Applications" folder as "XCode.app".


### XCode IDE install

1. Get the installation location in a Terminal window:

   <pre><strong>
   xcode-select -p
   </strong></pre>

   After manual confirmation, the answer:

   <pre>
   /Applications/Xcode.app/Contents/Developer
   </pre>


## Software updates

   So below is the "Software Update" approach:


   ???

0. Click <strong>Download</strong> and provide your Apple ID.
   You'll need to establish an Apple ID.

0. Go through Apple's location verification if prompted.

0. Select the version to download:

   | File               | Date       | Download | Unpacked |
   | :----------------- | :--------- | -------: | ------: |
   | XCode_10.2.1       | 2019-04-17 |   ? GB | 6.1 GB |
   | XCode_9.0	         | 2017-09-19 | . ? GB | ? GB |
   | XCode_8.2.1 8C1002 | 2016-12-19 |   ? GB | ? GB |
   | XCode_8_beta_2.xip | 2016-07-05 |   5.9 GB | 12.32 GB |
   | XCode_7.31         | 2016-05-03 |   3.8 GB | ? |
   | XCode_4.1          | 2014-      |   2.9 GB | ? |
   | XCode_3.2.4        | 2014-      |   2.? GB | ? |

   CAUTION: Make sure that your machine has enough free space available. 
   
   These are massive files that may take a while to download if you don't have a fast internet connection.

0. Return to the <a href="#versions">versions</a> instructions above to view the updated version.

0. Remember to delete the installer after you're done, to reclaim disk space.


<a name="XCodeUpgrade"></a>

### XCode IDE Upgrade

Over time, Apple updates XCode and its command line utilities.

1. Click the Apple icon, then click <strong>System Preferences</strong>. Here is an example notification:

   ![xcode-cli-update-436x98-4795](https://user-images.githubusercontent.com/300046/56460275-7e162680-635d-11e9-8d3c-0bb89457dcd8.jpg)

2. Click "Update Now".
3. Click "Agree".
4. When done, view the <a href="#versions">version numbers installed</a>.


## More on OSX #

This is one of a series on Mac OSX:

{% include mac_links.html %}
