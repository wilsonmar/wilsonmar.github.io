---
layout: post
date: "2022-08-02"
file: "monitoring"
title: "Monitoring infrastructure"
excerpt: "Toward Observability"
tags: [management, audit]
image:
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1658594325/exam-ear-1900x500_d9wljf.png
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i> 
{% include l18n.html %}
{% include _toc.html %}

> "The database is a cache of the logs."

Different vendors have varying definitions about "Observability".


<a name="[1]"></a>
<a name="LifetimeViews"></a>

## Lifetime of system

QUESTION [1] - What is the <strong>expected lifetime</strong> of this system? (based on existing systems in the organization)

Example: 10 years * 50 weeks per year = 500 weeks

500 weeks * weekly views = Lifetime views


<a name="[2]"></a>

## Usage Demographics 

QUESTION [2] - Over the lifetime of this system, about how often (per week) do measurements of the system need to be considered by each persona in the company?

Example for a hypothetical 1,000-user scenario, where <strong>% Each</strong> is the percentage of total users grouped into that persona.

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="top"><th> Persona </th><th> % Each </th><th> # Users 
</th><th> #/Week </th><th> <a href="LifetimeViews"># Lifetime<br />Views [1]</a> </th><th> Notes </th></tr>
<tr valign="top" align="right"><td> Developers </td><td> 55% </td><td> 550
   </td><td> 30 </td><td> 15,000 </td><td> -
   </td></tr>
<tr valign="top" align="right"><td> Operations </td><td> 15% </td><td> 150
   </td><td> 70 </td><td> 35,000 </td><td> -
   </td></tr>
<tr valign="top" align="right"><td> Security </td><td> 17% </td><td> 170
   </td><td> 60 </td><td> 30,000 </td><td> -
   </td></tr>
<tr valign="top" align="right"><td> Managers </td><td> 10% </td><td> 100
   </td><td> 15 </td><td> 7,500 </td><td> -
   </td></tr>
<tr valign="top" align="right"><td> Auditors </td><td> 2% </td><td> 20
   </td><td> 2 </td><td> 1,000 </td><td> -
   </td></tr>
<tr valign="top" align="right"><td> Others </td><td> 6% </td><td> 60
   </td><td> 5 </td><td> 2,500 </td><td> -
   </td></tr>
<tr valign="top" align="right"><td> <em>Total</em> </td><td> 100% </td><td> 1000
   </td><td> 182 </td><td> 91,000 </td><td> -
   </td></tr>
</table>

The number of Lifetime accesses is used to understand how much history will be stored.

QUESTION [_] - What is the corporate data retention policy which specifies how long historical data is maintained?


## Expectations

<a name="[3]"></a>

QUESTION [3] - What expectations for Availability (Uptime) do each persona have of the system?

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Persona </th><th> Uptime %<br />Expectation</th></tr>
<tr valign="top"><td> Developers    </td><td align="right"> 95% + </td></tr>
<tr valign="top"><td> Operations    </td><td align="right"> 99% + </td></tr>
<tr valign="top"><td> Security      </td><td align="right"> 99% + </td></tr>
<tr valign="top"><td> Managers      </td><td align="right"> 80% + </td></tr>
<tr valign="top"><td> Auditors      </td><td align="right"> 99% + </td></tr>
<tr valign="top"><td> Others        </td><td align="right"> 85% + </td></tr>
</table>
<br /><br />


<a name="[4]"></a>

## Measurements

QUESTION [4] - What monitoring is desired? 


Examples of <strong>usage volume</strong> statistics:

* Cloud Regions
* Cloud resource components (Nodes, ELB)
* Files

* User logins
* User Groups
* Number of accesses by each persona over time <a href="#[2]">[2]</a>
* Rate of users abondoning workflows
<br /><br />

Example of limits imposed by cloud vendors:

* App executable size bytes on disk and when loaded in RAM
* Number of endpoints to the AWS API gateway REST API service - errors after 300 endpoints.
* Response time of Lambda API - if more than 30 seconds, a user of your service receives a 504 HTTP Error even though that Lambda transaction is still running in the background.
* The AWS API gateway can have 10,000 (RPS limit) x 29 (timeout limit) = 290,000 open connections. Growth beyond that result in 429 "too many requests".
* There are many other <a target="_blank" href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS service quotas</a>
<br /><br />

Example of "shallow" incident management metrics:

* Number of incidents to investigate
* TTD (Time To Detect) issue
* TTR (Time to Remediate/Repair) issue
* Frequency of incidents
* Severity level of events
<br /><br />

Examples of <strong>computing resource</strong> usage statistics (at various points in time):

* CPU
* Memory
* Storage usage
* Disk I/O
* Network I/O
<br /><br />

PROTIP: Monitoring <strong>queues</strong> enables identification of bottlenecks which delay response time. Capacity bottlenecks are not revealed until a queue builds up when additional simultaneous users during load tests.

Examples of <strong>app-specific</strong> statistics, for Consul:

* KV count
* Intentions
* ACLs
* etc.
<br /><br />

<strong>Unit Cost</strong> measurements provide data for business-level assessments
when costs are measured against outputs:

   * What does it cost to process each request/transaction, by type of process?
   * How much of a difference is the cost of a new request vs. existing request?
   * What is the cost per change request?
   <br /><br />

<strong>Productivity</strong> measurements reveal improvements in terms of speed and effort.

* Cycle time – How long does it take to complete a unit of work, in total, and by phase?
   * Break it out by new vs. maintenance work (most will be maintenance)
   * Average time to create new document/message
   * Average time to change existing document/message
   <br /><br />

* Dev. "Productivity" - Requests completed per person – What number of new and/or change requests per person per period?
   * Requests by new vs. maintenance work (most will be maintenance)
   * Average change requests completed per person
   * Average new requests completed per person
   <br /><br />


* Dev. Velocity - How many content edit cycles (iterations) are needed? This can have a significant impact on cycle time and overall productivity.
   * Iterations per new release
   * Iterations per maintenance release
   <br /><br />
   
   <a target="_blank" href="https://blog.doculabs.com/focus-on-objectives-when-capturing-ccm-metrics">PROTIP</a>: Less churn and resulting delays occur in firms with alignment on standards, customer experience objectives, and roles responsible. 
   <br /><br />

## Levels of monitoring investment

The discussion below traverses from left to right through this table:

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="top"><td> Level of monitoring:
   </td><td><a href="#Level1">1 - Shallow Individual Component Monitoring</a>
   </td><td><a href="#Level2">2 - In-Depth Monitoring on Different Levels</a>
   </td><td><a href="#Level3">3 - Next Generation Monitoring</a>
   </td><td><a href="#Level4">4 - Observability</a>
</td></tr>
<tr valign="top"><td> Investment (TCO):
   </td><td><a href="#[5]">Minimal [5]</a>
   </td><td>~3X
   </td><td>~10X
   </td><td>~20X
</td></tr>
<tr valign="top"><td> Approach:
   </td><td><a href="#Reactive"></a>Reactive<br />collections
   </td><td>In-depth<br />trends
   </td><td>Responsive<br />alerts
   </td><td>Proactive<br />self-healing
</td></tr>
<tr valign="top"><td> Mechanism:
   </td><td>Each component monitored using a different <strong>independent</strong> approach
   </td><td><strong>Dashboards</strong> display various components of each specific service
   </td><td><strong>Interdependence</strong> among components apparent when a specific component is changed for <strong>manual</strong> RCA
   </td><td>Anomalous behavior automatically identified for automated RCA and remediation, using Machine Learning (AI), before a crisis
</td></tr>
<tr valign="top"><td> Deficiency: 
   </td><td>Extensive and frequent manual investigation <a href="#[6]">[6]</a>
   </td><td>Issues impacting the <strong>entire IT stack</strong> not apparent
   </td><td><strong>Manual</strong> remediation necessary
   </td><td>Human <strong>oversight</strong> and tuning still needed
</td></tr>
<tr valign="top"><td> Achievable (Uptime): 
   </td><td> &LT; 65%<a href="#[6]">[6]</a>
   </td><td> &LT; 85%
   </td><td> &LT; 90.0%
   </td><td> &LT; 99.5%
</td></tr>
</table>

<hr />

<a name="[5]"></a>

## Minimal investment

QUESTION: [5] What do you consider to be the <strong>minimal</strong> investment in monitoring infrastructure?

<a name="[6]"></a>
<a name="Reactive"></a>

### Level 0 - 

Level 0 is to use only commands provided by default by the operating system being used.


<a name="Level1"></a>

### Level 1 - Reactive Monitoring

Level 1 is to install FOSS monitoring utilities such as Prometheus with Grafana dashboards or Elastic Stack.

   <ul>PROTIP: Instead of having each app team figure out how to install, configure, and manage monitoring, many enterprises <strong>staff a monitoring team</strong> to provide quick start expertise and reduce the time and frustration by each team.
   <br /><br />
   [6] A <a href="#Reactive">"reactive" monitoring system</a> means that significant issues may NOT be noticed until users complain (high TTD and low user satisfaction). Tracing of issues encountered by a specific user is not possible at this level. High TTR is likely because success at incident response depend on lucky guesses, every time there is an issue. And troublshooting is needed for <strong>every incident</strong> because issues are not avoided while time is spent on troubleshooting. This approach also requires long tenure of people, which is unlikely since turnover is usually high under these work conditions. So Uptime would be low, especially if investments in backup and restore are also minimal.
   </ul>


<a name="Level2"></a>
Level 2 is to install licensed monitoring utilities such as Datadog, Splunk, New Relic, Honeycomb, etc.

   <ul>NOTE: Some vendors (such as SolarWinds) specialize in network monitoring based on the SNMP (Simple Network Management Protocol). However, more and more data centers disable SNMP to improve security against external hacking. https://learn.hashicorp.com/tutorials/terraform/tfe-log-forwarding?in=terraform/recommended-patterns<br /><br />
   </ul>


<a name="Level3"></a>

Level 3 is to add an enterprise-wide end-to-end <strong>"capabilities dashboard"</strong> plus  <strong>tracing</strong> to a single user's impact across components, plus PagerDuty or XMatters for smart alerting/incident management.

   <ul>The time that a specific HTTP request or a database call takes to go across various components is called a <strong>"span"</strong>. Each span is associated with <strong>attributes</strong>. Such  <strong>instrumentation</strong> is done by functions in an open-source Open Telemetry (OTel) library for each programming language and <a target="_blank" href="https://github.com/open-telemetry/opentelemetry-python-contrib/tree/master/instrumentation">framework</a> (such as Flask for Python). Spans are displayed in the program's console (STDOUT) and also exported to an application performance monitoring utility such as Datadog, which correlates the various spans on a visual dashboard. Spans can be nested, and have a parent-child relationship with other spans. This aggregating of spans is done by a "distributed tracing backend" such as Jaeger, . See https://open-telemetry.github.io/opentelemetry-python/getting-started.html

   The "Capabilities Dashboard" at FT.com uses react-based Heimdall to visualise monitoring data collected into Prometheus:<br /><a target="_blank" href="https://medium.com/ft-product-technology/our-journey-with-capability-monitoring-at-the-ft-6df9aaa1d7b0"><img alt="Heimdall at FT" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1660765583/monitoring-heimdall-at-ft-1400x966_ukcjyt.png"></a>
   </ul>


<a name="Level4"></a>

Level 4 is to install Machine-Learning (AI) based "Observability" systems such as InsightFinder, StackState, etc.

   <ul>Instrumentation is necessary to determine whether system are able to achieve scalability and availability objectives (and when they are not). Measurable reliability goals enable people to know when to stop tuning efforts. However, there are financial and operational tradeoffs for adopting each level of instrumentation. It is convenient and less stressful when systems are self-healing. But can the organization afford the time and expense to achieve that convenience? One can over-invest in achieving the ultimate level of observability. Over-investment in monitoring drains focus from feature development work. On the other hand, under-investment in monitoring can reduce development teams to “spinning their wheels” on guesses that waste precious time and create frustration which leads to turnover.
   </ul>

## Dashboards


## Resources

https://f.hubspotusercontent20.net/hubfs/516677/monitoring-maturity-model-2020.pdf