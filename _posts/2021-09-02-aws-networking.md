---
layout: post
date: "2023-01-29"
file: "aws-networking"
title: "AWS Networking"
excerpt: "Setting AWS network VPC (Virtual Private Cloud), Security Groups, WAF, BGP, etc."
tags: [AWS, EC2, cloud, VPC]
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

This tutorial covers how to manage Security Groups and other AWS network security features to access servers and other resources within AWS.

{% include whatever.html %}

<amp-img width="650" height="483" alt="fig-aws-enterprise-v02-650x483-80"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16263954/1389b3ba-3834-11e6-8471-46d2602d3f39.jpg"></amp-img>

TODO: Add WAF. Make above diagram into a video. 

Consider the types of architectures:
– Subnets vs. VPCs and VPC peering

<a target="_blank" href="https://www.site24x7.com/tools/ipv4-subnetcalculator.html">Subnet Calculator for IPv4 at
https://www.site24x7.com/tools/ipv4-subnetcalculator.html</a>

## VPCs

   * <a target="_blank" href="https://learn.cantrill.io/courses/aws-certified-advanced-networking-specialty/lectures/31757251" title="by Cantrill">TUTORIAL</a>
   <br /><br />

Virtual Private Cloud ()

VPC Public Networking

## IP DHCP

## Transit Gateway

A transit gateway can simplify multi-VPC architectures significantly.

### Terraform

https://www.terraform.io/docs/providers/aws/r/vpc.html

https://wpengine.linuxacademy.com/amazon-web-services-2/learn-how-to-master-aws-vpc-inside-and-out/
Basic usage with tags:

<pre>
resource "aws_vpc" "main" {
  cidr_block       = "10.0.0.0/16"
  instance_tenancy = "dedicated"
&nbsp;
  tags {
    Name = "main"
  }
}</pre>

### Create VPCs using Management Console #

This chapter condenses <a target="_blank" href="http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Introduction.html">Amazon's docs on this topic</a>
and adds additional PROTIPs and NOTEs.

1. A default VPC is a pre-requisite for setting up an EC2 server instance.

0. At https://console.aws.amazon.com/vpc/

0.  Select "Your VPC".

0.  Click the "Create VPC" blue button.

0.  For Name tag, consider a naming convention to include:

    * "dev", "qa", "prod" since many use isolated VPCs for different environments.

    * "public" or "private" network access.

    <a name="NetmaskNodes"></a>

    ### NetMask Nodes

    This table of nodes for each <strong>netmask</strong> Amazon allows:

    <table border="1">
    <tr><th align="right"> # Nodes </th><th align="center"> Netmask </th><th align="left"> Subnet Mask </th></tr>
    <tr><td align="right">     14 </td><td align="center"> /28 </td><td> 255.255.255.240 </td></tr>
    <tr><td align="right">     30 </td><td align="center"> /27 </td><td> 255.255.255.224 </td></tr>
    <tr><td align="right">     62 </td><td align="center"> /26 </td><td> 255.255.255.192 </td></tr>
    <tr><td align="right">    126 </td><td align="center"> /25 </td><td> 255.255.255.128 </td></tr>
    <tr><td align="right">    254 </td><td align="center"> /24 </td><td> 255.255.255.0   </td></tr>
    <tr><td align="right">    510 </td><td align="center"> /23 </td><td> 255.255.254.0   </td></tr>
    <tr><td align="right"> 65,534 </td><td align="center"> /16 </td><td> 255.255.255.240 </td></tr>
    </table>

   For example, if all you'll need are 14 nodes, specify `/28`.
   Notice that the larger the CIDR netmask, the less hosts in the subnet.

   <a name="CIDR"></a>

   ### CIDR Ranges

0. For CIDR block, see below</a>.

   An example CIDR block looks like this:

   <pre><strong>10.0.??.0/20
   </strong></pre>

   To make naming conflicts more avoidable:

   PROTIP: Some organizations allocate the bottom half of the 255 possibilities to private and upper half to public addresses:

   * private       10.1.0.0/24 &nbsp; (< 129)
   * public &nbsp; 10.129.0.0/24 (> 128)
   <br /><br />

   PROTIP: Alternataely, use a <strong>convention</strong> replacing the "??" in the IP address above with a <strong>pre-defined</strong> set of numbers for each separate environment and architectural <strong>tier</strong>, with duplicate zones:

   | Env | Tier | IPv6 | Zone a | Zone b | Zone c | Routes |
   | :-- | :--- | --- | --- | --- | ------ |
   | Prd | ELB  | 00 |  1 |  8 | 15 | <strong>Public</strong> |
   | Prd | WEB  | 01 |  2 |  9 | 16 | Private |
   | Prd | APP  | 02 |  3 | 10 | 17 | Private |
   | Prd | Cache  | 03 |  4 | 11 | 18 | Private |
   | Prd | DB     | 04 |  5 | 12 | 19 | Private |
   | Prd | Reserved | 05 |  6 | 13 | 20 | Private |
   | Prd | Reserved | 06 |  7 | 14 | 21 | Private |
   
   | Dev | ELB  | 07 | 22 | 29 | 36 | <strong>Public</strong> |
   | Dev | WEB  | 08 | 23 | 30 | 37 | Private |
   | Dev | APP  | 09 | 24 | 31 | 38 | Private |
   | Dev | Cache  | 0A | 25 | 32 | 39 | Private |
   | Dev | DB     | 0B | 26 | 33 | 40 | Private |
   | Dev | Reserved | 0C | 27 | 34 | 41 | Private |
   | Dev | Reserved | 0D | 28 | 35 | 42 | Private |

   Each ELB (Elastic Load Balancer) is naturally on a Public subnet:
   
      <ul><tt>10.0.1.0/20</tt> in Production Availability Zone a<br />
      <tt>10.0.8.0/20</tt> in Production Availability Zone b<br />
      <tt>10.0.15.0/20</tt> in Production Availability Zone c<br />

      <tt>10.0.22.0/20</tt> in Dev Availability Zone a<br />
      <tt>10.0.29.0/20</tt> in Dev Availability Zone b<br />
      <tt>10.0.36.0/20</tt> in Dev Availability Zone c<br />
      </ul>
   
1. Use the table above to pre-define your own numbering scheme, which can also be used as shortcuts in other names.


   <a name="NonRouted"></a>

   Address ranges for private (non-routed) use (per <a target="_blank" href="http://info.internet.isi.edu/in-notes/rfc/files/rfc1918.txt">RFC 1918</a>):

   * 10.0.0.0 -> 10.255.255.255     within "Class A" addresses 1 -> 126
   * 172.16.0.0 -> 172.31.255.255   within "Class B" addresses 127 -> 191
   * 192.168.0.0 -> 192.168.255.255 within "Class C" addresses 192 -> 223
   <br /><br />

   <strong>REMEMBER: The CIDR block for a default VPC is always 172.31.0.0/16.</strong>

   PROTIP: Use addresses from different IP classes. For example, 
   * use VPC CIDR 10.0.0.0/16 for production 
   * use VPC CIDR 172.16.0.0/16 for DR regions
   <br /><br />

   PROTIP: Carefully predict how many nodes each subnet might need.
   Once assigned, AWS VPC subnet blocks can’t be modified.
   If you find an established VPC is too small, you’ll need to terminate all of the instances of the VPC, delete it, and then create a new, larger VPC,
   then instantiate again.

   #### Bucket of Candies Analogy #

   If you must know why, here is my analogy (best for kinesthetic learners):
   When we say a sports star makes a "7 figure salary", we figure out what that means with a table like this:

   | Figure:   |         7 |       6 |      5 |     4 |   3 |  2 |  1 |
   | --------- | --------: | ------: | -----: | ----: | --: | -: | -: |
   | # Values: | 1,000,000 | 100,000 | 10,000 | 1,000 | 100 | 10 |  1 |

   Now imagine a bucket for each figure level, a different size bucket containing candies of various colors and patterns, unique one for each possible value.
   People earning 7 figures can choose from the bucket holding a million possible values.

   If we add up the values (colors) possible in the right-most 3 buckets,
   we would have 100 + 10 + 1 = 111 possibilities.

   #### Counting in Base 2 #

   Instead of the way bankers do arithmetic
   where ten $1 bills is equivalent to a 10 dollar bill (called "base 10" or decimal calculation),
   computers count using "base 2" or binary arithmetic using 0's and 1's.
   So each of their "buckets" have a different number of possibility values:

   | Position:      |   8 |   7 |   6 |   5 |   4 |   3 |   2 |   1 |
   | -------------- | --: | --: | --: | --: | --: | --: | --: | --: |
   | # Values:      | 254 | 128 |  64 |  32 |  16 |   8 |   4 |   2 |
   | Cumulative possible addresses: | 510 | 254 | 126 |  62 |  30 |  14 |   6 |   2 |

   If we add up the possible addresses just from the <strong>right-most</strong> 3 buckets (from right to left),
   we would have 2 + 4 + 8 = 14 possibilities.

   Look back above at <a href="#NetmaskNodes">the table of nodes</a>,
   we see 14 possibilities can be obtained from a specification of 28 bits.

   This is all one needs to know to use AWS VPC.

   But if you would like to know how we get 3 buckets from the 28 bit specification,
   read on.

   #### IP address octets #

   IPV4 subnet addresses such as "127.10.138.128" are 4 sets of there are 32 "buckets" separated by dots into four 8 bit "octets":
   <amp-img width="600" height="72" alt="fig ip octets base 10 and 2-600x72.jpg"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16169053/db2765f8-34dc-11e6-8a62-68de3f320899.jpg"></amp-img>
   The 127 in the figure above is obtained by adding the base 10 value of each bit "bucket".
   Looking at a single octet of 8 bits:

   | "Bucket" position:                 |   8 |   7 |   6 |   5 |   4 |   3 |   2 |   1 |
   | ----------------                   | --: | --: | --: | --: | --: | --: | --: | --: |
   | Base 10 value of each bucket:      | 128 |  64 |  32 |  16 |   8 |   4 |   2 |   1 |
   | Cumulative base 10 (left to right) | 255 | 127 |  63 |  31 |  15 |   7 |   3 |   1 |
   | Base 2 for 127 in base 10          |   1 |   1 |   0 |   1 |   1 |   0 |   0 |   1 |
   | Cumulative base 10 (left to right) | 217 |  89 |  25 |  25 |   9 |   1 |   1 |   1 |

   To translate a base 2 number of all 1's ("1111111") to a base 10 value of 255
   we accumulate base 10 values for each "bucket", left to right.

   To translate the Base 2 set of 1's and 0's to a base 10 number of 217,
   we accumulate the equivalent base 10 number at each position where there is a 1.

   Now let's look at the relationship between /28 and the "255.255.255.240" <strong>subnet mask</strong> associated with the /28
   in the <a href="#NetmaskNodes">table of nodes</a> above.

   The "240" base 10 number in the right-most quartet is equivalent to "11110000" in base 2.

   | "Bucket" position:                 |   8 |   7 |   6 |   5 |   4 |   3 |   2 |   1 |
   |  ----------------                  | --: | --: | --: | --: | --: | --: | --: | --: |
   | Base 10 value of bucket:           | 128 |  64 |  32 |  16 |   8 |   4 |   2 |   1 |
   | Base 2 for 240 in base 10          |   1 |   1 |   1 |   1 |   0 |   0 |   0 |   0 |
   | Cumulative base 10 (left to right) | 240 | 122 |  48 |  16 |   0 |   0 |   0 |   0 |

   Putting the three 255 and 240 together we get a continuous set of 1's followed by four 0's:

      11111111.11111111.1111111.11110000

   * The 1's "buckets" on the left side are used to address <strong>subnets</strong> managed by Amazon.

   * The 0's buckets on the right side are used to address your individual nodes.

   REMEMBER: Although there are four 0's buckets, only 3 are used to specify node addresses because
   <strong>one digit (two values) are reserved for network broadcast use</strong>
   (addresses containing all 0's and all 1's).

   More on CIDR (Classless Inter-Domain Routing), aka "supernetting":

   * https://www.youtube.com/watch?v=POPoAjWFkGg
     IP Subnetting from CIDR Notations (getting network and broadcast addresses).

   * http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html

   * VLSM (Variable Length Subnet Mask)

   * https://cloudacademy.com/amazon-web-services/amazon-vpc-networking-course/build-and-configure-a-nat-instance.html

Do you really know the above? Take <a target="_blank" href="https://learning.oreilly.com/certifications/9780136757078/">Pearson's IP Subnetting exam on OReilly.com</a> [subscription required]


   <a name="CF-VPC"></a>

   ### Automatically create VPC using CloudFormation #

   VPCs are really software-defined networks (SDN).


   {% highlight text %}
     "Resources" : {
        "VPC" : {
         "Type" : "AWS::EC2::VPC",
         "Properties" : {
           "CidrBlock" : "10.0.0.0/16"
         }
       },

       "InternetGateway" : {
         "Type" : "AWS::EC2::InternetGateway",
         "Properties" : {
         }
       },

       "AttachGateway" : {
          "Type" : "AWS::EC2::VPCGatewayAttachment",
          "Properties" : {
            "VpcId" : { "Ref" : "VPC" },
            "InternetGatewayId" : { "Ref" : "InternetGateway" }
          }
       },
   {% endhighlight %}

   In the CF JSON to define a VPC, CF automatically populates the
      "VpcId" : { "Ref" : "VPC" },

      REMEMBER: There is one VPC per Availability Zone.

   A single Gateway serves all VPCs because that is the address
   the public DNS resolves corporate host names to.


   <a name="StaticIPs"></a>

   ## Static Elastic IPs #

   NOTE: The use of static IP addresses in configurations in EC2
   can be an annoyance to some and a comfort to others.

   Historically, working on a physical servers involves use of specific static IPs associated with particular purposes.
   External monitoring server was manually configured with the IP assigned to each machine.
   This also creates time pressure (panic) to get specific servers up and running.
   This led to pressure for servers to be patched rather than risking losing configurations during rebuilds.

   Static IPs needed to be protected as secrets because of their long-lived nature in traditional server environments.

   A "paradigm shift" in thinking is necessary when moving to the "cloud" because there IP address assignments can be transitory ephemeral.
   When a server dies in a "12 factor app" environment,
   additional servers can be brought up automatically by auto-scaling from a common public pool.

   AWS provides static IPs in their <strong>Elastic IP</strong> service.

      WARNING: AWS charges $1 per month for reserved static IPs that are not assigned to a running instance.

   PROTIP: Long-lived elastic static IPs are useful to
   avoid shared IPs that may have been black-listed due to abuse by others.

   Resources on this topic:

      * https://launchbylunch.com/posts/2014/Jan/29/aws-tips/
      * https://wblinks.com/notes/aws-tips-i-wish-id-known-before-i-started/


<a name="DNS"></a>

## DNS #

DNS servers maintain a database of host names to IP addresses.

Amazon's DNS service is called Route 53 because the default part for DNS
servers is TCP 53 / UDP 53.

Its competitors include Dyn.com, GoDaddy, etc.

<a target="_blank" href="https://github.com/acantril/learn-cantrill-io-labs/tree/master/aws-hybrid-dns">DIAGRAM: Advanced Demo - Hybrid DNS between AWS and Simulated On-Premises</a>


<a name="RoutingRules"></a>

## Routing Rules #

AWS VPC Routing Rules are what makes subnets public or private.

## ELB vs. ALB

   * <a target="_blank" href="https://wilsonmar.github.io/loadbal/">WilsonMar on Load Balancers</a>
   * <a target="_blank" href="https://learn.cantrill.io/courses/aws-certified-advanced-networking-specialty/lectures/31664425" title="by Cantrill">VIDEO</a>:
   <br /><br />




<a name="NAT"></a>

## AWS NAT #

0. Launch an EC2 instance of a Community AMI built for NATting. Search for "NAT".

   NAT provides IP address assignment and DNS Proxy name resolution
   services to internal network clients.

   A NAT server allows outbound traffic to the <strong>external internet</strong>.
   By default, a NAT server allows inbound traffic only through connections
   already established by an internet host (typically port 80/443).

   To access traffic from a special port from an external host:

   * If the public interface of the NAT server is configured with a single IP address,
   add a Special Port (for Windows, in the Routing and Remote Assess MMC console).

   * If the public interface of the NAT server is configured with multiple IP addresses,
   make address reservations to map specific external addresses
   to specific internal addresses.

   Selection of 006 DNS Servers option at the scope level overrides the selection at the server level.

   For security, define some servers to only make outbound calls to
   the internet (through the <a href="#NAT">NAT server</a>).

0. PROTIP: A NAT instance provide whatever capacity a single AMI provides,
   so it should be configured with CloudWatch alarms and traffic metrics.

0. Prepare before need a script to manually
   <a target="_blank" href="https://aws.amazon.com/articles/2781451301784570/">
   to manage Subnet failover to another NAT in this Amazon article</a>.

<a name="NATGateway"></a>

### NAT Gateway #

   A <strong>NAT Gateway</strong> is used for private subnets to reach the public internet.

   An <strong>AWS NAT Gateway</strong> SaaS supports <strong>bursts of up to 10Gbps</strong>. NAT Gateways are managed by AWS, so they don't have traffic metrics nor CloudWatch alarms, plus there is a <strong>per-hour</strong> charge for AWS to operate the NAT Gateway.


   A NAT instance can be configured for port forwarding, bastion hosts.

<a name="Bastion"></a>

### Bastion host #

Bastion hosts ???

PROTIP: Up to 5 different security groups can be applied to a single resource.

Only one NACL can be associated with a subnet, to deny specific IP addresses.
Separate rules are for inbound and outbound.

PROTIP: NACL rules are numbered to sepcify sequence.
To allow for insertion, leave gaps in the numbers.
For example, create the first two with 100, 200, etc.
so you can later add 150 between 100 and 200.

PROTIP: Remember that EC2 instances by default have Networking > Change Source/Dest. Check ON.
But NAT instances require OFF or they wont' show up on VPC Route Tables.


<a name="VPN"></a>

## VPN #

PROTIP: When an enterprise development team first begins working with an external vendor or customer,
it would likely begin by using a private VPN while the project operates in "stealth mode".

Configure <strong>Site to Site</strong> VPN to securely transfer data among Amazon VPCs in different regions or between Amazon VPC to your on-premise data center.

   NOTE: Dual ports are usually configured on VPN hardware.

https://app.pluralsight.com/player?course=aws-certified-sysops-admin-associate&author=elias-khnaser&name=aws-certified-sysops-admin-associate-m5&clip=3&mode=live
Customer Gateway.

   It's attached to a VPN.

<a name="Peering"></a>

## VPC Peering #

VPC peering enables organizations to link two distinct VPCs together, allowing assets in one network to talk to assets in another. 

Peering connections were introduced to route traffic <strong>between two VPCs (AZs)</strong> in the same region using <strong>private</strong> (rather than public) IP addresses.
This makes it like they are communicating as if they are within the same network.

Nodes in the same region can reference each other logically using the same peer SG (Security Group), which improves performance.

VPC peering is <strong>not transitive</strong> —- it must be specifically allowed for each VPC peered together.

Nevertheless, IP addresses must not overlap among VPCs.

Peering is neither a gateway nor a VPN connection,
so doesn't invoke separate physical hardware and the "single point of failure" nor bandwidth bottlenecks.

One useful use case is for more secure interconnection among Active Directory, Exchange, and other common business services:

   * more secure communication among business units/teams
   * stronger integration of CRM, HRMS, file sharing
   * tighter integrated access of core <strong>suppliers</strong> systems
   * provide monitoring and management of <strong>customer</strong> AWS resources

0. Setup Peering in VPC

0. Accept the Peering request on the target VPC.


## ACLs #

Access Control Lists

  * Create Internet outbound allow and deny network ACL in your VPC.
   First network ACL: Allow all the HTTP and HTTPS outbound traffic on public internet facing subnet.
   Second network ACL: Deny all the HTTP/HTTPS traffic. Allow all the traffic to Squid proxy server or any virtual appliance.
   http://techlib.barracuda.com/display/BNGv54/How+to+Deploy+the+Barracuda+NG+Firewall+in+an+Amazon+Virtual+Private+Cloud


## NACLs #

Negative ACLS.

Block all the inbound and outbound ports. Only allow application request ports.

These are stateless traffic filters that apply to all traffic inbound or outbound from a Subnet within VPC. AWS recommended Outbound rules

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Security Group </th><th> NACLs </th></tr>
<tr valign="top"><td> Applicable to instances </td><td> Operate on VPC subnets </td></tr>
<tr valign="top"><td> Only supports Allow rules (layered on a default Deny)</td><td> Support both allow and deny rules</td></tr>
<tr valign="top"><td> Are stateful </td><td> Are NOT stateful </td></tr>
<tr valign="top"><td> Are considered in their entirety before traffic is allowed</td><td> Are processed in numerical order </td></tr>
<tr valign="top"><td> Must be associated with an instance to apply </td><td> Apply automatically to all instances in a subnet</td></tr>
</table>

See http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_NACLs.html





## Direct Connect (DX)

To Direct Connect to a customer's Router
in each DX Location, there is a port on a DX Router which is charged <strong>per hour</strong> of use.
There are 1GB, 10GB, and 100GB wide pipes. The price is the same globally except for a few regions.

Outgoing data transfer charges apply, too, but cheaper than going through the public internet.

If the DX Location is in a different region, a <strong>DX Gateway</strong> is needed.

## Resources #

* Add Intrusion Prevention or Intrusion Detection virtual appliances to secure protocols and to take preventive/corrective action.

* Assign
* Configure <strong>Privileged Identity</strong> access management solutions to monitor and audit access by Administrators of your VPC.

* Add anti-virus for cleansing specific EC2 instances inside a VPC. Trend micro offers a product for this.

* http://harish11g.blogspot.com/2015/06/best-practices-tips-on-amazon-web-services-security-groups-aws-security-managed-services.html

AMS needs to set limits
http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_Limits.html


## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
