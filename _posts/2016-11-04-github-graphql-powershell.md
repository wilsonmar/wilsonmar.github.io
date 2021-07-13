---
layout: post
title: "GitHub GraphQL PowerShell Module"
excerpt: "How I got in front of the GraphQL and PowerShell parade."
tags: [GitHub, API, GraphQL, PowerShell]
date: "2016-11-04"
file: "github-graphql-powershell"
image:
# banner parade graphql 1900x500-889kb
  feature: https://cloud.githubusercontent.com/assets/14143059/20024011/3339d872-a2a9-11e6-934d-4117df9c643c.jpg
  credit: DISboards
  creditlink: http://www.disboards.com/threads/the-i-survived-sdls-opening-day-tr.3519791/page-5
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

[GraphQL](/graphql/) is eating REST API, and
GitHub is at the front of the parade of famous users.

GitHub has two API's, both considered industry-standards others would do well to emulate:

   * [GitHub HATEOS-based REST API, (my BFF last year)](/github-api/) 

   * GitHub GraphQL (this article)

   I couldn't find a PSGallery module for referencing GitHub's GraphQL,
   so I set out to create one when that's what Karol Kaczmarek
   suggested I do.

<hr />

## GitHub's GraphQL

0. DONE: Sign up at https://github.com/prerelease/agreement

0. Contact Early Support team

   https://github.com/contact?form%5Bsubject%5D=Early+Access+Program


## GraphQL based on REST

0. What's the name?

   "PowerShellForGitHubGraphQL" ???

   "PowerShellForGitHubQL" ???

0. Download as zip

   This is based on the PowerShell module which calls GitHub REST APIs in PowerShell:

   <a target="_blank" href="https://github.com/powershell/PowerShellForGitHub">
   https://github.com/powershell/PowerShellForGitHub</a>

0. Modify all "PowerShellForGitHub" to "PowerShellForGitHubGraphQL".

   * README.md

   * LICENSE

   * See http://www.appveyor.com/docs/appveyor-yml

   * .psd1 module manifest
   * .psm1 

0. Rename modules:

   * GitHubAnalytics.psm1 to GitHubQLAnalytics.psm1 ???

0. Get agreement from existing authors.

   Karol: Make them commiters? If so, mention contact info in README?


0. Consolidate:

   * GitHubTokens.psm1
   * etc.
   <br /><br />

   https://github.com/pcgeek86/PSGitHub by Trevor Sullivan

   * .github/CONTRIBUTING.md
   * .github/ISSUE_TEMPLATE.md
   * .github/PULL_REQUEST_TEMPLATE.md
   * .gitattributes
   * .gitignore
   * TabCompleters/GitHub.Repositories.ps1
   <br /><br />

   https://github.com/Iristyle/Posh-GitHub written Ethan J. Brown
   installed by Chocolately.

   * .editorconfig
   * GitHub-Mark.png
   * powershell_logo.png
   * Posh-GitHub-Profile-readme.md

0. Consolidate modules:

   TODO: Merge from other repos?

   https://github.com/pcgeek86/PSGitHub by Trevor Sullivan

   * Classes/GitHubGist.ps1
   * Classes/GitHubIssue.ps1
   * Classes/GitHubRepository.ps1
   * Functions/Private/Get-GitHubToken.ps1
   * Functions/Private/Invoke-GitHubApi.ps1
   * Functions/Public/Find-GitHubRepository.ps1
   * Functions/Public/Get-GitHubAssignee.ps1
   * Functions/Public/Get-GitHubAuthenticatedUser.ps1
   * Functions/Public/Get-GitHubGist.ps1
   * Functions/Public/Get-GitHubMilestone.ps1
   * Functions/Public/New-GitHubGist.ps1
   * Functions/Public/New-GitHubIssue.ps1
   * Functions/Public/New-GitHubRepository.ps1
   * Functions/Public/Remove-GitHubGist.ps1
   * Functions/Public/Remove-GitHubRepository.ps1
   * Functions/Public/Save-GitHubGist.ps1
   * Functions/Public/Set-GitHubAuthenticatedUser.ps1
   * Functions/Public/Set-GitHubGist.ps1
   * Functions/Public/Set-GitHubIssue.ps1
   * Functions/Public/Set-GitHubRepository.ps1
   * Functions/Public/Set-GitHubToken.ps1
   * Functions/Public/Test-GitHubAssignee.ps1
   * Tests/Unit/psgithub.tests.ps1
   <br /><br />

   https://github.com/davidobrien1985/githubconnect by David O'Brien

   * Public/authentication.ps1 
   * Public/branch.ps1
   * Public/organisation.ps1
   * Public/pullrequest.ps1
   * Public/repository.ps1
   * Public/teams.ps1
   * Public/webhook.ps1
   <br /><br />

   https://github.com/Iristyle/Posh-GitHub written Ethan J. Brown
   installed by Chocolately.

   * <strong>Posh-GitHub-Profile.ps1</strong>

0. Get Appyveyor build project:

   https://www.appveyor.com/

0. Improve README

   Mention https://www.appveyor.com/
   build server in the cloud

   Mention https://www.powershellgallery.com/


0. Define License:

   https://github.com/PowerShell/PowerShellForGitHubGraphQL/blob/master/LICENSE

0. Define README:

   https://github.com/PowerShell/PowerShellForGitHubGraphQL/blob/master/README.md

   Continue from Posh-GitHub:


0. Define repo at:

   https://github.com/PowerShell/PowerShellForGitHubGraphQL/

   Title: Microsoft PowerShell wrapper for GitHub's GraphQL API

   TODO: Karol?

0. Construct for PSGallery:

   Follow http://www.systemcentercentral.com/day-19-creating-online-powershellget-repository/

   <amp-img alt="ps package management 650x357-62kb.png" width="650" height="357" src="https://cloud.githubusercontent.com/assets/14143059/20024512/c423ffea-a2ac-11e6-839e-b649c3b49302.png"></amp-img>
   <a target="_blank" href="https://www.simple-talk.com/sysadmin/powershell/managing-packages-using-windows-powershell/">
   From: PowerShell Package Management Archictecture 2016</a> 

0. Register-ModuleSource - Add to PSGallery:


0. List the many fields in metadata for module PowerShellForGitHubGraphQL:

   <pre>
   $response.GetEnumerator() | ?{ $_.Name -eq "PowerShellForGitHubGraphQL" } | format-list
   </pre>

   The response:

   <pre>
Name                       : PowerShellForGitHubGraphQL
Version                    : 0.1.0
Type                       : Module
Description                : PowerShell wrapper for GitHub GraphQL API
Author                     : Microsoft Corporation
CompanyName                : PowerShellTeam
Copyright                  : (c) 2016 Microsoft Corporation. All rights 
                             reserved.
PublishedDate              : 7/27/16 8:33:44 PM
InstalledDate              : 
UpdatedDate                : 
LicenseUri                 : https://github.com/PowerShell/PowerShellForGitHubGraphQL/
                             blob/master/LICENSE
ProjectUri                 : https://github.com/PowerShell/PowerShellForGitHubGraphQL
IconUri                    : 
Tags                       : {GitHub, GraphQL, API, PowerShell, PSModule}
Includes                   : {Cmdlet, Workflow, Function, DscResource...}
PowerShellGetFormatVersion : 
ReleaseNotes               : 
Dependencies               : {}
RepositorySourceLocation   : https://www.powershellgallery.com/api/v2/
Repository                 : PSGallery
PackageManagementProvider  : NuGet
AdditionalMetadata         : {developmentDependency, FileList, 
                             isLatestVersion, IsPrerelease...}
   </pre>

<hr />

## Publicity

https://github.com/chentsulin/awesome-graphql


<hr />

## New README

### Environment Variables

   Cmdlets are set to use the following environment variables as defaults

   `GITHUB_OAUTH_TOKEN` - Required for all cmdlets - use New-GitHubOAuthToken to establish a token and automatically set this variable for the current user
   
   `GITHUB_USERNAME` - Can be optionally set to specify a global default user - use the Set-GitHubUserName helper

   `GITHUB_ORGANIZATION` - Can be optionally set to specify a global default organization - use the Set-GitHubOrganization helper

### Last Command Output

   A Powershell object created from the incoming JSON is always stored in the variable 
   `$GITHUB_API_OUTPUT` after each call to the GitHub API



## More on API Microservices #

This is one of a series:

{% include api_links.html %}

## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
