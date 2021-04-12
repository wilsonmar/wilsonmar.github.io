---
layout: post
title: "What is the big deal about Enterprise software?"
excerpt: "Multi-dimensional vendors capture the prize"
tags: [security, analytics]
date: "2021-04-08"
file: "enterprise-software"
image:
# enterprise-software-1900x500
  feature: https://user-images.githubusercontent.com/300046/113968826-1dee4880-97f1-11eb-84ab-1c2a195b8cf5.png
  credit: Dataversity
  creditlink: https://www.dataversity.net/preventing-enterprise-software-failures/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


Consultants and employees who work for enterprises and those who cater to them typically earn more than at other companies which can't afford premium prices.

The good news today is that enterprises now use the same core cloud infrastructure (at AWS, Azure, GCP, etc.) that any individual can use. However, many software companies make the bulk of their profit on additional-charge enterprise level subscriptions. This article focuses on specific examples of those enterprise features. But they make those features available free, for a temporary amount of time.

To successfully cater to enterprises, software needs to incorporate features needed to address their needs. A salesperson at a well-known developer tools software company once actually said in a meeting (unconvincingly):

> "We're enterprise software because we have thousands of enterprise users"

The rebuff was: "I think this software will actually be an enterprise offering when those 40 specific feature requests are implemented."

Here are the <strong>concerns</strong> addressed by those requests:

## 1. Automation for large numbers of people and objects

   The top 500 publicly-traded stocks in the US (by price times shares traded) are listed by Standard and Poors in their "S&P 500 index". There is also a Russell index of the top 3000 stocks. There are also many large privately-held corporations. The largest employer in the world is <a target="_blank" href="https://www.wikiwand.com/en/List_of_largest_employers">U.S. Department of Defense at 3.2 people, and Walmart at 2.2 million (1.3 million in the United States)</a>.

   Enterprises typically employ thousands of people making use of a complex set of IT components and databases. 

   So to keep support costs down, <strong>self-service</strong> apps are a big deal.

   Manual fixes are not practical with large amounts of data.

   Due to the large number of options, every field on enterprise forms are likely need a <strong>search box</strong>. It's not enough for vendors to simply provide a "Next" button for users to hunt for a value within a long list. 

   Enterprise workers get far more value from <strong>batch</strong> (bulk) export, import, and processing than from overwhelming dashboards requiring expert manual navigation. Many vendors don't get that. So specific <strong>actionable alerts</strong> are important for troubleshooeters.

   Enterprise-level software needs to be sophisticated enough to both logically summarize for executives AND appropriately isolate data and customize workflows used by each individual worker. 

## 2. Testing

   Enterprise developers, especially, need tools to efficienty wade though massive amounts of data and complex code, while they are working rather than days or weeks after they are "done".

   For example, Microsoft's Visual Studio (not the free Visual Studio Code, the client IDE) has an <a target="_blank" href="https://visualstudio.microsoft.com/vs/compare/">Enterprise level subscription which provides</a>:

   * Live Dependency Validation
   * Architectural Layer Diagrams
   * Architectural Validation
   <br /><br />

   Advanced Debugging and Diagnostics:
   * IntelliTrace
   * Code Clone
   * Code Map Debugger Integration
   * .NET Memory Dump Analysis
   * Snapshot Debugger
   * Time Travel Debugging (Preview)
   <br /><br />
   
   Testing:
   * IntelliTest
   * Live Unit Testing
   * Microsoft Fakes (Unit Test Isolation)
   * Code Coverage
   <br /><br />

   Cross-platform:
   * Embedded Assemblies
   * Xamarin Inspector, Profiler   
   <br /><br />


## 3. Hierarchy of groups

   Enterprises manage large amounts of data and people by grouping them in various ways, as in an organization chart.

   So enterprise workers need to make <strong>complex queries</strong> of data in order to filter out irrelevant parts of the large organization. For example, Microsoft Azure provides KQL (Kusto Query Language) with <a target="_blank" href="https://jmespath.org/tutorial.html">JMESPath</a> to select specific values from within a sea of data.

   Tags are useful and flexibile, but enterprises are more used to hierarchial groups which reflect the traditional organization chart of vice presidents above directors above managers, etc. Effective or not, all data needs to fit into such an arrangement. "Conway's Law" was coined for the observation that systems tend to look like the organization structure of the people building them.

   So enterprise software needs to create <strong>reports showing an indented hierarchy</strong> rather than a mere two-dimensional list.


## 4. Analytic breakdowns and summaries across several dimensions

   Since there are different people in each box in the hierarchy, each box in each hierarchy are likely to want its own set of reports with unique filters and visualizations with its own variations. Such reporting is needed on daily, weekly, monthly, quarterly, yearly basis as well as custom-defined periods within dimensions of time, location, and other values.

   Results often need to have a financial component which meet cost accounting principles.

   For example, GitHub provides users a rich API to retrieve data set of data from GraphQL APIs. 

   However, enterprise GitHub users need to create their own reports and visualizations over time:

   * Total number of users over time and number added each period over time
   * Ratio of users enrolled vs. those who made commits
   * Retention ratios
   * etc.
   <br /><br />


## 5. Global scale

   Global operations means that translations in various languages become available together.

   Also, when a large business goes down globally, a lot of money is lost.
   So to reduce recovery time for live databases faltering, an enterprise would <strong>log-ship</strong> every single add or update across the sea to a duplicate hot site ready to take over.

   However, several countries (such as Germany, Singapore, etc.) mandate that it's citizen's data not leave its soverign territory.

   Background knowledge about international commerce is important for work in enterprises.
   So is skill at distributing data and workload to several regions around the world within a CDN (Cloud Distribution Network) so that workers and users in South Africa and New Zealand can access systems as quickly as users in Virginia.

   An enterprise that operates only in one country may be satisfied with redundancy from running two or three separate cloud Availability Zones within a single region. This has lower cost because cloud vendors charge for network traffic between regions. To save even more money, some enterprises contract with "warm" data centers which wait until a disaster to install servers, or "cold" centers which don't have communications wired. This strategy  would extend time to recovery.

   The formation of a CPPT (Continuity Planning Project Team) and setup of a EOC (Emergency Operations Center) are defined by ISO 27001 Section 14, ISO 27002, <a target="_blank" href="http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf">NIST 800-34</a>, NFPA 1600 & 1620, HIPPA. These specify that enterprises have written DRP (Disaster Recovery Procedures) for emergency triage and management of information technology based on normal Business Management Procedures. DRP is the technical extension of longer-term strategic Risk Assessments and Business Continuity Plan (BCP) for the business as a whole -- to ensure immediate survivability.

## 6. Automation

   Systems which are not setup for instant recovery nevertheless need to "fail safe" to a secure state rather than to a hackable state.

   Complying with some standards require that redundant capabilities to be proven dependable,  regularly -- such as every year, when the RTA (Recovery Time Actual) statistic is captured. That's to identify whether the organization takes too long to activate restore or is too clumsy with restore procedures. 

   Sharing cloud-scale computing, storage, and network facilities in Azure has enabled enterprises to economically use the "blue/green" deployment strategy, which duplicates a complete set of production components for "canary" and capacity testing.

   Quick response requires automation for building and testing. Each server needs to be individually added or removed automatically within a "cluster" (within Kubernetes). That requires IaC (Infrastructure as Code such as Terraform) which defines all the components (compute, storage, and networking) in version-controled text files. 

## 7. Central and distributed planning and approvals

   Enterprises pay top dollar for those with the social intelligence to survive power politics.

   Many enterprises have historically operated under "separation of duties" as perhaps separate "fiefdoms" of independent departments for compute, storage, networking, etc. which may not feel compelled to collaborate with each other.
   
   Enterprises require Master Services Agreements (MSA) with vendors, managed by purchasing departments which sometimes operate on their own timelines.
   
   There is also central Security team vetting.


   Nevertheless, enterprise software vendor know that they need to provide free tools and help to poor individuals in order to build a skilled user base.

   Smart enterprise software vendors provide a way for an individual to become licensed off a personal credit card, to get a team going. Supporting off-book "shadow IT" is sometimes necessary to bridge the gap, and enable bottom-up achievement of enterprise objectives. This is especially important if competitors have similar features. Being able to run competing products in parallel in near production mode is often the only effective way to truely evaluate the true value between similar products.

   BTW, this is why it is often counter-productive for vendors to artifically limit evaluation periods to a mere two weeks. Many such vendors are eliminated prematurely because evaluation periods are usually much longer due to organizational complexities.



## 8. High Security

   When working with cloud vendors, many enterprises prefer to generate their own <strong>customer-owned keys</strong> for encryption of data at rest instead of having cloud vendors provide the keys.

   Many enterprises specify encryption of all data on hard drives. On Windows, BitLocker is used. On Linux, PGP and TruCrypt are options.

   Enterprises usually provide their users VPN (Virtual Private Network) to create an encrypted tunnel through the public internet. Enterprise editions of the Windows 10 operating system enables "DirectConnect" which ensures use of a VPN all the time when away from the office. It also blocks the Microsoft Store app and its installation of apps from that store.

   Some enterprises want Long-Term Servicing Channel (LTSC) where new features are not updated, just security updates. This is partly to maintain <strong>consistency</strong> of training and support materials used.

   The most sophisticated edition of Windows 10 -- Enterprise E5 -- adds Windows Defender ATP (Advanced Threat Protection) which runs virus scans and details the machine's security posture in sophisticated visualizations.

   Enterprise "DevSecOps" tooling include scanner programs to ensure security:

   * Identify secrets hard-coded (using GitLeaks, etc.)
   * Identify OWASP vulnerabilities in custom code (using Veracode, Fortify, etc.)
   * Identify vulnerabilities iteratively within packages referenced (using XRay, Sonatype, etc.)
   <br /><br />


## 9. Round-the-clock SOC using SIEM

   Enterprises have a SOC (Security Operations Center) which operates 24/7.

   Enterprise support typically have SLA (Service Level Agreements) which are quicker (more expensive) than others. Both Azure and AWS refunds 100% of its billing on periods which do not achieve a 95% availability.

   The SOC team ensures that every custom software is configured to send logs and metrics from all machines into a SIEM (Security Information and Event Management) system such as Splunk, Azure Sentinel, etc. Such systems commonly maintains several times more data than the systems themselves. Machine Learning techniques and advanced statistical analysis are becoming common with such systems. All that enables the SOC team to correlate events across the enterprise to detect intrusion and exploits.

   Logs, especially are also used by external auditors to determine actual compliance with policies. Those with access to SIEM data can elicit actual, detailed, real-time insights on inflows and outflows between different parts of the organization and systems -- a magical tool to identify bottlenecks and predict trends. We look forward to 3D dynamic projections in Mixed reality glasses from Microsoft, Apple, Facebook, etc. 

## 10. High Availability for disaster recovery

   Enterprise licensing typically involves providing High Availability (HA) features, which means running simultaneously in <strong>multiple locations</strong>. Such operations require real-time coordination of data created across multiple sites. Not a simple feat. When one region fails, the amount of time that it takes before end-users can continue work on a replacement system is so important that enterprises have a metric for it: MTD (Maximum Tolerable Downtime). Additionally, the RTO (Recovery Time Objective) measures the amount of time before a restore is initiated and data is restored. 

   The maximum amount of data that is allowed to be lost is measured by the RPO (Recovery Point Objective). An organization which takes incremental backups once a day would have an RPO of at least 24 hours since any data processed after the last backup would be lost. The RPO needs to include time to run and verify restores from backups.

   <a target="_blank" href="https://www.slideshare.net/renatadavidson/d-rvs-bcp-34018845"><img alt="dr-plan-davidson-consulting-638x385.png" width="638" height="385" src="https://user-images.githubusercontent.com/300046/113962529-1aed5b00-97e5-11eb-85c2-3e0b905ec855.png"></a>


## Summary

So here you have what makes for software to be enterprise-worthy:

1. Automation for large number of people and objects
2. Testing
3. Hierarchy of groups
4. Analytic breakdowns and summaries across several dimensions
5. Global scale
6. Automation
7. Central and distributed planning and approvals
8. High Security
9. Round-the-clock SOC using SIEM
10. High Availability for disaster recovery
<br /><br />

Building systems which inherently address the above enterprise concerns would save you the embarassment of having to add them at the request of enterprise prospects. And it's a lot easier to incorporate enterprise features during developement rather than as an afterthought.

