---
layout: post
title: "Hands-on DevSecOps Course (for PerfTest Shift-Left)"
excerpt: "Achieve performance engineering and testing at the end of every sprint"
tags: [DevOps, DevSecOps]
date: "2017-08-29"
file: "devsecops-perftest"
image:
# feature: pic white robots woman 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622167/45abd918-0585-11e6-8537-a58e0b55e3ec.jpg
  credit: Cyberconstruct.be
  creditlink: http://cyberconstruct.be/2015/02/digital-job-crafting/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Valuable Insights
Get <strong>hands-on</strong> experience with continuos integration using the latest versions of the most popular DevSecOps tools, all working together, end-to-end, in a set of servers participants control.

{% include whatever.html %}

Only this course provides participants a full set of <strong>several cloud-based servers</strong> to work on live during the class. This is an opportunity few get even with on-the-job experience.

See how the <a target="_blank" href="https://wilsonmar.github.io/ci-cd">21 groups of DevOps technologies</a> work together in a complete <strong>toolchain</strong> that builds and deploy software: AWS CLI, Git, GitHub/GitLab, Maven/Yarn, Nexus, Jenkins/Cloudbees, Vault, SonarQube, Selenium, Terraform.

Commentary during this "guided tour" include tips and tricks for moving organizations to the end-state shown -- for deep insight into both benefits and challenges related to agile automation in DevSecOps.

The "Sec" part of "DevSecOps" means security, which include scans of code for vulnerabilities, use of digital certificates to control access, and tools to manage secrets using secure vaults.

To ensure quality at speed, Agile software developers are increasingly required to include in each sprint automated performance status in their <a target="_blank" href="http://www.scaledagileframework.com/system-demo/">System Demo presentations</a>.

   The traditional approach of performance testing only before final release to production means that potentially major risks and technical debt can remain hidden. Here is how organizations make performance testing and engineering "shift-left" earlier in the software development lifecycle. 

   <amp-youtube data-videoid="ZG073qSgh_0" layout="responsive" width="480" height="270"></amp-youtube>
   VIDEO: https://youtu.be/ZG073qSgh_0

## Who Should Attend
This course is for anyone new to DevSecOps but experienced with information technology and software development. No specific prerequisites are assumed, and new technical concepts are explained. Executives, directors, managers, product owners, analysts, testers, programmers can all benefit from this first-hand experience.

## Editions of the course
There are several editions of this class, of different length:

* The <strong>half-day introduction</strong> provides an understanding of key DevSecOps buzzwords and concepts possible only from seeing the various tools all working together. Participants pull from then push to GitHub, edit files, and see first-hand programs built and software tested automatically. Participants leave with an understanding of the meaning behind <a target="_blank" href="https://quizlet.com/222277746/devsecops-acronyms-and-buzzwords-flash-cards/">buzzwords and abbreviations in DevSecOps</a>.

* The <strong>full-day experience</strong> has you generating both application code and the whole DevOps toolchain for an architecture that automatically scales. You then <strong>re-build the whole setup</strong> after making configuration changes. Participants leave with an ability to identify DevSecOps toolchain components and usage workflow and have an appreciation for some of the subtleties about each technology.

* The <strong>two-day immersion</strong> enables you to see code moving through <strong>multiple environments</strong> from development servers to production clusters -- crucial for working in corporate enterprises. Participants see a live "blue/green" deployment and fall-back. Participants leave with a visceral understanding of both the advantages and limitations modern DevSecOps offers.
<br /><br />

## Course Outline

<a target="_blank" href="https://roadmap.sh/devops">https://roadmap.sh/devops</a>

![devops-roadmap sh](https://user-images.githubusercontent.com/300046/62124296-1db15200-b287-11e9-89ea-9aee2e133cc4.png)



### Overview
Toolchain components<br />
Alternatives<br />
Example: Maven vs. Yarn<br />
Workflows<br />

### Repositories
GitHub/GitLab source repository<br />
Maven/Yarn package repository<br />
Nexus binary repository<br />
SonarQube status repository<br />
CMDB server repository<br />
DNS (Domain Name System)<br />
CDN for files around the world<br />
Application SQL databases<br />
Liquibase database schema changelogs<br />
NoSQL databases<br />
[Time-series databases](/time-series/)<br />

### Generate application
Programming Languages (Java)<br />
Java Frameworks: Spring Boot<br />
JHipster<br />
Angular<br />

### Build and Release
Login GitHub/GitLab<br />
Release when ready<br />
Login Jenkins/Salt/Travis/CirclCI/TeamCity<br />
Maven/Yarn/Ant/Gradle/Gulp<br />

### Virtualization
Docker images vs. Vagrant<br />
AWS HVM machine images<br />
OpenStack LXC<br />

### Security
SonarQube code scan run reports<br />
HashiCorp Vault<br />
Penetration testing<br />

### Scalable orchestration
HashiCorp Packer<br />
NetflixOSS<br />
HashiCorp Consul<br />
Blue/Green deployment<br />
Failover test run<br />
Google Kubernetes<br />
Puppet Zookeeper/Noah/Mesos<br />

### REST API

### Testing services
Terminal CLI<br />
BrowserSync<br />
Browser inspect debugger<br />
Mock services<br />
Jenkins/Cloudbees<br />
JUnit<br />
Selenium<br />
Fitnesse<br />
Cucumber<br />

### Monitoring
Zipkin tracing<br />
ELK stack vs. Tick stack<br />
Elsticsearch vs. InfluxDB<br />
Logstash vs. Telegraf<br />
Kibana vs Graphana<br />


## Learning Resources

http://automationtoolsbootcamp.com



## More on DevSecOps #

This is one of a series on DevSecOps:

{% include devops_links.html %}


## Wait, there's more. Click one of these ... #

This article is one of a series about tuning and performance:

{% include tuning_links.html %}


