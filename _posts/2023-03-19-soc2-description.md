---
lawet: post
date: "2025-07-12"
lastchange: "v013 + br :2023-03-19-soc2-description.md"
url: https://wilsonmar.github.io/soc2-description
file: "soc2-description"
title: "SOC2 SystemDescription"
excerpt: "This is a sample of what an orrganization provides to SOC2 & ISO 27001 auditors."
tags: [security, SOC2]
comments: true
created: "2023-03-19"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

{% include whatever.html %}

Customers have come to expect to receive, anually, a SOC2 Type II report from external auditors of commercial organizations.

This sample SOC 2 System Description is customized by the organization for SOC2 & ISO 27001 auditors to use as the basis for conducting their SOC 2 Type 2 audit attestation report.

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

The <a href="#TSCs">five TSCs (Trust Services Criteria) for SOC2</a> (Trust Sevice Principles) defined by the AICPA Assurance Services Executive Committee (ASEC) is summarized in (<a target="_blank" href="https://7451111251303.gumroad.com/l/qagsq">this polar chart</a>, with a line for each moment of time, starting from A to B to C at completion: SAMPLE:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1705950775/soc2-polar-somm-240122-2176x1464_xzlizp.png"><img alt="soc2-polar-somm-240122-2176x1464.png" width="200" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1705950775/soc2-polar-somm-240122-2176x1464_xzlizp.png"></a>

<a target="_blank" href="https://www.youtube.com/watch?v=qXHlgZMOVfw&t=17m10s">VIDEO</a>:
This chart summarizes narratives for each <a href="#Who+Does+What">part of our organization</a>.

1. Security : How is my system protected against attacks?

   Security is the only Trust Services Criteria required for every SOC 2 audit. The other criteria are not required to achieve SOC 2 compliance.

   Security Criteria are also known as the <a href="#Common_Criteria">Common Criteria</a> to prove that a service organization’s systems and control environment are protected against unauthorized access and other risks.

2. Availability : How do we decide when to make data from the system available?

3. Processing Integrity : When infomration must be shared, what keeps the exchange secure?

4. Confidentiality : Does the system work the way it needs to?

5. Privacy : How do we ensure the system keeps private information safe?

Organizations are called to provide evidence during audits that controls implemented are effective and operational. Auditors typically expect documentation, process artifacts, and system logs to validate implementation. Our organization makes use of Xygeni to automate and centralize such evidence collection. It generates audit-ready outputs such as SBOMs, pipeline scan results, policy enforcement logs, and anomaly detection alerts. This helps teams reduce manual effort and ensures continuous compliance throughout the secure development lifecycle.

<a name="Common_Criteria"></a>

### SOC2 Common Criteria

The SOC 2 Common Criteria, also known as the "CC-series" (at <a target="_blank" href="https://assets.ctfassets.net/rb9cdnjh59cm/2sK6Ih6dzy6t7aU6RQvoeD/d97a2a14609e74a1af1ce9ab0b142b69/92317096_trust_services_criteria_red-lined_version.pdf">v2022 pdf</a>) has these nine subcategories and questions:

<a name="CC1"></a>

* CC1 = Control environment : Does the organization value integrity and security?

<a name="CC2"></a>

* CC2 = Communication and Information : Are policies and procedures in place to ensure security? Are they communicated well to both internal and external partners?

<a name="CC3"></a>

* CC3 = Risk Assessment : Does the organization analyze risk and monitor how changes impact that risk?

<a name="CC4"></a>

* CC4 = Monitoring Controls : Does the organization monitor, evaluate, and communicate the effectiveness of its controls?

<a name="CC5"></a>

* CC5 = Control Activities : Are the proper controls, processes, and technologies in place to reduce risk?

<a name="CC6"></a>

* CC6 = Logical and Physical Access Controls : Does the organization encrypt data? Does it control who can access data and restrict physical access to servers?

<a name="CC7"></a>

* CC7 = System Operations : Are systems monitored to ensure they function properly? Are incident response and disaster recovery plans in place?

<a name="CC8"></a>

* CC8 = Change Management : Are material changes to systems properly tested and approved beforehand?

<a name="CC9"></a>

* CC9 = Risk Mitigation : Does the organization mitigate risk through proper business processes and vendor management?


<a name="Dev_Journey"></a>

### Developer's Journey

<em>Here is an template of typical events for a developer covered in our training:</em>

1. Enroll in a hands-on mentorship to implement the mechanisms below. [Training records]

1. Pass quiz about understanding of policy directives.

   * SDLC policy
   * Process documentation
   * Secure development workflows
   * Security design documents
   <br />
1. Ensure a secure networking environment is being used, following:

	* Environment diagrams
	* Network segmentation policies
	* Access control lists
   * VPN access outside office
   <br />
1. Setup workspace to be ergonomic and minimized for static and other hazards.

1. Setup work environment (laptop) using automation scripts referencing versioned configurations.

1. Fetch recent updates to team assets by others before continuing work for the day.

   * Verify Work and Test plans
   * Security test plans
   * Secure coding guidelines
   <br />
1. Setup code scans to invoke automatically before of application and IaC (Infrastructure as Code) to common GitHub.

   * Identify secrets embedded in code
   * Detect Anomalies in pipeline (PHA)
   <br />
1. Conduct Software Composition Analysis (SCA) on open-source and third-party dependencies to identify potential security vulnerabilities, license compliance issues, and other risks 

   1. Obtain SBOMs of open-source and third-party components within the chain of references
   1. Assess each component supplier for concerns about activity history, developer changes, etc.
   1. Identify whether each component has been flagged as malware by US and European analysts
   <br />
1. Practice recognition and resolution of sample security issues (MITRE ATT&CK & WASP Top 10).

   * Code review checklists
   * Traceability matrix
   * Defect tracking logs
   <br />
1. Run apps with sample live data under DAST (Dynamic Application Testing) monitoring

	* Data handling procedures
	* Data masking policies
	* Anonymized datasets
   <br />
1. Setup automatic notification and team review by asset owner(s).

   * SAST scan reports
   <br />
1. Concurrence of others to release into production.

	* Release checklists
	* Deployment approval records
	* Release management documentation
	* blocking and build-break events
   <br />
1. Confirm protection backup snapshots before production updates.

1. Notification of audit success is registered to enable continuation into production.

1. Verify inclusion of run results in status reporting

1. Periodic audit logs of pipeline executions

1. Facilitate scheduled external penetration tests


### ISO 27001 Annex A

Annex A of the ISO 27001 standard outlines specific controls designed to strengthen the Secure Development Lifecycle (SDLC):

A.8.27 Secure System Architecture and Engineering

   * IaC misconfiguration scan reports
   * Anomaly Detection for pipeline design validation
    
* A.8.25 Secure Development Lifecycle (SDLC): Ensuring all phases of software development embed security practices, from initial design to release.

   * SDLC policy
   * Process documentation
   * Secure development workflows
   * Audit logs of pipeline executions

   * Pipeline security scans
   * Arch protection snapshots

* A.8.26 Application Security Requirements: Clearly define and embed security requirements within software development processes.

   * Security design documents
   * Traceability matrix

* A.8.27 Secure System Architecture and Engineering: Implementing security by design in the architecture and system engineering practices.

   * Architecture diagrams
   * Security design principles documentation
   * Threat models

* A.8.28 Secure Coding: Adopting secure coding guidelines and systematically identifying and mitigating insecure coding practices.

   * Secure coding guidelines
   * Code review checklists
   * Secure code audit reports

* A.8.29 Security Testing and Acceptance: Perform security testing throughout development and before release to find and fix vulnerabilities early.

   * Security test plans
   * Test reports (SAST, DAST, penetration tests)
   * Defect tracking logs
   * SAST, SCA, Secrets Detection, and Malware scan logs integrated into CI/CD

* A.8.30 Outsourced Development: Oversee and control security risks when working with outsourced teams or third-party developers.

	* Third-party security requirements
	* Supplier agreements
	* Third-party audit results
	* SBOMs: VDR reports for open-source and third-party components

* A.8.31 Separation of Development, Test, and Production: Isolate the different SDLC environments to protect system integrity.

	* Environment diagrams
	* Network segmentation policies
	* Access control lists
	+ Not supported: Requires external infrastructure and process evidence

* A.8.32 Secure Coding Guidelines: Develop secure coding standards and ensure the development teams apply them consistently.

	Internal secure coding standards:
	* Training records
	* Secure code reviews
	+ Policy enforcement in pipelines

* A.8.33 Security in the Software Supply Chain: Manage security risks for third-party software components and dependencies.

	* Supplier assessments
	* SBOMs (Software Bill of Materials)
	* Vulnerability assessment reports
	* SCA scan reports
	* Early Malware Detection alerts
	* SBOM generation evidence

* A.8.34 Source Code Access Control: Apply “Least Privilege” to restrict unauthorized change or leak.

	* Access control policies
	* Repository audit logs
	* Identity management reports
	* Anomaly Detection logs for repository access monitoring

* A.8.35 Secure Release of Software: Only tested and secure software versions go to production.

	* Release checklists
	* Deployment approval records
	* Release management documentation
	* blocking and build-break events

* A.8.36 Information Security During Testing: Protect sensitive data during software testing activities.

	* Data masking policies
	* Anonymized datasets
	* Data handling procedures


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

Our organization makes use of Xygeni:

Proactive risk reduction:
   * Static Application Security Testing (SAST): Identifies vulnerabilities in proprietary code early in the SDLC.
   * Software Composition Analysis (SCA): Detects risks in open-source components and maintains up-to-date SBOMs.
   * Secrets Detection: Continuously scans for hardcoded credentials and API keys in code and CI/CD pipelines.
Continuous monitoring:
    * Anomaly Detection: Monitors developer and pipeline behavior in real-time to detect unauthorized activity.
    * Policy Guardrails: Enforces ISO 27001 controls by blocking builds that fail security checks.
    * Early Malware Detection: Prevents malicious open-source packages from being introduced into projects.
    * Guardrails for Infrastructure as Code (IaC) Security: Flags security misconfigurations in Terraform, Kubernetes, and CloudFormation.
End-to-end supply chain visibility:
    * SBOM & VDR Generation: Automates the production of Software Bill of Materials and Vulnerability Disclosure Reports.
    * Prioritization Funnels: to focus remediation on exploitable vulnerabilities using <strong>reachability and risk scoring</strong>.

Audit-ready evidence:

<a href="#Operations">To the Operations chapter ></a>



<a name="Infrastructure_desc"></a>

## Infrastructure

This chapter describes the hardware, software, and SaaS components used in our systems’ infrastructure (both physical and virtual).

This includes computing hardware, internet servers, storage, connections among these elements, and our cybersecurity <a href="#Monitoring">monitoring</a> technology. The documentation includes lists, descriptions, and a diagram of our systems.

<a href="#Infrastructure">To the Infrastructure chapter</a>


<a name="Customer_Data_desc"></a>

## Customer Data

This chapter describes the kinds of data that come into and move out of our product and service systems.

This includes a high-level chart or table that lists the data types used.
The diagram highlighting the journey - including data present in our files, internal databases, and external storage.

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

There are 17 COSO Principles for (3 x 4) = 204 items.

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

* <a href="#Applications">Applications</a>
* Networks
* Servers
* Databases
* Utilities

<a name="Applications"></a>

### Applications Systems

<em>Here are the most common systems used by enterprises:</em>

* Email: Google Workspace, Microsoft Outlook/Exchange server, etc.
* Phishing education and simulation: KnowBe4, etc.
* Chat: Slack, Microsoft Teams, etc.
* SMS Text to mobile phones: Twilio, etc.
* Video: Zoom, Microsoft Teams, Loom, etc.
* Video editing: Camtasia, Loom, etc.
* SVG image file editing: macSVG
* PNG image file editing: 

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

* <a href="#Operations_policies">policiess</a> defines the behavior desired of employees and contractors.
* <a href="#Operations_procedures">proceduress</a> prescribes specific steps that are taken in response to key events.
* <a href="#Operations_standards">standards</a> specify the controls satisfied by the compliance program.

* Automation (github Actions cicleci) job runs to render policy files as PDF.


<a name="Operations_templates">templates</a> provide sample assets to adapt. They thus make it easier to control the output format of the HTML Dashboard and PDF assets.


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


<a name="SOMM"></a>

### Maturity Model Levels

Levels for rating status are adapted from <a target="_blank" href="https://logrhythm.com/solutions/security-operations-maturity-model/">this SOMM (Security Operations Maturity Model)</a> <a target="_blank" href="https://7451111251303.gumroad.com/l/zyuba">illustration</a>:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1705947975/soc2-somm-240122-2884x1152_oehmgp.png"><img alt="soc2-somm-240122-2884x1152.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1705947975/soc2-somm-240122-2884x1152_oehmgp.png"></a>

The level of each control/practice:

   * 0 "Iron" = INITIAL = not fully documented.
   * 1 "Copper" = PERFORMED = <strong>documented</strong> for each practice
   * 2 "Silver" = MANAGED = also <strong>follow plans and policies</strong> by resources
   * 3 "Gold"= MEASURED = also <strong>measured and tested</strong> for effectiveness, with results shared
   * 4 "Platinum" = DEFINED = also <strong>standardized</strong> (automated) and confirmed as followed by all resources
   * 5 "Palladium" = OPTIMIZED = also <strong>improvements</strong> are demonstrated
   <br /><br />

BTW, an alternative is <a target="_blank" href="https://www.wikiwand.com/en/Cybersecurity_Maturity_Model_Certification">CMMC maturity model rating</a> which was deprecated in 2021 in favor of a "Fundamental, Advanced, and Expert" levels.


<hr />

<a name="Operations_policies">policies</a>

### Operations Policies

These are principles that set the "rules of the road" and expectations for the organization.
They answer the “what” and “why”—what must be done, and why it matters.

1. We practice "<strong>Zero Trust</strong>" strategies which avoid long-lasting permission setting and secrets which could be stolen. Instead, we grant permissions when they are needed. This is slightly less convenient, but provide much better protection in today's hostile internet.


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

1. Don't include potentially sensitive information in emails, Slack, or other public channels.

1. Do not store <a href="#Secrets">Secrets (such as passwords, API keys, private keys, environment variables, private configuration data, .env files, etc.)</a> 

   Get approval before storing IP addresses, subnets, and AWS account IDs, in a private repository.

   It's okay to publish IAM roles, policies, and group names as long as who belongs to those is not attached to the information. This helps deter spear phishing. You may store this information in a private repository.

1. Use alternative secret management approaches and solutions (such as HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, etc.).

1. Password protect files before sending them to others. 
1. Send the encrypted file and password to the recipient in separate channels, with the password ideally through something ephemeral like a phone call.

1. In the event that such variables or configuration data is pushed to a GitHub repository accidentally, even momentarily, consider it compromised and revoke or change the credentials immediately. Do not delete the commit itself. Then immediately follow the directions on the incident response handbook page. If you're unsure how to protect this information, ask. 

1. Build Pipeline Security to protect sensitive information in CI/CD workflows, for automatic execution upon commit locally, before publishing to GitHub, so that you can remove sensitive data before accidentally publishing it. (This repo assumes MacOS with Homebrew installed.)

1. Install automated checks for sensitive information because it's easy to accidentally push secrets to GitHub.

   https://github.com/cloud-gov/caulking adds automation to the use of GitLeaks.
   
1. If you inadvertently come into the possession of classified information (Secret, Top Secret, etc.), immediately follow our security incident process.

1. Because encryption on files exfiltrated can be broken over time, store data within encrypted USB drives with built-in hardware encryption unlocked by entry on keypad or biometric authentication on device. Vendors IronKey, Kingston DataTraveler, SanDisk SecureAccess provide one with both USB-C and iPhone Thunderbolt connectors. Test device encryption and decryption by accessing from each device (laptops, iPhones, Android, etc.).

1. VeraCrypt is often recommended for maximum security and flexibility.

1. Store backup copies of passwords and recovery keys separately in a <strong>lockbox</strong>.


<a name="Operations_standards">standards</a>

### Operations Standards

Standards are like speed limits posted on each road—they tell you exactly what’s required to stay within the rules.

1. <strong>Schedule</strong> processes to create evidence data and System Assessment Plans (SAPs) as the basis for audit and reporting during the audit period (6 months to a year). 

1. Automatically monitor versions and send notification for automatic update. Outdated firmware is a common attack vector.

1. Review security policies and procedures (System Security Plans) <strong>every quarter</strong>.

1. Conduct internal and external pen-testing <strong>every 6 months</strong>.

1. <strong>Test and track compliance</strong> and report progress each week/month on where each team still needs additional work, with projections toward when audit readiness will occur. Metrics for the Security Operations Center incident response and corrective action:

https://www.youtube.com/watch?v=dJgLnNK78YI
https://www.youtube.com/watch?v=LLpLU317zfc
https://www.youtube.com/watch?v=fDm5e_-600I phone searches by TSA
Faraday bags
https://www.youtube.com/watch?v=9ZLMDMk5rzk

1. Use a different common ranges like 192.168.1.x to something less predictable.

1. Before leaving your home, set biometric authenticate off so that it's more difficult to force you to unlock your phone.

When traveling:
1. Detect the reflection of hidden cameras using https://www.amazon.com/abyliee-Upgraded-Hidden-Camera-Detector/dp/B0F4DWR2W6/


<a name="Operations_procedures">proceduress</a>

### Operations Procedures

Here are step-by-step instructions that describe how to carry out a task or process. Procedures are like a recipe or a checklist—they guide you through each step so nothing gets missed. They answer the “how”—how to actually do what the policy and standards require. Included in each procedure are the key events triggering actions to be taken.

1. Onboarding: How to setup & backup a developer macBook
1. Onboarding: How to setup a developer with accounts (GitHub, etc.)
1. Onboarding contractor, vendor, customer, auditor
1. Onboarding: How to secure home internet services

1. Patch: How to update software in GitHub (as CONTRIBUTOR)
1. Offboarding: How to decomission a developer macBook
1. How to reset your password

1. Preparing for safe travel
1. Maintaining safety while traveling

1. Recruiting
1. Training


#### Workstation

To achieve a high level of privacy and security, privacy advocates, activists, and individuals at risk of targeted attacks <strong>compartmentalize</strong> their identity and activities using multiple, distinct "lives" for personal security. This approach is commonly called <strong>"10 lives"</strong> in reference to cats.

This helps to limit the damage if one identity is compromised and makes it harder for adversaries to "connect the dots" between activities.

Those who adhere to this approach use separate sets of email addresses, phone numbers, bank accounts, payment methods, social media accounts, etc. 

* Use a <strong>password manager</strong> to keep credentials unique and secure for each identity.
* Use different browsers or browser profiles for each identity.
* Use VPNs or Tor to mask location and prevent linking identities by IP.
* Remove metadata from photos automatically.
* Generate temporary Virtual Machines/Sandboxing with sandboxing tools to isolate activities.
* Use privacy-focused OS like Tails or Qubes for sensitive identities.


* Generate emails using Safari browser, Blur, InstAddr.

* Generate phone numbers using Hushed or Google Voice, or prepaid SIMs.

* Purchase property using an LLC so your name doesn't appear on public titles and thus make you vulnerable to doxing. Criminals often threat of doxing.

* Search for your own information online to see what’s exposed.
* Request to remove your information from search engines.
* Delete Old Accounts: Remove unused or risky accounts and information that could link your identities.

* Do not give out phone numbers assigned by your mobile carrier.
* Purchase burner phones using cash in another city for social media or high-risk activities.
   1500 talk/text/data over 365 days on Tracfone.
 for about $50.
 Moto G Stylus 5G with the same one year plan for $100. There is also usually a coupon you can find for new accounts and purchases over $50 which can knock the price down a few dollars. For more talk, text or data, go with Metro and the Pixel 6a for $50 with a new number. Your first month has to be $40, so your first month is going to be around $100. One thing to keep in mind, do it online and they'll send it to you with 2 day shipping. If you go into a store, they will probably try to charge you an activation fee. After that first month, you can then try to lower the monthly plan to their "unlimited" $25 plan.

 AT&T Cingular Flex 2 from walmart for $30 and then bought the Freedompop 100/100/100 sim for $5 from Target which uses the AT&T network 

 https://www.cnet.com/tech/mobile/traveling-abroad-get-a-burner-phone-to-keep-your-data-private/

Don't use WhatsApp https://www.youtube.com/watch?v=vgVI5Ba9Trc

In your bag:
* Veracrypt to encrypt your laptop. Techlore Tails
* A battery to charges your phone. Use instead of plugging your phone to charge on public "charging stations" that are often untrustworthy.
* USB-C to USB-C cable to charge your phone.
* Adapters USB-C to USB-A and USB-A to USB-C
* Faraday bag to keep your phone from being hacked.
* A sliding camera cover for your phone
* A sliding camera cover for your laptop 
* A crypto hardware wallet "The Ledger"

When

1. Block access from IP addresses known to be from countries you don't usually deal with. Open up access only when needed. This is not convenient but more secure.

Home server: Network Gateway Firewall, Parental controls, VPN Server and Client, ad block, network segment, bandwidth useage. 

* Medium sized businesses use Sonicwall and Fortinet security appliances.
* <a target="_blank" href="https://www.amazon.com/Netgate-1100-pfSense®-Plus-Software/dp/B07MTMPXKG/ref=sr_1_9">$209 Netgate 1100</a> has pfSense+</a> was tagged Amazon's Choice.

   Alternately, Firewalla is purchased from Amazon at Blue, Gold level. No monthly fee.
   Cyber Security Firewall for Home & Business, Protect Network from Malware and Hacking | 
   operates as a phone app my/firewalla.com puts reliance on their infrastructure
   but allows for configuration changes remotely
   * Gold  https://www.youtube.com/watch?v=sgTUTlqe1hM IDS
   * $249 Purple SE) https://www.amazon.com/Firewalla-Security-Firewall-Business-Parental/dp/B0BYMN4YZ3/ but continue 
   * Router Mode, Bridge Mode, 

C. Firewalla devices maintain a connection to Firewalla servers, so if you don't want that vulnerability, install open source software on your own Rasberry Pi device.

* Alternatively, OpenWrt
* Ubiquiti 
* UniFi Dream Machine https://www.youtube.com/watch?v=Omm2pQUJO0o&pp=0gcJCcEJAYcqIYzv

* Work with spouses and family members to keep their information separate from yours.


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
* https://github.com/gjyoung1974/soc2-policy-templates
* https://xygeni.io/articles/iso-27001-compliance-in-appsec/ 
* https://open.nytimes.com/how-to-dox-yourself-on-the-internet-d2892b4c5954 


<hr />