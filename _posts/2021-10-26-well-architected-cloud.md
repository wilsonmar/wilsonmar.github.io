---
layout: post
title: "Well Architected Cloud"
excerpt: "What is your maturity toward adopting best practices using a comprehensive industry-standard framework from Amazon and Microsoft?"
tags: [Cloud, comparison]
date: "2021-10-26"
file: "well-architected-cloud"
image: # pic-black-bkg-white-cloud_1920x1200
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme Bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The "Well Architected" Framework is used by both Amazon and Microsoft to provide a consistent and comprehensive set of best practices to build and evaluate architectures in the cloud. Each cloud vendor provides a structured checklist in web pages, Kindle doc, and interactive tool:

   * https://docs.microsoft.com/en-us/azure/architecture/framework/

   * https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html
   * https://aws.amazon.com/architecture/well-architected/
   * https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/
   <br /><br />

## Radar Chart of Progress

I created a Radar Chart as an <a target="_blank" href="https://github.com/wilsonmar/wilsonmar.github.io/blob/master/docs/aws-well-architected-radar.xlsx?raw=true">Excel file</a> to visualize opinions around progress toward each pillar:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/138869245-94036799-74c2-421e-95a6-053b9ffa19ce.png"><img width="796" alt="aws-well-architected-radar-1592x668.png" src="https://user-images.githubusercontent.com/300046/138869245-94036799-74c2-421e-95a6-053b9ffa19ce.png"></a>

The gap between "Now" and "Next" consists of a backlog of activities to reach higher maturity.
   * Build and deploy faster
   * Lower or mitigate risks
   * Make informed decisions
   * Learn best practices
   <br /><br />

### Pillars of the framework:

<em>Click to go straight to each pillar, listed in default priority:</em>

1. <a href="#Sec">SEC = Security</a> = The ability to protect information, systems, and assets (applications and data) from threats

2. <a href="#Reliability">REL = Reliability</a> = The ability to recover from failures and continue to function

3. <a href="#Ops">OPS = Operational Excellence</a> = The ability to run and monitor systems to deliver business value and continually improve supporting processes and procedures 

4. <a href="#Perf">PERF = Performance Efficiency</a> = The ability to adapt to changes in load

5. <a href="#Cost">COST = Cost Optimization</a> = The ability to achieve business outcomes at the lowest price point - Managing costs to maximize the value delivered

One memonic to make the 5 easier to remember is "CROPS".


### Tool with Review questions

<a target="_blank" href="https://console.aws.amazon.com/wellarchitected">The (free) AWS WA Tool</a> (introduced 2018) provides a set of questions (context) and best practices.

Each workload is "a collection of interrelated applications, infrastructure, policy, governance, and operations running on AWS that provides business or operational value".

https://aws.amazon.com/about-aws/whats-new/2020/12/apis-now-available-for-aws-well-architected-tool/
APIs now available for the AWS Well-Architected Tool

## Well-Architected Labs

My notes for each pillar are annotated with deep links to hands-on instructions at<br />
<a target="_blank" href="https://wellarchitectedlabs.com/">https://wellarchitectedlabs.com</a> 

<a target="_blank" href="https://github.com/awslabs/aws-well-architected-labs">https://github.com/awslabs/aws-well-architected-labs</a> 


## Training

AWS provides in-depth training on the Well-Architected Framework to partners to help companies implement best practices, measure the state of your workloads, and make improvements where assistance is required.

<a target="_blank" href="https://explore.skillbuilder.aws/learn/course/2045/AWS%2520Well-Architected">
The AWS Skillbuilder video course</a> is rather verbose, but provides knowledge checks (quizzes).

<a target="_blank" href="https://docs.microsoft.com/en-us/assessments/?id=azure-architecture-review&mode=pre-assessment">
Microsoft Azure Well-Architected Review</a> provides guidance by pillar.

AWS published these General Design Principles:

   * Stop guessing your capacity needs
   * Test systems at production scale
   * Automate to make architectural experimentation easier (everything in AWS is an API)
   * Allow for evolutionary architectures
   * Drive architectures using data
   * Improve through "game days" (dry-run simulation, choas engineering, etc.)


<hr />

<a name="Sec"></a>

## Security

The broad security areas:

* Identity and access management
* Infrastructure protection
* Data protection: sovereignty and encryption
* Incidence response
* Application security
* Security resources
<br /><br />

Design principles for security in the cloud:

* Implement a strong identity foundation
* Enable traceability
* Apply security at all layers
* Automate security best practices
* Protect data in transit and at rest
* Keep people away from data
* Prepare for security events
<br /><br />

<hr />

1. How do you securely operate your workload?


2. How do you manage identities for people and machines?


3. How do you manage permissions for people and machines?


4. How do you detect and investigate security events?


5. How do you protect your network resources?


6. How do you protect your compute resources?


7. How do you classify your data?


8. How do you protect your data at rest?


9. How do you protect your data in transit?


10. How do you anticipate, respond to, and recover from incidents?



<a name="Reliability"></a>

## Reliability

https://explore.skillbuilder.aws/learn/course/2045/play/6898/the-aws-well-architected-framework
The ability to recover from failures and meet demand:
The ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.


   * Foundations – IAM, Amazon VPC, AWS Trusted Advisor, AWS Shield
   * Change Management – AWS CloudTrail, AWS Config, Auto Scaling, Amazon CloudWatch
   * Failure Management – AWS CloudFormation, Amazon S3, AWS KMS, Amazon Glacier
   * Workload architecture
   <br /><br />

<hr />


1. How do you manage service quotas and constraints?


2. How do you plan your network topology?


3. How do you design your workload service architecture?


4. How do you design interactions in a distributed system to prevent failures?


5. How do you design interactions in a distributed system to mitigate or withstand failures?


6. How do you monitor workload resources?


7. How do you design your workload to adapt to changes in demand?


8. How do you implement change?


9. How do you back up data?


10. How do you use fault isolation to protect your workload?


11. How do you design your workload to withstand component failures?


12. How do you test reliability?


13. How do you plan for disaster recovery (DR)?



<a name="Ops"></a>

## Operational Excellence

https://explore.skillbuilder.aws/learn/course/2045/play/6898/the-aws-well-architected-framework module 2
Processes and procedures to:
   * Organize
   * Prepare - AWS Config
   * Operate - Amazon CloudWatch
   * Evolve - Amazon Elasticsearch service
   <br /><br />

Best practices: Monitoring and diagnostics

Design Principles for Operational Excellence:
   * Perform operations as code
   * Annotate documentation (among code)
   * Make frequent, small, reversible change
   * Refine operations procedures frequently
   * Anticipate failure
   * Learn from all operational failures
   <br /><br />

<hr />

1. How do you determine what your <strong>operational priorities</strong> are?


2. How do you structure your organization to support your business outcomes?

   The "Operating Model"


3. How does your <strong>organizational culture</strong> support your business outcomes?


4. How do you design your workload so that you can understand its state?


5. How do you reduce defects, ease remediation, and improve flow into production?


6. How do you mitigate deployment risks?


7. How do you know that you are ready to support a workload?


8. How do you understand the health of your workload?


9. How do you understand the health of your operations?


10. How do you manage workload and operations events?


11. How do you evolve operations?



<a name="Perf"></a>

## Performance Efficiency

https://explore.skillbuilder.aws/learn/course/2045/play/6898/the-aws-well-architected-framework

   * Selection – Auto Scaling for Compute, Amazon EBS and S3 for Storage, Amazon RDS and DynamoDB for Database, Route53, VPC, and AWS Direct Connect for Network
   * Review – AWS Blog and What’s New section of the website
   * Monitoring –  Amazon CloudWatch
   * Tradeoffs – Amazon Elasticache, Amazon CloudFront, AWS Snowball, Amazon RDS read replicas.
   <br /><br />

Best practices:

* Autoscaling
* Background jobs
* Caching
* CDN
* Data partitioning
<br /><br />

<hr />

1. How do you select the best performing architecture?


2. How do you select your compute solution?


3. How do you select your storage solution?


4. How do you select your database solution?


5. How do you configure your networking solution?


6. How do you evolve your workload to take advantage of new releases?


7. How do you monitor your resources to ensure they are performing?


8. How do you use tradeoffs to improve performance?

<a name="Cost"></a>

## Cost Optimization

https://explore.skillbuilder.aws/learn/course/2045/play/6898/the-aws-well-architected-framework

   * Cost-Effective Resources – Cost Explorer, Amazon CloudWatch and Trusted Advisor, Amazon Aurora for RDS, AWS Direct Connect with Amazon CloudFront
   * Matching supply and demand – Auto Scaling
   * Expenditure Awareness –  AWS Cost Explorer, AWS Budgets
   * Optimizing Over Time – AWS News Blog and the What’s New section on the AWS website, AWS Trusted Advisor
   <br /><br />

https://docs.microsoft.com/en-us/azure/architecture/framework/cost/optimize-checklist
Microsft's cost optimization checklist

   * Develop a cost model
   * Create budgets and alerts
   <br /><br />

<hr />

1. How do you implement cloud financial management?


2. How do you govern usage?


3. How do you monitor usage and cost?


4. How do you decommission resources?


5. How do you evaluatewhen you select services?


6. How do you meettargets when you select resource type, size and number?


7. How do you use pricing models to reduce cost?


8. How do you plan for data transfer charges?


9. How do you manage demand, and supply resources?


10. How do you evaluate new services?

Apptio CloudAbility

<hr />

## References

https://tutorialsdojo.com/aws-well-architected-framework-five-pillars/



<hr />

## More on cloud #

This is one of a series on cloud computing:

{% include cloud_links.html %}
