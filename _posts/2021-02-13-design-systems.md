---
layout: post
date: "2023-01-18"
file: "design-systems"
title: "Design Systems"
excerpt: "Specifications for look and feel by various tech companies, also providing secure UI libraries"
tags: [API, text to speech, JavaScript, programming]
image:
# feature: pic easter island clenched-fist-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15212221/c77ab1ba-17fc-11e6-924d-0c5d01e53522.jpg
  credit: Patty Civalleri
  creditlink: http://1take.com/photography/archaeology/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Major organizations creating websites create a "Design System" publication which specifies the UX (User Experience) and provides tools for website designers to achieve a common UI (User Interface).

{% include whatever.html %}

UX includes more than colors, fonts (typography), icons (iconography), <a href="#Design_Tokens">Design Tokens</a>, line height, and other aspects of styling websites and Andriod/iOS mobile apps. Design Systems provide Guidelines on Voice and Tone, Animation, Accessibility, Layout, Navigation, Search, Messaging, Data Visualization, Localization, etc. 
Component blueprints provide examples to code components such as Accordion, Checkbox, etc. in the form of 

   * Bootstrap theme file 
   * React component library (JavaScript)
   * Custom font files
   * Sketch core library specifying fonts
   * Sketch icon library
   * Sketch Grid library
   * Sketch illustration library
   * Sample code to use the Design System components to build a website
	<br /><br />

> Common use of a UI coding (JavaScript, etc.) library makes <a target="_blank" href="https://wilsonmar.github.io/owasp-testing/">scanning for security vulnerabilities (such as OWASP)</a> more efficient, so the security of each app's code is "built in" via the libraries used rather than individually tested out of custom code.

To create design systems, many use the <a target="_blank" href="https://tailwindcss.com/docs">Tailwind CSS compiler</a>. It's called an "atomic/utility-first" CSS framework (UI-kit). It's <a target="_blank" href="https://blog.logrocket.com/tailwind-css-is-it-tomorrows-bootstrap-ebe560f9d00b/">best installed via npm</a>.
For better performance, Tailwind removes unused CSS using PurgeCSS, which can be <a target="_blank" href="https://stevenwestmoreland.com/2021/01/using-tailwind-css-with-jekyll.html">incorporated into Jekyll</a> and <a target="_blank" href="https://www.youtube.com/watch?v=dc-zMDiANvg">themes</a>.

## Examples

<a target="_blank" href="https://github.com/alexpate/awesome-design-systems">https://github.com/alexpate/awesome-design-systems</a> - a curated list of design systems, highlighting those with components, voice & tone, designers kit.

<a target="_blank" href="https://www.invisionapp.com/inside-design/design-systems/">Your guide to design systems from the world’s leading brands</a> Oct. 9, 2017

US Government has the U.S. Web Design System (USWDS) at <a target="_blank" href="https://designsystem.digital.gov/">designsystem.digital.gov</a> (Slack channel <a target="_blank" href="https://chat.18f.gov/">chat.18f.gov</a>)

AWS products and services uses <a target="_blank" href="https://cloudscape.design/">cloudscape.design</a> since 2016.
It's open-sourced at <a target="_blank" href="https://github.com/cloudscape-design">github.com/cloudscape-design</a>.
It's used in <a target="_blank" href="https://github.com/aws-solutions-library-samples/guidance-for-crossregion-failover-and-graceful-failback-and-observability-on-aws">this solution</a>

Salesforce has their Salesforce Lightning Design System (SLDS) at <a target="_blank" href="https://www.lightningdesignsystem.com/">lightningdesignsystem.com</a>

SAP Fiori at <a target="_blank" href="https://experience.sap.com/fiori-design/">experience.sap.com/fiori-design</a> announced in 2015.

<a target="_blank" href="https://polaris.shopify.com/">Shopify's "Polaris" Design System</a> shows Ecommerce giant 

Apple <a target="_blank" href="https://developer.apple.com/design/">developer.apple.com/design</a> for "Human Interface Guidelines"
Apple hands out awards for those who designed apps using their system. 
<a target="_blank" href="https://developer.apple.com/videos/design/">Videos</a>
The sans-serif "San Francisco" is <a target="_blank" href="https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/typography/">Apple's system font</a> across macOS, iOS, watchOS, and tvOS.

Microsoft's Fluent Design System at <a target="_blank" href="https://fluent.microsoft.com/">fluent.microsoft.com</a> and <a target="_blank" href="https://www.microsoft.com/design/fluent/">microsoft.com/design/fluent</a>

Google Material Design

Facebook

<a target="_blank" href="https://helios.hashicorp.design/">https://helios.hashicorp.design</a> is the Design System for constructing HashiCorp.com.



<a name="Tools"></a>

## Tools

Many provide their Design System as a plugin for the <strong>Sketch</strong> graphic program on macOS.

Salesforce provides a <a target="_blank" href="https://www.lightningdesignsystem.com/tools/validator/">SLDS Validator for VS Code at https://www.lightningdesignsystem.com/tools/validator/</a> which scans your markup, validates it against a database of guidelines/tips/gotchas/etc. extracted from the SLDS documentation, and offers suggestions on how to improve your code.
    * Salesforce articles https://www.lightningdesignsystem.com/resources/articles/
    <br /><br />

Same with Figma


<a name="Design_Tokens"></a>

## Design tokens

> "think of a design token as a key that unlocks a specific value."

Tokens are like nicknames for colors, opacity, shadows, etc. See <a target="_blank" href="https://www.youtube.com/watch?v=wtTstdiBuUk">VIDEO "What are Design Tokens"</a>. Alias tokens are diverged Global Tokens made for context-specific purpose, to separate concerns.

<a target="_blank" href="https://www.youtube.com/watch?v=mq984Mc9UVA">
The Future of Design Systems</a> | Hayley Hughes | Airbnb | Awwwards Conf San Fran

Tokens are specified in SASS files, not token values.

### A Measure of Line Height

USDS defines the "measure" token to standardize line heights:

* 1 =	44ex
* 2 =	60ex
* 3 =	64ex
* 4 =	68ex
* 5 = 72ex
* 6 =	88ex
* 'none' =	no max width


## Resources #

The Red Dot Design Award (at <a target="_blank" href="https://www.red-dot.org/">red-dot.org</a>) is a German international design prize awarded by Red Dot GmbH & Co. It is one of the most prestigious design awards worldwide and honors innovation, concepts and visions.


## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}
