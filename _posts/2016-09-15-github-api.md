---
layout: post
title: "GitHub REST API"
excerpt: "I say it's the industry standard for web services"
tags: [devops]
date: "2016-09-15"
file: "github-api"
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

GitHub provides well-known APIs that accept a lot of traffic.

GitHub has two API's, both considered industry-standards others would do well to emulate:

   * <a href="#HATEOS">HATEOS responses</a> in REST API (described below)

   * [GitHub GraphQL PowerShell module](/github-graphql-powershell/)

## My Shell Scripts

For my class on Git and GitHub,
I wrote a shell script which executes a sequence of commands so learners
can experiement with the impact of changes have on the end state.

The script establishes local aliases, and pulls in secrets 
stored in a separate file to create environment variables in the script.

At the end of the script, it creates a local Git repository,
then puts it in a new GitHub. To make the script idempotent,
it deletes the prior version of the repo on GitHub as well.

I have a working Bash shell script.
But when Microsoft open sourced PowerShell in August 2016, 
I began ported it to PowerShell so I only need to maintain one script for all platforms
(Windows, Mac, Linux).

## Options for multi-platform

<strong>Ideally, there would be one script to run on all platforms.</strong>

The options to run scripts:

1. <a href="#WinRunBash">Have Windows and Macs run Bash scripts.</a>

2. <a href="#MacRunRest">Have Macs and Windows run PowerShell scripts.</a>

   2.1. <a href="#PowerShellForGitHub">Code Invoke-RestMethod calls in PowerShell script.</a>

   2.2. [Use PowerShellForGitHub module](/powershell-rest-api/)

   TODO: Fix errors from PowerShell before scripting.

<hr />

<a name="WinRunBash"></a>

## Windows running Bash Script

   <a target="_blank" href="https://github.com/wilsonmar/git-utilities/blob/master/git-sample-repo-create.sh">
   <strong>git-sample-repo-create.sh</strong>
   Bash shell script on my personal GitHub</a>


When you install GitHub's Desktop for Windows, it includes bash commands.

TODO: Add instructions here.

But how many would install GitHub Desktop?

This seems more likely than the other options.


<a name="MacRunRest"></a>

## Macs running Plain PS scripts

   <a target="_blank" href="https://github.com/wilsonmar/git-utilities/blob/master/git-sample-repo-create.ps1">
   <strong>git-sample-repo-create.ps1</strong>
   PowerShell script on my personal GitHub</a>

When you PowerShell Invoke-RestMethod

But how many Mac users would install PowerShell, 
which was still in Alpha 0.1.0 release as of November 2016?



<hr />

## Command-line queries

1. In a Terminal on a Mac:

   ### Brew install curl #

   The cURL utility is used by many documents when describing REST API.

0. On a Mac, instead of downloading cURL from 
   `http://curl.haxx.se/download.html`
   and using `tar -zxf` on the downloaded file, 
   use Homebrew from a Terminal:

   <tt><strong>brew install curl
   </strong></tt>

   NOTE: Play with curl options on-line using
   <a target="_blank" href="http://hurl.it">http://hurl.it</a>

   ### Account curl request

0. Get information about a public (not enterprise) user or organization,
   --including HTTP headers, type this (but substitute "wilsonmar" with your GitHub account name):

   <pre><strong>curl --include https://api.github.com/users/wilsonmar \
   -H "Accept: application/vnd.github.v4.full+json"
   </strong></pre>

   The above requests version 4 of GitHub's API, new as of November 2019.
   Without the HTML header specification, the default is version 3, which is being deprecated.

   ### Rate limitations

   Among the headers notice rates per hour for unauthenticated calls:

   <pre>X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59</pre>

   <a href="#5000">Authenticated calls have a limit of 5000 per hour. See below</a> and <a target="_blank" href="https://developer.github.com/v3/#rate-limiting">https://developer.github.com/v4/#rate-limiting</a>

   ### Versions

   Among response headers, notice the version:

   <pre>X-GitHub-Media-Type: github.v4; format=json
   </pre>

1. Switch to an internet browser (Chrome) to view the API documentation at<br />
   <a target="blank" href="https://developer.github.com/v3/">
   https://developer.github.com</a>

   <a target="_blank" href="https://github.community/t5/GitHub-API-Development-and/bd-p/api">https://github.community/t5/GitHub-API-Development-and/bd-p/api</a>

   https://support.github.com/

   Alternately, go directly to the version by clicking "Learn more about v4 of the GitHub API") or specify the version:

   <a target="blank" href="https://developer.github.com/v3/">
   https://developer.github.com/v3</a>

   To use GraphQL queries in version 4:
   
   <a target="blank" href="https://developer.github.com/v4/">
   https://developer.github.com/v4</a>

   Near the bottom of the response includes contact and stats:

   <pre>"type": "User",
  "site_admin": false,
  "name": "Wilson Mar",
  "company": "JetBloom",
  "blog": "https://wilsonmar.github.io",
  "location": "In an off-grid driverless van",
  "email": "wilsonmar@gmail.com",
  "hireable": true,
  "bio": "https://twitter.com/wilsonmar",
  "public_repos": 284,
  "public_gists": 17,
  "followers": 301,
  "following": 152,
  "created_at": "2010-06-08T16:42:06Z",
  "updated_at": "2019-12-22T07:10:02Z"
   </pre>

   <a name="HATEOS"></a>

   ### HATEOS links

   In the middle of the response are URLs which the user can run next, such as:

   <pre>
  "url": "https://api.github.com/users/wilsonmar",
  "html_url": "https://github.com/wilsonmar",
  "followers_url": "https://api.github.com/users/wilsonmar/followers",
  "following_url": "https://api.github.com/users/wilsonmar/following{/other_user}",
  "gists_url": "https://api.github.com/users/wilsonmar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/wilsonmar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/wilsonmar/subscriptions",
  "organizations_url": "https://api.github.com/users/wilsonmar/orgs",
  "repos_url": "https://api.github.com/users/wilsonmar/repos",
  "events_url": "https://api.github.com/users/wilsonmar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/wilsonmar/received_events",
}
   </pre>

   Including links in responses is part of the design pattern called
   <strong>HATEOAS</strong> (Hypermedia as the Engine of Application State).

   PROTIP: As <a target="_blank" href="https://spring.io/understanding/HATEOAS">
   this notes</a>, including hypermedia links with the responses
   means programs are not dependent on a fixed specification 
   staged somewhere else on the website, on another website, or perhaps distributed by email.
   The list of links dynamically provide guidance on what calls can be made.
   So less errors.

   ### Brew install jq JSON processor #

   PROTIP: In order for scripts to be "idempotent" 
   (create the same conditions no matter how many times it's run),
   scripts need to know the data of a specific key within
   the JSON returned from API calls.

0. A sample call to obtain data values from JSON returned
   into an environment variable:

   <pre>HASH=$(curl https://api.github.com/users/wilsonmar | jq ".starred_url")
   echo "HASH=$HASH"
   </pre>

   "jq" is a JSON processor jq for macOS, Windows, and Linux.

0. Install it using Homebrew from any folder:

   <tt><strong>brew install jq</strong></tt>

   Do this instead of downloading installer from<br />
   In <a target="_blank" href="https://stedolan.github.io/jq/">
   https://stedolan.github.io/jq</a>

   The response I got:

   <pre>
==> Installing dependencies for jq: oniguruma
==> Installing jq dependency: oniguruma
==> Downloading https://homebrew.bintray.com/bottles/oniguruma-6.1.1.el_capitan.
######################################################################## 100.0%
==> Pouring oniguruma-6.1.1.el_capitan.bottle.tar.gz
🍺  /usr/local/Cellar/oniguruma/6.1.1: 16 files, 1.3M
==> Installing jq
==> Downloading https://homebrew.bintray.com/bottles/jq-1.5_2.el_capitan.bottle.
######################################################################## 100.0%
==> Pouring jq-1.5_2.el_capitan.bottle.tar.gz
🍺  /usr/local/Cellar/jq/1.5_2: 18 files, 958K
   </pre>

0. Familiarize by reading the Tutorial at<br />
   In <a target="_blank" href="https://stedolan.github.io/jq/tutorial/">
   https://stedolan.github.io/jq/tutorial/</a>

0. According to the Manual at<br />
   In <a target="_blank" href="https://stedolan.github.io/jq/manual/">
   https://stedolan.github.io/jq/manual/</a>

0. Send request to obtain a token:

   A sample response:

   <pre>
*   Trying 192.30.253.117...
* Connected to api.github.co
{
  "id": 50266222,
  "url": "https://api.github.com/authorizations/50266222",
  "app": {
    "name": "token with delete repo scope",
    "url": "https://developer.github.com/v3/oauth_authorizations/",
    "client_id": "00000000000000000000"
  },
  "token": "123456be03fbe45f9a308501eb5da1ad2a98765",
  "hashed_token": "12345694b7717246613d2d66ebbe618937b93f7765ed8ec43da5931523f60726",
  "token_last_eight": "2ad98765",
  "note": "token with delete repo scope",
  "note_url": null,
  "created_at": "2016-09-15T16:38:00Z",
  "updated_at": "2016-09-15T16:38:00Z",
  "scopes": [
    "delete_repo"
  ],
  "fingerprint": null
}
* Connection #0 to host api.github.com left intact
   </pre>

<hr />

<a name="PersonalTokens"></a>

### Personal Token

To generate a personal access token for the command line:

1. Identify what scopes you need at:
   https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/

   PROTIP: Be restrictive. You can always generate another token with new scopes.

1. Visit <a target="_blank" href="https://github.com/settings/tokens">https://github.com/settings/tokens</a> (Settings > Developer Settings > Tokens)

   See <a target="_blank" href="https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line">this</a> 

1. In the Note field, type "CLI" and a summary of the scope.

1. Specify the scopes.

1. Copy the token generated and save it in a <strong>.github_secrets.sh</strong> shell script defining secrets, then save that to a private repository. Sample contents:

   <pre>GITHUB_USER="wilsonmar"
   GITHUB_TOKEN_CLI="10c169c2285c233c6df22366511648cac6e0f91f"</pre>
   
1. In a SAML organization, https://help.github.com/en/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on

   https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-scim

1. In the shell script doing work, read the token:

   <pre>source ~/.github_secrets.sh
   curl -u "$GITHUB_USERNAME:$GITHUB_TOKEN_CLI" https://api.github.com/user --include</pre>

   CAUTION: Don't echo secrets to the Terminal console.

   <a name="5000"></a>

   Notice in the response <tt>X-RateLimit-Limit: 5000</tt>.


<hr />

## New Authentication Preview

In <a target="_blank" href="https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api/">https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api</a>

https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/

   "web applications flow"

1. Establish a GitHub account for login use (if you don't already have one).

1. Check if your app idea is already in the https://github.com/marketplace

1. Build your app with endpoints:

   * <strong>redirect_url</strong>.
   * https://wilsonmar.github.io/githubcallback
   * https://wilsonmar.github.io/webhook
   <br /><br />

1. Pick a name

   Each GitHub App Names needs to be unique among all apps, and not contain underlines.
   But dashes are accepted. Add a number to the name for versioning.

   <pre>Explore-graphql1</pre>

1. Create a logo and drop it on the page.

1. Copy the App ID, Client ID, and Client secret and save it somewhere.

1. Visit it at https://github.com/apps/explore-graphql to Install it to your GitHub account.

1. Get <strong>client_id</strong> and client_secret for GitHub App at:

   https://github.com/settings/apps

1. Exchange code for an access token:

   POST https://github.com/login/oauth/access_token

1. Request a user's GitHub identity

   GET https://github.com/login/oauth/authorize

   -H application/vnd.github.machine-man-preview+json

1. Check for "401 Bad Credentials" when the app's authorization has been revoked.


## Resources

0. <a target="blank" href="https://developer.github.com/v3/repos/#create">
   https://developer.github.com/v3/repos/#create</a>

* http://amunsen.com (Mike Amunsen)

* http://groups.google.com/forum/#!forum/api-craft

* http://theapidesignbook.com 

* http://restfest.org
  annual conference in Greenville, SC late September
  records videos.

## Video

* https://www.youtube.com/watch?v=PPLorPKmHBA
   How To Interact With Github API Using JavaScript
   by Jun 11, 2016
   Theodore Anderson
   who types like a demon live using Angular

## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
