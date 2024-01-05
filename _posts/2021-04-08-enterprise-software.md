---
layout: post
date: "2024-01-04"
file: "enterprise-software"
title: "Is your offering enterprise-worthy?"
excerpt: "How to provide enterprises multi-dimensional offerings with no limits of scale, geography, and complexity"
tags: [security, cloud, analytics]
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

To successfully cater to enterprises, software vendors must incorporate features enterprises want and need. A salesperson from a software company once actually said in a meeting (unconvincingly):

> "We're enterprise software because we have enterprise users"

The stinging rebuff was:

> "I think your software will actually be an enterprise offering when those specific features are implemented."

Here are the <strong>concerns</strong> enterprises have that need to be addressed by vendors:

1. <a href="#Automation">Automation for large numbers of people and objects</a>
2. <a href="#Hierarchy">Hierarchy of groups</a>
3. <a href="#Analytics">Analytic breakdowns and summaries across several dimensions</a>
4. <a href="#Scale">Global scale</a>
5. <a href="#Time">Time sensitive</a>
6. <a href="#Central">Central yet distributed planning and approvals</a>
7. <a href="#Security">High Security</a>
8. <a href="#SOC">Round-the-clock SOC using SIEM, IDS, SOAR</a>
9. <a href="#Recovery">Quick and complete recovery from disasters</a>
<br /><br />

{% include whatever.html %}

<a name="Automation"></a>

## 1. Automation for large numbers of people and data

Many rank enterprises based on financial measures. The "Fortune 500" lists the top 500 publicly traded stocks in the US. The Standard and Poor's "S&P 500 index" lists stocks in the US by price times shares traded. There is also a Russell index of the top 3000 US stocks. There are also many large privately-held corporations. 

At the top of the <a target="_blank" href="https://www.wikiwand.com/en/List_of_largest_employers">list of the <strong>largest employers</strong> in the world</a> is the U.S. Department of Defense at 3.2 million people, followed by China's military, then Walmart at 2.2 million (1.3 million in the United States), about the same as Amazon.

Sheer <strong>scale</strong> means enterprise workers get value from <strong>batch</strong> (bulk) export, import, and processing. Large amounts of data make <strong>manual fixes not practical</strong>.
   
Enterprise-level software needs to appropriately <strong>isolate data</strong> and customize workflows used by each individual worker AND be sophisticated enough to <strong>logically summarize</strong> trends for executives. Many managers are overwhelmed by dashboards requiring expert manual navigation.

>   Due to the large number of options, every field on enterprise data entry forms likely need a search box. It's not enough for vendors to simply provide a "Next" button for users to hunt for a value within a long list. 

   To keep support costs down, <strong>self-service</strong> apps are a big deal.

   Can your enterprise app cut through the bureaucracy and <strong>waiting for approvals</strong>?
   
   Extensive testing is crucial to keep rework from being unsustainable.

> <strong>Specific, actionable alerts</strong> are important for troubleshooting.
   
   The more managers in an organization, the more complexity and variations will be requested.
   That means an explosion of divergent components, databases, and technologies which drive them.


<a name="Hierarchy"></a>

## 2. Hierarchy of groups

To manage large amounts of data and people, enterprises group them in various ways, as in an organization chart.

   So enterprise workers need to make <strong>complex queries</strong> of data in order to filter out irrelevant parts of the large organization. For example, Microsoft Azure provides KQL (Kusto Query Language) with <a target="_blank" href="https://jmespath.org/tutorial.html">JMESPath</a> to select specific values from within a sea of data.

   Tags are useful and flexible, but enterprises are more used to hierarchical groups which reflect the traditional organization chart of vice presidents above directors above managers, etc. Effective or not, all data needs to fit into such an arrangement. "Conway's Law" was coined for the observation that systems tend to look like the organizational structure of the people building them.

> Enterprise software needs to create <strong>reports showing an indented hierarchy</strong> rather than a mere two-dimensional list. Enterprise software needs to accommodate complex organizational structures.

And one other thing: executives at enterprises are paid a lot of money so many of them expect to be treated like VIP rock stars.


<a name="Analytics"></a>

## 3. Analytic breakdowns and summaries across several dimensions

   Since there are different people in each box in the hierarchy, each box in each hierarchy is likely to want its own set of reports with unique filters and visualizations with its own variations. Such reporting is needed on a daily, weekly, monthly, quarterly, and yearly basis as well as custom-defined periods within dimensions of time, location, and other values.

   Results often need to have a financial component that meets cost accounting principles.

   Because the size and complexity of enterprise organizations make decisions time-consuming to propagate, enterprises must strive to move from reactive to proactive to predictive. 

>   So enterprise visualizations over time need to look ahead to identify <strong>trends</strong> rather than just looking backward.

   Additionally, enterprise users and managers need to create their own reports and visualizations.

<a name="Scale"></a>

## 4. Global scale

   Global operations mean that <strong>translations</strong> in various languages become available together when the product ships. That requires massive coordination.

   When a large business goes down, a lot of money is lost.
   So to reduce recovery time for live databases faltering, an enterprise would <strong>log-ship</strong> every single add or update across the sea to a duplicate hot site ready to take over. However, several countries (such as Germany, Singapore, etc.) mandate that it's citizen's <strong>data not leave</strong> its sovereign territory.

   Background knowledge about international commerce is important for work in enterprises.
   
   An enterprise that operates only in one country may be satisfied with redundancy from running two or three separate cloud Availability Zones within a single region. This has lower cost because cloud vendors charge for network traffic between regions. To save even more money, some enterprises contract with "warm" data centers which wait until a disaster to install servers, or "cold" centers which don't have communications wired. This strategy would extend the time to recovery.

   The formation of a CPPT (Continuity Planning Project Team) and setup of an EOC (Emergency Operations Center) are defined by ISO 27001 Section 14, ISO 27002, <a target="_blank" href="http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf">NIST 800-34</a>, NFPA 1600 & 1620, HIPPA. These specify that enterprises have written DRP (Disaster Recovery Procedures) for emergency triage and management of information technology based on normal Business Management Procedures. DRP is the technical extension of longer-term strategic Risk Assessments and Business Continuity Plan (BCP) for the business as a whole -- to ensure immediate survivability.

<a name="Time"></a>

## 5. Time sensitive 

   Enterprise developers, especially, need tools to efficiently wade through massive amounts of data and complex code, while they are working on them <strong>real-time</strong> (rather than days or weeks after they have moved on to other issues).

   Enterprises <strong>duplicate data and workload</strong> to several regions around the world within a CDN (Cloud Distribution Network) so that workers and users in South Africa and New Zealand can access systems as quickly as users in Virginia.

   Complying with some standards requires that redundant capabilities be proven dependable, regularly -- such as every year, when the RTA (Recovery Time Actual) statistic is captured. That's to identify whether the organization takes too long to activate restore or is too clumsy with restore procedures. 

   Systems that are not set up for instant recovery nevertheless need to "fail safe" to a secure state rather than to a hackable state.

   Sharing "cloud-scale" computing, storage, and network facilities in clouds enable use of the <a target="_blank" href="https://harness.io/blog/continuous-verification/blue-green-canary-deployment-strategies/">blue/green" strategy for deployment</a>, which creates (in a cloud) a complete replacement set of components for "canary" and capacity testing before a full switch to production.

   Quick response requires automation for building and testing. 

   Each server needs to be individually added or removed automatically within a "cluster" (within Kubernetes). That requires IaC (Infrastructure as Code such as Terraform) which defines all the components (compute, storage, and networking) in version-controlled text files. 

<a name="Central"></a>

## 6. Central yet distributed planning and approvals

   Managers in enterprises desire to be able to centrally define policies (what is allowed or denied) distributed automatically to control everything. Software vendors are enabling a fundamental shift in governance where policy enforcement decisions occur instantly in automated pipelines rather than by manual inspections and meetings holding up progress.

   Many enterprises have tried to setup PMOs, hire outside consultants, and install Agile Scrum Masters to overcome the headwind from entrenched "fiefdoms" of independent departments for compute, storage, networking, etc. which may not feel compelled to collaborate with others. Additionally, enterprises require Master Services Agreements (MSA) with vendors, managed by central purchasing and Security departments which sometimes operate on their own timelines. 
   
   So work in enterprises require social intelligence (self-control and guile) to deal with intricate corporate politics. That's one reason why enterprise salespeople and technicians fetch top dollar. 

   The other reason for a shortage of enterprise specialists is the entrenchment of "separation of duties" and "least privilege" principles. Very few are able to cross fiefdoms to build the multi-tool and multi-disciplinary skills needed today. 

   To achieve competitive speed, many HR, marketing, and other "user" departments need to go outside on-premise data centers by running "Shadow IT" operations using enterprise software such as Salesforce, AWS, Microsoft, GCP, and others. Enlightened enterprise software vendors provide a way to get licenses using a personal credit card because it is sometimes necessary to bridge the gap to ultimately enable the bottom-up achievement of enterprise agility objectives.

   The good news today is that individuals and small businesses can now use the same core cloud infrastructure (at AWS, Azure, GCP, etc.). However, many software companies make the bulk of their profit on additional-charge enterprise-level subscriptions. Such features are usually not free, even for a temporary amount of time.

   Vendor flexibility is especially important if competitors have similar features. Being able to run competing products in parallel in near-production mode is often the only effective way to truly evaluate the actual value between similar products. BTW, this is why it is often counter-productive for vendors to artificially limit evaluation periods to a mere two weeks. Many such vendors are eliminated prematurely because evaluation periods are usually much longer due to organizational complexities.

   The trend is for enterprises to migrate from on-premise data centers to the cloud -- many on multiple clouds. That means that enterprises need to be able to prove their software can run on different clouds. Hyperscalers (such as AWS, Azure, GCP, etc.) provide innovation in AI/ML, low-code coding, datalakes, IoT, etc. 

   This diagram (from Neal Ford) illustrates the complexity of common tradeoffs in enterprise component design.
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1704427036/enterprise-comp-240104-3360x2100_crr4cf.png"><img alt="enterprise-comp-240104-3360x2100.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1704427036/enterprise-comp-240104-3360x2100_crr4cf.png"></a>

   New "Delta lakes" (such as <a target="_blank" href="https://wilsonmar.github.io/databricks/">Databricks</a> and Microsoft Fabrid) enable OLTP and OLAP to be efficiently operate on a single delta lake. This enables the use of <strong>streaming</strong> to send data to a central data lake for analysis. This is especially useful for IoT (Internet of Things) devices which send data continuously.

   On the left, <strong>extracts</strong> from a central database sent to remote locations can achieve faster local access. 
   There is less chance of data loss when data is filtered to what each remote location needs.
   However, that also reduces support for those who roam among locations.
   Allowing customers to process based on local extracts would allow for continued operations.
   But that would require synchronization with the central database, such as <strong>change data capture</strong> (CDC) to send only changes to data rather than the whole data set.


<a name="Security"></a>

## 7. High Security

   Because enterprises are tempting targets, defensive security is important. So every piece of software and every service needs vetting -- a thankless, tedious endeavor. So many use specialist consultants and whistic.com, which pool security questionnaires and answers to reduce duplicate work.

   When working with cloud vendors, many enterprises prefer to generate their own <strong>customer-owned keys</strong> for the encryption of data at rest instead of having cloud vendors provide the keys.

   Many enterprises need to use <strong>strong encryption</strong> on data. In transit, <strong>mTLS</strong> (mutual TLS) protocols use certificates to encrypt each side of transmissions. On Windows, BitLocker is used on whole hard drives. Linux, MCrypt, PGP, TruCrypt, and others are options. If a hard drive is removed from a machine, the data on it would require many years of brute-force attacks to crack. Faster computers (and <a target="_blank" href="https://wilsonmar.github.io/quantum/">Quantum computing</a>) will soon work so fast that very strong algorithms are needed.
   That is also why frequent re-authentication is required. That's also why instead of having static passwords waiting to be hacked, enterprises are moving to <strong>dynamic passwords</strong> and user accounts which are generated for each session and then destroyed after a short time. The best password storage is no password at all.

   Enterprises usually provide their users VPN (Virtual Private Network) to create an encryption-protected tunnel through the public internet to defeat man-in-the-middle attacks. Enterprise editions of the Windows 10 operating system enable "DirectConnect" which ensures the use of a VPN all the time. It also blocks apps from being installed.

   Enterprises want vendors to provide Long-Term Servicing Channel (LTSC) versions which contain just security updates but no new features -- to maintain <strong>consistency</strong> of training and support materials used.

   The most sophisticated edition of Windows 10 -- Enterprise E5 -- adds Windows Defender ATP (Advanced Threat Protection) which runs virus scans and details the machine's security posture in sophisticated visualizations. It also provides a "sandbox" to run suspicious programs in isolation.

   Enterprise "DevSecOps" tooling includes scanner programs to identify:
   * secrets exposed in open-source coded (using GitLeaks, etc.)
   * security vulnerabilities in <a target="_blank" href="https://wilsonmar.github.io/terraform/">Terraform</a> Infrastructure as Code (using Policy as Code TFSec, Checkov, etc.)
   * <a target="_blank" href="https://wilsonmar.github.io/owasp-testing/">OWASP vulnerabilities</a> in custom code (using Veracode, Fortify, etc.)
   * open-source packages referenced but are known to have vulnerabilities in the <a target="_blank" href="https://www.cvedetails.com/">US NIST CVE database</a> (using XRay, Sonatype, etc.) 
   * malicious code within packages (identified by <a target="_blank" href="https://www.socket.dev/">socket.dev</a>)
   <br /><br />

   Higher security means more <strong>granularity</strong> in controlling what permissions specific users can access specific data based on each person's role and group/department membership. New technologies enable <strong>Dynamic Attribute-Based Access Control</strong> (DABAC) which enables the use of <strong>contextual attributes</strong> (such as time of day, location, etc.) to determine whether a user can access data.

   Need for security has led enterprises to <strong>segment</strong> access in different ways.
   

<a name="SOC"></a>

## 8. Round-the-clock SOC using SIEM and SOAR

   Enterprise support typically has SLA (Service Level Agreements) which are quicker (more expensive) than others. Both Azure and AWS refund 100% of their billing on periods that do not achieve at least 95% availability (<a target="_blank" href="https://uptime.is/">18 days a year</a>). Achieving 99.99% (down an hour per year) requires self-diagnosing and self-healing.

   Most large enterprises operate a SOC (Security Operations Center) which operates 24/7/365 to quickly respond to trouble detected among logs gathered from the many software programs the organization runs. IDS (Intrusion Detection Systems) repeatedly analyzes files to detect indicators of compromise.

   The large number of people and data in enterprises means that <strong>automated</strong> tools are needed to identify and respond to threats.

   Such utilities need developers to configure each application built to send logs and metrics from all machines into a SIEM (Security Information and Event Management) system such as Splunk, Azure Azure Sentinel, etc. Such systems commonly maintain several times more data than the systems themselves. Machine Learning techniques and advanced statistical analysis are becoming common with such systems. All that enables the SOC team to correlate events across the enterprise to detect intrusion and exploits.

   Logs, especially, are also used by external auditors to determine actual compliance with policies. Those with access to SIEM data can elicit actual, detailed, real-time insights on inflows and outflows between different parts of the organization and systems -- a magical tool to identify bottlenecks and predict trends. We look forward to 3D dynamic projections in Mixed reality glasses from Microsoft, Apple, Facebook, etc. 

   The complexity of SIEM systems requires utilities (such as Cardinal) to audit whether detection mechanisms are actually responding to various threats.

   Data to track the Security Posture of the whole Enterprise means obtaining "metadata" (data about data). Enterprise apps need to provide central Service Now systems with a detailed history of auditable user activities linked to specific charge codes and approval events. This is especially important for financial and healthcare organizations. This means that software vendors need to provide an additional overlay of manual procedures into every workflow. For example, in GitHub, when someone creates a new repository (since GitHub doesn't track charge codes), enterprise Security may want the user to exit out temporarily to another system to specify that charge code or request permission associated with the request.
   Detailed metadata and audit logs enable enterprises to perform <strong>forensics</strong> (after the fact) to identify who did what and when -- needed for legal proceedings. 


<a name="Recovery"></a>

## 9. Quick and complete recovery from disasters

   Many legacy applications were created when hardware capacity was static. It took months to obtain additional capacity. Even with over-bought capacity, such systems were designed to fail when overwhelmed.

   The use of shared public clouds enables enterprises to use High Availability (HA) features, which means running simultaneously in <strong>multiple locations</strong>. Such operations require real-time coordination of data created across multiple sites. 

   <a target="_blank" href="https://www.slideshare.net/renatadavidson/d-rvs-bcp-34018845" title="From Davidson Consulting">This timeline</a> illustrates the complexity ignored by other diagrams on the same topic, especially the interplay between customer-facing business teams and ICT (Information and Communication Technology) organizations:

   <a target="_blank" title="dr-plan-davidson-consulting-1029x618.png" href="https://user-images.githubusercontent.com/300046/138092441-4c61139d-e8bd-4772-9a9b-537a489565ac.png"><img alt="dr-plan-davidson-consulting-638x385.png" width="638" height="385" src="https://user-images.githubusercontent.com/300046/113962529-1aed5b00-97e5-11eb-85c2-3e0b905ec855.png"></a>

   The success of a BCP (Business Continuity Plan) for Continuation of Operations (COOP) is realizing for each incident the MTPoD (Minimum Tolerable Period of Disruption), aka MTD (Maximum Tolerable Downtime), to reach the minimal level of business process resumption. MTD (MaximumTolderable Downtime) is the maximum number of hours an organization has to recover from a disaster until it has passed the point of no return.

   RTO (Recovery Time Objective) is the maximum number of hours an organization has to recover from a disaster, without suffering too much damage.

   RPO (Recovery Point Objective) refers to how far back to recover. This should be defined based on what processes can achieve. An organization that takes backups weekly stands to lose up to a week of data. Thus, enterprises typically set up their databases to perform "log shipping" where individual changes to each database are forwarded to keep a mirror database on standby in another region.
   
   All these are ideally defined before a disaster (receiving a ransomware notice).

   Notice in that green line a possible disconnect between the two organization's measurements?
   A technical definition of what is measurable "Start of recovery" and "Incident ended" can be very different due to manual processes. What is the DRP (Disaster Recovery Plan) for business personnel?
   How do they participate and coordinate during F&F (Fail and Fix) events?

   > Do a dry run to actually restore from the last (most recent) backup copy to measure whether the RTA (Recovery Time Actual) meets the wishful <strong>RTO</strong> (Recovery Time Objective) for how much data is lost.

   In a dry run of systems going down suddenly, how much data was actually lost compared to the <strong>RPO</strong> (Recovery Point Objective)? An organization that takes incremental backups once a day would have an RPO of at least 24 hours since any data processed after the last backup would be lost. The RPO needs to include time to run and verify restores from backups.
   
   ---

   SnowflakeDB and Microsoft's CosmosDB send database changes continuously to several regions so data is not lost if one region goes down. Users of the global service can choose to wait for confirmation on every transaction or continue without confirmation by assuming "eventual consistency".

## Summary

So here you have what makes for software to be enterprise-worthy:

1. <a href="#Automation">Automation for large numbers of people and objects</a>
2. <a href="#Hierarchy">Hierarchy of groups</a>
3. <a href="#Analytics">Analytic breakdowns and summaries across several dimensions</a>
4. <a href="#Scale">Global scale</a>
5. <a href="#Time">Time sensitive</a>
6. <a href="#Central">Central yet distributed planning and approvals</a>
7. <a href="#Security">High Security</a>
8. <a href="#SOC">Round-the-clock SOC using SIEM, IDS, SOAR</a>
9. <a href="#Recovery">Quick and complete recovery from disasters</a>
<br /><br />

Incorporating the above is not just for enterprises, but any organization that wants to be prepared to become massive with fewer issues. Building systems that inherently address the above enterprise concerns would save vendors and implementers the embarrassment of having to add them at the request of end-users. And it's a lot easier to incorporate enterprise features during development rather than as an afterthought.


Let me know your thoughts.

// Wilson Mar
