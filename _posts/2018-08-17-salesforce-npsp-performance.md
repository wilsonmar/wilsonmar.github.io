---
layout: post
title: "Salesforce NPSP performance"
excerpt: "How Gatling is used to measure the speed and capacity of microservices for Salesforce add-on NPSP (Non-Profit Success Pack)"
tags: [salesforce, gatling]
file: salesforce-npsp-performance.md
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

This is not documentation, but a step-by-step exploration tour with commentary. There are so few good examples of how Gatling is used. And I'd like to be useful to non-profits using Salesforce.

1. Visit the repo:

   <a target="_blank" href="https://github.com/wilsonmar/performance">https://github.com/wilsonmar/performance</a>
   forked from  <a target="_blank" href="https://github.com/SalesforceFoundation">https://github.com/SalesforceFoundation</a> associated with the website <a target="_blank" href="https://www.salesforce.org/">salesforce.org</a> (non-profit).
   Notes says Jason Lantz (jlantz) from Dallas is involved with it.

   ### On your local machine

1. Create and navigate to a container folder.
2. Download or Git clone the Performance framework repo. Either the original or your fork:

   <pre>git clone https://github.com/wilsonmar/performance</pre>

   ### Gradle

   At the root of the repo are files about Gradle.

3. Make sure Gradle is installed on your laptop. On a Mac:

   <pre><strong>brew info gradle</strong></pre>

1. Edit file gradlew. Notice it has no file extension because the first line defines it as a shell file:

   <pre>\#!/usr/bin/env sh</pre>

4. On a Mac, set permissions:
         
   <pre><strong>chmod +x gradlew</strong></pre>

   ### Scala

1. Use a text editor to edit file "build.gradle". At the top of the file is:

   <pre>apply plugin: 'scala'</pre>

   <strong>Scala</strong> is a programming language that runs on top of the Java Virtual Machine (JVM).

   PROTIP: IBM's Cognitive School has a <a target="_blank" href="https://cognitiveclass.ai/courses/introduction-to-scala/">free intro. class on Scala</a>
   See my notes on:
   * <a target="_blank" href="https://wilsonmar.github.io/scala-ecosystem/">the Scala-ecosystem</a>
   * <a target="_blank" href="https://wilsonmar.github.io/scala-programming">Scala-programming</a>
   <br /><br />

3. So make sure Java and Gradle are installed:

   <pre><strong>java --version</strong></pre>

1. Install Scala and make sure it runs. See <a target="_blank" href="https://wilsonmar.github.io/scala-ecosystem/">My notes on Scala's ecosystem</a>
   
   See <a target="_blank" href="https://wilsonmar.github.io/scala-programming/">My notes on Scala programming</a>

   ### Gatling

1. The "dependencies" section within "build.gradle" mentions a Gatling version:

   <pre>
   ext.gatlingVersion = '2.2.5'
    compile group: 'io.gatling', name: 'gatling-app', version: gatlingVersion
    compile group: 'io.gatling', name: 'gatling-recorder', version: gatlingVersion
    compile group: 'io.gatling.highcharts', name: 'gatling-charts-highcharts', version: gatlingVersion
   </pre>


   The NPSP performance framework is built on <strong>Gatling</strong> which is a Netty-based Akka framework written in Scala and thus runs on top of a Java Virtual Machine.

   PROTIP: The advantage of Gatling over competing tools such as LoadRunner and JMeter is that
   those other tools implement each virtual users as threads. However, Gatling implements virtual users as asynchronous messages (Akka), which scales much better and can deal easily with thousands of concurrent users.

   See the <a target="_blank" href="https://gatling.io/2017/04/21/gatling-2-2-5/">blog about 2.2.5 being released on 21 April 2017</a>.

   PROTIP: <a target="_blank" href="https://gatling.io/2018/07/24/gatling-frontline-on-aws-marketplace/">On July 24, 2018 it was announced</a> that the Enterprise version of Gatling is available for rent <a target="_blank" href="https://aws.amazon.com/marketplace/pp/B07DTWPZG8">on the AWS Marketplace of Amazon Linux server images</a>. See <a target="_blank" href="https://gatling.io/gatling-frontline/product-sheet/">the product sheet</a> about Grafana and plug-ins for CI/CD Jenkins, Bamboo, TeamCity.

   QUESTION: Gatling 3 in the next version but it has not been updated since August 2017 at https://oss.sonatype.org/content/repositories/snapshots/io/gatling/highcharts/gatling-charts-highcharts/3.0.0-SNAPSHOT/

1. NOTE: The last release on GitHub was dated April 14, 2016 at:
   https://github.com/gatling/gatling/releases

   Gatling CEO Stephane Landelle (@slandelle) explains in https://github.com/gatling/gatling/issues/3288
   why (in 2016) the company stopped using GitHub releases and tags:
   
   * Github turns git tags into something they call "releases", that are actually only a source download. This might makes sense for scripting languages, but definitively not for a compiled one such as Scala. Because of Github abuse of the "release" word, people used to download this crap and then complain and open issues because they didn't get what they expected...
   * We used to use the sbt-release plugin, which would automatically create tags, but this plugin made our life a misery [sic] and broke several releases so we dropped it.
   * You can get the release content from the milestone
   * Tags would mostly be useful for unfriendly forks
   <br /><br />

   There was some disagreement on this topic vs. GitHub's explanation of how it's designed to use tags and releases: https://help.github.com/articles/about-releases/

1. See current version of docs at:
   https://gatling.io/docs/current/general/

   See the <a target="_blank" href="https://gatling.io/2017/04/21/gatling-2-2-5/">blog about 2.2.5 being released on 21 April 2017</a>.

1. See the <a target="_blank" href="https://oss.sonatype.org/content/repositories/snapshots/io/gatling/highcharts/gatling-charts-highcharts/3.0.0-SNAPSHOT/">Snapshots list of Gatling versions released</a>.

   QUESTION: Gatling 3 in the next version but it has not been updated since August 2017 at 

   PROTIP: <a target="_blank" href="https://gatling.io/2018/07/24/gatling-frontline-on-aws-marketplace/">On July 24, 2018 it was announced</a> that the Enterprise version of Gatling is available for rent <a target="_blank" href="https://aws.amazon.com/marketplace/pp/B07DTWPZG8">on the AWS Marketplace of Amazon Linux server images</a>. See <a target="_blank" href="https://gatling.io/gatling-frontline/product-sheet/">the product sheet</a> about Grafana and plug-ins for CI/CD Jenkins, Bamboo, TeamCity.

1. The marketing home page for Gatling is at https://gatling.io/

   NOTE: Gatling is open sourced by a company in France:

   https://github.com/gatling/gatling#the-application-under-test-

1. See current version of docs at:

   https://gatling.io/docs/current/general/

1. The marketing home page for Gatling is at https://gatling.io/

   NOTE: Gatling is open sourced by a company in France:


   ### incaLoadTest in build.gradle

4. Run a perf test <strong>task</strong> from the command line. On a Mac:
         
   <pre><strong>./gradlew incaLoadTest</strong></pre>

   Alternately, on Windows the gradlew.bat file which makes sure Java is installed.

   <pre><strong>gradlew incaLoadTest</strong></pre>

   NOTE: "gradlew" is a generated gradle wrapper to make the project self contained and independent of the OS installed Gradle version. The Gradle wrapper documentation is found here: 
   https://docs.gradle.org/current/userguide/gradle_wrapper.html

   The response begins with:

   <pre>Downloading https://services.gradle.org/distributions/gradle-4.0-all.zip
   Unzipping /Users/wilsonmar/.gradle/wrapper/dists/...
   </pre>

1. While it's running, run <tt>ps -al</tt> to see tasks running and this is the CMD seen:

   <pre>/Library/Java/JavaVirtualMachines/jdk1.8.0_162.jdk/Contents/Home/bin/jav</pre>

   ### Other tasks in build.gradle

1. Use a text editor to open file "build.gradle" at the root of the repo.

   "incaLoadTest" is defined within file "build.gradle".

1. Notice the tasks in "build.gradle", listed here by the order found in the file:

   * incaLoadTest
   * sandboxGreenSanityLoadTest
   * queryUserProfileLoadTest
   * incaSequentialLoadTest
   * cmsQueryLoadTest
   * contentDataLoader
   * orgAndWorkplaceDataLoader
   * qaTest
   * dynoLoadTest
   * externalapiLoadTest
   * hanLoadTest
   * zuulLoadTest
   <br /><br />

   ### Simulations and Scala injectors

1. In "build.gradle" notice the reference to various "simulations":

   <pre>
   "--simulation", "performance.simulations.Injector",
   </pre>

   Injector code referenced is at:

   <pre>/src/test/scala/performance/simulations</pre>
   
   It contains:

   * Injector_CMSQuery.scala
   * Injector_Dyno.scala
   * Injector_ExternalAPI.scala
   * Injector_Han.scala
   * Injector_OrgTestData.scala
   * Injector_QA.scala
   * Injector_SandboxGreen.scala
   * Injector_SequentialLoad.scala* 
   * Injector_QueryUserProfile.scala 
   * Injector_TestData.scala
   * Injector_Zuul.scala
   * Injector.scala
   <br /><br />

   The <tt>lib</tt> folder contains common code:

   * CommonHeader.scala
   * JenkinsParam.scala
   <br /><br />

3. Edit file <tt>Injector.scala</tt>

   <pre>
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import performance.simulations.scenarios._
import scala.concurrent.duration._
import performance.simulations.lib.JenkinsParam._
   </pre>


1. Now back to the Terminal:

   <pre>
> Task :incaLoadTest
21:33:33.412 [INFO ] a.e.s.Slf4jLogger - Slf4jLogger started
===========--> 88% EXECUTING [9m 34s]
> :incaLoadTest
> IDLE
   </pre>

   It starts with this reponse:

   <pre>
Starting a Gradle Daemon (subsequent builds will be faster)
&nbsp;
> Task :incaLoadTest
22:23:00.735 [INFO ] a.e.s.Slf4jLogger - Slf4jLogger started
export peakRPS=1                ## using fallback
export peakRPS_SequentialLoad=40                ## using fallback
export peakRPS_SequentialLoad_LowRPS=20         ## using fallback
export peakRPS_SandboxGreen=5           ## using fallback
export peakRPS_QueryUserProfile=1               ## using fallback
export peakRPS_QueryCMS=20              ## using fallback
export meanResponseTime=1000            ## using fallback
export response95th=1200                ## using fallback
export response99th=1400                ## using fallback
export errorRate=1              ## using fallback
rampTime  :60
steadyTime  :600
Starting LOAD test, Targeting POSTS only at  1.0 rps.Steady state = 600
22:23:02.135 [INFO ] i.g.c.s.w.ConsoleDataWriter - Initializing
22:23:02.135 [INFO ] i.g.c.s.w.LogFileDataWriter - Initializing
22:23:02.146 [INFO ] i.g.c.s.w.ConsoleDataWriter - Initialized
22:23:02.232 [INFO ] i.g.c.s.w.LogFileDataWriter - Initialized
22:23:02.694 [INFO ] i.g.h.a.HttpEngine - Start warm up
22:23:03.312 [INFO ] i.g.h.a.HttpEngine - Warm up done
Simulation performance.simulations.Injector started...
   </pre>

   https://github.com/gatling/gatling#the-application-under-test-


   ### Results

   Run results are in the <stong>build</stong> folder.

   * In ~/performance/build/tmp are temporary folders compileTestScala and scala/compilerAnalysis 

   * In ~/performance/build/classes/scala/test/performance/simulations are classes from the Scala compiler that are run.

   * In ~/performance/build/gatling-results are injector folders, each containing a simulation.log file.
   There is a line for each assertion.

   * In ~/performance/build/resources/test/performance/data are .csv files like <a name="sourcedata">source data</a>


   <a name="sourcedata"></a>

   ### Source Data Galore

   See <a target="_blank" href="https://github.com/SalesforceFoundation/NPSP-Test-Data">https://github.com/SalesforceFoundation/NPSP-Test-Data</a>
   for 100X data generation.

2. Navigate to framework's data directory so we can explore the files:

   <pre>~/performance/src/test/resources/performance/data</pre>

   The repo contains a significant amount of data values at path:

   <pre>src/test/resources/performance/data</pre>

   Here are the record counts and field headings (head -n 1 <em>file</em>):

   * campaign.csv - 27890 - "id","type","valid_from","valid_to","localized","metadata","created_date","created_by","modified_date","modified_by","org_owner_id"

   * donations.csv - 3279 - "donation_id","rowkey","receipt_ready"
   * impactfund.csv - 19254 - "id","type","created_by"
   * job.csv - 97 - "id"
   * organization2.csv - 7952 - "reseller","divison","org_id","default_processor","account_management_partner","created_date","modified_date","created_by","modified_by","customer_service_partner","giving_baseline","homepage_message_hidden","homepage_featured_cards_hidden","allow_wamp_communication"

   * person.csv - 19 - "id","salutation","firstname","middlename","lastname","suffix","nickname","city","state","postal_code","postal_code_ext","personal_email","dateofbirth","gender","personal_phone","street","street_2","external_id","title","country","latitude","longitude","leadership_recognition_name","anonymous","created_date","modified_date","created_by","modified_by","language_preference","last_login_date","leadership_level","publish_flag","release_flag","preferred_currency","other_gender","avatar_crid","default_payment_token"

   * processor.csv - 39 - "processor_id","payment_method_id","processor_payment_meta"
   * story.csv - 18504 - "id","type","created_by"

   * test.csv - 88703 - id,uuid,name,event_start,storage_recieve_time,storage_update_time,event_offset_mins,storage_offset_mins,is_active,event_stop,monitored_entity_uuid,created_on,updated_on,created_by,updated_by,current_state_uuid,monitored_entity_event_type,parent_alarm_uuid,asset_alias,asset_name,type,source,template_name,templated,user_owner_uuid,tenant_id,parent_id,alarm_processor,limited_visibility,ts_cached,is_trip,recurring,alarm_disposition_date,alarm_disposition_uuid,severity,source_key,alarm_state_uuid,origin,sort_order,if_user_null,original_name,case_uuid



   ### Scenarios

1. Edit the text:

   <pre>import performance.simulations.scenarios._</pre>

   The scenarios folder referenced:
   <pre>src/test/scala/performance/simulations/scenarios</pre>

   * DynoTestRequests.scala
   * ExternalAPI.scala
   * HanRequests.scala
   * PostRequests.scala
   * QARequests.scala
   * SandboxGreenSanity.scala 
   * TestData.scala
   <br /><br />

1. View source for the "io.gatling.core" at:

   https://github.com/gatling/gatling/blob/master/gatling-core/src/main/scala/io/gatling/core/Predef.scala


## Social

@SFDCFoundation

<a target="_blank" href="http://www.salesforce.org/power-of-us"> The Power of Us" community</a> for approved non-profits.

https://github.com/salesforce/vulnreport

<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}


## Wait, there's more. Click one of these ... #

This article is one of a series about tuning and performance:

{% include tuning.html %}

