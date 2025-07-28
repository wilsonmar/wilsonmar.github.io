---
layout: post
date: "2025-07-27"
lastchange: "v027 + last names :2017-02-10-data-sources.md"
url: "https://wilsonmar.github.io/data-sources"
file: "data-sources"
title: "Data Sources"
excerpt: "Jump in and drown in all the data"
tags: [Python, Machine Learning]
image:
# data-sources-1900x500.png
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1700265759/data-sources-1900x500_jgmdls.png
  credit: 
  creditlink: 
comments: true
created: "2017-02-10"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here is a list of data available on the internet.

> "Data is the crude oil of the 21st Century, and analytics is the combustion engine." --Gartner

I'd like to see how different people work on the same set of data:

<a target="_blank" title="watson visualizations" href="https://cloud.githubusercontent.com/assets/300046/23342447/6c7e5bac-fc28-11e6-9a8d-112ef1836b57.png">
<img width="963" alt="watson visualizations" src="https://cloud.githubusercontent.com/assets/300046/23342447/6c7e5bac-fc28-11e6-9a8d-112ef1836b57.png"></a>


## Images

unsplash.com

<a target="_blank" href="https://paperswithcode.com/area/natural-language-processing">
Natural Language Processing datasets at PapersWithCode.com</a>

<a target="_blank" href="https://paperswithcode.com/area/computer-vision">
Computer Vision datasets at PapersWithCode.com</a>

## Speech / Voice

<a target="_blank" href="https://paperswithcode.com/area/speech">
Speech datasets at PapersWithCode.com</a>

<a target="_blank" href="https://paperswithcode.com/area/audio">
Audio datasets at PapersWithCode.com</a>


## Music

<a target="_blank" href="https://paperswithcode.com/area/music">
Music datasets at PapersWithCode.com</a>

<a target="_blank" href="https://developer.spotify.com/web-api/">
Spotify's API</a>
was used<a target="_blank" href="http://rcharlie.com/2017-02-16-fitteR-happieR/">
to identify the sadest Radiohead song</a>.

Lyrics

Pandora music?

Amazon music?


# Computer Code

<a target="_blank" href="https://paperswithcode.com/area/computer-code">
Computer Code datasets at PapersWithCode.com</a>

## Medical

<a target="_blank" href="https://paperswithcode.com/area/medical">
Medical datasets at PapersWithCode.com</a>

## Robots

<a target="_blank" href="https://paperswithcode.com/area/robots">
Robots datasets at PapersWithCode.com</a>

### Microsoft's COCO 

<a target="_blank" href="https://www.ted.com/talks/joseph_redmon_how_a_computer_learns_to_recognize_objects_instantly#t-286801">VIDEO</a>: 
Joseph Redmon's <a target="_blank" href="https://pjreddie.com/darknet/yolo/">YOLO (You Only Look Once) algorithm</a> recognizes over 80 categories of objects real-time in videos. On a laptop. Based on the University of Washington's open-source Darknet system.

### UCF YouTube Action Data Set

<a target="_blank" href="http://crcv.ucf.edu/data/UCF_YouTube_Action.php">
http://crcv.ucf.edu/data/UCF_YouTube_Action.php</a>
11 action categories: basketball shooting, biking/cycling, diving, golf swinging, horse back riding, soccer juggling, swinging, tennis swinging, trampoline jumping, volleyball spiking, and walking with a dog.

### MNIST Number Images

Instead of downloading yourself, note that the 
<a target="_blank" href="http://docs.floydhub.com/guides/datasets/">
Floydhub.com</a> has these image datasets already on their servers for Machine Learning code use:

<a target="_blank" href="http://yann.lecun.com/exdb/mnist/">
http://yann.lecun.com/exdb/mnist</a><br />
On the website of the "Godfather of ML", Yann Lecun)</a>
is the "hello world" of deep learning --
55,000 28x28 pixel images of hand-written numbers (from 0 thru 9).
Each image is labeled with the number written in the image.
The "NIST" in "MNIST" is for the US National Institute of Technology.

   * <a target="_blank" href="https://rodrigob.github.io/are_we_there_yet/build/classification_datasets_results.html">
   this</a> lists methods by their error rate.

   * <a target="_blank" href="https://www.youtube.com/watch?v=LqLyrl-agOw&t=1h32m44s">
   MNIST using a "flashlight" visualization by Tensorboard</a> 
   by Dandelion at the TensorFlow Dev Summit Feb. 2017.

   * The MNIST dataset comes pre-loaded in Keras, in the form of a set of four Numpy arrays,
   loaded using this code that references two sets of data -- the training set and testing set.

   <pre>from keras.datasets import mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()
   </pre>

   The "shape" of an array is the number of items and pixel height and width:

   <pre>train_images.shape
(60000, 28, 28)</pre>


<a target="_blank" href="http://mscoco.org/dataset/#download">
http://mscoco.org/dataset/#download</a><br />
COCO is a new image recognition, segmentation, and captioning dataset. 
It has 300,000 images containing multiple objects per image.
80,000 object categories.

<a target="_blank" href="http://www.robots.ox.ac.uk/~vgg/research/very_deep/">
http://www.robots.ox.ac.uk/~vgg/research/very_deep</a><br />
Imagenet VGG Very Deep 19
19 weight layers pre-trained Convnet model

<a target="_blank" href="http://www.vision.caltech.edu/Image_Datasets/Caltech101/">
http://www.vision.caltech.edu/Image_Datasets/Caltech101</a><br />
CALTECH 101/256
contains pictures of objects belonging to 101/256 categories

<a target="_blank" href="http://www.cs.utoronto.ca/~kriz/cifar.html">
http://www.cs.utoronto.ca/~kriz/cifar.html</a><br />
CIFAR 10/100
Subset of 80 million tiny images dataset (cats, horses, airplanes, etc.)

<a target="_blank" href="https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition">
https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition</a><br />
Cats vs Dogs Redux: Kernels Edition
Dataset for Kaggle's famous Dogs vs Cats competition

<a target="_blank" href="https://archive.ics.uci.edu/ml/datasets/Iris">
https://archive.ics.uci.edu/ml/datasets/Iris</a><br />
Iris Data

<a target="_blank" href="http://konect.uni-koblenz.de/">
http://konect.uni-koblenz.de</a><br />
KONECT (the Koblenz Network Collection) 
from the Institute of Web Science and Technologies at the University of Koblenz–Landau
collects large network datasets of all types in order to perform research in network science and related fields.


## Words

Google digitized (scanned) all the books in the 20th century and turned them into n-grams at<br />
https://books.google.com/ngrams/
with <strong>counts</strong> how often each word occurred in all books.

Wordnet 
defined affect scores -- a mood score.


## Data

<a target="_blank" href="https://data.gov">data.gov</a> is home to the U.S. Government’s open data.
Their <a target="_blank" href="https://labs.data.gov/dashboard/offices/qa">QA stats by department</a> provides data quality metrics such as:

   <ul>
   * % Valid metadata
   * % Working Download URLs
   * % Correct Format
   <br /><br />
   Visibly missing is data from the VA and EPA, plus most agencies.
   us_budget has dollar outlays of each bureau within all agency (branch) of the US government, by year from 1962 to 2021.
   </ul>


<a target="_blank" href="https://github.com/COVID19Tracking/covid-tracking-data">
COVID-19 Tracking Data</a> exposed by the API, featuring
hourly updates shown on <a target="_blank" href="https://covidtracking.com/">CovidTracking.com</a>.

<a target="_blank" href="https://parking.api.smgov.net/">
https://parking.api.smgov.net</a> has
Santa Monica parking meters API data
analyzed by http://www.memdump.io/about/
Sam Abrahams, course instructor at 
<a target="_blank" href="https://www.thisismetis.com/deep-learning-with-tensorflow/">
Metis's Deep Learning with Tensorflow</a>.

<a target="_blank" href="http://www.makeovermonday.co.uk/data/">
http://www.makeovermonday.co.uk/data</a>
has one (of 52) visualization makeover every week.

<a target="_blank" href="http://bit.ly/2lzp3KC">
IEX (Investors Exchange)</a> has real-time stock exchange.

archive.ics.uci.edu/ml/datasets.html

Amazon Cloud

Azure - Community content are in the Cortana Gallery.

   ![data sources ml azure cortana gallery 620x718](https://cloud.githubusercontent.com/assets/300046/25566235/1222c538-2da3-11e7-91f7-88c2149350da.png)

Google Big Data

   GitHub

   Wikipedia

   IMDB 

Kaggle

Allen Institute (ai2) - http://allenai.org/data.html

<a target="_blank" href="https://www.opensecrets.org/featured-datasets">
OpenSecrets.org provides datasets</a> related to US political campaign finance.

   * <a target="_blank" href="https://docs.google.com/spreadsheets/d/1yMoTeRd5BbiFBhIRN_q1uFcB4bjxDuhhvZjS6352c40/edit#gid=0">
   Google Sheet Contributions from AT&T, Verizon and Comcast to 115th Members</a>
    
25% of men of retirement age have one of these first names: John, William, James, Charles, or George.

The most common family names on the list of passengers on the Mayflower, as compiled by Christopher Jones in 1620:
Alden, Browne, Carter, Clarke, Cooke, Fuller, Martin, Priest, Rogers, Thompson, Turner, Warren, White, Williams.


## News

US Census

   http://news.google.com/archivesearch
   has 200 years of archives

   http://www.ibiblio.org/slanews/internet/archives.html

   http://www.ibiblio.org/slanews/internet/intarchives.htm
   has links to global archives

   http://searches.rootsweb.ancestry.com/ssdi.html
   Roots web

   http://search.ancestry.com/search/db.aspx?dbid=3693
   US Social Security Death Masterfile Index goes from 1935-2014

   http://www.worldcat.org/default.jsp
   "lets you search the collections of libraries in your community and thousands more around the world." 
   

## Maps of Geography 

<a target="_blank" href="https://waymo.com/open/about/">https://waymo.com/open</a> from Alphabet's (Google's) self-driving car company Waymo has data collected by Waymo self-driving cars. As of this writing, it had 1,950 segments for 20s each, collected by high resolution LIDAR cameras at 10Hz (200,000 frames) in diverse geographies and conditions. Their code is at <a target="_blank" href="https://github.com/waymo-research/waymo-open-dataset">https://github.com/waymo-research/waymo-open-dataset</a>


Country codes

City 

Street Names

Zip codes by state, latitude, longitude

Waypoints

<hr />

## Weather

<a target="_blank" href="https://www.timeanddate.com/weather/">[*] TimeAndDate.com</a> provides a webpage you can personalize with your favorite cities, with weather information and local time.

[?] <a target="_blank" href="https://openweathermap.org/api">OpenWeatherMap.org API</a> is free and based on 40,000 crowd-sourced weather stations.
   <a target="_blank" href="https://rapidapi.com/community/api/open-weather-map">*</a>

[x] <a target="_blank" href="https://www.weatherbit.io/">Weatherbit API</a>

[<a target="_blank" href="https://www.accuweather.com/en/us/joliet/59041/weather-forecast/2196900">*</a>] 
<a target="_blank" href="https://developer.accuweather.com/">AccuWeather API</a>

[<a target="_blank" href="https://wx.aerisweather.com/local/us/mt/joliet">*</a>] 
<a target="_blank" href="https://www.aerisweather.com/">AerisWeather API</a>

[x] <a target="_blank" href="https://weather2020.com/">Weather2020 API</a> provides a 12-week forecast.

[x] <a target="_blank" href="https://www.climacell.co/weather-api/">ClimaCell Microweather API</a>

[x] <a target="_blank" href="https://www.weatherbit.io/">Weatherbit</a> uses Machine Learning to predict weather.

[*] <a target="_blank" href="https://api.weather.mg/">Metrogroup</a> specializes in nautical data around the UK.

[*] <a target="_blank" href="https://weatherstack.com/">Weatherstack</a> in the UK.

* Dark Sky API</a> <a target="_blank" href="https://www.fastcompany.com/90485131/apples-dark-sky-acquisition-could-be-bad-news-for-indie-weather-apps">closed down, thanks to Apple.

[x] <a target="_blank" href="https://www.climate.gov/">NOAA (climate.gov)</a>

<a target="_blank" href="https://worldweather.wmo.int/en/home.html">World Meteorological Organization at https://worldweather.wmo.int</a> provides weather throughout the world, but for mostly cities.

<a target="_blank" href="https://forecast.weather.gov/MapClick.php?lat=45.4857&lon=-108.9697">[*]</a> 
<a target="_blank" href="https://www.weather.gov/">National Weather Service (weather.gov)</a>

<a target="_blank" href="https://weather.com/weather/today/l/f59d9298e84bbe13f58e2e13109b4d0c9cf46bdacd86ce7707d718f4630b2334">[*]</a> 
<a target="_blank" href="https://www.weather.com/">Weather Channel (weather.com)</a> (an IBM business)


<hr />

## Domains

First names registered in each state, by year, in the US
   from Google Big Data

Musicbase from a game

<hr />

## Using data   

1. Cleaning
2. Transformation
3. Reduction (generalize synonyms)



## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html %}


<hr />

<sub>{{ page.lastchange }} {{ page.date }}</sub>
