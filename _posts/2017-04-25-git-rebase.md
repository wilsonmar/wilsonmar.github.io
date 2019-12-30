---
layout: post
title: "Git Rebase"
excerpt: "Make it appear that you only made one edit before pushing to the team repo"
tags: []
date: "2017-04-25"
file: "git-rebase"
image:
# feature: pic blue black stars spin 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14621973/fe6e21a6-0583-11e6-9a94-a969a51759b6.jpg
  credit: Jeremy Thomas
  creditlink: https://www.flickr.com/photos/132218932@N03/page2
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on tutorial on how to use Git rebase from the command line.

First of all, there is a lot of misunderstanding about rebase.

Randy Fay <a target="_blank" href="https://randyfay.com/node/103">
comments (in 2011)</a>: The issue is "Does it help anybody in the future to see my topic branch and the various garbage commits on it?" The answer, much of the time, is "no". That's what serious rebasing is about. The <strong>"rebasing"</strong> discussed in this article is about making sure your local changes go on top of what's already been committed, so you don't end up with stupid, dangerous, useless merge commits that don't help anything.

## Man page

0. To see Git's documentation on the git rebase command:

   <pre><strong>
   man git-rebase
   </strong></pre>

  It says a Git rebase <strong>reapplies</strong> commits on top of another base tip.

   There are several ways to rebase away you extra commit messages into one commit with a single cogent message before others see them:

   1. <a href="#InteractiveCommands">Interactively rebase to squash commits, on command-line</a>, immediately below
   2. <a href="#RebaseOnGitHub">Rebasing on GitHub</a>
   3. <a href="#VisualStudio">Rebase in IDEs (Microsoft's 'Visual Studio, etc.)</a>


<a name="InteractiveCommands"></a>

## Interactive Rebase to squash commits

First, click on the video for a 2:29 minute preview.
Then follow the step-by-step instructions to become a pro at making
comments a "first-class" citizen of what you put in GitHub.

<iframe width="560" height="315" src="https://www.youtube.com/embed/PZdVLaiAAmY" frameborder="0" allowfullscreen> </iframe>
(Thanks to Contato at RodolfoBandeira.com for the video. It would be a waste of time for me to duplicate the video he created Dec 2016. Thanks, Rodolfo!)

We start by doing a few prepatory steps not shown in the video:

0. Create an empty folder (whatever name you choose) and cd into it.

   <pre><strong>
   mkdir temp3
   cd temp3
   </strong></pre>

0. Initialize an empty Git repository for this exercise:

   <pre><strong>
   git init
   </strong></pre>

0. Create an empty file using the touch command:

   <pre><strong>
   touch 1.txt
   </strong></pre>

0. Add the file to Git Staging:

   <pre><strong>
   git add .
   </strong></pre>

0. Commit:

   <pre><strong>
   git commit -m 'add 1.txt'
   </strong></pre>

   Your response would have a different commit id than 785d03b:

   <pre>
[master (root-commit) 785d03b] add 1.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 1.txt
   </pre>

   ### here's what the video shows:

0. List files:

   <pre><strong>
   ls
   </strong></pre>

0. Create and switch to a new branch:

   <pre><strong>
   git checkout -b feature/feature-1
   </strong></pre>

   NOTE: A topical branch (or feature branch) is a private branch that you alone are using, 
   and will not be exposed to the public repository.

   <a name="Repeat"></a>

   Begin steps to create a file in Git repo:

0. Create an empty file using the touch command:

   <pre><strong>
   touch 2.txt
   </strong></pre>

   PROTIP: On a command-line terminal, press the cursor up key to retrive a prior command, then cursor left to edit it.

0. Add the file to Git Staging:

   <pre><strong>
   git add .
   </strong></pre>

0. Commit:

   <pre><strong>
   git commit -m 'add 2.txt'
   </strong></pre>

0. <a href="#Repeat">Repeat the above 3 steps</a> for 3.txt and 4.txt.

0. See a list of commits made:

   <pre><strong>
   git log
   </strong></pre>

   If a colon appears at the bottom of the screen, press q to quit.

0. Initiate Rebasing for all commits:

   <pre><strong>
   git rebase -i master
   </strong></pre>
   
   You should see a file displayed by your default editor. It should contain a list of commits made:

   <pre>
pick 07e03c2 add 2.txt
pick 5a71aa8 add 3.txt
pick d693749 add 4.txt
&nbsp;
# Rebase 785d03b..d693749 onto 785d03b (3 commands)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
   </pre>

   NOTE: Commit ids here, such as "07e03c2", are a stand-in for whatever commit id Git creates for each specific commit.

   Alternately, rebase just the <strong>last 3</strong> commits:

   <pre><strong>
   git rebase -i HEAD~3
   </strong></pre>
   
   See <a target="_blank" href="https://www.youtube.com/watch?v=V5KrD7CmO4o&time=1m24s">this video</a>

   The response would be a "pick" in front of each commit listed.

0. In all lines under the first line, <strong>double-click the "pick"</strong> to select it, then type "s" to end up with something like this:

   <pre>
pick 07e03c2 add 2.txt
s 5a71aa8 add 3.txt
s d693749 add 4.txt
   </pre>

   The comment in the file says such action specifies a "s" for <strong>squash</strong> that melds (combine) content into the commit above it.

   CAUTION: Do not change the commit message text. You can do that in the next screen.

0. Save the file using the keyboard action for the editor program you're using.

   Git comes up with another file:

   <pre>
# This is a combination of 3 commits.
# This is the 1st commit message:
add 2.txt
&nbsp;
# This is the commit message #2:
&nbsp;
add 3.txt
&nbsp;
# This is the commit message #3:
&nbsp;
add 4.txt
&nbsp;
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Tue Apr 25 06:50:34 2017 -0400
#
# interactive rebase in progress; onto 785d03b
# Last commands done (3 commands done):
#    s 5a71aa8 add 3.txt
#    s d693749 add 4.txt
# No commands remaining.
# You are currently editing a commit while rebasing branch 'feature/feature-1' on '785d03b'.
#
# Changes to be committed:
#	new file:   2.txt
#	new file:   3.txt
#	new file:   4.txt
#
   </pre>

0. Type a comment character <strong>#</strong> in front of commit comments we don't want to show to everyone:
   the "add 3.txt" and "add 4.txt".

   * <a target="_blank" href="https://www.youtube.com/watch?v=tukOm3Afd8s">
   YouTube video Git Rebase Interactive :: A Practical Example</a> [2:49]
   describes resequencing commits.

0. Change the first commit's message to reflect the combination of commits:

   <pre><strong>
   add 2, 3, and 4.txt
   </strong></pre>

   (Sorry, I can't stand omission of the <a target="_blank" href="https://www.grammarly.com/blog/what-is-the-oxford-comma-and-why-do-people-care-so-much-about-it/">Oxford comma</a>)

0. Save and exit the file.

0. See a list of commits to confirm:

   <pre><strong>
   git log --oneline
   </strong></pre>

0. Retrieve files from master branch:

   <pre><strong>
   git checkout master
   </strong></pre>


   ### git rebase on top of ...

0. Initiate Rebasing:

   <pre><strong>
   git rebase feature/feature-1
   </strong></pre>

   The response should be:

   <pre>
First, rewinding head to replay your work on top of it...
Fast-forwarded master to feature/feature-1.   
   </pre>


   ### Delete branch

0. Delete the feature branch marker that has been used up. This is not in the video, but a good habit.

   <pre><strong>
   git branch -d feature/feature-1
   </strong></pre>


   ### Verify with git reflog

0. See the Git reference log:

   <pre><strong>
   git reflog
   </strong></pre>

   <pre>
daa8535 HEAD@{0}: rebase finished: returning to refs/heads/master
daa8535 HEAD@{1}: rebase: checkout feature/feature-1
785d03b HEAD@{2}: checkout: moving from feature/feature-1 to master
daa8535 HEAD@{3}: rebase -i (finish): returning to refs/heads/feature/feature-1
daa8535 HEAD@{4}: rebase -i (squash): add 2, 3, and 4.txt
d3b8645 HEAD@{5}: rebase -i (squash): # This is a combination of 2 commits.
07e03c2 HEAD@{6}: rebase -i (start): checkout master
d693749 HEAD@{7}: commit: add 4.txt
5a71aa8 HEAD@{8}: commit: add 3.txt
07e03c2 HEAD@{9}: commit: add 2.txt
785d03b HEAD@{10}: checkout: moving from master to feature/feature-1
785d03b HEAD@{11}: commit (initial): add 1.txt
   </pre>


<a name="RebaseOnGitHub"></a>

## Rebase on GitHub

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/25385557/79fe2e8c-2992-11e7-90a4-74b2fd4c255b.png">
<img width="313" alt="github merge pull request menu" src="https://cloud.githubusercontent.com/assets/300046/25385557/79fe2e8c-2992-11e7-90a4-74b2fd4c255b.png"></a>

These do NOT appear if there are changes to the default checks in Settings:

<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/25558927/b26b5d52-2cfe-11e7-897c-b05c03da4ca8.png">
<img width="650" alt="github-settings-rebase 650x250" src="https://cloud.githubusercontent.com/assets/300046/25558927/b26b5d52-2cfe-11e7-897c-b05c03da4ca8.png"></a>


<a name="VisualStudio"></a>

### Squash in VisualStudio

* <a target="_blank" href="https://www.youtube.com/watch?v=XSzo2MMZZJU">
Squash Merge in GIT using VisualStudio</a> [27:21] 9 Feb 2017
by Ameer Basha


### Squash on SourceTree

* <a target="_blank" href="https://www.youtube.com/watch?v=SBSuv4jRUlc">
   Git - Rebase demo using SourceTree</a> [4:30]

* <a target="_blank" href="https://www.youtube.com/watch?v=mBCJCuU3p7I">
   Interactive Rebasing with SourceTree</a> []
   by Matthew Setter at TeamLearnable


<a name="RebaseWorkflow"></a>

## Rebase workflow

Early on, in 2007, http://changelog.complete.org/archives/586-rebase-considered-harmful

* https://randyfay.com/content/rebase-workflow-git

* http://www.darwinweb.net/articles/the-case-for-git-rebase
  says:

> Rebase is at its essence simply takes a series of commits as if they were individual patches, and applies them at a different point in history. 

* http://unethicalblogger.com/2010/04/02/a-rebase-based-workflow.html

* http://www.gitready.com/intermediate/2009/01/31/intro-to-rebase.html

* http://www.gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html

* Rebase vs merge
   by Mary


## More on Git Rebase

*<a target="_blank" href="https://git-scm.com/docs/git-rebase">
   https://git-scm.com/docs/git-rebase</a>
   is the official documenation

* Dan "Gitschooldude" has a good <a target="_blank" href="https://www.youtube.com/watch?v=mzagfGeFUuA"> video about rebase commands. His shell script code to create commits is on his<br />
   <a target="_blank" href="https://github.com/gitschooldude/misc_scripts/blob/master/create_commits.py">GitHub</a>.

* <a target="_blank" href="https://www.youtube.com/watch?v=diBbkLY61pw">
   Git rebasing</a> [51:08] a Hangout conversation
   by Patrick Christopher and friends 18 Oct 2013

   Part of the
   <a target="_blank" href="https://www.youtube.com/watch?v=AqDLz4yq_CI&list=PLA4B47B9B5F3691E3">
   Git mastery in 20-minute increments series</a>
<a target="_blank" href="https://www.youtube.com/watch?v=30RMnLCVe8c&list=PLA4B47B9B5F3691E3&index=5">
   git pull --rebase</a>
   by Seth House in Jul 2012.
   Video shows commands update-ref, graph-dag script.
   Uses a program to graph branches to a graphics.

* <a target="_blank" href="https://www.youtube.com/watch?v=8ZXExlHBPoY">
   Interactive git rebase for code reviews and profit</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=_ajGPzBBOoQ">
   Doing git rebase --interactive, including merge conflicts</a>
   by Gabriel Schulhof

* <a target="_blank" href="https://www.youtube.com/watch?v=PZdVLaiAAmY">
   How to squash multiple commits in just one in git</a>
   by Rodolfo Bandeira

* <a target="_blank" href="https://www.youtube.com/watch?v=7IfkL8swmFw">
   https://www.youtube.com/watch?v=7IfkL8swmFw</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=NW46XmvJh5Q">
   Learning Git Tutorial: Interactive Rebasing | packtpub.com</a> [6:08]

* <a target="_blank" href="https://www.youtube.com/watch?v=m8_HEj2sJwc">
   Git Rebase & squash</a> (using PyCharm on a Mac) [6:13] Jan 27, 2015
   by Paqmind 

* <a target="_blank" href="https://www.youtube.com/watch?v=oF1USA_9__M">
   How to rebase remote branch into local branch in git</a> [3:57]
   by Sagar S 

* <a target="_blank" href="https://www.youtube.com/watch?v=Zwag-HNKZbU">
   Git Tutorial 09 - Squash</a> [19:04]
   by QAShahin

* <a target="_blank" href="https://www.youtube.com/watch?v=2E23I9PzplM">
   Squashing multiple commits into one with GIT</a> [6:46] Sep 15, 2015
   by Andrew Connell

* <a target="_blank" href="https://www.youtube.com/watch?v=msuJGG2iWjs">
   Git squash tutorial</a> [6:46] Dec 5, 2012
   by Nelson Wells

Within a <a target="_blank" href="https://www.youtube.com/watch?v=xellB6JaMV0&list=PLZVSOFwGx4zBAtge4Ub2Uq2rZ_O5Cs8qK"> Git QuickStart using GitHub series</a>
https://www.youtube.com/watch?v=fbHs-yWoILs
Merge/Rebase branches in GIT using visual Studio
7 Feb 2017

<a target="_blank" href="https://www.youtube.com/watch?v=myD1zPfdjRs&list=PLQwEegbFUjHF0TGM_HigwCHOXMJGXvcwe" title="Oct 13, 2014 [2:37]">VIDEO: Git and GitHub Workshop: Introducing Rebasing</a>

## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
