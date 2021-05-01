---
layout: post
title: "Microsoft Azure Machine Learning"
excerpt: "All the options for Enterprise integration"
tags: [HTML, personalization, machine learning, ML]
date: "2021-03-17"
file: "machine-learning-microsoft"
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

## Microsoft ML #

Microsoft has a "Cheat Sheet" to help you 
<a target="_blank" href="https://aka.ms/MLCheatSheet/">
select a Machine Learning alogorithm</a> from
among the various initiatives:

<a name="x"></a>
<a name="y"></a>
<table border="1" cellpadding="4" cellspacing="0">
<tr align="bottom" align="left">
<th> Category </th><th> Algorithm </th><th> MS </th></tr>
<tbody>
<tr valign="top"><td rowspan="4"> Statistical Functions
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905933.aspx"> 
  Descriptive Statistics (Summarize Data)</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905917.aspx"> 
  Hypothesis Testing</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905819.aspx"> 
  Compute T-Test Linear Correlation</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905813.aspx"> Evaluate Probability Function Evaluation</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
<tr valign="top"><td rowspan="3"> Recommendation (collaborative filtering)
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905987.aspx"> 
  Train Matchbox Recommender</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905970.aspx"> 
  Score Matchbox Recommender</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905954.aspx"> 
  Evaluate Recommender</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
<tr valign="top"><td rowspan="8"> Regression
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906022.aspx"> 
  Bayesian Linear Regression</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905801.aspx"> 
  Boosted Decision Tree</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905862.aspx"> 
  Tree Decision Forest</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn913093.aspx"> 
  Fast Forest Quantile Regression</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905978.aspx"> 
  Linear Regression</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a href="#x"> Neural Network Regression</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906029.aspx"> 
  Ordinal Regression</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a href="#x"> Poisson Regression</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
<tr valign="top"><td rowspan="1"> Clustering
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905944.aspx"> 
  K-means Clustering</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
<tr valign="top"><td rowspan="3"> Anomaly Detection
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn913103.aspx">
  One-class Support Vector Machine</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn913053.aspx">Principal Component Analysis-based Anomaly Detection</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a href="#x"> Time Series Anomaly Detection</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
<tr valign="top"><td rowspan="8"> Two-class<br />Classification
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906036.aspx">
  Averaged Perceptron</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905930.aspx">
  Bayes Point Machine</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906025.aspx"> 
  Boosted Decision Tree</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906008.aspx"> 
  Decision Forest</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905976.aspx"> 
  Decision Jungle</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905994.aspx"> Logistic Regression</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905947.aspx"> Neural Network</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905835.aspx"> Support Vector Machine</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
<tr valign="top"><td rowspan="6"> Multi-class Classification
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905810.aspx"> 
  Tune Model Hyperparameters</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906015.aspx"> Decision Forest</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905963.aspx"> Decision Jungle</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905853.aspx"> Logistic Regression</a> 
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906030.aspx"> 
  Neural Network</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn905887.aspx"> 
  One-vs-all</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
<tr valign="top"><td rowspan="2"> Text Analytics
  </td><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906018.aspx"> 
  Feature Hashing</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
  <tr valign="top"><td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/mt712721.aspx"> 
  Named Entity Recognition Vowpal Wabbit (v8)</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
<tr valign="top"><td rowspan="1"><a href="#CV">Computer Vision</a>
  </td><td><a href="#x"> OpenCV Library</a>
  </td><td><a href="#y"> Y</a>
  </td></tr>
<tr valign="top"><td rowspan="1"><a href="#VoiceRecognition">Voice</a>
  </td><td><a href="#x"> Text to Speech</a>
  </td><td><a href="#y"> Cortana</a>
  </td></tr>
<tr valign="top"><td rowspan="1"><a href="#Translation">Translation</a>
  </td><td><a href="#x"> Language Translation</a>
  </td><td><a href="#y"> Cortana</a>
  </td></tr>
</tbody></table> 

<a target="_blank" href="https://msdn.microsoft.com/en-us/library/azure/dn906033.aspx">
A-Z List of Machine Learning Studio Modules</a>
from Microsoft Azure

https://bit.ly/a4r-mlbook
Azure Machine Learning: Microsoft Azure Essentials

https://www.youtube.com/watch?v=eUce2cB844s&t=19m52s
Hands-On with Azure Machine Learning
26 Sep 2016
predicts car prices



<hr />

## Conversions

   Some utilities may involve conventional lookups of data:

<a target="_blank" href="https://algorithmia.com/algorithms">
Algorithmia.com</a> provide API interfaces to algorithms offered by its partners.

   * https://algorithmia.com/algorithms/alixaxel/CoordinatesToTimezone

   * https://algorithmia.com/algorithms/Geo/ZipData

   * https://algorithmia.com/algorithms/Geo/ZipToState

   * https://algorithmia.com/algorithms/Geo/LatLongDistance

   * https://algorithmia.com/algorithms/Geo/LatLongToUTM

   * https://algorithmia.com/algorithms/util/ip2hostname

   * https://algorithmia.com/algorithms/opencv/ChangeImageFormat (from jpg to png)


<a name="Translation"></a>

## Translation #

   * Google Translate API 
   has been working on websites for years.


<a name="CV"></a>

## Image Recognition / Computer Vision #

   * https://algorithmia.com/algorithms/z/ColorPalettefromImage

   * <a target="_blank" href="https://cloud.google.com/vision/">Google Cloud Vision API</a>

   * https://algorithmia.com/algorithms/opencv/FaceDetection
  then https://algorithmia.com/algorithms/opencv/CensorFace

   * https://algorithmia.com/algorithms/ocr/RecognizeCharacters OCR

   Some of these make use of <strong>OpenCV</strong> (CV = Computer Vision).

   <a target="_blank" href="http://neuralnetworksanddeeplearning.com/chap1.html">
   Handwriting recognition book</a> and
   <a target="_blank" href="https://github.com/mnielsen/neural-networks-and-deep-learning">
   GitHub</a>
   for Neural Networks and Deep Learning
   by Michael Nielsen


   http://www.deeplearningbook.org
   by Ian Goodfellow, Yoshua Bengio, and Aaron Courville.


<a name="VoiceRecognition"></a>

## Voice Recognition

   * <a target="_blank" href="https://cloud.google.com/speech/">
   Google Cloud Speech API</a>, which powers Google’s own voice search and voice-enabled apps. 

   * <a target="_blank" href="http://www.techrepublic.com/article/microsofts-ai-can-now-understand-speech-better-than-humans/">
   Microsoft says its Cortana is as accurate as human transcriptionists</a>

## Speech to Text


## Sentiment Analysis #

   Analyze text for positive or negative sentiment, based on a training database of potential word meanings:

   * https://algorithmia.com/algorithms/nlp/SentimentAnalysis

   * IBM

## Document (article) Search #

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

<a name="MicrosoftML"></a>

## Microsoft Azure Machine Learning #

<a target="_blank" href="https://azure.microsoft.com/en-us/services/machine-learning/">
https://azure.microsoft.com/en-us/services/machine-learning</a>
offers free plans

   * Guest Workspace for 8 hours on https://studio.azureml.net/Home/ViewWorkspaceCached/...

   * Registered free workspaces with 10 GB storage
   can scale resources to increase experiment execution performance.

All their plans offer:

   * Stock sample datasets
   * R and Python script support
   * Full range of ML alogorithms
   * Predictive web services


Follow 
<a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/machine-learning-create-experiment/">
this machine learning tutorial</a>
to use Azure Machine Learning Studio to
create a linear regression model that predicts the price of 
an automobile based on different variables such as make and technical specifications. 
Then iterate on a simple predictive analytics experiment after

Regression works on numbers.<br />
Classification works on strings.

0. Enter Microsoft's Learning Studio:

   As per <a target="_blank" href="https://channel9.msdn.com/Blogs/Windows-Azure/Getting-Started-with-Azure-Machine-Learning-Step1?ocid=player">
   this video</a>:

   https://studio.azureml.net/?selectAccess=true&o=2

0. Look at examples in the 
   <a target="_blank" href="http://gallery.cortanaintelligence.com/?r=legacy">
   Cortana Intelligence Gallery</a>

0. Take the introductory tutorial:

   <a target="_blank" href="http://gallery.cortanaintelligence.com/Collection/Introduction-to-Machine-Learning-with-Hands-On-Labs-1">
   Introduction to Machine Learning with Hands-On Labs</a>

0. Create a model

0. Prepare Data:

   As per <a target="_blank" href="https://channel9.msdn.com/Blogs/Windows-Azure/Preprocessing-Data-in-Azure-ML-Studio?ocid=player">this video</a>
   using

   - Clean Missing Data - Clip Outliers
   - Edit Metadata
   - Feature Selection
   - Filter
   - Learning with Counts
   - Normalize Data
   - Partition and Sample
   - Principal Component Analysis
   - Quantize Data
   - SQLite Transformation
   - Synthetic Minority Oversampling Technique

0. Train the model

   * Cross Validation
   * Retraining
   * Parameter Sweep

0. Score and test the model

0. Make predictions with Elastic APIs

   - Request-Response Service (RRS) Predictive Experiment - Batch Execution Service (BES)
   - Retraining API
 


https://azure.microsoft.com/en-us/documentation/articles/machine-learning-studio-overview-diagram/


## Footnotes




Python 3.6 has formatted strings


## Conda

Conda is similar to virtualenv and pyenv, other popular environment managers.

   https://virtualenv.pypa.io/en/stable/

   https://github.com/yyuu/pyenv

https://www.continuum.io/downloads

   <pre>
   conda install numpy pandas matplotlib

   conda install jupyter notebook

   conda install -c https://conda.binstar.org/menpo opencv
   </pre>

0. Can't find it? Look among all users and <strong>operating systems supported</strong>

   <pre>
   anaconda search -t conda pygame
   </pre>

   On a Mac 
   https://anaconda.org/tlatorre/pygame
   is not recognized because it's only for Linux.

   On Stack Overflow a user recommends on that supports
   Windows 32 and 64, MacOS, and Linux:

   <pre>
   conda install -c cogsci pygame=1.9.2a0
   </pre>

   Alternatively:

   <pre><strong>
   pip install pygame
   </strong></pre>

   

0. Copy a user/package to show more info:

   <pre>
   anaconda show USER/PACKAGE
   </pre>

0. List the packages installed, with its version number and
   what version of Python:

   <pre>
   conda list
   </pre>



### Conda Environments

0. Create new environment for Python, specifying packages needed:

   conda create -n my_env python=3 numpy pandas

0. Enter an environment on Mac:

   source activate my_env

   On Windows:

   activate my_env

   When you're in the environment, the environment's name 
   appears in the prompt:

   (my_env) ~ $. 

0. Leave the environment (like exit):

   source deactivate 

   On Windows, it's just deactivate.

0. Get back in again.

0. Create an environment file by piping the output from an export:

   conda env export > some_env.yaml

   When sharing your code on GitHub, it's good practice to make an environment file and include it in the repository. This will make it easier for people to install all the dependencies for your code. I also usually include a pip requirements.txt file using pip freeze (learn more here) for people not using conda.

0. Load an environment metadata file:

   conda env create -f some_env.yaml

0. List environments created on your machine:

   conda env list

0. Remove an environment:

   conda env remove -n some_env

0. Add a package



   ### OpenCV

   <a target="_blank" href="http://stackoverflow.com/questions/23119413/how-to-install-python-opencv-through-conda">
   SO on Install on Windows 8</a>

   anaconda show menpo/opencv3

   conda install --channel https://conda.anaconda.org/menpo opencv3

   FFMPEG codec

0. Test within Python >>> :

   <pre>
   import cv2
   print(cv2.__version__)
   </pre>

   The response should be:

   <pre>3.1.0</pre>

   ### Customization

0. Install readline to do autocompletion in Jupyter notebooks by hitting `tab`

   conda/pip install readline

   Readline comes with anaconda 


Read:

   * https://conda.io/docs/using/index.html

   * https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/

   * http://cola.github.io

## More

   http://martin.zinkevich.org/rules_of_ml/rules_of_ml.pdf

   http://www.h2o.ai/h2o/
   platform is built using Java working on 
   H2O’s rapid in-memory distributed parallel processing.
   Its models can be visually inspected during training, which is unique to H2O.
   , so they can immediately spot a job that should be stopped and more quickly iterate to find the optimal approach.


   http://www.discoversdk.com/blog/machine-learning-with-python

## Videos

<a target="_blank" href="https://www.youtube.com/watch?v=Gj0iyo265bc&list=PLOU2XLYxmsIIuiBfYad6rFYQU_jL2ryal">
Machine Learning Recipes</a> (using Python) - 17 videos by  
Google Developers with Josh Gordon in New York at 
<a target="_blank" href="https://twitter.com/random_forests">
@random_forests</a>

   0. <a target="_blank" href="https://www.youtube.com/watch?v=cKxRvEZd3Mw&list=PLOU2XLYxmsIIuiBfYad6rFYQU_jL2ryal">
   1. Hello World [6:52]</a> apples and oranges

   0. <a target="_blank" href="https://www.youtube.com/watch?v=tNa99PG8hR8&list=PLOU2XLYxmsIIuiBfYad6rFYQU_jL2ryal">
   2. Visualizing a Decision Tree - Apr 13, 2016 [6:31]</a>

      50 examples of each of 4 types of irises, with Sepal and Petal length and width, at 
      https://en.wikipedia.org/wiki/Iris_flower_data_set

      [4:18] https://graphviz.org

      graph.write_pdf("iris.pdf")

      open -a preview iris.pdf

      sudo python3 -m pip install pydot

   0. <a target="_blank" href="https://www.youtube.com/watch?v=N9fDIAflCMY&list=PLOU2XLYxmsIIuiBfYad6rFYQU_jL2ryal">
   3. What Makes a Good Feature?</a>

   0. <a target="_blank" href="https://www.youtube.com/watch?v=cSKfRcEDGUs&list=PLOU2XLYxmsIIuiBfYad6rFYQU_jL2ryal">
   4. Let’s Write a Pipeline</a>

   0. <a target="_blank" href="https://www.youtube.com/watch?v=84gqSbLcBFE&list=PLOU2XLYxmsIIuiBfYad6rFYQU_jL2ryal">
   5. Writing Our First Classifier [8:43]</a>

   0. <a target="_blank" href="https://www.youtube.com/watch?v=cSKfRcEDGUs&list=PLOU2XLYxmsIIuiBfYad6rFYQU_jL2ryal">
   6. Train an Image Classifier with TensorFlow for Poets</a>

   0. <a target="_blank" href="https://www.youtube.com/watch?v=Gj0iyo265bc&list=PLOU2XLYxmsIIuiBfYad6rFYQU_jL2ryal">
   7. Classifying Handwritten Digits with TF.Learn</a>

   https://hub.docker.com/r/jbgordon/recipes/
   is a Docker image to help folks having trouble with Pydot or Graphviz. 
   It has all the dependencies setup and installation instructions. 

   * <a target="_blank" href="https://www.youtube.com/watch?v=IcDV9ZjQ6qk">
   Coffee with a Googler</a>



## AI 

<a target="_blank" href="https://gibhut.com/josephmisiti/awesome-machine-learning/">
awesome-machine-learning</a>
provides many links to resources, so they will not be repeated here.

## More

https://www.sas.com/en_us/insights/analytics/machine-learning.html

