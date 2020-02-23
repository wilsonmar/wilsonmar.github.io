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

My focus here is more about a client program.

Internally, GitHub is a big user of the Ruby language. Thus:
https://developer.github.com/enterprise/2.20/apps/quickstart-guides/using-the-github-api-in-your-app/

https://github.com/probot/probot
written in TypeScript language for NodeJs, is a framework to extend the functionality of GitHub, such as <a target="_blank" href="https://github.com/search?q=topic%3Aprobot-app&type=Repositories">these, listed by number of stars</a>.


## GitHub's GraphQL

I first looked at GitHub's GraphQL API in 2016 during their <strike>https://developer.github.com/early-access/graphql/</strike> which included the <strike>https://developer.github.com/early-access/graphql/explorer/</strike>

GitHub's guides provide sample API calls using the curl command-line utility.

   * https://developer.github.com/v3/guides/getting-started/<br />
   (Developer Guide)
   * https://docs.graphene-python.org/en/stable/quickstart
   * https://developer.github.com/enterprise/2.20/
   * https://developer.github.com/enterprise/2.20/apps/<br />
   Building apps
   <br /><br />

But I prefer using Python example client code for better handling of results (looping through a list, saving to a database, etc.)

<a name="PyGitHub"></a>

## PyGitHub

1. Visit <a target="_blank" href="https://github.com/PyGithub/PyGithub">
https://github.com/PyGithub/PyGithub</a>, which is now being maintained by Steve Kowalik, who works at SUSE in Syndey, Australia.

1. <a target="_blank" href="https://pygithub.readthedocs.io/en/latest/introduction.html">Docs on PyGitHub</a> shows sample Python code.
   I modified it (with added notes) in my repo at:

   <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/pygithub-hello.py">
   https://github.com/wilsonmar/python-samples/blob/master/pygithub-hello.py</a>

   My version of the code references system variables so that secrets are not stored in code on public GitHub.

1. Before execution, in your home user folder create a file named ".pygithub-secrets.env" containing your information instead of mine:

   <pre>MY_GIT_USER_NAME="JohnDoe"
MY_GIT_USER_EMAIL="johndoe@gmail.com"
MY_GITHUB_USER_NAME="JohnDoe"
MY_GITHUB_PASSWORD="Pa$$w0rdisnotsecure"
MY_GITHUB_TOKEN="23441234f13b1134c36667a"
   </pre>

1. Looking at the code, the program looks for that default file name holding secrets if there is no override file specified with the program execution call. If neither is found, the program falls back to reading individual environment variables.

   pygithub.sh

1. When executed, the response from <tt>pygithub-hello.py</tt> is simply:

   <tt>pip install pygithub</tt> is based on code:



### Okta/SAML SSO authentication

First of all, if you're using GitHub Enterprise behind the Okta identity provider (IdP) for SSO (Single Sign On), you first need code to authenticate.

https://help.github.com/en/github/authenticating-to-github/about-authentication-with-saml-single-sign-on

https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on


## Code first?

https://ariadne.readthedocs.io/


### Sample Python calls

<a target="_blank" href="https://github.com/graphql-python/gql">https://github.com/graphql-python/gql</a>
is a GraphQL client for Python. Plays nicely with graphene, graphql-core, graphql-js and any other GraphQL implementation compatible with the spec.

The canonical websit on GraphQL has sample Python code: <a target="_blank" href="https://graphql.org/code/#python">https://graphql.org/code/#python</a>


## Flask app

<a target="_blank" href="https://cz.linkedin.com/in/pavel-prudk%C3%BD-4711ab88">Pavel Prudký</a> shared his <a target="_blank" href="https://datahappy.wordpress.com/2019/07/05/flask-mvc-github-integration-boilerplate-project-finished/">Flask mvc apps to access GitHub</a> on <a target="_blank" href="https://github.com/datahappy1/flask_mvc_github_example_project">his GitHub</a>:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/75112389-59d84580-5611-11ea-8c0c-decf2b595a05.png"><img alt="github-flask-app-665x409.png" src="https://user-images.githubusercontent.com/300046/75112389-59d84580-5611-11ea-8c0c-decf2b595a05.png"></a>


## More on API Microservices #

This is one of a series:

{% include api_links.html %}

## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
