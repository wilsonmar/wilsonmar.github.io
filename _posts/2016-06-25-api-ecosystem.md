---
layout: post
date: "2023-11-15"
file: "api-ecosystem"
filename: api-ecosystem
title: "API Development Ecosystem"
excerpt: "It does your job. And helps others to do your job."
tags: [API, ecosystem, swagger, generation]
image:
# pic-blue-city-abu-dhabi-skyscrapers-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15269473/c8311bfa-19bc-11e6-890c-06abc511ef39.jpg
  credit: Tian Xinqi
  creditlink: http://www.tianxinqi.com/news/Above80swgpuwnk
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

[![Gitter](https://badges.gitter.im/wilsonmar/wilsonmar.github.io.svg)](https://gitter.im/wilsonmar/wilsonmar.github.io?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

This tutorial is about the elements of an ecosystem for 
<strong>development</strong> of Application Programming Interfaces (APIs).

By "API" I include the 
<a target="_blank" href="http://graphql.org/">
GraphQL data query language</a> 
(<a target="_blank" href="https://code.facebook.com/posts/1691455094417024/graphql-a-data-query-language/">
from Facebook</a>)
and programs such as browser app
<a target="_blank" href="http://graphql-swapi.parseapp.com/">
GraphiQL</a>
<a target="_blank" href="https://github.com/apollostack/apollo-codegen">
Apollo Codegen</a> which read them to create client programs.

<amp-youtube data-videoid="bOuMpvrrkGY" layout="responsive" width="480" height="270">
</amp-youtube>
In this 3 minute video, click "CC" to toggle Closed Captioning text below.

<strong>API services</strong> obtain revenue based on access by 
<strong>client apps</strong> written by other 
<strong>developers</strong>.

But first those developers need to find (<strong>discover</strong>) that the API exists,
perhaps from <strong>galleries of available APIs</strong>
such as <a target="_blank" href="https://apis.guru/">apis.guru</a>.

It's helpful to have a comparison of results from static
<strong>quality scans</strong> evaulating machine-readable
<strong>interface specs</strong> of the API.

There are several competing API specification formats (such as RAML, WADL, and Swagger).
But [Swagger](/swagger/) seems to be the most popular at this time.

<strong>Discussion</strong> and evaluation of APIs can be more focused
when they revolve around community agreement of a specific set of
<strong>rules</strong> driving quality scans.

<strong>Documentation</strong> about the API helps not only
for the API to be discovered from the public galleries,
but also for developers to more quickly appreciate the intricacies of that API.

What's even better than reading documentation 
is to interact live with a sample <strong>demonstration</strong> app
so developers and potential users can really grasp the value of the services exposed.

Then developers would be more enticed to get <strong>API keys</strong>
client apps need to provide when accessing API services.

Having enough <strong>sample data</strong> is important so
<strong>test automation scripts</strong> have the test coverage needed
to make sure that all features really work, and work quickly, even under load. 

A <strong>mock server</strong> doesn't provide all the logic and data from a real server,
but some developers use them while they build their clients because they provide
a stable end-point running locally while off the network.

### The Ecosystem #

All this is what makes up a "full" API ecosystem today.

<amp-img width="650" height="283" alt="api-ecosystem-v05-needs-650x283-c67.jpg"
src="https://cloud.githubusercontent.com/assets/300046/16594103/f753f594-42a5-11e6-99cf-fabe7317374d.jpg">
</amp-img>

> Would you like this? Let me know.

<hr />

It takes <strong>effort</strong> 
to create docs, demo, test, and mock server code.

That is why many have begun writing automated generation of such code.

But ideally, the <strong>logic</strong> used to generate this code 
would be based on both the interface specifications and 
<strong>wisdom</strong> culled from analysis of the 
<strong>metadata</strong> gleaned from patterns in data over time
and analysis of history previously only used for <strong>billing</strong>.

More sophisticated variation of <strong>data values</strong> in generated code
is now the frontier.
Such data include values and statistics from both historical points in time 
and projections plus predictions of values expected in the future.

With apps of enterprise scope and complexity,
<strong>manual</strong> coding of the client and server code-base by human developers
can seem repetitive and be error-prone, therefore taking more time and 
be more expensive than what could be.

So instead of manually defining interface specs,
they can now be generated from the 
<strong>code base</strong> 
by marking up server code with 
comments
recognizeble by a <strong>parser such as Doxegen</strong>.

All this cuts <strong>time to market</strong> because changes to server code
can now be quickly reflected in the 
docs, the client demo code, mock server code, test code, and benchmark run results.

> Ask me questions about this.

<a name="Recap"></a>

## Recap: My Ask #

<a name="Diagram"></a>

<amp-img width="650" height="307" alt="api-ecosystem-v05-650x307-c64.jpg"
src="https://cloud.githubusercontent.com/assets/300046/16593898/e34ad1f4-42a4-11e6-9b08-4396c1514ca9.jpg">
</amp-img>

What I'm advocating here are:

1. Programming of <strong>code generation programs</strong> so that 
   the many future changes in requirements is automatically reflected in working code.

   * <a target="_blank" href="https://www.youtube.com/watch?v=ejF5p76L9Bw&t=10m57s">
   Video: API documentation generated from HTML</a> using
   <a target="_blank" href="https://github.com/hiranya911/rest-coder">
   rest-coder</a> Oct. 2013.
   <br /><br />

1. Scan swagger JSON interface specs for issues based on commonly accepted rules, 
   just like we now use SonarQube to statically scan Java code for issues.

   * <a target="_blank" href="https://dojo.ministryoftesting.com/lessons/part-1-getting-started-installation-of-software">
   Let's Build an API Checking Framework</a>
   <br /><br />

1. Expand a central museum (marketplace) of APIs out in the wide
   so people can discover and <strong>compare</strong> APIs
   techniques employed based on various evaluation criteria
   (like Consumer Reports does with consumer products).

1. Elicit insights about billing on where databases are growing organically in order to 
   <strong>predict</strong> areas of stress, 
   so developers and programs have the wisdom to
   alter testing code to <strong>proacatively</strong> 
   verify if the database is ready for those specific types of growth.

1. Leverage a <strong>community</strong> of developers and other professions 
   to achieve the above
   through a <strong>smart forum for collaboration</strong>.

1. Perhaps the biggest one is that 
   organizations can be inundated by so many APIs that a (easy) way to manage them together as a whole. 
   
   When an organization has a way of generating client apps from code,
   it can quickly make use of additional APIs by leveraging 
   prior API work (such as company security and branding).
   That makes the business more nimble.

   When changes occurs, the business can adapt quicker if can re-generate
   rather than 

> Email or call me so we can see how this can work for you and your organization.

We're talking about generating code based on a standard specification (Swagger)
with known formats.


## API search engines #

Gitub: https://github.com/ 

Postman Explore: https://www.postman.com/explore/apis

ProgrammableWeb API Directory: https://www.programmableweb.com/apis/directory 

APIs Guru: https://apis.guru/ 

Public APIs Github Project: https://github.com/public-apis/public-apis 

RapidAPI Hub: https://rapidapi.com/search/ 



## References

* http://www.w3.org/Submission/wadl/
* https://developers.helloreverb.com/swagger/

## More on API Microservices #

This is one of a series:

{% include api_links.html %}
