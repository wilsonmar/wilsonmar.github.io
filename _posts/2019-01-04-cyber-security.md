---
layout: post
date: "2023-12-03"
file: "cyber-security"
title: "Cyber Security"
excerpt: "Enterprise data risks and vulnerabilities and how to mitigate them with controls"
tags: [security]
image:
# cyber-security-hero-1900x500-22924.jpb/.png 
  feature: https://user-images.githubusercontent.com/300046/61989997-46bab400-aff5-11e9-9045-8075ede3d5a3.jpg
  credit: Addie Wagenknecht
  creditlink: http://www.placesiveneverbeen.com/details/asymmetric-love
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here are my notes on resources for Cyber Security, which is a vast field. But nevertheless all the info is on this single page to make for easy searching.

> “Security is always excessive until it's not enough.” –-Robbie Sinclair

{% include whatever.html %}

## Glossary

PROTIP: <a target="_blank" href="https://quizlet.com/222277746/devsecops-acronyms-and-buzzwords-flash-cards/">
My Quizlet of Cyber Security Aconyms</a>

   * Guidelines - recommended actions to follow
   * Policies - general statements from management
   * Standards - specific mandatory security controls
   * Procedures - step-by-step instructions
   <br /><br />

PROTIP: Acronyms here are in my <a target="_blank" href="https://quizlet.com/159167491/acronyms-for-secure-iot-flash-cards/">444 item Quizlet flashcards for Cyber Security</a> for you to study more efficient.


<hr />

## Jobs & Occupations

PROTIP: <a target="_blank" href="https://www.sans.org/nice-framework/">SANS created a framework describing skills</a> -- used to identify training and certifications for cybersecurity role.

* <a target="_blank" href="https://www.sans.org/nice-framework/oversee-govern/?msc=nice-page-grid">Oversee and Govern (OV)</a> - Provides leadership, management, direction, or development and advocacy so the organization may effectively conduct cybersecurity work.
* <a target="_blank" href="https://www.sans.org/nice-framework/security-provisionals/?msc=nice-page-grid">Security Provisionals (SP)</a> - (Architectes?) Conceptualizes, designs, procures, and/or builds secure information technology (IT) systems, with responsibility for aspects of system and/or network development.

* <a target="_blank" href="https://www.sans.org/nice-framework/operate-collect/?msc=nice-page-grid">Collect and Operate (CO)</a> - Provides specialized denial and deception operations and collection of cybersecurity information that may be used to develop intelligence.
* <a target="_blank" href="https://www.sans.org/nice-framework/operate-maintain/?msc=nice-page-grid">Operate and Maintain (OM)</a> - Provides the support, administration, and maintenance necessary to ensure effective and efficient information technology (IT) system performance & security.

* <a target="_blank" href="https://www.sans.org/nice-framework/protect-defend/?msc=nice-page-grid">Analyze (AN)</a> - Performs highly-specialized review and evaluation of incoming cybersecurity information to determine its usefulness for intelligence.
* <a target="_blank" href="https://www.sans.org/nice-framework/investigate/?msc=nice-page-grid">Investigate (IN)</a> - Investigates cybersecurity events or crimes related to information technology (IT) systems, network, and digital evidence.
* <a target="_blank" href="https://www.sans.org/nice-framework/protect-defend/?msc=nice-page-grid">Protect and Defend (PR)</a> - Identifies, analyzes, and mitigates <strong>threats</strong> to internal information technology (IT) systems and/or networks.

* <a target="_blank" href="https://www.sans.org/nice-framework/industrial-control-systems/">Industrial Control Systems (ICS)</a> - ICS security is a security framework that protects industrial control systems against accidental or intentional risks safeguards critical infrastructures. 


## Security Architecture leadership

* Security Identities and Access led by a Chief HR/People Officer (CPO) 
* Security Operations (SecOps/SOC) led by a Chief Security Officer (CSO)
* Infrastructure and development Security led by a Chief Information Security Officer (CISO)
* Data Security & Governance led byy a Chief Data Officer (CDO)

* IoT & OT (operational technology) security led by a Chief Information Officer (CIO)
* Spend/Billings led by a Chief Financial Officer (CFO)
<br /><br />


## Security Processes

* Asset management
   * Assets inventory
   * Assets acceptable use and return policies
   * Assets ownership
   * Assets classification
   * Assets labeling Assets handling
   * Media management

* Configuration management
   * NIST SP 800-128
   * Configuration Item
   * Configuration Management Database (DMD
   * Security-focused configuration management (SecCM)

* Mobile device management (MDM)
   * Restrict user application access
   * Limit or prevent access to organization assets
   * Monitor, alert and report on policy violation
   * Encrypt data
   * Remote wipe
   * Remote lock
   * DLP

* Patch management
   * Identify the systems (workflow)
   * Prioritize the systems
   * Evaluate countermeasures
   * Start change process
   * Update configuration records

* Vulnerability management
   1. Identification
   2. Analysis & Prioritization
   3. Remediation

<hr />

## Security Engineer

Here are "Essential Job Functions" based on various job descriptions:

* Apply established and ad hoc processes and techniques to identify, validate, prioritize, and track security risks.
* Identify uncontrolled risks and recommend control improvements.
* Proactively identify security requirement deficiencies.
* Engage business and technology personnel to elicit security requirements.
* Architect and design security control systems to address requirements.
* Operate and monitor established security controls.
* Identify control deficiencies and make appropriate recommendations.
* Ensure that controls are operating effectively; resolve operating discrepancies.
* Review, triage, and prioritize control output.
* Take appropriate action to resolve security discrepancies.
* Identify, evaluate, and recommend new security technologies, techniques, and tools.
* Define, review, and promote information security policies, standards, guidelines, and procedures.

* As <strong>compliance subject matter expert</strong>, enforce and monitor compliance with internal and external regulations, policies, and standards.
* Establish and promote strategies to ensure that compliance is effectively monitored and enforced.
* Lead/Co-lead internal process improvement initiatives.  Provide feedback on processes by offering suggestions.

* Mentor and supervise junior staff in project-level tasks.
* Assist with adherence to technology policies and comply with all security controls.

Education/Experience Requirements:

* Experience must include direct experience in several of the key areas listed: securing networks and systems architecture, design and implementation, secure software assurance, intrusion detection, defense and incident response, security configuration management, access controls design and implementation and security policy and standards development.
* In-depth knowledge of communications protocols (HTTP/HTTPS, SSL/TLS, OAuth, JWT, SAML).
* Experience with Cyber Security tools, including: Configuration Assessment, Log Aggregation, Integrity Verification, Web Application Security Testing, Network Access Control System, Network Intrusion prevention systems, and Endpoint Security Solutions.

* Strong written and verbal technical communication skills.
* Demonstrated ability to develop effective working relationships that improved the quality of work products.
* Should be well organized, thorough, and able to handle competing priorities.
* Ability to maintain focus and develop proficiency in new skills rapidly.
* Ability to work in a fast-paced environment.
* In-depth knowledge of more than one Information Security principle and discipline.
<br /><br />


<hr />

## Zero Trust Security Approach

We adopt a "Zero Trust Architecture" (ZTA) cybersecurity paradigm.

Why? Inadequate access controls can lead to data exfiltration, unauthorized access, lateral movement and/or the introduction of malware into an environment. Consequences of that include damage to brand/reputation, fines, erosion of customer confidence, delays in service delivery due to unplanned downtime, lengthened approval processes and impacts to partner relationships.

So rather than depending solely on using VPNs to access static firewalls to protect all resources within an on-premises network, an end-to-end, "Zero Trust" approach is necessary for operating in public networks.

The term was first popularized by Forrester industry analyst John Kindervag in 2010. In 2020 NIST published <a target="_blank" href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf">50-page PDF: Special Publication SP800-207</a>. It noted that "Industry has not yet coalesced around a single set of terms or concepts to describe ZTA components and operations."

"Zero Trust" means that we "assume breach". So network and access are segregated. Each DAAS (Data, Assets, Applications, Services) resource only interacts with entitites which are authenticated and authorized by dynamic fine-grained "least privilege" policies, on a per-session basis. Both server resources 
and endpoints which request services (user, machine, app, etc.) each must also prove its identity, using mutual TLS (mTLS).

"Zero Trust" needs to be all-encompassing in its vigilance. The current state of assets, network infrastructure, and communications are continuously collected for forensics in case of breach and for analysis to improve the "security posture" of each device, user, and enterprise as a whole.

Because service accounts and authorization are tightly coupled with the application, it often makes sense to set up identities and policies as part of the application infrastructure deployment. Delegating this authority to the development team allows it to iterate quickly on application development (the DevSecOps model).

The Cybersecurity Enhancement Act of 2014 (CEA), aka Public Law No. 113-274, provide a voluntary public-private partnership to improve cybersecurity.



<a name="Threats"></a>

Definitions: REMEMBER:
   * A <a href="#Threats">threat</a> is a potential harmful incident. 
   * A threat agent (a malicious actor) is an individual or group that can manifest a threat.
   * A threat event is a specific instance of a threat

   * A vulnerability is a (potentially exploitable) weakness where there is the absence of a countermeasure in place.
   * An exposure is an instance of being subjected or exposed to losses from a threat.
   * A trigger is an event that indicates that a risk has occurred or is about to occur. 
   * <strong>Enticements</strong> are apparent flaws deliberately made available for penetration and exploitation.

   * <a href="#Attacks">Attacks</a> are attempts to violate an organization’s security or privacy
   * An <strong>exploit</strong> is when a threat agent successfully takes advantage of a vulnerability
   * Likelihood (of occurrence) is a weighted factor that a given threat agent is capable of exploiting a given vulnerability
   * Level of risk before treatment is the <strong>inherent risk</strong>
   * A <strong>breach</strong> is an attack that has been successful in reaching its goal.    
   * Impact is the magnitude of harm caused by a threat source
   <br /><br />

## Quantitative risk analysis: 

REMEMBER:<a target="_blank" href="https://www.youtube.com/watch?v=mpSdrr7QzZE">VIDEO</a>:

Asset Value (AV) x Exposure Factor (EF) = Single Loss Expectancy (SLE).

Annualized Rate of Occurrence (ARO) X Single Loss Expectancy (SLE) = Annual Loss Expectancy (ALE).

Cost/benefit of implementing a particular safeguard, where<br />
ALE is the annual loss expectancy = 
(ALE before safeguard) – (ALE after safeguard) – (annual cost of safeguard)

<strong>Residual risk</strong> = total risk – countermeasures.

Impact from loss of confidentiality:
   * Fines and criminal lawsuits based on information protected by privacy laws
   * Civil suits against the enterprise
   * Loss of public confidence (brand value)
   * Loss of competitive advantage
   * Interference with national security
   <br /><br />

<a name="CIA">CIA</a> triad tenents: +IAAA
   * Confidentiality vs. Disclosure (IPSec encryption in transit, <a href="#SocialEngineering">social engineering</a>)
   * Integrity vs. Alteration (shared among authorized persons or organizations)
   * Availability vs. Destruction (RAID-5, DDoS)
   <br /><br />

   * Accountability (auditing)

### Confidentiality 

Elements of Confidentiality:
   * Sensitivity
   * Discretion
   * Criticality
   * Concealment

   * Secrecy
   * Privacy
   * Seclusion
   * Isolation
   <br /><br />

Privacy Threshold Assessment is used to identify PII and determine how to treat the data.

OCTAVE (Operationally Critical Threat, Asset, and Vulnerability Evaluation) developed at Carnegie Mellon SEI.

Cloud Security Posture Management (CSPM) monitors continuously identifies and remediaties cloud infrastructure risks in each cloud service using application programming interfaces (APIs) configuration data against compliance benchmarks. For example, they can ensure logs are being gathered from host operating systems and the network (NetFlow), and that API event logging is turned on. 

The newer acronym CIEM (Cloud Infrastructure Entitlements Management) was coined by <a target="_blank" href="https://ermetic.com/">ermetic.com</a> for their product which ensures that identities (both human and machine)  do not have excessive permissions that can be exploited by threat actors or malicious insiders.

   1. Identify risk
   2. Factors for estimating likelihood
   3. Factors for estimating impact
   4. Determine Severity for risk
   5. Deciding what do fix
   <br /><br />


### Zero-Trust Jericho Commandments

<a target="_blank" href="https://collaboration.opengroup.org/jericho/commandments_v1.2.pdf">
https://collaboration.opengroup.org/jericho/commandments_v1.2.pdf</a> 
define the 11 areas and principles that must be observed when planning for a 
de-perimeterized future in cloud environments. 


## Vendor Compliance

<a target="_blank" href="https://aws.amazon.com/compliance/">aws.Amazon.com/Compliance</a>
<a target="_blank" href="https://aws.amazon.com/compliance/programs/">/Programs</a> covers security requirements in Canada, Asia Pacific, and Europe.
<a target="_blank" href="https://user-images.githubusercontent.com/300046/56856297-c8c31000-6914-11e9-874e-c0417d380dfd.png"><img width="926" alt="aws-compliance" src="https://user-images.githubusercontent.com/300046/56856297-c8c31000-6914-11e9-874e-c0417d380dfd.png"></a>

<a target="_blank" href="https://www.hashicorp.com/blog/hashicorp-achieves-soc-2-type-i-compliance">Type I compliance</a>.


<a name="MCRA"></a>

## Microsoft Cybersecurity Reference Architecture

<a target="_blank" href="https://www.youtube.com/watch?v=emdGpNwfWHY">VIDEO Distilling</a>
<a target="_blank" href="https://aka.ms/MCRA/">Infographic in PowerPoint: Microsoft Azure Cybersecurity Reference Architecture</a>
<a target="_blank" href="https://www.youtube.com/watch?v=6iYxNm3TOiI">VIDEO</a> MCRA video by Mark Simos

### Jobs to be done

From <a target="_blank" href="https://aka.ms/SecurityRoles/">https://aka.ms/SecurityRoles</a>:<br />
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1686006843/securityroles-1280x720_hy4ydf.png"><img alt="securityroles-1280x720.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1686006843/securityroles-1280x720_hy4ydf.png"></a>

<a target="_blank" href="https://learn.microsoft.com/en-us/security/cybersecurity-reference-architecture/mcra">Microsoft's Cybersecurity Reference Architecture (MCRA)</a> is a technology agnostic framework that provides a blueprint for implementing a comprehensive, end-to-end cybersecurity solution. It is a companion to the <a target="_blank" href="https://www.microsoft.com/en-us/download/details.aspx?id=55319">Microsoft Cloud Adoption Framework for Azure</a> and the <a target="_blank" href="https://www.microsoft.com/en-us/download/details.aspx?id=55325">Microsoft Azure Well-Architected Framework</a>. 

Microsoft’s cybersecurity capabilities and technologies are described in<br />
<a target="_blank" href="https://docs.microsoft.com/en-us/security/">Microsoft Security Documentation</a> site and<br />
<a target="_blank" href="https://learn.microsoft.com/en-us/security/ciso-workshop/adoption">Microsoft's Security Adoption Framework (SAF)</a>
(<a target="_blank" href="https://github.com/MicrosoftDocs/security/blob/main/Downloads/mcra-december-2023.pptx?raw=true">mcra-december-2023.pptx</a>)


<hr />

## Adobe Common Control Framework

Adobe <a target="_blank" href="https://adobe.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=VM6HD7">open-sourced</a> its own comprehensive <a target="_blank" href="https://www.adobe.com/trust/compliance/adobe-ccf.html">Common Control Framework</a>. 

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1686682411/cybersecurity-adobe-891x359_xoqqis.png"><img alt="" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1686682411/cybersecurity-adobe-891x359_xoqqis.png"></a>

Like the <a target="_blank" href="https://wilsonmar.github.io/caiq">CAIQ</a>, it aggregates questions and answers for several audit requirements: <a href="#iso27002">ISO 27001/27002</a>, SOC, FedRAMP, PCI DSS, GLBA, FERPA, etc. <a target="_blank" href="https://www.adobe.com/security/compliance/ccf-download.html">Download</a> the <a target="_blank" href="https://www.adobe.com/pdf/Open_Source_CCF.pdf">pdf</a>.

   1. Asset management
   2. Business Continuity
   3. Backup Management
   4. Configuration Management
   5. Change Management
   6. Data Management
   7. Identity and Acccess Management
   8. Incident Response
   9. Mobile Device Management
   10. Network Operations
   11. People Resources
   12. Risk Management
   13. System Design Documentation
   14. Security Governance
   15. Service Lifecycle
   16. Systems Monitoring
   17. Site Operations
   18. Training and Awareness
   19. Third Party Management
   20. Vulnerability Management
   <br /><br />

<hr />

<a name="CRR"></a>

## CRR (Cyber Resilience Review)

The CRR is a lightweight assessment method created by the U.S. Department of Homeland Security (DHS) for evaluating the cybersecurity and service continuity practices of critical infrastructure owners and operators in cybersecurity, operations, physical security, and business continuity. It's also used by the governments of Japan, Israel, and Italy, among others.

The CRR assessment consists of 299 questions over 10 domains, typically delivered in a 12 - 16 hour workshop led by a qualified facilitator over two consecutive days. <a target="_blank" href="https://www.certifiedinfosec.com/event-calendar/find-events/iso-27001-information-security/584-certified-nist-cybersecurity-framework-li-training-plus-nist-csf-cyber-resilience-review-assessment-hands-on-workshop-live-in-atlanta-11">This workshop</a> yields a 176-page analysis and report.

<a target="_blank" href="https://www.youtube.com/watch?v=7H5uSOm55Lw" title="at the RSA Conf 2023">CSF v2.0 intro</a> for release Winter 2024.


<a name="HITRUST"></a>

## HITRUST Common Security Framework

<a target="_blank" href="https://hitrustalliance.net/understanding-leveraging-csf/">HITRUST Common Security Framework</a> includes, harmonizes, and cross-references existing, globally recognized standards, regulations, and business requirements, including ISO, EU GDPR, <a href="#NIST">NIST</a>, and PCI.

It's a part of the 2009 ARRA (American Recovery and Reinvestment Act).

Through a validated assessment performed by the <a href="#HITRUST">Health Information Trust Alliance (HITRUST)</a>, a leading security and privacy standards development and accreditation organization, Office 365 is certified to the objectives specified in the <a href="#NIST">NIST</a> <a href="#CSF">CSF</a>.


<hr />

<a name="iso22301"></a>

## ISO 22301

Business Continuity


<a name="iso27002"></a>

## ISO 27002

<a target="_blank" href="https://iso27001security.com/">https://iso27001security.com</a><br />
ISO Code of practice for information security controls defines 114 controls grouped into 14 categories. REMEMBER:

   * ISO/IEC 27002 Controls (Counter-measures) of ISMS (Information Security Management System) lists:

   * ISO/IEC 27005 addresses risk management
   * ISO/IEC 27007 addresses <strong>auditing</strong> [as in James Bond]
   * ISO/IEC 27012 addresses controls (counter-measures)
   * ISO/IEC 27033 addresses network security
   * ISO/IEC 27034 addresses application security
   * ISO/IEC 27037 addresses digital evidence guidelines

   * ISO/IEC 27011 addresses telecommunications organization guidelines
   * ISO/IEC 27015 addresses financial organization guidelines
   * ISO/IEC 27799 addresses health organization guidelines
   <br /><br />

## ISO/IEC 15288:2015  

Four categories of processes:

   1. <strong>Agreement</strong> processes, including acquisition and supply
   2. <strong>Organizational project-enabling</strong> processes, including infrastructure management, quality management, and knowledge management
   3. <strong>Technical management</strong> processes, including project planning, risk management, configuration management, and quality assurance
   4. <strong>Technical</strong> processes, including system requirements definition, system analysis, implementation, integration, operation, maintenance, and disposal
   <br /><br />

<a name="CIS"></a>

## Center for Internet Security (CIS)

"The Center for Internet Security (CIS) is a community of users, vendors and subject matter experts working together through consensus collaboration to deliver a framework that provides a starting point for organizations interested in implementing ...

1. CIS creates hardened versions of images running on various clouds:

   <a target="_blank" href="https://www.cisecurity.org/benchmark/amazon_web_services/">https://www.cisecurity.org/benchmark/amazon_web_services/</a>

   <a target="_blank" href="https://www.cisecurity.org/blog/cis-hardened-images-now-in-microsoft-azure-marketplace/">https://www.cisecurity.org/blog/cis-hardened-images-now-in-microsoft-azure-marketplace/</a>

1. Download the CIS Controls poster (CIS-Controls-V7-Poster.pdf) from:

   <a target="_blank" href="https://www.cisecurity.org/white-papers/cis-controls-v7-poster/">https://www.cisecurity.org/white-papers/cis-controls-v7-poster</a>

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/70711044-c5ab4300-1c9d-11ea-895c-de0987e933a7.png"><img alt="cybersecurity-CIS-Center-for-Internet-Security-CIS-Controls.png" src="https://user-images.githubusercontent.com/300046/70711044-c5ab4300-1c9d-11ea-895c-de0987e933a7.png"></a>

1. Download CIS Benchmark pdf files for each product (Amazon Linux, MongoDB, etc.) from:

   <a target="_blank" href="https://www.cisecurity.org/cis-benchmarks/">
   https://www.cisecurity.org/cis-benchmarks</a>

   PROTIP: View the "Distribution Independent Linux Benchmark" first
   because Benchmarks specific to a Linux distribution repeat much of its contents.

1. Download and review "Measures and Metrics" pdf and excel:

   https://www.cisecurity.org/white-papers/cis-controls-v7-measures-metrics/

### CIS Security Benchmarks for Linux 

These are common asset items to be protected, 
as addressed by CIS Benchmarks across several Linux distributions:

1. Initial setup
   1.1. Filesystem Configuration
   1.2. Configure Software Updates
   1.3. Filesystem Integrity Checking
   1.4. Secure Boot Settings
   1.5. Additional Processing Hardening
   1.6. Mandatory Access Control
   1.7. Warning Banners

2. Services
   2.1. inetd Services
   2.2. Special Purpose Services
   2.3. Service Clients

3. Network Configuration
   3.1. Network Parameters (Host Only)
   3.2. Network Parametres (Host and Router)
   3.3. IPv6
   3.4. TCP Wrappers
   3.5. Uncommon Network Protocols
   3.6. Firewall Configuration

4. Logging and Auditing [<a target="_blank" href="https://www.youtube.com/watch?v=cwcARccyWyY&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=20">MINDMAP</a>]
   4.1. Configure System Accounting (auditd)
   4.2. Configure Logging

5. Access, Authentication, and Authorization
   5.1. Configure cron
   5.2. SSH Server Configuration
   5.3. Configure PAM
   5.4. User Accounts and Environment

6. System Maintenance
   6.1. System File Permissions
   6.2. User and Group Settings

Under each sub-item above are specific recommendations with <strong>Bash script commands</strong> to implement them out and commands to <strong>audit</strong> whether they have been implemented. That code is incorporated in the <a href="#CIS-CAT">"CIS-CAT Lite (CIS Configuration Assessment Tool)" below</a>.

Items in the Benchmark described as <strong>(Scored)</strong> indicates when compliance with the given recommendation impacts the assessed target's benchmark score. Failure to comply with "Scored" recommendations will decrease the final benchmark score. Compliance with "Scored" recommendations will increase the final benchmark score. Compliance on "(Unscored)" items make no difference to the total score.

Compliance scores go to 100.

"CIS Controls Measures and Metrics for Version 7" Excel spreadsheet (file CIS-Controls-Version-7-cc.xlsx) contains 170 sub-controls applicable to these <strong>20 controls</strong> ("best practices") described by the CIS Controls Companion Guide:

file CIS-Controls-Version-7-cc.pdf
from <a target="_blank" href="https://learn.cisecurity.org/20-controls-download">https://learn.cisecurity.org/20-controls-download</a>

#### &nbsp; &nbsp; &nbsp; Basic:

1. Inventory and Control of Hardware Assets
2. Inventory and Control of Software Assets
3. Continuous Vulnerability Management
4. Controlled Use of Administrative Privileges
5. Secure Configuration for Hardware and Software on Mobile Devices, Laptops, Workstations and Servers
6. Maintenance, Monitoring and Analysis of Audit Logs

   #### Foundational:

7. Email and Web Browser Protections
8. Malware Defenses
9. Limitation and Control of Network Ports, Protocols and Services
10. Data Recovery Capabilities
11. Secure Configuration for Network Devices, such as Firewalls, Routers and Switches
12. Boundary Defense
13. Data Protection
14. Controlled Access Based on the Need to Know
15. Wireless Access Control
16. Account Monitoring and Control

    #### Organizational:

17. Implement a Security Awareness and Training Program
18. Application Software Security
19. Incident Response and Management
20. Penetration Tests and Red Team Exercises


The AWS (Amazon Web Services) Well Architected Framework books cover many of the above, but at a rather high-level.

Below is an approach that can be used for Gap Analysis of what needs to be done to protect hardware, software, and data assets.

### CIS Sub-Controls alphabetically by Sensor

<strong>A. Active Device Discovery System</strong>

   * 1.1	Utilize an Active Discovery Tool

<strong>B. Anti-Spam Gateway</strong>

   * 7.8	Implement DMARC and Enable Receiver-Side Verification
   * 7.9	Block Unnecessary File Types
   * 7.10	Sandbox All Email Attachments

<strong>C. Application Aware Firewall</strong>

   * 9.5	Implement Application Firewalls

<strong>D. Asset Inventory System</strong>

   * 1.4	Maintain Detailed Asset Inventory
   * 1.5	Maintain Asset Inventory Information
   * 1.6	Address Unauthorized Assets

<strong>E. Backup / Recovery System</strong>

   * 10.1	Ensure Regular Automated Back Ups
   * 10.2	Perform Complete System Backups
   * 10.3	Test Data on Backup Media
   * 10.4	Ensure Protection of Backups
   * 10.5	Ensure Backups Have At least One Non-Continuously Addressable Destination

<strong>F. Data Inventory / Classification System</strong>

   * 13.1	Maintain an Inventory Sensitive Information
   * 13.2	Remove Sensitive Data or Systems Not Regularly Accessed by Organization
   * 14.5	Utilize an Active Discovery Tool to Identify Sensitive Data

<strong>G. Dedicated Administration Systems</strong>

   * 4.6	Use of Dedicated Machines For All Administrative Tasks
   * 11.6	Use Dedicated Machines For All Network Administrative Tasks
   * 11.7	Manage Network Infrastructure Through a Dedicated Network

<strong>H. DNS Domain Filtering System</strong>

   * 7.6	Log all URL requests
   * 7.7	Use of DNS Filtering Services
   * 8.7	Enable DNS Query Logging

<strong>I. Endpoint Protection System</strong>

   * 8.1	Utilize Centrally Managed Anti-malware Software
   * 8.2	Ensure Anti-Malware Software and Signatures are Updated
   * 8.4	Configure Anti-Malware Scanning of Removable Devices
   * 8.6	Centralize Anti-malware Logging
   * 13.7	Manage USB Devices
   * 13.8	Manage System's External Removable Media's Read/write Configurations
   * 13.9	Encrypt Data on USB Storage Devices

<strong>J. Host Based Data Loss Prevention (DLP) System</strong>

   * 14.7	Enforce Access Control to Data through Automated Tools
   * 14.8	Encrypt Sensitive Information at Rest

   Egress monitoring occurs when an organization monitors the outbound flow of information from one network to another. The most popular form of egress monitoring is carried out using firewalls that monitor and control outbound traffic. Continuous monitoring and Continuous Monitoring as a Service (CMaaS) are not specific enough to answer this question. Any logging and monitoring activities should be part of an organizational continuous monitoring program. The continuous monitoring program must be designed to meet the needs of the organization and implemented correctly to ensure that the organization’s critical infrastructure is guarded. Organizations may want to look into CMaaS solutions deployed by cloud service providers. 

<strong>K. Host Based Firewall</strong>

   * 9.4	Apply Host-based Firewalls or Port Filtering

<strong>L. Identity & Access Management System</strong>

   * 16.1	Maintain an Inventory of Authentication Systems
   * 16.2	Configure Centralized Point of Authentication
   * 16.4	Encrypt or Hash all Authentication Credentials
   * 16.5	Encrypt Transmittal of Username and Authentication Credentials
   * 16.6	Maintain an Inventory of Accounts
   * 16.7	Establish Process for Revoking Access
   * 16.8	Disable Any Unassociated Accounts
   * 16.9	Disable Dormant Accounts
   * 16.10	Ensure All Accounts Have An Expiration Date
   * 16.11	Lock Workstation Sessions After Inactivity

<strong>M. Incident Management Plans</strong>

   * 19.1	Document Incident Response Procedures
   * 19.2	Assign Job Titles and Duties for Incident Response
   * 19.3	Designate Management Personnel to Support Incident Handling
   * 19.4	Devise Organization-wide Standards for Reporting Incidents
   * 19.5	Maintain Contact Information For Reporting Security Incidents
   * 19.6	Publish Information Regarding Reporting Computer Anomalies and Incidents
   * 19.7	Conduct Periodic Incident Scenario Sessions for Personnel
   * 19.8	Create Incident Scoring and Prioritization Schema

<strong>N. Log Management System / SIEM</strong>

   * 1.3	Use DHCP Logging to Update Asset Inventory
   * 4.8	Log and Alert on Changes to Administrative Group Membership
   * 4.9	Log and Alert on Unsuccessful Administrative Account Login
   * 6.2	Activate audit logging
   * 6.3	Enable Detailed Logging
   * 6.4	Ensure adequate storage for logs
   * 6.5	Central Log Management
   * 6.6	Deploy SIEM or Log Analytic tool
   * 6.7	Regularly Review Logs
   * 6.8	Regularly Tune SIEM
   * 8.8	Enable Command-line Audit Logging
   * 14.9	Enforce Detail Logging for Access or Changes to Sensitive Data
   * 16.12	Monitor Attempts to Access Deactivated Accounts
   * 16.13	Alert on Account Login Behavior Deviation

<strong>O. Multi-Factor Authentication System</strong>

   * 4.5	Use Multifactor Authentication For All Administrative Access
   * 11.5	Manage Network Devices Using Multi-Factor Authentication and Encrypted Sessions
   * 12.11	Require All Remote Login to Use Multi-factor Authentication
   * 16.3	Require Multi-factor Authentication

<strong>P. Network Based Data Loss Prevention (DLP) System</strong>

   * 13.3	Monitor and Block Unauthorized Network Traffic
   * 13.5	Monitor and Detect Any Unauthorized Use of Encryption

<strong>Q. Network Based Intrusion Detection System (NIDS)</strong>

   * 12.6	Deploy Network-based IDS Sensor

<strong>R. Network Based Intrusion Prevention System (IPS)</strong>

   * 12.7	Deploy Network-Based Intrusion Prevention Systems

<strong>S. Network Device Management System</strong>

   * 11.1	Maintain Standard Security Configurations for Network Devices
   * 11.2	Document Traffic Configuration Rules
   * 11.3	Use Automated Tools to Verify Standard Device Configurations and Detect Changes
   * 11.4	Install the Latest Stable Version of Any Security-related Updates on All Network Devices
   * 12.8	Deploy NetFlow Collection on Networking Boundary Devices
   * 15.1	Maintain an Inventory of Authorized Wireless Access Points
   * 15.7	Leverage the Advanced Encryption Standard (AES) to Encrypt Wireless Data
   * 15.8	Use Wireless Authentication Protocols that Require Mutual, Multi-Factor Authentication
   * 15.10	Create Separate Wireless Network for Personal and Untrusted Devices

<strong>T. Network Firewall / Access Control System</strong>

   * 2.10	Physically or Logically Segregate High Risk Applications
   * 12.1	Maintain an Inventory of Network Boundaries
   * 12.3	Deny Communications with Known Malicious IP Addresses
   * 12.4	Deny Communication over Unauthorized Ports
   * 12.9	Deploy Application Layer Filtering Proxy Server
   * 12.10	Decrypt Network Traffic at Proxy
   * 13.4	Only Allow Access to Authorized Cloud Storage or Email Providers
   * 14.1	Segment the Network Based on Sensitivity
   * 14.2	Enable Firewall Filtering Between VLANs
   * 14.3	Disable Workstation to Workstation Communication

<strong>U. Network Level Authentication (NLA)</strong>

   * 1.7	Deploy Port Level Access Control

<strong>V. Network Packet Capture System</strong>

   * 12.5	Configure Monitoring Systems to Record Network Packets

<strong>W. Network Time Protocol (NTP) Systems</strong>

   * 6.1	Utilize Three Synchronized Time Sources

<strong>X. Network URL Filtering System</strong>

   * 7.4	Maintain and Enforce Network-Based URL Filters
   * 7.5	Subscribe to URL-Categorization service

<strong>Y. Passive Device Discovery System</strong>

   * 1.2	Use a Passive Asset Discovery Tool

<strong>Z. Patch Management System</strong>

   * 3.4	Deploy Automated Operating System Patch Management Tools
   * 3.5	Deploy Automated Software Patch Management Tools

<strong>AA. Penetration Testing Plans</strong>

   * 20.1	Establish a Penetration Testing Program
   * 20.2	Conduct Regular External and Internal Penetration Tests
   * 20.3	Perform Periodic Red Team Exercises
   * 20.4	Include Tests for Presence of Unprotected System Information and Artifacts
   * 20.5	Create Test Bed for Elements Not Typically Tested in Production
   * 20.6	Use Vulnerability Scanning and Penetration Testing Tools in Concert
   * 20.7	Ensure Results from Penetration Test are Documented Using Open, Machine-readable Standards
   * 20.8	Control and Monitor Accounts Associated with Penetration Testing

<strong>AB. Privileged Account Management System</strong>

   * 4.1	Maintain Inventory of Administrative Accounts
   * 4.2	Change Default Passwords
   * 4.3	Ensure the Use of Dedicated Administrative Accounts
   * 4.4	Use Unique Passwords

<strong>AC. Public Key Infrastructure (PKI)</strong>

   * 1.8	Utilize Client Certificates to Authenticate Hardware Assets

<strong>AD. SCAP Based Vulnerability Management System</strong>

   * 3.1	Run Automated Vulnerability Scanning Tools
   * 3.2	Perform Authenticated Vulnerability Scanning
   * 3.3	Protect Dedicated Assessment Accounts
   * 3.6	Compare Back-to-back Vulnerability Scans
   * 3.7	Utilize a Risk-rating Process
   * 5.5	Implement Automated Configuration Monitoring Systems
   * 9.1	Associate Active Ports, Services and Protocols to Asset Inventory
   * 9.2	Ensure Only Approved Ports, Protocols and Services Are Running
   * 9.3	Perform Regular Automated Port Scans

<strong>AE. Secure Coding Standards</strong>

   * 18.1	Establish Secure Coding Practices
   * 18.2	Ensure Explicit Error Checking is Performed for All In-house Developed Software
   * 18.3	Verify That Acquired Software is Still Supported
   * 18.4	Only Use Up-to-date And Trusted Third-Party Components
   * 18.5	Use Only Standardized and Extensively Reviewed Encryption Algorithms
   * 18.9	Separate Production and Non-Production Systems

<a target="_blank" href="https://www.coursera.org/specializations/secure-coding-practices?">
Secure Coding Practices Specialization"</a> consists of 4 courses on Coursera:

by Matthew Bishop, PhD at UCDavis
<a target="_blank" href="https://www.coursera.org/specializations/secure-coding-practices?">

  
<strong>AF. Software Application Inventory</strong>

   * 2.1	Maintain Inventory of Authorized Software
   * 2.2	Ensure Software is Supported by Vendor
   * 2.3	Utilize Software Inventory Tools
   * 2.4	Track Software Inventory Information
   * 2.5	Integrate Software and Hardware Asset Inventories
   * 2.6	Address unapproved software

<strong>AG. Software Vulnerability Scanning Tool</strong>

   * 18.7	Apply Static and Dynamic Code Analysis Tools: SonarQube, Fortify, .NET, SpotBugs, IBM AppScan, Breakman
   * 18.8	Establish a Process to Accept and Address Reports of Software Vulnerabilities

<strong>AH. Software Whitelisting System</strong>

   * 2.7	Utilize Application Whitelisting
   * 2.8	Implement Application Whitelisting of Libraries
   * 2.9	Implement Application Whitelisting of Scripts
   * 4.7	Limit Access to Script Tools
   * 7.1	Ensure Use of Only Fully Supported Browsers and Email Clients
   * 7.2	Disable Unnecessary or Unauthorized Browser or Email Client Plugins

<strong>AI. System Configuration Baselines & Images</strong>

   * Baselines are used assess the security state 
   * Procedures provide all the detailed actions that personnel are required to follow. 
   * Standards provide the steps necessary to achieve security. 
   * Guidelines provide recommended actions to carry out under certain conditions.
   * Initiation is not a component of configuration management!
   <br /><br />

   * 5.1	Establish Secure Configurations
   * 5.2	Maintain Secure Images
   * 5.3	Securely Store Master Images

<strong>AJ. System Configuration Enforcement System</strong>

   * 5.4	Deploy System Configuration Management Tools
   * 7.3	Limit Use of Scripting Languages in Web Browsers and Email Clients
   * 8.3	Enable Operating System Anti-Exploitation Features/ Deploy Anti-Exploit Technologies
   * 8.5	Configure Devices Not To Auto-run Content
   * 12.2	Scan for Unauthorized Connections across Trusted Network Boundaries
   * 12.12	Manage All Devices Remotely Logging into Internal Network
   * 14.4	Encrypt All Sensitive Information in Transit
   * 14.6	Protect Information through  Access Control Lists
   * 15.2	Detect Wireless Access Points Connected to the Wired Network
   * 15.4	Disable Wireless Access on Devices if Not Required
   * 15.5	Limit Wireless Access on Client Devices
   * 15.6	Disable Peer-to-peer Wireless Network Capabilities on Wireless Clients
   * 15.9	Disable Wireless Peripheral Access of Devices
   * 18.11 Use Standard Hardening Configuration Templates for Databases

<strong>AK. Training / Awareness Education Plans</strong>

   * 17.1	Perform a Skills Gap Analysis
   * 17.2	Deliver Training to Fill the Skills Gap
   * 17.3	Implement a Security Awareness Program
   * 17.4	Update Awareness Content Frequently
   * 17.5	Train Workforce on Secure Authentication
   * 17.6	Train Workforce on Identifying <a href="#SocialEngineering">social engineering</a> Attacks
   * 17.7	Train Workforce on Sensitive Data Handling
   * 17.8	Train Workforce on Causes of Unintentional Data Exposure
   * 17.9	Train Workforce Members on Identifying and Reporting Incidents
   * 18.6	Ensure Software Development Personnel are Trained in Secure Coding

<strong>AL. Web Application Firewall (WAF)</strong>

   * 18.10	Deploy Web Application Firewalls (WAFs)

<strong>AM. Whole Disk Encryption System</strong>

   * 13.6	Encrypt the Hard Drive of All Mobile Devices.

<strong>AN. Wireless Intrusion Detection System (WIDS)</strong>

   * 15.3	Use a Wireless Intrusion Detection System


CIS states the status of the above Control Measures as the <strong>percentage</strong> among all the organization's assets. But CIS doesn't weight some parts of the organization more over others.

CIS borrows from Statistics for the area under the curve at integer levels of Standard Deviation (called a Sigma). CIS scores are named "Sigma Level One" to "Sigma Level Six", with One at 69% or Less	31% or Less	6.7% or Less	0.62% or Less	0.023% or Less	0.00034% or Less

PROTIP: Also identify and <strong>count the base of consideration</strong> whether controls are applicable. A control may not be applicable to every item or organizational role assessed. Such are a separate set of calculation not addressed by CIS but need to be considered nonetheless to measure progress toward assessment completion.

The above form the basis for <strong>Security Implementation Plans</strong> provided by services vendors such as 
<a target="_blank" href="https://www.guidepointsecurity.com/pro_services/cloud-security/">GuidePoint</a>.
Such plans sequence work so that technical and organizational dependencies among tasks are achieved in the appropriate order.

<a name="CIS-CAT"></a>

### CIS Lite

1. Make a full backup of your machine before starting this procedure.
1. Request an email to download the free <a target="_blank" href="https://learn.cisecurity.org/cis-cat-lite">"CIS-CAT Lite (CIS Configuration Assessment Tool)" at https://learn.cisecurity.org/cis-cat-lite</a> (file CIS-CAT Lite v3.0.56.zip).

   "CIS-CAT Lite provides a fast, detailed assessment of your system’s conformance with CIS Benchmarks for Windows 10, Mac OS, Ubuntu, and Google Chrome. Simply run the tool,receive a compliance score (1 - 100) and quickly view remediation steps for non-compliant settings."

1. Expand downloaded file "CIS-CAT Lite v3.0.56.zip" to folder cis-cat-lite.

1. Read the <strong>CIS-CAT Users Guide.pdf</strong> (104 pages).
1. Install a JVM because the CISCAT.jar is Java-based.
1. Move the folder under "temp" or other folder of your choice. Change to that directory.
1. On a Mac, open a Terminal and run CIS-CAT.sh

   <pre><strong>chmod CIS-CAT.sh
   ./CIS-CAT.sh
   </strong></pre>

   Alternately, run CIS-CAT.BAT on Windows machines. 

1. Click "Accept" to the pop-up GUI.
1. Click "Benchmark" to select from the pull-down.

   There is also the LiteCIS-CAT Pro (for <a target="_blank" href="https://www.cisecurity.org/cis-securesuite/">paid members</a>) which covers CLI as well and provides more Benchmark items to scan (for a price).

1. Select "CIS_Apple_OSX_10.12_Benchmark" even if you have a more recent version.

   View the misc folder benchmarks.txt to see this list:

   * /benchmarks/CIS_Apple_OSX_10.12_Benchmark_v1.0.0.xml
   * /benchmarks/CIS_Google_Chrome_Benchmark_v1.3.0-xccdf.xml
   * /benchmarks/CIS_Microsoft_Windows_10_Enterprise_Release_1803_Benchmark_v1.5.0-xccdf.xml
   * /benchmarks/CIS_Ubuntu_Linux_18.04_LTS_Benchmark_v1.0.0-xccdf.xml
   <br /><br />

1. Click "Next".
1. Selet Profile Level 1.
1. Notice that the report goes to your user home folder, not your present Working Directory containing the program.
1. Click "Next" then "Start Assessment", and watch the progress scroll by.
1. Click "View Reports".
1. Exit the program.
1. Click on the Benchmark link associated with a number in the "Fail" column.
1. Assess each Fail.
<br /><br />

Some people prefer to hold off on automatic updates until hearing if early adopters experienced problems. The risk is fending off "zero day" security issues.

#### 2.2.2 Ensure time set is within appropriate limits

The default NTP server is `time.apple.com`.   

   sudo ntpdate -sv time.apple.com

However, the ntpdate tool was removed in macOS Mojave 10.14 because the `ntpd daemon` since  Mavericks (10.9) and Yosemite (10.10) is no longer responsible for adjusting the time. and instead a new program pacemaker has been introduced — so how can I know things are working or need adjustment to keep time?

   sudo sntp -sS pool.ntp.org

See https://apple.stackexchange.com/questions/117864/how-can-i-tell-if-my-mac-is-keeping-the-clock-updated-properly

#### 2.4.3 Disable Screen Sharing

CIT Fails thinking that Screen Sharing is enabled. But in System Preferences, Sharing,
only Printer sharing is selected.

#### 3.1.1 Retain system.log for 90 or more days

Edit `/etc/asl.conf` to change from

<pre>> system.log mode=0640 format=bsd rotate=seq compress file_max=5M all_max=50M</pre>
to
<pre>> system.log mode=0640 format=bsd rotate=utc compress file_max=5M ttl=90</pre>

Add for 3.1.2 Retain appfirewall.log for 90 or more days

<pre>> appfirewall.log mode=0640 format=bsd rotate=utc compress file_max=5M ttl=90</pre>

#### 3.1.3 Retain authd.log for 90 or more days

<pre>sudo vim /etc/asl/com.apple.authd
</pre>

Replace or edit the current setting 
<pre>* file /var/log/authd.log mode=0640 compress format=bsd rotate=seq file_max=5M all_max=20M</pre>
with a compliant setting:
<pre>* file /var/log/authd.log mode=0640 format=bsd rotate=utc compress file_max=5M ttl=90</pre>

#### 3.2 Enable security auditing

Run:
<pre>sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.auditd.plist</pre>
RESPONSE: /System/Library/LaunchDaemons/com.apple.auditd.plist: service already loaded

#### 3.5 Retain install.log for 365 or more days

<pre>subl /etc/asl/com.apple.install</pre>

Replace:
<pre>* file /var/log/install.log format='$((Time)(JZ)) $Host $(Sender)[$(PID)]: $Message'</pre>
with<br />
<pre>* file /var/log/install.log mode=0640 format=bsd rotate=utc compress file_max=5M ttl=365</pre>

#### 5.1.1 Secure Home Folders

Run one of the following commands in Terminal, substituting user name:

<pre>sudo chmod -R og-rwx /Users/<em>username</em>
sudo chmod -R og-rw /Users/<em>username</em>
</pre>

RESPONSE:
chmod: Unable to change file mode on /Users/wilsonmar/projects/WM/bin/jad.readme.txt: Operation not permitted

<hr />

Security Information and Event Management (SIEM) tools help analysts better understand security threats, risks, and vulnerabilities. 
When security analysts need to review vulnerabilities, they conduct a <strong>periodic security audit</strong>, which reviews an organization’s records, activities, and related documents. 


<a name="ChangeMgmt"></a>

## Change management

<a target="_blank" href="https://www.youtube.com/watch?v=LGqZbiitiDw">VIDEO</a>: REMEMBER memonic: Ricard Rarely Approves The Scheduled Deployment

1. Request the change
2. Review the change
3. Approve/reject the change
4. Test the change
5. Schedule and implement the change
6. Document the change


## Docker CIS

https://github.com/dev-sec/cis-docker-benchmark

There is also a Docker CAT:
https://www.cisecurity.org/benchmark/docker/

https://github.com/docker/docker-bench-security
The Docker Bench for Security is a script that checks for dozens of common best-practices around deploying Docker containers in production. 

https://blog.theodo.fr/2017/12/security-best-practices-tool-vms-including-dockers-host/

https://nvd.nist.gov/ncp/checklist/740

<a target="_blank" href="https://nvd.nist.gov/vuln/search">https://nvd.nist.gov/vuln/search</a> for 
known issues


## NIST NVD CVE

<a target="_blank" href="http://csrc.nist.gov/">http://csrc.nist.gov (Computer Security Resource Center)</a> maintains the <a target="_blank" href="https://nvd.nist.gov/800-53">NIST 800-53 "National Vulnerability Database"</a> by MITRE's CVE (Computer Vulnerabilities and Exposures) system using OSCAL (Open Security Controls Assessment Language), currently available in JSON, XML, and YAML. OVAL : (Open Vulnerability and Assessment Language) for use world-wide.

[<a target="_blank" href="https://www.youtube.com/watch?v=fPUypU7ysMw&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=6">MINDMAP</a>] 
PROTIP: Many Software Component Vulnerabity scan programs (Rapid7, JFrog Xray, etc.) refer to the <a target="_blank" href="https://www.vicarius.io/research-center">NVD online</a> as the basis for scanning. 

   * <a target="_blank" href="https://www.cvedetails.com/product-list.php">by app at CVEDetails.com</a>
   * <a target="_blank" href="https://www.vicarius.io/research-center/os/linux-kernel-id19832_4673">Linux Kernel</a>
   * <a target="_blank" href="https://www.vicarius.io/research-center/os/windows-id20092_6750">Windows OS</a>
   <br /><br />

<a target="_blank" href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf">PDF: SP 800-53 Rev 5</a> <a target="_blank" href="https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final">"Security and Privacy Controls for Information Systems and Organizations"</a><br />
<a target="_blank" href="https://user-images.githubusercontent.com/300046/55505840-3f6c3680-5611-11e9-811d-4411e01c5afd.jpg">
<img alt="cybersecurity-NIST-Functions-382x390-19166.jpg" width="382" height="390" src="https://user-images.githubusercontent.com/300046/55505840-3f6c3680-5611-11e9-811d-4411e01c5afd.jpg"></a>

NIST also publishes SP1800 (Cybersecurity practice guides) and the broader SP 500 (Information Technology).

### FedRAMP/FISMA compliance

In 2011 a "cloud first" policy was defined in the Federal Risk and Authorization Program (FedRAMP) <a target="_blank" href="https://cio.gov/wp-content/uploads/downloads/2012/09/Federal-Cloud-Computing-Strategy.pdf">[pdf]</a> where federal agencies make use of cloud service providers (CSPs) given authority to operate (ATO) after receiving system authorization from a security assessment conducted by an independent 3PAO (Third-Party Assessor Organization). 

A <strong>System Security Plan (SSP)</strong>  -- submitted in both Word and PDF formats -- is required by the OMB Security Authorization of Information Systems in Cloud Computing
<a target="_blank" href="https://cio.gov/wp-content/uploads/2012/09/fedrampmemo.pdf">[pdf]</a>. 

Each SSP authorization package can be in a machine-readable (JSON or XML format) <a target="_blank" href="https://github.com/usnistgov/OSCAL/">https://github.com/usnistgov/OSCAL</a> Open Security Controls Assessment Language - based on <a target="_blank" href="https://www.fedramp.gov/using-the-fedramp-oscal-resources-and-templates/">templates</a> created based on <a target="_blank" href="https://github.com/GSA/fedramp-automation/blob/master/documents/FedRAMP_OSCAL_Registry.xlsx">this Excel xlsx file</a> which defines fields (extensions), identifiers, and values in the <a target="_blank" href="https://github.com/GSA/fedramp-automation">FedRAMP Registry at https://github.com/GSA/fedramp-automation</a>. The template is from FedRAMP PMO and <a target="_blank" href="https://www.nist.gov/oscal/">NIST</a>.


<a target="_blank" href="https://www.youtube.com/channel/UCkUuvNigxkKnk3SffjdbmQg">VIDEOS</a> from info.fedramp.gov

Every federal agency is covered by the FISMA (Federal Information Security Management Act) of 2002 law. It's implemented according to NIST (National Institute of Standards and Technology) Special Publication (SP) <a target="_blank" href="http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r4.pdf">800-53 [pdf]</a>. The security controls development framework contains of 157 controls within 19 control families. Each control is designated as low, moderate, or high impact. 

<a target="_blank" href="https://storefront.disa.mil/kinetic/disa/service-catalog#/forms/cloud-service-support">DISA's Cloud Service Support</a>

<a target="_blank" href="https://www.coalfire.com/Documents/Whitepapers/FISMA-vs-FedRAMP_Controls-authorizations">Coalfire</a>
came up with this count of controls:
![cyber-fisma-fedramp-counts-683x586-55388](https://user-images.githubusercontent.com/300046/55948774-75f81180-5c0e-11e9-8596-1dd0194c6dbd.jpg)

FedRAMP added 144 control to 728 in FISMA, for a total of 872 controls.
Control Families:
* AC - Access Control [<a href="#CMMC">CMMC</a>]
* AU - Audit and Accountability [<a href="#CMMC">CMMC</a>]
* AT - Awareness and Training [<a href="#CMMC">CMMC</a>]
* CM - Configuration Management [<a href="#CMMC">CMMC</a>]
* CP - Contingency Planning 
* IA - Identification and Authentication [<a href="#CMMC">CMMC</a>]
* IR - Incident Response [<a href="#CMMC">CMMC</a>]
* MA - Maintenance [<a href="#CMMC">CMMC</a>]
* MP - Media Protection [<a href="#CMMC">CMMC</a>]
* PS - Personnel Security [<a href="#CMMC">CMMC</a>]
* PE - Physical and Environmental Protection [<a href="#CMMC">CMMC</a>]
* PL - Planning
* PM - Program Management
* RA - Risk Assessment [<a href="#CMMC">CMMC</a>]
* CA - Security Assessment and Authorization [<a href="#CMMC">CMMC</a>]
* SC - System and Communications Protection
* SI - System and Information Integrity [<a href="#CMMC">CMMC</a>]
* SA - System and Services Acquisition
<br /><br />

<a name="CMMC"></a>

## CMMC

The Cybersecurity Maturity Model Certification (CMMC) framework consists of <a target="_blank" href="https://ndisac.org/dibscc/cyberassist/cybersecurity-maturity-model-certification/">14 domains</a> that align with the families specified in NIST SP 800-171.

I was first published March 18, 2020 at <a target="_blank" href="https://www.acq.osd.mil/cmmc/">https://www.acq.osd.mil/cmmc</a> by US DoD aims to address supply chain risks.

CMMC has <a target="_blank" href="https://ndisac.org/dibscc/cyberassist/cybersecurity-maturity-model-certification/level-1/">3 layers</a>.

The OSI (Open System Interconnect) networking model 7-layers:
   * App Layer 7 protocols SNMP, TFTP 
   *  Layer 6
   *  Layer 5 
   *  Layer 4 
   * IP Layer 3 routers
   * MAC Layer 2 switches (outputs to a specific port)
   *  Layer 1 hub (multi-port repeater outputs to all ports)
   <br /><br />
The sending computer encapsulates data and 
the receiving computer de-encapsulates the data.
Encapsulation means that as data flows from one layer to the next, headers and footers are added to tell the receiving system how to process the data at each layer.

FTP & TELNET protocols do not encrypt data in transit.

The DoD (Department of Defense) Networking Model has a 4-layer stack:
   1. Process/Application layer accepts and processes user-level functions, such as mail delivery, file transfer and remote administration.
   2. Host-to-Host layer manages connections, flow control, retransmissions, error correction, etc. 
   3. Internet layer manages data delivery across networks (routing) and related functions.
   4. Network Access layer takes data to the wire (or wireless) and back up through the "stack".

192 in binary = 110000000

<hr />

## NIST documents

### NIST SP 800-30

<a target="_blank" href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf">📓</a> 
<a target="_blank" href="https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final">NIST 800-30 Rev. 1 September 2012</a> "Guide for Conducting Risk Assessments"
offers a structured approach for identifying, evaluating, and prioritizing information security risks through risk assessments.
The government of Canada has a harmonized TRA Methodology.
Mozilla offers RRA (Rapid Risk Assessment) guidance.

SP 800-30 steps for a risk assessment: 
   1. Identify the <strong>assets</strong> and their value. 
   2. Identify <strong>threats</strong>.
   3. Identify <strong>vulnerabilities</strong>.
   4. Determine <strong>likelihood</strong>.
   5. Identify <strong>impact</strong>. 
   6. Determine <strong>risk as a combination</strong> of likelihood and impact.
   <br /><br />

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1681357302/nist-800-30-risk-steps-688x439_prk30g.jpg"><img alt="nist-800-30-risk-steps-688x439.jpg" width="688" height="439" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1681357302/nist-800-30-risk-steps-688x439_prk30g.jpg"></a>

SP 800-34 defines "vulnerability" as "an inherent weakness in an information system, security procedures, internal controls, or implementation that could be exploited by a threat source."

### NIST SP 800-34

   * A CIP (critical infrastructure protection) plan is a set of policies and procedures that serve to protect and recover assets and mitigate risks and vulnerabilities.

   * An OEP (occupant emergency plan) outlines first-response procedures for occupants of a facility in the event of a threat or incident to the health and safety of personnel, the environment, or property.

   * An ISCP (information system contingency plan) provides established procedures for the assessment and recovery of a system following a system disruption.

   * A COOP (Continuity Of Operations) plan focuses on restoring an organization’s mission-essential functions (MEFs) at an alternate site and performing those functions for up to 30 days before returning to normal operations.
   <br /><br />

### NIST SP 800-37

800-37 RMF (Risk Management Framework) - to obtain cATO (continuous Authority To Operate):
   1. Categorize information system based on impact FIPS 199 doc
   2. Select a baseline set of security controls using FIPS 200, SP 800-30, SP  800-53
   3. Implement security controls SP 800-18, 800-34, 800-70
   4. Assess the effectivenss of security controls SP 800-53A
   5. Authorize the information system to operate SP-800-37
   6. Monitor security controls for the protection they provide SP-800-37, SP-800-53A
   <br /><br />

PROTIP: Notice that Categorize and Authorize refer to information systems. The rest refer to security controls.

PROTIP: <em>A memonic story I made up:</em>
<ul><strong>Categorize</strong> clothing choices to <strong>select</strong> one to <strong>implement</strong> on the Oscars red carpet for magazines who <strong>assess</strong>  mine as the best so I can <strong>authorize</strong> it for sales to fans who <strong>monitor</strong> who's wearing it too.</ul>


<a target="_blank" href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r2.pdf">📓</a> NIST SP 800-171 Rev 2<br />
Audit Prep, Logistics (Who, Require SOP/Policies), Audit (show me evidence), Post-Audit Reconciliation, Analysis, Reporting, Remediation, and Continuous Monitoring
SP 800-171 Rev 2 replaces 
<a target="_blank" href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-161r1.pdf">📓</a> NIST SP 800-161 "Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations" 
which was withdrawn on May 05, 2022. 161 provides guidance for organizations to identify, assess, and mitigate cybersecurity risks associated with products and services throughout the supply chain, integrating cybersecurity supply chain risk management (C-SCRM) into risk management activities at all levels, and offering guidance on C-SCRM strategy implementation plans, policies, plans, and risk assessments.


<a target="_blank" href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf">📓</a> NIST SP 800-39 (March 2011) "Managing Information Security Risk:
Organization, Mission, and Information System View"
offers structured and flexible guidance for managing information security risk across an organization's operations, assets, individuals, and other organizations, providing an integrated and complementary approach to other risk-related activities, processes, or approaches that organizations have implemented or intend to implement.

### NIST SP 800-40

NIST SP 800-40<br />
Guide to Enterpise Patch Management Technologies


### NIST SP 800-53 

https://www.cybersaint.io/blog/nist-800-53-control-families

<a target="_blank" href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf">📓</a> NIST SP 800-53 Rev 5 September 2020 "Security and Privacy Controls for Information Systems and Organizations" 
outlines a set of security and privacy controls that organizations can implement to protect against potential threats and vulnerabilities. The controls are organized into families, and each control includes a description, implementation guidance, and assessment procedures.

<a target="_blank" href="https://aws.amazon.com/about-aws/whats-new/2023/03/aws-security-hub-support-nist-sp-800-53-rev-5/">Its 121 requirements are supported among the 36 AWS Services by AWS Security Hub</a>.

NIST SP 800-53 is within section 4 SECURITY CONTROL SELECTION of 
<a target="_blank" href="https://csrc.nist.gov/publications/fips">https://csrc.nist.gov/publications/fips</a> NISP FIPS-200 and 201-3 catagorizes by impact.

📓NIST SP 800-53A<br />
provides a methodology for assessing the security controls of federal information systems.

📓NIST SP 800-53B<br />
is based on the security and privacy controls outlined in NIST SP 800-53 and provides a set of control baselines that organizations can use to tailor their security controls to meet their specific needs.


## DISA SIST & SRG

<a target="_blank" href="https://iase.disa.mil/stigs/Pages/index.aspx"> Security Technical Implementation Guides (STIGs)</a>
<a target="_blank" href="https://en.wikipedia.org/wiki/Security_Technical_Implementation_Guide">[Wiki]</a> defines (over 425) <strong>"lock down" configuration settings</strong> to minimize vulnerabilities to malicious attack of DOD IA (Information Assurance) and IA-enabled devices/systems, both <a target="_blank" href="https://iase.disa.mil/stigs/app-security/web-servers/Pages/index.aspx">Windows and Apache Unix</a>. <a target="_blank" href="
https://iase.disa.mil/cloud_security/Pages/index.aspx">
Cloud Computing Security Requirements Guide (CC SRG)</a> are also defined by DISA (Defense Information Systems Agency) which provides a Viewer to scan for them.

<a target="_blank" href="https://csrc.nist.gov/Projects/scap-validation-program">SCAP (Security Content Automation Protocol)</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Security_Content_Automation_Protocol">[Wikipedia]</a> checklists enable automated vulnerability management, measurement, and policy compliance evaluation of systems deployed in an organization.
See the <a target="_blank" href="https://www.youtube.com/watch?v=-h_lj5sWo4A">2015 viewer video</a>.

See <a target="_blank" href="https://www.open-scap.org/">https://www.open-scap.org</a>
for tools.

* ITAR (International Traffic in Arms Regulations)
* ECCN (Export Control Classification Number)


## Source of Vulnerabilities

<a target="_blank" href="https://www.infosecurity-magazine.com/webinars/top5-datasecurity-metrics/">
The Top Five Security Metrics</a>

<a target="_blank" href="https://www.cvedetails.com/top-50-products.php?year=0">Top 50 Products By Total Number Of "Distinct" Vulnerabilities - for all time</a> <a target="_blank" href="https://www.stigviewer.com/stigs">include</a> product versions now obsolete.

(At the top of the list is Debian.)

<a name="SocialEngineering"></a>

### Social Engineering

* Tailgating / piggybacking

Credential harvesting:
* Eliciting information
* Impersonation

* Phishing, Spear-phishing, whaling
* Vishing (via a voicemail by phone )
* Smishing, aka SMS phishing, uses phishing methods through text messaging
* Watering Hole Attack attacks a site that the target frequently visits. 
* Pharming redirects victims to a bogus website

* Invoice scam
* Pretexting
* Credential harvesting

* Prepending - adding something to the front of something else, such as adding an asterisk to the front of code or prepending text to the subject line or body of an email. 

* "Hybrid warfare": Influencing campaign, propaganda, disinformation, hoaxes
* Manufacturing consent

Lures:

* Authority (posing as government, customer)
* Scarcity
* Familiarity/liking
* Urgency

Hoax

Influence campaign

Watering hole attack

Typo squatting

## International 

International Organization for Standardization (ISO) and the International Electrotechnical Commission <a target="_blank" href="https://www.iso27001security.com/html/27018.html"><strong>(IEC) 27018:2019</strong></a> Code of practice for protection of Personally Identifiable Information (PII) in public clouds acting as PII processors  covers the processing of personal information by cloud service providers. 27018 interprets rather than duplicates <a target="_blank" href="https://www.iso27001security.com/html/27002.html">ISO/IEC 27002:2013</a>. For example, advising cloud service providers to advise their customers if they use sub-contractors.

PII includes Social Security numbers, Drivers license, Passport or Alien Registration numbers, Financial account numbers, biometric identifiers.

<a target="_blank" href="https://www.dhs.gov/sites/default/files/publications/dhs%20policy%20directive%20047-01-007%20handbook%20for%20safeguarding%20sensitive%20PII%2012-4-2017.pdf">PDF</a>:
SPII (Sensitive Personally Identifiable Information) includes what, if lost, compromised, or disclosed without authorization, could result in substantial harm, embarrassment, inconvenience, or unfairness to an individual.

Not considered private are last names, email addresses.

<strong>MTCS</strong> (Multi-Tier Cloud Security) Singapore 584:2013 Certification covers 
   * Infrastructure as a Service (IaaS), 
   * Platform as a Service (PaaS), and 
   * Software as a Service (SaaS).
   <br /><br />

PLA (Privacy Level Agreement)

GDPR (General Data Protection Regulation) states that the data gathered for private individuals should be used only for the purpose for which it is collected. The European Union (EU) Principles on Privacy state that data gathered for private individuals should be used only for the purpose for which it is collected.
As of May 25, 2018, European privacy law GDPR (General Data Protection Regulation) imposes new rules on companies, government agencies, non-profits, and other organizations that offer goods and services to people in the European Union (EU), or that collect and analyze data tied to EU residents. But the GDPR applies no matter where they are located.

EU Cookie Law <a target="_blank" href="http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm">http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm</a>

<a target="_blank" href="https://www.oecd.org/">OECD.org</a> Privacy Principles for Canada, Mexico, EU GDPR

eDiscovery EDRM (electronic Discovery Reference Model) A framework that provides guidance for gathering and assimilating electronic data during the legal process:
   * Preserving
   * Collection
   * Processing
   * Review
   * Analysis production
   <br /><br />

Rules of evidence:
   * Be authentic.
   * Be accurate.
   * Be complete.
   * Be convincing.
   * Be admissible.

ISO/IEC 27050

CSA (Cloud Security Alliance) guidelines


## US Laws

* Jurisdiction is the power or right of a legal or political agency to exercise its authority over a person, subject matter, or territory. Jurisdiction can be affected when the organization that owns the data is in one country while the data itself is stored in a facility in another country
* Standing
* Jurisprudence
* Authority
<br /><br />

QUESTION: How does CIS relate to ITIL?

Criminal Justice Information Services (CJIS) Security Policy compliance for any US state or local agency that wants to access the FBI’s CJIS database.

UK Government G-Cloud is a cloud computing certification for services used by government entities in the United Kingdom.

<strong>HIPAA</strong> (Health Insurance Portability and Accountability Act) is a US federal law that regulates patient Protected Health Information (PHI). HIPAA security rules prevent medical organizations (including health insurance companies, hospitals, and doctors’ offices) from sharing patient healthcare information without consent. 

The HIPAA Omibus Final Rule in 2013 combined HIPPA with HITECH (Health Information Technology for Economic and Clinical Health Act), which defined mandatory penalties of up to $1.5 million for HIPAA-covered entitites. A Business Associate Agreement (BAA) stipulates adherence to security and privacy provisions in HIPAA and HITECH. The HIPPA Breach Notification Rule requires entities to issue notifications within 60 days of discovery. In 2011 a HITECH-required Rule allows patients to request access reports.

Service Organization Controls (SOC) 1, 2, and 3 report is a framework by independent third-party <strong>auditors</strong> covering controls for data security, availability, processing integrity, and confidentiality as applicable to in-scope trust principles for each service.
SOC reports are internal control reports on the services provided by a service organization.

   * SOC 3 is the only SOC report that should be shared with the general public.
   * SOC 2 Type II, along with ISO 27001
   <br /><br />

AICPA (American Institue of Certified Public Accountants) Trust Service Principles, including Security, Availability and Confidentiality. <a target="_blank" href="https://www.aicpa.org/research/standards/auditattest/ssae.html">PDF: SSAE #18</a> (Statement on Standards for Attestation Agreement #18). 
<strong>GAPP (Generally Accepted Privacy Principles)</strong> component of SOC2:
   1. Management. The entity defines, documents, communicates, and assigns accountability for its privacy policies and procedures.
   1. Notice. The entity provides notice about its privacy policies and procedures and identifies the purposes for which personal information is collected, used, retained, and disclosed.
   1. Choice and consent. The entity describes the choices available to the individual and obtains implicit or explicit consent with respect to the collection, use, and disclosure of personal information.
   1. Collection. The entity collects personal information only for the purposes identified in the notice.
   1. Use, retention, and disposal. The entity limits the use of personal information to the purposes identified in the notice and for which the individual has provided implicit or explicit consent. The entity retains personal information for only as long as necessary to fulfill the stated purposes or as required by law or regulations and thereafter appropriately disposes of such information.
   1. Access. The entity provides individuals with access to their personal information for review and update.
   1. Disclosure to third parties. The entity discloses personal information to third parties only for the purposes identified in the notice and with the implicit or explicit consent of the individual.
   1. Security for privacy. The entity protects personal information against unauthorized access (both physical and logical).
   1. Quality. The entity maintains accurate, complete, and relevant personal information for the purposes identified in the notice.
    <br /><br />

   Policies, procedures, governance structures in place to protect privacy. Clearly define roles of data owner, steward, custodian.

Others:

   * The Federal Privacy Act of 1974 ensures that only authorized persons should have access to personal information and that personal records should be up to date and accurate. The act affects any computer that contains records used by a federal agency. 

   * The Federal Intelligence Surveillance Act (FISA) of 1978 affects law enforcement and intelligence agencies and gives procedures for the physical and electronic surveillance and collection of “foreign intelligence information” between “foreign powers” and “agents of foreign powers.”

   * 1986 Computer Fraud and Abuse Act (CFAA) was the first law that required a formal computer security plan. It also requires appropriate training of system users or owners where the systems house sensitive information. Although <strong>"protected computers"</strong> was initially applicable to feds and financial institutions, court cases have expanded coverage to any computer in "interstate commerce".

   * 1986 Electronic Communications Privacy Act (ECPA) extended government restrictions on wiretaps from telephone calls to include transmissions of electronic data by computer.

   * 1987 Public Law 100-235 Title 101, Statute 1724 applies to federal systems

   * 1991 United States Federal Sentencing Guidelines of affects individuals and organizations convicted of felonies and serious (Class A) misdemeanors. It provides guidelines to prevent sentencing disparities that existed across the United States.

   * 1996 US Economic Espionage Act provides a framework to deal with espionage attacks on corporations. According to the Act, all the assets of the organization, whether substantial or not, require protection. The Economic Espionage Act of 1996 affects companies that have trade secrets and any individuals who plan to use encryption technology for criminal activities. 

   * 1994 Communications Assistance for Law Enforcement Act (CALEA) requires telecommunications carriers and manufacturers of telecommunications equipment to modify and design their equipment, facilities, and services to ensure that they have built-in surveillance capabilities.

   * 1996 Clinger-Cohen Act requires a CIO for each agency to oversee adoption of the Department of Defense Architecture Framework (DODAF) Federal Enterprise Architecture (FEA)

   * 1999 GLBA (Gramm-Leach-Bliley Act) requires all financial institutions, including banks, loan companies, insurance companies, investment companies, and credit card providers to explain practices to consumers.

   * The Personal Information Protection and Electronic Documents Act (PIPEDA) affects private sector organizations that collect, use, and disclose personal information in the course of commercial business in Canada. 

   * 2002 & 2014 Federal Information Security Management Act (FISMA) affects every federal agency. It requires federal agencies to develop, document, and implement an agency-wide information security program. It requires federal agencies to develop, document, and implement an agency-wide information security program. 

   * Basel II affects financial institutions and addresses minimum capital requirements, supervisory review, and market discipline. 

   * The Sarbanes-Oxley (SOX) Act provides guidelines on accurately reporting corporate financial data to shareholders and retention of record storage. (to prevent another Enron)

   * The Payment Card Industry Data Security Standard (PCI DSS) affects any organizations that handle cardholder information for a major credit card company (VISA, MasterCard, Amex, etc.). Each year each merchant submits a SAQ (Self-Assessment Questionaire) to its transaction bank. A QSA (Qualified Security Assessor) certified by the PCI Security Standards Council issues a ROC (Report on Compliance) form. PCI DSS compliance:
      1. Build and maintain a secure network and systems
      2. Protect cardholder data
      3. Maintain a vulnerability management program
      4. Implement strong access control measures
      5. Regularly monitor and test networks
      6. Maintain an information security policy
      <br /><br />
   Objectives:
      * Minimize the Attack Surface
      * Software Protection Mechanisms
      * Secure Software Operations
      * Secure Software Lifecycle Management
      <br /><br />

   * COPPA (???) - online collection and use of data for minors under 13

   * FERPA (Family Educational Rights and Privacy Act) requires educational institutions to protect the privacy of student records.
   <br /><br />

Be careful of the "color of law" who may not be the right people at the appropriate time so they don't become a hinderance.


## Reporting

<a target="_blank" href="https://threatmap.checkpoint.com/ThreatPortal/livemap">https://threatmap.checkpoint.com/ThreatPortal/livemap</a>

Interpol: https://www.interpol.int/Crime-areas/Cybercrime/Cybercrime

FBI https://fbi.gov/investigate/cyber

DHS (Department of Homeland Security): https://www.dhs.gov/topic/cybersecurity

Property Law: https://www.bsa.org

### US State laws

   * 2003 Calif. SB 1386 Security Breach Information Act is the first state to require notification
   * 2010 201 CMR 17 Massachusetts Standards for the Protection of Personal Information of Residents

   * ncsl.org (National Conference of State Legislators) has research on <a target="_blank" href="https://ncsl.org/research/telecommunications-and-information-technology/data-security-laws.aspx">data-security-laws</a> (Private Sector), 
   <a target="_blank" href="https://ncsl.org/research/telecommunications-and-information-technology/data-disposal-laws.aspx">data-disposal-laws</a>x,
   <a target="_blank" href="https://ncsl.org/research/telecommunications-and-information-technology/security-breach-notification-laws.aspx">security-breach-notification-laws</a>.

### FIPS

FIPS 199 says federal organizations 
   1. determine the security category of their information system in accordance with FIPS (Federal Information Processing Standard) Publication 199, Standards for Security Categorization of Federal Information and Information Systems
   2. derive the information system impact level from the security category in accordance with FIPS Publication 200
   3. apply the appropriately tailored set of baseline security controls in NIST Special Publication 800-53 Rev. 4.
   <br /><br />

## Data Classification

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Impact (damaged) from release </th><th> Military Government </th><th> Commercial 
   </th><th> Classification </th></tr>
<tr valign="top"><td> Exceptionally Grave </td><td> Top-secret </td><td> Confidential Proprietary 
   </td><td> Class 3</td></tr>
<tr valign="top"><td> Serious </td><td> Secret </td><td> Private 
   </td><td> Class 2</td></tr>
<tr valign="top"><td> Damage </td><td> Confidential / Controlled Unclassified (CUI)  </td><td> Sensitive 
   </td><td> Class 1</td></tr>
<tr valign="top"><td> No damage</td><td> Unclassified </td><td> Public 
   </td><td> Class 0 </td></tr>
</table>

<a target="_blank" href="https://www.spirion.com/data-classification/">Commercial data classification levels</a>:

   \0. <strong>Public = freely available</strong> Information that is accessible to the public without any restrictions or adverse consequences, such as marketing material, corporate contact information, customer service contracts, and website data.

   \1. <strong>Internal = Non-sensitive</strong> data with low security requirements, but not meant for public disclosure, such as client communications, sales playbooks, and organizational charts. Unauthorized disclosure of such information can lead to short-term embarrassment and loss of competitive advantage.

   \2. <strong>Confidential = Sensitive</strong> data that, if compromised, could negatively impact operations, including harming the company, its customers, partners, or employees. Examples include trade secrets, vendor contracts, employee reviews and salaries, and customer information.

   \3. <strong>Restricted = Highly sensitive</strong> information that, if compromised, could put the organization at financial, legal, regulatory, and reputational risk. Examples include customers’ PII, PHI, employee ID number, and credit card information.

   Private = Medical information

CUI (Controlled Unclassified) previously marked:
   * For Official Use Only (FOUO)
   * Sensitive But Unclassified (SBU)
   * Dozens of other "sensitive" labels used by different U.S. agencies
   * Sensitive Security Information (SSI)
   <br /><br />

Data classification program:
   1. Define the classification levels. 
   2. Specify the data classification criteria.

   3. Identify the <strong>data owners</strong> who determine the classification level of the information he owns and protects the data for which he is responsible.
   4. Identify the <strong>data custodian</strong> who implements (records) the information classification and controls determined by the data owner.

   5. Indicate the controls required for each classification level. The System owner ensures that the appropriate controls are in place.
   6. Document any known exceptions to the controls. 

   7. Document information custody transfer guidelines. 
   8. Create data classification review procedures. 
   9. Document data declassification procedures. 

   10. Develop the data classification security awareness program.
   * Security administrator maintains security devices and software, including firewalls, antivirus software, etc.
   <br /><br />

<hr />

<a name="NIST"></a>

### NIST CSF

<a target="_blank" href="https://www.nist.gov/itl">SUBSCRIBE: 
NIST Information Technology Laboratory</a> emails out <a target="_blank" href="https://public.govdelivery.com/accounts/USNIST/subscriber/new?qsp=USNIST_3">bulletins about vulnerabilities</a>
NIST CSRC (Computer Security Resource Center)

<a target="_blank" href="https://obamawhitehouse.archives.gov/the-press-office/2013/02/12/executive-order-improving-critical-infrastructure-cybersecurity">Executive Order 13636</a>: "Improving Critical Infrastructure Cybersecurity"
issued by the Obama White House on Feb 2013 charged the US National Institute of Standards and Technology (NIST) to develop their <a target="_blank" href="https://www.nist.gov/cyberframework">Cybersecurity Framework (CSF)</a> as a prescriptive standard mandatory for federal agencies but a <strong>voluntary</strong> framework for commercial organizations. CSF does not tell organizations how much risk is tolerable.

<a target="_blank" href="https://www.nist.gov/itl/applied-cybersecurity/nice/resources/executive-order-13800">Executive Order 13800</a>: "Strengthening the Cybersecurity of Federal Networks and Critical Infrastructure" <a target="_blank" href="https://www.govinfo.gov/content/pkg/DCPD-201700327/pdf/DCPD-201700327.pdf">PDF</a> from the Trump White House on May 11, 2017 aims to improve the nation's cyber posture and capabilities in the face of intensifying cybersecurity threats. Sections: 1) Federal Networks, 2) Critical Infrastructure, 3) the nation.
* Homeland Security Directive 7 (HSPD-7) "Critical Infrastructure Identification, Prioritization, and Protection".
   * https://www.cisa.gov/topics/cybersecurity-best-practices/executive-order-strengthening-cybersecurity-federal-networks-and-critical-infrastructure
   * https://trumpwhitehouse.archives.gov/articles/strengthening-the-cybersecurity-of-federal-networks-and-critical-infrastructure/
   * https://www.federalregister.gov/documents/2017/05/16/2017-10004/strengthening-the-cybersecurity-of-federal-networks-and-critical-infrastructure
   <br /><br />

The current CSF version 1.1, was released April 2018.

The CSF provides a common Language and systematic methodology for managing cyber risk management with "best practices".

The CSF consists of standards, guidelines, and best practices to manage cybersecurity-related risks. 

NIACAP (National Information Assurance Certification and Accreditation Process) evaluates an application or system that is <strong>distributed</strong> to a number of different locations. System accreditation evaluates an application or support system. Site accreditation evaluates the application or system at a specific self-contained location. 


<a name="CSF"></a>

CSF Functions and Categories maps NIST 800-53 to <a href="#CIS">CIS Controls</a>:
<a target="_blank" href="https://user-images.githubusercontent.com/300046/55505643-c8cf3900-5610-11e9-8f79-3e7bec5cfe7c.jpg"><img alt="cybersecurity-nist-342x275" width="342" height="275" src="https://user-images.githubusercontent.com/300046/55505643-c8cf3900-5610-11e9-8f79-3e7bec5cfe7c.jpg"></a>

NIST SP 800-39 provides guidance for an integrated, organization-wide program for managing information security risk to organizational operations (i.e., mission, functions, image, and reputation), organizational assets, individuals, other organizations, and the nation resulting from the operation and use of federal information systems.

Among <a target="_blank" href="https://csrc.nist.gov/publications/sp800">The many NIST SP 800 documents</a>:

   * <a target="_blank" href="https://csrc.nist.gov/publications/detail/sp/800-60/vol-1-rev-1/final">
   NIST SP 800-60</a> provides guidelines for mapping types of information and information systems to security categories.
   * SP 800-183 describes the Internet of Things (IoT).
   <br /><br />

NIST SP 800-57 Key management lifecycle:
   1. Pre-operational phase
   2. Operational phase
   3. Post-operational phase
   4. Destroyed phase
   <br /><br />

NIST SP 800-92 log management infrastructure functions:
* General functions (log parsing, event filtering, and event aggregation)
* Storage (log rotation, log archival, log reduction, log conversion, log normalization, log file integrity checking)
* Log analysis (event correlation, log viewing, log reporting)
* Log disposal (log clearing)
<br /><br />

NIST SP 800-137 ISCM (information security continuous monitoring) plan:
   1.   Define an ISCM strategy.
   2.   Establish an ISCM program.
   3.   Implement an ISCM program.
   4.   Analyze the data collected, and report findings.
   5.   Respond to findings.
   6.   Review and update the monitoring program.
   <br /><br />

Tiers in an organization defined by SP 800-139
   1. Organization view, which addresses risk from an organizational perspective by establishing and implementing governance structures that are consistent with the strategic goals and objectives of organizations and the requirements defined by federal laws, directives, policies, regulations, standards, and missions/business functions. 
   * Tier 2 is the mission/business process view, which designs, develops, and implements mission/business processes that support the missions/business functions defined at Tier 1. 
   * Tier 3 is the information systems view, which includes operational systems, systems under development, systems undergoing modification, and systems in some phase of the system development life cycle.
   <br /><br />

CSF process:
1. Prioritize and scope. Varying risk tolerances may be defined for each implementation tier. Inputs, Activities, Outputs
2. Orient
3. Create a Current Profile
4. Conduct Risk Assessment
5. Create Target Profile
6. Determine, Analyze, Prioritize gaps
7. Implementation Action Pln


<a name="IDPRR"></a>
  
<strong>SP 800-139 Functions</strong> to implement the appropriate safeguards to ensure delivery of critical infrastructure services

<a target="_blank" href="https://www.nist.gov/cyberframework/online-learning/five-functions">IDENTIFY, PROTECT, DETECT, RESPOND, RECOVER</a>

   * Identify (ID): Develop the organizational understanding to manage cybersecurity risk to systems, assets, data, and capabilities.
   * Protect (PR): Develop and implement the appropriate safeguards to ensure the delivery of critical infrastructure services.

   * Detect (DE): Develop and implement the appropriate activities to identify the occurrence of a cybersecurity event.

   * Respond (RS): Develop and implement the appropriate activities to take action regarding a detected cybersecurity event.
   * Recover (RC): Develop and implement the appropriate activities to maintain plans for resilience and to restore any capabilities or services that were impaired due to a cybersecurity event.
   <br /><br />

<a name="CSFtable"></a>
<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Core Function </th><th> ID </th><th> 23 Category </th><th> CIS </th></tr>
<tr valign="top"><td rowspan="6"> IDENTIFY (What processes & assets need protection?)
   </td><td> ID.AM </td><td> Asset Management
   #1, #2 </td></tr>
<tr valign="top"><td> ID.AM </td><td> Asset Management
   - </td></tr>
<tr valign="top"><td> ID.BE </td><td> Business Environment
   - </td></tr>
<tr valign="top"><td> ID.GV </td><td> Governance
   - </td></tr>
<tr valign="top"><td> ID.RA </td><td> Risk Assessment
   #3 </td></tr>
<tr valign="top"><td> ID.RM </td><td> Risk Management Strategy
   - </td></tr>
<tr valign="top"><td> ID.SC </td><td> Supply Chain Risk Management
   - </td></tr>

<tr valign="top"><td rowspan="7"> PROTECT 
   </td><td> PR.AC </td><td> Identity Management & Access Control
   #4, 9, 11, 12, 13, 14, 16 </td></tr>
<tr valign="top"><td> PR.AT </td><td> Asset Management
   - </td></tr>
<tr valign="top"><td> PR.AM </td><td> Awareness and Training
   #4, 17 </td></tr>
<tr valign="top"><td> PR.DS </td><td> Data Security
   #1, 2, 13, 14, 18 </td></tr>
<tr valign="top"><td> PR.IP </td><td> Information Protection Processes & Procedures
   #3, 5, 7, 10, 11 </td></tr>
<tr valign="top"><td> PR.MA </td><td> Maintenance
   #4, 12 </td></tr>
<tr valign="top"><td> PR.PT </td><td> Protective Technology
   #4, 6, 8, 11, 13, 14, 16 </td></tr>

<tr valign="top"><td rowspan="3"> DETECT 
   </td><td> DE.AE </td><td> Anomalies and Events
   #6, 9, 12, 19 </td></tr>
<tr valign="top"><td> DE.CM </td><td> Security Continuous Monitoring
   #3, 8, 19 </td></tr>
<tr valign="top"><td> DE.DP </td><td> Detection Processes
   #6 </td></tr>

<tr valign="top"><td rowspan="5"> RESPOND 
   </td><td> RS.RP </td><td> Response Planning
   #19 </td></tr>
<tr valign="top"><td> RS.CO </td><td> Communications
   #19 </td></tr>
<tr valign="top"><td> RS.AN </td><td> Analysis
   #3, 19 </td></tr>
<tr valign="top"><td> RS.MI </td><td> Mitigation
   #3, 19 </td></tr>
<tr valign="top"><td> RS.IM </td><td> Improvements
   #19 </td></tr>

<tr valign="top"><td rowspan="3"> RECOVER 
   </td><td> RC.RP </td><td> Response Planning
   #19 </td></tr>
<tr valign="top"><td> RC.IM </td><td> Improvements
   #19 </td></tr>
<tr valign="top"><td> RC.CO </td><td> Communications
   #19 </td></tr>
</table>

"Communications" occur early in RESPOND but later in RECOVER.

Notice that "Improvements" is in both RESPOND and RECOVER.

There are also 108 (previously 97) subcategories. 

The Category IDs are different from the 18 family identifiers used by RMF SP 800-53.

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Class </th><th> ID </th><th> RMF Family </th></tr>
<tr valign="top"><td rowspan="5"> Management </td><td> CA </td><td> Security Assessment and Authorization </td></tr>
<tr valign="top"><td> PL </td><td> Planning </td></tr>
<tr valign="top"><td> RA </td><td> Risk Assessment </td></tr>
<tr valign="top"><td> SA </td><td> System and Services Acquisition </td></tr>
<tr valign="top"><td> PM </td><td> Program Management </td></tr>

<tr valign="top"><td rowspan="9"> Operational </td><td> AT </td><td> Awareness and Training </td></tr>
<tr valign="top"><td> CM </td><td> Configuration Management </td></tr>
<tr valign="top"><td> CP </td><td> Contingency Planning </td></tr>
<tr valign="top"><td> IR </td><td> Incident Response </td></tr>
<tr valign="top"><td> MA </td><td> Maintenance </td></tr>
<tr valign="top"><td> MP </td><td> Media Protection </td></tr>
<tr valign="top"><td> PE </td><td> Physical and Environmental Protection </td></tr>
<tr valign="top"><td> PS </td><td> Personnel Security </td></tr>
<tr valign="top"><td> SI </td><td> System and Infomration Integrity </td></tr>

<tr valign="top"><td rowspan="4"> Technical </td><td> AC </td><td> Access Control </td></tr>
<tr valign="top"><td> AU </td><td> Audit and Accountability </td></tr>
<tr valign="top"><td> IA </td><td> Identification and Authentication </td></tr>
<tr valign="top"><td> SC </td><td> System and Communications Protection </td></tr>
</table>

<a target="_blank" href="https://csrc.nist.gov/Projects/risk-management/about-rmf">RMF</a> <a target="_blank" href="https://ipkeys.com/blog/rmf-steps/">steps</a>:
1. Prepare (added by SP 800-37 Rev 2)
2. Categorize SPSCRs
3. Select 800-53 Rev 5
4. Implement
5. Assess
6. Authorize
7. Monitor
<br /><br />

In the NIST CSF, "Informative References" citations relate to more technical activities from other standards or guidelines, to provide additional information on how to achieve outcomes described in Subcategories.

   SP 800-139 framework implementation (maturity) tiers:
   * Tier 1: <strong>Partial</strong> - risk management practices are not formalized, and risk is managed in an ad hoc and sometimes reactive manner.
   * Tier 2: Risk <strong>Informed</strong> - risk management practices are approved by management but may not be established as organizational-wide policy.
   * Tier 3: <strong>Repeatable</strong> - the organization’s risk management practices are formally approved and expressed as policy.
   * Tier 4: <strong>Adaptive</strong> - the organization adapts its cybersecurity practices based on lessons learned and predictive indicators derived from previous and current cybersecurity activities through a process of continuous improvement.
   <br /><br />

<a name="SP800-154"></a>

NIST SP 800-154 is a draft publication for data-centric system threat modeling. Its steps:
   1. Identify and characterize the system and data of interest.
   2. Identify and select the attack vectors to be included in the model.
   3. Characterize the security controls for mitigating the attack vectors.
   4. Analyze the threat model.
   <br /><br />

NIST SP 800-160 defines the systems security engineering framework. It defines, bounds, and focuses the systems security engineering activities, both technical and nontechnical, toward the achievement of stakeholder security objectives and presents a coherent, well-formed, evidence-based case that those objectives have been achieved.
Contexts within which security activities are conducted:
   * Problem context
   * Solution context
   * Trustworthiness context
   <br /><br />

NIST SP 800-66 provides guidelines for implementing the HIPAA Security Rule, which requires securing protected health information (PHI) - any individually identifiable health information, also referred to as EPHI or ePHI (electronic protected health information). 

NIST SP 800-122 gives guidelines on protecting the confidentiality of PII (Personally identifiable information) considered information that should be classified and protected. PII are assigned confidentiality impact levels based on FIPS 199 designations: 
   * LOW if the loss of <a href="#CIA">confidentiality, integrity, or availability</a> could be expected to have a limited adverse effect on organizational operations, organizational assets, or individuals.
   * MODERATE if the loss of <a href="#CIA">CIA</a> could be expected to have a serious adverse effect on organizational operations, organizational assets, or individuals.
   * HIGH if the loss of <a href="#CIA">CIA</a> could be expected to have a severe or catastrophic adverse effect on organizational operations, organizational assets, or individuals.
   <br /><br />

U.S. federal agencies use the SBU (Sensitive But Unclassified) designation for information not secret but still needs to be protected and requires strict controls over its distribution.

<a target="_blank" href="http://ethics-wg.org/framework.htm">http://ethics-wg.org/framework.htm</a> says:
"Do not appropriate other people’s intellectual output" is one of the Computer Ethics Institute (CEI) Ten Commandments of Computer Ethics, but is not part of the (ISC)2 code of ethics preamble.

Components of configuration management:
   * configuration control
   * configuration status accounting
   * configuration auditing
   <br /><br />

<a name="CodeReview"></a>
Fagan inspections:
   1. Planning - prework to prepare
   2. Overview - assign roles, provide overview of software
   3. Preparation - independent review of code for potential defects
   4. Meeting - formally identify issues as a team
   5. Rework - fix. May return to the planning phase.
   6. Follow-up to confirm defects corrected
   <br /><br />

## Defense in Depth

1. Physical security
2. Identity
3. Perimeter
4. Network
5. Compute
6. Application
7. Data


## Security Testing

OSSTMM (Open Source Security Testing Methodology Manual) published by Pete Herzog of ISECOM (Institute for Security and Open Methodologies) covers the different kinds of security tests of physical, human (processes), and communication systems. It does not cover any specific tools that can be used to perform these tests. It defines five risk categorizations: 
   * vulnerability, 
   * weakness, 
   * concern, 
   * exposure, and 
   * anomaly.
   <br /><br />

Once a risk is detected and verified, it is assigned a risk assessment value.

COSCO (Committee of Sponsoring Organizations) broadly defines ERM (Enterprise Risk Management) as “the culture, capabilities and practices integrated with strategy-setting and its execution, that organizations rely on to manage risk in creating, preserving and realizing value.” The ERM framework is presented in the form of a three-dimensional matrix. The matrix includes eight components of enterprise risk management and four categories of objectives across the top: strategic, operations, reporting, and compliance. 

The organization, its divisions, and business units are depicted as the third dimension of the matrix for applying the framework.

Levels of testing:
   * Small Unit Tests at functional level by input and output
   * Medium Integration Tests for functional dependencies
   * Large System Tests of critical components only - Tackle the APIs, leave the UI untested
   * Manual validation of every commit, exploratory testing
   <br /><br />

## RFCs

RFC's https://tools.ietf.org/html/rfc1087
   * RFC 1087 outlines concepts pertaining to what the IAB considers unethical and unacceptable. It considers destroying the integrity of computer-based information unethical.
   * RFC 2010 Operational Criteria for Root Name Servers
   * RFC 1589 A Kernel Model for Precision Timekeeping
   * RFC 1150 F.Y.I. on F.Y.I.
   <br /><br />

<hr />

## Credential Rotation Lifecycle

Different periods for rotating different key types. Here is the "regular basis" <a target="_blank" href="https://blogs.msdn.microsoft.com/azuresecurity/2015/07/13/certificate-management-in-azure-dos-and-donts/">recommended</a>: 

<table border="1" cellpadding="4" cellspacing="0"><thead>
<tr><th>Key Type</th><th>Rotation Period</th></tr></thead><tbody>
<tr valign="top"><td>Tokens
   </td><td>ADFS – 24 hours</td></tr >
<tr valign="top"><td>Domain Passwords
   </td><td>70 days</td></tr >
<tr valign="top"><td>Connection strings
   </td><td>70 days</td></tr >
<tr valign="top"><td>Shared Access Signatures
   </td><td>60 days</td></tr >
<tr valign="top"><td>Self-Signed Certificate
   </td><td>2 Years</td></tr >
<tr valign="top"><td>Symmetric Keys
   </td><td>2 Years</td></tr >
<tr valign="top"><td>Asymmetric Keys
   </td><td>2 years</td></tr >
<tr valign="top"><td>Storage Account Keys
   </td><td>2 years</td></tr >
</tbody></table>

Book copyright in the US & UK is 70 years after death of author.

<hr />

## Security Engineer

Here are "Essential Job Functions" from various job descriptions:

* Apply established and ad hoc processes and techniques to identify, validate, prioritize, and track security risks.
* Identify uncontrolled risks and recommend control improvements.
* Proactively identify security requirement deficiencies.
* Engage business and technology personnel to elicit security requirements.
* Architect and design security control systems to address requirements.
* Operate and monitor established security controls.
* Identify control deficiencies and make appropriate recommendations.
* Ensure that controls are operating effectively; resolve operating discrepancies.
* Review, triage, and prioritize control output.
* Take appropriate action to resolve security discrepancies.
* Identify, evaluate, and recommend new security technologies, techniques, and tools.
* Define, review, and promote information security policies, standards, guidelines, and procedures.

* As <strong>compliance subject matter expert</strong>, enforce and monitor compliance with internal and external regulations, policies, and standards.
* Establish and promote strategies to ensure that compliance is effectively monitored and enforced.
* Lead/Co-lead internal process improvement initiatives.  Provide feedback on processes by offering suggestions.

* Mentor and supervise junior staff in project-level tasks.
* Assist with adherence to technology policies and comply with all security controls.

Education/Experience Requirements:

* Experience must include direct experience in several of the key areas listed: securing networks and systems architecture, design and implementation, secure software assurance, intrusion detection, defense and incident response, security configuration management, access controls design and implementation and security policy and standards development.
* In-depth knowledge of one or more communications protocols.
* Experience with more than one Cyber Security tools, including: Configuration Assessment, Log Aggregation, Integrity Verification, Web Application Security Testing, Network Access Control System, Network Intrusion prevention systems, and Endpoint Security Solutions.

* Strong written and verbal technical communication skills.
* Demonstrated ability to develop effective working relationships that improved the quality of work products.
* Should be well organized, thorough, and able to handle competing priorities.
* Ability to maintain focus and develop proficiency in new skills rapidly.
* Ability to work in a fast paced environment.
* In-depth knowledge of more than one Information Security principle and discipline.
<br /><br />



<a name="Threats"></a>

### Threats

<a target="_blank" href="https://www.hytrust.com/uploads/2015/08/HyTrust-Infographic-Cloud-Kill-Chain.pdf">PDF</a>: <a target="_blank" href="https://www.youtube.com/watch?v=emdGpNwfWHY&t=17m24s">VIDEO</a>: Cyber Kill Chain<br /><img width="1570" alt="cyber-kill-chain-lockheed-3144x1246" src="https://user-images.githubusercontent.com/300046/104851985-729abb00-58b5-11eb-9713-84470116acf9.png">

CRAMM is an abbreviation of "C" for the UK government’s Central Computer and Telecommunications Agency (CCTA) Risk Analysis and Management Method. CRAMM reviews includes three steps:
   1. Identify and value assets.
   2. Identify threats and vulnerabilities and calculate risks.
   3. Identify and prioritize countermeasures.
   <br /><br />

A threat modeling program continually reassess the threat environment, including new adversaries, and proactively adapt their information security program. Threat modeling process:
   1. Decompose the application or infrastructure
   2. Determine the threats
   3. Determine countermeasures and mitigations
   4. Rank the threats
   <br /><br />

Costs include annual maintenance.


### Microsoft's STRIDE

Microsoft Threat Model Tool uses "STRIDE" as a mnemonic for classification of threats in an application:
   * Spoofing of user identity
   * Tampering of data, source code, or program binary code
   * Repudiation 
   * Information disclosure (privacy breach or data leak)
   * Denial of service (DoS)
   * Elevation of privilege
   <br /><br />

<a name="Dragos"></a>

### Threat Hunting - MITRE ATT&CK & Dragos

Since 2013, <a target="_blank" href="https://attack.mitre.org/">MITRE's ATT&CK</a> process looks at Tactics, Techniques, and Procedures (TTPs) for Enterprise IT. PROTIP: Click on the icon to the right of each item for additional info.

<a target="_blank" href="https://www.dragos.com/">Dragos</a> <a target="_blank" href="https://hub.dragos.com/hubfs/Whitepaper-Downloads/Mapping-Industrial-Cybersecurity-Threats-to-MITRE-ATTACK-for-ICS.pdf">PDF: ATT&CK for IoC</a> (Industrial Control Systems)

### Cyber Kill Chain: MITRE ATT&CK

<table border="1" cellpadding="4" cellspacing="0">
<tr><th><a target="_blank" href="https://attack.mitre.org/">MITRE</a>
   </th><th> <a href="#Dragos">Dragos ICS</a>
   </th></tr>
<tr valign="top"><td> 1. <strong>Reconnaissance</strong> 
   </td><td>-
   </td></tr>
<tr valign="top"><td> 2. Resource Development (new)
   </td><td>-
   </td></tr>
<tr valign="top"><td> 3. Initial Access [Intrusion]
   </td><td>1. Initial access
   </td></tr>
<tr valign="top"><td> 4. <strong>Execution</strong> [Exploitation]
   </td><td>2. Execution
   </td></tr>
<tr valign="top"><td> 5. Persistence [new]
   </td><td>3. Persistence
   </td></tr>
<tr valign="top"><td> 6. <strong>Privilege Escalation</strong>
   </td><td>-
   </td></tr>
<tr valign="top"><td> 7. Defense Evasion (Obfuscation Anti-forensics)
   </td><td>4. Evasion 
   </td></tr>
<tr valign="top"><td> 8. Credential Access
   </td><td>-
   </td></tr>
<tr valign="top"><td> 9. Discovery [new]
   </td><td>5. Discovery
   </td></tr>
<tr valign="top"><td> 10. <strong>Lateral Movement</strong>
   </td><td>6. Lateral Movement
   </td></tr>
<tr valign="top"><td> 11. Collection [new]
   </td><td>7. Collection
   </td></tr>
<tr valign="top"><td> 12. <strong>Command and Control</strong><br />[Denial of service]
   </td><td>8. Command and Control
   </td></tr>
<tr valign="top"><td> 13. <strong>Exfiltration</strong>
   </td><td>-
   </td></tr>
<tr valign="top"><td> 14. Impact [new]
   </td><td>9. Inhibit response function [+]<br />
      10. Impair process control [+]<br />
      11. Impact process
   </td></tr>
</table>

<hr />

<a name="Attackers"></a>

## Attackers

<a target="_blank" href="https://www.mandiant.com/resources/insights/apt-groups">Mandiant's list of known APT (Advanced Persistent Threat) actors</a>. AVT (Advanced Volatile Threat) 


<a name="Attacks"></a>

## Attacks

Attacks: attempts to violate an organization’s security or privacy: REMEMBER: 

Attacks are classified by the method and vector:
   * Method is how an attack is executed, or “the mechanism that was used”. Example: ransomware
   * Vector is how an attack is carried out, or “the course that was taken”. Example: email
   <br /><br />

<strong>Cryptoanalytic</strong> attacks try to deduce the key via brute force 
   * a dictionary of common passwords
   * a Rainbow Table - a very large set of precomputed hash values for every possible combination of characters that is able to reverse cryptographic hash functions
   <br /><br />

<strong>Cryptographic</strong> attacks: man-in-the-middle, replay, timing, radiation

   * A <strong>smurf</strong> attack uses a type of ping packet called an ICMP ECHO REQUEST. 
   * In a <strong>side-channel</strong> attack, the attacker gains information about the encryption algorithms from the cryptosystem that is implemented in the network.
   * Evesdropping (traffic analysis). Countermeasures are sending noise, padding messages, mix non-info in data.
   * In a <strong>known plaintext</strong> attack, an attacker uses the plaintext and ciphertext versions of a message to discover the key used.
   * In an <strong>analytic</strong> attack, an attacker uses known structural weaknesses or flaws to determine the algorithm used.
   * In a replay attack, an attacker monitors the traffic stream in a network and maliciously repeats or delays the transmission of valid data over the network.
   * A <strong>race condition</strong> causes processes to execute in a different order to affect the result.
   * A Time-Of-Check/Time-Of-Use (TOC/TOU) attack, also called <strong>asynchronous attack</strong>, interrupts a task and changes something to affect the result while the tasks occur in the correct order. A countermeasure is making critical sets of instructions atomic.
   * <strong>Emanations capturing</strong> is eavesdropping on wave frequencies to capture traffic.
   * A maintenance hook is a backdoor in an application that is designed by the application developers to perform maintenance tasks, which can enable code to be executed without the usual security checks. A countermeasure for maintenance hooks is code reviews. 
   * A buffer overflow transmits too much data to an application or operating system. A countermeasure for buffer overflows is input validation. 
   * A <strong>covert storage channel attack</strong> is when one process writes data to a hard drive and another process reads it. In this attack a higher-level subject writes data to a storage area and a lower-level subject reads it.
   * A <strong>land attack</strong> sends a spoofed TCP SYN packet with the target host’s IP address and an open port as both the source and the destination to the target host on an open port.
   * Network address hijacking reroutes data traffic from a network device to the attacker.
   * A ping of death attack floods target computers with oversized packets, causing the target computer to either freeze or crash.
   * In SMTP relay attacks outbound mail folders fill up with spam relayed through an email server.
   * A salami attack is when small changes to data are made over time.
   * Data diddling is when changes to data are made before and after an attack.
   <br /><br />

"Live off the land" malware have <a target="_blank" href="https://www.mcafee.com/enterprise/en-us/security-awareness/ransomware/what-is-fileless-malware.html">Low Observable Characteristics (LOC)</a>.
They are called "fileless". So they can evade traditional anti-virus signature detection. They can also continually evolve.

Bluejacking is when a user’s device gets paired with an attacker’s device, and the user’s device makes its data available for unauthorized access, modification, or deletion. Bluejacking enables the receipt of unsolicited photos or messages from a nearby device to another Bluetooth-enabled device, such as a smartphone. 

Bluesnarfing is also a Bluetooth attack, but it involves unauthorized pairing and access to the device.

Jamming is an attack on a wireless network that is performed by setting up a nearby access point and using a dedicated wireless jamming device to block Wi-Fi signals. 

An initialization vector (IV) is a fixed-size input of a random or pseudo-random value used with block cipher modes. Some Wi-Fi technologies are susceptible to IV attack, which uses passive statistical analysis. An IV is an input to a cryptographic algorithm, which is essentially a random number. Ideally, an IV should be unique and unpredictable. “It should be short” is incorrect because an IV attack can occur when the IV is too short. The attack is possible when the IV is not long enough, which means it has a high probability of repeating itself after only a small number of packets.

An evil twin is a wireless access point fraudulently installed to perform a man-in-the-middle attack and often used for eavesdropping. 

Maneuvering enables a security team to completely disrupt an attacker or quickly mitigate an attacker's ability to move across the attack chain. 

Intelligence fusion brings together internal and external threat feeds.

A zero-day attack or threat is a computer threat that tries to exploit computer application vulnerabilities that are unknown to others and possibly even the software developer.

Attacks to data and databases <a target="_blank" href="https://www.youtube.com/watch?v=YqFhKlzAABE&list=PLWqLeluv2Rq2jH70NFPYm0PB8sDMJ8gJR&index=27">VIDEO</a> [<a target="_blank" href="https://www.youtube.com/watch?v=-70DBd6cNDw&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=29&t=11s">MINDMAP</a>]
   * An <strong>inference attack</strong> is the development of a detailed version of an object from another object using different values in the new object, such as the difference between totals versus details allowed. A countermeasure is <strong>Polyinstantiation</strong> which prevents low-level database users from inferring the existence of higher-level data. It enables a relation to contain multiple tuples (rows) with the same primary keys, with each instance distinguished by a security level. [<a target="_blank" href="https://www.wikiwand.com/en/Inference_attack">WIKIPEDIA</a>]
   * A data contamination attack. Proper implementation of security levels is a countermeasure for data contamination. 
   <br /><br />

A <strong>breach</strong> is an attack that has been successful in reaching its goal. 

   * Means is how a criminal committed a crime.
   * Motive is why a crime is committed. 
   * Opportunity is when and where a crime occurred.
   * Exigent circumstances are when evidence might be destroyed.
   <br /><br />

Events: System-level, application-level, or user-level? REMEMBER
   * User-level events include Authentication attempts, command run, security violations. 
   * System-level events include logon attempts, logon IDs, logon attempts, Administration tools usage, user and client computer lockout, system performance, time/date, administration tools usage, and device usage.
   * Application-level events include files opened and closed, error messages, security violations, and file modifications.
   <br /><br />


<a name="Malware"></a>

### Malware (malicious software - malware):

See https://www.caida.org/research/security/code-red/
   
   * <strong>Password spraying</strong> is a horizontal brute-force online attack, where the attacker tries common passwords in conjunction with multiple usernames.
   * An <strong>offline attack</strong> occurs when the attacker does not interact with the authentication system because he/she has obtained a database of password hashes, such as %SystemRoot%\System32\config\SAM, %SystemRoot%\NTDS\NTDS.DIT (the Active Directory credential store), or /etc/shadow. 

   * A <strong>worm</strong> is memory-resident malware that can run without user intervention and replicate over network resources.
   * <strong>Fileless malware</strong> uses memory resident techniques to run in its own process rather than writing its code to disk.
   * A <strong>companion</strong> is a new file created with a similar name so users activate it.
   * A <strong>virus</strong> relies upon other application programs to execute itself and infect a system.
   * An armored virus includes protective code that prevents examination of critical elements, such as scans by antivirus software.

   * <strong>Spyware</strong> uses tracking cookies to collect and report on a user’s activities to the spyware programmer. 
   * A <strong>Trojan</strong> is malware disguised as a useful utility but embeds malicious code in itself. A symptom of a Trojan horse is that unknown software is using covert channels to perform malicious activities, such as deleting system files and planting a backdoor into a system. The term is based on the "Trojan horse" story where soldiers hid in a large wooden horse which the opposition pulled inside their gates. 
   * A <strong>RAT</strong> is a Remote Access Trojan backdoor malware that mimics the functionality of legitimate remote control programs, but operate covertly. It allows the threat actor to access the host, upload files, and install software or use "live off the land" techniques to effect further compromises. 
   * A host that is under malicious control is sometimes described as a "zombie".
   * A <strong>Macro</strong> is written into like VB in Excel.
   * <strong>Logic bombs</strong> are triggered by events such as a specific date.
   
   * <strong>PUPs/PUAs (Potentially Unwanted Programs/Applications)</strong> are installed alongside (bundled with) a package selected by the user, such as part of a new install of operating system (Ubuntu, printer, etc.)without active consent or consent from a purposefully confusing license agreement. Unlike a Trojan, the presence of a PUP is not automatically regarded as malicious, so it's sometimes described as <strong>grayware</strong>.
   * <strong>Adware</strong> is a software application that displays advertisements (which generates revenue) while the application is executing.
   <br /><br />

   * Multipartite spreads in different ways
   * Polymorphic can change to avoid detection.
   <br /><br />

## DREAD Risk ratings

REMEMBER: DREAD is a mnemonic for categories used to rate security threats for a given issue:
   * Damage
   * Reproducibility
   * Exploitability, such as allowing RCE (Remote Control Execution)
   * Affected users
   * Discoverability
   <br /><br />

Each category is given a rating from 1 to 10. The sum of all ratings is used to prioritize among different issues.

<a name="CVSS"></a>

## CVSS

* Attack vector
* Attack complexity
* Privileges required
* User interaction
* Scope

<a name="CIS"></a>

## CIS (Center for Internet Security)

<a target="_blank" href="https://learn.cisecurity.org/cis-controls-download">CIS Controls</a> (at v8 at time of writing) presents 18 must-have controls for cybersecurity.

https://www.networkworld.com/article/2992503/sans-20-critical-security-controls-you-need-to-add.html

Control 1: Inventory and control of enterprise assets

Actively manage inventories, track, and correct all end-user devices, including portable and mobile; network devices; non-computing/Internet of Things (IoT) devices; and servers that connect to the infrastructure physically, virtually, remotely, and those within cloud environments. The inventory helps identify devices to remove or remediate.

Control 2: Inventory and control of software assets

Actively inventory, track, and correct all operating systems and applications on the network to spot and block unauthorized and unmanaged software so that only authorized software is installed and can execute.

Control 3: Data protection

Identify, classify, securely handle, retain, and dispose of data.

The ideal for this is to put data of the same sensitivity level on the same network and isolated from data with other sensitivity levels. Firewalls would control access to each segment, and access would be granted only to users with a business need to access them.

Control 4: Secure configuration of assets and software

Secure configuration of end-user devices, including portable and mobile; network devices; non-computing/IoT devices; servers; operating systems and applications should be established, stored, and maintained. Installing VPNs in front of servers and using DNS servers that are controlled by the enterprise are recommended.

Contol 5: Account management

This recommends using processes and tools to manage authorization to enterprise assets and software. These include administrator and service accounts. One recommendation calls for restricting administrator privileges to dedicated administrator accounts and granting those privileges only to those who actually administer network assets. These admins should also have separate accounts that they use for accessing email, web  browsing and productivity apps.

Control 6: Access-control management

Enterprises should use processes and tools to create, assign, manage, and revoke access credentials and privileges for user, administrator, and service accounts for enterprise assets and software. Role-based access should be assigned to each account based on need-to-know, least privilege, privacy requirements, and separation of duties.

Control 7: Continuous vulnerability management

Vulnerabilities should be continuously assessed and tracked on enterprise infrastructure so they can be remediated in a timely fashion that minimizes the window of opportunity for attackers to exploit them. Public and private industry sources of new threat and vulnerability information should be used to help this process.

Control 8: Audit log management

Audit logs should be collected, reviewed and retained to document events and help detect, understand, and recover from attacks. Logs can show when and how attacks occur, what information was accessed, and if data was exfiltrated. Retention of logs is critical for follow-up investigations or to understand attacks that remain undetected for a long period of time.

Control 9: Email and web browser protections

Improve protections and detections of email and web threats that can manipulate human behavior through direct engagement; these are prime targets for both malicious code and <a href="#SocialEngineering">social engineering</a>. Safeguards include the use of DNS-filtering services to reduce exposure and enforcement of network-based URL filters.

Control 10: Malware defenses

Prevent or control the installation, spread, and execution of software on enterprise assets, using methods that include anti-malware software on all enterprise assets, scanning for malware on removable media such as thumb drives, and enabling anti-exploitation features “such as Microsoft® Data Execution Prevention (DEP), Windows® Defender Exploit Guard (WDEG), or Apple® System Integrity Protection (SIP) and Gatekeeper™.”

Control 11: Data recovery

Data-recovery practices sufficient to restore in-scope enterprise assets to a pre-incident and trusted state. Because configuration changes can create vulnerabilities for attackers to exploit, it is important to have recent backups to recover enterprise assets and data back to a known trusted state.

Control 12: Network infrastructure management

Track, report, and correct network devices, to prevent attackers from exploiting network services and points of access. The infrastructure includes physical and virtual gateways, firewalls, wireless access points, routers, and switches. These measures should address vulnerabilities that can be introduced by using default settings, monitoring for changes, and reassessing current configurations. One example is running the latest stable release of software or using currently supported network-as-a-service (NaaS) offerings.

Further, enterprises should maintain network diagrams and other system documentation, and review and update them annually. Computing resources used for administrative tasks should be physically or logically separated from the primary enterprise network and isolated from internet access.

Control 13: Network monitoring and defense

Comprehensive network monitoring and defenses against threats should be established, including intrusion detection, traffic filtering between network segments, and deploying port-level controls such as those supported by 802.1x authentication.


Network segmentation and isolation are different. 
Network segmentation primarily uses VLANs to segment network traffic and does not place restrictions based on applications, ports, or data. 
Segmentation decisions are made a Layer 2 (Data Link) of the OSI Model.

Network isolation is much more secure and is a requirement to restrict lateral movement within the network.
When configured properly, it only permits network traffic that is explicitly required and authorized for organizational operations. Network isolation can be implemented to work at all layers of the OSI model, but can me more difficult to manage because the organization will need an intimate understanding of the network, the systems on the network, and the applications on the systems on the network. Thus, Network isolation requires data flow diagrams and is part of a Zero Trust Architecture (or ZTA).


Control 14: Security-awareness and skills training

A security awareness program should be established create security consciousness among the workforce and provide them the skills to reduce cybersecurity risks.

Control 15: Service provider management

A process to evaluate service providers who hold sensitive data or are responsible critical enterprise-IT platforms or processes should be set up to ensure they are providing appropriate protection. Enterprises should set requirements for service providers, which might include minimum security programs, security incident and data-breach notification and response, data-encryption requirements, and data-disposal commitments. Enterprises should review service provider contracts annually to ensure they include the requirements.

Control 16: Application software security

Manage the security life cycle of in-house developed, hosted, or acquired software to prevent, detect, and remediate security weaknesses before they affect the enterprise. Organizations should also use standard, industry-recommended configuration templates to harden underlying servers, databases, and web servers. This also applies to cloud containers, platform-as-a-service components, and SaaS components.

Control 17: Incident-response management

Key roles and responsibilities should be assigned for incident response, including staff from legal, IT, information security, facilities, public relations, human resources, incident responders, and analysts, as applicable. The plan should be review annually or when significant enterprise changes occur that could affect incident response.

RMF Incident Response severity/priorities:
* CAT 0 - Exercise/network defense testing
* CAT 1 - *Unauthorized access
* CAT 2 - *Denial of Service (DoS)
* CAT 3 - *Malicious code
* CAT 4 - *Inappropriate usage
* CAT 5 - Scans/probes/attempted access
* CAT 6 - Investigation
<br /><br />


Control 18: Penetration testing

A penetration testing program should simulate the actions of an attacker to identify and exploit weaknesses among people, processes, and technology. The program should be appropriate to the size, complexity, and maturity of the enterprise. Vulnerabilities should be remediated based on the enterprise’s policy for remediation scope and prioritization.


## Models & Lifecycles

Focus of security awareness training:
   * Senior management: risk to the organization and the laws and regulations that affect the organization.
   * Middle management: policies, standards, baselines, guidelines, and procedures that affect security. 
   * Technical staff: configuring and maintaining security controls, including how to recognize an attack when it occurs. 
   * Regular staff: responsibilities regarding security for performing day-to-day tasks in a secure manner. 
   <br /><br />

<a target="_blank" href="https://www.ferma.eu/">FERMA (Federation of European Risk Management Associations)</a> provides guidelines for managing risk in an organization.

The "PASTA" methodology provides a seven-step process for analyzing applications to align business objectives and technical requirements. This method provides a threat identification, enumeration, and scoring process. It is intended to provide an attacker-centric view of the application and infrastructure from which defenders can develop an asset-centric mitigation strategy.

<a target="_blank" href="https://www.isaca.org/resources/isaca-journal/issues/2017/volume-4/enterprise-security-architecturea-top-down-approach">
SABSA, COBIT and TOGAF together make up the Enterprise Security Architecture</a>:

<a name="TOGAF"></a>
The Open Group Architecture Framework (TOGAF) is an enterprise architecture framework that is based on four interrelated domains: technology, applications, data, and business. They have a certification on that.

<a name="SABSA"></a>
Sherwood Applied Business Security Architecture (SABSA) is a framework in addition to a methodology in that it prescribes the processes to follow to build and maintain the architecture. It uses the six communication questions (What, Where, When, Why, Who, and How) that intersect with six layers (operational, component, physical, logical, conceptual, and contextual). The SABSA (Sherwood Applied Business Security Architecture) is a "customizable" framework and methodology for enterprises,   based on business requirements (like NIST for private businesses). The framework uses six communication questions (What, Where, When, Why, Who, and How) that intersect with six layers of Enterprise Security Architecture (ESA) (operational, component, physical, logical, conceptual, and contextual):

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/89186535-29e68400-d559-11ea-9532-ac57a3f6d306.png"><img width="682" alt="cyber-scaba-matrix" src="https://user-images.githubusercontent.com/300046/89186535-29e68400-d559-11ea-9532-ac57a3f6d306.png"></a>

COBIT: Auditors' <a target="_blank" href="https://lnkd.in/geuZZpi/">Control Objectives for Information and Related Technology (COBIT)</a> is a set of control objectives used as a framework for IT governance.

   1. Provide stakeholder value
   2. Holistic approach [end-to-end]
   3. Dynamic governance system
   4. Governance distinct from management
   5. Tailored to enterprise needs
   6. End-to-end governance system
   <br /><br />

The Zachman Framework is a two-dimensional model that intersects communication interrogatives (What, Why, Where, and so on) with various viewpoints (Planner, Owner, Designer, and so on). 

The ISO/IEC 27000 Series establishes information security standards published jointly by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC). 

The Trike methodology is an implementation model created and then analyzed to produce a threat model. Risk values are assigned to the identified threats. 
Mitigating controls are assigned to the vulnerabilities that lead to the identified threats.

Security program life cycle:
   1. Plan and Organize
   2. Implement
   3. Operate and Maintain
   4. Monitor and Evaluate
   <br /><br />

   * Stakeholder refers to any individuals, teams, and departments, including groups outside the organization, with interests or concerns that should be considered.
   * View refers to the representation of the system from the perspective of a stakeholder or a set of stakeholders.
   * Viewpoint is a template used to develop individual views that establish the audience, techniques, and assumptions made. 
   * Architecture describes the organization of the system, including its components and their interrelationships along with the principles that guided its design and evolution. 
   * Architectural description (AD) refers to the set of documents that convey the architecture in a formal manner.
   <br /><br />

Software Capability Maturity Model (SCCM) - REMEMBER: Memonic: I Read Data Maps Online:

   1. <strong>Initial</strong> (chaotic, ad hoc, individual heroics) - the starting point for use of a new or undocumented repeat process.
   2. <strong>Repeatable</strong> - process is at least documented sufficiently such that repeating the same steps may be attempted.
   3. <strong>Defined</strong> - the process is defined/confirmed as a standard business process.
   4. <strong>Managed/Capable</strong> - the process is quantitatively managed in accordance with agreed-upon metrics.
   5. <strong>Optimized</strong> - process management includes deliberate process optimization/improvement.
    <br /><br />

Like the Capability Maturity Model Integration (CMMI) addresses development, services, and acquisitions. 

Process improvement approaches:

   * Six Sigma includes methodologies DMAIC (Define, Measure, Analyze, Improve existing, Control process) or DMADV (Define, Measure, Analyze, Design, Verify new customer)

   * Control Objectives for Information and Related Technology (COBIT) is a security controls development framework that uses a process model to subdivide IT into four domains: 1) Plan and Organize (PO), 2) Acquire and Implement (AI), 3) Deliver and Support (DS), and 4) Monitor and Evaluate (ME).

   * Department of Defense Architecture Framework (DoDAF) is an architecture framework that organizes a set of products under eight viewpoints: Capability Viewpoint (CV), Data and Information Viewpoint (DIV), Operation viewpoint (OV), Project Viewpoint (PV), SerViCes Viewpoint (SvcV), STanDards Viewpoint (STDV), and Systems viewpoint (SV), All Viewpoint (required) (AV).

   * British Ministry of Defense Architecture Framework (MODAF) is an architecture framework that divides information into seven viewpoints: Strategic Viewpoint (StV), Operational Viewpoint (OV), Service-Oriented Viewpoint (SOV), Acquisition Viewpoint (AcV), Technical viewpoint (TV), Systems Viewpoint (SV), All viewpoint (AV).

   * DHS (Department of Homeland Security) is involved in promoting <a target="_blank" href="https://flylib.com/books/en/2.845.1.97/1/">software security best practices</a>. Its <a target="_blank" href="https://us-cert.cisa.gov/bsi">Build Security In (BSI) initiative</a> promotes a process-agnostic approach that makes security recommendations with regard to architectures, testing methods, code reviews, and management processes.
   ![cyber-sec-bsi-500x331](https://user-images.githubusercontent.com/300046/117125753-2f2a6680-ad57-11eb-8042-d305bd727855.jpg)

System Development Life Cycle:
   1.   Initiate
   2.   Acquire/Develop
   3.   Implement
   4.   Operate/Maintain
   5.   Dispose
   <br /><br />

Security program lifecycle:
   1. Plan and organize
   2. Implement
   3. Monitor and evaluate (review audit logs)
   4. Operate and Maintain (perform audits)
   <br /><br />

IDEAL model: REMEMBER MEMONIC: I Do Every exAm Live
   1. Initiating - provide business reasons behind change
   2. Diagnosing - need for changes by analysing current state
   3. Establishing - plan of action from recommendations
   4. Acting - develop, test, refine, implement solutions
   5. Learning - analyzing results and proposing new actions
   <br /><br />

Information life cycle:
   1. Create/receive
   1. Distribute
   1. Use
   1. Maintain
   1. Dispose/store
   <br /><br />

The process of acquiring software:
   1.   Planning: During this phase, the organization performs a needs assessment, develops the software requirements, creates the acquisition strategy, and develops evaluation criteria and a plan.
   2.   Contracting: Once planning is complete, the organization creates a request for proposal (RFP) or other supplier solicitation forms, evaluates the supplier proposals, and negotiates the final contract with the selected seller.
   3.   Monitoring and accepting: When a contract is in place, the organization establishes the contract work schedule, implements change control procedures, and reviews and accepts the software deliverables.
   4.   Follow-up: When the software is in place, the organization must sustain the software, including managing risks and changes. At some point, it may be necessary for the organization to decommission the software.
   <br /><br />

Change control process of each change:
   1. requested. 
   2. approved. 
   3. documented in the change log. 
   4. tested and presented. 
   5. implemented. 
   6. reported to management (CCB)
   <br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=LGqZbiitiDw&t=5m">VIDEO</a>: REMEMBER picmonic: Incident response process: DRMRRRL (drumroll)
   1. Detect (identify) using monitoring tools, IPs, firewalls, users, notifications
   2. Respond (triage) in decision to declare a real incident
   3. Mitigate (correction & containment) with malware - disconnect device
   4. Report the incident to relevant stakeholders (legal, customers, regulatory)
   5. Recover (return to normal) from the incident.
   6. Remediate (root cause) so all components affected by the incident to ensure that all traces of the incident have been removed.
   7. Lessons Learned review of the incident and document all findings (to prevent reccurence)
   <br /><br />

Types of Network intrusion systems:
   * Network-based Intrusion Detection System (NIDS) - Monitors the network and alerts to potential malicious traffic. 
   * Network-based Intrusion Prevention (NIPS) - Monitors the network and blocks potentially malicious traffic.
   
   * Host-based Intrusion Detection (HIDS) - Monitors the host and alerts to potential malicious activity.
   * Host-based Intrusion Prevention (HIPS) - Monitors the host and blocks potentially malicious activity.

<a name="IR"></a>

### Incident response:

   1. Triage: The incident response team examines the incident to see what was affected and sets priorities. 
   1. Investigation: Involves the collection of relevant data.
   1. Containment: The damage is mitigated or contained.
   1. Analysis: Where the <strong>root cause</strong> of the incident is discovered.
   1. Tracking: Where the <strong>source</strong> (user or device) of the incident is determined.
   1. Post-mortem review: Record lessons learned.
   1. Recovery: Necessary adjustments or enhancements are made to policies and procedures.
   <br /><br />

Alternately:
   1. Preparation – the preparatory activities related to incident response, such as policy and procedures, and hiring an adequately skilled IR team.
   1. Detection – intake and incident discovery.
   1. Analysis – looking at the evidence of a reported potential incident.
   1. Response – has containment, eradication, and recovery (NIST 800-61).
   1. Mitigation – has containment and eradication.
   1. Reporting – notifying management that systems are ready for normal operations.
   1. Recovery and remediation – recovery is going back to normal operations, and remediation is taking care of other areas that may be vulnerable.
   1. Review and improvement – this is the lessons learned step.
   <br /><br />

   See ASD (Australian) Mitigations

Forensic investigation process: REMEMBER: 
   1. Identification - start action log, reviewing audit logs, monitoring systems, analyzing user complaints, analyzing detection mechanisms, signature resolution.
   2. Preservation - chain of custody standards, imaging technologies, and time synchronization. All while folling chain of custody standards.
   3. Collection - making system images, implementing chain of custody, documenting the evidence, and recording timestamps. Data reduction.
   4. Examination determining and documenting characteristics, such as timestamps and identification properties. Examination includes traceability, validation techniques, filtering techniques, pattern matching, hidden data discovery, and hidden data extraction. After the evidence has been fully analyzed using scientific methods, the full incident should be reconstructed and documented.
   5. Analysis
   6. Presentation
   7. Decision
   <br /><br />

Order evidence should be saved: REMEMBER: ephemeral first
   1. Memory contents
   2. Swap files
   3. Network processes
   4. System processes
   5. File system information
   6. Raw disk blocks
   <br /><br />

### Cohesion is opposite of Coupling

   * <strong>Low cohesion</strong> describes a module that carries out <strong>many tasks</strong>, making it harder to maintain and reuse.
   * High cohesion describes a software module that does NOT affect many other modules, so is easier to update.

   * <strong>High coupling</strong> describes a module that must <strong>interact with many other modules</strong>.
   * Low coupling describes a module that performs its job without using other modules.
   <br /><br />

ACID properties: REMEMBER: MEMONIC: Analysts Can Interpret Data
   * Atomicity - either all operations are complete or changes are rolled back. 
   * Consistency - transaction follows an integrity process that ensures that data is consistent in all places where it exists. 
   * Isolation - transaction separately from each other, does not interact with other transactions until completion.
   * Durability is present when, once verified, the transaction is committed and cannot be rolled back. 
   <br /><br />

Polyinstantiation is a process used to prevent data inference violations. 

Relationship cardinality means whether a relationship is one-to-one, many-to-one, or many-to-many.
High cardinality means a high number of distinct (unique) values in a table column, relative to the number of rows in the table. 

Aggregation is a database security concern that arises when a user does not have complete access to sensitive data but can access portions of it. 

The domain of a relation is the set of allowable values that an attribute can take, composed of values that can be entered in a column (attribute) of a table (relation).

WASC (Web Application Security Consortium) is an organization that provides best practices for web-based applications along with a variety of resources, tools, and information that organizations can make use of in developing web applications.

To establish a relationship with a third party which accesses organizational assets both remotely and locally:
   1. Perform a risk assessment on the third party’s network, to determine its compliance with organizational security policies and standards.
   2. Establish a written security policy with the third party. 
   3. Provide access to internal resources for the third-party personnel.
   4. Audit the third party’s access to internal resources.
   <br /><br />

Types of control function:
   * Preventive - Reduces the probability or impact of a threat, like firewalls.
   * Detective - dentifies attacks as they happen, like surveillance.
   * Corrective - Controls how the system responds to an ongoing attack, like system patches.
   * Deterrent - Keeps attackers away from the system, like least privilege.
   * Recovery - Recovers system from an attack, like backups.
   <br /><br />

   Examples:
   * A DBMS is a technical control.
   * Operational controls: backup control, software testing, anti-virus, 
   * Data backups are recovery <strong>logical controls</strong>. 
   * Recovery administrative controls do NOT include data backups. 
   * Server images are both corrective and technical controls.
   * Disaster recovery plans are recovery administrative controls. 
   * Job rotation and background checks are <strong>detective administrative controls</strong>.
   <br /><br />

Risk Resolution:
   * <strong>Avoid</strong> - The part of the system containing the issue will be cut.
   * <strong>Reduce</strong> - Issue will be addressed with bug fixes or redesign to reduce or eliminate threat impact and severity.
   * <strong>Transfer</strong> - Issue will be handled by another system or team.
   * <strong>Accept</strong> - (without a resolution). Based on threat severity.
   <br /><br />

<strong>Resilience</strong> is the ability of a system, device, or data center to recover quickly and continue operating after an equipment failure, power outage, or other disruption. It involves the use of redundant components or facilities.

DRP (Disaster Recovery Plan) defines "how" - implemented when the emergency occurs and includes the steps to restore functions and systems. Includes identification of specific hardware.
DRP lifecycle phases:
   1. BIA (Business Impact Analysis) is a functional analysis of critical and necessary business functions, their resource dependencies, and their level of criticality to the overall organization. Risks. Minimum Operating Requirements (MOR)
   2. Define strategies
   3. Define Plans and Procedures
   4. Train users
   5. Exercise the plan
   6. Review and update the plan

   * OEP (Occupant Emergency Plan) - a facility-based plan focused on safety and evacuation
   * The BCP (business continuity plan) defines "what" -- considers all aspects that are affected by a disaster, including functions, systems, personnel, and facilities, and lists and prioritizes the services that are needed. 
   * A contingency plan provides instruction on what personnel should do until the functions and systems are restored to full  functionality. 
   * A CCP (Crisis Communication Plan)
   <br /><br />

Strategies:
   * Backup & restore - cheapest  and slowest
   * Pilot Light      - cheap     but faster
   * Warm Standby     - costly    but quicker to recover
   * Active/Active    - expensive but quickest recovery time

DRP activation:
   1. Mitigation
   2. Preparation (for preparedness)
   3. Response (activation, execution)
   4. Recovery toward normalcy
   <br /><br />

Metrics defined by BIA (Business Impact Assessment): REMEMBER: MTD <= RTO + WRT
   <a target="_blank" href="https://www.youtube.com/watch?v=oAjNL3I_3-E&t=4m"><img alt="cyber-sec-bia-terms-581x239" width="581" src="https://user-images.githubusercontent.com/300046/104836718-0ac08200-586d-11eb-8ea9-c67720e58e4f.png"></a>

   1. Identify Essential Services & Dependencies
   2. Determine <strong>MTD</strong> (Maximum Tolerable Downtime) = Max. total time process can be disrupted
   3. Determine <strong>RPO</strong> (Recovery Point Objective) = Maximum tolerable <strong>data</strong> loss period
   4. Identify infrastructure and Dependencies
   5. Determine current RPO & <strong>RTO</strong> (Recovery Time Objective) = Recovery <strong>time</strong> to a defined service level, including <strong>WRT</strong> (Work Recovery Time) = Max. time to verify integrity of systems & data
   6. Gap Analysis
   7. Report to management    
   <br /><br />

   * Mean time to repair (MTTR) is the average amount of time it takes to get a device fixed and back online. 
   * Mean time between failure (MTBF) describes how often a component fails on average.
   <br /><br />

Roles:
* System owners are responsible for the systems on which data resides. 
* Data owners own the data 
* Data custodian configures the appropriate permissions for user access to the data, 
* System owner determines the parameters that govern the system, such as what types of data and applications can be stored on the system, who owns the data and applications, and who determined the users that can access the data and applications.


Dedicated security mode employs a single classification level.

"system integrity" implies that a system will work as intended.

REMEMBER: Aspects of identity management whereby users are identified, authenticated, and authorized: 
entities, attributes, credentials, and entitlements.

[<a target="_blank" href="https://www.youtube.com/watch?v=WqHmDL7YAvw&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=4">MINDMAP</a>] <a target="_blank" href="https://www.youtube.com/watch?v=_IfGEY4fo18">Trusted Computer System Evaluation Criteria (TCSEC)</a> functionality at least once. Enhanced by EU in ITSEC to assurance every time:
   * F6 + E6 = A1 = Mathamatically Verified protection
   * F5 + E5 = B3 = Mandatory Protection (military) resistant to penetration attempts.
   * F4 + E4 = B2 = Structured Protection (military)
   * F3 + E3 = B1 = Mandatory Protection (military)
   * F2 + E2 = C2 = Controlled access protection
   * F1 + E1 = C1 = Discretionary Protection (commercial)
   * &nbsp;&nbsp;&nbsp;&nbsp;E0 = D&nbsp; = Minimal Protection
   <br /><br />

Covert channel analysis is introduced at B2 and above.


Security controls from requirements:

### Common Criteria

ISO 15408 2005 = Common Criteria on TOE (Target of Evaluation) for Security Target report satisfies independently verified by the NIAP (National Information Assurance Partnership).

Previous EAL (Evaluation Assurance Levels) 1 - 7 highest: REMEMBER:
   * EAL1 = Functionally tested
   * EAL2 = Structurally tested
   * EAL3 = Methodically tested and checked
   * EAL4 = <strong>Methodically designed</strong>, tested, and reviewed
   * EAL5 = Semi-formally designed and tested
   * EAL6 = <strong>Semi-formally verified</strong>, designed, and tested
   * EAL7 = <strong>Formally</strong> verified, designed, and tested
   <br /><br />

Now "compliant" levels instead:
   1. Users want the system to operate but ignores security threats.
   2. Developers use good design practices but security is not a high priority.
   4. Security configuration is based on good commercial development. This level is the common benchmark for commercial systems, including operating systems and products.
   5. Security is implemented starting in early design. Provides high levels of security assurance.
   6. Specialized security engineering provides high levels of assurance. Highly secure from penetration attackers.
   7. Extremely high levels of security are provided. This level requires extensive testing, measurement, and independent testing.
   <br /><br />

## Security Models

<a target="_blank" href="https://www.youtube.com/watch?v=LGqZbiitiDw&t=15m32s" title="CISSP Memorization Tips and Techniques (ultimate guide) by Jan 25, 2021">REMEMBER</a> <a target="_blank" href="https://www.youtube.com/watch?v=qZB6_lp9M30&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=3">VIDEO</a>: <a target="_blank" href="https://www.youtube.com/watch?v=FRi73kodf_c&list=PLWqLeluv2Rq2jH70NFPYm0PB8sDMJ8gJR&index=2">2</a>,<a target="_blank" title="2016" href="https://www.youtube.com/watch?v=4esHgEOmTqU&list=PLWqLeluv2Rq2jH70NFPYm0PB8sDMJ8gJR">3</a> 
   * The <a target="_blank" href="https://www.wikiwand.com/en/Bell%E2%80%93LaPadula_model">Bell-LaPadula (BLP) model</a> focuses on data confidentiality and controlled access to classified information. It uses a state machine with transition functions to control information flow, characterized by the phrase "write up, read down" (WURD). MEMONIC: Bell. It uses security labels (Top Secret to Public). It was the first mathematical model of a multilevel system for enforcing access control. Not dynamic. It's a multilevel security model because it allows simultaneous processing of classified information across the security levels.
   
   * The Brewer-Nash (Chinese Wall) model introduced the concept of allowing <strong>dynamic</strong> access controls based on a user’s previous actions (conflicts of interest). Based on RBAC.

   * The <a target="_blank" href="https://www.wikiwand.com/en/Clark%E2%80%93Wilson_model">Clark-Wilson integrity model</a> concerns itself with data integrity by allowing data to be altered only through programs and not directly by users.

   * The Lipner model shares characteristics with the Clark-Wilson model in that it separates objects into data and programs.

   * The Biba Integrity Model describes rules for the protection of data integrity. 

   * Graham-Denning model

   * HRU (Harrison-Ruzzo-Ullman) uses ACL matrix of subject roles with columns of objects.

   * The Take-Grant model is represented as a directed graph, called a protection graph. The subjects and objects of the computer system are the vertices and the access rights of subjects to objects are represented by arcs.

   * The Goguen-Meseguer model is the foundation of the noninterference model. With this model, the list of objects that a subject can access is predetermined.

   * The Sutherland model defines a set of system states, initial states, and state transitions. Using these predetermined secure states, the Sutherland model maintains integrity and prohibits interference.
   <br /><br />

## TCB RMC

The TCB (Trusted Computer Base) [<a target="_blank" href="https://www.youtube.com/watch?v=fwU7n_3h058&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=5">MINDMAP</a>] comprises the components (hardware, firmware, and/or software) that are trusted to enforce the security policy of the system that, if compromised, jeopardize the security properties of the entire system.

The RMC <strong>Reference monitor Concept</strong> has active Subject and passive Object, with Rules component enforces access controls on an object.

   * A PLD (programmable logic device) is an integrated circuit with connections or internal logic gates that can be changed through a programming process. 
   * A FPGA (field-programmable gate array) is a type of PLD that is programmed by blowing fuse connections on the chip or using an antifuse that makes a connection when a high voltage is applied to the junction.
   * Flash memory is a type of electrically programmable ROM.
   * Firmware is a type of ROM where a program or low-level instructions are installed.
   <br /><br />

Multithreading allows multiple tasks to be performed within a single process. A thread is a self-contained sequence of instruction that can execute in parallel with other threads that are part of the same process. Multithreading is often used in applications to reduce overhead and increase efficiency.

Multitasking ...

A <strong>protection domain</strong> is memory space isolated from other running processes in a multiprocessing system. 

State machine models: 
   * A state machine model examines every possible state the system could be in and ensures that the system maintains the proper security relationship between objects and subjects in each state.
   * The multilevel lattice and information flow model types focus mainly on information flow. The multilevel lattice model was developed mainly to deal with confidentiality issues, and the information flow model focuses on controlling information flows that relate two versions of the same object. 
   * A non-interference model is less concerned with the flow of information and more concerned with a subject’s knowledge of the state of the system at a point in time; it concentrates on preventing the actions that take place at one level from altering the state presented to another level.
   * A matrix-based model organizes tables of subjects and objects indicating what actions individual subjects can take upon individual objects.
   <br /><br />


<hr />

## Cryptography

[<a target="_blank" href="https://www.youtube.com/watch?v=LLRaa0kOMDM&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=8">MINDMAP</a>]

Cryptographic key life cycle: 
   1. Creation 
   2. Initialization 
   3. Distribution 
   4. Activation

   5. Inactivation 
   6. Termination
   <br /><br />

  PROTIP: Creation before Initialization; Activation after Distribution.

Cipher strategies:
   * <strong>Substitution</strong> exchanges one byte in a message for another. The key is the shift pattern, as in the "Caesar cipher".

   * A <strong>running key cipher</strong> uses a physical component, usually a book, to provide the polyalphabetic characters. All the other options are substitution ciphers.

   * <strong>Confusion</strong> substitutes <strong>values</strong> during each round of encryption, on the entire key. As in RC4 stream ciphers.

   * <strong>Transposition</strong> shuffles or <strong>reorders</strong> plaintext to another place in the block. The key is the transposition code. 
   * <strong>Diffusion</strong> changes the order/location of plaintext within the ciphertext through multiple rounds, for block ciphers. Dissipates redunancy such as "u" after "q".

   * Key stretching to output an enhanced (stronger) key
   <br /><br />

A <strong>salt</strong> is a non-secret, random value that's used to ensure that the same plaintext will not consistently hash to the same output value; 
A salt is used to prevent pre-computation attacks such as <strong>Rainbow Tables</strong> (hash of passwords).

A <strong>nuonce</strong> ("number used once") is typically used to prevent replay attacks. 
A nounce is typically a randomly generated value associated with a message in a cryptographic scheme, and must be unique within some specified scope (such as a given time interval, or a session). 

Steganography:
   * Distortion techniques are when the knowledge of original cover in the decoding process is essential at the receiver side. 
   * Least significant bit steganography is when some or all the bits or bytes inside an image are replaced with bits of the secret message. quality of the image is degraded. 
   * Transform domain techniques are when secret information is embedded in the <strong>frequency domain</strong> of the signal. 
   * Statistical methods encode information by changing several statistical properties of a cover.
   * Linguistic steganography hides a message in a nonobvious way like within another file. 
      * Visual and text semagrams hide a message using signs or symbols that look innocuous. 
      * Open codes, which include jargon code and covered ciphers, hide a message in a legitimate looking carrier, sometimes called overt communication.
   <br /><br />

   * The payload is the message that is hidden.
   * The <strong>cover medium</strong> is the file or object before the message is hidden within it.
   * <strong>stego medium</strong> is the file or object after the message has been hidden.
   * The <strong>carrier</strong> is the method of transmitting the stego medium (Email, Instagram, Facebook).
   <br /><br />

* Due care means an organization has taken the necessary steps to protect the organization, its resources, and personnel. 
* Due diligence means an organization has evaluated information to identify vulnerabilities, threats, and issues related to risk. 
<br /><br />


Model:
   * A state machine model examines every possible state the system could be in and ensures that the system maintains the proper security relationship between objects and subjects in each state.
   * The non-interference model is less concerned with the flow of information and more concerned with a subject’s knowledge of the state of the system at a point in time; it concentrates on preventing the actions that take place at one level from altering the state presented to another level.
   * The matrix-based model organizes tables of subjects and objects indicating what actions individual subjects can take upon individual objects. 
   * The multilevel lattice model was developed mainly to deal with confidentiality issues and focuses mainly on information flow. 
   * The information flow model focuses on controlling information flows that relate two versions of the same object.
   <br /><br />


Ciphers:
   * A concealment cipher occurs when plaintext is interspersed somewhere within other written material. Also called "Null" cipher.
   * Vigenere cipher <a target="_blank" href="https://www.youtube.com/watch?v=SkJcmCaHqS0">VIDEO</a> was used by US Confederates using a brass cipher disk. It aims to defeat simple frequency analysis.

   * A running key cipher uses a physical component, usually a book, to provide the polyalphabetic characters. 
   * Enigma
   * "Lucifer" was created by IBM and used a <a target="_blank" href="https://www.youtube.com/watch?v=FGhj3CGxl8I">Feistel cipher</a> a framework to build ciphers. based on DES. Used by TwoFish. Its innovation is decryption.
   <br /><br />

   Kerckhoff’s Principle - the only safe part is the key.

* discrete logarithms ??  https://crypto.stanford.edu/pbc/notes/crypto/factoring.html

REMEMBER Algorithms: https://competitions.cry.yp.to/aes.html

http://thedigitalstandard.blogspot.com/2009/11/why-fuzzy-hashing-is-really-cool.html

https://www.thesslstore.com/blog/how-do-digital-signatures-work-a-look-at-how-a-pki-signature-works/

<strong>Hashing</strong> digital signatures: 
   * MD5 (128-bit)
   * RIPEMD-160 (originally based on MD4, obsoleted)
   * SHA-1 by NSA (160 bit), SHA-256, 384, 512 <a target="_blank" href="https://www.youtube.com/watch?v=stf9UlkYYn0&list=PLBpnwlO9U5unYmbZp2DJETNOHg8s_yW37&index=76">VIDEO QUIZ</a>
   * Whirlpool 512 hash
   <br /><br />

Cryptographically strong hash algorithm:
   * Argon2id
   * scrypt
   * bcrypt
   * PBKDF2
   <br /><br />

<strong>Symmetric</strong> encryption algorithms (same key for encrypt/decrypt, so one time), use a private or secret key that must remain secret between the two parties. It provides confidentiality but NOT authentication or nonrepudiation.
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Data_Encryption_Standard">DES</a> uses a 64-bit block size. 56 bits.
   * 3DES, 
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard">AES (Rijndael)</a>, 
   * <a target="_blank" href="https://en.wikipedia.org/wiki/RC5">RC5</a>/RC6, 
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Skipjack_(cipher)">Skipjack cipher</a> by NSA Clipper chip in phones. Uses 80-bit key on 64-key blocks.
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Blowfish_%28cipher%29">Blowfish</a> 32 - 448 bits on 64-bit block size. Uses hex digits of Pi.
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Twofish">Twofish</a> (written by Bruce Sheiner) have key size 128-, 192-, 256 bits and block size of 128 bits.
   * SAFER, CAST-128, 
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Serpent_%28cipher%29">Serpent</a>
   * <a target="_blank" href="https://en.wikipedia.org/wiki/ElGamal_encryption">El Gamal</a> (slowest)
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Tiny_Encryption_Algorithm">TEA (Tiny Encryption Algorithm)</a> has 128 bit keys. Presented in Cambridge 1994.
   <br /><br />

DES was first cracked as part of the DES Challenge ("DESCHALL") in 1997. The winner of DESCHALL announced they were able to crack a DES encrypted message in 96 days. Then in 2017 a chosen-plaintext attack utilizing a rainbow table was able recover the DES key for a single specific chosen plaintext 1122334455667788 in 25 seconds. 

<strong>Asymmetic</strong> encryption algorithms meaning it uses a public key and a private key (i.e two different, mathematically linked keys). 
They include both stream-based and block ciphers:
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Diffie–Hellman_key_exchange">Diffie-Hellman key exchange</a> published 1976 -- one of the first public-key protocols in wide use. Used to exchange crypto keys for symmetric encryption algorithms like AES used by HTTPS.
   * <a target="_blank" href="https://en.wikipedia.org/wiki/RSA_(cryptosystem)">RSA</a> is defacto commercial asymmetic algorithm
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Elliptic_curve_cryptography">ECC (Elliptic Curve Cryptosystem)</a> is US govt. standard asymmetric (efficient) support digital signatures and encryption. 
   * DSA (???)
   * Knapsack 

   * IDEA provides a key size up to 128 bits.
   * 3DES provides a key size up to 168 bits. 3 costly rounds. Not widely used.
   * <a target="_blank" href="https://www.youtube.com/watch?v=O4xNJsjtN6E">AES</a> supports a 128-, 192-, or 256-bit (16 byte) block size, weaved through data blocks. Subset of Rijndael, winner of NIST contest for faster in 1998.
   * <a target="_blank" href="https://en.wikipedia.org/wiki/RC6">RC6</a> (written by Ron Rivest) provides the <strong>largest key size</strong> up to 2,048 bits. From NSA. RC6 supports a 32-, 64-, or 128-bit block size. 

   * Quantum crypto replaces the 1 and 0 of binary computing with multidimentional qubits for faster mathematical solutions.
   <br /><br />

Rounds of computations: REMEMBER: 
   * HAVAL performs 3, 4, or 5 
   * MD5 performs 4 
   * IDEA performs 8
   * AES (Rijndael) performs 14 
   * Twofish performs 16
   * Tiger performs 24
   * Skipjack performs 32
   * SHA-256 performs 64
   <br /><br />

<strong>Block symmetric cipher</strong> modes use of IVs to ensure that patterns are not produced during encryption. But IVs are not modes. 
   * Block ciphers are generally less susceptible to security issues.
   * Block ciphers are generally used more in software implementations.

   * ECB (Electronic Code Book) blocks have no relationship with other blocks. Least secure but fastest because it doesn't use initialization vector. Used for small random code.
   * CTR (DES CounTeR Mode) turns into a string cipher used in IEEE 802.11i which details security mechanisms. Has best balance of speed and security.
   * CBC (Cipher Block Chaining) can have pipeline stalls
   * CFB (Cipher FeedBack) 
   * GCM (Galois field/Counter Mode) parallel 128 bits https://www.wikiwand.com/en/Galois/Counter_Mode
   <br /><br />

<strong>Stream</strong> ciphers are generally cheaper to implement than block ciphers.
   * RC4 is a symmetric stream cipher, so does not have a block size.
   <br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=VPvZbMXfv_0">VIDEO</a>: Hybrid cryptography combines the convenience of a public-key cryptosystem with the efficiency of a symmetric-key cryptosystem. 
Public-key cryptosystems are convenient in that they do not require the sender and receiver to share a common secret in order to communicate securely:
   1. The symmetric algorithm provides keys used for encryption. 
   2. The symmetric keys are passed to the asymmetric algorithm, which encrypts the symmetric keys 
   and automatically distributes them. 
   3. The message is encrypted with the symmetric key. 
   4. Both the message and the public key are sent to the receiver. 
   5. The receiver decrypts the symmetric key and uses the symmetric key to decrypt the message.
   <br /><br />

<strong>Implementation of Confusion</strong> is the process of changing a key value during each round of encryption.
   * 3DES-EEE3 encrypts each block of data three times, each time with a different key. 
   * 3DES-EDE3 encrypts each block of data with the first key, decrypts each block with the second key, and encrypts each block with the third key.
   * 3DES-EDE2 encrypts each block of data with the first key, decrypts each block with the second key, and then encrypts each block with the first key.
   * 3DES-EEE2 encrypts each block of data with the first key, encrypts each block with the second key, and then encrypts each block with the third key.
   <br /><br />

PKI (Public Key Infrastructure):
   * A subject is an entity that seeks to have a certificate validated. 
   * A target is a path to a public key. 
   * A verifier is an entity that verifies a public key chain.
   * A trust anchor is a public key that verifies the certificate used in a digital signature. 
   <br /><br />

<a name="Homomorphic"></a>
For data in use within memory flushing: 
<a target="_blank" href="https://en.wikipedia.org/wiki/Homomorphic_encryption">Homomorphic encryption</a> allows computations to be performed on encrypted data without first having to decrypt it. It can be used for privacy-preserving outsourced storage and computation. This allows data to be encrypted and out-sourced to commercial cloud environments for processing, all while encrypted.
Even if a service provider's system is compromised, the data would remain secure.

<a name="HSM"></a>

### HSM

Hierarchical storage management (HSM) is type of backup management system that provides a continuous online backup by using optical or tape "jukeboxes."

<a name="RAID"></a>
### RAID

RAID (Redundant Array of Independent Disks): parity information is used to regenerate the data in the case of a single drive failure. 
   * RAID-0 Striping of data parts over 2 drives
   * RAID-1 Mirroring of 2 drives
   * RAID-10 Mirroring+Striping
   * RAID-2 stripes the data across all drives at the bit level rather than the byte level.
   * RAID-3 parity information is written to a single dedicated drive. Data is written across all drives like striping.
   * RAID-5 Parity information is written across all drives like striping as well. Min. 3 drives?
   * RAID-6 Parity of 2 
   * RAID-7 enables the drive array to continue to operate if any disk or any path to any disk fails. The multiple disks in the array operate as a single virtual disk.
   <br /><br />


<hr />

<a name="NetworkProtocols"></a>

## Network Protocols

CHAP (Challenge Auth Protocol) from Microsoft negotiates a 3-way handshake asymmetric algorithm to support mutual auth. can randomly require re-auth. Based on the username and password, so is vulnerable.

FHRP (First Hop Redundancy Protocol) for shared IP routing redundancy
VRRP group

RARP (Reverse Address Resolution Protocol) when communicating for the first time to find the IP address matching the MAC.

OCSP (Online Certificate Status Protocol) is the Internet protocol that obtains the revocation status of an X.509 digital certificate. A certificate revocation list (CRL) contains a list of all the certificates that have been revoked. In reality, many browsers have stopped accessing it.
Pinned.

Key clustering occurs when different encryption keys generate the same ciphertext from the same plaintext message. 
Cryptanalysis is the science of decrypting ciphertext without prior knowledge of the key or cryptosystem used. 
A keyspace is all the possible key values when using a particular algorithm or other security measure. 

<a name="TPM"></a>

A TPM (Trusted Platform Module) protects the contents of an encrypted hard drive by storing the decryption key in the host computer. If the hard drive is removed, the data cannot be decrypted.

Secure Electronic Transaction (SET) was used to verify credit card transactions in 1966.

SAML (Security Assertion Markup Language) is an XML-based open standard data format for exchanging authentication and authorization data between parties, in particular, between an identity provider and a service provider.

OVAL (Open Vulnerability and Assessment Language) is a standard written in XML that provides open and publicly available security content. Its purpose is to standardize information between different security tools.

Memory:
   * Associative memory searches for a specific data value in memory rather than using a specific memory address.
   * Indirect addressing is the type of memory addressing where the address location that is specified in the program instruction contains the address of the final desired location.
   * Absolute addressing addresses the entire primary memory space. Implied addressing refers to registers usually contained inside the CPU.
   * A memory leak occurs when a computer program incorrectly manages memory allocations, which can exhaust available system memory as an application runs. 
   <br /><br />

### Processes:

   A process is a series of actions or steps taken in order to achieve a particular end. Organizations will define individual processes and their relationship to one another.

   <strong>Confinement</strong> describes processes confined to only read from and write to certain memory locations and resources. Confinement is usually carried out using the operating system, through a confinement service, or using a hypervisor.

The bounds of a process set limits on the memory addresses and resources the process can access. The bounds logically segment memory areas for each process to use.

For list of ports, see my <a target="_blank" href="https://wilsonmar.github.io/ports-open">https://wilsonmar.github.io/ports-open</a>

MPLS is a protocol-independent transport mechanism. Uses labels, but not for IP routing.

Convergence to use IP protocol for a variety of formats (data, voice, etc.)

PROTIP: TOOL: When using a USB power source only for power, block its ability to transfer data by using a "USB condom". PortaPaw has <a target="_blank" href="https://www.amazon.com/Juice-Jack-Defender-Security-Purchased-Employees/dp/B08WKSNYVC/">4th gen USB-A</a> and <a target="_blank" href="https://www.amazon.com/PortaPow-Data-Blocker-USB-C-Converter/dp/B08XK4WPZ4/">as a USB-A to USB-C converter</a>.

IDS (Intrusion Detection System)
   * Blocks autorun when USB are attached, a prolific infection vector
   * HIDS (Host-based IDS) on servers
   * A heuristic-based (or rule-based) IDS is an expert system that uses a knowledge base, inference engine, and rule-based programming. 
   * A signature-based IDS analyzes traffic and compares it to attack or state patterns, called signatures, that reside within the IDS database.
   * A traffic anomaly-based IDS tracks traffic pattern changes. All future traffic patterns are compared to the sample. 
   * An anomaly-based IDS analyzes traffic and compares it to normal traffic to determine if said traffic is a threat. 
   * An application-based IDS is a specialized IDS that analyzes transaction log files for a single application.
   <br /><br />

Better to use a sandboxed lab system (sometimes referred to as a "sheep dip").

Backups:
   * GRS (grandfather-father-son) backup rotation scheme Three sets of backup media
   * ASR (Automated System Recovery) from disk image to restore
   * Remote journaling
   * Electronic vaulting - files copies auto transmitted to backup location
   * Disk shadowing - written to independent disks, transparent to the user
   <br /><br />

RAM
   * DRAM (Dynamic Random Access Memory) capacitors
   * SRAM keeps data stored as long as it has power
   * SDRAM (Synchronous Dynamic Access Memory)  access commands simultaneously,
   * DDR (DD2, DD3, DDR4)
   <br /><br />


### Physical Security (DOMAIN 3)

[<a target="_blank" href="https://www.youtube.com/watch?v=7ESQwNJ9HXU&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=11&t=16s">MINDMAP</a>]

Strategies: Deter, Delay, Detect, Assess, Respond. Acronym?

CPTED (Crime Prevention Through Environmental Design): 
   * natural access control
   * natural territorials reinforcement
   * natural surveillance

   * People protect territory they feel is their own
   * People have a certain respect for the territory of others
   * Intruders do not want to be seen
   * Limiting access discourages intruders and/or marks them as intruders
   <br /><br />

Perimeter of two lines: sterile zone

   * Fail-Safe protects human life over systems (opening doors after a power failure)
   * Fail-Secure locks the system for default secure when a failure occurs (doors lock after power failure) -- prioritizes systems over human life

   * Fail-Open ensures Availability to continue to operate when a failure occurs
   * Fail-Close closes (terminates/shuts all non-critical) processes when a failure occurs
   <br /><br />

Avoid Single point of failure. The weakest link jeopardizes the whole.

Gates:
   * Class 1 gates are suitable for residential use. 
   * Class 2 gates are suitable for commercial usage.
   * Class 3 gates are suitable for industrial usage.
   * Class 4 gates are suitable for restricted areas.
   <br /><br />

Alternative sites:
   * A redundant site provides a site that is recoverable in the least amount of time and will allow the organization to have the most control of the resources. 
   * A hot site contains telecommunications and computers and is the most expensive alternative site. It takes the shortest amount of time to recover. Has Backups??
   * A cold site does not contain any computers or telecommunications equipment. It does contain wiring, heating and air, and raised flooring. It is much cheaper than a hot site. However, it takes much longer to recover. 
   * A warm site contains telecommunications equipment but no computers and is cheaper than a hot site but more expensive than a cold site. It takes longer to recover than a hot site but shorter to recover than a cold site.
   * A tertiary site provides an alternate in case both the primary and hot site, warm site, or cold site is unavailable.
   <br /><br />

Fail-over testing:
   * A full-interruption test involves a hard switchover from the primary facility to the alternative facility. 
   * A structured walk-through test is a representative of each department or functional area thoroughly reviews the business continuity plan’s accuracy.
   * A functional drill tests a single department to see whether the department’s disaster recovery plan (DRP) is complete.
   * An evacuation drill has personnel follow the exiting or shelter-in-place guidelines for a particular disaster type.
   <br /><br />

Fire extinguisher classes and suppression:
   * Class A - ordinary combustibles (paper, wood) - Water, soda acid powders
   * Class B - flammable liquids and flammable gases - CO2, Halon, soda acid
   * Class C - electrical equipment - CO2, Halon
   * Class D - combustible metals - Dry powder
   * Class K - cooking oil or fat (grease, oil) - Alkaline mixture
   <br /><br />

Incipient smoke detection detects chemicals released during early stage of fire.

A dry pipe system (filled with pressurized air.
<strong>Preaction</strong> extinguisher pipe sprinkler heads holds a thermal-fusible link that melts before the water is released. This is currently the recommended system for computer rooms.

Locks:
   * A warded lock has a spring-loaded bolt with a notch in it. The lock has wards or metal projections inside the lock with which the key will match and enable opening the lock. 
   * A tumbler lock has more moving parts than the warded lock, with the key raising the lock metal piece to the correct height.
   * A combination lock requires rotating the lock in a pattern, which if correct lines up the tumblers and opens the lock.
   * A cable lock has vinyl-coated steel cables that connect to the laptop and then lock around an object.
   <br /><br />

<a name="IAM"></a>

## IAM

Identity provisioning life cycle: The identity must be created first. It is then configured, modified, and monitored. 
The account is is revoked when no longer needed.

IDaaS (Identity as a Service) Provides a set of identity and access management functions to target systems on customers’ premises and/or in the cloud.

## SSO

[<a target="_blank" href="https://www.youtube.com/watch?v=_U4QMIxVk8M&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=17">MINDMAP</a>]

Shibboleth is a SAML standards-based open source software for web single sign-on and attribute exchange framework.

OAuth2 is an auth framework that enables apps to obtain limited access to user account on an HTTP service.

On top of OAuth 2.0 OIDC (OpenID Connect) version 1.0 from the non-profit OpenID foundation adds an authentication identity layer. It allows users to be authenticated by co-operating sites known as Relying Parties (RP) providing SSO.
It's decentralized in that a traditional central authority is NOT required for authentication.
User Passwords are given only to an identify provider (IdP) to confirm, who then vouches for you to various web-based mobile JavScript clients.
The spec. is extensible to add discovery of OpenID providers, encryption of identity data, session management, etc.
Resource Server 
OIDC version 2 ???
XACML can be used to define authorization policies (such as managers can view certain docs in their regions).

## Access Control IAAA

Entities include a human user, program, service, or computer.<br />
An object is an entity that provides information to a subject.<br />
A subject is an entity that accesses an object to retrieve information about the object.

   * Identification is the act of a subject professing an identity to an access control system.
   * Authentication (AuthN) is the act of <strong>validating</strong> a user with a unique identifier by providing the appropriate credentials.
   * Authorization (AuthZ) determines what <strong>access</strong> you have.

   * Accountability is not a step in access control.<br />Accountability is the capability of an organization to hold users responsible for their actions.
   <br /><br />

* Remote Authentication Dial-In User Service (RADIUS) is a standard published in RFC 2138.
* Terminal Access Controller Access-Control System Plus (TACACS+) is a Cisco-proprietary method.
<br /><br/>

MFA (Multi-Factor Authentication) types:

   * Type 1 – Something You <strong>Know</strong> (remember)– includes passwords, PINs, combinations, code words, or secret handshakes. Anything that you can type, say, do, perform, or otherwise recall when needed falls into this category.

   * <a href="#Type2">Type 2</a> – Something You <strong>Have</strong> (possssion) – includes all items that are physical objects, such as keys, smart phones, smart cards, USB drives, and TOTP token devices. (A token device produces a <strong>time-based</strong> PIN or can compute a response from a challenge number issued by the server.).

   * <a href="#Type3">Type 3</a> – Something You <strong>Are</strong> (characteristic) – includes any part of the human body that can be offered for verification using biometrics such as fingerprints, palm scanning, facial recognition, retina scans (used by CLEAR), iris scans, and voice verification.
   <br /><br />

Other Authentication Factors:

   * Somewhere you are - location determined by IP address from wi-fi, GPS.

CAUTION: Knowledge-based authentication (such as previous address, mother's maiden name) can be cracked by information on social media, data brokers, or vendors on dark web offering information stolen from websites, or by <a href="#SocialEngineering">social engineering</a>. PROTIP: Give a different fake mother's maiden name to each organization who asks, and record that on your 1Password.

"Cognitive" passwords are something information you know, such as your favorite sport, food, etc.

REMEMBER: A password and pin combo includes only a single knowledge authentication factor type, so is not 2FA.

In a MAC (Mandatory access control) environment: <a target="_blank" href="https://www.youtube.com/watch?v=mNN-fEboRAA&list=ULpxsrZMHAL8w&index=4846">VIDEO</a>
   * a label is required for each subject and object. Each file is an object. Users are subjects. Clearance is a privilege.
   * Rule-based access control is most often used by routers and firewalls to control access to networks.
   * The dedicated mandatory access control (MAC) security mode employs a single classification level.
   * In the system high mandatory access control (MAC) security mode, all users of the system have the same security clearance but do not all possess a need-to-know clearance for all the information in the system.
   * In dedicated security mode, all users can access all data, but they must sign a nondisclosure agreement (NDA) and be formally approved for access on a need-to-know basis. 
   * In multilevel security mode allows two or more classification levels of information to be processed at the same time.
   * In the compartmented security mode, all users must possess the highest security clearance (as in both dedicated and system high security), but they must also have a valid need-to-know clearance, a signed NDA, and formal approval for all information to which they have access.
   <br /><br />

CAUTION: TOOL: Type a password you type into <a target="_blank" href="https://password.kaspersky.com/">password.kaspersky.com</a> to see whether it has been found in a dark database of passwords found in the wild and how long it would take to crack that password. However, whatever you type is also logged and stored in their database, which may be accessed by the Russia government.

A <strong>capability table</strong> lists the access rights that a particular subject has to objects.

PIV (Personal Identity Verification) card, call "CAC" card by the US military. https://piv.idmanagement.gov/
Derived PIV credentials stored securely on mobile device in a TPM.


<a name="Type2"></a>

## Type 2 Have Smart Cards

The user private key encrypts a challenge regnerated by the computer.

<a name="Type3"></a>

### Type 3 Are Biometrics

Biometrics are PHI (Protected Health Information):

Facial recognition:
   * In an <strong>eigenfaces</strong> facial scan, measurements of facial components are gathered and compared to a set of standard eigenfaces.
   * In an <strong>eigenfeatures</strong> facial scan, the distances between the facial features are measured and recorded.

   * In an <strong>iris</strong> scan, the colored portion of the eye, including all rifts, coronas, and furrows, are analyzed.
   * In a <strong>retina</strong> scan, blood vessel patterns are analyzed.
   * Vascular scan

   * Keystroke dynamics
   * Signature dynamics
   <br /><br />

A characteristics factor for authentication?

Biometric Errors:
   * A Type I error -- False Rejection Rate (FRR) -- increases with sensitivity
   * A Type II error -- False Acceptance Rate (FAR) -- reduces with sensitivity
   * Crossover Error Rate (CER) is the point at which FRR equals FAR. 
   * Throughput rate is the rate at which users are authenticated.
   <br /><br />

Desktop sessions can be managed through screensavers, timeouts, logon, and schedule limitations. 
Federal Information Processing Standards (FIPS) Publication 201.2 and NIST Special Publication 800-79-2 are documents that provide guidance on proof of identity.

In Kerberos, the Key Distribution Center (KDC) issues a ticket-granting ticket (TGT) to the principal. 
The principal sends the TGT to the ticket-granting service (TGS) when the principal needs to connect to another entity.

In a MAC environment, each subject and object is given a label. 
   * A file in a mandatory access control (MAC) environment is an object. 
   * A user in an MAC environment is a subject. 
   * A clearance in a MAC environment is a privilege.
   <br /><br />

DAC controls are determined by the data owner.

RBAC uses roles to provide access to the data.

<hr />

<a name="Networking"></a>

## Networking: OSI (Open System Interconnect) 

[<a target="_blank" href="https://www.youtube.com/watch?v=6X4A6B94vmw&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=12&t=9s">MINDMAP</a>]

Memomnic: Please Do Not Throw Sausage Pizza Away or All People Seem To Need Data Processing 

PDUs (Process Data Units)
1. Physical bits - Signal through cable hubs, Repeaters,  Amplifiers, patch panels 
2. Data Link frames - MAC address, Logical Link control switching through Ethernet Bridges
3. Network packets - Fragment logical addressing routers in IP headers IPv4, IPv6, BGP, OSPF
4. Transport segments - Adds protocol for end-to-end TCP, UDP, SSL, TLS ports sockets (no hardware)
5. Session data - RPC, tunneling makes a communication session between a service or application on the source device possible with the same service or application on the destination device. 
6. Presentation data - file format operating system, encryption
7. Application data - encapsulation of content HTTP, FTP, SSH, SMTP, API Gateways, Proxy servers doing conversions. It receives the raw data from the application in use and provides services, such as file transfer and message exchange to the application
<br /><br />

<a name="ACLs"></a>

Access control lists (ACLs) are typically used on routers, which map to layer 3 of the OSI model.
The Link layer of the TCP/IP model corresponds to the Data Link and Physical layers of the OSI model. 
The Transport layer of the TCP/IP model corresponds to the Transport layer of the OSI model. 

OSI Resources:
   * https://www.youtube.com/watch?v=G7aVKgGUe9c by Professor Messer has graphic illustrations, using WireShark to display details
   * https://www.youtube.com/watch?v=HEEnLZV2wGI by  Kelly Handerhan uses an analogy of a letter being sent among two buildings where each floor is a layer of the OSI stack.
   * https://www.youtube.com/watch?v=H6Jy-P_iFmo by Skillset
   * https://www.youtube.com/watch?v=HEEnLZV2wGI by Eli the computer guy on a whiteboard is a bit repetitive
   * https://www.youtube.com/watch?v=LANW3m7UgWs by CertBros Real World Example https://www.youtube.com/watch?v=LANW3m7UgWs&list=PLF1hDMPPRqGxpYdo0ctaa7MxfOi9vjs1u&index=3
   * https://www.youtube.com/watch?v=Ilk7UXzV_Qc by RealPars 
   <br /><br />


Point-to-Point Tunneling Protocol (PPTP) encapsulates the original LAN packet with another header and trailer, while encrypting the original packet.

Address Resolution Protocol (ARP) resolves IP addresses to MAC addresses. Between layer 2 and 3.
RAP (Reverse Address Protocol) resolve MAC address to IP addresses.

Network File System (NFS) is a client/server file-sharing protocol used in UNIX/Linux.

Fibre Channel over Ethernet (FCoE) encapsulates Fibre Channel frames over Ethernet networks.

CSMA/CD (Carrier-sense multiple access with collision detection) Ethernet

<a target="_blank" href="https://www.cisco.com/c/en/us/support/docs/ip/network-address-translation-nat/26704-nat-faq-00.html">Network Address Translation (NAT)</a> was originally designed for IPv4 address conservation, so private IP networks can use unregistered IP addresses to connect to the Internet. 
The NAT service can operate on a router or by a server to connect two networks together, and translates the private (not globally unique) addresses in the internal network into legal addresses, before packets are forwarded to another network.
For additional security, NAT in remote-access environments can be configured to advertise only one address for the entire network to the outside world.
(??? Static Address, Dedicated Address, Port Address)

DNP3 is a multilayer protocol used between components in process automation systems in electric and water companies.

IPv4 uses 32 bits.<br />
IPv6 uses 128 bits, has built-in IPSec. Sends Solicited Node (ICMP) Multicast Address unicast to a single node to resolve MAC addr.
concatenated with 104-bit addr. SLAAC (StateLess Address Auto Configuration) to auto configure based on network prefix.

Private addresses: REMEMBER: <a target="_blank" href="https://www.youtube.com/watch?v=se14Kog6raE&list=PLBpnwlO9U5unYmbZp2DJETNOHg8s_yW37&index=72">VIDEO QUZ</a>
   * Class A 10.x.x.x/16 (to 10.255.255.255)
   * Class B 172.16.x.x/20 (to 172.31.255.255)
   * Class C 192.168.x.x/ (to 192.168.255.255) in range of addresses is from 192.0.0.0 to 223.255.255.255.
   <br /><br />

An IPv4 address is comprised of a network address and a host address. A subnet mask is used to determine what part of the IP address belongs to which. This is important because it determines whether the host will communicate directly with another host or send communication through a router.

802.11ac includes multi-user multiple-input, multiple-output (MU MIMO).

High-Data-Rate Digital Subscriber Line (HDSL) can achieve 1.544 Mbps each way over two copper twisted pairs.

Secure HTTP (S-HTTP) encrypts only a single message. 
Hypertext Transfer Protocol Secure (HTTPS) establishes a session using a digital certificate and encrypts an entire session. 
Secure Electronic Transaction (SET) secures credit card transaction information over the Internet. 

<a target="_blank" href="https://www.sciencedirect.com/topics/computer-science/transport-mode#:~:text=IPSec%20operates%20in%20two%20modes,header%20and%20the%20IP%20payload">Internet Protocol Security (IPsec)</a> protects data transmitted over a VPN. HMAC (Hashed Message Authentication Code), used by TLS, includes a symmetric key to provide data integrity and data origin auth.

   * In Transport Mode, the original IP header is retained. The payload data transmitted within the original IP packet is protected, but not the IP header. Encrypted traffic is sent directly between two hosts that previously established a secure IPsec tunnel.
  
   * In Tunnel Mode, the entire original IP packet is encapsulated to become the payload of a new IP packet. Additionally, a new IP header is added on top of the original IP packet. Since a new packet is created using the original information, tunnel mode is useful for protecting traffic between different networks. This establishs a “tunnel” between two secure IPsec gateways.

TLS 1.3 server cert. is encrypted when sent to client, which hides the name of the server.

In 2016, DROWN vulnerability (Decrypting RSA with Obsolete and Weakened eNcryption) by taking advantage of backward compatibility to force insecure SSLv2 connection downgrade from TLS. So disable obsolete protocol downgrading.

Implementing an IPS is more expensive than implementing an IDS.
   * IPS (intrusion prevention system) is a network device that detects a network intrusion and prevents the network intrusion.
   * IDS (An intrusion detection system) is a network device that detects network intrusion attempts and either logs the intrusion or contacts the appropriate personnel. 
   <br /><br />

Network access control (NAC) ensures that the computers on the network meet an organization's security policies. 
 A virtual private network (VPN) is a private network that users can connect to over a public network. Internet Protocol Security (IPsec) is a protocol that secures IP communication over a private or public network. A demilitarized zone (DMZ) is a section of a network that is isolated from the rest of the network with firewalls.

Frame Relay and X.25 are packet-switched technologies. 

DSL:
   * Symmetric DSL (SDSL), data travels in both directions at the same rate. 
   * Asymmetric DSL (ADSL) provides faster download speed than upload speed. 
   * High Bit-Rate DSL (HDSL) offers speeds up to 1.544 Mbps over regular UTP cable. 
   * Very High Bit-Rate DSL (VDSL) is capable of supporting high-definition TV (HDTV) and VoIP.
   <br /><br />

DSA (Digital Signature Algorithm) - US standard


### Network Penetration test

[<a target="_blank" href="https://www.youtube.com/watch?v=6X4A6B94vmw&list=PLZKdGEfEyJhKWyryIvx_jm1jn6ZMTi7gW&index=12">MINDMAP</a>]

Penetration test methodology - To simulate an attack on a system or network to evaluate the risk profile of an environment
   1. Reconnaissance
   2. Enumeration
   3. Vulnerability Analysis
   4. Execution/Exploitation
   5. Document Findings
   <br /><br />

<a name="Firewalls"></a>

### Firewalls

A three-legged firewall uses three interfaces, one connected to the untrusted network, one to the internal network, and another to a DMZ.

A kernel proxy firewall is an example of a fifth generation firewall. It inspects the packet at every layer of the OSI model but does not introduce the performance hit that an application layer firewall will because it does this at the kernel layer. 

* A stateful firewall forwards packets on behalf of the client. It examines each packet and permits or denies it passage based on many factors, including the state table.
* A proxy firewall hides a packet’s true origin before sending it through another network.
* BA packet-filtering firewall forwards packets based on rules that define which traffic is permitted and denied on the network.
* A <strong>bastion host</strong> is a hardened machine that usually resides on a demilitarized zone (DMZ) open to the public.


## Acceptable Use Policy (AUP)

An AUP (acceptable use policy) details appropriate use of information systems, handling standards, monitoring, and privacy expectations.


### Open-source intelligence (OSINT)

Open-source intelligence feeds:
   * <a target="_blank" href="https://www.misp-project.org/">Malware Information Sharing Project (MISP)</a> [<a target="_blank" href="https://en.wikipedia.org/wiki/Malware_Information_Sharing_Platform">Wikipedia</a>]
   * <a target="_blank" href="https://cybersecurity.att.com/open-threat-exchange">AT&T Security (Alien Vault Open Threat Exchange)</a>
   * <a target="_blank" href="https://www.spamhaus.org/">Spamhaus.org</a>
   * <a target="_blank" href="https://isc.sans.edu/diary/Suspending+Suspicious+Domain+Feed+Update+to+Researcher+IP+Feed/26204">SANS ISC Suspicious Domains</a>
   * VirusTotal
   * us-cert.gov/ncas = NCAS (National Cyber Awareness System) - <a target="_blank" href="https://www.cisa.gov/news-events/cybersecurity-advisories">alerts</a>
   <br /><br />

Closed-source or proprietary intelligence sources:
   * IBM X-Force Exchange
   * Recorded Future
   * FireEye
   <br /><br />


## Incident Response (DFIR)

DFIR (Digital Forensics and Incident Response) is the process of collecting, preserving, analyzing, and reporting on digital evidence in a way that is legally admissible.

DFIR is useful to answer <a target="_blank" href="https://www.cybereason.com/fundamentals/what-is-dfir">questions such as</a>:

   * Who attacked? (Attribution)
   * What is the full scope and impact of the incident?
   * How did the attacker get in?
   * What steps were taken to escalate the operation?
   * How do we ensure this type of attack won’t occur again?
   * How do we fully remediate the existing issue to restore trust?
   <br /><br />

Forest Monsen and Kevin Glisson in Netflix's Security Intelligence and Response Team (SIRT):
   * <a target="_blank" href="https://github.com/Netflix-Skunkworks/diffy">open-sourced</a> their <a target="_blank" href="https://netflixtechblog.com/netflix-sirt-releases-diffy-a-differencing-engine-for-digital-forensics-in-the-cloud-37b71abd2698">"Diffy" Differencing Engine for Digital Forensics in the Cloud</a> tool, which include "osquery" to collect and retain a functional baseline against comparison with all running instances. See https://diffy.readthedocs.io/

   * <a target="_blank" href="https://github.com/Netflix/dispatch">open-sourced</a> their <a target="_blank" href="https://netflixtechblog.com/introducing-dispatch-da4b8a2a8072">"Dispatch" crisis management orchestration</a> tool, which leverages existing familiarity with existing tools used throughout an organization (Slack, GSuite, Jira, etc.). Dispatch focuses on managing metadata (incident context) about responses and resources, assembling participants, sending out notifications, tracking tasks, assisting with post-incident reviews, etc. The system builds on past incidents to speed up the resolution of future incidents. It's made using Python, VueJs, Postgres. Available as a <a target="_blank" href="https://github.com/Netflix/dispatch-docker">Docker image</a>. See https://hawkins.gitbook.io/dispatch/


UEBA (User and Entity Behavior Analytics), such as Splunk and Microsoft Advanced Threat Analysis provides automated id. of suspicious activity by user accounts and computer hosts, using AI/ML techniques.

tcpdump options:
   * -e includes the ethernet header during packet capture
   * -n flag shows the IP addresses in numeric form
   * -nn shows IP addresses and ports in numeric format
   * -X captures the packet's payload in hex and ASCII formats
   <br /><br />


<hr />

## Podcasts

* <a target="_blank" href="https://www.hubermanlab.com/podcast">https://www.hubermanlab.com/podcast</a> by Andrew Huberman


* https://opensoc.io/ Network Defense Range (NDR) - a free, open-source, and community-driven project that provides a virtualized environment for security professionals to practice their skills in a safe and controlled environment. The NDR is a collection of virtual machines (VMs) that are pre-configured to simulate a real-world network. The NDR is designed to be used by security professionals to practice their skills in a safe and controlled environment. 

* <a target="_blank" href="https://isc.sans.edu/podcast.html">PODCAST: SANS.edu Internet Storm Center daily</a>
* <a target="_blank" href="https://www.cyberaces.org/">SANS Cyber Access</a>
* <a target="_blank" href="https://isc.sans.edu/forums/diary/Verifying+Running+Processes+against+VirusTotal+DomainWide/25078/">SANS.edu diary</a>
* <a target="_blank" href="https://www.sans.org/reading-room">SANS.edu reading room white papers</a>

* Purdue University's <a target="_blank" href="https://www.cerias.purdue.edu/">CERIAS (Center for Eduation and Research in Information Assurance and Security)</a> weekly, <a target="_blank" href="https://www.youtube.com/user/ceriaspurdue">YOUTUBE channel</a> 

* <a target="_blank" href="https://nakedsecurity.sophos.com/">Naked Security by Sophos</a> (<a target="_blank" href="https://twitter.com/nakedsecurity">@nakedsecurity</a>) <a target="_blank" href="https://nakedsecurity.sophos.com/category/audio-and-video/podcast/">PODCAST</a> weekly since April 2010 by Product Evangelist Tony Ross.

* <a target="_blank" href="https://krebsonsecurity.com/">(Brian) Krebs on Security</a> is an investigative report.

* <a target="_blank" href="https://www.schneier.com/blog/">Schneier.com Blog</a> (@schneierblog)

* <a target="_blank" href="https://www.grahamcluley.com/">GrahamCluley.com</a> (@gcluley)<br />
   <a target="_blank" href="https://smashingsecurity.com/listen/">SmashingSecurity podcast</a>

* <a target="_blank" href="https://www.infosecurity-magazine.com/">Information Security magazine</a> (@InfosecurityMag)

* <a target="_blank" href="https://www.wired.com/category/security/">Wired magazine Security articles</a> had Christopher Krebs of Krebs-Stamos Group, was first Director of Cybersecurity at the Department of Homeland Security (fired by Trump), discusses the real threats to voting, from disinformation to intimidation to foreign interference.

* <a target="_blank" href="https://www.wired.com/category/threatlevel/">Wired magazine Threat Level</a>

* <a target="_blank" href="https://darknetdiaries.com/">Darknet Diaries podcast</a> from 2017

* <a target="_blank" href="https://www.darkreading.com/">Dark Reading</a> news website

* <a target="_blank" href="https://threatpost.com/">Threatpost</a> news website

* <a target="_blank" href="https://www.brakeingsecurity.com/">PODCAST: Brakeing Down Security</a> (<a target="_blank" href="https://twitter.com/brakesec?lang=en">@brakesec</a>)

* <a target="_blank" href="http://podcast.wh1t3rabbit.net/">PODCAST: Down the Security Rabbithole</a>

* <a target="_blank" href="https://southernfriedsecurity.com/">PODCAST: The Southern Fried Security Podcast</a>

* <a target="_blank" href="https://securitycurrent.com/podcasts/">PODCAST: Security Current</a>

* <a target="_blank" href="https://www.cybrary.it/">cybrary.it</a> "The Leading Cybersecurity Professional Development Platform"

* <a target="_blank" href="https://www.offensive-security.com/metasploit-unleashed/">Metasploit Unleashed</a> by Offensive Security training

* <a target="_blank" href="https://resources.infosecinstitute.com/topic/cissp-cryptography-mini-course/">CISSP Cyptography Mini Course</a>

* <a target="_blank" href="https://roadtripnation.com/roadtrip/cybersecurity">RoadTripNation.com "Life Hackers" episode</a> on Cyber Security.

* Pass the <a target="_blank" href="https://open.hpi.de/courses/cybersec-exam-4">
Cybersecurity Exam</a> in 3 courses from the Hasso Plattner Institut (HPI) free Open university in Germany.

* https://thorteaches.com/the-memory-palace-prashant-mohan/
https://thorteaches.com/wp-content/uploads/2021/06/The-Memory-Palace-CISSP-by-Prashant-Mohan-4th-edition.pdf
One large PDF of what to remember while taking the CISSP exam.

* At Cisco, <a target="_blank" href="https://www.linkedin.com/in/-rontaylor/">Ron Taylor</a> <a target="_blank" href="https://github.com/The-Art-of-Hacking/h4cker">https://github.com/The-Art-of-Hacking/h4cker</a> (<a target="_blank" href="https://h4cker.org/github/">by</a> <a target="_blank" href="https://www.linkedin.com/in/santosomar/">Omar Santos</a> used in <a target="_blank" href="https://dcloud.cisco.com/">Cisco's Cyber Defense Clinic Lab</a> <a target="_blank" href="https://dcloud2-sjc.cisco.com/content/catalogue">catalog</a>

   * NetFlow uses less disk space than full packete capture.

   Ron also created the https://cyberresiliencebootcamp.com/
   uses <a target="_blank" href="https://dcloud.cisco.com/">Cisco's Cyber Defense Clinic Lab at https://dcloud.cisco.com</a>
   referencing https://github.com/The-Art-of-Hacking/h4cker
   <br /><br />

<a target="_blank" href="https://www.microsoft.com/en-us/securityengineering/sdl">Microsoft's Security Development Lifecycle</a>

https://flaksec.com/not-all-metrics-are-created-equal-a-gitlab-security-case-study/


## Sharing groups

* Gerald Auger</a>'s <a target="_blank" href="https://www.youtube.com/@SimplyCyber/streams">Daily Cyber Threat Brief videos</a> within his <a target="_blank" href="https://www.youtube.com/channel/UC0ArlFuFYMpEewyRBzdLHiw">Simply Cyber YouTube channel</a>.

* https://www.nationalisacs.org/
ISAC (Information Sharing and Analysis Center)
* https://www.nationalisacs.org/member-isacs-3
www.it-isac.org
* https://www.linkedin.com/company/isacindia/
* https://www.linkedin.com/company/it-isac/
* https://www.linkedin.com/company/health-isac/
      contact@h-isac.org
* https://h-isac.org/health-industry-cybersecurity-practices/  = Video & PDF of practices
* https://h-isac.org/wp-content/uploads/2019/09/405-vol1-508.pdf
ISAC Certified Basics in Information Security (ICBIS) Course.

* CISC (Cyber Intelligence Sharing Center)

*  https://www.cio.com/article/2600345/11-steps-attackers-took-to-crack-target.html

* https://podcasts.apple.com/us/podcast/hard-fork/id1528594034
by the New York Times reporters talking about TikTok's Spying, ChatGPT


## Discord channels

Blackhills Infosec https://discord.gg/BHIS
<a target="_blank" href="https://www.youtube.com/c/blackhillsinformationsecurity">VIDEO</a>:
John Strand, Ean Meyer, etc run a supportive and valuable server. The one knock is it's SO big and busy that it can be tough to make connections.

Recon Infosec https://discord.gg/aCArEkb7
is focused on Blue Team and SOC Analyst life. They are a security company led by security people.  "guaranteed good times".

Simply Cyber https://discord.gg/SimplyCyber
is Gerald's server. He strives to make safe spaces for asking questions and getting answers without criticism.

DC Cybersec https://discord.gg/v8ZVhEDv
Same as the YouTuber of the same name, DC Cybersec provides real talk on cybersecurity and promotes an inclusive good times community.

Cyber Job Hunting https://discord.gg/tjVaFdgu
Led by UK cyber recruiters, this server is all about helping people get jobs in the field and make sure their resume is tight and their mind is right for the job hunting process.

https://medium.com/@KillSwitchX7/cyber-security-discord-servers-7d9c0b7cd7cb

https://www.simplycyber.io/post/5-vetted-discord-cyber-communities-you-should-join

https://github.com/INIT6Source/Hacker_Hiring_Discords

<a target="_blank" href="https://www.youtube.com/watch?v=_XS9gr5OAwc">VIDEO</a>:
The SKF (Security Knowledge Framework) <a target="_blank" href="https://demo.SecurityKnowledgeFramework.org">demo.SecurityKnowledgeFramework.org</a> 
admin/secure-skf
now redirects to <a target="_blank" href="https://securityby.design/">https://securityby.design</a>
for security-by-design using the OWASP ASVS (Application Security Verification Standard).
defensive coding design patterns and code examples for ASP, java, PHP, Flask, Django, Go, Ruby, Nodejs. 
It provides checklist.

Proxies:
   * Browser "Developer Tools"
   * https://www.charlesproxy.com
   * https://www.telerik.com/fiddler
   * https://httptoolkit.tech/
   <br /><br />


WAF (Web Application Firewall) applies rules to bi-directional HTTP traffic, to detect XSS, SQL injection, Cookie poisoning, Unvalidated input, DoS, web scraping. But not all security issues. 
It can have performance issues.
AKA Application Security Manager. Can be configured as a reverse proxy that accepts traffic on a virtual IP address to proxy the traffic to a back-end server network behind the WAF. 


## CISO-targeted

https://www.pulseconferences.com/

<hr />

## Masters Degrees

* <a target="_blank" href="">Western Governors University</a> Masters in Cybersecurity online

* <a target="_blank" href="https://www.sans.edu/academics/degrees/msise">SANS Technology Institute</a> Master of Science in Information Security Engineering (MSISE) 

* Coursera online:<a target="_blank" href="https://www.coursera.org/degrees/msc-cyber-security-london">University of London</a> MSc in Cyber Security


## Resources


## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
