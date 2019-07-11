---
layout: post
title: "Azure Machine Learning"
excerpt: "Get setup to run Python Jupyter Notebooks using CLI or ML Studio"
tags: [microsoft, Azure, machine learning, AI, cloud, certification]
date: "2018-05-14"
file: "azure-machine-learning"
image:
# feature: pic green matrix hallway 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14623876/07afd066-0593-11e6-933a-2e596511ac67.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<p align="right"><a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=es&u=https%3A%2F%2Fwilsonmar.github.io%2Fazure-machine-learning%2F"><img alt="Español (Spanish)" width="20" height="14" src="../images/flags/es.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=fr&u=https%3A%2F%2Fwilsonmar.github.io%2Fazure-machine-learning%2F"><img alt="Français (French)" width="20" height="14" src="../images/flags/fr.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=de&u=https%3A%2F%2Fwilsonmar.github.io%2Fazure-machine-learning%2F"><img alt="Deutsch (German)" width="20" height="14" src="../images/flags/de.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=it&u=https%3A%2F%2Fwilsonmar.github.io%2Fazure-machine-learning%2F"><img alt="Italiano" width="20" height="14" src="../images/flags/it.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=pt&u=https%3A%2F%2Fwilsonmar.github.io%2Fazure-machine-learning%2F"><img alt="Português" width="20" height="14" src="../images/flags/pt.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ru&u=https%3A%2F%2Fwilsonmar.github.io%2Fazure-machine-learning%2F"><img alt="Cyrillic Russian" width="20" height="14" src="../images/flags/ru.png"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https%3A%2F%2Fwilsonmar.github.io%2Fazure-machine-learning%2F"><img alt="中文 (简体) Chinese (Simplified)" width="20" height="14" src="../images/flags/cn.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ja&u=https%3A%2F%2Fwilsonmar.github.io%2Fazure-machine-learning%2F"><img alt="日本語 Japanese" width="20" height="14" src="../images/flags/jp.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A%2F%2Fwilsonmar.github.io%2Fazure-machine-learning%2F"><img alt="한국어 Korean" width="20" height="14" src="../images/flags/ko.gif"></a>
</p>
{% include _toc.html %}

This is a DRAFT deep-dive guided tour of how to get setup to begin using Microsoft's various offerings for Machine Learning in their Azure cloud. After this, see use cases:

   * Predictive Maintenance


## Workflows

Regardless of the tool, the workflow for developing intelligent models for predictive analytics revolves around these phases:

1. Business understanding
2. Data acquisition and understanding (establishing Data source, pipeline, envrionment, "wranging" exploration & cleaning)
3. Modeling (Feature Engineering, Model Training, Model Evaluation)
4. Deployment (scoring, performance monitoring)
5. Customer acceptance

These are from Microsoft's <strong>Team Data Science Process (TDSP)</strong> at <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/">https:aka.ms/tdsp</a>.
It's akin to <a target="_blank" href="https://www.wikiwand.com/en/Cross-industry_standard_process_for_data_mining">
CRISP-DM (Cross-Industry Standard for Data Mining)</a> and
<a target="_blank" href="https://wikipedia.org/wiki/Data_mining#Process">
KDD (Knowledge Discovery in Databases)</a>.

<a target="_blank" href="https://github.com/Azure/Azure-TDSP-ProjectTemplate">
https://github.com/Azure/Azure-TDSP-ProjectTemplate</a> sample folder and file names.
* System architecture
* Data dictionaries
* Reports related to data understanding, modeling
* Project management and planning docs
* Information obtained from a business owner or client about the project
* Docs and presentations prepared to share information about the project
<br /><br />

<a target="_blank" href="https://github.com/Azure/Azure-TDSP-ProjectTemplate/blob/master/Docs/Model/FinalReport.md">Microsoft proposes a "Final Report"</a> containing:

Analytic Approach

* What is target definition
* What are inputs (description)
* What kind of model was built?

Solution Description

* Simple solution architecture (Data sources, solution components, data flow)
* What is output?

Data
* Source
* Data Schema
* Sampling
* Selection (dates, segments)
* Stats (counts)

Features
* List of raw and derived features
* Importance ranking.

Algorithm
* Description or images of data flow graph. If AzureML, link to:
* Training experiment
* Scoring workflow
* What learner(s) were used?
* Learner hyper-parameters

Results
* ROC/Lift charts, AUC, R^2, MAPE as appropriate
* Performance graphs for parameters sweeps if applicable

Model Understanding
* Variable Importance (significance)
* Insight Derived from the Model

Conclusion and Discussions for Next Steps
* Conclusion
* Discussion on overfitting (if applicable)
* What other Features Can Be Generated from the Current Data
* What other Relevant Data Sources Are Available to Help the Modeling

https://github.com/Azure/Azure-MachineLearning-DataScience

## Several interfaces

Microsoft offers several tools for machine learning:

   * Azure Machine Learning Studio, on-line drag and drop interface for creating simpler machine learning workflows. It has limitations about the size of the data that can be handled (about 10gigs of processing).
   * Azure Machine Learning Workbench, downloaded <strong>client GUI/IDE</strong> running on your laptop
   * <a href="#CLI">Azure Machine Learning CLI</a> for running (repeatable) scripts in your local Terminal instead of clicking
   * Azure Machine Learning Experimentation, completely on-line to create models
   * <a target="_blank" href="https://portal.azure.com/#create/Microsoft.MachineLearningModelManagement">Azure Machine Learning Model Management</a>, on-line to deploy models (after you create models)
   * Azure Machine Learning Compute for Model Management
   * <a href="#DSVM">Data Science Virtual Machine</a>
   * <a href="#HDInsight">HDInsight big data</a>
   * AI Batch that runs multiple jobs in parallel for scale
   <br /><br />

PROTIP: One has to traverse three different web sites to design, deploy, and consume Machine Learning.

![aml-steps-405x156-17814](https://user-images.githubusercontent.com/300046/40132203-665cad26-58f9-11e8-9eb8-34076f838a3b.jpg)

Working backwards from the Azure Portal used in production:

1. Visit the Azure Portal Dashboard at<br />
   <a target="_blank" href="
   https://portal.azure.com/">
   https://portal.azure.com</a>
   
   PROTIP: Copy this URL and open up a different internet browser (such as Chrome, Firfox, Brave) so that you can tab between them easier.

   <!-- ![azure-ai-offerings-415x396-27423](https://user-images.githubusercontent.com/300046/39999744-209d8336-5747-11e8-8773-bc5f88733be2.jpg)
   -->

2. If you've already created a "Machine Learning Experiment", click here</a>
   Otherwise, click "+ Create a Resource" in the top left menu:

   <a target="_blank" href="https://portal.azure.com/#create/hub">
   <img align="right" alt="azure-resource-list-210x529-22177" src="https://user-images.githubusercontent.com/300046/40260563-fa98acec-5ac0-11e8-9599-eaa18accfa58.jpg"></a>

   AI and Machine Learning projects usually involve several of these "Azure Marketplace" items.

3. Click "AI + Machine Learning" to see the scope of sophistication Microsoft has achieved.

   NOTE: "Data Science Virtual Machine - Windows 2016" is not included in the list to
   <a target="_blank" href="https://portal.azure.com/#create/microsoft-ads.windows-data-science-vmwindows2016">
   Create virtual machine</a>

4. At the top next to the "Featured" heading, click "See all", notice Microsoft's categorizes:

   * Machine Learning (below)
   * <a target="_blank" href="https://wilsonmar.githhub.io/chatbots/">Bot Service</a>
   * <a target="_blank" href="https://wilsonmar.githhub.io/cntk/">Cognitive Service</a> (which provides AI services for speech, vision, text analytics, search, etc.). Microsoft previously referenced them under acronmy CNTK (CogNitive ToolKit).

   The above list are links to separate article/page for each category.

   TBD: The "Machine Learning Model Management" 

5. Click "Machine Learning Experimentation", which was in "preview" at the time of writing.

   If you don't have an Experiment account, you are prompted for one.

   ![azure-ml-ex-1-278x410-25903](https://user-images.githubusercontent.com/300046/40262848-c6ca5fd6-5ad0-11e8-80a0-7285a7256206.jpg)

   BTW This is similar to <a target="_blank" href="https://colab.research.google.com/notebooks/welcome.ipynb">Google's Colaboratory</a>,
   free to use on-line <a target="_blank" href="https://wilsonmar.github.io/">Python Jupyter Notebooks</a> that stores data in Google Drive and <a target="_blank" href="https://research.google.com/colaboratory/local-runtimes.html">can run locally</a>.

6. The Experiment Name has is a maximum of 32 characters. It says the only special character allowed is the dash (but it didn't reject underlines) to separate words.

7. PROTIP: Define a naming convention for your <strong>Resource Groups</strong> 
   which your team will follow for consistency, to avoid confusion.

8. For Location, in the US there is "East US 2" and "West Central US".

9. The "seats" (developer) is how it's charged, with the first 2 free.

1. Create a new Storage account if you haven't already. This is to store tracked execution output.

   ![azure-ml-ex-2-278x352-25479](https://user-images.githubusercontent.com/300046/40262852-d2dbc684-5ad0-11e8-8d42-12997c1374c1.jpg)

   NOTE: A Visual Studio Team Service account for version-controlling your project using a Git repo.

1. Your Model Mangement account name can be up to 260 characters.

1. Select "DEVTEST" for Model Management account fee type. The types:

   ![manage-acct-types-727x189-40314](https://user-images.githubusercontent.com/300046/40262379-8bc6b5b4-5acc-11e8-9fb6-83669780fbc9.jpg)

   PROTIP: Together here are Per day and Per month fees from the <a target="_blank" href="   https://azure.microsoft.com/en-us/pricing/details/machine-learning-services/">Pricing FAQ</a>

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="bottom" align="right"><th> Plan </th><th> S1 </th><th> S2 </th><th> S3 </th></tr>
   <tr valign="top" align="right"><td>Per day: </td><td>$1.60</td><td>$12.08</td><td>$80.63</td></tr>
   <tr valign="top" align="right"><td>Per month:</td><td>$50</td><td>$375</td><td>$2,500</td></tr>
   </table>

   31 days per month.

1. Check "Pin to dashboard".

1. Click "Automation options" to expose the parameters file for the selections above.

1. Click "Download" to save the "template.zip" file to your laptop for use in CLI calls.

   PROTIP: The files downloaded in the zip enable you to <strong>quickly re-create</strong>
   the manual selections you took above. This enables you to save money by re-creating on demand rather than paying for unused services lingering around racking up charges.

1. Click the "CLI" tab for the Bash (deploy.sh) script to make use of the parameter file.
1. Click the "PowerShell" tab for the deploy.ps1 script.
1. Click the ".NET" tab for the DeploymentHelper.cs programming code.
1. Click the "Ruby" tab for the deployer.rb file.
1. Click "Create". Wait for the completion pop-up in your account's Dashboard.
1. Click "See more" at the bottom of the "All resources" pane. This is because you may not see the item you just created.
1. Click the Machine Learning Experimentation you just created.

   ### Install local Workbench
   
   QUESTION: Is there a brew formula for this?

1. In a Machine Learning Experimentation page, click "Azure Machine Learning Workbench" for your operating system (Mac file AmlWorkbenchSetup.dmg or Windows).
1. In Finder, double-click on the .dmg file to run the installer.
1. Click on the big circle in the "Workbench Installer.app" pop-up.
1. Click "Continue" to defaults resulting in download of Miniconda with Python 3.5.2
   (even though it's already installed locally).
1. Return to the "Workbench Installer.app" pop-up to dismiss it.
1. Click "Launch Workbench" when that appears.
1. Sign in with your Microsoft account.

   ### Sample Project Iris recognition

   <a target="_blank" href="https://www.youtube.com/watch?v=tW1JV6bHXFA&t=31s">
   VIDEO: Workbench Quick Tour Sep 25, 2017</a>

1. New project workspace.
1. Open in Visual Studio Code.
1. <a target="_blank" href="https://www.youtube.com/watch?v=tW1JV6bHXFA&t=1m46s">
   [1:46]</a> For Arguments, type "0.01" to set the "regularization rate" to determine how the linear regression model is trained.
1. Click Run to see the job status panel on the right go from "Submitting" to "Running" to "Completed".
1. Change the Argument to ".1" and Run again.
1. Change the Argument to "1" and Run again.
1. Change the Argument to "10" and Run again.
1. Click on the runs (clock) icon on the left menu for the "iris_sklearn.py" 

   See https://docs.microsoft.com/en-us/azure/machine-learning/desktop-workbench/tutorial-iris-azure-cli

<hr />

   ### Workspace

1. Create a <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.MachineLearning%2Fworkspaces">Machine Learning Studio Workspace</a> 

   Microsoft's documentation on this is at https://docs.microsoft.com/en-us/azure/machine-learning/studio/create-workspace
   
1. Switch to another window by opening a new tab. On MacOS press Command+Tab. On Windows press Ctrl+Esc.

   ### Azure Machine Learning Studio #

0. Microsoft's AzureML Studio provides an on-line app
   with drap and drop ease of use with no setup on your laptop or servers.
   So you can use a Chromebook with no hard drive.

   <a target="_blank" href="https://studio.azureml.net/">
   https://studio.azureml.net</a>

   NOTE: AzureML supports R and Python scripts.

0. Click the blue "Sign In" if that appears.

0. Click the blue "Enter" for the 8-hour trial with no login
   to learn how it works using Microsoft's sample data.

   ![azure-ml-plans-640x344-54460](https://user-images.githubusercontent.com/300046/39979116-90de3d8e-5701-11e8-94da-b17dd0f48072.jpg)

   You come back to this page above after you timeout.

   PROTIP: With the free account, SQL database access is not allowed, so stay with .csv files.

   Alternately, if you want to use your own data (up to 10GB), click "Sign-in".

0. Click the "hamberger menu" at the upper left.

   ![azure-ml-top-menu-430x198-16945](https://user-images.githubusercontent.com/300046/39979174-075583f0-5702-11e8-9249-b794675d5491.jpg)

   Selecting <strong>Cortana Intelligence</strong> takes you to the "Azure AI" marketing page at <br />
   <a target="_blank" href="
   https://azure.microsoft.com/en-us/overview/ai-platform/">
   https://azure.microsoft.com/en-us/overview/ai-platform</a>

   BTW There is also a marketing page at <br /><a target="_blank" href="https://azure.microsoft.com/en-us/services/machine-learning/">
   https://azure.microsoft.com/en-us/services/machine-learning</a>

0. Click the "hamberger menu" at the upper left again and<br />
   click "Gallery" to look at examples in <a target="_blank" href="https://gallery.azure.ai/">
   https://gallery.azure.ai</a> titled "Azure AI Gallery" (previously called the Cortana Intelligence Gallery at gallery.azureml.net).

   PROTIP: There is not many views to an item, so you're one of the early adopter visionaries!

   ### Solutions

   The menu item on the menu named 
   <a target="_blank" href="https://gallery.azure.ai/solutions/">
   Solutions</a> applies to usage by a particular customer/industry.
   
   An example of a solution is the <a target="_blank" href="https://gallery.azure.ai/Solution/Interactive-Price-Analytics">
   Interactive Price Analytics</a> applying models (studied in "Micro Economics" courses)
   that are the basis for recommending pricing changes based on the history of 
   how demand for particular products responds to prices changes.

   Solutions are not a selection in ML Studio because they make use of models derived
   from experiments in the ML Studio:
   Modeling Price Elasticity - Part 1: Own-Price-Elasticity, Parts
   <a target="_blank" href="https://gallery.azure.ai/Experiment/Modeling-Price-Elasticity-Part-1-Own-Price-Elasticity-1">
   1</a>, <a target="_blank" href="https://gallery.azure.ai/Experiment/Modeling-Price-Elasticity-Part-1-Own-Price-Elasticity-2">2</a>, <a target="_blank" href="https://gallery.azure.ai/Experiment/Modeling-Price-Elasticity-Part-1-Own-Price-Elasticity-3">and 3</a>.

   ### Projects

1. Within the ML Studio:

   <a target="_blank" href="https://gallery.azure.ai/">
   <img align="right" alt="azure-ml-menu-175x259-10955.jpg" width="175" src="https://user-images.githubusercontent.com/300046/39960539-e0e903ac-55e1-11e8-8b75-3518d4527ca1.jpg"></a>
   Projects, (trained) Models, Experiments, 
   reflect the left menu than the solutions horizonal menu (but in a different order):

   <a target="_blank" href="https://gallery.azure.ai/projects/">PROJECTS</a>
   are in both - collection of scripts, notebooks, and/or data designed to support the everyday work of data scientists.
   
   ### Experiments

   "EXPERIMENTS" construct <strong>workflows</strong> using a sequence of techniques on data.
   See https://gallery.azure.ai/experiments 

1. Click "SAMPLES" from Microsoft.

   NOTE: The examples are from June, 2016.

   ### Notebooks

   "NOTEBOOKS" are iPython Notebooks that present an explaination of each Python coding step.

   See the tutorial at https://gallery.azure.ai/Notebook/773ccb4114fa46c99004381bbfa328de

   https://docs.microsoft.com/en-us/azure/machine-learning/studio/studio-overview-diagram
   Microsoft Azure Machine Learning Studio Capabilities Overview

   ### Datasets

   "DATASETS" contain data.

   ### ONNX vs WinML files

   https://gallery.azure.ai/models (.ONNX or .WinML files) for download - to build projects and solutions.

   Most of them are ported from the <a target="_blank" href="https://github.com/onnx/models">repository of pre-trained machine learning computational graph models</a> in ONNX (Open Neural Network Exchange) format (<a target="_blank" href="https://onnx.ai/">https://onnx.ai</a>), which can run on different deep learning <a target="_blank" href="https://github.com/onnx/tutorials">frameworks (Tensorflow, Keras, Microsoft Cognitive Toolkit, Apache MXNet, Facebook's PyTorch, or Caffe2)</a>.
      
   WinML (Windows Machine Learning)
   https://docs.microsoft.com/en-us/windows/uwp/machine-learning/
   converts ONNX models to execute locally in Windows 10 devices, leveraging GPU Hardware Acceleration on DirectX12.
   WinML converts models in Apple CoreML, scikit-learn (subset of models convertible to ONNX), LibSVM, XGBoost

   https://gallery.azure.ai/Model/MNIST-Handwritten-Digit-Recognition
   

   PROTIP: Consider these collections:

   * <a target="_blank" href="https://github.com/Microsoft/CNTK/blob/master/Tutorials/CNTK_101_LogisticRegression.ipynb">
   Linear (straight line) Regression classifer</a> using <a href="#CNTK">CNTK</s>
   * Multi-variate/Logistic regression 
   * K-means clustering analysis / Softmax
   * Guided selection of wines: https://gallery.azure.ai/Experiment/30146a6b10c6401d9b65afac17dfa5d9
   * svm (support vector machine) 
   
   * At <a target="_blank" href="https://gallery.azure.ai/Tutorial/Twitter-Stream-Analysis-with-Azure-Machine-Learning">
   Twitter sentiment analysis</a> click "DEPLOY" for
   <a target="_blank" href="https://quickstart.azure.ai/Deployments/new/streamanalysiswithaml?source=CIGallery">
   estimate of cost<a>
   <br /><br />

   <a name="CNTK"></a>

   ### CNTK CogNitive ToolKit

   https://gallery.azure.ai/Tutorial/Cognitive-Toolkit-Tutorial-Getting-Started
   makes use of Microsoft's new network-description language BrainScript at
   https://docs.microsoft.com/en-us/cognitive-toolkit/BrainScript-Network-Builder
   https://github.com/Microsoft/CNTK/wiki/Tutorial
   https://github.com/Microsoft/CNTK

   CNTK invented some terms:

   * a sequence (in CNTK) is also referred to as an instance
   * a sample (in CNTK) is also referred to as a feature
   * input stream(s) (in CNTK) is also referred to as feature column or a feature
   * the criterion (in CNTK) is also referred to as the loss
   * the evalutaion error (in CNTK) is also referred to as a metric
   <br /><br />

0. Click through to a page with "Open in Studio".

0. Your selects appear in the "TRAINED MODELS" tab on the left side.


<a name="DSVM"></a>

## DSVM (Data Science Virtual Machine)

Microsoft offers in their Azure cloud virtual machine (VM) custom image called DSVM (Data Science Virtual Machine) that has all the utility software needed for data science, which involves deep learning frameworks and tools for machine learning,
pre-built, installed, and configured so they are ready to run immediately:

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/data-science-virtual-machine/dsvm-ubuntu-intro">Ubuntu</a>, <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/data-science-virtual-machine/linux-dsvm-intro">Centos</a> and <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/data-science-virtual-machine/provision-vm">Windows</a>

Machine learning tools installed to test inferencing:

<ul>
<li><a target="_blank" href="http://caffe.berkeleyvision.org/">Caffe</a>: "A deep learning framework built for speed, expressivity, and modularity". Great for computer vision projects.</li>
<li><a target="_blank" href="https://github.com/caffe2/caffe2">Caffe2</a>: A cross-platform version of Caffe</li>
<li><a target="_blank" href="https://github.com/Microsoft/CNTK">
Microsoft Cognitive Toolkit (CNTK)</a>: A deep learning software toolkit from Microsoft Research</li>
<li><a target="_blank" href="https://www.h2o.ai/">H2O</a>: An open-source big data platform and graphical user interface</li>
<li><a target="_blank" href="https://keras.io/">Keras</a>: A high-level neural network API in Python for Theano and TensorFlow</li>
<li><a target="_blank" href="http://mxnet.io/">
Apache MXNet Server</a>: A flexible, efficient deep learning library with many language bindings. Great for recommendation engines.</li>
<li>NVIDIA driver, CUDA 9, and cuDNN 7</li>
<li><a target="_blank" href="https://developer.nvidia.com/digits">
NVIDIA DIGITS</a>: A graphical system that simplifies common deep learning tasks</li>
<li><a target="_blank" href="http://torch.ch/">Torch</a>: A scientific computing framework with wide support for machine learning algorithms</li>
<li><a target="_blank" href="http://pytorch.org/">PyTorch</a>: A high-level Python library with support for dynamic networks</li>
<li><a target="_blank" href="https://www.tensorflow.org/">
TensorFlow</a>: An open-source library for machine intelligence from Google</li>
<li> * TensorFlow Serving, TensorRT, Chainer, Deep Water</li>
<li><a target="_blank" href="http://deeplearning.net/software/theano/">Theano</a>: A Python library for defining, optimizing, and efficiently evaluating mathematical expressions involving multi-dimensional arrays</li>
<li>Many sample Jupyter notebooks</li>
</ul>

For Machine Learning:

<ul>
<li><a target="_blank" href="https://github.com/JohnLangford/vowpal_wabbit">
Vowpal Wabbit</a>: A fast machine learning algorithm supporting techniques such as online, hashing, allreduce, reductions, learning2search, active, and interactive learning</li>
<li><a target="_blank" href="https://xgboost.readthedocs.org/en/latest/">
XGBoost</a>: for gradient boosting - a tool providing fast and accurate boosted tree implementation</li>
<li><a target="_blank" href="http://rattle.togaware.com/">
Rattle</a> (R Analytic Tool To Learn Easily):  provides a Gnome (RGtk2) GUI based interface to R functionality that makes getting started with data analytics and machine learning in R easy. <a target="_blank" href="https://cran.r-project.org/web/packages/rattle/index.html">From CRAN</a>.
</li>
<li><a target="_blank" href="https://github.com/Microsoft/LightGBM">
LightGBM</a>: A fast, distributed, high-performance gradient boosting framework</li>
</ul>

DSVM also contains popular tools for data science and development activities, including:

* Weka allows easy graphical exploration and machine learning. 
* Development tools and editors (RStudio, PyCharm, IntelliJ, Emacs, vim)
* Visual Studio Code, IntelliJ IDEA, PyCharm, and Atom

* Microsoft R Server 9.2.1 with Microsoft R Open 3.4.1, MicrosoftML package with machine learning algorithms, RevoScaleR and revoscalepy for distributed and remote computing, and R and Python Operationalization
* Anaconda Python 2.7 and 3.5

* JuliaPro - a curated distribution of Julia language with popular scientific and data analytics libraries, used by Jupyter
* JupyterHub - a multiuser Jupyter notebook server supporting R, Python, PySpark, Julia kernels, with sample notebooks

* Spark local 2.2.0 with PySpark and SparkR Jupyter kernels
* Single node local Hadoop

* Azure Storage Explorer
* Azure command-line interface
* Azure SDK in Java, Python, node.js, Ruby, PHP

* H2O, Deep Water, and Sparkling Water
* SQL Server 2017
* SQL Server Machine Learning Services (revo scale py)
* Apache Drill for querying non-relational data using SQL.

* Intel Math Kernel Library
<br /><br />

All frameworks are the GPU versions but work on the CPU as well. 


1. At the <a target="_blank" href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft-ads.linux-data-science-vm-ubuntu?tab=PlansAndPrice">
   Plans and Pricing</a>

   ### Provision a Test Drive instance

2. Click "Test Drive" (for 8 hours).
3. <a target="_blank" href="https://ctlabmgrstatesn.blob.core.windows.net/78aae21c34c84b9ba12d9442764401d1/user-manual.pdf">DOWNLOAD: Test Drive "User Manual.pdf"</a>

   ### Provision a full instance

   Michelene Harris in <a target="_blank" href="https://www.youtube.com/watch?v=4b1G9pQC3KM"> [19:16] Feb 21, 2018 VIDEO: JupyterHub on the Linux Data Science Virtual Machine</a>
   has showing us how to provision the Linux DSVM (a PasS offering on Azure), fire up the JupyterHub system for logging in to Jupyter, and then stopping the VM.

   https://docs.microsoft.com/en-us/azure/machine-learning/data-science-virtual-machine/dsvm-ubuntu-intro

2. Click "Get"
3. Fill out the form: Name needs to be globally unique among all Azure customers.

   PROTIP: Use a Resource Group for the same project, so it can be deleted for the whole project.

4. Click "Create".
5. <a target="_blank" href="https://portal.azure.com/#create/microsoft-ads.linux-data-science-vm-ubuntulinuxdsvmubuntu">
   Create a virtual machine</a>
6. Select password, etc.
7. Select size "B1s" to start with at 1.3 cents per hour. "B" is for "Burstable".

   Michelene Harris in <a target="_blank" href="https://www.youtube.com/watch?v=4b1G9pQC3KM"> [19:16]Feb 21, 2018 VIDEO: JupyterHub on the Linux Data Science Virtual Machine</a>
   says she has found "DS13v2" and "DS13v3" to work well.

   PROTIP: "ND" VMs up to 24 GB available are designed for artificial intelligence (AI) and deep learning using CNTK, TensorFlow, Caffe, Caffe 2, and other frameworks. NVIDIA Tesla P40 GPUs, RDMA and InfiniBand networking for large-scale training jobs.
   Starting from $1,511.10 per month.

8. Set no Availability Zone, no managed disk, 

   ### Client X2Go

   NOTE: The X2Go client performed significantly better than X11 forwarding in testing. We recommend using the X2Go client for a graphical desktop interface.

4. Install the X2Go client from <a target="_blank" href="  https://wiki.x2go.org/doku.php/download:start">this webpage</a>

   http://code.x2go.org/releases/X2GoClient_latest_macosx_10_11.dmg

4. Drag the "x2goclient.app" and drop on the Applications folder.
5. In Folder, right-click on "x2goclient.app" to select "Open".
6. Select "GNOME" instea of "KDE".

4. Log in to your VM via SSH. You can use PuTTY for terminal access on Windows or X2Go for graphical access.

   Connect to the XFCE graphical desktop on the VM using X2Go. 
   

<a name="Workbench"></a>

## Workbench

The steps below are based on <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/desktop-workbench/cli-for-azure-machine-learning">this web page</a>.

https://github.com/Azure/azure-cli
https://hub.docker.com/r/microsoft/azure-cli/

1. Install the CLI by downloading the <strong>AmlWorkbenchSetup.dmg</strong> file from 

   <a target="_blank" href="https://aka.ms/azureml-wb-dmg">https://aka.ms/azureml-wb-dmg</a>
   
   The CLI for Azure Machine Learning services is different from the Azure CLI used for managing Azure resources. 

   This "Azure Machine Learning Workbench" installer includes CLI.

2. From inside Finder, double-click the .dmg to install.

   BLAH: Use of .dmg file instead of brew means that versions are not managed automatically.

3. Click "Open" to the "... downloaded from the internet" pop-up.

4. Click the blue link "Click here for a full list of dependencies that will be installed".
   The response:
   <pre>
   Azure_cli_machinelearning (0.0.70+dev)
   Azureml.dataprep (0.1.1709.14033) and other azure libraries
   Conda (4.2.12)
   Numpy (1.11.3)
   Pandas (0.19.2)
   Dill (0.2.6)
   Numexpr (2.6.1)
   Scipy (0.18.1)
   Regex (2017.07.28)
   Xlrd (1.1.0)
   Pyarrow (0.6.0)
   scikit-learn (0.18.1)
   jupyter (1.0.0)
   psutil (5.2.2)
   </pre>
 
5. Click "Install".
6. Click "Launch Workbench".


   <a name="CLI"></a>

   ### AZ ML CLI 

3. In a Terminal, run this command to install the Machine Learning CLI:

   <pre>pip install -r https://aka.ms/az-ml-o16n-cli-requirements-file
   </pre>

3. In a Terminal, run this command to verify:

   <pre>az ml --help</pre>

   The expected response is:

   <pre>
Group
    az ml: Module to access Machine Learning commands.
&nbsp;
Subgroups:
    account : Manage operationalization accounts.
    env     : Manage compute environments.
    image   : Manage operationalization images.
    manifest: Manage operationalization manifests.
    model   : Manage operationalization models.
    service : Manage operationalized services.
   </pre>

   However, installation did not go well if the response is instead:

   <pre>
az: error: argument _command_package: invalid choice: ml
   </pre>

4. Documentation on az ml 

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/desktop-workbench/cli-for-azure-machine-learning">
   https://docs.microsoft.com/en-us/azure/machine-learning/desktop-workbench/cli-for-azure-machine-learning</a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/desktop-workbench/model-management-cli-reference">
   https://docs.microsoft.com/en-us/azure/machine-learning/desktop-workbench/model-management-cli-reference</a>

   * <a target="_blank" href="https://social.msdn.microsoft.com/Forums/azure/en-US/home?forum=MachineLearning">
   Microsoft's forum on Machine Learning</a>

   * <a target="_blank" href="https://github.com/MicrosoftDocs/azure-docs/tree/master/articles/machine-learning">
   https://github.com/MicrosoftDocs/azure-docs/tree/master/articles/machine-learning</a>

   ### Use CLI

   In a Terminal:

4. Setup compute target​s:

   <pre>az ml computetarget --debug</pre>

   To attach a <a target="_blank" href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft-ads.linux-data-science-vm-ubuntu">Data Science VM</a> target (remotedocker):

   <pre>
   TARGET_NAME="wow2"
   TARGET_ADDR="dsvmtd6eqpmmla6ly4c.westcentralus.cloudapp.azure.com" # or FQDN
   AZ_USERNAME="dsvm"
   AZ_PASSWORD="Dsvm@6eqpmmla"
   az ml computetarget attach remotedocker \
      -n "$TARGET_NAME" -a "$TARGET_ADDR" \
      -u "$AZ_USERNAME" -w "$AZ_PASSWORD"
   </pre>

   PROTIP: For better security, define AZ_USERNAME and AZ_PASSWORD in a separate shell file.

   To attach an HDInsight target:​

   <pre>
   CLUSTER_NAME="myhdicluster-ssh.azurehdinsight.net"
   az ml computetarget attach cluster \
      -n "$TARGET_NAME" -a "$CLUSTER_NAME" \
      -u "$USERNAME" -w "$PASSWORD"
   </pre>

   Within the aml_config folder, you can change the conda dependencies.

   Also, you can operate with PySpark, Python, or Python in a GPU DSVM.

1. Submit jobs for remote execution

   <pre>az ml experiment --help</pre>

1. Work with Jupyter notebooks​

1. Interact with run histories

1. Configure your environment to operationalize
   
## Hands-on labs

https://docs.microsoft.com/en-us/azure/machine-learning/desktop-workbench/deployment-setup-configuration

https://www.toptal.com/machine-learning/predicting-gas-prices-using-azure-machine-learning-studio

<a target="_blank" href="
https://gallery.azure.ai/Tutorial/Deep-Learning-Basics-for-Predictive-Maintenance">
Web page "Deep Learning Basics for Predictive Maintenance"</a>
dated June 12, 2017 mentions the 
<a target="_blank" href="https://ti.arc.nasa.gov/c/6/">
Download: Turbofan Engine Degradation Simulation Data Set</a>
(file CMAPSSData.zip) from the <a target="_blank" href="https://ti.arc.nasa.gov/tech/dash/groups/pcoe/">
Prognostics Center of Excellence (PCoE)</a> at NASA's Ames Research Center, Moffett Field, CA.
The file's name refers to the C-MAPSS simulation system used to generate the data.

When you click "View Tutorial" you see
<a target="_blank" href="
https://github.com/Azure/lstms_for_predictive_maintenance/blob/master/Deep%20Learning%20Basics%20for%20Predictive%20Maintenance.ipynb">
in GitHub "Deep Learning Basics for Predictive Maintenance.ipynb" within the "lstms_for_predictive_maintenance" repo under the Azure account</a>
also by Fidan Boylu Uz.

<a target="_blank" href="
https://github.com/Microsoft/DataStoriesSamples/tree/master/samples/">
https://github.com/Microsoft/DataStoriesSamples</a>
contains Sample code and documentation on data stories that showcase how you can use Cortana Intelligence Suite, SQL Server and Microsoft R Server.

   * <a target="_blank" href="https://github.com/Microsoft/DataStoriesSamples/tree/master/samples/WarAndPeaceSentimentAnalysis">Sentiment Analysis of the famous novel War and Peace</a> by Leo Tolstoy. Sample data in csv:

   <pre>"1805","BOOK 01","CHAPTER 01","I have faith only in God and the lofty destiny of our adored monarch.","God",0.81726600036296682</pre>

<a target="_blank" href="
https://github.com/Microsoft/sql-ml-tutorials/">
https://github.com/Microsoft/sql-ml-tutorials</a>
contains SQL Server tutorials for Python and R.

<a target="_blank" href="
https://github.com/Microsoft/code-challenges/">
https://github.com/Microsoft/code-challenges</a>
contains 15-minute code challenges for //BUILD 2017 conference. 
Usage is across data platform and analytics. Inclusive of SQL Server on Linux, Azure SQL Database, Azure DocumentDB, Azure Search, HDInsight, MySQL as a Service, PostgreSQL as a Service, Bot Framework, Python Tools for Visual Studio, R Tools for Visual Studio.

## Tutorials

0. Take the introductory tutorial:

   <a target="_blank" href="https://gallery.azure.ai/Collection/Introduction-to-Machine-Learning-with-Hands-On-Labs-1">
   Introduction to Machine Learning with Hands-On Labs</a>

   <a target="_blank" href="
   https://azure.microsoft.com/en-us/documentation/articles/machine-learning-studio-overview-diagram/">
   https://azure.microsoft.com/en-us/documentation/articles/machine-learning-studio-overview-diagram</a>

0. Create a model.

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
   <br /><br />
   
0. Train the model

   * Cross Validation
   * Retraining
   * Parameter Sweep
   <br /><br />

0. Score and test the model.

0. Make predictions with Elastic APIs

   - Request-Response Service (RRS) Predictive Experiment - Batch Execution Service (BES)
   - Retraining API
   <br /><br />


## Deploy to production

See https://services.azureml.net/ and https://docs.microsoft.com/en-us/azure/machine-learning/studio/model-progression-experiment-to-web-service

1. Click <a target="_blank" href="https://portal.azure.com/#create/Microsoft.MachineLearningModelManagement">
    Create Microsoft Machine Learning Model Management</a>

   NOTE: You can not select the "DEVTEST" pricing tier to use for deployment.

From the Overview section:

In order to deploy and manage models in production, you need to create a machine learning compute environment.

First, set up a virtual environment - you only need to do this once for your subscription:

    In the Azure portal, click the Cloud Shell button on the menu in the upper-right of the Azure portal.

    In Cloud Shell, create a virtual environment:
   <pre>
   virtualenv -p /usr/bin/python3 <em>my-project-path</em>
   </pre>

    Add the following lines to ~/.bashrc:<br />
    export PATH="<em>my-project-path</em>/bin":$PATH
    export PYTHONPATH="<em>my-project-path</em>/bin"

    Run:<br />
    source ~/.bashrc

    Install Azure CLI in the virtual environment:<br />
    <pre><em>my-project-path</em>/bin/pip install azure-cli</pre>

    Install Azure ML CLI also:<br />
    <pre><em>my-project-path</em>/bin/pip install azure-cli-ml</pre>

    Alternately, get tested versions with:
    <pre>pip install -r https://aka.ms/az-ml-o16n-cli-requirements-file</pre>

    After installation, <tt>find / -name azure-cli-ml 2>/dev/null</tt>
    to reveal location installed:
    <pre>~/Library/Caches/AmlWorkbench/Python/az-extensions/azure-cli-ml</pre>

After you have set up the virtual environment once, use the following steps every time you need to set up and configure a compute environment for deploying and managing models:

    Create a remote compute environment - you will be prompted to login and select a subscription:<br />
    <pre>az ml env setup -n <em>compute-environment-name</em> \
       -l <em>location-of-the-environment-resources</em> \
       [-g <em>name-of-a-new-or-existing-resource-group</em>] \
       -c</pre>

    To see if your environment is ready to be used, run the below command.<br />
    <pre>az ml env show -g <em>resource-group-name</em> -n <em>compute-environment-name</em></pre>

    Once provisioning is complete, set the compute environment where you want to deploy services:<br />
    <pre>az ml env set -g <em>resource-group-name</em> -n <em>compute-environment-name</em></pre>


## Python coding

https://docs.microsoft.com/en-us/azure/machine-learning/desktop-workbench/data-prep-python-extensibility-overview
Python for data prep.

https://docs.microsoft.com/en-us/azure/machine-learning/service/reference-python-package-overview
in Computer Vision, Forecasting, FPGA acceleration, and Text analytics.

## Camps

https://www.microsoft.com/germany/techwiese/events/ai-lab/default.aspx
Microsoft Student AI Lab \#StudentAILab

## Classes

<a target="_blank" href="https://channel9.msdn.com//events/Connect/2016/102/">
Get started with Microsoft Cognitive Services</a>
Dec 01, 2016 at 4:28PM  by Matt Winkler, GPM of Microsoft's Data Group

<a target="_blank" href="https://channel9.msdn.com/Events/Build/2018/BRK3226">
What's new with Azure Machine Learning May 06, 2018</a> at Microsoft Build 2018 by Matt Winkler @mwinkle
. At [3:05] is this diagram:<br />
![ms-azure-offerings-878x359-64549](https://user-images.githubusercontent.com/300046/41261761-831f32de-6d9a-11e8-8b4f-27fb4a8ecd49.jpg)

Bob Strudwick, CTO of UK's Asos fashion website showed
[14:14] Data Science Capabilities 
with demos by Naeem Khedarun, Saul Vargas Sandoval
[43:40] https://aka.ms/aml-packages to proprietary Python packages for Azure Machine Learning includes
<a target="_blank" href="https://docs.microsoft.com/en-us/python/api/overview/azure-machine-learning/computer-vision?view=azure-ml-py-latest">Computer Vision</a>, <a target="_blank" href="https://docs.microsoft.com/en-us/python/api/overview/azure-machine-learning/forecasting-overview?view=azure-ml-py-latest">Forecasting</a>, <a target="_blank" href="https://docs.microsoft.com/en-us/python/api/overview/azure-machine-learning/textanalytics?view=azure-ml-py-latest">Text Analytics</a>, <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/service/reference-fpga-package-overview">hardware acceleration</a>.

https://aischool.microsoft.com/learning-paths
links to Edx's in Microsoft Professional Program in Artificial Intelligence.
https://my.visualstudio.com/benefits?wt.mc_id=AISchool


https://aka.ms/iotrefarchitecture (pdf)
Azure Machine Learning: Machine learning In The Cloud With Azure Machine Learning

https://tetranoodle.com/course-materials-azure-ml/
CTO British Columbia



## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html %}
