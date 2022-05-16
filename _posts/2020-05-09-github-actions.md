---
layout: post
title: "GitHub Actions (for free CI/CD)"
excerpt: "Run pipelines from within GitHub, for free (instead of Jenkins, CircleCI, etc.)"
tags: [GitHub]
date: "2020-05-09"
file: "github-actions"
image:
# github-mess-1900x500
  feature: https://user-images.githubusercontent.com/300046/81472787-5cc9e780-91b7-11ea-89a3-d7ddd2ab8b65.png
  credit: GitHubUniverse
  creditlink: https://www.youtube.com/watch?v=E1OunoCyuhY&t=237s
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This tutorial is a step-by-step <strong>hands-on deep yet succinct</strong> introduction to using GitHub's Actions to build at <a href="#JobCost">low cost</a>, quickly.

{% include whatever.html %}

GitHub Actions enables software development teams to configure Infrastructure as Code (IaC) for Continuous Integration <a target="_blank" href="https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions">for NodeJs</a> and a wide range of programming languages.

When developers can merge and deploy code many times in a single day, they can achieve Agile DevOps.

## Documentation

GitHub Actions Documentation is at
<a target="_blank" href="
   https://help.github.com/en/actions">
   https://help.github.com/en/actions</a>

<a target="_blank" href="https://help.github.com/en/actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions">
   Setup Continuous Integrations</a>

<a target="_blank" href="https://help.github.com/en/categories/automating-your-workflow-with-github-actions">
https://help.github.com/en/categories/automating-your-workflow-with-github-actions</a>

<a target="_blank" href="https://help.github.com/en/actions/configuring-and-managing-workflows">
https://help.github.com/en/actions/configuring-and-managing-workflows</a> 

<a target="_blank" href="https://help.github.com/en/actions/language-and-framework-guides">
https://help.github.com/en/actions/language-and-framework-guides</a>

<a target="_blank" href="https://help.github.com/en/actions/migrating-to-github-actions">
https://help.github.com/en/actions/migrating-to-github-actions</a>


## Actions in Jobs triggering Workflows

<a target="_blank" href="https://user-images.githubusercontent.com/300046/81487219-edd0ab00-9217-11ea-823d-b879aba42e28.jpg"><img alt="github-actions-diagram-550x368.jpg" width="550" height="368" src="https://user-images.githubusercontent.com/300046/81487219-edd0ab00-9217-11ea-823d-b879aba42e28.jpg"><br /><em>Click image to pop-up full-size display.</em></a>

DEFINITION: In GitHub Actions, a workflow is a configurable automated process made up of one or more <strong>jobs</strong>.

DEFINITION: Workflows are run (invoked) by <strong>Runners</strong> within a GitHub hosted environment or a self-hosted environment.

Actions are individual steps within a job.


## Run locally

Actually, you can run GitHub Actions locally on your laptop using <a target="_blank" href="https://github.com/nektos/act/">github.com/nektos/act</a>.

https://github.com/cplee/github-actions-demo


## Hello World

1. Create a new Git repo.


1. Create a <strong>.github</strong> folder within your repository.

   This follows the same convention as <tt>.circleci</tt>.

1. Create a <strong>workflows</strong> folder within your repository.

   Each workflow is defined by a yaml-formatted file.

   PROTIP: To start, rather than creating your own a yaml-formatted file to define each Workflow configuration.

   An example (using NodeJs) from https://github.com/cplee/github-actions-demo/blob/master/.github/workflows/main.yml

   <pre>name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
    - run: npm install
    - run: npm test
   </pre>

1. To view the status of workflows, press the <strong>Actions</strong> tab at the top menu.

   PROTIP: To get to the top of the screen to see GitHub's Tabs, on macOS, press command + up_arrow.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/81493305-8a1ca100-925c-11ea-9e4f-7fbadf800585.png"><img alt="github-actions-menu-939x225.jpg" src="https://user-images.githubusercontent.com/300046/81493305-8a1ca100-925c-11ea-9e4f-7fbadf800585.png"></a>

1. Click "Set up a workflow yourself" or select a <strong>template</strong> containing pre-populated yml files from various people.

   PROTIP: You can create and share templates for use by others in your own organization. See <a target="_blank" href="https://help.github.com/en/actions/hosting-your-own-runners">https://help.github.com/en/actions/hosting-your-own-runners</a>
 

1. PROTIP: Protect the master branch so it can't be inadvertently deleted or broken.

1. PROTIP: Setup required reviews so that any pull requests are double checked by teammates.



## Community

<a target="_blank" href="
https://github.community/t5/GitHub-Actions/bd-p/actions">
https://github.community/t5/GitHub-Actions/bd-p/actions</a>

## Sample NPM workflow

1. Let's look at a yaml workflow file used by GitHub Actions.

   <a target="_blank" href="
   https://github.com/wilsonmar/ci-with-actions/blob/master/github-actions-for-ci/.github/workflows/nodejs.yml">
   https://github.com/wilsonmar/ci-with-actions/blob/master/github-actions-for-ci/.github/workflows/nodejs.yml</a>

   A workflow is a unit of automation from start to finish, including the definition of what triggers the automation, what environment or other aspects should be taken account during the automation, and what should happen as a result of the trigger.

1. See https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions


   <a name="OnAction"></a>

   ### on: scheduled actions

   `on:` specifications inside that file define a scheduled time when the workflow is <strong>triggered</strong>. 

   Alternately, workflows can be triggered by events in or outside GitHub, such as a git push or a scheduled time.

   The default trigger is to run on every push to every branch: 

   <pre>on: [push]
   </pre>

   This example is triggered upon a push to either the master branch or a release branch:

   <pre>on:
  push:
    branches:
    - master
    - release/*
   </pre>

   In this example, the workflow is triggered to run the master branch anytime there's a push or pull request.

   <pre>on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]
   </pre>

   PROTIP: To set a workflow (using <a target="_blank" href="https://crontab.guru/">crontab specifications</a>) to run at 2:00 AM UTC every day, 1=Monday to 5=Friday:

   <pre>on:
  schedule:
  - cron: "0 2 * * 1-5"
   </pre>

   1.  Minute   0 to 59, or * (no specific value)
   2.  Hour  0 to 23, or * for any value. All times UTC.
   3.  Day of the month  1 to 31, or * (no specific value)
   4.  Mont  1 to 12, or * (no specific value)
   5.  Day of the wee  0 to 7 (0 and 7 both represent Sunday), or * (no specific value)


   ### jobs: block

   Workflows are made of jobs, and the template workflow defines a single job with the identifier build. 

   <pre>jobs:
  build:
    name: 'Build'
    runs-on: ubuntu-latest
    </pre>

   Several `jobs:` blocks define different sections of a Workflow.

   
   ### runs-on: job host environment

   Every job needs a specific <strong>host machine</strong> specified by the <tt>runs-on:</tt> field. This template workflow specifies using the latest version of Ubuntu, a Linux-based operating system.

   <a target="_blank" href="https://help.github.com/articles/virtual-environments-for-github-actions">Others</a>:

   * ubuntu-latest, ubuntu-18.04, or ubuntu-16.04
   * windows-latest or windows-2019
   * macos-latest or macos-10.15
   <br /><br />

   The above specify the <strong>Runner</strong> within a GitHub hosted environment or a self-hosted environment.   

   Ubuntu contains Docker.

   Alternately,

   `runs-on: ${{ matrix.os }}` refers to the "os" alternatives in the strategy section.


   <a name="JobMatrix"></a>

   ### job strategy: matrix

   A Job Matrix is designed to build and test code with different environments and configurations.

   <pre>   strategy:
      matrix:
        node-version: [10.x, 12.x]
        os: [ubuntu-latest, windows-latest, macOS-latest]
   </pre>

   PROTIP: The code above defines variable `${{ matrix.node-version }}` which resolves to "10.x", or "12.x" when referenced in the set of steps below, which are repeated automatically for each node-version specified.

   CAUTION: Reference the list of releases for the language you're using, such as <a target="_blank" href="https://nodejs.org/en/about/releases/">this one for NodeJs</a>.

   You can also vary the host operating system environment:

   <pre>   strategy:
      matrix:
        node-version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest, macOS-latest]
   </pre>

   The above would generate 3 x 3 = 9 job runs.

   PROTIP: Different jobs in the matrix are run simultaneously.


   <a name="JobCost"></a>

   ### Cost of GitHub Actions jobs

   GitHub charges on a "pay as you go" basis two ways: by the minute used by each job and what operating system:

   ![github-actions-cost-855x383](https://user-images.githubusercontent.com/300046/81502844-ba386400-929d-11ea-9a01-39051244e3d1.png)

   There are <a target="_blank" href="https://help.github.com/en/actions/getting-started-with-github-actions/about-github-actions">limits on the number of concurrent jobs</a>:
   Enterprise licensees have a limit of 180 jobs, of which 50 are macOS jobs, but only 5 macOS jobs for others.
   Even free accounts get up to 20 concurrent jobs. 40 for those who pay $4 a month.
   Each team gets 60 jobs at a time.

   PROTIP: A <a href="#JobMatrix">job matrix</a> can generate a maximum of 256 jobs per workflow run. 
   This limit also applies to self-hosted runners.


   ### Steps

   Each job is made up of one or more steps. In the sample template:

   <pre>    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
    </pre>

   `-` (a dash) precedes each action.


   <a name="Echo"></a>

   ### Echo

   Issue a message by running an echo command:

   <pre>jobs:
   build:
      steps:
        name: Run one-liner
        run: echo Hello, world!
   </pre>

   Notice no quote characters.


   <a name="ActionsCoding"></a>

   ### - uses: step in Actions coding

   `- uses: actions/checkout@v2`

   `actions` defines an action from <a target="_blank" href="https://github.com/marketplace">GitHub's public Marketplace</a> of <a target="_blank" href="https://github.com/marketplace?type=actions">Actions</a>. 

   `checkout@v2` retrieves the latest (such as v2.1.0) in <a target="_blank" href="https://github.com/actions/checkout/releases">https://github.com/actions/checkout/releases</a>. The action's home page is at https://github.com/marketplace/actions/checkout

   PROTIP: Monitor when versions are updated. When an upgrade is available, search through GitHub repos to see which ones should be upgraded.


   ### - name: step in Actions coding

   Because the Node.js version needs to be specified several times:

   ### - run: step in Actions coding

   <pre>    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
   </pre>

   `npm ci` was introduced in NodeJs 5.1 (2018) in place of "npm install" (or yarn) for <a target="_blank" href="https://www.youtube.com/watch?v=-yFXAYrUjlo">faster</a> downloading and installation of package dependencies (based on specifications in the package.json file) into the node_modules folder.

   BTW the new GitHub Package Registry only supports npm as a client for JavaScript packages (at least for now).

   `npm run build` runs the build field defined in the <a target="_blank" href="https://docs.npmjs.com/misc/scripts">scripts field</a> within package.json.

   BTW npm build no longer exists as of 2019.

   `--if-present` is an optional flag to avoid exiting with a non-zero exit code when the script is undefined.

   `npm test` executes all tests defined.

   PROTIP: Consider separate test jobs to separate build from test details.


   ### build and publish 

   PROTIP: Include where you're publishing if you're publishing to the gpr (Google Package Registry) as well as NPM.

   <pre>  jobs:
   build:
      ...
   publish-npm:
      ...
   publish-gpr:
   </pre>

   ### Slack notification

1. Post to a Slack channel when a new issue is added on GitHub:

   <pre>  name: Slack Issue
    on:
      issues:
         types: [opened]
  job:
     post_slack_message:
       runs-on: ubuntu-latest
       steps:
         - uses: rtCamp/action-slack-notify@2.0.0
         - env:
             SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
             SLACK_USERNAME: memyselfandi
             SLACK_CHANNEL: gh-issues
   </pre>

   Clear-text of secrets are input in the <tt>Security</tt> tab.

   ### env: ci: true

   <pre>   env:
   ci: true
   </pre>

## Sample repo for GitHub's Tutorial

A sample repo was provided in <a target="_blank" href="https://www.youtube.com/watch?v=cyh8DU2QPzg">
VIDEO: Continuous integration with GitHub Actions</a> [1:55:24] at GitHub Satellite 2020 on 7 May 2020

   * Create and use multiple, customized workflows
   * Implement a unit testing framework using GitHub Actions
   * Use multiple jobs in a workflow and pass artifacts between jobs
   * Configure a repository to work in conjunction with GitHub Actions workflows and your team's workflow.
   <br /><br />

   curl https://api.github.com/octocat

1. Go to and fork
   
   <a target="_blank" href="https://github.com/githubsatelliteworkshops/ci-with-actions">https://github.com/githubsatelliteworkshops/ci-with-actions</a>

   BLAH: The pdf in the link satellite-2020-workshops-ci-with-actions.pdf
   does not have links enabled.

   * @pprmk, Sr. Implementation Engineer
   * @dechyper, Solutions Architect
   * @iamhughes, Sr. DevOps Engineer
   <br /><br />

1. Throughout the course, return to the list of course agenda at:

   <a target="_blank" href="https://lab.github.com/githubtraining/github-actions:-continuous-integration">https://git.io/Jewra which goes to<br />
   https://lab.github.com/githubtraining/github-actions:-continuous-integration</a>

1. Click "Start free course". You may be asked to login GitHub.
1. [20:01] Choose either "Public" or "Private", then "Begin GitHub Actions: Continuous Integration".
1. [20:35] Wait for message "you can start your first step". Scroll down to notice the other courses.
1. Among the <a target="_blank" href="https://lab.github.com/githubtraining/github-actions:-continuous-integration">16 steps</a>:

   1. Use a templated workflow
   Create a pull request with a templated workflow

   1. Run a templated workflow
   Wait for GitHub to run the templated workflow and report back the results

   1. Add your first test
   Add your first test script for CI to pick up

   1. Read an Actions log
   Tell the bot which test is failing so we can fix it

   1. Fix the test
   Edit the file that's causing the test to fail

   1. Share the workflow with the team
   Merge the pull request containing your first workflow so the entire team can use it


   1. Create a custom GitHub Actions workflow
   Edit the existing workflow with new build targets

   1. Target a Windows environment
   Edit your workflow file to build for Windows environments

   1. Use multiple jobs
   Edit your workflow file to separate build and test jobs

   1. Run multiple jobs
   Wait for the result of multiple jobs in your workflow

   1. Upload a job's build artifacts
   Use the upload action in your workflow file to save a job's build artifacts

   1. Download a job's build artifacts
   Use the download action in your workflow file to access a prior job's build artifacts

   1. Share the improved CI workflow with the team
   Merge the pull request with the improved workflow

   1. Automate the review process
   Add a new workflow file to automate the team's review process

   1. Use an action to automate pull request reviews
   Use the community action in your new workflow

   1. Create an approval job in your new workflow
   In your new workflow file, create a new job that'll use the community action

   1. Automate approvals
   Use the community action to automate part of the review approval process

   1. Use branch protections
   Complete the automated review process by protecting the master branch

1. [29:34] Click "Start: Use a templated workflow" for the Issue#1 page on your own repo such as this (but with your name instead):

   <tt>https://github.com/wilsonmar/github-actions-for-ci/issues/1</tt>

1. [30:58] Click Actions tab, click "Set up this workflow" or navigate within the repo's <tt>.github/workflows</tt> folder to edit file <tt>nodejs.yml</tt> (the Actions file).

1. Copy "Paste "CI for Node" into your invisible Clipboard.
1. [31:29] Click "Start commit" to a new branch.
1. [32:02] Commit new file.
1. [32:05] Double-click to select all of the suggested name to Paste "CI for Node" insted. Click "Create pull request".
1. [32:22] "Review required" and "Merging is blocked" apprears until ...
1. [32:44] Click on "Details" or Actions tab to see jobs running. Click on a build.
1. [33:11] Click "Pull Requests" tab to return to "CI for Node".

   Vocabulary is defined by the bot.


1. [34:08] Add your first test: Click "Pull requests" tab. Click "Add Jest tests". Click "Merge pull request".
1. [34:53] Click "Delete branch".

   ### Read Actions Log

1. [35:06] Click on "next step" (created by the bot).
1. [35:42] Navigate to the log output: Click on "Actions" tab. 
1. [36:22] Click the latest "CI for Node" run (at the top. Click a build. Identify a name of a failing test with red "x". Expand it by clicking it. 
1. [36:48] Identify the name "Initialize with two players" and copy it.
1. [37:23] To "Pull requests". In the Comment paste the name of the failing test. Click "Comment".

   ### Fix the test

1. [37:50] Click "Commit suggestion" of "Update src/game.js". 
1. [38:10] Click "Commit Changes". 
1. [38:47] Refresh screen until bot makes "Changes approved".

   ### Share

1. [39:34] Click "Merge pull request". "Confirm Merge". "Delete branch".

1. [56:11] https://github.com/wilsonmar/github-actions-for-ci/issues/1


   ### Step 7: (Work Session 2) Create a custom GitHub Actions workflow

1. [1:06:43] Click "Resume".




## Create Badge

Within Actions tab:

<img width="332" alt="github-create-status-badge-664x766" src="https://user-images.githubusercontent.com/300046/81487058-10ae8f80-9217-11ea-8968-e71c5da077cf.png">


## References


https://www.youtube.com/watch?v=T6sW1Dk9B4E
What every GitHub user should know about VS Code - GitHub Satellite 2020
24:08


<a target="_blank" href="https://www.youtube.com/watch?v=cyh8DU2QPzg">
Continuous integration with GitHub Actions</a> 
presented at GitHub Satellite 2020
7 May, 2020

[2] <a target="_blank" href="https://www.youtube.com/watch?v=0ahRkhrOePo">
Advanced GitHub Actions: workflows for production grade CI/CD - GitHub Universe 2019</a> 

<a target="_blank" href="https://www.youtube.com/watch?v=GldpUY3bGr8">
GitHub Actions Now Supports CI/CD | Getting Started</a> 
Hong Ly

<a target="_blank" href="https://www.youtube.com/watch?v=0tMkRSdp-Go">
GitHub Actions (CI/CD Flow)</a> 
Coding Tech

<a target="_blank" href="https://www.youtube.com/watch?v=eB0nUzAI7M8">
5 Ways to DevOps-ify your App - Github Actions Tutorial</a> 
Fireship

<a target="_blank" href="https://www.youtube.com/watch?v=e_F_4OB9Mg4">
Introduction to GitHub Actions [38:46]</a> 
by BlackMarbleLtd CEO @RichardFennell references
<a target="_blank" href="https://github.com/rfennell/ActionPlayground/blob/master/src/helloworld.ts">https://github.com/rfennell/ActionPlayground/blob/master/src/helloworld.ts</a> (Typescript)

<a target="_blank" href="https://www.youtube.com/watch?v=N_-Cu9_2YAA">
Introducing GitHub Package Registry</a> 
GitHub

<a target="_blank" href="https://www.youtube.com/watch?v=Tl4mbL45PKU">
GitHub Actions: Open Source Workflow Automation by Bas Peters</a> 
DATA MINER

<a target="_blank" href="https://www.youtube.com/watch?v=5KMWrd_7a-A">
Github Actions | Open CICD Platform by Github</a> 
by Tech Primers

https://www.youtube.com/watch?v=F3wZTDmHCFA
GitHub Actions: How to Set Up a Simple Workflow
CodingWithChandler

https://www.youtube.com/watch?v=2Ym94MfScZ4
GitHub Actions CI/CD Workflow for a Laravel Application - Part 1: Introduction
Oh See Media


https://coletiv.com/blog/how-to-setup-continuous-integration-and-deployment-workflows-for-reactjs-using-github-actions/


<a target="_blank" href="https://www.brighttalk.com/webcast/18268/406190">
VIDEO: Unlocking the Cloud Operating Model with GitHub Actions</a>
by Steve Winton, Senior Partner Engineer, GitHub

<a target="_blank" href="https://github.com/actionsdesk">
https://github.com/actionsdesk</a>


https://dev.to/github/export-github-issues-commit-history-and-more-github-artifact-exporter-2ok6
Export GitHub Issues, Commit History and More | GitHub Artifact Exporter 
by Davide 'CoderDave' Benvegnù

* <a target="_blank" href="https://www.youtube.com/watch?v=R8_veQiYBjI">VIDEO</a> "GitHub Actions Tutorial - Basic Concepts and CI/CD Pipeline with Docker" by TechWorld with Nana

* <a target="_blank" href="https://www.youtube.com/watch?v=0tMkRSdp-Go">VIDEO</a>: Visual Studio Toolbox at Microsoft: 

* <a target="_blank" href="https://www.youtube.com/watch?v=X3F3El_yvFg">VIDEO</a>: Automatic Deployment With Github Actions
Traversy Media


https://sanderknape.com/2021/01/go-crazy-github-actions/

## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
