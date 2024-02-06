---
layout: post
date: "2024-02-04"
file: "prometheus"
title: "Prometheus"
excerpt: "Collect metrics (for visualization by Grafana), analyze using PromQL coding, and identify alerts,  especially for Kubernetes (also from CNCF)."
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

This is a deep-dive into getting started using Prometheus in enterprise production.

## How it works

From the <a target="_blank" href="https://7451111251303.gumroad.com/l/wzcnen">PowerPoint file animations used to create</a> this <a target="_blank" href="https://www.youtube.com/watch?v=5GYe_-qqP30&t=15m14s">VIDEO</a> and diagram:<br />
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1705122755/prometheus-flow-1739x838_ugraxn.png"><img alt="prometheus-flow-240113-1739x838.png" width="1739" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1705122755/prometheus-flow-1739x838_ugraxn.png"></a>

1. The core component of Prometheus is a <strong>server service</strong>. (written in <a target="_blank" href="https://wilsonmar.github.io/golang/">Golang</a>), so there are no additional VM installs like with Java, Python, etc.

1. Installers for Prometheus have been created in <a href="#Homebrew">Homebrew for macOS</a>, Ubuntu, and Windows. Commands to invoke them, along with sample configuration files are in a sample project GitHub repo. 

1. Prometheus is configured by editing the <tt>prometheus.yaml</tt> file. One comes with the installer, but you should have a customized file in each app github repo. Start the server.

1. The Prometheus server sends HTTPS GET requests to <strong>scrape</strong> (pull) metrics from <strong>target hosts</strong> defined in its <tt>targets.json</tt> file. In addition to statically-defined targets, 

1. Targets can be discovered by <strong>Service Discovery</strong> such as DNS, <a target="_blank" href="https://kubernetes.io/docs/concepts/services-networking/service/">Kubernetes Services</a>, or HashiCorp Consul services. The frequency of scraping and other settings are defined in the <tt>prometheus.yml</tt> file.

1. Each target interacts with Prometheus through a <a href="#Exporters">job exporter</a> service installed on each host. There is a <a href="#WMI+Exporter">WMI exporter on Windows</a> and another type of exporter on Linux.
1. This can be done via an intermediary <strong>push gateway</strong> for short-lived jobs. 

1. Exporters reference <strong>custom metric providers</strong> which expose specific metrics. 

1. Unlike the legacy <tt>statsd</tt> daemon which is concerned only with system-level metrics such as CPU, Memory, etc., the tool Prometheus (at <a target="_blank" href="https://prometheus.io/">https://prometheus.io</a>) gathers metrics from targets at the cluster, node, and microservice API levels.

   <a target="_blank" href="https://app.pluralsight.com/ilx/video-courses/46bf9d2d-2947-4e0e-94cc-131715532a21/3e05432b-7c61-4eb1-83b1-7cef861beb0b/a90d6e30-c9f1-43ee-9778-5d5824a34690">NOTE</a>: A single Prometheus server can handle up to 1,000 scrape targets, at 100,000+ samples per second. But for larger deployments, multiple Prometheus servers can be deployed in a federated architecture, with a root Prometheus server scraping data from the child servers.

1. Prometheus stores scraped samples locally in its own multi-dimensional numeric <strong>time-series database (TSDB)</strong>. 

1. <strong>Rules</strong> defined in the Prometheus TSDB can be defined with filtering and aggregate new time series from data.

   Each Prometheus server runs distributed standalone so thus not dependent on network storage or other remote services. So it's available even when other parts of the infrastructure are broken.

   PROTIP: Data on Prometheus servers should be considered <strong>short-lived (temporary)</strong> because data on it can be lost if the server is restarted. 

1. Prometheus exposes its time-series data to a variety of <strong>API clients</strong> making <a href="#PromQL">PromQL</a> (Prometheus Query Language) statements which extract data. 

1. Many enterprises have API clients go through an API Gateway to enforce strong authentication and traffic limits from specific users.

1. Data on Prometheus should be frequently sent to a long-term storage system such as AWS S3, <a target="_blank" href="https://www.influxdata.com/">InfluxDB</a>, <a target="_blank" href="https://www.elastic.co/products/elasticsearch">Elasticsearch</a>, <a target="_blank" href="https://wilsonmar.github.io/microsoft-fabric/">Microsoft Fabric</a>, etc.

   PROTIP: Sending operational data to a <strong>central enterprise repository</strong> would enable a central SOC (Security Operations Center) to <strong>correlate events</strong> from throughout the enterprise and outside the enterprise. This approach does require diligence at managing disk space and retention.

1. PROTIP: To minimize training and confusion, enterprise organizations typically have a preferred set of tools for <strong>analytics</strong> processing to generate <strong>graphs</strong> and <strong>dashboards</strong> for visualization.

1. The same vendor who created Prometheus also created <a target="_blank" href="https://grafana.com/">Grafana</a> to present <strong>dashboards</strong> to visualize data. 

   <a target="_blank" href="https://app.pluralsight.com/ilx/video-courses/46bf9d2d-2947-4e0e-94cc-131715532a21/3e05432b-7c61-4eb1-83b1-7cef861beb0b/ae204f21-9e52-4272-842b-eb155b77e3fb">NOTE</a>: Grafana can also be used to visualize data from other sources such as 
   * <a target="_blank" href="https://www.influxdata.com/">InfluxDB</a>, 
   * <a target="_blank" href="https://www.elastic.co/products/elasticsearch">Elasticsearch</a>, 
   * <a target="_blank" href="https://wilsonmar.github.io/microsoft-fabric/">Microsoft Fabric</a> running Cosmos DB, etc.
   <br /><br />

1. PROTIP: When using S3, by default, Prometheus references a static file of long-lived credentials for authentication. To prevent compromise, many organizations use a <strong>Credentials insert</strong> utility such as HashiCorp Vault which dynamically creates a new set of S3 credentials every time before running the backup.

1. PROTIP: Cloud storage mechanisms have a <strong>backup</strong> mechanism to <strong>restore</strong> data in case of failure. Practice restoring data to a new server to ensure that the backup mechanism actually works.

1. <a target="_blank" href="https://app.pluralsight.com/ilx/video-courses/46bf9d2d-2947-4e0e-94cc-131715532a21/3e05432b-7c61-4eb1-83b1-7cef861beb0b/ae204f21-9e52-4272-842b-eb155b77e3fb">NOTE</a>: The Prometheus server can be configured to <strong>read</strong> data from remote sources -- perform <strong>remote read</strong>.

1. Because people can't be always watching dashboard screens, <a href="#Alerting-Rules">Alerting Rules</a> are set to trigger <strong>alerts</strong> pushed to the <a href="#AlertManager">Alert Manager</a> which forwards to various <strong>end-points</strong> such as email, Slack, Pager Duty, SMS, OpsGenie, or other notification mechanisms.

   <a target="_blank" href="https://app.pluralsight.com/ilx/video-courses/46bf9d2d-2947-4e0e-94cc-131715532a21/3e05432b-7c61-4eb1-83b1-7cef861beb0b/ae204f21-9e52-4272-842b-eb155b77e3fb">NOTE</a>: In a HA configuration, alerts are sent to multiple Alert Managers (with different external labels -a and -b), which deduplicate and fan out alerts to their configured receivers. 

1. PROTIP: To minimize training and confusion, enterprise organizations typically have a preferred set of tools for <strong>analytics</strong> processing to generate <strong>graphs</strong> and <strong>dashboards</strong> for visualization.


Prometheus does not collect <strong>event</strong> data from operating systems or logs emitted from applications.



## Competitors

Prometheus is born of the cloud age which can accommodate large databases.
Prometheus stores data in a standalone time series database that passively store metrics.

Prometheus differs from previous fault-detection systems, like Nagios, which run periodic check scripts but keep little historical data.



<hr />

## Prometheus Origins

"Prometheus" is, <a target="_blank" href="https://www.wikiwand.com/en/Prometheus">in Ancient Greek mythology, a Titan of forethought, fire, and crafty counsel</a> -- an immortal servant of the gods. He stole fire and gave it to humankind. This changed the human race forever (for better and worse). But this made mankind dangerous to the gods. 

Ridley Scott named his <a target="_blank" href="https://www.imdb.com/title/tt1446714/trivia">2012 film "Prometheus"</a>, saying: "It's the story of creation; the gods and the man who stood against them." 

<a target="_blank" href="https://prometheus.io/docs/introduction/overview/">https://prometheus.io/docs/introduction/overview/</a><br />
The software named Prometheus began at SoundCloud in 2012, where ex-Google SREs (Site Reliability Engineers) adopted Google's Borgmon. 
Prometheus was open-sourced in 2015 at https://github.com/prometheus/prometheus/releases

Prometheus joined the CNCF (Cloud Native Computing Foundation) in 2016 as its second hosted project after Kubernetes. So as would be expected, Prometheus works with K8s.


<hr />

## PCA Exam

CNCF is under the Linux Foundation, which offers the <a target="_blank" href="https://training.linuxfoundation.org/certification/prometheus-certified-associate/">$250 Prometheus Certified Associate (PCA) exam</a> for those who (with one retake) in 90-minutes answer 75% of 60 questions correctly around these domains:

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
   * <a href="#Exporters">Exporters</a>
   * Structuring and naming metrics
   <br /><br />

18% Alerting & Dashboarding
   * Dashboarding basics
   * Configuring Alerting rules
   * Understand and Use Alertmanager
   * Alerting basics (when, what, and why)
   <br /><br />

   References:
   * https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-pca
   * https://docs.linuxfoundation.org/tc-docs/certification/frequently-asked-questions-pca
   * https://trainingportal.linuxfoundation.org/learn/course/prometheus-certified-associate-pca/exam/exam
   * https://medium.com/@onai.rotich/prometheus-certified-associate-a-comprehensive-guide-9c51638578d2


<hr />

## Courses

By Linux Foundation offers an online course in 2018.
* <a target="_blank" href="https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2">Candidate Handbook</a> which is now dated
They use the PSI BRIDGE Proctoring platform.


## Sample app

The $299 course “Monitoring Infrastructure and Containers with Prometheus” (LFS241) is based on the <a target="_blank" href="https://interactive.linuxacademy.com/diagrams/ProjectForethought.html">PaC (Project Forethought) application</a>, which is a simple to-do list program written in Node.js. It is Dockerized and deployed to a virtual machine. The application is instrumented with Prometheus client libraries to track metrics across the app. 

1. Course Introduction
2. Introduction to Systems and Service Monitoring
3. Introduction to Prometheus

4. Installing and Setting Up Prometheus

5. Basic Querying
6. Dashboarding
7. Monitoring Host Metrics
8. Monitoring Container Metrics
9. Instrumenting Code
10. Building <a href="#Exporters">Exporters</a>
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


### Promlabs

<a target="_blank" href="https://www.youtube.com/watch?v=gaUopdFlgko">VIDEO</a>: 
Prometheus co-founder <a target="_blank" href="https://www.linkedin.com/in/julius-volz/">Julius Volz (in Berlin, Germany)</a> authored the Linux Foundation's 2018 course which is now dated. So he created <a target="_blank" href="https://www.promlabs.com/">promlabs.com</a> to offer a <a target="_blank" href="https://training.promlabs.com/">$349 video training</a> on Prometheus monitoring fundamentals, tutorials, quizzes, tips, and best practices. It's based on  Ubuntu Linux 20.04. Julius also built <a target="_blank" href="https://promlens.com/">Promlens query builder</a>.

### KodeKloud

https://kodekloud.com/courses/prometheus-certified-associate-pca
KodeKloud PCA Certification Course

### OReilly.com

If you have a subscription to OReilly.com:

* <a target="_blank" href="https://www.linkedin.com/in/sandervanvugt/">Sander van Vugt</a> has a <a target="_blank" href="https://learning.oreilly.com/videos/kubernetes-and-cloud/9780137993413/">video course</a> on Kubernetes and Cloud Native Associate (KCNA) published by Pearson IT Certification. He also has a 
<a target="_blank" href="https://learning.oreilly.com/live-events/kubernetes-and-cloud-native-associate-kcna-crash-course/0636920074599/">live course 6-10am MT Dec 1 & 2, 2022</a>.

* <a target="_blank" href="https://learning.oreilly.com/library/view/hands-on-infrastructure-monitoring/9781789612349/" title="from Packt">11 hour Hands-On Infrastructure Monitoring with Prometheus 2019</a> by Joel Bastos, Pedro Araujo


<a name="Bipin"></a>

### By Bipin:

* <a target="_blank" href="https://devopscube.com/prometheus-certified-associate/">Prometheus Certified Associate (PCA) Exam Study Guide</a> by Bipin Upadhyay, who has a <a target="_blank" href="https://www.linkedin.com/in/bipinupadhyay/">LinkedIn profile</a> and <a target="_blank" href="https://devopscube.com/author/bipin/">blog</a> at DevOpsCube.com. 
* <a target="_blank" href="https://devopscube.com/install-configure-prometheus-linux/">Setup Prometheus on Linux</a>
<br /><br />

By Sean Bradley:
* <a target="_blank" href="https://www.udemy.com/course/prometheus/">4-hour "Prometheus and Grafana - Monitoring Docker Containers"</a> video course on Udemy Jan 2024.
<br /><br />

By <a target="_blank" href="https://www.linkedin.com/in/alexphilip5/">Alex Philip</a>:
* <a href="#Install-on-macOS">Install on macOS (here below)</a> his <a target="_blank" href="https://devopscube.com/setup-prometheus-using-docker/">Setup Prometheus stack using Docker Compose</a> within AWS December 2, 2023 referencing folder 04-prometheus-observability-stack within<br /><a target="_blank" href="https://github.com/techiescamp/devops-projects/tree/main/04-prometheus-observability-stack">https://github.com/techiescamp/devops-projects</a>

   <pre>.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
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

By <a target="_blank" href="https://www.linkedin.com/in/wardviaene/">Edward Viaene</a> and <a target="_blank" href="https://www.linkedin.com/in/jornjambers/">Jorn Jambers</a>:

   * On Udemy, <a target="_blank" href="https://www.udemy.com/course/prometheus/">4-hour "Prometheus and Grafana - Monitoring Docker Containers"</a> video course. They show <a target="_blank" href="https://www.udemy.com/course/monitoring-and-alerting-with-prometheus/learn/lecture/10630768#overview">install of Xinial Ubuntu within Digital Ocean's cloud</a>.
   <br /><br />

* <a target="_blank" href="https://app.pluralsight.com/search/?q=Prometheus">On Pluralsight.com</a>, the <a target="_blank" href="https://app.pluralsight.com/paths/skill/event-monitoring-and-alerting-with-prometheus">9-hour Event Monitoring and Alerting with Prometheus path</a> has 4 courses.

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

By <a target="_blank" href="https://www.linkedin.com/in/marcosmsouza/">Marcos Souza</a>:

   * https://github.com/ACloudGuru-Resources/DevOps-Monitoring-Deep-Dive
   <br /><br />

By Elle Krout:

   * The <a target="_blank" href="https://www.pluralsight.com/cloud-guru/courses/prometheus-deep-dive">12-hour "DevOps Monitoring Deep Dive" video course</a> references an <a target="_blank" href="https://lucid.app/lucidchart/918602e0-14b7-473c-92e7-bfbc4a15ba8f/view?page=j8p68BdUlMFS#">interactive Lucid diagram called "ProjectForethought"</a> for the NodeJs simple to-do list program called Forethought that is the subject of monitoring. 
   <br /><br />

walidshaari/PrometheusCertifiedAssociate

edgarpf/prometheus-certified-associate

Al-HusseinHameedJasim/prometheus-certified-associate


<hr />

<a name="Homebrew"></a>

## Homebrew on macOS install

1. Install Homebrew using <a target="_blank" href="https://wilsonmar.github.io/macos-homebrew">my directions</a> for configuring PATH, etc.
1. Open a Terminal, at any folder, see information about the formula: 

   <pre><strong>brew info prometheus</strong></pre>

   The response at time of writing:

   <pre>==> prometheus: stable 2.49.1 (bottled)
Service monitoring system and time series database
https://prometheus.io/
Not installed
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/p/prometheus.rb
License: Apache-2.0
==> Dependencies
Build: gnu-tar ✘, go ✘, node ✔, yarn ✘
==> Caveats
When run from `brew services`, `prometheus` is run from
`prometheus_brew_services` and uses the flags in:
   /usr/local/etc/prometheus.args
&nbsp;
To start prometheus now and restart at login:
  brew services start prometheus
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/prometheus/bin/prometheus_brew_services
==> Analytics
install: 1,224 (30 days), 3,645 (90 days), 12,333 (365 days)
install-on-request: 1,224 (30 days), 3,645 (90 days), 12,332 (365 days)
build-error: 4 (30 days)
   </pre>

1. Install using the Homebrew formula:

   <pre><strong>brew install prometheus</strong></pre>

   The response at time of writing:

   <pre>
==> Downloading https://ghcr.io/v2/homebrew/core/prometheus/manifests/2.49.1
######################################################################################################################################### 100.0%
==> Fetching prometheus
==> Downloading https://ghcr.io/v2/homebrew/core/prometheus/blobs/sha256:dee352f2deef862dff57a254049859095fc6e682fe702cc8f190c6aedf8543b7
######################################################################################################################################### 100.0%
==> Pouring prometheus--2.49.1.ventura.bottle.tar.gz
==> Caveats
When run from `brew services`, `prometheus` is run from
`prometheus_brew_services` and uses the flags in:
   /usr/local/etc/prometheus.args
&nbsp;
To start prometheus now and restart at login:
  brew services start prometheus
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/prometheus/bin/prometheus_brew_services
==> Summary
🍺  /usr/local/Cellar/prometheus/2.49.1: 22 files, 235.2MB
==> Running `brew cleanup prometheus`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
   </pre>

1. Where was it installed?

   <pre><strong>which prometheus</strong></pre>

   On an Intel with AMD architecture chip:

   <pre>/usr/local/bin/prometheus</pre>

   On an Apple Silicon M1/M2/M3 ARM architecture chip:

   <pre>/usr/local/opt/prometheus</pre>

   BTW: <tt>./prometheus</tt> (with the <tt>./</tt>) is run when you are in a folder containing the executable.
   But that's not necessary because <tt>/usr/local</tt> is typically in the operating system $PATH environment variable.

1. Verify that the executable can be reached from any folder:

   <pre><strong>prometheus --version</strong></pre>

   Response at time of writing on an AMD machine:

   <pre>prometheus, version 2.49.1 (branch: non-git, revision: non-git)
  build user:       brew@Ventura
  build date:       20240115-16:56:27
  go version:       go1.21.6
  platform:         darwin/amd64
  tags:             netgo,builtinassets,stringlabels
   </pre>

1. List all the parameters, drag the right edge wider for:

   <pre><strong>prometheus --help</strong></pre>

   Response at time of writing on an AMD machine:

   <pre>usage: prometheus [&LT;flags>]
The Prometheus monitoring server
&nbsp;
Flags:
  -h, --[no-]help                Show context-sensitive help (also try --help-long and --help-man).
      --[no-]version             Show application version.
      --config.file="prometheus.yml"  
                                 Prometheus configuration file path.
      --web.listen-address="0.0.0.0:9090"  
                                 Address to listen on for UI, API, and telemetry.
      --web.config.file=""       [EXPERIMENTAL] Path to configuration file that can enable TLS or authentication.
      --web.read-timeout=5m      Maximum duration before timing out read of the request, and closing idle connections.
      --web.max-connections=512  Maximum number of simultaneous connections.
      --web.external-url=<em>URL</em>   The URL under which Prometheus is externally reachable (for example, if Prometheus is served via a reverse
                                 proxy). Used for generating relative and absolute links back to Prometheus itself. If the URL has a path
                                 portion, it will be used to prefix all HTTP endpoints served by Prometheus. If omitted, relevant URL components
                                 will be derived automatically.
      --web.route-prefix=<em>path</em>  Prefix for the internal routes of web endpoints. Defaults to path of --web.external-url.
      --web.user-assets=<em>path</em>   Path to static asset directory, available at /user.
      --[no-]web.enable-lifecycle  
                                 Enable shutdown and reload via HTTP request.
      --[no-]web.enable-admin-api  
                                 Enable API endpoints for admin control actions.
      --[no-]web.enable-remote-write-receiver  
                                 Enable API endpoint accepting remote write requests.
      --web.console.templates="consoles"  
                                 Path to the console template directory, available at /consoles.
      --web.console.libraries="console_libraries"  
                                 Path to the console library directory.
      --web.page-title="Prometheus Time Series Collection and Processing Server"  
                                 Document title of Prometheus instance.
      --web.cors.origin=".*"     Regex for CORS origin. It is fully anchored. Example: 'https?://(domain1|domain2)\.com'
      --storage.tsdb.path="data/"  
                                 Base path for metrics storage. Use with server mode only.
      --storage.tsdb.retention=STORAGE.TSDB.RETENTION  
                                 [DEPRECATED] How long to retain samples in storage. This flag has been deprecated, use
                                 "storage.tsdb.retention.time" instead. Use with server mode only.
      --storage.tsdb.retention.time=STORAGE.TSDB.RETENTION.TIME  
                                 How long to retain samples in storage. When this flag is set it overrides "storage.tsdb.retention". If neither
                                 this flag nor "storage.tsdb.retention" nor "storage.tsdb.retention.size" is set, the retention time defaults to
                                 15d. Units Supported: y, w, d, h, m, s, ms. Use with server mode only.
      --storage.tsdb.retention.size=STORAGE.TSDB.RETENTION.SIZE  
                                 Maximum number of bytes that can be stored for blocks. A unit is required, supported units: B, KB, MB, GB, TB,
                                 PB, EB. Ex: "512MB". Based on powers-of-2, so 1KB is 1024B. Use with server mode only.
      --[no-]storage.tsdb.no-lockfile  
                                 Do not create lockfile in data directory. Use with server mode only.
      --storage.tsdb.head-chunks-write-queue-size=0  
                                 Size of the queue through which head chunks are written to the disk to be m-mapped, 0 disables the queue
                                 completely. Experimental. Use with server mode only.
      --storage.agent.path="data-agent/"  
                                 Base path for metrics storage. Use with agent mode only.
      --[no-]storage.agent.wal-compression  
                                 Compress the agent WAL. Use with agent mode only.
      --storage.agent.retention.min-time=STORAGE.AGENT.RETENTION.MIN-TIME  
                                 Minimum age samples may be before being considered for deletion when the WAL is truncated Use with agent mode
                                 only.
      --storage.agent.retention.max-time=STORAGE.AGENT.RETENTION.MAX-TIME  
                                 Maximum age samples may be before being forcibly deleted when the WAL is truncated Use with agent mode only.
      --[no-]storage.agent.no-lockfile  
                                 Do not create lockfile in data directory. Use with agent mode only.
      --storage.remote.flush-deadline=<em>duration</em>  
                                 How long to wait flushing sample on shutdown or config reload.
      --storage.remote.read-sample-limit=5e7  
                                 Maximum overall number of samples to return via the remote read interface, in a single query. 0 means no limit.
                                 This limit is ignored for streamed response types. Use with server mode only.
      --storage.remote.read-concurrent-limit=10  
                                 Maximum number of concurrent remote read calls. 0 means no limit. Use with server mode only.
      --storage.remote.read-max-bytes-in-frame=1048576  
                                 Maximum number of bytes in a single frame for streaming remote read response types before marshalling. Note
                                 that client might have limit on frame size as well. 1MB as recommended by protobuf by default. Use with server
                                 mode only.
      --rules.alert.for-outage-tolerance=1h  
                                 Max time to tolerate prometheus outage for restoring "for" state of alert. Use with server mode only.
      --rules.alert.for-grace-period=10m  
                                 Minimum duration between alert and restored "for" state. This is maintained only for alerts with configured
                                 "for" time greater than grace period. Use with server mode only.
      --rules.alert.resend-delay=1m  
                                 Minimum amount of time to wait before resending an alert to Alertmanager. Use with server mode only.
      --alertmanager.notification-queue-capacity=10000  
                                 The capacity of the queue for pending Alertmanager notifications. Use with server mode only.
      --query.lookback-delta=5m  The maximum lookback duration for retrieving metrics during expression evaluations and federation. Use with
                                 server mode only.
      --query.timeout=2m         Maximum time a query may take before being aborted. Use with server mode only.
      --query.max-concurrency=20  
                                 Maximum number of queries executed concurrently. Use with server mode only.
      --query.max-samples=50000000  
                                 Maximum number of samples a single query can load into memory. Note that queries will fail if they try to load
                                 more samples than this into memory, so this also limits the number of samples a query can return. Use with
                                 server mode only.
      --enable-feature= ...      Comma-separated feature names to enable. Valid options: agent, exemplar-storage, expand-external-labels,
                                 memory-snapshot-on-shutdown, promql-at-modifier, promql-negative-offset, promql-per-step-stats,
                                 promql-experimental-functions, remote-write-receiver (DEPRECATED), extra-scrape-metrics,
                                 new-service-discovery-manager, auto-gomaxprocs, no-default-scrape-port, native-histograms, otlp-write-receiver.
                                 See https://prometheus.io/docs/prometheus/latest/feature_flags/ for more details.
      --log.level=info           Only log messages with the given severity or above. One of: [debug, info, warn, error]
      --log.format=logfmt        Output format of log messages. One of: [logfmt, json]
   </pre>

   PROTIP: An investment of time to get to know what parameters are available can come in handle (less stress for you) during troubleshooting.

   <tt>--enable-feature=exemplar-storage</tt> enables (currently experimental) <a target="_blank" href="https://prometheus.io/docs/instrumenting/exposition_formats/#exemplars-experimental">exposition format examplars</a>.


### Clone Custom Project

   References:
   * https://prometheus.io/docs/prometheus/latest/configuration/configuration/
   * Good example: https://github.com/prometheus/prometheus/blob/release-2.49/config/testdata/conf.good.yml
   <br /><br />

1. Setup VSCode or whatever IDE you prefer to use.
1. Setup Git global configurations, including SSH and GPG for a verified connection to GitHub.com
1. Create a folder where you can clone a repo into.
1. <a target="_blank" href="https://devopscube.com/setup-prometheus-using-docker/">Setup Prometheus stack using Docker Compose</a> within AWS December 2, 2023 referencing folder 04-prometheus-observability-stack within

   <pre><strong>git clone <a target="_blank" href="https://github.com/techiescamp/devops-projects/tree/main/04-prometheus-observability-stack">git@github.com:techiescamp/devops-projects.git</a> --depth 1
   </strong></pre>

1. Remove other DevOps project folders not relevant: ??? 

1. Set upstream to the original developer (which contains several DevOps projects):

   <pre><strong>git remote upstream -add https://github.com/wilsonmar/devops-projects 
   </strong></pre>

1. Open VSCode within the repo folder:

   <pre><strong>cd ~/github-wilsonmar/devops-projects/04-prometheus-observability-stack/
   </strong></pre>

1. Navigate 

   <pre><strong>cd 04-prometheus-observability-stack/prometheus</strong></pre>

1. Open VSCode within the repo folder:

   <pre><strong>code .</strong></pre>

   <pre>.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── Makefile
├── README.md
├── SECURITY.md
├── alertmanager
│   └── alertmanager.yml
├── docker-compose.yml
├── prometheus
│   ├── alertrules.yml
│   ├── <strong>prometheus.yml</strong>
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


   ### prometheus.yaml

1. Select file "prometheus.yml" to view/edit.

1. For comparison, a full sample file is at:

   https://github.com/prometheus/prometheus/blob/release-2.49/config/testdata/conf.good.yml

   The section headings:

   <pre>global:
   rule_files:
   remote_write:
   remote_read:
   scrape_configs:
     - job_name: ...
   alerting:
   storage:
   tracing:
   </pre>


   ### Start Prometheus

1. Navigate to your Prometheus folder.
   The server references configuration files named <tt>prometheus.yml</tt> 

1. At a folder containing <tt>prometheus.yaml</tt>, run the executable installed by brew:

   <pre><strong>prometheus</strong></pre>

   Alternately, to run Prometheus server using a custom config ymal file name:

   <pre><strong>./prometheus --config.file="prometheus-demo-a.yml"</strong></pre>

   <pre>
ts=2024-02-04T23:14:14.593Z caller=main.go:544 level=info msg="No time or size retention was set so using the default time retention" duration=15d
ts=2024-02-04T23:14:14.593Z caller=main.go:588 level=info msg="Starting Prometheus Server" mode=server version="(version=2.49.1, branch=non-git, revision=non-git)"
ts=2024-02-04T23:14:14.593Z caller=main.go:593 level=info build_context="(go=go1.21.6, platform=darwin/amd64, user=brew@Ventura, date=20240115-16:56:27, tags=netgo,builtinassets,stringlabels)"
ts=2024-02-04T23:14:14.593Z caller=main.go:594 level=info host_details=(darwin)
ts=2024-02-04T23:14:14.593Z caller=main.go:595 level=info fd_limits="(soft=524288, hard=unlimited)"
ts=2024-02-04T23:14:14.593Z caller=main.go:596 level=info vm_limits="(soft=unlimited, hard=unlimited)"
ts=2024-02-04T23:14:14.599Z caller=web.go:565 level=info component=web msg="Start listening for connections" address=0.0.0.0:9090
ts=2024-02-04T23:14:14.600Z caller=main.go:1039 level=info msg="Starting TSDB ..."
ts=2024-02-04T23:14:14.602Z caller=tls_config.go:274 level=info component=web msg="Listening on" address=[::]:9090
ts=2024-02-04T23:14:14.602Z caller=tls_config.go:277 level=info component=web msg="TLS is disabled." http2=false address=[::]:9090
ts=2024-02-04T23:14:14.606Z caller=head.go:606 level=info component=tsdb msg="Replaying on-disk memory mappable chunks if any"
ts=2024-02-04T23:14:14.608Z caller=head.go:687 level=info component=tsdb msg="On-disk memory mappable chunks replay completed" duration=306.061µs
ts=2024-02-04T23:14:14.608Z caller=head.go:695 level=info component=tsdb msg="Replaying WAL, this may take a while"
ts=2024-02-04T23:14:14.612Z caller=head.go:766 level=info component=tsdb msg="WAL segment loaded" segment=0 maxSegment=0
ts=2024-02-04T23:14:14.612Z caller=head.go:803 level=info component=tsdb msg="WAL replay completed" checkpoint_replay_duration=635.216µs wal_replay_duration=3.530458ms wbl_replay_duration=201ns total_replay_duration=4.53585ms
ts=2024-02-04T23:14:14.617Z caller=main.go:1060 level=info fs_type=1a
ts=2024-02-04T23:14:14.617Z caller=main.go:1063 level=info msg="TSDB started"
ts=2024-02-04T23:14:14.617Z caller=main.go:1245 level=info msg="Loading configuration file" filename=prometheus.yml
ts=2024-02-04T23:14:14.783Z caller=main.go:1282 level=info msg="Completed loading of configuration file" filename=prometheus.yml totalDuration=165.456586ms db_storage=6.275µs remote_storage=4.234µs web_handler=434ns query_engine=1.108µs scrape=162.131337ms scrape_sd=29.266µs notify=24.794µs notify_sd=7.148µs rules=2.483027ms tracing=14.689µs
ts=2024-02-04T23:14:14.783Z caller=main.go:1024 level=info msg="Server is ready to receive web requests."
ts=2024-02-04T23:14:14.783Z caller=manager.go:146 level=info component="rule manager" msg="Starting rule manager..."
   </pre>

   ### Debugging errors

1. If you see errors such as this:

   <pre>
ts=2024-02-04T23:15:42.822Z caller=notifier.go:530 level=error component=notifier alertmanager=http://127.0.0.1:9093/api/v2/alerts count=1 msg="Error sending alert" err="Post \"http://127.0.0.1:9093/api/v2/alerts\": dial tcp 127.0.0.1:9093: connect: connection refused"
ts=2024-02-04T23:16:57.812Z caller=notifier.go:530 level=error component=notifier alertmanager=http://127.0.0.1:9093/api/v2/alerts count=1 msg="Error sending alert" err="Post \"http://127.0.0.1:9093/api/v2/alerts\": dial tcp 127.0.0.1:9093: connect: connection refused"
   </pre>

   ???


<hr />

### Setup Go

<a target="_blank" href="https://wilsonmar.github.io/golang/">My instructions on how to setup Golang</a>


### Configuration

1. Identify your client machine's IP address:

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

   ### Upgrade data

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



### scrape_configs

On the Prometheus server, edit the <strong>prometheus.yml</strong> file to add a new scrape_configs section to recognize the exporter on host at 172.31.122.23:

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
  - job_name: 'node_exporter'
    static_configs:
    - targets: ['172.31.122.23:9100']
</pre>

Restart the Prometheus server to pick up the new configuration.


<hr />

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


<hr />

### Linux Metrics

https://training.promlabs.com/training/monitoring-linux-host-metrics


<hr />

## Monitoring Kubernetes

Prometheus joined the CNCF (Cloud Native Computing Foundation) in 2016 as its second hosted project after Kubernetes. So naturally, Prometheus works with K8s. 

blank" href="https://github.com/coreos/prometheus-operator">https://github.com/coreos/prometheus-operator</a> and <a target="_blank" href="https://devops.college/prometheus-operator-how-to-monitor-an-external-service-3cb6ac8d5acb">https://devops.college/prometheus-operator-how-to-monitor-an-external-service-3cb6ac8d5acb</a>

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

## Prometheus on Kubernetes

   * <a target="_blank" href="https://github.com/kayrus/prometheus-kubernetes">https://github.com/kayrus/prometheus-kubernetes</a>.
   * <a target="_blank" href="https://devopscube.com/setup-prometheus-monitoring-on-kubernetes/">Setup Prometheus on Kubernetes</a> by <a href="#Bipin">Bipin</a>
   <br /><br />

As with most things Kubernetes, a Helm chart can do it all:
   * <a target="_blank" href="https://www.youtube.com/watch?v=QoDqxm7ybLc">VIDEO</a>: Setup Prometheus Monitoring on Kubernetes using Helm and Prometheus Operator | Part 1 - by TechWorld with Nana 2020
   <br /><br />

https://gitlab.com/nanuchi/youtube-tutorial-series/-/blob/master/prometheus-exporter/install-prometheus-commands.md



## Starting Prometheus in Docker

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


<hr />

## Graphing specs

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

   The /targets page shows the most recent scrape error from among all targets that cannot be scraped.

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


   Although an Alertmanager is not required to run Prometheus,...


<hr />

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


### Command

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

## graph

<a target="_blank" href="https://www.youtube.com/watch?v=OxZmn4svOyA&t=6m13s">VIDEO</a>:
Type "prometheus" for the auto-complete to show the default raw metrics built-in:

   * prometheus_api_remote_read_queries
   * prometheus_build_info
   * prometheus_config_last_reload_success_timestamp_seconds
   * prometheus_config_last_reload_successful
   * prometheus_engine_queries
   * prometheus_engine_queries_concurrent_max
   * prometheus_engine_query_duration_seconds
   * prometheus_engine_query_duration_seconds_count
   * prometheus_engine_query_duration_seconds_sum
   * prometheus_engine_query_log_enabled
   * prometheus_engine_query_log_failures_total
   * prometheus_http_request_duration_seconds_bucket
   * prometheus_http_request_duration_seconds_count
   * prometheus_http_request_duration_seconds_sum
   * prometheus_http_requests_total
   * prometheus_http_response_size_bytes_bucket
   <br /><br />


<hr />

## App Instrumentation

   * https://training.promlabs.com/training/instrumenting-applications/
   <br /><br />

"Instrumentation" is the process of adding code to your application to expose metrics to Prometheus.


<hr />

<a name="Exporters"></a>

## Exporters

   * By <a target="_blank" href="https://www.linkedin.com/in/craig-d-golightly/">Craig Golightly</a> (seethatgo.com, @seethatgo): <a target="_blank" href="https://app.pluralsight.com/library/courses/monitoring-key-systems-prometheus-exporters">Monitoring Key Systems with Prometheus Exporters</a> Aug 12, 2020
   * <a target="_blank" href="https://prometheus.io/docs/instrumenting/exporters">https://prometheus.io/docs/instrumenting/exporters</a>
   <br /><br />

Exporters are installed on servers to translate existing metrics into a format that Prometheus can scrape. Stock exporters are provided at: https://prometheus.io/download/#prometheus
listed here by default port number:
   * 9100 - <a href="http://github.com/prometheus/node_exporter">node_exporter</a> - <a href="#node_exporter">more</a>
   * 9101 - <a target="_blank" href="http://github.com/prometheus/haproxy_exporter">HAProxy exporter</a>
   * 9102 - <a target="_blank" href="http://github.com/prometheus/statsd_exporter">statsd_exporter</a>
   * 9103 - <a target="_blank" href="http://github.com/prometheus/collectd_exporter">collectd_exporter</a> (accepts collectd stats via HTTP POST)
   * 9104 - <a target="_blank" href="https://github.com/prometheus/mysqld_exporter">mysqld_exporter</a> <a href="#MySQL">setup</a>
   * 9108 - <a target="_blank" href="http://github.com/prometheus/graphite_exporter">graphite_exporter</a>
   * 9110 - <a target="_blank" href="https://github.com/prometheus/blackbox_exporter">blackbox_exporter</a> [<a target="_blank" href="https://training.promlabs.com/training/probing-services-blackbox-exporter/training-overview/introduction">class</a>]
   * 9115 - Black Box (probe metrics to host URLs)
   * ???? - <a target="_blank" href="https://github.com/prometheus/consul_exporter">consul_exporter</a> (see <a target="_blank" href="https://wilsonmar.github.io/hashicorp-consul/">my notes on Consul from HashiCorp</a>
   * memcached_exporter
   * ???? - <a target="_blank" href="https://github.com/prometheus/jmx_exporter">jmx_exporter</a>
   * ???? - <a target="_blank" href="https://github.com/prometheus/snmp_exporter">snmp_exporter</a>
   * ???? - <a target="_blank" href="https://github.com/prometheus/influxdb_exporter">influxdb_exporter</a>
   * MongoDB,
   * PostgreSQL,
   * Redis,
   * <a target="_blank" href="https://github.com/prometheus/haproxy_exporter">haproxy_exporter</a> has been archived.
   * <a href="#AWS">AWS</a> Cloudwatch
   * Azure cloud
   * GCP
   <br /><br />

Pre-defined third-party exporters and software exposing Prometheus metrics are listed at<br /><a target="_blank" href="https://prometheus.io/docs/instrumenting/exporters/">
https://prometheus.io/docs/instrumenting/exporters</a><br />

A whole list of 3rd-party exporters:<br />
https://prometheus.io/docs/instrumenting/exporters/#third-party-exporters

Some third-party software components or devices cannot be instrumented directly with Prometheus-compatible metrics.

### Best Practices

<a target="_blank" href="https://training.promlabs.com/training/instrumenting-applications/instrumentation-best-practices/naming-metrics">Metric naming</a>

<a target="_blank" href="https://training.promlabs.com/training/instrumenting-applications/instrumentation-best-practices/labels-and-scalability">Label usage</a>

<a name="MySQL"></a>

### MySQL setup

1. For the MySQL prompt:

   <pre><strong>mysql -u root -p</strong></pre>

1. Create a database user for the exporter to use.
1. Grant permissions
1. Provide credentials to exporter
<br /><br />

<pre>CREATE USER 'mysqld_exporter'@'localhost' IDENTIFIED BY 'password' WITH MAX_USER_CONNECTIONS 3; 
GRANT PROCESS, REPLICATION CLIENT, SELECT ON *.* TO 'mysqld_exporter'@'localhost';
FLUSH PRIVILEGES; 
export DATA_SOURCE_NAME='mysqld_exporter:password@(localhost:3306)/';
</pre>

https://github.com/orgs/prometheus/projects/8
is used to track work on new exporters.

https://training.promlabs.com/training/understanding-and-building-exporters/
Create exporters on more systems. 


<a name="WMI+Exporter"></a>

### WMI exporter on Windows

The WMI Exporter provides system metrics for Windows servers.


<a name="node_exporter"></a>

### Setup NodeJs Exporter

Node (JavaScript) is a popular language for web apps. 

Prometheus <strong>Node Explorer</strong> has its own repo at 

   <ul><a target="_blank" href="https://github.com/prometheus/node_exporter">https://github.com/prometheus/node_exporter</a>
   </ul>

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

<pre>node_exporter, version 0.16.0 (branch: HEAD, revision: 6
e2053c557f96efb63aef3691f15335a70baaffd)
. . .</pre>

The node_exporter exporter runs, by default, on <strong>port 9100</strong> to expose metrics, but can be changed:

   <pre>node_exporter --web.listen-address=":9100" \
   --web.telemetrypath="/node_metrics"
   </pre>

<pre># Get the exporter tar:
wget https://github.com/prometheus/node_exporter/releases/download/v*/node_exporter-*.*linux-amd64.tar.gz
# unpack:
tar xvfz node_exporter-*.*-amd64.tar.gz
# Move into folder:
cd node_exporter-*.*-amd64
# Get menu of parms and defaults:
./node_exporter --help
# Start the exporter:
./node_exporter --web.listen-address=":9100" > node.out 2>&1
</pre>

<pre># On a client machine, Check that metrics are publishing
curl http://localhost:9100/metrics
</pre>



<hr />

<a name="AWS"></a>

## AWS

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



### Monitoring others

systems, APIs, logging, storage, hardware related, HTTP, etc.


<hr />

### Creating Exporters

https://prometheus.io/docs/instrumenting/writing_exporters/


<hr />

## Metric types

<a target="_blank" href="https://www.youtube.com/watch?v=fhx0ehppMGM" title="Understanding Prometheus Metric Types | Meaning and Usage (Gauge, Counter, Summary, Histogram">VIDEO</a>:  by Julius. <a target="_blank" href="https://promlabs.com/blog/">Julius' blog</a>

<strong>Counter</strong> increments

   <ul><a target="_blank" href="https://www.youtube.com/watch?v=OxZmn4svOyA&t=6m30s">VIDEO</a>: 
   For the metric that tracks the total number of metrics Prometheus has ingested so far:
   PROTIP: Metrics that go up and up in a graph would eventually blow up. So it's better reported as a <strong>rate per minute</strong>. 
   More specifically, as the 90th percentile value on a histogram:
   &nbsp;
   <pre><strong>histogram_quantile(0.9, sum by(le, path) rate(demo_api_request_duration_seconds_bucket[5m])</strong></pre>
   </ul>

<strong>Gauge</strong>

   <ul>This metric type is for values which go up and down, such as a gasoline guage in vehicles.
   Each guage has a maximum capacity and usually a minimum of zero.
   </ul>

<strong>Summary</strong>

   <ul>
   </ul>


### Metrics exposition

Metrics are made available from a target's Node Exporter by exposing an unencrypted (HTTP) URL such as:

   <ul><pre><strong><a target="_blank" href="http://demo.promlabs.com:10000/metrics">http://demo.promlabs.com:10000/metrics</a><strong></pre></ul>

<em>Space lines added for clarity</em>

Each metric is preceded by comments starting with "#".

The format of the <a target="_blank" href="https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format">metrics exposition format</a> (shown below) has evolved into the <a target="_blank" href="https://openmetrics.io/">OpenMetrics CNCF open standard</a> defined at <a target="_blank" href="https://github.com/OpenObservability/OpenMetrics/">https://github.com/OpenObservability/OpenMetrics</a>, with discussions at <a target="_blank" href="https://groups.google.com/g/openmetrics/">https://groups.google.com/g/openmetrics</a>

   <pre># HELP node uname info from the uname system call
# TYPE node_uname_info gauge
node_uname_info{domainname="(none)",machine="x86_64",nodename="localhost.localdomain",release="4.15.0-20-generic",sysname="Linux",version="#21-Ubuntu SMP Tue Apr 24 06:16:15 UTC 2018"} 1
&nbsp;
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 32
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


* Timestamps are 64-bit integers in millisecond precision (tenths of a second), NOT nanosecond.
* Sample values are 64-bit floating point numbers (allowing integer precision up to 2^53). In the future, can be a values histogram.

* To colorize metrics output in browsers, install the "Prometheus Formatter" extension for <a target="_blank" href="https://chromewebstore.google.com/detail/prometheus-formatter/jhfbpphccndhifmpfbnpobpclhedckbb?pli=1">Chrome</a> and <a target="_blank" href="https://addons.mozilla.org/addon/prometheus-formatter/">Firefox</a> from https://github.com/fhemberger/prometheus-formatter created by fhemberger.


<hr />

<a name="Operator"></a>

## Operator

TBD

<a name="AlertManager"></a>

## Alert Manager

The Alert Manager uses port 9093 by default.


<a name="Alerting"></a>

### Alerting

https://training.promlabs.com/training/alerting-with-prometheus

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

   * https://training.promlabs.com/training/understanding-promql
   <br /><br />

Promethus provides multiple modes of graphing and dashboarding support, but also
exposes its time-series data to <strong>API clients</strong> such as <strong>Grafana</strong> which makes <a href="#PromQL">PromQL</a> (Prometheus query language) to extract data in order to display <strong>visualizations</strong> on their websites. 

* Selecting Data
* Rates and Derivatives
* Aggregating over time
* Aggregating over dimensions
* Binary operators
* Histograms
* Timestamp Metrics
<br /><br />

1. PROTIP: REMEMBER: 

   <a target="_blank" href="https://promlabs.com/promql-cheat-sheet/"><strong>https://promlabs.com/promql-cheat-sheet/</strong></a>

   * Selecting series
   * Rates of increase for counters
   * Aggregating over multiple series

   * Math between series
   * Filtering series by value
   * Set operations

   * Quantiles from histograms
   * Changes in gauges
   * Aggregating over time

   * Time
   * Dealing with missing data
   * Manipulating labels

   * Subqueries
   <br /><br />

1. <a target="_blank" href="https://training.promlabs.com/training/introduction-to-prometheus/prometheus-an-overview/integrated-alerting">Sample alert rule</strong> for when the <strong>per-path error rate ratios</strong> larger than a percentage:

   <pre>
alert: Many500Errors
# This is the PromQL expression that forms the "heart" of the alerting rule.
expr: |
  (
      sum by(path) (rate(http_requests_total{status="500"}[5m]))
    /
      sum by(path) (rate(http_requests_total[5m]))
  ) * 100 > 5
for: 5m
labels:
  severity: "critical"
annotations:
  summary: "Many 500 errors for path {{$labels.path}} ({{$value}}%)"
   </pre>

Types of metrics generated by Prometheus:

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

## Alerting Rules

https://prometheus.io/docs/practices/alerting/

https://prometheus.io/docs/alerting/latest/alertmanager/

https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/




<hr />

## Client libraries

https://prometheus.io/docs/instrumenting/clientlibs/

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


## Instrumentation

https://www.tigera.io/learn/guides/prometheus-monitoring/prometheus-metrics/

https://prometheus.io/docs/practices/instrumentation/

https://prometheus.io/docs/instrumenting/exporters/




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
Some Uber employees went on to found Chronosphere, which is a hosted Prometheus service.
   * https://chronosphere.io/resource/explainer-video-chronosphere-overview/
   * https://www.youtube.com/watch?v=jIrru50I-WY
   <br /><br />

https://www.youtube.com/watch?v=h4Sl21AKiDg&pp=ygUKcHJvbWV0aGV1cw%3D%3D
How Prometheus Monitoring works | Prometheus Architecture explained
by TechWorld with Nana

https://github.com/akeylesslabs/helm-charts/blob/main/monitoring/akeyless-zero-trust-web-access/grafana-dashboard.yaml

https://financialit.net/news/apis/how-stash-keeping-its-platform-secure-amid-drive-integration

https://mattermost.com/blog/sloth-for-slo-monitoring-and-alerting-with-prometheus/
https://github.com/slok/sloth with 
Thanos ruler evaluates rules and sends alerts to Alertmanager.
Prometheus and Grafana.
Alertmanager integrates notifications and alerts with the Mattermost Community Server and 
OpsGenie.

An example of what Metrics documentation about its <tt>scrape_config</tt> looks like:
https://docs-git-update-metrics-gatewaydio.vercel.app/using-gatewayd/global-configuration/metrics/

In the expression browser:
* The Graph view graphs a PromQL expression over time.
* The Table view provides a view of the output of a PromQL expression at one point in time.
<br /><br />

<hr />

## /tsdb_status

The TSDB Status page shows detailed statistics about individual metric names and labels:

* Top 10 <strong>label names with value count</strong> is used if some unintentional high-cardinality data (like public user IPs or full HTTP paths) are stored in label values, you will immediately see those problematic labels at the top here.

* Top 10 <strong>label names with high memory usage</strong> helps to identify label names that may not have a too high number of values associated with them, but where individual values are overly large and memory-consuming.

* Top 10 <strong>series count by metric names</strong> - to track down metric names that overall have a combination of labels attached to them that cause a large number of time series.

* Top 10 <strong>series count by label value pairs</strong> when a specific label combination at the top here, like a histogram metric name (__name__="my_histogram_bucket") that has a lot of bucket time series attached.


## Resources

<a target="_blank" href="https://www.youtube.com/watch?v=4HIn5SBGjCg&list=PL8cwSAAaP9W3uHIOFmZVQ2HBTXqob7T6P&index=17">TechnoTim</a> explains use of Rancher Monitoring from Helm charts in a <a target="_blank" href="https://wilsonmar.github.io/kubernetes/">Kubernetes</a> cluster.

https://www.youtube.com/watch?v=TyBsKMTDl1Q
Prometheus, Alert Manager, Email Notification & Grafana in Kubernetes Monitoring | Merciboi


<hr />

## More on Security #

This is one of a series on Security and DevSecOps:

{% include security_links.html %}