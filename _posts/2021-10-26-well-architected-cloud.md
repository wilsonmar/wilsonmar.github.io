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

The "Well Architected" Framework really is an <strong>industry standard</strong> because it is referenced by Amazon, Microsoft, and Google:

   * https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html
   * https://aws.amazon.com/architecture/well-architected/
   * https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/
   * https://wa.aws.amazon.com/index.en.html

   * https://docs.microsoft.com/en-us/azure/architecture/framework/ (introduced July, 2020)
   <br /><br />

Thus, the Framework provides a <strong>consistent and comprehensive</strong> set of questions and <strong>best practices</strong> to build and evaluate cloud shared public usage.


## Radar Chart of Progress

I (manually) created a Radar Chart as an <a target="_blank" href="https://github.com/wilsonmar/wilsonmar.github.io/blob/master/docs/aws-well-architected-radar.xlsx?raw=true">Excel file</a> to visualize opinions around progress toward each pillar:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/138869245-94036799-74c2-421e-95a6-053b9ffa19ce.png"><img width="796" alt="aws-well-architected-radar-1592x668.png" src="https://user-images.githubusercontent.com/300046/138869245-94036799-74c2-421e-95a6-053b9ffa19ce.png"></a>

The gap between "Now" and "Next" consists of a backlog of activities to reach higher maturity.
   * Build and deploy faster
   * Lower or mitigate risks
   * Make informed decisions
   * Learn best practices
   <br /><br />


<a name="Pillars"></a>

### Pillars of the framework:

Pillars are listed below in default priority.

<em>Click a link for each pillar to go straight to each pillar's questions:</em>

   1. <a href="#Sec">SEC = Security</a> = The ability to protect information, systems, and assets (applications and data) from threats. Google calls this "Security, privacy, and compliance".

   2. <a href="#Reliability">REL = Reliability</a> = The ability to recover from failures and continue to function

   3. <a href="#Ops">OPS = Operational Excellence</a> = The ability to run and monitor systems to deliver business value and continually improve supporting processes and procedures 

   4. <a href="#Perf">PERF = Performance Efficiency</a> = The ability to adapt to changes in load

   5. <a href="#Cost">COST = Cost Optimization</a> = The ability to achieve business outcomes at the lowest price point - Managing costs to maximize the value delivered

One memonic to make the 5 easier to remember is "CROPS".

Google combines "Performance and cost optimization" into a four-pillar framework.


### AWS WA Assessment Tool

   * <a target="_blank" href="https://www.youtube.com/watch?v=yb9CH3UbMbw" title="Oct 14, 2019">VIDEO: Are You Well-Architected?</a> by AWS.
   <br /><br />

1. Get AWS credentials.

2. In a browser, go to the (free) AWS WA Tool</a> (introduced 2018) provides a set of questions (context) and best practices:

   <a target="_blank" href="https://console.aws.amazon.com/wellarchitected">https://console.aws.amazon.com/wellarchitected</a>

3. Click orange "Define workload".

   Each "workload" is "a collection of interrelated applications, infrastructure, policy, governance, and operations running on AWS that provides business or operational value".

3. Specify a name for the workload under assessment. If you're using a shared account, enter <strong>your name</a> such as:

   <tt>wilson's sample workload</tt>

4. Click "Well-Architected Framework" to get to the content of questions and answers.

5. PROTIP: Work on one pillar at a time, in the <a href="#Pillars">priority identified</a>.

6. https://aws.amazon.com/about-aws/whats-new/2020/12/apis-now-available-for-aws-well-architected-tool/
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

<img align="right" width="99" alt="well-architected-SEC-gold-101x134.png" src="https://user-images.githubusercontent.com/300046/139144053-7c59ff46-8774-4684-bed2-df3e9dd4fc71.png">
   * https://wa.aws.amazon.com/wat.pillar.security.en.html
   * <a target="_blank" href="https://www.youtube.com/watch?v=ujRf2BzgGGg">VIDEO: Well-Architected for Security: Advanced Session</a> by Amazon Web Services
   <br /><br />

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
* Prepare for security events ("Game Day")
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

<img align="right" width="99" alt="well-architected-RELI-152x170.png" src="https://user-images.githubusercontent.com/300046/139144457-0397ca9f-4964-42d7-aac0-33b98ac2e811.png">
   * https://wa.aws.amazon.com/wat.pillar.reliability.en.html
   <br /><br />

The ability to recover from failures and meet demand:
The ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.

   * Foundations – IAM, Amazon VPC, AWS Trusted Advisor, AWS Shield
   * Change Management – AWS CloudTrail, AWS Config, Auto Scaling, Amazon CloudWatch
   * Failure Management – AWS CloudFormation, Amazon S3, AWS KMS, Amazon Glacier
   * Workload architecture
   <br /><br />

Design principles for reliability:

   * Test recovery procedures
   * Automatically recover from failure
   * Scale horizontally to increate aggregate system availability
   * Stop guessing capacity (scale horizontally and veritically)
   * Manage change in automation 
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

<img align="right" width="99" alt="well-architected-OPS-gold-141x117.png" src="https://user-images.githubusercontent.com/300046/139143665-5b1440ae-ece2-4d67-9b33-f898bdc02156.png">
   * https://wa.aws.amazon.com/wat.pillar.operationalExcellence.en.html
   <br /><br />

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

<img align="right" width="99" alt="PERF-gold-202x136.png" src="https://user-images.githubusercontent.com/300046/139144826-4862f00e-a754-4446-9e73-8f37248d03b6.png">
   * https://wa.aws.amazon.com/wat.pillar.performance.en.html
   <br /><br />

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

Design principles for Performance Efficiency:

   * Democratize advanced technologies
   * Go global in minutes
   * Use serverless architectures
   * Experiment more often
   * Mechanical sympathy
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

<img align="right" width="99" alt="well-architected-COST-gold-111x123" src="https://user-images.githubusercontent.com/300046/139145830-e653de04-a8db-4455-a16a-519fd18a46c3.png">
   * https://wa.aws.amazon.com/wat.pillar.costOptimization.en.html
   * https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html
   * https://aws.amazon.com/blogs/aws-cloud-financial-management/
   * AWS Well-Architected Cost Optimization Labs at https://wellarchitectedlabs.com/cost/
    * AWS Billing and Cost Management
    * AWS Tagging Strategies
    * Getting Started with Amazon EC2 Spot Instances
    * <a target="_blank" href="https://docs.aws.amazon.com/index.html?ref=wellarchitected">AWS Documentation</a>
   <br /><br />

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

Design principles of Cost Optimization:

   * Adopt a consumption model
   * Measure overall efficiency
   * Stop spending money on data center operations
   * Analyze and attirbute expenditures
   * Use managed services to reduce cost of ownership
   <br /><br />

<hr />

   https://wa.aws.amazon.com/wat.question.COST_1.en.html

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
