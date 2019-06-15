---
layout: post
title: "Robotic Process Automation (RPA)"
excerpt: "It does your job better and faster than you can imagine"
tags: [Mac, Robots]
shorturl: "https://goo.gl/ej6KDG"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

{% include _toc.html %}


RPA (Robotic Process Automation) programs mimic what human users do to help people do their job.
RPA is an "auto-pilot" to automate any repetitive, data intensive manual task. 

   * It can "screen scrap" to extract data from web pages.
   * It has a "macro recorder" to generate scripts which can be edited.
   <br /><br />

RPA programs are like Selenium, QTP, SmartBear, and other functional test tools,
so several previous test automation vendors offer RPA tools (each described below):

* <a href"#AA">Automation Anywhere</a>
* UIPath is an early entrant has become popular by offering an open-source Windows-based program.
* <a href="#LDTP">LDTP</a>
* <a target="_blank" href="http://www.blueprism.com/">Blue Prism</a> is built from the UK on the Microsoft .NET Framework. Its Control Room provides a centralized administration console for controlling, monitoring, executing and scheduling process execution on distributed robots.
* Microsoft's Flow is an online service for getting cloud apps (such as Office 365 and Outlook.com) to talk to each other, much like IFTTT.com.
* <a href="#Tricentis">Tricentis</a>
* Pegasystems
* Blue Prism
<hr />

Industry analyst Ovum in <a target="_blank" href="https://resources.automationanywhere.com/think">September 30, 2018 released their ranking of RPA vendors</a>:

<img width="413" alt="rpa-ovum-2018-413x340" src="https://user-images.githubusercontent.com/300046/59470543-365bca80-8df5-11e9-8e40-91335ec83bdb.png">


<a name="AA"></a>

## Automation Anywhere

<a target="_blank" href="https://www.automationanywhere.com/">automationanywhere.com</a> 
 claims to augmented with AI. "We deliver the world’s most sophisticated Digital Workforce Platform making work more human by automating business processes and liberating people. 
Their Community Edition is for known businesses."

AA has 3 <a target="_blank" href="https://resources.automationanywhere.com/watch/automation-anywhere-mobile-app-overview">mobile apps</a>:

   * Manage RPA on the Go to measure center of excellence ROI and digital workforce
   * Imagine
   * Impact

Their "IQ Bot" "learns from people how to handle unstructured and unclear data so processes can be automated from end-to-end" by automating content-centric processes. Their "Bot Insight" extracts data from Bot operation to provide analytics at the origin of data ("embedded analytics").


 <a name="LDTP"></a>

## LDTP

<a target="_blank" href="https://ldtp.freedesktop.org/wiki/">LDTP</a>
(Linux Desktop Testing Project) is a Cross Platform GUI Test Automation tool. 

It uses Accessibility libraries on each platform to poke through the application's user interface.
Most of LDTP ideas are implemented from the SAFS (Software Automation Framework Support) at http://safsdev.sourceforge.net/Default.htm 

The website for MacOS as ATOMac, http://pyatom.com/ is not operational
and the last update was 2016.

https://developer.apple.com/library/archive/navigation/
is no longer supported. See instead:
https://developer.apple.com/documentation

Begin from https://ldtp.freedesktop.org/ldtp-tutorial.pdf



<a name="Flow"></a>

## Microsoft Flow

https://flow.microsoft.com/en-us/

<a target="_blank" href="https://www.youtube.com/channel/UCG98S4lL7nwlN8dxSF322bA">Youtube video account</a>

https://docs.microsoft.com/en-us/flow/guided-learning/get-started
Guided Learning

Don't confuse RPA with the Microsoft Bot Framework.


## Blue Prism 

Blue Prism separated itself from BPM (Business Process Management).

The company focuses on secure software in regulated industries. 


## UIPath

1. Request their free "Community Edition":

   * https://www.uipath.com/community 
   <br /><br />
   Alternately, download the installer "UiPathStudioSetup.exe" from
   
   http://download.uipath.com/UiPathStudioSetup.exe

The program offers a UI like the Visio diagramming tool 
to design automation actions, without coding need by testing programs.

BOOK <a target="_blank" href="https://www.microsoft.com/en-us/p/learning-robotic-process-automation/fgqpf3gzr0vb">
Learning Robotic Process Automation</a>
2018 by Alok Mani Tripathi


<a name="Tricentis"></a>

## Tricentis 

Tricentis is leveraging its "model based testing" (Tosca) database to be repurposed for use in RPA.

<hr />


### Autonomic

An autonomic system is identified by eight characteristics:

1. Knows what resources it has access to, what its capabilities and limitations are and how and why it is connected to other systems.
0. Is able to configure and reconfigure itself depending on the changing computing environment.
0. Is able to optimize its performance to ensure the most efficient computing process.
0. Is able to work around encountered problems either by repairing itself or routing functions away from the trouble.
0. Is able to detect, identify and protect itself against various types of attacks to maintain overall system security and integrity.
0. Is able to adapt to its environment as it changes, interacting with neighboring systems and establishing communication protocols.
0. Relies on open standards and requires access to proprietary environments to achieve full performance.
0. Is able to anticipate the demand on its resources transparently to users.


### Machine Learning

Detection, correlation, and pattern recognition generated through machine based observation of human operation of software systems along with ongoing self-informing regression algorithms for machine based determination of successful operation leading to useful predictive capability.

### Cognitive Computing

Complex computational systems designed to:

1. Sense (perceive the world and collect data),
0. Comprehend (analyze and understand the information collected) and
0. Act (make informed decisions and provide guidance based on this analysis in an independent way)
0. Adapt (adapt capabilities based on experience) in ways comparable to the human brain.

### Programming

Programming skills are often required to design robots,


<hr />

## RPA Association

In 2013 Frank Casale created an association to increase his consulting services:

   http://irpaai.com/what-is-robotic-process-automation/

The association provides some definitions:

RPA (Robotic Process Automation) is the collective term for several technologies that are maturing in 2017:

   * Source control (Git, GitHub, etc.)
   * Configuration management (Ansible, Puppet, Chef, SALT)
   * Programming Languages (Java, .NET, Ruby, Python, Bash shell, PowerShell, etc.)
   * Cloud (AWS, Azure, etc.)
   * Monitoring systems
   * ITSM (ServiceNow, etc.)
