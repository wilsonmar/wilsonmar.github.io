---
layout: post
title: "Node API Starter"
excerpt: "Add routes to basic features included"
tags: [Node, API]
date: "2016-10-27"
file: "node-utilities"
image:
# feature: pic white robots woman 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622167/45abd918-0585-11e6-8537-a58e0b55e3ec.jpg
  credit: Cyberconstruct.be
  creditlink: http://cyberconstruct.be/2015/02/digital-job-crafting/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here are my notes on building Node.Js by JavaScript programming.

## Platforms: Node on IoT

The "smallness" of Node makes it ideal for use on tiny operating systems for
IoT. Node is now running on Raspberry Pi, etc.

This would require having V8 engines on devices, which takes up memory.

But the interpretive nature of Node would enable it to provide a larger and more
varied app than compiled.

This is at risking slower parsing bottleneck.


<a name="IDE"></a>

## IDE #

Rob Conery recommends 
$49 WebStorms


<a name="Frameworks"></a>

## Modularity by Framework #

* http://x2node.com/
   is a complete but lightweight framework on various modules at<br />
   <a target="_blank" href="https://github.com/boylesoftware/">
   https://github.com/boylesoftware</a><br />
   that include mySQL, 
   http://boylesoftware.com/blog/x2-framework-node-js <br />

* Plain JavaScript - Namespaces, Module Pattern, Class Pattern

* AngularJs is a "one stop shop" for a variety of architectures
  - Modules, Services, Factories, Controllers, Directives

* Backbone provides views in JavaScript -
  Namespaces and Objects.
  Full modules with Backbone.Marionette

* Knockout focuses on data binding (routing, composition, dependency injection elsewhere)

* EmberJs
   - Extend built-in objects or use ES6/Plain JS Modules

* Durandal
   - Async Module Definition

* Sails (as in MVC Rails) for Backbone SPA sites
   https://github.com/balderdashy/sails
   http://sailsjs.org/

* Geddy

* Koa (replacement for Express)

* Meteor
   <a target="_blank" href="https://www.youtube.com/watch?v=SYqyWff6iMQ">
   Intro to Meteor</a>

<a target="_blank" href="https://www.youtube.com/watch?v=WOVmr6CjgNw">
Comparing Node.js Frameworks: Express, Hapi, LoopBack, Sailsjs and Meteor
Feb 3 2015</a>
by @shubhrakar at StrongLoop

[7:36] Express.js uses MongoDB OOTB.

   * http://stackoverflow.com/questions/17589178/why-should-i-use-restify
   restify.com supports SPDY.

## API GraphQL

https://www.sitepoint.com/creating-graphql-server-nodejs-mongodb/


## Babel for ES6 

In index.js

   <pre>
require('babel/register');
require('./app');
   </pre>

## CommonJS Compatible standard

EcmaScript 6 in NodeJs.

   <pre>
   var api = require('./api'); 
   </pre>

public interface facades:

   <pre>
   exports.getCities = function (cb){
      // ...
   }
   </pre>


## Dependency management

http://RequireJs.org

Asynchronous Module Definition (AMD)

To define a dependency:

   <pre>
// aModule.js
define([], function(){
  function_init(){
    // ...
  }
  return {
    init: _init
  }
});
  </pre> 

To use a dependency:

   <pre>
   require(["aModule","jQuery"],
     function (aModule, $){
        // use the dependencies
     }
   );
   </pre>

## Metalanguages

### Coffeescript

   Coffeescript uses a simpler (another) syntax
   
### Typescript

   From Microsoft. Brings in type safety.

### Dart from Google

   Compiles to JavaScript

## Avoiding Global Scope

* Self-Executing Anonymouse Funcitons (SEAF)
* Self-Invoking Anonymouse Functions (SIAF)
* Immediately Invoked Function Expressions (IIFE)


## Loading

http://github.com/rgrove/lazyload

http://bitl.comy/vswebessentials

## JSLint

http://gruntjs.com

## GruntJs



## Testing tools

Smoke tests (canary) identify whether code deployed well so the 
environment is usable.

   * Jasmine from http://pivotal.github.io/jasmine/
   behavior-driven development framework
   
   * Mocha

   * QUnit

Unit tests tests at granular code level.

UI tests (for User Acceptance Testing)
uses tools such as Selenium to manipulate the UI to see the DOM output.

Integration tests testing pieces of several units at once.


## Video Learning resources #

   Below are notes from the Pluralsight's
   <a target="_blank" href="https://app.pluralsight.com/paths/skills/node-js/">
   Node.js learning path</a> series of classes.


### Beginner classes

* <a target="_blank" href="https://app.pluralsight.com/library/courses/node-intro/table-of-contents">
   Introduction to Node.js
   2h 48m 19 Dec 2012</a>
   by Paul O'Fallon 

* <a target="_blank" href="https://app.pluralsight.com/library/courses/npm-playbook/table-of-contents">
   NPM Playbook
   Dec 11, 2015 58m</a>
   by Joe Eames (@josepheames, joeeames.me, conference organizer)



### Intermediate classes

* <a target="_blank" href="https://app.pluralsight.com/library/courses/nodejs-express-web-applications">
   Building Web Applications with Node.js and Express 4.0
   4h 43m Dec 03, 2015</a>
   by Jonathan Mills

* <a target="_blank" href="https://app.pluralsight.com/library/courses/node-js-express-rest-web-services/table-of-contents">
   RESTful Web Services with Node.js and Express
   2h 4m 13 Apr 2015</a>
   by Jonathan Mills

* <a target="_blank" href="https://app.pluralsight.com/library/courses/large-scale-javascript/table-of-contents">
   Large Scale Javascript 2h 49m 24 Jan 2014</a>
   by Shawn Wildermuth (@ShawnWildermuth)

   <a href="#Frameworks">Frameworks</a>

   EcmaScript6

   Coffeescript uses a simpler syntax


### Advanced classes

* <a target="_blank" href="https://app.pluralsight.com/library/courses/nodejs-testing-strategies/table-of-contents">
  NodeJs Testing Strategies 2h 39m 13 Apr 2015</a>
   by Rob Conery

* <a target="_blank" href="https://app.pluralsight.com/library/courses/node-application-patterns/table-of-contents">
   Node Application Patterns
   2h 30m 10 Jul 2014</a>
   by Rob Conery

   Makes use of <a href="#Cloud9">cloud9.io</a>
   IDE.


   ### Additional courses

* <a target="_blank" href="https://app.pluralsight.com/library/courses/play-by-play-node-web-api-john-papa-sam-artioli">
   Play by Play: Building a Node Web API</a>
   by John Papa and Sam Artioli Beginner Jan 29, 2016 2h 1m

* <a target="_blank" href="https://app.pluralsight.com/library/courses/github-integrating-node-applications">
   Integrating Node Applications with GitHub</a>
   by Daniel Stern

* <a target="_blank" href="https://app.pluralsight.com/library/courses/socket-io-building-real-time-applications">
   Building Real-time Applications with Socket.io</a>
   by Patrick Schroeder
   Aug 12, 2016 1h 13m


## Other Learning resources #

* https://school.scotch.io/build-a-restful-nodejs-api/">
   Build a Restfule NodeJs API</a>
   video intro is offered free.
   Subscribe for the MongoDB tutorial ($12/month).

* <a target="_blank" href="http://www.slideshare.net/briandemant/smarr-oscon-2007">
   High-Performance JavaScript: Why everything you've been taught is wrong</a>
   by Joseph Smarr (at Plaxo)

* <a target="_blank" href="https://www.youtube.com/watch?v=B0iczskSrls&list=PL1Z_7yg6Pa3AhqCOTQKm9X_Sl9xLdMKYo&index=6">
   Microsoft Azure for Node.JS developers</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=yBO0U5fWss4">
   Using Node.JS with Visual Studio Code</a>
   Microsoft Virtual Academy
