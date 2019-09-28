---
layout: post
title: "System Monitoring"
excerpt: "He sees you when you're sleeping. He knows when you're awake ..."
tags: [Clouds, Monitoring, Analytics]
date: "2016-10-12"
file: "system-monitoring"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dDynatracebf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on narrated tour on how metrics.

{% include _intro.html %}

<hr />

## Options #

There are several


0. Install node.js
0. Define a project folder.
0. Clone the project

0. Create a config file based on <tt>exampleConfig.js</tt>
0. Edit the file for debugging:

    debug - log exceptions and print out more diagnostic info

    dumpMessages - print debug info on incoming messages

0. Use the default UDP server on localhost?

0. Start the StatsD daemon:
   
   <pre><strong>
   node stats.js /path/to/config
   </strong></pre>

0. Send in metrics from your command line:

   <pre><strong>
   echo "foo:1|c" | nc -u -w0 127.0.0.1 8125
   </strong></pre>

0. Execute tests 

   <pre><strong>
   chmod +x
   ./run_tests.sh
   </strong></pre>

0. IRC channel: #statsd on freenode

0. Mailing list: statsd@librelist.com

<hr />

## Metrics collection #

Servers export 
<a href="#Metrics">metrics</a> data
to
<strong>collection servers</strong>.

Data collected are 
coalesced 
into
<strong>aggregate metrics</strong> 
visualized by 
<strong>graphing systems</strong>
such as Graphite and Kibana.

<hr />

Measures are concrete, usually measure one thing, and are quantitative in nature (e.g. I have five apples). 

Metrics describe a quality and require a measurement baseline (I have five more apples than I did yesterday). 


<a name="Metrics"></a>

## Metrics #

A metric is a measurement composed of a name, a value, a type, and 
sometimes additional information describing how a metric should be interpreted.

The <a target="_blank" href="https://github.com/b/statsd_spec/">
StatsD metric collection protocol</a>
originated in 2008 at 
Flickr</a> an
<a target="_blank" href="https://github.com/etsy/statsd">
Etsy's statsd (daemon)</a> by Erik Kastner 
has the form:

   <pre>
   &LT;metric name>:&LT;value>|&LT;type>[|@&LT;sample rate>]
   </pre>

The "type" character at the end includes:

   "g" for guage, which provides instantaneous measurements such as the gas gauge in a car,
   calculated at the client (rather than the server).

   "c" for counter, a guage calculated at the server.
   This differentiation is necessary because metrics sent by the client 
   increment or decrement the value of the gauge rather than giving its current value.
   which provides instantaneous measurements such as the gas gauge in a car, 
   Counters may also have an associated sample rate, given as a decimal of the number of samples per event count.

   "m" for meter, which measures the <strong>rate</strong> of events over time, 
   calculated at the server. 

   "t" for timer, which measures the number of milliseconds elapsed between a start and end time,
   such as time to complete rendering of a web page for a user. 

   "h" for histogram, which presents a distribution of timer values over time, calculated at the server. 

See <a target="_blank" href="http://code.flickr.com/blog/2008/10/27/counting-timing/">
Counting-timing blog</a> by Cal Henderson.


## StatsD #

Influenced by 
<a target="_blank" href="http://metrics.codahale.com/">
Coda Hale's Metrics</a>.

https://github.com/etsy/statsd/wiki

<a target="_blank" href="http://codeascraft.etsy.com/2011/02/15/measure-anything-measure-everything/">
StatsD</a> 
is a front-end proxy for the 
Graphite/Carbon metrics server written in Node, though there have been implementations in other languages since then.

based on ideas from Flickr and a post by Cal Henderson: Counting and Timing. 


<a name="Graphite"></a>

## StatsD Graphite #

http://graphite.wikidot.com/

http://graphite.readthedocs.io/en/latest/

Key Concepts

    buckets Each stat is in its own "bucket". They are not predefined anywhere. Buckets can be named anything that will translate to Graphite (periods make folders, etc)

    values Each stat will have a value. How it is interpreted depends on modifiers. In general values should be integer.

    flush After the flush interval timeout (defined by config.flushInterval, default 10 seconds), stats are aggregated and sent to an upstream backend service.



## Dynatrace in AWS #

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

## More on cloud #

This is one of a series on cloud computing:

{% include cloud_links.html %}
