---
layout: post
title: "Measure performance impact of JavaScript in Dave Hoeffner's the-internet website"
excerpt: "Using Flood.io Element scripts to measure impact of challenging JavaScript in websites stood up using Docker within AWS cloud, as measured by NewRelic"
tags: [flood, perftest, selenium, testing]
file: flood-element-the-internet-docker-aws-newrelic.md
image:
# flood-the-internet-wall-1900x500-105703.jpg
  feature: https://user-images.githubusercontent.com/300046/59104048-b4980880-88ed-11e9-9a93-c19baaef18ab.jpg
  credit: AttendantDesign.com
  creditlink: https://attendantdesign.com/fake-tsunami-films-flood-internet/
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<a name="IntroVideo"></a>
<amp-youtube data-videoid="ps--j4ePPbA" layout="responsive" width="480" height="270"></amp-youtube><br />

<em>Below is the narration (transcript) of the video above.</em>

Many are familiar with this website: <a target="_blank" href="https://the-internet.herokuapp.com/">https://the-internet.herokuapp.com/</a> "the-internet" running on herokuapp.com. The website was created by Dave Hoeffner to present <a href="#Controls">43 controls</a> which provide challenges to those learning to code <a href="#CodeSelenium">Selenium scripts</a> that automate <a href="#ManualActions">manual actions</a> real users perform on a <strong>internet browser</strong> such as Google Chrome.

Dave's tutorial websites include <a target="_blank" href="https://ElementalSelenium.com/">ElementalSelenium.com</a> and <a target="_blank" href="https://SeleniumGuidebook.com/">SeleniumGuidebook.com</a>.

Selenium makes use of older <strong>"Web Driver"</strong> APIs that control browsers from a variety of programming languages. <<<

But the new <strong>"Pupeteer"</strong> API exposes a comprehensive set of metrics that include performance <strong>timings</strong> for every manual action. They've been added to the "Audits" section of <strong>Chrome Developer Tools</strong> UI we've been using to figure out the classes and identifiers we code into Selenium scripts.

But since these <a target="_blank" href="https://developers.google.com/web/tools/lighthouse/">"Lighthouse" diagnostics</a> require manual typing each time, it can be tedious to keep repeating manual actions during each regression test. So we create <strong>scripts</strong> to automate manual actions in the <strong>Typescript</strong> programming language <strong>run</strong> by the <strong>Flood Element program</strong>. The program is <a href="#FloodLocal">installed locally using a shell script</a>. <<<

Typescript is a superset of the JavaScript programming language that is the default language controlling browsers. <<<

<!-- There is currently no Docker image containing Flood Element. So it needs to be installed. The npx command installs temporarily.
-->

After scripts are <strong>git pushed</strong> to a remote <a href="#ScriptsInGitHub">GitHub</a> repository, others can <strong>git clone</strong> onto their machine to run.

Both Element Typescript and Selenium control a <strong>single user</strong> GUI at a time. But we also want to see what happens when <strong>many users on many browser instances</strong> run at the same time exercising the website. We want to see how much a challenging JavaScript control can impact the server environment's <strong>memory, CPU, and other resources</strong>.

### App Build

But we don't want our experiments to overload Dave's public site for everyone else.

So we run the app as a <strong>Docker container</strong> within the <strong>AWS</strong> or other cloud.
The container and environment under test is built by invoking a <strong>build script</strong> that retrieves files from GitHub which makes use of a <strong>Docker image</strong> housed in Docker Hub and uses it to instantiate an app server for testing. It uses <strong>credentials</strong> for an AWS account associated with the appropriate groups with applicable permissions and roles needed.

### Emulate using Flood

We use the <strong>Flood.io</strong> service in the cloud (or on-premises) to emulate those many users by running automation scripts pulled from a <a href="#ScriptsInGitHub">GitHub repository</a>.

Flood Element scripts are a new innovation because it emulates <a href="#ManualActions">manual actions</a> within each user's browser.
Historically, Java code used by <strong>JMeter</strong> or Scala code used by <strong>Gatling</strong> emulate load by simply emulating just the exchange of what is sent between client browser and server. But a lot of work now occur inside the client browser. 

Multi-user Flood runs are controlled by <strong>run parameters</strong> such as the number of virtual users being emulated. <strong>Run shell scripts</strong> can be used to manage various runs, test data, and results over various <strong>variations</strong> in run conditions.

### Instrumentation

It's important to have a <strong>metrics dashboard</strong> that helps people make sense of measurements collected over time. This article talks about use of <strong>New Relic</strong>.

We have an <a href="#NewRelicInstrAWS">instrumentation script</a> which installs an <strong>agent</strong> (newrelic-infra) to run alongside the app. Because the sample app under test was written in the Ruby language, the agent is installed as a rpm file (<strong>newrelic.rpm</strong>) specified in the <strong>Gemfile</strong> referenced during installation. 

During runs, the agent sends notifications about <strong>events</strong> to a process installed using a <strong>Docker image in Docker Hub from New Relic</strong>. The <strong>monitoring process</strong> transfers events collected by agents 
to a metrics <strong>dashboard</strong> at <a target="_blank" href="https://www.newrelic.com/">newrelic.com</a>.

To validate communications, a <strong>license key</strong> obtained manually from the New Relic website is installed when the agent is installed.

The license key, plus <strong>IP address and port number</strong> of the metrics collector are provided to Flood so that it can add its metrics to New Relic over time. These metrics include the number of users, transaction response times, the rate of transactions per second processed, network bandwidth throughput, and transaction pass/fail error rates.

When we also add the <strong>cost</strong> of each run, we would be able to identify which configurations would provide the most profitable number of <strong>transactions per dollar</strong>.

<!-- We don't create an <strong>instrumented Docker image</strong> that has the agent already installed because the license differs for each installation. 
-->

Recap <em>(click for full screen pop up)</em>:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/60542595-85e53600-9cd1-11e9-9e1e-d8b3dca5e1e9.jpg"><img alt="flood-the-internet-v11b-1168x580.jpg" width="1148" src="https://user-images.githubusercontent.com/300046/60542595-85e53600-9cd1-11e9-9e1e-d8b3dca5e1e9.jpg"></a>


<a name="CodeSelenium"></a>

## Scripting the-internet with Selenium

Ruby code to create "the-internet" is at <a target="_blank" href="https://github.com/tourdedave/the-internet">https://github.com/tourdedave/the-internet</a>

<ul> "An example application that captures prominent and ugly functionality found on the web. Perfect for writing automated acceptance tests against."</ul>

Dave Haeffner spoke about his "the-internet" in 2015 <a target="_blank" href="https://www.youtube.com/watch?v=cIevkkD_LB4&t=19m14s">part 1</a> and <a target="_blank" href="https://www.youtube.com/watch?v=w0pYTX2t0pg">part 2</a> of "Selenium Test Automation: Practical Tips & Tricks" presentation recorded in Israel. His May 2016 <a target="_blank" href="https://www.youtube.com/watch?v=Zf_qsXK6YdM">"How to use Selenium successfully"</a> <a target="_blank" href="http://se.tips/sf-se-meetup-2016">slidedeck</a>.

T.J. Myer wrote in his <a target="_blank" href="http://www.tjmaher.com/p/programming-projects.html">his website</a> June - July 2015 a series describing his adventures coding Selenium on Dave's website:

1. <a target="_blank" href="http://www.tjmaher.com/2015/06/simple-manipulation-of-login-page.html">
Sketch out the simple manipulation of a Login page</a>
2. <a target="_blank" href="http://www.tjmaher.com/2015/06/creating-common-utilities-for-webdriver.html">
Draft Common Utilities</a>
3. <a target="_blank" href="http://www.tjmaher.com/2015/07/how-java-stores-constants-static-final.html">
Storing Constants: static finals vs enums</a>
4. <a target="_blank" href="http://www.tjmaher.com/2015/07/storing-locators-for-web-elements.html">
Storing Locators for Web Elements</a>
5. <a target="_blank" href="http://www.tjmaher.com/2015/07/the-internet-page-object-model-examples.html">
The Page Object Model</a>
6. <a target="_blank" href="http://www.tjmaher.com/2015/07/the-internet-writing-automated-test.html">
Writing the Automated Test</a>

The same issues addressed above also need to be addressed by any app automation tool.


<a name="ManualActions"></a>

## Challenges on The-Internet

Click on <a target="_blank" href="https://the-internet.herokuapp.com/"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> to see the sample app's UI on-line at<br /><a target="_blank" href="https://the-internet.herokuapp.com/">https://the-internet.herokuapp.com/</a><br />
Click on <a target="_blank" href="https://www.youtube.com/watch?v=cIevkkD_LB4&t=19m14s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> to view a video about manual actions and analysis of the UI page source code as the basis for Flood Element TypeScript creation.<br />
Click on <a target="_blank" href="https://github.com/daeep/Flood_Element/tree/master/The%20Internet%20Herokuapp"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"> to view the Flood Element TypeScript at<br />https://github.com/daeep/Flood_Element/tree/master/The%20Internet%20Herokuapp</a>

1. <a target="_blank" href="https://the-internet.herokuapp.com/abtest"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/01-AB%20Testing.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> A/B Test Control (also known as split testing)
2. <a target="_blank" href="https://the-internet.herokuapp.com/add_remove_elements/"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> Add/Remove Elements
3. <a target="_blank" href="https://the-internet.herokuapp.com/basic_auth"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/02-Basic%20Auth.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a><a target="_blank" href="https://www.youtube.com/watch?v=cIevkkD_LB4&t=19m14s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> Basic Auth (Sign in Username and Password: admin)
4. <a target="_blank" href="https://the-internet.herokuapp.com/broken_images"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/03-Broken%20Images.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Broken Images
5. <a target="_blank" href="https://the-internet.herokuapp.com/challenging_dom"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/04-Challenging_DOM.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Challenging DOM - this is the one impacting server resource
6. <a target="_blank" href="https://the-internet.herokuapp.com/checkboxes"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/05-Checkboxes.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Checkboxes
7. <a target="_blank" href="https://the-internet.herokuapp.com/context_menu"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> Context Menu
8. <a target="_blank" href="https://the-internet.herokuapp.com/digest_auth"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> Digest Authentication (user and pass: admin)
9. <a target="_blank" href="https://the-internet.herokuapp.com/disappearing_elements"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/07-Disappearing_Elements.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Disappearing Elements
10. <a target="_blank" href="https://the-internet.herokuapp.com/drag_and_drop"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> Drag and Drop
11. <a target="_blank" href="https://the-internet.herokuapp.com/dropdown"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/09-Dropdown.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Dropdown
12. <a target="_blank" href="https://the-internet.herokuapp.com/dynamic_content"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/10-Dynamic_Content.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Dynamic Content
13. <a target="_blank" href="https://the-internet.herokuapp.com/dynamic_controls"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/11-Dynamic_Controls.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Dynamic Controls
14. <a target="_blank" href="https://the-internet.herokuapp.com/dynamic_loading "><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/12-Dynamic_Loading.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Dynamic Loading
15. <a target="_blank" href="https://the-internet.herokuapp.com/entry_ad"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> Entry Ad
16. <a target="_blank" href="https://the-internet.herokuapp.com/exit_intent"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> Exit Intent
17. <a target="_blank" href="https://the-internet.herokuapp.com/download"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/14-File_Download.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> File Download
18. <a target="_blank" href="https://the-internet.herokuapp.com/upload"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/15-File_Upload.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> File Upload (issue in Element handling Windows vs Linux, also in Selenium)
19. <a target="_blank" href="https://the-internet.herokuapp.com/floating_menu"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/16-Floating_Menu.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Floating Menu
20. <a target="_blank" href="https://the-internet.herokuapp.com/forgot_password"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/17-Forgot_Password.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Forgot Password
21. <a target="_blank" href="https://the-internet.herokuapp.com/login"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/18-Form_Authentication.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Form Authentication
22. <a target="_blank" href="https://the-internet.herokuapp.com/frames"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/19-Frames-Nested_Frames.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Frames (Nested)
22. <a target="_blank" href="https://the-internet.herokuapp.com/frames"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/19-Frames-iFrames.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Frames (iFrames)
23. <a target="_blank" href="https://the-internet.herokuapp.com/geolocation"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/20-Geolocation.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Geolocation
24. <a target="_blank" href="https://the-internet.herokuapp.com/horizontal_slider"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/21-Horizontal_Slider.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Horizontal Slider
25. <a target="_blank" href="https://the-internet.herokuapp.com/hovers"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/22-Hovers.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Hovers
26. <a target="_blank" href="https://the-internet.herokuapp.com/infinite_scroll"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/23-Infinite_Scroll.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Infinite Scroll
27. <a target="_blank" href="https://the-internet.herokuapp.com/inputs"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> Inputs
28. <a target="_blank" href="https://the-internet.herokuapp.com/jqueryui/menu"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/24-JQueryUI.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> JQuery UI - Menus
29. <a target="_blank" href="https://the-internet.herokuapp.com/javascript_alerts"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> JavaScript Alerts
30. <a target="_blank" href="https://the-internet.herokuapp.com/javascript_error"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> JavaScript onload event error
31. <a target="_blank" href="https://the-internet.herokuapp.com/key_presses"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/27-Key_Presses.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Key Presses
32. <a target="_blank" href="https://the-internet.herokuapp.com/large"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/28-Large_DOM.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Large &amp; Deep DOM
33. <a target="_blank" href="https://the-internet.herokuapp.com/windows"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/29-Multiple_Windows.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Multiple Windows
34. <a target="_blank" href="https://the-internet.herokuapp.com/nested_frames"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/30-Nested_Frames.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Nested Frames
35. <a target="_blank" href="https://the-internet.herokuapp.com/notification_message"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/31-Notification_Message.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Notification Messages
36. <a target="_blank" href="https://the-internet.herokuapp.com/redirector"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/32-Redirect_Link.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Redirect Link
37. <a target="_blank" href="https://the-internet.herokuapp.com/download_secure"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/33-Secure_File_Download.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Secure File Download
38. <a target="_blank" href="https://the-internet.herokuapp.com/shifting_content"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/34-Shifting_Content.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Shifting Content
39. <a target="_blank" href="https://the-internet.herokuapp.com/slow"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/35-Slow_Resources.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Slow Resources
40. <a target="_blank" href="https://the-internet.herokuapp.com/tables"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/36-Data_Tables.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> (Sortable) Data Tables
41. <a target="_blank" href="https://the-internet.herokuapp.com/status_codes"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/37-Status_Codes.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Status Codes
42. <a target="_blank" href="https://the-internet.herokuapp.com/typos"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/38-Typos.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Typos
43. <a target="_blank" href="https://the-internet.herokuapp.com/tinymce"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a><a target="_blank" href="https://raw.githubusercontent.com/daeep/Flood_Element/master/The%20Internet%20Herokuapp/39-WYSIWYG_Editor.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> WYSIWYG Editor

Additional columns of icons will be added to show a discussion of how the script was built, plus 
another set of icons to reach run results for each test item.

<hr />

<a name="Steps"></a>

## Steps: Manual and automated scripts

The remainder of this tutorial describes the <strong>manual</strong> steps invoking automated scripts described in the <a href="#IntroVideo">introductory video above</a>.

The scripts instantiate two server instances using Docker:

1. If you're working on a local machine such as a Mac, Linux laptop, or Windows PC:

   <a href="#FlooLocalInstall">flood-local</a>

1. A <strong>monitoring process</strong> containing NewRelic software

   <a href="#NewRelicAgentInstall">NewRelicAgentInstall-aws-ec2</a>

2. A "the-internet" app under test (written in Ruby), with a monitoring agent;

   <a href="#FloodScriptUpdate">Flood Script Update-aws-ec2</a>

   <!-- These shell scripts install and call <a target="_blank" href="https://wilsonmar.github.io/terraform">Terraform</a> to instantiate, and Ansible to configure. Python is used to customize.
   -->

   PROTIP: This exercise stands up <strong>only one instance</strong> each and not multiple instances in a cluster for High Availability (HA). However, we recommend that 
   TODO: Autoscaling be done so that developers habitually use workflows needed for production usage.

Additionally, two cloud GUI 

   1. A New Relic dashboard provides visualization (charts and graphs) of monitoring results
   2. <a target="_blank" href="https://www.flood.io/">https://flood.io</a> is invoked to conduct multi-user performance emulation runs imposing artificial loads.

Each step in shell and Python automation scripts is documented in the script.


## Scripts


<a name="ScriptsInGitHub"></a>

### Project folders from GitHub

These steps are done manually on your local machine.

1. Create or navigate to a project <strong>folder</strong> for this effort.
1. Clone automation scripts:

   <pre><strong>git clone <a target="_blank" href="https://github.com/daeep/Flood_Element">https://github.com/daeep/Flood_Element</a></strong></pre>

1. Review Flood Element <a target="_blank" href="https://www.typescriptlang.org/docs/home.html">TypeScript</a> coding at:

   <a target="_blank" href="https://github.com/daeep/Flood_Element/blob/master/test_heroku_app.ts">https://github.com/daeep/Flood_Element/blob/master/test_heroku_app.ts</a>

1. Review the installation scripts:


See:
   * https://github.com/flood-io/load-testing-playground/tree/master/element
   * <a target="_blank" href="https://element.flood.io/docs/1.0/get-started">https://element.flood.io/docs/1.0/get-started</a>
   * https://github.com/flood-io/element


<a name="SetupAWS"></a>

### Setup AWS manually

   Based on <a target="_blank" href="https://wilsonmar.github.io/aws-onboarding">https://wilsonmar.github.io/aws-onboarding</a>

   On an internet browser such as Google Chrome, Apple Safari, or Microsoft Edge:

1. To limit financial exposure (to like $25 or whatever), buy a <a target="_blank" href="https://usa.visa.com/pay-with-visa/cards/prepaid-cards.html">pre-paid reloadable Visa</a> gift <a target="_blank" href="https://aws.amazon.com/premiumsupport/knowledge-center/accepted-payment-methods/">(debit) card</a> <a target="_blank" href="https://usa.visa.com/pay-with-visa/find-card/get-prepaid-card">pre-paid online</a> (which has an expiration date and some have a monthly service fee). The <a target="_blank" href="https://www.drawpayvisa.com/">Drawpay card</a> provides a 1% refund on purchases. Others provide fee-Free cash withdrawal at over 25,000 MoneyPass ATMs
1. Open AWS master account with email.
1. In IAM, lock down master account.
1. Create Security Group.
1. In IAM, create service account. 
1. Define service account with permissions.
1. Store key pair (credentials) for service account locally.
1. Select your AWS region.

   ### Script A : Instantiate AWS Docker in EC2 build script

1. Get to AWS EC2.
1. Choose and AMI - Ubuntu 16.04 LTS
1. Select EC2 instance type (t2.micro Free Tier eligible can handle up to 50 users), or "m5axlarge".
1. [10:23] Define Security Group add "All TCP Traffic".
1. Assign Key Pair name ___ 
1. [2:29] Download Key Pair
1. Save to file ???
1. [2:37] Launch Instance
1. PROTIP: Name instance "the-internet-app" so that files referring to this name (such as newrelicc-infra.yml) don't have to be changed.

   ### Terminal - AWS Key Pair

1. In Terminal store .pem file downloadd
1. SSH into instance.

   ### Terminal - AWS Key Pair

   Inside "the-internet" terminal:

1. [4:08] Within app server to hold "the-internet", install prerequisites (GPG certs, Docker):

   <pre>
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce
# verify:
sudo systemctl status docker
sudo docker --version
DOCKER_IMAGE="gprestes/the-internet"
sudo docker pull "$DOCKER_IMAGE"
sudo docker run -d -p 7080:5000 "$DOCKER_IMAGE"
CONTAINER_ID=$( docker ps | grep "$DOCKER_IMAGE" | cut -d " " -f 1 )
WANIP4=$( curl http://canhazip.com" )  # public IP4 address.
   </pre>   

1. [12:04] On a browser, verify external access to "the-internet" app using the external IP address from AWS, such as:

   <a target="_blank" href="http://52.91.73.157:7080/">http://52.91.73.157:7080/</a>


   <a name="NewRelicAgentInstall"></a>

   ### Setup "NewRelic" in a EC2 Ubuntu containing Docker 

   In a browser:

1. Login to AWS using your service account.
1. Get to AWS EC2.
1. Choose and AMI - Ubuntu 16.04 LTS
1. Select EC2 instance type (t2.micro Free Tier eligible can handle up to 50 users), or "m5axlarge".
1. [10:23] Define Security Group add "All TCP Traffic".
1. Assign Key Pair name ___ 
1. [2:29] Download Key Pair
1. Save to file ??? [15:07] ssh -i "ubuntu.pem" ubuntu@ec2-18-208-170-2.compute-1.amazonaws.com
1. [2:37] Launch Instance
1. Name instance "NewRelic" 

   ### Save NewRelic License Key 

   Based on <a target="_blank" href="https://www.ctl.io/developers/blog/post/tutorial-protecting-sensitive-info-docker">*</a>

1. [8:13] On the NewRelic web page Account Settings, highlight and save the License Key text
   
1. Open file `./secrets.env`

   NOTE: The secrets.env file is referenced in the `docker-compose.yml` file cloned from GitHub.

   <pre>
docker-compose build
docker-compose up
   </pre>

1. [15:29] Update `newrelicc-infra.yml` with license_key value.


   <a name="NewRelicInstrAWS"></a>

   ### Install NewRelic instrumentation agent

1. [8:13] Switch back to the terminal
1. TODO: Script to do this:

   <pre>
   # TODO: Replace with reference to secrets.env by docker-compose
   echo "license_key: a46bf7d3b4043cdfffcab3aaef677d29cc60d6be" | sudo tee -a /etc/newrelic-infra.yml
curl https://download.newrelic.com/infrastructure_agent/gpg/newrelic-infra.gpg | sudo apt-key add -
&nbsp;
cat /etc/lsb-release 
# [13:33] Based on NewRelic web page  
   # https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/installation/
printf "deb [arch=amd64] https://download.newrelic.com/infrastructure_agent/linux/apt bionic main" \
   | sudo tee -a /etc/apt/sources.list.d/newrelic-infra.list
sudo apt-get update
sudo apt-get install newrelic-infra -y
# Verify: more /etc/newrelic-infra.yml
&nbsp;
# TODO: automate this:
vi  /etc/newrelic-infra.yml
sudo vi /etc/newrelic-infra.yml
&nbsp;
# TODO: Identify the Docker ID to a variable: 
$CONTAINER_ID=$(sudo docker ps)
   # (value such as ba965ff40ef7)
sudo docker exec -i -t "$CONTAINER_ID" /bin/bash
&nbsp;
# TODO: From inside NewRelic process:
sudo docker cp ba965ff40ef7:/app/server.rb .
&nbsp;
# [19:31] Reboot:
sudo systemctl restart newrelic-infra
   </pre>

1. [19:57] Verify that NewRelic recognizes events from "the-internet-app" (subsituting the account number), such as:

   https://infrastructure.newrelic.com/accounts/2256749/hosts


   ### Install NewRelic agent in running "the-internet-app"

1. [20:38] Get inside Docker container:

   <pre>
# TODO: Identify the Docker ID to a variable: 
$CONTAINER_ID=$(sudo docker ps)
   # (value such as ba965ff40ef7)
sudo docker exec -i -t "$CONTAINER_ID" /bin/bash
   </pre>

   Based on https://docs.newrelic.com/docs/agents/ruby-agent/installation/install-new-relic-ruby-agent

1. [23:17] Add `gem 'newrelic_rpm'` in Gemfile.

   <pre>
   # TODO: From inside NewRelic process (example root@ba965ff40ef7):
   sudo docker cp "$CONTAINER_ID:/app/server.rb" .
   sudo docker cp server.rb "$CONTAINER_ID:/app/"
   # Backup existing
   cp Gemfile Gemfile.backup
   # TODO: Automate 
   ??? gem 'newrelic_rpm
   # For the server.rb which is larger it’s not possible to echo and cat the file,
   # so I copied it locally and edit it to include the require 'newrelic_rpm'
   sudo docker cp ba965ff40ef7:/app/server.rb .
   # And copy it back to the container:
   sudo docker cp server.rb ba965ff40ef7:/app/
   </pre>

1. Verify 

   ### Script B : Add in server.rb and create new Docker image

   This is so the Docker image can be used for scaling.

   <pre>
   sudo docker run -d -p 7080:5000 ruby-bundle-update
   &nbsp;
   # TODO: Identify the Docker ID to a variable: 
   $CONTAINER_ID=$(sudo docker ps)
   # (value such as 363ddc8f7439)
   sudo docker exec -i -t "$CONTAINER_ID" /bin/bash
   # Save updated files:
   sudo docker cp server.rb "$CONTAINER_ID:/app/"
   sudo docker cp Gemfile "$CONTAINER_ID:/app/"
   # Get inside:
   sudo docker exec -i -t  "$CONTAINER_ID" /bin/bash
   sudo docker ps
   sudo docker commit "$CONTAINER_ID" ruby-bundle-update
   sudo docker stop "$CONTAINER_ID"
   &nbsp;
   sudo docker ps
   sudo docker run -d -p 7080:5000 ruby-bundle-update
   sudo docker ps
   &nbsp;
   # TODO: copy file newrelic.yml from external
   touch 1
   vi q
   vi 1
   mv 1 newrelic.yml
   vi newrelic.yml 
   ls -lart  # to verify manually
   &nbsp;
   # TODO: Identify the Docker ID to a variable: 
   $CONTAINER_ID=$(sudo docker ps)
   # (value such as 178e6dc45ab7)
   &nbsp;
   sudo docker cp newrelic.yml "$CONTAINER_ID:/app/"
   sudo docker commit "$CONTAINER_ID" final-version
   sudo docker stop "$CONTAINER_ID"
   # Verify:
   sudo docker images
   # Restart:
   sudo docker run -d -p 7080:5000 final-version
   &nbsp;
   sudo docker ps
   history > /tmp/history.file
   </pre>


   <a name="FloodScriptUpdate"></a>

   ### Update Element .ts script for flood.io

1. Update the IP address in the script (several locations):

   <pre>await browser.visit('http://18.208.170.2:7080/')</pre>

   ### Create the-internet Docker image

   ### Instrument script for NewRelic 

1. Get license from newrelic.com
1. Insert license into script

   NOTE: <a target="_blank" href="https://github.com/ThyWoof/geek-movie-shop">https://github.com/ThyWoof/geek-movie-shop</a>


   ### Script C : Save instrumented Docker image to DockerHub for reuse

1. Docker save

   ### Flood

1. Create account (manually).
1. Get license token.
1. Insert license token in script.
1. Specify script in GitHub.
1. Run

   ### Script D : Run the-internet in AWS Docker process under instrumentation

1. If you don't have a <a target="_blank" href="https://www.flood.io/">flood.io</a> account, get one.
1. Confirm your account via email.
1. Log into Flood.io.
1. Specify script.
1. Specify run conditions.

1. Validate run pre-conditions.
1. Initiate run.
1. Stop run.
1. Collect run results.
1. Analyze run results / Generate visualizations.
1. Display summary statistics.

   
## Other APM

A full list of APM tools:

* New Relic
* Dynatrace OneAgent
* Dynatrace AppMon
* AppDynamics
* NudgeAPM


<a name="VerifySecurity"></a>

## Security scans

In today's ransomware enviornment, we all need to be extra vigilant to ensure security. 

1. Install <a target="_blank" href="https://inspec.io/">https://inspec.io</a> 
(created by Chef) 

1. Install <a target="_blank" href="https://github.com/docker/doccker-bench-security">https://github.com/docker/doccker-bench-security</a> 

1. Install CIS (Center for Internet Security) benchmarks for specific distributions and versions of Linux:

   * Distribution independent Linux
   * Debian Linux 8
   * Ubuntu Linux 16.04 LTS 
   * Amazon Linux 2 
   * Centos Linux 7
   * Oracle Linux 7
   * Red Hat Enterprise Linux 7
   * SUSE Linux Enterprise 12

The Linux Audit Framework is used to identify potential security weaknesses or policy violations

1. Install

   <pre>sudo apt install auditd
   pidof auditd</pre>

1. Add rules and list them

   <pre>sudo auditctl -w /usr/bin/dockerd -k docker
   sudo auditctl -l</pre>

1. Turn auditing on.
1. Analyze report

   <pre>sudo aureport</pre>


<a target="_blank" href="https://app.pluralsight.com/library/courses/securing-docker-platform/table-of-contents">Securing the Docker Platform</a>
by Nigel Brown Released 21 Jun 2018

<hr />


Questions about several other dimensions, such as:

   * What is the impact on the cloud bill (costs) of that cool JavaScript UI code? 
   * What is the capacity of a chosen instance type (such as the free tier t2.micro)?
   * How much more is needed to run the anticipated peak load?
   * What happens when that peak load is exceeded?
   <br /><br />

