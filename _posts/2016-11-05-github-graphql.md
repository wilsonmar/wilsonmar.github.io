---
layout: post
title: "GitHub GraphQL API"
excerpt: "GitHub's REST API was perfect. Now THIS is more perfect."
tags: [GitHub, API, GraphQL]
date: "2020-02-15"
file: "github-graphql"
image:
# pic green easter island 2 hillside 1920x1080
  feature: https://cloud.githubusercontent.com/assets/300046/15217452/d8d04062-1818-11e6-9a57-215db66655d2.jpg
  credit: Audley Travel
  creditlink: https://www.youtube.com/watch?v=Sq8qZoEr0nw&t=1m12s
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

GitHub provides a well-known API that accepts a lot of traffic.

GitHub's was among the first to use leading-edge API techniques, so 
their APIs are considered an industry-standard we would do well to emulate:

   * [HATEOS-based REST API, (my BFF last year)](/github-api/) such as 
  [PowerShellforGitHub](/powershell-github/)

   * Facebook's GraphQL (described by <a target="_blank" href="https://wilsonmar.github.io/graphql/">my article on GraphQL</a>)

Those who write custom servers communicating in GraphQL would use bindings for 

   * Facebook's Relay
   * Flask at https://github.com/graphql-python/flask-graphql
   * Django at https://docs.graphene-python.org/projects/django/en/latest/
   * MongoDB at https://github.com/graphql-python/graphene-mongo
   * SQLAlchemy at https://docs.graphene-python.org/projects/sqlalchemy/en/latest/
   * Google App Engine (GAE) at https://docs.graphene-python.org/projects/gae/en/latest/


## GitHub's GraphQL

I first looked at GitHub's GraphQL API in 2016 during their <strike>https://developer.github.com/early-access/graphql/</strike> which included the <strike>https://developer.github.com/early-access/graphql/explorer/</strike>

GraphQL communicates in a Schema Definition Language (SDL) defined at 
https://graphql.org/learn/schema/


### Okta SSO authentication

First of all, if you're using GitHub Enterprise behind Okta SSO, you first need code to authenticate.

## Code first?

https://ariadne.readthedocs.io/


### Sample Python calls

https://github.com/graphql-python/gql
is a GraphQL client for Python. Plays nicely with graphene, graphql-core, graphql-js and any other GraphQL implementation compatible with the spec.

The canonical websitwe on GraphQL has sample Python code: https://graphql.org/code/#python

## Graphene for Python

1. Visit <a target="_blank" href="https://graphene-python.org/">https://graphene-python.org</a>, 
   the front page for the Python library to build GraphQL APIs.

1. I have that "hello world" code in my repo at:

   <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/graphql-hello.py">
   https://github.com/wilsonmar/python-samples/blob/master/graphql-hello.py</a>

1. I have that setup to run within a Virtual Environment after invoking <tt>pip install graphene</tt>

   ???

1. When executed, the response from <tt>graphql-hello.py</tt> is simply:

   <pre>Hello world</pre>

1. Look at

   https://docs.graphene-python.org/en/stable/quickstart/#an-example-in-graphene


https://docs.graphene-python.org/en/stable/

https://github.com/graphql-python/graphene


## Bindings

Perform an <a target="_blank" href="http://graphql.org/learn/introspection/">
introspection query</a>.
As the GraphQL schema matures, new data types appear.

Make a single call to retrieve (rather than many REST API calls).

Response is structured using the same JSON hierarchy as the call.

Changes can occur with less fuss than REST API.


## PowerShellforGitHubGraphQL module

I couldn't find a PSGallery module for referencing GitHub's GraphQL,
so I set out to create one when that's what Karol Kaczmarek
suggested I do.

http://www.systemcentercentral.com/day-19-creating-online-powershellget-repository/

  [PowerShellforGitHub](/powershell-github/)

The Functions folder contains Private and Public folders.



## More on API Microservices #

This is one of a series:

{% include api_links.html %}

## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
