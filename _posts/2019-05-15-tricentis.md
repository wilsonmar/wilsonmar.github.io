---
layout: post
title: "Tricentis"
excerpt: "Model-based /"codeless/" functional testing"
tags: [testing]
image:
# ![tricentis-denys-1900x500-135601.jpg
  feature: https://user-images.githubusercontent.com/300046/57971743-26b0a980-794f-11e9-855f-f6bedf8a5e52.jpg
  credit: Denys Nevozhai
  creditlink: https://unsplash.com/photos/8Cec-sGk0LQ
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/tricentis/">This article</a> is a concise, hands-on, step-by-step tutorial about learning and using <a target="_blank" href="https://www.tricentis.com/">Tricentis</a> Tosca for functional continuous testing.

## Competition for Software Test Automation

Tosca is called a <a target="_blank" href="https://www.tricentis.com/products/robotic-process-automation/model-based-automation/">"model-based"</a> test automation tool because automated tests are conducted based a database of metadata extracted from the application under test.

Because test cases are generated from the model, changes in the app's model (requirements) all impacted test cases can be automatically updated as well.
This tremendously reduces test case maintenance.

The model approach also enables makes <a target="_blank" href="https://www.tricentis.com/products/robotic-process-automation/">RPA (Roboticc Process Automation)</a> more reslient.

   * Tom Murphy, Sr. Director Analyst at Gartner

Being able to work on the model rather than script programming "democratizes" who can work on testing and automation. Business experts to contribute to test automation as well as eliminate the maintenance burden that erodes most test automation initiatives. Instead of programming a test automation framework, you scan the application’s UI or API to create a business-readable automation model.

Non-programmers can rapidly create and manage sophisticated end-to-end tests—without waiting on “technical” resources. 

## Users in the wild

* Credit Karma - Ash Coleman, Head of Diversity & Inclusion, 
* Anthem - Adam Satterfield, Director of Testing & Quality 
* BNP Paribas - Philippe Buron

## SAP

Tosca's architecture enables Tosca to enable resilient test automation—for 150+ technologies, including SAP.

Tosca is based in Austria (Leonard-Bernstein Straße 10, 1220 Vienna).
So it's no surprise that Toscas works with SAP based in Germany.

In May 2019 Tricentis bought <a target="_blank" href="https://www.tricentis.com/blog/intellicorp-change-impact-sap-1/">LiveCompare</a> for SAP change impact analysis from IntelliCorp, a pioneer smart systems company.

   * <a target="_blank" href="https://www.youtube.com/watch?v=qBbB7jP-0Tw">SAP SAPPHIRE show booth highlight video</a>

Tosca Commander has a SAP Solution Manager 7.2 Integration.


## Test Requirements management

Tosca purchased qTest as part of the QASymphony acquisition in 2019.

<a target="_blank" href="https://support.qasymphony.com/hc/en-us">Support QASymphony</a>

## Tricentis Academy

<a target="_blank" href="https://www.tricentis.com/academy">https://www.tricentis.com/academy</a>

<a target="_blank" href="https://vimeo.com/336797866">About the Tricentis Academy</a>

1. All Tosca's <a target="_blank" href="https://vimeo.com/user29095750/videos">videos are stored in Vimeo</a> and <a target="_blank" hrerf="https://www.youtube.com/user/TRICENTIS
">YouTube channel</a> and also referenced from Tosca's <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.1.0&url=video/videos.htm">videos web page</a>.

   BLAH: Vimeo does not provide users with speed controls like YouTube does.


### Component architecture

![tosca-arch-890x492](https://user-images.githubusercontent.com/300046/57974321-9b95da80-7973-11e9-9415-948e1d1c0075.png)

Tosca Commander components:

   * Requirements Management
   * TestCase Design
   * TestPlanning
   * Reporting
   * Test Data Management (TDM) communicates with a TDM Repository
   * Tosca CI Remote Execution Service communicates with a Tosca CI Client on a Build server
   * Tosca Distribution Agent coordinates with Tosca Server and License server
   * Its Engines 3.0 is used to perform GUI and non-GUI tests and its TBox framework containing (tree-like) hierarchically structured XModules to steer test objects.

Tosca (IIS) Server has a REST API Service and Tosca Workspaces working with the License Server and Tosca Connect.

   * Tosca Event Monitor
   * Tosca Distribution Server
   * Exploratory Testin Server connects to 
   * REST API Service
   * Tosca Administration Console
   * Tosca Data Service communicates with Tricentis Tosca vis https
   * Interactive Testing Server
   * Tosca Analytics

Additionally:

   * Classic engines are used to steer tests of legacy apps such as PowerBuilder through their custom ports
   * Tosca XScan scans XModules
   * Tosca OSV (Orchestrated Service Virtualization) works through an OSV Addin to Tosca Commander communicating via SOAP to an OSV Host talking to OSV Database and OSV Monitor talking to License Server.
   * Tosca BI (Business Intelligence)
   * Tricentis Tosca
   * Tosca Commander interacts with a Windows Active Directory (via TCP & UDP) to connectTosca Workspaces with a Common Repository using  TC API.
   Tosca Commander Interactive Testing communicates with the Interactive Testing Server and Interactive Testing Agent.

## Conferences

https://www.tricentis.com/accelerate/san-francisco/


<a target="_blank" href="https://www.tricentis.com/accelerate/san-francisco/watch-live/">Register for the live stream</a>

orders@eventbrite.com

* Wolfgang Platz, Founder & CPO, Tricentis; 
* Wayne Ariola, Tricentis

Consulting supporters:

* Jeff Wilkinson, Managing Director, Accenture; 
* Ramesh Pai, Global Head, NextGen QA, Wipro


## Certifications

<a target="_blank" href="https://www.tricentis.com/academy/training-certifications">https://www.tricentis.com/academy/training-certifications has several tracks:<br />
<img alt="tosca-Certification-1120x791.jpg" width="1120" src="https://user-images.githubusercontent.com/300046/57974050-58396d00-796f-11e9-84bb-7392f555ca52.jpg"></a>

   * Automation Specialist Level 1 & 2 (AS1 and AS2) is the prequesite to either
   * Automation Engineer Level 1 & 2 or
   * Test Design Specialist Level 1 & 2
   * Test Architect 1 certification can be taken after passing all the above.

Specialty certifications:

   * qTest Specialist
   * mobile
   * etc.


### Initial certifications

<a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/automation-specialist-level-1/">Tricentis Automation Specialist 1 Self-Paced Track Standard</a> course in 20-25 hours covers HTML control recognition, design automated test cases, automation features, and final execution. The course provides five automated GUI test cases that covers control recognition, usage of steering parameters and dynamic values, execution on different browsers, and reusing modules.

1. At <a target="_blank" href="https://support.tricentis.com/community/product.do?number=WIT0001016">https://support.tricentis.com/community/product.do?number=WIT0001016</a> click "Add to cart" (make sure the that "Product" appears briefly on the right)
1. Go to Cart, check "I have read and agree to the Terms and Conditions", Checkout.
1. Click "OK" to the "successful" pop-up.
1. Type your email and click "Redeem". Click Yes to confirm.
1. Review course details:

   <pre>
  CONTROL RECOGNITION
    Identifying HTML controls Creating HTML Modules Modifying steering properties
    Modifying steering properties
    Use of premade Tricentis Modules Best practice tips and exercise
  &nbsp;
  TEST AUTOMATION FEATURES
    Test case structure
    Adding TestSteps and Test StepValues
    Handling dynamic values
    Verifications, test parameters
    Creation and use of a Libraries, TestStepBlocks
    Best practice tips and exercises
  &nbsp;
  EXECUTION AND REPORTING
    Executing test cases and results analysis
    Cross browser options for test execution
    Table steering with constraints
    Fire events Linking to business requirements
    Recovery scenarios
    Recovery scenarios Best practice tips and exercises
   </pre>

1. The Sample System Under Test si the <strong>Web Shop application</strong> at: 
   
   <a target="_blank" href="http://demowebshop.tricentis.com">http://demowebshop.tricentis.com</a>

   Test cases:

   1. Shipping Costs (core skills)
   2. Payment Process
   3. Discount Code
   4. Reorder
   5. Total Price all Orders
   6. Additional challenges


<a target="_blank" href="https://support.tricentis.com/community/product.do?number=WIT0001025">Automation Specialist 2</a>  covers XML and Web Services test automation (REST API testing) using test case templates. <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/automation-specialist-level-2">Automation Specialist 2</a>

   <pre>
    Data Driven TestCases
        TestSheets as a centralized data source
        Template concept
        Template conditions
        Run and Report Automated Data Driven TestCases
        Hands-on exercises
    Data driven API TestCases
        Web services and API concep
        Build API TestCases
        API Testing Templates
        Hands-on exercise
    Additional Learning Material
        Build your own data driven test
   </pre>        

### Automation Specialist Practitioner training

The Automation Specialist Practitioner training is a hands-on, instructor-led coaching session that builds on the core skills developed in the Tricentis online trainings with skills for you to apply to your own SUT and your project’s unique requirements. 

The coaching session is delivered on site by a certified Practitioner Trainer who has a proven track record of success in a project environment.

### Course Access

1. To access the class in the <a target="_blank" href="https://support.tricentis.com/">Support Portal</a>, click on "My Assets" -> Academy at URL:

   https://tricentis.csod.com/LMS/catalog/Welcome.aspx?tab_page_id=-67&tab_id=-1

1. Click "My courses".
2. Click "Open Curriculum" for Level 1 or 2.

   PROTIP: To speed up videos, click the gear icon and instead of "Normal", select "1.5".

   PROTIP: Use an additional monitor so you can see the tutorial on one screen and your notes in another screen.


### License

Instead of getting a <a target="_blank" href="http://www.tricentis.com/tricentis-tosca-testsuite/trial/">Tricentis Tosca Testsuite 14-day Trial license here</a>.

1. Request a training license by clicking on the email.

   https://support.tricentis.com/community/training_license_request.do

1. Choose on-premise or a cloud license

   https://tricentis.service-now.com/community/license_overview.do

1. Create a folder to hold Tosca stuff and cd to it.

1. Download "Tricentis Tosca 12.1 Documentation.zip" (the latest version as of this writing) from:

   <a target="_blank" href="https://support.tricentis.com/community/downloads.do">https://support.tricentis.com/community/downloads.do</a>

1. Switch to Finder and Unzip the file "Tricentis Tosca 12.1 Documentation.zip" to a folder which contains a website.
1. Delete the zip file.
1. Delete folder "Tricentis Tosca 12.1 Dokumentation_de" if you don't read German.
1. Click to open folder "Tricentis Tosca 12.1", "EN".
1. Unzip file "Tricentis Tosca 12.1 Documentation_en.zip".
1. Delete the zip file.
1. Click to open folder "Tricentis Tosca 12.1 Documentation_en".
1. Click "index.htm" to open the website.

   Also:

Repeat for folder "Tricentis_TDM_Studio_12_1".

Repeat for "Tricentis_Analytics 12.1_Documentation.zip"



## Installation

A Mac can only be used with a virtual server instance running Windows.
The Tosca Server is installed on Windows using local administrator rights.

1. Oncce the Windows server instance is available (in AWS Lightsail)?

1. Install Microsoft® .NET Framework Version 4.7.1 from:

   https://www.microsoft.com/en-US/download/details.aspx?id=56116

2. 

The Tosca Server is installed to the folder defined by system variable `%TRICENTIS_PROJECTS%` with value such as `C:\Tosca_Projects`.

The <strong>Tosca Commander</strong> executable is installed by running installation file TOSCA<em>version number</em>.exe such as `TOSCA12.1.exe`.

Executables are installed to directory `%TRICENTIS_HOME%` includes the following 64-bit executable files that are processor-independent:

   * TOSCACommander.exe
   * TCShell.exe
   * DbRepositorySchemaMigrator.exe

The 64-bit Tosca Commander are installed with standard AddIns (Tosca Requirements, Tosca TestCase-Design, Tosca Reporting, and Tosca Structured Objects).

These run in either 32 (*X86.exe) or 64-bit mode, depending on whether Tosca Commander is started in a 64-bit or 32-bit operating system.


A <strong>Tosca Commander</strong> agent are installed on Windows machines to invoke tests and receive results.


## Access

Ability to access the cloud server through the port TCP 443.

Instructions below are based on Tosca version 12.1.

1. Tosca's <strong>Support Portal</strong> provides links to articles, discussions, documentation, support incidents, search, , etc. at:

   <a target="_blank" href="https://support.tricentis.com/community/home.do?verify=s">https://support.tricentis.com/community/home.do?verify=s</a> for

1. Verify your email address.

1. Access the Tosca cloud license server Tricentis_Academy_Cloud.

   https://support.tricentis.com/community/manuals_detail.do?lang=en&url=licensing/lic_cloud.htm

1. Access the Tosca cloud license server Tricentis_Academy_Cloud.

   ### Connect to a Cloud-hosted license server

   <a target="_blank" href="https://www.youtube.com/watch?v=mWebNjwzasM">
   VIDEO: Tricentis Tosca License Activation</a>

1. In Tricentis Tosca Commander, navigate to the Project menu and click on License. Click on Connect.

## Workflow

1. Identify the criteria which the system under test is expected to fulfill, then create a clear Requirement structure that reflects these criteria.

2. Design a logical test structure to see what you need to cover your Requirements. Use TestCase-Design to create combinations of possible TestCases.

3. Create Modules that contain the technical information Tricentis Tosca needs to steer the system under test.

4. Create concrete TestCases out of your Modules. TestCases are a series of TestSteps that verify your specifications.

5. Configure your tests. You can centrally manage test configuration parameters for your entire team (see chapter "Configure tests").

6. Prepare and perform the execution of your tests (see chapter "Execute tests").

   Once you have executed your tests, Tricentis Tosca maps the test results with your Requirements. This gives you a good overview of

   * your testing status
   * the status of your system under test

## Interactive Testing

https://vimeo.com/336815189

Tosca Commander 

1. Setup a testing session
2. Distribute manual test cases

   Each session includes information on testers, assignments, test progress, issues raised.

