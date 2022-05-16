---
layout: post
title: "AWS Lightsail (and other VPS)"
excerpt: "Create and use EC2 instances at fixed prices per month, vs. other Virtual Private Servers"
tags: [AWS, EC2, cloud, automation]
date: "2019-03-01"
file: "lightsail"
image:
# feature: pic data center slice 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622043/8b1f9cce-0584-11e6-8b9f-4b6db5bb6e37.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a href="https://wilsonmar.github.io/lightsail/">This tutorial</a> is about <a target="_blank" href="https://aws.amazon.com/lightsail/">Amazon Lightsail</a>, which charges a <strong>fixed monthly price</strong> for a single VPS (Virtual Private Server) running on a physical machine shared with others.

{% include whatever.html %}

Amazon Lightsail was announced in 2018, to make "server management easier by automatically configuring key resources like networking and security". One signs up for a specific mix of compute, memory, disk, and data transfer capacities. This is like <a target="_blank" href="https://www.awsrails.com/rails-ec2/">selecting EC2</a> instance types, but without specifying VPC, networking, and permissions.

USD per month for single Linux or Microsoft Windows instances:

<table border="1" cellpadding="4" cellspacing="1"><thead><tr valign="bottom" align="right">
<th>Linux</th><th>Windows</th><th>Memory</th><th>CPUs</th><th>SSD</th><th>Transfer</th></tr></thead><tbody>
<tr align="right" valign="top"><td>$3.50</td><td>$8</td><td>0.5 GB</td><td>1</td><td>20 GB</td><td>1 TB</td></tr>
<tr align="right" valign="top"><td>$5</td><td>$12</td><td>1 GB</td><td>1</td><Td>40 GB</td><td>2 TB</td></tr>
<tr align="right" valign="top"><td>$10</TD><TD>$20</td><td>2 GB</td><td>1</td><Td>60 GB</td><td>3 TB</td></tr>
<tr align="right" valign="top"><td>$20</TD><TD>$40</td><td>4 GB</td><td>2</td><Td>80 GB</td><td>4 TB</td></tr>
<tr align="right" valign="top"><td>$40</TD><TD>$70</td><td>8 GB</td><td>2</td><Td>160 GB</td><td>5 TB</td></tr>
<tr align="right" valign="top"><td>$80</TD><TD>$120</td><td>16 GB</td><td>4</td><Td>320 GB</td><td>6 TB</td></tr>
<tr align="right" valign="top"><td>$160</TD><TD>$240</td><td>32 GB</td><td>8</td><Td>640 GB</td><td>7 TB</td></tr>
</tbody></table>

When comparing Lightsail prices vs. offerings by traditional VPS hosting vendors, note what each plan includes. Included in all Lightsail plans:
* Static IP address
* DNS management
* Server monitoring
* SSH terminal access (Linux/Unix)
* Intuitive management console
* RDP access (Windows)
* Secure key management


Among those offering the fastest load times (paid by the year):

* $14/month for 1GB RAM, 30GB SSD, unlimited data transfer at <a target="_blank" href="https://www.dreamhost.com/hosting/vps/">Dreamhost.com</a>
* $20/month for 4GB RAM, 40GB disk, unlimited data transfer, plus 3 dedicated IPs and <strong>SSL free</strong> 1st year at <a target="_blank" href="https://www.godaddy.com/hosting/vps-hosting">GodDaddy.com</a> with a <strong>45-day refund</strong>.
* $19/month for 2GB RAM, 30GB SSD, 1TB data transfer at <a target="_blank" href="https://www.bluehost.com/hosting/vps/">Bluehost.com</a>
* $30/month for 2GB RAM, 120GB disk, 1.5TB data transfer at <a target="_blank" href="https://www.hostgator.com/vps-hosting">hostgator.com</a>
* $80/month for 4GB RAM, 40GB SSD, 5 TB data transfer at <a target="_blank" href="https://www.siteground.com/cloud-hosting.htm">SiteGround.com</a>
* $22/month for 4GB RAM, 7GB SSD, 4 TB data transfer, 3 IP addressses at <a target="_blank" href="https://www.inmotionhosting.com/vps-hosting">inmotionhosting.com</a>
<br /><br />

For the same $20, Lightsail provides twice as much disk space, but puts a cap on the free data Transfer out.
Outbound data transfer in excess of each plan's data "Transfer" allowance is subject to overage charges. Plans in the Mumbai and Sydney Regions are charged at about half the Transfer allowance of  other regions. (0.5 TB instead of 1 TB at $3.50).

Lightsail's competitive difference is not just <strong>Solid-State</strong> (SSD) storage which are fast and reliable,
but that its users can <a target="_blank" href="https://aws.amazon.com/s/lp/lightsail-vs-ec2/">move up to EC2</a> (using a snapshot) when a more complex configuration is needed.

You'll probably also need to host a <strong>database</strong> using standard (single instance) or <strong>high availability</strong> (multiple instances clustered) for redundancy or failover:

<table border="1" cellpadding="4" cellspacing="1"><thead><tr valign="bottom" align="right">
<th>Standard</th><th>HA</th><th>Memory</th><th>CPUs</th><th>SSD</th><th>Transfer</th></tr></thead><tbody>
<tr align="right" valign="top"><td>$15</td><td>$30</td><td>1 GB</td><td>1</td><Td>40 GB</td><td>100 GB</td></tr>
<tr align="right" valign="top"><td>$30</td><td>$60</td><td>2 GB</td><td>1</td><Td>60 GB</td><td>100 GB</td></tr>
<tr align="right" valign="top"><td>$60</TD><TD>$120</td><td>4 GB</td><td>2</td><Td>80 GB</td><td>100 GB</td></tr>
<tr align="right" valign="top"><td>$115</TD><TD>$230</td><td>8 GB</td><td>2</td><Td>160 GB</td><td>200 GB</td></tr>
</tbody></table>

Other competitors to Lightsail are <a target="_blank" href="https://wilsonmar.github.io/serverless">"Severless"</a> functions running in Azure, Google, or AWS Lambda. 
But such are complete rewrites of apps.

## Get on AWS

1. Get a email from Gmail.com if you don't already have one.
1. Use the <strong>Google Chrome browser</strong>. Don't use the Firefox browser because it repeats characters on its own in Lightsail's pop-up terminal.
1. Sign up for an Amazon account if you don't already have one. New accounts get one year of free tier access.

1. <a target="_blank" href="https://aws.amazon.com/lightsail/pricing/">https://aws.amazon.com/lightsail/pricing/</a>

   WARNING: Windows instances are more expensive than Linux instances.

1. Scroll down to select "Get started with Lightsail" for the AWS Management Console, for example:

   <a target="_blank" href="https://us-west-2.console.aws.amazon.com/console/home">https://us-west-2.console.aws.amazon.com/console/home</a>

1. In the black menu at the upper-right, click the region name if you want a different region.
1. In the "Find services" field, type "Lightsail" enough to click on the selection that appears.

   Lightsail provides suitable for a wide range of skill levels from beginners without any AWS experience to power users and developers who need to implement things in a fast and efficient way.

1. Click "Save" for your language (default English).
1. Click "later" for the Lightsail console:

   <a name="LightsailConsole"></a>

   ### Lightsail Console

   <a target="_blank" href="https://lightsail.aws.amazon.com/ls/webapp/home/instances">https://lightsail.aws.amazon.com/ls/webapp/home/instances</a>

1. Bookmark the above to get back to it quickly. You also return to this by clicking "Home" at the top menu.

   ### Create new instance

1. Click the orange "Create instance".
1. Select an Instance region near you (such as Viginia-1 aka "us-east-1a")

   ![lightsaid-blueprints-648x516-24565](https://user-images.githubusercontent.com/300046/53700191-ba95bf00-3dbd-11e9-95bf-fd87f4cb36dc.jpg)

1. Select "Lunix/Unix" under "Select a platform".
1. Click "OS only" under "Select a blueprint".

   There are more <strong>blueprints</strong> defining well-known apps running on Linux than Windows.

1. Click "Ubuntu 18.04 LTS".

1. Click "Add launch script".
1. Highlight and copy the script from our GitHub repo

   <pre><strong>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/Ruby/ywam-setup-all.sh)"</strong></pre>

   PROTIP: Output from launch script do not appear on the terminal.


   
   ### Save key pair for SSH?

   If Lightsail's browser SSH terminal works, then skip the section below and <a name="SelectPlan">click here to go to the Select Plan</a> section.

   NOTE: There is 1 default SSH per region.

1. MEH: <a href="#WebSSH">Lightsail's online SSH doesn't work</a>, so click "Create New" under "SSH key pair manager".
1. Type the key pair name such as <tt><strong>ywam-1-wilsonmar-gmail-Ubuntu18-512MB-us-east-1a</strong></tt>, and click "Generate".
1. Click "Download key", then Save File "*.pem" into your default Downloads folder.

   This will be used to SSH into the Linux instance.

   <a name="SelectPlan"></a>

   ### Select plan

1. For instance plan, select Linux, select the $3.50 a month for 512 MB RAM. Later we can upgrade if needed for more memory and data transfer.

1. Under "Identify your instance", change the name to "ywam-1-wilsonmar-gmail-Ubuntu18-512MB-us-east-1a" or one you prefer.
1. Click the orange "Create instance".
1. The Lightsail console displays your instances under a menu:

   <tt>Instances Databases Networking Storage Snapshots Tags History Delete</tt>

   For YWAM, we don't use an Amazon database, but one we include within the instance.
   
   We don't allocate a static IP because idle ones are charged $1 per day.

   We don't need a load balancer since we're only creating a single instance.

   We don't need the load balancer and its firewall to filter traffic.

   We will grow by snapshoting (transfer to another region) and <a target="_blank" href="https://lightsail.aws.amazon.com/ls/docs/en/articles/create-and-attach-additional-block-storage-disks-linux-unix">create and attach an EBS disk volume</a> with EC2 migrate for more capacity and features.

1. Click on your instance name ("ywam-1-wilsonmar-gmail-Ubuntu18-512MB-us-east-1a").

   https://lightsail.aws.amazon.com/ls/webapp/us-east-1/instances/ywam-1-wilsonmar-gmail-Ubuntu18-512MB-us-east-1a /connect


   <a name="WebSSH"></a>

   ### SSH into instance

   MEH: If Lightsail's online SSH doesn't work:

1. On your Mac, open a Terminal session by cursor to the top menu and click the search icon, then type "Terminal.app" until it shows up for you to click.
1. Cursor up to the top and select "Shell", "Window", and select one of the options for different background colors.
1. Login by providing your laptop's password.

1. Press command+Tab to switch to the Finder and navigate to the Download folder.
1. Right-click on the pem file downloaded, such as <tt><strong>ywam-1-wilsonmar-gmail-Ubuntu18-512MB-us-east-1a</strong></tt>, 
and press command+C to copy the text to your invisible Clipboard.

1. Press command+Tab to switch to the Terminal.
1. On the Terminal prompt, create an Environment Variable by a command such as:

   <tt><strong>export SSHKEY=~/Downloads/ywam-1-wilsonmar-gmail-Ubuntu18-512MB-us-east-1a.pem</strong></tt>

   <tt>~</tt> indicates your user account.

1. Use the variable on the Terminal prompt<a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html">*</a>, type:

   <pre><strong>chmod 400 "$SSHKEY"</strong></pre>

1. Verify by typing on the Terminal prompt: 

   <pre><strong>echo "$SSHKEY"</strong></pre>

   The response should start with:

   <pre>-r--------@ 1 </pre>

1. Press command+Tab to switch to the Lightsail console.
1. Highlight on the Lightsail console the Public IP such as <strong>3.94.159.30</strong>.
1. Press commnand+C to copy into your invisible Clipboard.

1. Press command+Tab to switch to the Finder and navigate to the Download folder.
1. On the Terminal prompt, type 

   <pre><strong>ssh -i "$SSHKEY" ubunto@</strong></pre> 
   
   then press command+V to paste the IP address from your Clipboard, such as "3.94.159.30".


<a name="LighsailTerminal"></a>

### Lightsail's online SSH window

> The "Achilles Heel" of Lightsail is its cumbersome browser CLI console, where one has to copy and paste into an intermediary clipboard. Quite a hassle vs. straight SSH.

1. For a new browser window to open up, on the Home screen click the icon under the instance name or, if you've click the instance name, click the orange "Connect using SSH" 

   PROTIP: On a Mac, rotate among browser windows by holding down keyboard command then  pressing the "back-tick" key at the upper-right corner of the keyboard.

   The messages appearing on initiation are shown in section <a hre="#TerminalStartUp">Terminal Start-Up</a> below.

1. Click the red dot at the upper-left corner of the browser window to exit.

1. <img align="right" width="121" alt="lightsail-console-icon-121x99-1596" src="https://user-images.githubusercontent.com/300046/53700390-c8e4da80-3dbf-11e9-87af-2a4e112a5ca2.jpg">At the Lightsail console, click the orange icon for terminal to the right of the instance you want to work on. 

   According to the blue "Help" tab on the right edge of the Lightsail console:

1. Highlight a portion of the Lightsail terminal window by clicking on the beginning of what you want to copy, then hold down the left-mouse and drag your mouse across to the end of the text to be copied. Press Enter to copy the text into the browser's orange clipboard icon.

1. <img align="right" alt="lightsail-clipboard-22x29-145.png" width="22" src="https://user-images.githubusercontent.com/300046/53700401-f598f200-3dbf-11e9-85f0-f20edade0cc1.png"> Click on the orange clipboard icon at the bottom-right of the pop-up window.
1. Press command+A to highlight all the text, then
1. Press command+C to copy the highlighted text to your machine's invisible Clipboard.

1. Press command+Tab to switch to a program on your laptop.
1. Click on where you want to paste.
1. Press command+V to paste the text.


<a name="TerminalStartUp"></a>

## Terminal start-up

You should see some informative and marketing messages when the terminal appears:

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

Notice the "Memory usage: 28%".



1. Click the orange Clipboard icon.
1. Paste it in the form. Sample responses:

   From the command to list detail about hardware:

   <pre><strong>lshw -short</strong></pre>
   
   <pre>
WARNING: you should run this program as super-user.
H/W path    Device  Class      Description
==========================================
                    system     Computer
/0                  bus        Motherboard
/0/0                memory     479MiB System memory
/0/1                processor  Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz
/0/100              bridge     440FX - 82441FX PMC [Natoma]
/0/100/1            bridge     82371SB PIIX3 ISA [Natoma/Triton II]
/0/100/1.1          storage    82371SB PIIX3 IDE [Natoma/Triton II]
/0/100/1.3          bridge     82371AB/EB/MB PIIX4 ACPI
/0/100/2            display    GD 5446
/0/100/3            generic    Xen Platform Device
/1          eth0    network    Ethernet interface
WARNING: output may be incomplete or inaccurate, you should run this program as super-user
   </pre>

   From the command to get CPU statistics:

   <pre><strong>lscpu</strong></pre>
   
   <pre>
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
CPU(s):              1
On-line CPU(s) list: 0
Thread(s) per core:  1
Core(s) per socket:  1
Socket(s):           1
NUMA node(s):        1
Vendor ID:           GenuineIntel
CPU family:          6
Model:               63
Model name:          Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz
Stepping:            2
CPU MHz:             2400.026
BogoMIPS:            4800.10
Hypervisor vendor:   Xen
Virtualization type: full
L1d cache:           32K
L1i cache:           32K
L2 cache:            256K
L3 cache:            30720K
NUMA node0 CPU(s):   0
Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse
36 clflush mmx fxsr sse sse2 ht syscall nx rdtscp lm constant_tsc rep_good nopl xtopology 
cpuid pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_tim
er aes xsave avx f16c rdrand hypervisor lahf_lm abm cpuid_fault invpcid_single pti fsgsbas
e bmi1 avx2 smep bmi2 erms invpcid xsaveopt
   </pre>

   From the command to get VM statistics:

   <pre><strong>vmstat</strong></pre>

   <pre>
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 0  0      0  67232  30276 293508    0    0   215   438   24   59  1  0 98  0  1
   </pre>

   From the command to list free disk space:

   <pre><strong>free -m</strong></pre>
   
   <pre>
              total        used        free      shared  buff/cache   available
Mem:            479          98          65           0         316         364
Swap:             0           0           0
   </pre>

   From the command to get free RAM usage statistics:

   <pre><strong>grep MemFree /proc/meminfo</strong></pre>

   <pre>
MemFree:           67232 kB
   </pre>


   ### Paste commands

   The following is not clear in the documentation:

1. <img align="right" alt="lightsail-clipboard-22x29-145.png" width="22" src="https://user-images.githubusercontent.com/300046/53700401-f598f200-3dbf-11e9-85f0-f20edade0cc1.png"> Click on the orange clipboard icon at the bottom-right of the pop-up window.
1. Copy a command from below, such as these<a target="_blank" href="https://vitux.com/5-ways-to-check-available-memory-in-ubuntu/">*</a>  to list memory by megabytes across the screen:

   <pre>free -m</pre>

   Alternately, to list details:

   <pre>vmstat -s</pre>

1. Paste the command in the text window that appears.
1. Right-click the Lightsail command window. The command doesn't show up until you press Enter.
1. Cursor up to see the previous command.


<a name="Security"></a>

## Paste commands: Security

1. Highlight and copy (with command+C) a command you want to issue in the Lightsail terminal.

1. At the prompt, right-click to 

1. On a Mac, hold down control and press C to escape any running command.

   To get the AWS RSA fingerprint, aka the instance ID, install the AWS CLI then the command:

   <pre>sudo apt install awscli 
   aws ec2 get-console-output --instance-id instance_id</pre>

   Alternately, to get the password (which is not needed if you're using the pem file to login):

   <pre>cat bitnami_application_password</pre>



## Monitor the instance

1. See <a target="_blank" href="https://lightsail.aws.amazon.com/ls/docs/en/articles/managing-your-instance-using-lightsail">Managing your Amazon Lightsail instance</a>.

   https://www.binarytides.com/linux-commands-monitor-network/

   ### Delete the instance

1. Press command+Tab to switch to the Lightsail console.
1. <img align="right" alt="lightsail-3dot-menu-138x191-2901.jpg" width="138" src="https://user-images.githubusercontent.com/300046/53700433-4e688a80-3dc0-11e9-9752-5e22a1c8893c.jpg">Click the icon with the 3 veritical dots next to your instance, then select "Delete".

## Setup IP address

When using hard-coded scripts to verify the instance from the public internet, it's easier to use a host name.

1. Press command+Tab to switch to the <a href="#LightsailConsole">Lightsail Console</a>.
1. Press the "Networking" tab.
1. TODO: Associate a host name you bought on Amazon Route 53 or set the A record for a free domain created on ???

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

