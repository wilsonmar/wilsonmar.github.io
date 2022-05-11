---
layout: post
title: "Cloud Services"
excerpt: "Here is a dictionary of the 200+ AWS."
tags: [AWS, EC2, cloud, on-boarding]
date: "2021-11-05"
file: "cloud-services"
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

{% include whatever.html %}

## How many AWS Services are there?

Among the 200+, the <a target="_blank" href="https://pages.awscloud.com/rs/112-TZM-766/images/How-to-Design-a-Least-Privilege-Architecture-in-AWS-Slides.pdf">key services</a>:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/140666002-a4f52934-bb78-4b25-bc8b-b7e2a0d7d0f4.png">
<img width="1591" alt="aws-svcs-map-3182x1350" src="https://user-images.githubusercontent.com/300046/140666002-a4f52934-bb78-4b25-bc8b-b7e2a0d7d0f4.png"></a>


## List AWS Service names

<em>C = From Cantrill.io</em>

Aurora (one replica in each AZ, cluster storage replicated multi-master in several regions) but writes only to primary region.

Config records changes on resources in one or more regions & audits compliance to standards for alerts to SNS

DynamoDB - global (multi-master read/write)

EventBridge notifies SNS & Invokes Lambda

Fargate (mode of EC2 with ENI's in a VPC like auto-scaling groups)

<a target="_blank" href="https://aws.amazon.com/fsx/">
FSx</a> (Launch, run, and scale feature-rich and highly-performant file systems) - 

GuardDuty - continuous AI/ML threat intelligence to identify unexpected and unauthorized activities in data sources (DNS Logs, VPC Flow, CloudTrail mgmt events, CloudTrails S3 Data Events) to EventBridge

AWS Glue - <a target="_blank" href="https://learn.cantrill.io/courses/aws-certified-solutions-architect-professional/lectures/23693055">C</a>

AWS Kinesis Video Streams - <a target="_blank" href="https://learn.cantrill.io/courses/aws-certified-solutions-architect-professional/lectures/23925485">C</a>

AWS Lex & Connect - <a target="_blank" href="https://learn.cantrill.io/courses/aws-certified-solutions-architect-professional/lectures/23925480">C</a>

RDS (Cross Region Read Replica Async replication in several regions)

Rekognition - <a target="_blank" href="https://learn.cantrill.io/courses/aws-certified-solutions-architect-professional/lectures/23693085">C</a>


<a name="References"></a>

## References #



## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}
