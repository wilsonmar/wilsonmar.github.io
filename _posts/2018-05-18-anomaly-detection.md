---
layout: post
title: "Anomaly Detection"
excerpt: "Here's a way to achieve WTF (What the Face) - the unexpected"
tags: [Anomaly, TSDB]
date: "2018-05-18"
file: "anomaly-detection"
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

Here are notes from my research on detecting anomalies.

## What is it?

Anomaly detection is considered one of the <a target="_blank" href="https://wilsonmar.github.io/machine-learning algorithms/">
Machine Learning algorithms</a>

Unlike statistical regression, 
anomaly detection can fill in missing data in sets.

Typical examples of anomaly detection tasks are detecting credit card fraud, 
medical problems, or errors in text.

### Types of anomalies

Anomalies are also referred to as outliers, novelties, noise, deviations and exceptions.

A <strong>point anomaly</strong>  is an observation this is unusual when compared with all the rest of available observations.
For example: An outlier.

A <strong>contexual anomaly</strong>  is an observation that is unusual in a certain context but not in other contexts. 
For example: seasonality.

A <strong>collective anomaly</strong> occurs when a collection of related data instances is anomalous (not normal) with respect to the entire data set.
For example: regression formula

To distinguish between data classes as normal versus "risky",
we compare the anomaly detection algorithms:

   * <a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn913103.aspx">
   One-class Support Vector Machine</a>

   * <a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn913053.aspx">
   Principal Component Analysis (PCA)-based Anomaly Detection</a>

   * Time Series Anomaly Detection


## Microsoft Azure

Let's take a hands-on approach to predict credit risk as anomalies within German Credit data:

<a target="_blank" href="
https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/apps-anomaly-detection-api">
https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/apps-anomaly-detection-api</a>
dives in.

https://archive.ics.uci.edu/ml/datasets/Statlog+(German+Credit+Data

1. Go to webpage https://gallery.azure.ai/Experiment/1219e87f8fb84e88a2e1b54256808bb3
"Anomaly Detection: Credit Risk" dated September 2, 2014.

1. <a target="_blank" href="https://gallery.azure.ai/Experiment/b6b96207eef94a15b0ef87bf69a0f771">
Anomaly Detection ML example experiment</a> by Laploy V. Angkul laploy@gmail.com
https://gallery.azure.ai/Experiment/Anomaly-Detection-9

2. Click "Open in Studio".

3. 

https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/pca-based-anomaly-detection


https://gallery.azure.ai/Experiment/Anomaly-Detection-Credit-Risk-21

https://gallery.azure.ai/Experiment/Anomaly-Detection-Credit-Risk-5

https://gallery.azure.ai/MachineLearningAPI/Anomaly-Detection-2


## Other Tools

### Cortical

<a target="_blank" href="http://www.cortical.io/">
http://www.cortical.io</a>
developed a cortical engine for processing text.
"fingerprint"

## HTM from Numata

HTM stands for Hierarchical Temporal Memory. 
The "Temporal" means the time dimension is added. 
Time based inference (TBI) lessens the impact of noise on accuracy.

## Numenta

<a target="_blank" href="https://numenta.com/papers-videos-and-more/resources/on-intelligence/">
The book "On Intelligence"</a> written by Jeff Hawkins (founder of Palm and Handspring) published in 2005 talks about a Cortical Learning Algorithm (CLA), which since 2010 is called Hierarchical Temporal Memory (HTM).

<a target="_blank" href="https://numenta.com/biological-and-machine-intelligence/">
Numata's biological and machine intelligence</a>
Its v1.7 achieved 98.4% accuracy on the MNIST dataset.

<a target="_blank" href="https://www.youtube.com/watch?v=6_wattbWgiU&t=12m">
YouTube: Visualization of HTM processing</a>

<a target="_blank" href="https://numenta.com/htm-studio/">
https://numenta.com/htm-studio</a>
makes use of HTM.

   * https://github.com/numenta/htmpapers
   * https://www.businesswire.com/news/home/20160627005453/en/Numenta-Releases-HTM-Studio
   * The Numenta Anomaly Benchmark (NAB) at <a target="_blank" href="https://github.com/numata/nab
">https://github.com/numata/nab</a>
   measures performance running HTM and Etsy's Skyline algorithms

Numenta created NuPIC (Platform for Intelligent Computing) 

Neurons use most of their synapses to make predictions.

Supervised deep learning CNN is limited because it is based on many training examples.

Sensor streams are often seen in massive volumes and high velocities, which leaves little room for human intervention, parameter tweaking or data labeling (training).

sensorimotor theory

Time-Adjacency Matrix


Tutorials on HTM:

* <a target="_blank" href="https://www.youtube.com/user/OfficialNumenta/playlists?disable_polymer=1">
Numenta's YouTube playlist</a>

   * <a target="_blank" href="https://www.youtube.com/playlist?list=PL3yXMgtrZmDqhsFQzwUC9V8MeeVOQ7eZ9
   VIDEO: HTM School by Matt Taylor, Numenta's Open Source Flag-Bearer

   Visualizations shown in HTM School are based on code at<br />
   <a target="_blank" href="https://github.com/htm-community/htm-school-viz">
   https://github.com/htm-community/htm-school-viz</a>


* <a target="_blank" href="https://www.youtube.com/watch?v=lzJd_a6y6-E">
Siraj's Numenta Explainer on YouTube Jan 11, 2018</a>

* <a target="_blank" href="http://mrcslws.com/">Marcus Lewis</a>
<a target="_blank" href="https://www.youtube.com/watch?v=bqu-hc4pc7Q&list=PL3yXMgtrZmDoXS0PAA5X2ID-0CH3JkVWG">
vYouTube Playlist</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=lzJd_a6y6-E">
HTM Engine Tutorial: Traffic Anomalies Aug 3, 2015</a>

* <a target="_blank" href="https://github.com/llSourcell/numenta_explained">
https://github.com/llSourcell/numenta_explained</a>

Among <a target="_blank" href="https://numenta.com/papers/">
Numata's white papers</a> is <a target="_blank" href="https://numenta.com/papers/unsupervised-real-time-anomaly-detection-for-streaming-data/">
real-time anomaly detection for streaming data</a>.

### Sparse

The <a target="_blank" href="https://eigen.tuxfamily.org/dox/group__TutorialSparse.html
">Eigen vectorized math library</a> makes HTM code efficient, and can be GPU-accelerated as well.

CLA made use of <strong>Sparse Distributed Representations (SDR)</strong>
Very large matrices where only a few coefficients are different from zero. 
In such cases, memory consumption can be reduced and performance increased by using a specialized representation storing only the <strong>nonzero</strong> coefficients. 
Such a matrix is called a <strong>sparse matrix</strong>.
It's useful for Continuous learning.

Two sets of SDR matrices can have an overlap or a union.
A <strong>theta score</strong> defines the threshold whether two matrics match.

But the presence of noise can obfuscate the match.

   TOOL: SDR Matching presents a GUI to explore the relationship between

   PROTIP: SDK is rather resistant to noise.

   Episode 5 shows the SDR Scalar Encoder.

<a target="_blanK" href="https://www.youtube.com/watch?v=6_wattbWgiU&t=27m">
Generation 3 in 2014</a>

<a target="_blanK" href="http://archive.fortune.com/magazines/fortune/fortune_archive/2004/10/18/8188051/index.htm">
Fortune article</a>

### HTM

HTM learns time-based patterns in unlabeled streaming data.

HTM is modeled based on the workings of most advanced part of the brain -- the Neocortex "white matter" where memories and personality are stored. This field is called Neuroscience.

The <strong>Laminar circuit</strong> within the cortex is emulated by a <strong>common cortical algorithm</strong> which describes how all cortical regions and all sensory-motor modalities work. In layers:

   <a target="_blank" href="https://www.youtube.com/watch?v=6_wattbWgiU&t=26m">
   common-cortical-algorithm.png</a>

The top of the hierarchy is the frontal cortex, which passes commands
down to lower levels controlling muscles.

Hawkins founded at U.C. Berkeley the Redwood Neuroscience Institute, a scientific institute focused on understanding how the neocortex processes information.

### Videos

<a target="_blank" href="https://www.mitpressjournals.org/doi/full/10.1162/NECO_a_00893">
Continuous Online Sequence Learning with an Unsupervised Neural Network Model</a>

### Numenta Social

* <a target="_blank" href="https://github.com/numenta">
   Numenta corporate website</a>
* <a target="_blank" href="https://discourse.numenta.org/">
   Discourse at numeta.org</a>
* <a target="_blank" href="https://discourse.numenta.org/categories">
   Numenta Forums</a>
* <a target="_blank" href="https://medium.com/@Numenta/">
   Numenta Medium articles</a>

### Numenta People

* Donna Dubinsky @ddubinsky CEO
* P of Research @SubutaiAhmad
* Christy Maver @christymaver


## Theory Videos

* <a target="_blank" href="https://www.youtube.com/watch?v=YnSFhluG5Cw">
"Real-Time Anomaly Detection on Time-Series IoT Sensor Data Using Deep Learning" [17:13]</a> 
by Romeo Kienzler of Data Natives


* <a target="_blank" href="https://www.youtube.com/watch?v=5vrY4RbeWkM">
Anomaly Detection 101</a> by Elizabeth (Betsy) Nichols Ph.D.
DevOpsDays Silicon Valley 14 Nov 2015

* <a target="_blank" href="https://www.youtube.com/watch?v=I5lSEHvngaI">
Science of Anomaly Detection [17:13] 17 Oct 2014</a>
by Scott Purdy (spurdy@Numenta.com, @scottmpurdy)

## InfluxDB

Time series database InfluxDB
went through YC 2013.

<a target="_blank" href="https://www.youtube.com/channel/UCnrgOD6G0y0_rcubQuICpTQ">
InfluxDB YouTube channel</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=qeg2jwpWhPU">
   Benchmarking Elasticsearch vs InfluxDB for Time-Series Data & Metrics</a>


### InfoDB + Grafana + Kapacitor

https://www.youtube.com/watch?v=86cOdXXvjhA
    Grafana: Open Source Metrics Dashboard Rackspace Developers 13,870 views
    32:28

https://www.youtube.com/watch?v=hAI-qz399EQ
   InfluxDB Tech Tips - June 2016 InfluxData 543 views

* <a target="_blank" href="https://www.youtube.com/watch?v=QoED4oFe1hY">
   Introduction to Kapacitor for Alerting and Anomaly Detection </a>
   at InfluxData

* <a target="_blank" href="https://www.youtube.com/watch?v=3swnsoydKTI">
   Watch Everything, Watch Anything: Anomaly Detection [38:04] 26 Jun 2016</a>
   by Nathaniel Cook (@nathanielvcook) of InfluxData
   at Salt Lake City DevOps Days 

* <a target="_blank" href="https://www.youtube.com/watch?v=xBkegcd2bFE">
    Paul Dix (CEO): Time Series Data with InfluxDB</a>
    at Data Science Summit 2015
    Turi, Inc.

* <a target="_blank" href="https://www.youtube.com/watch?v=sRi64imN7xg">
    Introduction to InfluxDB</a> by Paul Dix Hakka Labs 8,463 views
    53:08

* <a target="_blank" href="https://www.youtube.com/watch?v=yxZfS6WXFoM">
   Internals and future of InfluxDB</a> 
   by Paul Dix at the DigitalOcean Community Meetup


## Apache Spark

* <a target="_blank" href="https://www.youtube.com/watch?v=TC5cKYBZAeI">
53:03 Anomaly Detection with Apache Spark - Sean Owen George Agnelli 11,002 views

* <a target="_blank" href="https://www.youtube.com/watch?v=0GNRpPaGrMk">
Step by step guide how to build a real-time anomaly detection system using Apache Spark Streaming </a>
by Mariusz Jacyno 

* <a target="_blank" href="https://www.youtube.com/watch?v=MeLMinRl63E">
Petabyte Scale Anomaly Detection Using R & Spark</a>
Spark Summit

## Datadog

* <a target="_blank" href="https://www.youtube.com/watch?v=mG4ZpEhRKHA">
Detecting outliers and anomalies in realtime at Datadog</a> 
by Homin Lee (OSCON Austin 2016)

## HawkEys

* <a target="_blank" href="https://www.youtube.com/watch?v=u3pilN4SPZw">
HawkEye: A Real Time Anomaly Detection System</a>
by Satnam Singh - HasGeek TV

## AI

* <a target="_blank" href="https://www.youtube.com/watch?v=NKpuX_yzdYs">
Andrew Ng - The State of Artificial Intelligence</a>
at MIT EmTech November 7, 2017

<a target="_blank" href="https://gallery.azure.ai/Experiment/b6b96207eef94a15b0ef87bf69a0f771">
Anomaly Detection ML example experiment</a> to predict credit risk as anomalies within German Credit data



## Microsoft's CNTK

<a target="_blank" href="https://github.com/Microsoft/CNTK/blob/master/Tutorials/CNTK_106B_LSTM_Timeseries_with_IOT_Data.ipynb">
CNTK 106: Part B - Time series prediction with LSTM (IOT Data)</a>


## Videos

https://www.youtube.com/watch?v=0PtehdUL-38
Robust anomaly detection for real user monitoring data - Velocity 2016, Santa Clara, CA 17:14
by Ritesh Maheshwari


https://www.youtube.com/watch?v=xvdLX1jvoOI
Anomaly detection in R Tukang Leding 
76 views


https://www.youtube.com/watch?v=CAvKQHHNmcY
Anomaly Detection Algorithms and Techniques for Real-World Detection Systems Next Day Video 1,440 views


https://www.youtube.com/watch?v=Mj1oHwJ7i2o
Real-time Anomaly Detection Architecture 
DATA SCIENCE SUMMIT EUROPE 2016 476 views


https://www.youtube.com/watch?v=5mBiac_dhbs
"Data-driven Anomaly Detection" 
| Talks at Google Talks 
by Nikunj Oza of NASA Aames Lab
at Google 5,376 views


https://www.youtube.com/watch?v=ILq-3z5Plck
AppliedAI #1 - From anomaly detection to deep learning Ravelin


https://www.youtube.com/watch?v=0PqzukqMcdA
24:40
Machine Learning for Real-Time Anomaly Detection in Network Time-Series Data - Jaeseong Jeong RISE SICS

https://gallery.azure.ai/browse/?algorithms=[%22One-Class%20Support%20Vector%20Machine%22]
lists a gallery of links about Anomaly Detection.


## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html %}
