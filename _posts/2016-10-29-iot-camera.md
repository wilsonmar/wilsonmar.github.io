---
layout: post
title: "IoT Camera"
excerpt: "How to setup a camera on the Raspberry Pi 3B and other boards"
tags: [IoT, Raspberry, Mono, Mac]
date: "2016-10-29"
file: "iot-camera"
image:
# feature: pic white robots woman 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622167/45abd918-0585-11e6-8537-a58e0b55e3ec.jpg
  credit: Cyberconstruct.be
  creditlink: http://cyberconstruct.be/2015/02/digital-job-crafting/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


## USB cameras

USB cameras have the advantage of a <strong>longer chord</strong>
 to separate the camera from the Pi case.

USB cameras manufacturered for PCs are a good entry camera
because they can be obtained cheaply in swapmeets, GoodWill, and other second-hand stores.

They are lower resolution.

## CSI camera

https://www.raspberrypi.org/learning/getting-started-with-picamera/<br />
Get started with the Raspberry Pi camera module, 
using Python and picamera. 
You'll take still pictures, record video, and apply image effects.

<a target="_blank" href="http://elinux.org/RPi-Cam-Web-Interface">
http://elinux.org/RPi-Cam-Web-Interface</a>
provides software to use cameras connected to the Raspberry Pi board
via it CSI interface.
It does not work with USB cameras.

When a camera recognizes movement, it can trigger recording.

PIR (Passive IfraRed)


https://github.com/tiimgreen/pi_lapse<br />
Pi Lapse is a simple Python Script for the Raspberry Pi that takes photos at regular intervals.



## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}
