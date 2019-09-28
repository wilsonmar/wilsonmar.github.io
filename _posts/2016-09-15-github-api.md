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

## Brew install curl #

The cURL utility is used by many documents when describing REST API.

0. On a Mac, instead of downloading cURL from 
   `http://curl.haxx.se/download.html`
   and using `tar -zxf` on the downloaded file, 
   use Homebrew from a Terminal:

   <tt><strong>
   brew install curl
   </strong></tt>

   NOTE: Play with curl options on-line using
   <a target="_blank" href="http://hurl.it">http://hurl.it</a>

0. Get information about user or organization,
   including HTTP headers:

   <tt><strong>
   curl --include https://api.github.com/users/wilsonmar
   </strong></tt>

   Among response headers, notice the version:

   <pre>
   X-GitHub-Media-Type: github.v3
   </pre>

   Switch to an internet browser (Chrome) to view the API documentation at<br />
   <a target="blank" href="https://developer.github.com/v3/">
   https://developer.github.com/v3</a>


   Near the bottom of the response includes contact and stats:

   <pre>
  "name": "Wilson Mar",
  "company": "JetBloom",
  "blog": "wilsonmar.github.io",
  "location": null,
  "email": "wilsonmar@gmail.com",
  "hireable": true,
  "bio": null,
  "public_repos": 103,
  "public_gists": 9,
  "followers": 24,
  "following": 48,
}
   </pre>

   <a name="HATEOS"></a>

   In the middle of the response are 
   HATEOAS (Hypermedia as the Engine of Application State) responses
   <strong>specific to the user</strong>:

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

   PROTIP: As <a target="_blank" href="https://spring.io/understanding/HATEOAS">
   this notes</a>, including hypermedia links with the responses
   means programs are not dependent on a fixed specification 
   staged somewhere else on the website, on another website, or perhaps distributed by email.
   The list of links dynamically provide guidance on what calls can be made.
   So less errors.

## Brew install jq JSON processor #

PROTIP: In order for scripts to be "idempotent" 
(create the same conditions no matter how many times it's run),
scripts need to know the data of a specific key within
the JSON returned from API calls.

0. A sample call to obtain data values from JSON returned
   into an environment variable:

   <pre>
   HASH=$(curl https://api.github.com/users/wilsonmar | jq ".starred_url")
   echo "HASH=$HASH"
   </pre>

   "jq" is a JSON processor jq for Mac OSX, Windows, and Linux.

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


## Verify Token #

0. Verify the TOKEN:

   A bad response:

   <pre>
&LT; Authorization: token meh
&LT; Status: 401 Unauthorized
...
{
  "message": "Bad credentials",
  "documentation_url": "https://developer.github.com/v3"
}
   </pre>

   A sample good response:

   <pre>
&LT; Status: 200 OK
&LT; X-OAuth-Scopes: delete_repo
{
  "current_user_url": "https://api.github.com/user",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
  "authorizations_url": "https://api.github.com/authorizations",
  "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
  "emails_url": "https://api.github.com/user/emails",
  "emojis_url": "https://api.github.com/emojis",
  "events_url": "https://api.github.com/events",
  "feeds_url": "https://api.github.com/feeds",
  "followers_url": "https://api.github.com/user/followers",
  "following_url": "https://api.github.com/user/following{/target}",
  "gists_url": "https://api.github.com/gists{/gist_id}",
  "hub_url": "https://api.github.com/hub",
  "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
  "issues_url": "https://api.github.com/issues",
  "keys_url": "https://api.github.com/user/keys",
  "notifications_url": "https://api.github.com/notifications",
  "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
  "organization_url": "https://api.github.com/orgs/{org}",
  "public_gists_url": "https://api.github.com/gists/public",
  "rate_limit_url": "https://api.github.com/rate_limit",
  "repository_url": "https://api.github.com/repos/{owner}/{repo}",
  "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
  "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
  "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
  "starred_gists_url": "https://api.github.com/gists/starred",
  "team_url": "https://api.github.com/teams",
  "user_url": "https://api.github.com/users/{user}",
  "user_organizations_url": "https://api.github.com/user/orgs",
  "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
  "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
}
   </pre>

## Create repo #

   <pre>
   </pre>

## Status of repo #

   <pre>
{
  "id": 68240593,
  "name": "git-sample-repo",
  "full_name": "wilsonmar/git-sample-repo",
  "owner": {
    "login": "wilsonmar",
    "id": 300046,
    "avatar_url": "https://avatars.githubusercontent.com/u/300046?v=3",
    "gravatar_id": "",
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
    "type": "User",
    "site_admin": false
  },
  "private": false,
  "html_url": "https://github.com/wilsonmar/git-sample-repo",
  "description": "Automated Git repo from run using git-sample-repo in https://github.com/wilsonmar/git-utilities.",
  "fork": false,
  "url": "https://api.github.com/repos/wilsonmar/git-sample-repo",
  "forks_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/forks",
  "keys_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/teams",
  "hooks_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/hooks",
  "issue_events_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/issues/events{/number}",
  "events_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/events",
  "assignees_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/assignees{/user}",
  "branches_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/branches{/branch}",
  "tags_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/tags",
  "blobs_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/languages",
  "stargazers_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/stargazers",
  "contributors_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/contributors",
  "subscribers_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/subscribers",
  "subscription_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/subscription",
  "commits_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/contents/{+path}",
  "compare_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/merges",
  "archive_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/downloads",
  "issues_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/issues{/number}",
  "pulls_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/labels{/name}",
  "releases_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/releases{/id}",
  "deployments_url": "https://api.github.com/repos/wilsonmar/git-sample-repo/deployments",
  "created_at": "2016-09-14T20:27:01Z",
  "updated_at": "2016-09-14T20:27:01Z",
  "pushed_at": "2016-09-14T21:09:18Z",
  "git_url": "git://github.com/wilsonmar/git-sample-repo.git",
  "ssh_url": "git@github.com:wilsonmar/git-sample-repo.git",
  "clone_url": "https://github.com/wilsonmar/git-sample-repo.git",
  "svn_url": "https://github.com/wilsonmar/git-sample-repo",
  "homepage": null,
  "size": 1,
  "stargazers_count": 0,
  "watchers_count": 0,
  "language": null,
  "has_issues": true,
  "has_downloads": true,
  "has_wiki": false,
  "has_pages": false,
  "forks_count": 0,
  "mirror_url": null,
  "open_issues_count": 0,
  "forks": 0,
  "open_issues": 0,
  "watchers": 0,
  "default_branch": "develop",
  "network_count": 0,
  "subscribers_count": 1
}
   </pre>   

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
