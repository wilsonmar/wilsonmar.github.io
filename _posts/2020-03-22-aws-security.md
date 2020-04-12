---
layout: post
title: "AWS Security"
excerpt: "How to learn using the AWS Certified Security - Specialty (SCS-C01) exam"
tags: [Security, DevOps]
date: "2020-03-22"
file: "aws-security"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here are my (incomplete) notes while I'm preparing for the
AWS Certified Security - Specialty (SCS-C01) exam:

1. https://aws.amazon.com/certification/certified-security-specialty/

   The exam costs $300 USD (50% off if you clear another certification).
   for 170 minutes (almost 3 hours without breaks). 
   Answer 75% of 1000 points for correct multiple choice, multiple answer questions.

   Practice exam: 40 USD.

1. The <a target="_blank" href="https://d1.awsstatic.com/training-and-certification/docs-security-spec/AWS-Certified-Security-Specialty_Exam-Guide_v1.6_FINAL.pdf">PDF</a>



## Exam Domains

1. Incident Response (Forensics) 12%
   1. Given an <a href="#AbuseNotice">AWS abuse notice</a>, evaluate the suspected compromised instance or exposed access keys.
   2. Verify that the <a href="#IncidentResponsePlan">Incident Response Plan</a> includes relevant AWS services.
   3. Evaluate the configuration of automated <strong>alerting</strong>, and execute possible remediation of security-related incidents and emerging issues.
   <br /><br />

2. Logging and Monitoring 20%
   1. Design and implement <strong>security monitoring</strong> and alerting.
   2. Troubleshoot security monitoring and alerting.
   3. Design and implement a <strong>logging</strong> solution.
   4. Troubleshoot logging solutions.
   <br /><br />

3. Infrastructure Security 26%
   1. Design <strong>edge security</strong> on AWS (NACLs, VPC Flow Logs)
   2. Design and implement a secure network infrastructure. 
   3. Troubleshoot a secure network infrastructure.
   4. Design and implement host-based security.
   <br /><br />

4. Identity and Access Management 20%
   1. Design and implement a scalable <strong>authorization and authentication system</strong> to access AWS resources.
   2. Troubleshoot an authorization and authentication system to access AWS resources.
   <br /><br />

5. Data Protection 22% 
   1. Design and implement <a href="#KeyManagement">key management</a> and use.
   2. Troubleshoot key management.
   3. Design and implement a data encryption solution for data at rest and <a href="#DataInTransit">data in transit</a>. 
   <br /><br />


## Topics (Abilities Validated by the Certification)

* Security controls for workloads on AWS. 
* Specialized data classifications and AWS data protection mechanisms
* Data encryption methods and AWS mechanisms to implement them
* Secure Internet protocols and AWS mechanisms to implement them
* AWS security services and features of services to provide a secure production environment

* Production deployment using AWS security services and features
* Tradeoff decisions with regard to cost, security, and deployment complexity given a set of application requirements
* Security operations and risk


The Future of Security:

* Static Code Analysis
* Vulnerability Management
* Compliance Checks
* Web Application Scanning
* Configuration Assessments

Golden AMI Pipeline of EC2 images at https://github.com/Qualys-Public

## AWS Virtual Classes

For those who can afford it, Amazon's live instructor-led classes:

$600 for 1 day <a target="_blank" href="https://www.aws.training/SessionSearch?pageNumber=1&courseId=44517">
AWS Security Essentials</a>

Twitter Feeds:
@awscloud
@awssecurityinfo
@awsidentity


## Video courses

<a target="_blank" href="https://www.youtube.com/playlist?list=PLhr1KZpdzuke2ncPH0DVp9PswBFY5dIl6">Videos of 2019</a>
#reInforce which take a dive deep into cloud security, IAM, and compliance.
Steve Schmidt, CISO of Amazon Web Services.

AWS seems optimistic that the George R. Brown Convention Center (1001 Avenida de Las Americas, Houston, TX, 77010) and Marriott Marquis Houston (1777 Walker Street, Houston, TX, 77010) will be open again on June 30 – July 1, 2020. $1,099 per person to speak directly with the AWS team.
See https://reinforce.awsevents.com/


<a target="_blank" href="https://app.pluralsight.com/paths/skill/aws-cloud-security">
Pluralsight's Security video courses</a>:

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-security-introduction">aws-security-introduction</a>
   
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/identity-access-management-aws-users">identity-access-management-aws-users</a> by Brian Eiler
   
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/securing-data-aws">securing-data-aws</a>

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/securing-aws-infrastructure">securing-aws-infrastructure</a>
   
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/securing-applications-aws">securing-applications-aws</a>
   
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-cloud-security-monitoring">aws-cloud-security-monitoring</a> 
   by Saravanan Dhandapani (@) Jun 26, 2019

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/securing-aws-networks/table-of-contents">Securing AWS Networks
   25 Mar 2020 by Saravanan Dhandapani 


   * <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-networking-deep-dive-vpc">aws-networking-deep-dive-vpc</a>

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-security-best-practices">aws-security-best-practices</a> by Joseph Lee Hunsaker

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/architecting-security-aws">Architecting for Security on AWSArchitecting for Security</a> Mar 08, 2020 By Ben Piper

ACloud.Guru has a Exam Simulator 

   * <a target="_blank" href="https://acloud.guru/course/aws-certified-security-specialty/learn/11050f3d-0362-ea01-f278-88368014a1cc/6b7857a0-5853-93af-2827-ba028b4021f1/watch">
   Acloud.guru exam</a>


LinuxAcademy.com 

CloudAcademy.com

Qwiklabs.com provides time (an hour at a time) on servers to perform their step-by-step instructions on specific topics.

   
## Practice Tests

About $200 USD is you get all of them.

* $41.30 USD (money back) <a target="_blank" href="https://www.youtube.com/watch?v=JvUGgVFeyRU">ad</a>
   https://www.vmexam.com/aws/scs-c01-aws-certified-security-specialty
   for 205+ questions for 2 months.

* The AWS Certification Quiz Show: <a target="_blank" href="https://www.youtube.com/watch?v=LTOFzqkf5EE&time=4m8s">
   CQ E13 (AWS Security - Specialty)</a> Nov 3, 2019 with Paul Hawkins (using ___)

* $25 https://www.braincert.com/course/21137-AWS-Certified-Security-Specialty-Practice-Exams
   provides 150 questions (3 practice tests - 50 questions each)

* $11 https://www.udemy.com/course/scs-c01-aws-certified-security-specialty-practice-tests/

* $40 https://www.whizlabs.com/aws-certified-security-specialty/

* $69 for 333 questions ($100 with software) at https://www.dumpskey.com/amazon/aws-security-specialty-braindumps
   or https://www.ebay.com/itm/Amazon-AWS-Certified-Security-Specialty-SCS-C01-Exam-Test-QA-SIM-PDF-Simulator-/253754800538
   or https://www.dumps4download.com/scs-c01-dumps.html

<hr />

## Security Principles


* Least privilege

* Handle keys with care
   * Asociate IAM Role to compute resource
   * Programmatic AssumeRole via STS SDK

* Encrypt "All the Things"
   * Require KMS Keys
   * Data at rest: Use only encrypted EBS volumes
   * S3 buckets
   * RDS or Aurora databases
   * Data in transit: S3 bucket config, CloudFront Cert. Manager

* Monitor continuously
   * CloudTrail Logs (cross region)
   * S3 Access Logging
   * VPC Flow Logs
   * Billing Logs

* Audit Regularly
   * Trusted Advisor
   * AWS Config
   * Custom Scripts

At a high level, within <a target="_blank" href="https://aws.amazon.com/security/">AWS Cloud Security at aws.amazon.com/security</a> is the mantra: 

- Prevent 
- Detect 
- Respond 
- Remediate

Type of control:

* Directive
* Preventive
* Detective
* Responsive

## Security Landscape

* Governance
* Management (CloudWatch, CloudTrail, Config)
* Protection
* Encryption (AWS CloudHSM, KMS)
* Detection (A Macie, AWS Firewall Manager, AWS Security Hub, AWS Guard Duty)

## AWS CAF (Cloud Adoption Frmework)

* Business
* People
* Governnce
* Platform
* Security
* Operations


## Lifecycle Actions

Sequence to develop a secure web application within AWS cloud:

1. Use accounts with MFA, not long term passwords.
2. SSH from key pairs generated.
2. Protect S3 CloudTrail and Billing buckets.
2. Don't create public access to S3 buckets.
2. Creaet "Admin" roles with limited privilege.
2. Leverage IAM roles for EC2.
2. Control traffic to EC2 using clear Security Groups.
2. Enable communication by users and between app and database with roles having minimal IAM policies necessary.
3. Setup apps with SSL certificates for HTTPS communication in transit.
4. Decrypt data using a key.
5. Setup read-only application and infrastructure logs [CloudTrail].
6. Setup API Gateway and firewalls to manage access.
7. Setup alerts
8. Watch trends in application and infrastructure logs periodically.
9. Setup backups using read and 
9. HA and Multi-region operation
9. Review billings monthly.




## Hands-on

GitHub?

Create a multi-account setup with web servers running on EC2 instances as well as web services running through API Gateway, Lambda and S3.

Use CloudFront, WAF, Shield. Install CloudWatch Logging agents on a few EC2 instances, consolidate logs in a central account, implement log file validation (extra credit — write a script to actually validate files based off events when new file is posted). 

Grant one account read and read/write access to another account’s S3 buckets using IAM roles.

Protect your EC2 instances with a homegrown proxy (install Squid or something), give them internet access and use NACLs and security groups to open a finite set of ports and restrict some IPs (use a VPN for testing),

Apply Service Control Policies through the organization (as examples, restrict regions or mandate S3 encryption. They can be found here: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_example-scps.html). Do this every day of the week before your exam and recite the script in your sleep the day of the exam :)

Do all of this in CloudFormation and Terraform

-- from Chiradeep Chhaya

Create AWS Security Group using CLI:

<pre>IP=10.10.10.10
CIDR=32
AWS_GROUP="xxxx"
AWS_SEC_GROUP=mycorp_mydiv_myproj_mydept_mychargecode_myversion
aws ec2 authorize-security-group-ingress --group-id "sg-$AWS_GROUP" \
   --ip-permissions FromPort=10,ToPort=23,IpProtocol=tcp,IpRanges="[{CidrIp=$IP/$CIDR}]"
</pre>

Hardening before creating AMI:
   * Exclude SSH authorized keys 
   * Remove and disable passwords for all user accounts
   * Securely delete all shell history and system log files containing sensitive data
   find /root/.*history /home/*/*.history -exec rm -f {} \;
   * Clear event logs


<hr />

## AWS Security information

Among <a target="_blank" href="https://aws.amazon.com/whitepapers">https://aws.amazon.com/whitepapers</a>

   * <a target="_blank" href="https://d1.awsstatic.com/whitepapers/Security/Intro_to_AWS_Security.pdf?did=wp_card&trk=wp_card">
   PDF: Introduction to AWS Security, January 2020</a>

   * <a target="_blank" href="https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf?did=wp_card&trk=wp_card">
   PDF: Amazon Web Services: Overview of Security Processes, March 2020</a>

   * https://d1.awsstatic.com/whitepapers/compliance/GDPR_Compliance_on_AWS.pdf?did=wp_card&trk=wp_card

Security and Compliance documentation

Compliance resources

Well architected Framework

Within <a target="_blank" href="https://www.aws.training/LearningLibrary?filters=classification%3A27&search=security&tab=digital_courses">Digital Training library</a> pops up a new window:

   * <a target="_blank" href="https://www.aws.training/Details/eLearning?id=41556">
   Cloud Audit Academy</a> covers differences in auditing the cloud versus on-premises.
   attestation

<a target="_blank" href="https://d0.awsstatic.com/whitepapers/KMS-Cryptographic-Details.pdf">
AWS KMS Cryptographic Details (details what happens behind the scenes with HSMs)

<a target="_blank" href="https://d1.awsstatic.com/whitepapers/Security/DDoS_White_Paper.pdf">
PDF: DDoS Mitigation whitepaper</a>

<a target="_blank" href="https://d1.awsstatic.com/whitepapers/compliance/Data_Residency_Whitepaper.pdf?did=wp_card&trk=wp_card">
Data Residency: AWS Policy Perspectives</a>


<a target="_blank" href="https://aws.amazon.com/security/security-learning/?whitepapers-main.sort-by=item.additionalFields.sortDate&whitepapers-main.sort-order=desc">AWS Cloud Security Learning</a>

<a target="_blank" href="https://d1.awsstatic.com/architecture-diagrams/ArchitectureDiagrams/scale-out-computing-aws-ra.pdf?did=wp_card&trk=wp_card">
Scale-Out Computing on AWS</a>

<a target="_blank" href="https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf?did=wp_card&trk=wp_card">
Building a Scalable and Secure Multi-VPC AWS Network Infrastructure</a>

<a target="_blank" href="https://d1.awsstatic.com/architecture-diagrams/ArchitectureDiagrams/gxp_compliance_automation_ra.pdf?did=wp_card&trk=wp_card">
GxP Compliance Automation</a>


<hr />

## Amazon/AWS Products

### Amazon Detective

new in 2020,
uses Machine Learning and statistical analysis on outputs from Guard Duty, 

### AWS Firewall Manager

etc. to simplify WAF admin <strong>across accounts</strong>.

### Security Hub

summarizes

### Amazon Inspector for EC2

Weekly Runs vulnerability assessments of AWS Networks and Hosts 
based on templates reaching targets.

1. Install agent using keypair on targets (instances):

   <pre>ssh -i awsgm.pem ec2-user@ec2-12-345-456-444.compute.-1.amazonaws.com
wget https://inspector-agent.amazonaws.com/linux/latest/install
sudo bash install
   </pre>

1. Run using service-linked Role, collecting for an hour.

Findings by severity.

Generate report, which include "CIS Benchmarks".


<a name="TrustedAdvisor"></a>

### AWS Trusted Advisor

5 categories for AWS accounts:

* Cost optimization (upgrade)
* Performance
* Fault Tolerance

* FREE Security (MFA, ports)
* FREE Service Limits (Auto Scaling)

<a target="_blank" href="https://www.qwiklabs.com/focuses/10448">
Qwiklabs.com "Auditing Your Security with AWS Trusted Advisor"</a>


### AWS Organizations

Account management service to consolidate accounts.


### Amazon Macie 

identify and classify PII (Personally Identifiable Information)
in events and sessions involving critical assets (in S3)m ,
by content type, using regex.

Issue risk alerts by location.

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=ff1e3525-246f-4536-b78e-fe0bbc0c2d9e">VIDEO</a>


### AWS Config

Get Started: Settings, Rules, Review.

The type of rules that can be setup and how to automatically remediate non-compliant rules utilizing lambda

Recorder
Snapshot of current configs.

Config items with history.

Config stream automatically updated (notifies SNS)

### VPC Flow Logs

Setup:
1. VPC
1. Your VPCs
1. Create Flow Log
1. Filter All
1. Destination Log Group
1. IAM Role 
1. Security Rules

<table border="1" cellpadding="4" cellspacing="0">
<tr><th>Log Format</th><th>Description</th></tr>
<tr valign="top"><td>2</td><td>Version of log</td></tr>
<tr valign="top"><td>123456789012</td><td>AWS Account</td></tr>
<tr valign="top"><td>eni-081b2cff388ebbea33</td><td>Network interface id</td></tr>
<tr valign="top"><td>194.26.39.111</td><td>Origin IP address</td></tr>
<tr valign="top"><td>172.31.81.72</td><td>Dest. IP address</td></tr>
<tr valign="top"><td>8080</td><td>Origin port</td></tr>
<tr valign="top"><td>3398</td><td>Dest. port</td></tr>
<tr valign="top"><td>6</td><td>Protocol</td></tr>
<tr valign="top"><td>1</td><td>Packets</td></tr>
<tr valign="top"><td>40</td><td>Bytes</td></tr>
<tr valign="top"><td>158251432</td><td>Epoch start</td></tr>
<tr valign="top"><td>158251812</td><td>Epoch end</td></tr>
<tr valign="top"><td>REJECT</td><td>Action</td></tr>
<tr valign="top"><td>OK</td><td>Logging status</td></tr>
</table>

### AWS Guard Duty

Identifies <strong>findings</strong> by using machine learning analyze <strong>logs</strong> from CloudTrail, VPC, DNS.

Enable for 30-day trial. Use sample files with Trusted IP Lists.
member accounts.


<a name="AbuseNotice""></a>

### Abuse Notice

TODO: sample here?


<a name="KeyManagement"></a>

### Key Management

<a target="_blank" href="https://d1.awsstatic.com/whitepapers/aws-kms-best-practices.pdf">
PDF: AWS Key Management Service Best Practices</a>

KMS options:
   * API commands (Encrypt, Decrypt, Recrypt)
   * CMK – AWS created vs Imported
   * How to enforce annual rotation of keys

## Macie


## difference between Cloudtrail vs Cloudwatch
SSL communication from on-premise to ec2 including how legacy applications communicate when changing from an ELB to ALB

## S3 access
Bucket ACL’s but know the difference between an ACL and Policy
Cross-Account Access (S3)

## EC2
How to regain access to an EC2 or change the key pair if they’ve been compromised

## How does AWS WAF and Shield work

When and why should you implement a proxy server

Network Access Control List (Stateless) vs Security Groups (SG’s are stateful)

## AWS Organizations -- including Service Control Policies and enforcements

https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_example-scps.html


Cloudfront OAI communicate to S3

Think static website or content

AWS Athena and viewing VPC flow logs

Query the VPC flow logs

VPC flow logs – How can you automate or make sure VPC flow logs are enabled (Hint: AWS Config & Lambda)

Troubleshooting
Why some instances are writing logs to Cloudwatch and others aren’t or they stopped after a period of time


<a name="DataInTransit"></a>

## Data in Transit

SSL for HTTPS

## CloudFront

Only HTTP, not UDP protocol.


<hr />




See <a target="_blank" href="https://wilsonmar.github.io/cyber-security/">my webpage on cyber-security</a>

read intro to AWS Security Processes</a>

   * Confidentiality (MFA)
   * Integrity (Cert Manager, IAM, Bucket policies)
   * Availability (Multi-AZ, Auto-scaling)
   <br /><br />


## IAM Policies

Three different types of IAM policies:
* AWS managed policies
* Customer (administrator) managed policies
* Inline policies

S3 Bucket policies


https://d1.awsstatic.com/training-and-certification/docs-security-spec/AWS_Certified_Security_Specialty_Exam_Guide_v1.5.pdf
Exam Blueprint

https://acloud.guru/course/aws-certified-developer-associate-june-2018/learn/9df1a869-ca43-95a9-4b47-70c611ac3cab/e6e9fcbf-7ff2-e9de-d3db-1404fd7adb5c/watch?backUrl=~2Fcourses&backUrl=%2Fcourses


https://aws.amazon.com/compliance/shared-responsibility-model/

AWS data centers: facilities, networking, hardware, software OS, 

* infrastructure services (EC2, EBS, VPC), 
* Container services (S3, MySQL RDS, EMR, Beanstalk), 
* Astracted services via APIs (SQS, SES, Glacier)

## Controls: Visibility (AWS Config)
 Auditability, 
 Controllability (KMS, HSM FIPS-140-2 compliance dedicated hw), 
 Agility (adapt to changes Cloud Formation, Elastic Beanstalk)

## Automation (OpsWorks, CodeDeploy)

https://d0.awsstatic.com/whitepapers/aws-security-whitepaper.pdf

https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_management_console_access.html
https://github.com/coinbase/assume-role

### Python

https://github.com/gene1wood/aws_assume_roles

### Terraform

https://www.youtube.com/watch?v=1JAx2npuprk&list=PLtK75qxsQaMIHQOaDd0Zl_jOuu1m3vcWO&index=1



## AWS Amazon Tech Talks

https://aws.amazon.com/events/online-tech-talks/on-demand/?ott-on-demand-all.sort-by=item.additionalFields.startDateTime&ott-on-demand-all.sort-order=desc

https://pages.awscloud.com/Remediating-Amazon-GuardDuty-and-AWS-Security-Hub-Findings_2019_0320-SID_OD.html?&trk=ep_card-el_a131L000005uKBhQAM&trkCampaign=NA-FY19-AWS-DIGMKT-WEBINAR-SERIES-March_2019_0320-SID&sc_channel=el&sc_campaign=pac_2018-2019_exlinks_ondemand_OTT_evergreen&sc_outcome=Product_Adoption_Campaigns&sc_geo=NAMER&sc_country=mult
Remediating Amazon GuardDuty and AWS Security Hub Findings


https://pages.awscloud.com/AWS-Transit-Gateway-Reference-Architectures-for-Many-Amazon-VPCs_2019_0811-NET_OD.html?&trk=ep_card-el_a131L0000057bPDQAY&trkCampaign=NA-FY19-AWS-DIGMKT-WEBINAR-SERIES-August_2019_0811-NET&sc_channel=el&sc_campaign=pac_2018-2019_exlinks_ondemand_OTT_evergreen&sc_outcome=Product_Adoption_Campaigns&sc_geo=NAMER&sc_country=mult
AWS Transit Gateway Reference Architectures for Many Amazon VPCs


## References




## Blog articles

* https://jayendrapatil.com/aws-certification-security-identity-services-cheat-sheet/
   Cheat Sheet

* https://www.netenrich.com/2019/01/aws-certified-security-specialty-exam-tips/

* https://medium.com/@cbchhaya/aws-certified-security-specialty-scs-c01-4b8a62d3c680
   suggests 4 months of preparation 
   using 4 account setup and used attached as well as detached accounts with AWS Organizations.