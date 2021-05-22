---
layout: post
title: "IoT Solutions (for you)"
excerpt: "Ways to automate your life. We can do this with IoT"
tags: [IoT, Raspberry, Mono, Mac]
date: "2016-11-24"
file: "iot-your-way"
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

0. Obtain the latest Raspbian operating system
0. Choose an SD card to purchase
0. Handle electronics with less risk of static electricity damage
0. Flash the SD card with the latest Raspbian operating system
0. SSH into a Pi without additional monitor and keyboard
0. Configure Wi-Fi credentials 
0. Configure bootstrap script to install Ansible and utilities
0. Install and use Git to obtain files from GitHub online
0. Configure Ansible yml file to load and configure apps
0. Transfer files into Pi using Secure FTP clients
0. Configure USB chip to mount automatically
0. Backup configuration changes people can buy to avoid the hassle above
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="Enclosures"></a>

### SOLUTION 2 - Custom enclosures

A custom-made enclosure for a Raspberry Pi 
with cooling fan, on/off switch, and additional board for
long-range communications 
using cell phone signals, Zigbee, or other advanced board.

<img alt="iot raspberry-pi-3-overclock-case-400x337" src="https://cloud.githubusercontent.com/assets/300046/20623425/bab6bcfe-b2c4-11e6-929f-f367844a254b.jpg">

This is needed to both dissipate heat and protect the device from dust, moisture, etc.

0. Configure a service to recognize GPIO pin connections
0. Wire-up and configure an on/off button for orderly shutdown
0. Create a paper case 
0. Assess tamper-resistent metal enclosure strategies
0. BONUS: Configure boards for ZigBee (or LoRA) communication 
0. Design a case using <strong>3D CAD</strong> software
0. Print and adjust a case from <strong>3D printer</strong>
0. Measure and analyze speeds and quality at various conditions
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="Dashboard"></a>

### SOLUTION 3 - Cloud-connected dashboard TVs

Plug a device on a TV to display (on a schedule)
<strong>dashboards</strong> by monitoring software 
(Elasticsearch Kibana, Grafana, AppDynamics, New Relic, Dynatrace, Nagios, SAP, etc.)

<a title="dataviz grafana panel_resize.gif" href="http://grafana.org/blog/2015/10/28/grafana-2.5-released/"><img alt="Grafana" width="594" height="310" src="https://cloud.githubusercontent.com/assets/300046/20649329/abd3db4c-b47a-11e6-8d35-2c3e1a3660d3.gif"></a>

0. Measure board temperature and other metrics
0. Connect a monitor to the Pi via HDMI
0. Configure monitor sleep timers
0. Obtain API keys from cloud vendors (understand OAuth2)
0. Use separate files to keep keys from scripts (for security)
0. Evaluate different IoT clouds (costs vs advantages of each)
0. Run Python script on the Pi to send a tweet to Twitter
0. Compare enterprise IoT devices and their risks
0. Stress test the board to evaluate temperature within board cases
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="AlertingButton"></a>

### SOLUTION 4 - Cloud-connected button

A button on bathroom exits that when pressed, 
sends an SMS or email to whoever <strong>you pre-configure</strong>.

<img alt="iot cloud laptop cut 237x165" width="650" src="https://cloud.githubusercontent.com/assets/300046/20649349/2fa61412-b47b-11e6-996e-e68ee591fb26.png">

0. OPTION A: Configure an Amazon IoT button that sends a signal to the AWS cloud.
0. OPTION B: Configure a Pi to connect to the AWS cloud
   with a speaker for Text to speech synthesis.
0. Configure an app to
   reach SMS, phones, and emails (<strong>"bathroom needs attention"</strong>)
0. Configure a <strong>water leak detector</strong> or temperature sensor
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="DataServer"></a>

### SOLUTION 5 - Local redundant data server

A server that never sleeps in your home or office,
to house a duplicate of what is on your laptop, 
without fees for cloud access.

<!-- http://vincentsanders.blogspot.com/2015_10_01_archive.html -->
![iot clear case with drive jpb 400x300-16kb](https://cloud.githubusercontent.com/assets/300046/20649558/ee4ef074-b47f-11e6-8ed6-e3a8c726112d.jpeg)

0. Configure the Pi to do <strong>work based on a schedule</strong>.
0. Configure the Pi as a <strong>Gitlab server</strong> 
   that mirrors changes on laptops for complete data recovery
0. Connect large USB drives to the Pi
0. Install openmediavault.org server to access shares on a browser
0. Configure port forwarding to access data remotely
0. Configure network shares using a <strong>NAS server</strong> to store files
0. Connect using clients and mobile devices to obtain files
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="AlertingSensor"></a>

### SOLUTION 6 - Predictive alerts from sensors

A buzzer or flashing light
to alert you whenever an event of your choosing is detected.

0. Connect a buzzer to the Pi
0. Connect indoor ambiant sensors to the Pi
0. Configure alert conditions (water leak detector)
0. Predict trends based on statistics gathered
0. Correlate multiple metrics (indoor and outdoor temperature)
0. Evaluate limits of various sensors to environmental sensors
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="Camera"></a>

### SOLUTION 7 - Recordings with cameras

Take photos periodically and relay them to a server

0. Identify options for recording images and video with sound
0. Consider implications for constant-on webcams
0. Configure a closed-circuit camera feed
0. Configure fswebcam to use a 640x480 USB camera
0. Configure cron job to take pictures periodically
0. Configure a two-way live presence 
0. Test recording cycles checks before shipment
0. Check product operation and package safely for shipment
0. Train users/customers

Movidius Neural Computer Stick

<a name="MediaProcessor"></a>

### SOLUTION 8 - Media file processor service

Intelligently process photos and movies locally or in the cloud

0. Process media locally on a Pi
0. Send media to a public cloud
0. Process media on public cloud
0. Use cloud service for facial recognition
0. Compress media
0. Obtain facial recognition
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="Autonomous"></a>

### SOLUTION 9 - Autonomous outdoor device

A device powered by battery and solar panel
to move camera on a rail for 
<a target="_blank" href="https://learn.adafruit.com/touchscreen-pi-timelapse-controller">
time-lapse videos</a>

0. Design for weather-proof configurations
0. Power the Pi using 12V batteries from automobiles
0. Select small batteries and solar panels to power the Pi untethered
0. Predict battery life
0. Define battery maintenance alert mechanisms
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="ControlSmartPhone"></a>

### SOLUTION 10 - Mobile phone remote control

Control your smart phone remotely,
such as make it ring so you can find it.

0. Design interfaces
0. Evaluate existing utilities
0. Configure Twilio to ring a mobile phone
0. Configure Twilio to send SMS to a mobile phone
0. Test interface
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="ControlLights"></a>

### SOLUTION 11 - Control Lights 

Control the lights in your home remotely the way you want.
such as turn lights off or on with different colors.
We configure it for you to just plug in and it works.

0. Install Java Virtual Machine (JVM) on Pi
0. Install OpenHab.org software for home automation
0. Turn lights on and off based on conditions
0. Configure automation rules
0. Change color of lights
0. Analyze time series data
0. Explore use cases, costs vs. advantages for home automation
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="HomeAutomation"></a>

### SOLUTION 12 - Custom home automation programs

Control your home remotely the way you want.
We configure it for you to just plug in and it works.

0. Configure the Pi as a Media server to serve music, movies, and pictures
0. Install home automation control products (using OpenHab)
0. <a target="_blank" href="http://www.openhab.org/getting-started/downloads.html">
   Download OpenHAB mobile app</a>
0. Program small LCD screens with buttons
0. Perform usability studies with beta consumers
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="MoveThings"></a>

### SOLUTION 13 - Move things with actuators

Make things that move on a schedule or event of your choosing.

0. Compare Pi vs. Arduino and others
0. Calculate physics formulas for space, weight, and volume
0. Conduct repetitive tests for safety
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="DroneFlights"></a>

### SOLUTION 14 - Custom drone flights

A device that can move on its own,
custom configured to your needs.

0. Evaluate various drones (costs vs. advantages)
0. Add to board sensors such as gas detector
0. Install board with appropriate power
0. Drone operation checkout
0. Configure flight path
0. Test flights
0. Perform, track, and schedule predicted maintenace 
0. Check product operation and package safely for shipment
0. Train users/customers

<a name="SatelliteFileTransfer"></a>

### SOLUTION 15 - Satellite File Transfers

A device that receives and sends files to the two 98W satellites in outer space over the US and Europe.

This is a hobbyist fascination for nerdy bragging rights.

0. Evaluate <a target="_blank" href="https://www.raspberrypi.org/blog/outernet/">Outernet projects</a> by others and files such already, such as <a target="_blank" href="http://pu2vlw.dyndns.org:8090/en/files/Wikipedia?view=generic">some Wikipedia articles</a>. <a target="_blank" href="https://news.bitcoin.com/outernet-can-bring-real-life-use-cases-bitcoin-ecosystem/">Bitcoin datacasting</a>.
0. Order L-band satellite antenna and amplifier hardware from the non-profit <a target="_blank" href="https://store.outernet.is/collections/store">Outernet store</a> in Chicago.
0. Install <a target="_blank" href="https://github.com/Outernet-Project/rxOS/">rxOS software</a>.
0. Configure Software-defined Radio (SDR) 25MHz-2200MHz <a target="_blank" href="http://pu2vlw.dyndns.org:8090/">http://pu2vlw.dyndns.org:8090</a>
0. Test (Inmarsat signal level above 15 db?), 10KB at a time.
0. Perform, track, and schedule predicted maintenace https://www.wikiwand.com/en/Outernet
0. Check product operation and package safely for shipment
0. Train users/customers 


## Topics covered

Here is a summary of the various technologies covered in this curriculum,
from the low-level bottom-up:

0. Enclosures for whole systems in the field

   See my tutorial on [IoT Hardware](/iot-raspberry-hardware/)

0. Board Hardware

   See my tutorial on [IoT Hardware](/iot-raspberry-hardware/).

   Volts vs. Amps 

   <a target="_blank" href="https://learn.adafruit.com/dotstar-pi-painter/raspberry-pi-setup">
   Install an shutdown signal button</a> (which uses GPIO pins)

0. Add-on components (drives, sensors, and actuators)

   See my tutorial on [IoT Hardware](/iot-raspberry-hardware/):
   
   Convert Centigrade to Ferenheit

0. Operating Systems - Linux

   Debian, Ubuntu, CentOS, SUSE, etc.

0. Hypervisors and Virtualization - 

   Virtualbox, Docker

0. Low-level utilities to manage disks and files and networks

   Java Virtual Machine, Microsoft's Mono .NET for Linux

0. Compilers of programming code

   JDK, SDK

0. Back-end application coding - API access to clouds

   Shell scripts and PowerShell scripts, Python, C# batch

   Data engineering

0. Front-end application coding - API access to clouds

   Node JavaScript, C#

0. Application Programming Interfaces

   Twillio, Twitter, IFTTT

0. Application UI by end-users - to play movies, etc.

One can spend a whole career at just one level.

The field of IoT is so diverse and so fast-changing that 
it is difficult for one person to know it all and do everything.


## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}
