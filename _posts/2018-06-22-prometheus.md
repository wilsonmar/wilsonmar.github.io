---
layout: post
date: "2023-12-17"
file: "prometheus"
title: "Prometheus"
excerpt: "Collect metrics (for visualization by Grafana), analyze using PromQL coding, and identify alerts, free from CNCF, especially for Kubernetes"
tags: [Clouds, Monitoring, Analytics, CNCF, Kubernetes]
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

The name Prometheus comes from Greek mythology. The Titan Prometheus was an immortal servant of the gods, who stole fire and gave it to humankind. This changed the human race forever (for better and worse). But this made mankind dangerous to the gods. Ridley Scott named his <a target="_blank" href="https://www.imdb.com/title/tt1446714/trivia">2012 film "Prometheus"</a>, saying: "It's the story of creation; the gods and the man who stood against them." 

<a target="_blank" href="https://prometheus.io/docs/introduction/overview/">https://prometheus.io/docs/introduction/overview/</a><br />
The software named Prometheus began at SoundCloud in 2012, where ex-Google SREs (Site Reliability Engineers) adopted Google's Borgmon. 
Prometheus was open-sourced in 2015 at https://github.com/prometheus/prometheus/releases

Prometheus joined the CNCF (Cloud Native Computing Foundation) in 2016 as its second hosted project after Kubernetes. 
So as would be expected, Prometheus works with K8s.


## How it works

<a target="_blank" href="https://www.youtube.com/watch?v=5GYe_-qqP30&t=15m14s">VIDEO</a>: <a target="_blank" href="https://7451111251303.gumroad.com/l/wzcnen">Get the file used to create this diagram</a>:<br />
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1702812774/prometheus-arch-2940x1286_u2awin.png"><img alt="prometheus-arch-2940x1286.jpg" width="1531" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1702812774/prometheus-arch-2940x1286_u2awin.png"></a>

The main component of Prometheus is a <strong>run service</strong> (written in <a target="_blank" href="https://wilsonmar.github.io/golang/">Golang</a>) that pulls or <strong>scrapes</strong> (gathers) metrics on <strong>target hosts</strong> and applications using instrumentation <a href="#Exporters">job exporters</a> or other  <strong>custom metric providers</strong> to expose metrics, either directly or via an intermediary <strong>push gateway</strong> for short-lived jobs. 

Unlike the legacy "statsd" daemon which is concerned only with system-level metrics such as CPU, Memory, etc., the tool Prometheus (at <a target="_blank" href="https://prometheus.io/">https://prometheus.io</a>) gathers metrics from targets at the cluster, node, and microservice API levels.

In addition to static configurations, Prometheus can also <strong>discover targets</strong> to monitor with its <strong>Services Discovery</strong>.

Prometheus stores scraped samples locally in its own multi-dimensional numeric <strong>time-series database</strong>. Unlike central data collectors (such as Splunk), each Prometheus server runs distributed standalone so thus not dependent on network storage or other remote services. So it's available even when other parts of the infrastructure are broken.

   <ul><a target="_blank" href="https://app.pluralsight.com/ilx/video-courses/46bf9d2d-2947-4e0e-94cc-131715532a21/3e05432b-7c61-4eb1-83b1-7cef861beb0b/a90d6e30-c9f1-43ee-9778-5d5824a34690">NOTE</a>: A single Prometheus server can handle up to 1,000 scrape targets, at 100,000+ samples per second. But for larger deployments, multiple Prometheus servers can be deployed in a federated architecture, with a root Prometheus server scraping data from the child servers.
   </ul>

<strong>Rules</strong> running in the Prometheus database either aggregate and record new time series from existing data. 

   <ul>PROTIP: Strategically send operational data to a central (for review by SOC) and local server health data to a local Prometheus server. This would require diligence at managing disk space and retention. But sending data to a cloud service would require as much work be more expensive.
   </ul>

Prometheus provides multiple modes of graphing and dashboarding support, but also
exposes its time-series data to <strong>API clients</strong> such as <strong>Grafana</strong> which make <a href="#PromQL">PromQL</a> (Prometheus query language) to extract data in order to display <strong>visualizations</strong> on their websites. 

Because people can't be always watching such screens, Rules are also set in Prometheus to trigger <strong>alerts</strong> pushed to the <a href="#AlertManager">Alert Manager</a> which notifies end-points such as email, Slack, Pager Duty SMS, or other notification mechanisms.

   <ul>In a HA configuration, alerts are sent to multiple Alert Managers (with different external labels -a and -b), which deduplicate and fan out alerts to their configured receivers.
   </ul>

   <ul><a target="_blank" href="https://app.pluralsight.com/ilx/video-courses/46bf9d2d-2947-4e0e-94cc-131715532a21/3e05432b-7c61-4eb1-83b1-7cef861beb0b/ae204f21-9e52-4272-842b-eb155b77e3fb">NOTE</a>: Shard data.
   </ul>

Data stored on the Prometheus server should be considered temporary to receive data before being frequently shuttled to some long-term storage such as in a cloud.
Prometheus can write to dozens of storage backends, <strong>remote write</strong> (such as <strong>InfluxDB</strong>).

PROTIP: When using S3, Prometheus was designed to reference a static environment file. To prevent compromise, many organizations leave that file blank but use a utility such as HashiCorp Vault to create a new set of S3 credentials every time before running the backup.

PROTIP: In AWS S3, follow your organization's Least-Privilege security policies by not allowing a single account all Actions for Prometheus:

   <ul>"Action": [
      "s3:PutObject",
      "s3:GettObject",
      "s3:PutObjectAcl",
      "s3:DeleteObject",
      "s3:ListBucket",
      "s3:GetBucketLocation"
   ]
   </ul>


## PCA Exam

Answer 75% of 60 questions in 90-minutes to pass the $250 <a target="_blank" href="https://training.linuxfoundation.org/certification/prometheus-certified-associate/">
Prometheus Certified Associate (PCA) exam</a>. The exam's domains:

18% Observability Concepts
   * Metrics
   * Understand logs and events
   * Tracing and Spans
   * Push vs Pull
   * Service Discovery
   * Basics of SLOs, SLAs, and SLIs
   <br /><br />

20% Prometheus Fundamentals
   * System Architecture
   * Configuration and Scraping
   * Understanding Prometheus Limitations
   * Data Model and Labels
   * Exposition Format
   <br /><br />

28% <a href="#PromQL">PromQL</a>
   * Selecting Data
   * Rates and Derivatives
   * Aggregating over time
   * Aggregating over dimensions
   * Binary operators
   * Histograms
   * Timestamp Metrics
   <br /><br />

16% Instrumentation and Exporters
   * Client Libraries
   * Instrumentation
   * Exporters
   * Structuring and naming metrics
   <br /><br />

18% Alerting & Dashboarding
   * Dashboarding basics
   * Configuring Alerting rules
   * Understand and Use Alertmanager
   * Alerting basics (when, what, and why)
   <br /><br />

<hr />


## Courses

Bipin wrote <a target="_blank" href="https://devopscube.com/prometheus-certified-associate/">Prometheus Certified Associate (PCA) Exam Study Guide</a> by Bipin Upadhyay, who has a <a target="_blank" href="https://www.linkedin.com/in/bipinupadhyay/">LinkedIn profile</a> and <a target="_blank" href="https://devopscube.com/author/bipin/">blog</a> at DevOpsCube.com. He has a <a target="_blank" href="https://www.udemy.com/course/prometheus/">4-hour "Prometheus and Grafana - Monitoring Docker Containers"</a> video course on Udemy.
   * <a target="_blank" href="https://devopscube.com/install-configure-prometheus-linux/">Setup Prometheus on Linux</a>
   * <a target="_blank" href="https://devopscube.com/setup-prometheus-monitoring-on-kubernetes/">Setup Prometheus on Kubernetes</a>
   <br /><br />

By <a target="_blank" href="https://www.linkedin.com/in/alexphilip5/">Alex Philip</a>:
* <a target="_blank" href="https://devopscube.com/setup-prometheus-using-docker/">Setup Prometheus stack using Docker Compose</a> within AWS December 2, 2023 referencing folder 04-prometheus-observability-stack within<br /><a target="_blank" href="https://github.com/techiescamp/devops-projects/tree/main/04-prometheus-observability-stack">https://github.com/techiescamp/devops-projects</a>
   <pre>.
├── LICENSE
├── Makefile
├── README.md
├── SECURITY.md
├── alertmanager
│   └── alertmanager.yml
├── docker-compose.yml
├── prometheus
│   ├── alertrules.yml
│   ├── prometheus.yml
│   └── targets.json
└── terraform-aws
    ├── README.md
    ├── modules
    │   ├── ec2
    │   │   ├── main.tf
    │   │   ├── outputs.tf
    │   │   ├── user-data.sh
    │   │   └── variables.tf
    │   └── security-group
    │       ├── main.tf
    │       ├── outputs.tf
    │       └── variables.tf
    ├── prometheus-stack
    │   ├── main.tf
    │   ├── outputs.tf
    │   └── variables.tf
    └── vars
        └── ec2.tfvars
   </pre>


On Udemy, <a target="_blank" href="https://www.udemy.com/course/prometheus/">4-hour "Prometheus and Grafana - Monitoring Docker Containers"</a> video course by <a target="_blank" href="https://www.linkedin.com/in/wardviaene/">Edward Viaene</a> and <a target="_blank" href="https://www.linkedin.com/in/jornjambers/">Jorn Jambers</a>. They show <a target="_blank" href="https://www.udemy.com/course/monitoring-and-alerting-with-prometheus/learn/lecture/10630768#overview">install of Xinial Ubuntu within Digital Ocean's cloud</a>.

<a target="_blank" href="https://app.pluralsight.com/search/?q=Prometheus">On Pluralsight.com</a>, the <a target="_blank" href="https://app.pluralsight.com/paths/skill/event-monitoring-and-alerting-with-prometheus">9-hour Event Monitoring and Alerting with Prometheus path</a> has 4 courses.


By <a target="_blank" href="https://www.linkedin.com/in/eltonstoneman/">Elton Stoneman</a> (sixeyed.com):
* <a target="_blank" href="https://app.pluralsight.com/library/courses/getting-started-prometheus">Getting Started with Prometheus</a> Jun 23, 2020 shows use of a Windows machine .NET Core web app that has an optional "slow" response specification.

   <pre>docker run -d -p 8080:80 --name web sexeyed/prometheus-demo-web:windows</pre>

* <a target="_blank" href="https://app.pluralsight.com/library/courses/prometheus-grafana-building-dashboards-data">"Building Dashboards from Prometheus Data in Grafana"</a> Sep 22, 2020
<br /><br />

By <a target="_blank" href="https://www.linkedin.com/in/chris-james-green/">Chris Green</a> (direct-root.com):
* <a target="_blank" href="https://app.pluralsight.com/library/courses/prometheus-configuring-collect-metrics">Configuring Prometheus 2 to Collect Metrics</a> July 13, 2021
* <a target="_blank" href="https://app.pluralsight.com/library/courses/prometheus-grafana-building-dashboards-data">Building Dashboards from Prometheus Data in Grafana</a> Oct 25, 2021
* <a target="_blank" href="https://app.pluralsight.com/library/courses/prometheus-running-production">Running Prometheus in Production</a> Aug 12, 2021
<br /><br />

By <a target="_blank" href="https://www.linkedin.com/in/craig-d-golightly/">Craig Golightly</a>: 
* <a target="_blank" href="https://app.pluralsight.com/library/courses/monitoring-key-systems-prometheus-exporters">Monitoring Key Systems with Prometheus Exporters</a> 
* <a target="_blank" href="https://app.pluralsight.com/library/courses/alerting-issues-prometheus-alertmanager">Alerting on Issues with Prometheus Alertmanager</a> 
<br /><br />


https://github.com/ACloudGuru-Resources/DevOps-Monitoring-Deep-Dive
by https://www.linkedin.com/in/marcosmsouza/

<br /><br />

The <a target="_blank" href="https://www.pluralsight.com/cloud-guru/courses/prometheus-deep-dive">12-hour "DevOps Monitoring Deep Dive" video course</a> by Elle Krout references an <a target="_blank" href="https://lucid.app/lucidchart/918602e0-14b7-473c-92e7-bfbc4a15ba8f/view?page=j8p68BdUlMFS#">interactive Lucid diagram called "ProjectForethought"</a> for the NodeJs simple to-do list program called Forethought that is the subject of monitoring. 

1. Create within Linux Academy's <a target="_blank" href="https://playground.linuxacademy.com/server-list">Servers in the cloud</a>, the "DevOps Monitoring Deep Dive" distribution in a small-sized host.  https://github.com/linuxacademy/content-devops-monitoring-app

1. When "READY", click the Distribution name "DevOps Monitoring Deep Dive" for details.
1. Highlight and copy the Temp. Password by clicking the copy icon.
1. Click "Terminal" to open another browser window.
1. Type "cloud_user" to login:
1. Paste the password.
1. For a new password, I paste the password again, but add an additional character. 
1. Again to confirm.

1. When an environment is opened, highlight and copy this command:

   <pre><strong>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/Prometheus/prometheus-setup.sh)"</strong></pre>

1. Copy the password to your computer's Clipboard.
1. Switch to the Terminal to paste, which runs the script.
1. Paste the password when prompted.

1. To rerun the script, discard the current instance and create a new instance.

   The script is self-documented, but below are additional comments:


## Install

1. Identify your client machine's IP address:


## Configuration

1. Define storage location:

   <pre><strong>sudo mkdir -p /etc/prometheus</strong></pre>

1. Estimate space usage:

   size = time * sample rate * bytes per sample

1. Construct 

   Define where to store Time-series database:

   <pre><strong>--storage.tsdb.path</strong></pre>

   Define removal of data after this length of time:

   <pre><strong>--storage.tsdb.retention-time</strong></pre>

   Define removal of data after amount of space used (like in Splunk):

   <pre><strong>--storage.tsdb.retention-size</strong></pre>


1. <a target="_blank" href="https://app.pluralsight.com/ilx/video-courses/46bf9d2d-2947-4e0e-94cc-131715532a21/b2ce8f3a-830e-44a5-839e-77ac927f0629/f6ae685b-31df-4473-a3f6-e22a92c05ce8">VIDEO</a>: Verify release

   <pre><strong>curl -s localhost:9090/api/v1/status/buildinfo | python3 -m json.tool</strong></pre>

   <pre>{
   "status": "success",
   "data": {
      "version": "2.28.1",
      "revision": "d039c3e1c",
      "branch": "HEAD",
      "buildUser": "root@fa123cd1234",
      "buildDate": "2021-05-26T14:28:09Z",
      "goVersion": "go1.16.5"
   }
}
   </pre>

   ### Upgrade

   To ensure that data is not lost, the upgrade process is to stop the old Prometheus server, install the new version, and then start the new version.

1. Setup a symlink to the physical location of the binary using the <tt>ln</tt> (link) command:

   <pre>sudo ln -s /usr/local/bin/prometheus /usr/local/bin/prometheus-2.2.0.linux-amd64/prometheus
   </pre>

1. Define a special port for versions under test:

   <pre><strong>./prometheus --web.listen-address localhost:9091</strong></pre>

1. Start Prometheus server gracefully:

   <pre><strong>systemct stop prometheus</strong></pre>

1. Run:

   <pre>./prometheus --config.file prometheus.yml</pre>

   



## Sample app

   * it's based on the <a target="_blank" href="https://interactive.linuxacademy.com/diagrams/ProjectForethought.html">PaC (Project Forethought) application</a>, which is a simple to-do list program written in Node.js. It is Dockerized and deployed to a virtual machine. The application is instrumented with Prometheus client libraries to track metrics across the app. 

The $299 course "Monitoring Infrastructure and Containers with Prometheus" (LFS241) uses the PaC (Project Forethought) application, which is a simple to-do list program written in Node.js. It is Dockerized and deployed to a virtual machine. The application is instrumented with Prometheus client libraries to track metrics across the app.

1. Course Introduction
2. Introduction to Systems and Service Monitoring
3. Introduction to Prometheus
4. Installing and Setting Up Prometheus
5. Basic Querying
6. Dashboarding
7. Monitoring Host Metrics
8. Monitoring Container Metrics
9. Instrumenting Code
10. Building Exporters
11. Advanced Querying
12. Relabeling
13. Service Discovery
14. Blackbox Monitoring
15. Pushing Data
16. Alerting
17. Making Prometheus Highly Available
18. Recording Rules
19. Scaling Prometheus Deployments
20. Prometheus and Kubernetes
21. Local Storage
22. Remote Storage Integrations
23. Transitioning From and Integrating with Other Monitoring Systems
24. Monitoring and Debugging Prometheus
<br /><br />


## Docker

1. Confirm the creation of the existing Docker image:
 
   <pre>docker image list</pre>

   The response lists "forethought" as a Docker image.

1. List the contents of the forethought directory and subdirectories:
   
   <pre>ls -d</pre>

1. Deploy the web application to a container. Map port 8080 on the container to port 80 on the host:

   <tt>docker run --name ft-app -p 80:8080 -d forethought</tt>

1. Check that the application is working correctly by visiting the server's provided URL.

   In the script, this is done using a curl script and examining the HTML response.

1. Install

   NOTE: The Terminal is inside a Dockerized Ubuntu (18.04 Bionic Beaver LTS) image.
   So `apt-get` commands are used to install <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/4049/lesson/2/module/329">Prometheus</a>, <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/4049/lesson/3/module/329">Alertmanager</a>, and <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/4049/lesson/4/module/329">Grafana</a>.

   The infrastructure is monitored by using <a target="_blank" href="https://github.com/prometheus/node_exporter">Prometheus's Node Exporter</a> and viewed statistic about our CPU, memory, disk, file system, basic networking, and load metrics. Also monitored are contrainers being using on virtual machines.

   Once infrastructure monitoring is up and running, the basic Node.js application uses a Prometheus client libary to track metrics across the app.

   Finally, add recording and <a href="#Alerting">alerting</a> rules, build out a series of routes so any alerts created get to their desired endpoint. 

   The course also looks at creating persistent dashboards with Grafana and use its various graphing options to better track data.


## Kubernetes

Prometheus joined the CNCF (Cloud Native Computing Foundation) in 2016 as its second hosted project after Kubernetes. So naturally, Prometheus works with K8s. See <a target="_blank" href="https://github.com/kayrus/prometheus-kubernetes">https://github.com/kayrus/prometheus-kubernetes</a>.

In late 2016, CoreOS introduced the Operator pattern and released an example using that pattern in Prometheus Operatorn. It automatically creates/configures/manages Prometheus monitoring instances in clusters atop Kubernetes.
See <a target="_blank" href="https://github.com/coreos/prometheus-operator">https://github.com/coreos/prometheus-operator</a> and <a target="_blank" href="https://devops.college/prometheus-operator-how-to-monitor-an-external-service-3cb6ac8d5acb">https://devops.college/prometheus-operator-how-to-monitor-an-external-service-3cb6ac8d5acb</a>

PROTIP: Prometheus has not reached "1.0" yet so use of apt-get, yum, brew, installer packages are not recommended at this time for production use. But that hasn't stopped many from using it in production.

<pre>$ cd /tmp
$ wget https://github.com/prometheus/prometheus/releases/download/v2.2.0/prometheus-2.2.0.linux-amd64.tar.gz
$ tar -xzf prometheus-2.2.0.linux-amd64.tar.gz
&nbsp;
$ sudo chmod +x prometheus-2.2.0.linux-amd64/{prometheus,promtool} 
$ sudo cp prometheus-2.2.0.linux-amd64/{prometheus,promtool} /usr/local/bin/
$ sudo chown root:root /usr/local/bin/{prometheus,promtool}
&nbsp;
$ sudo mkdir -p /etc/prometheus
$ sudo vim /etc/prometheus/prometheus.yml
$ promtool check config prometheus.yml
&nbsp;
Checking prometheus.yml
SUCCESS: 0 rule files found
&nbsp;
$ prometheus --config.file "/etc/prometheus/prometheus.yml" &
</pre>

## Ansible installer

Paweł Krupa (<a target="_blank" href="https://twitter.com/paulfantom">@paulfantom</a>, author of the <a target="_blank" href="https://paulfantom.github.io/workshop-docker/#/1">Docker Workshop</a>) and Roman Demachkovych (<a target="_blank" href="https://twitter.com/rdemachkovych">@rdemachkovych</a>), together as Cloud Alchemy,
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

<a target="_blank" href="https://travis-ci.org/cloudalchemy/demo-site">https://travis-ci.org/cloudalchemy/demo-site</a>


## Starting Prometheus

To run Prometheus after downloading the Docker image from the "prom" account in Dockerhub:

   <pre><strong>docker run -p 9090:9090 -v /tmp/prometheus.yml:/etc/prometheus.yml prom/prometheus</strong></pre>

   Start Docker and try again if you get this error message:

   <tt>docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?.</tt>

   The expected message is:

   <pre>msg="Server is ready to receive web requests."</pre>

   The location of the database and the retention period are controlled by command line options:
   Add <tt>--storage.tsdb.path</tt> for another path.
   Add <tt>--storage.tsdb.retention</tt> to specify another retention period than the default 15d (days).

2. Open a browser to see the log at:

   <a target="_blank" href="http://localhost:9090/metrics">http://localhost:9090/metrics</a> 

   There is no menu item to view the page.

3. Open a browser to see the Graph at the URL home page:

   <a target="_blank" href="http://localhost:9090/">http://localhost:9090</a>

   <img alt="prometheus-graph-menu-403x380-51898.jpg" width="403" src="https://user-images.githubusercontent.com/300046/41504993-ea9bcd8a-71bb-11e8-8070-72af4050c796.jpg">

   The above example are metrics for the Go language/virtual machine running locally.

   NOTE: <a target="_blank" href="https://prometheus.io/docs/introduction/overview/">https://prometheus.io/docs</a> contains docs. It says in 2012 <strong>SoundCloud</strong> wrote Prometheus in <a target="_blank" href="https://wilsonmar.github.io/golang/">Golang</a> and open sourced it at <a target="_blank" href="https://github.com/prometheus/">https://github.com/prometheus</a>.



### Graphing specs

4. TODO: Select "go_gc_duration_seconds" for the median, which is 50th quantile, specified as:

   <pre>rate(prometheus_tsdb_head_samples_appended_total[1m])</pre>
   
   Also:

   <pre>go_gc_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.5"}</pre>

   See <a target="_blank" href="https://prometheus.io/docs/prometheus/latest/storage/">https://prometheus.io/docs/prometheus/latest/storage</a>

5. Press Execute.
6. Click "Graph".

   Notice the granularity of timing on the horizontal axis. Thousands of a second.


   ### Configuring Prometheus.yml

5. Open a browser to <a target="_blank" href="http://localhost:9090/config/">http://localhost:9090/config</a>

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

<hr />

## App Metrics

<a target="_blank" href="https://landing.google.com/sre/book/chapters/monitoring-distributed-systems.html#xref_monitoring_golden-signals">
The four golden signals of monitoring</a> begins with:

* <strong>Latency</strong>

   The time it takes to service a request. It’s important to distinguish between the latency of successful requests and the latency of failed requests. For example, an HTTP 500 error triggered due to loss of connection to a database or other critical backend might be served very quickly; however, as an HTTP 500 error indicates a failed request, factoring 500s into your overall latency might result in misleading calculations. On the other hand, a slow error is even worse than a fast error! Therefore, it’s important to track error latency, as opposed to just filtering out errors.

* <strong>Traffic</strong>

   A measure of how much demand is being placed on your system, measured in a high-level system-specific metric. For a web service, this measurement is usually HTTP requests per second, perhaps broken out by the nature of the requests (e.g., static versus dynamic content). For an audio streaming system, this measurement might focus on network I/O rate or concurrent sessions. For a key-value storage system, this measurement might be transactions and retrievals per second.

To identify bottlenecks, instead of beginning with given metrics (partial answers) and trying to work backwards,
the Utilization Saturation and Errors (USE) Method by Brendan Gregg (of Netflix), described at <a target="_blank" href="http://www.brendangregg.com/usemethod.html">http://www.brendangregg.com/usemethod.html</a>,  begins by posing questions off a checklist, and then seeks answers. To direct the construction of a checklist, which for server analysis can be used for quickly identifying resource bottlenecks or errors.

* <strong>Utilization</strong> 

   the average time that the resource was busy servicing work.

* <strong>Errors</strong>

   The rate of requests that fail, either explicitly (e.g., HTTP 500s), implicitly (for example, an HTTP 200 success response, but coupled with the wrong content), or by policy (for example, "If you committed to one-second response times, any request over one second is an error"). Where protocol response codes are insufficient to express all failure conditions, secondary (internal) protocols may be necessary to track partial failure modes. Monitoring these cases can be drastically different: catching HTTP 500s at your load balancer can do a decent job of catching all completely failed requests, while only end-to-end system tests can detect that you’re serving the wrong content.

* <strong>Saturation</strong>

   How "full" your service is. A measure of your system fraction, emphasizing the resources that are most constrained (e.g., in a memory-constrained system, show memory; in an I/O-constrained system, show I/O). Note that many systems degrade in performance before they achieve 100% utilization, so having a utilization target is essential. In complex systems, saturation can be supplemented with higher-level load measurement: can your service properly handle double the traffic, handle only 10% more traffic, or handle even less traffic than it currently receives? For very simple services that have no parameters that alter the complexity of the request (e.g., "Give me a nonce" or "I need a globally unique monotonic integer") that rarely change configuration, a static value from a load test might be adequate. As discussed in the previous paragraph, however, most services need to use indirect signals like CPU utilization or network bandwidth that have a known upper bound. Latency increases are often a leading indicator of saturation. Measuring your 99th percentile response time over some small window (e.g., one minute) can give a very early signal of saturation.


Predictive: saturation is the basis for projections of impending issues, such as "at the current rate, your database will fill its hard drive in 4 hours."


<a name="Exporters"></a>

## Exporters

Prometheus manages exporters to well-known services: StatsD, Node, AWS Cloudwatch, InfluxDB, JMX, SNMP, HAProxy, Consul, Memchached, Graphite, Blackbox, etc. See <a target="_blank" href="https://prometheus.io/docs/instrumenting/exporters">https://prometheus.io/docs/instrumenting/exporters</a>

The WMI Exporter provides system metrics for Windows servers.

Custom exporters are in the category of: database, messaging systems, APIs, logging, storage, hardware related, HTTP, etc.

Ports used by exporters:

* 9100 - <a href="http://github.com/prometheus/node_exporter">Node exporter</a>
* 9101 - <a href="http://github.com/prometheus/haproxy_exporter">HAProxy exporter</a>
* 9102 - <a href="http://github.com/prometheus/statsd_exporter">StatsD exporter</a>
* 9103 - <a href="http://github.com/prometheus/collectd_exporter">Collectd exporter</a>
* 9108 - <a href="http://github.com/prometheus/graphite_exporter">Graphite exporter</a>
* 9110 - <a href="https://github.com/prometheus/blackbox_exporter">Blackbox exporter</a>


## Node Exporter

The Prometheus <strong>Node Explorer</strong> has its own repo at <a target="_blank" href="https://github.com/prometheus/node_exporter">https://github.com/prometheus/node_exporter</a>

To download a release from GitHub:

   <a target="_blank" href="https://github.com/prometheus/node_exporter/releases">https://github.com/prometheus/node_exporter/releases</a>

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

   A sample response (at time of writing): 

<pre>
node_exporter, version 0.16.0 (branch: HEAD, revision: 6
e2053c557f96efb63aef3691f15335a70baaffd)
. . .</pre>

The node_exporter exporter runs, by default, on <strong>port 9100</strong> to expose metrics, but can be changed:

   <pre>node_exporter --web.listen-address=":9100" \
   --web.telemetrypath="/node_metrics"</pre>

And:

   <pre>scrape_configs:
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

<hr />

### Metric types

Counter increments

Gauge

Summary 


### Metrics exposition

Node Exporter: http://<em>server</em>:8080/metrics

<em>Space lines added for clarity</em>

   <pre># HELP node uname info from the uname system call
# TYPE node_uname_info gauge
node_uname_info{domainname="(none)",machine="x86_64",nodename="localhost.localdomain",release="4.15.0-20-generic",sysname="Linux",version="#21-Ubuntu SMP Tue Apr 24 06:16:15 UTC 2018"} 1
&nbsp;
   # HELP http_request_duration_microseconds The HTTP request latencies in microseconds.
# TYPE http_request_duration_microseconds summary
http_request_duration_microseconds{handler="prometheus",quantile="0.5"} 73334.095
&nbsp;
# HELP dotnet_total_memory_bytes Total known allocated memory
# TYPE dotnet_total_memory_bytes gauge
# TYPE node_filefd_allocated gauge
dotnet_total_memory_bytes 363222
&nbsp;
# HELP dotnet_collection_count_total GC collection count
# TYPE dotnet_collection_count_total counter
dotnet_collection_count_total{generation="0"} 0
dotnet_collection_count_total{generation="1"} 0
dotnet_collection_count_total{generation="2"} 0
&nbsp;
# HELP node_filefd_allocated File descriptor statistics: allocated.
# TYPE node_filefd_allocated gauge
node_filefd_allocated 1184
&nbsp;
# HELP node_disk_io_time_seconds_total Total seconds spent doing I/Os.
# TYPE node_disk_io_time_seconds_total counter
node_disk_io_time_seconds_total{device="sda"} 104.296
&nbsp;
# HELP node_disk_io_now The number of I/Os currently in progress.
# TYPE node_disk_io_now gauge
node_disk_io_now{device="sda"} 0
&nbsp;
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 1.048576e+06
&nbsp;
# HELP node_disk_io_time_weighted_seconds_total The weighted # of seconds spent doing I/Os.
# TYPE node_disk_io_time_weighted_seconds_total counter
node_disk_io_time_weighted_seconds_total{device="sda"} 104.296
&nbsp;
# HELP worker_queue_length The length of the queue of pending requests.
# TYPE worker_queue_length gauge
worker_queue_length 0
&nbsp;
# HELP worker_jobs_total Worker jobs handled
# TYPE worker_jobs_total counter
worker_jobs_tota{status="processed"} 1570222
worker_jobs_total{status="failed"} 122
&nbsp;
# HELP worker_jobs_active Worker jobs in process
# TYPE worker_jobs_active gauge
worker_jobs_active 10
&nbsp;
# HELP process_open_handless Number of open handles
# TYPE process_open_handless gauge
process_open_handless 10
&nbsp;
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 0.01
   </pre>


<a name="Operator"></a>

## Operator

TBD

<a name="AlertManager"></a>

## Alert Manager

The Alert Manager uses port 9093 by default.


<a name="Alerting"></a>

### Alert Manager

The Prometheus Alert Manager is used to generate alerts.

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

* routing
* sending
* grouping
* deduplication

Functions: 
* silencing
* inhibition

Under development: A cluster of Alertmanager instances form a mesh configuration ensure High Availability.

Integrations include:
* email
* hipchat
* pagerduty
* pushover
* slack
* opsgenie
* webhook
* victorops

<hr />

<a name="PromQL"></a>

## PromQL Query Language

Promethus provides multiple modes of graphing and dashboarding support, but also
exposes its time-series data to <strong>API clients</strong> such as <strong>Grafana</strong> which make <a href="#PromQL">PromQL</a> (Prometheus query language) to extract data in order to display <strong>visualizations</strong> on their websites. 

Core metrics generated by Prometheus:

   1. Counter of increasing value (such as packets received)
   2. Gauge  - a current value that increases or decreases (such as memory usage)
   3. Histogram is a graphical display of value dispersion
   4. Summary presents an overview of totals.
   <br />

<pre>histogram_quantile(
  0.90,
  sum without(code,instance)(
   rate(http_request_seconds[5m])
)))
</pre>

<hr />

## Client libraries

Embed official client libraries:

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
* <a href="https://github.com/siimon/prom-client">node.js prom-client</a>
* <a href="https://github.com/Jimdo/prometheus_client_php">PHP</a>
* <a href="https://github.com/pingcap/rust-prometheus">Rust</a>

## Video courses

If you have a subscription to OReilly.com, <a target="_blank" href="https://www.linkedin.com/in/sandervanvugt/">Sander van Vugt</a> has a <a target="_blank" href="https://learning.oreilly.com/videos/kubernetes-and-cloud/9780137993413/">video course</a> on Kubernetes and Cloud Native Associate (KCNA) published by Pearson IT Certification. He also has a 
<a target="_blank" href="https://learning.oreilly.com/live-events/kubernetes-and-cloud-native-associate-kcna-crash-course/0636920074599/">live course 6-10am MT Dec 1 & 2, 2022</a>.

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

LinuxAcademy video hands-on courses: 

* <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/4049/lesson/1/module/329">Monitoring Infrastructure and Containers with Prometheus</a>: Prometheus is used to monitor infrastructure and applications at multiple levels: on the host itself, on any containers, and on the application. This hands-on lab addresses monitoring of virtual machine host and containers. It begins by setting up monitoring for a virtual machine using Prometheus's Node Exporter. Then set up container monitoring for the provided container using Google's <strong>cAdvisor</strong>. 

   View metrics in Prometheus across two levels of a system to track changes and view trends.

* <a target="_blank" href="https://beta.linuxacademy.com/#/hands-on-labs/details/fe6f98da-ab26-48a6-9b58-edc6b3c1d808">DevOps Monitoring Deep Dive</a> by Elle Krout
references an <a target="_blank" href="https://interactive.linuxacademy.com/diagrams/ProjectForethought.html">interactive Lucid diagram called "ProjectForethought"</a> for the NodeJs simple to-do list program called Forethought that is the subject of monitoring. 

   Create within Linux Academy's <a target="_blank" href="https://playground.linuxacademy.com/server-list">Servers in the cloud</a>, the "DevOps Monitoring Deep Dive" distribution in a small-sized host. It contains a Dockerized Ubuntu (18.04 Bionic Beaver LTS).

   So `apt-get` commands are used to install <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/4049/lesson/2/module/329">Prometheus</a>, <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/4049/lesson/3/module/329">Alertmanager</a>, and <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/4049/lesson/4/module/329">Grafana</a>.

   <tt>docker run --name ft-app -p 80:8080 -d forethought</tt>

   The infrastructure is monitored by using Prometheus's Node Exporter and viewed statistic about our CPU, memory, disk, file system, basic networking, and load metrics. Also monitored are contrainers being using on virtual machines.

   Once infrastructure monitoring is up and running, the basic Node.js application uses a Prometheus client libary to track metrics across the app.

   Finally, add recording and alerting rules, build out a series of routes so any alerts created get to their desired endpoint. 

   The course also looks at creating persistent dashboards with Grafana and use its various graphing options to better track data.



## Other notes

https://timber.io/blog/prometheus-the-good-the-bad-and-the-ugly/

https://eng.uber.com/m3/
Uber open-sourced their M3 Metrics platform for Prometheus in 2018
