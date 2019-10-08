---
layout: post
title: "Amazon Lex (AI Chatbots)"
excerpt: "Make a robot talk to you"
tags: [apple, mac, setup]
date: "2017-01-12"
file: "amazon-lex"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit:
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Amazon Lex is used by developers to make chatbot programs that 
hold <strong>natural voice conversational interactions</strong>.

Lex uses the back-end services used by 
Amazon's Alexa Echo and its natural language understanding
running Amazon Lamba (serverless) programs.


1. The marketing page for Lex is at:

   <a target="_blank" href="https://aws.amazon.com/lex/">
   https://aws.amazon.com/lex</a>

0. Hira Niranjan, Lex Product Manager shows this diagram in 
   <a target="_blank" href="https://www.youtube.com/watch?v=tAKbXEsZ4Iw&t=25m40s">
   Introducing Amazon Lex: Service for Building Voice/Text Chatbots</a> [20:20] Mar 6, 2017

   <a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/25693225/336c527e-3076-11e7-9e31-d29209e2bbdb.png">
   <img alt="aws-lex-arch-748x342" width="650" src="https://cloud.githubusercontent.com/assets/300046/25693225/336c527e-3076-11e7-9e31-d29209e2bbdb.png"><small>Click image for larger image pop-up</small></a>

   Lex provides developers pre-integration with Amazon's other services:

   * Authentication Cognito
   * Security (IAM)
   * Mobile Hub connectors to business applications

   <a target="_blank" title="aws-lex-flow-1581x841" href="https://cloud.githubusercontent.com/assets/300046/25696243/6d3d1b24-3084-11e7-9f2e-1337912bf789.png">
   <a alt="aws-lex-flow-650x346" src="https://cloud.githubusercontent.com/assets/300046/25694904/e0b31b40-307e-11e7-9fb9-e047fa44ea31.png"></a>

   Video: <a target="_blank" href="https://www.youtube.com/watch?v=iVmsEsBKnL8">
   Enhance Your Mobile Apps with AI Using Amazon Lex</a> [36:17] (MBL307) at AWS re:Invent 1 Dec 2016
   by Rohan Despande, Sr. Software Engineer

   * Amazon Pinpoint for targeted push notifications on mobile phones

   * Rekognition is Amazon's image recognition service
   <a target="_blank" href="https://www.youtube.com/watch?v=b6gN9jCmq3w">
   video</a> to recognize faces, objects, and scenes
   so it can search, verify, and organize images.
   It outputs names of objects with a confidence level.


   ### Pricing

0. Click Pricing

   Amazon charges 75 cents per 1,000 text messages and $4 per 1,000 speech messages.

   New customers the first year get free the equivalent of:
   
   * 10,000 text / 1,000 x .75 = $75 
   * 5,000 speech / 1,000 x $4 = $20


## Competitors

Systems similar to Amazon lex include:

  * <a target="_blank" href="https://www.youtube.com/watch?v=MTCc4d-RXP0">
  IBM Watson Conversation</a>


## Use Cases for Conversational Commerce

COOL:
   <a target="_blank" href="https://www.youtube.com/watch?v=I5OlTMLinio&t=34m30s">
   NASA's demo controlling a JPL Mars rover using Lex at AWS re:Invent 2016 Introducing Amazon Lex (MAC304)</a> Dec 3, 2016

   * Rovi, How big is Mars?
   * Rovi, drive forwards

   ![aws-lex-rovi-arch-535x358](https://cloud.githubusercontent.com/assets/300046/25695652/fe420844-3081-11e7-88ad-b63008e5d8e6.png)

   Other ways:

   * Information kiosks
   * Front-end to IOT (RaspPi)

   Other videos:

   * <a target="_blank" href="https://www.youtube.com/watch?v=l6EfeKc1Ark">
   Building Serverless Chat Bots</a> Sep 8, 2016 
   by Leo Zhandanovsky, Amazon Solutions Architect
   says "ChatOps is an approach to communicate that allows teams to collaborate and manage their (work) from a chat room". 

   * awschatbot.devpost.com

   
### Utterances

   Instead of using an Alexa program name, users can invoke a specific intent (program) by saying:

   * "Alexa, I would like to book a hotel"
   * "Alexa, I would like to pick up flowers"
   * "Alexa, I would like to order a ride"
   * "Alexa, I would like to see a dentist"

   <a target="_blank" href="https://www.youtube.com/watch?v=Yj9QSTofUF4">
   Conversational commerce (not just Lex)</a>

   From video  <a target="_blank" href="https://www.youtube.com/watch?v=-8bSCyPAE44">
   Announcing Amazon Lex - January 2017</a> [28:32]
   by Vikram Anbazhagan in AWS Online Tech Talks

Informational bots:

   * News updates 
   * Weather information
   * Game scores

Application bots:

   * Buy tickets
   * Order food
   * Manage bank accounts

Enterprise productivity bots:

   * Sales numbers
   * View performance of marketing
   * Inventory status

IOT bots:

   * Wearables
   * Appliances
   * Auto

IDEA: Provide predictions on the above.


## Create a Lex chatbot

This video walks through use of the Lex Console to create a voice conversational chatbot while it was in preview mode:

   <iframe width="560" height="315" src="https://www.youtube.com/embed/7uG9cuxNo5k" frameborder="0" allowfullscreen></iframe>


### Console

0. Lex Console

   <a target="_blank" href="https://console.aws.amazon.com/lex/">
   https://console.aws.amazon.com/lex</a>

   ### AI Services

   Alternately, from 
   among a list of all Amazon's services, Lex is within AI services:
   <a target="_blank" href="https://aws.amazon.com/amazon-ai/">
   https://aws.amazon.com/amazon-ai</a>

   ![aws-svcs-ai-204x139-8k](https://cloud.githubusercontent.com/assets/300046/25692974/56dcf152-3074-11e7-9b37-cc5af0f4fd79.png)

   Video: <a target="_blank" href="https://www.youtube.com/watch?v=7yoExk5en5o">
   Overview of AI in the AWS Platform</a>

   
   ### Add Some Personality

   IDEA: I'd like to put in some <strong>personality</strong>, like I'm having a conversation with a comic:

   * An <strong>encouraging</strong> response like a grandma.
   * Insults from Don Rickles or Sheakespeare or Mark Twain.
   * Self-Deprecating humor like Rodney Dangerfield.
   * Funny Observerations like from Jerry Seinfeld or Sarah Silverman or other comics.
   <br /><br />

   Adjustment of tone in voice would enable:

   * Sexual inuendos like from Mae West.
   * A British (butler) accent with <strong>sarcasm</strong> as I'm doing a banking task.
   * Dead-pan like that "Bueller" guy.


## In Settings:

### Slots - Usage

   Slots are input data.

   Amazon provides a City slot that has the world's major cities. 

   Lex remembers the user's context (what occurred before
   and user's perferences).


### Voices

   The initial release of Lex are in English US voices, a subset of voices from 
   <a target="_blank" href="https://aws.amazon.com/documentation/polly/">
   Amazon Polly</a> is a Text-to-Speech (TTS) cloud service that converts text into lifelike speech.

   <a target="_blank" href="https://aws.amazon.com/blogs/aws/polly-text-to-speech-in-47-voices-and-24-languages/">
   Among Polly's 47 voices in 24 languages</a> are these American English voices:

   Female:

   * Joanna sounds the most natural to me [Google]
   * Salli I can't describe other than "girl next door" [Amazon]
   * Kimberly has a bit of a raspy voice [Azure]
   * Kendra is a deeper voice, the most "authoratative" to me. [IBM]
   * Ivy sounds like a girl (about 10 years old is my guess)

   Male:

   * Justin sounds like a young boy
   * Joey 

   IDEA: Having a child voice can enhance a bot to help shopping for children.

   IDEA: Have different voices present information for a competitive comparison.
   For example, make calls to APIs in Google, Amazon, IBM, and Azure clouds.

   Used on website https://germanverbs.lang.global/

0. Write a long sentence of your own and hear it pronounced and saved into an mp3 file on:

   <a target="_blank" href="https://console.aws.amazon.com/polly/home/SynthesizeSpeech">
   https://console.aws.amazon.com/polly/home/SynthesizeSpeech</a>

   QUESTION: Can additional custom lexicons be specified like in https://console.aws.amazon.com/polly/home/Lexicons


## Channels

"Channels" send data to other applications, such as Facebook, Slack, or Twilio to send SMS or email.

These all use IAM Role AWSServiceRoleForLexChannels


### Slack channel

Do this first. This is free. And you can keep it private.
It's not behind a firewall/VPN.
It's better and easier than IRC.
It has built-in archival of communications.

0. Get the mobile app for Slack:

  * https://play.google.com/store/apps/details?id=com.Slack&hl=en
  * https://itunes.apple.com/app/slack-team-communication/id618783545

0. Pick an outgoing Slack webhook

   They make use of normal HTTP requests with a JSON payload.

0. Integrate Slack with integrations 

   * When there is a commit to GitHub, send to Slack.

   * PagerDuty, JIRA, NewRelic, DataDog.

   * Meekan.com - schedule meetings
   * Yeobot for SQL queries against AWS account metadata
   * Burnerapp.com SMS/voicemail to slack, two-way
   * Statuspage.io - integrate public and private status feeds
   <br /><br />

0. Create a Slack channel to receive incoming Slack webhooks:

   https://slack.com/create#email

   Docs: https://get.slack.help/hc/en-us/articles/201402297-Create-a-channel

0. Secure your Slack with two-factor authentication

0. Scope AWS IAM policies


### Facebook 

This is free.

### Twilio to send SMS or email

This costs money.

### Others?

Twitter? Skype? LinkedIn? Yammer? WhatsApp?



## Monitoring

IAM role
<strong>AWSServiceRoleForLexBots</strong>

* Traffic by channel

* Missed utterances count

* Request Latency


