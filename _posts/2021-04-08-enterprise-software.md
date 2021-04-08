---
layout: post
title: "What is the big deal about Enterprise software?"
excerpt: "There are several (overlapping) ones. Collect them all!"
tags: [security, certs]
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


What is the big deal about "enterprise" software? 

Consultants who work for enterprise software companies can earn more than other  companies which can't afford a higher rate.

The good news today is that enterprise companies use the same core cloud infrastructure (at AWS, Azure, GCP, etc.) as any individual with a laptop. Many   features provided by cloud vendors are available free, albeit for a temporary amount of time. 

Many software companies make the bulk of their profit on additional-charge enterprise level subscriptions. This article focuses on specific examples of those enterprise features.

To successful work at enterprises, it is important for you to speak intelligently about the enterprise-level concerns.


## 1. High Availability and disaster recovery

   Enterprise licensing typically involve providing High Availability (HA) features,  which means running simultaneously in multiple regions. Such operations require real-time coordination of data created across multiple continents. Not a simple feat. And when one region fails, the amount of time that it takes before end-users can continue work on an replacement system is so important that enterprises have a metric for it: MTD (Maximum Tolerable Downtime). Additionally, the RTO (Recovery Time Objective) measures the amount of time before a restore is initiated and data is restored. 

   The maximum amount of data that is allowed to be lost is measured by the RPO (Recovery Point Objective). An organization which takes incremental backups once a day would have an RPO of at least 24 hours since any data processed after the last backup would be lost. The RPO needs to include time to run and verify restores from backups.

## 2. Global scale 

   To reduce RPO for live databases, an enterprise would log-ship every single add or update across the sea to a duplicate hot site ready to take over.

   However, several countries (such as Germany, Singapore, etc.) mandate that it's citizen's data not leave its soverign territory.

   An enterprise that operates only in one country may be satisfied with redundancy from running two or three separate cloud Availability Zones within a single region. This has lower cost because clouds charge for communications between regions. To save even more more, some enterprises contract with "warm" data centers to wait until a disaster to install servers, which would extend time to recovery.

   <a target="_blank" href="https://www.slideshare.net/renatadavidson/d-rvs-bcp-34018845"><img alt="dr-plan-davidson-consulting-638x385.png" width="638" height="385" src="https://user-images.githubusercontent.com/300046/113962529-1aed5b00-97e5-11eb-85c2-3e0b905ec855.png"></a>

   The formation of a CPPT (Continuity Planning Project Team) and setup of a EOC (Emergency Operations Center) are defined by ISO 27001 Section 14, ISO 27002, <a target="_blank" href="http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf">NIST 800-34</a>, NFPA 1600 & 1620, HIPPA. These specify that enterprises have written DRP (Disaster Recovery Procedures) for emergency triage and management of information technology based on normal Business Management Procedures. DRP is the technical extension of longer-term strategic Risk Assessments and Business Continuity Plan (BCP) for the business as a whole -- to ensure immediate survivability.

   Some standards require that redundant capabilities to be tested regularly -- such as every year, when the RTA (Recovery Time Actual) statistic is captured. That's to identify whether the organization takes too long to activate restore or is too clumsy with restore procedures. 

   Systems which are not setup for instant recovery are nevertheless still audited for their ability to "fail safe" to a secure state rather than to a hackable state.

   Quick response requires automation for building and testing. Each server needs to be individually added or removed automatically within a "cluster" for upgrades. That requires IaC (Infrastructure as Code) which defines all the components of compute, storage, and networking in version-controled text files. 

   Such can be difficult within enterprises which have historically operated under "separation of duties" as separate "fiefdoms" of independent departments for compute, storage, networking, etc. which may not regularly collaborate with each other.
   
## 3. Central planning and approvals

   The social skills to handle command-and-control politics is worth top dollar.

   Enterprises require Master Services Agreements (MSA) managed by purchasing departments which operate on their own timelines.
   
   There is also central Security team vetting.

   Nevertheless, enterprise software vendor know that they need to provide free tools and help to poor individuals in order to build a skilled user base.

   Smart enterprise software vendors provide a way for an individual to become licensed off a personal credit card, to get a team going. Supporting off-book "shadow IT" is sometimes necessary to bridge the gap, and enable bottom-up achievement of enterprise objectives. This is especially important if competitors have similar features. Being able to run competing products in parallel in near production mode is often the only effective way to truely differentiate products.

   BTW, this is why it is often counter-productive for vendors to artifically limit evaluation periods to a mere two weeks. Many such vendors are elimited because evaluation periods are usually much longer due to organizational complexities.


## 4. Security features

   When working with cloud vendors, many enterprises prefer to provide customer-owned keys for encryption of data at rest instead of having cloud vendors provide their keys.

   Enterprises require the use of VPN (Virtual Private Network) that create a secure an encrypted tunnel over the public internet.

   Many enterprises specify encryption of all data on hard drives. On Windows, BitLocker is used. On Linux, PGP and TruCrypt are options.

   Enterprise editions of Windows Enterprise enables "DirectConnect" which ensures use of a VPN all the time when away from the office. It also blocks the Microsoft Store app and its installation of apps from that store.

   Some enterprises want Long-Term Servicing Channel (LTSC) where new features are not updated, just security updates.

   The most sophisticated edition of Windows 10 -- Enterprise E5 -- adds Windows Defender ATP (Advanced Threat Protection) which runs virus scans and details the machine's security posture in sophisticated visualizations.

## 5. Round-the-clock SOC using SIEM

   Enterprises have a SOC (Security Operations Center) which operates 24/7.

   Enterprise support typically have SLA (Service Level Agreements) which are quicker (more expensive) than others. Both Azure and AWS refunds 100% of its billing on periods which do not achieve a 95% availability.

   The SOC analyzes logs and metrics collected from all machines into a SIEM (Security Information and Event Management) system such as Splunk, Azure Sentinel, etc. SIEM systems commonly maintains several times more data than the systems themselves. Machine Learning techniques and advanced statistical analysis are becoming common with such systems.

   Logs, especially are also used by external auditors to determine actual compliance with policies. 

## 6. Large number of people and objects

   By definition, enterprises consists of thousands of people and a much more complex set of IT components and databases.

   So enterprises need batch export and import, not just a UI.

   Enterprises need more sophisticated features, such as a search box on every form. It's not enough for vendors to simply provide a "Next" button for users to find a value in a long list. 

   Enterprise need complex queries. For example, Microsoft Azure has KQL (Kusto Query Language) with <a target="_blank" href="https://jmespath.org/tutorial.html">JMESPath</a> to select specific values from within a sea of data.

## 7. Hierarchy of groups

   Tags are useful and flexibile, but may not be sophisticated enough for enterprises.

   Enterprises deal with large amount of data and people by grouping them in various ways, as in an organization chart or vice presidents above directors above managers, etc.

## 8. Breakdowns and summaries over time

   Each level in each hierarchy needs to have its own set of reports and visualizations. Such reporting is needed on daily, weekly, monthly, quarterly, yearly basis as well as custom-defined periods.

   For example, GitHub provides users a rich API to retrieve data set of data from GrapQL APIs. However, enterprise GitHub users need to create their own reports and visualizations.

## 9. Testing automation

   Enterprise developers tend to offer more sophisticated tools for developer productivity even when faced with a massive amount of data and code.

   For example, Microsoft's Visual Studio (not the free Visual Studio Code), but the client IDE, has an <a target="_blank" href="https://visualstudio.microsoft.com/vs/compare/">Enterprise level subscription which provides</a>:

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

   Enterprise DevSecOps tools provide a way to deep-dive.

   * Identify secrets hard-coded (using GitLeaks, etc.)
   * Identify OWASP vulnerabilities in custom code (using Veracode, Fortify, etc.)
   * Identify vulnerabilities iteratively within packages referenced (using XRay, Sonatype, etc.)
