---
layout: post
title: "Flood (vs. Selenium automation) coding"
excerpt: "Coding Flood Element TypeScript which (like Selenium) emulates manual actions in Google Chrome browsers"
tags: [flood, perftest, selenium, testing]
date: "2019-07-23"
file: "flood-coding"
image:
# flood-the-internet-wall-1900x500-105703.jpg
  feature: https://user-images.githubusercontent.com/300046/59104048-b4980880-88ed-11e9-9a93-c19baaef18ab.jpg
  credit: AttendantDesign
  creditlink: https://attendantdesign.com/fake-tsunami-films-flood-internet/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on step-by-step deep-dive introduction to automating manual actions into <a target="_blank" href="https://flood.io/"><strong>flood.io</strong></a> Element TypeScript using Google Chrome Developer Tools. 
After validation, the scripts are used on flood.io in the cloud to performance test public websites.

{% include whatever.html %}

This is a component illustrated as the upper-right corner of the video and flowchart at <a target="_blank" href="https://wilsonmar.github.io/flood-the-internet/">https://wilsonmar.github.io/flood-the-internet</a>, reiterated here:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/60763986-3be7b180-a03d-11e9-9002-2e9f3512c589.jpg"><img alt="flood-the-internet-v12-1900x959.jpg" width="1900" src="https://user-images.githubusercontent.com/300046/60763986-3be7b180-a03d-11e9-9002-2e9f3512c589.jpg"></a>

PROTIPs here provide additional commentary based on experience and foresight not available elsewhere.

1. If you don't have a <strong>Google Chrome Browser</strong> app installed, please install it now so that we can make use of the Google Chrome browser's Developer Tools to analyze web pages interacting with the server.

2. Since you'll be using it a lot, drag the app icon to whatever edge of the screen your Mac's Launchbar or Windows dock bar uses.
   This is usually the bottom edge.

3. Open Google Chrome.

4. If you are not using Chrome to view this page, triple-click the URL below to copy the URL, then switch to the Chrome browser and paste this page's address in the address field:

   ### URLs to sample apps
   
   Below are my articles about sample apps available:

   * <a target="_blank" href="https://wilsonmar.github.io/flood-the-internet">the-internet</a> badly coded UI that challenge test automation
   * <a target="_blank" href="https://wilsonmar.github.io/sap-fiori">sap-fiori</a>
   * <a target="_blank" href="https://wilsonmar.github.io/jpetstore">JPetstore</a> Java
   * <a target="_blank" href="https://wilsonmar.github.io/microtrader">Microtrader</a> async http/2 app
   <br /><br />

5. Click the link to the app to be automated.<br />
   Alternately, go directly to an app we want to automate, such as:

   <a target="_blank" href="https://sapui5.hana.ondemand.com/#/demoapps">https://sapui5.hana.ondemand.com/#/demoapps</a>

   ### View Source

   In order for a script to manipulate a control such as a checkbox, the script needs to have a <strong>handle</strong> which the browser uses internally. One way to do that we need to <strong>view Source</strong>. There are several ways to do that.
  
5. Cursor anywhere on a <strong>background area</strong> of the web page where the cursor is an arrow, then <strong>right-click</strong> to select "View Source" in the context menu.

   The HTML shown may be <strong>minified</strong> stripped of white space such as line breaks and indents that only people need for readability. This is a best-practice for production sites to reduce what is downloaded, which reduces load time for end-users.

   To get a formatted view of HTML:

   ### Chrome Developer Tools

   There are several ways to bring up Developer Tools. 

6. Click Google Chrome's menu button (the three line icon) at the upper-right corner to reach <strong>More Tools, Developer Tools</strong>. 

   This we can also be reached from clicking the top <strong>View</strong> menu. 
   
   But remember there is a keyboard shortcut of <strong>option+command+I</strong> on the Mac, which is what I usually do to avoid spending time reaching for my mouse.

7. Click the Developer Tool's menu icon (with the three vertical dots) to select which way the screen is docked.

8. Drag the top divider to see more lines.

9. Drag the separator between the two panes to see more code.

   Notice that within the head section are requests for additional files.

   In HTML are links for the client to download CSS and JavaScript code for download from a server or CDN.

   When JavaScript runs, it can manipulate that DOM (Document Object Model) that browsers build as the basis for what it shows to end-users.

9. To see the control handle, click the "Element" tab.

9. Mouse over the icon with the arrow into the box to "Select an element in the page to inspect it".

   But I prefer toggling using the keyboard shortcut <strong>command+shift+C</strong>.

9. Press that key if you don't see different colors when you mouse over the control you want to automate.

9. When highlighted, press the return key on your keyboard to highlight the HTML responsible for displaying that element.

9. If the line's arrow points to the right, click on it to expand its sub-levels.


## CSS id

The ideal way to obtain a reliable handle is to use a CSS id, which are supposed to be unique on each page.
An example of HTML code providing an id is:<a target="_blank" href="http://www.tjmaher.com/2015/06/simple-manipulation-of-login-page.html">*</a>

   <pre>&LT;input id="username" type="text" name="username"/></pre>

   Selenium code to reference the id is this:

   <pre>
        WebElement txtUsername = driver.findElement(By.id("username"));
        txtUsername.sendKeys(username);
   </pre>

   Typescript code for Flood is:

   <pre>
        WebElement txtUsername = driver.findElement(By.id("username")); ???
        txtUsername.sendKeys(username); ???
   </pre>

Alas, some developers do not code in that convenience.
If the developer cannot be reached or doesn't have time to add id's, then we need to use alternative methods.

### Sequence number for multiple elements

1. View HTML which does not provide an id.

   ???

   To specify a handle for multiple possibles, specify an <strong>nth-child instance value</strong> such as this Typescript:

   <pre>let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(6) > a'))</pre>
		
   This can be a rather brittle specification because the nth-child number may change over time if another element is inserted.

   ### XPath search

   A more reliable (and elegant) object identification string is using xpath:

   <pre>
   let selIssueType = await browser.findElement(By.xpath("//input[contains(@id, 'issuetype-field')]"))
   </pre>

   The usage of the `contains` method cuts down on the use of long and complex strings while targeting the specific nested object we want to interact with. We simply use the object property (in this case the `id` property) along with the property value.


### Title Lookup

One of the features of the SAP Fiori main page (and other screens) is that the order (positioning) of tiles can be changed by the use. And additional tiles can be added. For this reason, a method is needed to ensure that changes to a particular tile targeted for testing will continue to be recognized even after repositioning. This example code makes use of an <strong>XPath</strong> command to <strong>search</strong> within "&LT;dev" tags containing a particular text string titled:

   <pre>let tileEmployeeLookup = By.xpath("//div[contains(@title, 'Employee Lookup')]")
   </pre>

In the above code, the variable <tt>tileEmployeeLookup</tt> would contains the title Employee Lookup since very tile has a title property this should make our script resistant to changes made on this screen.

This would not work if the text "Employee lookup" is in several locations (is not unique).

This also would not work if the text is changed in the code by developers.



## partialVisibleText

2. We can also take advantage of the partialVisibleText method when identifying SAP objects - as follows:

   <pre>let tileEmployeeLookup = By.partialVisibleText('Employee Lookup')</pre>



## Walk down nested properties

The last-resort approach is to define multiple levels of <DIV> or <TABLE> tags such as:

   <pre>let linkNewAccount = await browser.findElement(By.xpath('//*[@id="brandBand_1"]/div/div[1]/div[2]/div/div/div[1]/div[1]/div[2]/ul/li[1]/a'))</pre>

This usually causes the object identification string to be very long and virtually unreadable.

This can be brittle because any changes to the hierarchy of tags in the script will likely make the test script fail when run again.


## SAP Fiori

Based on Jason's
https://docs.google.com/document/d/1w0UPPSBYLck4BDqtiBm1yGWYOS4DvIldng96ub-MWZg/edit


