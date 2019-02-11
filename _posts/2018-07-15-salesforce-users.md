---
layout: post
title: "Salesforce Users"
excerpt: "Roles, Personas"
tags: [salesforce]
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

There are differant ways Salesforce, project managers, and developers categorize users.


<a name="Permissions"></a>
<img align="right" alt="sf-profiles-209x415.jpg" width="209" src="https://user-images.githubusercontent.com/300046/44485761-e0702900-a60e-11e8-8a1e-df4f5cb3c2c9.jpg">


## Permissions by Profile

There are many in addition to the 6 standard profiles which can have unique field visibility, page layout, and permissions:

* Administrator
* Solution Manager
* Read Only
* Standard User
* Marketing User
* Contract Manager

Up to 1000 <strong>Permission sets</strong> per org can be setup to grant additive permissions without changing user profiles.

<a name="Personas"></a>

## User Personas

Base on <a target="_blank" href="https://trailhead.salesforce.com/modules/ux-personas-for-salesforce">Trailhead module: UX Personas for Salesforce</a> [1 hr 10 min] 

A "persona" represents a group of users clustered based on shared behavior, motivations, goals, pain points, or other characteristics. A persona is an archetype that represents a group of users clustered based on shared behaviors, motivations, goals, pain points, or other characteristics. During the design and development process, persona categories stand in for key user groups when making decisions about your product, by representing major differences between groups. Personas can be useful for building empathy and making the users seem real. Effective personas are created based on <a target="_blank" href="https://trailhead.salesforce.com/module/ux-research-basics"> research</a> and <a target="_blank" href="https://developer.salesforce.com/files/ux-personas-ServiceCloudPersonaSurvey.pdf">surveys (pdf)</a> to ensure that they reflect the real people who use your product.<a target="_blank" href="https://www.amazon.com/Essential-Persona-Lifecycle-Building-Personas/dp/0123814189/">*</a>  
Personas should be based on general work tasks users perform in their roles, rather than just what they do in Salesforce. 

<a target="_blank" href="https://developer.salesforce.com/files/ux-personas-sales-personas.pdf">PDF: Sales Persona</a>:

   * Data Expert
   * Deal Closer
   * Pipeline Builder
   * Sales Leader
   * Trusted Advisor
   <br /><br />

<a target="_blank" href="https://developer.salesforce.com/files/ux-personas-service-personas.pdf">PDF: Service Persona</a>

   * Service Admin
   * Case Solver
   * Expert Agent
   * Team Leader
   * Trusted Advisor
   <br /><br />

<a target="_blank" href="https://developer.salesforce.com/files/marketing.pdf">PDF: Marketing Persona</a>

   * Designer-Developer
   * IT Services
   * Marketing Manager
   * Marketing Specialist
   * Strategic Leader
   <br /><br />

<a target="_blank" href="https://developer.salesforce.com/files/community-persona-cards.pdf">PDF: Community Persona</a>

   * Community End User
   * Community Manager
   * Community Admin
   * Community Builder
   <br /><br />


### Development Lifecycle Roles

In a smaller company, one person can wear many hats, but in a larger company, specialized roles define what each person is responsible for. Logical roles include the following:

* <strong>Release manager</strong> manages the release schedule and coordinates releases with the business. The release manager could be in charge of pulling changes from version control.
* <strong>Product manager</strong> provides the business requirements of apps and features, and works with the development team to implement those requirements. The product manager also performs user acceptance testing to ensure that requirements have been implemented.
* <strong>Software developer</strong> develops new functionality in sandbox, including both declarative point-and-click development and code.
* <strong>Quality engineer</strong> tests new functionality in sandbox.
* <strong>Administrator</strong> performs administrative tasks in the production org, and tracks all changes made in production.
* <strong>Trainer</strong> conducts training of company employees for new applications and features.

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
