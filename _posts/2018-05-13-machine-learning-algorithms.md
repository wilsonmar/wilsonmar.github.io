---
layout: post
title: "Machine Learning Algorithms"
excerpt: "Tools for data science"
tags: [microsoft, Azure, machine learning, AI, cloud]
date: "2018-05-13"
file: "machine-learning-algorithms"
image:
# feature: pic green matrix hallway 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14623876/07afd066-0593-11e6-933a-2e596511ac67.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here is a catalog of what AI and Machine Learning algorithms and Modules offered by Microsoft Azure, Amazon, Google, SAS, MatLab, etc.

* <a href="#Anomaly">Anomaly Detection</a> to identify and predict rare or unusual data points.
* <a href="#Clustering">Clustering</a> to discover structure, separate similar data points into intuitive groups.
* <a href="#Regression">Regression</a> to predict values (forecast the future by estimating the relationship between variables)
* <a href="#Two-class"> Two-class Classification</a> to answer simple two-choice questions like yes-no or true-false.
* <a href="#Multi-class">Multi-class Classification</a> to answer complex questions with multiple possible answers

* <a href="#Stats">(descriptive) Statistical Functions</a>
* <a href="#Recommendation">Recommendation</a> (collaborative filtering)
* Sentiment Analysis

These Artificial Intelligence (AI) services make use of algorithms:

* <a href="https://wilsonmar.github.io/ai-ecosystem/#CV">Computer Vision</a>
* <a href="https://wilsonmar.github.io/ai-ecosystem/#VoiceRecognition">Voice Recognition</a>
* <a href="https://wilsonmar.github.io/ai-ecosystem/#TextAnalytics">Text Analytics</a> and
* <a href="https://wilsonmar.github.io/ai-ecosystem/#Translation">Translation</a>

<hr />

Microsoft created a cute interactive museum to view their use cases in a non-technical way at <a target="_blank" href="http://azuremlsimpleds.azurewebsites.net/simpleds/">
http://azuremlsimpleds.azurewebsites.net/simpleds/</a> along with
<a target="_blank" href="https://download.microsoft.com/download/0/5/A/05AE6B94-E688-403E-90A5-6035DBE9EEC5/machine-learning-basics-infographic-with-algorithm-examples.pdf">
PDF: Microsoft's long infographic about algorithms</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/studio/algorithm-cheat-sheet">
This cheat sheet PDF of Microsoft'a Azure ML Algorithms</a>
<a href="https://user-images.githubusercontent.com/300046/40009626-d5359eec-575f-11e8-8a4d-7a24d52d4d8b.png">
<img width="1280" alt="aml-cheatsheet.png" src="https://user-images.githubusercontent.com/300046/40009626-d5359eec-575f-11e8-8a4d-7a24d52d4d8b.png"><br />(click for full-screen image)</a>

From the <a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906033.aspx">
A-Z List of Machine Learning Studio Modules</a>,
lists basic database and UI features such as forms,
which means it's building standard computing functions on top of AI capabilities.

<a name="x"></a>
<a name="y"></a>
<table border="1" cellpadding="4" cellspacing="0">
<tr align="bottom" align="left">
<th> Category </th><th> Algorithm </th><th> Notes </th></tr>
<tbody>
<tr valign="top"><td rowspan="4"><a name="Stats"></a> Statistical Functions
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905933.aspx"> 
  Descriptive Statistics (Summarize Data)</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905917.aspx"> 
  Hypothesis Testing</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905819.aspx"> 
  Compute T-Test Linear Correlation</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905813.aspx"> Evaluate Probability Function Evaluation</a>
  </td><td><a href="#y">-</a>
  </td></tr>

<tr valign="top"><td rowspan="3"><a name="Recommendation"></a> Recommendation (collaborative filtering)
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905987.aspx"> 
  Train Matchbox Recommender</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905970.aspx"> 
  Score Matchbox Recommender</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905954.aspx"> 
  Evaluate Recommender</a>
  </td><td><a href="#y">-</a>
  </td></tr>

<tr valign="top"><td rowspan="8"><a name="Regression"></a> Regression
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906022.aspx"> 
  Bayesian Linear Regression</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905801.aspx"> 
  Boosted Decision Tree</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905862.aspx"> 
  Tree Decision Forest</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn913093.aspx"> 
  Fast Forest Quantile Regression</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905978.aspx"> 
  Linear Regression</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a href="#x"> Neural Network Regression</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906029.aspx"> 
  Ordinal Regression</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a href="#x"> Poisson Regression</a>
  </td><td><a href="#y">-</a>
  </td></tr>

<tr valign="top"><td rowspan="1"><a name="Clustering"></a>Clustering
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905944.aspx"> 
  K-means Clustering</a>
  </td><td><a href="#y">-</a>
  </td></tr>

<tr valign="top"><td rowspan="3"><a name="Anomaly"></a> Anomaly Detection
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn913103.aspx">
  One-class Support Vector Machine</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn913053.aspx">Principal Component Analysis-based Anomaly Detection</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a href="#x"> Time Series Anomaly Detection</a>
  </td><td><a href="#y">-</a>
  </td></tr>
<tr valign="top"><td rowspan="8"><a name="Two-class"></a> Two-class<br />Classification
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906036.aspx">
  Averaged Perceptron</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905930.aspx">
  Bayes Point Machine</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906025.aspx"> 
  Boosted Decision Tree</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906008.aspx"> 
  Decision Forest</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905976.aspx"> 
  Decision Jungle</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905994.aspx"> Logistic Regression</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905947.aspx"> Neural Network</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905835.aspx"> Support Vector Machine</a>
  </td><td><a href="#y">-</a>
  </td></tr>

<tr valign="top"><td rowspan="6"><a name="Multi-class"></a> Multi-class<br />Classification
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905810.aspx"> 
  Tune Model Hyperparameters</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906015.aspx"> Decision Forest</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905963.aspx"> Decision Jungle</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905853.aspx"> Logistic Regression</a> 
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906030.aspx"> 
  Neural Network</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905887.aspx"> 
  One-vs-all</a>
  </td><td><a href="#y">-</a>
  </td></tr>

<tr valign="top"><td rowspan="4"><a name="TextAnalytics"></a> Text Analytics
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906018.aspx"> 
  Feature Hashing</a>
  </td><td><a href="#y">-</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/mt712721.aspx"> 
  Named Entity Recognition Vowpal Wabbit (v8)</a>
  </td><td><a href="#y"> <a href="https://github.com/JohnLangford/vowpal_wabbit/wiki">JohnLangford</a></a>
  </td></tr>
  <tr valign="top"><td>
  Sentiment analysis
  </td><td><a href="#y"> ?</a>
  </td></tr>
  <tr valign="top"><td>
  Bot (chat) Framework</a>
  </td><td><a href="#y"> ?</a>
  </td></tr>
</tbody></table> 

<hr />

<a target="_blank" href="https://blogs.sas.com/content/subconsciousmusings/2017/04/12/machine-learning-algorithm-use/">
SAS machine learning algorithms</a> explains this diagram of their algorithms:

<a target="_blank" title="machine-learning-algorithms-sas-1152x580.jpg" href="https://user-images.githubusercontent.com/300046/40882277-92e74fec-6699-11e8-8c96-f43efbdba776.jpg"><img alt="machine-learning-algorithms-sas-640x580-116018.jpg" src="https://user-images.githubusercontent.com/300046/40882266-55b0d6c0-6699-11e8-8a57-d678bfaf5fbb.jpg"><br />(click image for full screen pop-up)</a>


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

<a target="_blank" href="https://github.com/Microsoft/CNTK/blob/master/Tutorials/CNTK_106B_LSTM_Timeseries_with_IOT_Data.ipynb">
CNTK 106: Part B - Time series prediction with LSTM (IOT Data)</a>


## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html %}
