---
layout: post
title: "IoT Clouds"
excerpt: "The value of IoT is the wisdom from analytics and notifications"
tags: [Clouds, IoT]
date: "2016-11-26"
file: "iot-clouds"
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

This page aims to provide a way to <strong>compare</strong> (in a hands-on way)
the various cloud services catering data from IoT devices.

This assumes that you have absorbed the tutorial about 
[Intel IoT devices](/intel-iot/).

## The list #

Cloud services for IoT is fiercely contested market.

0. <a target="_blank" href="https://software.intel.com/en-us/articles/connecting-to-amazon-web-services-aws-iot-using-mqtt">
   Connecting to Amazon Web Services (AWS) IoT Using MQTT</a>

   [See my presentation about the AWS IoT Button](/iot-aws/)

0. <a target="_blank" href="https://software.intel.com/en-us/articles/connecting-intel-iot-gateways-to-ibm-watson">
   Connecting an Intel® IoT Gateway to IBM Watson</a>

0. [Using Microsoft Azure IoT Hub (Suite)](/iot-hub/)

   * http://azure.com/iot

   * <a target="_blank" href="https://aka.ms/iotrefarchitecture">Azure IoT Reference Architecture</a>

0. As for Google Compute Cloud, <a target="_blank" href="http://www.cloudwedge.com/agosto-leverages-mqtt-to-create-high-performance-open-source-message-broker-for-iot-496652/">Agosto's IoT connection broker is a component of and gateway into Google’s Pub/Sub service, as well as the company’s IoT (M2M) Accelerator</a>

0. GE Predix began their 
  <a target="_blank" href="https://www.predix.io/resources/tutorials/journey.html?environment=workshop#1838">
   https://www.predix.io/resources/tutorials/journey.html?environment=workshop#1838</a><br />
   Predix Transform Workshops using <a target="_blank" href="https://www.predix.io/resources/tutorials/tutorial-details.html?tutorial_id=1839&tag=1838&journey=Predix%20Transform%20Workshop&environment=workshop&resources=1849,1839,1853">
   set up a new Intel Edison board</a>

   [See my presentation about Predix](/predix-basics/)

0. ATT M2X cloud

0. [Samsung's ARTIK cloud](/samsung-iot-cloud/)
   claims to be platform agnostic. 
   It takes data from any type of device - 
   FitBit, smart lightbulb, connected washing machine, Twitter, etc.

0. <a target="_blank" href="http://trustedanalytics.org/">
   Trusted Analytics Platform (TAP)</a> open source platform for data scientists,
   based on Cloud Foundry. <a target="_blank" href="https://www.youtube.com/watch?v=R8LxuxsSSwM&list=PLA0ztWy2qcuKIBiGtSpeSs4sEiLyEOtNZ">Their playlist of videos on YouTube</a>

0. <a href="#Ubidots">
   Ubidots</a>

0. <a href="#Particle">Particle</a>
   has a cloud integrated with its IDE and devices. 

0. <a href="#Losant">Losant.com</a>
   has a Cloud integrated with its IDE and devices from others.

0. <a href="#Adafruit">Adafruit.io</a>
   provides a simple cloud to collect and display sensor feeds.

<hr />

<a name="Comparisons"></a>

## Comparison of IoT Clouds

https://www.youtube.com/watch?v=G9Z0v_dX-xM


<hr />

<a name="Particle"></a>

## Particle # 

<a href="#Particle">Particle</a>
<a target="_blank" href="https://www.particle.io/">Particle.io</a>
   has a Cloud integrated with its IDE and devices. 

Particle sells two boards with an onboard cellular antenna that connects to their cloud.
This reduces the hassle of using a custom cellular breakout board

   * http://makezine.com/product-review/particle-electron/

   * $19 http://makezine.com/product-review/particle-photon/


<hr />

<a name="Ubidots"></a>

## Ubidots # 

* <a target="_blank" href="https://www.hackster.io/ubidots/products/ubidots">
   Ubidots</a> has a demo that collects Temp data and displays it as a line graph.

* <a target="_blank" href="https://github.com/drejkim/particle-weather-station">
   Particle Photon Weather Station</a>
   Ubidots
   by Esther Kim


* <a target="_blank" href="https://www.hackster.io/AgustinP/logging-sensor-data-using-intel-edison-amp-python-d6cccc">
   Logging sensor data using Intel Edison and Python and Ubidots</a>

<hr />

<a name="Losant"></a>

## Losant # 
<a target="_blank" href="https://www.losant.com/">losant.com</a>
(<a target="_blank" href="https://twitter.com/losanthq/">@LosantHQ</a>)
   has a Cloud integrated with its IDE and devices. 

   <a target="_blank" href="https://www.losant.com/blog/getting-started-with-aws-iot-button-losant">
   It accepts AWS IoT Dash buttons as input</a>.

   <a target="_blank" href="https://www.losant.com/blog/aws-lambda-and-losant-workflows">
   It can invoke AWS Lambda function from its workflow</a>,
   defined in a JSON file.

   <a target="_blank" href="https://store.losant.com/">
   <img align="right" alt="iot lorent moisture sensor 80x79-i29" width="80" height="79" src="https://cloud.githubusercontent.com/assets/14143059/17669334/8e0e24de-62ca-11e6-8e01-ad17a9517056.png">
   Losant's device shopping mart</a> has a
   <a target="_blank" href="https://store.losant.com/collections/losant-kits/products/losant-moisture-sensor-kit/">
   $19 internet-powered moisture senor kit</a>
   that's ideal for classroom experiments.

   The kit requires some assembly on a <strong>breadboard</strong> with loose wires
   which is more complicated but has more options than Grove boards and connectors.
   
   But Losant provides
   <a target="_blank" href="https://docs.losant.com/getting-started/losant-iot-dev-kits/moisture-sensor-kit/">
   step-by-step instructions</a> with their
   <a target="_blank" href="https://docs.losant.com/">
   documentation</a>.

### Losant Software #

This picks up after XDK is used to create the "Blinking LED" project.

0. Install a local git program and Node (if you haven't already).
0. Open a Terminal shell window to globally install https://github.com/Losant/losant-mqtt-js
   to connect the Edison to the Losant platform.

   npm install -g losant-mqtt

0. PROTIP: Create a "subject" folder where git creates folders during cloning.

0. Edit the package.json file to add dependency: 

  <pre>
  "dependencies": {
    "losant-mqtt" : "^1.0.0"
  }
  </pre>


   https://github.com/Losant/losant-mqtt-js

### Losant Data Explorer #

   Their <a target="_blank" href="https://www.losant.com/blog/introducing-the-data-explorer">
   Data Explorer</a> is good for learning simple visual statistical inference
   without the complex setup and costs of industrial systems.

   Despite its low cost, Lorant offers sophisticated implementations of features not offered by some of its bigger competitors:
   recipies of devices to save time, 
   <a target="_blank" href="https://docs.losant.com/getting-started/walkthrough/">virtual devices</a>, 
   device tags, 
   and device attributes.

   Lorant partners with Microsoft.

   http://opendatadepot.org/media/examples_img/OpenDataDepot_42.png


### Losant Social media #

   <a target="_blank" href="https://forums.losant.com/">
   User forums</a> can go for days with activity because the offering is still young.

   * <a target="_blank" href="https://itunes.apple.com/us/podcast/what-is-losant/id984131621?i=1000367996937&mt=2">
   "What is Losant" Podcast on iTunes</a>
   says their front-end is built on React with Node backend software
   running in Google Compute Engine (but not Google services).
   They switched from MongoDB to
   <a target="_blank" href="https://influxdata.com/">
   InfluxDB</a> for time-series data.

<hr />

<a name="Intel"></a>

## Intel #

Intel lists its cloud services affiliations at<br />
<a target="_blank" href="https://software.intel.com/en-us/iot/cloud-analytics">
https://software.intel.com/en-us/iot/cloud-analytics</a>.

<hr />

<a name="Adafruit"></a>

## Adafruit.io #

Below are instructions for 
<a target="_blank" href="https://learn.adafruit.com/adafruit-io-basics-feeds">
creating a feed</a>

0. Register for an account at io.adafruit.com.
0. In the Welcome Dashboard, you can drag the "Try Me" slider to a value of your choosing.
0. Click MY DASHBOARDS, Your Feeds. CREATE FEED.
0. PROTIP: Since you'll have many devices, name the feed with the brand and 
   serial number of the device, such as:

   * rpi-d85fdaa0-cpu-temp
   * rpi-d85fdaa0-room-temp

0. Click CREATE FEED.
0. Optionally, click to change licensing and public/private visibility,
   which is ironic considering the AIO key is part of the query string,
   making it totally vulnerable to interception.
0. Click VIEW AIO KEYS. Highlight it and copy it to save it in a file
   along with the feed ID.
0. Construct a REST API call:
   <pre>
https://io.adafruit.com/api/groups/weather/send.json?x-aio-key=cda65ef7542e42d18aafcdd3d2ed4688&temperature=13&humidity=12&wind=45
   </pre>

   The response is 

0. The website provides docs for Node, Python, Ruby.

<hr />

## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}
