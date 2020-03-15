---
layout: post
title: "pytest-bdd"
excerpt: "Achieve behavior-driven development (BDD) by automating Gherkin test specs using Pytest"
tags: [API, devsecops]
date: "2020-03-10"
file: "pytest-bdd"
image:
# cucumber-jars-1900x500-226446
  feature: https://user-images.githubusercontent.com/300046/39661096-6eb2ee3e-5009-11e8-9cf8-8630c28a8db5.jpg
  credit: proandroiddev
  creditlink: https://proandroiddev.com/be-da-developer-cucumber-on-android-cfd07773e59d
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

After following this hands-on tutorial, you would be able to add to your resume:

> Automated testing of BDD Gherkin-language stories using Python-based pytest-bdd installed using a Bash script. Data-driven tests include localization verification.

Like other BDD frameworks, pytest-bdd test scenarios are written in Gherkin ".feature" files using plain language. 

A BDD frameworks is very different from traditional testing frameworks like unittest and pytest. But its combination is powerful.
The combination provides a separation of concerns between test cases and test code. Gherkin steps may also be reused by multiple scenarios.

Each Given, When, and Then step in Gherkin is "glued" to a step definition to a  Python function decorated by a matching string in a Pytest step definition module. 

pytest-bdd is not a standalone framework like behave. Pytest-bdd is a plugin for pytest. Thus, all of pytest‘s features and plugins can be used with pytest-bdd. 


## Install

1. Highlight and copy this command:

   <pre>bash ...</pre>

1. In a Terminal, paste the command to execute it.

Below is what it does, if you had done it manually instead:

1. On your Terminal:

   git clone https://github.com/AndyLPK247/tau-pytest-bdd.git

1. Fork it using hub command 

   git remote add upstream https://github.com/AndyLPK247/tau-pytest-bdd.git

1. Install pre-requsities:

   <pre>pip install -U pytest
   pip install -U pytest-bdd
   pip install -U pytest-cov    # to generate code coverage reports
   pip install -U pytest-xdist  # to run tests in parallel
   </pre>

   Alternately, after git cloning, run <tt>pipenv install</tt> from the command line in the project's root directory.

1. If you use env, 

   <pre>LICENSE         Pipfile         Pipfile.lock    README.md       cucumbers.py    tests</pre>

   <tt>pipfile</tt>

## Tutorial

1. Watch <a target="_blank" href="https://testautomationu.applitools.com/behavior-driven-python-with-pytest-bdd/">Applitools</a>

   by Andrew Knight (@automationpanda, <a target="_blank" href="https://www.AutomationPanda.com">AutomationPanda.com</a>)

   <a target="_blank" href="https://www.youtube.com/watch?v=ReB6YzMlQ3U" title="Jul 10, 2019 [2:05:00]">Behavior Driven Python with pytest-bdd</a>

   https://github.com/AndyLPK247/tau-pytest-bdd

## Alternatives

pytest-bdd test scenarios are written in Gherkin “.feature” files using plain language. Thus, it is a BDD test framework that is similar to Behave, Cucumber, and SpecFlow. For Python there is also radish, which extends Cucumber with constants and scenario loops.

There is also lettuce, which is not used much anymore.

<a target="_blank" href="https://www.youtube.com/watch?v=gK_btU9Kv_g">
Implement BDD with TDD: Using Python, Behave, and Mocking</a>
Mar 16, 2019

Book "BDD in Action" by John Ferguson Smart.

"The Cucumber Book" by Matt Wynne and Asiak Hellesoy.
