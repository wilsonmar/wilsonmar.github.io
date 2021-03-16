---
layout: post
title: "GitHub GraphQL (API)"
excerpt: "GitHub's REST API was perfect. Now THIS is more perfect."
tags: [GitHub, API, GraphQL]
date: "2021-03-17"
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

This article covers working with GitHub's GraphQL by manually issuing single requests and by programming.

## GitHub's GraphQL

GitHub provides a well-known GraphQL API that accepts a lot of traffic.

GitHub was among the first to adopt GraphQL's leading-edge API techniques, so their APIs are referenced as an example industry-standard we would do well to emulate:

   * [HATEOS-based REST API, (my BFF last year)](/github-api/) such as 
  [PowerShellforGitHub](/powershell-github/)

   * Facebook's GraphQL (described by <a target="_blank" href="https://wilsonmar.github.io/graphql/">my article on GraphQL</a>)

I first looked at GitHub's GraphQL API in 2016 during their <strike>https://developer.github.com/early-access/graphql/</strike> which included the <strike>https://developer.github.com/early-access/graphql/explorer/</strike>


## GitHub Auth Token

Even working on public repos, unauthenticated clients can make only 60 requests per hour and see limited informaiton unless you get an authentication token to make a call like this:

   <pre>curl -i -H "Authorization: token 5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4" \
    https://api.github.com/user/repos
   </pre>

GitHub's guides provide sample API calls using the curl command-line utility.

1. GitHub's Developer Guide on GraphQL is at:

   <a target="_blank" href="https://developer.github.com/v3/guides/getting-started/">https://developer.github.com/v3/guides/getting-started</a>

   Others:

   * https://developer.github.com/enterprise/2.20/
   * https://developer.github.com/enterprise/2.20/apps/<br />
   Building apps
   <br /><br />

1. Get a GitHub account if you don't already have one.

1. Navigate to the Settings page of the repo you want to use APIs on.

   NOTE: You need to be an owner or Administrator to see "Settings" tab.

   PROTIP: Avoid creating and using a <strong>PAT (Personal Access Token)</strong> because that is like a password that grants full access to all your repositories in your account.

   <strong>Deploy keys</strong> limits access to a specific repository in your account using SSH.

   An "OAuth App" acts as a GitHub user, whereas a "GitHub App" uses its own identity installed on an organization (granted by an organization administrator).

   Read: https://insomnia.rest/blog/oauth2-github-api

1. Register a new OAuth application

   https://github.com/settings/applications/new

   See https://docs.github.com/en/rest/guides/basics-of-authentication

   https://docs.github.com/en/rest/reference/repos#create-a-repository-for-the-authenticated-user

1. In the <strong>Deploy keys</strong> menu, click "Add deploy key".

1. Be in your home user folder, which is never pushed to any public GitHub. Here is where you can keep files containing secrets.

1. PROTIP: Create a file named ".pygithub-secrets.env" containing your information instead of mine:

   <pre>MY_GIT_USER_NAME="JohnDoe"
MY_GIT_USER_EMAIL="johndoe@gmail.com"
MY_GITHUB_USER_NAME="JohnDoe"
MY_GITHUB_PASSWORD="Pa$$w0rdisnotsecure"
MY_GITHUB_TOKEN="23441234f13b1134c36667a"
   </pre>

1. If you're using GitHub Enterprise behind the Okta identity provider (IdP) for SSO (Single Sign On), you will need to be given access that instance an probably have to install a VPN client as well.

   https://help.github.com/en/github/authenticating-to-github/about-authentication-with-saml-single-sign-on

1. READ GitHub's REST API documentation at:

   https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on


## Technologies to Access

As with any API, there are several ways you can there make calls:
   
   * Without installing anything:<br />on a Terminal crafting curl commands

   * Installing a browser add-on

   * <a href="#CustomPrograms">Custom programs</a>

   * <a href="#ClientPrograms">Installing a client programs: Postman or Insomnia on the Mac, etc.

   * <a href="#Programming">Installing a programming environment: Python, NodeJs, Ruby, etc.


## Insomnia

https://github.com/swinton/github-rest-apis-for-insomnia


<a name="CustomPrograms"></a>

## Custom Graphene program

### GraphQL

   <a target="_blank" href="https://github.com/graphql-python/gql">https://github.com/graphql-python/gql</a>
   is a GraphQL client for Python. Plays nicely with graphene, graphql-core, graphql-js and any other GraphQL implementation compatible with the spec.

### Flask app

The app provides a UI to GitHub API calls made by the model_gh.py program.

<a target="_blank" href="https://cz.linkedin.com/in/pavel-prudk%C3%BD-4711ab88">Pavel Prudký (from Prague)</a> shared his <a target="_blank" href="https://datahappy.wordpress.com/2019/07/05/flask-mvc-github-integration-boilerplate-project-finished/">Python Flask mvc app to list/manage GitHub branches and files</a> on <a target="_blank" href="https://github.com/datahappy1/flask_mvc_github_example_project">his GitHub</a>:

<a target="_blank" title="github-flask-app-749x461.png" href="https://user-images.githubusercontent.com/300046/75112636-aae93900-5613-11ea-8189-d7777af60e0a.png"><img alt="github-flask-app-665x409.png" src="https://user-images.githubusercontent.com/300046/75112389-59d84580-5611-11ea-8c0c-decf2b595a05.png"></a>


<a name="ClientPrograms"></a>

### Install client programs

1. Install Insomina.<br />
   On a Mac using Homebrew:

   <pre><strong>brew install --cask insomina
   </strong></pre>


<a name="Programming"></a>

## Programmatic access

Programs program enable automated preparation of calls and handling of results (looping through a list, saving to a database, etc.).

People have open-sourced libraries of code so you don't have to "reinvent the wheel".


### Ruby

Internally, GitHub was orginally written in Ruby. Thus:
https://developer.github.com/enterprise/2.20/apps/quickstart-guides/using-the-github-api-in-your-app/


### Javascript

<a name="PyGitHub"></a>

<a target="_blank" href="https://github.com/probot/probot/">
GitHub's ProBot is written in TypeScript language for NodeJs, is a framework to extend the functionality of GitHub, such as <a target="_blank" href="https://github.com/search?q=topic%3Aprobot-app&type=Repositories">these, listed by number of stars</a>.


### Python

1. Visit <a target="_blank" href="https://github.com/PyGithub/PyGithub">https://github.com/PyGithub/PyGithub</a>, which is now being maintained by Steve Kowalik, who works at SUSE in Syndey, Australia.

1. <a target="_blank" href="https://pygithub.readthedocs.io/en/latest/introduction.html">Docs on PyGitHub</a> shows sample Python code.
   I modified it (with added notes) in my repo at:

   <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/pygithub-hello.py">
   https://github.com/wilsonmar/python-samples/blob/master/pygithub-hello.py</a>

   The above repo is private. Ask me about making you a collaborator.

   My version of the code references system variables so that secrets are not stored in code on public GitHub.

1. Looking at the code, the program looks for that default file name holding secrets if there is no override file specified with the program execution call. If neither is found, the program falls back to reading individual environment variables.

   <pre>pygithub.sh</pre>

1. When executed, the response from <tt>pygithub-hello.py</tt> is simply:

   <tt>pip install pygithub</tt> is based on code:

1. Make sample Python calls

   The canonical websit on GraphQL has sample Python code: <a target="_blank" href="https://graphql.org/code/#python">https://graphql.org/code/#python</a>


### Want your own GraphQL server?

You may want a custom (proxy) server responding to requests from your company's apps, so they don't all have to make calls to GitHub.

This may be because you don't want to grant every program access to all information, which is what GitHub currently does.
GitHub doesn't limit the content of data accessed by a token,
only categories of their services.

A custom server would enable you to respond any way you want.
(But you also have to worry about providing enough capacity, unlike a SaaS offering like GitHub)

There are two major Python code library for implementing GraphQL servers:

The Graphene Python library takes a "code-first" approach:

   <a target="_blank" href="https://docs.graphene-python.org/en/stable/quickstart">https://docs.graphene-python.org/en/stable/quickstart</a>

"Ariadne" using a SDL (Schema Definition Language) so less coding is needed.

   <a target="_blank" href="https://ariadnegraphql.org/">
   https://ariadnegraphql.org/</a> describes
   <a target="_blank" href="https://github.com/mirumee/ariadne">https://github.com/mirumee/ariadne</a>


## More on API Microservices #

This is one of a series:

{% include api_links.html %}

## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
