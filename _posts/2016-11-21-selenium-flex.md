---
layout: post
title: "Selenium Flex"
excerpt: "Make it work before it becomes totally obsolete"
tags: [Mac, Security]
date: "2016-11-21"
file: "selenium-flex"
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

Although Selenium was created for functional testing on browsers,
such automation enables repeatedly run through web pages 
with the timing I want as I record screencast videos.


## Install dependencies 

This assumes that you've followed my tutorial on [installing Selenium](selenium-setup)
and now have on your laptop:

1. [Java](/java-on-apple-mac-osx/)
2. [Maven](/maven-on-macos/)
4. Firefox browser
5. Chrome with ChromeDriver

See http://www.adobe.com/devnet/flash/articles/flash_selenium.html



<hr />

<a name="Flex"></a>

## Two Flex Frameworks

First of all, there are two "Flex" frameworks: Adobe and Apache.

Before WebSockets provided asynchronous communications and HTML5 provides rich animations,
Adobe had Flex via their proprietary AMF (Action Message Format) protocol. 
They both enable <strong>binary format</strong> transmissions
that serialize object graphs such as <strong>ActionScript</strong> objects and XML.

   Flex sends messages between an Adobe Flash client and a remote service running on a server, 
   usually a <strong>Flash Media Server</strong> or third party alternatives.

A big reason for HTML5 creation and wide adoption is to avoid browser plug-ins such as Flash.

   Current Flex projects are tied to either the Adobe Flash Player or Adobe AIR. 
   Apache devs are working to compile projects to native JavaScript in order to
   bypass the Flash Player in the browser.
   <a target="_blank" href="http://flex.apache.org/dev-faq.html">*</a>

   The Flash compiler combines MXML (layout) documents with ActionScript files to output a SWF application
   file that are downloaded to client browsers running the Adobe Flash Player.
   Or compile it with Adobe AIR to make native applications on Windows, MacOSX, Android, iOS, or BlackBerry platforms.

There are differences between the Apache and Adobe version of the SDK. 
Most notably, the Flash Player does not cache RSLs created with Apache Flex. 
Find out more in the RELEASE_NOTES file in your SDK download


## History

https://en.wikipedia.org/wiki/Apache_Flex

In 2002, Flash MX was released by Macromedia as the first RIA (Rich Internet Application)
development platform. Flash Player 7 used ActionScript 1.0.

In 2004, Flex 1.0 was released with ActionScript 2.0.
Flex Builder 1.0 was based on the Adobe Dreamweaver code base.

In 2006, Flex 2.0 was released with ActionScrpt 3.0, a true object-oriented language.
Built-in was Flex Builder 2 is based on Eclipse.

In 2008, Flex 3.0 added support for desktop apps with Adobe AIR (Adobe Integrated Runtime).
It came with Flex Profiler for debugging.
Bundled in was visual controls such as AdvancedDataGrid and OLAPDataGrid.
These are now the older <strong>MX</strong> component set.

In 2008 
https://sourceforge.net/adobe/flexsdk/wiki/Download%20Flex%203/

In 2010, Flex 4.0 with Flash Builder added a new component set architecture, 
<strong>Spark</strong>, for skinning
and Flash Player 10's Flash Text Engine (FTE)
and Flash Text Player Framework (TLF). New code generation features.

In November, 2011, Adobe announced they no longer support Adobe Flex. 
Instead of killing it, they donated the framework to Apache. Apache Flex 4.8 is essentially the same version of Flex as Adobe's last official version. 

All this to say that:

   CAUTION: Flash Builder 4 
   must use the older Carbon pure-C API architecture as it
   is not compatible with Apple's newer Cocoa Objective-C architecture 
   evolved from the Next-Step framework as the native API on Mac OS X and iOS Cocoa Touch.
   Its package Contents folder contains a "MacOSClassic" folder.

Adobe Flash Builder 4.7
adds support for <strong>64-bit</strong> and
using the open source  <strong>Apache Flex</strong> framework for mobile apps.
It works with Eclipse™ 4.2 and
ActionScript Compiler 2.0.

Apache Flex 4.9 is the first release since becoming a top level project of the 
Apache Software Foundation.
 
Apache Flex FalconJX

https://issues.apache.org/jira/browse/FLEX/



On July 28, 2014, Adobe Flex 4.13 was released.

On Jan 11, 2016, Apache Flex 4.15 was released.

### Free multi-platform development

http://flex.apache.org/doc-getstarted.html#setupFDT

http://flex.apache.org/installer.html

Adobe AIR allows you to make Apple iOS Applications from a Windows PC. 
But you still need a Mac to submit the app to Apple.

Adobe AIR requires each client machine running it to have an AIR client downloaded to it.

Using Adobe AIR with Apache Flex enables a single code base to be used to produce applications for submission to the Apple App Store,Apple Mac App Store, Android Market,  and Blackberry App World. 

There are very successful projects that have been submitted to all of the above. 

This allows you to use the SDK and any outputs of the SDK for personal and commercial use with virtually no restrictions. Some of the recommended tooling (not produced by Apache) costs money, however you are more than free to use the included command-line compilers and toolsets.

@NextGenAS 
https://nextgenactionscript.com/
Use asjsc to Transpile ActionScript to JavaScript and Node.js
https://www.youtube.com/channel/UCLfZXE-Dr2GXlbkDkmIwxDA

## Flash Client Downloads

There are several pieces:

   ### Get Flash on your machine

0. Download and install the Adobe Flash plug-in for Firefox and your operating system (Windows or MacOS)
0. Download and install Firefox internet browser.
0. Open Firefox browser

   ### Verify Flash works in browser

0. Highlight and copy this URL

   http://www.flashwonderland.com/html-interact-02-send-text-to-flash/send-text-field-to-flash.html

   You should see a white "Message Box" within a green box, as seen on
   <a target="_blank" href="https://www.youtube.com/watch?v=lVxHUvi0liY&index=2&list=PLB59808C346B642DF">
   [1:26] of this video</a>.

   BLAH: other examples in the video are gone now:

   http://www.taterboy.com/blog/2008/08/flash-and-javascript-communication/

0. Click "Display Message in Flash Movie", which is "Hello World".
0. Click "Remove Message in Flash Movie".


   ### Enable Flash for JavaScript in browser

0. Highlight and copy this URL

   <pre>
   http://www.permadi.com/tutorial/flashjscommand/
   </pre>

   You should see a white 
   <a target="_blank" href="https://www.youtube.com/watch?v=lVxHUvi0liY&index=2&list=PLB59808C346B642DF">
   [3:44] of this video</a>.

0. Open a Firefox browser and paste the URL.
0. Click on the "Click to enable Adobe Flash Player"
0. Click "Allow" in the pop-up.
0. Click "Play"
0. Type text in the Form Data: field and click Send Data.

   The change should be reflected in the Data: field within the animation.a

0. Change the text in the Data: field and click "Receive data".

   The change should be reflected in the From Data: field.

0. Read the rest of the article.


   ### View in Firefox Developer Tools

0. On the page, right-click on the white area to the right of the Flash object shown.
0. Select <strong>Inspect Element</strong>.
0. Click on various parts of the DOM shown to see what is highlighted on the page.
0. When the Flash Movie section is highlighted, expand that section in the lower pane by clicking the arrow icon.
0. See the &LT;object id=...

   ### Reference

0. View website shown at
   <a target="_blank" href="https://www.youtube.com/watch?v=lVxHUvi0liY&index=2&list=PLB59808C346B642DF">
   [5:07] of this video</a>:

   https://developers.google.com/youtube/flash_api_reference

   Since January 27, 2015 the YouTube ActionScript 3.0 Player API, also known as the YouTube Flash API (AS3)
   and YouTube Flash <object> embeds were deprecated in favor of the IFrame API, which can intelligently use whichever embedded player the client supports: HTML5 &LT;video> or Flash &LT;object>.

0. View Flex Showcase (Gallery)

   <a target="_blank" href="http://www.adobe.com/devnet-apps/flashshowcase/#/main">
   http://www.adobe.com/devnet-apps/flashshowcase/</a>


## Tutorials

<a target="_blank" href="https://www.lynda.com/Flash-Builder-4-tutorials/and-flex-4-essential-training/61161-2.html">
Lynda.com has a 10 hour video course on Adobe Flash Builder 4 and Flex 4 Essential Training</a>
for developers. It's by David Gassner.

https://cwiki.apache.org/confluence/display/FLEX/Getting+Started+With+FlexJS


## IDE Usage

* Adobe Flash Builder
* IntelliJ IDEA
* FDT
* FlashDevelop (needs link)
* Moonshine (needs link)


### FDT IDE

There is a free and $65/month editions of FDT (Flexible Development Toolkit).

Free FDT_osx64.dmg is 380 MB.

http://fdt.powerflasher.com/2015/12/flexjs-compiler-support/

### Adobe Flash Builder

Download Adobe Flex Premium 4.7 after you pay:<br />
$249 for the Standard, $699 for Premium.<br />
Or $49 per month for either.

0. Scroll to the bottom of:

   <a target="_blank" href="https://www.adobe.com/products/flash-builder/buying-guide.html">
   https://www.adobe.com/products/flash-builder/buying-guide.html</a>

   <a target="_blank" href="http://www.adobe.com/products/flash-builder.html">
   http://www.adobe.com/products/flash-builder.html</a>

Note:

   https://www.mydigitallife.info/adobe-flash-builder-4-free-download-with-serial-number/

## Frameworks

Parsley, Cairngorm, pureMVC and Robotlegs


http://www.ardisialabs.com/demo/
UI components

Flexicious datagrid

http://www.vemployee.com/blog/5-reasons-why-you-should-code-in-apache-flex-air/

## Coding

Before we dive into coding, know that 

It's the lower level to the Flash Framework.


https://www.lynda.com/ActionScript-3-tutorials/in-flex-builder-essential-training/268-2.html




   ### IntelliJ IDE

0. Download 

0. Create a Project

   http://www.guru99.com/intellij-selenium-webdriver.html

   http://www.permadi.com/tutorial/flashjscommand/

   ### Flex API

0. Download selenium flex api from

   https://code.google.com/archive/p/sfapi/downloads

   sfapi-0.2.6.zip 

   sfapi-sample.zip for Automation for Adobe Flex applications

0. Unzip sfapi-sample.zip for two folders:

   SelFlexDemoApp

   SelFlexDemoTest

   These are used below...

0. Unzip sfapi-0.2.6.zip for:

   sfapi.swc

   user-extensions.js

   BLAH: The wiki mentioned in the README is not active:
   http://code.google.com/p/sfapi/w/list   

0. Get the <strong>SeleniumFlexAPI.swc</strong> file.

0. Put the .swc file in the Flex app's libs folder.

0. In Flex compiler command script, add
   lib path in like this 
 
   <pre>
   -include-libraries "libs\sfapi.swc"
   </pre>

   Not "SeleniumFlexAPI.swc"

0. Re-compile the code. See:

   http://help.adobe.com/en_US/flashbuilder/using/WSe4e4b720da9dedb5-1a92eab212e75b9d8b2-7ffe.html

0. For more explanation see:

   http://stackoverflow.com/questions/10044001/how-can-we-automate-flash-element-click-action-in-selenium/

0. Code at:

   http://edu.yoursfriends.com/38/how-to-handle-flex-in-selenium-web-driver



## Selenium RC 

http://www.guru99.com/introduction-to-selenium.html

FlexUISelenium is an extension to the Selenium RC client driver that enables the Selenium RC client drivers to interact (and test) the Flex UI components and methods of the Flex application.

FlexMonkey- open source Paid tools like RIATest,Silktest, SeleniumFlex


https://code.google.com/p/flash-selenium/downloads/detail?name=flash-selenium.jar
has been moved to 
https://github.com/ashudestiny/flash-selenium
(from https://code.google.com/archive/p/flash-selenium/)
<strong>flash-selenium.jar</strong>
 aims to extend the Selenium RC clients for adding Flash communication capabilities.

Let's Start flash automation with selenium 2.0 webdriver [onlineseleniumtraining.com]
shows modification of the Java code from RC to WebDriver such that:

   <pre>
public FlashSeleniumWebDriver(final WebDriver webDriver, final String flash_ObjectId){
   </pre>

(FlashSelenium.java at
http://tinyurl.com/czswftn is no longer available)


## Sample coded Flash app 

http://www.shawkath.com/flashtest/
is no longer available.






   Notice several items are deprecated. Actually the whole thing is deprecated.

Download flash-selenium.jar 
for SRC 0.9.2 (not deprecated r45)




## Sample Flash Flex program



## .swc add-in

0. Add file <strong>sfapi.swc</strong> into the 'libs' folder of your Flex application from

0. Add to Flexbuilder/Eclipse Additional compiler arguments: 
   Right click on the project and go to project properties.
   Click on "Flex compiler" to bring up the compiler options.

   For Windows:

   <pre>-include-libraries "..\libs\sfapi.swc"</pre>

   For Mac or Linux:

   <pre>-include-libraries "../libs/sfapi.swc"</pre>


   https://code.google.com/archive/p/flash-selenium/downloads


https://github.com/Kuhtich/flex-ui-selenium
(from https://code.google.com/archive/p/flex-ui-selenium/)
FlexUISelenium is an extension to the Selenium RC client driver that enables the Selenium RC client drivers to interact (and test) the Flex UI components and methods of the Flex application.

http://stackoverflow.com/questions/21457004/how-to-automate-a-flex-application-in-selenium-webdriver

GraniteDS

http://code.google.com/p/fluint/


### Sample app

0. Get "sfapi.swc" is from the Selenium-Flex-API project for Selenium IDE:

   http://code.google.com/p/sfapi/

0. Download

   https://github.com/hugs/flex-compareSum

0. Construct the command to build the code:

   cd src

   ~/Apps/flex_sdk_3.4/bin/mxmlc compareSum.mxml -include-libraries "sfapi.swc"

0. To display index.html in the current folder, launch a simple webserver built into Python:

   python -m http.server 8000

   (it was previously named SimpleHTTPServer. See http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)

0. Launch a web browser and open http://localhost:8000/


### Alternatives

https://github.com/admc/flex-pilot-x
by adam.christian@gmail.com (https://medium.com/@admc)

https://github.com/jagdeepjain/selenium-flex-demo
(from https://code.google.com/archive/p/sfapi/)

https://github.com/tanzilli/playground/blob/master/python/httpserver/example1.py
http://www.acmesystems.it/python_httpd
Write a simple HTTP server in Python

https://code.google.com/archive/p/fluint/

