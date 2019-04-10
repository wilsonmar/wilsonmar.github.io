---
layout: post
title: "JavaScript in LoadRunner"
excerpt: "Sample code and tutorial here"
tags: [JavaScript, Load Testing, LoadRunner]
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14580754/41633d98-0395-11e6-87e1-065800a95775.jpg
  credit: Steve Mckinzie
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

[![Gitter](https://badges.gitter.im/wilsonmar/wilsonmar.github.io.svg)](https://gitter.im/wilsonmar/wilsonmar.github.io?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

{% include _toc.html %}


JavaScript is popular now.

This is one of a series on how LoadRunner has embraced JavaScript:

1. <a href="#TruClient">Create TruClient script with JavaScript</a>.

2. <a href="#LRCJS">Call JavaScript within a LoadRunner C-language script</a>. 

3. <a href="#LRJS">Scripting in JavaScript language</a> (instead of C or Java).

Here are examples of each.

<hr />

<a name="TruClient"></a>

## Create TruClient scripts with JavaScript

Download Zip of the <strong>UISamples</strong> TruClient script repository at:

   <a target="_blank" href="https://github.com/TruClient/UISamples">
   https://github.com/TruClient/UISamples</a>

There are several TruClient scripts there, each in a separate folder.

The HP example shows a website that can only be load tested using TruClient (not C programming).

I created a whole 2-day hands-on class explaning these.

It is a good example of string and number functions within JavaScript.

> Call me to get up and running on TruClient quickly.


<a name="LRCJS"></a>

## Call JavaScript within a LoadRunner C-language script 

A tutorial on how you can create and use a JavaScript file within a LoadRunner C-language script
(using Agile principles) is in the README.md file within the the
<strong>random_birthdate_js</strong> folder at:

   <a target="_blank" href="https://github.com/wilsonmar/LoadRunner/tree/master/random_birthdate_js">
   https://github.com/wilsonmar/LoadRunner/tree/master/random_birthdate_js</a>

Download a Zip the whole set of LoadRunner sample scripts from:

   <a target="_blank" href="https://github.com/wilsonmar/LoadRunner">
   github.com/wilsonmar/LoadRunner</a>

If you have a Git client, clone the set of LoadRunner sample scripts using command:

   <a target="_blank" href="https://github.com/wilsonmar/LoadRunner">
   git clone https://github.com/wilsonmar/LoadRunner.git</a>


> Call me to get good at JavaScript without wasting a lot of time.


<a name="LRJS"></a>

## Script LoadRunner in JavaScript language

The tutorial on coding JavaScript within a LoadRunner Web (HTTP/HTML)
protocol script is at:

   [wilsonmar.github.io/LoadRunner-JavaScript-Coding](/loadrunner-javascript-coding/)

The sample script referenced by this tutorial is at:

   <a target="_blank" href="https://github.com/wilsonmar/LoadRunner/">
   github.com/wilsonmar/LoadRunner</a>


## Resources to Learn JavaScript

There are many tutorials which teach JavaScript string manipulation and other topics:

* <a target="_blank" href="http://freecodecamp.com">freecodecamp.com</a>
  has learners use tutorials on codeacademy.com and other sites, then adds
  quizzes, all for free.


## Wait, there's more. Click one of these ... #

This article is one of a series about tuning and performance:

{% include tuning_links.html %}
