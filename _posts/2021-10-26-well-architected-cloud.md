---
layout: post
title: "Well Architected Cloud"
excerpt: "What is your maturity toward adopting best practices using a comprehensive industry-standard framework from Amazon and Microsoft?"
tags: [Cloud, comparison]
date: "2021-10-26"
file: "well-architected-cloud"
image: # pic-black-bkg-white-cloud_1920x1200
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme Bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Your Radar Chart of Progress

PROTIP: To visualize progress toward using public cloud effectively, I created this sample Radar Chart within an <a target="_blank" href="https://github.com/wilsonmar/wilsonmar.github.io/blob/master/docs/well-architected-radar.xlsx?raw=true">Excel file I built</a>:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/139370139-f6ec275e-5882-4c80-80a7-5c309b48177b.png">
<img width="1762" alt="well-architected-radar-1762x662" src="https://user-images.githubusercontent.com/300046/139370139-f6ec275e-5882-4c80-80a7-5c309b48177b.png"></a>

The percentage for each pillar is based on <strong>achievements</strong> (the blue line) and <strong>target level</strong> (the red line).

The gaps (delta) between "Now" and "Next" are addresed by a <strong>backlog of activities</strong> designed to reach higher organizational and systems capability.

The percentages are based on a <strong>consistent and comprehensive</strong> set of <strong>design principles</strong> and <strong>best practices</strong> to build and evaluate cloud shared public usage defined in the "Well-Architected" (WA) Framework.

The Well Architected Framework is really an <strong>industry standard</strong> because it is referenced by Amazon, Microsoft, and Google:

   * https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html
   * <a target="_blank" href="https://docs.aws.amazon.com/index.html?ref=wellarchitected">https://docs.aws.amazon.com/index.html?ref=wellarchitected</a>
   * https://aws.amazon.com/architecture/well-architected/
   * https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/
   * https://wa.aws.amazon.com/index.en.html
   * June 2020 "Well Architeced Framework" summary (155 pages) in <a target="_blank" href="https://www.amazon.com/AWS-Well-Architected-Framework-Whitepaper-ebook/dp/B08CFW9PXN/">Kindle mobile app</a>
   * https://explore.skillbuilder.aws/learn/course/2045/play/6898/the-aws-well-architected-framework

   * https://docs.microsoft.com/en-us/azure/architecture/framework/ (introduced July, 2020)

   * https://cloud.google.com/architecture/framework
   <br /><br />


<a name="Pillars"></a>

### Pillars of the framework:

The five pillars are listed below in default priority defined by a specific team (your team would like have different priorities):

<em>Click a link for each pillar to go straight to each pillar's questions:</em>

   1. <a href="#Sec">SEC = <strong>Security</strong></a> (+privacy and compliance) = The ability to protect information, systems, and assets (applications and data) from threats. Google calls this "Security, privacy, and compliance".

   2. <a href="#Reliability">REL = <strong>Reliability</strong></a> = The ability to recover from failures and continue to function

   3. <a href="#Ops">OPS = <strong>Operational Excellence</strong></a> = The ability to run and monitor systems to deliver business value and continually improve supporting processes and procedures 

   4. <a href="#Perf">PERF = <strong>Performance Efficiency</strong></a> = The ability to adapt to changes in load

   5. <a href="#Cost">COST = <strong>Cost Optimization</strong></a> = The ability to achieve business outcomes at the lowest price point - Managing costs to maximize the value delivered

One memonic to make the 5 easier to remember is "CROPS".

Google adds a "System Design" category.

The benefits sought from the framework are:

   * Build and deploy faster
   * Lower or mitigate risks
   * Make informed decisions
   * Learn best practices
   <br /><br />


### AWS WA Assessment Tool

   * <a target="_blank" href="https://www.youtube.com/watch?v=MfxF-FYEFjY">VIDEO: Build Better Workloads</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=yb9CH3UbMbw" title="Oct 14, 2019">VIDEO: Are You Well-Architected?</a> by AWS.
   <br /><br />

1. Get AWS credentials.

2. In a browser, go to the (free) AWS WA Tool</a> (introduced 2018) provides a set of questions (context) and best practices:

   <a target="_blank" href="https://console.aws.amazon.com/wellarchitected">https://console.aws.amazon.com/wellarchitected</a>

3. Click orange "Define workload".

   Each "<strong>workload</strong>" is "a collection of interrelated applications, infrastructure, policy, governance, and operations running on AWS that provides business or operational value".

   A "<strong>technology portfolio</strong>" is the collection of workloads that are required for the business to operate.

   The "<strong>architecture</strong>" is how components work together in a workload, usually illustrated by  architecture diagrams that show how components communicate and interact.

   A "<strong>component</strong>" is the code, configuration, and  resources that together deliver against a requirement. A component is often the unit of technical ownership, and is decoupled from other components.

3. Specify a name for the workload under assessment. If you're using a shared account, enter <strong>your name</strong> such as:

   <tt>wilson's all xxx workload</tt>

   The "xxx" stands for the list of AWS account numbers specified for this assessment.

4. Click "Well-Architected Framework" to get to the content of questions and answers.

5. One pillar at a time, in the <a href="#Pillars">priority identified</a>, select each question, then select applicable items.


   ### Lens

6. If applicable, select a <strong>lens</strong> (listed alphabetically):

   * Analytics: <a target="_blank" href="https://www.amazon.com/Analytics-Lens-AWS-Well-Architected-Framework-ebook/dp/B088YVNGP7/" title="May 19, 2020">95 pages on Kindle (mobile) app</a>

   * Financial Services Industry: <a target="_blank" href="https://www.amazon.com/Financial-Services-Industry-Lens-Well-Architected-ebook/dp/B088WBNVQL/" title="May 18, 2020">71 pages on Kindle (mobile) app</a>

   * High-Performance Computing: <a target="_blank" href="https://www.amazon.com/High-Performance-Computing-Lens-Well-Architected-Whitepaper-ebook/dp/B082TRK76F/" title="December 15, 2019">55 pages on Kindle (mobile) app</a>

   * IoT: <a target="_blank" href="https://www.amazon.com/IoT-Lens-Well-Architected-Framework-Whitepaper-ebook/dp/B082XSCMRX/" title="December 19, 2019">77 pages on Kindle (mobile) app</a>

   * Machine Learning: <a target="_blank" href="https://www.amazon.com/Machine-Learning-Lens-Well-Architected-Whitepaper-ebook/dp/B09JDTVPJX/" title="October 12, 2021">265 pages on Kindle (mobile) app</a>

   * SaaS: <a target="_blank" href="https://www.amazon.com/SaaS-Lens-AWS-Well-Architected-Framework-ebook/dp/B08QZZ6DLM/" title="December 17, 2020">87 pages on Kindle (mobile) app</a>

   * Serverless: <a target="_blank" href="https://www.amazon.com/Serverless-Applications-Lens-Well-Architected-Whitepaper-ebook/dp/B082TXMZ5T/" title="December 15, 2019">91 pages on Kindle (mobile) app</a>  

<a target="_blank" href="https://aws.amazon.com/about-aws/whats-new/2020/12/apis-now-available-for-aws-well-architected-tool/">BLOG:
   APIs now available for the AWS Well-Architected Tool</a>


## Well-Architected Labs

My notes for each pillar are annotated with deep links to hands-on instructions at<br />
<a target="_blank" href="https://wellarchitectedlabs.com/">https://wellarchitectedlabs.com</a> 

<a target="_blank" href="https://github.com/awslabs/aws-well-architected-labs">https://github.com/awslabs/aws-well-architected-labs</a> (hands-on)


## AWS tools

<a target="_blank" href="https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html">Docs</a>: 
<a target="_blank" href="https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/">
AWS Cost & Usage Report (AWS CUR)</a> contains the most comprehensive set of cost and usage data available.

NOTE: The <a target="_blank" href="https://calculator.aws/#/">AWS Pricing Calculator at https://calculator.aws/#</a> is used to estimate costs for specific architectures. Different server types have different costs. The same services in different regions have different prices. Transfer of data between different regions incur charges.

AWS billing reports are published to an Amazon Simple Storage Service (Amazon S3) bucket.

1. REMEMBER: Click your name at the top bar for the menu to select "My Billing Dashboard":

   "Cost Management" consists of:
   
   * Cost Explorer
   * Budgets
   * Budgets Reports
   * Saving Plans
   * Cost & Usage Reports
   * Cost Categories
   * Cost allocation tags
   <br /><br />

   "Billing" consists of:
   * Billing
   * Orders and invoices
   * Credits
   * Purchase orders
   <br /><br />

   In "AWS Cost Management":

1. Click "Cost Explorer" to launch Cost Explorer for "AWS Cost Management"
  
1. For Daily views, in preferences, check "Hourly and Resource Level Data" which costs more money.

### Apptio CloudAbility

<hr />

## Training

AWS provides in-depth training on the Well-Architected Framework to partners to help companies implement best practices, measure the state of your workloads, and make improvements where assistance is required.

<a target="_blank" href="https://explore.skillbuilder.aws/learn/course/2045/AWS%2520Well-Architected">
The AWS Skillbuilder video course</a> is rather verbose, but provides knowledge checks (quizzes).

<a target="_blank" href="https://docs.microsoft.com/en-us/assessments/?id=azure-architecture-review&mode=pre-assessment">
Microsoft Azure Well-Architected Review</a> provides guidance by pillar.

### General Design Principles

AWS published these General Design Principles:

   * <strong>Stop guessing your capacity needs</strong> - if you make a poor capacity decision when deploying a workload, you might end up sitting on expensive idle resources or dealing with the performance implications of limited capacity. With cloud computing, these problems can go away. You can use as much or as little capacity as you need, and scale up and down automatically.

   * <strong>Test systems at production scale</strong> - In the cloud, you can create a production-scale test environment on demand, complete your testing, and then decommission the resources. Because you only pay for the test environment when it's running, you can simulate your live environment for a fraction of the cost of testing on premises.

   * <strong>Automate to make architectural experimentation easier</strong> (everything in AWS is an API) - Automation allows you to create and replicate your workloads at low cost and avoid the expense of manual effort. You can track changes to your automation, audit the impact, and revert to previous parameters when necessary.

   * <strong>Allow for evolutionary architectures</strong> -  In a traditional environment, architectural decisions are often implemented as static, onetime events, with a few major versions of a system during its lifetime. As a business and its context continue to evolve, these initial decisions might hinder the system's ability to deliver changing business requirements. In the cloud, the capability to automate and test on demand lowers the risk of impact from design changes. This allows systems to evolve over time so that businesses can take advantage of innovations as a standard practice.

   * <strong>Drive architectures using data</strong> - In the cloud, you can collect data on how your architectural choices affect the behavior of your workload. This lets you make factbased decisions on how to improve your workload. Your cloud infrastructure is code, so you can use that data to inform your architecture choices and improvements over time.

   * <strong>Improve through "game days"</strong> (dry-run simulation, choas engineering, etc.) - Test how your architecture and processes perform by regularly scheduling game days to simulate events in production. This will help you understand where improvements can be made and can help develop organizational experience in dealing with events.


<hr />

<a name="Sec"></a>

## Security

<img align="right" width="99" alt="well-architected-SEC-gold-101x134.png" src="https://user-images.githubusercontent.com/300046/139144053-7c59ff46-8774-4684-bed2-df3e9dd4fc71.png">
   * https://wa.aws.amazon.com/wat.pillar.security.en.html
   * <a target="_blank" href="https://www.youtube.com/watch?v=ujRf2BzgGGg">VIDEO: Well-Architected for Security: Advanced Session</a> by Amazon Web Services
   * <a target="_blank" href="https://www.amazon.com/Security-Pillar-Well-Architected-Framework-Whitepaper-ebook/dp/B08CF64XRV/" title="July 5, 2020">56 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/security/">AWS Well-Architected Labs for Security</a>
   <br /><br />

The broad security areas:

* Identity and access management
* Infrastructure protection
* Data protection: sovereignty and encryption
* Incidence response
* Application security
* Security resources
<br /><br />

Design principles for security in the cloud:

* Implement a strong identity foundation
* Enable traceability
* Apply security at all layers (levels)
* Automate security best practices
* Protect data in transit and at rest
* Keep people away from data
* Prepare for security events ("Game Day")
<br /><br />

<hr />

1. How do you securely operate your workload?

   * <strong>Separate workloads using accounts</strong> - Organize workloads in separate accounts and group accounts based on function or a common set of controls rather than mirroring your company’s reporting structure. Start with security and infrastructure in mind to enable your organization to set common guardrails as your workloads grow.

   * <strong>Secure AWS account Secure access to your accounts</strong> - for example by enabling MFA and restrict use of the root user, and configure account contacts.

   * <strong>Identify and validate control objectives</strong> - Based on your compliance requirements and risks identified from your threat model, derive and validate the control objectives and controls that you need to apply to your workload. Ongoing validation of control objectives and controls help you measure the effectiveness of risk mitigation.

   * <strong>Keep up to date with security threats</strong> - Recognize attack vectors by staying up to date with the latest security threats to help you define and implement appropriate controls.

   * <strong>Keep up to date with security recommendations</strong> - Stay up to date with both AWS and industry security recommendations to evolve the security posture of your workload.

   * <strong>Automate testing and validation of security controls in pipelines</strong> - Establish secure baselines and templates for security mechanisms that are tested and validated as part of your build, pipelines, and processes. Use tools and automation to test and validate all security controls continuously. For example, scan items such as machine images and infrastructure as code templates for security vulnerabilities, irregularities, and drift from an established baseline at each stage.

   * <strong>Identify and prioritize risks using a threat model</strong> - Use a threat model to identify and maintain an up-to-date register of potential threats. Prioritize your threats and adapt your security controls to prevent, detect, and respond. Revisit and maintain this in the context of the evolving security landscape.

   * <strong>Evaluate and implement new security services and features regularly</strong> - AWS and APN Partners constantly release new features and services that allow you to evolve the security posture of your workload.

2. How do you manage identities for people and machines?

   * <strong>Use strong sign-in mechanisms</strong> - Enforce minimum password length, and educate users to avoid common or re-used passwords. Enforce multi-factor authentication (MFA) with software or hardware mechanisms to provide an additional layer.
Use temporary credentials

   * <strong>Require identities to dynamically acquire temporary credentials.</strong> - For workforce identities, use AWS Single Sign-On, or federation with IAM roles to access AWS accounts. For machine identities, require the use of IAM roles instead of long term access keys.

   * <strong>Store and use secrets securely</strong> - For workforce and machine identities that require secrets such as passwords to third party applications, store them with automatic rotation using the latest industry standards in a specialized service.

   * <strong>Rely on a centralized identity provider</strong> - For workforce identities, rely on an identity provider that enables you to manage identities in a centralized place. This enables you to create, manage, and revoke access from a single location making it easier to manage access. This reduces the requirement for multiple credentials and provides an opportunity to integrate with HR processes.

   * <strong>Audit and rotate credentials periodically</strong> - When you cannot rely on temporary credentials and require long term credentials, audit credentials to ensure that the defined controls (for example, MFA) are enforced, rotated regularly, and have appropriate access level.

   * <strong>Leverage user groups and attributes</strong> - Place users with common security requirements in groups defined by your identity provider, and put mechanisms in place to ensure that user attributes that may be used for access control (e.g., department or location) are correct and updated. Use these groups and attributes, rather than individual users, to control access. This allows you to manage access centrally by changing a user’s group membership or attributes once, rather than updating many individual policies when a user’s access needs change.

3. How do you manage permissions for people and machines?

   * <strong>Define access requirements</strong> - Each component or resource of your workload needs to be accessed by administrators, end users, or other components. Have a clear definition of who or what should have access to each component, choose the appropriate identity type and method of authentication and authorization.

   * <strong>Grant least privilege access</strong> - Grant only the access that identities require by allowing access to specific actions on specific AWS resources under specific conditions. Rely on groups and identity attributes to dynamically set permissions at scale, rather than defining permissions for individual users. For example, you can allow a group of developers access to manage only resources for their project. This way, when a developer is removed from the group, access for the developer is revoked everywhere that group was used for access control, without requiring any changes to the access policies.

   * <strong>Establish emergency access process</strong> - A process that allows emergency access to your workload in the unlikely event of an automated process or pipeline issue. This will help you rely on least privilege access, but ensure users can obtain the right level of access when they require it. For example, establish a process for administrators to verify and approve their request.

   * <strong>Reduce permissions continuously</strong> - As teams and workloads determine what access they need, remove permissions they no longer use and establish review processes to achieve least privilege permissions. Continuously monitor and reduce unused identities and permissions.

   * <strong>Define permission guardrails for your organization</strong> - Establish common controls that restrict access to all identities in your organization. For example, you can restrict access to specific AWS Regions, or prevent your operators from deleting common resources, such as an IAM role used for your central security team.

   * <strong>Manage access based on life cycle</strong> - Integrate access controls with operator and application life cycle and your centralized federation provider. For example, remove a user’s access when they leave the organization or change roles.

   * <strong>Analyze public and cross account access</strong> - Continuously monitor findings that highlight public and cross account access. Reduce public access and cross account access to only resources that require this type of access.

   * <strong>Share resources securely</strong> - Govern the consumption of shared resources across accounts or within your AWS Organization. Monitor shared resources and review shared resource access.

4. How do you detect and investigate security events?

   * <strong>Configure service and application logging</strong> - Configure logging throughout the workload, including application logs, resource logs, and AWS service logs. For example, ensure that AWS CloudTrail, Amazon CloudWatch Logs, Amazon GuardDuty and AWS Security Hub are enabled for all accounts within your organization.

   * <strong>Analyze logs, findings, and metrics centrally</strong> - All logs, metrics, and telemetry should be collected centrally, and automatically analyzed to detect anomalies and indicators of unauthorized activity. A dashboard can provide you easy to access insight into real-time health. For example, ensure that Amazon GuardDuty and Security Hub logs are sent to a central location for alerting and analysis.

   * <strong>Automate response to events</strong> - Using automation to investigate and remediate events reduces human effort and error, and enables you to scale investigation capabilities. Regular reviews will help you tune automation tools, and continuously iterate. For example, automate responses to Amazon GuardDuty events by automating the first investigation step, then iterate to gradually remove human effort.

   * <strong>Implement actionable security events</strong> - Create alerts that are sent to and can be actioned by your team. Ensure that alerts include relevant information for the team to take action. For example, ensure that Amazon GuardDuty and AWS Security Hub alerts are sent to the team to action, or sent to response automation tooling with the team remaining informed by messaging from the automation framework.

5. How do you protect your network resources?

   * <strong>Create network layers</strong> - Group components that share reachability requirements into layers. For example, a database cluster in a VPC with no need for internet access should be placed in subnets with no route to or from the internet. In a serverless workload operating without a VPC, similar layering and segmentation with microservices can achieve the same goal.

   * <strong>Control traffic at all layers</strong> - Apply controls with a defense in depth approach for both inbound and outbound traffic. For example, for Amazon Virtual Private Cloud (VPC) this includes security groups, Network ACLs, and subnets. For AWS Lambda, consider running in your private VPC with VPC-based controls.

   * <strong>Automate network protection</strong> - Automate protection mechanisms to provide a self-defending network based on threat intelligence and anomaly detection. For example, intrusion detection and prevention tools that can pro-actively adapt to current threats and reduce their impact.

   * <strong>Implement inspection and protection</strong> - Inspect and filter your traffic at each layer. For example, use a web application firewall to help protect against inadvertent access at the application network layer. For Lambda functions, third-party tools can add application-layer firewalling to your runtime environment.


6. How do you protect your compute resources?

   * <strong>Perform vulnerability management</strong> - Frequently scan and patch for vulnerabilities in your code, dependencies, and in your infrastructure to help protect against new threats.

   * <strong>Reduce attack surface</strong> - Reduce your attack surface by hardening operating systems, minimizing components, libraries, and externally consumable services in use.

   * <strong>Implement managed services</strong> - Implement services that manage resources, such as Amazon RDS, AWS Lambda, and Amazon ECS, to reduce your security maintenance tasks as part of the shared responsibility model.

   * <strong>Automate compute protection</strong> - Automate your protective compute mechanisms including vulnerability management, reduction in attack surface, and management of resources.

   * <strong>Enable people to perform actions at a distance</strong> - Removing the ability for interactive access reduces the risk of human error, and the potential for manual configuration or management. For example, use a change management workflow to deploy EC2 instances using infrastructure as code, then manage EC2 instances using tools instead of allowing direct access or a bastion host.

   * <strong>Validate software integrity</strong> - Implement mechanisms (for example, code signing) to validate that the software, code, and libraries used in the workload are from trusted sources and have not been tampered with.

7. How do you classify your data?

   * <strong>Identify the data within your workload</strong> - This includes the type and classification of data, the associated business processes. data owner, applicable legal and compliance requirements, where it’s stored, and the resulting controls that are needed to be enforced. This may include classifications to indicate if the data is intended to be publicly available, if the data is internal use only such as customer personally identifiable information (PII), or if the data is for more restricted access such as intellectual property, legally privileged or marked sensititve, and more.

   * <strong>Define data protection controls</strong> - Protect data according to its classification level. For example, secure data classified as public by using relevant recommendations while protecting sensitive data with additional controls.
Automate identification and classification</strong> of data to reduce the risk of human error from manual interactions.

   * <strong>Define data lifecycle management</strong> - Your defined lifecycle strategy should be based on sensitivity level, as well as legal and organization requirements. Aspects including the duration you retain data for, data destruction, data access management, data transformation, and data sharing should be considered.

8. How do you protect your data at rest?

   * <strong>Implement secure key management</strong> - Encryption keys must be stored securely, with strict access control, for example, by using a key management service such as AWS KMS. Consider using different keys, and access control to the keys, combined with the AWS IAM and resource policies, to align with data classification levels and segregation requirements.

   * <strong>Enforce encryption at rest</strong> - Enforce your encryption requirements based on the latest standards and recommendations to help protect your data at rest.

   * <strong>Automate data at rest protection</strong> - Use automated tools to validate and enforce data at rest protection continuously, for example, verify that there are only encrypted storage resources.

   * <strong>Enforce access control</strong> - Enforce access control with least privileges and mechanisms, including backups, isolation, and versioning, to help protect your data at rest. Prevent operators from granting public access to your data.

   * <strong>Use mechanisms to keep people away from data</strong> - Keep all users away from directly accessing sensitive data and systems under normal operational circumstances. For example, provide a dashboard instead of direct access to a data store to run queries. Where CI/CD pipelines are not used, determine which controls and processes are required to adequately provide a normally disabled break-glass access mechanism.

9. How do you protect your data in transit?

   * <strong>Implement secure key and certificate management</strong> - Store encryption keys and certificates securely and rotate them at appropriate time intervals while applying strict access control; for example, by using a certificate management service, such as AWS Certificate Manager (ACM).

   * <strong>Enforce encryption in transit</strong> - Enforce your defined encryption requirements based on appropriate standards and recommendations to help you meet your organizational, legal, and compliance requirements.

   * <strong>Automate detection of unintended data access</strong> - Use tools such as GuardDuty to automatically detect attempts to move data outside of defined boundaries based on data classification level, for example, to detect a trojan that is copying data to an unknown or untrusted network using the DNS protocol.

   * <strong>Authenticate network communications</strong> - Verify the identity of communications by using protocols that support authentication, such as Transport Layer Security (TLS) or IPsec.

10. How do you anticipate, respond to, and recover from incidents?

   * <strong>Identify key personnel and external resources</strong> - Identify internal and external personnel, resources, and legal obligations that would help your organization respond to an incident.

   * <strong>Develop incident management plans</strong> - Create plans to help you respond to, communicate during, and recover from an incident. For example, you can start an incident response plan with the most likely scenarios for your workload and organization. Include how you would communicate and escalate both internally and externally.

   * <strong>Prepare forensic capabilities</strong> - Identify and prepare forensic investigation capabilities that are suitable, including external specialists, tools, and automation.

   * <strong>Automate containment capability</strong> and recovery of an incident to reduce response times and organizational impact.

   * <strong>Pre-provision access</strong> - Ensure that incident responders have the correct access pre-provisioned into AWS to reduce the time for investigation through to recovery.

   * <strong>Pre-deploy tools</strong> - Ensure that security personnel have the right tools pre-deployed into AWS to reduce the time for investigation through to recovery.

   * <strong>Run game days</strong> - Practice incident response game days (simulations) regularly, incorporate lessons learned into your incident management plans, and continuously improve.

<hr />

<a name="Reliability"></a>

## Reliability

<img align="right" width="99" alt="well-architected-RELI-152x170.png" src="https://user-images.githubusercontent.com/300046/139144457-0397ca9f-4964-42d7-aac0-33b98ac2e811.png">
   * https://wa.aws.amazon.com/wat.pillar.reliability.en.html
   * <a target="_blank" href="https://www.amazon.com/Reliability-Pillar-Well-Architected-Framework-Whitepaper-ebook/dp/B08L8CT213/" title="Oct 14, 2020">110 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/reliability/">AWS Well-Architected Labs for Reliability</a>
   <br /><br />

The ability to recover from failures and meet demand:
The ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.

   * Foundations – IAM, Amazon VPC, AWS Trusted Advisor, AWS Shield
   * Change Management – AWS CloudTrail, AWS Config, Auto Scaling, Amazon CloudWatch
   * Failure Management – AWS CloudFormation, Amazon S3, AWS KMS, Amazon Glacier
   * Workload architecture
   <br /><br />

Design principles for reliability:

   * Test recovery procedures
   * Automatically recover from failure
   * Scale horizontally to increate aggregate system availability
   * Stop guessing capacity (scale horizontally and veritically)
   * Manage change in automation 
   <br /><br />

<hr />


1. How do you manage service quotas and constraints?

   * <strong>Aware of service quotas and constraints</strong> - You are aware of your default quotas and quota increase requests for your workload architecture. You additionally know which resource constraints, such as disk or network, are potentially impactful.

   * <strong>Manage service quotas across accounts and regions</strong> - If you are using multiple AWS accounts or AWS Regions, ensure that you request the appropriate quotas in all environments in which your production workloads run.

   * <strong>Accommodate fixed service quotas and constraints through architecture</strong> - Be aware of unchangeable service quotas and physical resources, and architect to prevent these from impacting reliability.

   * <strong>Monitor and manage quotas</strong> - Evaluate your potential usage and increase your quotas appropriately allowing for planned growth in usage.

   * <strong>Automate quota management</strong> - Implement tools to alert you when thresholds are being approached. By using AWS Service Quotas APIs, you can automate quota increase requests.

   * <strong>Ensure that a sufficient gap exists between the current quotas and the maximum usage to accommodate failover</strong> - When a resource fails, it may still be counted against quotas until its successfully terminated. Ensure that your quotas cover the overlap of all failed resources with replacements before the failed resources are terminated. You should consider an Availability Zone failure when calculating this gap.

2. How do you plan your network topology?

   * <strong>Use highly available network connectivity for your workload public endpoints</strong> - These endpoints and the routing to them must be highly available. To achieve this, use highly available DNS, content delivery networks (CDNs), API Gateway, load balancing, or reverse proxies.

   * <strong>Provision redundant connectivity between private networks in the cloud and on-premises environments</strong> - Use multiple AWS Direct Connect (DX) connections or VPN tunnels between separately deployed private networks. Use multiple DX locations for high availability. If using multiple AWS Regions, ensure redundancy in at least two of them. You might want to evaluate AWS Marketplace appliances that terminate VPNs. If you use AWS Marketplace appliances, deploy redundant instances for high availability in different Availability Zones.

   * <strong>Ensure IP subnet allocation accounts for expansion and availability</strong> - Amazon VPC IP address ranges must be large enough to accommodate workload requirements, including factoring in future expansion and allocation of IP addresses to subnets across Availability Zones. This includes load balancers, EC2 instances, and container-based applications.

   * <strong>Prefer hub-and-spoke topologies over many-to-many mesh</strong> - If more than two network address spaces (for example, VPCs and on-premises networks) are connected via VPC peering, AWS Direct Connect, or VPN, then use a hub-and-spoke model, like that provided by AWS Transit Gateway.

   * <strong>Enforce non-overlapping private IP address ranges in all private address spaces where they are connected</strong> - The IP address ranges of each of your VPCs must not overlap when peered or connected via VPN. You must similarly avoid IP address conflicts between a VPC and on-premises environments or with other cloud providers that you use. You must also have a way to allocate private IP address ranges when needed.

3. How do you design your workload service architecture?

   * <strong>Choose how to segment your workload</strong> - Monolithic architecture should be avoided. Instead, you should choose between SOA and microservices. When making each choice, balance the benefits against the complexities—what is right for a new product racing to first launch is different than what a workload built to scale from the start needs. The benefits of using smaller segments include greater agility, organizational flexibility, and scalability. Complexities include possible increased latency, more complex debugging, and increased operational burden

   * <strong>Build services focused on specific business domains and functionality</strong> - SOA builds services with well-delineated functions defined by business needs. Microservices use domain models and bounded context to limit this further so that each service does just one thing. Focusing on specific functionality enables you to differentiate the reliability requirements of different services, and target investments more specifically. A concise business problem and having a small team associated with each service also enables easier organizational scaling.

   * <strong>Provide service contracts per API</strong> - Service contracts are documented agreements between teams on service integration and include a machine-readable API definition, rate limits, and performance expectations. A versioning strategy allows clients to continue using the existing API and migrate their applications to the newer API when they are ready. Deployment can happen anytime, as long as the contract is not violated. The service provider team can use the technology stack of their choice to satisfy the API contract. Similarly, the service consumer can use their own technology.

4. How do you design interactions in a distributed system to prevent failures?

   * <strong>Identify which kind of distributed system is required</strong> - Hard real-time distributed systems require responses to be given synchronously and rapidly, while soft real-time systems have a more generous time window of minutes or more for response. Offline systems handle responses through batch or asynchronous processing. Hard real-time distributed systems have the most stringent reliability requirements.

   * <strong>Implement loosely coupled dependencies</strong> - Dependencies such as queuing systems, streaming systems, workflows, and load balancers are loosely coupled. Loose coupling helps isolate behavior of a component from other components that depend on it, increasing resiliency and agility

   * <strong>Make all responses idempotent</strong> - An idempotent service promises that each request is completed exactly once, such that making multiple identical requests has the same effect as making a single request. An idempotent service makes it easier for a client to implement retries without fear that a request will be erroneously processed multiple times. To do this, clients can issue API requests with an idempotency token—the same token is used whenever the request is repeated. An idempotent service API uses the token to return a response identical to the response that was returned the first time that the request was completed.

   * <strong>Do constant work</strong> - Systems can fail when there are large, rapid changes in load. For example, a health check system that monitors the health of thousands of servers should send the same size payload (a full snapshot of the current state) each time. Whether no servers are failing, or all of them, the health check system is doing constant work with no large, rapid changes.

5. How do you design interactions in a distributed system to mitigate or withstand failures?

   * <strong>Implement graceful degradation to transform applicable hard dependencies into soft dependencies</strong> - When a component's dependencies are unhealthy, the component itself can still function, although in a degraded manner. For example, when a dependency call fails, failover to a predetermined static response.

   * <strong>Throttle requests</strong> - This is a mitigation pattern to respond to an unexpected increase in demand. Some requests are honored but those over a defined limit are rejected and return a message indicating they have been throttled. The expectation on clients is that they will back off and abandon the request or try again at a slower rate.

   * <strong>Control and limit retry calls</strong> - Use exponential backoff to retry after progressively longer intervals. Introduce jitter to randomize those retry intervals, and limit the maximum number of retries.

   * <strong>Fail fast and limit queues</strong> - If the workload is unable to respond successfully to a request, then fail fast. This allows the releasing of resources associated with a request, and permits the service to recover if it’s running out of resources. If the workload is able to respond successfully but the rate of requests is too high, then use a queue to buffer requests instead. However, do not allow long queues that can result in serving stale requests that the client has already given up on.

   * <strong>Set client timeouts</strong> - Set timeouts appropriately, verify them systematically, and do not rely on default values as they are generally set too high

   * <strong>Make services stateless where possible</strong> - Services should either not require state, or should offload state such that between different client requests, there is no dependence on locally stored data on disk or in memory. This enables servers to be replaced at will without causing an availability impact. Amazon ElastiCache or Amazon DynamoDB are good destinations for offloaded state.

   * <strong>Implement emergency levers</strong> - These are rapid processes that may mitigate availability impact on your workload. They can be operated in the absence of a root cause. An ideal emergency lever reduces the cognitive burden on the resolvers to zero by providing fully deterministic activation and deactivation criteria. Example levers include blocking all robot traffic or serving a static response. Levers are often manual, but they can also be automated.

6. How do you monitor workload resources?

   * <strong>Monitor all components for the workload (Generation)</strong> - Monitor the components of the workload with Amazon CloudWatch or third-party tools. Monitor AWS services with Personal Health Dashboard

   * <strong>Define and calculate metrics (Aggregation)</strong> - Store log data and apply filters where necessary to calculate metrics, such as counts of a specific log event, or latency calculated from log event timestamps

   * <strong>Send notifications (Real-time processing and alarming)</strong> - Organizations that need to know, receive notifications when significant events occur

   * <strong>Automate responses (Real-time processing and alarming)</strong> - Use automation to take action when an event is detected, for example, to replace failed components

   * <strong>Storage and Analytics</strong> - Collect log files and metrics histories and analyze these for broader trends and workload insights

   * <strong>Conduct reviews regularly</strong> - Frequently review how workload monitoring is implemented and update it based on significant events and changes

   * <strong>Monitor end-to-end tracing of requests through your system</strong> - Use AWS X-Ray or third-party tools so that developers can more easily analyze and debug distributed systems to understand how their applications and its underlying services are performing

7. How do you design your workload to adapt to changes in demand?

   * <strong>Use automation when obtaining or scaling resources</strong> - When replacing impaired resources or scaling your workload, automate the process by using managed AWS services, such as Amazon S3 and AWS Auto Scaling. You can also use third-party tools and AWS SDKs to automate scaling.

   * <strong>Obtain resources upon detection of impairment to a workload</strong> - Scale resources reactively when necessary if availability is impacted, to restore workload availability.

   * <strong>Obtain resources upon detection that more resources are needed for a workload</strong> - Scale resources proactively to meet demand and avoid availability impact.

   * <strong>Load test your workload</strong> - Adopt a load testing methodology to measure if scaling activity meets workload requirements.

8. How do you implement change?

   * <strong>Use runbooks for standard activities such as deployment</strong> - Runbooks are the predefined steps used to achieve specific outcomes. Use runbooks to perform standard activities, whether done manually or automatically. Examples include deploying a workload, patching it, or making DNS modifications.

   * <strong>Integrate functional testing as part of your deployment</strong> - Functional tests are run as part of automated deployment. If success criteria are not met, the pipeline is halted or rolled back.

   * <strong>Integrate resiliency testing as part of your deployment</strong> - Resiliency tests (as part of chaos engineering) are run as part of the automated deployment pipeline in a pre-prod environment.

   * <strong>Deploy using immutable infrastructure</strong> - This is a model that mandates that no updates, security patches, or configuration changes happen in-place on production workloads. When a change is needed, the architecture is built onto new infrastructure and deployed into production.

   * <strong>Deploy changes with automation</strong> - Automate Deployments and patching to eliminate negative impact.

9. How do you back up data?

   * <strong>Identify and back up all data that needs to be backed up, or reproduce the data from sources</strong> - Amazon S3 can be used as a backup destination for multiple data sources. AWS services such as Amazon EBS, Amazon RDS, and Amazon DynamoDB have built in capabilities to create backups. Third-party backup software can also be used. Alternatively, if the data can be reproduced from other sources to meet RPO, you might not require a backup

   * <strong>Secure and encrypt backups</strong> - Detect access using authentication and authorization, such as AWS IAM, and detect data integrity compromise by using encryption.

   * <strong>Perform data backup automatically</strong> - Configure backups to be taken automatically based on a periodic schedule, or by changes in the dataset. RDS instances, EBS volumes, DynamoDB tables, and S3 objects can all be configured for automatic backup. AWS Marketplace solutions or third-party solutions can also be used.

   * <strong>Perform periodic recovery of the data to verify backup integrity and processes</strong> - Validate that your backup process implementation meets your recovery time objectives (RTO) and recovery point objectives (RPO) by performing a recovery test.

10. How do you use fault isolation to protect your workload?

   * <strong>Deploy the workload to multiple locations</strong> - Distribute workload data and resources across multiple Availability Zones or, where necessary, across AWS Regions. These locations can be as diverse as required.

   * <strong>Automate recovery for components constrained to a single location</strong> - If components of the workload can only run in a single Availability Zone or on-premises data center, you must implement the capability to do a complete rebuild of the workload within your defined recovery objectives.

   * <strong>Use bulkhead architectures</strong> - Like the bulkheads on a ship, this pattern ensures that a failure is contained to a small subset of requests/users so the number of impaired requests is limited, and most can continue without error. Bulkheads for data are usually called partitions or shards, while bulkheads for services are known as cells.

11. How do you design your workload to withstand component failures?

   * <strong>Monitor all components of the workload to detect failures</strong> - Continuously monitor the health of your workload so that you and your automated systems are aware of degradation or complete failure as soon as they occur. Monitor for key performance indicators (KPIs) based on business value.

   * <strong>Fail over to healthy resources</strong> - Ensure that if a resource failure occurs, that healthy resources can continue to serve requests. For location failures (such as Availability Zone or AWS Region) ensure you have systems in place to fail over to healthy resources in unimpaired locations.

   * <strong>Automate healing on all layers</strong> - Upon detection of a failure, use automated capabilities to perform actions to remediate.

   * <strong>Use static stability to prevent bimodal behavior</strong> - Bimodal behavior is when your workload exhibits different behavior under normal and failure modes, for example, relying on launching new instances if an Availability Zone fails. You should instead build workloads that are statically stable and operate in only one mode. In this case, provision enough instances in each Availability Zone to handle the workload load if one AZ were removed and then use Elastic Load Balancing or Amazon Route 53 health checks to shift load away from the impaired instances.

   * <strong>Send notifications when events impact availability</strong> - Notifications are sent upon the detection of significant events, even if the issue caused by the event was automatically resolved.

12. How do you test reliability?

   * <strong>Use playbooks to investigate failures</strong> - Enable consistent and prompt responses to failure scenarios that are not well understood, by documenting the investigation process in playbooks. Playbooks are the predefined steps performed to identify the factors contributing to a failure scenario. The results from any process step are used to determine the next steps to take until the issue is identified or escalated.

   * <strong>Perform post-incident analysis</strong> - Review customer-impacting events, and identify the contributing factors and preventative action items. Use this information to develop mitigations to limit or prevent recurrence. Develop procedures for prompt and effective responses. Communicate contributing factors and corrective actions as appropriate, tailored to target audiences. Have a method to communicate these causes to others as needed.

   * <strong>Test functional requirements</strong> - These include unit tests and integration tests that validate required functionality.

   * <strong>Test scaling and performance requirements</strong> - This includes load testing to validate that the workload meets scaling and performance requirements.

   * <strong>Test resiliency using chaos engineering
Run tests that inject failures regularly into pre-production and production environments. Hypothesize how your workload will react to the failure, then compare your hypothesis to the testing results and iterate if they do not match. Ensure that production testing does not impact users.

   * <strong>Conduct game days regularly
Use game days to regularly exercise your failure procedures as close to production as possible (including in production environments) with the people who will be involved in actual failure scenarios. Game days enforce measures to ensure that production testing does not impact users.

13. How do you plan for disaster recovery (DR)?

   * <strong>Define recovery objectives for downtime and data loss</strong> - The workload has a recovery time objective (RTO) and recovery point objective (RPO).

   * <strong>Use defined recovery strategies to meet the recovery objectives</strong> - Define a disaster recovery (DR) strategy to meet objectives.

   * <strong>Test disaster recovery implementation to validate the implementation</strong> - Regularly test failover to DR to ensure that RTO and RPO are met.

   * <strong>Manage configuration drift at the DR site or region</strong> - Ensure that the infrastructure, data, and configuration are as needed at the DR site or region. For example, check that AMIs and service quotas are up to date.

   * <strong>Automate recovery</strong> - Use AWS or third-party tools to automate system recovery and route traffic to the DR site or region.

<hr />

<a name="Ops"></a>

## Operational Excellence

<img align="right" width="99" alt="well-architected-OPS-gold-141x117.png" src="https://user-images.githubusercontent.com/300046/139143665-5b1440ae-ece2-4d67-9b33-f898bdc02156.png">
   * https://wa.aws.amazon.com/wat.pillar.operationalExcellence.en.html
   * <a target="_blank" href="https://www.amazon.com/Operational-Excellence-Pillar-Well-Architected-Whitepaper-ebook/dp/B08CF4T3GW/" title="July 5, 2020">54 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/operational-excellence/">AWS Well-Architected Labs for Operational Excellence</a>
   <br /><br />

Processes and procedures to:
   * Organize
   * Prepare - AWS Config
   * Operate - Amazon CloudWatch
   * Evolve - Amazon Elasticsearch service
   <br /><br />

Best practices: Monitoring and diagnostics

Design Principles for Operational Excellence:

   * Perform operations as code
   * Annotate documentation (among code)
   * Make frequent, small, reversible change
   * Refine operations procedures frequently
   * Anticipate failure
   * Learn from all operational failures
   <br /><br />

<hr />

1. How do you determine what your <strong>operational priorities</strong> are?

   * <strong>Evaluate external customer needs</strong> - Involve key stakeholders, including business, development, and operations teams, to determine where to focus efforts on external customer needs. This will ensure that you have a thorough understanding of the operations support that is required to achieve your desired business outcomes.

   * <strong>Evaluate internal customer needs</strong> - Involve key stakeholders, including business, development, and operations teams, when determining where to focus efforts on internal customer needs. This will ensure that you have a thorough understanding of the operations support that is required to achieve business outcomes.

   * <strong>Evaluate governance requirements</strong> - Ensure that you are aware of guidelines or obligations defined by your organization that may mandate or emphasize specific focus. Evaluate internal factors, such as organization policy, standards, and requirements. Validate that you have mechanisms to identify changes to governance. If no governance requirements are identified, ensure that you have applied due diligence to this determination.

   * <strong>Evaluate compliance requirements</strong> - Evaluate external factors, such as regulatory compliance requirements and industry standards, to ensure that you are aware of guidelines or obligations that may mandate or emphasize specific focus. If no compliance requirements are identified, ensure that you apply due diligence to this determination.

   * <strong>Evaluate threat landscape</strong> - Evaluate threats to the business (for example, competition, business risk and liabilities, operational risks, and information security threats) and maintain current information in a risk registry. Include the impact of risks when determining where to focus efforts.

   * <strong>Evaluate tradeoffs</strong> - Evaluate the impact of tradeoffs between competing interests or alternative approaches, to help make informed decisions when determining where to focus efforts or choosing a course of action. For example, accelerating speed to market for new features may be emphasized over cost optimization, or you may choose a relational database for non-relational data to simplify the effort to migrate a system, rather than migrating to a database optimized for your data type and updating your application.

   * <strong>Manage benefits and risks</strong> - Manage benefits and risks to make informed decisions when determining where to focus efforts. For example, it may be beneficial to deploy a workload with unresolved issues so that significant new features can be made available to customers. It may be possible to mitigate associated risks, or it may become unacceptable to allow a risk to remain, in which case you will take action to address the risk.

2. How do you structure your organization to support your business outcomes?

   The "Operating Model"

   * <strong>Resources have identified owners</strong> - Understand who has ownership of each application, workload, platform, and infrastructure component, what business value is provided by that component, and why that ownership exists. Understanding the business value of these individual components and how they support business outcomes informs the processes and procedures applied against them.

   * <strong>Processes and procedures have identified owners</strong> - Understand who has ownership of the definition of individual processes and procedures, why those specific process and procedures are used, and why that ownership exists. Understanding the reasons that specific processes and procedures are used enables identification of improvement opportunities.

   * <strong>Operations activities have identified owners responsible for their performance</strong> - Understand who has responsibility to perform specific activities on defined workloads and why that responsibility exists. Understanding who has responsibility to perform activities informs who will conduct the activity, validate the result, and provide feedback to the owner of the activity.

   * <strong>Team members know what they are responsible for</strong> - Understanding the responsibilities of your role and how you contribute to business outcomes informs the prioritization of your tasks and why your role is important. This enables team members to recognize needs and respond appropriately.

   * <strong>Mechanisms exist to identify responsibility and ownership</strong> - Where no individual or team is identified, there are defined escalation paths to someone with the authority to assign ownership or plan for that need to be addressed.

   * <strong>Mechanisms exist to request additions, changes, and exceptions</strong> - You are able to make requests to owners of processes, procedures, and resources. Make informed decisions to approve requests where viable and determined to be appropriate after an evaluation of benefits and risks.

   * <strong>Responsibilities between teams are predefined or negotiated</strong> - There are defined or negotiated agreements between teams describing how they work with and support each other (for example, response times, service level objectives, or service level agreements). Understanding the impact of the teams’ work on business outcomes, and the outcomes of other teams and organizations, informs the prioritization of their tasks and enables them to respond appropriately.

3. How does your <strong>organizational culture</strong> support your business outcomes?

   * <strong>Executive Sponsorship</strong> - Senior leadership clearly sets expectations for the organization and evaluates success. Senior leadership is the sponsor, advocate, and driver for the adoption of best practices and evolution of the organization

   * <strong>Team members are empowered to take action when outcomes are at risk</strong> - The workload owner has defined guidance and scope empowering team members to respond when outcomes are at risk. Escalation mechanisms are used to get direction when events are outside of the defined scope.

   * <strong>Escalation is encouraged</strong> - Team members have mechanisms and are encouraged to escalate concerns to decision makers and stakeholders if they believe outcomes are at risk. Escalation should be performed early and often so that risks can be identified, and prevented from causing incidents.

   * <strong>Communications are timely, clear, and actionable</strong> - Mechanisms exist and are used to provide timely notice to team members of known risks and planned events. Necessary context, details, and time (when possible) are provided to support determining if action is necessary, what action is required, and to take action in a timely manner. For example, providing notice of software vulnerabilities so that patching can be expedited, or providing notice of planned sales promotions so that a change freeze can be implemented to avoid the risk of service disruption.

   * <strong>Experimentation is encouraged</strong> - Experimentation accelerates learning and keeps team members interested and engaged. An undesired result is a successful experiment that has identified a path that will not lead to success. Team members are not punished for successful experiments with undesired results. Experimentation is required for innovation to happen and turn ideas into outcomes.

   * <strong>Team members are enabled and encouraged to maintain and grow their skill sets</strong> - Teams must grow their skill sets to adopt new technologies, and to support changes in demand and responsibilities in support of your workloads. Growth of skills in new technologies is frequently a source of team member satisfaction and supports innovation. Support your team members’ pursuit and maintenance of industry certifications that validate and acknowledge their growing skills. Cross train to promote knowledge transfer and reduce the risk of significant impact when you lose skilled and experienced team members with institutional knowledge. Provide dedicated structured time for learning.

   * <strong>Resource teams appropriately</strong> - Maintain team member capacity, and provide tools and resources, to support your workload needs. Overtasking team members increases the risk of incidents resulting from human error. Investments in tools and resources (for example, providing automation for frequently executed activities) can scale the effectiveness of your team, enabling them to support additional activities.

   * <strong>Diverse opinions are encouraged and sought within and across teams</strong> - Leverage cross-organizational diversity to seek multiple unique perspectives. Use this perspective to increase innovation, challenge your assumptions, and reduce the risk of confirmation bias. Grow inclusion, diversity, and accessibility within your teams to gain beneficial perspectives.

4. How do you design your workload so that you can understand its state?

   * <strong>Implement application telemetry</strong> - Instrument your application code to emit information about its internal state, status, and achievement of business outcomes. For example, queue depth, error messages, and response times. Use this information to determine when a response is required.

   * <strong>Implement and configure workload telemetry</strong> - Design and configure your workload to emit information about its internal state and current status. For example, API call volume, HTTP status codes, and scaling events. Use this information to help determine when a response is required.

   * <strong>Implement user activity telemetry</strong> - Instrument your application code to emit information about user activity, for example, click streams, or started, abandoned, and completed transactions. Use this information to help understand how the application is used, patterns of usage, and to determine when a response is required.

   * <strong>Implement dependency telemetry</strong> - Design and configure your workload to emit information about the status (for example, reachability or response time) of resources it depends on. Examples of external dependencies can include, external databases, DNS, and network connectivity. Use this information to determine when a response is required.

   * <strong>Implement transaction traceability</strong> - Implement your application code and configure your workload components to emit information about the flow of transactions across the workload. Use this information to determine when a response is required and to assist you in identifying the factors contributing to an issue.

5. How do you reduce defects, ease remediation, and improve flow into production?

   * <strong>Use version control</strong> - Use version control to enable tracking of changes and releases.

   * <strong>Test and validate changes</strong> - Test and validate changes to help limit and detect errors. Automate testing to reduce errors caused by manual processes, and reduce the level of effort to test.

   * <strong>Use configuration management systems</strong> - Use configuration management systems to make and track configuration changes. These systems reduce errors caused by manual processes and reduce the level of effort to deploy changes.

   * <strong>Use build and deployment management systems</strong> - Use build and deployment management systems. These systems reduce errors caused by manual processes and reduce the level of effort to deploy changes.

   * <strong>Perform patch management</strong> - Perform patch management to gain features, address issues, and remain compliant with governance. Automate patch management to reduce errors caused by manual processes, and reduce the level of effort to patch.

   * <strong>Share design standards</strong> - Share best practices across teams to increase awareness and maximize the benefits of development efforts.

   * <strong>Implement practices to improve code quality</strong> - Implement practices to improve code quality and minimize defects. For example, test-driven development, code reviews, and standards adoption.

   * <strong>Use multiple environments</strong> - Use multiple environments to experiment, develop, and test your workload. Use increasing levels of controls as environments approach production to gain confidence your workload will operate as intended when deployed.

   * <strong>Make frequent, small, reversible changes</strong> - Frequent, small, and reversible changes reduce the scope and impact of a change. This eases troubleshooting, enables faster remediation, and provides the option to roll back a change.

   * <strong>Fully automate integration and deployment</strong> - Automate build, deployment, and testing of the workload. This reduces errors caused by manual processes and reduces the effort to deploy changes.

6. How do you mitigate deployment risks?

   * <strong>Plan for unsuccessful changes</strong> - Plan to revert to a known good state, or remediate in the production environment if a change does not have the desired outcome. This preparation reduces recovery time through faster responses.

   * <strong>Test and validate changes</strong> - Test changes and validate the results at all lifecycle stages to confirm new features and minimize the risk and impact of failed deployments.

   * <strong>Use deployment management systems</strong> - Use deployment management systems to track and implement change. This reduces errors cause by manual processes and reduces the effort to deploy changes.

   * <strong>Test using limited deployments</strong> - Test with limited deployments alongside existing systems to confirm desired outcomes prior to full scale deployment. For example, use deployment canary testing or one-box deployments.

   * <strong>Deploy using parallel environments</strong> - Implement changes onto parallel environments, and then transition over to the new environment. Maintain the prior environment until there is confirmation of successful deployment. Doing so minimizes recovery time by enabling rollback to the previous environment.

   * <strong>Deploy frequent, small, reversible changes</strong> - Use frequent, small, and reversible changes to reduce the scope of a change. This results in easier troubleshooting and faster remediation with the option to roll back a change.

   * <strong>Fully automate integration and deployment</strong> - Automate build, deployment, and testing of the workload. This reduces errors cause by manual processes and reduces the effort to deploy changes.

   * <strong>Automate testing and rollback</strong> - Automate testing of deployed environments to confirm desired outcomes. Automate rollback to previous known good state when outcomes are not achieved to minimize recovery time and reduce errors caused by manual processes.

7. How do you know that you are ready to support a workload?

   * <strong>Ensure personnel capability</strong> - Have a mechanism to validate that you have the appropriate number of trained personnel to provide support for operational needs. Train personnel and adjust personnel capacity as necessary to maintain effective support.

   * <strong>Ensure consistent review of operational readiness</strong> - Ensure you have a consistent review of your readiness to operate a workload. Reviews must include, at a minimum, the operational readiness of the teams and the workload, and security requirements. Implement review activities in code and trigger automated review in response to events where appropriate, to ensure consistency, speed of execution, and reduce errors caused by manual processes.

   * <strong>Use runbooks to perform procedures</strong> - Runbooks are documented procedures to achieve specific outcomes. Enable consistent and prompt responses to well-understood events by documenting procedures in runbooks. Implement runbooks as code and trigger the execution of runbooks in response to events where appropriate, to ensure consistency, speed responses, and reduce errors caused by manual processes.

   * <strong>Use playbooks to investigate issues</strong> - Enable consistent and prompt responses to issues that are not well understood, by documenting the investigation process in playbooks. Playbooks are the predefined steps performed to identify the factors contributing to a failure scenario. The results from any process step are used to determine the next steps to take until the issue is identified or escalated.

   * <strong>Make informed decisions to deploy systems and changes</strong> - Evaluate the capabilities of the team to support the workload and the workload's compliance with governance. Evaluate these against the benefits of deployment when determining whether to transition a system or change into production. Understand the benefits and risks to make informed decisions.

8. How do you understand the health of your workload?

   * <strong>Identify key performance indicators (KPIs)</strong> based on desired business outcomes (for example, order rate, customer retention rate, and profit versus operating expense) and customer outcomes (for example, customer satisfaction). Evaluate KPIs to determine workload success.

   * <strong>Define workload metrics</strong> - Define workload metrics to measure the achievement of KPIs (for example, abandoned shopping carts, orders placed, cost, price, and allocated workload expense). Define workload metrics to measure the health of the workload (for example, interface response time, error rate, requests made, requests completed, and utilization). Evaluate metrics to determine if the workload is achieving desired outcomes, and to understand the health of the workload.

   * <strong>Collect and analyze workload metrics</strong> - Perform regular proactive reviews of metrics to identify trends and determine where appropriate responses are needed.

   * <strong>Establish workload metrics baselines</strong> to provide expected values as the basis for comparison and identification of under and over performing components. Identify thresholds for improvement, investigation, and intervention.

   * <strong>Learn expected patterns of activity for workload</strong> - Establish patterns of workload activity to identify anomalous behavior so that you can respond appropriately if required.

   * <strong>Alert when workload outcomes are at risk</strong> - Raise an alert when workload outcomes are at risk so that you can respond appropriately if necessary.

   * <strong>Alert when workload anomalies are detected</strong> - Raise an alert when workload anomalies are detected so that you can respond appropriately if necessary.

   * <strong>Validate the achievement of outcomes and the effectiveness of KPIs and metrics</strong> - Create a business-level view of your workload operations to help you determine if you are satisfying needs and to identify areas that need improvement to reach business goals. Validate the effectiveness of KPIs and metrics and revise them if necessary.

9. How do you understand the health of your operations?

   * <strong>Identify key performance indicators
 (KPIs) based on desired business (for example, new features delivered) and customer outcomes (for example, customer support cases). Evaluate KPIs to determine operations success.

   * <strong>Define operations metrics</strong> to measure the achievement of KPIs (for example, successful deployments, and failed deployments). Define operations metrics to measure the health of operations activities (for example, mean time to detect an incident (MTTD), and mean time to recovery (MTTR) from an incident). Evaluate metrics to determine if operations are achieving desired outcomes, and to understand the health of your operations activities.

   * <strong>Collect and analyze operations metrics</strong> - Perform regular, proactive reviews of metrics to identify trends and determine where appropriate responses are needed.

   * <strong>Establish operations metrics baselines</strong> to provide expected values as the basis for comparison and identification of under and over performing operations activities.

   * <strong>Learn the expected patterns of activity for operations</strong> to identify anomalous activity so that you can respond appropriately if necessary.

   * <strong>Alert when operations outcomes are at risk</strong> - Raise an alert when operations outcomes are at risk so that you can respond appropriately if necessary.

   * <strong>Alert when operations anomalies are detected</strong> so that you can respond appropriately if necessary.

   * <strong>Validate the achievement of outcomes and the effectiveness of KPIs and metrics</strong> - Create a business-level view of your operations activities to help you determine if you are satisfying needs and to identify areas that need improvement to reach business goals. Validate the effectiveness of KPIs and metrics and revise them if necessary.

10. How do you manage workload and operations events?

   * <strong>Use processes for event, incident, and problem management</strong> - Have processes to address observed events, events that require intervention (incidents), and events that require intervention and either recur or cannot currently be resolved (problems). Use these processes to mitigate the impact of these events on the business and your customers by ensuring timely and appropriate responses.

   * <strong>Have a process per alert</strong> - Have a well-defined response (runbook or playbook), with a specifically identified owner, for any event for which you raise an alert. This ensures effective and prompt responses to operations events and prevents actionable events from being obscured by less valuable notifications.

   * <strong>Prioritize operational events based on business impact</strong> - Ensure that when multiple events require intervention, those that are most significant to the business are addressed first. For example, impacts can include loss of life or injury, financial loss, or damage to reputation or trust.

   * <strong>Define escalation paths</strong> - Define escalation paths in your runbooks and playbooks, including what triggers escalation, and procedures for escalation. Specifically identify owners for each action to ensure effective and prompt responses to operations events.

   * <strong>Enable push notifications</strong> - Communicate directly with your users (for example, with email or SMS) when the services they use are impacted, and again when the services return to normal operating conditions, to enable users to take appropriate action.

   * <strong>Communicate status through dashboards</strong> - Provide dashboards tailored to their target audiences (for example, internal technical teams, leadership, and customers) to communicate the current operating status of the business and provide metrics of interest.

   * <strong>Automate responses to events</strong> - Automate responses to events to reduce errors caused by manual processes, and to ensure prompt and consistent responses.

11. How do you evolve operations?

   * <strong>Have a process for continuous improvement</strong> - Regularly evaluate and prioritize opportunities for improvement to focus efforts where they can provide the greatest benefits.

   * <strong>Perform post-incident analysis</strong> - Review customer-impacting events, and identify the contributing factors and preventative actions. Use this information to develop mitigations to limit or prevent recurrence. Develop procedures for prompt and effective responses. Communicate contributing factors and corrective actions as appropriate, tailored to target audiences.

   * <strong>Implement feedback loops</strong> - Include feedback loops in your procedures and workloads to help you identify issues and areas that need improvement.

   * <strong>Perform Knowledge Management</strong> - Mechanisms exist for your team members to discover the information that they are looking for in a timely manner, access it, and identify that it’s current and complete. Mechanisms are present to identify needed content, content in need of refresh, and content that should be archived so that it’s no longer referenced.

   * <strong>Define drivers for improvement</strong> - Identify drivers for improvement to help you evaluate and prioritize opportunities.

   * <strong>Validate insights</strong> - Review your analysis results and responses with cross-functional teams and business owners. Use these reviews to establish common understanding, identify additional impacts, and determine courses of action. Adjust responses as appropriate.

   * <strong>Perform operations metrics reviews</strong> - Regularly perform retrospective analysis of operations metrics with cross-team participants from different areas of the business. Use these reviews to identify opportunities for improvement, potential courses of action, and to share lessons learned.

   * <strong>Document and share lessons learned</strong> from the execution of operations activities so that you can use them internally and across teams.

   * <strong>Allocate time to make improvements</strong> - Dedicate time and resources within your processes to make continuous incremental improvements possible.

<hr />

<a name="Perf"></a>

## Performance Efficiency

<img align="right" width="99" alt="PERF-gold-202x136.png" src="https://user-images.githubusercontent.com/300046/139144826-4862f00e-a754-4446-9e73-8f37248d03b6.png">
   * https://wa.aws.amazon.com/wat.pillar.performance.en.html
   * <a target="_blank" href="https://www.amazon.com/Performance-Efficiency-Pillar-Well-Architected-Whitepaper-ebook/dp/B08CFPXRBM/">51 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/performance-efficiency/">AWS Well-Architected Labs for Performance Efficiency</a>
   <br /><br />

Principles:

   * Selection – Auto Scaling for Compute, Amazon EBS and S3 for Storage, Amazon RDS and DynamoDB for Database, Route53, VPC, and AWS Direct Connect for Network
   * Review – AWS Blog and What’s New section of the website
   * Monitoring –  Amazon CloudWatch
   * Tradeoffs – Amazon Elasticache, Amazon CloudFront, AWS Snowball, Amazon RDS read replicas.
   <br /><br />

Best practices:

   * Autoscaling
   * Background jobs
   * Caching
   * CDN
   * Data partitioning
   <br /><br />

Design principles for Performance Efficiency:

   * Democratize advanced technologies
   * Go global in minutes
   * Use serverless architectures
   * Experiment more often
   * Mechanical sympathy
   <br /><br />

<hr />

1. How do you select the best performing architecture?

   * <strong>Understand the available services and resources</strong> - Learn about and understand the wide range of services and resources available in the cloud. Identify the relevant services and configuration options for your workload, and understand how to achieve optimal performance.

   * <strong>Define a process for architectural choices</strong> - Use internal experience and knowledge of the cloud, or external resources such as published use cases, relevant documentation, or whitepapers to define a process to choose resources and services. You should define a process that encourages experimentation and benchmarking with the services that could be used in your workload.

   * <strong>Factor cost requirements into decisions</strong> - Workloads often have cost requirements for operation. Use internal cost controls to select resource types and sizes based on predicted resource need.

   * <strong>Use policies or reference architectures</strong> - Maximize performance and efficiency by evaluating internal policies and existing reference architectures and using your analysis to select services and configurations for your workload.

   * <strong>Use guidance from your cloud provider or an appropriate partner</strong> - Use cloud company resources, such as solutions architects, professional services, or an appropriate partner to guide your decisions. These resources can help review and improve your architecture for optimal performance.

   * <strong>Benchmark existing workloads</strong> - Benchmark the performance of an existing workload to understand how it performs on the cloud. Use the data collected from benchmarks to drive architectural decisions.

   * <strong>Load test your workload</strong> - Deploy your latest workload architecture on the cloud using different resource types and sizes. Monitor the deployment to capture performance metrics that identify bottlenecks or excess capacity. Use this performance information to design or improve your architecture and resource selection.

2. How do you select your compute solution?

   * <strong>Evaluate the available compute options</strong> - Understand the performance characteristics of the compute-related options available to you. Know how instances, containers, and functions work, and what advantages, or disadvantages, they bring to your workload.

   * <strong>Understand the available compute configuration options</strong> - Understand how various options complement your workload, and which configuration options are best for your system. Examples of these options include instance family, sizes, features (GPU, I/O), function sizes, container instances, and single versus multi-tenancy.

   * <strong>Collect compute-related metrics</strong> - One of the best ways to understand how your compute systems are performing is to record and track the <strong>true utilization of various resources</strong>. This data can be used to make more accurate determinations about resource requirements.

   * <strong>Determine the required configuration by right-sizing</strong> - Analyze the various <strong>performance characteristics</strong> of your workload and how these characteristics relate to memory, network, and CPU usage. Use this data to choose resources that best match your workload's profile. For example, a memory-intensive workload, such as a database, could be served best by the r-family of instances. However, a bursting workload can benefit more from an elastic container system.

   * <strong>Use the available elasticity of resources</strong> - The cloud provides the flexibility to expand or reduce your resources dynamically through a variety of mechanisms to meet changes in demand. Combined with compute-related metrics, a workload can automatically respond to changes and utilize the optimal set of resources to achieve its goal.

   * <strong>Re-evaluate compute needs based on metrics</strong> - Use system-level metrics to identify the behavior and requirements of your workload over time. Evaluate your workload's needs by comparing the available resources with these requirements and make changes to your compute environment to best match your workload's profile. For example, over time a system might be observed to be more memory-intensive than initially thought, so moving to a different instance family or size could improve both performance and efficiency.

3. How do you select your storage solution?

   * <strong>Understand storage characteristics and requirements</strong> - Understand the different characteristics (for example, shareable, file size, cache size, access patterns, latency, throughput, and persistence of data) that are required to select the services that best fit your workload, such as object storage, block storage, file storage, or instance storage.

   * <strong>Evaluate available configuration options</strong> - Evaluate the various characteristics and configuration options and how they relate to storage. Understand where and how to use provisioned IOPS, SSDs, magnetic storage, object storage, archival storage, or ephemeral storage to optimize storage space and performance for your workload.

   * <strong>Make decisions based on access patterns and metrics</strong> - Choose storage systems based on your workload's access patterns and configure them by determining how the workload accesses data. Increase storage efficiency by choosing object storage over block storage. Configure the storage options you choose to match your data access patterns.

4. How do you select your database solution?

   * <strong>Understand data characteristics</strong> - Understand the different characteristics of data in your workload. Determine if the workload requires transactions, how it interacts with data, and what its performance demands are. Use this data to select the best performing database approach for your workload (for example, relational databases, NoSQL Key-value, document, wide column, graph, time series, or in-memory storage).

   * <strong>Evaluate the available options</strong> - Evaluate the services and storage options that are available as part of the selection process for your workload's storage mechanisms. Understand how, and when, to use a given service or system for data storage. Learn about available configuration options that can optimize database performance or efficiency, such as provisioned IOPs, memory and compute resources, and caching.

   * <strong>Collect and record database performance metrics</strong> - Use tools, libraries, and systems that record performance measurements related to database performance. For example, measure transactions per second, slow queries, or system latency introduced when accessing the database. Use this data to understand the performance of your database systems.

   * <strong>Choose data storage based on access patterns</strong> - Use the access patterns of the workload to decide which services and technologies to use. For example, utilize a relational database for workloads that require transactions, or a key-value store that provides higher throughput but is eventually consistent where applicable.

   * <strong>Optimize data storage based on access patterns and metrics</strong> - Use performance characteristics and access patterns that optimize how data is stored or queried to achieve the best possible performance. Measure how optimizations such as indexing, key distribution, data warehouse design, or caching strategies impact system performance or overall efficiency.

5. How do you configure your networking solution?

   * <strong>Understand how networking impacts performance</strong> - Analyze and understand how network-related decisions impact workload performance. For example, network latency often impacts the user experience, and using the wrong protocols can starve network capacity through excessive overhead.

   * <strong>Evaluate available networking features</strong> - Evaluate networking features in the cloud that may increase performance. Measure the impact of these features through testing, metrics, and analysis. For example, take advantage of network-level features that are available to reduce latency, network distance, or jitter.

   * <strong>Choose appropriately sized dedicated connectivity or VPN for hybrid workloads</strong> - When there is a requirement for on-premise communication, ensure that you have adequate bandwidth for workload performance. Based on bandwidth requirements, a single dedicated connection or a single VPN might not be enough, and you must enable traffic load balancing across multiple connections.

   * <strong>Leverage load-balancing and encryption offloading</strong> - Distribute traffic across multiple resources or services to allow your workload to take advantage of the elasticity that the cloud provides. You can also use load balancing for offloading encryption termination to improve performance and to manage and route traffic effectively.

   * <strong>Choose network protocols to improve performance</strong> - Make decisions about protocols for communication between systems and networks based on the impact to the workload’s performance.

   * <strong>Choose your workload’s location based on network requirements</strong> - 
Use the cloud location options available to reduce network latency or improve throughput. Utilize AWS Regions, Availability Zones, placement groups, and edge locations such as Outposts, Local Regions, and Wavelength, to reduce network latency or improve throughput.

   * <strong>Optimize network configuration based on metrics</strong> - Use collected and analyzed data to make informed decisions about optimizing your network configuration. Measure the impact of those changes and use the impact measurements to make future decisions.

6. How do you evolve your workload to take advantage of new releases?

   * <strong>Stay up-to-date on new resources and services</strong> - Evaluate ways to improve performance as new services, design patterns, and product offerings become available. Determine which of these could improve performance or increase the efficiency of the workload through ad-hoc evaluation, internal discussion, or external analysis.

   * <strong>Define a process to improve workload performance</strong> - Evaluate new services, design patterns, resource types, and configurations as they become available. For example, run existing performance tests on new instance offerings to determine their potential to improve your workload.

   * <strong>Evolve workload performance over time</strong> - As an organization, use the information gathered through the evaluation process to actively drive adoption of new services or resources when they become available.

7. How do you monitor your resources to ensure they are performing?

   * <strong>Record performance-related metrics</strong> - Use a monitoring and observability service to record performance-related metrics. For example, record database transactions, slow queries, I/O latency, HTTP request throughput, service latency, or other key data.

   * <strong>Analyze metrics when events or incidents occur</strong> - In response to (or during) an event or incident, use monitoring dashboards or reports to understand and diagnose the impact. These views provide insight into which portions of the workload are not performing as expected.

   * <strong>Establish Key Performance Indicators (KPIs) to measure workload performance</strong> - Identify the KPIs that indicate whether the workload is performing as intended. For example, an API-based workload might use overall response latency as an indication of overall performance, and an e-commerce site might choose to use the number of purchases as its KPI.

   * <strong>Use monitoring to generate alarm-based notifications</strong> - Using the performance-related key performance indicators (KPIs) that you defined, use a monitoring system that generates alarms automatically when these measurements are outside expected boundaries.

   * <strong>Review metrics at regular intervals</strong> - As routine maintenance, or in response to events or incidents, review which metrics are collected. Use these reviews to identify which metrics were key in addressing issues and which additional metrics, if they were being tracked, would help to identify, address, or prevent issues.

   * <strong>Monitor and alarm proactively</strong> - Use key performance indicators (KPIs), combined with monitoring and alerting systems, to proactively address performance-related issues. Use alarms to trigger automated actions to remediate issues where possible. Escalate the alarm to those able to respond if automated response is not possible. For example, you may have a system that can predict expected key performance indicators (KPI) values and alarm when they breach certain thresholds, or a tool that can automatically halt or roll back deployments if KPIs are outside of expected values.

8. How do you use tradeoffs to improve performance?

   * <strong>Understand the areas where performance is most critical</strong> - Understand and identify areas where increasing the performance of your workload will have a positive impact on efficiency or customer experience. For example, a website that has a large amount of customer interaction can benefit from using edge services to move content delivery closer to customers.

   * <strong>Learn about design patterns and services</strong> - Research and understand the various design patterns and services that help improve workload performance. As part of the analysis, identify what you could trade to achieve higher performance. For example, using a cache service can help to reduce the load placed on database systems; however, it requires some engineering to implement safe caching or possible introduction of eventual consistency in some areas.

   * <strong>Identify how tradeoffs impact customers and efficiency</strong> - When evaluating performance-related improvements, determine which choices will impact customers and workload efficiency. For example, if using a key-value data store increases system performance, it is important to evaluate how the eventually consistent nature of it will impact customers.

   * <strong>Measure the impact of performance improvements</strong> - As changes are made to improve performance, evaluate the collected metrics and data. Use this information to determine impact that the performance improvement had on the workload, the workload’s components, and your customers. This measurement helps you understand the improvements that result from the tradeoff, and helps you determine if any negative side-effects were introduced.

   * <strong>Use various performance-related strategies</strong> - Where applicable, utilize multiple strategies to improve performance. For example, using strategies like caching data to prevent excessive network or database calls, using read-replicas for database engines to improve read rates, sharding or compressing data where possible to reduce data volumes, and buffering and streaming of results as they are available to avoid blocking.

<hr />

<a name="Cost"></a>

## Cost Optimization

<img align="right" width="99" alt="well-architected-COST-gold-111x123" src="https://user-images.githubusercontent.com/300046/139145830-e653de04-a8db-4455-a16a-519fd18a46c3.png">
   * <a target="_blank" href="https://wa.aws.amazon.com/wat.pillar.costOptimization.en.html">Summary</a>
   * Cost Optimization Pillar <strong>whitepaper</strong> (June 2020) <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html">HTML</a>,<a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/wellarchitected-cost-optimization-pillar.pdf#evaluate-cost-when-selecting-services">PDF</a>, <a target="_blank" href="https://www.amazon.com/Cost-Optimization-Pillar-Well-Architected-Whitepaper-ebook/dp/B08CFZBVJK/" title="July 5, 2020">44 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/cost/">AWS Well-Architected Labs for Cost Optimization</a> by Nathan Besh

   * https://aws.amazon.com/blogs/aws-cloud-financial-management/
   * https://docs.microsoft.com/en-us/azure/architecture/framework/cost/optimize-checklist
   Microsft's cost optimization checklist
   <br /><br />

<hr />

Cost Optimization Abstract:

   * Practice Cloud Financial Management
   * Expenditure and Usage Awareness
   * Cost Effective Resources
   * Manage Demand and Supply Resources
   * Optimize Over Time
   <br /><br />

Questions:

1. How do you implement cloud financial management?

   <a target="_blank" href="https://wa.aws.amazon.com/wat.question.COST_1.en.html">
   Best practices and Improvement Plan items</a>:

   * <strong>Establish a cost optimization function</strong> - Create a team that is responsible for establishing and maintaining cost awareness across your organization. The team requires people from finance, technology, and business roles across the organization.

   * <strong>Establish a partnership between finance and technology</strong> - Involve finance and technology teams in cost and usage discussions at all stages of your cloud journey. Teams regularly meet and discuss topics such as organizational goals and targets, current state of cost and usage, and financial and accounting practices.

   * <strong>Establish cloud budgets and forecasts</strong> - Adjust existing organizational budgeting and forecasting processes to be compatible with the highly variable nature of cloud costs and usage. Processes must be dynamic using trend based or business driver-based algorithms, or a combination.

   * <strong>Implement cost awareness</strong> into new or existing processes that impact usage, and leverage existing processes for cost awareness. Implement cost awareness into employee training.

   * <strong>Report and notify on cost optimization</strong> - Configure AWS Budgets to provide notifications on cost and usage against targets. Have regular meetings to analyze this workload’s cost efficiency and to promote cost aware culture.

   * <strong>Monitor cost proactively</strong> - Implement tooling and dashboards to monitor cost proactively for the workload. Do not just look at costs and categories when you receive notifications. This helps to identify positive trends and promote them throughout your organization.

   * <strong>Keep up to date with new service releases</strong> - Consult regularly with experts or APN Partners to consider which services and features provide lower cost. Review AWS blogs and other information sources.

2. How do you govern usage?

   * <strong>Develop policies based on your organization requirements</strong> - Develop policies that define how resources are managed by your organization. Policies should cover cost aspects of resources and workloads, including creation, modification and decommission over the resource lifetime.

   * <strong>Implement both cost and usage goals for your workload</strong> - Goals provide direction to your organization on cost and usage, and targets provide measurable outcomes for your workloads.

   * <strong>Implement an account structure</strong> that maps to your organization. This assists in allocating and managing costs throughout your organization.

   * <strong>Implement groups and roles</strong> that align to your policies and control who can create, modify, or decommission instances and resources in each group. For example, implement development, test, and production groups. This applies to AWS services and third-party solutions.

   * <strong>Implement cost controls</strong> based on organization policies and defined groups and roles. These ensure that costs are only incurred as defined by organization requirements: for example, control access to regions or resource types with IAM policies.

   * <strong>Track project lifecycle</strong> - measure, and audit the lifecycle of projects, teams, and environments to avoid using and paying for unnecessary resources.

3. How do you monitor usage and cost?

   * <strong>Configure detailed information sources</strong> - Configure the AWS Cost and Usage Report, and Cost Explorer hourly granularity, to provide detailed cost and usage information. Configure your workload to have log entries for every delivered business outcome.

   * <strong>Identify cost attribution categories</strong> that could be used to allocate cost within your organization.

   * <strong>Establish organization metrics</strong> required for each workload. Example metrics of a workload are customer reports produced or web pages served to customers.

   * <strong>Configure billing and cost management tools</strong> - Configure AWS Cost Explorer and AWS Budgets inline with your organization policies.

   * <strong>Add organization information to cost and usage</strong> - Define a tagging schema based on organization, and workload attributes, and cost allocation categories. 

   * <strong>Implement tagging across all resources.</strong> - Use Cost Categories to group costs and usage according to organization attributes.

   * <strong>Allocate costs based on workload metrics</strong> - Allocate the workload’s costs by metrics or business outcomes to measure workload cost efficiency. Implement a process to analyze the AWS Cost and Usage Report with Amazon Athena, which can provide insight and charge back capability.

4. How do you <strong>decommission</strong> resources?

   * Plan ahead. Announce.
   * Use terraformer to collect Terraform files for all AWS services
   * Archive to AWS Glacier. Test retrieval.

   * <strong>Track resources over their life time</strong> - Define and implement a method to track resources and their associations with systems over their life time. You can use tagging to identify the workload or function of the resource.

   * <strong>Implement a decommissioning process</strong> - Implement a process to identify and decommission orphaned resources.

   * <strong>Decommission resources</strong> triggered by events such as periodic audits, or changes in usage. Decommissioning is typically performed periodically, and is manual or automated.

   * <strong>Decommission resources automatically</strong> - Design workloads to gracefully handle resource termination as you identify and decommission non-critical resources, resources that are not required, or resources with low utilization.


5. How do you evaluate when you select services?

   * <strong>Identify organization requirements for cost</strong> - Work with team members to define the balance between cost optimization and other pillars, such as performance and reliability, for this workload.

   * <strong>Analyze all components of this workload</strong> - Ensure every workload component is analyzed, regardless of current size or current costs. Review effort should reflect potential benefit, such as current and projected costs.

   * <strong>Perform a thorough analysis of each component</strong> - the overall cost of each component. Look at total cost of ownership by factoring in cost of operations and management, especially when using managed services. Review effort should reflect potential benefit: for example, time spent analyzing is proportional to component cost.

   * <strong>Select software with cost effective licensing</strong> - Open source software will eliminate software licensing costs, which can contribute significant costs to workloads. Where licensed software is required, avoid licenses bound to arbitrary attributes such as CPUs, look for licenses that are bound to output or outcomes. The cost of these licenses scales more closely to the benefit they provide.

   * <strong>Select components of this workload to optimize cost in line with organization priorities</strong> - Factor in cost when selecting all components. This includes using application level and managed services, such as Amazon RDS, Amazon DynamoDB, Amazon SNS, and Amazon SES to reduce overall organization cost. Use serverless and containers for compute, such as AWS Lambda, Amazon S3 for static websites, and Amazon ECS. 
   
   * <strong>Minimize license costs</strong> by using open source software, or software that does not have license fees: for example, Amazon Linux for compute workloads or migrate databases to Amazon Aurora.

   * <strong>Perform cost analysis for different usage over time</strong> - Workloads can change over time. Some services or features are more cost effective at different usage levels. By performing the analysis on each component over time and at projected usage, you ensure the workload remains cost effective over its lifetime..

6. How do you meet targets when you select resource type, size, and number?

   Ensure that you choose the appropriate resource size and number of resources for the task at hand. You minimize waste by selecting the most cost effective type, size, and number.

   * <strong>Perform cost modeling</strong> - Identify organization requirements and perform cost modeling of the workload and each of its components. Perform benchmark activities for the workload under different predicted loads and compare the costs. The modeling effort should reflect potential benefit: for example, time spent is proportional to component cost.

   * <strong>Select resource type, size, and number based on data</strong> about the workload and resource characteristics: for example, compute, memory, throughput, or write intensive. This selection is typically made using a previous version of the workload (such as an on-premises version), using documentation, or using other sources of information about the workload.

   * <strong>Select resource type, size, and number automatically based on metrics</strong> - Use metrics from the currently running workload to select the right size and type to optimize for cost. Appropriately provision throughput, sizing, and storage for services such as Amazon EC2, Amazon DynamoDB, Amazon EBS (PIOPS), Amazon RDS, Amazon EMR, and networking. This can be done with a feedback loop such as automatic scaling or by custom code in the workload.

7. How do you use pricing models to reduce cost?

   * <strong>Perform pricing model analysis</strong> - Analyze each component of the workload. Determine if the component and resources will be running for extended periods (for commitment discounts), or dynamic and short running (for spot or on-demand). Perform an analysis on the workload using the Recommendations feature in AWS Cost Explorer.

   * <strong>Implement regions based on cost</strong> - Resource pricing can be different in each region. Factoring in region cost ensures you pay the lowest overall price for this workload

   * <strong>Select third party agreements with cost efficient terms</strong> to ensure the cost of these services scales with the benefits they provide. Select agreements and pricing that scale when they provide additional benefits to your organization.

   * <strong>Implement pricing models for all components of this workload</strong> - Permanently running resources should utilize reserved capacity such as Savings Plans or reserved Instances. Short term capacity is configured to use Spot Instances, or Spot Fleet. On demand is only used for short-term workloads that cannot be interrupted and do not run long enough for reserved capacity, between 25% to 75% of the period, depending on the resource type.

   * <strong>Perform pricing model analysis at the master account level</strong> - Use Cost Explorer Savings Plans and Reserved Instance recommendations to perform regular analysis at the master account level for commitment discounts.

8. How do you plan for <strong>data transfer</strong> charges?

   * <strong>Perform data transfer modeling</strong> - Gather organization requirements and perform data transfer modeling of the workload and each of its components. This identifies the lowest cost point for its current data transfer requirements.

   * <strong>Select components to optimize data transfer cost</strong> - All components are selected, and architecture is designed to reduce data transfer costs. This includes using components such as WAN optimization and Multi-AZ configurations

   * <strong>Implement services to reduce data transfer costs</strong> - For example, use a CDN such as Amazon CloudFront to deliver content to end users, caching layers using Amazon ElastiCache, or using AWS Direct Connect instead of VPN for connectivity to AWS.

9. How do you manage demand, and supply resources?

   For a workload that has balanced spend and performance, ensure that everything you pay for is used and avoid significantly underutilizing instances. A skewed utilization metric in either direction has an adverse impact on your organization, in either operational costs (degraded perform

   * <strong>Perform an analysis on the workload demand</strong> over time. Ensure the analysis covers seasonal trends and accurately represents operating conditions over the full workload lifetime. Analysis effort should reflect potential benefit: for example, time spent is proportional to the workload cost.

   * <strong>Implement a buffer or throttle to manage demand</strong> - Buffering and throttling modify the demand on your workload, smoothing out any peaks. Implement throttling when your clients perform retries. Implement buffering to store the request and defer processing until a later time. Ensure your throttles and buffers are designed so clients receive a response in the required time.

   * <strong>Supply resources dynamically</strong> - Resources are provisioned in a planned manner. This can be demand-based, such as through automatic scaling, or time-based, where demand is predictable and resources are provided based on time. These methods result in the least amount of over or under provisioning.
   
   * Decommission resources, entire services, and systems no longer required.

9. How do you evaluate new services?

   As AWS releases new services and features, it’s a best practice to review your existing architectural decisions to ensure they continue to be the most cost effective.

   * <strong>Develop a workload review process</strong> that defines the criteria and process for workload review. The review effort should reflect potential benefit: for example, core workloads or workloads with a value of over 10% of the bill are reviewed quarterly, while workloads below 10% are reviewed annually.

   * <strong>Review and analyze this workload regularly</strong> - Existing workloads are regularly reviewed as per defined processes.


<hr />

Questions lead to these goals/focus areas (and the services used to get there):

   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/practice-cloud-financial-management.html">Practice Cloud Financial Management</a> -
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/expenditure-and-usage-awareness.html">Expenditure and usage awareness</a> –  AWS Cost Explorer, AWS Budgets
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/cost-effective-resources.html">Cost-Effective resources</a> – Cost Explorer, Amazon CloudWatch and Trusted Advisor, Amazon Aurora for RDS, AWS Direct Connect with Amazon CloudFront
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/manage-demand-and-supply-resources.html">Matchi supply and demand</a> – Auto Scaling
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/optimize-over-time.html">Optimize Over Time</a> – AWS News Blog and the What’s New section on the AWS website, AWS Trusted Advisor
   <br /><br />

   * Develop a cost model
   * Create budgets and alerts
   <br /><br />

AWS Design Principles for cost optimization:

* <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/practice-cloud-financial-management.html">Implement cloud financial management</a>: To achieve financial success and accelerate business value realization in the cloud, you must invest in Cloud Financial Management. Your organization must dedicate the necessary time and resources for building capability in this new domain of technology and usage management. Similar to your Security or Operations capability, you need to build capability through knowledge building, programs, resources, and processes to help you become a cost efficient organization.

   * Functional Ownership
   * Finance and Technology Partnership
   * Cloud Budgets and Forecasts
   * Cost-Aware Processes
   * Cost-Aware Culture
   * Quantify Business Value Delivered Through Cost Optimization
   <br /><br />

Others:

   * Adopt a consumption model</a>: Pay only for the computing resources you consume, and increase or decrease usage depending on business requirements. For example, development and test environments are typically only used for eight hours a day during the work week. You can stop these resources when they’re not in use for a potential cost savings of 75% (40 hours versus 168 hours).

   * <a target="_blank" href="">Measure overall efficiency</a>: Measure the business output of the workload and the costs associated with delivery. Use this data to understand the gains you make from increasing output, increasing functionality, and reducing cost.

   * <a target="_blank" href="">Stop spending money on undifferentiated "heavy lifting"</a> of data center operations like racking, stacking, and powering servers. AWS also removes the operational burden of managing operating systems and applications with managed services. This allows you to focus on your customers and business projects rather than on IT infrastructure.

   * <a target="_blank" href="">Analyze and attribute expenditure</a>: The cloud makes it easier to accurately identify the cost and usage of workloads, which then allows transparent attribution of IT costs to revenue streams and individual workload owners. This helps measure return on investment (ROI) and gives workload owners an opportunity to optimize their resources and reduce costs.

   * Use managed services to reduce cost of ownership

Tasks:

* <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/expenditure-and-usage-awareness.html">Expenditure and usage awareness</a>

   * Governance
   * Monitor Cost and Usage
   * Decommission Resources
   <br /><br />

* <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/expenditure-and-usage-awareness.html">Cost Effective Resources</a>

   * Evaluate Cost When Selecting Services
   * Select the Correct Resource Type, Size, and Number
   * Select the Best Pricing Model
   * Plan for Data Transfer
   <br /><br />

* <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/manage-demand-and-supply-resources.html">Manage Demand and Supply Resources</a>

   * Manage Demand – Throttling: API Gateway
   * Manage Demand – Buffer based: Amazon SQS (Kafka), Kinesis stream
   <br /><br />

   * Demand-based supply: ELB
   * Time-based supply: APIs and SDKs
   * Dynamic Supply: AWS Auto Scaling
   <br /><br />


<a target="_blank" href="https://cloudacademy.com/learning-paths/aws-cost-management-and-optimization-3567/">7 hr video course "AWS FinOps: Cost Management & Optimization"</a> by Oliver Gehrmann identified these strategies for cost optimization:

   * Right-sizing your instances
   * Increase elasticitiy
   * Pick the right pricing model
   * Match usage to Storage costs


<hr />


## References

https://tutorialsdojo.com/aws-well-architected-framework-five-pillars/

STAR: https://aws.amazon.com/blogs/aws-cloud-financial-management/cost-reporting-based-on-aws-organizations-account-id-tags/

<hr />

## More on cloud #

This is one of a series on cloud computing:

{% include cloud_links.html %}
