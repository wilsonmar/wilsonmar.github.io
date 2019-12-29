---
layout: post
title: "Feature flags"
excerpt: "Evaluate the options for Python for real-time feature configuration"
tags: [python, coding]
date: "2017-03-05"
file: "feature-flags"
image:
# pic white python logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622164/4230c848-0585-11e6-957b-be11147346e6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

"Upgrade infrastructure safely. Change configurations on the fly. Dynamically control everything in real-time."

Easier said than done.

https://dzone.com/articles/feature-flags-are-the-answer-to-retailers-holiday

Martin Fowler calls <a target="_blank" href="https://martinfowler.com/articles/feature-toggles.html">Feature Toggles</a> a <a target="_blank" href="https://martinfowler.com/bliki/FeatureToggle.html">design pattern</a>:

> "Toggles introduce complexity. We can keep that complexity in check by using smart toggle implementation practices and appropriate tools to manage our toggle configuration, but we should also aim to constrain the number of toggles in our system.""

So feature flags are now a central facet of programming templates.

So, different implementations exist for each language.

<hr />

## Python

The list of utilities at <a target="_blank" href="http://featureflags.io/python-feature-flags/">"The Hub for Feature Flag Driven Development"</a> is rather disappointing.

* https://github.com/trustrachel/Flask-FeatureFlags by @trustrachel Sanders was archived in 2015.

* https://github.com/disqus/gutter was archived Dec 17, 2015.

* https://github.com/venmo/feature_ramp by Amanda Schloss and Anthony Yim
for "Toggling and ramping features via a lightweight Redis backend." has not been updated since Aug 21, 2015.


### LaunchDarkly

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


### Flagon

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


## More about Python

This is one of a series about Python:

{% include python_links.html %}


