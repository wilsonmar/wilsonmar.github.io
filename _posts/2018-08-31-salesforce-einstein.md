---
layout: post
title: "Salesforce Einstein"
excerpt: "Artificial Intelligence built into the Saleforce you already have"
tags: [salesforce]
file: salesforce-einstein.md
image:
# feature: sf-ohana-1900x500-178173.jpg
  feature: https://user-images.githubusercontent.com/300046/43407734-bd6303fe-93dc-11e8-87df-302ddbc274ff.jpg
  credit: Salesforce
  creditlink: https://trailhead.salesforce.com/trailblazers
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<img align="right" src="https://cdnjs.cloudflare.com/ajax/libs/design-system/2.6.2/icons/utility/einstein_120.png">
Salesforce users are able to enjoy the productivity gains from advances in AI quicker and easier than most other systems because AI is being built under the UI users are already familiar with.

## The Salesforce advantage in AI

Unlike many other companies which have customer-built systems, building AI capabilties requires hiring expers, then integrating AI into existing systems,
Salesforce users already have data structured and stored for use by AI.

Einstein can be "simply" added to process existing data. For example, text users enter into a service request form can be designated for analysis. The Einstein Intent API processes the text to automatically determine how to routed the request to the correct department.

CEO Benioff has also been a lead investor in machine translation company <a target="_blank" href="http://www.linkedin.com/company/1617147">Cloudwords</a> since its seed funding days.

Shubha Nabar (Senior Director, Software Engineering) is the Einstein boss at Salesforce. See her talk Mar 7, 2017 [18:58]:
<amp-youtube data-videoid="_wKOk3Gtmac" layout="responsive" width="480" height="270"></amp-youtube>


## API Endpoint

Salesforce purchased 200 data science people by its acquisition of Metamind. 
Thus, "api.metamind.io" was the previous endpoint to APIs, which is now:

   <a target="_blank" href="https://api.einstein.ai">https://api.einstein.ai</a>

To get an RSA Token used to make service calls:

   <a target="_blank" href="https://api.einstein.ai/signup">https://api.einstein.ai/signup</a>

Save that in a safe place.

Use your key to get a token at: 

https://www.youtube.com/watch?v=0ryXVwJTWxQ
Salesforce Einstein Intent API deep dive with Daniel Peter
https://github.com/salesforceidentity/jwt/blob/master/JWT.apex

https://www.youtube.com/watch?v=YDw1GieW4cw
Auto-Machine Learning: The Magic Behind Einstein
by Salesforce Developers


The Einstein Intent API <strong>categorizes</strong> unstructured text into <strong>user-defined labels</strong> to better understand what users are trying to accomplish. Use this API to analyze text from emails, chats, or web forms to: Determine which products prospects are interested in, and send customer inquiries to the appropriate sales person. Route service cases to the correct agents or departments, or provide self-service options. Understand customer posts to provide personalized self-service in your communities.


## Einstein Offerings

<a target="_blank" title="sf-einstein-apps-1131x532-75871.jpg" href="https://user-images.githubusercontent.com/300046/47138815-a66e7c80-d277-11e8-85cc-c9eda708b0d9.jpg"><img alt="sf-einstein-apps-571x267-30100" width="571" src="https://user-images.githubusercontent.com/300046/47138098-bab17a00-d275-11e8-8ef8-2febe50635c0.jpg"></a>

Based on <a target="_blank" href="https://www.salesforce.com/products/einstein/features/#platform-scroll-tab?d=cta-body-promo-16">this Einstein: AI in the Salesforce Platform</a> Dec 15, 2016 teaser music video followed by the high-level Marketing pitch breakout session at Dreamforce '16:
<amp-youtube data-videoid="dYX4SWPrZzo" layout="responsive" width="480" height="270"></amp-youtube>
<br />

The "AI-Powered" Einstein features listed in the <a target="_blank" href="https://www.salesforce.com/editions-pricing/sales-cloud/">Sales Cloud pricing sheet</a> at additional cost for Enterprise+ (not Pro): <a target="_blank" href="https://a.sfdcstatic.com/content/dam/www/ocms-backup/assets/pdf/datasheets/DS_SalesCloud_EdCompare.pdf">PDF</a>

   * <a href="#LeadScoring">Lead Scoring</a>
   * <a href="#OpportunityScoring">Opportunity Scoring</a>
   * <a href="#OpportunityInsights">Opportunity Insights</a>

   * <a href="#AccountInsights">Account Insights</a>
   * <a href="#ActivityCapture">Activity Capture</a>

   * <a href="#AutomatedContacts">Automated Contacts</a>
   * <a href="#Inbox">Inbox (Google Gmail)</a>
   * <a href="#SalesAnalytics">Sales Analytics</a>

   * <a href="#EinsteinForecasting">Einstein Forecasting</a> (prediction)

   * <a href="#EinsteinObjectDetection">Object Detection</a> (image recognition)
   * <a href="#EinsteinBots">Bots</a>

<hr />

<a name="EinsteinForecasting"></a>

<strong>Einstein Prediction Builder</strong> 
makes predictions about almost any field in Salesforce with just a few clicks.
For example, it predicts the likelihood that customers show up for a reservation, so you can prioritize which customers to call for confirmation. This enables more appropriate scheduling of restaurant staff, fill more seats, and make more diners happy.

<a name="LeadScoring"></a>

<strong>Einstein Lead and Opportunity Scoring</strong>
automatically prioritizes the leads and opportunities most likely to convert and close based on history and past deals.

<a name="OpportunityScoring"></a>
<a name="OpportunityInsights"></a>
<a name="AccountInsights"></a>

<strong>Einstein Account and Opportunity Scoring/Insights</strong>
shows key business developments on accounts and opportunities. Know whether or not a deal is likely to close by identifying customer sentiment, competitor involvement, and company updates.

<a name="ActivityCapture"></a>
<a name="AutomatedContacts"></a>

<strong>Einstein Activity Capture and Automated Contacts</strong>
to automatically capture data and add new contacts so you can spend less time on data entry and more time selling.

<a name="Inbox"></a>

<strong>Salesforce Inbox</strong>
extends the full power of the Salesforce platform to email and calendar and never miss a buying signal.

<a name="SalesAnalytics"></a>

<strong>Sales Analytics</strong>
to quickly gain pipeline visibility, track team performance, and uncover opportunities to grow business.

https://www.youtube.com/watch?v=R07CtsAmrd0
Einstein Analytics Overview Jun 14, 2017 [1:30]

### Image classification

<a name="EinsteinObjectDetection"></a>

https://developer.salesforce.com/events/webinars/einstein-object-detection

https://appexchange.salesforce.com/listingDetail?listingId=a0N3000000Dq45IEAR


<a name="EinsteinBots"></a>

https://developer.salesforce.com/events/webinars/build-smarter-apps-einstein-platform-services

https://venturebeat.com/2018/09/19/salesforce-announces-einstein-voice-a-voice-assistant-for-enterprises/

https://www.youtube.com/watch?v=1l6D4TWnDq0
Introducing Einstein Voice Oct 16, 2018


### Salesforce Social Studio Vision

Salesforce Social Studio integrated with Einstein Vision was one of the first Einstein capabilities released.
It enables users to "visually listen" for attributes about an image, such as detecting a brand logo or that of its competitor in photos -- in order to learn more about the subjects' lifestyles and preferences.

Trailhead Projects:

   * <a target="_blank" href="https://trailhead.salesforce.com/projects/predictive_vision_apex">Quick Start: Einstein Image Classification</a>

   * <a target="_blank" href="https://trailhead.salesforce.com/projects/build-a-cat-rescue-app-that-recognizes-cat-breeds">Build a Cat Rescue App That Recognizes Cat Breeds</a>


### Einstein Language

"Einstein Language" builds natural language processing (NLP) into apps and unlock powerful insights within text. Einstein Language contains two NLP services: Einstein Intent and Einstein Sentiment APIs:

   * The Einstein Sentiment API <strong>classifies</strong> text into <strong>positive, negative, and neutral</strong> to understand what the words people use can tell us about how they’re feeling. Use this API to analyze emails, social media, and text from chat to: Identify the sentiment or emotion in a prospect’s emails to trend a lead or opportunity up or down. Provide proactive service by helping dissatisfied customers first or extending promotional offers to satisfied customers. Monitor how people perceive your brand across social media channels, identify brand evangelists, and note customer satisfaction.

## Einstein Bots

Create one:

1. In the "Quick", type "bots" to click "Einstein Bots".
1. Toggle "Einstein Bots" on.
1. Click "I'm authorized by my company to accept these terms."
1. Click "Try Einstein".
1. Click "New" for the Welcome page.
1. Click Next.
1. Enter Bot name and description.

## Einstein Dataflow

https://help.salesforce.com/articleView?id=000267071&type=1

Users with the "Edit Wave Analytics Dataflows“ user permission and an organization with <a target="_blank" href="https://help.salesforce.com/articleView?id=bi_integrate_understand_enable_replication.htm&type=5">replication</a> enabled.

## Salesforce + IBM Watson

The pool of top people who can build AI is limited, and so expensive.
https://www.linkedin.com/pulse/einstein-my-dear-watson-predicted-salesforce-joins-ibm-cummins/

So Salesforce has partnered up with IBM.<a target="_blank" href="https://developer.salesforce.com/blogs/2018/09/discover-whats-next-for-ibm-at-dreamforce-2018.html">*</a>

https://github.com/watson-developer-cloud/salesforce-sdk
is a Salesforce library for Salesforce Apex to communicate with IBM Watson Assistant (Conversations) using REST APIs.
See http://www.ibm.com/watson/developercloud/

IBM introduced a service which automatically detects bias and explains how AI makes decisions—as the decisions are being made—runs on the IBM Cloud. IBM is open sourcing their AI bias detection and mitigation toolkit.
https://trailhead.salesforce.com/en/projects/surface-data-from-ibm-watson-discovery-in-salesforce
Surface Data from IBM Watson Discovery in Salesforce

<hr />

## Get an Einstein org

1. Spin up an

   https://developer.salesforce.com/promotions/orgs/analytics-de

1. Verify account in your email.
1. Click the Object Manager tab.

   Note two new custom objects: AcquiredAccount__c and OpportunityHistory__c.

Einstein Analytics - Setting up Apps Sep 25, 2017 [11:00]:
<amp-youtube data-videoid="49-buxIS3Tw" layout="responsive" width="480" height="270"></amp-youtube>

## Get an Einstein Platform Services Account

1. Use a Google Chrome browser. The Download Key button is only supported in the most recent version of Google Chrome.

1. Create an Einstein Platform Services APIs account and download keys associated with that account. 

   https://api.einstein.ai/signup

1. Choose whether to sign up using the Salesforce or Heroku account you already have:
   Click "Salesforce" for a new Lightning org, such as under this URL:

   https://na31.lightning.force.com/lightning/setup/SetupOneHome/home

1. Wait for email "Welcome to Salesforce Einstein Platform Services".
1. Click the blue "Sandbox Users". Select a Salesforce certificate: Production Users Sandbox Users.
1. At https://test.salesforce.com/, login to your Einsteain org account.

   ### Reset private key

1. At https://api.einstein.ai/reset click "Reset my private key".
1. Provide your email.
1. In your email inbox look for subject "Finish resetting your Einstein account’s public key".
1. In the email, click "reset you private key".

   If you see "{"message":"During update, principal name cannot be null or empty"}"

1. Click "Download Key".
1. On you machine, rename "einstein_platform.pem" with a file named containing your email and date, such as:

   einstein_platform.wilsonmar_gmail_com.20180804.pem

   On the activation page, if you’re using Chrome, click Download Key to save the key locally. The key file is named einstein_platform.pem. If you’re using any other browser, cut and paste your key from the browser into a text file and save it as einstein_platform.pem.

1. Read docs at https://metamind.readme.io/v1/docs

   NOTE: Keys are like a password. But it's based on key pairs. It's attached to every request.

## Generate OAuth Token

This is <a target="_blank" href="https://metamind.readme.io/v1/docs/generate-an-oauth-token">done within code</a>, 

   * To clone the JWT repo by using command:

   <pre>git clone https://github.com/salesforceidentity/jwt</pre>

   * To clone the Apex code repo by using command:

   <pre>git clone https://github.com/MetaMind/apex-utils</pre>

But to do it manually:

1. https://api.einstein.ai/token
1. Type in your account's email address.
1. Click "Choose File" and select the einstein_platform...pem (private key) downloaded.
1. Click "GET TOKEN".
1. Double-click the Token and press command+C to copy it to your Clipboard.

Now paste the Token in your API form.


<hr />

## Internal tools

<a target="_blank" href="https://salesforce.wd1.myworkdayjobs.com/en-US/External_Career_Site/job/California---San-Francisco/Lead-or-Principal-Software-Engineer---Personalization-Platform--Philanthropy-Cloud-Einstein_JR10580">Job Descriptions for Machine Learning Engineer</a> reveal the technologies used behind the scenes:

* <a target="_blank" href="https://predictionio.apache.org">Apache PredictionIO</a> to train and serve models

   It can be installed as a full machine learning stack, bundled with Apache Spark, <a target="_blank" href="https://spark.apache.org/mllib/">MLlib</a> (Spark machine learning library), <a target="_blank" href="https://hbase.apache.org/">Apache HBase</a> (Hadoop database), Spray and Search engine Elasticsearch (Elastic Stack), which simplifies and accelerates scalable machine learning infrastructure management.

* <a target="_blank" href="https://wilsonmar.github.io/kubernetes">Kubernetes</a> for scaling services

* JVM based languages (Java, Scala) (no Python?) because ... 

* <a target="_blank" href="https://spark.apache.org/docs/1.2.2/ml-guide.html">SparkML</a>, Google Tensorflow, and <a target="_blank" href="https://mahout.apache.org/">Apache Mahout</a> (linear algebra Scala DSL & native solvers for CPU/GPU/CUDA acceleration) machine learning algorithm libraries for <strong>Personalization</strong> 

* Spark and <a target="_blank" href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark.html">Amazon EMR (Elastic Map Reduce)</a> on AWS cloud to process massive amount of data in large-scale data pipelines and computation systems

* Model feature engineering by collecting and processing both batch and streaming data (<a target="_blank" href="https://wilsonmar.github.io/wilsonmar/kafka">Kafka</a>)

* Various machine learning and deep learning techniques for targeted goals to implement and fine-tune, new 
<strong>personalization algorithms</strong>

* Responsive (RESTful) web services that serve <strong>contextual recommendations</strong>

* Offline experimentation and online <strong>A/B tests</strong>

* Systems to analyze and <strong>discover insights</strong> from user behaviors

* Machine learning statistics behind techniques such as collaborative filtering, co-occurrence matrix, and natural language processing (NLP)

## People

Shubha Nabar, Director, Data Science (SalesforceIQ):

   * VIDEO: <a target="_blank" href="https://www.youtube.com/watch?v=wrWADRbjmS4&t=2m11s">at Opening Keynote Oct 5, 2016</a> [5:16]


## Learning resources

https://metamind.readme.io/

   * https://metamind.readme.io/docs/introduction-to-the-einstein-predictive-vision-service

   * https://metamind.readme.io/docs/intro-to-einstein-language


Trail: https://trailhead.salesforce.com/trails/get_smart_einstein
Get Smart with Salesforce Einstein</a> [5 hrs 55mins]

   * https://trailhead.salesforce.com/modules/ai_basics
   Artificial Intelligence Basics
   200 points

   * https://trailhead.salesforce.com/trails/get_smart_einstein/modules/einstein_intent_basics
   Einstein Intent API Basics [1 hr 25 mins]

https://metamind.readme.io/docs/intro-to-einstein-language
Einstein Platform Developer Guide


## Community

https://developer.salesforce.com/forums?communityId=09aF00000004HMGIA2#!/feedtype=RECENT&dc=Predictive_Services&criteria=ALLQUESTIONS

Official:Einstein Analytics for Partners (SIs and ISVs). 

For SI Partners: 

   * SUCCESS COMMUNITY group EINSTEIN ANALYTICS http://sfdc.co/beQedN 
   * SI PARTNER GUIDE http://sfdc.co/AC_Partner_Guide 
   * DEMO ORGS for PARTNERS (A) Add EINSTEIN ANALYTICS/APPS to an Existing ORG or Extension of Expired Demo ORG - OPEN A TICKET: (Partner Community > Support tab > New Request > License Request (under the Salesforce Technology) section) 
   * (B) Create NEW Demo ORG Einstein Analytics is available in Partner Developer Edition, Partner Test Enterprise Edition, and Consulting Orgs, which may be created via the Environment Hub. 
   * https://partners.salesforce.com/s/education/general/Environment_Hub Einstein Analytics - Org Enablement Guide 
   * https://partners.salesforce.com/06930000005LUZ7 Use this guide to enable new users to access Analytics 
   <br /><br />

For ISV Partners: Einstein Analytics for ISVs Getting Started Guide https://partners.salesforce.com/06930000005LUZM

## Learning

https://trailhead.salesforce.com/en/users/00550000006FDjQAAW/trailmixes/einstein-analytics
Phil Choi's Trailmix for Einstein Analytics

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
