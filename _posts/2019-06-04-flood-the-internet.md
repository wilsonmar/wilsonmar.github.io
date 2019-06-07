---
layout: post
title: "Flood the-internet (measure JavaScript performance using Flood.io Element scripts)"
excerpt: "after standing up the website challenging functional test automation Selenium to run in Docker containers within AWS cloud, measured by NewRelic"
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

<!--
https://www.independent.co.uk/environment/sea-levels-rise-internet-cables-climate-change-underground-new-york-miami-a8449716.html
flood-car
-->

<a target="_blank" href="https://user-images.githubusercontent.com/300046/59126381-2f7b1680-8922-11e9-9ebb-279e8cca72b8.jpg"><img alt="2019-06-04-flood-the-internet-v04-1065x545-51451.jpg" src="https://user-images.githubusercontent.com/300046/59126381-2f7b1680-8922-11e9-9ebb-279e8cca72b8.jpg"></a>


Many are familiar with website <a target="_blank" href="https://the-internet.herokuapp.com/">https://the-internet.herokuapp.com/</a> which presents challenges to those learning manual actions to build test automation scripts for Selenium, as taught by websites <a target="_blank" href="https://ElementalSelenium.com/">ElementalSelenium.com/">ElementalSelenium.com</a> and <a target="_blank" href="https://SeleniumGuidebook.com/">SeleniumGuidebook.com/">SeleniumGuidebook.com</a>.

 We are concerned about <strong>performance</strong> with one of the controls in the app.

But we don't want to disturb Dave's site for everyone else. 
So in this article we how how you can recreate the <strong>app in a Docker container</strong> running within the <strong>AWS cloud</strong>.
You'll first need to get an AWS account and password for API access.

Because we are analysing the performance of JavaScript in the client app, we 
want to use <strong>Flood Element Typescript code</strong> which emulate <a href="#ManualActions">manual actions</a> instead of using line protocols like JMeter does. The scripts run on the <a target="_blank" href="https://www.flood.io/">flood.io</a> service in the cloud. So we need to first obtain a <strong>license token</strong>.

To create a app process to test against, we have a <strong>pull script</strong> that makes use of <strong>Dave's Docker image</strong> within Docker Hub. 

Now can create a <strong>metrics</strong> dashboard to show exactly what happens, over time, when we run those Element scripts on various size machines. We get answers to questions such as:

   * What is the impact on the cloud bill coding the UI that cool new way? 
   * What is the capacity of a free instance type?
   <br /><br />

The dashboard is powered by a <strong>monitoring process</strong> created using a <strong>Docker image from New Relic</strong>. This is because New Relic enables custom external metrics and more precise granular capture times. 

From the vendor website we get a <strong>license token</strong> that we put in our <strong>instrumentation script</strong> that installs a <strong>agent</strong> that sends <strong>events</strong> to be analyzed and visualized.

In order to simplify the pull script, we prefer to have an <strong>instrumented Docker image</strong> that has the agent already installed.

But we don't have Dave's <strgon>original create script</strong> to modify, so we <strong>create a new image</strong> in Docker Hub.

We have shared all our scripts in <strong>GitHub</strong> so you can quickly and easily repeat what we're showing here.

Also, Flood Element scripts in the GitHub repository provides a reference for those moving from Selenium.


<a name="ManualActions"></a>

## Manual testing actions

T.J. Myer wrote in his website <a target="_blank" href="http://www.tjmaher.com/p/programming-projects.html">
http://www.tjmaher.com/p/programming-projects.html</a> June - July 2015 a series describing his adventures coding Selenium on Dave's website:

1. <a target="_blank" href="http://www.tjmaher.com/2015/06/simple-manipulation-of-login-page.html">
Step One: Sketch out the simple manipulation of a Login page</a>

2. <a target="_blank" href="http://www.tjmaher.com/2015/06/creating-common-utilities-for-webdriver.html">
Step Two: Draft Common Utilities</a>

3. <a target="_blank" href="http://www.tjmaher.com/2015/07/how-java-stores-constants-static-final.html">
Step Three: Storing Constants: static finals vs enums</a>

4. <a target="_blank" href="http://www.tjmaher.com/2015/07/storing-locators-for-web-elements.html">
Step Four: Storing Locators for Web Elements</a>

5. <a target="_blank" href="http://www.tjmaher.com/2015/07/the-internet-page-object-model-examples.html">
Step Five: The Page Object Model</a>

6. <a target="_blank" href="http://www.tjmaher.com/2015/07/the-internet-writing-automated-test.html">
Step Six: Writing the Automated Test</a>

## Challenges on the-internet

1. A/B Testing
1. Add/Remove Elements
1. Basic Auth (user and pass: admin)
1. Broken Images
1. Challenging DOM
1. Checkboxes
1. Context Menu
1. Digest Authentication (user and pass: admin)
1. Disappearing Elements
1. Drag and Drop
1. Dropdown
1. Dynamic Content
1. Dynamic Controls
1. Dynamic Loading
1. Entry Ad
1. Exit Intent
1. File Download
1. File Upload
1. Floating Menu
1. Forgot Password
1. Form Authentication
1. Frames
1. Geolocation
1. Horizontal Slider
1. Hovers
1. Infinite Scroll
1. Inputs
1. JQuery UI Menus
1. JavaScript Alerts
1. JavaScript onload event error
1. Key Presses
1. Large & Deep DOM
1. Multiple Windows
1. Nested Frames
1. Notification Messages
1. Redirect Link
1. Secure File Download
1. Shifting Content
1. Slow Resources
1. Sortable Data Tables
1. Status Codes
1. Typos
1. WYSIWYG Editor