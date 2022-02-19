---
layout: post
title: "EasyTravel sample app (from Dynatrace)"
excerpt: "A sample multi-tier Java app used by Dynatrace as the basis for measuring infrastructure"
tags: [Clouds, Monitoring, Analytics]
date: "2016-08-30"
file: "easytravel"
image:
# easytravel-1900x500-34236.jpb
  feature: https://user-images.githubusercontent.com/300046/61681852-0d680880-acc4-11e9-8e25-2b0e311794e6.jpg
  credit: fasteasytravel on Facebook
  creditlink: https://www.facebook.com/fastneasytravel
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a step-by-step tutorial on how to install and run the Easy Travel s-+++ample <strong>stack of apps</strong> from <a target="_blank" href="https://wilsonmar.github.io/dynatrace">Dynatrace</a> so that it can to evaluate its own AppMon and UEM software.

Currently, this article needs an update about Docker and misses key steps and URLs.
Thank you for your understanding.

There are other demos, such as “Hipster Shop” created using https://github.com/dynatrace-ace/microservices-demo
containing a 10-tier microservices application. The application is a web-based e-commerce app called where users can browse items, add them to the cart, and purchase them.

## TL;DR Summary

By "Easy Travel" what we're referring to here is NOT a real travel site like <a target="_blank" href="https://www.expedia.com/">Expedia.com</a> or <a target="_blank" href="http://www.easytravel.co.tz">easytravel.co.tz</a>.

EasyTravel consists of both consumer and business portals:

   * Consumer Customer users access the <strong>Java-based Front-end</strong> web portal to log in, search for journeys to various destinations, select promotional journeys directly that are offered and book a journey using credit card details. 

   * Business-to-Business (B2B) users use a <strong>.Net</strong> web portal for travel agencies to manage the journeys that they offer and review reports about bookings made by consumers.


## Architecture and Source

1. View YOUTUBE: <a target="_blank" href="https://www.youtube.com/watch?v=ps9Y14KlPyU">Evaluate Dynatrace with easyTravel</a> demo app
   from May 14, 2015. In 1 hour Andreas Grabner (<a target="_blank" href="https://twitter.com/grabnerandi">@grabnerandi</a>) takes a whirlwind tour, half based on random questions,
   which can be confusing to newbies.
   Contents of the video have been incorporated in the steps below.

1. In your internet browser, get on the EasyTravel download web page:

   <a target="_blank" href="http://bit.ly/dteasytravel">
   <strong>http://bit.ly/dteasytravel</strong></a>
   = https://confluence.dynatrace.com/community/display/DL/easyTravel

   <strong>CAUTION: Each version of EasyTravel was tested with specific versions of Dynatrace and its AppMon.</strong>

   2.0.0.3373

1. Click on "easyTravel 2 source code" to download file <strong>dynatrace-easytravel-src.zip</strong> to your downloads folder.

   * 864 MB
   <br /><br />

   https://github.com/dynatrace-ace

1. In the browser or Finder, double-click on `dynatrace-easytravel-src.zip` to expand into folder:

   <tt>dynatrace-easytravel-src</tt>

1. Delete the zip file.
1. Use a Finder to view the files.
1. Open <tt><strong>easyTravel - Architecture and Deployments.pptx</strong></tt> (using PowerPoint)

   NOTE: "Compuware" is the name of the company which Dynatrace acquired.

   What is special about the system is it is designed to exhibit different problem patterns based on specifications in an XML file referenced by programs.

   EasyTravel is a multi-tier system implemented in a mix of technologies on Windows and Linux machines.
   It provides the variety of technologies which Dynatrace can trace.

   <a name="MinimalNodes"></a>

   ### Small (Minimal) Set of Nodes

   The "Small" scenario has a single Apache PHP Web Server receiving from Desktop, Mobile, and an Administration Portal.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/154799357-17d15bc6-e380-4e2f-babf-462f6d51f510.png"><img alt="easyTravel_small-1272x912" width="1272" height="912" src="https://user-images.githubusercontent.com/300046/154799357-17d15bc6-e380-4e2f-babf-462f6d51f510.png"></a>

   <table border="1" cellpadding="4" cellspacing="0"><thead>
   <tr valign="bottom"><th>Svr</th><th>Application</th><th>Technology</th><th>Memory</th><th>Notes</th></tr>
   </thead><tbody>
   <tr valign="top"><td>1.</td><td><a href="#Launcher"><strong>Launcher</strong></a> & Business Database</td><td>Java/SWT</td><td align="right"> 225 MB</td><td>Java Derby DB (MSSQL) plugins</td></tr>
   <tr valign="top"><td>2.</td><td>Load Balancer</td><td>Apache PHP?</td><td align="right"> -</td><td>-</td></tr>
   <tr valign="top"><td>3.</td><td>"Third Party" Customer Frontend</td><td> Java/Tomcat</td><td align="right"> &lt;190 MB</td><td>port 8079 to 8080</td></tr>
   <tr valign="top"><td>4.</td><td>B2B Frontend</td><td> .NET/MVC</td><td align="right"> 65 MB</td><td>port 8099 to 9000</td></tr>
   <tr valign="top"><td>5.</td><td>Business Backend</td><td> Java/Tomcat</td><td align="right"> &lt;190 MB</td><td>-</td></tr>
   <tr valign="top"><td>6.</td><td>Payment Backend</td><td> .NET/MVC</td><td align="right"> 65 MB</td><td>-</td></tr>
   <tr valign="top"><td>7.</td><td>Payment Database</td><td>MSSQL Compact</td><td align="right"> ? MB</td><td>-</td></tr>
   <tr valign="top"><td>8.</td><td>Credit Card Authorization</td><td> C++/ADK</td><td align="right"> &lt;1 MB<td>-</td></td></tr>
   <tr valign="top"><td>9.</td><td>"Third Party" User emulator</td><td> ?</td><td align="right"> ? MB</td><td>imposes load</td></tr>
   <tr valign="top"><td colspan="3"><strong>Overall</strong></td><td align="right"> <strong>&lt;800 MB</strong><td>Optional</td></td></tr>
   </tbody></table>

   <strong>PROTIP: You can't run the whole set on your Mac</strong>

   In the table above, 
   * "SWT" is pronounced "Swift", the UI framework used by Java programmers
   * "ADK" is the <a target="_blank" href="https://en.wikipedia.org/wiki/Windows_Assessment_and_Deployment_Kit">Microsoft ADK (Windows Assessment and Deployment Kit)</a> native app.

   ### Large + Microservices offers redundancy


https://www.youtube.com/watch?v=KRl3ed8iEiY

<a name="Launcher"></a>

## Launcher 

The Launcher starts programs in the various tiers and enables switching among demo scenarios. By default the easyTravel Launcher offers four scenario groups:

   1. <a target="_blank" href="https://www.dynatrace.com/support/doc/appmon/user-experience-management/">UEM (User Experience Management)</a> tracks user behavior on web pages for business analytics data like the geographic distribution of your web page visitors and average session duration.
   2. Production usage
   3. Test Center
   4. Development Team
   <br /><br />



   * Angular2
   * HBase
   * SeleniumTest
   * ThirdPartyLibraries contains JUnit, etc.

0. View the list using Excel opening `UsedThirdPartyLibraries.xlsx`.

   ### Collect installers

1. Identify the latest version of Dynatrace (7.2 as of June 2019, 6.5 as of March 2017).
1. Create a folder to receive downloads.
1. Download the assets to that folder:

   * "JMeter PERFORM 2015 Samples.zip" file `JMeter PERFORM 2015 Samples.zip` from https://community.dynatrace.com/community/download/attachments/243434413/JMeter%20PERFORM%202015%20Samples.zip?version=1&modificationDate=1495536503227&api=v2
   
   * easyTravel Database.dashboard.xml from https://community.dynatrace.com/community/download/attachments/243434413/easyTravel%20Database.dashboard.xml?version=1&modificationDate=1495536502740&api=v2

   * easyTravel.profile.xml from https://community.dynatrace.com/community/download/attachments/243434413/easyTravel.profile.xml?version=1&modificationDate=1495536502790&api=v2

   * dynatrace-easytravel-linux-x86_64.jar from http://dexya6d9gs5s.cloudfront.net/latest/dynatrace-easytravel-linux-x86_64.jar

   * dynatrace-easytravel-windows-x86_64-latest.msi from http://dexya6d9gs5s.cloudfront.net/latest/dynatrace-easytravel-windows-x86_64-latest.msi

0. Expand "JMeter PERFORM 2015 Samples.zip"

   * runEasyTravelLoginTest.cmd runs
   * EasyTravelLogin_DTTAGGING.jmx using `C:\apache-jmeter-2.13`
   * registerDynatraceTestRun.cmd runs
   * registerTestRun.jmx

   * EasyTravelLogin_RAW.jmx
   <br /><br />

<hr />

<a name="InstallDynatrace"></a>

## Install Dynatrace

1. Get license

   Click "Download easyTravel Demo License" https://community.dynatrace.com/community/download/attachments/45383742/dynaTrace_license_201609281051.key?version=2&modificationDate=1486998983333&api=v2

   <strong>dynaTrace_license_201609281051.key</strong> is downloaded.

   CAUTION: The file name is deceptive.
   Each license is valid within a 3 month period. A new license needs to be downloaded. 
   The license is bound to easyTravel and the pre-configured System Profile that comes with easyTravel.

   QUESTION: How is https://community.dynatrace.com/community/display/EVAL/My+dynaTrace+Trial
   different than the other page? "A trial account for this ID already exists!"


See https://www.youtube.com/watch?v=B_oWkBjH-Uk

https://community.dynatrace.com/community/display/DOCDT61/Testing+an+Installation


<a name="RunOnWindows"></a>

## Windows install

0. If you're on a Mac, install Ubuntu within VMWare Fusion.

0. Uninstall previous version:

   <pre>ls $UserHome/.dynaTrace/easyTravel 2.0.0/easyTravel/config
   &nbsp;
   rm -rf $UserHome/.dynaTrace/easyTravel 2.0.0/easyTravel/config
   </pre>

0. Click "easyTravel for AppMon x.x"

   CAUTION: Only Windows and Linux are supported.
   <a href="#RunOnLinux">Get the Linux edition to work on a MacOSX</a>

   `dynatrace-easytravel-windows-x86_64-2.0.0.2542.msi` was 416.1 MB

0. Click OK to the folder:

   C:\Program Files\dynaTrace\easyTravel (x64)\

0. If you get the UAC pop-up, click Yes.
0. Click Finish.

0. Click the Windows key. 
0. Click EasyTravel Configuration UI.
0. If the Windows Security Alert pops up, click "Allow access".
0. Click OK to this pop-up:

0. Click on the wheel icon at the upper-right of the screen.
0. Click "Select a program from a list of installed programs".

0. Click on Standard.
0. Choose "starting".

   ### Clean-up
   
0. Delete the installer .exe file.

   ### View

0. Open a browser to localhost:8079

## Install on Linux

0. Uninstall previous version if it:

   dynatrace-easytravel-linux-x86_64 for AppMon 7 is 361 MB


<a name="RunOnLinux"></a>

## Using Linux

From <a target="_blank" href="https://answers.dynatrace.com/questions/148613/how-to-start-easytravel-demo-on-linux.html?childToView=175003#answer-175003">this</a>:

It seems you run a 64-bit Ubuntu installation, but easyTravel does not fully support this with the 32-bit binaries that are provided on the community pages.

You can either run easyTravel on an Ubuntu 32-bit installation 
or use the Web-based launcher via the following commands:

cd weblauncher

./weblauncher.sh

This will provide a web-based view which should provide the same interfaces as the rich-client UI.

Please note that on 64-bit Linux, you likely need to run the following commands to install some additional 32-bit components that are needed by easyTravel:

   <pre>
sudo apt-get update 
sudo aptitude install gcc-multilib 
sudo apt-get install libxml2:i386 
sudo aptitude install lib32z1 
sudo apt-get install libcurl3:i386 
   </pre>

If you do not get libxml2:i386 you have to enable multilib support first:

   <pre>
sudo dpkg --add-architecture i386 sudo apt-get update
   </pre>

0. Download from the EasyTravel website:

   dynatrace-easytravel-linux-x86_64-2.0.0.2542.jar, 441 MB

<hr />

## Install Agents

0. Install agents on Apache servers under test

   0. Adjust dtwsagent.ini 
   0. Adjust Apache HTTP config via "Edit http.conf" on Apache Procedure in easyTravel Launcher
   <br /><br />

0. Install Dynatrace server (Apache)

0. Configure System Profile (install resource pack) on dynatrace client

   <img width="226" alt="dynatrace easytravel system profile 452x362" src="https://cloud.githubusercontent.com/assets/300046/24030587/0c2b8456-0ab4-11e7-8df2-5e1d279cf9a6.png">

0. Verify API ports

   http://localhost:8020/api-docs/index.html

0. Configure Agent Mappings
0. Inject agentpath-setting into the application code for instrumentation

   https://community.dynatrace.com/community/display/DL/easyTravel+Training+Mode
   EasyTravel Training Mode

0. Configure EasyTravel: click on icon at upper-right

   ![dynatrace easytravel config icon menu 340x131](https://cloud.githubusercontent.com/assets/300046/24032047/636f9a24-0abc-11e7-9bfb-adea2aee8b84.png)

   Select Show Properties for file <strong>easyTravelConfig.properties</strong> file.

   Edit <strong>config.dtserverWebPort=8020</strong>.

0. Launch servers under test

   The starting of the various tiers and the enabling/disabling of different problem pattern plugins is done via a separate easyTravel Launcher. The Launcher allows the user to conveniently switch between different demo scenarios. Each scenario can define load scripts and certain problem pattern plugins that are enabled. The scenarios can be modified or extended by changing an XML file. This is useful when giving demos and allows you to focus on <em>problem areas</em> that are particularly relevant for a specific demo.

   The default:

   https://localhost:9911

   <img width="771" alt="dynatrace easytravel config ui 1542x1014" src="https://cloud.githubusercontent.com/assets/300046/24030487/aad9e74c-0ab3-11e7-9223-4ba4bf436678.png">

0. Install System Profile

0. Use by travelers

   Users log in, search for journeys to various destinations, select promotional journeys directly that are offered and book a journey using credit card details. 

0. Use by travel agents

   Login as ???

   A Business-to-Business (B2B) .NET web portal for travel agencies is provided where travel agencies can manage the journeys that they offer and can review reports about bookings made by travelers.
 
0. Adjust Generated visits (built into easytravel app)

   ![dynatrace easytravel config 207x90](https://cloud.githubusercontent.com/assets/300046/24032301/adb2b714-0abd-11e7-91f9-76baa2f13fb1.png)

0. Activate Problem Pattern - slow authentication

   In the easytravel Configuration UI, search for "monica".

   Login as monica / monica.

   See trace on desktop client.

0. Run load traffic pattern

   [18:54] Watch on Dynatrace Dashboard of specific users.

   [20:02] End user experience geolocation map and who is frustrated.

   QUESTION: What can the company do about frustrated users?

   [22:12] In Diagnostics Transaction Flow: Hotspots by Tier and API

   ![dynatrace hotspots by tier 805x173](https://cloud.githubusercontent.com/assets/300046/24031048/b75be864-0ab6-11e7-92a9-614057fe360e.png)

   ![dynatrace hotspots by api 797x183](https://cloud.githubusercontent.com/assets/300046/24031022/864b4648-0ab6-11e7-930c-c5bdc5340fcd.png)

   ### IDE

   https://marketplace.atlassian.com/plugins/be.sofico.bamboo.plugins.bamboo-dynatrace-plugin/server/overview

0. Configure Eclipse IDE

   https://community.dynatrace.com/community/display/DL/dynaTrace+Eclipse+Integration+Plugin

   https://github.com/Dynatrace/Dynatrace-Eclipse-Integration-Plugin

0. Configure IntelliJ

   https://community.dynatrace.com/community/display/DL/dynaTrace+IntelliJ+IDEA+Integration+Plugin

   https://community.dynatrace.com/community/display/DL/IntelliJ+IDEA+Integration+Plugin

0. Configure Visual Studio IDE


0. Identify Memory Leaks

   https://www.dynatrace.com/blog/hands-tutorial-5-steps-identify-java-net-memory-leaks/

0. Identify Garbage Collection

   http://apmblog.dynatrace.com/2014/09/16/detecting-bad-deployments-resource-impact-response-time-hotspot-garbage-collection/

   ### Jenkins integration

0. Jenkins

   https://github.com/Dynatrace/Dynatrace-JenkinsPlugin

   ### Confluence

0. Integrate with Confluence via cPrime

   https://marketplace.atlassian.com/vendors/1211168

   https://marketplace.atlassian.com/plugins/com.cprime.confluence.templates/server/overview

## Profile

easyTravel.profile.xml
from 
https://community.dynatrace.com/community/download/attachments/45383742/easyTravel.profile.xml?version=1&modificationDate=1389783776787&api=v2

easyTravel Database.dashboard.xml
from
https://community.dynatrace.com/community/download/attachments/45383742/easyTravel%20Database.dashboard.xml?version=1&modificationDate=1389783776783&api=v2


## Built-in load generator

## Run using Flood.io

TODO: 

