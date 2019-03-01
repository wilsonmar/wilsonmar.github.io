---
layout: post
title: "Site Reliability and Load Engineering in Cloud Economics"
excerpt: "How to achieve work productivity, high availability, scalability, resiliency, low latency, at lowest cost?"
tags: [Cloud, perftest]
comments: true
image: # pic-black-bkg-white-cloud_1920x1200
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme Bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}


<a target="_blank" href="https://wilsonmar.github.io/cloud-perftest/">This</a> is my draft of sequencing a logical presentation about how to ensure scalability, availability, resilience, and affordability from building, testing, and running computer software applications in production on various cloud environments. 

* I begin with the <a href="#TestingTools">"Full Stack" Testing Tools Landscape</a> 
* <a href="#Statics">Static vs. Dynamic HTML generation and CDNs</a>
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

## Testing Tools Landscape

![cloud-perftest-v10-tools-695x329](https://user-images.githubusercontent.com/300046/53644473-ace90980-3c04-11e9-8337-9fee0e0cca2a.jpg)

This video describes the current landscape of key tools, for both functional and performance testing.
So the diagram has a lot going on. I'm covering this because job descriptions are now asking for skills that used to be for previously segregated jobs.
Load testers must now know functional tools. Site reliability engineers who used to just monitor things now must also know how to insert synthetic loads.
Developers are expected to know everything. That's the new downsizing strategy.

Both sets of tools cover several aspects. One is see whether the User Interface (UI) displays what users are intended to see. We want to inspect and perhaps manipulate the  (Domain Object Model) which stores the state of each user's browser that Angular, React, Vue, or other UI libraries manipulate via JavaScript. We also need to unit test our server's API, one at a time. We do several types of performance testing to ensure that the infrastructure can deliver acceptable response time, absorb spikes, scale well, and not leak memory.

The Developer Tools built into Chrome is used to identify how web driver programs know where to click and type in the UI. There is a different web driver for each browser. Each Web Driver exposes an Application Programming Interface (API) that functional testing scripts call. This design means that functional test scripts can be written in any language (Java, Python, C#, etc.). Selenium provides a framework. Protractor adds to Selenium the ability to interpret the Gherkin language to specify tests coded in a more recognizable natural language. 

<a target="_blank" href="https://wilsonmar.github.io/protractor/">Protractor</a> also adds the ability to dynamically read the DOM (Document Object Model) which stores the state of each user's browser which Angular, React, Vue, or other UI libraries manipulate via JavaScript. To test JavaScript (even while offline), Jasmine was created along with Angular. Instead of a "batteries included" approach, Mocha focused on what it does, and enabled other libraries such as Chai to focus on mocking and snapshotting. Then Jest was created by Facebook with React, with the same "one library does it all" strategy.

Karate, Rest Assured, and <a target="_blank" href="https://wilsonmar.github.io/pact/">Pact</a> are called integration testing tools because they are used to catch errors in dependencies among services needing each other.

To unit test API services exposed by your app, developers often use SoapUI because it is a free open-source tool, which also tests REST APIs exchanging JSON-formatted data as well as SOAP XML. 

Those concerned about what is keeping <a href="#LandingPages">landing pages</a> from loading faster use <strong>Google's Lighthouse</strong> to get recommendations about techniques to speed up landing pages. And Google Analytics provides timings for public production transactions. To test code in production, some developers code "feature flags" to expose parts of code to a subset of users in production. So now which specific flags are being used at at given time needs to be tracked for correlation to timings.

When apps are being developed within the public firewall, if we get functional test scripts to obtain <strong>timings</strong> on each step within the app (and store them in a time-series database), we can get early <strong>alerts</strong>, without additional test scripting.

Those who want to put load on the server use <strong>load generators</strong> operated by load testing scripts that replace work on real app clients with "synthetic" or <strong>"virtual" users</strong>, which defines the level of load imposed by scripts. While load is being injected, status such as the rate of transactions and errors encountered are reported by load generators to some controller. Metrics such as CPU and memory utilization within servers are obtained by <a target="_blank" href="https://wilsonmar.github.io/dynatrace">Dynatrace</a> agents installed on servers. Results from runs are then analyzed and presented in dashboards.

Traditionally, to get load generators to run as many users, scripts don't duplicate what occurs in the browser, but the HTML exchanged over the network <strong>wire</strong> between server and clients. Communications are captured into load test scripts, then edited to add correlations and verifications. That's what LoadRunner's VuGen, JMeter, and other proxy-based client emulators do. 

But innovations such as http/2 asynchonous communication and AngularJs code running within browsers cause more and more processing within browsers instead of on servers. So <strong>TruClient for LoadRunner</strong> was created to record and emulate the DOM and actions of each individual virtual user such as clicking buttons and typing on forms. This, btw, takes a lot more memory. <a target="_blank" href="https://flood.io/">Flood.io</a> Elements does that also, but using just a web browser as a web-based service. The availability of cloud-based services such as Flood, <a target="_blank" href="https://www.microfocus.com/en-us/products/stormrunner-load-agile-cloud-testing/overview">StormRunner</a>, <a target="_blank" href="https://www.blazemeter.com/">BlazeMeter</a> , and others enabled large servers or a large number of servers to be used for a short periods of time.

Several advances have sought to shift load testing "left" on the timeine. JMeter scripts can now <a target="_blank" href="https://www.blazemeter.com/blog/mixing-selenium-into-your-load-scenario">invoke the APIs of Web Drivers</a>. But there are limitations.

Neoload can process Selenium scripts.

To load test APIs, we're looking forward to mature tools to convert SOAPUI scripts and Open API (Swagger) specs into load testing scripts. 

As with all code, when scripts are stored in a Git Repository pushed to GitHub (or other Version Control repository), when a pull/merge request is made, <a target="_blank" href="https://wilsonmar.github.io/git-hooks">hooks</a> can automatically initiate <strong>monitoring</strong> and <strong>build</strong> of app instances before kicking off testing jobs. Many have created a cascade of CI/CD automation to step through several test environments that ensure changes safely yet quickly get into production.

Part of the modern development toolchain are code <strong>scanners</strong> and code <strong>profilers</strong> to detect issues while the code is still fresh in developers' mind.


<a name="LandingPages"></a>

### Landing Page Efficiencies

It is even more important for an organization's marketing landing page to be fast as its headquarters lobby to be stylish.
More potential and actual customers visit on-line than in person.

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


<a name="Statics"></a>

### Static vs. Dynamic HTML generation and CDNs

Instead of a URL using the same host name (server) as HTML, it is now common for images, video, and pdf files to be served on a Content Delivery Network (CDN). 
Such as Amazon's cloudfront.net:

   * "https://d20vrrgs8k4bvw.<strong>cloudfront.net</strong>/documents/en-US/nd209_Robo_syllabus_v2.pdf"
   <br /><br />

<a target="_blank" href="https://www.znetlive.com/blog/comparing-top-4-cdns-amazon-cloudfront-vs-google-cloud-cdn-vs-ibm-cloud-delivery-network-vs-azure-content-delivery-network/">Companies offering CDN services</a> include <a target="_blank" href="https://aws.amazon.com/cloudfront/">AWS CloudFront</a>, 
Microsoft Azure Blob CDN, Google Cloud CDN, Akamai (IBM), CloudFlare, Fastly, etc.

Sites running Google Cloud CDN have a single IP address that can run everywhere (do not require a separate regional DNS).
IBM provides Wildcard Certificate and Domain Validation (DV) SAN Certificates.
AWS can encrypt individual fields.

Google transfers up to 5TB objects.

QUESTION: How much faster does a CDN (Content Distribution Network) provide resource to viewers in different parts of the world? 
Google charges based on cache fill bandwidth and cache egress bandwidth as well as HTTP/HTTPS requests.

QUESTION: Are resources retrieved faster on AWS Cloudfront because it offers the most Points of Presence (PoP)? (136 vs. Google's 90+, Azure's 54)?
AWS serves Video on Demand 


<a name="Custom"></a>

## Executable app architectures

Websites that expose <strong>static</strong> HTML files for retrieval run fast because such files are not generated. 

Websites that run WordPress are slower than static sites because WordPress generates HTML files for every request. The programming that does the generation is written in the PHP programming language.
PHP is an <a target="_blank" href="http://en.wikipedia.org/wiki/Interpreted_language">interpreted language</a>, meaning that PHP programming source code is processed by the PHP interpreter program every time to respond to each new request. 

WordPress still is among the most popular programs running on the internet 
because of its vast ecosystem of developers and add-on functionality.
To many, the overhead of PHP is worth the features provided by PHP sites that use SugarCRM, WooCommerce, and many others.

PHP and Python are usually slower than programs written in Java, Go, or other programming language <strong>compiled</strong> into low-level run-time files that computers execute.

Java programs require the additional installation of a JVM (Java Virtual Machine) that allocates memory among programs.
Go comes with its own run-time environment.

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

Magnetic hard drives are slow. Many times slower than the rate CPUs transfer data.
But modern SSD (Solid State Device) drives used today are very fast.
(That's the reason why AWS does not allow the use of magnetic drives as a server boot-up data volume.)

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


> "After you have identified your architectural approach, you should use <strong>benchmarking and load testing</strong> data to drive your selection of resource types and configuration options" -- 512 in Amazon's "Performance Efficiency Pillar: AWS Well-Architected Framework (AWS Whitepaper)



The potential for failure due to load may not be of concern for "vanity" websites which don't anticipate a lot of traffic. 

But most businesses websites prefer their websites to be able to handle more business without much manual vigilence.


<a name="BusinessObjective"></a>

## Business Objective Economics

The big takeaway from this line of thinking is that here we focus on the <strong>business objective</strong> of obtaining the <strong>safest way to achieve the highest rate of business transactions at the least total cost</strong>.<a href="#Tasks">*</a>

The total cost calculation should include the cost of dissatisfied customers who cannot reach the website
or abandon the site (and not buy) when it's too slow due to it being overloaded.

Total costs also includes the time to build and maintain the software.

And also for testing.


## Load Testing

A business can't wait for production (paying) users to generate the load to see if the system really works because then it would be too late .

Compared with the negative consequences of business risks, load testing is needed to identify risks that otherwise lay hidden. For example, programs that open a new connection with the database to service every user (rather than "pooling" connections for reuse) would require additional memory to be allocated on the database. So load tests are needed to determine optimal configuration settings. 

Load testing is done to identify errors in design such as memory "leaks" that consume more and more memory over time, requiring each production server to be rebooted. Load testing is needed to determine how often rather than using some arbitrary time like once every night. Some data centers find they need to reboot every hour.

Traditionally, load testing occurred near the end of projects, but to enable Agile practices, many businesses today seek to "shift left" (ahead in time) so that risks are exposed as development occurs so that they can be fixed while the code is still in developer's minds. To facilitate that, load tests (along with <a href="#Monitoring">monitoring</a>) can be made to automatically begin (by a Continuous Integration utility such as Jenkins) when code is uploaded to a team source repository.

Planning for load testing includes <strong>characterizing</strong> the load coming from various use cases (how many people registering, browsing, buying, etc. at the same time).

Running servers in the cloud makes performance testing easier and more economical than
duplicating the set of production equipment on-premises, which include not just web servers but also
utility servers such as DNS, Active Directory/LDAP, etc.


<a name="RunTypes"></a>

### Performance test run types

![cloud-perftest-v08-types-553x276-24044](https://user-images.githubusercontent.com/300046/53589081-6f30a600-3b5c-11e9-978a-f69f0f5c2705.jpg)

Here we're talking about the different <strong>levels</strong> of load and <strong>lengths</strong> of test runs using different <strong>types of testing</strong>. This is the heart of a performance test plan.

We begin by identifying how quickly users can <strong>ramp-up</strong>, starting with a very aggressive rate so we can identify what is <strong>"too quick"</strong>. We then back off to a rate that brings up the most number of users the quickest. We need to use a <strong>Stress Test</strong> scenario that keeps adding new users until the <strong>breaking point</strong> so that we can tell how many users can really jump on the system at the same time, such at the beginning of a call-center shift or on Black Friday, etc. The <strong>rate</strong> that new users enter the system is just as important as the total number of concurrent users running, because <strong>authentication infrastructure</strong> limitations is often a bottleneck.

The first web page that a team puts up is usually a <strong>"server unavailable"</strong> page where user traffic is diverted. When the team is just getting started, the <strong>fail-over</strong> test is whether that diversion can really occur.
 
But want the <strong>threshold for action</strong> to be the <strong>point of UX degradation</strong>, when response time begins to suffer due to load. In that threshold we also need to consider the <strong>lead time</strong> to get additional <strong>capacity</strong>. With on-premises machines, this can be like 6 months. So, traditionally, companies over-bought capacity that often go unused. The value of an elastic cloud such as Amazom is that we pay only what we use. 

We still need to identify the <strong>nominal</strong> level of load -- the momentary <strong>peaks</strong> reached each day, the level where long <strong>soak tests</strong> are run to ensure the <strong>endurance</strong> of the system over time -- to ensure that the level is sustainable without memory leaks and excessive use of disk space.

Knowing this helps us save time on <strong>Smoke tests</strong> which verifies the <strong>viability</strong> of each buid. 

Where we need to be vigilent is making sure there is enough <strong>"Headroom"</strong> capacity available to absorb future growth. Along this headroom line is where we provision the appropriate type of server having enough RAM and CPU speed.

If we have a cluster of servers, we need to make sure we have the <strong>elasticity</strong> we hoped for. So We do <strong>Spike Tests</strong> to verify <strong>resiliency</strong> -- the ability of the system to absorb sudden temporary spikes while maintaining adequate response time, then come back to normal levels of memory usage.

In an elastic cloud enviornment, we need to ensure that our configurations can indeed <strong>instantiate</strong> additional capacity on a timely basis. Tests of elasticity should also include <strong>un-instantation</strong> to reduce the number of instances when load recedes below the threshold. 


QUESTIONS: About your app/system:
1. How quickly can users ramp up? What is "too quick" of a ramp-up?
2. What is the maximum <strong>rate</strong> (per second) transactions can be processed before UX degrades?
3. What is the signal threshold to request additional capacity?
4. How much time does it take to obtain additional capacity (from realization to actual availability)?
5. What is the maximum <strong>nominal</strong> load on normal days?
6. How much <strong>headroom</strong> is there for future growth? 
7. What is the highest temporary <strong>spike</strong> the system can absorb temporarily?
8. Does the system recover fully after a failure? (resiliency)
9. Can instances be decomissioned automatically? (elasticity)
10. Does the system leak memory or consume too much disk space over time?


<a name="ServerImages"></a>

## Server images

Many organizations today build all aspects of the server they use by defining programming code "configuration as code" such as Chef, Ansible, Cloud Formation, Terraform, Pulumi, etc.
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

Historically, Intel processors are used by AWS, but in 2018, machines with <strong>ARM processors</strong> became available, 
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


<a target="_blank" href="https://wilsonmar.github.io/cloudformation">CloudFormation</> templates automate the creation of various components around the creation of a cluster of EC2 servers.
An alternative are <a target="_blank" href="https://wilsonmar.github.io/terraform/">Terraform</a> specifications which are multi-vendor (Azure, Google, etc. as well as Amazon).


## Monitoring

On AWS, to collect measurements and streamed to CloudWatch, a CloudWatch Logs Agent needs to be installed on each server instance.

AWS CloudWatch Log Groups are defined to capture and send alerts about specific errors to SNS (imple Notification Service) emails.

After 60 days, logs can be sent to AWS Glacier for lower-cost longer term retention if a S3 Lifecycle policy is defined.


## Load Balancing

When multiple server instances are involved, a <a target="_blank" href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html">Load Balancer</a> is needed to balance (distribute) work among instances. Load Balancers can also use (X.509) <a target="_blank" href="https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/">SSL/TLS</a> certificates installed to convert "https://" (port 443)  encrypted requests to unencrypted "http://" (port 80) requests passed on to web servers. This reduces the decryption and encryption workload on individual servers on the back-end. But some prefer end-to-end security between all servers by <a target="_blank" href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">generating</a> and installing SSL certs in every server instance.

Some load balancers (such as F5) are specialized hardware (with ASIC chips) to process faster than standard computers. F5 itself, NGINX, Cisco, and others also have software-based load balancers which can be used instead of AWS offerings.


To duplicate a running production instance containing the latest version of all data, first setup EC2 instances to save incremental data snapshots into S3 (for Disaster Recovery). But a volumn in running instance should be briefly stopped and flushed of data before doing snapshots.



Each Elastic Load Balancer (ELB) and EC2 Auto Scaling Group (ASG) keeps its own <a target="_blank" href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-monitoring-features.html">set of logs to S3 objects</a>.
The default is only EC2 status checks.
So set S3 bucket Properties > Logging of "aws-bucket-logging" to enabled.

![aws-asg-add-steps-503x157-7559](https://user-images.githubusercontent.com/300046/53306409-bcf69700-385a-11e9-9df4-769ceedf5bf2.jpg)

BTW, for higher security, accounts writing logs to S3 buckets are set to write-only, with separate accounts to transfer, read-only, and delete.

To determine whether each instance within an ASG is "OutOfService" and need to be replaced, listeners
periodically checks the health of each instance. The frequency between "pings" is set by the "Grace Period" (such as 300 seconds).<a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/2062/lesson/3/module/206">*</a>

AWS can keep a time-series ELB Access Logs of requests processed by a Load Balancer, which saves response latencies along with time of occurance, client IP address, request paths, and server responses. But they need to be activated at intervals of either 5 or 60 minutes. 

AWS does NOT provide an UI to process and present analytics visualization to the logs it stores in S3. 
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



   <br /><br />

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
Blue/Green Deployment is used to transition users to a new set of an app enviornment for a new version.
A/B testing allocates varying percentage of users to variations of an app to compare user reaction/satisfaction.

Instead of directly interacting with Route 53, the switchover can be specified in OpsWorks and Elastic Beanstalk consoles or via Cloud Formation templates 
<a target="_blank" href="https://interactive.linuxacademy.com/diagrams/DevopsDoctrine.html">This</a>

### Time to Additional Capacity

The concern with scaling is QUESTION: how quickly additional capacity is added or removed before/after need?

The traditional on-premises approach is to order and buy <strong>excess</strong> server hardware based on projected peaks many months or years in advance. Thus, servers would use a fraction of their capacity, which remains unused much of the time. And if processing volume exceeds the peak, the whole system would degrade or fail. In a cloud, although capacity can be added dynamically, it needs to be added slightly before need to provide a margin to handle growth while additional instances are brought up.
Bootstrapping instances in ASG can take 10 minutes or more. To avoid false alarms from being in "pending:complete" state before bootstrapping completes, create an <a target="_blank" href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">ASG Lifecycle Hook</a> to hold instance in a "pending:wait" state until bootstrapping completes.
Hooks time out after 60 minutes. But an <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html">API call</a> in the bootstrapping script can release the hook.<a target="_blank" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html">*</a>

![aws-ec2-whenever-cpu-34970](https://user-images.githubusercontent.com/300046/52156066-f79e5280-2653-11e9-98d9-b3ef01cc0024.png)

A cloud of servers such as Amazon AWS <strong>pools unused capacity</strong> for allocation when needed.

When spinning up AWS EC2 (Elastic Compute Cloud) server instances,
there is a concern about how quickly additional capacity can be added.
Currently, it can take 20 minutes or more between the request and when a new server being able to process application transactions. It helps to track the actual time in order to design auto-scaling settings.<a href="#Task">*</a>

So some operators define one or more "standby" server instances to instantly process sudden increases in load while additional servers spin up. The number of such servers are determined by <strong>"spike tests"</strong> which emulate sudden increases in load.<a href="#Tasks">*</a>

TODO: The complex way that AWS charges for disk drives (input/output) make spike tests useful to determine real costs.

TODO: <a target="_blank" href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Auto Scaling Limits</a>



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


<a name="Monitoring"></a>

## Monitoring granularity and fidelity

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


<hr />

TODO: Complete this article:

AWS <a target="_blank" href="https://www.youtube.com/watch?v=xhc1boyBkJw">Elastic Beanstalk</a> to deploy apps


Instance limits.

Blue-Green Deployments

A/B testing



<a name="Lightsail"></a>

## AWS Lightsail

In 2018 Amazon introduced its <a target="_blank" href="https://lightsail.aws.amazon.com/ls/docs/en/articles/getting-started-with-amazon-lightsail">Lightsail service</a>, which <strong>automatically scales</strong> EC2 instances running executables without the need to setup VPCs and auto-scaling groups.
And rates are comparable to public hosting companies (starting at $5 per month).

Each Lightsale plan has a limit beyond which additional storage and data transfer costs would be incurred.

Among <a target="_blank" href="https://interactive.linuxacademy.com/diagrams/LightSailContinuum.html">Linux Academy's diagrams</a>


TODO: Serverless

## Istio and Envoy for Tracing

Emerging since 2018 technology

https://wilsonmar.github.io/service-mesh

Tracing 

Control plane

<a target="_blank" href="https://www.method123.com/project-lifecycle.php">Project Management Life Cycle (PMLC)</a>



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

