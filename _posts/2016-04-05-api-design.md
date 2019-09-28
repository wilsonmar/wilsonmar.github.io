---
layout: post
title: "API Design"
excerpt: "Make it work"
tags: [API, design]
date: "2016-04-05"
file: "api-design"
image:
# pic beach easter_island_statues-wallpaper-1900x500 
  feature: https://cloud.githubusercontent.com/assets/300046/15217295/1da4a576-1818-11e6-9a2c-527ae637d5c5.jpg
  credit: Wallpapers Wide
  creditlink: http://wallpaperswide.com/easter_island_statues_2-wallpapers.html
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The less coupling, the better to evolve.

## Domains and Context

<img width="528" alt="api-domain-model" src="https://cloud.githubusercontent.com/assets/300046/15142196/3e09a6a8-1661-11e6-993a-88bae6ae3b40.png">

<img width="562" alt="api-domains-context" src="https://cloud.githubusercontent.com/assets/300046/15142205/46d06e70-1661-11e6-97e8-517201d7c505.png">

Above impages from slide 25 of
<a target="_blank" href="https://speakerdeck.com/olivergierke/the-revival-of-domain-driven-design-in-the-context-of-microservices?utm_content=buffer65874">
"The revival of Domain-Driven Design in the context of microservices"</a>
March 11, 2016
by Oliver Gierke
<a target="_blank" href="http://pivotal.io/event/jpmc-glasgow-tech-symposium">JPMC Tech Symposium, Glasgow</a>.




## Integrations #

![api-roi-600x438](https://cloud.githubusercontent.com/assets/300046/15142705/7f951a4c-1663-11e6-93ad-8104b7d29274.jpg)

SMS, emails can be sent via the API from Twilio.com.
An investor in Twilio, Byron Deeter <a href="http://venturebeat.com/2013/08/31/api-economy/">said</a>:
"APIs provide the "digital glue" that empowers developers to create new software applications,
partnerships, and even new businesses. The <strong>business-to-developer</strong> market is quickly becoming one
of the fastest growing opportunities within cloud computing."

A high-quality API:

* provides high-value data and functionality that meets real needs or unlocks compelling opportunities;

* has a low integration cost because client integration is facilitated by a lucid, consistent API design, great documentation, interactive tooling, and client SDKs, all wrapped into a smooth, developer-friendly onboarding experience;

* has low operational and support overhead because it’s thoroughly tested in all aspects, and instrumented for reliability; and

* generates business value because it’s highly adopted by client developers, for all of the above reasons.

CREDIT: The above is based on 
http://blog.smartbear.com/api-testing/rapid-ml-and-ready-api-full-lifecycle-api-quality/



## Domain-Driven Design

<a target="_blank" href="https://domainlanguage.com/ddd/">
domain-driven-design</a> 
of API modeling provides a framework for interoperability:

* Identify a bounded context where we plan to provide a family of highly interoperable services. 
   
   This could be a microservices architecture; an enterprise, or an entire industry.

* Formalize key concepts and relationships as a domain model. 

   This should be natural to users, and may borrow familiar terminology and data structures from other systems well-known in that context.

* Align data representations, code, product documentation, and team communication to the domain model, forming a ubiquitous language.

https://www.wikiwand.com/en/Domain-driven_design

https://app.pluralsight.com/library/courses/domain-driven-design-fundamentals/table-of-contents
	June 2014
	by Steve Smith and Julie Lerman

<a target="_blank" href="http://rapid-api.org/rapid-ml">
RAPID-ML</a>


## References

* <a target="_blank" href="https://www.thoughtworks.com/insights/blog/microservices-lessons-frontline/">
    Microservices: Lessons from the frontline</a>
	at Australia
	by Zhamak Dehghani, Principal consultant


* <a target="_blank" href="http://www.smartfile.com/blog/3-benefits-of-api-first-design/">
   Benefits of API-first design</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=oG2rotiGr90/">
	YOUTUBE: REST-Ful API Design</a>
	by SpringDeveloper 

* <a target="_blank" href="http://apihandyman.io/writing-openapi-swagger-specification-tutorial-part-1-introduction/">
   Swagger spec tutorial</a>
   by API Handyman

* <a target="_blank" href="https://github.com/APIs-guru/api-models#existing-integrations">
   API Model from API-Guru on GitHub</a>

* <a target="_blank" href="https://cloud.google.com/apis/design/">
   Google's API Design Guidelines</a>
   focuses on both REST API and RPC (Remote Procedure Call) APIs that use Protocol Buffers.


## API Events

* I Love APIs


## API Rock Stars

Must-follow #API influencers? 

* Kin Lane, https://twitter.com/apievangelist

* @Bradamante 

* Arnaud Lauret = @apihandyman 

* Zdenek Nemec @zdne at Apiary

* Mark Baker @distobj is an early API evangelist

* @mgboydcom on @APIEconomist

* <a target="_blank" href="http://apieconomist.com/blog/darrel-miller-hypermedia-apis">
	Darrel Miller</a>

   #JSON-LD is best attempt to date to make RDF consumable"

Developer-friendly API documentation fantastically:

* Brad Fults @h3h 

* James Higginbotham @launchany

* The term "REST" was introduced by Fielding's dissertation at:<br />
   https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm

* Best Practices for Designing a Pragmatic RESTful API<br />
   http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api

* Microservice architecture by Chris Richardson<br />
   http://microservices.io/<br />
   http://eventuate.io/exampleapps.html


## More on API Microservices #

This is one of a series:

{% include api_links.html %}
