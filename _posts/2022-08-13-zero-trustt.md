---
layout: post
date: "2022-08-13"
file: "zero-trust"
title: "Zero Trust"
excerpt: "Evolve your traditional systems to new ways before your ransomware adversaries do."
tags: [security]
image:
# hold-the-door (one of the most prescient, shocking, and saddest scene from the Game of Thrones series)
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1661092262/hold-the-door-1900-500_ijs2wy.png
  credit: Junaidi on DeviantArt
  creditlink: https://www.deviantart.com/junaidi/art/Hold-the-Door-617862105
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The "Zero-Trust" "Data Centric" focus was coined in 2010 by John Kindervag when he was at Forrester.

> Zero Trust is a set of security principles that treat every component and user of a system as continuouly exposed to and potentially compromised by a malicious adversary. -- <a target="_blank" href="https://www.youtube.com/watch?v=6I6bnNdZ5XU&18m56s">VIDEO: "Zero Trust Explained in 4 mins"</a> by the MIT Lincoln Laboratory (the largest US federally funded research and development center), which has identified gaps in ZTA guidance


{% include whatever.html %}


## A new paradigm needed

Zero Trust addresses the outdated assumptions, the <a target="_blank" href="https://www.youtube.com/watch?v=FMMWSLIcaME" title="IBM Bob Kalka">"elephants in the room" which have been ignored</a>.

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th> # </th><th> Traditional </th><th> Zero Trust </th></tr>
<tr valign="top"><td> 1. </td><td> On-premises data centers used
   </td><td> Public cloud used
   </td></tr>
<tr valign="top"><td> 2. </td><td> "Castle and moat": Perimeter-based (firewall) security works all the time!
   </td><td> Network is always hostile!
   </td></tr>
<tr valign="top"><td> 3. </td><td> ... so assume no one is easedropping on traffic
   </td><td> ... so assume compromise - <strong>encrypt</strong> at rest and in transit, using mTLS & DNS
   </td></tr>
<tr valign="top"><td> 4. </td><td> ... so no need to log activities
   </td><td> ... so <strong>log</strong> all traffic for forensic analysis of context in a SIEM analytics system to detect issues. Map <strong>lateral movement</strong> (using Bloodhound or PingCastle)
   </td></tr>
<tr valign="top"><td> 5. </td><td> ... so traffic between components can be trusted <strong>implicitly</strong>
   </td><td> ... so explicityly and continuously <strong>authenticate and authorize</strong> all network traffic to prevent man-in-the-middle attacks (principle of "complete mediation")
   </td></tr>
<tr valign="top"><td> 6. </td><td> ... so allow access by default (on by default)
   </td><td> ... so <strong>off by default</strong> -- deny access by default.
   </td></tr>
<tr valign="top"><td> 7. </td><td> ... so no need to limit access duration
   </td><td> ... so  and <strong>limit time</strong> authorization tokens are valid (assume credentials can be stolen)
   </td></tr>
<tr valign="top"><td> 8. </td><td> ... so static IP addresses based on location
   </td><td> ... so use <strong>identity-based security</strong> with Multiple Factors
   </td></tr>
<tr valign="top"><td> 9. </td><td> ... so static long-running secrets
   </td><td> ... so <strong>generate dynamic secrets</strong> in databases and applications which are alive too short a time.
   </td></tr>
<tr valign="top"><td> 10. </td><td> ... so all-to-all connectivity is not impeded
   </td><td> ... so use <strong>brokered one-to-one connectivity (ZTNA)</strong> with "micro segmentation"
   </td></tr>
<tr valign="top"><td> 11. </td><td> ... so secrets can be shared for <strong>ease of use</strong>
   </td><td> ... so assign the <strong>least-privilege</strong> to each user based on ACLs (Access Control Lists), to limit "blast radius" of breaches
   </td></tr>
<tr valign="top"><td> 12. </td><td> ... so accounts can linger before shut-down
   </td><td> ... so <strong>centrally maintain user and component directories</strong> for dynamic decision-making to comprehensively yet quickly disable all secrets like tokens, passwords, and certificates
   </td></tr>
<tr valign="top"><td> 13. </td><td> ... so service info is broadcast for ease of reference
   </td><td> ... so hide version info (such as specify ServerTokens directive to ProductOnly)
   </td></tr>
</table>

HashiCorp Vault provides the mechanisms to implement "Zero Trust" security principles mandated in US federal government:

<a target="_blank" href="https://www.youtube.com/watch?v=yn6CPQ9RioA&list=RDCMUCKWaEZ-_VweaEx1j62do_vQ&index=25">
Zero Trust Explained in 4 mins</a>


## Resources

<a target="_blank" href="https://zerotrust.cyber.gov/">https://zerotrust.cyber.gov</a> 
is the home page for the initiative

   * Read OMB’s Federal Zero Trust Strategy. The goal of this strategy is to accelerate agencies toward a shared baseline of early zero trust maturity.

   * Read CISA’s Zero Trust Maturity Model. The maturity model complements OMB’s Federal Zero Trust Strategy, and is designed to provide agencies with a roadmap and resources to achieve an optimal zero trust environment.

   * Read CISA’s Cloud Security Technical Reference Architecture, a guide for agencies to leverage when migrating to the cloud securely. The document explains considerations for shared services, cloud migration, and cloud security posture management.

## History

* <a target="_blank" href="https://www.youtube.com/watch?v=FMMWSLIcaME">

* <a target="_blank" href="https://www.youtube.com/watch?v=FCWl-1Q-GIQ" title="Mar 25, 2021">
Zero Trust Security</a>

   * Human Identity - SSO
   * Machine Identity - Vault app identity, secret management, Data Protection
   * Machine to Machine - Consul Service Directory & Service Mesh
   * Human to Machine - 
   <br /><br />

* <a target="_blank" href="https://www.youtube.com/watch?v=VnEe239-3ss" title="14:51 Oct 12, 2021">
CXOTalk: What is Zero Trust Security? (with Palo Alto Networks)</a>

   * For users
   * For applications
   * For infrastructure
   <br /><br />

* <a target="_blank" href="https://www.youtube.com/watch?v=DLQAbJm4gFM" title="May 2, 2022">What is Zero Trust Network Access (ZTNA)? The Zero Trust Model, Framework and Technologies Explained</a> by The CISO Perspective

* <a target="_blank" href="https://www.youtube.com/watch?v=6q6c0Ld0qx0" title="Mar 10, 2020">How to approach a Zero Trust security model</a> by Jamey Heary, Cisco Distinguished Security Architect

* <a target="_blank" href="https://www.youtube.com/watch?v=DQrvhow5pJA" title="12:24">🔥Zero Trust Security Model Explained Simply | What is Zero Trust Security?</a> by SkillsBuild Training

* <a target="_blank" href="https://www.youtube.com/watch?v=hhS8VdGnfOU">Understanding and Getting Started with ZERO TRUST</a> by John Savill of Microsoft Azure fame.


https://www.youtube.com/watch?v=vskbjR1hyd8

<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More on Security #

This is one of a series on Security:

{% include security_links.html %}

