---
layout: post
title: "AWS Lightsail"
excerpt: "Create and use EC2 instances at fixed prices per month"
tags: [AWS, EC2, cloud, automation]
image:
# feature: pic data center slice 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622043/8b1f9cce-0584-11e6-8b9f-4b6db5bb6e37.jpg
  credit:
  creditlink:
comments: true
---

<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<a href="https://wilsonmar.github.io/lightsail/">This tutorial</a> is about Amazon Lightsail, which charges a <strong>fixed monthly price</strong> for several specific mixes of compute, memory, disk, and data transfer capacities (2, 4, 8 GB). 

Amazon Lightsail was announced in 2018.
The service competes with offerings by several traditional hosting services for WordPress, such as ???

Lightsail's competitive difference is <strong>solid-State</strong> storage which are fast and reliable.

## Get on AWS

1. Get a email from Gmail.com if you don't already have one.
1. Sign up for an Amazon account if you don't already have one. New accounts get one year of free tier access.

1. <a target="_blank" href="https://aws.amazon.com/lightsail/pricing/">https://aws.amazon.com/lightsail/pricing/</a>

   WARNING: Windows instances are more expensive than Linux instances.

1. Scroll down to select "Get started with Lightsail" for the AWS Management Console:

   <a target="_blank" href="https://us-west-2.console.aws.amazon.com/console/home">https://us-west-2.console.aws.amazon.com/console/home</a>

1. In the "Find services" field, type "Lightsail" enough to click on the selection that appears.

   Lightsail provides VPS (Virtual Private Servers) suitable for a wide range of skill levels from beginners without any AWS experience to power users and developers who need to implement things in a fast and efficient way.

1. Click "Save" for your language (default English).
1. Click "later" for the Lightsail console:

   <a target="_blank" href="https://lightsail.aws.amazon.com/ls/webapp/home/instances">https://lightsail.aws.amazon.com/ls/webapp/home/instances</a>

1. Bookmark the above to get back to it quickly.

   ### Create new instance

1. Click the orange "Create instance".
1. Select an Instance region near you.
1. Select "Lunix/Unix" under "Select a platform".
1. Click "OS only" under "Select a blueprint".

   There are more <strong>blueprints</strong> defining well-known apps running on Linux than Windows.

1. Click "Ubuntu 18.04 LTS".

1. Click "Add launch script".
   
   TODO: Copy the script from our GitHub repo and paste it in the form. ???

   But for now, alternately:

   <pre><strong>echo $pwd</strong></pre>
   
   ### Save key pair for SSH

1. MEH: <a href="#WebSSH">Lightsail's online SSH doesn't work</a>, so click "Create New" under "SSH key pair manager".
1. Type the key pair name such as <tt><strong>ywam-1-Ubuntu18-512MB-Virginia-1</strong></tt>, and click "Generate".
1. Click "Download key", then Save File "*.pem" into your default Downloads folder.

   This will be used to SSH into the Linux instance.

   ### Select plan

1. For instance plan, select Linux, select the $3.50 a month for 512 MB RAM. Later we can upgrade if needed for more memory and data transfer.

1. Under "Identify your instance", change the name to "ywam-1-Ubuntu18-512MB-Virginia-1" or one you prefer.
1. Click the orange "Create instance".
1. The Lightsail console displays your instances under a menu:

   <tt>Instances - Databases - Networking - Storage - Snapshots</tt>

   For YWAM, we don't use an Amazon database, but one we include within the instance.
   
   We don't allocate a static IP because idle ones are charged $1 per day.

   We don't need a load balancer since we're only creating a single instance.

   We don't need the load balancer and its firewall to filter traffic.

   We will grow by snapshoting (transfer to another region) and create and attach a disk with
   EC2 migrate for more capacity and features.

1. Click on your instance name ("ywam-1-Ubuntu18-512MB-Virginia-1").

   https://lightsail.aws.amazon.com/ls/webapp/us-east-1/instances/ywam-1-Ubuntu18-512MB-Virginia-1/connect


   <a name="WebSSH"></a>

   ### SSH into instance

   MEH: Lightsail's online SSH doesn't work, so:

1. On your Mac, open a Terminal session by cursor to the top menu and click the search icon, then type "Terminal.app" until it shows up for you to click.
1. Cursor up to the top and select "Shell", "Window", and select one of the options for different background colors.
1. Login by providing your laptop's password.

1. Press command+Tab to switch to the Finder and navigate to the Download folder.
1. Right-click on the pem file downloaded, such as <tt><strong>ywam-1-Ubuntu18-512MB-Virginia-1.pem</strong></tt>, 
and press command+C to copy the text to your invisible Clipboard.

1. Press command+Tab to switch to the Terminal.
1. On the Terminal prompt, create an Environment Variable by a command such as:

   <tt><strong>export SSHKEY=~/Downloads/ywam-1-Ubuntu18-512MB-Virginia-1.pem</strong></tt>

1. Verify by typeing on the Terminal prompt, type <tt>echo $SSHKEY</tt>
1. Use the variable on the Terminal prompt, type <tt>chmod 400 "$SSHKEY"</tt>

   <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html">*</a>

1. Press command+Tab to switch to the Lightsail console.
1. Highlight on the Lightsail console the Public IP such as <strong>3.94.159.30</strong>.
1. Press commnand+C to copy into your invisible Clipboard.

1. Press command+Tab to switch to the Finder and navigate to the Download folder.
1. On the Terminal prompt, type 

   <tt><strong>ssh -i "$SSHKEY" ec2-user@</strong></tt> 
   
   then press command+V to pase the IP address from your Clipboard, such as "3.94.159.30".

   You should see:
   NOTE: There is 1 default SSH per region.

   <pre>
Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-1021-aws x86_64)
&nbsp;
 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage
&nbsp;
  System information as of Sun Mar  3 13:34:38 UTC 2019
&nbsp;
  System load:  0.08              Processes:           83
  Usage of /:   5.3% of 19.32GB   Users logged in:     0
  Memory usage: 28%               IP address for eth0: 172.26.12.75
  Swap usage:   0%
&nbsp;
  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud
&nbsp;
0 packages can be updated.
0 updates are security updates.
&nbsp;
The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.
&nbsp;
Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.
&nbsp;
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.
   </pre>

   ### Lightsail's online SSH doesn't work

1. Click the orange "Connect using SSH" for a new browser window to open up.

   PROTIP: On a Mac, rotate among browser windows by holding down keyboard command then  pressing the "back-tick" key at the upper-right corner of the keyboard.

   QUESTION TO AMAZON: How to copy text from the SSH window?

   QUESTION TO AMAZON: How to copy text into the session?

   QUESTION TO AMAZON: How to get around the auto-repeat of a character pressed on the screen?

1. Click the red dot at the upper-left corner of the browser window to exit.

1. Click "Connect using SSH" again.

1. Copy and paste

   <pre><strong>echo $pwd</strong></pre>

1. On a Mac, hold down control and press C to escape any running command.


## Resources

<a target="_blank" href="https://interactive.linuxacademy.com/diagrams/LightSailContinuum.html">"Lightsail Deep Dive" 10 hour video course from LinuxAcademy.com</a>
by Adrian Cantrill 

* https://interactive.linuxacademy.com/diagrams/LightSailContinuum.html

* <a target="_blank" href="https://github.com/linuxacademy/aws-lightsail-deep-dive">
https://github.com/linuxacademy/aws-lightsail-deep-dive</a>
* <a target="_blank" href="https://github.com/linuxacademy/aws-lightsail-deep-dive/tree/master/Scenario1/InstallingWordpress">Scenario1 images for Wordpress</a>
* <a target="_blank" href="https://github.com/linuxacademy/aws-lightsail-deep-dive/tree/master/Scenario2">Scenario2 shell scripts</a>
* <a target="_blank" href="https://github.com/linuxacademy/aws-lightsail-deep-dive/tree/master/Scenario3">Scenario3 peering</a>
* https://github.com/linuxacademy/aws-lightsail-deep-dive/tree/master/AdvancedLightsail/learning_activity_1


## Docker

This Docker shell script "discourselaunch.sh"

<pre>
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
apt-get -y update
apt-get install -y docker-ce
sudo usermod -aG docker ubuntu
mkdir /var/discourse
git clone https://github.com/discourse/discourse_docker.git /var/discourse
</pre>

mongodbsetup.sh

<pre>
# Connect to MongoDB
mongo admin --username root -p $(cat ./bitnami_application_password)
# Create a 'tasks' database
use tasks
# Create a Database user called tasks, with a password taskstasks and give it dbOwner rights
db.createUser(
    {
        user: "tasks",
        pwd: "tasks",
        roles: [ "dbOwner" ]
    }
)
</pre>

CLI/lightsailpolicy.json

<pre>
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1482790463251",
      "Action": "lightsail:*",
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}</pre>	

## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}

