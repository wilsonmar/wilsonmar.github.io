---
layout: post
title: "Encrypt all the things"
excerpt: "How to store and send files securely"
tags: [AWS, Security]
date: "2017-03-01"
file: "encrypt-all"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

There is now a way to safely store files in encrypted format and 
transmit files privately over "hostile" public internet lines.

encryption in transit and at rest.

That's good news amidst so much bad news about websites being hacked and private credentials stolen.
It is now well-known that public wi-fi enables others to listen in to what you send.

## AWS KMS

Key Management Service uses the AWS Encryption SDK containing algorithms.

Private CMA (Customer Master Keys) are created in KMS and remain there. 

   * AWS-managed CMA keys
   * Customer-managed CMA keys can be symmetric or asymmetric
   * AWS-owned CMA keys
   <br /><br />

Each key has an Alias and Key ID, which are GUIDs with dashes, and enabled.

Advanced Options: Key material origins: KMS, External, Customer key store (CloudHSM):
   * KMS are validated to FIPS 140-2 level 2, China region does not suppor asymmetric keys
   * CloudHSM are validated to FIPS 140-2 level 3, keys and hardware exclusive to customer, either symmetric or asymmetric

<a target="_blank" href="https://www.youtube.com/watch?v=_gezaWmwzYY&list=PLhr1KZpdzuke2ncPH0DVp9PswBFY5dIl6&index=77">
VIDEO: AWS re_Infoce 2019: Achieving Security Goals with AWS CloudHSM</a>

CMA key + Encryption algorithm yields the Plaintext key and Encrypted key.

Plaintext key + Data are fed into the Encryption algorithm yields Encrypted data.

Encrypted key + CMA key fed into Decryption algorithm yields Plaintext key.

A separate Data key is used for different datasets.

### Encrypt AWS Network 

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=0ea16bcc-fcee-46c9-b1f8-85c2e29e80e5">GUI demo [3:05]</a>
<a target="_blank" href="https://app.pluralsight.com/library/courses/aws-networking-deep-dive-vpc/table-of-contents">AWS Networking Deep Dive: Virtual Private Cloud (VPC)</a>
8 Aug 2019 by Ben Piper

Transport layer: Amazon S2N (Signal-to-Noise), AWS-managed VPN, AWS-client VPN, AWS VPN cloud hub,
third-party VPN tunnel.

To create VPC : Customer Gateway : VPN Site-to-site IPSEC

1. In AWS Console, select VPC in search bar or link.
1. Customer  Gateway menu, Create Customer  Gateway
1. Type Name, Select Routing, IP Address of firewall in front of network, 

   You can leave blank Certificate ARN, Device.

1. Virtual Private Gateways on left menu. Create VPC Gateway. Type name.

   "IPSec.1"

1. Attach (explictly) in Actions drop-down.

1. Site-to-Site VPN Connection in left menu to Create VPN Connection.
1. Type Name tag, Virtual Private Gateway
1. Add Another Rule. Type IP prefix ("192.68")

   Customer Gateway and Tunnel Options can be left as is.

1. Download configuration. In pop-up select Vendor ("Openwan"), Platform, Software.
1. Upload configuration file to firewall.

1. Route Tables in left menu to Edit Routes.
1. Type Destination IP & Target of on-premise network. Add route.


## Videos

<a target="_blank" href="https://www.youtube.com/watch?v=plv7PQZICCM&list=PLhr1KZpdzuke2ncPH0DVp9PswBFY5dIl6&index=46">
VIDEO: AWS re_Infoce 2019: How Encryption Works in AWS</a>

<a target="_blank" href="https://www.youtube.com/watch?v=wuTp9LvWHkI&list=PLhr1KZpdzuke2ncPH0DVp9PswBFY5dIl6&index=58">
VIDEO: AWS re_Infoce 2019</a>


<a target="_blank" href="https://www.youtube.com/watch?v=3jCVnSLmaiM&list=PLhr1KZpdzuke2ncPH0DVp9PswBFY5dIl6&index=7">Build and Monitor Security into Your Golden AMI Pipeline</a>

<a target="_blank" href="https://www.youtube.com/watch?v=Z3SYDTMP3ME">
Introduction to AWS Services</a> by the AWS Training Center
Jun 9, 2019 [38:53] is highly rated introduction

