---
layout: post
title: "GitConfig "
excerpt: "Setup automation for multi-account usage"
tags: [setup, mac, Windows, bash]
date: "2020-07-05"
file: "goconfig"
image:
# books-1900x500.jpg
  feature: https://user-images.githubusercontent.com/300046/80358183-3f049600-8839-11ea-9b41-3a07bdcc6596.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

To enable you to quickly become productive, this hands-on tutorial contains instructions for quick installation and <strong>efficient usage</strong> of tools accessing several GitHub accounts used.

## McKinsey GitHub Organizations

Historically, each of several McKinsey cells make use of their own source code repository.

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Key </th><th> URL </th><th> Usage </th></tr>
<tr valign="top"><td> qbc </td><td><a target="_blank" href="https://quantumblacklabs.com/">https://quantumblacklabs.com</a></td><td> used by Quantum Black is already on GitHub SaaS</td></tr>
<tr valign="top"><td> ghn </td><td><a target="_blank" href="https://githuben.intranet.mckinsey.com">https://githuben.intranet.mckinsey.com</a></td><td>used by T&D (Technology and Digital) is an on-prem. GitHub Enterprise instance</td></tr>
<tr valign="top"><td> mcks </td><td><a target="_blank" href="https://git.mckinsey-solutions.com/">https://git.mckinsey-solutions.com</a></td><td>used by ClienTech is an on-prem. instance</td></tr>
<tr valign="top"><td> mdlc </td><td><a target="_blank" href="https://github.mdl.cloud/">https://github.mdl.cloud</a></td><td>used by MDL, a GitHub instance on self-hosted AWS</td></tr>
<tr valign="top"><td> hssc </td><td><a target="_blank" href="https://git.dev-nebula.com/">https://git.dev-nebula.com</a></td><td>used by HSS (Health Systems and Services?), an on-prem. instance of GitBucket (obsolete version v4.22.0)</td></tr>
</table>

Some of these instances (such as MDL) require VPN access, which can be a hassle.

Having disparate systems has made it difficult for people to easily work across cells.
Fragmented administrative support has resulted in <strong>technical debt</strong> which is slowing down adoption of innovations, especially around security and self-service.

So to concentrate support capabilities, a McKinsey "OneGitHub" initiative in 2020 is migrating repositories to a set of new <strong>organizations</strong> on the GitHub.com SaaS world-wide infrastructure:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Key </th><th> URL </th><th> Usage </th></tr>
<tr valign="top"><td> mci </td><td><a target="_blank" href="https://github.com/McK-Internal">https://github.com/McK-Internal</a></td><td>for holding production code for internal systems (not seen by clients).</td></tr>
<tr valign="top"><td> mct </td><td><a target="_blank" href="https://github.com/McK-Internal-Test">https://github.com/McK-Internal-Test</a></td><td> for testing internal systems.</td></tr>
<tr valign="top"><td> mcp </td><td><a target="_blank" href="https://github.com/McK-Playgroud">https://github.com/McK-Playground</a></td><td> for individuals doing experiments.</td></tr>
</table>

Each Github organization has a slightly different <a href="#SecConfig">security configuration</a>.
But none of the new orgs require special VPN configuration.

Each GitHub organization has a different naming convention for how to <a href="#RepoNaming">name repositories</a>.

The strategy for maximum worker convenience is that each worker has a <strong>single GitHub.com account</strong> to access all repositories, McKinsey or otherwise. Access to specific McKinsey repositories are assigned by McKinsey administrators who associate specific users with Teams in GitHub.


<a name="GitHubNewAcct"></a>

## New GitHub.com account

1. Create a public GitHub.com account using your McKinsey work email at:

   <a target="_blank" href="https://github.com/">https://github.com</a> 

   <img width="398" alt="github-new-user" src="https://user-images.githubusercontent.com/300046/86534738-07007b80-be98-11ea-80f4-4471a21fc213.png">

1. PROTIP: GitHub does not allow use of spaces or underline characters in user names, so use dashes to separate words. For example, use your first-name dash last-name such as "jane-doe". If you have a popular name and have been assigned a suffix such as "-GGN", include that in your GitHub name to avoid confusion, such as:

   `jane-doe-ggn`

1. Come up with a strong password. 

1. Store the password in a safe place.

1. Configure your profile with a picture at:

   <a target="_blank" href="https://github.com/">https://github.com</a> 

1. MFA via Okta ???

## Access in McK via Duo

While a self-service portal is being built, a system Administrator manually initiates the enrollment of each new GitHub user using a FIA utility website.

1. When you receive an email from Luc Allain via noreply@GitHub.com, click the green "Join" button. That opens a new tab on your default internet browser.

   <img width="449" alt="github-mck-invite-449x431.jpg" src="https://user-images.githubusercontent.com/300046/86538861-d0395e00-beb5-11ea-9467-66ae27cd8881.jpg">

1. In "Pick a username", type the GitHub user account you specified in the <a href="#GitHubNewAcct">setup step above</a>:

   ![github-mck-sel-name-207x350](https://user-images.githubusercontent.com/300046/86538905-4047e400-beb6-11ea-8dc2-35aa70b16d6f.jpg)

1. You need to type the same email address and password you specified when setting up that username.

1. Get authenticated by opening the Duo app on your iPhone and clicking the buttons.

   After authentication, you still need to get assigned permissions to specific repositories
   (based on GitHub Team assignment).
   

<hr />

## Install on laptops

   Most developers prefer a way to work <strong>offline on their laptops</strong> (without an internet connection) in case they need to. So they clone (download) files to work, then push "commits" (changes) back to GitHub. To do that requires installing some software utilities and configuration work.
   Instructions and automation below are necessarily for a specific set of configurations, which you can customize after this generic installation.

You can install all utilities and make configuration changes manually.

But when your laptop is ever lost, stolen, or needs to be replaced, you'll have to take time again (at protentially the worst possible time) to install and configure again. More importantly, you want a quick way to keep up with upgrading all the components, if only to get security updates.

That's why we have created an automation script to install and configure the most popular utilities used by developers like you, for Windows and macOS.

## Automated Install Script

Our automation script installs and configures several of what many developers requested. (However, you may want to install specific features on your own):

   1. On <a href="#WindowsInstall">install what is needed on Windows</a>: a PowerShell script to install Subsystem for Linux to run Bash scripts
   1. On macOS: XCode utilities, Ruby, and Homebrew to install utilities
   1. Upgrade components which come with the operating system and is likely obsolete

   1. A <a href="#GitClient">Git client</a> program to `git clone` and other commands
   1. Git command auto-completion
   1. A <a href="#GitGUIClient">Git GUI client</a> (GitHub Desktop) so you can download any repository with one click
   1. A Terminal client "iTerm2" and "Hyper"

   1. A <a href="#DotFiles">base dotfiles repository</a> as the basis for customizations (git clone)
   1. Keyboard shortcuts and utilities so you can type a few characters instead of long commands

   1. "hub" utility to perform actions on GitHub.com from the command line
   1. "jq" utility to parse JSON within Command Line programs within the Terminal
   1. "curl" and/or "wget" utilities to process REST API on the command line (like on Linux)
   1. "Insomnia" REST API GUI client

   1. "ansible-vault" to keep secrets for Ansible
   1. "vault" (from Hashicorp) client to manage secrets on Vault Server
   1. "Pylint" and "Flake8" linter and "Bandit" security scanner for Python code

   1. <a href="#Fonts">Fonts</a> and templates that are easier on your eyes.
   1. Web browser plug-ins to optionally set dark mode

      These have implications for editing the `.gitconfig` file</a>:

   1. A utility to compare differences among several files as the default within Git
   1. <a href="#TextEditor">Text editor</a> Visual Studio Code and popular plugins
   1. The GPG (GNU Privacy Guard) utility to optionally cryptographically sign Git commits
   1. Configuration of .gitconfig to automatically provide keys to several GitHub organizations
   1. "git-secrets" as git sub-commands to scan for presence of secrets in Python code.
   <br /><br />

Below are the manual equivalents to the automated script invoked above, fo

<hr />


Before running the script, Windows 10 users need to prepare:

<a name="WindowsInstall"></a>

### Prepare Windows 10

Automation of Windows 10 means running first running a Microsoft's PowerShell script, <strong>manually</strong>. PowerShell comes installed by default in every Windows machine (starting with Windows 7 SP1 and Windows Server 2008 R2 SP1). But it's <a target="_blank" href="https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/installing-windows-powershell?view=powershell-7">invoked differently depending on the edition of Windows</a>. Instructions below are for Windows 10 Desktop (not Server):

### Install Git Bash (Git for Windows)

1. <a target="_blank" href="https://www.udemy.com/course/git-bash/learn/lecture/2752490#overview">VIDEO</a>: Install "Git for Windows" from:

   <a target="_blank" href="https://git-for-windows.github.io/">https://git-for-windows.github.io/</a>

1. Click on the "Download" button.
1. Click the "64 bit.exe" link to begin download (into your Downloads folder).
1. Click OK to the security warning.
1. Click the installer to invoke it.
1. In Select Components, select where you would like to have "Git Bash" icon.

   ![git-bash-win-icons-653x506](https://user-images.githubusercontent.com/300046/86545961-76558a00-beef-11ea-8cb1-e93503781135.jpg)

   ### Open PowerShell

1. Open the PowerShell command-line program by pressing the Windows key on your keyboard or clicking the Windows icon at the left lower corner. Then, start typing "PowerShell" until the full name appears. Click on that.

   `PS ` appears when you are in PowerShell.

1. Identify the version of PowerShell:

   <pre><strong>$PSVersionTable </strong></pre>

   Windows Automatic Updates keeps the version current to what is available (5.1 at time of writing).

   ### Upgrade .NET Framework

1. In an internet browser (Google Chrome), get the <strong>offline</strong> installer for .NET 4.5:

   <a target="_blank" href="https://www.microsoft.com/en-us/download/details.aspx?id=40779">
   https://www.microsoft.com/en-us/download/details.aspx?id=40779</a>

1. Click "Download", then "Save".
1. After download is complete, run the installer.

   <a target="_blank" href="https://www.youtube.com/watch?v=a85QLUJ0Wbs">VIDEO</a>

   ### Change PowerShell Execution Policy

1. Change PowerShell's execution policy (i.e. enable Powershell), to avoid errors:

   <pre><strong>Set-ExecutionPolicy RemoteSigned -scope CurrentUser
   </strong></pre>

1. To install <a target="_blank" href="https://scoop.sh/">Scoop</a> (which is now preferred over Chocolately), within the PowerShell prompt, use iwr (which is equivalent to curl in Linux):

   <pre><strong>iwr -useb get.scoop.sh | iex</strong></pre>

   Alternately, triple-click this command and paste in Powershell prompt:

   <pre><strong>Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
   </strong></pre>

1. If you prefer to use "curl" and "touch" commands from Linux, out of habit:

   <pre><strong>scoop install curl touch openssh</strong></pre>

1. Install 7zip client needed by some Windows apps to unzip archives in that format:

   <pre><strong>scoop install 7zip</strong></pre>

1. To reduce eyestrain, format the command-line Terminal with the Solarized theme of colors:

   <pre><strong>scoop install concfg
concfg import solarized small
y</strong></pre>

<hr />

## Open command-line

NOTE: If you rather not type commands, see the <a href="#GUIGit">GUI Git clients</a>.

1. Switch to a command-line shell window. 

   On macOS, press command+spacebar and type enough of "Terminal.app" for a selection to appear, then press Enter to open it.

   On Windows 10, press the Windows key on the keyboard and type <strong>"Git Bash"</strong> until the program appears, then press Enter to invoke it. Note this is different than running the "Windows Subsystem for Linux” option which runs the entire Ubuntu operating system (or other distribution).

1. <strong>Triple-click</strong> this command to highlight it, then press command+C to copy it to your invisible Clipboard:

   <pre><strong>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/sample.sh) -u wilson-mar"
   </strong></pre>

1. On macOS, switch to the Terminal window by pressing command+Tab until you rest on the Terminal icon.

   On Windows, switch to the Terminal window by pressing ctrl+Esc until you reston the Terminal icon.

2. Click anywhere on the Terminal screen. You might be required to enter your password again.

3. Press command+V to paste from the Clipboard.

4. Press cursor back to change `-u wilsonmar` to your own GitHub account, such as `-u john-doe`.

5. Press Enter to run the script.



<a name="GitGUIClient"></a>

### Git Client GUI program

What is installed here is the most popular. But because Git file format is well known, <a target="_blank" href="https://help.github.com/en/github/getting-started-with-github/set-up-git">several Git clients are available</a>, and can be installed in addition.

1. Install Git CLI client using Homebrew. On macOS:

   <pre><strong>brew install git</strong></pre>

   On Windows:

   <pre><strong>scoop install git</strong></pre>

   Now you should be able to press the Windows key to open the "Git Bash" program, 
   then run Bash scripts.

   ### Git command auto-completion

1. On Windows: Install Git command completion and to show what brach on the command prompt:

   <pre><strong>scoop install pshazz</strong></pre>




<a name="dotfiles"></a>


### Personal Dotfiles repos

   Files used to install and configure utilities and environment for "local" work on laptops are stored in a "dotfiles" repository under your personal account. 

   If your current laptop is lost or damaged, you can reinstall the latest versions of your tools.

   You only need one set of dotfiles for your laptop to access various organizations on github.

   If you don't already have a dotfiles repository, I have programmed a shell script that automates installation of several tools for you. Such automation is one of many ways to setup a laptop.

   ### Search within GitHub

1. Just so you get an idea of their popularity and variety, here is the result of a search through all github.com of "dotfiles":

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/86536824-e93b1280-bea7-11ea-8a8d-2264c3d155db.png"><img width="1080" alt="github-search-dotfiles" src="https://user-images.githubusercontent.com/300046/86536824-e93b1280-bea7-11ea-8a8d-2264c3d155db.png"></a>

   This list of nearly 140,000 (at time of writing) can be sorted different ways.

   Dotfiles are a highly personal matter.
   More details about dotfiles are <a target="_blank" href="https://wilsonmar.github.io/dotfiles/">here</a>.


<a name="TextEditor"></a>

## Text Editor

Instructions here uses TextEdit, a GUI text editor that comes with macOS.



## Keyboard shortcuts





### Install Python

<a target="_blank" href="https://www.youtube.com/watch?v=oLEkF7ctXOU">On Windows</a>




<hr />

## SSH for Multiple GitHub accounts

1. Specify a strong password.
1. You may specify the same email address at several hosts.

1. Confirm with your email.

   On your macOS Mac laptop:

   ## .ssh/config

1. Specify a name for the SSH keypair at each GitHub host location:

   * A personal account uses the default<br />
   personal
   * A corporate account can use the same<br />
   id_rsa
   * A client-facing account uses<br />
   mck-github
   <br /><br />

1. Navigate to your user $HOME Secure Shell folder:

   <pre><strong>cd ~/.ssh</strong></pre>

1. Create a <tt>~/.ssh/config</tt> file, specifying a name (such as "id_rsa" for each account):

   <pre>Host githuben.intranet.mckinsey.com-wilson-mar
   HostName githuben.intranet.mckinsey.com
   User git
   IdentityFile ~/.ssh/id_rsa
&nbsp;
Host github.com/Mck-Enterprise-Automation
   HostName github.com
   User git
   IdentityFile ~/.ssh/mck-pub
&nbsp;
Host github.com/wilsonmar-wilsonmar
   HostName github.com
   User git
   IdentityFile ~/.ssh/personal
&nbsp;
# Send a null packet every 300 = 5 minutes and 2 retries:
# (See https://patrickmn.com/aside/how-to-keep-alive-ssh-sessions/)
Host *
    ServerAliveInterval 300
    ServerAliveCountMax 2
   </pre>

   "wilsonmar" in <tt>github.com/wilsonmar-wilsonmar</tt> is replaced with your own personal account name.

   "User git" is always specified because providing a SSH file enables you to use urls starting with <tt>git@github.com</tt> 

   `ServerAlive` entries specify a "keep alive" to keep VPN lines working rather than timing out.


   ### Generate SSH keypair

1. In a Termial:

   <pre><strong>ssh-keygen</strong></pre>

    We don't need to add `-t rsa -b 4096 ` as some other tutorials suggest because those are the defaults (4096 bit RSA algorithm).

1. Specify the SSH keypair's IdentifyFile name as planned in the file above.

1. Press Enter for the other options.

   including the Passphrase

1. Copy into your machine's invisible Clipboard the contents of the public key file for the pair:

   <pre><strong>pbcopy < ~/.ssh/id_rsa.pub</strong></pre>

   Alternately, you can open the file in your text editor.

   ### Add the 

1. Open GitHub to your account.
1. Click the account at the upper-right corner and select "Settings".
1. Select "SSH and GPG" from the left menu.
1. Click "New SSH".
1. Click the form field and press command+V to paste into the field.
1. In the Title field, type the name of the SSH keypair (such as "id_rsa").


   ### Add (register) SSH private keys 

   This is necessary to use the keys:

1. Ensure the ssh-agent is running:

   <pre><strong>eval "$(ssh-agent -s)"</strong></pre>

   The expected response is the process number:
   <pre></pre>

1. Add the keys to the ssh-agent like so:

   <pre><strong>ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/id_rsa
   </strong></pre>


   ## On your macOS laptop

1. Open a Terminal.

1. Navigate to your <strong>user $HOME folder</strong>:

   <pre><strong>cd
   </strong></pre>
   
1. Create a folder for each account at your <strong>user $HOME folder</strong>:

   <pre><strong>mkdir gits  # your personal GitHub account
mkdir githuben     # the T&D ccount
mkdir mck-github   # a client-accessible account
   </strong></pre>

1. If you have already configured use of GitHub by a command such as this:

   <pre><strong>git config --global user.name "Wilson Mar"</strong></pre>

   the Git program would automatically create a <tt>.gitconfig</tt> file at your user $HOME folder.

1. If you have an existing <tt>.gitconfig</tt> file, copy it to your person account (one of the account folders you created above):

   <pre><strong>git cp ~/.gitconfig  ~/gits</strong></pre>

   ## Router ~/.gitconfig

1. Edit a <tt>~/.gitconfig</tt> file on your <strong>user $HOME folder</strong> to contain statements to redirect traffic to a folder path depending on what folder you are located (in the future):

   <pre>[includeIf "gitdir:~/gits/"]
  path = ~/gits/.gitconfig
[includeIf "gitdir:~/githuben/"]
  path = ~/githuben/.gitconfig
[includeIf "gitdir:~/mck-github/"]
  path = ~/mck-github/.gitconfig
   </pre>


   ## Editor install

1. After installing a professional text editor (IDE) 
   specify it as the default for use by Git:

   * Sublime Text, 
   * Visual Studio Code, etc.
   <br /><br />


   ## Personal account setup

1. In the <strong>~/gits</strong> folder, create a <tt>.gitconfig</tt> file for use by a personal account (with you replacing the sample user name "wilsonmar" with your own account name):

   <pre>[user]
   name = wilsonmar
   email = wilsonmar@gmail.com
[core]
   hooksPath = ~/gits/.git-hooks
   </pre>


   ## Setup account for Cryptographic signing

1. In the <strong>~/mck-github</strong> folder, create a <tt>.gitconfig</tt> file which makes use of cryptographic signing:

   <pre>[user]
   name = wilson-mar
   email = wilson_mar@mckinsey.com
   signingkey = 62C414BA89BFBE52
[core]
   hooksPath = ~/mck-github/.git-hooks
[gpg]
   program = gpg
[tag]
   forceSignAnnotated = true
   </pre>

   ## Git Hooks setup

1. Configure Git Hooks automatic actions.



Repeat for a second and third account.



   ## Clone public http url

   Steps in this section can be performed within your IDE.

1. In a browser, navigate to a GitHub url which you do not have permission to push into.

1. Click the green button to obtain an url.
1. Click HTTP to obtain a "http" formatted URL rather than "git@" SSH url.

1. Switch to a Terminal.
1. Clone from your personal GitHub

   <pre><strong>git clone </strong></pre>

1. Press command+v to paste the url, then press enter.

1. Save an <strong>upstream</strong> url of the original repository:

   <pre><strong>git remote add upstream https://...</strong></pre>

   ## Clone SSH url

1. In a browser, navigate to your work GitHub url you have permission to push to:

1. Click the green button to obtain an url.
1. Click SSH to obtain a "git@" formatted URL rather than "https" url.

1. Switch to a Terminal.
1. Clone from your personal GitHub

   ## Git add and commit

1. Configure keyboard shortcuts in a bash profile:

   <pre>gsl   # for git status list
gas "msg"   # to add and commit with a message
gbs         # to add, commit, and push with a generic message
   </pre>

   ## Edit

1. Pull and Merge if necessary
1. Edit a file to change
1. Add, Commit, and Push

   ## Compare files utility


<a name="SecConfig"></a>

## Org. Security Configuration



## References

https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/

https://medium.com/the-andela-way/a-practical-guide-to-managing-multiple-github-accounts-8e7970c8fd46



<a name="RepoNaming"></a>

## Repo Naming conventions


<a name="Fonts"></a>

### Fonts


<a name="GPG"></a>

### GPG install

1. Install GPG utility so you can cryptographically sign commits when needed.

