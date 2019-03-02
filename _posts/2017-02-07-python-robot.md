---
layout: post
title: "Python Robot testing"
excerpt: "A robot python mimics what human testers do manually (to entertain real developers)"
tags: [Clouds, testing]
shorturl: "https://goo.gl/qOoEVx"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

{% include _toc.html %}

This article talks about the Robot Framework (RF) open-sourced at <a target="_blank" href="https://github.com/robotframework/">https://github.com/robotframework</a>
and described at <a target="_blank" href="http://robotframework.org">http://robotframework.org</a>

RF repeats a sequence of keystrokes and mouse clicks that you specify.

It is used to test software by applying (Acceptance Test Driven Development) approaches that looks for screens and fields before the app is developed.

It is also used as the base for "Robotic Process Automation" to help people do work.

There are many products and frameworks which do that.
Selenium works on web browsers.
FitNesse, Cucumber, 
HP QTP ('Unified Functional Testing' or 'UFT').

## Installation

The Robot Framework (RF) is written in the <a target="_blank" href="https://www.python.org/">
Python</a> language, so it installs with this command:

   <pre><strong>pip install robotframework-ride</strong></pre>

   https://github.com/robotframework/QuickStartGuide/blob/master/QuickStart.rst

   This can be done on any OS that runs the Python interpreter: Windows, OS X, Linux.

   NOTE: Through a <em>Remote Library Interface</em>, RF can run (but slower) on 
<a target="_blank" href="http://ironpython.net/">IronPython</a> or
<a target="_blank" href="http://www.jython.org/">Jython</a> 
when automating on a Java application or implementing a custom RF test library in Java. 

Consequently, RF can be used with non-Python libraries such as the Java JDBC Database Library by running RF on Jython. The Jython interpreter not only compiles the RF Python code into Java bytecode for execution within a JVM, but also allows for the importing of Java classes (such as those of the Database Library) as (if they were) Python modules. See http://blog.xebia.com/the-robot-framework-remote-library-interface-using-the-remote-database-library-to-connect-to-ibm-db2/

Additionally, install the Robot IDE (RIDE):

   <pre><strong>pip install robotframework-ride</strong></pre>

Also, install the documentation utility:

   <pre><strong>pip install docutils</strong></pre>


## Disadvantages

RF is written to be a "keyword-driven", using the human-readable "Gherkin" syntax.

So one does need to memorize some keywords in order to be efficient at it.

Instead of coding programming code, it's faster to write 
keyword-driven syntax driven by text data files.

The Robot IDE (RIDE) requires a 32-bit Python version on MacOS and does not yet support Python 3.


## Architecture

The Robot Framework (RF)'s 
components are typical of most other test automation frameworks:

![python-robot-400x492-37552](https://user-images.githubusercontent.com/300046/38482765-d8faf808-3b8d-11e8-9ef6-489f5b13a5db.jpg)

Green boxes signifies Robot framework utility components whereas grey refers to app-specific components or artefacts, such as test code and product code, that are to be created by the development organization. The numbers indicate the order in which a typical test execution run would flow.


## Introductions

generic, keyword- and data-driven test automation framework for acceptance test driven development (ATDD). 

   * http://blog.xebia.com/tag/robot-framework/  by Michael Hallik
   * http://blog.xebia.com/robot-framework-the-unsung-hero-of-test-automation/
   * http://blog.xebia.com/robot-framework-and-the-keyword-driven-approach-to-test-automation-part-1-of-3/
   * http://blog.xebia.com/robot-framework-and-the-keyword-driven-approach-to-test-automation-part-2-of-3/
   * http://blog.xebia.com/running-robot-frameworks-remote-server-as-java-agent/
   by Serge Beaumont September 14th, 2016


## Social

* <a target="_blank" href="https://twitter.com/robotframework">
@robotframework</a> on Twitter.

RF is maintained by IT contractor Pekka Klärck 
(<a target="_blank" href="https://twitter.com/pekkaklarck">@pekkaklarck</a>, http://eliga.fi/)
<a target="_blank" href="https://vimeo.com/192649128/">
See Pekka on Joe's video</a> using
<a target="_blank" href="http://www.slideshare.net/pekkaklarck/robot-framework-introduction">
this slidedeck</a>. Note it's copyrighted by Nokia Networks (Finland).

https://blog.codecentric.de/en/2016/12/robot-framework-tutorial-2016-working-with-collections/

https://medium.com/@varjoinen/robot-framework-101-fb12d1d6954c#.jejc3hrwl



## Robot Framework Install

The core framework is operating system and application independent
because it's implemented using Python for running on Jython (JVM) and IronPython (.NET).

See https://github.com/robotframework/QuickStartGuide/blob/master/QuickStart.rst

0. Install the Robot Framework core:

   <pre>
   pip install robotframework
   </pre>

   The response:

   <pre>
Collecting robotframework
  Downloading robotframework-3.0.tar.gz (430kB)
    100% |████████████████████████████████| 440kB 399kB/s 
Building wheels for collected packages: robotframework
  Running setup.py bdist_wheel for robotframework ... done
  Stored in directory: /Users/mac/Library/Caches/pip/wheels/9e/61/ee/b4bb4b9b7824594cc785a577975bec2fce9c54b09bbf39eb3f
Successfully built robotframework
Installing collected packages: robotframework
Successfully installed robotframework-3.0
   </pre>

0. To test databases and for example REST APIs, also install:

   <pre>
   pip install robotframework-databaselibrary
   pip install requests
   pip install botframework-requests
   </pre>

0. PROTIP: I don't recommend installing docutils because you can look it up online.

   * <a target="_blank" href="http://robotframework.org/robotframework/#standard-libraries">
   Click View about Standard Libraries and Built-in Tools</a>
   <br /><br />

0. To install the demo Robot login script, create a folder to hold the demo repo:

   <pre>
   cd ~/gits/wilsonmar/pattern-recognition
   git clone https://github.com/robotframework/QuickStartGuide.git --depth=1
   cd QuickStartGuide
   </pre>

0. Position your present working directory to thePROTIP: I don't recommend installing docutils because you can look it up online.

0. Run the demo:

   <pre>
   robot QuickStart.rst
   </pre>

   NOTE: The file name extension (ending) .rst is also used by Ansible scripts.

   You will see this if the .rst file is not in the present folder:

   <pre>
[ ERROR ] Parsing 'QuickStart.rst' failed: Data source does not exist.
   </pre>

   The expected response is:

   <pre>
==============================================================================
QuickStart                                                                    
==============================================================================
User can create an account and log in                                 | PASS |
------------------------------------------------------------------------------
User cannot log in with bad password                                  | PASS |
------------------------------------------------------------------------------
User can change password                                              | PASS |
------------------------------------------------------------------------------
Invalid password                                                      | PASS |
------------------------------------------------------------------------------
User status is stored in database                                     | PASS |
------------------------------------------------------------------------------
QuickStart                                                            | PASS |
5 critical tests, 5 passed, 0 failed
5 tests total, 5 passed, 0 failed
==============================================================================
Output:  /Users/mac/gits/wilsonmar/pattern-recognition/QuickStartGuide/output.xml
Log:     /Users/mac/gits/wilsonmar/pattern-recognition/QuickStartGuide/log.html
Report:  /Users/mac/gits/wilsonmar/pattern-recognition/QuickStartGuide/report.html
   </pre>


## Scripting

### Robot QuickStart Login Demo script

Many of the functions are common to other similar programs,
such as Selenium, HP QTP, etc.

But there are plugins for IntelliJ/PyCharm & Eclipse,
Atom, Sublime, TextMate, Vim, etc.

See http://sikulix-2014.readthedocs.io/en/latest/scenarios.html#using-robotframework

http://www.slideshare.net/pekkaklarck/robot-framework-introduction



## Run scripts

http://sikulix-2014.readthedocs.io/en/latest/faq/010-command-line.html#how-to-run-sikulix-from-command-line

robot some_tests.robot
OR
robot test_cases/

## References

https://www.slideshare.net/pekkaklarck/robot-framework-introduction



<hr />

## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}
