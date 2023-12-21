---
layout: post
date: "2023-12-18"
file: "aws-server-deploy-options"
title: "AWS server deployment options"
excerpt: "Pick which crew of robots to build your servers"
tags: [AWS, EC2, cloud, automation]
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

This tutorial describes the options AWS provides to automate setup of multi-stage (dev+QA+prod) enterprise environments within EC2.

* <a href="#Amazon">Amazon EC2 Cloud Images</a> of server machines
* <a href="#WorkSpaces">On an internet browser to Amazon WorkSpaces</a> (virtual Desktop machines)
* <a href="#Docker">Docker Windows instance</a>

{% include whatever.html %}

The options:

   * <a href="#ManualConfig">Manually configure</a> the various components using the
   <a target="_blank" href="http://aws.amazon.com/"> AWS Management Console at
      http://aws.amazon.com/</a> on internet browsers.
    See [my AWS On-boarding](/aws-onboarding/) for a tutorial on the AWS Management Console and Consoles on mobile devices.

   * <a href="#Beanstalk">Elastic Beanstalk</a> for developers to quickly bring up standard server configurations with no SSH capability.

   * <a href="#Opsworks">Opsworks</a> "configuration as code service" which sets up servers by
   running <strong>Chef</strong> recipies obtained from a Chef Cookbook repository.

   * <a href="#CF">CloudFormation</a> for sysadmins to create JSON template files which configure ALL AWS services.

   * <a href="#AnsibleCF">Ansible using CloudFormation</a>.

   * Value-added services outside Amazon, such as <a target="_blank" href="https://www.hashicorp.com/#products">
   Terraform (and licensed Atlas) from HashiCorp</a>.


<hr />

<a name="ManualConfig"></a>

## Manually configure component services #

Each environment within AWS for enterprise use requires several services.
Here is the sequence of dependencies:

   0. VPN
   0. <a href="#VPC">VPC</a>
   0. <a href="#NAT">NAT</a>

   0. <a href="#DNS">DNS</a>
   0. <a href="#ELB">ELB</a>

   0. <a href="#MapRegionAMI">AMI</a> by Region, with Auto-scale

<hr />

<a name="Beanstalk"></a>

## Elastic Beanstalk #

<a target="_blank" title="By Amazon Web Services LLC [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3AAWS_Simple_Icons_Compute_AWSElasticBeanstalk.svg"><img align="right" width="100" height="100" alt="AWS Simple Icons Compute AWSElasticBeanstalk" src="https://upload.wikimedia.org/wikipedia/commons/8/8f/AWS_Simple_Icons_Compute_AWSElasticBeanstalk.svg"/></a>

Before doing this, setup default
VPC, subnets, and Security Groups.

0. <a target="_blank" href="https://us-west-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-west-2#/gettingStarted">
   Services > Compute > Beanstalk</a>

   NOTE: You can't SSH into individual servers.

0. Specify an <strong>Application Name</strong>.

   PROTIP: Define a convention that applies to apps, such as a project, feature, and version number, such as
   PS1-bean2-node-v01.

   PROTIP: Include in the name a code for the platform being used.

0. Select a <strong>Platform</strong>.

   <amp-img width="305" height="227" alt="aws beanstalk platforms 2016-06-04 610x454"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/15802811/6295c404-2a7d-11e6-8a6c-a446a0058732.png"></amp-img>

0. Click <strong>Configure more options</strong>.

   Beanstalk is considered a "Platform-as-a-Service" (PaaS),
   that does the "heavy lifting" to get infrastructure online,
   with load balancing, autoscaling, and health monitoring.

   The Virtual Machine is for the Platform chosen in the previous step.

   The <strong>Low cost</strong> configuration preset is the default.

   In the Scaling section, the Environment type is <strong>single instance</strong>.

0. Click the <strong>Highly available</strong> configuration preset.

   Notice the Environment type changed to "loadbalancing, autoscaling" with
   Scale instance: 1-4.

   Beanstalk is free to use. You only pay for servers deployed by it.

0. Click Modify in the Notifications section and input your email address.

0. Switch temporarily to your email to confirm the subscription.

0. Since this is a tutorial, select the <strong>Low cost single instance</strong>.

0. Scroll down to click <strong>Create app</strong>.

### Beanstalk Settings #

Configuration information stored in the <strong>.ebextensions</strong> folder containing:

* a dynamodb.config

   The file contains functions definitions such as `Fn::GetOptionSetting:` with parameters.

* a options.config files.

* The <strong>.elasticbeanstalk</strong> folder ???



<hr />


<a href="Opsworks"></a>

## Opsworks Chef #

Opsworks is a higher level tool than CloudFormation,
offering more customization than Elastic Beanstalk.

0. <a target="_blank" href="https://console.aws.amazon.com/opsworks/home?region=us-west-2#">
   Services > Management Tools > Opsworks</a>

0. Click Add your first stack.

   NOTE: You cannot mix and match Windows with Linux servers.

Opsworks is called a "configuration as code service"
because it sets up servers by
running <strong>Chef</strong> recipies obtained from a Cookbook repository.

   NOTE: There is no equivalent for Puppet.

Each "layer" is a blueprint and container for instances.
(JSON) defining stacks:

* OpsWorks
* ECS
* RDS

   A different Chef recipie for each event within the lifecycle :

   * Setup
   * Configure
   * Deploy
   * Undeploy
   * Shutdown

<a target="_blank" href="https://github.com/danilop/opsworks-cookbooks/">
Opsworks Cookbooks</a> from @Danilop.

NOTE: Each server has a Chef agent installed.

   The lack of agents is why Ansible is becoming more popular.

<a name="AnsibleCF"></a>

## Ansible using CloudFormation #

[My tutorial on AWS High-Availability using CloudFormation](/aws-ha-ansible-cloudformation/),
which is the current rage (June 2016).

<hr />

## EC2


<hr />

<a name="Amazon"></a>

#### Amazon EC2 Cloud Images

   <a target="_blank" href="http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html">GUIDE</a>

A <a target="_blank" href="https://secureanycloud.com/">hardened</a> Amazon Machine Image (AMI) containing Visual Studio 2017 Community Edition on Windows Server 2016 <a target="_blank" href="https://aws.amazon.com/marketplace/pp/B06XKP1YWV">costs 28 cents per hour on a t2.medium in the US</a>. 20 cents of that goes pays for <a target="_blank" href="mailto:Support@SecureAnyCloud.com">support</a> from <a target="_blank" href="https://secureanycloud.com/">Cognosys</a>, its creator. 888.489-2723

   Cost per hour increases in a straight line (linear) way for number of CPUs:
   ![ec2-cognosys-vcpu-per-dollar-562x217-54344](https://user-images.githubusercontent.com/300046/30037418-d2ddfd46-9177-11e7-93ad-f376ccca8dc1.jpg)
   <br />
   Cost per hour increases in the same way for amount of Memory (RAM):
   ![ec2-cognosys-mem-per-dollar-562x225-62637](https://user-images.githubusercontent.com/300046/30037332-200f3fd6-9177-11e7-98c2-bd1a76592089.jpg)


   <a target="_blank" href="http://www.ec2instances.info/">ec2instances.info</a> provides a spreadsheet.

   WARNING: On AWS EC2, Windows Server 2016 Nano servers do not support RDP, only Windows PowerShell.

   <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/">A t2.medium has 2 cores and 4 GB</a>.

   PROTIP: With Amazon, you pay for hourly increments. With Google, you pay per minute.

<a target="_blank" href="http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html">Connect to an instance in AWS EC2</a>:

1. Create an Amazon EC2 account at http://aws.amazon.com/ec2/.


<a name="WorkSpaces"></a>

### Client WorkSpaces in AWS cloud

This approach works not just a MacOS laptop, 
but for any computer running a modern browser,
such as <a target="_blank" href="http://docs.aws.amazon.com/workspaces/latest/userguide/amazon-workspaces-chromebook-client.html">
on a Chromebook</a>. No files are transferred, just graphic
images of a screen on servers within the AWS cloud.
This makes for more stringent security, but also means significant lag that affect productivity.

   * <a target="_blank" href="https://forums.aws.amazon.com/search.jspa?mbtc=iQylnisvlZwOpRpOlSNPnOsymqDNwqQZ&objID=f164&q=workspaces&x=0&y=0">
   Amazon's Workspaces Forum questions</a>
   <br /><br />

1. Use an appropriate AWS IAM account to login to the <strong>WorkSpaces Console</strong> at

   <a target="_blank" href="https://console.aws.amazon.com/workspaces/home">
   https://console.aws.amazon.com/workspaces/home</a>

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/57975600-4238a600-7989-11e9-8834-12f0d42b6c2b.jpg"><img align="right" alt="windows-on-mac-189x434-6552.jpb" width="189" height="434" src="https://user-images.githubusercontent.com/300046/57975600-4238a600-7989-11e9-8834-12f0d42b6c2b.jpg"></a>

1. Select the region.
1. Click "Directories" menu and set up a Directory.
1. Launch. Select the Directory.
1. For the simplest approach, select "Simple AD" Next. Small AWS Managed Microsoft AD".
1. Use a password generator UoyJhssxbcQzrDwT8ciF. Next.
1. Choose VPC and two subnets.
1. Wait for Status to go from "Requested" to "Creating" to "Active".

   ### Launch Workspaces

   An image contains only the OS, software, and settings. A bundle is a combination of both that image and the hardware from which a WorkSpace is launched.

   The Free Tier provides two Standard bundle WorkSpaces for up to 40 hours of combined use per month, for two calendar months, from the time you create your first WorkSpace. Usage time accrues while you’re actively using your WorkSpace as well as the time it takes to stop after a specified period of inactivity, which by default is set to one hour. If you exceed the Free Tier limits, you will be charged the standard Amazon WorkSpaces hourly rate for the additional resources you use. At the end of two calendar months, the WorkSpaces you launched in the Free Tier will automatically be billed at the applicable hourly rate.

   Amazon's regular <a target="_blank" href="https://aws.amazon.com/workspaces/pricing/">
   pricing is $25 to $75 per month per user</a>, which Amazon estimates is 59% less than traditional Virtual Desktop Infrastructures (VDI) from Citrix and VMware.

   Amazon's approach uses newer tech than VDI. 

1. Click "WorkSpaces" in menu.
1. Click blue "Launch WorkSpaces".
1. Select the Directory and Subnets.

   ### Set-up Users

1. Specify for each user his/her Username, First Name, Last Name, and Email for the Bundle selected.

   PROTIP: Use a email as the Username.

1. Click "Create Users".
1. Check the user you want.

   If a new user input was already defined, the form is cleared.

1. Click "Show All Users".
1. Check the user.
1. Click "Next Step".
1. Select Bundle for the OS (with default 80 GB root and 50 GB user volume).
1. Select Running Mode (AlwaysOn or AutoStop hours).
1. Click "Next Step".

1. Click Launch Workspace (for all users). 
1. Wait (about 20 minutes) for the Workspace Console goes from PENDING to AVAILABLE (in green letters). 
1. To refresh the page, type command+R or click the recycle icon.

   ### Amazon WorkSpaces Application Manager (WAM)

1. Switch to return to managed users in the Amazon WorkSpaces Application Manager (WAM) for your current region at:

   <a target="_blank" href="https://us-west-2.console.aws.amazon.com/wam/home">
   https://us-west-2.console.aws.amazon.com/wam/home</a> 

   CAUTION: There is no moving WorkSpaces from one region to another.

   There is a WAM Standard for additional functionality.

   ### Install WorkSpaces client
   
1. In each user's email client, open the welcome email and click the link.
1. Set your WorkSpaces credentials with a password.s
1. Highlight the registration code in the email and copy to your Clipboard.
   
1. Choose the link for your laptop model at <br />
   <a target="_blank" href="http://clients.amazonworkspaces.com/">
   http://clients.amazonworkspaces.com</a> 

1. Click to download the "WorkSpaces.pkg" to your Downloads folder.

   On a MacOS, it's file "WorkSpaces.pkg" (38.2 MB taking 115.3 MB space).

   On a Chromebook, click "ADD TO CHROME" at the upper-right corner.

1. Switch to Finder and click to invoke the installer the Chrome application to enable the proprietary PC over IP (PCoIP) protocol (from Teradici) to compress, encrypt and rapidly transport image pixels between client and server.

1. Double-click on the installer and click Continue and
   finally, Install. Provide your password when requested.

1. Move the installer file (WorkSpaces.pkg) to Trash, to recover disk space.
   
1. Do a Chromebook search to verify that the Amazon WorkSpaces client app icon appears.

1. BLAH: The full graphic streaming virtual desktops tends to eat up much bandwidth. So measure how much you have used before and after sessions.

   Optionally, your company's existing on-premises Active Directory (AD) can be reached by Amazon via an Amazon Virtual Private Cloud (VPC) with a hardware virtual private network (VPN) connection or a dedicated connection with AWS Direct Connect. 

   Once linked up, you use the  AWS Management Console to select the users in your Active Directory who will receive a WorkSpace. 

1. Open the app for the first time.
1. Type your <strong>user name</strong> and password and choose Sign In.
1. Switch to your user's email client and highlight the registration code from the "Your Amazon WorkSpace" email, then paste on the form.
1. Click Register.

   ### Repeat Login

   NOTE: 1Password cannot auto-fill Username and Password on the MacOS WorkSpaces app nor on Chrombook.

1. Login using the Username and password for the WorkSpaces client.

   If your Amazon WorkSpaces administrator has enabled multi-factor authentication for your organization's WorkSpaces, you are prompted for a passcode to complete your login. 

   CAUTION: Only one browser can be used at the same time.
   Amazon logs off a session when another session is started on another computer.

1. If your Amazon WorkSpaces administrator has not disabled the "Remember Me" feature, you are prompted to save your credentials securely so that you can connect to your WorkSpace easily in the future. Your credentials are securely cached while the application is running.

   After the client application connects to your WorkSpace, your WorkSpace desktop is displayed.

1. (Optional) If your WorkSpace uses an AD Connector directory, update the maximum lifetime of the Kerberos ticket by following the steps in Configuring Kerberos Policies in the Microsoft TechNet Library. 

1. If you need to disable the "Remember Me" feature, search for help in the Amazon WorkSpaces forum.

   ### Configure Remote Assistance

1. Open PowerShell window.
1. Install Remote Assistance using this PowerShell command:
  
   <tt><strong>Add-WindowsFeature Remote-Assistance
   <strong></tt>

   Open port 3389 in the firewall and in the Security Group, Remote Desktop should work using the username and password in the traditional way.


   ### Configure Windows 7 Folder Options

0. Click the Windows Start round icon at the bottom left of the screen.
0. Type "folder options" (without the quotes) until the line "Folder Options" appears for you to click at the top of the menu.
0. In the "Folder Options" dialog box, click the "View" tab at the top of the window.
0. Select "Show hidden files, folders, and drives".
0. Click to uncheck the box for "Hide extensions for known file types".
0. Click the "OK" button at the bottom of the dialog box.

   ### Configure Windows 7 Toolbar

0. Click the Windows Start round icon at the bottom left of the screen.
0. Click All Programs, Accessories. All the usual tools are there.
0. Drag Notepad and drop it on the tool bar at the bottom of the screen.

0. Click the Windows PowerShell folder.
0. Drag "Windows PowerShell" and drop it on the tool bar at the bottom of the screen.

0. Open Windows Explorer from the tool bar at the bottom of the screen.
0. Click on "Computer". Notice there is no C: drive and no access to C:\Windows internals.
0. Double-Click on "User Profile D:" drive.

   Notice there are 50 GB for you.

0. Double-Click on D: and navigate into folder Users, your account name.

   PROTIP: Here is the default location when command line windows open by default.
   So place scripts here (among folders).

0. Right-Click Windows PowerShell to select "Run as Administrator".
0. Type:

   <tt><strong>echo $Env:USERPROFILE
   </strong></tt>

   This is your user home folder.

0. Set permissions:

   <tt><strong>set-executionpolicy remotesigned
   </strong></tt>

   <pre>Execution Policy Change
The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
you to the security risks described in the about_Execution_Policies help topic at
http://go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
[Y] Yes  [N] No  [S] Suspend  [?] Help (default is "Y"): Y
   </pre>

0. Type Y to confirm.
   
   See <a target="_blank" href="https://technet.microsoft.com/en-us/library/bb613481.aspx">
   How to write a PowerShell script</a>

0. Within PowerShell you can also go to your home folder by typing a tilde:

   <tt><strong>cd ~
   </strong></tt>

0. Verify whether you can create a PowerShell script file:

   <tt><strong>Add-Content helloworld.ps1 'Write-Host "Hello World"'
   </strong></tt>

   This is the PowerShell equivalent of `echo "Hello World" >helloworld.ps1`.

0. List directory:

   <tt><strong>dir
   </strong></tt>

0. Type the first letter h and press Tab to auto-complete:

   <tt><strong>./helloworld.ps1
   </strong></tt>

   Instead of "Hello World", if you get this, it means executionpolicy was not set correctly:

   <pre>
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
   </pre>


   ### Install posh-git for PowerShell

   TODO:
   file:///C:/Program%20Files%20(x86)/AWS%20Tools/Documentation/AWSToolsForWindows.html 
   AWS Tools for Windows 
   AWS SDK for .NET

0. To exchange files among a group of people, setup:<br />
   <a target="_blank" href="https://amazonworkdocs.com/en/clients">
   https://amazonworkdocs.com/en/clients</a>

   ### Install clients using Chocolatey 

   <a target="_blank" href="https://blogs.technet.microsoft.com/heyscriptingguy/2014/08/23/weekend-scripter-powershell-and-chocolatey/">
   [Find-Package from OneGet included in Windows Management Framework 5.0 Preview gets packages from the Chocolatey installer repository]</a>

0. Right-click on cmd and select "Run as Administrator".
0. Copy <a target="_blank" href="https://chocolatey.org/install#install-with-cmdexe">
   this</a> and right-click in the command window:

   <pre><strong>
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
   </strong></pre>

0. Install <a target="_blank" href="https://chocolatey.org/packages/jdk8">
   Java Development Kit for version 8 using Chocolatey</a>:

   <tt><strong>choco install jdk8 -y
   </strong></tt>

0. Install <a target="_blank" href="https://chocolatey.org/packages?q=chrome">
   Chrome browser</a>:

   <tt><strong>choco install googlechrome -y
   </strong></tt>

0. Install <a target="_blank" href="https://chocolatey.org/packages?q=git">
   Git for Windows</a> client:

   <tt><strong>choco install git -y
   </strong></tt>

   Alternately, to add a Git client manually, open Firefox, search for "Git for Windows". Click Download.
   Click Save file. Click the down arrow for a list of downloads.
   Click to Open File. Run. Yes to UAC. Next all, but Git LFS. then Finish.
   Close Firefox.
   Click Windows icon. All Programs. Click Git, Git Bash.

0. Install <a target="_blank" href="https://chocolatey.org/packages/poshgit">
   Posh Git for PowerShell</a>:

   <tt><strong>choco install poshgit -y
   </strong></tt>

   * Launch each and configure the window properties to enable Quick Edit and set 
   Layout Height (scroll buffer) to 9999 lines.

   https://www.develves.net/blogs/asd/articles/using-git-with-powershell-on-windows-10/#fn:start

   ### Clone Samples 

   Download Git repository containing bootstrap script:

0. Open a Git Bash window.
0. cd to where you add Git repositories:

   <tt><strong>cd gits;<br />
   git clone https://github.com/wilsonmar/loadrunner.git \-\-depth=1<br />
   git clone https://github.com/wilsonmar/git-utilities.git \-\-depth=1
   </strong></tt>


   ### Shut-down and Resume

   BLAH: It takes many minutes to stop and resume.


   ### Custom WorkSpaces

0. As an administrator, in the Console, select the WorkSpace and select "Create Image" to create an image with your applications and settings. 

   NOTE: Custom images created from Amazon WorkSpaces Graphics bundles can only be used with Graphics bundles, and custom images created from Value, Standard, Performance, or Power bundles can only be used with those bundles. Most Amazon WorkSpace images are available within 45 minutes.

   See http://docs.aws.amazon.com/console/workspaces/images


<a name="Docker"></a>

## Docker #

Docker is now a favored approach because it runs the same (unaltered)
[(Dockerized apps)](/dockerize/) on Windows, Mac, and Linux platforms.

Docker provides a transparent interface to operating systems.

* [Docker setup](/docker-setup/)
* [Docker build](/docker-build/)




## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}



## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
