---
layout: post
title: "Self-driving cars"
excerpt: "What can possibly go wrong with robots smarter than humans?"
tags: [Python, Machine Learning]
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

{% include _toc.html %}

self-driving.md

Here are notes on how cars can drives themselves,
based on various sources

TAGS: #autonomousdriving #AI

Part of the facination (and fear) about Artificial Intelligence is how computers are becoming better than humans in many arenas.

Because human drivers can be inexperienced, drunk, too tired or too distracted, etc. I predict that, at the current rate of progress, eventually the cost of "human error" will be higher than misjudgements by computers controlling vehicles. Then, governments, auto makers, insurance companies, and others will make it more difficult to own cars. This is because self-driving cars can travel faster than what people can safely handle (around 70 mph). 

If Uber and/or <a target="_blank" href="https://twitter.com/LyftLevel5">Lyft's Level5</a> venture succeed, parking will be a thing of the past.

The levels of autonomy (from the Society of Automotive Engineers):

1. Driver Assistance - driver is fully engaged.
2. Partial Automation - cruise control, lane keeping.
3. Conditional Automation - driver is ready to take over.
4. High Automation - no controls for human use, operating within a geofence
   <a target="_blank" href="https://github.com/ApolloAuto/apollo/blob/master/docs/quickstart/apollo_2_5_hardware_system_installation_guide_v1.md">(Apollo 2.5)</a>
5. Full Automation - without a geofencem in a closed venue low-speed environment such as by minibuses, valet parking, delivery robots. <a target="_blank" href="https://github.com/ApolloAuto/apollo/blob/master/docs/quickstart/apollo_3_0_quick_start.md">(Apollo 3.0)</a>


## Controls

Computers needs to be able to control the vehicle's steering, throttle, and breaking systems to execute its planning.
So vehicles need to be equipped with by-wire systems: including but not limited to brake by-wire, steering by-wire, throttle by-wire and shift by-wire.

Honda's 2017 models and onward are built that way.

The Lincoln MKZ is what Apollo is currently tested on.

On 2018 Teslas even the glovebox lock is controlled by the computer.

ASUS GTX1080 GPU-A8G- Gaming GPU Card

Autonomous Technology Certification Facility (ATCF)

## Degrees

BTW David Silver worked at Ford's self-driving car program and is now teaching online Udacity's hands-on Nanodegree programs on self-driving cars at the 
<a target="_blank" href="https://www.udacity.com/course/intro-to-self-driving-cars--nd113">4-month Intro</a> and <a target="_blank" href="https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd013">advanced Engineer (2 three-month terms)</a>.

   * https://discussions.udacity.com/
   * Slack for students
   <br /><br />

Students work on Udacity's car named Nanna.

Udacity is founded by Sabastian Thrun, the "father" of self-driving car.
When he was a professor at Stanford, his team won the DARPA Grand Challenge car race. He then joined Google.


## Companies

* https://www.technologyreview.com/s/604006/autox-has-built-a-self-driving-car-that-navigates-with-a-bunch-of-50-webcams/

### Baidu's Apollo

Silver created a <a target="_blank" href="https://classroom.udacity.com/courses/ud0419/">free intro class</a> using Baidu's Apollo library at:

   <a target="_blank" href="https://github.com/ApolloAuto/apollo">https://github.com/ApolloAuto/apollo</a>

<a target="_blank" href="https://dueros.baidu.com/en/index.html">
DuerOS</a> is Baidu's conversational AI program with embedded AI speech and image recognition. See
https://duer.baidu.com/en/html/dueros/index.html

Social:

   * https://twitter.com/apolloplatform
 
Baidu is the Google of China, providing a search engine.

### Alphabet (Google) 

Alphabet (Google) holds a seven percent stake in Uber.
Google also owns Waymo.


## Hardware

![self-driving-hw-648x300-42002](https://user-images.githubusercontent.com/300046/42538319-e4d58fc0-8454-11e8-81c4-10037a9ed4e6.jpg)

Baidu uses the Surround Computer Vision Kit hardware and <a target="_blank" href="https://www.youtube.com/watch?v=EceAB6TUYzo">Responsibility Sensitivity Safety (RSS) model</a> from <a target="_blank" href="https://www.digitaltrends.com/cars/intel-mobileye-100-self-driving-cars/">Intel's Mobileye</a>.

## Software


### Architecture of Processes

<a target="_blank" href="https://www.youtube.com/watch?v=DMNOBBQKdr4">
This 2017 TED Talk</a> [9:10]
by David Silver describes the various technologies necessary:

![self-driving-processes-631x314-22719](https://user-images.githubusercontent.com/300046/42537767-13749670-8453-11e8-890f-38d91083b3d2.jpg)

An updated diagram:

![self-driving-structure-576x379-29945](https://user-images.githubusercontent.com/300046/42572084-2038664c-84d6-11e8-92be-5db2e2451529.jpg)

The eventual design for version 3.0 of Baidu's design adds a "Guardian" component:

![self-driving-apollo_3 0_699x365-33837](https://user-images.githubusercontent.com/300046/42573483-737bc968-84d9-11e8-93ab-4a04ab2e7055.jpg)

The "Canbus" is a Controller Area Network (CAN) which transfers data between devices without the assistance of a host computer. Attach a temperature sensor to the surface of the main IC chip on ESD CAN (an Altera FPGA chip) to monitor the surface temperature of the chip to make sure it is not overheating.


### HMI (Human-Machine Interface)

An off-line demo without the expensive hardware can install and run "rosbag". 
See: https://github.com/ApolloAuto/apollo/tree/master/docs/demo_guide

It's kinda like Grand Theft Auto game (but you can't get out of the car to beat up prostitutes).

It uses Baidu's Python-based Apollo Dreamview visualization software running under Linux: Ubuntu 14.04.

Apollo is based on Linux Kernel 4.4.32)

RTOS


### GPS

It needs a three-dimensional model (point cloud) of the road network, including the road, buildings, tunnels, etc. with road names and the speed limit for each stretch of road, traffic lights, and other traffic control information.

Apollo uses the OpenDRIVE map standard used by its competitors.
Baidu has 300 survey vehicles to map all the highways in China.

[4:50] A particle filter, a sophisticated type of triangulation which calculates how far the vehicle is from various landmarks (street lights, traffic signs, manhole covers).


### Localization

Self-driving cars need to figure out more precisely where it is in the world than what GPS (Global Positioning System) can provide. A GNSS (Global Navigation Satellite System) receiver needs at least 3 of 30 satellites to calulate its location (based on time of flight).

BTW, RTK (Real Time Kinematic) positioning uses ground stations to provide "ground truth" used to ensure GPS accuracy to 10 meters.

GPS updates every 10 seconds, which is too slow.

For a vehicle to "localize" itself to <strong>single-digit centimeter</strong> accuracy, it uses several technologies.

The Inertial Measurement Unit (IMU) is like the acellerometer on your phone.
It updates at 1000 Hz (near real time).
The system has to reconcile two XY coordinate frames: the vehicle and the map.
In the 3D Gyroscope, the spin axis is set to the global coordinate system while the 3 gimbals rotate.

<a name="LIDAR"></a>

## LiDAR

LiDARs today use 32 lasers and 1 or 2 million beams per second, and that a 64-laser system emitting 6.4 million beams a second would give superior vertical resolution and quicker refreshes. This would be better able to capture small, fast objects such as animals darting into the road. 

Alex Lidow, CEO and cofounder of Efficient Power Conversion, a provider of the gallium nitride chips found in many modern lidars.

* https://backchannel.com/how-my-public-records-request-triggered-waymos-self-driving-car-lawsuit-1699ff35ac28#.vi4talr7i
by https://medium.com/@meharris/



<a name="Perception"></a>

### Perception

High defition (HD) maps use computer vision to recognize objects within images captured.

Classification, detection, segmentation.
Perception using CNN (Convolutional Neural Networks)
cameras, radar, LiDAR (Light Detection and Ranging System).

Deep (learning) Neural Networks are used to draw bounding boxes to identify which lane the car is using.

<a name="Prediction"></a>

### Prediction

RNN (Recurrent Neural Network)

To project trajectories, Frenet coordinates
on short and long time horizons
Software creates waypoints that plot the plan.

<a name="Planning"></a>

### Planning

Planning the expected route...

Analyzing the actual route traveled.



## Classes

https://www.youtube.com/watch?v=1L0TKZQcUtA<br />
MIT 6.S094: Introduction to Deep Learning and Self-Driving Cars
http://selfdrivingcars.mit.edu/

