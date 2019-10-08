---
layout: post
title: "OpenCV SikuliX robot"
excerpt: "A robot sees what's on your screen and clicks on it"
tags: [Clouds, IoT]
date: "2016-12-20"
file: "opencv-sikulix-robot"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<img width="192" alt="opencv-sikulix-v01-192x133.png" src="https://cloud.githubusercontent.com/assets/300046/24071304/2de19d0a-0ba5-11e7-9cdc-c7903b2b3bcf.png" align="right">


This is a deep dive from the innnards up:

<a target="_blank" href="https://www.wikiwand.com/en/OpenCV">
OpenCV (Open Computer Vision)</a> is a utility used by many Artificial Intelligence packages
such as self-driving cars to understand images.
It is used to take pictures, recognize objects in the pictures, and the coordinates of objects
it recognizes in pictures.

SikuliX uses OpenCV to find the location of a picture provided to OpenCV.
SikuliX uses the location returned from OpenCV to mouse click on the screen,
or type as if a user is using a physical keyboard.

SikuliX does that and <a href="#SikuliXMethods">other methods</a> 
based on a script in its own IDE or in response to an API called by
a JavaScript scripting engine managed by Java, as organized by Selenium.
Alternately, calls from Python code organized within the Robot Framework.

Optionally, <a href="#Tesseract">Tesseract</a> provides OCR (Optical Character Recognition)
to extract text from pictures.

All this to make you more "productive" at playing games. ;)

## Why?

The benefit of repeating some action repeatedly (and not get bored or distracted) extends to:

   * Videographers making screencast videos in multiple takes
   * Salespeople use it to power their live demos.
   * Developers and testers going through a sequence of actions to reach a particular point in the UI needing debugging.

Here's how it works:
A picture is taken of your screen(s).
and the text and location of objects recognized in the picture is fed
to your program to click or type.
Your program then takes another round of picture taking
and visual object recognition to ensure the results are what are intended.

This uses a different, more generalized, approach than packages such as HP UFT which depended on
finding identifiers in the DOM (Document Object Model) behind each internet browser web page.



## Social

<a target="_blank" href="https://gitter.im/RaiMan/SikuliX-2014">
Gitter channel at<br/>
https://gitter.im/RaiMan/SikuliX-2014</a>

<a target="_blank" href="https://answers.launchpad.net/sikuli">
https://answers.launchpad.net/sikuli</a>


## Websites 

<a target="_blank" href="http://sikulix.com">
http://sikulix.com</a> is the new web page.

Detailed docs are at<br />
<a target="_blank" href="http://sikulix-2014.readthedocs.io/en/latest/basicinfo.html#sikulix-system-specifics">
http://sikulix-2014.readthedocs.io/en/latest/basicinfo.html#sikulix-system-specifics</a
(with source at https://github.com/RaiMan/SikuliX-2014-Docs)

(Ignore abandoned sites:<br />
http://sikulix.weebly.com/quickstart.html and <br />
https://sikulix.wordpress.com)

<a target="_blank" href="http://sikulix-2014.readthedocs.io/en/latest/">
http://sikulix-2014.readthedocs.io/en/latest/<br />
has the most detail, which are repeated several places:

Installer bits are obtained from Ubuntu <br />
<a target="_blank" href="https://launchpad.net/sikuli">
https://launchpad.net/sikuli</a>

<a target="_blank" href="https://github.com/wilsonmar/sikuli-scripts/">
https://github.com/wilsonmar/sikuli-scripts</a> 


## Versions

Sikuli was started somewhen in 2009 as an open-source research project at the User Interface Design Group at MIT by Tsung-Hsiang Chang and Tom Yeh.

There are three versions:

* 1.1.0 final (available since 2015-10-07)

   I've had installation errors with this version on my Mac.

   There is an entry on 2015-10-07 in Maven Central:<br />
   <a target="_blank" href="http://search.maven.org/#search%7Cga%7C1%7Ccom.sikulix">
   http://search.maven.org/#search%7Cga%7C1%7Ccom.sikulix</a><br />
   but I haven't tried to install it.

* SikuliX-2014 (version 1.1.x) from<br />
   <a target="_blank" href="http://nightly.sikuli.de/">
   http://nightly.sikuli.de</a>

   This is the one that worked for me.

   Install instructions below.

   NOTE: Code is at <a target="_blank" href="https://github.com/RaiMan/SikuliX-2014">
   https://github.com/RaiMan/SikuliX-2014</a>

* SikuliX2 in 2017 at<br />
   <a target="_blank" href="https://github.com/RaiMan/SikuliX2">
   https://github.com/RaiMan/SikuliX2</a>

   This is supposed to exist side-by-side with previous versions.

   https://github.com/RaiMan/Sikulix2opencv



<a name="SikuliXInstall"></a> 

## Installation

### Automated installers

A) <a target="_blank" href="https://github.com/wernight/docker-sikulix">
https://github.com/wernight/docker-sikulix</a>

B) <a target="_blank" href="https://github.com/dhoer/chef-sikulix">
https://github.com/dhoer/chef-sikulix</a>

C) Download and compile it locally<a target="_blank" href="https://github.com/Caesim404/sikulix-git/">*</a>

   exec java -Xmx512M -Dfile.encoding=UTF-8 -Dsikuli.FromCommandLine -jar /usr/share/sikulix/sikulix.jar "$@"

D) Manual install (see below)


### Manual install

Pre-requisites:

0. Install JRE 8 or 9
0. Install the Java language IDE you want to use (Eclipse or IntelliJ)
0. Install Eclipse or Robot Framework (which uses Python)
0. <a href="#SikuliXinstall">Download SikuliX</a> 

The installer installs its own version of Python.



<a name="Install-1.1.2"></a>

### Install-1.1.2 Dev build

1. Instructions below are based on run on Mac 10.12 (Sierra)
referencing http://sikulix.com/quickstart/

1. On a Mac, create a version-specific installer folder on your $HOME folder:

   <pre>
   cd ~
   mkdir sikulix-1.1.2-install
   cd    sikulix-1.1.2-install
   </pre>

0. Download from <a target="_blank" href="http://nightly.sikuli.de/">http://nightly.sikuli.de</a>
   right-click and select <strong>Save link As ...</strong>
   the link that says:

   sikulixsetup....jar

   At the time of writing, the URL is:

   https://oss.sonatype.org/content/groups/public/com/sikulix/sikulixsetup/1.1.2-SNAPSHOT/sikulixsetup-1.1.2-20170316.001623-90-forsetup.jar

   By the time you read this, the date in the link will change because the code is actively worked on.


0. Click the "md5" for the MD5 hash (a33616bac6d4f44785b89a02b110a0f8) to 
   verify download integrity 
   using whatever tool you use.


0. Expand the installer (in Downloads):

   <path><strong>java -jar sikulixsetup-1.1.2.jar</strong></pre>

   This creates file:<br />
   SikuliX-1.1.2-SetupLog. (which reflects what goes to the Terminal)
   and an empty <strong>SetupStuff</strong> folder.


0. Open the txt file and refresh it to see progress.

0. Click checkboxes for Jython and for Tesseract
   in the UI pop-up, then 
   <strong>Setup Now</strong>.

   <a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/24067208/edab8cc8-0b4f-11e7-9e3a-7e885ba69612.png">
   <img width="650" alt="sikulix 1 1 mac setup1 1974x1028.png" src="https://cloud.githubusercontent.com/assets/300046/24067208/edab8cc8-0b4f-11e7-9e3a-7e885ba69612.png"><br />(Click to open in full new screen)</a>

0. Click Setup Now for:

   <a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/24067322/47f0e9b6-0b51-11e7-9ab2-6f460f1d771e.png">
   <img width="488" alt="sikulix-1-1-setup2 976x816" src="https://cloud.githubusercontent.com/assets/300046/24067322/47f0e9b6-0b51-11e7-9ab2-6f460f1d771e.png"><br />(Click to open in full new screen)</a>

0. Click <strong>Yes</strong> for:

   <a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/24067348/a847fdae-0b51-11e7-80b3-c53a12041db5.png">
   <img width="650" alt="sikulix-1 1-setup3 1424x294" src="https://cloud.githubusercontent.com/assets/300046/24067348/a847fdae-0b51-11e7-80b3-c53a12041db5.png"><br />(Click to open in full new screen)</a>

0. Click <strong>No</strong> to pop-ups about 
   Mac native libs (jar's) previously installed into
   /Users/___/Library/Application Support/Sikulix/SikulixDownload_201610061722/...

0. Click Yes to download a stand-alone version of Python
   (No to get Jython 2.5 due to 2.7 UTF-8 warning):

   <a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/24067373/0acbcf64-0b52-11e7-9140-4b775cd39883.png">
   <img width="428" alt="sikulix-1 1 jython 856x368" src="https://cloud.githubusercontent.com/assets/300046/24067373/0acbcf64-0b52-11e7-9140-4b775cd39883.png"><br />(Click to open in full new screen)</a>

   ### Success!

0. Click 3 the boxs OK to the pop-up:

   ![sikulix-hello-working-269x156](https://cloud.githubusercontent.com/assets/300046/24073389/6c5a55ae-0bcd-11e7-8c16-133bb056477a.png)

0. Click "OK" to the "Hallo" pop-up.


   ### Clean up installers

0. In Finder, Move to Trash the installer file
   sikulixsetup-1.1.0.jar


   <a name="FoldersCreated"></a> 

   ### After Install

   QUESTION: How to verify a good install and use the program?

0. In Finder, move <strong>sikulix.app</strong>
   to your user's Applications folder.

0. In case you're curious, view the folders 
   (not necessary unless you run into problems)

   - Extensions folder
   - Lib folder contains the supporting stuff for Jython and JRuby
   - SikulixDownloads
   - SikulixDownloads_<em>versionstamp</em> contains 
   - SikulixLibs_<em>versionstamp</em> contains native libraries 
   - SikulixStore
   - SikulixTesseract
   <br /><br />

   Note different files are downloaded for Windows vs. Mac:

   * sikulixjython.jar
   * sikulixlibsmac.jar
   * sikulix.jar 
   * sikulixapi.jar
   <br /><br />



<a name="SikuliXScripting"></a>

## Sample scripts

0. PROTIP: Search for Sikulix scripts within GitHub:

   Here's one:

   <a target="_blank" href="https://github.com/lowkorn/SikuliX">
   https://github.com/lowkorn/SikuliX</a>

0. Click the Example folder, JavaCompile.sikuli, then <a target="_blank" href="https://github.com/lowkorn/SikuliX/blob/master/Example/JavaCompile.sikuli/JavaCompile.py"> JavaCompile.py</a>.

0. If you intend on updating this repository and contributing changes back to the author,
   sign-in to your own account and
   <strong>fork</strong> the repository under your own account.

0. PROTIP: Use Git to store Sikuli scripts. Install a Git client.

0. PROTIP: Create a Git folder to hold files associated with GitHub. 

   On a Mac:

   <pre>
   cd ~
   mkdir gits
   cd gits
   </pre>

0. Create a folder to hold sikuli repositories created when cloning from others:

   <pre>
   cd ~/gits
   mkdir sikulix
   cd sikulix
   </pre>

   You are now in the folder where you clone scripts from other repositories on GitHub.

0. Create a folder to hold repositories from lowkorn:

   <pre><strong>
   mkdir lowkorn
   cd lowkorn
   </strong></pre>

0. Clone one I've found:

   <pre><strong>
   git clone https://github.com/lowkorn/SikuliX
   </strong></pre>

   Response:

   <pre>
Cloning into 'SikuliX'...
remote: Counting objects: 34, done.
remote: Total 34 (delta 0), reused 0 (delta 0), pack-reused 34
Unpacking objects: 100% (34/34), done.
   </pre>

   Repositories cloned locally you can later update with changes made, using commands such as:

   <pre><strong>
   git remote add upstream https://github.com/lowkorn/SikuliX
   git remote -v
   git pull upstream master
   </strong></pre>

   Response:

   <pre>
remote: Counting objects: 34, done.
remote: Total 34 (delta 0), reused 0 (delta 0), pack-reused 34
Unpacking objects: 100% (34/34), done.
From https://github.com/lowkorn/SikuliX
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> upstream/master
   </pre>

   Alternately, to do a two-stage sync per https://help.github.com/articles/syncing-a-fork/

   <pre>
git fetch upstream
git checkout master
git merge upstream/master
   </pre>

0. On GitHub.com, sign-in to your own account and
   create a repository (named <strong>sikulix-scripts</strong> in this example) with a READM.md file.

0. Clone your own sikulix-scripts repo to your laptop
   (in this example, substitute "wilsonmar" with your own account name):

   On a Mac:

   <pre>
   cd ~/gits/sikulix
   mkdir wilsonmar
   cd wilsonmar
   git clone https://github.com/wilsonmar/sikulix-scripts
   cd ~/sikulix-scripts
   </pre>

   Into this folder the SikuliX IDE should read and save scripts.




<a name="SikuliXCommands"></a>

## SikuliX Commands

SikuliX can be called by batch scripts from a Terminal/Run command line.

SikuliX recognize both one-character flags and longer options:

   sikulix --args -i

   -t or --test <em>sikuli-file</em>

   -r or --run <em>sikuli-file</em>

   -s or --stderr



<a name="SikulixIDE"></a>

## Use IDE for SikuliX Scripting

0. In your Mac's Finder, get to Applications folder by pressing <strong>shift+command+A</strong>.


0. Type S and double-click the SikuliX IDE app to open it.

   ![sikulix starting popup 198x154](https://cloud.githubusercontent.com/assets/300046/24074982/a021e3cc-0be9-11e7-84cc-c0d2b8a95bc7.png)

   The IDE should appear:

   <a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/24073600/0a0f4230-0bd0-11e7-88b5-50c23c0d3d9f.png">
   <img width="300" alt="sikulix-1 1 1-ide-landing-1022x699" src="https://cloud.githubusercontent.com/assets/300046/24073600/0a0f4230-0bd0-11e7-88b5-50c23c0d3d9f.png"><br />(Click to open image in full new screen)</a>

Next, let's get some sample files the program can work with.



SikulixAppData folder


0. Press # to insert a comment.

0. Press Ctrl+S to save the file as a ".sikuli" file.

   PROTIP: A keyboard press is quicker than moving the mouse.


   <a name="TakePicture"></a>

   ### Take a picture

0. Create a small picture where you want Sikuli to click or type.

   This can be done by clicking the "Take screenshot" icon, positioning the mouse to the top-left corner,
   drag to the lower-right corner, then release the mouse.

   Or press a hot-key (Command + Shift + 2). 

   QUESTION: If a dialog disappears with mouse motions, 
   press the keystroke to take a picture of the screen,
   then use a photo editing program to cut out an area,
   and paste the little picture into the IDE.

   <a name="SikuliXActions"></a>

   ### SikuliX Actions and Methods

0. <a target="_blank" href="http://doc.sikuli.org/globals.html#App">Open an app</a>:

   <pre>
PathFirefox = r"C:\Program Files (x86)\Mozilla Firefox\firefox.exe"
App.open(PathFirefox)
   </pre>

   PROTIP: Instead of the hassle of using double slashes to specify special characters,
   put an 4 in front of calls to take the backslash and quotes as part of the word/sentence.

0. Define variables:

   <pre>
   imageExpected1=3;
   </pre>

0. Define action:

   <pre>
   click(SearchImageButton)
   wait(imageExpected1)
   type("hello")
   </pre>

0. Type the verification actions.

0. Save a sample script with comments after \# character:

   On a Mac:

   <a target="_blank" href="http://doc.sikuli.org/tutorials/helloworld/helloworld-mac.html">
   http://doc.sikuli.org/tutorials/helloworld/helloworld-mac.html</a>

   On Windows:

   <a target="_blank" href="http://doc.sikuli.org/tutorials/helloworld/helloworld-win.html">
   http://doc.sikuli.org/tutorials/helloworld/helloworld-win.html</a>

0. Run the file.

   ### More actions

   <a target="_blank" href="http://doc.sikuli.org/genindex.html">
   http://doc.sikuli.org/genindex.html</a> is an alphabetical index of all methods and command options.

   JavaDocs of classes are at<br />
   http://nightly.sikuli.de/docs/index.html

   <a target="_blank" href="https://github.com/RaiMan/SikuliX-2014/tree/master/StuffContainer/testScripts">
   https://github.com/RaiMan/SikuliX-2014/tree/master/StuffContainer/testScripts</a><br />
   has several sikulix scripts.


## Videos

<a target="_blank" href="https://github.com/jobiaj/Learning-Sikuli-Scripting">
   jobiaj</a>

0. <a target="_blank" href="https://www.youtube.com/watch?v=VdCOg1bCmGo">
   Intro and setup</a> 13 Nov 2015

https://www.youtube.com/watch?v=3LRm3fJQ6AU

0. <a target="_blank" href="https://www.youtube.com/watch?v=I-UYoezac4Q">
   The Basics</a> shows how to (in Windows) open the Calculator and click a calculation.

0. <a target="_blank" href="https://www.youtube.com/watch?v=vuqfDdPlI88">
   Conditional Automation</a>

0. <a target="_blank" href="https://www.youtube.com/watch?v=I-UYoezac4Q">
   Conditional Looping</a>

0. <a target="_blank" href="https://www.youtube.com/watch?v=xTTIikzxFfc">
   Game Example</a>

Others:

https://www.youtube.com/watch?v=8y41vKeGM9U
5 Apr 2016

https://www.youtube.com/watch?v=I-UYoezac4Q

https://www.youtube.com/watch?v=3LRm3fJQ6AU
24 Jul 2016

https://www.youtube.com/watch?v=H2cK85z_8bs
Keywords and Misc Stuff</a> 17 Nov 2016

<a target="_blank" href="https://www.youtube.com/watch?v=t6-k6m3Qmj0&list=PLE06A399AE2DD62C9">
Playlist of Sikuli scripting (no sound)</a>


### Sample scripts


0. Navigate to where you can open a .sikulix file

   ![sikulix open sample](https://cloud.githubusercontent.com/assets/300046/24830392/296c5e5e-1c53-11e7-8f26-8ea42cb611b3.png)

0. Switch to an internet browser:

   * <a target="_blank" href="https://github.com/bpteam/SikuliX/blob/master/sinoptik_test.sikuli/sinoptik_test.py">
   bpteam's Firefox browser opens https://sinoptik.ua and search on Windows</a>
   within a try-except block.

   * <a target="_blank" href="https://github.com/vincent-tygron/SikuliX">
   vincent-tygron/SikuliX contains a full suite of scripts for an app</a><br />
   https://github.com/vincent-tygron/sikulix-160429
   using defined functions

   * <a target="_blank" href="https://github.com/Excedrin/ch/blob/master/ch.sikuli/ch.py">
   Excedrin provides several variables to play Windows game Clicker Heroes</a> at<br />
   https://github.com/windows-2048/The-Windows-Intel-Fastest-Mouse-Clicker also at<br />
   https://sourceforge.net/projects/fast-mouse-clicker-pro/ at<br />
   git clone git://git.code.sf.net/p/fast-mouse-clicker-pro/code fast-mouse-clicker-pro-code<br />

   * <a target="_blank" href="https://github.com/randhier/sikulix">
   randhier packages maven to install java-language scripts calling sikuli to exercise Spotify</a>

   * <a target="_blank" href="https://github.com/ntchris/sikulix/blob/master/baiduAutoSpeed.sikuli/baiduAutoSpeed.py">
   ntchris provides Windows command line scripts to invoke the script at a specified time to visit Baidu.com</a>

   <a target="_blank" href="https://github.com/woodplastic/SikuliX/blob/master/runsikulix.cmd">
   woodplastic has a Windows cmd file to invoke a jar file</a>

   <pre>
wait(Pattern("1437608642600.png").similar(0.90),15)
click(Pattern("1437608666644.png").similar(0.90).targetOffset(82,125))
   </pre>

   * <a target="_blank" href="https://github.com/rstormsf/sikulix-junk">
   rstormsf's experiments for captcha</a>


   <br /><br />

0. Let me know if you find others.

0. PROTIP: Additional Sikuli scripts from the internet:

   * <a target="_blank" href="https://github.com/lowkorn/SikuliX/blob/master/Example/JavaCompile.sikuli/JavaCompile.py">
   compile Java</a>
   <br /><br />

0. Let me know if you find others.




## Alternatives

### Java

* <a target="_blank" href="https://github.com/botero50/gap.sikulix/blob/master/src/test/java/com/gap/sikulix/AppTest.java">
boter50 clicks http://www.pianotiles.org/ which provides audio feedback</a>
The script has a java unit test with eclipse perfs settings

https://github.com/lowrin/sikulix-test/blob/master/src/main/java/Main.java

<a target="_blank" href="https://www.youtube.com/watch?v=LUcFP02EOuA">
How to use Sikuli Java API - Part 2</a>


### Jython

https://github.com/saint1729/SikuliX-Jython


### Robot framework

https://github.com/jaredfin/SikuliXRobotLibrary

### Scala

https://github.com/haradakazuy02/SikulixScript

Cucumber:
https://github.com/dilcom/sikulix_formatter

Fitnesse:
https://github.com/sergebug/SikuliX-fixture

### Ruby

https://github.com/rssdev10/sikulix-ide-templates

## Resources

http://www.praqma.com/stories/automating-gui-tasks-with-sikuli-and-jenkins/


## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}
