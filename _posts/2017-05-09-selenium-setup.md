---
layout: post
title: "Selenium Setup"
excerpt: "How to emulate real users touching your web apps using Python controlling Selenium and Beautiful Soup for reading HTML"
tags: [Selenium, Testing, Python]
date: "2019-12-11"
file: "selenium-setup"
image:
# selenium-setup-typing-1900x500.jpg 
  feature: https://user-images.githubusercontent.com/300046/70838274-b8d53f00-1dc4-11ea-8837-0435d7994c52.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article contains notes on installing, coding, and running Selenium.

1. Run in Google Cloud a Docker image contaning Selenium and associated software.
2. <a href="#Docker">Run Docker image containing Selenium</a> 
   built using <a href="#Ansible">Ansible scripts that created the image.</a>
3. <a href="#RunMaven">Run after download from GitHub, then invoke "as is" using Maven</a>

4. <a href="#MySamples">Explain sample files</a>.
5. <a href="#Invocation">Invoke a run using starter samples</a>.
6. <a href="#CrossBrowser">Run across various browsers</a> - Firefox browser, IE, etc.
7. <a href="#Obtain">Obtain jars and drivers</a> if they have changed.
8. <a href="#CodeJava">Adapt the starter a basic starter</a> (Java in Selenium driving Chrome).

9. Update of results to SonarQube.
10. <a href="#ReadCSV">Add CSV data processing</a>
11. <a href="#Excel">Add Excel data processing</a>
12. Add <a target="_blank" href="https://wilsonmar.github.io/opencv-sikulix-robot/">OpenCV (via SikuliX2)</a> to recognize portions of pictures
13. Add <a target="_blank" href="https://wilsonmar.github.io/tesseract/">Tesseract</a> to extract text from pictures (OCR = Optical Character Recognition)

14. Run by CA DevTest
15. Run in SauceLab Cloud

<hr />

## Some misconceptions

When we mention "Selenium" and "performance testing" in the same sentence,
the first thing that most people say is 
<a target="_blank" href="http://www.pushtotest.com/selenium-load-performance-testing">
"you can only run a few users on a machine"</a>.

But I'm not talking about running several browser instances on each single machine.

I'm talking about running Selenium once 
while another program converts what goes back and forth over the network into a script.

The secret sauce is ...


## Running example

Selenium has no GUI. It runs as a console

However, reports are produced by TestNG, a plug-in to Selenium.


<a name="Docker"></a>

## Docker images

Docker images containing Selenium server:



<a name="Ansible"></a>

## Ansible

Ansible task files to establish Selenium server:

* https://github.com/arknoll/ansible-role-selenium
* https://github.com/quarkslab/ansible-selenium-server
* https://mtlynch.io/testing-ansible-selenium/


<a name="RunMaven"></a>

## Run using Maven after GitHub

1. Install Maven.
0. Install Selenium.
0. Install the various browsers Selenium will control (Chrome, Firefox, etc.).
0. Navigate to or create a folder to hold a new folder to be created by Git.
0. Clone from GitHub a repository containing sample tests:

   <tt><strong>git clone https://github.com/wilsonmar/Selenium-samples<br />
   cd Selenium-samples
   </strong></tt>

0. Select a folder:

   <tt><strong>cd Python-soup
   </strong></tt>

   Look at the root layer of the repository.
   These files are there for use with Eclipse IDE:

   * .classpath
   * .project
   * .settings
   * .metadata
   <br /><br />

   Some prefer to add them in .gitignore so they are not in the repo.

   ### .gitignore .DS_Store

   `.DS_Store` files should be ignored. They are created by MacOS.
   There is an entry for it in the `.gitignore` file so they are not stored in GitHub.


   ## Maven

0. Invoke Maven to download dependencies and run Selenium:

   <tt><strong>mvn clean verify -Pbrowser-phantomjs
   </strong></tt>
   
   Maven creates a folder named `target` to receive downloads before starting Selenium.

   `verify -Pbrowser-phantomjs` specifies use of the PhantomJS headless browser.
   Alternately, other browsers:

   <tt><strong>mvn clean verify -Pbrowser-chrome
   </strong></tt>

   <tt><strong>mvn clean verify -Pbrowser-firefox
   </strong></tt>

   mvn clean verify -Pbrowser-edge
   
   mvn clean verify -Pbrowser-internet-explorer

   mvn clean verify -Pbrowser-opera

   PROTIP: Several separate runs are needed to test on several browsers.

   At the end of the run, you should see:

   `SUCCESS`


<a name="MySamples"></a>

## View Sample Selenium scripts

0. If you're not using an IDE, use the Atom text editor to open a folder list:

   <tt><strong>atom .
   </strong></tt>

0. View the `pom.xml` file.

   The browsers handled by Selenium are identifined by a <strong>profile</strong> 
   with a <strong>property</strong> within the 
   `pom.xml` file which also specifies to Maven what dependencies to download 
   and how to run Selenium.

   PROTIP: If you work within enterprise firewalls, change the external URLs to internal ones,
   which may be managed within Nexus or Artifactory servers.

0. Dive into folder to view:<br />
   `src/test/resources/webdrivermanager.properties`.

   Here is where Maven knows to download drivers.

   PROTIP: The `LATEST` is specified. But a specific version would ensure that all drivers downloaded
   are the ones previously tested to work with each other. 
   Specific versions can be specified with java invocation:

   <pre>
-Dwdm.chromeDriverVersion=2.25
-Dwdm.internetExplorerVersion=2.46
-Dwdm.operaDriverVersion=0.2.0
-Dwdm.edgeVersion=3.14366
-Dwdm.phantomjsDriverVersion=2.1.1
-Dwdm.geckoDriverVersion=0.11.1
   </pre>

   See <a target="_blank" href="https://github.com/bonigarcia/webdrivermanager">
   https://github.com/bonigarcia/webdrivermanager</a>

0. Dive into the `src` folder.

   Notice there is a `main` and a `test` folder.
   Under each is a folder path:<br />
   `java/selenium/utils` 

   At the end of that path under `main` contains a 
   `TestUtils.java` file which defines generic Java utility functions such as
   randomBetween, isDuplicatePresent, isAllEquals.

   Selenium is all about testing, so the end of 
   the path under `test` contains many more java files to control the browser.
   
   `test/java/selenium/configurations/TestConfig.java` makes use of 
   properties `browser.name` and `base_url` retrieved by variables in<br />
   `main/java/selenium/configurations/TypedProperties.java`.

   PROTIP: Properties controlling a specific test are defined in properties files 
   rather than hard-coded into code so that different properties can be used during a run
   by temporarily replacing the file.


   ### SeleniumTestWrapper

   Tests are driven by a wrapper which App-specific test code extend:

0. Look in `SeleniumTestWrapper.java` defined as a `abstract class` which are extended by other code.

   Code in the file controls agent strings and cookies that browsers automatically send back to servers.

   The code also manages the screen dimensions of the browser window.

   These enable app-specific test code to focus on business.
   Under the Annotations folder are files that define 
   <a target="_blank" href="https://medium.com/@iammert/annotation-processing-dont-repeat-yourself-generate-your-code-8425e60c6657">
   code generation</a> by the Java compiler.


   ### Annotations

   <a target="_blank" href="https://en.wikipedia.org/wiki/Java_annotation">
   WIKIPEDIA</a>,
   <a target="_blank" href="https://dzone.com/articles/how-annotations-work-java">
   DZONE</a>

   Each Java compiler annotation: @Before, @Rule, and @After is defined within code imported: 

   <pre>
import org.junit.Before;
import org.junit.Rule;
import org.junit.After;
   </pre>

   The annotation code imported add additional functionality such as logging.
   These decorators also provide metadata (data about data).

   Instead of using Java inheritance,
   Java frameworks Spring and Hibernate use AOP (Aspect oriented programming) to provide a mechanism to inject code for preProcessing and postProcessing for an event. A "hook" in code before and after a method execution for consumer code in those places.


   ### App-specific Tests

0. Edit the file defined to test an app:

   `src/test/java/selenium/testcases/SearchIT.java`

   The file contains annotations:

   <pre>
@BrowserDimension(XLARGE)
@Browser(skip = { INTERNET_EXPLORER, EDGE, PHANTOMJS })
   </pre>

   These annotations are defined by imports:

   <pre>
import selenium.utils.annotations.browser.BrowserDimension;
import selenium.utils.annotations.browser.Browser;
   </pre>

   The earlier version, 2.53 and below, used these libraries:

   <pre>
import org.openqa.selenium.Dimension;
   </pre>   

   The earlier 2.x code <a target="_blank" href="http://www.seleniumeasy.com/selenium-tutorials/set-browser-width-and-height-in-selenium-webdriver">was</a>:

   <pre>
		WebDriver driver = new FirefoxDriver();
		driver.navigate().to("http://google.co.in");
		System.out.println(driver.manage().window().getSize());
		Dimension d = new Dimension(420,600);
		//Resize the current window to the given dimension
		driver.manage().window().setSize(d);
   </pre>

   <a target="_blank" href="https://stackoverflow.com/documentation/selenium-webdriver/10093/setting-getting-browser-window-size#t=201708210126568830045">
   Maximize window size</a>

   QUESTION: How can we read the code in these annotation libraries?


   ### Page Objects

   The core driving code refers to definitions within the <strong>pageobjects</strong> folder:

   <pre>
   StartPage startPage = PageFactory.initElements(getDriver(), StartPage.class);
   HeaderSearch search = PageFactory.initElements(getDriver(), HeaderSearch.class);
   SearchResultPage searchResultPage = PageFactory.initElements(getDriver(), SearchResultPage.class);
   </pre>

   See <a target="_blank" href="http://www.seleniumhq.org/docs/06_test_design_considerations.jsp">
   Selenium Design Considerations</a>

   The Page Object design pattern separates <strong>locator</strong> definitions in a separate java file
   so that various tests only need to refer to a reference rather than reduntantly specifying the
   way to locate objects on each page. This reduces maintenance over time as the website HTML changes.
   Change the locator technique in one place and all tests are good again.

   <pre>
   @find
   </pre>


   The basic rule is that tests don't declare variables (to manage state on their own),
   manipulate the DOM directly,
   nor create objects (using the "new" constructor keyword).

   ### Webdriver Install

   There are Web Driver programs for each combination of operating system (macOS, Windows, Linux, etc.), internet browser (Chrome, Firefox, etc.) and
   each version (78, 79, etc.). This means the Web Driver you install today would likely be obsolete when a new version of the browser is automatically installed on your machine.
   
   PROTIP: There are two ways to install Selenium Web Driver. One is to manually install for whatever is your current version. The other is to use a Webdriver package manager.

   <a name="WebdriverManager"></a>

   ### Webdriver Manager

   <a target="_blank" href="http://bonigarcia.github.io/">Professor Boni Garcia</a> (in Madrid, Spain) took the initiative to create and maintain <a target="_blank" href="https://github.com/bonigarcia/webdrivermanager">https://github.com/bonigarcia/webdrivermanager</a>

   * Checks for the latest version of the WebDriver binary
   * Downloads the WebDriver binary if it's not present on your system
   * Exports the required WebDriver Java environment variables needed by Selenium
   <br /><br />
   
   Its automation makes use of Maven utility commonly used by Java.

   The WebDriver can download files from an open source repository:

   <a target="_blank" href="http://npm.taobao.org/mirrors/">http://npm.taobao.org/mirrors</a>


<a name="Selenium3Hello1"></a>

## Selenium3Hello1

Obtain Selenium to test a sample call to Google Search:

   * Selenium3Hello1 is used to verify whether the Selenium core install works.
   It doesn't use any browser driver.

   * Selenium3FirefoxGoogleSearch1 

   * Selenium3GoogleSearch1 works on multiple browsers.
   <br /><br />

Look into the folder:

   NOTE: It is not best practice, but the sample scripts in my GitHub contains binary files
   copied from binary repositories.

   File `Sea.jpg` is required only by the sample program from Neotys.
   
   PROTIP: For team/production coding, place photos in a folder such as `pics`.

   The file is placed at the project's root folder to make it easy to specify its path.
   
   File `chromedriver.exe` and other browser driver files are at the root of each script folder.

   The more correct way is to specify the files (and their specific versions) 
   in a pom.xml file that point to the location of those
   external dependencies, and then have each user of the repository to
   run Maven to obtain those files.

   <a target="_blank" href="https://github.com/Ardesco/Selenium-Maven-Template/blob/master/pom.xml">
   https://github.com/Ardesco/Selenium-Maven-Template/blob/master/pom.xml</a>

   Nevertheless, the drivers are included so you can get going quickly.


<a name="Invocation"></a>

## Invoke sample command



### On Windows:

It is assumed that the Java program is within the PATH which the operating system looks for executables.

0. View the sample command file <strong>Selenium3Chrome1.bat</strong>

   <pre>
REM cd Selenium3Usahidi1NeoloadChrome1
REM Selenium3 must use Java 1.8+
javac         Selenium3Usahidi1NeoloadChrome1.java
java.exe -jar Selenium3Usahidi1NeoloadChrome1.jar ^
-Dnl.selenium.proxy.mode=Design ^
-Ddriver=chromedriver.exe ^
-Druntype=Landing ^
-Dimg=Sea.jpg
   </pre>

   PROTIP: Windows command prompt (cmd.exe) allows the umlaut ^ (Shift + 6) character 
   to indicate line continuation.

0. Open a Terminal window.
0. Run the sample Selenium Java program on a Windows machine:

   <tt><strong>Selenium3Usahidi1NeoloadChrome1.bat
   </strong></tt> 


### On Macs & Linux

0. View the sample command file <strong>Selenium3Chrome1.sh</strong>

   <pre>
# cd Selenium3Usahidi1NeoloadChrome1
# Selenium3 must use Java 1.8+
javac     Selenium3Usahidi1NeoloadChrome1.java
java -jar Selenium3Usahidi1NeoloadChrome1.jar \
-Dnl.selenium.proxy.mode=Design \
-Ddriver=chromedriver \
-Druntype=Landing \
-Dimg=Sea.jpg
   </pre>

   Notice there is no ".exe" in the driver.

   PROTIP: Bash shell scripts use the back-slash character (above the Enter/return key)
   to indicate line continuation.

0. Open a Terminal window.
0. Grant permissions:

   <tt><strong>chmod +X *.sh
   </strong></tt> 

0. Run the sample Selenium Java program:

   <tt><strong>Selenium3Usahidi1NeoloadChrome1.sh
   </strong></tt> 



## Coding

Drivers for browsers go into the Reference folder.

Implicit waits. Don't use them. Especially with explicit waits.


<a name="#CrossPlatform"></a>

### Cross platform

   Windows vs. Mac vs. Linux


<a name="#CrossBrowser"></a>

### Cross browser

   <a target="_blank" href="https://www.youtube.com/watch?v=hbxRgpMTif8">
   VIDEO</a>

   <pre>
    system.setProperty("webdriver.gecko.driver", "\\selenium-java-3.5.0")
   </pre>


<a name="ObtainFiles"></a>

## Obtain jars and drivers #

There are the ways to assemble what Selenium needs:

a). <a href="#MySamples">Copy a working Selenium project</a> (as shown above)
   that already has the files needed. Then edit it for your own uses.
   This is the quickest and simplest way.

b). Copy set of jars from an in-house binary respository (such as Nexus or Artifactory).

   <a target="_blank" href="https://selenium-release.storage.googleapis.com/index.html">
   https://selenium-release.storage.googleapis.com/index.html</a>

c). <a href="#MavenSelenium">MavenSelenium">Code in pom.xml and run Maven</a> 
   (or equivalent tool such as Ant).

d). <a name="ManualDownload">Manual download from websites</a>,
   which you'll need to do when a new version comes along. 

e). Build from source.


PROTIP: Download all the latest install files at one sitting to test compatibility of the set.
Assemble them together in a single folder for copying into each Selenium project folder
so each can stand alone when distributed.

<a target="_blank" href="http://www.softwaretestinghelp.com/how-to-use-different-browsers-drivers-for-your-selenium-script/">
This</a> explains the driver operation.


<hr />


<a name="MavenSelenium"></a>

## Maven

<a target="_blank" href="https://www.youtube.com/watch?v=9IoP45r5Ap4&t=21s">
How to Install Selenium WebDriver With Java And Maven On Mac OS X10 - a 13 Minute SpeedRun</a>

<a target="_blank" href="http://learn-automation.com/selenium-integration-with-jenkins/">
Maven</a>


<a name="ManualDownload"></a>

## Manual Download

If you're using a sample script, skip this.

PROTIP: Download files for all operating systems so the scripts begin as cross-system capable
(works on Windows, Mac, Linux).

1. Go to
   <a target="_blank" href="http://docs.seleniumhq.org/download/">
   http://docs.seleniumhq.org/download</a>

0. Under the "Selenium Standalone Server" section heading, click the link
   next to "Download version":<br />

   Download version <a target="_blank" href="https://goo.gl/mFtw7n">3.5.0</a>

0. Click Save of file named with the same version number, such as:<br />
   <strong>selenium-server-standalone-3.5.0.jar</strong><br />
   to the Downloads folder.


   #### Java bindings

0. Under the "Selenium Client & WebDriver Language Bindings" section heading, click the link
   click the <a target="_blank" href="http://selenium-release.storage.googleapis.com/3.5/selenium-java-3.5.0.zip">Download</a>
   link associated with the programming language you use, such as Java.

0. Click Save of file named with the same version number:<br />
   <strong>selenium-java-3.5.0.zip</strong><br />
   to the Downloads folder.


   #### Windows Internet Explorer driver

   <a target="_blank" href="https://www.youtube.com/watch?v=knMH7phD7Hs">
   VIDEO</a>

0. On Windows only, under "The Internet Explorer Driver Server" section heading, 
   click the link 
   <a target="_blank" href="https://goo.gl/GwYYmg">64-bit Windows IE</a>

0. Click Save of file named with the same version number, such as:<br />
   <strong>IEDriverServer_x64_3.5.0.zip</strong><br />
   to the Downloads folder.


   #### Mac Safari WebDriver

   This section is only applicable on an Apple Mac.

   <a target="_blank" href="https://www.youtube.com/watch?v=wKgDrjBM0pw">
   VIDEO</a>

   Under the "Safari" section heading in the
   <a target="_blank" href="https://github.com/SeleniumHQ/selenium/wiki/SafariDriver">
   Selenium webpage</a>, the 
   SafariDriver.safariextz file is <strong>deprecated</strong>.
   So no need to download it.

   Starting with Safari 10 that comes with OS X El Capitan and macOS Sierra,
   <a target="_blank" href="https://webkit.org/blog/6900/webdriver-support-in-safari-10/">
   in 2016</a>, WebKit running Java 1.8+ supports the new
   <a target="_blank" href="https://www.w3.org/TR/webdriver/">
   W3C WebDriver</a> browser automation API.
   So Selenium automatically launches the driver without further configuration.
 
   However, it needs to be enabled because it's off by default.

0. Open the Safari browser.
0. Press command+, (comma) or in the menu bar, select Safari | Preferences | Advanced tab (wheel icon).
0. Check "Show Develop menu in menu bar" to see "Develop" appear in the menu bar behind the dialog. Exit the dialog.
0. Click "Develop" on the menu bar and select "Allow Remote Automation".

   Authorize safaridriver to launch the webdriverd service which hosts the local web server. 

0. Open a Terminal window to run:

   <tt><strong>cd /usr/bin<br />
   ./safaridriver -p 5678
   </strong></tt>

   BLAH: The response asks for a port number.

   <pre>
Usage: safaridriver [options]
   -h, --help                Prints out this usage information.
   -p, --port                Port number the driver should use. If the server
                             is already running, the port cannot be changed.
                             If port 0 is specified, a default port will be used.
   </pre>

0. Complete the authentication prompt.

0. To verify, run the Selenium script:

   SeleniumSafariGoogleSearch1.java



## Eclipse IDE


   ### New Lib folder

0. Within Eclipse, right-click on your project name to select New, Folder.
0. Type in name "lib" (for library). Finish.

   #### Server into lib folder

0. Press command+tab to switch to the File Explorer window.
0. Drag from within the Downloads folder file <br />
   selenium-server-standalone-3.5.0.jar<br />
   and drop it within the lib folder when the mouse turns into a "+" sign.
0. Click OK to the pop-up dialog for Copy files.

   #### Selenium Java into lib folder

0. Press command+tab to switch to the File Explorer window.
0. Within the Downloads folder, unzip by double-clicking on file <br />
   selenium-java-3.5.0.zip. 

   <a target="_blank" href="https://www.youtube.com/watch?v=wlZVSud2vdg">
   On a Mac</a>, this should result in the creation of folder<br />
   <strong>selenium-java-3.5.0</strong>. But 
   <a target="_blank" href="http://osxdaily.com/2013/02/13/open-zip-cpgz-file/">"
   if you see a <strong>.cpgz</strong> file created, 
   move that to trash and use another utility such as the "RAR Extractor" utility 
   or unzip in a Terminal window.

0. Dive into the folders to drag <br />
   <strong>selenium-java-3.5.0.jar</strong><br />
   to the lib folder.

0. Click OK to the pop-up dialog for Copy files.


   ### Eclipse folder

0. In Eclipse, press command + I or 
   right-click on your project to select <strong>Properties</strong>.
0. At Resource, Location is the path of the project.
0. Click on the door icon and a Finder window opens up.

   ### new References folder for Browser drivers

   <a target="_blank" href="https://www.youtube.com/watch?v=zylSll8hsPs&t=6m45s">
   VIDEO</a>:

0. Double-click to expand selenium-java-3.5.0.zip. 
0. Drill down to the "selenium-3.5.0" folder.
0. Drill down to that jar.
0. Drag the <strong>client-combined-3.5.0-nodeps.jar</strong> into the lib folder. ???
0. Choose Copy Files. OK.
0. Drill down into the lib folder within the selenium-java-3.5.0 folder.
0. Select all the files.

   NOTE: Previous versions did not include JUnit and others.

0. Drag them all into the lib folder. 
0. Choose Copy Files. OK.


   ### Establish lib as References

   <a target="_blank" href="https://www.youtube.com/watch?v=zylSll8hsPs&t=7m11s">
   VIDEO</a>:

   To make Eclipse recognize the jar files:

0. Highlight the two files in the lib folder.

   Click first file. Hold Cntrl while clicking the second file.   

0. Right-click for <strong>Build Path</strong>. Add to Build Path.

   A <strong>Referenced Libraries</strong> item should appear under Package Explorer.


   <a name="ChromeDriver"></a>

   ### Download Chrome driver

   <a target="_blank" href="https://www.youtube.com/watch?v=-stXyMIrsck&t=11s">VIDEO</a>:

0. Open Chrome browser, finish work on all windows as you'll need to relaunch by the time this is done.

   <a target="_blank" href="http://sites.google.com/a/chromium.org/chromedriver/downloads">http://sites.google.com/a/chromium.org/chromedriver/downloads</a>
   
0. Identify your version by clicking the three-dot icon at the upper-right, select Help, About Chrome. This would automatically update the browser to the latest version. Take a break because this takes several minutes.
0. Click "Relaunch" and wait until you see "Google Chrome is up to date".
0. Notice "Version 79.0.3945.79" or whatever it is what you do this.

0. Navigate to:

   <a target="_blank" href="http://chromedriver.storage.googleapis.com/index.html">http://chromedriver.storage.googleapis.com/index.html</a>

0. Scroll down to the bottom of the page to click the highest number folder (above the LATEST_RELEASE links).
0. Right-Click the file for your operating system, such as:
   
   <pre>chromedriver_mac64.zip</pre>

0. Select "Save Save Link As..." in the pop-up.
0. Click "Save" and wait for the download to finish.

0. Click on the file to unzip it to file <strong>chromedriver</strong>.
0. Open another a new Finder window to <strong>/usr/local/bin</strong>.
0. Use your mouse to drag to move the chromedriver file to that folder.

0. Restart your Chrome.
0. Try your Selenium WebDriver code.
   

   ### Use Gecko Firefox driver

   <a target="_blank" href="https://www.youtube.com/watch?v=21dK8q3BOZU&t=1m27s">
   Video</a> 26 May 2016

0. Navigate to<br />
   <a target="_blank" href="https://github.com/mozilla/geckodriver/releases">
   https://github.com/mozilla/geckodriver/releases</a>

   The "Latest release" is shown at the top. Later releases are below.

   Mozilla also calls it the "Marionette Proxy".

0. Scroll down to the Downloads section and click on the file for your operating system.

   geckodriver-v0.18.0-macos.tar.gz for Mac (1.31 MB)

   geckodriver-v0.18.0-win64.zip for Windows

0. Unzip the macos file for the <strong>geckodriver</strong> executable.

0. Unzip the win64 file for the <strong>geckodriver.exe</strong> executable.

0. Copy the chromdriver file to <strong>/usr/local/bin</strong> folder. ???
0. Restart your system and try your Selenium WebDriver code as 
   shown in video.



   ### Headless drivers 

   Ghost Driver or PhantomJS turns Selenium "headless",
   accessing the DOM.

   HTML Unit from
   https://selenium-release.storage.googleapis.com/index.html
   selenium-html-runner-3.5.0.jar


   ### Junit into lib folder

0. Navigate to<br />
   <a target="_blank" href="http://sourceforge.net/projects/junit/files/junit/">
   http://sourceforge.net/projects/junit/files/junit</a>
0. Click the text to the right of "Looking for the latest version?",
   such as <strong>Download junit-4.10.jar (253.2 kB)</strong>.
   
   This downloads file <strong>junit-4.10.jar</strong> (from 2011).

0. Drag from within the Downloads folder file <br />
   junit-4.10.jar<br />
   and drop it within the lib folder when the mouse turns into a "+" sign.


   ### New Class

0. In the Package Explorer, right-click on "src". Select New, Java Class.
0. For Package, type "com.demo.testcases".
0. For Name, type "SeleniumFirefoxDemo1".
0. Check "public static void main(Strong[] args)". Finish.

<hr />

## IntelliJ IDE

   <a target="_blank" href="https://www.youtube.com/watch?v=ff5ZsthcSZw">
   VIDEO: How to Install Java, Maven and IntelliJ on Apple Mac</a>


## Java Coding

   TODO: Annotations



   ## TODO: Random number


## Add-on functionality

   ### TestNG

   <a target="_blank" href="https://www.youtube.com/watch?v=OTtFSnZY4f8">
   VIDEO</a>,
   <a target="_blank" href="https://www.amazon.com/Selenium-WebDriver-TestNG-Practical-Tricks-ebook/dp/B0746F5XLV/ref=sr_1_2?ie=UTF8&qid=1502881762&sr=8-2&keywords=selenium+webdriver+books">
   BOOK</a>

   TestNG has more in-built annotations than JUnit,
   making testing easier.

   TestNG requires a download from http://testng.org/

   Its @DataProvider and parameters enables data-driven testing.

   JUnit does not generate a HTML reports. But TestNG generates an XSLT 
   <a target="_blank" href="http://learn-automation.com/generate-xslt-report-in-selenium/">
   report</a>.

   * https://www.youtube.com/watch?v=OTtFSnZY4f8


   <a name="Logging"></a>

   ### Logging

   <a target="_blank" href="https://www.youtube.com/watch?v=Xk9fzXCX61U">
   VIDEO</a> on emitting industry-standard logs.

   <a target="_blank" href="https://www.youtube.com/watch?v=zSjwgjVl4P4">
   VIDEO</a> on Advanced topics.

   ```
   import org.apache.log4j.Logger;
   public class LogDemo {
      public static void main(String[] args){
         Logger logger=Logger.getLogger("LogDemo");  // the class name
      }
   }
   ```

   * https://www.youtube.com/watch?v=0UQ9pAlY3qg


<a name="ReadCSV"></a>

### Read CSV files

   To get your Selenium Java code to read CSV files:

   Specify the dependency in Maven, Ant, etc.
   or

0. Download from
   https://mvnrepository.com/artifact/net.sf.opencsv/opencsv/

   opencsv-2.3.jar

0. Add in your Java code:

   <pre>
     List&LT;MyBean> beans = new CsvToBeanBuilder(FileReader("yourfile.csv"))
       .withType(Visitors.class).build().parse();
   </pre>

   
<a name="Excel"></a>

### Read Excel files

Video tutorials 
   <a target="_blank" href="https://www.youtube.com/watch?v=_7XJenTvR34">
   Data driven framework</a>,
   <a target="_blank" href="https://www.youtube.com/watch?v=sbBdj4zIMqY">
   Read</a>,
   <a target="_blank" href="https://www.youtube.com/watch?v=MlXV7qSpLDY">
   Write</a>,
   <a target="_blank" href="http://learn-automation.com/read-and-write-excel-files-in-selenium/">
   BLOG</a>


   To get your Selenium Java code to read Excel files: 

0. Download Apache POI - the Java library for Microsoft documents from<br />
   <a target="_blank" href="https://poi.apache.org/download.html">
   https://poi.apache.org/download.html</a><br />
   the binary distribution for the latest stable version, such as<br />
   poi-bin-3.16-20170419.tar.gz

0. Unzip using RAR so you don't extract 

0. Select the file under the HTTP heading.


<a name="RockStars"></a>

## Rock Stars

Simon Stewart (<a target="_blank" href="https://twitter.com/shs96c">@sha98c</a>,
   <a target="_blank" href="http://blog.rocketpoweredjetpants.com/">blog.rocketpoweredjetpants.com</a>)
   invented WebDriver, now Lead Committer

   * <a target="_blank" href="https://www.youtube.com/watch?v=gyfUpOysIF8">
   State of the Union</a> at SeleniumConf Austin 5 April 2017.
   says the original vision was:

   FIT Test > FIT Fixture > Page Objects > WebDriver

   "Definitely do not use FIT"

   "We test so that when we release software, we are confident it works, as early as possible."

<a target="_blank" href="https://www.Sauce Labs.com/">
Sauce Labs</a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=cN25k5l1fTc">
   Automation Best Practices</a> 14 Jul 2016


<a name="Tutorials"></a>

## Video Tutorials #

http://learn-automation.com


   * <a target="_blank" href="https://www.youtube.com/watch?v=zylSll8hsPs">
   Selenium WebDriver Eclipse Java Project Setup: For the absolute beginner</a>
   on Windows with Java 1.6 [13:58]

https://www.youtube.com/watch?v=ZUM9jEhLie0

https://www.youtube.com/watch?v=E3hKgb4aLHM

https://www.youtube.com/watch?v=X8Xw7FWw49E

https://www.dropbox.com/s/inuirqwhlr3w7zf/slides.pdf?dl=0
Dave Hoeffer

https://www.youtube.com/watch?v=zylSll8hsPs

https://www.youtube.com/watch?v=nq97dfaVmC4


<a name="DevTest"></a>

## CA DevTest

DevTest


<a name="SauceLab"></a>

## SauceLab Cloud

1. Open an account at SauceLab.com.

1. set environment variables SAUCE_USERNAME SAUCE_ACCESS_KEY

   SELENIUM_BROWSER SELENIUM_VERSION SELENIUM_PLATFORM

NAME BUILD


## Python Web scraping

This is based on Pluralsight's 1h 7m video course <a target="_blank" href="https://app.pluralsight.com/library/courses/scraping-dynamic-web-pages-python-selenium/table-of-contents" title="6 Jun 2019">"Scraping Dynamic Web Pages with Python and Selenium"</a>
by <a target="_blank" href="https://www.linkedin.com/in/pratheerthpadman/">Pratheerth Padman</a> covers use of Python invoked by Jupyter Notebook. Python has library Beautiful Soup (to scrape HTML and XML from web pages) and Selenium 2.0 WebDriver (to emulate keyboard and mouse movements based on JSON commands).

1. Install Selenium for Python3 (covered above)
1. Install Python with virtualvenv and Anaconda.

   <pre>pip3 install selenium</pre>

   Sample response:

   <pre>Collecting selenium
  Downloading https://files.pythonhosted.org/packages/80/d6/4294f0b4bce4de0abf13e17190289f9d0613b0a44e5dd6a7f5ca98459853/selenium-3.141.0-py2.py3-none-any.whl (904kB)
     |████████████████████████████████| 911kB 507kB/s
Requirement already satisfied: urllib3 in /Users/wilson_mar/Library/Python/3.7/lib/python/site-packages (from selenium) (1.25.6)
Installing collected packages: selenium
Successfully installed selenium-3.141.0
   </pre>   

1. <a href="#ChromeDriver">Download Chrome driver</a>.
1. Download <a target="_blank" href="https://pypi.org/project/beautifulsoup4/">Beautiful Soup 4 for Python</a>

   <pre>pip3 install beautifulsoup4</pre>

   Sample response:

   <pre>Collecting beautifulsoup4
  Downloading https://files.pythonhosted.org/packages/3b/c8/a55eb6ea11cd7e5ac4bacdf92bac4693b90d3ba79268be16527555e186f0/beautifulsoup4-4.8.1-py3-none-any.whl (101kB)
     |████████████████████████████████| 102kB 528kB/s
Collecting soupsieve>=1.2
  Using cached https://files.pythonhosted.org/packages/81/94/03c0f04471fc245d08d0a99f7946ac228ca98da4fa75796c507f61e688c2/soupsieve-1.9.5-py2.py3-none-any.whl
Installing collected packages: soupsieve, beautifulsoup4
Successfully installed beautifulsoup4-4.8.1 soupsieve-1.9.5
   </pre>

0. Download my repository containing Jupyter Notebooks:

   <pre><strong>git clone https://github.com/wilsonmar/DevSecOps/master/Selenium</strong></pre>

0. Open a Terminal and navigate to that folder. See <a target="_blank" href="https://wilsonmar.github.io/jupyter/">https://wilsonmar.github.io/jupyter</a>


   ### Call Selenium from Python

0. In Jupyter Notebook, run file <strong>demo_mod2.ipynb</strong> file which opens a hard-coded web page, then quit. 

   <pre>from selenium import webdriver
   driver = webdriver.Chrome()
   driver.get("https://www.pluralsight.com/")
   driver.quit  # close window
   </pre>

   To open browser options and set arguments (as if manually in Settings") before opening:

   <pre>options = webdriver.ChromeOptions()
   options.add_argument("--ignore-certificate-errors")
   options.add_argument("--incognito")
   options.add_argument("--headless")
   # window at position 0.0, in full screen.
   driver = webdriver.Chrome(options=options)
   </pre>

0. Run file <strong>demo_mod3 -2.ipynb</strong> file which manipulates iframes:

   <pre>driver.switch_to_frame("<em>frame name</em>)
   # Switch back:
   driver.switch_to_default_content()
   </pre>

   To handle popups:

   <pre>driver.switch_to_alert()</pre>

0. Run file <tt>demo_mod4.ipynb</tt> in Jupyter to use the soup class to scrape quotes attributed to Soccer player Wayne Rooney from premierleague.com.

   NOTE: There is an error in this script.

0. Additional Python code that can be added in Jupyter for other work can include Machine Learning such as sentiment analysis. The course author's <a target="_blank" href="https://github.com/pratheerth">personal GitHub</a>


Additional information:

   https://www.pythonforbeginners.com/beautifulsoup/beautifulsoup-4-python

## Other info

   NOTE: All "Selenium3" require Java 1.8+.

   PROTIP: A number is included with each component to provide for version control,
   since everything changes all the time in IT.


https://www.gridlastic.com/java-code-example.html

macos-install-all/tests/firefox_pycon_search.py
