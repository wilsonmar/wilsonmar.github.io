---
layout: post
date: "2024-02-16"
file: "microsoft-ai"
title: "Microsoft AI (Azure OpenAI Generative Services)"
excerpt: "How to automate AI workflows in Microsoft's Azure and Fabric, despite marketing rebrands, and passing AI-900 & AI-102 certification exams."
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

Here is a guided deep dive to introduce use of Microsoft's Artificial Intelligence (AI) offerings running on the Azure cloud.
My contribution to the world (to you) is a less overwhelming learning sequence, one that starts with the <strong>least complex</strong> of technologies used, then more complex ones.

{% include whatever.html %}

Microsoft "democratizes" AI and Machine Learning by providing a front-end that hides some of the complexities, enabling them to be run <strong>possibly without programming</strong>.

## Gallery

1. Microsoft's Azure AI gallery of samples and users' contributions:

   <a target="_blank" href="https://gallery.azure.ai/browse">https://gallery.azure.ai/browse</a>

   These are what are called "narrow" or "weak" AI.

1. Click (Azure cloud) SERVICES USED:

   * Azure Machine Learning
   * PowerBI
   * Azure Blob Storage
   * Azure HDInsight
   * Azure Data Factory
   * Azure SQL DataWarehouse
   * Azure App Service
   * Azure Sql
   * Azure Event Hubs
   * Azure Stream Analytics
   * Azure Cognitive Service - LUIS
   * Azure Data Lake Analytics
   * Azure Data Lake Store
   * Azure Virtual Machine
   * Azure Batch
   <br /><br />

   <a name="workflows"></a>

   ### Hybrid workflow Pipelines

   PROTIP: Although most of Microsoft's product documents focus on one technology at a time, actual production work enjoyed by real end-users usually involves a <strong>pipeline</strong> consisting of several services. For example: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/example-scenario/ai/news-feed-ingestion-and-near-real-time-analysis">ingesting (stream processing) a newsfeed</a>:

   ![az-ml-newsfeed-546x623](https://user-images.githubusercontent.com/300046/116988980-6254f300-ac8e-11eb-9901-c2c6f3d8a018.png)

   That and other flows are in the <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/">Azure Architecture Center</a>.

1. For more about ALGORITHMS USED, see <a target="_blank" href="https://wilsonmar.github.io/machine-learning-algorithms/">my explanations at https://wilsonmar.github.io/machine-learning-algorithms</a>, which lists them by alphabetical order and grouped by.

Case studies of how people are already making use of AI/ML to save time and money:

   * Calculate a positive/negative sentiment score for each post in your social media account and send you an alert based on a trigger (such as negative sentiment less than 5).
   * Use text-to-speech to generate a voice message sent to international phones as voice message (via Twillo)
   * Create a recommendation engine (such as what Netflix) from the Internet Movie Database (imdb.com)

   * Predictive Maintenance data science <a target="_blank" href="https://info.microsoft.com/CO-AAIoT-WBNR-FY16-07Jul-05-Predictive-Maintenance-Registration.html">webinar</a>
   * modsy.com 3D view
   * <a target="_blank" href="https://azure.microsoft.com/en-ca/case-studies/?OCID=AID2100017_SEM_ca6fee2dd05b1ad86ab9b1a0055c7ccd:G:s&ef_id=ca6fee2dd05b1ad86ab9b1a0055c7ccd:G:s&msclkid=ca6fee2dd05b1ad86ab9b1a0055c7ccd&dclid=CKCq5IKfwewCFUWwnwodCKwLYg&term=bot">Customer and Partner Success Stories for "bot"</a>
   <br /><br />

## Azure AI Studio

<a target="_blank" href="https://ai.azure.com/">https://ai.azure.com</a>


## Microsoft's AI products portfolio

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1691674882/microsoft-ai-portfolio-1725x989_mqivy5.png"><img alt="microsoft-ai-portfolio-1725x989.png" width="1725" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1691674882/microsoft-ai-portfolio-1725x989_mqivy5.png"><br /><em>Click picture for full-page view</em>.

In the diagram above left, Microsoft makes a distinction between "Business Users & Citizen Developers" who use their Applications and "Power Platform" and geeky "Developers & Data Scientists" who use "Azure AI" in the Azure cloud.

In the diagram above, Microsoft categorize Azure's AI services these groups (all of which have GUI, CLI, and API interfaces):
   * <strong>Applied</strong> AI Services are part of automated workflows, but a service can be included among
   * <a href="#Cognitive_Services"><strong>Cognitive</strong> Services</a> of foundational utilities used to build custom apps
   * ML (Machine Learning) Platform, which <a target="_blank" href="https://wilsonmar.github.io/azure-machine-learning/">I cover in a separate article</a>
   <br /><br />

PROTIP: Several services are NOT shown in the diagram above.
The list in a <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/prepare-to-develop-ai-solutions-azure/7-understand-capabilities-of-azure-cognitive-services">Microsoft LEARN module</a> show a different order:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1707738331/ms-ai-def-1187x508_d1tpvd.png"><img alt="ms-ai-def-1187x508.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1707738331/ms-ai-def-1187x508_d1tpvd.png"></a>


<a name="CognitiveServicesList"></a>

### Cognitive Services List

The method shown in this section gives you a list of all "kinds" of services Azure currently provides for <strong>your Azure subscription</strong>.

After you've met the <a href="#Prerequisites">prerequisite setup</a> to run "az" commands on your Terminal, run this command:

   <ul><pre><strong>az cognitiveservices account list-kinds</strong></pre>
   &nbsp;
   Response:
   <pre>[
  "AIServices",
  "AnomalyDetector",
  "CognitiveServices",
  "ComputerVision",
  "ContentModerator",
  "ContentSafety",
  "ConversationalLanguageUnderstanding",
  "CustomVision.Prediction",
  "CustomVision.Training",
  "Face",
  "FormRecognizer",
  "HealthInsights",
  "ImmersiveReader",
  "Internal.AllInOne",
  "LUIS.Authoring",
  "LanguageAuthoring",
  "MetricsAdvisor",
  "Personalizer",
  "QnAMaker.v2",
  "SpeechServices",
  "TextAnalytics",
  "TextTranslation"
]
   </pre>
   </ul>

### Availability

Even though you have permissions, each specific product <a target="_blank" href="https://azure.microsoft.com/en-us/global-infrastructure/services/?products=cognitive-services&regions=canada-central,canada-east,us-central,us-east,us-east-2,us-north-central,us-south-central,us-west-central,us-west,us-west-2,norway-east">may be in preview or not available, depending on region:
<a target="_blank" href="https://azure.microsoft.com/en-us/global-infrastructure/services/?products=cognitive-services&regions=canada-central,canada-east,us-central,us-east,us-east-2,us-north-central,us-south-central,us-west-central,us-west,us-west-2,norway-east">
<img alt="microsoft-ai-avail-240108-2544x1796.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1707416863/microsoft-ai-avail-240108-2544x1796_wj2ysp.png"></a>


<a name="CognitiveServicesGroups"></a>

### Cognitive Services Grouping

PROTIP: The services <a href="#Availability">above</a> are listed in random order. 
But the table below groups services to help you quickly get to links about features, tutorials, and SDK/API references quickly.

As of this writing, in various marketing and certification training <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/what-are-cognitive-services">DOCS</a>, Azure Cognitive Services are grouped into these (which is the basis this article is arranged. Click on the underlined and bolded category name to jump to the list of services associated with it, in this order (like on the <a href="#microsofts-ai-product-portfolio">AI Products Portfolio diagram</a>:

1. <a href="#VisionServices">AI <strong>Vision</strong></a> (Visual Perception) provides the ability to use computer vision capabilities to accept, interpret, and process input from images, video streams, and live cameras. Interpret the world visually through cameras, videos, images

2. <a href="#SpeechServices">AI <strong>Speech</strong></a> - Text-to-Speech and Speech-to-Text to interpret written or spoken language, and respond in kind. This provides the ability to recognize speech as input and synthesize spoken output. The combination of speech capabilities together with the ability to apply NLP analysis of text enables a form of human-compute interaction that's become known as conversational AI, in which users can interact with AI agents (usually referred to as bots) in much the same way they would with another human.

3. <a href="#LanguageServices">AI <strong>Language</strong></a> - aka Natural language Processing (NLP) to <a href="#TranslateText">translate text (Text Analysis)</a>, etc.

4. <a href="#DecisionServices">AI <strong>Decision</strong></a> (Making) provides the ability to use past experience and learned correlations to assess situations and take appropriate actions. For example, recognizing <strong>anomalies </strong> in sensor readings and taking automated action to prevent failure or system damage.
supervised and unsupervised machine learning

5. <a href="#Other"><strong>Other</strong></a>: <a href="#OpenAI"><strong>OpenAI</strong></a> (to power your apps with large-scale AI models) is a recent add to this confusing category because of so many <a href="#Branding">branding changes</a> (Cortana, Bing, Cognitive, OpenAI, etc.)

Text analysis and conversion provides the ability to use natural language processing (NLP) to not only "read", but also generate realistic responses and extract semantic meaning from text.

<a name="Pricing"></a>

### Pricing

PROTIP: The table below groups each kind of cognitive AI service along with how many FREE transactions Microsoft provides for each service on its <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/">Cognitive Services pricing page</a>. 

IMPORTANT PROTIP: Microsoft allows its free "F0" tier to be applied to only a single Cognitive Service at a time. To remain free, you would need to rebuild a new Cognitive Service with a different "Kind" between steps.


<a name="ServicesTable"></a>

## Services Table

Within each <a href="#CognitiveServicesGroups">grouping</a>, each service is listed in the sequence within that group's LEARN module.

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="bottom" align="left"><th> Demo </th><th> Kind </th><th> <a href="#Pricing">FREE</a> </th><th> <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/">API</a> </th></tr>

   <tr valign="top"><td> <em>global</em> </td><td> "CognitiveServices"
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/">See below</a> 
      </td><td> -
      </td></tr>
   <tr valign="top"><td> ? </td><td> "AIServices"
      </td><td> ?
      </td></tr>
   <tr valign="top"><td> ? </td><td> "Internal.AllInOne"
      </td><td> ?
      </td></tr>

   <tr valign="top"><td colspan="4" align="center"> <a name="VisionServices"></a><a href="#Vision">AI Vision</a> 
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/#features">Features</a> </td><td> "ComputerVision" => AI Vision
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/custom-vision-service/">2 TPC, 10K/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fa">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/custom-vision-service/#features">Features</a> </td><td> "CustomVision.Prediction"
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/custom-vision-service/">10K predictions/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/Custom_Vision_Training_3.3/operations/5eb0bcc7548b571998fdded6">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/custom-vision-service/#features">Features</a> </td><td> "CustomVision.Training"
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/custom-vision-service/">2 TPS, 1 hour/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fa">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/products/ai-services/ai-vision#features">Features</a> </td><td> <a href="#Face">"Face"</a> => AI Vision
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/face-api/">20 TPM, 30K/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236">API</a>
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/media-services/video-indexer/#features">Features</a> </td><td> <a href="#VideoIndexer">Video Indexer</a>
      (Applied AI)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/video-indexer/">600 minutes in portal, 2400 in API</a> 
      </td><td> <a target="_blank" href="https://www.nuget.org/packages/Video.Indexer.API/">API</a>       
      </td></tr>
   <tr valign="top"><td> - </td><td> <a href="#InkRecognizer"><strike>Ink Recognizer"</strike></a>
      (DELISTED)
      </td><td> -
      </td><td> -
      </td></tr>

   <tr valign="top"><td colspan="4" align="center"> <a name="#SpeechServices"></a><a href="#Speech">AI Speech</a> 
      </td></tr>
   <tr align="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/#features">Features</a> </td><td> <a href="#SpeechServices">"SpeechServices"</a> => AI Speech
      (<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/speech-to-text/#Features">Speech-To-Text"</a>, <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/#Features">Text-to-Speech"</a>)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/">1 concurrent, 5 hours/mo.*</a> 
      </td><td> <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/rest-speech-to-text#speech-to-text-rest-api-v30" title="v3">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/speaker-recognition/#features">Features</a> </td><td> <a href="#SpeakerRecognition"><strike>"SpeakerRecognition"</strike></a>
      (DELISTED?)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/">20/min, 5K/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/speaker-recognition/#features">Features</a> </td><td> <a href="#SpeechTranslation">Speech Translation</a>
      (DELISTED?)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/">20/min, 5K/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797">API</a>       
      </td></tr>

   <tr valign="top"><td colspan="4" align="center"> <a name="LanguageServices"></a><a href="#Language">AI Language</a>
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/products/ai-services/ai-translator/#features">Features</a> </td><td> <a href="#TextTranslation">"TextTranslation"</a> => AI Translator
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/translator/">2M chars/mo.</a> 
      </td><td> <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/translator/reference/v3-0-reference">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/language-understanding-intelligent-service/#features">Features</a> </td><td> <a href="#LUIS">"LUIS"</a>
      (Language Understanding, UNLISTED)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/language-understanding-intelligent-services/">5 TPS, 10K trans/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/luis-programmatic-apis-v3-0-preview/operations/5890b47c39e2bb052c5b9c36">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/language-understanding-intelligent-service/#features">Features</a> </td><td> <a href="#LUIS.Authoring">"LUIS.Authoring"</a>
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/language-understanding-intelligent-services/">5 TPS</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/luis-programmatic-apis-v3-0-preview/operations/5890b47c39e2bb052c5b9c2f">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/qna-maker/#features">Features</a> </td><td> <a href="#QnA_Maker">"QnAMaker"</a>
      (UNLISTED)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/qna-maker/">3 TPS, 50K trans/mo, 3 docs/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fa">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/qna-maker/#features">Features</a></td><td> <a href="#QnA_Maker">"QnAMaker.v2"</a>
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/qna-maker/">3 TPS, 5K/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/5a93fcf85b4ccd136866eb37/operations/5ac266295b4ccd1554da75ff">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/#features">Features</a> </td><td><a href="#TextAnalytics">"TextAnalytics"</a> (<a href="#LanguageDetection">Detect Language</a>, <a href="#Sentiment">Sentiment</a>, <a href="#NamedEntities">Named Entities</a>, <a href="#KeyPhrases">Key Phrases</a>)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/text-analytics/">5K trans/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v2-1/operations/56f30ceeeda5650db055a3c6">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/immersive-reader/#features">Features</a> </td><td> <a href="ImmersiveReader">
   "ImmersiveReader"</a> (Applied AI)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/immersive-reader/">3M chars/mo.</a> 
      </td><td> <a target="_blank" href="https://docs.microsoft.com/en-us/rest/api/azure/">API</a>       
      </td></tr>
   <tr valign="top"><td> ? </td><td> "LanguageAuthoring"
      </td><td> ?
      </td></tr>
   
   <tr valign="top"><td colspan="4" align="center"> <a name="DecisionServices"></a><a href="#Decisions">AI Decision (Making)</a>  
      </td></tr>
   <tr align="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/products/ai-services/ai-anomaly-detector/#features">Features</a> </td><td> <a href="#AnomalyDetector">"AnomalyDetector"</a>
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/anomaly-detector/">2,000 trans/mo.</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/anomaly-detector-enterprise-edition/operations/createDataFeed">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/content-moderator/#features">Features</a> </td><td><a href="#ContentModerator">"ContentModerator"</a>
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/content-moderator/">1 TPS</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/57cf753a3f9b070c105bd2c1/operations/57cf753a3f9b070868a1f66c">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/products/ai-services/ai-content-safety/">Features</a> </td><td> "ContentSafety"
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/content-safety/">?</a>
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/metrics-advisor/#features">Features</a>  </td><td> <a href="#metrics-advisormetrics-advisor">"MetricsAdvisor"</a> (Applied AI)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/metrics-advisor/">preview</a> 
      </td><td> <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/MetricsAdvisor/operations/getActiveSeriesCount">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/products/ai-services/ai-personalizer/#features">Features</a> </td><td> <a href="#Personalizer">"Personalizer"</a>
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/personalizer/">50K trans/mo.</a> 
      </td><td> <a target="_blank" href="https://westus2.dev.cognitive.microsoft.com/docs/services/personalizer-api/operations/Rank">API</a>       
      </td></tr>

   <tr valign="top"><td colspan="4" align="center"> <a name="SearchServices"></a><a href="#Search">Search</a>
      </td></tr>
   <tr valign="top"><td> ? </td><td> <a href="#KnowledgeMining">KnowledgeMining</a> (UNLISTED)
      </td><td> ?
      </td></tr>
   <tr valign="top"><td> ? </td><td> Microsoft Bing (Applications)
      </td><td> ?
      </td></tr>
   <tr align="top"><td> <a target="_blank" href="https://www.microsoft.com/en-us/bing/apis">Features</a> </td><td> "Bing.CustomSearch"
      (UNLISTED)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/personalizer/">50K trans/mo.</a> 
      </td><td> -      
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://www.microsoft.com/en-us/bing/apis">Features</a> </td><td> "Bing.Search.v7"
      (UNLISTED)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/search-api/">3 TPS, 1000/mo</a> 
      </td><td> <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/bing-web-search/">API</a>       
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/products/ai-services/ai-search/">AI Search</a> </td><td> Cognitive Search (Applied AI)
      </td><td> ?
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/products/ai-services/ai-document-intelligence/">Features</a> </td><td> Document Intelligence = FormRecognizer (Applied AI)
      </td><td> <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/form-recognizer/">500 pages/mo.</a> 
      </td><td> <a target="_blank" href="https://go.microsoft.com/fwlink/?linkid=2217261">API</a>
      </td></tr>

   <tr valign="top"><td colspan="4" align="center"> <a name="OtherServices"></a><a href="#Other">Other</a>
      </td></tr>

   <tr valign="top"><td> ? </td><td> "HealthInsights"
      </td><td> ?
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/products/ai-services/ai-bot-service/">$</a> </td><td> <a href="#BotService">Bot Service</a> (Applied AI)
      </td><td> ?
      </td></tr>
   <tr valign="top"><td> <a target="_blank" href="https://azure.microsoft.com/en-us/products/ai-services/openai-service/">Features</a> </td><td> <a href="#OpenAI">OpenAI Service</a> 
      </td><td> <a target="_blank" href="https://learn.microsoft.com/en-us/azure/ai-studio/how-to/sdk-install?tabs=macos">SDK</a>
      </td></tr>
   </table>

Links are provided for each service to its Features and API/SDK pages.

<hr />

<a name="Branding"></a>

## Microsoft's Confusing Branding

Microsoft has invented several names to refer to their AI offerings:

Cortana => Bing => Cognitive Services => OpenAI => Generative AI => AI Language

The 2023 branding for Microsoft's AI services to mimic human intelligence is <a target="_blank" href="https://azure.microsoft.com/en-us/products/ai-services/ai-language">"AI Language"</a>, which includes <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/">Cognitive Services</a> and <a target="_blank" href="https://azure.microsoft.com/en-us/services/search/">Bing</a>.

<a target="_blank" href="https://www.youtube.com/watch?v=KxwjnuhNVIY&list=RDCMUCFtEEv80fQVKkD4h1PF-Xqw&index=33">"Cortana"</a> was the brand-name for Microsoft's AI. Cortana is the name of the fictional artificially intelligent character in the Halo video game series. Cortana was going to be Microsoft's answer to Alexa, Siri, Hey Google, and other AI-powered personal assistants which respond to voice commands controlling skills that turn lights on and off, etc. However, since 2019, Cortana is considered a "skill" (app) that Amazon's Alexa and Google Assistant can call, working across multiple platforms.

For <a href="#Search">Search, the <strong>Bing</strong></a> "Bing" brand, before OpenAI was separated out from  "Cognitive Services" to its own at <a target="_blank" href="https://docs.microsoft.com/en-us/azure/search/">https://docs.microsoft.com/en-us/azure/search</a>, although it's used in "Conversational AI" using an "agent" (<a href="#BotService">Azure Bot Service</a>) to participate in (natural) conversations. BTW: <a target="_blank" href="https://www.theverge.com/2019/7/25/20727129/microsoft-cortana-features-strategy-report">in 2019</a> Cortana decoupled from Windows 10 search.

Since October 31st, 2020, <a target="_blank" href="https://blogs.bing.com/search-quality-insights/october-2020/Bing-Search-APIS-are-Transitioning">Bing Search APIs</a> transitioned from Azure Cognitive Services Platform to <a target="_blank" href="https://aka.ms/bingapigetstarteddoc">Azure Marketplace</a>. The Bing Search v7 API subscription covers several Bing Search services (Bing Image Search, Bing News Search, Bing Video Search, Bing Visual Search, and Bing Web Search),

<a target="_blank" href="https://azure.microsoft.com/en-us/services/iot-edge/">Azure IoT (Edge) Services</a> are separate. 

* https://www.computerworld.com/article/3252218/cortana-explained-why-microsofts-virtual-assistant-is-wired-for-business.html 

PROTIP: As of Jan 8, 2024, https://aka.ms/language-studio has "coming soon" for Video and Learn, and "preview" for several services. Essentially Microsoft has two separate offerings by different groups:
   * https://learn.microsoft.com/en-us/azure/ai-services/
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations">Microsoft has</a> three service "Providers":

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Asset type </th><th> Resource provider namespace/Entity </th><th> Abbre- viation </th></tr>
<tr valign="top"><td> <a href="#Cognitive_Services">Azure Cognitive Services</a> </td><td> <a href="#Cognitive_Services"> Microsoft.CognitiveServices/accounts</a> </td><td> cog- </td></tr>
<tr valign="top"><td> <a target="_blank" href="https://wilsonmar.github.io/azure-machine-learning/">Azure Machine Learning workspace</a> </td><td>   Microsoft.MachineLearningServices/workspaces </td><td> mlw- </td></tr>
<tr valign="top"><td> Azure Cognitive Search </td><td> Microsoft.Search/searchServices </td><td> srch- </td></tr>
</table>


## Microsoft's History with AI

In April 2018 Microsoft reorganized into two divisions to offers AI:

   * <a target="_blank" href="https://www.microsoft.com/en-us/research/project/machine-learning-edge/">The research division</a>, headed by <a target="_blank" href="https://www.linkedin.com/in/harryshum/">Harry Shum</a>, put AI into Bing search, Cortana voice recognition and text-to-speech, ambient computing, and robotics. See <a target="_blank" href="https://www.youtube.com/watch?v=_Hg9QKBhERw">Harry's presentation in 2016</a>.

   * Microsft's "computing fabric" offerings, led by <a target="_blank" href="https://www.linkedin.com/in/guthriescott/">Scott Guthrie</a>, makes AI services available for those building customizable machine learning with speech, language, vision, and knowledge services. Tools offered include Cognitive Services and Bot Framework, deep-learning tools like Azure Machine Learning, Visual Studio Code Tools for AI, and Cognitive Toolkit.

At Build 2018, Microsoft announced <a target="_blank" href="https://www.microsoft.com/en-us/research/publication/serving-dnns-real-time-datacenter-scale-project-brainwave/">Project Brainwave</a> to run Google's Tensorflow AI code and Facebook's Caffe2, plus Microsoft's own <a target="_blank" href="https://docs.microsoft.com/en-us/cognitive-toolkit/index">"Cognitive Toolkit" (CNTK)</a>.
   * <a target="_blank" href="https://docs.microsoft.com/en-us/cognitive-toolkit/brainscript-basic-concepts">BrainScript</a> uses a dynamically typed C-like syntax to express neural networks in a way that looks like math formulas. Brainscript has a <a target="_blank" href="https://docs.microsoft.com/en-us/cognitive-toolkit/BrainScript-and-Python-Performance-Profiler">Performance Profiler</a>.

   * Hyper-parameters are a separate module (alongside Network and reader) to perform SGD (stochastic-gradient descent).
   <br /><br />

Microsoft has advanced hardware:

   <ul>[<a target="_blank" href="https://www.microsoft.com/en-us/research/publication/serving-dnns-real-time-datacenter-scale-project-brainwave/">
   This pdf</a> white paper says the "high-performance, precision-adaptable FPGA soft processor is at the heart of the system, achieving up to 39.5 TFLOPs of effective performance at Batch 1 on a state-of-the-art Intel Stratix 10 FPGA."
   Microsoft's use of field programmable gate arrays (FPGA) calculates AI reportedly "five times faster than Google's TPU hardware".

   "Each FPGA operates in-line between the server’s network interface card (NIC) and the top-of-rack (TOR) switch, enabling in-situ processing of network packets and point-to-point connectivity between hundreds of thousands of FPGAs at low latency (two microseconds per switch hop, one-way)."
   </ul>

<a target="_blank" href="https://www.amazon.com/Microsoft-Conversational-Platform-Developers-End-ebook/dp/B08WRNS6Q7/">Microsoft Conversational AI Platform for Developers</a> is a 2021 book published by Apress by <a target="_blank" href="https://bisser.io/about/">Stephan Bisser</a> of 
<a target="_blank" href="https://www.siili.com/">Siili Solutions</a> in Finland. The book covers Microsoft's Bot Framework, LUIS, QnA Maker, and Azure Cognitive Services. https://github.com/orgs/BotBuilderCommunity/dashboard

<a target="_blank" href="https://www.youtube.com/c/MicrosoftMechanicsSeries">Microsoft Mechanics YouTube channel</a> is focused on Microsoft's AI work.

<a target="_blank" href="https://www.youtube.com/watch?v=Rk3nTUfRZmo">VIDEO</a>:
What runs ChatGPT? Inside Microsoft's AI supercomputer
   * Microsoft's own Megatron-Turing model has 530 billion parameters
   * [3:05] Onnx runtime for model portability
   * [3:08] Deepspeed to componentize models has become the defacto framework for distributed training
   * 285,000 AMD Infiniband CPU Cores & 10,000 NVIDIA V100 Tensor Core GPUs Infiniband connected to Quantum-2 Infiniband via NVLink
   * Bisectional bandwidth to 3.6 TBps per server
   * [10:45] Low Rank Adaptive (LoRA) Fine Tuning to update only portions of a model
   <br /><br />

NOTE: <a target="_blank" href="https://en.wikipedia.org/wiki/Wikipedia:Size_of_Wikipedia">Wikipedia</a> has 6,781,394 articles containing 4.5 billion words. <a target="_blank" href="">English Wiktionary</a> contains 1,439,188 definitions. <a target="_blank" href="https://www.wikiwand.com/en/List_of_dictionaries_by_number_of_words">Webster's Third New International Dictionary</a> has 470,000 English words.

https://azure.microsoft.com/en-us/services/virtual-machines/data-science-virtual-machines/


Microsoft Reactor ran a 
<a target="_blank" href="https://www.microsoft.com/en-US/cloudskillschallenge/ai/registration/2023/">"Skills Challenge"</a> to reward a badge for those who complete an AI tutorial.

https://learn.microsoft.com/en-us/training/challenges 
   * AI Builder
   * Machine Learning
   * MLOps
   * Cognitive 
   <br /><br />

https://www.youtube.com/watch?v=ss-kyogPRNo
by Carlotta



<hr />

<a name="Competitors"></a>

## Competitive futures

Microsoft competes for talent with Google, Amazon, IBM, China's Tencent, and many start-ups.

BTW, by contrast, Bernard Marr <a target="_blank" href="https://www.forbes.com/sites/bernardmarr/2018/02/14/the-key-definitions-of-artificial-intelligence-ai-that-explain-its-importance/#22db12bb4f5d">identified</a> <a target="_blank" href="https://www.bernardmarr.com/default.asp?contentID=2191">four types of AI</a> evolving: 

   * "reactive" machines (such as Spam filters and the Netflix recommendation engine) are not able to learn or conceive of the past or future, so it responds to identical situations in the exact same way every time.

   * "limited memory" AI absorbs learning data and improve over time based on its experience, using historical data to make predictions. It's similar to the way the human brain’s neurons connect. Deep-learning algorithms used today is the AI that is widely used and being perfected today.

   * "theory of mind" is when AI acquires decision-making capabilities equal to humans, and have the capability to recognize and remember emotions, and adjust behavior based on those emotions.

   * "self-aware", also called artificial superintelligence (ASI), is "sentient" understanding of of its own needs and desires.


<hr />

<a name="Prerequisites"></a>

## Prerequisites to this document

This document assumes that you have done the following

1. <a target="_blank" href="https://wilsonmar.github.io/azure-onboarding/">Get onboarded to a Microsoft Azure subscriptions</a> and learn Portal GUI menu keyboard shortcuts.

1. Setup a CLI scripting environment in shell.azure.com.
<a target="_blank" href="https://wilsonmar.github.io/mac-setup/">like I describe in my mac-setup page</a>

1. Use CLI to <a href="#CognitiveServices">Create a Cognitive Service</a> to get keys to call the first REST API from among <a target="_blank" href="https://github.com/Azure-Samples/cognitive-services-REST-api-samples">sample calls</a> to <a target="_blank" href="https://docs.microsoft.com/en-us/rest/api/azure/">many REST APIs</a>: the <a href="#TextTranslation">Translator Text API</a>.

1. Setup <strong>PowerShell scripts</strong>

1. On Windows 11, install Edge according to 

   https://microsoftlearning.github.io/mslearn-ai-services/Instructions/setup.html

   The setup is for this LAB pop-up:

   https://learn.microsoft.com/en-us/training/modules/create-manage-ai-services/5a-exercise-ai-services



## Learning Sequence

This document covers:

1. <a href="#ShutDownRGs">Automatically shut down Resource Groups of a Subscription</a> by <strong>creating a Logic App</strong>.

1. Run an API connecting to an established endpoint (SaaS) you don't need to setup:
Bing Search.

1. Create Functions

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



<hr />


<a name="ShutDownRGs"></a>

## Automation necessary for PaaS

IMPORTANT PROTIP: As of this writing, Microsoft Azure does NOT have a full SaaS offering for every AI/ML service. You are required to <strong>create your own computer instances</strong>, and thus manage machine sizes (which is a hassle). Resources you create <strong>continue to cost money</strong> until you shut them down.

So after learning to set up the first compute service, we need to cover <strong>automation</strong> to <strong>shut them all down</strong> while you sleep.

So that you're not tediously recreating everything everyday, this tutorial focuses on automation scripts (CLI Bash and PowerShell scripts) to create compute instances, publish results, then shut itself down. Each report run overwrites files from the previous run so you're not constantly piling up storage costs. 

Another reason for being able to rebuild is that you if you find that the pricing tier chosen is no longer suitable for your solution, you must create a new Azure Cognitive Search resource and recreate all indexes and objects.

When you use my <a target="_blank" href="https://github.com/wilsonmar/azure-quickly/">Automation scripts at https://github.com/wilsonmar/azure-quickly/ to create resources the way you like</a>, using "Infrastructure as Code", so you can throw away any Subscription and begin anew quickly.

My scripts also makes use of a more secure way to store secrets than inserting them in code that can be checked back into GitHub.

Effective deletion hygiene is also good to see how your instances behave when it takes advantage of <strong>cheaper spot instances</strong> which can disappear at any time. 
This can also be used for "chaos engineering" efforts.

To verify resource status and to discuss with others, you still need skill at clicking through the Portal.azure.com, ML.azure.com, etc.

References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=lu7a5RDeJU0" title="by Build5Nines">VIDEO</a>: To release IP address, don't stop machines, but delete the resource.

   * <a target="_blank" href="https://www.youtube.com/watch?v=Rrx7NzPugaE">VIDEO</a>: <a target="_blank" href="https://dev.to/azure/keep-your-azure-subscription-clean-automatically-mmi">shut down automatically all your existing VMs</a> (using a PowerShell script called by a scheduled Logic App), by <a target="_blank" href="https://www.youtube.com/channel/UCAr20GBQayL-nFPWFnUHNAA">Frank Boucher</a> at <a target="_blank" href="https://github.com/FBoucher/AzurePowerTools">github.com/FBoucher</a>

   * <a target="_blank" href="https://www.codeisahighway.com/effective-ways-to-delete-resources-in-a-resource-group-on-azure/">VIDEO</a>

   * <a target="_blank" href="https://azure.microsoft.com/en-us/blog/announcing-auto-shutdown-for-vms-using-azure-resource-manager/">Auto-shutdown by Resource Manager</a> <a target="_blank" href="https://azure.microsoft.com/en-us/updates/set-auto-shutdown-within-a-couple-of-clicks-for-vms-using-azure-resource-manager/" title="November 22, 2016">on a schedule</a> is only for VMs in DevOps

   * https://www.c-sharpcorner.com/article/deploy-a-google-action-on-azure/

   * <a target="_blank" href="https://automys.com/library/asset/scheduled-virtual-machine-shutdown-startup-microsoft-azure" title="2015"> start/stop by an Automation Acount Runbook</a> for specific tags attached to different Resource Groups: Assert: "AutoshutdownSchedule: Tuesday" run every hour.
   https://translate.google.com/translate?sl=auto&tl=en&u=https://github.com/chomado/GoogleHomeHack">
   <br /><br />

<hr />

## Principled AI vetting

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/get-started-ai-fundamentals/7-understand-responsible-ai">LEARN</a>:

Using Microsoft's API algorithms and data (such as celebrity faces, landmarks, etc.) means there has be some vetting by Microsoft's <a target="_blank" href="https://www.microsoft.com/research/group/fate/">FATE (Fairness, Accountability, Transparency, and Ethics)</a> research group:
<img width="1126" height="610" alt="az-ai-principled-1126x610" src="https://user-images.githubusercontent.com/300046/117167864-e1c4ee00-ad84-11eb-88b1-4f685155a64f.png">

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/azure-artificial-intelligence/5-ai-impact-and-ethics">
Microsoft's ethical principles</a> guiding the development and use of artificial intelligence with people:

   * Fairness: AI systems should treat all people fairly.
   * Reliability & Safety: AI systems should perform reliably and safely.
   * Privacy & Security: AI systems should be secure and respect privacy.
   * Inclusiveness: AI systems should empower everyone and engage people.
   * Transparency: AI systems should be understandable.
   * Accountability: AI systems should have algorithmic accountability.
   <br /><br />

1. DEMO: Hands-on with AI/Guidelines for Human-AI Interaction: Click each card to see examples of each guideline

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
   * <a target="_blank" href="https://www.youtube.com/playlist?list=PLl8yjZLsL_WobPtlCCIRgoU91Geokx7qK">VIDEO</a>: Ethics an Artificial Intelligence at the DotNet Day Zurich May 28th, 2019, by Laurent Bugnion.


<hr />

## Azure AI certifications

Among <a target="_blank" href="https://wilsonmar.github.io/azure-certifications">Microsoft's Azure professional certifications</a>:

   * Previous exam 774 is now been retired. It was based on <a target="_blank" href="https://www.youtube.com/watch?v=eJOv-TfhhzQ">VIDEO</a>: <a target="_blank" href="https://services.azureml.net/">Azure Machine Learning Studio (classic)</a> web services, which reflected "All Microsoft all the time" using proprietary "pickle" (pkl) model files. <a target="_blank" href="https://www.coursera.org/learn/predictive-modelling-azure-machine-learning-studio/home/welcome">Classes referencing it</a> are now obsolete.

   * <a href="#AI-900">AI-900</a> is the entry-level exam ($99). It's a pre-requisite for:

   * <a href="#AI-102">AI-102</a> ($165 with free re-cert after 1-year) replaced<br /><a href="#AI-100"><strike>AI-100</strike></a> (with free re-cert after 2-years) on June 30, 2021. The shift is from infrastructure (KeyVault, AKS, Stream Analytics) to programming C#, Python, and curl commands.
   AI-102 focuses on the use of <strong>pre-packaged</strong> services for AI development.

   * <a target="_blank" href="https://github.com/MicrosoftLearning/dp-090-databricks-ml">DP-090</a> and <a target="_blank" href="https://microsoftlearning.github.io/dp-090-databricks-ml/">this LAB</a> goes into  implementing a Machine Learning Solution with <a target="_blank" href="https://wilsonmar.github.io/databricks/">Databricks</a>. 
   
   * That's covered by <a target="_blank" href="https://wilsonmar.github.io/azure-machine-learning/#DP-100">exam DP-100</a> covers development of custom models using Azure Machine Learning. 
   
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-203">DP-203 Data Engineering on Microsoft Azure</a> goes into how to use machine learning within <strong>Azure Synapse Analytics</strong>.


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
   * https://www.whizlabs.com/learn/course/designing-and-implementing-an-azure-ai-solution/
   <br /><br />

<a target="_blank" href="https://www.aguidetocloud.com/full-courses/ai900fullcourse">2-hour AGuideToCloud video class by Susanth Sutheesh</a>


<a name="AI-102"></a>

### AI-102

AI-102 is intended for <strong>software developers</strong> wanting to build <strong>AI-infused</strong> applications. 

<a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/">
https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer</a>

First setup development environments:
   * Visual Studio Code and add-ons for C# and Python, 
   * NodeJs for Bot Framework Composer and Bot Framework Emulator
   <br /><br />

<a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-102/">AI-102 exam, as defined at Microsoft's LEARN</a> has free written tutorials on each of the exam's domains:

   * Plan and manage an Azure <a href="#CognitiveServices">AI Solution <strike>Cognitive Services</strike></a>  (15-20%)
   * Implement decision support solutions (10–15%)
   * Implement <a href="#ComputerVision">computer vision</a> solutions (15–20%)
   * Implement <a href="#NLP">natural language processing</a> solutions (30–35%)
   * Implement <a href="#KnowledgeMining">knowledge mining</a> and <a href="#DocIntell">document intelligence</a> solutions (10–15%)
   * Implement <a href="#Conversational">generative AI</a> solutions (10–15%)
   <br /><br />

PROTIP: Unlike the AI-100 (which uses Python Notebooks), <a target="_blank" href="https://microsoftlearning.github.io/AI-102-AIEngineer/">hands-on exercises at https://microsoftlearning.github.io/AI-102-AIEngineer/</a> in Microsoft's <a target="_blank" href="https://learn.microsoft.com/en-us/training/courses/ai-102t00">5-day live course AI-102T00: Designing and Implementing a Microsoft Azure AI Solution</a> (with cloud time) consists of C# and Python programs at https://github.com/MicrosoftLearning/AI-102-AIEngineer (by <a target="_blank" href="https://www.linkedin.com/in/graemesplace/">Graeme Malcolm</a>) was archived on Dec 23, 2023 after its content was distributed among these repos:

* https://microsoftlearning.github.io/mslearn-ai-services/ <br /><a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-services">https://github.com/MicrosoftLearning/mslearn-ai-services</a>
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-services/blob/main/Instructions/Exercises/01-use-azure-ai-services.md">01-use-azure-ai-services.md</a>
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-services/blob/main/Instructions/Exercises/02-ai-services-security.md">02-ai-services-security.md</a>
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-services/blob/main/Instructions/Exercises/03-monitor-ai-services.md">03-monitor-ai-services.md</a>
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-services/blob/main/Instructions/Exercises/04-use-a-container.md">04-use-a-container.md</a>
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-services/blob/main/Instructions/Exercises/05-personalizer-exercise.md">05-personalizer-exercise.md</a>
   <br /><br />

1. <a href="#VisionTutorials">AI Vision Tutorials</a>
2. <a href="#LanguageTutorials">AI Language Tutorials</a>
3. AI Language
4. AI Decision Making
5. Other: <a href="#OpenAITutorials">OpenAI Tutorials</a>

* <a href="#knowledge-miningTutorials">knowledge-mining Tutorials</a>
* https://microsoftlearning.github.io/mslearn-ai-document-intelligence/ 
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-document-intelligence/tree/main/Labfiles">https://github.com/MicrosoftLearning/mslearn-ai-document-intelligence</a>
   * Use prebuilt Document Intelligence models
   * Extract Data from Forms
   * Create a composed Document Intelligence model
   <br /><br />

DALL-E image generation

https://learn.microsoft.com/en-us/training/courses/ai-102t00
modules:
* Prepare to develop AI solutions on Azure
* Create and consume Azure AI services
* Secure Azure AI services
* Monitor Azure AI services
* Deploy Azure AI services in containers
<br /><br />

On Coursera:
   <a target="_blank" href="https://www.coursera.org/learn/developing-ai-applications-azure">Coursera video course: Developing AI Applications on Azure</a> by Ronald J. Daskevich at LearnQuest is structured for 5 weeks.
   Coursera's videos shows the text at each point of its videos.
   NOTE: It still sends people to https://notebooks.azure.com and covers <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/overview">Microsoft's TDSP (Team Data Science Process)</a> <a target="_blank" href="https://www.coursera.org/learn/developing-ai-applications-azure/lecture/Qd5fj/tdsp-stages">VIDEO</a>:
   1. Business understanding (Charter, Objectives, Data sources, Data dictionaries)
   2. Data acquisition and understanding (Clean dataset, pipeline)
   3. Modeling
   4. Deployment model for use (testing) Flow: entry script to accept requests and score them, Deployment configs
   5. Customer Acceptance
   <br /><br />

Resources:
   * https://www.whizlabs.com/microsoft-azure-certification-ai-102/  $49.90
   * <a target="_blank" href="https://cloudacademy.com/quiz/38235/">Preview 45 min. Exam: Designing and Implementing an Azure AI Solution (AI-102)</a>
   * https://medium.com/version-1/mastering-azure-ai-certifications-passing-the-ai-100-and-ai-102-exams-1st-time-c8a8fe223fcc
   <br /><br />


<a name="AI-100"></a>

### AI-100 (RETIRED)

On June 30, 2021 Microsft retired the AI-100 exam in favor of <a href="#AI-102">AI-102 exam</a> (avilable in $99 beta since Feb 2021). <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/ai-100">AI-100 exam, as defined at Microsoft's LEARN</a> has free written tutorials on each of the exam's domains:

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

Guy Hummel's <a target="_blank" href="https://cloudacademy.com/learning-paths/ai-100-exam-preparation-designing-and-implementing-an-azure-ai-solution-1-1334/">CloudAcademy.com</a> 7hr AI-100 video course.

<a target="_blank" href="https://mckinsey.udemy.com/course/ai-100-designing-and-implementing-an-azure-ai-solution/">McK</a> <a target="_blank" href="https://www.udemy.com/course/ai-100-designing-and-implementing-an-azure-ai-solution/">Udemy</a> by Anand Rao Nednur

Raza Salehi created on Pluralsight.com <a target="_blank" href="https://app.pluralsight.com/paths/certificate/microsoft-azure-ai-engineer-ai-100">a series for Microsoft Azure AI Engineer (AI-100)</a>

Practice tests:
   * https://www.whizlabs.com/learn/course/microsoft-azure-ai-100/
   * <a target="_blank" href="https://ravikirans.com/ai-102-azure-exam-study-guide/">Ravi's links</a> still refer to AI-100


<hr />

<a name="SampleMLCode"></a>

## Sample ML Code

PROTIP: AI-102 is heavy on questions about coding.

Samples (unlike examples) are a more complete, best-practices solution for each of the snippets. They're better for integrating into production code. 

<a target="_blank" href="https://github.com/Azure-Samples/">github.com/Azure-Samples</a>
from Microsoft offers samples code to use Cognitive Services REST API by each language:

   * <a target="_blank" href="https://github.com/Azure-Samples/cognitive-services-dotnet-sdk-samples">.NET C#</a>
   * <a target="_blank" href="https://github.com/Azure-Samples/cognitive-services-java-sdk-samples">Java</a>
   * <a target="_blank" href="https://github.com/Azure-Samples/cognitive-services-node-sdk-samples">NodeJs</a>
   * <a target="_blank" href="https://github.com/Azure-Samples/cognitive-services-python-sdk-samples">Python</a>
   * <a target="_blank" href="https://github.com/Azure-Samples/azure-sdk-for-go-samples/tree/master/cognitiveservices">Go</a>
   <br /><br />

https://docs.microsoft.com/en-us/samples/azure-samples/azure-sdk-for-go-samples/azure-sdk-for-go-samples/

A complete sample app is Microsoft' Northwinds Traders consumer ecommerce store.
<a target="_blank" href="https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/northwind-install">install</a>

IMPORTANT: Cognitive Services SDK Samples for:
   * <a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure-samples/cognitive-services-node-sdk-samples/cognitive-services-node-sdk-samples/">(Node)</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure-samples/cognitive-services-python-sdk-samples/cognitive-services-python-sdk-samples/">Python</a> at https://github.com/Azure-Samples/cognitive-services-python-sdk-samples.git
   * <a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure-samples/cognitive-services-java-sdk-samples/cognitive-services-java-sdk-samples/">Java</a>

Tim Warner's <a target="_blank" href="https://github.com/timothywarner/ai100">https://github.com/timothywarner/ai100</a> includes <a target="_blank" href="https://github.com/timothywarner/ai100/tree/master/powershell-cli">Powershell scripts</a>:

   * keyvault-soft-delete-purge.ps1
   * keyvault-storage-account.ps1
   * python-keyvault.py
   * ssh-to-aks.md - SSH into AKS cluster nodes
   * xiot-edge-windows.ps1
   * autoprice.py
   <br /><br />

Among <a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure/azureml-examples/azure-machine-learning-examples/">Azure Machine Learning examples</a> is a CLI at
https://github.com/Azure/azureml-examples/tree/main/cli


   PROTIP: CAUTION: Each service has a different maturity level <a target="_blank" href="https://azure.microsoft.com/en-us/downloads/">in its documentation at azure.microsoft.com/en-us/downloads</a>, such as <a target="_blank" href="https://azure.github.io/azure-sdk/releases/latest/python.html">SDK for Python</a> open-sourced at <a target="_blank" href="   https://github.com/azure/azure-sdk-for-python/">github.com/azure/azure-sdk-for-python</a>, described at <a target="_blank" href="https://docs.microsoft.com/en-us/azure/developer/python/">docs.microsoft.com/en-us/azure/developer/python</a>.




<hr />

<a name="Vision"></a>

## Vision services

<a name="VisionTutorials"></a>

### Vision Tututoral

https://microsoftlearning.github.io/mslearn-ai-vision/ 
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-vision">https://github.com/MicrosoftLearning/mslearn-ai-vision</a>

   * Analyze Images with Azure AI Vision
   * Classify images with an Azure AI Vision custom model
   * Detect Objects in Images with Custom Vision
   * Detect and Analyze Faces
   * Read Text in Images
   * Analyze Video with <a href="#VideoAnalyzer">Video Analyzer</a>
   * Classify Images with Azure AI <a href="#CustomVision">Custom Vision</a>
   <br /><br />


### Use GUI

   References:
   * aka.ms/cognitivevision
   <br /><br />

1. In a web browser, navigate to Vision Studio:

   <a target="_blank" href="https://portal.vision.cognitive.azure.com/gallery/featured"><strong>https://portal.vision.cognitive.azure.com/gallery/featured</strong></a>

1. Sign in.
1. Select a Subscription.

   <a target="_blank" href="https://www.youtube.com/watch?v=4shB_qdU3Gs" title="by Matt McSpirit">VIDEO</a>: 
   The menu of AI Vision service categories uses Microsoft's "Florence foundational model" (new in 2023)
   models trained with an "open world" of billions of images combined with a large language model.
   That enables the identification of objects and their location in a frame such as this:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1701223998/microsoft-ai-frame-915x343_m56sm9.pnghttps://res.cloudinary.com/dcajqrroq/image/upload/v1701223998/microsoft-ai-frame-915x343_m56sm9.png"><img alt="microsoft-ai-frame-915x343.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1701223998/microsoft-ai-frame-915x343_m56sm9.png"></a>

1. Click each, then "Try it out":

   Optical character recognition (OCR):
   * Extract text from images - Extract printed and handwritten style text from images and documents for supported languages.
   <br /><br />
   Spatial analysis - Video Retrieval and Summary:
   * Video Retrieval and Summary - Generate a brief summary of the main points shown in video. Locate specific keywords and jump to the relevant section.
   * Count people in an area - Analyze real-time or recorded video to count the number of people in a designated zone in a camera's field of view.
   * Detect when people cross a line - Analyze real-time streaming video to detect when a person crosses a line in the camera's field of view.
   * Detect when people enter/exit a zone - Analyze real-time streaming video to detect when a person enters or exits a zone in the camera's field of view.
   * Monitor social distancing - Analyze real-time streaming video that tracks when people violate a distance rule in the camera's field of view.
   <br /><br />
   * <a href="#Face">Face</a> - Detect faces in an image
   <br /><br />
   Image analysis - click "Try it out" on each of these:
   * Recognize products on shelves - Identify products on shelves, gaps in product availability, and compliance for planograms.
   * Customize models with images - Create custom image classification and object detection models with images using Vision Studio and Azure ML.
   * Search photos with image retrieval - Retrieve specific moments within your photo album. For example, you can search for: a wedding you attended last summer, your pet, or your favorite city.
   * Add dense captions to images - Generate human-readable captions for all important objects detected in your image.
   * Remove backgrounds from images - Easily remove the background and preserve foreground elements in your image.
   * Add captions to images - Generate a human-readable sentence that describes the content of an image.
   * Detect common objects in images - Recognize the location of objects of interest in an image and assign them a label.
   * Extract common tags from images - Use an AI model to automatically assign one or more labels to an image.
   * Detect sensitive content in images - Detect sensitive content in images so you can moderate their usage in your applications.
   * Create smart-cropped images - Create cropped image thumbnails based on the key areas of a larger image.
   <br /><br />

1. Click "I acknowledge that this service will incur usage to my Azure account."
1. Select a Region (East US, West Europe, West US, or West US 2)

   The "cog-ms-learn-vision" resource is created for you automatically.

1. Click "View all resources"
1. Check "cog-ms-learn-vision" created for you automatically.
1. Click "Select as default resource".
1. Close.


### Use REST API

https://github.com/Azure-Samples/cognitive-service-vision-model-customization-python-samples

   https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Labs/05-ocr.html


1. On the Getting started with Vision landing page, select Optical character recognition, and then the Extract text from images tile.

1. Under the Try It Out subheading, acknowledge the resource usage policy by reading and checking the box.

1. download ocr-images.zip by selecting 

   https://aka.ms/mslearn-ocr-images 

1. Open the folder.

1. On the portal, select Browse for a file and navigate to the folder on your computer where you downloaded ocr-images.zip. Select advert.jpg and select Open.

1. review what is returned:

   In Detected attributes, any text found in the image is organized into a hierarchical structure of regions, lines, and words.

   On the image, the location of text is indicated by a bounding box, as shown here:



App for the blind: <a target="_blank" href="https://www.youtube.com/watch?v=R2mC-NUAmMk&list=RDCMUCFtEEv80fQVKkD4h1PF-Xqw&start_radio=1">
VIDEO</a>: <a target="_blank" href="https://www.youtube.com/watch?v=bqeQByqf_f8&list=RDCMUCFtEEv80fQVKkD4h1PF-Xqw&index=2">INTRO</a>: <a target="_blank" href="https://www.seeingai.com/">SeeingAI.com</a>.
Permissions for the "See It All" app are for its internal name "Mt Studio Web Prod".

<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/paths/explore-computer-vision-microsoft-azure/">
https://docs.microsoft.com/en-us/learn/paths/explore-computer-vision-microsoft-azure</a>

HISTORY: In 2014, Microsoft showed off its facial recognition capabilities with a website (how-old.net which now is owned by others) 
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


<a name="ComputerVision"></a>

## Computer Vision

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/">Computer Vision"</a> analyzes images and video to extract descriptions, tags, objects, and text.
<a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fa">API Reference</a>, 
<a target="_blank" href="https://docs.microsoft.com/azure/cognitive-services/computer-vision/">DOCS</a>, <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/detect-objects-images-custom-vision/1-introduction">INTRO</a>:

   ![az-ai-produce-objects-372x278](https://user-images.githubusercontent.com/300046/116675643-46d2ab00-a963-11eb-804a-9b1dd5fb6161.png)

* Read the text in the image
* Detects Objects
* Identifies Landmarks
* Categorize image
<br /><br />

<a target="_blank" href="https://flow.microsoft.com/en-us/connectors/shared_cognitiveservicescomputervision/computer-vision-api/">Flow API samples</a>

https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/quickstarts-sdk/client-library?tabs=visual-studio&pivots=programming-language-csharp
READ

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


<a name="CustomVision"></a>

### Custom Vision

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/custom-vision-service/">Azure Custom Vision</a> trains custom models referencing custom (your own) images. Custom vision has two <strong>project types</strong>:

   * <strong>Image classification</strong> is a machine-learning based form of computer vision in which a model is trained to categorize images based on their (class or) primary subject matter they contain. 

   * <strong>Object detection</strong> goes further than classification to identify the "class" of  individual objects within the image, and to return the <strong>coordinates</strong> of a bounding box that indicates the object's location.
   <br /><br />

HANDS-ON: <a target="_blank" href="https://microsoftlearning.github.io/mslearn-ai-vision/Instructions/Exercises/07-custom-vision-image-classification(legacy).html">LEARN hands-on lab</a>
   
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-vision/tree/main/Labfiles/07-custom-vision-image-classification">Labfiles</a> for C-Sharp and Python.


<a target="_blank" href="https://github.com/microsoft/hackwithazure/tree/master/workshops/ml-endangered-animal-detector">LAB</a>:
Steps:
   1. Create state-of-the-art computer vision models.
   2. Upload and tag training images.
   3. Train classifiers for active learning.
   4. Perform image prediction to identify probable matches to a trained model.
   5. Perform object detection to locate elements within an image and return a bounding box.
   <br /><br />


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

https://docs.microsoft.com/en-us/learn/modules/evaluate-requirements-for-custom-computer-vision-api/3-investigate-service-authorization
Custom Vision APIs use two subscription keys, each control access to an API:
   * A training key to access API members which train the model.
   * A prediction key to access API members which classify images against a trained model.
   <br /><br />

https://docs.microsoft.com/en-us/learn/modules/evaluate-requirements-for-custom-computer-vision-api/4-examine-the-custom-vision-prediction-api

References:
   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/computer-vision-v3-ga/operations/56f91f2e778daf14a499f21f">CV API</a>


<a name="Face"></a>

## Face => AI 

<a target="_blank" href="https://www.youtube.com/watch?v=abhqxG1nSGg">VIDEO</a>:
<a target="_blank" href="https://www.youtube.com/watch?v=KCSyRO0KotA">API DEMO</a>:

Azure "Face" is used to build face detection and facial recognition solutions in five categories:
   * Face Verification: Check the likelihood that two faces belong to the same person.
   * Face Detection: Detect human faces in an image.
   * Face Identification: Search and identify faces.
   * Face Similarity: Find similar faces.
   * Face Grouping: Organize unidentified faces into (face list) groups, based on their visual similarity.
   <br /><br />

   NOTE: On June 11, 2020, Microsoft announced that it will not sell facial recognition technology to police departments in the United States until strong regulation, grounded in human rights, has been enacted. As such, customers may not use facial recognition features or functionality included in Azure Services, such as Face or Video Indexer, if a customer is, or is allowing use of such services by or for, a police department in the United States.

<a name="FaceTutorials"></a>

### FaceTutorials

HANDS-ON: <a target="_blank" href="https://microsoftlearning.github.io/mslearn-ai-vision/Instructions/Exercises/04-face-service.html">LEARN tutorial</a> using <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-vision/tree/main/Labfiles/04-face">these Lab files</a>.

A face location is face coordinates -- a rectangular pixel area in the image where a face has been identified.

The Face API can return up to 27 landmarks for each identified face that you can use for analysis.
Azure allows a person to can have up to 248 faces.
There is a 6 MB limit on the size of each file (jpeg, png, gif, bmp).

Face attributes are predefined properties of a face or a person represented by a face. The Face API can optionally identify and return the following types of attributes for a detected face:

   * Age
   * Gender
   * Smile intensity
   * Facial hair
   * Head pose (3D)
   * Emotion
   <br /><br />

<a target="_blank" href="https://ig.ft.com/emotion-recognition/">
Emotions detected</a> in JSON response is a floating point number:
   * Neutral
   * Anger
   * Contempt
   * Disgust
   * Fear
   * Hppiness
   * Sadness
   * Surprise
   <br /><br />

PROTIP: "Happiness: 9.99983543," is near certainty at 1.0. 2.80234E-08" indicates 8

https://github.com/Azure-Samples/cognitive-services-FaceAPIEnrollmentSample   

DEMO: LAB: https://github.com/microsoft/hackwithazure/tree/master/workshops/web-ai-happy-sad-angry

https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/quickstarts-sdk/identity-client-library?tabs=windows%2Cvisual-studio&pivots=programming-language-csharp

#### Create a Face API subscription

Subscribe to the Face API:
1. Sign in to the Azure portal.
1. Go to <a target="_blank" href="https://portal.azure.com/#create/Microsoft.CognitiveServicesFace">
+ Create a resource > AI + Machine Learning > Face</a>
1. Enter a unique name for your Face API subscription name in variable MY_FACE_ACCT

   Paste in setme.sh 

   <pre>export MY_FACE_ACCT=faceme
   </pre>

1. Choose "westus", the Location nearest to you.
1. Select F0 the free or lowest-cost Pricing tier.
1. Check "By checking this box, I certify that use of this service or any service that is being created by this Subscription Id, is not by or for a police department in the United States."
1. Click "Create" to subscribe to the Face API.

1. When provisioned, "Go to resource". 
1. In "Keys and Endpoint", copy Key1 and paste in setme.sh 

   <pre>export MY_FACE_KEY1=<em>subscription_key</em>
   </pre>

The endpoint used to make REST calls is "$MY_FACE_ACCT.cognitiveservices.azure.com/"

   https://github.com/wilsonmar/azure-quickly/blob/main/az-face-init.sh

https://docs.microsoft.com/en-us/learn/modules/identify-faces-with-computer-vision/8-test-face-detection?pivots=csharp

References:

   https://docs.microsoft.com/en-us/azure/cognitive-services/Face/Overview
   What is the Azure Face service?

   https://docs.microsoft.com/en-us/azure/cognitive-services/Face/

   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/computer-vision-v3-ga/operations/56f91f2e778daf14a499f21f">Face API</a>

   https://docs.microsoft.com/en-us/azure/cognitive-services/Face/quickstarts/client-libraries?tabs=visual-studio&pivots=programming-language-csharp

   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/04%20-%20Face%20Analysis.ipynb


## CustomVision

## Form Recognizer = Document Intelligence

<a name="VideoIndexer"></a>

## Video Indexer 

Media Services & Storage Account:

1. In Portal, <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/microsoft.media%2Fmediaservices">Media Services</a> blade.

1. Specify Resource Group, account name, storage account, System-managed identity.

   <img width="648" alt="az-media-service-svcs.png" src="https://user-images.githubusercontent.com/300046/120081332-60f2cc80-c07a-11eb-9e2e-1a951d72266b.png">


1. In a browser, go to the Video Indexer Portal URL:

   <a target="_blank" href="https://www.videoindexer.ai/account/login/">
   https://www.videoindexer.ai</a>

   NOTE: Video Indexer is under Media Services rather than Cognitive Services.

1. Click the provider to login: AAD (Entra) account, Personal Microsoft account, Google.

   PROTIP: Avoid using Google due to the permissions you're asked to give:

1. Say Yes to Video Indexer permission to: Access your email addresses & View your profile info and <strong>contact list</strong>, including your name, gender, display picture, contacts, and friends.

   NOTE: You'll get an email with subject "Your subscription to the Video Indexer API".

   On your mobile phone you'll get a "Connected to new app" notice for Microsoft Authenticator.

1. Click "Account settings". <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/video-indexer/">PRICING</a>: up to 10 hours (600 minutes) of free indexing to website users and up to 40 hours (2,400 minutes) of free indexing to API users. Media reserved units are pre-paid. See <a target="_blank" href="https://docs.microsoft.com/en-us/azure/media-services/video-indexer/faq">FAQ</a>

1. Switch to the file which defines Azure environment variable VIDEO_INDEXER_ACCOUNT (in setmem.sh) as described in 
 
   <a target="_blank" href="https://wilsonmar.github.io/azure-quickly">https://wilsonmar.github.io/azure-quickly</a>

1. Switch back.
1. In Account settings, click "Copy" to get the Account ID GUID in your Clipboard. 
1. Switch to the file which defines Azure environment variable VIDEO_INDEXER_ACCOUNT (in setmem.sh) as described in 

   <a target="_blank" href="https://wilsonmar.github.io/azure-quickly">https://wilsonmar.github.io/azure-quickly</a>

1. Highlight the sample value and paste (Command+V).
1. Switch back.

1. Go to the "Azure Video Analyzer for Media Developer Portal":<a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-video-analyzer/video-analyzer-for-media-docs/video-indexer-use-apis#obtain-access-token-using-the-authorization-api">DOCS</a>

   <a target="_blank" href="https://api-portal.videoindexer.ai/">api-portal.videoindexer.ai</a>

1. Click "Sign In". Click "Profile" 

   NOTE: The UI has changed since publication of <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/extract-insights-from-videos-with-video-indexer-service/2-subscribe-to-api">Microsoft's tutorial</a>, which says "Go to the Products tab, then select Authorization."

1. Click "Show" on the "Primary key" line. Double-click on the subscription key to copy to Clipboard (Command+C).
1. Switch to the file which defines Azure environment variable VIDEO_INDEXER_API_KEY (in setmem.sh) as described in 
 
   https://wilsonmar.github.io/azure-quickly

1. Highlight the sample value and paste (Command+V).
1. Switch back.

   ### Upload video using Portal GUI

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/media-services/previous/media-services-portal-upload-files">DOCS</a>


   ### Upload video using program

   https://api-portal.videoindexer.ai/api-details#api=Operations&operation=Get-Account-Access-Token

1. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-video-analyzer/video-analyzer-for-media-docs/upload-index-videos#upload-and-index-with-api">DOCS</a>: Select the Azure Video Indexer option for uploading videos: upload from URL (there is also send file as byte array by an API call, which has limits of 2 GB in size and a 30-minute timeout.

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/extract-insights-from-videos-with-video-indexer-service/3-upload-index-videos?pivots=python">
   Program

   <strong>az-video-upload.py</strong> in https://wilsonmar.github.io/azure-quickly

1. Make an additional call to retrieve insights.

1. Reference existing asset ID

   ### Search Media files

1. In "Media files" at https://www.videoindexer.ai/media/library

1. Click "Samples", and click on a video file to Play to see the media's people, topics (keywords).

   NOTE: Search results include exact start times where an insight exists, possibly multiple matches for the same video if multiple segments are matched.

1. Click a tag to see where it was mentioned in the timeline.

   Alternately, use the API to search: ???


   ### Model customizations

   Each video consists of scenes grouping shots, which each contain keyframes.
   
   * A <strong>scene</strong> represents a single event within the video. It groups <strong>consecutive shots</strong> that are related. It will have a start time, end time, and thumbnail (first keyframe in the scene).
   
   * A <strong>shot</strong> represents a <strong>continuous segment</strong> of the video. Transitions within the video are detected which determine how it is split into shots. Shots have a start time, end time, and list of keyframes.
   
   * <strong>Keyframes</strong> are frames that represent the shot. Each one is for a <strong>specific point in time</strong>. There can be gaps in time between keyframes but together they are representative of the shot. Each keyframe can be downloaded as a high-resolution image.

1. Click "Model customizations"

1. Set as thumbnail another keyframe.


https://github.com/Azure-Samples/media-services-video-indexer

https://dev.to/adbertram/getting-started-with-azure-video-indexer-and-powershell-3i32



<a name="FormRecognizer"></a>

### Azure Form Recognizer

"Form Recognizer" extracts information from images obtained from scanned forms and invoices.

   * Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-ink-recognizer">Recognizer</a>

https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/06%20-%20Receipts%20with%20Form%20Recognizer.ipynb

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-python/tables-samples/

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-java/formrecognizer-java-samples/

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-net/azure-form-recognizer-client-sdk-samples/

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-python/formrecognizer-samples/

<a name="OCR"></a>

### OCR

https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/05%20-%20Optical%20Character%20Recognition.ipynb

   * Image classification - https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/01%20-%20Image%20Analysis%20with%20Computer%20Vision.ipynb

   * Object detection -  https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/02%20-%20Image%20Classification.ipynb



<a name="InkRecognizer"></a>

### Ink Recognizer

<a target="_blank" href="https://www.youtube.com/watch?v=ipcMvLhk3iI">VIDEO</a>:

Ink converts handwriting to plain text, in 63+ core languages.

<a target="_blank" href="https://github.com/azure-deprecation/dashboard/issues/66">
It was deprecated on 31 January 2021</a>.

https://docs.microsoft.com/en-us/azure/cognitive-services/ink-recognizer/quickstarts/csharp
Quickstart: Recognize digital ink with the Ink Recognizer REST API and C#

QUESTION: Does it integrate with a tablet?


<hr />

### Create Cognitive Services

<a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure/azureml-examples/azure-machine-learning-20-cli-preview-examples/">Azure Machine Learning 2.0 CLI (preview) examples</a>

https://github.com/Azure-Samples/Cognitive-Services-Vision-Solution-Templates


BTW https://docs.microsoft.com/en-us/samples/azure-samples/cognitive-services-quickstart-code/cognitive-services-quickstart-code/
https://github.com/Azure-Samples/cognitive-services-sample-data-files


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



<hr />

<a name="NLP"></a>
<a name="Language"></a>

## AI Language services

Formerly called "NLP" (Natural Language Processing),
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
   * <a href="#SpeakerRecognition">Recognize Speaker</a> based on audio.
   <br /><br />

Within Microoft, NLP consists of these Azure services (described below):
   * <a href="#LUIS">LUIS</a> (Language Understanding Intelligent Service)
   * <a href="#TextAnalytics">Text Analytics</a>
   * <a href="#Speech">Speech</a>
   * <a href="#TextTranslation">Translator Text</a>
   <br /><br />



<a name="LanguageTutorials"></a>

### AI Language Tutorials

https://microsoftlearning.github.io/mslearn-ai-language/ 
   * https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure-ai/
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai-language">https://github.com/MicrosoftLearning/mslearn-ai-language</a>
   * Analyze text
   * Create a Question Answering Solution
   * Create a language understanding model with the Azure AI Language service
   * Custom text classification
   * Extract custom entities
   * Translate Text
   * Recognize and Synthesize Speech
   * Translate Speech
   <br /><br />



<a name="SpeakerRecognition"></a>

### Speaker Recognition

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/speaker-recognition/">Speaker Recognition</a>
for authentication.

In contrast, Speaker Diarization groups segments of audio by speaker in a batch operation.

"In cloudinary"

<hr />

<a name="LUIS"></a>
<a name="LUIS.Authoring"></a>

## LUIS 

Think of "LUIS" as Amazon Alexa's frienemy.

<a target="_blank" href="https://www.luis.ai/">https://www.luis.ai</a>, 
provides examples of how to use LUIS (Language Understanding Intelligent Service) thus:

> A machine learning-based service to build natural language into apps, bots, and IoT devices. Quickly create enterprise-ready, custom models that continuously improve.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1707581603/msft-ai-luis-3204x1538_hwttjo.png"><img alt="msft-ai-luis-3204x1538.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1707581603/msft-ai-luis-3204x1538_hwttjo.png"></a>

Bot Framework Emulator
Follow the instructions at https://github.com/Microsoft/BotFramework-Emulator/blob/master/README.md to download and install the latest stable version of the Bot Framework Emulator for your operating system.

Bot Framework Composer
Install from https://docs.microsoft.com/en-us/composer/install-composer.

Utterances are input from the user that your app needs to interpret.

https://github.com/Azure-Samples/cognitive-services-language-understanding

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/add-basic-conversational-intelligence/?WT.mc_id=cloudskillschallenge_efc530c5-7105-4c12-8eb3-bc20ae3bee78">CHALLENGE</a>:
Add natural language capabilities to a picture-management bot. 

   * Create a LUIS Service Resource (in Python or C#)
   * Add Intents
   * Add utterances
   * Work with Entities
   * Use Prebuilt Domains and Entities
   * Train and Publish the LUIS Model
   <br /><br />

https://www.slideshare.net/goelles/sharepoint-saturday-belgium-2019-unite-your-modern-workplace-with-microsofsts-ai-ecosystem


<a name="LUIS_Regional"></a>

### LUIS Regional websites

Perhaps for less latency, create the LUIS app in the same geographic location where you created the service:

   * "(US) West US" in North America: <a target="_blank" href="https://www.luis.ai/"><strong><u>www.luis.ai</u></strong></a><br />
   * "(Europe) West Europe" and "(Europe) Switzerland North": <a target="_blank" href="https://eu.luis.ai/"><strong><u>eu.luis.ai</u></strong></a><br />
   * "(Asia Pacific) Australia East": <a target="_blank" href="https://au.luis.ai/"><strong><u>au.luis.ai</u></strong></a>
   <br /><br />

### Create LUIS resource

NOTE: LUIS is not a service like "Cognitive Services", but a Marketplace item:

1. In the Azure portal, select <a target="_blank" href="https://portal.azure.com/#create/hub">+ Create a resource</a>.
1. In the "Search services and Marketplace" box, type LUIS, and press Enter.
1. In search results, select "Language Understanding from Microsoft".
1. Select Create.
1. Leave the Create options set to Both (Authoring and Prediction).
1. Choose a subscription.
1. Create a new resource group named "LearnRG".
1. Enter a unique name for your LUIS service. This is a public sub-domain to a <a href="#LUIS_Regional">LUIS Regional websites (above)</a>

   PROTIP: Different localities have different costs.

1. For Authoring Location, choose the one nearest you.
1. For Authoring pricing tier, select F0
1. Set your Prediction location to the same region you chose for Authoring location
1. For Prediction pricing tier, select F0. If F0 is not available, select S0 or other free/low cost tier.
1. Select Review + Create.
1. If the validation succeeds, select Create.
1. After "Your deployment is complete" appears, click "Go to resource" (within Cognitive Services).
1. Within the Resource Management section, select the "Keys and Endpoints" section.
1. Click the blue button to the right of KEY 1's value. That copies it to your Clipboard.
1. If you are making use of my framework, open the environment variables file:

   <pre>code ../setmem.sh</pre>

1. Locate the variables and replace the sample values:

   export MY_LUIS_AUTHORING_KEY="abcdef1234567896b87f122281e9187e"
   export MY_LUIS_ENDPOINT=""

   SECURITY PROTIP: Putting key values in a global variables definition file separate from the code.

1. 

   <pre>authoring_key = env:MY_LUIS_AUTHORING_KEY
   authoring_endpoint = env:MY_LUIS_ENDPOINT
   </pre>


<br /><br />

1. Select a <a href="#LUIS_Regional">LUIS Regional websites (above)</a>
1. Login.
1. Choose an authoring resource (Subscription). If there are several listed, select the top one.
1. Create a new authoring service (Azure service).

   ### Create a LUIS app in the LUIS portal

1. Now at https://www.luis.ai/applications, notice at the upper-right "PictureBotLUIS (westus, F0)" where the Directory name usually appears in the Portal.

   The pages displayed will be different if you have already created a LUIS app or have no apps created at all. Select either Go to apps, or the apps option that is available on your initial LUIS page.

1. Select "+ New app" for conversation Apps for the "Create new app" pop-up dialog.

   The LUIS user interface is updated on a regular basis and the actual options may change, in terms of the text used. The basic workflow is the same but you may need to adapt to the UI changes for the text on some elements or instructions given here.

   Take note of the other options such as the ability to import JSON or LU file that contains LUIS configuration options.

1. Give your LUIS app a name, for example, PictureBotLUIS.

1. For Culture, type "en-us" then select the appropriate choice for you language.

1. Optionally, give your LUIS app a description so it's clear what the app's purpose is.
1. Optionally, if you already created a Prediction Resource, you can select that in the drop-down for Prediction resource.
1. Select Done.

1. Dismiss the guidance dialog that may display.

   ![az-ai-luis-utterances-912x268](https://user-images.githubusercontent.com/300046/120977499-a07f7f80-c730-11eb-82c6-d399084a60a2.png)

   DEFINITION: Each bot <strong>action</strong> has an intent invoked by an utterance, which gets processed by all models. The top scoring model LUIS selects as the prediction.

   An utterance that don't map to existing intents is called the catchall intent "None".

   Intents with significantly more positive examples ("data imbalance" toward that intent) are more likely to receive positive predictions. 


   ### Create a LUIS app with code   

1. On your local machine (laptop), install Visual Studio Code for your operating system.

1. If you will be completing your coding with Python, ensure you have a Python environment installed locally.
   Once you have Python installed, you will need to install the extension for VS Code.

   Alternately, to use C# as your code language, start by installing the latest .NET Core package for your platform. You can choose Windows, Linux, or macOS from the drop-down on this page.
   Once you have .NET Core installed, you will need to add the C# Extension to VS Code. Select the Extensions option in the left nav pane, or press CTRL+SHIFT+X and enter C# in the search dialog.

1. Create a folder within your local drive project folder to store the project files. Name the folder "LU_Python".
   Open Visual Studio Code and Open the folder you just created.
   Create a Python file called "create_luis.py".

   <pre>cd 
   cd projects
   mkdir LU_Python
   cd LU_Python
   touch create_luis.py
   code .</pre>

1. Install the LUIS package to gain access to the SDK.

   <pre><strong>sudo pip install azure-cognitiveservices-language-luis</strong></pre>

1. Open an editor (Visual Studio Code)


   ### Create entities in the LUIS portal

1. Be signed in to your LUIS app and on the Build tab.
1. In the left column, select Entities, and then select + Create.
1. Name the entity facet (to represent one way to identify an image).
1. Select Machine learned for Type. Then select Create.


   ### Create a prediction key

   https://docs.microsoft.com/en-us/learn/modules/manage-language-understanding-intelligent-service-apps/2-manage-authoring-runtime-keys

1. Sign in to your LUIS portal.
1. Select the LUIS app that you want to create the prediction key for.
1. Select the Manage option in the top toolbar.
1. Select Azure Resources in the left tool bar.

   Unless you have already created a prediction key, your screen should look similar to this. The key information is obscured on purpose.


   A Starter Key provides 1000 prediction endpoint requests per month for free.

   Examples of utterances are on the Review endpoint utterances page on the Build tab.


   ### Install and run LUIS containers

   <pre>docker pull mcr.microsoft.com/azure-cognitive-services/luis:latest</pre>

1. Specify values for Billing LUIS authoring endpoint URI and ApiKey:

   <pre>docker run --rm -it -p 5000:5000 --memory 4g --cpus 2 --mount type=bind,src=c:\input,target=/input
--mount type=bind,src=c:\output\,target=/output
mcr.microsoft.com/azure-cognitive-services/luis
Eula=accept
Billing={ENDPOINT_URI}
ApiKey={API_KEY}</pre>

   "--mount type=bind,src=c:\output\,target=/output" indicates where the LUIS app saves log files to the output directory. The log files contain the phrases entered when users hit the endpoint with queries.

1. Get the AppID from your LUIS portal and paste it in the placeholder in the command.

   <pre>curl -G \
-d verbose=false \
-d log=true \
--data-urlencode "query=Can I get a 5x7 of this image?" \
"http://localhost:5000/luis/v3.0/apps/{APP_ID}/slots/production/predict"
   </pre>

1. Get the AppID from your LUIS portal and paste it in the placeholder in the command.

   <pre>curl -X GET \
"http://localhost:5000/luis/v2.0/apps/{APP_ID}?q=can%20I%20get%20an%20a%205x7%20of%20this%20image&staging=false&timezoneOffset=0&verbose=false&log=true" \
-H "accept: application/json"
   </pre>


### DEMO JSON responses

1. DEMO: voice control lighting in a virtual home. 

   <a target="_blank" href="
   https://aidemos.microsoft.com/luis/demo">
   https://aidemos.microsoft.com/luis/demo</a>

1. Select suggested utterances to see the JSON response:

   * Book me a flight to Cairo
   * Order me 2 pizza
   * Remind me to call my dad tomorrow
   * Where is the nearest club?
   <br /><br />

   Type instructions, use the microphone button to speak commands.

   LUIS identifies from your utterance your intents and entities.

   Entity types
   * List - fixed, closed set of related words (small, tiny, smallest). Case-sensitve
   * RegEx - (credit card numbers)
   * Prebuilt
   * Pattern.Any
   * Machine Learned
   <br /><br />


<a name="LUIS"></a>

### LUIS CLI

Run my az-luis-cli.sh.

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-howto-bf-cli-deploy-luis?view=azure-bot-service-4.0">DOCS</a>:

   https://github.com/cloudacademy/using-the-azure-machine-learning-sdk

1. Create a Resource referenced when LUIS Authoring is defined.
   The resource name should be lower case as it is used for the endpoint URL, such as:

   https://<em>luis-resource-name</em>.cognitiveservices.azure.com/

1. The Bot Framework CLI requires Node.js.

   <pre>npm i -g npm</pre>

1. Install Bot Framework Emulator per instructions at:<br />
   <pre>https://github.com/Microsoft/BotFramework-Emulator/blob/master/README.md</pre>

   Download to downloads folder at:<br />
   https://aka.ms/bf-composer-download-mac

1. Install Bot Framework Composer per instructions at:<br />
   <pre>https://docs.microsoft.com/en-us/composer/install-composer</pre>

   On a Mac, download the .dmg<br />
   https://aka.ms/bf-composer-download-mac

1. Use Node.js to install the latest version of Bot Framework CLI from the command line:
 
   npm i -g @microsoft/botframework-cli



   https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-howto-bf-cli-deploy-luis?view=azure-bot-service-4.0

   
   LUIS can generate from models a TypeScript or C# typw (program code).


   ### Luis.ai

1. DEMO: <a target="_blank" href="https://www.luis.ai/">https://www.luis.ai</a>

1. Sign in and <a target="_blank" href="https://www.luis.ai/%E2%80%9Chttps://docs.microsoft.com/azure/cognitive-services/cognitive-services-apis-create-account?tabs=multiservice%2Cwindows">create an authoring resource</a> refercening the Resource Group.

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-how-to-azure-subscription">PROTIP</a>: In the list of Cognitive services kinds, resources and subscription keys created for <strong>LUIS authoring</strong> are separate than ones for prediction runs so that utilization for the two can be tracked separately.

   <a target="_blank" href="https://aka.ms/AI900/Lab4">https://aka.ms/AI900/Lab4</a> which redirects to<br />
   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/create-language-model-with-language-understanding/2-get-started">Create a language model with Language Understanding</a> which trains a (LUIS) language model that can understand spoken or text-based commands. He's Alexa's boyfriend, ha ha.

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
   * <a target="_blank" href="https://cloudacademy.com/course/adding-language-understanding-chatbots-with-luis-1443/introduction/">Adding Language Understanding to Chatbots With LUIS</a> by <a target="_blank" href="https://www.linkedin.com/in/emilio-meira/">Emilio Meira</a>

   * <a target="_blank" href="https://github.com/chomado/GoogleHomeHack">github.com/chomado/GoogleHomeHack</a> in <a target="_blank" href="https://www.slideshare.net/chomado/developing-google-assistant-app-actions-on-google-with-microsoft-azure-functions-serverless-service-by-microsoft">slides</a> by Madoka Chiyoda 
   

<hr />

<a name="TextAnalytics"></a>

### Text Analytics API Programming

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-text-with-text-analytics-service/1-introduction">Techniques</a>
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/">DOCS</a>:

NOTE: The previous version references interactive Python Notebooks such as <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-text-with-text-analytics-service/3-exercise">MS LEARN HANDS-ON LAB</a> referencing <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/07%20-%20Text%20Analytics.ipynb">"07 - Text Analytics.ipynb"</a>.


1. Look at the DEMO GUI at:

   <a target="_blank" href="https://aidemos.microsoft.com/text-analytics">aidemos.microsoft.com/text-analytics</a>

1. Click "Next Step" through the various processing on a sentence:

   * Sentiment analysis (how positive or negative a document is)
   * Key phrase extraction

   * Entity Linking to show link in Wikipedia.
   * Bing Entity Search

   * <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/">Text to Speech</a> services:
   * <a href="#LanguageDetection">Language Detection</a> (is it English, German, etc.)
   * Translator Text
   <br /><br />

API:

   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-0/operations/Languages/console">Text Analytics API Reference</a>

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-call-api?tabs=synchronous">Some Text Analytics API services are synchronous and asynchronous</a>

   <a target="_blank" href="https://cloudacademy.com/lab/using-text-analytics-azure-cognitive-services-api/">Cloud Academy lab "Using Text Analytics in the Azure Cognitive Services API"</a>

   <a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-python/textanalytics-samples/">docs.microsoft.com/en-us/samples/azure/azure-sdk-for-python/textanalytics-samples</a>


<a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-js/ai-text-analytics-javascript/">Azure Text Analytics client library samples for JavaScript</a>
has step-by-step instructions:
1. Logging into the Microsoft Azure Portal

   <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.CognitiveServices%2Faccounts"">Cognitive Services</a>

1. Select the service already defined for you.

   ### Retrieving Azure Cognitive Services API Credentials

1. At the left menu click "Keys and Endpoint". The Endpoint URL contains:

   https://southcentralus.api.cognitive.microsoft.com/

   The Endpoint is the location you'll be able to make requests to in order to interact with the Cognitive Services API. The Key1 value is the key that will allow you to authenticate with the API. Without the Key1 value, you will receive unauthenticated errors.

1. In the Azure Portal, type Function App into the search bar and click Function App:

alt

 

2. Click the only option:

alt

You'll be brought to the Function App blade. While a complete summary of function apps is outside the scope of this lab, you should know the function apps allow you to create custom functions using a variety of programming languages, and to trigger them using any number of events.

In the case of this lab step, you'll set up a function app to interact with the Cognitive Services API using Node.js. You'll then configure the function to be triggered by visiting its URL in a browser tab.

 

3. On the left side of the blade, click on Functions and then + Add.

  

4. Click the HTTP Trigger option:

alt

Important: If you don't see the HTTP trigger option, click More Templates and then Finish and view templates to see the correct option.

 

5. Name the function language-detection and click Create:

 alt

   

6. Click Code + Test in the left sidebar then look at the upper part of the console and switch to the function.json file:


7. Replace the contents of the file with the following snippet and click Save:

   <pre>{
  "bindings": [
    {
      "authLevel": "function",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": [
        "get",
        "post"
      ]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "$return"
    }
  ],
  "disabled": false
}</pre>

The function.json file manages the behavior of your function app.
 

8. Switch to the index.js file:

9. Replace the contents of the file with the following code:

<pre>'use strict';
&nbsp;
let https = require('https');
const subscription_key = "INSERT_YOUR_KEY_HERE";
const endpoint = "INSERT_YOUR_ENDPOINT_HERE";
const path = '/text/analytics/v2.1/languages';
&nbsp;
module.exports = async function (context, req) {
  let documents = {
    'documents': [
      {'id': '1', 'text': 'This is a document written in English.'},
      {'id': '2', 'text': 'Je suis une phrase écrite en français.'},
      {'id': '3', 'text': 'Este es un documento escrito en español.'},
    ]
  };
&nbsp;
  let body = JSON.stringify(documents);
&nbsp;
  let request_params = {
    method: 'POST',
    hostname: (new URL(endpoint)).hostname,
    path: path,
    headers: {
      'Ocp-Apim-Subscription-Key': subscription_key,
    }
  };
&nbsp;
  let response = await makeRequest(request_params, body);
&nbsp;
  context.res = {
    body: response
  }
&nbsp;
};</pre>

<pre>function makeRequest(options, data) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.setEncoding('utf8');
      let responseBody = '';

      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(responseBody));
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(data)
    req.end();
  });
}</pre>
 

10. Replace the contents of subscription_key and endpoint with the key and endpoint you retrieved in an earlier step, so that the variables look similar to this:

Copy code
1
2
const subscription_key = "4779caba69344c3d97bca9863d726af6";
const endpoint = "https://southcentralus.api.cognitive.microsoft.com/";
 

11. Click Save.

 

12. While a deep understanding of code is outside the scope of this lab, you should take note of a couple of things:

The endpoint and subscription key that you set will allow the function app to communicate with your Cognitive Services API. The endpoint tells the app where to find the API, and the subscription key allows the app to authenticate.
The path variable declares the exact path the app should request on the Cognitive Services API. This path system allows the API to offer many different services in one endpoint:
Copy code
1
const path = '/text/analytics/v2.1/languages';
 
The documents variable declares a list of documents that will be passed to the language detection API. The API will return the languages that these documents are most likely written in Currently there are three documents, and the goal will be to get the language used in each one:

<pre>let documents = {
    'documents': [
      {'id': '1', 'text': 'This is a document written in English.'},
      {'id': '2', 'text': 'Je suis une phrase écrite en français.'},
      {'id': '3', 'text': 'Este es un documento escrito en español.'},
    ]
  };</pre>

The rest of the code simply manages the formatting of the data, requesting the language detection service from the API, and returning the result.
Next, you'll visit the function app's URL to see it work.

 

13. Look at the upper command bar and click Test/Run.

 

14. Select GET as Http Method before clicking Run:

 

15. View the output in the Output tab:

alt

Notice that what's returned is a JSON object with a "documents" object containing three results, one for each language you submitted to it. Each result has a "name" value with the predicted language and a "score" value with the likelihood that the decision is accurate. A score of 1 means that the Cognitive Services API was completely confident in its language detection. Here's what the formatted JSON object looks like, for reference:

<pre>
{
  "documents": [
    {
      "id": "1",
      "detectedLanguages": [
        {
          "name": "English",
          "iso6391Name": "en",
          "score": 1
        }
      ]
    },
    {
      "id": "2",
      "detectedLanguages": [
        {
          "name": "French",
          "iso6391Name": "fr",
          "score": 1
        }
      ]
    },
    {
      "id": "3",
      "detectedLanguages": [
        {
          "name": "Spanish",
          "iso6391Name": "es",
          "score": 1
        }
      ]
    }
  ],
  "errors": []
}</pre>
 

3. Using the Azure Text Analytics API for Language Detection
4. Using the Azure Text Analytics API for Sentiment Analysis

<a name="Sentiment"></a>

#### Sentiment Analysis

   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-0/operations/Sentiment">API Reference</a>

   The output is a number from 0 to 1, with 1 being the most positive language and zero being the most negative opinion expressed.


<a name="KeyPhrases"></a>

#### Key phrase extraction

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/extract-key-phrases-text-analytics-api/?WT.mc_id=cloudskillschallenge_efc530c5-7105-4c12-8eb3-bc20ae3bee78">CHALLENGE</a>:
<a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-0/operations/KeyPhrases">API Reference</a>

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/analyze-text-with-text-analytics-service/2-get-started-azure">Named Entity Recognition (NER)</a> identifies entities in the text and group them into different entity categories, such as organization name, location, event, etc.

   <pre>"documents": [
    {
      "id": "1",
      "keyPhrases": [
        "world",
        "input text"
      ]
    },</pre>


<a name="LanguageDetection"></a>

#### Detect Language

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/detect-language-text-analytics-api/?WT.mc_id=cloudskillschallenge_efc530c5-7105-4c12-8eb3-bc20ae3bee78&ns-enrollment-type=Collection&ns-enrollment-id=25m3h7g1355q">CHALLENGE</a>:
<a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-0/operations/Languages">API Reference</a>

vs. <a target="_blank" href="https://westus.dev.cognitive.microsoft.com/docs/services/57cf753a3f9b070c105bd2c1/operations/57cf753a3f9b070868a1f66e">Content Moderator - Moderate Detect Language</a> to Auto Correct, PII, listid, classify, language. Classification of Profanity returns JSON with several categories:
   * Category 1: sexually explicit or adult in certain situations.
   * Category 2: sexually suggestive or mature in certain situations.
   * Category 3: considered offensive in certain situations.
   <br /><br />

https://learn.microsoft.com/en-us/training/modules/analyze-text-ai-language/3-detect-language

<a target="_blank" href="https://westcentralus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v2-1/operations/56f30ceeeda5650db055a3c7">v2.1 API Testing Console</a>

Input text is in a formatted JSON document files of up to 5,120 characters.
Each file can contain up to 1,000 id's, each associated with a text string.

As with GraphQL, the API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.

   <pre>   "id": "3",
      "detectedLanguages": [
        {
          "name": "Spanish",
          "iso6391Name": "es",
          "score": 1
        }
   </pre>

Only one language code is returned for each document submitted.
Mixed language content within the same document returns the language with the largest representation in the content, but with a lower positive rating, reflecting the marginal strength of that assessment.

<a name="NamedEntities"></a>

#### Named Entity Recognition

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/recognize-entities-text-analytics-api/?WT.mc_id=cloudskillschallenge_efc530c5-7105-4c12-8eb3-bc20ae3bee78">CHALLENGE</a>:
   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-0/operations/EntitiesRecognitionGeneral">API Reference</a>

Sample Response:
   <pre>{
  "documents": [{
    "id": "1",
    "entities": [{
      "name": "Seattle",
      "matches": [{
        "wikipediaScore": 0.15046201222847677,
        "entityTypeScore": 0.80624294281005859,
        "text": "Seattle",
        "offset": 26,
        "length": 7
      }],
      "wikipediaLanguage": "en",
      "wikipediaId": "Seattle",
      "wikipediaUrl": "https://en.wikipedia.org/wiki/Seattle",
      "bingId": "5fbba6b8-85e1-4d41-9444-d9055436e473",
      "type": "Location"
    }, {
      "name": "last week",
      "matches": [{
        "entityTypeScore": 0.8,
        "text": "last week",
        "offset": 34,
        "length": 9
      }],
      "type": "DateTime",
      "subType": "DateRange"
    }]
  }],
  "errors": []
}</pre>


#### Linked Entities from a well known knowledge base

   <a target="_blank" href="https://eastus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-0/operations/EntitiesLinking">API Reference</a>


<hr />

<a name="SpeechServices"></a>

## Speech Services

Speech-to-text (STT) has <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/rest-speech-to-text">two different REST APIs</a>:

   * Speech-to-text REST API v3.0 is used for <strong>Batch</strong> transcription and Custom Speech.

   * Speech-to-text REST API for <strong>short</strong> audio is used for online transcription as an alternative to the Speech SDK. Requests using this API can transmit only up to 60 seconds of audio per request.
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure-samples/cognitive-services-speech-sdk/sample-repository-for-the-microsoft-cognitive-services-speech-sdk/">
Microsoft Cognitive Services Speech SDK Samples</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/transcribe-speech-input-text/?WT.mc_id=cloudskillschallenge_efc530c5-7105-4c12-8eb3-bc20ae3bee78">LAB</a>:

https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/

https://docs.microsoft.com/en-us/learn/modules/transcribe-speech-input-text/?WT.mc_id=cloudskillschallenge_efc530c5-7105-4c12-8eb3-bc20ae3bee78


<a name="Speech-to-text"></a>

### Speech-to-text

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


<a name="SpeechTranslation"></a>

### Speech Translation (Speech-to-text aka STT)
   
   Get the <strong>monthly subscription</strong> mobile app on 
   <a target="_blank" href="https://apps.apple.com/app/microsoft-translator/id1018949559">
   iPhone</a>, Android, or Amazon. It has a Phrasebook of common phrases.

   DEMO: <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/speech-translation/">Speech Translation</a> recognizes and synthesizes speech, and translates spoken languages. REMEMBER: The sequence of services involves <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/recognize-synthesize-speech/2-get-started-azure">two APIs</a>:

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/translate-speech-speech-service/3-translate-speech-text">
   <img alt="az-speech-translate-1756x580" width="1756" height="580" src="https://user-images.githubusercontent.com/300046/118432381-af28c880-b695-11eb-8dee-c7caca85f45c.png"></a>


   Speech-to-Text API -> Speech Correction -> Machine Translation -> Text-to-Speech API

   <a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure-samples/cognitive-speech-tts/azure-cognitive-tts-samples/">Azure Cognitive TTS Samples</a>

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

   SAMPLE: https://docs.microsoft.com/en-us/samples/azure-samples/cognitive-speech-tts/azure-cognitive-tts-samples/

1. PROTIP: In a CLI window, run my Bash shell script to Create a Cognitive Services resource and get its two keys:

   <pre>cd ~/clouddrive/azure-quickly
   git pull
   ./az-cog-cli.sh
   </pre>

   To synthesize speech, the system typically tokenizes the text to break it down into individual words, and assigns phonetic sounds to each word. It then breaks the phonetic transcription into <strong>prosodic units</strong> (such as phrases, clauses, or sentences) to create phonemes that will be converted to audio format. These phonemes are then synthesized as audio by applying a voice, which will determine parameters such as pitch and timbre; and generating an audio wave form that can be output to a speaker or written to a file.

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#text-to-speech">Text-to-speech</a>

To specify that the speech input to be transcribed to text is in an audio file, use AudioConfig.

Change the voice used in speech synthesis by setting the SpeechSynthesisVoiceName property of the SpeechConfig object to the desired voice name.


<a name="SpeechTranslation"></a>

### Speech Translation 

Text (text-to-text aka TTT)

   <a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/translator-text-api/">Microsoft's Translator service </a> can translate text between <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/Translator/language-support">more than 90 languages and dialects</a> (including Klingon in Star Trek), specified using ISO 639-1 two-letter language codes and 3166-1 cultural codes such as "en-US" for US English, "en-GB" for British English, "fr-CA" for Canadian French, etc.


   * Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/building-customized-translation-systems-azure-cognitive-services-translator">Translator</a>


Hands-on tool without a compute instance:

1. <a target="_blank" href="https://translator.microsoft.com/">translator.microsoft.com</a>

2. Click on "Start conversation", log in and enter your name and language.

3. Share the conversation code with other participants, who can join using the Micreosoft Translator app or website.

4. Speak or type in your language to communicate with other participants in the conversation. Other participants will see your messages in their own language.


https://docs.microsoft.com/en-us/azure/cognitive-services/translator/custom-translator/overview
What is Custom Translator?

Foe Parallel Data, equivalent documents in different languages:
* https://docs.microsoft.com/en-us/azure/cognitive-services/
* https://docs.microsoft.com/ja-jp/azure/cognitive-services/
* https://docs.microsoft.com/ko-ko/azure/cognitive-services/

https://docs.microsoft.com/en-us/azure/cognitive-services/translator/custom-translator/how-to-upload-document

### 09 - Translation.ipynb 

<a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/translate-text-with-translator-service/1-introduction">LEARN: Translate text with Azure AI Translator service</a>

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



<a name="ImmersiveReader"></a>

### Immersive Reader

   * Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-immersive-reader">Immersive Reader</a>


#### Other sample code

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-python/documenttranslation-samples/



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


<hr />

<a href="#QnA_Maker"></a>

## QnA Maker

   The cognitive service name "QnA Maker" (Question and Answer Maker)</a> 
   is a cloud-based API service that lets you create a conversational question-and-answer layer over your existing data. The service enables the building of <strong>knowledge bases</strong> of questions and answers that form the basis of a dialog between a human and an AI agent.

   Microsoft created the <strong>QnA Maker portal</strong> to make it easier than writing code to create and manage knowledge bases using the QnA Maker REST API or SDK.

   The knowledge base gets smarter as it continually learns from user behavior.

   The knowledge base can be built by extracting questions and answers from your semi-structured content, including FAQs, manuals, and documents. 

   <strong>QnA Maker limits</strong> control the size of Knowledge base.

   <a name="QnA_Maker"></a>

   ### Create QnA Service

https://github.com/Microsoft/BotBuilder-CognitiveServices/tree/master/CSharp/Samples/QnAMaker
is only for C#.

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

## Decision (Making)


<a name="AnomalyDetector"></a>

## Anomaly Detector

   * Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-anomaly-detector">Anomaly Detector</a>

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-net/azure-anomaly-detector-client-sdk-samples/

Among <a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure-samples/anomalydetector/anomalydetector/">Anomaly Detector API Samples</a>

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/anomaly-detector/">
Anomaly Detector</a> identifies potential problems early on.

https://docs.microsoft.com/en-us/learn/modules/get-started-ai-fundamentals/3-understand-anomaly-detection

   1. Sensors in the car collect telemetry, such as engine revolutions, brake temperature, and so on.
   2. An anomaly detection model is trained to understand expected fluctuations in the telemetry measurements over time.
   3. If a measurement occurs outside of the normal expected range, the model reports an anomaly that can be used to alert the race engineer to call the driver in for a pit stop to fix the issue before it forces retirement from the race.
   <br /><br />


<hr />

<a name="ContentModerator"></a>

## Content Moderator

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/content-moderator/">Content Moderator</a> services detect potentially offensive or unwanted content.

Evaluate, Find Faces, Match, OCR.

https://www.youtube.com/watch?v=gVFiA6ZQNAw

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/classify-and-moderate-text-with-azure-content-moderator/?WT.mc_id=cloudskillschallenge_efc530c5-7105-4c12-8eb3-bc20ae3bee78">CHALLENGE</a>: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/classify-and-moderate-text-with-azure-content-moderator/2-overview-of-text-moderation">DOCS</a>:

https://docs.microsoft.com/azure/cognitive-services/Content-Moderator/overview?WT.mc_id=Portal-Microsoft_Azure_Support#data-privacy-and-security

https://docs.microsoft.com/en-us/azure/cognitive-services/content-moderator/client-libraries?tabs=visual-studio&pivots=programming-language-csharp

Response from the Text Moderation API include:

   * What type of potentially unwanted words were found (Profanity)
   * A list of potentially unwanted words found in the text.
   * Possible personally identifiable information (PII) found in the text.
   <br /><br />

Content Moderation (Evaluate, Find Faces, Match, OCR)

1. G+/ to <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.ContentModerator%2Fapplications">Content Moderator"</a>
1. "Create Custom Moderator"

   Oops!

   Could not create the marketplace item

   This marketplace item is not available.

   When working:

1. Select Create.

1. Enter a unique name for your resource, select a subscription, and select a location close to you.

1. Select the pricing tier for this resource, and then select F0.

1. Create a new resource group 

1.  Select Create.


<a name="MetricsAdvisor"></a>

## Metrics Advisor

<a target="_blank" href="https://aka.ms/GualalaACOM">Metrics Advisor</a> monitors metrics and diagnoses issues.

https://docs.microsoft.com/en-us/samples/azure/azure-sdk-for-python/metricsadvisor-samples/


<a name="Personalizer"></a>

## Personalizer

<a target="_blank" href="https://azure.microsoft.com/en-us/services/cognitive-services/personalizer/">Personalizer</a> creates rich, personalized experiences for every user.

   * Raza Salehi's <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-cognitive-services-personalizer">Personalizer</a>




<hr />

<a name="Search"></a>

## Search


<a name="KnowledgeMining"></a>
<a name="knowledge-miningTutorials"></a>

### knowledge-mining Tutorials

<a target="_blank" href="https://docs.microsoft.com/en-us/samples/azure-samples/azure-search-knowledge-mining/azure-search-knowledge-mining/">
Knowledge Mining Solution Accelerator</a>

HANDS-ON: <a target="_blank" href="https://microsoftlearning.github.io/mslearn-knowledge-mining/">Tutorial</a>
references <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-knowledge-mining/tree/main/Labfiles">these labfiles</a>
   * Create an Azure AI Search solution
   * Create a Custom Skill for Azure AI Search
   * Create a Knowledge Store with Azure AI Search
   * Enrich an AI search index with custom classes
   * Implement enhancements to search results
   * Enrich a search index using Azure Machine Learning model
   * Add to an index using the push API
   * Debug search issues
   * Set up semantic search
   * Use the REST API to run <strong>vector</strong> search queries
   <br /><br />


### Bing Search

1. Get on the <a target="_blank" href="https://portal.azure.com/#create/microsoft.bingsearch">Bing Resource portal GUI</a>.

1. Define a Resource Group.

1. Price Tier: Free

   PROTIP: Autosuggest requires the "S2" (Standard) pricing tier.
   Spell Check requires either S1 or S2.

1. Click "Automation Options" link for a JSON Template.
1. Click "Create" at the top.
1. Create

   Notice the service name at the upper left is "Microsoft.BingSearch" and has a Global location.
   It's Endpoint is: https://api.bing.microsoft.com/

### Search for AI enrichment of docs

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/search/cognitive-search-concept-intro">
The Azure Cognitive Search service</a> uses a Cognitive Search resource
to support AI-powered search and knowledge mining solutions such as:

   * Index documents and data from a range of sources.
   * Use cognitive skills to enrich index data.
   * Store extracted insights in a knowledge store for analysis and integration.
   <br /><br />

https://blog.api.rakuten.net/top-10-best-search-apis/

"Document cracking" during indexing extracts text content from unstructured text or non-text content (such as images, scanned documents, or JPEG files). 
The indexer accesses an Azure data storage service.

https://blog.scottlowe.org/2019/03/01/advanced-ami-filtering-with-jmespath/



<hr />

<a name="Other"></a>

## Other services

### HealthInsights


<hr />

<a name="BotService"></a>

## Bot Service 

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

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/create-bot-with-bot-framework-composer/">MS LEARN</a>: Create a Bot with the Bot Framework Composer

1. Run the Python Jupyter notebook

   <a target="_blank" href="
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/11%20-%20QnA%20Bot.ipynb">
   https://github.com/MicrosoftLearning/mslearn-ai900/blob/main/11%20-%20QnA%20Bot.ipynb
   Conversational AI LAB</a>

1. Sign in using the Microsoft account associated with your Azure subscription.


PROTIP: Use NVM to install Node

https://github.com/Microsoft/botbuilder-tools#install-cli-tools
says to install Node.js version 10.14.1 or higher

https://github.com/microsoft/botframework-cli
says to install Node.js version 12

Since the current version is now 16, we cannot use the command suggested in the doc:

   <ul><pre>npm i -g @microsoft/botframework-cli</pre></ul>


### Bot Framework

1. bf is the bot framework CLI command

   <pre>One-stop-shop CLI to manage your bot’s resources. BF CLI and AZ CLI together cover your end-to-end bot development workflow needs.
&nbsp;
VERSION
  @microsoft/botframework-cli/4.13.3 darwin-x64 node-v16.1.0
&nbsp;
USAGE
  $ bf [COMMAND]
&nbsp;
COMMANDS
  chatdown      Converts chat dialog files in &LT;filename>.chat format into
                transcript files. Writes corresponding &LT;filename>.transcript
                for each .chat file.
  config        Configure various settings within the cli.
  dialog        Dialog related commands for working with .schema and .dialog
                files.
  help          display help for bf
  lg            Parse, collate, expand and translate lg files.
  luis          Manages LUIS assets on service and/or locally.
  orchestrator  Display Orchestrator CLI available commands
  plugins       Install, uninstall and show installed plugins
  qnamaker      QnA Maker
   </pre>

References:
   * <a target="_blank" href="https://www.microsoft.com/en-us/research/publication/responsible-bots/">Responsible Bots:</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/bot-service/bot-service-design-user-experience?view=azure-bot-service-4.0">Design the user experience</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/composer/introduction">Intro to Composer</a>


<hr />

<a name="OpenAI"></a>

## Azure OpenAI

   References:
   * https://learn.microsoft.com/en-us/azure/ai-services/openai/
   * https://azure.microsoft.com/en-us/services/openai/
   * https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/
   * https://wilsonmar.github.io/genai for definition of terms and tutorials about Generative AI, which produce new content based on what is described in the input. The OpenAI models are a collection of generative AI models that can produce language, code, and images.
   * https://azure.microsoft.com/pricing/details/cognitive-services/openai-service
   <br /><br />

OpenAI is a San Francisco-based artificial intelligence research laboratory. OpenAI was founded by Elon Musk, Sam Altman, Greg Brockman, and Ilya Sutskever in December 2015 (to compete with Google's DeepMind acquisition). 

In 2019 Microsoft invested $1 billion in the company as time on Azure cloud and to develop a large-scale AI supercomputer built exclusively for OpenAI's research in Azure. Azure powers all of OpenAI's workloads. 

In 2023, OpenAI exclusively licensed (closed-source) GPT-3 to Microsoft for their products and services.

In 2022, OpenAI made available their GPT-3.5 foundation model for free trial, offering several categories of capabilities

   * ChatGPT: Generating natural language: summarizing complex text for different reading levels, suggesting alternative wording for sentences, etc.
   * Generating code: translating code from one programming language into another, identifying and troubleshooting bugs in code, etc.
   * Generating images from text prompts, based on OpenAI's DALL-E model. 

   Source: https://openai.com/blog/openai-microsoft/
   <br /><br />

OpenAI's avowed mission is to create Artificial General Intelligence (AGI) (to rival human ability).

OpenAI is a "separate" service from Azure Cognitive Services because
now "traditional" Azure Cognitive Services focuses on making predictions based textual and discrete data where
OpenAI added to ML "attention" algorithms working on binary data (voice, images, and video) to enable it to perform "Generative AI" which produces new content based on what is described in the input.

1.  Assuming that you have a Azure account and subscription at the Azure portal https://portal.azure.com
1.  Consider pricing at https://azure.microsoft.com/pricing/details/cognitive-services/openai-service

    OpenAI put a paywall behind its more advanced GPT-4 models, 

    Billing is based on 1,000 "tokens" increments, with the first 100,000 tokens per month free. Beyond that:
    
    "Standard" use of the older/more limited gpt-3.5-turbo model is then $0.002 per 1,000 tokens.

    Charges for the GPT-4 model has two dimensions: process stage and the size of the foundational model used :

    * The &nbsp; "8K context" has &nbsp; 13 billion parameters.
    * The "32K context" has 175 billion parameters.

    * Prompt
    * Completions
    <br /><br />
    
    Images generated using DALL-E are $2 per 100 images.

    Available for free for the first 100,000 tokens per month, then $0.004 per 1,000 tokens.

1.  Apply for access to Asure OpenAI for your Region and Currency:

    <a target="_blank" href="https://aka.ms/oaiapply">https://aka.ms/oaiapply</a>


<a name="OpenAITutorials"></a>

### OpenAI Tutorials

* https://microsoftlearning.github.io/mslearn-openai
   * https://learn.microsoft.com/en-us/training/browse/?terms=OpenAI
   * https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-openai/
   * <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-openai">https://github.com/MicrosoftLearning/mslearn-openai</a>
   * Get started with Azure OpenAI
   * Integrate Azure OpenAI into your app
   * Utilize prompt engineering in your app
   * Generate and improve code with Azure OpenAI Service
   * Generate images with a DALL-E model
   * Use your own data with Azure OpenAI
   <br /><br />


<hr />

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

https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/limits-and-quotas





## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html %}
