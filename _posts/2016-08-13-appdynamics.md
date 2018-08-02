---
layout: post
title: "AppDynamics"
excerpt: "He knows if you've been bad or good, so be good for goodness sake ..."
tags: [Clouds, Monitoring, Analytics]
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

[![Gitter](https://badges.gitter.im/wilsonmar/wilsonmar.github.io.svg)](https://gitter.im/wilsonmar/wilsonmar.github.io?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

{% include _toc.html %}

This is a hands-on narrated tour on how to learn AppDynamics to detect trouble.

<hr />

## Explore #

<strong>Agents</strong> are installed on each machine you wish to monitor.
AD claims "Up to 10,000 per controller"
at "less than 2% overhead".

   * <a target="_blank" href="https://community.appdynamics.com/t5/Tech-Webinars/Tuning-the-Controller/td-p/20463/jump-to/first-unread-message">
   Tuning the Controller</a>

They automatically discover servers (very cool, especially on Hadoop clusters).

The AppDynamics Controller can be either
<a target="_blank" href="https://docs.appdynamics.com/display/PRO42/Quick+Install">
installed on-premises</a>
or hosted on public cloud (SaaS option), which is what is used in
<a target="_blank" href="https://www.youtube.com/watch?v=HxPvIz68E2A">
self-service trials</a>.

   Controllers are configured by a <strong>controller-info.xml</strong> file.

It collects metrics reported by different types of agents:

* Stand-alone machine agents obtain Java Thread Pool and other JVM stats.

* End-User Monitor (EUM) absorb activity from listening to network traffic.

* Database Monitors extract from databases:

   Video webinar: <a target="_blank" href="https://community.appdynamics.com/t5/Tech-Webinars/Database-Monitoring-Part-I/m-p/21132#U21132">
   1</a> <a target="_blank" href="https://community.appdynamics.com/t5/Tech-Webinars/AppDynamics-Database-Monitoring-Part-II/m-p/21471#U21471">
   2</a>

<br /><br />

AD has a <a target="_blank" href="https://docs.appdynamics.com/display/PRO42/JVM+Crash+Guard">
Java Crash Guard</a>

Videos:

* <a target="_blank" href="https://www.youtube.com/watch?v=qO1M2-J4jYs">
   Intro to AppDynamics</a> by AD partner Emergent 360.
   24 Nov 2015.

* <a target="_blank" href="https://www.youtube.com/watch?v=yygbxv4lS7Y">
   Demo</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=bdom54w8_tw">
   Overview of Architecture</a>

<hr />

## Cool features. So What? #

There are several aspects that sales pitches don't cover,
but keep actual users up at night.

0. The Flow Map provides icons representing every server in each 
   <strong>tier</strong> (Web-Tier-Services, Database, etc.).
   Metrics obtained are classified compared to averages observed in the past.

   PROTIP: AD gathers a huge amount of information every hour.
   How many GB per day is that rate?
   
   PROTIP: There is a cost to keep data.
   Have a plan for how long to keep data on AD's servers,
   Many people save just the summary information for management reporting.
   
   PROTIP: Often we don't realize what analysis to do until later, and by then
   the historical data is gone.
   How much is longitudinal operational analysis is worth?
   This needs to be decision by management so they are not disappointed later.

0. AD exposes data via <a target="_blank" href="https://community.appdynamics.com/t5/Tech-Webinars/Advanced-REST-API-Scripting-Tech-Webinar/td-p/19687/jump-to/first-unread-message">REST APIs [webinar]</a>.

   PROTIP: REST APIs are rather granular.
   If a large amount of data needs to be extracted,
   a mechanism is needed to not overload the AD server
   by spreading out calls over time.

0. AD provides a way to create graphs dynamically.

   PROTIP: Consider dumping monitoring data for analysis using your organization's
   analytics product such as ElasticSearch, Tableau, etc.
   This would focus leverage of skills brough to this work,
   and (more importantly) make it easier and more likely for
   other statistics in the organization to be integrated,
   such as impact performance has on dollar sales, etc.

0. AD displays response time captured from every entry and exit point,
   down to specific page iframes.

   PROTIP: How does each page compare against metrics 
   predicted during performance testing?
   Identify surprises so you don't have to look at what you already know.

   PROTIP: Ultimately, organizations need to <strong>proactively predict</strong>
   rather than responding to alerts which occur.

   In my opinion, AD can do more than it is in this aspect.
   For example, project the <strong>trend</strong>
   of disk space usage to identify the urgency so 
   the appropriate notification method is used.

0. PROTIP: It helps to identify up front specifically who should be called 
   (and when) for specific alerts that can appear.
   
   PROTIP: Escalation specification is the specialty of PagerDuty software.

0. <strong>Browser</strong> distribution pie charts on Web App Dashboards 
   is based on what clients responds. Some networks strip that out, so watch out for
   "unknown". These stats can differ significantly versus Google Analytics if
   you also have that installed.

   PROTIP: Identify the percentage of browser distribution chart 
   associated with specific customer accounts so you can track their movement 
   from IE to modern browsers needed by React.js and other web apps.

0. <strong>Synthetic users</strong>
   are useful not just to identify issues during off-hours.

   * <a target="_blank" href="https://community.appdynamics.com/t5/Tech-Webinars/AppDynamics-Synthetic-Monitoring-4-2/m-p/21398#U21398">
   webinar 20 Apr 2016</a>

   PROTIP: Synthetic users ensure that programs don't page off memory and 
   cause delays (bad performance) for 
   the first user who gets on the system in the morning.

   <img align="right" alt="appd-actions-selections-2015-376x361-71kb.png" width="376" height="361" src="https://cloud.githubusercontent.com/assets/300046/18060867/89a6cd88-6ddd-11e6-8d4d-01362a711b95.png">
0. AD has <strong>Health Rules</strong> and policies that trigger actions.

   PROTIP: If the action is to send an email,
   someone is needed to constantly go through screens to notice problems.  
   This is a 3-shift job, with no breaks on weekends and holidays.
   So plan work schedules and training for this.
   Some use 12 hour workdays and office accross the globe for this reason.

   PROTIP: Use "Choas monkeys" to create havoc randomly, in production,
   to ensure that responses are adequate.

0. <a target="_blank" href="https://docs.appdynamics.com/display/PRO42/Remediation+Actions">
   Remediation scripts</a>
   to take action after problems.

   PROTIP: Has that script been tested in production?
   Many organizations don't have an enviornment to conduct such tests.

   PROTIP: If the response is to add more servers,
   how much free server capacity available?

0. When an issue is detected, the icon turns red and
   diagnostic snapshots are automatically captured.
   <a target="_blank" href="https://community.appdynamics.com/t5/Tech-Webinars/Snapshots-amp-Diagnostic-Sessions-Tech-Webinar/td-p/14363/jump-to/first-unread-message">
   [video]</a>

   PROTIP: If the server is already down, there is not much point
   (and wastes precious time) to take diagnostics dumps.

   PROTIP: There are utilities which help you analyze dumps
   from the operating system, which can be quite cryptic.

0. <strong>End-user Response-Time Distribution</strong> spikes on Web App Dashboards 
   identify the percentile of each spike.
   
   PROTIP: A spike on the 50th percentile is more troubling becuase of its consistency
   than one at 90th percentile or above.

0. Data unique to app transactions or other GUID can be added by AD 
   as HTTP headers for precise tracking.

   This is a powerful way to pin-point the total amount of time on each tier.

0. Number of AD licenses vs number of servers in production is a crucial 
   operational metric.

   PROTIP: Many organizations need to use a "borrow Peter to pay Paul"
   mode of operation in order to stay within allocated budgets.
   This means licenses are pulled from one server to
   install in servers being actively considered.
   In such cases, consider using an alternative monitoring mechanism
   for servers which do not have AD agents.
   Such a switch can be a part of automated server build parameters.

<hr />

## AWS Agent installation #

The AD Metric Browser can display metrics as a mash-up of data from cloud vendors.

For example, AD can analyze CloudWatch metrics of Amazon S3 service usage for
buckets designated:

* <strong>Size</strong> of all the objects present in bucket(s).

* <strong>Objects Count</strong> of objects present in bucket(s) configured 

* <strong>Since Last Modified Time</strong> of objects in bucket(s) configured.

The code and configuration notes are at<br />
<a target="_blank" href="https://github.com/Appdynamics/aws-s3-monitoring-extension">
https://github.com/Appdynamics/aws-s3-monitoring-extension</a>

To 
<a target="_blank" href="https://www.appdynamics.com/community/exchange/extension/amazon-aws-s3-monitoring-extension/">
install the agent in AWS to do the above</a>:

1. Download file 
   <strong>S3Monitor.zip</strong>

   The jar file in it was compiled from 
   <a target="_blank" href="https://github.com/Appdynamics/aws-s3-monitoring-extension">
   https://github.com/Appdynamics/aws-s3-monitoring-extension</a>
   (by Satish Muddam on 05/11/2015)
   and includes dependencies pulled in.

   PROTIP: Some enterprises prefer to recompile and store it in their Artifactory repository
   for internal use rather than downloading from the internet unreviewed by 
   ethical hackers.

0. Unzip it into folder
   <em>machineagent install dir</em>/monitors/

0. The <strong>monitor.xml</strong> for AD
   points to the yml file. It's in the config folder.

1. Open <strong>S3Configurations.yml</strong> in a text editor.

0. Copy and paste the *accesskey: <Access-Key> for S3 account.

0. Copy and paste the *secretkey: <Secret-Key> for S3 account.

0. Copy and paste the * metricPrefix: Metric prefix path for AppDynamics controller.

0. onlyConsolidatedMetric: true or false(default).
   
   If only consolidated metric is required (Bucket wise metrics will not be pushed to controller if this is true)

0. noOfThreads: Min-1, Max-32, Default-8

0. sizeunit: B, KB (Default), MB

0. timeunit: Seconds (Default), Minutes, Hours, Days

0. bucketNames: Bucket names to monitor. 

   To monitor all available buckets remove this field or Add a bucket named "All".

   To avoid permission issues, install the agent as the same user who owns the Machine Agent files or as an administrator on the host machine. 

0. PROTIP: To detect any typos, use a YML validator such as
   <a target="_blank" href="http://www.yamllint.com/">
   http://www.yamllint.com</a>,
   even when the file is generated.

0. Review the <strong>monitor.xml</strong>.

0. Restart the <strong>machineagent</strong>.

   https://docs.appdynamics.com/display/PRO42/Where+to+Specify+Machine+Agent+Configuration

   The Standalone Machine Agent (Machine Agent) starts within its own JVM.
   In 4.2, JRE 1.8 is bundled with the OS-specific Machine Agent installation downloads.

0. In the AppDynamics Metric Browser, look for: 
   Application Infrastructure Performance | <em>Tier</em> | Custom Metrics | Amazon S3.


<hr />

## App Instrumentation #

There is work necessary to instrument code objects to reveal them in monitoring.

0. Proxies or firewalls on the network may need to opened up for the agent 
   to talk to the Controller at default <strong>port 8090</strong>.

0. From the AD Home screen Getting Started section, 
   click "Agent Download &amp; Install Wizard".

   AppServerAgent-4.1.0.3.zip, 11 MB

0. Unzip the file.
   
   The folder contains a javaagent.jar file.

0. To the Java startup argument starting the application,
   add the Java Agent binary to the Java application process.

   AD provides the line to add for each type of Application Server:

   On Tomcat this means editing the <strong>catalina.sh</strong> file:

   <tt><strong>
   cd /bin<br />
   sudo cp catalina.sh  catalina.sh.backup<br />
   sudo gedit catalina.sh
   </strong></tt>

0. Use a text editor to add a line before Java is invoked:

   <tt><strong>
   export CATALINE_OPTS="$CATALINA_OPTS -javaagent:/home/appduser/appd-agent/javaagent.jar"
   </strong></tt>

0. if you're not ready for a server reboot,
   attach to a running process. 

   <tt><strong>
   sudo java -Xbootclasspath/a:/usr/lib/jvm/java-1.7.0-openjdk-1.7.0.85.x86_64/lib/tools.jar
   -jar /home/appduser/appd-agent/javaagent.jar 
   </strong></tt>

   Don't press Enter to submit until you get its PID:

   <tt><strong>
   sudo ps -A | grep java
   </strong></tt>

0. Highlight and copy the process number returned to paste at the end of the command above.

0. Invoke one of the sample apps 
   to impose load such as at:

   localhost:8080/examples/servlets/




<hr />

## Docker Instrumentation #

* <a target="_blank" href="https://community.appdynamics.com/t5/Tech-Webinars/AppDynamics-and-Docker-Tech-Webinar-and-Office-Hours/td-p/19960/jump-to/first-unread-message">
   Webinar</a>

* <a target="_blank" href="https://www.appdynamics.com/community/exchange/extension/docker-monitoring-extension/">
   Docs</a>

0. The 1st section of the doc at<br />
   <a target="_blank" href="https://docs.docker.com/reference/api/docker_remote_api/">
   https://docs.docker.com/reference/api/docker_remote_api</a>


<hr />

## Other Integrations #

The AD Controller can integrate with various other systems.

But it's through one-way HTTPS

Listed alphabetically:

* <a target="_blank" href="https://www.appdynamics.com/community/exchange/extension/amazon-aws-s3-monitoring-extension/">
   AWS</a>

* <a target="_blank" href="https://www.appdynamics.com/community/exchange/extension/docker-monitoring-extension/">
   Docker</a>

* <a target="_blank" href="https://community.appdynamics.com/t5/Knowledge-Base/Using-AppDynamics-with-Java-Applications-on-Pivotal-Cloud/ta-p/20824">
   Pivotal Cloud Foundry Java</a>

* <a target="_blank" href="https://github.com/carlosdoki/extensionSolarwinds">
   SolarWinds</a>

* <a target="_blank" href="https://www.appdynamics.com/community/exchange/extension/websphere-mq-monitoring-extension/">
   Websphere MQ</a>


<hr />

### Cloud Security #

The biggest concern enterprises have with cloud services is their security.

* https://community.appdynamics.com/t5/Knowledge-Base/Introduction-to-AppDynamics-with-SSL/ta-p/20580?site=community


<hr />

### Social #

<a target="_blank" href="https://www.appdynamics.com/community/">
<strong>https://www.appdynamics.com/community</strong></a><br />
is the one-stop shop.

<a target="_blank" href="https://www.appdynamics.com/community/events/appsphere-2016">
AppSphere</a> in 2016 is on November 14 at the Marriott Cosmopolitan Las Vegas.

<a target="_blank" href="https://twitter.com/@AppDynamics/">
Twitter: @AppDynamics</a>

* https://blog.codecentric.de/en/2015/05/what-you-have-to-deal-with-when-you-work-with-appdynamics-or-other-apm-tools/

