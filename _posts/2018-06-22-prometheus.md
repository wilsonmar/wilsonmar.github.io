---
layout: post
title: "Prometheus (CNCF with Kubernetes)"
excerpt: "Free monitoring"
tags: [Clouds, Monitoring, Analytics, CNCF, Kubernetes]
file: prometheus.md
image:
# ![dynatrace-per-minute-1900x500-162499.jpg
  feature: https://user-images.githubusercontent.com/300046/41830955-5de633b6-7801-11e8-9f92-c052dd9c2eba.jpg
  credit: Dynatrace
  creditlink: https://dynatrace.com
comments: true
---
<i>{{ page.excerpt }}</i>

{% include _toc.html %}

The tool Prometheus (at <a target="_blank" href="https://prometheus.io/">https://prometheus.io</a>)
gathers metrics from targets at the cluster, node, and microservice API levels,
unlike the legacy statsd daemon which is concerned only with system-level metrics such as CPU, Memory, etc.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/41593555-b83a2cce-737d-11e8-9d60-e8e2daf36c06.jpg"><img alt="prometheus-arch-837x372-30025.jpg" width="837" src="https://user-images.githubusercontent.com/300046/41593555-b83a2cce-737d-11e8-9d60-e8e2daf36c06.jpg"></a>
<a target="_blank" href="https://www.youtube.com/watch?v=5GYe_-qqP30&t=15m14s">*</a>

Prometheus <strong>scrapes</strong> (gathers) metrics on hosts and applications using instrumention <a href="#Exporters">job exporters</a> to expose metrics, either directly or via an intermediary <strong>push gateway</strong> for short-lived jobs. It stores all scraped samples locally and runs <strong>rules</strong> over the data to either aggregate and record new time series from existing data or to generate <strong>alerts</strong>. Prometheus comes with a multi-dimensional numeric <strong>time-series database</strong> which exposes its data in an <strong>API</strong> so that <strong>Grafana</strong> or other API consumers can use the Prometheus <strong>PromQL</strong> query language to extract data for visualization. Rules running in the Prometheus database can <strong>push</strong> (send) alerts to the Prometheus <strong>Alert Manager</strong> to forward to email, Slack, Pager Duty, and other notification mechanisms.


## Background

<a target="_blank" href="https://prometheus.io/docs/introduction/overview/">https://prometheus.io/docs</a> 
contains docs. It says in 2012 SoundCloud wrote Prometheus in <a target="_blank" href="https://wilsonmar.github.io/golang/">Golang</a> and open sourced it at <a target="_blank" href="https://github.com/prometheus/">https://github.com/prometheus</a>.

The name Prometheus comes from Greek mythology. The Titan Prometheus was an immortal servant of the gods, who stole and gave to humankind fire, which changed the human race forever (for better and worse). But this made mankind dangerous to the gods. Ridley Scott named his <a target="_blank" href="https://www.imdb.com/title/tt1446714/trivia">2012 film "Prometheus"</a>, saying: "It's the story of creation; the gods and the man who stood against them." 

## Competitive comparisons

Prometheus does not concern itself with logging (like Elastic) nor transaction tracing (like Zipkin).

Unlike central data collectors such as Splunk, each Prometheus server is distributed standalone and thus not dependent on network storage or other remote services. So it's available even when other parts of the infrastructure are broken.

Targets being monitored are discovered via <strong>service discovery</strong> as well as static configuration.

Promethus provides multiple modes of graphing and dashboarding support, but many use Grafana to do visualization by accessing an API Prometheus exposes for <strong>PromQL</strong>.

Metrics can be exported from Prometheus using the blackbox_exporter installed using https://github.com/cloudalchemy/ansible-blackbox-exporter or a node exported installed by https://github.com/cloudalchemy/ansible-node-exporter  PROTIP: When starting out, using Node exporter achieves less vendor lock-in associated with instrumenting code base for Prometheus.

<pre>
prometheus_alertmanager_config:
  - scheme: http
    static_configs:
      - targets: 
        - "localhost:9093"
&nbsp;
prometheus_scrape_configs:
- job_name: "node"
  file_sd_configs:
  - files:
    - "/etc/prometheus/file_sd/node.yml"
&nbsp;
prometheus_targets:
  node:
    - targets:
      - "localhost:9100"
</pre>

https://github.com/cloudalchemy/ansible-fluentd
Provision fluentd log collector

Its competitors are AWS CloudWatch, DataDog, Logz.io, Grafana, etc.

<a target="_blank" href="https://collectd.org/wiki/index.php/Plugin:Write_Prometheus">Collectd</a>
can be used to write Prometheus metrics.


## Installation/Deployment

Prometheus joined the CNCF (Cloud Native Computing Foundation) in 2016 as its second hosted project after Kubernetes. So naturally, Prometheus works with K8s. See https://github.com/kayrus/prometheus-kubernetes.

In late 2016, CoreOS introduced the Operator pattern and released an example using that pattern in Prometheus Operatorn. It automatically creates/configures/manages Prometheus monitoring instances in clusters atop Kubernetes.
See https://github.com/coreos/prometheus-operator 
and https://devops.college/prometheus-operator-how-to-monitor-an-external-service-3cb6ac8d5acb

PROTIP: Prometheus has not reached "1.0" yet so use of apt-get, yum, brew, installer packages are not recommended at this time.

<pre>
$ cd /tmp
$ wget https://github.com/prometheus/prometheus/releases/download/v2.2.0/prometheus-2.2.0.linux-amd64.tar.gz
$ tar -xzf prometheus-2.2.0.linux-amd64.tar.gz

$ sudo chmod +x prometheus-2.2.0.linux-amd64/{prometheus,promtool} 
$ sudo cp prometheus-2.2.0.linux-amd64/{prometheus,promtool} /usr/local/bin/
$ sudo chown root:root /usr/local/bin/{prometheus,promtool}

$ sudo mkdir -p /etc/prometheus
$ sudo vim /etc/prometheus/prometheus.yml
$ promtool check config prometheus.yml

Checking prometheus.yml
SUCCESS: 0 rule files found

$ prometheus --config.file "/etc/prometheus/prometheus.yml" &
</pre>

Paweł Krupa (@paulfantom, author of the <a target="_blank" href="https://paulfantom.github.io/workshop-docker/#/1">Docker Workshop</a>)
and Roman Demachkovych (@rdemachkovych), together as Cloud Alchemy,
defined a <a target="_blank" href="https://presentation.cloudalchemy.org/#/"> presentation</a> about their <a target="_blank" href="https://github.com/cloudalchemy/ansible-prometheus">
Ansible role for Prometheus</a>, with https://demo.cloudalchemy.org.

   * Zero-configuration deployment
   * Easy management of multiple nodes
   * Error checking
   * Multiple CPU architecture support

* versioning
* system user management
* CPU architecture auto-detection
* systemd service files
* linux capabilites support
* basic <a target="_blank" href="https://en.wikipedia.org/wiki/Security-Enhanced_Linux">SELinux</a> (Security-Enhanced Linux) security module support

https://travis-ci.org/cloudalchemy/demo-site


## Starting Prometheus

To run Prometheus after downloading the Docker image from the "prom" account in Dockerhub:

   <pre><strong>docker run -p 9090:9090 -v /tmp/prometheus.yml:/etc/prometheus.yml prom/prometheus</strong></pre>

   Start Docker and try again if you get this error message:

   <pre>docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?.</pre>

   The expected message is:

   <pre>msg="Server is ready to receive web requests."</pre>

   The location of the database and the retention period are controlled by command line options:
   Add <tt>--storage.tsdb.path</tt> for another path.
   Add <tt>--storage.tsdb.retention</tt> to specify another retention period than the default 15d (days).

2. Open a browser to http://localhost:9090/metrics to see the log.

   There is no menu item to view this page.

3. Open a browser to http://localhost:9090/ to see the Graph 

   <img alt="prometheus-graph-menu-403x380-51898.jpg" width="403" src="https://user-images.githubusercontent.com/300046/41504993-ea9bcd8a-71bb-11e8-8070-72af4050c796.jpg"></a>

   These are metrics for the Go language/virtual machine running locally.

   ### Graphing specs

4. TODO: Select "go_gc_duration_seconds" for the median, which is 50th quantile, specified as:

   <pre>rate(prometheus_tsdb_head_samples_appended_total[1m])</pre>
   
   Also:

   <pre>go_gc_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.5"}</pre>

   See https://prometheus.io/docs/prometheus/latest/storage/

5. Press Execute.
6. Click "Graph".

   Notice the granularity of timing on the horizontal axis. Thousands of a second.


   ### Configuring Prometheus.yml

5. Open a browser to http://localhost:9090/config

   <strong>prometheus.yml</strong> is the configuration file that contains these blocks: 
   global, rule_files, and scrape_configs. Optionally, there are remote_read, remote_write, alerting.

   <pre>global:
  evaluation_interval: 15s
  scrape_interval: 15s
  scrape_timeout: 10s
   &nbsp;
    external_labels:
    environment: localhost.localdomain
   </pre>

   In the global block, scrape_interval specifies the frequency of 15s (seconds) which Prometheus scrapes targets. (The default for this is every 60 seconds)

   The default evaluation_interval of 15s controls how often Prometheus evaluates rule files that specify creation of new time series and generation of alerts.

   Its uniqueness is a <strong>rules engine</strong> that enables alerts by the Prometheus Alertmanager installed separately.

   Recording rules enable precompute of frequent and expensive expressions and to save their result as derived time series data.

   ### Scrape configs

   This defines the job that <strong>scrapes</strong> the Prometheus web UI:

   <pre>
   scrape_configs:
     - job_name: 'prometheus'
       metrics_path: "/metrics"
       static_configs:
       - targets: ['localhost:9090']
  - job_name: node
    file_sd_configs:
    - files:
      - "/etc/prometheus/file_sd/node.yml"
   </pre>

   There can be several jobs named in a config, named x, y, and z in the sample config file.

## Local start

Alternately,

   PROTIP: Using <tt>/etc/prometheus</tt> would require sudo, but ~/.prometheus would not.

1. Create a folder to hold the Prometheus configuration file, then CD to it:

   <pre>cd ~ ; mkdir .prometheus ; cd .prometheus</pre>

2. Create a Prometheus configuration file in the folder or copy in then edit a full template example at:

   https://github.com/prometheus/prometheus/blob/release-2.3/config/testdata/conf.good.yml

3. Validate <a target="_blank" href="http://en.wikipedia.org/wiki/YAML">yaml syntax</a> online:

   https://github.com/adrienverge/yamllint

4. Validate for content using the promtool in the Prometheus bin folder:

   <pre><strong>promtool check config prometheus.yml</strong></pre>

   An example error message is:

   <pre>Checking prometheus.yml
  FAILED: parsing YAML file prometheus.yml: yaml: line 13: did not find expected '-' indicator
   </pre>

   The expected response is: "SUCCESS: 0 rule files found".

5. To run Prometheus locally in the directory containing the Prometheus binary:

   	<pre><strong>./prometheus --config.file=prometheus.yml</strong></pre>


   Additional parameters, for example:

   <pre>level=info ts=2017-10-23T14:03:02.274562Z caller=main.go:216 msg="Starting prometheus"...</pre>


   Althugh an Alertmanager is not required to run Prometheus,...


## Command

<pre>
# Ansible managed file. Be wary of possible overwrites.
[Unit]
Description=Prometheus
After=network.target
&nbsp;
[Service]
Type=simple
Environment="GOMAXPROCS=1"
User=prometheus
Group=prometheus
ExecReload=/bin/kill -HUP $MAINPID
ExecStart=/usr/local/bin/prometheus \
  --config.file=/etc/prometheus/prometheus.yml \
  --storage.tsdb.path=/var/lib/prometheus \     
  --storage.tsdb.retention=30d \                
  --web.listen-address=0.0.0.0:9090 \
  --web.external-url=http://demo.cloudalchemy.org:9090
&nbsp;
SyslogIdentifier=prometheus                                                                                              Restart=always
&nbsp;
[Install]
WantedBy=multi-user.target
</pre>

## App Metrics

<a target="_blank" href="https://landing.google.com/sre/book/chapters/monitoring-distributed-systems.html#xref_monitoring_golden-signals">
The four golden signals of monitoring</a> begins with:

* <strong>Latency</strong>

   The time it takes to service a request. It’s important to distinguish between the latency of successful requests and the latency of failed requests. For example, an HTTP 500 error triggered due to loss of connection to a database or other critical backend might be served very quickly; however, as an HTTP 500 error indicates a failed request, factoring 500s into your overall latency might result in misleading calculations. On the other hand, a slow error is even worse than a fast error! Therefore, it’s important to track error latency, as opposed to just filtering out errors.

* <strong>Traffic</strong>

   A measure of how much demand is being placed on your system, measured in a high-level system-specific metric. For a web service, this measurement is usually HTTP requests per second, perhaps broken out by the nature of the requests (e.g., static versus dynamic content). For an audio streaming system, this measurement might focus on network I/O rate or concurrent sessions. For a key-value storage system, this measurement might be transactions and retrievals per second.

To identify bottlenecks, instead of beginning with given metrics (partial answers) and trying to work backwards,
the Utilization Saturation and Errors (USE) Method by Brendan Gregg (of Netflix), described at 
<a target="_blank" href="http://www.brendangregg.com/usemethod.html">http://www.brendangregg.com/usemethod.html</a>,  begins by posing questions off a checklist, and then seeks answers.
directs the construction of a checklist, which for server analysis can be used for quickly identifying resource bottlenecks or errors.

* <strong>Utilization</strong> 

   the average time that the resource was busy servicing work.

* <strong>Errors</strong>

   The rate of requests that fail, either explicitly (e.g., HTTP 500s), implicitly (for example, an HTTP 200 success response, but coupled with the wrong content), or by policy (for example, "If you committed to one-second response times, any request over one second is an error"). Where protocol response codes are insufficient to express all failure conditions, secondary (internal) protocols may be necessary to track partial failure modes. Monitoring these cases can be drastically different: catching HTTP 500s at your load balancer can do a decent job of catching all completely failed requests, while only end-to-end system tests can detect that you’re serving the wrong content.

* <strong>Saturation</strong>

   How "full" your service is. A measure of your system fraction, emphasizing the resources that are most constrained (e.g., in a memory-constrained system, show memory; in an I/O-constrained system, show I/O). Note that many systems degrade in performance before they achieve 100% utilization, so having a utilization target is essential. In complex systems, saturation can be supplemented with higher-level load measurement: can your service properly handle double the traffic, handle only 10% more traffic, or handle even less traffic than it currently receives? For very simple services that have no parameters that alter the complexity of the request (e.g., "Give me a nonce" or "I need a globally unique monotonic integer") that rarely change configuration, a static value from a load test might be adequate. As discussed in the previous paragraph, however, most services need to use indirect signals like CPU utilization or network bandwidth that have a known upper bound. Latency increases are often a leading indicator of saturation. Measuring your 99th percentile response time over some small window (e.g., one minute) can give a very early signal of saturation.


Predictive: saturation is the basis for projections of impending issues, such as "at the current rate, your database will fill its hard drive in 4 hours."


<a name="Exporters"></a>

## Exporters

Prometheus manages exporters to well-known services: StatsD, Node, AWS Cloudwatch, InfluxDB, JMX, SNMP, HAProxy, Consul, Memchached, Graphite, Blackbox, etc. See https://prometheus.io/docs/instrumenting/exporters

Custom exporters are in the category of: database, messaging systems, APIs, logging, storage, hardware related, HTTP, etc.

Ports:

* 9100 - <a href="http://github.com/prometheus/node_exporter">Node exporter</a>
* 9101 - <a href="http://github.com/prometheus/haproxy_exporter">HAProxy exporter</a>
* 9102 - <a href="http://github.com/prometheus/statsd_exporter">StatsD exporter</a>
* 9103 - <a href="http://github.com/prometheus/collectd_exporter">Collectd exporter</a>
* 9108 - <a href="http://github.com/prometheus/graphite_exporter">Graphite exporter</a>
* 9110 - <a href="https://github.com/prometheus/blackbox_exporter">Blackbox exporter</a>


## Node Exporter

The Node Explorer has its own repo. Download from GitHub Release:

   https://github.com/prometheus/node_exporter/releases

<pre>
# TODO: Identify latest version URL in https://prometheus.io/download/#node_exporter
# TODO: Code different downloads for Darwin vs. other OS:
wget https://github.com/prometheus/node_exporter/releases/download/v0.16.0/node_exporter-0.16.0.linux-amd64.tar.gz
   # https://github.com/prometheus/node_exporter/releases/download/v0.16.0/node_exporter-0.16.0.darwin-386.tar.gz
   # v0.16.0 is dated 2018-05-15
tar -xzf node_exporter-*
sudo cp node_exporter-*/node_exporter /usr/local/bin/
</pre>

   <pre><strong>node_exporter --version</strong></pre>

   A sample response:

<pre>
node_exporter, version 0.16.0 (branch: HEAD, revision: 6
e2053c557f96efb63aef3691f15335a70baaffd)
. . .</pre>

The node_exporter exporter runs, by default, on port 9100 to expose metrics, but can be changed:

   node_exporter --web.listen-address=":9100" --web.telemetrypath="/node_metrics"

   <pre>
scrape_configs:
  - job_name: "prometheus"
    metrics_path: "/metrics"
    static_configs:
    - targets:
      - "localhost:9090"
  - job_name: node
    file_sd_configs:
    - files:
      - "/etc/prometheus/file_sd/node.yml"
   </pre>

### Metrics exposition format

   <pre>
# HELP http_request_duration_microseconds The HTTP request latencies in microseconds.
# TYPE http_request_duration_microseconds summary
http_request_duration_microseconds{handler="prometheus",quantile="0.5"} 73334.095
   </pre>

<a name="Operator"></a>

## Operator




<a name="Alerting"></a>

## Alerting

A sample config:

   <pre>alerting:
  alertmanagers:
  - scheme: https
    static_configs:
    - targets:
      - "1.2.3.4:9093"
      - "1.2.3.5:9093"
      - "1.2.3.6:9093"
   </pre>

routing
sending
grouping
deduplication

Functions: silencing, inhibition

Under development: A cluster of Alertmanager instances form a mesh configuration ensure High Availability.

Integrations include email
hipchat
pagerduty
pushover
slack
opsgenie
webhook
victorops

## Client libraries

Embed:

* <a href="https://github.com/prometheus/client_golang">Go</a>
* <a href="https://github.com/prometheus/client_java">Java or Scala</a>
* <a href="https://github.com/prometheus/client_python">Python</a>
* <a href="https://github.com/prometheus/client_ruby">Ruby</a>
<br /><br />

Unofficial third-party client libraries:

* <a href="https://github.com/aecolley/client_bash">Bash</a>
* <a href="https://github.com/jupp0r/prometheus-cpp">C++</a>
* <a href="https://github.com/deadtrickster/prometheus.cl">Common Lisp</a>
* <a href="https://github.com/deadtrickster/prometheus.ex">Elixir</a>
* <a href="https://github.com/deadtrickster/prometheus.erl">Erlang</a>
* <a href="https://github.com/fimad/prometheus-haskell">Haskell</a>
* <a href="https://github.com/knyar/nginx-lua-prometheus">Lua</a> for Nginx
* <a href="https://github.com/tarantool/prometheus">Lua</a> for Tarantool
* <a href="https://github.com/andrasm/prometheus-net">.NET / C#</a>
* <a href="https://github.com/siimon/prom-client">node.js</a>
* <a href="https://github.com/Jimdo/prometheus_client_php">PHP</a>
* <a href="https://github.com/pingcap/rust-prometheus">Rust</a>


## Resources

<a target="_blank" href="https://www.prometheusbook.com/">
"Monitoring with Prometheus" is 360 pages at https://prometheusbook.com</a> is by James Turnbull, who also wrote books about other DevOps tools: Kubernetes, Packer, Terraform, Logstash, Puppet, etc. based on his work as CTO at Kickstarter, VP of Services and Support at Docker, VP of Engineering at Venmo, and VP of Technical Operations at Puppet. The book is hands-on for Prometheus version 2.3.0 (build date 20171006-22:16:15) on a Linux distribution. However, the author promises updates even though he is busy as CTO at Empatico. Code for the book is at:

   * <a target="_blank" href="https://github.com/turnbullpress/prometheusbook-code">https://github.com/turnbullpress/prometheusbook-code</a> by the author.
   * https://github.com/yunlzheng/prometheus-book is a 3rd-party Chinese translation
   <br /><br />

Turnbull suggests monitoring for "correctness", not just their status, starting with business metrics, then application (https://landing.google.com/sre/book/chapters/monitoring-distributed-systems.html#xref_monitoring_golden-signals), then operating system metrics to avoid "cargo cult" delusions. An example is monitoring for rates of business transactions rather than server uptime.


Bryan Brazil blogs about Prometheus at https://www.robustperception.io/blog/
The blog mentions his trainings.
He is working on a <a target="_blank" href="https://www.safaribooksonline.com/library/view/prometheus-up/9781492034131/">on Safari Book "Prometheus: Up & Running"</a>.

paulfantom/workshop-docker


<a target="_blank" href="https://www.youtube.com/watch?v=PDxcEzu62jk">
Monitoring, the Prometheus Way  May 8, 2017</a>
by Julius Volz - Co-Founder, Prometheus

<a target="_blank" href="https://www.youtube.com/watch?v=5GYe_-qqP30">
Infrastructure and application monitoring using Prometheus</a>  at Devox UK May 17, 2017
by Marco Pas

LinuxAcademy video hands-on: <a target="_blank" href="https://beta.linuxacademy.com/#/hands-on-labs/details/fe6f98da-ab26-48a6-9b58-edc6b3c1d808">Monitoring Infrastructure and Containers with Prometheus</a>: Prometheus is able to monitor our infrastructure and applications at multiple levels: on the host itself, on any containers, and on the application. In this hands-on lab, we're going to address the first two options for monitoring: our virtual machine host and our containers. We'll first set up monitoring for our virtual machine by using Prometheus's Node Exporter, and then we'll set up container monitoring for the provided container using Google's cAdvisor. By the time we're done, we'll be able to view metrics across two levels of our system in Prometheus to track changes and view trends on our systems.