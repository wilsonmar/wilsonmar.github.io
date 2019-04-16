---
layout: post
title: "Microsoft AI"
excerpt: "How to run Cortana AI on Microsoft's Azure cloud"
tags: [microsoft, machine learning, AI]
image:
# feature: pic green matrix hallway 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14623876/07afd066-0593-11e6-933a-2e596511ac67.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This article provides a guided tour of use Microsoft's AI (Artificial Intelligence) offerings, which include Machine / Deep Learning capabilities running on the Azure cloud.

https://www.microsoft.com/en-us/learning/azure-exams.aspx#exam-774-section

## History

In 2014, Microsoft showed off its facial recognition capabilities with
<a target="_blank" href="https://www.how-old.net/">how-old.net</a>
to guess how old someone is. At conferences they built a booth that takes a picture.

In 2015, Microsoft unleashed the Tay chat bot, then had to bring it down after hackers submitted enough racial slurs that they fooled the system into thinking that was normal and acceptable. 

In April 2018 Microsoft reorganized into two divisions that offers AI:

* <a target="_blank" href="https://www.microsoft.com/en-us/research/project/machine-learning-edge/">
The research division</a>, headed by Harry Shum, is putting AI into Bing search, Cortana voice recognition and text-to-speech, ambient computing, and robotics.

   * <a target="_blank" href="https://www.youtube.com/watch?v=_Hg9QKBhERw">
   See Harry's presentation in 2016</a>

* Microsft's "computing fabric" offerings, led by <a target="_blank" href="https://www.linkedin.com/in/guthriescott/">Scott Guthrie</a>, makes AI services available for those building customizable machine learning with speech, language, vision, and knowledge services. Tools offered include Cognitive Services and Bot Framework, deep-learning tools like Azure Machine Learning, Visual Studio Code Tools for AI, and Cognitive Toolkit.

Microsoft's Azure IoT Edge (at <a target="_blank" href="https://github.com/Azure/ai-toolkit-iot-edge"> https://github.com/Azure/ai-toolkit-iot-edge</a>) brings AI and machine learning to the edge of networks, such as in the field and on factory floors. See the <a target="_blank" href="https://gallery.azure.ai/Solution/IoT-Edge-2">Sample app</a> and <a target="_blank" href="https://social.msdn.microsoft.com/forums/azure/en-US/home?forum=MachineLearning">read all the unanswered forum posts</a>

   * https://channel9.msdn.com/events/Build/2018/BRK2154
   <br /><br />

## Project Brainwave

At Build 2018, Microsoft announced <a target="_blank" href="https://www.microsoft.com/en-us/research/publication/serving-dnns-real-time-datacenter-scale-project-brainwave/">Project Brainwave</a> to run Google's Tensorflow AI code and Facebook's Caffe2, and Microsoft's <a href="https://wilsonmar.github.io/CNTK/">Cognitive Toolkit</a>. 

[<a target="_blank" href="https://www.microsoft.com/en-us/research/publication/serving-dnns-real-time-datacenter-scale-project-brainwave/">
This pdf</a> white paper says the "high-performance, precision-adaptable FPGA soft processor is at the heart of the system, achieving up to 39.5 TFLOPs of effective performance at Batch 1 on a state-of-the-art Intel Stratix 10 FPGA."
Microsoft's use of field programmable gate arrays (FPGA) calculates AI reportedly "five times faster than Google's TPU hardware".

"Each FPGA operates in-line between the server’s network interface card (NIC) and the top-of-rack (TOR) switch, enabling in-situ processing of network packets and point-to-point connectivity between hundreds of thousands of FPGAs at low latency (two microseconds per switch hop, one-way)."

Documentation on CNTK is at <a target="_blank" href="
https://docs.microsoft.com/en-us/cognitive-toolkit/index">
https://docs.microsoft.com/en-us/cognitive-toolkit/index</a>

https://docs.microsoft.com/en-us/cognitive-toolkit/brainscript-basic-concepts
BrainScript uses a C-like syntax that is aimed at allowing to express neural networks in a way that looks like math formulas. BrainScript is dynamically typed.

Brainscript has a <a target="_blank" href="https://docs.microsoft.com/en-us/cognitive-toolkit/BrainScript-and-Python-Performance-Profiler">
Performance Profiler</a> that can be enabled.

Hyper-parameters are a separate module (alongside Network and reader) 
to perform SGD (stochastic-gradient descent).

https://www.youtube.com/watch?v=eJOv-TfhhzQ

https://services.azureml.net/

## Subject matter

There is dual approach to understanding and using AI/Machine Learning:

   * Use cases for specific industries/problem areas
   * Tools (Algorithms)

## AI Use Cases

Case studies of how people are already making use of AI/ML to save time and money:

   * Predictive Maintenance data science <a target="_blank" href="https://info.microsoft.com/CO-AAIoT-WBNR-FY16-07Jul-05-Predictive-Maintenance-Registration.html">webinar</a>
   * Defect Detection with Image Analysis
   * Custom Entity Extraction with Text Analytics
   <br /><br />

XiaoIce, a chatbot Microsoft launched in China, "has more than 200 million users, has engaged in 30 billion conversations, and has an average conversation length of 23 turns, which averages out to about half an hour, achieving human parity at translation from Chinese to English.
 Japan-based Rinna and the US-based Zo)


## FATE and Ethical Principles

Microsoft has a <a target="_blank" href="https://www.microsoft.com/research/group/fate/">FATE (Fairness, Accountability, Transparency, and Ethics)</a> research group:

* Fairness: AI systems should treat all people fairly.
* Accountability: AI systems should have algorithmic accountability.
* Transparency: AI systems should be understandable.

But who else is looking out for the other <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/azure-artificial-intelligence/5-ai-impact-and-ethics">Microsoft's ethical principles</a>
guiding the development and use of artificial intelligence with people:

* Reliability & Safety: AI systems should perform reliably and safely.
* Inclusiveness: AI systems should empower everyone and engage people.
* Privacy & Security: AI systems should be secure and respect privacy.

<ul>
<li><a href="http://azure.com/ai" data-linktype="external">Azure AI product page</a></li>
<li><a href="https://azure.microsoft.com/case-studies/" data-linktype="external">Azure case studies</a></li>
<li><a href="https://azure.microsoft.com/blog/" data-linktype="external">Microsoft Azure Blog</a></li>
<li><a href="https://channel9.msdn.com/Shows/AI-Show" data-linktype="external">Channel 9 AI Show</a></li>
<li><a href="https://www.microsoft.com/ai/ai-for-good" data-linktype="external">AI for Good</a></li>
<li><a href="https://www.microsoft.com/seeing-ai/" data-linktype="external">Seeing AI application</a></li>
<li><a href="https://news.microsoft.com/futurecomputed/" data-linktype="external">The Future Computed book</a></li>
</ul>

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

<a name="HDInsight"></a>

## HDInsight

<a target="_blank" href="https://gallery.azure.ai/Solution/Fraud-Detection-with-Azure-HDInsight-Spark-Clusters-2">
Fraud Detection with Azure HDInsight Spark Clusters</a>

<a target="_blank" href="https://gallery.azure.ai/Solution/Loan-Credit-Risk-with-Azure-HDInsight-Spark-Clusters">
Loan Credit Risk with Azure HDInsight Spark Clusters</a>

<a target="_blank" href="https://gallery.azure.ai/Solution/Loan-ChargeOff-Prediction-with-Azure-HDInsight-Spark-Clusters">
Loan ChargeOff Prediction with Azure HDInsight Spark Clusters</a>

## Data Science VM

https://docs.microsoft.com/en-us/azure/machine-learning/data-science-virtual-machine/overview#whats-included-in-the-data-science-vm

## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html %}
