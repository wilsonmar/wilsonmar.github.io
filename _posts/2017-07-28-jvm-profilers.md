---
layout: post
title: "JVM Profilers"
excerpt: "Identify and resolve performance bottlenecks, memory leaks, and threading issues"
tags: [Java, Debugging]
date: "2017-07-28"
file: "jvm-profilers"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<p align="right"><a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=es&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Español (Spanish)" width="20" height="14" src="../images/flags/es.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=fr&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Français (French)" width="20" height="14" src="../images/flags/fr.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=de&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Deutsch (German)" width="20" height="14" src="../images/flags/de.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=it&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Italiano" width="20" height="14" src="../images/flags/it.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=pt&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Português" width="20" height="14" src="../images/flags/pt.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ru&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Cyrillic Russian" width="20" height="14" src="../images/flags/ru.png"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="中文 (简体) Chinese (Simplified)" width="20" height="14" src="../images/flags/cn.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ja&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="日本語 Japanese" width="20" height="14" src="../images/flags/jp.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="한국어 Korean" width="20" height="14" src="../images/flags/ko.gif"></a>
</p>
{% include _toc.html %}

This tutorial aims to enable you to identify and resolve 
<strong>problematic patterns</strong> in memory and CPU usage in Java and Scala code
using JProfiler and JVisualVM.

## Profilers in the Market #

<a target="_blank" href="https://zeroturnaround.com/rebellabs/top-5-java-profilers-revealed-real-world-data-with-visualvm-jprofiler-java-mission-control-yourkit-and-custom-tooling/">One survey published 2015-11</a> 
   <a target="_blank" href="http://zeroturnaround.com/rebellabs/developer-productivity-report-2015-java-performance-survey-results/">
   as pdf</a> 
   presented these market share numbers:

   <amp-img alt="jvm profilers 2016-589x341-127kb.jpg" width="589" height="341" src="https://cloud.githubusercontent.com/assets/14143059/19412429/43e0db48-92d3-11e6-8826-9696450be55e.jpg"></amp-img>

   Comparison for Mac (named license with two years of support):

   | Product | Date | File Name | MB | $USD |
   | ------- | ----- | -------- | -: | ---- |
   | JProfiler | 2017-01-21 | jprofiler_macos_10_0.dmg | 148 MB | $698 |
   | JProfiler | 2016-06-21 | jprofiler_macos_9_2.dmg | 126 MB | $698 |
   | <a href="#JVisualVM">JVisualVM</a> | 2016 | GitHub 1.3.9 | 13 MB | free |
   | <a href="#YourKit">Yourkit</a> | 2016.02    | yjp-2016.02-b43-mac | 8.7 MB | $649 |
   | <a href="#Censum">jClarity Censum</a> | -| - | - MB | $? |

<hr />

## JVisualVM #

   <strong>VisualVM</strong> has the largest market share
   because perhaps it is free and is
   <a target="_blank" href="https://docs.oracle.com/javase/7/docs/technotes/guides/visualvm/">
   bundled in the JDK</a> since JDK 6 update 7.

   http://docs.oracle.com/javase/7/docs/technotes/guides/visualvm/profiler.html

   The bleeding-edge version at <br />
   <a target="_blank" href="https://visualvm.github.io/download.html">
   https://visualvm.github.io/download.html</a><br />
   is actively maintained by two developers in Prague, the Czech Republic.

   VIDEO:
   * <a target="_blank" href="https://www.youtube.com/watch?v=z8n7Bg7-A4I">
   Introduction to Java Visual VM</a> from 2013.

   Philip Starritt has created videos on VisualVM:
   1. <a target="_blank" href="https://www.youtube.com/watch?v=W60wvJ885iE">
   Launcher Setup</a> in Eclipse. 9 July 2017. <br />
   <a target="_blank" href="https://visualvm.github.io/idesupport.html">
   https://visualvm.github.io/idesupport.html</a>

   2. <a target="_blank" href="https://www.youtube.com/watch?v=Uubqc76h-jo">
   Java Heap Dump Analysis</a> of live running app. 9 July 2017
   2. <a target="_blank" href="https://www.youtube.com/watch?v=ZYPa93q2zj8">
   OutOfMemoryError Java Heap Space Fix - Heap Dump Analysis</a> 12 July 2017
   3. <a target="_blank" href="https://www.youtube.com/watch?v=ZYPa93q2zj8">
   Out of Memory - Head Dump Analysis</a>
   <br /><br />
   * https://www.youtube.com/watch?v=dUQqmnmCBbg
   Using jvisualvm to find Heap Problems
   * https://www.youtube.com/watch?v=pRwvx4QpUfo
   Java VisualVM - Introduction
   * https://www.youtube.com/watch?v=z8n7Bg7-A4I
   * https://www.youtube.com/watch?v=1kGt1ctY-a0
   Introduction to Java VisualVM
   Java GC Monitoring with JVisualVM by Rohit Dhall


## JProfiler Install & License #

0. Download from<br /><a target="_blank" href="https://www.ej-technologies.com/download/jprofiler/files">
   https://www.ej-technologies.com/download/jprofiler/files</a><br />
   for your platform.

0. PROTIP: While you wait for the download,
   identify the version of IDE you'll be using with JProfiler.
   Most developers use integrations with their IDE 
   IntelliJ IDEA, Eclipse, NetBeans, Oracle JDeveloper.

   Also, get a license at<br />
   <a target="_blank" href="https://www.ej-technologies.com/buy/jprofiler/select">
   https://www.ej-technologies.com/buy/jprofiler/select</a>

   $698 with a year of support.

   ### After download #

0. Open the JProfiler installer.

0. On a Mac, drag the JProfiler icon to drop on the Applications folder.
0. Exit the installer dialog.
0. Delete (Move to Trash) the installer file to save disk space.
0. Use Finder to initiate JProfiler.
0. The first time it opens, JProfiler enters Setup. Click Next.
0. Click Next to Evaluate for 10 days.

   ### IDE #

0. Optionally: Click "[Select an IDE]" if you have one and click Integrate.

   See http://resources.ej-technologies.com/jprofiler/help/doc/ide/$folder$.html

   An example of IDE configuration is http://www.andrejkoelewijn.com/blog/

0. Click Next, Finish.

   JProfiler is started up automatically.

0. Check "Don't show this dialog again" and Cancel.


### See Sample App Leak Memory #

   Just to walk through JProfiler's UI, 
   let's look at a program provided by JProfiler to behave badly.

0. Click to select the "Animated Bezier Curve demo" session which
   JProfile provides to intentionally leak memory not garbage collected:
   Its code contains a "LeakMap" object.

0. Click Start.
0. If an Evaluation version dialog appears, click "Evaluate".
   
   The Session Starup settings dialog appears. 

   ### Help and Docs #
  
0. Click the Help button for context-sensitive help.

   PROTIP: This is the best way to access specific documentation.
   So if you want to review documentation on another process, open
   <a target="_blank" href="http://resources.ej-technologies.com/jprofiler/help/doc/help.pdf"> 
   the 303 page pdf JProfiler Manual at<br />
   http://resources.ej-technologies.com/jprofiler/help/doc/help.pdf</a>.
   It presents same content as
   <a target="_blank" href="http://resources.ej-technologies.com/jprofiler/help/doc/">
   Online Help</a>.

0. To continue working, click on the app dialog partially hidden by the Help dialog.

   ### Videos #

   Among <a target="_blank" href="https://www.youtube.com/watch?v=vRssrJmTcsU&list=PLkPBGtwA1Ta6Fdbe7Asx-7Ve2bs-J6n2p&index=1">
   videos</a> created by Ingo Kegel (CTO of the company) is
   <a target="_blank" href="https://www.youtube.com/watch?v=DsJgiRp-yLw">
   this from 2012 for an older version of the program</a>.

   TODO: Recreate video using new verion of JProfiler, and run Scala.

   ### Startup Settings #


   A terminal window is opened for the demo process and 
   the main window of JProfiler displays profiling metrics.

   <amp-img alt="jprofiler_9 5 sessions defaults 650x451-97kb" width="650" height="451" src="https://cloud.githubusercontent.com/assets/14143059/19410730/a0af0598-92b0-11e6-8404-d6615f92975b.jpg"></amp-img>

   PROTIP: Probes collect measurements.

0. Click OK to accept the Startup Settings.

   A run is begun automatically.

   ### Start and Stop GUI #

   PROTIP: In the Terminal window opened automatically, notice "JVMTI version 1.1 detected"
   refers to the technology the JVM provides to enable JProfiler to obtain instrumentation data.

0. Click on <strong>Session Settings</strong> at the top menu:

   <img align="right" alt="jprofiler_9 2 app settings 855x513.png" width="650" height="390" src="https://cloud.githubusercontent.com/assets/14143059/19411151/2d86daa6-92b9-11e6-8545-5f87934e6ffc.png">

   Notice we are launching a new JVM instance and using the JVM indicated referencing the 
   relative CLASSPATH indicated.

   ### Session with Attach #

   Alternately, blog entry <a target="_blank" href="http://www.bigendiandata.com/2016-08-16-How-to-monitor-Kafka-apps-with-jprofiler/">
   How to monitor Kafka apps with JProfiler</a>
   shows this setting screen for attaching a running program:

   <amp-img alt="jprofiler004-bigendiandata 650x584-122kb.jpg" width="650" height="584" src="https://cloud.githubusercontent.com/assets/14143059/19413686/7aacfd96-92f1-11e6-87b0-bed7038c3c1e.jpg"></amp-img>

   The app is started with this command

   <pre>
   java -cp `mapr classpath`:nyse/nyse-taq-streaming-1.0-jar-with-dependencies.jar -agentpath:/home/mapr/jprofiler9/bin/linux-x64/libjprofilerti.so=port=11002 com.example.Run consumer /user/iandow/mystream:mytopic
   </pre>


   ### Remote access #

   It's "jpenable" which loads the profiling agent and makes it possible to connect with a remote
   session from another computer.

   PROTIP: The profiling agent and JProfiler GUI communicate
   with each other through a socket.
   By default, the profiling agent listens on <strong>port 8849</strong>.
   Many networks block traffic from such a port.

   <a target="_blank" href="https://www.youtube.com/watch?v=GnBmUjPRMjs">
   This video</a> shows how to setup a SSH Tunnel.


0. Click OK to dismiss the dialog.

   ### Watch it run #

0. Click on <strong>Telemetries</strong> category <strong>Overview</strong>.

0. Among processes, click on the Demo to expose the app under test.

   <amp-img alt="jprofiler_9 2 leak app-349x81-11kb.jpg" width="349" height="81" src="https://cloud.githubusercontent.com/assets/14143059/19411109/047a7b28-92b8-11e6-80dc-755037647b57.jpg"></amp-img>

0. Check "Leak Memory" on the BezierAnim app window.

   Programs that leak memory will show an upward trend in thread memory usage.

   PROTIP: Many memory leaks accumulate gradually over time, 
   so may require a long run to identify conclusively.

0. Click the zoom in and out icons at the lower right corner.

   Each <strong>GC Activity</strong> spike reduces the amount of Memory used (shown in blue)
   as a portion of memory allocated (shown as the top of the green block).

0. Click on <strong>Live memory</strong> category 
   <strong>All Objects</strong> view to sort objects by the amount each uses memory.

   ### Diffs in memory usage #

   PROTIP: Most items are generic objects such as "java.lang.Long" which 
   uses a lot of memory because many objects use it.
   We want to see the objects creating additional memory usage over time.

0. Click the <strong>Mark Current</strong> button at the right of the top ribbon
   to set the baseline for differences to be displayed.
 
   <a target="_blank" title="Click for full size view on new window" href="https://cloud.githubusercontent.com/assets/14143059/19411220/8ccb20e8-92ba-11e6-9f5e-5459351ea26a.png">
   <img alt="jprofiler_9 2 ribbon-1992x180-66kb" width="650" src="https://cloud.githubusercontent.com/assets/14143059/19411220/8ccb20e8-92ba-11e6-9f5e-5459351ea26a.png"></a>

0. Righ-Click on the high-level object defined by a custom name ("java.awt.geom.GeneralPath")
   to select "Show selection in Heap Walker".

   "Take Heap Snapshot for Selection".

0. Click OK to the Heap Snapshot Options with "Select recorded objects".

0. Click "References" to activate the reference graph view.

   <a target="_blank" title="Click for full size view on new window"  href="https://cloud.githubusercontent.com/assets/14143059/19411290/11494b8c-92bc-11e6-8cd5-cc0972a26f8d.png">
   <img alt="jprofiler_9.2 heap walker menu 1836x100-29kb.png" width="650" height="30" src="https://cloud.githubusercontent.com/assets/14143059/19411290/11494b8c-92bc-11e6-8cd5-cc0972a26f8d.png"></a>

0. Select "Cumulated outgoing references".
0. Click the gray arrows to expand items at each level.

   <a target="_blank" href="https://cloud.githubusercontent.com/assets/14143059/19411338/2a5d9c6c-92bd-11e6-9c2e-65290986a35a.png">
   <img alt="jprofiler_9 2 references-94kb" width="995" src="https://cloud.githubusercontent.com/assets/14143059/19411338/2a5d9c6c-92bd-11e6-9c2e-65290986a35a.png">

0. Right-click on object to select "Show paths to GC Root".

0. Click OK to see Single Root.

0. Scroll horizontally to the left in the chain.

   ### Biggest Objects #

0. Click on "Biggest Objects" icon.

0. Expand the tree by clicking gray arrows under the app "bezier.BezierAdmin"

   <img width="809" alt="jprofiler_9 2 biggest objects-101kb" src="https://cloud.githubusercontent.com/assets/14143059/19411398/24d53bdc-92be-11e6-93f7-d1c3bdcaf661.png">

   ### Show source code #

0. Right-click to select "Use Retain Items".
0. Check the "Classes" radio button, then OK.

   <img alt="jprofiler_9 2 leakmap-351x68-14kb.jpg" width="351" height="68" src="https://cloud.githubusercontent.com/assets/14143059/19411473/b0fcaacc-92bf-11e6-8b4e-8a1aac2f2d31.jpg">

   BLAH: Where is this in v9.2?

0. Check the "Allocations" radio button.

   QUESTION: How do we know leakMap is within this class?

0. Select "Cumulated allocation tree".
0. Click OK.
0. Right-click to select "Show Source".

   ### Save Snapshot #

   PROTIP: Snapshots can be taken only while the program is running.

0. Click the <strong>Take Snapshot</strong> camera icon on the ribbon.

   Alternately,<br />
   click the HPROF heap snapshot.

0. Click <strong>Save Snapshot</strong>.

   
   <a name="Offline"></a>

   ### Offline #

   Use the integration wizard to activate this by appending to the -agentpath VM parameter

   <pre>
   offline,config=[config file],id=[id]
   </pre>


<a href="RootCauses">

### Root Causes #

Memory leaks was a small part of all issues according to 
<a target="_blank" href="http://zeroturnaround.com/rebellabs/developer-productivity-report-2015-java-performance-survey-results/">
this report in 2015</a>
   <amp-img alt="jvm rebelabs stats 2015 root causes 1256x890.jpg" width="650" height="461" src="https://cloud.githubusercontent.com/assets/14143059/19410921/8afbf824-92b4-11e6-8f4f-eee7e54bafbf.jpg"></amp-img>




<a href="ChromeExt">

### JProfiler Origin Tracker #

Although Chrome announced it is doing away with Extensions,
<a target="_blank" href="https://chrome.google.com/webstore/detail/jprofiler-origin-tracker/mnicmpklpjkhohdbcdkflhochdfnmmbm?hl=en">
JProfiler Origin Tracker Chrome Browser Extension</a>
can still be useful.



### Strategy #

<a target="_blank" href="https://www.ej-technologies.com/products/jprofiler/features.html">
JProfiler has several "modes" it can run</a>.

PROTIP: Take a "top-down" approach to analyzing a Java program.

0. Ideally, you can attach JProfiler to a running server.

0. It can be time consuming to create load scripts that provide the coverage of code needed.
   So it is often useful to see running production servers.

0. Begin using JProfiler by using the "Profile at startup" mode.

0. Understand a programs's major dependencies.

0. Identify the biggest objects.

0. Identify the rate of memory use.

0. <strong>Instrument</strong> classes by having JProfiler retransform the program.

0. Run JProfile in <strong>offline mode</strong> to save snapshots
   when you need to analyze several JVMs running at the same time.
   Then have an <a target="_blank" href="http://resources.ej-technologies.com/jprofiler/help/doc/export/antExport.html">
   Ant program task to compare the snapshots</a>.


The difference run-time data areas are illustrated here:
![jvm architecture-650](https://cloud.githubusercontent.com/assets/14143059/19409987/e9e3f9ca-929d-11e6-96a4-4e070f209a2c.jpg)
From <a target="_blank" href="https://www.youtube.com/watch?v=ZBJ0u9MaKtM">
Java8 virtual machine architecture</a> by Ranjith ramachandran

   * To manage the Method Area holding classes defined in source code,<br />
   use Memory Profiling

   NOTE: In Java8, <strong>metaspace</strong> 
   setting takes the place of the MaxPermSize parameter
   that specifies space of the method area holding classes.

   * To manage the "thrashing" of PC (Program Counters) pointing to 
   the next instruction to be executed in each thread,<br />
   use CPU profiling.

   * To manage the Java Stacks containing stack frames for each chain of <strong>methods</strong> in each thread
   "Stack Overflow" errors refer to this area,<br />
   use Thread Profiling.

   * Native Method Stacks per thread

   * To manage the Heap holding objects instantiated for use in JVM (garbage collected),<br />
   use the Heap Walker.




### ReTransform to Instrument Code #


### Other Sample Programs #

http://www.javamonamour.org/2014/01/how-to-demo-garbage-collection-jconsole.html
discussed in
https://www.youtube.com/watch?v=Bjv_9pKiALQ


### JProfiler Social Media #

The company behind JProfile, ej-technologies, is 
<a target="_blank" href="http://www.ej-technologies.com/company/profile.html">
based in Munich, Germany</a>.

There has been 
<a target="_blank" href="https://twitter.com/Jprofiler/">
no activity on the @JProfiler Twitter account</a>.

There is no JProfiler group on LinkedIn, Facebook, etc.


<a name="JavaMissionControl"></a>

## JMC (Java Mission Control) #

<a target="_blank" href="http://www.oracle.com/technetwork/java/javaseproducts/mission-control/java-mission-control-1998576.html">
Java Mission Control</a>
monitors the JVM in real-time.

Java Mission Control requires a commercial license for use in production. 

JMC has an Experimental Plug-in for Eclipse.

   PROTIP: JMC comes bundled with the HotSpot JVM
   since Oracle JDK 7 Update 40 (7u40).
   So in a Terminal:

0. Use the abbreviation for Java Mission Control to load it:

   <tt><strong>
   jmc
   </strong></tt>

   A welcome screen titled "Mission Control 5.5" appears.

   <a target="_blank" href="https://docs.oracle.com/javacomponents/jmc-5-5/jmc-user-guide/jmc.htm#JMCCI117">
   Java Mission Control User's Guide 5.5</a>

0. Optional: Click the "A" at the upper-right corner to change font size.


0. Click the program icon

   A JMX console appears.

0. Open another terminal window to bring up the app under observation:

   <pre>
   java -XX:+UnlockCommercialFeatures -XX:+FlightRecorder LoadAndDeadlock
   </pre>

   NOTE: Although Oracle has built in the recording engine into the JVM run-time, 
   it needs to be enabled in JVM start-up switches.

https://docs.oracle.com/javacomponents/index.html

Oracle also provides optional tools for heap dump analysis and DTrace recording.

Java SE Suite provides Deterministic GC.

<a name="YourKit"></a>

## YourKit #

<a target="_blank" href="https://www.yourkit.com/">
YourKit</a>
from Germany
has profilers for both JVM and .NET.

0. Download from https://www.yourkit.com/java/profiler/download/

0. In https://www.yourkit.com/purchase/
   license is $649 with a year of support.


<a name="Censum"></a>

## Censum

<a target="_blank" href="https://www.jclarity.com/index.php">Censum from JClarity.com</a> (by Martijn Verburg based in London) 
is available as both a local VM log reader (for $749/year) and as a SaaS web app.

* <a target="_blank" href="https://groups.google.com/a/jclarity.com/forum/#!forum/friends/join">
Friends of jClarity mailing list / forum!</a>

https://blog.codecentric.de/en/2017/09/jvm-fire-using-flame-graphs-analyse-performance/


CTO/CEO <a target="_blank" href="http://martijnverburg.blogspot.com/">Martijn Verburg</a> (<a target="_blank" href="https://twitter.com/karianna">@karianna</a>) speaks at <a target="_blank" href="https://www.youtube.com/watch?v=bjp7bhzyhQo&feature=share&list=PLRsbF2sD7JVq8QYW0vlbOS2JuXUWaWMnT&index=30">VIDEO: The Diabolical Developer's Guide to Performance Tuning</a>  introduces the Performance Diagnostic Methodology (PDM).


## Tapiki #

<a target="_blank" href="http://www.takipi.com/">
Takipi</a> is focused on Scala performance tuning.
It is the only tool I know of that shows numbers associated with Scala code.
It's free up to 2 servers for Scala.


## What to Look For #

https://shipilev.net/blog/2016/close-encounters-of-jmm-kind/

As a comparison, take a look at the
<a target="_blank" href="https://visualstudiomagazine.com/articles/2015/12/01/xamarin-apps.aspx">
profiler in Visual Studio for C# Xamarin code</a>.


## Wait, there's more. Click one of these ... #

This article is one of a series about tuning and performance:

{% include tuning_links.html %}
