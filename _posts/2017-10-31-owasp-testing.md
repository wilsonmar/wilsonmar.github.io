---
layout: post
title: "Test for OWASP using ZAP on the Broken Web App"
excerpt: "Practice penetration testing identifying security vulnerabilities in sample BWA app"
tags: [API, devsecops]
filename: owasp-testing.md
image:
# devsecops-diagram-784x232.png
  feature: https://user-images.githubusercontent.com/300046/32320696-dd1e8f82-bf7b-11e7-891b-6b248fba5a0a.png
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>


## Penetration (Pen) Testing Tools

Among <a target="_blank" href=" https://www.owasp.org/index.php/Appendix_A:_Testing_Tools">web app penetration testing tools</a>,
the <a target="_blank" href="https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project">Zed Attack Proxy (ZAP)</a>
is offered free, and is actively maintained by hundreds of international volunteers. 
Use it to scan for security vulnerabilities in your web applications while you are developing and testing your applications. 

ZAP is a tool for Dynamic App Security Testing (DAST) run while the app under test is running.

By contrast SAST (Static App Security Testing) tools focus on scanning application source code for vulnerabilities in coding. Static Application Security Testing (SAST) vendors include Veracode, Perforce, http://www.castsoftware.com/ and Checkmarx, which adds an agent running along the app to report to a central Security Handler, called Interactive App Security Testing (IAST).

Security tests should also cover the efficacy of Runtime Application Self-Protection (RASP) built within apps, rather than relying completely on the infrastructure Web Application Firewall (WAF).

## OWASP Top 10

ZAP looks for vulnerabilities described by the non-profit OWASP (Open Web Application Security Project)
<a target="_blank" href="https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project">OWASP (Open Web Application Security Project) Top 10</a> - <a target="_blank" href="https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf">2017 PDF</a>:

YouTube videos from F5 DevCentral 2017 by John Wagnon (and Description from OWASP):

   1. <a target="_blank" href="https://www.youtube.com/watch?v=rWHvp7rUka8&index=82&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC">Injection Attacks</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection">Description</a>, <a target="_blank" href="https://devcentral.f5.com/articles/owasp-mitigation-strategies-part-1-injection-attacks">blog article</a>)

   2. <a target="_blank" href="https://www.youtube.com/watch?v=mruO75ONWy8&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=84">Broken Authentication</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication">Description</a>)

   3. <a target="_blank" href="https://www.youtube.com/watch?v=2RKbacrkUBU&index=83&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC">Sensitive Data Exposure</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure">Description</a>)

   4. <a target="_blank" href="https://www.youtube.com/watch?v=g2ey7ry8_CQ&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=87">XML External Entities (XXE)</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)">Description</a>)

   5. <a target="_blank" href="https://www.youtube.com/watch?v=P38at6Tp8Ms&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=88">Broken Access Control</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control">Description</a>)

   6. <a target="_blank" href="https://www.youtube.com/watch?v=JuGSUMtKTPU&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=90">Security Misconfiguration</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration">Description</a>)

   7. <a target="_blank" href="https://www.youtube.com/watch?v=IuzU4y-UjLw&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=92">Cross-Site Scripting (XSS)</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)">Description</a>)

   8. <a target="_blank" href="https://www.youtube.com/watch?v=nkTBwbnfesQ&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=94">Insecure Deserialization</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization">Description</a>)

   9. <a target="_blank" href="https://www.youtube.com/watch?v=IGsNYVDKRV0&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=97">Using Components with Known Vulnerabilities</a>  (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities">Description</a>)

   10. <a target="_blank" href="https://www.youtube.com/watch?v=mruO75ONWy8&index=84&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC">Insufficient Logging and Monitoring</a> (<a target="_blank" href="https://www.owasp.org/index.php/Top_10-2017_A10-Insufficient_Logging%26Monitoring">Description</a>)
   <br /><br />

Cross-Site Request Forgery (CSRF)

There is also SAN's <a target="_blank" href="https://www.sans.org/top25-software-errors/">Top 25 Software Errors</a> that include
Insecure Interaction Between Components,
Risky Resource Management, and
Porous Defenses

Additionally:
* Payment Card Industry Data Security Standard (PCI DSS)
* Health Insurance Portability and Accountability Act (HIPAA)
* Motor Industry Software Reliability Association (MISRA)

## Test Scope

DAST cannot identify non-reflective vulnerabilities (i.e – Cross-Site Scripting) that don’t generate feedback when triggered.

## Get sample broken app

PROTIP: If you run ZAP against a server you don't control, you are hacking that site.

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

## Resources

<a target="_blank" href="https://app.pluralsight.com/library/courses/owasp-zap-web-app-pentesting-getting-started/table-of-contents">Getting Started with OWASP Zed Attack Proxy (ZAP) for Web Application Penetration Testing</a>	
1h 40m video course 16 Feb 2017 by Mike Woolard


## More

More about API usage and management:

{% include api_links.html %}

