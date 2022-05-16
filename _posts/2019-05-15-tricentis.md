---
layout: post
title: "Tricentis Tosca"
excerpt: "Model-based functional testing through the lifecycle"
tags: [testing]
date: "2019-05-15"
file: "tricentis"
image:
# ![tricentis-denys-1900x500-135601.jpg
  feature: https://user-images.githubusercontent.com/300046/57971743-26b0a980-794f-11e9-855f-f6bedf8a5e52.jpg
  credit: Denys Nevozhai
  creditlink: https://unsplash.com/photos/8Cec-sGk0LQ
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/tricentis/">This article</a> contains my notes about learning and using <a target="_blank" href="https://www.tricentis.com/">Tricentis</a> Tosca for continuous functional testing.

{% include whatever.html %}

The unique contribution of this article is a maticulously sequenced concise yet deep presentation, with PROTIPs along the way, so you can quickly come up to speed with the product. All one this one page to simplify text search.

<strong>CAUTION: This article is being constructed as of May 20, 2019.</strong>

## Tricentis The company

<a target="_blank" href="https://www.glassdoor.com/Reviews/Tricentis-Reviews-E346785.htm">
On Glassdoor</a> 66% of employees would recommend Tricentis to a friend and 82% approve of the (Stanford MBA) CEO <a target="_blank" href="https://www.linkedin.com/in/sandeepjohri/">Sandeep Johri</a> (as of this writing).

* Wolfgang Platz, Founder & CPO, Tricentis
* Wayne Ariola, Marketing

Tricentis is based in Austria (Leonard-Bernstein Straße 10, 1220 Vienna).
In the United States, Tricentis has an office in Jersey City and Silicon Valley.
It also has a presence in Australia, Belgium, Denmark, Germany, India, Netherlands, Singapore, Switzerland, Poland, and the UK.

   * Get in Touch Live Chat</a>


PROTIP: The company does not allow communication with consumer email accounts such as gmail, hotmail, outlook, etc.

* 13.1K followers of <a target="_blank" href="https://twitter.com/Tricentis">@Tricentis</a> on Twitter
* 3.711 follows in <a target="_blank" href="https://www.facebook.com/TRICENTIS">facebook.com/TRICENTIS</a> 
* 2,900 subscribed to <a target="_blank" href="https://www.youtube.com/user/TRICENTIS">YouTube channel</a>
* <a target="_blank" href="https://www.linkedin.com/company/tricentis-technology-&-consulting-gmbh/">LinkedIn company page</a>

* <a target="_blank" href="https://usercommunity.tricentis.com/">https://usercommunity.tricentis.com</a>
* 1,125 entries in <a target="_blank" href="https://support.tricentis.com/community/discussions.do">Tricentis forum</a> is being retired.

* <a target="_blank" href="https://de.slideshare.net/tricentis">https://de.slideshare.net/tricentis</a> is in German

## Conferences

Each year the company hosts conferences in <a target="_blank" href="https://www.tricentis.com/accelerate/san-francisco/">San francisco</a> in the Spring and Vienna in the Fall.

<a target="_blank" href="https://www.tricentis.com/accelerate/san-francisco/watch-live/">Register for the live stream</a>

The conference has a mobile app "Tricentis Accelerate" (by Attendify).
An event code is given to those registered.

orders@eventbrite.com

Consulting supporters:

* Jeff Wilkinson, Managing Director, Accenture
* Ramesh Pai, Global Head, NextGen QA, Wipro

## Competition for Software Test Automation

Tricentis is the only vendor to achieve “leader” status in all three top analyst reports (i.e., the “Triple Crown.”).

<a target="_blank" href="https://user-images.githubusercontent.com/300046/57989461-0caebe00-7a58-11e9-818c-006fb0f1b3d6.jpg"><img alt="tosca-gartner-2018-1040x1084-30373.jpg" width="1040" height="1084" src="https://user-images.githubusercontent.com/300046/57989461-0caebe00-7a58-11e9-818c-006fb0f1b3d6.jpg"></a>

Tosca is called a <a target="_blank" href="https://www.tricentis.com/products/robotic-process-automation/model-based-automation/">"model-based"</a> test automation tool because automated tests are conducted based a database of metadata (technical information) extracted from the application under test during scans.

Because test cases are generated from the model, changes in the app's model (requirements) all impacted test cases can be automatically updated as well.
This tremendously reduces test case maintenance.

The model approach also enables makes <a target="_blank" href="https://www.tricentis.com/products/robotic-process-automation/">RPA (Roboticc Process Automation)</a> more reslient.

   * Tom Murphy, Sr. Director Analyst at Gartner

Being able to work on the model rather than script programming "democratizes" who can work on testing and automation. Business experts to contribute to test automation as well as eliminate the maintenance burden that erodes most test automation initiatives. Instead of programming a test automation framework, you scan the application’s UI or API to create a business-readable automation model.

The Tricentis USP (Unique Selling Proposition) is that Tosca's "codeless" UI means "non-programmers" can "rapidly create and manage sophisticated end-to-end tests —- without technical resources" -- and focus on business processes, workflows, and other business data. 

> My take however, is that testing is still "sophisticated" and requires someone interested in intracacies rather than magic simplicity.


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

## Salesforce

Version 12.2 introduces a new Salesforce Engine 3.0 for automating <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.2.0&url=engines_3.0/salesforce/sfdc_engine.htm">Lightning UI</a>, which also inclues <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.2.0&url=engines_3.0/salesforce/sfdc_sitescanner.htm">scanner</a>.


## Documentation

1. A matrix of links to documentation for each specific version is at: 

   <a target="_blank" href="https://support.tricentis.com/community/manuals_archive.do">https://support.tricentis.com/community/manuals_archive.do</a>

   Click the "Enter" under the <strong>Online</strong> heading associated with each version, for an URL such as this for version 12.1:

   <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.1.0&url=resources/webhelp/cover_web.htm">https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.1.0&url=resources/webhelp/cover_web.htm</a>
   
   PROTIP: Use the online rather than off-line because if you have a question, you would have a ready URL to a specific page that can be easily shared with Support and others.

   Alternately, off-line after download:

1. Create a folder on your machine to hold documentation files and cd into it.
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

1. Repeat above for folder "Tricentis_TDM_Studio_12_1". 

   PROTIP: TDM (Test Data Management) is the older feature superceded by TDS (Test Data Service), both of which save data in a database system such as SQLite. The TDM icon has a gray bar vs. clear gap in the TDS icon. Pulling data from a database enables real-time integration with other systems which updates the same database, such as a dynamic status of "Active" or "Inactive".

1. Repeat for "Tricentis_Analytics 12.1_Documentation.zip"
   Analytics is made available with the Enterprise license, which comes with a Qlic visualization tool license.


## Test Requirements management

Tosca purchased qTest as part of the QASymphony acquisition in 2019.

<a target="_blank" href="https://support.qasymphony.com/hc/en-us">Support QASymphony</a>

QTest also integrated with TOSCA to meeting FDA traceability requirements for signature approvals.


### Tosca features

This diagram at the <a target="_blank" href="https://tricentis.csod.com/LMS/catalog/Welcome.aspx?tab_page_id=-67&tab_id=-1">academy login page</a> pro

![tosca-features-373x373-13122](https://user-images.githubusercontent.com/300046/57995109-873e0480-7a7d-11e9-863f-6997cf16ddff.jpg)


### Tosca architecture components

<a target="_blank" href="https://user-images.githubusercontent.com/300046/57974321-9b95da80-7973-11e9-9415-948e1d1c0075.png"><img alt="tosca-arch-890x492.jpg" width="890" height="492" src="https://user-images.githubusercontent.com/300046/57974321-9b95da80-7973-11e9-9415-948e1d1c0075.png"></a>

Tosca Commander components:

   * Requirements Management (<a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.1.0&url=requirements/rqm_introduction.htm">icons</a>)
   * TestCase Design
   * TestPlanning
   * Reporting
   * Test Data Management (TDM) communicates with a TDM Repository
   * Tosca CI Remote Execution Service communicates with a Tosca CI Client on a Build server
   * Tosca Distribution Agent coordinates with Tosca Server and License server

Tosca (IIS) Server has a REST API Service and Tosca Workspaces working with the License Server and Tosca Connect.

   * Tosca Administration (Admin.) Console
   * DEX (Distributed Execution) communicates via DEX Agent to TCAPI
   * TDS (Test Data Service) Web Service

   * Tosca Event Monitor
   * Tosca Distribution Server
   * Exploratory Testin Server connects to 
   * REST API Service
   * Tosca Data Service communicates with Tricentis Tosca vis https
   * Interactive Testing Server
   * Tosca Analytics via TCAPI

Bottom-up Component and Workflow description:

   * <strong>ActionModes</strong> steer test objects. ActionModes define how the value in the Value field should be applied for XTestStepValues in order to steer the control. ActionModes available to an XTestStepValue depend on the InterfaceType of the referenced XModule. Input values needed more than once can be buffered using the ActionMode Buffer or saved to a global variable buffer.

   * <strong>Classic engines</strong> use Modules to <strong>steer</strong> tests of legacy apps such as PowerBuilder through their custom ports. Classic modules are used to steer mainframe and older Excel spreadsheets.

   * <strong>Engine 3.0</strong> use XModules steering modules created by XScan and Tosca Recorder for both Graphical User Interface (GUI) tests and non-GUI tests. The <strong>TBox framework</strong> contains (tree-like) hierarchically structures XModules to steer test objects.

   * Tricentis Tosca Mobile Engine 3.0 (which replaces Tosca Mobile+) automates testing of mobile applications running on smart phones, tablets, and Android emulators and iOS simulators.  

   * Tosca OSV (Orchestrated Service Virtualization) works through an OSV Addin to Tosca Commander communicating via SOAP to an OSV Host talking to OSV Database and OSV Monitor talking to License Server.
   * Tosca BI (Business Intelligence)
   * Tosca Commander interacts with a Windows Active Directory (via TCP & UDP) to connect Tosca Workspaces with a Common Repository using TCAPI
   * Tosca Commander Interactive Testing communicates with the Interactive Testing Server and Interactive Testing Agent.


## Tricentis Academy for Learning

<a target="_blank" href="https://www.tricentis.com/academy">https://www.tricentis.com/academy</a>

<a target="_blank" href="https://vimeo.com/336797866">About the Tricentis Academy</a>

1. All Tosca's <a target="_blank" href="https://vimeo.com/user29095750/videos">videos are stored in Vimeo</a> and <a target="_blank" href="https://www.youtube.com/user/TRICENTIS
">YouTube channel</a> and also referenced from Tosca's <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?lang=en&version=12.1.0&url=video/videos.htm">videos web page</a>.

   BLAH: Vimeo does not provide users with speed controls like YouTube does.

Customers who paid for Platinum (aka Enterprise) licenses access all trainings for free.


## Certification Classes

Initial core certification classes are free, but higher-level certifications are $149 each at<br />
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

   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/automation-specialist-for-sap/">Automation Specialist for SAP</a> is for the Desktop app.
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/automation-specialist-for-databases/">Automation Specialist for Databases</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/orchestrated-service-virtualization/">Orchestrated Service Virtualization</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/tosca-query-language/">Tosca Query Language</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/specialist-for-exploratory-testing/">Specialist for Exploratory Testing</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/bi-specialist/">BI Specialist</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/automation-specialist-for-api/">Automation Specialist for API</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/tosca-integration-developer/">Tosca Integration Developer</a>
   * <a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/tdm-studio-specialist-level-1/">TDM (Test Data Management) Studio Specialist</a> is obsoleted by the TDS product.
   <br /><br />

This diagram at the <a target="_blank" href="https://tricentis.csod.com/LMS/catalog/Welcome.aspx?tab_page_id=-67&tab_id=-1">academy login page</a> shows an OBSOLETE progression of certifications:

![tricentis-certs-417x152-5133](https://user-images.githubusercontent.com/300046/57994347-f74a8b80-7a79-11e9-8a63-bc2217df569f.jpg)


### Initial certifications

<a target="_blank" href="https://www.tricentis.com/academy/ondemand-training/automation-specialist-level-1/">Tricentis Automation Specialist 1 Self-Paced Track Standard</a> course in 20-25 hours covers HTML control recognition, design automated test cases, automation features, and final execution. Participants construct <a href="#AS1-test-cases">five automated GUI test cases</a> that covers control recognition, usage of steering parameters and dynamic values, execution on different browsers, and reusing modules.

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

   <a name="AS1-test-cases"></a>

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
   * <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?version=12.1.0&url=restapi/prerequisites.htm&tcapi=tcrsapi">TC (Tosca Client) REST API</a>
   * <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?version=12.1.0&url=topic1.html&tcapi=tboxapi">TBox (Tosca Box) API</a>
   * <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?version=12.1.0&url=topic1.html&tcapi=tcaddon">TCAddOn API</a>
   * <a target="_blank" href="https://support.tricentis.com/community/manuals_detail.do?version=12.1.0&url=topic3.html&tcapi=engwrap">Tosca Engine Wrapper</a> & Tosca EngineWrapper Extension


Tosca Guided Example Project v9.2 in page 2 of
https://support.tricentis.com/community/downloads.do


### Automation Specialist Practitioner training

The Automation Specialist Practitioner course is delivered over 2-day on-site by a certified Practitioner Trainer as an instructor-led  hands-on coaching session that builds on core skills developed in Tricentis online trainings with skills to apply on a custom (your own) SUT (System Under Test) and its unique requirements. 
The coaching session is delivered on site .
Topics include the Tosca Ecosystem, Troubleshooting.

The one-hour exam for this allows for a single try (60%), but open book.

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
1. Click "Environment Variables...". In section "System Variables", click "New...".
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
   <br /><br />

1. Click OK.
1. Click Next.
1. Click Next to default "Tosca Commander".
1. Click Install. Wait several minutes for it to finish.
1. Check "Check to restart after setup completion", then click Finish.
1. Click "Yes" to confirm restart.
1. Reconnect if you're running a virtual instance.
1. When the machine boots up again, click the Windows icon to see the Tosca programs installed:

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
1. Click "Open Curriculum" for Level 1 or 2.
1. Click "Launch" associated with the top lesson without a gree check icon.

   PROTIP: To speed up videos, click the gear icon and instead of "Normal", select "1.5".

   PROTIP: Use an additional monitor so you can see the tutorial on one screen and your notes in another screen.

   PROTIP: An error occurs if a user opens the course in more than one browser window.

## Workspace

1. Open Tosca Commander from Windows.

1. Create a new <strong>workspace</strong>.

   When a workspace is created with "Use workspace template" checked, Subset Default objects are automatically imported or via the option Import Subset in the file is located at: 
   
   `%TRICENTIS_PROJECTS%\ToscaCommander\Standard.tce`

   The newer format Standard.tsu file (default objects) contains Modules, pre-defined Virtual Folders, and Standard Reports.

   A <strong>subset</strong> is a file containing Tosca artifacts which can be shared with other projects using import and export. These have file extension ".tsu", such as:

   &nbsp; &nbsp; &nbsp; `AutomationSpecialistI_BaseSubset.tsu` (dated Feb 2, 2017).

   PROTIP: *.tsu files are binary format which can only be read by (imported into) Tosca.

   Prior versions stored subset files with extension `.tce`.
   There is no conversion utility.

   JSON files (documents) are loaded into Resources for manipulation. Resources require unique names to be assigned to them. Resources can be used multiple times within the same TestCase. When test execution finishes, used resources are discarded and can no longer be used across multiple TestCases.

   Each <strong>TestCase</strong> describes the sequence used for the verification of properties defined in specifications: the entries needed for the execution of the TestCase; the expected output or reactions to the entries on the part of the application to be tested; the expected follow-up conditions that result from the execution of the TestCase. The status of a test case goes from Planned, In work, to Completed.

   ### Project Settings
   
1. Click PROJECT in menu.
1. Click Settings. The list is about the various technical components:

   * Commander
   * Diagnostics
   * Engine
   * License
   * Special Engines
   * TBox
   * TCase from XL
   * TEx
   * TOSCAViewer
   * Tricentis Services
   * Wizard

   ### Options

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/58023674-a06ea180-7acd-11e9-87c6-2cf2fad27e20.jpg"><img alt="tosca-options_enable_trend_charts-836x426-38631.jpg" width="836" height="426" src="https://user-images.githubusercontent.com/300046/58023674-a06ea180-7acd-11e9-87c6-2cf2fad27e20.jpg"></a>


   ### UI Tour

   As with other Windows UI apps such as Microsoft Word/Excel/Project, when each menu item is clicked, its <strong>ribbon</strong> appears.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/57995524-c3726480-7a7f-11e9-9872-208b3dd70286.jpg"><img alt="tosca-menu-780x168-15363.jpg" width="780" height="168" src="https://user-images.githubusercontent.com/300046/57995524-c3726480-7a7f-11e9-9872-208b3dd70286.jpg"></a>

   The blue icons at the top are for save, undo, redo. The save icon is iconic (of a removeable "discette" used during the 1990's to store data). You can't undo after Save.
   An Admin can revert a project to a previous version using change history.

   PROTIP: Turn on comments w ??? Turn on association with a Git revision.

   The left pane is for navigation, the middle page is the working pane.

   Window tabs (such as "test cases") makes it easier to use the mouse among <strong>sections</strong> which are listed alphabetically within the left navigation pane but can be arranged to a lifecycle sequnece such as:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/58036402-3f07fc00-7ae8-11e9-9040-039e6e8dec87.jpg"><img align="right" alt="tosca-wheel-295x296-10687.jpg" width="295" height="295" src="https://user-images.githubusercontent.com/300046/58036402-3f07fc00-7ae8-11e9-9040-039e6e8dec87.jpg"></a>

   1. Requirements (yellow) to specify requirements for your TestCases and to assign risk coverage for prioritizing test effort.
   
   1. Modules (orange) to create modules for use in TestCases. Modules contain technical information used to steer test objects.
   
   1. Configurations structure your test configuration parameters at one specific point in your repository.
   
   1. TestPlanning to plan software quality assurance (QA) activities across the application lifecycle.
   
   1. TestCasesDesign (red) to put test cases (functional flows) into a logical structure by creating a TestSheet to show all possible combinations of TestCases required to ensure full test coverage.   
   
   1. TestCases (blue) ctrl+N, cntr+F, to create TestCases, which are made up of a series of TestSteps.
   
   1. Execution (green) to see the logs and results of standard or exploratory test runs which can be sped up with distributed execution.
   
   1. Issues to manage undesired behavior of the system under test. Create new issues that come up during test execution, or link existing issues to a TestCase log.

   1. BI-Testing
   
   1. Reporting (Addin) to create reports to document the status of your project.
   
   1. Test Data Management (not shown) to manage, use, and reuse your test data.
   <br /><br />

1. Drag and drop each section tab to the above sequence.

   ### Table

   To expand text column size to fit, double-click on the gray bar between two column headings.

   Right-Click on Name. Select Column Chooser. Drag Description and drop on column heading.


   ### Keyboard shortcuts

   After highlighting an item ...

   ctrl+T for a list. But remember to rename what is added.

   ctrl+. to add additional item.

## Workflow

1. Identify the <strong>Requirements criteria</strong> which the system under test is expected to fulfill, then create a clear Requirement structure that reflects these criteria.

   1. open and login to the Web Shop
   2. order the product “Blue Jeans”
   3. check out and pay using a credit card
   4. verify the price of the order and that the correct shipping costs have been applied
   5. log out of the Web Shop and close Internet Explorer
   <br /><br />

   The weight is calculated from 2 to the power of (Frequency class + Damange class). 
   So 2 to 4 + 4 = 2 to the power of 8 = 256.

   Each (business risk) <strong>Contribution</strong> % is based on the total of weights.
   This provides guidance on allocation of testing budget.

2. Design a logical <strong>test structure</strong> to see what you need to cover  Requirements. Use TestCase-Design to create combinations of possible TestCases.

   Right-click TestCases to create TestSheet, 
   
   Right-click test sheet to create Instances
   
   Right-click Login to create Folder, Folder structure, Virtual Folder, Test configuration parmaeter (.), Class.

   Right-click an Attribute to Toggle Business Relevance by pressing Ctrl+F7 so its icon turns color. Name it Verification.

3. Create <strong>Modules</strong> that contain the technical information Tricentis Tosca needs to steer the system under test. For steering, make an element uniquely identifiable in XScan:

   * Target's own properties or Parent of subordinate controls
   * Anchor controls on the same page
   * In relation to an image on the page
   * Index (sequence of occurance of the same property on a web page)
   * SmartID ?
   <br /><br />

   Right-click on a Module's <strong>attribute</strong> (that represent individual controls shown by the app) to Convert to ControlGroup with a name.

   Rename and save each module after identifying its controls.

4. Create concrete <strong>TestCases</strong> folders out of your Modules. TestCases are a series of TestSteps that verify requirements specifications.

   A <strong>Workspace</strong> is a local copy of certain parts of a repository for a whole project.

   Right-click on a test case to select Run from <strong>Scratchbook</strong>.

   Each should have:

   * Precondition
   * (workflow steps) Order Product, Start Checkout to obtain a total price
   * Verification of prices
   * Confirmation
   * Verification of success
   * Postcondition

   TCP (Test Case Parameter) applies predefined values to various test cases for various object types (case sensitive naming), such as the browser used during testing.

   Build up a straight-through test case.
   
   Convert to a template. Build it up with data. 

   Link the template to a test sheet.

   Drag Test case and drop in Requirements, Schema Name gets set.

   Which attribute goes to which value.

   TestCase Design contain instances.

5. Configure <strong>tests</strong>. You can centrally manage test configuration parameters for your team.

   To scan, right-click:
   
   <a target="_blank" href="https://user-images.githubusercontent.com/300046/57998101-2d453b00-7a8d-11e9-9ac7-f45ac98c03c8.jpg"><img alt="tosca-scan-344x230-8124.jpg" width="344" height="230" src="https://user-images.githubusercontent.com/300046/57998101-2d453b00-7a8d-11e9-9ac7-f45ac98c03c8.jpg"></a>

   The scan pop-up dialog Advanced view:<br />
   <img width="600" alt="tosca-scan-adv" src="https://user-images.githubusercontent.com/300046/58025711-48866980-7ad2-11e9-99ef-2762d94b3de7.png">

6. Prepare and perform the execution of your tests (see chapter "Execute tests").

   Once you have executed your tests, Tricentis Tosca maps the test results with your Requirements. This gives you a good overview of

   * your testing status
   * the status of your system under test

   Create ExecutionList and call it "Regression".

   Set result to "Passed" or "Failed".

   To link Requirements, drag the whole Regression suite to drop in Requirements.

   Now you can right-click to "Jump to".

   Execcution Test configuration can override plans, such as Browser.

TODO: ToscaDoctor using TQL to lint naming convention consistency to some rules.

   * No more than 15 items per level (see it all on one screen). Reorganize into folders containing clusters.

## Interactive Testing

VIDEO: <a target="_blank" href="https://vimeo.com/336815189">https://vimeo.com/336815189</a>

1. Setup a testing session
2. Distribute manual test cases

   Each session includes information on testers, assignments, test progress, issues raised.

<hr />

## Functions

In Tosca, functions are written under {} and Parameters under [].

Action `{Click}` moves the cursor to the center of the link, triggering any mouse overs along the way.

`{Click[5%][5%]}`

`ClickJUMP` does not trigger mouse overs along the way.
Alternately, a value "X" injects Javascript into the browser that clicks the element such that doesn't move the mouse.

Avoid using buffer values, referenced by entry such as ctrl+T, Tbox set buffer, then `{B[Email]}` because buffers are only local and transitory. View, Show DoNothing such as "<Buffername>". F9 key. The B[Email] must be defined before steps that use it. Use it for reorder numbers that change.
Instead use `CP` defined by TCP.

Generic test case: For values which can have multiple values (such as "News Stories" in the demo), define a Property named  ExplicitName with True value, then replace the name of the Module with `#1` for the first, `#last` for the last, or `#{B[...]}` to lookup in the Buffer.

For use with Generic controls: `ResultCount` is the number of controls which match a particular criteria within ActionMode "Buffer". It's not in a drop-down. Click the round blue circular down arrow to define fields to yield `.ResultCount->StoryCount`.

Create a "Hover every comment" tst case under "Click last story".
In property "Repetition" put value `{B[StoryCount]}`.
Instead of `#1`, put `#{REPETITION}` to take action in Value `{MOUSEOVER}` for ActionMode Input.

## References

<a target="_blank" href="https://www.youtube.com/watch?v=EN933IZzrVY">
Tricentis: A Tosca E2E Test Automation Example</a>
Aug 15, 2016 by Ominik Weissböck

## Notes

Avoid of using static waits of a specific amount of time.
Instead, use "wait on" event such as some text appearing (20 seconds by default set by TCP "SynchronizationTimeoutDuringWaitOn").
They could be additive.

Avoid copy and pasting parts of flows.
Instead use Repetition tolders and/or ReusableTestStepBlocks.

To see what value is being viueled, temporarily put ".innertext=WRONG".


Always define clean-up scenarios to clean up the test environment so that test steps after a step failure don't create a cascade of several failed steps, which make troubleshooting more difficult.

Define recovery scenario for known responses such as setting a new password when the previous password expires (a common situation).

Analyze the time each step took to run (the time servers took to "think") by extracting and analyzing results in the <strong>Scratchbook</strong>.

### Dynamic Control

Choose properties that uniquely identify the ccontrol

Update the property of the control to pull the valuee from a Buffer.

Use "TBox Set Buffer" to set the Buffer to the desired control.

Take the desired using the module.

### Excel (v12.1)

1. In Modules, under Standard modules > TBox XEngines > Excel.

   `#1` refers to the header row.

   `$1` refers to the first data row (row 4 in Excel).

   References columns using `#1` even though Excel uses A,B,C, etc.

Constraint ActionMode are considered before anything else.

KB0014621 on Excel

## Database

Tosca uses TBox ODBC connection by installing `sqliteodbc_w64.exe` (SQLite ODBC for Win64 Installation) from https://ch-werner.de/sqliteodbc/

Search "ODBC" and click "ODBC Data Sources (64-bit)" for Open ODBC Data sources with path: Control panel -> Administrative tools. Click "Run as administrator" for the "ODBC Data Source Administrator". Click the "Drivers" tab to see SQLite. Click "User DSN" tab. Click Add. Use SQLite3. 

Get SQLiteStudio 3.2.1 https://sqlitestudio.pl/index.rvt?act=download
(Instead of clicking Add) Drag the database file to the white part on the left.

To verify a single cell value in a database:
In TestCases: create  Databases folder. Rename it "Database".
Create TestCase. Name it "Get count".
ctrl+T to get "TBox DB Expert module". 
Expand Open Connection. DSN Value "Insurance".
For SQL Statement value, "select count(LicensePlateNuber) from TypeOfVehicle".
Expand Result Table.


select MileageYear from 




Business Revelance to Attributes

Cardinality

