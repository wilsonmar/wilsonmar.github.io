---
layout: post
title: "Git shortcuts (in a CLI Terminal)"
excerpt: "A few swipes of your hand and it's done for you"
tags: [git, commands, utilities]
date: "2017-08-03"
file: "git-shortcuts"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on tutorial on how you can configure and use Terminal and macros to save time working with Git and GitHub. The steps are intended for "newbies" new to the operating system.

Windows users: <a href="#WindowsInstall">skip to the Windows installation section</a>.

## Default Terminal on MacOS

To open the Terminal program that comes with MacOS:

0. Click the blue Finder icon at the left side of the Launch bar at the bottom of the screen.
0. Click Go on the menu or press at the same time shift + command + A keys.
0. Scroll down to click the click the <strong>Utilities</strong> folder.

0. PROTIP: Drag the Terminal icon and drop it on the Launchbar so it's easier to find in the future.

0. Click the Terminal icon to open it.

0. Press command + N to open using the Basic (default) Terminal settings (white background).

   PROTIP: Alternately, enjoy different colors by clicking menu item <strong>Shell</strong> then <strong>New Window</strong> and selecting one of the options listed:

   ![macos-terminal-shells-688x443-63273](https://user-images.githubusercontent.com/300046/31025658-992d58f2-a500-11e7-82a5-878017f8f48f.jpg)

   * Grass (dark green) I cd to my public website posts that go to GitHub
   * Ocean (dark blue)  I cd to my private notes repository
   * Red Sands I cd to the code repository I'm working on
   * Homebrew (green font on black) I cd to the server I'm working on
   <br /><br />


## Alt Terminal on MacOS

PROTIP: Alternately, some prefer to use a 3rd-party Terminal program which has additional features.

1. Read about features not in the default program:

   <a target="_blank" href="https://www.iterm2.com/features.html">
   https://www.iterm2.com/features.html</a>

   To download and use it:

0. Open a Terminal (as shown above).
0. Install Homebrew.
0. Use Homebrew to download

   <tt><strong>
   brew install -g iterm2
   </strong></tt>

0. Open a Finder and Go to Applications. Scroll to click iTerm2.

0. PROTIP: Drag the Terminal2 icon and drop it on the Launchbar so it's easier to find in the future.

0. Read its documentation:

   <a target="_blank" href="https://www.iterm2.com/documentation.html">
   https://www.iterm2.com/documentation.html</a>


## Edit .bash_profile on Mac

0. Install a text editor you want to use.
0. Open a Terminal window.

0. If you have a new MacOS machine, create a file on your Home folder that MacOS executes before opening any Terminal window:

   <pre><strong>echo "#">>~/.bash_profile
   </strong></pre>

   * `~` designates the home folder for you account.
   * `"#">>` adds a comment (#) to the bottom of the file in case the file has already been created, rather than wiping out the file.
   * `.` in front of a file (in \*nix systems such as Mac) denotes a hidden file.
   <br /><br />

0. In a Terminal, open to edit. Different editors have different commands. In this example, the Nano text editor is being used because Nano is built into MacOS:

   <tt><strong>nano ~/.bash_profile
   </strong></tt>


   ### Git shortcuts on MacOS

   With the `~/.bash_profile` file in an editor:

0. Highlight these lines, then press command+C to copy it your machine's (invisible) Clipboard:

   <a name="MacAliases"></a>

   <pre>
alias sbp='source ~/.bash_profile'
alias rs='exec -l $SHELL'
alias ll='ls -lri'
alias dir='ls -alr'
&nbsp;
alias gwm='cd ~/gits/wilsonmar/wilsonmar.github.io;git status'
alias gf='cd ~/gits/wilsonmar/futures;git status'
&nbsp;
alias gs='git status'
alias gb='git branch -avv'
alias gf='git fetch;git diff master..origin/master'
alias gm='git merge origin/master'
alias gl='clear;git status;git log --pretty=format:"%h %s %ad" --graph --since=1.days --date=relative;git log --show-signature -n 1'
alias gbs='git status;git add . -A;git commit -m"Update";git push'
function gas() { git status ;  git add . -A ; git commit -m "$1" ; git push; }
&nbsp;
alias bs='bundle exec jekyll serve --config _config.yml,_config_dev.yml'
alias gcs='cd ~/.google-cloud-sdk'
alias myip="ifconfig en0 | grep inet | grep -v inet6 | cut -d ' ' -f2"
alias aih='iothub-explorer'
   </pre>


   ### Switch programs

0. Press command+Tab repeatedly until you see the icon for the text editor.

0. In the text editor, click your mouse at the bottom of the file.

0. Press command + V to paste from the Clipboard.

0. Save the file using the command expected by the editor you're using.

   For Nano, press <strong>control + W</strong>.


   ### Update Terminal

0. Open a new Terminal instance, which loads the new version of bash_profile.
   

   ### Try sbp alias for Mac
   
   <a name="sbp"></a>

0. Instead of typing out `source ~/.bash_profile`, type:

   <tt><strong>sbp
   </strong></tt>

   This invokes the alias defined:

   <pre>
alias sbp='source ~/.bash_profile'
   </pre>

   This command just returns another prompt.

   ### Edit aliases

   You can delete the aliases you want or add others, then save the file again.

0. Switch back and forth between the text editor and
0. Remember to source the file or open a new window.


0. Skip to <a href="#GitContainer">create Git container</a>.



<hr />


<a name="WindowsInstall"></a>

## Windows Git Bash

0. Click the Windows icon at the lower-left corner of your Desktop.
0. Type "Git". If you see <strong>Git Bash</strong>, you likely used `choco install git` to install Git.

   Alternately, you would need to <a href="#AddPATH">add a folder and edit the Path system environment variable</a>.

0. PROTIP: Right-click on "Git Bash" and select "Pin to taskbar" so it can be accessed quickly in the future.
0. Open Notepad: click the Windows search icon, type no and click on <strong>Notepad</strong> in the list that appears.
   Alternately, you can use another text editor (such as Visual Studio Code).
0. Highlight and press Ctrl+C to copy the following to your Clipboard.

   <a name="WindowsAliases"></a>

   <pre>
echo "Processing .bash_profile ..."
alias gwm='cd ~/gits/wilsonmar/wilsonmar.github.io;git status'
alias gs='git status'
alias gf='cd ~/gits/wilsonmar/futures;git status'
alias gb='git branch -avv'
alias gl='clear;git status;git log --pretty=format:"%h %s %ad" --graph --since=1.days --date=relative;git log --show-signature -n 1'
alias gbs='git status;git add . -A;git commit -m"Update";git push'
   </pre>

   TODO: Figure out a replacement for this:

   <pre>
function gas() { git status ;  git add . -A ; git commit -m "$1" ; git push; }
   </pre>

0. Click Notepad menu File > Save As.
0. Save to `C:\Program Files\Git\cmd`
0. For File Name, type `.bashrc`.
0. To the right or "Save as Type" click on "Text Documents (\*.txt)" and select <strong>All files (\*.\*)</strong>.

   This is so Windows does not automatically add ".txt" to the file name.

0. Click Save.


   <a name="GitContainer"></a>

   ### Container for Git cloning

   Git commands need a GitHub repository to work with. So you're welcome to my git-utilities repo, which has some commands you may like.

   PROTIP: Setup a container directory to house (group together) repositories you clone from GitHub. This is because cloning creates only the repository name and not the user. Although the author can be found with a `git remote -v` command, you may want a way to put several repos for the same folder together, or additional related files such as pdf's and website links.

0. On Mac: Open a Terminal window<br />
   On Windows, click on the Windows or Search icon, then type Po and right-click "Windows PowerShell" to select "Run as Admistrator. Click Yes to allow.
0. Begin from your user account's home page. On Mac or Windows PowerShell:

   <tt><strong>cd ~
   </strong></tt>

0. Create a folder to house your development projects:

   <tt><strong>mkdir gits && cd gits
   </strong></tt>

   PROTIP: Instead of `gits`, some use `dev` or `Sites` or `Projects` to house related software development work, separate from other folders such as "Desktop" and "Document" under your MacOS user account folder.

   Here you can put various files related to Git, such as tutorial PDFs. However, some prefer to put such files in the `.git` folder that the Git client installer creates under your user home folder. That is a different folder than the .git folder created for each repository cloned.

0. PROTIP: Create a folder representing the GitHub account to house new websites to be created (substituting "wilsonmar" with your GitHub user name):

   <tt><strong>mkdir wilsonmar
   </strong></tt>

0. Only on MacOS, set permissions to write to the new folder. The $USER subsitute your own user name:

   <tt><strong>
   sudo chown -R $USER wilsonmar<br />
   sudo chmod -R +rwx wilsonmar
   </strong></tt>

   Type in your password when prompted.

0. Navigate into the containing folder where a new directory will be automatically built by git clone commands:

   <tt><strong>cd wilsonmar
   </strong></tt>


   ### Fork and/or Clone git-utilities

0. Install a Git client if you have not already.
0. Open another Terminal instance.
0. Clone:

   <tt><strong>git clone https://github.com/wilsonmar/git-utilities \-\-depth=1
   </strong></tt>

   The `depth=1` argument specifies to obtain only the latest commits for each object, thus not obtaining prior history.

   Alternately, if you intend on making changes, on GitHub Fork the repo to your own account, then clone the repo under your own account.

0. Navigate into the new repo (type cd and press Tab for auto-complete):

   <tt><strong>cd git-utilities
   </strong></tt>




<hr />
   
<a name="TryIt"></a>

## Try aliases

   Try the aliases defined above <a href="#MacAliases">for MacOS</a> and Windows:


   <a name="gs"></a>

0. Instead of typing out `git status`, type:

   <tt><strong>gs
   </strong></tt>

   This invokes the alias defined:

   <pre>
alias gs='git status'
   </pre>

   If there has been no changes, the output is:

   <pre>
On branch master
Your branch is up-to-date with 'origin/master'.
&nbsp;
nothing to commit, working tree clean
   </pre>

   

   <a name="gb"></a>

0. Instead of typing out `git branch -avv`, type:

   <tt><strong>gb
   </strong></tt>

   This invokes the alias defined:

   <pre>
alias gb='git branch -avv'
   </pre>

   A sample response:

   <pre>
* master                54e5bb0 [origin/master] Update
  remotes/origin/HEAD   -> origin/master
  remotes/origin/master 54e5bb0 Update
   </pre>   

   [<a href="https://wilsonmar.github.io/git-flow#BranchList">Return to git-flow</a>]


   <a name="gl"></a>

0. Instead of typing out `git log`, type:

   <tt><strong>gl
   </strong></tt>

   This invokes the alias defined:

   <pre>
alias gl='clear;git status;git log --pretty=format:"%h %s %ad" --graph --since=1.days --date=relative;git log --show-signature -n 1'
   </pre>

   A sample response:

   <pre>
* d590833 Update 19 hours ago
* 6994b57 Update 21 hours ago
commit 54e5bb00b5ea0bce2cdcb7626f94a8cad83b1abd (HEAD -> master, origin/master, origin/HEAD)
Author: Wilson Mar &LT;wilsonmar+github@gmail.com>
Date:   Fri Sep 29 12:04:29 2017 -0600
&nbsp;
    Update
   </pre>

   [<a href="https://wilsonmar.github.io/git-flow#Log">Return to git-flow</a>]



   <a name="gbs"></a>

0. Instead of typing out `git add . -A;git commit -m"Update";git push`, type:

   <tt><strong>gbs
   </strong></tt>

   This invokes the alias defined:

   <pre>
alias gbs='git status;git add . -A;git commit -m"Update";git push'
   </pre>

   [<a href="https://wilsonmar.github.io/git-flow#gbs">Return to git-flow</a>]



   <a name="gas"></a>

0. Instead of typing out `git add` and `git commit` for a single commit, type:

   <pre><strong>gas "Closes JIRA #231"
   </strong></pre>

   This invokes the alias defined:

   <pre>
function gas() { git status ;  git add . -A ; git commit -m "$1" ; git push; }
   </pre>

   PROTIP: Time saved using this can be huge because this reduces the "friction" to make small incremental changes.

   [<a href="https://wilsonmar.github.io/git-flow#gas">Return to git-flow</a>]




   <a name="gfu"></a>

0. Instead of typing out `git fetch upstream` and `git checkout master`, type:

   <pre><strong>gfu
   </strong></pre>

   This invokes the alias defined:

   <pre>
alias gfu='git fetch upstream ; git checkout master'
   </pre>

   PROTIP: Time saved using this can be huge because this reduces the "friction" to make small incremental changes.

   [<a href="https://wilsonmar.github.io/git-flow#Fetch">Return to git-flow</a>]



   ### Backup!

0. When you're done, save the file again and exit the program using the command expected by the editor you're using.

   For Nano, press <strong>control + X</strong> to exit the program.

0. PROTIP: So that you can recover quickly in case your laptop is no longer available, copy the `~/.bash_profile` file to an off-site backup location such as drive.google.com, in a folder called "mac-setup" or whatever you prefer.


<hr />


## Windows Doskey

The Windows equivalant of the `alias` command on Mac is:

   doskey macroName=macroDefinition

Windows Macro parameters are referenced in the definition via $ prefixed positions: $1 through $9 and $* for all.

   <tt><strong>set "cdMe=cd <em>some_path</em>"
   </strong></tt>

Usage (from command line or script)

   <tt><strong>%cdMe%
   </strong></tt>


See https://superuser.com/questions/560519/how-to-set-an-alias-in-windows-command-line

https://technet.microsoft.com/en-us/library/bb490894.aspx


   PROTIP: Many Windows users are limited to save files only in their own user folder. So we'll go with that limitation.

0. Navigate

   cd C:\Users\%USERNAME%

0. Create:

   mkdir gits

   ### .bashrc file





## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
