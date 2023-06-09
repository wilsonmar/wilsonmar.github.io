---
layout: post
title: "Git imerge (interactive merge)"
excerpt: "This is the way to merge. It needs to be setup, but you'll love it."
shorturl: "https://goo.gl/QpfAia"
modified:
tags: []
date: "2017-05-30"
file: "git-imerge"
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

This article presents a step-by-step tutorial so you can confidently use 
an alternative to the standard `git merge` and `git rebase` 
that comes with Git. 

## The old school way

The `git merge` command as described in many tutorials:

   * <a target="_blank" href="https://www.youtube.com/watch?v=JtIX3HJKwfo">
   1.9: Resolving Merge Conflicts - Git and GitHub for Poets</a>
   by The Coding Train

   * <a target="_blank" href="https://www.youtube.com/watch?v=iCGrKFH2oeo">
   Git Tutorial: Diff and Merge Tools</a> 
   by Corey Schafer

   * <a target="_blank" href="https://www.youtube.com/watch?v=ZK20jVt7XEc">
   Eclipse - Merge and Resolve Conflicts with git</a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=7riCX4Oxms8">
   Git Merge • Git in VisualStudio (Martin Woodward)</a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=CRlGDDprdOQ">
   Git MERGE vs REBASE</a>

### The annoyance

Although superior to others, is rather "cumbersome and scary".
 
   * Merging is **all-or-nothing** process.

   * You can't save your progress.

   * You can't switch to another branch temporarily.

   * There is **no way to test** a partly-done merge.

   * There is **no way to save** a partly-done merge.

   * If you make a mistake, you can't go back.

   * If you cannot resolve the **whole** conflict, there is nothing to
   do but to abort and start over.

## Alternatives

   PROTIP: If you would like to compare differences in files manually, 
   use a comparison utility. A free one for Windows is:

   <a target="_blank" href="http://meldmerge.org/">http://meldmerge.org</a>

### Interactive merge

   The interactive approach to merging two branches together (safely) is 
   <strong>incrementally</strong> in steps that allows for manual fixing.
   Some call this "rebase with history" because the technique creates new commits
   based on previous commits like rebase, but retains the previous commit history
   (which rebase currently does not do).

   The helper module that does this runs using Python (either version 2 or 3).

   It was mentioned by GitHub Data Scientist Patrick McKenna in 
   <a target="_blank" href="https://www.youtube.com/watch?v=2UKd0YMuc-M&t=32m3s">
   a YouTube video</a> "Greatest Hits of the Git Maintainers Room - Git Merge 2017" at his talk 
   during the GitMerge May 2017 conference.

   It was actually created in May 2013
   by Michael Haggerty (mhagger@alum.mit.edu), a GitHub Core committer
   and "theoretical physicist turned software developer".

   Imerge was described 
   <a target="_blank" href="https://www.youtube.com/watch?v=FMZ2_-Ny_zc">
   in this video from the GitMerge 2013 conference</a>
   which discusses the approach in
   <a target="_blank" href="https://softwareswirl.blogspot.com/2013/05/git-imerge-practical-introduction.html">
   a May 2013 blog post</a>.

   This article combines all the above into a step-by-step tutorial so "newbies"
   can easily benefit from this game-changing technology.


## Installation

1. Install Python.
0. Install Ruby (for its Make utility).
0. Install Git.

   On Windows, install Chocolatey.org and in a Run command window, 
   `choco install msysgit`.

0. If you are running Windows, be in <strong>Git Bash</strong> to run.


   ### Install test modules

0. Create and cd to a folder where you will clone a repository containing scripts:

   <pre><strong>cd ~
   mkdir git-imerge-test
   cd git-imerge-test
   </strong></pre>

0. Clone a repo containing scripts that creates test repos containing sample conflicts:

   <pre><strong>git clone <a target="_blank" href="https://github.com/wilsonmar/git-utilities">
   https://github.com/wilsonmar/git-utilities</a>
   cd git-utilities
   </strong></pre>

0. Create a folder where you want the test repo created.
0. Copy the git-imerge script to that new folder.

   * git-imerge-test-create.sh
   <br /><br />

0. Give run permissions to the scripts:

   On Mac and Linux:

   <pre><strong>chmod 555 git-imerge-test-create.sh
   </strong></pre>

   The above only needs to be done once.




   ### View git-imerge

0. Clone the git-imerge module onto your computer:

   <pre><strong>git clone <a target="_blank" href="https://github.com/mhagger/git-imerge">https://github.com/mhagger/git-imerge</a>
   cd git-imerge
   </strong></pre>

   The "active ingredient" is the `git-imerge` file.
   The file has no file extension because it's a [Git custom command](/git-custom-command/).

0. View the git-imerge file

   <pre><strong>cat git-imerge | more
   </strong></pre>

   Notice from the top line that it's run by a Python interpreter.

   The part that starts with `r"""` is what is displayed by the 
   <a href="#ManPage">`git imerge -h` command</a>.

0. Press q to escape the display or press Spacebar key for next page.


   ### Mac Homebrew install

0. If you have a Mac, view git-imerge specifications for Homebrew:

   <a target="_blank" href="https://github.com/Homebrew/homebrew-core/blob/master/Formula/git-imerge.rb">
   https://github.com/Homebrew/homebrew-core/blob/master/Formula/git-imerge.rb</a>

   PROTIP: The advantage of using Homebrew instead of manually installing is that
   it handles upgrades automatically.
   So before you upgrade MacOS again, check to see if there is an entry for that new version,
   then do a `brew upgrade`. The other advantage is that executing ``brew uninstall git-imerge``
   is easier than hunting down files to delete.

   The Ruby-language code has a work-around for the make installation path.

   It installs to the ``/bin`` folder.

   If you are OK with the above, install git-imerge:

   <pre><strong>brew install git-imerge
   </strong></pre>

   The response I got:

   <pre>
==> Downloading https://homebrew.bintray.com/bottles/git-imerge-1.0.0.sierra.bot
######################################################################## 100.0%
==> Pouring git-imerge-1.0.0.sierra.bottle.tar.gz
==> Using the sandbox
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
==> Summary
🍺  /usr/local/Cellar/git-imerge/1.0.0: 6 files, 168.1KB
   </pre>

   Notice the brew formula takes care of installing the bash_completion 
   where other daemons are also installed (`/usr/local/etc/`) and
   automatically invoked without you needing to manually add it in your bash_profile.

0. Skip to <a href="#Verify">verify</a>.


   ### Option B: Windows and Linux install

   Sorry, instructions for Mac and Linux will be coming.


   ### Manual install on Mac

0. Use Make to run Makefile to install Bash completions:

   On a Mac:

   <pre><strong>make
   </strong></pre>

   This copies file `<strong>git-imerge.bashcomplete</strong>` to 
   $(DESTDIR)/etc/bash_completion.d/git-imerge

   PRPTIP: In Make files, tabs should be used instead of spaces to indent items.

   See: 
   https://github.com/bobthecow/git-flow-completion/wiki/Install-Bash-git-completion

0. Make Bash completion occur at Terminal start-up:

   On a Mac:

   <pre><strong>vim ~/.bash_profile
   </strong></pre>

   Add near other Python settings:

   <pre>if [ -f $(brew --prefix)/etc/bash_completion ]; then
. $(brew --prefix)/etc/bash_completion
fi
   </pre>

   CAUTION: The above needs to be confirmed.

0. Re-start the Terminal to take the changes:

   <pre><strong>source ~/.bash_profile
   </strong></pre>


   <a name="Verify"></a>

   ### Get menu to verify

   Regardless of how it was installed:

0. Verify by obtaining the list of commands:

   If you want just a reminder of the keywords:
   
   <pre><strong>git imerge
   </strong></pre>

   The response should be this (error message):

   <pre>
usage: git-imerge [-h]
                  {start,merge,rebase,drop,revert,continue,finish,diagram,list,init,record,autofill,simplify,remove,reparent}
                  ...
git-imerge: error: too few arguments
   </pre>

   (ignore the "too few arguments")


   <a name="ManPage"></a>

   Alternately, for a whole "man page" as well:

   <pre><strong>git imerge -h
   </strong></pre>

   The response adds to the above:

   <pre>
Git incremental merge
&nbsp;
Perform the merge between two branches incrementally.  If conflicts
are encountered, figure out exactly which pairs of commits conflict,
and present the user with one pairwise conflict at a time for
resolution.
&nbsp;
Multiple incremental merges can be in progress at the same time.  Each
incremental merge has a name, and its progress is recorded in the Git
repository as references under 'refs/imerge/NAME'.
&nbsp;
An incremental merge can be interrupted and resumed arbitrarily, or
even pushed to a server to allow somebody else to work on it.
&nbsp;
Instructions:
&nbsp;
To start an incremental merge or rebase, use one of the following
commands:
&nbsp;
    git-imerge merge BRANCH
        Analogous to "git merge BRANCH"
&nbsp;
    git-imerge rebase BRANCH
        Analogous to "git rebase BRANCH"
&nbsp;
    git-imerge drop [commit | commit1..commit2]
        Drop the specified commit(s) from the current branch
&nbsp;
    git-imerge revert [commit | commit1..commit2]
        Revert the specified commits by adding new commits that
        reverse their effects
&nbsp;
    git-imerge start --name=NAME --goal=GOAL BRANCH
        Start a general imerge
&nbsp;
Then the tool will present conflicts to you one at a time, similar to
"git rebase --incremental".  Resolve each conflict, and then
&nbsp;
    git add FILE...
    git-imerge continue
&nbsp;
You can view your progress at any time with
&nbsp;
    git-imerge diagram
&nbsp;
When you have resolved all of the conflicts, simplify and record the
result by typing
&nbsp;
    git-imerge finish
&nbsp;
To get more help about any git-imerge subcommand, type
&nbsp;
    git-imerge SUBCOMMAND --help
&nbsp;
positional arguments:
  {start,merge,rebase,drop,revert,continue,finish,diagram,list,init,record,autofill,simplify,remove,reparent}
                        sub-command
    start               start a new incremental merge (equivalent to "init"
                        followed by "continue")
    merge               start a simple merge via incremental merge
    rebase              start a simple rebase via incremental merge
    drop                drop one or more commits via incremental merge
    revert              revert one or more commits via incremental merge
    continue            record the merge at branch imerge/NAME and start the
                        next step of the merge (equivalent to "record"
                        followed by "autofill" and then sets up the working
                        copy with the next conflict that has to be resolved
                        manually)
    finish              simplify then remove a completed incremental merge
                        (equivalent to "simplify" followed by "remove")
    diagram             display a diagram of the current state of a merge
    list                list the names of incremental merges that are
                        currently in progress. The active merge is shown with
                        an asterisk next to it.
    init                initialize a new incremental merge
    record              record the merge at branch imerge/NAME
    autofill            autofill non-conflicting merges
    simplify            simplify a completed incremental merge by discarding
                        unneeded intermediate merges and cleaning up the
                        ancestry of the commits that are retained
    remove              irrevocably remove an incremental merge
    reparent            change the parents of the HEAD commit
&nbsp;
optional arguments:
  -h, --help            show this help message and exit
   </pre>


## Run scripts

### Create test repo

0. Run the script which sets up data containing conflicts
   and perform a merge using git-imerge:

   <pre><strong>./git-imerge-test-create.sh
   </strong></pre>

   (You may want to later adapt this to create your own data and commands.)


   #### How the test repo is created

   To avoid problems, the script aims to be "idempotent" in that each time it's run,
   the same result is produced. To achieve this, the script creates a repo.
   In subsequent runs the repo (.git folder) is deleted before starting over.

   Each branch contains a single file named <strong>somefile.md</strong>.
   
   The script makes a first commit with a blank file so branches can be created.

   In the repo, a branch named feature1 is created so that commits can be added
   to it in parallel with master.

   A "for" loop in the script alternates between the two branches 
   to add a line at the bottom of the file, 
   then makes another commit. Here are the message text of commits:

   To make conflicting lines, each line that will conflict contains its own branch name
   (master or feature1). A cat of the file within the master branch contains:

   <pre>
A1
B2 master
C3
D4
E5
F6 
G7 master
H8
I9 master
10
11
   </pre>

   A cat of the file within the feature1 branch contains:

   <pre>
A1
B2 feature1
C3
D4
E5
F6 
G7 feature1
H8
I9 feature1
10
11
   </pre>

   After construction, the branch list shows the last commits for each branch.
   For example:

   <pre>
  feature1 55d4211 I
* master   80fa56b 9
   </pre>   

   The asterisk (*) indicates that the currently checked-out branch is "master".

   After printing out the above, the script <strong>pauses</strong> with this message:

   <pre>Press enter to continue</pre>


   ### Analyze native merge

   Let's pause here to review the repo created.

0. Do a diff to see:

   <pre><strong>git diff master feature1
   </strong></pre>

   The default display has a column in front of each line of content
   (with commit ids that will be different):

   <pre>
diff --git a/somefile.md b/somefile.md
index 8cb48cc..db324d6 100644
--- a/somefile.md
+++ b/somefile.md
@@ -1,9 +1,9 @@
 A1
-B2 master
+B2 feature1
   </pre>

   The "---" at the top indicates where a - (minus sign) marks lines from file "a".

   The "+++" at the top indicates where a + (plus sign) marks lines from file "b".

   Different colors may also appear depending on your setup.

   The difference between an imerge versus a native git merge is that imerge presents
   only a single instance of such markers, whereas a native git merge put such markers
   in several places. 

0. As an aside, let's do a native git merge as the basis for comparison.

   On a Mac, press control+C to exit the running script.

   Be at the master source branch and merge in the "up-start" branch into it:

   <pre><strong>git checkout master
   git merge feature1
   </strong></pre>

   The response we expect is:

   <pre>
CONFLICT (content): Merge conflict in somefile.md
Automatic merge failed; fix conflicts and then commit the result.
   </pre>

0. View modifications about conflicts Git made to the file:

   <pre><strong>cat somefile.md
   </strong></pre>

   You should now see:

   <pre>
A1
B2 feature1
C3
D4
E5
F6
G7 feature1
H8
I9 feature1
   </pre>

   The format of above markers for a two-way merge is:

   <pre>git config --global merge.conflictstyle merge
   </pre>

0. Try the three-way merge formatting by typing this:

   <pre><strong>git config --global merge.conflictstyle diff3
   </strong></pre>

   The first line below the `<<<<<< HEAD` is the master (HEAD) branch.

   The bottom marker is the branch containing conflicting text right above it.

   The line above the "=======" is the <strong>original branch before change</strong>.

   Hello, master change.", and the "b1" branch has "Hello, branch b1 change.". This three-way diff can be very helpful in determining what really changed.


0. Re-run the script above.

0. Edit and save the file.
   
   However, if you want to be adament and <strong>overwrite</strong> 
   what's in master with the entirety of them up-start's file from the feature1 branch:

   <pre><strong>git checkout --theirs somefile.md
   </strong></pre>

   Alternately, if you want to just <strong>keep</strong> 
   whatever was in the original source (master) branch:

   <pre><strong>git checkout --ours somefile.md
   </strong></pre>

0. Add and commit the change:

   <pre><strong>git add somefile.md && git commit -m"resolved"
   </strong></pre>

   NOTE: All files need to be added again, not just the ones in conflict.


   ### Resources

   The steps described above combines the best of advice from others about traditional git merge:

   * http://genomewiki.ucsc.edu/index.php/Resolving_merge_conflicts_in_Git


   ### Interactive merge

   Anyway, back to interactive merge:

   Essentially, we want to end up with this in a Git Network Diagram:
   <a target="_blank" href="http://softwareswirl.blogspot.com/2012/12/mapping-merge-conflict-frontier.html">*</a>

   <pre>
o - 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 - I11'  ← master branch
     \                                               /
      A -- B -- C --- D --- E --- F --- G --- H --- I       ← branch feature1
   </pre>

   However, instead of merging commit I with 11, we want to do an interactive
   merge by merging incrementally as illustrated by this diagram:

   <pre>
o - 0 - 1  - 2  - 3  - 4  - 5  - 6  - 7  - 8  - 9  - 10  - 11    ← master
    |   |    |    |    |    |    |    |    |    |     |     |
    A -   --   --   --   --   -- A6 -   -- A8 - A9 - A10 - A11
    |   |    |    |    |    |    |    |    |
    B -   --   --   --   --   -- B6 - B7 - B8   X
    |   |    |    |    |    |    |
    C -   --   --   --   --   -- C6   X
    |   |    |    |    |    |    |
    D -   --   --   --   --   -- D6
    |   |    |    |    |    |    |
    E - E1 - E2 - E3 - E4 - E5 - E6
    |   |
    F - F1   X
    |   |
    G - G1
    |   |
    H - H1
    |   |
    I - I1
&nbsp;
    ↑
  branch feature1
   </pre>

   Commit A is merged with 1, etc.

   "X" in the diagram below marks where is conflict is designed to occur.

   To see this in action:

0. Run the script again:

   <pre><strong>./git-imerge-test-create.sh
   </strong></pre>

0. But this time, press Enter for the script to
   begin merge much like with standard git merge
   by checking out the <strong>destination</strong> branch:

   <pre><strong>git checkout master
   </strong></pre>

0. Tell git imerge what branch you want to merge into:

   <pre><strong>git imerge start --name=NAME --goal=full feature1
   </strong></pre>

   NAME stands for the commit message of your final commit when merging is finished.

   QUESTION: How is this different than `--first-parent feature1`?
   When do we use that?


   ### Intermediate state handling

   Internally, the tool uses `git bisect` to find pairwise merges that conflict.
   
   When it hits a conflict, it asks for help.

0. When imerge processing stops due to a conflict,
   notice you are at branch "imerge/NAME" automatically created to hold results:

   <pre><strong>git branch -avv
   </strong></pre>

   The response (where each run will have different commit IDs):

   <pre>
  feature1    2fe920d I
* imerge/NAME b9a54e5 imerge 'NAME': automatic merge 2-1
  master      7b85c5f 9
   </pre>

   Below are internals information you may not care about:
   During an incremental merge, intermediate results are stored directly in your repository as special references:

   ``refs/imerge/NAME/state`` -
   A blob containing a little bit of metadata.

   ``refs/imerge/NAME/manual/M-N`` - 
   Manual merge including all of the changes through commits M on master and N on branch.

   ``refs/imerge/NAME/auto/M-N`` -
   Automatic merge including all of the changes through commits M on master and N on branch.

   ``refs/heads/imerge/NAME`` -
   Temporary branch used when resolving merge conflicts.

   ``refs/heads/NAME`` -
   Default reference name for storing final results.

   I mention all this because this error occurs if you try to checkout a different branch
   after 

   <pre>
somefile.md: needs merge
error: you need to resolve your current index first
   </pre>


   <a name="CycleFixes"></a>

   ### Cycle of fixes

   Resolve conflicts in the sample the usual way:

0. In larger files in real life, you may need to use a diff utility 
   to identify differences. I will be move material from my class here.

0. Resolve deliberate conflicts in the example by using a text editor on somefile.md :

   <pre>
A1
B2 feature1
   </pre>

   The ======= separates content were inserted by Git to divide
   what is conflicting between the two branches.

   That and the beginning and ending markers also inserted by Git need to be removed
   before saving the file.

   At the bottom is the SHA1 commit ID.


0. Remove lines added to end up with:

   <pre>
A1
B2 feature1
...
   </pre>

   NOTE: We keep the "feature1" version because that's the change we typically want to make.

0. Save the file. 

0. Add and commit the change:

   <pre><strong>git add somefile.md && git commit -m"Fix B2"
   </strong></pre>

0. Resume:

   <pre><strong>git imerge continue
   </strong></pre>

   If you forgot to do a commit, you'll see this message:

   <pre>[file]: needs merge
   </pre>

0. <a href="#CycleFixes">Repeat the cycle of fixes above</a> until you see:

   <pre>
Merge is complete!
   <pre>

   BLAH QUESTION for Michael: Why does "B2 master" appear again?
   And seeminly out of order?

   <pre>
A1
B2 master
C3
   </pre>   

   And so on:

   <pre>
A1
B2 feature1
C3
D4
E5
F6
G7 master
   </pre>   

   QUESTION: Why again?

   <pre>
A1
B2 feature1
C3
D4
E5
F6
G7 master
H8
   </pre>

  The last one:

  <pre>
A1
B2 feature1
C3
D4
E5
F6
G7 feature1
H8
I9 master
  </pre>

   ### Diagram

0. Obtain a diagram to visualize:

   <pre><strong>git imerge diagram
   </strong></pre>

   An example of the output:

   <pre>
**********
*??|?????|
*--+-----+
*??|#?????
*??|??????
*??|??????
*--+??????
&nbsp;
Key:
  |,-,+ = rectangles forming current merge frontier
  * = merge done manually
  . = merge done automatically
  # = conflict that is currently blocking progress
  @ = merge was blocked but has been resolved
  ? = no merge recorded
   </pre>


   ### Abort

0. The same command is used to abandon the merge process for both the atraditional 
   `git merge` and `git-imerge`:

   <pre><strong>git merge --abort
   </strong></pre>

   The difference is that the traditional git merge takes an "all or nothing" approach,
   and you wold have to start over.

   However, with `git-imerge`, unlike regular git merge, aborting does not 
   abandon all previous changes because
   git-imerge has recorded each of the <strong>intermediate merges</strong>
   in additional separate branches.

   Therefore...

   ### Abort remove

0. If you are using incremental merge and need to completely abort,
   remove the temporary branches ``git-imerge`` created:
   
   <pre><strong>git imerge remove
   </strong></pre>

0. In either the traditional git merge and git imerge, 
   get back to the branch you were in before starting merge.
   For example:

   <pre><strong>git checkout master
   </strong></pre>


   <a name="FinalMerge"></a>

   ### Interactive Merge Final Merge

0. If you are using imerge, you can simplify commits for the permanent record, 
   to omit the intermediate results (like a rebase):

   <pre><strong>git imerge finish --goal=merge
   </strong></pre>


   ### Verify

   By default, the steps above creates a new branch NAME that points at the result, 
   and checks out that branch.

0. See the branches:

   <pre><strong>git branch -avv
   </strong></pre>

   A sample response:

   <pre>
   </pre>

0. See the final commit created by git-imerge:

   <pre><strong>git log --decorate --graph --all
   </strong></pre>
   
   The most recent log message for me:

   <pre>
*   commit 02631c734be37a281a0676aaa851d58a11b904af (NAME)
|\  Merge: 72fc5b9 8e2b346
| | Author: Wilson Mar <wilsonmar@gmail.com>
| | Date:   Thu Jun 1 18:33:44 2017 -0400
| | 
| |     Merge feature1 into master (using imerge)
   </pre>

## Other merging solutions

<a target="_blank" href="http://www.philprice.me/">
Phil Price</a> of Microsoft 
<a target="_blank" href="https://github.com/pprice">wrote</a>
Typescript "codelens" to provide a better display of merge conflicts in 
<a target="_blank" href="https://github.com/Microsoft/vscode">VS Code</a>

Inspired by
https://atom.io/packages/merge-conflicts
for Atom


## Resources

   * https://sethrobertson.github.io/GitFixUm/fixup.html


## More #

This is one of a series on Git, GitHub, and GitLab:

{% include git_links.html %}
