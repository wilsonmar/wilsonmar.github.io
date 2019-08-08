---
layout: post
title: "Spring Petclinic"
excerpt: "Sample Java Spring app for your abuse and amusement"
tags: [Clouds, IoT]
date: "2016-12-06"
file: "spring-petclinic"
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

This page describes the various ways to 
<a href="#LocalInstall">install</a> 
and load test a sample application for learning and experimenting --
a Java Spring application server program from 
SpringSource (now a division of VMWare)
to explore the operation of utilities such as Jenkins and JVM tools.

See [my tutorial on Spring server suite](/spring-servers/)

   In the introduction of Spring PetClinic Spring Framework 2.5 at<br />
   <a target="_blank" href="http://docs.spring.io/docs/petclinic.html">
   http://docs.spring.io/docs/petclinic.html</a><br />
   the most recent update is 2007.

   Julian Dubois in 2013 blogged about his
   <a target="_blank" href="http://blog.ippon.fr/2013/03/11/">
   performance audit</a> of the app he forked in 2013 at<br />
   <a target="_blank" href="https://github.com/jdubois/spring-petclinic">
   https://github.com/jdubois/spring-petclinic</a>

   However, the 2012 repo references<br />
   <a target="_blank" href="http://spring-petclinic.cloudfoundry.com/">
   http://spring-petclinic.cloudfoundry.com</a>
   which is no longer active.


## Different versions

The canonical, most up-to-date version of the app is at<br />
<a target="_blank" href="https://github.com/spring-projects/spring-petclinic">
https://github.com/spring-projects/spring-petclinic</a>

Its main contributor is  <a target="_blank" href="http://javaetmoi.com/">
paresian</a>  <a target="_blank" href="https://github.com/arey">
Antoine Rey (arey)</a> of
<a target="_blank" href="https://javaetmoi.com/">
javaetmoi.com</a>.

   Alternately, there are forks at<br /><a target="_blank" href="https://github.com/spring-petclinic"> 
   https://github.com/spring-petclinic</a> using Angular and<br />
   https://github.com/spring-petclinic/spring-petclinic-microservices

0. Get it downloaded and installed:

   <pre><strong>git clone https://github.com/spring-projects/spring-petclinic.git
   cd spring-petclinic
   ./mvnw spring-boot:run -e
   </strong></pre>

   <tt>\-\-depth=1</tt> cannot be specified with git clone because different branches are used.

   A whole lot of message should flow by until these last messages:

   <pre>

   </pre>

   PROTIP: The version of the app you use should be of a static instance
   (in a your own fork) so that you have a consistent version to work and debug.

   * <a target="_blank" href="https://github.com/jdubois/spring-petclinic/commit/69e55e406db37a386ff8348a5a84343801169f85">
   JMeter test file</a>


### Start app

   <pre><strong>mvn clean tomcat7;run
   </strong></pre>



<a name="Monitoring"></a>

## Monitoring of the app

* Network response time (Latency)
* HTTP Requests per minute
* Log entries per minute

* App response time per request
* Database response time per request

* Thread State within app
* Errors

* Memory Allocation
* Garbage Collection - time spent in GC

Online Solution:
<a target="_blank" href="http://demo.kieker-monitoring.net/">http://demo.kieker-monitoring.net</a>


<a name="AllFunctionality"></a>

### All Functionality 

0. Click FIND OWNERS.
0. Click Find to list all.
0. Type Betty and click find for a list pre-populated.
0. For owner Betty Davis are pets and visits.
0. Click Edit Owner
0. Click Add New Pet.
0. Click Edit Pet
0. Click Add Visit.
0. Select Veterinarian. Six have been pre-populated.


<a name="Strategy"></a>

## Artificial Load Run Types

Performance and load testing of this app is controlled by 
several values of "RunType"
specified to impose artificial load. 
Keywords in quotes define the various run types.

| RunType | What it verifies |
| ------- | ---------------- |
| <a href="#Landing">Landing</a> | Network variability (is network stable enough?) |
| <a href="#MenuItems">MenuItems</a> | <a href="#Logging">Logging verbosity</a> |
| <a href="#List">List</a> | <a href="#ClientCaching">Client Caching</a>, <a href="#PageLimits">Page Limits</a>, <a href="#DBRead">Database Read Rates</a> |
| <a href="#Search">Search</a> | - |
| <a href="#NewData">NewData</a> | <a href="#DBVar">Data Variation</a>, <a href="#DBWrites">Database Writes</a> |
| <a href="#SignInOut">SignInOut</a> | Authentication Services (how quickly can users ramp up?) |
| <a href="#Errors">Errors</a> | Recovery from error |
| <a href="#All">All</a> | - |

<hr />


   <a name="Landing"></a>

1. <strong>"Landing"</strong> lands on the URL of the site.

   <pre><a target="_blank" href="http://127.0.0.1/petclinic">http://127.0.0.1/petclinic</a></pre>

   This page is also reached by clicking "Home".

   ![jpetclinic-landing-591x361](https://user-images.githubusercontent.com/300046/28250757-942b405a-6a3e-11e7-89f0-2b8fd8e7fa6a.png)

   The PetClinic app is for a group of known vets who take care of 
   pets owned by owners.


   ### Network viability

   This type of load test is run to 
   detect network conditions (variability) between 
   clients (load generators) and servers --
   measurements of response time to a single user 
   clicking every 1-5 minutes over a 24 hour period
   to identify anomalies in <strong>network</strong> throughput
   and other disturbances. The expectation is consistent quick response.

   Are there spikes in response time?
   If so, it is probably due to network or some infrastructure conditions,
   since the app's database is not involved.

   Since this is the first test run, issues with the load testing rig
   is exposed, such as the load test server being reset every day.

   The emulation script needs to detect and handle "Server unavailable" conditions.


   <a name="MenuItems"></a>

2. <strong>"MenuItems"</strong> browse through menu items
   without login or other activity that typically
   stresses the front-end web server rather than back-end database traffic.

   The PetClinic app has a limited menu, with
   the top menu bar remaining visible in all screens throughout the app.

   0. Click FIND OWNERS.
   0. Click VETERINARIAN.
   0. Click Errors.
   0. Click Home.
   <br /><br />

   The above actions are repeated over and over by each virtual user.

   Some automation scripts vary the frequency each specific item is invoked.
   Some emulation scripts use a data-driven approach where a file external to the code specifies the pattern of invocation.

   Rather than coding to click specific items,
   this activity may be specified by a control file 
   which the test program reads to determine how to iterate through items.

   These runs identify issues with front-end caching.


   <a name="Logging"></a>

   ### Logging verbosity

   This is the first opportunity to manage logging functionality and 
   thus disk space growth, archival off the server, etc.

   Different logging levels are needed for different modes of running.
   Diagnostic runs use "debug" level for more verbose output.
   Productive runs use "error" level such that only errors are output.

   favicon.ico


   <a name="List"></a>

3. <strong>"List"</strong> lists all owners in the database
   to assess data retrieval.

   This is run 
   to identify the maximum rate the system can accommodate additions to
   the database.

   The sequence of user actions in the PetClinic:

   0. Click Owners.
   0. Click Find button without entering anything in the search field.
   <br /><br />

   <img alt="SpringSourceList" width="650" src="https://cloud.githubusercontent.com/assets/838318/19727082/2aee6d6c-9b8e-11e6-81fe-e889a5ddfded.png">


   <a name="ClientCaching"></a>

   ### Client Caching 

   Client software (browsers such as Chrome) typically 
   <strong>cache</strong> (store) files downloaded from the server and
   reuse them to avoid unnecessary retrievals.

   This may need to be varied artifically to induce additional load.


   <a name="PageLimits"></a>

   ### Page limits

   Some UI optimize queries by retrieving only the maximum items 
   displayed on each page. This reduces retrieval time, but
   would require additional calls activity and thus load on the system.

   Some apps provide a way for users to control how many items to display
   on a page. 

   Some apps (call "Single Page Apps"), automatically retrieve additional
   pages ("pre-fetches") the next set of data automatically 
   without waiting for user input, which would inpose additonal load
   but provide user convenience.

   Alas, the PetClinic app does not provide user preferences in its UI.


   <a name="DBRead"></a>

   ### Database read rate

   This run type is the first stressing of reading data from the database.

   Measuring the time taken for individual database activities is 
   useful to differentiate time incurred by different 
   configurations of the database or use of different databases.

   This activity is used by "Transaction Tracing" utilities
   by programs such as Dynatrace and CA-APM.


   <a name="Search"></a>

4. <strong>"Search"</strong> generates database calls if
   client software does not check its cache before performing a search.

   Examples are form fields that return an autocomplete list.

   The sequence of user actions in the PetClinic:

   0. Click FIND OWNERS in the top menu.
   0. Type in the search box a last name such as "Davis".
   0. Click Find button without entering anything in the search field.
   <br /><br />

   The emulation script needs to identify and resolve errors such
   as "item not found".

   Note that the PetClinic UI does not search by the first name of
   owners.

   The emulation script needs to handle error responses.


   <a name="NewData"></a>

5. <strong>"NewData"</strong> is done to
   identify the maximum rate the system can accommodate 
   <strong>additions</strong> to the database.

   The sequence of user actions in the PetClinic:

   0. Click FIND OWNERS in the top menu.
   0. Click Edit Owner
   0. Click Add New Pet.
   0. Click Edit Pet
   0. Click Add Visit.
   <br /><br />

   The emulation scripts needs to recognize and handle error conditions
   such as invalid data, duplicate add attempts, etc.

   NOTE: The PetClinic app does not provide a UI to add Veterinarians.
   But the UI does provide a link to expose a file the app uses 
   internally to populate the Veternarian screen.
   Such a link is not usually exposed in app end-user UIs.


   <a name="DataVar"></a>

   ### Data Variation

   Variations in registration data from a file is needed
   to load various users.


   <a name="DBWrites"></a>

   ### Database writes

   This is the first stressing of writing of new data into the database.

   Measuring the time taken for individual database activities is 
   useful to differentiate time incurred by different databases.


   <a name="SignInOut"></a>

6. <strong>SignInOut</strong> is not possible with the PetClinic.

   This identifies the maximum rate of users
   arriving at the same time (such as at a call center during start of shift).
   
   A load test of this measures how much memory servers 
   take for each new user. If the app establishes a connection to the 
   database for each user, memory use will increase for each additional user.

   Does memory get recovered from users who have logged off?


   <a name="External"></a>

7. <strong>External Process</strong> items are not possible with the
   PetClinic.

   In an e-commerce app such as the PetStore app, 
   this would be purchase of pets in the cart
   and use of <strong>payment gateways</strong>, which is usually an
   external service.
   The JPetStore sample app does not connect with a payment gateway.

   The question answered by a load test of this type is:<br />
   Can the app and external services keep up with a lot of people buying at once? What does "a lot" mean is the measurement.


   <a name="All"></a>

8. <strong>"All"</strong> means "all the above", done 
   to ensure that the system can handle a pattern of stress 
   during scalability testing.


   <a name="Errors"></a>

9. <strong>"Errors"</strong> type runs purposely invokes 
   the system's response to "negative" tests:

   a. Server unavailable.

   b. Item not found during browsing.

   c. Registration error (such as bad email,
   user already defined, etc.).

   d. Login error, such as forgotten password change.

   e. Search not found.

   etc.


## Reset data

QUESTION: How to reset the Orders data for a user?

This is often handled by Jenkins before each run to ensure the
same starting conditions exist for each separate run.


## Tuning

Back on 3 July 2014 Julien <a target="_blank" href="https://www.youtube.com/watch?v=oR_7EtCgc1M">recorded a presentation (at SpringOne2GX in
Santa Clara, CA) on tuning the Spring Petclinic sample application</a>
using JMeter.

* <a target="_blank" href="https://github.com/jdubois/spring-petclinic">
https://github.com/jdubois/spring-petclinic</a>

* <a target="_blank" href="http://blog.ippon.fr/tag/spring-petclinic">
http://blog.ippon.fr/tag/spring-petclinic</a>

* http://www.pingtimeout.fr/2013/03/petclinic-performance-tuning-about.html
   comments on the above

* https://www.youtube.com/watch?v=mzT7etWjj0Q
   NewRelic


### Internals

Spring-Petclinic is a "classic" MVC-style application, with
<strong>no REST API nor JavaScript front-end libraries such as Bootstrap</strong>.

Michael Isvy on March 20, 2013 presented 
<a target="_blank" href="https://speakerdeck.com/michaelisvy/spring-petclinic-sample-application">
diagrams and code samples</a> describing the 
Spring MVC and Dandelion and WebJars 
used by the sample app.

![petclinic-arch-650x493-85k](https://user-images.githubusercontent.com/300046/28250811-a75d366e-6a3f-11e7-9c1a-34b723e9e541.png)

   * WebJars by https://twitter.com/_JamesWard

   * http://dandelion.github.io/blog/2013/04/24/Integrating-Dandelion-DataTables-in-the-Spring-Petclinic-app
   based on jQuery Datatables and Bootstrap

Aspect-oriented programming (AOP) is an approach to programming that allows global properties of a program to determine how it is compiled into an executable program. AOP can be used with object-oriented programming ("OOP").

An aspect is a subprogram that is associated with a specific property of a program. As that property varies, the effect "ripples" through the entire program. The aspect subprogram is used as part of a new kind of compiler called an "aspect weaver".

The conceptualizers of AOP compare aspect programming to the manufacturing of cloth in which threads are automatically interwoven. Without AOP, programmers must stitch the threads by hand.


## Use case loops #


<a target="_blank" href="https://graphwalker.github.io/petclinic/">
https://graphwalker.github.io/petclinic</a>
uses the <a target="_blank" href="https://www.yworks.com/products/yed"><br />
yEd graph editor</a>
and <a target="_blank" href="http://graphstream-project.org/">
GraphStream</a> to visualize tests as they run.


### Options for performance testing apps

Because the PetClinic app was built for developers, 
missing are some features in the app for use as a sample app
for performance testing.


<hr />

## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}
