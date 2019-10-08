---
layout: post
title: ".NET profiling"
excerpt: "Here's how to use Redgate ANTS to make C# really sing on NerdDinner"
tags: [perftest]
date: "2017-03-30"
file: "dotnet-profiling"
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article currently contains notes on using the ANTS profiler for Visual Studio on Windows.

NOTE: Java programmers: please refer to my JVM Profilers page.


## Editions and Installers

Red-gate.com has 3 different products for developers, with separate licenses.

There are different pages for each product:

PROTIP: But all <a target="_blank" href="https://www.red-gate.com/dynamic/products/dotnet-development/ants-performance-profiler/download">download pages download</a> the same file:

   DotNETDeveloperBundle.exe, 78.7 MB

   NOTE: Many enterprises require you to instead see your system administrator rather than downloading yourself.

14 days trial.


## Resources

* http://documentation.red-gate.com/display/APP7/Worked+example+-+Profiling+an+ASP.NET+application+-+NerdDinner

* http://documentation.red-gate.com/display/APP7/Setting+up+and+running+a+profiling+session

* http://documentation.red-gate.com/display/APP7/Working+with+profiling+results

Ben Emmett (@bcemmett) is Regate's .NET Tools Product Manager (as of 2012).


## Configure license

After installation of the app and sample server:

0. Invoke ANTS Profiler from within Visual Studio:

   ![ants vs menu 387x194](https://cloud.githubusercontent.com/assets/300046/24487511/073e2582-14de-11e7-9c01-3e2a6265285c.png)

0. Set Profiler Settings

   ![ants 7 4 profiler settings 1078x810](https://cloud.githubusercontent.com/assets/300046/24487585/ac8ec7ee-14de-11e7-9b76-5cf7cb04dc29.png)

0. Click Start Profiling.

...

0. Click "Stop profiling".


## Sample C# Code

### Nerd Diner Sample App

<a target="_blank" href="http://nerddinner.com/">
http://nerddinner.com</a> 
presents a sample .NET MVC app.

The app enables registered users to create, edit, and delete dinners.

The app was written in 2009
by Scott Hanselman, Scott Guthrie, and others at Microsoft.

The app was built to be run locally because its source code is available at<br />
<a target="_blank" href="http://nerddinner.codeplex.com/">
http://nerddinner.codeplex.com</a>
(http://tinyurl.com/aspnetmvc).
The website describes new features added on August 2011 along with updates for ASP.NET MVC 3.

PROTIP: Use Git to clone the more recent (2016) MVC 5 version on GitHub:

   <a target="_blank" href="https://github.com/aspnet/NerdDinner">
   https://github.com/aspnet/NerdDinner</a>

However, other sites have not been updated:

   * http://www.jprl.com/Blog/archive/development/mono/2009/May-14.html
   Linq to SQL on Mono Update: NerdDinner on Mono - Jonathan Pryor's web log

   * https://blogs.msdn.microsoft.com/jimoneil/2009/07/27/nerddinner-on-azure-take-2/

The original app version and its source is describe in a
<a target="_blank" href="http://content.wrox.com/wroxfiles/aspnetmvc-nerdinner_v2.pdf">
free chapter 1 (185 pages)</a> from 
<a target="_blank" href="http://www.wrox.com/WileyCDA/Section/id-321793.html">
the O'Reilly book Professional ASP.NET MVC 2.0</a>.



## High Level Overview Videos

<a target="_blank" href="https://www.youtube.com/watch?v=67m5jwoNkfo">
Memory Leakage as Fast As Possible [4:59] 16 Jun 2015</a>
by Techquickie
shows a lot of fun meme photos for computer users (not developers).

<a target="_blank" href="https://www.youtube.com/watch?v=hSDAJNCVhjs&t=49s">
Memory Leaks Explained [10:22] 6 Jan 2015</a>
by lcc0612


### Heap vs. Stack in .Net C#

<a target="_blank" href="https://www.youtube.com/watch?v=clOUdVDDzIM">
.NET Stack and Heap [13:05] 26 Jun 2012</a>
by Wallace Kelly
clearly shows C# code and how it stores and moves data in memory.

   Memory contains separate stack and heap areas.

   <strong>Heap</strong> contain <strong>class</strong> instances.

   <strong>Stack</strong> contains <strong>local variables</strong>.

<a target="_blank" href="https://www.youtube.com/watch?v=Xh28hgrlz8k">
.NET Stack vs Heap</a>
by Gregor Dzierzon


### C# Garbage Collection Concepts

https://www.youtube.com/watch?v=-JOkkn1ET8c
C# Garbage Collection
by Jamie King

https://www.youtube.com/watch?v=cV8YJqc37ww
How C# garbage collection works | lynda.com tutorial
by LinkedIn Learning Solutions




## ANTS


### Snapshots

0. Collect baseline snapshot

   ANTS automatically collects and compares snapshots

0. Filter

   [6:54] "I'm not going to do what most people do, which is to try to immediately filter out everything that is not their own code"

0. Look at the one with the largest growth.

0. Look at the Class List.

0. For Task Manager, press Ctrl + Shift + Esc 

0. Uncheck "Hide finalizer queue GC roots"

0. Force a Garbage Collection to clear finalizer queue.

   indrectly

   .tmp temporary files in C:\Documents and Settings\...\Local Settings\Temp\Red Gate



<a target="_blank" href="https://www.youtube.com/watch?v=8mhC-Ji6-uU">
ANTS Performance Profiler overview [1:55] 27 Nov 2014</a>
by Redgate

<a target="_blank" href="https://www.youtube.com/watch?v=-z5Fr-uWFC0">
Profiling an ASP.NET Application [3:59] 10 May 2013</a>
by Redgate Videos
shows a Windows 10 machine working with the NerdDinner sample app.

<a target="_blank" title="profiler ants8 profiling mode 1194x932" href="https://cloud.githubusercontent.com/assets/300046/24486125/6e43a430-14d6-11e7-9c29-580a9b7286bd.png">
<img alt="profiler ants8 profiling mode 1194x932" src="https://cloud.githubusercontent.com/assets/300046/24486125/6e43a430-14d6-11e7-9c29-580a9b7286bd.png"><br />(Click to pop-up full-sized image)</a>


<a target="_blank" href="https://www.youtube.com/watch?v=gvQFLcxTnKg">
Practical Performance Profiling</a>
by Redgate Videos


<a target="_blank" href="https://www.youtube.com/watch?v=yZ8dC5nlhiY">
ANTS Memory Profiler 5: How to find a memory leak (1 of 2) [9:12] 15 May 2009</a>
by redgatedotnetteam 
uses QueryBee app.

   "Filtering too early "

<a target="_blank" href="https://www.youtube.com/watch?v=bcM6DoCVtSE">
ANTS Memory Profiler 5: How to find a memory leak (2 of 2) [8:55] 15 May 2009</a>
by redgatedotnetteam

   Expand node that shouldn't be there.

   Click "Show instances of this class on this path".

   Why two instances?

   See if "Size with Children" is large.

   Show object retention graph.

   ![profiler ants show 862x156](https://cloud.githubusercontent.com/assets/300046/24486732/8ccd8f1c-14d9-11e7-8706-ee825fe5809d.png)


   Take another snapshot


<a target="_blank" href="https://www.youtube.com/watch?v=qzEzQ8AoVbc">
ANTS Memory Profiler 5: Filters [5:54] 21 May 2009</a>


https://www.youtube.com/watch?v=y0OZd_JxBrs
ANTS Memory Profiler 5: Class Reference Explorer [6:45]
by redgatedotnetteam


https://www.youtube.com/watch?v=AaPaIVI-yyI
Improve SQL Server performance using profiler and tuning advisor
by .NET Interview Preparation videos



<a target="_blank" href="https://www.youtube.com/watch?v=JA2zL4AJGbQ">
Memory profiling a real world application (Part 1) [9:46] 29 Jun 2009</a>
by redgatedotnetteam
featuring Alex Davies (developer of ANTS Memory Profiler 5)

<a target="_blank" href="https://www.youtube.com/watch?v=zl7K1F-A7UU">
Memory profiling a real world application (Part 2)</a>
by redgatedotnetteam


https://www.youtube.com/watch?v=FkzyvMlX7vw
Performance Tuning .NET & SQL Code using ANTS Profiler with Mitchel Sellers and Redgate
LIDNUG LinkedIn

<a target="_blank" href="https://www.youtube.com/watch?v=VUnHlrr2M3Y">
5 minute wonders: Finding lazy loading nasties with ANTS Profiler [4:58] 5 Feb 2013</a>
by Troy Hunt
looks at long-running SQL database calls.


<a target="_blank" href="https://www.youtube.com/watch?v=tP_9kWH814A">
5 Misconceptions about .NET Memory Management [52:21] 10 May 2013</a>
by Redgate Videos
featuring Clive Tong

   1. A garbage collector collects garbage.

   Most young objects die young.

   2. Doing lots of gen0 collections is bad.
   3. Performance counters are great for understanding what is happening.
   4. .NET doesn't leak memory.
   5. All objects are treated the same.

https://www.youtube.com/watch?v=BRyR5cv6VNg
ANTS Memory Profiler 8
by Redgate Videos

<a target="_blank" href="https://www.youtube.com/watch?v=fR7QND_htFU">
Investigating unmanaged memory with ANTS Memory Profiler [6:23]</a>
by Redgate Videos

<a target="_blank" href="https://www.youtube.com/watch?v=RFuP0H-DYvE&list=PLhFdCK734P8AfPwF2HxvcrlnbGv29sKyP&index=1">
Learning .NET Memory Management (8 VIDEOS)</a>
by Redgate Videos


https://www.youtube.com/watch?v=b0tiHyeotRU">
Using .NET Memory Profiler to investigate memory issues</a>
by FireflyMigration

https://www.youtube.com/watch?v=lU_YZtvslnI
Debugging Memory Leaks Using New NET Memory Diagnostic Tools [5:10]
by Microsoft Visual Studio

https://www.youtube.com/watch?v=Tr3vI-BcMdU
Finding memory Leaks in .Net Application
Ashish Goel

https://www.youtube.com/watch?v=k09bkM3_gsE&list=PLhFdCK734P8AfPwF2HxvcrlnbGv29sKyP
8 VIDEOS
Learning .NET Memory Management
Redgate Videos


## Visual Studio

https://www.youtube.com/watch?v=obU90802hEY
Overview of the Performance and Diagnostics Hub in Visual Studio 2013
Microsoft Visual Studio


https://www.youtube.com/watch?v=_e3satbnwHI
Using the Diagnostic Tools in Visual Studio 2015
John Koerner

https://www.youtube.com/watch?v=D_AS0KPL1ao
Part 8 of C# Tutorial (String, Garbage Collector and CLR Profiler) using Visual Studio
GuruWrites


https://www.youtube.com/watch?v=nuF-ToMzDIc
815 1100 Building and Using a Memory Profiler 01
Ricky, Ping-I Chou




## Alternatives

https://www.youtube.com/watch?v=g-YW2jkd-Ac
How to Use Debug Diagnostic Tool to track Memory leaks
Informatica Support

https://www.youtube.com/watch?v=FfpmLFfpSg4
Visual Studio 2010 Profiler compared to dottrace, aqtime, speedtrace pro, ants
Dirk8018



## Java

https://www.youtube.com/watch?v=we_enrM7TSY
Understanding Java Garbage Collection and what you can do about it
SpringDeveloper

https://www.youtube.com/watch?v=eu_kTGv61WQ
What is memory leak?
codebasics
665 views


https://www.youtube.com/watch?v=iFr1cvwhfbw
Memory Leak explained with example
Software and Testing Training
2,962 views

https://www.youtube.com/watch?v=FLcXf9pO27w
From Java Code to Java Heap: Understanding the Memory Usage of Your Application
Oracle Learning Library
109,559 views


https://www.youtube.com/watch?v=Dy7WZv5bEV4
Java Memory Leak Detection with JProfiler
RuthJ180
49,255 views

https://www.youtube.com/watch?v=8y5Gdd_ImgM
Memory Leaks in Java
Tech Gig
17,524 views


https://www.youtube.com/watch?v=f2aNWtt0QRo
How to Write Memory-Efficient Java Code
JavaOne
23,834 views

https://www.youtube.com/watch?v=5joejuE2rEM
JVM Heap Dump Analysis - OpenJPA memory leak
Pierre-Hugues Charbonneau
22,457 views


## Android Java

https://www.youtube.com/watch?v=h7qHsk1nWKI
Android Performance Patterns: Performance Cost of Memory Leaks
Google Developers
15,400 views


https://www.youtube.com/watch?v=YCC-CpTE2LU
"Introduction into Java Profiling" by Fabian Lange - Coding Serbia Conference
Coding Serbia Conference
15,263 views
