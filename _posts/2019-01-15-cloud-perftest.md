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
The attempt here is a logical sequence to cover tactics and strategies for several alternative architectures over cloud platforms.

* <a href="#Custom">Custom executables</a>
* <a href="#SaaS">SaaS</a>
* <a href="#SingleInstance">Single-instance</a>
* <a href="#MultipleInstances">Multiple (clustered) instances with auto-scaling</a>
* <a href="#Serverless">Serverless</a>
* <a href="#AutoScaling">Auto-scaling</a>
* <a href="#ContainerScaling">Container scaling</a>
* <a href="#Lightsail">Amazon Lightsail</a>
<br /><br />

TODO: Split up this long page into separate pages, and re-published on Medium as separate parts.


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
QUESTION: To determine the cost of processing using any given server configuration, one needs to measure use of processing, storage, and network data transfers at various levels of user load accessing the server at various points as load increases.<a href="#Tasks">*</a>

Such tests enaables load engineering work into profit centers by identify cost savings.

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

## Monitoring

On AWS, to collect measurements and streamed to CloudWatch, a CloudWatch Logs Agent needs to be installed on each server instance.

AWS CloudWatch Log Groups are defined to capture and send alerts about specific errors to SNS (imple Notification Service) emails.

After 60 days, logs can be sent to AWS Glacier for lower-cost longer term retention if a S3 Lifecycle policy is defined.


## Load Balancing

When multiple server instances are involved, a <strong>Load Balancer</strong> is needed to balance (distribute) work among instances. Load Balancers can also use (X.509) SSL certificates installed to convert "https://" encrypted requests to unencrypted "http://" requests passed on to web servers. This "SSL termination" reduces the decryption and encryption workload on individual servers. But some prefer end-to-end security between all servers.
Some load balancers (such as F5) are specialized servers with special (ASIC) chips to process faster than standard computers. F5 itself, NGINX, Cisco, and others also have software-based load balancers which can be used instead of AWS offerings.


Each Elastic Load Balancer (ELB) and EC2 Auto Scaling Group (ASG) keeps its own <a target="_blank" href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-monitoring-features.html">set of logs to S3 objects</a>.
The default is only EC2 status checks.
So set S3 bucket Properties > Logging of "aws-bucket-logging" to enabled.

BTW, for higher security, accounts writing logs to S3 buckets are set to write-only, with separate accounts for reading.

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
Hooks time out after 60 minutes. But an API call in the bootstrapping script can release the hook.<a target="_blank" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html">*</a>


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

## AWS Lightsale

In 2018 Amazon introduced its <a target="_blank" href="https://lightsail.aws.amazon.com/ls/docs/en/articles/getting-started-with-amazon-lightsail">Lightsail service</a>, which <strong>automatically scales</strong> EC2 instances running executables without the need to setup VPCs and auto-scaling groups.
And rates are comparable to public hosting companies (starting at $5 per month).

Each Lightsale plan has a limit beyond which additional storage and data transfer costs would be incurred.

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

