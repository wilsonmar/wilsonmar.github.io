---
layout: post
title: "Tricentis Tosca"
excerpt: "Model-based functional testing through the lifecycle"
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

<a target="_blank" href="https://wilsonmar.github.io/tricentis/">This article</a> is a concise yet deep dive, hands-on, step-by-step tutorial about learning and using <a target="_blank" href="https://www.tricentis.com/">Tricentis</a> Tosca for continuous functional testing.

## Tricentis The company

<a target="_blank" href="https://www.glassdoor.com/Reviews/Tricentis-Reviews-E346785.htm">
On Glassdoor</a> 66% of employees would recommend Tricentis to a friend and 82% approve of the (Stanford MBA) CEO <a target="_blank" href="https://www.linkedin.com/in/sandeepjohri/">Sandeep Johri</a> (as of this writing).

* Wolfgang Platz, Founder & CPO, Tricentis
* Wayne Ariola, Tricentis

Tricentis is based in Austria (Leonard-Bernstein Straße 10, 1220 Vienna).
In the United States, Tricentis has an office in Jersey City and Silicon Valley.
It also has a presence in Australia, Belgium, Denmark, Germany, India, Netherlands, Singapore, Switzerland, Poland, and the UK.

PROTIP: The company does not allow communication with consumer email accounts such as gmail, hotmail, outlook, etc.

## Conferences

Each year the company hosts conferences in <a target="_blank" href="https://www.tricentis.com/accelerate/san-francisco/">San francisco</a> in the Spring and Vienna in the Fall.

<a target="_blank" href="https://www.tricentis.com/accelerate/san-francisco/watch-live/">Register for the live stream</a>

The conference has a mobile app "Tricentis Accelerate" (by Attendify).
Get an event code to register.

orders@eventbrite.com

Consulting supporters:

* Jeff Wilkinson, Managing Director, Accenture
* Ramesh Pai, Global Head, NextGen QA, Wipro

## Competition for Software Test Automation

Tricentis is the only vendor to achieve “leader” status in all three top analyst reports (i.e., the “Triple Crown.”).

<a target="_blank" href="https://user-images.githubusercontent.com/300046/57989461-0caebe00-7a58-11e9-818c-006fb0f1b3d6.jpg"><img alt="tosca-gartner-2018-1040x1084-30373.jpg" width="1040" height="1084" src="https://user-images.githubusercontent.com/300046/57989461-0caebe00-7a58-11e9-818c-006fb0f1b3d6.jpg"></a>

Tosca is called a <a target="_blank" href="https://www.tricentis.com/products/robotic-process-automation/model-based-automation/">"model-based"</a> test automation tool because automated tests are conducted based a database of metadata extracted from the application under test.

Because test cases are generated from the model, changes in the app's model (requirements) all impacted test cases can be automatically updated as well.
This tremendously reduces test case maintenance.

The model approach also enables makes <a target="_blank" href="https://www.tricentis.com/products/robotic-process-automation/">RPA (Roboticc Process Automation)</a> more reslient.

   * Tom Murphy, Sr. Director Analyst at Gartner

Being able to work on the model rather than script programming "democratizes" who can work on testing and automation. Business experts to contribute to test automation as well as eliminate the maintenance burden that erodes most test automation initiatives. Instead of programming a test automation framework, you scan the application’s UI or API to create a business-readable automation model.

Non-programmers can rapidly create and manage sophisticated end-to-end tests—without waiting on “technical” resources. 

## Customers in the wild

Tricentis has identified customers as including global enterprises such as Allianz, ANZ Bank, Cisco, Dolby, Experian, First Data, HSBC, Merck, Office Depot, Samsung, Swiss Re, Starbucks, Telstra, UBS, Vodafone, Whole Foods, and WorldPay. 
Testimonials by customer employees:

* Credit Karma - Ash Coleman, Head of Diversity & Inclusion, 
* Anthem - Adam Satterfield, Director of Testing & Quality 
* BNP Paribas - Philippe Buron

## SAP

Tosca's architecture enables Tosca to enable resilient test automation—for 150+ technologies, including SAP.

In May 2019 Tricentis bought <a target="_blank" href="https://www.tricentis.com/blog/intellicorp-change-impact-sap-1/">LiveCompare</a> for SAP change impact analysis from IntelliCorp, a pioneer smart systems company.

   * <a target="_blank" href="https://www.youtube.com/watch?v=mN_OGOqXbiM">The #1 Continuous Testing Platform for SAP Customers</a> May 8, 2019 at Sapphire 2019
   * <a target="_blank" href="https://www.youtube.com/watch?v=QUa9l1VLU3U&t=1m24s">Test Automation Across S/4 HANA Projects</a> May 8, 2019 [12:15] by Bhala Bhosale

   * <a target="_blank" href="https://www.youtube.com/watch?v=qBbB7jP-0Tw">SAP SAPPHIRE show booth highlight video</a>

Tosca Commander has a SAP Solution Manager 7.2 Integration.


## Documentation

1. A matrix of links to documentation for each specific version is at: 

   <a target="_blank" href="https://support.tricentis.com/community/manuals_archive.do">https://support.tricentis.com/community/manuals_archive.do</a>

   Click the "Enter" under the <strong>Online</strong> heading associated with each version, for an URL such as this for version 12.1:

   <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.1.0&url=resources/webhelp/cover_web.htm">https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.1.0&url=resources/webhelp/cover_web.htm</a>
   
   PROTIP: This is preferred because if you have a question, you have a URL to a specific page that can be easily shared with Support and others.

   Alternately, off-line after download:

1. Create a folder on your machine to hold files and cd into it.
1. Get to the documentation download page at:

   <a target="_blank" href="https://support.tricentis.com/community/downloads.do">https://support.tricentis.com/community/downloads.do</a>

1. Click to download "Tricentis Tosca 12.1 Documentation.zip" (the latest version as of this writing).

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

## Test Requirements management

Tosca purchased qTest as part of the QASymphony acquisition in 2019.

<a target="_blank" href="https://support.qasymphony.com/hc/en-us">Support QASymphony</a>

### Component architecture

<a target="_blank" href="https://user-images.githubusercontent.com/300046/57974321-9b95da80-7973-11e9-9415-948e1d1c0075.png"><img alt="tosca-arch-890x492.jpg" width="890" height="492" src="https://user-images.githubusercontent.com/300046/57974321-9b95da80-7973-11e9-9415-948e1d1c0075.png"></a>

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
   * Tosca Commander interacts with a Windows Active Directory (via TCP & UDP) to connectTosca Workspaces with a Common Repository using TCAPI
   Tosca Commander Interactive Testing communicates with the Interactive Testing Server and Interactive Testing Agent.


## Tricentis Academy for Learning

<a target="_blank" href="https://www.tricentis.com/academy">https://www.tricentis.com/academy</a>

<a target="_blank" href="https://vimeo.com/336797866">About the Tricentis Academy</a>

1. All Tosca's <a target="_blank" href="https://vimeo.com/user29095750/videos">videos are stored in Vimeo</a> and <a target="_blank" hrerf="https://www.youtube.com/user/TRICENTIS
">YouTube channel</a> and also referenced from Tosca's <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.1.0&url=video/videos.htm">videos web page</a>.

   BLAH: Vimeo does not provide users with speed controls like YouTube does.


## Certification Classes

Initial certifications are free, but higher-level certifications are $149 each at<br />
<a target="_blank" href="https://tricentis.service-now.com/community/webshop.do">
https://tricentis.service-now.com/community/webshop.do</a>

<a target="_blank" href="https://www.tricentis.com/academy/training-certifications">https://www.tricentis.com/academy/training-certifications</a> has several tracks:<br />
<a target="_blank" href="https://user-images.githubusercontent.com/300046/57974050-58396d00-796f-11e9-84bb-7392f555ca52.jpg"><img alt="tosca-Certification-1120x791.jpg" width="1120" height="791" src="https://user-images.githubusercontent.com/300046/57974050-58396d00-796f-11e9-84bb-7392f555ca52.jpg"></a>

Core classes:

   * Automation Specialist Level 1 & 2 (AS1 and AS2) is the prequesite to either
   * Automation Engineer Level 1 & 2 or
   * Test Design Specialist Level 1 & 2
   * Test Architect 1 certification can be taken after passing all the above.
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/qtest-specialist-level-1/">qTest Specialist</a>
 
Specialty classes:

   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/automation-specialist-for-sap/">Automation Specialist for SAP</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/automation-specialist-for-databases/">Automation Specialist for Databases</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/orchestrated-service-virtualization/">Orchestrated Service Virtualization</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/tosca-query-language/">Tosca Query Language</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/specialist-for-exploratory-testing/">Specialist for Exploratory Testing</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/bi-specialist/">BI Specialist</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/automation-specialist-for-api/">Automation Specialist for API</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/tosca-integration-developer/">Tosca Integration Developer</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/tdm-studio-specialist-level-1/">TDM (Test Data Management) Studio Specialist</a>


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

1. The Sample System Under Test is a <strong>Web Shop application</strong> at: 
   
   <a target="_blank" href="http://demowebshop.tricentis.com">http://demowebshop.tricentis.com</a>

1. Right-click to View Page Source. Notice `<!DOCTYPE html>` indicates it's a HTML5 app.

1. The tutorial goes over these test cases:

   1. Shipping Costs (core skills)
   2. Payment Process
   3. Discount Code
   4. Reorder
   5. Total Price all Orders
   6. Additional challenges


<a target="_blank" href="https://support.tricentis.com/community/product.do?number=WIT0001025">Automation Specialist 2</a> covers XML and Web Services test automation (REST API testing) using test case templates. <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/automation-specialist-level-2">Automation Specialist 2</a>

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

API References:

   * <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?version=12.1.0&url=topic1.html&tcapi=tcapi">TCAPI</a>
   * <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?version=12.1.0&url=restapi/prerequisites.htm&tcapi=tcrsapi">TC REST API</a>
   * <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?version=12.1.0&url=topic1.html&tcapi=tboxapi">TBox API</a>
   * <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?version=12.1.0&url=topic1.html&tcapi=tcaddon">TCAddOn API</a>
   * <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?version=12.1.0&url=topic3.html&tcapi=engwrap">Tosca Engine Wrapper</a> & Tosca EngineWrapper Extension


Tosca Guided Example Project v9.2 in page 2 of
https://support.tricentis.com/community/downloads.do


### Automation Specialist Practitioner training

The Automation Specialist Practitioner training is a hands-on, instructor-led coaching session that builds on the core skills developed in the Tricentis online trainings with skills for you to apply to your own SUT and your project’s unique requirements. 

The coaching session is delivered on site by a certified Practitioner Trainer who has a proven track record of success in a project environment.


## Windows Installation

The following is based on <a target="_blank" href="https://documentation.tricentis.com/en/1110/content/installation_tosca/installation_process.htm">this page</a>.

A Mac can only be used with a <a target="_blank" href="https://wilsonmar.github.io/windows-on-apple-mac-osx/">virtual server instance running Windows</a>.

1. The Tosca Server is installed on Windows using <strong>local administrator rights</strong>. So make sure you have that associated with the user account being used.

   Once the Windows server instance is available...

1. Install the latest Windows updates of the category Critical (Windows 7, 8) or Quality (Windows 10). 

   ### .NET Framework

1. Open the Firefox internet browser.
1. Install Microsoft® .NET Framework Version 4.7.1 from:

   <a target="_blank" href="https://www.microsoft.com/en-US/download/details.aspx?id=56116">https://www.microsoft.com/en-US/download/details.aspx?id=56116</a>

1. Click Download. Save file.

   Within an Amazon Workspaces instance, Downloads would be in<br />
   <pre>D:\Users\<em>UserName</em>\Downloads</pre>

1. When download is completed, double-click on the downloaded file to install to a folder named like:

   NDP471-KB4033342-x86-x64-AllOS-ENU

1. Click Yes to allow file to make changes.
1. "I have read ..." and click Install.
1. Restart.

   ### Environment Variables

   On Windows 10:
1. Click the Search icon. Type "Adv" to select "Advanced System Settings" of "Control Panel".
1. Click "Environment Variables...". In the section System Variables section, click "New...".
1. Type in Varible Name: `TRICENTIS_PROJECTS` with value such as `C:\Tosca_Projects` for where Tosca project data is stored. On cloud instances, specify 

   `D:\Users\wilsonmar@gmail.com\Downloads\Tosca_Projects`

1. Click "OK".

   #### TRICENTIS_HOME

1. Still in "Environment Variables...", again click "New...".
1. Type in Varible Name: `TRICENTIS_HOME` with value for where Tosca project data is stored, such as:

   `C:\Program Files (x86)\TRICENTIS\Tosca Toolsuite"`
   
   NOTE: The 64-bit Tosca Commander are installed with standard AddIns (Tosca Requirements, Tosca TestCase-Design, Tosca Reporting, and Tosca Structured Objects).

   These run in either 32 (*X86.exe) or 64-bit mode, depending on whether Tosca Commander is started in a 64-bit or 32-bit operating system.

1. Click "OK".


   ### Download installer

   <a target="_blank" href="https://www.youtube.com/watch?v=AmVSxxe5Cns&t=9m32s">VIDEO:</a>
   says from the Support page, select <strong>Downloads</strong> from the top menu:

   <a target="_blank" href="https://support.tricentis.com/community/top_downloads.do">https://support.tricentis.com/community/top_downloads.do</a>

   <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.1.0&url=installation_tosca/installation_process.htm">Documentation</a>

   BLAH: I don't see installer exe files. Support told me to:

1. Highlight this "Free Trials" URL to pasting inside the Windows machine:

   <a target="_blank" href="https://www.tricentis.com/software-testing-tool-trial-demo/">https://www.tricentis.com/software-testing-tool-trial-demo</a>

1. Click "Start Free Trial" under "Tosca".
1. Enter your email and click "Get Started".
1. Click "Save File" in the pop-up.
1. While you wait for the download to finish, viewing progress depends on the browser. On Firefox, click the icon at the upper-right corner:

   ![tosca-trial-download-firefox-413x100-4046](https://user-images.githubusercontent.com/300046/57981627-20760800-79f7-11e9-972d-de42235637ee.jpg)

   Version 12.1 is 1.0 GB.
   
1. Double-click on the <strong>Tosca Commander</strong> executable named TOSCA<em>version number</em>.exe such as `TOSCA12.1.exe`.
1. Click OK to install Microsoft pre-requisites.

1. Click "Next".
1. Check "I accept the terms in the license agreement", then "Next".
1. To avoid connections, uncheck "Help improve Tricentis...", "Next".
1. The default folder to install is 

   `C:\Program Files (x86)\TRICENTIS\Tosca Testsuite`

   Variable `TRICENTIS_HOME` is where executables are installed. The following 64-bit executable files installed are processor-independent:

   * TOSCACommander.exe
   * TCShell.exe
   * DbRepositorySchemaMigrator.exe

1. Click OK.
1. Click Next.
1. Click Next to default "Tosca Commander".
1. Click Install. Wait several minutes for it to finish.
1. Check "Check to restart after setup completion", then click Finish.
1. Click "Yes" to confirm restart.
1. Reconnect if you're running a virtual instance.
1. When the machine boots up again, click the Windows icon to see this:

   ![tosca-added-224x146-4301](https://user-images.githubusercontent.com/300046/57989337-8645ac80-7a56-11e9-9149-7fd0d343f759.jpg)

   The <strong>Tosca Commander</strong> agent is installed on Windows machines to invoke tests and receive results.


### Get Product License

NOTE: <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.1.0&url=licensing/lic_administering_licenses.htm
">Instructions below are based on Tosca version 12.1</a>.

Instead of getting a <a target="_blank" href="http://www.tricentis.com/tricentis-tosca-testsuite/trial/">Tricentis Tosca Testsuite 14-day Trial license here</a>.

1. Verify your email address.
1. Tosca's <strong>Support Portal</strong> provides links to articles, discussions, documentation, support incidents, search, , etc. at:

   <a target="_blank" href="https://support.tricentis.com/community/home.do?verify=s">https://support.tricentis.com/community/home.do?verify=s</a> for


1. Request a training license by clicking on the email or at:

   <a target="_blank" href="
   https://support.tricentis.com/community/training_license_request.do">
   https://support.tricentis.com/community/training_license_request.do</a>

1. Choose on-premise or a cloud license (while logged on) for:

   <a target="_blank" href="
   https://tricentis.service-now.com/community/license_overview.do">
   https://tricentis.service-now.com/community/license_overview.do</a>

   Go directly to the above URL if you already requested a license.

1. Click the icon on the same line as "Premium Package" to copy the license key text.

   <hr />

1. Access the Tosca cloud license server Tricentis_Academy_Cloud.

   https://support.tricentis.com/community/manuals_detail.do?lang=en&url=licensing/lic_cloud.htm

1. Access the Tosca cloud license server Tricentis_Academy_Cloud.

   https://support.tricentis.com/community/article.do?number=KB0013085
   Knowledge Base article

   ### Connect to a local license server

   <a target="_blank" href="https://www.youtube.com/watch?v=mWebNjwzasM">
   VIDEO: How to Activate your Trial</a> from inside Tosca Commander.

1. Click the Windows icon and click "Tosca License Configuration".
1. Click Activate.
1. Click Local Machine. OK.
1. Switch to the license port

1. Open Tricentis Tosca Commander, navigate to the Project menu and click on License. Click on Connect.

Ability to access the cloud server through the port TCP 443.

  <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=10.2.0&url=tosca_server/server_component_setup.htm">
  License Server installation</a> process [The TCP port is set to 7070 by default]


## Training Course Access

1. To access the class in the <a target="_blank" href="https://support.tricentis.com/">Support Portal</a>, click on "My Assets" -> Academy at URL:

   <a target="_blank" href="https://tricentis.csod.com/LMS/catalog/Welcome.aspx?tab_page_id=-67&tab_id=-1">https://tricentis.csod.com/LMS/catalog/Welcome.aspx?tab_page_id=-67&tab_id=-1</a>

   Password field must be less than 20 characters.

1. Click "My courses".
2. Click "Open Curriculum" for Level 1 or 2.

   PROTIP: To speed up videos, click the gear icon and instead of "Normal", select "1.5".

   PROTIP: Use an additional monitor so you can see the tutorial on one screen and your notes in another screen.


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

VIDEO: <a target="_blank" href="https://vimeo.com/336815189">https://vimeo.com/336815189</a>

1. Setup a testing session
2. Distribute manual test cases

   Each session includes information on testers, assignments, test progress, issues raised.

## References

https://www.youtube.com/watch?v=EN933IZzrVY
Tricentis: A Tosca E2E Test Automation Example
Aug 15, 2016 by ominik Weissböck
