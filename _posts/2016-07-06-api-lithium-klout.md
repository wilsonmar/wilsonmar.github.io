---
layout: post
title: "Lithium Klout API"
excerpt: "Social management"
tags: [website, builder, simplicity, jekyll]
date: "2016-07-06"
file: "api-lithium-klout"
image:
# pic white salt flats lithium 1900x500-c76
  feature: https://cloud.githubusercontent.com/assets/300046/16651063/d5f8af66-43fe-11e6-8805-5c43442cd3c5.jpg
  credit: New York Times
  creditlink: http://www.nytimes.com/2015/06/28/magazine/i-dont-believe-in-god-but-i-believe-in-lithium.html
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This contains my notes on examining the API and SDK to
Lithium Technologies (@lithiumtech).

BTW, the photo above is the Salar de Uyuni salt flats in Bolivia where 50% of the world's lithium is mined.
Lithium was first identified in petalite ore on the Swedish island Utö in 1817. 
A year later, lithium powder are used to make red flames in fireworks. 
Fiery and unstable, lithium somehow calms emotional states often characterized in the same way.

But here we're talking about Lithium Technologies, which
<a target="_blank" href="http://www.zdnet.com/article/and-the-winners-of-the-2016-crm-watchlist-are/">
one author in 2016 named</a> 
the most "impactful" CRM (Customer Relationship Manager) software.

Futurist Jacob Morgan visits Lithum's co-founder Kirk Yokomizo's San Francisco office:
   <amp-youtube data-videoid="_j9VazWUEH8" layout="responsive" width="480" height="270"></amp-youtube>
 
<a target="_blank" href="https://www.salesforce.com/form/service-cloud/2016-gartner-magic-quadrant-crm-customer-engagement-center.jsp">
Gartner placed Lithium in the middle of the CRM pack</a> beneath Salesforce and Pegasystems's rule-based system:
   <amp-img width="650" height="650" alt="crm gartner magicquadrant 2014-488x536-c69.jpg"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16656597/86c33b28-441c-11e6-8a26-fd36ab72d073.jpg">
   </amp-img><br /><br />

Compare <a target="_blank" href="https://www.salesforce.com/blog/2014/06/gartner-magic-quadrant.html">
against Gartner's 2014 ranking</a>:
   <amp-img width="488" height="536" alt="crm gartner magicquadrant 2016 650x650-c78.jpg"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16652067/2f8e138a-4405-11e6-84c9-118af7e05300.jpg">
   </amp-img>

In its 2016 CRM report, Gartner says:

"The Lithium Platform is a social engagement service product, rather than a formal CRM agent desktop with case management at the core. 
It does not show up on shortlists for traditional customer service agent desktops. 
Instead, it supports customer engagement on social channels, as well as in its online customer communities. 
Businesses focused on customer engagement through communities will be interested in this approach."

Optimizing engagement on social platforms is a key aspect of reaching Millinials.
So mastering APIs is key to recognition, trust, and success.

Lithium is not the system for maintaining the customer master record, 
so its API capabilities are crucial.


## Architecture diagram #

Click for full-screen larger image from <a target="_blank" href="http://sdk-docs.lithium.com/learn/architecture">
   http://sdk-docs.lithium.com/learn/architecture</a>:
   <a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/16651681/cf5cb77a-4402-11e6-8512-b628fea39826.png">
   <img width="650" height="403" alt="lithiumcommunitytechstackga-650x403-c78.jpg"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16651542/d352161e-4401-11e6-800a-c4e684ad28fb.jpg">
   </a>

BTW, Lithium does not offer a complete self-service solution that covers email, chat, customer portals, knowledge management, co-browsing, video agents, and virtual customer assistants. 

Lithium as a company lists these products:

   * Lithium Communities
   * Lithium Response
   * Lithium Reach
   * <a href="#Klout">Klout</a>

Since 2014 Lithinum added Value Analytics and 
Lithium Cohort Benchmarking (much like what Google Analytics offers) 
for its customers to gain insight into the value of its community.

This could take the form of key performance indicators (KPIs) about members' contributions and their satisfaction, or information about the community's role in deflecting calls away from the support center. 

But Lithium's value proposition is promotion of corporate brands
through social media.


## Developer portals #

Lithium has two portals for developers:

   * <a target="_blank" href="http://developers.lithium.com/">
	http://developers.lithium.com</a>

   * [https://klout.com/s/developers/home](https://klout.com/s/developers/home)
    which employs the Mashery platform.
    Its Rate Limits are 10 Calls per second and 20,000  Calls per day.

Direct links:

   * [Developer Documentation Portal](http://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=docportalhome)

   * [Developer Knowledge Base](http://community.lithium.com/t5/Developers-Knowledge-Base/tkb-p/studio%40tkb)

   * [Developer Discussion forum](http://community.lithium.com/t5/Developers-Discussion/bd-p/studio)

   * [Developer Network](http://community.lithium.com/t5/Developer-Network/ct-p/Developer)

Lithium has a Developer certification scheme




## Getting Started with SDK #

<a target="_blank" href="http://sdk-docs.lithium.com/develop/getStarted">
http://sdk-docs.lithium.com/develop/getStarted</a>
describes use of Gulp task runner:

   <tt><strong>
   npm install gulp -g<br />
   npm install lithium-sdk -g
   </strong></tt>

   WARNING: The response (run 7 July 2016) contained several dependencies that have been deprecated:

   <pre>
gulp-clean@0.3.1: use gulp-rimraf instead
gulp-foreach@0.0.1: Either use gulp-tap or gulp-flatmap, depending on your needs
minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
lodash@1.0.2: lodash@<3.0.0 is no longer maintained. Upgrade to lodash@^4.0.0.
minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
graceful-fs@2.0.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
graceful-fs@3.0.8: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
minimatch@1.0.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
minimatch@0.4.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
cross-spawn-async@1.0.1: cross-spawn no longer requires a build toolchain, use it instead!
   </pre>

   The rest of the install console output:

   <pre>
/Users/mac/.npm-packages/bin/li -> /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/bin/li.js
> fsevents@1.0.12 install /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/karma/node_modules/fsevents
> node-pre-gyp install --fallback-to-build
&nbsp;
  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node
  COPY /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/karma/node_modules/fsevents/lib/binding/Release/node-v48-darwin-x64/fse.node
  TOUCH Release/obj.target/action_after_build.stamp
&nbsp;
> fsevents@1.0.12 install /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/gulp-watch/node_modules/fsevents
> node-pre-gyp install --fallback-to-build
&nbsp;
  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node
  COPY /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/gulp-watch/node_modules/fsevents/lib/binding/Release/node-v48-darwin-x64/fse.node
  TOUCH Release/obj.target/action_after_build.stamp
&nbsp;
> fsevents@0.3.8 install /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/fsevents
> node-gyp rebuild
&nbsp;
  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node
&nbsp;
> execSync@1.0.2 install /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/execSync
> node install.js
&nbsp;
[execsync v1.0.2] Attempting to compile native extensions.
[execSync v1.0.2]
    Native code compile failed!!
&nbsp;
> ws@0.4.32 install /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/karma/node_modules/ws
> (node-gyp rebuild 2> builderror.log) || (exit 0)
&nbsp;
  CXX(target) Release/obj.target/bufferutil/src/bufferutil.o
&nbsp;
> node-sass@3.8.0 install /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/node-sass
> node scripts/install.js
&nbsp;
Binary downloaded and installed at /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/node-sass/vendor/darwin-x64-48/binding.node
&nbsp;
> phantomjs@1.9.20 install /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/phantomjs
> node install.js
&nbsp;
PhantomJS not found on PATH
Downloading https://github.com/Medium/phantomjs/releases/download/v1.9.19/phantomjs-1.9.8-macosx.zip
Saving to /var/folders/j_/gh27gpxj1t58hyryfg9drvdc0000gn/T/phantomjs/phantomjs-1.9.8-macosx.zip
Receiving...
  [=======================================-] 98%
Received 9187K total.
Extracting zip contents
Removing /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/phantomjs/lib/phantom
Copying extracted folder /var/folders/j_/gh27gpxj1t58hyryfg9drvdc0000gn/T/phantomjs/phantomjs-1.9.8-macosx.zip-extract-1467880778156/phantomjs-1.9.8-macosx -> /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/phantomjs/lib/phantom
Writing location.js file
Done. Phantomjs binary available at /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/phantomjs/lib/phantom/bin/phantomjs
&nbsp;
> spawn-sync@1.0.15 postinstall /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/spawn-sync
> node postinstall
&nbsp;
&nbsp;
> node-sass@3.8.0 postinstall /Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/node-sass
> node scripts/build.js
&nbsp;
"/Users/mac/.npm-packages/lib/node_modules/lithium-sdk/node_modules/node-sass/vendor/darwin-x64-48/binding.node" exists. 
 testing binary.
Binary is fine; exiting.
   </pre>

Notice Lithum makes use of <a target="_blank" href="https://nodejs.org/en/docs/">Node.js</a>

## SDK version #

0. To verify version:

   <tt><strong>
   npm ls -g lithium-sdk --depth=0
   </strong></tt>

   The response:

   <pre>
   /Users/mac/.npm-packages/lib
   └── lithium-sdk@1.2.1 
   </pre>

0. To uninstall:

   <tt><strong>
   npm remove lithium-sdk -g
   </strong></tt>

0. See <a target="_blank" href="http://sdk-docs.lithium.com/learn/overview">
   Lithium Community platform SDK at http://sdk-docs.lithium.com/learn/overview</a>


## Command li #

<a target="_blank" href="http://www.zazzle.com/chemistry_elements_of_periodic_table_round_clock-256786128725912169">
<img align="right" width="171" height="171" alt="lithium periodic elements clock-322x322-c45.jpg" src="https://cloud.githubusercontent.com/assets/300046/16662415/d1503c50-4434-11e6-9d53-0f176741ad3d.jpg"/>
</a>

You should now be able to use the "li" command:

   <tt><strong>
   li
   </strong></tt>

   NOTE: The element lithium is the Alkali metal "Li", which has 3 protons on the clock and
   shown on the left side of the Periodic Chart of elements.

   See http://sdk-docs.lithium.com/develop/tutorial about:

   * create-project
   * update-project (new version of SDK)

   * create-server-conf 
   * create-skin
   * serve-sass 
   * set-responsive-options

   * export-plugin
   * package-plugin  runs client-side validation on the plugin, but does not upload the plugin to the stage server
   * clear-plugin  
   * clear-studio-plugin
   * export-studio-plugin 
   * submit-plugin --dryrun runs client and server-side validation on the plugin, uploads the plugin to the stage server, but does not save it to the stage server

   Additional docs:

   * http://sdk-docs.lithium.com/refer/pluginvalidation
   * http://sdk-docs.lithium.com/refer/skinproperties
   * http://sdk-docs.lithium.com/refer/troubleshoot

## Installed lithium-sdk node_module folders #

0. On a Mac:

   <tt><strong>
   cd ~/.npm-packages/lib/node_modules/lithium-sdk/<br />
   brew install tree
   </strong></tt>

0. List folders:

   <tt><strong>
   find . -maxdepth 1 -type d
   </strong></tt>

   The response:

   <pre>
./bin
./gulp
./lib
./node_modules
./templates
./test
./testpam2
./testpam21
   </pre>

## CI/CD #

The README.md file contains links to build servers on the web:

* travis-url: https://travis-ci.org/lithiumtech/lithium-sdk
* travis-image: https://travis-ci.org/lithiumtech/lithium-sdk.svg?branch=master
* travis-dev-url: https://travis-ci.org/lithiumtech/lithium-sdk/branches
* travis-dev-image: https://travis-ci.org/lithiumtech/lithium-sdk.svg?branch=develop

* https://github.com/lithiumtech/lithium-oss-superpom/blob/master/pom.xml
  Maven

* https://github.com/lithiumtech/terraform


## GitHub #

<a target="_blank" href="https://github.com/lithiumtech">
   https://github.com/lithiumtech</a>

* https://github.com/lithiumtech/linc-sdk-demo


## Community REST API #

* [Lithium SDK documentation](https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=sdk)

* [Lithium Community API v1](http://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv1)

* [Lithium Community API v2](http://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv2)

* <a target="_blank" href="https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv2#browser">
Getting started with Community API v2</a>


## Lithium Social Web (LSW) API #

* [Lithium Social Web (LSW) APIs](http://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=lsw)



## OAuth2 #

https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=oauth2
OAuth 2.0 authorization grant flow

http://oauth.net/documentation/

Making API calls over HTTP makes use of Lithium's API Proxy and OAuth. 

OAuth requires that each client application making calls to the API will need to be registered.  
Lithium Support will help you register your client applications and provide you with the credentials needed to obtain Authorization grant flow tokens. OAuth 2.0 authentication grant flow describes the new API proxy and authentication service, as well as the authorization APIs.

PROTIP: Before making any call using HTTP POST, PUT, or DELETE, call the /allowed endpoint (described in the next section) to ensure that the current user is allowed to perform the action.



## API v2 Data #

https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv2&v2.main=collections
Community API 2.0 Collections reference documentation 
provides details for every v2 resource, including field definitions, examples, and CRUD support.

   * Resource - an object, generally a single instance from a resource collection, such as Message, Kudo, or Image

   * Collection- a group of similar resources(objects), such as Messages, Kudos, or Images. Retrieve collections via LiQL queries

   * Conversation style - we are using conversation style in place of the terms interaction style and discussion style (which were used inconsistently in API v1)

Code can contain both v1 and v2 calls together.
V1 code is used for collections that do not support CREATE, UPDATE, and DELETE operations.


https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv2&v2.main=theresponse
API v2 response, 

https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv2&v2.main=applicationerrorcodes
error message 

https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv2&v2.main=errorresponses
application error definitions, 





## FreeMarker templating #

Lithium makes use of the Java 1.5+ template engine from
<a target="_blank" href="http://freemarker.org/">
FreeMarker.org</a> to generate text output 
(HTML web pages, e-mails, configuration files, source code, etc.) 
based on templates.

   <amp-img width="435" height="180" alt="fig freemarker 435x180-c66.png"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16651901/29f98766-4404-11e6-8338-0774a61531f1.png">
   </amp-img><br /><br />

When FreeMarker is run, variables in the template
 written in the <strong>FreeMarker Template Language (FTL)</strong>
 such as this:

   {% highlight html%}
   <body>
   <h2>Welcome ${user}<#if user == "Big Joe">, our beloved leader</#if>!</h2>
    <p>Our latest product:
   <a href="${latestProduct.url}">${latestProduct.name}</a>!
   <#list misc.fruits>
     <p>Fruits:
     <ul>
       <#items as fruit>
         <li>${fruit}<#sep> and</#sep>
       </#items>
     </ul>
   <#else>
     <p>We have no fruits.
   </#list>
   <#include "/copyright_footer.html">
   </body>
   {% endhighlight %}

are replace with data values from java objects,
as illustraded by this <strong>data model</strong> hierarchy:

   {% highlight html%}
(root)
  |
  +- user = "Big Joe"
  |
  +- latestProduct
      |
      +- url = "products/greenmouse.html"
      |
      +- name = "green mouse"
   {% endhighlight %}

The on-line evaluation website at 
<a target="_blank" href="http://freemarker-online.kenshoo.com/">
http://freemarker-online.kenshoo.com</a> 
has example data such as this list of various data formats:

   <pre>
someString = Some value
otherString = "JSON\nsyntax"
someNumber = 3.14
someBoolean = true
someDate = 2014-02-28
someTime = 20:50:30.5+02:00
someDatetime = 2014-02-28T18:50Z
someList = ["JSON", "syntax", 1, 2, 3 ]
someMap = { "JSON syntax": true, "nestedList": [1, 2, 3] }
someXML = &LT;example x="1">text</example>
   </pre>

   Notice the if/then/end if conditional logic
   and hiearchical data specification.

See
<a target="_blank" href="https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=freemarker#l%3A%3A%7B%22p%22%3A%22%2Flearn%2FaboutFreeMarker%22%7D">
About Freemarker</a>

BTW, <a target="_blank" href="http://stackoverflow.com/questions/4137981/freemarker-vs-velocity">
alternatives to FreeMarker</a> are:

   * http://www.stringtemplate.org/
   * http://velocity.apache.org/tools/2.0/

### Freemarker setup #

0. Download Freemarker from http://freemarker.org/freemarkerdownload.html

0. Extract <strong>apache-freemarker-2.3.25-incubating-bin.tar.gz</strong> to a folder.

0. The documentation folder contains what is presented on 
   <a target="_blank" href="http://freemarker.org/">
   FreeMarker.org</a> 

   freemarker.jar

   Download from <a target="_blank" href="http://fmpp.sourceforge.net/">
   fmpp.sourceforge</a> the FreeMarker-based file PreProcessor
   general-purpose text file preprocessing tool that uses FreeMarker templates

   http://stackoverflow.com/search?q=freemarker

0. Create a configuration for each app instance
0. Create a data-model
0. Get the template
0. Merging the template with the data-model
0. Putting all together

### Freemarker setup Lithium #

Use API v2 in FreeMarker code using 
[Lithium FreeMarker context objects](https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=freemarker)

0. Store the API version in a
<a target="_blank" href="http://freemarker.org/docs/dgui_misc_var.html">
FreeMarker variable</a>

0. Retrieve resources via the rest and restadmin FreeMarker calls.

   NOTE: With v2, pass the rest_version parameter.

   Example using 
   <a target="_blank" href="https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=freemarker#l%3A%3A%7B%22p%22%3A%22%2Frefer%2FcontextObjects%22%2C%22h%22%3A%22%23rest%22%7D">
   rest</a>

   <tt><strong>
   rest("rest_version","/search?q=" + "liql_query"?url)
   </strong></tt>

   Example using 
   <a target="_blank" href="https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=freemarker#l%3A%3A%7B%22p%22%3A%22%2Frefer%2FcontextObjects%22%2C%22h%22%3A%22%23restadmin%22%7D">
   restadmin</a>

   <tt><strong>
   restadmin("rest_version","/search?q=" + "liql_query"?url)
   </strong></tt>


## SASS SCSS CSS #

[Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

http://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=responsive
Responsive skin architecture use SCSS styles.


## Studio #

In <a target="_blank" href="https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv2#apiBrowser">
Make your first LiQL query</a>
the API Browser tab in Studio to test LiQL queries.

This tool quickly shows you what will be returned from a query without making a formal HTTPS request. It uses your Studio login for authentication and policy checks, so the roles and permissions assigned to your user account will affect the search results. Similarly, you might see differing results in the API Browser than with HTTP-based calls made in the community, depending on the community user account in context. To navigate to the API Browser, log into the community and go to Studio > API Browser.

0. A community that includes boards, messages, and users

0. Be granted the Use REST API browser permission



## LiQL the Lithium Query Language #

LiQL is an open sourced query language inspired by SQL, and is the most flexible API in the industry for community development on both desktop and mobile platforms. 

* <a target="_blank" href="https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv2&v2.main=usingliql">
	Using LiQL</a>

With LiQL, you can query the community with a single STATEMENT from any node level. 
No more determining what calls are available for what resource type. 
No need for secondary code, no need to make a second call to sort the messages by date/time.


* <a target="_blank" href="https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv2&v2.main=liqlexamples">
   LiQL examples</a>

Query the number of unanswered posts (topic messages with no replies):

   select count(*) from messages where replies.count(*)=0 and depth=0

   If you have unanswered posts, you'll see a JSON response similar to this:

   <pre>
{
         "status" : "success",
         "message" : "",
         "http_code" : 200,
         "data" : {
               "count" : 19
         },
         "metadata" : { }
 }
   </pre>

Return forum posts that have an average rating value of 4 or higher.
 
   <pre><strong>
   SELECT * FROM messages 
   WHERE ratings.avg(value)>=4 
   AND conversation.style='forum'
   </strong></pre>

Return the subject, ID, and conversation data for forum topics with accepted solutions.
 
   <pre><strong>
   SELECT subject, id, conversation 
   FROM messages 
   WHERE conversation.style= 'forum' 
   AND depth=0 AND conversation.solved='true'
   </strong></pre>

Return recipe_board for a specific author:

   <pre><strong>
   SELECT id
   FROM messages WHERE category.name = ‘recipe_board’ 
   AND author.id = '3' AND depth = 0 
   ORDER BY post_time DESC LIMIT 4
   </strong></pre>


<a name="BulkData"></a>

## Community Bulk Data API # 

Also called Lithium Social Intelligence (LSI).

QUESTION: What is CIC?

The curl commands shown in its API docs at
http://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=bulkdata
can be called from programs issuing REST API calls.

The calls respond with JSON or as a flat CSV files (for Excel spreadsheets).

The product automates bulk data extraction from LSI to a brand’s data store, 
enabling brands to mine Lithium data at a granular level or 
join Lithium data with their own to derive new business insights.


## People #

Commiters on Lithium's public GitHub:

* Abhinand Menon (abhinandmenon), https://www.linkedin.com/in/abhinand/en
* Andrew Dorsett (awdorsett)
* Brian Harrington (bdharrington7) https://bdharrington.com/
* doug.schroeder

There are also many consultants working on Lithum's public interface:



<a name="Klout"></a>

## Klout API #

[Various social media metrics (competitors to Klout)](/social-media-for-evangelism/)
all calculate an “influence” score
based on social media activities such as likes, re-tweets, mentions, replies, shares, comments, etc..
But Klout calls it calls theirs an "engagement" score.

It's difficult to track a conversion to actual trial, purchase, change of opinion, etc.

<a target="_blank" href="http://innetwork.net/2013/02/klout-alexa-other-social-scoring/">
One blogger</a> recommends that a separate score for Twitter, Facebook, and LinkedIn.


