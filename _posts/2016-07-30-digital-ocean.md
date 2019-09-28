---
layout: post
title: "Digital Ocean Cloud Ops"
excerpt: "Platform as a Service (PaaS)"
tags: [cloud, regions]
date: "2016-07-30"
file: "digital-ocean"
image:
# pic-black-bkg-white-cloud_1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a href="https://wilsonmar.github.io/digital-ocean/">
This article</a> describes how to bring up 
servers within Digital Ocean a
cloud-based virtual private server (VPS) to host a server (Jenkins).

{% include _intro.html %}


<a name="DefineDO"></a>

## Account Sign-up #

0. Sign up for an account at <br />
   <a target="_blank" href="https://www.digitalocean.com/">
   DigitalOcean.com</a>

0. Provide a credit card or Paypal account enough for a $5 droplet.


   ## Define SSH Keys #

0. Open a Terminal shell window to a folder where you generate SSH key pair:

   <tt><strong>
   cd ~/.ssh
   </strong></tt>

   See https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-digitalocean-droplets

   <tt><strong>
   ssh-keygen -t rsa
   </strong></tt>

0. Save the file as "do_s" or another file of your choosing.
   Unlike other programs, we won't be using the default file names on your machine.

0. Copy the public key file into your clipboard:

   <tt><strong>
   pbcopy < ~/.ssh/do_s.pub
   </strong></tt>

   Alternately, use a text editor to open the file to copy, such as:

   <tt><strong>
   atom ~/.ssh/id_rsa.pub
   </strong></tt>

0. Switch back to the Create Droplet webpage to click "New SSH Key".

0. Click in the box and press command+V to paste.

   ### Server #

0. Specify a server name.

   PROTIP: Define (in writing) a <strong>server naming convention</strong> for use by your team.
   Use of sequential numbers would require a tracking system.

0. Select the location, etc.

0. Select Droplet image.

   QUESTION: Select my own.

0. Copy the hostname to your clipboard and paste to your notes.

   ubuntu-512mb-nyc1-01

0. Click the green Create button.

0. Copy the IP Address to your clipboard and paste to your notes.
   For example:

   192.241.155.147

0. Click More to Access Console.

   NOTE: Each Droplet spun up is a new VPS for your personal use.

   Alternately,

   <tt><strong>
   ssh root@192.241.155.147
   </strong></tt>

   The first time you connect, you'll see a message such as:

   <pre>
The authenticity of host '192.241.155.147 (192.241.155.147)' can't be established.
ECDSA key fingerprint is SHA256:sdfsdfsdfu5+Xsaf4COHb0UaRTxeoycUh4tLj1kwNQ.
Are you sure you want to continue connecting (yes/no)?
   </pre>

   Type <strong>yes</strong> because this is expected behavior.

0. Enter your password.

0. Click API at the top menu.

   Register the app.

0. Add image

   See https://cloud.digitalocean.com/images/snapshots

Aditionally:

   * https://www.docker.com/products/docker-toolbox
   * https://www.digitalocean.com/support
   * https://www.digitalocean.com/community


<a name="DeployDO"></a>

## Auto Deploy to Digital Ocean #

- We should then be able to trigger a manual deployment into production by
supplying a valid RC release from the list of RC tagged releases.


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
