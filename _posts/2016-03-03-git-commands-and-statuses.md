---
layout: post
title: "Git Commands and Statuses"
excerpt: "The Visual Cheat Sheet"
modified:
tags: []
date: "2016-03-03"
file: "git-commands-and-statuses"
image:
#  feature: pic black entering stadium 1900X500.jpg
   feature: https://cloud.githubusercontent.com/assets/300046/14621833/d9af8f54-0582-11e6-9c88-7e8d1cead630.jpg 
   credit: 
   creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<p align="right"><a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=es&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Español (Spanish)" width="20" height="14" src="../images/flags/es.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=fr&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Français (French)" width="20" height="14" src="../images/flags/fr.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=de&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Deutsch (German)" width="20" height="14" src="../images/flags/de.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=it&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Italiano" width="20" height="14" src="../images/flags/it.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=pt&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Português" width="20" height="14" src="../images/flags/pt.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ru&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="Cyrillic Russian" width="20" height="14" src="../images/flags/ru.png"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="中文 (简体) Chinese (Simplified)" width="20" height="14" src="../images/flags/cn.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ja&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="日本語 Japanese" width="20" height="14" src="../images/flags/jp.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A%2F%2Fwilsonmar.github.io%2F{{ page.file }}%2F"><img alt="한국어 Korean" width="20" height="14" src="../images/flags/ko.gif"></a>
</p>
{% include _toc.html %}

Git is not known as among the simplest of software. 
It was literally created for and by Linux kernel developers 
who have a megabrain recall to speed-type long commands.

But I don't feel I'm that smart, and felt overwhelmed.

Like you, I had no choice but to study hard to fully grasp Git's complexity.
Undeterred, for the last two years, I scoured the internet to 
view every blog, video, and book about this subject.
So you don't have to.


## Battle map #

Military commanders use large yet detailed maps to see their 
<a target="_blank" href="http://thomaslegion.net/battleofchancellorsvillebattlefieldpositions.html">
entire battlefield</a>, showing the location of bunkers and the sequence of troop movements.

<amp-img layout="responsive" alt="map chancellorsville battle detail-526x170-115kb.jpg" width="526" height="170" src="https://cloud.githubusercontent.com/assets/300046/18394290/6ba869ee-7676-11e6-8024-150f168cc605.jpg"></amp-img>
<br /><br />

In my personal battle against Git's complexity, I 
<a href="#MyMap"><strong>created a detailed map</strong></a>
of the sequences to all data flows in and out of Git's storage locations and 
their statuses.

Some call it a <a href="#MyMap"><strong>visual cheat sheet</strong></a>.

But I call it "fearless" because 
I introduce Git in more <strong>depth</strong> and in a 
different sequence than other tutorials that have come before me.


## Basic commands flows #

I thank <a target="_blank" href="http://zeroturnaround.com/rebellabs/git-commands-and-best-practices-cheat-sheet/">
ZeroTurnaround</a> for a diagram which illustrates the sequence of basic commands:

<amp-img layout="responsive" alt="git-zero-turnaround-638x270-64kb.jpg" width="638" height="270" src="https://cloud.githubusercontent.com/assets/300046/18372794/6b128886-75fc-11e6-99de-b54f0f41faf6.jpg"></amp-img>
<br /><br />

   PROTIP: I encourage you to pull out a paper and hand-draw the
   diagram as we go along. You'll remember it better.

The Git Pull command pulls down a complete copy of 
a repository's change history and checks out the latest revision
of files in the local Working Directory.

Fetch updates changes from the Remote,
but does not update the Working Directory.

Locally made changes are added to Staging and 
<strong>commit</strong> updates change history tracking.

Different parameters of the reset command
replaces changes in the Working Directory or 
in Staging with what is in Git's repository.

Push pushes files back to the remote repository on GitHub.


## More detail #

But we need to dive deeper so we can comfortably 
<strong>reverse</strong> (in a safe way) every action we do.
We also want to use <strong>Git flow</strong> feature branches to work safely as a team.

> I have a one-day course I present at conferences, on-site, and on-line
the specific commands and additonal PROTIPs covered here.

> My next live conference presentation is at 
<a target="_blank" href="http://goo.gl/5dRcGS">
StarWest Disneyland Oct. 4, 2016. Sign up at http://goo.gl/5dRcGS. See you there!</a>


<a name="Video"></a>

## Video Playlist #

I created a <a href="#Video">video</a> with commentary
so you can quickly grasp the <em>nuances</em> 
of key commands involved with Git flow.

You may prefer accessing the videos via the playlist at:

> <a target="_blank" href="https://goo.gl/12C1BF">https://goo.gl/12C1BF</a>

A playlist link lists the latest versions because individual videos can be added or removed.

Direct links to individual YouTube videos can become stale when newer versions are downloaded.

The video is from an animated PowerPoint file, narrated separately with text below.



<a name="MyMap"></a>

## My map (Visual Cheat Sheet) #

<img layout="responsive" alt="git-commands-v06-650x286-235kb.jpg" width="650" height="235" src="https://cloud.githubusercontent.com/assets/14143059/18898976/b0e96410-84f2-11e6-8d98-555e0a853a37.jpg">

   PROTIP: You are encouraged to pull out a paper and hand-draw 
   the diagram as we go along. You'll remember this better.

> Please let me know if you can see a tweak to this sequence for better introduction of concepts.

Let's begin with repositories in a cloud service, GitHub.com.

A repo that belongs to another organization is called 
an <strong>"upstream"</strong> location.
If we <strong>edit</strong> that repo, 
GitHub automatically <strong>forks</strong> it under our own account.
If we want to make changes, we would need to file a 
<strong>Pull Request</strong> from the repo under our account.

One of the main advantages of GitHub is it makes use of <strong>branches</strong>.
The default branch is named "master" out of the box. ***
But many organizations protect it for production use,
and create a <strong>"development"</strong> or "dev" branch for developers to work with.

We can click the <strong>Download</strong> button to 
bring a zip file to my local Downloads folder,
then <strong>unzip</strong> to a folder I created.

But that folder alone does not keep back versions.
For that we need a <strong>.git</strong> folder among the files,
which is done by a <strong>Git client</strong> 
installed on my local machine.

The Git <strong>init</strong> command processed by the Git client
creates the Git folder which holds the history of changes.

The Git <strong>clone</strong> command creates 
that .git folder inside a new folder from files downloaded from GitHub.
** The clone command also includes a Git <strong>checkout</strong>
command that extracts the lastest set of files into the 
<strong>Working Directory</strong> holding the .git folder.

If we run the SSH or Putty command to create keys,
the Git client can communicate securely with the cloud service.

We run <strong>config</strong> commands to 
configure the <strong>.gitconfig</strong> file
referenced by all Git repositories on our machine
to provide our default name and email address to repos.

*** 
If we do a <strong>remote -v</strong> command on a repo we cloned,
we typically see that <strong>origin</strong> as the location.
We can <strong>remote add</strong> the upstream repo
if we want to update our local repo with changes in the upstream repo.

Git only tracks files involved in a git <strong>commit</strong> 
command. Git stores what has changed in the .git folder
and calculates a reference to each particular change.

The git <strong>tag</strong> command allows a 
custom name of your choosing to be assigned to a commit.
Teams use this to specify and sign release numbers and
specifications which Jenkins recognizes to invoke integration builds.

There are several commands that reveal what is inside the 
.git folder managing history.

The Git <strong>shortlog</strong> summarizes the history of commits made
by author.

The Git <strong>log</strong> command lists a 
<em>detailed</em> history of commits made.
Most consider its default format takes up too many lines,
so many configure in the .gitconfig file an alias 
such as <strong>lol</strong> to format what gets displayed.

BTW, <strong>"HEAD"</strong> refers to the most current commit,
listed at the top of a chain of its <em>descendants</em> from prior commits.
In other words, Git <strong>log</strong> shows the current HEAD and its ancestry
by traversing back through the repo's ancestry recursively looking up each commit's parent.

The git <strong>reflog</strong> command lists the history of 
<em>all</em> changes made in the sequence they occurred,
like an undo history of the repo. 
It's stored separately from the commits themselves
and isn't included in pushes, fetches or clones
because it's purely for local use. 
If it seems like a commit has been lost,
chances are the reflog will show it and allow you to restore it.

The Git <strong>show</strong> command lists fine-grained internal
<em>objects</em> in the repository, such as blobs and trees associated
with tags and commits.

The Git <strong>blame</strong> command gives a timeline of changes
to specific files. ***

The Git <strong>branch</strong> command lists what branches 
are in the local repository because only a specific branch
may be cloned locally.

### Git Workflow #

Under Gitflow, we begin work by creating a <strong>feature branch</strong>
using a Git <strong>checkout</strong> command with
the -b parameter which specifies the creation of a new branch.

This will put you in what Git calls a "detached HEAD" state.

<hr />

***
Bash commands <strong>touch</strong> and <strong>echo</strong> 
create and change files. Text editors and IDEs also
create and change files.

***
In order for files to be committed for tracking by Git,
they first must be specified in a git <strong>add</strong> 
command which puts changes in a sort of "shopping cart" called  
<strong>staging</strong>, also called <strong>Index</strong>
because it holds an index of files which the
next git commit command would track.

The git <strong>status</strong> command shows
which files have been <strong>staged</strong>
or remain <strong>untracked</strong>.

If you have to find text among a lot of files
the Git <strong>grep</strong> command has many options to identify
files containing text that match a specification.

We want to use a Git <strong>diff</strong> command or use a 
<strong>diff-tool</strong> to identify differences
between the working set and what's in Staging.

For a formatted document of differences,
some use <strong>diff-tree</strong>, which shares the same 
parameters as the git show command.

When Git detects a staged file has been 
<strong>edited</strong> by a text editor,
Git automatically takes that file out of staging
and assigns it the status of <strong>modified</strong>.

<hr />

If we need to suddenly switch back to what's in the commit HEAD,
we don't need to always abandon and forever loose uncompleted work.

We can use the <a target="_blank" href="https://git-scm.com/docs/git-stash">
Git <strong>stash save</strong></a> 
to copy all files from the working directory
into an area hidden from Staging or the Git repository.

Modifications stashed can be listed with git <strong>stash list</strong>, 
inspected with git <strong>stash show</strong>, 
and restored (potentially on top of a different commit) 
with git <strong>stash pop</strong>, which does the equivalent of
git <strong>stash apply</strong> to retrieve the last stash, 
but also does a git <strong>stash drop</strong> to remove it from the stash.

*** ???
Git checkout and Git pull refuses to 
update files with uncommitted modifications (tracked or not).

<hr />

To remove files from staging,
Git command <strong>reset HEAD --</strong> can be used 
followed by a file specification, which can be a dot to specify all files.

To remove all files in the <em>working directory</em>
which are NOT under version control, use the
Git <strong>clean</strong> command, which works 
<em>recursively</em> down the various sub-folders.

To wipe out all uncommitted changes in staging and 
replace the working tree with the commit HEAD specified, use
Git command <strong>reset --hard HEAD^</strong>.

<hr />

Files <strong>deleted</strong> after being committed would 
appear with a status of "deleted".

After a commit, the status command would show no files.

If the <em>description</em> of the <em>most recent</em> 
local commit needs to be changed,
<a target="_blank" href="https://help.github.com/articles/changing-a-commit-message/">
it can be done</a> using a <strong>commit --amend</strong> parameter.

***
Elements considered "garbage" are removed automatically after 
a default 90 days, or immediately by the
Git <strong>gc --prune</strong> command.

To identify elements which will be garbage collected,
we use the Git <strong>fsck</strong> command,
** which is one of the Git "plumbing" commands not usually used.

<hr />

To change the content of the most recent commit,
a <strong>revert</strong> command can be used to
create another commit which does the opposite of what is being reverted.

Changing previous commits would require a git "push --force" command,
which is not allowed in most organizations because it requires
others who have cloned the repo to make manual changes.

But while you're still working on a local branch, you can use
git <strong>rebase</strong> to interactively reword commit messages or
<em>squash</em> several commits into one.
This is desirable especially for commits that only fix typos in the local repo
which other do not really want to know about.

<hr />

When working as a team, changes may have occcurred while you're 
working with an older version.

Many tutorials talk about using the <strong>pull</strong> command
to obtain updates from the origin or upstream location.

But we prefer using the <strong>fetch</strong> command which,
unlike pull, does not automatically do a 
<strong>merge</strong>.

???
Once we know the differences, we can then 
<strong>resolve</strong> them and
run git <strong>merge</strong> manually or 
use a git <strong>merge-tool</strong>.

We then know it's OK to do a
git <strong>push</strong> of local commits to the team repository in the cloud.

As with any Git repo, a <strong>.gitignore</strong> file 
specifies local files which 
Git should not send up to the team GitHub repo.

*** An additional Git push is necessary to send tags to GitHub.
Such tags need to be created with a <strong>-a (dash a)</strong> 
parameter which designates a commit to be created with the tag.

<img layout="responsive" alt="git-commands-v06-650x286-235kb.jpg" width="650" height="235" src="https://cloud.githubusercontent.com/assets/14143059/18898976/b0e96410-84f2-11e6-8d98-555e0a853a37.jpg">

## Recap of statuses #

Now that you've seen mine, let's recap with the flowchart from the<br />
<a target="_blank" href="http://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#Removing-Files">
book at Git-SCM.com</a>

<amp-img layout="responsive" alt="git-scm-book 650x298-51kb.jpg" width="650" height="298" src="https://cloud.githubusercontent.com/assets/300046/18372914/33dcbee4-75fd-11e6-82f1-fe95cfb79274.jpg"></amp-img>

* To stage files for commit, add it.
* When you edit a file, it needs to be added to stage again.
* After a commit, files in working folder are untracked.

## Videos

<a target="_blank" href="https://www.youtube.com/watch?v=Dv8I_kfrFWw">
Jessica Kerr "Git Happens" 18 Jan 2013</a>



## Commands by type #

https://git-scm.com/docs

(Out of scope here are comands for Email, Administration, and Plumbing)

<a name="CommandList"></a>

## Common Git Commands in alphabetical order #

Click each command for its documentation on git-scm.com:

0. <a target="_blank" href="https://git-scm.com/docs/git-blame">
   blame</a> - Show what revision and author last modified each line of a file
0. <a target="_blank" href="https://git-scm.com/docs/git-bisect">
   bisect</a> - Show what revision and author last modified each line of a file
0. <a target="_blank" href="https://git-scm.com/docs/git-branch">
   branch</a> - List, create, or delete branches
0. <a target="_blank" href="https://git-scm.com/docs/git-checkout">
   checkout</a> - Switch branches or restore working tree files
0. <a target="_blank" href="https://git-scm.com/docs/git-cherry-pick">
   cherry-pick</a> - Apply the changes introduced by some existing commits
0. <a target="_blank" href="https://git-scm.com/docs/git-clean">
   clean</a> - Remove untracked files from the working tree
0. <a target="_blank" href="https://git-scm.com/docs/git-clone">
   clone</a> - Clone a repository into a new directory
0. <a target="_blank" href="https://git-scm.com/docs/git-commit">
   commit</a> - Record changes to the repository
0. <a target="_blank" href="https://git-scm.com/docs/git-config">
   config</a> - Get and set repository or global options
0. <a target="_blank" href="https://git-scm.com/docs/git-describe">
   describe</a>- Describe a commit using the most recent tag reachable from it
0. <a target="_blank" href="https://git-scm.com/docs/git-diff">
   diff</a> - Show changes between commits, commit and working tree, etc
0. <a target="_blank" href="https://git-scm.com/docs/git-grep">
   grep</a> - Print lines matching a pattern
0. <a target="_blank" href="https://git-scm.com/docs/git-help">
   help</a>
0. <a target="_blank" href="https://git-scm.com/docs/git-init">
   init</a> - Create an empty Git repository or reinitialize an existing one
0. <a target="_blank" href="https://git-scm.com/docs/git-ls-files">
   ls-files</a> - Show information about files in the index and the working tree
0. <a target="_blank" href="https://git-scm.com/docs/git-log">
   log</a> - Show commit logs
0. <a target="_blank" href="https://git-scm.com/docs/git-merge">
   merge</a> - Join two or more development histories together
0. <a target="_blank" href="https://git-scm.com/docs/git-mergetool">
   mergetool</a> - Run merge conflict resolution tools to resolve merge conflicts
0. <a target="_blank" href="https://git-scm.com/docs/git-pull">
   pull</a> - Fetch from and integrate with another repository or a local branch
0. <a target="_blank" href="https://git-scm.com/docs/git-push">
   push</a> - Update remote refs along with associated objects
0. <a target="_blank" href="https://git-scm.com/docs/git-rebase">
   rebase</a> - Reapply commits on top of another base tip
0. <a target="_blank" href="https://git-scm.com/docs/git-reflog">
   reflog</a> - Manage reflog information
0. <a target="_blank" href="https://git-scm.com/docs/git-reset">
   reset</a> - Reset current HEAD to the specified state
0. <a target="_blank" href="https://git-scm.com/docs/git-revert">
   revert</a> - Revert some existing commits
0. <a target="_blank" href="https://git-scm.com/docs/git-shortlog">
   shortlog</a> - Summarize git log output
0. <a target="_blank" href="https://git-scm.com/docs/git-stash">
   stash</a> - Stash the changes in a dirty working directory away
0. <a target="_blank" href="https://git-scm.com/docs/git-status">
   status</a> - Show the working tree status
0. <a target="_blank" href="https://git-scm.com/docs/git-tag">
   tag</a> - Create, list, delete or verify a tag object signed with GPG


## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}