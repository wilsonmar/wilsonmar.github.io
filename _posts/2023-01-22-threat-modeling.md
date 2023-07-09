---
layout: post
date: "2023-07-08"
file: "threat-modeling"
title: "Threat Modeling"
excerpt: "This is perhaps the most impactful analysis, considering the importance and urgency of keeping your organization from being stolen"
tags: [security]
image:
# feature: pic data center slice 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622043/8b1f9cce-0584-11e6-8b9f-4b6db5bb6e37.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

{% include whatever.html %}  

<hr />

There are MANY approaches:

## OWASP's Threat Modeling

Let's start with <a target="_blank" href="https://owasp.org/www-community/Threat_Modeling_Process">OWASP</a>'s summary of the process:

   * Step 1: <strong>Decompose</strong> the Application (Data Flow Diagrams showing External Dependencies, Entry Points, Exit Points, Assets, Trust Levels)

   * Step 2: Determine and <strong>Rank Threats</strong> (such as <a href="#STRIDE">Microsoft's STRIDE (below)</a>)

   * Step 3: Determine <strong>Countermeasures and Mitigation</strong> (such as ASF)

https://www.wikiwand.com/en/Threat_model

### Microsoft's STRIDE

1999, cybersecurity professionals Loren Kohnfelder and Praerit Garg at
Microsoft developed the acrostic "STRIDE" for their Threat Model Tool used to classify threats in applications: [<a target="_blank" href="https://www.wikiwand.com/en/STRIDE_(security)">Wikiwand</a>]:

   * Spoofing of user identity
   * Tampering
   * Repudiation
   * Information disclosure (privacy breach or data leak)
   * Denial of service (DoS)
   * Elevation of privilege
   <br /><br />

In 2004, Frank Swiderski and Window Snyder wrote “Threat Modeling,” by Microsoft press. In it they developed the concept of using threat models to create secure applications.

   * https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling
   * https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-getting-started
   * https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-feature-overview
   * https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats
   * https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-mitigations

<a name="PASTA"></a>

## PASTA

PASTA (<a target="_blank" href="https://www.wiley.com/en-us/Risk+Centric+Threat+Modeling%3A+Process+for+Attack+Simulation+and+Threat+Analysis-p-9780470500965">Process for Attack Simulation and Threat Analysis</a>) (created in 2015 by Tony UcedaVelez and Marco M. Morana) is a <strong>attacker-centric</strong> methodology for dynamic threat identification, enumeration, and prioritization. 

It provides a seven-step process for aligning business objectives and technical requirements, taking into account compliance issues and business analysis.

After the threat model is created, security subject matter experts develop a detailed analysis of the identified threats. Finally, appropriate security controls can be enumerated. 

Defenders then take an asset-centric mitigation strategy around applications and infrastructure.



## Synopsys Utilities needed

<a target="_blank" href="https://www.synopsys.com/software-integrity/solutions/devsecops.html">Synopsys.com</a> sells a utility to store all your threat data for dicing and slicing (visualization). 

They offer a <a target="_blank" href="https://www.synopsys.com/glossary/what-is-threat-modeling.html">5-step approach</a>:

1.  Define the <strong>scope and depth</strong> of analysis. Determine the scope with stakeholders, then break down the depth of analysis for individual development teams so they can threat model the software.

2.  Gain a <strong>visual understanding</strong> of what you’re threat modeling. Create a <strong>diagram</strong> of the major system components (e.g., application server, data warehouse, thick client, database) and the <strong>interactions</strong> among those components.

3.  <strong>Model the attack possibilities</strong>. Identify software assets, security controls, and threat agents and diagram their locations to create a security model of the system. Then identify what could go wrong (i.e., the threats) using methods like Microsoft's STRIDE.

4.  <strong>Identify threats</strong>. Produce a list of potential attacks by asking questions such as:

    * Are there paths where a threat agent can reach an asset without going through a control?

    * Could a threat agent defeat this security control?

    * What must a threat agent do to defeat this control?

5.  Create a <strong>traceability matrix</strong> of missing or weak security controls. Consider the threat agents and follow their control paths.
    
    If you reach the software asset without going through a security control, that’s a potential attack. 

    If you go through a control, consider whether it would halt a threat agent or whether the agent would have methods to bypass it.

## Threat Maps

Listed at https://hackersonlineclub.com/live-cyber-attack-maps/

* <a target="_blank" href="https://livethreatmap.radware.com/">livethreatmap.radware.com</a> shows top scanned TCP ports (5900, 22, 23, 80).

* <a target="_blank" href="https://www.deteque.com/live-threat-map/">deteque.com/live-threat-map</a> lists botnet threats by country (China, India, US, etc.) and by ISP (ril.com).

* <a target="_blank" href="https://threatmap.checkpoint.com/">threatmap.checkpoint.com</a> gets my prize for the clearest map. The top targeted countries and industries are listed.

* <a target="_blank" href="https://threatmap.bitdefender.com/">threatmap.bitdefender.com</a> features infections, attacks, and spam.

* <a target="_blank" href="https://talosintelligence.com/fullpage_maps/pulse">Talos</a> shows top senders of spam and malware (country and organization).

* <a target="_blank" href="https://securitycenter.sonicwall.com/m/page/worldwide-attacks">securitycenter.sonicwall.com/m/page/worldwide-attacks</a>
shows top attack origins (US, Austria, Denmark) and targets (US, UK, India).

* <a target="_blank" href="https://www.digitalattackmap.com/#anim=1&color=0&country=US&list=0&time=18212&view=map">digitalattackmap.com</a> is a part of Jigsaw (formerly Google Ideas) provides a gallery of past attacks. The map is based on Arbor's ATLAS threat intelligence system with data sourced from over 300 ISP customers and 130 Tbps of global traffic.

* <a target="_blank" href="https://www.akamai.com/internet-station/cyber-attacks">akamai.com/internet-station/cyber-attacks</a> is now a blog rather than Real-Time Web Monitor.

* <a target="_blank" href="https://www.redlegg.com/blog/cyber-threat-maps">Subscribe</a> to <a target="_blank" href="https://www.redlegg.com/blog">RedLegg's monthly Security Vulnerability Bulletin</a>

* <a target="_blank" href="https://threatmap.fortiguard.com/">threatmap.fortiguard.com</a> shows attacks from and to points (countries) on a map.

* <a target="_blank" href="https://www.digitalattackmap.com/#anim=1&color=0&country=ALL&list=0&time=18763&view=map">digitalattackmap.com</a> shows DDoS attacks worldwide.

* <a target="_blank" href="https://cybermap.kaspersky.com/">cybermap.kaspersky.com</a> Real-Time Map shows, by country, detections observed by these <a target="_blank" href="https://cybermap.kaspersky.com/subsystems">subsystems showing malware detection flow</a>:
   * OAS (On-Access Scan) - when objects are accessed during open, copy, run, or save operations.
   * ODS (On Demand Scanner) - when the user manually selects the ’Scan for viruses’ option in the context menu.
   * MAV (Mail Anti-Virus) - when new objects appear in an email application (Outlook, The Bat, Thunderbird).
   * WAV (Web Anti-Virus) - when the html page of a website opens or a file is downloaded. It checks the ports specified in the Web Anti-Virus settings.
   * IDS (Intrusion Detection System) shows network attacks detection flow.
   * VUL (Vulnerability Scan) shows vulnerability detection flow.
   * KAS (Kaspersky Anti-Spam) shows suspicious and unwanted email traffic discovered by Kaspersky’s Reputation Filtering technology.
   * BAD (Botnet Activity Detection) shows statistics on identified IP-addresses of DDoS-attacks victims and botnet C&C (Command-and-Control) servers. These statistics were acquired with the help of the DDoS Intelligence system (part of the solution Kaspersky DDoS Protection).
   * RMW (Ransomware) shows ransomware detection flow.

* <a target="_blank" href="https://www.fireeye.com/cyber-map/threat-map.html">fireeye.com/cyber-map/threat-map.html</a> returns a 404.


## References

https://www.appsecengineer.com/blog-categories/threat-modeling


<hr />

## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
