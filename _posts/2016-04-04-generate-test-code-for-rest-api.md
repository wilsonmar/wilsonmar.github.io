---
layout: post
title: "Generate REST API Test Code"
excerpt: "No waiting for test automation"
tags: [text to speech, JavaScript, programming]
date: "2016-04-04"
file: "generate-test-code-for-rest-api"
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

I have a dream ...

where developers get their
<a href="#TestScripts">test scripts</a>
not by waiting for manual coding, but by

<img width="499" alt="fig test code gen v01 998x568.pptx"
src="https://cloud.githubusercontent.com/assets/300046/14821509/3ad4145c-0b88-11e6-9b41-519bd920d488.png">

0. <a href="#TestCodeGener">test code generation programs</a> referencing

0. a <a href="#SpecDB">specification database</a>

0. also used to create <a href="#ClientApps">client applications</a>
   making calls to servers.

0. All this done by a <a href="#Toolchain">toolchain</a>
   of Continuous Integration/Continous Deployment.

0. The specifications can be specified manually or
   generated from programs which scan programming code
   to extract specifications.

0. Variations in the generated code
   are defined in a <a href="#GenControlFile">control file</a>.

0. This control file can be edited manually using a text editor
   and manually referencing the specifications,

0. adjusting for issues observed by the generator.

0. Results from test generator run include timings of transactions
   and size of resources processed on the client
   and

0. metrics from monitoring of servers.

0. Analysis of these results are made in light of the
   original specifications.

0. Insights from human or artificial intelligence
   doing the analysis
   would influence
   what testing code to generate in subsequent rounds.

## What took us so long?

I think that when software vendors focus on tools for testers,
they may miss or dismiss the idea of eliminating them.

The automation discusseed here has the objective of "testers"
being developers themselves -- developers of test code generation programs.

The audience for this page are developers who want to move faster.

<a name="ClientApps"></a>

## Client applications

Let's for now focus on examples of clients making REST API calls.

* Yahoo Weather

* Google Weather

* Twitter
  http://www.ibm.com/developerworks/library/x-twitterREST/index.html

* https://developer.salesforce.com/page/REST_API

Tutorials on APIs include:

* http://www.restapitutorial.com/

   <amp-youtube data-videoid="7YcW25PHnAA"
   layout="responsive" width="480" height="270">
   </amp-youtube>


<a name="SpecDB"></a>

## Specification databases

Several databases for APIs have grown up over the years:

Specifications for REST API (such as Swagger)
   are more amenable as the basis for generating code
   if they are <strong>complete</strong> specifications of how
   client computers interact with servers.

   Specifications about screen elements may be too complex
   or don't provide enough information for use in code generation
   at this point in time.


|   | Swagger | <a href="#RAML">RAML</a> | API-Blueprint |
| --- | --- | --- | --- |
| Format:  | JSON | YAML | Markdown |
| Sponsor: | <a href="#Who">Reverb</a> | <a target="_blank" href="http://mulesoft.com/">Mulesoft</a> | Apiary |
| Initial: | July, 2011 | Sep, 2013 | April, 2013 |
| Approach: | Bottom-up | Top-down | Top-down |

Other alternatives include:

  * <a target="_blank" href="http://github.com/mashery/iodocs"> IO-Docs</a> from <a target="_blank" href="http://mashery.com/product/io-docs">Mashery</a> (licensed).

  * <a target="_blank" href="http://jsondoc.org/">JASONDoc</a> has a
  <a target="_blank" href="https://github.com/jdorn/json-editor">Editor</a> that reads a JSON Schema
  and generates an HTML form to manipulate it.

  * <a target="_blank" href="http://Apiary.io">Apiary.io</a> (licensed)

  * <a href="#WADL">WADL</a>

  * <a target="_blank" href="http://www.w3.org/TR/wsdl/">WSDL</a>
    SOAP

  * <a target="_blank" href="http://en.wikipedia.org/wiki/Web_Application_Description_Language">WADL (Web Application Description Language) generated to describe SOAP are not viable for REST API because they do not include enough information.

  * DOORS requirements

<a id="RAML"></a>

### RAML

RAML (at <a target="_blank" href="http://raml.org/"> RAML.org</a>)
can reuse WADL (pronounced "waddle")
introspection logic of
<a target="_blank" href="http://restlet.com/">
Restlet Framework resources</a>
developed by Java (SE/EE, Google AppEngine, OSGi, GWT, Android)
REST API developers using the
Restlet Studio and the
APISpark cloud managed by
Reslet based in France with an office in Palo Alto.

Reslet (in Oct. 2015) bought Czech Filip Kolařík's
<a target="_blank" href="https://chrome.google.com/webstore/detail/dhc-resthttp-api-client/aejoelaoggembcahagimdiliamlcdmfm">
DHC (Dev HTTP Client) Chrome Add-in</a>
and https://www.sprintapi.com/dhcs.html
to test and debug web APIs

Swagger2RAML converts Swagger JSON to RAML YAML.


   <amp-youtube data-videoid="vu8_QLkW1mg"
   layout="responsive" width="480" height="270">
   </amp-youtube>

API Description Languages: Which One Is Right For Me?
Aug. 15, 2014 by Laura dot Heritage at
soa.com (Akana, formerly SOA Software).

<a name="WADL-example"></a>

### WADL Example

Let's use the sample
<a target="_blank" href="/assets/yahoo-news-call.wadl.xml">
yahoo-news-call.wadl.xml</a> file from the
Wikipedia page defining one.
Open the file using an XML reader app.

0. The service endpoint is specified by:

   <pre><code>
   &LT;resources base="http://api.search.yahoo.com/NewsSearchService/V1/">
   </code></pre>

<a name="TestScripts"></a>

## Test code

There are several languages used by test script processors:

   * XML for JMeter
   * <a href="#JavaSeleniumSample">Java for Selenium</a>
   * C for LoadRunner
   * <a href="#LRJS">JavaScript for LoadRunner</a>
   * VB for HP QTP
   * SOAPUI
   * many others

<a name="LRJS"></a>

### JavaScript LoadRunner Example

An example of the JavaScript code generated to
emulate a client retrieving an index.html file:

{% highlight html %}
  web.url(
    {
      name : 'index.html',
      url : '{pEndPoint}',
      resource : 0,
      recContentType : 'text/html',
      referer : '',
      snapshot : 't1.inf',
      mode : 'HTML'
    }
  );
{% endhighlight %}

"{pEndPoint}" is the run parameter containing an End Point such as:

    http://api.search.yahoo.com/NewsSearchService/V1/

The "mode: HTML" specifies processing by LoadRunner to
scan the html returned and issue requests for
links to CSS, JavaScript, images, etc.

(Images specified within CSS are not retrieved this way)

<a name="JavaSeleniumSample"></a>

### Java Selenium Example

TODO:

<a name="GenControlFile"></a>

## Generator Control File

We use the <strong>yml format</strong> that can be read by humans and computers. Ruby programmers are used to such files.

Since Swagger users may prefer JSON formatting:

0. Input <a href="#SpecDB"> Specification database</a>

0. Output <a href="#TestScripts"> Test code language</a>

0. Authentication (OAuth2, JWT, BasicAuth)

0. Call Method (GET, PUT, POST, UPDATE, etc.).

0. Authorization (such as tokens in the HTTP header).

0. Response code (if not standard 200).

0. Repetitions.

0. Negative tests (to force 400 to return).

0. Data errors (bad attribute names, bad attribute value).

<a name="Toolchain"></a>

## CI/CD Toolchain


<a name="TestCodeGener"></a>

## Test code generation programs

I have examples of code generation programs written in
Python, PHP, Java, Scala, and even VBScript in Excel files.


## More on API Microservices #

This is one of a series:

{% include api_links.html %}
