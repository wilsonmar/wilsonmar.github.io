---
layout: post
date: "2023-09-12"
file: "aws-data-tools"
title: "AWS Data Tools"
excerpt: "AWS data processing tools: Databases, Big Data, Data Warehouse, Data Lakehouse"
tags: [AWS, database, cloud, automation]
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

<a target="_blank" href="https://wilsonmar.github.io/aws-data/">Here</a> are my notes reflecting what I've figured out so far about how developers and administrators can <strong>process data</strong> in the AWS cloud. I'm trying to present this in a logical sequence. But there are a lot of products that seem to do the same thing. 

{% include whatever.html %}

## Competition in Cloud Databases

In 2022 Gartner named AWS (Amazon Web Service), among all other cloud database vendors, the one with the best ability to execute with the most vision:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1692377356/dbs-gartner-2022-570x592_gyy82c.png"><img alt="dbs-gartner-2022-570x592.png" width="570" height="592" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692377356/dbs-gartner-2022-570x592_gyy82c.png"></a>

Amazon has <a target="_blank" href="https://aws.amazon.com/products/databases/">over a dozen database products</a> in its portfolio, providing many fully-managed "serverless" services for scaling each of the full gamut of open-source and licensed database technologies.

But some may argue that <a target="_blank" href="https://wilsonmar.github.io/snowflake/">Snowflake</a> and Databricks for their "Delta Lake" (using Parquet-structured data) removes the separation between OLTP and OLAP is now leading the field.
Also see my notes on:
   * <a target="_blank" href="https://wilsonmar.github.io/azure-data/">Microsoft/Azure Data</a>
   * <a target="_blank" href="https://wilsonmar.github.io/tableau/">Tableau (a Salesforce company)</a>
   <br /><br />

Below is an alphabetical list of third-party databases cloud customers can install in AWS like (some like they used to do on-prem):

   * <a target="_blank" href="https://cassandra.apache.org/doc/latest/">Apache Cassandra (NoSQL)</a>
   * <a target="_blank" href="https://github.com/cockroachdb/cockroach">Cockroach Labs (SQL)</a>
   * <a target="_blank" href="https://www.wikiwand.com/en/Cloudera">Cloudera</a> EDH (Enteprise Data Hub) - Hadoop lakehouse based on Apache Iceberg SQL
   * <a target="_blank" href="https://www.couchbase.com/">Couchbase (No-SQL)</a>
   * IBM
   * <a target="_blank" href="https://www.intersystems.com/">InterSystems</a>
   * <a target="_blank" href="https://www.marklogic.com/">MarkLogic</a>
   * <a target="_blank" href="https://mariadb.com/">MariaDB</a>
   * <a target="_blank" href="https://www.mysql.com/">MySQL</a>
   * <a target="_blank" href="https://www.mongodb.com/nosql-explained">MongoDB (No-SQL)</a>
   * <a target="_blank" href="https://neo4j.com/">Neo4j (graph database)</a>
   * <a target="_blank" href="https://www.oracle.com/database/">Oracle database</a> 12C
   * <a target="_blank" href="https://www.postgresql.org/">PostgreSQL.org</a>
   * <a target="_blank" href="https://redis.io/">Redis</a>
   * <a target="_blank" href="https://www.sap.com/products/technology-platform/hana.html">SAP HANA</a>
   * <a target="_blank" href="https://www.microsoft.com/en-us/sql-server/?rtc=1">Microsoft SQL Server</a>
   * <a target="_blank" href="https://www.teradata.com/">Teradata</a> EDW (Enterprise Data Warehouse)
   * <a target="_blank" href="https://www.tigergraph.com/">TigerGraph</a>
   <br /><br />

(Listed separately are China-based offering)

<hr />


## Data Lifecycle

The data analytics lifecycle<a target="_blank" href="https://www.coursera.org/learn/aws-security-in-data-analytics/lecture/QLrPZ/domain-introduction">:</a>

   1. Define
   2. Interpret
   3. Clean and Transform
   4. Enhance
   5. Analyze
   6. Visualize


## Categories of tools

One AWS certification conceptually organizes data tools in these categories:

<a target="_blank" href="https://www.youtube.com/watch?v=tykcCf-Zz1M">VIDEO:<br /><img src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692778076/aws-icons/aws-data-tools-by-process.png"></a>

   * <a href="#DataSources">Data Sources</a>
   * <a href="#DataCollection">Data Injestion/Collection</a>
   * <a href="#StoragenDataMgmt">Storage and Data Management</a>
   * <a href="#Processing">Processing</a>
   * <a href="#Analytics">Analytics</a>
   * <a href="#Analysis">Analysis</a>
   <br /><br />
Each is detailed below:

<a name="DataSources"></a>

### Data Sources

   * Amazon RDS (Relational Database Service) and Aurora
   * Amazon DynamoDB (NoSQL)
   <br /><br />

<a name="DataCollection"></a>

### Data Injection/Collection


   * Database Migration Service (DMS)
   * Simple Queue Service (SQS)
   * Snowball
   * AWS Internet of Things (IOT)
   * MSK (Managed Stream for Kafka)
   * AWS Direct Connect
   <br /><br />

<a name="StoragenDataMgmt"></a>

Storage and Data Management:

   * Simple Storage Service (S3)
   * DynamoDB (cloud document database)
   * Amazon Elasticsearch Service
   <br /><br />


<a name="Processing"></a>

### Processing

   * AWS Lambda
   * AWS Glue - serverless bookmarks, DynamicFrame functions, job metrics, and etc. 
   Troubleshooting Glue Jobs: what should you do if Glue throws an error.
   * Amazon EMR
   * Elastic MapReduce, including Apache Spark, Hive, HBase, Presto, Zeppelin, Splunk, and Flume

   * <a href="#LakeFormation">AWS Lake Formation</a>
   * AWS Step Functions for orchestrations
   * AWS Data Pipeline
   <br /><br />

<a name="Analysis"></a>

### Analysis

   * Managed Apache Flink (formerly Amazon Kinesis Data Analytics)
   * Amazon ElasticSearch Service - Generally for log analysis, look for an ES solution along with Kibana
   * Amazon Athena
   * Amazon Redshift and Redshift Spectrum
   * Amazon SageMaker for Machine Learning & AI

   * AWS TensorFlow
   * AWS Cognito
   <br /><br />


<a name="Analytics"></a>

### Analytics & Visualization

   * <a href="#Quicksight">Quicksight</a>
   * Other Visualization Tools (not a managed service): Salesforce Tableau, D3.js, HighCharts, and a custom chart as a solution, 

   <br /><br />

Monitoring & Security:

   * IAM
   * Cloud HSM (Hardware Security Module)
   * STS (Security Token Service)
   * HSM
   * Amazon Inspector
   <br /><br />


## Evolution in AWS Data Pipeline Tools

In this "world map" I show how, on one busy page, how AWS data services relate to each other for different roles. Red text indicates services for governance.

<a target="_blank" href="https://aws.amazon.com/architecture/icons/">Amazon's new official "flat" icons</a> in my attempt at figuring out the interaction among the many AWS cloud technologies evolving from "Lift and Shift" to Serverless to Low-Code to Machine Learning and <a target="_blank" href="https://wilsonmar.github.io/genai/">Generative Artificial Intelligence</a>.

<a name="Flow_Map"></a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1694404152/aws-data-tools-1920x1080_zc8cmn.png"><img alt="aws-data-tools-1920x1080.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1694404152/aws-data-tools-1920x1080_zc8cmn.png"><br /><em>Click here for a full-screen view</em></a> or <a target="_blank" href="https://7451111251303.gumroad.com/l/bparb"><em>buy the animated pptx</em></a>.

<em>(I'm working toward <a target="_blank" href="https://www.youtube.com/watch?v=0WacamUZsHs">video of gradual reveal step-by-step like this</a>)

<a name="Flow_Summary"></a>

Here we try to introduce AWS in a deeper way than marketing generalizations.

The number of services from AWS can be overwhelming. As busy as this diagram make seem, it's still a subset of the 200 plus services Amazon's offers. 
I created this "world map" to make sense of how AWS services relate to each other and differ from each other,
in the <strong>sequence</strong> services are implemented, secured, and tested.

Elements of this "jigsaw puzzle" (PowerPoint file) can be removed if not relevant to you.

Let's begin with a walk-through of just the <strong>categories</strong> of services.
Before our system interacts with <strong>end-users</strong> connecting through public networks, we need <a href="#Flow_Governance">A. Governance</a> services to ensure the security of all other services created.

We need metrics, logs, and transaction traces to be collected centrally to enable an <a href="#Flow_Observability">B. Observability</a> capability that increasingly leverages Machine Learning and Artificial Intelligence to make <strong>predictions</strong> for proactive rather than reactive processes.

Insights from observability are obtained using <strong>C. Visualizations</strong> presenting graphics.  Such analytics is the human interface to data and thus the basis for obtaining and judging value from the time and money spent on systems.

But there is a limit to how many charts any one person (or even a whole team) can absorb. So we are dependent on <strong>D. Alerts</strong> to know when to take action. 

We are also dependent on <strong>E. Environment Inputs</strong> such as social media, weather, stock prices, etc.

Observability is most needed with <strong>E. OLTP applications</strong>, especially with <strong>legacy</strong> tech which require more manual effort than the serverless tech we also cover here.

<a name="Flow_Governance"></a>

## Governance

Now let's dive into the details of each of these categories, starting with Governance.

<a name="Flow_IAM"></a>

1.  At the core of governance is the <strong>IAM (Identity and Access Management)</strong> Amazon service that controls access to all other services based on roles and attributes assigned to principals. 

    AUTOMATION is necessary within enterprises to create the many policy files that define fine-grained permissions to permit actions by each user, group, and role.

    <a name="Flow_SOC"></a>

    These are commonly managed in enterprises by a central <strong>SOC (Security Operations Center)</strong> that leading enterprises and managed services providers have organized to maintain a platform for vigilance over all other services. The SOC is often an expansion of the NOC (Network Operations Center) that has been around for decades working with on-premises servers and networks.


    <a name="Flow_LakeFormation"></a>

1.  <a target="_blank" href="https://aws.amazon.com/lake-formation/"><a href="#LakeFormation">Lake Formation</a> provides a way to centrally manage security settings and <strong>fine-grained permissions</strong> needed to permit access by AWS <strong>data lake services</strong> (Athena, Redshift, EMR).


    ## Compute

    When AWS was first created, it was a <strong>"lift and shift"</strong> of on-premises Windows servers running Java application programs using legacy storage to the cloud. 

    <a name="Flow_EC2"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/ec2/index.html"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390284/aws-icons/Amazon-EC2.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Compute/Compute_AmazonEC2.png?raw=true">
<strong>EC2 (Elastic Compute Cloud) servers</strong> in Virtual Machines (VMs) in the AWS cloud.

    <a name="Flow_EKS"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/EKS/latest/dev/Welcome.html"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/a1746b250a0ac37a8775140fc1b1bdca6774f822/Compute/Compute_AmazonECS.png?raw=true"><strong>containers</strong> managed by ECS (Elastic Container Service) and <a target="_blank" href="https://docs.aws.amazon.com/EKS/latest/dev/Welcome.html"><img align="right" alt="new png" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1693383598/aws-icons/Amazon-EKS.png"><strong>EKS (Elastic Kubernetes Service)</strong> clusters in the AWS cloud.


    <a name="Flow_Storage"></a>

    ## Storage

    AWS continues to support legacy storage services accessed from within servers and containers:

1.  <strong>EFS (Elastic File System)</strong> files and folders accessed as drives using the legacy <strong>NFS (Network File System)</strong> by legacy Windows and Linux servers;
   
1.  <strong>EBS (Elastic Block Storage)</strong> accessed as boot volumes by EC2 servers running Windows and Linux servers, available in different sizes and performance levels (SSD, HDD, etc.);
   
    <a name="Flow_S3"></a>
    
1.  <a target="_blank" href="https://docs.aws.amazon.com/s3/index.html"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390285/aws-icons/Amazon-S3.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Storage/Storage_AmazonS3.png?raw=true"></a>Many services (both modern and legacy) store their files in  <strong>S3 (Simple Storage Service)</strong> as <a target="_blank href="https://devblogs.microsoft.com/cse/2016/05/22/access-azure-blob-storage-from-your-apps-using-s3-api/">objects/blobs</a> of various (proprietary) formats because they can be accessed <strong>serverlessly</strong> as API calls from programs.

    Unlike legacy storage, data in S3 have High Availability (HA). Although each S3 object cannot be accessed from multiple regions, S3 data is replicated to several Availability Zones within a single region. 

    Snapshots can be taken of S3 objects and stored in <strong>S3 Glacier</strong> services for long-term storage. Use Amazon's <a target="_blank" href="https://aws.amazon.com/snowmobile/">Snowmobile</a> service to manually move petabytes of data at a time to AWS.

    All this makes S3 the data storage of choice among database services (Athena, EMR, and Redshift Spectrum, etc.). Green dots are used to avoid too many lines connecting with S3.

    PROTIP: The format of data within S3 is proprietary to Amazon. <a target="_blank" href="https://flexify.io/how-to-run-amazon-s3-apps-on-azure/">Flexify.IO</a> and <a target="_blank" href="https://github.com/andrewgaul/s3proxy">S3Proxy</a> using <a target="_blank" href="https://en.wikipedia.org/wiki/Amazon_S3#S3_API_and_competing_services">API</a> were created to extend Azure Blob Storage to be compatible with S3. The <a target="_blank" href="https://minio.io/">Minio</a> server is an open-source Golang-based S3-compatible object store that can be installed on-premises or in the cloud to expose local storage as S3 object storage.


    <a name="Flow_KMS"></a>
  
1.  <a target="_blank" href="https://docs.aws.amazon.com/kms/index.html"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692639280/aws-icons/Amazon-KMS.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Security%20Identity%20&%20Compliance/SecurityIdentityCompliance_AWSKMS.png?raw=true"></a>To protect the confidentiality of S3 objects, authentication and encryption mechanisms are based on <strong>cryptographic keys</strong> generated using the Amazon <strong>KMS (Key Management Service)</strong>. 

    The Key Management Service is used by <strong>AWS Secrets Manager</strong> which automates the <strong>rotation</strong> and retrieval of credentials, API keys, and other secrets.


    <a name="Flow_DevSecOps"></a>

1.  Developers of apps use <strong>CI/CD</strong> to automate scanning and deploy code from versioned source code in <strong>GitHub</strong> repositories. Included in CI/CD workflows are "static" code scanners that identify security vulnerabilities and suggest improvements.

    <a name="Flow_Inspector"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Security%20Identity%20&%20Compliance/SecurityIdentityCompliance_AmazonInspector.png?raw=true"><img align="right" width="26" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1693712719/aws-icons/Amazon-Inspector.png">Amazon Inspector</a> detects vulnerabilities <strong>running live</strong> in apps within EC2 servers and in Lambda Functions.


    <a name="Flow_CloudFront"></a>

1.  Analysis of network latency has led some international enterprises to justify use of <strong>CloudFront</strong> to pre-load content to edge locations closer to users around the world. This is a form of <strong>CDN (Content Delivery Network)</strong> to reduce latency.


    <a name="Flow_Cognito"></a>

1.  <a target="_blank" href="https://aws.amazon.com/cognito/"><img align="right" width="25" scr="https://res.cloudinary.com/dcajqrroq/image/upload/v1693712052/aws-icons/Amazon-Cognito.png"><strong>Amazon Cognito</strong></a> provides federated identity management, especially needed for mobile and web apps, so users can sign in directly with a user name and password, or through a <strong>federated</strong> third party for a <strong>SSO (Single Sign-On)</strong> to conveniently authenticate through Apple, Google, Azure, and social media such as Facebook, Twitter/X, LinkedIn, etc. Alternatives to Cognito include Okta, Auth0, etc.

    <a name="Flow_Secrets"></a>

1.  Web services front-end software communicating with users on internet <strong>browsers</strong) (such as Safari, Google Chrome, and Microsoft Edge) need SSL/TLS certificates to encrypt communications. Those certificates are generated and obtained from the <a target="_blank" href="https://aws.amazon.com/certificate-manager/"><strong>AWS Certificate Manager</strong></a>.
    
    PROTIP: That is not the AWS Certificate Manager Private Certificate Authority (ACM PCA). [<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/acmpca_certificate">Terraform</a>]

    <a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/acm_certificate">aws_acm_certificate</a>

    <a name="Flow_Shield"></a>

1.  <a target="_blank" href="https://aws.amazon.com/shield/"><img align="right" width="25" https://res.cloudinary.com/dcajqrroq/image/upload/v1693715513/aws-icons/Amazon-Shield.png">Because <strong>click streams</strong> by human users can be emulated by automated bots in <strong>DDoS (Distributed Denial of Service)</strong> attacks to overwhelm servers, Amazon offers its <a target="_blank" href="https://aws.amazon.com/shield/"><strong>Shield</strong></a> service. The "advanced" edition of Sheild adds 24x7 access to the AWS DDoS Response Team (DRT) and reduced fees from AWS usage spikes during attacks.

    <a name="Flow_VPC"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"><img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Networking%20&%20Content%20Delivery/NetworkingContentDelivery_AmazonVPC.png?raw=true"></a>Resources created within each Amazon account are created within a <strong>VPC (Virtual Private Cloud)</strong> segment.

    <a name="Flow_SecurityGroup"></a>

1.  <strong>Firewall rules</strong> to control access to resources within a VPC are defined in <strong>Security Groups</strong> which Amazon may create.

    AUTOMATION is needed to automatically delete Security Groups when the resources they protect are deleted.

    <a name="Flow_ELB"></a>

1.  Traffic allowed in by VPC enters through an external <a target="_blank" href="https://aws.amazon.com/elasticloadbalancing/"><strong>ELB (Elastic Load Balancer)</strong></a> that distributes traffic among multiple EC2 servers running the same software. This is a form of <strong>HA (High Availability)</strong> to ensure that if one server fails, another server can take over. 

    <a name="Flow_API_Gateway"></a>

1.  <a target="_blank" href="https://aws.amazon.com/api-gateway/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692756910/Amazon-API-Gateway_w7zvkp.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Application%20Services/ApplicationServices_AmazonAPIGateway.png?raw=true"></a>The <strong>Amazon API Gateway</strong> service is used to track and throttle traffic based on tags that senders include in the HTTP header.

    The API Gateway can feed REST API traffic to EC2 servers, ECS/EKS containers, or Lambda Functions.
    [<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_api">Terraform</a>]


    <a name="Flow_Lambda"></a>

1.  <img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390289/aws-icons/AWS-Lambda.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Compute/Compute_AWSLambda.png?raw=true"><strong>AWS Lambda</strong> runs functions written in Python, Node.js, Java, .NET C#, Erlang, Haskell, and other language run-times in the cloud without having to provision servers or containers. Thus, "serverless" (someone else's computer hardware).

     Lambda functions are versatile. It can read and write to/from S3, DynamoDB, and other services.

     But each function is limited in how much memory and CPU it can consume.
     If a function needs to run for longer than 15 minutes, it calls itself to continue.

     AWS Lambda processes data in <strong>streams</strong> and <strong>queues</strong> to <strong>transform</strong> data from one format to another.


    <a name="Flow_EventBridge"></a>

1.  <a target="_blank" href="https://aws.amazon.com/eventbridge/">Lambda functions can have a two-way relationship with the Amazon <strong>EventBridge</strong> events service. Lambda functions can send events to EventBridge for further processing. Or Lambda functions can be triggered by events from EventBridge.

    EventBridge is like the "Grand Central Terminal" for Lambda functions and other services to interact.

    It can obtain keys from KMS, 
    send SQL calls to databases,
    Send emails via SES (Simple Email Service), 
    Send SMS text to mobile phones (via the Amazon Pinpoint service)

    
    <a name="Flow_Macie"></a>

1.  <a target="_blank" href="https://aws.amazon.com/macie/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692757207/aws-icons/Amazon-Macie.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Security%20Identity%20&%20Compliance/SecurityIdentityCompliance_AmazonMacie.png?raw=true">EventBridge can be set to invoke on a schedule, such as to run the Amazon <strong>Macie</strong></a> (macie2) web service to read data in S3 and apply Machine Learning models to identify keywords in the content. Notifications about potential leaks (anomalies) found are sent to EventBridge for further processing.

    and pattern matching (aka managed and custom data identifiers in s3.tf) 

    * https://stackoverflow.com/questions/68346164/aws-macie-terraform-select-all-s3-buckets-in-account
    * https://dev.to/aws-builders/protect-s3-buckets-with-aws-macie-16gm
    * https://registry.terraform.io/modules/tedilabs/security/aws/latest/submodules/macie-account
    * https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/macie2_classification_export_configuration
    * https://github.com/aws-samples/aws-macie-customization-terraform-samples
    * https://shisho.dev/dojo/providers/aws/Macie/aws-macie2-account/
    * https://github.com/cloudposse/terraform-aws-macie
    * 
    <br /><br />

    Amazon's <a target="_blank" href="https://aws.amazon.com/machine-learning/">Machine Learning (ML) Marketplace</a> sells pre-trained models for use in apps.

    <a name="Flow_Streaming"></a>

    Also using Machine Learning models for pattern recognition are videos with sound. 

    <a name="Flow_Kinesis_Video_Streams"></a>

1.  <a target="_blank" href="https://aws.amazon.com/kinesis/video-streams/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692757223/aws-icons/Amazon-Kinesis-Video-Streams.png"></a>First, to ingest videos into S3, Amazon's <strong>Kinesis Video Streams</strong> service is used. Being serverless, it scales without administrative effort.

    <a name="Flow_Rekognition"></a>

1.  <a target="_blank" href="https://aws.amazon.com/rekognition/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692757223/aws-icons/Amazon-Kinesis-Video-Streams.png"></a>Faces and objects in videos can be detected using Amazon's <strong>Rekognition</strong> service.

1.  Amazon's <strong>Textract</strong> service can be used to extract text from images.

    <a name="Flow_SageMaker"></a>

1.  Instead of using models created by Amazon, custom models can be created using Amazon's <strong>SageMaker</strong> service running Tensorflow and other Machine Learning frameworks.

    <a name="Flow_Embeddings"></a>

1.  To take advantage of LLMs (Large Language Models), custom data can be integrated by reference to <strong>Embeddings</strong> (vectors) created by Amazon's <strong>Open Search</strong> service, which uses a "K-nearest neighbor" algorithm to find the closest match to a query.

    BTW there is also a <strong>Lookout for Metrics</strong> service.


    <a name="Flow_MSK"></a>
    <a name="Flow_Streams"></a>
    <a name="Flow_Kinesis"></a>

    ### Streams

    To collect and process events <strong>real-time</strong> in a stream of data (such as <a target="_blank" href="https://aws.amazon.com/solutions/case-studies/new-relic-case-study/">logs</a>, 


    <a name="Flow_Kinesis_Data_Streams"></a>

1.  <a target="_blank" href="https://aws.amazon.com/kinesis/data-streams/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692757223/aws-icons/Amazon-Kinesis-Data-Streams.png">Amazon Kinesis Data Streams</a> is  NOT serverless. It's a messaging broker service to collect, process, and analyze -- in real-time -- continuous streams of data, writing messages to a "topic" from where it can be read or derived. It's used for monitoring of fraud detection, trademark enforcement, and engagement/sentiment in social media platforms (Twitter/X, Instagram, Facebook, YouTube, LinkedIn, etc.), .
 

    <a name="Flow_MSK"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390286/aws-icons/Amazon-MSK.png">Amazon MSK (Managed Stream for Kafka)</a> provides serverless APIs like <a target="_blank" href="https://aws.amazon.com/msk/what-is-kafka/">Apache Kafka</a> servers and their connectors, to transform data <strong>streams</strong> and tables.

    MSK usually costs more than Kinesis. 
    MSK can persist data forever. 
    MSK can "fan out" with many nodes for simultaneous reading by consumers,
    whereas Kinesis can only be read by two consumers at a time.

    <a target="_blank" href="https://kafka.apache.org/10/documentation/streams/developer-guide/dsl-api.html">Transformation processing</a> by Kafka is defined in a <a target="_blank" href="https://mkuthan.github.io/blog/2017/11/02/kafka-streams-dsl-vs-processor-api/">a Java library</a> either by its own (concise) DSL (Domain-Specific Language), <a target="_blank" href="https://kafka.apache.org/10/documentation/streams/developer-guide/processor-api.html">Processor API</a>,  or <a target="_blank" href="https://www.confluent.io/product/ksqldb/">KSQL</a> (Kafka SQL) that embeds SQL in APIs.

    Open-sourced by LinkedIn in 2010, Kafka can now be used with other AWS services such as Lambda, Kinesis, and Elasticsearch.

    https://hevodata.com/learn/kafka-streams/

    <a name="Flow_Kinesis_Data_Firehose"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692757223/aws-icons/Amazon-Kinesis-Data-Firehose.png">Amazon Kinesis Data Firehose</a> is a <strong>serverless</strong> (AWS-managed) service to <strong>deliver</strong> continuous streams of data (including video) to S3 buckets, other Amazon services, or any other HTTP endpoint destination (with or without transformation before send). 

    Kinesis Firehose can perform <strong>transformations on the fly</strong> specified in <strong>"Low-code"</strong> Blueprints within Lambda to do some transformations. This is why its performance is called <strong>"near real-time"</strong> (of 60 seconds+) rather than real-time (200+ milliseconds).

    PROTIP: Firehose can be configured to deliver data to S3 either immediately or in <strong>batches</strong> of 1 to 15 minutes.


    <a name="Flow_Kinesis_Data_Analytics"></a>

1.  <a target="_blank" href="https://aws.amazon.com/kinesis/data-analytics/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692757223/aws-icons/Amazon-Kinesis-Data-Analytics.png">Managed Apache Flink</a> (formerly Amazon Kinesis Data Analytics) processes complex SQL queries on incoming data streams on behalf of other Kinesis services. It can also reference data from S3 such as player scores for a leaderboard in an e-sports, election, or security app.

    Once data is available in a target data source, it kicks off a <strong>AWS Glue ETL job</strong> to do further transform data for additional analytics and reporting.


    <br /><br />

    <a name="Flow_Timestream"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390286/aws-icons/Amazon-Timestream.png">Amazon Timestream</a> is a Time Series database designed to store a large amount of sensor data for IoT and DevOps application monitoring. It keeps recent data in memory and automatically moves historical data to a cost-optimized storage tier. It integrates with AWS IoT Core, Amazon Kinesis, Amazon MSK, open-source Telegraf, Amazon QuickSight, SageMaker. 

     Beacause <a target="_blank" href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Cloudwatch allows</a> only 15 months of data retention, those who need to retain data longer at lower granularity send CloudWatch logs to one or more cloud services: Elastic, Splunk, Sumo Logic, Datadog, etc.
     
     Timestream and CloudWatch are integrated to provide a <strong>single pane of glass</strong> for monitoring and analytics: Cloudwarch stream -> firehose -> data analytics -> Timestream.

     <a target="_blank" href="https://www.workload.co/api/amazonaws-com-logs/integrations/amazonaws-com-timestream-query/">Workload.io</a>

     https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html#what-is.use-cases Amazon TimeStream is a fast, scalable, and serverless time series database service for IoT and operational applications that makes it easy to store and analyze trillions of events per day up to 1,000 times faster and at as little as 1/10th the cost of relational databases.
     
     https://www.reddit.com/r/aws/comments/j9nm1z/timestream_cloudwatch_positioning_counters_and/

     https://docs.aws.amazon.com/timestream/latest/developerguide/Kinesis.html

     https://docs.aws.amazon.com/timestream/latest/developerguide/ApacheFlink.html

     https://docs.aws.amazon.com/timestream/latest/developerguide/creating-alarms.html

     <a name="Flow_IOT"></a>

1.  <a target="_blank" href="https://aws.amazon.com/iot-core/">Kinesis provides to <img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Internet%20Of%20Things/InternetOfThings_AWSIoT.png?raw=true"><strong>IoT Core</strong></a> a GUI to manage telemetry from robots and other devices.

    <a name="Flow_SageMaker"></a>

    To extract text and label images, recognize speaker in voice files, translate videos, and other AI-type capabilities, Amazon offers increasingly easier yet more sophisticated <strong>AI (Artificial Intelligence)</strong> services.

1.  <img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390285/aws-icons/Amazon-SageMaker.png">Video, image, and voice (binary) files can be input into <strong>Amazon SageMaker</strong> to create ML (Machine Learning) Models, then used in SageMaker Studio UI for AI (Artificial Intelligence). Amazon's <a target="_blank" href="https://aws.amazon.com/sagemaker/groundtruth/">Ground Truth</a> service is specifically designed to label data for training ML models.

    <a name="Flow_Rekognition"></a>

1.  Because it's expensive to create ML models, many now use Amazon's pre-trained service:

    <img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/AI/AI_AmazonRekognition.png?raw=true">Rekognition for images,<br />

    <a target="_blank" href="https://aws.amazon.com/textract/">Textract</a> to extract text from documents and images,<br />
    
    <img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/AI/AI_AmazonPolly.png?raw=true">Lex for text,<br />

    <img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/AI/AI_AmazonPolly.png?raw=true">Polly for voice, or<br />
    
    <img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/AI/AI_AmazonMachineLearning.png?raw=true">buy (within SageMaker) custom models from <a target="_blank" href="https://aws.amazon.com/marketplace/solutions/machine-learning/pre-trained-models">Amazon's Machine Learning (ML) Marketplace</a>, or use a foundation model from Amazon's <a target="_blank" href="https://aws.amazon.com/bedrock/">Bedrock</a> partners for Generative AI work.
   
    <a name="Flow_OpenSearch"></a>

1.  Amazon OpenSearch Service is a service managed by AWS based on a fork of (older) Elasticsearch 7.10.2 & Kibana 7.10 not supported by Elastic. <a target="_blank" href="https://aws.amazon.com/blogs/database/the-role-of-vector-datastores-in-generative-ai-applications/">Amazon contends</a> that its <a target="_blank" href="https://aws.amazon.com/opensearch-service/serverless-vector-engine/">vector engines</a> can be used to add domain-specific embeddings as <strong>vector datastore</strong> to customize foundational Large Language Models used by <a target="_blank" href="https://wilsonmar.github.io/genai/">Generative Artificial Intelligence</a> apps.


    <a name="Flow_Observability"></a>

    ## Observability

    <a name="Flow_SecurityHub"></a>

1.  <a target="_blank" href="https://aws.amazon.com/security-hub/"><img align="right" width="25" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1693711941/aws-icons/Amazon-SecurityHub.png"><strong>Amazon Security Hub</strong></a> is enabled by default in all AWS accounts. It can be disabled, but not deleted. It provides a comprehensive view to centrally manage and mitigate security alerts. 

    It generates its own findings from its own automated and continuous 
    
    It checks against AWS best practices and industry standards, such as:
    * Center for Internet Security (CIS) AWS Foundations Benchmark 
    * Payment Card Industry Data Security Standard (PCI DSS). 
    <br /><br />

    <a target="_blank" href="https://www.youtube.com/watch?v=oBac-GAoZJ8&t=2m6s">DEMO</a>: Production configurations different than Test:
    1. Multi-account setup on AWS Organizations
    2. Cross-account & cross-region aggregation
    3. "Auto-enable accounts" to automatically enable Security Hub in new accounts
    4. Integrate with AWS Chatbot to send finding alerts to Slack, Jira, ServiceNow, etc.
    
    5. Automate response & remediation with EventBridge, AWS Lambda functions
    6. Integrate with AWS Step Functions to orchestrate remediation workflows
    7. Integrate with AWS Service Catalog to create a product portfolio of remediation actions
    8. Integrate with AWS Security Hub custom actions to create custom remediation actions
    9. Integrate with AWS Security Hub custom insights to create custom insights
    
    10. Enable CIS AWS Foundations Benchmark and PCI DSS standards
    11. Setup automatically update security and compliance checks managed by AWS when new AWS Config rules are released at <a target="_blank" href="https://aws.amazon.com/blogs/security/how-to-automatically-update-aws-security-hub-controls-when-new-aws-config-rules-are-released/"><strong>Security Hub Controls</strong></a> Security Hub Controls are based on the CIS AWS Foundations Benchmark and the Payment Card Industry Data Security Standard (PCI DSS) v3.2.1.
    
    <a href="#Flow_Detective">Amazon <strong>Detective</strong></a>

    It aggregates, organizes, and prioritizes alerts (findings) from AWS Partners (such as Palo Alto) and multiple AWS services:
    * <a href="#Flow_GuardDuty">Amazon GuardDuty</a>
    * <a href="#Flow_Inspector">Amazon Inspector</a>
    * <a href="#Flow_Macie">Amazon Macie</a>
    * <a href="#Flow_IAM">AWS Identity and Access Management (IAM) Access Analyzer</a>
    * <a href="#Flow_Firewall_Manager">AWS Firewall Manager</a>
    <br /><br />

    
    <a name="Flow_CloudTrail"></a>

1.  <a target="_blank" href="https://linuxhint.com/a-comparison-between-cloudtrail-and-guardduty/"><img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Management%20Tools/ManagementTools_AWSCloudTrail.png?raw=true"><strong>AWS CloudTrail</strong></a> logs to S3 a record of every <strong>action to resources</strong> in <a target="_blank" href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-create-a-trail-using-the-console-first-time.html">each separate account</a>. Each record allows for these questions to respond with corrective measures when security vulnerabilities are recognized.

    Log category types:
    * Management Events (configuration changes)
    * Data Events
    * Insight on unusual Events
    <br /><br />

    * Identify security issue: Was the change made by API or CLI or GUI?
    * Which services were used & and unused?
    * What actions were performed? read-only, read-write, delete, write-only?
    * Who made the request? Source IP address (especially destructive actions)
    * Instance ID and other parameters for those actions?
    * Response elements returned by the AWS service?
    <br /><br />

    <a target="_blank" href="https://www.opsramp.com/guides/aws-monitoring-tool/cloudtrail-vs-cloudwatch/">PROTIP</a>: Store CloudTrail logs for Security and Audit in a separate bucket than for Operations & Support.
   
    Configure Prod differently than in Test.
    * Create a trail to specify the S3 bucket to store logs.
    * Enable log file validation which checks whether Log files were modified or deleted after the CloudTrail agent delivered them to the S3 bucket.
    <br /><br />
   

    <a name="Flow_Config"></a>
    
1.  <a target="_blank" href="https://aws.amazon.com/config/"><img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Management%20Tools/ManagementTools_AWSConfig.png?raw=true"><strong>Amazon Config</strong></a> is a SaaS service that reports on compliance to AWS resource <strong>rules</strong>. It's used for audit, security analysis, change management, and operational troubleshooting. Rules include blacklists, requirements for tagging, encryption, and access control. <a target="_blank" href="https://www.youtube.com/watch?v=X_fznJtSyV8/">DEMO</a>.

    IaC users can use Config to check for compliance to rules before deploying changes. ?
    
    PROTIP: All rules are run on every resource every time any resource is configured, so it can be pricy.


    <a name="Flow_GuardDuty"></a>

1.  <a target="_blank" href="https://aws.amazon.com/guardduty/"><img align="right" width="25" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1693711941/aws-icons/Amazon-GuardDuty.png">Amazon GuardDuty</a> is a SaaS threat detection service that <strong>uses Machine Learning</strong> to continuously monitor AWS accounts, resources, and workloads to detect anomalies such as malicious and unauthorized activity, or potentially unauthorized deployments that may indicate account compromise. GuardDuty also detects potentially compromised instances or reconnaissance by attackers. 

    Threats are mitigated by initiating <strong>automated and manual responses</strong> defined in "Playbooks" used to resolve incidents. 

    Many of these responses are provided by AWS partners such as Splunk, CrowdStrike, Palo Alto Networks, etc. 
    
    AUTOMATION NEEDED: GuardDuty requires a Global Security Administrator to provide <a target="_blank" href="https://aws.amazon.com/blogs/security/how-to-manage-amazon-guardduty-security-findings-across-multiple-accounts/">a CSV file of AWS accounts</a> with matching email addresses. AWS emails to <a target="_blank" href="https://aws.amazon.com/premiumsupport/technology/aws-health-dashboard/">Personal AWS Health Dashboard</a>.

    Findings are sent to <strong>CloudWatch</strong> and <strong>EventBridge</strong> for further processing.


    <a name="Flow_VPC_CloudWatch"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html"><img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Management%20Tools/ManagementTools_AmazonCloudWatch.png?raw=true">Amazon <strong>CloudWatch logs</strong></a> 
    

    <a name="Flow_VPC_Logs"></a>

1.  <img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Networking%20&%20Content%20Delivery/NetworkingContentDelivery_AmazonVPC.png?raw=true">VPC logs,<br />
    
1.  VPC emits a log about each file processed. VPC Logs are typically sent to <strong>CloudWatch</strong> and <strong>EventBridge</strong> for further processing.



    <a name="Flow_MasterData"></a>

    ## Master Data

    Apps generate and update <strong>F. Master data</strong> -- a central "source of truth" about products, customers, and inventory positions.

    <strong>G. External environmental inputs</strong>.

1.  Enterprises built <strong>H. Big Data</strong> to filter and aggregate data for "Business Intelligence" (BI) and "Data Warehousing" (DW) to make <strong>better decisions</strong>.

    Historically, due to limitations in disk space and CPU, data was processed in <strong>[batch]</strong> mode.
    We then enabled <strong>[event-driven]</strong> capabilities. Now, systems can process data in real-time, as data arrives in continuous <strong>[streams]</strong>.


    <a name="Flow_Visualization"></a>

    ## Visualizations
    
    Now let's dive into visualizations and analytics.

    Top-rated products in this category include <a href="https://wilsonmar.github.io/tableau/">Tableau (from Salesforce)</a> (at $2,000/month), Microsoft's PowerBI, and open-source Grafana.

    <a name="Flow_QuickSight"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/quicksight/index.html"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390284/aws-icons/Amazon-QuickSight.png"><img align="right" alt="Analytics_AmazonAthena.png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Analytics/Analytics_AmazonQuickSight.png?raw=true"></a>Within the AWS cloud, Data Analysts use the <a href="#QuickSight">AWS QuickSight</a>. It'

    For an additional monthly cost, rather than using a direct SQL query, data can be optionally be imported by QuickSight using its <strong>SPICE</strong> (Super-fast, Parallel, In-memory Calculation Engine). This is a public pool columnar in-memory storage for use by all users within each region to rapidly perform advanced calculations and serve data.

    Amazon provides a "QuickSight mobile" app on iPhone and Android.

    ### Types of data analysis

    * Descriptive (what happened) 
    * Diagnostic (why did it happen) based on correlation and causation from drill-down
    * Predictive (what is likely to happen)
    * Prescriptive (do this) makes recommendations based on predictive analytics using data mining, statistics, modeling, machine learning, and artificial intelligence (AI) to make recommendations.
    <br /><br />

    <a target="_blank" href="https://www.linkedin.com/pulse/aws-grafana-opsramp/?trackingId=Uq5wW%2F%2FISsiwL%2B5FOHpkmw%3D%3D">Grafana SaaS AWS Integration</a> by OpsRamp


    
    <a name="Flow_Apps"></a>

    <a name="Flow_BigData"></a>

    Managers working within enterprises depend on "Big Data" to aggregate data for "Business Intelligence" (BI) and "Data Warehousing" (DW) to make <strong>better decisions</strong>.

    Monitoring and Alerts based on trends is how the system asks for human review and intervention.

    <a name="Flow_DataSources"></a>

1.  QuickSight can access more data sources than shown on this diagram, such as text from <strong>GitHub</strong>, Twitter, and other APIs. QuickSight can create visualizations directly from many different sources. 

    <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1692453318/aws-quicksight-ins-1264x483_qwiewl.png"><img alt="aws-quicksight-ins-1264x483.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692453318/aws-quicksight-ins-1264x483_qwiewl.png"><em>Click image for full screen.</em></a>



    <a name="Flow_Alerts"></a>

    Lambda can send, optionally through    
    <a target="_blank" href="https://aws.amazon.com/eventbridge/"><img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Analytics/Analytics_AmazonAthena.png?raw=true"><strong>EventBridge</strong></a> scheduling, 
    
    <a target="_blank" href="https://aws.amazon.com/sqs/"><img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Messaging/Messaging_AmazonSQS.png?raw=true">SQS (Simple Queue Service)</a> queues,<br />
 
    <a target="_blank" href="https://aws.amazon.com/ses/"><img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Messaging/Messaging_AmazonSES.png?raw=true"><strong>alerts</strong> in the form of emails via <strong>SES (Simple Email Service)</strong></a>,<br />
    
    <a target="_blank" href="https://aws.amazon.com/pinpoint/"><img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Mobile%20Services/MobileServices_AmazonPinpoint.png?raw=true">SMS texts to mobile phones via AWS Pinpoint</a>,<br />
    
    <a target="_blank" href="https://aws.amazon.com/sns/"><img align="right" alt="classic png" width="25" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Messaging/Messaging_AmazonSNS.png?raw=true">messages to other AWS services via <strong>glue"</strong></a>,<br /> 
    
    and 3rd-party HTTP services such as Slack.

    Lambda functions can be triggered to fire dynamically by events from other AWS services.
    
    But Lambda functions are limited on how large and frequent each can be.


    <a name="Flow_Java"></a>
    <a name="Flow_OLTP"></a>
    <a name="Flow_SQL"></a>

1.  Early apps used stored and retrieved data using <strong>relational</strong> <strong>SQL (Structured Query Language)</strong> to perform <strong>OLTP (Online Transaction Processing)</strong> of transactions (such as purchases and inventory) in <strong>relational</strong> databases. 

    <a name="Flow_RDS"></a>

    Early databases also were installed inside EC2 servers, which required manual work to upgrade capacity, perhaps in more complex clusters.

1.  Early approaches to bring databases to the cloud used what's called <strong>"Lift and Shift"</strong> in ...

1.  <a target="_blank" href="https://aws.amazon.com/rds/"><img align="right" alt="Database_AmazonRDS.png" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390285/aws-icons/Amazon-RDS.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Database/Database_AmazonRDS.png?raw=true">
</a><a target="_blank" href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html">Amazon RDS (Relational Database Service)</a> is a web service that makes it easier to <strong>set up</strong>, operate, and <strong>scale</strong> a relational database in the AWS Cloud. 

    With RDS, AWS takes care of the hardware and operating system patching across several regions. 
    
1.  But customer admins still need to install and upgrade a flavor of database software such as <strong>Oracle and Microsoft SQL Server</strong>.

    Internally, applications reference each database in RDS using their DNS CNAME. RDS takes care of replication to a single secondary replica in the same region. But only the primary instance is updated. When RDS detects a need for failover, this multi-az instance approach switches DNS, which can take several minutes.

    The multi-az cluster approach replicates to two replicas. Replicas can be readers, to relieve load on the one node which responds to write requests.

    <a name="Flow_Aurora"></a>

1.  <a target="_blank" href="https://aws.amazon.com/rds/aurora/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390283/aws-icons/Amazon-Aurora.png"></a><a target="_blank" href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">Amazon Aurora</a> brings to RDS SQL query compatibility with open-source relational database software MySQL and PostgreSQL. But Aurora adds shared storage that decouples storage from compute.

    Internally, the serverless service operates differently than other RDS engines.
    Aurora provides a REST Data API.

    Aurora can hold up to 128TB of data in a single database.
    Aurora can replicate to more than two replicas, each read by up to 15 separate readers from one reader endpoint.
    Aurora's Multi-Master feature allows writes to be made to any replica, which are then replicated to other replicas.
    Aurora's Backtrack features allow in-place rewind to a previous point in time.

    Unlike RDS local storage, Aurora uses cluster volumes that are shared. Aurora can detect SSD disk failures and repair them automatically. Aurora can recover from a failure in less than 120 seconds,
    for an Availability SLA of <strong>99.99%</strong> ("4 nines").


    <a name="Flow_NoSQL"></a>

1.  AWS also manages two <strong>NoSQL</strong> databases accessible by QuickSight.

    Unlike SQL, NoSQL databases have less complex queries and no joins like SQL. 
    That enables them to be predictably faster for large data sets.

    <a name="Flow_DynamoDB"></a>

1.  <a target="_blank" href="https://aws.amazon.com/dynamodb/"><img align="right" alt="Database_AmazonDynamoDB.png" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390283/aws-icons/Amazon-DynamoDB.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Database/Database_AmazonDynamoDB.png?raw=true"></a> The key-value store in <a target="_blank" href="https://aws.amazon.com/dynamodb/resources/"><strong>AWS DynamoDB</strong></a> is a serverless service, so it automatically scale up and down to meet demand. So it's used for workloads such as session stores or shopping carts.

    Internally, DynamoDB uses an array of (fast) SSDs to store <strong>petabytes</strong> of data in <strong>items of 400KB each</strong>. 
    DynamoDB is a fully managed service, so AWS takes care of the hardware and operating system patching. However, Admins need to allocate Read and Write capacity Usage (RCU & WCU) based on the number of anticipated 4K items read and 1K items written per second (RPS and WPS). Use the DynamoDB Capacity Calculator to estimate the number of RCUs and WCUs needed for your workload.
    
    Each item can have up to 256 attributes. Each attribute can be a scalar (string, number, binary, Boolean, or null) or a complex data type (list, map, or set).
    
    PROTIP: Remember that, like S3, DynamoDB has regional scope. Each DynamoDB table cannot be accessed from other regions but can be accessed from across Availability Zones within the same region. ???
    It can serve over 20 million requests per second without performance loss because it replicates (streams) activity across geographic regions. Within each region.

    For fault tolerance, DynamoDB performs automatic synchronous replication across 3 AZs into <strong>Global Tables</strong>. Secondary indexes are also projected into indexes. The last write wins. Eventual consistency is the default (for performance), but strong consistency can be selected.
    
    DynamoDB performs "continuous" backups to S3 automatically for "point-in-time" recovery up to 35 days back. All this enables AWS to commit to the highest Availability SLA of <strong>99.999%</strong> ("6 nines") for DynamoDB.
    
    DynamoDB now supports Transactions, On-Demand Capacity, and .


    <a name="Flow_DocumentDB"></a>

1.  <a target="_blank" href="https://aws.amazon.com/documentdb/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1693246905/aws-icons/Amazon-DocumentDB.png">Amazon DocumentDB</a> is a fully managed NoSQL database built for managing JSON data models. It offers a fully scalable, low-latency service to manage mission-critical MongoDB workloads. It automatically replicates six copies of your data across 3 availability zones to offer a 99.99% availability. Additionally, it can serve millions of requests per second, enabling developers to build highly available (and low-latency) applications.

    AWS automatically replicates <strong>six copies of DocumentDB data across 3 Availability Zones</strong> to offer an Availability SLA of <strong>99.99%</strong> ("4 nines") for DocumentDB. 
    <a target="_blank" href="https://www.youtube.com/watch?v=crHwekf0gTA&" title="AWS Aurora VS DynamoDB">VIDEO</a>

    PROTIP: DocumentDB requires more manual scaling than DynamoDB. DocumentDB Firestore (for licensing) is has been modified from open-source MongoDB. The number of instances for the cluster and the instance sizes need to be specified, so admins need to keep an eye on usage and performance. And although encryption in transit is enabled by default, encryption at rest is not enabled by default, and can only be configured using the AWS Console. Once enabled, encryption cannot be disabled. 


    <a name="Flow_DAX"></a>

1.  <img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Database/Database_AmazonDynamoDBAccelerator.png?raw=true">Instead of reaching DynamoDB directly, an AWS <strong>DAX (DynamoDB Accelerator) agent</strong> can be installed on client servers to reach an in-memory cache in front of DynamoDB, like Redis.


    <a name="Flow_Keyspaces"></a>

1.  <a target="_blank" href="https://aws.amazon.com/keyspaces/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1693261677/aws-icons/Amazon-Keyspaces.png">Amazon Keyspaces</a> is a fully managed serverless database service to make it easier to scale open-source <a target="_blank" href="https://aws.amazon.com/keyspaces/what-is-cassandra/"><strong>Apache Cassandra databases</strong></a> with minimal transition effort. Keyspaces is compatible with Cassandra Query Language API calls to its <strong>columnar</strong> database popular for storing chat logs, IoT, and gamer profiles. 

    Keyspaces provides encryption by default with continuous parallel backup for point-in-time recovery up to 35 days back. With replication across 3 AZs, AWS can guarantee 99.99% (4 nines) availability SLA.


    <a name="Flow_GraphDBs"></a>

    Many apps are being built today using the most modern of databases:

1.  <a target="_blank" href="https://wilsonmar.github.io/graph-databases/">Graph database</a> have the flexibility to address the most complex of data relationships. It's used for mapping knowledge graphs, social networking, recommendations, fraud detection, life sciences, and network/IT operations. 
    
    Datasets in Graph databases are highly connected, where relationships between elements are as important as the content data. 


    <a name="Flow_Neptune"></a>
    
1.  <a target="_blank" href="https://docs.aws.amazon.com/neptune/latest/userguide/intro.html"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390284/aws-icons/Amazon-Neptune.png">Neptune</a>, Amazon's Graph database, has a GUI that looks like RDS, but is a fully serverless implementation of open-source software. It supports query languages Apache TinkerPop's Gremlin, openCypher, and SPARQL (but not licensed <a target="_blank" href="https://neo4j.com/">Neo4j</a>). 

    Since May 30, 2018, Neptune has run with continuous backups to S3 within a VPC that's private by default. 

    Neptune is a fully managed service, so AWS takes care of the hardware and operating system patching. However, Admins need to allocate Read and Write capacity Usage (RCU & WCU) based on the number of anticipated 4K items read and 1K items written per second (RPS and WPS). Use the DynamoDB Capacity Calculator to estimate the number of RCUs and WCUs needed for your workload.


    ### Big Data

    <a name="Flow_Hadoop"></a>

1.  To address a way to process large amounts of data ("Big Data") across many machines, the Apache open-source Hadoop framework was created in 2006. It stores data across many machines using its distributed file system (HDFS). Hadoop used Yarn to manage resources. 

    <a name="Flow_MapReduce"></a>

1.  To process and analyze data (in parallel), Hadoop used a <strong>"MapReduce"</strong> approach developed by Google. Java and Python programs split each large dataset across a cluster for parallel analysis, fault tolerance, and scalability. The abstractions let the user focus on high-level logic.

    <a name="Flow_Hive"></a>

    <a target="_blank" href="https://hive.apache.org/">Apache Hive</a> was open-sourced in 2008 by Facebook to make SQL-like queries available to simplify complex Java MapReduce jobs on data stored using HDFS (Hadoop Distributed File System).

    <a name="Flow_Spark"></a>

    The Spark framework arrived in 2014 to add higher performance to Hadoop. Instead of batch MapReduce to process data in HDFS, Spark added real-time processing and in-memory compute with a more flexible API. Spark added use of local and Amazon S3 to store data and load data from HBase, Cassandra. In addition to Yarn, Spark supports Mesos, Kubernetes, machine learning, and graph processing.

    ## Streaming data

    <a name="Flow_Presto"></a>

1.  <a target="_blank" href="https://aws.amazon.com/big-data/what-is-presto/">AWS Presto (renamed Trino)</a> is based on what Facebook open-sourced in 2014: a <strong>SQL query engine</strong> to access any size of data where it is stored, without needing to move data into a separate analytics system. Its connectors enable query of data in HDFS, S3, MySQL, PostgreSQL, Cassandra, MongoDB, Kafka, and Teradata. Query execution runs in-memory within a Hadoop cluster in parallel, so it can be fast.


    <a name="Flow_EMR"></a>

1.  <a href="#EMR"><img align="right" alt="Analytics_AmazonEMR.png" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390284/aws-icons/Amazon-EMR.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Analytics/Analytics_AmazonEMR.png?raw=true"></a>Amazon provides both Elastic Map Reduce and, since November 2021, <a target="_blank" href="https://aws.amazon.com/emr/serverless/"><strong>Amazon EMR serverless</strong></a> to handle petabyte-scale analytics processing based on MapReduce and use of S3 buckets.


    <a name="Flow_DataLake"></a>

    Traditionally, OLAP was done using rigid, pre-defined structures such as a "star schema" to hold summarized data separately from the source OLTP data. 

    As the need for more ad hoc analysis grew, the need for a <strong>Data Lake</strong> emerged to store source data in its original form, without the need to transform it into a predefined schema. This some call "schema on read".

    <strong>AWS Glue ETL job</strong> creates a <strong>Crawler</strong> through S3 to use custom then built-in classifiers to build a Data Catalog of metadata. Glue can then be used to transform data into a schema for analysis. Glue can also be used to create ETL (Extract, Transform, Load) jobs to move data from one source to another.


    <a name="Flow_Redshift"></a>

1.  <a href="#Redshift"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390285/aws-icons/Amazon-Redshift.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Analytics/Analytics_AmazonRedshift.png?raw=true">AWS Redshift</a> is a cloud-based (but not serverless) service based on open-source PostgreSQL. So customer effort is needed to provision servers (with enhanced VPC). 

    AWS introduced Redshift Serverless in AWS re: Invent 2021.

    "Red" in the name is because it is seeks to migrate users <a target="_blank" href="https://hevodata.com/learn/redshift-vs-oracle/">from</a> the red logo of Oracle's "Autonomous Data Warehouse". Exadata, Like Oracle, Redshift stores columnar data in a cluster of nodes on <strong>EFS block storage</strong> used by operating systems and EC2 instances (rather than in S3 objects).
    
    Redshift stores data in columns rather than rows. This enables millisecond response as it enables parallel query execution, especially when dealing with large tables. 

    It's used to create star schemas in "data lakes" of petabyte-scale data warehouse for OLAP (Analytical Processing).

    Redshift automates incremental encrypted backups into S3 every 8 hours, with retention for 1-35 days.

    Redshift has "Analyze" operation which updates stats of tables in leader node (a ledger about which data is stored among partitions within a node). It improves Query performance


    <a name="Flow_Redshift_Spectrum"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/redshift/latest/dg/c-getting-started-using-spectrum.html"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390285/aws-icons/Amazon-Redshift.png"><img align="right" alt="Analytics_AmazonRedshift.png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Analytics/Analytics_AmazonRedshift.png?raw=true">Amazon Redshift Spectrum</a> extends Redshift to query from S3 without loading data, like using <a href="#Flow_Presto">Presto</a> with Hadoop. <a target="_blank" href="https://ahana.io/answers/aws-redshift-vs-spectrum/">RedShift Spectrum</a> can perform SQL <strong>joins</strong> with S3 objects and other foreign data in queries.    


    <a name="Flow_Athena"></a>

1.  <a target="_blank" href="https://docs.aws.amazon.com/athena/index.html"><img align="right" alt="Analytics_AmazonAthena.png" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390283/aws-icons/Amazon-Athena.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Analytics/Analytics_AmazonAthena.png?raw=true">Amazon Athena</a> is an AWS-managed SaaS offering. Athena's console GUI offers a simplified <strong>Python Jupyter Notebook/strong> developer experience that supports ODBC/JDBC drivers (like Amazon DynamoDB) as well as REST API calls. So it's good for small data sets.

    As a serverless provider, the Athena web service is always ready to query data. So it is used for infrequent or ad hoc data analysis such as any type of log data exported into S3, such as:
    
    * Application Load Balancer<br />
    
    etc.

    Athena can access the results of traditional <strong>EMR (Elastic MapReduce)</strong> jobs stored in S3 buckets. Athena can benefit from EMR's direct, lower-level access to Spark Hadoop internals. 
    
    Engineers can utilize EMR’s integration with streaming applications such as Kinesis or Spark… 
    
    AWS provides for the transition from "Schema on write <a target="_blank" href="https://aws.amazon.com/blogs/big-data/build-a-schema-on-read-analytics-pipeline-using-amazon-athena/">to "Schema on Read" using Athena</a>.

    [<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/athena_database">Terraform</a>]

    <a name="Flow_ETLvsELT"></a>

    Athena is advanced enough to perform from S3 buckets both legacy <strong>ETL (Extract, Transform, Load)</strong> processing AND modern <strong>ELT (Extract, Load, Transform)</strong> data structures stored into S3. 

    * ETL (Extract, Transform, Load) is the traditional approach to arranging data for storage and analytics. This approach emerged at a time when disk space was more expensive and took time to obtain. ETL process removes data not needed in summaries in order to store less data. The resulting data (for OLAP) consists of a more rigid definition. Thus some call "schema on write".

    * ELT (Extract, Load, Transform) is a more modern approach that uses more storage because data is stored in an unredacted form for transformation later, to enable retrospective analysis of attributes not considered previously. 


    <a name="Flow_Presto"></a>

    Alternately, Data Analysts can run SQL queries on <strong>Presto</strong> data structures using Athena.
    <strong>without setting up EC2 servers</strong> (unlike Redshift and standard EMR). So Athena users only pay for data scanned ($5 per terabyte in most regions). 

    
    <a name="Flow_Glue"></a>

1.  Many Athena users are migrating from EMR to use <a target="_blank" href="https://aws.amazon.com/glue/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390288/aws-icons/AWS-Glue.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Analytics/Analytics_AWSGlue.png?raw=true"><strong>Amazon Glue ELT Jobs</strong></a> because Glue is serverless and thus easily scalable. 

    EMR costs around $14-16 per day while AWS Glue is around $21 per day.
    But that difference is made up largely by avoiding the hassles of setup and the cost of "always on" EMR clusters.

    ETL jobs are Scala or Python based. Glue can be used to create ETL (Extract, Transform, Load) jobs to move data from one source to another. 

    <strong>AWS Glue Crawler</strong> jobs scans S3 to create <a target="_blank" href="https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html">AWS Glue Catalogs</a> housed in a Glue Schema Registry. The Glue Catalog for each region provides a central reference for metadata about all services. Catalog information includes location, ownership, schema, data types, and other properties changed over time, which can be used to create ETL jobs. <a target="_blank" href="https://www.youtube.com/watch?v=yj98zViIgYI" title="how to use Glue to create a data lake">VIDEO</a> <a target="_blank" href="https://www.youtube.com/playlist?list=PL5KTLzN85O4KdNBfGpD-QIabS3yvwI4qn">series</a> <a target="_blank" href="https://www.youtube.com/watch?v=8jlAoB1GmNs">4</a>
    
    Glue can move data from producers and continously process (transform) data beofore moving to another data store, driving real-time metrics and analytics.


### Recap

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1694404152/aws-data-tools-1920x1080_zc8cmn.png"><img alt="aws-data-tools-1920x1080.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1694404152/aws-data-tools-1920x1080_zc8cmn.png"><br /><em>Click image for full-screen</em></a> or <a target="_blank" href="https://7451111251303.gumroad.com/l/bparb"><em>buy the animated pptx</em></a>.


<hr />

<a name="Alphabetically"></a>

## Individual AWS Data Tools Alphabetically

Among the 200+ services that make up AWS, these cloud have the most with processing data (alphabetically):

   * <a href="#Athena">Athena</a>
   * <a href="#Aurora">Aurora</a>
   * <a href="#EMR">EMR</a> (Elastic Map Reduce)
   * ElasticSearch
   * <a href="#Kinesis">Kinesis</a> stream
   * <a href="#QuickSight">QuickSight</a>
   * <a href="#Redshift">Redshift</a>
   * <a href="#RDS">RDS</a>
   * <a href="#SageMaker">SageMaker</a>
   <br /><br />


<hr />

## Which Query Service?

   * https://www.cloudinfonow.com/amazon-athena-vs-amazon-emr-vs-amazon-redshift-vs-amazon-kinesis-vs-amazon-sagemaker-vs-amazon-elasticsearch/
   * https://awsvideocatalog.com/analytics/athena/appnext-kinesis-emr-athena-redshift-choosing-the-right-tool-for-your-analytics-jobs-wEOm6aiN4ww/
   * https://medium.com/codex/amazon-redshift-vs-athena-vs-glue-comparison-6ecfb8e92349
   <br /><br />

   * https://www.linkedin.com/pulse/aws-glue-vs-datapipeline-emr-dms-batch-kinesis-what-ramamurthy/

   * https://skyvia.com/etl-tools-comparison/aws-glue-vs-aws-data-pipeline

<hr />

## AWS Data Exchange

<a target="_blank" href="https://aws.amazon.com/data-exchange/">Amazon Data Exchange</a> provides <a target="_blank" href="https://aws.amazon.com/marketplace/search/results?ref_=adx_hp_ben_wdtap&trk=adx_hp_ben_wdtap&category=d5a43d97-558f-4be7-8543-cce265fe6d9d&FULFILLMENT_OPTION_TYPE=DATA_EXCHANGE&filters=FULFILLMENT_OPTION_TYPE">data products among Amazon's marketplace</a> to purchase data from various sources "3rd-party" to Amazon. Many datasets are free.

[<a href="#Flow_DataExchange">Return to flow diagram</a>]

## Apache Spark

   * <a target="_blank" href="https://www.youtube.com/watch?v=cZS5xYYIPzk">The ONLY PySpark Tutorial You Will Ever Need</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=tDVPcqGpEnM">Computerphile</a>
   * https://www.youtube.com/watch?v=QLQsW8VbTN4
   * https://www.youtube.com/watch?v=a_3Md9nV2Mk

[<a href="#Flow_Spark">Return to flow diagram</a>]


## RDS

QUESTION: RDS now has compatibility with other databases as well?

https://www.educative.io/collection/page/10370001/6628221817978880/5488262805454848/cloudlab
Codelab: Getting Started with Amazon Relational Database Service (RDS)

https://github.com/terraform-aws-modules/terraform-aws-rds

[<a href="#Flow_RDS">Return to flow diagram</a>]

## Athena

https://www.educative.io/collection/page/10370001/6630323149078528/6214287382282240/cloudlab
CLOUDLAB: Analyzing S3 Data and CloudTrail Logs Using Amazon Athena


## API Gateway

[<a href="#Flow_API_Gateway">Return to flow diagram</a>]

## Aurora

https://www.educative.io/cloudlabs/getting-started-with-amazon-aurora-database-engine
Lab: Getting Started with Amazon Aurora Database Engine

https://github.com/terraform-aws-modules/terraform-aws-rds-aurora

Amazon Aurora PostgreSQL-Compatible Edition supports the pgvector extension to store embeddings from machine learning (ML) models in your database and to perform efficient <strong>similarity searches</strong>. Embeddings are numerical representations (vectors) created from generative AI that capture the semantic meaning of text or images input into a large language model (LLM). With pgvector, you can query embeddings in your Aurora PostgreSQL database to perform efficient semantic similarity searches of these data types, represented as vectors, combined with other tabular data in Aurora. This enables the use of generative AI and other AI/ML systems to build new content, enable hyper-personalization, create interactive experiences, and more. 

### PyVector on Aurora

https://repost.aws/questions/QUcSvXQXjlRFiiW9Heb5b7Eg/pgvector-for-aurora
Discussion

https://aws.amazon.com/blogs/database/leverage-pgvector-and-amazon-aurora-postgresql-for-natural-language-processing-chatbots-and-sentiment-analysis/
uses a combination of pgvector, open-source foundation models (flan-t5-xxl for text generation and all-mpnet-base-v2 for embeddings), LangChain packages for interfacing with its components and Streamlit for building the bot front end. 

https://www.youtube.com/watch?v=vKsqr_JcZm4
 Sep 18, 2023 by Steve Dillie, AWS Solutions Architect
In this session, learn how you can start using the pgvector extension with your Aurora PostgreSQL database.

https://pypi.org/project/pyvector/

https://github.com/pgvector/pgvector
by Andrew Kane

https://github.com/topics/nearest-neighbor-search


[<a href="#Flow_Aurora">Return to flow diagram</a>]


## S3

CONSOLE: https://s3.console.aws.amazon.com/s3/get-started?region=us-east-1

The pattern of S3 bucket URL static website endpoint:

   * http://<em>bucket-name</em>.s3-website-<em>Region</em>.amazonaws.com
   * http://<em>bucket-name</em>.s3-website.<em>Region</em>.amazonaws.com
   <br /><br />

Data in S3 is replicated across 3 AZs in a region.


It offers 11 nines durability of storage.

Cross-region replication is configurable for disaster recovery.

https://github.com/terraform-aws-modules/terraform-aws-s3-bucket

[<a href="#Flow_S3">Return to flow diagram</a>]


## Redshift

<img align="right" alt="Analytics_AmazonRedshift.png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Analytics/Analytics_AmazonRedshift.png?raw=true">
<img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390285/aws-icons/Amazon-Redshift.png">
Redshift is an AWS-managed data warehouse, based on open-source PostgreSQL with JDBC & ODBC drivers with SQL.

There are three variants of Redshift:
   * Amazon Redshift Provisioned Clusters
   * Redshift Spectrum
   * Redshift Serverless
   <br /><br />

It's not for blob data.

Redshift is designed for the fastest performance on the most complex BI SQL with multiple joins and subqueries. Amazon Redshift Spectrum is an optional service to query any kind of data (videos) stored in Amazon S3 buckets without first being loaded into the Redshift data warehouse. No additional charge for backup of provisioned storage and no data transfer charge for communication between Amazon S3 and Amazon Redshift. 

Redshift uses machine learning and parallel processing of queries of <strong>columnar storage</strong> on very high-performance disk drives. It can also be expensive as it is <strong>always running</strong>.

Redshift mirrors data across a cluster, and automatically detects and replaces any failed node in its cluster. Failed nodes are read-only until replaced. An API is used to change number, type of nodes.

Redshift’s internal components include a leader node and multiple compute nodes that provide parallel data access in the same format as queries. The leader node has a single SQL endpoint. As queries are sent to the SQL endpoint, <strong>jobs are started in parallel</strong> on the compute nodes by the leader node to execute the query and return the results to the leader node. The leader gives the user results after combining results from all compute nodes.

Port number 5439 is the default port for the Redshift data source

https://www.educative.io/collection/page/10370001/4752686122270720/5745459222806528/cloudlab
CLOUDLAB: Getting Started with Amazon Redshift

https://github.com/terraform-aws-modules/terraform-aws-redshift

Redshift stores in S3 snapshots for point-in-time backups.

Redshift has 3 node types defining mix of CPU, memory, storage capacity, and drive type:

   * DS2 - legacy, using HDD. not used much.
   
   * DC2 - Compute-intensive with <strong>local SSDs</strong> (for data warehouse) with compute together with storage. Launched in VPC. Has 2x the performance of DS2 and 1/2 the cost of DS2. Use for datasets under 1 TB (compressed), for best price and performance.

   * RA3 - managed storage with SSDs and HDDs (for data lake) with 3x the performance of DC2 and 1/2 the cost of DS2. RA3 nodes can be scaled up to 128 nodes. Used to scale compute separate from storage. Thus, the recommended type.
   <br /><br />

<a target="_blank" href="https://www.coursera.org/learn/storage-systems-and-data-management/lecture/BAWxr/redshift-storage-and-retrieval-patterns-lab">Redshift distribution modes</a>:

   * Distribution KEY - distributes data into a slice based on key values in a column. Use for large tables that are joined to large tables.
   * Distribution EVEN - distributes data evenly across all nodes using round-robin row-by-row distribution. Use for large tables. Each slice contains about the same number of rows.
   * Distribution ALL - copies all data (same # of rows) to all nodes. Use for small tables that are joined to large tables.
   * Distribution AUTO - 

RedShift automatically assign compresssion type: REMEMBER:
   * Sort keys, BOOLEAN, REAL, DOUBLE get RAW compression
   * SMALLINT, INTEGER, BIGINT, DECIMAL, DATE, TIMESTAMP get AZ64 compression
   * CHAR, VARCHAR, and TEXT get LZO compression

Example of a query:

```sql
create table ForeignKey_sample (
   coll int NOT NULL [PRIMARY_KEY]
   ,col2 data
   ,col3 varchar(60)
   ,foreign key (col1) references PrimaryKey_sample (col1)) distkey(col1)
   compount sortkey(col1, col2);
);
```

Redshift does not enforce unique primary and foreign key constraints even though it benefits from them. That's because each query predicate can use any subset of the columns in a table, and the query optimizer can use the knowledge of the table's constraints to optimize the query plan. EXPLAIN command shows the query plan.

COPY command most efficient way to load data into Redshift, reading in parallel from multiple files and loading in parallel into multiple slices.

Redshift Spectrum is an extension of Redshift that allows you to query data stored in S3 buckets directly without having to load it into Redshift first. It uses the same SQL syntax as Redshift. It's useful for infrequently accessed data.


[<a href="#Flow_Redshift">Return to flow diagram</a>]


## Elasticache

Elasticache is a fully managed implemenation of Redis, Memcached.
And it makes use of in-memory data store, so it boasts sub-millisecond response time and millions of requests per second -- at scale.

It supports Redis data structures such as lists, maps, sets, sorted sets with range queries, bitmaps, hyperloglogs, and geospatial indexes with radius queries.
So it supports real-time analytics from caching, session management, gaming, geospatial services, and queuing.

## Timestream

Timestream is a fully-managed <strong>time series</strong> database.




<a name="Kinesis"></a>

## Kinesis

Here's a hands-on, step-by-step tutorial on setting up a Kinesis stream to ingest logs
(based on <a target="_blank" href="https://docs.aws.amazon.com/kinesis/">AWS docs</a> & <a target="_blank" href="https://www.educative.io/cloudlabs/building-a-logs-processing-pipeline-with-amazon-kinesis/g2G2QoYm816">this</a>)

1.  Get an AWS account with enough permissions.
1.  Go to the Kinesis service (click among recents or at the top of the Amazon Management Console, in the search bar, search for "Kinesis" - "Real time data streaming")

    https://us-east-1.console.aws.amazon.com/kinesis/home?region=us-east-1#/home
    https://us-east-1.console.aws.amazon.com/kinesis/home?region=us-east-1#/dashboard

1.  On another monitor: 

    https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kinesis_stream

1.  Set Region (us-east-1).
1.  Notice there the types of Kinesis services:

    * Kinesis Data Streams - Collect streaming data with a data stream. This service allows for creating and managing real-time data streams from massive data sources. Kinesis Data Streams can handle large amounts of streaming data and can autonomously scale up or down as data volume varies.

    * Kinesis Data Firehose - Process and deliver streaming data with data delivery stream.  This service captures, transforms, and loads streaming data into Amazon Web Services storage services such as S3, Redshift, and Elasticsearch. It can manage and send many data streams to AWS services.

    * Managed Apache Flink - Formerly Kinesis Data Analytics - Analyze streaming data with data analytics application. This service delivers real-time analytics on streaming data using SQL queries in a fully managed environment, allowing instant data insights and action. It has a separate dashboard, such as:<br />
    https://us-east-1.console.aws.amazon.com/flink/home?region=us-east-1#/dashboard

1.  Select "Kinesis Data Streams", then "Create data stream" orange button section.

    https://us-east-1.console.aws.amazon.com/kinesis/home?region=us-east-1#/streams/create

    <pre>resource "aws_kinesis_stream" "test_stream" {
  name             = "terraform-kinesis-test"
  shard_count      = 1
    </pre>

1.  For "Data stream name", follow naming conventions:

    <em>project</em>-<em>env</em>-<em>data-stream-type</em>-<em>name</em>-<em>sequence#</em>

    <tt>woohoo1-test-vid-shoo-001</tt>

    Data stream types: 
    * vid = video
    * logs
    * etc.
    <br /><br />

1.  For "Capacity mode" as "Provisioned" (under the "Data stream capacity" section)

    <pre>  stream_mode_details {
    stream_mode = "PROVISIONED"
  }</pre>

    PROTIP: Start with Provisioned: Use provisioned mode when you can reliably estimate throughput requirements of your data stream. With provisioned mode, your data stream's capacity is fixed.

    On-demand: Use this mode when your data stream's throughput requirements are unpredictable and variable. With on-demand mode, your data stream's capacity scales automatically. On-demand mode eliminates the requirement to manually provision and scale your data streams. With on-demand mode, your data streams automatically scale their write capacity 

    <table border="1" cellpadding="4" cellspacing="0">
    <tr><th> Capacity mode </th><th> Write capacity Maximum </th><th> Read capacity </th></tr>
    <tr valign="top"><td> Provisioned </td><td> 1 MiB/second &<br /> 1,000 records/second 
        </td><td> 2 MiB/second </td></tr>
    <tr valign="top"><td> On-demand </td><td> 200 MiB/second &<br /> 1200,000 records/second 
        </td><td> 400 MiB/second </td></tr>
    </table>

1.  Set <tt>shard_count</tt> = "Provisioned shards" to "1."

    PROTIP: Each shard can support up to 5 GET requests per second. So track actual usage over time.

    PROTIP: Payment is based on shard hours used and PUT i/o processed. 
    Each shard can ingest 1 MB/sec and 1,000 PUT/sec. 

    PROTIP: Adjust this number later, as needed.

    Total data stream capacity: Shard capacity is determined by the number of provisioned shards. Each shard ingests up to 1 MiB/second and 1,000 records/second and emits up to 2 MiB/second. If writes and reads exceed capacity, the application will receive throttles.


    <pre>  retention_period = 48
    </pre>

    Kinesis can keep stream data from a default of 1 to a max configurable of 365 days. 
    Kinesis is not for long-term storage.
    It is more suitable for streaming data processing rather than interactive analytics.

1.  "Enable after creation" are:

    * Server-side encryption (SSE) disabled
    * Monitoring enhanced metrics disabled
    * Tags disabled

    <pre>
  shard_level_metrics = [
    "IncomingBytes",
    "OutgoingBytes",
  ]
  tags = {
    Environment = "test"
  }
}
    </pre>

1.  Click "Create data stream" to create the data stream.

    ### IAM Roles

    Two IAM roles are needed for the EC2 instance:



1.  Go to the IAM service (In Amazon Management Console, search for “IAM” in the search bar, and click 

1.  Click "Roles" in the left-hand menu.

1.  Click "Create role."

1.  Choose "AWS service" as the "Trusted entity type."

1.  Select "EC2" from the "Use case" and click "Next."

1.  Select the EC2RolePolicy policy and click "Next."

1.  Enter ec2_producer_role as the "Role name."

1.  Click "Create role."

    Create an IAM role for the consumer Lambda function:

1.  Click "Create role."

1.  Choose "AWS service" as the "Trusted entity type."

1.  Select "Lambda" from the "Use case" and click "Next."

1.  Select AWSLambdaKinesisExecutionRole and LambdaRolePolicy policies and click "Next."

1.  Enter lambda_consumer_role as the "Role name."

1.  Click "Create role."

    ### Analyze

    How this real-time data streaming service used for collecting, processing, and analyzing real-time data. 

    <img alt="aws-log-kinesis.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1694534707/aws-log-kinesis_yaadzr.png">


    Each consumer can read streams at a different granularity.

    <a target="_blank" href="https://www.youtube.com/watch?v=kcBAKz0MPf8">VIDEO</a>: 
    Alternative to Kinesis Data Streams is ... 

   * Input <a target="_blank" href="https://docs.aws.amazon.com/streams/latest/dev/developing-producers-with-kpl.html">KPL (Kinesis Producer Library)</a>, agent, PUT API
   * Output KCL
   <br /><br />

   * https://www.youtube.com/watch?v=ZW6wbUILlI0&t=41s
   <br /><br />

Kinesis Data Streams ingests continuous streams of data (to shards), replicated across three AZs in a Region. It uses a cursor in DynamoDB to restart failed apps at the exact position within the stream where failure occured.

   * https://www.youtube.com/watch?v=vCRa3pymCzA
   <br /><br />

Kinesis Storm Sprout reads from a Kinesis stream into Apache Storm.

Kinesis Data Firehose can be adjusted via API calls for specified data rates (capacity).
Duplicates can occur with Firehose.

Kinesis Data Analytics provisions capacity in Kinesis Processing Units (KPU) for memory and corresponding computing and networking capacity. Kinesis Data Analytics supports two runtime environments: Apache Flink and AWS Glue.

Kinesis Video Streams automatically provisions and elastically scales to millions of devices and scales down when devices are not transmitting.

   * https://aws.amazon.com/kinesis/video-streams/pricing/
   <br /><br />

<img width="458" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692399384/aws-glue-s3-athena-quicksight-458x214_j2hlrj.png">

   * https://www.youtube.com/watch?v=_bRTlb9b59Y by "Be a Better Dev"
   * https://www.youtube.com/watch?v=b0ghP_WGYC8 by Enlear Academy

Johnny Chivers videos about Kinesis:
   * <a target="_blank" href="https://www.youtube.com/watch?v=_t3k6oX2mfc&t=47s">setup from a Mac referencing<br /><a target="_blank" href="https://github.com/johnny-chivers/kinesisZeroToHero/">https://github.com/johnny-chivers/kinesisZeroToHero</a> containing a CloudFormation yaml template.


[<a href="#Flow_Kinesis">Return to flow diagram</a>]

## CloudWatch

Amazon CloudWatch is a web service to monitor and manage various metrics, and configure alarm actions based on data from those metrics.

Amazon CloudWatch Logs is a web service for monitoring and troubleshooting your systems and applications from your existing system, application, and custom log files. You can send your existing log files to CloudWatch Logs and monitor these logs in near-real time.

https://github.com/terraform-aws-modules/terraform-aws-cloudwatch

[<a href="#Flow_CloudWatch">Return to flow diagram</a>]


## CloudFront

https://github.com/terraform-aws-modules/terraform-aws-cloudfront

[<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_function">Terraform</a>]

[<a href="#Flow_CloudFront">Return to flow diagram</a>]


## CloudTrail

AWS CloudTrail is a web service that records AWS API calls for your account and delivers log files to you. The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements that the AWS service returns.

[<a target="_blank" href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudtrail">Terraform</a>]

[<a href="#Flow_CloudTrail">Return to flow diagram</a>]


## Map Reduce

https://www.educative.io/answers/mapreduce


## EMR

<img align="right" alt="Analytics_AmazonEMR.png" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390284/aws-icons/Amazon-EMR.png">
Amazon EMR (Elastic Map Reduce) is a PaaS service - setup on a collection of EC2 instances called nodes running 
"Big Data" utilities Hadoop, Spark, and Presto running in the AWS cloud. 
* EMR automates the launch of compute and storage nodes powered by Amazon EC2 instances.
* Each EMR cluster has master, core, and task nodes. Each node is a EC2 (Elastic Compute Cloud) instance.
   * Master node manages the cluster, running software components to coordinate the distribution of data and tasks across other nodes for processing.
   * Core nodes have software components that run tasks and store data in the Hadoop Distributed File System (HDFS)
   * Task node is made up of software components that only run tasks and do not store data in HDFS.
   <br /><br />
EMR can store data securely using customer encryption keys using an HDFS (Hadoop Distributed File System).
EMR secures querying of data stored outside the cluster, such as in relational databases, S3, AWS Fargate K8s.
EMR is often used for predictable data analysis tasks, typically on clusters maee available for extended periods of time. 
But it also supports Reserved Instances and Savings Plans for EC2 clusters and Savings Plans for Fargate, which can help lower cost. Only pay for when cluster is up. 

https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-supported-instance-types.html

EMR is a managed Hadoop framework that provides a platform to run big data processing jobs at scale. 
* Created in a private subnet within a VPC.
* There's an EMR-managed Security Group for master, core/task, and manger? cluster in private subeta
* Additional security groups to control network access via NAT serv through a gateway
* Security groups can only be added on create.
* Rules within a Security Group can be added, edited, and deleted after creation.

* EMR can use ENI to connect directly with EC2, Athena, EMR, Kenesis Firehose, Streams, RedShift, SageMaker, and VPC Endpoints.
* EMR clusters can be configured to use AWS Glue Data Catalog as the metastore for Apache Hive and Apache Spark.

ENI	(Elastic Network Interface) connects with other AWS services.
ENIs are virtual network interfaces that provide a primary private IP address, one or more secondary private IP addresses, and a MAC address to the nodes.

An S3 Gateway Endpoint is used to provide a secure and private connection between the EMR cluster and the S3 bucket. It allows traffic to flow directly between the EMR cluster and the S3 bucket without leaving the Amazon network

EMR v1.4.0 can use HDFS transparent encryption.

EMRFS on S3 for encryption at rest.

https://www.youtube.com/watch?v=_90YaA8IJ4A
Migrate to Amazon EMR - Apache Spark and Hive

Data scientists can use EMR to run machine learning TensorFlow jobs. 

https://www.youtube.com/watch?v=9Qq5K8e18Gw
Migrate to Amazon EMR - Apache Spark and Hive - Cost Optimization

https://github.com/terraform-aws-modules/terraform-aws-emr

https://www.youtube.com/watch?v=ARzFq7DJpVQ

[<a href="#Flow_EMR">Return to flow diagram</a>]



<a name="Glue"></a>

## AWS Glue

<img align="right" alt="Analytics_AWSGlue.png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Analytics/Analytics_AWSGlue.png?raw=true">
AWS Glue is a serverless data integration service that runs on top of Apache Spark for job scale-out execution
for users of analytics to find, prepare, move from 70+ data sources (SQL, not No-SQL).

* Glue bulk imports Hive metastore into Glue Data Catalog
* Glue automatically provides job status to CloudWatch events triggering SNS notifications. With EMR you need to setup CloudWatch.
* Glue doesn't handle heterogeneous ETL job types (which EMR does).
* Glue doesn't handle streaming except for Spark Streaming.

For an hourly rate billed by the minute, Glue crawls through data and <strong>generates crawler Python code</strong> for ETL.

Glue creates a centralized Data Catalog which it can visually create, run, and monitor ETL (extract, transform, and load) and ELT pipelines for several workloads and types.

Query cataloged data using Amazon Athena, Amazon EMR, and Amazon Redshift Spectrum.

https://medium.com/@leahtarbuck/the-small-files-problem-in-aws-glue-49f68b6886a0

Johnny Chivers:
   * <a target="_blank" href="https://www.youtube.com/watch?v=7Xstz6Qo-pM">AWS Glue ETL Vs EMR - Which one should I use?</a>


[<a href="#Flow_Glue">Return to flow diagram</a>]


## DynamoDB

https://github.com/topics/dynamodb?l=python

LAB: https://www.educative.io/cloudlabs/working-with-nosql-databases-a-beginner-s-guide-to-aws-dynamodb
Working with NoSQL Databases: A Beginner's Guide to AWS DynamoDB

https://github.com/pynamodb/PynamoDB

https://github.com/Remillardj/pyDBLoader

REMEMBER: Don't use interleaved sort keys for columns that are montonically increasing values such as date/time stamps.


It's managed via a REST API. Its SELECT operations are like SQL but not exactly.<br />
So it's for ports of apps from SQL relational databases that have joins.

Use S3 for storing blob data > 400 KB.

<a target="_blank" href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html">DAX (DynamoDB Accelerator)</a> provides a cluster of cloud-based caching nodes that receives DynamoDB traffic through a client added on EC2 servers. Frequently-referenced DynamoDB data are held in-memory within 3-10 nodes to deliver up to a 10 times performance improvement. One of the nodes serves as the primary node for the cluster. Additional nodes (if present) serve as read replicas. All this without requiring developers to manage cache invalidation, data population, or cluster management. 

   * <a target="_blank" href="https://blog.aspiresys.com/cloud/mongodb-vs-dynamodb-vs-rds-choosing-best-nosql-database/">DynamoDB vs MongoDB vs RDS: Choosing the Best NoSQL Database</a>
   <br /><br />

[<a href="#Flow_DynamoDB">Return to flow diagram</a>]



## DocumentDB

   * https://dynobase.dev/dynamodb-vs-documentdb/
   <br /><br />

[<a href="#Flow_DocumentDB">Return to flow diagram</a>]

## SageMaker

Amazon SageMaker is an AWS-managed service used to build, train, and deploy ML (Machine Learning) models. It has automatic Application Auto Scaling. Billing by the second, broken down by on-demand ML instances, ML storage, and fees for data processing in hosting instances. It has no maintenance windows or scheduled downtimes since its replication configured across three facilities in each AWS region to provide fault tolerance in the event of a server failure or Availability Zone outage.

[<a href="#Flow_SageMaker">Return to flow diagram</a>]


## QuickSight

<a target="_blank" href="https://aws.amazon.com/quicksight/features/">
<img align="right" alt="Analytics_AmazonQuickSight.png" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390284/aws-icons/Amazon-QuickSight.png"></a>

<a target="_blank" href="https://docs.aws.amazon.com/quicksight/latest/user/welcome.html">DOCS</a>
Amazon QuickSight</a> is an AWS-managed SaaS interactive visual dashboard for displaying results from BI (Business Intelligence) <strong>ad hoc queries</strong>, not canned highly-formatted reports. 

For an additional monthly cost, rather than using a direct SQL query, data can be optionally be imported into a dataset that uses SPICE (Super-fast, Parallel, In-memory Calculation Engine) allocated for use by all users within each region to rapidly perform advanced calculations and serve data. Internally, SPICE uses a combination of columnar storage in-memory.

QuickSight enables decision-makers to explore and interpret data from a variety of sources. 

QuickSight offers these types of visualization:
   * KPI values for a single metric of a single area or function (such as Net Promoter Score)
   * Distributions of a metric (not over time) such as a scatter chart
   * Relationship between two metrics (shown in a scatter chart or bubble chart of 3rd variable)
   * Composition  of a metric (shown using a pie chart or Tree Map, Stacked Area Chart)
   * Comparisons
   <br /><br />

Each visualization is for a specific database.

Data analysts share Snapshots with others after preserving the configuration of an anlysis session, with that set of filters, parameters, controls, and sort order. Each snapshot reflects the data at the time of capture. Snapshots are not dynamically regenerated.

Enterprise Edition users can embed snapshots in a website. It's not not like they can instead display a photo of the snapshot, because users can click on data points to drill down.

With QuickSight Enterprise edition, data stored in SPICE is encrypted at rest.
Enterprise edition users also get Machine Learning and extra Enterprise security features (granular permissions, federated single-sign-on, row-level security, encryption at rest, on-prem VPC.

PROTIP: <a target="_blank" href="https://docs.aws.amazon.com/quicksight/latest/user/enabling-access-redshift.html">Access from QuickSight to Redshift need to be authorized</a>.

[<a href="#Flow_QuickSight">Return to flow diagram</a>]


## AWS Batch

AWS Batch computing processes jobs without manual interaction.

https://github.com/terraform-aws-modules/terraform-aws-batch

[<a href="#Flow_Bash">Return to flow diagram</a>]

<a name="LakeFormation"></a>

## AWS Lake Formation

<a target="_blank" href="https://aws.amazon.com/lake-formation/"><img align="right" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390288/aws-icons/AWS-Lake-Formation.png"></a>

AWS Lake Formation is used to create secure <strong>data lakes</strong> that centralize fine-grained access by role in 
AWS Glue ETL Data Catalog databases and tables, using familiar database-like grants for:
   * Amazon Athena,
   * Amazon Redshift Spectrum
   * Amazon EMR for Apache Spark
   * AWS Glue ETL
   <br /><br />

while making metadata available for wide-ranging analytics and machine learning (ML).

AWS Data Exchange to create a data mesh or meet other data sharing needs with no data movement.
using services by Lake Formation include:
   * Source crawl for content
   * ETL and data prep
   * Data catalog
   <br /><br />

QUESTION: Perhaps Lake Formation ensures that <a href="#KMS">KMS (Key Management Service</a> is used appropriatel?

[<a href="#Flow_LakeFormation">Return to flow diagram</a>]


## KMS

https://github.com/terraform-aws-modules/terraform-aws-kms

[<a href="#Flow_KMS">Return to flow diagram</a>]

## Secrets Manager

AWS Secrets Manager provides key rotation, audit, and access control.

https://github.com/terraform-aws-modules/terraform-aws-secrets-manager

[<a href="#Flow_SecretsManager">Return to flow diagram</a>]


## EC2

https://github.com/terraform-aws-modules/terraform-aws-ec2-instance

[<a href="#Flow_EC2">Return to flow diagram</a>]


## Lambda

https://github.com/terraform-aws-modules/terraform-aws-lambda

[<a href="#Flow_Lambda">Return to flow diagram</a>]

## EventBridge

https://github.com/terraform-aws-modules/terraform-aws-eventbridge

[<a href="#Flow_EventBridge">Return to flow diagram</a>]


## EKS

https://github.com/terraform-aws-modules/terraform-aws-eks

[<a href="#Flow_EKS">Return to flow diagram</a>]


## DMS (Database Migration Service)

https://github.com/terraform-aws-modules/terraform-aws-dms

[<a href="#Flow_DMS">Return to flow diagram</a>]


<a name="Rekognition"></a>

## Rekognition

<a target="_blank" href="https://www.youtube.com/watch?v=FsXyfxLDDIs">Hands-on:
"Build a Facial Recognition App on AWS from Scratch | Rekognition, Lambda, DynamoDB, API Gateway, S3"


<a name="Flow_Kinesis"></a>

AWS has several offerings to make the creation and absorption of data streams easier and cheaper. <a target="_blank" href="https://aws.amazon.com/kinesis/"><img align="right" alt="Analytics_AmazonKenesis.png" width="50" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1692390284/aws-icons/Amazon-Kinesis.png"><img align="right" alt="classic png" width="50" src="https://github.com/burib/aws-simple-icons-for-architecture-diagrams/blob/master/Analytics/Analytics_AmazonKinesis.png?raw=true">Amazon Kinesis</a> is a family of services that make it easy to collect, process, and analyze real-time, streaming data to get timely insights and react quickly to new information.
   
Data API and Streams do not require a VPC to be setup to accept SQL commands. Integrates with EventBridge. Max 24 hr duration, 100 KB query size, 100 MB query result size. Auth using AWS Secretes Manager. <a target="_blank" href="https://aws.amazon.com/kinesis/data-analytics/faqs/">FAQs</a>. Commands: describe-statement, execute-statement, get-statement-result.  troubleshooting and scenario-based questions, like how would you solve a ProvisionedThroughPutExceeded error, when should you merge or split shard, what encryption options are available, and how the Kinesis service integrates with other services.

https://medium.com/surfline-labs/intelligent-surf-cameras-fce6e7e3d03e
describes an AI-powered surf camera at https://www.surfline.com/. 
It uses Amazon Kinesis Video Streams, Amazon Rekognition, and Amazon SageMaker to detect surfers and provide them with real-time surfing conditions and information.



<hr />

<a name="certs"></a>

## AWS Data Engineering certifications

Among <a target="_blank" href="https://aws.amazon.com/certification/exams/?nc2=sb_ce_exm">12 certifications</a> are 2 for data:

* <a href="#DataCert">AWS Certified Database - Specialty</a>
* <a href="#AnalyticsCert">AWS Certified Data Analytics - Specialty</a>
<br /><br />


<a name="DataCert"></a>

## AWS Certified Database - Specialty

<a target="_blank" href="https://d1.awsstatic.com/training-and-certification/docs-database-specialty/AWS-Certified-Database-Specialty_Exam-Guide.pdf">PDF (DBS-C01)</a>: <a target="_blank" href="https://aws.amazon.com/certification/certified-database-specialty/">$300 to answer 75%+ of 65 questions in 180-minute<br />AWS Certified Database - Specialty</a> in these domains:

### 1. Workload-Specific Database Design 26%

   1.1 Select appropriate database services for specific types of data and workloads.<br />

   - Differentiate between ACID vs. BASE workloads<br />
   - Explain appropriate uses of types of databases (e.g., relational, key-value, document, in-memory, graph, time series, ledger)<br />
   - Identify use cases for persisted data vs. ephemeral data<br />

   1.2 Determine strategies for disaster recovery and high availability.<br />

   - Select Region and Availability Zone placement to optimize database performance<br />
   - Determine implications of Regions and Availability Zones on disaster recovery/high availability strategies<br />
   - Differentiate use cases for read replicas and Multi-AZ deployments<br />

   1.3 Design database solutions for performance, compliance, and scalability.<br />

   - Recommend serverless vs. instance-based database architecture<br />
   - Evaluate requirements for scaling read replicas<br />
   - Define database caching solutions<br />
   - Evaluate the implications of partitioning, sharding, and indexing<br />
   - Determine appropriate instance types and storage options<br />
   - Determine auto-scaling capabilities for relational and NoSQL databases<br />
   - Determine the implications of Amazon DynamoDB adaptive capacity<br />
   - Determine data locality based on compliance requirements<br />

   1.4 Compare the costs of database solutions.<br />

   - Determine cost implications of Amazon DynamoDB capacity units, including on-demand vs. provisioned capacity<br />
   - Determine costs associated with instance types and automatic scaling<br />
   - Design for costs including high availability, backups, multi-Region, Multi-AZ, and storage type options<br />
   - Compare data access costs<br />

### 2. Deployment and Migration 20%<br />

   2.1 Automate database solution deployments.<br />

   - Evaluate application requirements to determine components to deploy<br />
   - Choose appropriate deployment tools and services (e.g., AWS CloudFormation, AWS CLI)<br />

   2.2 Determine data preparation and migration strategies.<br />

   - Determine the data migration method (e.g., snapshots, replication, restore)<br />
   - Evaluate database migration tools and services (e.g., AWS DMS, native database tools)<br />
   - Prepare data sources and targets<br />
   - Determine schema conversion methods (e.g., AWS Schema Conversion Tool)<br />
   - Determine heterogeneous vs. homogeneous migration strategies<br />

   2.3 Execute and validate data migration.<br />
   - Design and script data migration<br />
   - Run data extraction and migration scripts<br />
   - Verify the successful load of data<br />

### 3. Management and Operations 18%<br />

   3.1 Determine maintenance tasks and processes.<br />
   - Account for the AWS shared responsibility model for database services<br />
   - Determine appropriate maintenance window strategies<br />
   - Differentiate between major and minor engine upgrades<br />
   
   3.2 Determine backup and restore strategies.<br />
   - Identify the need for automatic and manual backups/snapshots<br />
   - Differentiate backup and restore strategies (e.g., full backup, point-in-time, encrypting backups cross-Region)
   - Define retention policies<br />
   - Correlate the backup and restore to recovery point objective (RPO) and recovery time objective (RTO) requirements<br />

   3.3 Manage the operational environment of a database solution.<br />

   - Orchestrate the refresh of lower environments<br />
   - Implement configuration changes (e.g., in Amazon RDS option/parameter groups or Amazon DynamoDB indexing changes)<br />
   - Automate operational tasks<br />
   - Take action based on AWS Trusted Advisor reports<br />

### 4. Monitoring and Troubleshooting 18%<br />

   4.1 Determine monitoring and alerting strategies.<br />
   - Evaluate monitoring tools (e.g., Amazon CloudWatch, Amazon RDS Performance Insights, database native)<br />
   - Determine appropriate parameters and thresholds for alert conditions<br />
   - Use tools to notify users when thresholds are breached (e.g., Amazon SNS, Amazon SQS, Amazon CloudWatch dashboards)<br />

   4.2 Troubleshoot and resolve common database issues.<br />
   - Identify, evaluate, and respond to categories of failures (e.g., troubleshoot connectivity; instance, storage, and partitioning issues)<br />
   - Automate responses when possible<br />

   4.3 Optimize database performance.<br />
   - Troubleshoot database performance issues<br />
   - Identify appropriate AWS tools and services for database optimization<br />
   - Evaluate the configuration, schema design, queries, and infrastructure to improve performance<br />

### 5. Database Security 18%<br />

   5.1 Encrypt data at rest and in transit<br />
   - Encrypt data in relational and NoSQL databases<br />
   - Apply SSL connectivity to databases<br />
   - Implement key management (e.g., AWS KMS, AWS CloudHSM)<br />

   5.2 Evaluate auditing solutions<br />
   - Determine auditing strategies for structural/schema changes (e.g., DDL)<br />
   - Determine auditing strategies for data changes (e.g., DML)<br />
   - Determine auditing strategies for data access (e.g., queries)<br />
   - Determine auditing strategies for infrastructure changes (e.g., AWS CloudTrail)<br />
   - Enable the export of database logs to Amazon CloudWatch Logs<br />

   5.3 Determine access control and authentication mechanisms<br />
   - Recommend authentication controls for users and roles (e.g., IAM, native credentials, Active Directory)<br />
   - Recommend authorization controls for users (e.g., policies)<br />

   5.4 Recognize potential security vulnerabilities within database solutions<br />
   - Determine security group rules and NACLs for database access<br />
   - Identify relevant VPC configurations (e.g., VPC endpoints, public vs. private subnets, demilitarized zone)<br />
   - Determine appropriate storage methods for sensitive data<br />
<br /><br />


<hr />

<a name="AnalyticsCert"></a>

## AWS Certified Data Analytics - Specialty

<a target="_blank" href="https://d1.awsstatic.com/training-and-certification/docs-data-analytics-specialty/AWS-Certified-Data-Analytics-Specialty_Exam-Guide.pdf">PDF (DAS-C01)</a>: <a target="_blank" href="https://aws.amazon.com/certification/certified-data-analytics-specialty/">$300, 75%+ of 65 questions in <strong>180 minute</strong> <br />AWS Certified Data Analytics - Specialty</a>

   * https://docs.aws.amazon.com/whitepapers/latest/big-data-analytics-options/welcome.html
   * https://d1.awsstatic.com/whitepapers/Migration/migrating-applications-to-aws.pdf
   * https://towardsdatascience.com/becoming-an-aws-certified-data-analytics-new-april-2020-4a3ef0d9f23a
   * https://portal.tutorialsdojo.com/courses/aws-certified-data-analytics-specialty-practice-exams/


### Tips

https://medium.com/@athlatif/how-to-prepare-for-aws-certified-data-analytics-specialty-exam-das-c01-ebbfdd237e5e

* avoid using EMR when the question asks for “cost-effective” and “easy to manage” solutions.
* Quicksight can’t visualize data in real-time or near real-time, use OpenSearch and Kibana to achieve this.
* Kinesis data streams can’t write to S3 or Redshift directly, use Kinesis firehouse instead.
* Copy command is used to copy data to Redshift, Unload command is used to copy data from Redshift.
* Athena can’t query S3 Glacier you need to use Glacier select.
* The recommended file format is always ORC or parquet.


### 1. Collection 18%<br />

   1.1 Determine the operational characteristics of the collection system<br />
   - Evaluate that the data loss is within tolerance limits in the event of failures<br />
   - Evaluate costs associated with data acquisition, transfer, and provisioning from various sources into the collection system (e.g., networking, bandwidth, ETL/data migration costs)<br />
   - Assess the failure scenarios that the collection system may undergo, and take remediation actions based on impact<br />
   - Determine data persistence at various points of data capture<br />
   - Identify the latency characteristics of the collection system<br />

   1.2 Select a collection system that handles the frequency, volume, and source of data<br />
   - Describe and characterize the volume and flow characteristics of incoming data (streaming, transactional, batch)<br />
   - Match flow characteristics of data to potential solutions<br />
   - Assess the tradeoffs between various ingestion services taking into account scalability, cost, fault tolerance, latency, etc. https://www.youtube.com/watch?v=8jPB3PLI7bA<br />
   - Explain the throughput capability of a variety of different types of data collection and identify bottlenecks<br />
   - Choose a collection solution that satisfies connectivity constraints of the source data system<br />

   1.3 Select a collection system that addresses the key properties of data, such as order, format, and compression<br />

   - Describe how to capture data changes at the source<br />
   - Discuss data structure and format, compression applied, and encryption requirements<br />
   - Distinguish the impact of out-of-order delivery of data, duplicate delivery of data, and the tradeoffs between at-most-once, exactly-once, and at-least-once processing<br />
   - Describe how to transform and filter data during the collection process<br />

### 2. Storage and Data Management 22%<br />

   2.1 Determine the operational characteristics of the storage solution for analytics<br />
   - Determine the appropriate storage service(s) on the basis of cost vs. performance<br />
   - Understand the durability, reliability, and latency characteristics of the storage solution based on requirements<br />
   - Determine the requirements of a system for strong vs. eventual consistency of the storage system<br />
   - Determine the appropriate storage solution to address data freshness requirements<br />

   2.2 Determine data access and retrieval patterns<br />
   - Determine the appropriate storage solution based on update patterns (e.g., bulk, transactional, micro batching)<br />
   - Determine the appropriate storage solution based on access patterns (e.g., sequential vs. random access, continuous usage vs.ad hoc)<br />
   - Determine the appropriate storage solution to address change characteristics of data (append-only changes vs. updates)<br />
   - Determine the appropriate storage solution for long-term storage vs. transient storage<br />
   - Determine the appropriate storage solution for structured vs. semi-structured data<br />
   - Determine the appropriate storage solution to address query latency requirements<br />

   2.3 Select appropriate data layout, schema, structure, and format<br />
   - Determine appropriate mechanisms to address schema evolution requirements<br />
   - Select the storage format for the task<br />
   - Select the compression/encoding strategies for the chosen storage format<br />
   - Select the data sorting and distribution strategies and the storage layout for efficient data access<br />
   - Explain the cost and performance implications of different data distributions, layouts, and formats (e.g., size and number of files)<br />
   - Implement data formatting and partitioning schemes for data-optimized analysis<br />

   2.4 Define data lifecycle based on usage patterns and business requirements<br />
   - Determine the strategy to address data lifecycle requirements<br />
   - Apply the lifecycle and data retention policies to different storage solutions<br />

   2.5 Determine the appropriate system for cataloging data and managing metadata<br />
   - Evaluate mechanisms for discovery of new and updated data sources<br />
   - Evaluate mechanisms for creating and updating data catalogs and metadata<br />
   - Explain mechanisms for searching and retrieving data catalogs and metadata<br />
   - Explain mechanisms for tagging and classifying data <br />

### 3. Processing 24%<br />

   3.1 Determine appropriate data processing solution requirements<br />
   - Understand data preparation and usage requirements<br />
   - Understand different types of data sources and targets<br />
   - Evaluate performance and orchestration needs<br />
   - Evaluate appropriate services for cost, scalability, and availability<br />

   3.2 Design a solution for transforming and preparing data for analysis<br />
   - Apply appropriate ETL/ELT techniques for batch and real-time workloads<br />
   - Implement failover, scaling, and replication mechanisms<br />
   - Implement techniques to address concurrency needs<br />
   - Implement techniques to improve cost-optimization efficiencies<br />
   - Apply orchestration workflows<br />
   - Aggregate and enrich data for downstream consumption<br />

   3.3 Automate and operationalize data processing solutions<br />

   - Implement automated techniques for repeatable workflows<br />
   - Apply methods to identify and recover from processing failures<br />
   - Deploy logging and monitoring solutions to enable auditing and traceability<br />

### 4. Analysis and Visualization 18%<br />

   4.1 Determine the operational characteristics of the analysis and visualization solution<br />
   - Determine costs associated with analysis and visualization<br />
   - Determine scalability associated with analysis<br />
   - Determine failover recovery and fault tolerance within the RPO/RTO<br />
   - Determine the availability characteristics of an analysis tool<br />
   - Evaluate dynamic, interactive, and static presentations of data<br />
   - Translate performance requirements to an appropriate visualization approach (pre-compute and consume static data vs. consume dynamic data) <br />

   4.2 Select the appropriate data analysis solution for a given scenario<br />
   
   - Evaluate and compare analysis solutions<br />
   - Select the right type of analysis based on the customer use case (streaming, interactive, collaborative, operational)<br />

   4.3 Select the appropriate data visualization solution for a given scenario<br />
   - Evaluate output capabilities for a given analysis solution (metrics, KPIs, tabular, API)<br />
   - Choose the appropriate method for data delivery (e.g., web, mobile, email, collaborative notebooks)<br />
   - Choose and define the appropriate data refresh schedule<br />
   - Choose appropriate tools for different data freshness requirements (e.g., Amazon Elasticsearch Service vs. Amazon QuickSight vs. Amazon EMR notebooks)<br />
   - Understand the capabilities of visualization tools for interactive use cases (e.g., drill down, drill through and pivot)<br />
   - Implement the appropriate data access mechanism (e.g., in memory vs. direct access)<br />
   - Implement an integrated solution from multiple heterogeneous data sources<br />

### 5. Security 18%

   5.1 Select appropriate authentication and authorization mechanisms<br />
   - Implement appropriate authentication methods (e.g., federated access, SSO, IAM)<br />
   - Implement appropriate authorization methods (e.g., policies, ACL, table/column level permissions)<br />
   - Implement appropriate access control mechanisms (e.g., security groups, role-based control)<br />

   5.2 Apply data protection and encryption techniques<br />

   - Determine data encryption and masking needs<br />
   - Apply different encryption approaches (server-side encryption, client-side encryption, AWS KMS, AWS CloudHSM)<br />
   - Implement at-rest and in-transit encryption mechanisms<br />
   - Implement data obfuscation and masking techniques<br />
   - Apply basic principles of key rotation and secrets management<br />

   5.3 Apply data governance and compliance controls<br />
   - Determine data governance and compliance requirements<br />
   - Understand and configure access and audit logging across data analytics services<br />
   - Implement appropriate controls to meet compliance requirements<br />

<a target="_blank" href="https://www.pluralsight.com/paths/aws-certified-data-analytics-specialty">
6 courses on Pluralsight</a> (by different authors):

1. Collecting Data on AWS by Fernando Medina Corey 2h 18m

2. Storing Data on AWS by Fernando Medina Corey 2h 51m

3. Processing Data on AWS by Dan Tofan 1h 57m

4. Analyzing Data on AWS by Clarke Bishop 2h 12m

5. Visualizing Data on AWS by Mohammed Osman 34m 

6. Securing Data Analytics Pipelines on AWS by Saravanan Dhandapani 1h 9m

Labs:

   * <a targe="_blank" href="https://app.pluralsight.com/labs/detail/865661e0-a7d8-4167-8750-397e7d96696d">Calculate Read/Write Capacity Requirements For Using DynamoDB</a>

   * <a target="_blank" href="https://app.pluralsight.com/labs/detail/865661e0-a7d8-4167-8750-397e7d96696d">Access and Enforce Data Compliance Using AWS Config</a>


## Classses

   * https://www.linkedin.com/learning/paths/prepare-for-the-aws-certified-data-analytics-specialty-das-c01-certification 3h 41m by the prolific Noah Gift!
   <br /><br />

   * <a target="_blank" href="https://www.coursera.org/specializations/exam-prep-das-c01-aws-certified-data-analytics-specialty">Coursera 5 course by Whizlabs</a> 5-7 hours each. No instructor name.

   * https://aws.amazon.com/blogs/big-data/how-to-delete-user-data-in-an-aws-data-lake/

<hr />

## References

https://www.wikiwand.com/en/Timeline_of_Amazon_Web_Services

https://www.youtube.com/watch?v=tykcCf-Zz1M
Top AWS Services A Data Engineer Should Know

   * <a target="_blank" href="https://www.youtube.com/watch?v=VtzvF17ysbc">What is Data Pipeline</a>
    * https://www.youtube.com/watch?v=7Xstz6Qo-pM Glue vs EMR

Coursera courses:

1. Data Collection Systems

2. Storage Systems and Data Management

3. Data Processing

4. Security in Data Analytics


## Hands-on labs

https://registry.terraform.io/namespaces/terraform-aws-modules

https://www.educative.io/cloudlabs

https://www.montclair.edu/newscenter/2022/10/31/study-finds-hate-speech-on-twitter-increased-following-elon-musk-takeover/

## More on Amazon #

This is one of a series about Amazon:

{% include aws_links.html %}

