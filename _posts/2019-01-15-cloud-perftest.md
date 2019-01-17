---
layout: post
title: "Site Reliability and Load Tesing in the Cloud Era"
excerpt: "Considerations for performance, high availability, latency, at lowest cost"
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


<a target="_blank" href="https://wilsonmar.github.io/cloud-perftest/">This</a> is a story, a "deep-dive documentary", about how to ensure performance, scalability, availability, resilience, and affordability from building, testing, and running computer software applications on various environments. 
The attempt here is a logical converage of strategies for several alternative architectures:

* <a href="#Custom">Custom executables</a>
* <a href="#SaaS">SaaS</a>
* <a href="#SingleInstance">Single-instance</a>
* <a href="#MultipleInstances">Multiple (clustered) instances with auto-scaling</a>
* <a href="#Serverless">Serverless</a>
* <a href="#AutoScaling">Auto-scaling</a>
* <a href="#ContainerScaling">Container scaling</a>
* <a href="#Lightsail">Amazon Lightsail</a>
<br /><br />

This will be re-published on Medium.


<a name="Custom"></a>

## Custom executables

We start with custom executables running on server instances, such as WordPress, SugarCRM, and Java war files.

Custom executables typically access one or more databases such as MySQL.

In the case of WordPress, such sites are slower relative to static websites.

WordPress is written in the PHP programming language which is now considered archaic versus Python, Scala, Go, and other new languages.
But WordPress nonetheless still is among the most popular programs running on the internet 
because of its vast ecosystem of developers and add-on functionality.

Note that PHP is an <a target="_blank" href="http://en.wikipedia.org/wiki/Interpreted_language">interpreted language</a>, meaning that PHP programming source code is processed by the PHP interpreter program every time to respond to each new request. 
So WordPress usually takes more time to render the HTML displayed on client internet browsers than other technologies such as static HTML pages served without processing. WordPress is also slower than websites that run a program compiled from Java, Go, or other compiled programming language.


## Dealing with hardware and patching

The difficulty with WordPress and other custom applications is that one must setup a server
and populate it with the software, then configure it.

Business owners who had a WordPress site built must continue to pay thousands of dollars each year for "maintenance" to avoid falling behind. Patches for operating system security, the PHP interpreter -- every aspect of technology -- must be updated ocassionally. This constant maintenance does not add additional functionality to the end user, so is feels like a disruption and waste of time and money.

Enter SaaS in a cloud.


<a name="SaaS"></a>

## SaaS (Software as a Service)

Software vendors such as <a target="_blank" href="https://wilsonmar.github.io/salesforce/">Salesforce</a> begam emerging in the lates 1990's to offer software completely through an internet browser because they take care of providing the underlying technologies such as operating system software, databases, and the "framework" that enables customization of functionality. SaaS vendors also handle hardware provisioning, making sure to have whatever number of servers are available, behind the scenes, like dining at a fine restaurant.

As with regular use of fine restaurants, SaaS offerings can seem "expensive" to some, costing thousands of dollars for every user, plus additional costs to hold storage. For example, Salesforce charges $5,000 to store one Terrabyte of data each month, compared to a multi-terrabyte USB drive for a $100 dollar one-time purchase.

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
Inefficiencies in WordPress configurations and programming are hidden in lower capacity unless investigated.


<a name="SingleInstance"></a>

## Single instance hosting

Many web hosting companies have sprung up to offer hosting of executables on the internet.
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
So one question performance engineers are asked to answer is whether running two smaller servers processes more transactions than a big server with the equivalent memory of several smaller servers.<a href="#Tasks">*</a>
 
BTW, Amazon sells RAM memory by "GiB" (for Gibibyte) rather than the more traditional "Gigabytes" used by hard disk drive manufacturers to mean 1,000,000,000,when using a "base 10" method of counting, where each digit can have 10 values (from 0 thru 9). Counting each digit, that's 10 to the 9th power.<a target="_blank" href="https://steemit.com/data-science/@deeplizard/hexadecimal-explained-or-higher-than-base-10-positional-numeral-systems">*</a>
A Gibitype is based on "base 2" (1 or 0) counting that computers use internally, and 2 to the 30th power which is equivalent to worth 1,073,741,824 bytes in base 10. The difference between the two increases exponentially as numbers get larger: about 7% at the Gibibyte/Gigabyte level but 9% at the Tibibyte/Terabyte level (the equivalent of 1,099,511,627,776 bytes in base 2).


One alternative for increasing throughput is to add a separate <strong>caching server</strong> (such as Redis, MemcacheD, AWS RDS, or ElastiCache) that tries to respond to requests before they hit the web server or database server. 
Cache servers typically holds responses in a large amount of memory.
But to ensure that money for a caching server is not wasted, the <strong>cache hit ratio</strong> should be measured when running under simulated load.


The potential for failure due to load may not be of concern for "vanity" websites which don't anticipate a lot of traffic. 

But most businesses websites prefer their websites to be able to handle more business without much manual vigilence.




<a name="BusinessObjective"></a>

## The Business Objective

The big takaway from this line of thinking is that here we focus on the <strong>business objective</strong> of obtaining the <strong>safest way to achieve the highest rate of business transactions at the least total cost</strong>.<a href="#Tasks">*</a>

The total cost calculation should include the cost of dissatisfied customers who cannot reach the website
or abandon the site (and not buy) when it's too slow due to it being overloaded.

Total costs also includes the time to build and maintain the software.

And also for testing.


## Load Testing

A business can't wait for production (paying) users to generate the load to see if the system really works because then it would be too late.

So during development, special programs and programming artificially generate load by pretending to be real users. Such programs include JMeter, LoadRunner, Neotys, Flood.io, etc. Load testing programs replace the clients they emulate. 

Traditionally, load testing programs are created by capturing communications (HTML files passing between client and server). This is to emulate as many users as possible on each artificial load generator by limitng the scope of client processing.

However, innovations such as http/2 asynchonous communication and AngularJs code running within browsers now require load testing to adapt functional UI testing tools which control each client user's keyboard and mouse. This approach of running several test instances previously designed for use by an individual tester means less users can be emulated on each load generator machine.

Nevertheless, compared with the negative consequences of business risks, load testing is needed to identify risks that otherwise lay hidden.

Programs that open a new connection with the database to service every user (rather than "pooling" connections for reuse) would require additional memory to be allocated on the database. So load tests are needed to determine optimal configuration settings. By definition, <strong>dynamic Security scans</strong> are conducted while the system is under load.

Load testing is done to identify errors in design such as memory "leaks" that consume more and more memory over time, requiring each production server to be rebooted. Load testing is needed to determine how often rather than using some arbitrary time like once every night. Some data centers find they need to reboot every hour.

Tests to identify such issues require <strong>"soak" test runs</strong>. Such long runs can consume a lot of unique data values. So it can be time consuming to manufacture enough data for this purpose.
But doing so would enable the testing of conditions in the future when databases grow larger over time.
Laws require that data from production be "scrubbed" of personally identifiable information.

Traditionally, load testing occurred near the end of projects, but to enable Agile practices, many businesses today seek to "shift left" (ahead in time) so that risks are exposed as development occurs so that they can be fixed while the code is still in developer's minds. To facilitate that, load tests (along with <a href="#Monitoring">monitoring</a>) can be made to automatically begin (by a Continuous Integration utility such as Jenkins) when code is uploaded to a team source repository.


Planning for load testing includes <strong>characterizing</strong> the load coming from various use cases (how many people registering, browsing, buying, etc. at the same time).

Running servers in the cloud makes performance testing easier and more economical than
duplicating the set of production equipment on-premises, which include not just web servers but also
utility servers such as DNS, Active Directory/LDAP, etc.



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

All the images except Docker contain the underlying operating system and utilities in each imageß.

Some AMI creators charge its users money. 
But many pay it because it saves them hassle and time, which mean money.

Is the extra cost worth the extra savings? Load testing can answer that question.
To determine the cost of processing using any given server configuration, one needs to measure use of processing, storage, and network data transfers at various levels of user load accessing the server at various points as load increases.<a href="#Tasks">*</a>

NEXT: Server images are necessary to create multiple instances of the same application.


<a name="MultipleInstances"></a>

## Multiple instances for elasticity, reliability

Eventually, load would grow beyond what a single server can handle.

Then <strong>multiple servers</strong> would be needed for "elasticity" -- the ability to deal with variations in load by adding more resources during high load or consolidating when the load decreases.

Amazon brands several of their services with the name "elastic" to highlight that aspect of their offering.

Multiple servers are also needed to ensure <strong>reliability</strong> -- to have another server take over in case a particular server fails, to ensure <strong>"high availability" ("HA" for short)</strong>.

<strong>Fail-over tests</strong> measure whether fault tolerance can really occur.
Testing that deliberately downs a server to measure the speed of recovery is called 
<strong>"resilency testing"</strong>.<a href="#Tasks">*</a>


## Load Balancing

When multiple server instances are involved, a Load Balancer is needed to distribute work among them.

Load Balancers can also make use of SSL certificates on them to convert "https://" requests which have been encrypted to unencrypted "http://" requests. This reduces the deryption and encryption workload on individual servers. Some load balancers (such as F5) are specialized servers with special (ASIC) custom chips to process faster than standard computers.

BTW, when servers behind a firewall use unencrypted traffic, a single "Bastion host" is setup for administrators (on pre-defined IP addresses) to obtain files from the open internet. Such a server is the only one that goes through a NAT (Network Address Translation) "Gateway" which hides IP addresses from the outside world. 

Files needed by application servers are obtained from an internal Network File Share (NFS) or file respository server managed by utility software such as Nexus or Artifactory.

The concern with scaling is how quickly additional capacity is added.

The traditional on-premises approach is to order and buy excess server hardware based on projected peaks many months or years in advance. Servers would use a fraction of their capacity, which remains unused much of the time. And if processing volume exceeds the peak, the whole system would degrade or fail.


## Cloud

A public cloud of servers such as Amazon AWS pools unused capacity for allocation when needed.

When spinning up EC2 (Elastic Compute Cloud) server instances,
there is a concern about how quickly additional capacity can be added.
Currently, it can take 20 minutes or more between the request and when a new server being able to process application transactions. It helps to track the actual time in order to design auto-scaling settings.<a href="#Task">*</a>

So some operators define one or more "standby" server instances to instantly process sudden increases in load while additional servers spin up. The number of such servers are determined by <strong>"spike tests"</strong> which emulate sudden increases in load.<a href="#Tasks">*</a>

The complex way that AWS charges for disk drives (input/output) make spike tests useful to determine real costs. AWS uses 



A big concern with measurement during load testing is the time between clients and servers communicating.
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

The concern with clusters of traditional programs is <strong>sticky sessions</strong> which stay on a particular server instance until time-out, which can be several hours. Meanwhile, that particular server instance cannot be downed for security updates, memory reclaimation, or whatever.
In other words, it takes a long time to "bleed" instances of user sessions.
This situation is caused by programs that was written to depend on the exchange of cookies in HTTP headers exchanged between client and server.
With such an architecture, Load Balancers need to return a client to a specific server instance, and thus not "stateless".

Apps that are "stateless" can better take advantage of advanced scaling features.

### Sticky vs. Stateless (more scalable and cheaper)

Apps need to be "stateless" in order to make use of server instances than can disappear at any time, such as AWS EC2 instances purchased according to "spot rates" which fluctuate under an aucton system established by Amazon. Such rates are the lowest cost among all ways of charging.
Thus, a system can be considered financially defective if it cannot take advantage of the lowest cost instances.
Such a situation can and should be identified during technical planning stage.
That is the rationale for considering performance issues early on rather than shortly before production when nothing much can be changed.


Speaking of "sticky", there are sticky service charges ...

## Automation to avoid runaway bills

One of the risks with being able to get a lot of capacity quickly is that bills can pile up just as quickly, and sometime inexplicably.
<a target="_blank" href="https://stackoverflow.com/questions/37675663/huge-costs-for-the-network-load-balancing-forwarding-rules-on-google-cloud-platf/41675413
">Runaway bills</a> are a concern when using clouds.

For example, I kept being charged $35 a month on an account I used only once to provision a server that I shortly terminated.
It turns out that Google's shutdown script doesn't remove <a target="_blank" href="https://cloud.google.com/compute/docs/load-balancing/network/forwarding-rules">Forwarding rules</a> created when servers run within a cluster.

Tad Einstein recommended commands instead of manual UI Networking -> Load Balancing -> advanced options -> Forwarding rules:

   <pre>gcloud compute forwarding-rules list
   gcloud compute forwarding-rules delete [FORWARDING_RULE]</pre>

So the advice here is to run cloud scripts using automation script so that commands such as the above can be inserted when needed.


<a name="Monitoring"></a>

## Monitoring Granularity

The default granularity of AWS monitoring service (CloudWatch) is one datapoint every 5 minutes, and does not include monitoring of memory usage.
Monitoring of memory usage and granularity of 3 minutes can be configured.
But that still doesn't cover situations when sub-second ganularity would better inform debugging of "micro events".

To save on disk space, many monitoring vendors sample readings from among servers, which would reduce granularity of a specific server even more.


TODO: Complete this article:

Load balancer limits.


Instance limits.


<a name="Lightsail"></a>

## AWS Lightsale

In 2018 Amazon introduced its <a target="_blank" href="https://lightsail.aws.amazon.com/ls/docs/en/articles/getting-started-with-amazon-lightsail">Lightsail service</a>, which <strong>automatically scales</strong> EC2 instances running executables without the need to setup VPCs and auto-scaling groups.
And rates are comparable to public hosting companies (starting at $5 per month).

But note that each plan has a limit beyond which additional storage and data transfer costs would be incurred.


## Istio and Envoy for Tracing

Emerging since 2018 technology

https://wilsonmar.github.io/service-mesh

Tracing 

Control plane


<a name="Tasks"></a>

## Recap of tasks

Here is a list of tasks mentioned above, in usual sequence of execution:

1. programmers ensure that their code does not run too long or take too much memory.

1. Scalability tests: Does running two smaller servers processes more transactions than a big server with the equivalent memory of two smaller servers.

1. What yields the highest rate of business transactions at the least total cost?

1. How quickly additional capacity is added after a request.


