---
layout: post
title: "Git basics (automated by a script)"
excerpt: "Get tips about the most common git commands (including stash, checkout, etc.) executed in a script so can experiment on your own"
modified:
tags: [git]
image:
# git-basics-1900x500-247310.jpg from png
  feature: https://user-images.githubusercontent.com/300046/44609628-b60ca000-a7b5-11e8-95c9-bfc5d1871487.jpg
  credit: Wilson Mar
  creditlink: https://github.com/wilsonmar/git-utilities/blob/master/git-basics.sh
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/git-basics">This tutorial</a> shows you a rather basic (typical) workflow for using Git. 

To save you time and the potential for typos, we've created a <strong>Bash script</strong> that you can run on your Mac or within a Git Bash terminal on your Windows machine. The script performs a set of commands to establish a specific condition of untracked files and entries in the Git stage and commit history.

Having a repeatable script enables you to experiment on commands. When example commands are not coming back correctly, a script also provide you a way to say <strong>"it was working before"</strong> rather than blaming yourself for not typing commands correctly.

BTW I've viewed <a target="_blank" href="https://wilsonmar.github.io/git-github-videos/">every video and book on this topic</a> and I haven't seen this approach. So such an approach is a unique innovation of just this website.

Steps in the script includes how to travel back in time (using git checkout) and what you can do if you're in the middle of working on a file <strong>eligible for commit</strong> but you need to immediately edit and commit other files right away, but don't want to lose the current set of changes.

The script includes <tt>git stash</tt> commands which uses a "hidden compartment" where you can temporarily store files so they won't be included in the next commit. For detailed information about the stash, see the official documentation at:

   * <a target="_blank" href="https://git-scm.com/docs/git-stash">https://git-scm.com/docs/git-stash</a>
   <br /><br />

<hr />

   ### Preparation (Optional)

1. In a browser view the git-basics script at:

   <pre><strong>https://github.com/wilsonmar/git-utilities/blob/master/git-basics.sh</strong></pre>

   This is the script that this tutorial requests you to run. 

   PROTIP: It's wise to examine any script before running it to check if there are potentially malicious commands. The script does not pull in other scripts.

2. Click the "Star" to give us some cred. Thanks!

3. If you cannot run scripts, view the results anyway by viewing captured from a run:

   <pre>https://github.com/wilsonmar/git-utilities/blob/master/git-basics.log</pre>

   ### Live run

4. If you Fork the repo to your own account, remember to rename the account name in the URLs in this tutorial.

5. Highlight the entire command below by clicking on it until the whole line is highlighted.

   <pre><strong>sh -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/git-utilities/master/git-basics.sh)"</strong></pre>

6. On a Mac, press command+C to copy it into your Clipboard.

   On Windows, press Ctrl+C to copy it into your Clipboard.

7. On a Mac, open a Terminal by moving your cursor to the upper-right corner and clicking the magnifying glass search icon. Type "Ter" to click "Terminal.app" when it appears.

   On Windows, click the Windows icon and type "bash" to click "git bash" when it appears.

8. On a Mac, click under the prompt and press command+V to paste the command.

   On Windows, right-click under the prompt and press command+V to paste the command.

9. Press Enter to invoke the command.

## Commentary on run output

Numbers below refer to numbers mentioned in the script and appearing in the run output:

1. git init (within /Users/wilsonmar/git_repo, which is the location of the folder created by the script).

   On your machine, you would see your user id instead of "wilsonmar".

   <pre>git config --global core.safecrlf false</pre>

   is issued to mute warnings on Windows machines such as 
   "LF will be replaced by CRLF".

2. Create README.md & .gitignore files:

   PROTIP: The git stash command ignores files specified in the .gitignore file which specifies files which should not be pushed up to GitHub or GitLab.

3. File amy is the file that is specified in .gitignore.

4. File bob is created but remains as untracked in all git status commands.

   PROTIP: Since untracked files are not included in commits, they are not processed by stash or most other git commands, by default. 

5. File chris is created and added to the Git "index", also called the "stage" with a<br />
   git add command which does not provide a response unless there is an error.

6. File don is added and commited once and not edited again, so it remains in history and does not appear in git status commands.

   PROTIP: Since a commit was not made after chris was added, when don is commited, chris got committed with it since both were in the stage/index.

7. File ed is committed, but appears in <strong>modified</strong> status after another line is added to the file.

8. File finn is committed then modified with a second line, but a git add is performed without a git commit on the change.

9. File george is committed twice.

10. File harry is created, but not added nor committed by git.

    QUIZ: Which of the above will show up in a <tt>git status</tt> command.

11. A file listing shows that all the files created are visible.

    PROTIP: A git checkout command later will change the files and their contents.

12. The extra attributes in <tt>git status -s -b</tt> displays a compressed list.

    PROTIP: This command is so frequently used that many define an alias for it by editing the ~/.bash_profile file, and add <tt>gsl</tt>. See <a target="_blank" href="https://wilsonmar.github.io/git-shortcuts">my Git Shortcuts tutorial</a>.

    An alias is also frequently added for <tt>git log</tt> command because so many tags are usually needed to make the log more concise.

13. To make it more plain in this example, an ordinal number was added to commits.

14. The <tt>git reflog</tt> command lists reference codes that you will use later to specify the specific point in time you want to return to.

15. We use <tt>git checkout HEAD@{4}</tt> to return to the working directory as it was after the 2nd commit of Don.

    QUIZ: Why did the command abort and did not complete? 

    PROTIP: The "M" next to file ed means Modified and thus being tracked by Git.
    Being tracked by Git means it must be specifically added or stashed before git can commit.

16. So we stash the file ed. 

17. PROTIP: We do not recommend using the plain <tt>git stash</tt> command because the automatically generated stash message is not memorable. It does not give a clue about what it contains in the stash list.

18. The <tt>git stash show</tt> command provides more details about what's in the stash.

    PROTIP: Untracked files get stashed only when <tt>--untracked</tt> is specified on git stash.
    If you use it, we recommend using a separate stash command.

19. Notice that file ed no longer shows in git status because it has been stashed away.

    Untracked files still appear there on the sidelines even though they are not processed by Git.

20. Here is when we travel back in time using the <tt>git checkout</tt> command.

    PROTIP: Don't be scared off by the statement about 'detached HEAD'.

    Notice the last statement returned from <tt>git checkout</tt>, such as:

    <tt># HEAD is now at 744646a 3rd commit - 7. I'm Ed. But I'll soon be modified.</tt>

    Scroll back to look at the <tt>git reflog</tt> to see that this is one commit before the <tt>HEAD@{4}</tt> location specified in the <tt>git checkout</tt> command.

21. Displaying the contents of file ed (using the cat command) reveals that only the first line is there.

    QUIZ: Why isn't the second line there?

    Because it has been stashed away.

22. In the list of files after a checkout back in time, why are latter commits not included?

    Files finn and george were added after the point in time from the checkout at <tt>HEAD@{4}</tt>.

23. Nevertheless, commits for Finn and George are seen in <strong>git reflog</strong> because that command is the overlord of all actions by Git and live outside of specific times.

24. A file can be modified while in a "HEADLESS" state.

25. We can see that the file is modified from a git status command.

26. We go back to the original <strong>master</strong> branch HEAD

27. A listing of files in the working directory shows the whole gang back together.

28. A display of the contents of the file changed while back in time appears to be carried forward.

    QUIZ: Why can changes be made when previously changes to ed has to be stashed?

    That's because changes to ed were made under the master branch.

    This is how a "gh_pages" branch to contain documentation on GitHub can exist detached but in parallel with the master branch.

29. To get that extra line back from stash, <strong>git stash pop</strong> and cat (display) the file:

    The "drop" response means that once a file is retrieved from stash, it is deleted from the stash stack.

30. A git status shows ed as having been modified.

31. Now see that the second line re-emerges.

32. A git stash command would return nothing if all stashed have poped out.

33. A git reflog command would chronicle this.

34. An alternative to stash is to create a branch and commit to it, as shown for the file harry.


## GUI

Can GUI Git apps do the same?

   The Tower Git client provides a Stash button:

   ![git-basics-tower-save-534x190-15709](https://user-images.githubusercontent.com/300046/44314255-ddd5bf80-a3d3-11e8-8668-60f6902a2ad6.jpg)

## Alt users

PROTIP: Some people use stash as a way to move files between branches.
If you're on "branch-A" and want changes to apply to "branch-B", 
checkout branch-B and then stash.

## Git Aliases

<a target="_blank" href="https://vagr9k.me/making-git-usage-more-comfortable-with-aliases/">*</a>

<pre>
  stsh = stash --keep-index
  staash = stash --include-untracked
  staaash = stash --all
  s=stash
  sa=stash apply
  sx=stash drop
  sl=stash list
  sd=stash show --patch --stat
  sp=stash pop
  ss=stash save
  ssu=stash save --include-untracked
</pre>

## Git Basics tutorials

https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners


## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
