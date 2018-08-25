---
layout: post
title: "Git Configuration"
excerpt: "Create and use certificates to push to GitHub"
tags: [UI, MacOS, setup, Foundation]
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This is a hands-on step-by-step tutorial on the quickest way for "newbies" to generate a public certificate for GitHub to reference to accept changes pushed up from git clients.


## Get Yourself on GitHub

   The following steps require switching between GitHub and Terminal (by pressing command+Tab on Mac and Alt+Tab on Windows) until the icon for the app you want is highlighted.

   The following instructions assumes this is the first time you're running this.

0. On an internet browser on <a target="_blank" href="https://www.github.com/">GitHub.com</a>, create an account if you don't already have one. 

   Throughout this tutorial, you will be replacing your own account name with the stand-in example of:

   <pre><strong>hotwilson</strong></pre>


   ### SSH Key into GitHub

0. Switch to a Terminal to create a public and private key. To use default parameters:

   <tt><strong>ssh-keygen
   </strong></tt>

   The response:

   <pre>
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/hotwilson/.ssh/id_rsa): 
   </pre>

0. Press Enter repeatedly to accept defaults until you see:

   <pre>
Your public key has been saved in /Users/hotwilson/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:lsjVHl3cuL/xRvbFzyWtSaFxVI59oDNyAuxicJeWqOs hotwilson@Wilsons-MacBook-Pro.local
The key's randomart image is:
+---[RSA 2048]----+
|       o.o   .o+.|
|    . o *o . o+=.|
|     + +. = *...+|
|    ..oo.o =.o+ .|
|     oo.S .  + = |
|    .  .    . o.O|
|   .         . BO|
|    E         o.*|
|               . |
+----[SHA256]-----+
   </pre>   

   PROTIP: The account name shown above would be substituted with your own account name. But it doesn't matter because it's the certificates generated that are used for authentication.

0. Get the public key in the .ssh folder into your Mac's clipboard:

   <tt><strong>cat ~/.ssh/id_rsa.pub | pbcopy
   </strong></tt>

0. Press command+Tab to switch back to the internet browser showing GitHub.
0. Click the icon for your account at the upper-right of the screen to select <strong>Settings</strong>.
0. Click on <strong>SSH and GPG keys</strong>.
0. Click on <strong>New SSH key</strong> green button.
0. Click inside the field labeled <strong>Key</strong> so its border turns blue.

   PROTIP: You can leave the Label field blank. Others put a date there.

   PROTIP: Enterprise versions of GitHub use single-sign-on capabilities that leverage corporate authentication mechanisms where you don't have to do this.

0. Click on <strong>Add SSH key</strong> green button.

   You can now upload from your laptop to any repo for your GitHub account.


   ### Create container path

0. In a Terminal window:
0. Create a folder to house your development projects:

   <tt><strong>mkdir ~/gits && cd gits
   </strong></tt>

   PROTIP: Instead of `gits`, some use `dev` or `Sites` or `Projects` to house related software development work, separate from other folders such as "Desktop" and "Document" under your MacOS user account folder.

0. Create a folder representing your GitHub account to house new websites to be created (substituting "hotwilson" with your GitHub user name):

   <tt><strong>mkdir hotwilson
   </strong></tt>

0. Set permissions for your MacOS user to write to the new folder (subsituting your own user instead of "wilsonmar" and GitHub account name instead of "hotwilson"):

   <tt><strong>
   sudo chown -R wilsonmar hotwilson<br />
   sudo chmod -R +rwx hotwilson
   </strong></tt>

0. Type in your password when prompted.

0. Navigate into the containing folder where a new directory is automatically built:

   <tt><strong>cd ~/gits/hotwilson
   </strong></tt>



   ### Get batch utility from GitHub

0. Get the Bash script that automates the instructions described below:

   <tt><strong>
   wget https://github.com/wilsonmar/git-utilities/blob/master/foundation-website-init.sh
   </strong></tt>

   The response ends with a line like this:

   <pre>
   2017-09-28 03:26:42 (441 KB/s) - ‘foundation-website-init.sh’ saved [46178]
   </pre>

   Alternately, download the whole repo:
   
   <tt><strong>
   git clone https://github.com/wilsonmar/git-utilities \-\-depth=1
   && git checkout HEAD foundation-website-init.sh
   </strong></tt>

0. Open for edit the file using the nano text editing program that comes with MacOS:

   <tt><strong>
   nano foundation-website-init.sh
   </strong></tt>

   Alternately, you can use subl, atom, vscode, or IDE already installed.

0. Edit the file to specify your account and website name:

   <pre>
  GITHUB_USER="hotwilson"
  REPONAME='website1'
   </pre>

0. Save the changes.

0. Run the script that performs what is described below:

   <tt><strong>
   ./foundation-website-init.sh
   </strong></tt>




## Processing

The following steps are performed either manually or by the Bash script downloaded above.

0. Navigate into the containing folder for Foundation to build a new directory, such as:

   <tt><strong>cd ~/gits/hotwilson
   </strong></tt>

   ### Starting over?
   
   If you already created a folder using the script or manually...

0. If you have a Terminal window running the localhost website, click on that Terminal screen and press <strong>control+C</strong>.

0. Remove (delete) the generated folder (replacing "website1" with your site's name):

   <tt><strong>rm -rf website1
   </strong></tt>

   By deleting the whole folder, makes the automation script "idempotent". In other words, running it would end up the same.


   ### Get website local

0. <strong>Create a folder</strong> containing your repo in GitHub (subsituting "hotwilson/website1" with your own account and repo name):

   <tt><strong>
   git clone https://github.com/hotwilson/website1
   </strong></tt>

   The response for just .git folder and README.md in the repo:

   <pre>
Cloning into 'website1'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
   </pre>

   ### gitignore website folder

   Make sure that folders are not uploaded

0. Create or open for edit the .gitignore file using the nano text editing program that comes with MacOS:

   <tt><strong>
   nano .gitignore
   </strong></tt>

   Alternately, you can use subl, atom, vscode, or IDE already installed.

0. Edit the file to specify your account and website name:

   <pre>
   website1
   </pre>

0. Save the changes.


## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
