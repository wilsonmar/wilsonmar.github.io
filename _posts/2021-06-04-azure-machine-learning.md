---
layout: post
date: "2023-07-21"
file: "azure-machine-learning"
title: "Azure Machine Learning"
excerpt: "Notes for before and after getting AI-900, AI-102, and DP-100 certified, as we automate ML workflows in the Azure PaaS cloud"
tags: [microsoft, azure, machine learning, AI]
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

This article presents my notes toward a guided tour to introduce use of <strong>Azure Machine Learning</strong> offerings running on Microsoft's  Azure cloud.

{% include whatever.html %}

I have other article on AI (Artificial Intelligence) at:
   * <a target="_blank" href="https://wilsonmar.github.io/microsoft-ai/">https://wilsonmar.github.io/microsoft-ai</a> 
   * <a target="_blank" href="https://wilsonmar.github.io/genai/">https://wilsonmar.github.io/genai</a> (Generative AI)
   * <a target="_blank" href="https://wilsonmar.github.io/mlops/">https://wilsonmar.github.io/mlops</a> (Machine Learning Ops)
   <br /><br />

{% include whatever.html %}


## Industry Ratings

In <a target="_blank" href="https://assets.thoughtworks.com/assets/technology-radar-vol-24-en.pdf">PDF: 2021 Volume 24</a>, among their "opininated" recommendations of what IT technologies their clients should Adopt, Trial, Assess, or Hold, <a target="_blank" href="https://www.thoughtworks.com/radar/">Thoughtworks' "Technology Radar"</a> advised a "hold" for Azure Machine Learning, with this scathing comment:

> "We’ve observed before that the cloud providers push more and more services onto the market. We’ve also documented our concerns that sometimes the services are made available when they’re not quite ready for prime time. Unfortunately, in our experience, <strong>Azure Machine Learning</strong> falls into the latter category. One of several recent entrants in the field of bounded low-code platforms, Azure ML promises more convenience for data scientists. Ultimately, however, it doesn’t live up to its promise; in fact, it still feels <strong>easier for our data scientists to work in Python</strong>. Despite significant efforts, we struggled to make it scale and lack of adequate documentation proved to be another issue which is why we moved it to the Hold ring."

In <a target="_blank" href="https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2023/04/tr_technology_radar_vol_28_en.pdf">PDF: 2023 Volume 28</a>, Azure Machine Learning fell of their Radar completely, but Facebook/Meta's "PyTorch" was added to the "Adopt" ring to Languages and Frameworks.

Undeterred:

## Setup

1. In the console, search for "Azure Machine Learning".
1. Select the Azure subscription to use.
1. Specify a Resource group (or create a new one).
1. Workplace details:
   * Workspace name: (unique name)
   * Region: (select from dropdown)
   * Storage account: (select from dropdown)
   * Key vault: (select from dropdown)
   * Application Insights: (select from dropdown)
   * Container registry: (select from dropdown)
   <br /><br />
   Networking:
   * Connectivity method: (select from dropdown)
   Advanced:
   * Identity type: (select from dropdown)
   * Encryption type: (select from dropdown)
   * Enable HBI flag
   <br /><br />
1. In the workspace created above:
1. TODO: Set Access Control (IAM)
1. Launch studio.



<a name="SampleMLCode"></a>

## My Sample ML Code

PROTIP: AI-102 is heavy on questions about coding.

So samples (unlike examples) are a more complete, best-practices solution for each of the snippets. They're better for integrating into production code. 

Unlike other classes, this describes the <strong>automation</strong> I've created instead of you clicking through web pages (portal.azure.com).

To start with, refer to my https://github.com/wilsonmar/azure-quickly.

Among <a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure/azureml-examples/azure-machine-learning-examples/">Azure Machine Learning examples</a> is a CLI at
https://github.com/Azure/azureml-examples/tree/main/cli


<a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure/">
docs.microsoft.com/en-us/samples/azure</a> 
provides sample Python Code at
https://docs.microsoft.com/en-us/samples/azure/azureml-examples/azure-machine-learning-examples/

https://docs.microsoft.com/en-us/samples/azure-samples/azure-sdk-for-go-samples/azure-sdk-for-go-samples/

A complete sample app is Microsoft' Northwinds Traders consumer ecommerce store.
<a target="_blank" href="https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/northwind-install">install</a>
But where is it used in the course?

Although it's from 2021, <a target="_blank" href="https://github.com/timothywarner/ai100">https://github.com/timothywarner/ai100</a> by Tim Warner includes <a target="_blank" href="https://github.com/timothywarner/ai100/tree/master/powershell-cli">Python and Powershell (ps1) scripts</a>:

   * ssh-to-aks.md - SSH into AKS cluster nodes
   * keyvault-soft-delete-purge.ps1
   * keyvault-storage-account.ps1
   * xiot-edge-windows.ps1
   
   * python-keyvault.py
   * autoprice.py
   <br /><br />



<a name="ServiceProviders"></a>

## ML among AI Service Providers

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations">Microsoft has</a> three service "Providers":

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Asset type </th><th> Resource provider namespace/Entity </th><th> Prefix </th></tr>
<tr valign="top"><td> <a target="_blank" href="#Cognitive_Services">Azure Cognitive Services</a> </td><td> <a href="#Cognitive_Services"> Microsoft.CognitiveServices/accounts</a> </td><td> cog- </td></tr>
<tr valign="top"><td> Azure Machine Learning workspace </td><td>   Microsoft.MachineLearningServices/workspaces </td><td> mlw- </td></tr>
<tr valign="top"><td> <a href="#CogSearch">Azure Cognitive Search</a> </td><td> Microsoft.Search/searchServices </td><td> srch- </td></tr>
</table>

Separte from the above are <a target="_blank" href="https://wilsonmar.github.io/azure-iot/">Azure IoT (Edge)</a> and <a target="_blank" href="https://azure.microsoft.com/en-us/services/iot-edge/">Azure IoT (Edge) Services</a>

<hr />

<a name="CogSearch"></a>

## Azure Cognitive Search

<a href="#Search"><strong>Search</strong></a> (the "Bing" brand) has recently been separated out from the "Cognitive Services" to its own at <a target="_blank" href="https://docs.microsoft.com/en-us/azure/search/">https://docs.microsoft.com/en-us/azure/search</a>, although it's used in "Conversational AI" using an "agent" (Azure Bot Service) to participate in (natural) conversations. BTW: <a target="_blank" href="https://www.theverge.com/2019/7/25/20727129/microsoft-cortana-features-strategy-report">in 2019</a> Cortana decoupled from Windows 10 search.

   Since October 31st, 2020, <a target="_blank" href="https://blogs.bing.com/search-quality-insights/october-2020/Bing-Search-APIS-are-Transitioning">Bing Search APIs</a> transitioned from Azure Cognitive Services Platform to <a target="_blank" href="https://aka.ms/bingapigetstarteddoc">Azure Marketplace</a>. The Bing Search v7 API subscription covers several Bing Search services (Bing Image Search, Bing News Search, Bing Video Search, Bing Visual Search, and Bing Web Search),

## Microsoft DOCS

Microsoft's Azure Machine Learning documentation is at:
<a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/service/">
docs.microsoft.com/en-us/azure/machine-learning/service</a>

<a target="_blank" href="https://github.com/microsoftdocs/ml-basics">
github.com/microsoftdocs/ml-basics</a>

<a target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR0q8mkm01mVAnfSNnngYvY1UNzBQODU4MUowVkVGWVRaOVJXRk4yMVhOTi4u">
Readiness Quiz for DP-100</a> (AZ-900 and AI-900)

<hr />

<a name="Decision"></a>
<a name="AzureMachineLearning"></a>
<a name="MachineLearning"></a>

## Decision service = Azure Machine Learning

By definition, "Machine Learning" involves creating programs without programmers coding logic in languages such as Python.

The work of Machine Learning (abbreviated to "ML") is to recognize patterns in historical data to "train" a <strong>model</strong> which can be referenced by web applications and other user interfaces to make <strong>predictions</strong> from new, similar data. 

In Azure, several "resources" need to be setup:

   * <a href="#CreateMLWorkspace">A Machine Learning workspace</a>
   * A Storage account to hold the model
   * A Key Vault to hold secrets
   * An Application Insights account to hold logs and metrics
   * A source of data (database)
   * <a href="#DataIngestion">Ingestion</a> and cleaning of data
   <br /><br />

The above can be setup by running a single command, but after you are setup to run it.

1. First, get skill at using Azure Portal Poart and CLI Bash by following my deep but concise tutorial at 

   <a target="_blank" href="https://wilsonmar.github.io/azure-onboarding/">https://wilsonmar.github.io/azure-onboarding</a>

   It covers creation of free Azure Subscription and Azure Storage accounts to hold files in a clouddrive folder.

   <a name="CreateMLWorkspace"></a>

   ### Create Machine Learning Workspace using GUI

1. In <a target="_blank" href="https://portal.azure.com/">portal.azure.com</a>, press G+\ and in the Search box type enough of <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.MachineLearningServices%2Fworkspaces">Machine Learning</a> for a selection with that name to appear in the dropdown that appears so you can select it by pressing Enter.

   <img width="1042" height="286" alt="az-ml-search-mac-1042x286" src="https://user-images.githubusercontent.com/300046/120628656-2c886300-c422-11eb-8eeb-889cf378bcc0.png">

   (Don't select "classic").

   "Machine learning is a subset of data science that deals with predictive modeling. In other words, using data to create models that can predict unknown values. It works by identifying relationships between data values that describe characteristics of something (its features) and the value we want to predict (the label), and encapsulating these relationships in a model through a training process."

   * <a href="#Classification"><strong>classification</strong></a> predicts <strong>categories or classes</strong> using <strong>unsupervised</strong> machine learning techniques to fit features into model and predict classification of the label. Labels are what we want to predict, such as a future value predicted or an action. The label is usually "Y" among mathimaticians.

   * <strong>regression</strong> predicts <strong>numeric</strong> values using <strong>supervised</strong> machine learning techniques on historical data.

   * Time Series forecasting is used for <a href="#AnomalyDetection">Anomaly Detection</a> using regression with a time-series element, enabling you to predict numeric values at a future point in time.

   * <strong>Clustering</strong> identifies the nearest neighbor in multiple dimensions, such as the nearest color to an RGB color value.
   <br /><br />

1. <a target="_blank" href="https://www.youtube.com/watch?v=tW1JV6bHXFA" title="Azure ML Workbench classify Iris demo dataset">VIDEO</a>: <a target="_blank" href="https://comparecamp.com/microsoft-azure-machine-learning-studio-review-pricing-pros-cons-features/" title="Getting Started">BLOG</a>: For Worspace Edition: choose "Basic" or "Enterprise" after considering feature and pricing differences at

   <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/machine-learning/">
   azure.microsoft.com/en-us/pricing/details/machine-learning/</a>


   ### Create Machine Learning Workspace using CLI

2. Setup your CLI Bash environment by following my instructions at:

   <a target="_blank" href="https://github.com/wilsonmar/azure-quickly#readme">https://github.com/wilsonmar/azure-quickly#readme</a>

   That covers setting up folders, shortcuts, and external memory variables in the CLI environment.

3. Invoke a run to train a sample model by running:

   <pre><strong>./az-mlcli2.sh</strong></pre>

   This script I wrote to automate manual setup procedures from <a target="_blank" href="https://github.com/Azure/azureml-examples">https://github.com/Azure/azureml-examples</a>, described at  .

   The script invoke <tt>bash setup.sh</tt> to create Resource Group "azureml-examples-rg" in "East US" containing:
   * <a href="#CreateMLWorkspace">main (Machine Learning)</a>
   * maininsights... (Application Insights)
   * mainkeyvault... (Key vault)
   * mainstorage...  (Storage account)
   <br /><br />

   My script also runs a GitHub Actions yml file using the "ml" subcommand from the <a target="_blank" href="
https://docs.microsoft.com/en-us/samples/azure/azureml-examples/azure-machine-learning-20-cli-preview-examples/">Microsoft ML 2.0 CLI Preview</a> <a target="_blank" href="https://techcommunity.microsoft.com/t5/azure-ai/announcing-the-new-cli-and-arm-rest-apis-for-azure-machine/ba-p/2393447">announced May, 2021</a>:

   <pre><strong>time az ml job create -f jobs/hello-world-env-var.yml --web --stream</strong></pre>

   The <a target="_blank" href="https://github.com/Azure/azureml-examples/blob/main/cli/jobs/hello-world.yml">code at hello-world.yml</a>, which has python print out "hello world" from within a Docker image downloaded from Docker Hub (docker.io):

   <pre>command: echo $ENV_VAR
environment:
  docker:
    image: docker.io/python
environment_variables:
  ENV_VAR: "hello world"
compute:
    target: local
   </pre>

   Information about it is at:
   https://github.com/Azure/azureml-examples/tree/main/python-sdk/tutorials/an-introduction

1. Run again, but use hello-world-env-var.yml

1. Run other yml files listed in <a target="_blank" href="https://github.com/Azure/azureml-examples/tree/main/cli">https://github.com/Azure/azureml-examples/tree/main/cli</a>, which scripts passed or failed in GitHub Actions.

   CAUTION: Don't run jobs marked "failing" (in red).

1. When done, stop billing by running:

   <pre><strong>bash cleanup.sh</strong></pre>

   Additionally, there are more <a href="SampleMLCode">sample ML code to create models</a>, 

   Below are instructions to do the work manually in the Azure Portal:

...

1. Click "Start now" under "Notebooks".
1. Click "Terminal".

   Note that you are not in the Azure CLI but <strong>within a server instance</strong> (named "heavenlit" in the example below). 

   <img width="1030" alt="az-ml-notebook-term-2060x540" src="https://user-images.githubusercontent.com/300046/122663471-f6ecb500-d157-11eb-8ebf-520e5044f182.png">

1. Change the prompt:

1. NOTE: There is no code (Visual Studio Code) by default but install it:

   <pre><strong>sudo snap install code --classic</strong></pre>

1. You can click the red icon (to stop) or blue arrow (to restart) the server.


   ### ml-basics Python Jupyter Notebooks

https://docs.microsoft.com/en-us/users/msftofficialcurriculum-4292/collections/kox0ig8qrgez2q
ILT Pilot – DP-100: Designing and Implementing a Data Science Solution on Azure

1. <a target="_blank" href="https://www.lexxconsulting.com/post/machine-learning-with-python-microsoft-azure-machine-learning">TUTORIAL</a>: Get the script:

   <pre><strong>
git clone <a target="_blank" href="https://github.com/microsoftdocs/ml-basics">https://github.com/microsoftdocs/ml-basics.git</a> --depth 1
   </strong></pre>

1. Get the Python scripts referenced during the <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/courses/dp-100t01">3-day $1795 USD live online course by Microsoft DP-100T01-A: Designing and Implementing a Data Science Solution on Azure</a> (for Data Scientists). 

   <pre><strong>git clone <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100">https://github.com/MicrosoftLearning/mslearn-dp100.git</a> --depth 1
   </strong></pre>

   NOTE: You don't need to cd into the repo because it's called from the directory list.
1. Toggle from "Focus Mode" to "Standard Mode" to see the directory list.
1. Expand "ml-basics".
1. Double click one of the .ipynb files to open in a Jupyter Notebook at the right pane.

   From mslearn-dp100, described at
   <a target="_blank" href="https://microsoftlearning.github.io/mslearn-dp100/">
   microsoftlearning.github.io/mslearn-dp100</a>:

   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/01%20-%20Get%20Started%20with%20Notebooks.ipynb">Create an Azure Machine Learning workspace (01 - Get started with Notebooks)</a>. Success is a output from a print statement from each frame performing a basic operation of Python in the Juypter Notebook (import, workspace loaded, compute resource loaded).

   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/02%20-%20Get%20AutoML%20Prediction.ipynb">Use Automated Machine Learning (02 - Get AutoML prediction)</a> to make a Diabetes Prediction. Before running, replace <tt>ENDPOINT</tt> and <tt>PRIMARY_KEY</tt> of the auto-predict-diabetes Automated ML service you setup.

   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/03%20-%20Get%20Designer%20Prediction.ipynb">Use Azure Machine Learning Designer (03 - Get Designer predictions)</a> from the predict-diabetes service.

   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/04%20-%20Run%20Experiments.ipynb">04 - Run experiments</a> analyzing 1000 rows in mslearn-diabetes to yield pregnancy categories. Runs MLFlow with intermediate logged metrics.

   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/05%20-%20Train%20Models.ipynb">05 - Train models</a>
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/06%20-%20Work%20with%20Data.ipynb">06 - Work with data</a>. See <a target="_blank" href="https://github.com/Azure/MachineLearningNotebooks/tree/master/how-to-use-azureml/work-with-data/datasets-tutorial">"work-with-data"</a>
   
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/07%20-%20Work%20with%20Compute.ipynb">07- Work with compute</a> [VMs]
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/08%20-%20Create%20a%20Pipeline.ipynb">08 - Create a pipeline</a>
   <br /><br />

   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/09%20-%20Create%20a%20Real-time%20Inferencing%20Service.ipynb">09 - Create a real-time inference service</a>
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/10%20-%20Create%20a%20Batch%20Inferencing%20Service.ipynb">10 - Create a batch inference service</a> [jobs]
   * <a tune="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/11%20-%20Tune%20Hyperparameters.ipynb">11 - Tune hyperparameters</a>
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/12%20-%20Use%20Automated%20Machine%20Learning.ipynb">12 - Use automated machine learning from the SDK</a>
   <br /><br />
   
   Responsible AI/ML:

   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/13%20-%20Explore%20Differential%20Privacy.ipynb">13 - Explore differential privacy</a> using the SmartNoise toolkit from OpenDP.
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/14%20-%20Interpret%20Models.ipynb">14 - Interpret models</a>
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/15%20-%20Detect%20Unfairness.ipynb">15 - Detect and mitigate unfairness</a> <a target="_blank" href="https://www.microsoft.com/en-us/research/uploads/prod/2020/05/Fairlearn_WhitePaper-2020-09-22.pdf">PDF</a>
   <a target="_blank" href="https://customers.microsoft.com/en-us/story/809460-ey-partner-professional-services-azure-machine-learning-fairlearn">*</a>
    
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/16%20-%20Monitor%20a%20Model.ipynb">16 - Monitor a model</a>
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100/blob/main/17%20-%20Monitor%20Data%20Drift.ipynb">17 - Monitor data drift</a> using the pip azureml-datadrift package.
   <br /><br />

   From ml-basics:

   * <strong>01 - Data Exploration.ipynb</strong>
   <br /><br />


   Additionally:

   <a target="_blank" href="https://github.com/Azure/MachineLearningNotebooks/">github.com/Azure/MachineLearningNotebooks</a> has Notebooks.

1. Click the ">>" double blue icon to run the script.

   Watch each data frame and graphic get generated. The final frame's output expected is:

   <tt>Studying for 14 hours per week may result in a grade of 70</tt>

   CONGRATULATIONS! At this point your DevOps job is done.


   ### Study the code

   The AI-102 and DP-100 both focus on coding.

1. <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/explore-analyze-data-with-python/3-knowledge-check">QUIZ</a>: 

   * What does <strong>NumPy.shape (2,20)</strong> tell you about the elements in the array?<br />
   A tuple whose elements give the lengths of the corresponding array dimensions.
   The array is two dimensional, with each dimension having 20 elements.

1. To better study the Python coding, clone the repo to your local machine so you can use your editor's Find features.

1. Make a change and run again to see the impact.

   PROTIP: The "Ensemble Algorithm" is the current state of the art yielding the best ROC.

   * https://madewithml.com/

   ### Flights Challenge

1. Near the bottom of the file is this Challenge:

   "If this notebook has inspired you to try exploring data for yourself, why not take on the challenge of a real-world dataset containing flight records from the US Department of Transportation? You'll find the challenge in the /challenges/01 - Flights Challenge.ipynb notebook!

   That notebook is under within "Files", above "Users" are folders:

   ![az-ml-notebook-files](https://user-images.githubusercontent.com/300046/122685585-867e7c00-d1c9-11eb-8dbb-674065c5df53.png)


   ### Clean up

   To reclaim memory usage:

1. Click the "X" to dismiss the tab representing the Notebook you're done with.


   There are other *.ipynb (Python Notebook) files described in <a target="_blank" href="https://microsoftlearning.github.io/mslearn-dp100/">this webite</a> primarily by Graeme Malcolm presents (no C#, R, Julia here) which call the Azure Machine Learning Python SDK in the <a target="_blank" href="https://docs.microsoft.com/en-us/python/api/azureml-core/azureml.core?view=azure-ml-py">azureml-core package in PyPi</a> [<a target="_blank" href="https://www.wheelodex.org/projects/azureml-core/rdepends/">used by</a>]. However, links below are to <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100">github.com/MicrosoftLearning/mslearn-dp100</a> by Microsoft's Graeme Malcolm. It contains iPython Notebook code rather than instructions for setting up the ML Workspace.


   AI-100 and AI-102 both touch on Machine Learning as well.

<hr />

<a name="DP-100"></a>

### DP-100

Earn the "Microsoft Certified: Azure Data Scientist Associate" certification by passing the one $165 exam answering 40-60 questions in 210 minutes: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-100">DP-100: Designing and Implementing a Data Science Solution on Azure</a>. It has a strong focus on machine learning and Databricks.

   * Manage Azure resources for machine learning (25–30%), which is a higher level than "Setting up an Azure Machine Learning workspace", which require data and compute.
   * Run experiments and train models (20–25%) using the ML Designer, SDK, and AutoML.
   * Deploy and operationalize machine learning solutions (35–40%) previously "Optimizing and managing models" suing Hyperdrive and model explainers.
   * Implement responsible machine learning (5–10%) 
   <br /><br />

Microsoft's Study Guide for DP-100 has specific links for each topic: 
<a target="_blank" href="https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4MHoo">
query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4MHoo</a>

The free text-only "learning paths" tutorials associated:

   * Create machine learning models
   * Create no-code predictive models with Azure Machine Learning
   * Build and operate machine learning solutions with Azure Machine Learning
   * Perform data science with Azure <strong>Databricks</strong>
   <br /><br />

https://docs.microsoft.com/en-us/learn/modules/explore-analyze-data-with-python/2-exercise-explore-data

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/build-ai-solutions-with-azure-ml-service/">10 hr. MS LEARN PATH: Build and operate machine learning solutions with Azure Machine Learning</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/create-machine-learn-models/">MS LEARN LAB: Create machine learning models</a>

Udacity offered those who complete their <a target="_blank" href="https://www.udacity.com/course/introduction-to-machine-learning-using-microsoft-azure--ud00333">free "Intro to Machine Learning using Microsoft Azure"</a> before July 30, 2021, 50% off on their paid <a target="_blank" href="https://www.udacity.com/course/machine-learning-engineer-for-microsoft-azure-nanodegree--nd00333?coupon=MSFT50&campaign_participation=skip"> "Machine Learning Engineer for Microsoft Azure Nanodegree Program"</a>, which include access to real-world projects from industry experts, career services and guidance. Technical mentor support throughout the program review your hands-on projects:
   * Optimizing an ML Pipeline In Azure - leveraging AutoML, hyperparameter tuning, etc. using scikit-learn, Hyperdrive, and AutoML.
   * Operationalizing Machine Learning (into a production environment) using Application Insights, identifying problems in logs, and harnessing the power of Azure’s Pipelines. 
   * Capstone Project: using both the hyperdrive and automl API from azureml to build a model using external data of your choice. After training, compare their performance, deploy the best model as a webservice and test the model endpoint.
   <br /><br />


### DP-100 Video courses:

The <a target="_blank" href="https://cloudacademy.com/learning-paths/dp-100-exam-prep-designing-and-implementing-a-data-science-solution-on-azure-1902/">11 hr. CloudAcademy.com course on DP-100</a> by <a target="_blank" href="https://linkedin.com/in/guy-hummel/">Guy Hummel</a> has <a target="_blank" href="https://github.com/cloudacademy/azureml-intro">github.com/cloudacademy/azureml-intro</a> last updated Sep 2020, which is before changes to the exam May, 2021.

On Pluralsight, <a target="_blank" href="https://www.JaredRhodes.com/">Jared Rhodes</a> created:

   * <a target="_blank" href="https://app.pluralsight.com/paths/certificate/microsoft-exam-dp-100-designing-and-implementing-a-data-science-solution-on-azure">this course</a> which sets up a DSVM (Data Science Virtual Machine). It covers setup of PyCharm to import the iris sample dataset commonly used in the industry.

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-building-first-data-science-project/recommended-courses">Building Your First Data Science Project in Microsoft Azure</a>
 
   * Using Continuous Integration and Continuous Deployment

At ACloudGuru.com by Brian Roehm:

   * <a target="_blank" href="https://learn.acloud.guru/course/1358cb09-664f-45e6-ab33-0be10b6793c1/dashboard">DP-100 Part 1 - Preparation</a> and <a target="_blank" href="https://learn.acloud.guru/course/1358cb09-664f-45e6-ab33-0be10b6793c1/learn/ff534579-40f0-4c44-8e0f-f64f81a60dc6/c1358988-3d85-42ad-acd2-3d1bcaff0a0b/watch">Using the DP-100 Essentials Guide</a> as part of Prep

   * <a target="_blank" href="https://acloud.guru/overview/a87e8bd0-4293-408a-be01-9ff3e6ae0ec7?_ga=2.188555496.1540150877.1623079786-1658143929.1623079786">DP-100 Part 2 - Modeling</a> and <a target="_blank" href="https://learn.acloud.guru/course/a87e8bd0-4293-408a-be01-9ff3e6ae0ec7/learn/6cbd9678-a5e8-4b4b-b04f-2203f59ac183/2072772d-763e-46fd-bb69-e13e056d21cc/watch">Using the DP-100 Essentials Guide</a> as part of Modeling

<hr />


<a name="DataIngestion"></a>

### Data Ingestion

Alternatives to get data into ML:

   * AdlCoy
   * Azure CLI
   * AzCopy
   * Azure Cosmos DB Data Migration Tool
   * bcp
   * blobfuse
   * Microsoft Data Management Gateway
   <br /><br />


<a name="Classification"></a>

### ML classification examples

   * <a target="_blank" href="https://www.literature-map.com">literature-map.com</a> suggests other authors based on an author input. The input author is displayed in the middle of a map.

   * Product identification - performing visual searches for specific products in online searches or even, in-store using a mobile device.

   * Disaster investigation - evaluating key infrastructure for major disaster preparation efforts. For example, aerial surveillance images may show bridges and classify them as such. Anything classified as a bridge could then be marked for emergency preparation and investigation.

   * Medical diagnosis - evaluating images from X-ray or MRI devices could quickly classify specific issues found as cancerous tumors, or many other medical conditions related to medical imaging diagnosis.
   <br /><br />

![az-ai-ml-1173x538](https://user-images.githubusercontent.com/300046/116586918-2fe67700-a8d7-11eb-87e7-1a4087faaa4f.png)


<hr />

<a name="RunJupyter"></a>

## Jupyter Notebooks on Azure

If you're running a Chromebook laptop, there are several ways you can now run your Juypter Notebooks within the Azure cloud:

   * Within <a href="#AzureStudio">Azure Machine Learning's Azure Studio (below)</a>

   * <a target="_blank" href="https://aka.ms/aznb-codespaces">GitHub Codespaces</a>, if you are part of the beta.

HISTORY: <a target="_blank" href="https://notebooks.azure.com/">https://notebooks.azure.com</a> is now redirecting users to other services.

References:
   * https://towardsdatascience.com/running-jupyter-notebook-on-the-cloud-in-15-mins-azure-79b7797e4ef6


<a name="AzureStudio"></a>

### ML Studio JupyterLab from local files

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/notebooks/quickstart-export-jupyter-notebook-project#use-notebooks-with-azure-machine-learning">DOCS</a>:
<a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-run-jupyter-notebooks">Run Jupyter Notebooks in a ML workspace</a>

1. On an internet browser, view a <tt>.ipynb</tt> (Jupyter notebook) file GitHub.com. It may take several seconds to render. For example: 

   NOTE: That is adapted from <a target="_blank" href="
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/01%20-%20Image%20Analysis%20with%20Computer%20Vision.ipynb">
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/01%20-%20Image%20Analysis%20with%20Computer%20Vision.ipynb</a>
   then removing setup in Azure, so that the Notebook can be cross-platform (also work outside of Azure).

   Currently, GitHub does not provide a "run" button when displaying Notebooks.

   For that, you need to create a Cognitive Services instance on Azure, described below.

1. In a Terminal, load a GitHub repo containing notebooks and associated files:

   <pre><strong>cd ~/gmail_acct  # or whatever folder you use to hold repos to be clonned:
   git clone https://github.com/MicrosoftLearning/mslearn-ai900 --depth=1
   cd mslearn-ai900
   </strong></pre>

1. In portal.azure.com:
1. G+\ <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.MachineLearningServices%2Fworkspaces">Machine Learning</a>.

1. <img align="right" width="368" alt="az-mlworkspace-736x946" src="https://user-images.githubusercontent.com/300046/116822701-8a810c80-ab3d-11eb-96a9-a80d7df88f5c.png"> Create Machine Learning Workspace: <a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/README.md">Follow my instructions</a> to <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-manage-workspace-cli">create a ML Workspace</a> and run my <a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/az-mlworkspace-cli.sh"><strong>./az-mlworkspace-cli.sh</strong></a>. 
   
1. The script creates these resources under the Resource Group:
   * Machine learning
   * Application Insights
   * Key vault
   * Storage account
   <br /><br />

1. G+\ <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.MachineLearningServices%2Fworkspaces">Machine Learning</a>
1. Click the Machine Learning name just created.
1. In Portal Machine Learning: <strong>"Launch studio"</strong> (formerly "Azure Studio") to open a new browser tab "Microsoft Azure Machine Learning".

1. In the left-side navigation bar, select Author: Notebooks.
1. Click "+ Create" to Upload files.
1. Navigate thru folder "mslearn-ai900", "01 - Image Analysis with Computer Vision.ipynb".
   Select overwrite and "trust contents of this file". Click "Upload".
1. Copy to clipboard Key1 from running <tt>./az-cog-cli.sh</tt>.

1. Highlight "YOUR_COG_KEY" and paste Key1 from the script run.

1. Do the same with "YOUR_COG_ENDPOINT". ???

1. Click "Authenticate" if that appears.

1. Delete the Resource Group and Compute so charges don't accumulate.

References:
   * The sample Python Notebook is adapted from <a target="_blank" href="
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/01%20-%20Image%20Analysis%20with%20Computer%20Vision.ipynb">
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/01%20-%20Image%20Analysis%20with%20Computer%20Vision.ipynb</a>
   * https://jupyter-notebook.readthedocs.io/en/stable/security.html
   <br /><br />

NOTE:
   <a target="_blank" href="https://jupyterlab.readthedocs.io/"JypiterLab</a> is <a target="_blank" href="https://towardsdatascience.com/jupyter-lab-evolution-of-the-jupyter-notebook-5297cacde6b">more robust than classic Jupyper</a>:
   * Native Git and GitHub support - https://github.com/jupyterlab/jupyterlab
   * Extensible with <tt>jupyter labextensions install jupyterlab-drawio</tt>
   * Google Drive
   * Dark themes
   <br /><br />

<hr />


<hr />


### ML Designer Pipelines

Steps to <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/tutorial-designer-automobile-price-deploy">deploy a machine learning model with the Designer</a>:
   1. Create inference clusters
   2. Create and test inference pipeline
   3. Deploy inference pipeline
   4. Test the service (used by the user)
   <br /><br />

Alternately, <a target="_blank" href="https://www.bluegranite.com/blog/train-and-deploy-machine-learning-models-using-the-azureml-service">Process</a> (using a Python scipt):
![azureml-1118x398](https://user-images.githubusercontent.com/300046/116598715-6676be80-a8e4-11eb-878a-70f8dface9d9.png)

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/classify-user-feedback-with-the-text-analytics-api/3-exercise-call-the-text-analytics-api-using-the-api-testing-console">FREE Sandbox (Concierge Subscription) Exercise: Call the Text Analytics API from the online testing console</a> Feedback sorter Function app Text Analytics thru Queue, sort based on Sentiment.


https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html

https://www.kaggle.com/fabiendaniel/predicting-flight-delays-tutorial


<a name="CreateMLData"></a>

### Create data file

The data used in the tutorial below is from <a target="_blank" href="https://www.coursera.org/projects/azure-machine-learning-studio-pipeline">Coursera: Machine Learning Pipeline Tutorial with Azure ML Studio</a>. The tutorial provides a file on its GitHub, so skip this data preparation step (which normally is a large part of the total effort).

Another lab is: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/use-automated-machine-learning/deploy-model">MSLEARN "predict-rentals" LAB</a>
following https://docs.microsoft.com/en-us/learn/modules/use-automated-machine-learning/use-auto-ml For that, download data file from https://aka.ms/bike-rentals

Generally:

1. Select the Datasets page (under Assets)
1. " + Create", "From web files". Web URL: https://aka.ms/bike-rentals

   Alternately, you can upload a file from your local machine.

1. Dataset type: Tabular
1. Next




<a name="CreateWorkspace"></a>

### Create ML Workspace resource

1. Go to G+\ <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.MachineLearningServices%2Fworkspaces">Machine Learning</a>
   
   If you're following <a target="_blank" href="https://cloudacademy.com/lab/introduction-azure-machine-learning-studio/">cloudacademy.com/lab/introduction-azure-machine-learning-studio</a>, select the workspace created and skip to the next section.

   But if you're not following that, follow steps below:

1. Select your Directory and Subscription.
1. Click the blue "Create machine learning workspace". A new tab appears in portal.azure.com.
1. Resource Group: PROTIP: just 3 letters are necessary, so use letters (such as "devml") which does not have ascenders for making numbers to be appended to it more visible.
1. Workspace Name: PROTIP: just 3 letters are necessary.
1. Container Registry: To enesure uniqueness, append $RANDOM to your text (to make devml3232).
1. Container Registry SKU: Basic

   <img width="436" alt="az-ml-workspace-details-872x750" src="https://user-images.githubusercontent.com/300046/120132531-bc5eb080-c187-11eb-91b2-9dbee3b3c104.png">

1. "Review + create".

   CAUTION: The network is public by default. Choosing private would entail more configuration.

1. "Create".

   CAUTION: Charges now begin to accumulate. Delete your Resource Group ASAP. It's cheaper if you recreate it if you need another workspace.

1. When created, click "Go to resource" blue button.


   ### Launch ML Studio

1. Click "Launch Studio" blue button, which opens a new browser tab.

   Alternately, click this URL or copy the URL and paste in the browser URL field to:
   
   <a target="_blank" href="
   https://ml.azure.com/">
   https://ml.azure.com</a>

   Notice the blue band instead at the top.

1. At "Welcome to the studio" pop-up, click the "X" dialog button to dismiss it.

   #### Studio navigation tutorial

1. Click "+" on the left menu to reveal a list.

1. To reveal (or hide) left menu icon labels, click the "hamburger" icon at the upper left.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/120108644-5b9d8c80-c123-11eb-8d63-accb72611ae2.png">
   <img width="1035" alt="az-mlstudio-home-2070x1148" src="https://user-images.githubusercontent.com/300046/120108644-5b9d8c80-c123-11eb-8d63-accb72611ae2.png"></a>

   NOTE: The "Start now" items are also listed in the left menu.

   Within the "Assets" category:

   Datasets is where to manage data used in Machine Learning experiments. There, version datasets as well to explore different formats or data content.

   Experiments tracks Machine Learning projects and experiment runs.

   Pipelines manage Machine Learning pipelines to boost efficiency when building Machine Learning models.

   Models manage the models built and shared.

   Endpoints deploy Machine Learning models as REST endpoints on AKS or ACI infrastructure.


   ### New ML Pipeline

1. PROTIP: Click "Pipelines". Clicking "+ New", then "Pipelines" is like clicking "Designer" and "+ New" Pipeline. Alternately, cursor up/down the left menu and press Enter to select.

   <a name="CreateMLCompute"></a>

   ### Compute target

1. On the right-hand side under Settings, click "Select compute target". Select the compute resource created earlier, then Save.

   If one is already available, click on it and skip to the <a href="#MLDataInput">next section</a>.

   Alternately, 

1. "Compute" menu (under heading Manage).
1. "+ New" blue button.
1. Virtual Machine type: CPU.
1. Virtual machine size: Select from all options.
   
   * The cheapest is <strong>"Standard_F2s_v2"</strong> with "2 cores, 4GB RAM, 16GB storage" for Compute optimized at "$0.11/hr"
   
1. Compute name: wow
   * Minimum number of nodes: 0 (the default)
   * Maximum number of nodes: 2 (from 1 the default)
   * Idle seconds before scale down: 120 (from default 1800)
   <br /><br />

1. Compute name: PROTIP: 3-characters are the smallerst allowed, such as "ace", "jim", "opq", "rsu", "vwx", "yza", etc.

1. Enable SSH access: leave unchecked

1. Next and wait (5 minutes) for State to go from "Creating" to "Running".

   CAUTION: Charges now begin to accumulate. Delete your Resource Group ASAP. It's cheaper if you recreate it if you need another compute instance.


   <a name="MLDataInput"></a>

   ### ML Data Input

1. PROTIP: Instead of using your mouse to expand the assets menu hierarchy, which requires memorizing what is under each asset category:

   <img width="240" alt="az-ml-assets-menu-480x1042" src="https://user-images.githubusercontent.com/300046/120109638-88ec3980-c127-11eb-8806-62465ccbf16d.png">

   <a name="PipelineDiagram"></a>

   get the titles of assets to drag-and-drop from this sample pipeline diagram:

   ![az-ml-pipeline-map-809x692](https://user-images.githubusercontent.com/300046/120111258-77f2f680-c12e-11eb-91ac-2486dfa33d0f.png)

1. Click in the field containing "Search by name, tags and description" and type:

   <strong>Import Data</strong>

   As you type, assets matching your search phrase appear. Stop typing when you see what you want.

   ![az-ml-feature-search-637x302](https://user-images.githubusercontent.com/300046/120110683-b2a75f80-c12b-11eb-834b-1af724ca1851.png)

   NOTE: The date shown is the version of the asset.

1. Drag-and-drop the asset "Import Data" onto the <strong>top</strong> of the (blank) designer canvas.

1. In the menu that appears on the right, open the "Data source" dropdown to select "URL via HTTP".
1. Copy and paste the URL to <a href="#CreateMLData">created data (above)</a>, such as this:

   https://raw.githubusercontent.com/cloudacademy/azure-lab-artifacts/master/intro-to-azure-ml/tweets.csv

1. Wait until "Validating" is done. The larger the file, the longer this will take.


   <a name="Submit"></a>

   ### Submit and Run Experiment

1. Preview schema to ensure data fields are defined correctly. Save.

1. In order for Column labels to populate, click "Submit" at the uppper-right to run the model.

1. In the "Set up pipeline run" dialog, select "Create new" and type experiment name:

   PROTIP: Have a naming convention for models. Begin the Name with "dev" to denote its status. Name models with a suffix of a couple of zeros in front of number 1 in case there are several.

1. Click Submit on the dialog. Look to the upper-right for the "Running" status to "Finished", which can be several minutes.

1. Look for the "Running" status to "Finished", which can be several minutes. 


   ### Add pipeline steps to filter and process imported data

1. Search for asset "<strong>feature hashing</strong>" and drag it under "Import Data" as a new step in the canvas:

   ![az-ml-feature-search-637x302](https://user-images.githubusercontent.com/300046/120110683-b2a75f80-c12b-11eb-834b-1af724ca1851.png)

1. Connect two steps: click the circle under the top step (turning it green), then drag it to the circle above the second step (turning that green). An arrow should appear.

   That action converts text data into a vector of features which makes the data more manageable and performant. 

1. In the context menu at the right, click "Edit column name" and select "<strong>tweet_text</strong>". Save.


   ### Split data

1. Search for asset "<strong>split data</strong>" to drag-and-drop onto the designer canvas.

1. Click on it to input "<strong>0.8</strong>" in the "Fraction of rows in the first ouput dataset" field (replacing the default "0.5"), then Tab away.

   80% - the "training set" is used to train the model.<br />
   20% - the "test set" is used to help score the model later.

1. Connect the Feature Hashing step with the Split Data step.

1. Search for asset "<strong>Filter Based Feature Selection</strong>" and drag it onto the canvas under "Split Data", then join them.

   This teases out the data by irrelevant attributes or redundant columns. Each feature column is measured and scored then ranked, which improves accuracy when building a predictive model.

1. Search for asset "<strong>Train Model</strong>" and drag it onto the canvas.

1. In Target Column: click the Edit Column link to reveal the list of columns by clicking "Edit column name" to select "<strong>sentiment_label</strong>". Save.

1. Number of desired features: 2000 (instead of default 1).

1. Feature scoring method: Select "ChiSquared" (instead of default "PearsonCorrelation").

1. Search for <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/score-model">Score Model</a>

1. Search for <strong>Evaluate Model</strong>, drag-and-drop.
1. PROTIP: Link from Score Model to the <strong>left</strong> port of <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/evaluate-model#expected-inputs">Evaluate Model</a>. Otherwise there will be an error.

   https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/designer-error-codes


   ### Training run

1. Verify that you've achieved the <a href="#PipelineDiagram">pipeline diagram (above)</a>.

1. Click "Submit" at the upper-right to run the whole pipeline to create a model.

   It take several minutes to complete all the steps. The more data, the longer it takes.

   ### Evaluate ML models

1. Right-click on the Evaluate Model step to expand "Visualize" before clicking "Evaluation results":

   ![az-ml-eval-open-483x255](https://user-images.githubusercontent.com/300046/120210646-3f662200-c1ed-11eb-980f-300e5a2c60e3.png)

   <a target="_blank" href="https://adatis.co.uk/evaluating-models-in-azure-machine-learning-part-1-classification/">BLOG</a>:

1. Review:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/120211396-2316b500-c1ee-11eb-88e9-0eb39ae5eaff.png">
   <img alt="az-ml-eval-roc-841x503.png" width="841" height="503" src="https://user-images.githubusercontent.com/300046/120211396-2316b500-c1ee-11eb-88e9-0eb39ae5eaff.png"></a>

Azure does not present all the statistics, which we cover here.

#### Metrics of classification model performance

See <a target="_blank" href="https://wilsonmar.github.io/classification#Evaluation">My notes on evaulating Classification results</a>.

#### Metrics of regression model performance

See <a target="_blank" href="https://wilsonmar.github.io/regression#Evaluation">My notes on evaulating Regression results</a>.

#### Metrics for clustering model performance

* <strong>Average Distance to Other Center</strong> is how close, on average, each point in the cluster is to the centroids of all other clusters.

* <strong>Average Distance to Cluster Center</strong> is the closeness of all points in a cluster to the centroid of that cluster.

* <strong>Number of Points</strong> is how many data points were assigned to each cluster, and the total overall number of data points in any cluster.

   If the number of data points assigned to clusters is less than the total number of data points available, it means that the data points could not be assigned to a cluster.

* <strong>Maximal Distance to Cluster Center</strong> is the max of the distances between each point and the centroid of that point's cluster.

* If this number is high, it can mean that the cluster is widely dispersed. This statistic together with the Average Distance to Cluster Center to determine the cluster's spread.

* <strong>Combined Evaluation</strong> score (at the bottom of the each section of results) lists the averaged scores for the clusters created in that particular model.


### Comparing multiple models

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/create-regression-model-azure-machine-learning-designer/evaluate-model">
   To compare the performance among multiple models</a>, in your pipeline, add an <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/evaluate-model">Evaluate Model</a> module and connect the Scored dataset output of the Score Model or Result dataset output of the Assign Data to Clusters to the left input port of Evaluate Model.

<hr />

<a name="DeployModel"></a>

## Create a Real-Time Inference Pipeline and Deploy an Endpoint

   Azure Machine Learning Designer allows models to be deployed as REST endpoint to be consumed by others or an application. This is great for developers that have minimal experience in Machine Learning and want to incorporate predictive models into their application. 

   The pipeline first has to be converted into an inference-pipeline and then deployed as an endpoint on either AKS (Azure Kubernetes Service) or an Azure Container Instance. 

1. Click "Create inference pipeline" to select "<strong>Real-time inference pipeline</strong>". 

   This adds "Web Service Input" and "Web Service Output" steps in the canvas.

   ![az-ml-deploy-797x435](https://user-images.githubusercontent.com/300046/120212775-a258b880-c1ef-11eb-9e31-6336d0d7bb84.png)

1. Click "Submit". Select existing experiment name. 
1. Click "Submit" on the dialog.

1. Click "Deploy" at the upper-right.

1. In the "Setup real time endpoint" dialog, with "Deploy new real-time endpoint" selected, type "<strong>tweet-analysis</strong>" into the Name field.

   PROTIP: If you share a workspace with a team or other teams, make the name unique among all who you work with.

1. Compute type drop-down: select "Azure Container Instance".
1. Click "Deploy" in the dialog.

1. Wait while "Deploy: Waiting real-time endpoint creation".

1. When "Deploy: Succeeded" appears, click "view real-time endpoint" to open another browser tab to show the web app.

1. Click the Consume tab to review the consumption info.



NOTE: Error messages can be cryptic, such as this:

   Deploy: Failed on Preparing to deploy. Details: Call MT PrepareCreateRealTimeEndpointRequest api failed. PipelineRunId is not a Guid-string. 


<hr />

<a name="AutoML"></a>

## AutoML

1. Select "Automated ML" (under Author).
1. "+ New Automated ML run".
1. Click circle to select dataset ("bike-rentals").
1. Next for "Configure run" dialog.
1. "Data Statistics" to see stats for each column. Close.

1. New experiment name: <strong>mslearn-bike-rental</strong>
1. Target column: rentals (interger). This is the label the model will be trained to predict.
1. Training compute target: the compute cluster you created previously
1. Select Virtual Machine.

1. Task type and settings
1. Task type: Regression (the model will predict a numeric value)
1. Finish

1. "Refresh" to see when run gets to "Complete".
1. Look at the "Best model summary"


References to classic version:
   * https://medium.com/data-science-reporter/a-simple-hands-on-tutorial-of-azure-machine-learning-studio-b6f05595dd73


azureml sdk package: https://azure.github.io/azureml-sdk-for-r/reference/index.html

1. "Endpoints" (under heading Assets).

   NOTE: There are Real-time endpoints and Pipeline endpoints.

1. "Consume" tab

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-and-where?tabs=azcli">DOCS</a>:

https://www.coursera.org/projects/automl-computer-vision-microsoft-custom-vision
Guided Project: AutoML for Computer Vision with Microsoft Custom Vision
by Mario Ferraro

https://www.coursera.org/programs/mckinsey-learning-program-uedvm/browse?currentTab=MY_COURSES&productId=7mGkLZGLEeup-AoS2h03mQ&productType=course&query=azure&showMiniModal=true
Azure: Create a Virtual Machine and Deploy a Web Server




<hr />

## Install Visual Studio Code extensions

1. Open Visual Studio Code on your laptop.
1. Press Shift+Command+X for Extensions search.
1. Search for "Azure Machine Learning"
1. Click "Install".

   Several extensions are installed (Azure account, AML - Remote).

1. Search for "Thunder client" for a REST API GUI like Postman.

1. To invoke extensions, VS Code will apply the extension based on the file type opened (such as .py for Python, etc.)

<hr />

## Etc.

   Pytorch
   <a target="_blank" href="
   https://github.com/Azure/azureml-examples">
   https://github.com/Azure/azureml-examples</a>

   Configurations:
   * Accuracy
   * AUC weighted
   * Norm macro recall
   * Average precision score weighted
   * Precision score weighted
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-create-attach-compute-studio#portal-create">ML Manage: Compute targets</a>:
   * Compute instances
   * Compute clusters
   * Inference clusters
   * Attached compute
   <br /><br />

<a name="ValidationTypes"></a>

Validation type:
   * Auto
   * k-fold cross validation
   * Monte Carlo cross validation
   * Train-validation split
   <br /><br />


   "Create a machine learning workspace to manage machine learning solutions through the entire data science lifecycle."

1. Click "+ Add" or the blue "Create machine learning workspace".
1. Subscription
1. Workspace name: see naming conventions
1. Region (Location)
1. Storage account
1. Key vault
1. Application insights
1. Container registry
1. Networking: connectivity CAUTION: public by default, or private: add endpoint.
1. Advanced: Data encryption
1. Advanced: Data impact (data privacy)
1. Tags

1. Wait for your workspace to be created (it can take a few minutes).

   ### Microsoft Azure Machine Learning studio

<a target="_blank" href="https://www.coursera.org/learn/predictive-modelling-azure-machine-learning-studio/home/welcome">
Coursera Project Network: Predictive Modelling with Azure Machine Learning Studio</a>

1. On the Overview page, launch Azure Machine Learning studio (or open a new browser tab and navigate to
   
   <a target="_blank" href="
   https://ml.azure.com/">
   https://ml.azure.com</a>

1. Sign into Azure Machine Learning studio using your Microsoft account. If prompted, select your Azure directory and subscription, and your Azure Machine Learning workspace.
1. In Azure Machine Learning studio, toggle the ☰ icon at the top left to view the various pages in the interface. You can use these pages to manage the resources in your workspace.
1. Adjust
   
   https://docs.microsoft.com/en-us/learn/modules/use-automated-machine-learning/create-compute

1. TODO: PROTIP: So you don't pay for idle compute, programmatically start and stop clusters.

   <a name="CreateComputeInstance"></a>

   ### Create Compute Instance

1. On the Compute Instances tab, add a new compute instance with the following settings. You'll use this as a workstation from which to test your model:
   * Virtual Machine type: CPU
   * Virtual Machine size: Standard_DS11_v2 (Choose Select from all options to search for and select this machine size)
   * Compute name: enter a unique name
   * Enable SSH access: Unselected

1. While the compute instance is being created, switch to the Compute Clusters tab, and add a new compute cluster with the following settings. You'll use this to train a machine learning model:
   * Virtual Machine priority: Dedicated
   * Virtual Machine type: CPU
   * Virtual Machine size: Standard_DS11_v2 (Choose Select from all options to search for and select this machine size)
   * Compute name: enter a unique name
   * Minimum number of nodes: 0
   * Maximum number of nodes: 2
   * Idle seconds before scale down: 120
   * Enable SSH access: Unselected
   <br /><br />

   PROTIP: At least <strong>5 images</strong> are needed to train a Custom Vision model.

   PROTIP: Tags can contain upper case, spaces, special characters.

   Create dataset from Open Datasets

   Datastore types:
   * Azure Blob storage
   * Azure file share
   * Azure Data Lake Storage Gen1
   * Azure Data Lake Storage Gen2
   * Azure SQL database
   * Azure PostgreSQL database
   * Azure MySQL database
   <br /><br />



MS LEARN HANDS-ON LAB: <a target="_blank" href="
https://docs.microsoft.com/en-us/learn/paths/create-no-code-predictive-models-azure-machine-learning/">Create no-code predictive models with Azure Machine Learning</a>

Supervised: Regression & Classification

<hr />

<a name="HDInsight"></a>

## HDInsight from 2017

<a target="_blank" href="https://gallery.azure.ai/Solution/Fraud-Detection-with-Azure-HDInsight-Spark-Clusters-2">
Fraud Detection with Azure HDInsight Spark Clusters</a> 

<a target="_blank" href="https://gallery.azure.ai/Solution/Loan-Credit-Risk-with-Azure-HDInsight-Spark-Clusters">
Loan Credit Risk with Azure HDInsight Spark Clusters</a>

<a target="_blank" href="https://gallery.azure.ai/Solution/Loan-ChargeOff-Prediction-with-Azure-HDInsight-Spark-Clusters">
Loan ChargeOff Prediction with Azure HDInsight Spark Clusters</a>

## Data Science VM

https://docs.microsoft.com/en-us/azure/machine-learning/data-science-virtual-machine/overview#whats-included-in-the-data-science-vm

## Resources

   * Intro to Azure ML by Priyanka S. Shah: <a target="_blank" href="https://www.youtube.com/watch?v=UBY9Hef6p7c&list=PLh6mjs1aVKZ3iZRnwpMjjj8jXBBqRCJJW">Part 1 of 4</a>
   <br /><br />   

## Notes to be inserted

Steps for data transformation:
   * Feature selection
   * Finding and removing data outliers
   * Impute missing values
   * Normalize numeric features
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/train-model">Model training</a>:
   * Label data
   * Algorithm selection
   * Data split 
   * Run model
   <br /><br />

https://docs.python.org/3/library/pickle.html
pickle (.pkl) file format for Python object serializatin

More Complexity makes for better Intelligibility
   * Linear regression
   * Decision Trees
   * K-nearest nighbors
   * Random Forests
   * Support Vector Machines
   * Deep Neural Networks
   <br /><br />

Global features vs. local feature importance

https://www.twitch.tv/enceladosaurus

https://www.twitch.tv/thelivecoders
An outgoing and enthusiastic group of friendly channels that write code, teach about technology, and promote the technical community. https://github.com/livecoders/home Wiki https://github.com/livecoders/Home/wiki


https://shap.readthedocs.io/en/latest/index.html

https://databricks.com/session_na20/the-importance-of-model-fairness-and-interpretability-in-ai-systems

https://docs.microsoft.com/en-us/azure/machine-learning/how-to-machine-learning-interpretability-aml


## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html %}
