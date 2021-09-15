---
layout: post
title: "Classification"
excerpt: "Statistics to evaluate classification: Confusion Matrix, Specificity, ROC, and AUC, etc."
tags: [microsoft, azure, machine learning, AI]
date: "2021-09-04"
file: "classification"
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

<a name="Sample"></a>

## Sample

This graphic is from a <a target="_blank" href="https://wilsonmar.github.io/azure-machine-learning/">sample Microsoft Azure ML Pipeline Visualize Evaluation result</a>:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/120211396-2316b500-c1ee-11eb-88e9-0eb39ae5eaff.png">
   <img alt="az-ml-eval-roc-841x503.png" width="841" height="503" src="https://user-images.githubusercontent.com/300046/120211396-2316b500-c1ee-11eb-88e9-0eb39ae5eaff.png"></a>

Azure does not present all the statistics, which we cover here.


<a name="Evaluation"></a>

## Evaluation

Among the statistical measures presented:


<a name="ConfusionMatrix"></a>

### Confusion Matrix

The multi-colored box at the lower-right is called a <a target="_blank" href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-understand-automated-ml#confusion-matrix">"Confusion Matrix"</a>, a metric of classification model performance.

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/create-classification-model-azure-machine-learning-designer/evaluate-model">DOC</a>:
Test data was split so some of the data is used to determine how well predictions created from a model. The matrix is presented in a 2x2 box with the Predicted label to Actual (True) Label (yes or no) to identify true/false positives/negatives. 

REMEMBER for the test: Draw this on the white board from memory:

   <table border="1" cellpadding="4" cellspacing="0">
   <tr align="center" style="background-color:#E0E0E0;"><th> n=165 </th><th> Actual: YES 105 </th><th> Actual: NO 60 </th></tr>
   <tr align="center" valign="top"><th style="background-color:#E0E0E0;"> Predicted: YES 110<br />"Precision"<br />Relevant:</th><td> 100 <strong>True Positives</strong><br />"Sensitivity rate" </td><td> 10 <strong>False Positives</strong><br />(Type I error)<br />"False alarms"</td></tr>
   <tr align="center" valign="top"><th style="background-color:#E0E0E0;"> Predicted: NO 55 </th><td> 5 <strong>False Negatives</strong><br />(Type II error)<br />"got away"</td><td> 50 <strong>True Negatives</strong><br />"Specificity = Recall"</td></tr>
   <tr align="center" valign="top"><th> All: </th><td> Accuracy rate </td><td> Error rate </td></tr>
   </table>

Outside the box of n (total):

   * <strong>Accuracy</strong> Overall, how often is the classifier correct? (TP + FN) / n = ( 100 + 5 ) / 165.

   * <strong>Prevalence</strong>: (aka "Error Rate") How often does the yes condition actually occur in our sample?  actual yes/total = 105/165 = 0.64

Based on n (total) diagonal:<a target="_blank" href="https://www.dataschool.io/simple-guide-to-confusion-matrix-terminology/">*</a>

   * <strong>Average Precision (AP)</strong> is the ratio of correct predictions (True Positives + True Negatives) to the total number of predictions. When it predicts yes, how often is it <strong>True</strong> (correct)?". (100 + 50) / 165 

   * <strong>Misclassification Rate</strong> : Overall, how often is it <strong>False</strong> (wrong)? (10+5) / 165 = 0.09

Within the box:

   * <strong>Precision rate</strong> is the ability of a classification model to identify only the relevant data points. It is the percentage of items <strong>selected</strong> (True Positive and False Positive) which were <strong>relevant = correctly predicted</strong> yes: 100 / 110 = 0.91. This is used in studying rare diseases when many more people would not have the disease than with the disease or <a target="_blank" href="https://towardsdatascience.com/beyond-accuracy-precision-and-recall-3da06bea9f6c">picking terrorists</a>.

<a target="_blank" href="https://www.youtube.com/watch?v=FnJ3L-63Cf8&t=20s">VIDEO</a>: 
Columns represent the known truth: The higher the number, the better:

   * <strong>Sensitivity (aka "Recall") rate</strong> or the ability of a model to find all the relevant cases within a dataset. Sensitivity is the percent of items <strong>correctly identified as Positive</strong> from among  <strong>relevant items</strong> selected. (True Positives and False Negatives). It is the percent of  = TP / (TP + FN) = 100 / (100 + 5) = 0.83. 

   * <strong>Specificity rate</strong> is the percent of no's correctly identified as <strong>Negative</strong> = TN / (TN + FP) = 50 / (50 + 10) = 0.83. 

A perfect classifier has precision and recall both equal to 1.
But Positivity and Recall metrics cannot both be perfect. conflict with one another.<a target="_blank" href="https://www.analyticsvidhya.com/blog/2020/09/precision-recall-machine-learning/">*</a>
Precision and recall should always be reported together.

Different values in the Confusion Matrix would be created for each level of threshold.


<a name="F1Score"></a>

### F1 Score

<a target="_blank" href="https://www.youtube.com/watch?v=Z9NZY3ej9yY">VIDEO</a>:
<a target="_blank" href="https://www.wikiwand.com/en/F-score">F-1 Score</a> is a single number that takes into account both precision and recall: the weighted average (harmonic mean) of the true positive rate (recall) and precision = 2 ( 1/P + 1/R ).
When comparing between models, <strong>the larger the F1, the better</strong>.

Some plot the F1 Score over time in a line graph to determine progress over time.


## ROC and AUC curves

<a target="_blank" href="https://www.youtube.com/watch?v=4jRBRDbJemM&list=RDCMUCtYLUTtgS3k1Fg4y5tAhLbw&start_radio=1">VIDEO</a>: <a target="_blank" href="https://www.dataschool.io/roc-curves-and-auc-explained/">For example</a>, 

![classification-roc-1680x1050](https://user-images.githubusercontent.com/300046/133380288-58d8d5cf-5de4-4b38-8711-5ca052cee513.png)

For a model that predicts the probability of obesity in mice based on weight, each combination of probability and weight is plotted twice: Along the horizontal line, a red dot is placed for each subject we know to be "not obese".
The heavier the subject's weight, the further that subject is placed to the right of the line.
A blue dot is placed for each subject known to be "obese".
Additionally, as an X (like a scattergraph) for the combination of weight and probabilty predicted. Blue designates correct and red designates each incorrect prediction.

The <strong>Threshold</strong>, shown at "0.5" can be adjusted up or down (even though the control is horizontal).

The Threshold would be set lower when it is important to correctly classify positives (such as whether a patient is infected).<br />But this would likely increase the number of False positives.

<a target="_blank" href="https://www.youtube.com/watch?v=4jRBRDbJemM">VIDEO</a>:
![stats-roc-1057x650](https://user-images.githubusercontent.com/300046/117527397-012c6880-af89-11eb-86e0-c97409bb246a.png)

ROC (Receiver Operating Characteristic) curve shows the relationship between the rate (percentage of) True Positives aka "Sensitivity" on the Y axis vs. the percentage (rate) of True Negatives on the X axis, as the decision <strong>Threshold</strong> changes. 

In other words, the ROC graph summarizes all the Confusion Matrices resulting from each Threshold setting, so you can select the level appropriate.

### AUC to compare ROC curves

The <a target="_blank" href="https://www.youtube.com/watch?v=OAl6eAyP-yo">VIDEO</a>: 
<strong>AUC (Area Under the Curve)</strong> diagram compares different ROC curves.
For example, to compare methods of categorization (such as between Logistic Regression vs Random Forest). 

A model with AUC of 0.5 performs no better than random chance. 
The larger the AUC to 1.0 the better the model is at separating classes. Thus, the ideal AUC is 1.0. 

References:
   * https://towardsdatascience.com/the-roc-curve-unveiled-81296e1577b