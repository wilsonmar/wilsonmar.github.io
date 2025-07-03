---
lawet: post
date: "2025-07-03"
lastchange: "v009 + outline :2023-03-19-soc2-description.md"
url: https://wilsonmar.github.io/soc2-description
file: "soc2-description"
title: "SOC2 Description"
excerpt: "This is a template for what an orrganization provides to SOC2 auditors."
tags: [security, SOC2]
comments: true
created: "2023-03-19"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

{% include whatever.html %}

This sample SOC 2 System Description is given to SOC2 auditors as the basis for their SOC 2 Type 2 audit attestation report which our customers expect to receive.

There is a possibility that a misstated or inaccurate System Description could result in a qualified opinion. 

So this System Description is meant to be an objective overview of the system being audited and aims to avoid “marketing/sales” type language than the AICPA SOC examination guidance calls “advertising puffery”.

PRIVATE AND CONFIDENTIAL
This document requires executive approval before being shared with specific third parties.
A unique watermark is added to each copy distributed.

<a name="Index"></a>

## Index of narratives

Chapters here include these narratives:

<a href="#People_desc">A. People</a> [<a href="#People">content</a>]<br />
<a href="#Products_Services_desc">B. Products and Services</a> [<a href="#Products_Services">content</a>]<br />
<a href="#Operations_desc">C. Operations</a> [<a href="#Operations">content</a>]<br />
<a href="#Infrastructure_desc">D. Infrastructure</a> [<a href="#Infrastructure">content</a>]<br />
<a href="#Customer_Data_desc">E. Customer Data</a> [<a href="#Customer_Data">content</a>]<br />

Additionally, companion pages to this include procedures and quizzes for each role, etc.

### TSC (Trust Service Criteria)

This document describe how our company satisfies the TSC (Trust Service Criteria), formerly called the Trust Services Principles, defined by the AICPA (American Institute of Certified Public Accountants for secure, trustworthy systems.

The <a href="#TSCs">five TSCs (Trust Services Criteria) for SOC2</a> developed by the AICPA Assurance Services Executive Committee (ASEC) is summarized in (<a target="_blank" href="https://7451111251303.gumroad.com/l/qagsq">this polar chart</a>, with a line for each moment of time, starting from A to B to C at completion: SAMPLE:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1705950775/soc2-polar-somm-240122-2176x1464_xzlizp.png"><img alt="soc2-polar-somm-240122-2176x1464.png" width="200" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1705950775/soc2-polar-somm-240122-2176x1464_xzlizp.png"></a>

<a target="_blank" href="https://www.youtube.com/watch?v=qXHlgZMOVfw&t=17m10s">VIDEO</a>:
This chart summarizes several charts for each <a href="#Who+Does+What">part of our organization</a>.

1. Security : How is my system protected against attacks?

   Security is the only Trust Services Criteria required for every SOC 2 audit. The other criteria are not required to achieve SOC 2 compliance.

   Security Criteria are also known as the <a href="#Common_Criteria">Common Criteria</a> to prove that a service organization’s systems and control environment are protected against unauthorized access and other risks.

2. Availability : How do we decide when to make data from the system available?
3. Processing Integrity : When infomration must be shared, what keeps the exchange secure?
4. Confidentiality : Does the system work the way it needs to?
5. Privacy : How do we ensure the system keeps private information safe?

<a name="Common_Criteria"></a>

### SOC2 Common Criteria

The SOC 2 Common Criteria list, also known as the "CC-series", has these nine subcategories:

* CC1 — Control environment : Does the organization value integrity and security?
* CC2 — Communication and Information : Are policies and procedures in place to ensure security? Are they communicated well to both internal and external partners?
* CC3 — Risk Assessment : Does the organization analyze risk and monitor how changes impact that risk?
* CC4 — Monitoring Controls : Does the organization monitor, evaluate, and communicate the effectiveness of its controls?
* CC5 — Control Activities : Are the proper controls, processes, and technologies in place to reduce risk?
* CC6 – Logical and Physical Access Controls : Does the organization encrypt data? Does it control who can access data and restrict physical access to servers?
* CC7 – System Operations : Are systems monitored to ensure they function properly? Are incident response and disaster recovery plans in place?
* CC8 – Change Management : Are material changes to systems properly tested and approved beforehand?
* CC9 – Risk Mitigation : Does the organization mitigate risk through proper business processes and vendor management?


### Topic Classification

<p><span class="usa-tag" style="background-color: #cd2026;">Requirement</span>
indicates practices that <em>must</em> be done for regulatory, legal, compliance, or other reasons.</p>
<p><span class="usa-tag" style="background-color: #f9c642; color: black;">Standard</span>
signifies practices that have a strong consensus across 18F; they should generally be followed to ease the ATO process and make on-boarding simpler.</p>
<p><span class="usa-tag" style="background-color: #2e8540;">Default</span>
practices are safe selections that tend to be used by a large number of our projects; you may find yourself with a better or more tailored solution, however.</p>
<p><span class="usa-tag">Suggestion</span>
indicates examples that have worked well on a project or two; they're not widely used enough to be defaults, but are worth considering.</p>
<p><span class="usa-tag" style="background-color: black; color: white;">Caution</span>
marks approaches that have significant pitfalls or should not be used for security/compliance reasons.</p>
<p>If a specific classification is not present on a topic or reference to a tool or practice, it should be presumed to be a <span class="usa-tag">Suggestion</span>
.</p>

<em>Source: https://guides.18f.org/engineering/</em>


<a name="Secrets"></a>

### What is considered secret or sensitive information?

Anything that would make our systems vulnerable or would impact the privacy of others if it fell into the wrong hands.

* passwords
* API Keys
* private certificates and keys
* usernames
* email (messages)
* IP addresses
* subnets
* resource IDs
* account IDs
* non-public security vulnerabilities
* roles, policies, and group membership
* Personally Identifiable Information (PII)
   See Releasability of GSA Individual Employee Information in the GSA Data Release Policy (commonly referred to as "business card PII") for exceptions
* payment card industry (PCI) information
* Controlled Unclassified Information (CUI)
* Federal Tax Information (FTI)
* personal health information (PHI/ePHI)
* some kinds of acquisition information
* emergency procedures, such as evacuation plans

If you aren't sure whether something is sensitive information, please ask.

<a href="#Operations_policies">To Policies to keep secrets secure</a>.

<hr />

<a name="People_desc"></a>

## People

This chapter describes the departments, teams, and functions that play a role related to our product or service. 

This includes a list of our central departments, followed by an organizational chart - 
including third-party vendors or subcontractor organizations that support our offering.

<a href="#People">To the People chapter</a>


<a name="Products_Services_desc"></a>

## Products and Services

This chapter describes the products and services we market to customers. 

This includes the application (if relevant), system requirements, system processing guidelines, service level agreements, supporting databases, and mobile and desktop applications.

Per SOC2, excluded are our operational technology (payroll software, chat service, or project management tools).

This section contains introductory paragraphs explaining, at a high level, how the application is used and a follow-up list of the components involved.

<a href="#Products_Services">To the Products and Services chapter</a>


<a name="Operations_desc"></a>

## Operations chapter

This chapter describes the key processes, both manual and automated, involved in managing the use of our products and services. 

This includes how service activities are commenced, our authorization system, activities performed, and how our services are delivered.

<a href="#Operations">To the Operations chapter</a>


<a name="Infrastructure_desc"></a>

## Infrastructure

This chapter describes the hardware, software, and SaaS components used in our systems’ infrastructure (both physical and virtual).

This includes computing hardware, internet servers, storage, connections among these elements, and our cybersecurity <a href="#Monitoring">monitoring</a> technology. The documentation includes lists, descriptions, and a diagram of our systems.

<a href="#Infrastructure">To the Infrastructure chapter</a>


<a name="Customer_Data_desc"></a>

## Customer Data

This chapter describes the kinds of data that come into and move out of our product and service systems.

This includes a high-level chart or table that lists the data types used, plus a diagram highlighting the journey - including data present in our files, internal databases, and external storage.

This also details how our control environment protects our data, which includes <strong>internal controls</strong> for safeguarding data against unauthorized access and risk management. Internal controls include training materials, access controls, and change management protocols. This also include the control objectives and control activities to mitigate risks.

<a href="#Customer_Data">To the Customer Data chapter</a>


<hr />

<a name="People"></a>

## People chapter

<a href="#People_desc"><em>About this chapter</em></a>

### Organizational Types

Our organization is organized in 4 types for <a href="#COSO+Analysis">COSO Analysis</a>:

* Executive (Leadership) & Finance (Budget)
* Marketing & Sales (to prospects and customers)
* Legal, HR, PR, IAM & <a href="https://wilsonmar.github.io/soc/">SOC</a> teams
* Operations & R&D - Physical & Digital Infrastructure
<br /><br />

Please refer to the spreadsheet/database of people, their role in the organization, and other metadata.

<a name="COSO+Analysis"></a>

### COSO Analysis

There are 17 COSO Principls. That's 17 x 3 x 4 = 204 items.

### Who Does What

<table border="1" cellpadding="4" cellspacing="0">
<tr><th>Who</th><th>Deliverables</th><th> # Walkthroughs </th><th> Auditor Hours</th></tr>
<tr valign="top"><td> Sales & Marketing </td><td> <a href="#Timeline">Timeline</a>, Description of product/service in auditor reports
   </td><td> 1-2 </td><td> 4-8 </td></tr>
<tr valign="top"><td> Leadership </td><td> Auditor agreement, Assertion of Mangement in Draft auditor reports
   </td><td> 1-2 </td><td> 4-8 </td></tr>
<tr valign="top"><td> Legal, HR, PR </td><td> Customer Agreements, Employee Policies & Agreements, Breach Communications
   </td><td> 1-2 </td><td> 4-8 </td></tr>
<tr valign="top"><td> Security <a href="https://wilsonmar.github.io/soc/">SOC</a> </td><td> <a href="#RISK_MANAGEMENT">Risk management</a>, <a href="#BUSINESS_CONTINUITY">Business Continuity</a>, <a href="#monitoring-activities-cc4">Monitoring</a>, Malware detection, <a href="#AUDIT_&_COMPLIANCE">Audit & Compliance</a>
   </td><td> 1-2 </td><td> 10-20 </td></tr>

<tr valign="top"><td> Facilities </td><td> <a href="#ACCESS_CONTROL">Facilities Access Control</a>, <a name="ASSET_MANAGEMENT">Asset Management</a>
   </td><td> 1-2 </td><td> 1-2 </td></tr>
<tr valign="top"><td> Info technology Operations </td><td> <a href="#SECURITY_OPERATIONS">Security Operations</a> (Security Policies, Network security), <a href="#DATA_SECURITY">Data Security</a> (in IT Operations), <a href="#INFORMATION_&_COMMUNICATIONS">Information & Communications</a>
   </td><td> 1-2 </td><td> 10-20 </td></tr>
<tr valign="top"><td> Engineering, DevSecOps, Development </td><td> <a href="#ACCESS_CONTROL">Systems Access Control</a>, <a href="#SDLC_SECURITY">SDLC</a> (Change Controls)
   </td><td> 1-2 </td><td> 10-20 </td></tr>
<tr valign="top"><td colspan="2"> Total </td><td> 7-13 </td><td> 43-98 </td></tr>
</table><a href="#[2]">[2] 16:32</a>


<a name="Products_Services"></a>

## Products and Services chapter

<a href="#Products_Services_desc"><em>About this chapter</em></a>


<a href="#Infrastructure"></a>

## Infrastructure chapter

<a href="#Infrastructure_desc"><em>About this chapter</em></a>

### Applications Systems

<em>Here are the most common systems used by enterprises:</em>

* Email: Google Workspace, Microsoft Outlook/Exchange server, etc.
* Phishing education and simulation: KnowBe4, etc.
* Chat: Slack, Microsoft Teams, etc.
* SMS Text to mobile phones: Twilio, etc.
* Video: Zoom, Microsoft Teams, Loom, etc.
* Video editing: Camtasia, Loom, etc.

* Document creation: Microsoft Word, Google Docs, etc.
* Flowcharts: Lucid Chart, Figma, etc.
* File sharing: Microsoft OneDrive, Google Drive, etc.
* Project Management: Excel, <a target="_blank" href="https://wilsonmar.github.io/jira/">Jira</a>, Trello, Asana, etc.

* Payroll: ADP, etc.
* Documents & Signatures: Adobe sign, DocuSign, etc.
* Accounting: QuickBooks, etc.
* Recruiting & HR: Workday, etc.
* Training Presentation & Tracking: Workday, Cornerstone, etc.
* Surveys, Certifications: SurveyMonkey, etc.
* Spiffs: Xactly, etc.

* E-commerce: Shopify, GoDaddy, etc.
* Social media: LinkedIn, Instagram, Facebook, Twitter/X, etc.
* Employee reviews: Glassdoor, Indeed, etc.
* Conference: EventBrite, etc.
* CRM (Customer Relationship Management): HotSpot, Salesforce, Microsoft Dynamics, etc.

* Text editor IDEs: Visual Studio Code, etc.
* Text editor external plugins: Prettier, etc.
* macOS apps: iTerm2, etc.
* Windows apps: PuTTY, etc.
* Linux apps: Vim, etc.
* MDM: Jamf, etc.

* Cloud: AWS, Azure, Google Cloud, etc.
* Endpoint Security: CrowdStrike, etc.
* Cloud IAM: Okta, etc.
* CI/CD: GitHub Actions, Jenkins, etc.
* Source Code Versioning: GitHub, GitLab, etc.
* Containerization: Docker, Kubernetes, etc.
* Artifact (packages, containers): Artifactory, etc.

* SAST: SonarQube, etc.
* DAST: Burp Suite, etc.
* IAST: Contrast Security, etc.

* Configuration Management: Ansible, Chef, Puppet, etc.
* Infrastructure as Code: OpenTofu, Terraform, etc.
* IaC Scanning: Checkov, IPSec, etc.

* SIEM Observability/Monitoring: Prometheus, Grafana, Datadog, New Relic, etc.
* SOAR: Demisto, Phantom, etc.
* Logging: Grafana, Splunk, etc.
* Incident Management: PagerDuty, etc.

* ERP: SAP, Oracle, etc.
<br /><br />

Each of the above is considered an asset to be maintained and protected.



<a name="Operations"></a>

## Operations

<a href="#Operations_desc"><em>About this chapter</em></a>

To <a href="https://github.com/strongdm/comply">generate compliance documents</a> based on reference to SOC2 compliance automation frameworks such as from <a target="_blank" href="https://www.strongdm.com/comply">StrongDM</a>.

Our compliance documents are organized as follows in our document repository:

* <a href="#Operations_policies">policiess</a>       defines the behavior desired of employees and contractors.
* <a href="#Operations_procedures">proceduress</a>     prescribes specific steps that are taken in response to key events.
* <a href="#Operations_standards">standards</a>      specify the controls satisfied by the compliance program.

A github Actions cicleci job runs to render policy files as PDF.


<a name="Operations_templates">templates</a>      Templates control the output format of the HTML Dashboard and PDF assets.

### Operations Templates

<a name="Operations_narratives">narratives</a>

### Operations Naratives

<a href="#Infrastructure_desc"><em>About this chapter</em></a>

To provide an overview of the organization and the compliance environment:

* <a href="#Ops_control">control</a>
* <a href="#Ops_organizational">organizational</a>
* <a href="#Ops_products">products</a>
* <a href="#Ops_security">security</a>
* <a href="#Ops_system">system</a>


<a name="Ops_control"></a>

### Ops control


<a name="Ops_organizational"></a>

### Ops organizational

<a name="Ops_products"></a>

### Ops products

<a name="Ops_security"></a>

### Ops security

<a name="Ops_system"></a>

### Ops system



<hr />

<a name="Operations_policies">policiess</a>

### Operations Policies

To define the behavior desired of employees and contractors:

* <a href="#access">access</a>
* <a href="#application">application</a>
* <a href="#availability">availability</a>
* <a href="#change">change</a>
* <a href="#classification">classification</a>
* <a href="#conduct">conduct</a>
* <a href="#confidentiality">confidentiality</a>
* <a href="#continuity">continuity</a>
* <a href="#cyber">cyber</a>
* <a href="#datacenter">datacenter</a>
* <a href="#development">development</a>
* <a href="#disaster">disaster</a>
* <a href="#encryption">encryption</a>
* <a href="#incident">incident</a>
* <a href="#information">information</a>
* <a href="#log">log</a>
* <a href="#media">media</a>
* <a href="#office">office</a>
* <a href="#password">password</a>
* <a href="#policy">policy</a>
* <a href="#privacy">privacy</a>
* <a href="#processing">processing</a>
* <a href="#remote">remote</a>
* <a href="#retention">retention</a>
* <a href="#risk">risk</a>
* <a href="#SI-Controls">SI-Controls</a>
* <a href="#workstation">workstation</a>
* <a href="#vendor">vendor</a>
<br /><br />

1. Please don't include potentially sensitive information in emails, Slack, or other public channels.

1. Do not store <a href="#Secrets">Secrets (such as passwords, API keys, private keys, environment variables, private configuration data, .env files, etc.)</a> 

   Get approval before storing IP addresses, subnets, and AWS account IDs, in a private repository.

   It's okay to publish IAM roles, policies, and group names as long as who belongs to those is not attached to the information. This helps deter spear phishing. You may store this information in a private repository.

1. Instead, use alternative secret management approaches and solutions (such as HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, etc.).

1. Password protect files before sending them to others. 
1. Send the encrypted file and password to the recipient in separate channels, with the password ideally through something ephemeral like a phone call.

1. In the event that such variables or configuration data is pushed to a GitHub repository accidentally, even momentarily, consider it compromised and revoke or change the credentials immediately. Do not delete the commit itself. Then immediately follow the directions on the incident response handbook page. If you're unsure how to protect this information, ask. 

1. Build Pipeline Security to protect sensitive information in CI/CD workflows, for automatic execution upon commit locally, before publishing to GitHub, so that you can remove sensitive data before accidentally publishing it. (This repo assumes MacOS with Homebrew installed.)

1. Install automated checks for sensitive information because it's easy to accidentally push secrets to GitHub.

   gitleaks at https://github.com/cloud-gov/caulking
   
1. If you inadvertently come into the possession of classified information (Secret, Top Secret, etc.), immediately follow our security incident process.




<a name="Operations_procedures">proceduress</a>

### Operations Procedures

To prescribe specific steps to be taken in response to key events.

1. recruiting
1. onboarding (employee, contractor, vendor, customer, auditor)
1. training
1. payroll
1. workstation (CLI, utilities, etc.)
1. patch software (github)
1. offboarding


<a name="Operations_standards">standards</a>

### Operations Standards

To specify the controls satisfied by the compliance program, rather than writing control information in a word processor, 
we write compliance as code in the OpenControl YAML format files defined at https://github.com/opencontrol

1. Schedule processes to create evidence data and System Assessment Plans (SAPs) as the basis for audit and reporting during the audit period (6 months to a year). 

1. Review security policies and procedures (System Security Plans) <strong>every quarter</strong>.

1. Conduct internal and external pen-testing <strong>every 6 months</strong>.


### Metrics

The following are logged for each access request available in each dashboard:

#### Logs

Logged for each access request:

| Log Item name | Description | Example |
| --- | --- | --- |
| Access Requests Created Time | Date and time when the access request was created | 2025-03-10 12:00:00 |
| Access Requests Start From Time | Requested start date and time indicated in the access request | 2025-03-06 13:01:10 |
| Access Requests Status | Access request status (canceled, denied, pending, or timed out) | Pending |
| Requests Status Time | Date and time of the last access request status update | 2025-03-05 17:06:15 |
| Approver Email | Approver’s user email | alice.grady@acme.com |
| User Email | User name (first and last) and user email | bob.belachek@acme.com |
| User Name from Email | User name (first and last) associated with user email | Bob Belachek |
| Workflows Name | Name of workflow | RW Admin Workflow |

### Alerts

1. Send alerts about application errors, downtime, and throughput issues.

   For example, New Relic provides application availability monitoring with “Synthetics”.

1. Track time taken to respond to significant events.

   * Mean Time to respond/remediate
   * Mean Time to acknowledge
   * Mean Time to close (Incident dwell time)

### Incident Closure

1. Track incident resolution:

   * Percentage of false positives


<a name="Customer_Data"></a>

## Customer Data

<a href="#Customer_Data_desc"><em>About this chapter</em></a>

<hr />

## Resources

* https://guides.18f.org/

<hr />