---
layout: post
title: "Git Whoops"
excerpt: "Don't panic. Here's how to un-do mistakes in Git"
shorturl: "https://goo.gl/4vQ2Yl"
modified:
tags: []
image:
# feature: pic blue black stars spin 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14621973/fe6e21a6-0583-11e6-9a94-a969a51759b6.jpg
  credit: Jeremy Thomas
  creditlink: https://www.flickr.com/photos/132218932@N03/page2
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This presents ways to reverse or un-do common actions in Git.

<a name="Fork"></a>

### Fork

If you didn't mean to fork a repository, but you did anyway,
<strong>erase the repo</strong>.

0. Click on Settings tab in GitHub.

0. Scroll down to the bottom of the page and click <strong>Delete this repository</strong>.

0. Type the name of the repo.

0. Click "I understand the consequences, delete this repository".

0. Provide your password if it's requested again.

0. For a list of your repos, click your avatar at the upper-right corner and
   select <strong>Your profile</strong>.
<br /><br />

   <a href="https://wilsonmar.github.io/git-flow#Fork">Return</a>


   <a name="GitConfig"></a>

   ### Git config

   If you find a mis-spelling in your attribution, 
   simply repeat the command with the information you want.

   On a Mac, git config commands create entries in the ~/.git/config file:

   <pre>
[user]
   email = wilsonmar@gmail.com
   name = Wilson Mar
   user = wilsonmar
   </pre>

   Edit the text file.

   <a href="https://wilsonmar.github.io/git-flow#GitConfig">Return</a>


  
   <a name="Clone"></a>

   ### Clone in account folder

   If you mistyped, remove a folder and all its contents with a 
   <tt>rm -rf</tt> command. But be at the folder above the folder you want to remove.

   <pre><strong>pwd
   cd ..
   rm -rf gitclass
   </strong></pre>

   <a href="https://wilsonmar.github.io/git-flow#Clone">Return</a>



   <a name="Checkout"></a>

   ### git checkout file

   Mentioning a single [file] in the `git checkout` command
   overwrites whatever changes have been made to the file and
   replaces it with an old version of that file:

   <pre><strong>git checkout -- <em>[file]</em>
   </strong></pre>

   * As with several other git commands, two dashes goes before specification of a single file.
 
   * Git assumes you want to checkout HEAD, the last commit on the currently-checked-out branch.

   * Whatever exists are permanently gone because they were not committed.
    <br /><br />

   Checking out an old <strong>commit</strong> from .git repo history
   makes the entire working directory match that commit. 
   However, the "current" state of your project remains untouched in the master branch.


   [<a target="_blank" href="https://git-scm.com/docs/git-checkout/">SCM</a>],
   <a href="https://wilsonmar.github.io/git-flow#Checkout">Return</a>


   <a name="NewBranch"></a>

   ### New branch

   A branch can be deleted because they are just pointers to commits.

   <pre><strong>git branch -d <em>branch name</em>
   </strong></pre>

   [<a target="_blank" href="https://git-scm.com/docs/git-branch/">SCM</a>],
   <a href="https://wilsonmar.github.io/git-flow#NewBranch">Return</a>


   <a name="Editing"></a>

   ### Editing

   It doesn't matter how many times a file is changed and saved if that file is unmanaged.

   Use the <a href="#Status">git status</a> command to see whether the file is managed.


   <a name="Cherry-pick"></a>

   ### git cherry-pick

   To replay changes specified in a specific commit onto files in the working directory:

   <pre><strong>git cherry-pick <em>[commit SHA1]</em>
   </strong></pre>

   [<a target="_blank" href="https://git-scm.com/docs/git-cherry-pick/">SCM</a>]


   <a name="Status"></a>

   ### Status

   The <strong>git status</strong> command details the status of changes to the repo. 


   <a name="LocalClean"></a>

   ### Local Clean

   If you are overwhelmed by too many <strong>untracked</strong> files in your working directory,
   first see what files will be cleared using one command, first use the -n flag:

   <pre><strong>git clean -n
   </strong></pre>

   Nuke files from the folder using the clean command:

   <pre><strong>git clean -fdx
   </strong></pre>

   * <strong>-f</strong> removes files untracked. It's required.
   * <strong>-d</strong> removes untracked directories.
   * <strong>-x</strong> removes files Git ignores due to mention in .gitignore.

   [<a target="_blank" href="https://git-scm.com/docs/git-clean">SCM</a>]


   <a name="Add"></a>

   ### Un-Add/Reset from Staging

   To remove a specified [file] (such as README.md) just from the staging area, 
   but leave the working directory unchanged:

   <pre><strong>git reset <em>[file]</em>
   </strong></pre>

   Alternately, the Staging area is also called <strong>cache</strong> 
   because the command to 
   <strong>remove</strong> a file in Staging:

   <pre><strong>git rm --cached <em>[file]</em>
   </strong></pre>

   * Specifying git rm without --cached removes the file from both cached and working directory.
   <br /><br />


   [<a target="_blank" href="https://git-scm.com/docs/git-reset/">SCM</a>],
   <a href="https://wilsonmar.github.io/git-flow#Add">Return</a>


   <a name="Commit"></a>

   ### Commit - Amend Message

   Changes can be made to specific commits as long as they have not been pushed to others
   in GitHub. The following applies to such commits.

   If the message text is all you want to undo, repeat the command with 
   `--amend` added.

   <pre><strong>git commit -m"Update again for show" --amend
   </strong></pre>

   The above creates a new commit in place of the previous commit.

   The action is remembered by `git reflog` locally until purged.

   To replace just the content of a commit, git add the change, then:

   <pre><strong>git commit --amend --no-edit
   </strong></pre>

   You lose the ability to fall-back to previous versions.
   So use it only to fix minor typos.

   [<a target="_blank" href="https://git-scm.com/docs/git-commit/">SCM</a>],

   <a name="Revert"></a>

   ### Commit - Revert

   To change a file with commits already pushed to others, use the `git revert` command
   for Git to figure out the opposite of all the change introduced by a particular commit.
   If the commit added some text, revert deletes that text.

   First figure out the specific commit id using the git log command (such as "5a34def")

   <pre><strong>git log</em>
   </strong></pre>

   Then supply that commit id in the command:

   <pre><strong>git revert <em>[commit-SHA]</em>
   </strong></pre>
   
   The creates a new commit which need to be pushed up to GitHub.

   See <a target="_blank" href="https://www.atlassian.com/git/tutorials/undoing-changes#git-revert">this explanation</a> and
   <a target="_blank" href="https://www.kernel.org/pub/software/scm/git/docs/git-revert.html">
   manual on the git revert command</a>.

   <a target="_blank" href="https://git-scm.com/docs/git-revert">SCM</a>,
   <a href="https://wilsonmar.github.io/git-flow#Commit">Return</a>


   <a name="LocalCommits"></a>

   ### Reset Local Commits

   To reset the .git repo history and the working tree
   (the "hard" part) back the way it was one commit (^) ago:

   <pre><strong>git reset --hard <em>HEAD^</em>
   </strong></pre>

   * This should only be for commits which have not been pushed public.
   * <tt>HEAD~1</tt> is same as <tt>HEAD^</tt> to go back one commit.
   * <tt>HEAD~2</tt> or <tt>HEAD^^</tt> to go back two commits.
   * Do not specify just HEAD because the point of the command is to go back.
   * PROTIP: `--hard` is recommended because it keeps the working tree the same as what's
   in the .git repository.
   * PROTIP: You may prefer to completely clear out whatever files created are untracked
   in the working tree.
   * The next step is usually a `git add`.

   [<a target="_blank" href="https://git-scm.com/docs/git-reset/">SCM</a>]

   <a name="Push"></a>

   ### Public revert push

   The preferred alternatively is a <a href="#Revert">revert command</a> can be issued, 
   as described <a href="#Revert">above</a>.

   But do it for each commit pushed, in reverse order.

   Alternately, to undo the previous `git push` command (specified by HEAD^) 
   which sent to a remote origin 
   what has been committed for a specific branch:

   <pre><strong>git push -f origin HEAD^:master
   </strong></pre>
   
   [<a target="_blank" href="https://git-scm.com/docs/git-push/">SCM</a>],
   <a href="https://wilsonmar.github.io/git-flow#Push">Return</a>


   <a name="Tags"></a>

   ### Un-Push tags

   To delete a tag in the origin repo (on GitHub or GitLab), such as in branch released:

   <pre>git tag released/201706
   </pre>

   In GitHub, the colon character is what specifies delete, followed by "refs/tags" as in:

   <pre><strong>git push origin :refs/tags/released/201706
   </strong></pre>


   [<a target="_blank" href="https://git-scm.com/docs/git-tag/">SCM</a>],
   <a href="https://wilsonmar.github.io/git-flow#Tags">Return</a>

   <a name="Fallback"></a>

   ### Fallback to previous SHA

   I've had to do this with my github.io repository, which contains markdown text in the _posts folder that GitHub automatically converts into displayable HTML in the _source folder. GitHub sends emails out if it cannot do that. However, I didn't read my email and several changes to markdown didn't become visible to readers. 

   To fix it, I looked at GitHub online to identify the date and time stamp to the last good update so I can fall back all changes to that point in time.

   PROTIP: This is a way to fall back if there are no merges in between the current HEAD and the hash one before the one that you want to go back to:

   <pre>git revert --no-commit e05fced..HEAD</pre>

   <pre>git commit</pre>

   <pre>git push</pre>


   <a name="DeleteBranch"></a>

   ### Delete branch

   Because branches are just markers within Git, once a feature branch is in GitHub, 
   that branch can be deleted from the local repo 

   <pre><strong>git branch -d <em>feat1</em>
   </strong></pre>

   and from GitHub (by specifying that colon in front of the branch name). 

   <pre><strong>git push origin :feat1</strong></pre>

   NOTE: The colon is the secret special sauce. There is no "delete" command with this.

   [<a target="_blank" href="https://git-scm.com/docs/git-branch/">SCM</a>],
   <a href="https://wilsonmar.github.io/git-flow#DeleteBranch">Return</a>



   <a name="PullRequest"></a>

   ### Pull Request

   A pull request can be cancelled in the GitHub web GUI.

   <a href="https://wilsonmar.github.io/git-flow#PullRequest">Return</a>


   <a name="Upstream"></a>

   ### Upstream Remove

   To remove a remote named "upstream":

   <pre><strong>git remote remove upstream 
   </strong></pre>

   Verify:

   <pre><strong>git remote -v
   </strong></pre>

   [<a target="_blank" href="https://git-scm.com/docs/git-remote/">SCM</a>],
   <a href="https://wilsonmar.github.io/git-flow#Upstream">Return</a>


   <a name="Pull"></a>

   ### Pull reversal

   Use the `ORIG_HEAD` created when the last checkout occurred:

   <pre><strong>git reset --hard ORIG_HEAD
   </strong></pre>


   Alternately, specify a timeframes:

   <pre><strong>git reset --hard master@{"10 minutes ago"}
   </strong></pre>


   <a href="https://wilsonmar.github.io/git-flow#MergeLocal">Return</a>


   <a name="MyRepoFetch"></a>
   
   ### Un-Fetch my changes

   To undo what has been fetched from a remote,
   remove the remote:

   <pre><strong>git remote remove upstream
   </strong></pre>

   Now add it again and fetch only single branch:

   <pre><strong>git remote add upstream https://github.com/wilsonmar/git-utilities
   git fetch upstream
   </strong></pre>


   <a href="https://wilsonmar.github.io/git-flow#MyRepoFetch">Return</a>


   <a name="MergeLocal"></a>

   ### Merge abandon during merge

   Cancel a merge:

   <pre><strong>git merge --abort
   </strong></pre>

   [<a target="_blank" href="https://git-scm.com/docs/git-merge/">SCM</a>],
   <a href="https://wilsonmar.github.io/git-flow#MergeLocal">Return</a>



## Resources

* <a target="_blank" href="http://ohshitgit.com/">ohshitgit.com</a>

* <a target="_blank" href="https://www.atlassian.com/git/tutorials/undoing-changes">
   https://www.atlassian.com/git/tutorials/undoing-changes</a>

* <a target="_blank" href="https://github.com/blog/2019-how-to-undo-almost-anything-with-git">
   https://github.com/blog/2019-how-to-undo-almost-anything-with-git</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=54Yh0YyC-4Q">
   Git and the Terrible, Horrible, No Good, Very Bad Day - Git Merge 2017</a> [35:03]
   by Hector Alfaro, trainer at GitHub
   shows in <a target="_blank" href="https://github.com/hectorsector/git-and-the-bad-day">
   https://github.com/hectorsector/git-and-the-bad-day</a>
   how to detangle things by use of more advanced porcelain commands 
   such as git bisect.

   Serious problems are fixed by BFG and git filter-branch

   * <a target="_blank" href="https://www.youtube.com/watch?v=WfwwFyE-ckQ">
   Repo 911</a> at 
   <a target="_blank" href="https://www.youtube.com/watch?v=tvymSWfvkjw&list=PL0lo9MOBetEGRAJzoTCdco_fOKDfhqaOY">
   Git Merge 2017 Brussels</a>

* https://marklodato.github.io/visual-git-guide/index-en.html

* https://opensource.com/article/18/6/git-reset-revert-rebase-commands

## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
