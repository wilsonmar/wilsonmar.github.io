---
layout: post
date: "2017-03-18"
file: "devops-dashboards"
title: "DevOps Dashboards with Hygieia"
excerpt: "All the stats that fits on a dashboard to monitor DevOps activity"
tags: [Clouds, IoT, Metrics]
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

There are several approaches to providing visibility of workflow to DevSecOps, to
display <strong>dashboard</strong> the various statistics of a software delivery pipeline. 

Organizations can make use of general-purpose visualization tools 

There are also purpose-built dashboard software.
Hygieia (pronouced hi-GEE-ya), <a target="_blank" href="https://developer.capitalone.com/opensource-projects/hygieia/">open-sourced by Capital One</a> (the credit card company) 
is named after the <a target="_blank" href="https://www.wikiwand.com/en/Hygieia">
daughter of the Greek god of medicine and personification of hygiene and prevention of illness</a>.


<a name="TeamDashboard"></a>

## Team Dashboard Widget View

Each team has its own "tactical" dashboard to present detailed information real-time:

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/24074613/8b7f7f62-0be2-11e7-9c78-867c0343fd00.jpg">
<img width="400" alt="hygiea-screenshot-2848x1666" src="https://cloud.githubusercontent.com/assets/300046/24074613/8b7f7f62-0be2-11e7-9c78-867c0343fd00.jpg"><br />(Click for pop-up full image)</a>

Hygeia provides visual and quick access to detailed process data collected from several sources, so team members don't have to keep several tabs open:

   * "Build" from individual projects in Jenkins, Bamboo, Hudson, TeamCity, udeploy, xldeploy, <a target="_blank" href="https://github.com/capitalone/Hygieia/tree/master/collectors/build/jenkins-cucumber">Cucumber</a> CI tools

   * "Feature" shows features and items in projects within <strong>JIRA</strong>, versionone.

   * "Code repo" (commits per day) of a specific branch of a single repo collected from within 
   <a target="_blank" href="https://github.com/capitalone/Hygieia/blob/master/collectors/scm/github">GitHub</a>, <a target="_blank" href="https://github.com/capitalone/Hygieia/blob/master/collectors/scm/subversion">Subversion</a>, <a target="_blank" href="https://github.com/capitalone/Hygieia/tree/master/collectors/scm/bitbucket">BitBucket</a>, <a target="_blank" href="https://github.com/capitalone/Hygieia/blob/master/collectors/scm/gitlab">GitLab</a>

   * "Quality" shows code coverage and number of defects found in code scans done by SonarQube

   * "Monitor" shows deployments to servers. Red and green dots represent whether the server is up or down

   * Version numbers in a Maven build specification file

   * "Nexus artifacts" from the binary repository

   * <a target="_blank" href="https://github.com/capitalone/Hygieia/blob/master/collectors/misc/chat-ops">ChatOps</a>

   * <a target="_blank" href="https://github.com/capitalone/Hygieia/blob/master/collectors/cloud/aws">AWS</a>

Additional collectors specified in <a target="_blank" href="https://github.com/capitalone/Hygieia/blob/master/docker-compose.yml">docker-compose.yml</a> include artifactory, appdynamics.  Emmett?

PROTIP: Again, this visibility should not used for those outside the team to meddle with questions such as "why is this particular one 15"?

QUESTION: Does the dashboard cover 
these 16 gates in the pipeline (10 Commandments in octal):

   <a target="_blank" href="https://www.youtube.com/watch?v=6Q0mtVnnthQ">
   DOES16 San Francisco - DevOps at Capital One: Focusing on Pipeline and Measurement
   IT Revolution</a> by Topol Pal, (Director, Engineering Fellow, Capital One)

0. Source code version control
0. Optimum branching strategy [Git and GitHub or GitLab, etc.]
0. Static analysis [SonarQube]
0. Code coverage
0. Vulnerability scan
0. Open source scan [Black Duck]
0. Artifact version control [Nexus or Artifactory]
0. Auto provision
0. Immutable servers
0. Integration testing
0. Performance testing
0. Build, Deploy, Testing automated for every commit
0. Automated Change Order
0. Zero downtime release


<a name="ProgramLevel"></a>

## Program-level Pipeline Dashboard

![hygieia-pgm-shift-left-600x219](https://cloud.githubusercontent.com/assets/300046/24074674/af146176-0be3-11e7-9eac-358a0a657ba7.png)
<a target="_blank" href="https://www.dynatrace.com/blog/scaling-continuous-delivery-shift-left-performance-to-improve-lead-time-pipeline-flow/">*</a>

Added since <a target="_blank" href="https://github.com/capitalone/Hygieia/blob/gh-pages/pages/hygieia/Hygieia2.md">version 2</a> is statistical analysis for <strong>trends</strong> of health and speed.
One row for each team (such as "Tetris" in the example).

PROTIP: I recommend against a competitive comparison of numbers achieved by each team
because that encourages unintended consequences such as increase in hidden quality issues and technical debt.
Each team has different challenges.

Hygieia limits itself to just these environments:

   commit > build > DEV > QA > INT > PERF > PROD


<a name="HealthMetrics"></a>

## Higher Order Metrics

PROTIP: Consider using metrics that reveal "higher order" calculations that can be use to
<strong>predict</strong> future health and be used as the basis for recommendations.

   * Elapsed response time as a function of load?

   ![perf-607x173](https://user-images.githubusercontent.com/300046/31853188-3c88f15a-b64a-11e7-8a79-db8ce889c4a3.jpg)

   Was this pattern of performance predicted from testing?

   * Network latency separate from server response time by having monitoring clients near the server.

   * Difference in response time before and after a change.

   <a target="_blank" href="http://performance1.teachable.com/courses/204458/lectures/3137292">
   <img alt="dashboard-diff-689x291-28926" width="689" src="https://user-images.githubusercontent.com/300046/31932540-657936b6-b85b-11e7-9ba3-4ee4bdbccf86.jpg"></a>

   * <strong>Cycle time</strong> to instantiate a server.

   ![gce-startup-time-640x326](https://user-images.githubusercontent.com/300046/31769426-262e939a-b499-11e7-8c7d-7e4bf0057107.png)

   * Man-Months of backlog in innovations and defect fix effort

   * Man-Months of "Technical Debt"

   * Percent of work <strong>unplanned</strong> ("error budget")

   * Percent of development (coding) innovation vs. repetitive work

   * http://www.veracode.com/services/veracode-vs.-on-premise-tools
   
See

   * http://www.smlcodes.com/tutorials/hygieia-dashboard-tutorial/

<a name="Trends"></a>

## Trends over time 

Displays of <strong>trends</strong> over time are important to keep numbers in perspective,
both to keep from over reacting to momentary anomalies and 
from under-reacting to underlying patterns that need to be fixed.

PROTIP: So it's better to have a set of <strong>rotating dashboards</strong> 
(showing trends) than having just a number on a dashboard <strong>without context</strong> 
to whether that number is "good" or "bad".

PROTIP: Have a <strong>projection</strong> of what was expected at each point in time,
especially in the future.

Having an arbitrary <strong>target number can be counter-productive</strong> unless 
individual employees have a coherent
approach that balances the many conflicting needs.

For example, an insistance on "100% all the time" can lead staff to prioritize caution 
over <strong>innovation</strong>.

QUESTION: Should trend information be considered during a
Production Readiness Review (PRR)?


<a name="Financial"></a>

## Financial and Strategic

<strong>Executives and business managers</strong>
typically focus on <strong>financials</strong> :

   * Total cost per transaction ratio
   * Total cost as percent of revenue
   * Total revenue per employee

Upper management need to manage over a longer time horizon.
So they need to see <strong>trends</strong> over time, especially those 
that reflect <strong>customer experience</strong>
(not just internal processes):

   * Availability of the system 
   * Productivity of end-users using the system being developed, such as<br />
   purchases, invoices, or other business transactions processed during a <strong>peak hour</strong>.

   * Customer Net Promoter Score

   * Employee satisfaction
   * Employee turnover rate
   <br /><br />

Many may balk that the above are not "relevant" to DevOps.
But if not, then how important is the justification for going DevOps?


## Hygieia Build

<a target="_blank" href="
http://www.capitalone.io/Hygieia/setup.html">
http://www.capitalone.io/Hygieia/setup.html</a> references code and automation at<br />
<a target="_blank" href="
https://github.com/capitalone/Hygieia">
https://github.com/capitalone/Hygieia</a>

0. In a Google Compute Cloud Console.

   QUESTION: Is there a Terraform template?

0. Within the Google Cloud Console execute:

   <tt>curl -fsSL https://github.com/wilsonmar/hygieia | sh</tt>


0. Automation to instantiate a cluster of servers to establish Hygieia:


   NOTE: Hygieia was written in Java to store data in a MongoDB database.

   The Hygieia API server exposes REST APIs written in Spring Boot and mysema.querydsl.

   The Hygieia core server provides the UI to data collected.

   <a target="_blank" href="https://stackoverflow.com/questions/21065922/how-to-open-a-specific-port-such-as-9090-in-google-compute-engine">
   Open port 9090</a>

0. Fork <a target="_blank" href="https://github.com/capitalone/Hygieia/">
https://github.com/capitalone/Hygieia</a>
   to your own account.

0. Create a container folder to hold several related repositories.

   git clone https://github.com/ <em>My GitHub Acct</em> /Hygieia

   At the time of writing, this took up 131.1 MB of disk space.

   git clone https://github.com/ <em>My GitHub Acct</em> /Hygieia --depth=1

   At the time of writing, this took up 114.2 MB of disk space.

0. Download and build via maven using pom.xml file:

   <pre><strong>mvn clean install package</strong></pre>

   PROTIP: If you enjoy reading the deluge to the console, expand the Terminal width to avoid wrapping.

   The response:

   <pre>
[INFO] Total time: 08:34 min
[INFO] Finished at: 2017-03-18T21:11:46-04:00
[INFO] Final Memory: 108M/1581M
   </pre>

   At the time of writing, after install the folder takes <strong>1.23 GB of disk space</strong>.

0. Install MongoDB for the API data store
0. Run collectors with properties to connect to CI tools
0. Seteup Dashboard widgets & Visualize

   QUESTION: Can only have one dashboard?


PROTIP: Have computer programs monitor servers and take automatic actions.

## More Info

<a target="_blank" href="https://gitter.im/capitalone/Hygieia/">
https://gitter.im/capitalone/Hygieia</a>

Videos:

* <a target="_blank" href="https://www.youtube.com/watch?v=WuPQOBMmzSE">
https://www.youtube.com/watch?v=WuPQOBMmzSE</a> [4:01] May 10, 2016

* <a target="_blank" href="https://www.youtube.com/watch?v=SoNTA78j0tc">
Introducing Hygieia</a> [4:53] Jul 17, 2015 on CapitalOne's GitHub

* <a target="_blank" href="https://www.youtube.com/watch?v=Iq8M3llEp0k">
https://www.youtube.com/watch?v=Iq8M3llEp0k</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=WZ3S1xOn8Wg">
https://www.youtube.com/watch?v=WZ3S1xOn8Wg</a> (music, no narration)

* <a target="_blank" href="https://www.spreaker.com/user/pureperformance/012-automating-performance-into-the-capi">
   Podcast on automating performance</a>


## Hygieia configuration

There are several gulpfile.js within <tt>$HOME/gits/hygieia/UI/</tt>

* /gulpfile.js
* /node_modules/gulp-angular-filesort/node_modules/ng-dependencies/node_modules/estraverse/gulpfile.js
* /node_modules/gulp-angular-filesort/node_modules/ng-dependencies/gulpfile.js
* /node_modules/gulp-less/examples/gulpfile.js
* /node_modules/browser-sync/node_modules/dev-ip/gulpfile.js
* /node_modules/browser-sync/node_modules/browser-sync-client/gulpfile.js
* /node_modules/gulp-css-globbing/node_modules/vinyl-map/example/gulpfile.js
* /node_modules/gulp-csso/gulpfile.js
<br /><br />

To change the default port, change the gulpfile.js from $HOME/gits/hygieia/UI/

   <pre>
      browserSync.init({
          server: {
              baseDir: hygieia.dist,
              startPath: '/',
              middleware: [proxyMiddleware]
          },
          ghostMode: ghostMode
      });
   </pre>

to this:

   <pre>
       browserSync.init({
          port: 9999,
          server: {
              baseDir: hygieia.dist,
              startPath: '/',
              middleware: [proxyMiddleware]
          },
          ghostMode: ghostMode
      });
   </pre>


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
