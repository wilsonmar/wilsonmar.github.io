---
layout: post
title: "Progressive Webapps (PWA)"
excerpt: "Responsive desktop and mobile hybrid apps that manage data offline too"
tags: [Mac, Security]
date: "2017-05-20"
file: "progressive-webapps"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This page contains my notes during and after taking classes on
PWA (Progressive Web Apps).

The step-by-step takes a different approach than what is covered in tutorials I took.

I would appreciate it if you could email me if you have an answer to the QUESTIONS below.


## Why? (Advantages)

PWA combines the best of the web with the best of native apps.

* Responsive on multiple screen size factors
* Work Offline
* App-like navigation
* Progressive enhancement
* Fresh, up-to-date transparently
* Safe via TLS
* Discoverable W3C Manifest 
* Re-engagable push notifications
* Installable
* Linkable - URL as entry point
* Local Storage
* Gamepad
* Media capture of camera and microphone
* Integrated payments
<br /><br />

## Sites using PWA in the wild

* <a target="_blank" href="https://www.pwa.rocks/">
   pwa.rocks</a> is a gallery of PWA apps

* twitter.com
* flipboard.com

* treebo.com (China)
* sodapopped.com

* <a target="_blank" href="https://getprelude.net/">getprelude.net</a>
   is a simple, server less, offline-capable web app for practicing reading music. I've always been slow at sight reading, and this lets me plug in a MIDI piano and do drills.
   Uses React, Webpack, Service Workers, Web MIDI, Web Audio, VexFlow, 
   and the Progressive Web Application paradigm. By Stephen Eisenhauer.



## Tutorials

### Udacity class

https://discussions.udacity.com

<a target="_blank" href="https://www.udacity.com/course/intro-to-progressive-web-apps--ud811">
Udacity class: Intro to Progressive Web Apps</a>
by Pete LePage, Developer Advocate at Google,
uses straight JavaScript without a framework library
to create a weather app.

* <a target="_blank" href="https://weather-pwa-sample.firebaseapp.com/demo/">
https://weather-pwa-sample.firebaseapp.com/demo</a>

1. Install Git and get it on your machine:

   <pre><strong>git clone <a target="_blank" href="https://www.github.com/wilsonmar/ud811">
   https://www.github.com/wilsonmar/ud811</a> --depth=1
   </strong></pre>

   This is forked from the original so that my commentary below would stay consistent
   with what is in GitHub. The original repo is:

   <pre>git clone <a target="_blank" href="https://www.github.com/udacity/ud811">
   https://www.github.com/udacity/ud811</a>
   </pre>

0. In Chrome, go to install and launch from the web;

   <a target="_blank" href="https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb">
   Web Server for Chrome</a>
   by chromebeat.

0. Choose folder <strong>3-12</strong>, the completed example weather app.

0. Click Advanced and check "Verbose logging".

0. Specify the port number, then click the link to view:

   <a href="http://localhost:8887" target="_blank">
   http://localhost:8887</a>

0. Right-click and select Inspect for the JavaScript Console

   ### Formatting

0. In a Finder, view folders and files of ud811.

   NOTE: Firebase has since been shut down.

   ### Tour of sample files

0. View <tt><strong>package.json</strong></tt>. 
   It is read by NPM (Node Program Manager) to collect dependencies.

0. View index.html.
   Clients load index.html. In browsers, CSS files are loaded first and block .js files:

   <pre>&LT;link rel="stylesheet" type="text/css" href="/styles/ud811.css">
   </pre>

0. View ud811.cs.
   CSS files are usually stored within the styles folder.
   The .css files were generated from the ud811.scss file.
   That generation is done by gulp running the <strong>gulpfile.js</strong>
   before deployment.
   The minified min.css file is what is pushed to clients.

   ### App.js Shell
   
   Right above &LT;/body> at the bottom of the index.html
   are two JavaScript files in the scripts folder:

   <pre>
  &LT;script src="/scripts/app.js">&LT;/script>
  &LT;script src="/scripts/localforage-1.4.0.js">&LT;/script>
   </pre>

0. View <strong>app.js</strong> -- the app shell.

   * Event listeners for UI elements (butRefresh, butAdd, butAddCity, butAddCancel)

   * Methods to update/refresh the UI (toggleAddDialog, updateForecastCard)
   
   * Methods for dealing with the model (getForecast, updateForecasts, saveSelectedCities)

0. Change, if you must, the injectedForecast that provides the app default data values
   that would be replaced by what comes back from the server.

   The <tt>time: 1453489481</tt> is the time epoch number of seconds since
   January 1, 1970, which is Fri, 22 Jan 2016 19:04:41 GMT time.

   ### Firebase replacement by Google

   When the sample repo was created, the Firebase web service was still available.
   So this refered to the author's instance:

   <pre>var weatherAPIUrlBase = '<a target="_blank" href="https://publicdata-weather.firebaseio.com/">https://publicdata-weather.firebaseio.com/</a>';
   </pre>

0. Click on the URL above. I was redirected to this Google page:

   <a target="_blank" href="https://console.firebase.google.com/u/0/?pli=1">
   https://console.firebase.google.com/u/0/?pli=1</a>

   Google's Firebase provides what firebase.io did: Cloud Messaging, Authentication, Realtime Database, Storage, Hosting, Remote Config, Test Lab, Crash Reporting.   
   Additionally, having the service in the Google Cloud give apps access to Machine Learning Functions:

   * translate the language spoken or written by the user

   * recognize image and provide an explanation about that image (like in Google Lens) 
   <br /><br />

   Video: 
   <a target="_blank" href="https://www.youtube.com/watch?v=SobXoh4rb58">
   Progressive Web Apps on Firebase - Google I/O 2016</a>

   PROTIP: There are other similar services like Firebase.


   ### Service Worker

0. View <a href="#ServiceWorkers">service-worker.js</a> at the root folder.

   The <tt>service-worker.js</tt> file is from Google.
   QUESTION: What invokes it?

0. View <a href="#Manifest">manifest.json</a> file  at the root folder.

   QUESTION: What invokes it?

0. View localforage-1.4.0.js.

   localforage-1.4.0.js is from
   from https://mozilla.github.io/localForage
   for processing <a href="#OfflineStorage">Offline Storage</a>
   QUESTION: What calls it?


### Pluralsight course

Nik Molnar
@nikmd23
nikcodes.com/wpa-fundamentals

<a target="_blank" href="https://app.pluralsight.com/library/courses/building-offline-web-apps-service-worker/">table-of-contents
Building Offline Web Apps with Service Worker</a>

<a target="_blank" href="https://app.pluralsight.com/library/courses/progressive-web-app-fundamentals/table-of-contents">
Pluralsight class: Progressive Web App Fundamentals</a>


## Hosting 

github

Google App Engine for back-end logic

Firebase redirects to HTTPS automatically from HTTP.



## Android Emulator

CAUTION: Support by Apple Safari has a custom implementation.
But other browsers support.

Strategy for caching vs. obtaining from network every time:

   * Cache only for images required for first render

   * Cache, then network for social media timeline data

   * Network first, then cache for game leader board data

   * Network only for inventory and prices from an ecom site

## App Shell

DEMO: Weather App Shell


## Local Storage

IndexedDB

<a name="ServiceWorkers"></a>

## Service Workers

0. Open Chrome browser in Incognito mode.

0. Setup ServiceWorker in Chrome browser:

     chrome://serviceworker-internals

JavaScript that runs in the background
to listen for and intercepts HTTPS requests, 
then respond to events, even when off-line.

Enables Periodic sync, geo-fencing, etc.

### Register service worker

   <pre>if ('serviceworker') in navigator){ // progressive enhancement.
   navigator.serviceWorker.register('/service-worker.js')  // scope limitation
     .then(
        function(registration){
          console.log('Service Worker Registered', registration);
        }
    );
}
   </pre>

## Flow among states

<a title="pwa statuses 1226x586-220kb.png" href="https://cloud.githubusercontent.com/assets/300046/26272313/d40b0068-3ce2-11e7-8820-eca77522c4f3.png">
<img alt="pwa statuses 650x311-92k" width="650" height="311" src="https://cloud.githubusercontent.com/assets/300046/26272310/bc7d3ec0-3ce2-11e7-98fc-198d6e7cadb4.png"></a>

* Prioritize

<hr />

<a name="Manifest"></a>

## App Mobile Manifest Packaging

0. In index.html, add within &LT;HEAD> to tell the browser about it:

   <pre>&LT;link rel="manifest" href="/manifest.json">
   </pre>

   This is defined in w3.org/TR/appmanifest

0. In the <strong>manifest.json</strong> file:

   <pre>
{
  "name": "SodaPopped",
  "short_name": "SodaPopped",
  "start_url": "/index.html?hs=true",
  "icons": [{
    "src": "/icons/icon-128.png",
    "type": "image/png",
    "sizes": "128x128"
  },{
    "src": "/icons/icon-192.png",
    "type": "image/png",
    "sizes": "192x192"
  }]
  "background_color": "#3498DB",
  "theme_color": "#3495E",
  "orientation": "any",
  "display": "standalone",
  "dir": "ltr",
  "lang": "en-US",
  "description": "The most reliable, fast, engaging app for weather",
  "scope": "/",
  "serviceworker": {
    "src": "/path/to/sw.js",
    "scope": "/"
  }
  "prefer_related_applications":true
}
   </pre>

0. Add in head:

   <pre>&LT;meta name="theme-color" content="#2F3BA2">
   </pre>

0. Add in home screen head for Apple Safari browser on iOS:

   <pre>&LT;meta name="apple-mobile-web-app-capable" content="yes">
&LT;meta name="apple-mobile-web-app-status-bar-style" content="default">
&LT;meta name="apple-mobile-web-app-title" content="Weather">
&LT;link rel="apple-touch-icon" sizes="60x60" href="apple-60.png">
&LT;link rel="apple-touch-icon" sizes="76x76" href="apple-76.png">
&LT;link rel="apple-touch-icon" sizes="120x120" href="apple-120.png">
&LT;link rel="apple-touch-icon" sizes="152x152" href="apple-152.png">
&LT;link rel="apple-touch-icon" sizes="167x167" href="apple-167.png">
&LT;link rel="apple-touch-icon" sizes="180x180" href="apple-180.png">
   </pre>

   BLAH: Apple apple-touch-startup-image

0. Validate Manifest using the on-line tool:

   <a target="_blank" href="https://manifest-validator.appspot.com/">
   https://manifest-validator.appspot.com</a>

0. Cache the query string in start_url.

0. Chrome presents "ADD TO HOME SCREEN"
   if there are 2 iteractions in 5 minutes.
   Defer the banner with <tt>onbeforeinstallprompt</tt>.

   During testing, temporarily <tt>#bypass-app-banner-engagement-checks</tt>


### Icons

Chrome uses 48 dip icons for home screen and task switcher:

   * 48x48
   * 96x96
   * 144x144
   * 192x192

Chrome uses 128 dip icons for splash screen:

   * 128x128
   * 256x256
   * 384x384
   * 512x512

0. For Apple iPhones and iPads:

   <pre>
&LT;!-- 16x16 -->
&LT;link rel="shortcut icon" href="https://wilsonmar.github.io/favicon.ico">
&LT;!-- 32x32 -->
&LT;link rel="shortcut icon" href="https://wilsonmar.github.io/favicon.png">
&LT;!-- 57x57 (precomposed) for iPhone 3GS, pre-2011 iPod Touch and older Android devices -->
&LT;link rel="apple-touch-icon-precomposed" href="https://wilsonmar.github.io/images/apple-touch-icon-precomposed.png">
&LT;!-- 72x72 (precomposed) for 1st generation iPad, iPad 2 and iPad mini -->
&LT;link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://wilsonmar.github.io/images/apple-touch-icon-72x72-precomposed.png">
&LT;!-- 114x114 (precomposed) for iPhone 4, 4S, 5 and post-2011 iPod Touch -->
&LT;link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://wilsonmar.github.io/images/apple-touch-icon-114x114-precomposed.png">
&LT;!-- 144x144 (precomposed) for iPad 3rd and 4th generation -->
&LT;link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://wilsonmar.github.io/images/apple-touch-icon-144x144-precomposed.png">
   </pre>


realfavicongenerator.net/favicon_checker

0. Android Studio - Device Bridge

0. Update Chrome version

   apkmirror.com/apk/google-inc/chrome

   chrome://inspect/#devices
   
0. Click port forwarding

0. Type in the port being used by Android

    keep the page open.

## Add to Home Screen

a standard approach to add to home screen.


## Push Notifications


## Background Sync



<a name="OfflineStorage"></a>

### Offline course

push notifications

JavaScript Promises



## Videos

<a target="_blank" href="https://www.youtube.com/watch?v=aCMbSyngXB4&list=TLGGuBFGlJt3OQgxOTA1MjAxNw">
Production Progressive Web Apps With JavaScript Frameworks (Google I/O '17)</a>

   Hacker News Progressive Web App (HNPWA)

   Polymer using Purple functions

   Lighthouse used to 

   Web Page Test

   Twitter Lite


## Books

youmightnotneeSelect  ron.com


Jake Archibald's Off-line web app book

https://techbeacon.com/5-best-tools-building-progressive-web-apps-fast

