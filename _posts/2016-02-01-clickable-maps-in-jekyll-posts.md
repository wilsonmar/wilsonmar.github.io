---
layout: post
title: "Clickable diagrams and maps in Jekyll posts"
excerpt: "Includes make me happy"
tags: [sample post, click maps, test]
date: "2016-02-01"
file: "clickable-maps-in-jekyll-posts"
comments: true
---
<i>{{ page.excerpt }}</i>
<p align="right"><a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=es&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Español (Spanish)" width="20" height="14" src="../images/flags/es.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=fr&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Français (French)" width="20" height="14" src="../images/flags/fr.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=de&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Deutsch (German)" width="20" height="14" src="../images/flags/de.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=it&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Italiano" width="20" height="14" src="../images/flags/it.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=pt&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Português" width="20" height="14" src="../images/flags/pt.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ru&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Cyrillic Russian" width="20" height="14" src="../images/flags/ru.png"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="中文 (简体) Chinese (Simplified)" width="20" height="14" src="../images/flags/cn.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ja&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="日本語 Japanese" width="20" height="14" src="../images/flags/jp.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="한국어 Korean" width="20" height="14" src="../images/flags/ko.gif"></a>
</p>
<a name="US_states_map"></a>

## States of the Union

Major cities are listed in the index on the right.

Clickable US map (Click on Oregon or Washington state):

<img src="https://cloud.githubusercontent.com/assets/300046/14015545/77b35900-f17f-11e5-83b7-f931da813eb2.gif" alt="USA states" usemap="#us-states" />
<map name="us-states">
{% for s in site.collections['us-states'] %}
    <area shape="poly" coords="{{ s.map.coord }}" 
          href="{{ s.href }}" 
          alt="{{ s.alt }}" title="{{ s.title }}" >
{% endfor %}
</map>
<!-- Thanks to David Jacquel for http://stackoverflow.com/questions/36192890/clickable-image-map-in-jekyll-site -->

<a name="WA"></a>

#### WA = Washington

<a name="OR"></a>

#### OR = Oregon

I was not able to get them working by doing an include:


   &#123;% include us_states_museums.html %}


http://stackoverflow.com/questions/36192890/clickable-image-map-in-jekyll-site


If you know me, I've got a bunch of complicated diagrams with lots of boxes and lines.

So I've been creating animations in PowerPoint, then recording explanations in videos 
that reveal each box and line.

That diagram on my website I would craft coordinates around each clickable area
(image maps in HTML and now in CSS).

Jekyll supports 
<a target="_blank" href="https://jekyllrb.com/docs/collections/">collections</a>


## Making clickable maps
Several websites help in the tedious work of defining clickable areas:

   * https://makeaclickablemap.com

   * https://www.image-maps.com

Some examples make use of jQuery:

   * http://winstonwolf.pl
     is beautiful maps of European countries as well as the US.

   * http://www.outsharked.com/imagemapster/
     jQuery

Blogs about this topic:

   * http://www.cssplay.co.uk/articles/imagemap/

## Sites that have nice maps

http://www.samhsa.gov/medication-assisted-treatment/physician-program-data/treatment-physician-locator?field_bup_physician_us_state_value=OR

{% highlight html %}
<iframe src="https://www.makeaclickablemap.com/map.php?dd079c4716f558afc7fca114027f699f7c2c005f" frameborder="0" scrolling="no" height="720" width="960"></iframe>
{% endhighlight %}


## SVG if you have it

Scaled Vector Graphics stay sharp on all sizes.

* http://freehtml5maps.com
uses raphael javascript library to render the map in SVG or VML.

* http://codecanyon.net/item/interactive-usa-map-html5/4527698
asks $13 for its SVG scalable/responsive USA map.

{% highlight html %}
<svg version="1.1" id="Layer_1" xmlns="w3.org/2000/svg"; xmlns:xlink="w3.org/1999/xlink"; x="0px" y="0px" width="1343.791px" height="932.583px" viewBox="0 0 1343.791 932.583" enable-background="new 0 0 1343.791 932.583" xml:space="preserve"> <g id="Panama"> <path fill="#FDF9D1" stroke="#918E8F" d="..."/> </g> </svg> 
{% endhighlight %}

* http://www.irunmywebsite.com/raphael/SVGTOHTML_LIVE.php

* http://code.google.com/p/svg2imap/



## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}
