---
layout: post
date: "2024-02-05"
file: "feature-flags"
title: "Feature flags"
excerpt: "Evaluate the options for real-time feature configuration and impact control, coded in Python and other languages"
tags: [python, coding]
image:
# feature-flags-1900x500.png
  feature: https://user-images.githubusercontent.com/300046/134320061-da7eeef4-d7e2-41d4-a2c7-42f91bf65d59.png
  credit: Justin Baker, 2016
  creditlink: https://taplytics.com/blog/feature-flags-use-cases-benefits/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article describes use of "feature flags" to finely control the "blast radius" of changes, 
done in order to deliver changes faster while minimizing risk.

{% include whatever.html %}

Traditionally, new or updated features made available via a software deployment become visible to ALL users at the same time. 
And to fix a poorly-implemented feature requires an immediately roll back to the prior version, or to create a fix as quickly as possible and roll forward by deploying a new version. That is risky and stressful.

"Upgrade infrastructure safely. Change configurations on the fly. Dynamically control everything in real-time."

Easier said than done.

Feature flags enable "testing in production".


<a name="Why"></a>

## Run-time feature flags

BLOG: https://dzone.com/articles/feature-flags-are-the-answer-to-retailers-holiday

Martin Fowler calls <a target="_blank" href="https://martinfowler.com/articles/feature-toggles.html">Feature Toggles</a> a <a target="_blank" href="https://martinfowler.com/bliki/FeatureToggle.html">design pattern</a>:

> "Toggles introduce complexity. We can keep that complexity in check by using smart toggle implementation practices and appropriate tools to manage our toggle configuration, but we should also aim to constrain the number of toggles in our system.""

So feature flags are now a central facet of programming templates.

So, different implementations exist for each language.


Many systems already provide services for managing feature flags and reporting/analysis:

   * <a href="#argparse">argparse and utilities in Python</a>
   * <a href="#LaunchDarkly">LaunchDarkly</a> SaaS
   * <a href="#Flagon">Flagon</a>
   * <a href="Metrikus">Metrikus</a>
   <br /><br />

Jira has a "Feature Flags" tab:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/125816357-790f7657-ad40-4f2a-9a8b-26e8b859aa7c.png">
<img alt="featureflags-in-jira-931x433.png" href="https://user-images.githubusercontent.com/300046/125816357-790f7657-ad40-4f2a-9a8b-26e8b859aa7c.png"></a>


<hr />

<a name="argparse"></a>

## Python

argparse is a built-in module of Python to enable user-friendly command-line interfaces.

See https://docs.python.org/3/library/argparse.html


The list of utilities at <a target="_blank" href="http://featureflags.io/python-feature-flags/">"The Hub for Feature Flag Driven Development"</a> is rather disappointing.

* https://github.com/trustrachel/Flask-FeatureFlags by @trustrachel Sanders was archived in 2015.

* https://github.com/disqus/gutter was archived Dec 17, 2015.

* https://github.com/venmo/feature_ramp by Amanda Schloss and Anthony Yim
for "Toggling and ramping features via a lightweight Redis backend." has not been updated since Aug 21, 2015.


<a name="LaunchDarkly"></a>

## LaunchDarkly

If you can a spare $90/month, <a target="_blank" href="https://launchdarkly.com/">https://launchdarkly.com</a> provides a GUI from a server that turn tags on and off.

Your program would query their server real-time to determine what to do.

The server has "Pluggable configuration backends".

CAUTION: This architecture may not be approapriate if you're concerned about excess bandwidth usage
and possible leak of secret data over the wire.

PROTIP: It's shiny unique feature is support for default fallback calls.

As with any server, it has logging features.
For more money, it integrate with audit logs, and analytics with user segmentation.

For an additional $390/month, you get support for A/B experimentation.

BLAH: Wish they would offer a free edition.


<a name="Flagon"></a>

## Flagon

<a target="_blank" href="https://github.com/ashcrow/flagon">https://github.com/ashcrow/flagon</a>
was last updated May 20, 2017 by <a target="_blank" href="https://stevemilner.org/">Stephen Milner</a> (@ashcrow), now <a target="_blank" href="https://www.linkedin.com/in/stevemilner/">CoreOS boss at Red Hat</a>.

It's based on <a target="_blank" href="http://www.togglz.org/">Java's Togglz</a>
and makes use of http://werkzeug.pocoo.org/ WGI, from the same folks.

1. Look at the configuration file listing the status of each flag:

   https://github.com/ashcrow/flagon/blob/master/example/config.json

1. The results file:

   https://github.com/ashcrow/flagon/blob/master/example/results.txt

1. The code making use of the flag:

   https://github.com/ashcrow/flagon/blob/master/example/example.py


<a name="#Metrikus">Metrikus</a>

## Harness

Harness.io offers a Feature Flags utility as part of its CI/CD and Cost Management SaaS offering.

https://chaoscarnival.io/sessions

Harness provides <a target="_blank" href="https://university.harness.io/feature-flags-developer
">free training</a> to pass their <a target="_blank" href="https://developer.harness.io/certifications/feature-flags">free "Harness Certified Expert certification exam</a> (answer 50 questions in 90-minutes).

But I would be cautious to join them as an employee due to the <a target="_blank" href="https://www.glassdoor.com/Reviews/Harness-Reviews-E1828521.htm">consistenly bad employee reviews on Glassdoor</a>.

<a target="_blank" href="https://app.harness.io/#/account/v-sK1fz9R7inji-gj8kSkA/onboarding-landing?walkme=none">
Walkme demo of Harness CD</a> runs a sample deployment in a Kubernetes Cluster within Google Cloud Platform (GKE), available for 1 hour.

https://www.harness.com calls it "progressive delivery"
https://harness.io/blog/product-updates/introducing-harness-feature-flags/

https://searchitoperations.techtarget.com/news/252502582/Harness-baits-CI-CD-set-with-feature-flags-cloud-auto-stop

https://webinars.devops.com/confidence-and-experimentation-with-feature-flags-at-metrikus
https://www.metrikus.io/


## More about Python

This is one of a series about Python:

{% include python_links.html %}


