---
layout: post
date: "2023-02-12"
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

UNDER CONSTRUCTION: Each line and box in the busy flowchart above will be converted to a video with gradual reveal.

This is a <strong>deep dive</strong> with commentry and warnings.

{% include whatever.html %}  

<hr />

There are MANY approaches:

## OWASP

Let's start with <a target="_blank" href="https://owasp.org/www-community/Threat_Modeling_Process">OWASP</a>'s 
summary of the process:

   * Step 1: <strong>Decompose</strong> the Application (Data Flow Diagrams showing External Dependencies, Entry Points, Exit Points, Assets, Trust Levels)

   * Step 2: Determine and <strong>Rank Threats</strong> (such as Microsoft's STRIDE)

   * Step 3: Determine <strong>Countermeasures and Mitigation</strong> (such as ASF)

https://www.wikiwand.com/en/Threat_model

## Micosoft

https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling


### Microsoft's STRIDE

1999, cybersecurity professionals Loren Kohnfelder and Praerit Garg at
Microsoft developed the acrostic "STRIDE" for their Threat Model Tool used to classify threats in applications:
   * Spoofing of user identity
   * Tampering
   * Repudiation
   * Information disclosure (privacy breach or data leak)
   * Denial of service (DoS)
   * Elevation of privilege
   <br /><br />

https://www.wikiwand.com/en/STRIDE_(security)

In 2004, Frank Swiderski and Window Snyder wrote “Threat Modeling,” by Microsoft press. In it they developed the concept of using threat models to create secure applications.

https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-getting-started

https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-feature-overview

https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats

https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-mitigations

## PASTA

PASTA (<a target="_blank" href="https://www.wiley.com/en-us/Risk+Centric+Threat+Modeling%3A+Process+for+Attack+Simulation+and+Threat+Analysis-p-9780470500965">Process for Attack Simulation and Threat Analysis</a>) (created in 2015 by Tony UcedaVelez and Marco M. Morana) is a <strong>attacker-centric</strong> methodology for dynamic threat identification, enumeration, and prioritization. 

It provides a seven-step process for aligning business objectives and technical requirements, taking into account compliance issues and business analysis.

After the threat model is created, security subject matter experts develop a detailed analysis of the identified threats. Finally, appropriate security controls can be enumerated. 

Defenders then take an asset-centric mitigation strategy around applications and infrastructure.



## Utilities needed

But if you're serious about this (and you need to be), you'll need a utility to store all the data for dicing and slicing (visualization).

<a target="_blank" href="https://www.synopsys.com/software-integrity/solutions/devsecops.html">Synopsis.com</a>
has a <a target="_blank" href="https://www.synopsys.com/glossary/what-is-threat-modeling.html">5-step approach</a> (for your money's worth):

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

## References

https://www.appsecengineer.com/blog-categories/threat-modeling


<hr />

## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
