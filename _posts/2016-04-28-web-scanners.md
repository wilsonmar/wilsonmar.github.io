---
layout: post
title: "Website scanners"
excerpt: "I'm innocent! Really!"
tags: [devops]
date: "2016-04-28"
file: "web-scanners"
image:
# feature: pic-brown-horses-running-forward-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14724047/445df2f0-07d1-11e6-9c26-782291fe2b47.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Several utility websites are available publicly to scan websites for issues
based on their rules.

This page describes their output and whether each finding is applicable/usable.

## W3C

https://validator.w3.org/checklink?uri=http%3A%2F%2Fwilsonmar.github.io%2F&summary=on&hide_type=all&recursive=on&depth=1&check=Check

* Status: 501 Protocol scheme 'skype' is not supported
   Could not check this link: method not implemented or scheme not supported.

   **skype:wilsonmar4?call**

   Action: Ignore this alert because the link is valid for clients which 
   have a Skype client installed.

* Status: 301 -> 200 OK
  This is a permanent redirect. The link should be updated.

  http://www.pinterest.com/wilsonmar4 redirected to https://www.pinterest.com/wilsonmar4

  Action: Fix links using **https://** instead of http:// to avoid redirects
  that rob time from end-users and cycles from servers.

* Status: 404 -> Not Found
  The link is broken. Double-check that you have not made any typo, or mistake in copy-pasting. If the link points to a resource that no longer exists, you may want to remove or fix the link.

  * https://www.google.com/calendar/embed?src=wilsonmar%40gmail.com
  * http://masoncurrey.com/Daily-Rituals/

  Action: Ignore. These links actually do resolve and get found.

* Status 200 -> OK
  Some of the links to this resource point to broken URI fragments (such as index.html#fragment).
  Broken fragments:

  http://chartingthebeatles.com/#schedule (line 417)
  
  http://chartingthebeatles.com/

  Action: At first it displays on a specific computer it sends an error, but if you wait a few seconds the website actually appears.
  The second time the website is requested then it loads correctly. 
  
* Status 200 -> OK

  Broken fragments:
  http://zeroturnaround.com/rebellabs/the-curious-coders-java-web-frameworks-comparison-spring-mvc-grails-vaadin-gwt-wicket-play-struts-and-jsf/2/#!/ (line 245)

  Action: Ignore. This link may have issues opening the first time, but 
  the website works. No issues to resolve.

* Status 301 -> 200OK 
  Line: 304 https://calendar.google.com/ redirected to https://www.google.com/

  This is a permanent redirect. The link should be updated.
  
  Action: Investigate. 
  This is code that directs the user to their own calendar.
  
* Status 301 -> 200 OK and also HTTP status code 3xx (Redirection) received and the HTTP Location header targets a relative URI

  Redirections should be avoided because of the usually high latency of mobile networks. Since the final URI of the resource is on the same server, server-based redirection may be possible and would save a round-trip between the server and the end user
  This is a permanent redirect. The link should be updated.
  
  http://gitter.im/wilsonmar redirected to https://gitter.im/login
  
  Action: Ignore. This is code that brings the user to the login for wilsonmar.  
  If the user does not have a login yet, then it brings them
  to the main screen to create a login.  It is working correctly here, nothing to change.
  
## Google Page Speed

TODO: Add Google Page Speed

TODO: Add HP Service Virtualization