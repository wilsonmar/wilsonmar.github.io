---
layout: post
title: "Home Assistant"
excerpt: "Control and wide range of IoT devices using Python on Raspberry Pi, iOS, and Android"
tags: [iOT]
date: "2018-01-30"
file: "home-assistant"
image:
# home-assistant-screens-1900x500.jpg
  feature: https://user-images.githubusercontent.com/300046/70846838-d33a0780-1e1a-11ea-9783-a3ba76179e4a.jpg
  credit: home-assistant.io
  creditlink: https://github.com/home-assistant/home-assistant
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://www.home-assistant.io/">Home Assistant</a> automates homes with rules such as "turn on the porch lights when the sun sets", etc.


## Demo

https://demo.home-assistant.io/

Home Assistant presents a clickable dashboard such as:

![home-assistant-clickable-459x348.png](https://user-images.githubusercontent.com/300046/70847248-7e4cc000-1e1f-11ea-9c70-ecb55d05f9dc.png)

## Architecture

Home Assistant are custom Python scripts running on a Raspberry Pi machine board powered by <a target="_blank" href="https://github.com/home-assistant/hassos">HassOS</a> (instead of Raspian).

It's open sourced <a target="_blank" href="http://paulusschoutsen.nl/blog/2013/12/home-assistant-home-automation-in-python/">since 2016</a> by <a target="_blank" href="https://www.linkedin.com/in/schoutsen/">Paulus Schoutsen</a>, <a target="_blank" href="https://github.com/balloob">founder</a>, at https://github.com/home-assistant/home-assistant. 

The <a target="_blank" href="https://apps.apple.com/us/developer/robert-trencheny/id1088078259">iOS & Watch app</a> by <a target="_blank" href="https://www.linkedin.com/in/robbiet">Robert Trencheny</a> uses the Home Assistant Cloud.

Most IOT projects that use the ESP8266 or ESP32 can be tied into this system as easily as connecting to Adafruit.io, IFTTT, or Samsung Smart Hub.

But Home Assistant's Smart Home Hub also eliminates the (annoying) need to installing multiple apps to control  devices.

> Unlike Samsung's SmartThings Hub and other cloud-based services, <strong>Home Assistant does not send data out to the internet</strong>. So you have total data privacy and less lag while watching Netflix.

Home Assistant uses the MQTT protocol and supports over 1,400 devices -- just about every type of Smart Home device from Google Home, Alexa, Nest, Ecobee, Z-Wave,Hue, Lifx, Belkin WeMo, <a target="_blank" href="https://www.ikea.com/us/en/product-guides/ikea-home-smart-system/">IKEA Trådfri</a>, Sonos, etc.


## Install on Raspberry Pi

1. Download from <a target="_blank" href="https://www.home-assistant.io/hassio/installation/">https://www.home-assistant.io/hassio/installation</a> the latest version, such as:

   hassos_rpi4-64-3.5.img.gz

1. Instead of going to <a target="_blank" href="https://www.balena.io/etcher/">https://www.balena.io/etcher</a>

   <pre><strong>brew cask install balenaetcher</strong></pre>

1. Burn 64GB chip using Etcher.
1. Power up the Pi.
1. <a target="_blank" href="http://hassio.local:8123">http://hassio.local:8123</a>

Alternately,
https://github.com/home-assistant/hassio-installer

## Data Science

Use JupyterLab to analyze your data at
https://data.home-assistant.io/docs/quick_start_index using
https://github.com/home-assistant/home-assistant-notebooks

## Resources

https://learn.adafruit.com/set-up-home-assistant-with-a-raspberry-pi?view=all

https://www.youtube.com/channel/UCR7Xa7cU9wfkSY9v3yN2Vtw
JuanMTech YouTube video channel

https://github.com/geekofweek/homeassistant
who also has a fork of Nolan Gilley's
https://github.com/geekofweek/python-ecobee-api

