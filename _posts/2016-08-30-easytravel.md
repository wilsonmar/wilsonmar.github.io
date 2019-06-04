---
layout: post
title: "EasyTravel sample app (from Dynatrace)"
excerpt: "A sample multi-tier Java app used as the basis for measuring infrastructure"
tags: [Clouds, Monitoring, Analytics]
shorturl: "https://goo.gl/IHLc6q"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dDynatracebf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

{% include _toc.html %}

This is a step-by-step tutorial on how to install and run the Easy Travel sample app within Docker.

Currently, this articcle needs an update about Docker and misses key steps and URLs.
Thank you for your help.

## TL;DR Summar

EasyTravel is a "realistic heterogeneous multi-tier web-application"
Dynatrace provides to evaluate its AppMon and UEM software.

(By "Easy Travel" what we're referring to here is NOT a real travel site like Expedia.com or http://www.easytravel.co.tz).

YOUTUBE: <a target="_blank" href="https://www.youtube.com/watch?v=ps9Y14KlPyU">
Evaluate Dynatrace with easyTravel</a> demo app
published on May 14, 2015. In 1 hour it takes a whirlwind tour, half based on random questions,
which can be confusing to newbies.

## Installation

0. Identify the latest version of Dynatrace (6.5 as of this writing March 2017).

0. If you're on a Mac, install Ubuntu within VMWare Fusion.

0. In an internet browser, get to the EasyTravel download website:

   <a target="_blank" href="http://bit.ly/dteasytravel">
   http://bit.ly/dteasytravel</a>
   (https://community.dynatrace.com/community/display/DL/Demo+Applications+-+easyTravel)

0. Uninstall previous version:

   ls $UserHome/.dynaTrace/easyTravel 2.0.0/easyTravel/config

   rm -rf $UserHome/.dynaTrace/easyTravel 2.0.0/easyTravel/config

0. Click "easyTravel for AppMon 6.5"

   CAUTION: Only Windows and Linux are supported.
   <a href="#RunOnLinux">Get the Linux edition to work on a MacOSX</a>

   dynatrace-easytravel-windows-x86_64-2.0.0.2542.msi is 416.1 MB

   dynatrace-easytravel-linux-x86_64 for AppMon 7 is 361 MB

0. Click OK to the folder:

   C:\Program Files\dynaTrace\easyTravel (x64)\

0. If you get the UAC pop-up, click Yes.
0. Click Finish.

   ### Configure

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




<hr />

0. Get license

   Click "Download easyTravel Demo License" https://community.dynatrace.com/community/download/attachments/45383742/dynaTrace_license_201609281051.key?version=2&modificationDate=1486998983333&api=v2

   <strong>dynaTrace_license_201609281051.key</strong> is downloaded.

   CAUTION: The file name is deceptive.
   Each license is valid within a 3 month period. A new license needs to be downloaded. 
   The license is bound to easyTravel and the pre-configured System Profile that comes with easyTravel.

   QUESTION: How is https://community.dynatrace.com/community/display/EVAL/My+dynaTrace+Trial
   different than the other page? "A trial account for this ID already exists!"


See https://www.youtube.com/watch?v=B_oWkBjH-Uk


<a name="RunOnWindows"></a>

## Using Windows to work on a MacOSX

0. Download from the EasyTravel website:

   dynatrace-easytravel-windows-x86_64-2.0.0.2542.msi, 416.1 MB


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


### Built-in load generator


### Info

https://community.dynatrace.com/community/display/DOCDT61/Testing+an+Installation

