---
layout: post
title: "Microsoft AI (and Machine Learning Cognitive Services)"
excerpt: "How to get AI-900, AI-100, AI-102 certified as we automate manual processes in the Azure PaaS cloud"
tags: [microsoft, azure, machine learning, AI]
date: "2021-05-06"
file: "microsoft-ai"
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

This article is a work-in-process toward being a guided tour to introduce use Microsoft's Artificial Intelligence offerings running on the Azure cloud, which Microsoft calls "Cognitive services", previously called "Cortana".

<a name="LearningSequence"></a>

## Learning Sequence: simplest first

   If I were training you, which I'm doing here, the learning sequence would be to start with the <strong>least complex</strong> of technologies used, then the more complex ones:

1. Call Bing Search  API to run an established endpoint (SaaS) you don't need to setup.

1. Create a <a href="#LogicApp">Logic App</a> to <a href="#ShutDownRGs">shut down Resource Groups of a Subscription</a> using PowerShell scripts.

1. <a href="#CognitiveServices">Create a Cognitive Service</a> to <a href="#TextTranslation">call the Translator Text API</a>.

1. <a href="#CreateWorkspace">Create a Workspace resource</a> to run ...

1. <a href="#CreateWorkspace">Create a Workspace resource</a> and<br />
   <a href="#CreateComputeInstance">Create Compute instance</a> to run<br />
   <a href="#AutoML">Automated ML</a> of regression of bike-rentals.
1. <a href="#CreateComputeInstance">Create Compute instance</a> to
   run a <a name="RunJupyter">iPython notebook</a>
1. Create ML Workspace in Portal, then ml.azure.com
1. Us cognitivevision.com to <a href="#CreateCustomVision">Create Custom Vision</a> for ...

1. QnA Maker Conversational AI
1. Train a Machine Learning model using <a name="RunJupyter">iPython notebook</a>
1. IoT - "Hey Google, ask Azure to shut down all my compute instances".


<a name="ShutDownRGs"></a>

## Automation necessary for PaaS

IMPORTANT PROTIP: As of this writing, Microsoft Azure does NOT have a full SaaS offering for every AI/ML service. You are required to <strong>create your own computer instances</strong>, and thus manage machine sizes (which is a hassle). Resources you create <strong>continue to cost money</strong> until you shut them down.

So after learning to set up the first compute service, we need to cover <strong>automation</strong> to <strong>shut them all down</strong> while you sleep.

So that you're not tediously recreating everything everyday, this tutorial focuses on automation scripts (CLI Bash and PowerShell scripts) to create compute instances, publish results, then shut itself down. Each report run overwrites files from the previous run so you're not constantly piling up storage costs. 

When you use my <a target="_blank" href="https://github.com/wilsonmar/azure-your-way/">Automation scripts at https://github.com/wilsonmar/azure-your-way/ to create resources the way you like</a>, using "Infrastructure as Code", so you can throw away any Subscription and begin anew quickly.

My scripts also makes use of a more secure way to store secrets than inserting them in code that can be checked back into GitHub.

You still need skill at clicking through the Portal.azure.com and ML.azure.com
so that you can verify resources that have created and to discuss with others.

References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=Rrx7NzPugaE">VIDEO</a>: <a target="_blank" href="https://dev.to/azure/keep-your-azure-subscription-clean-automatically-mmi">shut down automatically all your existing VMs</a> (using a PowerShell script called by a Logic App), by <a target="_blank" href="https://www.youtube.com/channel/UCAr20GBQayL-nFPWFnUHNAA"">Frank Boucher</a> at <a target="_blank" href="https://github.com/FBoucher/">github.com/FBoucher</a>
   * https://www.youtube.com/watch?v=lu7a5RDeJU0 by Build5Nines
   * https://www.codeisahighway.com/effective-ways-to-delete-resources-in-a-resource-group-on-azure/
   * <a target="_blank" href="https://azure.microsoft.com/en-us/blog/announcing-auto-shutdown-for-vms-using-azure-resource-manager/">Auto-shutdown by Resource Manager</a> <a target="_blank" href="https://azure.microsoft.com/en-us/updates/set-auto-shutdown-within-a-couple-of-clicks-for-vms-using-azure-resource-manager/" title="November 22, 2016">on a schedule</a> is only for VMs in DevOps
   * https://www.c-sharpcorner.com/article/deploy-a-google-action-on-azure/
   * <a target="_blank" href="https://automys.com/library/asset/scheduled-virtual-machine-shutdown-startup-microsoft-azure" title="2015"> start/stop by an Automation Acount Runbook</a> for specific tags attached to different Resource Groups: Assert: "AutoshutdownSchedule: Tuesday" run every hour.
   <br /><br />

<a name="LogicApp"></a>


<a name="FreeTime"></a>

## What Kind Free Pricing

The consolation to wasted charges is that Microsoft provides some <a href="#FreeTime">free machine time</a>.

1. An <strong>alphabetical</strong> list of Microsoft's AI/ML services at <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/">Cognitive Services pricing page at https://azure.microsoft.com/en-us/pricing/details/cognitive-services</a>:

   ![az-ai-svcs-pricing-309x410](https://user-images.githubusercontent.com/300046/117203280-126c4e00-adac-11eb-84ae-54994f47f3ea.png)

PRITIP: In commands, each offering has a "Kind" code to designate its processing. So that matters more than Microsoft's marketing designations when getting things done. So I've prepared for you a table to list the Kind codes by the marketing grouping.

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="bottom"><th> Category </th><th> Kind </th><th> Free </th><th> Limits </th></tr>

   <tr align="top"><td> Vision </td><td> "CognitiveServices"
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> "ComputerVision"
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> "CustomVision.Prediction"
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> "CustomVision.Training"
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> <a href="#Face">Face"</a>
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> FormRecognizer
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> ?InkRecognizer?
      </td><td> - </td></tr>

   <tr align="top"><td> Speech </td><td> "SpeechServices"
      </td><td> - </td></tr>
   <tr align="top"><td> Speech </td><td> "SpeakerRecognition?
      </td><td> - </td></tr>

   <tr align="top"><td> Language </td><td> <a href="#LUIS">"LUIS"</a>
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> "LUIS.Authoring"
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> <a href="#QnA_Maker">"QnAMaker"</a>
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> <a href="#QnA_Maker">"QnAMaker.v2"</a>
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> "TextAnalytics"
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> <a href="#TextTranslation">TextTranslation"</a>
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/translator/">2M chars/mo.</a> </td></tr>
   <tr align="top"><td> Language </td><td> "ImmersiveReader"
      </td><td> - </td></tr>

   <tr align="top"><td> Decision </td><td> <a href="#AnomalyDetector">AnomalyDetector"</a>
      </td><td> 2,000 trans/mo. </td><td> - </td></tr>
   <tr align="top"><td> Decision </td><td> "ContentModerator"
      </td><td> - </td></tr>
   <tr align="top"><td> Decision </td><td> "Personalizer"
      </td><td> - </td></tr>

   <tr align="top"><td> <a href="#Search">Search</a> </td><td> "Bing.CustomSearch"
      </td><td> - </td></tr>
   <tr align="top"><td> Search </td><td> "Bing.Search.v7"
      </td><td> - </td></tr>

   <tr align="top"><td> ? </td><td> "Internal.AllInOne"
      </td><td> - </td></tr>
   <tr align="top"><td> ? </td><td> "MetricsAdvisor"
      </td><td> - </td></tr>
   </table>

   Kinds with ? are known in websites but not listed by the command above.

Once you're setup to run CLI commands, you can List kinds of Cognitive Services:

   <ul><pre><strong>az cognitiveservices account list-kinds</strong></pre></ul>



<a name="CognitiveServices"></a>

## Azure Cognitive Services suite

Microsoft has published different lists for what services constitute its "Cognitive Services" brand name to achieve AI-enhanced solutions which mimic human intelligence.

Previously, <a target="_blank" href="https://www.youtube.com/watch?v=KxwjnuhNVIY&list=RDCMUCFtEEv80fQVKkD4h1PF-Xqw&index=33">Cortana"</a> was the brand-name for Microsoft's AI. Cortana is the name of the fictional artificially intelligent character in the Halo video game series. Cortana was going to be Microsoft's answer to Alexa, Siri, Hey Google, and other AI-powered personal assistants which respond to voice commands controlling skills that turn lights on and off, etc. 

In <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/what-are-cognitive-services">DOCS</a>:

* Vision - interpret the world visually through cameras, videos, images

* Speech - Text-to-Speech and Speech-to-Text to interpret written or spoken language, and respond in kind.

* Language - aka Natural language Processing (NLP) to <a href="#TranslateText">translate text</a>, etc.

* <a href="#Decision">Decision</a> - supervised and unsupervised machine learning

* Search - includes "Conversational AI" using an "agent" (Azure Bot Service) to participate in a (natural) conversation.


<a name="Search"></a>

### Search

"Search" (the "Bing" brand) has disappeared from Microsoft's list of service categories.
But it now is at <a target="_blank" href="https://docs.microsoft.com/en-us/azure/search/">
https://docs.microsoft.com/en-us/azure/search</a>


<a name="Decision"></a>

### Decision

   * <strong>classification</strong> (unsupervised machine learning) fits features into model and predict classification of the label
   * <strong>regression (supervised</strong> machine learning) uses historical data to train the model to predict <strong>numerical</strong> values.
   * Time Series Anomaly Detection
   <br /><br />


<hr />

<a name="Competitors"></a>

## What can AI do?

1. Visit

   <a target="_blank" href="
   https://gallery.azure.ai/">
   https://gallery.azure.ai</a>

1. Microsoft has DEMOS at: 

   <a target="_blank" href="https://aidemos.microsoft.com/">https://aidemos.microsoft.com</a>

Case studies of how people are already making use of AI/ML to save time and money:

   * Predictive Maintenance data science <a target="_blank" href="https://info.microsoft.com/CO-AAIoT-WBNR-FY16-07Jul-05-Predictive-Maintenance-Registration.html">webinar</a>
   * Defect Detection with Image Analysis
   * Custom Entity Extraction with Text Analytics
   * modsy.com 3D view
   <br /><br />


<hr />

<a name="Competitors"></a>

## Competitive futures

Microsoft competes for talent with Google, Amazon, IBM, China's Tencent.

BTW, by contrast, Bernard Marr identified <a target="_blank" href="https://www.bernardmarr.com/default.asp?contentID=2191">four types of AI</a> evolving: 

   * "reactive" machines (such as Spam filters and the Netflix recommendation engine) are not able to learn or conceive of the past or future, so it responds to identical situations in the exact same way every time.

   * "limited memory" AI absorbs learning data and improve over time based on its experience, using historical data to make predictions. It's similar to the way the human brain’s neurons connect. Deep-learning algorithms used today is the AI that is widely used and being perfected today.

   * "theory of mind" is when AI acquires decision-making capabilities equal to humans, and have the capability to recognize and remember emotions, and adjust behavior based on those emotions.

   * "self-aware", also called artificial superintelligence (ASI), is "sentient" understanding of of its own needs and desires.


<hr />

## Principled AI

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/get-started-ai-fundamentals/7-understand-responsible-ai">LEARN</a>:

Microsoft has a <a target="_blank" href="https://www.microsoft.com/research/group/fate/">FATE (Fairness, Accountability, Transparency, and Ethics)</a> research group:
<img width="1126" height="610" alt="az-ai-principled-1126x610" src="https://user-images.githubusercontent.com/300046/117167864-e1c4ee00-ad84-11eb-88b1-4f685155a64f.png">

   * Fairness: AI systems should treat all people fairly.
   * Accountability: AI systems should have algorithmic accountability.
   * Transparency: AI systems should be understandable.
   * Ethics
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/azure-artificial-intelligence/5-ai-impact-and-ethics">
Microsoft's ethical principles</a> guiding the development and use of artificial intelligence with people:

   * Reliability & Safety: AI systems should perform reliably and safely.
   * Inclusiveness: AI systems should empower everyone and engage people.
   * Privacy & Security: AI systems should be secure and respect privacy.
   <br /><br />

1. DEMO: Hands on with AI/Guidelines for Human-AI Interaction: Click each card to see examples of each guideline

   <a target="_blank" href="
   https://aka.ms/hci-demo">
   https://aka.ms/hci-demo</a> which redirects you to<br />
   <a target="_blank" href="
   https://aidemos.microsoft.com/guidelines-for-human-ai-interaction/demo">
   https://aidemos.microsoft.com/guidelines-for-human-ai-interaction/demo</a>

   * Initially - make clear what the system can do & how well the system can do what it can do.
   * During interaction - Time services based on context; show contexually revelvant info; Match revelvant social norms; Migrate social biases.
   * When Wrong - support efficient invocation, dismissal, correction; Scope services when in doubt.
   * Over Time - remember recent interactions; learn from user behavior; update and adapt cautiously; encourage granular feedback
   <br /><br />

   PROTIP: Some fonts are real small. Zoom in to read it.

Resources:
   * <a target="_blank" href="https://www.microsoft.com/ai/responsible-ai-resources">https://www.microsoft.com/ai/responsible-ai-resources</a>


<hr />

## Azure AI certifications

Among <a target="_blank" href="https://wilsonmar.github.io/azure-certifications">Microsoft's Azure professional certifications</a>:

   * <a href="#AI-900">AI-900</a> is the entry-level exam ($99).

   * <a href="#AI-102">AI-102</a> (with free re-cert after 1-year) replaces
   * <a href="#AI-100">AI-100</a> (with free re-cert after 2-years) on June 30, 2021.

   Both AI-100 and AI-102 are $165.
   The shift is from infrastructure (KeyVault, AKS, Stream Analytics) to programming C#, Python, or JavaScript.

Previous exam 774 is now been retired.


<a name="AI-900"></a>

### AI-900 

PROTIP: Here's a must-see website: <a target="_blank" href="http://aka.ms/AIFunPath">http://aka.ms/AIFunPath</a> which expands to <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/AI-900">
Exam definitions are at Microsoft's LEARN</a> includes a free text-based tutorial called
<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/paths/get-started-with-artificial-intelligence-on-azure/">
"Learning Paths"</a> to learn skills:

   * Describe AI workloads and considerations (15-20%)
   * Describe fundamental <a href="#MachineLearning">principles of machine learning</a> on Azure (30-35%)
   * Describe features of <a href="#ComputerVision">computer vision</a> workloads on Azure (15-20%)
   * Describe features of <a href="#NLP">Natural Language Processing (NLP)</a> workloads on Azure (15-20%)
   * Describe features of <a href="#Coversational">conversational AI</a> workloads on Azure (15-20%)
   <br /><br />

The MS LEARN site refers to files in <a target="_blank" href="
https://github.com/MicrosoftLearning/mslearn-ai900">
https://github.com/MicrosoftLearning/mslearn-ai900</a>

* <a target="_blank" href="https://ravikirans.com/ai-900-azure-exam-study-guide/">
Ravi Kirans' Study Guide</a> contains links to MS Docs.

Tim Warner has created several video courses on AI-900 and AI-100:
   * <a target="_blank" href="https://portal.cloudskills.io/products/microsoft-azure-ai-fundamentals">CloudSkills.io Microsoft Azure AI Fundamentals</a> course references<br /><a target="_blank" href="https://github.com/timothywarner/ai100cs">https://github.com/timothywarner/ai100cs</a>

   * On OReilly.com, his "Crash Course" <a target="_blank" href="https://github.com/timothywarner/az900/blob/master/AZ-900-objectives.xlsx">Excel spreadsheet</a> of exam objectives.

   * OReilly.com references<br /><a target="_blank" href="https://github.com/timothywarner/ai100">https://github.com/timothywarner/ai100</a>


* <a target="_blank" href="https://cloudacademy.com/learning-paths/ai-900-exam-preparation-microsoft-azure-ai-fundamentals-1968/">CloudAcademy's 4h AI-900 video course</a> includes lab time (1-2 hours at a time).

* <a target="_blank" href="https://www.youtube.com/watch?v=E9aarWMLJw0">AI-900 Study Guide - YouTube</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=fQhgRR_Vtus&list=PLHh_n2lgzcrvecPJ-zMukLlDrq0GMSMmB&index=3">
AI-900 Sample Practice Exam Questions</a>

* https://www.udemy.com/course/microsoft-ai-900/

* https://www.itexams.com/info/AI-900

* Emilio Melo on <a target="_blank" href="https://www.linkedin.com/learning/exam-tips-microsoft-azure-ai-fundamentals-ai-900/the-world-is-changing-because-of-ai">Linkedin Learning</a>

Practice tests:
* https://www.whizlabs.com/learn/course/microsoft-azure-ai-900/
* https://www.examtopics.com/exams/microsoft/ai-900/


<a name="AI-102"></a>

### AI-102

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/ai-102">AI-102 exam, as defined at Microsoft's LEARN</a> has free written tutorials on each of the exam's domains:

   * Plan and manage an Azure Cognitive Services solution (15-20%)
   * Implement <a href="#ComputerVision">Computer Vision solutions</a> (20-25%)
   * Implement <a href="#NLP">natural language processing solutions</a> (20-25%)
   * Implement knowledge mining solutions (15-20%)
   * Implement <a href="#Conversational">Conversational AI solutions</a> (15-20%)
   <br /><br />

PROTIP: Unlike the AI-100, AI-102 requires skill in programming C# or Python.

<a target="_blank" href="https://ravikirans.com/ai-102-azure-exam-study-guide/">
Ravi's links</a>

Microsoft offers a <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/courses/ai-102t00">4-day course (with cloud time)</a>
covering C# or Python as the programming language.

   * <a target="_blank" href="https://github.com/MicrosoftLearning/AI-102-AIEngineer">Labs for the class</a> (by <a target="_blank" href="https://www.linkedin.com/in/graemesplace/">Graeme Malcolm</a>) can be followed outside of class enrollment.

<a target="_blank" href="https://cloudacademy.com/quiz/38235/">Preview 45 min. Exam: Designing and Implementing an Azure AI Solution (AI-102)</a>

<a name="AI-100"></a>

### AI-100 Azure AI Engineer Associate

You have until June 30, 2021 to take this because Microsft is retiring the AI-100 exam in favor of <a href="#AI-102">AI-102 exam</a> (avilable in $99 beta since Feb 2021). <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/ai-100">AI-100 exam, as defined at Microsoft's LEARN</a> has free written tutorials on each of the exam's domains:

   * Analyze solution requirements (25-30%)
   * Design AI solutions (40-45%)
   * Implement and monitor AI solutions (25-30%)
   <br /><br />

https://github.com/MicrosoftLearning/AI-100-Design-Implement-Azure-AISol

https://github.com/MicrosoftLearning/Principles-of-Machine-Learning-Python

* Plan and manage an Azure <strong>Cognitive Services</strong> solution (15-20%)
   * MS: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/evaluate-text-with-language-services/">Evaluate text with Azure Cognitive Language Services</a>

* Implement Computer <strong>Vision</strong> solutions (20-25%)
   * MS: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/process-classify-images-with-azure-cognitive-vision-services/">Process and classify images with the Azure cognitive vision services</a>

* Implement <strong>natural language processing</strong> solutions (20-25%)
   * MS: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/process-translate-speech-azure-cognitive-speech-services/">Process and Translate Speech with Azure Cognitive Speech Services</a>

   * MS: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/process-natural-language-azure-cognitive-language-services/">Process natural language with Azure Cognitive Language Services</a>

* Implement <strong>knowledge mining</strong> solutions (15-20%)
   * MS: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/implement-knowledge-mining-azure-cognitive-search/">Implement knowledge mining with Azure Cognitive Search</a>

* Implement conversational AI solutions (15-20%) - chatbots
   * MS: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/create-conversational-ai-solutions/">Create conversational AI solutions</a>

<a target="_blank" href="https://linkedin.com/in/rezasalehi2008/">Raza Salehi</a> (@zaalion) created on <a target="_blank" href="https://github.com/zaalion/oreilly-ai-100">OReilly.com an AI-100 exam prep "crash course"</a> which references his <a target="_blank" href="<a target="_blank" href="https://github.com/zaalion/oreilly-ai-100">https://github.com/zaalion/oreilly-ai-100</a> and <a target="_blank" href="
https://github.com/zaalion/uy-cognitve-services-crash-course">https://github.com/zaalion/uy-cognitve-services-crash-course</a>

Guy Hummel's <a target="_blank" href="https://cloudacademy.com/learning-paths/ai-100-exam-preparation-designing-and-implementing-an-azure-ai-solution-1-1334/">CloudAcademy.com</a> 7hr video course.

Raza Salehi created on Pluralsight.com <a target="_blank" href="https://app.pluralsight.com/paths/certificate/microsoft-azure-ai-engineer-ai-100">a series for Microsoft Azure AI Engineer (AI-100)</a> :

   * Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-personalizer">Personalizer</a>
   * Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-ink-recognizer">Recognizer</a>
   * Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-immersive-reader">Immersive Reader</a>

<a name="AnomalyDetector"></a>

#### Anomaly Detector

   * Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-anomaly-detector">Anomaly Detector</a>
   * Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/building-customized-translation-systems-azure-cognitive-services-translator">Translator</a>

Practice tests:
* https://www.whizlabs.com/learn/course/microsoft-azure-ai-100/


<hr />

<a name="Cortana"></a>

### Cortana now Cognitive Services 

But <a target="_blank" href="https://www.theverge.com/2019/7/25/20727129/microsoft-cortana-features-strategy-report">in 2019</a> Cortana decoupled from Windows 10 search.

<a target="_blank" href="https://www.youtube.com/watch?v=eJOv-TfhhzQ">VIDEO</a>: <a target="_blank" href="https://services.azureml.net/">Azure Machine Learning Studio (classic) Web Services</a>

The Classic version reflected "All Microsoft all the time" with proprietary "pickle" (pkl) model files.


<a name="workflows"></a>

## Hybrid workflows

PROTIP: Although most Microsoft's samples and tutorials usually focus on one service at a time, actual production work between input and output enjoyed by users usually involves a <strong>pipeline</strong> of several Azure services. For example: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/example-scenario/ai/news-feed-ingestion-and-near-real-time-analysis">ingesting (stream processing) a newsfeed</a>:

![az-ml-newsfeed-546x623](https://user-images.githubusercontent.com/300046/116988980-6254f300-ac8e-11eb-9901-c2c6f3d8a018.png)

Steps to <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/tutorial-designer-automobile-price-deploy">deploy a machine learning model with the Designer</a>:
   1. Create inference clusters
   2. Create and test inference pipeline
   3. Deploy inference pipeline
   4. Test the service (used by the user)
   <br /><br />


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

1. <img align="right" width="368" alt="az-mlworkspace-736x946" src="https://user-images.githubusercontent.com/300046/116822701-8a810c80-ab3d-11eb-96a9-a80d7df88f5c.png"> Create Machine Learning Workspace: <a target="_blank" href="https://github.com/wilsonmar/azure-your-way/blob/main/README.md">Follow my instructions</a> to <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-manage-workspace-cli">create a ML Workspace</a> and run my <a target="_blank" href="https://github.com/wilsonmar/azure-your-way/blob/main/az-mlworkspace-cli.sh"><strong>./az-mlworkspace-cli.sh</strong></a>. 
   
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


### Create Cognitive Services

My script does the same as these manual steps:

1. In Portal.azure.com
1. G+\ Cognitive Services
1. Click the Name you created.
1. Click "Keys and Endpoint" in the left menu.
1. Click the blue icon to the right of KEY 1 heading to copy it to your invisible Clipboard.

1. Endpoint: https://tot.cognitiveservices.azure.com/


   TODO: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-create-manage-compute-instance?tabs=azure-cli">DOCS</a>: Automate above steps to create compute and server startpup script.

   PROTIP: These instructions are not in Microsoft LEARN's tutorial.

   "Your document is currently not connected to a compute. Switch to a running compute or create a new compute to run a cell."

1. Click the Run triangle for "Your document is currently not connected to a compute."
1. "Create compute"
   * Virtual machine type: CPU or GPU
   * Virtual machine size: Select from all options (64 of them) QUESTION: What is the basis for "recommended"?
   * The cheapest is <strong>"Standard_F2s_v2"</strong> with "2 cores, 4GB RAM, 16GB storage" for Compute optimized at "$0.11/hr". See <a target="_blank" href="https://azure.microsoft.com/en-us/services/virtual-machines/?WT.mc_id=cloud5mins-youtube-frbouche">Microsoft's description of virtual machine types here</a>.
   * Next
   * Compute name: PROTIP: Use 3-characters only, such as "wow" or "eat".
   * Enable SSH access: leave unchecked
   * Create
   * Wait (5 minutes) for box to go from "Creating" to "Running".
   <br /><br />


<hr />

<a name="CognitiveServicesCLI"></a>

### Kinds of Cognitive Services CLI

You would save money if you don't leave servers running, racking up charges.

You can confidently delete Resource Groups and all resources attached if you have 
automation in CLI scripts that enable you to easily create them later.

Instead of the manual steps defined in <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/01%20-%20Image%20Analysis%20with%20Computer%20Vision.ipynb">this LAB</a>, run my Bash script in CLI, as defined by <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account-cli?tabs=windows">this DOC</a>:

1. G+\ <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.CognitiveServices%2Faccounts">Cognitive Services</a>.

1. Click the ＋Create a resource button, search for Cognitive Services, and create a Cognitive Services resource with the following settings:
1. Subscription: Your Azure subscription.
1. Resource group: Select or create a resource group with a unique name.
1. Region: Choose any available region:
1. Name: Enter a unique name.
1. Pricing tier: S0
1. I confirm I have read and understood the notices: Selected.

TODO: Instead of putting plain text of cog_key in code, reference Azure Vault. Have the code in GitHub.

Azure has a <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/cognitiveservices/account?view=azure-cli-latest">cognitiveservices CLI subcommand</a>.

https://docs.audd.io/?ref=public-apis

Tim Warner's <a target="_blank" href="https://github.com/timothywarner/ai100">https://github.com/timothywarner/ai100</a> includes <a target="_blank" href="https://github.com/timothywarner/ai100/tree/master/powershell-cli">Powershell scripts</a>:

* iot-edge-windows.ps1
* keyvault-soft-delete-purge.ps1
* keyvault-storage-account.ps1
* python-keyvault.py
* ssh-to-aks.md - SSH into AKS cluster nodes
<br /><br />

Others:
* autoprice.py


<a name="CLI"></a>

## CLI


<a name="MachineLearning"></a>

## Machine Learning (decision service)

Example of ML classification:
   * https://www.literature-map.com suggests other authors based on an author input. The input author is displayed in the middle of a map.
   * Product identification - performing visual searches for specific products in online searches or even, in-store using a mobile device.
   * Disaster investigation - evaluating key infrastructure for major disaster preparation efforts. For example, aerial surveillance images may show bridges and classify them as such. Anything classified as a bridge could then be marked for emergency preparation and investigation.
   * Medical diagnosis - evaluating images from X-ray or MRI devices could quickly classify specific issues found as cancerous tumors, or many other medical conditions related to medical imaging diagnosis.
   <br /><br />

Configure run to create different models:
   * Classification (predicting <strong>categories or classes</strong>)
   * Regression (predicting <strong>numeric</strong> values)
   * Time series forecasting (regression with a time-series element, enabling you to predict numeric values at a future point in time)

   * Clustering
   * Anomaly detection ("weird?")
   <br /><br />

Classification of Profanity returns JSON with several categories:
   * Category 1: sexually explicit or adult in certain situations.
   * Category 2: sexually suggestive or mature in certain situations.
   * Category 3: considered offensive in certain situations.
   <br /><br />

![az-ai-ml-1173x538](https://user-images.githubusercontent.com/300046/116586918-2fe67700-a8d7-11eb-87e7-1a4087faaa4f.png)

A <strong>model</strong> is the "brains" (logic) to make predictions about labels being forecasted.

Models are created from training data containing feature values.

The process is called <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml#feature-engineering">featurization"</a> or feature engineering.

## Metrics

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/create-regression-model-azure-machine-learning-designer/evaluate-model">
To compare the performance among multiple models</a>, in your pipeline, add an <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/evaluate-model">Evaluate Model</a> module and connect the Scored dataset output of the Score Model or Result dataset output of the Assign Data to Clusters to the left input port of Evaluate Model.


### Metrics of classification model performance

Test data is used to determine how well predictions created from a model, presented in a 2x2 <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-understand-automated-ml#confusion-matrix">Confusion Matrix</a> which compares the Predicted label to Actual (True) Label (yes or no) to identify true/false positives/negatives. 
REMEMBER: Draw this on the white board from memory:

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th> n=165 </th><th> Actual: yes 105 </th><th> Actual: no 60 </th></tr>
   <tr><th> Predicted: yes 110 </th><td> 100 True Positives aka "Sensitivity rate" or "Recall rate"</td><td> 10 False Positives (Type I error) </td></tr>
   <tr><th> Predicted: no 55 </th><td> 5 False Negatives (Type II error)</td><td> 50 True Negatives aka "Specificity rate"</td></tr>
   </table>

<strong>Accuracy</strong> is (TP + FN) / n = ( 100 + 5 ) / 165.

<strong>Average Precision (AP)</strong> is the ratio of correct predictions (True Positives + True Negatives) to the total number of predictions. It answers "how often is the classifier correct?". (100 + 50) / 165 

Misclassification Rate (aka "Error Rate"): Overall, how often is it wrong?  (10+5)/165 = 0.09

   * <strong>Precision rate</strong> is the percentage of results which were <strong>correctly classified</strong>. When it predicts yes, how often is it correct? 100 / 110 = 0.91. This is used in studying rare diseases when many more people would not have the disease than with the disease.

   * <strong>Recall rate</strong> is the percentage of predictions the model <strong>correctly identified</strong>: (100 + 50)/(165)

   * <strong>Prevalence</strong>: How often does the yes condition actually occur in our sample? 

<a target="_blank" href="https://www.youtube.com/watch?v=FnJ3L-63Cf8&t=20s">VIDEO</a>: 
Columns represent the known truth: The higher the number, the better:

   * <strong>Sensitivity rate</strong> is the percent of yes's correctly identified as <strong>Positive</strong> = TP / (TP + FN) = 100 / (100 + 5) = 0.83. 

   * <strong>Specificity rate</strong> is the percent of no's correctly identified as <strong>Negative</strong> = TN / (TN + FP) = 50 / (50 + 10) = 0.83. 

<a target="_blank" href="https://www.wikiwand.com/en/F-score">F1 Score</a> is an overall metric that takes into account both precision and recall): 
weighted average of the true positive rate (recall) and precision.

Different values in the Confusion Matrix would be created for each level of threshold.
<a target="_blank" href="https://www.youtube.com/watch?v=4jRBRDbJemM&list=RDCMUCtYLUTtgS3k1Fg4y5tAhLbw&start_radio=1">VIDEO</a>: The <a target="_blank" href="https://www.dataschool.io/roc-curves-and-auc-explained/">Receiver Operating Characteristic (ROC) curve</a> plots the relationship between True Positive Rate (TPR) aka "Sensitivity" on the Y axis and False Positive Rate (FPR) or (1 - Specificity) on the X axis as the decision threshold changes. 

<a target="_blank" href="https://www.youtube.com/watch?v=OAl6eAyP-yo">VIDEO</a>: 
<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/create-classification-model-azure-machine-learning-designer/evaluate-model">AUC</a> (Area Under the Curve) measures the area underneath the ROC curve. It is used to compare methods of categorization (such as between Logistic Regression vs Random Forest). A model with AUC of 0.5 performs no better than random chance. The larger the AUC to 1.0 the better the model is at separating classes. Thus, the ideal AUC is 1.0. 

### Metrics of regression model performance

* <strong>Mean Absolute Error (MAE)</strong>: The average difference between predicted vs. true values. This value is based on the same units as the label, such as dollars. The lower this value is, the better the model is predicting.

* <strong>Root Mean Squared Error (RMSE)</strong>: The square root of the mean squared difference between predicted and true values. The result is a metric based on the same unit as the label (dollars). When compared to the MAE (above), a larger difference indicates greater variance in the individual errors (for example, with some errors being very small, while others are large).

* <strong>Relative Squared Error (RSE)</strong>: A relative metric between 0 and 1 based on the square of the differences between predicted and true values. The closer to 0 this metric is, the better the model is performing. Because this metric is relative, it can be used to compare models where the labels are in different units.

* <strong>Relative Absolute Error (RAE)</strong>: A relative metric between 0 and 1 based on the absolute differences between predicted and true values. The closer to 0 this metric is, the better the model is performing. Like RSE, this metric can be used to compare models where the labels are in different units.

* <strong>Coefficient of Determination (R2)</strong>: (aka "R-Squared) summarizes the variance between predicted and true being explained by the model. The closer to 1 this value is, the better the model is performing.

### Metrics for clustering models

* <strong>Average Distance to Other Center</strong> is how close, on average, each point in the cluster is to the centroids of all other clusters.

* <strong>Average Distance to Cluster Center</strong> is the closeness of all points in a cluster to the centroid of that cluster.

* <strong>Number of Points</strong> is how many data points were assigned to each cluster, and the total overall number of data points in any cluster.

   If the number of data points assigned to clusters is less than the total number of data points available, it means that the data points could not be assigned to a cluster.

* <strong>Maximal Distance to Cluster Center</strong> is the max of the distances between each point and the centroid of that point's cluster.

* If this number is high, it can mean that the cluster is widely dispersed. This statistic together with the Average Distance to Cluster Center to determine the cluster's spread.

* <strong>Combined Evaluation</strong> score (at the bottom of the each section of results) lists the averaged scores for the clusters created in that particular model.


<br /><br />

<hr />


Different <a href="#ValidationTypes">validation types</a> can be used.

https://adatis.co.uk/evaluating-models-in-azure-machine-learning-part-1-classification/

<a target="_blank" href="https://www.bluegranite.com/blog/train-and-deploy-machine-learning-models-using-the-azureml-service">Process</a> (using a Python scipt):
![azureml-1118x398](https://user-images.githubusercontent.com/300046/116598715-6676be80-a8e4-11eb-878a-70f8dface9d9.png)

### Install Visual Studio Code extensions

1. Open Visual Studio Code on your laptop.
1. Press Shift+Command+X for Extensions search.
1. Search for "Azure Machine Learning"
1. Click "Install".

   Several extensions are installed (Azure account, AML - Remote).

1. Search for "Thunder client" for a REST API GUI like Postman.

1. To invoke extensions, VS Code will apply the extension based on the file type opened (such as .py for Python, etc.)


<a name="CreateWorkspace"></a>

### Create Workspace resource

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/use-automated-machine-learning/deploy-model">LAB</a> in Azure Machine Learning studio (https://ml.azure.com) Deploy predictive service workspace "predict-rentals" Compute type: ACI

Following https://docs.microsoft.com/en-us/learn/modules/use-automated-machine-learning/use-auto-ml

   NOTE: You don't need to go to G+\ <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.MachineLearningServices%2Fworkspaces">Machine Learning</a>

1. On the Overview page, launch Azure Machine Learning studio (or open a new browser tab and navigate to
   
   <a target="_blank" href="
   https://ml.azure.com/">
   https://ml.azure.com</a>

1. Select your Directory and Subscription.
1. Click "Create a new workspace". A new tab appears in portal.azure.com.
1. Resource Group: PROTIP: just 3 letters are necessary, so use letters (such as "wow") which does not have ascenders so that numbers to be appended to it more visible.
1. Workspace Name: PROTIP: just 3 letters are necessary.
1. "Review + create".

   CAUTION: The network is public by default. Choosing private would entail more configuration.

1. "Create".

   CAUTION: Charges now begin to accumulate. Delete your Resource Group ASAP. It's cheaper if you recreate it if you need another workspace.

1. When created, click "Launch Studio" blue button.

   This is the same as clicking browser tab "Microsoft Azure Machine Learning" (https://ml.azure.com) and refresh the page until your workspace appears.

   ![az-menu-630x197](https://user-images.githubusercontent.com/300046/117180681-abda3680-ad91-11eb-9850-29748446973e.png)

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

1. Compute name: PROTIP: Use 3-characters only, such as "wow" or "eat".
1. Enable SSH access: leave unchecked

1. Next and wait (5 minutes) for State to go from "Creating" to "Running".

   CAUTION: Charges now begin to accumulate. Delete your Resource Group ASAP. It's cheaper if you recreate it if you need another compute instance.


   ### Download prepared data file

1. Select the Datasets page (under Assets)
1. " + Create", "From web files". Web URL: https://aka.ms/bike-rentals

   Alternately, you can upload a file from your local machine.

1. Dataset type: Tabular
1. Next

   ### Run an Automated Machine Learning Experiment

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




<a name="AutoML"></a>

1. "Endpoints" (under heading Assets).

   NOTE: There are Real-time endpoints and Pipeline endpoints.

1. "Consume" tab

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-and-where?tabs=azcli">DOCS</a>:

zzz

1. Download data file:

   https://aka.ms/bike-rentals

#### Etc.

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

1. On the Overview page, launch Azure Machine Learning studio (or open a new browser tab and navigate to
   
   <a target="_blank" href="
   https://ml.azure.com/">
   https://ml.azure.com</a>

1. Sign into Azure Machine Learning studio using your Microsoft account. If prompted, select your Azure directory and subscription, and your Azure Machine Learning workspace.
1. In Azure Machine Learning studio, toggle the ☰ icon at the top left to view the various pages in the interface. You can use these pages to manage the resources in your workspace.
1. Adjust
   
   https://docs.microsoft.com/en-us/learn/modules/use-automated-machine-learning/create-compute

   ### Automate compute clusters

1. PROTIP: So you don't pay for idle compute, programmatically start and stop clusters.

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


<a name="AnomalyDetection"></a>

### Anomaly Detection

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/anomaly-detector/">
Anomaly Detector</a> identifies potential problems early on.

https://docs.microsoft.com/en-us/learn/modules/get-started-ai-fundamentals/3-understand-anomaly-detection

   1. Sensors in the car collect telemetry, such as engine revolutions, brake temperature, and so on.
   2. An anomaly detection model is trained to understand expected fluctuations in the telemetry measurements over time.
   3. If a measurement occurs outside of the normal expected range, the model reports an anomaly that can be used to alert the race engineer to call the driver in for a pit stop to fix the issue before it forces retirement from the race.
   <br /><br />


### Content moderator

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/content-moderator/">Content Moderator</a> services detect potentially offensive or unwanted content.

### Metrics Advisor

<a target="_blank" href="https://aka.ms/GualalaACOM">Metrics Advisor</a> monitors metrics and diagnoses issues.

### Personalizer

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/personalizer/">Personalizer</a> creates rich, personalized experiences for every user.


<hr />

<a name="NLP"></a>

## NLP (Natural Language Processing) services

<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/modules/get-started-ai-fundamentals/5-understand-natural-language-process">Intro</a>:
<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/paths/explore-natural-language-processing/">
Tutorial: https://docs.microsoft.com/en-us/learn/paths/explore-natural-language-processing</a>

NLP enables the creation of software that can:
   * Analyze and interpret text in documents, email messages, and other sources.
   * Interpret spoken language, and synthesize speech responses.
   * Automatically translate spoken or written phrases between languages.
   * Interpret commands and determine appropriate actions.
   * <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/speaker-recognition/">Speaker Recognition</a> identifies and verifies the people speaking based on audio.
   <br /><br />

Within Microoft, NLP consists of these Azure services (described below):
   * <a href="#LUIS">LUIS</a> (Language Understanding Intelligent Service)
   * <a href="#Text_Analytics">Text Analytics</a>
   * <a href="#Speech">Speech</a>
   * <a href="#TextTranslation">Translator Text</a>
   <br /><br />


<a name="LUIS"></a>

### Language Understanding Intelligent Service (LUIS) 

   <a target="_blank" href="https://aka.ms/AI900/Lab4">https://aka.ms/AI900/Lab4</a> which redirects to<br />
   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/create-language-model-with-language-understanding/2-get-started">Create a language model with Language Understanding</a> which trains a (LUIS) language model that can understand spoken or text-based commands. He's Alexa's boyfriend, ha ha.

1. DEMO: <a target="_blank" href="https://www.luis.ai/">https://www.luis.ai</a>

   PROTIP: Separate resources are created for authoring processing from prediction runs so that utilization for the two can be tracked separately.

1. DEMO: voice control lighting in a virtual home. 

   <a target="_blank" href="
   https://aidemos.microsoft.com/luis/demo">
   https://aidemos.microsoft.com/luis/demo</a>

   Select suggested phrases to see how the system responds.
   Type instructions, use the microphone button to speak commands.

1. Process Natural Lanaguage using Azure Cognitive Language Services 

   https://github.com/MicrosoftLearning/AI-102-LUIS contains image files for reference by
   https://github.com/MicrosoftLearning/AI-102-Code-Repos
   https://github.com/MicrosoftLearning/AI-102-Process-Speech

   PROTIP: LUIS does not perform text summarization. That's done by another service in the pipeline.

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/create-language-model-with-language-understanding/1-introduction">Terminology</a>:
   * <strong>Utterance</strong> is the user's input that a model needs to interpret, such as "turn the lights on".
   * <strong>Entity</strong> is the word (or phrase) that is the focus of the utterance, such as "light" in our example.
   * <strong>Intent</strong> is the action or task that the user wants to execute. It reflects in utterance as a goal or purpose. For example, "TurnOn".

References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=U_9HqRdPuUA">VIDEO</a>: <a target="_blank" href="https://store.steampowered.com/app/598400/Starship_Commander_Arcade/">Starship commander</a> enabled in-game voice commands using Azure.

<a name="Text_Analytics"></a>

## Text Analytics

DEMO: https://aidemos.microsoft.com/text-analytics

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-text-with-text-analytics-service/3-exercise">LAB</a> referencing "07 - Text Analytics.ipynb" ???

   <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/">Text to Speech</a> services:
   * Language Detection (is it English, German, etc.)
   * Sentiment analysis (how positive or negative a document is)
   * Key phrase extraction
   * Translator Text 
   <br /><br />

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-text-with-text-analytics-service/1-introduction">Techniques</a>
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/">DOCS</a>:
   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-0/operations/Languages/console">Text Analytics API</a>

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-text-with-text-analytics-service/3-exercise">MS LEARN HANDS-ON LAB</a> references
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/07%20-%20Text%20Analytics.ipynb

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-call-api?tabs=synchronous">Some Text Analytics API services are synchronous and asynchronous</a>


   #### Sentiment Analysis

   The output is a number from 0 to 1, with 1 being the most positive language and zero being the most negative opinion expressed.


   #### Key phrase extraction

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-text-with-text-analytics-service/2-get-started-azure">Named Entity Recognition (NER)</a> identifies entities in the text and group them into different entity categories, such as organization name, location, event, etc.


   <a name="Speech"></a>

   ### Speech Translation (Speech to text)
   
   Get the monthly subscription mobile app on 
   <a target="_blank" href="https://apps.apple.com/app/microsoft-translator/id1018949559">
   iPhone</a>, Android, or Amazon. It has a Phrasebook of common phrases.

   DEMO: <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/speech-translation/">Speech Translation</a> recognizes and synthesizes speech, and translates spoken languages. REMEMBER: The sequence of services involves <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/recognize-synthesize-speech/2-get-started-azure">two APIs</a>:

   Speech-to-Text API -> Speech Correction -> Machine Translation -> Text-to-Speech API

   "Speech Recognition" and Text Analysis are not involved in this use case.

   Telephone voice menus use "Speech Synthesis", defined by the Speech Synthesis Markup Language (SSML).

   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/08%20-%20Speech.ipynb

   https://github.com/timothywarner/ai100/tree/master/Speech-to-Text
   
   https://github.com/MicrosoftLearning/AI-SpeechToText

   The speech-to-text service includes multiple pre-defined voices with support for <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#speech-to-text">multiple languages and regional pronunciations</a>, with language detection. In addition to standard voices, <strong>neural voices</strong> leverage neural networks to overcome common limitations in speech synthesis with regard to intonation, resulting in a more natural sounding voice. 
   
   PROTIP: Neural voices are created from samples that use a 24 khz sample rate.

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/recognize-synthesize-speech/1-introduction">Speech recognition</a> can use a acoustic model of phonemes (sounds) or a language model that matches phonemes with words.

   Custom voices can be created with the text-to-speech API.

   PROTIP: Since you have to use your own subscription to follow <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/recognize-synthesize-speech/3-exercise-transcribe-speech-use-azure">this tutorial from Microsoft</a>, skip clicking "Launch VM mode" and follow <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/08%20-%20Speech.ipynb">the Python notebook on Speech</a> on the regular Portal.

1. PROTIP: In a CLI window, run my Bash shell script to Create a Cognitive Services resource and get its two keys:

   <pre>cd ~/clouddrive/azure-your-way
   git pull
   ./az-cog-cli.sh
   </pre>

   To synthesize speech, the system typically tokenizes the text to break it down into individual words, and assigns phonetic sounds to each word. It then breaks the phonetic transcription into <strong>prosodic units</strong> (such as phrases, clauses, or sentences) to create phonemes that will be converted to audio format. These phonemes are then synthesized as audio by applying a voice, which will determine parameters such as pitch and timbre; and generating an audio wave form that can be output to a speaker or written to a file.

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#text-to-speech">Text-to-speech</a>



   <a name="TextTranslation"></a>

   ### Translator Text (text-to-tex)

   <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/translator-text-api/">Microsoft's Translator service </a> can translate text between <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/Translator/language-support">more than 90 languages and dialects</a>, specified using  ISO 639-1 two-letter language codes and 3166-1 cultural codes such as "en-US" for US English, "en-GB" for British English, "fr-CA" for Canadian French, etc.

Hands-on tool wihtou a compute instance:

1. <a target="_blank" href="https://translator.microsoft.com/">translator.microsoft.com</a>

2. Click on "Start conversation", log in and enter your name and language.

3. Share the conversation code with other participants, who can join using the Micreosoft Translator app or website.

4. Speak or type in your language to communicate with other participants in the conversation. Other participants will see your messages in their own language.


### 09 - Translation.ipynb 

BLAH: You are asked to use your own Subscription anyway, so instead of <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/translate-text-with-translation-service/3-exercise-translate-text-use-azure">the Exercise - Translate text and speech</a>, use portal.azure.com directly.

   A Python program can run from your laptop or mobile phone making API calls to 
   the Translator endpoint at:

   <tt>https://api.cognitive.microsofttranslator.com/translate?api-version=3.0</tt>

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/translator/">DOCS</a>, <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/translator/reference/v3-0-translate">API DOCS</a>

   <a target="_blank" href="https://www.youtube.com/watch?v=6VXuxIBqV94" title="Nov 12, 2020 Text translation in a few lines of Python with Azure Cognitive Services">VIDEO</a>; 
   Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/building-customized-translation-systems-azure-cognitive-services-translator" title="24 Jan 2020">1 hr video course "Build a Translator system"</a>.

   <a target="_blank" href="https://www.youtube.com/watch?v=MTkNluHxqq4" title="Analyze text for free with Azure Text Analytics by jen foxbot">VIDEO</a> intro with sample code at https://github.com/microsoft/text-analytics-walkthrough


   <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/09%20-%20Translation.ipynb">Python notebook to Translate</a>

   For response "script" : "Latn", text was transliterated in English.

A custom translator is needed to train a model to recognize and translate domain-specific words and phrases in specific industries such as aerospace, automotive, chemistry, mechanical, etc. 

   <a target="_blank" href="
   https://portal.customtranslator.azure.ai/">
           portal.customtranslator.azure.ai</a>

   Training is done by have pairs of documents (English and French, etc.). 

   10,000 aligned parallel sentences are neede to train a translator. 

   In addition to Microsoft Office formats, files with extension .ALIGN for parellel languages are perfectly aligned.
   Translation Memory systems can export parallel documents in XLF, XLIFF, TMX, suffix.
   Microsoft's LocStudio files have .LCL suffix.

   Translation runs can each take several hours. So <a target="_blank" href="https://aka.ms/DocumentTranslation">batch processing</a> is supported.

   If you don't have admin

   <pre>Need admin approval
Mt Studio Web Prod
Mt Studio Web Prod needs permission to access resources in your organization that only an admin can grant. Please ask an admin to grant permission to this app before you can use it.
   </pre>

References:
   * Microsoft Azure Cognitive Services: Translator Text API" video course</a> by William Myers

<hr />

<a name="ComputerVision"></a>

## Vision services

App for the blind: <a target="_blank" href="https://www.youtube.com/watch?v=R2mC-NUAmMk&list=RDCMUCFtEEv80fQVKkD4h1PF-Xqw&start_radio=1">
VIDEO</a>: <a target="_blank" href="https://www.youtube.com/watch?v=bqeQByqf_f8&list=RDCMUCFtEEv80fQVKkD4h1PF-Xqw&index=2">INTRO</a>: <a target="_blank" href="https://www.seeingai.com/">SeeingAI.com</a>.
Permissions for the "See It All" app are for its internal name "Mt Studio Web Prod".

<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/paths/explore-computer-vision-microsoft-azure/">
https://docs.microsoft.com/en-us/learn/paths/explore-computer-vision-microsoft-azure</a>

HISTORY: In 2014, Microsoft showed off its facial recognition capabilities with
<a target="_blank" href="https://www.how-old.net/"><strong>how-old.net</strong></a>
to guess how old someone is. At conferences they built a booth that takes a picture.

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/get-started-ai-fundamentals/4-understand-computer-vision">LEARN</a>: 
https://docs.microsoft.com/en-us/learn/modules/read-text-computer-vision/

DEMO: <a target="_blank" href="https://www.microsoft.com/en-us/ai/seeing-ai?rtc=1">Seeing AI app</a> talking camera narrates the world around blind people.

   * Semantic segmentation is the ML technique which individual pixels in the image are classified according to the object to which they belong.
   * Image analysis

   * Face detection, analysis, and recognition
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview-ocr">Optical character recognition (OCR)</a> for small amounts of text
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/read-text-computer-vision/2-ocr-azure">The Read API</a> works asynchronously on images with a lot of text, to parse pages, lines, and words.
   * <a target="_blank" href="https://azure.microsoft.com/en-us/services/media-services/video-indexer/">Video Indexer service</a> analyzes the visual and audio channels of a video, and indexes its content.
   <br /><br />

Custom vision has two <strong>project types</strong>:
   * <strong>Image classification</strong> is a machine-learning based form of computer vision in which a model is trained to categorize images based on their (class or) primary subject matter they contain. 
   * <strong>Object detection</strong> goes further than classification to classify individual objects within the image, and to return the coordinates of a bounding box that indicates the object's location.
   <br /><br />


<a name="ComputerVision"></a>

### Computer Vision

"Computer Vision" analyzes images and video to extract descriptions, tags, objects, and text.

<a target="_blank" href="https://docs.microsoft.com/azure/cognitive-services/computer-vision/">DOCS</a>, <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/detect-objects-images-custom-vision/1-introduction">INTRO</a>:

   ![az-ai-produce-objects-372x278](https://user-images.githubusercontent.com/300046/116675643-46d2ab00-a963-11eb-804a-9b1dd5fb6161.png)

* Read the text in the image
* Detects Objects
* Identifies Landmarks
* Categorize image
<br /><br />


#### Computer Vision demo

1. Select images and review the information returned by the Azure Computer Vision web service:

   DEMO: <a target="_blank" href="https://aidemos.microsoft.com/computer-vision">
   https://aidemos.microsoft.com/computer-vision</a> 

   1. Click an image to see results of "Analyze and describe images". Objects are returned with a <strong>bounding box</strong> to indicate their location within the image.

   1. Click "Try another image" for another selection.
   1. Click "Next step".
   1. Read text in imagery.
   1. Read <strong>handwriting</strong>
   1. Recognize celebrities & landmarks - the service has a specialized domain model trained to identify thousands of well-known celebrities from the worlds of sports, entertainment, and business. The "Landmarks" model can identify famous landmarks, such as the Taj Mahal and the Statue of Liberty.
   <br /><br />

   Additionally, the Computer Vision service can:
   * Detect image types - for example, identifying clip art images or line drawings.
   * Detect image color schemes - specifically, identifying the dominant foreground, background, and overall colors in an image.
   * Generate thumbnails - creating small versions of images.
   * Moderate content - detecting images that contain adult content or depict violent, gory scenes.
   <br /><br />

   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/computer-vision-v3-ga/operations/56f91f2e778daf14a499f21f">Computer Vision API</a>
   shows all the features.

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-images-computer-vision/3-analyze-images">HANDS-ON LAB</a>:

1. Right-click "Launch VM mode" for the "AI-900" lab on a Window VM.
1. X: Click the Edge browser icon.
1. X: Click to remove pop-ups.
1. Go to portal.azure.com
1. Sign in using an email which you have an Azure subscription.
1. Type the password. You can't copy outside the VM and paste into it.
1. X: Do not save your password.
1. Open Visual Studio to see
1. X: On another browser tab, view the repo (faster):

   <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/01%20-%20Image%20Analysis%20with%20Computer%20Vision.ipynb">
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/01%20-%20Image%20Analysis%20with%20Computer%20Vision.ipynb</a>

1. Follow the instructions in the notebook to create a resource, etc.

   TODO: Incorporate the code and put it in a pipeline that minimizes manual actions.

1. To take a quiz and get credit, click in the VM "here to complete the Learn module with a Knowledge Check.


<a name="Custom_Vision"></a>

### Custom Vision

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/custom-vision-service/">Azure Custom Vision</a> trains custom image using classification and object detection models referencing custom (your own) images.

1. Open

   <a target="_blank" href="
   https://www.customvision.ai/">
   https://www.customvision.ai</a>

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/example-scenario/ai/intelligent-apps-image-processing">DOCS</a>:
   ![az-ai-image-class-623x410](https://user-images.githubusercontent.com/300046/116795191-5a2f6480-aa90-11eb-82fe-52c26e8e3de4.png)

1. MS LEARN HANDS-ON LAB: 

   <a target="_blank" href="https://aka.ms/learn-image-classification">aka.ms/learn-image-classification</a> which redirects to<br />
   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/classify-images-custom-vision/">docs.microsoft.com/en-us/learn/modules/classify-images-custom-vision</a>

1. Instructions are at <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/classify-images-custom-vision/3-create-image-classifier">

1. Load the code from:

   <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/03%20-%20Object%20Detection.ipynb">https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/03%20-%20Object%20Detection.ipynb</a>

References:
   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/computer-vision-v3-ga/operations/56f91f2e778daf14a499f21f">CV API</a>


#### Video Indexer demo app

1. In a browser, go to the Video Indexer URL:

   <a target="_blank" href="https://www.videoindexer.ai/account/login/">
   https://www.videoindexer.ai</a>

1. Click the provider to login.
1. In "Media files", click "Samples", and click on a video file to Play.
1. See the media's people, topics (keywords).

1. Click a tag to see where it was mentioned in the timeline.

1. In "Model customizations"
1. In "Account settings"
1. <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/video-indexer/">PRICING</a>: up to 10 hours (600 minutes) of free indexing to website users and up to 40 hours (2,400 minutes) of free indexing to API users. Media reserved units are pre-paid. See <a target="_blank" href="https://docs.microsoft.com/en-us/azure/media-services/video-indexer/faq">FAQ</a>
   <br /><br />


<a name="Face"></a>

### Azure Face

<a target="_blank" href="https://www.youtube.com/watch?v=abhqxG1nSGg">VIDEO</a>:
<a target="_blank" href="https://www.youtube.com/watch?v=KCSyRO0KotA">API DEMO</a>:

Azure "Face" is used to build face detection and facial recognition solutions.

There is a 6 MB limit on the size of files (jpeg, png, gif, bmp).

It's service functions:
   * Face Detection
   * Find similar faces
   * Person identification
   * Face Verification
   <br /><br />

   NOTE: On June 11, 2020, Microsoft announced that it will not sell facial recognition technology to police departments in the United States until strong regulation, grounded in human rights, has been enacted. As such, customers may not use facial recognition features or functionality included in Azure Services, such as Face or Video Indexer, if a customer is, or is allowing use of such services by or for, a police department in the United States.

   https://docs.microsoft.com/en-us/azure/cognitive-services/Face/Overview
   What is the Azure Face service?

   https://docs.microsoft.com/en-us/azure/cognitive-services/Face/

   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/computer-vision-v3-ga/operations/56f91f2e778daf14a499f21f">Face API</a>

   https://docs.microsoft.com/en-us/azure/cognitive-services/Face/quickstarts/client-libraries?tabs=visual-studio&pivots=programming-language-csharp

   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/04%20-%20Face%20Analysis.ipynb

<a name="FormRecognizer"></a>

### Azure Form Recognizer

"Form Recognizer" extracts information from images obtained from scanned forms and invoices.

https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/06%20-%20Receipts%20with%20Form%20Recognizer.ipynb


<a name="OCR"></a>

### OCR

https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/05%20-%20Optical%20Character%20Recognition.ipynb

   * Image classification - https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/01%20-%20Image%20Analysis%20with%20Computer%20Vision.ipynb

   * Object detection -  https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/02%20-%20Image%20Classification.ipynb


<hr />

<a name="Coversational"></a>

## Conversational AI

HISTORY: In 2015, Microsoft unleashed the <strong>Tay</strong> chat bot, then had to bring it down after hackers submitted enough racial slurs that they fooled the system into thinking that was normal and acceptable. 

HISTORY: XiaoIce, a chatbot Microsoft launched in China, "has more than 200 million users, has engaged in 30 billion conversations, and has an average conversation length of 23 turns, which averages out to about half an hour, achieving human parity at translation from Chinese to English. Japan-based Rinna and the US-based Zo)

<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/paths/explore-conversational-ai/">
Explore-conversational-ai</a>

A Bot Framework enables the creation of <a target="_blank" href="https://microsoft.github.io/botframework-solutions/overview/virtual-assistant-solution/">Virtual Assistant</a>

A LUIS app creates these types of entities:
   * Machine-learned
   * List
   * RegEx
   * Pattern.any
   <br /><br />

https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/concepts/plan?tabs=v1

Bots are extended by <a target="_blank" href="https://microsoft.github.io/botframework-solutions/overview/skills/">Skills</a>


<a href="#QnA_Maker"></a>

### QnA Maker

   The cognitive service name "QnA Maker" (Question and Answer Maker)</a> 
   is a cloud-based API service that lets you create a conversational question-and-answer layer over your existing data. The service enables the building of <strong>knowledge bases</strong> of questions and answers that form the basis of a dialog between a human and an AI agent.

   Microsoft created the <strong>QnA Maker portal</strong> to make it easier than writing code to create and manage knowledge bases using the QnA Maker REST API or SDK.

   The knowledge base gets smarter as it continually learns from user behavior.

   The knowledge base can be built by extracting questions and answers from your semi-structured content, including FAQs, manuals, and documents. 

   <strong>QnA Maker limits</strong> control the size of Knowledge base.

   <a name="QnA_Maker"></a>

   ### Create QnA Service

1. View the <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/quickstarts/create-publish-knowledge-base?tabs=v1&WT.mc_id=Portal-Microsoft_Azure_ProjectOxford">DOCS</a>:

   View the v2 (previous release)

1. The Jupyter notebook: 

   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/11%20-%20QnA%20Bot.ipynb

1. On an appropriate browser profile (personal or work email) associated with the subscription you wnat to use.
1. Go to the QnA Maker portal at:

   <a target="_blank" href="https://qnamaker.ai/">https://qnamaker.ai</a>

1. Sign in.

   https://docs.microsoft.com/en-us/learn/paths/explore-conversational-ai/

1. "Create a knowledge base" from the top menu.
1. STEP 1: "Create a QnA service", which opens another tab
1. Basics: During testing, do NOT click the checkbox for "Managed". In prod, telemetry and compute are included automatically with your QnA Maker resource. If you do not select managed, you will be prompted to create an App Insights and App Service resources for the required telemetry and compute that you will have to manage for your QnA Maker resource. Read more <a target="_blank" href=""https://aka.ms/qnamaker-createoptions-description">here</a>.

1. Subscription: Your Azure subscription
1. Resource group: Select an existing resource group or create a new one
1. Resource group location: "(US) West US"

1. Name: A unique name for your QnA resource (App name)
1. Pricing tier: both are "3 transactions per second, 100 transactions per minute":
   * <strong>Free F0 (3 managed documents per month</strong>, 5...)
   * Standard S0 ($10 per month for unlimited documents ...)
   <br /><br />

   <u>App Service details - for runtime</u> :

1. Azure Search location: <em>Any available location</em>
1. <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/search/">Azure Search pricing tier</a>: F 
   * Free F (50 MB in 3 indexes)
   * Basic B (2 GB in 15 indexes, 3 scale-out units per service on 1 partition with 3 replicas)
   * Standard S1 (25 GB in 50 indexes) - default
   * Standard S2 (100 GB in 200 indexes)
   * Standard S3 (200 GB in 200 indexes)
   * Standard S3 (1000 Index/Partition)
   * L1 (1 TB in 10 indexes, High Storage, 36 units)
   * L2 (2 TB in 10 indexes, High Storage, 36 units)
   <br /><br />

   Note: If you have already provisioned a free-tier QnA Maker or Azure Search resources, your quota may not allow you to create another one. In which case, select a tier other than F0 / F.

   <u>App Service details - for runtime</u> :

1. App name: Same as Name (".azurewebsites.net" will be appended automatically)
1. Website location: <em>Same as Azure Search location</em>

   <u>App insights details - for telemetry and chat logs</u> :

1. App insights: Disable, which will hide the "App insights location", but appear in Review.
   
1. Click "Review + create". Create. NOTE: when these resources complete deployment:
   * Microsoft.Web/sites/config
   * Microsoft.CognitiveServices/accounts
   * Microsoft.Search/searchServices
   * microsoft.insights/components
   * microsoft.insights/components
   * Microsoft.Web/sites
   * Microsoft.Search/searchServices
   * Microsoft.Web/serverfarms
   <br /><br />

1. While you wait for the dots to stop flashing "Deployment in progress",
   return to the QnA Maker portal tab. You may have timed out.

1. When "Your deployment is complete", click "Go to resources" for "Congratulations! Your keys are ready."


   ### Connect QnA service to KB

   STEP 2: Connect your QnA service to your KB.

1. "Refresh" the list of available QnA service resources.
1. Microsoft Azure Directory ID: The Azure directory ID for your subscription
1. Azure subscription name: Your Azure subscription
1. Azure QnA service: The QnA service resource you created in the previous step

   NOTE: In the Preview there is a checkbox "Enable language setting per knowledge base".

1. Language: English

   STEP 3: Name your KB.

1. Type a name: For example: "Margie's Travel KB". Spaces are allowed?

   STEP 4: Populate your KB.

1. "+ Add URL"
1. Copy and paste this example URL:

   https://github.com/MicrosoftDocs/ai-fundamentals/raw/master/data/qna_bot/margies_faq.docx

1. Add file

1. chit-chat: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/how-to/chit-chat-knowledge-base?tabs=v1">Adding "chit-chat"</a> to your knowledge base (by selecting a personality) automatically adds questions and responses to your knowledge base, which enables your bot to answer small-talk questions in a voice (personality) of your choice:
   * None
   * Professional << select this.
   * Friendly
   * Witty
   * Caring
   * Enthusiastic
   <br /><br />

   QUESTION: What is the range of popularity?

   QUESTION: Extraction? I'm stuck here.


1. Do NOT check "Enable multi-turn extraction from URLs, .pdf or .docx files."

1. Click "Create your KB". Wait for a minute or so while your Knowledge base is created. 

1. Review the questions and answers that have been imported from the FAQ document and the professional chit-chat pre-defined responses.

   ### Test the knowledge base

   ### Make an API call
   
   https://go.microsoft.com/fwlink/?linkid=2100125

   https://go.microsoft.com/fwlink/?linkid=2100213
   Coding</a>



<hr />

<a name="BotService"></a>

### Azure Bot Service 

   provides a platform for creating, publishing, and managing bots. Developers can use the Bot Framework to create a bot and manage it with Azure Bot Service - integrating back-end services like QnA Maker and LUIS, and connecting to channels for web chat, email, Microsoft Teams, and others.

   Microsoft Bot Framework supports two <a target="_blank" href="https://docs.microsoft.com/en-us/azure/bot-service/bot-service-design-pattern-handoff-human?view=azure-bot-service-4.0">approaches to integrate bots</a> with agent engagement platforms such as Customer support service: 
   * Bot as agent distributes calls to bots on the same level as live (human) agents. Handoff protocols regulate a bot's disengagement and transfer to live person.
   * Bot as proxy presents a bot to filter interaction with live people.

1. DEMO: See a healthcare bot built using the Azure Bot Service:

   <a target="_blank"" href="
   https://www.microsoft.com/research/project/health-bot/">
   https://www.microsoft.com/research/project/health-bot</a>

   Select the option to Try a demo of an example end-user experience.
   Use the web chat interface to interact with the bot.

<a target="_blank" href=""https://docs.microsoft.com/en-us/learn/modules/create-bot-with-bot-framework-composer/">MS LEARN</a>: Create a Bot with the Bot Framework Composer

1. Run the Python Jupyter notebook

   <a target="_blank" href="
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/11%20-%20QnA%20Bot.ipynb">
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/11%20-%20QnA%20Bot.ipynb
   Conversational AI LAB</a>

1. Sign in using the Microsoft account associated with your Azure subscription.



<hr />

## Sample Python Code

https://docs.microsoft.com/en-us/samples/azure/azureml-examples/azure-machine-learning-examples/


## Tutorials How-To

### Machine Learing GUI

1. Login the portal.azure.com GUI
1. <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.MachineLearningServices%2Fworkspaces">Machine Learning</a> service.
1. Click "+ Create" to create a machine learning workspace to manage machine learning solutions through the entire data science lifecycle. Tim:[33:24]

1. Advanced.

   PROTIP: More users now use Customer-managed keys (in CosmoDB) rather than use Microsoft-managed keys.

1. Use the workspace you created.

1. Setup role-based managed service to manage apps.

etc.

1. Create Datastore: blob, file, SQL
1. Create Dataset from datastore (filing cabinet):

   Basic info, Datastore and file selection, Setting and Preview, Schema, Confirm details

Linked services has Synapse.


## Automated ML

Tim1[45:55]

1. <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.MachineLearningServices%2Fworkspaces">Machine Learning</a> service.


## Speech-to-text

Transcriptions can be done in real-time or in batch mode.

Batch mode is when audio recordings are stored on a file share, and a shared access signature (SAS) URI is used by a program to asynchronously receive transcription results.

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

https://github.com/timothywarner/ai100/tree/master/Speech-to-Text



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

<ul>
<li><a target="_blank" href="http://azure.com/ai">Azure AI product page</a></li>
<li><a target="_blank" href="https://azure.microsoft.com/case-studies/">Azure case studies</a></li>
<li><a target="_blank" href="https://azure.microsoft.com/blog/">Microsoft Azure Blog</a></li>
<li><a target="_blank" href="https://channel9.msdn.com/Shows/AI-Show">Channel 9 AI Show</a></li>
<li><a target="_blank" href="https://www.microsoft.com/ai/ai-for-good">AI for Good</a></li>
<li><a target="_blank" href="https://www.microsoft.com/seeing-ai/">Seeing AI application</a></li>
<li><a target="_blank" href="https://news.microsoft.com/futurecomputed/">The Future Computed book</a></li>
</ul>

<a target="_blank" href="https://www.meetup.com/Microsoft-AI-ML-Community/?action=join">
Microsoft AI ML Community in Signapore</a> 

   * Intro to Azure ML by Priyanka S. Shah: <a target="_blank" href="https://www.youtube.com/watch?v=UBY9Hef6p7c&list=PLh6mjs1aVKZ3iZRnwpMjjj8jXBBqRCJJW">Part 1 of 4</a>
   <br /><br />   

If you have an OReilly.com account:

   * <a target="_blank" href="https://learning.oreilly.com/videos/azure-cognitive-services/9781838552565">Azure Cognitive Services for Developers</a>

   * <a target="_blank" href="https://learning.oreilly.com/videos/implementing-azure-cognitive/9781838556778">
    Implementing Azure Cognitive Services with QnA Maker</a>

   * <a target="_blank" href="https://learning.oreilly.com/videos/implementing-azure-cognitive/9781838558864">
   Implementing Azure Cognitive Services for Language</a>

   * <a target="_blank" href="https://learning.oreilly.com/videos/implementing-azure-cognitive/9781838557263">
   Implementing Azure Cognitive Services for Vision</a>

   * <a target="_blank" href="https://learning.oreilly.com/videos/programming-the-microsoft/9780134835907">
   Programming the Microsoft Bot Framework</a>

   * <a target="_blank" href="https://learning.oreilly.com/videos/machine-learning-in/9781789347524">
   Machine Learning In The Cloud With Azure Machine Learning</a>

   * <a target="_blank" href="https://learning.oreilly.com/videos/azure-search-for/9781771375184">
   Azure Search for Developers</a>

On Udemy:

   * <a target="_blank" href="https://www.udemy.com/course/azure-cognitive-services-crash-course/?referralCode=EE78F34C49858D913E15">
   Microsoft Azure Cognitive Services Crash Course</a>

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

https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/limits-and-quotas

## Microsoft's History with AI

In April 2018 Microsoft reorganized into two divisions that offers AI:

   * <a target="_blank" href="https://www.microsoft.com/en-us/research/project/machine-learning-edge/">The research division</a>, headed by <a target="_blank" href="https://www.linkedin.com/in/harryshum/">Harry Shum</a>, put AI into Bing search, Cortana voice recognition and text-to-speech, ambient computing, and robotics. See <a target="_blank" href="https://www.youtube.com/watch?v=_Hg9QKBhERw">Harry's presentation in 2016</a>.

   * Microsft's "computing fabric" offerings, led by <a target="_blank" href="https://www.linkedin.com/in/guthriescott/">Scott Guthrie</a>, makes AI services available for those building customizable machine learning with speech, language, vision, and knowledge services. Tools offered include Cognitive Services and Bot Framework, deep-learning tools like Azure Machine Learning, Visual Studio Code Tools for AI, and Cognitive Toolkit.


At Build 2018, Microsoft announced <a target="_blank" href="https://www.microsoft.com/en-us/research/publication/serving-dnns-real-time-datacenter-scale-project-brainwave/">Project Brainwave</a> to run Google's Tensorflow AI code and Facebook's Caffe2, and Microsoft's <a target="_blank" href="
https://docs.microsoft.com/en-us/cognitive-toolkit/index">"Cognitive Toolkit" (CNTK)</a>.
   * <a target="_blank" href="https://docs.microsoft.com/en-us/cognitive-toolkit/brainscript-basic-concepts">BrainScript</a> uses a dynamically typed C-like syntax to express neural networks in a way that looks like math formulas. Brainscript has a <a target="_blank" href="https://docs.microsoft.com/en-us/cognitive-toolkit/BrainScript-and-Python-Performance-Profiler">Performance Profiler</a>.

   * Hyper-parameters are a separate module (alongside Network and reader) to perform SGD (stochastic-gradient descent).
   <br /><br />

Microsoft has advanced hardware:

   <ul>[<a target="_blank" href="https://www.microsoft.com/en-us/research/publication/serving-dnns-real-time-datacenter-scale-project-brainwave/">
   This pdf</a> white paper says the "high-performance, precision-adaptable FPGA soft processor is at the heart of the system, achieving up to 39.5 TFLOPs of effective performance at Batch 1 on a state-of-the-art Intel Stratix 10 FPGA."
   Microsoft's use of field programmable gate arrays (FPGA) calculates AI reportedly "five times faster than Google's TPU hardware".

   "Each FPGA operates in-line between the server’s network interface card (NIC) and the top-of-rack (TOR) switch, enabling in-situ processing of network packets and point-to-point connectivity between hundreds of thousands of FPGAs at low latency (two microseconds per switch hop, one-way)."
   </ul>


## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html %}
