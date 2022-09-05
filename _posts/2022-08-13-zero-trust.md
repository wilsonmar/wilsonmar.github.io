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

"Zero-Trust" is not a product or logo name.

> Zero Trust is a set of security principles that treat every component and user of a system as continuouly exposed to and potentially compromised by a malicious adversary. -- <a target="_blank" href="https://www.youtube.com/watch?v=6I6bnNdZ5XU&18m56s">VIDEO: "Zero Trust Explained in 4 mins"</a> by the MIT Lincoln Laboratory (the largest US federally funded research and development center), which has identified gaps in ZTA guidance

The "Data Centric" focus was coined in 2010 by John Kindervag when he was at Forrester.


{% include whatever.html %}

https://www.youtube.com/watch?v=5sFOdpMLXQg
Nov 29, 2018
https://www.youtube.com/watch?v=5sFOdpMLXQg&list=RDCMUC2uPNhGken-ogEpJDi4ly6w&start_radio=1&rv=5sFOdpMLXQg&t=759

https://www.youtube.com/watch?v=EF_0dr8WkX8&list=RDCMUC2uPNhGken-ogEpJDi4ly6w&index=2

https://github.com/HASecuritySolutions/presentations
Justin Henderson (@SecurityMapper, GSE #108) 

<a target="_blank" href="https://www.sans.org/brochure/course/defensible-security-architecture-and-engineering/2712">PDF</a> 
<a target="_blank" href="https://www.sans.org/sec530">SANS 6-day $6,000 hands-on course "Defensible Security architecture and Engineering"</a> for GIAC (Global Information Assurance Certification) 
“The perimeter is dead” is a favorite saying in this age of mobile, cloud, and the Internet of Things, and we are indeed living in new a world of “de-perimeterization” where the old boundaries of “inside” and “outside” or “trusted” and
“untrusted” no longer apply. This changing landscape requires a change in mindset, as well as a repurposing of many devices.
Where does it leave our classic perimeter devices such as firewalls? What are the ramifications of
the “encrypt everything” mindset for devices such as Network Intrusion Detection Systems?

In this course, students will learn the fundamentals of up-to-date defensible security architecture.
There will be a heavy focus on leveraging current infrastructure (and investment), including
switches, routers, and firewalls. Students will learn how to reconfigure these devices to better
address the threat landscape they face today. The course will also suggest newer technologies to
aid in building a robust security infrastructure.

While this is not a monitoring course, it will dovetail nicely with continuous security monitoring,
ensuring that security architecture not only supports prevention, but also provides the critical
logs that can be fed into a Security Information and Event Management (SIEM) system in a
Security Operations Center.

SECTION 1: Defensible Security Architecture and Engineering
SECTION 2: Network Security Architecture and Engineering
SECTION 3: Network-Centric Security
SECTION 4: Data-Centric Security
SECTION 5: Zero-Trust Architecture: Addressing the Adversaries
SECTION 6: Hands-On Secure-the-Flag Challenge


SECTION 1: Defensible Security Architecture and Engineering
Section 1 of the course describes hardening systems and networks at every
layer, from layer one (physical) to layer seven (applications and data). To quote
Richard Bejtlich’s The Tao of Network Security Monitoring, defensible networks
“encourage, rather than frustrate, digital self-defense.” The section begins with
an overview of traditional network and security architectures and their common
weaknesses. The defensible security mindset is “build it once, build it right.”
All networks must perform their operational functions effectively, and security
can be complementary to this goal. It is much more efficient to bake security in
at the outset than to retrofit it later. The discussion will then turn to layer one
(physical) and layer two (data link) best practices, including many “ripped from
the headlines” tips the course authors have successfully deployed in the trenches
to harden infrastructure in order to prevent and detect modern attacks. Examples
include the use of private VLANs, which effectively kills the malicious client-toclient pivot, and 802.1X and NAC, which mitigate rogue devices. Specific Cisco IOS
syntax examples are provided to harden switches.
TOPICS: Traditional Security Architecture Deficiencies; Defensible Security
Architecture; Threat, Vulnerability, and Data Flow Analysis; Layer 1 Best Practices;
Layer 2 Best Practices; Netflow

SECTION 4: Data-Centric Security
Organizations cannot protect something they do not know exists. The problem is
that critical and sensitive data exist all over. Complicating this even more is that
data are often controlled by a full application stack involving multiple services that
may be hosted on-premise or in the cloud. Section 4 focuses on identifying core
data where they reside and how to protect those data. Protection includes the use
of data governance solutions and full application stack security measures such
as web application firewalls and database activity monitoring, as well as keeping
a sharp focus on securing the systems hosting core services such as on-premise
hypervisors, cloud computing platforms, and container services such as Docker.
The data-centric security approach focuses on what is core to an organization
and prioritizes security controls around it. Why spend copious amounts of time
and money securing everything when controls can be optimized and focused on
securing what matters? Let’s face it: Some systems are more critical than others.
TOPICS: Application (Reverse) Proxies; Full Stack Security Design; Web Application
Firewalls; Database Firewalls/Database Activity Monitoring; File Classification;
Data Loss Prevention (DLP); Data Governance; Mobile Device Management (MDM)
and Mobile Application Management (MAM); Private Cloud Security; Public Cloud
Security; Container Security

SECTION 3: Network-Centric Security
Organizations own or have access to many network-based security technologies
ranging from next-generation firewalls to web proxies and malware sandboxes.
Yet the effectiveness of these technologies is directly affected by their
implementation. Too much reliance on built-in capabilities like application
control, antivirus, intrusion prevention, data loss prevention, or other automatic
evil-finding deep packet inspection engines leads to a highly preventative-focused
implementation, with huge gaps in both prevention and detection. Section 3
focuses on using application layer security solutions that an organization already
owns with a modern mindset. By thinking outside the box, even old controls like a
spam appliance can be used to catch modern attacks such as phishing via cousin
domains and other spoofing techniques. And again, by engineering defenses for
modern attacks, both prevention and detection capabilities gain significantly.
TOPICS: NGFW; NIDS/NIPS; Network Security Monitoring; Sandboxing; Encryption;
Secure Remote Access; Distributed Denial-of-Service (DDOS)

SECTION 2: Network Security Architecture and Engineering
Section 2 continues hardening the infrastructure and moves on to layer three:
routing. Actionable examples are provided for hardening routers, with specific
Cisco IOS commands to perform each step. The section then continues with a
deep dive on IPv6, which currently accounts for 23% of Internet backbone traffic,
according to Google, while simultaneously being used and ignored by most
organizations. This section will provide deep background on IPv6, discuss common
mistakes (such as applying an IPv4 mindset to IPv6), and provide actionable
solutions for securing the protocol. The section wraps up with a discussion of VPN
and stateful layer three/four firewalls.
TOPICS: Layer 3: Router Best Practices; Layer 3 Attacks and Mitigation; Layer
2 and 3 Benchmarks and Auditing Tools; Securing SNMP; Securing NTP; Bogon
Filtering, Blackholes, and Darknets; IPv6; Securing IPv6; VPN; Layer 3/4 Stateful
Firewalls; Proxy

SECTION 6: Hands-On Secure-the-Flag Challenge
The course culminates in a team-based Design-and-Secure-the-Flag competition.
Powered by NetWars, day six provides a full day of hands-on work applying the
principles taught throughout the week. Your team will progress through multiple
levels and missions designed to ensure mastery of the modern cyber defense
techniques promoted throughout this course. Teams will assess, design, and
secure a variety of computer systems and devices, leveraging all seven layers of
the OSI model.
TOPICS: Capstone – Design/Detect/Defend

SECTION 5: Zero-Trust Architecture: Addressing the Adversaries
Already in Our Networks
Today, a common security mantra is “trust but verify.” But this is a broken
concept. Computers are capable of calculating trust on the fly, so rather than
thinking in terms of “trust but verify” organizations should be implementing
“verify then trust.” By doing so, access can be constrained to appropriate levels
at the same time that access can become more fluid. This section focuses on
implementing a zero-trust architecture where trust is no longer implied but must
be proven. By doing so, a model of variable trust can be used to change access
levels dynamically. This, in turn, allows for implementing fewer or more security
controls as necessary given a user’s and a device’s trust maintained over time.
The focus is on implementing zero trust with existing security technologies to
maximize their value and impact for an organization’s security posture. During
this section encryption and authentication will be used to create a hardened
network, whether external or internal. Also, advanced defensive techniques will
be implemented to stop modern attack tools in their tracks while leaving services
fully functional for authorized assets.
TOPICS: Zero-Trust Architecture; Credential Rotation; Compromised Internal
Assets; Securing the Network; Tripwire and Red Herring Defenses; Patching;
Deputizing Endpoints as Hardened Security Sensors; Scaling Endpoint Log
Collection/Storage/Analysis

## A new paradigm needed

Zero Trust addresses the outdated assumptions, the <a target="_blank" href="https://www.youtube.com/watch?v=FMMWSLIcaME" title="IBM Bob Kalka">"elephants in the room" which have been ignored</a>.

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th> # </th><th> Traditional </th><th> Zero Trust </th></tr>
<tr valign="top"><td> 1. </td><td> On-premises data centers with little outside connections
   </td><td> Public cloud data centers with many external connections (credit card processing, etc.)
   </td></tr>
<tr valign="top"><td> 2. </td><td> "Castle and moat": Perimeter-based (firewall) 
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

