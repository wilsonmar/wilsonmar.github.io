---
layout: post
date: "2023-11-14"
file: "security-certs"
title: "Security Certifications"
excerpt: "There are several (overlapping) ones."
tags: [security,certs]
image:
# security-certs-1905x908.png
  feature: https://user-images.githubusercontent.com/300046/103753295-19cf4680-4fc8-11eb-9c7a-d23d3c5c2d79.jpg
  credit: Paul Jerimy
  creditlink: https://pauljerimy.com/security-certification-roadmap
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://user-images.githubusercontent.com/300046/120815122-c9bfc600-c50c-11eb-8a48-3dac8358542c.png"><img align="right" alt="resume-certificate-158x112.png" width="100" src="https://user-images.githubusercontent.com/300046/120815122-c9bfc600-c50c-11eb-8a48-3dac8358542c.png"></a>
For security professionals, there are several expensive overlapping certification exams, from competing agencies.

{% include whatever.html %}

This map is from <a target="_blank" href="https://pauljerimy.com/category/book-reviews/">security techo thriller book reviewer</a> Paul Jerimy at<br /><a target="_blank" href="https://pauljerimy.com/security-certification-roadmap/">https://pauljerimy.com/security-certification-roadmap:
<img width="1613" alt="security-cert-landscape" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1690304615/security-certs-1905x908_lsmbyg.png"><br /><em>Click for full screen image.</em></a>

<a target="_blank" href="https://docs.google.com/spreadsheets/d/1Bk35IoIglqcPtcMLQUX4CLwaXgh8rdvw4UrbHqGJlE8/edit#gid=1478534077">spreadsheet</a>
by Dean Bushmiller


## CCSK (Cloud Security Alliance Certificate of Security Knowledge)

<a target="_blank" href="https://cloudsecurityalliance.org/education/ccsk/">The Certificate of Cloud Security Knowledge (CCSK)</a> is marketed as a complement to other credentials (CCAK, CISA, CISSP, CCSP) by the Seattle-based <a target="_blank" href="https://cloudsecurityalliance.org/">Cloud Security Alliance (CSA)</a> which also markets <a target="_blank" href="https://cloudsecurityalliance.org/education/#_ccsk">training</a>. 

QUESTION: The CSA <a target="_blank" href="https://github.com/cloudsecurityalliance/ctpd">Cloud Trust Protocol Daemon protoype</a> is inactive?

<a target="_blank" href="https://www.whizlabs.com/learn/course/ccsk-pt/">
Whizlabs has sample tests</a> but questionable quality with too many double negative questions and answers.

The CCSK is an <strong>open-book, online exam</strong>, completed in 90 minutes. Purchasing the exam costs $395 (free to veterans) for two test attempts, which you will have 2 years to use. The minimum passing score is 80% of the 60 multiple-choice vendor-neutral questions selected randomly from the CCSK question pool in v4 of the exam available December 1, 2017:

   * 6% are based on the <a target="_blank" href="http://www.enisa.europa.eu/act/rm/files/deliverables/cloud-computing-riskassessment">2009 Cloud Computing report</a> from the <a target="_blank" href="http://www.enisa.europa.eu/">ENISA (European Network and Information Security Agency)</a>

   * 7% are based on <a target="_blank" href="https://cloudsecurityalliance.org/download/cloud-controlsmatrix-v3-0-1/">CSA’s CCM (Cloud Controls Matrix) spreadsheet 3.0.1</a> which cross references the many other standard worldwide (AICPA, PIPEDA, CIS, COBIT, CSA, ENISA, FedRAMP, GAAP, HIPPA, HITRUST, IEC, NIST, PCI, etc.). It is the basis for CSA's <a target="_blank" href="https://cloudsecurityalliance.org/research/working-groups/consensus-assessments/">Consensus Assessments Initiative Questionnaire (CAIQ)</a> industry-accepted way to document which security controls exist in IaaS, PaaS, and SaaS services, which inputs to <a target="_blank" href="https://cloudsecurityalliance.org/star/">"Level 1" of the STAR (CSA Security Trust Assurance and Risk)</a> <a target="_blank" href="https://cloudsecurityalliance.org/star/registry/">Registry</a> of vendors.

   * 87% are based on the <a target="_blank" href="https://cloudsecurityalliance.org/download/security-guidance-v4/">CSA Guidance v4</a> at PROTIP: <a target="_blank" href="https://github.com/cloudsecurityalliance/CSA-Guidance">https://github.com/cloudsecurityalliance/CSA-Guidance</a> -- a masterwork providing a summary of terms and concepts which integrate the various worldwide standards. 

https://www.meetup.com/Cloud-Security-Alliance-Northeast-Ohio-Chapter/events/275707693/
Cloud Security Alliance NorthEast Ohio chapter

Domain 1 Cloud Computing Concepts and Architectures
* Definitions of Cloud Computing
   - Service Models
   - Deployment Models
   - Reference and Architecture Models
   - Logical Model
* Cloud Security Scope, Responsibilities, and Models
* Areas of Critical Focus in Cloud Security
<br /><br />

Domain 2: Governance and Enterprise Risk Management
* Tools of Cloud Governance
* Enterprise Risk Management in the Cloud
* Effects of various Service and Deployment Models
* Cloud Risk Trade-offs and Tools
<br /><br />

Domain 3: Legal Issues, Contracts and Electronic Discovery
* Legal Frameworks Governing Data Protection and Privacy
  - Cross-Border Data Transfer (GDPR)
  - Regional Considerations (California)
* Contracts and Provider Selection
  - Contracts
  - Due Diligence (is the practice of Due Care)
  - Third-Party Audits and Attestations (SOC, ISO)
* Electronic Discovery
  - Data Custody
  - Data Preservation
  - Data Collection
  - Response to a Subpoena or Search Warrant
<br /><br />

Domain 4: Compliance and Audit Management
* Compliance in the Cloud
  - Compliance impact on cloud contracts
  - Compliance scope
  - Compliance analysis requirements

* Audit Management in the Cloud
  - Right to audit
  - Audit scope
  - Auditor requirements
<br /><br />

Domain 5: Information Governance
* Governance Domains
* Six phases of the Data Security Lifecycle and their key elements
* Data Security Functions, Actors and Controls
<br /><br />

Domain 6: Management Plane and Business Continuity
* Business Continuity and Disaster Recovery in the Cloud
* Architect for Failure
* Management Plane Security
<br /><br />

Domain 7: Infrastructure Security
* Cloud Network Virtualization
* Security Changes With Cloud Networking
* Challenges of Virtual Appliances
* SDN Security Benefits
* Micro-segmentation and the Software Defined Perimeter
* Hybrid Cloud Considerations
* Cloud Compute and Workload Security
<br /><br />

Domain 8: Virtualization and Containers
* Mayor Virtualizations Categories
* Network
* Storage
* Containers
<br /><br />

Domain 9: Incident Response
* Incident Response Lifecycle
* How the Cloud Impacts IR
<br /><br />

Domain 10: Application Security
* Opportunities and Challenges
* Secure Software Development Lifecycle
* How Cloud Impacts Application Design and Architectures
<br /><br />

Domain 11: Data Security and Encryption
* Data Security Controls
* Cloud Data Storage Types
* Managing Data Migrations to the Cloud
* Securing Data in the Cloud
<br /><br />

Domain 12: Identity, Entitlement, and Access Management
* IAM Standards for Cloud Computing
* Managing Users and Identities
* Authentication and Credentials
* Entitlement and Access Management
<br /><br />

Domain 13: Security as a Service
* Potential Benefits and Concerns of SecaaS
* Major Categories of Security as a Service Offerings
<br /><br />

Domain 14: Related Technologies
* Big Data
* Internet of Things
* Mobile
* Serverless Computing
<br /><br />


## Certified Infosec NIST CSF

While it develops a new Cybersecurity Certification Exam, ISACA's <a target="_blank" href="https://www.isaca.org/credentialing/csx-p">4-hour CSX-P (Cybersecurity Practitioner) exam</a>, derived from the <a target="_blank" href="https://www.nist.gov/cyberframework">NIST Cyber Framework</a> was sunsetted on 30 April 2023. 

For $674.95 plus $100 annual membership and $399.95 for the required 3-day on-line class or $3,995  on-site class, get the <a target="_blank" href="https://www.certifiedinfosec.com/services/certification-programs/iso-27001-information-security/nist-cyber-security-framework-lead-implementer
">"NIST Cybersecurity Framework Lead Implementer" certification</a> by answering 75% of 65 questions in 70 minutes. Test content, training, and proctoring are all provided by a single profit-making organization: Certified Information Security (https://www.certifiedinfosec.com), founded by <a target="_blank" href="https://www.linkedin.com/in/allenkeele/">Allen Keele</a>.

Domains covered by the test:
1. Framework Core Functions of the NIST CSF
   * Identify threats and vulnerabilities
   * Protect systems from outside threats
   * Detect threats and system vulnerabilities
   * Respond to and mitigate cyber incidents
   * Recover from incidents and disasters
2. Framework Implementation Tiers (Cybersecurity Risk Management)
3. Framework Profiles
4. Converging NIST CSF into an ISO 27001 Information Security Management System (ISMS).
<br /><br />

<a target="_blank" href="https://learning.oreilly.com/live-events/nist-cybersecurity-framework-lead-implementer-crash-superreview-by-allen-keele/0636920071391/0636920092266/?utm_medium=email&utm_source=platform+b2c&utm_campaign=engagement&utm_content=lot+recording">Crash SuperReview on OReilly.com</a> covers 2 of the 3 day class.

https://learning.oreilly.com/library/view/cybersecurity-career-master/9781801073561/
Cybersecurity Career Master Plan 

https://learning.oreilly.com/videos/nist-cybersecurity-framework/9781787782396/
NIST Cybersecurity Framework - A pocket guide 

<hr />

## ISC2.org

ISC2.org (a non-profit), publishes a Code of Ethics at <a target="_blank" href="https://www.isc2.org/ethics">https://www.isc2.org/ethics</a>

https://www.isc2.org/Certifications/Qualification-Pathfinder

<a target="_blank" href="https://www.isc2.org/Register-for-Exam/ISC2-Exam-Pricing">Prices for exams</a> taken at Pearson Vue test centers:

### CC: Certified in Cybersecurity (CC)
$199

<a name="SSCP"></a>

### SSCP

<a target="_blank" href="https://www.isc2.org/Register-for-Exam/ISC2-Exam-Pricing">$249 USD</a> <a target="_blank" href="https://www.isc2.org/Certifications/SSCP">SSCP (Systems Security Certified Practitioner)</a>

### CGRC

<a target="_blank" href="https://www.isc2.org/Register-for-Exam/ISC2-Exam-Pricing">$599 USD</a> <a target="_blank" href="https://www.isc2.org/Certifications/CGRC">CGRC (Certified Government Risk and Compliance) professional</a> -- previously CAP (Certified Authorization Professionl) until Feb 23, 2023 -- is for individuals with 2+ years of experience being responsible for the implementation and management of information security risk management and compliance programs. Pass 70% of 125 questons over 3 hours at a <a target="_blank" href="https://www.pearsonvue.com/isc2/">Pearson VUE Testing Center</a>.

CGRC Content maps to the NIST SP 800-37 RMF (Risk Management Framework)
<a target="_blank" href="https://nira.com/nist-csf-categories/">categories</a>:
   * "Left of boom": Identify, Protect
   * "Right of boom": Detect, Respond, Recover
   <br /><br />

CGRC is taken from a broad spectrum of vendor-neutral topics in the CGRC Common Body of Knowledge (CBK®) over <a target="_blank" href="https://www.isc2.org/-/media/ISC2/Certifications/Exam-Outlines/2021/CAP-Exam-Outline.ashx">7 domains</a>:
   1. Information Security Risk Management Program 
      * Control Objectives for Information and Related Technology (COBIT)
      * International Organization for Standardization (ISO) 27001, 
      * International Organization for Standardization (ISO) 31000, 
      * Federal Information Security Modernization Act (FISMA), 
      * Federal Risk and Authorization Management Program (FedRAMP), 
      * General Data Protection Regulation (GDPR), 
      * Health Insurance Portability and Accountability Act (HIPAA)
   2. Scope of the Information System:
      * Federal Information Processing Standards (FIPS) 199, 
      * International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 27002, 
      * data protection impact assessment
   3. Selection and Approval of Security and Privacy Controls: baseline and inherited controls; control enhancements (e.g., security practices, overlays, countermeasures); continuous control monitoring strategy (e.g., implementation, timeline, effectiveness); Information Security Management System (ISMS) 
   4. Implementation of Security and Privacy Controls
      * Information Technology Security Guidance ITSG-33 – Annex 3A, 
      * Technical Guideline for Minimum Security Measures, 
      * United States Government Configuration Baseline (USGCB), 
      * National Institute of Standards and Technology (NIST) checklists, 
      * Security Technical Implementation Guides (STIGs)
      * Center for Internet Security (CIS) benchmarks, 
      * General Data Protection Regulation (GDPR)
   5. Assessment/Audit of Security and Privacy Controls
      * Risk treatment options (i.e., accept, avoid, transfer, mitigate, share)
   6. Authorization/Approval of Information System
   7. Continuous Monitoring
   <br /><br />

   * https://www.isc2.org/certifications/References#
   * https://www.isc2.org/Certifications/CAP/experience-requirements
   * https://resources.infosecinstitute.com/overview/cgrc/ reports there are 4,157 CGRC/CAP holders
   <br /><br />

<a target="_blank" href="https://www.linkedin.com/in/geraldauger/">Gerald Auger, PhD</a> (<a target="_blank" href="https://SimplyCyber.io">SimplyCyber.io</a>, publisher of the  <a target="_blank" href="https://simplycyber.teachable.com/">$30 GRC (Governance, Risk management, and Compliance) Analyst Master Class</a>. The first scholarly research on GRC was published in 2007 where GRC was formally defined as "the integrated collection of capabilities that enable an organization to reliably achieve objectives, address uncertainty, and act with integrity." Good governance <a target="_blank" href="https://aws.amazon.com/what-is/grc/">includes</a>:
   * Ethics and accountability
   * Transparent information sharing
   * Conflict resolution policies
   * Resource management
   <br /><br />


<a name="CISSP"></a>

### CISSP

<img align="right" alt="CISSP-logo- Square-131x131" width="131" height="131" src="https://user-images.githubusercontent.com/300046/116986846-8531d800-ac8b-11eb-83af-651083c07bb3.png">
Even at <a target="_blank" href="https://www.isc2.org/Register-for-Exam/ISC2-Exam-Pricing">$749 USD</a>, the <a target="_blank" href="https://www.isc2.org/Certifications/CISSP">Certified Information Systems Security Professional exam</a> (pronouced "sis pee") is a sought-after technical certification in cybersecurity leaders as the "gold standard" of vendor-neutral cybersecurity certifications. Earning it proves you understand cybersecurity from a management viewpoint -— a requirement if your organization is subject to PCI, GDPR, HIPAA, SOX, ISO 27001, or other regulations. 

The first version of the CISSP Common Body of Knowledge (CBK) was finalized in 1992 and the CISSP credential was launched in 1994.
Since it's an internationally recognized, there are questions about cybersecurity regulations in Canada, UK, EU, etc.

Rather than the previous 250 questions over 6 hourse, the CISSP exam is now <strong>adaptive</strong>, asking 100-150 questions, depending on whether answers are correct. 
PROTIP: With Adaptive Testing, your objective is to get hard questions. So study as if you'll get all hard questions. The better you are, the harder the test is. If you aced the first 10 questions, you'll be put into "brutal mode".
With CAT (Computer Adaptive Testing), the more one aces every question, the quicker she would get done before the 3 hours.
<a target="_blank" href="https://www.youtube.com/watch?v=5nqqL1rjIY4">VIDEO</a>:
This also means you won't be able to go back and change answers in previous questions answered.

There is a 5 year experience requirement, attested by other professionals after you pass the exam.

The CISSP has 3 different <strong>concentrations</strong>:

* ISSAP = Architecture
   1. Architect for Governance, Compliance and Risk Management
   2. Security Architecture Modeling
   3. Infrastructure Security Architecture
   4. Identity and Access Management (IAM) Architecture
   5. Architect for Application Security
   6. Security Operations Architecture
   <br /><br />
   
* ISSEP = Engineering
   1. Systems Security Engineering Foundations
   2. Risk Management
   3. Security Planning and Design
   4. Systems Implementation, Verification and Validation
   5. Secure Operations, Change Management and Disposal
   <br /><br />

* ISSMP = Management
   1. Leadership and Business Management
   2. Systems Lifecycle Management
   3. Risk Management
   4. Threat Intelligence and Incident Management
   5. Contingency Management
   6. Law, Ethics, and Security Compliance Management
   <br /><br />

You need to pass at least 70% on <em>each</em> CISSP domain. 

### CISSP Domains

   1. <a target="_blank" href="https://wilsonmar.github.io/cyber-security">></a> <a target="_blank" href="https://www.linkedin.com/learning/cissp-cert-prep-2021-1-security-and-risk-management" title=" 2h 52m">
   Security and Risk Management</a> - 334
   2. <a target="_blank" href="https://wilsonmar.github.io/cyber-security">></a> <a target="_blank" href="https://www.linkedin.com/learning/cissp-cert-prep-2021-2-asset-security">
   Asset Security</a> - 44
   3. <a target="_blank" href="https://wilsonmar.github.io/cyber-security">></a>  <a target="_blank" href="https://www.linkedin.com/learning/cissp-cert-prep-2021-3-security-architecture-and-engineering">
   Security (Architecture and) Engineering</a> - 268
   4. <a target="_blank" href="https://wilsonmar.github.io/cyber-security">></a> <a target="_blank" href="https://www.linkedin.com/learning/cissp-cert-prep-2021-4-communication-and-network-security">
   (Communication and) Network Security</a> - 114 on OSI model
   5. <a target="_blank" href="https://wilsonmar.github.io/cyber-security">></a> <a target="_blank" href="https://www.linkedin.com/learning/cissp-cert-prep-2021-5-identity-and-access-management">
   Identity and Access Management (IAM)</a> - 82 on biometrics
   6. <a target="_blank" href="https://wilsonmar.github.io/cyber-security">></a> <a target="_blank" href="https://www.linkedin.com/learning/cissp-cert-prep-2021-5-identity-and-access-management">
   Security Assessment and Testing</a> - 41 on NIST SP 800-92
   7. <a target="_blank" href="https://wilsonmar.github.io/cyber-security">></a> <a target="_blank" href="https://www.linkedin.com/learning/cissp-cert-prep-2021-7-security-operations">
   Security Operations</a> - 245 
   8. <a target="_blank" href="https://wilsonmar.github.io/cyber-security">></a> <a target="_blank" href="https://www.linkedin.com/learning/cissp-cert-prep-2021-8-software-development-security/" title="Released: 4/19/2021">
   Secure Software Security (Development Lifecycle)</a> - 164 includes a <a target="_blank" href="https://www.linkedin.com/learning/cissp-cert-prep-2021-8-software-development-security/fuzz-testing">demo of ZAP Proxy for fuzzing</a>, <a target="_blank" href="https://www.linkedin.com/learning/cissp-cert-prep-2021-8-software-development-security/code-repositories">Git & GitHub</a>.
   <br /><br />

Click on ">>" in front of each link to reach my notes at <a target="_blank" href="https://wilsonmar.github.io/cyber-security">https://wilsonmar.github.io/cyber-security</a>

Numbers to the right of his videos are counts of questions in the <a target="_blank" href="https://learning.oreilly.com/certifications/9780135955444/">OReilly/Pearson bank</a>:

Links under each domain title are to Mike Chapple's 33-hour LinkedIn Learning videos (and <a target="_blank" href="https://www.youtube.com/channel/UCcefHUoPp8aKB7vaafrulgw/videos">on YouTube</a>). He provides detailed, sequenced lectures, <a target="_blank" href="https://www.youtube.com/watch?v=ERi6uB6qyHQ">updated for the May 2021 BOK</a>. He includes demos of the most popular software. 
Links to each CISSP domains contains a link to his tutorial on that domain. 

Parentheses in domain names contain words removed in the 2023 version of CISSP.

   "Every domains are interconnected. It's swimming with overlap."

Official Flash cards of definitions:

   1. <a target="_blank" href="https://www.isc2.org//Training/Self-Study-Resources/Flashcards/CISSP/Security-and-Risk-Management"> The Information Security Environment</a> - 18 items
   2. <a target="_blank" href="https://www.isc2.org//Training/Self-Study-Resources/Flashcards/CISSP/Asset-Security">Information Asset Security</a> - 17 items
   3. <a target="_blank" href="https://www.isc2.org//Training/Self-Study-Resources/Flashcards/CISSP/Security-Architecture-and-Engineering">Identity and Access Management (IAM)</a> - 24 items
   4. <a target="_blank" href="https://www.isc2.org//Training/Self-Study-Resources/Flashcards/CISSP/Communication-and-Network-Security">Security Architecture and Engineering</a> - 48 items
   5. <a target="_blank" href="https://www.isc2.org//Training/Self-Study-Resources/Flashcards/CISSP/Identity-and-Access-Management">Communication and Network Security</a> - 88 items
   6. <a target="_blank" href="https://www.isc2.org//Training/Self-Study-Resources/Flashcards/CISSP/Security-Assessment-and-Testing">Software Development Security</a> - 101 items
   7. <a target="_blank" href="https://www.isc2.org//Training/Self-Study-Resources/Flashcards/CISSP/Security-Operations">Security Assessment and Testing</a> - 18 items
   8. <a target="_blank" href="https://www.isc2.org//Training/Self-Study-Resources/Flashcards/CISSP/Software-Development">Security Operations</a> - 62 items

   * <a target="_blank" href="https://www.isc2.org//Training/Self-Study-Resources/Flashcards/CISSP/Software-Development-Security">Putting it All Together</a> - 34 items
   <br /><br >

https://learning.oreilly.com/search/?q=cissp&type=*&rows=10
Search on OReilly.com

<a target="_blank" href="https://www.linkedin.com/in/deanbushmiller/">Dean Bushmiller</a> (of ExpandingSecurity.com) has a live <a target="_blank" href="https://learning.oreilly.com/live-training/courses/cissp-bootcamp/0636920483199/">CISSP Bootcamp on OReilly.com</a> where he goes over his <a target="_blank" href="https://github.com/deanbushmiller/CISSP-Bootcamp/wiki/">wiki on GitHub</a>. It contains his glossary, notes, and <a target="_blank" href="https://drive.google.com/drive/folders/1-0qj1lmbI0x89ZPTC_sPEmMdLDBTvE3F" title="1@vmlt.com">proprietary visual "mind maps"</a>. 888.225-0888

   1. SRM = <a target="_blank" href="https://cloudacademy.com/quiz/35709/">Security and Risk Assessment</a>
   2. ANT = <a target="_blank" href="https://cloudacademy.com/quiz/35788/">Asset Security</a>
   3. SAE = <a target="_blank" href="https://cloudacademy.com/quiz/35824/">Security Architecture and Engineering</a>
   4. CNS = <a target="_blank" href="https://cloudacademy.com/quiz/35869/">Communication and Network Security</a>
   5. IAM = <a target="_blank" href="https://cloudacademy.com/quiz/36014/">Identity and Access Management</a>
   6. KAS = <a target="_blank" href="https://cloudacademy.com/quiz/36540/">Security Testing and Assessment</a> = Knowledge Asset Security?
   7. OPS = <a target="_blank" href="https://cloudacademy.com/quiz/36541/">Security Operations</a>
   8. DEV = <a target="_blank" href="https://cloudacademy.com/quiz/36542/">Security Development Security</a>
   <br /><br />

Quizzes on CloudAcademy.com by exam domain:


Written References:

   * <a target="_blank" href="https://www.amazon.com/Certified-Information-Security-Professional-Official/dp/1119523265/">$58</a> <a target="_blank" href="https://learning.oreilly.com/library/view/isc2-cissp-certified/9781119475934/">Sybex BOOK</a>: "(ISC)2 CISSP Certified Information Systems Security Professional <strong>Official Study Guide</strong> & Practice Tests Bundle Second Edition" by Mike Chapple, who has a video course on LinkedIn Learning which is deep yet concise, with effective sequencing of topics. He also shows demos of security-related Windows programs where appropriate, such as Windows Firewall Log Viewer.

   * <a target="_blank" href="https://josephdelgadillo.com/cissp-testprep-cheatsheet/">Joseph Delgadillo's cissp-testprep-cheatsheet</a> provides a PowerPoint file.

   * <a target="_blank" href="https://wilsonmar.github.io/cyber-security/">My notes on cyber security</a> highlights what to remember.

<a target="_blank" href="https://www.linkedin.com/pulse/where-do-i-find-cissp-practice-questions-nick-webb/">Practice Questions</a>:

   * PROTIP: The toughest questions among samples is <a target="_blank" href="https://twitter.com/ITDojo">@ITDojo</a> <a target="_blank" href="https://www.youtube.com/watch?v=jZSAZ1neFZk&list=PLBpnwlO9U5unYmbZp2DJETNOHg8s_yW37">VIDEO: Question of the day</a>, 100+ of them explained by Colin Weaver from 2017. 

   * <a target="_blank" href="https://cloudacademy.com/learning-paths/preparation-for-the-cissp-certification-640/">CloudAcademy.com "CISSP Prep."</a> [subscription] has a timed (40 minute) Knowledge Check of about 20 questions for each domain, available on mobile phones.

   * <a target="_blank" href="https://insidethemicrosoftcloud.com/cissp-practice-quiz/">50 question CISSP Practice Quiz online</a>
   
   * <a target="_blank" href="https://www.youtube.com/channel/UCAr0yk0um7lwLjmrKfzwyig/videos">On Youtube</a>

   * <a target="_blank" href="https://www.sunflower-cissp.com/glossary/cissp/5497/download-sunflower-cissp-2019-pdf-document">PDF: Sunflower CISSP</a>

   * <a target="_blank" href="https://www.studynotesandtheory.com/single-post/practice-question-security-testing">VIDEO</a> at <a target="_blank" href="https://www.studynotesandtheory.com/​">studynotesandtheory.com</a> by <a target="_blank" href="https://www.linkedin.com/in/luke-ahmed-%F0%9F%9A%80-446601133/">Luke Ahmed</a>, who is dedicated to CISSP education (since 2013). (@securityengineer on <a target="_blank" href="https://www.facebook.com/studynotesandtheory/">Facebook</a>, <a target="_blank" href="https://t.me/+V3KJK22nXNsyMTVk">Telegram</a>).
   PROTIP: I found his native-sounding English excellent. 
   I think his <a target="_blank" href="https://studynotesandtheory.mykajabi.com/products/study-notes-and-theory-a-cissp-study-guide">videos</a>, flash cards, and practice questions are worth the $49 per month (less when buying for a year) because his focus is on how to study and remember content for the exam. He helps by providing memorable conceptual hooks.
   He is the only one I know who compares differences between content in Shon Harris 7th vs. Sybex books.
   He provides detailed analysis of why each answer is correct or not.
   But I can do without the 10 seconds of intro music each module.
   And it's annoying to have to reset speed and quality every module.

   * https://learning.oreilly.com/videos/cissp-certification-training/9781771373753/9781771373753-video212908

   * <a target="_blank" href="https://www.cbtnuggets.com/learn/it-training/playlist/nrn:playlist:certification:5c26ad6349417f090094f404">cbtnuggets 11 hrs 56 mins</a> $599.00 USD/year by Keith Barker	

   * Michael Gregg's CISSP Practice Questions on OReilly 2016 are in text.

Not yet updated to CISSP 01 May 2021 changes:

   * <a target="_blank" href="https://www.cbtnuggets.com/learn/it-training/playlist/nrn:playlist:certification:5c26ad6349417f090094f404">
   CBTNubbets</a> by Keith Barker and Ben Finkel.


Video prep courses view:

   * <a target="_blank" href="https://learning.oreilly.com/live-events/cissp-crash-course/0636920123187/">OReilly Live</a> and <a target="_blank" href="https://learning.oreilly.com/videos/cissp-second-edition/9780135180488">LiveSessions book</a> by Sari Greene (<a target="_blank" href="https://www.sarigreene.com/">sarigreene.com</a>) provides a deep dive of all video courses I've viewed. 26 hours. A quiz of terms at the end of each video. From 2018.

   * <a target="_blank" href="https://www.youtube.com/watch?v=M1_v5HBVHWo">FreeCodeCamp</a> has a single 13 hour video FREE on YouTube to cover all topics. From 2020.

   * <a target="_blank" href="https://www.youtube.com/watch?v=4esHgEOmTqU&list=PLWqLeluv2Rq2jH70NFPYm0PB8sDMJ8gJR">YouTube playlist on CISSP FREE</a> by "Skillset" provides a good overview, but it's from 2016.

   * <a target="_blank" href="https://learning.oreilly.com/certifications/9780135955444/">Pearson CSSLP practice test provides questions. The <a target="_blank" href="https://pearsontestprep.com/#/examsettings">PearsonTestPrep.com</a> software enables display of individual domains from all 4 tests at once, showing only questions you missed before. Explanations are given as to why each response is correct or not.

   * <a target="_blank" href="https://www.isc2.org/Register-for-Exam/ISC2-Exam-Pricing">$599 USD</a> <a target="_blank" href="https://www.isc2.org/Certifications/CSSLP">CSSLP (Certified Secure Software Lifecycle Professional)</a> is the secure <strong>software development</strong> certification. The 15 Sep 2020 edition is NOT covered in the <a target="_blank" href="https://learning.oreilly.com/library/view/csslp-certification-all-in-one/9781260441697/">All-in-One book</a> by Wm. Arthur Conklin, Daniel Paul Shoemaker. 

   <a target="_blank" href="https://www.linkedin.com/in/slandail?trk=lil_course">Jerod Brennen</a> created video courses (on LinkedIn Learning) for each domain:

   1. <a target="_blank" href="https://www.linkedin.com/learning/csslp-cert-prep-1-secure-software-concepts?u=26886050">Secure Software Concepts</a> Released Feb 12, 2020 (Confidentiality, Integrity, Availability triad, IAM, design)
   
   2. <a target="_blank" href="https://www.linkedin.com/learning/csslp-cert-prep-2-secure-software-requirements?u=26886050">Secure Software Requirements</a>

   3. <a target="_blank" href="https://www.linkedin.com/learning/csslp-cert-prep-3-secure-software-design?u=26886050">Secure Software Design</a> 1h 48m 

   4. Secure Software Implementation/Programming

   5. Secure Software Testing (<a target="_blank" href="https://www.linkedin.com/learning/online-application-security-testing-essential-training/">online</a> and <a target="_blank" href="https://www.linkedin.com/learning/offline-application-security-testing-essential-training/">offline</a>)

   6. Secure Lifecycle Management

   7. Secure Deployment, Operations, and Maintenance

   8. Supply Chain and Software Acquisition

Quizzing Tests:

   * <a target="_blank" href="https://www.amazon.co.uk/CISSP-Official-ISC-Practice-Tests-ebook/dp/B07D8FZN8M/">BOOK: ISC2 official practice tests</a>


   * Kelly Handerhan, the "Mister Rogers of CISSP" <a target="_blank" href="https://www.youtube.com/watch?v=v2Y6Zog8h2A">"Why you will pass the CISSP" video</a> among her <a target="_blank" href="https://www.youtube.com/watch?v=-99b1YUFx0A&list=PLJ-B2OMLT_K89_2YNVj2I7UJMIwuxZydg">YouTube playlist</a> on <a target="_blank" href="https://www.cybrary.it/">cybrary.it</a> 
   which include accompanying mp3 for listening.

   * <a target="_blank" href="https://quizlet.com/54298697/csslp-flash-cards/">Official 20-item</a> CSSLP Flashcards on Quizlet vs. <a target="_blank" href="https://quizlet.com/54298697/csslp-flash-cards/">89-item</a>

   * https://github.com/deanbushmiller/CISSP-Bootcamp

   * <a target="_blank" href="https://app.pluralsight.com/paths/certificate/certified-secure-software-lifecycle-professional-csslpr">Pluralsight video courses</a> by Kevin Henry (kevinmhenry at msn) is from 2017 and is too high general for me.

   * <a target="_blank" href="https://thorteaches.com/udemy/">On Udemy</a>, <a target="_blank" href="https://mckinsey.udemy.com/course/cissp-certification-practice-exam-1/learn/quiz/4377650#overview">McK</a> <a target="_blank" href="https://www.udemy.com/user/thorpedersen/​">Thor Pederson courses</a> and <a target="_blank" href="https://www.udemy.com/course/cissp-certification-practice-exam-1/">3 sets of 125 questions in 3 hours</a>. Has a Facebook Groups to join: <a target="_blank" href="https://www.facebook.com/groups/ThorTeaches">ThorTeaches</a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=Mpn3Sd9f4lc&list=PLOYQCApvKhV2-j38RvgfHHdsB_VSDPfpP&index=2">8 YouTube videos from The Cloud Tech Guy Joe</a> Jan, 2020 talks about the subject rather than taking a deep dive.

   * <a target="_blank" href="https://mckinsey.udemy.com/course/isc2-csslp-certification-exam-prep-practice-exams/">Practice Exams 2020</a> by Chandrika Patel

   * <a target="_blank" href="https://www.amazon.co.uk/Eleventh-Hour-CISSP%C2%AE-Study-Guide/dp/0128112484/">18.17 LB BOOK: 11th Hour</a>

   * Mindmap videos: https://www.youtube.com/channel/UCXk6...​ 

   * <a target="_blank" href="https://www.cissprep.net">$24.99 Cissprep.net Memorisation sheet</a> calls itself "The Best and Most Accurate CISSP Practice Exams" provides Study tips, 28 30-minute quick quizzes, four 1-hour exams, <a target="_blank" href="https://community.isc2.org/t5/CISSP-Study-Group/gh-p/CISSP_Study_Group_Hub">StudyGroup</a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=Igq9Q3r00uk">CISSP MasterClass™ Mission</a> by Sagar Bansal

   * <a target="_blank" href="https://www.sageknowsit.com/product/ebook-infosec-brain-dump-template/">https://www.sageknowsit.com/product/ebook-infosec-brain-dump-template</a>$14.99 eBook: InfoSec Brain Dump Template w/Study Schedule

YouTube videos with content index (and ads) by Rob Richa, with <a target="_blank" href="https://www.linkedin.com/in/jberti/">John Berti</a> of Destination Certifications:

1. <a target="_blank" href="https://www.youtube.com/watch?v=geGALIfOxtI​&t=30s">Security & Risk Management</a>

2. <a target="_blank" href="https://www.youtube.com/watch?v=aN9zkmzYTmQ​&t=30s">Asset Classification</a>
  <a target="_blank" href="https://www.youtube.com/watch?v=lrI4QIa8S2I​&t=30s">Privacy:</a>

3. Identity and Assess Management

4. Security Architecture and Engineering:
   * Models and Frameworks: https://www.youtube.com/watch?v=qZB6_lp9M30​&t=30s
   * Evaluation Criteria: https://www.youtube.com/watch?v=WqHmDL7YAvw​&t=30s
   * Trusted Computing Base: https://www.youtube.com/watch?v=fwU7n_3h058​&t=30s
   * Vulnerabilities in Systems: https://www.youtube.com/watch?v=fPUypU7ysMw​&t=30s
   * Cloud: https://www.youtube.com/watch?v=-rWQ7YuxiLY​&t=30s
   * Cryptography: https://www.youtube.com/watch?v=LLRaa0kOMDM​&t=30s
   * Digital Certificates, Digital Signatures & PKI: https://www.youtube.com/watch?v=8XKdFSG3ua4​&t=30s
   * Cryptanalysis: https://www.youtube.com/watch?v=pnITDgs63M4​&t=30s
   * Physical Security: https://www.youtube.com/watch?v=7ESQwNJ9HXU​&t=30s
   <br /><br />

5. Access Control Overview: https://www.youtube.com/watch?v=BUcoABZzeQ4​&t=30s
   Single Sign-on & Federated Access: https://www.youtube.com/watch?v=_U4QMIxVk8M​&t=30s

6. Security Assessment and Testing Overview: https://www.youtube.com/watch?v=eDVZvw5NziA​&t=30s
   * Vulnerability Assessment and Penetration Testing: https://www.youtube.com/watch?v=vZ0S8GdWiIk​&t=30s
   * Logging & Monitoring: https://www.youtube.com/watch?v=cwcARccyWyY​&t=30s
   <br /><br />

7. Security Operations:
   * Investigations: https://www.youtube.com/watch?v=Urev5cZgny8​&t=30s - Locard's Principle: perp. will leave something behind and take something
   * Incident Response: https://www.youtube.com/watch?v=PwxFwndQ7Jk​&t=30s
   * Malware: https://www.youtube.com/watch?v=SVbrRozyIpo​&t=30s
   * Patching & Change Management: https://www.youtube.com/watch?v=xX4U6Lz82Bk​&t=30s
   * Recovery Strategies: https://www.youtube.com/watch?v=DrrfrJBnx28​&t=30s
   * Business Continuity Management (BCM): https://www.youtube.com/watch?v=oAjNL3I_3-E​&t=30s
   <br /><br />

8. Secure Software Development (Lifecycle)
   * https://youtu.be/fS5WWjuyFmQ​&t=30s
   * Databases: https://youtu.be/-70DBd6cNDw&t=30s
   <br /><br />


Bootcamp: <a target="_blank" href="https://www.youtube.com/watch?v=pgEn1h_too0&list=PLETKkWHNA3qgWGW54totIqfHpAwQT574b&index=12">13 day 2 hours each from April 13, 2020 FRSecure CISSP Mentor Program (12th year) streaming by <a target="_blank" href="https://twitter.com/evanfrancen?lang=en">@evanfrancen</a>. S2me.io

<a target="_blank" href="https://www.youtube.com/watch?v=_nyZhYnCNLA&list=PL7XJSuT7Dq_XPK_qmYMqfiBjbtHJRWigD">8-hour VIDEO CISSP Exam Cram from Pete Zerger's Inside Cloud and Security (2022 edition)</a>

Posted by SANS Blue Team Ops:
   * <a target="_blank" href="https://www.youtube.com/watch?v=bopYRxAyTU8">CISSP Cram Session</a> Jun 28, 2020. Slides at <a target="_blank" href="https://www.EricConrad.com/">EricConrad.com</a>, author of <a target="_blank" href="https://mtg414.com/">MGT414.com</a>: SANS Training Program for CISSP® Certification, as well as the <a target="_blank" href="https://www.amazon.com/CISSP-Study-Guide-Third-Conrad/dp/0128024372">CISSP® Study Guide (Syngress)</a>.
   * <a target="_blank" href="https://www.youtube.com/watch?v=5nqqL1rjIY4">Test-Taking Tactics</a>

Flash cards:

   * https://quizlet.com/343215416/csslp-exam-guide-flash-cards/

Suggestions:

   * <a target="_blank" href="https://www.youtube.com/watch?v=8BvAx0n500k&list=RD8BvAx0n500k&start_radio=1&rv=8BvAx0n500k&t=0">
   Ignore the Orange Book</a>. Focus on 15408 Common Criteria on how to build computers based on Bella-Padua. 

   * <a target="_blank" href="https://www.youtube.com/watch?v=tjOjjXVPQeU">Graph your progress</a> from <a target="_blank" href="https://www.sageknowsit.com/">sageknowsit.com</a>

<hr />

### CCSP

<a target="_blank" href="https://www.isc2.org/Register-for-Exam/ISC2-Exam-Pricing">$599 USD</a> <a target="_blank" href="https://www.isc2.org/Certifications/CCSP">CCSP (Certified Cloud Security Professional)</a>. The Aug 2022 upgrade went to 150 questions in <strong>4 hours</strong> (from 3). 
Results are Pass/Fail, but you must score at least 70% in EACH separate domain:

   * 17% Cloud Concepts, Architecture and Design
   * 19% Cloud Data Security
   * 17% Cloud Platform & Infrastructure Security
   * 17% Cloud Application Security
   * 17% Cloud Security Operations
   * 13% Legal, Risk and Compliance
   <br /><br />

<a target="_blank" href="https://www.isc2.org/-/media/ISC2/Certifications/Exam-Outlines/CCSP-Exam-Outline.ashx">This PDF</a> has the details.

<a target="_blank" href="https://ccsp.alukos.com/">ccsp.alukos.com</a> is a GitBook-formatted listing with glossary of terms, laws by country, standards by each body, frameworks.

   * BOOK: (ISC)2 CCSP Certified Cloud Security Professional Official Study Guide & Practice Tests Bundle by Mike Chapple and David Seidl | Nov 1, 2022

On YouTube:
   * <a target="_blank" href="https://www.youtube.com/watch?v=kFZWMZIy5LM&list=PL7XJSuT7Dq_X0AupQwU8YOGV3TsoPAcD0">12-hour VIDEO CCSP Exam Cram from Pete Zerger's Inside Cloud and Security (2022 edition)</a>
   * YOUTUBE: <a target="_blank" href="https://www.youtube.com/watch?v=dCPRZoKntX0&list=PL0hT6hgexlYy_gE_y09ORyupgfVOHM_TN">CCSP Exam Cram series</a> by Prabh Nair
   * <a target="_blank" href="https://www.linkedin.com/learning/ccsp-cert-prep-4-cloud-application-security-audio-review/">LinkedIn audio review</a> with practice questions. By Mike Chapple. I recommend this because it has quizzes and shows use of apps such as WebGoat.
   * <a target="_blank" href="https://app.pluralsight.com/paths/skills/ccspr-certified-cloud-security-professional">Pluralsight CCSP</a> by Lyron H. Andrews CISSP/CCSP/SSCP/CISM/CCSK
   <br /><br />

If you have an OReilly.com subscription:
   * <a target="_blank" href="https://www.oreilly.com/library/view/certified-cloud-security/9780138170622/">Live Lessons Video Course</a>
   * <a target="_blank" href="https://learning.oreilly.com/live-events/ccsp-certified-cloud-security-professional-crash-course/0636920066432/0636920091590/">Video Crash Course</a> by Shannon. "Get the CISSP first".
   * <a target="_blank" href="https://learning.oreilly.com/videos/certified-cloud-security/9780138170622/">LiveLessons May 2023</a> (11 hours) by Shannon

   * <a target="_blank" href="https://learning.oreilly.com/videos/isc-2-ccsp-certified/9781663711137/9781663711137-a00001/">Audio book</a> by Ben Malisow 
   * <a target="_blank" href="https://learning.oreilly.com/library/view/isc-2-ccsp-certified/9781119603498/">Practice tests 2nd Edition</a> by Ben Malisow
   <br /><br />


> I think ISC2 is too clever with their questions, past the point of making the test as much about knowing the twisted mind of the test maker rather than understanding the underlying material. I wich that ISC2 test writers see "Advanced" level of "knowledge" as higher order thinking (such as evaluation) rather than teasing out twisted meaning of words in tests.


Bragging:

   * https://charbelnemnom.com/passed-official-ccsp-exam-certified-cloud-security-professional/
   
<hr />

## ISACA.org

<a target="_blank" href="http://www.isaca.org/CERTIFICATION/Pages/default.aspx">ISACA.org</a> was created by CISA, a consortium of cloud companies who also maintains a Vulnerability Catalog, the CAIQ, and hold the Digital Trust World conference. It asks for a $50 test application processing fee in addition to USD $145 annual membership fee <a target="_blank" href="https://www.isaca.org/-/media/files/isacadp/project/isaca/membership/isaca-chapter-dues.pdf">plus up to $50 monthly local chapter dues</a>. Members get a $185 discount to the $760 online, remotely-proctored exam fee to Pearson Vue. Its website uses Salesforce Authenticator for 2FA. There's also a $45 annual maintenance fee for each certification, plus $50 for each recertification. And costs for continuing education.


* <a target="_blank" href="https://www.isaca.org/credentialing/cybersecurity/csx-fundamentals-certificate">CSX Fundamentals</a>

* <a target="_blank" href="https://www.isaca.org/credentialing/cisa">CISA (Certified Information Systems Auditor)</a>

* CRISC (Certified in Risk and Information Systems Control)</a>

* <a target="_blank" href="https://www.isaca.org/credentialing/cism">CISM (Certified Information Security Manager)</a> <a target="_blank" href="[2020-10-02-security-certs.md](https://learning.oreilly.com/live-events/cism-crash-superreview-by-allen-keele/0636920055226/)">VIDEO: Crash SuperReview</a> by <a target="_blank" href="https://www.linkedin.com/in/allenkeele/">Allen Keele</a> of a 40-hour class at certifiedinfosec.com

   * 17% Information Security Governance
   Organizational Culture<br />
   Legal, Regulatory, and Contractual Requirements<br />
   Organizational Structure, Roles, and Responsibilties<br />
   * 20% Information Security Risk Management
   * 33% Information Security Program
   * 30% Incident Management
   <br /><br />

   <a target="_blank" href="https://learning.oreilly.com/videos/the-pearson-complete/9780137923854/">Pearson Complete Course for CISM Certification</a> by Sari Greene

* ISO 31000 Internal Controls Risk Analyst (CICRA) <a target="_blank" href="https://learning.oreilly.com/live-events/certified-iso-31000-internal-controls-risk-analyst-cicra-crash-superreview-by-allen-keele/0636920071393/0636920086127/">VIDEO: Crash SuperReview</a> by Allen Keele

* Certified ISO 22301 Business Continuity Manager
* Certified ISO 22301 Business Continuity Strategist (CBCS)

* Certified ISO 37301 Certified Compliance Professional (CCP)

   https://www.certifiedinfosec.com/258-44-3-108.html

* Certified ISO 27001 Lead Implementer, Internal Controls Architect, Lead Auditor (LI/CICA/CLA)

   https://www.certifiedinfosec.com/258-35-3-86.html

* <a target="_blank" href="https://www.isaca.org/credentialing/cgeit">Certified in the Governance of Enterprise IT (CGEIT)</a>

* <a target="_blank" href="https://www.isaca.org/credentialing/certified-data-privacy-solutions-engineer">CDPSE (Certified Data Privacy Solutions Engineer)</a> covers privacy governance, privacy architecture, data lifecycle

Exec Order 14028 update of 13366

### ISACA CSX

ISACA's <a target="_blank" href="https://www.isaca.org/credentialing/cybersecurity">Cybersecurity Nexus (CSX) Certificates</a>  

   * <a target="_blank" href="https://www.isaca.org/credentialing/cybersecurity/csx-fundamentals-certificate">Security Fundamentals</a>

   * <a target="_blank" href="https://www.isaca.org/credentialing/cybersecurity/csx-practitioner-certificate">Security Practitioner</a>

   * <a target="_blank" href="https://www.isaca.org/credentialing/cybersecurity/csx-associate-certificate">Security Associate</a>


## Zero Point Security CRTO

The Certified Red Team Operator (CRTO) course and certification
is 48 hours of lab time spread across a 4 day event where the student has to find and submit 8 flags (6 flags to pass) within Snap Labs.

https://medium.com/@adamgoss/certified-red-team-operator-crto-review-71ea4edef62a

## Offensive Security

Offensive Security is a for-profit company offering courses with labs and certifications:

They offer a $5,499/year bundle for unlimited labs and exam attempts.

   * PEN-300 Advanced Evasion Techniques and Breaching Defenses class to prep for OSEP

   * PEN-103 class to prep for KLCP exam

   * PEN-210 class to prep for OSWP (Wireless Penetration) exam

   * PEN-200 Kali Linux class to prep for $495 OSCP (Certified Professional) is one of the most difficult to pass because it is part "hazing ritual" and part proctored via webcam. It is a 24-hour time-boxed test where you penetrate of as many machines as you can within a massive virtual environment (which includes Active Directory), using Kali Linux. That's followed by another 24-hour time frame to write (with screenshots) an exam report. You must also pass a background check. The PWK prep course is $1,295. <a target="_blank" href="https://medium.com/@anuragmewar/how-not-to-fail-oscp-on-your-first-attempt-ad-special-b0819523e3">More</a>

   * WEB-200 Kali Linus class for OSWA.

   * <a target="_blank" href="https://www.offensive-security.com/awe-osee/">OSEE (Offensive Security Exploitation Expert)</a> covers DEP, ASLR evasion, heap spraying, function pointer overwrites. OSEE holders must complete the Advanced Windows Exploitation (AWE) course by Offensive Security held in a live hands-on environment at a Black Hat conference in Las Vegas, NV.<br /><br />That plus pass a rigorous <strong>72-hour practical exam</strong> that includes preparing a comprehensive penetration test report. So this certificate indicates a level of expertise far beyond that of most penetration testers.<br /><br />Topics tested include: 64-bit Exploitation, Debugging, DEP ByPass, Disarming EMET Mitigations, Exploit Development, Heap Spray, Kernel Driver Exploitation, Kernel Pool Exploitation, Memory Protection Bypass, NX/ASLR Bypass, ROP Chain, Sandbox Escape, Shellcode, WinDBG, Windows Kernel Exploitation.
    
   * Take their <a target="_blank" href="https://www.offsec.com/courses/web-300/">web-300</a> class to get <a target="_blank" href="https://www.offensive-security.com/awae-oswe/">OffSec Web Expert</a> designation. It covers web security testing: XSS attacks, SQL injection, XML external entity injection, Weak random token generation, DOM XSS, Server side template injection, Command injection via websockets (black box material)

   * SOC-200 Foundational Security Operations and Defensive Analysis class for OSDA.

   * EXP-312 Advanced macOS Control Bypasses for OSMR.

   * OSCE was retired. It covered exploits used by attackers to breach security infrastructures.

## SANS

SANS formed the Global Information Assurance Certification (GIAC) program to act as the certification arm for its training courses.
GIAC has a https://www.giac.org/certifications/get-certified/roadmap
to dozen of exams across six specific domains. It offers remote proctoring through ProctorU.

   * <a target="_blank" href="https://www.giac.org/certification/enterprise-vulnerability-assessor-geva">GEVA (GIAC Enterprise Vulnerability Assessor)</a>requires 71% correct from among 75 questions over 2 hours. It covers Vulnerability assessment framework planning and methodology in an enterprise environment; Discovery and validation of vulnerabilities using tactics like network scanning and PowerShell scripting; Remediation and reporting techniques utilizing proper data management

   * <a target="_blank" href="https://www.giac.org/certification/certified-incident-handler-gcih">GCIH (GIAC Certified Incident Handler)</a> requires an undeterminate correct from among 100-150 questions over 4 hours. It covers Incident Handling (Response) and Computer Crime Investigation; Computer and Network Hacker Exploits; Hacker Tools (Nmap, Nessus, Metasploit, Netcat). A single chapter on NIST800-61.

   Based on the <a target="_blank" href="https://www.giac.org/certifications/niceframework">NICE framework</a>

   * <a target="_blank" href="https://www.giac.org/certification/certified-enterprise-defender-gced">GCED (GIAC Certified Enterprise Defender)</a> requires 70% correct from among 115 questions over 3 hours. It covers Incident handling and computer crime investigation; Computer and network hacker exploits; Hacker tools (Nmap, Nessus, Metasploit and Netcat)

   * <a target="_blank" href="https://www.giac.org/certification/security-expert-gse">GSE (GIAC Security Expert)</a> is the premier security-related certification available today. After you score at least the gold level in 2 of 3 tests above, you take a multiple-choice test, then a hands-on lab (not available due to COVID). The proctored Exam has Minimum Passing Score of 64% to 24 VM-based Hands-On Questions with a 3-Hour Time Limit.


## CompTIA

So compliance with <a target="_blank" href="https://public.cyber.mil/cw/cwmp/dod-approved-8570-baseline-certifications/">DoD 8570-2005</a> retired by <a target="_blank" href="https://www.nist.gov/news-events/news/2016/08/dod-directive-814001-cyberspace-workforce-management">NIST DoD Directive 8140.01</a> means job candidates need to have passed to it to just apply for some government jobs. DoD 8140 expands on DoD 8570 to leverage the <a target="_blank" href="https://dodcio.defense.gov/Cyber-Workforce/DCWF.aspx">Defense Cybersecurity Workforce Framework (DCWF)</a>, which draws from the original <a target="_blank" href="https://www.nist.gov/itl/applied-cybersecurity/nice/nice-cybersecurity-workforce-framework-resource-center">National Initiative for Cybersecurity Education (NICE) Cybersecurity Workforce Framework (NCWF)</a> and DoD Joint Cyberspace Training and Certification Standards (JCT&CS).

CompTIA certifications were designed for compliance with ISO 17024 standards and approved by the US DoD to meet directive 8140/8570.01-M requirements. Regulators and government rely on ANSI accreditation, because it provides confidence and trust in the outputs of an accredited program. Over 2.3 million CompTIA ISO/ANSI-accredited exams have been delivered since January 1, 2011.


<a name="Security+"></a>

### Security+

<a target="_blank" href="https://www.comptia.org/certifications/security">Security+ exam SY0-601 at comptia.org/certifications/security</a> 
is described an "entry level" exam. But its detailed coverage of some obscure encryption protocols and tricky questions make it difficult even for professionals.

NOTE: I first answered over <strong>75% the 90-question</strong> Security+ March 2020 after studying literally 4 years, on and off. I held off due to its <a target="_blank" href="https://store.comptia.org/comptia-security-plus-exam-voucher/p/SEC-601-TSTV-20-C">$392 test fee</a> plus annual renewal fees. 
PROTIP: They offer a <a target="_blank" href="https://store.comptia.org/comptia-store-club/p/ITPR-0020-ANNS-2019">$49 annual Club</a> for a $78 discount (20% off all CompTIA products). Students get a 40% discount at a different website.

What helped me get over the intimidation is to seek out the <strong>trick questions and delight in them</strong> as an intellectual curiosity.

   * <a target="_blank" href="https://learning.oreilly.com/library/view/comptia-security-sy0-601/9780136770091/">CompTIA Security+ SY0-601 Cert Guide, 5th Edition</a> by Omar Santos, Ron Taylor, Joseph Mlodzianowski.
   <br /><br />

PROTIP: If you have an OReilly subscription, <a target="_blank" href="https://learning.oreilly.com/certifications/9780137421268/">Pearson Practice Test</a> provides filtering to individual exam topic category objectives:
   1. <a target="_blank" href="https://wilsonmar.github.io/cyber-security/#SocialEngineering">Social Engineering Techniques</a> - 17
   2. Attack Basics - 23
   3. Application Attacks - 20
   4. Network Attacks
   5. Threat Actors, Vectors, and Intelligence Sources
   6. Vulnerabilities
   7. Security Assessment Techniques
   8. Penetration Testing Techniques
   9. Enterprise Security Concepts
   10. Virtualization and Cloud Computing
   11. Secure Application Development, Deployment, and Automation
   12. Authentication and Authorization Design
   13. Cybersecurity Resilience
   14. Embedded and Specialized Systems
   15. Physical Security Controls
   16. Cryptographic Concepts
   17. Secure Protocols
   18. Host and Application Security Solutions
   19. Secure Network Design
   20. Wireless Security Settings
   21. Secure Mobile Solutions
   22. Cloud Cybersecurity Solutions
   23. Identity and Account Management Controls
   24. Authentication and Authorization Solutions
   25. Public Key Infrastructure
   26. Organizational Security
   27. Incident Response
   28. Incident Investigation
   29. Incident Mitigation
   30. Digital Forensics
   31. Control Types
   32. Regulations, Standards, and Frameworks
   33. Organizational Security Policies
   34. Risk Management
   35. Sensitive Data and Privacy
   <br /><br />

PROTIP: Security+ is vendor-neutral, but to be useful on the job, get trained in specific tools and in cloud computing as well.

Concepts in the five exam objectives are covered in <a target="_blank" href="https://www.professormesser.com/security-plus/sy0-601/sy0-601-video/sy0-601-comptia-security-plus-course/">videos by Professor Messer</a> <a target="_blank" href="https://www.youtube.com/watch?v=9NE33fpQuw8&list=PLG49S3nxzAnkL2ulFS3132mOVKuzzBxA8">on YouTube</a>:

 
1. <a target="_blank" href="https://www.youtube.com/watch?v=4HGQ0uYeSaA" title="2h InsideCloud">VIDEO</a>: Threats, Attacks, and Vulnerabilities 
   1.1 – Social Engineering<br />
   1.2 – Attack Types<br />
   1.3 – Application Attacks<br />
   1.4 – Network Attacks<br />
   1.5 – Threat Actors and Vectors<br />
   1.6 – Vulnerabilities<br />
   1.7 – Security Assessments<br />
   1.8 – Penetration Testing
2. <a target="_blank" href="https://www.youtube.com/watch?v=tvzfD9ET-Lk" title="2h InsideCloud">VIDEO</a>: Architecture and Design
   2.1 – Enterprise Security<br />
   2.2 – Virtualization and Cloud Computing<br />
   2.3 – Secure Application Development<br />
   2.4 – Authentication and Authorization<br />
   2.5 – Resilience<br />
   2.6 – Embedded Systems<br />
   2.7 – Physical Security Controls<br />
   2.8 – Cryptographic Concepts
3. <a target="_blank" href="https://www.youtube.com/watch?v=CdBD5aFLUEc" title="2h InsideCloud">VIDEO</a>: Implementation
   3.1 – Secure Protocols<br />
   3.2 – Host and Application Security<br />
   3.3 – Secure Network Designs<br />
   3.4 – Wireless Security<br />
   3.5 – Mobile Security<br />
   3.6 – Cloud Security<br />
   3.7 – Identity and Account Management<br />
   3.8 – Authentication and Authorization Services<br />
   3.9 – Public Key Infrastructure
4. <a target="_blank" href="https://www.youtube.com/watch?v=sA8_tsJh3zU" title="2h InsideCloud">VIDEO</a>: Operations and Incident Response
   4.1 – Security Tools<br />
   4.2 – Incident Response<br />
   4.3 – Investigations<br />
   4.4 – Securing an Environment<br />
   4.5 – Digital Forensics
5. <a target="_blank" href="https://www.youtube.com/watch?v=pTGOL5I2-gs" title="2h InsideCloud">VIDEO</a>: Governance, Risk, and Compliance (GRC)
   5.1 – Security Controls<br />
   5.2 – Regulations, Standards, and Frameworks<br />
   5.3 – Organizational Security Policies<br />
   5.4 – Risk Management<br />
   5.5 – Data Privacy
<br /><br />

<a target="_blank" href="https://www.linkedin.com/in/joshmadakor/">Josh Madakor of Seattle</a> (a 2020 Western Governors University graduate) offers visitors to <a target="_blank" href="https://www.youtube.com/@JoshMadakor">his YouTube</a> free <a target="_blank" href="https://mailchi.mp/joshmadakor.tech/comptia-security-plus-practice-questions">1000 question deck</a> presented by the <a target="_blank" href="https://apps.ankiweb.net/">free Anki Q&A app</a>. NOTE: There is an <tt>brew install anki-beta</tt>

It references <a target="_blank" href="https://www.professormesser.com/security-plus/sy0-601/sy0-601-video/sy0-601-comptia-security-plus-course/">Professor Messer</a>. Also, it's a teaser for his $497 SOC Analyst video training using Azure cloud hands-on (built using ChatGPT).
Topics include building a mini-SOC and other aspects of your security portfolio of NIST 800-53 policies, to apply for a job.

<a target="_blank" href="https://www.youtube.com/watch?v=9Hd8QJmZQUc&list=PL7XJSuT7Dq_VD3eHXQf3Ld2ceBSFCayns">VIDEO:
20-hour CompTIA Security+ Exam Cram - SY0-601 (Full Training Course - All 5 Domains)</a>
by Pete Zerger

Among <a target="_blank" href="https://learning.oreilly.com/certifications/guides/CompTIA-Security+/636920558217/">OReilly.com's prep resources</a>


<a name="PenTest"></a>

### CompTIA PenTest+

https://www.whizlabs.com/comptia-pentest/


### CompTIA CASP+

CASP+ satisfies <a target="_blank" href="https://public.cyber.mil/cw/cwmp/dod-approved-8570-baseline-certifications/">Baseline Certification for DoD IAT (Information Assurance Technical) Level III</a>, IAM (Information Assurance Management) Level II, and IASAE (Information Assurance Security Architecture and Engineering) level I and II jobs.

First pass CompTIA Network+ and Security+ certifications.

<a target="_blank" href="https://www.comptia.org/certifications/comptia-advanced-security-practitioner">
CompTIA CASP+ (CompTIA Advanced Security Practioner) exam CAS-004</a> is for practitioners — not managers — at the advanced skill level of cybersecurity -- implementing solutions policies and frameworks. 

<a target="_blank" href="https://www.comptia.org/testing/testing-options/about-comptia-performance-exams/performance-based-questions-explained">Performance-based questions (PBQs)</a> test a candidate’s ability to solve problems in a simulated environment that approximates a virtual environment with a firewall, network diagram, terminal window, or operating system.

At $396 for CompTIA members or $466 USD (or $799 with retake and $849 with Labs), you'll have 165 minutes (2.5 hours) to answer 90 multiple-choice and <strong>"hands-on, performance-based"</strong> questions, for pass/fail grading. The domains:

   1. 19% Risk Management  
   2. 25% Enterprise Security Architecture  
   3. 20% Enterprise Security Operations  
   4. 23% Technical Integration of Enterprise Security  
   5. 13% Research, Development, and Collaboration 
   <br /><br />


1. Risk Management

   1: Business and Industry Influences and Risks

   2: Organizational Security Privacy Policies and Procedures

   3: Risk Mitigation Strategies and Controls

   4: Risk Metric Scenarios for Enterprise Security

2. Enterprise network and Security Architecture

   5: Integrating Network and Security Components, Concepts, and Architectures

   6: Integrating Security Controls for Host Devices

   7: Integrating Controls for Mobile and Small Form Factor Devices

   8: Selecting Software Security Controls

3. Enterprise Security Operations

   9: Conducting Security Assessments

   10: Selecting the Proper Security Assessment Tools

   11: Implementing Incident Response and Recovery

4. Technical Integration of Enterprise Security

   12: Integrating Hosts, Storage, and Applications in the Enterprise

   13: Integrating Cloud and Virtualization Technologies in the Enterprise

   14: Integrating and Troubleshooting Advanced AAA Technologies

   15: Implementing Cryptographic Techniques

   16: Secure Communication and Collaboration Solutions

5. Research, Development and Collaboration

   17: Applying Research Methods for Trend and Impact Analysis

   18: Implementing Security Activities Across the Technology Life Cycle

   19: Interacting Across Diverse Business Units


PROTIP: <a target="_blank" href="https://quizlet.com/it/513316332/casp-cas-003-performance-based-questions-flash-cards/">12 Flash cards</a>
Sample:

* To check config on RedHat 5.5:

   <pre><strong>chkconfig --test</strong></pre>

* Services to disable on DNS:

   http, mysqld, lopd, bluetooth, wpa supplicant

* To stop service:

   <pre><strong>service httpd stop</strong></pre>

<a target="_blank" href="https://learning.oreilly.com/library/view/casp-practice-tests/9781119683728/">CASP+ Practice Tests</a>
by Nadean H. Tanner (at Puppet, Metasploit)

   * <a target="_blank" href="https://exploit-exercises.com/">Exploit-Exercises.com</a> provides virtual machines, documentation, and challenges covering a wide range of security issues.
   * <a target="_blank" href="https://www.hacking-lab.com/index.html">hacking-lab.com/index.html</a> provides capture-the-flag (CTF) exercises in a variety of fields.
   * <a target="_blank" href="https://www.owasp.org/index.php/OWASP_Hacking_Lab">www.owasp.org/index.php/OWASP_Hacking_Lab</a>
   OWASP Hacking Lab provides excellent web application–focused exercises.
   * <a target="_blank" href="https://www.pentesterlab.com/exercises/">PentesterLab</a> provides subscription-based access to penetration testing exercises
   <br /><br />

O'Reilly <a target="_blank" href="https://learning.oreilly.com/live-events/casp-cas-004-exam-crash-course/0636920080448/0636920087073/">Live Video Crash Course</a> by Dean Bushmiller of expandingsecurity.com. Refrence: https://github.com/deanbushmiller/O-CASPv3/wiki from https://github.com/deanbushmiller/O-CASPv3

<a target="_blank" href="https://learning.oreilly.com/learning-paths/learning-path-comptia/9780135945025/">video 18+ hours</a> released Jan. 2018 by Michael J. Shannon:


Kelly Handerhan's Cybrary videos

<a target="_blank" href="https://www.reddit.com/r/CompTIA/comments/aoyk2q/casp_cas003_help/">CASP CAS-003 help on Reddit</a> (archived)

Ucertify has good labs 

Sybex book has labs as well


<a target="_blank" href="https://www.udemy.com/course/comptia-advanced-security-practitioner-casp-exam-cas-003/">
Udemy video "Prepatory course for the exam CAS-003"</a>

   1. Understanding Risk Management - 2hr 22min <a target="_blank" href="https://mckinsey.udemy.com/course/comptia-advanced-security-practitioner-casp-exam-cas-003/learn/quiz/4616263#reviews">QUIZ</a>
   2. Network and Security - 1hr 55m <a target="_blank" href="https://mckinsey.udemy.com/course/comptia-advanced-security-practitioner-casp-exam-cas-003/learn/quiz/4616410#reviews">QUIZ</a>
   3. Implementing Advanced Authentication and Cryptographic Techniques - 1hr 46min <a target="_blank" href="https://mckinsey.udemy.com/course/comptia-advanced-security-practitioner-casp-exam-cas-003/learn/quiz/4616464#reviews">QUIZ</a>
   4. Implementing Security for Systems, Applications, and Storage - 2hr 23min <a target="_blank" href="https://mckinsey.udemy.com/course/comptia-advanced-security-practitioner-casp-exam-cas-003/learn/quiz/4616574#reviews">QUIZ</a>
   5. Implementing Security for Cloud and Virtualization Technologies - 1hr 45min <a target="_blank" href="https://mckinsey.udemy.com/course/comptia-advanced-security-practitioner-casp-exam-cas-003/learn/quiz/4616602#reviews">QUIZ</a>
   6. Utilizing Security Assessments and Incident Response - 1hr 42min <a target="_blank" href="https://mckinsey.udemy.com/course/comptia-advanced-security-practitioner-casp-exam-cas-003/learn/quiz/4616616#reviews">QUIZ</a>
   <br /><br />

<a target="_blank" href="https://www.amazon.com/s?k=casp+cas-003&crid=3XWIZV0LMDWT&sprefix=CASP+CAS%2Caps%2C194&ref=nb_sb_ss_ts-a-p_1_8">Amazon search CAS-003</a>

<a target="_blank" href="https://www.amazon.com/Official-CompTIA-Self-Paced-Certification-CAS-003/dp/1642740632/">The Official CompTIA CASP+ Self-Paced Certification Study Guide (Exam CAS-003)</a> Paperback by Jason Nufryk is $219.00

Notes:

Memory dump tools: Memdump, KnTTools on Windows, FATKit 

Runtime Debugging: AddressSanitizer, C# Deleaker, Software Verify

Attestation provides evidence about a target to an appraiser so that policy compliance can be determined prior to authorization of access.

The Annualized Loss Expectancy (ALE) is the product of the Annual Rate of Occurrence (ARO) multiplied by the Single Loss Expectancy (SLE).

Bluesnarfing is the unauthorized access of a device by an attacker who is trying to access information on the device.

Hyperconvergence takes convergence a step further by utilizing software to perform integration without requiring hardware changes.


<a name="CySA+"></a>

### CompTIA CySA+

<a target="_blank" href="https://www.comptia.org/certifications/cybersecurity-analyst">CompTIA CySA+ (CSO-001) "Security Analyst" exam</a> launched April 21, 2020 on Vue & Pearson online $359 to answer 75% of 85 questions in 165 minutes.

<a target="_blank" href="https://www.infosecinstitute.com/webinar/comptia-cysa-certification-changes-everything-you-need-to-know/?utm_status=success">VIDEO</a>:

1. Threat and vulnerability management:

   1. Explain the importance of threat data and intelligence.
   1. Given a scenario, utilize threat intelligene to support organizatoinal security.
   1. Given a scenario, perform vulnerability management activities.
   1. Given a scenario, analyze the output from common vulnerability assessment tools.
   1. Explain the threats and vulnerabilities associated with operating in the cloud.
   1. Given a scenario, implement controls to mitigate attacks and software vulnerabilities.

2. Software and systems security
   1. Given a scenario, apply security solutions for infastructure management
   2. Explain software assurance best practices
   3. Explain hardware assurance best practices

3. Security operations and monitoring:
   1. Given a scenario, analyze data as part of security monitoring activities.
   2. Given a scenario, implement configuration changes to existing controls to improve security.
   3. Explain the importance of proactive threat hunting.
   4. Compare and contrast automation concepts and technologies.

4. Incident response
   1. Explain the importance of the incident response process.
   1. Given a scenario, apply the appropriate incident response procedure.
   1. Given an incident, analyze potential indicators of compromise.
   1. Given a scenario, utilize basic digital forensics techniques.

1. Compliance and assessment
   1. Understand the importance of data privacy and protection
   2. Given a scenario, apply security concepts in support of organizational risk mitigation
   3. Explain the importance of frameworks, policies, procedures and controls.
   
<a target="_blank" href="https://www.udemy.com/course/comptiacsaplus/learn/lecture/21082126#overview">Udemy course</a>

<hr />

## Cisco 

Cisco (the networking company) has several certifications attained by 4,000 people world-wide:

* CCNA Associate
* Cisco CyberOps: Associate, Professional (no Expert yet)
* Cisco DevNet: Associate, Professional, Expert

* CCNP Enterprise and <a target="_blank" href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert.html">CCIE (Expert level)</a> Enterprise Infrastructure, Enterprise Wireless
* CCNP and CCIE: Security, Collaboration, Data Center, Service Provider
<br /><br />

The prerequisite is earning the Cisco Certified Specialist - Security Core certification by passing the their 120-minute <a target="_blank" href="https://www.cisco.com/c/en/us/training-events/training-certifications/exams/current-list/scor-350-701.html">$400 350-701 SCOR <strong>Cisco Security Core Technologies</strong> exam</a>.
   * https://learningnetwork.cisco.com/s/scor-exam-topics
   * Cisco has a FREE <a target="_blank" href="https://u.cisco.com/path/6">Implementing and Operating SCOR 1.0 prep. class</a>:
   
      1. Network Security Concepts 1h 15m
      2. Network Security Controls 8h 45m
      3. Endpoints and Systems 2h 30m
      4. Identity Access Management 1h
      5. Secure Transport 8h 45m
      6. Secure Network Infrastructure and Telemetry 3h
      7. Cloud Security Concepts 1h 30m
      8. Security Automation 1h
      <br /><br />

      <a target="_blank" href="https://talosintelligence.com/">Talos</a> (formerly Thousand Eyes) Intelligence Group</a> security intelligence feed [<a target="_blank" href="https://en.wikipedia.org/wiki/Cisco_Talos">Wikipedia</a>]

   * [22-hour YouTube course by Ratner Part 1](https://www.youtube.com/watch?v=Kulc-wowfVs&list=RDCMUCBTwpzRHf_PYj3iyuNH05eQ&start_radio=1&rv=Kulc-wowfVs)
   * [30-hour $50 video course by Sikandar Shaik on Udemy](https://www.udemy.com/course/scor-350-701/)
   * [36-hour $50 CBTNuggets video class](https://www.cbtnuggets.com/learn/it-training/playlist/nrn:playlist:certification:5e8264a8695220001457924e/1?autostart=1)
   * https://www.linkedin.com/learning/paths/ccnp-security-prepare-for-the-implementing-and-operating-cisco-security-core-technologies-350-701-scor-exam

<a name="EC-Council"></a>

## EC-Council Penetration Tester

(International Council of E-Commerce Consultants) EC-Council from Malaysia since 2001 has 3 levels of certification. See FAQ at <a target="_blank" href="https://cert.eccouncil.org/faq.html">https://cert.eccouncil.org/faq.html</a>

33% off until Dec 31.

### CEH 

The CEHv10 (Certified Ethical Hacker version 11) ANSI exam 
as defined by <a target="_blank" href="https://www.eccouncil.org/programs/certified-ethical-hacker-ceh">https://www.eccouncil.org/programs/certified-ethical-hacker-ceh</a>
asks 125 multiple-choice questions in 4 hours.

The exam is protored by ECC EXAM (as 312-50) and Pearson VUE (as 312-50), 
courseware is discounted to $850, with upgrade for VUE exam for $100.
from "Aspen iLabs".

Exam Brochure:
https://www.eccouncil.org/wp-content/uploads/2016/07/CEHv10-Brochure.pdf

CEH Candidate Handbook:
https://s3-us-west-2.amazonaws.com/edm-image/documents/CEH-Handbook-v2.2.pdf

Blueprint: https://cert.eccouncil.org/images/doc/CEH-Exam-Blueprint-v2.0.pdf

### CPENT / ECSA 

The Advanced level is ECSA: Security Analyst
https://www.eccouncil.org/programs/certified-security-analyst-ecsa-practical/
is being phased out in Oct. 2020 in favor of the <a target="_blank" href="https://cert.eccouncil.org/certified-penetration-testing-professional-cpent.html">CPENT (Certified Penetration Testing Professional)</a>.

Covers "double pivoting".

$2199 w/ training, $799 for challenge.

<a name="LPT"></a>

### LPT

At the Expert Level is LPT: Licensed Penetration Tester [Master]
https://www.eccouncil.org/programs/licensed-penetration-tester-lpt-master/
with training via CPENT.

### EC-Council

EC-Council built the Advanced Penetration Testing Cyber Range (ECCAPT).

<hr />

## APISec University

<a target="_blank" href="https://APISec.ai/">APISec.ai</a> launched from San Francisco August 2022 at +1 415.236.0601 (<a target="_blank" href="https://twitter.com/apisecu">Twitter: apisecu</a>, <a target="_blank" href="">LinkedIn</a>, <a target="_blank" href="https://www.youtube.com/@apisecu">YouTube</a>, <a target="_blank" href="https://discord.com/channels/1009112852759593100/1009121947642245213">Discord</a>) provides FREE training on a <a target="_blank" href="https://www.apisecuniversity.com/api-tools-and-resources">list of security-related tools</a> that includes their own <a target="_blank" href="https://apisecscan.com/sampleApisecScan.html">API scanner running a sample netbanking app</a> [<a target="_blank" href="https://www.youtube.com/watch?v=MK3Xo9Dbvac&pp=ygURYXBpc2VjIHVuaXZlcnNpdHk%3D">demo</a>].

APIsec Con with APIDays Paris, France in December 8, 2023. shelby@apisec.ai.

Attend <a target="_blank" href="https://university.apisec.ai/library">https://university.apisec.ai/library</a>

FREE Foundation courses:

* 2 CPE <a target="_blank" href="https://www.apisecuniversity.com/courses/api-security-fundamentals">API Security Fundamentals</a> by <a target="_blank" href="https://www.linkedin.com/in/rdbarahona/">Dan Barahona</a> (founder)

   <a target="_blank" href="https://www.youtube.com/watch?v=o6d6BjX-Iys">VIDEO</a>:  
   If you’re new to API security, this is the place to start. Learn about the OWASP API Top 10, real-world API breaches and more.

* 2 CPE <a target="_blank" href="https://www.apisecuniversity.com/courses/owasp-api-security-top-10-and-beyond">OWASP API Top 10 & Beyond!</a> - Build your API security foundation with a strong understanding of the OWASP API Top 10.

* 2 CPE <a target="_blank" href="https://www.apisecuniversity.com/courses/api-documentation-best-practices">API Documentation Best Practices</a> - Strong API security starts with great API documentation. Learn the best practices, tools & techniques. By <a target="_blank" href="https://www.linkedin.com/in/jasonhnaustin/">Jason Harmon</a> of #APIIntersection podcast.

   <a target="_blank" href="https://www.youtube.com/watch?v=XKgmiJVyLLQ" title="Oct 2023">Webinar: Why API Documentation Drives API Security 2</a> by Dan Barahona with Jason Harmon of Stoplight and Alex Savage.

* 1 CPE (60-minute) <a target="_blank" href="https://www.apisecuniversity.com/courses/api-security-for-pci-compliance">API Security for PCI Compliance</a> examines the new PCI DSS 4.0 requirements and details the API security obligations for compliance.

* 2 CPE <a target="_blank" href="https://www.apisecuniversity.com/courses/securing-api-servers">Securing API Servers</a> by Anthony Arague - Learn key concepts for keeping API servers secure - from CORS to error handling to rate limiting and more.

   <a target="_blank" href="https://www.youtube.com/watch?v=8twQCmm1NdI">VIDEO: PCI DSS 4.0 Requirements for API Security</a>
   
   <a target="_blank" href="https://www.youtube.com/watch?v=f73crlwEdX0">VIDEO: API Security Requirements for PCI-DSS 4.0</a>

* _ CPE (60 minute) <a target="_blank" href="https://www.apisecuniversity.com/api-tools-and-resources">API Security for Connected Cars and Fleets</a> - Understand why attackers are targeting connected car and fleet APIs (telematics) and how to keep them secure. Includes real-world examples and quiz. Developed by Tom Kaplan @UpstreamAuto (XDR).

   <a target="_blank" href="https://www.youtube.com/watch?v=zTCPKIEoz_0">VIDEO: Hacking Cars: Why APIs are the Weakest Link</a>

FREE Advanced courses:

* 12 CPE <a target="_blank" href="https://www.apisecuniversity.com/courses/api-penetration-testing">API Penetration Testing</a> by <a target="_blank" href="https://www.linkedin.com/in/coreyjball/">Corey Ball</a> (author of <a target="_blank" href="https://www.amazon.com/Hacking-APIs-Application-Programming-Interfaces/dp/1718502443/">Hacking APIs</a>) - Learn how to hack APIs like a professional penetration tester and find vulnerabilities.

   <a target="_blank" href="https://www.youtube.com/watch?v=yJ0Ypcm7eDM&pp=ygURYXBpc2VjIHVuaXZlcnNpdHk%3D">VIDEO: Lab Setup and API Reconnaissance</a>

<br /><br />

### CASA 

<a target="_blank" href="https://www.apisecuniversity.com/courses/api-security-certified-professional-exam">
The $150 CASA (Certified API Security Analyst) exam from APISec University</a> is 100 questions online to "demonstrate your API security expertise."

### ASCP 

<a target="_blank" href="https://www.apisecuniversity.com/courses/api-security-certified-professional-exam">
The $650 API Security Certified Professional exam from APISec University</a> is earned by capturing 6 of 8 flags to
"prove your API hacking skills. Perform a penetration test of two API-driven applications by discovering vulnerabilities, exploiting weaknesses, and reporting your findings."

Prepare for it by taking APISec University's API Penetration Testing course.


<hr />

## IIBA Cybersecuity Analysis

IIBA, the International Institute of Business Analysis (Pickering, Ontario, Canada), has an affiliation with the IEEE. Membership costs $139/year. For <a target="_blank" href="https://my.iiba.org/portal/s/store#/store/browse/detail/a133l000008axueAAA">$250 until Oct 31, 2022</a> then $400/$475 for members/non-members, it offers the <a target="_blank" href="https://www.iiba.org/business-analysis-certifications/certificate-in-cybersecurity-analysis/">CCA (Certification in Cybersecurity Analysis)</a> among its 6 other certifications administered online by PSI. IIBA does not disclose the score needed to pass, scores attained, nor scoring percentages.

<a target="_blank" href="https://www.iiba.org/business-analysis-certifications/certification-digital-badge-program-and-directory#certification-registries">As of Aug 2022, 266</a> CCA attendees had 90 minutes to answer 75 multiple-choice questions in these Knowledge Areas:
* Cybersecurity Overview and Basic Concepts 14%
* Enterprise Risk 14%
* Cybersecurity Risks and Controls 12%
* Securing the Layers 5%
* Data Security 15%
* User Access Control 15%
* Solution Delivery 13%
* Operations 12%
<br /><br />


## AWS Security

See my notes at <a target="_blank" href="https://wilsonmar.github.io/aws-security">https://wilsonmar.github.io/aws-security</a>

## Microsoft SC-900 & AZ-500

<a target="_blank" href="https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE3VwUH">PDF</a>: Updated Jan 21, 2021 
<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-500">
Microsoft's AZ-500 Azure Security Technologies</a> <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/azure-devops/?wt.mc_id=esi_lxp_webpage_wwl">Associate</a> online exam for people who maintain security posture, identify and remediate vulnerabilities by using a variety of security tools, implement threat protection, and respond to security incident escalations. Domains:

   1. Manage Identity and Access (30-35%)
   2. Implement Platform Protection (15-20%)
   3. Manage Security Operations (25-30%)
   4. Secure data and applications (20-25%) (Policy and Data Infrastucture & Data at Rest, App Security, Key Vault)
   <br /><br />

It costs $165 to Pearson Vue, less if you're a certified trainer or in the <a target="_blank" href="https://esi.microsoft.com/getcertification">esi.microsoft.com/getcertification</a>, which has practice tests from MeasureUp.

Prequisite is certification as either:

   * <a target="_blank" href="https://cloudacademy.com/lab-challenge/microsoft-azure-administrator-az-104-challenge">Challenge</a>

   or 

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/azure-developer/">Microsoft Certified: Azure Developer Associate</a> exam <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-204">AZ-204 "Developing Solutions for Microsoft Azure"</a>.

Microsoft's learning paths for AZ-500 :

1. <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/secure-your-cloud-apps/">
Secure your <strong>cloud</strong> applications in Azure</a> 6 Modules - 5 hr 36 min
   1. Microsoft Azure <a href="#MSWAF">Well-Architected Framework</a> - Security - 1 hr 2 min
   2. Top 5 security items to consider before pushing to production - 45 min
   3. Create security baselines - 1 hr
   4. Manage secrets in your server apps with Azure Key Vault - 46 min
   5. Secure an ASP.NET Core web app with the Identity framework - 1 hr 8 min
   6. Control authentication for your APIs with Azure API Management - 55 min
   <br /><br />

2. <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/implement-resource-mgmt-security/">
Implement <strong>resource management</strong> security in Azure</a> 6 Modules - 3 hr 27 min
   1. Protect against security threats on Azure - 25 min
   2. Build a cloud governance strategy on Azure - 48 min
   3. Control and organize Azure resources with Azure Resource Manager - 46 min
   4. Secure your Azure resources with Azure role-based access control (Azure RBAC) - 37 min
   5. Manage access to an Azure subscription by using Azure role-based access control (Azure RBAC) - 21 min
   6. Create custom roles for Azure resources with role-based access control (RBAC) - 30 min
   <br /><br />

3. <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/implement-network-security/">
Implement <strong>network</strong> security in Azure</a> 5 Modules - 5 hr 8 min
   1. Secure network connectivity on Azure - 32 min
   2. Configure the network for your virtual machines - 1 hr 34 min
   3. Secure and isolate access to Azure resources by using network security groups and service endpoints - 43 min
   4. Encrypt network traffic end to end with Azure Application Gateway - 1 hr 17 min
   5. Monitor and troubleshoot your end-to-end Azure network infrastructure by using network monitoring tools - 1 hr 2 min
   <br /><br />

4. <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/implement-host-security/">
Implement <strong>virtual machine host</strong> security in Azure</a> 6 Modules - 6 hr 4 min
   1. Microsoft Azure Well-Architected Framework - Security - 1 hr 2 min
   2. Create security baselines - 1 hr
   3. Create a Linux virtual machine in Azure - 1 hr 26 min
   4. Create a Windows virtual machine in Azure - 51 min
   5. Secure your Azure virtual machine disks - 1 hr 1 min
   6. Protect your servers and VMs from brute-force and malware attacks with Azure Security Center - 44 min
   <br /><br />

5. <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/manage-identity-and-access/">
Manage <strong>identity and access</strong> in Azure Active Directory</a> 9 Modules - 5 hr 17 min
   1. Protect against security threats on Azure - 25 min
   2. Create an Azure account - 39 min
   3. Manage users and groups in Azure Active Directory - 50 min
   4. Create Azure users and groups in Azure Active Directory - 41 min
   5. Secure your application by using OpenID Connect and Azure AD - 50 min
   6. Secure Azure Active Directory users with Multi-Factor Authentication - 38 min
   7. Manage device identity with Azure AD join and Enterprise State Roaming - 25 min
   8. Allow users to reset their password with Azure Active Directory self-service password reset - 31 min
   9. Add custom domain name to Azure Active Directory - 18 min
   <br /><br />

6. <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/manage-security-operations/">
Manage <strong>security operations</strong> in Azure</a> 8 Modules - 6 hr
   1. Protect against security threats on Azure - 25 min of <a target="_blank" href="https://www.tailwindtraders.com/">tailwindtraders.com</a>. Its security posture is monitored using <a target="_blank" href="https://azure.microsoft.com/services/security-center">Azure Security Center</a> adaptive application controls to define rules for <a target="_blank" href="https://docs.microsoft.com/en-us/azure/security-center/secure-score-security-controls">secure score</a>. Azure Logic Apps and Security Center connectors. Azure Sentinel SIEM using Common Event Format (CEF) messaging standard, Syslog, or REST API.
   2. Create security baselines - 1 hr
   3. Identify security threats with Azure Security Center - 43 min
   4. Resolve security threats with Azure Security Center - 44 min
   5. Protect your servers and VMs from brute-force and malware attacks with Azure Security Center - 44 min
   Security Center uses network security group (NSG) rules to restrict access to management ports when not in use.
   6. Analyze your Azure infrastructure by using Azure Monitor logs - 36 min
   7. Improve incident response with alerting on Azure - 53 min
   8. Capture Web Application Logs with App Service Diagnostics Logging - 55 min
   <br /><br />

https://microsoft.github.io/AzureTipsAndTricks/

https://cloudacademy.com/learning-paths/az-500-exam-preparation-microsoft-azure-security-technologies-650/


<a target="_blank" href="https://www.youtube.com/watch?v=Wry2get_RRc">VIDEO</a>: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/security/develop/threat-modeling-tool">DOCS</a>: <a target="_blank" href="https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling">
Microsoft Threat Modeling Tool</a>


<a name="MSWAF"></a>

### Well Architected Framework

The <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/">Microsoft Azure Well-Architecture Framework</a> 5 pillars are the same as <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html">Amazon's</a>:
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/cost/overview">Cost Optimization</a> - Managing costs to maximize the value delivered.
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/devops/overview">Operational Excellence</a> - Operations processes that keep a system running in production.
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/scalability/overview">Performance Efficiency</a> - The ability of a system to adapt to changes in load.
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/resiliency/overview">Reliability</a> - The ability of a system to recover from failures and continue to function.
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/security/overview">Security</a> - Protecting applications and data from threats.
   <br /><br />

Peter Zerger (@pzerger) :

   * <a target="_blank" href="https://www.youtube.com/watch?v=BkP6NZ83U5c">VIDEO: How to prepare</a> <a target="_blank" href="https://bit.ly/AZ500ExamPrep">https://bit.ly/AZ500ExamPrep</a>

   * <a target="_blank" href="https://aka.ms/MCRA/">PDF Map: Microsoft Azure Cybersecurity Reference Architecture</a>

   * <a target="_blank" href="https://bit.ly/InsideAzure">Inside Azure (free book)</a>

   * <a target="_blank" href="https://lnkd.in/gyf9WBV">5 Tips and 3 Freebies for AZ-500 Prep</a>

   * <a target="_blank" href="https://lnkd.in/g8Be3pY">Strategy for "How should I prepare for AZ-500 Exam?"</a>

   * <a target="_blank" href="https://lnkd.in/gBC_c8x">AZ-500 Exam Cram Series</a>

   * <a target="_blank" href="https://lnkd.in/gmg6dJu">AZ-500 Video Practice Exam Questions</a>

<a target="_blank" href="https://cloudacademy.com/learning-paths/az-500-exam-preparation-microsoft-azure-security-technologies-650/">CloudAcademy.com</a> 16h video series by Thomas Mitchell

<a target="_blank" href="https://mckinsey.udemy.com/course/exam-azure-2/">McK</a> <a target="_blank" href="https://www.udemy.com/course/exam-azure-2">Udemy.com "updated 2020"</a> 15.5h videos by Alan Anthony Rodrigues

Other videos:

   * https://zimmergren.net/passing-az-500-microsoft-certified-azure-security-engineer-associate/

   * https://www.pluralsight.com/courses/microsoft-azure-incident-response-remediation

   * https://blog.ahasayen.com/az-500-azure-security-engineer-exam/

## Google

<a target="_blank" href="https://cloud.google.com/certification/cloud-security-engineer">
Google Professional Cloud Security Engineer</a>, for $200 for 50 questions in 120 minutes, will have obtained the skills to “enable organizations to design and implement a secure infrastructure on Google Cloud Platform. Through an understanding of security best practices and industry security requirements, this individual designs, develops, and manages a secure infrastructure leveraging Google security technologies. Topics and skills:

   * Configure access within a cloud solution environment
   * Configure network security
   * Ensure data protection
   * Manage operations within a cloud solution environment
   * Ensure compliance
   <br /><br />

<a name="SAP"></a>

## SAP

First, <a target="_blank" href="https://quizlet.com/605649976/sap-acronyms-flash-cards/">memorize SAP Acronyms using my flashcards on Quizlet.com</a>

SAP has two levels of certifications for Security pros. 
Both costs $242 USD to answer 65% of 80 multiple-choice questions in 3 hours. 

* <a target="_blank" href="https://training.sap.com/certification/c_secauth_20-sap-certified-technology-associate---sap-system-security-and-authorizations-g/"><strong>C_SECAUTH_20</strong>
SAP Certified Technology Associate - SAP System Security and Authorizations</a> Domains:

   * Authorization and Role Maintenance - >12%
   * SAP Fiori Authorizations and S/4HANA - >12%
   * Access Governance and Compliance in SAP - 8%-12%
   * Infrastructure Security and Authentication - 8%-12%
   * User Administration8% - 12%
   * Security Monitoring and Security Assessment8% - 12%
   * Data Privacy Governance and Cybersecurity8% - 12%
   * Security Audit - 8%-12%
   <br /><br />

* <a target="_blank" href="https://training.sap.com/certification/p_tsec10_75-sap-certified-technology-professional---system-security-architect-g/"><strong>P_TSEC10_75</strong>
SAP Certified Technology Professional - System Security Architect</a> is the most popular among all SAP exams.

   * SAP System Security Fundamentals - >12%
   * Authorization Concept for SAP Business Suite - >12%
   * Authorization Concept for SAP S/4HANA - >12%
   * Secure SAP System Management - >12%
   * SAP Netweaver Application Server Security - >12%
   * Authorization, Security and Scenarios in SAP HANA8% - 12%
   * Security in SAP Gateway and SAP Fiori System Landscape - &LT; 8%

   * https://myerp-training.com/sap-security-certification/
   * <a target="_blank" href="https://www.credly.com/org/sap/badge/sap-certified-technology-professional-sap-system-security-architect">After passing, post your cert on Credly</a>
   <br /><br />

* <a target="_blank" href="https://training.sap.com/course/cer006-sap-global-certification-online-exam-six-attempts-certification-online-010-us-en/?">$606 USD CER006</a> <a target="_blank" href="https://training.sap.com/certification/c_grcac_12-sap-certified-application-associate---sap-access-control-120-g/">C_GRCAC_12 SAP GRC (Governance, Risk, and Compliance) AC certification exam</a>
   * https://training.sap.com/trainingpath/Applications-Governance,+Risk+and+Compliance+(GRC)-SAP+BusinessObjects
   <br /><br />

* <a target="_blank" href="https://help.sap.com/viewer/product-finder?q=">SAP documentation</a>

* SAP provides a 14 day free trial of their $25/month Learning Hub (using an "S-account") at https://learninghub.sap.com/. 800-872-1727 

Elsewhere:
   * https://www.udemy.com/course/sap-security-and-authorizations/
   * https://www.udemy.com/course/sap-hana-installation-operation-and-administration/


## Secure Coding

<a target="_blank" href="https://codebashing.com/">CodeBashing.com</a> (by security tools vendor Checkmarx) has gamified tutorials on identifying and mitgating vulnerabilities in code for many languages:
<a target="_blank" href="https://free.codebashing.com/courses/hacking_headlines">Hacking Headlines</a>, 
<a target="_blank" href="https://free.codebashing.com/courses/source_codes">Source Code (for each language)</a>:
Android (Java), iOS, 
C/C++, 
<a target="_blank" href="https://free.codebashing.com/courses/dotnet">C# .NET</a>, .NET Backend, .NET Advanced,
Go,
<a target="_blank" href="https://free.codebashing.com/courses/java">Java</a>, Java Backend, Java Advanced, Scala
NodeJS,
PHP,
Python Django,
Ruby on Rails,


<hr />

## Networking (Firewall) certs

Network software vendors have affordable certifications:

* <a target="_blank" href="https://www.paloaltonetworks.com/services/education/certification#pccsa">	$100 Palo Alto Networks Certified Cybersecurity Associate (PCCSA)</a>
* <a target="_blank" href="https://www.paloaltonetworks.com/services/education/certification#pcnsa">	$140 Palo Alto Networks Certified Network Security Administrator (PCNSA)</a>
* <a target="_blank" href="https://www.paloaltonetworks.com/services/education/certification#pcnse">	$400 Palo Alto Networks Certified Network Security Engineer	(PCNSE)</a>

* <a target="_blank" href="https://view.ceros.com/f5/certification-roadmap/p/9?heightOverride=740">	$135 F5 Big-IP Certified Solution Expert - Security (F5 CSE Sec)</a>
* <a target="_blank" href="https://view.ceros.com/f5/certification-roadmap/p/9?heightOverride=740">	$135 F5 Big-IP Certified Technical Specialist - Access Policy Manager (F5 CTS APM)</a>
* <a target="_blank" href="https://view.ceros.com/f5/certification-roadmap/p/9?heightOverride=740">	$135 F5 Big-IP Certified Technical Specialist - Domain Name Services	(F5 CTS DNS)</a>

* <a target="_blank" href="https://www.juniper.net/us/en/training/certification/certification-tracks/junos-security-track/?tab=jnciasec">$200 Juniper Networks Certified Internet Associate Security	(JNCIA Sec)</a>
* <a target="_blank" href="https://www.juniper.net/us/en/training/certification/certification-tracks/junos-security-track/?tab=jncip-sec">$400 Juniper Networks Certified Internet Professional Security	(JNCIP Sec)</a>
* <a target="_blank" href="https://www.juniper.net/us/en/training/certification/certification-tracks/junos-security-track/?tab=jncisec">$300 Juniper Networks Certified Internet Specialist Security (JNCIS Sec)</a>

* <a target="_blank" href="https://training-certifications.checkpoint.com/#/courses/Check%20Point%20Certified%20Admin%20(CCSA)%20R80.x">$250 Checkpoint Certified Security Administrator (CCSA)</a>
* <a target="_blank" href="https://training-certifications.checkpoint.com/#/courses/Check%20Point%20Certified%20Expert%20(CCSE)%20R80.x">$250 Checkpoint Certified Security Expert (CCSE)</a>
* <a target="_blank" href="https://training-certifications.checkpoint.com/#/courses/Check%20Point%20Certified%20Master%20(CCSM)%20R80.x">$350 Checkpoint Certified Security Master (CCSM)</a>

* <a target="_blank" href="https://training.fortinet.com/local/staticpage/view.php?page=nse_4">$400 NSE 4 - FortiNET Network Security Professional (NSE 4)</a>
* <a target="_blank" href="https://training.fortinet.com/local/staticpage/view.php?page=nse_7">$400 NSE 7 - FortiNET Network Security Architect (NSE 7)</a>
* <a target="_blank" href="https://training.fortinet.com/local/staticpage/view.php?page=nse_8">$2,000 NSE 8 - Fortinet Network Security Expert	(NSE 8)</a>

* <a target="_blank" href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert/ccie-security.html">$2,050 Cisco Certified Implementation Expert - Security (CCIE Sec)</a>

* <a target="_blank" href="https://www.splunk.com/en_us/training/certification-track/splunk-es-certified-admin.html">$130 Splunk Enterprise Security Certified Administrator (Splunk ECSA)</a> - 61 questions in 60 minutes

<hr />

## References

On Udemy: <a target="_blank" href="https://mckinsey.udemy.com/course/secure-product-lifecycle-101/">McK</a> <a target="_blank" href="https://www.udemy.com/course/secure-product-lifecycle-101/">
Security Product Lifecycle 101</a> (SPLC) by Implementing Security. Voiced by an enthusiastic voice pro.
References SAMM 2.0, OWASP Top 10.

* Data-Driven Security (Pearson) by Jacobs and Rudis

* <a target="_blank" href="https://www.beyond20.com/blog/best-cyber-security-certification-path-for-a-great-career/">Best Cert paths</a>

Podcast: Evan Francen's Unsecurity

<a target="_blank" href="https://www.youtube.com/watch?v=P9wz0Sted_I">
TOP 5 Cyber Security Projects to go on Your Resume!</a> by Josh Madakor
   * Simple REST API
   * SIEM in Azure Sentinel
   * Active Directory environment
   * File Integrity Monitor
   * Vulnerability Management Lab
   <br /><br />

Azure Service Operator (ASO)
Fabrikam Fabric Store


## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}