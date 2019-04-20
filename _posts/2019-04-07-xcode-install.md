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

To build Python on a machine requires a <strong>GCC compiler</strong>.
One comes with command-line tools installed with
Apple's XCode IDE. Newer versions also installs a Git client.

XCode does not come with macOS.

If you don't already have XCode installed, 
<a href="#XCodeInstall">click here for install instructions</a>.

<hr />

## XCode components

Because XCode takes so much disk space, developers who use another  IDE (such as Visual Studio), prefer to only install XCode's utilities and run-time components.


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

0. Get the version of the Switch used to develop iOS mobile apps:

   <pre><strong>swift -version</strong></pre>

   Sample response:

   <pre>Apple Swift version 5.0.1 (swiftlang-1001.0.82.4 clang-1001.0.46.5)
   Target: x86_64-apple-darwin18.5.0</pre>

   <pre><strong>swift -version</strong></pre>

<a name="XCodeInstall"></a>

### XCode install

On MacOS the XCode IDE is downloaded from the Apple Store app and stored in the "/Applications" folder as "XCode.app".

0. Get the installation location in a Terminal window:

   <pre><strong>
   xcode-select -p
   </strong></pre>

   After manual confirmation, the answer:

   <pre>
   /Applications/Xcode.app/Contents/Developer
   </pre>


   It used to be that one can enter a command:

   <pre>xcode-select --install</pre>

   The response on my machine was:

   <pre>
   xcode-select: error: command line tools are already installed, use "Software Update" to install updates
   </pre>

   ### Software update

   So below is the "Software Update" approach:

0. Use an internet browser to <a target="_blank" href="https://developer.apple.com/xcode/">
   https://developer.apple.com/xcode</a>

   "Xcode 10 includes everything you need to create amazing apps for all Apple platforms. Now Xcode and Instruments look great in the new Dark Mode on macOS Mojave. The source code editor lets you transform or refactor code more easily, see source control changes alongside the related line, and quickly get details on upstream code differences. You can build your own instrument with custom visualization and data analysis. Swift compiles software more quickly, helps you deliver faster apps, and generates even smaller binaries. Test suites complete many times faster, working with a team is simpler and more secure, and much more.".
   
   BTW the "Apple platforms" include MacOS, iPhone, iPad, Apple TV, and Apple Watch.

0. Click <strong>View in Mac App Store</strong>, then "Open App Store.app".

0. Provide your Apple ID and password. Get one if you don't already have one.

0. Scroll down to click <strong> See All</strong>.
0. Click "Sort by Most Recent".
0. Read through the Ratings to decide for yourself.

   ???

0. Click <strong>Download</strong> and provide your Apple ID.
   You'll need to establish an Apple ID.

0. Go through Apple's location verification if prompted.

0. Select the version to download:

   | File               | Date       | Download | Unpacked |
   | :----------------- | :--------- | -------: | ------: |
   | XCode_10.2.1       | 2019-04-17 |   ? GB | 6.1 GB |
   | XCode_9.0	        | 2017-09-19 | . ? GB | ? GB |
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

### XCode Upgrade


## More on OSX #

This is one of a series on Mac OSX:

{% include mac_links.html %}
