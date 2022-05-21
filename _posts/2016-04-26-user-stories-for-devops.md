---
layout: post
title: "DevOps User Stories by Persona"
excerpt: "Value from autonomous speed"
tags: [text to speech, JavaScript, programming]
date: "2016-04-26"
file: "user-stories-for-devops"
image:
# feature: pic waiting window
  feature: https://cloud.githubusercontent.com/assets/300046/14885988/a5994c60-0d0b-11e6-9f4e-e593d248248f.jpg
  credit: Delta College
  creditlink: https://www.deltacollege.edu/dept/publicinfo/prel/2012/2012-13DeltaScholarships.html
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />
{% include _toc.html %}

User stories have become the primary method used by agile teams for defining what value is provided by a system being built.

{% include whatever.html %}

## Separation of duties #

   <amp-img width="819" height="406" alt="newgen net-devops 819x406" layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/15799299/3c3aec34-2a15-11e6-8660-2c8ea007ace8.jpg"></amp-img>
   <br /><br />

   Another viewpoint by workflow lifecycle adopted by the Atlas product from HashiCorp:

   <amp-img width="651" height="356" alt="hashicorp atlas 2014-12-08-at-10-09-am.png"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16084480/3664cfcc-32d6-11e6-91a2-f3bffad430b8.png"></amp-img>


## Personas #

How can the organization as a whole more efficiently and effectively handle increasing <strong>complexity</strong>,
increase scale, yet move more rapidly and innovatively?

The strategy of "devops" is:

   * <a href="#Developer">Developers</a> <strong>enabled</strong> with what they need to move quickly.
   This means multi-disciplinary full-stack skills are necessary among developers.

   * <a href="#Sysadmin">Sysadmin (ops)</a> providing to autonomous developers 
   <strong>shared infrastructure</strong> 
   (networks, switches, DNS, load balancers, LDAP, NTP, CAs, monitoring, logging, etc.).
   This means increasing efforts toward training, and support 
   rather than simply controlling access to servers.

   * <a href="#QA">QA (Quality Assurance)</a> integrated among developers
   to provide the <strong>continuous testing</strong> which 
   provides both early warning and safety-net for faster and more frequent deployments.

   * <a href="#FinancialSponsor">Financial sponsor</a> ("management") 
   seeing reduced risk, lower expenses, higher revenues, with increased business agility.


## User Story format #

To facilitate <strong>estimation</strong>,
each user story defined below is a <strong>summary</strong> that fits on 3x5 inch index card,
following this prototype pattern:

      As a [role], I want to [do something] [with some frequency]
      so that I can/will [achieve some goal/objective].

The above is from the Mike Cohn book <a target="_blank" href="http://www.amazon.com/dp/0321205685?tag=tbrb-20&link_code=as3&creativeASIN=0321205685&creative=373489&camp=211189">
      User Stories Applied</a>.

<a name="Developer"></a>

### Developer user stories #

* As a developer or end user,
   I can request an environment and all supporting environments
   (with networking constructs) on demand or self serviced.

* As a developer, 
   when I need to perform a very small (i.e. cosmetic) change,
   I can **deploy** it in less than 1 hour.

* As a developer 
   I understand **operational requirements** for my application (not just user requirements)
   (servers, IP addresses, sizes, apps, folders, files, etc.)

* As a developer, 
   I understand the operational environment into which my application will be deployed.

* As a developer, when <strong>starting</strong> with a new customer/project,
  I can be up and running (full working environment) in **less than 1 hour**.

* As a developer, I need <strong>feedback</strong>
   from operations on the impacts of my application on the **operational environment**
   so I can improve its behavior over time.
   (memory usage, disk space, network bandwidth usage, etc.)

* As a developer, 
   I am notified when <strong>application performance</strong>
   falls above or below applicable **thresholds**.

* As a developer,
  I am notified when applications **crash** or are consuming too many resources in a production environment.

* As a developer, 
   I receive periodic reports on application usage so that I can see **trends over time**.

* As a developer,
   I maintain build step configurations in <strong>only one location</strong>
   to reduce the risk of configuration divergence.

* As a <strike>Sys Admin</strike> Developer, 
   I know what parts of the configuration **can be tuned**.

* As a <strike>Sys Admin</strike> Developer, 
   I have insight into the internal states and behavior of the applications that are deployed so I can operate and
   **tune** them most effectively.

* As a <strike>Sys Admin</strike> Developer, 
   I have an **overview of the application architecture** so that
   I know which applications depend on which services.



<a name="QA"></a>

### Quality Assurance

Different organizations have different approaches.

<a name="Sysadmin"></a>

### System Admin user stories

When a PaaS service such as Amazon/Azure are used, these are provided by those vendors.

* As a Sys Admin, 
   I know the <strong>pattern of developer usage</strong> so
   I can prepare adequate <strong>capacity</strong>.

* As a Sys Admin, 
   I know when security anomalies occur so
   I can protect services from malicious attack.


<a name="FinancialSponsor"></a>

### Financial sponsor stories #

* As a Sponsor, 
   I know the scope of various <strong>risks</strong> that exist
   (such as availability, latency, capacity, testability, etc.)
   so I can manage investor expectations and allocate adequate reserves.

* As a Sponsor, 
   I know the extent risks have been mitigated.

* As a Sponsor, 
   I know the payback period
   from expense incurred vs. resulting risk reduction
   so I can prove we are increasing investor value.


<a name="Fleshing"></a>

## Fleshing out stories #

User stories are unique to each team due to different priorities.
So <strong>conversations</strong> about each is necessary,
so that
<strong>acceptance tests</strong>
define the details of each story.

Use cases usually contain multiple <strong>scenarios</strong>
(basic flow, alternate flows, exception flows).

User stories not fully flushed out or
too large to be completed in one iteration (or sprint)
are called "Epics".

The full list of user stories is the
**product backlog**.
The Product Owner holds planning sessions to
ensure that all relevant users stories
contain sufficient detail and prioritized
into releases or sprints.

<a name="QualityMetrics"></a>

## Quality metrics #

To judge the "goodness" of each user story, teams often use criteria
with the acronym INVEST:

- [ ] **I**ndependent of dependencies other work (blocked waiting to get done).

- [ ] **N**egotiable rather than firm contracts about when they are implemented.
   (Negotiation of technical implementations can be facilitated by using the TeamCity Meta-Runner).

- [ ] **V**aluable to someone (end-user customers, business, developers, operations, etc.)

- [ ] **E**stimable in effort because a clear definition of what is in and out of scope makes for better estimates. 
   This includes build steps.
   This does not include limitless refactoring.

- [ ] **S**mall so they are not vague.

- [ ] **T**estable so what is considered "done" is clear to all.


## Basis for estimation #

User stories are used as the basis for estimating, planning, and whether value was delivered to customers.

A key DevOps strategy is bringing small increments through into productive use,
which exposes process issues that need tuning.

### Trade-offs #

One-word summary of the trade-off in the impact in additional complexity:

| **Values &amp;<br /> principals** | **Complexities** |
| Autonomy | Communication |
| Speed of change | Execution |
| Scale | Resilience |
| Composability | Maintenance |
| Tech diversity | Operational |

This is explained by <a target="_blank" href="https://www.thoughtworks.com/insights/blog/microservices-lessons-frontline">
"Real World Microservices: Lessons from the Front Lines" by Zhamak Dehghani at ThoughtWorks Australia 24 Sep 2014</a>.


## Resources #

* <a target="_blank" href="http://scaledagileframework.com/">
   Scaled Agile Framework</a> and SAFe are trademarks of Leffingwell and Associates 
   have refined their enterprise approach over many projects,
   with well-defined roles that fit within corporate strategic themes applied to budgets for value streams.

* http://brentmcconnell.com/2014/02/devops-user-stories/

* https://www.ibm.com/developerworks/community/blogs/c914709e-8097-4537-92ef-8982fc416138/entry/agile_in_practices_user_stories_explained2?lang=en

* https://www.thoughtworks.com/p2magazine/issue12/treat-devops-stories-like-user-stories/

* http://www.devopsonline.co.uk/

* <a target="_blank" href="https://www.lucidchart.com/blog/devops-process-flow">lucidchart.com/blog/devops-process-flow</a> describes the <a target="_blank" href="https://interactive.linuxacademy.com/diagrams/DevopsDoctrine.html">DevOps Doctrine Lucid Chart</a> shown in LinuxAcademy.com's video course.


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
