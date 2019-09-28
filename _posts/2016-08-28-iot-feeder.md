---
layout: post
title: "IoT barn feeder"
excerpt: "Provide just enough food for animals at just the right time, automatically"
tags: [Clouds, IoT]
date: "2016-08-28"
file: "iot-feeder"
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

Here is (the beginnings of) a description of my attempts at automating the feeding of 
donkeys in the morning without going out into the barn before they <a target="_blank" href="https://www.youtube.com/watch?v=nWS4Eu8E2z4&t=5s">
bray annoyingly</a>.

## Options considered

At first I thought of the design as like dropping balloons from the ceiling or red liquid at a <a target="_blank" href="http://www.imdb.com/title/tt0074285/">
Carrie" movie</a> remake.

<a target="_blank" href="https://countrysidenetwork.com/daily/poultry/chicken-coops-housing/automating-a-chicken-coop-door-using-arduino/">
This video</a> shows an Arduino controlling the door to chicken coop that, rather than using a simple timer to open and close the chicken coop doors, a computer considers sunrise and sunset times.

We've thought of several options. I'm looking for the lowest cost, least hassle, and most reliable. The less moving parts the better. Movements would occur on a timed schedule:

   * <a href="#BagOfFeed">A feed bag</a> filled and then raised and lowered by a hoist
   * <a href="#Box">A box that is lowered to the ground by one motor
   * <a href="#BoxDumper">A box that dumps food</a> on the ground from the ceiling. One motor raises and lowers the box. Another opens the trap door containing food.

## How much feed?

   Two donkeys get half a "flake" each at 5am and 5pm.
   A half flake is 4 inches thick x 20 inch square, weighing 4 to 5 pounds.

   We can't leave a lot of food laying around 
   because they eat everything they can reach.

   Thus, I need a way to hold their hay 
   for release automatically at a set time.


<a name="BagOfFeed"></a>

### Bag of feed

The one with the least moving parts seems to be a <strong>netting bag</strong> 
used to slow down how quickly horses and other equine eat.

![iot-haybag-v01-804x804-400408](https://user-images.githubusercontent.com/300046/37868902-f44590f8-2f73-11e8-8439-1acbe68c70ab.png)

It is lowered and raised by an electric hoist. The 125 Watt motor shown below can lift up to 110 pounds 40ft with a single line. A double-line configuration can lift 220 lbs 20ft. But it can be kinda slow, at 16.4 ft./minute.

![iot-hoist-276x316-24324](https://user-images.githubusercontent.com/300046/37920018-e606b7fe-30e2-11e8-9cd3-7ca6fc411d80.jpg)
<!-- https://www.northerntool.com/shop/tools/product_200660033_200660033 -->

<!-- https://www.youtube.com/watch?v=hYtsFdbD1i4 
https://www.youtube.com/watch?v=vbXlmIjxVPE pulling logs
https://www.youtube.com/watch?v=usH8fFVrpWY pulls a golf cart onto a flatbed
-->

### Actuator 

The project is to add to the manually controlled toggle switch on the yellow box with an actuator controlled by a Pi or Arduino that runs on a timer. 

A later phase would add consideration of Sunrise/Sunset times for a specified Latitude.

The Pi case would need to have some dust filter and a fan powerful enough.

<!-- https://www.adafruit.com/product/412 -->
Small Push-Pull Solenoid - 12VDC $7.95

https://www.adafruit.com/product/2776
https://www.sparkfun.com/products/11015
Mini Push-Pull Solenoid - 5V
https://www.alibaba.com/product-detail/0626L-pull-push-type-solenoids_60076297489.html?spm=a2700.7724838.2017115.29.4a7c4d4f8DIlrS
https://www.robotshop.com/en/5v-solenoid.html
iot-solonoid-mini.jpg
has a series resistance of 5.1Ω and inductance of 2359.25µF.
Although rated at 5V, sending 9v pulse to the solenoid to give it some extra kick.
18v for about 25ms
It has a white JST connector.
https://www.youtube.com/watch?time_continue=15&v=W9j6ZRsOUrI
13V
https://www.youtube.com/watch?v=vdDJG125rTE

<a name="BoxLowered"></a>

### Box Lowered #

The platform with an open box (feed tray) would be lowered by something like a garage door opener. 

The advantage of this approach is that food is not on the ground, which causes some waste and is less hygienic (if that matters).

Arduino web garage door opener Mar 9, 2014: <a target="_blank" href="https://www.youtube.com/watch?v=2YkLJx9ev64">1 - The Circuit</a>, <a target="_blank" href="https://www.youtube.com/watch?v=SQy-hrKAzJc">3 - Building and Testing the Project</a>.

http://www.instructables.com/id/Arduino-WiFi-Garage-Door-Opener/

https://github.com/Megunolink/GarageDoorOpener

<a target="_blank" href="https://www.wemustbegeeks.com/esp8266-nodemcu-wifi-iot-garage-door-opener-relay-with-cayenne/">
The video in this blog</a>
describes tweeks to a garage door opener.


<a name="BoxDumper"></a>

### Box Dump #

<a target="_blank" href="http://forum.arduino.cc/index.php?topic=300690.0">
This post talks about</a>
a trap door held by a pin attached to a solenoid.
A quick pulse releases it.
A transistor or MOSFET to drive the release to protect the Arduino from excess current or spikes.

This project is similar to <a target="_blank" href="http://www.instructables.com/id/Paracord-and-Pulley-Hanging-Table/">
a hanging table</a> held up by pulleys.

The parts listed below are used to construct a platform with a box to hold hay (material).
The box is raised by four ropes (one on each corner).
There is a panel on 3 sides to hold material in.
For loading, the platform is lowered.
Due to the weight, the box is raised and lowered by a garage door opener.
There is a door on the front side that opens to let the material slide out.
So material can slide out of the platform, the front box edge is tilted down
and up by a separate stepper motor controlled by an Arduino or Pi computer
that controls the angle depending on the time of day (minutes before/after sun up).


## Parts and cuts #

* [__] <a target="_blank" href="http://www.homedepot.com/p/Pine-Plywood-Common-23-32-in-x-4-ft-x-8-ft-Actual-0-688-in-x-48-in-x-96-in-799397/202677224">
   $30 from Home Depot</a>
   one finished sheet of 3/4 inch pine <strong>plywood</strong> -
   4x8 foot or 48 x 96 inches used for framing. 

   At 2.5 pounds per square foot,
   the whole sheet weights about 84 lbs.

* [__] Have the yard make 4 cuts. 
   Cut it in half along the long edge for a 48x48 inch square shelf,
   then cut the four 12x48 slats for the walls and door.

   <strong>QUESTION: Does this provide enough volume to hold enough feed?</strong>
   We would need enough space to hold enough 
   for a single meal for two donkeys. Maybe 3.

* Make a 45 degree edge on each of the 3 side boards.

* [__] <a target="_blank" href="http://www.homedepot.com/p/Simpson-Strong-Tie-ZMAX-18-Gauge-Galvanized-Steel-Angle-A21Z/100375047">
   $0.58 from Home Depot</a> 14 galvanized steel 
   <strong>L brackets</strong>. 
   Attach 3 each of 3 to attach the 3 sides to the base.

* [__] 192 wood screws (4 each for 14 brackets), 1/2 inch long with tapered head.

* [__] 4 corner metal braces (drilling holes in baseboard would weaken it?)

* [__] 4 <strong>eye rings</strong> on the top of the sides
   for ropes to attach to the box.

  <a name="Release"></a>

* [__] Hinges on the edge for the front door.

* [__] <a target="_blank" href="https://solarbotics.com/product/gm2/">
   gear motor</a> actuator to lock and release latch.

* [__] Install the door release with a cable to the Arduino.

  <a name="Pulleys"></a>

   A hoist for a bicycle of about 100 lbs. is
   <a target="_blank" href="https://www.amazon.com/dp/B003VOX1XU?psc=1">
   $20 from Amazon</a>. Two sets should support 200 lbs, right?
   But that may not be enough for the platform.

* [__] 4 sets of block and tackle pulleys for 1/2 inch diameter size rope.
   <a target="_blank" href="https://www.amazon.com/Generic-Pulley-Block-Tackle-Hoist/dp/B001Z0WELC">$21 each from Amazon</a>.

   The four wheels provides 7:1 lifting ratio power for 2 tons of working load capacity.

* [__] <strong>Bolts</strong> on the ceiling to hold the pulleys
   should be braced to support that.

   Additional bracing may be needed for your ceiling.

   Check with a construction specialist.

* [__] 4 ropes to lower the platform almost to the ground.
   Although the height is about 10 feet each,
   about 4 times that is needed to go through the pulleys.
   So we get a standard size rope of 100 feet (30.48 meters).

   The 1/2 inch climber ropes are about $30 used, $40 new 
   <a target="_blank" href="http://www.ebay.com/bhp/rock-climbing-rope">
   on Ebay</a>

   - Measure the weight of the platform with ropes 
   at maximum load. The estimate is 100 pounds max.

   <a name="StepperMotors"></a>

   How to move the rope electronically?

* [__] TODO: Stepper motors sized to handle the weight.

   

   <a name="Sensors"></a>

* [__] Sensors to detect slippage.

* [__] Notification

* [__] Arduino board to signal the stepper motor.

* [__] Power supply


## How it works (I think) #


   1. The shelf is raised and lowered by four ropes,
   one on each corner. 

   0. During the dumping (feed) operation, 
   only one side is fully lowered so whatever is on it slides off.

   0. The <a href="#Release">release</a> if a vertical door is needed
   to hold enough stuff without spilling over.

   0. We use two sets of <a href="#Pulleys">pulleys</a>, one for each side.
   Pulleys enable a smaller motor to be used.

   0. <strong>Safety wire cables</strong> 
   keep the shelf from crashing to the floor ?

   0. Like a garage door, <strong>lasers</strong> sense whether there is something in the
   way before the platform is lowered.

   0. <a href="#StepperMotors">Two stepper motor</a> 
   controls each of 2 sides of the platform.
   Both would operate to raise or lower. Only one would operate to dump contents.
   
   0. A <strong>bell</strong> sounds before the food is dumped
   so the donkeys know to avoid the dump. Right.

   0. <a href="#Sensors">Sensors</a> identify if conditions are safe - 
   the position of the various parts (motor) 
   and whether each is still working.

   0. There would be <a href="#Logic">logic</a> on the Ardunio board that 
   to not do something if sensors indicate.

   0. In "productive mode", when it's time (5 minutes before dawn each day),
   the shelf is emptied automatically by lowering one side
   and releasing a latch.

   0. There should be a <strong>manual alternative</strong>
   to lower the shelf and open the door. That's in case of loss of electricity
   or when the computer part doesn't work.

   0. In "test mode", we would press a button to raise it; another button to lower it;
   and a third button to dump the food.
   This could be a multi-purpose button where one tap raises,
   two taps lowers it, and a long press to dump from above.


  <a name="Platform"></a>


## Breadboard #

Research:

   https://www.youtube.com/watch?v=RakXequOrSY

   and

   https://www.youtube.com/watch?v=WKdyBZvlFXk

0. Blue wire DC-   


## Servo vs. Stepper Motors

<a target="_blank" href="https://www.arduino.cc/en/Reference/Servo">
The Arduino website explains</a>
Servos have integrated gears and a shaft that can be precisely controlled. 
Standard servos allow the shaft to be positioned at various angles, 
usually between 0 and 180 degrees.
Continuous rotation servos allow the rotation of the shaft to be set to various speeds.
The Servo library supports up to 12 motors on most Arduino boards and 
48 on the Arduino Mega. 
On boards other than the Mega, use of the library disables analogWrite() (PWM) functionality on pins 9 and 10, whether or not there is a Servo on those pins. On the Mega, up to 12 servos can be used without interfering with PWM functionality; use of 12 to 23 motors will disable PWM on pins 11 and 12.

<a target="_blank" href="https://www.youtube.com/watch?v=FBA4zzVNds8">
This video explains:</a> A stepper motor is used in applications requiring about 2000 rpm or less where you need a lot of torque at the low end, where as a servo motor is typically used for your higher speed applications that are more dynamic and require more acceleration and deceleration typically 2000 rpm and higher.

A servo is always built with a feedback mechanism.

* https://www.youtube.com/watch?v=oOvRf7xa5r4


<a target="_blank" href="https://www.youtube.com/watch?v=AcLUopVZMco">
YouTube video: Practical Insight in selecting stepper motors for your build</a>
describes the difference between NEMA (National Electrical Manufactures Association)
stepper motor numbers:

   * NEMA 17 is 1.7" <br />
   holds 53 ounces of weight

   * NEMA 23 is 2.3" takes a #10 machine screw<br />
   holds 425 ounces (26.5 pounds)

   * NEMA 34 is 3.4" takes a 1/4" screw<br />
   holds 1232 ounces (77 pounds)

<a target="_blank" href="https://www.youtube.com/watch?v=mSU-GeEe0P0">
Some salvage the motors from scrap copy machines</a>


## Resources #

* http://www.leevalley.com/US/wood/page.aspx?p=74353&cat=51&ap=3


## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}
