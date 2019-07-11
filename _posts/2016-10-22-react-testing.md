---
layout: post
title: "React Testing automation"
excerpt: "Use Jest and Enzyme to make your React apps great again"
tags: [mobile, dev, testing]
date: "2016-08-06"
file: "react-testing"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14624073/7b96364a-0594-11e6-9643-06decef9dbfd.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<p align="right"><a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=es&u=https%3A%2F%2Fwilsonmar.github.io%2Freact-testing%2F"><img alt="Español (Spanish)" width="20" height="14" src="../images/flags/es.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=fr&u=https%3A%2F%2Fwilsonmar.github.io%2Freact-testing%2F"><img alt="Français (French)" width="20" height="14" src="../images/flags/fr.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=de&u=https%3A%2F%2Fwilsonmar.github.io%2Freact-testing%2F"><img alt="Deutsch (German)" width="20" height="14" src="../images/flags/de.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=it&u=https%3A%2F%2Fwilsonmar.github.io%2Freact-testing%2F"><img alt="Italiano" width="20" height="14" src="../images/flags/it.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=pt&u=https%3A%2F%2Fwilsonmar.github.io%2Freact-testing%2F"><img alt="Português" width="20" height="14" src="../images/flags/pt.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ru&u=https%3A%2F%2Fwilsonmar.github.io%2Freact-testing%2F"><img alt="Cyrillic Russian" width="20" height="14" src="../images/flags/ru.png"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https%3A%2F%2Fwilsonmar.github.io%2Freact-testing%2F"><img alt="中文 (简体) Chinese (Simplified)" width="20" height="14" src="../images/flags/cn.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ja&u=https%3A%2F%2Fwilsonmar.github.io%2Freact-testing%2F"><img alt="日本語 Japanese" width="20" height="14" src="../images/flags/jp.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A%2F%2Fwilsonmar.github.io%2Freact-testing%2F"><img alt="한국어 Korean" width="20" height="14" src="../images/flags/ko.gif"></a>
</p>
{% include _toc.html %}


This article examines the automated testing of ReactJs using Jest.

React is also called ReatJS because it's a Javascript library, developed in 2013 by Jordan Walke of Facebook. 
In fact, React is the 5th most starred JS library on all of GitHub, used on major sites including Netflix, Khan Academy, and many others.

Isomorphic React (Universal)

   * <a target="_blank" href="https://www.linkedin.com/learning/react-js-essential-training">React.js Essential Training June 20, 2018</a> [3h 15m] by Eve Porcello


## Scaffold tests using mocks
Jest is a test runner built on top of Jasmine and Mocha to add "spies" (a superior assertion library to verify side effects), plus <a href="#SnapShotTesting">snapshot testing</a>, and module mocking. Even though Jest was built by Facebook's React team (and share the MIT open-source licensing), Jest can also test apps not built with React (except for jQuery).

   https://github.com/facebook/jest

   https://facebook.github.io/jest/
   forwards to<br />
   https://jestjs.io/

Ezyme is a "test renderer" to express component output as HTML.
It was built by AirBnB specifically for React apps.
It has many open issues, so many avoid it.
React-Test-Renderer is recommended over Enzyme

Test runners organize tests into "describe" suites and "it" test blocks.

Jest looks for tests stored under a folder named with two double-underlines:

   <pre>
   __tests__/*.test.js
   __tests__/*.spec.js</pre>

## Jest workflow

NPM triggers Watcher 

BLAH: Jest was not designed to integrate with version control, and so it's integrated into dev's workflow.

## Coding tests

Matchers look different than app code:

<pre>
function test2() {
	constvalue = getValue42();
	expect(value).toEqual(42);
}
</pre>

   https://facebook.github.io/jest/
   from
   https://facebook.github.io/jest/docs/en/expect.html


Avoid side-effects –any AJAX calls, UI changes or other side effects are handled by sagas, thunks, etc., but not by components

Test Container and Display elements separately


<a name="SnapShotTesting"></a>

## SnapShot Testing

multiple kinds of tests
   * unit tests verify that individual methods and properties passed by container are accurate
   * component tests 
   * snapshot tests verify output of the display component, passing props in directly

## Learning resources

<a target="_blank" href="https://www.linkedin.com/learning/react-testing-and-debugging">
React: Testing and Debugging July 5, 2017</a> [1h 17m]
by: Emmanuel Henri, <a target="_blank" href="https://www.linkedin.com/in/mannyhenri/">

https://app.pluralsight.com/paths/skills/react
React Path of courses that take over 50 hours in total

https://app.pluralsight.com/library/courses/testing-react-applications-jest/table-of-contents
Testing React Applications with Jest</a> 11 May 2018 [3h 36m]
by Daniel Stern (@danielJackstern)

https://github.com/DanielStern/Isomorphic-React
This application is a basic API client which gathers data from an outside API (in this case, Stackoverflow) and generates an isomorphic, single-page application (SPA).



## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}
