---
layout: post
title: "OWASP testing with sample BWA (Broken Web App)"
excerpt: "Practice identifying security vulnerabilities in sample app"
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

## OWASP Top 10

YouTube videos from F5 DevCentral about <a target="_blank" href="https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project">OWASP (Open Web Application Security Project) Top 10</a> - <a target="_blank" href="https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf">2017 PDF</a>:

   1. <a target="_blank" href="https://www.youtube.com/watch?v=rWHvp7rUka8&index=82&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC">Injection Attacks</a>

   2. <a target="_blank" href="https://www.youtube.com/watch?v=mruO75ONWy8&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=84">Broken Authentication</a>

   3. <a target="_blank" href="https://www.youtube.com/watch?v=2RKbacrkUBU&index=83&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC">Sensitive Data Exposure</a>

   4. <a target="_blank" href="https://www.youtube.com/watch?v=g2ey7ry8_CQ&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=87">XML External Entities (XXE)</a>

   5. <a target="_blank" href="https://www.youtube.com/watch?v=P38at6Tp8Ms&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=88">Broken Access Control</a>

   6. <a target="_blank" href="https://www.youtube.com/watch?v=JuGSUMtKTPU&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=90">Security Misconfiguration</a>

   7. <a target="_blank" href="https://www.youtube.com/watch?v=IuzU4y-UjLw&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=92">Cross-Site Scripting (XSS)</a>

   8. <a target="_blank" href="https://www.youtube.com/watch?v=nkTBwbnfesQ&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=94">Insecure Deserialization</a>

   9. <a target="_blank" href="https://www.youtube.com/watch?v=IGsNYVDKRV0&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=97">Using Components with Known Vulnerabilities</a>

   10. <a target="_blank" href="https://www.youtube.com/watch?v=mruO75ONWy8&index=84&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC">Insufficient Logging and Monitoring</a>


## Penetration Testing Tools

Among web app penetration testing tools listed <a target="_blank" href="
https://www.owasp.org/index.php/Appendix_A:_Testing_Tools">here</a>,
the Zed Attack Proxy (ZAP) described <a target="_blank" href="https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project">here</a>
provides automated scanners to find vulnerabilities described by the non-profit 
OWASP (Open Web Application Security Project).

The Zed Attack Proxy (ZAP) is offered free, and is actively maintained by hundreds of international volunteers. It can help you automatically find security vulnerabilities in your web applications while you are developing and testing your applications. 

It's a tool for experienced pen-testers to use for manual security testing.
"Tools" is designed to be easy-to-use by people with a wide range of security experience and as such is ideal for developers and functional testers who are new to penetration testing. The tools include not just code, but also cheatsheets, documents, research.

## Test Scope

## Get sample broken app

PROTIP: If you run ZAP against a server you don't control, you are hacking that site.

Stand-up an instance of the BWA (Broken Web Application),
a collection of intentionally vulnerable web applications
distributed by OWASP in a Virtual Machine (VM) file used by Virtualbox, HyperV.
VMware Workstation on Windows or VMware Fusion on Mac:

0. Instantiate a server. <a target="_blank" href="https://groups.google.com/forum/#!topic/gce-discussion/SKdU6JMHbE8"> In Sep 2017</a> nested VT-x is supported on GCE, according to Paul R. Nash, Group Product Manager, Google Compute Engine.

0. Within the server, download:

   <pre><strong>
   curl -O https://sourceforge.net/projects/owaspbwa/files/latest/download
   </strong></pre>

   The OWASP_Broken_Web_Apps_VM_1.2.7z file downloaded is 1.7 GB (big!)
   because it contains various apps in Ruby, PHP, WordPress, etc.

   It's briefly described at
   https://owaspbwa.org, which resolves to
   https://code.google.com/archive/p/owaspbwa/

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

   https://www.youtube.com/watch?v=0dxzGK1ZPxA
   Beyond 1.0 from 2013 
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

