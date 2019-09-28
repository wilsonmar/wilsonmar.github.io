---
layout: post
title: "Elastic Kibana setup"
excerpt: "Show all the numbers in a dashboard"
tags: [apple, mac, setup]
date: "2017-09-05"
file: "elastic-kibana"
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

Kibana presents visualizations in a dashboard containing data from Elasticsearch databases.

Kibana was first built using Ruby with the Sinatra framework.

WARNING: Kibana 4 has a completely different approach to creating charts than Kibana 3.


<a name="InstallKibana"></a>

## Install Kibana

Kibana was originally written in JavaScript using NodeJs.

0. Manually install Kibana on Ubuntu:

   <tt><strong>wget -qO - https://artifacts.elastic.co/GPG-Key-elasticsearch | sudo apt-key add -OK
   </strong></tt>

   The response expected is just "OK".

0. Update the installer:

   <tt><strong>echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-5.x.list deb https://artifacts.elastic.co/packages/5.x/apt stable main
   </strong></tt>

0. Update and install:

   <tt><strong>apt-get update && apt-get install kibana
   </strong></tt>


## Marvel plug-in

http://www.elasticsearch.org/overview/marvel

plugin.bat -i elasticsearch/marvel/latest

In Windows Services, restart elasticsearch service.

* Indexing request rate



<a name="InstallSense"></a>

## Install Sense Chrome AddOn

Sense is a Kibana app that provides an interactive console for submitting requests to Elasticsearch directly from your browser. 

0. Be in the Kibana directory to download and install the Sense app:

0. Install and run Sense by running the following command 

   <tt><strong>./bin/kibana plugin --install elastic/sense 
   </strong></tt>

   On Windows: 

   <tt><strong>bin\kibana.bat plugin --install elastic/sense
   </strong></tt>

   Alternately, download Sense from https://download.elastic.co/elastic/sense/sense-latest.tar.gz to install it on an offline machine.


0. Start Kibana:

   <tt><strong>./bin/kibana
   </strong></tt>

   On Windows: 

   <tt><strong>bin\kibana.bat
   </strong></tt>

0. Open Sense your web browser by going to 

   http://localhost:5601/app/sense


   
<a name="KibanaConfig"></a>

##  Kibana Configuration

Kibana installs with its own Node.js server. It doesn't use a web server.

A default <strong>config.js</strong> comes with the installer.

A single node is a master, data, and client nodes.
A node specializes into data and client nodes.

   
   ### Edit configuration

0. Navigate into folder `/etc/kibana` to edit file `configuration.yml`.

0. For the `server.host:` settting, replace `localhost` with `192.168.0.16` or whatever it should be.

0. For the `server.name:` settting, replace `your-hostname` with your name.

0. For the `elasticsearch.url:` settting, replace `http://localhost:9200` with the IP and port defined.

0. Save the file.

0. Start the server:

   <tt><strong>service kibana start
   </strong></tt>

0. View the landing page at Kibana's default port 5601:

   <tt><strong>http://192.168.0.15:5601
   </strong></tt>

   The default "index patterns" screen should appear.

   ![elk-kibana-created-650x358-78550](https://user-images.githubusercontent.com/300046/30401997-75d35cf8-9899-11e7-9570-6a8ff0c9c787.jpg)

0. Click the blue "Create" button.





<a name="PanelTypes"></a>

## Panel Types

Kibana is described as "general purpose" because it provides a rich pallette of visualizations it can display.

ELK stack became popular among server admins analyzing server logs.

  * bettermap (version 4 on)
  * column
  * goal
  * histogram
  * hits
  * map
  * sparklines
  * terms
  * text
  * trends

For example, Kibana can create a dashboard with these panes:

1) a heatmap to display Logstash-enhanced GeoIp data based on idgeo lookup

2) a line graph to display how many log hits (the higher a point, the more hits).

3) a pie chart to summarize the percentage of different error log levels.

## Plug-ins

https://github.com/ommsolutions/kibana_ext_metrics_vis
is a plugin for Kibana 5.0.0+ based on the core Metric-Plugin but 
outputs custom aggregates on metric-results by using custom formula and/or JavaScript.


<a name="Videos"></a>

## Tutorials and Videos

 * https://www.youtube.com/watch?v=96og3aIgyrc&list=PLhLSfisesZIvA8ad1J2DSdLWnTPtzWSfI
   is a YouTube playlist by Product Manager and Solutions Architect Morgan Goeller presenting
   Kibana4

* https://www.elastic.co/webinars/getting-started-kibana?baymax=default&elektra=docs&storm=top-video
  Kibana 101

* https://www.digitalocean.com/community/tutorials/how-to-use-kibana-dashboards-and-visualizations


## More #

This is one of a series on Elastic Stack and monitoring:

{% include monitoring_links.html %}
