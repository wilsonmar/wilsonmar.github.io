---
layout: post
title: "Browser Extensions"
excerpt: "Make websites look and do what you want!"
tags: [browsers, UI]
date: "2020-09-10"
file: "browser-extensions"
image:
# browser-extensions-1900x500.jpg
  feature: https://user-images.githubusercontent.com/300046/92999044-09f09b80-f4db-11ea-9a92-df4206296cbc.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Browser extensions inject <strong>JavaScript</strong> code within internet browsers to modify web content users see and interact with, changing and extending the behavior of the browser itself.

The value of this tutorial is the painstaking arrangement of a learning sequence that is both thorough yet logical.

Each browser is a bit different. Documentation:
   * https://developer.chrome.com/extensions/overview
   * Mozilla Firefox
   * Microsoft Edge accepts extensions from other browsers
   * Apple Safari
   <br /><br />


## Show me some Chrome extensions

1. In Chrome, click the three vertical dots at the upper-right corner, select "More Tools", then "Extensions".

   Alternately, type in or click: 

   <a target="_blank" href="chrome://extensions/">
   chrome://extensions/</a>

   In Firefox, click the "sandwich" icon at the upper-right corner and<br />
   select "Add-ons".

   PROTIP: Security-conscious companies manage browsers of their people to add extension such as
   "DigiCert Authentication Client Extension".

1. In another Chrome tab, search for Chrome Extensions at:

   <a target="_blank" href="https://chrome.google.com/webstore/category/extensions?hl=en">
   https://chrome.google.com/webstore/category/extensions?hl=en</a>

   On that website, click "Install" for one you like.

   Here are the most useful and highly-rated by a large number of people:

   * "The Great Suspender" saves memory and bandwidth by suspending tabs sleeping, because Google Chrome is a memory hog.
   * "Noscript" blocks images, javascript, fonts from loading and allow only sites you specify you trust
   * <a target="_blank" href="https://chrome.google.com/webstore/detail/tab-resize-split-screen-l/bkpenclhmiealbebdopglffmfdiilejc?hl=en">Tab Resize</a> splits a large screens into several panes of tabs on the same page (like TMUX)
   * "Silent site sound blocker" mutes sites such as CNet which blasts sound on entry

   * "Chrome Connectivity Diagnostics" (app from Google) tests connection speeds
   * "Free Download Manager" to resume downloads that otherwise time out
   * <a target="_blank" href="https://chrome.google.com/webstore/detail/trafficlight/cfnpidifppmenkapgihekkeednfoenal?hl=en">TrafficLight</a> (from Bitdefender) blocks malicious websites and highlights tracking cookies
   * <a target="_blank" href="https://chrome.google.com/webstore/detail/https-everywhere/gcbommkclmclpchllfjekcdonpmejbdp?hl=en">HTTPS Everywhere</a> (from EFF.org) ensures that you're using HTTPS rather than HTTP protocol, to avoid man-in-the-middle attacks.

   * <a target="_blank" href="https://chrome.google.com/webstore/detail/picture-in-picture-extens/hkgfoiooedgoejojocmhlaklaeopbecg?hl=en">Picture-in-Picture Extension (by Google)</a>
   * "Dark Reader" or "Dark Night Mode" presents any web page with a dark theme
   * Wikiwand puts a modern UI to Wikipedia pages
   * "Turn off the Lights" darkens and blurs other sections of the screen when watching a video
   * Behind the overlay enables you to view text behind pop-ups

   * 1Password, LastPass, or NordPass password manager
   * "I don't care about cookies" removes cookie warnings
   * <a target="_blank" href="https://chrome.google.com/webstore/detail/google-keep-chrome-extens/lpcaedmchfhocbbapmcbpinfpgnhiddi?hl=en">Google Keep</a> to keep notes
   * Evernote web clipper 
   * Asana for coordination of team tasks
   * Cisco WebEx Extension (for companies that haven't already switched to Zoom)

   * "Noisli" plays soothing background sounds to help you focus
   * Dayboard to block websites you don't have the discipline to avoid. It also displays your top tasks whenever you open a browser tab. So it's better than "Citrus".

   * Selenium IDE for automating human actions

   * Honey to find and apply discount codes for shopping 
   * "The Camelizer" shows price history on Amazon, BestBuy
   * "Hunter" hunts for emails to company name you type in (registration required)

   * <a target="_blank" href="https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen?hl=en">Grammerly</a> spell checker (it won't autocorrect, though)
   * "Typio Form Recovery" auto-saves form entries (may cause data leak)
   * "Print Friendly" removes text and images before printing
   * "Fireshot" captures entire page (not just what appears on your monitor)

   * <a target="_blank" href="https://chrome.google.com/webstore/detail/newsguard/hcgajcpgaalgpeholhdooeddllhedegi?hl=en">NewsGuard</a> rates websites
   * "TinEye" reverse image search to find original author
   * "AgoraPulse" (from RazorSocial) to easily share content in social media
   * "Pullbullet" transfers images & web urls among devices
   * "Chrome User Agent Switcher" to post on Instagram from a laptop rather than mobile phone
   * GoogleGIFs
   * Imagus

   * Bit.ly to shorten URLs for social sharing
   * <a target="_blank" href="https://chrome.google.com/webstore/detail/unshortenlink/gbobdaaeaihkghbokihkofcbndhmbdpd?hl=en">Unshorten.Link</a> shows where shortened links will send you
   <br /><br />

   YouTube videos about extensions:

   * <a target="_blank" href="https://www.youtube.com/watch?v=wWAdEHqINgA"> 
   10 Awesome Chrome Extensions You Need to Know About!</a> Oct 23, 2019 by ThioJoe
   * <a target="_blank" href="https://www.youtube.com/watch?v=HoiWpqZlMVQ">
   13 Cool Chrome Extensions You've Never Heard Of!</a> by ThioJoe
   * <a target="_blank" href="https://www.youtube.com/watch?v=rtQk0mns--w">
   10 Chrome Extensions That Are Amazingly Useful!</a> Jun 14, 2019 by TechGumbo
   * <a target="_blank" href="https://www.youtube.com/watch?v=pT-b2SpFIWo">
   Building Your First Chrome Extension</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=QYrZNRd_8rI">
   9 Browser Extensions that May Change your Life</a> Jun 13, 2018 by Steve Dotto (dottotech)

   ## TODO: For other browsers

   ## Install Chrome Extension locally

1. The sample code associated with Google's tutorial at<br /><a target="_blank" href="https://developer.chrome.com/extensions/getstarted">https://developer.chrome.com/extensions/getstarted</a> is at <br /><a target="_blank" href="https://developer.chrome.com/extensions/examples/tutorials/get_started_complete.zip">https://developer.chrome.com/extensions/examples/tutorials/get_started_complete.zip</a>.

   PROTIP: Google loads extensions from its website by loading zip files.

   "Browser actions" icons to the right of the star icon add functionality on most/all websites.

   Files from Google contain "Copyright 2018 The Chromium Authors" and
   "Use of this source code is governed by a BSD-style license" which <a target="_blank" href="https://en.wikipedia.org/wiki/BSD_licenses">is one of the oldest and broadly used license family in the FOSS ecosystem</a>".

   So those who change it code can use the "3-clause BSD License 2.0", which <a target="_blank" href="https://en.wikipedia.org/wiki/BSD_licenses">Wikipedia says</a> is compatible with almost all FOSS licenses (and as well proprietary licenses).

2. Unzip get_started_complete.zip into folder get_started_complete.

3. I renamed the folder and moved its files to a Git-enabled folder so I can version control changes and load it up to GitHub.com for archival and sharing.


   ### Remove Extension

1. In the Extensions page, click the "Remove" associated with the extension to remove it (and reclaim disk space).


## Install extension locally

   Code to other examples include:

   * <a target="_blank" href="https://github.com/PalashTanejaPro/BlindHelper">https://github.com/PalashTanejaPro/BlindHelper</a> explained at <a target="_blank" href="https://www.freecodecamp.org/news/how-to-create-a-chrome-extension-part-1-ad2a3a77541/"> "Talk to Me" at Freecodecamp.org</a>.
   
   * <a target="_blank" href="https://www.youtube.com/watch?v=Ipa58NVGs_c">
   How to Make Chrome Extensions</a> by Kyle Robinson Young
   shows how to create an extension from scratch

1. View <a target="_blank" href="https://blog.hartleybrody.com/chrome-extension/">Harley Brody's blog "So You Want to Build a Chrome Extension?"</a> from June 5, 2013, but still relevant today.

   He wrote the "BuzzKill" Chrome Extension that automatically removes all Buzz Feed content from the browsing experience on Facebook.com.

1. Navigate to <a target="_blank" href="https://www.facebook.com/">facebook.com</a> and login.

1. On a new Chrome tab, On <a target="_blank" href="https://github.com/hartleybrody/buzzkill">https://github.com/hartleybrody/buzzkill</a>, click Fork to your own account, click the green "Code" and Download or clone.
1. <tt>cd buzzkill</tt>

1. In Chrome URL <a target="_blank" href="chrome://extensions/">
   chrome://extensions/</a><br />

1. Click the slider to turn on <strong>Developer Mode</strong> at the top right to expose a menu:

   <pre>Load unpacked | Pack extension | Update</pre>

1. Click “Load unpacked", then select your extension’s folder. 

   If you selected Google's example, you should now see:

   <img width="395" alt="browser-addon-chrome-getting-started" src="https://user-images.githubusercontent.com/300046/92309544-ab1fa500-ef63-11ea-907b-104e1b41960b.png">

   PROTIP: Stay on this page. When code is changed, Chrome knows to reload your extension. You won't need to press command+R.

   Notice "Inspect views background" in some of the extensions. See <a href="#background">below</a>.

1. Click <strong>Load unpacked</strong> and navigate to buzzkill. "Make Facebook Great Again" should appear.

   NOTE: Extensions are automatically turned On upon load.

1. Switch to Facebook tab.

   NOTE: "Page actions" icons to the left of the star icon in the address bar are for specific pages (URLs).

   ### Examine code for sample extension


1. Click the url below to download file get_started_complete.zip:

   PROTIP: Google obtains extensions by loading zip files.


   ## Load your own extension

1. To activate the add-on, click the extension icon at the upper-right

   <img width="303" alt="browser-add-on-sample-access" src="https://user-images.githubusercontent.com/300046/92310030-a9f07700-ef67-11ea-89aa-0991bc364573.png">

1. Click "Details" for its "Manage Extensions" page.

1. In the add-on menu, click the three-dot icon to the right of your extension to select <strong>Pin</strong> so its icon appears on all Chrome tabs.

1. Click on the new icon to see its menu. The default code just shows a color.

1. Right-click on your add-on to select <strong>Options</strong>.

   The look and feel of the option UI is defined in the add-in's <tt>options.html</tt> file invoked by the <tt>options.js</tt> file.

1. Click on a different color.

1. Click on the tab to a page displaying its content.

   As with other extensions, the extension applies to whatever web page your are on.

   The "Getting Started Example" default paints the background green.

1. Click on the add-on's icon for the <a href="#popup">add-in's popup page_action</a>.

1. In the option pop-up, select the color to change the background of the current page.

   We'll next talk about fixing the code producing this awful UI.


## Files

Extensions are zipped bundles of HTML, CSS, JavaScript, images, and other files used in the web platform. Google's "Getting Started Example" contains these default files:

In Google's folder:

<pre>.
├── LICENSE
├── README.md
├── background.js
├── images
│   ├── get_started128.png
│   ├── get_started16.png
│   ├── get_started32.png
│   └── get_started48.png
├── manifest.json
├── options.html
├── options.js
├── popup.html
└── popup.js
</pre>


In the BuzzKill folder:

<pre>├── README.md
├── bootstrap.js
├── clean.js
├── images
│   └── icon.png
├── libs
│   └── underscore.min.js
├── manifest.json
├── popup.html
└── settings.js
</pre>

The manifest.json file Google reads as the "entry point".

The BuzzKill extension, because it has permissions to work only on Facebook, is a <strong>page_action

In the manifest.json file, specify the URL Google should check every few hours to see if there is an update:

   <ul><pre>"update_url": "https://mysite.com/myextension.xml"</pre>
   </ul>

JavaScript (.js) files Google calls "content scripts".


### Icons

The "icon.png" should be like the "get_started" image files -- the same image in 4 different sizes 16, 32, 48, 128 pixels square. Note that the icon files are specified twice:

<pre>
  "icons": {
    "16": "images/get_started16.png",
    "32": "images/get_started32.png",
    "48": "images/get_started48.png",
    "128": "images/get_started128.png"
  },
</pre>

<pre>
  "page_action": {
    "default_title": "Getting Started Example",
    "default_popup": "popup.html",
    "default_icon": {
      "16": "images/get_started16.png",
      "32": "images/get_started32.png",
      "48": "images/get_started48.png",
      "128": "images/get_started128.png"
    }
</pre>

## Menu change



## 1. Load your extension into Chrome

Chrome injects content scripts after the DOM is complete.

<a name="popup"></a>

## Pop-up menu


<a name="background"></a>

## Background

Code to the background listener in "Getting Started Example" 

<pre>chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
</pre>


## Change URL 

* https://thoughtbot.com/blog/how-to-make-a-chrome-extension

To listen for clicks on the browser action, pass a message (URL) to a background script.

<pre>"background": {
  "scripts": ["background.js"]
}</pre>

background.js has access to every Chrome API but cannot access the current page. As Google puts it:

<pre>// background.js
&nbsp;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});</pre>

## References

Tutorials referenced include:

* https://thoughtbot.com/blog/how-to-make-a-chrome-extension

* https://www.youtube.com/watch?v=9Tl3OmwrSaM video

* https://www.youtube.com/watch?v=8q1_NkDbfzE&list=PLC3y8-rFHvwg2-q6Kvw3Tl_4xhxtIaNlY
   from codevolution

* https://www.youtube.com/watch?v=bmxr75CV36A
   Google Chrome Extensions: Extension API Design
   Dec 7, 2009 by Google Developer Rafael Weinstein

<a target="_blank" href="https://www.youtube.com/watch?v=rNkfs8-uRTE&list=PLCA101D6A85FE9D4B">
The playlist of Google videos about Extensions</a> from 2009


https://www.youtube.com/watch?v=e3McMaHvlBY

https://youtu.be/uh84Asy2W4s
Fullstack Academy


