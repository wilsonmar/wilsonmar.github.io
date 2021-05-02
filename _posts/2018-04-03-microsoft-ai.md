---
layout: post
title: "Microsoft AI"
excerpt: "How to get certified to run Microsoft's AI in Azure cloud"
tags: [microsoft, azure, machine learning, AI]
date: "2021-03-20"
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

This article provides a guided tour of use Microsoft's AI (Artificial Intelligence) offerings, which include Machine / Deep Learning capabilities running on the Azure cloud.

Bernard Marr identified <a target="_blank" href="https://www.bernardmarr.com/default.asp?contentID=2191">four types of AI</a> evolving: 

   * "reactive" machines (such as Spam filters and the Netflix recommendation engine) are not able to learn or conceive of the past or future, so it responds to identical situations in the exact same way every time.

   * "limited memory" AI absorbs learning data and improve over time based on its experience, using historical data to make predictions. It's similar to the way the human brain’s neurons connect. Deep-learning algorithms used today is the AI that is widely used and being perfected today.

   * "theory of mind" is when AI acquires decision-making capabilities equal to humans, and have the capability to recognize and remember emotions, and adjust behavior based on those emotions.

   * "self-aware", also called artificial superintelligence (ASI), is "sentient" understanding of of its own needs and desires.


## Microsoft History with AI

### Cortana now Cognitive Services 

"Cortana" was the brand-name of Microsoft's AI. Cortana is the name of the fictional artificially intelligent character in the Halo video game series. Cortana was going to be Microsoft's answer to Siri and Alexa, an AI-powered personal assistant capable of responding to voice commands, armed with a collection of third-party skills. 

But <a target="_blank" href="https://www.theverge.com/2019/7/25/20727129/microsoft-cortana-features-strategy-report">in 2019</a> Cortana decoupled from Windows 10 search.

<a target="_blank" href="https://www.youtube.com/watch?v=eJOv-TfhhzQ">VIDEO</a>: <a target="_blank" href="https://services.azureml.net/">Azure Machine Learning Studio (classic) Web Services</a>

The Classic version reflected "All Microsoft all the time" with proprietary "pickle" files.


### AI History Within Microsoft

In April 2018 Microsoft reorganized into two divisions that offers AI:

   * <a target="_blank" href="https://www.microsoft.com/en-us/research/project/machine-learning-edge/">The research division</a>, headed by <a target="_blank" href="https://www.linkedin.com/in/harryshum/">Harry Shum</a>, put AI into Bing search, Cortana voice recognition and text-to-speech, ambient computing, and robotics. See <a target="_blank" href="https://www.youtube.com/watch?v=_Hg9QKBhERw">Harry's presentation in 2016</a>.

   * Microsft's "computing fabric" offerings, led by <a target="_blank" href="https://www.linkedin.com/in/guthriescott/">Scott Guthrie</a>, makes AI services available for those building customizable machine learning with speech, language, vision, and knowledge services. Tools offered include Cognitive Services and Bot Framework, deep-learning tools like Azure Machine Learning, Visual Studio Code Tools for AI, and Cognitive Toolkit.

Microsoft's Azure IoT Edge (at <a target="_blank" href="https://github.com/Azure/ai-toolkit-iot-edge"> https://github.com/Azure/ai-toolkit-iot-edge</a>) brings AI and machine learning to the edge of networks, such as in the field and on factory floors. See the <a target="_blank" href="https://gallery.azure.ai/Solution/IoT-Edge-2">Sample app</a> and <a target="_blank" href="https://social.msdn.microsoft.com/forums/azure/en-US/home?forum=MachineLearning">read all the unanswered forum posts</a>
   * https://channel9.msdn.com/events/Build/2018/BRK2154
   <br /><br />

At Build 2018, Microsoft announced <a target="_blank" href="https://www.microsoft.com/en-us/research/publication/serving-dnns-real-time-datacenter-scale-project-brainwave/">Project Brainwave</a> to run Google's Tensorflow AI code and Facebook's Caffe2, and Microsoft's <a target="_blank" href="
https://docs.microsoft.com/en-us/cognitive-toolkit/index">"Cognitive Toolkit" (CNTK)</a>.
   * <a target="_blank" href="https://docs.microsoft.com/en-us/cognitive-toolkit/brainscript-basic-concepts">BrainScript</a> uses a dynamically typed C-like syntax to express neural networks in a way that looks like math formulas. Brainscript has a <a target="_blank" href="https://docs.microsoft.com/en-us/cognitive-toolkit/BrainScript-and-Python-Performance-Profiler">Performance Profiler</a>.

   * Hyper-parameters are a separate module (alongside Network and reader) to perform SGD (stochastic-gradient descent).
   <br /><br />

[<a target="_blank" href="https://www.microsoft.com/en-us/research/publication/serving-dnns-real-time-datacenter-scale-project-brainwave/">
This pdf</a> white paper says the "high-performance, precision-adaptable FPGA soft processor is at the heart of the system, achieving up to 39.5 TFLOPs of effective performance at Batch 1 on a state-of-the-art Intel Stratix 10 FPGA."
Microsoft's use of field programmable gate arrays (FPGA) calculates AI reportedly "five times faster than Google's TPU hardware".

   <ul>"Each FPGA operates in-line between the server’s network interface card (NIC) and the top-of-rack (TOR) switch, enabling in-situ processing of network packets and point-to-point connectivity between hundreds of thousands of FPGAs at low latency (two microseconds per switch hop, one-way)."</ul>

<hr />

## Principled AI

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/get-started-ai-fundamentals/7-understand-responsible-ai">LEARN</a>:

Microsoft has a <a target="_blank" href="https://www.microsoft.com/research/group/fate/">FATE (Fairness, Accountability, Transparency, and Ethics)</a> research group:

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
   https://aidemos.microsoft.com/guidelines-for-human-ai-interaction/demo">
   https://aidemos.microsoft.com/guidelines-for-human-ai-interaction/demo</a>

1. Make use of <a target="_blank" href="https://www.microsoft.com/ai/responsible-ai-resources">
https://www.microsoft.com/ai/responsible-ai-resources</a>


<hr />

## Azure AI certifications

Among <a target="_blank" href="https://wilsonmar.github.io/azure-certifications">Microsoft's Azure professional certifications</a>:

   * <a href="#AI-900">AI-900</a> is the entry exam ($99)
   * <a href="#AI-102">AI-102</a> replaces
   * <a href="#AI-100">AI-100</a> after June 30, 2021, but with a 1-year rather than 2-year re-up period.
   <br /><br />

Previous exam 774 is now been retired.

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/AI-102">AI-102</a> $165 replaces
<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/AI-100">AI-100</a> on June 30, 2021. The shift is from infrastructure (KeyVault, AKS, Stream Analytics) to programming C#, Python, or JavaScript.


<a name="AI-900"></a>

### AI-900 

PROTIP: Here's a must-see website: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/AI-900">
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


* <a target="_blank" href="https://cloudacademy.com/learning-paths/ai-900-exam-preparation-microsoft-azure-ai-fundamentals-1968/">CloudAcademy's AI-900 video course</a> includes lab time (1-2 hours at a time).

* <a target="_blank" href="https://www.youtube.com/watch?v=E9aarWMLJw0">AI-900 Study Guide - YouTube</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=fQhgRR_Vtus&list=PLHh_n2lgzcrvecPJ-zMukLlDrq0GMSMmB&index=3">
AI-900 Sample Practice Exam Questions</a>

* https://www.udemy.com/course/microsoft-ai-900/

* https://www.itexams.com/info/AI-900

Practice tests:
* https://www.whizlabs.com/learn/course/microsoft-azure-ai-900/
* https://www.examtopics.com/exams/microsoft/ai-900/


<a name="AI-100"></a>

### AI-100 Azure AI Engineer Associate

On June 30, 2021, Microsft is retiring the AI-100 exam in favor of <a href="#AI-102">AI-102 exam</a> (avilable in beta since Feb 2021). <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/ai-100">AI-100 exam, as definied at Microsoft's LEARN</a> (that page includes a free text-based tutorial).

   * Analyze solution requirements (25-30%)
   * Design AI solutions (40-45%)
   * Implement and monitor AI solutions (25-30%)
   <br /><br />

https://github.com/MicrosoftLearning/AI-100-Design-Implement-Azure-AISol

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

Raza Salehi created on Pluralsight.com <a target="_blank" href="https://app.pluralsight.com/paths/certificate/microsoft-azure-ai-engineer-ai-100">a series for Microsoft Azure AI Engineer (AI-100)</a> :

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-personalizer">Personalizer</a>
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-ink-recognizer">Recognizer</a>
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-immersive-reader">Immersive Reader</a>
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-anomaly-detector">Anomaly Detector</a>
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/building-customized-translation-systems-azure-cognitive-services-translator">Translator</a>

Practice tests:
* https://www.whizlabs.com/learn/course/microsoft-azure-ai-100/

https://github.com/MicrosoftLearning/Principles-of-Machine-Learning-Python

<a name="AI-102"></a>

### AI-102

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/ai-102">AI-102 exam, as definied at Microsoft's LEARN</a> 

   * Plan and manage an Azure Cognitive Services solution (15-20%)
   * Implement Computer Vision solutions (20-25%)
   * Implement natural language processing solutions (20-25%)
   * Implement knowledge mining solutions (15-20%)
   * Implement conversational AI solutions (15-20%)
   <br /><br />

PROTIP: That page includes a free text-based tutorial.

PROTIP: Unlike the AI-100, AI-102 requires skill in programming C# or Python.

<a target="_blank" href="https://ravikirans.com/ai-102-azure-exam-study-guide/">
Ravi's links</a>

Microsoft offers a <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/courses/ai-102t00">4-day course (with cloud time)</a>
covering C# or Python as the programming language.
   * <a target="_blank" href="https://github.com/MicrosoftLearning/AI-102-AIEngineer">Labs for the class</a> can be followed outside of class enrollment.


<hr />

<a name="CognitiveServices"></a>

## Azure Cognitive Services suite

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/">DOCS</a>:
<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/">
Azure "Cognitive Services"</a> refers to a <strong>suite of services</strong> (with APIs) developers use to build AI-enhanced solutions which mimic human intelligence:

   * "Decision" - classification (unsupervised machine learning) fits features into model and predict classification of the label
   * "Decision" - regression (supervised machine learning) uses historical data to train the model to predict <strong>numerical</strong> values.

   * Computer vision - interpret the world visually through cameras, videos, images.
   * Natural language processing - interpret written or spoken language, and respond in kind.
   * Conversational AI - an "agent" to participate in a (natural) conversation.
   <br /><br />

"Search" (Bing) has disappeared from Microsoft's list of service categories.
But it now is at <a target="_blank" href="https://docs.microsoft.com/en-us/azure/search/">
https://docs.microsoft.com/en-us/azure/search</a>

Case studies of how people are already making use of AI/ML to save time and money:

   * Predictive Maintenance data science <a target="_blank" href="https://info.microsoft.com/CO-AAIoT-WBNR-FY16-07Jul-05-Predictive-Maintenance-Registration.html">webinar</a>
   * Defect Detection with Image Analysis
   * Custom Entity Extraction with Text Analytics
   * modsy.com 3D view
   <br /><br />


1. List kinds of Cognitive Services using CLI command:

   <pre>az cognitiveservices account list-kinds</pre>

   Kinds with ? are known in websites but not listed by the command above.

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="bottom"><th> Category </th><th> Kind </th><th> Description </th></tr>
   <tr align="top"><td> Decision </td><td> "AnomalyDetector"
      </td><td> automatically detect errors or unusual activity in a system </td></tr>
   <tr align="top"><td> Decision </td><td> "ContentModerator"
      </td><td> - </td></tr>
   <tr align="top"><td> Decision </td><td> "Personalizer"
      </td><td> - </td></tr>

   <tr align="top"><td> Language </td><td> "FormRecognizer"
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> "LUIS"
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> "LUIS.Authoring"
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> <a href="#QnA_Maker">"QnAMaker"</a>
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> <a href="#QnA_Maker">"QnAMaker.v2"</a>
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> "TextAnalytics"
      </td><td> - </td></tr>
   <tr align="top"><td> Language </td><td> "TextTranslation"
      </td><td> - </td></tr>

   <tr align="top"><td> Speech </td><td> "SpeechServices"
      </td><td> - </td></tr>
   <tr align="top"><td> Speech </td><td> "SpeakerRecognition?
      </td><td> - </td></tr>

   <tr align="top"><td> Vision </td><td> "CognitiveServices"
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> "ComputerVision"
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> "CustomVision.Prediction"
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> "CustomVision.Training"
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> "Face"
      </td><td> - </td></tr>

   <tr align="top"><td> Vision </td><td> ?FormRecognizer?
      </td><td> - </td></tr>
   <tr align="top"><td> Vision </td><td> ?InkRecognizer?
      </td><td> - </td></tr>

   <tr align="top"><td> Search </td><td> "Bing.CustomSearch"
      </td><td> - </td></tr>
   <tr align="top"><td> Search </td><td> "Bing.Search.v7"
      </td><td> - </td></tr>

   <tr align="top"><td> ? </td><td> "ImmersiveReader"
      </td><td> - </td></tr>
   <tr align="top"><td> ? </td><td> "Internal.AllInOne"
      </td><td> - </td></tr>
   <tr align="top"><td> ? </td><td> "MetricsAdvisor"
      </td><td> - </td></tr>
   </table>

DEMOS: https://aidemos.microsoft.com/


<a name="CLI"></a>

## CLI

You would save money if you got to work right away AND don't leave servers running with nothing to do.

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


![az-ai-ml-1173x538](https://user-images.githubusercontent.com/300046/116586918-2fe67700-a8d7-11eb-87e7-1a4087faaa4f.png)

A <strong>model</strong> is the "brains" (logic) to make predictions about labels being forecasted.

Models are created from training data containing feature values.

Test data is used to determine how well predictions created from a model, presented in a 2x2 <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-understand-automated-ml#confusion-matrix">confusion matrix</a> which compares the Predicted label to True Label (yes or no) to identify true/false positives/negatives. 

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th> - </th><th> Predicted: no </th><th> Predicted: yes </th></tr>
   <tr><th> True: no  </th><td> true negatives </td><td> Type I error: false positives </td></tr>
   <tr><th> True: yes </th><td> Type II error: false negatives </td><td> true positives</td></tr>
   </table>

   QUESTION: Is the above correct?

Average Precision (AP) is an overall metric that takes into account both precision and recall):
   
   * <strong>Precision</strong> is the percentage of class predictions made by the model which were correct. For example, if the model <strong>predicted</strong> that 10 images are oranges, of which eight were actually oranges, then the precision is 0.8 (80%).

   * <strong>Recall</strong> is the percentage of class predictions the model <strong>correctly identify</strong>. For example, if there are 10 images of apples, and the model found 7 of them, then the recall is 0.7 (70%).

The Receiver Operating Characteristic (ROC) curve plots the relationship between True Positive Rate (TPR) and False Positive Rate (FPR) as the decision threshold changes. The ROC curve can be less informative when training models on datasets with high class imbalance, as the majority class can drown out contributions from minority classes.

   <strong>AUC</strong> (Area Under the Curve) measures the area underneath the ROC curve. If the AUC is 0.87 means 87% of the area of the plot is below the curve. A model with AUC of 0.5 performs no better than random chance. The larger the AUC to 1 the better the model is at separating classes.


Different <a href="#ValidationTypes">validation types</a> can be used.

https://adatis.co.uk/evaluating-models-in-azure-machine-learning-part-1-classification/

<a target="_blank" href="https://www.bluegranite.com/blog/train-and-deploy-machine-learning-models-using-the-azureml-service">Process</a> (using a Python scipt):
![azureml-1118x398](https://user-images.githubusercontent.com/300046/116598715-6676be80-a8e4-11eb-878a-70f8dface9d9.png)

### Install Visual Studio Code extension form AML

1. Open Visual Studio Code on your laptop.
1. Press Shift+Command+X for Extensions search.
1. Search for "Azure Machine Learning"
1. Click "Install".

   Several extensions are installed (Azure account, AML - Remote).

1. Search for "Thunder client" for a REST API GUI like Postman.


1. To invoke extensions, VS Code will apply the extension based on the file type opened (such as .py for Python, etc.)

### Automated ML

Following https://docs.microsoft.com/en-us/learn/modules/use-automated-machine-learning/use-auto-ml

1. On the Overview page, launch Azure Machine Learning studio (or open a new browser tab and navigate to
   
   <a target="_blank" href="
   https://ml.azure.com/">
   https://ml.azure.com</a>

   You don't need to go to G+\ <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.MachineLearningServices%2Fworkspaces">Machine Learning</a>

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

   ### Language Understanding Intelligent Service (LUIS) 

   LUIS trains a language model that can understand spoken or text-based commands.

1. View a demo interface to voice control lighting in a virtual home. 

   <a target="_blank" href="
   https://aidemos.microsoft.com/luis/demo">
   https://aidemos.microsoft.com/luis/demo</a>

   Select suggested phrases to see how the system responds.
   Type instructions, use the microphone button to speak commands.

1. Process Natural Lanaguage using Azure Cognitive Language Services 

   https://github.com/MicrosoftLearning/AI-102-LUIS contains image files for reference by
   https://github.com/MicrosoftLearning/AI-102-Code-Repos
   https://github.com/MicrosoftLearning/AI-102-Process-Speech

   ### Text Analytics 

   <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/">Text to Speech</a> analyzes text documents and extract key phrases, detect entities (such as places, dates, and people), and evaluate sentiment (how positive or negative a document is).

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-text-with-text-analytics-service/1-introduction">Techniques</a>
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/">DOCS</a>:

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-text-with-text-analytics-service/3-exercise">MS LEARN HANDS-ON LAB</a> references
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/07%20-%20Text%20Analytics.ipynb

   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-0/operations/Languages/console">Text Analytics API</a>


   ### Sentiment Analysis

   The output is a number from 0 to 1, with 1 being the most positive language and zero being the most negative opinion expressed.


   ### Key phrase extraction


   ### Speech Translation (Speech to text)
   
   <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/speech-translation/">Speech Translation</a> recognizes and synthesizes speech, and translates spoken languages.

   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/08%20-%20Speech.ipynb

   https://github.com/timothywarner/ai100/tree/master/Speech-to-Text
   
   https://github.com/MicrosoftLearning/AI-SpeechToText

   The speech-to-text service includes multiple pre-defined voices with support for <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#speech-to-text">multiple languages and regional pronunciations</a>, with language detection. In addition to standard voices, <strong>neural voices</strong> leverage neural networks to overcome common limitations in speech synthesis with regard to intonation, resulting in a more natural sounding voice. 
   PROTIP: Neural voices are created from samples that use a 24 khz sample rate.

   Custom voices can be created with the text-to-speech API.

   PROTIP: Since you have to use your own subscription to follow <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/recognize-synthesize-speech/3-exercise-transcribe-speech-use-azure">this tutorial from Microsoft</a>, skip clicking "Launch VM mode" and follow <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/08%20-%20Speech.ipynb">the Python notebook on Speech</a> on the regular Portal.

1. PROTIP: In a CLI window, run my Bash shell script to Create a Cognitive Services resource and get its two keys:

   <pre>cd ~/clouddrive/azure-your-way
   git pull
   ./az-iot-cli.sh
   </pre>



   ### Translator Text (text to speech)

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/translator/reference/v3-0-translate">translate text</a> between more than 60 languages.

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#text-to-speech">Text-to-speech</a>

   <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/09%20-%20Translation.ipynb">Python notebooks</a>

<hr />

<a name="ComputerVision"></a>

## Vision services

<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/paths/explore-computer-vision-microsoft-azure/">
https://docs.microsoft.com/en-us/learn/paths/explore-computer-vision-microsoft-azure</a>

HISTORY: In 2014, Microsoft showed off its facial recognition capabilities with
<a target="_blank" href="https://www.how-old.net/"><strong>how-old.net</strong></a>
to guess how old someone is. At conferences they built a booth that takes a picture.

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/get-started-ai-fundamentals/4-understand-computer-vision">LEARN</a>: 
https://docs.microsoft.com/en-us/learn/modules/read-text-computer-vision/

DEMO: <a target="_blank" href="https://www.microsoft.com/en-us/ai/seeing-ai?rtc=1">Seeing AI app</a> talking camera narrates the world around blind people.

   * <strong>Image classification</strong> is a machine learning based form of computer vision in which a model is trained to categorize images based on their (class or) primary subject matter they contain. 

   * <strong>Object detection</strong> goes further than classification to classify individual objects within the image, and to return the coordinates of a bounding box that indicates the object's location.

   * Semantic segmentation
   * Image analysis
   * Face detection, analysis, and recognition
   * Optical character recognition (OCR) of text
   * <a target="_blank" href="https://azure.microsoft.com/en-us/services/media-services/video-indexer/">Video Indexer service</a> analyzes the visual and audio channels of a video, and indexes its content.
   <br /><br />


### Computer Vision

"Computer Vision" analyzes images and video to extract descriptions, tags, objects, and text.

<a target="_blank" href="https://docs.microsoft.com/azure/cognitive-services/computer-vision/">DOCS</a>, <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/detect-objects-images-custom-vision/1-introduction">INTRO</a>:

   ![az-ai-produce-objects-372x278](https://user-images.githubusercontent.com/300046/116675643-46d2ab00-a963-11eb-804a-9b1dd5fb6161.png)


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

<a name="Custome_Vision"></a>

### Custom Vision

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/custom-vision-service/">Custom Vision</a> trains custom image classification and object detection models using custom (your own) images.

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/example-scenario/ai/intelligent-apps-image-processing">DOCS</a>:
![az-ai-image-class-623x410](https://user-images.githubusercontent.com/300046/116795191-5a2f6480-aa90-11eb-82fe-52c26e8e3de4.png)



MS LEARN HANDS-ON LAB: 

   https://docs.microsoft.com/en-us/learn/modules/classify-images-custom-vision/3-create-image-classifier

   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/03%20-%20Object%20Detection.ipynb

   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/computer-vision-v3-ga/operations/56f91f2e778daf14a499f21f">CV API</a>


### Azure Face

"Face" is used to build face detection and facial recognition solutions.

   NOTE: On June 11, 2020, Microsoft announced that it will not sell facial recognition technology to police departments in the United States until strong regulation, grounded in human rights, has been enacted. As such, customers may not use facial recognition features or functionality included in Azure Services, such as Face or Video Indexer, if a customer is, or is allowing use of such services by or for, a police department in the United States.

   https://docs.microsoft.com/en-us/azure/cognitive-services/Face/Overview
   What is the Azure Face service?

   https://docs.microsoft.com/en-us/azure/cognitive-services/Face/

   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/computer-vision-v3-ga/operations/56f91f2e778daf14a499f21f">Face API</a>

   https://docs.microsoft.com/en-us/azure/cognitive-services/Face/quickstarts/client-libraries?tabs=visual-studio&pivots=programming-language-csharp

   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/04%20-%20Face%20Analysis.ipynb

### Azure Form Recognizer

"Form Recognizer" extracts information from images obtained from scanned forms and invoices.

https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/06%20-%20Receipts%20with%20Form%20Recognizer.ipynb


### OCR

https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/05%20-%20Optical%20Character%20Recognition.ipynb

   * Image classification - https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/01%20-%20Image%20Analysis%20with%20Computer%20Vision.ipynb

   * Object detection -  https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/02%20-%20Image%20Classification.ipynb

<hr />

<a name="Coversational"></a>

## Conversational AI

HISTORY: In 2015, Microsoft unleashed the <strong>Tay</strong> chat bot, then had to bring it down after hackers submitted enough racial slurs that they fooled the system into thinking that was normal and acceptable. 

HISTORY: XiaoIce, a chatbot Microsoft launched in China, "has more than 200 million users, has engaged in 30 billion conversations, and has an average conversation length of 23 turns, which averages out to about half an hour, achieving human parity at translation from Chinese to English. Japan-based Rinna and the US-based Zo)

Today, <a target="_blank" href="
https://docs.microsoft.com/en-us/learn/paths/explore-conversational-ai/">
Explore-conversational-ai</a>

   <a href="#QnA_Maker"></a>

### QnA Maker

   The cognitive service name "QnA Maker" (Question and Answer Maker)</a> 
   is a cloud-based API service that lets you create a conversational question-and-answer layer over your existing data. The service enables the building of <strong>knowledge bases</strong> of questions and answers that form the basis of a dialog between a human and an AI agent.

   Microsoft created the <strong>QnA Maker portal</strong> to make it easier than writing code to create and manage knowledge bases using the QnA Maker REST API or SDK.

   The knowledge base gets smarter as it continually learns from user behavior.

   The knowledge base can be built by extracting questions and answers from your semi-structured content, including FAQs, manuals, and documents. 


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

1. chit-chat: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/how-to/chit-chat-knowledge-base?tabs=v1">Adding "chit-chat"</a> to your knowledge base (by selecting a personality) automatically adds questions and responses to your knowledge base, which enables your bot to answer small-talk questions in a voice that fits your brand. 
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

1. DEMO: See a healthcare bot built using the Azure Bot Service:

   <a target="_blank"" href="
   https://www.microsoft.com/research/project/health-bot/">
   https://www.microsoft.com/research/project/health-bot</a>

   Select the option to Try a demo of an example end-user experience.
   Use the web chat interface to interact with the bot.

1. View the Python Jupyter notebook

   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/11%20-%20QnA%20Bot.ipynb

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

https://towardsdatascience.com/jupyter-lab-evolution-of-the-jupyter-notebook-5297cacde6b
JypiterLab is more robust than Jupyper
   * Native Git and GitHub support - https://github.com/jupyterlab/jupyterlab
   * Extensible with <tt>jupyter labextensions install jupyterlab-drawio</tt>
   * Google Drive
   * Dark themes
   <br /><br />


## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html %}
