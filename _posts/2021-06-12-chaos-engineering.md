---
layout: post
date: "2023-06-18"
file: "chaos-engineering"
title: "Chaos Engineering"
excerpt: "Use Gremlin, Chaos Monkey, and monitoring tools (such as Datadog) to measure and improve MTTD and MTTR"
tags: [devops, devsecops]
image:
# chaos-engineering-hero-1900x500
  feature: https://user-images.githubusercontent.com/300046/133199858-1c9e5eb5-cf3a-43c5-a3b7-93ecdeb894b8.png
  credit: Zhu Xiaosi
  creditlink: http://www.uml.org.cn/zjjs/202004141.asp
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

> "40% of organizations will implement chaos engineering practices as part of DevOps initiatives by 2023, <strong>reducing unplanned downtime</strong> by 20%." [<a target="_blank" href="https://www.gartner.com/smarterwithgartner/the-io-leaders-guide-to-chaos-engineering/">Source: Gartner</a>]

{% include whatever.html %}

## Definitions

The definition <a target="_blank" href="https://www.wikiwand.com/en/Chaos_engineering">"Chaos Engineering" on Wikipedia</a>:

   <ul>Chaos engineering is the discipline of experimenting on a software system in production in order to build confidence in the system's capability to withstand turbulent and unexpected conditions.
   </ul>

Vendor Gremlin's definition:

   <ul>Chaos Engineering" consists of thoughtful controlled experiments designed to reveal the weaknesses of systems, which results in reduction of downtime and quicker response to anomalies.
   </ul>

https://github.com/dastergon/awesome-chaos-engineering

### Making bad things happen 

Chaos Engineering is an <strong>investment</strong> in moving from a reactive to <strong>proactive</strong> approach to reliability engineering.

Instead of waiting for an outage to "see what happens", 
it involves conducting <strong>experiments</strong> to expose systemic weaknesses do not become aberrant behaviors in production.


<a name="Hypotheses"></a>

## Hypotheses of failure modes

Real world "chaos" in Virtual Machines (and how to inject failure):

   * Misconfiguration of network and server resources (in Terraform HCL, CloudFormation, etc.)
   * System time Change (by "Time Travel" utility)

   * CPU usage spike (sidecar program making complex calculations)
   * Memory RAM usage spike (sidecar program consuming memory)
   * Hard drive free space available (program consuming disk space)
   * Disk I/O (competiting)
   
   * DNS resolution failure (by operating system command)
   * Transaction latency (by proxy holding requests)
   * Network bandwidth (competing program hogs bandwidth)
   * Network connections severed (by operating system command)
   * Network TCP packet Loss 
   
   * Specific app process killed (by operating system command)
   * Server shutdown (by operating system command)
   <br /><br />

Potential failures possible (based on <a target="_blank" href="https://principlesofchaos.org/">principlesofchaos.org</a>):

   * Single point of failure (SPOF) crashes with <strong>no fallback</strong>
   * Improper or ineffective <strong>fallback settings</strong> when a service is unavailable (such as the system not being in a safe state after failure)
   * <strong>Retry storms</strong> from improperly tuned timeouts
   * <strong>Cascading outages</strong> when a downstream dependency receives too much traffic
   <br /><br />

See <a href="#FailureModes">Failure Modes</a> (below).


<a name="Metrics"></a>

## Metrics

The <strong>speed to detect and respond</strong> to anomalies is a key part of the "Operational Efficiency" pillar of <a target="_blank" href="https://wilsonmar.github.io/well-architected-cloud/">Well-Architected cloud</a> "best practice" implementation and evaluation frameworks by Amazon, Microsoft, and Google. 

A sample <strong>Acceptance Criteria</strong> statement for work on Chaos Engineering is "confidence in our production deployments" despite the complexity that they represent.

Specific metrics to measure:

   * Availability (unplanned downtime per year/month/week/day/hour). Components of this include:

      * Transaction throughput per hour/day/week/month/quarter/year

      * Latency (response time to user requests) percentiles

   * MTTD (Mean Time to Detect) - How long did it take for someone to realize there is a problem? The starting point is an event that may not be specifically logged, but inferred from other observations.

   * MTTM (Mean Time to reMediate) - How long did it take for the interruption (vulnerability) to be corrected in production?

   * MTTI (Mean Total Time of Impact) to operations.

   * MTBF (Mean Time Between Failures) - How quickly and frequently engineers deploy?

   * RTO (Recovery Time Objective) aka MTTR (Mean Time to Repair/Recover) - How long for interruptions to be repaired? 

   * RPO (Recovery Point Objective) - how far back data can be recovered. If there is dependence on recovery from backups,  the RPO would be the time between backups are taken, which can be a day.

<hr />

<a name="Security"></a>

## Security Chaos Engineering

<a target="_blank" href="https://www.youtube.com/watch?v=hfSN_gApNmw" title="by Mitigant">VIDEO</a>

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="top"><th> Factor </th><th> Red/Blue/Purple Team </th><th> Security
   </th></tr>
<tr valign="top"><td> By: </td><td> external consultants 
   </td><td> in-house staff </td></tr>
<tr valign="top"><td> Frequency: </td><td> periodically (annually)
   </td><td> continuously </td></tr>
<tr valign="top"><td> Technical Scope: </td><td> external interfaces
   </td><td> internal and external </td></tr>
<tr valign="top"><td> Tools: </td><td> manual
   </td><td> automation </td></tr>
<tr valign="top"><td> Goals: </td><td> identify issues
   </td><td> iterative improvement </td></tr>
<tr valign="top"><td> Objective: </td><td> not for learning
   </td><td> create learning opportunities </td></tr>
<tr valign="top"><td> Involvement: </td><td> Security &amp; Ops
   </td><td> company-wide Incident Management </td></tr>
<tr valign="top"><td> - </td><td> NOT cloud native
   </td><td> cloud native </td></tr>
</table>


<a name="Monitoring_Vendors"></a>

## Monitoring Vendors

Vendors offering products and SaaS services:

   * Datadog
   * Dynatrace
   * New Relic
   * Elastic
   * Splunk
   * etc.
   <br /><br />

PROTIP: Summarized metric reports provide executives of an enterprise the <strong>resiliency posture</strong> of its systems.


## Preparations and efforts

Steps in a Chaos Engineering effort:

   1. Pitch executives to get buy-in (this involves an "elevator pitch", "business case", and "proof of concept")
   2. Executive sponsor. If your leadership's attitude is to do the minimal and just recover when needed, this is not for you.
   3. Team assembled 
   4. Cloud accounts provisioned with budget and adequate permissions
   5. Team trained
   6. Systems are created (using IaC) and running in "steady state"
   7. Install monitoring systems and procedures (currently in place) to produce "as is" baseline <a href="#Metrics">metrics (see below)</a>
   9. Analyze baseline metrics with visual analytics to identify and demonstrate "weaknesses" as "opportunities"
   10. Define plan of action (design experiments)

   11. Implement plan of action (conduct experiments on <a href="#GameDay">Game Days</a>)
   12. Analyze evolving metrics to determine if the plan of action is working, and adjust as necessary
   <br /><br />


<a name="Experiments"></a>

## Experiment Design

Chaos engineering experiments follow an approach:

1. Define ‘steady state’ as some measurable output of a system that indicates normal behavior.

2. Hypothesize that this steady state will continue in both the control group and the experimental group.

4. Introduce variables that reflect real world events like servers that crash, hard drives that malfunction, network connections that are severed, etc.

5. Try to disprove the hypothesis by looking for a difference in steady state between the control group and the experimental group.
    
    
<hr />

<a name="Chaos_Vendors"></a>

## Chaos Automation Vendors

Sure, "perturbations" can be injected manually on a CLI, such as a server shut down command, to see what happens.

Chaos engineering utilities (systems) enable more experiments to be conducted <strong>quicker, for higher coverage, with better repeatability, at scale</strong> (running hundreds or thousands of servers), providing daily, weekly, monthly, and annual reports.

This article draws from several vendors.

The timeline at the top of this page depict vendors who offer products and services to automate chaos engineering:

   * <a href="#ChaosMonkey">"Chaos Monkey" from Netflix</a>
   * <a href="#Gremlin">Gremlin (freemium)</a>
   * <a href="#CNCFLitmus">CNCF Litmus with services by ChaosNative</a>
   * AWS Fault Injection Simulator
   * others
   <br /><br />

"Postmortem Dashboards" display timelines and metrics are presented by these vendors to help teams learn from failures:
   * Jira 
   * "Fire Hydrant"
   * Blameless
   <br /><br />


<a name="ChaosMonkey"></a>

### Chaos Money from Netflix

Chaos Monkey was open-sourced in 2010 by Netflix at <a target="_blank" href="https://github.com/Netflix/chaosmonkey">github.com/Netflix/chaosmonkey</a>, written in Go and integrated for use within Spinnaker, the continuous delivery platform at Netflix. <a target="_blank" href="https://www.gremlin.com/chaos-monkey/">READ: Gremlin's review of it</a> and Netflix's <a target="_blank" href="https://www.gremlin.com/chaos-monkey/the-simian-army/">2011 Simian Army</a>.


<a name="Gremlin"></a>

### Gremlin (freemium)

https://www.gremlin.com/docs/application-layer/authentication-configuration/   

* <a target="_blank" href="https://www.chaosnative.com/">chaosnative.com</a>, a CNCF (open source) project based on Cloud-Native Chaos Engineering.

* Gremlin, freemium product with a GUI and professional support. It supports a wide range of operating systems.

<a target="_blank" href="https://www.gremlin.com/certification/">
Gremlin Certified Chaos Engineering Practitioner  Exam (GCCEP)</a>
https://github.com/certificate-study-guide
provides two attempts to answer 80% of 20 questions on https://gremlin.coassemble.com/

1. Use the email link to setup an Account forever-free individual account. $750/month

   https://www.gremlin.com/gremlin-free-software/?ref=blog
   https://www.gremlin.com/get-started/?ref=nav

1. https://www.gremlin.com/community/
   get a Slack invite.

1. https://app.gremlin.com/login


<a name="CNCFLitmus"></a>

### CNCF Litmus & ChaosNative

LitmusChaos was orginally developed for use on Kubernetes.

<a target="_blank" href="https://www.youtube.com/watch?v=VHlO4KDy7z8" title="Interview with the Chaos Native team Mar 2, 2021">VIDEO: Introduction to Litmus Chaos | Rawkode Live</a>

<a target="_blank" href="https://www.youtube.com/watch?v=TE9EktwaVjI" title="Apr 21, 2021 Konveyor community">VIDEO</a> Karthik S. is the maintainer of Litmus Chaos.

Documentation is at https://litmusdocs-beta.netlify.app/docs/introduction/



<hr />

<a name="GameDay"></a>

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

 

## Social

* https://groups.google.com/g/chaos-community/c/84VOWoDQiIg


## References

* "Safety differently" visionary (and airline pilot) <a target="_blank" href="https://sidneydekker.com/">Sydney Dekker</a> <a target="_blank" href="https://www.youtube.com/watch?v=Jud_9k6fTHw">VIDEO</a>: "Drift into Failure: From Hunting Broken Components to Understanding Complex Systems" (<a target="_blank" href="https://www.routledge.com/Drift-into-Failure-From-Hunting-Broken-Components-to-Understanding-Complex/Dekker/p/book/9781409422211">publisher: Rutledge</a>. <a target="_blank" href="https://www.amazon.com/Drift-into-Failure-Sidney-Dekker/dp/1409422216">$45 on Amazon</a>)

https://neelanjanmanna.medium.com/a-beginners-practical-guide-to-containerisation-and-chaos-engineering-with-litmuschaos-2-0-eeb2ba859189

https://neelanjanmanna.medium.com/a-beginners-practical-guide-to-containerisation-and-chaos-engineering-with-litmuschaos-2-0-5f4f3cf2a55d


https://theqalead.com/podcast/gremlin-in-the-machine-how-to-achieve-chaos-engineering-netflix-amazon/

https://medium.com/the-cloud-architect/what-is-aws-fault-injection-simulator-and-why-you-should-care-3fbe457ca227


## More on DevSecOps #

This is one of a series on DevSecOps:

{% include devops_links.html %}
