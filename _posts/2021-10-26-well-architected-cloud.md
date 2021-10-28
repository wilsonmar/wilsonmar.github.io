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
   * <a target="_blank" href="https://docs.aws.amazon.com/index.html?ref=wellarchitected">https://docs.aws.amazon.com/index.html?ref=wellarchitected</a>
   * https://aws.amazon.com/architecture/well-architected/
   * https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/
   * https://wa.aws.amazon.com/index.en.html
   * June 2020 "Well Architeced Framework" summary (155 pages) in <a target="_blank" href="https://www.amazon.com/AWS-Well-Architected-Framework-Whitepaper-ebook/dp/B08CFW9PXN/">Kindle mobile app</a>
   * https://explore.skillbuilder.aws/learn/course/2045/play/6898/the-aws-well-architected-framework

   * https://docs.microsoft.com/en-us/azure/architecture/framework/ (introduced July, 2020)
   <br /><br />

Thus, the Framework provides a <strong>consistent and comprehensive</strong> set of questions and <strong>best practices</strong> to build and evaluate cloud shared public usage.


## Your Radar Chart of Progress

To visualize opinions around progress toward each pillar over time, I (manually) created this sample Radar Chart within an <a target="_blank" href="https://github.com/wilsonmar/wilsonmar.github.io/blob/master/docs/aws-well-architected-radar.xlsx?raw=true">Excel file</a>:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/138869245-94036799-74c2-421e-95a6-053b9ffa19ce.png"><img width="796" alt="aws-well-architected-radar-1592x668.png" src="https://user-images.githubusercontent.com/300046/138869245-94036799-74c2-421e-95a6-053b9ffa19ce.png"></a>

The achievement at each point in time (milestones) is based on whether implementation of <strong>design principles</strong> defined for each pillar.

The gap between "Now" and "Next" consists of a backlog of activities to reach higher maturity:

   * Build and deploy faster
   * Lower or mitigate risks
   * Make informed decisions
   * Learn best practices
   <br /><br />


<a name="Pillars"></a>

### Pillars of the framework:

Pillars are listed below in default priority.

<em>Click a link for each pillar to go straight to each pillar's questions:</em>

   1. <a href="#Sec">SEC = <strong>Security</strong></a> = The ability to protect information, systems, and assets (applications and data) from threats. Google calls this "Security, privacy, and compliance".

   2. <a href="#Reliability">REL = <strong>Reliability</strong></a> = The ability to recover from failures and continue to function

   3. <a href="#Ops">OPS = <strong>Operational Excellence</strong></a> = The ability to run and monitor systems to deliver business value and continually improve supporting processes and procedures 

   4. <a href="#Perf">PERF = <strong>Performance Efficiency</strong></a> = The ability to adapt to changes in load

   5. <a href="#Cost">COST = <strong>Cost Optimization</strong></a> = The ability to achieve business outcomes at the lowest price point - Managing costs to maximize the value delivered

One memonic to make the 5 easier to remember is "CROPS".

Google combines "Performance and cost optimization" into a four-pillar framework.


### AWS WA Assessment Tool

   * <a target="_blank" href="https://www.youtube.com/watch?v=MfxF-FYEFjY">VIDEO: Build Better Workloads</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=yb9CH3UbMbw" title="Oct 14, 2019">VIDEO: Are You Well-Architected?</a> by AWS.
   <br /><br />

NOTE: The <a target="_blank" href="https://calculator.aws/#/">AWS Pricing Calculator at https://calculator.aws/#</a> is used to estimate costs for specific architectures. Different server types have different costs. The same services in different regions have different prices. Transfer of data between different regions incur charges.

1. Get AWS credentials.

2. In a browser, go to the (free) AWS WA Tool</a> (introduced 2018) provides a set of questions (context) and best practices:

   <a target="_blank" href="https://console.aws.amazon.com/wellarchitected">https://console.aws.amazon.com/wellarchitected</a>

3. Click orange "Define workload".

   Each "workload" is "a collection of interrelated applications, infrastructure, policy, governance, and operations running on AWS that provides business or operational value".

   A "technology portfolio" is the collection of workloads that are required for the business to operate.

   The "architecture" is how components work together in a workload, usually illustrated by  architecture diagrams that show how components communicate and interact.

   A "component" is the code, configuration, and AWS Resources that together deliver against a requirement. A component is often the unit of technical ownership, and is decoupled from other components.

3. Specify a name for the workload under assessment. If you're using a shared account, enter <strong>your name</strong> such as:

   <tt>wilson's sample workload</tt>

4. Click "Well-Architected Framework" to get to the content of questions and answers.

5. PROTIP: Work on one pillar at a time, in the <a href="#Pillars">priority identified</a>.

   ### Lens

6. If applicable, select a <strong>lens</strong> (listed alphabetically):

   * <a target="_blank" href="https://www.amazon.com/Analytics-Lens-AWS-Well-Architected-Framework-ebook/dp/B088YVNGP7/" title="May 19, 2020">Analytics: 95 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://www.amazon.com/Financial-Services-Industry-Lens-Well-Architected-ebook/dp/B088WBNVQL/" title="May 18, 2020">Financial Services Industry: 71 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://www.amazon.com/High-Performance-Computing-Lens-Well-Architected-Whitepaper-ebook/dp/B082TRK76F/" title="December 15, 2019">High-Performance Computing: 55 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://www.amazon.com/IoT-Lens-Well-Architected-Framework-Whitepaper-ebook/dp/B082XSCMRX/" title="December 19, 2019">IoT: 77 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://www.amazon.com/Machine-Learning-Lens-Well-Architected-Whitepaper-ebook/dp/B09JDTVPJX/" title="October 12, 2021">Machine Learning: 265 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://www.amazon.com/SaaS-Lens-AWS-Well-Architected-Framework-ebook/dp/B08QZZ6DLM/" title="December 17, 2020">SaaS: 87 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://www.amazon.com/Serverless-Applications-Lens-Well-Architected-Whitepaper-ebook/dp/B082TXMZ5T/" title="December 15, 2019">Serverless: 91 pages on Kindle (mobile) app</a>
   <br /><br />

<a target="_blank" href="https://aws.amazon.com/about-aws/whats-new/2020/12/apis-now-available-for-aws-well-architected-tool/">BLOG:
   APIs now available for the AWS Well-Architected Tool</a>


## Well-Architected Labs

My notes for each pillar are annotated with deep links to hands-on instructions at<br />
<a target="_blank" href="https://wellarchitectedlabs.com/">https://wellarchitectedlabs.com</a> 

<a target="_blank" href="https://github.com/awslabs/aws-well-architected-labs">https://github.com/awslabs/aws-well-architected-labs</a> (hands-on)


## Other tools

1. Click your name at the top bar to select "My Billing Dashboard".

   "Cost Management" consists of:
   * Cost Explorer to launch Cost Explorer for "AWS Cost Management"
   * Budgets
   * Budgets Reports
   * Saving Plans
   * Cost & Usage Reports
   * Cost Categories
   * Cost allocation tags
   <br /><br />

   "Billing" consists of:
   * Billing
   * Orders and invoices
   * Credits
   * Purchase orders
   <br /><br />

1. Click "Cost Explorer" to launch Cost Explorer for "AWS Cost Management"
  
   For Daily views, in preferences, check "Hourly and Resource Level Data" which costs more money.

## Training

AWS provides in-depth training on the Well-Architected Framework to partners to help companies implement best practices, measure the state of your workloads, and make improvements where assistance is required.

<a target="_blank" href="https://explore.skillbuilder.aws/learn/course/2045/AWS%2520Well-Architected">
The AWS Skillbuilder video course</a> is rather verbose, but provides knowledge checks (quizzes).

<a target="_blank" href="https://docs.microsoft.com/en-us/assessments/?id=azure-architecture-review&mode=pre-assessment">
Microsoft Azure Well-Architected Review</a> provides guidance by pillar.

### General Design Principles

AWS published these General Design Principles:

   * Stop guessing your capacity needs - f you make a poor capacity decision when deploying a workload, you might end up sitting on expensive idle resources or dealing with the performance implications of limited capacity. With cloud computing, these problems can go away. You can use as much or as little capacity as you need, and scale up and down automatically.

   * Test systems at production scale - In the cloud, you can create a production-scale test environment on demand, complete your testing, and then decommission the resources. Because you only pay for the test environment when it's running, you can simulate your live environment for a fraction of the cost of testing on premises.

   * Automate to make architectural experimentation easier (everything in AWS is an API) - Automation allows you to create and replicate your workloads at low cost and avoid the expense of manual effort. You can track changes to your automation, audit the impact, and revert to previous parameters when necessary.

   * Allow for evolutionary architectures -  In a traditional environment, architectural decisions are often implemented as static, onetime events, with a few major versions of a system during its lifetime. As a business and its context continue to evolve, these initial decisions might hinder the system's ability to deliver changing business requirements. In the cloud, the capability to automate and test on demand lowers the risk of impact from design changes. This allows systems to evolve over time so that businesses can take advantage of innovations as a standard practice.

   * Drive architectures using data - In the cloud, you can collect data on how your architectural choices affect the behavior of your workload. This lets you make factbased decisions on how to improve your workload. Your cloud infrastructure is code, so you can use that data to inform your architecture choices and improvements over time.

   * Improve through "game days" (dry-run simulation, choas engineering, etc.) - Test how your architecture and processes perform by regularly scheduling game days to simulate events in production. This will help you understand where improvements can be made and can help develop organizational experience in dealing with events.


<hr />

<a name="Sec"></a>

## Security

<img align="right" width="99" alt="well-architected-SEC-gold-101x134.png" src="https://user-images.githubusercontent.com/300046/139144053-7c59ff46-8774-4684-bed2-df3e9dd4fc71.png">
   * https://wa.aws.amazon.com/wat.pillar.security.en.html
   * <a target="_blank" href="https://www.youtube.com/watch?v=ujRf2BzgGGg">VIDEO: Well-Architected for Security: Advanced Session</a> by Amazon Web Services
   * <a target="_blank" href="https://www.amazon.com/Security-Pillar-Well-Architected-Framework-Whitepaper-ebook/dp/B08CF64XRV/" title="July 5, 2020">56 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/security/">AWS Well-Architected Labs for Security</a>
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
* Apply security at all layers (levels)
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
   * <a target="_blank" href="https://www.amazon.com/Reliability-Pillar-Well-Architected-Framework-Whitepaper-ebook/dp/B08L8CT213/" title="Oct 14, 2020">110 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/reliability/">AWS Well-Architected Labs for Reliability</a>
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
   * <a target="_blank" href="https://www.amazon.com/Operational-Excellence-Pillar-Well-Architected-Whitepaper-ebook/dp/B08CF4T3GW/" title="July 5, 2020">54 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/operational-excellence/">AWS Well-Architected Labs for Operational Excellence</a>
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
   * <a target="_blank" href="https://www.amazon.com/Performance-Efficiency-Pillar-Well-Architected-Whitepaper-ebook/dp/B08CFPXRBM/">51 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/performance-efficiency/">AWS Well-Architected Labs for Performance Efficiency</a>
   <br /><br />

Principles:

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
   * https://aws.amazon.com/blogs/aws-cloud-financial-management/
   * https://docs.microsoft.com/en-us/azure/architecture/framework/cost/optimize-checklist
   Microsft's cost optimization checklist
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html">Cost Optimization Pillar <strong>whitepaper</strong> (June 2020)</a>,<br /><a target="_blank" href="https://www.amazon.com/Cost-Optimization-Pillar-Well-Architected-Whitepaper-ebook/dp/B08CFZBVJK/" title="July 5, 2020">44 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/cost/">AWS Well-Architected Labs for Cost Optimization</a> by Nathan Besh
   <br /><br />

<hr />

1. How do you implement cloud financial management?

   <a target="_blank" href="https://wa.aws.amazon.com/wat.question.COST_1.en.html">
   Best practices and Improvement Plan items</a>:

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

Questions lead to these goals/focus areas (and the services used to get there):

   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/practice-cloud-financial-management.html">Practice Cloud Financial Management</a> -
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/expenditure-and-usage-awareness.html">Expenditure and usage awareness</a> –  AWS Cost Explorer, AWS Budgets
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/cost-effective-resources.html">Cost-Effective resources</a> – Cost Explorer, Amazon CloudWatch and Trusted Advisor, Amazon Aurora for RDS, AWS Direct Connect with Amazon CloudFront
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/manage-demand-and-supply-resources.html">Matchi supply and demand</a> – Auto Scaling
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/optimize-over-time.html">Optimize Over Time</a> – AWS News Blog and the What’s New section on the AWS website, AWS Trusted Advisor
   <br /><br />

   * Develop a cost model
   * Create budgets and alerts
   <br /><br />

AWS Design Principles for cost optimization:

* <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/practice-cloud-financial-management.html">Implement cloud financial management</a>: To achieve financial success and accelerate business value realization in the cloud, you must invest in Cloud Financial Management. Your organization must dedicate the necessary time and resources for building capability in this new domain of technology and usage management. Similar to your Security or Operations capability, you need to build capability through knowledge building, programs, resources, and processes to help you become a cost efficient organization.

   * Functional Ownership
   * Finance and Technology Partnership
   * Cloud Budgets and Forecasts
   * Cost-Aware Processes
   * Cost-Aware Culture
   * Quantify Business Value Delivered Through Cost Optimization
   <br /><br />

Others:

   * Adopt a consumption model</a>: Pay only for the computing resources you consume, and increase or decrease usage depending on business requirements. For example, development and test environments are typically only used for eight hours a day during the work week. You can stop these resources when they’re not in use for a potential cost savings of 75% (40 hours versus 168 hours).

   * <a target="_blank" href="">Measure overall efficiency</a>: Measure the business output of the workload and the costs associated with delivery. Use this data to understand the gains you make from increasing output, increasing functionality, and reducing cost.

   * <a target="_blank" href="">Stop spending money on undifferentiated "heavy lifting"</a> of data center operations like racking, stacking, and powering servers. AWS also removes the operational burden of managing operating systems and applications with managed services. This allows you to focus on your customers and business projects rather than on IT infrastructure.

   * <a target="_blank" href="">Analyze and attribute expenditure</a>: The cloud makes it easier to accurately identify the cost and usage of workloads, which then allows transparent attribution of IT costs to revenue streams and individual workload owners. This helps measure return on investment (ROI) and gives workload owners an opportunity to optimize their resources and reduce costs.

   * Use managed services to reduce cost of ownership

Tasks:

* <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/expenditure-and-usage-awareness.html">Expenditure and usage awareness</a>

   * Governance
   * Monitor Cost and Usage
   * Decommission Resources
   <br /><br />

* <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/expenditure-and-usage-awareness.html">Cost Effective Resources</a>

   * Evaluate Cost When Selecting Services
   * Select the Correct Resource Type, Size, and Number
   * Select the Best Pricing Model
   * Plan for Data Transfer
   <br /><br />

* <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/manage-demand-and-supply-resources.html">Manage Demand and Supply Resources</a>

   * Manage Demand – Throttling: API Gateway
   * Manage Demand – Buffer based: Amazon SQS (Kafka), Kinesis stream
   <br /><br />

   * Demand-based supply: ELB
   * Time-based supply: APIs and SDKs
   * Dynamic Supply: AWS Auto Scaling
   <br /><br />


<a target="_blank" href="https://cloudacademy.com/learning-paths/aws-cost-management-and-optimization-3567/">7 hr video course "AWS FinOps: Cost Management & Optimization"</a> by Oliver Gehrmann identified these strategies for cost optimization:

   * Right-sizing your instances
   * Increase elasticitiy
   * Pick the right pricing model
   * Match usage to Storage costs


<hr />

## References

https://tutorialsdojo.com/aws-well-architected-framework-five-pillars/



<hr />

## More on cloud #

This is one of a series on cloud computing:

{% include cloud_links.html %}
