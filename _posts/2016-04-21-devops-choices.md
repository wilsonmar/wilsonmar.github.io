---
layout: post
title: "DevOps Choices (a Plethora)"
excerpt: "You gotta have one of each. Or several."
tags: [devops]
date: "2016-04-21"
file: "devops-choices"
image:
# feature: pic-brown-horses-running-forward-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14724047/445df2f0-07d1-11e6-9c26-782291fe2b47.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This page is one of a [series on DevSecOps](/devsecops/).

There are many choices of specific technologies within
each category:

0. <a href="#DevProcess">Development process</a>
0. <a href="#DevOS">Developer laptop</a>

0. <a href="#MicroserviceMgmt">Microservice management</a>
0. <a href="#SingleSignOn">Single-Sign On Authentication</a>
0. <a href="#InputForms">Input formats</a>
0. <a href="#InputLocations">Input locations</a>

0. <a href="#VPN">VPN</a>
0. <a href="#CloudEnvs">Cloud environment</a>
0. <a href="#LoadBalancer">Load Balancer</a>
0. <a href="#CDN">Content Distribution Network</a>
0. <a href="#ServerOS">Server Operating System</a>
0. <a href="#SourceRepo">Source repository</a>
0. <a href="#BitRepository">Bit and Image repository</a>
0. <a href="#CITaskRunner">Continuous Integration Task Runner</a>
0. <a href="#BuildTool">Build tool</a>

0. <a href="#SpecRepo">Specifications repository</a>
0. <a href="#ProgrammingLanguages">Programming Languages</a>
0. <a href="#IDEs">Integrated Development Environments</a>
0. <a href="#StaticScanner">Static Code Scanner</a>
0. <a href="#UXDesignTools">UX Design Tools</a>
0. <a href="#Graphics">Graphics Processing</a>

0. <a href="#MobilePlatforms">Mobile platforms</a>
0. <a href="#MobileTesting">Mobile testing</a>
0. <a href="#UnitTesting">Unit/Functional testing</a>
0. <a href="#PerfTesting">Performance testing</a>
0. <a href="#DefectMgmt">Defect Management (ALM)</a>

0. <a href="#Logging">Logging and log management</a>
0. <a href="#DataVisualization">Visualization</a>
0. <a href="#In-MemoryDatabases">In-Memory Databases</a>
0. <a href="#Back-endDatabases">Back-end Databases</a>
0. <a href="#GeoDatabases">Geographic Databases</a>

0. <a href="#MessageQueuing">Message queuing</a>
0. <a href="#Notifications">Notifications</a>
0. <a href="#Email">Email & SMS</a>
0. <a href="#RESTAPI">REST API management</a>
0. <a href="#MachineLearning">Machine Learning</a>
0. <a href="#Others">Other technologies</a>

## Implications

So many choices lead to integration nightmares as many of the
pieces don't all work together easily.

There is wasted time learning a technology to later learn
that it can't be used (such as Windows Mobile).

Too many choices lead to conflict among people.

There are two extremes in how organizations cope with so many choices:

   * limit fragmentation (and costs) by enfocing available choices 

   * allow for individual experimentation for creativity.

Which really yields the fastest speed to market
and quality?

Which yield a <strong>fragile</strong> environment?

<hr />

## Development environment:

   <a name="DevProcess"></a>

### Development process

Boards, burn-down charts.

   * Scrum
   * Kanban
   * Lean
   * Atlassian JIRA 
   * etc.

   <a name="DevOS"></a>

### Developer laptop

   * Apple Macintosh OSX
   * Microsoft Windows 7
   * Microsoft Windows 10
   * Tablet?

   <a name="MicroserviceMgmt"></a>

### Microservice management

   * Docker
   * Vagrant (on Macs)
   * Mesos (open source)
   * Marathon
   * Docker Swarm
   * Kubernetes
   * VMWare vRealize suite (vRA, vRO)
   * etc.

   <a name="SingleSignOn"></a>

### Single-Sign On Authentication / User Management

   * Forgerock (federated)
   * Okta
   * LDAP
   * ASP.Net Identity 
   * PKI/encryption CA server
   * OAuth0 (SaaS)
   * OAuth1 (PKI certificates)
   * OAuth2 (SHA1)
   * etc.

   <a name="InputForms"></a>

### Input formats

   * CSV, JSON, XML, YML, config
   * Google Sheet (online)
   * Excel .xlsx, .xls (Microsoft Office, Office365)
   * Word .docx, .doc (Microsoft Office, Office365)

   <a name="InputLocations"></a>

### Input cloud locations

   * Dropbox
   * Box
   * Google Drive
   * Microsoft OneCloud
   * etc.

## Servers

   * HP
   * Dell
   * IBM

   <a name="VPN"></a>

### VPN (Virtual Private Network)

   * Cisco
   * etc.

   <a name="CloudEnvs"></a>

### Cloud environment

   * AWS is the most popular, most expensive
   * Microsoft Azure 
   * Google Cloud
   * Heroku (runs in AWS)
   * Rackspace (runs in AWS)

   * HP private cloud
   * Red Hat OpenStack
   * Oracle
   * etc.

   <a name="LoadBalancer"></a>

### Load Balancer

   * F5
   * etc.

   <a name="CDN"></a>

### Content Distribution Network

   * GitHub Issues (free)
   * Amazon EC2 (subscription)
   * Google (subscription)
   * etc.

   <a name="ServerOS"></a>

### Server Operating System

   * Shell scripts
   * CentOS (open source)
   * Ubuntu (open source)
   * RedHat Enterprise Linux (licensed)
   * etc.

   <a name="SourceRepo"></a>

### Source repository

   * GitHub (the most popular, supported by AWS CodePipeline)
   * Bitbucket
   * Stash (Atlassian)
   * Subversion
   * Mercurial (hg)
   * Perforce
   * Assembla
   * BeanstalkApp
   * Codebase
   * Gitlab
   * Gitorious
   * ProjectLocker
   * Kiln
   * Solano (supported by AWS CodePipeline)
   * <a target="_blank" href="https://aws.amazon.com/codecommit">CodeCommit</a> in AWS cloud
   * etc.

   <a name="BitRepository"></a>

### Bit and Image Repository

   * Artifactory (open source)
   * Nexus
   * etc.

   <a name="CITaskRunner"></a>

### Task runner CI

   * Jenkins (licensed Cloudbees SaaS)
   * CircleCI
   * TravisCI
   * Concourse (from )
   * Fabric
   * CodeShip.com
   * <a target="_blank" href="https://cruisecontrol.sourceforge.net/"> CruiseControl</a>
   * Bamboo from Atlassian (licensed)
   * TFS from Microsoft (licensed)
   * TeamCity from JetBrains (licensed)
   * Wercker (pronounced like worker)
   * AppVeyor
   * BuildForge

   <a name="BuildTool"></a>

### Build Tool

   * Ant for Java
   * NAnt for .NET
   * Phing for PHP
   * Rake for Ruby based on haml files.
   * Maven
   * Grunt, Gulp (for Node)
   * ActionScript (Mac)
   * etc.

   <a name="SpecRepo"></a>

### Specifications repository

   * Swagger
   * RAML
   * WADL
   * etc.

   <a name="ProgrammingLanguages"></a>

### Programming Languages

   * Scala is the new darling
   * Java continues to dominate

   * C# (ASP.NET or MVC) from Microsoft

   * Python
   * Perl
   * PHP

   * Clojure
   * Go (popular within Google)
   * etc.

   <a name="IDEs"></a>

### Integrated Development Environments

   * JetBrains
   * Eclipse (favored by Java)
   * Visual Studio with ReSharper, TestDriven.Net
   * etc.

   <a name="StaticScanner"></a>

### Static Code Scanner

   * custom for the language
   * SonarQube
   * Persoft
   * etc.

   <a name="UXDesignTools"></a>

### UX Design Tools

   * Axure
   * Photoshop PXD
   * etc.


   <a name="Graphics"></a>

### Graphics Processing

   * Adobe Photoshop
   * Sketch (Mac)
   * etc.

   <a name="MobilePlatforms"></a>

### Mobile platforms

   * Desktop (GitHub Electron)
   * Google Android (Java) native
   * Apple iOS native
   * Hybrid Web (Sencha and others based on Apache Cordova)
   * Generators (React Native from JavaScript v6)
   * etc.

   <a href="#MobileTesting"></a>

### Mobile testing

   * Appium (Java)
   * Perfecto (mobile device cloud)
   * SauceLabs
   * Amazon Device Cloud
   * etc.

   <a name="UnitTesting"></a>

### Unit & Functional testing

   * Karma with Jasmine
   * Selenium (Java, JavaScript, .NET, etc.)
   * <a target="_blank" href="http://www.manula.com/manuals/primatest">RedwoodHD</a>
   * Mocha
   * etc.

   <a name="PerfTesting"></a>

### Performance testing

   * JMeter (Java)
   * SOASTA (cloud subscription)
   * etc.

   <a name="#DefectMgmt"></a>

### Defect Management (ALM)

   * FogBugz
   * etc.

   <a name="Logging"></a>

### Logging and log mangement

   * Logstash / ElastiSearch (open source)
   * AppDynamics
   * NewRelic

   * SumoLogic (subscription)
   * AWS (subscription)
   * Splunk
   * etc.

   <a name="DataVisualization">

### Data Visualization

   * Kibana (from Elastisearch)
   * Tableau
   * Qlik
   * PowerBI
   * etc.

   <a name="In-MemoryDatabases"></a>

### In-Memory Databases

   * Redis
   * SQLite (mobile)
   * HTML5 local storage

   * Varnish
   * Memcached
   * etc.

   <a name="Back-endDatabases"></a>

### Back-end Databases

   * Cassandra
   * CouchDB
   * Neo4J graph database
   * MongoDB
   * SparkDB

   * PostgreSql
   * MySQL (local and in Amazon)
   * Microsoft SQL Server
   * Oracle
   * DynamoDB
   * etc.

   <a name="GeoDatabases"></a>

### Geographic Databases

   * Google Maps
   * Bing Maps
   * ESRI
   * Route optimization (machine learning)
   * etc.

   <a name="MessageQueuing"></a>

### Message queuing

   * ZeroMQ
   * Kafka
   * ActiveMQ
   * Amazon
   * MSMQ
   * TIBCO
   * etc.

   <a name="Notifications"></a>

### Notifications

   * PagerDuty
   * Zapier
   * etc.


   <a name="Email"></a>

### Email & SMS

   * Microsoft Exchange
   * Microsoft Sharepoint
   * SMS gateway server
   * Fax gateway server
   * etc.

   <a name="RESTAPI"></a>

### REST API management

   * Mulesoft
   * Mashery (Intel)
   * etc.

  <a name="MachineLearning"></a>

### Machine Learning

   * Tensorflow (Google)
   * Semantic Analysis
   * Recommender
   * etc.

  <a name="Others"></a>

### Other technologies

   * Text to speech
   * Computer vision (XBox)
   * Drones
   * Gaming (Unity)
   * GLib, Maya (motion graphics)
   * etc.


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
