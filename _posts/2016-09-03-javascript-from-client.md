---
layout: post
title: "JavaScript from clients"
excerpt: "Call REST APIs from static client browsers"
tags: [Clouds, JavaScript]
date: "2016-09-03"
file: "javascript-from-client"
image:
# yellow flow gif 1,600px × 700px (scaled to 888px × 389px)
  feature: https://raw.githubusercontent.com/loverajoel/jstips/gh-pages/resources/jstips-header-blog.gif
  credit: LoverJoal's JS Tips
  creditlink: https://github.com/loverajoel/jstips
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on narrated tour on how to code JavaScript in client static sites to reach REST APIs in the cloud.

{% include _intro.html %}

<hr />

## jQuery or Not? #

This is the question because different coding is needed.

We start with plain XHR (XMLHttpRequest) as described in
<a target="_blank" href="https://www.codecademy.com/courses/javascript-beginner-en-EID4t/0/1?curriculum_id=5122e6f8b2cb8a8e97000a01">
this tutorial by CodeAcademy</a>

   <pre>
createRequest(); // var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();
&nbsp;
console.log(xhr.status);
console.log(xhr.statusText);
   </pre>

Despite the XML in its name, 
neither the request nor the response has to involve XML.

http://rest.elkstein.org/2008/02/using-rest-in-javascript.html


### CreateRequest #

This function is a cross-browser solution that covers both MSIE and others:

   <pre>
function createRequest() {
  var result = null;
  if (window.XMLHttpRequest) {
    // FireFox, Safari, etc.
    xhr = new XMLHttpRequest();
    if (typeof xmlhttp.overrideMimeType != 'undefined') {
      xhr.overrideMimeType('text/xml'); // Or anything else
    }
  }
  else if (window.ActiveXObject) {
    // MSIE
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  } 
  else {
    // No known mechanism -- consider aborting the application
  }
  return result;
}
   </pre>


### Define Callback #

XMLHttpRequest objects do not immediately return a value. Rather, you have to supply a callback function that will be invoked when the request completes. 

A callback is invoked several times (up to four times, depending on the browser), 
during different stages of the client/server interaction. 
Only the fourth and final stage that interests us; 
the readyState field can be used to test for the stage:

   <pre>
var req = createRequest(); // defined above
// Create the callback:
req.onreadystatechange = function() {
  if (req.readyState != 4) return; // Not there yet
  if (req.status != 200) {
    // Handle request failure here...
    return;
  }
  // Request successful, read the response
  var resp = req.responseText;
  // ... and use it as needed by your app.
}
   </pre>

Note that if the response is an XML response (denoted by the server using MIME type text/xml), it can also be read using the responseXML property. This property contains an XML document, and can be used as such using JavaScript's DOM navigation facilities.



### Send Request #

Now that the request object and its callback function has been setup, send the request.

For GET requests:

   <pre>
req.open("GET", url, true);
req.send();
   </pre>

For POST requests:

   <pre>
req.open("POST", url, true);
req.setRequestHeader("Content-Type",
                     "application/x-www-form-urlencoded");
req.send(form-encoded request body);
   </pre>


<a name="JQueryWay"></a>

## jQuery way #

<a target="_blank" href="https://spring.io/guides/gs/consuming-rest-jquery/">
This blog</a> makes a call to an active service endpoint which does not require authentication:

https://spring.io/guides/gs/consuming-rest-jquery/

which returns this when called without any parameters:

{"id":1,"content":"Hello, World!"}

The jQuery call:

   <pre>
jQuery.get( "http://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/", function( response ) { 
    // response contains site information
} );
   </pre>

## Authentication #

<pre>  
jQuery.ajax( {
    url: 'https://public-api.wordpress.com/rest/v1/sites/' + site_id + '/posts/new',
    type: 'POST',
    data: { content: 'testing test' },
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( "Authorization", "BEARER " + access_token );
    },
    success: function( response ) {
        // response
    }
} );
</pre>

## More on cloud #

This is one of a series on cloud computing:

{% include cloud_links.html %}
