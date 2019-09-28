---
layout: post
title: "GitHub GraphQL API"
excerpt: "GitHub's REST API was perfect. Now THIS is more perfect."
tags: [GitHub, API, GraphQL]
date: "2016-11-05"
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

GitHub's API is considered an industry-standard we would do well to emulate:

   * [HATEOS-based REST API, (my BFF last year)](/github-api/) such as 
  [PowerShellforGitHub](/powershell-github/)

   * GraphQL (this article)

## GitHub's GraphQL

See https://developer.github.com/early-access/graphql/

Use the https://developer.github.com/early-access/graphql/explorer/

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
