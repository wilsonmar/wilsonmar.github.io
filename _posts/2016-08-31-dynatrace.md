---
layout: post
date: "2025-05-06"
lastchange: "v017 + pricing :dynatrace.md"
file: "dynatrace"
url: "https://wilsonmar.github.io/dynatrace"
title: "Dynatrace (APM)"
excerpt: "He sees you when you're sleeping. He knows when you're awake ..."
tags: [Clouds, Monitoring, Analytics]
image:
# ![dynatrace-per-minute-1900x500-162499.jpg
  feature: https://user-images.githubusercontent.com/300046/41830955-5de633b6-7801-11e8-9f92-c052dd9c2eba.jpg
  credit: Dynatrace
  creditlink: https://dynatrace.com
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="{{ page.url }}"><img align="right" width="100" height="100" alt="{{ page.file }}.png" src="https://github.com/wilsonmar/wilsonmar.github.io/blob/master/images/qrcodes/{{ page.file }}.png?raw=true" />
This describes a) automation script installed from GitHub that installs b) Docker images c) within AWS EC2, Azure, and Google Cloud d) a sample app e) put under stress by JMeter/Gatling while being analyzed by f) Dynatrace.

STATUS: IN PROGRESS

What's different with this introduction to Dynatrace is I provide a 
step-by-logical-step hands-on approach to dive deep into the technology and its vendor.
This is so you're not stumbling around wasting time on high-level sales pitches.
Commentaries here are given "just-in-time" after you do each step.

## Competitors

* Datadog is priced higher at scale, but offers a wide range of integrations and features
* AppDynamics
* New Relic provides lower entry costs
* Splunk

## Pricing

15-day free trial available directly.

30-day free trial available via Azure Marketplace.

The first thing you need to know about Dynatrace is that many users are shocked when asked to commit to a minimum annual spend, often starting around $20,000 per year (or about $2,000/month), regardless of actual usage. Spending above the minimum invokes hefty fines. This minimum is not always clear up front after initial sales conversations.

Per-host rates are available after meeting the minimum annual spend on key components:

* Full-Stack Monitoring: Starts at $69/month (billed annually) per 8 GB host. Usage-based rate is $0.08/hour for an 8 GiB host.

* Infrastructure Monitoring: Starts at $21/month per 8 GB host, or $0.04/hour for any size host.

* Kubernetes Monitoring: $0.002/hour per pod.

* Real User Monitoring: $0.00225 per session.

* Application Security: $0.018/hour for an 8 GiB host.

* Synthetic Monitoring: $0.001 per synthetic request.

* Log Management: $0.0007 per GiB per day for storage, $0.0035 per GiB scanned for queries.


## Acronyms used here

   ADK = Application Development Kit

   APM = Application Performance Monitoring (the market Dynatrace is in)

   AppMon = Application Performance

   SLA = Service Level Agreements

   Visit = a group of transactions performed by the same user over a defined time period.

   UEM = User Experience Management (product offering)

PureModel = PurePath + PureStack

   * PurePath traces requests horizontally across processes end-to-end tracing at the code-level
   * PureStack dives into the vertical infrastructure tiers

Quizlet Flash Cards:
* <a target="_blank" href="https://quizlet.com/1040880897/dynatrace-become-a-jedi-master-updated-april-2022-flash-cards/?i=187vf&x=1jqt">1637 item Dynatrace Quizlet</a>
* <a target="_blank" href="https://quizlet.com/1040880672/dynatrace-associate-cert-flash-cards/?i=187vf&x=1qqt">322 item Dynatrace cert</a> created by varunr961.


## Mind Map

Dyntrace offers <a target="_blank" href="https://d3sj466wqlrld0.cloudfront.net/certificate/docs/dtu_dynatrace_professional_certification_mindmap_031618.pdf"> this "MindMap" PDF</a> of the subject matter tested by their Professional-level certification (there is also a <a target="_blank" href="https://d3sj466wqlrld0.cloudfront.net/certificate/docs/dtu_dynatrace_associate_certification_mindmap_031618.pdf">less comprehensive one</a> for the Associate level exam).

<a target="_blank" href="dynatrace-mindmap-pro-1057x714" href="https://user-images.githubusercontent.com/300046/41882532-abec6b0c-78a6-11e8-8a90-7063f741c7e0.jpg"><img alt="dynatrace-mindmap-pro-1057x714.jpg" width="1057" src="https://user-images.githubusercontent.com/300046/41882532-abec6b0c-78a6-11e8-8a90-7063f741c7e0.jpg"></a>

The major "arteries" are the types of monitoring:

   * Real User Monitoring (RUM)
   * Application Monitoring
      * Availability Monitoring
   * Infrastructure Monitoring
   * Network Monitoring
   * Additional components
      <br /><br />

   * Dynatrace Managed (server & monitoring setup)
   * System Settings (Global, Entity, Account)
   * Integration and API
   * Problems

## Product Offerings

   Dynatrace AppMon Personal & UEM ???

Two Dynatrace products have downloads:

* Application Monitoring rich client AppMon
* Data Center RUM (Real User Monitor) captures traffic and analyzes it

SaaS = Software as a Service:

* Application Monitoring Appmon web
* Synthetic Monitoring has fake users logging in, etc.
* Dynatrace adds HTTP header
* Keynote monitors what end-users experience through the public network
* Dynatrace Load
* Business Service Management

## Product Editions

There are different editions of Dynatrace for the Development Team, Test Center, and Production:

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/23922979/11b6313a-08db-11e7-9376-a6627907b058.png">
<img alt="dynatrace across lifecycle 898x527.jpg" width="898" src="https://cloud.githubusercontent.com/assets/300046/23922979/11b6313a-08db-11e7-9376-a6627907b058.png">(Click to pop up larger image)</a>

The product that enables "Shift-Left" is one that enables identification of performance issues
during development.

## Competitors

* Splunk has been around the longest to process logs
* AppDynamics, built on top of the open-source Lucene engine for search
* ElasticSearch (Elastic stack)
* DataDog
* Logz.io
* etc.
<br /><br />

Notes:
* http://blog.takipi.com/splunk-vs-elk-the-log-management-tools-decision-making-guide/
* Dynatrace does not directly compete with OverOps, which analyzes Java and .NET source code.


<a name="Dashboards"></a>

## Dashboards

The bottom line with APM is its dashboards, which display data collected in clever ways.
The Dynatrace dashboard for User Experience and Satisfaction presents a lot of data, but in a clean and clear way:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/51681903-06ca3400-1fb4-11e9-98fc-5391107479c1.jpg"><img alt="dynatrace-user-sat-944x388.jpg" src="https://user-images.githubusercontent.com/300046/51681903-06ca3400-1fb4-11e9-98fc-5391107479c1.jpg"></a>

Circles around around face icons represent relative percentages. Green is good. Red is bad.

Competitors' dashboards would present a world map in one pane, response time in another, etc.

Metrics displayed can focus on specific periods of time:

![dynatrace-time-periods](https://user-images.githubusercontent.com/300046/51729692-be0d8c00-2042-11e9-84c5-78232c0affe2.png)

Visualizations of metrics on response time, failures rate, HTTP errors, CPU, Throughput, Network traffic, Retransmissions, Connectivity, etc. 
are <strong>automatically baselined</strong> as the basis for detecting anomalies.

   * memory leaks
   * CPU hotspots
   * n+1 problem - when client makes many more API calls to server.
   * SQL statements - Too many, slow.
   <br /><br />

Dynatrace is following the industry trend of moving to the cloud:
![dynatrace-cloud-aws-653x397](https://user-images.githubusercontent.com/300046/51728714-32463080-203f-11e9-92ae-ee60703209c7.png)

See <a target="_blank" href="https://github.com/Dynatrace/AWSMonitoringTutorials/">https://github.com/Dynatrace/AWSMonitoringTutorials</a>

## OneAgent for whole stack

<img width="727" alt="dynatrace tech analyzed 1454x510" src="https://cloud.githubusercontent.com/assets/300046/23992099/165b6448-0a12-11e7-8a66-67cd9b865497.png">

Dynatrace collects data from servers through an installed agent program,
called "OneAgent" because one program collects data for all aspects in the stack:

* Applications
* Services
* Processes
* Hosts
* Containers
* Data centers
<br /><br />

A map of all entitities are shown together in the "Smartscape" view.

All this enables Dynatrace to recognize when changes have occured, and take appropriate action.

## Full-stack discovery

Tracing is in the "Dynatrace" name and Dynatrace has continued innovation in providing end-to-end tracing of transactions through the technical stack.
When a token is added in the HTTP header at the client, Dynatrace tracks it through the web server and database.

So Dynatrace is able to display where response time contribution within application transactions:
![dynatrace-time-contrib-826x296](https://user-images.githubusercontent.com/300046/51728911-ed6ec980-203f-11e9-88f8-5a2bebe0911f.png)

The transaction names above are from Dynatrace's own sample "Easy Travel" (monolithic app)
instantiated within AWS using Beanstalk, ECS container services
and Sprint Boot app<a target="_blank" href="https://github.com/grabnerandi/SpringBootBookstoreWithProblems">*</a>
   

In recent years, Dynatace added AI-powered Analytics to discover <strong>root cause</strong>
and full stack resource discovery has led to self-healing at scale. See:
* https://help.dynatrace.com/intelligent-problem-detection/<br />
* https://help.dynatrace.com/intelligent-problem-detection/prediction/prediction/

Traditionally, products such as Splunk analyzed logs emitted from servers.
Dynatrace does that too.


## Provisioning

Docker, VMWare, EC2, Azure, CloudFoundry

Scripts: Chef, Puppet, Ansible, PowerShell

Overprovisioned?


## Free lifetime local license

During the 30-day free trial period, install up to 5 distributed servers (in the cloud).

After the 30-day trial period, install only on local machines.

The following focusing on analysis of server applications running <strong>locally</strong> on your laptop.

   QUESTION: Is there a package to Homebrew for Mac and Chocolatey for Windows?

0. Register for download at:

   <a target="_blank" href="https://bit.ly/dtpersonal">
   https://bit.ly/dtpersonal</a> (https://www.dynatrace.com/en/products/dynatrace-personal-license.html)

   PROTIP: My Gmail address was accepted in the "Business email" field.

0. Confirm email subject "Please confirm your Dynatrace Trial account".

   NOTE: The public face of Dynatrace is Andreas Grabner (<a target="_blank" href="https://twitter.com/@grabnerandi">@grabnerandi</a>, 
   agrabner@dynatrace.com,
   <a target="_blank" href="https://github.com/grabnerandi/">
   https://github.com/grabnerandi</a>

   The US address of Dynatrace is 404 Wyman Street, Suite 500, Waltham, MA 02451

   Dynatrace also has offices in Detroit, Michigan, Linz, Austria, and Gdańsk, Poland.

0. Click Register and Start Trial.

   WARNING: You can't get back to this page again?

0. Get the license from email "Your Dynatrace trial license" file such as this, created on 2017 March 16:

   dynaTrace_license_201703161023.key

   PROTIP: <strong>Each agent installer is pre-configured to where the agent sends its information.</strong>
   
   NOTE: The video mentioned in the email (https://www.youtube.com/watch?v=2ycuNlYUl9E) 
   What is Dynatrace AppMon and How to Get Started – January 2016

0. PROTIP: Run a Dockerized image in a server (in a cloud) because that's how production will work.
   And it won't muck up your local machine's settings and disk space.

   <a target="_blank" href="http://dynatrace.github.io/Dynatrace-Docker/">
   http://dynatrace.github.io/Dynatrace-Docker</a>

   https://github.com/Dynatrace/Dynatrace-Docker

   NOTE: The Github home for Dynatrace is:

   <a target="_blank" href="https://github.com/dynaTrace/">
   https://github.com/dynaTrace</a>

0. If you want to do it the hard way and install locally, 
   click the operating system icon to download installer.

   | OS | File | Ver. | Size |
   | -- | ---- | ---: | ---: |
   | Mac | dynatrace-full-darwin-x86.jar | 6.5 | 995.8 MB |
   | Windows | dynatrace- | 6.5 | 995.8 MB |

   PROTIP: If you want to keep installers, find out the version and add it to the file name.
   You would need to keep installers for vetting by corporate Security.

   Security-conscious enterprises have their people download from
   a vetted repository such as an internal Artifactory or Nexus rather than direct download
   because changes by the vendor (or someone pretending to be them) can have security problems.

0. Use Mac Archiver utility to extract the jar file to file dynatrace-full-darwin-x86.jar.cpgz.
0. dynatrace-full-darwin-x86.jar.cpgz.


<hr />

## Get Certified

   <a target="_blank" href="https://university.dynatrace.com/certificate/industry">
   https://university.dynatrace.com/certificate/industry</a><br />
   Dynatrace Certification website lists a learning path.

   The "Industry Associate" level validates understanding of APM was retired April 1, 2018.

   The exam is done on your desktop computer, not at a testing center.

1. Enter your profile info (time zone, phone, picture ID, etc.) at 
   https://prod.examity.com/Dynatrace/Student/MyProfile.aspx
1. Write down your answers to security questions.
1. Do a computer check at https://prod.examity.com/systemcheck/ComputerReadinessCheck.aspx
1. Get a promotion code if that is part of your organization's deal with Dynatrace.
   Or get a code by paying $200 at ?
1. Schedule exam at https://prod.examity.com/dynatrace/Student/ScheduleAnExam.aspx
   Sechedule can be next day.

   The <a target="_blank" href="https://d3sj466wqlrld0.cloudfront.net/certificate/docs/du_certificate_industry_associate_blueprint.pdf">
   DOWNLOAD: Associate Exam Blueprint.pdf</a>
   Answer 80% correct 70 multiple choice items in 2 hours.
   It's free. 

   The Pro written exam is $200 plus $250 for the practical exam.

   <a target="_blank" href="https://university.dynatrace.com/certificate/appmon">
   AppMon</a>

   <a target="_blank" href="https://university.dynatrace.com/certificate/dcrum">
   DC RUM</a>
   
   <a target="_blank" href="https://university.dynatrace.com/certificate/synthetic">
   Synthetic</a>

   Master-level.

<hr />

### API "FireAndIce"

See http://anapioficeandfire.com/Documentation#library-graphql

https://www.youtube.com/watch?v=O0SQL8DJxaI
Online Perf Clinic – Shift-Left Performance with Spring Boot Microservices, Jenkins and Dynatrace


For infrastructure monitoring:

Use the "Add Tier" wizard.

On Apache, IIS: <tt>-agentpath:PATH/dtagent.dll=name=MyAppTier,server=collector1</tt>

## Desktop

0. Use within IntelliJ IDE

   Without changing a line of code get 100% end-to-end code-level performance visibility: Browser, Web-, App- and (No)SQL Activity

   See every SQL Statement, Exception, Log message and HTTP Request detail

<hr />


## Crash Dump Analysis

https://github.com/Dynatrace/superdump
(Not A replacement for in-depth analysis tools such as WinDbg.)

can be triggered via web-frontend (HTTP-upload) or via REST-API.

## ADK

To send dynatrace tags

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10862">
   Native Applications and Custom Protocols with Dynatrace AppMon ADK</a>
   recorded November 9, 2016.


## Data management

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/21023">
   What is a Purelytics</a> [2:51] for custom analytics on ELK stack

   ![dynatrace prelytics stream elk 674x144](https://cloud.githubusercontent.com/assets/300046/23945288/569cc356-094c-11e7-9329-b7f79dbbe2c4.jpg)

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10855">
   PureLytics Stream and UEM Heatmap</a> [59]

   https://github.com/Dynatrace/Dynatrace-Elasticsearch-Plugin
   plugin for AppMon to fetch measures from an Elasticsearch Cluster 

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10210">
   Configuring the Performance Warehouse</a> database

* https://help.dynatrace.com/api-documentation/v1/timeseries/

To view data in ES within Splunk:

   * https://github.com/hvandenb/splunk-elasticsearch
   * https://answers.splunk.com/answers/372999/is-there-anyway-to-push-data-from-elasticsearch-or.html

<hr />

## Videos

YouTube playlists:

   * Classic AppMon: http://bit.ly/dttutorials

   * Dynatrace Fullstack: http://bit.ly/oneagenttutorials

Dynatrace University Self-Learning portal at http://university.dynatrace.com 


https://www.youtube.com/watch?v=wExU-AQ0ydk&index=1&list=PLqt2rd0eew1bmDn54E2_M2uvbhm_WxY_6

* https://www.youtube.com/watch?v=O0SQL8DJxaI

http://bit.ly/dttutorials (https://www.youtube.com/playlist?list=PLqt2rd0eew1bmDn54E2_M2uvbhm_WxY_6)

Mainly high-level stuff with a few technical points:

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10858">
   What is Application Monitoring</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/21001">
   Selecting a Dynatrace Edition</a> [3:17] Docker containers
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/20999">
   Distributing licenses</a>

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10206">
   Reviewing the Architecture</a>
   the Application Monitoring Platform, PureModel, and PureStack.
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10872">
   Exploring Agent Development Kits</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/21027">
   Interacting with Data</a>

*  Exploring Core Technologies</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10875">
   What is a PureStack</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10865">
   What is a Pure Path</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10863">
   What is UEM</a> (User Experience Monitoring) agents traps user actions for Dynatrace Collector servers to store and evaluate.
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10207">
   Understanding Components</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10893">
   Understanding Dashboards</a>

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10891">
   Exploring the Web Interface</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10890">
   Exploring the Rich Webstart Client</a>

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/21026">
   Planning the Deployment</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10209">
   Installing Application Monitoring on Windows</a> [9:51] v6.1.0 admin / admin
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10208">
   Installing Application Monitoring on Unix</a>

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10211">
   Deploying Dynatrace Collectors</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10212">
   Deploying and Sizing Document</a>

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10857">
   Managing Sensors</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10860">
   Managing Dynatrace Servers</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10856">
   Managing Collectors</a>

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10873">
   Managing System Profiles</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10870">
   Working with Support - Part 2</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10866">
   Managing Licenses</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10864">
   Managing the Performance Warehouse</a>

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10861">
   Managing Memory Analysis</a>
* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10876">
   Integrating with Data Center Real User Monitoring</a>

* <a target="_blank" href="https://university.dynatrace.com/discover/appmon/10859">
   Managing On Premises SaaS</a>

<hr />


## In AWS #

You can use Dynatrace in place of or in addition to Amazon CloudWatch logging.
Here are the steps:

0. Download the installer from Dynatrace.com.

   BLAH: I wish Dynatrace have its own on S3.

   This can be either/both a Windows or Linux instance.

0. Put the Dynatrace installer in an S3 instance
   so that Ansible scripts to build up a server have a stable reference.

0. Create a new AWS instance.

   Again, this can be either a Windows or Linux instance.

0. Install the Dynatrace agent on the server.

0. Connect the agents to the Dynatrace controller so you see metrics being recorded.

0. Impose some artificial load on the machine to see metrics in their full glory.

0. Repeat the above in an automated script:

   0. Jankins invoked when a commit occurs to a branch on GitHub
   0. The Jenkins v2 Pipeline Groovy script downloads build script from GitHub
   0. The build downloads installers to assemble
   0. The build script creates image in DockerHub
   0. Instantiate AWS with Docker image
   0. Sends an email when the image is ready for use
   0. Start a performance testing run
   0. Sends SMS texts with the results of test run
   0. If all is well, commits into the next branch in GitHub

<hr />

## Internals

Protocol is protobuf

   https://community.dynatrace.com/community/display/DOCDT65/Test+Automation+Explained

   https://www.infoq.com/articles/Diagnose-Microservice-Performance-Anti-Patterns

   https://www.infoq.com/articles/Diagnosing-Common-Java-Database-Performance-Hotspots


## Interact with people

0. Forums:

   <a target="_blank" href="https://community.dynatrace.com/community/display/DL/Downloads/">
   https://community.dynatrace.com/community/display/DL/Downloads</a>

0. Listen to podcasts:

   <a target="_blank" href="https://www.spreaker.com/show/pureformance/">
   https://www.spreaker.com/show/pureformance</a>

0. Ask a question of pre-sales:

   <a target="_blank" href="https://answers.dynatrace.com/">
   https://answers.dynatrace.com</a>

0. Register and attend <strong>live webinars</strong> at:

   <a target="_blank" href="https://bit.ly/onlineperfclinic">
   https://bit.ly/onlineperfclinic</a>
   (https://community.dynatrace.com/community/pages/viewpage.action?pageId=178101202)
   also on YouTube.

0. View past webinars

   <a target="_blank" href="https://www.youtube.com/watch?v=eYzl1PTGS7Y&index=24&list=PLqt2rd0eew1bmDn54E2_M2uvbhm_WxY_6">
   On YouTube</a>

0. Ways to meet other users:

   <a target="_blank" href="https://community.compuwareapm.com/community/display/PUB/Events/">
   https://community.dynatrace.com/community/display/DL/Downloads</a>

0. Join and attend Meetups:

   <a target="_blank" href="https://www.meetup.com/pro/dynatrace/">
   https://www.meetup.com/pro/dynatrace</a>

0. Subscribe, then meet people at the <strong>annual conference</strong> each Feburary in Vegas:

   <a target="_blank" href="https://www.dynatrace.com/perform/">
   https://www.dynatrace.com/perform</a><br />

0. Have Dynatrace salespeople look at your Purepath file:

   <a target="_blank" href="https://bit.ly/sharepurepath">
   https://bit.ly/sharepurepath</a>
   (https://community.dynatrace.com/community/display/EVAL/Share+your+PurePath)

   CAUTION: Many enterprises are fearful of releasing data outside the corporate firewall.
   Check with your Security people before sending the file out.

0. LinkedIn Groups

   <a target="_blank" href="https://www.linkedin.com/groups/1868499/profile">
   https://www.linkedin.com/groups/1868499/profile<br />
   Dynatrace APM User Group</a>

0. Twitter

   * <a target="_blank" href="https://twitter.com/Dynatrace">
   @Dynatrace</a>
   * <a target="_blank" href="https://twitter.com/grabnerandi">
   @grabnerandi</a> (Andreas Grabner, Developer Evangelist)
   * #perform2019 
   * #dynatracer 
   * #apm

0. GitHub source repositories:

   <a target="_blank" href="https://github.com/dynatrace-innovationlab/">
   https://github.com/dynatrace-innovationlab</a>

   <a target="_blank" href="https://github.com/Dynatrace/Dynatrace-Docker">
   https://github.com/Dynatrace/Dynatrace-Docker</a>

   <a target="_blank" href="https://github.com/grabnerandi/">
   https://github.com/grabnerandi</a>


## Video Tutorials

By Georgi I.
* https://www.udemy.com/course/dynatrace-learning-tutorial/?couponCode=ST6MT60525G3
$13.99 "Dynatrace Masterclass - The Complete Guide for Beginners"</a>
Learn all Dynatrace functionality with this step by step introduction course covering the 2025 latest 

* https://www.udemy.com/course/dynatrace-associate-certification-exam-practice/
Dynatrace Associate Certification Exam - Unofficial Practice
$13.99

* https://www.udemy.com/course/google-cloud-data-practitioner-associate-practice-tests/
Google Cloud Data Practitioner Associate - 5 Practice Tests

By Max Migutin
* https://www.udemy.com/course/dynatrace/?couponCode=ST6MT60525G3
$19.99 "Learn Dynatrace: Beginner to Advanced"</a> Hands-on bootcamp of Dynatrace. Theory + 7 Practice projects to learn different Dynatrace Apps. AWS and GCP integrations. 



## More on cloud #

This is one of a series on cloud computing:

{% include cloud_links.html %}
