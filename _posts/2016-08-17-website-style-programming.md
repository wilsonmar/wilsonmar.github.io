---
layout: post
title: "Website Style Programming"
excerpt: "How to make it clean, pretty, easy, fun"
tags: [website, CSS]
date: "2016-08-17"
file: "website-style-programming"
image:
# banner watercolor bright sunset boad lake 1900x500-i12
  feature: https://cloud.githubusercontent.com/assets/14143059/17739739/4dfd0696-6453-11e6-9296-80a72384b6d8.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here are tools and rules I try to use for styling websites.

   ### Colors:

0. What is too many colors?  http://styletil.es

   
## Libraries #

* GetBootstrap.com

* font-awesome SVG icons

* [Google Accelerated Mobile Pages](/accelerated-mobile-pages/)

* Algolia search

* EmailOctopus (based in London, England) 
  provides analytics, bounce/complaint tracking, and email campaigns for contacts sent to it via an API.
  It is low cost because it stored emails in AWS cloud, under your account.

   * <a target="_blank" href="https://www.youtube.com/watch?v=tYyIzWiUB28">
   This video</a> explains the product

   * <a target="_blank" href="http://codepen.io/SaijoGeorge/pen/oLgQKB">
   This CodePen</a> by Saijo George
   provides HTML and CSS for a simple form to send subscription info to EmailOcotopus.

   * A Wordpress plug-in is available.

* Prism.js and prism.css (2KB minified) is a syntax highlighter. In the
   <a target="_blank" href="http://prismjs.com/examples.html">
   examples page</a>, click the various styles at the right of the page to see changes reflected.

* Google Analytics



## CSS wisdom #

<img class="img-right" align="right" alt="tshirt you are the css to my html 300x250-15kb" width="300" height="250" src="https://cloud.githubusercontent.com/assets/14143059/17756849/f86bb59a-649f-11e6-9209-2fe3636ea226.jpg">

Many developers have declared "enough" and have switched to HTML5-only websites
as less and less enterprises have given up on demanding their users only use Microsoft-only browers.

In HTML: 

* Use HTML5 tags instead of \<div :

* \<main so screen readers know where to look for content

* \<section to separate topics within a page

* Within \<header &amp; \<footer, use \<div to separate sub-sections
   <br /><br />


In CSS: 

* Use a <a href="#Css-preprocessor"> pre-processor</a> which substitute actual CSS for variables you define:

   * <a target="_blank" href="http://lesscss.org/usage/">Less</a> on NodeJs to use .less files which extend CSS syntax (used by Bootstrap)
   * <a target="_blank" href="http://sass-lang.com/install/">SASS</a> on Ruby to use .scss which extends CSS or .sass using indented syntax
   * <a target="_blank" href="http://stylus-lang.com/">Stylus</a> on NodeJs to use .styl files containing either syntax
   * <a target="_blank" href="http://csspre.com/compile/">PostCSS</a> for JavaScript processing
   <br /><br />

* Use cleaner indented syntax:

   * .styl for stylus files (rather than .styl)
   * .sass for Sass files ()
   <br /><br />

* <a target="_blank" href="https://sassmeister.com/">
   sassmeister.com</a> displays expanded CSS from SASS.

* Use CSS IDs (#tag) for navigation JavaScript (they're faster)
* Use CSS classes (.tag) for styling
* Code CSS or SCSS in several files:

   * _base.css
   * _typography.css
   * _layout.css
   <br /><br />

* Name files with leading underline when they are combined into a main.css file.

* Use <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/Guide/HTML/Using_data_attributes/">
   HTML5 Data-* attributes</a>
   to supply additional information

* Normalize "user agent stylesheet" of each browser (inconsistent)
   by adding styles in a stylesheet rather than starting out with a CSS Reset that creates an un-styled baseline

   * <a target="_blank" href="https://necolas.github.io/normalize.css/">
   Normalize.css</a>

   * <a target="_blank" href="http://html5doctor.com/html-5-reset-stylesheet/">
   html5doctor's Reset Stylesheet</a>
   * <a target="_blank" href="https://meyerweb.com/eric/tools/css/reset/">
   Eric Meyer's Reset CSS</a>
   <br /><br />

* <a target="_blank" href="https://csswizardry.com/2013/04/shame-css/">
   Harry Roberts at CSSWizardry</a> recommends putting "hack-y" questionable CSS in a separate file named "shame.css"
   For example, styles specific to a browser, such as ie9, put in a separate file:

   <pre>
File: ie-9.css
.ie9 a { padding: 20px; }
&nbsp;
File: ie-10.css
.ie10 a { margin: 2px; }
.ie10 p { line-height: 1; }
   </pre>

* Use <a target="_blank" href="http://caniuse.com/#feat=viewport-units">
   view port percentage lengths (1 vh = 1% of height, 1 vw = 1% of width, vmin, vmax)

* Cache selectors for re-use:

   <pre>
var modal = document.getElementById('modal');
modal.onclick = function(){
   // do something.
}
// jQuery:
var modal = $("#modal");
modal.fadeIn();
modal.fadeOut();
   </pre>

   <br /><br />


## Specific CSS #

* Use "last" ascender to lists to add extra space after the last item in a list.

* Mixins

* Use <a target="_blank" href="https://www.JSBin.com/">JSBin.com</a> 
   to experiment with CSS and JavaScript rendering online.


## Automation tasks #

Here are automation tricks:

* <a target="_blank" href="http://specificitykeegan.st/">CSS Specificity calculator</a>
   based on <a target="_blank" href="https://www.w3.org/TR/REC-CSS2/cascade.htm#specificity">
   this W3 standard</a>

* Identify CSS tags not referenced in HTML

* Mimify CSS files for publishing to sites so there is no penalty for adding comments

* For websites not using HTTP2, 
   combine several CSS into one file

* Pre-Compress images in basic sizes (HD display, tablet, mobile, etc.) to save download time.


## Automation Tools #

The workflow is automated by task runners:

   * <a target="_blank" href="https://incident57.com/codekit/">
   CodeKit</a> refreshes the browser whenever it detects file changes occurred

   * <a target="_blank" href="http://gulpjs.com/">
   GulpJs</a>

   * <a target="_blank" href="http://gruntjs.com/">
   GruntJs</a>

   * Koala

* <a target="_blank" href="https://github.com/postcss/autoprefixer/">
   Autoprefixer</a> uses the caniuse.com to code for you



## CSS Naming conventions #

These prevent errors:

* Use hyphens to separate words in a sentence
* Use underlines to separate compound words

* Use functional names such as "submit-button" 
* Avoid names such as "red-button" what it looks like


## JavaScript #

* Separate scripts in modals.js and themes.js
* Combine all minified files together in one global.js for production publication

* Use CDN but have fall-back local copy


## References #

These are from:

   * <a target="_blank" href="https://bem.info/methodology/">
   BEM.info</a> (Block, Element, Modifier) frontend development methodology
   to provide transparency and meaning

   * <a target="_blank" href="https://support.google.com/webmasters/">
   support.google.com/webmasters</a>

   * <a target="_blank" href="https://github.com/necolas/idiomatic-css/">
   Idiomatic CSS</a>

   * <a target="_blank" href="https://github.com/airbnb/css/">
   Airbnb CSS / SASS Styleguide</a>

   * <a target="_blank" href="https://gist.github.com/bobbygrace/9e961e8982f42eb91b80">
   Trello CSS Guide</a>

   * <a target="_blank" href="https://codeguide.co/">
   Code Guide by @mdo</a>, developer at GitHub

   * <a target="_blank" href="https://make.wordpress.org/core/handbook/best-practices/coding-standards/">
   Wordpress Coding Standards</a> include HTML and CSS, not just the PHP

   * <a target="_blank" href="https://thesassway.com/beginner/how-to-structure-a-sass-project/">
   How to structure a Sass Project</a>

   * <a target="_blank" href="https://modernweb.com/2014/04/14/organizing-your-css-code-for-preprocessors/">
   Organizing Your CSS Code for Preprocessors</a>

   * <a target="_blank" href="https://gist.github.com/dancasttro/9884868/">
   structure-css</a>

   * <a target="_blank" href="https://developer.chrome.com/devtools/docs/css-preprocessors/">
   Chrome: Working with CSS Preprocessors</a>

   * <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Tools/Style_Editor#Source_map_support/">
   Firefox Developer Tools: Style Editor</a>

   * <a target="_blank" href="https://typanus.net/codrops/css_reference/display/">
   CSS Reference</a>

   * <a target="_blank" href="https://calendar.perfplanet.com/2011/css-selector-performance-has-changed-for-the-better/">
   CSS Performance has changed (for the better)</a>
   * <a target="_blank" href="https://benfrain.com/css-performance-revisited-selectors-bloat-expansive-styles">
   CSS Performance revisited: selectors, bload, and expansive styles</a>



## More on front-end software development #

This is one of several topics:

{% include front-end_links.html %}
