---
layout: post
date: "2022-10-18"
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

In 2022 AWS <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/mac/">announced</a> availability of on-demand MacOS server types built on AWS Nitro System  within the AWS EC2 cloud.
<a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html">
Documentation</a>:

One of the EC2 instance types https://aws.amazon.com/ec2/instance-types/

   * mac1.metal are Mac Mini's with Intel’s 8th generation (Coffee Lake) 3.2 GHz (4.6 GHz turbo) Core i7 x86 processors 

   * mac2.metal has Apple's M1 or M2 ARM (16-core Neural Engine) processors
   <br /><br />

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th>Instance</th><th>vCPU cores</th><th>GiB memory</th><th>Gbps Network</th><th>Gbps EBS Bandwidth</th></tr>
   <tr valign="top" align="right"><td align="left">mac1.metal</td><td>12</td><td>32</td><td>10</td><td>8</td></tr>
   <tr valign="top" align="right"><td align="left">mac2.metal</td><td>8</td><td>16</td><td>10</td><td>8</td></tr>
   </table>

## Cost?

It's not available on all regions world-wide.

The <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/mac/#Pricing">unit of billing</a> is the <a target="_blank" href="https://aws.amazon.com/ec2/dedicated-hosts/pricing/">dedicated host</a> US region price which have a <strong>24-hour minimum allocation period</strong> (required by Apple). For 

   * mac1 US per hour $0.650 x 24 = $15.6/day or $468 per 30-day month
   * mac2 US per hour $1.083 x 24 = $25.992/day or $779.76 per 30-day month

   * mac1 Mumbai per hour $1.14

   * mac2 Frankfurt per hour $1.298
   <br /><br />

   AWS offers savings up to 44% off On-Demand pricing for a 3-year commitment. 
   But more that a few months, you might as well buy your own Mac at $2,500.

Compare against <a target="_blank" href="https://www.macstadium.com/pricing">MacStadium.com</a>
   <a target="_blank" href="https://portal.macstadium.com/bare-metal-mac/create">prices for bare-metal</a>:

   * mac2 (Gen 5 Mac mini) with 16 GB for $171 per month
   * mac1 (Gen 4 Mac mini) with 32 GB for $239 per month
   * mac1 (Gen 4 Mac mini) with 64 GB for $299 per month
   <br /><br />

