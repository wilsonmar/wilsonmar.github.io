---
layout: post
date: "2024-02-19"
file: "attacks"
title: "(Mitre's) Attacks"
excerpt: "How to use Mitre's ATT&CK & Googlers' SLSA frameworks to protect IT assets"
tags: [DevSecOps, Security]
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

Mitre (a research lab funded by the US government) defined Mitre's ATT&CK to present for each stage in a typical "kill chain" the TTPs (Tactics + Techniques + Procedures) how adversaries attack computer systems. Use it to analyze the <strong>kill chain</strong> adversaries could possibly use to get in, do damage, and cover their tracks. All to prevent that in the future.

{% include whatever.html %}

Mouse over each TTP for a T number referencing the Procedures, Assets, Mitigations, and Detection within each variation of Mitre's original ATT&ACK framework:

* The ATT&CK Navigator v2 at <a target="_blank" href="https://mitre-attack.github.io/attack-navigator/v2/enterprise/">https://mitre-attack.github.io/attack-navigator/v2/enterprise/</a> is a web-based tool for annotating and exploring ATT&CK matrices. It can be used to visualize defensive coverage, red/blue team planning, the frequency of detected techniques, etc  

   <a target="_blank" href="https://mitre-attack.github.io/attack-navigator/v2/enterprise/"><img alt="attack-v2-240206-3804x2228.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1707360148/attack-v2-240206-3804x2228_yrkze4.png"><br />
   <a target="_blank" href="https://mitre-attack.github.io/attack-navigator/v2/enterprise/">https://mitre-attack.github.io/attack-navigator/v2/enterprise/"><img alt="attack-v2b-240206-3822x1802.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1707360411/attack-v2b-240206-3822x1802_sbbnzc.png"></a>

   * Above generated from <a target="_blank" href="https://mitre-attack.github.io/attack-navigator/">https://mitre-attack.github.io/attack-navigator</a> 
   * <a target="_blank" href="https://www.youtube.com/watch?v=GYyLnff2XRo">VIDEO: Introduction</a>
   <br /><br />

   NOTE: "Reconnaissance" and "Resource Development" stages are not evaluated because it's difficult to collect information about them.

* <a target="_blank" href="https://atlas.mitre.org/">https://atlas.mitre.org</a> adds columns for AI & ML (Machine Learning).

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1706116271/attack-atlas-2401240-3628x770_oevrcg.png"><img alt="attack-atlas-2401240-3628x770.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1706116271/attack-atlas-2401240-3628x770_oevrcg.png"></a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=3FN9v-y-C-w">VIDEO: Intro</a>
   * <a target="_blank" href="https://www.linkedin.com/in/christina-liaghati/">Dr. Christina Liaghati</a> <a target="_blank" href="https://www.youtube.com/watch?v=rm1ECOgG6Bg">explains</a> the <a target="_blank" href="https://www.youtube.com/watch?v=adUifZ_E208">MLSecOps</a> needed to <a target="_blank" href="https://www.youtube.com/watch?v=BTN3WDl8sNs">harden</a> against the TTPs
   * <a target="_blank" href="https://www.youtube.com/watch?v=h7j7zl6xrdc">AI Threats & Vulnerabilities</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=qHPil2DwqW8&t=4m43s" title="Feb 6, 2024">SANS AI Security Trends</a> by Kirk Trychel
   <br /><br />

* <a target="_blank" href="https://attack.mitre.org/tactics/enterprise/">https://attack.mitre.org/tactics/enterprise</a> provides specific TTPs for each operating system. This is for ICS (Industrial Control Systems):

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1706151145/attack-mitre-ics-240124-2750x1466_vjd7cn.png"><img alt="attack-mitre-ics-240124-2750x1466.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1706151145/attack-mitre-ics-240124-2750x1466_vjd7cn.png"></a>

* <a target="_blank" href="https://www.dragos.com/mitre-attack-for-ics/">Dragos.com</a>, a MSPP specializing in OT (Operational Technologies) used by Industrial Control System (ICS), modified the framework for OT:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1706117642/attack-dragos-240124-3814x1230_atws8j.png"><img alt="attack-dragos-240124-3814x1230.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1706117642/attack-dragos-240124-3814x1230_atws8j.png"></a>

* Users of Exabeam shows a dashboard containing a Threat count for each stage:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1705885049/threat-mitre-exabeam-1390x693_jpugt2.png"><img alt="threat-mitre-exabeam-1390x693" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1705885049/threat-mitre-exabeam-1390x693_jpugt2.png"></a>


## Attack Tactics

1. Reconnaissance
2. Resource Development

3. Initial Access
4. ML Model Access (not in standard & Dragos)
5. Execution
6. Persistence (not in Dragos)
7. Privilege Escalation
8. Defense Evasion

9. Credential Access (not in Dragos)
10. Discovery
11. Lateral Movement (not in ML)
12. Collection
13. Command and Control or ML Attack Staging or "Inhibit Response Function" in Dragos

14. Exfiltration (or Impair Process Control in Dragos)
15. Impact


### Alphabetical order

<a target="_blank" href="https://atomicredteam.io/atomics/">atomicredteam.io/atomics</a>

12) Collection<br />
13) Command And Control<br />
&nbsp;9) Credential Access<br />
&nbsp;8) Defense Evasion<br />
10) Discovery<br />
&nbsp;5) Execution<br />
14) Exfiltration<br />
15) Impact<br />
&nbsp;3) Initial Access<br />
11) Lateral Movement<br />
&nbsp;6) Persistence<br />
&nbsp;7) Privilege Escalation<br />
&nbsp;1) Reconnaissance<br />


## SLSA Threats

The SLSA (Supply chain Levels for Software Artifacts)	<a target="_blank" href="https://slsa.dev/spec/v0.1/levels">standards and controls</a> (<a targete="_blank" href="https://google.github.io/building-secure-and-reliable-systems/raw/ch14.html#hermeticcomma_reproduciblecomma_or_veri">from Googlers</a>) define how to build secure resilient software using a secure supply chain. Its aim is to stop tampering such as <a target="_blank" href="https://slsa.dev/spec/v1.0/threats">this series of threats</a>:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1706322265/attack-slsa-2138x1466_przkb0.png"><img alt="attack-slsa-2138x1466.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1706322265/attack-slsa-2138x1466_przkb0.png"></a>

Each threat is addressed by controls defined in <a target="_blank" href="https://wilsonmar.github.io/actions/">my list of actions to secure the software supply chain</a> grouped along three "tracks" (aspects) of threats in the supply chain:
   * Source code threats -> Check Expectations
   * Build threats -> Check Dependencies
   * Dependency threats -> Check SLSA Build level
   <br /><br />

## NIST AI RMF 

The NIST AI Risk Management Framework (AI RMF 1.0) and companion Playbook
at https://www.nist.gov/itl.ai-risk-management-framework
focuses on these requirements:
   * Valid & Reliable
   * Safe
   * Secure & resilient
   * Explainable & Interpretable
   * Privacy-Enhanced
   * Fair: With Harmful Bias managed
   * Accountable & Transparent
   <br /><br />

## OWASP

The <a target="_blank" href="https://owasp.org/www-project-top-10-for-large-language-model-applications/">
OWASP Top 10 for LLM at https://owasp.org/www-project-top-10-for-large-language-model-applications</a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1707363217/owasp-llm-240206-3424x1860_byoqen.png"><img alt="owasp-llm-240206-3424x1860.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1707363217/owasp-llm-240206-3424x1860_byoqen.png"></a>

   * https://llmtop10.com/
   * https://www.youtube.com/watch?v=cYuesqIKf9A by IBM
   * https://www.youtube.com/watch?v=J1auLaU9SAA OWASP Cincinnati meetup fea. Steve Wilson of Contrast Sec.
   * https://snyk.io/blog/addressing-risks-in-the-owasp-top-10-for-llms/
   <br /><br />

## Questions

TODO: Add based on each stage in the kill chain:

1. Initial Access vector -- How did the attacker get in?
2. How is the adversary accessing the environment?
3. How did the attacker move laterally? (RDP, SSH, network shares, malware, etc.)
4. How is the adversary maintaining control persistence? (How are they staying in?) 
5. How is the attacker communicating with the C2 (Command and Control) server?
6. What is the method of persistence (malware backdoor, webshell, legitimate credentials, remote tools, etc.)?
7. What is the attacker doing on the system? (What commands are they running?)
8. Has data been exfiltrated and if so, what kind of data and via what mechanism?

<hr />

## Resources

<a target="_blank" href="https://www.youtube.com/watch?v=iROI_8Psip8&list=PLi04cDmxUX2tyKB87n1wsBtYEGgmmrTrg&index=4&t=11m19s">VIDEO</a>:

https://github.com/deanbushmiller/ATTACK/blob/main/Layers-for-navigator/ATTACK-Layers-in-Navigator.pdf

