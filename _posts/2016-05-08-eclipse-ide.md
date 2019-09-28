---
layout: post
title: "Eclipse IDE (STS and for Selenium)"
excerpt: "Open source and free since the 90's."
tags: [ML, GE]
date: "2017-05-08"
file: "eclipse-ide"
image:
# feature: banner-eclipse-1900x500-321k.png
  feature: https://user-images.githubusercontent.com/300046/28752993-0d1437a4-74fa-11e7-99cc-ed04f625174c.png
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article contains notes on my personal experience installing and using Eclipse IDE.

Eclipse was originally funded by IBM as open source.

## Installation

Chose an edition of Eclipse IDE:

   a. The edition working with Web (HTML) is licensed (costs money)<br />
   b. <a href="HomebrewInstall">The "Standard" edition Homebrew</a> for working with Java is free<br />
   c. <a href="#STS">STS</a> (Spring Tools Suite) edition<br />

<a target="_blank" href="https://www.predix.io/resources/tutorials/tutorial-details.html?tutorial_id=1574&tag=1607&journey=Development%20environment&resources=1466,1557,1574,1545">
NOTE: Predix Dev Tools: Set up a Mac OS X development environment</a> for the older Yosmite (Mac OS 10.10).

<hr />

<a name="HomebrewInstall"></a>

## b. Standard Edition Homebrew install #

The simplest way to install the <strong>standard</strong> edition of Eclipse
is to use [Homebrew](/macos-homebrew/) to 
<a target="_blank" href="http://macappstore.org/eclipse-java/">eclipse-java</a>:

0. Use brew cask to install GUI programs:

   <pre><strong>brew cask install eclipse-java
   </strong></pre>

   The response (as of 24 July 2017):

   <pre>
==> Satisfying dependencies
==> Downloading https://www.eclipse.org/downloads/download.php?file=/technology/
######################################################################## 100.0%
==> Verifying checksum for Cask eclipse-java
==> Installing Cask eclipse-java
==> Moving App 'Eclipse.app' to '/Applications/Eclipse Java.app'.
🍺  eclipse-java was successfully installed!
   </pre>

   Remember the name of the app is "Eclipse Java".

   ### Invoke

0. On a Mac, in a Finder click Go > Applications or
   click the "rocket ship" icon if you have that at the bar at bottom of the screen.

0. Type the portion of "Eclipse Java" until the icon appears.

   Alternately, download the installer from:<br />
   <a target="_blank" href="
   https://www.eclipse.org/downloads/">
   https://www.eclipse.org/downloads</a>
   and add STS components.

   ### Add STS

   To add STS inside a Standard Eclipse install:

0. Help > Eclipse Marketplace and Find: Spring.
0. Click Install.
0. In Confirm Selected Features, check all (for AOP, AERI, Roo, etc.) explained later.

   <a target="_blank" href="https://marketplace.eclipse.org/content/spring-tool-suite-sts-eclipse">
   Included with STS</a> (Spring Tools Suite)
   is the developer edition of Pivotal <strong>tc</strong> Server, 
   the drop-in replacement for Apache Tomcat web server optimized for Spring.

   The Spring Insight console, tc Server Developer Edition, 
   provides a graphical real-time view of application performance metrics that lets developers identify and diagnose problems from their desktops.

   QUESTION: Can actions inside Eclipse be automated?


   ### Uninstall Homebrew

0. The nice thing about using Homebrew is uninstallation is easy:

   <pre><strong>brew cask uninstall eclipse-java
   </strong></pre>


<strong>Alternately:</strong>


<a name="STS"></a>

## c. STS install from spring.io #

PROTIP: Use the Homebrew module for the Spring Tools Suite (STS) for Mac.

1. In a Terminal:

   <pre><strong>brew cask install sts
   </strong></pre>

   The response (as of 29 Feb 2018):

   <pre>
==> Satisfying dependencies
==> Downloading http://download.springsource.com/release/STS/3.9.2.RELEASE/dist/
######################################################################## 100.0%
==> Verifying checksum for Cask sts
==> Installing Cask sts
==> Moving App 'STS.app' to '/Applications/STS.app'.
🍺  sts was successfully installed!
   </pre>

2. Proceed to <a href="#FirstTime">First Time Config</a> below.


Alternately:

1. Use a modern internet browser to the STS download page at<br />
   <a target="_blank" href="https://spring.io/tools/sts/all">
   https://spring.io/tools/sts/all</a>

0. Click on the web page "Based on Eclipse 4.7.0" under "Mac", then "dmg 397MB".

0. Click "Save File" in the pop-up if it appears.

0. In the Finder's Downloads folder,
   CAUTION: If you see a number to the right of the "sts-bundle" folder name,
   another installer was downloaded previously.
   If there is another STS app there, move it to Trash.

0. Expand the installer file just downloaded by clicking it :

   <tt>spring-tool-suite-3.9.2.RELEASE-e4.7.2-macosx-cocoa-x86_64.dmg</tt>

0. Drag the green "STS" icon (for the Spring brand) and drop it on the Applications folder
   (this is a type of manual security requirement Apple imposes to copy into the Applications folder.
0. Close the dialog by clicking the top left-most (red) button.

0. Switch to Finder and click the eject icon for the STS installer under the Devices section.

0. Click Applications if it's among Favorites or if it's not: 

   <a name="FirstTime"></a>

   ### First time config.

0. Switch to Finder and navigate to the <strong>/Applications</strong> folder.
   (select the Go menu and select Applications).

   NOTE: The version at time of this writing is dated December 21, 2017.

0. If you will be using the app a lot, drag and drop the STS icon to Apple's bar at the bottom.

0. Open STS by double-clicking the icon. It may take a minute to load the first time.

0. When you invoke Eclipse for the first time, you may see a "Welcome" screen.
   If so, at the lower-right of the screen, uncheck "Always show Welcome at start up".

0. If you get an "Are you sure you want to open it?", click Open for the Launcher pop-up:

   <!-- eclipse-sts-launcher-new.png -->

   ### Workspace config.

   By default, the folder is something like (where you see your account instead of "wilsonmar"):

   <tt>/Users/wilsonm/Documents/workspace-sts-3.9.2.RELEASE</tt>


0. PROTIP: Change the <strong>Workspace</strong> to a directory per your personal or your organization's standards
   which is under Git source version control.

   PROTIP: I like to create under my persoal home directory a folder named "gits" for various projects. 
   Others may prefer "projects" or "dev".

   Under that I create a folder for the account name in GitHub which in my case is "wilsonmar".
   If the repository is from someone else, I create a folder (such as "baedlund").

   Under that I let my git client create repository folders cloned from my GitHub account.

   PROTIP: STS will create folders that don't yet exist.

0. Click "Use this as the default and do not ask again", then the blue Launch button for 
the Eclipse Dashboard in the middle pane.

0. In the Eclipse Spring Tools Suite menu bar, select File, Switch Workspace, and Other... 
   to change the Workspace folder.


   <a name="Tutorials"></a>

   ## Tutorials

0. Take the time to click "GUIDES" to visit https://spring.io/guides such as

   https://spring.io/guides/gs/accessing-twitter

   <a target="_blank" href="https://www.youtube.com/watch?time_continue=70&v=6mtI4vmsQ08">
   VIDEO:</a> Spring Tips: Spring Tool Suite" by Josh Long is dated Dec 21, 2016 is based 3.8.2.

   <a target="_blank" href="https://www.udemy.com/spring-framework-4-course-and-core-spring-certification/learn/v4/t/lecture/3106412?start=0">
   This video course on Udemy</a> uses STS 3.6.4 under Java JDK 8u45.

   Pluralsight.com has a two-part series on Eclipse
   from 2013 by Tod Gentille (@Tod Gentille) of syncorsystems.com:

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/eclipse-guided-tour-part1/table-of-contents"> Part 1</a>
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/eclipse-guided-tour-part2/table-of-contents"> Part 2</a>
   <br /><br />

   On YouTube:

   * <a target="_blank" href="https://www.youtube.com/watch?v=BJAKDaaWfh0&t=20s">
   Introduction to Eclipse: Driving Java Productivity</a> from 2012
   by Marakana
   <br /><br />


<a name="Plugins"></a>

## Plug-ins #

* Cargo Maven Plug-in

* Checkstyle

* EclEmma - Java Code Coverage for Eclipse

* Spelling checking

* Formatter

* <a target="_blank" href="https://github.com/Agilefant/agilefant/wiki/Installing-Agilefant-development-environment-on-Mac">Agilefant</a>


<a name="FirstTime"></a>

## Preferences #

QUESTION: Is there a command line script that does all this automatically?

0. Click Spring Tool Suite - Preferences - 

0. Expand Java - Expand Code Style - select Formatter - Import - select
   the formatter-rest.xml file containing code formatting from the course repository downloaded from 
   https://github.com/eugenp/REST-With-Spring/blob/module1/eclipse/formatter-rest.xml
   - click Apply.

0. Expand XML > expand XML Files > click Editor

   * set: Line Width to 180 (from default 72)
   * check: Align final bracket in multi-line element tags
   * check: Format comments (the default)
   * check: Join lines (the default)
   * check: Indent using spaces (instead of default tabs)
   * set: Indentation size to 3 (instead of 1)
   * uncheck: Use inferred grammar in absence of DTD/Schema
   * click Apply
   <br /><br />

0. Expand Web > expand HTML Files > click Editor

   * set: Line Width to 180 (from default 72)
   * check: Align final bracket in multi-line element tags
   * check: Indent using spaces (instead of tabs)
   * set: Indentation size to 3 (instead of 1)
   * within Inline Elements, select: input
   * click: Remove 
   * uncheck: everything else (from the Formatting section)
   * click Apply
   <br /><br />

0. Click "Review IDE configuration settings" to "Review the IDE's most fiercely contested preferences".

   * Show line numbers in editor: yes.
   * Check spelling
   * Execute jobs in background
   * Encode text files with UTF-8
   * Enable preference recorder
   <br /><br />

0. Click "Apply and Close" to close the Preferences dialog.

The changes above update the <tt>settings.properties</tt> text file for the environment envTarget. ???


<a name="ImportProject"></a>

## Import Project #

A flexible approach to define a single run configuration for an imported project 
keeps the parent and the working modules separate.

First, import the parent <strong>pom.xml</strong> and run a build to create the .project file the IDE uses.

1. In the Eclipse (Spring Tools Suite) 
2. Open your existing workspace in Eclipse STS.

3. Choose menu File -> Import...
4. If you're using Maven, select that. Double-click "Existing Maven Project". Click Next.
5. Click Browse... to open Finder to your default workspace.
6. Click to navigate to the project folder which contains the pom.xml file Maven reads. Click Open.
7. Deselect All.
8. Click the checkbox to just the pom.xml file.
9. Type "PARENT" over whatever is under the "Add project(s) to working set" field.

   Next, import files specific only to the child module you are actively working on.

3. Choose menu File -> Import...
4. If you're using Maven, select that. Double-click "Existing Maven Project". Click Next.
5. Click Browse... to open Finder to your default workspace.
6. Click to navigate to the project folder which contains the pom.xml file Maven reads. Click Open.
7. Deselect All.
8. Click the checkbox to the common/pom.xml and um-webapp/pom.xml for the module you are working on (starting with lesson 1).

9. Type "<strong>WORK</strong>" under the "Add project(s) to working set" field.
10. Click Finish.

11. There should now be three top-level items in the Package Explorer.


   ### Compile from Eclipse #

0. Click the black arrow icon to the right of the green Run icon.

   <img width="183" alt="eclipse-run-config" src="https://user-images.githubusercontent.com/300046/36644221-f74fc9b2-1a24-11e8-9aca-739b78c24a34.png">

0. Right-Click on "Maven Build", then "New".
0. In Base directory type in a variable: <tt>${project_loc}</tt> so that it points to whatever project is selected in Package Explorer.
0. In Goals: clean install
0. In User Settings: ???
0. Click Apply to save.
0. Click Run.
0. Look in the Console pane for "BUILD SUCCESS".

0. To compile and run your program, keep the "Main" app Java file tab active and 

   * use Run option available in the Eclipse IDE or 
   * press <strong>Ctrl + F11</strong> to compile and run your MainApp application. 
   <br /><br />

   If everything is fine with your application, this will print the following message in Eclipse IDE's console.


<hr />

<a name="NewProject"></a>

## New Project #

0. Right-click on the blank part under "Project Explorer" to select "New" and "Other".

0. In the New Select a Wizard dialog, select "Java Project", then "Next".

0. Type your Project Name.

0. It's best to leave the default JRE version because additional downloads are necessary
   if you want to change it.

0. Click Finish.

0. Check "Remember" then click "Yes" to associate the project with a perspective.

   Notice several JRE System Libraries were added automatically.
   .jar files are Java classes. 
   .dll files are Windows classes.

   Notice the "src" folder is created to hold source code.

0. Right-click the app name to select Package (test suite).

0. Name it "Basics".

0. Right-click on "Basics".

0. Type the Name for Java Class, such as "helloworld".



<a name="Perspectives"></a>

## Perspectives #

Perspectives define the size and location of different views on the workspace window.

0. Right-click on the <strong>Perspectives</strong> icon at the upper-right corner
   and select "Show Text".

0. Click the icon to the right of the Perspective icon to open a list of perspectives.
0. Click Cancel.



## Tomcat 8 server

Seeing how source code displays locally is important to not upload bad code into the team repository.

1. Download and unarchive the latest Tomcat 8 distribution.

   brew install tomcat

   Alternately, install manually using instructions at https://wolfpaulus.com/mac/tomcat/

2. To see where brew stores the formula:

   brew --prefix tomcat

   The response:

   <pre>
/usr/local/opt/tomcat
   </pre>

   Use that in the next step:

2. In STS Preferences - expand Server - click Runtime Environment - Add - Apache Tomcat v9 (the latest version).
3. Paste "/usr/local/opt/tomcat". 
4. Drill down to bin, Catalina. /usr/local/Cellar/tomcat/9.0.5/bin
5. Press Next.

   <img width="688" alt="eclipse-sts-tomcat-config" src="https://user-images.githubusercontent.com/300046/36644994-57c7f476-1a30-11e8-9054-a83c338ed941.png">

6. Customize server (double click the server in the Servers view) -- In the Publishing section - check Never Publish Automatically -- In the Timeouts section - set the Start timeout to 90 sec 

   ### Add server

3. Add the Servers view using a mouse to click menu Window - Show View - Servers.
4. Click the link to "create a new server" (or rightclick - New - Server).
6. Expand Apache by clicking the icon to its left.
7. Choose "Tomcat v9 Server" Runtime Environment defined above.
8. Click Next.

5. Customize server (double click the server in the Servers view) -- In the Publishing section - check Never Publish Automatically -- In the Timeouts section - set the Start timeout to 90 sec 

6. Start from folder "/Library/Tomcat" or /usr/local/opt/tomcat" if brew was used to install:

   catalina run

   Alternately, use shell scripts:

   $ /Library/Tomcat/bin/startup.sh

   $ /Library/Tomcat/bin/shutdown.sh

7. Install a tiny freeware app, providing a UI to quickly start/stop Tomcat. It may not say so, but Tomcat Controller works on macOS 10.12 just fine.

   http://www.activata.co.uk/tomcatcontroller/

8. In a browser, go to 

   http://localhost:8080


0. Customize server (double click the server in the Servers view) -- In the Publishing section - check Never Publish Automatically -- In the Timeouts section - set the Start timeout to 90 sec 


## Shortcuts

To go back to previous edit location: Control+Q

* <a target="_blank" href="https://www.youtube.com/watch?v=C5glFtpuy0U">
   Keyboard shortcuts</a> for constructors.

   <a target="_blank" href="http://goo.gl/OI9DU">Cheatsheet at http://goo.gl/OI9DU</a>

https://www.youtube.com/watch?v=ZUM9jEhLie0

https://www.youtube.com/watch?v=E3hKgb4aLHM

https://www.youtube.com/watch?v=X8Xw7FWw49E

