---
layout: post
date: "2024-04-25"
file: "flood-the-internet"
title: "Flood the Internet (control JavaScript API)"
excerpt: "Prove that tools emulating users (Playwright, Selenium, JMeter, Flood Element, etc.) can recognize the gamut of controls on a challenging web app."
tags: [flood, perftest, selenium, testing, playwright]
image:
# flood-the-internet-wall-1900x500-105703.jpg
  feature: https://user-images.githubusercontent.com/300046/59104048-b4980880-88ed-11e9-9a93-c19baaef18ab.jpg
  credit: AttendantDesign.com
  creditlink: https://attendantdesign.com/fake-tsunami-films-flood-internet/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

{% include whatever.html %}

<a name="ManualActions"></a>

## Challenges on The-Internet app

The table below presents several icons associated with each page of the sample app's UI on-line at<br />
  <ul>
  <a target="_blank" href="https://the-internet.herokuapp.com/"><strong>https://the-internet.herokuapp.com</strong></a>
  </ul>

> "An example application that captures prominent and ugly functionality found on the web. Perfect for writing automated acceptance tests against."

Ruby code to create "the-internet" is now at

   <ul><a target="_blank" href="https://github.com/saucelabs/the-internet">https://github.com/saucelabs/the-internet</a>
   </ul>

The website was originally created at <a target="_blank" href="https://github.com/tourdedave/the-internet">https://github.com/tourdedave/the-internet</a> by Dave Haeffner since 2015 <a target="_blank" href="https://www.youtube.com/watch?v=cIevkkD_LB4&t=19m14s">part 1</a> and <a target="_blank" href="https://www.youtube.com/watch?v=w0pYTX2t0pg">part 2</a> of "Selenium Test Automation: Practical Tips & Tricks" presentation recorded in Israel. In his May 2016 <a target="_blank" href="https://www.youtube.com/watch?v=Zf_qsXK6YdM">"How to use Selenium successfully"</a> <a target="_blank" href="http://se.tips/sf-se-meetup-2016">slidedeck</a> he said:

Click on <a target="_blank" href="https://the-internet.herokuapp.com/"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> to see the sample app's GUI. The website was created by Dave Hoeffner to present <a href="#Controls">43 controls</a> which provide challenges to those learning to code <a href="#CodeSelenium">Selenium scripts</a> that automate <a href="#ManualActions">manual actions</a> real users perform on an <strong>internet browser</strong> (such as Google Chrome). Dave created the site as the basis for his tutorials at <a target="_blank" href="https://ElementalSelenium.com/">ElementalSelenium.com</a> and <a target="_blank" href="https://SeleniumGuidebook.com/">SeleniumGuidebook.com</a>.

Click on <img width="21" alt="Playright" src="https://playwright.dev/img/playwright-logo.svg"> to view <a target="_blank" href="https://github.com/bomonike/playwright-scripts/tree/main/the-internet/">Playwright emulation scripts</a>.

Click on <img width="21" alt="JMeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"> to view <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/">JMeter XML scripts for the control</a>.

Click on <a target="_blank" href="https://github.com/flood-io/element/tree/master/examples/internet-herokuapp"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"> to view the Flood Element TypeScript at<br />https://github.com/flood-io/element/tree/master/examples/internet-herokuapp</a><br />

Click on <a target="_blank" href="https://www.youtube.com/watch?v=cIevkkD_LB4&t=19m14s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> to view a video about manual actions and analysis of the UI page source code as the basis for test script creation.<br />

Additional columns of icons may be added to show <strong>sample run results</strong> for each test item.

1. <a target="_blank" href="https://the-internet.herokuapp.com/abtest"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/bomonike/playwright-scripts/blob/main/the-internet/AE01_ABTesting_wJM5.4.1_v01.ts"><img width="21" alt="Playwright" src="https://playwright.dev/img/playwright-logo.svg"></a><a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/blob/main/the-internet/AE01_TheInternet_ABTesting_wJM5.4.1_v02.jmx"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/01-AB_Testing.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a><a target="_blank" href="https://www.youtube.com/watch?v=w0pYTX2t0pg&t=31m52s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> A/B Test Control (also known as split testing)
2. <a target="_blank" href="https://the-internet.herokuapp.com/add_remove_elements/"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/02-Add_Remove.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Add/Remove Elements
3. <a target="_blank" href="https://the-internet.herokuapp.com/basic_auth"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/blob/main/the-internet/AE03_TheInternet_BasicAuth_wJM5.4.1_v03.jmx"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/03-Basic_Auth.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Basic Auth (Sign in Username and Password: admin)
4. <a target="_blank" href="https://the-internet.herokuapp.com/broken_images"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/blob/main/the-internet/AE04_TheInternet_BrokenImages_wJM5.4.1_v03.jmx"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/04-Broken_Images.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Broken Images
5. <a target="_blank" href="https://the-internet.herokuapp.com/challenging_dom"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/05-Challenging_DOM.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Challenging DOM - this is the one impacting server resource
6. <a target="_blank" href="https://the-internet.herokuapp.com/checkboxes"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/06-Checkboxes.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Checkboxes
7. <a target="_blank" href="https://the-internet.herokuapp.com/context_menu"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://github.com/flood-io/element/pull/46"><img width="21" alt="flood.io Element issue" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Context Menu
8. <a target="_blank" href="https://the-internet.herokuapp.com/digest_auth"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/blob/main/the-internet/AE08_TheInternet_DigestAuthentication_wJM5.4.1_v03.jmx"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/08-Digest_Auth.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Digest Authentication (user and pass: admin)
9. <a target="_blank" href="https://the-internet.herokuapp.com/disappearing_elements"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/09-Disappearing_Elements.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Disappearing Elements
10. <a target="_blank" href="https://the-internet.herokuapp.com/drag_and_drop"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://github.com/flood-io/element/pull/46"><img width="21" alt="flood.io Element issue" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a>  Drag and Drop
11. <a target="_blank" href="https://the-internet.herokuapp.com/dropdown"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/11-Dropdown.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Dropdown
12. <a target="_blank" href="https://the-internet.herokuapp.com/dynamic_content"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/12-Dynamic_Content.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Dynamic Content
13. <a target="_blank" href="https://the-internet.herokuapp.com/dynamic_controls"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/13-Dynamic_Controls.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Dynamic Controls
14. <a target="_blank" href="https://the-internet.herokuapp.com/dynamic_loading "><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/14-Dynamic_Loading.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a><a target="_blank" href="https://www.youtube.com/watch?v=cIevkkD_LB4&t=29m30s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> Dynamic Loading (using explicit wait for resilency)
15. <a target="_blank" href="https://the-internet.herokuapp.com/entry_ad"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/15-Entry_Ad.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Entry Ad
16. <a target="_blank" href="https://the-internet.herokuapp.com/exit_intent"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://github.com/flood-io/element/pull/46"><img width="21" alt="flood.io Element issue" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Exit Intent
17. <a target="_blank" href="https://the-internet.herokuapp.com/download"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/17-File_Download.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a><a target="_blank" href="https://www.youtube.com/watch?v=w0pYTX2t0pg&t=34m16s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> File Download (query HTTP HEADER first to make sure file contains something)
18. <a target="_blank" href="https://the-internet.herokuapp.com/upload"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/blob/main/the-internet/AE18_TheInternet_FileUpload_wJM5.4.1_v03.jmx"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/18-File_Upload.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> File Upload (issue in Element handling Windows vs Linux, also in Selenium)
19. <a target="_blank" href="https://the-internet.herokuapp.com/floating_menu"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/19-Floating_Menu.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Floating Menu
20. <a target="_blank" href="https://the-internet.herokuapp.com/forgot_password"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/20-Forgot_Password.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a><a target="_blank" href="https://www.youtube.com/watch?v=w0pYTX2t0pg&t=30m16s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> Forgot Password

21. <a target="_blank" href="https://the-internet.herokuapp.com/login"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/blob/main/the-internet/AE21_TheInternet_FormAuthentication_wJM5.4.1_v03.jmx"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/21-Form_Authentication.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a><a target="_blank" href="https://www.youtube.com/watch?v=cIevkkD_LB4&t=19m14s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> Form Authentication (Login)
<br /><a target="_blank" href="https://www.youtube.com/watch?v=cIevkkD_LB4&t=20m38s"><img alt="assertion on message" width="21" height="21" src="../images/youtube-21x21.png"></a> Logout (appears after login, not listed in the app's menu)

22. <a target="_blank" href="https://the-internet.herokuapp.com/frames"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/22-Frames-Nested_Frames.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Frames (Nested)<br /><a target="_blank" href="https://the-internet.herokuapp.com/frames"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/22-Frames-iFrames.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Frames (iFrames)
23. <a target="_blank" href="https://the-internet.herokuapp.com/geolocation"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/23-Geolocation.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Geolocation
24. <a target="_blank" href="https://the-internet.herokuapp.com/horizontal_slider"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/24-Horizontal_Slider.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Horizontal Slider
25. <a target="_blank" href="https://the-internet.herokuapp.com/hovers"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/25-Hovers.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Hovers
26. <a target="_blank" href="https://the-internet.herokuapp.com/infinite_scroll"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/26-Infinite_Scroll.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Infinite Scroll
27. <a target="_blank" href="https://the-internet.herokuapp.com/inputs"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/27-Inputs.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Inputs
28. <a target="_blank" href="https://the-internet.herokuapp.com/jqueryui/menu"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/28-JQueryUI.ts"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> JQuery UI - Menus
29. <a target="_blank" href="https://the-internet.herokuapp.com/javascript_alerts"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://github.com/flood-io/element/pull/76"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> JavaScript Alerts
30. <a target="_blank" href="https://the-internet.herokuapp.com/javascript_error"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://github.com/flood-io/element/pull/76"><img width="21" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a>  JavaScript onload event error
31. <a target="_blank" href="https://the-internet.herokuapp.com/key_presses"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/31-Key_Presses.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Key Presses
32. <a target="_blank" href="https://the-internet.herokuapp.com/large"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/32-Large_DOM.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a><a target="_blank" href="https://www.youtube.com/watch?v=w0pYTX2t0pg&t=37m57s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> Large &amp; Deep DOM
33. <a target="_blank" href="https://the-internet.herokuapp.com/windows"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/33-Multiple_Windows.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Multiple Windows
34. <a target="_blank" href="https://the-internet.herokuapp.com/nested_frames"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/34-Nested_Frames.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Nested Frames
35. <a target="_blank" href="https://the-internet.herokuapp.com/notification_message"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/35-Notification_Message.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a><a target="_blank" href="https://www.youtube.com/watch?v=w0pYTX2t0pg&t=37m43s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> Notification Messages (Growl listener)
36. <a target="_blank" href="https://the-internet.herokuapp.com/redirector"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/blob/main/the-internet/AE36_TheInternet_Redirect Link_wJM5.4.1_v03.jmx"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/36-Redirect_Link.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Redirect Link
37. <a target="_blank" href="https://the-internet.herokuapp.com/download_secure"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/37-Secure_File_Download.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Secure File Download
38. <a target="_blank" href="https://the-internet.herokuapp.com/shifting_content"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/38-Shifting_Content.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Shifting Content
39. <a target="_blank" href="https://the-internet.herokuapp.com/slow"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/39-Slow_Resources.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a><a target="_blank" href="https://www.youtube.com/watch?v=w0pYTX2t0pg&t=25m40s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> Slow Resources (blacklist slow resource with proxy server)
40. <a target="_blank" href="https://the-internet.herokuapp.com/tables"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/blob/main/the-internet/AE40_TheInternet_Slow Resources_wJM5.4.1_v02.jmx"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/40-Data_Tables.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> (Sortable) Data Tables
41. <a target="_blank" href="https://the-internet.herokuapp.com/status_codes"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/41-Status_Codes.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Status Codes
42. <a target="_blank" href="https://the-internet.herokuapp.com/typos"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/42-Typos.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> Typos
43. <a target="_blank" href="https://the-internet.herokuapp.com/tinymce"><img width="21" src="https://user-images.githubusercontent.com/300046/60136601-daccfd80-9761-11e9-8641-3bd7489f0afd.png"></a> <a target="_blank" href="https://github.com/wilsonmar/jmeter-scripts/tree/main/the-internet/"><img width="21" alt="jmeter" src="https://user-images.githubusercontent.com/300046/124912784-965cd500-dfab-11eb-9dd1-d23966aeed48.png"></a><a target="_blank" href="https://raw.githubusercontent.com/flood-io/element/master/examples/internet-herokuapp/43-WYSIWYG_Editor.ts"><img width="21" alt="flood.io Element script" alt="flood.io Element script" src="https://user-images.githubusercontent.com/300046/60134290-6e033480-975c-11e9-9fdb-71589c2c3a18.png"></a> WYSIWYG Editor

<a name="ScriptIssues"></a>

NOTE: Some scripts are under development.


<hr />

<a name="IntroVideo"></a>

## Video introduction

<amp-youtube data-videoid="ps--j4ePPbA" layout="responsive" width="480" height="270"></amp-youtube><br />

<em>Below is the narration (transcript) of the video above.</em>

Selenium makes use of older <strong>"Web Driver"</strong> APIs that control browsers from code written in a variety of programming languages.

But the new Google <strong>"Lighthouse"</strong> API exposes a comprehensive set of metrics that include performance <strong>timings</strong> for every manual action. They've been added to the "Audits" section of <strong>Chrome Developer Tools</strong> UI we've been using to figure out the classes and identifiers we code into Selenium scripts.

But since these <a target="_blank" href="https://developers.google.com/web/tools/lighthouse/">"Lighthouse" diagnostics</a> require manual effort each time, it can be tedious to keep repeating manual actions during each regression test. So we create <strong>scripts</strong> to automate manual actions in the <a target="_blank" href="https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/">Typescript</a> programming language <strong>run</strong> by the <strong>Flood Element program</strong>. The program is <a href="#FloodLocalInstall">installed locally using a shell script</a>.

Typescript is a superset of the JavaScript programming language that control browsers.
Typescript is used because its <a href="#ElementCoding">transpiler</a> checks for errors sooner than JavaScript.

<!-- There is currently no Docker image containing Flood Element. So it needs to be installed. The npx command installs temporarily.
-->

After scripts are <strong>git pushed</strong> to a remote <a href="#ScriptsInGitHub">GitHub</a> repository, others can <strong>git clone</strong> onto their machine to run.

Both Element CLI and Selenium control a <strong>single user</strong> GUI at a time. But we also want to see what happens when <strong>many users on many browser instances</strong> run at the same time exercising the website. We want to see how much each JavaScript control can impact both the client and server environment's <strong>memory, CPU, and other resources</strong>. <<<

### App Build

But we don't want our experiments to overload Dave's public site for everyone else.

So we run the app as a <strong>Docker container</strong> within the <strong>AWS</strong> or other cloud.
The container and environment under test is built by invoking a <strong>build script</strong> that retrieves files from GitHub which makes use of a <strong>Docker image</strong> housed in Docker Hub and uses it to instantiate an app server for testing. It uses <strong>credentials</strong> for an AWS account associated with the appropriate groups with applicable permissions and roles needed.

<a href="Flood"></a>

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


<hr />

<a name="Architecture"></a>

## Recap: Architectural components

<a target="_blank" href="https://user-images.githubusercontent.com/300046/60763986-3be7b180-a03d-11e9-9002-2e9f3512c589.jpg"><img alt="flood-the-internet-v12-1900x959.jpg" width="1900" src="https://user-images.githubusercontent.com/300046/60763986-3be7b180-a03d-11e9-9002-2e9f3512c589.jpg"></a>

While learning on a local machine such as a Mac, Linux laptop, or Windows PC:

   1. Chrome Developer Tools is used to extract identifiers, classess, and selectors in HTML and CSS to programmatically reach each GUI control used in each TypeScript.

   2. The Flood Element CLI is installed to run Element TypeScript to emulate a <strong>single user</strong>'s manual actions on a Google's Chrome browser.

The system under (load) test (SUT) instantiated using Docker:

   1. The "the-internet" web app from a Docker image
   2. The <strong>monitoring process</strong>, which can be in another container or as another pod within the same container as the web app.

Additionally, the GUI of two cloud services:

   1. <a target="_blank" href="https://www.flood.io/">https://flood.io</a> which runs TypeScript to  emulate the browsers for multiple users, which imposes an artificial load.
   
   2. <a target="_blank" href="https://blog.newrelic.com/product-news/steal-this-dashboard/">A New Relic dashboard</a> which provides visualization (line graphs) of metrics collected during runs over time and under various configurations.



<a name="ScriptsInGitHub"></a>

### Project folders from GitHub

These steps are done manually on your local machine.

1. Create or navigate to a project <strong>folder</strong> for this effort.
1. Clone automation scripts:

   <pre><strong>git clone <a target="_blank" href="https://github.com/flood-io/element/tree/master/examples/internet-herokuapp">https://github.com/flood-io/element/tree/master/examples/internet-herokuapp</a></strong></pre>

1. Review Flood Element <a target="_blank" href="https://www.typescriptlang.org/docs/home.html">TypeScript</a> coding.

1. Review the installation scripts:

   See: <a target="_blank" href="https://github.com/flood-io/load-testing-playground/tree/master/element">https://github.com/flood-io/load-testing-playground/tree/master/element</a>


<hr />

<a name="HowTo"></a>

## How To Manual Steps

Here are the manual steps to make use of instructions in this tutorial:

NOTE: This assumes that you know how to open and use a <a target="_blank" href="https://wilsonmar.github.io/mac-finder/">Terminal program on a Mac</a> or a Git Bash on Windows.

1. Study the <a href="#CodeSelenium">app under test</a> and <a href="#ManualActions">manual actions</a> captured into <a href="#CodeSelenium">Selenium</a> and <a href="#ManualActions">Flood Element test automation script code (below)</a>.
2. Invoke the Flood Element CLI install locally using the Flood Element TypeScript code provided, which calls on Google's Pupetter technology to control client browsers.

3. Get an AWS service account linked to AWS Roles assigned to Groups with Permissions.
   See <a target="_blank" href="https://wilsonmar.github.io/aws-onboarding">https://wilsonmar.github.io/aws-onboarding</a>, which describes editing files which store credentails (UserName and Password) in environment files which are invoked during runs to populate environment variables referenced by automation scripts.

4. Install within AWS "the-internet" app under test from DockerHub
   <a href="#FloodScriptUpdate">Flood Script Update-aws-ec2</a>

   NOTE: Automation for installation within the Azure cloud is on our Roadmap.

5. Obtain logins to accounts for <a target="_blank" href="https://newrelic.com/products/application-monitoring">New Relic APM</a>, <a target="_blank" href="https://newrelic.com/products/browser-monitoring">New Relic Browser</a>, and <a target="_blank" href="https://newrelic.com/products/infrastructure">New Relic Infrastructure</a>.
5. Install <strong>NewRelic's monitoring process</strong> 
   
   <a href="#NewRelicAgentInstall">NewRelicAgentInstall-aws-ec2.sh</a>

6. Define <strong>initial run parameters</strong> to control runs of flood.io in the cloud (Flood.io account, etc.) in <a href="#flood-run-e2e">flood-run-e2e.sh</a>.
7. <a href="#flood-run-e2e">Run "flood-run-e2e" to launch runs in flood.io</a> at scheduled times to take advantage of AWS Spot Rates.

   PROTIP: Automation (shell or Python) scripts to bring up servers and conduct runs are designed to minimize spend (not waste money on idle resources). Services are deleted after each run.

8. <a href="#ConfigNewRelic">Configure New Relic dashboard</a>
9. Review warning and error messages. Analyze statistics collected by the Chrome Browser's Lighthouse and sent to NewRelic's dashboard in the cloud.
9. Identify the <strong>fastest realistic ramp-up</strong> time (without causing errors) by re-running with different rates which running users are added.

9. Experiment with changes to JavaScript, HTML, and CSS in client application code in attempts to reduce timings and resource usage on browsers.
9. Modify TypeScript accordingly to identify the <strong>impact</strong> of changes made to the application before reruns.

   NOTE: Concern about metrics is more about what is happening in client browsers than in the application server. The application under test here ("the-internet") does not make use of separate <strong>authentication servers</strong>, a <strong>database</strong>, nor other back-end services. 

9. Run separate <strong>isolated scenarios</strong> to isolate transactions to study:

   1. <strike>Registration (to establish new users)</strike>
   2. Login (to load authentication)
   3. Menus and static pages (when users are exploring)
   4. User data entry filling out forms (editing <strike>and saving form data into a database</strike>)
   5. <strike>Client-side performance during batch reporting, backup, restore, or other back-end processing</strike>
   <br />

9. Identify the <strong>mix of transactions</strong> in a standardized run of different transactions at a time.

   PROTIP: This exercise stands up <strong>only one instance</strong> each and not multiple instances in a cluster for High Availability (HA). 
   <!-- These shell scripts install and call <a target="_blank" href="https://wilsonmar.github.io/terraform">Terraform</a> to instantiate, and Ansible to configure. Python is used to customize.
   TODO: Autoscaling be done so that developers habitually use workflows needed for production usage.
   -->

9. <strike>Identify optimal scale-up and scale-down (instance type) configurations</strike>
9. <strike>Identify optimal scale-out and scale-in configurations</strike>


<a name="CodeSelenium"></a>

## Automating the-internet using Selenium

T.J. Myer wrote in <a target="_blank" href="http://www.tjmaher.com/p/programming-projects.html">his website</a> June - July 2015 a series describing his adventures coding Selenium on Dave's website:

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

References:

* <a target="_blank" href="http://bit.ly/se-exceptions-java">http://bit.ly/se-exceptions-java</a> list of exceptions in Selenium (2015)
* <a target="_blank" href="http://bit.ly/se-exceptions-howto">http://bit.ly/se-exceptions-howto</a> exception handling in Selenium (2015)


Many of the issues addressed above also need to be addressed by any app automation tool.


<a name="ElementCoding"></a>

## Coding Flood Element Typescript 

Typescript is a superset of the JavaScript programming language that control browsers.
Flood Element makes use of the Typescript language, which transpiles to JavaScript.
Typescript is used because its <a href="#ElementCoding">transpiler</a> checks for errors sooner than with JavaScript.

QUESTION: <a target="_blank" href="https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/">Typescript</a>

* Typescript variables are statically typed (not dynamic as in JavaSript)
* Typescript can be coded using object-oriented constructs

Rather than directly referencing application control IDs, 
so that when an app changes, just one change is needed to make all tests pass again.
This is like Selenium <a target="_blank" href="https://www.youtube.com/watch?v=cIevkkD_LB4&t=23m41s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> <strong>page object helpers</strong> from http://bit.ly/po-html-elements Yandex and http://bit.ly/po-page-factory built into Selenium. <a target="_blank" href="https://www.youtube.com/watch?v=cIevkkD_LB4&t=28m05s"><img alt="YouTube" width="21" height="21" src="../images/youtube-21x21.png"></a> Similarly, Base Page Object library to migrate commands from one version to another.


## Run Element script from client CLI



An example summary report:

<tt>This flood simulated up to 1 users across 1 grid in us-east-1 for 7 minutes. The mean response time was 916ms with a standard deviation of 1,285 ms. The median was 169 ms and the 90th percentile was 3,010 ms. The maximum was 3,014 ms. A maximum of 12 rpm with a mean of 4 rpm was observed. 101 transactions passed with 0 failed.
</tt>

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

   ### Instrument script for NewRelic 

1. Get license from newrelic.com
1. Insert license into script

   NOTE: <a target="_blank" href="https://github.com/ThyWoof/geek-movie-shop">https://github.com/ThyWoof/geek-movie-shop</a>


   ### Script C : Save instrumented Docker image to DockerHub for reuse

1. Docker save


<a name="PrepFlood"></a>

## Perpare for Flood

1. If you don't have a <a target="_blank" href="https://www.flood.io/">flood.io</a> account, get one (manually).
1. Confirm your account via email.
1. Log into Flood.io.
1. Get license token.


<a name="flood-run-e2e"></a>

## Run flood against app in AWS under instrumentation

This step runs a shell script file at<br />
<a target="_blank" href="https://github.com/wilsonmar/DevSecOps/master/flood-io/flood-run-e2e.sh">https://github.com/wilsonmar/DevSecOps/master/flood-io/flood-run-e2e.sh</a>

It is customized from an example in <a target="_blank" href="https://docs.flood.io/#end-to-end-example">Flood docs</a>.

1. If you don't have a GitHub account, get one.
1. Use an internet browser to view:

   <a target="_blank" href="https://github.com/wilsonmar/DevSecOps/">
   https://github.com/wilsonmar/DevSecOps/</a>

1. Click "Fork" button to copy the repository under your own account.

1. Open a Terminal.
1. Navigate to the containing folder where GitHub creates folders.
   Make a folders as necessary.

1. Clone the whole DevSecOps repo:

   <pre>git clone <a target="_blank" href="https://github.com/wilsonmar/DevSecOps/">https://github.com/wilsonmar/DevSecOps/</a> </pre>

1. Navigate into the folder:

   <pre>cd DevSecOps
   cd flood-io</pre>

1. Edit the environment file using your favorite editor, such as:

   <pre>nano flood-env.sh</pre>

1. Insert the license token from flood.io.
1. Save the file
1. Run the environment file to load variables into memory.

1. Edit the script using your favorite editor, such as:

   <pre>nano flood-run-e2e.sh</pre>

1. Define other parameters: run conditions.
1. Validate run pre-conditions.

1. Initiate run.
1. Stop run.
1. Collect run results.
1. Analyze run results / Generate visualizations.
1. Display summary statistics.

1. Git add, commit, and push the changed script to GitHub.


<a name="ConfigNewRelic"></a>

## Config New Relic Dashboard

Questions about several other dimensions, such as:

   * What is the impact on the cloud bill (costs) of that cool JavaScript UI code? 
   * What is the capacity of a chosen instance type (such as the free tier t2.micro)?
   * How much more is needed to run the anticipated peak load?
   * What happens when that peak load is exceeded?
   <br /><br />

https://docs.newrelic.com/docs/insights/use-insights-ui/manage-dashboards
https://learn.newrelic.com/get-started-with-apm
https://learn.newrelic.com/dashboards-and-data-apps
https://docs.newrelic.com/docs/plugins/plugins-new-relic/custom-dashboards-custom-views
https://blog.newrelic.com/product-news/steal-this-dashboard/


## Other APM

A full list of APM tools:

* New Relic
* Dynatrace OneAgent
* Dynatrace AppMon
* AppDynamics
* NudgeAPM


<a name="VerifySecurity"></a>

## Security scans

In today's ransomware environment, we all need to be extra vigilant to ensure security. 

1. Install <a target="_blank" href="https://inspec.io/">https://inspec.io</a> 
(created by Chef) 

1. Install <a target="_blank" href="https://github.com/docker/doccker-bench-security">https://github.com/docker/doccker-bench-security</a> 

1. Install CIS (Center for Internet Security) benchmarks for specific distributions and versions of Linux. For example:

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

<a name="Playwright"></a>

## Playwright 

<img align="right" width="150" alt="microsoft" src="https://raw.githubusercontent.com/microsoft/playwright/main/packages/recorder/public/playwright-logo.svg">
Under development are our emulation (test) scripts that call the <strong>Playwright API</strong> that   controls Chromium, Firefox, and WebKit internet browsers on macOS, Linux, and Windows machines.

Playwright's marketing home page is at:<br />
   <ul><a target="_blank" href="https://playwright.dev/"><strong>https://playwright.dev</strong></a><br />
   </ul>

Playwright was open-sourced by Microsoft on April 16, 2016, with first tag on<br />
<a target="_blank" href="https://github.com/microsoft/playwright/tags?after=v0.11.1">Jan 31, 2020 at https://github.com/microsoft/playwright</a>.

The library maintained by <a target="_blank" href="https://github.com/microsoft/playwright/graphs/contributors">several active contributors</a>:
   * <a target="_blank" href="https://www.linkedin.com/in/pavel-feldman-24b0041/">Pavel Feldman at MS SF</a>
   * <a target="_blank" href="https://www.linkedin.com/in/dgozman/">Dmitry Gozman</a>
   * <a target="_blank" href="https://www.linkedin.com/in/aslushnikov/">Andrey Lushnikov</a> (<a target="_blank" href="https://playwright.dev/python/community/conference-videos">videos</a>)
   <br /><br />

1. Subscribe to the product's social media, led by <a target="_blank" href="https://www.linkedin.com/in/debbie-obrien/">Debbie O'Brien, Sr. Tech PM @Microsoft</a>

   * <a target="_blank" href="https://discord.com/servers/playwright-807756831384403968">discord.com/servers/playwright</a>
   * <a target="_blank" href="https://twitter.com/playwrightweb">Twitter/x @playwrightweb</a>
   * <a target="_blank" href="https://dev.to/playwright">dev.to/playwright</a>
   * <a target="_blank" href="https://www.youtube.com/Playwrightdev">youtube.com/Playwrightdev</a>
   * <a target="_blank" href="https://playwright.dev/community/conference-videos">playwright.dev/community/conference-videos</a>
   * <a target="_blank" href="https://stackoverflow.com/questions/tagged/playwright">stackoverflow.com/questions/tagged/playwright"></a>
   * <a target="_blank" href="https://testguild.me/zcgcga">testguild.me/zcgcga</a>
   * <a target="_blank" href="https://playwright.dev/docs/writing-tests">https://playwright.dev/docs/writing-tests</a>.
   <br /><br />

1. Create an environment for Node to run.

1. <a target="_blank" href="https://www.youtube.com/watch?v=4-LwodVujTg&list=PLQ6Buerc008ed-F9OksF7ek37wR3y916p">View Debbie's YouTube series</a> to get started.

   1. <a target="_blank" href="https://www.youtube.com/watch?v=JdMkZUePkSE&list=PLQ6Buerc008ed-F9OksF7ek37wR3y916p&index=2">VIDEO</a>: Install Playwright within VSCode (instead of CLI git clone)
   1. Add GitHub Actions in file <tt>playwrite.yml</tt> created within repo folder <tt>.github/workflows</tt>
   <br /><br />

1. Each language that calls the API has its own documentation:
   * <a targete="_blank" href="https://playwright.dev/docs/intro">Node.js (JavaScript) running dotnet installing NUnitof MSTest</a>
   * <a targete="_blank" href="https://playwright.dev/python/docs/intro">Python using PyTest</a>
   * <a targete="_blank" href="https://playwright.dev/dotnet/docs/intro">.NET C#</a>
   * <a targete="_blank" href="https://playwright.dev/java/docs/intro">Java installed using mvn</a>
   <br /><br />

1. Run a sample test in the language of your choice from above.

1. Generate emulation (test) scripts by recording actions as a human user.

1. Setup Microsoft's <a target="_blank" href="https://azure.microsoft.com/en-us/products/playwright-testing/">Playwright Testing Service in the Azure cloud</a> at:

   <a target="_blank" href="https://playwright.microsoft.com/"><strong>https://playwright.microsoft.com</strong></a>

   Under your subscription, create a globally unique <strong>workspace</strong> of up to 64 alphanumeric characters (no dashes, etc.).

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1712692112/playwright-cloud-init-2450x1554_vutu4i.png"><img alt="playwright-cloud-init-2450x1554.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1712692112/playwright-cloud-init-2450x1554_vutu4i.png"></a>

   The same price is charged across the limited number of regions where the service is available during preview (East US, West US 3, East Asia, West Europe). The choice is embedded in the CLI variable:

   <tt>export PLAYWRIGHT_SERVICE_URL=wss://eastus.api.playwright.microsoft.com/api/authorize/connectSession</tt>

   Generate the API Access token <tt>PLAYWRIGHT_SERVICE_ACCESS_TOKEN=</tt> and store it securely in an encrypted vault until needed.

   The service provides browser and OS combinations (up to 50 in parallel, at scale). 
   To run 50 Playwright tests:

   <pre><strong>npx playwright test --workers=50 --config=playwright.service.config.ts</strong></pre>

   For example: <a target="_blank" href="https://github.com/microsoft/playwright-testing-service/blob/main/samples/get-started/playwright.service.config.ts">this playwright.service.config.ts file</a>.

   If each of 50 takes 12 seconds on average, you'll be billed for 10 "test minutes", calculated as 50 tests x 12 seconds ÷ 60 seconds in a minute. Each "Test minute" is when a Playwright test runs in the service’s cloud browsers.

   After 100 test minutes during a <a target="_blank" href="https://learn.microsoft.com/en-us/azure/playwright-testing/how-to-try-playwright-testing-free">free 30-day trial</a>, <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/playwright-testing/">pricing</a> is $0.01/test minute on Linux and $0.01/test minute on Windows, billed by the second. 
   
   QUESTION: Would running apps hosted within Azure remove variability in time going through the public internet? 

   * <a target="_blank" href="https://azure.microsoft.com/en-us/blog/announcing-microsoft-playwright-testing-scalable-end-to-end-testing-for-modern-web-apps/">Announcement Oct 4, 2023</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/azure/playwright-testing/quickstart-run-end-to-end-tests?wt.mc_id=mpt_azblog20231004_blog_cnl&tabs=playwrightcli">Quickstart</a>
   * <a target="_blank" href="https://learn.microsoft.com/en-us/azure/playwright-testing/">https://learn.microsoft.com/en-us/azure/playwright-testing</a>
   <br /><br />

1. <a target="_blank" href="https://checksum.ai/blog/the-engineering-of-an-llm-agent-system">build AI agents to generate Playwright tests</a>

1. QUESTION: Use Playwright scripts to perform load testing?

   We need to control <a target="_blank" href="https://portal.azure.com/">https://portal.azure.com</a>, particularly to create an AI Cognitive group in order to check the "Microsoft Responsible AI Agreement". That is needed before automation such as Terraform and Bicep are allowed to create AI-related resources.



<hr />

## Resources

   * <a target="_blank" href="https://element.flood.io/docs/1.0/get-started">https://element.flood.io/docs/1.0/get-started</a>
