---
layout: post
title: "Elastic Scaling"
excerpt: "This can, and does, get big"
tags: [ELK, ecosystem]
date: "2017-09-03"
file: "elastic-scaling"
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

This page contains unorganized notes about scaling of the Elastic Stack.



## Customers

Elasticsearch powers many of the most data-rich websites:

* Wikipedia uses Elasticsearch to provide full-text search with highlighted search snippets, and search-as-you-type and did-you-mean suggestions.

* The Guardian uses Elasticsearch to combine visitor logs with social -network data to provide real-time feedback to its editors about the public’s response to new articles.

* Stack Overflow combines full-text search with geolocation queries and uses more-like-this to find related questions and answers.

* GitHub uses Elasticsearch to query 130 billion lines of code.

* Klout

* AppDynamics monitoring


<a name="Pricing"></a>

## Pricing

https://www.elastic.co/subscriptions

Registering for a free "Basic" license gets you Monitoring (formerly Marvel) and Logstash ArcSight module along with Dev Tools Search Profiler and Grok Debugger. And Upgrade Assistant APIs & UI.

Unlike Splunk, where it's expensive (millions) after the first 500 MB of free.

Elastic prices subscriptions by the <strong>number of nodes</strong> managed and monitored at scale (less than Splunk and doesn't run out of gas).

But Marvel is free until production.




## Outline

0. GitHub for documentation and source control.
0. Linux Ubuntu (Amazon build) running on all servers for DEB packages installed by command dpkg
0. <a target="_blank" href="https://www.stunnel.org/index.html"> STunnel</a> to secure communications
0. <a href="#Docker"> Docker</a> to install packages on servers.
0. <a href="#LogstashForwarder"> Logstash Forwarder</a> 
   on all servers to direct log entry flow to a collector.

0. JMeter to create load on the system artificially by using Java programs to 
    emulate many real clients.

0. Maven to package java

0. Puppet to manage configurations

0. NGINX to distribute among servers

0. <a href="#Logstash">Logstash</a> collects timestamped logs of
   <a href="#LogFormats">various formats</a>, from
   <a href="#LogSources">various sources</a>, parse to filter out junk, index them, and normalize into JSON
   in a way that's searchable in a central location. 
   Better than awk, grep, etc. on individual machines.

0. RabbitMQ queue services between Logstash producers and consumers to ensure scalability
   by absorbing spikes.

0. <strong>Elasticsearch</strong> indexes (inverted) nested aggregations of data in Hadoop.
0. <strong>Curator</strong> at https://github.com/elasticsearch/curator
   to manage Elasticsearch indexes
   by enabling admins to schedule operations to optimise, close, and delete indexes.

0. <strong>Kibana</strong> does data discovery on elasticsearch cluster to identify "actionable insights"
   and presents visualization (a dashboard).


<a name="Why"></a>

## Why

Instead of piping individual logs such as:

```
$ log_producer | grep ... | sed ... | awk ... | tee output \ | sort | uniq -c | sort -n
```

Elasticsearch provides consistency to different time stamp formats.

Kibana "democratizes" data by putting a front-end to access data
in a searcheable in fast, meaningful ways.


<a name="Docs"></a>

##  Documentation

http://linoxide.com/tools/configure-elasticsearch-logstash-kibana-ubuntu-15-04/

There is a lighter edition of Logstash.

Kibana & Elasticsearch started as an open source project, built by devops people for devops people.

  * https://github.com/elastic/elasticsearch
  * https://github.com/elastic/kibana
  * https://github.com/elastic/logstash was begun by @jordansissel while at Dreamhost, who continues to create videos
    https://www.youtube.com/channel/UC1Hc-GPNTYax-vAVCH333ww as Elastic employee.
    His talk: https://www.youtube.com/watch?v=fwMnb4-t8vo

   * https://github.com/docker-library/kibana



<a name="CompetitiveFeatures"></a>

## Competitive Features

* D3 JS library flexibility
* Watcher - 
* Shield support for security

* Bulk operations (for indexing and search operations)
* Percolator ("reversed search" - alerts, classification)
* Suggesters ("Did you mean ...?")
* Index aliases (Grouping, filtering or "renaming" of indices every day)
* Index templates (automatic index configuration)
* Monitoring API (amount of memory used, number of operations, etc.)

* Pie charts have nested levels




<a name="ElasticConfig"></a>

## Elasticsearch Configure

On a Mac with Homebrew installed:

   ```
   brew install elasticsearch nginx
   ```



## Indexes and Shards

Indexes are stored in two types of shards (Apache Lucene instances): primary and replica.
Primary shards are where documents are stored. 
Five primary shards are created for each new index by default.
This default can change but not AFTER it is created.

Each primary shard has one replica by default but that can be changed dynamically for scale out or to make an index more resilient. 

Elasticsearch cleverly distributes shards across available nodes such that primary and replica shards for an index are not present on the same <strong>node</strong> that is automatically part of an Elasticsearch cluster.

Elasticsearch moves shards automatically from one node to another in the case of node failure or when new nodes are added.


   ```
   # line 32 - read the comments on why you might not want localhost here
# for dev box only
elasticsearch: "http://localhost:9200",

# enable cors for kibana3 + elasticsearch 1.4
vi /usr/local/Cellar/elasticsearch/1.4.3/config/elasticsearch.yml

# kibana 3 compatibility
http.cors.enabled: true
http.cors.allow-origin: http://localhost:8080

# the services command is from the brew/tap at the top, love it
$ brew services restart elasticsearch


# make sure nginx starts by itself
# nginx config is in /usr/local/etc/nginx/nginx.conf if you need to look at it
# it won't need any edits for kibana.  it's just js/html in a directory.

# browse to http://localhost:8080/kibana  (you should see a kibana page)
# Now, let's change the default page to logstash.

cd /usr/local/var/www/kibana/app/dashboards
mv default.json default.json.orig
cp logstash.json default.json

# refresh the kibana page.  It will be logstash's default now.
   ```

<a name="Docker"></a>

###  Docker package


For more scale, between intermediate brokers are

   * Storm
   * Spark cache
   * Samza

Flume can send to HDFS for es-hadoop


<a name="Watcher"></a>

##  Watcher

https://www.elastic.co/webinars/watcher-alerting-for-elasticsearch?baymax=rtp&elektra=downloads&iesrc=ctr

Sends notifications via PagerDuty
 


  https://www.elastic.co/guide/en/elasticsearch/reference/current/glossary.html

jargons first : indexes, types, documents , mapping, match, multimatch ,filters ,query-dsl etc 


   PROTIP: From the bottom up, docs are stored in shards which live in a node.
   Each node is deployed as a physical machine or VM node.
   Multiple nodes can run within a physical machine.
   Node configurations include file path, label, network interface.
   Node default name is a random Marvel Super Hero name.
  
   On Windows -Des.node.name=

   ES balances shards around a cluster of ES nodes.

   Docs (in JSON format) from clients are routed to an index.
   An index is a container for docs (not just a list of pointers).
   Index configurations include shards, replicas, refresh rates, read only, etc.

   Once in a shard, a document remains in that shard.

   The number of fixed type shards is fixed at creation.

   A <strong>replica type shard</strong> can be changed dynamically.
   Having replicas means that 

   ES is built on top of Apache Lucene which provides index and query execution
   
   There is usually a load balancer to distribute load among nodes within a cluster.
   http. default ports 9200-9300 for API traffic.
   transport.tcp.port 9300 for long-lived connections among nodes.

   If a machine has multiple network cards, 
   ideally, use a different vlan between nodes.
   
   ES nodes are stateless.
   ES provides no rollback capabilities like SQL servers.

   Logging is done at the cluster.

   Each node respond to API calls to set configuration, mapping, templates, aliases, and index setting.

   How many:

  ```
curl -XPOST 'localhost:9200/myindex/_segments'
  ```

   If ELK is used only to ingest logs:

  ```
curl -XPOST 'localhost:9200/myindex/_optimize?max_num_segments=2'
  ```

   ES is a Java app.
   Use the JDK for thread dumps, etc.


   In  the ES folder:

   * config pointed from path.config in /etc/elasticsearch

   * data pointed from path.data, avoid $ES_HOME/data

   * logs pointed from path.logs in /var/log/elasticsearch, default to $ES_HOME/logs

   * plugins pointed from path. plugins

   * scripts pointed from path.scripts

   Log rotation daily by default.

   Maxium amount of space consumed.

   ES_HEAP_SIZE sets other options for you.
  
   * Don't set above 30gb or JVM won't compress object pointers and loose addressible heap space.
   * Don't alloc more than 50% of RAM on box to ES (for OS & file system cache).
   * Don't let JVM swap out disk by setting --boottrap.mlocakall=true in command or ES YML file.


   Within Lucene, docs indexed into a temporary buffer.
   Lucene flushes docs to a segment so it can be searched.
   It contains an inverted index.
   _ refreshed every second.
   Segments are immutable (cannot be changed).
   To expunge deleted, segments are merged.

   Filters are good all the time, and re-indexing is not necessary.

   Doc Values sits in separate file on disk
   At query time there is no memory overhead but is slower.

   The elected Master node does the cluster-level configuration.
   By default all nodes are master eligible.
   A cluster can potentially be split into two sub clusters (a split brain).


   http://blog.mikemccandless.com/2011/02/visualizing-lucenes-segment-merges.html

   Usually setup 3 dedicated master nodes after 10.
   This doesn't affect performance.


## References

http://jakege.blogspot.sg/2014/03/how-to-install-elasticsearch.html
How to Install Elasticsearch

https://www.youtube.com/watch?v=G56aE1kiOZw
Your Data, Your Search, Elasticsearch
SpringDeveloper
60K views

https://www.youtube.com/watch?v=bMi2g3uEAxU
ElasticSearch in Production: lessons learned
LuceneSolrRevolution
43K views


## More #

This is one of a series on Elastic Stack and monitoring:

{% include monitoring_links.html %}
