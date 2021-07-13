---
layout: post
title: "Shift-Left Load Testing"
excerpt: "How to achieve earlier feedback"
tags: [PerfTest]
date: "2016-11-15"
file: "shift-left-load-testing"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Monolitic History

Traditionally, when software was built using a "monolithic" architecture, 
the entire set of functionality is often not available until late during the software development lifecycle. 
So load testing occurred near when software went live in production.

This often meant that issues were discovered too late for changes to occur.

The assumption of monolithic component availability is often reflected in load tests being structured the same way.
Namely, a single script is created that does registration, login, browse, shop, buy, etc.



## RESTful Revolution 

The adoption of REST API means that pieces of the whole system can be available for performance testing earlier,
and on an on-demand basis.

<!-- ![ibm-openwhisk-arch-720x168](https://cloud.githubusercontent.com/assets/300046/25739620/aa1efd38-3150-11e7-8f7f-9438274e48e4.png)
-->


### Invoke externally

Enable developers and operations people to invoke and view load tests using tools they already use.

- [ ] So that a special program UI doesn't have to be accessed, have Jenkins kick-off load test runs.

- [ ] Enable developers to independently kick off load jobs push by doing a 
   <strong>git push</strong> to a branch (such as "loadtest"), using a methodology and tool they use regularly.

- [ ] Suggest command-line aliases to save developers time.

("Jenkins" is referenced here as a generic term for CI/CD tools that include Hudson, Bamboo, TravisCI, etc.)


### Make access to test reports effortless

- [ ] When developers independently kick off load tests on Jenkins, 
receive run results via a link in an email.
That link would provide the test run report generated.

- [ ] Automate reporting of trends from runs in an environment/tool developers are comfortable using, 
such as on Confluence or other wiki.



### Structure test code for flexibility

- [ ] Structure error handling to bypass components in error and continue to other components.
   Do not simply stop when an error is encountered.

- [ ] Structure test code to be "data driven".

   Structure code to run based a list which contain flags that specify whether specific component is tested during each particular run.



### Stress specific system components

This means that landing, registration, login, shop, buy, etc. run as stand-alone jobs to test different specialized servers.

   * The script that does just landing is used to detect network conditions over time and server availability.

   * The script that does just login is used to identify the availability and capacity of authentication services.

   * The script that does just shopping cart handling is used to identify the availability and capacity of back-end fulfillment services and payment gateways.


### Build system tests during construction

- [ ] Build system test scripts during component development.

   This provides early feedback.



### Dynamically create test code

- [ ] Comment "critical" sections of code where performance can be of concern (such as reading of databases or handling of large amounts of data).

- [ ] Write a parser to identify critical sections throughout the code automatically. This ensures easy identification of testing needs.

- [ ] Conduct test runs periodically to report on progress over time.


### Dynamically create test environments

- [ ] Automate the creation of load testing scenarios and Jenkins jobs specific to components.

- [ ] Provide small integration environments with service virtualization (using CA-LISA, Perforce, etc.).

- [ ] Provision temporary test environments using Docker, etc.

- [ ] Use scripts to automate provisioning so elements of each builds remain consistent.


## Resources

* https://www.youtube.com/watch?v=W2Um3yss8G0
   Shift Left: What does that mean?
   by Jim Parson

* https://www.youtube.com/watch?v=XQeZ484kSeU
   How DevOps impact QA

* https://www.youtube.com/watch?v=GlzOcgh0ST0
   Shift Left - Find defects earlier through automated test and deployment
   by IBM Software Education

* https://www.youtube.com/watch?v=9YGchzL-yFw
   Test Automation Trends for 2016 and Beyond
   by Sauce Labs

* https://www.youtube.com/watch?v=kWdwq4uX7n0
   Shifting Left - A More Intelligent Direction
   by Mike Bartley

* https://www.youtube.com/watch?v=YB0ynI_8Hnk
   Test Strategy for DevOps
   by SolutionsIQ India

* https://www.youtube.com/watch?v=QNx73xuFlWg
   Shifting Left on Your Journey to Continuous Testing | Adam Auerbach | STARWEST
   by TechWell Happenings

* https://www.youtube.com/watch?v=tCANF_jnN9o
   Continuous Testing in a DevOps World
   by Zephyr
   