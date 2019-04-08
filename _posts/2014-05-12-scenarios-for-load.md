---
layout: post
title: "Scenarios for load"
excerpt: "Artificial"
tags: [scenarios, load, testing, artificial]
image:
# feature: pic brown blowholes sunset 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622013/564257e4-0584-11e6-8b3f-b2a14eea98a4.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<a target="_blank" href="http://wilsonmar.github.io/scenarios-for-load">This</a> 
article describes the various scenarios for load testing an application.

"S01" and such in file refer to these values
which designates the file's usage.

## Single-user

<amp-youtube data-videoid="6VmAX3DM78s" layout="responsive" width="480" height="270"></amp-youtube>

* <strong>S01-Not available</strong> – "System not available" pages are served by an infrastructure server, not the app under test because that is served when the app doesn't work. Without this page being available, users may get diverted to their ISP's marketing page. 

   PROTIP: Such a page should have a way to contact you, such as an email and phone number.

   PROTIP: <a target="_blank" href="https://www.creativebloq.com/web-design/best-404-pages-812505">This site</a> shows some creative pages.

* <strong>S02-404 Not Found</strong> – A "Page Not Found" is shown when a visitor adds something strange after the host name. On Apache web servers, this page is specified in the <tt>.htaccess</tt> file.

   PROTIP: Amazon puts up a picture of cute pets to elicit sympathy.

   PROTIP: On this page, provide a text search form, a menu, a link to your site's landing/home page.

   PROTIP: Put a simple form on the page to allow visitors a way to provide feedback about the broken link.

   PROTIP: Review your web log to identify frequently mistyped URLs so that you can even put links to the correct location directly on the page. That is a better UX so that visitors quickly get to the correct page without stumbling around.

* <strong>S03-Landing</strong> – Landing page from URL only for 
   <strong>connection variability testing</strong>.
   This may be the page that comes with the web container 
   (IIS, Apache, Jetty, etc.).

* <strong>S04-Home_page</strong> for the page that appears when the application is invoked.
  Appearance of this page indication that the application is "alive", and can deliver resources.
  This page can be used for <strong>connection load testing</strong>.

* <strong>S05-SiteMap</strong> –  lists all the pages on your website.

* <strong>S10-Sign-up</strong> to build user database build timing tests.

* <strong>S11-Log-in</strong> for authentication load testing.

   PROTIP: This is often the slowest transaction because authentication involves use of other services.

* <strong>S12-Menu traversal</strong> for variety and to ensure menus can be invoked in order to reach functionality to be load tested.

* <strong>S13-Add</strong> for app transaction DB build timings.

* <strong>S14-Updates</strong> for app user variety.

* <strong>S15-Report</strong> for app user mix load testing.

* <strong>S16-Deletes</strong> needed for emulating real work patterns during longitudinal/soak load test.

* There are additional ones such as pure API access.



## Wait, there's more. Click one of these ... #

This is one of a series about tuning and performance:

{% include tuning.html %}
