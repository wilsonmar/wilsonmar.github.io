---
layout: post
title: "AWS Amplify"
excerpt: "Create and host web & mobile apps in a low-code way within AWS"
tags: [AWS, Cloud, low-code]
date: "2022-01-17"
file: "aws-amplify"
image: # pic-black-bkg-white-cloud_1920x1200
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme Bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Front-end designers and developers are excited about AWS Amplify Studio, which adds front-end UI development to AWS Amplify app hosting service. <a target="_blank" href="https://aws.amazon.com/blogs/mobile/aws-amplify-studio-figma-to-fullstack-react-app-with-minimal-programming/">Announced on December 2, 2021</a> in (public preview), Amplify Studio accelerates UI development (with minimal coding) by automatically translating  designs made in Figma to human-readable React UI component code. Within Amplify Studio, developers can visually connect UI components to app backend data supporting configuration and management capabilities.

This aims to be a suscint yet deep dive about the "mind sets" needed by IT teams in the cloud.


## Annoucement December 2021

Werner's speech on it?

<a target="_blank" href="https://www.youtube.com/watch?v=NLN-q47uPo0" title="Dec 16, 2021">
"AWS re:Invent 2021 - {New Launch} AWS Amplify Studio: Visually build full-stack web apps fast on AWS"</a>
gives a historical tour of what led up to Amplify Studio.

## Docs

Amplify UI Docs - https://ui.docs.amplify.aws/

Amplify Sandbox - https://sandbox.amplifyapp.com/

Ali Spittel works on the product team.

## Both web and mobile

## CLI

PROTIP: Although says "build you back-end and front-end in one visual development environment",
much of the work is done with CLI commands.

<a target="_blank" href="https://www.youtube.com/watch?v=T4MQrRDo20w" title="AWS Amplify Fullstack Project Setup (React, Node, Lambda, REST API)">VIDEO</a>:

<pre>npx create react app
npm start
amplify init
? Enter a name for your project _

</pre>

## Plugins extend CLI

<a target="_blank" href="https://www.youtube.com/watch?v=rEgh8TiXHPM&t=2m37s">
Getting Started with Amplify Plugins! (livestream recording)</a>
feat. @wizages

## Figma

https://www.figma.com/community/file/1047600760128127424
AWS Amplify UI Kit

<a target="_blank" href="https://www.youtube.com/watch?v=rGpDHK_X3qk" title="Jan 1, 2022">
Figma to React components using AWS Amplify studio for Divante commerceBooster UI templates
for ecommerce (shopping cart, etc.)

## YouTube videos:

## Docs:

https://docs.amplify.aws/console/uibuilder/figmatocode/

https://www.youtube.com/watch?v=frjPqXYPgF0
First impression of AWS Amplify Studio – Figma to Fullstack React App With Minimal Programming

