---
layout: post
title: "Salesforce Project Plans"
excerpt: "Strategies for getting going quickly yet sanely"
tags: [salesforce]
date: "2018-08-02"
file: "salesforce-project-plans"
image:
# feature: sf-ohana-1900x500-178173.jpg
  feature: https://user-images.githubusercontent.com/300046/43407734-bd6303fe-93dc-11e8-87df-302ddbc274ff.jpg
  credit: Salesforce
  creditlink: https://trailhead.salesforce.com/trailblazers
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


This describes how we apply our deep IT experience to the full lifecycle from engaging through design, development, and transition of a Salesforce system.

This high-level sequence of activities help us focus on specific achievements along the way, in a logical approach:

<a href="#Engagement">1. Engagement</a><br />
<a href="#NeedsRoles">2. Needs, Roles, Deliverables</a><br />
<a href="#EnvProcesses">3. Environment Processes</a> (sand boxes, permissions, getting to "production")<br />
<a href="#Builds">4. Incremental build of value</a>

<hr />

<a name="Engagement"></a>

## 1. Engagement

Who's involved? When and How do we meet? Where do we store our notes?

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

What do we want as <strong>features</strong> of the system?

Which are needs vs. wants?

What are the deliverables toward putting features in the system? 

The list of everything that can be done we call the <strong>Product Backlog</strong>.

To store ideas about features and deliverables, <a target="_blank" href="https://success.salesforce.com/ideaSearch">Salesforce has an Idea Exchange/Search feature</a>. Here is a sample <a target="_blank" href="https://www.atlassian.com/agile/product-management/roadmaps">Roadmap</a> that illustrates the overall timeline:
![agile_roadmap-564x185](https://user-images.githubusercontent.com/300046/43692795-8f0b34d0-98e7-11e8-9d8f-03d9219edcb3.jpg)

Overlaps at points in time would require additional resources or a split in focus of work.

What is the strategy for tradeoffs between quality, cost, time?

What is the definition of "done" or "good enough" for each deliverable? (to minimize surprises later)

All this provides transparency so people know what they are in for.


<a name="EnvProcesses"></a>

## 3. Environment Processes

When everyone is comfortable getting changes into productive use, as a team, is when the team is really working together.

In "green field" situations where an organization is starting from scratch, we begin with a temporary <strong>sample/demo</strong> set of databases and code.

Code includes tests and <strong>utility tools</strong> (Wireframing, Salesforce features, Git, backups, etc.).

This is a key aspect of modern "DevOps" strategy, in order to move fast but also safely.

Every participant is granted a custom set of permissions applicable to his/her role, and provided with training on how to update the sample system. We build security first so the system is always ready for production use.

At the end of this phase, people know whether they can work together using the system.


<a name="Builds"></a>

## 4. Incremental build of value

It is our experience that small increments of useful change is more productive than "big bang" releases. That is because of the greater customer participation and quicker course adjustments possible. 

<strong>User story documents</strong> about what will be created do not cover every detail (not a contract).

Individual <strong>tasks</strong> are defined to realize each deliverable or resolve an impediment. 

To stay targeted on what's most useful (to avoid waste), constant vigilence about tradeoffs and targets, and agreement about them, is necessary. 

We have found it helpful to visualize all the tasks being handled on a <a target="_blank" href="https://www.atlassian.com/agile/tutorials/how-to-do-kanban-with-jira-software">Kanban board</a>, where a card visibly represents each task. This example is of the JIRA system:
![kanban-backlog-648x236-37587](https://user-images.githubusercontent.com/300046/43711538-4fe2e250-9930-11e8-82ca-86ffb47da4c0.jpg)

A card first appears in the "ToDo" column to realize a deliverable or resolve an impediment. 

Cards within each stage are sorted by the highest priority. 
This enables workers to pull tasks rather than having tasks pushed onto them. 

Bottlenecks are avoided when team members are multi-skilled. So skill-building (cross-training) tasks are included among the work (and project time allocation).

When coding begins on a card, it is moved to the "In Progress" ("Doing") stage. 

Cards move into the "Done" column meet all criteria for being shippable to production. Quality is assured by automated tests and <a href="#Checklist">checklist items</a> evaluated as work is done. The objective is for code to be deployed into production automatically when all tests and checklist items are marked complete.

There ar additional stages to enable teamwork: When a task is associated with a person, it is moved to the "Ready" stage while clarifications are discussed. 
Cards in "Testing" stage indicate the need for team review. There is a "blocked" status so others know when to offer help. When a task enters "Ready for Review", stakeholders can jump in.

Each day we hold short meeting when the Product Owner explains the logic of priorities to maximize business value, then resolve conflicts with technical dependencies and <a target="_blank" href="https://kanbantool.com/kanban-library/implementing-kanban/the-daily-kanban-stand-up">impediment tasks</a>. Before each scrum, status and impediments are logged and each person reviews the KanBan board to see what each of us did the day before and what we aim to do that day.

PROTIP: During daily scrums, rather than hold what amounts to a "roll call", each developer summarizes an analysis for how to segment work into discrete units flowing into production, including risk identification and mitigation. Many individuals use the "Pomerdero Technique", which segments each day into 50-minute sessions of work followed by 10 minutes of relaxation. 

How does each person pick SCRUM cards to work on? 

Many teams designate a WIP (Work In Process) limit of how many cards the team can work on simultaneously. This is sometimes necessary to reduce <strong>cycle time</strong> - how long it takes for tasks to travel through the team’s workflow.

Kanban limits the capacity based on preventing multitasking with work-in-progess limits.
Scrum limits capacity by focusing on limited time (2-3 week) section of their backlog. 

While working on each increment, we consider all aspects holistically: the UX, Database Schema Design, Testing, Performance, Migration utilities, manual workarounds, etc. Our focus is delivering working code increments rather than comprehensive documentation.

When changes need to be organized into <strong>releases</strong>, we
keep to a regular cadence of pre-scheduled <strong>system demos</strong> (every two weeks) to review a group of changes going into production. 

If we discover during our work that something can't fit within the "time box", we reduce the scope of features. "Fit in" includes all aspects necessary for "productive use" (security, migrations, testing, training, etc.).

![agile-parallel-751x296.png](https://user-images.githubusercontent.com/300046/43693290-516a4f50-98ea-11e8-8157-d3f3b26e8a24.png)

After each sprint, the team together reflects on what happened and brainstorms possible improvements in how the team works, to define some "actionable experiments". Some call such meetings "retrospectives".


<hr />

## Preparations, Cadence

This diagram summarizes how we roll:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/43689153-1ae54610-98b3-11e8-930d-a51350689efb.jpg">
<img alt="ScrumOverviewResized-972x678.jpg" width="972" height="678" src="https://user-images.githubusercontent.com/300046/43689153-1ae54610-98b3-11e8-930d-a51350689efb.jpg"></a>


The Product Owner prioritizes work items to ensure the team delivers business value. 

Scrum Master is a facilitator of Agile adoption and removes obstacles external to the team.
In some Agile frameworks, the Scrum Master takes does "Project Manager".


## Innovation

The above implements the "5 stages of innovation":

1. Define an innovation project and the key stakeholders you’ll involve.
2. Discover the needs and opportunities of your customer.
3. Dare to imagine a bold solution to fulfill your customers’ needs.
4. Do the work to rapidly demonstrate the validity of your concept and how it will work.
5. Drive momentum to ensure adoption and growth of your vision.

<a name="Checklist"></a>

## Checklist 

An example of checklist:

- [ ] User Stories

TODO: etc.


## Agile within Salesforce

The above are explained in these courses covering development processses within Salesforce:

Trail: <a target="_blank" href="https://trailhead.salesforce.com/en/trails/learn-salesforce-agile-practices">Learn Salesforce Agile Practices</a> consists of:

   * Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/salesforce-agile-basics">Salesforce Agile Basics</a>

   * Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/scrum-and-kanban-at-salesforce">Scrum and Kanban at Salesforce</a> +500
   <br /><br />

Trail: <a target="_blank" href="https://trailhead.salesforce.com/en/trails/run-an-agile-team">Learn Atlassian Agile Practices</a> consists of:

   * Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/agile-basics/">Atlassian Agile Basics</a>

   * Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/agile-frameworks-scrum-and-kanban">Atlassian Overview of Agile Frameworks</a> (Scrum and KanBan) +200

Others:

   * https://developer.salesforce.com/blogs/engineering/2014/08/agile-methodology-salesforce-inside-look.html
   * https://en.wikipedia.org/wiki/Lean_software_development
   * http://sfdcsrini.blogspot.com/2014/10/scrum-agile-basics.html
   * https://developer.salesforce.com/blogs/engineering/2014/08/meet-gus-keeping-salesforce-agile.html (unifying Bugforce, Scrumforce, and QAforce)

Agile Accelerator

   * <a target="_blank" href="https://www.youtube.com/watch?v=BLwNCCr1gZ0">Manage Your Agile Development from Salesforce</a> Oct 26, 2016 Ray Pendyck (<a target="_blank" href="https://twitter.com/raypendyck">@raypendyck</a>) demos Salesforce's <a target="_blank" href="https://appexchange.salesforce.com/listingDetail?listingId=a0N30000000ps3jEAA">Agile Acelerator on AppExchange</a> for licensed users.
   * <a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F9300000009MJV">Agile Accelerator Community</a>
   * <a target="_blank" href="https://appexchange.salesforce.com/servlet/servlet.FileDownload?file=00P3A00000RrREfUAN">Getting Started PDF</a> from Summer '16.

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
