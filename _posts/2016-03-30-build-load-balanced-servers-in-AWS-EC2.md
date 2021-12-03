---
layout: post
title: "Build load-balanced servers in AWS EC2 using CloudFormation"
excerpt: "Automate High Availability in the cloud"
tags: [AWS, EC2, cloud]
date: "2021-03-30"
file: "build-load-balanced-servers-in-AWS-EC2"
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

<a href="https://wilsonmar.github.io/build-load-balanced-servers-in-AWS-EC2/">
This</a> tutorial focuses on both the automated setup of multi-stage (dev+QA+prod) 
<strong>enterprise</strong> environments within AWS
by specifying <strong>CloudFormation</strong> 
in the sequence needed during manual configuration on the AWS Management Console.

There are several ways to setup
<strong>enterprise</strong> environments within AWS,
listed from the most manual (most difficult) to the easiest (most automated):

   1. Manually typing in the AWS Management Console
   2. Interactively use AWS CLI (Command Line Interface) to type commands with parameters 
   3. Create shell scripts calling AWS CLI commands to specify the sequence of construction
   4. Create CloudFormation templates which declare what Amazon creates 
   5. Use [Amazon's Elastic Beanstalk or Opsworks (Chef) deploy services](/aws-server-deploy-options/).

TODO: Make this diagram into a video:
<amp-img width="650" height="483" alt="fig-aws-enterprise-v02-650x483-80"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16263954/1389b3ba-3834-11e6-8471-46d2602d3f39.jpg"></amp-img>

NOTE: This page is in draft form at the moment.


## Human interaction #

The two main types of people interacting with AWS are
1) Administrators who define the environment
and
2) end-users of the whole setup. 


My [AWS basic on-boarding tutorial](/aws-onboarding/) describes setting up an account,
use of the AWS Management Console, and 
installation of AWS Command-line Interface.


This tutorial shows how to configure CloudFormation JSON for each aspect
of AWS for an enterprise, by sequence of dependencies:

   0. <a href="#AWSCLI">AWS CLI</a>
   0. <a href="#IAM">IAM</a>
   0. <a href="#VPN">VPN</a>
   0. <a href="#VPC">VPC</a>
   0. <a href="#NAT">NAT</a>

   0. <a href="#DNS">DNS</a>
   0. <a href="#ELB">ELB</a>

   0. <a href="#MapRegionAMI">AMI</a> by Region, with Auto-scale

<hr />

<a name="Launch"></a>

## Launch #

0. Instead of entering EC2 in the Management Console,
   In the AWS Management Console Services gallery, click
   Cloud Formation.

0. Select the Region.

   PROTIP: New services are supported in a single region initially. 
   So check what region depending on the services it supports.

0. Click Create New Stack.

   NOTE: One CF template can be used to create multiple <strong>stacks</strong> of servers.

   CF can span two or more Availability Zones
   in a multi-subnet VPC.

0. In the Stack Name box, type "Lab" or other name.
0. Select Specify an <a href="#S3Template">Amazon S3 template URL</a>.
0. Paste the URL. An example is provided at:

   PROTIP: With such complexity, better use a JSON file
   which contains all the resource specifications.

   <pre>
   http://us-east-1-aws-training.s3.amazonaws.com/self-paced-lab-15/VPC1.json
   </pre>

   This one has additional security groups and output parameters:

   <pre>
   http://us-east-1-aws-training.s3.amazonaws.com/self-paced-lab-15/VPC2.json
   </pre>

0. Click Next.
0. On the Specify Parameters page, leave the default settings.
0. Click Next in the Options page (no Tags).
0. Click Create after reviewing.
0. Click Events tab.
0. Click Refresh occassionally.
0. On the Services menu, click VPC to see results.

To be able to delete the stack, first turn off <strong>Termination Protection</strong>:

0. Select EC2 from the Services gallery.
0. Click Instances.
0. <strong>Right-click</strong> on the running instance to Change Termination Protection.
0. Click Yes, Disable.
0. Now back on Cloud Formation service.
0. Select the box for the stack to be deleted.
0. Click Delete Stack.
0. Click Yes, Delete.

   NOTE: Unlike using the manual Console, AMIs are  
   specified in the CloudFormation template JSON.


### CF Front Matter #

This section is based on the
<a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html">
Template Reference at https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html</a>.

All CF templates must have a version, even though it's always "2010-09-09":

{% highlight text %}
{
   "AWSTemplateFormatVersion" : "2010-09-09",
   "Description" : "Prod VPC with 4 subnets across 2 Availability Zones, and a bastion host.",
...
{% endhighlight %}

   PROTIP: Specify a URL to documentaiton and discussion about the template.  

   PROTIP: Use #tags as metadata in the Description to
   automate search among multiple files.

   NOTE: CloudFormation follows an <strong>"idempotent"</strong> approach of specifying what is 
   desired (an end state) rather than specific sequences of actions.

   A script that adds resources would create another new resource each time it is run.

   So no matter how many times the specification is run, the end result is the same.


### Jinja2 like Jackyll yaml #

Jinja2 templates (described at 
<a target="_blank" href="http://jinja.pocoo.org/docs/dev/templates/#filters">
http://jinja.pocoo.org/docs/dev/templates</a>)
can be used to expand “moustache” variables in CloudFormation JSON:

   * ** stage ** : The name of the stage where you are applying your project (dev, test, prod, etc.).
   * ** aws_region ** : The name of the AWS_REGION where you are applying your project.
   * ** aws_account_id ** : The ID of the account that you are using to apply your project.
   * ** env ** : All available environment variables.
   * ** ip-xxx ** : A specific IP address
   <br /><br />


<a name="AdvancedUserData"></a>

## Advanced User Data #

The "User" here refers to you, the DevOps person using CloudFormation, 
not the ultimate end user of the system being built.

The EC2 Advanced User Data field contains script code that "boostraps" a server,
executing after the server becomes active.

<a target="_blank" href="https://gist.github.com/mikepfeiffer/a4ce6d25ae092f1a4ea97afad5879530">
This example</a> is a Windows machine running the Powershell iex command to download and install
<a target="_blank" href="https://www.chocolatey.org/">
the Chocolaty package manager for Windows machines</a> 
used here to install Python. Lastly, the awscli is installed.

{% highlight text %}
<powershell>
iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))
choco install python -y
(new-object net.webclient).DownloadFile('https://s3.amazonaws.com/aws-cli/AWSCLI64.msi','c:\AWSCLI64.msi')
msiexec.exe /i 'C:\AWSCLI64.msi' /qn
</powershell>
{% endhighlight %}

   PROTIP: Many enterprises reference Artifactory to obtain installers 
   instead of whoever at Chocolatey. 
   This is to ensure that all packages have been reviewed by internal Security personnel.  


An example to bootstrap instance with CloudWatch sample scripts on Linux servers: 

{% highlight text %}
#!/bin/bash
yum install perl-Switch perl-DateTime perl-Sys-Syslog perl-LWP-Protocol-https -y
curl http://aws-cloudwatch.s3.amazonaws.com/downloads/CloudWatchMonitoringScripts-1.2.1.zip -O
unzip CloudWatchMonitoringScripts-1.2.1.zip
rm CloudWatchMonitoringScripts-1.2.1.zip
{% endhighlight %}

### CloudWatch Custom Metrics#

The defaults does not include all the metrics needed, such as
Disk Metrics. See 
http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/mon-scripts.html

For example: the AWS CLI script 
to send a log every 5 minutes about amount of free memory in GigaBytes: 

   <pre><strong>
   aws cloudwatch put-metric-data --metric-name FreeMemoryGB --namespace Windows --value 5 --region us-west-2
   --dimensions 'Name=Server,Value=WIN'
   </strong></pre>


An example to install CodeDeploy agent on Linux servers:

{% highlight text %}
#!/bin/bash
yum install -y aws-cli
cd /home/ec2-user/
aws s3 cp 's3://aws-codedeploy-us-east-1/latest/codedeploy-agent.noarch.rpm' . --region us-east-1
yum -y install codedeploy-agent.noarch.rpm
{% endhighlight %}


## Boot-up #

0. Use a text editor to open the <strong>boot script</strong> for many Linux AMIs: 

   <strong>/etc/rc.local</strong>

0. Additional scripts can be added to  
   run configuration scripts when the instance is launched as the root user.



### User Data CloudInit #

Amazon provides some AMIs (Ubuntu Linux AMI and the Amazon Linux AMI)
which contain a version of CloudInit. CloudInit accepts commands in
the EC2 Advanced User Data field 
to customize instances at launch time.

REMEMBER: The the EC2 Advanced User Data field has a limit of 16,000 bytes. 

WARNING: CloudInit takes time to run, which delays auto-scaling.

Dynamically configuring an AMI at startup means you can use a common base AMI for different use cases. 

the database connection string



## Security #

however, we recommend that if you do this, you pass the AWS access key ID and secret key of an AWS Identity and Access Management (IAM) user with limited permissions. You should grant the IAM user only the read access permissions it needs to retrieve the configuration information.
You can use AWS CloudFormation to create IAM users, groups, and policies. From a within a single template, you can create a user, set appropriate polices, create an access key ID and secret key pair, and then add the credentials to the instance through the user data. By adding the IAM user in the template, you have a user whose existence is tied to the lifetime of the stack, with each new stack having a separate, unique user.

bootstrap scripts. We strongly recommend that you assign an IAM role to on the EC2 instance when the instance is launched. By using an IAM role, no long-term secrets are defined in the template or stored in the metadata on the EC2 instance. When the IAM role is used, temporary security credentials are created and used to access AWS services such as AWS CloudFormation. These temporary credentials expire after a short time, making it harder to compromise the credentials and reducing the risk and exposure if the credentials are compromised.


## Retrieve using help scripts #

Within servers, user data is retrieved from the metadata store at constant IP address:

   http://169.254.169.254/latest/user-data

   NOTE: The same IP address is used for both Linux and Windows.

User data can also be from this command:

   <tt><strong>
   /opt/aws/bin/ec2-metadata --help
   </strong></tt>

Use a helper script on Amazon Linux AMIs to extract. 
CloudFormation helper scripts are installed by default within Amazon Linux AMI at

   <strong>/opt/aws/bin</strong>

from the Amazon Linux AMI yum repository (package name <strong>aws-cfn-bootstrap</strong>).

CloudFormation helper scripts are available from:

   * <a target="_blank" href="http://aws.amazon.com/cloudformation/aws-cloudformation-templates/">
   Amazon's 'AWS CloudFormation sample template site</a> 

   * <a target="_blank" href="http://aws.amazon.com/developertools/AWS-CloudFormation/4026240853893296">
   Helpers in other formats</a>


<a name="AZ"></a>

### EC2 Instances #

An example CF template:

{% highlight text %}
"Resources": {
  "EC2Instance": {
    "Type": "AWS::EC2::Instance",
    "Properties": {
      "ImageId": "ami-bff32ccc",
      "InstanceType": "t2.nano",
      "NetworkInterfaces": [{
        "GroupSet": [{"Ref": "SecurityGroup1"}]
        "SubnetId": "..."
      }]
    }
  },
  "ElasticIP": {...},
  "SecurityGroup": {...}
}
{% endhighlight %}



<a name="DNS"></a>

## DNS #

DNS servers obtain IP address from URL names by forwarding requests it cannot resolve from its own
tables.

Clients -- called <strong>resolvers</strong> -- make requests of DNS <strong>name servers</strong>.

Two DNS servers are usually specified (in client machine TCP/IP properties) for load balancing
and fault tolerance.

DNS servers refer to 3 types of records to answer 3 types of queries:

<ul>
<li> <strong>A</strong> (host Address) records are used to answer <strong>forward lookup</strong>
of an FQDN (host name) to a specific IP address.
The host name to IP address mappings for a zone are stored in the <strong>Domain.dns</strong> file
in the <a href="1envvars.htm">&#37;systemroot&#37;</a>\System32\Dns folder.
</li>

<a name="DNSPTR"></a>
<li> <strong>PTR</strong> (<span style="text-decoration:underline">P</span>oin<span style="text-decoration:underline">t</span>e<span style="text-decoration:underline">r</span> resource) records are used to
answer a <strong>reverse lookup</strong> of an IP address to a host name
(another DNS domain name location).
IP address to host name mappings are in the <tt><strong>z.y.w.x.in-addr.arpa</strong></tt> file.
Create file <strong>1.0.0.127.in-addr.arpa</strong> zone file for reverse lookup.
</li>

<li> <strong>SRV</strong> (<span style="text-decoration:underline">S</span>e<span style="text-decoration:underline">rv</span>er location) records -- new in Windows 2000 DNS -- are used to
<strong>locate domain controllers</strong>.
SRV specifies the server to which a DNS name server <strong>forwards</strong>
when it cannot resolve a query.
Windows 2000 server <strong>requires DNS</strong> to locate domain controllers.
On Windows 2000, DNS is installed as a Windows component on a
domain controller with a static (not dynamic) IP address.
</li>
</ul>

Other types of resource records:
<ul>
<li> <strong>NS</strong> records notate which DNS servers are designated
  as authoritative for the zone.
</li>

<li> <strong>SOA</strong> (Start Of Authority) records indicate the <strong>name of origin</strong> and other basic properties for each zone,
  including the name of the primary server for the source for information about the zone,
</li>

<li> <strong>CNAME</strong> (Canonical name) records define <strong>aliases</strong>.
</li>

<li> <strong>MX</strong> (<span style="text-decoration:underline">M</span>ail e<span style="text-decoration:underline">x</span>changer) records define the
  owner and mail exchange server DNS name,
  with <strong>preference number</strong>.
</li>
</ul>


<a name="AZ"></a>

### Availability zones #

Unlike the Console web page,
which shows the current Availability Zone in the upper right corner,
within CLI you use a command:

    <pre><strong>
    ec2-metadata -z
    </strong></pre>

## EC2 HPC Placement Groups #

0. From the EC2 Management Console,
   High Performance Computing
   <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">
   placement groups</a> for low latency and high bandwidth
   within each availability center
   must be unique within each AWS account.

   EC2 instances can't be moved into a placement group.
   They most be created all at the same time.



<a name="MapRegionAMI"></a>

### Mapping of AMIs by Region #

Images of what is in a server containing all the software.

Each AMI is created by taking a snapshot
of what has been configured on a server.

In CF static mapping for key "AWSRegionArch2AMI",
each AMI value is specific to a unique region key:

{% highlight text %}
    "AWSRegionArch2AMI" : {
      "us-east-1"      : {"64" : "ami-f619c29f", "Amazon Linux":"ami-8fcee4e5", "Ubuntu":"ami-fce3c696"},
      "us-west-2"      : {"64" : "ami-52ff7262"},
      "us-west-1"      : {"64" : "ami-3bcc9e7e"},
      "eu-west-1"      : {"64" : "ami-e5e2d991"},
      "ap-southeast-1" : {"64" : "ami-02eb9350"},
      "ap-southeast-2" : {"64" : "ami-ab990e91"},
      "ap-northeast-1" : {"64" : "ami-14d86d15"},
      "sa-east-1"      : {"64" : "ami-0039e61d"}
    }
{% endhighlight %}


<a name="Mappings"></a>

### Mapping of Instance Types #

Within the Console, the type of machine are Instance Types.

In a CF JSON file, instance types are defined in Mappings:

{% highlight text %}
  "Mappings" : {
    "AWSInstanceType2Arch" : {
      "m1.small"   : { "Arch" : "64" },
      "m1.medium"  : { "Arch" : "64" },
      "m1.large"   : { "Arch" : "64" },
      "m1.xlarge"  : { "Arch" : "64" },
      "m2.xlarge"  : { "Arch" : "64" },
      "m2.2xlarge" : { "Arch" : "64" },
      "m2.4xlarge" : { "Arch" : "64" },
      "m3.xlarge"  : { "Arch" : "64" },
      "m3.2xlarge" : { "Arch" : "64" },
      "c1.medium"  : { "Arch" : "64" },
      "c1.xlarge"  : { "Arch" : "64" }
    },
{% endhighlight %}

   NOTE: Nowdays, 64-bit servers are all that is being used.

   QUESTION: Why is this necessary if all the values are the same?


<a name="VPC"></a>

## VPC (Virtual Private Cloud)

See [my tutorial on AWS VPC](/aws-vpc/)


<a name="SecGroups"></a>

## Security Groups #

SGs define which ports are open.

   <a name="SecGroupNaming"></a>

PROTIP: Agree on a naming convention for security groups, perhaps using codes not also used by Amazon.
Examples: "US_VA5_LX_WEB_P_001" and "IR_2_W12_DMZ_F_002":

   * "US" for the United States legal domicile entities. "G" for Germany, etc.
   * "VA5" for Virginia 5.
   * "LX" for Amazon Linux, "W2" for Windows Server 2012, etc.
   * "WEB" for web server tier, "DMZ", "SQL" database, "NOS" for NO-SQL database, etc.
   * "P" for prod, "F" for functional testing, "C" for capacity test environment.
   * "001" a sequential number, zero-filled to ensure proper sorting over time.

Public-facing NAT should be protected with Multi-factor authentication (MFA).

    * SSH and RDP ports should open only on sources and destination IP's,
    not global network (0.0.0.0/0) nor static exit IP's not dynamic exit IP's.  

    * http://www.howtogeek.com/121650/how-to-secure-ssh-with-google-authenticators-two-factor-authentication/

    * http://www.rohos.com/2013/02/google-authenticator-windows-login/

PROTIP: "Tier" security groups so servers on each tier cannot access all ports.
Don't use same security group for multiple tiers of instances.

By default, no ports are open (all ports are blocked).

   * DNS
   * ICMP for pings. But only for internal, not external servers.

A template can have additional output parameters.

<a target="_blank" href="http://harish11g.blogspot.com/2014/01/Amazon-Virtual-Private-Cloud-VPC-best-practices-tips-for-architecture-migration.html">
This</a> advice:

   "People have tendency to open for port 8080 to 10.10.0.0/24 (web layer) range.
   Instead of that, open port 8080 to web-security-group.
   This will make sure only web security group instances
   will be able to contact on port 8080.
   If someone launches NAT instance with NAT-Security-Group in 10.10.0.0/24,
   he won't be able to contact on port 8080
   as it allows access from only web security group."


### FTP #

{% highlight text %}
  "SecurityGroupIngress": [{
    "CidrIp": "0.0.0.0/0",
    "FromPort": 22,
    "IpProtocol": "tcp",
    "ToPort": 22
  }]
}
{% endhighlight %}


<a name="BastionHost"></a>
<a name="Bastion"></a>

## Bastion Host #

Bastion hosts are used to limit exposure to the internet, to enable sysadmins to SSH into machines.

Is many setups, bastion hosts are the only servers allowed access from the public internet.

Windows users use Putty program from:

    http://the.earth.li/~sgtatham/putty/latest/x86/putty.exe

Public and private keys:

    * Windows users download the PPK.
    * Linux/Mac users download the PEM.


<a name"S3Template"></a>

### S3 Template URL #

    For environments routinely processing more than 100 images per second,
    because S3 stores files lexicographically (alphabetically),
    S3 GETs can be faster if file names are prefixed with a random string (as in a GUID)
    or reverse the keyname string.

    <a target="_blank" href="https://media.amazonwebservices.com/AWS_Storage_Options.pdf">
    PDF: AWS Storage options</a>

   * Bucket Policies.
   * MFA Delete
   * Backup data in another bucket/account

AWS offers several Gateways to store data:

   * Gateway-cached volumes
   * Gateway-Stored volumes
   * Gateway-Virtual Tape Library (VTL)

<a name="EBS"></a>

## EBS #

Each EBS volume is attached to one instance at a time.

EBS can be transferred among availability zones.

EBS volumes are replicated across multiple servers in an AZ.
But a backup is still needed because
EBS is designed to have an annual failure rate (AFR) of
0.1% to 0.2% (SLA of 99.95%).

<a name="Glacier"></a>

## Glacier #

AWS allows up to 1,000 vaults per account.

Individual archives can be up to 40 TB each.

Lifecycle retention policies.

Google Nearline Storage

<a name="DNS"></a>

## DNS (Domain Name Service) Route 53 #

Customers and advertisers are given a <strong>domain name</strong> such as
amazon.com, acme.com, microsoft.com, etc.

Visitors specifying the domain name go to the DNS server each has configured on their machine.

Those DNS services got the DNS ANAME record <strong>propagated to them</strong> from
AWS Route 53.

The enterprise approach is to have the
DNS Domain Name Service distribute traffic among two external-facing load balancers,
to avoid any single point of failure, however unlikely.
Secondary DNS operated by an alternative vendor:

   * dyn.com
   * google.com
   * https://nsone.net/

AWS built Route 53 from the ground up rather than using open source
coding. AWS added additional features such as health checks.
Route 53 works for VPCs only
with private hosted zones.

DNS distributes load among load balancers in a round-robin fashion.


<a name="ELB"></a>

## ELB (Elastic Load Balancer)

Load balancers distribute traffic among individual nodes in a cluster.

Clients reach the load balancer via a VIP (Virtual IP) address.

<a target="_blank" href="https://github.com/danilop/ec2-watchdog">
EC2-WatchDog</a> is a simple (bash) script for Amazon EC2 to monitor another node for HA and take over a Virtual IP (VIP) if the service on the other node fails. http://danilop.github.io/ec2-watchdog

   PROTIP: The response AWS expects from the Ping Path resource (typically `/index.html`) is a 200 HTTP response.
   So AWS may consider a server up even if the web server is down if the
   <strong>container</strong> service responds with a formatted "Please try again later" message.

Some use an address outside AWS to distribute load to other clouds (servers in private locations, in Azure, etc.)

   * Response Timeout 5 seconds.
   * **Health Check Interval** is the number of seconds AWS waits between health checks 2.
   * Unhealthy Threshold
   * **Healthy Threshold** is the number of health checks to report healthy before AWS can consider a server healthy enough to use.

PROTIP: Set Healthy Threshold to 2 checks multiplied Health Check Interval of 2.


<a name="EIP"></a>

## Elastic IPs #



<a name="ACL"></a>

## ACL #

Access Control Lists can provide more fine-grained control.

There is a spearate ACL for ingress in and egress out.

ACL use degrades performance because every packet
is inspected.


<a name="NAT"></a>

## NAT #

Instances launched into an AWS VPC aren’t directly accessible from internet, so by default are more secure.

To expose nodes to the public internet, configure NAT rules
for use with a public <a href="#VPC">VPC</a>

Network Address Translation enables servers in private subnets to communicate with the public Internet outside the farm.

An example of how NAT is configured in a CF JSON file:

{% highlight text %}
  "Parameters" : {

    "NATInstanceType" : {
      "Description" : "NAT EC2 instance type",
      "Type" : "String",
      "Default" : "m1.small",
      "AllowedValues" : [ "m1.small","m1.medium" ]
    },
{% endhighlight %}

   The "m1.small" is defined in <a href="#Mappings">Mappings</a>.

   In the CF JSON Resources section:

{% highlight text %}
    "NAT" : {
      "Type" : "AWS::EC2::Instance",
      "Properties" : {
        "InstanceType" : { "Ref" : "NATInstanceType" },
        "ImageId" : { "Fn::FindInMap" : [ "AWSRegionArch2AMI", { "Ref" : "AWS::Region" },
                      { "Fn::FindInMap" : [ "AWSInstanceType2Arch", { "Ref" : "NATInstanceType" }, "Arch" ] } ] },
        "SubnetId" : { "Ref" : "PublicSubnet1" },
        "SourceDestCheck" : "false",
        "DisableApiTermination" : "true",
        "SecurityGroupIds" : [ { "Ref" : "NATSecurityGroup" } ],
        "Tags" : [
          { "Key" : "Name", "Value" : { "Fn::Join" : ["", [
              "NAT-", { "Ref" : "VPC"} ]] } }
        ]
      }
    },

    "NATIP" : {
      "Type" : "AWS::EC2::EIP",
      "Properties" : {
        "Domain" : "vpc",
        "InstanceId" : { "Ref" : "NAT" }
      }
    },

   "NATSecurityGroup" : {
      "Type" : "AWS::EC2::SecurityGroup",
      "Properties" : {
        "GroupDescription" : "NAT Security Group",
        "VpcId" : {"Ref" : "VPC"},
        "SecurityGroupIngress" : [
          { "IpProtocol" : "-1", "FromPort" : "1", "ToPort" : "65535", "SourceSecurityGroupId" : { "Ref" : "PrivateSG" } },
          { "IpProtocol" : "icmp", "FromPort" : "-1", "ToPort" : "-1", "SourceSecurityGroupId" : { "Ref" : "PrivateSG" } }
        ]
      }
    },
{% endhighlight %}

The "EIP" is an Elastic IP to the public.

NOTE: NAT servers are physical appliances, so no SSH key pairs are
used to log into the instance.

NAT instances are a Single Point of Failure (SPOF),
so monitoring and automated replacement is needed.


<a name="VPN"></a>

## VPN (Virtual Private Network)
VPN is not an Amazon invention.

VPN secures the network between data centers.
So VPN are said to extend data centers.

The CorporateCidrIP parameter in the CF JSON Parameters section
(at the top)
is the IP address VPC allowed
inbound access.

{% highlight text %}
    "CorporateCidrIp" : {
      "Description" : "Your Company's CidrIp (to restrict traffic to be authorized ONLY from corporate office)",
      "Type" : "String",
      "Default" :  "0.0.0.0/0"
    }
{% endhighlight %}

Cidr (Classless Inter-Domain Routing) is also called "supernetting"
because it allows more flexible allocation of Internet Protocol (IP) addresses. Whatever.



<a name="AutoScale"></a>

## Auto-Scale

Amazon charges by the hour, even if the server was used only a few minutes.

The cooldown period to remove servers is 5 minutes
(x60 = 300 seconds).

### Auto-Scaling Config

Auto scaling launches specific AMI instances.

{% highlight html %}
as-create-launch-config
--image-id  (an Amazon Linux AMI)
--instance-type t1.micro
--key <YourKeyName>
--group <YourSecurityGroup>
--user-data-file as-bootstrap.sh
--launch-config lab-lc
{% endhighlight %}

### Create Auto Scaling Group

{% highlight html %}
as-create-auto-scaling-group
lab-as-group
--availability-zones <YourAvailabilityZone>
--launch-configuration lab-lc
--load-balancers <YourElasticLoadBalancer>
--max-size 5
--min-size 1
{% endhighlight %}

PROTIP: There is a maximum of 5 in a group being scaled.

The response is:

    ```
    OK-Created AutoScalingGroup
    ```

### Verify Auto Scaling

0. In the AWS Management Console | Services | EC2 | Instances.
0. Select instance without a name. Refresh.
0. Status Checks should say "2/2".
0. Copy the Public DNS and paste it in a browser.

   It should say CPU Load: 0%.

0. Click <strong>Generate Load</strong>.

> The condition for auto-scaling is to terminate one of the instances.

> Identify the amount of time between when the condition occurs
to when the new instance can accept and process requests.

Consider the time sequence:

   * CloudWatch aggregation makes data available (60 seconds)
   * Auto Scaling Trigger is invoked (polling every 60 seconds)
   * New instance is populated (several minutes)
   * New instance is placed in Load Balancer.


<a name="TagAutoScale"></a>

### Tag Auto Scaling Resources

0. Click the gear icon to Show/Hide columns.

<pre>
as-create-or-update-tags
--tag "id=lab-as-group, t=auto-scaling-group, k=Name, v=AS-Web-Server, p=true"
</pre>

### Create Auto Scaling Notifications

0. This uses Amazon's Simple Notification Service (SNS).
   Go to that among AWS Management Console.
0. Click Get Started.
0. Click Create Topic.
0. For Topic Name, type "lab-as-topic".

    PROTIP: Define a naming convention for topics.

0. Click Create Topic.
0. Click Create Subscription.
0. Click Email for Protocol.
0. Type an email address in the Enpoint box.

    PROTIP: Specify a <strong>group</strong> email.

0. Click Create Subscription.
0. Specify the Topic ARN.

{% highlight html %}
as-put-notification-configuration <lab-as-group>
--topic-arn <TopicARN>
--notification-types autoscaling:EC2_INSTANCE_LAUNCH, autoscaling:EC2_INSTANCE_TERMINATE
{% endhighlight %}

### Auto Scaling Policies

{% highlight html %}
as-put-scaling-policy lab-scale-up-policy
--auto-scaling-group <lab-as-group>
--adjustment=1
--type ChangeInCapacity
--cooldown 300
{% endhighlight %}

To scale down:

{% highlight html %}
as-put-scaling-policy lab-scale-down-policy
--auto-scaling-group lab-as-group "--adjustment=-1"
--type ChangeInCapacity
--cooldown 300
{% endhighlight %}


   <pre>
   as-describe-scaling-activities --show-long
   </pre>

## Rolling Updates #

The "immutable infrastructure" philosophy is one doesn't change servers, even security patches.
Instead, one substitutes old server instances with new instances --
using <strong>rolling updates</strong> of small batches.

The CloudFormation <a target="_blank" href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html">
UpdatePolicy</a> attribute for <strong>Auto Scaling Groups</strong>.

Andreas Wittig (@andreaswittig from Stuttgard, Germany,
<a target="_blank" href="https://app.pluralsight.com/library/courses/aws-automating-cloudformation">
on CodeMentor</a>)
and Michael show you:

   * <a target="_blank" href="https://cloudonaut.io/rolling-update-with-aws-cloudformation/">
   Rolling Update with AWS CloudFormation</a>

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-automating-cloudformation">
   "Automating AWS with CloudFormation" Pluralsight 1 hour 19 minute video course</a> released 5 Apr 2016
   refers to a hypothetical admin ("called Adam") who creates a bastion host
   as well as a WordPress app server using MySQL.

   * <a target="_blank" href="http://bit.ly/1QY1iDM">
   Amazon Web Services in Action</a> Manning book.



<a name="CloudWatch"></a>

## CloudWatch #

   CloudWatch is necessary to detect when instances need to be
   added or removed.

   The conditions can be CPU utilization percentage
   over a period of time,
   or something more elaborate.

   0. In AWS Services, select CloudWatch.
   0. Click Alarms.
   0. Create Alarm.
   0. Search for By Auto Scaling Group on the CloudWatch Metrics by Category page.
   0. Select AutoScalingGroupName "lab-as-group".
   0. Select Metric Name "CPUUtilization". Next.
   0. Type High CPU Alarm in Name box. Description.
   0. In Whenever drop-down list, select exceeds or equals >=50
   (50%) for one consecutive period.
   0. CLick + AutoScaling Action.

   PROTIP: A full set of triggers need to include all the components,
   which include memory, disk space, file handles, available ports, etc.

   <a name="CloudFront"></a>

## CloudFront #

   CloudFront is Amazon's CDN (Content Delivery Network)
   where files in S3 (Simple Storage Service)
   are spread around the world.

   Compared with Akamai, CloudFront has no minimum usage costs.

   CloudFront is among green icons for
   Management Tools in the Services gallery.

   CloudFront has one Resource Type: Distribution.


## Direct connect #

One can directly connect an on-premise network to an AWS VPC.

PROTIP: Direct connects have a set static bandwidth,
so plan accordingly.

<a name="#NAT"></a>

## Resources #

* <a target="_blank" href="https://play.google.com/store/books/details?id=xF7CCAAAQBAJ">
Implementing Cloud Design Patterns for AWS April 29, 2015 from Packt</a>
by Marcus Young

* <a target="_blank" href="https://s3.amazonaws.com/cloudformation-examples/BoostrappingApplicationsWithAWSCloudFormation.pdf">
   Bootstrapping Applications via AWS CloudFormation</a>


## Shell script #

0. First, let's interactively run a command such as this (but change the region code):

   <tt><strong>
   aws ec2 describe-security-groups \-\-region us-west-2
   </strong></tt>


0. Use a text editor to begin defining a shell script.

   We define environment variables with values,
   such as REGION needed for most aws CLI commands. 

   <pre>
#!/bin/bash
REGION=us-west-2
SGOUT="tmp/sgnifo"
aws ec2 describe-security-groups \-\-region $REGION \-\-output text > $SGOUT
IFS=$'\n'
cat $SGOUT | while read line
do
   </pre>

The IFS (Internal Field Separator) adds a "new line" break.

The cat command is piped to a while which reads each line.

   <pre>
case $line in
SECURITYGROUPS*)
GID=(`echo $line | awk -F"\t" '{print $3}'`)
GNAME=(`echo $line | awk -F"\t" '{print $4}'`)
;;
IPPERMISSIONSEGRESS*)
PROTO="EGRESS"
;;
   </pre>

$3 is for the third position of the output, $4 the fourth position, etc.

Part 3:

   <pre>
IPPERMISSIONS*)
FROMPORT=(`echo $line | awk -F"\t" '{print $2}'`)
PROTO=(`echo $line | awk -F"\t" '{print $3}'`)
TOPORT=(`echo $line | awk -F"\t" '{print $4}'`)
;;
esac
Done
rm $SGOUT
   </pre>


Part 4:

   <pre>
IPRANGES*)
CIDR=(`echo $line | awk -F"\t" '{print $2}'`)
if [[ "$CIRD" = "0.0.0.0/0" && "$PROTO" != "EGRESS" ]]; then
   echo "$GNAME, $GID, $CIDR, $PROTO, $FROMPORT, $TOPORT"
fi
;;
   </pre>

"fi" is the "end if" of bash scripts.


## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}
