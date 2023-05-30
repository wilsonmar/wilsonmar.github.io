---
layout: post
date: "2023-05-30"
file: "log-parsers"
title: "Log Parsers"
excerpt: "Analyze without agents"
tags: [Clouds, Java]
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

Here are my notes toward building an "unsupervised" machine-learning framework 
to identify patterns in various logs.

Logs are produced by programs:

   * <a href="#OSLogs">Operating system logs</a>
   * <a href="#WebSvrLogs">Web Server logs</a>
   * Perfmon
   * Linux top
   * <a href="#AppLogs">Custom application logs</a> to commemorate specific events 
   such as an invoice being sent or other business transaction being processed.

https://sematext.github.io/logagent-js/parser/
detects log formats based on a pattern library (yaml file) and converts it to a JSON Object.

## Vendors

Commercial vendors include:

* Splunk
* QRadar (IBM)
* ArcSight (Micro Focus/HP)
* LogRhythm
* McAfee Enterprise Security Manager
* RSA Security Analytics
* Sentinel (Microsoft)
* Exabeam
* Securonix
* Rapid7
* Grurucul
* RSA
* Fireeye
<br /><br />

## Strategy vs. Current Offering

In <a target="_blank" href="https://www.microsoft.com/en-us/security/blog/2020/12/01/azure-sentinel-achieves-a-leader-placement-in-forrester-wave-with-top-ranking-in-strategy/
">2020 Forrester</a> rated Microsoft as leading the market in strategy but rated IBM the strongest offering. Splunk is up there as well.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1685464884/log-parsers-Forrester-2020-774x1024_iwzhje.jpg"><img alt="log-parsers-Forrester-2020-774x1024.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1685464884/log-parsers-Forrester-2020-774x1024_iwzhje.jpg"></a>


## Microsoft's Sentinel

https://learn.microsoft.com/en-us/azure/sentinel/skill-up-resources



## Visualizations 

The value to keeping logs is to provide <strong>insights</strong> to what is being logged.

That is usually about the pattern and anomalies of occurances <strong>over time</strong>.

SIEM systems collect and analyze logs over time to detect persistent threats.



<a name="OSLogs"></a>

## System logs

Microsoft System Logs can be parsed using
http://logparserplus.com/Article


<a name="WebSvrLogs"></a>

## Web server logs

Web servers such as Apache, IIS, NGINX, etc. store an entry for each HTTP and file (resource) query.

Apache and others create logs in a W3C-defined format.

A trivial sample is provided at data/apache.access.log.

A fuller example is provided at 
<a target="_blank" href="http://www.monitorware.com/en/logsamples/apache.php">
http://www.monitorware.com/en/logsamples/apache.php</a>

A parser and model for the log file: See ApacheAccessLog.java.

See https://databricks.gitbooks.io/databricks-spark-reference-applications/content/logs_analyzer/chapter1/spark.html

A configuration file specifies what fields are output in the log.

https://github.com/rory/apache-log-parser
is written in Python.
http://codereview.stackexchange.com/questions/68846/someone-thinks-poorly-of-my-server-log-parser

https://awstats.sourceforge.io/
is written in Perl with an architecture that enables
<a target="_blank" href="https://awstats.sourceforge.io/docs/awstats_contrib.html#PLUGINS">
plug-ins</a> for additional functionality.

https://wiki.jenkins-ci.org/display/JENKINS/Log+Parser+Plugin

http://alvinalexander.com/scala/scala-apache-access-log-parser-library-java-jvm

https://easyengine.io/tutorials/nginx/log-parsing/



### MS Log Parser for SQL

<a target="_blank" href="https://www.microsoft.com/en-us/download/details.aspx?id=24659">
Microsoft Log Parser</a>
provides SQL-like query access to text-based data such as log files, XML files and CSV files, as well as key data sources on the Windows® operating system such as the Event Log, the Registry, the file system, and Active Directory®. It was created for Windows 2000, Windows Server 2003, Windows XP Professional Edition.

$31 http://lizard-labs.com/log_parser_lizard.aspx provides a GUI to the command-line access to 
a "Swiss Army Knife"

![6a0120a85dcdae970b0128776fb331970c-pi](https://cloud.githubusercontent.com/assets/300046/22374432/2314e97a-e474-11e6-815f-78030331de3a.gif)

   * https://blogs.msdn.microsoft.com/carlosag/2010/03/25/analyze-your-iis-log-files-favorite-log-parser-queries/

   * https://blog.codinghorror.com/microsoft-logparser/

   * http://www.symantec.com/connect/articles/forensic-log-parsing-microsofts-logparser

   * https://technet.microsoft.com/en-us/library/ee692659.aspx

   * https://www.codeproject.com/articles/13504/simple-log-parsing-using-ms-log-parser-in-c-ne

   * <a target="_blank" href="https://books.google.com/books?id=vnIXo-yUT2gC&pg=PA80&lpg=PA80&dq=log+parser+code&source=bl&ots=B55CyRBY18&sig=c6zrPS8bmlSH9WwStUPi8Kd--qw&hl=en&sa=X&ved=0ahUKEwiq6qvQk-LRAhXFeCYKHTe6ApE4ChDoAQheMAg#v=onepage&q=log%20parser%20code&f=false">
   Microsoft Log Parser Toolkit: A Complete Toolkit for Microsoft's </a>
   by Gabriele Giuseppini, Mark Burnett

   * https://www.simple-talk.com/blogs/using-logparser-part-1/

   <br /><br />

QUESTION: Its equivalent for Linux?


## Perfmon logs

MS PAL (Performance Analysis of Logs)

https://pal.codeplex.com/

It makes use of PowerShell v2.0 or greater
which uses 
Microsoft Chart Controls for Microsoft .NET Framework 3.5 Service Pack 1

<a name="AppLogs"></a>

## Custom application logs

Code to output logs

https://www.arcgis.com/home/item.html?id=90134fb0f1c148a48c65319287dde2f7


## Log gathering

Due to their size, systems "rotate" logs, meaning new file names are created when the 
allocated disk space for each file is used.


## References

Log parsing

http://stackoverflow.com/questions/3328688/need-some-ideas-on-how-to-code-my-log-parser


## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
