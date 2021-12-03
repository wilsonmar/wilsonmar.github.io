---
layout: post
title: "Git configuration"
excerpt: "How to setup Git clients like a pro"
modified:
tags: [git]
date: "2018-09-07"
file: "git-config"
image:
# git-basics-1900x500-247310.jpg from png
  feature: https://user-images.githubusercontent.com/300046/44609628-b60ca000-a7b5-11e8-95c9-bfc5d1871487.jpg
  credit: Wilson Mar
  creditlink: https://github.com/wilsonmar/git-utilities/blob/master/git-basics.sh
comments: true
---
<em>{{ page.excerpt }}</em>
{% include l18n.html %}
{% include _toc.html %}

Here is a hands-on instructions and software to get those new to Git productive for professional usage using a local Git client. 

PROTIP: This integrates (implements) <a target="_blank" href="https://wilsonmar.github.io/github-data-security/">actions that block possible leak of data in my "GitHub Data Security" blog article</a>.

This is designed to offer maximum depth at minimum time because I've spent a lot of time on <strong>sequencing</strong> learning and on time-saving <strong>automation</strong>.

## Stages to install software and run

This explains both the shell script and manual steps in the stages outlined below:

   <a href="#TerminalvsGUI">        A. Establish a Terminal CLI environment</a><br />
   <a href="#LoadSampleFiles">      B. Download sample repository containing setup files</a>

   <a href="#InstallBaseUtilities"> C. Install base utilities, if needed</a><br />
   <a href="#InstallEditor">        D. Install Editor app</a><br />
   <a href="#InstallGitClients">    E. Install Git client apps</a>

   <a href="#DefineAccounts">       F. Define a file listing each GitHub organization/account</a><br />
   <a href="#BeginWork">            G. Begin work on each GitHub organization/account</a>

   <a href="#GlobalEditConfig">     H. Create global .gitconfig file with editor setting</a><br />
   <a href="#FolderEachAccount">    I. Make a folder for each GitHub account's repositories</a>

   <a href="#GlobalGitConfig">      J. Replace global .gitconfig user settings</a><br />
   <a href="#CreateGitConfig">      K. Populate a Git configuration file in each account folder</a><br />
   <a href="#IncludeIf">            L. Specify IncludeIf for account in Git config</a>

   <a href="#BeAtSSH">              M. Be in SSH folder</a><br />
   <a href="#GenSSH">               N. Generate SSH keys for each GitHub account</a>

   <a href="#GenSSH">               O. Test interaction with each GitHub repository</a><br />
   <a href="#MoConfigs">            P. Configure other Git features</a><br />
   <a href="#RepateOrg">            Q. Repeat above steps for each additional account</a>
   
<hr />

<a name="SummaryDiagram"></a>

## Summary Diagram

This tutorial is part of a video that explains my bash script as part of my <a target="_blank" href="https://wilsonmar.github.io/git-basics/">Git Basics tutorial</a> sequenced by this animated diagram about installation and configuration:

<a target="_blank" title="git-basics-10d-flow-1215x683.jpg" href="https://user-images.githubusercontent.com/300046/47591914-86515400-d92e-11e8-9f48-268a5aad1b9d.jpg">
<img alt="git-basics-10d-flow-1215x683.jpg" width="648" src="https://user-images.githubusercontent.com/300046/47591914-86515400-d92e-11e8-9f48-268a5aad1b9d.jpg"><br /><small>Click on the flowchart above to pop-up a full-screen (static) image</small></a>


<a name="TerminalvsGUI"></a>

### A. Establish a Terminal CLI environment

   This tutorial is designed for someone with a <a target="_blank" href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup">
   Git command-line client installed</a>.

To make use of it on your laptop, you need to open the <strong>Terminal</strong> program on a Mac or, if you're on a Windows machine, the <strong>Git Bash</strong> program installed. 


#### Terminal on macOS

1. Switch to your local IDE or Terminal (on Mac, press command+spacebar for the Spotlight Search, then type "Term" and press Enter to select "Terminal.app"). Enter your password if prompted.

2. Click anywhere on the Terminal window. Press <strong>command+N</strong> for the Basic session colors and other UI. Alternately, point your cursor beyond the top of the screen for the Terminal menu to appear and select Shell, New Window and select one of the <strong>themes</strong>.

   ![git-terminal-colors-689x273.jpg](https://user-images.githubusercontent.com/300046/44993171-ddeac900-af56-11e8-8a21-126647ced79a.jpg)

   * Grass is green
   * Ocean is blue
   * Pro is black
   * Red Sands is earthy brown
   <br /><br />


<a name="WindowsSetup"></a>

#### Setup on Windows utilities

   Since a Bash shell does not come built-in on <strong>Microsoft Windows</strong> machines, a bash terminal program called <strong>git bash</strong> needs to be install by the Windows <strong>Chocolatey</strong> installer installing the <strong>msysgit</strong> package. But you must have Administrator permissions to install them.

1. So that you can update versions automatically later, automate client installs on Windows, by first installing <a target="_blank" href="https://choclately.org/">Chocolatey</a> using a PowerShell command:

   <pre>&LT;@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
   </pre>

2. While you're on a command window, have Chocolatey install a Git client:

   <pre><strong>choco install msysgit -y</strong></pre>

   ```-y``` takes the place of clicking "OK" to submit to legalistic licenses.

1. To open <strong>git bash</strong>, press the Micosoft icon on the keyboard. Type git. When "git bash" appears, click on it.

   ![image](https://user-images.githubusercontent.com/300046/45103610-892d8680-b0ed-11e8-921c-d2b03b32a6ba.png)



<a name="LoadSampleFiles"></a>

### B. Download sample repository containing setup files

   Since Git utilities may not be available on your laptop at this point, download sample files using a command.

1. Defines a variable to specify the path, then use the variable to create a folder, and cd into it.

   <tt><strong>GIT_FOLDER="$HOME/git-utilities"<br />

mkdir -p "$HOME/${GIT_FOLDER}"<br />

cd "$HOME/${GIT_FOLDER}"
   </strong></tt>

   The Terminal prompt should now be at <tt>~/git-utilities</tt> or whatever you changed the path to.

   Files in the folder relevant to this:

   <pre>curl -O https://raw.githubusercontent.com/wilsonmar/git-utilities/master/my_github_accts.csv
   </pre>
   
   <pre>curl -O https://raw.githubusercontent.com/wilsonmar/git-utilities/master/git-certs-setup.sh
   </pre>

   * <tt>my_github_accts_vars.sh</tt>


   <a name="InstallBaseUtilities"></a>

   ### C. Install base utilities, if needed

1. If requested by a parameter, the automated script installs these:

   1. XCode
   1. Homebrew
   1. Git program
   1. GitHub CLI
   <br /><br />

   Alternately, if you don't run the script, you'll need to manually install each one.


   <a name="InstallEditor"></a>

   ### D. Install Editor app

1. Determine what text editor you want to load when Git needs one.

   PROTIP: I personally like the Sublime Text editor because it loads up the fastest.

   But subl needs to be installed and licensed (for $85 one time).

   The nano editor comes with MacBbook macOS operating system.

1. Install the selected editor app (such as Sublime Text).



<a name="InstallGitClients"></a>

### E. Install Git client apps

   Due to the open-source availability to how Git works, there are many Git clients available.

   But NOT clients include a <strong>git bash</strong> program so you can run commands like a Linux command line (shown by this tutorial).

   Most IDEs and text editors today have incorporated commonly used Git client functionality into their software. 

   On <strong>IntelliJ</strong>, get its Git menu by right-clicking on the project in the left Solution pane to see this menu:

   We will return to this after going through this course to see if you recognize what each GUI item does.

   <a target="_blank" title="git-intellij-1308x490.jpg" href="https://user-images.githubusercontent.com/300046/44702989-21bf6900-aa53-11e8-8fc4-6b91b621e7ca.jpg">
   <img alt="git-intellij-648x243.jpg" src="https://user-images.githubusercontent.com/300046/44702935-ee7cda00-aa52-11e8-941b-9913757f4702.jpg"></a>

   In <strong>Eclipse</strong>, right-click on the project in the left Solution pane, then select <strong>Team</strong> for the Git menu:

   ![git eclipse menu 518x648](https://cloud.githubusercontent.com/assets/300046/25332307/ebf39f84-28b3-11e7-9d3b-5132a549cf13.png)

   * The "Switch To" in Eclipse is the equivalent of `git checkout`. This avoids confusion with the "checkout" function in Subversion, which does something completely different than git checkout. Git does not isolate what is checked out nor lock portions of code like what Subversion does, which results in people waiting for others to finish. For this reason, many have migrated from Subversion to Git.
   We will soon show how Git enables every portion of code to be worked on at the same time.

   * See <a target="_blank" href="https://www.youtube.com/watch?v=C0bFLGJqnI8&list=PL-suslzEBiMo0B5RcAikOaqDLKoG9Okub">VIDEO: Using Git within Eclipse</a> May 21, 2013 by Dr. Brian Fraser 


   <a name="DefineAccounts"></a>

   ### F. Define a file listing each GitHub organization/account

   PROTIP: Many developers switch among multiple GitHub organizations/accounts during a working day.

1. Download a sample file using the curl utility:

   <pre>curl -O https://raw.githubusercontent.com/wilsonmar/git-utilities/master/my_github_accts.csv
   </pre>

1. Open a text editor to manually edit sample file named <tt>my_github_accts.csv</tt>.

   It contains a line for each github organization/account, with associated fields:

   <pre>
_folder,      _Name,    _acct,    _email,            _note
gmail_acct,   John Doe, johndoe,  johndoe@gmail.com, Personal GitHub account created using personal Gmail or other email
client1_acct, John Doe, john-doe, john_doe@mck.com,  Customer/client organization account
job1_acct,    John Doe, john-doe, john_doe@mck.com,  Employer organization account
vendor1_acct, John Doe, johndoe1, john-doe@soft.ai,  vendor organization account
   </pre>

   PROTIP: We recommend that, even if you only have your own personal account now, <strong>be prepared</strong> to use multiple GitHub accounts by doing the work of just the first account.

   If you're <strong>manually performing</strong> the steps below, create the file above as a <strong>checklist</strong> as you repeat commands for each organization/account folder and files.


   <a name="BeginWork"></a>

   ### G. Begin work on each GitHub organization/account

1. Switch back to the Terminal.

1. Download a sample script file:

   <pre><strong>curl -O https://raw.githubusercontent.com/wilsonmar/git-utilities/master/???script.sh
   chmod +x ???script.sh
   </strong></pre>
   
   That script automatically performs all the steps described in the remainder of the steps below, for each GitHub organization/account <a href="#DefineAccounts">listed in the file above</a>.

1. If want to run the automated script, first run without any paramters to get a list of possible parameters to customize each run:

   <pre><strong>./???script.sh
   </strong></pre>

   <tt>-v</tt> specifies verbose output.



   <a name="GlobalEditConfig"></a>

   ### H. Create global .gitconfig file with editor setting

   Since we are creating a git configuration file for each organization/account folder, we <strong>don't need global user</strong> configurations.

1. In a Terminal, set the text editor command to be used by Git:

   <pre><strong>git config --global core.editor "subl"
   </strong></pre>

   Instead of <tt>subl</tt> for Sublime, use <tt>code</tt> for Visual Studio Code, <tt>nano</tt> for Nano, etc.

   <tt>git config --global</tt> commands update the contents of the <tt>~/.gitconfig</tt> file.

   <tt>~</tt> specifies the user's home folder.

1. Open the editor using a git command:

    <pre><strong>git config --global --editor subl
   </strong></pre>

   That command is equivalent to, alternately :

   <pre><strong>subl ~/.gitconfig
   </strong></pre>

   Due to the previous command, you should see in your editor:

   <pre>[core]
   editor = 'subl'
   </pre>

1. List git global settings:

   <pre><strong>git config --list
   </strong></pre>

   Sample response:

   <pre>credential.helper=osxkeychain
core.editor=subl
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
diff.external=/usr/local/bin/git-diff-cmd.sh
includeif.gitdir:~/gmail_acct/.path=~/gmail_acct/.gitconfig
   </pre>

   PROTIP: If you see a : (colon) on the last line of the Terminal screen, press <strong>q</strong> to quit out of the listing.


1. There are possibly other git global configuration settings if your Git configuration is not new, such as:

   <pre>[core]
repositoryformatversion = 0
filemode = true
bare = false
logallrefupdates = true
ignorecase = true
precomposeunicode = true
   </pre>

   Configuring these is not within the scope of this document.



   Later, from this file we will replace global configuration settings values for a single user such as:

   <pre>[user]
    name = John Doe
    email = johndoe@gmail.com
   </pre>

   (with "IncludeIf" and "path" statements) 

   That setting is the result of a command such as:

   <pre><strong>git config --global user.name "John Doe"
git config --global user.id "johndoe@gmail.com"
   </strong></pre>


   First...


   <a name="FolderEachAccount"></a>

   ### I. Make a folder for each GitHub account's repositories

1. Switch back to the Terminal.

1. Download a sample script file:

   <pre><strong>curl -O https://raw.githubusercontent.com/wilsonmar/git-utilities/master/my_github_accts_vars.sh
   chmod +x my_github_accts_vars.sh
   </strong></pre>
   
   That script automatically performs all the steps described in the remainder of the steps below, for each GitHub organization/account <a href="#DefineAccounts">listed in the file above</a>.

1. To avoid manualtyping, run script:

   <pre><strong>chmod +x my_github_accts_vars.sh
./my_github_accts_vars.sh      
   </strong></pre>

   The script creates variables based on values copied from <a href="#DefineAccounts">the Github organizations/accounts defined above in flat file my_github_accts.csv</a>:

   <pre>export LOCAL_SSH_KEYFILE="gmail_acct"
export MY_EMAIL_ADDRESS="johndoe@gmail.com"
export MY_GITHUB_ACCTNAME="johndoe"
export MY_FULL_NAME="John Doe"
   </pre>

   REMEMBER: In Bash script export commands allow no spaces around the equal (=) sign.

   Use of variables helps ensure that <strong>several commands below</strong> will use values consistently.

1. Make a folder for the current GitHub organization/account based on the variable defined above:

   <pre><strong>mkdir ~/$LOCAL_SSH_KEYFILE
   </strong></pre>


   <a name="GlobalGitConfig"></a>

   ### J. Replace global .gitconfig user settings

1. Use your default editor to <strong>edit</strong> Git's global <tt>.gitconfig</tt> configuration file:

   <pre><strong>git config --global --edit
   </strong></pre>

   In 2019, at git version 1.23, "conditional include" ("IncludeIf") was added to Git Core. That enables Git to automatically select the configuration file Git uses to be based on whatever folder is active. 
   
   References:
   * <a target="_blank" href="https://git-scm.com/docs/git-config#_conditional_includes">https://git-scm.com/docs/git-config#_conditional_includes</a> is the official documentation
   * <a target="_blank" href="https://blog.thomasheartman.com/posts/modularizing-your-git-config-with-conditional-includes">https://blog.thomasheartman.com/posts/modularizing-your-git-config-with-conditional-includes</a>
   * <a target="_blank" href="https://www.motowilliams.com/conditional-includes-for-git-config">https://www.motowilliams.com/conditional-includes-for-git-config</a>
   <br /><br />


   <a name="CreateGitConfig"></a>

   ### K. Populate a Git configuration file in each account folder

1. Edit the <tt>~/.gitconfig</tt> text file to confirm that the above commands created a git configuration file, using your favorite text editor:

   Either way, you should see something like this (but with your name and email instead):

   <pre>[user]
    name = John Doe
    email = johndoe@gmail.com
   </pre>

   In a config file, we will replace the above values with IncludeIF statements.

   The above staements will be in a config file, with name and email appropriate for each GitHub organization/account.


   <a name="IncludeIf"></a>

   ### L. Specify IncludeIf for each account

1. Construct new lines in the account folder's .gitconfig file based on the $LOCAL_SSH_KEYFIL variable name:

   <pre>[includeIf "gitdir:~/gmail_acct/"]
 path = ~/gmail_acct/.gitconfig
   </pre>

   PROTIP: We are using the name of the account folder the same name as the SSH keypair file name.

   PROTIP: In the includeIf line, the trailing slash after the directory path makes it so that all subdirectories of the specified directory is matched.

   Alternately, instead of using a text editor, use these commands to concatenate the lines to the bottom of the file:

   <pre>echo "[includeIf "gitdir:~/$LOCAL_SSH_KEYFILE/"]" >>~/$LOCAL_SSH_KEYFILE/.gitconfig
 path = ~/$LOCAL_SSH_KEYFILE/.gitconfig  >>~/$LOCAL_SSH_KEYFILE/.gitconfig
   </pre>

   Either way, put the includes at the bottom of your files to make sure the included config isn't overridden later on in the source file.


   ~/.git/config


1. Verify:

   <pre><strong>git config list</strong></pre>

   TODO: If you get <tt>error: key does not contain a section: list</tt>
   ...

   Next, let's create that folder referenced above.


   <a name="BeAtSSH"></a>

   ### Be in SSH folder

1. Be at the folder where SSH stores its key pairs file:

   <pre><strong>cd $HOME/.ssh</strong></pre>

   If it does not already exist, make the folder yourself.


   <a name="GenSSH"></a>

   ### Generate SSH keys for each GitHub account

   References:
   * <a target="_blank" href="https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent">Generating a new SSH key and adding it to the ssh-agent</a>
   <br /><br />

1. Within the ~/.ssh folder, generate a pair using defaults for the GitHub account:

   <pre><strong>ssh-keygen -t rsa -f "${LOCAL_SSH_KEYFILE}" -C "${MY_EMAIL_ADDRESS}" -N ""</strong></pre>

   <tt>-N</tt> specifies that no Passphrase will be requested when the key is used. Specifying one would require it to be manually entered with every command -- not something most would want to do.

   <tt>-C</tt> provides an optional unique name within the Public key.



   TODO: A "fingerprint" of the key is generated to uniquely identify each one.

   
1. The public key we copy into each <strong>server</strong> so we can <strong>`SSH`</strong> 

1. with the private side of the pair (instead of a password).

   Some use an encrypted USB Solid State Drive for sole physical posession. 
   But if that's lost or stolen, security can be compromised.



<hr />

<a name="MoConfigs"></a>

### P. Configure other Git features

There are other lines in the .gitconfig file.

1. On a Windows machine, to mute annoying warnings about conversion of line endings in files saved on Mac machines:

   <pre><strong>git config --global core.safecrlf false
   </strong></pre>

   The command issues no response.

   The command does not turn off conversion.

1. <a href="https://wilsonmar.github.io/git-signing">Configure Git Signing</a> describes steps to enable the gpg program to establish GPG keys used to sign git commits, which would add lines such as these:

   <pre>[core]
 editor = subl
signingkey = 62C414BA89BFBE52
&nbsp;
[gpg]
 program = gpg
&nbsp;
[tag]
 forceSignAnnotated = true
   </pre>


1. GitHub Enterprise users whitelist hostnames using:
   
   <pre><strong>git config --global --add hub.host my.example.org
   </strong></pre>

1. Change default commit message editor program to Sublime Text (instead of vi):
   
   <pre>git config core.editor "~/Sublime\ Text\ 3/sublime_text -w"</pre>

1. Allow all Git commands to use colored output, if possible:

   <pre>git config color.ui auto</pre>

1. Get the size of what was transmitted on the current repo folder:

   <pre><strong>git count-objects -v</strong></pre>

   <pre>
count: 1749
size: 12308
in-pack: 344
packs: 1
size-pack: 109
prune-packable: 0
garbage: 0
size-garbage: 0
   </pre>

   <pre>git remote show origin</pre>

   But I have a script that installs them and other apps on a Mac according to a specification file. It's at <a target="_blank" href="https://github.com/wilsonmar/mac-setup/master/blog/mac-install-all.sh">https://github.com/wilsonmar/mac-setup/master/blog/mac-install-all.sh</a>



<a name="RepateOrg"></a>

### Q. Repeat above steps for each additional account

zzzz


<hr />


## Ways to get a shell script 

   a. bash curl command to a script (see immediately below)

## Ways to get a Git repository

   PROTIP: There are several ways to obtain this file from GitHub, GitLab, BitBucket, or other host:

   a. Download ZIP file<br />
   b. Open in Desktop client (using Git for GitHub)<br />
   c. git clone https or SSH url<br />
   d. hub command<br />
   e. bash curl command to a script (see immediately below)
   <br /><br />

## A script types commands for you


An bash script was created to automatically <strong>type for you</strong> the various commands in this course. It's to see whether what you are asked to type manually actually works. This is so we can see whether <strong>it was working before</strong>, so you don't blame yourself for not typing commands correctly and waste time debugging.

1. Let's look at the script by providing an internet browser (such as Brave) with this full URL:

   <a target="_blank" href="https://github.com/wilsonmar/git-utilities/blob/master/git-basics.sh">https://github.com/wilsonmar/git-utilities/blob/master/git-basics.sh</a>

   Follow along with me on your own machine.

   This file in GitHub.com is associated with an <strong>account</strong> named "wilsonmar".

   The file is in a <strong>repository</strong> (or "repo") named "git-utilities".

   The ".sh" means it's a <strong>shell script</strong> file.

   The first line inside each shell script specifies the program which processes it. In this case it's

   ```#!/bin/bash```

   which is the default <strong>shell program</strong> that comes with MacOS machines to process commands of the operating system.
   
   A <strong>"blob"</strong> is the set of characters in the last revision identified by a "hash" calculated from the text changed plus some metadata such as the data of the change, the person making the change, etc. The 7 characters shown is the first 7 characters of the full hash string.

   ### Bash curl command pasted in Terminal

   To run the shell script without first downloading it:

2. Open a Terminal or Git Bash dialog.
3. Run a Bash script is by pasting in a Terminal a <strong>bash curl</strong> copied from a web page.
   This places you at your account's home directory such as, in my case:<br />
   
   <pre>/Users/wilsonmar</pre>

   On your dialog, a different name would appear instead of "wilsonmar".

4. PROTIP: You can return to this folder by several commands:
   <tt>cd</tt> (change directory) command by itself or <tt>cd ~</tt> (the tilde character), which resolves to <tt>cd $HOME</tt>.

5. <tt>$HOME</tt> is a built-in variable for your account's home directory.

   Shell scripts make use of built-in variables such as <strong>$HOME</strong>. 

6. There is also a built-in command <strong>pwd</strong> (present working directory), which is equivalent to the "dir" command on Windows machines.

   ### ./bash_profile
   
7. PROTIP: When a Terminal or Git Bash session is started, the operating system automatically (in the background) runs command:

   <pre>source ~/.bash_profile</pre>

   This places into memory definitions for the PATH of directories the operating system looks for the location of programs requested to run, for <strong>export</strong> of environment variables.

8. The dot character in the file name means that the file is normally hidden, so additional parameters need to be specicifed to see them, such as:

   <pre><strong>ls -al</strong></pre>

   PROTIP: Don't type the "[ll]" shown in the flowchart because that defines a <strong>keyboard alias</strong> which the bash_profile also defines them.

   ### git-basics.sh add aliases

9. PROTIP: A set of <strong>aliases</strong> is defined at:

   <a target="_blank" href="https://github.com/wilsonmar/git-utilities/blob/master/aliases.txt">https://github.com/wilsonmar/git-utilities/blob/master/aliases.txt</a>

   You can copy and paste the raw text into your <tt>./bash_profile</tt> open in a text editor.

   Or you can run a script to do that for you, described below.
   
   What follows are the steps to get the aliases to be available in your laptop, among other tasks.


   <a name="shcommand"></a>

   ## Remote bash command run

   To get you started quickly:

10. Highlight this entire line (which may wrap around) 

    ```bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/git-utilities/master/git-basics.sh)"```

    (Position your mouse at the beginning of the string, drage the mouse as you drag across the line, then relase at the end of the line. Press command+C to copy to your Clipboard.)

11. Press command+C to copy into your operating system's Clipboard.
12. Open a (Git-capable) Terminal or Git Bash session.
13. Click on the blank part and right-click to select Paste.
14. Press Enter to run it.

    In the output displayed on the Terminal:

    Lines prefixed by ```>>>``` output by function echo_f() precede each section and step of the script:

    Lines prefixed by ```$``` output by function echo_c() precede each command:

## index to git-basics.sh output

   Numbering of sections in the script:

   0.x <a href="#BashUtils">Script start-up</a>

   1.x <a href="#MacInstall">Mac client Install and Configuration</a>
   
   2.x <a href="#GitConfig">Git Setup and Configuration</a>
   
   3.x <a href="#Cloud">Cloud repository setup, forking, cloning</a>

   4.x <a href="#EditLocally">Branch and edit locally</a>

   5.x <a href="#AddAndCommit">Local config, add, commit</a>

   6.x <a href="#Add2Staging">Local edit, add, commit, push</a>

   7.x <a href="#PullMerge">Pull and Merge</a>

   8.x <a href="#UpdateOrigin">Update origin with upstream changes</a>

   9.x <a href="#OriginChange">Get changes in origin to local</a>

   In outputs on Terminals, "$" precede commands issued by the script, so you can type the exact commands.

<a name="BashStart"></a>

## 0.x Bash script start-up





<a name="MacInstall"></a>

## 1.x Client Install and Configuration

   On the Mac, the git-basics.sh script installs a Git client if needed.

1. The first thing the script does is figure out what operating system it is running on. That uses a command common to all operating systems:

   <pre>uname -a</pre>

   "Darwin" is the internal name of the operating system running on a Mac.

2. If the script is running on a <strong>Mac</strong>, the script installs <strong>Homebrew</strong> if needed.

3. A Git client is installed if the git command is not found.

   <pre><strong>brew install git</strong></pre>

   Its version is output so you know what you have.

4. For the script to automatically <a href="#CreateRepo">create a repository in GitHub</a> and fork a repository from another account, it first installs the <a target="_blank" href="https://hub.github.com/">"hub" add-in to Git:

   <pre><strong>brew install hub</strong></pre>

   BTW: There is no "cask" in the brew command because it only works within the command line, not GUI.

   PROTIP: Technically "Hub" is called a "wrapper" around Git’s CLI so you can do it all from the command line rather than switching to GitHub’s web page.

1. Also install jq to enable Git to process JSON:

   <pre><strong>brew install jq</strong></pre>


   <a name="EnvVars"></a>

   ### environment variables & values

5. File <tt><strong>git-basics.env</strong></tt> is downloaded to your $HOME account folder (by a curl command):

   <pre>curl -O "https://raw.githubusercontent.com/wilsonmar/git-utilities/master/git-basics.env"</pre>

   The file provides values to environment variables controlling the script. It is loaded into memory using this command:

   <pre><strong>source git-basics.env</strong></pre>

   The variables and the values are displayed.

   PROTIP: The <tt>git-basics.env</tt> file is placed in your $HOME folder, separate from any folder that can be pushed back to Git hosting because you may want to <strong>type your password</strong> in the file for more automatic functionality in the script, such as deleting repos, functions which even hub does not perform.


   ### git-scripts folder in $HOME

6. The script looks for a <strong>persistent</strong> folder named <strong>git-scripts</strong> and creates it if it doesn't exist there. 

   Files from GitHub load the folder with files containing default values.
   If the file is there already, don't overlay the file.

7. <strong>git-basics.sh</strong>, the shell script, is copied into that "git-utilities" folder so you have the option of editing the files and re-running locally on your laptop.

8. To halt processing for customizations, press <strong>control+C</strong> on the Mac or Press any key to continue default processing. 

   This is so you can <a href="#EditRun">edit the files downloaded so you can run rerun locally (as described below)</a>.

   If you do edit the file locally, comment out the read command line and its fancy_echo command by adding a # in front of them.


   <a name="#EditRun"></a>

   ### Edit and rerun locally

   The script <tt>git-basics.sh</tt> is designed to both run without modification and to allow you to customize it. There are several reasons you want to customize files in the "~/git-utilities" folder the script added for you:

   * Edit the <tt>git-basics.env</tt> to place <tt>exit</tt> anywhere you want the script to stop.

   * Edit the <tt>git-basics.env</tt> file to replace <tt>"secret here"</tt> with your GitHub password so that the script can automatically <strong>delete</strong> repos locally, so that you don't have to manually do it every time you run. PROTIP: The <tt>git-basics.env</tt> file is copied to a separate folder than the script so that you never upload it back to a Git hosting GitHub/GitLab.

   * Adopt the <tt>git-basics.sh</tt> to automate other activities using Git.
   PROTIP: Select a <strong>text editor</strong>. See my notes at <a target="_blank" href="https://wilsonmar.github.io/text-editors/">https://wilsonmar.github.io/text-editors</a>


   ### chmod

   PROTIP: To avoid error messages that says the file is not there, change premissions to enable the script file to be executed

   <pre><strong>chmod +x git-basics.sh</strong></pre>

   To run the file, type a "./" in front of the script file name:

   <pre><strong>./git-basics.sh</strong></pre>


   ### Continuing processing

9. <strong>aliases.txt</strong> containing keyboard shortcut definitions are copied in. Again, if the file is there already, it is not overlaid.

10. If a <strong>~/.bash_profile</strong> is not found, the script creates it in your $HOME folder.

11. Whenever a Bash terminal session is opened, it automatically runs the <strong>~/.bash_profile</strong> script file at the user home folder. The "~/" specifies that the file is in the user's $HOME folder.

   The file contains a definition of the <strong>PATH</strong> the operating system searches for executables.

   The file can also contain custom keyboard commands defined by <strong>alias</strong> specifications. The  <strong>alias.txt</strong> file.

   The aliases.txt file is concatenated to the bottom of the <strong>~/.bash_ profile</strong> 

12. The script creates a <strong>volatile/non-persistent workspace folder</strong> which, when configured, the script <em>deletes</em> at the beginning of each run, and populates again with downloads.

    The name of the volatile folder is based on the variable $WORKSPACE_FOLDER defined in file <tt>git-basics.env</tt>.
    Thus, if you may the value of the variable, a different workspace would be created on the next run.

    This is what enables the script to be run over and over again.

13. Before invoking a Git command, load the default <a href="SSH">SSH public key file</a> to make sure it is available for use with "hands-free" GitHub API calls: 

   <pre><strong>export RSA_PUBLIC_KEY=$(cat ~/.ssh/id_rsa.pub)</strong></pre>
   



   <a name="CloneLocal"></a>

   ### Local Git projects container folder 

4. PROTIP: Optionally, create a folder with a name such as <strong>gits</strong> or "project" to hold anonymouse Git repositories from various GitHub/GitLab accounts. This would be immediately under your $HOME folder:

   <pre><strong>cd $HOME && mkdir gits && cd gits
   </strong></pre>

5. PROTIP: Optionally, create an <strong>account container folder</strong> to hold repositories under <strong>each account</strong> on GitHub/GitLab or to group repositories relared to the same subject:

   <pre><strong>mkdir myacct && cd myacct
   </strong></pre>

   PROTIP CAUTION: <a target="_blank" href="https://github.com/Azure/iot-edge/blob/master/doc/devbox_setup.md"> Some repos</a> have a **20 character** limit on the prefix before the repo name.
   The character count includes slashes:

   <pre>/gits/hotwilson/----+----1----+----2</pre>


   <a name="CreateRepo"></a>
   
   ### Init repo

6. PROTIP: If you are creating a local repository, first create an account or <strong>project container</strong> folder to hold the various repositories. 

   <pre><strong>mkdir local-init && cd local-init
   </strong></pre>

7. The git init command creates a blank Git repository:

   <pre><strong>git init
   </strong></pre>

   The sample response:

   <pre>
Initialized empty Git repository in /Users/kevingrastorf/git-basics-workspace/gits/myacct/local-init/.git/
   </pre>

   This creates in the current folder a folder always named <strong>.git</strong>
   into which Git stores and retrieves all change history.

8. Add contents:

   <pre>git add --all
   git commit -m "First commit"
   </pre>

9. Delete the "local-init" repo created by a previous run on GitHub. This requires use of the GitHub API because "hub delete" does no work.

   BONUS: See the <a href="GitHubAPI">GitHub API description</a>

10. Although <a target="_blank" href="https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/">GitHub docs</a> say that you need to first create repos in the GUI. However, the Hub add-in enables it:

    <pre><strong>hub create -d "My new thing"</strong></pre>

   This is instead of
   * git remote add origin remote repository URL
   * git push -u origin master
   <br /><br />

11. git remote -v
12. Manually check on GitHub to make sure it's really there.


<hr />

<a name="Cloud"></a>

## 3.x Cloud repository setup

Now let's talk about working with repositories in <strong>cloud hosts</strong>
such as Microsoft's GitHub, GitLab, Atlassian's BitBucket, etc.

Identify a public GitHub repository and something that you can contribute to, such as suggesting a typo fix. But you have no right to edit that repo. For example:

   <a target="_blank" href="https://github.com/hotwilson/some-repo">
   https://github.com/hotwilson/some-repo</a>

   An "open source" repository available to the "public" can be accessed using an URL using <strong>https</strong> protocol even if you are not a designated collaborator with a <strong>right</strong> to alter it.

   Such a repository we call an <strong>upstream</strong> remote or some other name.

You can click the "Star", but you would need to be signed in under your own account.

We assume here that you have already opened a personal email account
and used it to create an account on <a target="_blank" href="https://www.github.com/">GitHub.com</a>.

   PROTIP: I use email accounts on both Gmail.com and Outlook.com so I can test sending emails.

   PROTIP: It helps if you pick a unique handle that is available throughout various 
   social media (Twitter, Medium, Instagram, etc.)


### Setup SSH manually

   Before you can "Fork" another account's repository, you need to enable <strong>your Git commands</strong> to <strong>have right</strong> to modify.

   The right to alter a cloud repo is claimed by pasting the contents of your machine's <strong>.pub</strong> (public key file) obtained by using <strong>pbcopy</strong> to put it in your Mac's Clipboard, then pasted in the cloud GitHub/GitLab GUI. 

   The "rsa" in the default file name "id_rsa.pub" refers to the clever mathematicians who figured out how to encrypt and decrypt files without exchanging secret passwords. It works by generating two files -- the public and private key file "id_rsa" -- into your account's <strong>~/.ssh</strong> folder. 

   SSH (for secure shell) is the same mechanism the Linux team uses to secure its bash terminals. In fact, Git was designed by Linus Torvold and his team who developed the Linux kernel and its secure shell (SSH).

   The <strong>ssh-keygen</strong> program that generates the rsa files comes with all Linux and Mac operating systems. First cd to the .ssh folder, then run the program. If you are using it for the first time, press Enter for all the defaults.

   When there are multiple accounts, you can't use default names and also must edit the <strong>config</strong> file to make sure the different accounts are specified correctly.

   Windows users need to download the <strong>puttygen</strong> program. 

   When the Git client runs, it <strong>retrieves the private key in the id_rsa</strong> file to encrypt what it sends. The GitHub or GitLab cloud service decrypts using the public key.

1. When this script runs, one can optionally use the built-in command "cat" to retrieve the contents of the public key for later use by the GitHubAPI:

   <pre>export RSA_PUBLIC_KEY=$(cat ~/.ssh/id_rsa.pub)</pre>

2. Alternately, list the files in folder .ssh to confirm the file size:

   <pre><strong>ls -a ~/.ssh
   </strong></pre>


   <a name="2FA"></a>

   ### Two-factor authentication and repo URLs

   Next, instead of <tt>git init</tt> creating a purely local repository and its need for being in a repository folder, we now look at use of <strong>git clone</strong> commands to bring in remote repositories from the Cloud to your local machine.

   When pulling in a repository belonging to some <strong>other</strong> account you don't have right to change, use the <strong>"HTTPS"</strong> URL format, such as: 

   <pre>https://github.com/hotwilson/some-repo</pre>

   PROTIP: If we have setup two-factor authentication <strong>(2FA)</strong>, we should use the "SSH" or <strong>"git@"</strong> form to specify URLs <strong>we have right to change</strong>, such as:

   <pre>git@github.com:wilsonmar/some-repo</pre>

   We should use two-factor because it is good security practice. The "two" means we use an alternate form of identification, in a number from an authentictor app (such as Google Authenticator) on that smart phone you're always looking at.

   ### PROTIP: --depth=1

   BTW: When cloning another account's repo, some add <strong>--depth=1</strong> or <strong>--recursive</strong> 

   * ```--depth=1``` says only clone the latest version, to save disk space locally by not having previous version history (nor branches) on your machine.

   * ```--recursive``` says to pull in sub-modules (repositories stored within the repository).


   ### Fork from another repository

   Since our objective is to work on open source repositories we don't own,
   we now bring in a repository from another account we don't own.

   <a target="_blank" href="https://www.youtube.com/watch?v=jeefpcqgUvY">VIDEO</a>: On the GitHub/GitLab website, we can manually click <strong>fork</strong> to bring it under our own account. We would then <strong>have a right</strong> to change the our own repository.

   ### Fork using Hub add-in to Git

   <a target="_blank" href="https://x-team.com/blog/speed-up-your-github-workflow-with-hub/">BLOG</a>: Instead of doing that manually, we have a way to do that in a command-line script.

   <a name="Fork"></a>

3. The forked repository created from a previous run needs to be first deleted from GitHub/GitLab, manually because there is no "hub delete repo".

   Click Settings tab. Scroll down to click "Delete this repository". Type the repo name. Click the red "I understand...".

   [ <a href="https://wilsonmar.github.io/git-whoops/#Fork">Whoops</a> ]

   PROTIP: Click <a target="_blank" href="https://wilsonmar.github.io/git-whoops/">"Whoops"</a> links for instructions on un-doing the commands immediately
   before the link. There is a "Return" link there to get back here and continue.

   Un-comment the command to pause to read your response of pressing any key after doing the action stated.

4. Use hub to clone before forking.

   <pre><strong>cd && cd "$WORKSPACE_FOLDER"</strong></pre>

   PROTIP: Instructions at <a target="_blank" href="https://hub.github.com/">https://hub.github.com</a> assume you added an alias with a command such as <tt>"alias git=hub"</tt>. So I say don't do that because I only use Hub just for forking.
   So use "hub" instead of "git" in commands.

   Hub expects the upstream remote to be named "origin", so first clone the other repo:

   <pre><strong>hub clone hotwilson/some-repo</strong></pre>

   Hub creates the repo with remote of "origin". That's counter to how we're using that remote name in this script. But hub requires it for its fork command:

   <pre><strong>hub fork hotwilson/some-repo</strong></pre>

   You may need to provide your cloud account credentials if they are not cached.

   Hub's fork command returns:

   <pre>
Updating wilsonmar
From git://github.com/hotwilson/some-repo
 * [new branch]      master     -> wilsonmar/master
new remote: wilsonmar
   </pre>

   To <a target="_blank" href="https://github.com/github/hub/issues/348#issuecomment-20628624">make the remote names the way I want</a>:

   <pre>
hub remote add myself
git remote rename myself origin
git pull --all
   </pre>

   The <tt>git pull --all</tt> command returns this:

   <pre>
Fetching upstream
Fetching origin
Already up to date.
   </pre>

   BONUS: <a href="DefaultBranch">Set default branch</a>

5. Verify using a <tt>git remote -v</tt> to show it looks like this:

   <pre>
origin   git@github.com:wilsonmar/some-repo.git (fetch)
origin   git@github.com:wilsonmar/some-repo.git (push)
upstream git://github.com/hotwilson/some-repo.git (fetch)
upstream git://github.com/hotwilson/some-repo.git (push)
   </pre>

6. If you want, manually see the new fork on your cloud account at:<br />
   https://github.com/wilsonmar?tab=repositories

   You may want to un-comment the command to pause to read your response of pressing any key after doing the action stated.

   <a name="Clone"></a>

   ### Clone

7. When a repository is cloned, Git automatically creates that repo's folder and within it a folder named dot git to hold objects that track changes to the repository.

   During cloning, Git automatically extracts files from objects in its history, such as <strong>README.md</strong> out to the repository's <strong>Working Directory</strong>, as if you typed <strong>`git checkout master`</strong>.

   [ <a href="https://wilsonmar.github.io/git-whoops#Clone">Whoops</a> ]

   So remember to cd into the repository folder:

   <pre><strong>cd some-repo
   </strong></pre>

   PROTIP: Forgetting to cd into a newly cloned folder is a common mistake.

8. For a listing of repository files and folders in the <strong>Git working directory</strong> for the current <strong>git checkout</strong>, which is "master" when first initialized:

   <pre><strong>ls -al
   </strong></pre>

9. List the remotes:

   <pre><strong>git remote -v
   </strong></pre>

   This information is also presented by the <tt>git branch</tt> command.

   <a name="BranchList"></a>

   ### Branch list

10. A <strong>git branch</strong> command shows us the branches defined in the repository (in a read-only operation):

    <pre><strong>git branch -avv</strong></pre>

    The ```-avv``` parameter provides more detail. Dash a specifies remote tracking branches to appear as well.

    <a href="https://wilsonmar.github.io/git-shortcuts/#gb">Alternately, shortcut</a>:

    <pre>gb</pre>

    An example of the response:

    <pre>
* master                6110cb1 [origin/master] Update ...
  remotes/origin/master 6110cb1 Update ...
    </pre>

    * The asterisk (*) marks the current branch -- <strong>master</strong>, the default branch name.

    * ```6110cb1``` in this example is the SHA hash prefix of the last commit made. 

    * The default remote is origin with default branch master.

    Alternatively, identify just the current remote and branch using this command:

    <pre>git symbolic-ref --short HEAD﻿</pre>

    BTW: A Git alternative to the Bash "pwd" (present working directory) command is:

    <pre>git rev-parse --show-toplevel</pre>
    <br /><br />

    PROTIP: Git defaults to the master branch. But many organizations protect that name for production use, and instead create a “development” or “dev” branch for developers to work with.

<hr />

<a name="EditLocally"></a>

## 4.x Branch and edit locally

Here's where you add value to that Open-Source repository.

   <a name="Checkout"></a>

   The <strong>git checkout</strong> command controls what Git extracts out from the repository database to the repository's Working Directory. 

   * If you add a file after the git checkout command, Git will replace the file in the working folder with the version in 
   the committed repository.
   <br /><br />

   [ <a href="https://wilsonmar.github.io/git-whoops#Checkout">Whoops</a> ]


   <a name="NewBranch"></a>

   ### New branch with commit

   There are two ways to create a new branch.

1. The easiest way is to specify a new branch name after a dash b (-g) with as part of a git checkout such as "feat1" (feature1), to associate new changes:

   <pre><strong>git checkout -b feat1
   </strong></pre>

   PROTIP: Atlassian defines its branches<a target="_blank" href="https://www.youtube.com/watch?v=O4SoB3TFkjA&t=18m26s">*</a> 
   with a type (feature, bugfix, hotfix, etc.), a <strong>slash</strong>, an issue number, then a short description.
   <br /><br />

   ![git atlassian branch naming 650x222](https://cloud.githubusercontent.com/assets/300046/25307644/7de0e70a-2772-11e7-8b3c-f4a57f091f51.png)

   The advantage of creating a branch is that <strong>parallel development</strong> can occur without risking the master branch.

   BTW: Unlike the Subversion client, which locks branches to all others, when a Git branch is created, all files are still available for change.

   [ <a href="https://wilsonmar.github.io/git-whoops#NewBranch">Whoops</a> ]

2. List branches to compare with another git branch command:

   <pre>git branch -avv</pre>

   Notice the asterisk is now at the new branch "feat1".

   <a name="Editing"></a>

   ### Concatenate to .gitignore

3. The script makes changes by using <strong>echo</strong> commands, such as:

   <pre>echo "peace" >newfile.md</pre>

   The single ">" clears out all contents and replaces it with that one word.

   <pre>echo -e "\n.DS_Store" >>.gitignore</pre>

   ```>>``` concatenates to the bottom of the file

   ```-e``` enables specification of escape characters

   ``\n``` is an escape character for new line

   Alternately, you can of course edit files manually, we can use vim or another text editor (such as nano, atom, etc.) to change contents inside files. 

   <pre><strong>vim README.md
   </strong></pre>

   The md in the file name designates markdown format. The README.md file Git hosts can create with this specific name to describe each repository.

   If you use vim, press the I key to begin insertion and press Esc to end insertion mode.
   When out of insertion mode, type : to enter command mode, 
   then <strong>wq</strong> to write and quit the program or
   then <strong>q!</strong> to quit without changes.

   PROTIP: Remember to save the file before switching.

4. Display the last 3 lines in the file to confirm:

   <pre><strong>tail -3 .ignore</strong></pre>

   This is better than using the cat program which displays all lines.


   <a name="GitStatus"></a>

   ### git status -s -b [gsl]

5. To detail the status of changes to the repo:

   <pre><strong>git status -s -b</strong></pre>

   Alternately, this command is used so often that Mac users create a [shortcut](/git-shortcuts/) in ~/.bash_profile:

   <pre>gsl</pre>

   The response is:

   <pre>## feat1
 M .gitignore
   </pre>

   ```##``` marks a branch

   ```M``` marks a file Modified from Git

   ```??``` marks a file untracked by Git, one that has never been added to Git.


   ### Hide file from git status

   EXTRA: PROTIP: To have git status not display a particular file:

   <pre><strong>git update-index .DS_Store</strong></pre>

   <a target="_blank" href="http://fallengamer.livejournal.com/93321.html">
   PROTIP</a>: Changes to files that should not be pushed up, such as the secrets.sh file, should be marked: 

   <pre><strong>git update-index --no-skip-worktree secrets.sh</strong></pre>

   <a target="_blank" href="http://fallengamer.livejournal.com/93321.html">
   NOTE</a>: Pulls of changes upstream in GitHub updates the local file.

   If both the local and upstream file are changed, Git outputs a conflict message.

   Skipped files are flagged with a "S" in this list command:

   <pre><strong>git ls-files -v|grep '^S'</strong></pre>


   <a name="AddAndCommit"></a>

## 5.x Local config, add, commit

1. Before adding to git's Staging for the current repository, you may want to configure the local attribution just for the current repository:

   <pre><strong>cat .git/config</strong></pre>

   The first part of the file are repository-specific configurations:

   <pre>
[core]
   repositoryformatversion = 0
   filemode = true
   bare = false
   logallrefupdates = true
   ignorecase = true
   precomposeunicode = true
   </pre>

   The second part:

   <pre>
[remote "upstream"]
   url = git://github.com/hotwilson/some-repo.git
   fetch = +refs/heads/*:refs/remotes/upstream/*
[branch "master"]
   remote = upstream
   merge = refs/heads/master
[remote "origin"]
   url = git@github.com:wilsonmar/some-repo.git
   fetch = +refs/heads/*:refs/remotes/origin/*
   </pre>

   Optionally, override the global attribution with this:

   <pre><strong>
git config          user.name "Wilson Mar"
git config          user.id "wilsonmar+GitHub@gmail.com"
   </strong></pre>

   This is done by issuing a <strong>git config</strong> command without the "--global" parameter.

2. Before adding anything to the Git index file:

   <pre><strong>git diff --cached</strong></pre>

   ```--cached``` is a synonym for ```--staged```.

   There should be no response when nothing has been put in Git staging.

   <a name="Add"></a>

3. You can change several files, but only the files you add to <strong>Git's staging area</strong> 
   will be pushed to GitHub. 

   <tt><strong>git add . -A</strong></tt>

   The dot selects all files changed, recursively inside sub-folders as well.

   The dash capital A parameter specifies that deleted files be processed. 

   PROTIP: Many prefer to specifically add individual files to go into each particular commit, which works on all files added to staging. Instead of the dot, several files can be specified on the same command.

   Alternately, to add all the files modified (not new files created and untracked):

   <pre>git add -u</pre>

   Git has a "two-phase commit" approach. Files are added to Git's index file. Then all files staged in the index are committed together by the <strong>git commit</strong> command. 

   [ <a href="https://wilsonmar.github.io/git-whoops#Add">Whoops</a> ]

4. Do another diff to see how git add changed:

   <pre><strong>git diff --cached</strong></pre>

5. Do a git status again:

   <pre><strong>git status -s -b</strong></pre>

   Notice the green "M" and "A" showing it's being tracked:

   <pre>
M  .gitignore
A  newfile.md
   </pre>

   <a name="Commit"></a>

   ### git commit

6. The commit supplies a message describing changes, which applies to all files added. 

   <pre><strong>git commit -m"Add .DS_Store to .gitignore @hotwilson"</strong></pre>

   * A space is not needed between the m and the left quote of the message.

   * If you don't specify the dash m, Git will display a file containing comments as a prompt. In that file, any line beginning with the # comment character will be ignored and not be part of the message. Save and exit the text editor.

   * If a GitHub account user name prefixed by an at sign (such as "@wilsonmar") is specified in the message, GitHub automatically sends an email.
   <br /><br />

   A sample response:

   <pre>
[feat1 e2265f6] Update for show
 2 files changed, 3 insertions(+)
 create mode 100644 newfile.md
   </pre>

   <br /><br /> 

   [ <a href="https://wilsonmar.github.io/git-whoops#Commit">Whoops</a> ]<br />
   

   <a name="Reflog"></a>

   ### Local Reflog

8. List history of actions that have occurred on the local machine.

   <pre><strong>git reflog -5</strong></pre>

   ```-5``` specifies only the most recent 5 lines.

   Example output:

   <pre>
   9349be6 HEAD@{1}: commit: double quote removed for confusion
   9eb57bc HEAD@{2}: commit: mention gs shortcut 
   </pre>

   Each commit is put at the head of the chain of all commits made throughout history. 
   That 7-characters is the prefix to a much longer "hash code" that Git generates from each commit. 
   Content within Git is very difficult to alter because any change would result in a different hash. And insertions would break the chain of commits.

   * Locally, entries are pruned (removed) automatically after 90 days (by default).


   <a name="log"></a>

   ### Local Log

9. List <strong>commits</strong> that have occurred on the local machine:

   <pre><strong>git log --pretty=format:"%h %s %ad" --graph --since=1.days --date=relative;git log --show-signature -n 1 | tail -n 10 </strong></pre>

   ```| tail -n 10``` limits the output to 10 lines

   <a name="Rebasing"></a>

   ### Rebase to squash locally

7. Before pushing to GitHub/GitLab, some prefer to squash some commits so that only one commit message appears for several commits made locally. 

   * Rebasing cleans up intermediate commits that is unwanted noise to the rest of the team.
   The extra commits complicates the history, and makes back-out of code more difficult.

   * Yes, this changes history, which is why we do it. But it's only on your local versions.
   <br /><br />

   <pre>git rebase -i</pre>

   ```-i``` for interactive

   See <a target="_blank" href="https://wilsonmar.github.io/git-rebase">my blog on this</a>.

   Study <a target="_blank" href="http://wilsonmar.github.io/git-rebase">http://wilsonmar.github.io/git-rebase</a>
   for step-by-step instructions. Then return here.


   <a name="Push"></a>

## 6.x Push and Push with tags

1. The git push command sends to a remote repo what has been committed for a specific branch. 
   For the default origin remote and master branch:

   <pre><strong>git push</strong></pre>

   [ <a href="https://wilsonmar.github.io/git-whoops#Push">Whoops</a> ]

   Alternately, Bash users who have setup an alias can use this which includes a git add and commit:

   <a href="https://wilsonmar.github.io/git-shortcuts#gas">gas "JIRA #1234"</a>
   
   This alias adds all changes and commits them all with a static "update" in message:

   <a href="https://wilsonmar.github.io/git-shortcuts#gbs">gbs</a> 

   The two aliases above include a `git push` for maximum convenience.

   GitHub Enterprise uses can push to multiple remotes with one command:

   <pre>git push production,staging</pre>

   If you see an error message like this, it means you don't have permissions:

   <pre>
ERROR: Permission to hotwilson/some-repo.git denied to wilsonmar.
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
   </pre>

   ### Two-factor authentication

   If you setup 2FA (two-factor authentication), Git will prompt you for a username and password. Because of 2FA, GitHub expects a <a target="_blank" href="https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/">personal access token</a>. If you type in your account password, GitHub responds with "fatal: Authentication failed for https://github.com/...". 

   So when using 2FA, in a Terminal session, cd into .git, then edit file config to change, for example:

   <tt>url = https://github.com/wilsonmar/futures</tt>

   to

   <tt>url = git@github.com:wilsonmar/futures</tt>

   Notice the git user name instead of "https://". Behind the scenes, SSH protocol is used,
   but that doesn't need to be specified here.

   Also notice the colon character instead of the slash.

   cd back up out of .git to the repo's root folder before doing a git commit and push, or you'll see error message "fatal: this operation must be run in a work tree".


   <a name="Tags"></a>

   ### Push tags

2. When a commit is known good as the one to release, 
   most organizations tag that specific commit with <a target="_blank" href="http://semver.org/">
   semantic versioning</a> text.

   <pre><strong>git tag -a v1.2.3 -m\"New version\"</strong></pre>

   ```-a``` adds the tag permanently. Without this parameter, the tag remains local.

   The v1.2.3 format is called "semantic versioning" described at
   <a target="_blank" href="http://semver.org/">http://semver.org</a>

   PROTIP: This stores the tag within folder <tt>.git/refs/tags/</tt>.

4. Tags require an additional git push command to be pushed to GitHub.

    <pre><strong>git push origin --tags</strong></pre>

    [ <a href="https://wilsonmar.github.io/git-whoops#Tags">Whoops</a> ]

    CAUTION: An additional push commands is needed for tags because it uses Git notes features. Since notes were not designed for many notes/tags, using them is known to slow commits.


   <a name="DeleteBranch"></a>

   ### Delete branch

11. Because branches are just markers within Git, once a feature branch is in GitHub, that branch can be deleted from the local repo:

    <pre><strong>git branch -d feat1</strong></pre>

12. and from GitHub (by specifying that colon in front of the branch name). 

    <pre><strong>git push origin :feat1</strong></pre>

    NOTE: The colon is the secret special sauce. There is no "delete" command with this.


<a name="PullMerge"></a>

## 7.x Pull and Merge

   Unless you have been designated a committer in the upstream repository, you can't directly push changes to it like you can with your own repo. 

   But you can send a request to committers of that upstream repo to pull and merge changes from your forked repo. 

   Each Git hosting service has their own GUI to make such requests.

   GitHub calls them Pull Requests.<br />
   GitLab calls them Merge Requests.

   That is why my script has "Press when ready" steps - for all three manual actions below:

   ### 1. Create a pull/merge request

1. To make a pull/merge request, log into your Git hosting GUI and navigate to your origin repo.

2. Click Compare. If there are differences, you'll see a green "Create pull request".

3. Type in a Title for the request, such as "For the class".

4. Click the green "Create pull request".

   You can make more changes.

   Alternately, there is a command to request the pull from the upstream repo. For example: 

   <pre><strong>git request-pull v1.2.3 https://github.com/hotwilson/master  master</em>
   </strong></pre>

   * The URL must be specified (rather than a remote designator such as "upstream").

   * This feature is described at: <a target="_blank" href="http://git-scm.com/docs/git-request-pull">
   http://git-scm.com/docs/git-request-pull</a> which says
   "this will produce a request to the upstream, summarizing the changes <strong>between</strong> the v1.0 release and your master,
   to pull it from your public repository."

   See https://about.gitlab.com/2016/12/01/how-to-keep-your-fork-up-to-date-with-its-origin/

   ### 2. Squash and merge 

5. Next, on a different browser, login as the committer of that upstream repo.

   If you don't own the account, talk to the owner (class instructor).

6. Navigate to the repo that was forked, such as hotwilson. 

7. Click the "Pull requests" tab. 

8. Check the request that you added in the step above.

9. If there are no conflicts, click <strong>Squash and merge</strong> (or in other words, accept) the request.

   ![git-alt-merge-309x262-20359](https://user-images.githubusercontent.com/300046/45144563-bb85c500-b17b-11e8-8fe7-950067bc9300.jpg)

10. Click "Confirm Squash and merge".

    A purple "Merged" appears at the top of the screen.

   ### 3. Add file to upstream

    While still in the upstream repo (hotwilson), establish conditions for the next set of steps, in the upstream remote, make a change such as adding a file. 

11. Click "Create new file" button.

12. Type in a new file name. I like a date and time such as

    2018-09-30-8

13. Click under "Edit new file".

14. Type in some text, such as "hello".

15. Press Shift+down arrow to scroll to the bottom of the page.

16. Click the green "Commit new file".


<a name="UpdateUpstream"></a>

## 8.x Update origin with upstream changes

   Next, let's look at what happens if, over time, changes occur in the upstream repo. 

   See https://help.github.com/articles/syncing-a-fork/

1. Open a different browser (Firefox or Brave) to login and make a change.
   In the script there is a message:

   <pre>Press any key after adding a file</pre>

   <a name="Upstream"></a>

2. To enable dowload by Git, we add the upstream remote. 

   <pre>
   git remote add upstream "https://github.com/$OTHER_ACCT/$OTHER_REPO"
   </pre>

   which by default translates to:

   <pre><strong>
   git remote add upstream https://github.com/hotwilson/some-repo
   </strong></pre>

   It's OK to see<br />
   <pre>fatal: remote upstream already exists.</pre>

   Otherwise, expect no output returned from this command if ok.
   <br /><br />

   [ <a href="https://wilsonmar.github.io/git-whoops#Upstream">Whoops</a> ]

3. To verify whether the origin remote was created, as usual, with the repo. 

   <pre>git remote –v</pre>

   ```-v``` is for verification.

   Expect to see both your origin and upstream remotes listed.

   <pre>
origin   git@github.com:wilsonmar/some-repo.git (fetch)
origin   git@github.com:wilsonmar/some-repo.git (push)
upstream git://github.com/hotwilson/some-repo.git (fetch)
upstream git://github.com/hotwilson/some-repo.git (push)
   </pre>

4. To obtain changes locally, many would rather NOT issue a git pull upstream command, which blindly fetches and automatically merges changes. Differences in the same line within the same file, Git is forced into automatic conflict resolution mode.

   <pre><strong>git fetch upstream master</strong></pre>

   Example output:

   <pre>
remote: Counting objects: 2, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (2/2), done.
From git://github.com/hotwilson/some-repo
 * branch            master     -> FETCH_HEAD
   8843446..b33e370  master     -> upstream/master
   </pre>

5. git checkout master

   <pre>
Already on 'master'
Your branch is behind 'upstream/master' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)
   </pre>

6. List delta file names only 
                
   <pre><strong>git diff HEAD @{u} --name-only</strong></pre>

   Sample output:

   <pre>
newfile
   </pre>

   <a name="Merge"></a>

   ### git merge upstream

7. git merge upstream/master"

   <pre><strong>git merge upstream/master</strong></pre>

   Sample output:

   <pre>
Updating 8843446..b33e370
Fast-forward
 newfile | 1 -
 1 file changed, 1 deletion(-)
 delete mode 100644 newfile
   </pre>

   Notice the slash separator between the upstream remote and 
   the upstream branch (master).

   CAUTION: Once you start a merge, nothing else can be done until you reconcile
   ALL conflicts. One cannot save a partially-resolved merge.
   There is no way yet of testing a partially merged tree.
   You can't go back if you make a mistake.

   [ <a href="https://wilsonmar.github.io/git-whoops#Merge">Whoops</a> <a target="_blank" href="https://git-scm.com/docs/git-merge">Ref</a> ]

   

8. git push origin master"

   <pre><strong>git push origin master</strong></pre>

   Sample output:

   <pre>
Counting objects: 2, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 608 bytes | 608.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:wilsonmar/some-repo.git
   8843446..b33e370  master -> master
   </pre>

4. To obtain changes locally, many would rather NOT issue a git pull upstream command, which blindly fetches and automatically merges changes. Differences in the same line within the same file, Git is forced into automatic conflict resolution mode.

   * "Unintentional" merge commits are what some call "evil":

   <pre>git pull --rebase</pre>

   PROTIP: To set it up so every branch you ever create on any repository is set to pull with rebase, set this global configuration:

   <pre>git config --global pull.rebase true</pre>

   Prior to version 1.7, it was:

   <pre>git config --global branch.autosetuprebase always</pre>



<a name="OriginChange"></a>

## 9.x Update your origin repository

In this section we change something on GitHub/GitLab and then fetch it locally, see what changed, and merge it.

1. "Change something on the origin in GitHub wilsonmar/some-repo ..."

   <pre>Press any key after adding a file ...</pre>

2. Fetch (instead of pull)

   <pre><strong>git fetch origin master
   </strong></pre> 

   Sample response:

   <pre>
remote: Counting objects: 2, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (2/2), done.
From github.com:wilsonmar/some-repo
 * branch            master     -> FETCH_HEAD
   9c9468b..bbac92d  master     -> origin/master
   </pre>

3. See what changed:

   <pre><strong>git diff master..origin/master
   </strong></pre> 

   Sample response:

   <pre>
----------------------------------------------------------
renamed: me 2018-09-04b to 2018-09-04-a
----------------------------------------------------------
----------------------------------------------------------
added: smoky
----------------------------------------------------------
@@ -0,0 +1 @@
+bear
----------------------------------------------------------
added: xome
----------------------------------------------------------
@@ -0,0 +1 @@
+hello
   </pre>

4. Merge tracking branch:

   <pre><strong>git merge origin master -m"OK" --no-edit
   </strong></pre> 

   Sample response:

   <pre>
   </pre>

<hr />

<a name="GitHubAPI"></a>

## GitHub API

* See https://gist.github.com/caspyin/2288960 about GitHub API
* From https://gist.github.com/robwierzbowski/5430952 on Windows
* From https://gist.github.com/jerrykrinock/6618003 on Mac


<hr />

<a name="DefaultBranch"></a>

### Set default branch

<pre>
DEFAULT_BRANCH="develop"
git symbolic-ref HEAD refs/heads/$DEFAULT_BRANCH
cat .git/HEAD
git branch -avv
</pre>

### Viewing files

0. To see files changed vs. the tracking branch:

   <pre><strong>git diff HEAD @{u} --name-only
   </strong></pre> 

0. To see files changed, including uncommited local modifications vs. the tracking branch:

   <pre><strong>git diff @{u} --name-only
   </strong></pre> 

0. To see lines changed vs. the tracking branch:

   <pre><strong>git diff master origin/master
   </strong></pre> 


   ### Compare tracking branch

0. Before you fetch/pull, display incoming changes from remote origin master branch :

   <pre><strong>git log ^master origin/master
   </strong></pre>

   Nothing is returned if no changes were found.

0. To see the difference introduced by fetch:

   <pre><strong>gitk origin/master..master
   </strong></pre>

   Alternately, some others prefer using 3rd-party merge utilities.

0. To display outgoing changes before you push:

   <pre><strong>git log master ^origin/master
   </strong></pre>

0. then a 

   <pre><strong>git checkout master</strong></pre>

   [ <a href="https://wilsonmar.github.io/git-shortcuts#gfu">gfu is the shortcut</a> ]

   <a name="GitK"></a>

   ### gitk for diff

   Now we can use a utility such as <strong>gitk</strong> to see what changes came in. 

   * Click the commit listed at the top of the list, which is the most recent commit.

   * Alternately, there is also utilities vimdiff, meld, difftool, etc. 

   * For Linux: https://wiki.gnome.org/Apps/Gitg/

   * To see the difference between what is in last commit vs. what's in the working folder:<br />
   <pre>git difftool</pre>

   * To see the difference between what is in last commit vs. what's added in the index cache:<br />
   <pre>git difftool --cached</pre>

   * You can make a default command such as this to explicitly specify some file to compare:<br />
   <pre>git diff HEAD HEAD^ -- <em>file1</em></pre><br />
   

   <a name="PushOrigin"></a>

   ### git push origin master

0. git push to update origin master on our forked repository.

   There are variations to these commands, but this is the typical workflow.

   [ <a href="https://wilsonmar.github.io/git-whoops#PushOrigin">Whoops</a> ]

   <hr />

   <a name="MyRepoChange"></a>

   ### Changes in my repo

0. In GitHub, on a repo you can change,
   create a new branch named "sample1",
   create a new file, click the pencil to edit the file. 
   Save it.
   For example, create a new file and change something.

   Even if you are not working with a repo that others update,
   you yourself may update files on GitHub.



   <a name="MyRepoFetch"></a>

## fetch --dry-run

0. Locally, when a team creates branches of the master, 
   everything that the team is working on can be seen with one command:

   <pre><strong>git fetch --dry-run
   </strong></pre>

   A sample response is 
   <a target="_blank" href="http://scottchacon.com/2011/08/31/github-flow.html">
   this from Scott Chacon</a>:

   <pre>
remote: Counting objects: 3032, done.
remote: Compressing objects: 100% (947/947), done.
remote: Total 2672 (delta 1993), reused 2328 (delta 1689)
Receiving objects: 100% (2672/2672), 16.45 MiB | 1.04 MiB/s, done.
Resolving deltas: 100% (1993/1993), completed with 213 local objects.
From github.com:github/github
 * [new branch]      charlock-linguist -> origin/charlock-linguist
 * [new branch]      enterprise-non-config -> origin/enterprise-non-config
 * [new branch]      fi-signup  -> origin/fi-signup
   2647a42..4d6d2c2  git-http-server -> origin/git-http-server
 * [new branch]      knyle-style-commits -> origin/knyle-style-commits
   157d2b0..d33e00d  master     -> origin/master
 * [new branch]      menu-behavior-act-i -> origin/menu-behavior-act-i
   ea1c5e2..dfd315a  no-inline-js-config -> origin/no-inline-js-config
 * [new branch]      svg-tests  -> origin/svg-tests
   87bb870..9da23f3  view-modes -> origin/view-modes
 * [new branch]      wild-renaming -> origin/wild-renaming
    </pre>

   PROTIP: Branches such as "origin/wild-renaming" in the sample above
   is a <strong>remote tracking branch</strong>.
   File in your working folders are not updated by git fetch, 
   which is the reason why we use it rather than git pull.
   Local branches don't have the remote prefix and slash.


   [ <a href="https://wilsonmar.github.io/git-whoops#Upstream">Whoops</a> ]


<a name="MergeLocal"></a>

### Pull rebase with git up alias

 Use the Git utlity which resolves conflicts:
   It tries to find out which commits are really your local ones, and which had come from upstream in an earlier fetch.

   <pre><strong>git pull --rebase --autostash
   </strong></pre>

   As noted <a target="_blank" href="http://gitolite.com/git-pull--rebase">
   here</a>, this finds the starting point for rebase by 
   looking at the reflog of the remote tracking branch
   (the tips of successive git fetch operations on origin).

   * https://coderwall.com/p/7aymfa/please-oh-please-use-git-pull-rebase
   <br /><br />

   <strong>`--autostash`</strong> 
   (introduced in git 2.9 of June 2016) automatically performs stash commands 
   before the pull so that pull works even on "dirty" trees.
   The automatic commands are `git stash save` before the pull, 
   and then when done `git stash pop`. This added logic which solved a trap in
   automation via aliases such as:

   <pre><strike>git stash && git pull --rebase && git stash pop</strike></pre>

   If there's nothing to stash, the first command will do nothing, 
   but then stash pop will unstash some random stuff from before.

   CAUTION: There still may be changes introduced which cause a conflict when
   the stash pops after a successful rebase.
   An <a target="_blank" href="http://www.praqma.com/stories/git-autostash/">
   example</a>:

   <pre>
Created autostash: 094ad5c
HEAD is now at d39c25c repo1 - readme
First, rewinding head to replay your work on top of it...
Fast-forwarded master to 6b6e1d4262fd5bc8d2b974f81222003a6c67fea6.
Applying autostash resulted in conflicts.
Your changes are safe in the stash.
You can run "git stash pop" or "git stash drop" at any time.
   </pre>   

0. If you like the above approach enough to use it a lot, 
   create a Mac or Git alias.

   On a Mac, you can type only 3 letters (`gup`) by defining in your ~/.bash_profile:

   <pre>alias gup='git -c rebase.autoStash=true pull --rebase'
   </pre>

   Alternately, on any system, define this command:

   <pre>git config --global alias.up '!git pull --rebase --autostash'
   </pre>

   or

   <pre>git config --global alias.up '!git fetch && git rebase --autostash FETCH_HEAD'
   </pre>

   This would enable you to type only this (reminescant of Subversion):

   <pre><strong>git up
   </strong></pre>

   The above alias definitions obsoletes <a target="_blank" href="http://aanandprasad.com/git-up/">git-up</a> and
   <a target="_blank" href="https://github.com/msiemens/PyGitUp">
   the Python port on Windows</a>
   as well as previous suggestion to define a global default
   (saved in the global .gitconfig file)
   which automatically inserts `--rebase` parameter onto 
   `git pull` commands:

   <pre><strong>git config branch.autosetuprebase always
   </strong></pre>

   [ <a href="https://wilsonmar.github.io/git-whoops#MergeLocal">Whoops</a> ]

<hr />

### Trunk-based Development in MS Release Flow

Thoughtworks advocates for their <a target="_blank" href="https://www.thoughtworks.com/de/insights/blog/enabling-trunk-based-development-deployment-pipelines">Trunk-Based Development</a> instead of using different branches, so every commit keeps the repository production ready. 

<a target="_blank" href="https://www.youtube.com/watch?v=ykZbBD-CmP8&t=4m1s">VIDEO: Git patterns and anti-patterns for successful developers</a>
[20:25] at Microsoft Build conference May 7-9, 2018
by Edward Thomson (@ethomson) about Visual Studio Team Services
says Microsoft now recommends Trunk-based Development, where coding is based on the trunk, which is a synoym for the master branch.
Make Small, simple changes and integrate into the master branch.
easier to code review small chunks
fewer merge conflicts
encourages pull requests
simpler to ship, faster velocity


Keeping code isolated from other developers is Technical Debt.
So code in <a target="_blank" href="https://martinfowler.com/articles/feature-toggles.html">feature toggle codes</a> which allows features to be turned on or off in production.

[8:51] GitHub Flow adds an additional step 

   1. Master is locked temporarily 
   2. Merge master into the branch to deploy
   3. Build and run test suite on the branch to deploy
   4. Deploy the branch to canary servers; monitor for problems
   5. Deploy the branch to production servers; monitor for problems
   6. Merge the pull request into master; unlock the master branch

[15:20] Microsoft does "Release Flow" releases to production at the end of 3-week sprints.

Like GitHub, Microsoft fixes bugs in master first so that they can't be forgotten and create the same error in the future.
The changes are cherry-picked into the release branch.

See <a target="_blank" href="https://aka.ms/releaseflow">https://aka.ms/releaseflow</a> dated April 19, 2018

### Other videos and articles

* <a target="_blank" href="https://www.youtube.com/watch?v=-zvHQXnBO6c">
  Syncing Your GitHub Fork</a> [4:26] May 3, 2014
  by Data School at jackiekazil using justmarkham

* <a target="_blank" href="https://www.youtube.com/watch?v=07hOKRl6Wiw">
   GitHub Fork and Sync repository</a>
   by Prem Aseem Jain at
   <a target="_blank" href="https://premaseem.wordpress.com/2016/01/19/github-how-to-sync-from-forked-repoit/">
   premaseem.wordpress.com</a>


### More Videos

YOUTUBE: from GitHub Education
<a target="_blank" href="https://www.youtube.com/watch?v=aJnFGMclhU8">
Professional Guides: Workflow Strategies</a>
has video illustrations 


https://github.com/zacksiri
<a target="_blank" href="https://twitter.com/zacksiri/">@zacksiri</a>

   0. <a target="_blank" href="https://www.youtube.com/watch?v=xgo60yhetZk&">
   Git Flow Introduction</a>
   0. <a target="_blank" href="https://www.youtube.com/watch?v=XbapC7nm49s&t=34s">
   Git Flow Feature Branch and Pushing to GitHub</a>
   [11:16] 6 Dec 2015
   0. <a target="_blank" href="https://www.youtube.com/watch?v=mcWsX_setW4">
   Git Flow and Github Pull Request</a> 
   [6:53] 1 Jan 2016


git-basics software is described by <a target="_blank" href="https://www.youtube.com/watch?v=SChuTnuBYMg">
this video</a> and <a target="_blank" href="http://mediacurrent.com/blog/webinar-git-intro">
blog</a> from 2013 by @KBasarab and at:

   * <a target="_blank" href="http://datasift.github.com/gitflow/">
   http://datasift.github.com/gitflow</a>

* https://blog.axosoft.com/gitflow/
* https://leanpub.com/git-basics/read
* https://www.git-tower.com/learn/git/ebook/en/desktop-gui/advanced-topics/git-basics


### References

* https://danielmiessler.com/study/git/
  Daniel Miessler's Git Tutorial from 2014
  is a masterful explanation.

* <a target="_blank" href="https://github.com/Kunena/Kunena-Forum/wiki/How-to-handle-conflicts-with-git">
   How to handle conflicts with git</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=enMumwvLAug">
   Introduction to GitLab Workflow</a> [49:14] Mar 11, 2016

* <a target="_blank" href="https://www.youtube.com/watch?v=gLWSJXBbJuE&feature=youtu.be">
   Atlassian Stash - Git workflows in the Enterprise</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=wKmmFQwGWBM">GitFlow how to get it right</a> Apr 24, 2014 [25:15] by Basil Abbas

* <a target="_blank" href="https://www.memrise.com/course/1494375/learn-git-everything-you-need-to-know/">http://tiny.cc/learngit</a>
   provides a webpage to memorize Git concepts.

* http://get.gitlab.com/getting-started-with-git/

* https://neoteric.eu/automate-your-work-with-gitlab-ci-cd-tool

* <a target="_blank" href="https://www.youtube.com/watch?v=SChuTnuBYMg
">Git Flow for Daily Use</a> by Mediacurrent Drupal, Apr 11, 2013

* <a target="_blank" href="https://www.youtube.com/watch?v=a0wO87gel60&index=38&list=PLRsbF2sD7JVq8QYW0vlbOS2JuXUWaWMnT">Git Workflow Strategies for Technical Debt Management</a> May 17, 2017 by Raquel Pau Fernández


## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
