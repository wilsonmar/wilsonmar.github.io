---
layout: post
title: "Cyber Security"
excerpt: "Enterprise data risks and vulnerabilities and how to mitigate them with controls"
tags: [security]
date: "2021-01-05"
file: "cyber-security"
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

<a target="_blank" href="https://wilsonmar.github.io/cyber-security/">This page</a> contains my notes on resources for Cyber Security, which is a vast field. This single page is just for reference.

## Adobe Common Control Framework

Adobe <a target="_blank" href="https://adobe.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=VM6HD7">open-sourced</a> its <a target="_blank" href="https://blogs.adobe.com/security/2017/05/open-source-ccf.html">own Common Control Framework</a> which encompasses several security frameworks. Adobe's CCF covers <a href="#iso27002">ISO 27001/27002</a>, SOC, FedRAMP, PCI DSS, GLBA, FERPA, and others. <a target="_blank" href="https://www.adobe.com/security/compliance/ccf-download.html">Download</a> the <a target="_blank" href="https://www.adobe.com/pdf/Open_Source_CCF.pdf">pdf</a>. Adobe's control families is most comprehensive:

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

## HITRUST CSF

<a target="_blank" href="https://hitrustalliance.net/understanding-leveraging-csf/">
HITRUST Common Security Framework (CSF)</a> includes, harmonizes, and cross-references existing, globally recognized standards, regulations, and business requirements, including ISO, EU GDPR, <a href="#NIST">NIST</a>, and PCI.

## Amazon's Compliance

<a target="_blank" href="https://user-images.githubusercontent.com/300046/56856297-c8c31000-6914-11e9-874e-c0417d380dfd.png"><img width="926" alt="aws-compliance" src="https://user-images.githubusercontent.com/300046/56856297-c8c31000-6914-11e9-874e-c0417d380dfd.png"></a>

<a target="_blank" href="https://aws.amazon.com/compliance/programs/">Compliance Programs at<br />https://aws.amazon.com/compliance/programs</a> covers security requirements in Canada, Asia Pacific, and Europe.

<a target="_blank" href="https://aws.amazon.com/compliance/">Amazon Compliance at<br /></a>https://aws.amazon.com/compliance</a>


<a name="MCRA"></a>

## Microsoft Cybersecurity Reference Architecture

<a target="_blank" href="https://www.youtube.com/watch?v=emdGpNwfWHY">VIDEO Distilling</a>
<a target="_blank" href="https://aka.ms/MCRA/">Infographic in PowerPoint: Microsoft Azure Cybersecurity Reference Architecture</a>


<a name="CIS"></a>

## Center for Internet Security (CIS)

The Center for Internet Security (CIS) is a community of users, vendors and subject matter experts working together through consensus collaboration to deliver a framework that provides a starting point for organizations interested in implementing ...

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

<hr />

<a name="iso27002"></a>

## ISO 27002 Controls (Counter-measures)

<a target="_blank" href="https://iso27001security.com/">https://iso27001security.com</a><br />
ISO Code of practice for information security controls defines 114 controls grouped into 14 categories.
REMEMBER:

   * ISO/IEC 27005 addresses risk management
   * ISO/IEC 27007 addresses auditing
   * ISO/IEC 27011 addresses telecommunications organization guidelines
   * ISO/IEC 27012 addresses controls (counter-measures)
   * ISO/IEC 27015 addresses financial organization guidelines
   * ISO/IEC 27033 addresses network security
   * ISO/IEC 27034 addresses application security
   * ISO/IEC 27037 addresses digital evidence guidelines
   * ISO/IEC 27799 addresses health organization guidelines
   <br /><br />

ISO/IEC 15288:2015  four categories of processes:
   1. Agreement processes, including acquisition and supply
   2. Organizational project-enabling processes, including infrastructure management, quality management, and knowledge management
   3. Technical management processes, including project planning, risk management, configuration management, and quality assurance
   4. Technical processes, including system requirements definition, system analysis, implementation, integration, operation, maintenance, and disposal
   <br /><br />

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

4. Logging and Auditing
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

<strong>AF. Software Application Inventory</strong>

   * 2.1	Maintain Inventory of Authorized Software
   * 2.2	Ensure Software is Supported by Vendor
   * 2.3	Utilize Software Inventory Tools
   * 2.4	Track Software Inventory Information
   * 2.5	Integrate Software and Hardware Asset Inventories
   * 2.6	Address unapproved software

<strong>AG. Software Vulnerability Scanning Tool</strong>

   * 18.7	Apply Static and Dynamic Code Analysis Tools
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
   * 17.6	Train Workforce on Identifying Social Engineering Attacks
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


## FedRAMP/FISMA compliance

In the US federal government, the Federal Information Security Management Act of 2002 (FISMA) law is implemented according to National Institute of Standards and Technology (NIST) Special Publication (SP) <a target="_blank" href="http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r4.pdf">800-53 [pdf]</a>. The security controls development framework contains 157 controls within 19 control families. Each control is designated as low, moderate, or high impact. 

![cybersecurity-NIST-Functions-382x390-19166](https://user-images.githubusercontent.com/300046/55505840-3f6c3680-5611-11e9-811d-4411e01c5afd.jpg)
800-53

SP 800-30 steps for a risk assessment: 
   1. Identify the assets and their value. 
   2. Identify threats. 
   3. Identify vulnerabilities. 
   4. Determine likelihood. 
   5. Identify impact. 
   6. Determine risk as a combination of likelihood and impact.
   <br /><br />

SP 800-34 
   * A CIP (critical infrastructure protection) plan is a set of policies and procedures that serve to protect and recover assets and mitigate risks and vulnerabilities.
   * An OEP (occupant emergency plan) outlines first-response procedures for occupants of a facility in the event of a threat or incident to the health and safety of personnel, the environment, or property.
   * An ISCP (information system contingency plan) provides established procedures for the assessment and recovery of a system following a system disruption.
   * A COOP (Continuity Of Operations) plan focuses on restoring an organization’s mission-essential functions (MEFs) at an alternate site and performing those functions for up to 30 days before returning to normal operations.
   <br /><br />

NIST also publishes SP1800 (Cybersecurity practice guides) and the broader SP 500 (Information Technology).

### FedRAMP

In 2011 a "cloud first" policy was defined in the Federal Risk and Authorization Program (FedRAMP) <a target="_blank" href="https://cio.gov/wp-content/uploads/downloads/2012/09/Federal-Cloud-Computing-Strategy.pdf">[pdf]</a> where federal agencies make use of cloud service providers (CSPs) given authority to operate (ATO) after receiving system authorization from an independent security assessment conducted by a 3PAO (third-party Assessor). 

A <strong>System Security Plan (SSP)</strong> is required by the
OMB Security Authorization of Information Systems in Cloud Computing
<a target="_blank" href="https://cio.gov/wp-content/uploads/2012/09/fedrampmemo.pdf">[pdf]</a>. 

Each SSP authorization package can be in a machine-readable (JSON or XML format) <a target="_blank" href="https://github.com/usnistgov/OSCAL/">https://github.com/usnistgov/OSCAL</a>Open Security Controls Assessment Language (OSCAL)</a> based on <a target="_blank" href="https://www.fedramp.gov/using-the-fedramp-oscal-resources-and-templates/">templates</a> created based on <a target="_blank" href="https://github.com/GSA/fedramp-automation/blob/master/documents/FedRAMP_OSCAL_Registry.xlsx">this Excel xlsx file</a> which defines fields (extensions), identifiers, and values in the <a target="_blank" href="https://github.com/GSA/fedramp-automation">FedRAMP Registry at https://github.com/GSA/fedramp-automation</a>. The template by FedRAMP PMO and <a target="_blank" href="https://www.nist.gov/oscal/">NIST</a>.

<a target="_blank" href="https://www.coalfire.com/Documents/Whitepapers/FISMA-vs-FedRAMP_Controls-authorizations">Coalfire</a>
came up with this count of controls:
![cyber-fisma-fedramp-counts-683x586-55388](https://user-images.githubusercontent.com/300046/55948774-75f81180-5c0e-11e9-8596-1dd0194c6dbd.jpg)

FedRAMP added 144 control to 728 in FISMA, for a total of 872 controls.


## DISA SIST & SRG

<a target="_blank" href="https://iase.disa.mil/stigs/Pages/index.aspx"> Security Technical Implementation Guides (STIGs)</a>
<a target="_blank" href="https://en.wikipedia.org/wiki/Security_Technical_Implementation_Guide">[Wiki]</a> defines (over 425) <strong>"lock down" configuration settings</strong> to minimize vulnerabilities to malicious attack of DOD IA (Information Assurance) and IA-enabled devices/systems, both <a target="_blank" href="https://iase.disa.mil/stigs/app-security/web-servers/Pages/index.aspx">Windows and Apache Unix</a>. <a target="_blank" href="
https://iase.disa.mil/cloud_security/Pages/index.aspx">
Cloud Computing Security Requirements Guide (CC SRG)</a> are also defined by DISA (Defense Information Systems Agency) which provides a Viewer to scan for them.

<a target="_blank" href="https://csrc.nist.gov/Projects/scap-validation-program">SCAP (ecurity Content Automation Protocol)</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Security_Content_Automation_Protocol">[Wikipedia]</a> checklists enable automated vulnerability management, measurement, and policy compliance evaluation of systems deployed in an organization.
See the <a target="_blank" href="https://www.youtube.com/watch?v=-h_lj5sWo4A">2015 viewer video</a>.

See https://www.open-scap.org/
for tools.


## Source of vulnerabilities

<a target="_blank" href="https://www.cvedetails.com/top-50-products.php?year=0">Top 50 Products By Total Number Of "Distinct" Vulnerabilities - for all time</a> <a target="_blank" href="https://www.stigviewer.com/stigs">include</a> product versions now obsolete.

## International 

International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC) 27018 code of practice covers the processing of personal information by cloud service providers.

MTCS (Multi-Tier Cloud Security) Singapore 584:2013 Certification covers  Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).


## US Laws

* Jurisdiction is the power or right of a legal or political agency to exercise its authority over a person, subject matter, or territory. Jurisdiction can be affected when the organization that owns the data is in one country while the data itself is stored in a facility in another country
* Standing
* Jurisprudence
* Authority
<br /><br />

QUESTION: How does CIS relate to ITIL?

Criminal Justice Information Services (CJIS) Security Policy compliance for any US state or local agency that wants to access the FBI’s CJIS database.

As of May 25, 2018, a European privacy law — GDPR (General Data Protection Regulation — imposes new rules on companies, government agencies, non-profits, and other organizations that offer goods and services to people in the European Union (EU), or that collect and analyze data tied to EU residents. But the GDPR applies no matter where you are located.

UK Government G-Cloud. The UK Government G-Cloud is a cloud computing certification for services used by government entities in the United Kingdom.

Health Insurance Portability and Accountability Act (HIPAA) is a US federal law that regulates patient Protected Health Information (PHI). A Business Associate Agreement (BAA) stipulates adherence to security and privacy provisions in HIPAA and the Health Information Technology for Economic and Clinical Health Act (HITECH) Act. 

Service Organization Controls (SOC) 1, 2, and 3 report is a framework by independent third-party auditors covering controls for data security, availability, processing integrity, and confidentiality as applicable to in-scope trust principles for each service.

   * The Federal Privacy Act of 1974 ensures that only authorized persons should have access to personal information and that personal records should be up to date and accurate. 
   * The Federal Intelligence Surveillance Act (FISA) of 1978 affects law enforcement and intelligence agencies and gives procedures for the physical and electronic surveillance and collection of “foreign intelligence information” between “foreign powers” and “agents of foreign powers.”

   * The Computer Fraud and Abuse Act (CFAA) of 1986 affects any entities that may engage in hacking of “protected computers” as defined in the Act. It requires the creation of computer security plans and the appropriate training of system users or owners where the systems house sensitive information. was the first law written to require a formal computer security plan. 
   * The Electronic Communications Privacy Act (ECPA) of 1986 extended government restrictions on wiretaps from telephone calls to include transmissions of electronic data by computer.

   * The United States Federal Sentencing Guidelines of 1991 affects individuals and organizations convicted of felonies and serious (Class A) misdemeanors. It provides guidelines to prevent sentencing disparities that exist across the United States.
   * The US Economic Espionage Act of 1996 provides a framework to deal with espionage attacks on corporations. According to the Act, all the assets of the organization, whether substantial or not, require protection. The Economic Espionage Act of 1996 affects companies that have trade secrets and any individuals who plan to use encryption technology for criminal activities. 
   * The Communications Assistance for Law Enforcement Act (CALEA) of 1994 requires telecommunications carriers and manufacturers of telecommunications equipment to modify and design their equipment, facilities, and services to ensure that they have built-in surveillance capabilities. 
   * The Gramm-Leach-Bliley Act (GLBA) of 1999 affects all financial institutions, including banks, loan companies, insurance companies, investment companies, and credit card providers. 

   * The Personal Information Protection and Electronic Documents Act (PIPEDA) affects private sector organizations that collect, use, and disclose personal information in the course of commercial business in Canada. 
   * The Federal Information Security Management Act (FISMA) of 2002 affects every federal agency. It requires the federal agencies to develop, document, and implement an agency-wide information security program.
   * Basel II affects financial institutions and addresses minimum capital requirements, supervisory review, and market discipline. 

   * The Health Insurance Portability and Accountability Act (HIPAA) prevents medical organizations (including health insurance companies, hospitals, and doctors’ offices) from sharing patient healthcare information without consent. 
   * The Sarbanes-Oxley (SOX) Act provides guidelines on accurately reporting corporate financial data to shareholders.
   * The General Data Protection Regulation (GDPR) states that the data gathered for private individuals should be used only for the purpose for which it is collected.
   * The European Union Principles on Privacy state that the data gathered for private individuals should be used only for the purpose for which it is collected. 
   * The United States Federal Sentencing Guidelines of 1991 affects individuals and organizations convicted of felonies and serious (Class A) misdemeanors. It provides guidelines to prevent sentencing disparities that exist across the United States. 
   * The Communications Assistance for Law Enforcement Act (CALEA) of 1994 requires telecommunications carriers and manufacturers of telecommunications equipment to modify and design their equipment, facilities, and services to ensure that they have built-in surveillance capabilities. 
   * The Personal Information Protection and Electronic Documents Act (PIPEDA) affects private sector organizations that collect, use, and disclose personal information in the course of commercial business in Canada. 
   * The Federal Information Security Management Act (FISMA) of 2002 affects every federal agency. It requires the federal agencies to develop, document, and implement an agency-wide information security program. 
   * The Payment Card Industry Data Security Standard (PCI DSS) affects any organizations that handle cardholder information for the major credit card companies.
   <br /><br />

### FIPS

To comply with federal standards, organizations 
   1. determine the security category of their information system in accordance with FIPS (Federal Information Processing Standard) Publication 199, Standards for Security Categorization of Federal Information and Information Systems
   2. derive the information system impact level from the security category in accordance with FIPS Publication 200
   3. apply the appropriately tailored set of baseline security controls in NIST Special Publication 800-53 Rev. 4.
   <br /><br />


<a name="NIST"></a>

### NIST

The Functions and Categories within the NIST Cybersecurity (Program) Framework (CSF) maps NIST 800-53 to CIS Controls:

![cybersecurity-nist-342x275](https://user-images.githubusercontent.com/300046/55505643-c8cf3900-5610-11e9-8f79-3e7bec5cfe7c.jpg)

<a target="_blank" href="https://www.nist.gov/itl">
NIST Information Technology Laboratory</a> emails out <a target="_blank" href="https://public.govdelivery.com/accounts/USNIST/subscriber/new?qsp=USNIST_3">bulletins about vulnerabilities</a>

National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) is a voluntary Framework that consists of standards, guidelines, and best practices to manage cybersecurity-related risks. Through a validated assessment performed by the Health Information Trust Alliance (HITRUST), a leading security and privacy standards development and accreditation organization, Office 365 is certified to the objectives specified in the NIST CSF.

NIST SP 800-39 provides guidance for an integrated, organization-wide program for managing information security risk to organizational operations (i.e., mission, functions, image, and reputation), organizational assets, individuals, other organizations, and the nation resulting from the operation and use of federal information systems.

Among <a target="_blank" href="https://csrc.nist.gov/publications/sp800">The many NIST SP 800 documents</a>:
   * <a target="_blank" href="https://csrc.nist.gov/publications/detail/sp/800-60/vol-1-rev-1/final">
   NIST SP 800-60</a> provides guidelines for mapping types of information and information systems to security categories.
   * SP 800-183 describes the Internet of Things (IoT).
   <br /><br />

NIST SP 800-53 is within section 4 SECURITY CONTROL SELECTION of 
<a target="_blank" href="https://csrc.nist.gov/publications/fips">https://csrc.nist.gov/publications/fips</a> NISP FIPS-200 and 201-3 catagorizes by impact.

NIST SP 800-57 Key management lifecycle:
   1. Pre-operational phase
   2. Operational phase
   3. Post-operational phase
   4. Destroyed phase
   <br /><br />

NIST SP 800-92 log management infrastructure
* General functions (log parsing, event filtering, and event aggregation)
* Storage (log rotation, log archival, log reduction, log conversion, log normalization, log file integrity checking)
* Log analysis (event correlation, log viewing, log reporting)
* Log disposal (log clearing)
<br /><br />

NIST SP 800-137 ISCM (information security continuous monitoring) plan 
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

SP 800-139 Functions to implement the appropriate safeguards to ensure delivery of critical infrastructure services
   * Identify (ID): Develop the organizational understanding to manage cybersecurity risk to systems, assets, data, and capabilities.
   * Protect (PR): Develop and implement the appropriate safeguards to ensure delivery of critical infrastructure services.
   * Detect (DE): Develop and implement the appropriate activities to identify the occurrence of a cybersecurity event.
   * Respond (RS): Develop and implement the appropriate activities to take action regarding a detected cybersecurity event.
   * Recover (RC): Develop and implement the appropriate activities to maintain plans for resilience and to restore any capabilities or services that were impaired due to a cybersecurity event.
   <br /><br />

SP 800-139 framework implementation maturity tiers:
   * Tier 1: Partial means that risk management practices are not formalized, and risk is managed in an ad hoc and sometimes reactive manner.
   * Tier 2: Risk Informed means that risk management practices are approved by management but may not be established as organizational-wide policy.
   * Tier 3: Repeatable means that the organization’s risk management practices are formally approved and expressed as policy.
   * Tier 4: Adaptive means that the organization adapts its cybersecurity practices based on lessons learned and predictive indicators derived from previous and current cybersecurity activities through a process of continuous improvement.
   <br /><br />

NIST SP 800-160 defines the systems security engineering framework. It defines, bounds, and focuses the systems security engineering activities, both technical and nontechnical, toward the achievement of stakeholder security objectives and presents a coherent, well-formed, evidence-based case that those objectives have been achieved.
Contexts within which security activities are conducted according to NIST SP 800-160?
   * Problem context
   * Solution context
   * Trustworthiness context
   <br /><br />

NIST SP 800-154 is a draft publication for data-centric system threat modeling. It includes these steps:
   1. Identify and characterize the system and data of interest.
   2. Identify and select the attack vectors to be included in the model.
   3. Characterize the security controls for mitigating the attack vectors.
   4. Analyze the threat model.
   <br /><br />

NIST SP 800-66 provides guidelines for implementing the HIPAA Security Rule, which requires securing protected health information (PHI), also referred to as EPHI or ePHI (electronic protected health information). PHI is any individually identifiable health information.

NIST SP 800-122 gives guidelines on protecting the confidentiality of PII (Personally identifiable information) is considered information that should be classified and protected. PII are assigned confidentiality impact levels based on
FIPS 199 designations: 
   * LOW if the loss of <a href="#CIA">confidentiality, integrity, or availability</a> could be expected to have a limited adverse effect on organizational operations, organizational assets, or individuals.
   * MODERATE if the loss of <a href="#CIA">CIA</a> could be expected to have a serious adverse effect on organizational operations, organizational assets, or individuals.
   * HIGH if the loss of <a href="#CIA">CIA</a> could be expected to have a severe or catastrophic adverse effect on organizational operations, organizational assets, or individuals.
   <br /><br />

U.S. federal agencies use the SBU (Sensitive But Unclassified) designation for information is not secret but still needs to be protected and requires strict controls over its distribution.

"Do not appropriate other people’s intellectual output" is one of the Computer Ethics Institute (CEI) Ten Commandments of Computer Ethics, but is not part of the(ISC)2 code of ethics preamble.

Components of configuration management:
   * configuration control
   * configuration status accounting
   * configuration auditing
   <br /><br />

## Security Testing

OSSTMM (Open Source Security Testing Methodology Manual) published by Pete Herzog of ISECOM (Institute for Security and Open Methodologies) covers the different kinds of security tests of physical, human (processes), and communication systems. It does not cover any specific tools that can be used to perform these tests. It defines five risk categorizations: vulnerability, weakness, concern, exposure, and anomaly. Once a risk is detected and verified, it is assigned a risk assessment value.

COSCO (Committee of Sponsoring Organizations) broadly defines ERM (Enterprise Risk Management) as “the culture, capabilities and practices integrated with strategy-setting and its execution, that organizations rely on to manage risk in creating, preserving and realizing value.” The ERM framework is presented in the form of a three-dimensional matrix. The matrix includes eight components of enterprise risk management and four categories of objectives across the top: strategic, operations, reporting, and compliance. 

The organization, its divisions, and business units are depicted as the third dimension of the matrix for applying the framework.

Rules of evidence:
   * Be authentic.
   * Be accurate.
   * Be complete.
   * Be convincing.
   * Be admissible.

## RFCs

RFC's https://tools.ietf.org/html/rfc1087
   * RFC 1087 outlines concepts pertaining to what the IAB considers unethical and unacceptable. It considers destroying the integrity of computer-based information unethical.
   * RFC 2010 Operational Criteria for Root Name Servers
   * RFC 1589 A Kernel Model for Precision Timekeeping
   * RFC 1150 F.Y.I. on F.Y.I.
   <br /><br />


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


## Glossary

<a target="_blank" href="https://quizlet.com/222277746/devsecops-acronyms-and-buzzwords-flash-cards/">
My Quizlet of Cyber Security Aconyms</a>

A vulnerability is an absence or a weakness of a countermeasure that is in place.

An exposure is an instance of being subjected or exposed to losses from a threat.

A trigger is an event that indicates that a risk has occurred or is about to occur. 

Quantitative risk analysis: Asset Value (AV) x Exposure Factor (EF) = Single Loss Expectancy (SLE).
<a target="_blank" href="https://www.youtube.com/watch?v=mpSdrr7QzZE">VIDEO</a> 

Annualized Rate of Occurrence (ARO) X Single Loss Expectancy (SLE) = Annual Loss Expectancy (ALE).

Cost/benefit of implementing a particular safeguard, where ALE is the annual loss expectancy: 
(ALE before safeguard) – (ALE after safeguard) – (annual cost of safeguard)

Residual risk = total risk – countermeasures.

<a name="CIA">CIA</a>
Tenents: CIA+IAAA
   * Confidentiality vs. Disclosure (IPSec encryption in transit, social engineering)
   * Integrity vs. Alteration (shared among authorized persons or organizations)
   * Availability vs. Destruction (RAID-5, DDoS)

   * Accountability (auditing)

<a name="RAID"></a>
RAID (Redundant Array of Independent Disks): parity information is used to regenerate the data in the case of a single drive failure. 
   * RAID-0 Striping of data parts over 2 drives
   * RAID-1 Mirroring of 2 drives
   * RAID-10 Mirroring+Striping
   * RAID-2 stripes the data across all drives at the bit level rather than the byte level.
   * RAID-3 parity information is written to a single dedicated drive. Data is written across all drives like striping.
   * RAID-5 Parity information is written across all drives like striping as well
   * RAID-6 Parity of 2 
   * RAID-7 enables the drive array to continue to operate if any disk or any path to any disk fails. The multiple disks in the array operate as a single virtual disk.
   <br /><br />

### Threats

<a target="_blank" href="https://www.hytrust.com/uploads/2015/08/HyTrust-Infographic-Cloud-Kill-Chain.pdf">PDF</a>: <a target="_blank" href="https://www.youtube.com/watch?v=emdGpNwfWHY&t=17m24s">VIDEO</a>: Cyber Kill Chain<br /><img width="1570" alt="cyber-kill-chain-lockheed-3144x1246" src="https://user-images.githubusercontent.com/300046/104851985-729abb00-58b5-11eb-9713-84470116acf9.png"></a>

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

Microsoft Threat Model Tool - dataflow diagrams that reflect potential threats. STRIDE and DREAD
Developed by Microsoft, STRIDE is a memonic for classification of threats in an application:
   * Spoofing of user identity
   * Tampering
   * Repudiation
   * Information disclosure (privacy breach or data leak)
   * Denial of service (DoS)
   * Elevation of privilege
   <br /><br />
   
Attacks: - incidents that violate an organization’s security or privacy policies:
   * A smurf attack uses a type of ping packet called an ICMP ECHO REQUEST. 
   * In a side-channel attack, the attacker gains information about the encryption algorithms from the cryptosystem that is implemented in the network.
   * Evesdropping (traffic analysis). Countermeasures are sending noise, padding messages, mix non-info in data.
   * In a known plaintext attack, an attacker uses the plaintext and ciphertext versions of a message to discover the key used.
   * In an analytic attack, an attacker uses known structural weaknesses or flaws to determine the algorithm used.
   * In a replay attack, an attacker monitors the traffic stream in a network and maliciously repeats or delays the transmission of valid data over the network.
   * A <strong>race condition</strong> causes processes to execute in a different order to affect the result.
   * A Time-Of-Check/Time-Of-Use (TOC/TOU) attack, also called <strong>asynchronous attack</strong>, interrupts a task and changes something to affect the result while the tasks occur in the correct order. A countermeasure is making critical sets of instructions atomic.
   * <strong>Emanations capturing</strong> is eavesdropping on wave frequencies to capture traffic.
   * A maintenance hook is a backdoor in an application that is designed by the application developers to perform maintenance tasks, which can enable code to be executed without the usual security checks. A countermeasure for maintenance hooks is code reviews. 
   * A buffer overflow transmits too much data to an application or operating system. A countermeasure for buffer overflows is input validation. 
   * A <strong>covert storage channel attack</strong> is when one process writes data to a hard drive and another process reads it. In this attack a higher-level subject writes data to a storage area and a lower-level subject reads it.
   * REMEMBER: A <strong>land attack</strong> sends a spoofed TCP SYN packet with the target host’s IP address and an open port as both the source and the destination to the target host on an open port.
   * Network address hijacking reroutes data traffic from a network device to a personal computer. 
   * A ping of death attack floods target computers with oversized packets, causing the target computer to either freeze or crash.
   * In SMTP relay attacks outbound mail folders fill up with spam relayed through your email server. 
   <br /><br />

Attacks to data and databases <a target="_blank" href="https://www.youtube.com/watch?v=YqFhKlzAABE&list=PLWqLeluv2Rq2jH70NFPYm0PB8sDMJ8gJR&index=27">VIDEO</a>
   * An inference attack is the development of a detailed version of an object from another object using different values in the new object, such as the difference between totals versus details allowed. A countermeasure is <strong>Polyinstantiation</strong> which prevents data inference attacks by preventing low-level database users from inferring the existence of higher-level data. It enables a relation to contain multiple tuples with the same primary keys, with each instance distinguished by a security level. https://www.wikiwand.com/en/Inference_attack
   * A data contamination attack. Proper implementation of security levels is a countermeasure for data contamination. 
   <br /><br />

Events: System-level, application-level, or user-level? REMEMBER
   * User-level events include Authentication attempts, command run, security violations. 
   * System-level events include logon attempts, logon IDs, logon attempts, Administration tools usage, user and client computer lockout, system performance, time/date, administration tools usage, and device usage.
   * Application-level events include files opened and closed, error messages, security violations, and file modifications.
   <br /><br />

A breach is an attack that has been successful in reaching its goal. 
   * Means is how a criminal committed a crime.
   * Motive is why a crime is committed. 
   * Opportunity is when and where a crime occurred.
   * Exigent circumstances are when evidence might be destroyed.
   <br /><br />

## Penetration test

Penetration test methodology - To simulate an attack on a system or network to evaluate the risk profile of an environment
   1. Reconnaissance
   2. Enumeration
   3. Vulnerability Analysis
   4. Execution/Exploitation
   5. Document Findings
   <br /><br />

<strong>Enticement</strong> is when a system has apparent flaws that were deliberately made available for penetration and exploitation.

## Models & Lifecycles

Focus of security awareness training:
   * Senior management: risk to the organization and the laws and regulations that affect the organization.
   * Middle management: policies, standards, baselines, guidelines, and procedures that affect security. 
   * Technical staff: configuring and maintaining security controls, including how to recognize an attack when it occurs. 
   * Regular staff: responsibilities regarding security for performing day-to-day tasks in a secure manner. 
   <br /><br />

   * FERMA (??? European Risk Management Standard) provides guidelines for managing risk in an organization.

   * The PASTA methodology provides a seven-step process for analyzing applications to align business objectives and technical requirements. This method provides a threat identification, enumeration, and scoring process. It is intended to provide an attacker-centric view of the application and infrastructure from which defenders can develop an asset-centric mitigation strategy.

   * The Open Group Architecture Framework (TOGAF) is an enterprise architecture framework that is based on four interrelated domains: technology, applications, data, and business. 

   * Sherwood Applied Business Security Architecture (SABSA) is a framework in addition to a methodology in that it prescribes the processes to follow to build and maintain the architecture. It uses the six communication questions (What, Where, When, Why, Who, and How) that intersect with six layers (operational, component, physical, logical, conceptual, and contextual. 

   The SABSA (Sherwood Applied Business Security Architecture) is a "customizable" framework and methodology for enterprises,   based on business requirements (like NIST for private businesses). The framework uses six communication questions (What, Where, When, Why, Who, and How) that intersect with six layers of Enterprise Security Architecture (ESA) (operational, component, physical, logical, conceptual, and contextual):

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/89186535-29e68400-d559-11ea-9532-ac57a3f6d306.png"><img width="682" alt="cyber-scaba-matrix" src="https://user-images.githubusercontent.com/300046/89186535-29e68400-d559-11ea-9532-ac57a3f6d306.png"></a>

   * The Zachman Framework is a two-dimensional model that intersects communication interrogatives (What, Why, Where, and so on) with various viewpoints (Planner, Owner, Designer, and so on). 

   * The ISO/IEC 27000 Series establishes information security standards published jointly by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC). Control Objectives for Information and Related Technology (COBIT) is a set of control objectives used as a framework for IT governance.
   <br /><br />

   * The Trike methodology is an implementation model created and then analyzed to produce a threat model. Risk values are assigned to the identified threats. Mitigating controls are assigned to the vulnerabilities that lead to the identified threats.

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

Process impprovement approaches:
   * Capability Maturity Model Integration (CMMI) addresses development, services, and acquisitions. 

   * Six Sigma includes methodologies DMAIC (Define, Measure, Analyze, Improve existing, Control process) or DMADV (Define, Measure, Analyze, Design, Verify new customer)

   * Control Objectives for Information and Related Technology (COBIT) is a security controls development framework that uses a process model to subdivide IT into four domains: Plan and Organize (PO), Acquire and Implement (AI), Deliver and Support (DS), and Monitor and Evaluate (ME).

   * Department of Defense Architecture Framework (DoDAF) is an architecture framework that organizes a set of products under eight viewpoints: Capability Viewpoint (CV), Data and Information Viewpoint (DIV), Operation viewpoint (OV), Project Viewpoint (PV), SerViCes Viewpoint (SvcV), STanDards Viewpoint (STDV), and Systems viewpoint (SV), All Viewpoint (required) (AV).

   * British Ministry of Defence Architecture Framework (MODAF) is an architecture framework that divides information into seven viewpoints: STrategic viewpoint (StV), Operational Viewpoint (OV), Service-Oriented Viewpoint (SOV), Acquisition Viewpoint (AcV), Technical viewpoint (TV), Systems Viewpoint (SV), All viewpoint (AV).

   * DHS (Department of Homeland Security) is involved in promoting software security best practices. Its Build Security In (BSI) initiative promotes a process-agnostic approach that makes security recommendations with regard to architectures, testing methods, code reviews, and management processes.
   <br /><br />

Security program lifecycle:
   1. Plan and organize
   2. Implement
   3. Monitor and evaluate (review audit logs)
   4. Operate and Maintain (perform audits)
   <br /><br />

Information life cycle:
   1. Create/receive
   1. Distribute
   1. Use
   1. Maintain
   1. Dispose/store
   <br /><br />

System Development Life Cycle:
   1.   Initiate
   2.   Acquire/Develop
   3.   Implement
   4.   Operate/Maintain
   5.   Dispose
   <br /><br />

The process of acquiring software:
   1.   Planning: During this phase, the organization performs a needs assessment, develops the software requirements, creates the acquisition strategy, and develops evaluation criteria and a plan.
   2.   Contracting: Once planning is complete, the organization creates a request for proposal (RFP) or other supplier solicitation forms, evaluates the supplier proposals, and negotiates the final contract with the selected seller.
   3.   Monitoring and accepting: When a contract is in place, the organization establishes the contract work schedule, implements change control procedures, and reviews and accepts the software deliverables.
   4.   Follow-up: When the software is in place, the organization must sustain the software, including managing risks and changes. At some point, it may be necessary for the organization to decommission the software.
   <br /><br />

Incident response process:
   1.   Detect the incident.
   2.   Respond to the incident.
   3.   Report the incident to the appropriate personnel.
   4.   Recover from the incident.
   5.   Remediate all components affected by the incident to ensure that all traces of the incident have been removed.
   6.   Review the incident and document all findings.
   <br /><br />

Incident response:
   1. Triage: The incident response team examines the incident to see what was affected and sets priorities. 
   1. Investigation: Involves the collection of relevant data.
   1. Containment: The damage is mitigated or contained.
   1. Analysis: Where the <strong>root cause</strong> of the incident is discovered.
   1. Tracking: Where the <strong>source</strong> (user or device) of the incident is determined.
   1. Post-mortem review: Record lessons learned.
   1. Recovery: Necessary adjustments or enhancements are made to policies and procedures.
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

Order evidence should be saved: REMEMBER: ephemeral
   1. Memory contents
   2. Swap files
   3. Network processes
   4. System processes
   5. File system information
   6. Raw disk blocks
   <br /><br />

Change control process: 
   1. The change is requested. 
   2. The change is approved. 
   3. The change is documented in the change log. 
   4. The change is tested and presented. 
   5. The change is implemented. 
   6. The change is reported to management or the CCB.
   <br /><br />

### Cohesion is opposite of Coupling
   * <strong>Low cohesion</strong> describes a module that carries out <strong>many tasks</strong>, making it harder to maintain and reuse.
   * High cohesion describes a software module that does not affect many other modules, is easier to update.

   * <strong>High coupling</strong> describes a module that must <strong>interact with many other modules</strong>.
   * Low coupling describes a module that performs its job without using other modules.
   <br /><br />

Polyinstantiation is a process used to prevent data inference violations. 

Relationship cardinality means whether a relationship is one-to-one, many-to-one, or many-to-many.

High cardinality means a high number of distinct (unique) values in a table column, relative to the number of rows in the table. 

Aggregation is a database security concern that arises when a user does not have complete access to sensitive data but can access portions of it. 

The domain of a relation is the set of allowable values that an attribute can take, composed of values that can be entered in a column (attribute) of a table (relation).


WASC (Web Application Security Consortium) is an organization that provides best practices for web-based applications along with a variety of resources, tools, and information that organizations can make use of in developing web applications.

Change control process: 
   1. requested; 
   2. approved; 
   3. documented in the change log; 
   4. tested and presented; 
   5. implemented; 
   6. reported to management or the change control board (CCB).
   <br /><br />

To establish a relationship with a third party which accesses organizational assets both remotely and locally:
   1. Perform a risk assessment on the third party’s network, to determine its compliance with organizational security policies and standards.
   2. Establish a written security policy with the third party. 
   3. Provide access to internal resources for the third-party personnel.
   4. Audit the third party’s access to internal resources.
   <br /><br />

Types of control:
   * Directive
   * Preventive
   * Detective
   * Responsive
   <br /><br />

   * Data backups are recovery <strong>logical controls</strong>. 
   * Recovery administrative controls do NOT include data backups. 
   * Server images are both corrective and technical controls.
   * Disaster recovery plans are recovery administrative controls. 
   * Job rotation and background checks are <strong>detective administrative controls</strong>.
   <br /><br />

Documents:
   * A business impact analysis (BIA) is a functional analysis that lists the critical and necessary business functions, their resource dependencies, and their level of criticality to the overall organization. Risks.
   * The business continuity plan (BCP) considers all aspects that are affected by a disaster, including functions, systems, personnel, and facilities, and lists and prioritizes the services that are needed. 
   * A contingency plan provides instruction on what personnel should do until the functions and systems are restored to full  functionality. 
   * A disaster recovery plan (DRP) is implemented when the emergency occurs and includes the steps to restore functions and systems.
   <br /><br />

System resilience is the ability of a system, device, or data center to recover quickly and continue operating after an equipment failure, power outage, or other disruption. It involves the use of redundant components or facilities.

Metrics defined by BIA (Business Impact Assessment):
   * RPO (Recovery Point Objective) = Maximum tolerable <strong>data</strong> loss period
   * RTO (Recovery Time Objective) = Recovery <strong>time</strong> to a defined service level
   * WRT (Work Recovery Time) = Max. time to verify integrity of systems & data
   * MTD (Maximum Tolerable Downtime) = Max. total time process can be disrupted
   <br /><br />

   <a target="_blank" href="https://www.youtube.com/watch?v=oAjNL3I_3-E&t=4m"><img alt="cyber-sec-bia-terms-581x239" width="581" src="https://user-images.githubusercontent.com/300046/104836718-0ac08200-586d-11eb-8ea9-c67720e58e4f.png"></a>

   * Mean time to repair (MTTR) is the average amount of time it takes to get a device fixed and back online. 
   * Mean time between failure (MTBF) describes how often a component fails on average.
   <br /><br />

ACID properties:
   * Atomicity means that either all operations are complete or the database changes are rolled back. 
   * Consistency means that the transaction follows an integrity process that ensures that data is consistent in all places where it exists. 
   * Isolation means that the transaction does not interact with other transactions until completion.
   * Durability is present when, once verified, the transaction is committed and cannot be rolled back. 
   <br /><br />

System owners are responsible for the systems on which data resides. While the data owner owns the data and the data custodian configures the appropriate permissions for user access to the data, the system owner must determine the parameters that govern the system, such as what types of data and applications can be stored on the system, who owns the data and applications, and who determined the users that can access the data and applications.

Data classification program:
   1. Define the classification levels. 
   2. Specify the data classification criteria.

   3. Identify the data owners who determine the classification level of the information he owns and protects the data for which he is responsible.
   4. Identify the data custodian who implements the information classification and controls determined by the data owner.

   5. Indicate the controls required for each classification level. The System owner ensures that the appropriate controls are in place.
   6. Document any known exceptions to the controls. 

   7. Document information custody transfer guidelines. 
   8. Create data classification review procedures. 
   9. Document data declassification procedures. 

   10. Develop the data classification security awareness program.
   * Security administrator maintains security devices and software, including firewalls, antivirus software, etc.
   <br /><br />

Dedicated security mode employs a single classification level.

"system integrity" implies that a system will work as intended.

Hierarchical storage management (HSM) is type of backup management system that provides a continuous online backup by using optical or tape “jukeboxes.” 

Aspects of identity management whereby users are identified, authenticated, and authorized: 
entities, attributes, credentials, and entitlements.

CPTED (Crime prevention through environmental design): 
   * natural access control
   * natural territorials reinforcement
   * natural surveillance
   <br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=_IfGEY4fo18">Trusted Computer System Evaluation Criteria (TCSEC)</a> 
functionality at least once. Enhanced by EU in ITSEC to assurance every time:
   * F6 + E6 = A1 = Mathamatically Verified protection
   * F5 + E5 = B3 = Mandatory Protection (military) resistant to penetration attempts.
   * F4 + E4 = B2 = Structured Protection (military)
   * F3 + E3 = B1 = Mandatory Protection (military)
   * F2 + E2 = C2 = Controlled access protection
   * F1 + E1 = C1 = Discretionary Protection (commercial)
   * &nbsp;&nbsp;&nbsp;&nbsp;E0 = D&nbsp; = Minimal Protection
   <br /><br />

Covert channel analysis is introduced at B2 and above.

ISO 15408 2005 = Common Criteria on TOE (Target of Evaulation) for Security Target report satisfies independently verified 
by NIAP (National Information Assurance Partnership) to
"compliant" instead of previous EAL (Evaluation Assurance Levels) 1 - 7 highest:
   1. A user wants the system to operate but ignore security threats.
   2. Developers use good design practices but security is not a high priority.
   4. Security configuration is based on good commercial development. This level is the common benchmark for commercial systems, including operating systems and products.
   5. Security is implemented starting in early design. Provides high levels of security assurance.
   6. Specialized security engineering provides high levels of assurance. Highly secure from penetration attackers.
   7. Extremely high levels of security are provided. This level requires extensive testing, measurement, and independent testing.
   <br /><br />

Security Models: VIDEO <a target="_blank" href="https://www.youtube.com/watch?v=FRi73kodf_c&list=PLWqLeluv2Rq2jH70NFPYm0PB8sDMJ8gJR&index=2">2</a>,<a target="_blank" title="2016" href="https://www.youtube.com/watch?v=4esHgEOmTqU&list=PLWqLeluv2Rq2jH70NFPYm0PB8sDMJ8gJR">3</a> 
   * The <a target="_blank" href="https://www.wikiwand.com/en/Bell%E2%80%93LaPadula_model">Bell-LaPadula (BLP) model</a> focuses on data confidentiality and controlled access to classified information. It uses a state machine with transition functions to control information flow, characterized by the phrase "write up, read down" (WURD). It was the first mathematical model of a multilevel system for enforcing access control. Not dynamic. It's a multilevel security model because it allows simultaneous processing of classified information across the security levels.
   
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

A <strong>reference monitor</strong> is a system component that enforces access controls on an object.

   * A PLD (programmable logic device) is an integrated circuit with connections or internal logic gates that can be changed through a programming process. 
   * A FPGA (field-programmable gate array) is a type of PLD that is programmed by blowing fuse connections on the chip or using an antifuse that makes a connection when a high voltage is applied to the junction.
   * Flash memory is a type of electrically programmable ROM.
   * Firmware is a type of ROM where a program or low-level instructions are installed.
   * The TCB (Trusted Computer Base) comprises the components (hardware, firmware, and/or software) that are trusted to enforce the security policy of the system that, if compromised, jeopardize the security properties of the entire system.
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

Cryptographic key life cycle: 1. Creation 2. Initialization 3. Distribution 4. Activation 5. Inactivation 6. Termination
  PROTIP: Creation before Initialization; Activation after Distribution.

Ciphers:
   * Diffusion is the process of changing the location of plaintext within the ciphertext. 
   * Confusion is the process of changing a key value during each round of encryption. 
   * Transposition is the process of shuffling or reordering the plaintext to hide the original message. 
   * Substitution is the process of exchanging one byte in a message for another.
   <br /><br />

A running key cipher is NOT a substitution cipher. A running key cipher uses a physical component, usually a book, to provide the polyalphabetic characters. All the other options are substitution ciphers.

Steganography
   * Distortion techniques are when the knowledge of original cover in the decoding process is essential at the receiver side. 
   * Least significant bit steganography is when some or all the bits or bytes inside an image are replaced with bits of the secret message. quality of the image is degraded. 
   * Transform domain techniques are when secret information is embedded in the <strong>frequency domain</strong> of the signal. 
   * Statistical methods encode information by changing several statistical properties of a cover.
   * Linguistic steganography hides a message in a nonobvious way like within another file. 
      * Visual and text semagrams hide a message using signs or symbols that look innocuous. 
      * Open codes, which include jargon code and covered ciphers, hide a message in a legitimate looking carrier, sometimes called overt communication.
   <br /><br />

   * stego medium is the file or object after the message has been hidden.
   * The payload is the message that is hidden.
   * The cover medium is the file or object before the message is hidden within it.
   * The carrier is the method of transmitting the stego medium.
   <br /><br />

* Due care means an organization has taken the necessary steps to protect the organization, its resources, and personnel. 
* Due diligence means an organization has evaluated information to identify vulnerabilities, threats, and issues related to risk. 
<br /><br />


<a name="Malware"></a>

## Malware (malicious software):
   * A worm is a program that spreads itself through network connections. 
   * A companion is a new file created with a similar name so users activate it.
   * A virus relies upon other application programs to execute itself and infect a system.
   * An armored virus includes protective code that prevents examination of critical elements, such as scans by antivirus software.
   * Spyware uses tracking cookies to collect and report on a user’s activities to the spyware programmer. 
   * A Trojan horse is malware disguised as a useful utility but embeds malicious code in itself. A symptom of a Trojan horse is that unknown software is using covert channels to perform malicious activities, such as deleting system files and planting a backdoor into a system.
   * Adware is a software application that displays advertisements while the application is executing.
   * A Macro is written into like VB in Excel.
   * Logic bombs are triggered by events like a specific date.
   <br /><br />

   * Multipartite spreads in different ways
   * Polymorphic can change to avoid detection.
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
   * Lucifer was created by IBM and used a <a target="_blank" href="https://www.youtube.com/watch?v=FGhj3CGxl8I">Feistel cipher</a> a framework to build ciphers. based on DES. Used by TwoFish. Its innovation is decryption.
   <br /><br />

   Kerckhoff’s Principle - the only safe is the key

* A symmetric algorithm uses a private or secret key that must remain secret between the two parties. It provides confidentiality but NOT authentication or nonrepudiation.
* Symmetric algorithms include both stream-based and block ciphers. 

REMEMBER Algorithms: https://competitions.cry.yp.to/aes.html
   * MD5, SHA-1, SHA-256, RIPEMD-160 are hashing algorithms.
   * El Gamal (slowest), AES, Twofish, Blowfish, Skipjack, DES, and 3DES are symmetric algorithms (same key for encrypt/decrypt, so one time)
   * RSA, DSA, Elliptic Curve Cryptosystem (ECC), Diffie-Hellman key exchange, Knapsack are asymmetric
   * RSA, ECC support digital signatures and encryption. 

   * DES uses a 64-bit block size. 56 bits.
   * IDEA provides a key size up to 128 bits.
   * RC6 provides the <strong>largest key size</strong> up to 2,048 bits. From NSA.
   
   * RC6 supports a 32-, 64-, or 128-bit block size. Written by Ron Rivest
   * 3DES provides a key size up to 168 bits. 3 costly rounds. Not widely used.
   * <a target="_blank" href="https://www.youtube.com/watch?v=O4xNJsjtN6E">AES</a> supports a 128-, 192-, or 256-bit (16 byte) block size, weaved through data blocks. Subset of Rijndael, winner of NIST contest for faster in 1998.
   * Twofish provides a key size 128-, 192-, 256 bits. Written by Bruce Sheiner
   * Blowfish
   <br /><br />

   REMEMBER: rounds of computations:
   * HAVAL performs 3, 4, or 5 
   * MD5 performs 4 
   * IDEA performs 8
   * AES performs 14 
   * TwoFish performs 16
   * Tiger performs 24
   * Skipjack performs 32
   * SHA-256 performs 64
   <br /><br />

   RC4 is a stream cipher and does not have a block size. RC4 is symmetric.

   * Stream-based ciphers are generally cheaper to implement than block ciphers.
   * Block ciphers are generally less susceptible to security issues.
   * Block ciphers are generally used more in software implementations.

Block cipher modes use IVs to ensure that patterns are not produced during encryption. But IVs are not modes. 
Modes used by block ciphers: Electronic Code Book (ECB), Cipher Block Chaining (CBC), Cipher Feedback (CFB), and Counter Mode (CTR).

<a target="_blank" href="https://www.youtube.com/watch?v=VPvZbMXfv_0">VIDEO</a>: Hybrid cryptography combines the convenience of a public-key cryptosystem with the efficiency of a symmetric-key cryptosystem. Public-key cryptosystems are convenient in that they do not require the sender and receiver to share a common secret in order to communicate securely:
   1. The symmetric algorithm provides keys used for encryption. 
   2. The symmetric keys are passed to the asymmetric algorithm, which encrypts the symmetric keys and automatically distributes them. 
   3. The message is encrypted with the symmetric key. 
   4. Both the message and the key are sent to the receiver. 
   5. The receiver decrypts the symmetric key and uses the symmetric key to decrypt the message.
   <br /><br />

Implementation of Confusion is the process of changing a key value during each round of encryption.
   * 3DES-EEE3 encrypts each block of data three times, each time with a different key. 
   * 3DES-EDE3 encrypts each block of data with the first key, decrypts each block with the second key, and encrypts each block with the third key.
   * 3DES-EDE2 encrypts each block of data with the first key, decrypts each block with the second key, and then encrypts each block with the first key.
   * 3DES-EEE2 encrypts each block of data with the first key, encrypts each block with the second key, and then encrypts each block with the third key.
   <br /><br />

With public key infrastructure (PKI)
   * A subject is an entity that seeks to have a certificate validated. 
   * A target is a path to a public key. 
   * A verifier is an entity that verifies a public key chain.
   * A trust anchor is a public key that verifies the certificate used in a digital signature. 
   <br /><br />

RARP (Reverse Address Resolution Protocol) when communicating for the first time to find the IP address matching the MAC.

OCSP (Online Certificate Status Protocol) is the Internet protocol that obtains the revocation status of an X.509 digital certificate. A certificate revocation list (CRL) contains a list of all the certificates that have been revoked. 

Key clustering occurs when different encryption keys generate the same ciphertext from the same plaintext message. 
Cryptanalysis is the science of decrypting ciphertext without prior knowledge of the key or cryptosystem used. 
A keyspace is all the possible key values when using a particular algorithm or other security measure. 

A TPM (Trusted Platform Module) protects the contents of an encrypted hard drive by storing the decryption key in the host computer. If the hard drive is removed, the data cannot be decrypted. 
Secure Electronic Transaction (SET) was a credit card transaction technology. 

SAML (Security Assertion Markup Language) is an XML-based open standard data format for exchanging authentication and authorization data between parties, in particular, between an identity provider and a service provider.

OVAL (Open Vulnerability and Assessment Language) is a standard written in XML that provides open and publicly available security content. Its purpose is to standardize information between different security tools.

Memory:
   * Associative memory searches for a specific data value in memory rather than using a specific memory address.
   * Indirect addressing is the type of memory addressing where the address location that is specified in the program instruction contains the address of the final desired location.
   * Absolute addressing addresses the entire primary memory space. Implied addressing refers to registers usually contained inside the CPU.
   * A memory leak occurs when a computer program incorrectly manages memory allocations, which can exhaust available system memory as an application runs. 
   <br /><br />

CTR (DES Counter Mode) is used in IEEE 802.11i. 

A process is a series of actions or steps taken in order to achieve a particular end. Organizations will define individual processes and their relationship to one another.

Workflow

Confinement is a term used to describe processes in a system. When a process is confined, the process is only allowed to read from and write to certain memory locations and resources. Confinement is usually carried out using the operating system, through a confinement service, or using a hypervisor.

The bounds of a process set limits on the memory addresses and resources the process can access. The bounds logically segment memory areas for each process to use.

PAT (Port Address Translation) maps ports.

IDS (Intrusion Detection System)
   * HIDS (Host-based IDS)
   * A heuristic-based (or rule-based) IDS is an expert system that uses a knowledge base, inference engine, and rule-based programming. 
   * A signature-based IDS analyzes traffic and compares it to attack or state patterns, called signatures, that reside within the IDS database.
   * A traffic anomaly-based IDS tracks traffic pattern changes. All future traffic patterns are compared to the sample. 
   * An anomaly-based IDS analyzes traffic and compares it to normal traffic to determine if said traffic is a threat. 
   * An application-based IDS is a specialized IDS that analyzes transaction log files for a single application.
   <br /><br />

Backups:
   * GRS (grandfather-father-son) backup rotation scheme Three sets of backup media
   <br /><br />

SOC 3 is the only SOC report that should be shared with the general public.


### Physical

Failsoft is the capability of a system to terminate non-critical processes when a failure occurs.

Gates:
   * Class 1 gates are suitable for residential use. 
   * Class 2 gates are suitable for commercial usage.
   * Class 3 gates are suitable for industrial usage.
   * Class 4 gates are suitable for restricted areas.
   <br /><br />

Alternative sites:
   * A redundant site provides a site that is recoverable in the least amount of time and will allow the organization to have the most control of the resources. 
   * A hot site contains telecommunications and computers and is the most expensive alternative site. It takes the shortest amount of time to recover.
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

Fire extinguisher classes:
   * Class A extinguishers are used for ordinary combustibles. 
   * Class B extinguishers are used for flammable liquids and flammable gases. 
   * Class C extinguishers are used for electrical equipment. 
   * Class D extinguishers are used for combustible metals.
   * Class K extinguishers are used for cooking oil or fat.
   <br /><br />

A preaction extinguisher operates like a dry pipe system except that the sprinkler head holds a thermal-fusible link that must melt before the water is released. This is currently the recommended system for a computer room.

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

## Access Control IAAA
   1. Identification is the act of a user professing an identity to an access control system.
   2. Authentication is the act of validating a user with a unique identifier by providing the appropriate credentials.
   3. Authorization
   <br /><br />

   Accountability is not a step in access control. Accountability is the capability of an organization to hold users responsible for their actions.

* Remote Authentication Dial-In User Service (RADIUS) is a standard published in RFC 2138
* Terminal Access Controller Access-Control System Plus (TACACS+) is a Cisco-proprietary method.

In a MAC (Mandatory access control) environment: <a target="_blank" href="https://www.youtube.com/watch?v=mNN-fEboRAA&list=ULpxsrZMHAL8w&index=4846">VIDEO</a>
   * a label is required for each subject and object. Each file is an object. Users are subjects. Clearance is a privilege.
   * Rule-based access control is most often used by routers and firewalls to control access to networks.
   * The dedicated mandatory access control (MAC) security mode employs a single classification level.
   * In the system high mandatory access control (MAC) security mode, all users of the system have the same security clearance but do not all possess a need-to-know clearance for all the information in the system.
   * In dedicated security mode, all users can access all data, but they must sign a nondisclosure agreement (NDA) and be formally approved for access on a need-to-know basis. 
   * In multilevel security mode allows two or more classification levels of information to be processed at the same time.
   * In the compartmented security mode, all users must possess the highest security clearance (as in both dedicated and system high security), but they must also have a valid need-to-know clearance, a signed NDA, and formal approval for all information to which they have access.
   <br /><br />

Types of authentication factors: something you know (knowledge), something you have (possession), and something you are (characteristic).
A password and pin combo includes only a single knowledge authentication factor type, so is not 2FA.

A capability table lists the access rights that a particular subject has to objects.

## Smart Cards

The user private key encrypts a challenge regnerated by the computer.

### Biometrics

Facial recognition:
   * In an <strong>eigenfaces</strong> facial scan, measurements of facial components are gathered and compared to a set of standard eigenfaces.
   * In an <strong>eigenfeatures</strong> facial scan, the distances between the facial features are measured and recorded.
   * In a retina scan, blood vessel pattern is scanned.
   * In an iris scan, the colored portion of the eye, including all rifts, coronas, and furrows, is scanned.
   * Vascular scan
   * Keystroke dynamics
   * Signature dynamics
   <br /><br />

A characteristics factor for authentication?

Errors:
   * A Type I error is false rejection rate (FRR). 
   * A Type II error is false acceptance rate (FAR). 
   * Crossover error rate (CER) is the point at which FRR equals FAR. 
   * Throughput rate is the rate at which users are authenticated.
   <br /><br />

Desktop sessions can be managed through screensavers, timeouts, logon, and schedule limitations. 
Federal Information Processing Standards (FIPS) Publication 201.2 and NIST Special Publication 800-79-2 are documents that provide guidance on proof of identity.
In Kerberos, the Key Distribution Center (KDC) issues a ticket-granting ticket (TGT) to the principal. 
The principal sends the TGT to the ticket-granting service (TGS) when the principal needs to connect to another entity.

In a MAC environment, each subject and object is given a label. 
   * The term for a file in a mandatory access control (MAC) environment is an object. 
   * The term for a user in an MAC environment is a subject. 
   * The term for a clearance in a MAC environment is a privilege.
   <br /><br />

DAC controls are determined by the data owner.

RBAC uses roles to provide access to the data.

## OSI (Open System Interconnect) 

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

Access control lists (ACL) are typically used on routers, which map to layer 3 of the OSI model.
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

Port numbers:
23: Telnet
443: HTTPS
80: HTTP
110: POP3
3389 RDP 
548 AFP 
143 IMAP
22 SSH 
SSL

Point-to-Point Tunneling Protocol (PPTP) encapsulates the original LAN packet with another header and trailer, while encrypting the original packet.

Address Resolution Protocol (ARP) resolves IP addresses to MAC addresses.

Network File System (NFS) is a client/server file-sharing protocol used in UNIX/Linux.

Fibre Channel over Ethernet (FCoE) encapsulates Fibre Channel frames over Ethernet networks.

Network address translation (NAT) is a service that can be supplied by a router or by a server. 

DNP3 is a multilayer protocol that is used between components in process automation systems in electric and water companies.

IPv4 uses 32 bits. IPv6 uses 128 bits.

Private addresses:
   * Class A 10.0.0.0–10.255.255.255
   * Class B 172.16.0.0–172.31.255.255
   * Class C 192.168.0.0–192.168.255.255 in range of addresses is from 192.0.0.0 to 223.255.255.255.
   <br /><br />

802.11ac includes multi-user multiple-input, multiple-output (MU MIMO).

High-Data-Rate Digital Subscriber Line (HDSL) can achieve 1.544 Mbps each way over two copper twisted pairs.

Secure HTTP (S-HTTP) encrypts only a single message. 
Hypertext Transfer Protocol Secure (HTTPS) establishes a session using a digital certificate and encrypts an entire session. 
Secure Electronic Transaction (SET) secures credit card transaction information over the Internet. 
Implement Internet Protocol Security (IPsec) to protect data that is transmitted over a VPN. 

Implementing an IPS is more expensive than implementing an IDS.
   * IPS (intrusion prevention system) is a network device that detects a network intrusion and prevents the network intrusion.
   * IDS (An intrusion detection system) is a network device that detects network intrusion attempts and either logs the intrusion or contacts the appropriate personnel. 
   <br /><br />>

Network access control (NAC) ensures that the computers on the network meet an organization's security policies. 
 A virtual private network (VPN) is a private network that users can connect to over a public network. Internet Protocol Security (IPsec) is a protocol that secures IP communication over a private or public network. A demilitarized zone (DMZ) is a section of a network that is isolated from the rest of the network with firewalls.

Frame Relay and X.25 are packet-switched technologies. 

A three-legged firewall uses three interfaces, one connected to the untrusted network, one to the internal network, and another to a DMZ.

A kernel proxy firewall is an example of a fifth generation firewall. It inspects the packet at every layer of the OSI model but does not introduce the performance hit that an application layer firewall will because it does this at the kernel layer. 


IP header protocol field REMEMBER 
   * 1 = ICMP (Internet Control Message Protocol)
   * 2 = IGMP (Internet Group Management Protocol)
   * 6 = TCP (Transmission Control Protocol) 
   * 17 = UDP 
   * 115 = L2TP (Layer 2)
   <br /><br />

DSL:
   * Symmetric DSL (SDSL), data travels in both directions at the same rate. 
   * Asymmetric DSL (ADSL) provides faster download speed than upload speed. 
   * High Bit-Rate DSL (HDSL) offers speeds up to 1.544 Mbps over regular UTP cable. 
   * Very High Bit-Rate DSL (VDSL) is capable of supporting high-definition TV (HDTV) and VoIP.

## Firewalls

* A stateful firewall forwards packets on behalf of the client. It examines each packet and permits or denies it passage based on many factors, including the state table.
* A proxy firewall hides a packet’s true origin before sending it through another network.
* BA packet-filtering firewall forwards packets based on rules that define which traffic is permitted and denied on the network.
* A bastion host is a hardened system that usually resides on a demilitarized zone (DMZ) and is accessed frequently.

## Security Social sites

https://isc.sans.edu/forums/diary/Verifying+Running+Processes+against+VirusTotal+DomainWide/25078/

An AUP (acceptable use policy) details appropriate use of information systems, handling standards, monitoring, and privacy expectations.

“Security is always excessive until it's not enough.” – Robbie Sinclair

## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
