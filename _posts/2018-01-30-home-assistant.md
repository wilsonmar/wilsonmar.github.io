---
layout: post
title: "Home Assistant"
excerpt: "Control Home IoT"
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

<a target="_blank" href="https://www.home-assistant.io/">Home Assistant</a> automates homes by running custom Python scripts on a Raspberry Pi machine board running <a target="_blank" href="https://github.com/home-assistant/hassos">HassOS</a> on your local network. 

It's open sourced at https://github.com/home-assistant/home-assistant. 

Download from https://www.home-assistant.io/hassio/installation/

hassos_rpi4-64-3.5.img.gz

It does not send data out onto the internet. So you have total data privacy and less lag while watching Netflix.

Home Assistant uses the MQTT protocol and supports over 1,400 devices -- just about every type of Smart Home device from Google Home, Alexa, Nest, Ecobee, Z-Wave,Hue, Lifx, Belkin WeMo, IKEA Trådfri, Sonos, etc.
Most IOT projects that use the ESP8266 or ESP32 can be tied into this system as easily as connecting to Adafruit.io, IFTTT, or Samsung Smart Hub.

Home Assistant's Smart Home Hub also eliminates the need for installing multiple apps to control your devices.


http://hassio.local:8123


https://learn.adafruit.com/set-up-home-assistant-with-a-raspberry-pi?view=all