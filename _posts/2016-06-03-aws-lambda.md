---
layout: post
date: "2022-12-03"
file: "aws-lambda"
title: "AWS Lambda Basics"
excerpt: "Scalable stateless short-lived functions. Nothing to do with Java Lambdas."
tags: [programming, AWS, EC2, lambda, cloud]
image:
# pic friends white shirts 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/16040708/8f5b3cc6-31ee-11e6-9043-15d6ba1326c7.jpg
  credit: Genius Quotes
  creditlink: http://geniusquotes.org/best-friends-forever-quotes-images-and-friends-wallpapers/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

AWS Lambda is used to make small (< 512MB) programs making small (< 128 byte) requests to perform short-lived (< 15 second) stateless  processing such as trigging other actions to occur. 

AWS takes care of scaling. Behind the GUI, AWS Lambda acts like a giant single server.



## Why? #

<a target="_blank" href="https://www.linkedin.com/in/andrew-baird-2bb7324a">
Andrew Baird</a>, AWS Solutions Architect,
<a target="_blank" href="https://www.youtube.com/watch?v=O2GQRC0sVA8&t=5m22s">
listed all the questions that developers DON'T have to graple with
in his March 2016 webinar "Getting Started with Serverless Architectures"</a>.

  <amp-img alt="lambda questions 650x287" width="650" height="287" src="https://cloud.githubusercontent.com/assets/300046/16016299/920289da-3157-11e6-8252-1849a5f1fda3.jpg"></amp-img>

> "There are tools and entire industries whose entire value proposition are about answering just one of these."

## Why NOT? #

An app is NOT a good candidate for using AWS Lambda if
you interact with components in EC2 instances:

   * App requires a custom AMI (extra programs on servers rather than via REST API)
   * Need to SSH into server using multiple accounts
   * Need to use LDAP for authentication
   * OS updates impact your app?
   * OS configuration such as memory settings, max. file handlers, etc.
   * OS snapshots during security incidents
   * Intrusion detection is needed (not available in AWS Lambda)
   * Network speeds are important (not known in AWS Lambda)
   * VPC is needed (not yet supported in AWS Lambda)
   <br /><br />

## Hands-on

<a target="_blank" href="https://wilsonmar.github.io/aws-lambda/">
This tutorial</a> is a hands-on guided tour taking a deep dive into the basics of creating and using functions-as-a-service called AWS Lambda.

Take one step at a time and we point out PROTIPs and notes along the way.

1. Get an AWS Account. PROTIP: Don't use a root account.

   https://wilsonmar.github.io/aws-iam/

   https://wilsonmar.github.io/aws-onboarding/

   ## AWS GUI

1. Use an internet browser to get on the AWS Console at<br />
   <a target="_blank" href="http://aws.amazon.com/">
   http://aws.amazon.com</a>

   ### Competitors

   BTW, competitors to AWS Lambda  include:

   * <a target="_blank" href="https://azure.microsoft.com/en-us/services/functions/">
   Microsoft Azure Functions</a>
   * <a target="_blank" href="https://cloud.google.com/functions/">
   Google Cloud Functions</a>
   * <a target="_blank" href="https://www.ibm.com/cloud/functions">
   IBM OpenWhisk</a>
   * https://kubeless.io/
   * https://spotinst.com/
   * Iron runs Serverless within on-prem servers.

   TODO: I hope to have a competitive comparison in the future.

0. Click <strong>Sign In</strong> to the AWS Lambda Console.

   If you have signed in before, the URL changes to include your working region.

   <a target="_blank" href="https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions">
   https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions</a>

   Notice the region code appears twice in the URL.

   NOTE: <a target="_blank" href="https://status.aws.amazon.com/">https://status.aws.amazon.com/</a> provides trouble reports by AWS service within region.

1. Pick the region. 

   PROTIP: I like using us-east-2, being acutally in Ohio, serves both West and East coast in a single region.

0. Select <strong>Services</strong> from the top menu.

   <amp-img width="650" alt="lambda services 2016-06-03 959x124" src="https://cloud.githubusercontent.com/assets/300046/15784793/5d0342ee-2971-11e6-97e0-a4ac79fe7818.jpg"></amp-img>

   COMMENT: Compute services are at the top of the list among all Amazon services
    because it's the hottest thing right now (June 2016)?

0. <a target="_blank" href="https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2">
   Select Lambda from among <strong>Compute</strong> services</a>.

   If no Lambda functions have been created, you will see a "Get Started Now" button.

   If custom Lambda functions have been created on your account, you'll see a list of those functions.

   No worries about achieving massive scale.
   Addition of enough machines to handle load are taken care of by Amazon people behind the scenes.

   BTW, if you're worried about vendor lock-in,
   know that Amazon is not the only ones who can run lambdas.
   <a target="_blank" href="https://www.iron.io/platform/ironworker/">
   IronWorker from Iron.io</a> and
   Serverless
   can run Lambdas on your own servers.

   <a name="Pricing"></a>

   #### Pricing #

0. On a new browser tab, click<br />
   <a target="_blank" href="http://aws.amazon.com/lambda/">
   http://aws.amazon.com/lambda/</a>, the home page for Amazon's Lambda service.

0. Click <a target="_blank" href="http://aws.amazon.com/lambda/pricing">
   http://aws.amazon.com/lambda/pricing</a>

   PROTIP: The first million requests are free. That's 20 cents you'll save each month.

   For now, the first 400,000 GB-seconds (x 1024 = 409,600,000 MB-seconds) are free.

   <a target="_blank" href="https://www.twitter.com/lambdatips/">
   @lambdatips</a>:
   If you run only 128 MB Lambdas, you can make one request every 1.23 seconds during a 30-day month, for free.
   (409,600,000 / 128 = 3,200,000 / 30 days / 24 hours / 60 minutes / 60 seconds = 1.23 )

   QUESTION: What is the date that free allocations flip to the next month? On the 1st?

   NOTE: Lambda functions created (and sitting around with no activity) incur no charges.

   On-line TOOL: <a target="_blank" href="https://s3.amazonaws.com/lambda-tools/pricing-calculator.html#">
   Pricing Calculator at<br />
   https://s3.amazonaws.com/lambda-tools/pricing-calculator.html</a>

   NOTE: How much each Lambda request consumes in memory time is described in
   <a href="#CloudWatch">CloudWatch</a>, below.


<a name="CreateFunction"></a>

## Options to Create Lambda functions #

There are several options for creating Lambda functions:

<ul>
  <li><a href="#AWSCLI">awscli (Command Line Interface program) calling nvm, npm, serverless</a></li>
  <li>Console GUI interactively (below)</li>
  <li>Serverless framework</li>
  <li><a href="#Terraform">Terraform</a></li>
</ul>

## Use GUI to Create a Hello World Lambda function #

According to https://www.scalyr.com/blog/aws-lambda-tutorial/


![aws-lambda-heading-1082x204](https://user-images.githubusercontent.com/300046/105657017-bd519f80-5e80-11eb-8226-46caf8d6c9c0.png)

1. Click “Create Function”.

   ![aws-lambda-create-1312x256](https://user-images.githubusercontent.com/300046/105657185-115c8400-5e81-11eb-90f7-cbe1e32a23ed.png)

1. Leave alone the default "Author from scratch".

1. PROTIP: For Function Name, construct one with metadata such as this example:

   <pre>
   learn1-hello-json-node43-v01
   </pre>

   * Prefix the function with a project name (such as “learn1”).
   * Use dashes or underscores instead of spaces (which are not allowed in the name).
   * Include the use case (“hello-json”) for Hello World receiving key-value pairs in a static JSON file.
   * Include in the name the language and its version (such as node43 for Node.js 4.3).
   * Specify a version number (v01) for different versions you want to keep simultaneously.
   (Git can keep history of alterations to the same version)
   <br /><br />

   #### Runtime #

1. Use default Runtime "Node.js 12.x".

   Runtime isn’t a choice that can be changed on this form.

   <amp-img width="380" height="161" alt="lambda runtimes 2016-06-03" src="https://cloud.githubusercontent.com/assets/300046/15778339/c5db0258-2952-11e6-8ac0-5b641024f760.jpg"></amp-img>

   Run-times exist within a
   <a target="_blank" href="http://aws.amazon.com/amazon-linux-ami/">Amazon Linux AMI</a>.
   More specifically,
   <a target="_blank" href="http://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html ">this page</a>
   describes the specific <strong>Linux</strong> server and utility libraries used in each region.
   (ami-f0091d91) in Oregon is <a target="_blank" href="amazon/amzn-ami-hvm-2015.09.1.x86_64-gp2">
      amazon/amzn-ami-hvm-2015.09.1.x86_64-gp2</a>
   with Linux kernel `4.1.19-24.31.amzn1.x86_64`.

   <a target="_blank" href="http://aws.amazon.com/amazon-linux-ami/2014.09-packages/">
      Linux AMI 2014.09 Packages - source RPMs</a>

   * AWS SDK for JavaScript version 2.3.8
   * Python images contain AWS SDK for Python (Boto 3) version 1.3.1.
   <br /><br />

   WARNING: These underlying versions can change at anytime, unannounced.
   So have a way of being notified if errors are detected in run logs.



1. Don't Change default execution role.

   Each AWS role defines the entitlements the function has within the AWS platform.

1. Don't change Advanced settings.

   ### Source of code #

   There are several ways to get programming code into AWS Lambda:

   <ul>
   <li><a href="#SelectBlueprint">Select Blueprint of Amazon-defined code - Hello JSON</a></li>
   <li><a href="#PasteS3">Paste inline code from Clipboard - Trigger from S3</a>.</li>
   <li><a href="#UploadZipSNS"> Upload a Zip file with library - SNS Email</a></li>
   <li><a href="#UploadFromS3"> Obtain code from S3</a></li>
   <li><a href="#GetFromGitHub">Get from GitHub (for Dynamo DB Pull)</a></li>
   </ul>

   Each of these are covered below. Click to go to that section.

1. Click "+ Add Trigger" to select from among AWS and partners in EventBridge.

<a name="SelectBlueprint"></a>

## Select Blueprint of pre-defined code - Hello  #

    <amp-img alt="lambda blueprint page forward 244x55" width="244" height="55" src="https://cloud.githubusercontent.com/assets/300046/15981923/dadb3122-2f39-11e6-803c-6b6db5873701.jpg" ></amp-img>

1. Click the Filter field and Type "Hello" to get a list.

   NOTE: Code associated with each blueprint is for a particular runtime.

1. Click on the name “Hello World” Nodejs function.

   NOTE: Amazon calls Lambda a "compute service" because programmers write code as discrete API handler functions responding to <strong>events</strong> such as an image being uploaded into S3.

1. Click the orange "Create Function". We will make changes to the default code later.


   <a name="SourceCode"></a>

   ### Source Code

   ![aws-lambda-code-1303x663](https://user-images.githubusercontent.com/300046/105657500-becf9780-5e81-11eb-93d7-56094e17a51e.png)

1. Click "index.js" within "Environment" vertical tab.

   <pre>'use strict';
   console.log('Loading function');
   exports.handler = (event, context, callback) => {
      //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('value1 =', event.key1);
    console.log('value2 =', event.key2);
    console.log('value3 =', event.key3);
    callback(null, event.key1);  // Echo back the first key value
    // callback('Something went wrong');
   };
   </pre>

   NOTE: The callback function is like a return statement.
   The callback value is the JSON file <strong>returned</strong> after asynchronous execution.

   Additional observations about Node.js JavaScript programming at:
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html
   * https://stackify.com/aws-lambda-with-node-js-a-complete-getting-started-guide/ to upload an image in S3.
   

   #### Description #

   PROTIP: In the description, put in a URL to a wiki ?

   Scroll down beyond the script to more input fields.


   #### Configuration

1. Click "Configuration" menu.

   ![aws-lambda-config-menu-212x477](https://user-images.githubusercontent.com/300046/105659393-e3c60980-5e85-11eb-80d1-921847347cb5.png)



   <a name="Handler"></a>

   #### Handler #

   NOTE: `index.handler` specifies the default index module.

   Leave the default alone for now.


   ### Role #

0. If empty, click on the Role field for a list:

   <amp-img width="359" height="248" alt="lambda roles 2016-06-03" src="https://cloud.githubusercontent.com/assets/300046/15778512/eaf94314-2953-11e6-9306-10755458fbee.jpg"></amp-img>

   The <strong>Execution role</strong> defines the permissions.

0. Select `Basic execution role` if your function does not access input data from S3, Dynamo DB, Kinesis, etc.

   This example is for performing CloudWatch actions on logs:

     <pre>
     { "Version": "2012-10-17", "Statement": [
       { "Effect": "Allow",
         "Action": [ "logs:*" ],
         "Resource": "arn:aws:logs:*:*:*" }
       ]
     </pre>

   NOTE: AWS IAM provides for roles based on specific resources.

0. Click Allow in the pop-up browser window and be returned to the Lambda definition.

   #### Memory #

   PROTIP: Initially select the lowest memory (128 MB) and add more as necessary.

   NOTE: Billing is in minimum 128 MB increments even if less memory was actually used.

   PROTIP: Keep input and output data of a known small size.
   Memory used to hold input and output data is included in the memory used.
   Uncertainties about the size of data used require a larger allocation.

   1,536 MB is the current maximum memory size.

   CAUTION: If a function needs more memory than allocated, it would fail,
   and AWS would still charge you for the allocated memory.


   #### Timeout #

   The longest allowed is <strong>5 minutes</strong>.

   But the maximum execution duration per request	is <strong>300 seconds</strong>.

   NOTE: AWS Lambda is a <strong>multi-tenancy</strong> environment
   much like what Salesforce.com provides developers.
   Different developers (who don't know each other) use the same physical server. So
   <a target="_blank" href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">
   limits</a> are necessary to keep one function to affect all others.


   #### VPC #

   Our initial example does not use the internet.


   ### Save and Test #

0. Click Next.

0. Review, then click <strong>Create function</strong>.



0. Click Test.

   ### Input Test Event #

0. Select from <strong>Sample event template</strong>. The default is "Hello World".

0. Click Save and test.

   On first invocation is a pop-up **Input test event**.
   This can later be obtained by Actions > Configure test event.


   #### Input test sample event data template #

   NOTE: Events provide input into the function.

0. Click Test. If no input data has been defined, the <strong>Input test event form</strong> appears in a pop-up.

   The default data that appears is from the Hello World sample event template.

   CAUTION: Selection of “Hello World” from the Sample event template
   <strong>replaces</strong> what has been saved for the current Lambda.

0. Scroll down the list to marvel at other options to trigger the function:

   <img align="right" width="256" height="586" alt="lambda test sample 2016-06-03" src="https://cloud.githubusercontent.com/assets/300046/16029891/d4d87eb6-31a9-11e6-9865-b31e90482a57.jpg">

   * API Gateway Authorizer
   * CloudFormation Create REPORT
   * SES Email receiving
   * CloudWatch Logs
   * SNS

   * <a href="#DynamoTrigger"> DynamoDB Update</a>
   * Cognito Sync trigger
   * Kinesis
   * <a href="S3Put">S3 Put</a>
   * S3 Delete

   * Alexa Start Session
   * Alexa End Session
   * Alexa Smart Home - Control
   * Alexa Intent - MyColorIs

   * Hello World
   * Mobile Backend
<br /><br />

0. Make a change to "value1".

   <pre>
{
  "key3": "value3",
  "key2": "value2",
  "key1": "value1"
}
   </pre>

   NOTE: Each Key-Value pair (KVP) is called a “structure” (two pieces of data together as a single object).
   Keys used to lookup values are also called “identifiers”.

0. Click <strong>Save</strong> to exit the modal dialog.   


   #### Action: Configure test event #

0. Return to the “Input test event” dialog by selecting from the <strong>Actions</strong>
   dropdown “Configure test event”.

0. Click <strong>Save and test</strong> to exit the modal dialog and
   run the function.


   #### Execution result #

0. Scroll down the page for the “Execution result” section.

   The result shows “value1” because of this code line:

   <pre>
callback(null, event.key1);  // Echo back the first key value
   </pre>

   Variable `event.key1` in the script refers to “key1” and its value “value1” in the JSON file above.

   ### CloudWatch Logs #

   Notice that output from the initial `console.log('Loading function');`
   does not appear in the run Log Output.

0. Click the <strong>Monitoring</strong> tab.

   <a name="MonitoringGraphs"></a>

   <amp-img width="600" alt="lambda onitoring screens 2016-06-03 1340x313" src="https://cloud.githubusercontent.com/assets/300046/15787783/66061b72-2981-11e6-88d0-ef06f298451f.jpg"></amp-img>

0. PROTIP: Mouse over a point on a line for more detail.

      * **Invocation count** measures the number of times a function has been invoked and billed
      (in response to an event or API call). This includes both successful and failed invocations, but not throttled attempts.

      * **Invocation duration** measures the elasped wall clock time from when the function code starts executing
       (as a result of an invocation) to when it stops executing. This is used in billing, rounded up to the nearest 100 milliseconds.
       The maximum data point value possible is the function timeout configuration.

     * **Invocation errors** measure the number of invocations that failed due to some error.
       Failed invocations may trigger a retry attempt that succeeds:

          * Handling exceptions such as context.fail(error).
          * Unhandled exceptions causing the code to exit the function since it can't handle the error.
          * Out of memory exceptions
          * Timeouts
          * Permission errors
          <br /><br />

      * **Throttled invocations** measures the number of Lambda functon invocation attempts not executed because
      the customer concurrent limit has been reached for the period (error 429).
   <br />

      NOTE: AWS Lambda only sends non-zero value metrics to CloudWatch.

0. Click <strong>View logs in CloudWatch</strong> link.
0. Click a Log stream entry to see the Event Data for it.

     Notice the time stamp such as
     "Last modified date2016-06-03T13:23:27.021+0000" is UTC/GMT time (London with no Summertime).

0. Click the line that begins with "REPORT RequestId:" to expand it to see the amount of memory actually used.

   <pre>
   REPORT RequestId: 0ddf5949-29b1-11e6-b8de-a70c7c47033a Duration: 1.00 ms Billed Duration: 100 ms Memory Size: 128 MB Max Memory Used: 36 MB
   </pre>

     These statistics also appear in the Summary pane.

     The amount charged (Billed) is in increments of <strong>100 milliseconds</strong>,
     even if the Duration is 1 ms.

     The number of Max Memory Used used can vary from one execution to
     another for different sizes of files handled by the function.

     QUESTION: Can the highest MB Used by the function be
     a metric shown in the list of functions (along with Max. memory)?

     QUESTION: Are charges for memory based on the maximum allocated or the amount actually used?

0. In the CloudWatch Console, click "Lambda" under the Metrics category on the left menu.

   #### CloudWatch Log stream items #

0. Click on a log stream item.  Notice the "Loading function" there.

0. Click on the Lambda Management Console to return.

   PROTIP: AWS has a free tier of several gigabytes of log storage.
   Set the log retention time to the amount of time to fit your budget.


## Programming model #

The <a target="_blank" href="http://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">
full programming model for Lambdas</a>
consists of:

   * Handlers (shown above)
   * Logging (shown above)
   * Context Objects (next)
   * <a href="#Exceptions">Exceptions</a>

<a name="ContextObject"></a>

### Context objects #

0. Uncomment the first console.log with stringify and
   add these console.log lines from <a target="_blank" href="http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html">
   docs about the Context object</a>:

   <pre>
   'use strict';
   console.log('Loading function');
   exports.handler = (event, context, callback) => {
      console.log('Received event:', JSON.stringify(event, null, 2));
      console.log("context.awsRequestId: "  + context.awsRequestId);
      console.log("context.logGroupName: "  + context.logGroupName);
      console.log("context.functionName: "  + context.functionName);
      console.log("context.logStreamName: " + context.logStreamName);
      console.log('context.getRemainingTimeInMillis: ', context.getRemainingTimeInMillis());
      console.log("context.identity: "      + context.identity);
      console.log('clientContext =', context.clientContext);
      if (typeof context.identity !== 'undefined') {
          console.log('Cognito identity ID =', context.identity.cognitoIdentityId);
      }    
      callback(null, event.key1);  // Echo back the first key value
   // callback('Something went wrong');
   };
    </pre>

0. Run again and view the CloudWatch log.

   * The RequestId is shown in the log without being asked.
   * The logGroupname is the name of the function, such as "/aws/lambda/learn1-context-node43-v01".
   * The functionName does not include the "/aws/lambda" path.
   * The logStreamName is the input, such as "2016/06/13/[$LATEST]f64505ba061e4ecea26d59abeb513f72".
   * The RemainingTime is milliseconds before timeout occurs. Kinda like "headroom".
   * The identity is unidentified.


<a name="Exceptions"></a>

## Exception handling #

See http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-mode-exceptions.html

Functions context.done(), context.succeed(), and context.fail()
have been deprecated in favor of the callback() function.
These v0.10.36 context functions still work in v4.3.2, but are no longer recommended.

0. Change AWS_RUNTIME value to nodejs in the .env file.


<a name="S3Put"></a>

## Create Event Source S3 #

See https://github.com/awslabs/lambda-refarch-fileprocessing

This is an example of a <strong>"push"</strong> model where Lambda is triggered by an event external to it.

Prior to AWS Lambda, servers had to "ping" S3 frequently to identify when a file has been added.

The <a target="_blank" href="https://qwiklabs.com/focuses/preview/2369">
   Introduction to AWS Lambda course in qwiklabs.com</a>
   provides step-by-step instruction on creating an Lambda Event Source triggered
   by an upload to S3 bucket.

0. Open another tab on your browser to create a bucket in
   <a target="_blank" href="https://console.aws.amazon.com/s3/home?region=us-west-2#">
   S3</a> with a name (such as "lambdabkt001").

   WARNING: Bucket names must be unique among all S3 users.

   <a name="Regions"></a>

   TUTORIAL NOTE: All links on this page are for Oregon region us-west-2.
   <amp-img width="273" height="259" alt="lambda regions 2016-06-03 " src="https://cloud.githubusercontent.com/assets/300046/15779042/53daf6d6-2957-11e6-8420-140090d9f799.jpg"></amp-img>

   For now, no logging, versioning, replication, tags, etc. for the bucket.


   #### Create Lambda Function #

   On Dec 9, 2014 Dominick Peluso talks about his Lambda that, when it detects an image has been upload,
   it uses ImageMagick to create a thumbnail in S3, then sends an email.
   <amp-youtube data-videoid="_-hnJC4IXJI" layout="responsive" width="480" height="270"></amp-youtube>
   <br /><br />

0. <a target="_blank" href="https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/create?step=1">
   On the AWS Console, select Services, select Lambda, click Get Started Now</a>

0. Click the <strong>All languages</strong> drop-down. The default is Node.JS 4.3.

   But also available are Java 8, Node.JS 0.10, Node.JS 4.3, Python 2.7.

   COOL: With Lambda developers don't need to provision servers and install and update JVM run-time software.
   Servers accepting Lambda requests are Node JS, Python, and JVM run-times that run Lambda functions.

0. If you want to use, for example, blueprint "s3-get-object",
   type "s3" in the Filter field to select a <strong>blueprint</strong> (sample configurations of event sources and Lambda functions).

   Alternately, to provide your own script, scroll down to click <strong>Skip</strong>.  

   <a name="EventSources"></a>

0. S3 is the default among event sources:

   <amp-img width="468" height="252" alt="lambda event sources 2016-06-03 " src="https://cloud.githubusercontent.com/assets/300046/15777674/6e6822e8-294e-11e6-93e3-cb3d7188fb88.jpg"></amp-img>

0. Event Type "Object Created (All)" rather than specific action:

   <amp-img width="600" height="178" alt="lambda event type 2016-06-03" src="https://cloud.githubusercontent.com/assets/300046/15778056/072ce58e-2951-11e6-8eec-43766a136525.jpg"></amp-img>

0. Click Next. For now, no file prefix or suffix specification.

   ### Configure function #

   The default Description is supplied from the blueprint.

   <a name="Runtimes"></a>

0. Select "Node.j2 4.3" for Runtime.

   <amp-img width="380" height="161" alt="lambda runtimes 2016-06-03" src="https://cloud.githubusercontent.com/assets/300046/15778339/c5db0258-2952-11e6-8ac0-5b641024f760.jpg"></amp-img>

   Sample code for the language version selected appears. NOTE: Yes, that's 2006:

   <pre>
   let aws = require('aws-sdk');
   let s3 = new aws.S3({ apiVersion: '2006-03-01' });
   </pre>

   Alternately:

   * If you selected <strong>Edit code inline</strong>, paste code copied from a Gist or GitHub.
   * If you selected Upload a ZIP file, navigate to the file on your machine.

     WARNING: Each upload is limited to under 50 MB (compressed), 10 MB in uploads.

   * If you selected Upload a file from Amazon S3, paste in the bucket ID.

   PROTIP: Install the AWS Eclipse plugin to author and deploy Lambda functions for Java and Node.js.

   NOTE: The file holding the code is <strong>index.js</strong>.

0. The Event Source Type would be "S3".
0. The Event Type would be "Object Created (All)".

0. Leave Handler as "index.handler".

   "index" Lambda calls a <strong>module</strong> in error messages.

0. The <strong>Execution role</strong> defines the permissions.

   <amp-img width="359" height="248" alt="lambda roles 2016-06-03" src="https://cloud.githubusercontent.com/assets/300046/15778512/eaf94314-2953-11e6-9306-10755458fbee.jpg"></amp-img>

   If you are usign S3, select `* S3 execution role`. The asterisk (*) designates the default selection.

   Alternately, select `Basic execution role` if your function does not need to input data.

0. Click View Policy Document for accessing S3. An example:

   <pre>
   {
     "Version": "2012-10-17",
     "Statement" : [
     { "Effect" : "Allow",
       "Action" : [ "logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutLogEvents" ],
       "Resource" : "arn:aws:logs:*:*:*"
     },
     { "Effect" : "Allow", "Action" : [ "s3: GetObject" ],
       "Resource" : "arn:aws:s3::: your-bucket-name"
     }
   ]
 }
   </pre>

0. Click Allow in the IAM window opened for you to accept the role name suggested.

0. PROTIP: Start with 128 MB of memory (the lowest), and increase it later.

0. Set Timeout to 5 seconds.

0. No VPC during tutorial runs. Click Next.

0. Click Enable event source until testing has occurred. Click Create function.


   ### Test Trigger S3 #

0. Switch back to the S3 tab.
0. Click on the bucket link.
0. Click Upload tab.
0. Click Add Files.
0. Select any file from your local machine's hard drive.
0. Click Start Upload.

   Done.


### Test Trigger Custom #

0. In the Lambda Functions screen, select <strong>Actions</strong> since Test should not be clicked until it's configured.

   <amp-img width="264" height="207" alt="lambda test actions 2016-06-03" src="https://cloud.githubusercontent.com/assets/300046/15787037/1c0e00e2-297d-11e6-8933-c3ed031e6768.jpg"></amp-img>

0. The default data that appears is from the Hello World sample event template. But there are others:

   <amp-img width="603" alt="lambda test sample 2016-06-03" src="https://cloud.githubusercontent.com/assets/300046/15787217/3f884c66-297e-11e6-9e54-9c821cecc4a2.jpg"></amp-img>

0. If your function does not use test data, save an empty set of JSON curly braces:

   <pre>
   { }
   </pre>

0. Click Test. Scroll to the bottom of the screen to see the Execution result.


<a name="DynamoTrigger"></a>

<a name="CreateLambda"></a>

## Create Lambda function with no input data for API #

0. In an internet browser go to <a target="_blank" href="https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions">
   Services > Compute > Lambda<br />
   https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions</a>

0. [Create an Amazon Lambda function](/aws-lambda/) to work with if you haven't already.
0. Click on the name of a Lambda function to expose using an API endpoint.

   Notice a set of numbers and letters (such as tsdwtdl0r1) has been assigned next to your Lambda name.

0. Click the API endpoints tab.
0. Click Add API endpoint.
0. Select API Gateway in the pop-up dialog.

   QUESTION: Why is this necessary if there is only one choice?

0. Change the Resource Name (such as `/faq`) to define part of the URL path.
0. The initial Method must be GET.
0. Change Deployment stage to `test`.
0. Select Open for Security (no tracking by access key or authentication with IAM).

   The screen before clicking.

   <amp-img width="400" alt="lambda api endpoint summary 2016-06-03 400x356" src="https://cloud.githubusercontent.com/assets/300046/15801299/019fc322-2a4e-11e6-96cb-86e863aa4adc.jpg"></amp-img>

0. Click Submit to have a URL assigned, such as:

   https://tsdwtdl0r1.execute-api.us-west-2.amazonaws.com/prod/faq


## Dynamo DB Pull #

This is an example of a "pull model" where Lambda <strong>watches</strong> a data stream
(DynamoDB or Kinesis streams).
A change event triggers additional actions.

https://www.youtube.com/watch?v=_-hnJC4IXJI

To build mobile back-ends that retrieve and transform data from Amazon DynamoDB:

   * https://github.com/abalone0204/serverless-demo-with-dynamodb-node

* https://www.youtube.com/watch?v=TuGyyTXPQ-U1
How to use AWS API Gateway to expose AWS DynamoDB database backend
by mattua

* http:// blog.import.io/ post/ using-amazon-lambda-and-api-gateway

* https://www.youtube.com/watch?v=XByPxb_VvpY
   AWS re:Invent 2015 | (DEV303) Practical DynamoDB Programming in Java


## Kinesis streams #

Server-less processing of streaming data using Amazon Kinesis.



## Python program #

The most basic lambda in Python:

   <pre>
def lambda_handler(event, context):
  return "Hello World!"
   </pre>

The most basic lambda in Java:

   <pre>
package example;

import com.amazonaws.services.lambda.runtime.Context;

public class Hello {
    public String lambdaHandler(String event, Context context) {
        return "Hello World!";
    }
}
   </pre>


## AWS CLI #

Lambdas can be invoked from a command-line window or shell script.

This example provides an input.txt file containing JSON text:

   <tt>
   aws lambda invoke-async \-\-function-name learn1-hello-world1-node43-v01
   \-\-region us-west-2 \-\-invoke-args input.txt \-\-profile adminuser
   </tt>

   Return:

   <tt>
   {
      "Status": 202
   }
   </tt>

### CloudWatch Command-line Tool #

NOTE: CloudFront logs can also be read using command-line tool
<a target="_blank" href="https://github.com/jorgebastida/awslogs">awslogs</a>.



<a name="CF"></a>

## CloudFormation Deploy #

https://github.com/jorgebastida/gordon
λ Gordon is a tool to create, wire and deploy AWS Lambdas using CloudFormation.

http://gordon.readthedocs.io/en/latest/
provides examples in Java, JavaScript (for Node), and Python.


## Create EC2 instance from Lambda #

An example to start an EC2 instance: 

{% highlight text %}
var AWS = require('aws-sdk');
exports.handler = function(event, context) {
   var ec2 = new AWS.EC2({region: 'us-east-1'});
   ec2.startInstances({InstanceIds : ['i-0114833f8ffc9151c'] },function (err, data) {
      if (err) console.log(err, err.stack);
      else console.log(data);
      context.done(err,data);
   });
};
{% endhighlight %}


## In-built libraries #

### ImageMagick #

ImageMagick is built-in to Lambda

   * http://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html
    mentioned among available libraries.

    * https://www.npmjs.com/package/imagemagick
      wrapper around the imagemagick CLI.

## Use of /tmp folder #

## AWS Lambda projects shared #

Some Lambda developers share their stories:

Lena and Sergey Barinova
<a target="_blank" href="http://www.bebetterdeveloper.com/coding/architecture/serverless-system-architecture-using-aws.html">
blogged about how she used AWS, React, and Node.js</a> to build her
<a target="_blank" href="http://price-tracker-website.s3-website-us-west-2.amazonaws.com/">
Price Tracker website hosted in Amazon S3</a>.
Code for it is exposed at
<a target="_blank" href="https://github.com/LenaBarinova/PriceTracker">
https://github.com/LenaBarinova/PriceTracker</a>, which include Gulp tasks and Mocha tests.
Concern is expressed about the latency involved in data retrieval from DynamoDB.
   <amp-img width="607" height="419" alt="pt-architecture-607x419-75"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16328841/4c624004-399b-11e6-9658-97c706d33749.jpg"></amp-img>
   <br /><br />

John Stamper, AWS Solution Architect,
wrote
<a target="_blank" href="https://aws.amazon.com/blogs/compute/fanout-s3-event-notifications-to-multiple-endpoints/">
Fanout S3 Event Notifications to Multiple Endpoints</a> 24 JUL 2015
<amp-img alt="lambda fanout-S3-usecase-diagram-625x355-75" width="625" height="355"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16329098/68d6d194-399d-11e6-88af-be75785a80c5.jpg"></amp-img>
<br /><br />


Daniele Stroppa, AWS Solution Architect,
<a target="_blank" href="https://aws.amazon.com/blogs/compute/continuous-integration-deployment-for-aws-lambda-functions-with-jenkins-and-grunt-part-2/">
described how he uses Jenkins and Grunt to deploy AWS Lambdas</a>  09 JUL 2015.


David Barnett wrote
<a target="_blank" href="http://www.rightbrainnetworks.com/blog/aws-lambda-tutorial-playing-math-games-lambda/">
AWS LAMBDA TUTORIAL: PLAYING MATH GAMES WITH LAMBDA</a>
May 24 2016

     * Visualizing the Mandelbrot sets
     * Playing Monte Carlo simulations
     * Visualizing Apache Spark and Databricks


Russ Matney:
<a target="_blank" href="http://russmatney.com/techsposure/what-i-am-using-aws-lambda-for/">
What I am using AWS Lambda for</a>

      * gif-to-mp4
      * create-timelapse
      * file-to-png
      * pngs-to-mp4
      * mp4s-to-timelapse
      * upload-to-vimeo


## AWS Lambda Tools #

* <a target="_blank" href="https://github.com/Netflix/bless">
     BLESS from Netflix</a> is an SSH Certificate Authority that runs as a AWS Lambda function in an isolated AWS account with restricted IAM roles
     to sign short-lived ssh public keys. Written in Python.

* https://www.npmjs.com/package/aws-lambda-toolkit


## Social #

\#AWSLambda is the Twitter tag.


* http://docs.aws.amazon.com/lambda/latest/dg/welcome.html


## Resources:

* https://blog.fugue.co/2016-05-05-architecting-a-serverless-web-application-in-aws.html

* https://github.com/dwyl/learn-aws-lambda

* https://www.jayway.com/2015/11/07/error-handling-in-api-gateway-and-aws-lambda/

* http://codurance.com/2016/05/11/aws-lambdas/

* https://stelligent.com/2016/03/23/serverless-delivery-bootstrapping-the-pipeline-part-2/

* https://www.youtube.com/watch?v=fXZzVzptkeo

@johncmckim  John McKim's Express to AWS Lambda series on Medium:

   * <a target="_blank" href="https://medium.com/@johncmckim/express-to-aws-lambda-part-1-a057096abe34#.fmuh3gr9e">
     Getting Started</a>

   * <a target="_blank" href="https://medium.com/@johncmckim/express-to-aws-lambda-part-4-22257f71385f#.hqscogos0">
   Authentication and Authorisation</a>

* https://www.npmjs.com/package/vandium
   Vandium AWS Lambda wrapper for Node.js

Justin Yoo Readify ‏@readify

## Trivia #

* The <a target="_blank" href="https://www.w3.org/TR/REC-html40/sgml/entities.html">
   HTML 4 character entity references</a> for the Greek capital
   and small letter lambda are "&#923;" (&amp;\#923) and "&#955;" (&amp;\#955).

* The Unicode numbers for lambda are U+039B and U+03BB.


## Tutorial Rock Stars #

Danilo Poccia (@danilop of Luxembourg, http://danilop.net/),
   Technical Evangelist at Amazon Web Services

   * began February 2016 writing
   <a target="_blank" href="https://www.manning.com/books/aws-lambda-in-action">
   AWS Lambda in Action: Event-driven serverless applications</a>
   for Spring 2017 (estimated) publication as
   ISBN 9781617293719 475 pages (estimated).
   Interact with
   <a target="_blank" href="https://forums.manning.com/forums/aws-lambda-in-action">
   other devs n the Forum</a>
   and with
   <a target="_blank" href="https://eventdrivenapps.com/#livedemos">
   demos at eventdrivenapps.com</a> from the
   <a target="_blank" href="https://github.com/danilop/AWS_Lambda_in_Action">
   code in GitHub</a>.

Eric Hammond

   * published several blog posts at
   <a target="_blank" href="https://www.alestic.com/">alestic.com</a>.

Vyon Nagrani, AWS Lambda Sr. Product Manager,

   * gave a very high level webinar video
   <a target="_blank" href="https://www.youtube.com/watch?v=dCv0gZLjcNY/">
   AWS August Webinar Series - Building Serverless Backends with AWS Lambda and Amazon API Gateway
   14 Oct. 2015</a>


   }, "Region" : { "Value" : { "Ref" : "AWS:: Region" }, "Description" : "The region this template was launched in." } } }

Typer Cross

   * wrote an ebook "AWS Lambda: The Ultimate Guide To Serverless Microservices - Learn Everything You Need To Know About Microservices Without Servers!"
   I do not recommend this at all.
   The title is a total lie as the author offers no comments to the code copied from elsewhere.

   When code is copied from Kindle, line endings are removed and everything appears as a single line.


## AWS People #

* Tim Wagner, @timallenwagner,
   General Manager of AWS Lambda at Amazon,
   Apr 10, 2015:
   <amp-youtube data-videoid="copO_JQQsBs" layout="responsive" width="480" height="270"></amp-youtube>

  Lambda was launched publicly November, 2015.
  Can run 100 Lambdas at the same time by default.
  Added Synchronous (Request/Response).

* Ajay Nair @ajaynairthinks is Lead Product Manager for AWS Lambda

* Michael LaFrenier @MLaFrecruiter Talent Sourcer and Executive Recruiter for Amazon Web Services



<a name="Terraform"></a>

### Terraform



## More on Serverless #

This is one of a series on Serverless computing

{% include serverless_links.html %}
