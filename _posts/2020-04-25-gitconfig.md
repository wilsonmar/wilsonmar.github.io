
![books-1900x500.jpg](https://user-images.githubusercontent.com/300046/80358183-3f049600-8839-11ea-9b41-3a07bdcc6596.jpg)

## Professional multi-account usage

This tutorial contains instructions for installation and usage of GitHub tools used by professionals:

   * a Git Terminal client 
   * a utility to cryptographically sign commits, called GPG (GNU Privacy Guard)
   * keyboard shortcuts

   * a folder containing Git Hooks to take automatic actions
   * a utility to compare several files as the default within Git
   * a professional text editor as the default within Git
   <br /><br />

(Instructions here uses TextEdit, a GUI text editor that comes with macOS.)

## Multiple GitHub accounts

What is unusual with this tutorial, not covered in the <a target="_blank" href="https://wilsonmar.github.io/git-github-videos">hundreds of tutorials on GitHub</a>, is how to setup your macOS laptop to <strong>switch among several GitHub accounts</strong>:

   * A personal account at<br />
   <a target="_blank" href="https://github.com/">github.com/your_name</a>

   * An on-prem account at<br />
   <a target="_blank" href="https://githuben.intranet.mckinsey.com/">githuben.intranet.mckinsey.com</a> requested on <a target="_blank" href="https://mckinsey.service-now.com/ghd?id=mck_app_cat_item&sys_id=94802e59db7fa344e9d8ef084896191f&search_term=github">GHD</a>

   * A public-facing account at<br />
   <a target="_blank" href="https://github.com/">funcorp.github.com</a> requested at ???

<hr />

1. In Enterprise environments, apply for and install VPN (Virtual Private Network) access.

1. Apply for an account at each GitHub host landing page. Instructions below apply to 

   <a target="_blank" href="https://GitHub.com">GitHub.com</a>



1. Specify an <strong>account name</strong> that is unique among all other users at that host name:

   PROTIP: GitHub does not allow use of spaces or underline characters in user names, so use dashes to separate words.

1. Specify a strong password.
1. You may specify the same email address at several hosts.

1. Confirm with your email.

   On your macOS Mac laptop:

   ## .ssh/config

1. Specify a name for the SSH keypair at each GitHub host location:

   * A personal account uses the default<br />
   id_rsa
   * A corporate account can use the same<br />
   id_rsa
   * A client-facing account uses<br />
   mck-github
   <br /><br />

1. Navigate to your ~/.ssh folder on your <strong>user $HOME folder</strong>
1. Create a <tt>~/.ssh/config</tt> file : 

   <pre>Host githuben.intranet.mckinsey.com-wilson-mar
   HostName githuben.intranet.mckinsey.com
   User git
   IdentityFile ~/.ssh/id_rsa
Host github.com/Mck-Enterprise-Automation
   HostName github.com
   User git
   IdentityFile ~/.ssh/mck-pub
Host github.com/wilsonmar
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa
# Send a null packet every 300 = 5 minutes and 2 retries:
# (See https://patrickmn.com/aside/how-to-keep-alive-ssh-sessions/)
Host *
    ServerAliveInterval 300
    ServerAliveCountMax 2
   </pre>

   The last Host entry performs a "keep alive" to keep VPN lines working rather than timing out.

   ### Generate SSH keypair

1. In a Termial:

   <pre>ssh-keygen</pre>

1. Specify the SSH keypair name (unless you're generating the default name).
1. Press Enter for the other options.

   including the Passphrase

1. Open GitHub to your account.
1. Click the account at the upper-right corner and select "Settings".
1. Select "SSH and GPG" from the left menu.
1. Click "New SSH".
1. Click the form field and press command+V to paste into the field.
1. In the Title field, type the name of the SSH keypair (such as "id_rsa").

   ## Install Git Client

1. Decide among several alternatives:

   https://help.github.com/en/github/getting-started-with-github/set-up-git


   ## GPG install

1. Install GPG utility so you can cryptographically sign commits when needed.


<hr />

Repeat this for each account:

1. Open an internet browser (Google Chrome) to the account.
1. Login using your 
1. Save the URL for frequent access on the browser toolbar.

1. Configure with your picture.
1. Configure 2FA on your iPhone.
1. Save passcodes to a secure place (in case you are locked out).

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


   ## Git Hooks on clients


## Resources



