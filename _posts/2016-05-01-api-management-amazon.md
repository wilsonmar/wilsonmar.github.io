---
layout: post
title: "API Management by Amazon API Gateway"
excerpt: "Microservices"
tags: [API, devops, evaluation, Amazon]
date: "2016-05-01"
file: "api-management-amazon"
image:
# pic easter island single statue 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15209671/b796b60c-17ef-11e6-8561-07a7b012ebb8.jpg
  credit: Exodux Travels
  creditlink: http://www.exodustravels.com/chile-holidays/discover/discover-chile/aae-84441#gallery
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

To see for yourself, go through the 35-minute self-paced lab <a target="_blank" href="https://qwiklabs.com/focuses/preview/2380">
Introduction to Amazon API Gateway</a>.
In the lab, you create a simple FAQ microservice. The microservice returns a JSON object containing a random question and answer pair using an API Gateway endpoint that invokes a Lambda function. So students should take the prerequisite lab "Introduction to AWS Lambda" before taking this lab.

This is an expanded version of that lab. 
This tutorial takes a deep dive into creating and using AWS API Management.
This is a hands-on guided tour. Take one step at a time and we point out PROTIPs and notes along the way.

## High level orientation #

According to <a target="_blank" href="https://aws.amazon.com/api-gateway/details/">
https://aws.amazon.com/api-gateway/details</a>
Amazon's API Gateway "is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale".

See my [API Management Evaluation page](/api-management-evaluation/) to compare features such as:

* Deploy an API to multiple stages, allowing easy differential between development, test, production, as well as versioning
* Connect custom domains to an API

* Define models to help standardize API request and response transformations
* Transform the body and headers of incoming and outgoing API requests to match backend systems

* Control API access via Amazon Identity and Access Management
* Create and apply API keys for third-party development
* Enable Amazon CloudWatch integration for API monitoring
* Cache API responses via Amazon CloudFront for faster response times

<a name="APIDesign"></a>

## API Design #

To get started, it helps to have a design mapped out.

Each "resource" is a single microservice within a system, with a URL such as "https://api.mysite.com/questions".

Each "method" is the combination of a resource path and an HTTP verb such as GET, POST, DELETE, etc. in the HTTP header.

Several "stages" (such as "dev", "prod", etc.) can be defined to hold resources and methods, 
which are usually different for different environments.


### Define an API #

0. In the internet browser open a new tab
   to go to <a target="_blank" href="https://us-west-2.console.aws.amazon.com/apigateway/home?region=us-west-2#/apis">
   Services > Application Services > API Gateway</a>.

0. Click on the link to a API microservice you created.

   PROTIP: Pre-define a naming standard so you can locate specific ones when you several pages of them.
   , such as "LambdaMicroservice" or "PS1-quiz1-v01".

   PROTIP: From the first version have a version number to avoid the time, confusion, and mistakes from renumbering after creation.

0. Click on the link to its GET method.

   Marvel at the visualization and blinking icons.

   #### Test call #

0. Click on the <strong>Test</strong> link for an explanation of conditions before clicking Test.

0. Review the response metadata:

   <pre>
   Status: 200
   Latency: 527 ms
   </pre>

   QUESTION: What is the latency that can be expected? 
   Different latencies can be expected for different paths between client and server end-point location.

   QUESTION: Are alerts issued if latency is higher than an expected level?

   QUESTION: How are alerts about latency resolved?

0. Scroll down the log for <strong>Endpoint request headers</strong> clients put in the HTTP header coming into Lambda:

   <pre>
   {
   x-amzn-lambda-integration-tag=test-request, Authorization=*...*8e4876, 
   X-Amz-Date=20160603T181309Z, 
   x-amzn-apigateway-api-id=tsdwtdl0r1, 
   X-Amz-Source-Arn=arn:aws:execute-api:us-west-2:495629083449:tsdwtdl0r1/null/GET/faq, 
   Accept=application/json, 
   User-Agent=AmazonAPIGateway_tsdwtdl0r1, 
   Host=lambda.us-west-2.amazonaws.com
   }
   </pre>

   QUESTION: Where is the documentation for those writing requests?

0. Scroll down the log for <strong>Endpoint response headers</strong> in the HTTP header back to the client:

   <pre>
   {
   x-amzn-Remapped-Content-Length=0, 
   x-amzn-RequestId=d3b7befe-29b6-11e6-97b2-63b7029b68f2, 
   Connection=keep-alive, 
   Content-Length=672, 
   Date=Fri, 03 Jun 2016 18:13:09 GMT, 
   Content-Type=application/json
   }
   </pre>

   QUESTION: Is there a library for client programmers can use to more quickly get their code to read responses?

   QUESTION: Is there a specification of these interactions in Swagger, RAML, WADL, etc.?

## External API Access #

0. Return to <a target="_blank" href="https://us-west-2.console.aws.amazon.com/apigateway/home?region=us-west-2#/apis">
   Services > Application Services > API Gateway<br />
   https://us-west-2.console.aws.amazon.com/apigateway/home?region=us-west-2#/apis</a>

   <img align="right" alt="aws api svc menu 2016-06-03 182x205" width="182" height="205" src="https://cloud.githubusercontent.com/assets/300046/15794925/ead0105e-29ab-11e6-81c1-639888a0c7cc.jpg">

0. Click <strong>Stages</strong> under the microservice name.

0. Click the URL in blue, such as:

   <tt>
   https://tsdwtdl0r1.execute-api.us-west-2.amazonaws.com/prod
   </tt>

   TROUBLESHOOTING: If message "Missing Authentication Token" appears, 
   make sure Security is set to Open.

   QUESTION: Is the response in HATEOAS (Hypermedia), with permissible next requests?

   <img align="right" width="229" alt="aws api left menu 2016-06-03" src="https://cloud.githubusercontent.com/assets/300046/15795551/e26f1b54-29af-11e6-92e4-d497aa787b86.png">

   #### Test API methods #

0. Click the tiny arrow to the left of a stage (such as prod or dev) to expand the tree.

0. Click a command defined, such as GET.

0. Click the URL in blue, such as:

   <tt>https://tsdwtdl0r1.execute-api.us-west-2.amazonaws.com/prod/faq</tt>

0. Add other methods according to the <a href="#APIDesign">design</a>.


## More on API Microservices #

This is one of a series:

{% include api_links.html %}
