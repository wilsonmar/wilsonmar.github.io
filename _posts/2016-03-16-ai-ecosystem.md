---
layout: post
title: "AI Ecosystems APIs"
excerpt: "Brand names for how corporate overlords are making humans into robots"
tags: [machine learning, AI]
image:
# feature: pic green matrix hallway 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14623876/07afd066-0593-11e6-933a-2e596511ac67.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

## Leading Companies #

In the 2010's there is an "arms race" in offering 
Artificial intelligence and Machine Learning (ML) services in their clouds:

   * [Microsoft Cortana in Azure cloud](/microsoft-ai)
   * Google's TensorFlow
   * IBM Watson
   * Amazon Alexa and Lex Chatbot
   * Apple Siri
   * Facebook 
   <br />

Each of the above are cloud vendors hoping to cash in by charging for storing and processing data on their cloud. Facebook, as we all know to our chagrin, makes money from selling their user's data to advertisers.

Benedict Evans, resident futurist at venture capital firm Andreessen Horowitz, 
observes in a <a target="_blank" href="http://ben-evans.com/benedictevans/2016/6/23/ai-apple-and-google"> blog post</a> that the future of AI remains opaque: 
"This field is moving so fast that it's not easy to say where the strongest leads necessarily are, nor to work out which things will be commodities and which will be strong points of difference."

<a target="_blank" href="https://gibhut.com/josephmisiti/awesome-machine-learning/">
awesome-machine-learning</a>
provides many links to resources, so they will not be repeated here.

## Pubs 

There is a website that specializes in academic publications about Artificial Intelligence.
See the <a target="_blank" href="https://docs.google.com/spreadsheets/d/1xej5Nca2xUUtrZ1GCyPjFMqI9ZgNq_OhgnTxOOMQ2js/edit#gid=404493967">Arxiv Paper Analysis Worksheet (Responses) on Google Sheet</a>

<a target="_blank" href="http://aka.ms/academicgraph">
Microsoft Academic Graph (MAG)</a>
knowledge base mined from the Bing web index. It models scholarly activities: field of study, author, institution, paper, venue, and event.

## Algorithmia

<a target="_blank" href="https://algorithmia.com/algorithms">
Algorithmia.com</a> provide API interfaces to algorithms offered by its partners.
They have these data conversion utilities for conventional lookups of data:

   * https://algorithmia.com/algorithms/alixaxel/CoordinatesToTimezone

   * https://algorithmia.com/algorithms/Geo/ZipData

   * https://algorithmia.com/algorithms/Geo/ZipToState

   * https://algorithmia.com/algorithms/Geo/LatLongDistance

   * https://algorithmia.com/algorithms/Geo/LatLongToUTM

   * https://algorithmia.com/algorithms/util/ip2hostname

   * https://algorithmia.com/algorithms/opencv/ChangeImageFormat (from jpg to png)

## The offerings



<a name="Translation"></a>

## Translation #

<a target="_blank" href="https://translate.google.com/">
https://translate.google.com</a>
and the Google Translate API 
has been working on translating websites since the 90's.
In 2017 Google made a breakthrough 

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/translator/">
Microsoft's Translator Speech</a>

<a name="CV"></a>

## Computer Vision #

Open-source OpenCV (Computer Vision) was an early entrant and is still used today by many because
it is written in C and runs quite efficiently. 

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/">
Microsoft's Computer Vision</a>

https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/getting-started-build-a-classifier
Hands-on guide: build a classifier with Custom Vision


<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/face/">
Microsoft's "Face"</a>

   * https://algorithmia.com/algorithms/z/ColorPalettefromImage

   * <a target="_blank" href="https://cloud.google.com/vision/">Google Cloud Vision API</a>

   * https://algorithmia.com/algorithms/opencv/FaceDetection
  then https://algorithmia.com/algorithms/opencv/CensorFace

   * https://algorithmia.com/algorithms/ocr/RecognizeCharacters OCR

   Some of these make use of <strong>OpenCV</strong> (CV = Computer Vision).


<a name="VoiceRecognition"></a>

## Voice Recognition

   * <a target="_blank" href="https://cloud.google.com/speech/">
   Google Cloud Speech API</a>, which powers Google’s own voice search and voice-enabled apps. 

   * <a target="_blank" href="http://www.techrepublic.com/article/microsofts-ai-can-now-understand-speech-better-than-humans/">
   Microsoft says its Cortana is as accurate as human transcriptionists</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/bot-framework/bot-service-quickstart/">
Microsoft's Web App Bot</a>


## NLP Sentiment Analysis #

   Analyze text for positive or negative sentiment (opinion),
   based on a training database of potential word meanings,
   which involved Natural Language Processing:

   * https://algorithmia.com/algorithms/nlp/SentimentAnalysis

   * IBM's algorithm

   Andrew W. Trask,
   PhD student at University of Oxford
   Deep Learning for Natural Language Processing
   authored Grokking Deep Learning.

   Use Bag of words and
   Word2vec
   transform words into vectors.
   Use TFLearn, a Python library for quickly building networks.

## Document (article) Search #

Google made it's fortune on offering search services.

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/bing-web-search/">
Microsoft's Bing Search</a>


   <strong>TF-IDF = Term Frequency - Inverse Document Frequency</strong>
   emphasizes important words (called a vector)
   which appear rarely in the corpus searched (rare globally).
   which appear frequently in document (common locally)
   Term frequency is measured by word count (how many occurances of each word).

   The IDF to downweight words is the log of #docs divided by 1 + #docs using given word.

   Cosine similarity normalizes vectors
   so small angle thetas identify similarity.

   Normalizing makes the comparison invariant to the number of words.
   The common compromise is to cap maximum word count.

## Recommender

Recommender systems recommend (advises) users about what to do,
based on the pattern detected in similar situations observed in the past.

collaborative filtering and factorization machines.

implement the solution using sparse distributed matrices in PySpark.

## Footnotes

https://www.wikiwand.com/en/Deep_learning


## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include   %}
