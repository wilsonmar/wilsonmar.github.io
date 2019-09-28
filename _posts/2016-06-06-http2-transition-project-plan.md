---
layout: post
title: "HTTP/2 Transition Project Plan"
excerpt: "for Project Management to make adoption real"
tags: [HTTP2, project]
date: "2016-06-06"
file: "http2-transition-project-plan"
image:
# feature: pic data center slice 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622043/8b1f9cce-0584-11e6-8b9f-4b6db5bb6e37.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


There are many blogs and YouTube videos about the technical details and configuration changes associated with HTTP/2. But I haven’t seen much in the way of the
<strong>implications</strong> to project managers and other management personnel
who need to make real the transition.
So I rearranged the various technical facts here,
with PROTIPs identifying suggestions.

## Googling #

PROTIP: An inclusive Google search would involve several keywords.

Try this search phrase:

   <pre>
   http/2 or h2 or http2 or http_2 or rfc7540
   </pre>

   Alternatives to the special character slash is needed with
   the <a target="_blank" href="https://twitter.com/http_2">
   @HTTP_2</a> Twitter handle used by
   <a target="_blank" href="http://http2.github.io">
   http://http2.github.io</a>, the home page for HTTP/2
   maintained by the <a target="_blank" href="https://httpwg.github.io/">
   IETF HTTP Working Group</a>.

   rfc7540 is the industry specification, at
   <a target="_blank" href="http://httpwg.org/specs/rfc7540.html">
   http://httpwg.org/specs/rfc7540.html</a>
   and
   <a target="_blank" href="https://tools.ietf.org/html/rfc7540">
   http://tools.ietf.org/html/rfc7540</a>.

   "h2" is the value of the response in the HTTP header:

   `ALPN protocol: h2`

## Web Scanners #

ALPN, or Application-Layer Protocol Negotiation,
is a TLS extension that includes the protocol negotiation within the exchange of hello messages.
See https://tools.ietf.org/html/rfc7301

TODO: Confirm whether h2 ALPN is actually activated on in the web server under test.

Some organizations use web protocol scanners as an aspect of quality.

The W3C scanner identifies issues such as "https" being specified instead of "http"
and the inclusion of a slash at the end of URLs to avoid a redirect.

ALPN negotiates which protocol should be handled over a secure connection in a way that is more efficient and avoids additional round trips.
So with h2, `HTTP://` can be specified and the connection will still be encrypted as if you entered `https://`.

Will the W3C scanner recognize this change?
If you need to explain what W3C finds,
you would need to add this to your notes about the discrepancy.


## Adoption Statistics #

Several websites respond with whether a domain name you input supports h2:

   * <a target="_blank" href="https://spdycheck.org/">
   https://spdycheck.org</a>

   * <a target="_blank" href="https://tools.keycdn.com/http2-test">
   https://tools.keycdn.com/http2-test</a>

Among <a target="_blank" href="https://w3techs.com/technologies/details/ce-http2/all/all"> sites supporting h2:

   * Home pages of organizations that support h2:
google, youtube, facebook, twitter, instagram, wikipedia, yahoo, dropbox, wordpress.

   * Home pages of organizations that do not yet support h2 (as of June 6, 2016):
github.com, github.io, ibm, hp, microsoft, sap, salesforce, spotify, pandora, paypal

   * Linkedin supports SPDY but not h2/ALPN.

   WARNING: Google made support for mobile viewports a factor in their search rankings.
   The same is likely for adoption for h2.

TODO: Even if your corporate marketing home page is not used for transaction processing,
get it up to h2 to improve impact to corporate technical cred.

Although Amazon.com does not support h2, many Amazon domains do support h2
according to
<a target="_blank" href="http://isthewebhttp2yet.com/measurements/adoption.html">
IsTheWebHttp2Yet</a>'s counts (and list) of domains supporting h2.
Those metrics differentiates between "Announced" and "True" support,
even if some embedded objects are still served over HTTP 1.1.

<a target="_blank" href="https://w3techs.com/technologies/details/ce-http2/all/all">
W3Techs.com</a> publishes the percentage of sites supporting h2:
<amp-img width="650" alt="Percentage of all sites using h2" src="https://w3techs.com/diagram/history_technology/ce-http2"></amp-img>

PROTIP: It doesn’t matter whether only
8% or 38% of all websites are supporting h2.
Even though overall support for h2 may be lacking,
IT organizations nevertheless need to begin preparing for its adoption
because customers and vendors and partners are getting onboard.
Ideally, IT organizations get "in front" of people in the organization who need to experiment with that eventuality. Don’t hold them back.

PROTIP: Include in adoption stats not just h2 but SPDY, its predecessor.


## Data center prep. #

TODO: Every component needs to be analyzed for its impact on h2 adoption.

PROTIP: The presence of legacy data center components is often the most vexing block to h2
adoption because of the lead time necessary for changes to occur.

PROTIP: Those who develop programs assuming h2 may need to use a cloud vendor which supports h2
while the corporate data center catches up.

#### Load balancers #

* https://support.f5.com/kb/en-us/products/big-ip_ltm/manuals/product/ltm-implementations-11-6-0/21.html

#### CDNs #

The Cloudflare CDN was an early adopter of HTTP2.

But getting the Akamai CDN to support can be complex:

   * <a target="_blank" href="https://http2.akamai.com/">
    https://http2.akamai.com</a> mentions

   * <a target="_blank" href="https://community.akamai.com/community/web-performance/blog/2015/01/26/enabling-http2-h2-in-akamai">THis blog</a>
   suggests:

   TODO: Check whether H2 is part of your Akamai contract.

   * Akamai Web Experience product (like Ion, Alta, WAA, DSA, and RMA) with HTTPS enabled
   is needed to support HTTP2?


#### Proxies #

Many proxies don’t usually speak full, compliant HTTP1 let alone HTTP2.

This needs to change.

#### Identity management server #

LDAP, OAuth, OpenID, SAML, and Federated identity management SSO

### TLS certificates #

Many websites uses older SSL certificates.

And many older client operating systems (Windows 7)
are using default settings that does not include TLS 1.2.

This may mean an upgrade of clients is necessary.

h2 works on IE only if TLS certificates (not SSL certificates) are used on servers,
since TLS has the more advanced ciphers needed by h2.
An example:

<pre>
echo test | /usr/local/Cellar/openssl/1.0.2e/bin/openssl s_client -connect http2.akamai.com:443 -servername http2.akamai.com -alpn spdy/2,h2,h2-14 -cipher "ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA" | grep ALPN
</pre>

Delivery certificate needs to have Perfect Forward Secrecy (PFS) support enabled in TLS metadata


## Browsers #

The use of "evergreen" browsers is a pre-requisite for h2 adoption.

But most "enterprise" organizations tend to use Microsoft browsers
and lag behind in upgrades of operating systems.

<a target="_blank" href="http://caniuse.com/#feat=http2">
http://caniuse.com/#feat=http2</a>
says Microsoft did not support HTTP2 in IE until IE11 with in Windows 10
(and Server 2016).

   NOTE: Microsoft is said to be developing their own
   "Microsoft Speed + Mobility (Microsoft S+M)" protocol.

PROTIP: To encourage its use, IT organizations need to make the installation
of Chrome browsers a part of the standard process for getting laptops ready for users. This includes making Chrome the default browser.

Apple Safari supports h2 since 10.11 [El Capitan](/apple-mac-osx-setup/).

The Mozilla browser is lagging behind in support of h2:

   <a target="_blank" href="https://wiki.mozilla.org/Networking/http2">
   https://wiki.mozilla.org/Networking/http2</a>

The Chrome browser is the first to support h2 because the company
created SPDY on which h2 is based.
The Android Browser and Chrome for Android supports h2 (at version 50).

There is
<a target="_blank" href="https://chrome.google.com/webstore/detail/http2-and-spdy-indicator/mpbpobfflnpcgagjijhmgnchggcjblin?hl=en">
a Chrome plug-in</a>
that shows an icon to show whether a site is h2.

Put this in the address bar of a Chrome browser to see which tab supports "h2":

   * <a target="_blank" href="chrome://net-internals/#http2">
   chrome://net-internals/#http2"

To identify h2 usage in the Chrome Debugger: ...


## Head of Line Blocking #

Before h2, browsers worked on files one at a time.
The browser made requests one at a time, and waited until for a response to each request.
Load testing scripts are written to measure the delay due to this behavior,
called "head of line blocking".

With h2, the browser sends out several requests simultaneous,
and processes responses in whatever sequence response is received.

Guy Podjarny, CTO of Akamai, explains:
<amp-youtube data-videoid="WkLBrHW4NhQ" layout="responsive" width="480" height="270"></amp-youtube>

PROTIP: Browser emulation (performance testing)
programs need to work the same way as browsers.
But some emulation programs my not really be able to
handle multiple threads at the same time like browsers do.

PROTIP: Try several browser emulation programs to compare results.


## Performance Testing #

PROTIP: A pragmatic approach to adoption is that if the <strong>overall</strong>
performance improves, use it, then tune away.

But that strategy assumes that one has a way to determine what performance is
before and after.

PROTIP: Measure the impact of incremental changes to individual
configuration settings and components. Change one aspect at a time and measure
impact to a baseline.

PROTIP: Upgrade performance testing tools before measuring baselines.
This avoids a risk that different versions of the tool introduce bias.

Most performance testing tools work by emulating browsers.
So whatever technique is used in new browsers need to be programmed into
the tool. And that’s not an easy job. So differences are bound to occur.

Programs that emulate browsers need to add, among other features,
the capability to handle <strong>binary streams</strong>
rather than just text handling in HTTP1.1.
This difference is part of the speed improvement with h2.

* Those who use LoadRunner need the latest version, 12.53 which became available in June, 2016. See <a target="_blank" href="http://community.hpe.com/t5/LoadRunner-and-Performance/How-to-gain-the-best-from-LoadRunner-s-support-of-HTTP-2/ba-p/6863547#.V1Yp7ZMrJZo">this blog</a>.

* Those who use JMeter need the
<a target="_blank" href="https://github.com/syucream/jmeter-http2-plugin">
jmeter-http2-plugin</a> sampler.

* Those who use Gatling ???


## Is this site h2? #

PROTIP: Add in your test scripts a check whether the response is HTTP2.

Among <a target="_blank" href="https://github.com/http2/http2-spec/wiki/Tools">
tools supporting h2</a>:

   * <a target="_blank" href="https://nghttp2.org/documentation/h2load-howto.html">
     h2load (compiled alongside nghttp2 HTTP/2 C language library)</a>
     by Tatsuhiro Tsujikawa
     is a multi-threaded benchmarking tool
     with a
     <a target="_blank" href="https://nghttp2.org/documentation/python-apiref.html">
     Python API binding</a>.

## Server Installs #

A big part of the speed improvement offered by HTTP2 over HTTP1 is
compression of HTTP headers.

Legacy "enterprise" web applications tend to have large headers to
pass cookies back and forth. So just this alone may provide a boost to
performance.

   NOTE: HPACK is from Twitter at
   <a target="_blank" href="https://github.com/twitter/hpack">
   https://github.com/twitter/hpack</a>

   HPACK also resists "compression attacks" to steal cookies.

### Tomcat #

Support for h2 will come with Tomcat 9.

### Apache #

Apache mod_h2 was unofficial support.
This should appear when the server comes up:

   <tt>
   mod_http2 (v1.0.0, nghttp2 1.3.4), initializing...
   </tt>

nghttp2.org

httpd.conf

   * https://icing.github.io/mod_h2/howto.html

   * https://icing.github.io/mod_h2/howto.html#chrome

#### Jetty #

Jetty supports h2.

* <a target="_blank" href="https://www.youtube.com/watch?v=QpLtBftqM04">
  HTTP 2.0 & Java: Current Status</a> at Devoxx Nov 14, 2015
  by Simone Bordet
  from WebTide which supports Jetty web server.



### NGNIX #

* nginx 9 still in beta?



## Programming changes #

Previous hacks to obtain more speed now need to be dismantled
because HTTP2 made them unnecessary.

In fact, previous hacks are now <strong>technical debt</strong> because
they cause HTTP2 to be slower.

* <a target="_blank" href="https://www.youtube.com/watch?v=CSjL1lrNAx4">
HTTP 203: HTTP2 (S3, Ep7)</a>
to me is the most entertaining video on developer’s transition to HTTP2
("This is like Monty Python meets HTTP/2﻿").

* <a target="_blank" href="https://www.youtube.com/watch?v=yURLTwZ3ehk">
Yesterday's perf best-practices are today's HTTP/2 anti-patterns - Velocity 2015 (Santa Clara)</a> on YouTube dives into the issues
Ilya Grigorik (@igrigorik) also has a
<a target="_blank" href="https://docs.google.com/presentation/d/1r7QXGYOLCh4fcUq0jDdDwKJWNqWK1o4xMtYpKZCJYjM/present?slide=id.p19"> slidedeck</a>
and
<a target="_blank" href="http://www.oreilly.com/webops-perf/free/files/HTTP2-high-perf-browser-networking.pdf">
free 29 page book with diagrams</a>
which explains the nitty gritty of h2.


### Sprites #

To reduce the number of files being downloaded,
programmers have been arranging several icons into a single file and
using CSS to present a section of the image file.

This time-consuming hack
is no longer necessary with h2 because h2 uses a single TCP connection
and streams any number of files simultaneously.

<a target="_blank" href="https://www.usenix.org/sites/default/files/conference/protected-files/nsdi14_slides_wang.pdf">
In this PDF</a>
Xiao (Sophia) Wang's team found that most of the performance from SPDY comes from that single TCP connection
multiplexing sliced frames.


### Tiles #

Previously with HTTP1, large files were split into small tiles
for the HTML or CSS code to assemble.

   * <a target="_blank" href="http://http2.golang.org/gophertiles?latency=0">
   See the tiles assemble at http2.golang.org/gophertiles</a>.

   * <a target="_blank" href="https://http2.akamai.com/demo">
   Akamai has a similar demo page at http2.akamai.com/demo</a>

The site is demo’d
<a target="_blank" href="https://www.youtube.com/watch?v=FARQMJndUn0">
this YouTube video</a> and
<a target="_blank" href="https://docs.google.com/presentation/d/1G9gPIAorTsVD_pMgEJcTGEjt5ApZZWyI2uO244_f7TU/present?slide=id.p">
slide deck</a>
by Brad Fitzpatrick.

### Inlining #

NOTE: HTTP/1.1 has a limit of <strong>6 TCP</strong> connections.

To reduce the number of file, some have gotten to put CSS and JavaScript inline within HTML,
especially on the initial landing page.

But h2 browsers open just one TCP connection but multiplexes a large number of connections.

Those who use workflow engine such as Gulp can stop the processing.

### Domain sharding #

However, with h2, domain sharding hurts performance under HTTP2.


### Long polling is cool again #

Since a page doesn't have to waste a connection by holding it open,
connections can be kept open for long-polling.

This also means Web Sockets (which aimed to solve long polling)
may "not be a thing" anymore.


## Configuration Settings #

There are several configuration settings that can be made to obtain the best
response time for visitors.

For example, with h2,
the Nginx server was found to time out due to too many concurrent streams.
The default maximum streams setting needs to be reduced for the system to work under load.

PROTIP: Before doing experiments with configuration changes,
have a base set of performance stats for a base configuration.

Consider these 6 factors, from Xiao (Sophia) Wang's 2014 benchmarking:
<amp-img width="400" height="185" alt="h2 factors experiment 2016-06-07 400x184" src="https://cloud.githubusercontent.com/assets/300046/15879983/5f3d30f6-2ce6-11e6-94ae-a33b366998fd.jpg"></amp-img>

   * Evaluate the results yourself at <a target="_blank" href="http://wprof.cs.washington.edu/spdy">
     http://wprof.cs.washington.edu/spdy</a>.

PROTIP: To limit variability due to random network conditions,
run your experiments on servers you setup in an internal network.
This makes for better repeatability.


### Push #

The h2 push feature can reduce latency 10-30% and up to 80% less data transfers.
(according to Xiao (Sophia) Wang's 2014 benchmarking, page 43)

When the server pushes files even before the client asks for it,
when the client does ask for it, those files would already be in cache.

This would be a boon to websites using custom fonts.

(The browser within LoadRunner 12.53 does not support this feature)


NOTE: Work is underway to have a <strong>manifest.json</strong>
file specify what to push when an index.html is received by a server.
The file is generated in a build step http2-push-manifest.



### Size of objects and line quality matters #

https://www.usenix.org/sites/default/files/conference/protected-files/nsdi14_slides_wang.pdf

HTTP/SPDY takes longer with large objects transmitted over lines with loss.

This was confirmed by http://wprof.cs.washington.edu/spdy

According to <a target="_blank" href="http://httparchive.org/trends.php">
HttpArchive</a>

### Frame Settings #

* There are 10 different frame types

* Negotiate peer limits

* Max frame size (16 K default, 16 MB max)

* Max concurrent requests

* Priority of streams (CSS before JS, etc.)


#### Gzip #

Ensure that gzip is enabled in the <strong>.htaccess</strong> file:

<pre>
&LT;ifModule mod_gzip.c>
mod_gzip_on Yes
mod_gzip_dechunk Yes
mod_gzip_item_include file .(html?|txt|css|js|php|pl)$
mod_gzip_item_include handler ^cgi-script$
mod_gzip_item_include mime ^text/.*
mod_gzip_item_include mime ^application/x-javascript.*
mod_gzip_item_exclude mime ^image/.*
mod_gzip_item_exclude rspheader ^Content-Encoding:.*gzip.*
&LT;/ifModule>
</pre>

* <a target="_blank" href="https://varvy.com/tools/gzip/">
   To see whether Gzip is working on a site, use the varvy.com online tool/a>

## Server Push #

* <a target="_blank" href="https://en.wikipedia.org/wiki/TCP_congestion_control#Congestion_window">
   Congestion Window (CDWN)</a>
   is a variable held by the TCP source for each connection that reflects
   the perceived level of congestion.
   TCP reacts to a timeout by halving cwnd.

## Videos on YouTube #

Surma ()@DasSurma) works on the Google Chrome team in London:

* <a target="_blank" href="https://www.youtube.com/watch?v=r5oT_2ndjms">
   HTTP/2 101 (Chrome Dev Summit 2015</a> #PWASummit
   Nov 18, 2015

* <a target="_blank" href="https://www.youtube.com/watch?v=G62aCRIlONU/">
  Instant loading with HTTP/2 (Progressive Web App Summit 20 Jun 2016)</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=r2f8tloYJY0">
  HTTP2 at the GOTO conference</a>
  by Daniel Stenberg

* <a target="_blank" href="https://www.youtube.com/watch?v=wR3o6HA47Ao">
  unRESTful Web Services with HTTP2</a> Nov 23, 2015
   by Fabian Staber


## Other Resources

https://ma.ttias.be/architecting-websites-http2-era/

https://ma.ttias.be/http2

http://www.neotys.com/blog/http2-changes-challenges-and-considerations-for-load-performance-testers/

http://blog.oio.de/2016/08/24/http2-client-java-9/

## More on front-end software development #

This is one of several topics:

{% include front-end_links.html %}
