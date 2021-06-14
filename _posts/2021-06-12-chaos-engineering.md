---
layout: post
title: "Chaos Engineering"
excerpt: "Use Gremlin, Chaos Monkey, and monitoring tools (such as Datadog) to measure and improve MTTD and MTTR"
tags: [devops, devsecops]
date: "2021-06-12"
file: "chaos-engineering"
image:
# azure-devops-products-1900x400-21605.jpg
  feature: https://user-images.githubusercontent.com/300046/56040192-132c7600-5cf3-11e9-93cb-99490c5ae7b8.jpg
  credit: Microsoft
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The speed to detect and respond to anomalies is a key part of the "Operational Efficiency" pillar of Well-Architected cloud frameworks by Amazon and Microsoft.

The definition <a target="_blank" href="https://www.wikiwand.com/en/Chaos_engineering">on Wikipedia</a>:

   <ul>Chaos engineering is the discipline of experimenting on a software system in production in order to build confidence in the system's capability to withstand turbulent and unexpected conditions.
   </ul>

Gremlin's definition:

   <ul>Chaos Engineering" consists of thoughtful controlled experiments designed to reveal the weaknesses of systems, which results in reduction of downtime and quicker response to anomalies.
   </ul>

## Manual approach

Sure, you can introduce "perturbation" by manually shutting down a server to see what happens.

But there are so many more failure modes.


## Automated approach

"Gartner anticipates that 40% of organizations will implement chaos engineering practices as part of DevOps initiatives by 2023, reducing unplanned downtime by 20%."
Source: https://www.gartner.com/smarterwithgartner/the-io-leaders-guide-to-chaos-engineering/

What automated chaos engineering utilities provide is a <strong>systematic approach</strong> that verifies the resilience of <strong>ALL services</strong> and work processes in a data center running at scale (with hundreds or thousands of servers), and provide daily, weekly, monthly, and annual reports about the <strong>resiliency posture</strong> of the data center.

Tools to conduct chaos engineering include:

* Chaos Monkey was open-sourced in 2010 by Netflix at <a target="_blank" href="https://github.com/Netflix/chaosmonkey">github.com/Netflix/chaosmonkey</a>, written in Go and integrated for use within Spinnaker, the continuous delivery platform at Netflix. <a target="_blank" href="https://www.gremlin.com/chaos-monkey/">READ: Gremlin's review of it</a> and Netflix's <a target="_blank" href="https://www.gremlin.com/chaos-monkey/the-simian-army/">2011 Simian Army</a>.

* <a target="_blank" href="https://www.chaosnative.com/">chaosnative.com</a>, a CNCF (open source) project based on Cloud-Native Chaos Engineering.

* LitmusChaos is for Kubernetes

* Gremlin, freemium product with a GUI and professional support. It supports a wide range of operating systems.


## Chaos Workflow

Chaos Engineering is an investment in a <strong>proactive</strong> approach.

If your leadership attitude is to do the minimal and just recover when needed, this is not for you.

Here's the workflow:

1. Measure the "before" (baseline) metrics:

   * MTTD (Mean Time to Detect) - How long did it take for someone to realize there is a problem? The starting point is an event that may not be specifically logged, but inferred from other observations.

   * MTTM (Mean Time to reMediate) - How long did it take for the interruption to be corrected so production can continue? 

   * MTTR (Mean Time to Repair/Recover) - How long did it take for the interruption to be repaired? 

   * MTTI (Total Time of Impact) to operations.

   * MTBF (Time Between Failures) - How quickly and frequently engineers deploy?

1. Use the email link to setup an Account forever-free individual account. $750/month

   https://www.gremlin.com/gremlin-free-software/?ref=blog
   https://www.gremlin.com/get-started/?ref=nav

1. https://www.gremlin.com/community/
   get a Slack invite.

1. https://app.gremlin.com/login


   Jira or "Fire Hydrant" provides an application to maintain a postmortem to display a Postmortum Dashboard to display timelines and metrics.


   ### Roles for "Game Day"

1. PROTIP: Hold a "Game Day" to replicate SEV and confirm fix is reliable:

   * General (IMOC = Incident Manager On Call) who defines the schedule, decide on abort conditions.

   * TLOC (Tech Lead On Call) stays focused on technical problem solving.

   * Commander who implements and executes experiments.

   * Scribe who records experiments and results.

   * Observer who correlates results.


   <a name="FailureModes"></a>

   ### Failure Modes

1. Review previous RCA (Root Cause Analysis) aka Known Failure Modes to define attack scenarios.

   NOTE: Gremlin's unique value proposition is that it can turn incident reproduction results into automated scenarios Gremlin can run.

1. Target one of your services to impose failure modes:

   * K8s Containers Orchestration
   * AWS Cloud Compute
   * Datadog monitoring
   * Messageing
   * Databases
   * ALFI (Application-Level Failure Injection), such as on AWS RDS (<a target="_blank" href="https://www.youtube.com/watch?v=o1Uyf8bhwyI">VIDEO</a>)
   <br /><br />

   NOTE: Gremlin provides several "scenarios" to impose "chaos":

   * Inbound HTTP Traffic
   * Outbound HTTP Traffic
   <br /><br />

   NOTE: If you are running on Azure and have failover to another availability center or region (GZRS), Microsoft takes care of the failover process so you shouldn't even notice it occurred.

1. Identify a Linux or Windows server where Gremlin can be installed:

   * Ubuntu, Debian
   * CentOS
   * RHEL
   * Docker image
   * Helm
   * Windows
   <br /><br />

1. Add Gremlin in server build process. On Windows:

   <pre>msiexec /package https://windows.gremlin.com/installer/latest/gramlin_installer.msi</pre>

1. Enable monitoring to <strong>measure latency</strong>, resource  usage

   * CPU usage
   * Memory RAM usage
   * Disk space usage
   * Disk I/O 
   * Network packet loss (simulate bandwidth limitation)
   <br /><br />

   PROTIP: Gremlin is able to target the number of cores.

1. Set alerts to be sent via email, Slack, SMS text, etc.

1. Set daily, weekly, monthly, annual statistical reports to be sent to a distribution list.

1. Choose attack mode:

   <u>Resource:</u>
   * CPU usage
   * Memory RAM usage
   * Disk space usage
   * Disk I/O 
   <u>State:</u>
   * Kill Process 
   * Shutdown
   * Change System time (Time Travel)
   <u>Network:</u>
   * Drop traff (Blackhole)
   * DNS
   * Latency
   * Packet Loss on network
   <br /><br />

1. Gremlin creates traffic on the network from a Redis in-memory database.

1. Enable monitoring and alerts. Specifically, analyze latency in transactions going through the network.

   Example result: as Gremlin increases load, typically it sees levels such as:

   1. At 50 ms, the system has enough memory to absorb higher loads without degradation. However, the 
   
   2. At 100 ms, requests begins to be queued, so response times reflect time in queue.
   
   3. At 300 ms, requests cannot be processed and responses reflect the handling of failed transactions.
   <br /><br />

   PROTIP: One purpose of this work is to validate monitoring configurations and the ability of monitors to identify those different levels, because different actions are appropriate at each level. 

1. Adjust monitoring and alert levels based on Gremlin runs.

   * Adjust thresholds for alerts

   * Adjust frequency of measurement recording

1. Run Gremlin to ensure that on-call personnel respond appropriately.

   PROTIP: Measure the actual (upgraded) MTTD & MTTR (Mean Time to Detect and Repair) - How long did it take for the interruption to be detected and then repaired?

1. Adjust report distribution lists over time automatically, if possible.


## Gremlin certification

https://www.gremlin.com/certification/
Gremlin Certified Chaos Engineering Practitioner  Exam (GCCEP)

You get two attempts to answer 80% of 20 questions on https://gremlin.coassemble.com/
 

## References

Sydney Dekker "Drift into Failure"



## More on DevSecOps #

This is one of a series on DevSecOps:

{% include devops_links.html %}
