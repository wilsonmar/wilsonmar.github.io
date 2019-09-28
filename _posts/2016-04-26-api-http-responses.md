---
layout: post
title: "API HTTP Responses"
excerpt: "Here's what I think of your request"
tags: [API, JavaScript, programming]
date: "2016-04-26"
file: "api-http-responses"
image:
# feature: pic bw easter island moai 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/15213184/cbe4bf88-1802-11e6-8f07-5b06236ac771.jpg
  credit: Cole Thompson
  creditlink: http://www.colethompsonphotography.com/MoaiStandingImages.htm
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Response code & Location in HTTP header

2XX - valid:

      * 200 - valid
      * 202 - PUT successful

3XX - redirects

      * 302 Redirect
      * 304 Not modified

4XX - error

      * 403 is the AWS response for not authorized
      * 404	Not Found
      * 406	The request you made is not acceptable
      * 410 Gone (deprecated)

5XX - server errors

      * 500	Requested Range Not Satisfiable


### Deprecated 410 Gone response

Submitting this:

    http://ws.spotify.com/search/1/album?q=fo

yields this with a 410 Gone HTTP response code:

    This API has been deprecated. Please upgrade to our new APIs: https://developer.spotify.com/web-api/migration-guide/


## Format of response file type

Currently, three output formats are available:

* XML (such as https://www.usa.gov/api/USAGovAPI/contacts.xml/contacts)
   is now considered old-school because

* JSON (such as https://www.usa.gov/api/USAGovAPI/contacts.json/contacts)

* JSONP (such as https://www.usa.gov/api/USAGovAPI/contacts.jsonp/contacts?callback=callmemaybe). When requesting JSONP, you should include a callback parameter with the name of the callback function you would like called.

* YML

* CSV for import into Excel and other spreadsheets

* Google Sheet referenced by data processors



## More on API Microservices #

This is one of a series:

{% include api_links.html %}
