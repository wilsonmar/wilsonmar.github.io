---
layout: post
title: "Agile Performance Testing and Engineering"
excerpt: "Why do it? And how to do it in an Agile way"
tags: [perftest]
shorturl: "https://goo.gl/ZkKQrs"
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This article is about how to do performance testing and performance engineering work
in an Agile way -- during sprints rather than too late in the cycle:

To recap, Agile projects (vs. traditional waterfall) are characterized by 
focusing on business priorities and customer value:

* cross-functional teams 
* use of short work iterations 
* incremental development of products 
* continuous improvement (adjustments)
* measuring progress by workable products of most value to customers 

> Engage with us to answer these questions:

1. **How to ensure dependencies are ready before sprint work needs them ...**

   This helps to avoid scrambling to fix things blocking progress.

   In order to measure patterns in availability,
   we have an "run conditions monitor" that makes an on-going "ping" to API services which scripts depend on.
   Doing this provides a view of network health from each load generator rather than between servers
   and a monitoring server. 

   Before a script runs, it makes an API call to the program to determine whether all is good.
   
   An advanced version makes use of pattern detection machine learning to identify whethere there
   are patterns in dead zone (such as every Friday at 3pm when operations run backup 
   and makes servers slow).

2. **How to automatically identify performance issues (such as memory leaks) as part of System Demos at the end of sprints ...**

   This avoids waiting until it's a hassle and more expensive to make changes.

   A central tenent of Agile is to measure progress by workable products of most value to customers.

   Is a product really "done" when there are unassessed hazards?

   DEFINITIONS: Risk is the chance of loss. Peril is the direct cause of the loss. If a house burns down, then fire is the peril. A hazard is anything that either causes or increases the likelihood of a loss. 
   For instance, gas furnaces are a hazard for carbon monoxide poisoning.
   In computer systems: lack of availability for customer usage is a risk. 
   Application failures and limited capacity are perils. 
   Memory leaks are hazards for application failure.

   We gradually build system-level load test assets over time
   by accumulating micro-benchmarks at the component level as developers work:
   <a target="_blank" title="by Prakash Mallappa Pujar" href="https://www.scrumalliance.org/community/articles/2013/2013-may/agile-performance-testing-an-experimental-approach">*</a><br />
   <a target="_blank" title="by Prakash Mallappa Pujar" href="https://cloud.githubusercontent.com/assets/300046/24324628/2b35fe50-1160-11e7-9f15-cbbbf3b94536.jpeg">
   <img alt="agile_performance_testing_image prakash_mallappa_pujar__2" src="https://cloud.githubusercontent.com/assets/300046/24324628/2b35fe50-1160-11e7-9f15-cbbbf3b94536.jpeg"><br />(Click for full screen pop-up)</a>

   Also, have "hardening" sprints that occur before the project release date.

   Agile practioners question the efficacy of an approach to performance testing
   crammed into the last few days of the sprint cycle. The result:

   * Development activity stops before the sprint ends. Isn't this Waterfall within Scrum?

   * If feature development continues, these features aren't included in the performance testing of the same sprint. Not all the features developed in the sprint are tested. Conflict in meeting the Definition of Done?

   * Performance testing is done only for individual features by feature sprint teams. Performance testing is not done at the system level, integrating all the features developed in the sprint. Building performance risk at product level?

   * Possible chance that all team members aren't 100 percent effective throughout the sprint. Team's velocity fluctuates.


3. **How to integrate work among groups working sequential shifts ...**

   This avoid limiting capacity to a single cabal of workers.

   Git repositories identify every line changed, when it was made, and who did it.

   Team-level Kanban boards define the dynamic sequence of what should be done next, across groups.

   Common asset usage scheduling systems and advanced yet lean communication protocols among members
   make it happen seamlessly.

4. **How to have automation assist in generating scripts to impose potential loads ...**

   This avoids responding to change by manually adding correlations and verifications again after each change.

   "Functional" test scripts run to generate load test scripts using advanced software that
   pulls in previously defined correlations and verifications.

   Automatically scan generated software using the same rigorous rules as used for 
   other manually crafted software.

5. **How to tune configuration settings for lower costs and resiliency during sprints ...**

   This avoid letting default settings wreck havoc on servers.

   Several tuning runs can use adaptive algorithms to identify optimal settings from among a complex set of possibilities. This requires results to be assess mostly automatically rather than depending upon
   manual reviews all the time.

6. **How to provide Production Operations <a href="#Predictive">predictive triggers</a> for action ...**

   This avoid leaving others to figure it out on their own.

   Identify conditions (such as memory per user) that are evident 
   before the system reaches during artificially induced load levels.

Our enablement team provides automation tools and step-by-step procedural training on each of the above.


<a name="[1]"></a>
https://en.wikipedia.org/wiki/Software_performance_testing

https://wilsonmar.github.io/perftest/


## Wait, there's more. Click one of these ... #

This article is one of a series about tuning and performance:

{% include tuning_links.html %}
