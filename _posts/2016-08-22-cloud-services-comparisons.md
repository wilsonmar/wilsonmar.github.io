---
layout: post
date: "2023-07-07"
file: "cloud-services-comparisons"
title: "Cloud services comparisons"
excerpt: "Which cloud is best? Azure vs. AWS vs. Google"
tags: [Cloud, comparison]
image: # pic-black-bkg-white-cloud_1920x1200
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme Bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Spending on shared cloud infrastructure now exceed spending on on-prem. data center hardware:

<a target="_blank" href="https://www.srgresearch.com/articles/2020-the-year-that-cloud-service-revenues-finally-dwarfed-enterprise-spending-on-data-centers">SRG Research reported that in 2020</a>:

![cloud-svcs-exceeded-2020](https://user-images.githubusercontent.com/300046/138579710-70bcc651-3fe4-4fe7-880c-7047162043ea.jpg)

A larger research firm, Gartner, predicted the cross-over to occur in 2024:

<a target="_blank" href="https://i.pinimg.com/originals/ae/ea/96/aeea9618726a88ffa1576f42720c1baa.jpg"><img alt="Gartner-cloud-market-holori-2022-1045×684" src="https://i.pinimg.com/originals/ae/ea/96/aeea9618726a88ffa1576f42720c1baa.jpg"></a>


{% include whatever.html %}

Analysis of corporate S-1 filings identified significant <strong>cloud spend</strong> as percentage of Total Revenue:

![cloud-svcs-spend-1312x560](https://user-images.githubusercontent.com/300046/138592222-e294f7e7-7271-4da8-83d6-fead30969d83.png)

## What is Cloud Computing?

<a target="_blank" href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf">PDF: NIST 800-145</a> defines the characteristics:

   * Resource Pooling (for economies of scale) is the most fundamental characteristic
   * On-demand Self-Service (using UI/CLI without human interaction)
   * Broad Network Access (internationally using standard protocols)
   * Rapid Elasticity (automatically scale UP/DOWN server types and OUT/IN instances) in response to system load
   * Measured Service (pay for what you consume)
   <br /><br />

   * Multitenancy (distinct from resource pooling) is added by ISO/IEC 17788's six key characteristics.
   <br /><br />


## Why? Advantages of Cloud

Evaluations can be based on the advantages of cloud:

1. Cloud vendors provide a <strong>large capacity pool</strong>, and benefit from economies of scale, for many users who pay for <strong>actual usage</strong>.

2. Paying for metered actual usage <strong>conserves cash up-front</strong> which trades variable expense (OpEx) for capital expense (CapEx).

3. It's <strong>faster to obtain capacity</strong> by using cloud vendors who can buy <strong>newer, speedier</strong> equipment. This helps your organization to achieve <strong>agility</strong>. 

4. Individual users can now stop <strong>over-provisioning</strong> on-premise data centers to ensure adequate capacity which often go <strong>unused</strong> due to the uncertainty of future demand. 

5. Scale enables cloud vendors to hire <strong>expert specialist teams</strong> who can <strong>innovate</strong> faster than individual companies.

6. Cloud customers' workers make use of cloud vendor innovations to achieve higher <strong>productivity</strong> and security.

7. Greater <strong>reliability</strong> to make data backup, disaster recovery, and business continuity easier and less expensive, with data being mirrored at multiple redundant sites on the cloud provider’s network.

8. <strong>Go global</strong> - make use of compute and network infrastructure established around the world (time consuming, expensive, and dangerous to do on one's own).
<br /><br />

PROTIP: Memorize the above list for exams and interviews.

Amazon's "Well Architected" notes the constraints removed by being in the cloud:
   * Test production at scale 
   * Make experimentation easier (overcome fear of change)
   * Allow architecture to evolve (rather than being frozen in time)
   <br /><br />

## Landing Zones

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone">Microsoft calls "Landing Zones"</a> the output of a multisubscription Azure environment that accounts for scale, security, governance, networking, and identity. Azure Landing Zones enable application migrationa and greenfield development at enterprise-scale in Azure. These zones consider all platform resources required to support the customer's application portfolio and don't differentiate between infrastructure as a service or platform as a service.


## Cloud "as a Service" (*aaS) models

There are different ways to make use of cloud infrastructure:

* SaaS - Applications reached using a browser (Google Gmail, WebEx/Zoom, Salesforce, Microsoft Office 365, Box, Slack, <a target="_blank" href="https://getnerdio.com/academy/10-popular-software-service-examples/">etc.</a>) 
* SaaS - App Data reached using API calls (Monitoring: Splunk, Datadog, etc.; Storage: Blob, Table, File, Message; DB: Postgres SQL, Cosmos planetary DB)

* PaaS - App Runtime (SAP Heroku, Web Apps built in NodeJs/Rust using a React/Vue UI library)
* PaaS - Middleware (AWS Elastic Compute Service (ECS), <a target="_blank" href="https://wilsonmar.github.io/kubernetes/">Kubernetes</a>)
* PaaS - O/S (<a target="_blank" href="https://cloudacademy.com/course/getting-started-azure-app-service/app-service-overview/">Azure App Service</a>)

* IaaS - Virtualization (VM, Containers)
* IaaS - Servers
* IaaS - Storage
* IaaS - Networking
<br /><br />

## Triggers to migration

An IDC July 2020 study identified these "trigger events" as most important in leading the organization to use cloud services:
1. Data has grown beyond the capacity of existing systems.
2. IT budgets being constrained or reduced.
3. Support digital transformation initiatives.
4. Need functionality or services only found in cloud offerings
5. Keeping up with compliance across regions (GDPR, etc.)
6. Failing to meet the demands of business due to legacy systems
   

### What to do with legacy systems

More than <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/cloud-operating-model/6-technology-strategy">6</a>
<a target="_blank" href="https://explore.skillbuilder.aws/learn/course/11840/play/43890/aws-partner-migration-programs-and-resources">strategies to migration</a>:<br />
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1669639383/cloud-migration-1748x865_nnzvaa.jpg"><img alt="cloud-migration-1748x865" width="1748" height="865" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1669639383/cloud-migration-1748x865_nnzvaa.jpg"></a>

* <strong>Retain</strong> (not moving) - keep recruiting/retraining new people on how to work on the app, knowing that it would be difficult to attract and retain the best willing to endure the toil and disrespect from their friends.

* <strong>Retire</strong> the system to force workers to do something else.

* <strong>Repurchase</strong> a SaaS application (such as Salesforce) and migrate the data, then shut down the on-prem system.

* <strong>Relocate</strong> - migrate just hypervisor hosts (of Oracle database) to VMWare Cloud on AWS.

* <strong>Rehost ("lift-and-shift")</strong> infrastructure, with no/little app code changes. 

   <a target="_blank" href="https://i.pinimg.com/originals/e0/31/0c/e0310c5a495252faeb5b0c5820987685.jpg"><img alt="cloud-rehost-aws-2742x682" src="https://i.pinimg.com/originals/e0/31/0c/e0310c5a495252faeb5b0c5820987685.jpg"></a>

   This is a functional recreation of infrastructure in the cloud: Networks would be recreated using VPCs. Apps would be place into EC2 instances. Storage drives would be converted to S3 buckets. That would shift CAPEX to OPEX variable expenses.

   This would occur with minimal disruption and downtime to end-users. This would likely cost less than building alternatives. Consider the <a target="_blank" href="https://pages.awscloud.com/rs/112-TZM-766/images/hackett-group-the-business-value-of-migration-to-aws-012022.pdf">PDF: Business Value of Migration to Amazon Web Services</a>
   and the <a target="_blank" href="https://aws.amazon.com/server-migration-service/">AWS Server Migration Service</a>. AWS Professional Services created their <a target="_blank" href="">Cloud Adoption Framework</a>.

   WARNING: Legacy application code tend to have security issues which must be patched. So Rehosting would buy more time to work on the app code, but not eliminate the need to remediate security issues in app code.
   
* <strong>Replatform ("Lift-tinker-and-shift")</strong> - making targeted cloud optimizations such as switching databases to cloud-based AWS RDS.

   <a target="_blank" href="https://i.pinimg.com/originals/66/96/cf/6696cf4901a64a849bb68e392b95be3d.jpg"><img alt="cloud-replatform-aws-2764x672.jpg" src="https://i.pinimg.com/originals/66/96/cf/6696cf4901a64a849bb68e392b95be3d.jpg"></a>
  
* <strong>Refactor</strong> - transform existing apps with minimal code change to <a target="_blank" href="https://docs.microsoft.com/en-us/Azure/containers/">use Docker and Kubernetes</a>, robust <a target="_blank" href="https://docs.microsoft.com/en-us/Azure/containers/">logging</a>, "elastic" <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/app-service-autoscale-rules/">auto-scaling</a> in & out, etc.

* <strong>Rebuild</strong> - reconstruct existing app on a new PaaS platform.

* <strong>Rearchitect</strong> - isolate application functionalities into separate <strong>microservices</strong> that can be independently deployed, tested, scaled up or down, and managed.

* <strong>Replace</strong> - retire existing on-premises application and rewriting functionality under a new architecture such as a Serverless or SaaS ("cloud native") application.


Despite all the good reasons, individuals used to the old way may still "drag their heels".
See my posts about <a target="_blank" href="https://wilsonmar.github.io/change-management">Change Management</a>.


<hr/>

## Individuals must pick a single cloud?

Organizations are going multi-cloud by using software from HashiCorp, Snowflake for database, etc.

But an individual has a limited amount of time to keep up with changes.
So many individual technologists need to select the cloud vendor which provides the best career prospects. Here's my logic:

* If you code in C# on .NET and want to continue leveraging that experience, Azure is the natural choice. (But other clouds are trying to support Windows.)

* Azure provides free learning instances. AWS is the only cloud that requires a credit card, and provides only email support (with varying response times, and often with no response at all).

* If you're looking for the fastest and easiest path to <strong>get a job</strong> in cloud, go for AWS because of its current <a href="#marketshare">market share</a> and [pace of innovation](https://aws.amazon.com/products/). AWS has the most sophisticated authentication and database services.

* Due to competitive reasons, companies in retail, music, etc. use other clouds: Target, Best Buy, eBay, Sony Music, etc. use Google. WalMart uses Azure. Since Amazon is moving into agriculture (building urban farms to provide Whole Foods and Amazong Go stores) plus health care, established competitors in those industries would not want to use AWS.

* If you're moving a lot of data on networks, Google offers fast fiber networks that don't limit what large machines can achieve. 

* AI and Machine Learning are at the forefront now. Google's TensorFlow competes with Facebook's open-source PyTorch.

* Google's SSD drives are expensive, though needed for speed.

* IBM has bare-metal machines, if that's your thing. But since 2017 AWS provides them as well.

* Increasingly, companies doing business in a particular country are required to keep data within a cloud data center within that country (such as Google in Belgium).


## Cloud vendor comparisons

<a target="_blank" href="https://aws.amazon.com/resources/analyst-reports/22-global-gartner-mq-cips/">Gartner's Cloud Vendor Magic Quadrant</a> <a target="_blank" href="https://www.gartner.com/doc/reprints?id=1-2AOZQAQL&ct=220728&st=sb">19 October 2022<br />
<img alt="cloud-gartner-21-964x1026.jpg" width="964" height="1026" src="https://i.pinimg.com/originals/31/04/1d/31041d245abd55e08dac2cf1b82e4133.jpg"></a>

<img class="img-right" align="right"
alt="cloud platforms black icons 300x330-300-58kb.jpg" width="300" height="330" src="https://cloud.githubusercontent.com/assets/300046/17864330/e4dbabc0-685a-11e6-84e5-361c5fc8c28d.jpg">

<a target="_blank" href="https://wilsonmar.github.io/cloud-services-comparisons">This</a> article compares the largest cloud services platforms:
Amazon AWS vs.
Microsoft Azure vs. 
[Google Cloud Platform](/gcp/) vs.
IBM Softlayer vs. 
Rackspace vs.
Alibaba Cloud vs.
<a target="_blank" href="https://www.huaweicloud.com/en-us/about/about_us.html">Huawei Cloud</a>.

Major multi-cloud vendors include Oracle, SalesForce's Heroku, SkyTap, etc.

<a target="_blank" href="https://www.youtube.com/watch?v=r6OFCJ_gux0">VIDEO: The Myth of Multi-cloud</a> by Corey Quinn

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/courses/az-020t00">Microsoft has a live class: Microsoft Azure solutions for AWS developers</a>

Software for private clouds include Red Hat OpenStack and VMWare. 

Software for hybrid private/public clouds include <a target="_blank" href="https://github.com/cloudfoundry/bosh">CloudFoundry</a>, HashiCorp Terraform, and others.
[NetApp](http://www.netapp.com/us/solutions/cloud/hybrid-cloud/), or [EMC](http://www.emc.com/en-us/cloud/hybrid-cloud-computing/index.htm)

EDITOR's NOTE: This is not a complete treatment. 
Additional information will be added over time.

<a target="_blank" href="http://cloudcomparison.rightscale.com/">
<img alt="cloud-compare-364x172" src="https://user-images.githubusercontent.com/300046/31053622-f49c9f86-a65e-11e7-9fa8-c6f367b1beb2.png">
http://cloudcomparison.rightscale.com</a> presents all the details well. <a target="_blank" href="http://docs.rightscale.com/ca/cloud_comp/">DOCS</a> 
So here I'm adding additional commentary here.



<a name="Limits"></a>
<a name="Additionally"></a>

## Additionally...

As of June 7, 2023;

Factor | AWS  | Azure | GCP |
:----- | :--- | :----- | :----- |
Company | Amazon | Microsoft | Google |
Initial appearance | 2006 | 2010 | 2012 |
Granularity of billing | per hour | per minute | per second |
Entrepreneurial Discount | - | BizSpark |
\# Regions | 24 | <a target="_blank" href="https://azure.microsoft.com/en-us/global-infrastructure/services/">46</a> | 34 |
\# Data centers | 24 | 100 |
\# zones | 33 | 100 | 103 |
Largest \# vCPUs cores | <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html" title="u-6tb1.112xlarge, u-9tb1.112xlarge, u-12tb1.112xlarge">448</a> | 32 |
Largest RAM GB | <a target="_blank" href="https://aws.amazon.com/about-aws/whats-new/2016/05/now-available-x1-instances-the-largest-amazon-ec2-memory-optimized-instance-with-2-tb-of-memory/" title="x1.32xlarge">1,952 GB</a> | 448 GB |

PROTIP: Moving up to double the RAM or cores usually does not yield a doubling of capacity
due to overhead and limits in shared components such as networking.

ARM processors run faster and cooler than Intel x86 processors.
<a target="_blank" href="https://aws.amazon.com/ec2/graviton/">AWS Graviton</a> Nitro EC2 instances. Until June 30th 2021, all new and existing AWS customers can try the t4g.micro instances free for up to 750 hours per month.


### Pricing #

Even though cloud vendors provide a great deal of transparency to how they price their services,
there are so many variables to what affects the final bill that the only accurate way is to
actually run services.

<ul>
<li><a target="_blank" href="https://azure.microsoft.com/en-us/pricing/calculator/">
https://azure.microsoft.com/en-us/pricing/calculator<br />is Microsoft's Azure Pricing Calculator</a></li>
<li><a target="_blank" href="http://calculator.s3.amazonaws.com/index.html">http://calculator.s3.amazonaws.com<br />is Amazon's AWS Pricing Calculator</a></li>
</ul>

* AWS has matched Azure pricing, and also per-minute billing.

<a target="_blank" href="http://www.zdnet.com/article/public-cloud-computing-vendors-a-look-at-strengths-weaknesses-big-picture/">
Cowan analysis May 2016</a> (using 1.0 as average among vendors) rated Amazon 1.37 (above avarge) in prices (most expensive).
Microsoft was rated the leader in price and APIs, but the lowest in support.

   <amp-img width="770" height="446" alt="cloud comparison table zdnet 2016-770x446-9.jpg"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/15745884/5b980e2a-2891-11e6-9dc5-22f06137e56a.jpg"></amp-img>

   QUESTION: Is the comparison based on <strong>spot instances</strong> in AWS,
   which are of low cost because they can be taken away at any moment
   by someone who outbids.

References:
   * https://cast.ai/blog/how-to-choose-the-best-vm-for-the-job/
   * https://www.simform.com/blog/compute-pricing-comparison-aws-azure-googlecloud/
 

### Alternative clouds

* https://console.hetzner.cloud/ - Hetzner Cloud 

* https://vultr.com/ - Vultr (pronounced Vulture) - get $150 off code from a Linus Tech Tips video,

* <a target="_blank" href="https://docs.akash.network/">Akash Network</a> is the Airbnb for cloud hosting webapps such as <a target="_blank" href="https://ecosystem.akash.network/">these</a>. Akash provides a decentralized cloud marketplace where otherwise underutilized machines can be rented temporarily (like AWS Spot Instances). For "one-third the cost of" mainstream clouds. Compare prices live at <a target="_blank" href="https://cloudmos.io/price-compare">Cloudmos.io</a>. 

   Akash runs a Kubernetes service to orchestrate and manage your containers.

   Asset transfer occurs off-chain over mTLS.

   Many are web3 related.    Payments are via <a target="_blank" href="https://www.coingecko.com/en/coins/akash-network">AKT blockchain coin</a>.

   And the network is maintained by a network of validators and governed by AKT stakers.

   Its users define a <tt>deploy.yaml</tt> "manifest" file written in their "Stack Definition Language (SDL) declarative language (not HashiCorp HCL).

   https://www.reddit.com/r/akashnetwork/



<a name="marketshare"></a>

## Market share #

   Amazon had an early lead in 2006 and has been maintaing its lead even though Microsoft and Google are growing fast as well with 50%+ annual growth<a target="_blank" href="http://www.kpcb.com/internet-trends" title="slide 185/294 from Mary Meeker's May 30, 2018">*</a>
   <img alt="aws-onboarding-cloud-growth-441x272.jpg" width="441" src="https://user-images.githubusercontent.com/300046/40881057-5dc36fd6-667a-11e8-9166-cd5803dde7c3.jpg">

   At the end of 2018, corporate filings reavealed this:<br />
   <a target="_blank" href="https://www.zdnet.com/article/top-cloud-providers-2018-how-aws-microsoft-google-ibm-oracle-alibaba-stack-up/"><img alt="cloud-run-rate-2018.png" src="https://user-images.githubusercontent.com/300046/50023160-9c2cde00-ff9b-11e8-8a67-92331c509ef4.png"></a>

Earlier in 2015:

   <amp-img layout="responsive" alt="cloud chart iaas market share 2015-529x488-c22.jpg" width="529" height="488" 
   src="https://cloud.githubusercontent.com/assets/300046/16921114/778410d8-4ccd-11e6-9bb8-faf3cd75a449.jpg">
   </amp-img>


## Operating Systems and Package Managers #

As of May 2016, Microsoft Azure works with <strong>SUSE</strong> and Oracle Java,
but <strong>NOT Red Hat</strong>/IBM Enterprise Linux (RHEL).

Amazon provides software to host whatever OS is put into images.
But its free server images are based on CentOS, derived from <strong>Red Hat</strong> as both use the yum package manager.
Amazon is working on "Linux2" based on Red Hat.

RPM Package Manager (RPM) (originally Red Hat Package Manager, but now a recursive acronym) refers to the .rpm file format and the package manager program itself. RPM was intended primarily for Linux distributions; the file format is the baseline package format of the Linux Standard Base.

The Yellowdog Updater, modified (YUM), is a free and open-source command-line package-management utility for computers running the Linux operating system using the RPM Package Manager. Though YUM has a command-line interface, several other tools provide graphical user interfaces to YUM functionality.

<hr />

## Network speed comparisons

Under ideal conditions, latency over networks are limited by speed of light traveling within fiber-optic cables, which is roughly 202,562 km/s (125,866 miles/s). Actual reachable speed is still a bit lower than that.

To estimate distance between terrestial locations, use <a target="_blank" href="https://www.daftlogic.com/projects-google-maps-distance-calculator.htm">Distance Calculator website</a>

TUTORIAL: Qwiklabs <a target="_blank" href="https://www.qwiklabs.com/focuses/1282">Network Performance Testing</a> tutorial provides step-by-step instructions for obtaining timings between regions. It sets up one network with five subnetworks in different regions and a VM in each subnetwork. Utilities ping, <a target="_blank" href="hhttps://en.wikipedia.org/wiki/Iperf">iperf</a>. 

Alternately, the <a target="_blank" href="https://github.com/traviscross/mtr">open-sourced</a> Linux/Unix utility <a target="_blank" href="https://ss64.com/bash/mtr.html">mtr</a> (<a target="_blank" href="https://www.bitwizard.nl/mtr/">My Traceroute</a>, originally called Matt's traceroute) combines Ping and Traceroute functions<a target="_blank" href="https://support.8x8.com/us/support-services/support/Download_WinMTR_Ping_and_Traceroute_Tool">*</a> <a target="_blank" href="https://www.linode.com/docs/networking/diagnostics/diagnosing-network-issues-with-mtr/">brew install mtr</a> is available for macOS to <tt>sudo mtr</tt>.


To compare network speeds using GUI tools:


### GCP networking

Google has laid its own fiber-optic wires around the world:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/62699138-1af7e080-b99c-11e9-859f-f3d4a4c88105.png"><img alt="google-cables-1533x861.png" width="1533" src="https://user-images.githubusercontent.com/300046/62699138-1af7e080-b99c-11e9-859f-f3d4a4c88105.png"></a>

Entry into Western Africa is Nigeria. 

<a target="_blank" href="https://www.youtube.com/watch?v=yd1JhZzoS6A">VIDEO</a>: 
<a target="_blank" href="https://www.submarinecablemap.com/">submarinecablemap.com</A> show undersea cables capable of transmitting 100Gb/s to 400gb/s.

PROTIP: As of this writing, latency between Google's EU and Asia locations is very high (slow) because Google Compute Engine does not have a direct link between them.

PROTIP: If you only operate out of <strong>just one region</strong> in the world, use a <strong>Central US</strong> region, which reaches West to Asia and East to Europe. 

<a target="_blank" href="http://www.gcping.com/">http://www.<strong>gcping.com</strong></a> measures current ping speed to <a target="_blank" href="https://cloud.google.com/compute/docs/regions-zones/#available">regions on Google's cloud</a>. 

   ![cloud-services-gcping-507x224-14208](https://user-images.githubusercontent.com/300046/40890488-10f2b1de-6734-11e8-8aea-6ebfb3edfa3c.jpg)

   To stop collection, press the dot with the arrow at the upper-right.


### Amazon AWS networking

Amazon makes users specify the region to use. However, since Amazon usually makes new services first avilable on its <strong>us-east-1</strong> (Virginia) region, that data center is most prone to overloading and thus down-time.

Amazon's own <a target="_blank" href="http://ec2-reachability.amazonaws.com/">ec2-reachability.amazonaws.com</a> does not provide ping speeds to <strong>specific IP addresses</strong> within each availability zone within each region, but a green icon when it can be currently reached at any speed.

<a target="_blank" href="http://www.cloudping.info/">http://<strong>cloudping.info</strong></a> measures current ping speed to various regions on Amazon's EC2 cloud. Scroll down to click "HTTP Ping" to begin collection to a running line graph:

   ![cloud-services-amazon-392x647-65305](https://user-images.githubusercontent.com/300046/40890545-21c4a818-6735-11e8-92b3-9329d0465914.jpg)

<a target="_blank" href="https://ping.varunagw.com/aws.htm">https://ping.varunagw.com/aws.htm</a> provides green, yellow, red colors with Mean, Median, Min, and Max statistics based several measures of the speed to each EC2 region.


<hr />

<a name="AzureNetworks"></a>

### Microsoft Azure networks

At time of writing, Microsoft has over 60 regions around the world on <a target="_blank" href="https://azure.microsoft.com/en-us/global-infrastructure/geographies/">their map</a>:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/109421738-cfe65980-7995-11eb-9a04-1b385f2ed631.png"><img alt="az-map-2021-1440x741.png" width="1440" src="https://user-images.githubusercontent.com/300046/109421738-cfe65980-7995-11eb-9a04-1b385f2ed631.png"></a>

There is also an <a target="_blank" href="https://build5nines.com/map-azure-regions/">
interactive map showing a point for each region's Longitude and Latitude</a> with city name.
   
<a target="_blank" href="http://www.azurespeed.com/">http://www.<strong>azurespeed.com</strong></a> measures current ping speeds between regions on Microsoft's Azure cloud. To stop collection, click "uncheck all" or individual regions of interest:

   <a target="_blank" href="https://build5nines.com/map-azure-regions/"><img alt="cloud-service-azure-checks-603x261-56530" width="603" src="https://user-images.githubusercontent.com/300046/40890517-a7bc4b02-6734-11e8-9c1f-88e6a686de0d.jpg">https://build5nines.com/map-azure-regions/</a>

To display Microsoft's own analysis of <strong>ping speeds between its regions</strong> (using data from the <a target="_blank" href="https://www.thousandeyes.com/">thousandeyes.com</a> (Cisco) network analytics company, view:<br /><a target="_blank" href="https://docs.microsoft.com/en-us/azure/networking/azure-network-latency">https://docs.microsoft.com/en-us/azure/networking/azure-network-latency<br />
   <img alt="azure-network-latency-2020-12-2761x1756.png" width="2761" src="https://user-images.githubusercontent.com/300046/109372837-e773f400-7868-11eb-8804-1d306f22fba2.png"></a>

PROTIP: In the above, the slowest is 400 ms round-trip between Cape Town (South Africa West) and Australia East.

One big advantage of Azure over AWS is that AWS requires users to do their own backups and restores.
But Microsoft does its own complete backups of all data in each zone, and when there is an outage, they take care of restoring it to a new zone. Where backups go is not public information, but it is likely that they are in a different zone in the same region, or in a different region. 
<a target="_blank" href="https://docs.microsoft.com/en-us/azure/best-practices-availability-paired-regions">
These cross-region pairs</a> are used for replication in Azure business continuity and disaster recovery.


## Outage tracking #

<a target="_blank" href="https://status.aws.amazon.com/">https://status.aws.amazon.com</a> is Amazon's AWS Service Health Dashboard applicable to all users. Under the tab for each continent is a list of each service plus region combination.

PROTIP: Most new services begin in the N. Virginia region "US-EAST-1", as do the most famous outages.
So if you are running a production load, try to use a different region than that.
Nevertheless, that's where one must provision <strong>AWS Cloud Front CDN</strong> for worldwide distribution.

<a target="_blank" href="https://phd.aws.amazon.com/">https://phd.aws.amazon.com</a> 
is your Personal Health Dashboard for your account.

<a target="_blank" href="http://downdetector.com/status/aws-amazon-web-services">
http://downdetector.com/status/aws-amazon-web-services</a>
provides 3rd-party crowd-source status.

<a target="_blank" href="https://istheservicedown.com/problems/amazon-web-services-aws/history">
https://istheservicedown.com/problems/amazon-web-services-aws/history</a>
is a private-party site reporting the history of downtimes on AWS. For example:

![cloud-services-aws-down-608x190-19517](https://user-images.githubusercontent.com/300046/48566709-b306e480-e8b8-11e8-9f58-381992245e5a.jpg)


For a list of outages further back: <a target="_blank" href="https://outage.report/aws-amazon-web-services">https://outage.report/aws-amazon-web-services</a>


## Categories of cloud services:

* <a href="#Security">Security</a> (identity)
* <a href="#Networks">Networks</a>
* <a href="#Management">Management</a> (monitoring, governance)
* <a href="#DevOps">DevOps</a> (development to operations)

* <a href="#Compute">Compute</a> (PaaS Web apps, mobile apps, containers, Functions, Logic Apps)
* <a href="#Integration">Integration</a> (messaging, migrate)
* <a href="#Persistance">Persistance</a> (storage, databases)
* <a href="#Analytics">Analytics</a> (includes Machine Learning & AI)


## Service brand names #

Here are the names of brand names, some with links to marketing or documentation pages:
<table valign="top" border="1" cellspacing="0" cellpadding="4">
<thead>
<tr valign="bottom">
<th align="left">Feature:</th><th align="left">Microsoft Azure</th><th align="left">Amazon Web Services (AWS)</th><th>Google</th></tr>
</thead><tbody>
<tr valign="top"><th align="left">Data center geography</th>
    <td><a target="_blank" href="http://azure.microsoft.com/en-us/regions/">Azure Regions</a></td>
    <td><a target="_blank" href="http://aws.amazon.com/about-aws/global-infrastructure/">global infrastructure</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Government Services</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/features/gov/">Azure Government</a></td><td><a target="_blank" href="http://aws.amazon.com/govcloud-us/">GovCloud</a></td>
    <td>(integrated)</td></tr>


<tr valign="top" bgcolor="#d3d3d3"><td colspan="4"><a name="Security"></a>Security:</td></tr>

<tr valign="top"><th align="left">Administration &amp; Security (Identity and Access Management) </th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/active-directory/">Azure Active Directory</a>
</td><td><a target="_blank" href="http://aws.amazon.com/directoryservice/">DirectoryService</a>
<br /><a target="_blank" href="https://aws.amazon.com/iam/">IAM</a></td>
    <td>Cloud IAM</td></tr>

<tr valign="top"><th align="left">Threat Monitoring<br /></th><td><a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/intro-to-security-in-azure/2a-azure-security-center">Azure Security Center</a>
</td><td><a target="_blank" href="http://aws.amazon.com/config/">AWS Config</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Multi-Factor Authentication<br /></th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/multi-factor-authentication/">MFA</a>
</td><td><a target="_blank" href="http://aws.amazon.com/iam/details/mfa/">MFA</a>
</td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Encryption Key Mgmt.</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/key-vault/">Azure Key Vault</a>
</td><td><a target="_blank" href="http://aws.amazon.com/kms/">KMS (Key Management Service)</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">CA (Certificate Authority)</th><td><a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-services/cloud-services-certs-create">Azure Cloud Services</a>
</td><td><a target="_blank" href="http://aws.amazon.com/kms/">Certificate Manager</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Hardware Security Module</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/support/trust-center/compliance/">Azure Trust Center</a>
</td><td><a target="_blank" href="http://aws.amazon.com/cloudhsm/">CloudHSM</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">DDoS protection</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/ddos-protection/">Azure DDoS Protection</a>
</td><td><a target="_blank" href="http://aws.amazon.com/shield/">Shield Advanced</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Share data security</th><td><a target="_blank" href="https://www.microsoft.com/cloud-platform/azure-information-protection">Information Protection</a>
</td><td>?</td>
    <td>-</td></tr>


<tr valign="top" bgcolor="#d3d3d3"><td colspan="4"><a name="Networks"></a>Networks:</td></tr>

<tr valign="top" class="tblEven"><th align="left">Content Delivery Network (CDN )</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/cdn/">Azure CDN</a></td><td><a target="_blank" href="http://aws.amazon.com/cloudfront/">CloudFront</a></td>
    <td>Front End</td></tr>

<tr valign="top" class="tblEven"><th align="left">Load Balancing</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/documentation/articles/virtual-machines-load-balance/">Load Balancing for Azure (how to)</a></td><td><a target="_blank" href="http://aws.amazon.com/elasticloadbalancing/">ELB (Elastic Load Balancing)</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Region routing by latency or on fail</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/traffic-manager/">Azure Traffic Manager</a></td><td><a target="_blank" href="http://aws.amazon.com/route53/">Amazon Route 53</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Networking Options</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/virtual-network/">Azure Virtual Network</a>
</td><td><a target="_blank" href="http://aws.amazon.com/vpc/">VPC</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left"><br /></th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/expressroute/">Azure ExpressRoute</a></td><td><a target="_blank" href="http://aws.amazon.com/directconnect/">AWS Direct Connect</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left"><a target="_blank" href="https://8kmiles.com/blog/azure-virtual-network-vs-aws-virtual-private-cloud/">VPN Gateway</a></th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/api-management/">Azure Virtual Network</a>
</td><td><a target="_blank" href="https://aws.amazon.com/vpc/">Virtual Private Cloud & Gateway (VPG)</a></td>
    <td>-</td></tr>


<tr valign="top" bgcolor="#d3d3d3"><td colspan="4"><a name="Management"></a>Management:</td></tr>

<tr valign="top" class="tblEven"><th align="left">Turnkey solutions</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/managed-applications/">Azure Managed Applications</a>
</td><td><a target="_blank" href="http://aws.amazon.com/servicecatalog/">AWS Service Catalog</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Billing</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/cost-management/">Azure Cost Management</a></td><td><a target="_blank" href="http://aws.amazon.com/billing/">Billing</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Monitoring, Logging, Alerting</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/application-insights/">Azure Application Insights</a>
</td><td><a target="_blank" href="http://aws.amazon.com/cloudwatch/">CloudWatch</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">real-time data ingestion</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/event-hubs/">Azure Event Hubs</a>
</td><td>None<br /></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Audit logs (Observability)<br /></th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/operational-insights/">Azure Operational Insights</a>
</td><td><a target="_blank" href="http://aws.amazon.com/cloudtrail/">CloudTrail</a>
</td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Zipkin tracing</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/monitor/">Azure Application Monitor Insights</a></td><td><a target="_blank" href="https://aws.amazon.com/xray/">AWS X-Ray</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">-</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/virtual-machines/secure-well-managed-iaas/">Ops. Mgmt. Suite (OMS)</a></td><td><a target="_blank" href="https://aws.amazon.com/systems-manager/">Systems Manager</a></td>
    <td>-</td></tr>


<tr valign="top" bgcolor="#d3d3d3"><td colspan="4"><a name="Compute"></a>Compute:</td></tr>

<tr valign="top" class="tblEven"><th align="left">App/Desktop Services</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/remoteapp/">Azure RemoteApp</a></td><td><a target="_blank" href="http://aws.amazon.com/workspaces/">WorkSpaces</a><br /><a target="_blank" href="http://aws.amazon.com/appstream/">Amazon AppStream</a><br /></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left"><a target="_blank" href="https://www.vpsbenchmarks.com/hosters/microsoft_azure">VPS (Virtual Private Server)</a></th><td><a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/">Linux VMs</a></td><td><a target="_blank" href="http://aws.amazon.com/lightsail/">Amazon Lightsail</a><br /></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Compute Services</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/virtual-machines/">Virtual Machines (VMs)</a>
</td><td><a target="_blank" href="http://aws.amazon.com/ec2/">EC2 (Elastic Compute Cloud)</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left"><a target="_blank" href="https://wilsonmar.github.io/Docker">DockerHub</a></th>
<td><a target="_blank" href="https://azure.microsoft.com/en-us/services/container-registry/">Azure Container Registry</a></td>
<td><a target="_blank" href="http://aws.amazon.com/lambda/">AWS Lambda</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Triggers</th>
<td><a target="_blank" href="https://azure.microsoft.com/en-us/documentation/services/app-service/logic/">Logic Apps</a></td>
<td><a target="_blank" href="http://aws.amazon.com/ecr/">Elasticc Container Registry (ECR)</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Container Support</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/documentation/articles/virtual-machines-docker-vm-extension/#Docker-and-Linux-Containers">Docker Virtual Machine Extension (how to)</a></td><td><a target="_blank" href="http://aws.amazon.com/ecs/">EC2 Container Service (ECS)</a></td>
    <td>Kubernetes</td></tr>

<tr valign="top"><th align="left"><a target="_blank" href="https://www.sumologic.com/blog/kubernetes-aws-azure-gcp/">Kubernetes scaling</a></th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/kubernetes-service/">Azure Kubernetes Service (AKS)</a></td><td><a target="_blank" href="http://aws.amazon.com/autoscaling/">ECS for Kubernetes (EKS)</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Distributed apps</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/service-fabric/">Azure Service Fabric</a></td><td>-</td>
    <td>-</td></tr>

<tr valign="top"><th align="left"><a target="_blank" href="https://hackernoon.com/azure-container-instances-vs-aws-fargate-3216607f63f4">Scaling service</a></th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/container-instances/">Azure Container Instances</a></td><td><a target="_blank" href="http://aws.amazon.com/fargate/">AWS Fargate</a></td>
    <td>-</td></tr>


<tr valign="top" bgcolor="#d3d3d3"><td colspan="4"><a name="Integration"></a>Integration:</td></tr>

<tr valign="top"><th align="left">Analytics</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/stream-analytics/">Azure Stream Analytics</a>
</td><td><a target="_blank" href="http://aws.amazon.com/kinesis/">Kinesis</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Messaging</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/notification-hubs/">Azure Notification Hubs</a>
</td><td><a target="_blank" href="http://aws.amazon.com/sns/">SNS (Simple Notification Service)</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Email Services</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/biztalk-services/">Azure BizTalk Services</a>
</td><td><a target="_blank" href="http://aws.amazon.com/ses/">SES (Simple Email Services)</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">API Gateway</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/api-management/">Azure API Management</a>
</td><td><a target="_blank" href="https://aws.amazon.com/api-gateway/">Amazon API Gateway</a></td>
    <td>Apigee</td></tr>

<tr valign="top"><th align="left"><br /></th><td rowspan="1"><a target="_blank" href="http://azure.microsoft.com/en-us/services/service-bus/">Azure Service Bus</a>
</td><td><a href="http://aws.amazon.com/sqs/">SQS (Simple Queue Service)</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left"><br /></th><td rowspan="1"><a target="_blank" href="http://azure.microsoft.com/en-us/services/batch/">Azure Batch</a>
</td><td><a href="https://azure.microsoft.com/services/batch/">Amazon Batcch</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Calendar</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/scheduler/">Azure Scheduler</a>
</td><td><a target="_blank" href="http://aws.amazon.com/swf/">SWF (Simple Workflow)</a></td>
    <td>-</td></tr>


<tr valign="top" bgcolor="#d3d3d3"><td colspan="4"><a name="DevOps"></a>DevOps:</td></tr>    

<tr valign="top" class="tblEven"><th align="left">Cloud IDE for developers</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/app-center/">Visual Studio App Center</a>
</td><td><a target="_blank" href="http://aws.amazon.com/cloud9/">Cloud9</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left"><br /></th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/cloud-services/">Cloud Services</a>
<br /><a target="_blank" href="http://azure.microsoft.com/en-us/services/websites/">Azure Websites and Apps</a>
<br /></td><td><a target="_blank" href="http://aws.amazon.com/elasticbeanstalk/">Elastic Beanstalk</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Dev. tools</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/visual-studio-online/">Azure Visual Studio Online</a></td><td>None</td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Management Services &amp; Options</th><td><a target="_blank" href="http://azure.microsoft.com/blog/2014/11/26/azure-resource-manager-2-5-for-visual-studio/">Azure Resource Manager</a>
</td><td><a target="_blank" href="http://aws.amazon.com/cloudformation/">CloudFormation</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">IoC Automation (Terraform)</th><td>Bicep
</td><td>CDK, <a target="_blank" href="http://aws.amazon.com/opsworks/">OpsWorks</a></td>
    <td>Ansible?</td></tr>

<tr valign="top" class="tblEven"><th align="left">Source Verions Mgmt. (GitHub)</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/repos/">Azure Repos</a>
</td><td><a target="_blank" href="http://aws.amazon.com/codecommit/">CodeCommit</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">CI/CD (Jenkins)</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/pipelines/">Azure Code Pipelines</a>
</td><td><a target="_blank" href="http://aws.amazon.com/codebuild/">CodeBuild</a></td>
    <td>CI/CD</td></tr>

<tr valign="top" class="tblEven"><th align="left">Deploy</th><td>?<br />
</td><td><a target="_blank" href="http://aws.amazon.com/codedeploy/">CodeDeploy</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Media Services</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/media-services/">Azure Media Services</a>
</td><td><a target="_blank" href="http://aws.amazon.com/elastictranscoder/">ElasticTranscoder</a><br /><span style="text-decoration:underline;"><a target="_blank" href="http://aws.amazon.com/mobileanalytics/">MobileAnalytics</a>
<br /><a target="_blank" href="http://aws.amazon.com/cognito/">Cognitor</a><br /></span></td>
    <td>-</td></tr>


<tr valign="top" bgcolor="#d3d3d3"><td colspan="4"><a name="Persistance"></a>Persistance:</td></tr>    

<tr valign="top"><th align="left">Storage Options</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/documentation/services/storage/">Azure Storage (Blobs, Tables, Queues, Files)</a></td><td><a target="_blank" href="http://aws.amazon.com/s3/">S3 (SimpleStorage)</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Block Storage</th><td><a target="_blank" href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/understanding-block-blobs--append-blobs--and-page-blobs#about-page-blobs">Azure Storage Disk</a><a target="_blank" href="http://azure.microsoft.com/en-us/documentation/articles/storage-dotnet-how-to-use-blobs/">(how to)</a></td><td><a target="_blank" href="http://aws.amazon.com/ebs/">Elastic Block Storage (EBS)</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Hybrid Cloud Storage</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/storsimple/">StorSimple</a></td><td>None</td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Shared File Storage</th><td><a target="_blank" href="https://azure.microsoft.com/services/storage/files/">Azure Files</a></td><td><a target="_blank" href="https://aws.amazon.com/efs/">Elastic File System (EFS)</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Backup Options</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/backup/">Azure Backup</a></td><td><a target="_blank" href="http://aws.amazon.com/glacier/">Glacier</a></td>
    <td>Coldline</td></tr>

<tr valign="top"><th align="left">Storage Services</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/documentation/articles/storage-import-export-service/">Azure Import Export (how to)</a></td><td><a target="_blank" href="http://aws.amazon.com/importexport/">ImportExport</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left"><br /></th><td><a target="_blank" href="http://azure.microsoft.com/en-us/documentation/articles/storage-dotnet-how-to-use-files/">Azure File Storage (how to)</a></td><td><a target="_blank" href="http://aws.amazon.com/storagegateway/">StorageGateway</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left"><br /></th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/site-recovery/">Azure Site Recovery</a></td><td>?</td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Database Options</th><td rowspan="1"><a target="_blank" href="http://azure.microsoft.com/en-us/services/sql-database/">Azure SQL Database</a>
</td><td><a target="_blank" href="http://aws.amazon.com/rds/">RDS (Relational Database Service)</a>
<br /><a target="_blank" href="http://azure.microsoft.com/en-us/documentation/articles/storage-import-export-service/">Redshift</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">NoSQL Database Options</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/documentdb/">Azure DocumentDB</a>
</td><td><a target="_blank" href="http://aws.amazon.com/dynamodb/">DynamoDB</a></td>
    <td>BigTable</td></tr>

<tr valign="top"><th align="left"><br /></th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/cache/">Azure Managed Cache (Redis Cache)</a>
</td><td><a target="_blank" href="http://aws.amazon.com/elasticache/">ElasticCache</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Scaling Options</th><td><a target="_blank" href="https://docs.microsoft.com/en-us/azure/app-service/app-service-environment-auto-scale">Azure Autoscaling</a> <a target="_blank" href="http://azure.microsoft.com/en-us/documentation/articles/cloud-services-how-to-scale/">(how to)</a> Machine Scale Sets</td><td><a target="_blank" href="http://aws.amazon.com/autoscaling/">AWS AutoScaling Group</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Data Orchestration</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/data-factory/">Azure Data Factory</a>
</td><td><a target="_blank" href="http://aws.amazon.com/datapipeline/">DataPipeline</a></td>
    <td>-</td></tr>


<tr valign="top" bgcolor="#d3d3d3"><td colspan="4"><a name="Analytics"></a>Analytics:</td></tr>    

<tr valign="top" class="tblEven"><th align="left">Visualization</th><td><a target="_blank" href="https://powerbi.microsoft.com/en-us/">PowerBI</a></td><td><a target="_blank" href="http://aws.amazon.com/quicksight/">QuickSight</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Data Discovery</th><td><a target="_blank" href="https://azure.microsoft.com/services/data-catalog/">Data Catalog</a></td><td>?</td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Analytics/Hadoop Options</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/hdinsight/">HDInsight (Hadoop)</a></td><td><a target="_blank" href="http://aws.amazon.com/elasticmapreduce/">Elastic MapReduce (EMR)</a></td>
    <td>Dataproc</td></tr>

<tr valign="top" class="tblEven"><th align="left"><a target="_blank" href="https://wilsonmar.github.io/elastic-ecosystem/">ElasticSearch</a></th><td><a target="_blank" href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/elastic.elasticsearch/">in Marketplace</a>
</td><td><a target="_blank" href="https://aws.amazon.com/elasticsearch-service/">ElasticSearch</a> </td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Search</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/search/">Azure Search</a>
</td><td><a target="_blank" href="http://aws.amazon.com/cloudsearch/">CloudSearch</a></td>
    <td>-</td></tr>

<tr valign="top" class="tblEven"><th align="left">Machine Learning (ML) PyTorch</th><td><a target="_blank" href="http://azure.microsoft.com/en-us/services/machine-learning/">Azure Machine Learning</a>
</td><td><a target="_blank" href="https://aws.amazon.com/machine-learning/">Machine-Learning</a> <a target="_blank" href="https://aws.amazon.com/sagemaker/">SageMaker</a></td>
    <td>Tensor Flow</td></tr>

<tr valign="top" class="tblEven"><th align="left">Translation</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/translator-text-api/">Translator Text</a>
</td><td><a target="_blank" href="https://aws.amazon.com/translate/">Amazon Translate</a></td>
    <td><a target="_blank" href="https://translate.google.com/">Google Translate</a></td></tr>

<tr valign="top" class="tblEven"><th align="left">Voice Recognition</th><td><a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/speaker-recognition/">Azure Speaker Recognition</a>
</td><td><a target="_blank" href="https://aws.amazon.com/rekognition/">Rekognition image and video</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Computer Vision</th><td><a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/">Computer Vision</a><a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/face/">Face</a>,<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-recognizing-text">OCR</a>
</td><td><a target="_blank" href="https://aws.amazon.com/rekognition/">Rekognition</a></td>
    <td>-</td></tr>

<tr valign="top"><th align="left">Video camera</th><td>?
</td><td><a target="_blank" href="https://www.amazon.com/AWS-DeepLens-learning-enabled-developers/dp/B075Y3CK37/">$249</a> <a target="_blank" href="https://aws.amazon.com/deeplens/">DeepLens</a></td>
    <td>-</td></tr>

</tbody></table>

Azure MDC (Mobile Data Center) makes use of "Azure Stack" software that runs Azure on-prem. in shipping containers, each with its own power and cooling hardware.

Credit:
<a target="_blank" href="http://www.tomsitpro.com/articles/azure-vs-aws-cloud-comparison,2-870-2.html"> 
TomsITPro</a> and
<a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/aws-professional/services"> Microsoft's comparison</a>


## Exam Questions

Your business is transitioning from an entirely on-premise IT environment to one hosted entirely in the public cloud. All physical servers and resources within your on-premise space will be replaced with virtual cloud resources hosted at offsite locations, on hardware that is managed by the cloud provider.

You are forecasting your IT resource costs for required compute, networking, and storage, and how expenses will change as a result of your cloud migration.

Which statement describes how your capital expenditures and operational expenditures for IT resources will change by migrating entirely to the public cloud?

A Your capital expenditure costs for IT resources will increase, while your operational expenditures will not change.

B Your IT resource costs will generally change from operational expenditures to capital expenditures.

C Your operational expenditure costs for IT resources will increase, while your capital expenditures will not change.

D Your IT resource costs will generally change from capital expenditures to operational expenditures.


<hr />

## Resources #

STAR: <a target="_blank" href="https://www.youtube.com/watch?v=8Ojw4-EWIBU">Comparing the Network Performance of AWS, Azure, GCP, IBM Cloud and Alibaba Cloud</a> Feb 21, 2020 by Angelique Medina of Thousand Eyes found that:
   * Azure and GCP route traffic through therir internal backbone network while AWS and AliCloud use the public internet more.
   IBM has a hybrid approach.
   * Azure is generally the fastest. GCP was slowest, worldwide, especially in Europe because they had no direct path from Europe to India in their own backbone but routed around the world.
   <br /><br />

<a target="_blank" href="http://resources.sdtimes.com/whitepaper-ibm-q4-2015-bluemix-ebook">
IBM Bluemix</a>

<a target="_blank" href="https://www.pluralsight.com/resource-center/webinars/watch-understanding-the-difference-between-microsoft-azure-and-amazon-aws">
"Understanding the Difference Between Microsoft Azure and Amazon AWS" by veteran Pluralsight video presenter Elias Khanser, a Microsoft MVP</a>

https://cloudonaut.io/my-mental-model-of-aws/

https://statistica.com has statistics on AWS:
![aws-2020-revenue](https://user-images.githubusercontent.com/300046/116902224-1eafaa00-abf8-11eb-8151-ae12a309f5ac.png)

<a target="_blank" href="https://a16z.com/2021/05/27/cost-of-cloud-paradox-market-cap-cloud-lifecycle-scale-growth-repatriation-optimization/">
BLOG: "The Cost of Cloud, a Trillion Dollar Paradox"</a> by venture capital firm Andressen Horowitz

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}


## More on cloud #

This is one of a series on cloud computing:

{% include cloud_links.html %}
