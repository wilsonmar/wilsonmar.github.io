---
layout: post
date: "2022-09-30"
file: "cloud-macos"
title: "cloud MacOS"
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

In 2022 AWS <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/mac/">announced</a> availability of on-demand MacOS server types built on AWS Nitro System  within the AWS EC2 cloud.
<a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html">
Documentation</a>:

One of the EC2 instance types https://aws.amazon.com/ec2/instance-types/

   * mac1.metal are Mac Mini's with Intel’s 8th generation (Coffee Lake) 3.2 GHz (4.6 GHz turbo) Core i7 x86 processors 

   * mac2.metal has Apple's M1 or M2 ARM (16-core Neural Engine) processors
   <br /><br />

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th>Instance</th><th>vCPU cores</th><th>GiB memory</th><th>Gbps Network</th><th>Gbps EBS Bandwidth</th></tr>
   <tr valign="top"><td>mac1.metal</td><td>12</td><td>32</td><td>10</td><td>8</td></tr>
   <tr valign="top"><td>m2.metal</td><td>8</td><td>16</td><td>10</td><td>8</td></tr>
   </table>

Using the AWS Mananagement Console UI from your laptop:

1. Login

1. PROTIP: <a target="_blank" href="https://www.youtube.com/watch?v=8UqtMcX_kg0">As with other instance types</a>, define a Security Group using port 22 protocol TCP source <strong>your laptop's IP address</strong> (rather than 0.0.0.0/0 for just anyone, which is unsafe).

1. Create a pem key (such as "malx-us-west-2.pem" in the example below).
1. <tt>chmod 0400 malx-us-west-2.pem</tt>

1. Define an IAM role.

1. Type "EC2" in the search box.
1. Select <strong>Dedicated Hosts</strong> from the left menu.
1. Select the region (at the upper-right).
1. Select one of the instance types shown (Oregon Mac1 Dedicated Host).
1. Pull down the Actions list to select "Launch instance onto host".
1. Select "macOS Big Sur 11.2.3" among Amazon Machine Images.
1. Click "Next:" at the lower-right corner.
1. Choose an IAM role.
1. Click the "Next: Storage" to
1. increase the size of the Root Volume from a default of 60 to 300 GiB (or whatever your capacity 
analysis runs reveal). 
1. The Volume Type can be increased by selecting faster Provisioned IOPS SSD volumes can be up to <strong>6 TiB (Terrabytes)</strong> can be selected for mac instance types:

   * General Purpose SSD (gp2)
   * General Purpose SSD (gp3)
   * Provisional IOPS SSD (io1)
   * Provisional IOPS SSD (io2)
   * Magnetic (Standard)
   <br /><br />

   PROTIP: Mac server types can obtain a maxiumum throughput of <strong>up to 1,000 MiB/s</strong> (Megabytes per second) by specifying <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/provisioned-iops.html#EBSVolumeTypes_piops">Provisioned IOPS SSD (Solid State Drive) volumes</a> of up to 64,000 (using I/O in 16 KiB blocks).
   This is illustrated by the orange line reaching the upper-right:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1664652178/aws_io1_throughput-1275_460_qautbp.png"><img alt="aws io1 throughput" width="1275" height="460" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1664652178/aws_io1_throughput-1275_460_qautbp.png"></a>

   The graph illustrates the impact of both IOPS selection and the size of I/O blocks.

   PROTIP: The blue line illustrates the "worst case" maximum throughut of <strong>500 MiB/s</strong> when 2,000 IOPs is specified and using larger 256 KiB blocks.
   
   BTW: Mac instances are not among EC2 instance types C7g, R5b, X2idn, and X2iedn which can use <strong>io2 Block Express volumes</strong> which provide the maximum throughput from any instance at <strong>4,000 MiB/s</strong> (using smaller 16 KiB I/O blocks) when 256,000 MiB/s of IOPS is selected. See https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/provisioned-iops.html

1. Add tags per your administrator's guidelines and examples.
1. Select a Security Group.
1. Select the key pair.
1. Click the blue "Launch".
1. After Instance State is "Running",
1. Highlight the Public IPv4 address to your Clipboard.
1. Proceed to <a href="#AWSMacConnect">Connect to AWS MacOS</a> below.
<br /><br />


Alternately, using AWS CLI:

1. Download the <tt>malx-us-west-2.pem</tt> from the keypair.
1. Allocate hosts:

   <pre><strong>
   aws ec2 allocate-hosts --instance-type="mac1.metal" \
   --quantity=1 \
   --region="us-west-2" --availability-zone="us-west-2b" \
   --auto-placement="on" --host-recovery="off"
   </strong></pre>

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


   ### Costs?

1. The <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/mac/#Pricing">unit of billing</a> is the <a target="_blank" href="https://aws.amazon.com/ec2/dedicated-hosts/pricing/">dedicated host</a> US region price which have a <strong>24-hour minimum allocation period</strong> (required by Apple). For 

   * mac1 US per hour $0.650 x 24 = $15.6/day or $468 per 30-day month
   * mac2 US per hour $1.083 x 24 = $25.992/day or $779.76 per 30-day month
   * mac1 Mumbai per hour $1.14
   * mac2 Frankfurt per hour $1.298
   <br /><br />

   It's not available on all regions world-wide.

   AWS offers savings up to 44% off On-Demand pricing for a 3-year commitment. 
   But more that a few months, you might as well buy your own Mac at $2,500.

   Compare against <a target="_blank" href="https://www.macstadium.com/pricing">MacStadium.com</a>
   <a target="_blank" href="https://portal.macstadium.com/bare-metal-mac/create">prices for bare-metal</a>:

   * mac1 (Gen 4 Mac mini) with 32 GB for $239 per month
   * mac1 (Gen 4 Mac mini) with 64 GB for $299 per month
   * mac2 (Gen 5 Mac mini) with 16 GB for $171 per month
   <br /><br />


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
