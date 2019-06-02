---
layout: post
title: "Serverless computing"
excerpt: "Invisible ubiquitious server clouds across the land"
tags: [node, serverless]
image:
# feature: pic orange wm_mcnaughton_sunset_runner_1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622121/097d7550-0585-11e6-9543-27d45c2487c2.jpg
  credit: William McNaughton
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This describes the ecosystem around the "Serverless" computing concept to build applications as a collection of <strong>microservices</strong> that run in response to <strong>events</strong>, auto-scaled in a cloud.

This article is a pre-requisite to <a target="_blank" href="https://wilsonmar.github.io/aws-lambda-serverless/">my tutorial on creating a new Amazon Lambda serverless app running in the Amazon cloud</a>.

A sentiment about physical servers is reflected in the wi-fi password used by
attendees of <a target="_blank" href="https://twitter.com/search?q=ServelessConf">#ServelessConf</a>:<br />
![serverless hateservers-452x183-70kb](https://cloud.githubusercontent.com/assets/300046/18171991/196045ae-7021-11e6-9848-ce272fa8366d.jpg)


## Serverless = FaaS

"Serverless" refer to an <strong>architectural style</strong> called
<strong>FaaS</strong> (Function as a Service) where software program 
code are independently deployed and run on a cloud system for
"zero system administration" by the developer.

This is also called an "event-driven system".

For those who want to run a lean shop, 
it's a fast, easy, low-cost route to get apps in production without worry about scalability.
Unlike renting a machine (as in EC2) which accrue charges even when idle, charges for Serverless functions accrue only when individual requests are invoked.

The developer simply uploads the source code, 
then leave it to the cloud provider to take care of 
security, monitoring, disk space management, log management, 
scaling, redundancy, backup, crash reporting, etc..

Mike Roberts at <a target="_blank" href="http://martinfowler.com/articles/serverless.html">
   http://martinfowler.com/articles/serverless.html</a>
wrote "Depending on the circumstances, such systems can significantly reduce operational cost and complexity at a cost of <strong>vendor dependencies</strong> and (at the moment) immaturity of supporting services."

PROTIP: It's still up to developers to do testing and 
performance measuring and tuning.
Use of multi-tenancy makes for response-time variation.
So do sythentic transactions outside the cloud vendor to monitor user experience,
and to keep your app in cache to avoid process start-up after sleeping.

"Serverless is on the relentless historical trend toward industrialization" -- @simonwardley

## FaaS Providers - Pricing

Free tiers bring down costs, as shown by <a target="_blank" href="https://www.manning.com/books/serverless-architectures-on-aws-second-edition">Peter Sbarski</a>'s <a target="_blank" href="http://serverlesscalc.com/">Serverless Calculator at serverlesscalc.com<br />
<img alt="serverless-costcomp-648x490-13259" width="648" height="490" src="https://user-images.githubusercontent.com/300046/57808958-cdaffe00-7721-11e9-8ffa-a3c66c5942a4.jpg"></a>

* <a href="#AWS">AWS (Amazon Web Services) Lambda</a> Nov 2014  supports NodeJs, Python, any run-time
* <a href="#Azure">Microsoft Azure Functions</a> 2016 supports NodeJs, Java, C#, F#, Python
* <a href="#Google">Google Cloud Functions</a> 2018 supports NodeJs, Python
* <a href="#IBM">IBM Bluemix OpenWhisk Functions</a> 2018

* <a target="_blank" href="https://www.alibabacloud.com/product/function-compute/">Alibaba Function Compute</a>'s <a target="_blank" href="http://g.alicdn.com/aliyun-next/fc/1.1.69/price_intl.html?spm=a2c63.p38356.879954.4.2d877bb1xc2iIM">calculator</a> returned a <a target="_blank" href="https://www.alibabacloud.com/help/doc-detail/54301.htm?spm=a3c0i.intl-en-product-fc.0.0.298f2b59e2tKZC">price</a> of $330.05. 
Its <a target="_blank" href="https://www.alibabacloud.com/help/doc-detail/74712.htm?spm=a2c63.p38356.a3.13.3769451eduLkke">language support</a> expanded from NodeJs and Python to Java, PHP, C# (the most among FaaS vendors).

Google App Engine in 2008 was arguably the first.

* CloudFlare

* <a target="_blank" href="https://pivotal.io/platform/pivotal-function-service">Pivotal Cloud Functions</a> built on <a target="_blank" href="https://pivotal.io/knative">Knative</a>, part of the <a target="_blank" href="https://projectriff.io/">project Riff</a> open-source project led by Google for deployment atop Kubernetes and Istio.
defining the <a target="_blank" href="https://docs.pivotal.io/pfs/0-1/using-pfs-cli.html">pfs command line interface</a>
* <a target="_blank" href="https://projectriff.io/">Pivotal's Project Riff</a> based on KNative.

* <a target="_blank" href="https://fnproject.io/">Oracle's Fn Project</a>
* <a href="#IronIO">Iron.io for on-premises</a>. Ironically, Iron originated the term "serverless" in 2012.


<a name="Concerns"></a>

## Concerns (the Downsides)

### Database idle costs money! #

   "You never pay for idle" Austen says 
   in an interview with by CloudAcademy <a target="_blank" href="https://www.youtube.com/watch?v=pvmx0IVfBLc">
   Introduction to the Serverless Paradigm</a> [23:50]

   WRONG! While Lambda does not incur charges while idle,
   DynamoDB,, which Amazon touts as the default database, do incur charges for <strong>data stored</strong> (even though no data is read or written to it).

   PROTIP: On AWS use <strong>SimpleDB instead of DynamoDB</strong> for true no-cost idle.

### Control

PROTIP: The other side of freedom from server hassles is that developers also give away <strong>control</strong>.

Having one's data in another company's cloud requires trust in that company's
ability to keep data secure, redundant, and pricing fair.

PROTIP: Going with a particular vendor's API means that you need to keep up
with changes in APIs that can occur frequently,
even though they may not apply to your own operation.

There is the danger of vendor lock-in.

But frameworks have emerged to allieviate that:


## Serverless usage in the wild

When a $9 million monolithic app built for the Australian Census failed, two students over two-weeks created a scalable system using $500 of compute time (including load testing).

<a target="_blank" href="https://compellingScienceFiction.com/">
Compelling Science Fiction.com</a>
uses Simple Email to read emails and sends it to S3.
Lambda emails notifications. Stories are saved in DynamoDB.
Python pulls data.

<a target="_blank" href="https://eruchibas,com/pywren.html">
Eric Jonas</a>
does hyperperameter sweeps, Monte Carlo simulations.
Spark requires dedicated servers and is not very elastic.
map of map reduce.

<a target="_blank" href="https://tothestars.io/blog/2016/11/12/serverless-mapreduce">
His Simultaneous "Big Lambda" talk</a>

<a target="_blank" href="http://www.emitconference.com/">http://www.emitconference.com</a>
Emit Conference for "event-driven architectures" August 17th, 2017 in San Francisco
has people who've done it:

   * Rob Gruhl Senior Manager of Serverless Platform Team at Nordstrom
   * Bobby Calderwood Technology Fellow at Capital One
   * Madhuri Yechuri Founder of Elotl
   * Dave Copeland Director of Engineering at Stitch Fix
   * Shawn Burke Staff Software Engineer at Uber

   * Ajay Nair Head of Product (AWS Lambda) at Amazon Web Services
   * Jason Polites Product Manager for Google Cloud Functions
   * Chris Anderson Senior Program Manager for Azure Functions
   * Cornelia Davis Senior Director of Technology at Pivotal Software

   * Anne Thomas VP & Distinguished Analyst at Gartner, Inc.
   * Matthew Lancaster Global Lead, Lightweight Architectures at Accenture

<a target="_blank" href="https://stackshare.io/posts/evolution-of-new-york-times-tech-stack#serverless-future">
An audio Q&A with The CTO of New York Times</a>, Nick Rockwell, who migrated the paper to
using React and GraphQL Apollo that reads off of a Kafka pipeline on Google Cloud and Big Query.


## Services

* <a href="https://www.quora.com/What-is-serverless-computing">An Awesome list of links at Quora</a>

<table border="1" cellpadding="4" cellspacing="0"><thead><tr valign="bottom">
<th>Functionality</th><th>Type</th><th>AWS service</th><th>3rd-party</th></tr>
</thead><tbody>
<tr valign="top"><td>Compute</td><td>Functions</td><td>AWS Lambda</td><td>Iron.io</td></tr>
<tr valign="top"><td rowspan="2">Security</td><td>Authentication</td><td>IAM, Cognito federation</td><td>Auth0, AuthRocket, Okta</td></tr>
   <tr valign="top"><td>Logging, Monitoring, Anomaly Analytics</td><td>CloudWatch, CloudTrail, X-Ray tracing</td><td>Honeycomb, Datadog</td></tr>
<tr valign="top"><td>Analytics</td><td>Visualization</td><td>QuickSight</td><td>-</td></tr>

<tr valign="top"><td rowspan="2">Streaming</td><td>streams</td><td>Kinesis</td><td>-</td></tr>
   <tr valign="top"><td>Messages</td><td>SQS, SNS</td><td>Twilio</td></tr>

<tr valign="top"><td rowspan="7">Persistence</td><td>Files</td><td>S3</td><td>-</td></tr>
   <tr valign="top"><td>Time Series</td><td><a target="_blank" href="https://aws.amazon.com/about-aws/whats-new/2018/11/announcing-amazon-timestream/">Timestream</a></td><td>InfluxDB, etc.</td></tr>
   <tr valign="top"><td>NoSQL</td><td>DynamoDB</td><td>Redis</td></tr>
   <tr valign="top"><td>SQL</td><td><a target="_blank" href="https://aws.amazon.com/rds/aurora/">Aurora</a></td><td>MySQL, PostgeSQL</td></tr>
   <tr valign="top"><td>Data warehouse</td><td><a target="_blank" href="https://aws.amazon.com/blogs/big-data/amazon-redshift-spectrum-extends-data-warehousing-out-to-exabytes-no-loading-required/">Redshift columnar Spectrum</a> from S3</td><td>Hadoop, Spark</td></tr>
   <tr valign="top"><td>Search</td><td><a target="_blank" href="https://aws.amazon.com/cloudsearch/">CloudSearch</a></td><td>ElasticSearch</td></tr>
   <tr valign="top"><td>Blockchain</td><td>QuantumLedger</td><td>-</td></tr>

<tr valign="top"><td>Query/Transform</td><td>ETL, SQL</td><td>Glue, Athena, EMR</td><td>-</td></tr>
<tr valign="top"><td>Machine Learning</td><td>-</td><td>SageMaker</td><td>Tensorflow</td></tr>
<tr valign="top"><td>Image recognition</td><td>-</td><td>Rekognition</td><td>Algorithmia, Quandl</td></tr>
<tr valign="top"><td>Payment</td><td>-</td><td>-</td><td>Stripe, Paypal</td></tr>
<tr valign="top"><td>Geocoding</td><td>-</td><td>-</td><td>HERE, Loqate</td></tr>
</tbody></table>



<a name="Architecture"></a>

## Best Practices

Functions need to be Stateless (not long-running tasks)

Functions that access resources (such as PaaS databases) should be in a private cloud, which AWS calls VPC (Virtual Private Cloud).

Functions that access resources over the public internet should run the function in a subnet with a NAT'd route to the internet.

NodeJs start up faster than Java.

There are 3 execution models:

   1. Synchronous (push event-driven pipelines) via API Gateway
   2. Asynchronous (event requests) via SNS, S3 
   3. Stream-based changes via DynamoDB (NoSQL) to Kinesis 

CloudWatch warming triggers every 5 minutes to keep code in memory to reduce warm-up time.
This is to avoid Freeze/thaw errors.

* Limit data transformations to one per Lambda function.
* Upgrade to latest NodeJs regularly


* Console
* Function Code
* Execution Roles
* Test Events
* Execution Results
* Monitoring analytics


<hr />

<a name="AWS"></a>

### AWS Lambda

Internally, AWS Lambda functions are run using the AWS Firecracker open-source software managing lightweight VMs, to reduce startup time and memory overhead.

<a target="_blank" href="https://docs.aws.amazon.com/lex/latest/dg/gs-bp.html">AWS Lex bot Lambda Blueprint</a> provides a pre-configured patterns for building conversational interfaces : OrderFlowers, ScheduleAppointment (in Python), BookTrip (in NodeJs).

Reusable <strong>Layers</strong> in libraries (like Docker) reduce dependency size.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/57837539-3ded6c80-7780-11e9-989c-f81d11b96c2f.jpg"><img alt="serverless-layers-965x569.jpg" width="965" src="https://user-images.githubusercontent.com/300046/57837539-3ded6c80-7780-11e9-989c-f81d11b96c2f.jpg"></a>

Step functions build visual workflows using State Types in state stores.

Search/browse generic pre-defined apps from the AWS Serverless Application Repository (SAR). Configure one and deploy it.

#### SAM

Although people say Terraform templates are more flexible ...

The AWS Serverless Application Model (SAM) at
<a target="_blank" href="https://github.com/awslabs/serverless-application-model">
https://github.com/awslabs/serverless-application-model</a>
was announced Nov 2016
to define the building blocks of <strong>Cloud Formation templates</strong> that access Amazon API Gateway APIs, AWS Lambda functions, and Amazon DynamoDB tables needed by serverless applications. 


#### Templates

Two AWS evangelists created <a target="_blank" href="https://github.com/aws-samples/aws-developer-workshop/blob/master/INSTRUCTIONS.md">pre-built templates</a> 
with manual instructions, which they walked though in <a target="_blank" href="https://www.twitch.tv/events/PgC70I4pQoy14TP-RNS6Dw">30 minutes on Twitch.tv</a>:

1. [Get an AWS IAM User](/aws-iam/) with AWSCodeStarFullAccess.

   CAUTION: <a target="_blank" href="https://livebook.manning.com/#!/book/serverless-architectures-on-aws-second-edition/b-installation-and-setup/v-2/29">Installation steps in Peter Sbarski's book</a> suggests providing "Administrator access to all services and resources.

2. Login the AWS Console to select region N. Virginia.
3. In <a target="_blank" href="https://aws.amazon.com/codestar/">AWS CodeStar</a>. Start a project. Node.js. create role.
4. Choose a project template: 
   * Under Application Category select <strong>Web Application</strong>.
   * Under Programming Languages select <strong>Node.js</strong>.
   * Pick "Node.JS Web Application AWS Lambda (running serverless)".

More examples are at <a target="_blank" href="https://github.com/serverless/examples">https://github.com/serverless/examples</a>

   <a target="_blank" title="serverless-aws-flow-1024x656-99647.jpg" href="https://user-images.githubusercontent.com/300046/43052898-c64ded4a-8de6-11e8-9578-30b8dd619592.jpg"><img alt="serverless-aws-flow-648x416-52875.jpg" width="648" src="https://user-images.githubusercontent.com/300046/43052876-a465b17c-8de6-11e8-8303-ab83ae852eb1.jpg"></a>

   - Route 53 : a highly available & scalable DNS service which also manages traffic flow based on different routeing types e.g., Latency Based Routing, Geo DNS, and Weighted Round Robin as well as DNS failover.

   - CloudFront CDN: Content Distribution Network.

   - S3 : a static file storage which can store petabytes of storage if you want, with 99.999999% durability.

   - API Gateway : a REST-based service which allows you to create, publish, monitor and quickly scale & secure API services.

   - Lambda : to hold and process server side code, with no charges for server time between client requests.

   - MongoDB instead of DyanmoDB : a scalable database which guarantees the same consistent speed of read and write requests.

   - SES (Simple Email Service) : Mass emailing service, like MailChimp.

PROTIP: The future of FaaS vendors isn't the front-end but the back-end services
that include API Gateways and Artificial Intelligence features such as image recognition,
text sentiment analysis, natural language process (NLP), 
and Machine Learning.

PROTIP: The payoff for housing the back-end in a public cloud is for machine learning and AI services to be added.
For example: https://github.com/aws-samples/aws-serverless-ember

![serverless-aws-ember-648x379-36238](https://user-images.githubusercontent.com/300046/43361471-71543916-928c-11e8-8f48-aecc805bae15.jpg)


<a name="Azure"></a>

### Azure Functions

Marketing information is at
<a href="https://azure.microsoft.com/services/functions/" target="_blank">
https://azure.microsoft.com/services/functions</a>

1. Create an Azure Storage account.
0. Search for "Function App" in the Azure Marketplace.
0. Click Create.
0. Provide an app name that's globally unique among all others public.

   .azurewebsites.net

0. Create or use a <strong>Resource Group</strong> to manage your similar functions as a group.
0. Select a Location closest to you.

   PROTIP: Include the location as a suffix in your app name.

0. Selection of Memory Allocation can be adjusted once you figure out how much after running
   a few times.
0. Create.
0. Click Refresh or the "bell" icon to see messages related.

0. After deployment, click the Resource Group, then the app name.
0. Click "Webhood + API" and JavaScript language (or C#).
0. Copy the Function URL and paste it in a browser.
0. Click Logs to see the history tracking.
0. Add a Parameter.


<a name="IBM"></a>

### IBM Bluemix OpenWhisk

<a target="_blank" href="https://developer.ibm.com/openwhisk/">
https://developer.ibm.com/openwhisk</a>

The advantage of IBM's hybrid-cloud approach is that one can use 
IBM's proprietary Bluemix UI
and then use command-line with OpenWhisk (which is open sourced).

![ibm-openwhisk-arch-720x168](https://cloud.githubusercontent.com/assets/300046/25739620/aa1efd38-3150-11e7-8f7f-9438274e48e4.png)


<a name="Google"></a>

### Google Cloud Functions #

<a target="_blank" href="https://cloud.google.com/functions/">
https://cloud.google.com/functions</a>

@googlecloud

Google Firebase


<a name="IronIO"></a>

### Iron.io and other on-premises

<a target="_blank" href="https://iron.io/">Iron.io</a>
has their Gesalt Framework



<a name="LocalTesting"></a>

## Local Runs for testing #

For a "test-first" approach to achieve code maturity,
doing test runs locally before committing to a team branch is important.

Let's examine the choices to emulate AWS Lambda locally:

* <a target="_blank" href="https://www.npmjs.com/package/local-node-lambda">
   local-node-lambda</a>

* <a target="_blank" href="https://github.com/ashiina/lambda-local">
   ashiina/lambda-local</a>

0. Install the "Command line tool for <strong>locally running</strong>
   and remotely deploying your node.js applications to Amazon Lambda."
   from <a target="_blank" href="https://github.com/motdotla/node-lambda">
   github.com/motdotla/node-lambda</a>

   <tt><strong>
   npm install -g <a target="_blank" href="https://www.npmjs.com/package/node-lambda">
   node-lambda</a>
   </strong></tt>

0. Describe tests in a JSON file.



## Serverless Coding Frameworks

* Shep (bustle.com)
* <a href="#ClaudiaJs">ClaudiaJs</a>
* <a href="#Apex">Apex</a> provides a shim to support Go and languages not yet supported by Lambda,
* Sparta for AWS Lambda, as a Golang app, is baked into deliverable binary
(unlike Node).

   * https://gospart.io
   * https://github.com/mweagle/Sparta

* Gordon is written in Python

* Zappa is written in Python for Flask apps running only on AWS Lambda
* <a target="_blank" href="https://stackshare.io/cloud-functions-for-firebase">Google Cloud Functions for Firebase</a>
* The Serverless Framework

<a name="Apex"></a>

### Apex

http://apex.run/

<a target="_blank" href="https://github.com/apex/apex">Open sourced on GitHub/apex/apex</a> 

See https://github.com/apex/apex/blob/master/docs/infra.md

Currently the following variables are exposed to Terraform:

* aws_region the AWS region name such as "us-west-2"
* apex_environment the environment name such as "prod" or "stage"
* apex_function_role the Lambda role ARN
* apex_function_arns A map of all lambda functions
* apex_function_names A map of all the names of the lambda functions


<a name="ClaudiaJa"></a>

### ClaudiaJs

https://www.manning.com/books/serverless-applications-with-nodejs
Serverless Applications with Node.js  
Using AWS Lambda and Claudia.js
by Slobodan Stojanović and Aleksandar Simović


<a name="ServerlessFramework"></a>

### Serverless the company

The name "serverless" has been co-opted by enprepreneur Austen Collins
<a target="_blank" href="https://twitter.com/austencollins">
@austencollins</a>
who built the
<a target="_blank" href="https://serverless.com/">
Serverless company</a>
around its open-source
<a target="_blank" href="https://github.com/serverless/serverless-framework">
Serverless Framework on GitHub</a>, a combination of 
command-line utilities and conventions.

His initial Serverless presentation at AWS:Invent 2015
   <amp-youtube data-videoid="D_U6luQ6I90" layout="responsive" width="480" height="270"></amp-youtube>
   <a target="_blank" href="https://news.ycombinator.com/item?id=10005415">
   Hacker News</a> announced it in 2015 when the product was first called JAWS.

The company's social media:

   * <a target="_blank" href="https://github.com/serverless/serverless">
   serverless-framework at https://github.com/serverless/serverless</a>
   * <a target="_blank" href="http://docs.serverless.com/">
   http://docs.serverless.com</a>
   * <a target="_blank" href="https://github.com/serverless/serverless/milestones/">
   Roadmap at https://github.com/serverless/serverless/milestones</a> 
   includes runs in Microsoft Azure and IBM.
   * <a target="_blank" href="https://www.serverless.com/">
   serverless.com</a> is the company's home page.
   * <a target="_blank" href="https://gitter.im/serverless/serverless">
   gitter.im/serverless/serverless</a> for instant chatting
   * <a target="_blank" href="http://serverlessconf.io/">serverlessconf.io</a> conferences
   * <a target="_blank" href="https://twitter.com/search?q=goserverless&src=typd">
    @GoServerless</a> Twitter account
   * <a target="_blank" href="https://www.youtube.com/channel/UCFYG383lawh9Hrs_DEKTtdg">
   YouTube channel</a>
   * <a target="_blank" href="http://github.us11.list-manage1.com/subscribe?u=b4fad36768cab222f88338995&id=5f8407dded">
   Mailchimp Mailing List</a>

   * <a target="_blank" href="http://www.meetup.com/serverless/">
   Meetups on meetup.com</a> and at
   <a target="_blank" href="https://www.ServerlessMeetups.com/">
   ServerlessMeetups.com</a>
   * <a target="_blank" href="https://www.emitconference.com/">https://www.emitconference.com</a>
   Emit Conference for "event-driven architectures" August in San Francisco


#### Install Serverless Framework  #

PROSTIP: The Serverless Framework is a command-line tool, providing scaffolding, workflow automation and best practices for developing and deploying your serverless architecture. 

Below is an annotated, expanded verson of <a target="_blank" href="https://github.com/serverless/platform/blob/master/docs/getting-started.md">this</a>:

0. [Install Node.js](/node-osx-install/)
   as a pre-requisite since the framework is written in Node.js.

0. Install the serverless-framework

   <pre><strong>
   npm install -g serverless
   </strong></pre>

0. Verify version:

   <pre><strong>serverless -v
   sls -v
   </strong></pre>

   1.42.3
   NOTE: Serverless was in Beta version 0.5.6 as of June 2016,
   with v1.0 announced 24 June 2016.


   <a id="UpdateFramework"></a>

   #### Update Serverless #

   PROTIP: I subscribed to get notifications of changes, 
   and I can see a lot of refactoring is happening
   very quickly, so I suggest that you update frequently.

   <pre><strong>
   npm update -g serverless
   </strong></pre>

   Nothing returns if you're up-to-date.

   The command notes whether you should <tt>npm install -g npm</tt>

   <a id="LookAround"></a>

   #### Look around #

0. Get summary of commands using the abbreviated command:

   <tt><strong>sls
   </strong></tt>

   The response (version 1.28.0) you'll have to extend the terminal screen to avoid line wrapping:

   <pre>
Commands
* You can run commands with "serverless" or the shortcut "sls"
* Pass "--verbose" to this command to get in-depth plugin info
* Pass "--no-color" to disable CLI colors
* Pass "--help" after any &LT;command> for contextual help
&nbsp;
Framework
* Documentation: https://serverless.com/framework/docs/
&nbsp;
config ........................ Configure Serverless
config credentials ............ Configures a new provider profile for the Serverless Framework
create ........................ Create new Serverless service
install ....................... Install a Serverless service from GitHub or a plugin from the Serverless registry
package ....................... Packages a Serverless service
deploy ........................ Deploy a Serverless service
deploy function ............... Deploy a single function from the service
deploy list ................... List deployed version of your Serverless Service
deploy list functions ......... List all the deployed functions and their versions
invoke ........................ Invoke a deployed function
invoke local .................. Invoke function locally
info .......................... Display information about the service
logs .......................... Output the logs of a deployed function
metrics ....................... Show metrics for a specific function
print ......................... Print your compiled and resolved config file
remove ........................ Remove Serverless service and all resources
rollback ...................... Rollback the Serverless service to a specific deployment
rollback function ............. Rollback the function to the previous version
slstats ....................... Enable or disable stats
plugin ........................ Plugin management for Serverless
plugin install ................ Install and add a plugin to your service
plugin uninstall .............. Uninstall and remove a plugin from your service
plugin list ................... Lists all available plugins
plugin search ................. Search for plugins
&nbsp;
Plugins
AwsConfigCredentials, Config, Create, Deploy, Emit, Info, Install, Invoke, Login, Logout, Logs, Metrics, Package, Plugin, PluginInstall, PluginList, PluginSearch, PluginUninstall, Print, Remove, Rollback, Run, SlStats
   </pre>

0. Verify where the executable is located:

   <pre><strong>command -v serverless
   </strong></pre>

   The response (with your account rather than "wilsonmar"):

   <pre>/Users/wilsonmar/.nvm/versions/node/v9.11.1/bin/serverless
   </pre>

0. Get the location of files

   <pre><strong>find / -name serverless 2>/dev/null
   </strong></pre>

   The response (with your account rather than "wilsonmar"):

   <pre>/usr/local/bin/serverless
   </pre>

   ### In the serverless framework folder

0. Navigate to framework folders and files:

   <pre><strong>
   cd /usr/local/lib/node_modules/serverless
   ls -al
   </strong></pre>

   The response (with your account rather than "wilsonmar"):

   <pre>CHANGELOG.md      README.md         lib               package-lock.json scripts
LICENSE.txt       bin               node_modules      package.json
   </pre>

0. View the README.md file using a Markdown reader:

   <pre><strong>
   atom README.md
   </strong></pre>

   Instead of the Atom text editor (from GitHub),
   alt-click on the file to select <strong>Markdown Preview</strong>.

   The file contains a list of projects,
   plugins, and consultants who provide services.

   <a href="https://serverless.com/framework/" target="_blank">
   https://serverless.com/framework</a>

   Serverless is open-sourced under the MIT license and actively maintained by a full-time, venture-backed team.

   #### Files of Serverless Framework

README.md, CONTRIBUTING.md, LICENSE.txt are standard GitHub files.

<strong>.eslintrc.js</strong> contains rules for how lint programs identify issues with code formatting.

<strong>.jsbeautifyrc</strong> contains settings for JavaScript code beautify program.

<strong>.jscsrc</strong>

<strong>.npmignore</strong> defines files and folders for NPM to ignore.

<strong>.travis.yml</strong> is used by the Travis task runner.

<strong>Dockerfile</strong> defines how to load the server in Docker.

<strong>docker-compose.yml</strong>


#### Folders

<strong>.idea</strong> contains settings for use by the IDEA IDE.

.github

bin

coverage

lib contains library files

node_modules are populated

scripts

tests



<a name="Plugins"></a>

#### _meta Plugins #

The heart of Serverless are its Plugins, which makes it extensible.

Plugins can be written in python, node.js, java, scala or C#.

Plugins need to be installed for each project that uses each.

0. List plugins come installed with the Framework :

   <tt><strong>
   ls _meta/
   </strong></tt>

0. Navigate your active directory to the root of your project.
0. Plugins are downloaded from GitHub by npm, so to install a plug-in, for example:

   <pre>
   npm install --save-dev serverless-webpack-plugin webpack
   </pre>

   See [asprouse/serverless-webpack-plugin](https://github.com/asprouse/serverless-webpack-plugin) - Use Webpack to optimize your Serverless Node.js Functions.

   In serverless.yml, this section:

   <pre>
   plugins:
     - custom-serverless-plugin
   custom:
     custom-config-category:
       configBucket: configBucketName
   </pre>


* [serverless/serverless-meta-sync](https://github.com/serverless/serverless-meta-sync) - Securely sync your the variables in your project's `_meta/variables` across your team.

   <tt><strong>
   npm install serverless-offline --save
   </strong></tt>

* [dherault/serverless-offline](https://github.com/dherault/serverless-offline) - Emulate AWS Lambda and Api Gateway locally to speed up your development cycles.

* [kennu/serverless-plugin-hookscripts](https://github.com/kennu/serverless-plugin-hookscripts) - Easily create shell script hooks that are run whenever Serverless actions are executed.

* [joostfarla/serverless-cors-plugin](https://github.com/joostfarla/serverless-cors-plugin) - Adds support for CORS (Cross-origin resource sharing).

* [Nopik/serverless-serve](https://github.com/Nopik/serverless-serve) - Simulate API Gateway locally, so all function calls can be run via localhost.

* [serverless/serverless-client-s3](https://github.com/serverless/serverless-client-s3) - Deploy and config a web client for your Serverless project to S3.

* [martinlindenberg/serverless-plugin-alerting](https://github.com/martinlindenberg/serverless-plugin-alerting) -
   This Plugin adds Cloudwatch Alarms with SNS notifications for your Lambda functions.

* [serverless/serverless-optimizer-plugin](https://github.com/serverless/serverless-optimizer-plugin) -
   Optimizes your code for performance in Lambda. Supports coffeeify, babelify and other transforms

* [tmilewski/serverless-resources-validation-plugin](https://github.com/tmilewski/serverless-resources-validation-plugin) -
   Adds support for validating your CloudFormation template.

* [Nopik/serverless-lambda-prune-plugin](https://github.com/Nopik/serverless-lambda-prune-plugin) -
   Delete old versions of AWS lambdas from your account so that you don't exceed the code storage limit.

* [daffinity/serverless-base-path-plugin](https://github.com/daffinity/serverless-base-path-plugin) -
   Sets a base path for all API Gateway endpoints in a Component.

* [arabold/serverless-test-plugin](https://github.com/arabold/serverless-test-plugin) - A Simple Integration Test Framework for Serverless.

* [martinlindenberg/serverless-plugin-sns](https://github.com/martinlindenberg/serverless-plugin-sns) - This plugin easily subscribes your lambda functions to SNS notifications.

* [joostfarla/serverless-jshint-plugin](https://github.com/joostfarla/serverless-jshint-plugin) - Detect errors and potential problems in your Lambda functions.

* [nishantjain91/serverless-eslint-plugin](https://github.com/nishantjain91/serverless-eslint-plugin) - Detect errors and potential problems in your Lambda functions using eslint.

* [SC5/serverless-mocha-plugin](https://github.com/SC5/serverless-mocha-plugin) - Enable test driven development by creating test cases when creating new functions

* [HyperBrain/serverless-package-plugin](https://github.com/HyperBrain/serverless-package-plugin) - Package your lambdas without deploying to AWS.

* [arabold/serverless-sentry-plugin](https://github.com/arabold/serverless-sentry-plugin) - Automatically send errors and exceptions to [Sentry](https://getsentry.com).

* [arabold/serverless-autoprune-plugin](https://github.com/arabold/serverless-autoprune-plugin) - Delete old AWS Lambda versions.


PROTIP: Functions of the same component can use the lib folder to share common code.


<a id="IAM"></a>

## Get Permissions #

aws-lambda-node-js-programming

* http://stackoverflow.com/questions/37779324/how-to-troubleshoot-serverless-iam-permissions


<hr />


## Serverless Command-line #

Lambda functions can be defined from a command-line using the Serverless framework.

AWS May 2016 Webinar Series - Deep Dive on Serverless Web Applications
   <amp-youtube data-videoid="fXZzVzptkeo" layout="responsive" width="480" height="270"></amp-youtube>

http://abalone0204.github.io/2016/05/22/serverless-simple-crud/


## Keeping Secrets #

BLAH: AWS Lambda doesn't allow setting and reference to operating system <strong>environment variables</strong>.

Lambda functions have a
<strong>deploy.env</strong> file in combination with the
<strong>`--configFile`</strong> flag to set values which will be
prepended to your compiled Lambda function as
<strong>process.env</strong> environment variables before it gets uploaded to S3.

Secrets such as DB connection string or encryption key
are secure values that should not be checked into version control (specified in a .gitignore file).



<a name="Projects"></a>

## Sample Hello Project #

0. Create a folder to hold serverless projects.
   For example, you may choose another:

   <pre><strong>
   mkdir ~/gits/sls
   cd ~/gits/sls
   </strong></pre>

   <a name="ServerlessPlatform"></a>

   ### Serverless Platform Online #

0. Open the cloud dashboard: 

   <pre><strong>serverless login
   </strong></pre>

   This opens a browser to:

   <a target="https://dashboard.serverless.com/?cli=true">https://dashboard.serverless.com/?cli=true</a>

0. Log in using your GitHub or Google credentials.

   * App visualization - View the services you've deployed with the Serverless Framework. inspect config, monitor deployment activity and more.

   * Collaborate - Share your Serverless Framework projects with teammates.

   * Hosted event gateway - Your account includes a free Event Gateway. Create event-driven APIs, workflows and integrations with any systems you'd like to integrate with serverless functions-as-a-service.

0. Click on the + App button
   An app name is suggested by concatenating your account and app plus the "slsgateway.com", such as:

   myname-myapp-dev.slsgateway.com

0. Edit the name and click SAVE.
0. Return to the Terminal to see:

   <pre>Serverless: You are now logged in</pre>

   ### New local #

0. Create a serverless.yml file using a <strong>template</strong> for a nodejs app running on the aws cloud provider:

   <pre><strong>sls create -t aws-nodejs --path aws-nodejs-hello
   </strong></pre>

   <tt>-t</tt> is a contraction of command parameter `--template`f

   <pre>Serverless: Generating boilerplate...
 _______                             __
|   _   .-----.----.--.--.-----.----|  .-----.-----.-----.
|   |___|  -__|   _|  |  |  -__|   _|  |  -__|__ --|__ --|
|____   |_____|__|  \___/|_____|__| |__|_____|_____|_____|
|   |   |             The Serverless Application Framework
|       |                           serverless.com, v1.28.0
 -------'
&nbsp;
Serverless: Successfully generated boilerplate for template: "aws-nodejs"
Serverless: NOTE: Please update the "service" property in serverless.yml with your service name
   </pre>

0. The previous command (like Git clone) creates a folder, so

   <pre><strong>cd <em>aws-nodejs-hello</em></strong></pre>

   Two files are created in the folder:

   * handler.js which is the coding for the Lambda function.
   * serverless.yml defines the configuration.
   <br /><br />

0. Edit file serverless.yml to add permissions to use Amazon's SES (Simple Email Service):

   <pre>
service: aws-nodejs-hello
app: myapp-dev
tenant: wilsonmar
&nbsp;
provider:
  name: aws
  runtime: nodejs6.10
  stage: prod
  memorySize: 256
  environment:
    ACCESS_KEY_VALUE: 123-access-key-value-456-abc
  iamRoleStatements:
  - Effect: "Allow"
    Action:
      - "ses:*"
    Resource:
      - "*"
&nbsp;
functions:
   hello:
      handler: handler.hello
      events:
         - http:
             path: hello
             mention: get
   </pre>

   ### Functions

   The name of the function is defined ("hello").

   ### Handlers #

   PROTIP: Handlers can compress or transform objects while being uploaded to Amazon S3.

   ### Path

   When using the AWS API Gateway, 

   <pre>path: hello/{id}</pre>

   ### Events #

   Another http example:

   <pre>method: post
   cors: true
   </pre>

0. The other lines beginning with \# are comments that can be deleted.


   ### Deploy function

0. Deploy the app (-verbosely):

   <pre><strong>sls deploy -v</strong></pre>

   PROTIP: Be mindful of this message: 
   Serverless: WARNING: Missing "tenant" and "app" properties in serverless.yml. Without these properties, you can not publish the service to the Serverless Platform.

   The response is a lot of lines, including something like this:

   <pre>
Service Information
service: aws-nodejs-hello
stage: dev
region: us-east-1
stack: aws-nodejs-hello-dev
api keys:
  None
endpoints:
  None
functions:
  hello: aws-nodejs-hello-dev-hello
&nbsp;
*Stack Outputs*
HelloLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:903265058630:function:aws-nodejs-hello-dev-hello:1
ServerlessDeploymentBucketName: aws-nodejs-hello-dev-serverlessdeploymentbucket-wafuwil8ilvx
   </pre>   

   You'll get a "congrats on your first deploy" email if it is:

   <pre>
Congrats on your very first deployment on the Serverless Framework! Here's to many more. 🎉 
&nbsp;
Use these resources from our community to help you build apps faster:
<a target="_blank" href="https://github.com/serverless/examples"Serverless examples repository</a> for a list of ready-to-go, deployable serverless services
<a target="_blank" href="https://github.com/serverless/plugins">Serverless plug-ins</a> to extend base functionality
David
your friendly neighborhood developer
@ Serverless
   </pre>

   ### Functions deployed

0. List services:

   <pre><strong>sls deploy list</strong></pre>

   An example response:

   <pre>
Serverless: Listing deployments:
Serverless: -------------
Serverless: Timestamp: 1531622582547
Serverless: Datetime: 2018-07-15T02:43:02.547Z
Serverless: Files:
Serverless: - aws-nodejs-hello.zip
Serverless: - compiled-cloudformation-template.json
   </pre>

   ### Show Function Logs

0. Open up a separate tab in your console and fetch (stream) all logs for your Function:

   <pre><strong>sls logs -f hello -t</strong></pre>

   Sample response:

   <pre>
START RequestId: 9cb599bd-87d9-11e8-a1ac-77e94c02a7c3 Version: $LATEST
END RequestId: 9cb599bd-87d9-11e8-a1ac-77e94c02a7c3
REPORT RequestId: 9cb599bd-87d9-11e8-a1ac-77e94c02a7c3  Duration: 0.55 ms Billed Duration: 100 ms   Memory Size: 1024 MB  Max Memory Used: 21 MB  
   </pre>

   ### Invoke function

0. Invoke:

   <pre><strong>sls invoke -f hello --log</strong></pre>

   Response:

   <pre>
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless v1.0! Your function executed successfully!\",\"input\":{}}"
}
--------------------------------------------------------------------
START RequestId: 5df3ecdc-87d9-11e8-8ed7-c3ee16fc727b Version: $LATEST
END RequestId: 5df3ecdc-87d9-11e8-8ed7-c3ee16fc727b
REPORT RequestId: 5df3ecdc-87d9-11e8-8ed7-c3ee16fc727b  Duration: 2.16 ms Billed Duration: 100 ms   Memory Size: 1024 MB  Max Memory Used: 20 MB  
   </pre>  

   PROTIP: Pay attention to "Max Memory Used:".

   ### Remove all functions

0. Remove all Functions, Events and Resources of the service, so charges are no longer accrued:

   <pre><strong>sls remove</strong></pre>

   Example response:

   <pre>
Serverless: Getting all objects in S3 bucket...
Serverless: Removing objects in S3 bucket...
Serverless: Removing Stack...
Serverless: Checking Stack removal progress...
.......
Serverless: Stack removal finished...
Serverless: Successfully archived your service on the Serverless Platform
   </pre>

<hr />

## Implement a sample project 

Richard Moot (<a target="_blank" href="https://twitter.com/wootmoot">@wootmoot</a>), Developer Evangelist <a target="_blank" href="https://twitter.com/SquareDev">@Square</a>, wrote <a target="_blank" hrer="https://medium.com/square-corner-blog/super-simple-serverless-ecommerce-68d2792e8285/">Super Simple Serverless eCommerce</a>. 
Richard stores files in Gists, which will work as long as the files don't ever change.

1. In <a target="_blank" href="https://console.aws.amazon.com/console/home?region=us-east-1"> the Amazon console</a>, use your AWS admin account <a target="_blank" href="https://console.aws.amazon.com/iam/home?">within IAM</a>, create an account with permissions to read and write S3.
2. <a target="_blank" href="https://s3.console.aws.amazon.com/s3/home?region=us-east-1#">In S3</a>, create a bucket to get a UNIQUE_ID.
3. Create a product image and put in within your S3 bucket.
4. Edit the <a target="_blank" href="https://gist.githubusercontent.com/mootrichard/260629e0b8c0c5568d52ce0f8d67b548/raw/4da2bb9d2d61532e4d51511cea2f2df5f7c7b2a8/product.html">sample product.html file</a>

   * Replace UNIQUE_ID with the ID of the app in AWS.
   * Replace "/0.jpeg" with the URI to the product image at:
   &LT;img class='productImage' src="/0.jpeg" />
   * Replace "Square 1 Sticker" with your own product's name.
   <br /><br />

   My changes are stored in GitHub.

5. Edit the <a target="_blank" href="https://gist.github.com/mootrichard/46e984f38065110eb9b2e15c08dcef07#file-index-html">sample index.htm</a>
6. Save a favicon.ico graphic file in the root.
7. Save the main.css and normalize.css, plugin.js, main.js
8. Save <a target="_blank" href="https://gist.github.com/mootrichard/ac0636683157b5e6a97875389d92f706#file-handler-js">sample handler.js</a>
9. enable “Static website hosting” in Properties to have a publicly accessible site.
10. Edit the <a target="_blank" href="https://gist.github.com/mootrichard/1c3b14f875a2eeb75e19ed913c781372#file-serverless-yml">sample serverless.yml</a>

11. Replace YOUR_LOCATION_ID in serverless.yml

Richard also created <a target="_blank" href="https://medium.com/square-corner-blog/serverless-instant-checkout-links-with-square-6fa331d51928">Serverless Instant Checkout Links with Square</a>


Alternately, choose another pre-defined app from this list:

   * https://zanon.io/posts/building-serverless-websites-on-aws-tutorial 
   using the Serverless Framework 1.1, dated JAN 31, 2016 by Fred Eady.

   * [serverless/serverless-graphql](https://github.com/serverless/serverless-graphql) - Official Serverless boilerplate to kick start your project

   * [serverless/serverless-starter](https://github.com/serverless/serverless-starter) - A simple boilerplate for new projects with a few architectural options

   * [serverless/serverless-graphql-blog](https://github.com/serverless/serverless-graphql-blog) - A blog boilerplate that leverages GraphQL in front of DynamoDB to offer a minimal REST API featuring only 1 endpoint

   * [laardee/serverless-authentication-boilerplate](https://github.com/laardee/serverless-authentication-boilerplate) - A generic authentication boilerplate for Serverless framework

   * [sc5/sc5-serverless-boilerplate](https://github.com/SC5/sc5-serverless-boilerplate) - A boilerplate for test driven development of REST endpoints

   * [microapps/MoonMail] (https://github.com/microapps/MoonMail) - Build your own email marketing infrastructure using Lambda + SES from http://microapps.com/

0. Create a folder.

0. Load a sample project from the list above:

   <tt><strong>
   sls project install serverless-graphql
   </strong></tt>

   The response:

   <pre>
   _______                             __
|   _   .-----.----.--.--.-----.----|  .-----.-----.-----.
|   |___|  -__|   _|  |  |  -__|   _|  |  -__|__ --|__ --|
|____   |_____|__|  \___/|_____|__| |__|_____|_____|_____|
|   |   |             The Serverless Application Framework
|       |                           serverless.com, v0.5.6
`-------'
&nbsp;
Serverless: Installing Serverless Project "serverless-graphql"...  
Serverless: Downloading project and installing dependencies...  
Serverless: Initializing Serverless Project...  
Serverless: Enter a new stage name for this project:  (dev)
   </pre>

0. Press Enter to accept the default

0. Keyboard up and down to select:

   <pre>
Serverless: For the "dev" stage, do you want to use an existing Amazon Web Services profile or create a new one?
  > Existing Profile
    Create A New Profile
Serverless: Select a profile for your project:
    default
  > GitHubPublisher1
    me_dev
    serverless-graphql_dev
Serverless: Creating stage "dev"...  
Serverless: Select a new region for your stage:
    us-east-1
  > us-west-2
    eu-west-1
    eu-central-1
    ap-northeast-1
Serverless: Creating region "us-west-2" in stage "dev"...  
Serverless: Deploying resources to stage "dev" in region "us-west-2" via Cloudformation (~3 minutes)...
   </pre>


<a name="FrameworkStructure"></a>

## Structure of Folders and Files #

PROTIP: The serverless framework save developers' time by standardizing the structure of folders and files.

   <pre>
s-project.json       // Project file (JSON or YAML)
s-resources-cf.json  // CloudFormation template
s-templates.json     // Config templates and variables
admin.env            // AWS Profiles (gitignored)
_meta                // Metadata (gitignored)
function1            // A custom function
  |__event.json
  |__handler.js
  |__s-function.json
   </pre>

This set of project file is what developers work with.

The serverless framework programming which read and process project files
is written in Node JavaScript.

The <strong>s-project.json</strong> lists plugins:

   <pre>
{
  "name": "notes",
  "custom": {},
  "plugins": [
    "serverless-client-s3"
  ]
}
   </pre>

A key differentiator with the Serverless Framework is that infrastructure specs are defined as code in one project.
<strong>s-resources-cf.json</strong> is a AWS CloudFormation template
specifying security (IAM) roles, SNS email topics, DynamoDB tables, Queues, ARNs.

Components are deployed per stage (dev, prod, etc.),
allowing developers to easily deploy separate prod, test and dev environments.

Within the folder for each function is a <strong>s-function.json</strong>
file containing metadata such as <a href="#Plugins">plugins</a> installed with the project.

When the framework is created for a project, a <strong>.gitignore</strong> file is created with other files
to specify private and temporary work files that should not be publicly uploaded to GitHub.

Project metadata in file
<strong>_meta</strong> outputs and user variables used in function configurations.
But due to the sensitive nature of these variables, the file needs to be gitignore'd by default.
A workaround is to use the
Serverless Meta Sync plugin
which stores project metadata in S3.

<strong>admin.env</strong>



<a name="ToProd"></a>

## Production limits & prep #

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to <strong>100</strong>. This is a safety limit to protect users from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, request a limit increase for concurrent executions <a target="_blank" href="http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit">here</a>.


<a name="Libraries"></a>

## Libraries #

React Serverless app running in Azure?

<a target="_blank" href="https://github.com/99xt/serverless-dependency-install">
   https://github.com/99xt/serverless-dependency-install</a>
   Serverless plugin to manage dependencies
   
<a target="_blank" href="https://github.com/99xt/serverless-boilerplate">
    with architectural best practices</a>
    using NPM, Angular, Gulp.

<a target="_blank" href="https://github.com/99xt/serverless-dynamodb-local">
   https://github.com/99xt/serverless-dynamodb-local</a>


## Rock Stars #

Adnan Rahić (<a target="_blank" href="https://twitter.com/adnanrahic">@adnanrahic</a>, bookvar.co founder)
$50 Packt <a target="_blank" href="https://www.packtpub.com/web-development/serverless-javascript-example-video">Serverless JavaScript by Example [Video]</a> December, 2017

Yan Cui (<a target="_blank" href="https://theburningmonk.com/">theburningmonk.com</a>) is an AWS Serverless Hero and author of <a target="_blank" href="https://www.manning.com/livevideo/production-ready-serverless?a_aid=aws-lambda-in-motion&a_bid=9318fc6f">Production-Ready Serverless: Operational Best Practices</a> 9h video course thru Manning. Subjects include:

   * API Gateway, VPC
   * Testing, Debugging, CI/CD, Canary Deployments
   * Process real-time events with Kinesis & Lambda
   * Logging, Monitoring, X-Ray, Correlation IDs, Performance, Error Handling
   * Lambda limits, Managing Configurations, 


<a name="PhillipMuens"></a>
Phillip Muens (@pmmuens, github.com/pmuens) from Germany

   * Has an informative blog at
   <a target="_blank" href="http://justserverless.com/blog/">
   JustServerless.com</a>

   * <a target="_blank" href="https://github.com/pmuens/serverless-book">
   https://github.com/pmuens/serverless-book</a>
   * <a target="_blank" href="http://justserverless.com/blog/your-first-serverless-application/">
   http://justserverless.com/blog/your-first-serverless-application/</a>

   * <a target="_blank" href="https://github.com/JustServerless/awesome-serverless">Awesome list</a>

   * <a target="_blank" href="http://justserverless.com/blog/nanoservices-microservices-monolith-serverless-architectures-by-example/">
    Nanoservices</a>

   * <a target="_blank" href="https://gumroad.com/l/learn-serverless-book">
   $28.13 Learn Serverless ebook</a> (5.7 MB in 5 PDFs),
   <a target="_blank" href="http://learnserverless.club/">learnserverless.club</a>,
   with the sample app at
   <a target="_blank" href="https://github.com/JustServerless/notes">
   github.com/JustServerless/notes</a>.

   * Deprecated since Oct 2016 is <a target="_blank" href="https://github.com/JustServerless/learnserverless-book/issues/">
   https://github.com/JustServerless/learnserverless-book/issues</a>

Matthew Fuller

   * <a target="_blank" href="https://www.amazon.com/AWS-Lambda-Guide-Serverless-Microservices-ebook/dp/B016JOMAEE/">
   AWS Lambda: A Guide to Serverless Microservices</a> Amazon Kindle book published 2016-01-11):
   $3.99

Jake Knowles

   * AWS Lambda: Serverless Microservices Guide with Simple Instructions

John McKim  @johncmckim  blogs on Medium:

   * <a target="_blank" href="https://medium.com/@johncmckim/serverless-framework-the-good-parts-9d84e5a02467#.yxruhhlna">
   Serverless Framework: The Good Parts</a>

CNCF

   * <a target="_blank" href="https://github.com/cncf/wg-serverless/blob/master/whitepaper/cncf_serverless_whitepaper_v1.0.pdf">white paper PDF</a> in repo
   <a target="_blank" href="https://github.com/cncf/wg-serverless">https://github.com/cncf/wg-serverless</a> from the Kubernetes folks

Andru Estes

   * <a target="_blank" href="https://beta.linuxacademy.com/#/hands-on-labs/details/f2b58b6b-2a05-435a-8746-ca1ff25b9773?redirect_uri=https://app.linuxacademy.com/search?query=c%23">Creating a Simple AWS Lambda Function</a> [30m] Jul 22, 2018


<a target="_blank" href="https://egghead.io/courses/building-serverless-web-applications-with-react-aws-amplify">Building Serverless Web Applications with React & AWS Amplify</a> video course by Nader Dabit.

<a target="_blank" href="https://egghead.io/courses/develop-a-serverless-backend-using-node-js-on-aws-lambda">Develop a Serverless Backend using Node.js on AWS Lambda</a> by Nik Graf

### Pluralsight video tutorials

* <a target="_blank" href="https://app.pluralsight.com/library/courses/web-applications-without-server">Serverless Web Applications</a> 9 Dec 2015 [2h 40m]
by Rob Conery

* <a target="_blank" href="https://app.pluralsight.com/library/courses/serverless-big-picture/table-of-contents">Serverless Computing: The Big Picture</a> 17 Apr 2019 [59m] by Richard Seroter (VP of Product Marketing at Pivotal)

Azure:

* <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-serverless-applications">Building Serverless Applications in Azure</a> 15 Aug 2017, 4h 7m by Mark Heath

* <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-serverless-functions-create">Microsoft Azure Developer: Create Serverless Functions</a>

* <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-serverless-computing-configuring">Configuring Serverless Computing in Microsoft Azure</a>

Instead of giving you an emulator for local development, Azure give you the runtime. The whole box.
The <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local">Azure Functions Core Tools</a> is the same runtime that Azure uses in the cloud. Because you get the whole runtime, you can build any kind of function locally. Blob and Azure Message Queue Triggers as well. Not just HTTP triggers.

Open an Azure Functions project in VS Code, and you are prompted to setup an extension to run and debug functions, put a breakpoint in the gutter and hit the green button in the debug panel.

Google:

* <a target="_blank" href="https://app.pluralsight.com/library/courses/google-dataflow-architecting-serverless-big-data-solutions">Architecting Serverless Big Data Solutions Using Google Dataflow</a>


* <a target="_blank" href="https://app.pluralsight.com/library/courses/google-cloud-functions-architecting-event-driven-serverless-solutions">Architecting Event-driven Serverless Solutions Using Google Cloud Functions</a>

### Random Resources

<a target="_blank" href="http://engineeringjobs4u.co.uk/serverless-instant-checkout-links-with-square-square-corner-blog-medium">
Serverless Instant Checkout Links with Square – Square Corner Blog</a>

<a target="_blank" href="https://hackernoon.com/a-crash-course-on-serverless-apis-with-express-and-mongodb-77774f7730fe">
A crash course on Serverless APIs with Express and MongoDB</a>

<a target="_blank" href="https://blog.runscope.com/posts/how-to-write-your-first-aws-lambda-function">how-to-write-your-first-aws-lambda-function</a>

<a target="_blank" href="https://goo.gl/JXyRyo">Taking Serverless and AI to the Next Level</a> February 27, 2018
by Yaron Haviv, Tomer Rosenthal

<a target="_blank" href="https://goo.gl/hQSoKa">
Building Serverless Application Pipelines</a> March 6, 2018
https://www.cncf.io/wp-content/uploads/2018/03/cncf-serverless-webinar.pdf
by Sebastien Goasguen

### Lists:

<a target="_blank" href="https://techbeacon.com/50-best-starter-kits-resources-building-serverless-apps">https://techbeacon.com/50-best-starter-kits-resources-building-serverless-apps</a>


## More on Clouds #

This is one of a series on Cloud computing

{% include cloud_links.html %}
