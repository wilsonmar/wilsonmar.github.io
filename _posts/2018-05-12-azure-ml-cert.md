---
layout: post
title: "Azure Machine Learning certification"
excerpt: "Exams 70-773 and 70-774 toward an MCSA"
tags: [microsoft, Azure, machine learning, AI, cloud, certification]
date: "2018-05-12"
file: "azure-ml-cert"
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

Here are links to materials I've come across for learning enough to pass Microsoft's 
Azure Machine Learning certification exam <a target="_blank" href="https://www.microsoft.com/en-us/learning/exam-70-774.aspx">70-774</a> 
- 37 questions in 90 minutes at a VUE center for $165.

This is one way to demonstrate your expertise in making use of  machine learning and Big Data with R Server and SQL R Services within the Microsoft Azure cloud, that you have a good understanding of Azure data services and are familiar with common data science processes such as filtering and transforming data sets, model estimation, and model evaluation. Candidates for this exam should have experience publishing effective APIs for knowledge intelligence.

## Exam Reference Book

The 70-7734 exam began beta on Feb 17, 2017.
The 336 page reference book for the exam was published Feb 2018. 
It is <a target="_blank" href="https://www.microsoftpressstore.com/store/exam-ref-70-774-perform-cloud-data-science-with-azure-9781509307012">
$32 from Microsoft</a>, but <a target="_blank" href="https://www.amazon.com/70-774-Perform-Science-Machine-Learning-ebook/dp/B07B263ZVP/">
$17.27 on Kindle</a>. 

PROTIP: In September 2017 "Studio" was added to the name "Azure Machine Learning" when referring to the web tool. This fixes a confusion in terminology between a tool versus a process.
References in this website reflect that change.

The authors - <a target="_blank" href="https://www.desertislesql.com/wordpress1/?p=2028">
Ginger Grant</a>, Julio Granados, Guillermo Fernández, Pau Sempere, Javier Torrenteras
also wrote the book on 70-773.

### MCSA Bundle 

Since Machine Learning often involves processing a lot of data, passing this exam as well as "Exam 70-773: Analyzing Big Data with Microsoft R" <a target="_blank" href="https://www.microsoft.com/en-us/learning/exam-70-773.aspx">70-773</a> gets you an MCSA: <a target="_blank" href="https://www.microsoft.com/en-us/learning/mcsa-machine-learning.aspx">"Microsoft Certified Solutions Associate: Machine Learning certification"</a>.

This exam set is referenced by vendors who offer bundles such as:

* PDF & Practice Exam from CertificationGenie
* https://www.netcomlearning.com/certifications/610/MCSA-Machine-Learning-training.html
* https://www.pass4itsure.com/70-774.html


## Exam Topics - Top-level 

A. <a href="#PrepareDate">Prepare <strong>data</strong></a> for analysis in Azure Machine Learning Studio and export from the Studio<br />
B. <a href="#DevelopModels">Develop machine learning <strong>models</strong></a><br />
C. <a href="#Operationalize">Operationalize and manage Azure Machine Learning <strong>services</strong></a><br />
D. <a href="#OtherServices">Use <strong>other services</strong> for machine learning</a>

### Objectives

<a target="_blank" href="https://buildazure.com/2017/02/09/70-774-perform-cloud-data-science-with-azure-machine-learning-certification-exam/">This</a> provides a deeper list:

<a name="PrepareDate"></a>

A. Prepare Data and Analytics in Azure Machine Learning Studio and Export from Azure Machine Learning Studio

   * <a href="#ImportExport">Import</a> and export data to and from Azure Machine Learning Studio</a>
   * <a href="#Explore">Explore and summarize data</a>
   * <a href="#Cleanse"> Cleanse data</a> for Azure Machine Learning
   * <a href="#FeatureEngr">Perform feature engineering</a>

<a name="DevelopModels"></a>

B. Develop Machine Learning Models

   * <a href="#Algorithm">Select an appropriate algorithm or method</a>
   * <a href="#TrainModels">Initialize and train appropriate models</a>
   * <a href="#ValidateModels">Validate models</a>

<a name="Operationalize"></a>

C. Operationalize and Manage Azure Machine Learning services

   * <a href="#DeployModels">Deploy models</a> using Azure Machine Learning Studio
   * <a href="#Projects">Manage Azure Machine Learning projects and workspaces</a>
   * <a href="#ConsumeModels">Consume Azure Machine Learning models</a>
   * <a href="#ConsumeApis">Consume exemplar Cognitive Services APIs</a>

<a name="OtherServices"></a>

D. Use Other Services for Machine Learning

   * <a href="#BuildNeuro">Build and use neural networks with the Microsoft Cognitive Toolkit</a>
   * <a href="#StreamlineDev">Streamline development by using existing resources</a>
   * <a href="#HDInsights">Perform data sciences at scale by using HDInsights</a>
   * <a href="#SQLonAzure">Perform database analytics by using SQL Server R Services on Azure</a>

There is considerable overlap of material with SQL and big data subject matter in the 70-774 exam.


## Microsoft Classes

The team behind <a target="_blank" href="http://learnanalytics.microsoft.com/home/index">
http://learnanalytics.microsoft.com/home/index</a> has a <a target="_blank" href="https://azure.github.io/learnAnalytics-public/cert_guides/certification_70-774_community_guide.html">GitHub.io page on 70-774</a> and <a target="_blank" href="https://azure.github.io/learnAnalytics-public/cert_guides/certification_70-773_community_guide.html">70-773</a> which mentions courses at EdX.com:

   * <a target="_blank" href="https://www.edx.org/course/principles-of-machine-learning">
   https://www.edx.org/course/principles-of-machine-learning DAT203.2x</a> 6 x 4 (24 hour) hands-on class 
   (by the brilliant Cythina Rudin of the Prediction Analytics Lab at Duke
   and Steve Elston of Quantia Analytics) covers classification, regression, models,
   and tree ensemble models, recommenders from clustering.
   Example code <a target="_blank" href="https://aka.ms/edx-dat203.2x-labfiles">files</a> 
   are provided in both R and Python.

   * <a target="_blank" href="https://www.edx.org/course/applied-machine-learning-microsoft-dat203-3x-4 ">https://www.edx.org/course/applied-machine-learning-microsoft-dat203-3x-4</a>
   by Graeme Malcolm plus the authors listed above.
   This was not available at time of this writing May 2018.
   The class covers of time series and forecasting, spatial data analysis, text analytics,
   and analysis of images.

   * Content Developer <a target="_blank" href="https://www.linkedin.com/in/graemesplace/">Graeme Malcolm</a> also narrated at the "DAT203.1x: Data Science Essentials" class at Edx.

<a target="_blank" href="https://gallery.azure.ai/Collection/Introduction-to-Machine-Learning-with-Hands-On-Labs-1">
Introduction to Machine Learning with Hands-On Labs dated June 15, 2016</a> provides a series on 
   
   * Introduction to AMLS - Lab Setup

   https://github.com/Azure-Readiness/hol-azure-machine-learning

   * <a target="_blank" href="https://gallery.azure.ai/Tutorial/8-Recommendation-System-1">
   Recommender Systems</a>

### Tasks

<a target="_blank" href="https://www.microsoft.com/en-us/learning/exam-70-774.aspx">
Microsoft's official reference page on the exam</a> lists the tasks being tested.

PROTIP: Save this page and check off what you're able to do as you learn each one.

A. Prepare Data for Analysis in Azure Machine Learning and Export from Azure Machine Learning

<a name="ImportExport"></a>

Import and export data to and from Azure Machine Learning

* [_] Import and export data to and from Azure Blob storage
* [_] import and export data to and from Azure SQL Database
* [_] import and export data via Hive Queries
* [_] import data from a website
* [_] import data from on-premises SQL

<a name="Explore"></a>

Explore and summarize data

* [_] Create univariate summaries
* [_] create multivariate summaries
* [_] visualize univariate distributions
* [_] use existing Microsoft R or Python notebooks for custom summaries and custom visualizations
* [_] use zip archives to import external packages for R or Python
* [_] Cleanse data for Azure Machine Learning
* [_] Apply filters to limit a dataset to the desired rows
* [_] identify and address missing data
* [_] identify and address outliers
* [_] remove columns and rows of datasets

<a name="FeatureEngr"></a>

Perform feature engineering

* [_] Merge multiple datasets by rows or columns into a single dataset by columns
* [_] merge multiple datasets by rows or columns into a single dataset by rows
* [_] add columns that are combinations of other columns
* [_] manually select and construct features for model estimation
* [_] automatically select and construct features for model estimation
* [_] reduce dimensions of data through principal component analysis (PCA)
* [_] manage variable metadata
* [_] select standardized variables based on planned analysis

B. Develop Machine Learning Models

<a name="Algorithm"></a>

Select an appropriate algorithm or method

* <a href="https://wilsonmar.github.io/machine-learning-algorithms/"> 
   My notes on algorithms</a>

* [_] Select an appropriate algorithm for predicting continuous label data
* [_] select an appropriate algorithm for supervised versus unsupervised scenarios
* [_] identify when to select R versus Python notebooks
* [_] identify an appropriate algorithm for grouping unlabeled data
* [_] identify an appropriate algorithm for classifying label data
* [_] select an appropriate ensemble

<a name="TrainModels"></a>

Initialize and train appropriate models

* [_] Tune hyperparameters manually
* [_] tune hyperparameters automatically
* [_] split data into training and testing datasets, including using routines for cross-validation
* [_] build an ensemble using the stacking method

<a name="ValidateModels"></a>

Validate models

* [_] Score and evaluate models, 
* [_] select appropriate evaluation metrics for clustering, 
* [_] select appropriate evaluation metrics for classification, 
* [_] select appropriate evaluation metrics for regression, 
* [_] use evaluation metrics to choose between Machine Learning models, 
* [_] compare ensemble metrics against base models

C. Operationalize and Manage Azure Machine Learning Services

<a name="DeployModels">

Deploy models using Azure Machine Learning

* [_] Publish a model developed inside Azure Machine Learning
* [_] publish an externally developed scoring function using an Azure Machine Learning package
* [_] use web service parameters, 
* [_] create and publish a recommendation model
* [_] create and publish a language understanding model

<a name="Projects"></a>

Manage Azure Machine Learning projects and workspaces

* [_] Create projects and experiments
* [_] add assets to a project
* [_] create new workspaces
* [_] invite users to a workspace, switch between different workspaces
* [_] create a Jupyter notebook that references an intermediate dataset

<a name="ConsumeModels"></a>

Consume Azure Machine Learning models

* [_] Connect to a published Machine Learning web service
* [_] consume a published Machine Learning model programmatically using a batch execution service
* [_] consume a published Machine Learning model programmatically using a request response service
* [_] interact with a published Machine Learning model using Microsoft Excel
* [_] publish models to the marketplace

<a name="ConsumeApis"></a>

Consume exemplar Cognitive Services APIs

* [_] Consume Vision APIs to process images
* [_] consume Language APIs to process text
* [_] consume Knowledge APIs to create recommendations

D. Use Other Services for Machine Learning

<a name="BuildNeuro"></a>

Build and use neural networks with the Microsoft Cognitive Toolkit (CNTK)

* [_] Use N-series VMs for GPU acceleration
* [_] build and train a three-layer feed forward neural network
* [_] determine when to implement a neural network

<a name="StreamlineDev"></a>

Streamline development by using existing resources

* [_] Clone template experiments from Cortana Intelligence Gallery
* [_] use Cortana Intelligence Quick Start to deploy resources
* [_] use a data science VM for streamlined development

<a name="HDInsights"></a>

Perform data sciences at scale by using HDInsights

* [_] Deploy the appropriate type of HDI cluster
* [_] perform exploratory data analysis by using Spark SQL
* [_] build and use Machine Learning models with Spark on HDI
* [_] build and use Machine Learning models using MapReduce
* [_] build and use Machine Learning models using Microsoft R Server

<a name="SQLonAzure"></a>

Perform database analytics by using SQL Server R Services on Azure

* [_] Deploy a SQL Server 2016 Azure VM
* [_] configure SQL Server to allow execution of R scripts
* [_] execute R scripts inside T-SQL statements


## Study materials

I've rearranged Daniel Calbimonte's <a target="_blank" href="https://www.mssqltips.com/sqlservertip/4978/exam-material-for-the-microsoft-70774-perform-cloud-data-science-with-azure-machine-learning/">massive list</a> and others into my sequence below.

<a href="https://buildazure.com/2016/01/26/free-ebook-azure-machine-learning/" target="_blank" >Microsoft Azure Essentials: Azure Machine Learning</a> by Jeff Barnes
is a free ebook from 2016.

<a name="HDInsights-links"></a>

### HDInsight clusters

<a target="_blank" href="http://amzn.to/2jXPKeI" >Introducing Microsoft Azure HDInsight</a> 
<a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.HDInsight%2Fclusters">on the Azure Portal</a> by Avkash Chauhan, Valentive Fontama, and 3 others</li>

### Premium Video Courses

<ul>
<li><a href="https://www.opsgility.com/courses/player/introduction-to-azure-ml" target="_blank" >Introduction to AzureML</a> by Richard Conway</li>

<li><a href="https://www.opsgility.com/courses/player/real-time-ingestion-processing-in-azure" target="_blank" >Real-Time Ingestion and Processing in Azure</a> by Chris Pietschmann</li>

<li><a href="https://www.pluralsight.com/courses/azure-machine-learning-getting-started" target="_blank" >Getting Started with Azure Machine Learning</a> by Jerry Kurt</li>

<li><a href="https://www.pluralsight.com/courses/hdinsight-deep-dive-storm-hbase-hive" target="_blank" >HDInsight Deep Dive: Storm, HBase, and Hive</a> by Elton Stoneman</li>
</ul>


## Videos

Follow 
<a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/machine-learning-create-experiment/">
this machine learning tutorial</a>
to use <strong>Azure Machine Learning Studio</strong> to
create a linear regression model that predicts the price of 
an automobile based on different variables such as make and technical specifications. 
Then iterate on a simple predictive analytics experiment.

VIDEO: <a target="_blank" href="https://www.youtube.com/watch?v=eUce2cB844s">
Hands-On with Azure Machine Learning</a>

<a target="_blank" href="https://www.youtube.com/watch?v=02R-lZYccEY">
Machine Learning Algorthms - Part 1</a>

<a target="_blank" href="https://channel9.msdn.com/Blogs/Windows-Azure/Getting-Started-with-Azure-Machine-Learning-Step1?ocid=player">
   this video</a>: <a target="_blank" href="
   https://studio.azureml.net/?selectAccess=true&o=2">
   https://studio.azureml.net/?selectAccess=true&o=2</a>

## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html %}
