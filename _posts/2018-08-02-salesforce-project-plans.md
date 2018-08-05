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

<a href="#Engagement">1. Engagement</a> 

<a href="#NeedsRoles">2. Needs, Roles, Deliverables</a>

<a href="#EnvProcesses">3. Environment Processes</a> (sand boxes, permissions, getting to "production")

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

What are the deliverables? The "Product Backlog" of everything that can be done are a superset of what is actually targeted to be built during each "sprint" of work.

Which role is responsible for each deliverable?

What is the strategy for tradeoffs between quality, cost, time?

What is the definition of "done" or "good enough" for each deliverable? (to minimize surprises later)

All this provides transparency so people know what they are in for.


<a name="EnvProcesses"></a>

## 3. Environment Processes

We want everyone to have a way to achieve a clear understanding of how to get changes into productive use, as a team.

In "green field" situations where an organization is starting from scratch, we begin with a <strong>sample/demo</strong> set of databases and code.

Code includes tests and <strong>utility tools</strong> (Wireframing, Salesforce features, Git, backups, etc.).

This is a key aspect of modern "DevOps" strategy, in order to move fast but also safely.

Every participant is granted a custom set of permissions applicable to his/her role, and provided with training on how to update the sample system. We build security first so the system is always ready for production use.

At the end of this phase, people know whether they can work together using the system.


<a name="Builds"></a>

## 4. Incremental build of value

It is our experience that small increments of useful change is more productive than "big bang" releases. That is because of the greater customer participation and quicker course adjustments possible. 

User story documents about what will be created do not cover every detail (not a contract).

While working on each increment, we consider all aspects holistically: the UX, Database Schema Design, Testing, Performance, Migration utilities, manual workarounds, etc. Our focus is delivering working code increments rather than comprehensive documentation.

To stay targeted on what's most useful (avoid waste), constant vigilence about tradeoffs and targets, and agreement about them, is necessary. We know what each of us did the day before, what is blocking us, and what we aim to do the same day because we, on a daily basis, hold short "scrums" (as in rugby). Most of all, this enable multi-skilled team members to quickly double-up on or take over tasks when necessary.

We keep a regular cadence of pre-scheduled system demos (every two weeks) based on agreements reached in the previous meeting. If we discover during our work that something won't fit within the "time box", we reduce the scope. "Fit in" includes all aspects necessary for "productive use" (security, migrations, testing, training, etc.).

The "retrospective" after each sprint is when the team analyzes improvement in how the team works, and plan for some "actionable experiments".

<hr />

## Preparations, Cadence, Roles

<a target="_blank" href="https://user-images.githubusercontent.com/300046/43689153-1ae54610-98b3-11e8-930d-a51350689efb.jpg">
<img alt="ScrumOverviewResized-972x678.jpg" width="972" height="678" src="https://user-images.githubusercontent.com/300046/43689153-1ae54610-98b3-11e8-930d-a51350689efb.jpg"></a>

Those who review designs are expected to do so while work is being done rather than "grandstand" during the demo.

## Checklist 

[ ] User Stories

## Agile Processes

The above are explained in these courses covering development processses within Salesforce:

Trail: <a target="_blank" href="https://trailhead.salesforce.com/en/trails/learn-salesforce-agile-practices">Learn Salesforce Agile Practices</a> consists of:

   * Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/salesforce-agile-basics">Salesforce Agile Basics</a>

   * Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/scrum-and-kanban-at-salesforce">Scrum and Kanban at Salesforce</a> +500
   <br /><br />

Trail: <a target="_blank" href="https://trailhead.salesforce.com/en/trails/run-an-agile-team">Learn Atlassian Agile Practices</a> consists of:

   * Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/agile-basics/">Atlassian Agile Basics</a>

   * Trailhead Module: <a target="_blank" href="https://trailhead.salesforce.com/en/modules/agile-frameworks-scrum-and-kanban">Atlassian Overview of Agile Frameworks</a> +200


## Tools

   * <a target="_blank" href="https://success.salesforce.com/ideaSearch">
   Salesforce Idea Exchange/Search</a> lists all submission across all products.

To track progress, many teams use a Kanban board, where a card represents each task worked on. A card first appears in "Upcoming" state. Cards within a stage are sorted by the highest priority. When a task is assigned, it is moved to the "Ready" stage during planning. Many teams designate a WIP (Work In Process) limit of how many cards the team can work on simultaneously. When ready, the card is moved to the "Dev" stage, then "Testing". There is a stage for blocked tasks. When completed, it's "Ready for Review". Cards in the "Done" column meet all criteria for being shippable to production.

The above implements the "5 stages of innovation":

1. Define an innovation project and the key stakeholders you’ll involve.
2. Discover the needs and opportunities of your customer.
3. Dare to imagine a bold solution to fulfill your customers’ needs.
4. Do the work to rapidly demonstrate the validity of your concept and how it will work.
5. Drive momentum to ensure adoption and growth of your vision.

## References

* https://en.wikipedia.org/wiki/Lean_software_development
* http://sfdcsrini.blogspot.com/2014/10/scrum-agile-basics.html

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
