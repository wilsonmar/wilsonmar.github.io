---
layout: post
title: "Finding fault in JVM-based Apps"
excerpt: "How to find and fix JVM reliability running Java"
tags: [JVM, PE]
date: "2016-10-31"
file: "finding-fault-in-jvm"
image:
# feature: pic white robots woman 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622167/45abd918-0585-11e6-8537-a58e0b55e3ec.jpg
  credit: Cyberconstruct. 
  creditlink: http://cyberconstruct.be/2015/02/digital-job-crafting/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This tutorial explains the tools and techniques for 
finding faults in applications that make use of the 
Java Virual Machine (JVM).

Languages that use the JVM include

* Java
* Scala
* JPython
* RubyPython
* etc.

## Potential root causes

* Configuration settings inappropriate (defaults)
* Network equipment failure
* Network delays
* Server hardware (memory, inappropriate cache size)
* Inadequate free disk space
* Code causing memory leaks
* Inefficient coding techniques

## Symptoms

* Delays in response time (due to garbage collection, slow database access, etc.)
* Memory leaks
* CPU spikes
* Heavy disk usage (thrashing, swapping)
* etc.

## The tools

0. Operating System level metrics (collected by Microsoft Windows Perfmon, etc.)
0. Operating System log storage and analysis

0. Application logs storage and analysis
0. Application log readers

0. JMX to collect from JVM Garbage Collection
0. JVM Garbage Collection log readers

0. Operating System thread dump readers

0. [Java Code Profilers](/jvm-profilers/) to identify resources consumed by specific objects

0. Debuggers (run one line at a time)

0. [Static code analyzers (such as SonarQube)](/SonarQube/)
0. Code linters


## Our services

* Interview to collect relevant facts and perspectives
* Advise on courses of action
* Design architecture and project plans
* Assist with implementation
* Verify
* Educate

> Call me 