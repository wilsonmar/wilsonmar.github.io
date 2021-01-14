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

## SABSA

The SABSA (Sherwood Applied Business Security Architecture) is a "customizable" framework and methodology for enterprises,
based on business requirements (like NIST for private businesses). The framework uses six communication questions (What, Where, When, Why, Who, and How) that intersect with six layers of Enterprise Security Architecture (ESA) (operational, component, physical, logical, conceptual, and contextual):

<img width="682" alt="cyber-scaba-matrix" src="https://user-images.githubusercontent.com/300046/89186535-29e68400-d559-11ea-9532-ac57a3f6d306.png">

Four stages of a security program life cycle:

   1. Plan and Organize
   2. Implement
   3. Operate and Maintain
   4. Monitor and Evaluate
   <br /><br />

Focus of security awareness training:

* Senior management: risk to the organization and the laws and regulations that affect the organization.
* Middle management: policies, standards, baselines, guidelines, and procedures that affect security. 
* Technical staff: configuring and maintaining security controls, including how to recognize an attack when it occurs. 
* Regular staff: responsibilities regarding security for performing day-to-day tasks in a secure manner. 


## Amazon's Compliance

<a target="_blank" href="https://user-images.githubusercontent.com/300046/56856297-c8c31000-6914-11e9-874e-c0417d380dfd.png"><img width="926" alt="aws-compliance" src="https://user-images.githubusercontent.com/300046/56856297-c8c31000-6914-11e9-874e-c0417d380dfd.png"></a>

<a target="_blank" href="https://aws.amazon.com/compliance/programs/">Compliance Programs at<br />https://aws.amazon.com/compliance/programs</a> covers security requirements in Canada, Asia Pacific, and Europe.

<a target="_blank" href="https://aws.amazon.com/compliance/">Amazon Compliance at<br /></a>https://aws.amazon.com/compliance</a>


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

   * ISO/IEC 27005 addresses risk management. 
   * ISO/IEC 27007 addresses auditing. 
   * ISO/IEC 27011 addresses telecommunications organization guidelines.
   * ISO/IEC 27012 addresses controls (counter-measures)
   * ISO/IEC 27015 addresses financial organization guidelines. 
   * ISO/IEC 27033 addresses network security. 
   * ISO/IEC 27034 addresses application security.
   * ISO/IEC 27037 addresses digital evidence guidelines.
   * ISO/IEC 27799 addresses health organization guidelines.
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

## Docker

There is also a Docker CAT:
https://www.cisecurity.org/benchmark/docker/

https://github.com/docker/docker-bench-security
The Docker Bench for Security is a script that checks for dozens of common best-practices around deploying Docker containers in production. 

https://blog.theodo.fr/2017/12/security-best-practices-tool-vms-including-dockers-host/

Not to be confused with
https://github.com/dev-sec/cis-docker-benchmark

https://nvd.nist.gov/ncp/checklist/740


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

NIST also publishes SP1800 (Cybersecurity practice guides) and the broader SP 500 (Information Technology).

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

## Other standards

https://quizlet.com/222277746/devsecops-acronyms-and-buzzwords-flash-cards/

The Functions and Categories within the NIST Cybersecurity (Program) Framework (CSF) maps NIST 800-53 to CIS Controls:

![cybersecurity-nist-342x275](https://user-images.githubusercontent.com/300046/55505643-c8cf3900-5610-11e9-8f79-3e7bec5cfe7c.jpg)

<a target="_blank" href="https://www.nist.gov/itl">
NIST Information Technology Laboratory</a> emails out <a target="_blank" href="https://public.govdelivery.com/accounts/USNIST/subscriber/new?qsp=USNIST_3">bulletins about vulnerabilities</a>

QUESTION: How does CIS relate to ITIL?

Criminal Justice Information Services (CJIS) Security Policy compliance for any US state or local agency that wants to access the FBI’s CJIS database.

As of May 25, 2018, a European privacy law — GDPR (General Data Protection Regulation — imposes new rules on companies, government agencies, non-profits, and other organizations that offer goods and services to people in the European Union (EU), or that collect and analyze data tied to EU residents. But the GDPR applies no matter where you are located.

UK Government G-Cloud. The UK Government G-Cloud is a cloud computing certification for services used by government entities in the United Kingdom.

Health Insurance Portability and Accountability Act (HIPAA) is a US federal law that regulates patient Protected Health Information (PHI). A Business Associate Agreement (BAA) stipulates adherence to security and privacy provisions in HIPAA and the Health Information Technology for Economic and Clinical Health Act (HITECH) Act. 

International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC) 27018 code of practice covers the processing of personal information by cloud service providers.

MTCS (Multi-Tier Cloud Security) Singapore 584:2013 Certification covers  Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).

Service Organization Controls (SOC) 1, 2, and 3 report is a framework by independent third-party auditors covering controls for data security, availability, processing integrity, and confidentiality as applicable to in-scope trust principles for each service.

National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) is a voluntary Framework that consists of standards, guidelines, and best practices to manage cybersecurity-related risks. Through a validated assessment performed by the Health Information Trust Alliance (HITRUST), a leading security and privacy standards development and accreditation organization, Office 365 is certified to the objectives specified in the NIST CSF.

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

A vulnerability is an absence or a weakness of a countermeasure that is in place.

An exposure is an instance of being subjected or exposed to losses from a threat.

A trigger is an event that indicates that a risk has occurred or is about to occur. 

Tenents:
   1. Confidentiality (IPSec encryption in transit, social engineering)
   2. Integrity 
   3. Availability (RAID-5, DDoS)
   4. Accountability (auditing)
   <br /><br />

CRAMM is an abbreviation of "C" for the UK government’s Central Computer and Telecommunications Agency (CCTA) Risk Analysis and Management Method. CRAMM reviews includes three steps:
   1. Identify and value assets.
   2. Identify threats and vulnerabilities and calculate risks.
   3. Identify and prioritize countermeasures.
   <br /><br />

Threat modeling process:
   1. Decompose the application or infrastructure
   1. Determine the threats
   1. Determine countermeasures and mitigations
   1. Rank the threats
   <br /><br />

Threats: spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege. 

Models:
   1. The Open Group Architecture Framework (TOGAF) is an enterprise architecture framework that is based on four interrelated domains: technology, applications, data, and business. 
   1. Sherwood Applied Business Security Architecture (SABSA) is a framework in addition to a methodology in that it prescribes the processes to follow to build and maintain the architecture. It uses the six communication questions (What, Where, When, Why, Who, and How) that intersect with six layers (operational, component, physical, logical, conceptual, and contextual. 
   1. The Zachman Framework is a two-dimensional model that intersects communication interrogatives (What, Why, Where, and so on) with various viewpoints (Planner, Owner, Designer, and so on). 
   1. The ISO/IEC 27000 Series establishes information security standards published jointly by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC). Control Objectives for Information and Related Technology (COBIT) is a set of control objectives used as a framework for IT governance.
   <br /><br />

Process impprovement approaches:
   * Capability Maturity Model Integration (CMMI) addresses development, services, and acquisitions. 
   * Six Sigma includes methodologies DMAIC (Define, Measure, Analyze, Improve existing, Control process) or DMADV (Define, Measure, Analyze, Design, Verify new customer)
   * Control Objectives for Information and Related Technology (COBIT) is a security controls development framework that uses a process model to subdivide IT into four domains: Plan and Organize (PO), Acquire and Implement (AI), Deliver and Support (DS), and Monitor and Evaluate (ME).
   * Department of Defense Architecture Framework (DoDAF) is an architecture framework that organizes a set of products under eight viewpoints: Capability Viewpoint (CV), Data and Information Viewpoint (DIV), Operation viewpoint (OV), Project Viewpoint (PV), SerViCes Viewpoint (SvcV), STanDards Viewpoint (STDV), and Systems viewpoint (SV), All Viewpoint (required) (AV).
   * British Ministry of Defence Architecture Framework (MODAF) is an architecture framework that divides information into seven viewpoints: STrategic viewpoint (StV), Operational Viewpoint (OV), Service-Oriented Viewpoint (SOV), Acquisition Viewpoint (AcV), Technical viewpoint (TV), Systems Viewpoint (SV), All viewpoint (AV).
   <br /><br />

Security program lifecycle:
   1. Plan and organize
   2. Implement
   3. Monitor and evaluate (review audit logs)
   4. Operate and Maintain (perform audits)
   <br /><br />

To establish a relationship with a third party which accesses organizational assets both remotely and locally:
   1. Perform a risk assessment on the third party’s network, to determine its compliance with organizational security policies and standards.
   2. Establish a written security policy with the third party. 
   3. Provide access to internal resources for the third-party personnel.
   4. Audit the third party’s access to internal resources.
   <br /><br />

Types of controls:
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

US Laws:
   * The Federal Privacy Act of 1974 ensures that only authorized persons should have access to personal information and that personal records should be up to date and accurate. 
   * The Federal Intelligence Surveillance Act (FISA) of 1978 affects law enforcement and intelligence agencies and gives procedures for the physical and electronic surveillance and collection of “foreign intelligence information” between “foreign powers” and “agents of foreign powers.”

   * The Computer Fraud and Abuse Act (CFAA) of 1986 affects any entities that may engage in hacking of “protected computers” as defined in the Act. It requires the creation of computer security plans and the appropriate training of system users or owners where the systems house sensitive information. was the first law written to require a formal computer security plan. 
   * The Electronic Communications Privacy Act (ECPA) of 1986 extended government restrictions on wiretaps from telephone calls to include transmissions of electronic data by computer?

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

RFC's https://tools.ietf.org/html/rfc1087
   * RFC 1087 outlines concepts pertaining to what the IAB considers unethical and unacceptable. It considers destroying the integrity of computer-based information unethical.
   * RFC 2010 Operational Criteria for Root Name Servers
   * RFC 1589 A Kernel Model for Precision Timekeeping
   * RFC 1150 F.Y.I. on F.Y.I.
   <br /><br />

NIST SP 800-53 is within section 4 SECURITY CONTROL SELECTION of 
<a target="_blank" href="https://csrc.nist.gov/publications/fips">https://csrc.nist.gov/publications/fips</a> NISP FIPS-200 and 201-3
catagorizes by impact.

https://nvd.nist.gov/vuln/search
known issues

"Do not appropriate other people’s intellectual output" is one of the Computer Ethics Institute (CEI) Ten Commandments of Computer Ethics, but is not part of the(ISC)2 code of ethics preamble.

Quantitative risk analysis: Asset Value (AV) x Exposure Factor (EF) = Single Loss Expectancy (SLE).

Annualized Rate of Occurrence (ARO) X Single Loss Expectancy (SLE) = Annual Loss Expectancy (ALE).

Cost/benefit of implementing a particular safeguard, where ALE is the annual loss expectancy: 
(ALE before safeguard) – (ALE after safeguard) – (annual cost of safeguard)

Residual risk = total risk – countermeasures.

## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
