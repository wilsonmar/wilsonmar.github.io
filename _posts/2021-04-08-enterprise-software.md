---
layout: post
title: "What is the big deal about Enterprise software?"
excerpt: "How to meet enterprise needs with multi-dimensional offerings with no limits of scale and geography"
tags: [security, cloud, analytics]
date: "2021-04-08"
file: "enterprise-software"
image:
# enterprise-office-1900x500.png
  feature: https://user-images.githubusercontent.com/300046/115942774-0c4fa680-a469-11eb-8337-d57da1650a51.png
  credit: Office-hub
  creditlink: https://www.office-hub.com/different-office-types/enterprise-office-space
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

To successfully cater to enterprises, software vendors must incorporate features enterprises wnat and need. A salesperson at a well-known developer tools software company once actually said in a meeting (unconvincingly):

> "We're enterprise software because we have enterprise users"

The stinging rebuff was: "I think your software will actually be an enterprise offering when those 30 specific feature we identified are implemented."

{% include whatever.html %}

Here are the <strong>concerns</strong> enterprises have that need to be addressed by vendors:

## 1. Automation for large numbers of people and data

   The top 500 publicly-traded stocks in the US are listed (by price times shares traded) by Standard and Poors in their "S&P 500 index". There is also a Russell index of the top 3000 stocks. There are also many large privately-held corporations. But financial indexes are not the only definition of enterprise.

   At the top of the <a target="_blank" href="https://www.wikiwand.com/en/List_of_largest_employers">list of the largest employers in the world</a> is U.S. Department of Defense at 3.2 million people, followed by China's military, then Walmart at 2.2 million (1.3 million in the United States), about the same as Amazon.

   Sheer <strong>scale</strong> means enterprise workers get value from <strong>batch</strong> (bulk) export, import, and processing. 
   Large amounts of data makes manual fixes not practical.
   
   Enterprise-level software needs to appropriately <strong>isolate data</strong> and customize workflows used by each individual worker AND be sophisticated enough to <strong>logically summarize</strong> trends for executives. Many managers are overwhelmed by dashboards requiring expert manual navigation.

>   Due to the large number of options, every field on enterprise forms are likely need a search box. It's not enough for vendors to simply provide a "Next" button for users to hunt for a value within a long list. 

   To keep support costs down, <strong>self-service</strong> apps are a big deal.

   Can your enterprise app cut through the buracracy and <strong>waiting for approvals</strong>?
   
   Extensive testing is crucial to keep rework from being unsustainable.

> <strong>Specific, actionable alerts</strong> are important for troubleshooting.
   
   The more managers in an organization, the more complexity and variations will be requested.
   That means an explosion of divergent components, databases, and technologies which drive them.

## 2. Hierarchy of groups

   Enterprises manage large amounts of data and people by grouping them in various ways, as in an organization chart.

   So enterprise workers need to make <strong>complex queries</strong> of data in order to filter out irrelevant parts of the large organization. For example, Microsoft Azure provides KQL (Kusto Query Language) with <a target="_blank" href="https://jmespath.org/tutorial.html">JMESPath</a> to select specific values from within a sea of data.

   Tags are useful and flexibile, but enterprises are more used to hierarchial groups which reflect the traditional organization chart of vice presidents above directors above managers, etc. Effective or not, all data needs to fit into such an arrangement. "Conway's Law" was coined for the observation that systems tend to look like the organization structure of the people building them.

>   So enterprise software needs to create <strong>reports showing an indented hierarchy</strong> rather than a mere two-dimensional list.


## 3. Analytic breakdowns and summaries across several dimensions

   Since there are different people in each box in the hierarchy, each box in each hierarchy are likely to want its own set of reports with unique filters and visualizations with its own variations. Such reporting is needed on daily, weekly, monthly, quarterly, yearly basis as well as custom-defined periods within dimensions of time, location, and other values.

   Results often need to have a financial component which meet cost accounting principles.

   Because the size and complexity of enterprise organizations make decisions time-consuming to propagate, enterprises must strive to move from reactive to proactive to predictive. 

>   So enterprise visualizations over time need to look ahead to identify <strong>trends</strong> rather than just looking backward.

   Additionally, enterprise users and managers need to create their own reports and visualizations.


## 4. Global scale

   Global operations means that <strong>translations</strong> in various languages become available together when the product ships. That requires massive coordination.

   When a large business goes down, a lot of money is lost.
   So to reduce recovery time for live databases faltering, an enterprise would <strong>log-ship</strong> every single add or update across the sea to a duplicate hot site ready to take over. However, several countries (such as Germany, Singapore, etc.) mandate that it's citizen's <strong>data not leave</strong> its sovereign territory.

   Background knowledge about international commerce is important for work in enterprises.
   
   An enterprise that operates only in one country may be satisfied with redundancy from running two or three separate cloud Availability Zones within a single region. This has lower cost because cloud vendors charge for network traffic between regions. To save even more money, some enterprises contract with "warm" data centers which wait until a disaster to install servers, or "cold" centers which don't have communications wired. This strategy  would extend time to recovery.

   The formation of a CPPT (Continuity Planning Project Team) and setup of a EOC (Emergency Operations Center) are defined by ISO 27001 Section 14, ISO 27002, <a target="_blank" href="http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf">NIST 800-34</a>, NFPA 1600 & 1620, HIPPA. These specify that enterprises have written DRP (Disaster Recovery Procedures) for emergency triage and management of information technology based on normal Business Management Procedures. DRP is the technical extension of longer-term strategic Risk Assessments and Business Continuity Plan (BCP) for the business as a whole -- to ensure immediate survivability.

## 5. Time sensitive 

   Enterprise developers, especially, need tools to efficiently wade though massive amounts of data and complex code, while they are working on them <strong>real-time</strong> (rather than days or weeks after they have moved on to other issues).

   Enterprises <strong>duplicate data and workload</strong> to several regions around the world within a CDN (Cloud Distribution Network) so that workers and users in South Africa and New Zealand can access systems as quickly as users in Virginia.

   Complying with some standards require that redundant capabilities to be proven dependable, regularly -- such as every year, when the RTA (Recovery Time Actual) statistic is captured. That's to identify whether the organization takes too long to activate restore or is too clumsy with restore procedures. 

   Systems which are not setup for instant recovery nevertheless need to "fail safe" to a secure state rather than to a hackable state.

   Sharing "cloud-scale" computing, storage, and network facilities in clouds enable use of the <a target="_blank" href="https://harness.io/blog/continuous-verification/blue-green-canary-deployment-strategies/">blue/green" strategy for deployment</a>, which creates (in a cloud) a complete replacement set of components for "canary" and capacity testing before a full switch to production.

   Quick response requires automation for building and testing. 

   Each server needs to be individually added or removed automatically within a "cluster" (within Kubernetes). That requires IaC (Infrastructure as Code such as Terraform) which defines all the components (compute, storage, and networking) in version-controled text files. 

## 6. Central yet distributed planning and approvals

   Managers in enterprises desire to be able to centrally define policies (what is allowed or denied) distributed automatically to control everything. Software vendors are enabling a fundamental shift in governance where policy enforcement decisions occur instantly in automated pipelines rather than by manual inspections and meetings holding up progress.

   Many enterprises have tried to setup PMOs, hire outside consultants, and install Agile Scrum Masters to overcome the headwind from entrenched "fiefdoms" of independent departments for compute, storage, networking, etc. which may not feel compelled to collaborate with others. Additionally, enterprises require Master Services Agreements (MSA) with vendors, managed by central purchasing and Security departments which sometimes operate on their own timelines. 
   
   So work in enterprises require social intelligence (self-control and guile) to deal with intricate corporate politics. That's one reason why enterprise salespeople and technicians fetch top dollar. 

   The other reason for a shortage of enterprise specialists is entrenchment of "separation of duties" and "least privilege" principles. Very few are able to cross fiefdoms to build the multi-tool and multi-disciplinary skills needed today. 

   To achieve competitive speed, many HR, marketing, and other "user" departments need to go outside on-premise data centers by running "Shadow IT" operations using enterprise software such as Salesforce, AWS, Microsoft, GCP, and others. Enlightened enterprise software vendors provide a way to get licenses using a personal credit card because it is sometimes necessary to bridge the gap to ultimately enables bottom-up achievement of enterprise agility objectives.

   The good news today is that individuals and small businesses can now use the same core cloud infrastructure (at AWS, Azure, GCP, etc.). However, many software companies make the bulk of their profit on additional-charge enterprise level subscriptions. Such features are usually not free, even for a temporary amount of time.

   Vendor flexibility is especially important if competitors have similar features. Being able to run competing products in parallel in near production mode is often the only effective way to truely evaluate actual value between similar products. BTW, this is why it is often counter-productive for vendors to artifically limit evaluation periods to a mere two weeks. Many such vendors are eliminated prematurely because evaluation periods are usually much longer due to organizational complexities.


## 7. High Security

   Because enterprises are tempting targets, defensive security is important. So every piece of software and every service needs vetting -- a thankless, tedious endeavor. So many use specialist consultants and whistic.com, which pool security questionaires and answers to reduce duplicate work.

   When working with cloud vendors, many enterprises prefer to generate their own <strong>customer-owned keys</strong> for encryption of data at rest instead of having cloud vendors provide the keys.

   Many enterprises specify encryption of all data on hard drives. On Windows, BitLocker is used. On Linux, MCrypt, PGP, TruCrypt, and others are options.

   Enterprises usually provide their users VPN (Virtual Private Network) to create an encryption-protected tunnel through the public internet. Enterprise editions of the Windows 10 operating system enables "DirectConnect" which ensures use of a VPN all the time. It also blocks apps from being installed.

   Some enterprises want Long-Term Servicing Channel (LTSC) where new features are not updated, just security updates. This is partly to maintain <strong>consistency</strong> of training and support materials used.

   The most sophisticated edition of Windows 10 -- Enterprise E5 -- adds Windows Defender ATP (Advanced Threat Protection) which runs virus scans and details the machine's security posture in sophisticated visualizations.

   Enterprise "DevSecOps" tooling include scanner programs to ensure security:

   * Identify secrets hard-coded (using GitLeaks, etc.)
   * Identify OWASP vulnerabilities in custom code (using Veracode, Fortify, etc.)
   * Identify vulnerabilities iteratively within packages referenced (using XRay, Sonatype, etc.)
   <br /><br />

   Data to track the Security Posture of the whole Enterprises means obtaining "metadata" (data about data), stored in systems such as Service Now. This is so security managers can associate user activities to specific charge codes and approval events. This means that software vendors need to accomodate an additional overlay of manual procedures (from other vendors) into every workflow. For example, in GitHub, when someone creates a new repository, since GitHub doesn't track charge codes, Enterprise Security may want the user to exit out temporarily to another system to specify that charge code or request permission associated with the request.


## 8. Round-the-clock SOC using SIEM

   Enterprises have a SOC (Security Operations Center) which operates 24/7.

   Enterprise support typically have SLA (Service Level Agreements) which are quicker (more expensive) than others. Both Azure and AWS refunds 100% of its billing on periods which do not achieve at least 95% availability (<a target="_blank" href="https://uptime.is/">18 days a year</a>). To achieve 99.99% (down a hour per year) requires self-diagnosing and self-healing.

   The SOC (Security Operations Center) ensures that software is configured to send logs and metrics from all machines into a SIEM (Security Information and Event Management) system such as Splunk, Azure Sentinel, etc. Such systems commonly maintains several times more data than the systems themselves. Machine Learning techniques and advanced statistical analysis are becoming common with such systems. All that enables the SOC team to correlate events across the enterprise to detect intrusion and exploits.

   Logs, especially, are also used by external auditors to determine actual compliance with policies. Those with access to SIEM data can elicit actual, detailed, real-time insights on inflows and outflows between different parts of the organization and systems -- a magical tool to identify bottlenecks and predict trends. We look forward to 3D dynamic projections in Mixed reality glasses from Microsoft, Apple, Facebook, etc. 

## 9. Quick and complete recovery from disasters

   Many legacy applications were created when hardware capacity was static. It took months to obtain additional capacity. Even with over-bought capacity, such systems were designed to fail when overwhelmed.

   Use of shared public clouds enables enterprise to use High Availability (HA) features, which means running simultaneously in <strong>multiple locations</strong>. Such operations require real-time coordination of data created across multiple sites. 

   <a target="_blank" href="https://www.slideshare.net/renatadavidson/d-rvs-bcp-34018845" title="From Davidson Consulting">This timeline</a> illustrates the complexity ignored by other diagrams on the same topic, especially the interplay between customer-facing business teams and ICT (Information and Communication Technology) organizations:

   <a target="_blank" title="dr-plan-davidson-consulting-1029x618.png" href="https://user-images.githubusercontent.com/300046/138092441-4c61139d-e8bd-4772-9a9b-537a489565ac.png"><img alt="dr-plan-davidson-consulting-638x385.png" width="638" height="385" src="https://user-images.githubusercontent.com/300046/113962529-1aed5b00-97e5-11eb-85c2-3e0b905ec855.png"></a>

   The success of a BCP (Business Continuity Plan) for Continuation of Operations (COOP) is realizing for each incident the MTPoD (Minimum Tolerable Period of Disruption), aka MTD (Maximum Tolerable Downtime), to reach the minimal level of business process resumption. MTD (MaximumTolderable Downtime) is the maximum number of hours an organization has to recover from a disaster, until it has passed the point of no return.

   RTO (Recovery Time Objective) is the maximum number of hours an organization has to recover from a disaster, without suffering too much damage.

   RPO (Recovery Point Objective) refers to how far back to recover. This should be defined based on what processes can achieve. An organization that takes backups weekly stands to lose up to a week of data. Thus, enterprises typically setup their databases to perform "log shipping" where individual changes to each database are forwarded keep a mirror database on standy in another region.
   
   All these are ideally defined before a disaster (receiving a ransomware notice).

   Notice in that green line a possible disconnect between the two organization's measurements?
   A technical definition of what is measurable "Start of recovery" and "Incident ended" can be very different due to manual processes. What is the DRP (Diaster Recovery Plan) to business personnel?
   How do they participate and coordinate during F&F (Fail and Fix) events?

   > Do a dry run to actually restore from the last (most recent) backup copy to measure whether the RTA (Recovery Time Actual) meets the wishful <strong>RTO</strong> (Recovery Time Objective) for how much data is lost.

   In a dry run of systems going down suddenly, how much data was actually lost compared to the <strong>RPO</strong> (Recovery Point Objective)? An organization which takes incremental backups once a day would have an RPO of at least 24 hours since any data processed after the last backup would be lost. The RPO needs to include time to run and verify restores from backups.
   
   ---

   SnowflakeDB and Microsoft's CosmosDB send database changes continously to several regions so data is not lost if one region goes down. Users of the global service can choose to wait for confirmation on every transaction or continue without confirmation by assuming "eventual consistency".

## Summary

So here you have what makes for software to be enterprise-worthy:

1. Automation for large number of people and objects
2. Hierarchy of groups
3. Analytic breakdowns and summaries across several dimensions
4. Global scale
5. Time sensitive
6. Central yet distributed planning and approvals
7. High Security
8. Round-the-clock SOC using SIEM
9. Quick and complete recovery from disasters
<br /><br />

Incorporating the above is not just for enterprises, but any organization who want to be prepared to become massive with less issues. Building systems which inherently address the above enterprise concerns would save vendors and implementers the embarassment of having to add them at the request of end-users. And it's a lot easier to incorporate enterprise features during developement rather than as an afterthought.

// Wilson Mar
