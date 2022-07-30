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

   * Some vendors use "Observability" to measure the level of "maturity"
   <br /><br />

## Measurements

Monitoring at each system asset component:

* Cloud resource component (Nodes, ELB)
* Apps
* Services
* Users
* User Groups
* Files
<br /><br />


## Levels of monitoring investment

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="top"><td> Level of monitoring:
   </td><td>1 - Individual Component Monitoring
   </td><td>2 - In-Depth Monitoring on Different Levels
   </td><td>3 - Next Generation Monitoring
   </td><td>4 - Observability
</td></tr>
<tr valign="top"><td> Investment:
   </td><td>Minimal [1]
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
<tr valign="top"><td> Deficiency: [2]
   </td><td>Relationships between various components require <strong>extensive investigation</strong> [3]
   </td><td>Issues (failures) impacting related to the <strong>entire IT stack</strong> not apparent
   </td><td><strong>Manual</strong> remediation necessary
   </td><td>Human <strong>oversight</strong> and tuning still needed
</td></tr>
</table>

QUESTION [1] - What do you consider to be the <strong>minimal</strong> investment in monitoring infrastructure?

FOSS options include Prometheus and Grafana dashboards.

QUESTION [2] - What is the expected lifetime of this system? (based on existing systems in the organization)

Example: 10 years = 520 weeks or 120 months

### Views by Persona

QUESTION [3] - Over the lifetime of this system, about how often (per week) do measurements of the system need to be considered by each person in the company?

Example:

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="top"><th> Persona </th><th> % Each </th><th> # Users </th><th> #/Week </th><th> # Lifetime </th><th> # Views </th></tr>
<tr valign="top" align="right"><td> Developers </td><td> 55% </td><td> 100
   </td><td> 10 </td><td> 520 </td><td> 5200
   </td></tr>
<tr valign="top" align="right"><td> Operations </td><td> 15% </td><td> 
   </td><td> 50 </td><td> 2600 </td><td> ?
   </td></tr>
<tr valign="top" align="right"><td> Security </td><td> 17% </td><td> 
   </td><td> 20 </td><td> 1040 </td><td> ?
   </td></tr>
<tr valign="top" align="right"><td> Managers </td><td> 10% </td><td> 
   </td><td> 20 </td><td> 1040 </td><td> ?
   </td></tr>
<tr valign="top" align="right"><td> Auditors </td><td> 2% </td><td> 
   </td><td> 20 </td><td> 1040 </td><td> ?
   </td></tr>
<tr valign="top" align="right"><td> Others </td><td> 6% </td><td> 
   </td><td> 20 </td><td> 1040 </td><td> ?
   </td></tr>
<tr valign="top" align="right"><td> <em>Total</em> </td><td> 100% </td><td> 350?
   </td><td> 20 </td><td> 1040 </td><td> ?
   </td></tr>
</table>

Commercial options for monitoring include

Instrumentation is necessary to determine whether system are able to achieve scalability and availability objectives (and when they are not). Measurable reliability goals enable people to know when to stop tuning efforts. However, there are financial and operational tradeoffs for adopting each level of instrumentation. It is convenient and less stressful when systems are self-healing. But can the organization afford the time and expense to achieve that convenience? One can over-invest in achieving the ultimate level of observability. Over-investment in monitoring drains focus from feature development work. On the other hand, under-investment in monitoring can reduce development teams to “spinning their wheels” on guesses that waste precious time and create frustration which leads to turnover.
