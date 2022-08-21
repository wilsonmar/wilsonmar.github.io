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

## A new paradigm needed

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th> # </th><th> Traditional </th><th> Zero Trust </th></tr>
<tr valign="top"><td> 1. </td><td> On-premises data centers used
   </td><td> Public cloud used
   </td></tr>
<tr valign="top"><td> 2. </td><td> Perimeter-based security works all the time!
   </td><td> Network is always hostile!
   </td></tr>
<tr valign="top"><td> 3. </td><td> ... so no one is easedropping on traffic
   </td><td> ... so <strong>encrypt</strong> everything (in transit and at rest) 
   </td></tr>
<tr valign="top"><td> 4. </td><td> ... so no need to log activities
   </td><td> ... so <strong>log</strong> all traffic for forensic analysis later
   </td></tr>
<tr valign="top"><td> 5. </td><td> ... so components can be trusted between services 
   </td><td> ... so <strong>Authenticate and authorize</strong> all network traffic
   </td></tr>
<tr valign="top"><td> 6. </td><td> ... so no need to limit access duration
   </td><td> <strong>Limit time</strong> tokens are valid (assume credentials can be stolen)
   </td></tr>
<tr valign="top"><td> 7. </td><td> ... so static IP addresses can be used
   </td><td> ... so use user <strong>identity-based security</strong> using Multiple Factors
   </td></tr>
<tr valign="top"><td> 8. </td><td> ... so secrets can be shared
   </td><td> ... so assign the <strong>least-privilege</strong> to each user based on ACLs (Access Control Lists)
   </td></tr>
</table>

HashiCorp Vault provides the mechanisms to implement "Zero Trust" security principles mandated in US federal government:

1. Enable <strong>multi-factor authentication</strong> to augment protection
1. <strong>Centrally store</strong> and protect secrets like tokens, passwords, and certificates
1. Generate <a href="#DynamicSecrets">dynamic secrets</a> in databases and applications which are alive too short a time to steal.

## Resources

https://zerotrust.cyber.gov/ is the home page for the initiative

    Read OMB’s Federal Zero Trust Strategy. The goal of this strategy is to accelerate agencies toward a shared baseline of early zero trust maturity.

    Read CISA’s Zero Trust Maturity Model. The maturity model complements OMB’s Federal Zero Trust Strategy, and is designed to provide agencies with a roadmap and resources to achieve an optimal zero trust environment.

    Read CISA’s Cloud Security Technical Reference Architecture, a guide for agencies to leverage when migrating to the cloud securely. The document explains considerations for shared services, cloud migration, and cloud security posture management.

## History

This "Data Centric" focus was developed by Forrester's John Kindervag in 2010.


<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More on Security #

This is one of a series on Security:

{% include security_links.html %}

