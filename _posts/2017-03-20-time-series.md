---
layout: post
title: "Time Series"
excerpt: "See all 4+ dimensions (time) in visualizations"
tags: [apple, mac, setup]
date: "2017-03-20"
file: "time-series"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14583248/4b20c578-03d9-11e6-8f7a-c860b666bc73.jpg
  credit: Wall Street Journal
  creditlink: http://graphics.wsj.com/job-market-tracker/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Understanding the trend of numbers over time is a fundamental skill.
That's why it's taught in elementary school. Why?

> "Those who don't know history are doomed to repeat it." -- Edmund Burke

## Excellence defined

Below are vizualizations that have the following traits:

 * Dynamic data - update visualizations (in "live mode") as data changes in sources such as databases. 
 
 * Visual querying -  change the query by selecting or clicking on a portion of the graph or chart (to drill down, for example). 
 
 * Linked multi-dimensional visualization - selections made in one chart are reflected as you navigate into other charts.
 
 * Animation -   

 PROTIP: Dynamic (movie mode) is available only within the Tableau Public client,
 not when viewed on websites (as of 2016-01-05).
 
 * Personalization - give power users an in-depth view and newbies a simpler view, and also control access to data based on user- and role-based access privileges.
  
 * Actionable alerts  -  thresholds and parameters that trigger messages whether you're interacting with reports or not. 


## Fortune 500 in the US

View <a target="_blank" href="https://fortune.com/fortune500/visualizations/">https://fortune.com/fortune500/visualizations/<br />
to select an industry and mouse over a line to see each company's ranking change over the last 20 years.

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/24097787/cdd3b2f0-0d3d-11e7-889e-a99b161e1f55.png"><img width="1015" alt="dataviz time-series 2030x984" src="https://cloud.githubusercontent.com/assets/300046/24097787/cdd3b2f0-0d3d-11e7-889e-a99b161e1f55.png"></a>

The higher each line appears, the higher the company is on Fortune magazine's 500 largest public companies. 

Companies that have a rising trajectory include:

   * Whole Foods Market
   * Amazon
   * Alphabet (Google)
   * Apple
   * CVS Health
   * Comcast
   * Dollar General
   * Gilead Sciences
   * Qualcomm
   * Facebook
   * Visa
   * Master Card
   * Cognizant
   * Oracle

Plus, globally:

   * Softbank

Examining the HTML shows use of the
<a target="_blank" href="https://www.chartbeat.com/">Chartbeat JavaScript library</a>
for visualization.

<a target="_blank" href="http://nicolasrapp.com/">
Nicolas Rapp</a> also created for Fortune 500 this graphic:

<a target="_blank" href="http://nicolasrapp.com/portfolio/fortune-500-profits-run-gas/">
<img alt="dataviz-fortune500-oil-1120x772" src="https://cloud.githubusercontent.com/assets/300046/24098047/04c3dc1c-0d3f-11e7-9ec7-bc6d18022e8e.png"></a>


## Hans Roling

  Since 2007 at
  http://www.gapminder.org/videos/
  Hans Roling, a professor of health statistics in Sweden, is
  an internet legend for his
  <a target="_blank" href="https://vimeo.com/18477762">
  "Joy of Stats" video</a> shown on BBC Nov 10, 2010 and Ted Talks.
  In them he shows his 
  <a target="_blank" href="http://www.gapminder.org/world-offline/">
  Gapminder web app</a> which
  presents multiple dimensions dynamically over time (nearly 300).

<a target="_blank" href="https://public.tableau.com/profile/jeffs8297#!/">Jeffrey Shaffer</a> 
(<a target="_blank" href="https://twitter.com/HighVizAbility">@HighVizAbility</a>, co-author of <a target="_blank" href="http://www.bigbookofdashboards.com/">bigbookofdashboards.com</a>) 
created <a target="_blank" href="https://www.youtube.com/watch?v=KdoBuNNvVec">
a time lapse video</a> of <a target="_blank" href="
https://public.tableau.com/s/profile/jeffs8297#!/vizhome/RoslinginTableau/RoslingGapminder">
his viz</a> showing a trail of dots which grow in size and get darker over time (as the legend notes):

<img width="599" height="379" alt="tableau time lapse gapminder" src="https://cloud.githubusercontent.com/assets/300046/12170866/a288bce6-b4f9-11e5-892b-d69d8cc35010.png"><!-- 1590x1006 -->

Here, different colors represent different countries, with the United States in red. Most other countries saw a decrease in fertility rate over time while life expectantcy increased.

Within the <a target="_blank" href="http://public.tableau.com/profile/andy.cotgreave#!/"> 
wonderful Tableau gallery</a>
Andy Cotgreave (<a target="_blank" href="https://twitter.com/acotgreave">@acotgreave</a>, now <a target="_blank" href="https://www.linkedin.com/in/acotgreave">Technical Evangelist at Tableau</a>)
built over the years is
<a target="_blank" href="http://gravyanecdote.com/andy-cotgreave/joy-of-six-gapminder/">
this re-creation of Gapminder</a>:

<img alt="tableau gapminder" src="https://cloud.githubusercontent.com/assets/300046/12102988/ba022edc-b2f3-11e5-8c2a-05c980223e21.png">

Andy
<a target="_blank" href="http://interworks.co.uk/blog/joy-of-six-gapminder/">
explained in 2010 how</a> he created the above using Tableau Trendalyzer v6.
<a target="_blank" href="http://public.tableau.com/profile/andy.cotgreave#!/vizhome/GapminderFullScreen/Gapminder">
Download his viz from the Tableau Public website</a> 
to manipulate using Tableau Public client installed on your laptop.

The trails is a recreation of 
(<a target="_blank" href="https://twitter.com/moritz_stefaner">@moritz_stefaner</a>)
"Remixing Rosling" in @tableau.


<a name="CycleTime"></a>

## Cycle Time  

<a target="_blank" html="https://cloud.githubusercontent.com/assets/300046/24077227/fc53a15c-0c1c-11e7-9782-9514f69c6a70.png">
<img width="978" alt="tableau interactive wait times 1956x1372" src="https://cloud.githubusercontent.com/assets/300046/24077227/fc53a15c-0c1c-11e7-9782-9514f69c6a70.png"><br />Click for full pop-up</a>

Metrics include:

* Percent of value-add time vs. total time.
   For example: In the case of physician visits, time interacting with physician vs. waiting and other activities.


## H20.ai

<a target="_blank" href="https://www.h2o.ai/">h20.ai</a>
provides a web-based (SaaS and on-premise) "driverless" tool that automatically visualizes a time series dataset:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/70820904-fae78c00-1d96-11ea-9387-ed44141b0bdf.png"><img alt="time-series-groups-h20-1277x495" href="https://user-images.githubusercontent.com/300046/70820904-fae78c00-1d96-11ea-9387-ed44141b0bdf.png"></a>


## Time Series databases

<a target="_blank" href="https://vimeo.com/213631101">
Introduction to Time Series</a>

* KDB proprietary runs in-memory within a single machine.

* Graphite - legacy invented by Expedia - does automatic roll-ups of data (losing irregular values)

* RiakTS from Basho is built for scale

* Promethius for DevOps (highly available with scaleout?)

* OpenTSDB is a layer on top of HBase.

* TimescaleDB, an open source time-series database engineered from PostgreSQL, 

* [InfluxDB - my notes](/influxdb/), open-source (MIT)

   * No external dependencies (written in Go)
   * SQL-like query language
   * Input data "Line Format" (not JSON)
   * Stores data in compressed format
   * Horizontally scaleable (across several servers)
   * Kapacitor collects anomalies
   <br /><br />

* Microsoft Azure introduced in 2017 their 
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/time-series-insights/time-series-insights-get-started">
   Time Series Insights</a>.

   You need to add your account to it so you can
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/time-series-insights/time-series-insights-data-access">
   view</a> the
   <a target="_blank" href="https://insights.timeseries.azure.com/">
   Time Series portal at https://insights.timeseries.azure.com</a>
   for an <strong>Environment</strong> you define.

<a target="_blank" href="https://www.youtube.com/watch?v=WlsK22p9rGI">
InfluxDB Performance Tuning & Schema Design</a> - June 2016
by Gunnar Aasen

* Amazon Timestream


## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}
