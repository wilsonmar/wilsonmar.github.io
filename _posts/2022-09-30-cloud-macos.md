---
layout: post
date: "2022-10-31"
file: "cloud-macos"
title: "Cloud MacOS"
excerpt: "Temporary MacOS instances from AWS EC2 and MacStadium"
tags: [apple, mac, setup, cloud]
image:
# ![apple-store-fisheye-1900x500-42783.jpg
  feature: https://user-images.githubusercontent.com/300046/62640513-ff8ac800-b8fe-11e9-842b-e83ec4fdabb2.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

{% include whatever.html %}

## Mac within AWS cloud

In 2022 AWS <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/mac/">announced</a> availability of on-demand MacOS server types built on AWS Nitro System  within the AWS EC2 cloud, 
as an <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/">EC2 instance type</a>:

   * mac1.metal are Mac Mini's with Intel’s 8th generation (Coffee Lake) 3.2 GHz (4.6 GHz turbo) Core i7 x86 processors 

   * mac2.metal has Apple's M1 or M2 ARM (16-core Neural Engine) processors
   <br /><br />

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th>Instance</th><th>vCPU cores</th><th>GiB memory</th><th>Gbps Network</th><th>Gbps EBS Bandwidth</th></tr>
   <tr valign="top" align="right"><td align="left">mac1.metal</td><td>12</td><td>32</td><td>10</td><td>8</td></tr>
   <tr valign="top" align="right"><td align="left">mac2.metal</td><td>8</td><td>16</td><td>10</td><td>8</td></tr>
   </table>


## Cost?

CAUTION: AWS' minimum billing is one day, even if you use a few minutes. 
That's why AWS forces the use of "Dedicated Hosts".

The <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/mac/#Pricing">unit of billing</a> is the <a target="_blank" href="https://aws.amazon.com/ec2/dedicated-hosts/pricing/">dedicated host</a> US region price which have a <strong>24-hour minimum allocation period</strong> (required by Apple). For 

   * mac1 US per hour $0.650 x 24 = $15.6/day or $468 per 30-day month
   * mac2 US per hour $1.083 x 24 = $25.992/day or $779.76 per 30-day month

   * mac1 Mumbai per hour $1.14

   * mac2 Frankfurt per hour $1.298
   <br /><br />

   AWS offers savings up to 44% off On-Demand pricing for a 3-year commitment. 

   PROTIP: If you're using these more that a few months, you might as well buy your own Mac at $2,500.

<a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html">
Documentation</a>.


## Competitors 

Compare AWS against <a target="_blank" href="https://www.macstadium.com/pricing">MacStadium.com</a>
<a target="_blank" href="https://portal.macstadium.com/bare-metal-mac/create">prices for bare-metal</a>:

   * mac2 (Gen 5 Mac mini) with 16 GB for $171 per month
   * mac1 (Gen 4 Mac mini) with 32 GB for $239 per month
   * mac1 (Gen 4 Mac mini) with 64 GB for $299 per month
   <br /><br />


## Limited availability across regions

CAUTION: At time of writing, macOS instance types are currently available only on a subset of regions world-wide:

   * us-east-1a
   * us-west-1a
   <br /><br />

"When provisioning normal instances in an availability zone that doesn't support that instance type you get the error "Your requested instance type (mac2.metal) is not supported in your requested Availability Zone (us-east-1b). Please retry your request by not specifying an availability zone or choosing us-east-1a, us-east-1c, us-east-1d"
-- http://blog.piefox.com/2011/07/ec2-availability-zones-and-instance.html

https://blyx.com/2016/03/24/how-to-restrict-by-regions-and-instance-types-in-aws-with-iam/


## Using Terraform Dedicated Host Module

The easiest way to create an instance is using automation based on <a target="_blank" href="https://wilsonmar.github.io/terraform/">Terraform</a>.

More specifically, leverage the "dedicated-host" Terraform module created by Daniel Dias (in Berlin, Germany):
   <ul>
   https://registry.terraform.io/modules/DanielRDias/dedicated-host/aws/latest
   </ul>

It can create for you:

   * <strong>dedicated_host_id</strong>
   * <strong>mac_ami_id</strong> for the region and Architecture, such as "64-bit (Mac-Arm)" for Mac2.
   <br /><br />


CAUTION: I am currently working with Daniel on this module to use his

In a Terminal:

1. As stated <a target="_blank" href="https://registry.terraform.io/modules/DanielRDias/dedicated-host/aws/latest/examples/macOS">here</a>, after forking the module

   <pre>https://github.com/DanielRDias/terraform-aws-dedicated-host
   </pre>

   git clone it and cd into the download.

2. View the <tt>.gitignore</tt> file. Notice it has "stage.auto.tfvars.example" and "stage.auto.tfvars" along with other specifications of files and folders not to upload to GitHub.

3. Edit the ____ file.
   
4. Rename <tt>stage.auto.tfvars.example</tt> to <tt>stage.auto.tfvars</tt>, then edit it:

   <pre>instance_type     = "mac2.metal"
   availability_zone = "us-east-1a"
   </pre>

   CAUTION: Mac editions are not available in all regions world-wide.

   TODO: Logic to switch if not available? CDK for this? Reserved instance?

   TODO: It needs to be updated:

   * from use of mac1.metal to mac2.metal
   * Add specification of ARM for mac2.metal
   * os_version ??? from use of macOS Catalina to macOS Monteray
   <br /><br />


To use that dedicated_host_id automation, you first need to decide and define these values in AWS:

* Security Group (with your IP address)
* pem key file name
* AWS Region
* AWS Availability zone (such as "us-west-2a")

* Instance Name
* AWS Tags (for company project, etc.)
* cf_stack_id	Cloud Formation Stack ID
* dedicated_hosts	Maps with the dedicated hosts IDs

## Using AWS GUI

Using the AWS Mananagement Console UI from your laptop:

1. Login AWS.

   <a name="pemfile"></a>
   
   ### Security Group & pem file

1. PROTIP: <a target="_blank" href="https://www.youtube.com/watch?v=8UqtMcX_kg0">As with other instance types</a>, define a Security Group using port 22 protocol TCP source <strong>your laptop's IP address</strong> (rather than 0.0.0.0/0 for just anyone, which is unsafe).

1. Create a pem key (such as "malx-us-west-2.pem" in the example below).
1. <tt>chmod 0400 malx-us-west-2.pem</tt>
1. Define an IAM role.

   ### Region?

1. At the top upper-right, select Region "us-west-2" (Oregon), us-east-1, or us-east-2.

   PROTIP: At time of writing, region "us-west-1 (N. California)" does not support MacOS instances.
   
   ### Dedicated Hosts

1. If you don't see the left menu, click the "hamburger" icon at the upper-left corner.
1. Select <strong>Dedicated Hosts</strong> from the left menu. (You cannot "Launch instance" with macs)
1. Click "Allocate Dedicated Host".
1. Type a Name.
1. For Instance family, select "mac2".
1. For Instance type, select "mac2.metal".
1. For Availability Zone, select one, such as "us-west-2a".
1. Ignore the other settings providing default values.
1. Click "Allocate".
1. Hightlight and copy your Host ID (such as "h-04c3a0f681de175c8") and Availability Zone (such as "us-west-2a").
1. VERIFY: Scroll down to see "Available".

   ### Launch into dedicated Host

1. Pull down the Actions list to select "Launch instance(s) onto host".
   
   That puts you in the "Launch an instance" UI.

1. Select the "macOS" icon for a list of instance types for the region. Example for Oregon:

   <img alt="AWS EC2 images for macOS release" src="https://i.pinimg.com/originals/4b/dc/aa/4bdcaa65d2d49751730ad2a1ae8587c9.jpg">

   The "macOS" icon would NOT appear if the region chosen does not carry mac1 server types.

1. If you don't want the latest MacOS operating system (Monterey at time of this writing), click the down arrow icon to select the previus macOS release.
1. In the Architecture pull-down, selec "64-bit (Mac-Arm)" for Mac2.
1. Highlight and copy the AMI ID (for example, "ami-0a413e26da8676cb7" for "(Mac-Arm)" in us-west-2).

   WARNING: The AMI ID changes when there is any change to operating system or other components.

1. For Key pair (login), click "Create new key pair" if you haven't already created a pem file. 
1. Create security group to Allow SSH traffic from "My IP".
1. In Advanced details, you cannot check "Request Spot instances".
1. Under "Tenancy", select "Dedicated host - launch this instance on a dedicated Host".

   "The selected instance type must be launched onto a Dedicated Host. To continue, choose a Dedicated Host  that has been allocated for this instance type.

1. Click the "Next: Storage" to
1. increase the size of the Root Volume from a default of 60 to 300 GiB (or whatever your capacity 
analysis runs reveal). 
1. Select Volume Type:

   * Magnetic (Standard)
   * General Purpose SSD (gp2)
   * General Purpose SSD (gp3)

   * Provisional IOPS SSD (io1)
   * Provisional IOPS SSD (io2) on new Nitro-based Amazon EC2 instances using the Scalable Reliable Datagram (SRD) networking protocol
   <br /><br />

   Provisioned IOPS (Input-Output Per Second) SSD volumes are designed for time-sensitive sustained I/O for sub-millisecond latency in database retrieval speed. Latency is a measurement of time it takes for individual packet to be transferred.

   An example of pricing for 100 GB for a month at 1000 IOPS is the total of:
   * Cost of EBS-optimized EC2 instance
   * Number of 100 GB allocated 
   * <strong>Fixed charge</strong> for the IOPS level selected during that month (rather than the variable millions of I/O requests for standard volumes).
   <br /><br />
   
   Throughput is a measurement of how much (Megabytes of) sequential data (such as a video file) can be transferred per second.

   Up to <strong>6 TiB (Terrabytes)</strong> can be selected for mac instance types.

   PROTIP: Mac server types can obtain a maximum throughput of <strong>up to 1,000 MiB/s</strong> (Megabytes per second) by specifying <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/provisioned-iops.html#EBSVolumeTypes_piops">Provisioned IOPS SSD (Solid State Drive) volumes</a> of up to 64,000 IOPS (using I/O in 16 KiB blocks). 
   This is illustrated by the orange line reaching the upper-right:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1664652178/aws_io1_throughput-1275_460_qautbp.png"><img alt="aws io1 throughput" width="1275" height="460" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1664652178/aws_io1_throughput-1275_460_qautbp.png"></a>

   The graph illustrates the impact of both IOPS selection and the size of I/O blocks.

   PROTIP: The blue line illustrates the "worst case" maximum throughut of <strong>500 MiB/s</strong> when 2,000 IOPs is specified and using larger 256 KiB blocks.
   
   BTW: Mac instances are not among EC2 instance types C7g, R5b, X2idn, and X2iedn which can use <a target="_blank" href="http://aws.amazon.com/ebs/provisioned-iops/">io2 Block Express volumes</a> which provide the maximum throughput from any instance at <strong>4,000 MiB/s</strong> (using smaller 16 KiB I/O blocks) when 256,000 IOPS is selected. See https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/provisioned-iops.html

   PROTIP: Analysis of actual and simulated peak usage is done to reveal the IOPS level needed. Specifying higher IOPS for increased capacity in many cases does not improve latency. Selection of IOPS and instance type sets a fixed expenditure per month regardless of how much was actually used.

1. Add tags per your administrator's guidelines and examples.

   Usage reports do not distinguish between io2 Block Express volumes and io2 volumes. 
   So add tags to identify the volume used is a io2 Block Express volume.

   ### Launch

1. Click the blue "Launch" for "Success! Successfully initiated launch of instance".
1. Click "Instances" and scroll down to your Instance ID.
1. Press command+R to refresh until "Status check: Initializing" changes to "passed". ???

   CAUTION: Do not click "Launch instances" in the Instances UI.

1. Return to "Dedicated Hosts".

   ### Connect

1. Click "Connect to instance".
1. Click the orange "Connect" which creates a new browser window.

   FIXME:

   Failed to connect to your instance<br />
   EC2 Instance Connect is unable to connect to your instance. Ensure your instance network settings are configured correctly for EC2 Instance Connect. For more information, see Set up EC2 Instance Connect at https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-connect-set-up.html.

1. After Instance State is "Running",
1. Highlight the Public IPv4 address to your Clipboard.
1. Proceed to <a href="#AWSMacConnect">Connect to AWS MacOS</a> below.
<br /><br />


## AWS CLI

Alternately, using AWS CLI:
https://aws.amazon.com/blogs/aws/use-amazon-ec2-m1-mac-instances-to-build-test-macos-ios-ipados-tvos-and-watchos-apps/

1. Download the <tt>malx-us-west-2.pem</tt> from the keypair (from <a href="#pemfile">above</a>).

1. Allocate hosts:

   <pre><strong>
   aws ec2 allocate-hosts --instance-type="mac1.metal" \
   --quantity=1 \
   --region="us-west-2" --availability-zone="us-west-2b" \
   --auto-placement="on" --host-recovery="off"
   </strong></pre>

   Auto-placment = on preserves the Dedicated Host for targeted launch requests,
   allow untargeted (no host ID specified) requests to succeed.
   
   When Host recovery = on, it automatically restarts instances to a new replacement host if failures are detected on the Dedicated Host.

   Response:

   <pre>{
    "hostIds": [
      "h-043de1b44a0374973"
    ]
   }
   </pre>

1. View file <tt>mapping.json</tt> for <tt>--block-device-mappings</tt>

   <pre>
   [
      {
         "DeviceName": "/dev/sda1",
         "Ebs": {
              "VolumeSize": 300,
              "VolumeType": "gp3"
         }
      }
   ]
   </pre>

1. Run the instance using the image-id associated with the region selected:

   <pre><strong>
   aws ec2 run-instances --region="us-west-2" \
   --image-id="ami-04fdffdf922f4de8e" \
   --key-name="malx-us-west-2" \
   --block-device-mappings file://mapping.json \
   --associate-public-ip-address \
   --placement="Tenancy"="host"
   </strong></pre>

<hr />

<a name="AWSMacConnect"></a>

### Connect to AWS MacOS

1. <a target="_blank" href="https://www.youtube.com/watch?v=8UqtMcX_kg0">As with other instance types</a>, use SSH to connect to your Mac instance :

   <pre><strong>
   ssh -i malx-us-west-2.pem ec2-user@35.161.43.6
   </strong></pre>

1. Once on the Mac prompt:

   <pre><strong>
   sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart \
   -activate -configure -access -on \
   -configure -allowAccessFor -allUsers \
   -configure -restart -agent -privs -all
   exit
   </strong></pre>

1. Disconnect and reconnect to enable the GUI.

   <pre><strong>
   ssh -L 5900:localhost:5900 -i malx-us-west-2.pem ec2-user@35.161.43.6
   </strong></pre>

1. Press command+spacebar for Spotlight to search for the screen-sharing app.

1. Login using your password.

1. If you selected a larger volume (above), <a target="_blank" href="https://www.youtube.com/watch?v=--BfdlnIc7Y">VIDEO</a>:

   <pre><strong>
   PDISK=$(diskutil list physical external | head -n1 | cut -d' ' -f1 )
   sudo diskutil repairDisk $PDISK
   </strong></pre>

1. Resize (which takes a few minutes):

   <pre><strong>
   APFSCONT=$(dikutil list physical external | grepApple_APFS | tr -s ' ' | cut -d ' ' -f8 )
   sudo diskutil apfs resizeContainer $APFSCONT 0
   </strong></pre>

   ### Backups and Restore

1. Consider using my <a target="_blank" href="https://github.com/wilsonmar/mac-setup/">mac-setup repo</a> to install all your utilities you want on a new Mac with a single command:

   <pre><strong>
   zsh -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/mac-setup/main/mac-setup.zsh)" -v
   </strong></pre>

1. <a target="_blank" href="https://www.youtube.com/watch?v=--BfdlnIc7Y&t=4m11s">Take a snapshot</a> backup at volume or instance level to copy across regions or accounts to create new AMI machine images.



<hr />

### macOS Jenkins & Kubernetes

1. <a target="_blank" href="https://www.youtube.com/watch?v=XWcCzqEemQQ">VIDEO: macOS Workers with Kubernetes and Jenkins</a>

   Orka orchestrates macOS in a cloud environment using Kubernetes technology on genuine Apple hardware.

   Anka is designed specifically for Mac-based CI workflows and easily integrates with existing container-based DevOps CI pipelines.

<hr />

## More on MacOS

This is one of a series on MacOS:

{% include mac_links.html %}

## More on Cloud Computing

This is one of a series on cloud computing:

{% include cloud_links.html %}
