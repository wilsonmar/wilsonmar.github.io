---
layout: post
date: "2022-03-02"
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

Different vendors have varying definitions about "Observability".


## User Demographics 

<a name="[1]"></a>

QUESTION [1] - Over the lifetime of this system, about how often (per week) do measurements of the system need to be considered by each persona in the company?

Example for a hypothetical 1,000-user scenario:

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="top"><th> Persona </th><th> % Each </th><th> # Users 
</th><th> #/Week </th><th> <a href="LifetimeViews"># Lifetime Views</a> </th><th> Notes </th></tr>
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

<strong>% Each</strong> is the percentage of total users grouped into that persona.


<a name="[2]"></a>
<a name="LifetimeViews"></a>

QUESTION [2] - What is the <strong>expected lifetime</strong> of this system? (based on existing systems in the organization)

Example: 10 years * 50 weeks per year = 500 weeks (or 120 months)

500 weeks * weekly views = Lifetime views

## Measurements

Monitoring at each system asset component:

* User logins
* User Groups
* Rate of users abondoning workflows
* Number of accesses over time

* Number of incidents to investigate
* TTD (Time To Detect) issue
* TTR (Time to Remediate/Repair) issue
* Frequency of incidents
* Severity level of events

* Cloud Regions
* Cloud resource components (Nodes, ELB)
* Files

* Apps
* Services
* Intentions
* ACLs
<br /><br />


## Levels of monitoring investment

The discussion below traverses from left to right through this table:

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="top"><td> Level of monitoring:
   </td><td>1 - Shallow Individual Component Monitoring
   </td><td>2 - In-Depth Monitoring on Different Levels
   </td><td>3 - Next Generation Monitoring
   </td><td>4 - Observability
</td></tr>
<tr valign="top"><td> Investment:
   </td><td>Minimal <a href="#[4]">[4]</a>
   </td><td>~3X
   </td><td>~10X
   </td><td>~20X
</td></tr>
<tr valign="top"><td> Approach:
   </td><td>Reactive<br />collections
   </td><td>In-depth<br />trends
   </td><td>Responsive<br />alerts
   </td><td>Proactive<br />self-healing
</td></tr>
<tr valign="top"><td> Mechanism:
   </td><td>Each component monitored using a different <strong>independent</strong> appraoch
   </td><td><strong>Dashboards</strong> display various components of each specific service
   </td><td><strong>Interdependence</strong> among components apparent when a specific component is changed
   </td><td>Anomalous behavior automatically identified and remediated before a crisis, using Machine Learning (AI)
</td></tr>
<tr valign="top"><td> Deficiency: <a href="#[2]">[2]</a>
   </td><td>Extensive and frequent manual investigation <a href="#[3]">[3]</a>
   </td><td>Issues impacting the <strong>entire IT stack</strong> not apparent
   </td><td><strong>Manual</strong> remediation necessary
   </td><td>Human <strong>oversight</strong> and tuning still needed
</td></tr>
<tr valign="top"><td> Achievable (Uptime): 
   </td><td> &LT; 65% <a href="#[3]">[3]</a>
   </td><td> &LT; 85%
   </td><td> &LT; 90.0%
   </td><td> &LT; 99.5%
</td></tr>
</table>

<hr />

## Discussion

<a name="[3]"></a>

QUESTION [3] - What expectations for Availability (Uptime) do each persona have of the system?

* Developers
* Operations
* Security
* Managers 
* Auditors
* Others
<br /><br />


<a name="[4]"></a>

QUESTION: [4] A reactive monitoring system means that significant issues may NOT be noticed until users complain (high TTD and low user satisfaction). Tracing of issues encountered by a specific user is not possible at this level. High TTR is likely because success at incident response depend on lucky guesses, every time there is an issue. And troublshooting is needed for <strong>every incident</strong> because issues are not avoided while time is spent on troubleshooting. This approach also requires long tenure of people, which is unlikely since turnover is usually high under these work conditions. So Uptime would be low, especially if investments in backup and restore are also minimal.

<a name="[5]"></a>

QUESTION: [5] What do you consider to be the <strong>minimal</strong> investment in monitoring infrastructure?

FOSS options include Prometheus and Grafana dashboards.


## Commercial options for monitoring include

Instrumentation is necessary to determine whether system are able to achieve scalability and availability objectives (and when they are not). Measurable reliability goals enable people to know when to stop tuning efforts. However, there are financial and operational tradeoffs for adopting each level of instrumentation. It is convenient and less stressful when systems are self-healing. But can the organization afford the time and expense to achieve that convenience? One can over-invest in achieving the ultimate level of observability. Over-investment in monitoring drains focus from feature development work. On the other hand, under-investment in monitoring can reduce development teams to “spinning their wheels” on guesses that waste precious time and create frustration which leads to turnover.
