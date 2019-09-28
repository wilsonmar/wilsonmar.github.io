---
layout: post
title: "Software Evaluation Criteria"
excerpt: "Example of a comparison of competing tools"
tags: [Software]
date: "2107-03-21"
file: "software-evaluation-criteria"
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

The subject here is about configuration management software.

But the headings and approach applies to other categories as well.


## Individual Vendor Organization

   Profitability

   Glassdoor employee ratings

   Key developers' position among programming communities

   * SaltStack is written in Python

## Comparative trends

   ### When introduced

   <img width="959" alt="cm-tools introduction" src="https://cloud.githubusercontent.com/assets/300046/24195780/85230e80-0ed1-11e7-8b23-75e5c9c9c5a1.png">

   ### Market share estimates

   ### Industry Analyst (Gartner) ratings

   ### Google search occurances

   ### Polls

   ![cm-tools-2015-902x395](https://cloud.githubusercontent.com/assets/300046/24145624/6587a94c-0e08-11e7-85e4-ba9ccb164d8c.png)

   As we all learned during the 2016 presidential election, polls can be very wrong
   because of biases blind-siding pollsters.

   ### Job posting mentions 

   ![indeed cm job trend](https://cloud.githubusercontent.com/assets/300046/24151871/5b1a0744-0e20-11e7-895f-035c1b87eaeb.png)

   https://www.indeed.com/jobtrends/q-puppet-q-Ansible-q-Chef-q-Saltstack-or-salt.html

   ### LinkedIn profile mentions

   LinkedIn Search for people mentioning the product keywords in their profile. 


## Editions

   Free unlimited trials

## Ease of setup

   * Dockerized
   * Ansible
   * Puppet
   * Chef

   Ansible makes use of SSH and Python, which are built into Linux operating systems.

## Ease of uninstall

   Transitioning from one tool to another is inevitable.

## Server Configuration automation

   Ansible and Salt configuration files are in YAML format - administrator oriented and thus easy to learn.
   Puppet DSL and Chef Ruby DSL (Domain-Specific Language) require programming skill.
   (steep learning curve)

   Sample settings provided, with explanations

   Sample user projects provided

## UI configuration


## Ease of Use

   Screen layout 

   User Registration

   User Login

   User Password recovery

   Menus

   Listings

   Reports/Analytics Graphs

   Export

   Import

## Workflow Automation

## Management

## Performance speed

## Scalability of architecture

   Ansible runs with a single active node, called the primary instance. 
   If the primary goes down, a secondary instance takes its place.
   Chef uses the term primary and backup server.
   Puppet and Salt uses the term active master in a multi-master architecture.

   Ansible servers pushes configurations to all nodes, which immediately executes.
   Puppet clients <strong>pulls</strong> configurations from the Server.
   Salstack same.

# Availability

# Interoperability


## Examples

https://www.youtube.com/watch?v=OmRxKQHtDbY
Chef vs Puppet vs Ansible vs SaltStack | Configuration Management Tools Comparison 
by Edureka

https://www.youtube.com/watch?v=2H95tx7Fuv4
Chef vs. Puppet vs. Ansible vs. Salt - What's Best for Deploying and Managing OpenStack?
(for running OpenStack) at the OpenStack Summit 2015
by OpenStack Foundation
