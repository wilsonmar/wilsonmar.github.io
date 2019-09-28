---
layout: post
title: "Selenium-cs (C# or C Sharp, using Visual Studio)"
excerpt: "Enable C# Microsoft developers to use Selenium test infrastructures on Alt-macOS"
tags: [apple, mac, setup, VMWare, Fusion]
date: "2017-08-31"
file: "selenium-cs"
image:
# feature: pic white robots woman 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622167/45abd918-0585-11e6-8537-a58e0b55e3ec.jpg
  credit: Cyberconstruct.be
  creditlink: http://cyberconstruct.be/2015/02/digital-job-crafting/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here is a hands-on tutorial to learn Selenium using the C# language edited in Visual Studio on MacOS. This an "immersion" approach as if you just got hired and are looking at a fully developed set of code to modify.

A lot of thought has gone into sequencing topics here so you learn easier, in less time.

The pre-requisite to this is the "start from scrach" approach of courses such as the <a target="_blank" href="https://www.udemy.com/selenium-with-c/learn/v4/t/lecture/6745806?start=0">one on Udemy</a> from
<a target="_blank" href="http://courses.ultimateqa.com/">UltimateQA</a> filmed  2015 by Nikolay Advolodkin (<a target="_blank" href="https://twitter.com/Nikolay_A00">@Nikolay_A00</a>, <a target="_blank" href="https://www.facebook.com/Ultimateqa1">Facebook</a>) and Dr. Tiffany Ford (rhysma@live.com) who teaches C#.
<a target="_blank" href="https://www.proprofs.com/quiz-school/">
quizzes</a>.


## Why this?

Microsoft's VSTS (Visual Studio Team Services) costs several thousand dollars
while Selenium is free (open source).

Run several Selenium instances in parallel on publicly available swarm facilities
such as SauceLabs, 
BrowserStack, 
<a target="_blank" href="https://www.rainforestqa.com/product/web-app-testing/">Rainforest.qa</a>,
https://crossbrowsertesting.com,
 and Selenium Grid in-house.

Include the Neotys API so that when Selenium is run, 
NeoLoad automatically updates "user paths" (scripts) for load testing.

https://msdn.microsoft.com/en-us/library/ee308828(v=bts.10).aspx


## Install Visual Studio IDE 

The Community Edition of Visual Studio IDE can be used.

If you already have Visual Studio IDE installed, <a href="InVS">go here</a>.

### Mac install

0. Use https://aka.ms/vsmac to 
   https://www.visualstudio.com/vs/visual-studio-mac/
   VisualStudioInstaller.dmg (25.3 MB)

   This is analogous to downloading Visual Studio for Windows at
   https://www.visualstudio.com/downloads
  
0. In Downloads folder, invoke the installer.
0. Uncheck the Android, iOS, macOS platforms, for 774 MB download, which takes a long time.

   While you wait, look at the documentation at 
   https://docs.microsoft.com/en-us/visualstudio/mac/

   This IDE replaced Xamarin Studio as a full-featured IDE on Mac.
   But its <a target="_blank" href="https://developer.xamarin.com/">Developer Center"</a> still references Xamarin.

   I kept getting an System.AggregateException", "Xamarin.iOS 10.12.0.20 needs to be installed".

   So I had to download
   VisualStudioForMac-7.1.0.1297.dmg (290 MB).
   and then drag and drop the Visual Studio for Mac icon to the Applications folder.

0. Sign in and Activate license for Professional/Enterprise features:

   https://docs.microsoft.com/en-us/visualstudio/mac/signing-in

   https://docs.microsoft.com/en-us/visualstudio/mac/activation

   Problems reported are at:
   https://developercommunity.visualstudio.com/spaces/41/index.html

   To report a problem with Visual Studio for Mac:
   https://developercommunity.visualstudio.com/content/problem/post.html?space=41&inRegister=true

### Windows install

## Get Sample Selenium Code

0. Fork the excellent sample code at:

   <a target="_blank" href="https://github.com/ontytoom/Onty.SeleniumTest.Webmail/">
   https://github.com/ontytoom/Onty.SeleniumTest.Webmail</a>

0. Assuming you have Git client installed, download the repo from your account.
   For example:

   git clone <a target="_blank" href="https://github.com/ontytoom/Onty.SeleniumTest.Webmail/">
   https://github.com/wilsonmar-jetbloom/Onty.SeleniumTest.Webmail.git</a>

0. Use MacOS Finder or Windows Explorer to view the folder.
0. Delete the <strong>.vs</strong> folder so that the solution is not opened using them.

   <a target="_blank" href="https://stackoverflow.com/questions/72298/should-i-add-the-visual-studio-suo-and-user-files-to-source-control">
   NOTE</a>: From the root is a <strong>.vs</strong> folder which leads to a binary file <strong>.suo</strong>. This file contains user preference configurations specific to each machine. So although it is recreated automatically by Visual Studio, recreation resets metadata such as whether the project is loaded/unloaded at any given time. 
   So its name should be specified in .gitignore and not pushed to GitHub.

   ### Install app.config Developer Pack

0. Open a text editor and navigate into folder "Onty.SeleniumTest.Webmail".

0. Open file <strong>app.config</strong> to see:

   <pre>&LT;supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.6.2"/>
   </pre>

0. Get it.

   On Windows:

   Click "Download" at <a target="_blank" href="https://www.microsoft.com/en-us/download/details.aspx?id=53321">this page</a>

   <strong>NDP462-DevPack-KB3151934-ENU.exe</strong>

   <a target="_blank" href="https://blogs.msdn.microsoft.com/dotnet/2016/08/02/announcing-net-framework-4-6-2/">Microsoft .NET 4.62 Developer Pack</a>

   <a target="_blank" href="https://www.microsoft.com/net/targeting/">
   https://www.microsoft.com/net/targeting</a>

   http://getdotnet.azurewebsites.net/target-dotnet-platforms.html

   On Mac:

   https://www.microsoft.com/net/core#macos
   Click "Download .NET Core SDK" for file:
   dotnet-sdk-2.0.0-osx-gs-x64.pkg (133 MB)

   <a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/standard/choosing-core-framework-server">
   NOTE</a>: .NET Core is a newer approach than .NET Framework for server applications. .NET Core provides support for cross-platform development (Windows, Linux, and macOS) within Docker containers.

   But .NET Framework libraries are still used for apps using third-party .NET libraries or NuGet packages not available for .NET Core.

   http://dot.net
   provides a bash console


## Install WebDrivers

### Install WebDrivers on Windows

   In `app.config`:

   <pre>
  &LT;setting name="PathFirefox" serializeAs="String">
      &LT;value>C:\Program Files\Mozilla Firefox\firefox.exe&LT;/value>
  &LT;/setting>
  &LT;setting name="WebDriverType" serializeAs="String">
  &LT;value>phantomjs&LT;/value>
   </pre>

   See <a target="_blank" href="https://github.com/ontytoom/Onty.SeleniumTest.Webmail/blob/master/README.md">README</a>

   Processing of this results in WebDriver executables in the project's root folder:

   * WebDriver.dll
   * WebDriver.Support.dll
   * nunit.framework.dll
   * chromedriver.exe
   * geckodriver.exe (for Mozilla Firefox)
   * IEDriverServer.exe
   * phantomjs.exe


### Install WebDrivers on MacOS

   .dll and .exe are for Windows only and don't work on a Mac.

   So we need to:

1. Use https://www.npmjs.com/package/webdriver-manager

   <tt><strong>npm install -g webdriver-manager
   </strong></tt>

0. download the selenium server jar and chromedriver binary:

   <tt><strong>webdriver-manager update
   </strong></tt>

   The response:

   <pre>
/Users/mac/.npm-packages/bin/webdriver-manager -> /Users/mac/.npm-packages/lib/node_modules/webdriver-manager/bin/webdriver-manager
+ webdriver-manager@12.0.6
added 96 packages in 26.426s
   </pre>

0. Start Selenium Server attached to foreground process:

   <tt><strong>
   webdriver-manager start
   </strong></tt>

   Alternately, start in background:

   <tt><strong>
   webdriver-manager start \-\-detach
   </strong></tt>

   The response:

   <pre>
webdriver-manager: using global installed version 12.0.6
[21:04:30] I/file_manager - creating folder /Users/mac/.npm-packages/lib/node_modules/webdriver-manager/selenium
[21:05:04] I/update - chromedriver: unzipping chromedriver_2.32.zip
[21:05:04] I/update - chromedriver: setting permissions to 0755 for /Users/mac/.npm-packages/lib/node_modules/webdriver-manager/selenium/chromedriver_2.32
[21:05:47] I/update - geckodriver: unzipping geckodriver-v0.18.0.tar.gz
[21:05:47] I/update - geckodriver: setting permissions to 0755 for /Users/mac/.npm-packages/lib/node_modules/webdriver-manager/selenium/geckodriver-v0.18.0
   </pre>

0. Open browser to <a target="_blank" href="http://localhost:4444/wd/hub">http://localhost:4444/wd/hub</a>

0. Stop Selenium Server if opened in background process:

   <tt><strong>webdriver-manager stop
   </strong></tt>


### Install WebDrivers On a Mac

0. TODO: On a Mac, change "C:\Program Files\Mozilla Firefox\firefox.exe" to ???

   <tt><strong>brew install selenium-server-standalone
   </strong></tt>

0. Look into what is installed:

   <tt><strong>
   cat $(which selenium-server)
   </strong></tt>

   Which yields:

   <pre>
#!/bin/bash
exec java  -jar /usr/local/Cellar/selenium-server-standalone/3.5.3/libexec/selenium-server-standalone-3.5.3.jar "$@"
   </pre>

0. The .jar contains a .plist file which defines the default port for the equivalent of:

   <tt><strong>selenium-server -port 4444
   </strong></tt>

   The response: Selenium Server is up and running

   For more options: 

   <tt><strong>selenium-server -help
   </strong></tt>

   Widen the window to see without wrapping:

   <pre>
Usage: &LT;main class> [options]
  Options:
    --version, -version
       Displays the version and exits.
       Default: false
    -browserTimeout
       &LT;Integer> in seconds : number of seconds a browser session is allowed to
       hang while a WebDriver command is running (example: driver.get(url)). If the
       timeout is reached while a WebDriver command is still processing, the session
       will quit. Minimum value is 60. An unspecified, zero, or negative value means
       wait indefinitely.
       Default: 0
    -debug
       &LT;Boolean> : enables LogLevel.FINE.
       Default: false
    -enablePassThrough
       &LT;Boolean>: Whether or not to use the experimental passthrough mode.
       Defaults to true.
       Default: true
    -jettyThreads, -jettyMaxThreads
       &LT;Integer> : max number of threads for Jetty. An unspecified, zero, or
       negative value means the Jetty default value (200) will be used.
    -log
       &LT;String> filename : the filename to use for logging. If omitted, will log
       to STDOUT
    -port
       &LT;Integer> : the port number the server will use.
       Default: 4444
    -role
       &LT;String> options are [hub], [node], or [standalone].
       Default: standalone
    -timeout, -sessionTimeout
       &LT;Integer> in seconds : Specifies the timeout before the server
       automatically kills a session that hasn't had any activity in the last X seconds. The
       test slot will then be released for another test to use. This is typically
       used to take care of client crashes. For grid hub/node roles, cleanUpCycle
       must also be set.
       Default: 1800
   </pre>


### Other properties in app.config

   <a target="_blank" href="https://automatetheplanet.com/hybrid-test-framework-config-files/">
   NOTE</a>: Having strings such as `PageLoadDelay` in this file makes the solution more flexible than hard-coding into C# code. TODO: Additional variables include:

   * PageLoadTimeout = 60,
   * ScriptTimeout = 60,
   * ElementsWaitTimeout = 60
   <br /><br />

0. Navigate into file <strong>....csproj</strong>

   The <strong>.....csproj.user</strong> ??? 


<a name="InVS"></a>

## In Visual Studio

  <a target="_blank" href="http://www.c-sharpcorner.com/UploadFile/093731/introduction-to-selenium-webdriver-with-C-Sharp-in-visual-studio/">
  NOTE</a>

0. Within Windows Explorer or macOS Finder, double-click on the <strong>.sln</strong> solution file to open it within Visual Studio.

   <a target="_blank" href="https://en.wikipedia.org/wiki/Microsoft_Visual_Studio">PROTIP</a>: Inside the .sln file, the "Visual Studio 14" is marketed by Microsoft as "Visual Studio 2015".


   ### Restore NuGet Package Dependencies

0. To download component dependencies in appropriate locations, in the Solution Explorer tool window, right-click on References. On Windows: click <strong>Restore NuGet Packages</strong>

   ![selenium-cs-restore nuget packages-320x194](https://user-images.githubusercontent.com/300046/29924820-7e1549ae-8e1b-11e7-9598-0de02abcf24d.jpg)

   ![vsmac-ref-297x169](https://user-images.githubusercontent.com/300046/29974192-5af608ee-8eef-11e7-9e60-d1b53843362d.jpg)

   NOTE: This is similar to running Maven to process its pom.xml file. But Visual Studio uses the <strong>packages.config</strong>.

0. View file `package.config` containing:

   <pre>
  &LT;package id="Chromium.ChromeDriver" version="2.27" targetFramework="net46" />
  &LT;package id="NUnit" version="3.6.0" targetFramework="net46" />
  &LT;package id="NUnit3TestAdapter" version="3.7.0" targetFramework="net46" />
  &LT;package id="Selenium.Support" version="3.0.1" targetFramework="net46" />
  &LT;package id="Selenium.WebDriver" version="3.0.1" targetFramework="net46" />
  &LT;package id="Selenium.WebDriver.PhantomJS" version="1.0.0.0" targetFramework="net46" />
  &LT;package id="WebDriver.GeckoDriver" version="0.13.0" targetFramework="net46" />
  &LT;package id="WebDriverIEDriver" version="2.45.0.0" targetFramework="net46" />
   </pre>

   The id of each packages specifies what is downloaded from Microsoft's <strong>NuGet Gallery</strong>, such as:
   <a target="_blank" href="https://www.nuget.org/packages/NUnit3TestAdapter/">
   https://www.nuget.org/packages/NUnit3TestAdapter</a>

   https://marketplace.visualstudio.com/items?itemName=NUnitDevelopers.NUnit3TestAdapter

   ### Project Docs Notes

0. Open `Docs/notes.txt` to add txt about the effort.

   PROTIP: Add new text at the top. 
   Begin each entry with a date such as "2017-09-23".

0. Click "Step Into" to run the file one line of code at a time.


   ### Properties of Domain

0. Navigate into the Properties folder.
0. Notice file AssemblyInfo.cs says 

   `"This package contains a set of automated functional tests (via Selenium) for a Simple Webmail System."`

   <a target="_blank" href="https://stackoverflow.com/questions/14059919/regenerate-settings-settings/14060040">
   NOTE</a>: There are various Designer.cs files which contain the declaration and initialization of UI controls and form layouts. File `Settings.Designer.cs` is generated by Visual Studio based on information in file `settings.settings`  using the settings designer updated upon changes to the Project + Settings tab. To force re-generation, delete the `Settings.designer.cs` file, 
   then right-click on the settings.settings file and select "Run custom tool". 

0. Notice file Settings.settings
   defines the app running in the Heroku cloud:

0. Click to open the sample app running on the Heroku cloud:

   <a target="_blank" href="http://onty-webmail-ruby.herokuapp.com/">
   http://onty-webmail-ruby.herokuapp.com<br />
   <img width="814" alt="webmail-login-1628x834" src="https://user-images.githubusercontent.com/300046/29967861-fc5250cc-8ed5-11e7-89b9-aea7d847cda7.png"></a>

   (But you can set up the webmain app in your own server.)

   ### Common PageObjects and annotations

0. Right-click to <strong>View Page Source</strong> to see the HTML, containing HTML such as this:

   <pre>
  &LT;a id="nav-Login" href="/accounts/login">login</a>
  or 
  &LT;a id="nav-Signup" href="/accounts/signup">create an account</a>.
   </pre>

0. Search for an attribute id "nav-Login" and open file `CommonPageElements.cs` to see it referenced:

   <pre>[FindsBy( How = How.CssSelector, Using = "a#nav-Login" )]
    [CacheLookup]
    protected IWebElement LinkLogin { get; set; }
   </pre>

   PROTIP: The "FindsBy" with square brackets are compiler annotations used to reducing coding overhead.
   It is from the <a target="_blank" href="https://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Support_PageObjects_FindsByAttribute.htm">OpenQA.Selenium.Support.PageObjects.FindsByAttribute</a> WebDriver which "Initializes a new instance of the FindsByAttribute class".

   The `LinkLogin` web element is defined by a getter and setter.


   <a name="GetCSS"></a>

   ### Get CSS
   
0. Open a new browser window and construct the URL to view the CSS file. Combine the URL:

   `https://onty-webmail-ruby.herokuapp.com`

   and concatenate from the HTML:

   `/assets/application-12d67291afb2e5f2832d974ea0f4b04402dcd84deb0a3fc19ffcbfbcbf503fce.css`

   The response is minified to remove spaces and line breaks not necessary to the computer. 

0. PROTIP: Copy all the CSS and paste it into a new window at:

   <a target="_blank" href="http://unminify.com/">
   http://unminify.com</a>

   Copy and paste the output to a text file so you can use your favorite editor to search in it.

   ### Domain objects

0. Navigate up and into the ``Domain`` folder that defines objects in the app's domain.
0. File User.cs
0. File Message.cs
0. File Folder.cs


0. View file `ATest.cs` which defines Setup and Teardown for all tests in each run.

   NOTE: Each .cs (C#) file within this folder specifies the folder name in its <strong>namespace</strong>:

   `namespace Onty.SeleniumTest.Webmail.Tests`

   `[TestFixture]` is a compiler annotation.

   `WebDriverFactory.GetWebDriver();`

   To see where this is defined:

   ### Utils

0. Navigate up and into Utils folder. 

   Files here define utility functions:

0. Open `WebDriverFactory.cs`. The GetWebDriver function invokes depending on what value is defined for the `wdt` variable.

0. Open others:

   * Rnd.cs for a rnd() random function based on a millisecond.
   * ScreenShotUtil.cs for the TakeScreenshot() function.
   * StringUtil.cs for IntToBase26() and MakeRandomString().
   <br /><br />

   ### SignUp (several users)

   File `TestData.cs` adds new users with hard-coded names and passwords.

   ![webmail-signup-336x137](https://user-images.githubusercontent.com/300046/29991950-b1408f0e-8f4d-11e7-89c0-2b81a2786a10.jpg)

   Within PageObjects, file `AccountsSignupPage.cs`

   ### Tests

0. Navigate into the ``Tests`` folder.

   BLAH: Name tests using action verbs such as: ???

   * Landing
   * File Tests_General.cs has Test_General_Menu() that logs in and checks the menu.
   * Tests_Login.cs has Test_Login_Invalid() and Test_Login_Valid()
   * Tests_Mailbox.cs has Test_Mailbox_Home(), Test_Mailbox_CreateFolder and Test_Mailbox_SendMessage()
   * Tests_NotLoggedIn.cs has Test_NotLoggedIn_Home() to detect when  "not-logged-in message is not displayed".
   <br /><br />



## App PageObjects

   Test code reference objects defined in PageObjects.

   The Common\APage.cs file defines the base class/

   The CommonPageElements.cs file overrides APage:

   <pre>public class CommonPageElements : APage
   </pre>

   Other PageObjects reference CommonPageElements:

   <pre>public class AccountsHomePage : CommonPageElements
   </pre>


   ### Build, Run, Troubleshoot

0. Build the solution.
0. Open <strong>Test Explorer</strong> tool window in Visual Studio, 
0. Click <strong>Run All</strong> or <strong>Build</strong> icon.

   Alternately, you can click on a single [TestMethod]
   and right-click to select "Run Tests" or hold down command/ctrl+R,T.

   If it doesn't run, we have a debugging session.

   See <a target="_blank" href="http://www.ultimateqa.com/common-selenium-webdriver-errors-fix/">debugging tips</a>

## Add your own

Here is a crucial aspect of this tutorial.

### Add new field

### Change text validated


### Add new form



## Re-use for other apps

The structure of application code provides a base for re-use to test other applications:

   * Home
   * Login
   * Password
   * Signup

Here is my plan to generate this set of files automatically.

Many functions are "boilerplate" that are the same for all applications.

> PROTIP: The advantage of code generation is that tests would be based not just on what elements appears in the app, but also on what <strong>should</strong> be there based on design specs.


### Moustache Templating

A templating program is used to replace static text with variables inserted in files, such as this, which is in most files:

      `namespace Onty.SeleniumTest.Webmail.PageObjects`

      `namespace Onty.SeleniumTest.\{\{AppShortName}}.PageObjects`

For more complex replacements:

      `using Onty.SeleniumTest.Webmail.\{\{FolderAbove}};`

      `public class \{\{ThisFolderName}} : CommonPageElements`


### Yeoman code generator

We use Yeoman for adding logic to generate code.
Just like JHipster does.

See https://docs.microsoft.com/en-us/aspnet/core/client-side/yeoman

Yeoman is a project scaffolding system for creating many kinds of applications. 

The Yeoman generator for ASP.NET Core contains a variety of project templates for starting a new web, MVC, or console application.

To install Yeoman, use Node:

   <tt><strong>npm install -g yo bower</strong></tt>

Alternatively,
https://leaptest.com/pages/selenium-testing

https://www.codeproject.com/Articles/1074039/Generate-Csharp-Client-API-for-ASP-NET-Web-API



## Selenium Learning Resources 

http://courses.ultimateqa.com/courses/synchronization-techniques
Selenium Webdriver Synchronization Techniques Course</a>

http://courses.ultimateqa.com/courses/parallel-testing-tutorial
Introduction to Sauce Labs and Browser Stack</a>
free tutorial
