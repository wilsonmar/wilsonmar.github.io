---
layout: post
title: "Site Reliability and Load Engineering in Cloud Economics"
excerpt: "How to achieve work productivity, high availability, scalability, resiliency, low latency, at lowest cost?"
tags: [Cloud, perftest]
date: "2019-01-15"
file: "cloud-perftest"
image: # pic-black-bkg-white-cloud_1920x1200
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme Bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


<a target="_blank" href="https://wilsonmar.github.io/cloud-perftest/">This</a> is my draft of sequencing a logical presentation about how to ensure scalability, availability, resilience, and affordability from building, testing, and running computer software applications in production on various cloud environments. 

{% include whatever.html %}

* I begin with the <a href="#TestingTools">"Full Stack" Testing Tools Landscape</a> 
* <a href="#Statics">Static vs. Dynamic HTML generation</a> and <a href="#CDNx">CDNs</a>
* <a href="#RunTypes">Performance test run types</a>

* <a href="#Executables">Executable app architecture</a>
* <a href="#SaaS">SaaS</a>
* <a href="#SingleInstance">Single-instance</a>
* <a href="#MultipleInstances">Multiple (clustered) instances with auto-scaling</a>
* <a href="#Serverless">Serverless</a>
* <a href="#AutoScaling">Auto-scaling</a>
* <a href="#ContainerScaling">Container scaling</a>
* <a href="#Lightsail">Amazon Lightsail</a>
<br /><br />

<!-- TODO: Split up this long page into separate pages, and re-published on Medium as separate parts. -->


<a name="TestingTools"></a>

## Software Testing Tools Landscape

<amp-youtube data-videoid="vUbV4stv_zY" layout="responsive" width="480" height="270"></amp-youtube>
<br />

In this diagram, a lot is going on because I wanted to describe the <strong>overlap</strong> between key tools for both functional and performance testing, supporting unit to integration stages of development. 

I'll be revealing each line and box at a time, starting from apps running in a <strong>system under test</strong>, accessed by an application <strong>client</strong> which today is typically an internet browser such as Google Chrome running on a laptop.

There are several different <strong>types</strong> of testing throughout the development lifecycle. One aspect is to see whether the User Interface <strong>(UI)</strong> displays what users are intended to see. This is typically called "functional testing".
What users see on browsers today are changed by <strong>JavaScript</strong> which manipulate what is in each user's browser Domain Object Model, abbreviated as <strong>(DOM)</strong>. 

Another type of testing targets <strong>unit testing</strong> of REST APIs (Application Programming Interfaces) which computers use to talk with other computers without human interaction, usually transferring JSON-formatted files.
Functional <strong>integration</strong> tests see how various services interact with each other.

Then there is <strong>load</strong> testing which imposes an artificial load to surface issues.
It's done to identify whether the infrastructure can indeed deliver acceptable response time, absorb spikes, scale well, not leak memory, and meet other what are called <strong>non-functional</strong> requirements.

Tools for both categories are here in one diagram because <strong>job descriptions</strong> are now asking for skills that used to be in previously segregated jobs. 
Load testers must now know functional tools. 
Site reliability engineers who used to just monitor things now must also know how to insert synthetic loads.
Developers are expected to know everything. That's the new strategy for small Agile teams.

So let's dive in a bit deeper.

Development teams code JavaScript (even while offline) to use Google's Angular, React from Facebook, Vue, or other library. 
Google created Jasmine to test code using Angular. Jasmine had a "batteries included" approach, so Mocha came along with a focus on assertions, and depended on other libraries such as Chai to innovate on mocking,  snapshotting, and other features. Then Jest was created along with React by Facebook, with the same "one library does it all" strategy, with even more features than Jasmine.
These are unit testing tools.

Built into the Chrome browser are Google's <a target="_blank" href="https://github.com/ChromeDevTools/awesome-chrome-devtools">Developer Tools</a> which are used to manually identify the <strong>identifiers</strong> used to automate the clicking and typing in the UI. 
Selenium scripts reference those identifies through a <strong>Web driver</strong> program which controls each browser. Each web driver exposes an API that automated testing scripts call. This design is why functional test scripts can be written in any language (Java, Python, C#, etc.). Selenium provides a framework for organizing the scripts. 

<!-- To test code in production, some developers code "feature flags" to expose parts of code to a subset of users in production. So now, the specific flags being used at at given time needs to be tracked for correlation to timings. -->

<a target="_blank" href="https://wilsonmar.github.io/protractor/">Protractor</a> adds to Selenium the Cucumber library so it can interpret the <strong>Gherkin</strong> written language to specify tests in a more natural way. 
Protractor also has a better way to dynamically read the DOM (Document Object Model) which stores the state of each user's browser which Angular, React, Vue, or other UI libraries manipulate via JavaScript. 

### API Unit & Integration Testing

To unit test API services exposed by an app, developers often use <strong>Postman</strong> or <strong>SoapUI</strong> because they are a free open-source tool. BTW SoapUI also tests REST APIs exchanging JSON-formatted data as well as SOAP XML.

Karate, Rest Assured, and <a target="_blank" href="https://wilsonmar.github.io/pact/">Pact</a> are called integration testing tools because they are used to catch errors in dependencies among services needing each other.

### Performance?

Those who seek to "left-shift" testing for performance make use of Google's <strong>Lighthouse audits</strong> to get recommendations about techniques to speed up browser display, right in the Chrome browser under <a target="_blank" href="https://github.com/ChromeDevTools/awesome-chrome-devtools">Developer Tools</a>.

<strong>Google Analytics</strong> provides timings for web traffic in public production. 

In the current movement toward reusing functional test scripts for use in performance testing, one approach is to modify functional test scripts to obtain <strong>timings</strong> on each step within the app, and store them in a time-series database so that <strong>alerts</strong> can be issued when anomalies are detected.

But the principal approach for performance engineering is to create an artificial load on apps using <strong>load generators</strong> operated by load testing scripts that replace manual work on real app clients with "synthetic" or <strong>"virtual" users</strong>. The number of virtual users is often used to define the level of load imposed by scripts. While load is being injected, <strong>status</strong> such as the rate of transactions and errors encountered are reported by load generators to some master controller. 

<strong>Metrics</strong> such as CPU and memory utilization within servers are obtained by <a target="_blank" href="https://wilsonmar.github.io/dynatrace">Dynatrace</a> or other monitoring <strong>agents</strong> installed on servers. Results from runs are then analyzed and presented in <strong>dashboards</strong>.

Traditionally, to get load generators to run as many virtual users as possible, load testing scripts don't duplicate what occurs in the browser, but mimic just what is exchanged over the network <strong>wire</strong> between an app and its clients. Communications are captured as load test script lines, then edited to add correlations and verifications. That's what LoadRunner's VuGen, JMeter, and other proxy-based client emulators do. 

Then innovations such as http/2 asynchonous communication and AngularJs code running within browsers cause more and more processing within browsers instead of on servers. So <strong>TruClient for LoadRunner</strong> was created to record and emulate the DOM and actions of each individual virtual user such as clicking buttons and typing on forms. 

JMeter scripts can also make calls to Web Driver APIs like Selenium, albeit with <a target="_blank" href="https://www.blazemeter.com/blog/mixing-selenium-into-your-load-scenario">some limitations</a>.

Taking an alternative approach, <strong>Neoload</strong> can call Selenium scripts as well as scripts created the traditional way.

The newest innovation is <strong>Flood.io's Element</strong>, which, instead of calling Web Driver APIs like Selenium, calls the newer DevTools API protocol using the <a target="_blank" href="https://github.com/GoogleChrome/puppeteer">open-source</a> <a target="_blank" href="https://developers.google.com/web/tools/puppeteer/">Chrome Puppeteer</a> headless browser control technology, both from Google. Their Element scripts can be converted from TOSCA functional test scripts, which uses a low-code approach. That's why they are the new darling among those who test SAP and Salesforce.

This keeping track of each user's browser memory can take up a lot of RAM, so <strong>cloud-based</strong> services makes sense, to use a lot of load generators for a short time, making cloud more affordable than having to buy a bunch of on-premise servers. Cloud services include <a target="_blank" href="https://www.microfocus.com/en-us/products/stormrunner-load-agile-cloud-testing/overview">StormRunner</a>, <a target="_blank" href="https://www.blazemeter.com/">BlazeMeter</a> , <a target="_blank" href="https://flood.io/">Flood.io</a>, and others.

To load test APIs, tools such as <strong>LoadUI</strong> automatically convert SOAPUI unit testing scripts into load testing scripts. SoapUI and Pact files have the advantage of containing <strong>data values</strong> specified during recordings.  <strong>Open API (Swagger)</strong> specs do not contain data values, but variation in a large number of values are needed for any long-running load test anyway.

To achieve "shift left", our objective is to begin load testing as soon as code is pushed or merge from a <strong>local Git</strong> repository to <strong>GitHub</strong> (or other Version Control repository). 

Part of the modern development toolchain are static code <strong>scanners</strong> and dynamic code <strong>profilers</strong> to detect issues while the code is still fresh in the developer's mind. This also applies to security type testing.

<a target="_blank" href="https://wilsonmar.github.io/git-hooks">Hooks in the repository</a> can automatically initiate <strong>build</strong> of app instances, <strong>monitoring</strong>, <strong>profiling</strong>, and other preparations before kicking off a load testing job. When a cascade of automation can step through several test environments if all tests are successful, changes can happen safely yet quickly -- so quickly that they are called "continous integration and delivery", or CI/CD.

Recap:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/54484877-345d8c00-4845-11e9-8894-24d65fcf7979.jpg"><img alt="cloud-perftest-v22-1828x851.jpg" width="1828" src="https://user-images.githubusercontent.com/300046/54484877-345d8c00-4845-11e9-8894-24d65fcf7979.jpg"></a>


<a name="LandingPages"></a>

### Landing Page Efficiencies

More potential and actual customers visit on-line than in person. So it is even more important for an organization's marketing landing page to be fast as its headquarters lobby to be stylish. 

<a target="_blank" href="https://developers.google.com/speed/pagespeed/insights/">Google's Page Speed Insights</a>
points out internal issues such as whether images are compressed enough and the many other specific tricks to make the site as fast as possible. 

   * <a target="_blank" href="https://testmysite.thinkwithgoogle.com/">testmysite.ThinkWithGoogle.com</a> evaluates mobile through 3G and 4G networks. <a target="_blank" href="https://www.thinkwithgoogle.com/feature/mobile/">Google Speed Scorecard</a> compares the speed of various sites in one table.

   * <a target="_blank" href="http://www.webpagetest.org/">webpagetest.org</a> shows what users see, in slow motion</a> of pages in various stages of completeness.

   * <a target="_blank" href="http://checkgzipcompression.com/">http://checkgzipcompression.com</a> reports whether a site has Gzip enabled.

A public cloud enables test clients to be quickly installed around the world to evaluate customer experience. <a target="_blank" Href="https://instapage.com/blog/page-speed-tools">Several sites</a> track <a target="_blank" href="https://geekflare.com/monitor-website-uptime/">uptime availability</a> and how fast landing pages load from various points in the world:

   * <a target="_blank" href="https://www.uptrends.com/free-website-monitoring">uptrends.com</a>, for free, tracks hits to a website and emails to business email addresses
   * <a target="_blank" href="https://www.uptimerobot.com/"> also looks for text on a page to alert to detect defacement, and display results to a public site. For up to 50 sites per account. 
   * <a target="_blank" href="http://yslow.org/">yslow.org</a> is based on work at Yahoo in 2001.
   * <a target="_blank" href="https://gtmetrix.com/">GTMetrix.com</a> includes mobile timings from Samsung Galaxy Nexus phone.
   * <a target="_blank" href="https://tools.pingdom.com/">Pingdom.com</a>, associated with SolarWinds, says free but it's really a 15-day trial.
   * https://tools.keycdn.com/speed
   * https://www.dotcom-tools.com/website-speed-test.aspx
   * http://pagelocity.com/
   <br /><br />


<a name="CDNs"></a>

### CDNs for static vs. Dynamic HTML generation

Instead of a URL using the same host name (server) as HTML, it is now common for images, video, and pdf files to be served on a Content Delivery Network (CDN). 
Such as Amazon's cloudfront.net:

   * "https://d20vrrgs8k4bvw.<strong>cloudfront.net</strong>/documents/en-US/nd209_Robo_syllabus_v2.pdf"
   <br /><br />

<a target="_blank" href="https://www.znetlive.com/blog/comparing-top-4-cdns-amazon-cloudfront-vs-google-cloud-cdn-vs-ibm-cloud-delivery-network-vs-azure-content-delivery-network/">Companies offering CDN services</a> include <a target="_blank" href="https://aws.amazon.com/cloudfront/">AWS CloudFront</a>, 
Microsoft Azure Blob CDN, Google Cloud CDN, Akamai (IBM), CloudFlare, Fastly, Netlify, etc.

Sites running Google Cloud CDN have a <strong>single IP address</strong> that can run everywhere (do not require a separate regional DNS).
IBM provides Wildcard Certificate and Domain Validation (DV) SAN Certificates.
AWS can encrypt individual fields.

Google transfers up to 5TB objects.

QUESTION: How much faster does a CDN (Content Distribution Network) provide resource to viewers in different parts of the world? 
Google charges based on cache fill bandwidth and cache egress bandwidth as well as HTTP/HTTPS requests.

QUESTION: Are resources retrieved faster on AWS Cloudfront because it offers the most Points of Presence (PoP)? (136 vs. Google's 90+, Azure's 54)?
AWS serves Video on Demand 


<a name="Static"></a>

## Static vs. Dynamic CMS sites

The architecture of Content Management Systems (CMS) such as WordPress and Drupal is that they <strong>dynamically generate</strong> HTML presented in response to each request from users. This is great for personalization, but is slower than the newer approach of having <strong>static</strong> HTML files sitting in CDNs distributed for fast retrieval. 

The programming that does the generation within WordPress is written in the PHP programming language.
PHP is an <a target="_blank" href="http://en.wikipedia.org/wiki/Interpreted_language">interpreted language</a>, meaning that PHP programming source code is processed by the PHP interpreter program every time to respond to each new request. 

WordPress and Drupal are among the most popular programs running on the internet because of its vast ecosystem of developers and add-on functionality. To many, the overhead of PHP is worth the features provided by PHP sites that use SugarCRM, WooCommerce, and many others.

<a name="Executables"></a>

## Executable app architectures

PHP and Python are usually slower than programs written in Java, Go, or other programming language <strong>compiled</strong> into low-level run-time files that computers execute.

Java programs require the additional installation of a JVM (Java Virtual Machine) that allocates memory among programs. The programming language Go comes with its own run-time environment.

The difficulty with both interpreted and compiled applications is that one must setup a <strong>server</strong> and populate it with the software, then configure it.
Over time, reconfigure it for security patches (such as for TLS 1.2, Heartbleed, etc.).

Business owners who had a website built must continue to pay thousands of dollars each year for "maintenance" to keep it running.
Patches for operating system security, the PHP interpreter -- every aspect of technology -- must be updated ocassionally. 
This constant maintenance does not add additional functionality to the end user, so is feels like a disruption and waste of time and money.

Enter SaaS in a cloud.


<a name="SaaS"></a>

## SaaS (Software as a Service) for apps in the cloud

To take advantge of the availability of the internet, in the late 1990's 
software vendors such as <a target="_blank" href="https://wilsonmar.github.io/salesforce/">Salesforce</a> emerged to offer users functionality completely through an internet browser. Such vendors take care of providing the underlying technologies such as operating system software, databases, and the "framework" that enables customization of functionality. SaaS vendors also handle hardware provisioning, making sure to have whatever number of servers are available, behind the scenes, like dining at a fine restaurant.

As with regular use of fine restaurants, SaaS offerings can seem expensive to some, costing thousands of dollars for every user, plus additional costs to hold storage. For example, Salesforce charges $5,000 to store one Terabyte of data each month, compared to a multi-terrabyte USB drive for a $100 dollar one-time purchase.

Those who develop using a framework such as Salesforce must first learn all the intracies of their framework and unique programming language -- which can take many months of serious study. 

Enter Serverless.


<a name="Serverless"></a>

## "Serverless"

Since <a target="_blank" href="https://wilsonmar.github.io/serverless/">"Severless"</a> software development capabilities was made available by cloud vendors beginning in 2016, it is capturing the fascination of cool application developers because a developer only needs an internet browser (such as Google Chrome) to create and run applications.

The term "serverless" means that developer does not need to hassle with acquiring server hardware. The cloud vendor (Amazon) provides all the processing.

The advantage of Serverless over SaaS is that the programmer can develop individual "functions" with a more "lightweight" framework reusing other's coding. Functions can be written in several languages (Python, Go, .NET C#, etc.).

But there is a "hassle factor" with Serverless.


## Tuning required

With both SaaS, Serverless, and other shared-cloud environments, programmers must ensure that their code does not run too long or take too much memory, lest the cloud vendor issue errors that prevent execution.<a href="#Task"></a> This is needed both because custom code runs within an infrastructure with others and because costs accumulate for each request made.

Such does not seem as important for those who stand up their own server to host WordPress.

Inefficiencies in WordPress configurations and programming are hidden as lower capacity unless investigated.


<a name="SingleInstance"></a>

## Single instance hosting

Many web hosting companies have sprung up to offer hosting of executables <a target="_blank" href="https://aws.amazon.com/getting-started/tutorials/launch-a-wordpress-website/">(such as WordPress)</a> on the internet.
Several charge just $5 a month or less for a small site.
Such offerings provide a single "process" for each website.
And other websites are on other processes on the same server.

An issue with shared hosting is that several websites on the same server share the same IP address.
So if one of the website is marked as being abusive, all other websites sharing its address also become blocked.

The trouble with a single stand-alone instance is that when a gradually increasing load is placed on it,
eventually the server would become overloaded and fail. The level of transaction throughput at the point of failure is determined by "stress tests".

There are several ways to increase capacity on individual servers.

One alternative is to allocate more RAM on the server to cache and buffer transactions
within each server.

In order to get a given server to process more load, its hardware components can be upgraded manually.
This is called "scaling up".

Magnetic hard drives are slow -- many times slower than the rate CPUs transfer data. But modern SSD (Solid State Disc) drives used today are 8X faster. <a target="_blank" href="https://ss64.com/convert.html">Typical</a> throughput rates:

   * Hard disk = 30 MiB per second. (x8 = 240 Mb/Sec)
   * Gigabit Ethernet = 125 MiB per second. (x8 = 1,000 Mb/Sec)
   * Solid state disc = 250 MiB per second. (x8 = 2,000 Mb/Sec)
   * Fibre Channel = 2,550 MiB per second. (x8 = 20,400 Mb/Sec) 
   <br /><br />

(That's why AWS does not allow the use of magnetic drives as a server boot-up data volume.)

Server manufacturers usually provide more speed along with larger capacity:

   * More cores (vCPUs) and faster CPUs come with larger RAM
   * Faster disk types come with larger capacity disks
   * Faster network performance (speed) interfaces come with larger capacity network pipes
   <br /><br />

For example, to get a server with more RAM, you also pay for more cores (vCPUs) whether you want it or not.

A doubling of RAM usually costs twice as much, or more.
However, upgrading usually doesn't yield the same increase in how much is processed.
For example, a doubling of RAM does not usually yield a doubling of transaction throughput.

QUESTION: So one question performance engineers are asked to answer is whether running two smaller servers processes more transactions than a big server with the equivalent memory of several smaller servers.<a href="#Tasks">*</a>
 
BTW, Amazon sells RAM memory by "GiB" (for Gibibyte) rather than the more traditional "Gigabytes" used by hard disk drive manufacturers to mean 1,000,000,000,when using a "base 10" method of counting, where each digit can have 10 values (from 0 thru 9). Counting each digit, that's 10 to the 9th power.<a target="_blank" href="https://steemit.com/data-science/@deeplizard/hexadecimal-explained-or-higher-than-base-10-positional-numeral-systems">*</a>
A Gibitype is based on "base 2" (1 or 0) counting that computers use internally, and 2 to the 30th power which is equivalent to worth 1,073,741,824 bytes in base 10. The difference between the two increases exponentially as numbers get larger: about 7% at the Gibibyte/Gigabyte level but 9% at the Tibibyte/Terabyte level (the equivalent of 1,099,511,627,776 bytes in base 2).


More "advanced" types of servers can be configured to use <a target="_blank" href="https://docs.microsoft.com/en-us/windows-hardware/drivers/network/overview-of-single-root-i-o-virtualization--sr-iov-">Single-Root I/O Virtualization (SR-IOV)</a> and <a target="_blank" href="https://aws.amazon.com/blogs/aws/elastic-network-adapter-high-performance-network-interface-for-amazon-ec2/">Elastic Network Adapters (ENA)</a> which deliver <strong>20 Gbps</strong> (Gigabits per second) speed. The logical spread of low-latency instances within a single <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">cluster placement group</a> is defined within a single Availability Zone.
BTW Cluster placement groups are defined to ensure that instances in one partition do not share underlying hardware with instances in other partitions. 

QUESTION: Are the higher packet per server (PPS) performance the the above <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking.html">enhanced networking</a> mechanisms worth the price? Nodes within the same placement group communicate at the full line rate of 10 Gpbs flows and <strong>25 aggregate</strong> without any slowing due to over-subscription.
PROTIP: If you are using AWS Direct Connect, private pipes to other data centers are 50 Mbs to 10 Gbps, depending on what you pay for.

Another alternative for increasing throughput is to add a separate <strong>caching server</strong> (such as Redis, MemcacheD, AWS RDS, or ElastiCache) that tries to respond to requests before they hit the web server or database server. 
Cache servers typically holds responses in a large amount of memory.
But to ensure that money for a caching server is not wasted, the <strong>cache hit ratio</strong> should be measured when running under simulated load.


<a name="BusinessObjective"></a>

## Business Objective Economics

The potential for failure due to load may not be of concern for "vanity" websites which don't anticipate a lot of traffic. 

But most businesses websites prefer their websites to be able to handle more business without much manual vigilence.

The big takeaway from this line of thinking is that here we focus on the <strong>business objective</strong> of obtaining the <strong>safest way to achieve the highest rate of business transactions at the least total cost</strong>.<a href="#Tasks">*</a>

The total cost calculation should include the cost of dissatisfied customers who cannot reach the website
or abandon the site (and not buy) when it's too slow due to it being overloaded.

Total costs also includes the time to build and maintain the software.

And also for testing.


### Actual availability

This table of availability SLAs and outage limits:

<table border="1" cellpadding="4" cellspacing="0">
<thead>
<tr valign="bottom"><th>SLA</th><th>Nickname</th><th>Down/year</th><th>Down/Mo.</th><th>Instances</th><th>AZ's</th></tr>
</thead>
<tbody>
<tr valign="top"><td>99.90%</td><td>3 nines</td><td> 8.76 hours </td><td> 43.2 min. </td><td> 1 </td><td> 1 </td></tr>
<tr valign="top"><td>99.95%</td><td>3 and a half nines</td><td> 4.38 hours </td><td>21.56 min.</td><td> 2 </td><td> 1 </td></tr>
<tr valign="top"><td>99.99%</td><td>4 nines</td><td>  52 min. 36 sec. </td><td>4.38 min.</td><td> 2 </td><td> 2 </td></tr>
<tr valign="top"><td>99.999%</td><td>5 nines</td><td> 5 min. 15 sec. </td><td>26.30 sec.</td><td > <a target="_blank" href="https://searchcloudcomputing.techtarget.com/tip/Attain-magical-five-nines-availability-for-cloud-applications">services</a> </td><td> 2+ </td></tr>
</tbody>
</table>

* 99.95% is <a target="_blank" href="https://github.com/enterprise">GitHub's SLA for Enterprise subscribers</a>
* 99.90% is <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/devops/on-premises/">Azure's SLA</a>


## Load Testing

A business can't wait for production (paying) users to generate the load to see if the system really works because then it would be too late .

Compared with the negative consequences of business risks, load testing is needed to identify risks that otherwise lay hidden. For example, programs that open a new connection with the database to service every user (rather than "pooling" connections for reuse) would require additional memory to be allocated on the database. So load tests are needed to determine optimal configuration settings. 

Load testing is done to identify errors in design such as memory "leaks" that consume more and more memory over time, requiring each production server to be rebooted. Load testing is needed to determine how often rather than using some arbitrary time like once every night. Some data centers find they need to reboot every hour.

Traditionally, load testing occurred near the end of projects, but to enable Agile practices, many businesses today seek to "shift left" (ahead in time) so that risks are exposed as development occurs so that they can be fixed while the code is still in developer's minds. To facilitate that, load tests (along with <a href="#Monitoring">monitoring</a>) can be made to automatically begin (by a Continuous Integration utility such as Jenkins) when code is uploaded to a team source repository.

Planning for load testing includes <strong>characterizing</strong> the load coming from various use cases (how many people registering, browsing, buying, etc. at the same time).

Running servers in the cloud makes performance testing easier and more economical than
duplicating the set of production equipment on-premises, which include not just web servers but also
utility servers such as DNS, Active Directory/LDAP, etc.


QUESTIONS: About your app/system:
1. Do users see a formatted "server unavailable" screen when the URL they use does not reach a working service?
2. How quickly can users ramp up? What is "too quick" of a ramp-up?
3. What is the optimal <strong>rate</strong> (per second) transactions can be processed before UX degrades?
4. Does the system come up quickly?
5. Does the system leak memory or consume too much disk space over time?
6. What is the highest temporary <strong>spike</strong> the system can absorb temporarily?
7. How much time does it take to obtain additional capacity (from realization to actual availability)?
8. Can instances be decomissioned automatically? (elasticity)

9. Does the system recover fully after a failure? (resiliency)
10. What is the signal threshold to request additional capacity?
11. What is the maximum <strong>nominal</strong> load on normal days?
12. How much <strong>headroom</strong> is there for future growth? 
<br /><br />

These questions are answered by various types of performance testing.


> "After you have identified your architectural approach, you should use <strong>benchmarking and load testing</strong> data to drive your selection of resource types and configuration options" -- 512 in Amazon's "Performance Efficiency Pillar: AWS Well-Architected Framework (AWS Whitepaper)

<a name="RunTypes"></a>

### Performance test run types

<amp-youtube data-videoid="XmonMzqBxVw" layout="responsive" width="480" height="270"></amp-youtube>
<br />

I'll be presenting this diagram about types of performance testing one concept at a time. The work of performance testing is about imposing different <strong>levels</strong> of load over a period of time. The intensity of load imposed is typically defined by the number of <strong>virtual users</strong> that load generators inject. 

The outcome from load testing experiments is the <strong>rate</strong> of processing (stated in <strong>hits per second</strong> or per minute) which the server can sustain, a metric that can be monitored in production. Finding that optimal rate is one of our major objectives because we want to provide <strong>actionable intelligence</strong> to Operations in production.

The first thing, even while the application is being built, is a way to return a <strong>"service unavailable"</strong> page if the application doesn't respond to browsers pointed at it. It's useful to have an <strong>availability check</strong> on the server running around the clock at perhaps an infrequent one requst every 10 minutes (that's 6 per hour or 144 hits oer day). This is so that if it's down, you'll get an email, because that affects employee and customer productivity and satisfaction. Many such services are offered free.

We begin by identifying the quickest <strong>rate</strong> users can optimally <strong>ramp-up</strong>. We need to know the maximum number of users who can really jump on the system at about the same time. This is so we can predict what will happen at the beginning of a call-center shift or some peak time. The rate new users enter the system can cause a bottleck as well a high number of concurrent users running, because limitations in the <strong>authentication infrastructure</strong> is often a bottleneck.

The scenario that keeps adding more and more new users is called a <strong>Stress Test</strong>. If we start with a very aggressive rate where we see <strong>error</strong> messages, we've made progress because every set of machine has some <strong>bottlenecks</strong>, and our job is to find them. When we identify a particular rate that is <strong>"too quick"</strong>, we ask is it the memory? CPU cycles? Network? Such information is the "heads-up" that Operations people need to know.

We usually need to try different rates to bring up the most number of users the quickest. 

Stress test scenarios are used in <strong>Fail-over tests</strong> run to ensure that users can indeed be diverted to another availability zone or region for disaster recovery.

The point we want to find is NOT the server's <strong>breaking point</strong>, but right before user experience (UX) <strong>degradation</strong> occurs, when response time begins to suffer due to load. That is the true <strong>capacity</strong> of the system under test.

From that capacity level we add <strong>lead time</strong> to calculate the <strong>threshold</strong> when we request additional capacity. If we have on-premises machines, the lead time can be like 6 months. This is why companies working with a fixed capacity would over-buy to get <strong>headroom</strong> to absorb future growth that may not come. The value of an elastic cloud such as Amazon and Azure is that we pay only what we use, when we use it. 

Doing load testing helps us be more precise than just guessing at a CPU percentage as the <strong>threshold</strong> for bringing on another machine. Within a cloud, the lead time to bring up additional capacity includes the time it takes to recognize that additional scaling is necessary. The less headroom we allow, the more usage we can get out of machines we pay for. 

We calculate headroom based on the <strong>nominal actual</strong> level of load -- the momentary <strong>peaks</strong> reached during each day, the level where long <strong>soak tests</strong> are run to ensure the <strong>endurance</strong> of the system over time -- to ensure that the level is sustainable without memory leaks and excessive use of disk space.

This nominal rate is also what we use in the "flat" portion of <strong>Smoke tests</strong> after a ramp-up. Such runs >>> also called "Canary tests" <<< sustain the nominal load for a short period of time, such as 10 minutes, to prove the <strong>viability</strong> of an environment built after configuration changes.

We do <strong>Spike Tests</strong> to verify <strong>resiliency</strong> -- the ability of the system to absorb sudden temporary spikes in load while maintaining adequate response time. The system should then return to previous levels of memory usage when back at the nominal rate of operation.

If we operate a cluster of servers, we need to make sure we have the <strong>elasticity</strong> we hoped for. 

In an elastic cloud environment, we need to ensure that our configurations can indeed <strong>instantiate</strong> additional capacity on a timely basis. Tests of elasticity should also include <strong>un-instantation</strong> tests to make sure that instances are indeed reduced when load recedes below threshold levels.

#### Recap

![cloud-perftest-v08-types-553x276-24044](https://user-images.githubusercontent.com/300046/53589081-6f30a600-3b5c-11e9-978a-f69f0f5c2705.jpg)

Here is the list of the types of performance tests covered in the previous illustration. 

<amp-youtube data-videoid="wg-Cn5A8QKs" layout="responsive" width="480" height="270"></amp-youtube>
<br />

Items in blue font relate specifically to cloud environments built using automation, such as the <strong>threshold to begin scale-out</strong>.

Metrics about <strong>lead time</strong> are important because time is money when we're charged by the minute in the cloud.
The faster we can ramp-up to that maximum rate, the less we have to pay.
The same can be said about ramping down.
Being able to tune systems is where performance engineering efforts really pay off.

Having additional instances for testing performance and fail-over is a <strong>game changer</strong> because it allows simultaneous parallel streams of work to conduct stress tests. Environments need to be <strong>otherwise quiet</strong> to properly measure memory usage during  performance tests. A system is not really usable while it's purposely being brought to the point of degradation.

Having automation and alerting allows us to be quicker at implementing stop-gap measures such as rebooting servers to reclaim memory. Rebooting is not the ideal situation, but it buys us time to focus on root issues.

A comprehensive set of tests in each environment is what makes automatic and fast deployments doable.

But people in Operations who protect the production environment are usually skeptical.

So I think <strong>smoke tests</strong> that include performance testing can have a more important role than many may realize.

We know that rendering judgement about pass/fail too early in the development cycle can stifle innovation and experimentation.

But I'd like to propose a metric that evaluates the "success" of smoke tests.

<a name="infantmortality"></a>

### "Infant Mortality Rate"?

To illustrate the status, I've been using an analogy.

In the medical community, the "Infant Mortality Rate" refers to deaths of live-born babies within the first year of life. Neonatal mortality rates refer to the first 28 days. Early Neonatal Mortality refers to the first 7 days of life.<a target="_blank" href="https://en.wikipedia.org/wiki/Infant_mortality">*</a> They are measured in terms of every 1,000 live births as a proxy measure of the quality of healthcare within a country. For example, the US has over time improved infant mortality, but at a slower rate than other developed countries:<br />
<a target="_blank" href="https://www.healthsystemtracker.org/chart-collection/infant-mortality-u-s-compare-countries/"><img alt="cloud-perftest-infant-946x580-38168.jpg" width="946" src="https://user-images.githubusercontent.com/300046/54491803-a65ec100-4897-11e9-8ac0-beb5b37184e7.jpg"></a><br />(The lower the rate, the better).

The equivalent metric for computer systems would be improvements in <strong>failure during smoke tests per 1,000 deploy attempts in Staging</strong>.

Would you agree with the statement that "the Staging environment is a not a playground?" and that 
"Issues in Staging should have been identified in lower-level environments"?

Many Operations people don't expect (or even tolerate) issues in Staging.
But many developers think differently, and that may cause conflict and distrust.

So should discovery of performance issues and tuning occur in Staging? Being able to spin up duplicate environments in the cloud would help us avoid using Staging as a playground.

What do you think? Would tracking this metric reduce concerns in Operations people who protect their production environment? Would it reduce distrust by providing factual history?

Leave a comment below! Let's have a discussion about this.

<hr />


<a name="ServerImages"></a>

## Server images

Many organizations today build all aspects of the server they use by defining programming code "configuration as code" such as Ansible, Cloud Formation, Terraform, Chef, Puppet, etc.
Such an approach include the storage of configuration code in a source version control repository which can retrieve the full set of all files as they were at specific points in the past. Version control systems such as GitHub and GitLab also track who made changes and why (in comment messages).

Server images created by the configuration code can be saved as server images in binary repositories such as Nexus and Artifactory. The server images are used to spin up each server instance.
When developers share an image with testers, what is tested is exactly what developers end up with.
When testers and operations share an image, what is used in production is what has been tested.

There is another advantage to using server images.
For example, Wordpress is written as an open-source application, so anyone can customize it.
So various teams have created server images that incorporate a pre-tested set of
various components and features such as containing a storefront,
or one that has been tuned for efficient and fast running.

There are several different types of server images:
   * AMI (Amazon Machine Images) within AWS (Amazon Web Services)
   * Virtual machine DisK files (VMDKs) running on VMWare or VirtualBox 
   * Virtual Hard Disk (VHD) files used with Microsoft Virtual Server and Hyper-V hypervisors
   * Docker containers from DockerHub.com, Quary.io, etc.
   <br /><br />

All the images (except Docker) contain the underlying operating system and utilities in each image.

Some AMI creators charge its users money. 
But many pay it because it saves them hassle and time.

QUESTION: Is the extra cost worth the extra savings? Load testing can answer that question.

BTW: Historically, Intel processors are used by AWS, but in 2018, machines with <strong>ARM processors</strong> became available, 
for a 40% cost savings.

QUESTION: To determine the cost of processing using any given server configuration, one needs to measure use of processing, storage, network data transfers, etc. at various levels of user load accessing the server at various points as load increases.<a href="#Tasks">*</a>

> Instead of just testing, "performance engineering" yields <strong>configuration changes which identify cost savings</strong>.

NEXT: Server images are necessary to create multiple instances of the same application, for "elasticitiy".



<a name="MultipleInstances"></a>

## Multiple instances for elasticity, reliability

If your website is successful in growing visitors, load at peak would grow beyond what a single server can handle.

Then <strong>multiple servers</strong> would be needed for "elasticity" -- the ability to deal with variations in load by adding more resources during high load or consolidating when the load decreases.

Amazon brands several of their services with the name "elastic" to highlight that aspect of their offering.

Multiple servers are also needed to ensure <strong>reliability</strong> -- to have another server take over in case a particular server fails, to ensure <strong>"high availability" ("HA" for short)</strong>.

<strong>Fail-over tests</strong> measure whether fault tolerance can really occur.
Testing that deliberately downs a server to measure the speed of recovery is called 
<strong>"resilency testing"</strong>.<a href="#Tasks">*</a>


### Time to Additional Capacity

The concern with scaling is how quickly additional capacity is added.

The traditional on-premises approach is to order and buy <strong>excess</strong> server hardware based on projected peaks many months or years in advance. Thus, servers would use a fraction of their capacity, which remains unused much of the time. And if processing volume exceeds the peak, the whole system would degrade or fail. 

A cloud of servers such as Amazon AWS <strong>pools unused capacity</strong> among many customers for allocation when needed.

But although capacity can be added dynamically, 
it needs to be added on a timely basis -- before need to provide a margin to handle growth while additional instances are brought up.

Bootstrapping instances in ASG can take 10 minutes or more. To avoid false alarms from being in "pending:complete" state before bootstrapping completes, create an <a target="_blank" href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">ASG Lifecycle Hook</a> to hold instance in a "pending:wait" state until bootstrapping completes.
Hooks time out after 60 minutes. But an <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html">API call</a> in the bootstrapping script can release the hook.<a target="_blank" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html">*</a>

![aws-ec2-whenever-cpu-34970](https://user-images.githubusercontent.com/300046/52156066-f79e5280-2653-11e9-98d9-b3ef01cc0024.png)

In total, it can take 20 minutes or more between the request and when a new server being able to process application transactions. It helps to track the actual time in order to design auto-scaling settings.<a href="#Task">*</a>

### Standby servers

So some operators define one or more "standby" server instances to instantly process sudden increases in load while additional servers spin up. The number of such servers are determined by <strong>"spike tests"</strong> which emulate sudden increases in load.<a href="#Tasks">*</a>


### Storage costs and complexities

TODO: The complex way that AWS charges for disk drives (input/output) make spike tests useful to determine real costs.


DOCS: <a target="_blank" href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">AWS Auto Scaling Limits</a>


<a name="TriggerLevels"></a>

### How to identify trigger levels

<amp-youtube data-videoid="ekh8jIcBulY" layout="responsive" width="480" height="270"></amp-youtube>
<br />

Now that we've identified the <strong>point of UX degradation</strong> using Stress Testing and the level of <strong>nominal average load</strong> expected, we now can calculate the <strong>lead time</strong> and <strong>trigger levels</strong> for elasticity.

The two horizontal lines are the two trigger levels we need to identify: one to increase capacity and one to decrease capacity.

The load level we reach for a short time during <strong>Spike Test runs</strong> is the <strong>"spike capacity level"</strong>, which we calculate to be slightly higher than the highest <strong>momentary peak</strong> expected above the normal average load. 
PROTIP: In offices this often occurs around 11am during <strong>normal</strong> days, when everyone is at work on their computers. 

Within environments seeking high availability, load would be split among a minimum of two hot instances within a cluster so that one machine would still be running in case one fails or is being replaced. 

We run experiments using different <strong>types of machines</strong> offering different amounts of RAM, CPU, and other resources on <strong>each individual</strong> machine -- <strong>scaling up and down</strong> to find the <strong>lowest cost</strong> machine type which can handle spike level loads but at acceptable levels of <strong>quality</strong>.

>>> PROTIP: The smallest server type may not work.
Peter Wayner conducted a <a target="_blank" href="https://www.infoworld.com/article/2613784/benchmarking-amazon-ec2--the-wacky-world-of-cloud-performance.html
">cloud benchmarking exercise on AWS in 2013</a> using the <a target="_blank" href="https://github.com/dacapobench">open-source</a> Java-based <a target="_blank" href="http://dacapobench.org/">DaCapo benchmark suite</a>. He found that the least expensive virtual server type AWS provides, <strong>T1 Micro ran eight to 10 times slower than the M1 Medium</strong>, with more variability, and often failed to complete a task and thus not "enterprise worthy". 
<<<

To avoid overloading machines, which causes poor performance, we may have to scale up to a more powerful machine so there is enough  <strong>headroom</strong> to grow load while additional instances are getting prepared. 

This spike level of load is also where additional instances are <strong>un-instantiated</strong>.

During Spike Tests we identify the various metrics to trigger reduction in the number of instances.
On the Azure cloud, the spike level can be defined with more metrics than just <strong>CPU utilization</strong>. Some apps are more CPU bound, memory bound, disk bound, or network bound. 

When we ramp up again to the point where capacity should be automatically added, the trigger to <strong>add capacity</strong> is determined by experimentation to identify the <strong>lead time</strong> needed to bring on more resources before reaching that point of <strong>UX degradation</strong> we identified during initial stress testing. 

In other words, the <strong>longer</strong> it takes to spin up another instance, the <strong>lower</strong> the trigger points need to be, to "buy time".

<strong>Trigger levels</strong> are different for each resource because it takes different amounts of time and effort to obtain additional capacity for each particular resource.
For example, having a Software Defined Network in the networking infrastructure would take less time to reconfigure than a traditional one.

Nevertheless, various metrics would, ideally, trigger changes in capacity at about the same level of load.

Over time, each application and mix of use cases will consume resources at a different pattern.
That's why repeated test runs are necessary multiple time during the life of the application.

Recap of the diagram:

<a target="_blank" title="cloud-perftest-instan-1004x493-40122.jpg" href="https://user-images.githubusercontent.com/300046/56486592-5b872900-6495-11e9-98b1-a8c4b71a5b4b.jpg"><img width="1004"  src="https://user-images.githubusercontent.com/300046/56486592-5b872900-6495-11e9-98b1-a8c4b71a5b4b.jpg"></a>


Now let's dive down further...

## Monitoring agents

On AWS, to collect measurements and streamed to CloudWatch, a <strong>CloudWatch Logs Agent</strong> needs to be installed on each server instance.

From within a running instance, list all categories of metadata for that instance (such as ami-id, etc.):

   <pre>curl http://169.254.169.254/latest/meta-data
   </pre>

AWS <strong>CloudWatch Log Groups</strong> are defined to capture and send alerts about specific errors to SNS (Simple Notification Service) emails.

After 60 days, logs can be sent to AWS <strong>Glacier</strong> for lower-cost longer term retention if a S3 Lifecycle policy is defined.

Currently, CloudWatch does not aggregate data across regions.

BTW, for security, there should be different accounts to read and write. The account that can write should not be able to delete.

<a name="Monitoring"></a>

### Monitoring granularity and fidelity

Automated monitoring and alerts replace the need for constant human vigilence, so you can sleep better at night rather than worrying.

Some organizations prefer to automate all aspects of setting up computing capabilities -- installing the operating system, drivers, etc.
This enables the organization to quickly respond to "zero day" security vulnerabilities which can crop up in any part of a system.
This would also enable the organization to take advantage of lower prices for "bare metal" server instances from IBM and (since 2018) AWS.
But is the total cost of running bare-metal boxes really cheaper than other approaches?

The default granularity of AWS monitoring service (CloudWatch) is one datapoint every <strong>5 minutes</strong>, and does not include monitoring of memory usage. Monitoring of memory usage and granularity of <strong>1 minutes</strong> can be configured (at additional cost).
But that still doesn't cover situations where sub-second ganularity is needed to inform debugging of "micro events".

To save on disk space, many monitoring vendors <strong>sample</strong> readings from among servers,
taking perhaps just 1% of all readings captured. 
This would reduce the fidelity of a specific server even more.

To further save on disk space, many traditional monitoring utilities <strong>truncate</strong> data of more granular detail over time.
For example, individual data points collected are deleted after a week.
Some keep just the average of each day's measurement.
This is not a useful practice for helping with debugging issues over time.
A compromise is to calculate and store, in addition to averages, 90th or 95th percentile calculations.<a target="_blank" href="https://www.dynatrace.com/news/blog/why-averages-suck-and-percentiles-are-great/" title="Why Averages Suck and Percentiles are Great, November 14, 2012 by Michael Kopp">*</a>

So when there is a cluster of machines, use general metrics to determine whether they are all using comparable amounts of CPU, memory, etc..
(An example of such a metric is the <a target="_blank" href="https://dsp.stackexchange.com/questions/811/determining-the-mean-and-standard-deviation-in-real-time">running</a> Coefficient of Variation (CV) obtained by dividing the standard deviation into the average.)

<a target="_blank" href="https://www.youtube.com/watch?v=QkcBASKLyeU">CPU measured as "busy" (not idle) may be really just "stalled" waiting for resources</a>. The "showboost" and "pmcarch" utility measuring instructions per cycle (IPC)

More granular metrics on just one of the servers within a cluster can then be used.
This would reduce disk space usage for metrics.
This would also provide an indicator of the impact of adding more grandular measurements to a machine.

On the metrics dashboard, <strong>one line</strong> representing whether all servers are at a similar level of load can replace a graph containing separate lines for each server. Taking that further, one line can represent whether all metrics about a cluster are "nominal" can replace a whole set of lines about each metric about a cluster. That's kinda like a person's FICO (finacial) score that consists of several aspects of credit trusworthiness.


QUESTION: How much time elapsed between alarm and reponse? This would involve recording events in a database, with analytics on that database.
Within AWS, CloudWatch would store a new row within RDS.

Furthermore, an email, SMS text, or Slack notification can be sent out when a thresholds or events occur.
Within AWS, <a target="_blank" href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">
send SNS notifications when an Auto Scaling groups launches or terminates instances</a>


To get ahead of events, how long could the alarm event could be <strong>predicted</strong>?
That's where ratios might be used.


<a target="_blank" href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/logging-using-cloudtrail.html">
AWS CloudTrail logs</a> report configuration changes such as which requests were made, the source IP addresses where the requests came from, who made the request, when the request was made, etc.


<a name="AutoScaling"></a>

## Auto-scaling

Amazon continues to offer traditional elastic load balancer service with auto-scaling groups of individual servers.
The service is controlled using Chef specifications.

The concern with clusters of executable programs is <strong>sticky sessions</strong> which stay on a particular server instance until time-out, which can be several hours. Meanwhile, that particular server instance cannot be downed for security updates, memory reclaimation, or whatever.
In other words, it takes a long time to "bleed" instances of user sessions.
This situation is caused by programs that was written to depend on the exchange of cookies in HTTP headers exchanged between client and server.
With such an architecture, Load Balancers need to return a client to a specific server instance, and thus not "stateless".

Apps that are "stateless" can better take advantage of advanced scaling features.

### Sticky vs. Stateless (more scalable and cheaper)

Apps need to be "stateless" in order to make use of server instances than can disappear at any time, such as AWS EC2 <strong>Spot instances</strong> purchased according to "spot rates" which fluctuate under an aucton system established by Amazon. Such rates are usually the lowest cost among all ways of charging.
Thus, a system can be considered financially defective if it cannot take advantage of the lowest cost instances.
Such a situation can and should be identified during technical planning stage.
That is the rationale for considering performance issues early on rather than shortly before production when nothing much can be changed.


Speaking of "sticky", there are sticky service charges ...

## Automation to avoid runaway bills

One of the risks with being able to get a lot of capacity quickly is that bills can pile up just as quickly, and sometimes inexplicably.
<a target="_blank" href="https://stackoverflow.com/questions/37675663/huge-costs-for-the-network-load-balancing-forwarding-rules-on-google-cloud-platf/41675413
">Runaway bills</a> are a concern when using clouds.

For example, when I kept being charged $35 a month on an account I provisioned server instances I shortly terminated, investigation by
Tad Einstein from Google revealed that Google's shutdown script doesn't automatically remove <a target="_blank" href="https://cloud.google.com/compute/docs/load-balancing/network/forwarding-rules">Forwarding rules</a> created when servers run within a cluster.

<a target="_blank" href="https://cloud.google.com/load-balancing/docs/https/"><img alt="gcp-forwarding-rule-703x261-34213.png" src="https://user-images.githubusercontent.com/300046/51440177-46321100-1c92-11e9-99a1-4ff5a76a08b0.png"></a>

To delete Forwarding rules in a Bash script:

   <pre>gcloud compute forwarding-rules delete "$FORWARDING_RULE"</pre>

To obtain the FORWARDING_RULE value, one can get a list manually via the UI at Networking -> Load Balancing -> advanced options -> Forwarding rules.
Alternately, this command lists them:

<pre>RESULT=$(gcloud compute forwarding-rules list)</pre>

The RESULT variable above captures the list of forwarding rules created.
If there is a possibility that there are several, it is necessary to select the specific rule to delete.
So ideally you would build up the whole environment each time so there is no question there is no lingering rules.

<hr />


## CloudFormation Templates

<a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-formats.html">Templates</a> for <a target="_blank" href="https://wilsonmar.github.io/cloudformation">CloudFormation</a> automate the creation of components around the creation of a cluster of EC2 servers.
An alternative are <a target="_blank" href="https://wilsonmar.github.io/terraform/">Terraform</a> specifications which are multi-vendor (Azure, Google, etc. as well as Amazon).

<a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-autoscaling.html">Auto Scaling Template Snippets from AWS</a>

<a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/working-with-templates-cfn-designer-why.html">CloudFormation Designer</a>




### Affinity Groups

A big concern with measurement during load testing is the time between client request and (the first byte of) response from server.
Time over the network is both significant and can take up 75% of the total response time.
To eliminate that time, ideally, load generators would be next to web servers.
That would enable accurate diagnosis of response times purely on the server (and underlying services).

On AWS, an "affinity group" setting became available in 2018 to keep a set of servers close to each other, to minimize latancy of communication between servers. 



One advantage of using a cloud vendor is that they make it easier to distribute traffic across several data centers so that if one center is hit by a disaster, a stand-by center can take over.
Amazon calls them different "Availability Zones".
Amazon makes two or more "AZ's" available for each of several dozen "Regions" around the world.

But does that really work and how much time does it take to switch between availability zones?
That's the job of "fail-over tests".<a href="#Tasks">*</a>

The redundancy of hosting and syncing data across several regions is more complex and costly than hosting across several Availability Zones.

Hosting across zones require use of multiple network VPC (Virtual Private Cloud) settings that define network security settings used.

TODO: Detailed comparison of various cloud vendor service names and offerings (Amazon, Azure, Google, Alibaba, etc.)?

<hr />


References:

Based on the <a target="_blank" href="http://deeplizard.com/learn/playlist/PLZbbT5o_s2xoWPNdBbqi9eWnMJ5cDrr1M">Deep Lizard's AWS - Amazon Web Services EC2 Management video series</a> from November 2017.



## Load Balancing

When multiple server instances are involved, a <a target="_blank" href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html">Load Balancer</a> is needed to balance (distribute) work among instances. Load Balancers can also use (X.509) <a target="_blank" href="https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/">SSL/TLS</a> certificates installed to convert "https://" (port 443)  encrypted requests to unencrypted "http://" (port 80) requests passed on to web servers. This reduces the decryption and encryption workload on individual servers on the back-end. But some prefer end-to-end security between all servers by <a target="_blank" href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">generating</a> and installing SSL certs in every server instance.

Some load balancers (such as F5) are specialized hardware (with ASIC chips) to process faster than standard computers. F5 itself, NGINX, Cisco, and others also have software-based load balancers which can be used instead of AWS offerings.


To duplicate a running production instance containing the latest version of all data, first setup EC2 instances to save incremental data snapshots into S3 (for Disaster Recovery). But a volumn in running instance should be briefly stopped and flushed of data before doing snapshots.


PROTIP: Each Elastic Load Balancer (ELB) and EC2 Auto Scaling Group (ASG) keeps its own <a target="_blank" href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-monitoring-features.html">set of logs to S3 objects</a>.
The default is only EC2 status checks.
So set S3 bucket Properties > Logging of "aws-bucket-logging" to "enabled".

   ![aws-asg-add-steps-503x157-7559](https://user-images.githubusercontent.com/300046/53306409-bcf69700-385a-11e9-9df4-769ceedf5bf2.jpg)

PROTIP: BTW, for higher security, accounts writing logs to S3 buckets are set to write-only, with separate accounts to transfer, read-only, and delete.

AWS can keep a time-series ELB Access Logs of requests processed by a Load Balancer, which saves response latencies along with time of occurance, client IP address, request paths, and server responses. But they need to be activated at intervals of either 5 or 60 minutes. 

To determine whether each instance within an ASG is "OutOfService" and need to be replaced, listeners
periodically checks the health of each instance. The frequency between "pings" is set by the "Grace Period" (such as 300 seconds).<a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/2062/lesson/3/module/206">*</a>


### Log Analytics Visualization

PROTIP: AWS does NOT provide an UI to process and present analytics visualization to the logs it stores in S3. 
So filtering and analytics visualization are done using additional tools:

   * <a target="_blank" href="https://www.youtube.com/watch?v=PFUcF9Ye0fc">
   Amazon Elasticsearch Service & Kinesis</a> Mar 29, 2017 rather overkill with replicas

   ![cloud-perftest-kinesis-643x145-6219](https://user-images.githubusercontent.com/300046/51477772-798aa380-1d57-11e9-857c-179262c97b76.jpg)

   * <a target="_blank" href="https://www.youtube.com/watch?v=g1wxfYVjCPY">
    Amazon CloudWatch Logs Insights (DEV375)</a> at AWS re:Invent 2018 Nov 29

   * <a target="_blank" href="https://www.youtube.com/watch?v=uoLsrKZha0E">
   S3 logs using Athena?</a>

   * AWS Elastic Map Reduce

   * Logz.io

   * <a target="_blank" href="https://www.sumologic.com/blog/amazon-web-services/monitoring-aws-auto-scaling-and-elastic-load-balancers-with-log-analytics/">Sumologic</a> has an <a target="_blank" href="https://www.sumologic.com/application/elb/">app specifically to analyze ELB logs</a>. 

   ![cloud-perftest-sumologic-elb-300ppi-1024x1020](https://user-images.githubusercontent.com/300046/51481296-89a78080-1d61-11e9-9cd0-6ed562d323ce.png)

   * Splunk has its custom query language
   <br /><br />

<a target="_blank" href="http://dangoldin.com/2018/02/20/analyzing-aws-elb-logs/">
SQL queries for ELB Logs</a>
filters for response codes that are not 200, the time frame of calls, etc.

Trends identified would include the time between acceptance of a connection to the first byte sent to an instance. Timings includes processing of a public key to match the one in the ELB setup with a back-end instance authentication policy.

<!-- This is for either Layer 7 HTTP/HTTPS that uses X-Forwarded-for header to get client IP addresses via Application Load Balancers or 
Layer 4 TCP using proxy protocol to get client addresses via Network or Classic Load Balancers
TODO: Load balancer limits.
-->

### Bastion Hosts

BTW, when servers behind a firewall use unencrypted traffic, they should not have connection to the public internet. But to obtain files from the open internet, traditionally, a "Bastion host" is setup for administrators (on pre-defined IP addresses). Such a server is the only one that goes through a NAT (Network Address Translation) "Gateway" which hides IP addresses from the outside world. 

Once vetted, files needed by application servers are obtained from an internal Network File Share (NFS) or file respository server managed by utility software such as Nexus or Artifactory.

Bation hosts and inbound ports and SSH keys can be replaced by the <a target="_blank" href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html">AWS Systems Manager Session Manager</a>, which also maintains an audit trail. But its IAM setup is tricky.<a target="_blank" href="https://acloud.guru/series/release-review/view/109">*</a>


## A/B Testing

Cloud-based DNS (Domain Name Service) servers (within Amazon's Route 53 service) resolves IP addresses from host names.
It can also allocate a percentage of traffic to different sets of servers for Blue/Green Deployment or A/B testing.
Blue/Green Deployment is used to transition users to a new set of an app environment for a new version.
A/B testing allocates varying percentage of users to variations of an app to compare user reaction/satisfaction.

Instead of directly interacting with Route 53, the switchover can be specified in OpsWorks and Elastic Beanstalk consoles or via Cloud Formation templates 
<a target="_blank" href="https://interactive.linuxacademy.com/diagrams/DevopsDoctrine.html">This</a>

A/B testing differs from "Blue-Green Deployments" in that several versions of a complete set of services are employed during A/B testing.
But only one set of services are being used at a time when switching between Blue and Green Deployments.

### Automation options

The advice here is to run cloud using automated scripts so that commands such as the above can be inserted when needed.

AWS has its CloudFormation YAML declarative specifications are "configuration as code",
stored in a version control repository such as GitHub, which enables fall-back to the complete set of files at various points back in time.
Puppet then puts instances into a specific state.

Hashicorp's Terraform equivalent HCL (which adds comments to YAML) is "multi-cloud" (stands up instances in AWS, Azure, GCP, etc.).


There are some differences in settings during testing vs. during production. For example, production Auto-Scaling Termination Policies would use "ClosestToNextInstanceHour" to save some money for Windows instances which are charged by the hour rather than Linux instances which are charged by the minute.
But when testing a new launch configuration, it may be easier to terminate "NewestInstance" first.


Also to enable multi-cloud capability, some companies put their public-facing load balancers in their own data centers,
then route to the cloud of their choice. QUESTION: How much latency does that introduce?


<hr />

TODO: Complete this article:

AWS <a target="_blank" href="https://www.youtube.com/watch?v=xhc1boyBkJw">Elastic Beanstalk</a> to deploy apps


Instance limits.





<a name="Lightsail"></a>

## AWS Lightsail

In 2018 Amazon introduced its <a target="_blank" href="https://lightsail.aws.amazon.com/ls/docs/en/articles/getting-started-with-amazon-lightsail">Lightsail service</a>, which <strong>automatically scales</strong> EC2 instances running executables without the need to setup VPCs and auto-scaling groups.
And rates are comparable to public hosting companies (starting at $5 per month).

Each Lightsale plan has a limit beyond which additional storage and data transfer costs would be incurred.

Among <a target="_blank" href="https://interactive.linuxacademy.com/diagrams/LightSailContinuum.html">Linux Academy's diagrams</a>


TODO: Serverless

## Istio and Envoy for Tracing

See https://wilsonmar.github.io/service-mesh


<a name="Tasks"></a>

## Recap of tasks

Here is a list of tasks mentioned above, in usual sequence of execution:

1. programmers ensure that their code does not run too long or take too much memory.

1. Scalability tests: Does running two smaller servers processes more transactions than a big server with the equivalent memory of two smaller servers.

1. What yields the highest rate of business transactions at the least total cost?

1. How quickly additional capacity is added after a request.


## References

* <a target="_blank" href="https://www.digitalocean.com/community/tutorials/an-introduction-to-load-testing">
An Introduction to Load Testing</a> September 12, 2017

<a target="_blank" href="https://www.method123.com/project-lifecycle.php">Project Management Life Cycle (PMLC)</a>


## Pluralsight videos

https://app.pluralsight.com/paths/certificate/microsoft-azure-architect-design-az-301

<a target="_blank" href="https://app.pluralsight.com/player?course=microsoft-azure-non-functional-requirements-gathering">
Pluralsight video course "Gathering Non-functional Requirements for Microsoft Azure</a>
by Harry Mumford Turner (@mumf_, harrymt.com) covers 

   * Stakehold priorities
   * performance anti-patterns: busy database, front-end, chatty I/O, extraneous fetching
   * Availability
   * Security 
   * Capacity Planning and Scalability 
   * Maintainability
   * Accessibility
   * Deployability
   * Extensibility
   * Governance
   * Quality

<a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-consumption-strategy-optimizing">
Optimizing Consumption Strategy in Microsoft Azure</s> Sept 13, 2018 [2h 53m]
by James Bannan

<a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-consumption-strategy-optimizing">
Designing a Monitoring Strategy for a Solution in Microsoft Azure</a> Nov 28, 2018 [3h 19m]
by Brian Harrison



## Wait, there's more. Click one of these ... #

This article is one of a series about tuning and performance:

{% include tuning_links.html %}

