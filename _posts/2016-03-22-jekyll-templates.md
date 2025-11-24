---
layout: post
date: "2025-11-24"
lastchange: "25-11-24 v004 + table :2016-03-22-jekyll-templates.md"
url: https://wilsonmar.github.io/jekyll-templates
file: "jekyll-templates"
title: "Jekyll templates"
excerpt: "The most popular"
tags: [website, builder, templates, jekyll]
image:
# yellow aristo template 
  feature: https://cloud.githubusercontent.com/assets/300046/15800377/63a04610-2a34-11e6-87d6-c66f1366715f.jpg
  credit: Aristo
  creditlink:
comments: true
created: "2016-03-22"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article lists and evaluates templates for Jekyll, 
which drives GitHub.io static websites.

The structure of content (.md files) created for display using 
Jekyll makes it easy (with only a few edits) 
to switch the site to use any number of 
other Jekyll themes / templates.


### Jekyll Theme shops #

My personal favorite is:

   * <a target="_blank" href="http://jekyll.tips/templates/">jekyll.tips/templates</a>
   by Mike Neumegen (<a target="_blank" href="https://twitter.com/mikeneumegen">@mikeneumegen</a>,
   CEO of @CloudCannonApp, a SaaS services provider for Jekyll) 

Within the Jekyll repository on GitHub:

   * <a target="_blank" href="https://github.com/jekyll/jekyll/wiki/Themes">
    github.com/jekyll/jekyll/wiki/Themes</a>

Premium (paid) themes so you get updates and support, for less than $30.

   * <a target="_blank" href="http://jekyllthemes.io">jekyllthemes.io</a>

This is an affiliate for other sites offering the same themes for less.

   * <a target="_blank" href="http://jekyllthemes.org">jekyllthemes.org</a>

<hr />

### Jekyll.tips Templates #

<a target="_blank" href="http://jekyll.tips/templates/">jekyll.tips/templates</a>
lists templates available at
<a target="_blank" href="https://github.com/CloudCannon/">
https://github.com/CloudCannon</a>.

<a target="_blank" href="https://github.com/CloudCannon/bakery-store/">
Bakery-store</a> is in GitHub but not shown in the gallery.



## Responsive? #

To see responsive websites, get to it quicker on your mobile smartphone QR code is provided for you.



<a name="MichaelRoseThemes"></a>

### Themes from Michael Rose #

Content on this website was created by editing markdown text (index.md files)
stored on GitHub.com.
The HTML sent to your browser for display is generated from markdown using
Ruby running [Jekyll](http://jekyllrb.com/) 3.0 rendering modifications of the
<a target="_blank" href="https://github.com/mmistakes/minimal-mistakes/">
minimal-mistakes theme from GitHub</a> by Michael Rose.

Michael also created the
<a target="_blank" href="https://github.com/mmistakes/skinny-bones-jekyll">
skinny-bones-jekyll theme demo</a> forkable
<a target="_blank" href="https://mmistakes.github.io/skinny-bones-jekyll/">
from GitHub</a>.
It features more use of graphics, and allows for localization.

Micheal blogs about his themes at
https://mademistakes.com/articles/using-jekyll-2016/


<a name="FeaturesTable"></a>

### Feature Comparison Table

Features by each template:

| P | Feature          | HPSTR   | Minimal | Skinny | Simple |
|:--|:-----------------|:-------:|--------:|-------:|-------:|
| A | External links   | YES     | -       | -      | -      |
| C | Floating menu    | YES     | -       | -      | -      |
| A | Gallery layout   | -       | -       | YES    | -      |
| B | I18n flags       | -       | YES+    | -      | -      |
| B | AutoLocalization | -       | YES+    | YES    | -      |
| C | Multiple authors | -       | YES     | -      | -      |
| A | <a href="#PageTOC">Page TOC</a>  | -       | YES     | -      | -      |
| A | Pages/Articles   | -       | *       | YES    | YES    |
| A | Amazon links     | -       | -       | -      | -      |
| B | Posts            | YES     | YES     | YES    | YES    |
| A | Pagination       | YES     | -       | -      | -      |
| C | Rakefile.rb      | YES     | -       | -      | -      |
| B | Reading time     | YES     | -       | -      | -      |
| A | Tags list        | YES     | -       | -      | -      |
| A | Site search      | +       | YES+    | -      | YES    |
| A | Social icons only| -       | -       | -      | YES    |
| A | Social names     | YES     | -       | -      | -      |
| C | Timezones        | YES     | -       | -      | -      |
| ? | Game             | -       | -       | -      | -      |
| ? | Clickable Map    | -       | -       | -      | -      |
| ? | Shopping cart    | -       | -       | -      | -      |

All the themes feature:

   * YAML front matter in index.md files processed by Jekyll
   * 404.md
   * feed.xml generation
   * Disqus support
   * Use of SASS
   * Theme setup page from the main menu / tab
   * Links to major social sites
   <br /><br />

<a name="PageTOC"></a>

### PageTOC

A Table of Contents is displayed as a drop-down

<pre>\{\% include l18n.html \%\}</pre>


### Installation and Generation #

Michael Rose presents a concise description of
<a target="_blank" href="https://mmistakes.github.io/minimal-mistakes/theme-setup/">
how to install the minimal-mistakes theme</a>.
This post augments and clarifies it.

Begin by making a folder and populating it on my local machine.

There is both a Master branch and a Develop branch.

I don't care about all the change history, so I click "Download ZIP"
and unzip it into that folder rather than:

    git clone https://github.com/mmistakes/minimal-mistakes.git

### Grunt example #

After downloading, have Maven pull in dependencies based on the Gemfile:

   bundle install

This causes the list of dependencies in the Gemfile to be downloaded.

Behind the scenes is a running of the **Gruntfie.js** that comes with the theme.
It defines the parameters of various tasks that are downloaded:

* <a target="_blank" href="https://github.com/gruntjs/grunt-contrib-clean">clean</a>
clears files and folders.
* <a target="_blank" href="https://github.com/gruntjs/grunt-contrib-jshint">jshint</a>
validates files with JSHint, based on the **.jshintrc** configuration file at the root folder.
* <a target="_blank" href="https://github.com/gruntjs/grunt-contrib-uglify">uglify</a>
minfies files with UglifyJS.
* <a target="_blank" href="https://github.com/gruntjs/grunt-contrib-watch">watch</a>
runs tasks whenever watched files change.
* <a target="_blank" href="https://github.com/gruntjs/grunt-contrib-imagemin">imagemin</a>
minifies PNG graphics files.
* <a target="_blank" href="https://github.com/sindresorhus/grunt-svgmin">grunt-svgmin</a>
minifies SVG graphics files.

NOTE: File names beginning with a dot are hidden.


## Gulp example #

* <a target="_blank" href="https://github.com/kriasoft/static-site-starter">
   https://github.com/kriasoft/static-site-starter</a>
   uses a gulpfile.js



## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}
