---
layout: post
title: "DAST for OWASP using ZAP on the Broken Web App and other tools"
excerpt: "Practice penetration testing identifying security vulnerabilities in sample BWA app"
tags: [API, devsecops]
date: "2021-08-21"
file: "owasp-testing"
image:
# devsecops-diagram-784x232.png
  feature: https://user-images.githubusercontent.com/300046/32320696-dd1e8f82-bf7b-11e7-891b-6b248fba5a0a.png
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

There are several standards:

<a target="_blank" href="https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project">OWASP (Open Web Application Security Project) Top 10</a> - <a target="_blank" href="https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf">2017 PDF</a>:
is the result of non-profit team.

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
   10. Property Valiidation
   11. Segregation Review
   12. Exposure Verification
   13. Competitve Intelligence Scouting
   14. Quarantine Verification
   15. Privileges Audit
   16. Survivability Validation and Service Continuity
   17. End Survey, Alert, and Log Review
   <br /><br />

OSSTMM five channels or operational areas:

   * Human Security: The security of human interaction and communication is evaluated operationally as a means of testing
   * Physical Security: The OSSTMM tests physical security defined as any tangible element of security that takes physical effort to operate
   * Wireless Communications: Electronic communications, signals, and emanations are all considered wireless communications that are part of the operational security testing
   * Telecommunications: Whether the telecommunication network is digital or analog, any communication conducted over telephone or network lines are tested in the OSSTMM
   * Data Networks: The security testing of data networks includes electronic systems and data networks that are used for communication or interaction via cable and wired network lines
   <br /><br />

<a target="_blank" href="http://www.pentest-standard.org/index.php/Main_Page">PTES (Penetration Testing Execution Standard)</a> in 2009 defined phases of a pen-test engagement:

   1. <a target="_blank" href="http://www.pentest-standard.org/index.php/Intelligence_Gathering">Pre-engagement Interactions</a>
   2. <a target="_blank" href="http://www.pentest-standard.org/index.php/Pre-engagement">Intelligence Gathering</a>
   3. <a target="_blank" href="hhttp://www.pentest-standard.org/index.php/Threat_Modeling">Threat Modeling</a>
   4. <a target="_blank" href="http://www.pentest-standard.org/index.php/Vulnerability_Analysis">Vulnerability Analysis</a>
   5. <a target="_blank" href="http://www.pentest-standard.org/index.php/Exploitation">Exploitation</a>
   6. <a target="_blank" href="http://www.pentest-standard.org/index.php/Post_Exploitation">Post Exploitation</a>
   7. <a target="_blank" href="http://www.pentest-standard.org/index.php/Reporting">Reporting</a>
   <br /><br />

The PTES <a target="_blank" href="http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines">Technical Guidelines</a> is an "oldie but goodie" because it's from 2014.


## OWASP items

These will be changed soon.
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

   10. <a target="_blank" href="https://www.youtube.com/watch?v=mruO75ONWy8&index=84&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC">VIDEO:
   Insufficient Logging and Monitoring</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A10-Insufficient_Logging%26Monitoring">Description</a>)
   <br /><br />

Also: Cross-Site Request Forgery (CSRF)




There are different types of Pentration Testing:

   * SAST (Static Application Security Testing)
   * DAST (Dynamic Application Security Testing)
   <br /><br />


## DAST (Dynamic Application Security Testing)

DAST watches application behavior while user actions are performed by automated scripts in a test environment, where various combinations of input actions are tried. This aims to expose security weaknesses.

The main targets of a DAST system involve what offer a front door to attackers: HTTP and HTML -- protocols that drive the World Wide Web. 

<a target="_blank" href="https://www.comparitech.com/net-admin/dast-tools/">Among DAST tools</a>: <a target="_blank" href=" https://www.owasp.org/index.php/Appendix_A:_Testing_Tools">web app penetration testing tools</a>:

A. The <a target="_blank" href="https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project">Zed Attack Proxy (ZAP)</a>
is offered free, and is actively maintained by hundreds of international volunteers. 
Use it to scan for security vulnerabilities in your web applications while you are developing and testing your applications. 

B. WebInspect from MicroFocus (formerly HP).

C. <a target="_blank" href="">Burp Suite from Portswagger</a> ($399/year Pro) with <a target="_blank" href="https://github.com/snoopysecurity/awesome-burp-extensions">extensions</a>, <a target="_blank" href="https://deltarisk.com/blog/how-to-use-burp-suite-professional-for-web-application-security-part-one/">running on Kali Linux with FoxyProxy on Firefox, JPython, JRuby</a>

D. Dirtbuster

E. <a target="_blank" href="https://www.brighttalk.com/webcast/17668/423557">VIDEO</a>: ForAllSecure 


## vs. SAST

By contrast SAST (Static App Security Testing) tools focus on scanning <strong>application source code</strong> for vulnerabilities in coding. Static Application Security Testing (SAST) vendors include Veracode, Perforce, http://www.castsoftware.com/ and Checkmarx, which adds an agent running along the app to report to a central Security Handler, called Interactive App Security Testing (IAST).

Security tests should also cover the efficacy of Runtime Application Self-Protection (RASP) built within apps, rather than relying completely on the infrastructure Web Application Firewall (WAF).

## OWASP Top 10

DAST (like ZAP) look for vulnerabilities described by the 


## API Security 

<a target="_blank" href="https://owasp.org/www-project-api-security/">API security has its own OWASP Top 10</a>:

1. API1:2019 Broken Object Level Authorization

    APIs tend to expose endpoints that handle object identifiers, creating a wide attack surface Level Access Control issue. Object level authorization checks should be considered in every function that accesses a data source using an input from the user.

2. API2:2019 Broken User Authentication

    Authentication mechanisms are often implemented incorrectly, allowing attackers to compromise authentication tokens or to exploit implementation flaws to assume other user’s identities temporarily or permanently. Compromising system’s ability to identify the client/user, compromises API security overall.

3. API3:2019 Excessive Data Exposure

    Looking forward to generic implementations, developers tend to expose all object properties without considering their individual sensitivity, relying on clients to perform the data filtering before displaying it to the user.

4. API4:2019 Lack of Resources & Rate Limiting

    Quite often, APIs do not impose any restrictions on the size or number of resources that can be requested by the client/user. Not only can this impact the API server performance, leading to Denial of Service (DoS), but also leaves the door open to authentication flaws such as brute force.

5. API5:2019 Broken Function Level Authorization

    Complex access control policies with different hierarchies, groups, and roles, and an unclear separation between administrative and regular functions, tend to lead to authorization flaws. By exploiting these issues, attackers gain access to other users’ resources and/or administrative functions.

6. API6:2019 Mass Assignment

    Binding client provided data (e.g., JSON) to data models, without proper properties filtering based on a whitelist, usually lead to Mass Assignment. Either guessing objects properties, exploring other API endpoints, reading the documentation, or providing additional object properties in request payloads, allows attackers to modify object properties they are not supposed to.

7. API7:2019 Security Misconfiguration

    Security misconfiguration is commonly a result of unsecure default configurations, incomplete or ad-hoc configurations, open cloud storage, misconfigured HTTP headers, unnecessary HTTP methods, permissive Cross-Origin resource sharing (CORS), and verbose error messages containing sensitive information.

8. API8:2019 Injection

    Injection flaws, such as SQL, NoSQL, Command Injection, etc., occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s malicious data can trick the interpreter into executing unintended commands or accessing data without proper authorization.

9. API9:2019 Improper Assets Management

    APIs tend to expose more endpoints than traditional web applications, making proper and updated documentation highly important. Proper hosts and deployed API versions inventory also play an important role to mitigate issues such as deprecated API versions and exposed debug endpoints.

10. API10:2019 Insufficient Logging & Monitoring

    Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems to tamper with, extract, or destroy data. Most breach studies demonstrate the time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring.


There is also SAN's <a target="_blank" href="https://www.sans.org/top25-software-errors/">Top 25 Software Errors</a> that include
Insecure Interaction Between Components,
Risky Resource Management, and
Porous Defenses

Additionally:
* Payment Card Industry Data Security Standard (PCI DSS)
* Health Insurance Portability and Accountability Act (HIPAA)
* Motor Industry Software Reliability Association (MISRA) C/C++ coding standards

## Test Scope

As a "black box" approach,
DAST cannot identify non-reflective vulnerabilities (i.e – Cross-Site Scripting) that don’t generate feedback when triggered.

## Get sample broken app

Several apps were created to exhibit vulnerability issues, as examples
for Static Code vulnerability assessment (SAST) utilities such as GitHub CodeQL, SonarQube, Fortify, etc.. Which utility catches the most issues?

CAUTION: Do not upload it to your hosting provider's public html folder or any Internet facing servers, as they will be compromised.

So these apps should run only inside a guest machine within VirtualBox or VMware set to NAT networking mode. 

CAUTION PROTIP: If you run ZAP against a server you don't control, you are hacking that site.

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

0. Instantiate a server. <a target="_blank" href="https://groups.google.com/forum/#!topic/gce-discussion/SKdU6JMHbE8"> In Sep 2017</a> nested VT-x is supported on GCE, according to Paul R. Nash, Group Product Manager, Google Compute Engine.

0. Within a console on the server, download:

   <pre><strong>
   curl -O https://sourceforge.net/projects/owaspbwa/files/latest/download
   </strong></pre>

   The OWASP_Broken_Web_Apps_VM_1.2.7z file downloaded is 1.7 GB (big!)
   because it contains various apps in Ruby, PHP, WordPress, etc.

   It's briefly described at
   <a target="_blank" href="https://owaspbwa.org">https://owaspbwa.org</a>, which resolves to
   <a target="_blank" href="https://code.google.com/archive/p/owaspbwa/">https://code.google.com/archive/p/owaspbwa/</a>

   Note it's from 2015.

0. Unpack the 7z file. Navigate into the folder.
0. Double-click on file <strong>OWASP Broken Web Apps.vmx</strong> to open image in Virtualbox or VMWare workstation:

   See 
   <a target="_blank" href="https://www.youtube.com/watch?v=O2JtPddnbuQ">
   Install video</a> (music only, no dialog)
   [5:49]

0. Use it.

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


## Install proxy server

There are several ways to obtain and instantiate a proxy server.

### SaaS

QUESTION: Who are SaaS vendors operating on public cloud?

### From Docker Hub

For those working on public clouds:

0. Bring up Docker
0. In a Terminal, 
0. Use the Docker image provided by the OWASP organization at
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

0. Start ZAP in with xvfb (X virtual frame buffer) which allows add-ons that use Selenium (like the Ajax Spider and DOM XSS scanner) to run in a headless environment. Firefox is also installed so can be used with these add-ons.

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

0. Un-tar

   <tt><strong>
   tar zxf - -C /opt
   ln -s /opt/ZAP_2.4.3 /opt/zap
   </strong></tt>

0. Since ZAP does not come with a script, this script for Debian:

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

0. Use http://localhost or `http://127.0.0.1:8080` to reach the Proxy.

0. Automate settings:

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

0. Click Quick Start to, on the Information window, input the URL to scan, starting with `https`.
   
   The left pane Tree window provides the context history of URLs visited.

0. Run ZAP using the 'standard' zap.sh script.

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

## Other DAST vendors

  https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis

1. <a target="_blank" href="https://en.wikipedia.org/wiki/Veracode">Veracode</a> <a target="_blank" href="https://www.veracode.com/security/vulnerability-scanning-tools">Vulnerability Scanning Tools</a> which only scans Java, were acquired on Nov 5 2018 from Broadcom by private equity firm Thoma Bravo who also funded Compuware and Dynatrace, Solar Winds and McAfee <a target="_blank" href="https://thomabravo.com/2018/11/05/thoma-bravo-to-acquire-veracode-software-from-broadcom-inc-nasdaqavgo/">*</a>

2. WebInspect from MicroFocus (formerly HP), a part of the <a target="_blank" href="https://en.wikipedia.org/wiki/Fortify_Software">Fortify suite</a>, which consists of Fortify the SAST product.
   
3. <a target="_blank" href="https://www.checkmarx.com/">Checkmarx.com</a>, based in Israel, offers <a target="_blank" href="https://www.checkmarx.com/products/codebashing">Codebashing</a>, a developer education platform for secure coding training.

4. <a target="_blank" href="https://www.Synopsys.com/">Synopsys.com</a> acquired Black Duck, Coverity, and  
   <a target="_blank" href="https://en.wikipedia.org/wiki/Cigital">Cigital SecureAssist</a>, a lightweight IDE plugin that points out common security vulnerabilities in real time.

5. IBM AppScan

6. <a target="_blank" href="https://en.wikipedia.org/wiki/Parasoft"> Parasoft</a>

7. Tenable.io by Nessus


## Resources

Daniel Miessler's <a target="_blank" href="https://danielmiessler.com/projects/webappsec_testing_resources/">https://danielmiessler.com/projects/webappsec_testing_resources</a>

<a target="_blank" href="https://app.pluralsight.com/library/courses/owasp-zap-web-app-pentesting-getting-started/table-of-contents">Getting Started with OWASP Zed Attack Proxy (ZAP) for Web Application Penetration Testing</a>	
1h 40m video course 16 Feb 2017 by Mike Woolard


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
