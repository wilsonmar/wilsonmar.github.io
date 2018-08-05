---
layout: post
title: "Salesforce Project Plans"
excerpt: "Strategies for getting going quickly yet sanely"
tags: [salesforce]
file: salesforce-project-plans.md
image:
# feature: sf-ohana-1900x500-178173.jpg
  feature: https://user-images.githubusercontent.com/300046/43407734-bd6303fe-93dc-11e8-87df-302ddbc274ff.jpg
  credit: Salesforce
  creditlink: https://trailhead.salesforce.com/trailblazers
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}


This describes how we apply our deep IT experience to the full lifecycle from engaging through design, development, and transition of a Salesforce system.

This high-level sequence of activities help us focus on specific achievements along the way, in a logical approach:

<a href="#Engagement">1. Engagement</a> (Who's involved? What are our hopes and concerns? How will we work together?)

<a href="#NeedsRoles">2. Needs, Roles, Deliverables</a>

<a href="#EnvProcesses">3. Environment Processes</a> (sand boxes, permissions, getting to "production")

<a href="#Builds">4. Incremental Test-first design within incremental builds</a>

<hr />

<a name="Engagement"></a>

## 1. Engagement

Who's involved? When and How do we meet?

What are our hopes and concerns? 

What is the budget from the organization and each person?

What are the risks?

What are the priorities?

What are contingency actions?

How will we work together?

All this provides clarity so people know the boundaries of the work ahead.


<a name="NeedsRoles"></a>

## 2. Needs, Roles, Deliverables

Who will participate and when? What is the cadence of work and meetings?

What are the deliverables? 

Which role is responsible for each deliverable?

What is the strategy for tradeoffs between quality, cost, time?

What is the definition of "done" or "good enough" for each deliverable?

All this provides transparency so people know what they are in for.


<a name="EnvProcesses"></a>

## 3. Environment Processes

In "green field" situations where an organization is starting from scratch, we begin with a <strong>sample/demo</strong> set of databases and code just everyone have a way to achieve a clear understanding of how to get changes into productive use, as a team.

Code includes tests and utility tools (Git, backups, etc.).

This is a key aspect of modern "DevOps" strategy, in order to move fast but also safely.

Every participant is granted a custom set of permissions applicable to his/her role, and provided with training on how to update the sample system.

At the end of this phase, people know whether they can work together.


<a name="Builds"></a>

## 4. Incremental builds

Organizations have found that small increments of useful change is more productive than "big bang" releases. This allows more people to participate over time, which provides visibility into the development process.

With each increment, we consider all aspects holistically: the UX, Database Schema Design, Testing, Performance, Migration utilities, manual workarounds, etc.

As with any project, constant vigilence about tradeoffs and targets, and agreement about them, is necessary.

<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
