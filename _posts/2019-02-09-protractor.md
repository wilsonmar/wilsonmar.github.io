---
layout: post
title: "Protractor"
excerpt: "Automate testing of Angular Js web apps using Selenium driven by Gherkin specs run by Cucumber"
modified:
tags: [testing]
file: 2019-02-09-protractor.md
image:
# protractor-report-1900x500.jpb
  feature: https://user-images.githubusercontent.com/300046/52524586-84589a00-2c6c-11e9-989d-d62cef3c3348.jpg
  credit: Abhishek Yadav
  creditlink: https://www.npmjs.com/package/protractor-html-reporter-2
comments: true
---
<em>{{ page.excerpt }}</em>
<hr />

{% include _toc.html %}

## TL;DR Summary

Protractor was written by the team who created the testing framework at <a target="_blank" href="http://angularjs.io/">Angular.io</a> (formerly <a target="_blank" href="http://angularjs.org/">Angular.js</a>) so they can automate its testing.
The first version of Protractor was released in July, 2013. 
Google continues to support the work.

Unlike traditional static HTML, client browsers running Angular apps <strong>dynamically generates HTML</strong> and JavaScript on the fly.

Since static or generated on the client, HTML is stored in a DOM (Document Object Model) web browsers maintain for each session.
And Protractor grabs specific HTML elements from within each DOM.

One of the major advantages pointed out on <a target="_blank" href="https://protractor.angular.io/">https://protractor.angular.io</a> (formerly <a target="_blank" href="https://protractortest.org/">protractortest.org</a>)
is that Protractor runs tests quicker than Selenium because it optimizes the need for manually adding (usually arbitrary) "sleep" and "wait" commands in test scripts.

Protractor adds "accessors" to Angular models, bindings, ng-options, and finding elements inside ng-repeat. 

Even if a website is not using Angular, many still prefer coding Protractor rather than Selenium alone.
Overall, Protractor requires less code than Selenium and provides additional functions to make querying of elements easier:

   * Protractor adds a convenient "waitfor" functions and accessors (locators) by button text, partial button text. 
   * It enables "find" by a combination of CSS and text (get me all the divs with class ‘pet’ and text ‘dog’).
   * Protractor adds the "addLocator" function to add custom locators. For example, get elements by handlebars properties.


<img align="right" alt="protractor-daniel-amorim-250x285-7982.jpg" width="250" src="https://user-images.githubusercontent.com/300046/52523432-78b2a680-2c5f-11e9-8f41-3efac46c2d27.jpg">

Daniel Amorim, in his 17 Apr 2014 <a target="_blank" href="https://www.thoughtworks.com/insights/blog/testing-angularjs-apps-protractor">
"Testing AngularJS apps with Protractor"</a>, showed this diagram:

Protractor is a <a target="_blank" href="http://nodejs.org/">NodeJs</a> application written in JavaScript or TypeScript.
It makes calls to a WebDriver which controls a web browser such as Microsoft's Edge, Apple's Safari, Google's Chrome, Mozilla's Firefox, etc.

Other components are described as we install each:

## Install prerequisites

1. Install package manager for your operating system so that in the future it recognizes the need for updates and does it with one command.

   On Macs, install Homebrew using the default Ruby instance:

   <pre>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</pre>

   On Windows, install Chocolatey from chocolatey.org. 
   See <a target="_blank" href="http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js">this StackOverflow thread</a>.

1. Install browser UI apps for cross-browser testing. On Macs:

   <pre>brew cask install google-chrome
   brew cask install firefox
   </pre>

   Alternately, on Windows:

   <pre>choco install googlechrome -y
   choco install firefox -y
   </pre>

1. Open a Terminal session on Mac or cmd session on Windows.

1. Install Node and NPM (Node Package Manager) globally:

   On Windows, see <a target="_blank" href="https://thepracticalsysadmin.com/quickly-get-node-js-up-and-running-on-windows/">
   this blog</a>. The use of choco should add to the PATH variable:

   <pre><strong>C:\Program Files\nodejs</strong></pre>

1. On Windows, go to Computer Properties to add a System Variable <strong>NODE_HOME</strong> to point to the same path above.

1. Use NPM to install Protractor from <a target="_blank" href="https://github.com/angular/protractor">https://github.com/angular/protractor</a>

   <pre><strong>npm install -g protractor
   protractor --version
   </strong></pre>

   At the end of sample output:
   <pre>Version 5.4.2</pre>

   NOTE: There is no need to install Selenium and WebDrivers as it comes within the Protractor install.

   BTW, the same command is used to update to the latest version of Protractor.

   The above only needs to be done once, and occassionally to update.

1. To update WebDriver "plug-in" for each internet browser needed to take over the keyboard and mouse.

   <pre><strong>webdriver-manager update
   webdriver-manager version
   </strong></pre>

   Sample output:
   <pre>[08:06:39] I/version - webdriver-manager 12.1.1
   </pre>

   NOTE: There is a WebDriver that is "headless" and does not involve iteraction on a browser UI:
   PhantomJS uses <a target="_blank" href="https://github.com/detro/ghostdriver">GhostDriver</a> to run tests in Headless mode.  

   * <a target="_blank" href="https://code.google.com/p/chromedriver/">https://code.google.com/p/chromedriver/</a>
   <br /><br />

1. Install Git using a package manager. On Mac, use Homebrew:

   <pre><strong>brew install git
   </strong></pre>

   Alternately, <a target="_blank" href="https://chocolatey.org/packages/git.install">On Windows</a>:

   <pre><strong>choco install git.install -y
   </strong></pre>

   <tt>-y</tt> enables you to skip confirmation prompts.

1. Install Java8 using a package manager. On Mac, use Homebrew:

   <pre><strong>brew tap caskroom/versions
   brew cask install java8
   </strong></pre>

   You'll need to input your password.

   Alternately, on Windows:

   <pre><strong>choco install jdk8 -y
   </strong></pre>

   WARNING: You must specify version 8 because the default version 11 onward have a different licensing by Oracle.

1. Verify Java install:

   <pre><strong>java -version
   </strong></pre>

   Sample response:

   <pre>java version "1.8.0_162"
Java(TM) SE Runtime Environment (build 1.8.0_162-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.162-b12, mixed mode)
   </pre>   

1, Exit your command instance and enter it again so installations take.

1. If you don't have a projects folder, create one under your user home folder. On Bash mine is:

   <pre><strong>cd ~
   mkdir gits
   cd gits
   </strong></pre>

   Others use "project".


## Your test assets repository

1. Identify a repository of sample Protractor code you want to use. It's best to use a sample repo in GitHub that works on a sample app running in the cloud. There are several:

   Nate Taylor's sample test assets at https://github.com/taylonr/intro-to-protractor 
   runs against the sample app at <a target="_blank" href="https://meanjs.herokuapp.com">https://meanjs.herokuapp.com</a>
   as described in his <a target="_blank" href="https://app.pluralsight.com/library/courses/protractor-introduction/table-of-contents">
   "Protractor Introduction"</a> video class released March 10 2015. 

   The sample app repo includes the MEAN.JS stack which consists of <a target="_blank" href="http://www.mongodb.org/">MongoDB</a>, <a target="_blank" href="http://www.nodejs.org/">Node.js</a>, <a target="_blank" href="http://expressjs.com/">Express API framework</a>, and <a target="_blank" href="http://angularjs.org/">AngularJS</a>.

   But the site is no longer active and there are errors when building the app.

   Another one is "http://www.thetestroom.com/". 
   But the full URL specified in the script associated with it is no longer available.

   So let's not use them.

1. Alternately, in a browser view the sample app running. 

   ![protractor-calculator-juliemr -648x235-7150](https://user-images.githubusercontent.com/300046/52525724-b9b8b400-2c7b-11e9-8a56-97ea39c6f5a7.jpg)

   Write down steps to run through the app, such as:

   1. Load <a target="_blank" href="http://juliemr.github.io/protractor-demo/">http://juliemr.github.io/protractor-demo</a>
   2. Click on the left box and enter 2.
   3. Ignore the operator as "+".
   4. Click on right box and enter 2.
   5. Click on "Go!" to perform the calculation.
   6. Verify the negative test case of 5, which makes the test fail.
   6. Change the test result to 4.
   7. Run again to verify that the result is 4, which makes the test pass.
   <br /><br />

1. View the repository of a sample app, containing test assets targeting its sample site:

   <a target="_blank" href="https://github.com/juliemr/protractor-demo/">https://github.com/juliemr/protractor-demo</a>

 1. Notice the repo has not been updated since 2015. So it will likely encounter deprecation and security errors if built locally.

   There are also Pull Requests and Issues pending for a long time.

1. <strong>Fork</strong> the repository online in GitHub so that you can make changes.

1. Because <tt>git clone</tt> does not establish a folder for the account (just the repo), 
   I manually create then cd into a folder for each GitHub account before I clone the repo.
   Several repos can have the same repo name.

   Since you forked the repo you would specify your own GitHub account name when cloning.
   For example, if your GitHub account is "wilsonmar", then create a folder:

   <pre><strong>cd ~/gits
   mkdir wilsonmar
   cd wilsonmar
   pwd
   </strong></pre>

   Alternately, if you didn't fork the repo, create folder for account "juliemr", the account holding our sample repo.
   
1. Clone the sample repository using your own account name:

   <pre><strong>git clone https://github.com/<em>your account name</em>/protractor-demo/
   cd protractor-demo
   </strong></pre>

   Sample response:

   <pre>Cloning into 'protractor-demo'...
   remote: Enumerating objects: 150, done.
   remote: Total 150 (delta 0), reused 0 (delta 0), pack-reused 150
   Receiving objects: 100% (150/150), 112.96 KiB | 3.32 MiB/s, done.
   Resolving deltas: 100% (56/56), done.
   </pre>

1. List folders and files at the top of the repo:

   <pre><strong>ls
   </strong></pre>

   The response:

   <pre>LICENSE      README.md    <strong>app</strong>          howtos       package.json <strong>test</strong>
   </pre>

   File <strong>package.json</strong> specifies dependencies that Node will download before beginning runs.

   PROTIP: The app folder contains the app's code. The "tests" folder contains tests associated with the app's source code
   <strong>in the same repository</strong>. This is getting more common than separate teams which maintain separate
   repositories for app and test code.

   PROTIP: The app folder contains the app's code. The "tests" folder contains tests associated with the app's source code
   <strong>in the same repository</strong>. This is getting more common than separate teams which maintain separate
   repositories for app and test code.

1. Get into the test folder:

   <pre><strong>cd test
   </strong></pre>

   File <strong>server.js</strong> is the file specified to Node.js to begin processing.



1. To download libraries to implement the <tt>package.json</tt> file:

   <pre><strong>npm install
   </strong></pre>   
   
   Older libraries may encounter deprecated dependencies.


## IDE to edit

1. If you prefer using an IDE, add code completions and other helpers.

   * Eclipse
   * WebStorm - https://www.jetbrains.com/webstorm/
   * Visual Studio Code - https://code.visualstudio.com/
   <br /><br />


## Protractor script edits

1. If you need to navigate to a page which does not use Angular, you can<a target="_blank" href="https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load
">*</a> turn off waiting for Angular by setting before the browser.get:

   <pre>browser.waitForAngularEnabled(false);</pre>

   PROTIP: Remember the semi-colon to end each sentence.


## Run Test

These are steps every time you run:

<a name="config.js"></a>

### Protractor Config for Jasmine

   Protractor is controlled by a <tt>config.js</tt> file such as this simple example:

   <pre>
// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: '<a href="#WebDriverURL">http://localhost:4444/wd/hub</a>',
  specs: ['<a href="#spec.js">local.chrome.spec.js</a>']
}
   </pre>

   The above specifies the use of the Jasmine JavaScript framework to run specs (short for specifications, or test case files).
   Jasmine allows you to write both unit and functional tests.

   Alternately, there is a <a href="#Cumcumber">"cucumber" framework</a> or Mocha.

   NOTE: The seleniumAddress URL shown here does not display on a browser because it is an "end point" which listens for API requests.
   But it does have a htm file for display.

   The <tt>seleniumAddress</tt> URL is to one of the options made available by Protractor:<a target="_blank" href="  https://github.com/angular/protractor/blob/master/lib/config.ts">*</a>:

   1. seleniumServerJar - to start a standalone Selenium Server locally.
   2. seleniumAddress - to connect to a Selenium Server which is already running.
   3. sauceUser/sauceKey - to use remote Selenium Servers via Sauce Labs.
   4. browserstackUser/browserstackKey - to use remote Selenium Servers via BrowserStack.
   5. directConnect - to connect directly to the browser Drivers for Firefox and Chrome browsers.
   <br /><br />

   Examples of other configuration js files include:
   * <a target="_blank" href="https://help.crossbrowsertesting.com/selenium-testing/frameworks/protractor/">CrossBrowserTesting.com</a>
   * <a target="_blank" href="https://developers.perfectomobile.com/display/PD/Writing+Protractor+First+Test+Script">PerfectoMobile.com</a>
   <br /><br />

   PROTIP: In the file name specify where the run occurs and what browser. For example: "local.chrome.conf.js" for chrome run locally. 
   Or "swarm.firefox.conf.js" for running Firefox on the remote "Swarm" cloud.


### Start WebDriver

1. Start WebDriver to a port. It was installe with Protractor:

   <pre><strong>webdriver-manager start 
   </strong></pre>

   This response expected:
   <pre>
   INFO [SeleniumServer.boot] - Selenium Server is up and running on port 4444
   </pre>

   This runs on your Terminal session, so 
   on Macs, press control+C to stop the session.

1. Use your cursor to open another Terminal/Command session.

1. View processes in the new Terminal session:

   <pre><strong>ps -a
   </strong></pre>

   Among the response:

   <pre>
   12260 ttys000    0:00.60 node /usr/local/bin/webdriver-manager start
   12261 ttys000    0:01.31 /usr/bin/java -Dwebdriver.chrome.driver=/usr/local/lib
   </pre>

   Alternately, start in background by adding a "&" to the end of the command:

   <pre><strong>webdriver-manager start &
   </strong></pre>

   Now you can continue on the same Terminal session while webdriver runs in the background.


   <a name="WebDriverURL"></a>
   
   ### SeleniumAddress WebDriver URL

1. View WebDriver web page: On Mac Terminal, use the open command to open a browser at the URL specified:

   <pre><strong>open <a target="_blank" href="http://localhost:4444/wd/hub/static/resource/hub.html">http://localhost:4444/wd/hub/static/resource/hub.html</a>
   </strong></pre>


1. On Windows, click the URL link above to open in your default browser.

   ![protractor-webdriver-new-462x168-6657](https://user-images.githubusercontent.com/300046/52521102-f49cf680-2c3f-11e9-8f77-54d2497a9cd6.jpg)

1. Click "Create Session" and select the browser:

   ![protractor-webdriver-select-216x174-5438](https://user-images.githubusercontent.com/300046/52523221-ead5bc00-2c5c-11e9-8f27-a8758c8d781a.jpg)


<a name="spec.js"></a>

### Spec.js file

View a sample spec.js file that was specified in a <a href="#config.js">config.js file</a>,
which gets (opens) a URL to expect the title to be as stated in ".toContain" method:

   <pre>
// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('<a target="_blank" href="http://juliemr.github.io/protractor-demo/">http://juliemr.github.io/protractor-demo/</a>');
    expect(browser.getTitle()).toContain('Super Calculator');
  });
});
   </pre>

   <tt>//</tt> (double forward slashes) in front of a line comments it out from being read.

   <tt>describe</tt> describes a <strong>test suite</strong> group (category) of tests.

   <tt>it</tt> specifies a <strong>test case</strong>.

   The two are referenced in <a href="#RunReports">run reports</a>

   <tt>browser.get</tt> specifies the URL handled by the browser.

   <tt>expect</tt> statements specify <a name="#Verifications">verifications</a>.

PROTIP: We recommend an <strong>incremental</strong> approach. 
First, run for just the URL appearing. Then add more test steps.
Once you obtain a successful test, commit the changes to the team repo (off your laptop).
This would make it easier to debug.

So first let's run the file as-is without changes.


### Run from inside Eclipse

1. When using Eclipse on Windows<a target="_blank" href="https://www.udemy.com/protractor-tutorial/learn/v4/t/lecture/10518998?start=0">*</a>, navigate to copy the <tt>spec1.js</tt> file from where Protractor was installed.
   For example, if my user name is wilsonmar, then it would be<br />
   <pre>C:\Users\wilsonmar\AppData\Roaming\npm\node_modules</pre>

1. Eclipse needs to know the path to a "Main" file. That's the <strong>cli.js</strong> file.
   Copy that file to the root of your test assets repository folder from
   ???

Alternately, if on Eclipse configured with the Protractor plugin:

1. Right-click on the Protractor project. Run As, Run Configurations...
1. Scroll to "Node.js Application" and click on it.
1. Click the "New Launch Configuration" icon at the top left of the dialog.
1. Click "Browse" and navigate to select your Protractor test asset repository as the Project.
1. Click "Main File" and navigate to where Protractor is installed, then the "cli.js" file.


### Run from CLI 

1. To invoke from a command-line Terminal:

   <pre><strong>protractor local.chrome.conf.js
   </strong></pre>

   A sample test output: 

   <pre>
   1 tests, 1 assertion, 0 failures.
   </pre>

### Browser appearance

During test runs, browser windows are opened and closed by Protractor.

![protractor-being-controlled-396x125-5009.png](https://user-images.githubusercontent.com/300046/52523982-9256ec80-2c65-11e9-860b-46d66a1827cc.jpg)



<a name="RunReports"></a>

## Reports

1. Generate HTML report by installing <a target="_blank" href="https://www.linkedin.com/in/abhishekkyd/">Abhishek Yadav</a>'s <a target="_blank" href="https://www.npmjs.com/package/protractor-html-reporter-2">
https://www.npmjs.com/package/protractor-html-reporter-2</a>
and then configuring the conf.js file.

   <pre><strong>npm install -g protractor-html-reporter-2
   </strong></pre>


<a name="EditingScripts"></a>

## Editing scripts

<a target="_blank" href="https://stackoverflow.com/questions/20927652/how-to-use-protractor-on-non-angularjs-website">
To use Protractor on an non-Angular.js website</a>, access the webdriver instance directly with browser.driver. 
For <a target="_blank" href="https://github.com/angular/protractor/blob/f52438549f7d920da1600199feaf58059d6fd692/spec/withLoginConf.js">example</a>:

   <pre>
   browser.driver.findElement(by.id('username')).sendKeys('Jane');
   browser.driver.findElement(by.id('password')).sendKeys('1234');
   browser.driver.findElement(by.id('clickme')).click();
   &nbsp;
    browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return /index/.test(url);
      });
    });
   </pre>

PROTIP: Instead of hard-coding username and password in the code, 
read a file from your user home folder to populate values in variables.


<a name="Verifications"></a>

## Verifications

* Wait until page is loaded.

* Error messages

* Take a screen shot on error.

* Capture the amount of time taken to do each step or series of steps.

* Same user & same page vs. other fields (title of page, field labels, field values)

* Same user but different pages

* Test different users (persona) to ensure those with different permissions can still do their job.


## Sample app for testing

You need a sample app to test against, and sample scripts that test that site.


### Test Gmail as sample app 

The provided repository contains an automated test for email sending functionality via Gmail as outlined below:

   1. Login to gmail
   2. Compose and Send an email with an alert message for not having body
   3. No verification is done in the code for any action like Login page displayed, compose email box etc 
   <br /><br />

Your task is to implement below test case:

   1. Login to account1 on Gmail
   2. Compose an email with unique subject, body and attachment
   3. Send it to account2
   4. Login to account2
   5. Open the email
   6. Verify the subject, body and attachment name
   <br /><br />

Notes:

   1. Account details should be configurable in params.
   2. Improve the existing code base to the best of your knowledge and expertise.
	3. Don't include packages and additional auto generated files like node_modules.
	4. The tests should pass

   The tests above are called "e2e" or end-to-end from login.

1. To run the tests:

   <pre><strong>npm run e2e</strong></pre>


<!--

   The recommended way would be to use the [Official Yo Generator](http://meanjs.org/generator.html) which generates the latest stable copy of the MEAN.JS boilerplate and supplies multiple sub-generators to ease your daily development cycles.


### Task Runners

1. Install <a target="_blank" href="http://bower.io/">Bower</a> to manage installation of packages for front-end UI in Node:

   <pre><strong>
   npm install -g bower
   </strong></pre>

   <pre>
   npm WARN deprecated bower@1.8.8: We don't recommend using Bower for new projects. Please consider Yarn and Webpack or Parcel. You can read how to migrate legacy project here: https://bower.io/blog/2017/how-to-migrate-away-from-bower/
   </pre>

1. Install <a target="_blank" href="http://gruntjs.com/">Grunt</a> Task Runner to automate your development process:
   
   <pre><strong>sudo npm install -g grunt-cli</strong></pre>

1. Type in your password.


   ### Grunt automation

1. To run the gruntfile.js

   <pre><strong>grunt
   </strong></pre>   
   
   http://localhost:3000/#!/EventRatings/new


1. View Protractor file


-->



<a name="Cucumber"></a>

## Cucumber

   CucumberJS supports <strong>async</strong> programming concepts in scripts with <strong>TypeScript</strong>, a strongly typed superset of plain Javascript.

1. for Cucumber, we use Typescript, which adds additional ("object oriented programming" featuers)  to JavaScript. 


## Object recognition

https://github.com/agilethought/inside-protractor-locators

Every protractor locator is formatted as (by.*), where * is the locator you have chosen to locate the element. Here is a list of the most common locators:

## Page Objects

https://www.protractortest.org/#/page-objects


## Learning Resources

    a. https://www.protractortest.org/#/tutorial
    b. https://chercher.tech/protractor/
    c. https://jasmine.github.io/2.0/introduction

To learn Angular, consider [Thinkster Popular Guide](http://www.thinkster.io/), and [Egghead Videos](https://egghead.io/).

https://developers.perfectomobile.com/display/PD/Writing+Protractor+First+Test+Script

https://medium.com/@igniteram/e2e-testing-with-protractor-cucumber-using-typescript-564575814e4a
Sep 14, 2016


## Project ideas

Add OpenCV and Tesseract

