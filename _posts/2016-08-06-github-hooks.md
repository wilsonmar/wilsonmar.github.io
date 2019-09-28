---
layout: post
title: "GitHub Hooks"
excerpt: "Let's all hold hands and sing songs"
tags: [GitHub, Jenkins, setup]
date: "2016-08-06"
file: "github-hooks"
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

This article shows you how to install and configure 
GitHub hooks into Jenkins version 2 for Continuous Delivery (CD) as well as Continuouse Integration (CI).

{% include _intro.html %}

## What Hooks can do #

GitHub's Repository WebHooks API is described at<br />
<a target="_blank" href="https://developer.github.com/v3/repos/hooks/">
https://developer.github.com/v3/repos/hooks</a>

GitHub has an email hook that sends out an email for each change committed.

<a target="_blank" href="https://github.com/mavam/gitdub">
This repo</a> provides code to email detailed diffs of each commit.
It addresses security configurations.

I would like to see each commit appear on my Gmail calendar
to help me see commits in context of my other appointments.

   * https://gist.github.com/ngs/3550670
   * https://zapier.com/zapbook/github/google-calendar/
   * https://zapier.com/zapbook/cronofy-calendar-api/github/


PythonAnywhere.com

0. The documentation is at https://developer.github.com/webhooks/



## Service hooks #

Services hooks are pre-built within GitHub to take action when events occur on GitHub. 

0. On the GitHub project sending the hook.
0. Click Settings on the top bar.
0. Click <strong>Webhooks &amp; Services</strong> (previously "Service Hooks").

0. Click <strong>Browse the directory</strong>.
0. Search for emails.



### Git Notifier

http://www.icir.org/robin/git-notifier/

Alternately:

0. <a target="_blank" href="https://www.git-notifier.com/">
https://www.git-notifier.com</a>

0. Activate via the Google account.
0. Specify the Account/Repo and the email to be notified.

   Emails are sent free. 
   But phone message cost one Euro each.



## Receivers first #

We would like Jenkins to attempt a new build when a change is committed in GitHub.com 
or pushed to it from Git.

   The alternative to this is polling on a scheduled interval,
   which can be a little bit inefficient if nothing was changed.
   However, a regular schedule is useful when people work strict hours.

### Begin from Jenkins #

0. In Manage Jenkins | Manage Plugins, Available tab, find "GitHub plugin" at<br />
   <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Github+Plugin/">
   https://wiki.jenkins-ci.org/display/JENKINS/Github+Plugin</a>
0. Return to the Jenkins Dashboard.
0. Create a new item or click an existing build job.
0. Select Configure from the menu.
0. In v2, under Build Triggers, Check "GitHub project".
   
   In v1, scroll to "Source Code Management". Check "Git".

0. Specify the Project URL.
0. Check "Build when a change is pushed to GitHub".


   ## Set up CRSF on Jenkins #

   Cross Site Request Forgery (CRSF) exploits
   <a target="_blank" href="https://www.wikiwand.com/en/Cross-origin_resource_sharing">
   Cross-origin_resource_sharing</a>, so all PUTs are excluded, except when
   <a target="_blank" href="https://github.com/jenkinsci/github-plugin/commit/5c2a041">
   an exception is added in Jenkins</a>.
  
0. Type in the Filter field <strong>CORS support for Jenkins</strong> until the plugin appears
   on the Manage Jenkins, Plugin Manager, Available page.

0. If it appears, check the box under "Installed" .

   If it doesn't appear, click on the Installed tab to see if it's there already.

0. If you click on the link, the name is "Cors Filter Plugin" on<br />
   <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/CSRF+Protection">
   https://wiki.jenkins-ci.org/display/JENKINS/CSRF+Protection</a>

0. "Prevent Cross Site Request Forgery exploits"
   needs to be unchecked 
   <a target="_blank" href="https://issues.jenkins-ci.org/browse/JENKINS-20140/">
   disabled</a>
   in order for webhooks to work.

0. In the authentication section, near the bottom,<br />
   check the box "Prevent Cross Site Request Forgery exploits".
   
0. Click "Install without restart" of the Jenkins server.

   The response is temporarily until "Success" appears.

   <pre>
Checking internet connectivity
Checking update center connectivity
Success
   </pre>

0. Click "Restart Jenkins when no jobs are running".



## Get GitHub secret #

The below describes how Jenkins ensures security by
making use of a "deploy key" where a public-private SSH key pair is generated for each 
GitHub SCM repository. Each key pair is attached to a repository instead of to a personal user account.
The public key is stored on the Jenkins server.
The correpsonding public key is stored in the repository along with the code.
Jenkins matches the public and public keys before granting access to each single GitHub repository.

<a target="_blank" href="https://developer.github.com/guides/managing-deploy-keys/">
https://developer.github.com/guides/managing-deploy-keys</a><br />
discusses the advantage of "Deploy keys" versus other approaches for authentication and authorization.

0. SSH into a command-line in your <strong>Jenkins server</a>, 
   generate a keypair:

   <tt><strong>
   ssh-keygen -C "jenkins123@xyz.com"
   </strong></tt>

   The default is RSA.

   PROTIP: Some enterprises have a central list of servers with unique "service account" names
   associated with a server (hardware)
   instead of email addresses for individual people.

   NOTE: Organizations that don't believe in SSH have an
   alternative to Jenkins provide a UI to generate keys.

   The response:

   <pre>
   Generating public/private rsa key pair.
   Enter file in which to save the key (/root/.ssh/id_rsa): 
   </pre>

   "id_rsa" is the default name of the private key file.

   "id_rsa.pub" contains the public key.

0. Press Enter to accept the default prefix.

   The response:

   <pre>
   Enter passphrase (empty for no passphrase): 
   </pre>

0. Press Enter twice to not specify a passphrase.

   <pre>
   Enter same passphrase again: 
   </pre>

0. Bring the public key to GitHub:

   <pre>
   cd ~/.ssh
   cat id_rsa.pub
   </pre>

   You should see a file beginning with 

   <pre>
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDOgkh/0a1it6moT/ueEN3c/5CsX6x619icK9wMRpIWNMyZQGaSnU8a1xl6ZWuwIRM1LzjcS/7JeI1sYiW4K0MhYXYtR7b693L8jLppSKL8/+zWQ+kiPDpGLV7hOU1wINrVDsjWvRSIi+ihb7wy6atQRTtAq/0mStc6sBLNYJoVMzaOw+a6cob+IJQ0VNH4wVdImnCQU8T13afFLNwEvXMHdjXYHnmt/V+nQV7omb6oCX/xnqdDiI0LEQLZu+EI5j2ELdeBF9p9Nk4ko0JJknDrR0OCOAoZJVebQDG+ZsHwha9Xw1dDTVJJkmNGvp3pi0BegSPk4sAbZg2zIVHUpqtJ jenkins123@xyz.com
   </pre>

0. Highlight the private key file and press Command/Control+C to 
   copy the contents to your laptop's Clipboard.

   <hr />

0. Switch to GitHub.com.

0. In the top right corner of any GitHub page, click your profile photo.

0. On your profile page, click the Repositories tab.

0. Click the name of your repository.

0. Click Settings in your repository's right sidebar.

0. Click Deploy Keys In the sidebar.

0. Click Add deploy key. 

0. Paste your public key in and click Submit. ???


0. Files in the .ssh folder should be 600: 

   <pre>
   chmod 600 ~/.ssh
   </pre>

0. Enable verbose logging (-vT) to see what permissions it complains about:

   <tt><strong>
   ssh -vT git@github.com 
   </strong></tt>

   The response can be:

   <pre>
   Permission denied (publickey).
   </pre>

   The desired response is:

   <pre>
   </pre>

0. Append the public key to the bottom of the <strong>authorized_keys</strong> file:

   <tt><strong>
   cat id_rsa.pub >> ~/.ssh/authorized_keys
   </strong></tt>

   NOTE: On some systems it's <strong>authorized_keys2</strong>.

   PROTIP: Use the verbose option on the ssh command to say which key files it's actually trying.


## Set up webhook on GitHub #

0. Sign into the repository. You won't see the "Settings" tab unless you have permissions.
0. Click on the <strong>Settings</strong> tab.
0. Click on "Webhooks & services" from the left menu.
0. Click on "Add webhook" on the upper right.

   Webhooks allow external services to be notified when certain events happen within your repository. When the specified events happen, we’ll send a POST request to each of the URLs you provide. 

   <a target="_blank" href="https://developer.github.com/webhooks/creating/">
   https://developer.github.com/webhooks/creating</a><br />
   explains each field:

0. In Payload URL goes a URL such as "http://localhost:4567/payload" or

   <tt><strong>
   http://138.68.1.138:8080/github-webhook/
   </strong></tt>

   CAUTION: Use http://

0. For Content type, "application/json" sends a HTTP POST. 
   Older form data is sent with "application/x-www-form-urlencoded".

0. For secret, leave blank ???

0. Select "Just the push event" for "Which events would you like to trigger this webhook?"
   or too much will be sent.

   The technical name of all events are described at<br />
   https://developer.github.com/webhooks/#events

0. Click Add Webhook.

   GitHub sends a Ping<br />
   https://developer.github.com/webhooks/#ping-event.



   ### Test if it works #

   There are several ways to check: 

   * changes on GitHub.com by those with permissions
   * changes pushed to GitHub from a Git client
   * changes in a Pull Request accepted.

   Do each of the above when the Jenkins server is down,
   then start it up again to see if queuing worked.

   ### Pull Request #

0. On GitHub, at your repo, fork the repo to your account.

0. On your local machine, create a folder and clone from your account's copy of the repo.

0. Checkout the current commit to a new branch.

0. Make a change in the README.md file.

0. Git add and commit.

0. Git Push it back to GitHub.

0. Accept the PR. Note the time, and if the Jenkins server is on another time zone (UTC),
   translate the time on the Jenkins server.

0. On the Jenkins jobs Dashboard, select the project you updated to see a new job invoked.

0. See the new job from "anonymous user"?


## SSH Agent Forwarding #

For those who don't want to have a private key file, even in encrypted form, 
stored anywhere away from a trusted machine, there is 
the <strong>"same agent" protocol</strong>.
An "ssh-agent" program runs in the background and keeps private key loaded into memory.
Servers call the ssh-agent as if they were already running on the server. 
This is like asking a friend to enter their password so that you can use their computer.

The passphrase need to be entered only once, when the ssh-agent is invoked.

SSH agent forwarding can be used to make deploying to a server simple. 
It allows you to use your local SSH keys instead of leaving keys (without passphrases!) sitting on your server.

If you've already set up an SSH key to interact with GitHub, you're probably familiar with ssh-agent. It's a program that 

At the risk of However, there is different vulnerability: agent hijacking
over the wire.

In short, this allows a chain of ssh connections to forward key challenges back to the original agent, obviating the need for passwords or private keys on any intermediate machines. 

   http://www.unixwiz.net/techtips/ssh-agent-forwarding.html#fwd
   by Steve Friedl

   https://developer.github.com/guides/using-ssh-agent-forwarding/



## References #

   * https://help.github.com/articles/about-webhooks/

   * http://lxanders.github.io/posts/jenkins-with-github-integration/#prepare-github
   * https://thepracticalsysadmin.com/setting-up-a-github-webhook-in-jenkins/
   * http://fourkitchens.com/blog/article/trigger-jenkins-builds-pushing-github

   * http://blog.shippable.com/configure-web-hooks-to-trigger-continuous-integration

TODO: Quote URL which says "Payload sizes need to be monitored because GitHub caps them at 5 MB each."


The objective of Jenkins2 is to install with a 
<a href="#RecommendedPlugins">recommended set of plugins</a>
(a more "curated" experience than v1)
that cover 80% of use cases out of the box.


## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
