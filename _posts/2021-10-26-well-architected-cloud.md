---
layout: post
title: "Well Architected Cloud"
excerpt: "What is your team's maturity at adopting best practices? Here is the comprehensive industry-standard framework from Amazon, Microsoft, and Google"
tags: [Cloud, comparison]
date: "2022-07-01"
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

This aims to be a succinct yet deep dive about the "mind sets" needed by IT teams in the cloud.

{% include whatever.html %}

Like ITIL, PMI, FedRamp, SAFe, etc., the "Well-Architected" (WA) Framework provides <strong>common</strong> terminology and "best practices", but specifically for successfully working in the public cloud.

## Why?

<a target="_blank" href="https://www.youtube.com/watch?v=rbIQ2eRJY0g" title="Aug 11, 2021">Why? Potential benefits</a> sound like what is claimed for every product:

   * Build and deploy faster
   * Lower or mitigate risks
   * Make more informed decisions
   * Learn best practices
   * Improve the quality of workloads
   <br /><br />

But WA is different in that it's the rare occasion when it's what major cloud vendors all agree on.

WA is pragmatic, proven advice, NOT by theories from "Architecture Astronauts".

It is for not a one-time check, but throughout the lifecycle.

WA is <strong>not audited for</strong> like SOC2 or FedRamp.

Knowledge about WA (best practices) is <strong>tested for</strong> in <a target="_blank" href="https://wilsonmar.github.io/aws-certs">AWS certification exams</a>


## Your Radar Chart of Progress:

PROTIP: To visualize progress toward using public cloud effectively, I created this sample Radar Chart within an <a target="_blank" href="https://github.com/wilsonmar/wilsonmar.github.io/blob/master/docs/well-architected-radar.xlsx?raw=true">Excel file I built</a>:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/139370139-f6ec275e-5882-4c80-80a7-5c309b48177b.png">
<img width="1762" alt="well-architected-radar-1762x662" src="https://user-images.githubusercontent.com/300046/139370139-f6ec275e-5882-4c80-80a7-5c309b48177b.png"></a>

The percentage for each <a href="#Pillars">"pillar" category</a> is based on what has been <strong>achieved Now:</strong> (the inner blue line) and the <strong>Next: 1. <a target="_blank" href="?">target</strong> (the outer red line).

The gaps (delta) between "Now" and "Next" are addressed by a <strong>backlog of activities</strong> designed to reach higher organizational and systems capability at building and operating systems using shared public clouds.

Percentages in the Radar Chart are based on a <strong>consistent and comprehensive</strong> set of <strong>design principles</strong> and <strong>best practices</strong> defined in the "Well-Architected" (WA) Framework.

The Well Architected Framework is really an <strong>industry standard</strong> because it is referenced by Amazon, Microsoft, and Google:

   * https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html
   * <a target="_blank" href="https://docs.aws.amazon.com/index.html?ref=wellarchitected">https://docs.aws.amazon.com/index.html?ref=wellarchitected</a>
   * https://aws.amazon.com/architecture/well-architected/
   * https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/
   * https://wa.aws.amazon.com/index.en.html
   * June 2020 "Well Architected Framework" summary (155 pages) in <a target="_blank" href="https://www.amazon.com/AWS-Well-Architected-Framework-Whitepaper-ebook/dp/B08CFW9PXN/">Kindle mobile app</a>
   * https://explore.skillbuilder.aws/learn/course/2045/play/6898/the-aws-well-architected-framework

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/ ">Microsoft's WA Framework at https://docs.microsoft.com/en-us/azure/architecture/framework/ (introduced July, 2020)</a>

   * <a target="_blank" href="https://cloud.google.com/architecture/framework">Google's WA Framework at https://cloud.google.com/architecture/framework</a>


<a name="Pillars"></a>

### Pillars of the framework:

The five pillars are listed below in <strong>default priority</strong>.

   1. <a href="#Sec">SEC = <strong>Security</strong></a> = The ability to protect information, systems, and assets (applications and data) from threats. Google calls this "Security, privacy, and compliance".

   2. <a href="#Reliability">REL = <strong>Reliability</strong></a> = The ability to recover from failures and continue to function

   3. <a href="#Ops">OPS = <strong>Operational Excellence</strong></a> = The ability to run and monitor systems to deliver business value and continually improve supporting processes and procedures 

   4. <a href="#Perf">PERF = <strong>Performance Efficiency</strong></a> = The ability to adapt to changes in load (scale)

   5. <a href="#Cost">COST = <strong>Cost Optimization</strong></a> = The ability to achieve business outcomes at the lowest price point - Managing costs to maximize the value delivered

<em>Click each pillar name to go contents about that pillar. (Note that "you" and "your" have been removed from text by AWS):</em>

PROTIP: One mnemonic to make the 5 easier to remember is "CROPS".

   * Google adds a "System Design" pillar.

   * Amazon announced a 6th <strong>Sustainability</strong> pillar, for "Minimizing the environmental impacts of running cloud workloads. It includes a shared responsibility model for sustainability, understanding impact, and maximizing utilization to minimize required resources and reduce downstream impacts". Examples are over-provisioning, using Gravaton (non-x86) CPUs, etc  .

ACTIVITY 1 - Have each member of your team do a mental exercise to <strong>prioritize the pillars</strong> as the basis for a discussion, as a team. (Why? The Dunning-Kruger effect). Example discussion:

   * "Operational Excellence" has to go first because that's about getting up and running with basic services.

   * "Security" has to go first because we don't want to have the risk of anything exposed and thus ruin our brand.

   * Let's not slow ourselves down with Cost considerations when getting started.

   * PROTIP: It's really not appropriate to rank these pillars. They need to be done all at once. So we need to look in each and prioritize the impact of tasks within each pillar.

## Common definitions:

   Each "<strong>workload</strong>" is "a collection of interrelated applications, infrastructure, policy, governance, and operations running on AWS that provides business or operational value". A workload can span several AWS accounts.

   A "<strong>technology portfolio</strong>" is the collection of workloads that are required for the business to operate.

   A "<strong>component</strong>" is the code, configuration, and  resources that together deliver against a requirement. A component is often the unit of technical ownership, and is decoupled from other components.

   The "<strong>architecture</strong>" is how components work together in a workload, usually illustrated by  architecture diagrams that show how components communicate and interact.

   The "<strong>organization</strong>" refers to the people in the hierarchy of reporting relationships. 

   The "<strong>AWS Organization</strong>" refers to the top-1. <a target="_blank" href="?">Organization setting, with special permissions to an administrator of it.

   <a target="_blank" href="https://wa.aws.amazon.com/wat.concept.runbook.en.html">Runbooks</a> are predefined procedures containing the minimum information necessary to successfully perform the procedure.

   <a target="_blank" href="https://wa.aws.amazon.com/wat.concept.playbook.en.html">Playbooks</a> document the investigation process - the predefined steps to gathering applicable information, identifying potential sources of failure, isolating faults, or determining the root cause of issues.

   <a target="_blank" href="https://wa.aws.amazon.com/wat.concepts.wa-concepts.en.html">Other AWS concepts</a>


## WA Assessment Tools

Both Microsoft Azure and Amazon AWS have a WA assessment tool.

But Microsoft's tool comes up with recommendations automatically based on what has been configured in its Azure cloud.

### Microsoft Azure Advisor

Microsoft's <a target="_blank" href="https://docs.microsoft.com/en-us/azure/advisor/advisor-overview">Advisor tool</a> under its "Azure Monitoring and Management" menu pane presents a dashboard to display <a target="_blank" href="https://docs.microsoft.com/en-us/azure/advisor/azure-advisor-score">scores</a> calculated daily:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/139440387-2a34a7a7-121e-479f-8760-c64654866c17.png">
<img width="967" alt="ws-azure-advisor-dashboard-1934x1282" src="https://user-images.githubusercontent.com/300046/139440387-2a34a7a7-121e-479f-8760-c64654866c17.png"></a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/advisor/advisor-security-recommendations">Security recommendations</a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/advisor/advisor-high-availability-recommendations">Reliability (HA)</a><br /><a target="_blank" href="https://user-images.githubusercontent.com/300046/139447121-e8ba4797-80c8-4f0a-861d-c023dcb44fb6.png"><img src="wa=azure-advisor-score-rel-2555x1295" src="https://user-images.githubusercontent.com/300046/139447121-e8ba4797-80c8-4f0a-861d-c023dcb44fb6.png"></a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/advisor/advisor-performance-recommendations">Performance recommendations</a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/advisor/advisor-operational-excellence-recommendations">Operational Excellence recommendations</a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations">Cost recommendations</a> includes "Potential yearly savings" specific to each impacted resource:<br /><a taget="_blank" href="https://user-images.githubusercontent.com/300046/139529616-c8a45f35-23db-45a4-b1ee-3027bb9fa139.png">
   <img alt="wa-azure-cost-1802x260" src="https://user-images.githubusercontent.com/300046/139529616-c8a45f35-23db-45a4-b1ee-3027bb9fa139.png"></a>

Azure Advisor <a target="_blank" href="https://docs.microsoft.com/en-us/azure/advisor/advisor-get-started">automatically identifies</a> low-utilization virtual machines when: 
   * Average CPU utilization is 5% or less (configurable to 5%, 10%, 15%, or 20%)
   * network utilization is less than 2% 
   * current workload can be accommodated by a smaller virtual machine size.
   <br /><br />


### AWS partner dashbird.io

Amazon partner <a target="_blank" href="https://dashbird.io/">dashbird.io/</a> (for $79/mo. after 14 day trial) continuously runs multiple best practice checks against serverless workloads, to provide actionable advice on how to improve the applications in alignment with Well-Architected best practices.


### AWS WA Assessment Tool

<img align="right" width="99" alt="well-architected-aws-tool-154x254.png" src="https://user-images.githubusercontent.com/300046/139374726-0a7d74c5-86f8-4f67-a79b-b4f1038ab1c0.png">
<a target="_blank" href="https://www.youtube.com/watch?v=i-ErdXn9DFA&3m21s">VIDEO</a>:
   * <a target="_blank" href="https://www.youtube.com/watch?v=MfxF-FYEFjY">VIDEO: Build Better Workloads</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=yb9CH3UbMbw" title="Oct 14, 2019">VIDEO: Are You Well-Architected?</a> by AWS.
   <br /><br />

1. Get credentials to sign into AWS GUI console and <a target="_blank" href="htts://wilsonmar.github.io/aws-cli/">AWS CLI</a>.

2. In a browser, go to the (free) AWS WA Tool (introduced 2018) provides a set of questions (context) and best practices:

   <a target="_blank" href="https://console.aws.amazon.com/wellarchitected">https://console.aws.amazon.com/wellarchitected</a>

3. Click orange "Define workload".

3. Specify a name for the workload under assessment. If you're using a shared account, enter <strong>your name</strong> such as:

   <tt>wilson's all xxx workload</tt>

   The "xxx" stands for the list of AWS account numbers specified for this assessment.

4. Click "Well-Architected Framework" to get to the content of questions and answers.

5. One pillar at a time, in the <a href="#Pillars">priority identified</a>, select each question, then select applicable items.


   ### Lens

6. If applicable, select a <strong>lens</strong> (listed alphabetically here) to reveal additional terms, processes, etc.:

   * Analytics: <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/analytics-lens/welcome.html">HTML</a> \| <a target="_blank" href="https://www.amazon.com/Analytics-Lens-AWS-Well-Architected-Framework-ebook/dp/B088YVNGP7/" title="May 19, 2020">95 pages on Kindle (mobile) app</a>. The AWS Analytics Lens consists of these layers:

     * Data Ingestion Layer
     * Data Access and Security Layer
     * Catalog and Search Layer
     * Central Storage Layer
     * Processing and Analytics Layer
     * User Access and Interface Layer
     <br /><br />

     Analytics Scenarios:

     * Data Lake
     * Batch Data Processing
     * Streaming Ingest and Stream Processing
     * Lambda Architecture
     * Data Science
     * Multi-tenant Analytics
     <br /><br />

   * Financial Services Industry: <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/financial-services-industry-lens/welcome.html">HTML</a> \| <a target="_blank" href="https://www.amazon.com/Financial-Services-Industry-Lens-Well-Architected-ebook/dp/B088WBNVQL/" title="May 18, 2020">71 pages on Kindle (mobile) app</a>

   * High-Performance Computing (HPC): <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/high-performance-computing-lens/welcome.html">HTML</a> \| <a target="_blank" href="https://www.amazon.com/High-Performance-Computing-Lens-Well-Architected-Whitepaper-ebook/dp/B082TRK76F/" title="December 15, 2019">55 pages on Kindle (mobile) app</a>. 
     * Loosely Coupled Scenarios
     * Tightly Coupled Scenarios
     <br /><br />

   * IoT: <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/iot-lens/welcome.html">HTML</a> \| <a target="_blank" href="https://www.amazon.com/IoT-Lens-Well-Architected-Framework-Whitepaper-ebook/dp/B082XSCMRX/" title="December 19, 2019">77 pages on Kindle (mobile) app</a>.    The AWS IoT Lens consists of these layers:

     * Design and Manufacturing Layer
     * Edge Layer
     * Provisioning Layer
     * Communication Layer
     * Ingestion Layer
     * Analytics Layer
     * Application Layer
     <br /><br />

   * SaaS: <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/saas-lens.html">HTML</a> \| <a target="_blank" href="https://www.amazon.com/SaaS-Lens-AWS-Well-Architected-Framework-ebook/dp/B08QZZ6DLM/" title="December 17, 2020">87 pages on Kindle (mobile) app</a>

   * Serverless Applications: <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/iot-lens/welcome.html">HTML</a> \| <a target="_blank" href="https://www.amazon.com/Serverless-Applications-Lens-Well-Architected-Whitepaper-ebook/dp/B082TXMZ5T/" title="December 15, 2019">91 pages on Kindle (mobile) app</a>  

   * Machine Learning: <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lens.html">HTML</a> \| <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/wellarchitected-machine-learning-lens.pdf#machine-learning-lens">PDF</a> \| <a target="_blank" href="https://www.amazon.com/Machine-Learning-Lens-Well-Architected-Whitepaper-ebook/dp/B09JDTVPJX/" title="October 12, 2021">265 pages on Kindle (mobile) app</a>
    
    The Machine Learning Lens breaks down process <strong>lifecycle phases</strong> in this Lifecycle architecture diagram:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/139376680-423048be-2df0-4fb4-980c-9958b40da0ea.png">
   <img alt="well-architected-ml-lifecycle-phases-977x124" src="https://user-images.githubusercontent.com/300046/139376680-423048be-2df0-4fb4-980c-9958b40da0ea.png"></a>

   1. Business goal identification
   2. ML problem framing
   3. Data processing (Prepare and Process Data Features)
   4. Model development (Train, Tune, Evaluate)
   5. Deployment
   6. Monitoring
   <br /><br />

<a target="_blank" href="https://aws.amazon.com/about-aws/whats-new/2020/12/apis-now-available-for-aws-well-architected-tool/">BLOG: APIs now available for the AWS Well-Architected Tool</a>

### Microsoft Training on WA

<a target="_blank" href="https://docs.microsoft.com/en-us/assessments/?id=azure-architecture-review&mode=pre-assessment">
Microsoft Azure Well-Architected Review</a> provides guidance by pillar.


### AWS Milestones

The AWS WA Tool has a way to save several milestones to show an annotated line chart about progress over time.

But note that it's for work across all pillars together, not for individual pillars.

<hr />

## Cloud Adoption Framework

<a target="_blank" href="https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/welcome.html" title="November 22, 2021">AWS Cloud Adoption Framework (AWS CAF)</a> discusses these (yet another set of) perspectives:

   * Business
   * People
   * Governance
   * Platform
   * Security
   * Operations
   <br /><br />

<a target="_blank" href="https://user-images.githubusercontent.com/300046/149641454-9ff03c13-02d9-4964-88a4-0190e9811be4.png"><img alt="aws-cloud-adoption-11-2500x1470" src="https://user-images.githubusercontent.com/300046/149641454-9ff03c13-02d9-4964-88a4-0190e9811be4.png"></a>


<hr />

### General Design Principles

AWS published these General Design Principles:

   * <strong>Stop guessing capacity needs</strong> - if you make a poor capacity decision when deploying a workload, the team might end up sitting on expensive idle resources or dealing with the performance implications of limited capacity. With cloud computing, these problems can go away. Use as much or as little capacity as needed, and scale up and down automatically.

   * <strong>Test systems at production scale</strong> - In the cloud, a production-scale test environment can be created on demand, complete testing, and then decommission the resources. Because payment is only for the test environment when it's running, you can simulate live environments for a fraction of the cost of testing on premises.

   * <strong>Automate to make architectural experimentation easier</strong> (everything in AWS is an API) - Automation allows you to create and replicate workloads at low cost and avoid the expense of manual effort. You can track changes to the automation, audit the impact, and revert to previous parameters when necessary.

   * <strong>Allow for evolutionary architectures</strong> -  In a traditional environment, architectural decisions are often implemented as static, onetime events, with a few major versions of a system during its lifetime. As a business and its context continue to evolve, these initial decisions might hinder the system's ability to deliver changing business requirements. In the cloud, the capability to automate and test on demand lowers the risk of impact from design changes. This allows systems to evolve over time so that businesses can take advantage of innovations as a standard practice.

   * <strong>Drive architectures using data</strong> - In the cloud, you can collect data on how architectural choices affect the behavior of  workloads. This enable fact-based decisions on how to improve  workloads. Cloud infrastructure is code, so that data can be used to inform architecture choices and improvements over time.

   * <strong>Improve through "game days"</strong> (dry-run simulation, chaos engineering, etc.) - Test how architecture and processes perform by regularly scheduling game days to simulate events in production. This will help you understand where improvements can be made and can help develop organizational experience in dealing with events.

But what are specific actions?


<a target="_blank" href="https://explore.skillbuilder.aws/learn/course/2045/AWS%2520Well-Architected">
AWS Skillbuilder video courses</a> are rather verbose and high-level, but provides knowledge checks (quizzes).

<hr />

### AWS Well-Architected Labs

Specific hands-on labs from <a target="_blank" href="https://wellarchitectedlabs.com/">https://wellarchitectedlabs.com</a> built (using Hugo) from <a target="_blank" href="https://github.com/awslabs/aws-well-architected-labs">https://github.com/awslabs/aws-well-architected-labs</a> 
for <a href="#Pillars">each pillar</a> in the sections to follow:

   1. <a href="#SecLabs">SEC = <strong>Security</strong></a> = The ability to protect information, systems, and assets (applications and data) from threats. Google calls this "Security, privacy, and compliance".

   2. <a href="#ReliabilityLabs">REL = <strong>Reliability</strong></a> = The ability to recover from failures and continue to function

   3. <a href="#OpsLabs">OPS = <strong>Operational Excellence</strong></a> = The ability to run and monitor systems to deliver business value and continually improve supporting processes and procedures 

   4. <a href="#PerfLabs">PERF = <strong>Performance Efficiency</strong></a> = The ability to adapt to changes in load (scale)

   5. <a href="#CostLabs">COST = <strong>Cost Optimization</strong></a> = The ability to achieve business outcomes at the lowest price point - Managing costs to maximize the value delivered

   6. <a href="#SustLabs"><strong>Sustainability</strong></a>

AWS provides <a target="_blank" href="https://aws.amazon.com/partners/programs/well-architected/">its partners</a> in-depth training on the Well-Architected Framework so they help companies implement best practices, measure the state of workloads, and make improvements where assistance is required.

The AWS WellArchitectedLabs.com has dozens of labs, grouped by 

### &nbsp; &nbsp; &nbsp; &nbsp; Operational Excellence

1. <a target="_blank" href="https://www.wellarchitectedlabs.com/operational-excellence/100_labs/100_inventory_patch_management/">
    100 - Inventory and Patch Management</a>
1. <a target="_blank" href="https://www.wellarchitectedlabs.com/operational-excellence/100_labs/100_dependency_monitoring/">
    100 - Dependency Monitoring</a>
1. <a target="_blank" href="https://www.wellarchitectedlabs.com/operational-excellence/200_labs/200_automating_operations_with_playbooks_and_runbooks/">
    200 - Automating operations with Playbooks and Runbooks</a>

   <a name="WAFLab-Sec"></a>
   
   ### Security

1. <a target="_blank" href="https://wellarchitectedlabs.com/security/100_labs/">100:  Foundational Labs</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/200_labs/200_automated_deployment_of_vpc/">200: Automated Deployment of VPC</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/200_labs/200_automated_deployment_of_web_application_firewall/">200: Automated Deployment of Web Application Firewall</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/200_labs/200_automated_iam_user_cleanup/">200: Automated IAM User Cleanup</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/200_labs/200_basic_ec2_with_waf_protection/">200: Basic EC2 Web Application Firewall Protection</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/200_labs/200_certificate_manager_request_public_certificate/">200: AWS Certificate Manager Request Public Certificate</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/200_labs/200_cloudfront_for_web_application/">200: CloudFront for Web Application</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/200_labs/200_cloudfront_with_waf_protection/">200: CloudFront with WAF Protection</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/200_labs/200_remote_configuration_installation_and_viewing_cloudwatch_logs/">200: Remote Configuration, Installation, and Viewing of CloudWatch logs</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/300_labs/300_multilayered_api_security_with_cognito_and_waf/">300: Multilayered API Security with Cognito and WAF</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/300_labs/300_autonomous_monitoring_of_cryptographic_activity_with_kms/">300: Autonomous Monitoring Of Cryptographic Activity With KMS</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/300_labs/300_autonomous_patching_with_ec2_image_builder_and_systems_manager/">300: Autonomous Patching With EC2 Image Builder And Systems Manager</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/300_labs/300_iam_permission_boundaries_delegating_role_creation/">300: IAM Permission Boundaries Delegating Role Creation</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/300_labs/300_iam_tag_based_access_control_for_ec2/">300: IAM Tag Based Access Control for EC2</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/300_labs/300_incident_response_playbook_with_jupyter-aws_iam/">300: Incident Response Playbook with Jupyter - AWS IAM</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/300_labs/300_incident_response_with_aws_console_and_cli/">300: Incident Response with AWS Console and CLI</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/300_labs/300_lambda_cross_account_bucket_policy/">300: Lambda Cross Account Using Bucket Policy</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/300_labs/300_lambda_cross_account_iam_role_assumption/">300: Lambda Cross Account IAM Role Assumption</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/security/300_labs/300_vpc_flow_logs_analysis_dashboard/">300: VPC Flow Logs Analysis Dashboard</a>

   ### Reliability

1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/100_labs/100_deploy_cloudformation/">100: Deploy a Reliable Multi-tier Infrastructure using CloudFormation</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/200_labs/200_bidirectional_replication_for_s3/">200: Implementing Bi-Directional Cross-Region Replication (CRR) for Amazon Simple Storage Service (Amazon S3)</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/200_labs/200_deploy_and_update_cloudformation/">200: Deploy and Update CloudFormation</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/200_labs/200_testing_backup_and_restore_of_data/"> 200: Testing Backup and Restore of Data</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/200_labs/200_testing_for_resiliency_of_ec2/"> 200: Testing for Resiliency of EC2 instances</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/200_labs/200_backup_restore_failback_analytics/"> 200: Backup and Restore with Failback for Analytics Workload</a>

1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/300_labs/300_health_checks_and_dependencies/"> 300: Implementing Health Checks and Managing Dependencies to improve Reliability</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/300_labs/300_testing_for_resiliency_of_ec2_rds_and_s3/"> 300: Testing for Resiliency of EC2, RDS, and AZ</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/300_labs/300_fault_isolation_with_shuffle_sharding/"> 300: Fault Isolation with Shuffle Sharding</a>

1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/100_labs/100_deploy_cloudformation/">100: Deploy a Reliable Multi-tier Infrastructure using CloudFormation</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/200_labs/200_bidirectional_replication_for_s3/">200: Implementing Bi-Directional Cross-Region Replication (CRR) for Amazon Simple Storage Service (Amazon S3)</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/200_labs/200_deploy_and_update_cloudformation/">200: Deploy and Update CloudFormation</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/200_labs/200_testing_backup_and_restore_of_data/"> 200: Testing Backup and Restore of Data</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/200_labs/200_testing_for_resiliency_of_ec2/"> 200: Testing for Resiliency of EC2 instances</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/200_labs/200_backup_restore_failback_analytics/"> 200: Backup and Restore with Failback for Analytics Workload</a>

1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/300_labs/300_health_checks_and_dependencies/"> 300: Implementing Health Checks and Managing Dependencies to improve Reliability</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/300_labs/300_testing_for_resiliency_of_ec2_rds_and_s3/"> 300: Testing for Resiliency of EC2, RDS, and AZ</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/reliability/300_labs/300_fault_isolation_with_shuffle_sharding/"> 300: Fault Isolation with Shuffle Sharding</a>

   ### Performance Efficiency

1. <a target="_blank" href="https://wellarchitectedlabs.com/performance-efficiency/100_labs/100_monitoring_with_cloudwatch_dashboards/"> 100: Monitoring with CloudWatch Dashboards</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/performance-efficiency/100_labs/100_clock_source_performance/"> 100: Calculating differences in clock source</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/performance-efficiency/100_labs/100_monitoring_windows_ec2_cloudwatch/"> 100: Monitoring Windows EC2 instance with CloudWatch Dashboards</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/performance-efficiency/100_labs/100_monitoring_linux_ec2_cloudwatch/"> 100: Monitoring an Amazon Linux EC2 instance with CloudWatch Dashboards</a>

   ### Cost Optimization

1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/100_labs/100_1_aws_account_setup/"> 100: AWS Account Setup: Lab Guide</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/100_labs/100_2_cost_and_usage_governance/"> 100: Cost and Usage Governance</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/100_labs/100_3_pricing_models/"> 100: Pricing Models</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/100_labs/100_4_cost_and_usage_analysis/"> 100: Cost and Usage Analysis</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/100_labs/100_5_cost_visualization/"> 100: Cost Visualization</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/100_labs/100_aws_resource_optimization/"> 100: Rightsizing Recommendations</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/100_labs/100_cost_estimation/"> 100: Cost Estimation</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/100_labs/100_goals_and_targets/"> 100: Goals and Targets</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/100_labs/100_8_tag_policies/"> 100: Tag Policies</a>

1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/200_labs/200_2_cost_and_usage_governance/"> 200: Cost and Usage Governance</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/200_labs/200_3_pricing_models/"> 200: Pricing Models</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/200_labs/200_4_cost_and_usage_analysis/"> 200: Cost and Usage Analysis</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/200_labs/200_5_cost_visualization/"> 200: Cost Visualization</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/200_labs/200_aws_resource_optimization/"> 200: Rightsizing with Compute Optimizer</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/200_labs/200_pricing_model_analysis/"> 200: Pricing Model Analysis</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/200_labs/200_cloud_intelligence/"> 200: Cloud Intelligence Dashboards</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/200_labs/200_workload_efficiency/"> 200: Workload Efficiency</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/200_labs/200_licensing/"> 200: Licensing</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/200_labs/200_cost_journey/"> 200: Cost Journey</a>

1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/300_labs/300_automated_cur_query_and_email_delivery/"> 300: Automated Athena CUR Query and E-mail Delivery</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/300_labs/300_automated_cur_updates_and_ingestion/"> 300: Automated CUR Updates and Ingestion</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/300_labs/300_cur_queries/"> 300: AWS CUR Query Library</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/300_labs/300_splitting_sharing_cur_access/"> 300: Splitting the CUR and Sharing Access</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/300_labs/300_optimization_data_collection/"> 300: Optimization Data Collection</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/cost/300_labs/300_organization_data_cur_connection/"> 300: Organization Data CUR Connection</a>

   ### Sustainability

1. <a target="_blank" href="https://wellarchitectedlabs.com/sustainability/300_labs/300_optimize_data_pattern_using_redshift_data_sharing/"> 300: Optimize Data Pattern using Amazon Redshift Data Sharing</a>
1. <a target="_blank" href="https://wellarchitectedlabs.com/sustainability/300_labs/300_cur_reports_as_efficiency_reports/"> 300: Turning Cost & Usage Reports into Efficiency Reports</a>
   <br /><br />

## Sample App for Amazon

STAR: Follow <a target="_blank" href="https://wellarchitectedlabs.com/well-architectedpartners/100_labs/100_automating_serverless_best_practices_with_dashbird/1_deploy_blue_car_application/">these instructions to deploy Amazon's "Blue Car" sample app</a> from an <strong>Amazon Cloud Formation template</strong>.
It is a "JAM" stack app where JavaScript in each user's browser interacts with a public API Gateway to a backend API built using Lambda:

   * <a target="_blank" href="https://aws.amazon.com/cloud9/">Amazon Cloud9 IDE</a> in the cloud
   
   * Amazon Cognito provides user management and authentication functions to secure the backend API
   * AWS Amplify hosts the static website with CI/CD build-in 
   * Amazon API Gateway provides a persistence layer where data can be stored by the API’s Lambda function
   * AWS Lambda to process requests
   * Amazon DynamoDB provides a persistence layer where data can be stored by the API’s Lambda function.
   <br /><br />

STATUS: I've been getting an error. Maintainer Stephen Salim contacted for below: Use <a target="_blank" href="https://wellarchitectedlabs.com/wapartners/100_Automating_Serverless_Best_Practices_with_Dashbird/Code/templates/section1/section1-oncall-health-sample-app.yaml">this</a> <a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-create-stack.html">stack</a>.


<hr />

<a name="Sec"></a>

## Security pillar

<img align="right" width="99" alt="well-architected-SEC-gold-101x134.png" src="https://user-images.githubusercontent.com/300046/139144053-7c59ff46-8774-4684-bed2-df3e9dd4fc71.png">References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=GdzZUXfzw2k" title="Sep 16, 2021">VIDEO: AWS Well Architected Cloud Framework, a Deep-Dive into IT Security Pillar"</a>
   * https://wa.aws.amazon.com/wat.pillar.security.en.html
   * <a target="_blank" href="https://www.youtube.com/watch?v=ujRf2BzgGGg">VIDEO: Well-Architected for Security: Advanced Session</a> by Amazon Web Services
   * <a target="_blank" href="https://www.amazon.com/Security-Pillar-Well-Architected-Framework-Whitepaper-ebook/dp/B08CF64XRV/" title="July 5, 2020">56 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/security/">AWS Well-Architected Labs for Security</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=i-ErdXn9DFA">VIDEO: AWS Tech talk</a>
   * <a target="_blank" href="https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html">AWS Security Reference Architecture (AWS SRA)</a>  is a holistic set of guidelines for deploying the full complement of AWS security services in a multi-account environment, with <a target="_blank" href="https://github.com/aws-samples/aws-security-reference-architecture-examples">examples in GitHub</a> for Customizations for AWS <a target="_blank" href="https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-with-control-tower.html">Control Tower</a> (CFCT).

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/security/">Microsoft Security Documentation</a>
   
   * <a target="_blank" href="https://cloud.google.com/architecture/framework/security">Google: Security, privacy, and compliance</a>
   <br /><br />

The broad security areas:

* Identity and access management
* Infrastructure protection
* Data protection: sovereignty and encryption
* Incidence response
* Application security
* Security resources
<br /><br />

Key Design principles for security in the cloud:

* Implement a strong identity foundation
* Enable traceability
* Apply security at all layers (levels)

* Automate security best practices
* Protect data in transit and at rest
* Keep people away from data
* Prepare for security events (incident response)

* Identify and validate control objectives
* Automate testing and validation of security controls in pipelines
<br /><br />

<hr />

Best practices:

1. <a href="#SecureWorkload">Securely operate each workload</a>
2. <a href="#ManageIdentities">Manage identities for people and machines</a>
3. <a href="#ManagePermissions">Manage permissions for people and machines</a>
4. <a href="#DetectEvents">Detect and investigate security events</a>
5. <a href="#ProtectNetwork">Protect network resources</a>
6. <a href="#ProtectCompute">Protect compute resources</a>
7. <a href="#ClassifyData">Classify data</a>
8. <a href="#ProtectDataAtRest">Protect data at rest</a>
9. <a href="#ProtectDataInTransit">Protect data in transit</a>
10. <a href="#IncidentRecovery">Anticipate, respond to, and recover from incidents</a>
<br /><br />

Questions:

<a name="SecureWorkload"></a>

1. How do you securely operate each workload?

   1. <strong>Separate workloads using accounts</strong> - Organize workloads in separate accounts and group accounts based on function or a common set of controls rather than mirroring the company’s reporting structure. Start with security and infrastructure in mind to enable the organization to set common guardrails as workloads grow.

   2. <strong>Secure AWS account Secure access to accounts</strong> - for example by enabling MFA and restrict use of the root user, and configure account contacts.

   3. <strong>Identify and validate control objectives</strong> - Based on compliance requirements and risks identified from the threat model, derive and validate the control objectives and controls that you need to apply to workloads. Ongoing validation of control objectives and controls help you measure the effectiveness of risk mitigation.

   4. <strong>Keep up to date with security threats</strong> - Recognize attack vectors by staying up to date with the latest security threats to help you define and implement appropriate controls.

   5. <strong>Keep up to date with security recommendations</strong> - Stay up to date with both AWS and industry security recommendations to evolve the security posture of workloads.

   6. <strong>Automate testing and validation of security controls in pipelines</strong> - Establish secure baselines and templates for security mechanisms that are tested and validated as part of builds, pipelines, and processes. Use tools and automation to test and validate all security controls continuously. For example, scan items such as machine images and infrastructure as code templates for security vulnerabilities, irregularities, and drift from an established baseline at each stage.

   7. <strong>Identify and prioritize risks using a threat model</strong> - Use a threat model to identify and maintain an up-to-date register of potential threats. Prioritize threats and adapt security controls to prevent, detect, and respond. Revisit and maintain this in the context of the evolving security landscape.

   8. <strong>Evaluate and implement new security services and features regularly</strong> - AWS and APN Partners constantly release new features and services that allow you to evolve the security posture of workloads.

   <a name="ManageIdentities"></a>

2. How do you manage identities for people and machines?

   1. <strong>Use strong sign-in mechanisms</strong> - Enforce minimum password length, and educate users to avoid common or re-used passwords. Enforce multi-factor authentication (MFA) with software or hardware mechanisms to provide an additional layer. Use temporary credentials

   1. <strong>Require identities to dynamically acquire temporary credentials.</strong> - For workforce identities, use AWS Single Sign-On, or federation with IAM roles to access AWS accounts. For machine identities, require the use of IAM roles instead of long term access keys.

   1. <strong>Store and use secrets securely</strong> - For workforce and machine identities that require secrets such as passwords to third party applications, store them with automatic rotation using the latest industry standards in a specialized service.

   1. <strong>Rely on a centralized identity provider</strong> - For workforce identities, rely on an identity provider that enables you to manage identities in a centralized place. This enables you to create, manage, and revoke access from a single location making it easier to manage access. This reduces the requirement for multiple credentials and provides an opportunity to integrate with HR processes.

   1. <strong>Audit and rotate credentials periodically</strong> - When you cannot rely on temporary credentials and require long term credentials, audit credentials to ensure that the defined controls (for example, MFA) are enforced, rotated regularly, and have appropriate access level.

   1. <strong>Leverage user groups and attributes</strong> - Place users with common security requirements in groups defined by identity providers, and put mechanisms in place to ensure that user attributes that may be used for access control (e.g., department or location) are correct and updated. Use these groups and attributes, rather than individual users, to control access. This manages access centrally by changing a user’s group membership or attributes once, rather than updating many individual policies when a user’s access needs change.

   <a name="ManagePermissions"></a>

3. How do you manage permissions for people and machines?

   1. <strong>Define access requirements</strong> - Each component or resource of a workload needs to be accessed by administrators, end users, or other components. Have a clear definition of who or what should have access to each component, choose the appropriate identity type and method of authentication and authorization.

   2. <strong>Grant least privilege access</strong> - Grant only the access that identities require by allowing access to specific actions on specific AWS resources under specific conditions. Rely on groups and identity attributes to dynamically set permissions at scale, rather than defining permissions for individual users. For example, you can allow a group of developers access to manage only resources for their project. This way, when a developer is removed from the group, access for the developer is revoked everywhere that group was used for access control, without requiring any changes to the access policies.

   1. <strong>Establish emergency access process</strong> - A process that allows emergency access to workloads in the unlikely event of an automated process or pipeline issue. This will help you rely on least privilege access, but ensure users can obtain the right 1. <a target="_blank" href="?">of access when they require it. For example, establish a process for administrators to verify and approve their request.

   1. <strong>Reduce permissions continuously</strong> - As teams and workloads determine what access they need, remove permissions they no longer use and establish review processes to achieve least privilege permissions. Continuously monitor and reduce unused identities and permissions.

   1. <strong>Define permission guardrails for the organization</strong> - Establish common controls that restrict access to all identities in the organization. For example, you can restrict access to specific AWS Regions, or prevent operators from deleting common resources, such as an IAM role used for the central security team.

   1. <strong>Manage access based on life cycle</strong> - Integrate access controls with operator and application life cycle and  centralized federation providers. For example, remove a user’s access when they leave the organization or change roles.

   1. <strong>Analyze public and cross account access</strong> - Continuously monitor findings that highlight public and cross account access. Reduce public access and cross account access to only resources that require this type of access.

   1. <strong>Share resources securely</strong> - Govern the consumption of shared resources across accounts or within the AWS Organization. Monitor shared resources and review shared resource access.

   <a name="DetectEvents"></a>

4. How do you detect and investigate security events?

   1. <strong>Configure service and application logging</strong> - Configure logging throughout the workload, including application logs, resource logs, and AWS service logs. For example, ensure that AWS CloudTrail, Amazon CloudWatch Logs, Amazon GuardDuty and AWS Security Hub are enabled for all accounts within the organization.

   1. <strong>Analyze logs, findings, and metrics centrally</strong> - All logs, metrics, and telemetry should be collected centrally, and automatically analyzed to detect anomalies and indicators of unauthorized activity. A dashboard can provide you easy to access insight into real-time health. For example, ensure that Amazon GuardDuty and Security Hub logs are sent to a central location for alerting and analysis.

   1. <strong>Automate response to events</strong> - Using automation to investigate and remediate events reduces human effort and error, and enables you to scale investigation capabilities. Regular reviews will help you tune automation tools, and continuously iterate. For example, automate responses to Amazon GuardDuty events by automating the first investigation step, then iterate to gradually remove human effort.

   1. <strong>Implement actionable security events</strong> - Create alerts that are sent to and can be actioned by the team. Ensure that alerts include relevant information for the team to take action. For example, ensure that Amazon GuardDuty and AWS Security Hub alerts are sent to the team to action, or sent to response automation tooling with the team remaining informed by messaging from the automation framework.

   <a name="ProtectNetwork"></a>

5. How do you protect network resources?

   1. <strong>Create network layers</strong> - Group (separate) components that share reachability requirements into layers. For example, a database cluster in a VPC with no need for internet access should be placed in subnets with no route to or from the internet. In a serverless workload operating without a VPC, similar layering and segmentation with microservices can achieve the same goal.

   1. <strong>Control traffic at all layers</strong> - Apply controls with a defense in depth approach for both inbound and outbound traffic. For example, for Amazon Virtual Private Cloud (VPC) this includes security groups, Network ACLs, and subnets. For AWS Lambda, consider running in private VPC with VPC-based controls.

   1. <strong>Automate network protection</strong> - Automate protection mechanisms to provide a self-defending network based on threat intelligence and anomaly detection. For example, intrusion detection and prevention tools that can pro-actively adapt to current threats and reduce their impact.

   1. <strong>Implement inspection and protection</strong> - Inspect and filter traffic at each layer. For example, use a web application firewall to help protect against inadvertent access at the application network layer. For Lambda functions, third-party tools can add application-layer firewalling to the runtime environment.

   <a name="ProtectCompute"></a>

6. How do you protect compute resources?

   1. <strong>Perform vulnerability management</strong> - Frequently scan and patch for vulnerabilities in code, dependencies, and  infrastructure to help protect against new threats.

   1. <strong>Reduce attack surface</strong> - Reduce attack surfaces by hardening operating systems, minimizing components, libraries, and externally consumable services in use.

   1. <strong>Implement managed services</strong> - Implement services that manage resources, such as Amazon RDS, AWS Lambda, and Amazon ECS, to reduce security maintenance tasks as part of the shared responsibility model.

   1. <strong>Automate compute protection</strong> - Automate protective compute mechanisms, including vulnerability management, for reduction in attack surface, and management of resources.

   1. <strong>Enable people to perform actions at a distance</strong> - Removing the ability for interactive access reduces the risk of human error, and the potential for manual configuration or management. For example, use a change management workflow to deploy EC2 instances using infrastructure as code, then manage EC2 instances using tools instead of allowing direct access or a bastion host.

   1. <strong>Validate software integrity</strong> - Implement mechanisms (for example, code signing) to validate that the software, code, and libraries used in the workload are from trusted sources and have not been tampered with.

   <a name="ClassifyData"></a>

7. How do you classify data?

   1. <strong>Identify the data within workloads</strong> - This includes the type and classification of data, the associated business processes. data owner, applicable legal and compliance requirements, where it’s stored, and the resulting controls that are needed to be enforced. This may include classifications to indicate if the data is intended to be publicly available, if the data is internal use only such as customer personally identifiable information (PII), or if the data is for more restricted access such as intellectual property, legally privileged or marked sensitive  , and more.

   1. <strong>Define data protection controls</strong> - Protect data according to its classification level. For example, secure data classified as public by using relevant recommendations while protecting sensitive data with additional controls. Automate identification and classification</strong> of data to reduce the risk of human error from manual interactions.

   1. <strong>Define data lifecycle management</strong> - The defined lifecycle strategy should be based on sensitivity level, as well as legal and organization requirements. Aspects including the duration you retain data for, data destruction, data access management, data transformation, and data sharing should be considered.

   <a name="ProtectDataAtRest"></a>

8. How do you protect data at rest?

   1. <strong>Implement secure key management</strong> - Encryption keys must be stored securely, with strict access control, for example, by using a key management service such as AWS KMS. Consider using different keys, and access control to the keys, combined with the AWS IAM and resource policies, to align with data classification levels and segregation requirements.

   1. <strong>Enforce encryption at rest</strong> - Enforce encryption requirements based on the latest standards and recommendations to help protect data at rest.

   1. <strong>Automate data at rest protection</strong> - Use automated tools to validate and enforce data at rest protection continuously, for example, verify that there are only encrypted storage resources.

   1. <strong>Enforce access control</strong> - Enforce access control with least privileges and mechanisms, including backups, isolation, and versioning, to help protect data at rest. Prevent operators from granting public access to data.

   1. <strong>Use mechanisms to keep people away from data</strong> - Keep all users away from directly accessing sensitive data and systems under normal operational circumstances. For example, provide a dashboard instead of direct access to a data store to run queries. Where CI/CD pipelines are not used, determine which controls and processes are required to adequately provide a normally disabled break-glass access mechanism.

   <a name="ProtectDataInTransit"></a>

9. How do you protect data in transit?

   1. <strong>Implement secure key and certificate management</strong> - Store encryption keys and certificates securely and rotate them at appropriate time intervals while applying strict access control; for example, by using a certificate management service, such as AWS Certificate Manager (ACM).

   1. <strong>Enforce encryption in transit</strong> - Enforce defined encryption requirements based on appropriate standards and recommendations to help you meet organizational, legal, and compliance requirements.

   1. <strong>Automate detection of unintended data access</strong> - Use tools such as GuardDuty to automatically detect attempts to move data outside of defined boundaries based on data classification level, for example, to detect a trojan that is copying data to an unknown or untrusted network using the DNS protocol.

   1. <strong>Authenticate network communications</strong> - Verify the identity of communications by using protocols that support authentication, such as Transport Layer Security (TLS) or IPsec.

   <a name="IncidentRecovery"></a>

9. How do you anticipate, respond to, and recover from incidents?

   1. <strong>Identify key personnel and external resources</strong> - Identify internal and external personnel, resources, and legal obligations that would help the organization respond to an incident.

   1. <strong>Develop incident management plans</strong> - Create "playbooks" to help  respond to, communicate during, and recover from an incident. For example, start an <u>incident response plan</u> with the most likely scenarios for workloads and organizations. Include how you would communicate and escalate both internally and externally.

   1. <strong>Prepare forensic capabilities</strong> - Identify and prepare forensic investigation capabilities that are suitable, including external specialists, tools, and automation.

   1. <strong>Automate containment capability</strong> and recovery of an incident to reduce response times and organizational impact.

   1. <strong>Pre-provision access</strong> - Ensure that incident responders have the correct access pre-provisioned into AWS to reduce the time for investigation through to recovery.

   1. <strong>Pre-deploy tools</strong> - Ensure that security personnel have the right tools pre-deployed into AWS to reduce the time for investigation through to recovery.

   1. <strong>Run game days</strong> - Practice incident response game days (simulations) regularly, incorporate lessons learned into  incident management plans, and continuously improve.

<a name="SecLabs"></a>

<a target="_blank" href="https://wellarchitectedlabs.com/security/"><strong>AWS Security hands-on labs:</strong></a>


<hr />

<a name="Reliability"></a>

## Reliability pillar

<img align="right" width="99" alt="well-architected-RELI-152x170.png" src="https://user-images.githubusercontent.com/300046/139144457-0397ca9f-4964-42d7-aac0-33b98ac2e811.png">
   * https://wa.aws.amazon.com/wat.pillar.reliability.en.html
   * <a target="_blank" href="https://www.amazon.com/Reliability-Pillar-Well-Architected-Framework-Whitepaper-ebook/dp/B08L8CT213/" title="Oct 14, 2020">110 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/reliability/">AWS Well-Architected Labs for Reliability</a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/resiliency/">Microsoft Reliability Documentation</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-WP.DKxOITfunOuGg.6AkAA&epi=je6NUbpObpQ-WP.DKxOITfunOuGg.6AkAA&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=%28ir__9vgo0shoqkkf6hhygvquhus6yn2xo0iterylleoj00%29%287593%29%281243925%29%28je6NUbpObpQ-WP.DKxOITfunOuGg.6AkAA%29%28%29&irclickid=_9vgo0shoqkkf6hhygvquhus6yn2xo0iterylleoj00#reliability">Microsoft</a>

   * <a target="_blank" href="https://cloud.google.com/architecture/framework/reliability">Google: Reliability</a>
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

Best practices:

1. <a href="#ManageServiceQuotes">Manage service quotas and constraints</a>
2. <a href="#PlanNetwork">Plan network topology</a>
3. <a href="#DesignWorkload">Design workload service architecture</a>
4. <a href="#PreventFailures">Design interactions in a distributed system to prevent failures</a>
5. <a href="#WithstandFailure">Design interactions in a distributed system to mitigate or withstand failures</a>
6. <a href="#MonitorWorkload">Monitor workload resources</a>
7. <a href="#AdaptToDemand">Design workloads to adapt to changes in demand</a>
8. <a href="#ImplementChange">Implement change</a>
9. <a href="#BackUpData">Back up data</a>
10. <a href="#FaultIsolation">Use fault isolation to protect workloads</a>
11. <a href="#WithstandComponentFailure">Design workloads to withstand component failures</a>
12. <a href="#TestReliability">Test reliability</a>
13. <a href="#PlanforDR">Plan for disaster recovery (DR)</a>
<br /><br />

Questions:

<a name="ManageServiceQuotes"></a>

1. How do you manage service quotas and constraints?

   1. <strong>Aware of service quotas and constraints</strong> - You are aware of default quotas and quota increase requests for workload architecture. You additionally know which resource constraints, such as disk or network, are potentially impactful.

   1. <strong>Manage service quotas across accounts and regions</strong> - If you are using multiple AWS accounts or AWS Regions, ensure that you request the appropriate quotas in all environments in which  production workloads run.

   1. <strong>Accommodate fixed service quotas and constraints through architecture</strong> - Be aware of unchangeable service quotas and physical resources, and architect to prevent these from impacting reliability.

   1. <strong>Monitor and manage quotas</strong> - Evaluate potential usage and increase quotas appropriately allowing for planned growth in usage.

   1. <strong>Automate quota management</strong> - Implement tools to alert you when thresholds are being approached. By using AWS Service Quotas APIs, you can automate quota increase requests.

   1. <strong>Ensure that a sufficient gap exists between the current quotas and the maximum usage to accommodate failover</strong> - When a resource fails, it may still be counted against quotas until its successfully terminated. Ensure that quotas cover the overlap of all failed resources with replacements before the failed resources are terminated. You should consider an Availability Zone failure when calculating this gap.

   <a name="PlanNetwork"></a>

2. How do you plan network topology?

   1. <strong>Use highly available network connectivity for workload public endpoints</strong> - These endpoints and the routing to them must be highly available. To achieve this, use highly available DNS, content delivery networks (CDNs), API Gateway, load balancing, or reverse proxies.

   1. <strong>Provision redundant connectivity between private networks in the cloud and on-premises environments</strong> - Use multiple AWS Direct Connect (DX) connections or VPN tunnels between separately deployed private networks. Use multiple DX locations for high availability. If using multiple AWS Regions, ensure redundancy in at least two of them. You might want to evaluate AWS Marketplace appliances that terminate VPNs. If you use AWS Marketplace appliances, deploy redundant instances for high availability in different Availability Zones.

   1. <strong>Ensure IP subnet allocation accounts for expansion and availability</strong> - Amazon VPC IP address ranges must be large enough to accommodate workload requirements, including factoring in future expansion and allocation of IP addresses to subnets across Availability Zones. This includes load balancers, EC2 instances, and container-based applications.

   1. <strong>Prefer hub-and-spoke topologies over many-to-many mesh</strong> - If more than two network address spaces (for example, VPCs and on-premises networks) are connected via VPC peering, AWS Direct Connect, or VPN, then use a hub-and-spoke model, like that provided by AWS Transit Gateway.

   1. <strong>Enforce non-overlapping private IP address ranges in all private address spaces where they are connected</strong> - The IP address ranges of each of VPCs must not overlap when peered or connected via VPN. You must similarly avoid IP address conflicts between a VPC and on-premises environments or with other cloud providers that you use. You must also have a way to allocate private IP address ranges when needed.

   <a name="DesignWorkload"></a>

3. How do you design workload service architecture?

   1. <strong>Choose how to segment workloads</strong> - Monolithic architecture should be avoided. Instead, you should choose between SOA and microservices. When making each choice, balance the benefits against the complexities—what is right for a new product racing to first launch is different than what a workload built to scale from the start needs. The benefits of using smaller segments include greater agility, organizational flexibility, and scalability. Complexities include possible increased latency, more complex debugging, and increased operational burden

   1. <strong>Build services focused on specific business domains and functionality</strong> - SOA builds services with well-delineated functions defined by business needs. Microservices use domain models and bounded context to limit this further so that each service does just one thing. Focusing on specific functionality enables you to differentiate the reliability requirements of different services, and target investments more specifically. A concise business problem and having a small team associated with each service also enables easier organizational scaling.

   1. <strong>Provide service contracts per API</strong> - Service contracts are documented agreements between teams on service integration and include a machine-readable API definition, rate limits, and performance expectations. A versioning strategy allows clients to continue using the existing API and migrate their applications to the newer API when they are ready. Deployment can happen anytime, as long as the contract is not violated. The service provider team can use the technology stack of their choice to satisfy the API contract. Similarly, the service consumer can use their own technology.

   <a name="PreventFailures"></a>

4. How do you design interactions in a distributed system to prevent failures?

   1. <strong>Identify which kind of distributed system is required</strong> - Hard real-time distributed systems require responses to be given synchronously and rapidly, while soft real-time systems have a more generous time window of minutes or more for response. Offline systems handle responses through batch or asynchronous processing. Hard real-time distributed systems have the most stringent reliability requirements.

   1. <strong>Implement loosely coupled dependencies</strong> - Dependencies such as queuing systems, streaming systems, workflows, and load balancers are loosely coupled. Loose coupling helps isolate behavior of a component from other components that depend on it, increasing resiliency and agility

   1. <strong>Make all responses idempotent</strong> - An idempotent service promises that each request is completed exactly once, such that making multiple identical requests has the same effect as making a single request. An idempotent service makes it easier for a client to implement retries without fear that a request will be erroneously processed multiple times. To do this, clients can issue API requests with an idempotency token—the same token is used whenever the request is repeated. An idempotent service API uses the token to return a response identical to the response that was returned the first time that the request was completed.

   1. <strong>Do constant work</strong> - Systems can fail when there are large, rapid changes in load. For example, a health check system that monitors the health of thousands of servers should send the same size payload (a full snapshot of the current state) each time. Whether no servers are failing, or all of them, the health check system is doing constant work with no large, rapid changes.

   <a name="WithstandFailure"></a>

5. How do you design interactions in a distributed system to mitigate or withstand failures?

   1. <strong>Implement graceful degradation to transform applicable hard dependencies into soft dependencies</strong> - When a component's dependencies are unhealthy, the component itself can still function, although in a degraded manner. For example, when a dependency call fails, failover to a predetermined static response.

   1. <strong>Throttle requests</strong> - This is a mitigation pattern to respond to an unexpected increase in demand. Some requests are honored but those over a defined limit are rejected and return a message indicating they have been throttled. The expectation on clients is that they will back off and abandon the request or try again at a slower rate.

   1. <strong>Control and limit retry calls</strong> - Use exponential backoff to retry after progressively longer intervals. Introduce jitter to randomize those retry intervals, and limit the maximum number of retries.

   1. <strong>Fail fast and limit queues</strong> - If the workload is unable to respond successfully to a request, then fail fast. This allows the releasing of resources associated with a request, and permits the service to recover if it’s running out of resources. If the workload is able to respond successfully but the rate of requests is too high, then use a queue to buffer requests instead. However, do not allow long queues that can result in serving stale requests that the client has already given up on.

   1. <strong>Set client timeouts</strong> - Set timeouts appropriately, verify them systematically, and do not rely on default values as they are generally set too high

   1. <strong>Make services stateless where possible</strong> - Services should either not require state, or should offload state such that between different client requests, there is no dependence on locally stored data on disk or in memory. This enables servers to be replaced at will without causing an availability impact. Amazon ElastiCache or Amazon DynamoDB are good destinations for offloaded state.

   1. <strong>Implement emergency levers</strong> - These are rapid processes that may mitigate availability impact on workloads. They can be operated in the absence of a root cause. An ideal emergency lever reduces the cognitive burden on the resolvers to zero by providing fully deterministic activation and deactivation criteria. Example levers include blocking all robot traffic or serving a static response. Levers are often manual, but they can also be automated.

   <a name="MonitorWorkload"></a>

6. How do you monitor workload resources?

   1. <strong>Monitor all components for the workload (Generation)</strong> - Monitor the components of the workload with Amazon CloudWatch or third-party tools. Monitor AWS services with Personal Health Dashboard

   1. <strong>Define and calculate metrics (Aggregation)</strong> - Store log data and apply filters where necessary to calculate metrics, such as counts of a specific log event, or latency calculated from log event timestamps

   1. <strong>Send notifications (Real-time processing and alarming)</strong> - Organizations that need to know, receive notifications when significant events occur

   1. <strong>Automate responses (Real-time processing and alarming)</strong> - Use automation to take action when an event is detected, for example, to replace failed components

   1. <strong>Storage and Analytics</strong> - Collect log files and metrics histories and analyze these for broader trends and workload insights

   1. <strong>Conduct reviews regularly</strong> - Frequently review how workload monitoring is implemented and update it based on significant events and changes

   1. <strong>Monitor end-to-end tracing of requests through the system</strong> - Use AWS X-Ray or third-party tools so that developers can more easily analyze and debug distributed systems to understand how their applications and its underlying services are performing

   <a name="AdaptToDemand"></a>

7. How do you design workloads to adapt to changes in demand?

   1. <strong>Use automation when obtaining or scaling resources</strong> - When replacing impaired resources or scaling workloads, automate the process by using managed AWS services, such as Amazon S3 and AWS Auto Scaling. You can also use third-party tools and AWS SDKs to automate scaling.

   1. <strong>Obtain resources upon detection of impairment to a workload</strong> - Scale resources reactively when necessary if availability is impacted, to restore workload availability.

   1. <strong>Obtain resources upon detection that more resources are needed for a workload</strong> - Scale resources proactively to meet demand and avoid availability impact.

   1. <strong>Load test workloads</strong> - Adopt a load testing methodology to measure if scaling activity meets workload requirements.

   <a name="ImplementChange"></a>

8. How do you implement change?

   1. <strong>Use runbooks for standard activities such as deployment</strong> - Runbooks are the predefined steps used to achieve specific outcomes. Use runbooks to perform standard activities, whether done manually or automatically. Examples include deploying a workload, patching it, or making DNS modifications.

   1. <strong>Integrate functional testing as part of deployments</strong> - Functional tests are run as part of automated deployment. If success criteria are not met, the pipeline is halted or rolled back.

   1. <strong>Integrate resiliency testing as part of deployments</strong> - Resiliency tests (as part of chaos engineering) are run as part of the automated deployment pipeline in a pre-prod environment.

   1. <strong>Deploy using immutable infrastructure</strong> - This is a model that mandates that no updates, security patches, or configuration changes happen in-place on production workloads. When a change is needed, the architecture is built onto new infrastructure and deployed into production.

   1. <strong>Deploy changes with automation</strong> - Automate Deployments and patching to eliminate negative impact.

   <a name="BackUpData"></a>

9. How do you back up data?

   1. <strong>Identify and back up all data that needs to be backed up, or reproduce the data from sources</strong> - Amazon S3 can be used as a backup destination for multiple data sources. AWS services such as Amazon EBS, Amazon RDS, and Amazon DynamoDB have built in capabilities to create backups. Third-party backup software can also be used. Alternatively, if the data can be reproduced from other sources to meet RPO, you might not require a backup

   1. <strong>Secure and encrypt backups</strong> - Detect access using authentication and authorization, such as AWS IAM, and detect data integrity compromise by using encryption.

   1. <strong>Perform data backup automatically</strong> - Configure backups to be taken automatically based on a periodic schedule, or by changes in the dataset. RDS instances, EBS volumes, DynamoDB tables, and S3 objects can all be configured for automatic backup. AWS Marketplace solutions or third-party solutions can also be used.

   1. <strong>Perform periodic recovery of the data to verify backup integrity and processes</strong> - Validate that backup process implementation meets recovery time objectives (RTO) and recovery point objectives (RPO) by performing a recovery test.

   <a name="FaultIsolation"></a>

9. How do you use fault isolation to protect workloads?

   * <strong>Deploy the workload to multiple locations</strong> - Distribute workload data and resources across multiple Availability Zones or, where necessary, across AWS Regions. These locations can be as diverse as required.

   * <strong>Automate recovery for components constrained to a single location</strong> - If components of the workload can only run in a single Availability Zone or on-premises data center, you must implement the capability to do a complete rebuild of the workload within defined recovery objectives.

   * <strong>Use bulkhead architectures</strong> - Like the bulkheads on a ship, this pattern ensures that a failure is contained to a small subset of requests/users so the number of impaired requests is limited, and most can continue without error. Bulkheads for data are usually called partitions or shards, while bulkheads for services are known as cells.

   <a name="WithstandComponentFailure"></a>

9. How do you design workloads to withstand component failures?

   1. <strong>Monitor all components of the workload to detect failures</strong> - Continuously monitor the health of workloads so that people and automated systems are aware of degradation or complete failure as soon as they occur. Monitor for key performance indicators (KPIs) based on business value.

   2. <strong>Fail over to healthy resources</strong> - Ensure that if a resource failure occurs, that healthy resources can continue to serve requests. For location failures (such as Availability Zone or AWS Region) ensure you have systems in place to fail over to healthy resources in unimpaired locations.

   3. <strong>Automate healing on all layers</strong> - Upon detection of a failure, use automated capabilities to perform actions to remediate.

   4. <strong>Use static stability to prevent bimodal behavior</strong> - Bimodal behavior is when a workload exhibits different behavior under normal and failure modes, for example, relying on launching new instances if an Availability Zone fails. You should instead build workloads that are statically stable and operate in only one mode. In this case, provision enough instances in each Availability Zone to handle the workload load if one AZ were removed and then use Elastic Load Balancing or Amazon Route 53 health checks to shift load away from the impaired instances.

   5. <strong>Send notifications when events impact availability</strong> - Notifications are sent upon the detection of significant events, even if the issue caused by the event was automatically resolved.

   <a name="TestReliability"></a>

9. How do you test reliability?

   1. <strong>Use playbooks to investigate failures</strong> - Enable consistent and prompt responses to failure scenarios that are not well understood, by documenting the investigation process in playbooks. Playbooks are the predefined steps performed to identify the factors contributing to a failure scenario. The results from any process step are used to determine the next steps to take until the issue is identified or escalated.

   1. <strong>Perform post-incident analysis</strong> - Review customer-impacting events, and identify the contributing factors and preventative action items. Use this information to develop mitigations to limit or prevent recurrence. Develop procedures for prompt and effective responses. Communicate contributing factors and corrective actions as appropriate, tailored to target audiences. Have a method to communicate these causes to others as needed.

   1. <strong>Test functional requirements</strong> - These include unit tests and integration tests that validate required functionality.

   1. <strong>Test scaling and performance requirements</strong> - This includes load testing to validate that the workload meets scaling and performance requirements.

   1. <strong>Test resiliency using chaos engineering</strong> - Run tests that inject failures regularly into pre-production and production environments. Hypothesize how each workload will react to the failure, then compare hypothesis to the testing results and iterate if they do not match. Ensure that production testing does not impact users.

   1. <strong>Conduct game days regularly</strong> - Use game days to regularly exercise failure procedures as close to production as possible (including in production environments) with the people who will be involved in actual failure scenarios. Game days enforce measures to ensure that production testing does not impact users.

   <a name="PlanforDR"></a>

9. How do you plan for disaster recovery (DR)?

   1. <strong>Define recovery objectives for downtime and data loss</strong> - The workload has a recovery time objective (RTO) and recovery point objective (RPO).

   1. <strong>Use defined recovery strategies to meet the recovery objectives</strong> - Define a disaster recovery (DR) strategy to meet objectives.

   1. <strong>Test disaster recovery implementation to validate the implementation</strong> - Regularly test failover to DR to ensure that RTO and RPO are met.

   1. <strong>Manage configuration drift at the DR site or region</strong> - Ensure that the infrastructure, data, and configuration are as needed at the DR site or region. For example, check that AMIs and service quotas are up to date.

   1. <strong>Automate recovery</strong> - Use AWS or third-party tools to automate system recovery and route traffic to the DR site or region.

Ideas:

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/best-practices/transient-faults">Transient fault handling</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/best-practices/retry-service-specific">Retry guidance for specific services</a>
   <br /><br />


<a name="ReliabilityLabs"></a>
<a target="_blank" href="https://wellarchitectedlabs.com/reliability/"><strong>AWS Reliability hands-on labs:</strong></a>

<hr />

<a name="Ops"></a>

## Operational Excellence pillar

<img align="right" width="99" alt="well-architected-OPS-gold-141x117.png" src="https://user-images.githubusercontent.com/300046/139143665-5b1440ae-ece2-4d67-9b33-f898bdc02156.png">
   * https://wa.aws.amazon.com/wat.pillar.operationalExcellence.en.html
   * <a target="_blank" href="https://www.amazon.com/Operational-Excellence-Pillar-Well-Architected-Whitepaper-ebook/dp/B08CF4T3GW/" title="July 5, 2020">54 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/operational-excellence/">AWS Well-Architected Labs for Operational Excellence</a>
      * <a target="_blank" href="https://wellarchitectedlabs.com/operational-excellence/100_labs/100_inventory_patch_management/">Inventory and Patch Management
      * <a target="_blank" href="https://wellarchitectedlabs.com/operational-excellence/100_labs/100_dependency_monitoring/">Dependency Monitoring</a>
      * <a target="_blank" href="https://wellarchitectedlabs.com/operational-excellence/200_labs/200_automating_operations_with_playbooks_and_runbooks/">Automating operations with Playbooks and Runbooks</a>
      <br /><br />

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/devops/">Microsoft Operational excellence Documentation</a>

   * <a target="_blank" href="https://cloud.google.com/architecture/framework/operational-excellence">Google: Operational excellence</a>
   <br /><br />

Processes and procedures to:
   * Organize
   * Prepare - AWS Config
   * Operate - Amazon CloudWatch
   * Evolve - Amazon Elasticsearch service
   <br /><br />

Transcend challenges in traditional workplaces:
   * Manual changes
   * Batch changes
   * Rarely run Game Days
   * No time to learn from mistakes
   * Stale documentation
   <br /><br />

Best practices: 
   * Monitoring and diagnostics

Design Principles for Operational Excellence:

   * Manual changes -> Perform operations as code
   * Annotate documentation (among code)
   * Batch changes -> Make frequent, small, reversible change
   * Refine operations procedures frequently
   * Anticipate failure
   * Learn from all operational failures
   <br /><br />

<hr />

Best practices:

1. <a href="#DeterminePriorities">Determine what <strong>operational priorities</strong> are</a>
2. <a href="#StructureBusinessOutcomes">Structure the organization to support business outcomes</a>
3. <a href="#OrgCulture2Outcome">Organizational culture support business outcomes</a>
4. <a href="#Design4State">Design workloads to understand its state</a>
5. <a href="#ReduceDefects">Reduce defects, ease remediation, and improve flow into production</a>
6. <a href="#MitigateDeploymentRisks">Mitigate deployment risks</a>
7. <a href="#ReadySupport">Ready to support a workload</a>
8. <a href="#UnderstandWorkloadHealth">Understand the health of each workload</a>
9. <a href="#UnderstandOperationsHealth">Understand the health of operations</a>
10. <a href="#ManageEvents">Manage workload and operations events</a>
11. <a href="#EvolveOperations">Evolve operations</a>
<br /><br />

Questions:

<a name="DeterminePriorities"></a>

1. How do you determine what <strong>operational priorities</strong> are?

   1. <strong>Evaluate external customer needs</strong> - Involve key stakeholders, including business, development, and operations teams, to determine where to focus efforts on external customer needs. This will ensure that you have a thorough understanding of the operations support that is required to achieve desired business outcomes.

   1. <strong>Evaluate internal customer needs</strong> - Involve key stakeholders, including business, development, and operations teams, when determining where to focus efforts on internal customer needs. This will ensure that you have a thorough understanding of the operations support that is required to achieve business outcomes.

   1. <strong>Evaluate governance requirements</strong> - Ensure awareness of guidelines or obligations defined by organization that may mandate or emphasize specific focus. Evaluate internal factors, such as organization policy, standards, and requirements. Validate that you have mechanisms to identify changes to governance. If no governance requirements are identified, ensure that you have applied due diligence to this determination.

   1. <strong>Evaluate compliance requirements</strong> - Evaluate external factors, such as regulatory compliance requirements and industry standards, to ensure that you are aware of guidelines or obligations that may mandate or emphasize specific focus. If no compliance requirements are identified, ensure that you apply due diligence to this determination.

   1. <strong>Evaluate threat landscape</strong> - Evaluate threats to the business (for example, competition, business risk and liabilities, operational risks, and information security threats) and maintain current information in a risk registry. Include the impact of risks when determining where to focus efforts.

   1. <strong>Evaluate tradeoffs</strong> - Evaluate the impact of tradeoffs between competing interests or alternative approaches, to help make informed decisions when determining where to focus efforts or choosing a course of action. For example, accelerating speed to market for new features may be emphasized over cost optimization, or you may choose a relational database for non-relational data to simplify the effort to migrate a system, rather than migrating to a database optimized by data type and updating application.

   1. <strong>Manage benefits and risks</strong> - Manage benefits and risks to make informed decisions when determining where to focus efforts. For example, it may be beneficial to deploy a workload with unresolved issues so that significant new features can be made available to customers. It may be possible to mitigate associated risks, or it may become unacceptable to allow a risk to remain, in which case you will take action to address the risk.

   <a name="StructureBusinessOutcomes"></a>

2. How do you structure the organization to support business outcomes?

   aka the "Operating Model"

   1. <strong>Resources have identified owners</strong> - Understand who has ownership of each application, workload, platform, and infrastructure component, what business value is provided by that component, and why that ownership exists. Understanding the business value of these individual components and how they support business outcomes informs the processes and procedures applied against them.

   1. <strong>Processes and procedures have identified owners</strong> - Understand who has ownership of the definition of individual processes and procedures, why those specific process and procedures are used, and why that ownership exists. Understanding the reasons that specific processes and procedures are used enables identification of improvement opportunities.

   1. <strong>Operations activities have identified owners responsible for their performance</strong> - Understand who has responsibility to perform specific activities on defined workloads and why that responsibility exists. Understanding who has responsibility to perform activities informs who will conduct the activity, validate the result, and provide feedback to the owner of the activity.

   1. <strong>Team members know what they are responsible for</strong> - Understanding the responsibilities of each role and how they contribute to business outcomes informs the prioritization of tasks and why each role is important. This enables team members to recognize needs and respond appropriately.

   1. <strong>Mechanisms exist to identify responsibility and ownership</strong> - Where no individual or team is identified, there are defined escalation paths to someone with the authority to assign ownership or plan for that need to be addressed.

   1. <strong>Mechanisms exist to request additions, changes, and exceptions</strong> - You are able to make requests to owners of processes, procedures, and resources. Make informed decisions to approve requests where viable and determined to be appropriate after an evaluation of benefits and risks.

   1. <strong>Responsibilities between teams are predefined or negotiated</strong> - There are defined or negotiated agreements between teams describing how they work with and support each other (for example, response times, service 1. <a target="_blank" href="?">objectives, or service 1. <a target="_blank" href="?">agreements). Understanding the impact of the teams’ work on business outcomes, and the outcomes of other teams and organizations, informs the prioritization of their tasks and enables them to respond appropriately.

   <a name="OrgCulture2Outcome"></a>

3. How does <strong>organizational culture</strong> support business outcomes?

   1. <strong>Executive Sponsorship</strong> - Senior leadership clearly sets expectations for the organization and evaluates success. Senior leadership is the sponsor, advocate, and driver for the adoption of best practices and evolution of the organization

   1. <strong>Team members are empowered to take action when outcomes are at risk</strong> - The workload owner has defined guidance and scope empowering team members to respond when outcomes are at risk. Escalation mechanisms are used to get direction when events are outside of the defined scope.

   1. <strong>Escalation is encouraged</strong> - Team members have mechanisms and are encouraged to escalate concerns to decision makers and stakeholders if they believe outcomes are at risk. Escalation should be performed early and often so that risks can be identified, and prevented from causing incidents.

   1. <strong>Communications are timely, clear, and actionable</strong> - Mechanisms exist and are used to provide timely notice to team members of known risks and planned events. Necessary context, details, and time (when possible) are provided to support determining if action is necessary, what action is required, and to take action in a timely manner. For example, providing notice of software vulnerabilities so that patching can be expedited, or providing notice of planned sales promotions so that a change freeze can be implemented to avoid the risk of service disruption.

   1. <strong>Experimentation is encouraged</strong> - Experimentation accelerates learning and keeps team members interested and engaged. An undesired result is a successful experiment that has identified a path that will not lead to success. Team members are not punished for successful experiments with undesired results. Experimentation is required for innovation to happen and turn ideas into outcomes.

   1. <strong>Team members are enabled and encouraged to maintain and grow their skill sets</strong> - Teams must grow their skill sets to adopt new technologies, and to support changes in demand and responsibilities in support of workloads. Growth of skills in new technologies is frequently a source of team member satisfaction and supports innovation. Support team members’ pursuit and maintenance of industry certifications that validate and acknowledge their growing skills. Cross train to promote knowledge transfer and reduce the risk of significant impact when you lose skilled and experienced team members with institutional knowledge. Provide dedicated structured time for learning.

   1. <strong>Resource teams appropriately</strong> - Maintain team member capacity, and provide tools and resources, to support  workload needs. Overtasking team members increases the risk of incidents resulting from human error. Investments in tools and resources (for example, providing automation for frequently executed activities) can scale the effectiveness of the team, enabling them to support additional activities.

   1. <strong>Diverse opinions are encouraged and sought within and across teams</strong> - Leverage cross-organizational diversity to seek multiple unique perspectives. Use this perspective to increase innovation, challenge assumptions, and reduce the risk of confirmation bias. Grow inclusion, diversity, and accessibility within teams to gain beneficial perspectives.

   <a name="Design4State"></a>

4. How do you design workloads to understand its state?

   1. <strong>Implement application telemetry</strong> - Instrument  application code to emit information about its internal state, status, and achievement of business outcomes. For example, queue depth, error messages, and response times. Use this information to determine when a response is required.

   1. <strong>Implement and configure workload telemetry</strong> - Design and configure workloads to emit information about its internal state and current status. For example, API call volume, HTTP status codes, and scaling events. Use this information to help determine when a response is required.

   1. <strong>Implement user activity telemetry</strong> - Instrument  application code to emit information about user activity, for example, click streams, or started, abandoned, and completed transactions. Use this information to help understand how the application is used, patterns of usage, and to determine when a response is required.

   1. <strong>Implement dependency telemetry</strong> - Design and configure workloads to emit information about the status (for example, reachability or response time) of resources it depends on. Examples of external dependencies can include, external databases, DNS, and network connectivity. Use this information to determine when a response is required.

   1. <strong>Implement transaction traceability</strong> - Implement  application code and configure workload components to emit information about the flow of transactions across the workload. Use this information to determine when a response is required and to assist you in identifying the factors contributing to an issue.

   <a name="ReduceDefects"></a>

5. How do you reduce defects, ease remediation, and improve flow into production?

   1. <strong>Use version control</strong> - Use version control to enable tracking of changes and releases.

   1. <strong>Test and validate changes</strong> - Test and validate changes to help limit and detect errors. Automate testing to reduce errors caused by manual processes, and reduce the 1. <a target="_blank" href="?">of effort to test.

   1. <strong>Use configuration management systems</strong> - Use configuration management systems to make and track configuration changes. These systems reduce errors caused by manual processes and reduce the 1. <a target="_blank" href="?">of effort to deploy changes.

   1. <strong>Use build and deployment management systems</strong> - Use build and deployment management systems. These systems reduce errors caused by manual processes and reduce the 1. <a target="_blank" href="?">of effort to deploy changes.

   1. <strong>Perform patch management</strong> - Perform patch management to gain features, address issues, and remain compliant with governance. Automate patch management to reduce errors caused by manual processes, and reduce the 1. <a target="_blank" href="?">of effort to patch.

   1. <strong>Share design standards</strong> - Share best practices across teams to increase awareness and maximize the benefits of development efforts.

   1. <strong>Implement practices to improve code quality</strong> - Implement practices to improve code quality and minimize defects. For example, test-driven development, code reviews, and standards adoption.

   1. <strong>Use multiple environments</strong> - Use multiple environments to experiment, develop, and test workloads. Use increasing levels of controls as environments approach production to gain confidence each workload will operate as intended when deployed.

   1. <strong>Make frequent, small, reversible changes</strong> - Frequent, small, and reversible changes reduce the scope and impact of a change. This eases troubleshooting, enables faster remediation, and provides the option to roll back a change.

   1. <strong>Fully automate integration and deployment</strong> - Automate build, deployment, and testing of the workload. This reduces errors caused by manual processes and reduces the effort to deploy changes.

   <a name="MitigateDeploymentRisks"></a>

6. How do you mitigate deployment risks?

   1. <strong>Plan for unsuccessful changes</strong> - Plan to revert to a known good state, or remediate in the production environment if a change does not have the desired outcome. This preparation reduces recovery time through faster responses.

   1. <strong>Test and validate changes</strong> - Test changes and validate the results at all lifecycle stages to confirm new features and minimize the risk and impact of failed deployments.

   1. <strong>Use deployment management systems</strong> - Use deployment management systems to track and implement change. This reduces errors cause by manual processes and reduces the effort to deploy changes.

   1. <strong>Test using limited deployments</strong> - Test with limited deployments alongside existing systems to confirm desired outcomes prior to full scale deployment. For example, use deployment canary testing or one-box deployments.

   1. <strong>Deploy using parallel environments</strong> - Implement changes onto parallel environments, and then transition over to the new environment. Maintain the prior environment until there is confirmation of successful deployment. Doing so minimizes recovery time by enabling rollback to the previous environment.

   1. <strong>Deploy frequent, small, reversible changes</strong> - Use frequent, small, and reversible changes to reduce the scope of a change. This results in easier troubleshooting and faster remediation with the option to roll back a change.

   1. <strong>Fully automate integration and deployment</strong> - Automate build, deployment, and testing of the workload. This reduces errors cause by manual processes and reduces the effort to deploy changes.

   1. <strong>Automate testing and rollback</strong> - Automate testing of deployed environments to confirm desired outcomes. Automate rollback to previous known good state when outcomes are not achieved to minimize recovery time and reduce errors caused by manual processes.

   <a name="ReadySupport"></a>

7. How do you know that you are ready to support a workload?

   1. <strong>Ensure personnel capability</strong> - Have a mechanism to validate that you have the appropriate number of trained personnel to provide support for operational needs. Train personnel and adjust personnel capacity as necessary to maintain effective support.

   1. <strong>Ensure consistent review of operational readiness</strong> - Ensure you have a consistent review of readiness to operate a workload. Reviews must include, at a minimum, the operational readiness of the teams and the workload, and security requirements. Implement review activities in code and trigger automated review in response to events where appropriate, to ensure consistency, speed of execution, and reduce errors caused by manual processes.

   1. <strong>Use runbooks to perform procedures</strong> - Runbooks are documented procedures to achieve specific outcomes. Enable consistent and prompt responses to well-understood events by documenting procedures in runbooks. Implement runbooks as code and trigger the execution of runbooks in response to events where appropriate, to ensure consistency, speed responses, and reduce errors caused by manual processes.

   1. <strong>Use playbooks to investigate issues</strong> - Enable consistent and prompt responses to issues that are not well understood, by documenting the investigation process in playbooks. Playbooks are the predefined steps performed to identify the factors contributing to a failure scenario. The results from any process step are used to determine the next steps to take until the issue is identified or escalated.

   1. <strong>Make informed decisions to deploy systems and changes</strong> - Evaluate the capabilities of the team to support the workload and the workload's compliance with governance. Evaluate these against the benefits of deployment when determining whether to transition a system or change into production. Understand the benefits and risks to make informed decisions.

   <a name="UnderstandWorkloadHealth"></a>

8. How do you understand the health of each workload?

   1. <strong>Identify key performance indicators (KPIs)</strong> based on desired business outcomes (for example, order rate, customer retention rate, and profit versus operating expense) and customer outcomes (for example, customer satisfaction). Evaluate KPIs to determine workload success.

   1. <strong>Define workload metrics</strong> - Define workload metrics to measure the achievement of KPIs (for example, abandoned shopping carts, orders placed, cost, price, and allocated workload expense). Define workload metrics to measure the health of the workload (for example, interface response time, error rate, requests made, requests completed, and utilization). Evaluate metrics to determine if the workload is achieving desired outcomes, and to understand the health of the workload.

   1. <strong>Collect and analyze workload metrics</strong> - Perform regular proactive reviews of metrics to identify trends and determine where appropriate responses are needed.

   1. <strong>Establish workload metrics baselines</strong> to provide expected values as the basis for comparison and identification of under and over performing components. Identify thresholds for improvement, investigation, and intervention.

   1. <strong>Learn expected patterns of activity for workload</strong> - Establish patterns of workload activity to identify anomalous behavior so that you can respond appropriately if required.

   1. <strong>Alert when workload outcomes are at risk</strong> - Raise an alert when workload outcomes are at risk so that you can respond appropriately if necessary.

   1. <strong>Alert when workload anomalies are detected</strong> - Raise an alert when workload anomalies are detected so that you can respond appropriately if necessary.

   1. <strong>Validate the achievement of outcomes and the effectiveness of KPIs and metrics</strong> - Create a business-1. <a target="_blank" href="?">view of  workload operations to help you determine if you are satisfying needs and to identify areas that need improvement to reach business goals. Validate the effectiveness of KPIs and metrics and revise them if necessary.

   <a name="UnderstandOperationsHealth"></a>

9. How do you understand the health of operations?

   1. <strong>Identify key performance indicators (KPIs) based on desired business (for example, new features delivered) and customer outcomes (for example, customer support cases). Evaluate KPIs to determine operations success.

   1. <strong>Define operations metrics</strong> to measure the achievement of KPIs (for example, successful deployments, and failed deployments). Define operations metrics to measure the health of operations activities (for example, mean time to detect an incident (MTTD), and mean time to recovery (MTTR) from an incident). Evaluate metrics to determine if operations are achieving desired outcomes, and to understand the health of operations activities.

   1. <strong>Collect and analyze operations metrics</strong> - Perform regular, proactive reviews of metrics to identify trends and determine where appropriate responses are needed.

   1. <strong>Establish operations metrics baselines</strong> to provide expected values as the basis for comparison and identification of under and over performing operations activities.

   1. <strong>Learn the expected patterns of activity for operations</strong> to identify anomalous activity so that you can respond appropriately if necessary.

   1. <strong>Alert when operations outcomes are at risk</strong> - Raise an alert when operations outcomes are at risk so that you can respond appropriately if necessary.

   1. <strong>Alert when operations anomalies are detected</strong> so that you can respond appropriately if necessary.

   1. <strong>Validate the achievement of outcomes and the effectiveness of KPIs and metrics</strong> - Create a business-1. <a target="_blank" href="?">view of  operations activities to help you determine if you are satisfying needs and to identify areas that need improvement to reach business goals. Validate the effectiveness of KPIs and metrics and revise them if necessary.

   <a name="ManageEvents"></a>

9. How do you manage workload and operations events?

   1. <strong>Use processes for event, incident, and problem management</strong> - Have processes to address observed events, events that require intervention (incidents), and events that require intervention and either recur or cannot currently be resolved (problems). Use these processes to mitigate the impact of these events on the business and customers by ensuring timely and appropriate responses.

   1. <strong>Have a process per alert</strong> - Have a well-defined response (runbook or playbook), with a specifically identified owner, for any event for which you raise an alert. This ensures effective and prompt responses to operations events and prevents actionable events from being obscured by less valuable notifications.

   1. <strong>Prioritize operational events based on business impact</strong> - Ensure that when multiple events require intervention, those that are most significant to the business are addressed first. For example, impacts can include loss of life or injury, financial loss, or damage to reputation or trust.

   1. <strong>Define escalation paths</strong> - Define escalation paths in runbooks and playbooks, including what triggers escalation, and procedures for escalation. Specifically identify owners for each action to ensure effective and prompt responses to operations events.

   1. <strong>Enable push notifications</strong> - Communicate directly with users (for example, with email or SMS) when the services they use are impacted, and again when the services return to normal operating conditions, to enable users to take appropriate action.

   1. <strong>Communicate status through dashboards</strong> - Provide dashboards tailored to their target audiences (for example, internal technical teams, leadership, and customers) to communicate the current operating status of the business and provide metrics of interest.

   1. <strong>Automate responses to events</strong> - Automate responses to events to reduce errors caused by manual processes, and to ensure prompt and consistent responses.

   <a name="EvolveOperations"></a>

9. How do you evolve operations?

   1. <strong>Have a process for continuous improvement</strong> - Regularly evaluate and prioritize opportunities for improvement to focus efforts where they can provide the greatest benefits.

   1. <strong>Perform post-incident analysis</strong> - Review customer-impacting events, and identify the contributing factors and preventative actions. Use this information to develop mitigations to limit or prevent recurrence. Develop procedures for prompt and effective responses. Communicate contributing factors and corrective actions as appropriate, tailored to target audiences.

   1. <strong>Implement feedback loops</strong> - Include feedback loops in procedures and workloads to help you identify issues and areas that need improvement.

   1. <strong>Perform Knowledge Management</strong> - Mechanisms exist for team members to discover the information that they are looking for in a timely manner, access it, and identify that it’s current and complete. Mechanisms are present to identify needed content, content in need of refresh, and content that should be archived so that it’s no longer referenced.

   1. <strong>Define drivers for improvement</strong> - Identify drivers for improvement to help you evaluate and prioritize opportunities.

   1. <strong>Validate insights</strong> - Review analysis results and responses with cross-functional teams and business owners. Use these reviews to establish common understanding, identify additional impacts, and determine courses of action. Adjust responses as appropriate.

   1. <strong>Perform operations metrics reviews</strong> - Regularly perform retrospective analysis of operations metrics with cross-team participants from different areas of the business. Use these reviews to identify opportunities for improvement, potential courses of action, and to share lessons learned.

   1. <strong>Document and share lessons learned</strong> from the execution of operations activities so that you can use them internally and across teams.

   1. <strong>Allocate time to make improvements</strong> - Dedicate time and resources within processes to make continuous incremental improvements possible.

<a name="OpsLabs"></a>
<a target="_blank" href="https://wellarchitectedlabs.com/operational-excellence/"><strong>AWS Operational Excellence hands-on labs:</strong></a>


<hr />

<a name="Perf"></a>

## Performance Efficiency pillar

<img align="right" width="99" alt="PERF-gold-202x136.png" src="https://user-images.githubusercontent.com/300046/139144826-4862f00e-a754-4446-9e73-8f37248d03b6.png">
   * https://wa.aws.amazon.com/wat.pillar.performance.en.html
   * <a target="_blank" href="https://www.amazon.com/Performance-Efficiency-Pillar-Well-Architected-Whitepaper-ebook/dp/B08CFPXRBM/">51 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/performance-efficiency/">AWS Well-Architected Labs for Performance Efficiency</a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/scalability/">Microsoft Performance Efficiency Documentation</a>

   * <a target="_blank" href="https://cloud.google.com/architecture/framework/performance-optimization">Google: Performance optimization</a>
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

Best practices:

1. <a href="#SelectPerfArch">Select the best performing architecture</a>
2. <a href="#SelectSolution">Select the compute solution</a>
3. <a href="#SelectStorage">Select storage solutions</a>
4. <a href="#SelectDatabase">Select database solutions</a>
5. <a href="#ConfigNetwork">Configure networking solutions</a>
6. <a href="#EvolveWorkload">Evolve each workload to take advantage of new releases</a>
7. <a href="#MonitorResourceForPerf">Monitor resources to ensure they are performing</a>
8. <a href="#UsePerfTradeoffs">Use tradeoffs to improve performance</a>
<br /><br />

Questions:

<a name="SelectPerfArch"></a>

1. How do you select the best performing architecture?

   1. <strong>Understand the available services and resources</strong> - Learn about and understand the wide range of services and resources available in the cloud. Identify the relevant services and configuration options for each workload, and understand how to achieve optimal performance.

   1. <strong>Define a process for architectural choices</strong> - Use internal experience and knowledge of the cloud, or external resources such as published use cases, relevant documentation, or whitepapers to define a process to choose resources and services. You should define a process that encourages experimentation and benchmarking with the services that could be used by workloads.

   1. <strong>Factor cost requirements into decisions</strong> - Workloads often have cost requirements for operation. Use internal cost controls to select resource types and sizes based on predicted resource need.

   1. <strong>Use policies or reference architectures</strong> - Maximize performance and efficiency by evaluating internal policies and existing reference architectures and using analysis to select services and configurations for each workload.

   1. <strong>Use guidance from cloud providers or partners</strong> - Use cloud company resources, such as solutions architects, professional services, or an appropriate partner to guide decisions. These resources can help review and improve the architecture for optimal performance.

   1. <strong>Benchmark existing workloads</strong> - Benchmark the performance of an existing workload to understand how it performs on the cloud. Use the data collected from benchmarks to drive architectural decisions.

   1. <strong>Load test workloads</strong> - Deploy the latest workload architecture on the cloud using different resource types and sizes. Monitor the deployment to capture performance metrics that identify bottlenecks or excess capacity. Use this performance information to design or improve architecture and resource selection.

   <a name="SelectSolution"></a>

2. How do you select the compute solution?

   1. <strong>Evaluate the available compute options</strong> - Understand the performance characteristics of the compute-related options available to you. Know how instances, containers, and functions work, and what advantages, or disadvantages, they bring to  workloads.

   1. <strong>Understand the available compute configuration options</strong> - Understand how various options complement workloads, and which configuration options are best for the system. Examples of these options include instance family, sizes, features (GPU, I/O), function sizes, container instances, and single versus multi-tenancy.

   1. <strong>Collect compute-related metrics</strong> - One of the best ways to understand how compute systems are performing is to record and track the <strong>true utilization of various resources</strong>. This data can be used to make more accurate determinations about resource requirements.

   1. <strong>Determine the required configuration by right-sizing</strong> - Analyze the various <strong>performance characteristics</strong> of each workload and how these characteristics relate to memory, network, and CPU usage. Use this data to choose resources that best match each workload's profile. For example, a memory-intensive workload, such as a database, could be served best by the r-family of instances. However, a bursting workload can benefit more from an elastic container system.

   1. <strong>Use the available elasticity of resources</strong> - The cloud provides the flexibility to expand or reduce resources dynamically through a variety of mechanisms to meet changes in demand. Combined with compute-related metrics, a workload can automatically respond to changes and utilize the optimal set of resources to achieve its goal.

   1. <strong>Re-evaluate compute needs based on metrics</strong> - Use system-1. <a target="_blank" href="?">metrics to identify the behavior and requirements of  workloads over time. Evaluate workload needs by comparing the available resources with these requirements and make changes to  compute environment to best match each workload's profile. For example, over time a system might be observed to be more memory-intensive than initially thought, so moving to a different instance family or size could improve both performance and efficiency.

   <a name="SelectStorage"></a>

3. How do you select storage solutions?

   1. <strong>Understand storage characteristics and requirements</strong> - Understand the different characteristics (for example, shareable, file size, cache size, access patterns, latency, throughput, and persistence of data) that are required to select the services that best fit the workload, such as object storage, block storage, file storage, or instance storage.

   1. <strong>Evaluate available configuration options</strong> - Evaluate the various characteristics and configuration options and how they relate to storage. Understand where and how to use provisioned IOPS, SSDs, magnetic storage, object storage, archival storage, or ephemeral storage to optimize storage space and performance for each workload.

   1. <strong>Make decisions based on access patterns and metrics</strong> - Choose storage systems based on each workload's access patterns and configure them by determining how the workload accesses data. Increase storage efficiency by choosing object storage over block storage. Configure the storage options you choose to match  data access patterns.

   <a name="SelectDatabase"></a>

4. How do you select database solutions?

   1. <strong>Understand data characteristics</strong> - Understand the different characteristics of data in each workload. Determine if the workload requires transactions, how it interacts with data, and what its performance demands are. Use this data to select the best performing database approach for each workload (for example, relational databases, NoSQL Key-value, document, wide column, graph, time series, or in-memory storage).

   1. <strong>Evaluate the available options</strong> - Evaluate the services and storage options that are available as part of the selection process for each workload's storage mechanisms. Understand how, and when, to use a given service or system for data storage. Learn about available configuration options that can optimize database performance or efficiency, such as provisioned IOPs, memory and compute resources, and caching.

   1. <strong>Collect and record database performance metrics</strong> - Use tools, libraries, and systems that record performance measurements related to database performance. For example, measure transactions per second, slow queries, or system latency introduced when accessing the database. Use this data to understand the performance of database systems.

   1. <strong>Choose data storage based on access patterns</strong> - Use the access patterns of the workload to decide which services and technologies to use. For example, utilize a relational database for workloads that require transactions, or a key-value store that provides higher throughput but is eventually consistent where applicable.

   1. <strong>Optimize data storage based on access patterns and metrics</strong> - Use performance characteristics and access patterns that optimize how data is stored or queried to achieve the best possible performance. Measure how optimizations such as indexing, key distribution, data warehouse design, or caching strategies impact system performance or overall efficiency.

   <a name="ConfigNetwork"></a>

5. How do you configure networking solutions?

   1. <strong>Understand how networking impacts performance</strong> - Analyze and understand how network-related decisions impact workload performance. For example, network latency often impacts the user experience, and using the wrong protocols can starve network capacity through excessive overhead.

   1. <strong>Evaluate available networking features</strong> - Evaluate networking features in the cloud that may increase performance. Measure the impact of these features through testing, metrics, and analysis. For example, take advantage of network-1. <a target="_blank" href="?">features that are available to reduce latency, network distance, or jitter.

   1. <strong>Choose appropriately sized dedicated connectivity or VPN for hybrid workloads</strong> - When there is a requirement for on-premise communication, ensure that you have adequate bandwidth for workload performance. Based on bandwidth requirements, a single dedicated connection or a single VPN might not be enough, and you must enable traffic load balancing across multiple connections.

   1. <strong>Leverage load-balancing and encryption offloading</strong> - Distribute traffic across multiple resources or services to allow each workload to take advantage of the elasticity that the cloud provides. You can also use load balancing for offloading encryption termination to improve performance and to manage and route traffic effectively.

   1. <strong>Choose network protocols to improve performance</strong> - Make decisions about protocols for communication between systems and networks based on the impact to the workload’s performance.

   1. <strong>Choose each workload’s location based on network requirements</strong> - Use the cloud location options available to reduce network latency or improve throughput. Utilize AWS Regions, Availability Zones, placement groups, and edge locations such as Outposts, Local Regions, and Wavelength, to reduce network latency or improve throughput.

   1. <strong>Optimize network configuration based on metrics</strong> - Use collected and analyzed data to make informed decisions about optimizing network configuration. Measure the impact of those changes and use the impact measurements to make future decisions.

   <a name="EvolveWorkload"></a>

6. How do you evolve each workload to take advantage of new releases?

   1. <strong>Stay up-to-date on new resources and services</strong> - Evaluate ways to improve performance as new services, design patterns, and product offerings become available. Determine which of these could improve performance or increase the efficiency of the workload through ad-hoc evaluation, internal discussion, or external analysis.

   1. <strong>Define a process to improve workload performance</strong> - Evaluate new services, design patterns, resource types, and configurations as they become available. For example, run existing performance tests on new instance offerings to determine their potential to improve the workload.

   1. <strong>Evolve workload performance over time</strong> - As an organization, use the information gathered through the evaluation process to actively drive adoption of new services or resources when they become available.

   <a name="MonitorResourceForPerf"></a>

7. How do you monitor resources to ensure they are performing?

   1. <strong>Record performance-related metrics</strong> - Use a monitoring and observability service to record performance-related metrics. For example, record database transactions, slow queries, I/O latency, HTTP request throughput, service latency, or other key data.

   1. <strong>Analyze metrics when events or incidents occur</strong> - In response to (or during) an event or incident, use monitoring dashboards or reports to understand and diagnose the impact. These views provide insight into which portions of the workload are not performing as expected.

   1. <strong>Establish Key Performance Indicators (KPIs) to measure workload performance</strong> - Identify the KPIs that indicate whether the workload is performing as intended. For example, an API-based workload might use overall response latency as an indication of overall performance, and an e-commerce site might choose to use the number of purchases as its KPI.

   1. <strong>Use monitoring to generate alarm-based notifications</strong> - Using the performance-related key performance indicators (KPIs) that you defined, use a monitoring system that generates alarms automatically when these measurements are outside expected boundaries.

   1. <strong>Review metrics at regular intervals</strong> - As routine maintenance, or in response to events or incidents, review which metrics are collected. Use these reviews to identify which metrics were key in addressing issues and which additional metrics, if they were being tracked, would help to identify, address, or prevent issues.

   1. <strong>Monitor and alarm proactively</strong> - Use key performance indicators (KPIs), combined with monitoring and alerting systems, to proactively address performance-related issues. Use alarms to trigger automated actions to remediate issues where possible. Escalate the alarm to those able to respond if automated response is not possible. For example, you may have a system that can predict expected key performance indicators (KPI) values and alarm when they breach certain thresholds, or a tool that can automatically halt or roll back deployments if KPIs are outside of expected values.

   <a name="UsePerfTradeoffs"></a>

8. How do you use tradeoffs to improve performance?

   1. <strong>Understand the areas where performance is most critical</strong> - Understand and identify areas where increasing the performance of the workload will have a positive impact on efficiency or customer experience. For example, a website that has a large amount of customer interaction can benefit from using edge services to move content delivery closer to customers.

   1. <strong>Learn about design patterns and services</strong> - Research and understand the various design patterns and services that help improve workload performance. As part of the analysis, identify what you could trade to achieve higher performance. For example, using a cache service can help to reduce the load placed on database systems; however, it requires some engineering to implement safe caching or possible introduction of eventual consistency in some areas.

   1. <strong>Identify how tradeoffs impact customers and efficiency</strong> - When evaluating performance-related improvements, determine which choices will impact customers and workload efficiency. For example, if using a key-value data store increases system performance, it is important to evaluate how the eventually consistent nature of it will impact customers.

   1. <strong>Measure the impact of performance improvements</strong> - As changes are made to improve performance, evaluate the collected metrics and data. Use this information to determine impact that the performance improvement had on the workload, the workload’s components, and customers. This measurement helps you understand the improvements that result from the tradeoff, and helps you determine if any negative side-effects were introduced.

   1. <strong>Use various performance-related strategies</strong> - Where applicable, utilize multiple strategies to improve performance. For example, using strategies like caching data to prevent excessive network or database calls, using read-replicas for database engines to improve read rates, sharding or compressing data where possible to reduce data volumes, and buffering and streaming of results as they are available to avoid blocking.

<a name="PerfLabs"></a>
<a target="_blank" href="https://wellarchitectedlabs.com/performance-efficiency/"><strong>AWS Performance hands-on labs:</strong></a>


<hr />

<a name="Cost"></a>

## Cost Optimization pillar

<img align="right" width="99" alt="well-architected-COST-gold-111x123" src="https://user-images.githubusercontent.com/300046/139145830-e653de04-a8db-4455-a16a-519fd18a46c3.png">
   * <a target="_blank" href="https://wa.aws.amazon.com/wat.pillar.costOptimization.en.html">Summary</a>
   * Cost Optimization Pillar <strong>whitepaper</strong> (June 2020) <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html">HTML</a>,<a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/wellarchitected-cost-optimization-pillar.pdf#evaluate-cost-when-selecting-services">PDF</a>, <a target="_blank" href="https://www.amazon.com/Cost-Optimization-Pillar-Well-Architected-Whitepaper-ebook/dp/B08CFZBVJK/" title="July 5, 2020">44 pages on Kindle (mobile) app</a>
   * <a target="_blank" href="https://wellarchitectedlabs.com/cost/">AWS Well-Architected Labs for Cost Optimization</a> by Nathan Besh

   * https://aws.amazon.com/blogs/aws-cloud-financial-management/
   
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/cost/">Microsoft Cost Optimization Documentation</a> \| <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/cost/optimize-checklist">Checklist</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/framework/cost/optimize-checklist">Microsft's cost optimization checklist</a>

   * <a target="_blank" href="https://cloud.google.com/architecture/framework/cost-optimization">Google: Cost optimization</a>
   <br /><br />

<hr />

Google's Cost Optimization has two processes:

   * <a target="_blank" href="https://cloud.google.com/architecture/framework/cost-optimization/finops">Adopt and implement FinOps</a>
   * <a target="_blank" href="https://cloud.google.com/architecture/framework/cost-optimization/monitor">Monitor and control cost</a>
   <br /><br />

AWS Cost Optimization Abstract:

   * Practice Cloud Financial Management
   * Expenditure and Usage Awareness
   * Cost Effective Resources
   * Manage Demand and Supply Resources
   * Optimize Over Time
   <br /><br />

<hr />

Best practices:

1. <a href="#ImplementFinMgmt">Implement cloud financial management</a>
2. <a href="#GovernUsage">Govern usage</a>
3. <a href="#MonitorCost">Monitor usage and cost</a>
4. <a href="#DecommissionResc">Decommission resources</a>
5. <a href="#EvaluateServices">Evaluate when you select services</a>
6. <a href="#MeetTargetsSelected">Meet targets when you select resource type, size, and number</a>
7. <a href="#UsePricingModels">Use pricing models to reduce cost</a>
8. <a href="#PlanDataTransferCharges">Plan for <strong>data transfer</strong> charges</a>
9. <a href="#ManageDemandSupply">Manage demand, and supply resources</a>
10. <a href="#EvaluateNewSvcs">Evaluate new services</a>
<br /><br />

Questions:

<a name="ImplementFinMgmt"></a>

1. How do you implement cloud financial management?

   <a target="_blank" href="https://wa.aws.amazon.com/wat.question.COST_1.en.html">
   Best practices and Improvement Plan items</a>:

   1. <strong>Establish a cost optimization function</strong> - Create a team that is responsible for establishing and maintaining cost awareness across the organization. The team requires people from finance, technology, and business roles across the organization.

   1. <strong>Establish a partnership between finance and technology</strong> - Involve finance and technology teams in cost and usage discussions at all stages of the cloud journey. Teams regularly meet and discuss topics such as organizational goals and targets, current state of cost and usage, and financial and accounting practices.

   1. <strong>Establish cloud budgets and forecasts</strong> - Adjust existing organizational budgeting and forecasting processes to be compatible with the highly variable nature of cloud costs and usage. Processes must be dynamic using trend based or business driver-based algorithms, or a combination.

   1. <strong>Implement cost awareness</strong> into new or existing processes that impact usage, and leverage existing processes for cost awareness. Implement cost awareness into employee training.

   1. <strong>Report and notify on cost optimization</strong> - Configure AWS Budgets to provide notifications on cost and usage against targets. Have regular meetings to analyze this workload’s cost efficiency and to promote cost aware culture.

   1. <strong>Monitor cost proactively</strong> - Implement tooling and dashboards to monitor cost proactively for the workload. Do not just look at costs and categories when you receive notifications. This helps to identify positive trends and promote them throughout the organization.

   1. <strong>Keep up to date with new service releases</strong> - Consult regularly with experts or APN Partners to consider which services and features provide lower cost. Review AWS blogs and other information sources.

   <a name="GovernUsage"></a>

2. How do you govern usage?

   1. <strong>Develop policies based on organization requirements</strong> - Develop policies that define how resources are managed by the organization. Policies should cover cost aspects of resources and workloads, including creation, modification and decommission over the resource lifetime.

   1. <strong>Implement both cost and usage goals for each workload</strong> - Goals provide direction to the organization on cost and usage, and targets provide measurable outcomes for each workload.

   1. <strong>Implement an account structure</strong> that maps to the organization. This assists in allocating and managing costs throughout the organization.

   1. <strong>Implement groups and roles</strong> that align to policies and control who can create, modify, or decommission instances and resources in each group. For example, implement development, test, and production groups. This applies to AWS services and third-party solutions.

   1. <strong>Implement cost controls</strong> based on organization policies and defined groups and roles. These ensure that costs are only incurred as defined by organization requirements: for example, control access to regions or resource types with IAM policies.

   1. <strong>Track project lifecycle</strong> - measure, and audit the lifecycle of projects, teams, and environments to avoid using and paying for unnecessary resources.

   <a name="MonitorCost"></a>

3. How do you monitor usage and cost?

   1. <strong>Configure detailed information sources</strong> - Configure the AWS Cost and Usage Report, and Cost Explorer hourly granularity, to provide detailed cost and usage information. Configure workloads to have log entries for every delivered business outcome.

   1. <strong>Identify cost attribution categories</strong> that could be used to allocate cost within the organization.

   1. <strong>Establish organization metrics</strong> required for each workload. Example metrics of a workload are customer reports produced or web pages served to customers.

   1. <strong>Configure billing and cost management tools</strong> - Configure AWS Cost Explorer and AWS Budgets inline with organization policies.

   1. <strong>Add organization information to cost and usage</strong> - Define a tagging schema based on organization, and workload attributes, and cost allocation categories. 

   1. <strong>Implement tagging across all resources.</strong> - Use Cost Categories to group costs and usage according to organization attributes.

   1. <strong>Allocate costs based on workload metrics</strong> - Allocate the workload’s costs by metrics or business outcomes to measure workload cost efficiency. Implement a process to analyze the AWS Cost and Usage Report with Amazon Athena, which can provide insight and charge back capability.

   <a name="DecommissionResc"></a>

4. How do you <strong>decommission</strong> resources?

   1. Plan ahead. Announce.
   1. Use terraformer to collect Terraform files for all AWS services
   1. Archive to AWS Glacier. Test retrieval.

   1. <strong>Track resources over their life time</strong> - Define and implement a method to track resources and their associations with systems over their life time. You can use tagging to identify the workload or function of the resource.

   1. <strong>Implement a decommissioning process</strong> - Implement a process to identify and decommission orphaned resources.

   1. <strong>Decommission resources</strong> triggered by events such as periodic audits, or changes in usage. Decommissioning is typically performed periodically, and is manual or automated.

   1. <strong>Decommission resources automatically</strong> - Design workloads to gracefully handle resource termination as you identify and decommission non-critical resources, resources that are not required, or resources with low utilization.

   <a name="EvaluateServices"></a>

5. How do you evaluate when you select services?

   1. <strong>Identify organization requirements for cost</strong> - Work with team members to define the balance between cost optimization and other pillars, such as performance and reliability, for this workload.

   1. <strong>Analyze all components of this workload</strong> - Ensure every workload component is analyzed, regardless of current size or current costs. Review effort should reflect potential benefit, such as current and projected costs.

   1. <strong>Perform a thorough analysis of each component</strong> - the overall cost of each component. Look at total cost of ownership by factoring in cost of operations and management, especially when using managed services. Review effort should reflect potential benefit: for example, time spent analyzing is proportional to component cost.

   1. <strong>Select software with cost effective licensing</strong> - Open source software will eliminate software licensing costs, which can contribute significant costs to workloads. Where licensed software is required, avoid licenses bound to arbitrary attributes such as CPUs, look for licenses that are bound to output or outcomes. The cost of these licenses scales more closely to the benefit they provide.

   1. <strong>Select components of this workload to optimize cost in line with organization priorities</strong> - Factor in cost when selecting all components. This includes using application 1. <a target="_blank" href="?">and managed services, such as Amazon RDS, Amazon DynamoDB, Amazon SNS, and Amazon SES to reduce overall organization cost. Use serverless and containers for compute, such as AWS Lambda, Amazon S3 for static websites, and Amazon ECS. 
   
   1. <strong>Minimize license costs</strong> by using open source software, or software that does not have license fees: for example, Amazon Linux for compute workloads or migrate databases to Amazon Aurora.

   1. <strong>Perform cost analysis for different usage over time</strong> - Workloads can change over time. Some services or features are more cost effective at different usage levels. By performing the analysis on each component over time and at projected usage, you ensure the workload remains cost effective over its lifetime..

   <a name="MeetTargetsSelected"></a>

6. How do you meet targets when you select resource type, size, and number?

   Ensure that you choose the appropriate resource size and number of resources for the task at hand. You minimize waste by selecting the most cost effective type, size, and number.

   1. <strong>Perform cost modeling</strong> - Identify organization requirements and perform cost modeling of the workload and each of its components. Perform benchmark activities for the workload under different predicted loads and compare the costs. The modeling effort should reflect potential benefit: for example, time spent is proportional to component cost.

   1. <strong>Select resource type, size, and number based on data</strong> about the workload and resource characteristics: for example, compute, memory, throughput, or write intensive. This selection is typically made using a previous version of the workload (such as an on-premises version), using documentation, or using other sources of information about the workload.

   1. <strong>Select resource type, size, and number automatically based on metrics</strong> - Use metrics from the currently running workload to select the right size and type to optimize for cost. Appropriately provision throughput, sizing, and storage for services such as Amazon EC2, Amazon DynamoDB, Amazon EBS (PIOPS), Amazon RDS, Amazon EMR, and networking. This can be done with a feedback loop such as automatic scaling or by custom code in the workload.

   <a name="UsePricingModels"></a>

7. How do you use pricing models to reduce cost?

   1. <strong>Perform pricing model analysis</strong> - Analyze each component of the workload. Determine if the component and resources will be running for extended periods (for commitment discounts), or dynamic and short running (for spot or on-demand). Perform an analysis on the workload using the Recommendations feature in AWS Cost Explorer.

   1. <strong>Implement regions based on cost</strong> - Resource pricing can be different in each region. Factoring in region cost ensures you pay the lowest overall price for this workload

   1. <strong>Select third party agreements with cost efficient terms</strong> to ensure the cost of these services scales with the benefits they provide. Select agreements and pricing that scale when they provide additional benefits to the organization.

   1. <strong>Implement pricing models for all components of this workload</strong> - Permanently running resources should utilize reserved capacity such as Savings Plans or reserved Instances. Short term capacity is configured to use Spot Instances, or Spot Fleet. On demand is only used for short-term workloads that cannot be interrupted and do not run long enough for reserved capacity, between 25% to 75% of the period, depending on the resource type.

   1. <strong>Perform pricing model analysis at the master account level</strong> - Use Cost Explorer Savings Plans and Reserved Instance recommendations to perform regular analysis at the master account 1. <a target="_blank" href="?">for commitment discounts.

   <a name="PlanDataTransferCharges"></a>

8. How do you plan for <strong>data transfer</strong> charges?

   1. <strong>Perform data transfer modeling</strong> - Gather organization requirements and perform data transfer modeling of the workload and each of its components. This identifies the lowest cost point for its current data transfer requirements.

   1. <strong>Select components to optimize data transfer cost</strong> - All components are selected, and architecture is designed to reduce data transfer costs. This includes using components such as WAN optimization and Multi-AZ configurations

   1. <strong>Implement services to reduce data transfer costs</strong> - For example, use a CDN such as Amazon CloudFront to deliver content to end users, caching layers using Amazon ElastiCache, or using AWS Direct Connect instead of VPN for connectivity to AWS.

   <a name="ManageDemandSupply"></a>
   
9. How do you manage demand, and supply resources?

   For a workload that has balanced spend and performance, ensure that everything you pay for is used and avoid significantly underutilizing instances. A skewed utilization metric in either direction has an adverse impact on the organization, in either operational costs (degraded perform

   1. <strong>Perform an analysis on the workload demand</strong> over time. Ensure the analysis covers seasonal trends and accurately represents operating conditions over the full workload lifetime. Analysis effort should reflect potential benefit: for example, time spent is proportional to the workload cost.

   1. <strong>Implement a buffer or throttle to manage demand</strong> - Buffering and throttling modify the demand on each workload, smoothing out any peaks. Implement throttling when clients perform retries. Implement buffering to store the request and defer processing until a later time. Ensure throttles and buffers are designed so clients receive a response in the required time.

   1. <strong>Supply resources dynamically</strong> - Resources are provisioned in a planned manner. This can be demand-based, such as through automatic scaling, or time-based, where demand is predictable and resources are provided based on time. These methods result in the least amount of over or under provisioning.
   
   1. Decommission resources, entire services, and systems no longer required.

   <a name="EvaluateNewSvcs"></a>

9. How do you evaluate new services?

   As AWS releases new services and features, it’s a best practice to review existing architectural decisions to ensure they continue to be the most cost effective.

   1. <strong>Develop a workload review process</strong> that defines the criteria and process for workload review. The review effort should reflect potential benefit: for example, core workloads or workloads with a value of over 10% of the bill are reviewed quarterly, while workloads below 10% are reviewed annually.

   1. <strong>Review and analyze this workload regularly</strong> - Existing workloads are regularly reviewed as per defined processes.


<hr />

Questions lead to these goals/focus areas (and the services used to get there):

   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/practice-cloud-financial-management.html">Practice Cloud Financial Management</a> -
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/expenditure-and-usage-awareness.html">Expenditure and usage awareness</a> –  AWS Cost Explorer, AWS Budgets
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/cost-effective-resources.html">Cost-Effective resources</a> – Cost Explorer, Amazon CloudWatch and Trusted Advisor, Amazon Aurora for RDS, AWS Direct Connect with Amazon CloudFront
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/manage-demand-and-supply-resources.html">Matching supply and demand</a> – Auto Scaling
   * <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/optimize-over-time.html">Optimize Over Time</a> – AWS News Blog and the What’s New section on the AWS website, AWS Trusted Advisor
   <br /><br />

   * Develop a cost model
   * Create budgets and alerts
   <br /><br />

AWS Design Principles for cost optimization:

* <a target="_blank" href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/practice-cloud-financial-management.html">Implement cloud financial management</a>: To achieve financial success and accelerate business value realization in the cloud, you must invest in Cloud Financial Management. The organization must dedicate the necessary time and resources for building capability in this new domain of technology and usage management. Similar to Security or Operations capability, build capability through knowledge building, programs, resources, and processes to help you become a cost efficient organization.

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

   * <a target="_blank" href="">Stop spending money on undifferentiated "heavy lifting"</a> of data center operations like racking, stacking, and powering servers. AWS also removes the operational burden of managing operating systems and applications with managed services. This allows you to focus on customers and business projects rather than on IT infrastructure.

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

   * Right-sizing instances
   * Increase elasticity
   * Pick the right pricing model
   * Match usage to Storage costs

## AWS Cost, Usage, Billing

<a target="_blank" href="https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html">Docs</a>: 
<a target="_blank" href="https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/">
AWS Cost & Usage Report (AWS CUR)</a> contains the most comprehensive set of cost and usage data available.

NOTE: The <a target="_blank" href="https://calculator.aws/#/">AWS Pricing Calculator at https://calculator.aws/#</a> is used to estimate costs for specific architectures. Different server types have different costs. The same services in different regions have different prices. Transfer of data between different regions incur charges.

AWS billing reports are published to an Amazon Simple Storage Service (Amazon S3) bucket.

1. REMEMBER: Click your name at the top bar for the menu to select "My Billing Dashboard":

   "Cost Management" consists of:
   
   * Cost Explorer
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

   In "AWS Cost Management":

1. Click "Cost Explorer" to launch Cost Explorer for "AWS Cost Management"
  
1. For Daily views, in preferences, check "Hourly and Resource 1. <a target="_blank" href="?">Data" which costs more money.

https://www.youtube.com/watch?v=NfONXHkTefA
How do I use the AWS Cost and Usage Report?

https://www.youtube.com/watch?v=gl0zpKLbRe0
AWS re:Invent 2020: Billing management and cost control
by Keith Jarrett (Head of AWS Cost Management, Product Marketing and Business Intelligence)

https://www.youtube.com/watch?v=XHwFJDw9Mec
AWS Cost Optimization: Tools and Methods to Reduce Your Spend With Us
AWS Events

<a name="CostLabs"></a>
<a target="_blank" href="https://wellarchitectedlabs.com/cost/"><strong>AWS Cost Optimization hands-on labs:</strong></a>

<hr />

## Sustainability

<a name="SustLabs"></a>
<a target="_blank" href="https://wellarchitectedlabs.com/sustainability/
"><strong>AWS Sustainability hands-on labs:</strong></a>

   * <a target="_blank" href="https://wellarchitectedlabs.com/sustainability/300_labs/300_cur_reports_as_efficiency_reports/">1. <a target="_blank" href="?">300: Turning Cost & Usage Reports into Efficiency Reports</a>
   in an "improvement" process:

   1. Identify targets for improvement
   2. Evaluate specific improvements
   3. Prioritize and plan improvements
   4. Test and validate improvements
   5. Deploy changes to production
   6. Measure results and replicate successes

<hr />

<a name="WA-Review"></a>

## Well-Architected Framework Review

   Enterprise subscribers ($15,000/month) can have AWS Solution Architects (from <a target="_blank" href="https://aws.amazon.com/professional-services/">Amazon Professional Services</a>) conduct a "Well-Architected Review" of advice covered in the Well-Architected Framework described in <a target="_blank" href="https://www.aws.training/learningobject/curriculum?id=12049">this free video training</a> and books (in <a target="_blank" href="https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf">pdf</a> and Kindle).


   
### Apptio CloudAbility

<hr />

## References

In the deprecated AWS classroom training site, <a target="_blank" href="https://www.aws.training/learningobject/curriculum?id=12049">curriculum?id=12049</a> provides a separate document/video summarizing each of the topics covered in the Well-Architected Framework:

   * Cost Optimization
   * Performance
   * Security
   * Fault Tolerance
   * Service Limits
   <br /><br />

https://explore.skillbuilder.aws/learn
https://explore.skillbuilder.aws/learn/learning_plan/view/91/security-learning-plan

https://tutorialsdojo.com/aws-well-architected-framework-five-pillars/

STAR: https://aws.amazon.com/blogs/aws-cloud-financial-management/cost-reporting-based-on-aws-organizations-account-id-tags/

<a target="_blank" href="https://mikerodionov.com/tag/aws-whitepapers/">
Mike's blog lists AWS whitepapers recommended per specific AWS exam.

https://www.trendmicro.com/en_us/what-is/cloud-security/cloud-architecture.html
highlights considerations for Components, sub-components, etc.

https://www.trendmicro.com/en_us/what-is/cloud-security.html

<hr />

## More on cloud #

This is one of a series on cloud computing:

{% include cloud_links.html %}
