---
layout: post
title: "Elastic Beats"
excerpt: "Minions to collect data from each server"
tags: [ELK, ecosystem]
filename: "elastic-beats.md"
date: "2017-09-07"
file: "elastic-beats"
image:
# elk-beat-arch-1900x500-102084.jpg
  feature: https://user-images.githubusercontent.com/300046/30410257-2d3fa8b0-98c7-11e7-9467-d35837b592a2.jpg
  credit: JP Toto on Pluralsight
  creditlink: https://app.pluralsight.com/library/courses/centralized-logging-elastic-stack/table-of-contents
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This section describes how to install, configure, and use the Beats component within the Elastic Stack, previously called ELK stack before Beats was added in 2016.

Beats is the collective term for Elastic's utilities that run on servers to read logs from a variety of sources.

Beats are small, lightweight (written in Golang)

* Filebeat collects and sends <strong>text</strong> log files.
* Metricbeat collects and sends operating system and application data.
* Packetbeat collects and sends network monitoring data.
* <a href="#Winlogbeat">Winlogbeat</a> collects and sends Windows Event logs data
* Libbeat collects and sends custom data defined in Golang programs.
* Heartbeat
* Auditbeat

Beats usually sends its data to a Logstash receiver, but they can send directly to ElasticSearch database.


Alternatives to get bits onto a server:

A) Ansible

B) Chef

C) Microsoft SCCM

D) Direct download


## Beats Marketing

The product marketing page for LogStash is at:

  <a target="_blank" href="https://www.elastic.co/products/beats">
                      https://www.elastic.co/products/beats</a>

## Install on Ubuntu

PROTIP: Beats is written in [the Go Language (Golang)](/golang/), which compiles to a static binary containing its own VM. So there is no need to install a run-time such as JVM to run Java.

1. Add the Elastic public signing key to server:

   <tt><strong>
   wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
   </strong></tt>

2. Install on Ubuntu:

   <tt><strong>
   apt-get update && apt-get install filebeat
   </strong></tt>

3. Look at the tail end (last few lines) in the system log:

   <tt><strong>
   tail /var/logs/sys.log
   </strong></tt>

3. Configure the Filebeat configuration file from "/var/log/\*.log" for all files to 
   "/var/log/syslog.log" plus add "document_type: syslog":

   <tt><strong>
   sed /etc/filebeat/filebeat.yml  "/var/log/\*.log"  "/var/log/syslog.log \n document_type: syslog"
   </strong></tt>

   See https://www.elastic.co/guide/logstash/current/index.html

   ### beats.yml





### Download Beats

1. https://www.elastic.co/downloads/beats



## Processing

Before forwarding, Logstash can parse and normalize varying schema and formats.

   * Reading
   * Filtering
   * Enhancing
   * Forwarding

## Metricbeat modules

   * System Logs
   * Apache web server
   * NginX
   * HAProxy

   * MongoDB
   * MySQL
   * PostgreSQL
   * Redis

   * Zookeeper (Puppet)


<a name="Winlogbeat"></a>

## Winlogbeat

   <a target="_blank" href="https://www.elastic.co/guide/en/beats/winlogbeat/current/winlogbeat-getting-started.html">Based on this</a>

   NOTE: Although Windows machines have Perfmon built-in, Beats collects and forwards the data.

0. Download and unzip.

   File `winlogbeat.full.yml` contains ALL specifications.

   File `winlogbeat.template.es2x.yml` should be ignored since you're not using v2.

   NOTE: Formats changed in v5, so Python scripts/migrate_beat_config_1_x_to_5_0.py is provided to migrate.

0. Edit the `winlogbeat.yml` configuration file to keep verbosity low and discard debug entries:

   <pre>
winlogbeat.event_logs:
   - name: Application
     ignore_older: 72h
     level: critical, error, warning
   - name: Security
   - name: System
   </pre>

0. Add tags so each shipper can be identified when logs are consolidated:

   <pre>
tags: ["us-east-01"]"
   </pre>

0. Add fields to specify which environment:

   <pre>
fields:
  globo_environment: production
   </pre>

0. Specify the output destination as a Logstash server (not Elasticsearch server):

   <pre>
#output.elasticsearch:
output.logstash:
  hosts: ["192.168.0.14:5043"]
   </pre>

0. Save the file.
0. Verify whether the server designated can be reached. In PowerShell:

   <tt><strong>Invoke-WebRequest -Method PUT -InFile .\winlogbeat.template.json -Uri http://192.168.0.12:9200/_template
   </strong></tt>

0. Install as a service within PowerShell CLI:

   <tt><strong>.\install-sevice-winlogbeat.ps1
   </strong></tt>

0. Run in PowerShell: 

   <tt><strong>winlogbeat.exe -c winlogbeat.yml
   </strong></tt>

0. Start in PowerShell: 

   <tt><strong>start-service winlogbeat
   </strong></tt>

0. View logs in PowerShell: 

   <tt><strong>Get-Content .\logs\winlogbeat -Wait
   </strong></tt>

   Errors will be reported if Logstash has not been setup.

scripts/import_dashboards.exe


<a name="LogstashConfig"></a> 

## Beats in Logstash

File `beats.conf`



## Resources

## More #

This is one of a series on Elastic Stack and monitoring:

{% include monitoring_links.html %}
