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

1. <a href="#BuildNN">Build and train neural network models using TensorFlow 2.x</a>
2. <a href="#ImageClas">Image classification</a>
3. <a href="#NLP">Natural language processing (NLP)</a>
4. <a href="#TimeSeries">Time series, sequences, and predictions</a>
<br /><br />

{% include whatever.html %}

The above certification categories is used as the structure of 4 classes in the 
<a target="_blank" href="https://www.coursera.org/specializations/tensorflow-in-practice">
TensorFlow in Practice Specialization</a>:

1. <a target="_blank" href="https://www.coursera.org/learn/introduction-tensorflow/home/welcome">
   Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning</a>
2. <a target="_blank" href="https://www.coursera.org/learn/convolutional-neural-networks-tensorflow">
   Convolutional Neural Networks (CNN) in Tensorflow</a>
3. <a target="_blank" href="https://www.coursera.org/learn/natural-language-processing-tensorflow">
   Natural Language Processing (NLP) in TensorFlow</a>
4. <a target="_blank" href="https://www.coursera.org/learn/tensorflow-sequences-time-series-and-prediction">
   Sequences, Time Series, and Prediction</a>
<br /><br />

They are offered by deeplearning.ai (Andrew Ng) through <a target="_blank" href="https://www.coursera.com">Coursera.com</a>.
The instruction is <a target="_blank" href="https://www.linkedin.com/in/laurence-moroney/">
Laurence Moroney</a> who works at Google Brain.

   * VIDEO: <a target="_blank" href="https://www.youtube.com/watch?v=VwVg9jCtqaU">Machine Learning Zero to Hero (Laurence at Google I/O'19)</a> [35:32]
   <br /><br />

Each course is scheduled for 4 weeks (containing 4 lessons each), 
but you may be able to finish earlier since
each course costs $49 per month after a 7-day free trial.

In quizzes along the way, you get 3 attempts 8 hours apart.
You have to answer all questions again on every attempt.

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


## Books

<a target="_blank" href="https://www.manning.com/books/deep-learning-with-python">
Deep Learning with Python</a>, <a target="_blank" href="https://www.manning.com/books/deep-learning-with-python-second-edition">2nd edition</a> (Manning book) by Francois Chollet 


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

### Image classification

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

* Train, tune, and use timeseries, sequence, and prediction models.
* Prepare data for time series learning.
* Understand Mean Average Error (MAE) and how it can be used to evaluate accuracy of sequence models.

   <pre>errors = forecasts - actual
   mae = np.abs(errors) .mean()  # absolute value to not penalize large values
   keras.metrics.mean_absolute_error(x_valid, naive_forecast).numpy()
   </pre>

   <pre># mean squared error:
   mse = np.square(errors) .mean()  # so opposite errors don't cancel each other out
   rmse = np.sqrt(mse)  # root mean square error
   mape = np.abs(errors / x_valid) .mean()  # mean absolute percentage error
   </pre>

* Use RNNs and CNNs for timeseries, sequence, and forecasting models.
* Identify when to use trailing versus centred windows.
* Use TensorFlow for forecasting.
* Prepare features and labels.
* Identify and compensate for sequence bias.
* Adjust the learning rate dynamically in time series, sequence, and prediction models.
<br /><br />

Multi-Variate (births/deaths, CO2/Temp, Longitude/Latitude) imputation.
Seasonality. Autocorrelation with lag. 
Impulses.
Spikes are called innovations.
Stationary. 
Fixed partioning of Training Period, Validation Period, Test Period.
Or roll-forward partioning a day at a time.
"Differencing" Moving averge for a smoothing effect.
Trailing window and centered windows to smooth past values.

<a target="_blank" href="https://colab.research.google.com/github/lmoroney/dlaicourse/blob/master/TensorFlow%20In%20Practice/Course%204%20-%20S%2BP/S%2BP_Week_1_Lesson_2.ipynb">Week 1 Lesson 2</a>
has an error
https://github.com/tensorflow/tensorflow/issues/27470

<a target="_blank" href="https://colab.research.google.com/github/lmoroney/dlaicourse/blob/master/TensorFlow%20In%20Practice/Course%204%20-%20S%2BP/S%2BP%20Week%201%20-%20Lesson%203%20-%20Notebook.ipynb">Week 1 Lesson 3 Forecasting</a>

https://colab.research.google.com/github/lmoroney/dlaicourse/blob/master/TensorFlow%20In%20Practice/Course%204%20-%20S%2BP/Week%201%20Exercise%20Question.ipynb

In lesson 4, sun spot activity.

## Social

Those <a target="_blank" href="https://developers.google.com/certification/directory/tensorflow">
who have passed the test get listed on Google's directory</a> (for 3 years).
The first certificate was dated 6 March 2020. There were 198 as of 18 Jun 2020.

https://blog.tensorflow.org/2020/05/tensorflow-user-groups-updates-from-around-the-world.html

https://www.mrdbourke.com/ml-study-may-2020/
https://towardsdatascience.com/how-i-passed-the-tensorflow-developer-certification-exam-f5672a1eb641
by Daniel Bourke


## Test environment

You can take the test at home
The TensorFlow certificate exam runs in the TF Exam plugin inside PyCharm, 
which provide the UI to submit answers.

PyCharm has a free Community Edition and a Professional edition for $89.

Call the project "TFExams".

Not all questions have the same weight.
In the test you have to code five models of increasing difficulty:

   1. Basic/Simple model
   2. Model from learning dataset
   3. Convolutional Neural Network with real-world image dataset
   4. NLP Text Classification with real-world text dataset
   5. Sequence Model with real-world numeric dataset
   <br /><br />

It's an <strong>open book</strong> test.
But you need to score 90% or more to pass.
If you don't pass, you must wait 14 days before taking it a second time, 
two months for the third attempt,
and one year for the 4th exam.

<a target="_blank" href="https://www.youtube.com/watch?v=Rzpt-H_QrFE">
TensorFlow Developer Certificate | Google Brain</a>


## Colab Run Environment

For practice, it's free to run <a target="_blank" href="https://colab.research.google.com/">
Google Colab (Colaboratory) environment on-line</a>, but <a target="_blank" href="https://colab.research.google.com/">more memory, faster CPU, longer runtimes</a> can be had for $10/month.

Colab have a UI like Google Docs. Click the Settings icon to change Site Theme to "Adaptive" for white font on black background. PROTIP: Press Shift+Enter to run.

* There are reports

* <a target="_blank" href="https://colab.research.google.com/github/lmoroney/dlaicourse/blob/master/Course%201%20-%20Part%202%20-%20Lesson%202%20-%20Notebook.ipynb">
Class 1 - Part 2 - Lesson 2 - Notebook.ipynb - The Hello-World of Deep Learning with Neural Networks</a>

* <a target="_blank" href="https://bkpkegayrtgmzkotpnuzkk.coursera-apps.org/notebooks/week1/Exercise_1_House_Prices_Question.ipynb">Take-home exercise: Housing Prices</a>


https://medium.com/@rbarbero/tensorflow-certification-tips-d1e0385668c8

