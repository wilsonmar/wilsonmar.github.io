---
layout: post
title: "Salesforce Selenium"
excerpt: "Automate not just testing but also explanations about user state"
tags: [salesforce]
file: salesforce-selenium.md
image:
# feature: sf-ohana-1900x500-178173.jpg
  feature: https://user-images.githubusercontent.com/300046/43407734-bd6303fe-93dc-11e8-87df-302ddbc274ff.jpg
  credit: Salesforce
  creditlink: https://trailhead.salesforce.com/trailblazers
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This article is about how to automate user clicks and typing on Salesforce Visualforce and Lightning UI. This is for functional testing and for automating work.

Salesforce has built-in "process automation" capabilities such as Validation rules.
That's not what we're talking about here.

## Pretend to be Salesforce Users

Salesforce users have a tremendous need for automation that pretends to be real users (for functional testing)
because of the complex security apparatus within Salesforce.

   * Buttons can appear for one user but not another;
   * A user can see a field one day but not another after configurations are changedl;
   * There is two sets of layouts with different UX: a vintage Visualforce and new Lightning;
   <br /><br />
CSS IDs in Salesforce are very dynamic. The page layout in Salesforce Visualforce pages are known to change regularly. This challenges script maintenance work in every cycle. 

Automated functional verification tools can help testers quickly figure out the various settings affecting whether a given label, control, or data element on the screen either should be or should not be there.
In other words, when a "New" button does not appear when it should, the test framework should report more than just "fail", but (as an admin) look up the various settings that impact visibility (such as User Profile license enablement, Field Level Security, etc.)

People use Selenium for cross-browser testing to ensure that different browsers render correctly.

The <a target="_blank" href="https://wilsonmar.github.io/opencv-sikulix-robot/">SikuliX" build of Selenium</a> includes Google's OpenCV to work with images captured from the screen.
Some add to that Google's Tesseract to read text in pictures.

The "Protractor" build of Selenium tests web apps built using the Angular framework.

Selenium is actually an API.
"Selenium scripts" are actually programmed in Java, C#, Python, which each call the Selenium API.
In turn, Selenium APIs call a WebDriver program to access the browser DOM IDs and other elements.
Each browser requires a different WebDriver program.

JUnit and NUnit libraries are used within Java and C# programming code.
Since Java programs use Maven to manage versions.

## Internal to Salesforce

On June 7, 2013, Salesforce employee <a target="_blank" href="https://www.linkedin.com/in/jimevansmusic/">Jim Evans</a> (<a target="_blank" href="https://twitter.com/jimevansmusic">@jimevansmusic</a>, a Selenium committer) published <a target="_blank" href="
https://developer.salesforce.com/blogs/engineering/2013/06/automated-testing-using-selenium-at-salesforce.html">this blog</a> saying that "At Salesforce, we use the Selenium open-source project to execute over 40,000 UI-based test cases on our applications as part of our continuous integration build infrastructure."

At the SeleniumConf Boston 11 June 2013, <a target="_blank" href="https://www.linkedin.com/in/david-louvton-191899/">David Louvton</a> and Amool Gupta presented <a target="_blank" href="https://www.youtube.com/watch?v=zFv-4AsPLmY">"Scaling Selenium: The Selenium Infrastructure at Salesforce"</a>.

VIDEO: <a target="_blank" href="https://saucelabs.com/resources/webinars/selenium-at-salesforce-scale">Selenium at Salesforce Scale</a> Apr 28, 2015
Engineers David Louvton and Sagar Wanaselja show you Salesforce's best practices and how they automate their Selenium tests at scale. 500 commits per day by 120 teams. No code, just bragging in this video.

GUS (Grand Unified System) is released to Salesforce customers as the <a target="_blank" href="https://sfdc.co/AgileSuccess/">Agile Accelerator</a> on AppExchange.

AFAIK code Salesforce uses internally is not open sourced.
So each Salesforce user company has to create their own framework for functional testing.


## Frameworks

A framework should support priortization of <strong>test items</strong> so that the highest risk (named "P1") receive the highest priority (run before those of lowest priority, unless there are technical dependencies). One (of many) ways to classify automation scripts:

a. "Positive Happy Path"<br />
b. "Negative Happy Path"<br />
c. "Positive Secondary Path"<br />
d. "Negative Secondary Path"

Under "Continuous Integration", Selenium scripts are kicked off by Jenkins when Git makes a push.
Some frameworks track the results of each test and automatically put tests on the schedule to make full 24/7 use of test servers.

To enable automation efforts to focus on the user rather than the code, 
I think the Gherkin language should be used even if you do not use the <a target="_blank" href="https://wilsonmar.github.io/cucumber/">Cucumber testing tool</a>.
It's a standard way of using regular English sentences to describe what a system should do (its behaviors).
Other human languages can be used as well.

An effective framework minimizes work by providing a library of "page objects" that replace repetitive coding with calls to methods within objects.

Apache "SureFire" generates test reports.

Other aspects of the full workflow include a management system for managing the anomalies and "defects" found.

## Verifications

Wait until page is loaded.

Error messages

Same user & same page vs. other fields (title of page, field labels, field values)

Same user but different pages

Different user

<hr />

## Alternative tools

https://hub.appirio.com/tech-blog/useful-selenium-webdriver-code-snippets


### Raprise

Adam Sandman
https://www.inflectra.com/Rapise/

https://www.youtube.com/watch?list=PL1GncVUgF5nsGzdRMXyV9GKZNwCh2IZ2I&v=ansM4vXpiaY

http://uitestingplayground.com/

### Isaac Lewis 

https://github.com/isalew/selenium-sfdc/blob/master/selenium-sfdc.js

### Logicline Framework

The Test Automation Framework for Salesforce from logicline Germany is built on top of Selenium webdriver and is programmed in the Java language with the TestNG unit test framework accessed from the Eclipse IDE.

https://www.logicline.de/en/blog/2017/06/test-automation-for-salesforce-using-selenium/
A Test Automation Framework for Salesforce
by <a target="_blank" href="https://www.linkedin.com/in/teny-peter-11651925/">Teny Peter</a> of Logicline, 20. June 2017
is to test the CleverReach app developed by logicline to run on Salesforce. Th app under test integrates mass mailing software with Salesforce. The test scenario creates a mailing campaign of  leads and contacts. The created lead and contact are added to the newly created campaign as campaign members. The campaign is then sent to CleverReach for syncing. Afterwards it’s checked if the campaign is successfully created and synched with CleverReach.

The major components of the framework are:

* Base class: This is a Java class file where all the functions are written. It can be utilized across any script file, thus maintaining the script re-usabilty.

* Main script runner class is the testing class where it is specified which scripts need to run. Here the precondition and post condition are mentioned.

* Script classes are classes that extend the base class. It’s where the test steps resides for each test cases. Each and every testcase should be a separate script file which is finally called in the main script file.

* OR properties is the object repository file where all element identifiers used in the scrips are written. This helps in maintaining the script. If any change happens to the visual-force page that makes changes to the element identifiers, a Test Engineer can change only this one file instead of changing it in the actual script file.

* Config properties file is a run time configuration file where we can provide all run time configurations like browser type, browser version, username, password and other.

* TestData.xls: This is an Excel file where all test data used throughout the script are provided. The user can add or modify this Excel file rather than making changes to the script thus helping in improving maintainability.

Steps to Create Script Automation Script

1. Import logicline framework to Eclipse IDE
1. Add packages Main and script to the project
1. Convert the project to testNG format
1. Under script package create a new java class and write the steps to automate the testcases
1. Under main package create a testNG class and under @test tag create an object of the script and call the function
1. After above steps are completed right click on testNG.xml and run as testNG suite

## Other testers

Rajeev Mehta of 3PillarGlobal, in <a target="_blank" href="https://www.3pillarglobal.com/insights/automated-testing-with-salesforce-and-selenium">this article</a> explains how he automatically generates access tokens for testing.


by Jitendra Zaa (Salesforce MVP)

   * <a target="_blank" href="https://www.jitendrazaa.com/blog/salesforce/getting-started-with-selenium-and-salesforce-salesforce-automation-testing-video-tutorial-part-1/">https://www.jitendrazaa.com/blog/salesforce</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=8CRsCmM_jyI">Getting started with Selenium IDE and Salesforce - Part 1</a> Mar 28, 2015 [11:08] (unfortunately, Selenium IDE is gone)
   * <a target="_blank" href="https://www.youtube.com/watch?v=2pb7wmOpYxI">Selenium automated testing Part 2</a> 
   * <a target="_blank" href="https://www.youtube.com/watch?v=4H1kj8GUebw">Performing Load Testing in Salesforce using Selenium and TestNG</a> [3:05] Aug 27, 2017
   * <a target="_blank" href="https://www.youtube.com/watch?v=VSa7PgIANvs">Continuous integration in Salesforce Using Jenkins and Git in 20 minutes</a>

MST Solutions:
   * <a target="_blank" href="https://www.youtube.com/watch?v=kN_DWzbh7-Q">Automated Salesforce Testing using Selenium Webdriver</a> Dec 29, 2015 [5:48] 

## Cucumber

https://www.youtube.com/watch?v=US39w9XwuP4
Test Automation With Cucumber JVM, Selenium, and Mocha
Dreamforce Video

https://github.com/wilsonmar/DevSecOps/tree/master/Kakunin

## Lightning

https://www.youtube.com/watch?v=YgL0UNVoqQ8
Testing And Debugging Lightning Components
Salesforce Developers


## Jasmine

https://www.youtube.com/watch?v=HnHwGuO3hVg
Lightning Component Testing with Jasmine
Salesforce Developers
1.4K views


## References

https://www.youtube.com/watch?v=n9amswhOxJw
Hands-on Training: Write Apex Tests Using Best Practices
Dreamforce Video



## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
