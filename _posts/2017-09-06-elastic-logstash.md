---
layout: post
title: "Elastic Logstash"
excerpt: "Assemble and filter data from Elastic Beats"
tags: [ELK, ecosystem]
date: "2017-09-06"
file: "elastic-logstash"
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

This section describes how to install, configure, and use the Logstash component within the Elastic Stack.

Logstash usually receives its data from Beats agents.


## LogStash Marketing

The product marketing page for Beats is at:

  <a target="_blank" href="https://www.elastic.co/products/logstash">
                      https://www.elastic.co/products/logstash</a>

Logstash was originally developed by **Jordan Sissel** when he was a system administrator at Dreamhost. 

  * https://github.com/jordansissel/
  * https://twitter.com/jordansissel
  * http://semicomplete.com (latest post in 2012)
  * https://www.youtube.com/watch?v=fwMnb4-t8vo More Logstash Awesome - Jordan Sissel - PuppetConf 2013
  * https://www.youtube.com/watch?v=RuUFnog29M4 


<a name="Competitors"></a>

## Competitors

Competitors to Logstash include 

* Apache Kafka <a target="_blank" href="http://research.microsoft.com/en-us/um/people/srikanth/netdb11/netdb11papers/netdb11-final12.pdf"> PDF: is used at LinkedIn</a>
* Cloudera <a target="_blank" href="https://github.com/cloudera/flume"> 
   Flume</a> +Elasticsearch+Kibana or Flume+HDFS+HIVE+PIG
* Greylog2
* Fluentd+MongoDB
* [Stackify](http://stackify.com/smart-error-log-management-trial-sign)
* LOGalyse 
* Scribe

 
<a name="LogstashConfig"></a> 

## Logstash Configuration

Before forwarding, Logstash can parse and normalize varying schema and formats.

   A basic Logstash configuration (logstash.conf) file
   contains 3 blocks: input, filter, and output.
   
   <img src="https://cloud.githubusercontent.com/assets/300046/9026097/35deab0a-38df-11e5-9580-1b3dfc42a242.png" />

   Each block contains a <strong>plugin</strong> distributed as a
   RubyGem (to ease packaging and distribution).

   Filters are applied in the order they are specified in the .conf file.
   
   Field names are specified between `%{` and `}`.


1. Create a configuration file using the vi editor (or your favorite):

   ```
   vi logstash.conf
   ```

   PROTIP: Associate .config files with a text editor.

   To the vi editor, press Esc, then write and quit the vi editor by typing *:wq*.

0. Copy the following and paste into the .conf editor window:

   ```JSON
input { 
       stdin { } 
}
filter {
        grok {
                type => "apache"
                pattern ==> ['%{COMBINEDAPACHELOG}']
         }
}
output {
        stdout { codec => rubydebug }
        elasticsearch { embedded => true }
}
   ```



<a name="LogSources"></a>

###  Logstash Sources

Logs into Logstash <strong>brokers</strong> 
can be from various <strong>shippers</strong> (origins):

* TCP/UDP
* Files
* Syslog
* Microsoft Windows Eventlogs
* STDIN
* WebSockets
* ZeroMQ
* Twitter
* SNMPTrap
* geoIP

Brokers go to Lucene <strong>index</strong> accessed by the storage and search server
which has a web interface.

<a name="Logstash_lifecycle"></a>

## Log Lifecycle Logstash

The lifecycle of a log: Record, Transmit, Store, Delete.


<a name="STDIN_Logstash"></a>

####  STDIN Logstash

0. Since STDIN means the command line, type `testing` and press Enter for this debug response:

   ```
   {
       "message" => "testing",
      "@version" => "1",
    "@timestamp" => "2015-08-02T02:02:06.903Z",
          "host" => "Wilsons-MacBook-Pro.local"
}
   ```
   
   NOTE: The Z in the timestamp stands for GMT/UTC "Zulu" time, basically London time without the 
   Summer Time (what the UK calls Daylight Savings Time in the US).
   
   
<a name="LogFormats"></a>

##  Log Input Formats

A key benefit of using Logstash is that it 
normalizes different timestamps from different systems:

 * JSON
 * XML
 * CSV
 * Multi-line stack traces
 * Regex
 * Grok (Regex on steroids)
 * Zabbix
 * SQS (Amazon)



<a name="LogOutputs"></a>

###  Logstash Outputs

With the categories of output:

Relay:
   * Redis
   * RabbitMQ
   * TCP/UDP socket
   * Kafka
   * Syslog

Storage:
   * Elasticsearch
   * MongoDB
   * Amazon S3
   * File

Notification:
   * PagerDuty
   * Nagios monitoring
   * Zabbix.com
   * Email
   * Amazon Cloudwatch
   * Alerting tools (Hipchat, SMS)

Metrics (graphics):
   * StatsD
   * Graphite
   * Ganglia


<a name="Brokers"></a>

### Brokers

* AMQP (Advanced Message Queuing Protocol) http://www.amqp.org/
* zMQ at http://zeromq.org/
* Redis from http://redis.io/ receives the log event on the central server and acts as a buffer (port 6379),
  which should be used only with STunnel or with public information.
  
  The front server would notice files based on this .conf using just a few of the
  <a target="_blank" href="https://www.elastic.co/guide/en/logstash/current/plugins-inputs-file.html">
  file plugin's many options</a>.

   ```
input { 
       file {
           type = > "syslog" 
           path = > ["/var/log/secure", "/var/log/messages"] 
           exclude = > ["*. gz"] }
        }
}
output { 
      stdout { } 
      redis { 
              host = > "10.0.0.1" 
              data_type = > "list" 
              key = > "logstash" 
      }
}
   ```

  
  The backend:

   ```
input { 
      redis { 
              host = > "10.0.0.1" 
              type = > "redis-input" 
              data_type = > "list" 
              key = > "logstash" 
      }
output { 
        stdout { } 
        elasticsearch { 
                cluster = > "logstash" 
        }
}
   ```

<a name="LogstashFilters"></a>

###  Logstash Filters

labels instead of regex patterns.

* <strong>grok</strong> uses patterns to extract data into fields.
* <strong>date</strong> parses timestamps from fields to standardize into a "canonical" date format
* <strong>mutate</strong> rename, remove, replace, modify fields in events
* <strong>geoip</strong> determines geographic info. from IP addresses (via Maxmind)
* <strong>csv</strong> parses comma separated values or other pattern or string
* <strong>kv</strong> key-value pairs in event data
* grep
* alter
* multiline
* <strong>ruby</strong> to run arbitrary Ruby-language code.


<a id="Alternatives"></a>

## Integration with Alternatives

Logstash can work in sync with other commercial products (can compete with it):

 * https://github.com/IBM-ITOAdev/logstash-input-appdynamics


<a name="LogstashForwarder"></a>

## Logstash Forwarder

Configure for scale by using a Logstash Forwarder and RabbitMQ between a Logstash Producer and Logstash Consumer
http://jakege.blogspot.in/2014/04/centralized-logging-system-based-on.html

Logstash Forwarder is written in the programming language Go.

<a target="_blank" href="https://www.elastic.co/webinars/logstash-0-60-in-60?baymax=rtp&elektra=downloads&iesrc=ctr">
VIDEO: Logstash</a>



<a name="Resources"></a>

## Resources

   * https://www.youtube.com/watch?v=Kqs7UcCJquM
     Visualizing Logs Using ElasticSearch, Logstash and Kibana
     by Jeff Sogolov.




This page describes the configuration of Logstash servers for capacity.

We would prefer to have a local Logstash server near servers issuing logs.

Logstash servers then forward logs to Elastisearch servers.

To handle additional load ....

<hr />



<a name="LogstashInstall"></a>

##  Logstash Install

A sample:

```
#install logstash (based on http://jakege.blogspot.in/2014/04/centralized-logging-system-based-on.html)
sudo wget https://download.elasticsearch.org/logstash/logstash/logstash-1.3.3-flatjar.jar
sudo mkdir /opt/logstash
sudo mv logstash-1.3.2-flatjar.jar /opt/logstash/logstash.jar
sudo wget http://logstash.net/docs/1.3.2/tutorials/10-minute-walkthrough/hello.conf
sudo wget http://logstash.net/docs/1.3.2/tutorials/10-minute-walkthrough/hello-search.conf
sudo mv hello.conf /opt/logstash/hello.conf
sudo mv hello-search.conf /opt/logstash/hello-search.conf
cd /opt/logstash/
#example configuration
java -jar logstash.jar agent -f hello.conf
java -jar logstash.jar agent -f hello-search.conf
```

   The java here is a JRuby run-time (for performance).
   Logstash is extendable with Ruby.


<a name="LogstashRun"></a>

##  Run Logstash

1. Run Logstash using a script in the bin folder and the .conf file just created:

   ```
   bin/logstash agent --debug -f logstash.conf
   ```
   
   See <a target="_blank" href="https://www.elastic.co/guide/en/logstash/current/_command_line_flags.html">
   list of command line flags</a>. 

   If the command includes `--configtest` or just `-t`, logstash stops after processing it.
   
   If a folder is specified, such as /etc/logstash/conf.d, all .conf files in it are loaded.
   
   In production mode, Logstash would be started as a <strong>service</strong> (Unix daemon):

   ```
   sudo service logstash start
   ```

0. To stop on a Mac, hold down control and press C. On Windows, it's Ctrl+C.


   
<a name="Outputs"></a>

##  Logstash Outputs

   Logstash sends its own log output locally to 
   <tt>/var/log/logstash/logstash.log</tt> by default.

  This location can be changed at ???


## Resources

* James Turnbull (at Kickstarter)
  wrote the $9.99 Logstash v1.5 Book Kindle Edition
  http://www.amazon.com/Logstash-Book-James-Turnbull-ebook/dp/B00B9JQTCO/ref=wilsonslifenotes




## More #

This is one of a series on Elastic Stack and monitoring:

{% include monitoring_links.html %}
