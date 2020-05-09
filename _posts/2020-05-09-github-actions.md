---
layout: post
title: "GitHub Actions (for free CI/CD)"
excerpt: "Build "
tags: [GitHub]
date: "2020-05-09"
file: "github-actions"
image:
# github-mess-1900x500
  feature: https://user-images.githubusercontent.com/300046/81472787-5cc9e780-91b7-11ea-89a3-d7ddd2ab8b65.png
  credit: GitHubUniverse
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This tutorial is a step-by-step <strong>hands-on deep yet succinct</strong> introduction to using GitHub's Actions to build at low cost, quickly.

   GitHub Actions gives software development teams "world-class" CI capabilities, helping developers merge and deploy code many times in a single day to achieve Agile DevOps, for NodeJs and a wide range of programming languages.


## Sample repo

A sample repo is described in <a target="_blank" href="https://www.youtube.com/watch?v=cyh8DU2QPzg">
VIDEO: Continuous integration with GitHub Actions</a> [1:55:24] at GitHub Satellite 2020 on 7 May 2020

   * Create and use multiple, customized workflows
   * Implement a unit testing framework using GitHub Actions
   * Use multiple jobs in a workflow and pass artifacts between jobs
   * Configure a repository to work in conjunction with GitHub Actions workflows and your team's workflow.
   <br /><br />

   Topics:

   * Configuration Infrastructure as Code (IaC) for Continuous Integration
   * GitHub Actions in a Nutshell
   * Actions vs Workflow
   * Actions Definition and Explanation
   * Lay of the Land
   <br /><br />


## Actions in Jobs triggering Workflows

1. Create a <strong>workflows</strong> folder within your repository.

   A workflow is a configurable automated process made up of one or more <strong>jobs</strong>.

   There are <a target="_blank" href="https://help.github.com/en/actions/getting-started-with-github-actions/about-github-actions">limits on the number of concurrent jobs</a>:
   Enterprise licensees have a limit of 180 jobs, of which 50 are macOS jobs, but only 5 macOS jobs for others.
   Even free accounts get up to 20 concurrent jobs. 40 for those who pay $4 a month.
   Each team gets 60 jobs at a time.

   A yaml-formatted file defines each Workflow configuration.

1. Workflows are <strong>triggered</strong> by events in or outside GitHub or at a scheduled time.

   Actions are individual steps within a workflow, executed from the new "Actions" tab that now appears on all GitHub repositories.

   Individual actions combine into a job.

   Templates or customize actions

1. Workflows are run by <strong>Runners</strong> within a GitHub hosted environment or a self-hosted environment.

   A <strong>job matrix</strong> can generate a maximum of 256 jobs per workflow run. 
   This limit also applies to self-hosted runners.


1. Documentation

   https://help.github.com/en/actions

   https://help.github.com/en/actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions


   curl https://api.github.com/octocat

1. Go to and fork
   
   https://github.com/githubsatelliteworkshops/ci-with-actions

   BLAH: The pdf in the link satellite-2020-workshops-ci-with-actions.pdf
   does not have links enabled.

   * @pprmk, Sr. Implementation Engineer
   * @dechyper, Solutions Architect
   * @iamhughes, Sr. DevOps Engineer
   <br /><br />

1. Go to

   https://git.io/Jewra which goes to<br />
   https://lab.github.com/githubtraining/github-actions:-continuous-integration

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

   https://github.com/wilsonmar/github-actions-for-ci/issues/1

1. [30:58] Click Actions tab, click "Set up this workflow" or navigate within the repo's <tt>.github/workflows</tt> folder to edit file <tt>nodejs.yml</tt> (the Actions file).
1. Copy "Paste "CI for Node" into your invisible Clipboard.
1. [31:29] Click "Start commit" to a new branch.
1. [32:02] Commit new file.
1. [32:05] Double-click to select all of the suggested name to Paste "CI for Node" insted. Click "Create pull request".
1. [32:22] "Review required" and "Merging is blocked" apprears until ...
1. [32:44] Click on "Details" or Actions tab to see jobs running. Click on a build.
1. [33:11] Click "Pull Requests" tab to return to "CI for Node".

   <a name="Vocabulary"></a>

   ### Vocabulary

   The on: field is what tells GitHub Actions when to run. In this case, we're running the workflow anytime there's a push.

   The jobs: block defines the core component of an Actions workflow. Workflows are made of jobs, and our template workflow defines a single job with the identifier build. 

   Every job also needs a specific host machine on which to run, the runs-on: field is how we specify it. The template workflow is running the build job in the latest version of Ubuntu, a Linux-based operating system.

   Job: A job is a section of the workflow, and is made up of one or more steps. In this section of our workflow, the template defines the steps that make up the build job.

   Workflow: A workflow is a unit of automation from start to finish, including the definition of what triggers the automation, what environment or other aspects should be taken account during the automation, and what should happen as a result of the trigger.

   Step: A step represents one effect of the automation. A step could be defined as a GitHub Action, or another unit, like printing something to the console.

   Action: A GitHub Action is a piece of automation written in a way that is compatible with workflows. Actions can be written by GitHub, by the open source community, or you can write them yourself!

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

1. [39:34] Click "Merge pull request".
1. Delete branch.

   ### Create a custom GitHub Actions workflow

1. [56:00] 

   ### Learning Lab for you

1. Go to 

   https://lab.github.com/

1. Click "Find your first course".
1. Click "Start learning with GitHub Learning Lab".
1. Click "Accept"

   https://github.com/settings/installations/133009


Templated workflow

Actions Log


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
Introdution to GitHub Actions [38:46]</a> 
by BlackMarbleLtd CEO @RichardFennell

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





## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
