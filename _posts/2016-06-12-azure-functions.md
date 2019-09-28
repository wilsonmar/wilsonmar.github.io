---
layout: post
title: "Azure Functions"
excerpt: "An invisible server from Microsoft"
tags: [node, azure, serverless]
date: "2016-06-12"
file: "azure-functions"
image:
# banner colorful serverroom-1900x500-1200kb
  feature: https://cloud.githubusercontent.com/assets/300046/18173506/0fecf566-7027-11e6-965f-791c4df41a0b.jpg
  credit: TechTarget
  creditlink: http://searchaws.techtarget.com/tip/Automate-tasks-with-AWS-PowerShell-tools
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This tutorial aims to have you ending up with a serverless app running in 
Microsoft Azure cloud.

It's assumed that you're already familiar with
[the Serverless framework](/serverless/)


## Why #

<a target="_blank" href="https://techcrunch.com/2016/09/01/serverless-is-the-new-multitenancy/">
Multitenancy</a>
"not only allowed for higher gross margins, it made it viable to serve small and medium businesses with world-class software  —  at a profit."


## Getting Started #

0. <a target="_blank" href="https://azure.microsoft.com/en-us/services/functions/">
   https://azure.microsoft.com/en-us/services/functions</a>
   is the home page for Functions.

0. Click the green "Get Started" button.
0. Enter your email address. If this is your first time,
   <strong>Your subscription</strong> appears
   automatically with a suggested name for your new function.

0. PROTIP: Rather than accepting "functions47c313e5" or something else,
   come up with a convention, such as:
   "CXR1-dr-WUS-v01" for West US region.

   PROTIP: Include the region in your Function app name so you are less confused.

0. Select your region, such as "West US" and 
   
0. Click the blue "Create + get started" button, then wait.

   ### Timer Scenarios #

0. Click the <strong>Timer</strong> sample to get started.

   We'll cover the 
   <a href="#DPFunc">Data processing</a> and 
   <a href="#Webhook">Webhook + API</a> later.

0. Click <strong>JavaScript</strong> if you want the possibility for cross-platform code.

   C# only runs on Azure.

0. Click "Create this function".

   If you time-out here you'll return to the 
   <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseRecentResourcesBlade">
   Azure Resources Dashboard</a>.




<hr />

## Learning Resources #

* <a target="_blank" href="https://app.pluralsight.com/player?course=introduction-azure-app-services">
  Introduction to Azure Apps Services</a>
  Pluralsight 2h 3m video course published Aug 24, 2016
  by Barry Luijbregts (@AzureBarry, <a target="_blank" href="https://www.blog.waardedoorit.nl/">blog.waardedoorit.nl</a>)

* <a target="_blank" href="https://cloudacademy.com/webinars/aws-lambda-advanced-coding-session-22/">
  video: Advanced Coding Session</a>
  and
  <a target="_blank" href="http://www.slideshare.net/AlexCasalboni/aws-lambda-advanced-coding-session/1">
  slides</a>
  (API Gateway authentication use cases, Amazon Kinesis Streams, Amazon Cognito and AWS CloudFormation)
  by Alex Casalboni of CloudAcademy.
   <a target="_blank" href="https://gist.github.com/alexcasalboni/b045542bbd77b9d0bdac2db939575eec/">
  repo</a>


## Social #

Yochay Kiriaty
(@yochayk)

Christopher Anderson
@crandycodes 
PM


## More on Serverless #

This is one of a series on Serverless computing

{% include serverless_links.html %}
