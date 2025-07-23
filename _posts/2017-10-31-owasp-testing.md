---
layout: post
date: "2025-07-24"
lastchanges: "v015 + ABM from saved :2017-10-31-owasp-testing.md"
url: "https://wilsonmar.github.io/owasp-testing"
file: "owasp-testing"
title: "OWASP"
excerpt: "Practice finding security vulnerabilities within ZAP or the Broken Web App by running SCA, SAST, DAST, IAST using open-source SonarQube, Sonatype, Synopsys and other tools"
tags: [API, devsecops]
image:
# owasp-2021-1900x500.png
  feature: https://user-images.githubusercontent.com/300046/134340802-9a5f0729-f3a2-4ed1-817b-4e29973730a1.png
  credit: OWASP.org
  creditlink: https://owasp.org/Top10/
comments: true
created: "2017-10-31"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


## Why this?

Threat hunting is a proactive approach to detecting and mitigating threats. It is a continuous process of searching for, identifying, and mitigating potential threats in your environment.


<a name="OWASP_Items"></a>

### OWASP Web Top 10

OWASP is a non-profit organization with a mission to provide practical vendor-neutral information about application security. 

<a target="_blank" href="https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project">OWASP (Open Web Application Security Project) Top 10</a> - <a target="_blank" href="https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf">2017 PDF</a>:
is the result of an on-going active non-profit team.

The OWASP Top 10 Web Application Security Risks was updated in 2021.

YouTube videos from F5 DevCentral 2017 by John Wagnon (and Description from OWASP):

   1. <a target="_blank" href="https://www.youtube.com/watch?v=rWHvp7rUka8&index=82&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC">VIDEO:
   Injection Attacks</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection">Description</a>, <a target="_blank" href="https://devcentral.f5.com/articles/owasp-mitigation-strategies-part-1-injection-attacks">blog article</a>)

   2. <a target="_blank" href="https://www.youtube.com/watch?v=mruO75ONWy8&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=84">VIDEO: 
   Broken Authentication</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication">Description</a>)

   3. <a target="_blank" href="https://www.youtube.com/watch?v=2RKbacrkUBU&index=83&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC">VIDEO:
   Sensitive Data Exposure</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure">Description</a>)

   4. <a target="_blank" href="https://www.youtube.com/watch?v=g2ey7ry8_CQ&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=87">VIDEO:
   XML External Entities (XXE)</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)">Description</a>)

   5. <a target="_blank" href="https://www.youtube.com/watch?v=P38at6Tp8Ms&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=88">VIDEO:
   Broken Access Control</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control">Description</a>)

   6. <a target="_blank" href="https://www.youtube.com/watch?v=JuGSUMtKTPU&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=90">VIDEO:
   Security Misconfiguration</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration">Description</a>)

   7. <a target="_blank" href="https://www.youtube.com/watch?v=IuzU4y-UjLw&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=92">VIDEO:
   Cross-Site Scripting (XSS)</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)">Description</a>) <a target="_blank" href="https://www.securecoding.com/blog/xss-attacks/">blog</a>

   8. <a target="_blank" href="https://www.youtube.com/watch?v=nkTBwbnfesQ&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=94">VIDEO:
   Insecure Deserialization</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization">Description</a>)

   9. <a target="_blank" href="https://www.youtube.com/watch?v=IGsNYVDKRV0&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=97">VIDEO:
   Using Components with Known Vulnerabilities</a>  (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities">Description</a>)

   11. <a target="_blank" href="https://www.youtube.com/watch?v=mruO75ONWy8&index=84&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC">VIDEO:
   Insufficient Logging and Monitoring</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A10-Insufficient_Logging%26Monitoring">Description</a>)
   <br /><br />

Also: Cross-Site Request Forgery (CSRF)
   
   * <a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization">Description</a>
   * <a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities">Description</a>
   * <a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A10-Insufficient_Logging%26Monitoring">Description</a>
   <br /><br />


### Coding Errors

Top 25 Common Weakness Enumeration (CWE): category system for software vulnerabilities and weaknesses.
   
There is also SAN's <a target="_blank" href="https://www.sans.org/top25-software-errors/">Top 25 Software Errors</a> that include

   * Insecure Interaction Between Components,
   * Risky Resource Management, and
   * Porous Defenses
   <br /><br />



<a name="OWASP_API_Items"></a>

### OWASP API Security Top 10

<a target="_blank" href="https://owasp.org/www-project-api-security/">API security Top 10</a> had 2019 and 2023 versions.
Courses are from <a target="_blank" href="https://www.linkedin.com/company/apisec-university/">APISec.ai</a>.

1. <a target="_blank" href="https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/">API1:2023 Broken Object Level Authorization (BOLA)</a>

   <a target="_blank" href="https://university.apisec.ai/products/api-security-fundamentals/categories/2152504687/posts/2166215465">CLASS</a>: 
   This is the most common AND damaging API vulnerability, resulting in data loss, disclosure, data manipulation. 
   APIs can expose endpoints that handle object identifiers, creating a wide attack surface Level Access Control issue. 
   Object level authorization checks should be in every function that accesses a data source using an input from the user.
   An example is authenticated User A retrieves user B’s private data. Prevention:
   * Define data access policies and implement them in the business logic of the API.
   * Enforce data access controls on the server-side, not just the client-side.
   * Implement horizontal access control checks to ensure one user cannot access another user’s data.
   <br /><br />

2. <a target="_blank" href="https://owasp.org/API-Security/editions/2023/en/0xa2-broken-authentication/">API2:2023 Broken User Authentication</a>

   <a target="_blank" href="https://university.apisec.ai/products/api-security-fundamentals/categories/2152504687/posts/2166215466">CLASS</a>:
   Authentication mechanisms are often implemented incorrectly, allowing attackers to compromise authentication tokens or to exploit implementation flaws to assume other user’s identities temporarily or permanently. Compromising system’s ability to identify the client/user, compromises API security overall.

3. <a target="_blank" href="https://owasp.org/API-Security/editions/2023/en/0xa3-broken-object-property-level-authorization/">API3:2023 Broken Object Property Level Authorization (BOPLA)</a>

   <a target="_blank" href="https://university.apisec.ai/products/api-security-fundamentals/categories/2152504687/posts/2166215465">CLASS</a>:
   Looking forward to generic implementations, developers tend to expose all object properties without considering their individual sensitivity, relying on clients to perform the data filtering before displaying it to the user.

4. <a target="_blank" href="https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/">API4:2023 Broken Object Property Level Authorization</a>

   <a target="_blank" href="https://university.apisec.ai/products/api-security-fundamentals/categories/2152504687/posts/2166215601">CLASS</a>:
   Quite often, APIs do not impose any restrictions on the size or number of resources that can be requested by the client/user. Not only can this impact the API server performance, leading to Denial of Service (DoS), but also leaves the door open to authentication flaws such as brute force.

5. <a target="_blank" href="https://owasp.org/API-Security/editions/2023/en/0xa5-broken-function-level-authorization/">API5:2023 Unrestricted Resource Consumption</a>  (Lack of Resources & Rate Limiting)

   <a target="_blank" href="https://university.apisec.ai/products/api-security-fundamentals/categories/2152504687/posts/2166215610">CLASS</a>:
   Previously Broken Function Level Authorization.
   Complex access control policies with different hierarchies, groups, and roles, and an unclear separation between administrative and regular functions, tend to lead to authorization flaws. By exploiting these issues, attackers gain access to other users’ resources and/or administrative functions.

6. <a target="_blank" href="https://owasp.org/API-Security/editions/2023/en/0xa6-unrestricted-access-to-sensitive-business-flows/">API6:2023 Unrestricted Access to Sensitive Business Flows</a>

   <a target="_blank" href="https://university.apisec.ai/products/api-security-fundamentals/categories/2152504687/posts/2166215616">CLASS</a>:
   (Mass Assignment) 
   Binding client provided data (e.g., JSON) to data models, without proper properties filtering based on a whitelist, usually lead to Mass Assignment. Either guessing objects properties, exploring other API endpoints, reading the documentation, or providing additional object properties in request payloads, allows attackers to modify object properties they are not supposed to.

7. <a target="_blank" href="https://owasp.org/API-Security/editions/2023/en/0xa7-server-side-request-forgery/">API7:2023 Server Side Request Forgery</a>

   <a target="_blank" href="https://university.apisec.ai/products/api-security-fundamentals/categories/2152504687/posts/2166215618">CLASS</a>:

8. <a target="_blank" href="https://owasp.org/API-Security/editions/2023/en/0xa8-security-misconfiguration/">API8:2019 Security Misconfiguration</a>

   <a target="_blank" href="https://university.apisec.ai/products/api-security-fundamentals/categories/2152504687/posts/2166215637">CLASS</a>:
   Security misconfiguration is commonly a result of unsecure default configurations, incomplete or ad-hoc configurations, open cloud storage, misconfigured HTTP headers, unnecessary HTTP methods, permissive Cross-Origin resource sharing (CORS), and verbose error messages containing sensitive information.

   Injection flaws, such as SQL, NoSQL, Command Injection, etc., occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s malicious data can trick the interpreter into executing unintended commands or accessing data without proper authorization.

9. <a target="_blank" href="https://owasp.org/API-Security/editions/2023/en/0xa9-improper-inventory-management/">API9:2023 Improper Inventory Management</a>

   <a target="_blank" href="https://university.apisec.ai/products/api-security-fundamentals/categories/2152504687/posts/2166215465">CLASS</a>:
   APIs tend to expose more endpoints than traditional web applications, making proper and updated documentation highly important. Proper hosts and deployed API versions inventory also play an important role to mitigate issues such as deprecated API versions and exposed debug endpoints.

11. <a target="_blank" href="https://owasp.org/API-Security/editions/2023/en/0xaa-unsafe-consumption-of-apis/">API10:2023 Unsafe Consumption of APIs</a>

   <a target="_blank" href="https://university.apisec.ai/products/api-security-fundamentals/categories/2152504687/posts/2166215642">CLASS</a>:
   Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems to tamper with, extract, or destroy data. Most breach studies demonstrate the time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring.


### Kubernetes Top 10

See <a target="_blank" href="https://wilsonmar.github.io/kubernetes/">My notes on Kubernetes</a>.

<a target="_blank" href="https://owasp.org/www-project-kubernetes-top-ten/">https://owasp.org/www-project-kubernetes-top-ten</a>

1. K01: Insecure Workload Configurations
1. K02: Supply Chain Vulnerabilities
1. K03: Overly Permissive RBAC Configurations
1. K04: Lack of Centralized Policy Enforcement
1. K05: Inadequate Logging and Monitoring
1. K06: Broken Authentication Mechanisms
1. K07: Missing Network Segmentation Controls
1. K08: Secrets Management Failures
1. K09: Misconfigured Cluster Components
1. K10: Outdated and Vulnerable Kubernetes Components
<br /><br />

https://www.redhat.com/en/resources/state-kubernetes-security-report-2023

https://www.cisecurity.org/benchmark/kubernetes

### OWASP Top 10 for LLMs (AI/ML)

https://snyk.io/blog/addressing-risks-in-the-owasp-top-10-for-llms/


<hr />


### APISec Test results

<a target="_blank" href="https://apisecscan.com/sampleApisecScan.html">This sample API scan tests</a>:

   * Fail "positive" tests when API functionality is found to not operate as expected according to the API specification.
   * Fail "negative" tests when the API is found vulnerable to attacks imposed by testing tools.
   <br /><br />

> Only 4% of API testing focuses on security, according to <a target="_blank" href="https://www.gartner.com/en/documents/3986165">Gartner</a>.

One vendor's API test results are organized into four categories:

A. Vulnerable
   * Injection (Log4J):	
   * Fuzzing (random data):
   * Reflected Injection:	

B. Valuable
   * Personal Data	
   
C. Configuration
   * SSL Certificate	
   * SSL Required	
   * Server Properties Leak	
   * HTTP Options	
   * CORS Configuration	
   * Incremental IDs	

D. Authentication
   * Broken Authentication	
   <br /><br />

Testing is based on lists of vulnerabilities identified by OWASP, SANS, and other organizations.


<hr />

### PCI DSS v4 API Requirements

<a target="_blank" href="https://www.pcisecuritystandards.org/documents/PCI_DSS_v4-0.pdf">PCI DSS v4.0</a> is a 360-page PDF published June 2022, with a deadline of <strong>31 March 2024</strong>. It addresses API risks for the first time.

The previous verion, <a target="_blank" href="https://www.pcisecuritystandards.org/documents/PCI_DSS_v3-2-1.pdf">PCI DSS v3.2.1</a> is a 139-page PDF.

The Payment Card Industry Data Security Standard (PCI DSS) is a proprietary information security standard for organizations that handle branded credit cards from the major card schemes including Visa, MasterCard, American Express, Discover, and JCB.

https://www.pcisecuritystandards.org/
PCI Security Standards Council

https://blog.pcisecuritystandards.org/pci-dss-v4-0-resource-hub
PCI DSS 4.0 Resource Hub

https://www.pcisecuritystandards.org/document_library/
PCI Document Library

https://listings.pcisecuritystandards.org/documents/PCI_DSS-QRG-v3_2_1.pdf
PCI DSS Quick Reference Guide (PDF)

v1.0 was published in 2004.

Despite v1.1 in 2006, TJMax was hacked in 2007 (45M). Heartland Payment Systems was hacked in 2008 (130M). 

Cardholder data (CHD) is the full Primary Account Number (PAN) or the full PAN along with any of the following elements:

   * Cardholder name
   * Expiration date
   * Service code
   <br /><br />

Sensitive authentication data (SAD) is the full magnetic stripe data, CAV2, CVC2, CVV2, CID, PINs, and PIN blocks.

PCI DSS (Payment Card Industry Data Security Standard)
Standards:
   * PTS (PIN Transaction Security)
   * PA-DSS (Payment Application Data Security Standard)
   * P2PE (Point-to-Point Encryption)
   * PCI PIN (PCI PIN Security Requirements)
   * PCI SPoC (PCI Software PIN on COTS)
   * PCI CPoC (PCI Contactless Payments on COTS)
   * PCI DSS SAQ (PCI DSS Self-Assessment Questionnaire)
   * PCI DSS ROC (PCI DSS Report on Compliance)
   * PCI DSS AOC (PCI DSS Attestation of Compliance)
   * PCI DSS QSA (PCI DSS Qualified Security Assessor)
   * PCI DSS ASV (PCI DSS Approved Scanning Vendor)
   * PCI DSS ISA (PCI DSS Internal Security Assessor)
   * PCI DSS QIR (PCI DSS Qualified Integrator and Reseller)


<hr />

### Other Standards

* Health Insurance Portability and Accountability Act (HIPAA)

* Motor Industry Software Reliability Association (MISRA) C/C++ coding standards

* CERT C/C++, CERT Java, CERT Python?
   
* (US) DISA STIG, 
   
* ISO 26262
   
* ISO/IEC TS 17961
   
* AUTOSAR®



<hr />

<a name="SCA"></a>

## Sample broken apps

Several apps have been created to exhibit vulnerability issues, as examples for <a hred="SecTestingTools">testing tools</a>.

Such apps should run only inside a guest machine within VirtualBox or VMware set to NAT networking mode. 

CAUTION: Do not upload it to your hosting provider's public html folder or any Internet-facing servers, as they will be compromised.
If you run security vulnerability tests against a server you don't control, you are hacking that site.
So get both an NDA and contract of scope of work before starting.

### AWS Goat

<a target="_blank" href="https://www.youtube.com/watch?v=JzEeK8JcgpU&7m24s">VIDEO</a>:
<a target="_blank" href="https://github.com/ine-labs/AWSGoat">https://github.com/ine-labs/AWSGoat</a> provides two web apps containing OWASP Top 10 web application security risks (2021): 
  * A Python3 AWS Lambda React blog using DynamoDB with misconfigured AWS resources.
  * An HR Payroll PHP app running on Terraform-built EC2 with misconfigured S3 buckets.
   <br /><br />
Blogs:
  * https://alparslanakyildiz.medium.com/aws-cloud-pentesting-notes-9dc9e75cbed8
  * https://ine.com/blog/awsgoat-a-damn-vulnerable-aws-infrastructure
  * https://www.helpnetsecurity.com/2022/08/10/awsgoat-vulnerable-aws-infrastructure-video/
  <br /><br />


### Metasploitable3

<a target="_blank" href="https://github.com/rapid7/metasploitable3">Metasploitable3 from Rapid7</a> is a victim VM created with <a target="_blank" href="https://github.com/rapid7/metasploitable3/wiki/Vulnerabilities">intentional vulnerabilities</a> for abuse by Metasploit and other <a name="SecTestingTools">ethical hacking tools</a> running in Kali OS.
See <a target="_blank" href="https://www.offsec.com/metasploit-unleashed/">Metasploit Unleashed</a> at Offsec.com.

Instructions below provide manual steps to use Dean Bushmiller's <a target="_blank" href="https://vimeo.com/731196164" title="From Expanding Security">VIDEO</a> describing the <a target="_blank" href="https://github.com/deanbushmiller/ceh-bootcamp">GitHub</a> he used to setup <a target="_blank" href="https://wilsonmar.github.io/kali/">Kali Linux</a> VMs as AMIs:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1700693593/kali-metasploit-3122x1402_e1oj1y.png"><img src="kali-metasploit-3122x1402.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1700693593/kali-metasploit-3122x1402_e1oj1y.png"></a>


TODO: Create script to do the below.

1. Sign in the AWS Console GUI to the region Dean used to create his AMIs:

   https://us-east-1.console.aws.amazon.com/

1. Click the CloudShell icon, for a URL such as:

   https://us-east-1.console.aws.amazon.com/cloudshell/home?region=us-east-1

1. Highlight and copy the single command below

   <pre><strong>aws ec2 copy-image --name kali-linux --source-image-id ami-0e0c5931cfadd2102 --source-region us-east-1 && aws ec2 copy-image --name metasploitable3-linux --source-image-id ami-0b186198cc048aa9d --source-region us-east-1 && aws ec2 copy-image --name metasploitable3-windows --source-image-id ami-0e3153815a2b50c67 --source-region us-east-1</strong></pre>

   PROTIP: The AMI id's above are for us-east-1 only. Changing those regions would require other AMIs to be created.

1. Paste in the CloudShell and press Return to execute.

   If you get a "500 - Internal Server Error", refresh the page.

   The expected response are new ImageIds:

   <pre>{
    "ImageId": "ami-0e0c5931cfadd1111"
}
{
    "ImageId": "ami-0b186198cc0482222"
}
{
    "ImageId": "ami-0e3153815a2b53333"
}
   </pre>


   NOTE: AWS charges are not incurred until these instances are launched.
   
1. Duplicate another AWS browser tab and search for the "EC2" service for your region, for a URL such as:

   https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Home:

1. Click "Snapshots" in the left or middle menu to see a list of the AMIs created above.

   ### For use to SSH into the instance

1. Click "Key Pairs" in the left menu

   https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#KeyPairs:

1. Click the orange "Create Key Pair" 
1. Type a Name such as "kali-linux-231231" and click "Create key pair".

   Leave defaults RSA for Key Pair type and .pem for use with OpenSSH.

1. Navigate to the folder where the .pem file is downloaded.

   ### My IP Address

   To find the public IP address of your laptop:

1. In an internet browser such as Chrome, click this URL:

   <a target="_blank" href="https://whatismyipaddress.com">https://whatismyipaddress.com</a>

   You will <a href="#PublicIpAddress">later</a> highlight and copy the IPv4 address displayed.

1. Open another browser tab so you can return to the above page.


   ### Cloud Formation

1. Search for the "Cloud Formation" service for your region, for a URL such as:

   https://us-east-1.console.aws.amazon.com/cloudformation/home

1. Click the drop-down "Create Stack" and select "With New Resources (standard)" for the page with default "Template is ready" and "Amazon S3 URL"

1. Copy the URL below to paste into the "Amazon S3 URL" field:

   https://ceh-v11-20220609.s3.amazonaws.com/20220715-LAB-Pentest/pentestlab.yml

   That file was create by Dean and has contents beginning with:

   <pre>AWSTemplateFormatVersion: 2010-09-09
Description: Penetration Testing Lab Environment V20221102
   </pre>

1. Click "Next" for the "Specify stack details" page.
1. For Stack name, type your unique name and today's date, such as 

   <tt>johndoepentestlab231231a</tt>

   No spaces are allowed in Stack names. because they are used in URLs.

1. Switch back to the tab for the CloudShell to highlight and copy each of the ami-xxxxxx values.

   1. In the AttackerAMIId field, paste from above the first AMI id, for Kali Linux.
   2. In the LinuxVictimAMIId field, paste from above the second AMI id.
   3. In the WindowsVictimAMIId field, paste from above the third AMI id. (Windows 2008 R2)
   
   <a name="PublicIpAddress"></a>
1. In the PublicAddress field, find your public IP address by searching for "what is my ip" in a browser at https://whatismyipaddress.com/
1. Click the SSHKeyPair field and select the key pair you created above.
1. Click "Next" for the "Configure stack options" page.
1. Click "Next" for the Review page.
1. Click "Estimate cost" to see the cost of running the stack.
1. Scroll to the bottom to CHECK "I acknowledge that AWS CloudFormation might create IAM resources."
1. Click the orange "Create stack" button.
1. Wait (a few minutes) for "CREATE_IN_PROGRESS" to change to "CREATE_COMPLETE".
1. Click "Resources" in the horizontal menu.

   If "ROLLBACK_IN_PROGRESS" appears, delete the stack and try again.

1. After "Initializing" turns to "checks passed" shows on all instances, dismiss the CloudShell and What is My IP Address tabs.

   ### To SSH into the instance

   Traditionally, to connect to a Windows instance GUI, a RDP client software program needs to be installed.
   Similarly, to connect to a Linux instance, a SSH client software program needs to be installed.
   Ditto with the VNC protocol.

   However, Apache has done away with plugins or client software required by creating its <a target="_blank" href="https://guacamole.apache.org/">Guacamole</a> project to create a clientless remote desktop gateway.

   <a target="_blank" href="https://vimeo.com/767687771">VIDEO</a> by Dean Bushmiller shows how to configure <strong>Guacamole HTML5</strong> to access the Kali Linux instance. (10.0.0.5)

1. Duplicate another AWS browser tab and search for the "EC2" service for your region, instances, for a URL such as:

   https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Instances:instanceState=running

1. Click the Instance ID of the instance name ending with "bastion-guacamole".

   ### Client IP address

1. Click the (copy to clipboard) icon to the left of the "Public IPv4 address" (such as 34.205.166.115).
1. Open another browser tab and paste the IP address into the address bar to see the Guacamole login page.
1. Click "Advanced" to "Your connection is not private".
1. Click the link such as "Proceed to 34.205.166.115 (unsafe)" for the "APACHE GUACAMOLE" login page.
1. Click "Allow".
1. Type "guacadmin" for the Username.

   ### Get password within logs

1. Click "Actions" drop-down to select "Monitor and troubleshoot", and "Get system log".
1. Click in the log and press Ctrl-F to search for "password".
1. Highlight and copy the password text such as "WKO0Kq7kJw9N" in:

   <pre>Setting Bitnami application password to 'WKO0Kq7kJw9N'</pre>
 
1. Paste the password. Click "Login".
1. At the upper-right, click "guacadmin", then "Settings", "New Connection" to fill in fields:

1. Copy and paste to connect to Kali Linux

   * Name: kali
   * Protocol: RDP
   * Maximum number of connections: 1
   * Maximum number of connections per user: 1
   <br /><br />
   
   Skip down to: PARAMETERS | Network
   * Hostname: 10.0.0.4
   * Port: 3390
   Authentication:
   * Username: kali
   * Password: kali
   <br /><br />
   
   Leave the rest blank.

1. Scroll down to click "Save".
1. At the upper-right, click "guacadmin", then "Home", then that "Kali".

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1700571239/kali-screen-1020x367_c3tgkj.png"><img alt="kali-screen-1020x367.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1700571239/kali-screen-1020x367_c3tgkj.png"></a>

   
   ### Victim Ubuntu config 

   This is optional unless you want to confirm a Man-in-the-Middle impact.

   Ansible scripts may be used to configure.

1. At the upper-right, click "guacadmin", then "Settings", "New Connection" to fill in fields:
1. Copy and paste

   * Name: VIC-NIX
   * Protocol: SSH
   * Maximum number of connections: 1
   * Maximum number of connections per user: 1
   <br /><br />
   
   Skip down to: PARAMETERS | Network
   * Hostname: 10.0.0.10
   * Port: 22
   Authentication:
   * Username: vagrant
   * Password: vagrant
   <br /><br />

1. Scroll down to click "Save".


   ### Victim Windows 2008 R2 config

   This is optional unless you want to confirm a Man-in-th-Middle impact.

   Ansible or PowerShell scripts may be used to configure.

1. At the upper-right, click "guacadmin", then "Settings", "New Connection" to fill in fields:
1. Copy and paste

   * Name: VIC-WIN
   * Protocol: RDP
   * Maximum number of connections: 1
   * Maximum number of connections per user: 1
   <br /><br />
   
   Skip down to: PARAMETERS | Network
   * Hostname: 10.0.0.21
   * Port: 3389
   Authentication:
   * Username: vagrant
   * Password: vagrant
   * Security mode: RDP encryption
   <br /><br />

1. Scroll down to click "Save".

1. Now, hack away! see <a target="_blank" href="https://wilsonmar.github.io/kali/">Kali PenTesting</a>.

    https://github.com/deanbushmiller/CEH-bootcamp/tree/master/4Day/LAB-Capture-pcapng

   ### Stop instances

1. In AWS EC2, click the Instance ID of the instance name ending with "bastion-guacamole".

   CloudFormation phase:

1. Go to AWS CloudFormation console

   https://console.aws.amazon.com/cloudformation/home

1. Select the stack you built previously and click Delete.
   
   This deletes all resources for the solution (except the three copied AMIs; see below)

   Delete the copied AMIs:

1. Go to the EC2 Console > AMIs.
1. Find the three AMIs that were created earlier with the copy commands and deregister them
1. After deregistering the AMIs, go to Snapshots in the EC2 Console

   There will be three snapshots associated with the deleted AMIs that you can delete.


### Juice Shop

Perhaps the most modern sample vulnerabler web app is <a target="_blank" href="https://owasp-juice.shop">Juice Shop</a> maintained by OWSAP by volunteers at <a target="_blank" href="https://juice-shop.herokuapp.com/#/">https://juice-shop.herokuapp.com/</a>
book: "Pwning OWASP Juice Shop" at <a target="_blank" href="https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content">https://bkimminich.gitbooks.io/pwning-owasp-juice-shop/content</a> referencing code at 
<a target="_blank" href="https://github.com/bkimminich/juice-shop">https://github.com/bkimminich/juice-shop</a>.

### DVWA

Damn Vulnerable Web Application (DVWA) at <a target="_blank" href="http://dvwa.co.uk">http://dvwa.co.uk</a> with code at
<a target="_blank" href="https://github.com/ethicalhack3r/DVWA">
https://github.com/ethicalhack3r/DVWA</a> is a PHP/MySQL web application.
So use <a target="_blank" href="https://www.apachefriends.org/en/xampp.html">XAMPP</a> for its Apache web server and database.

### BWA

Stand-up an instance of the BWA (Broken Web Application),
a collection of intentionally vulnerable web applications
distributed by OWASP in a Virtual Machine (VM) file used by Virtualbox, HyperV.
VMware Workstation on Windows or VMware Fusion on Mac:

1. Instantiate a server. <a target="_blank" href="https://groups.google.com/forum/#!topic/gce-discussion/SKdU6JMHbE8"> In Sep 2017</a> nested VT-x is supported on GCE, according to Paul R. Nash, Group Product Manager, Google Compute Engine.

1. Open a Terminal console on the server and create/navigate to a folder for the project.
1. Download the download file:
   <pre><strong>
   curl -O https://sourceforge.net/projects/owaspbwa/files/latest/download
   </strong></pre>
   ```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   641  100   641    0     0   1781      0 --:--:-- --:--:-- --:--:--  1785
   ```
1. Confirm:
   <pre><strong>
   ls -al download
   </strong></pre>

   The OWASP_Broken_Web_Apps_VM_1.2.7z file downloaded is 1.7 GB (big!)
   because it contains various apps in Ruby, PHP, WordPress, etc.

   It's briefly described at
   <a target="_blank" href="https://owaspbwa.org">https://owaspbwa.org</a>, which resolves to
   <a target="_blank" href="https://code.google.com/archive/p/owaspbwa/">https://code.google.com/archive/p/owaspbwa/</a>

   Note it's from 2015.

1. Unpack the 7z file. Navigate into the folder.
1. Double-click on file <strong>OWASP Broken Web Apps.vmx</strong> to open image in Virtualbox or VMWare workstation:

   See 
   <a target="_blank" href="https://www.youtube.com/watch?v=O2JtPddnbuQ">
   Install video</a> (music only, no dialog)
   [5:49]

1. Use it.

   <a target="_blank" href="https://www.youtube.com/watch?v=cwjcfAgKqcg">
   Video showing version 1.1.1</a> 
   [21:53]
   by Chuck Willis 
   shows how to use BWA to demonstrate occurance of "Top 10" vulnerabilities described by OWASP.
   Mutillidae:

   ![owaspbwa-top10-842x790-451990](https://user-images.githubusercontent.com/300046/32273940-cc6541e6-bec1-11e7-9dc0-75af0c82efba.png)

   http://www.concise-courses.com/infosec/owasp-broken-web-applications/

   https://www.youtube.com/watch?v=FOEFL8bbbCU
   [7:05]

   <a target="_blank" href="https://www.youtube.com/watch?v=0dxzGK1ZPxA">
   Beyond 1.0 from 2013</a>
   Chuck Willis (@chuckatsf) describes BWA origins


<a name="VAmPI"></a>

### VAmPI (Python Flask)

<a target="_blank" href="https://github.com/erev0s/VAmPI">https://github.com/erev0s/VAmPI</a> (described in <a target="_blank" href="https://www.erev0s.com/">erev0s.com</a>) is written in Python Flask as a target app that fails evaluation by tools that detect security issues described in OWASP Top 10 vulnerabilities for APIs.

No one wants switches to add vulnerabilities in productive code. But code & app generators such as Outsystems and Mendix can.

Nevertheless, VAmPI can be used for learning/teaching:

1. Install Docker, Docker Compose, Postman, escape.tech, etc.
1. Generate OpenAPI (Swagger) specs for use by <a target="_blank" href="https://www.escape.tech/">escape.tech</a> to evaluate the running app's security, such as <a target="_blank" href="https://file.notion.so/f/f/91fce212-e4d5-429c-b881-ecf5af47d848/437c197d-909c-4098-b050-ae2717470b64/vampi-modified.json?id=31237011-ec94-4d06-ae85-4a57e639dc91&table=block&spaceId=91fce212-e4d5-429c-b881-ecf5af47d848&expirationTimestamp=1700056800000&signature=66biqFbBwN-Ym2ZmC4Um--waJW75SUNq0gO5AHAnQSs&downloadName=vampi-modified.json">this json</a>. <a target="_blank" href="https://success.outsystems.com/documentation/11/extensibility_and_integration/rest/expose_rest_apis/document_an_exposed_rest_api/">Outsystems generates that documentation automatically</a>.

1. Generate a Collection file for explorating within Postman

1. At <a target="_blank" href="https://app.escape.tech/ ">https://app.escape.tech/</a>, specify the app's endpoint URL.

1. upload Escape's <a target="_blank" href="https://gontoz.escape.tech/graphql">https://gontoz.escape.tech/graphql</a> 
1. https://vampi.tools.escape.tech/

1. Start: <tt>docker run -p 5000:5000 erev0s/vampi:latest</tt>
1. Fork, then <tt>git clone https://github.com/???/VAmPI</tt>
1. <tt>git remote add upstream https://github.com/erev0s/VAmPI</tt>
1. In another Terminal tab at VAmPI root containing docker-compose.yaml: <tt>docker-compose up -d</tt>

   <pre>✔ Container vampi-secure      Started                                                                                             0.1s 
   ✔ Container vampi-vulnerable  Started       
   </pre>
   
1. Run user emulator to:

1. Create database
1. Issue GET unauthenticated requests
1. Create account

1. Login using Token-Based Authentication (Adjust lifetime from within app.py)
1. Add books
1. Retrieve books without secrets
1. Retrieve books with secrets

1. Enable global configuration settings to switch specific vulnerabilities on or off during testing and confirmation. 

<hr />

## DVIA iOS App Mobile Testing

The open-source "Damn Vulnerable iOS app" is written in Apple's Swift language to provide a platform to mobile security enthusiasts/professionals or students to develop their penetration testing skills in a legal environment up to iOS 11.

It's open-sourced at <a target="_blank" href="https://github.com/prateek147/DVIA-v2">github.com/prateek147/DVIA-v2</a>
by <a target="_blank" href="https://www.linkedin.com/company/practical-devsecops/">Certified DevSecOps</a> <a target="_blank" href="https://www.linkedin.com/in/prateekgianchandani/">Prateek Gianchandani of Dubai</a> (<a target="_blank" href="https://highaltitudehacks.com/">highaltitudehacks.com</a>).

He wrote DVIA to contain vulnerabilities which we aim to use various testing tools (such as MDM) to find, <a target="_blank" href="https://philkeeble.com/ios/Setting-Up-iOS/">as described</a> by <a target="_blank" href="https://cheats.philkeeble.com">Phil Keeble</a>:

WARNING: On a test phone (not your personal phone):

1. Local Data Storage
1. Jailbreak Detection <a target="_blank" href="https://philkeeble.com/ios/reverse-engineering/iOS-Bypass-Jailbreak/">Bypass</a> using CheckRa1n
1. Excessive Permissions
1. <a target="_blank" href="https://philkeeble.com/ios/reverse-engineering/iOS-Runtime-Manipulation/">Runtime Manipulation</a>
1. <a target="_blank" href="https://philkeeble.com/ios/reverse-engineering/iOS-Anti-Anti-Hooking/">Anti Anti Hooking/Debugging</a>
1. Binary Protection
1. <a target="_blank" href="https://philkeeble.com/ios/iOS-Bypass-Fingerprint/">Touch/Face ID Biometric Bypass</a>
1. Phishing
1. <a target="_blank" href="https://philkeeble.com/ios/iOS-Side-Channel-Leakage/">Side Channel Data Leakage</a>
1. IPC Issues
1. Broken Cryptography
1. Webview Issues
1. <a target="_blank" href="https://philkeeble.com/ios/iOS-Network-Layer-Security/">Network Layer Security</a>
1. Application Patching
1. Sensitive Information in Memory

Here we use docs defined by OWASP:

MASTG = Mobile Application Security Testing Guide 

MASVS	=	Mobile Application Security Verification Standard

1. A paid Apple Developer account might be required.
1. An <a target="_blank" href="https://support.apple.com/guide/apple-business-manager/about-managed-apple-accounts-axm78b477c81/web">Apple Business Manager account</a> or Apple School Manager email is needed.

1. On your iPhone Store, get the <a target="_blank" href="https://support.apple.com/en-ae/guide/apple-configurator/welcome/ios">Apple Configurator</a>
1. https://support.apple.com/en-ae/guide/apple-configurator/apd97373af1e/ios
1. Install the app.
1. Input fake data for you to find later.

1. On a Apple Silicon MacBook, install the <a target="_blank" href="https://apps.apple.com/ae/app/apple-configurator/id1588794674">Apple Configurator App</a>.
1. AppSync Unified 

   When using Windows or Linux, use AltStore, Cydia Impactor, etc. 

   AppSync Unified, 
   * Frida (Python)
   * iRET
   * iFunBox
   * Ghidra
   * Objection for injection (Python)
   * KeyChain Dumper Passionfruit, <a target="_blank" href="https://github.com/ChiChou/Grapefruit/blob/master/README.md">GrapeFruit</a> (dev version of PassionFruit)
   * SQLite Browser
   * Realm Browser from Apple Store
   * https://github.com/ansjdnakjdnajkd/iOS

1. Install Xcode.
1. Fork <a target="_blank" href="https://github.com/prateek147/DVIA-v2">github.com/prateek147/DVIA-v2</a> and clone to your account
1. cd to the project root directory where the Podfile is present (/DVIA-v2/DVIA-v2).
1. Run <tt>pod install</tt>
1. Open the DVIA-v2.xcworkspace file with Xcode. 1. Run the app on a simulator.
1. To run on the device, go under Project settings in Xcode on the top left, General tab and under Signing, enter credentials for your Apple ID.
1. Guild and run the project on the device. 
1. Trust the app again under Settings -> General -> Device Management.


<hr />

<a name="TestingGuidelines"></a>

## Software Testing Guidelines

Guidance for planning and reporting of testing:

### PTES

<a target="_blank" href="http://www.pentest-standard.org/index.php/Main_Page">PTES (Penetration Testing Execution Standard)</a> in 2009 defined phases of a pen-test engagement:

   1. <a target="_blank" href="http://www.pentest-standard.org/index.php/Intelligence_Gathering">Intelligence Gathering</a>
   2. <a target="_blank" href="http://www.pentest-standard.org/index.php/Pre-engagement">Pre-engagement Interactions</a>
   3. <a target="_blank" href="http://www.pentest-standard.org/index.php/Threat_Modeling">Threat Modeling</a>
   4. <a target="_blank" href="http://www.pentest-standard.org/index.php/Vulnerability_Analysis">Vulnerability Analysis</a>
   5. <a target="_blank" href="http://www.pentest-standard.org/index.php/Exploitation">Exploitation</a>
   6. <a target="_blank" href="http://www.pentest-standard.org/index.php/Post_Exploitation">Post Exploitation</a>
   7. <a target="_blank" href="http://www.pentest-standard.org/index.php/Reporting">Reporting</a>
   <br /><br />

The PTES <a target="_blank" href="http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines">Technical Guidelines</a> is an "oldie but goodie" from 2014, but still has good wisdom.


### OSSTMM STAR

<a target="_blank" href="https://www.isecom.org/STAR.3.pdf">PDF: form</a>: STAR (Security Test Audit Report) is a standardized form to summarize results of a security or penetration test - providing precise calculations of the Attack Surface, details of what was tested and how, and indemnification for testing organization.

OSSTMM (Open Source Security Testing Methodology Manual) <a target="_blank" href="https://www.isecom.org/OSSTMM.3.pdf">v3 PDF</a> updated every six months by the <a target="_blank" href="https://www.isecom.org/research.html">ISECOM (Institute for Security and Open Methodologies)</a>. It was developed in an open community, and subjected to peer and cross-disciplinary review. ISECOM's <a target="_blank" href="https://www.isecom.org/STAR.3.pdf">PDF: Security Test Audit Report (STAR)</a> is a standardized form to summarize results of a security or penetration test - providing precise calculations of the Attack Surface, details of what was tested and how, and indemnification for testing organization.:
   1. Posture review
   2. Logistics
   3. Active Detection Verification
   4. Visibility Audit
   5. Access Verification
   6. Trust Verification
   7. Controls Verification
   8. Process Verification
   9. Configuration and Training Verification
   11. Property Validation
   11. Segregation Review
   12. Exposure Verification
   13. Competitive Intelligence Scouting
   14. Quarantine Verification
   15. Privileges Audit
   16. Survivability Validation and Service Continuity
   17. End Survey, Alert, and Log Review
   <br /><br />

OSSTMM has five channels or operational areas:

   * Human Security: The security of human interaction and communication is evaluated operationally as a means of testing
   * Physical Security: The OSSTMM tests physical security, defined as any tangible element of security that takes physical effort to operate
   * Wireless Communications: Electronic communications, signals, and emanations are all considered wireless communications that are part of the operational security testing
   * Telecommunications: Whether the telecommunication network is digital or analog, any communication conducted over telephone or network lines is tested in the OSSTMM
   * Data Networks: The security testing of data networks includes electronic systems and data networks that are used for communication or interaction via cable and wired network lines
   <br /><br />


<hr />

<a name="SecTestingTools"></a>

## Security Testing Tools

DevSecOps is a practice of integrating security into the DevOps process.


### Ethical Hacking tools

Many tools are used by Penetration Testers to attack systems and applications for the sake of finding vulnerabilities.

* Kali Linux server

* Metasploit

* wazuh.com - https://www.youtube.com/watch?v=O5QnGeaLGIs Ubuntu


<a name="IAST"></a>

### IAST (Interactive App Security Testing)

IAST (Interactive App Security Testing) was invented by Checkmarx, which adds an agent running along the app to report to a central "Security Handler".


<a name="DAST"></a>

### DAST (Dynamic Application Security Testing)

DAST aims to expose security weaknesses by watching application behavior while user actions are performed by automated scripts in a test environment, where various combinations of input actions are tried. 

The main targets of a DAST system involve what offers a front door to attackers: HTTP and HTML -- protocols that drive the World Wide Web. 

<a target="_blank" href="https://www.comparitech.com/net-admin/dast-tools/">Among DAST tools</a>: <a target="_blank" href=" https://www.owasp.org/index.php/Appendix_A:_Testing_Tools">web app penetration testing tools</a>:

A. The <a target="_blank" href="https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project">Zed Attack Proxy (ZAP)</a>
is offered free, and is actively maintained by hundreds of international volunteers. 
Use it to scan for security vulnerabilities in your web applications while you are developing and testing your applications. 

   <img alt="web proxy" src="https://user-images.githubusercontent.com/300046/32320696-dd1e8f82-bf7b-11e7-891b-6b248fba5a0a.png">

B. WebInspect from MicroFocus (formerly HP).

C. <a target="_blank" href="">Burp Suite from Portswagger</a> ($399/year Pro) with <a target="_blank" href="https://github.com/snoopysecurity/awesome-burp-extensions">extensions</a>, <a target="_blank" href="https://deltarisk.com/blog/how-to-use-burp-suite-professional-for-web-application-security-part-one/">running on Kali Linux with FoxyProxy on Firefox, JPython, JRuby</a>

D. Dirtbuster

E. <a target="_blank" href="https://www.brighttalk.com/webcast/17668/423557">VIDEO</a>: ForAllSecure 


<a name="SAST"></a>

### SAST

SAST (Static App Security Testing) tools focus on <strong>scanning application source code</strong> for vulnerabilities in coding. Static Application Security Testing (SAST) vendors include:
   * Veracode
   * Perforce
   * http://www.castsoftware.com/
   * Checkmarx, which adds an agent running along the app to report to a central Security Handler, called Interactive App Security Testing (IAST).
   <br /><br />

Security tests should also cover the efficacy of Runtime Application Self-Protection (RASP) built within apps, rather than relying completely on the infrastructure Web Application Firewall (WAF).



<hr />

## Install proxy server

There are several ways to obtain and instantiate a proxy server.

### SaaS

QUESTION: Who are SaaS vendors operating on public cloud?


### From Docker Hub

For those working on public clouds:

1. Bring up Docker
2. In a Terminal, 
3. Use the Docker image provided by the OWASP organization at
   https://hub.docker.com/r/owasp/zap2docker-stable/

   <pre><strong>
   docker pull owasp/zap2docker-stable
   </strong></pre>

   docker images say it's 1.33GB.

   Alternately, for use in CI environments:

   <pre><strong>
   docker pull owasp/zap2docker-bare
   </strong></pre>

   docker images say it's 525 MB, which is a third of the stable edition.

   The images above were created based on code at:
   https://github.com/zaproxy/zaproxy/tree/develop/build/docker

   ZAP's project leader is Simon Bennetts (@psilnon).
   His lecture on 2 Jun 2015 [59:59]:
   https://www.youtube.com/watch?v=_MmDWenz-6U

4. Start ZAP in with xvfb (X virtual frame buffer) which allows add-ons that use Selenium (like the Ajax Spider and DOM XSS scanner) to run in a headless environment. Firefox is also installed so can be used with these add-ons.

   Alternately: Start ZAP in headless mode with following command:

   <pre><strong>
   docker run -u zap -p 8080:8080 -i owasp/zap2docker-bare zap.sh -daemon -host 127.0.0.1 -port 8080
   </strong></pre>

Blogs about this:

   * https://github.com/zaproxy/zaproxy/wiki/Docker


### On private servers

1. Download

   <tt><strong>
   wget -q -O - https://github.com/zaproxy/zaproxy/releases/download/2.4.3/ZAP_2.4.3_Linux.tar.gz
   </strong></tt>

   CAUTION: Enterprise security should review this.

2. Un-tar

   <tt><strong>
   tar zxf - -C /opt
   ln -s /opt/ZAP_2.4.3 /opt/zap
   </strong></tt>

3. Since ZAP does not come with a script, this script for Debian:

   <tt><strong>
   wget -q -O /etc/init.d/zap https://raw.githubusercontent.com/stelligent/zap/master/packer/roles/zap/files/zap-init.sh
   chmod 755 /etc/init.d/zap
   </strong></tt>



## Instantiate within Google Cloud

## Browser Proxy Setup

In Chrome:

   1. Menu > settings
   2. Proxy

In Firefox:

   1. Manu > Options
   2. Advanced
   3. Network tab
   4. Connections > Settings
   5. Clear "No Proxy for:" box

In Internet Explorer:

   1. Tools 
   2. Internet options
   3. Connections tab
   4. Lan settings
   5. Check proxy settings

1. Use http://localhost or `http://127.0.0.1:8080` to reach the Proxy.

1. Automate settings:

In Firefox:

   1. Menu > Add-ons (shift+command+A)
   2. Click "See more Add-ins"
   3. In "Search for add-ons" search box, type "foxy boxy basix".
   4. Select "FoxyProxy Standard".
   5. Click "+ Add to Firefox".
   6. Click "Add" in the pop-up.
   7. Restart now.


## Install Jenkins plugin

Blogs:

   * https://stelligent.com/2016/04/28/automating-penetration-testing-in-a-cicd-pipeline/
   * https://stelligent.com/2016/05/11/automating-penetration-testing-in-a-cicd-pipeline-part-2/

The plug-in is at:

   https://wiki.jenkins.io/display/JENKINS/zap+plugin

1. ZAP is written in Java, so a Java SDK is needed to run it.

   https://github.com/zapproxy/zapproxy/wiki/


## ZAP UI OWASP

The drop-down at the upper-left corner of the ZAP UI provides for 4 modes:

   1. Safe mode
   2. Standard mode
   3. Protected mode
   4. Attack mode for sites you have permission to penetrate.
   <br /><br />

1. Click Quick Start to, on the Information window, input the URL to scan, starting with `https`.
   
   The left pane Tree window provides the context history of URLs visited.

1. Run ZAP using the 'standard' zap.sh script.

   There is also a zap-x.sh script which first starts xvfb (X virtual frame buffer) - this allows add-ons that use Selenium (like the Ajax Spider and DOM XSS scanner) to run in a headless environment.


## ZAP scripts

The plugin:

1. Manage Sessions (Load or Persist)
2. Define Context (Name, Include URLs and Exclude URLs)
3. Attack Contexts (Spider Scan, AJAX Spider, Active Scan)

You can also:

1. Setup Authentication (Form Based or Script Based)
2. Run as Pre-Build as part of a Selenium Build
3. Generate Reports (.xhtml, .xml, .json)


## Vendors

### Sonatype

<a target="_blank" href="https://www.youtube.com/watch?v=_tn1dDmxiBw&list=RDCMUCrXr49kBvXJeQMMl2693c4g&index=1">
by TheDevOpsSchool</a>
Fundamental Tutorial for Beginners by Rajesh Kumar 

### SonarQube

<a title="_blank" href="https://www.youtube.com/watch?v=y8UF7rgtDEo&list=RDCMUCrXr49kBvXJeQMMl2693c4g&index=8">
Sonarqube</a>


## Other DAST vendors

  https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis

1. <a target="_blank" href="https://en.wikipedia.org/wiki/Veracode">Veracode</a> <a target="_blank" href="https://www.veracode.com/security/vulnerability-scanning-tools">Vulnerability Scanning Tools</a> which only scans Java, were acquired on Nov 5 2018 from Broadcom by private equity firm Thoma Bravo who also funded Compuware and Dynatrace, Solar Winds and McAfee <a target="_blank" href="https://thomabravo.com/2018/11/05/thoma-bravo-to-acquire-veracode-software-from-broadcom-inc-nasdaqavgo/">*</a>

2. WebInspect from OpenText (formerly  MicroFocus, formerly HP, formerly Mercury), a part of the <a target="_blank" href="https://en.wikipedia.org/wiki/Fortify_Software">Fortify suite</a>, which consists of Fortify the SAST product.
   
3. <a target="_blank" href="https://www.checkmarx.com/">Checkmarx.com</a>, based in Israel, offers <a target="_blank" href="https://www.checkmarx.com/products/codebashing">Codebashing</a>, a developer education platform for secure coding training.

4. <a target="_blank" href="https://www.Synopsys.com/">Synopsys.com</a> [<a target="_blank" href="https://www.wikiwand.com/en/Synopsys">Wikipedia</a>] acquired CodeDX, Black Duck, Coverity, and <a target="_blank" href="https://en.wikipedia.org/wiki/Cigital">Cigital SecureAssist</a> (a lightweight IDE plugin that points out common security vulnerabilities in real time).

5. IBM AppScan

6. <a target="_blank" href="https://en.wikipedia.org/wiki/Parasoft"> Parasoft</a>

7. Tenable.io by Nessus


## SARIF

Static code analysis tool vendors have begun using the SARIF (Static Analysis Results Interchange Format) to publish results of their assessment of programming and style errors, non-compliance with legal requirements, and security vulnerabilities. The JSON-based format standard was published by industry group OASIS to provide a common output format to make it feasible for developers and teams to view, understand, interact with, and manage the results produced by several vendors.

1.  The first version of the format was published in March 2020 as SARIF v2.1.0 to recognize Microsoft's previous efforts and pre-standard versions. Its 220 pages in <a target="_blank" href="https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html">htm web page</a>. Source code in pdf, docx, htm for the document is at:

    <ul>https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html</ul>

    <ul><a target="_blank" href="https://github.com/oasis-tcs/sarif-spec/tree/main/Documents/CommitteeSpecifications/2.1.0">https://github.com/oasis-tcs/sarif-spec/tree/main/Documents/CommitteeSpecifications/2.1.0</a></ul>
    
    <ul>https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=sarif</ul>

1.  Tutorial:

    <a target="_blank" href="https://github.com/microsoft/sarif-tutorials">https://github.com/microsoft/sarif-tutorials</a>

1.  In Visual Studio Code, install the "Microsoft SARIF Viewer" from Microsoft Dev Labs. 

1.  Clone the sample SARIF file from

    <pre><a target="_blank" href="https://github.com/microsoft/sarif-tutorials/tree/main/samples">https://github.com/microsoft/sarif-tutorials</a>
    </pre>

1.  Load a sample SARIF file into the viewer within Microsoft Visual Studio Code. Examine details:

    * The location of the flaw and code paths leading to it
    * The rule violated
    * The severity of the violation (severe to minor, "error," "warning", "note")
    * Suggestions for remedying the problem
    * When it's ok to ignore the result
    <br /><br />

1.  Load sample SARIF files into Microsoft.

    Cartey and Keaton, OASIS SARIF TC co-chairs, said that "The next major version of SARIF will expand our ability to aggregate data and detect vulnerabilities in some exciting new ways."

1.  Clone a folder containing workflow and sample known-bad Terraform file.

1.  Generate SARIF <a target="_blank" href="https://www.youtube.com/watch?v=4MduRFoKpGY">Using the tfsec GitHub Action</a> from almost blank repo:

    <pre>name: Run tfsec sarif report
on:
  push:
    branches: [main, 'release/*']
  pull_request:
jobs:
  tfsec:
    name: tfsec sarif report
    runs-on: ubuntu-latest
    steps:
      - name: Clone repo
        uses: actions/checkout@main
      &nbsp;
      - name: Run sarif report
        uses: aquasecurity/tfsec-sarif-action@v0.1.0
        with:
          sarif_file: tfsec.sarif
      &nbsp;
      - name: Upload SARIF file
        uses: github/codeql-action/upload-sarif@v1
        with:
          # Path to SARIF file relative to the root of the repository:
          sarif_file: tfsec.sarif
    </pre>

    <pre><strong>git checout -b add-workflow
    </strong></pre>

## Resources

<a target="_blank" href="https://www.coursera.org/learn/owasp-top-10-risks-1-5/home/week/1">
VIDEO: Overview of the 2021 OWASP Top 10</a> by <a target="_blank" href="https://www.linkedin.com/in/johnwagnon/">John Wagnon</a> while he was at F5.

STAR: Daniel Miessler's <a target="_blank" href="https://danielmiessler.com/projects/webappsec_testing_resources/">https://danielmiessler.com/projects/webappsec_testing_resources</a>

<a target="_blank" href="https://app.pluralsight.com/library/courses/owasp-zap-web-app-pentesting-getting-started/table-of-contents">Getting Started with OWASP Zed Attack Proxy (ZAP) for Web Application Penetration Testing</a>	
1h 40m video course 16 Feb 2017 by Mike Woolard

STAR: https://python-security.readthedocs.io/security.html

https://www.securecoding.com/blog/python-security-practices-you-should-maintain/


## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

<sub>{{ page.lastchange }} {{ page.date }}</sub>
