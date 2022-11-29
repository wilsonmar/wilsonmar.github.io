---
layout: post
date: "2022-11-29"
file: "self-driving-cars"
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
{% include l18n.html %}
{% include _toc.html %}

Here are my notes about technical aspects of how cars can drive themselves to provide personal mobility.

TAGS: #autonomousdriving #AI

## Why AV (Autonomous Vehicles)

"Cut traffic deaths by half".

Part of the facination (and fear) about Artificial Intelligence (AI) is computers becoming <strong>better and faster</strong> than humans in many arenas.

Driving takes concentration and is tiring. 
Because human drivers can be inexperienced, drunk, too tired, too distracted, etc., 
at the current rate of progress on AVs (Autonomous Vehicles), eventually the cost of "human error" (1 accident every 100,000 miles) will be higher than misjudgements by computers controlling vehicles. 

Then, governments, auto makers, insurance companies, and others will make it more difficult to own human-driven cars. 

Over time, as AI take over the road, self-driving cars can <strong>travel faster</strong> than what people can safely handle (around 70 mph). This would create a market for <strong>mini-hotels</strong> such as
<a target="_blank" href="https://www.wallpaper.com/lifestyle/volvo-360c-autonomous-concept-car-review">Volvo’s 360c concept car</a> unveiled in 2018<a target="_blank" href="https://www.linkedin.com/pulse/5-ways-self-driving-cars-could-make-our-world-lives-better-marr/">*</a>
Without constant attention to driving, personal vehicles can be RVs with a desk, bed, toilet, frige, etc. Commute without stress. Travel between cities without going through security.

Less drag.


## The race to AV

Every auto manufacturer has a self-driving car program.
Among the <a target="_blank" href="https://www.cbinsights.com/research/autonomous-driverless-vehicles-corporations-list/">40 companies</a>:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th>Company</th><th>Automaker</th><th>Notes</th></tr>
<tr valign="top"><td><a href="#Apple">Apple</a></td><td>Mercedes</td><td>Drive.ai</td></tr>
<tr valign="top"><td><a href="#Apple">Bosch</a></td><td>Daimler</td><td>-</td></tr>
<tr valign="top"><td><a href="#Argo">Argo</a></td><td>Ford/VW/Amazon</td></tr>
<tr valign="top"><td><a href="#Audi">Audi</a></td><td>Audi</td></tr>
<tr valign="top"><td><a href="#Baidu">Baidu</a></td><td>Lincoln MKZ</td><td>China</td></tr>
<tr valign="top"><td><a href="#Comma">Comma</a></td><td>(Honda)</td></tr>
<tr valign="top"><td><a href="#Cruise">Cruise</a></td><td>GM/Honda</td></tr>
<tr valign="top"><td><a href="#BMW">Intel,MobileEye</a></td><td>BMW</td></tr>
<tr valign="top"><td><a href="#Lyft">Lyft</a></td><td>Aptiv</td></tr>
<tr valign="top"><td><a href="#Tesla">Tesla</a></td><td>Tesla</td></tr>
<tr valign="top"><td><a href="#Uber">Uber</a></td><td>-</td></tr>
<tr valign="top"><td><a href="#Google">Waymo/Google</a></td><td>Volvo XC90</td></tr>
<tr valign="top"><td><a href="#Amazon">Zoox/Amazon</a></td><td>custom</td></tr>
</table>

Honda's 2017 models and onward are built with self-driving features. (I have a 2018 model)


<a name="DriverTasks"></a>

## Driver tasks

Lateral control - steering

Longitudinal control - braking, accelerating

OEDR: Object and Event Detection and Response - The ability to detect objects and events that immediately affect the driving task, and to react to them appropriately. Slowing down when seeing a construction zone ahead. Swerve and slow down to avoid a pedestrian. Pulling over upon hearing sirens. Stopping at a red light.

Planning: Short term, Long term

Miscellaneous: Signaling other drivers


## Levels of autonomy 

ODD (Operational Design Domain) - The set of conditions under which a given system is designed to function. For example, a self driving car can have a control system designed for driving in urban environments, and another for driving on the highway.
In the rain. Chaning lanes.

Taxonomy from the Society of Automotive Engineers in 2014 <a target="_blank" href="https://www.sae.org/">SAE</a> <a target="_blank" href="https://www.sae.org/standards/content/j3016_201806/">J3016</a>:

\0. No automation

1. Driver Assistance - driver is fully engaged. Voice prompts.

2. Partial Automation - lane keeping with adaptive cruise control to maintain constant speed. No OEDR.

3. Conditional Automation - Partial Driving Automation with OEDR. Change lanes. Driver is ready to take over. GM Super Cruise & Nissan ProPilot Assist Audi A8 sedan can perform OEDR in slow traffic. Ford is hoping to do it too.

4. High Automation - Fully autonomous in controlled conditions. ADAS [advanced driver assistance systems] Does not require full user alertness. no controls for human use, operating within a geofence. Waymo.

5. Full Automation - unrestricted ODD (any road surface and road type) starting from without a geofence in a closed venue low-speed environment by minibuses, valet parking, delivery robots.
<br /><br />

PROTIP: As cars automate more, and human drivers have less to do, inattention becomes even more of an issue.

Volvo's Road Train had automated vehicles following a human lead vehicle.

In 2012, Nevada issued Google the first autonomous vehicle testing license on public roads.
California followed.

HAZOP: Hazard and Operability Study - A variation of FMEA (Failure Mode and Effects Analysis) which uses guide words to brainstorm over sets of possible failures that can arise.

NHTSA: National Highway Traffic Safety Administration - An agency of the Executive Branch of the U.S. government who has developed a <a target="_blank" href="https://www.nhtsa.gov/sites/nhtsa.dot.gov/files/documents/13069a-ads2.0_090617_v9a_tag.pdf">12-part framework PDF</a> to structure safety assessment for autonomous driving. 



### Shared rides

The high cost of computing power on purpose-built AVs forces amortization across many rides in taxis.

City governments may actually see lack of need for parking undermine revenue from cark parks and traffic tickets.

Uber has, since 2012, been offering free rides in driverless cars aroud Pittsberg and Chandler, AZ.

Cruise has been offering rides in San Francisco, California.

Las Vegas.

Uber and Lyft has dessicimated the jobs of human drivers.
COVID-19 is making it even more dangerous to be a driver.

NOTE: On Teslas even the glovebox lock is controlled by the computer.

Zoox got the first California permit to transport passengers in self-driving cars, in 2018.
Waymo in 2019. Uber in 2020.

## DARPA

Carnagie Mellon university won the 2nd DARPA grand challenge. Stanford was second.



<a name="Amazon"></a>

## Amazon

https://www.fastcompany.com/90754276/inside-the-design-of-zoox-amazons-quirky-self-driving-car

https://www.businessinsider.com/amazon-zoox-seattle-self-driving-cars-test-rain-weather-climate-2021-10 


## Companies

* https://www.technologyreview.com/s/604006/autox-has-built-a-self-driving-car-that-navigates-with-a-bunch-of-50-webcams/


<a name="Apple"></a>

### Apple

Apple has not openly discussed their self-driving car program.

In 2016, Apple's "Titan" program scaled back its 1,000 employee self-driving car platform.

A disclosure in 2018 states that 5,000 employees at Apple know about a self-driving car program in the company.

In April 2018, Apple hired Google's former AI boss to run Siri and machine learning.

<a name="Argo"></a>

### Argo

https://www.wired.com/story/ford-abandons-the-self-driving-road-to-nowhere/
Argo had pedigree, thanks to president Peter Rander, an alumnus of Uber’s abandoned self-driving project and among those the ride-hailing company had poached from the National Robotics Engineering Center, and CEO Bryan Salesky, a veteran of the Darpa challenges that kicked off the 21st century’s rush to autonomy. home base of Pittsburgh.

https://www.cnn.com/2022/10/26/tech/ford-self-driving-argo-shutdown
Ford takes $2.7 billion hit as it drops efforts to develop full self-driving cars

https://www.bloomberg.com/news/articles/2022-11-21/amazon-amzn-self-driving-car-deal-with-ford-f-vw-fell-through
Amazon Backed Out of Taking a Stake in Argo. Then the Self-Driving Startup Folded.

https://corporate.ford.com/operations/ford-autonomous-vehicles-and-mobility.html
Ford is building a commercial self-driving service for ride-hailing and goods delivery starting in 
Austin, TX, <a target="_blank" href="https://medium.com/self-driven/the-ford-journey-in-miami-dade-reaches-a-milestone-three-years-in-our-first-self-driving-city-29c95d5ff8ec">Miami, FL</a> and Washington, D.C. with plans to scale. 

Clemson

modelers at Revolution Design Studios

Ford is bringing together all the complex pieces needed to launch a scalable, successful self-driving service: this includes the self-driving system we are developing with our technology partner Argo AI, integrated into our <strong>Ford Escape Hybrid</strong> vehicle platform, a thoughtful customer experience across all touchpoints, physical infrastructure in the cities where we operate, as well as working with ride-hailing and delivery demand partners to bring our service to customers.
See https://medium.com/self-driven

<a name="Google"></a>

### Alphabet (Google) 

Alphabet (Google) holds a seven percent stake in Uber.
Google also owns Waymo.

<a target="_blank" href="https://www.youtube.com/watch?v=tiwVMrTLUWg">VIDEO</a>:
Chris Urmson, head of Google's driverless car program, shares footage showing how cars see.

<a target="_blank" href="https://www.wikiwand.com/en/Waymo">https://www.wikiwand.com/en/Waymo</a>

Google had a "firefly" vehicle.


<a name="Baidu"></a>

### Baidu's Apollo

Baidu is the Google of China, providing a search engine.

<a target="_blank" href="https://github.com/ApolloAuto/apollo/blob/master/docs/quickstart/apollo_3_0_quick_start.md">Apollo</a> (<a target="_blank" href="https://twitter.com/apolloplatform">@apolloplatform</a>) Baidu's self-titled "the world's first production-ready" AV.

Apollo Valet Parking is due to launch in 2020.

Silver at Udacity created a <a target="_blank" href="https://classroom.udacity.com/courses/ud0419/">free intro class</a> using Baidu's Apollo library at <a target="_blank" href="https://github.com/ApolloAuto/apollo">https://github.com/ApolloAuto/apollo</a>

Baidu's AV has 5 cameras and 12 ultrasonic radars. Processors onboard run Xilinx processors on Infineon chips.

<a target="_blank" href="https://dueros.baidu.com/en/index.html">
DuerOS</a> is Baidu's conversational AI program with embedded AI speech and image recognition. <a target="_blank" href="https://duer.baidu.com/en/html/dueros/index.html">*</a>

   <a target="_blank" href="https://github.com/ApolloAuto/apollo/blob/master/docs/quickstart/apollo_2_5_hardware_system_installation_guide_v1.md">(Apollo 2.5)</a>

 

<a name="Cruise"></a>

### Cruise

GM cars have "SuperCruise"


<a name="Comma"></a>

### Comma.ai

Rather than building vehicles, George Hotz, founder of <a target="_blank" href="https://www.comma.ai">Comma.ai</a> in San Diego, has its $100 "Comma two" Android mobile app to provide self-driving capabilities by a CAN bus wire harness taping via ODB-II port on <a target="_blank" href="https://comma.ai/shop/products/comma-two-devkit">several recent models of cars</a>: Acura RDX, Chrysler Pacifica, Honda Accord/CRV 2015+/Fit, Jeep Grand Cherokee, 2015+, Kia, Lexus CT/ES/IS/NX/RX, Subaru, Toyota Avalon/Camry/C-HR/Corolla/Highlander 2017+/Prius 2016+/RAV4, Volkswagon Golf 2015+).
<a target="_blank" href="https://www.youtube.com/watch?v=iwcYp-XT7UI&time=37m51s" title="Aug 5, 2019">"The 2020 Corolla is the best car with OpenPilot. It has less lag"</a>..

Comma's "OpenDriver" software is open sourced, so it's difficult to regulate by governments.

Heads-up Display (HUD) streams video for view online at <a target="_blank" href="https://my.comma.ai/cabana/">https://my.comma.ai/cabana</a>. It uses OpenStreetMap.

Comma's access to ODB-II enables response to ABS (Anti-brake System) triggers.

<a target="_blank" href="https://www.youtube.com/watch?v=Nnh5TQ60hek" title="Feb 24, 2020 [22:54">VIDEO</a>:
The camera facing the driver detects whether the driver is paying attention to the road.
There are also infrared LEDs on Comma's windshield case to provide night-time driver monitoring.

* <a target="_blank" href="https://www.youtube.com/watch?v=iwcYp-XT7UI">VIDEO</a>:
* https://www.youtube.com/watch?v=2Veptye978c

<a name="Lyft"></a>

### Lyft

<a target="_blank" href="https://twitter.com/LyftLevel5">Lyft's Level5</a>


### Tesla Motors

Elon Musk became the wealthiest person in the world with 25% ownership in Tesla.

<a target="_blank" href="https://www.youtube.com/watch?v=HM23sjhtk4Q" title="April 22, 2019">VIDEO</a>: "Lidar is a fool's errand". 


### X-Motors



<hr />

## Hardware

![self-driving-hw-648x300-42002](https://user-images.githubusercontent.com/300046/42538319-e4d58fc0-8454-11e8-81c4-10037a9ed4e6.jpg)

Baidu uses the Surround Computer Vision Kit hardware and <a target="_blank" href="https://www.youtube.com/watch?v=EceAB6TUYzo">Responsibility Sensitivity Safety (RSS) model</a> from <a target="_blank" href="https://www.digitaltrends.com/cars/intel-mobileye-100-self-driving-cars/">
Intel's Mobileye</a>.

ASUS GTX1080 GPU-A8G- Gaming GPU Card

GNSS: Global Navigation Satellite System - A generic term for all satellite systems which provide position estimation. The Global Positioning System (GPS) made by the United States is a type of GNSS. Another example is the Russian made GLONASS (Globalnaya Navigazionnaya Sputnikovaya Sistema).

IMU: Inertial Measurement Unit - A sensor device consisting of an accelerometer and a gyroscope. The IMU is used to measure vehicle acceleration and angular velocity, and its data can be fused with other sensors for state estimation.

RADAR: Radio Detection And Ranging - A type of sensor which detects range and movement by transmitting radio waves and measuring return time and shifts of the reflected signal.

SONAR: Sound Navigation And Ranging - A type of sensor which detects range and movement by transmitting sound waves and measuring return time and shifts of the reflected signal. 


#### Controls

Computers needs to be able to control the vehicle's steering, throttle, and breaking systems to execute its planning.

So vehicles need to be equipped with by-wire systems: brake by-wire, steering by-wire, throttle by-wire and shift by-wire, etc.

Additional organizations work with the 
Autonomous Technology Certification Facility (ATCF)

LTI: Linear Time Invariant - A linear system whose dynamics do not change with time. For example, a car using the unicycle model is a LTI system. If the model includes the tires degrading over time (and changing the vehicle dynamics), then the system would no longer be LTI.

MPC: Model Predictive Control - A method of control whose control input optimizes a user defined cost function over a finite time horizon. A common form of MPC is finite horizon LQR (linear quadratic regulation).
LQR: Linear Quadratic Regulation - A method of control utilizing full state feedback. The method seeks to optimize a quadratic cost function dependent on the state and control input.

<hr />

## Software

PID: Proportional Integral Derivative Control - A common method of control defined by 3 gains:
1) A proportional gain which scales the control output based on the amount of the error
2) An integral gain which scales the control output based on the amount of accumulated error
3) A derivative gain which scales the control output based on the error rate of change


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

An <a target="_blank" href="https://github.com/ApolloAuto/apollo/tree/master/docs/demo_guide">off-line demo</a> without the expensive hardware can install and run on laptops.
It's kinda like the Grand Theft Auto game.
It uses Baidu's Python-based Apollo Dreamview visualization software running under Linux: Ubuntu 14.04.
Apollo is based on Linux Kernel 4.4.32).

Cruse's <a target="_blank" href="https://github.com/cruise-automation/rosbag.js">
Rosbg.js</a> is a node.js & browser compatible Node@10.x module for reading 
<a target="_blank" href="http://wiki.ros.org/rosbag">rosbag binary data files</a>.

RTOS


### GPS

It needs a three-dimensional model (point cloud) of the road network, including the road, buildings, tunnels, etc. with road names and the speed limit for each stretch of road, traffic lights, and other traffic control information.

Apollo uses the OpenDRIVE map standard used by its competitors.
Baidu has 300 survey vehicles to map all the highways in China.

[4:50] A particle filter, a sophisticated type of triangulation which calculates how far the vehicle is from various landmarks (street lights, traffic signs, manhole covers).


### Localization

For a vehicle to "localize" itself to <strong>single-digit centimeter</strong> accuracy, it currently needs to use several technologies.

Self-driving cars need to figure out more precisely where it is in the world than what GPS (Global Positioning System) can provide. A GNSS (Global Navigation Satellite System) receiver needs at least 3 of 30 satellites to calulate its location (based on time of flight).
Also, GPS updates every 10 seconds, which is too slow.

RTK (Real Time Kinematic) positioning uses ground stations to provide "ground truth" used to ensure GPS accuracy to 10 meters.

The <a target="_blank" href="https://www.digikey.com/en/product-highlight/a/analog-devices/adis1647x-mini-mems-imu-2000-sec/">Inertial Measurement Unit (IMU)</a> consists of a 3-axis gyroscope and accelerometer.
It updates at 1000 Hz (near real time).
The system has to reconcile two XY coordinate frames: the vehicle and the map.
In the 3D Gyroscope, the spin axis is set to the global coordinate system while the 3 gimbals rotate.


<a name="LIDAR"></a>

## LiDAR

LiDARs today use 32 lasers and 1 or 2 million beams per second, and that a 64-laser system emitting 6.4 million beams a second would give superior vertical resolution and quicker refreshes. This would be better able to capture small, fast objects such as animals darting into the road. 

Alex Lidow, CEO and cofounder of Efficient Power Conversion, a provider of the gallium nitride chips found in many modern lidars.
https://backchannel.com/how-my-public-records-request-triggered-waymos-self-driving-car-lawsuit-1699ff35ac28#.vi4talr7i
by <a target="_blank" href="https://medium.com/@meharris/">@meharris</a>


<a name="Perception"></a>

### Perception

Ego localization: Position, Velocity, acceleration, Orientation, angular motion.

High defition (HD) maps use computer vision to recognize objects within images captured:
   * Road and lane markings on-road
   * Potholes on-road
   * Construction signs, obstructions on-road
   * Curbs off-road
   * Traffic lights off-road
   * Road signs off-road
   <br />

Sensor uncertainty.

Occlusion, reflection, illumation, lens flare. So redundant sensors are useful.

Classification, detection, segmentation.

Perception using CNN (Convolutional Neural Networks)
cameras, radar, LiDAR (Light Detection and Ranging System).

Deep (learning) Neural Networks are used to draw bounding boxes to identify which lane the car is using.

<a target="_blank" href="http://www.cvlibs.net/datasets/kitti/">
The KITTI Vision Benchmark Suite</a>


<a name="Prediction"></a>

### Prediction

A RNN (Recurrent Neural Network)
is used to project trajectories, Frenet coordinates
on short and long time horizons.

Software creates <strong>waypoints</strong> that plot the plan.


<a name="Planning"></a>

### Planning

Predictive planning - Planning the expected route...

Reactive planning

Analyzing the actual route traveled.

<a target="_blank" href="https://ieeexplore.ieee.org/abstract/document/7490340">
Frazzioli’s Survey for Autonomous Planning</a> [for purchase]
for motion planning and other high-level behaviour

<a target="_blank" href="https://onlinelibrary.wiley.com/doi/abs/10.1002/rob.20255">
Autonomous driving in urban environments: "Boss" and the Urban Challenge</a> 
discusses one of the very early mixed planning systems from the winner of the DARPA Urban Challenge.


Here are some rules for driving at a stop sign. Which of the following is an appropriate priority ranking?

1) For non all-way stop signs, stop at a point where you can see oncoming traffic  without blocking the intersection

2) If there are pedestrians crossing, stop until they have crossed

3) If you reach a stop sign before another vehicle, you should move first if safe


<hr />

## Trainings

<a target="_blank" href="https://www.youtube.com/watch?v=1L0TKZQcUtA">VIDEO</a>:
<a target="_blank" href="http://selfdrivingcars.mit.edu/">
MIT 6.S094: Introduction to Deep Learning and Self-Driving Cars</a>

BTW David Silver worked at Ford's self-driving car program and is now teaching online Udacity's hands-on Nanodegree programs on self-driving cars at the 
<a target="_blank" href="https://www.udacity.com/course/intro-to-self-driving-cars--nd113">4-month Intro</a> and <a target="_blank" href="https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd013">advanced Engineer (2 three-month terms)</a>. Students work on Udacity's car named Nanna.

   * https://discussions.udacity.com/
   * Slack for students
   <br /><br />

Udacity is founded by Sabastian Thrun (from Sweden), the "father" of self-driving car. When he was a professor at Stanford, his team won the first DARPA Grand Challenge car race. He then joined Google.


<a name="Coursera"></a>

### Coursera

Coursera.com offers a 100% on-line <a target="_blank" href="https://www.coursera.org/specializations/self-driving-cars">"Self-Driving Cars" specialization</a> from the University of Toronto, Canada professors
of Applied Engineering (Aerospace Studies)
<a target="_blank" href="https://www.linkedin.com/in/stevenlwaslander/">Steven Waslander</a> and 
<a target="_blank" href="https://www.linkedin.com/in/jonathanscottkelly/">Jonathan Kelly</a> at the
Waterloo Autonomous Vehicles LaboratoryWaterloo Autonomous Vehicles Laboratory
(wavelab.uwaterloo.ca).
Giving talks are experts from Oxbotica and Zoox.

Build your own self-driving software stack and get ready to apply for jobs in the autonomous vehicle industry.

<a target="_blank" href="https://www.coursera.org/learn/intro-self-driving-cars/programming/ac8R5/final-project-self-driving-vehicle-control/instructions">Your own final project</a> is to implement a Python controller and create a trajectory.txt file containing waypoints to navigate a provided track using Throttle, Steering, and Brake commands. 

<a target="_blank" href="https://www.coursera.org/learn/intro-self-driving-cars/supplement/pGdcu/carla-installation-guide">Install</a> a customized version of the <strong>CARLA simulator</strong> created using <a target="_blank" href="https://www.unrealengine.com/en-US/features">Unreal Engine</a>: 
macOS is not natively supported by CARLA and therefore the CARLA binaries that we provide also do not support macOS. It is recommended to create a dual-boot to either Linux or Windows in order to setup CARLA for the course.
   * Dual-Boot between Ubuntu and MacOS - https://help.ubuntu.com/community/MactelSupportTeam/AppleIntelInstallation
   * Install Windows on your Mac with Boot Camp - https://support.apple.com/en-ca/HT201468
   <br /><br />
   * Windows 7 64-bit (or later) or Ubuntu 16.04 (or later), Quad-core Intel or AMD processor (2.5 GHz or faster), NVIDIA GeForce 470 GTX or AMD Radeon 6870 HD series card or higher, 8 GB RAM, and OpenGL 3 or greater (for Linux computers).

https://github.com/carla-simulator/carla/
Use the shell script to start CARLA.
  
https://www.coursera.support/s/article/360044758731-Solving-common-issues-with-Coursera-Labs?

Server mode

Background is preferred in linear algebra, probability, statistics, calculus, physics, control theory, and Python programming. 

4-courses:
1. Introduction to Self-Driving Cars
2. State Estimation and Localization for Self-Driving Cars (Kalman filters)
3. Visual Perception for Self-Driving Cars
4. Motion Planning for Self-Driving Cars
<br /><br />

<hr />

## References

https://interestingengineering.com/transportation/autonomous-self-driving-cars-tesla
