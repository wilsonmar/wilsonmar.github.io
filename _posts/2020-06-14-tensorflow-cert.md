---
layout: post
title: "TensorFlow"
excerpt: "TensorFlow Certification"
tags: [TensorFlow, AI, Machine Learning]
date: "2020-06-14"
file: "tensorflow-cert"
image:
# tensorflow2-diagram-1900x500
  feature: https://user-images.githubusercontent.com/300046/85180823-a3dcdb00-b241-11ea-8dd7-d325da6f547b.jpg
  credit: TensorFlow.org
  creditlink: https://blog.tensorflow.org/2019/01/whats-coming-in-tensorflow-2-0.html
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


Here are links to each skill to be tested by the $100 5-hour 
<a target="_blank" href="https://www.tensorflow.org/certificate">Tensorflow Certification Exam</a>, 
according to the <a target="_blank" href="https://www.tensorflow.org/site-assets/downloads/marketing/cert/TF_Certificate_Candidate_Handbook.pdf">Certificate Candidate Handbook pdf</a>:

## Content Categories

1. <a href="#BuildNN">Build and train neural network models using TensorFlow 2.x</a>
2. <a href="#ImageClas">Image classification</a>
3. <a href="#NLP">Natural language processing (NLP)</a>
4. <a href="#TimeSeries">Time series, sequences, and predictions</a>
<br /><br />

## Course

The 4 above correspond to the 4 classes in the 
<a target="_blank" href="https://www.coursera.org/specializations/tensorflow-in-practice">
TensorFlow in Practice Specialization</a>
with <a target="_blank" href="https://www.linkedin.com/in/laurence-moroney/">
Laurence Moroney</a> working at Google Brain.
They are offered by deeplearning.ai (Andrew Ng) through <a target="_blank" href="https://www.coursera.com">Coursera.com</a>.
Each course is scheduled for 4 weeks, but you may be able to finish earlier since
each course costs $49 per month after a 7-day free trial.

In quizzes along the way, you get 3 attempts 8 hours apart.
You have to answer all questions on every attempt.

PROTIP: I usually set the speed at 1.25X.


## Documentation

These certification topics are arranged differently than documentation:

<a target="_blank" href="https://www.tensorflow.org/tutorials">Tutorials</a> arranges topics by order of difficulty:

   * BEGINNER: ML basics with Keras
   * BEGINNER: Load and preprocess data
   * BEGINNER: Estimator

   * ADVANCED: Customization
   * ADVANCED: Distributed training
   * ADVANCED: Images
   * ADVANCED: Text
   * ADVANCED: Structured data
   * ADVANCED: Generative
   * ADVANCED: Interoperability

The <a target="_blank" href="https://www.tensorflow.org/guide">Guide</a> arranges topics by type:

   * TensorFlow 2
   * Keras
   * Estimators
   * Customization
   * Data input pipelines
   * Save a model
   * Accelerators
   * Performance
   * Appendix: Version compatibility

<hr />

<a name="BuildNN"></a>

### Build and train neural network models using TensorFlow 2.x

You need to understand the foundational principles of machine learning (ML) and deep learning (DL) using TensorFlow 2.x:

* Use TensorFlow 2.x.
* Build, compile, and train machine learning (ML) models using TensorFlow.
* Preprocess data to get it ready for use in a model.
* Use models to predict results.
* Build sequential models with multiple layers.
* Build and train models for binary classification.
* Build and train models for multi-class categorization.
* Plot loss and accuracy of a trained model.
* Identify strategies to prevent overfitting, including augmentation and dropout.
* Use pretrained models (transfer learning).
* Extract features from pre-trained models.
* Ensure that inputs to a model are in the correct shape.
* Ensure that you can match test data to the input shape of a neural network.
* Ensure you can match output data of a neural network to specified input shape for test data. 
* Understand batch loading of data.

* Use callbacks to trigger the end of training cycles.
* Use datasets from different sources.
* Use datasets in different formats,including json and csv.
* Use datasets from tf.data.datasets.

<a name="ImageClas"></a>

###  (2) Image classification

You need to understand how to build image recognition and object detection models with deep neural networks and convolutional neural networks using TensorFlow 2.x:

* Define Convolutional neural networks with Conv2D and pooling layers. 
* Build and train models to process real-world image datasets.
* Understand how to use convolutions to improve your neural network. 
* Use real-world images in different shapes and sizes.
* Use image augmentation to prevent overfitting.
* Use Image Data Generator.
* Understand how ImageDataGenerator labels images based on the directory structure.

<a name="NLP"></a>

### Natural language processing (NLP)

You need to understand how to use neural networks to solve natural language processing problems using TensorFlow. 

* Build natural language processing systems using TensorFlow.
* Prepare text to use in TensorFlow models.
* Build models that identify the category of a piece of text using binary categorization.
* Build models that identify the category of a piece of text using multi-class categorization.
* Use word embeddings in your TensorFlow model.
* Use LSTMs in your model to classify text for either binary or multi-class categorization. 
* Add RNN and GRU layers to your model.
* Use RNNS, LSTMs, GRUs and CNNs in models that work with text.
* Train LSTMs on existing text to generate text (such as songs and poetry).

<a name="TimeSeries"></a>

### Time series, sequences, and predictions

You need to understand how to solve time series and forecasting problems in TensorFlow.
You need to know how to:

* Train, tune, and use timeseries, sequence and prediction models.
* Prepare data for time series learning.
* Understand MeanAverageError(MAE) and how it can be used to evaluate accuracy of sequence models.
* Use RNNs and CNNs for timeseries, sequence, and forecasting models.
* Identify when to use trailing versus centred windows.
* Use TensorFlow for forecasting.
* Prepare features and labels.
* Identify and compensate for sequence bias.
* Adjust the learning rate dynamically in time series, sequence, and prediction models.


## Social

Those <a target="_blank" href="https://developers.google.com/certification/directory/tensorflow">
who have passed the test get listed on Google's directory</a> (for 3 years).
The first certificate was dated 6 March 2020. There were 198 as of 18 Jun 2020.

https://blog.tensorflow.org/2020/05/tensorflow-user-groups-updates-from-around-the-world.html


## Test Enviornment

You can take the test at home
The TensorFlow certificate exam runs inside PyCharm,
which has a free Community Edition and a Professional edition for $89.

Call the project "TFExams".


## Colab Run Enviornment

For practice, it's free to run <a target="_blank" href="https://colab.research.google.com/">
Google Colab (Colaboratory) environment on-line</a>, but <a target="_blank" href="https://colab.research.google.com/">more memory, faster CPU, longer runtimes</a> can be had for $10/month.

Colab have a UI like Google Docs. Click the Settings icon to change Site Theme to "Adaptive" for white font on black background.

* There are reports

* <a target="_blank" href="https://colab.research.google.com/github/lmoroney/dlaicourse/blob/master/Course%201%20-%20Part%202%20-%20Lesson%202%20-%20Notebook.ipynb">
Class 1 - Part 2 - Lesson 2 - Notebook.ipynb - The Hello-World of Deep Learning with Neural Networks</a>

* <a target="_blank" href="https://bkpkegayrtgmzkotpnuzkk.coursera-apps.org/notebooks/week1/Exercise_1_House_Prices_Question.ipynb">Take-home exercise: Housing Prices</a>

Press Shift+Enter to run.

