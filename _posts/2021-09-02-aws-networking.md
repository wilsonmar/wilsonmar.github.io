---
layout: post
date: "2023-02-05"
file: "aws-networking"
title: "AWS Networking"
excerpt: "Setting up VPC (Virtual Private Cloud), IPAM, DNS, Security Groups, WAF, BGP, etc. using CLI, GUI, Terraform, Cloud Formation"
tags: [AWS, EC2, cloud, VPC, Terraform]
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

Consider the types of architectures:
– Subnets vs. VPCs and VPC peering

TODO: Add WAF. Make above diagram into a video. 

## Terraform & CDK & CF

This article describes use of Terraform and CDK as well as Cloud Formation to create resources within AWS.


<a name="RoutingRules"></a>

## Routing Rules #

AWS VPC Routing Rules are what makes subnets public or private.

## VPCs (Virtual Private Cloud)

   * https://aws.amazon.com/vpc/faqs/
   * <a target="_blank" href="https://learn.cantrill.io/courses/aws-certified-advanced-networking-specialty/lectures/31757251" title="by Cantrill">TUTORIAL</a>
   <br /><br />


PROTIP: AWS creates a default subnet for each region.

1.  Delete the default VPC. It doesn't cost anything.

    BLAH: At time of writing, AWS auto-assigns public IPv4 address.

2.  "Create VPC".

3.  Type Security Groups over "Search" at the top of every AWS Console GUI page.
4.  Click "Security groups" among "Features of EC2", which means you see "Security Groups" on the left menu under EC2.

    What makes a subnet public is a <strong>route table</strong> associated with each subnet created.

5.  View Route Table feature.  
    There is a Main route table designated as Yes.
6.  Rename the Main "Public-IGW".

    Subnets: Outbound rules: NACL (Network ACL) :

7.  The rule which Allow/Deny Source 0.0.0.0/0 - Rename it "AllowEverything"


### VPC Terraform

The provider for VPC is at
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

1.  A default VPC is a pre-requisite for setting up an EC2 server instance.

2.  At https://console.aws.amazon.com/vpc/

3.  Select "Your VPC".

4.  Click the "Create VPC" blue button.

5.  PROTIP: For Name tag, consider a naming convention that specifies the decisions associated with each VPC, such as:

    <tt>dev-public-v6-ipam1</tt>

    The above example consists of these components:

    a. <a href="#Scopes">"public" or "private" network access <strong>scope</strong></a>.

    b. "prod", "<a href="">DR</a>", "non-prod", "dev", "qa", etc. <strong>pool</strong>

    c. <a href="#IPv4v6">"v4" or "v6"</a>

    d. "<a href="#IPAM">ipam</a> or "<a href="#manu">manu</a>" (manual management) of IP Addresses

    The name reflects decisions selected on these fields:

    <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1675624855/networking-cidr-350x382_mzwpyd.jpg"><img alt="networking-cidr-350x382.jpg" width="350" height="380" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1675624855/networking-cidr-350x382_mzwpyd.jpg"></a>

    <a name="IPv4v6"></a>

    ### IPv4 or IPv6 CIDR block?

    Data packets are routed across the internet between devices addressed (sorta like telephone numbers):
    * IPv4 (Internet Protocol version 4) addresses are in the form of 99.48.227.227<br />
    * IPv6 (Internet Protocol version 6) addresses are in the form of ABCD:0000:3238:DFE1:0063:0000:0000:FEFB<br />
    <br /><br />

    In an IPv4 address, the 4 sets of <strong>decimal</strong> numbers (between 4 dots) called an octet (of four). Together they total 32 binary bits (2^32) which can have 4.29 billion variations, each a specific IP address. All the IP addresses have now been assigned, leading to the address shortage issues we face today.

    IPv6 addresses are represented by 8 double <strong>hexadecimal</strong> numbers (such as ABCD) between colons totaling 128-bits (2^128) or 340,282,366,920,938,463,463,374,607,431,768,211,456 addresses -- 1,028 times more than IPv4. 
    
    IPv4 has not been completely deprecated because not all devices and software have been upgraded to use IPv6 enhancements:

    * SNMP does not support IPv6
    * IBM implementation of QoS (Quality of Service) to request packet priority and bandwidth for TCP/IP applications does not support IPv6, which uses "flow labeling"
    * IPv6 no longer supports VLSM (Variable Length Subnet Mask) jumbogram
    * Simpler header format (fixed 40 bytes vs. 20-60 bytes) for less bandwidth usage
    * Faster performance from less overhead processing: Instead of IPv4 options placed in the header, IPv6 options are put into a separate and extended header which are not be processed until a router is specified.
    * Flexible options and extensions: IPv6 (up to 40 bytes for IPv4 options) and new options can be introduced, such as support for IP layer security (IPSEC), jumbogram, mobile IP, etc.
    * Built-in IPSEC in the protocol for privacy 

    * The large address space allows every device to have its own IP address rather than be hidden behind a NAT (Network Address Translation) router.
    * DHCPv6 (RFC 8415) with auto renumber address configuration using DHCP servers/relays ff02::1:2.
    * IP to MAC resolution using Multicast Neighbor Solicitation NDP (Neighbour Discovery Protocol) <a target="_blank" href="https://docs.aws.amazon.com/whitepapers/latest/ipv6-on-aws/brief-ipv6-overview.html">instead of Broadcast</a> ARP
    * Built-in authentication support to make end-to-end connection integrity achievable
    * Multicast and anycast message transmission scheme is available (instead of broadcast)
    * No more private address collisions
    <br /><br />

    <a name="awsvpc"></a>

    <a target="_blank" href="https://docs.aws.amazon.com/whitepapers/latest/ipv6-on-aws/amazon-vpc-design.html">DOC</a>: To enable dual-stack operation for your VPC, associate up to five IPv6 CIDR block ranges per VPC:
    <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1675688112/aws-dual-stack-VPC-707x687_djyygy.png"><img alt="aws-dual-stack-VPC-707x687.png" width="707" height="687" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1675688112/aws-dual-stack-VPC-707x687_djyygy.png"></a>


    <a name="IPAM"></a>

    ### IPAM

    <a target="_blank" href="https://aws.amazon.com/blogs/networking-and-content-delivery/architect-dual-stack-amazon-vpc-with-multiple-ipv6-cidr-blocks/">IPAM (IP Address Manager)</a> is an AWS VPC feature that <strong>automatically allocate</strong> CIDRs to VPCs from <strong>pools</strong> of CIDRs it has <strong>provisioned</strong> into public and private <strong>scopes</strong> -- to make it easier to plan, track, and monitor IP addresses for AWS workloads, without causing IP address overlap or conflict. 
    
    Before individuals can specify that IP addresses be allocated automatically by selecting:

    <strong>IPAM-allocated CIDR block</strong>

    1. The enterprise needs to be willing to pay for <a target="_blank" href="https://aws.amazon.com/vpc/pricing/">IPAM costs</a> charged for each active IP under its management, at $0.1944 per month ($0.00027 an hour x 24 x 30). Charges go to the $AWS_IPAM_ACCT specified because IP allocation can cross multiple accounts and VPCs based on configurable business rules. Thus the need for central administration.

    2. <a target="_blank" href="https://www.youtube.com/watch?v=YP69a9WRobI">VIDEO</a>: Form a central asset management team with <strong>IPAM delegated administrators</strong> named within AWS. <a target="_blank" href="https://docs.aws.amazon.com/vpc/latest/ipam/what-it-is-ipam.html">DOCS</a>: The centralization of CIDR management enables allocation requests to be centrally monitored and audited -- <strong>alerts</strong> about IP address overlap, IP address depletion, etc. can be received by a designated team email. IPAM automatically retains IP address monitoring data for up to three years. The team performs the above on the <strong>IPAM dashboard</strong> at 

       <a target="_blank" href="https://console.aws.amazon.com/ipam/">https://console.aws.amazon.com/ipam</a> routes to a region-specific site such as:<br />
       https://us-west-2.console.aws.amazon.com/ipam/home?region=us-west-2#Home

       IPAM enables Administrators to reuse/reallocate IP addresses across multiple unconnected networks.
    
    3. For cross-account access, define IAM roles using Terraform iam_assumable_role or iam_assumable_roles submodules in "resource AWS accounts (prod, staging, dev)" and IAM groups and users using iam-group-with-assumable-roles-policy submodule in "IAM AWS Account" to setup access controls between accounts. See https://docs.aws.amazon.com/vpc/latest/ipam/choose-single-user-or-orgs-ipam.html

    4. IPAM Delegated Administrators define a <strong>profile</strong> containing the business rules for allocating CIDRs among the two scopes from pools.
   
    5. To create <strong>a public and a private scope</strong> for a single VPC network within a particular operating Region, instead of <a target="_blank" href="https://us-west-2.console.aws.amazon.com/ipam/home?region=us-west-2#CreateIpam">using the Console GUI</a>, use this CLI command:
    
       <pre>AWS_REGION=us-west-2
       AWS_OPERATING_REGIONS=us-west-2
       AWS_IPAM_POOL="prd-ipam"
       AWS_IPAM_ACCT="projA-ipam-acct"
       &nbsp;
       aws ec2 create-ipam --description "$AWS_IPAM_POOL" \
       --region "$AWS_REGION" \
       --operating-regions RegionName="$AWS_OPERATING_REGIONS" \
       --profile "$AWS_IPAM_ACCT"
       </pre>

       Alternately, use the <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/operation-list-ipam.html">IPAM API</a> from a custom program.

       For easy repeatability, use the Terraform Registry<br />
       https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest
    
    6. Define CIDRs within each top-level <strong>pools</strong> under the 2 IPAM scopes (public and private). 
   
       An "allocation" can be a CIDR assignment from an IPAM pool to another resource or <a target="_blank" href="https://docs.aws.amazon.com/vpc/latest/ipam/tracking-ip-addresses-ipam.html">another IPAM pool</a>.
    
       See https://docs.aws.amazon.com/vpc/latest/ipam/manually-allocate-ipam.html


6.  If you don't have <a href="#IPAM">IPAM</a> setup, you can choose 
    
    <a name="AmazonIPv6"></a>

    <strong>Amazon-provided IPv6 CIDR block</strong>

    <a target="_blank" href="https://aws.amazon.com/about-aws/whats-new/2023/01/amazon-provided-contiguous-ipv6-cidr-blocks/">Announced in January 2023</a>,
    <strong>IPv6 CIDR owned by me</strong> is Bring your own IP addresses (BYOIP) range which a customer organization has purchase from a Regional Internet Registry (RIR).


    <a name="manu"></a>

    ### Manual CIDR assigment

6.  If you don't have <a href="#IPAM">IPAM</a> setup, choose <strong>IPv4 For CIDR manual input</strong>

    REMEMBER: CIDRs are called <strong>Masks</strong>.
    The larger number after the slash, the more IP addresses it specfies.
    <strong>16 is the largest mask allowed</strong>.

    When dealing with networks, a CIDR is always requested. 

    Each CIDR defines a contiguous range of IP address.

    CIDR specs are what keeps each IP address within a single subnet. Manual allocations can result in  misconfigurations. So many teams follow the same plan for allocating CIDRs.

    <a name="Scopes"></a>

    ### Public vs. Private Scope

    There are separate scopes of IP addresses for public vs. private use.

    <a name="NonRouted"></a>

    <table border="1" cellpadding="4" cellspacing="0">
    <tr><th> Public Routed Address</th><th>Private Non-Routed Address</th></tr>
    <tr valign="top"><td> Connected with the Internet network
       </td><td> Connected with a LAN
       </td></tr>
    <tr valign="top"><td> Publicly registered with Network Information Center
       </td><td> Is not registered with Network Information Center
       </td></tr>
    <tr valign="top"><td> Requires a Modem to connect to a network
       </td><td> Requires a network switch to connect to a network
       </td></tr>
    <tr valign="top"><td> Assigned by the ISP to identify a home or business network from the outside	
       </td><td> Allotted by the client and are given by the client’s switch such as a Gigabit Ethernet switch
       </td></tr>
    </table>


    <a name="NATGateway"></a>

    ### NAT Gateway #

    A <strong>NAT Gateway</strong> is used for private subnets to reach the public internet.

    An <strong>AWS NAT Gateway</strong> SaaS supports <strong>bursts of up to 10Gbps</strong>. NAT Gateways are managed by AWS, so they don't have traffic metrics nor CloudWatch alarms, plus there is a <strong>per-hour</strong> charge for AWS to operate the NAT Gateway.

    A NAT instance can be configured for port forwarding, bastion hosts.

    <a name="Bastion"></a>

    ### Bastion host #

    NOTE: Bastion Hosts

    PROTIP: Instead of the expense of standing up Bastion Hosts, consider HashiCorp Boundary.


    <a name="Avoid"></a>

    ### IP Ranges commonly used

    PROTIP: Ranges used by specific cloud vendors:
    * 10.0.0.0/16 or 2001:db8:1234:1a00::/56 by AWS (see <a href="#awsvpc">diagram</a>)
    * 10.128.0.0./9 Google
    * 172.31.0.0/16 Azure
    <br /><br />

    <strong>REMEMBER: The CIDR block for a default AWS VPC is always 172.31.0.0/16???</strong>

    Ranges used by specific geographies:
    * 192.168.10.0/24
    * 192.168.15.0/24 London
    * 192.168.20.0/24 New York
    * 192.168.25.0/24 Seattle
    <br /><br />


    ### Subnet Calculators
    
    * <a target="_blank" href="https://subnet-calculator.com/">subnet-calculator.com</a> [has pop-up ads]
    * <a target="_blank" href="https://www.site24x7.com/tools/ipv4-subnetcalculator.html">https://www.site24x7.com/tools/ipv4-subnetcalculator.html</a>
    * https://calculator.net/ip-subnet-calculator.html
    <br /><br />

    <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1675611924/networking-cidr-65534-433x314_cuhkfc.jpg"><img alt="networking-cidr-65534-433x314.jpg" width="433" height="314" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1675611924/networking-cidr-65534-433x314_cuhkfc.jpg"></a>


    <a name="NetworkClasses"></a>

    ### Classes

    Address ranges for private (non-routed) use (per <a target="_blank" href="http://info.internet.isi.edu/in-notes/rfc/files/rfc1918.txt">RFC 1918</a>):
    * 10.0.0.0 -> 10.255.255.255     within "Class A" addresses 1 -> 126
    * 172.16.0.0 -> 172.31.255.255   within "Class B" addresses 127 -> 191
    * 192.168.0.0 -> 192.168.255.255 within "Class C" addresses 192 -> 223
    <br /><br />
    
    PROTIP: Consider this convention:
    * Use Class A VPC CIDR 10.0.0.0/16 for <strong>production</strong> regions
    * Use Class B VPC CIDR 172.16.0.0/16 for <strong>DR (Disaster Recovery)</strong> regions
    <br /><br />

    REMEMBER: 16 is the largest CIDR range allowed by AWS.

    PROTIP: Carefully predict how many nodes each subnet might need.
    Once assigned, AWS VPC subnet blocks can’t be modified.
    If you find an established VPC is too small, you’ll need to terminate all of the instances of the VPC, delete it, and then create a new, larger VPC,
    then instantiate again.

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

    Notice that the larger the CIDR netmask, the less hosts in the subnet.

    If all you'll need are 14 nodes, specify `/28`.
    
    REMEMBER: There are actually 16 addresses, but the first and last address are reserved.
    * subnet+1 are for default GW via DHCP Option Set
    <br /><br />

    PROTIP: To make naming conflicts more avoidable, use a standard naming convention:
    of top and bottom half of the 255 possibilities allocated to private and upper half to public addresses:
       * private       10.1.0.0/24 &nbsp; (< 129)
       * public &nbsp; 10.129.0.0/24 (> 128)
       <br /><br />

    ### IP Subnets

    PROTIP: In the subnet for each Availability Zone, replace the "??" in the IP address with a <strong>pre-defined</strong> set of numbers associated with each separate environment and architectural <strong>tier</strong>. For example, if the VPC is assigned this CIDR:

    <pre><strong>10.1.??.0/20
    </strong></pre>

    The ?? is replaced with one of the numbers within an (Availability) Zone column:

    | Env | Tier | IPv6 | Zone a | Zone b | Zone c | Future | Routes |
    | :-- | :---     | -- | --: | --: | --: | --: | -----: |
    | Prd | ELB-?    | 00 |  1 | 11 | 21 | 31 | <strong>Public</strong> |
    | Prd | WEB-?    | 01 |  2 | 12 | 22 | 32 | Private |
    | Prd | APP-?    | 02 |  3 | 13 | 23 | 33 | Private |
    | Prd | Cache-?  | 03 |  4 | 14 | 24 | 34 | Private |
    | Prd | DB-?     | 04 |  5 | 15 | 25 | 35 | Private |
    | Prd | Res-?    | 05 |  6 | 16 | 26 | 36 | Private |
    | Prd | Res-?    | 06 |  7 | 17 | 27 | 37 | Private |
    | --- | -----    | -- | -- | -- | -- | -- | ------- |
    | Dev | ELB-?    | 41 | 51 | 61 | 71 | 81 | <strong>Public</strong> |
    | Dev | WEB-?    | 42 | 52 | 62 | 72 | 82 | Private |
    | Dev | APP-?    | 43 | 53 | 63 | 73 | 83 | Private |
    | Dev | Cache-?  | 44 | 54 | 64 | 74 | 84 | Private |
    | Dev | DB-?     | 45 | 55 | 65 | 75 | 85 | Private |
    | Dev | Res-?    | 46 | 56 | 56 | 76 | 86 | Private |
    | Dev | Res-?    | 47 | 57 | 57 | 77 | 87 | Private |

    Expanded, each ELB (Elastic Load Balancer) is naturally on a Public subnet:
   
    <tt>10.16.1.0/20</tt> in Production Availability Zone a<br />
    <tt>10.16.8.0/20</tt> in Production Availability Zone b<br />
    <tt>10.16.15.0/20</tt> in Production Availability Zone c<br />

    <tt>10.16.22.0/20</tt> in Dev Availability Zone a<br />
    <tt>10.16.29.0/20</tt> in Dev Availability Zone b<br />
    <tt>10.16.36.0/20</tt> in Dev Availability Zone c<br />
    <br />

    The "IPv6" column is entered in the <tt>___</tt> below in the VPC GUI "IPv6 CIDR block" field such as:

    <tt>2600:1f18:10e8:73___;;/64</tt>   
   

    ### VPC Subnets

7.  In the AWS Console GUI VPC Subnets, select each subnet defined above.
8.  Click "Actions" menu to select "Edit subnet settings".
9.  Check "Enable auto-assign IPv6 addresses". 
10. Scroll to click the orange Save.

    PROTIP: If the VPC is defined using Terraform instead of the GUI, the above can be coded one time for subsequent repeated use.

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

   Historically, working on a physical servers involves use of specific static IPs associated with a particular purpose.
   External monitoring servers were manually configured with the IP assigned to each machine.
   This also creates time pressure (panic) to get specific servers up and running, which led to pressure for servers to be patched rather than risking losing configurations during rebuilds.

   SECURITY PROTIP: Static IPs needed to be protected as secrets because of their long-lived nature in traditional server environments.

   A "paradigm shift" in thinking is necessary when moving to the "cloud" because there IP address assignments can be transitory/ephemeral and thus more difficult to hack.
   When a server dies in a "12 factor app" environment,
   additional servers can be brought up automatically by auto-scaling from a common public pool.

   AWS provides static IPs in their <strong>Elastic IP</strong> service, albeit for a charge of $1 per month for each reserved static IP not assigned to a running EC2 instance.

   PROTIP: Long-lived elastic static IPs are useful to
   avoid shared IPs that may have been black-listed due to abuse by others.

   Resources on this topic:
      * https://launchbylunch.com/posts/2014/Jan/29/aws-tips/
      * https://wblinks.com/notes/aws-tips-i-wish-id-known-before-i-started/

<hr />

<a name="DNS"></a>

## DNS Route 53 #

DNS servers maintain a database to translate host names to IP addresses.

Amazon's public DNS service is called <strong>Route 53</strong> because the default part for DNS
servers is TCP 53 / UDP 53.

Its competitors include Dyn.com, GoDaddy, etc.

<a target="_blank" href="https://github.com/acantril/learn-cantrill-io-labs/tree/master/aws-hybrid-dns">DIAGRAM: Advanced Demo - Hybrid DNS between AWS and Simulated On-Premises</a>


## ELB vs. ALB

   * <a target="_blank" href="https://wilsonmar.github.io/loadbal/">WilsonMar on Load Balancers</a>
   * <a target="_blank" href="https://learn.cantrill.io/courses/aws-certified-advanced-networking-specialty/lectures/31664425" title="by Cantrill">VIDEO</a>:
   <br /><br />




<a name="NAT"></a>

## AWS NAT #

Only one NACL can be associated with a subnet, to deny specific IP addresses.
Separate rules are for inbound and outbound.

PROTIP: NACL rules are numbered to sepcify sequence.
To allow for insertion, leave gaps in the numbers.
For example, create the first two with 100, 200, etc.
so you can later add 150 between 100 and 200.

PROTIP: Remember that EC2 instances by default have Networking > Change Source/Dest. Check ON.
But NAT instances require OFF or they wont' show up on VPC Route Tables.

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



<hr />

## IP DHCP

<a target="_blank" href="https://learn.cantrill.io/courses/1723753/lectures/39153001">VIDEO</a>:
The Dynamic Host Configuration Protocol is used for auto-configuration of network resources.

When a VPC is created, AWS automatically create a set of DHCP options and associates them with the VPC. 
The options include configuration parameters, including the domain name, domain name server, and the netbios-node-type.
Configure your own DHCP options set for your VPC.
   * IP address, Subnet Mask, Default Gateway
   * DNS servers & AmazonProvidedDNS or Custom DNS domain
   * NTP services, NetBios Name servers & Node type
   <br /><br />

DHCP Option Sets for each AZ are immutable.

Associating a new option set is immediate, but changes require a DHCP Renew (which takes time).

A DHCP server is setup to listen for L2 broadcasts to get info from the DHCP server.

* VPC Router (Subnet+1)
* R53 Resolver (Subnet+2)

## Transit Gateway

A transit gateway can simplify multi-VPC architectures significantly.


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

REMEMBER:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Security Group </th><th> NACLs </th></tr>
<tr valign="top"><td> Applicable to instances </td><td> Operate on VPC subnets </td></tr>
<tr valign="top"><td> Only supports Allow rules (layered on a default Deny)</td><td> Support both allow and deny rules</td></tr>
<tr valign="top"><td> Are stateful </td><td> Are NOT stateful </td></tr>
<tr valign="top"><td> Are considered in their entirety before traffic is allowed</td><td> Are processed in numerical order </td></tr>
<tr valign="top"><td> Must be associated with an instance to apply </td><td> Apply automatically to all instances in a subnet</td></tr>
</table>

REMEMBER: Up to 5 different Security Groups can be applied to a single AWS resource.

References:
   * http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_NACLs.html



## Direct Connect (DX)

To Direct Connect to a customer's Router.
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


## AWS Networking Certification

AWS Certified Advanced Networking - Specialty exam ANS-C01
https://aws.amazon.com/certification/certified-advanced-networking-specialty/

<a target="_blank" href="https://d1.awsstatic.com/training-and-certification/docs-advnetworking-spec/AWS-Certified-Advanced-Networking-Specialty_Exam-Guide.pdf">PDF</a>: Domains and Task Statements:

1. Network Design 30%

2. Network Implementation 26%
   
3. Network Management and Operation 20%
   
4. Network Security, Compliance, and Governance 24%

   4.1: Implement and maintain network features to meet security and compliance needs
and requirements.

   * Threat models
   * Securing app flows
   * Securing inbound traffic flows into AWS (AWS WAF, AWS Shield, Network Firewall)
   * Securing outbound traffic flows from AWS (for example, Network Firewall, proxies, Gateway Load Balancers)
   * Securing inter-VPC traffic within an account or across multiple accounts (security groups, network ACLs, VPC endpoint policies)
   * Implementing an AWS network architecture to meet security and compliance requirements (untrusted network, perimeter VPC, three-tier architecture)
   * Developing a threat model and identifying appropriate mitigation strategies for a given network architecture
   * Testing compliance with the initial requirements (failover)
   <br /><br />

   4.3: Implement and maintain confidentiality of data and communications of the network:
   
   * Network encryption options that are available on AWS
   * VPN connectivity over Direct Connect
   * Encryption methods for data in transit (IPsec)
   * Network encryption under the AWS shared responsibility model
   * Security methods for DNS communications (DNSSEC)

   * network encryption methods to meet application compliance requirements (IPsec, TLS)
   * encryption solutions to secure data in transit (for example, CloudFront, Application Load Balancers and Network Load Balancers, VPN over Direct Connect, AWS managed databases, Amazon S3, custom solutions on Amazon EC2, Transit Gateway)
   * a certificate management solution by using a certificate authority (ACM, AWS Certificate Manager Private Certificate Authority [ACM PCA])
   * secure DNS communications
   <br /><br />

* Professional experience using AWS technology, AWS security best practices, AWS storage options and their underlying consistency models, and AWS networking nuances and how they relate to the integration of AWS services.

* Knowledge of advanced networking architectures and interconnectivity options [e.g., IP VPN, multiprotocol label switching (MPLS), virtual private LAN service (VPLS)].

* Familiarity with the development of automation scripts and tools. This should include the design, implementation, and optimization of the following: Routing architectures (including static and dynamic); multi-region solutions for a global enterprise; highly available connectivity solutions (e.g., AWS Direct Connect, VPN).

* Knowledge of CIDR and sub-netting (IPv4 and IPv6); IPv6 transition challenges; and generic solutions for network security features, including AWS WAF, intrusion detection systems (IDS), intrusion prevention systems (IPS), DDoS protection, and economic denial of service/sustainability (EDoS).


## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
