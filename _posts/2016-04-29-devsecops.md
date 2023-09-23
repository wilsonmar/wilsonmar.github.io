---
layout: post
date: "2023-09-05"
file: "devsecops"
title: "DevSecOps"
excerpt: "How to get people to use products and processes that yield faster competitive speed AND improved Security Posture throughout a secure SDLC"
tags: [devops, devsecops]
image:
# feature: devsecops-1900x500.png
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1688241741/devsecops-1900x500_gzm9lu.png
  credit: public.cyber.mil/devsecops
  creditlink: https://public.cyber.mil/devsecops/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

> "DevSecOps is a set of software development practices that combines software development (Dev), security (Sec), and information technology operations (Ops) to secure the outcome and shorten the development lifecycle."

## Do you have it covered?

The <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1688269750/DevSecOps-1092x511_fqmi5f.png">diagram above</a> identifies 14 processes (with a focus on automation and integration) to achieve a stronger <strong>secure posture</strong> across the various "pillars" of the software development lifecycle (SDLC): Develop, Build, Test, Release & Deploy, and Runtime.

What is the adoption completion percentage for each process/tool at your organization?

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> # </th><th> Pillar </th><th align="left"> <a href="#CompletionPct" title="Percentage of Completion">%</a> </th><th> Process </th></tr>
<tr valign="top"><td> 1. </td><td> PLAN: </td><td align="right"> __% </td><td>
   <a target="_blank" href="https://wilsonmar.github.io/threat-modeling/">Threat Modeling</a></td></tr>
<tr valign="top"><td> 2. </td><td> DEVELOP: </td><td align="right"> __% </td><td>
    Secure Coding (<a target="_blank" href="https://wilsonmar.github.io/github-data-security/">secrets in source code</a>, <a target="_blank" href="https://wilsonmar.github.io/owasp-testing/">OWASP Top 10</a>, etc.)</td></tr>
<tr valign="top"><td> 3. </td><td> DEVELOP:  </td><td align="right"> __% </td><td>
   Security as Code (<a target="_blank" href="https://wilsonmar.github.io/opa-rego/">OPA processing Rego policies</a>)</td></tr>
<tr valign="top"><td> 4. </td><td> <a href="#BUILD">BUILD</a>:  </td><td align="right"> __% </td><td>
   <a href="#SAST">SAST</a> within CI/CD <a target="_blank" href="https://wilsonmar.github.io/jenkins/">Jenkins</a> & SonarQube) pipelines</td></tr>
<tr valign="top"><td> 5. </td><td> TEST:  </td><td align="right"> __% </td><td>
   <a href="#DAST">DAST</a> (and <a href="#IAST">IAST</a>) of each file type</td></tr>
<tr valign="top"><td> 6. </td><td> TEST: </td><td align="right"> __% </td><td>
   (Network and app) <a href="#PenTest">Penetration Testing</a></td></tr>
<tr valign="top"><td> 7. </td><td> RELEASE: </td><td align="right"> __% </td><td>
   Digital Signing (generate Hashes to identify changes)</td></tr>
<tr valign="top"><td> 8. </td><td> DELIVER: </td><td align="right"> __% </td><td>
    Secure Transfer of (encrypted) data</td></tr>
<tr valign="top"><td> 9. </td><td> DEPLOY: </td><td align="right"> __% </td><td>
    Security Configuration (IaC by <a target="_blank" href="https://wilsonmar.github.io/hashicorp-terraform/">declarative Terraform</a>, <a target="_blank" href="https://wilsonmar.github.io/pulumi/">declarative Pulumi</a>)</td></tr>
<tr valign="top"><td> 10. </td><td> DEPLOY: </td><td align="right"> __% </td><td>
    Security Scan - SBOM (Sofware Bill of Materials) for SCA (Sofware Component Analysis)</td></tr>
<tr valign="top"><td> 11. </td><td> OPERATE: </td><td align="right"> __% </td><td>
    Security Patching NIST SP 800-40 <a target="_blank" href="https://wilsonmar.github.io/jfrog/">SCA (Software Composition Analysis)</a>, Configuration Management</td></tr>
<tr valign="top"><td> 12. </td><td> OPERATE: </td><td align="right"> __% </td><td>
    Security Audit (such as <a target="_blank" href="https://wilsonmar.github.io/soc2/">SOC2/ISO 27xxx</a>) reference Run-time App Security Protection (RASP) to monitor and block production traffic. </td></tr>
<tr valign="top"><td> 13. </td><td> MONITOR: </td><td align="right"> __% </td><td>
    Security Monitoring (and forwarding to central SIEM/SOAR system for alerting) NIST SP 800-92</td></tr>
<tr valign="top"><td> 14. </td><td> FEEDBACK: </td><td align="right"> __% </td><td>
    Security <strong>Trend Analytics</strong> Analysis; Bug Bounty programs</td></tr>
</table>

<a name="CompletionPct"></a>
The "%" column contains the current Percentage of Completion,
within a trend line over time.

Who does what?

## The Major brands

Gartner lumps the various activities together into their <a target="_blank" href="https://www.synopsys.com/software-integrity/engage/gartner-mq-auto/">2023 Gartner's Magic Quadrant for Application Security Testing</a>:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1687657345/owasp-gartner-23_eysgj7.png"><img alt="owasp-gartner-23.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1687657345/owasp-gartner-23_eysgj7.png"></a>


<a name="Synopsys"></a>

## Synopsys's range

Synopsys [on <a target="_blank" href="https://www.linkedin.com/showcase/sw_integrity/">LinkedIn</a>] 
operates in two seemingly different markets: EDA (Electronic Design Automation) used to build SoC (Systems on a Chip), and
<a target="_blank" href="https://www.youtube.com/@SynopsysSoftwareIntegrity">"Software Integrity"</a>.

Synopsys achieved its upper-right leader position through corporate acquisitions, which assembled a full set of tools to enhance security at each step in a secure software development lifecycle:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1687696954/devsecops-synopsys-2274x1154_g3cdpv.png"><img alt="devsecops-synopsys-2274x1154.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1687696954/devsecops-synopsys-2274x1154_g3cdpv.png"><br /><em>Click here for full screen</em></a>


<a name="Mature"></a>

## A Mature Approach to Scanning

<a target="_blank" href="https://www.synopsys.com/software-integrity/engage/">Gartner is concerned</a> about complex UI to what is sold as "all-in-one" but in reality, what can be a "patchwork" of products combined from different teams and thus work differently from each other.

However, Synopsys users have a single support organization versus needing to coordinate among various vendors on their own.

<a target="_blank" href="https://www.glassdoor.com/Reviews/Synopsys-Reviews-E2143.htm">Synopsys</a> has six products that span the same middle stages of the SDLC:

   * Coverity <a name="SAST">SAST (Static Application Security Testing)</a> looks at code (as stored statically in GitHub) [<a target="_blank" href="https://www.gartner.com/reviews/market/application-security-testing/vendor/synopsys/product/coverity-sast">review</a>]
   * WhiteHat <a name="DAST">DAST (Dynamic Application Security Testing)</a> looks at running code
   * Seeker <a name="IAST">IAST (Interactive Application Security Testing)</a> looks at agents running code dynamically [<a target="_blank" href="https://www.gartner.com/reviews/market/application-security-testing/vendor/synopsys/product/seeker-iast">review</a>]
   * Black Duck <a href="#SCA">SCA (Software Composition Analysis)</a> identifies open source packages which have been flagged with vulnerabilities in the US  National Vulnerability Database (NVD).
   <br /><br />

Synopsys combined separate tools into its <a target="_blank" href="https://www.synopsys.com/blogs/software-security/polaris-fast-static-sca/">Polaris fAST</a> (Application Security Testing) offering -- a cloud-based web/SaaS based on Synopsys Coverity® SAST, which includes services:

   * Onboarding and adoption services, which help teams bring new applications and team members onto the platform quickly
   * Triage services to help tune and remove noise from scan results
   * Troubleshooting services that provide automatic monitoring and fixing of interrupted scans
   <br /><br />

   * <a target="_blank" href="https://synopsys.skilljar.com/page/code-dx">Code Dx</a> ASPM
   * <a target="_blank" href="https://synopsys.skilljar.com/page/defensics">Defensics</a> (formerly Codenomicon)
   * <a target="_blank" href="https://www.synopsys.com/software-integrity/code-sight.html">Code Sight</a> has a plugin that searches for vulnerabilities in dependencies used, so that they can be fixed while developers are working with them in the JetBrains IDE.

Other offerings:

  * OpenText purchased Fortify and other software quality tools in its acquisition of Micro Focus on January 2023. Micros Focus acquired those products from HP, who acquired them from Mercury Interactive. Fortify is the earliest available enterprise software scanners.

  * <a target="_blank" href="https://www.gartner.com/reviews/market/mobile-application-security-testing/vendor/checkmarx/product/checkmarx-sast">Checkmarx</a>



<hr />

<a name="BUILD"></a>

## BUILD: What to look for:

1. Exposure of secrets in source code (such as passwords, API keys, etc.) and in configuration files (such as database connection strings, etc.)

1. Use of deprecated libraries (such as jQuery, etc.)

1. Use of vulnerable libraries (such as OpenSSL, etc.)

1. Use of vulnerable versions of libraries (such as OpenSSL, etc.)

1. Use of vulnerable versions of frameworks (such as Spring, etc.)

1. Use of vulnerable versions of operating systems (such as Windows, Linux, etc.)

1. Use of vulnerable versions of containers (such as Docker, Kubernetes, etc.)

1. Use of vulnerable versions of cloud services (such as AWS, Azure, etc.)

1. Use of vulnerable versions of databases (such as MySQL, Oracle, etc.)

1. Use of vulnerable versions of programming languages (such as Java, Python, etc.)

1. Use of vulnerable versions of compilers (such as GCC, etc.)

1. Use of vulnerable versions of build tools (such as Maven, Gradle, etc.)

1. Use of vulnerable versions of web servers (such as Apache, Nginx, etc.)

1. Use of vulnerable versions of application servers (such as Tomcat, etc.)

1. See if password is among the 1,000 most common passwords (dictionary attack)

1. See if login page detects a brute force attack (by trying all combinations of characters)

   PostgreSQL has a <a target="_blank" href="https://www.postgresql.org/docs/9.1/auth-pg-hba-conf.html">pg_hba.conf</a> file that can be configured to limit the number of login attempts.

1. Monitor logs for attack signatures (such as SQL injection, etc.)



## What are Scanners looking for?

   See my <a target="_blank" href="https://wilsonmar.github.io/owasp-testing/">OWASP Top 10 items</a> (with videos)
   
   API Top 20

   CWE Top 25
   
   PCI DSS
   
   MISRA®
   
   CERT C/C++, CERT Java, CERT Python?
   
   DISA STIG, 
   
   ISO 26262
   
   ISO/IEC TS 17961
   
   AUTOSAR®

<hr />

<a name="DAST"></a>

## DAST

DAST (Dynamic App Security Testing) analyzes how the program binary runs, dynamically. So source code is not needed. So it can be used by hackers. Tool vendors:
   * White Hat
   * OWASP ZAP proxy
   * Qualys
   * Veracode
   * Arachni web application security scanner framework
   <br /><br />
   
   https://juice-shop.herokuapp.com

<a name="IAST"></a>

## IAST

IAST (Interactive App Security Testing) instruments software after installing an agent. Runs based on access to code, HTTP traffic, library, back-end connections.
   * Synopsys
   * Checkmarx
   * Acunetix
   <br /><br />


<a name="RASP"></a>

## RASP

RASP (Run-time App Security Protection) combines DAST and IAST. It can be configured to block or monitor traffic.
   * Arxan
   * Imperva
   * Wallarm
   <br /><br />


## TL;DR: What it takes

Here are the various tools and processes a fully <strong>mature secure-minded organization</strong> would adopt:

1. The ultimate objective is for secure and efficient coding techniques to be <strong>applied while code is created</strong> rather than having security "inspected into" products.

   PROTIP: Professional-level skill cannot be obtained alone but requires mentoring and sharing of techiques from several others as part of life-long apprenticeships free of competition.

   Scanners are good at finding "low hanging fruit" (obvious ones that are easy to identify), but commonly fail to find many false negatives in custom code.
   
   To "nip bad quality code in the bud", developers can invoke static code scanners on their local machine before committing their code to the team gauntlet.

   The number of "false positives" are a key metric of a vendor's effectiveness because time is needed to investigate each one, which can be frustrating.

   https://ustelecom.org/research/2023-cybersecurity-culture-report/

2. The explosion of code generation "co-pilots" since 2022 will inevitably change the way programmers work.

   Code generated by either manual or automated means are still subject to defects (functional and security).

   So masterful "Prompt Engineering" from training of both computer models and human users is necessary -- to recognize when requirements are not being satisfied,
   
   <strong>Ongoing audits</strong> are needed to identify wayward models to identify different aspects of <strong>base data</strong> and how they impact algorithms.

3. PROTIP: Creating a culture of zealousness at refining and adopting security requires #blameless psychological safety.

   It's been said that DevOps is about culture. That also applies even more to DevSecOps.

   An inclusive and friendly culture would have issues shared among employees, which reduces effort of each worker discovering the same issues on their own.

   Like firemen practicing drills, developers can practice recognizing and <a target="_blank" href="https://github.com/teamed/quiz.git">fixing</a> <a target="_blank" href="https://wilsonmar.github.io/owasp-testing/"><strong>sample known-bad</strong> coding containing OWASP Top 10, API Top 20, etc.</a>

4. Inclusion of security considerations <strong>within the IDE (Integrated Development Environment)</strong>, such as <a target="_blank" href="https://wilsonmar.github.io/copilots/">coding CoPilot</a> AI code generators (using GPT, etc.)

   Security alerts within the IDE provides a safe (individualized) way to reveal criticisms without public shaming.

   * PROTIP: <a target="_blank" href="https://wilsonmar.github.io/copilots/">My notes on GitHub and Microsoft CoPilot</a>
   * <a target="_blank" href="https://www.synopsys.com/blogs/software-security/introducing-black-duck-copilot/">Black Duck CoPilot</a>, 
   * Code Sight, 
   * <a target="_blank" href="https://wilsonmar.github.io/text_editors">Microsoft's Visual Studio Code</a> add-on
   <br /><br />

5. <strong>Priorities of what is coded is driven using an Issues Tracker</strong> that balances time on various objectives.

   Synopsys AppSec Risk Insight. <a target="_blank" href="https://wilsonmar.github.io/jira">Atlassian Jira</a>, ServiceNow, etc.

   PROTIP: <strong>Transparency about defects and other debt is an indicator</strong> of organizational maturity, not a driver of it.

6. Provide advanced training and automation to manage complex code as a team <strong>SCM (Source Code Management)</strong> using a common repository 

   * write commit messages in GitHub (GitLab) to make troubleshooting easier
   * reconcile conflicts in code from different times and locations and people
   * use a central vault to store and retrieve secret values (rather than plain text on laptops waiting to be stolen)
   <br /><br />

   PROTIP: Common and disciplined application of coding standards requires a <strong>social contract</strong> as well as a technical one.
   The book [High Tech, High Touch](http://www.amazon.com/High-Tech-Touch-John-Naisbitt/dp/0767905415) popularized the concept (as I understand it) that more real personal physical attention is needed with heightened technology use.

   The new darling in 2023 is <a target="_blank" href="https://www.graphine.dev/">Graphine.dev</a> which enables faster collaboration among developers through enabling smaller "stackable" changes in code. <a target="_blank" href="https://www.youtube.com/watch?v=sBcd9uopLOY">VIDEO</a> The company brings together the founders of GitHub, Docker, and Netlify and is backed by Andreessen Horowitz, Sequoia Capital, and Kleiner Perkins. 

7. Build tools (Maven, Gradle, Scala Build Tool, NuGet, etc.) run within <strong>CI/CD pipelines</strong> (Jenkins, Travis CI, Circle CI, AppVeyor, GitHub Actions, etc.)

   https://www.synopsys.com/software-integrity/integrations.html

8. Code linters and <a href="#Scanners">scanners</a> (for each type of file) in CI/CD that <strong>stops a branch from being deployed</strong> if that branch doesn't meet all the rules.
   
   * SonarQube, Perforce
   * Terraform HCL IaC scanned using tfsec, Checkov, Sonatype, etc.
   * IaC https://github.com/configu/docs
   * Python code scanned using PEP8, Bandit, etc.
   * Java [Qulice](http://www.qulice.com/) (quality police) combines several scanners to apply **over 900** rules on just Java code.
   * etc.
   <br /><br />

   PROTIP: Even if develpers can catch all vulnerabilities, one advantage of feeback from automated scanners is that their criticism cannot be perceived as a personal attack and thus cause animosity within the team. Feedback from scanners is impartial, and does not take into account personality conflicts and prejudices.

9. <strong>Make it easy to use a private store of binary files</strong> (installers, Docker container images for Kubernetes, and other binary files)
 
   <a target="_blank" href="https://wilsonmar.github.io/jfrog">JFrog Artifactory</a>

10. Run policy-as-code checkers (using <a target="_blank" href="Open Policy Agent (OPA)</a>):

    * How to enforce use of tags
    <br /><br />

11. Verify that unauthorized changes have not occurred by referencing assets <strong>using hashes</strong> of file contents rather than file names and versions.

12. Provide an <strong>easy way to create documents</strong> - (writing docstrings in code, tags, etc.) so indexes of functions can be automatically generated; blogs


References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=Heor8BVa4A0&list=RDLVHeor8BVa4A0&start_radio=1&rv=Heor8BVa4A0&t=178" title="Dr. Jared DeMott of VDA Labs">VIDEO</a>: Static code analysis: pattern matching, procedural, data flow, and statistical analysis. 
Also included are examples of common software vulnerabilities such as memory corruption, buffer overflow and over reads, script injection, XSS and CSRF, command injection, and misconfigurations.

   * <a target="_blank" href="https://www.youtube.com/watch?v=mBQaUiq6rbQ">AppSec Decoded: the worst DevSecOps practices</a> by <a target="_blank" href="https://www.linkedin.com/in/tanya-janca/">RSA keynoter Tanya Janca</a> (SheHacksPurple Academy), with Taylor Armerding, Security Advocate.
 

## Where is the creativity?

Some may bristle at this "take it or leave it" approach
from <a target="_blank" href="http://www.yegor256.com/2014/08/13/strict-code-quality-control.html">
some</a>.

Does that stifle creativity?

When all code is known to follow a certain set of rules, 
the code is more **maintainable**.

There's another, perhaps future benefit.

**Automated refactoring** of the entire code base at once can occur with less worry and work.

What's more, when code is inevitably generated by machines,
the scanners will be there to catch their errors,
and thus accelerate results.

Thus, scanners ensure the conditions for speed and rapid adoption of innovation.


The source of coding violations can often be attributed to the training provided.
In an effort to simplify concepts for learning, examples provided in tutorials
are often not "production-worthy". Nevertheless, those examples are used out of habit.

In order for the automatic scanner to be a patient tutor,
it needs to explain how to do it correctly -- how to correct the errant code given --
rather than simply complaining and dismissing errant code.

And that's where live human tutoring is helpful -- to provide the nurturing,
the explanation of "why" in a way that the learner would best understand.

> MY PROPOSAL: A wiki with an entry that explains each rule, 
with links to explanations of underlying knowledge.
Such a public forum is where debates about the merits of each rule.

> "Where understanding abouds, acceptance will florish."

## Empathetic, specific, and kind feedback?

Some time back, a book named [High Tech, High Touch](http://www.amazon.com/High-Tech-Touch-John-Naisbitt/dp/0767905415) popularized
the concept (as I understand it) that more real personal physical attention
is needed with heightened technology use.

When one introduces a know bad piece of code, the other doesn't have to say a word,
and just let the scanner do the rejection.

This way, feeback cannot be perceived as a personal attack and thus cause animosity.

Discussions about code can then transcend from whether someone is a good person depending on whether they use spaces or tabs.


## Professional certifications

<a target="_blank" href="https://www.synopsys.com/support/training/badging-certification.html">
Synposys hands out "badges" on Codity</a> for each of its paid classes taken (with a 85% pass rate).
https://training.synopsys.com/learn/signin
   
<hr />

## References

Rather than repeating others, let me link to the most influencial pieces about DevOps:

* <a target="_blank" href="http://continuousdelivery.com/">http://continuousdelivery.com</a>
* <a target="_blank" href="https://12factor.net">12factor.net</a> (The Twelve Factor App)
* <a target="_blank" href="http://www.clearlytech.com/2014/01/04/12-factor-apps-plain-english/">12 Factor App in plain english</a>
* The acronym CAMS (Culture, Automation, Measurement, Sharing) was coined by Damon Edwards (@damonedwards) and John Willis (@botchagalupe), authors of DevOps Cafe, in the early 2010s. <a target="_blank" href="https://squadex.com/insights/how-to-implement-devops-with-cams/">*</a>
* <a href="https://landing.google.com/sre/interview/ben-treynor/">Google's what is Site Reliability Engineering?</a>
* <a href="https://content.pivotal.io/intersect/sre-in-15-minutes">SRE and the Value of Treating Operations as a Software Problem</a>
* <a href="https://learning.oreilly.com/library/view/the-site-reliability/9781492029496/">The Site Reliability Workbook</a>
* <a href="https://web.devopstopologies.com/images/2019-07-30--DOTs-types-thumb.png">DevOps Team Types</a>
* <a href="https://web.devopstopologies.com/images/2019-07-30--DOTs-anti-thumb.png">DevOps Anti-Types</a>
* <a href="https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819">BOOK: Team Topologies: Organizing Business and Technology Teams for Fast Flow</a>
* <a href="https://www.amazon.com/Practice-Cloud-System-Administration-Practices/dp/032194318X">Practice of Cloud System Administration: Designing and Operating Large Distributed Systems</a>
* <a target="_blank" href="http://download.microsoft.com/download/C/4/A/C4A14099-FEA4-4CB3-8A8F-A0C2BE5A1219/The%20Release%20Pipeline%20Model.pdf">Microsoft's Release Pipeline Model - Download PDF</a> is a high-level description before Azure DevOps appeared.
* https://continuousdelivery.com/implementing/patterns/

<hr />

## More about DevOps

{% include devops_links.html %}

