---
layout: post
title: "API Portals"
excerpt: "Oh the places we go"
tags: [API, portals]
date: "2016-04-07"
file: "api-portals"
image:
# pic orange easter-island 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15214909/071e94fc-180d-11e6-99c6-45034f907e42.jpg
  credit: Lorcan Handler
  creditlink: http://feelgrafix.com/732467-amazing-easter-island-pictures.html
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

An inventory of APIs is available from:

   * <a target="_blank" href="https://apiharmony-open.mybluemix.net/">
  API Harmony (IBM)</a>

   * <a target="_blank" href="http://www.programmableweb.com/apis">
   ProgammableWeb.com</a> 

  * <a target="_blank" href="https://apis-guru.github.io/">
   https://apis-guru.github.io</a> is the UI for
   <a target="_blank" href="https://github.com/APIs-guru/api-models">
   https://github.com/APIs-guru/api-models</a>
   is a repository of APIs you can search while off-line.

Below are some major ones API developers should know about:

## Retail #

* <a target="_blank" href="https://go.developer.ebay.com/">
   Ebay</a> reports $7 billion worth of sales through APIs.

* <a target="_blank" href="https://developer.amazon.com/">
   Amazon</a>

* <a target="_blank" href="https://developer.walmartlabs.com/">
   Walmart Labs</a>

* <a target="_blank" href="https://developer.bestbuy.com/">
  Best Buy</a>
   <a target="_blank" href="https://medium.com/best-buy-developers/announcing-a-change-to-best-buy-s-api-access-b09afc4bc27a#.5d39skb3t">
   no loger issues API keys to gmail and other free email accounts</a>

* Starbucks

   http://docs.coffeesender.apiary.io/#


## Enterprise #

* <a target="_blank" href="https://www.youtube.com/watch?v=8Z9qva1nv1c">
   Video: Exposing Salesforce REST Services Using Swagger</a> 2013

   https://github.com/jesperf/force-rest-api
   by Jasper Joergensen at Heroku

   https://github.com/ryanbrainard/force-rest-
   adds caching (also in Maven Central)
   

## Social #

* <a target="_blank" href="https://developer.salesforce.com/">
   Salesforce</a>

* <a target="_blank" href="">
   Twitter</a> reports 10 times more traffic via API than their website.

* <a target="_blank" href="https://developers.facebook.com/tools-and-support/">
   Facebook</a>

## Travel #

* <a target="_blank" href="http://developer.ean.com/">
   Expedia</a> travel

* <a target="_blank" href="http://www.everytrail.com/developer">
   Everytrail</a> has rich information on travel sites and media about them.
   It returns XML.
   A wiki is provided.

## Finance #

* <a target="_blank" href="https://developer.capitalone.com/">
   Capital One</a> is a trail-blazer for banks opening up APIs.


## Music #

* <a target="_blank" href="https://developer.spotify.com/web-api/">
   https://developer.spotify.com/web-api/</a>
   lets your applications fetch data from the Spotify music catalog and manage user’s playlists and saved music.


## Flickr API

* <a target="_blank" href="https://www.flickr.com/services/api/">
   Yahoo Flickr</a> photos

Flickr provides an API to access images contributed by its users.

Flicker was purchased by Yahoo, which is why API keys for it are obtained through a Yahoo sign-on.

The description:

      https://www.flickr.com/services/developer

and the App Garden at:

      https://www.flickr.com/services/api/

of code using code from:

      http://code.flickr.net/

Management console:

    http://apigee.com/console/flickr


### Google #

Google's maps is the most-referenced API according to ProgrammableWeb.

<a target="_blank" href="https://developers.google.com/products/">
  Among Google's many API products</a>:

* <a target="_blank" href="https://developers.google.com/civic-information/">
   Google's Civic Infomation API</a> 
   enables developers to build applications that let citizens and voters know about their political representation and voting locations.
   First released in 2012, it supplies official information for every state and the District of Columbia.
   Version 2 released in 2015 adds ballot drop-off and early voting locations.

## Data.gov #

   * <a target="_blank" href="http://www.digitalgov.gov/2015/04/29/the-api-briefing-top-five-findings-for-api-developers-from-pew-research-center/">
     Top Five Findings for API Developers from Pew Research Center</a>


### US federal jobs #

http://usasearch.howto.gov/developer/jobs.html
collects jobs posted by government at several levels (federal, state, etc.).

No API is required for access.

A sample free-form query:

   http://api.usa.gov/jobs/search.json?query=telecommute+jobs


### US Weather #

http://graphical.weather.gov/xml/rest.php
provides weather prediction in XML.

A sample request:

http://graphical.weather.gov/xml/sample_products/browser_interface/ndfdXMLclient.php?lat=48.99&lon=-77.01&product=glance

Elements are described at
http://graphical.weather.gov/xml/docs/elementInputNames.php

   * product "time-series"
   * end=2016-05-01T0:00:00

BLAH: Sample code to present the information is not provided by the site.


### US Census #

<a target="_blank" href="http://www.census.gov/developers">
http://www.census.gov/developers</a>
contains a wide list of data available freely.

BLAH: Even though this site is maintained by a federal organization,
not all datasets have data for the entire nation (all 50 states of the union
  and territories).

The javascript SDK for US Census Bureau data stored at
<a target="_blank" href="https://github.com/uscensusbureau/citysdk">
GitHub CitySDK</a>
and described at
<a target="_blank" href="https://uscensusbureau.github.io/citysdk">
https://uscensusbureau.github.io/citysdk</a>,
includes simple integrations to facilitate mash-up of other open datasets.

The JavaScript uses the "Module pattern" of coding that uses a "closure".

A sample end point for data from the 2010 census for all states:

```
api.census.gov/data/2010/sf1?key=...&get=P0010001,NAME=&for=state:*
```

The ... above is replaced by each user's own API key
obtained from email after registration at
<a target="_blank" href="http://api.census.gov/data/citysdk.html">
http://api.census.gov/data/citysdk.html</a>

### US White House #

<a target="_blank" href="https://github.com/WhiteHouse/api-standards#pragmatic-rest">
https://github.com/WhiteHouse/api-standards#pragmatic-rest</a>
was created with participation by Kin Lane.

## Other APIs #

https://shkspr.mobi/blog/2014/04/wanted-simple-apis-without-authentication/
lists several.

* Ford
* GM
* Citrix


## Mashups #

A mashup app combines data from several Web APIs in its presentation.





## More on API Microservices #

This is one of a series:

{% include api_links.html %}
