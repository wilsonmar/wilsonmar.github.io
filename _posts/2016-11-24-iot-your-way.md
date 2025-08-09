---
layout: post
date: "2025-08-08"
lastchange: "v028 + FacialRecognition :2016-11-24-iot-your-way.md"
url: "https://wilsonmar.github.io/iot-your-way"
file: "iot-your-way"
title: "IoT Solutions (for you)"
excerpt: "Ways to automate your life. We can do this with IoT"
tags: [IoT, Raspberry, Mono, Mac]
image:
# feature: pic white robots woman 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622167/45abd918-0585-11e6-8537-a58e0b55e3ec.jpg
  credit: Cyberconstruct.be
  creditlink: http://cyberconstruct.be/2015/02/digital-job-crafting/
comments: true
created: "2016-11-24"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Useful tools people really need

Our objective is to make innovations available to the public
by putting together teams that make things for sale.

We want to make things that make a difference,
products that help people and organizations save time and money, safely.

The solutions below contain an outline for how we put them together.

1. <a href="#SDCards">Configured SD cards</a>
2. <a href="#Enclosures">Custom enclosures</a>
3. <a href="#Dashboard">Cloud-connected dashboard TVs</a>
4. <a href="#AlertingButton">Cloud-connected button</a>
5. <a href="#DataServer">Local redundant data server</a>
6. <a href="#AlertingSensor">Predictive alerts from sensors</a>
7. <a href="#Camera">Recordings with cameras</a>
8. <a href="#MediaProcessor">Media file processor service</a>
9. <a href="#Autonomous">Autonomous outdoor device</a>
10. <a href="#ControlSmartPhone">Mobile phone remote control</a>
11. <a href="#ControlLights">Control Lights</a>
12. <a href="#HomeAutomation">Custom home automation programming</a>
13. <a href="#MoveThings">Move things with actuators</a>
14. <a href="#DroneFlights">Custom drone flights</a>
15. <a href="#SatelliteFileTransfer">Satellite File Transfers</a>
16. <a href="#FacialRecognition">Satellite File Transfers</a>


<a name="SDCards"></a>

### SOLUTION 1 - Configured SD cards

A SD card to run your Raspberry Pi customized with the utilities and
applications you need (and without junk you don't).
Just select what you want on our one-page webite 
and our automated script builds it for you.
In addition to the latest operating system (Raspbian Jessie),
available are self-running diagnistics and libraries for 
running programs using Linux Bash, Python, Node, Mono, and other utilities.
Two cards in case one goes bad.

<img alt="iot sd card compared 650x366-186kb" width="650" height="368" src="https://cloud.githubusercontent.com/assets/300046/20649460/f26fc7f2-b47d-11e6-9911-fd5f4aa748ce.png">

1. Obtain the latest Raspbian operating system
1. Choose an SD card to purchase
1. Handle electronics with less risk of static electricity damage
1. Flash the SD card with the latest Raspbian operating system
1. SSH into a Pi without additional monitor and keyboard
1. Configure Wi-Fi credentials 
1. Configure bootstrap script to install Ansible and utilities
1. Install and use Git to obtain files from GitHub online
1. Configure Ansible yml file to load and configure apps
1. Transfer files into Pi using Secure FTP clients
1. Configure USB chip to mount automatically
1. Backup configuration changes people can buy to avoid the hassle above
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="Enclosures"></a>

### SOLUTION 2 - Custom enclosures

A custom-made enclosure for a Raspberry Pi 
with cooling fan, on/off switch, and additional board for
long-range communications 
using cell phone signals, Zigbee, or other advanced board.

<img alt="iot raspberry-pi-3-overclock-case-400x337" src="https://cloud.githubusercontent.com/assets/300046/20623425/bab6bcfe-b2c4-11e6-929f-f367844a254b.jpg">

This is needed to both dissipate heat and protect the device from dust, moisture, etc.

1. Configure a service to recognize GPIO pin connections
1. Wire-up and configure an on/off button for orderly shutdown
1. Create a paper case 
1. Assess tamper-resistent metal enclosure strategies
1. BONUS: Configure boards for ZigBee (or LoRA) communication 
1. Design a case using <strong>3D CAD</strong> software
1. Print and adjust a case from <strong>3D printer</strong>
1. Measure and analyze speeds and quality at various conditions
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="Dashboard"></a>

### SOLUTION 3 - Cloud-connected dashboard TVs

Plug a device on a TV to display (on a schedule)
<strong>dashboards</strong> by monitoring software 
(Elasticsearch Kibana, Grafana, AppDynamics, New Relic, Dynatrace, Nagios, SAP, etc.)

<a title="dataviz grafana panel_resize.gif" href="http://grafana.org/blog/2015/10/28/grafana-2.5-released/"><img alt="Grafana" width="594" height="310" src="https://cloud.githubusercontent.com/assets/300046/20649329/abd3db4c-b47a-11e6-8d35-2c3e1a3660d3.gif"></a>

1. Measure board temperature and other metrics
1. Connect a monitor to the Pi via HDMI
1. Configure monitor sleep timers
1. Obtain API keys from cloud vendors (understand OAuth2)
1. Use separate files to keep keys from scripts (for security)
1. Evaluate different IoT clouds (costs vs advantages of each)
1. Run Python script on the Pi to send a tweet to Twitter
1. Compare enterprise IoT devices and their risks
1. Stress test the board to evaluate temperature within board cases
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="AlertingButton"></a>

### SOLUTION 4 - Cloud-connected button

A button on bathroom exits that when pressed, 
sends an SMS or email to whoever <strong>you pre-configure</strong>.

<img alt="iot cloud laptop cut 237x165" width="650" src="https://cloud.githubusercontent.com/assets/300046/20649349/2fa61412-b47b-11e6-996e-e68ee591fb26.png">

1. OPTION A: Configure an Amazon IoT button that sends a signal to the AWS cloud.
1. OPTION B: Configure a Pi to connect to the AWS cloud
   with a speaker for Text to speech synthesis.
1. Configure an app to
   reach SMS, phones, and emails (<strong>"bathroom needs attention"</strong>)
1. Configure a <strong>water leak detector</strong> or temperature sensor
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="DataServer"></a>

### SOLUTION 5 - Local redundant data server

A server that never sleeps in your home or office,
to house a duplicate of what is on your laptop, 
without fees for cloud access.

<!-- http://vincentsanders.blogspot.com/2015_10_01_archive.html -->
![iot clear case with drive jpb 400x300-16kb](https://cloud.githubusercontent.com/assets/300046/20649558/ee4ef074-b47f-11e6-8ed6-e3a8c726112d.jpeg)

1. Configure the Pi to do <strong>work based on a schedule</strong>.
1. Configure the Pi as a <strong>Gitlab server</strong> 
   that mirrors changes on laptops for complete data recovery
1. Connect large USB drives to the Pi
1. Install openmediavault.org server to access shares on a browser
1. Configure port forwarding to access data remotely
1. Configure network shares using a <strong>NAS server</strong> to store files
1. Connect using clients and mobile devices to obtain files
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="AlertingSensor"></a>

### SOLUTION 6 - Predictive alerts from sensors

A buzzer or flashing light (on an LED strip)
to alert when an event of your choosing is detected.

1. Connect a buzzer to the Pi
1. Connect indoor ambiant sensors to the Pi
1. Configure alert conditions (water leak detector)
1. Predict trends based on statistics gathered
1. Correlate multiple metrics (indoor and outdoor temperature)
1. Evaluate limits of various sensors to environmental sensors
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="Camera"></a>

### SOLUTION 7 - Recordings with cameras

Take photos periodically and relay them to a server

1. Identify options for recording images and video with sound
1. Consider implications for constant-on webcams
1. Configure a closed-circuit camera feed
1. Configure fswebcam to use a 640x480 USB camera
1. Configure cron job to take pictures periodically
1. Configure a two-way live presence 
1. Test recording cycles checks before shipment
1. Check product operation and package safely for shipment
1. Train users/customers

Movidius Neural Computer Stick

<a name="MediaProcessor"></a>

### SOLUTION 8 - Media file processor service

Intelligently process photos and movies locally or in the cloud

1. Process media locally on a Pi
1. Send media to a public cloud
1. Process media on public cloud
1. Use cloud service for facial recognition
1. Compress media
1. Obtain facial recognition
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="Autonomous"></a>

### SOLUTION 9 - Autonomous outdoor device

A device powered by battery and solar panel
to move camera on a rail for 
<a target="_blank" href="https://learn.adafruit.com/touchscreen-pi-timelapse-controller">
time-lapse videos</a>

1. Design for weather-proof configurations
1. Power the Pi using 12V batteries from automobiles
1. Select small batteries and solar panels to power the Pi untethered
1. Predict battery life
1. Define battery maintenance alert mechanisms
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="ControlSmartPhone"></a>

### SOLUTION 10 - Mobile phone remote control

Control your smart phone remotely,
such as make it ring so you can find it.

1. Design interfaces
1. Evaluate existing utilities
1. Configure Twilio to ring a mobile phone
1. Configure Twilio to send SMS to a mobile phone
1. Test interface
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="ControlLights"></a>

### SOLUTION 11 - Control Lights 

Control the lights in your home remotely the way you want.
such as turn lights off or on with different colors.
We configure it for you to just plug in and it works.

1. Install Java Virtual Machine (JVM) on Pi
1. Install OpenHab.org software for home automation
1. Turn lights on and off based on conditions
1. Configure automation rules
1. Change color of lights
1. Analyze time series data
1. Explore use cases, costs vs. advantages for home automation
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="HomeAutomation"></a>

### SOLUTION 12 - Custom home automation programs

Control your home remotely the way you want.
We configure it for you to just plug in and it works.

1. Configure the Pi as a Media server to serve music, movies, and pictures
1. Install home automation control products (using OpenHab)
1. <a target="_blank" href="http://www.openhab.org/getting-started/downloads.html">
   Download OpenHAB mobile app</a>
1. Program small LCD screens with buttons
1. Perform usability studies with beta consumers
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="MoveThings"></a>

### SOLUTION 13 - Move things with actuators

Make things that move on a schedule or event of your choosing.

1. Compare Pi vs. Arduino and others
1. Calculate physics formulas for space, weight, and volume
1. Conduct repetitive tests for safety
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="DroneFlights"></a>

### SOLUTION 14 - Custom drone flights

A device that can move on its own,
custom configured to your needs.

1. Evaluate various drones (costs vs. advantages)
1. Add to board sensors such as gas detector
1. Install board with appropriate power
1. Drone operation checkout
1. Configure flight path
1. Test flights
1. Perform, track, and schedule predicted maintenace 
1. Check product operation and package safely for shipment
1. Train users/customers

<a name="SatelliteFileTransfer"></a>

### SOLUTION 15 - Satellite File Transfers

A device that receives and sends files to the two 98W satellites in outer space over the US and Europe.

This is a hobbyist fascination for nerdy bragging rights.

1. Evaluate <a target="_blank" href="https://www.raspberrypi.org/blog/outernet/">Outernet projects</a> by others and files such already, such as <a target="_blank" href="http://pu2vlw.dyndns.org:8090/en/files/Wikipedia?view=generic">some Wikipedia articles</a>. <a target="_blank" href="https://news.bitcoin.com/outernet-can-bring-real-life-use-cases-bitcoin-ecosystem/">Bitcoin datacasting</a>.
1. Order L-band satellite antenna and amplifier hardware from the non-profit <a target="_blank" href="https://store.outernet.is/collections/store">Outernet store</a> in Chicago.
1. Install <a target="_blank" href="https://github.com/Outernet-Project/rxOS/">rxOS software</a>.
1. Configure Software-defined Radio (SDR) 25MHz-2200MHz <a target="_blank" href="http://pu2vlw.dyndns.org:8090/">http://pu2vlw.dyndns.org:8090</a>
1. Test (Inmarsat signal level above 15 db?), 10KB at a time.
1. Perform, track, and schedule predicted maintenace https://www.wikiwand.com/en/Outernet
1. Check product operation and package safely for shipment
1. Train users/customers 


<a name="FacialRecognition"></a>

### SOLUTION 16 - Facial Recognition

There are several uses for a camera.
* Alert you when a person (face) is recognized behind you.

Pre-trained LLM models (such as YOLO) can label objects in images.

The release of Raspberry Pi 5 with an AI chip in the Raspberry Pi AI Kit provides adequate speed to recognize objects without much lag.

Such advancements now enable use of local facial recognition to take <strong>a`ttendance</strong> without sending data to a cloud.

CSPs offer facial recognition services to train LLMs to recognize.



## Topics covered

Here is a summary of the various technologies covered in this curriculum,
from the low-level bottom-up:

1. Enclosures for whole systems in the field

   See my tutorial on [IoT Hardware](/iot-raspberry-hardware/)

1. Board Hardware

   See my tutorial on [IoT Hardware](/iot-raspberry-hardware/).

   Volts vs. Amps 

   <a target="_blank" href="https://learn.adafruit.com/dotstar-pi-painter/raspberry-pi-setup">
   Install an shutdown signal button</a> (which uses GPIO pins)

1. Add-on components (drives, sensors, and actuators)

   See my tutorial on [IoT Hardware](/iot-raspberry-hardware/):
   
   Convert Centigrade to Ferenheit

1. Operating Systems - Linux

   Debian, Ubuntu, CentOS, SUSE, etc.

1. Hypervisors and Virtualization - 

   Virtualbox, Docker

1. Low-level utilities to manage disks and files and networks

   Java Virtual Machine, Microsoft's Mono .NET for Linux

1. Compilers of programming code

   JDK, SDK

1. Back-end application coding - API access to clouds

   Shell scripts and PowerShell scripts, Python, C# batch

   Data engineering

1. Front-end application coding - API access to clouds

   Node JavaScript, C#

1. Application Programming Interfaces

   Twillio, Twitter, IFTTT

1. Application UI by end-users - to play movies, etc.

One can spend a whole career at just one level.

The field of IoT is so diverse and so fast-changing that 
it is difficult for one person to know it all and do everything.

<hr />

## Project ideas on YouTube


ToP Projects Compilation:
* <a target="_blank" href="https://www.youtube.com/watch?v=bDN7vV50rSs">12 New AI Projects using Raspberry-Pi, Jetson Nano & more</a> 
* <a target="_blank" href="https://www.youtube.com/watch?v=vBD1x9yAfgs&t=5m54s"> <a target="_blank" href="https://www.youtube.com/@RaspduinoUno">Raspduino Uno</a> <a target="_blank" href="https://www.youtube.com/watch?v=hpn9lz57NCg&pp=0gcJCa0JAYcqIYzv">Solar tracker</a> on 2 axis

* <a target="_blank" href="https://www.youtube.com/@murtazasworkshop">@murtazasworkshop</a>
Body Following with Drone | OpenCV Python by <a target="_blank" href="https://www.linkedin.com/in/murtaza-hassan-8045b38a/">Murtaza Hassan</a> from Pakistan (<a target="_blank" href="https://www.murtazahassan.com/">murtazahassan.com</a>) of courses at <a target="_blank" href="https://www.computervision.zone/">computervision.zone</a>


## Comm

https://www.youtube.com/watch?v=6QUVzvhEhu4

Walter

## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}

