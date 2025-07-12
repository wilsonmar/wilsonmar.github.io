---
layout: post
date: "2025-07-12"
lastchange: "v006 + URDF :2021-08-02-ros.md"
url: "https://wilsonmar.github.io/ros"
file: "ros"
title: "ROS (Robotic Operating System)"
excerpt: "Learn the operating system for viewing using Gazebo and controlling simple robots"
tags: [Robots, DevOps]
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit:
  creditlink:
comments: true
created: "2021-08-02"
---
<i>{{ page.excerpt }}</i>


<a target="_blank" href="https://bomonike.github.io/ros"><img align="right" width="100" height="100" alt="ros.png" src="https://github.com/bomonike/bomonike.github.io/blob/master/images/ros.png?raw=true" />

This is at https://bomonike.github.io/ros
with source at https://github.com/bomonike/bomonike.github.io/blob/master/ros.md

https://classic.gazebosim.org/tutorials?tut=ros_urdf

https://gazebosim.org/docs/ionic/spawn_urdf/

https://www.nvidia.com/en-us/learn/learning-path/robotics/
Robotics Fundamentals
Start your robotics journey with essential foundations in simulation, Robot Operating System (ROS), and robot learning.
Discover how to build intelligent robotic systems with NVIDIA Isaac™, a comprehensive ecosystem for robotic development, with these NVIDIA Deep Learning Institute (DLI) courses. Gain a foundational understanding of core robotics concepts and explore essential workflows in simulation and robot learning with hands-on training in Isaac Sim™ and Isaac Lab.

## Areas

* Perception
* Planning
* Control

## Companies

The robotics industry is rapidly evolving, with companies innovating in areas like industrial automation, healthcare, defense, consumer products, and autonomous systems. Many of these companies are pushing the boundaries of artificial intelligence, computer vision, and advanced mechanical engineering to create increasingly capable and versatile robotic systems.

Major Players:

* Boston Dynamics - Known for their advanced humanoid and quadruped robots like Atlas and Spot. They focus on creating highly mobile and dexterous robots.
* NVIDIA - Develops the Isaac robotics platform for designing, simulating and deploying robots. Their AI technologies power many autonomous machines.
* Intuitive Surgical - Pioneers in robotic-assisted surgery with their da Vinci surgical systems.
* ABB Robotics - Major player in industrial robotics and automation.
* FANUC - Leading manufacturer of industrial robots and automation systems.

Innovative Startups:
* Anduril Industries - Develops autonomous systems for defense and national security applications. Recently raised $1.5 billion at a $14 billion valuation.
* Agility Robotics - Creates bipedal robots like Digit for warehouse and logistics applications.
* Simbe Robotics - Builds autonomous robots for retail inventory management.
* Vecna Robotics - Provides autonomous mobile robots for logistics and material handling.
* Energy Robotics - Offers robot-as-a-service solutions for industrial inspections.

Specialized Robotics Companies
* iRobot - Focuses on consumer robots like the Roomba vacuum cleaner.
* DJI - Leader in consumer and commercial drones.
* Starship Technologies - Develops autonomous delivery robots.
* RightHand Robotics - Specializes in robotic picking solutions for e-commerce fulfillment.
* ANYbotics - Creates four-legged robots for industrial inspections.


## Robot in space?

![ros-Robonaut2-ISS-770x578](https://user-images.githubusercontent.com/300046/133761877-fd7d01b0-9c81-4def-a644-ebcae4b7aba0.jpg)

<a target="_blank" href="https://www.youtube.com/channel/UCaigdIdLyOlAEBYj8U3camg">VIDEO</a>:
The "first human-like robot to space" went onboard the NASA STS-133 ULF-5 mission to the International Space Station "to become a permanent resident" on the orbiting spacecraft. With a pair of robotic arms and nimble hands, the humanoid robot known as Robonaut2 (<strong>R2</strong>) <a target="_blank" href="https://www.nasa.gov/sites/default/files/files/Robonaut2_508.pdf">can</a> "one day venture outside the station (for EVA) to help spacewalkers to make repairs or additions to the station or perform scientific work."

> "It can lift heavy objects in space. But then, since everything is weightless, anyone can."

## Amazing

The IEEE catalogs robot projects at

https://robots.ieee.org/robots/

## Mechatronics

<a target="_blank" href="https://www.youtube.com/@OliverFoote">Oliver Foote</a> talks <a target="_blank" href="https://www.youtube.com/watch?v=1G6iwH0pn4c">Mechatronics</a> on his <a target="_blank" href="https://www.youtube.com/@OliverFoote">YouTube channel</a>

## Why ROS?

ROS (Robotic Operating System) is the <em>de facto</em> standard for robot programming.
It provides libraries and tools to help software developers create robot applications.
It provides hardware abstraction, device drivers, libraries, visualizers, message-passing, package management, and more.

ROS was originally developed in 2007 at
Stanford university's Artificial Intelligence Laboratory.
Since 2013 it is managed by the OSRF (Open Source Robotics Foundation) at <a target="_blank" href="https://www.openrobotics.org/">openrobotics.org</a> and offered free to use under open source BSD license at<br /><a target="_blank" hre="https://github.com/ros/">https://github.com/ros</a>

But in December 2022, the business of OSRC and OSRC-SG was acquired by <a target="_blank" href="https://www.intrinsic.ai/">Intrinsic.ai</a>, an Alphabet (Google) company that sells a the Flowstate robot developer environment.

<img alt="ros-intrinsic-flow-1898x1162.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1726565022/ros-intrinsic-flow-1898x1162_skd1rn.png">

## ROS Versions

"ROS" and "ROS2" are referenced interchangeably nowaday.

* ROS
* ROS2 facilitates a multi-robot architecture, which ROS was not build for.
* ROS3

This "classic" version of Gazebo at v1.9 reaches end-of-life in January 2025.


## URDF to SDF

URDF (Unified Robot Description Format) is a popular code-independent, human-readable format to describe the geometry of robots and their cells. It's XML in format.

https://wiki.ros.org/urdf

It's used for collision checking and dynamic path planning. Think of it like a textual CAD description: “part-one is 1 meter left of part-two and has the following triangle-mesh for display purposes.”

Currently, its limitations:
* It can only specify kinematic and dynamic properties of a single robot
* It cannot specify robot pose within a world
* It's limited in describing complex robot configurations

There are several ways to obtain a URDF file for Gazebo:

* Pre-processed Example: The rrbot.urdf from the gazebo_ros_demos package is a readily available example.

   https://gazebosim.org/docs/latest/spawn_urdf/

* GitHub Repositories: Some repositories like mybot_ws at https://github.com/richardw05/mybot_ws provide URDF models with different configurations:
   * Base URDF model
   * URDF with sensors
   * Navigation-enabled URDF

The URDF syntax breaks proper formatting with heavy use of XML attributes, which in turn makes URDF more inflexible. There is also no mechanism for backward compatibility.

To deal with this issue, a new format called the Simulation Description Format (SDF) was created for use in Gazebo. http://sdformat.org
Also XML, SDF is a complete description for everything from the world level down to the robot level. It is scalable, and makes it easy to add and modify elements. The SDF format is itself described using XML, which facilitates a simple upgrade tool to migrate old versions to new versions. It is also self-descriptive.

The Prop Shop at https://3dprop.store is an on online repository of 3D models.


## Thoughtworks Tech Radar

The influential October, 2024 publication<br />
https://www.thoughtworks.com/radar/languages-and-frameworks/summary/ros-2
says:

"ROS 2 is an open-source framework designed for the development of robotic systems. It provides a set of libraries and tools that enable the modular implementation of applications, covering functions like inter-process communication, multithreaded execution and quality of service. ROS 2 builds on its predecessor by providing improved real-time capabilities, better modularity, increased support for diverse platforms and sensible defaults. ROS 2 is gaining traction in the automotive industry; its node-based architecture and topic-based communication model are especially attractive for manufacturers with complex, evolving in-vehicle applications, such as autonomous driving functionality."

## ROS Specs

ROS runs within Ubuntu 14.04 (not other Linux flavors).

ROS <strong>modules</strong> can be written in any language for which a client library exists (C++, Python, Java, MATLAB, etc.).

   * <a target="_blank" href="http://wiki.ros.org/CppStyleGuide">http://wiki.ros.org/CppStyleGuide</a>

   * Python - <a target="_blank" href="https://www.youtube.com/watch?v=oxK4ykVh1EE">VIDEO</a>

   * MATLAB - <a target="_blank" href="https://www.mathworks.com/hardware-support/robot-operating-system.html">MATLAB</a>

   * <a target="_blank" href="https://github.com/siemens/ros-sharp">https://github.com/siemens/ros-sharp</a>ROS# is a set of open source software libraries and tools in C# for communicating with ROS from .NET applications, in particular Unity3D

https://docs.google.com/presentation/d/1qPtCeO6QDLKaYEKVROqICuv20lecLNQAEz7J8GD73c4/edit#slide=id.g119ec7c0a1_0_190


<a name="Hardware"></a>

## Hardware

https://wiki.ros.org/Industrial/supported_hardware

Richard Wang
https://www.youtube.com/watch?v=lgWnBWncRkU
Closed-loop Control of a Hardware Robot in ROS (part 5)

https://www.instructables.com/id/Autonomous-Mobile-Robot-Using-ROS/



<a name="Installation"></a>

## Installation

<a target="_blank" href="http://wiki.ros.org/ROS/Installation">http://wiki.ros.org/ROS/Installation</a>

<a target="_blank" href="http://wiki.ros.org/indigo/Installation/Ubuntu">http://wiki.ros.org/indigo/Installation/Ubuntu</a>

<a target="_blank" href="http://wiki.ros.org/catkin/workspaces">http://wiki.ros.org/catkin/workspaces</a>


### Simulators

Gazebo, Bullet, Issac

<a name="Gazebo"></a>

### Gazebo 3D Simulator

Gazebo visually simulates (displays) what the robot does.

<a target="_blank" href="http://gazebosim.org/">http://gazebosim.org</a>

<a target="_blank" href="http://gazebosim.org/tutorials">http://gazebosim.org/tutorials</a>

1. The Gazebo software includes a database of many robots and environments (<strong>Gazebo worlds</strong>)

   <ul><pre>rosrun gazebo_ros gazebo</pre>
   </ul>

   <a name="Catkin"></a>

   ## Catkin

   Catkin is the ROS build system to generate executables, libraries, and interfaces.

   A CMake-based build system that is used to build all packages in ROS.

1. Build the Eclipse project files with additional build flag

   § The project files will be generated in ~/catkin_ws/build

   <pre><strong>catkin_make</strong></pre>

1. Setup a Project in the Eclipse IDE:

   <pre><strong> catkin build package_name -G"Eclipse CDT4 - Unix Makefiles"
-DCMAKE_CXX_COMPI</strong></pre>


   ### Download

1. Directly clone to your <strong>catkin workspace</strong>.

   Using a common git folder is convenient if you have multiple catkin workspaces.

1. Open a terminal and browse to your git folder

   <pre><strong>cd ~/gits</strong>

1. Clone the Git repository with

   <pre><strong> git clone https://github.com/ethzasl/ros_best_practices.git</strong></pre>

1. Symlink the new package to your catkin workspace

   <pre><strong>ln -s ~/git/ros_best_practices/ ~/catkin_ws/src/</strong></pre>


   ## Launch

1. Launch files are written in XML as *.launch files


   <a name="Master"></a>

   ## Master

   The ROS Master manages the communication between nodes.

   Every node registers at startup with the master.

1. Start a master with

   <pre><strong> roscore </strong></pre>

1. See http://wiki.ros.org/Master


   <a name="Nodes"></a>

   ## Nodes

1. Run a talker demo node with

   <pre><strong> rosrun roscpp_tutorials talker</strong></pre>

<a name="Ideas"></a>

## Ideas

http://robotwebtools.org/
IS A COLLECTION OF OPEN-SOURCE MODULES AND TOOLS FOR BUILDING WEB-BASED ROBOT APPS.

http://robotwebtools.org/demos.html


### Justin Huang

(<a target="_blank" href="https://github.com/jstnhuang">jstnhuang on GitHub</a>), PhD student in robotics <a target="_blank" href="https://homes.cs.washington.edu/~jstn/">at the University of Washington in Seattle, Washington</a>

<a target="_blank" href="https://www.youtube.com/watch?v=9U6GDonGFHw">
ROS tutorial #1: Introduction, Installing ROS, and running the Turtlebot simulator</a>
135K views

<a target="_blank" href="https://www.youtube.com/watch?v=bJB9tv4ThV4">
ROS tutorial #2: Publishers and subscribers</a>
39K views

<a target="_blank" href="https://www.youtube.com/watch?v=2Cmdu6mkxD0">
ROS tutorial #2.1: C++ walkthrough of publisher / subscriber lab</a>
41K views

<a target="_blank" href="https://www.youtube.com/watch?v=MD255BS0YH4">
Tutorial Thursday! #1: ROS basics</a>
47K views


### Peter Frankhauser

<a target="_blank" href="https://pfankhauser@ethz.ch/">pfankhauser@ethz.ch</a>
<a target="_blank" href="http://www.rsl.ethz.ch/education-students/lectures/ros.html">rsl.ethz.ch</a>
at <a target="_blank" href="http://www.rsl.ethz.ch/">rsl.ethz.ch</a> in
Zurich, Switzerland

Programming for Robotics (ROS) Course

   <a target="_blank" href="https://www.youtube.com/watch?v=0BxVPCInS3M">Course 1</a>
   Slides <a target="_blank" href="https://www.ethz.ch/content/dam/ethz/special-interest/mavt/robotics-n-intelligent-systems/rsl-dam/ROS2017/lecture1.pdf">PDF</a>

<a target="_blank" href="https://www.youtube.com/watch?v=jYqDnuxTwK8">2</a> Eclipse IDE C++
Slides at <a target="_blank" href="https://www.ethz.ch/content/dam/ethz/special-interest/mavt/robotics-n-intelligent-systems/rsl-dam/ROS2017/lecture2.pdf">PDF</a>

<a target="_blank" href="https://www.youtube.com/watch?v=_GgHFuib_LU">3</a> UI, Robot Models
TF Transformation System http://wiki.ros.org/tf2
rqt User Interface
Robot models (URDF) Unified Robot Description Format describes your robot.
(composition, length of the different parts of the arm, which joints it contains, etc.)
The MoveIt! assistant for configuration.

   roslaunch moveit_setup_assistant setup_assistant.launch

Simulation descriptions (SDF) <a target="_blank" href="http://sdformat.org/">sdformat.org</a>
See <a target="_blank" href="https://www.ethz.ch/content/dam/ethz/special-interest/mavt/robotics-n-intelligent-systems/rsl-dam/ROS2017/lecture3.pdf">PDF</a>

<a target="_blank" href="https://www.youtube.com/watch?v=feXC7aQrkeM">4</a>
Slides at
<a target="_blank" href="https://github.com/ethz-asl/ros_best_practices/wiki">
https://github.com/ethz-asl/ros_best_practices/wiki</a>


<a target="_blank" href="https://www.youtube.com/watch?v=EnSpiaD4S1g">
[ROS tutorial for beginners] Chapter 1- Intro to Robot Operating System</a>
The Construct
12K views


### Lentin Joseph

<a target="_blank" href="https://www.packtpub.com/hardware-and-creative/mastering-ros-robotics-programming-second-edition">
Mastering ROS for Robotics Programming - Second Edition February 26, 2018</a>
By Lentin Joseph, Jonathan Cacace | $39.99 $8
Discover best practices and troubleshooting solutions when working on ROS.

ROS Robotics Projects
By Lentin Joseph | $39.99 $8

Build a variety of awesome robots that can see, sense, move, and do a lot more using the powerful Robot Operating System.


### Anil Mahtani

Effective Robotics Programming with ROS - Third Edition
By Anil Mahtani et al. | $39.99 $20.00
Find out everything you need to know to build powerful robots with the most up-to-date ROS.

   * ROS Programming: Building Powerful Robots (Packt)



### Robot Ignite Academy

<a target="_blank" href="https://www.theconstructsim.com/robotigniteacademy_learnros/ros-courses-library/"
title="Mar 27, 2017">ROS in 5 days by the Robot Ignite Academy at theconstructsim.com/robotigniteacademy_learnros/ros-courses-library</a>



## References

<a target="_blank" href="http://rosrobots.com/">rosrobots.com</a>
Exciting Robotics Projects and Tutorials using ROS
Build a variety of awesome robots that can see, sense, move, and more using the powerful Robot Operating System.
Packt Book
talks about interfaces to self-driving cars, Leap Motion VR, Tensor Flow.

<a target="_blank" href="https://www.packtpub.com/hardware-and-creative/ros-robotics-example-second-edition">ROS Robotics By Example - Second Edition November 30, 2017</a>
By Carol Fairchild, Dr. Thomas L. Harman | $39.99 $20.00
Learning how to build and program your own robots with the most popular open source robotics programming framework.

<a target="_blank" href="https://www.youtube.com/watch?v=DBFYZRMLr70">
VIDEO</a>:

<a target="_blank" href="http://www.ros.org/browse/list.php">http://www.ros.org/browse/list.php</a>

<a target="_blank" href="https://github.com/ros/cheatsheet/releases/download/0.0.1/ROScheatsheet_catkin.pdf">PDF in GitHub</a>

<a target="_blank" href="https://github.com/ethz-asl/ros_best_practices/wiki">github.com/ethz-asl/ros_best_practices/wiki</a>

"All I want is a two-finger robot that presses up/down buttons on a remote device."

<a target="_blank" href="https://www.youtube.com/watch?v=Z8mkwvJW-Xs">
VIDEO</a> <a target="_blank" href="http://www.openbionics.org/">http://www.openbionics.org</a>
focus on robotic hands with 5 fingers.

<a target="_blank" href="https://www.youtube.com/watch?v=DFfeY7PUh5Q">
VIDEO: The microdot push by Naran</a> is it (for $50). But it's out of stock.

https://www.youtube.com/watch?v=7TVWlADXwRw
What Is ROS2? - Framework Overview

## Hardware

https://www.robotshop.com/collections/clearpath-robotics
* Clearpath Robotics TurtleBot 4 Lite Mobile Robot
SKU: RB-Cle-04 is $1,336.99
* Clearpath Robotics TurtleBot 4 Mobile Robot
SKU: RB-Cle-03 is $2,191.44

## Arduino Alvik

https://store.arduino.cc/products/alvik
158,60
For an obstacle avoidance robot to a smart warehouse automation robot car.
Powered by the versatile Nano ESP32.
MicroPython and Arduino language. soon plans to introduce block-based coding
Sensors: Alvik’s Time of Flight, RGB color and line-following array sensors, along with its 6-axis gyroscope and accelerometer.
Comes with LEGO® Technic™ connectors,
M3 screw connectors for custom 3D or laser-cutter designs.

Servo, I2C Grove, and I2C Qwiic connectors
Add motors for controlling movement and robotic arms, or integrate extra sensors

## Ranka Emika Robot

 https://www.franka.de/co is based in Munchin (Munich), Germany

https://www.youtube.com/watch?v=bXo68UFNyhk
Torque sensors in all seven axes enable the arm to manipulate delicate objects such as jewlery.

https://www.youtube.com/watch?v=MI4QqJY6nJA
The $700 MyCobot Pi robot arm from Elephant Robotic has 6 DoF.

It's driven by a Raspberry Pi.

## Robotic arms

https://www.youtube.com/watch?v=q35VVfmouX8
Should you Buy a Robotic Arm?
by Austen Paul

https://www.youtube.com/watch?v=e3TNaIyTAnY
I Made a Robot Arm to Hold My Camera [$500]
by 3DprintedLife

## Alt Keyboard Builds

https://www.youtube.com/watch?v=rfJUuSfouM4
What the heck is a $279 Corne 42 MX split keyboard? Made my own 36-key.
by Adam Learns https://adamlearns.live/
* Uses Layers like on mobile phones
* https://github.com/Adam13531/crkbd/blob/choc-v3/README.md
* https://github.com/Adam13531/qmk_firmware/blob/master/keyboards/crkbd/keymaps/adam/keymap.c

Lily58

https://www.youtube.com/watch?v=fU2H1dTXcJU
Review: Sofle Split Mechanical Keyboard – build, encoders, choc switches. Full Review.
by Ben Frain


https://www.youtube.com/watch?v=rvM2BthjEI4
Building My Endgame Split Keyboard from Scratch
* Totem by GEISTGEIST: https://github.com/GEIGEIGEIST/TOTEM
* Totem (Tenting version) by Bert Plasschaert: https://github.com/BertPlasschaert/TOTEM-Tenting
* Sculpted KLP Lamé Keycaps printed in resin by braindefender: https://github.com/braindefender/KLP-Lame-Keycaps
* $25.99 Soldering iron: https://pine64.com/product/pinecil-smart-mini-portable-soldering-iron/
* Soldering tip cleaner kit: https://geni.us/xQ0L1c (Amazon)
* Batteries: https://www.ebay.de/itm/256408901266
* Keymap Editor by Nick Coutsos: https://nickcoutsos.github.io/keymap-editor/
* [4:1] $9.90 Seeed Studio XIAO Microcontroller

https://www.youtube.com/watch?v=PhxM8o__9Xo
My Journey From Mechanical to Ergonomic Keyboards | The Story of Kaly

https://www.youtube.com/watch?v=h_ex-oMVOrI
Building Dactyl Cygnus
by Juha Kauppinen


https://www.youtube.com/watch?v=N_mZEbJmKYg
Prebuilt Split Keyboards Aren't Overpriced
by If Coding Were Natural

https://www.youtube.com/watch?v=fU2H1dTXcJU
Review: Sofle Split Mechanical Keyboard – build, encoders, choc switches. Full Review.
Ben Frain

https://www.youtube.com/watch?v=IJxuzyO9b8M
How to Build a Custom Keyboard From Scratch | Part 1 Layout and Design
by Casual Coders

https://www.youtube.com/watch?v=EOaPb9wrgDY
Try the keyboards for yourself: https://adumb-codes.github.io
Code for all my videos is available at: https://github.com/sponsors/adumb-codes/

https://www.youtube.com/watch?v=riqmW3UHqPY
My favorite ergo split keyboard so far
EIGA

https://www.youtube.com/watch?v=7UXsD7nSfDY
I Built My Dream Keyboard from Absolute Scratch
Christian Selig

https://www.youtube.com/watch?v=Ong_-2G9RDM
the endgame keyboard
by Joshua Blais

https://www.youtube.com/watch?v=l5kAx08Iom4
How to Build a Wireless Lily58 Keyboard
Joe Scotto


## AI Agent

https://www.youtube.com/watch?v=WxcBEXkQoSE
Creating the MOST POWERFUL AI Agent for Your Second Brain
by Logan Hallucinates

## VEX Robotics labs

https://education.vex.com/stemlabs/cs


## Install ROS2 and Gazebo on Ubuntu

https://releases.ubuntu.com/noble/

1. Install Homebrew
1. Install Conda

1. Install ROS2 using RoboStack

1. Create a new Conda environment

   ```bash
   conda create -n ros2 python=3.9
   ```
1. Activate the environment:

   ```
   conda activate ros2
   ```

1. Install ROS2
   ```
   conda install -c robostack ros-humble-desktop
   ```
1. Install Gazebo: Deactivate the ROS2 environment
   ```bash
   conda deactivate
   ```
1. Install Gazebo using Homebrew
   ```
   brew install gazebo
   ```
1. Install additional ROS2-Gazebo packages

1. Activate the ROS2 environment
   ```bash
   conda activate ros2
   ```
1. Install Gazebo ROS packages
   ```bash
   conda install -c robostack ros-humble-gazebo-ros ros-humble-gazebo-ros-pkgs
   ```
1. Test the installation: # Run Gazebo GUI:
   ```bash
   gazebo
   ```

1. Run RViz2
   ```bash
   rviz2
   ```

