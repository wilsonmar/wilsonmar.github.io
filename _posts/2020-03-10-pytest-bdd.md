---
layout: post
title: "pytest-bdd"
excerpt: "Behavior-driven Development (BDD) by automating Gherkin test specs using Pytest for test coverage analysis, data-driven tests, and localization verification"
tags: [API, devsecops]
date: "2021-10-23"
file: "pytest-bdd"
image:
# cape-blue.jpg
  feature: https://user-images.githubusercontent.com/300046/79251998-2f02b480-7e3e-11ea-81fd-fe690416e320.jpg
  credit: enterprisersproject.com
  creditlink: https://enterprisersproject.com/article/2019/5/3-mindfulness-exercises-try-when-you-feel-overwhelmed
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

After following this hands-on tutorial manually, you would be able to add to your resume:

> Automated testing of BDD based on Gherkin using Python-based pytest-bdd installed using a Bash script. Integrated libraries for test coverage analysis, data-driven tests, and localization verification.


## Video tutorials

1. First, learn about the basic concepts about Pytest.

   Andrew Knight (@automationpanda, <a target="_blank" href="https://www.AutomationPanda.com">AutomationPanda.com</a>) gradually presents, in a logic sequence and with quizzes <a target="_blank" href="https://testautomationu.applitools.com/behavior-driven-python-with-pytest-bdd/">9 videos at Applitools' Test Automation University (TAU)</a>.

   <a target="_blank" href="https://www.youtube.com/watch?v=ReB6YzMlQ3U" title="Jul 10, 2019 [2:05:00]">Behavior Driven Python with pytest-bdd</a>

   Matt Harrison held live classes on OReilly.com in 2021.


   ## Automation of install and run

   My value-add here is writing a <a href="#BashScript">Bash script</a> (below) that automatically installs what is needed and runs the test on a public website under test:

   <a target="_blank" href="https://github.com/wilsonmar/tau-pytest-bdd">https://github.com/wilsonmar/tau-pytest-bdd

   That is a modified version of a fork of <a target="_blank" href="https://github.com/AndyLPK247/tau-pytest-bdd">Andrew's repo at https://github.com/AndyLPK247/tau-pytest-bdd</a>, to avoid future possible breaking changes in or disappearance of Andrew's upstream repo). (I occassionally sync with it and reconcile changes in my forked version.)

   For automation I built a Bash script based on coding techniques described at:
   <a target="_blank" href="https://wilsonmar.github.io/bash-scripts">https://wilsonmar.github.io/bash-scripts</a>


1. Highlight and copy this command: TODO: 

   <pre>... bash https://github.com/wilsonmar/tau-pytest-bdd.sh</pre>

   Note the parameters at the end of the command above:

   <tt>-v -V </tt>

1. Open a Terminal.
1. Navigate to a folder and paste the command to execute it.


If you performed the above, <a href="#RunTest">click here to run what was installed</a>.

### Manual install

Alternately, the text below describes what the install script above does so you can do it manually instead:

1. Clone the repo from Andrew:

   git clone https://github.com/AndyLPK247/tau-pytest-bdd.git

1. Fork it using hub command 

   git remote add upstream https://github.com/AndyLPK247/tau-pytest-bdd.git

1. Be inside virtualenv

1. Install pre-requsities referencing file <tt>pipfile</tt>:

    <pre><strong>pipenv install</strong></pre>

   The response:

   <pre>Installing dependencies from Pipfile.lock (f55e24)…
  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 19/19 — 00:00:07
To activate this project's virtualenv, run pipenv shell.
Alternatively, run a command inside the virtualenv with pipenv run.
   </pre>   

   NOTE: This is instead of running individual "pip install" commands:
   
   <pre>pip install pyenv
   pip install -U pytest
   pip install -U pytest-bdd
   pip install -U pytest-cov    # to generate code coverage reports
   pip install -U pytest-xdist  # to run tests in parallel
   </pre>

   Alternately, after git cloning, install:
   https://github.com/hchasestevens/fault-localization

1. Activate 

   <pre><strong>pipenv shell</strong></pre>

   The response should be a change to the prompt, such as:<br />
   <tt>(tau-pytest-bdd) bash-5.0$</tt>

   <pre>Launching subshell in virtual environment…
bash-5.0$  . /Users/wilson_mar/.local/share/virtualenvs/tau-pytest-bdd-YNf2NFbA/bin/activate
(tau-pytest-bdd) bash-5.0$ 
   </pre>

   <a name="RunTest"></a>

   ## Run individual test

1. The script runs a specific test while at the repo's root folder:

   <pre>pipenv run python -m pytest</pre>

   The response begins with:

   <pre>Creating a virtualenv for this project…
Pipfile: /Users/wilson_mar/gits/wilsonmar/tau-pytest-bdd/Pipfile
Using /usr/local/bin/python3 (3.7.6) to create virtualenv…
⠏ Creating virtual environment...Already using interpreter /usr/local/opt/python/bin/python3.7
Using base prefix '/usr/local/Cellar/python/3.7.6_1/Frameworks/Python.framework/Versions/3.7'
New python executable in /Users/wilson_mar/.local/share/virtualenvs/tau-pytest-bdd-YNf2NFbA/bin/python3.7
Also creating executable in /Users/wilson_mar/.local/share/virtualenvs/tau-pytest-bdd-YNf2NFbA/bin/python
Installing setuptools, pip, wheel...
done.
Running virtualenv with interpreter /usr/local/bin/python3
✔ Successfully created virtual environment! 
Virtualenv location: /Users/wilson_mar/.local/share/virtualenvs/tau-pytest-bdd-YNf2NFbA
/Users/wilson_mar/.local/share/virtualenvs/tau-pytest-bdd-YNf2NFbA/bin/python: No module named pytest
   </pre>

1. The script runs a specific test while at the repo's root folder:

   <pre>pipenv run python -m pytest test_web_steps.py</pre>

1. A new window pops up and disappears.
1. The response on the Terminal (with ... elipses replacing long strings):

   <pre>======...====== test session starts ======...======
platform darwin -- Python 3.7.6, pytest-4.4.1, py-1.8.0, pluggy-0.9.0
rootdir: /Users/wilson_mar/gits/wilsonmar/tau-pytest-bdd/tests/step_defs
plugins: bdd-3.1.0
collected 2 items                                 
&nbsp;
test_web_steps.py .                             ...[100%]
&nbsp;
======...====== 2 passed in 23.64 seconds ======...
(tau-pytest-bdd) bash-5.0$ pipenv run python -m pytest test_web_steps.py
======...======  test session starts ===========...====== 
platform darwin -- Python 3.7.6, pytest-4.4.1, py-1.8.0, pluggy-0.9.0
rootdir: /Users/wilson_mar/gits/wilsonmar/tau-pytest-bdd/tests/step_defs
plugins: bdd-3.1.0
collected 2 items
&nbsp;
test_web_steps.py .                             ...[100%]
&nbsp;
======...======  2 passed in 19.80 seconds ======...====== 
(tau-pytest-bdd) bash-5.0$ 
   </pre>

   ### Test coverage

1. After the test finishes, look at the <strong>test log/report</strong> and <strong>test coverage report</strong>.


   ## View test code

1. Additionally, some want to install files to enable reference from within IDEs such as PyCharm, Eclipse, VSCode, etc.

   * VIDEO: <a target="_blank" href="https://www.youtube.com/watch?v=ixqeebhUa-w" title="Feb 26, 2018 [1:29:20]">Productive pytest with PyCharm</a>
   by Brian Okken (@brianokken/Github:okken)

   * TODO: VSCode?
   

   ## Alternative runs

1. To run all tests defined:

   <pre>pipenv run python -m pytest</pre>

1. To run all "web" tests (not "api" tests):

   <pre>pipenv run python -m pytest -k "web"</pre>


<hr />

## "test" folder contents

   In the root of the repo is file <tt>cucumbers.py</tt> file, which defines the subject being tested (a basket of cucumbers).
   
   In your mind, substitute the word "cucumber" with a "batch of invoices", or whatever else your own application manages.

   In the repo is a "test" folder, which in an integrated Agile team would be inside the source code repo of the app being tested.

   ### Folder structure for Pytest-bdd
   
   Under the sample test folder, folders "features" and "step_defs" is for
   use by the pytest-bdd framework.

   "pytest-bdd" is used here because it is not a standalone framework like alternative Behave. Pytest-bdd is a plugin for pytest (<a target="_blank" href="https://docs.pytest.org/en/latest/">https://docs.pytest.org/en/latest</a>) and all of its features and other plugins.

   Like other BDD frameworks, pytest-bdd test scenarios are written within 
   ".feature" files using the Gherkin language which uses specific vocabulary. 
   Keywords in Gherkin can be in several spoken languages.

   Since Gherkin can be userstood by non-technical people, it is a common way to communicate specifications among "Three Amigos" (business analysts, testers, developers).

   A frameworks for BDD ("black box testing") is very different from traditional testing frameworks like unittest and pytest which specify specific CSS markers coded by developers. 

   However, the combination provides a <strong>separation of concerns</strong> between test cases and test code. Gherkin steps may also be reused by multiple scenarios.

   BTW, Within step_defs, file <tt>__init__.py</tt> (with no content) is for Python 3.3 and earlier <a target="_blank" href="https://stackoverflow.com/questions/448271/what-is-init-py-for">*</a> to look for submodules inside that directory.

1. PROTIP: In your editor, open a feature file in one pane and its associated py file in another pane. Better yet, if you have two monitors, have "features" folder in one and "step_defs" files in another.




## Pytest

Pytest introduces <strong>fixtures</strong> that sets up objects needed for testing, such as a SMTP port for sending email.

Fixtures can have scope to run once or multiple times.

Pytest can be augmented with plug-ins for code coverage, Flask integration, etc.

https://docs.pytest.org/en/latest/

https://automationpanda.com/python/

https://automationpanda.com/2018/09/27/book-review-pytest-quick-start-guide/

https://pragprog.com/book/bopytest/python-testing-with-pytest

<a target="_blank" href="https://www.youtube.com/watch?v=8mp_1Jt-xHQ">VIDEO:</a>
Automated testing with pytest and fixtures</a>
at PyGotham 2017

https://pytest-bdd.readthedocs.io/en/latest/index.html?#hooks
Pytest-BDD – Hooks

https://github.com/AndyLPK247/tau-pytest-bdd/tree/chapter-9
GitHub Repo – Chapter 9

https://pytest-bdd.readthedocs.io/
Pytest-BDD Documentation

https://automationpanda.com/2017/03/14/python-testing-101-pytest/
Automation Panda - Python Testing 101: pytest

https://automationpanda.com/2018/10/22/python-testing-101-pytest-bdd/
Automation Panda - Python Testing 101: pytest-bdd

https://github.com/AndyLPK247/behavior-driven-python
GitHub Repo – Python BDD Test Framework Examples



## pytest-bdd

Pytest-bdd is a plug-in to Pytest.

https://github.com/pytest-dev/pytest-bdd

https://pytest-bdd.readthedocs.io/en/latest/

https://github.com/AndyLPK247/tau-pytest-bdd/tree/chapter-2

Packt Book: "Pytest quick start guide" by Bruno Olivera

Book: "Python Testing with pytest" by Brian Okken


   ### Hooks in conftest.py

   To share common steps, fixtures, and BDD hooks between test modules.

   per-directory hooks

   <a target="_blank" href="https://testautomationu.applitools.com/behavior-driven-python-with-pytest-bdd/chapter9.html">Shared steps video</a>

   See https://docs.pytest.org/en/2.7.3/plugins.html

   ### Gherkin feature files

1. Name each of the various features to be tested as a "feature" file.

   For pytest-bdd, a "features" folder is added to contain files with names ending with ".feature". Such files are in the Gherkin language.

   <tt>@web duckduckgo</tt> at the top of the file enable features defined to be referenced by all scenarios by a filter. See <a target="_blank" href="https://testautomationu.applitools.com/behavior-driven-python-with-pytest-bdd/chapter8.html">this video</a>.

   Numbers are in quotes so that the parser can recognize where parameter substitution can occur.

   <a target="_blank" href="https://testautomationu.applitools.com/behavior-driven-python-with-pytest-bdd/chapter5.html">This video</strong> shows the use of scenario outlines that references example tables.

   Feature files are not runnable as a program.
   So each step definition in Gherkin (Given, When, and Then) is "glued" to a  Python function. 

   ## Python step_defs

1. For each step definition, specify a fixture decorated by a matching string in a Pytest step definition module to associate with Python code.

   A "step_defs" folder contains files containing Python code. The top line of each file starts with: 
   
   See https://testautomationu.applitools.com/behavior-driven-python-with-pytest-bdd/chapter4.html

   <pre>from pytest_bdd import scenario, given, when, then
   from cucumbers import CucumberBasket
   from pytest bdd import parsers
   from functools import partial</pre>
   
   A <strong>fixture</strong> statement (with @) decorates functions.

   The @scenarios fixture creates functions for all ... within the feature.

   <pre>@scenarios('../features/cucumbers.feature')</pre>

   That takes the place of specific code:

   <pre>@scenario("...")
   def test_add('../features/cucumbers.feature','Add ... to a basket'):
      pass</pre>

   <pre>@scenario("...")
   def test_remove('../features/cucumbers.feature','Remove ... from a basket'):
      pass</pre>

   <pre>@given("The basket has 2 tasks")</pre>

   @when("...")

   @then("...")

   The above steps can be re-used, which enables more rapid test development.

   ### Parameters

   Instead of static numbers and text strings, values can be replaced with  parameters such as:

   <pre>@then(parsers.cfparse('the basket contains "{total:Number}" cucumbers', extra_types=dict(Number=int)))</pre>

   This means that references within features are within single quotes.



## Alternatives

pytest-bdd test scenarios are written in Gherkin “.feature” files using plain language. Thus, it is a BDD test framework that is similar to Behave, Cucumber, and SpecFlow. For Python there is also radish, which extends Cucumber with constants and scenario loops.

There is also lettuce, which is not used much anymore.

<a target="_blank" href="https://www.youtube.com/watch?v=gK_btU9Kv_g">
Implement BDD with TDD: Using Python, Behave, and Mocking</a>
Mar 16, 2019

Book "BDD in Action" by John Ferguson Smart.

"The Cucumber Book" by Matt Wynne and Asiak Hellesoy.


## Localization (L10N)

There are two ways to select another language (such as "es" for Spanish, "ko" for Korean, "de" for German, etc.):

   A. English was selected in browser's Preferences, but another the app displays another language.
   
   B. Another language was selected in browser's preferences, and the app displays that language.

To simulate selecting another language in the browser's Preferences in Firefox:

<pre>FirefoxOptions options = new FirefoxOptions();
options.addPreference("intl.accept_languages", language);
driver = new FirefoxDriver(options);
</pre>

... and in Chrome:

<pre>HashMap&LT;String, Object> chromePrefs = new HashMap&LT;String, Object>();
chromePrefs.put("intl.accept_languages", language);
ChromeOptions options = new ChromeOptions();
options.setExperimentalOption("prefs", chromePrefs);
driver = new ChromeDriver(options);
</pre>


## More about Python

This is one of a series about Python:

{% include python_links.html %}
