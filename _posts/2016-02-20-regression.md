---
layout: post
title: "(Statistical Multi-Variate) Regression"
excerpt: "How to calculate a formula from multiple variables in Excel, and stistics to evaluate them"
tags: [apple, mac, setup]
date: "2016-02-20"
file: "regression"
image:
# regression-190x500
  feature: https://user-images.githubusercontent.com/300046/133376673-1bc5fa13-ee2c-441a-9005-388bc34b11c5.png
  credit: DataScience.Foundation
  creditlink: https://datascience.foundation/sciencewhitepaper/understanding-linear-regression-with-python-practical-guide-2
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here are my notes on how to create a multi-variate Linear Regression formula
using Microsoft Excel and <a href="#PythonRegression">Python programs</a>.

<a name="Evaluation"></a>

## Evaulation of regression fit

"Loss" is how far off actual values are from the estimation function (model).

To define the total loss for a function, we want to examine the length of loss regardless of whether it's over or under. Thus, we calculate the square of each sample loss
so negative values are treated as positive.

<strong>Mean square error (MSE)</strong> is the average squared loss per example, calculated by summing up all the squared losses for individual examples, then dividing by the number of examples.

Although MSE is commonly-used, it is neither the only practical loss function nor the best loss function for all circumstances.


<a target="_blank" href="https://towardsdatascience.com/what-are-the-best-metrics-to-evaluate-your-regression-model-418ca481755b">Which one is best?</a>

* <strong>Coefficient of Determination (R2)</strong>: (aka "R-Squared) is a relative measure of how well the model fits dependent variables. It summarizes the variance between predicted and true being explained by the model. The closer to 1 this value is, the better the model is performing. It does not take into consideration of overfitting problem if it performs poorly with training data. Thus:

* Adjusted R Square penalises for additional independent variables added to the model and adjusts the metric to prevent overfitting.


MSE, RMSE or MAE are used to compare performance between different regression models:

* <strong>Mean Absolute Error (MAE)</strong> is an absolute measure of the goodness for the fit. It gives you an absolute number on how much your predicted results deviate from the actual number.  The average difference between predicted vs. true values. This value is based on the same units as the label, such as dollars. The lower this value is, the better the model is predicting.

* <strong>Root Mean Squared Error (RMSE)</strong> is used by Kaggle to assess submissions for its competition. The square root of the mean squared difference between predicted and true values. The result is a metric based on the same unit as the label (dollars). A larger difference When compared to the MAE (above) indicates greater variance in the individual errors (for example, with some errors being very small, while others are large).


To compare models where labels are in different units:

* <strong>Relative Absolute Error (RAE)</strong>: A relative metric between 0 and 1 based on the absolute differences between predicted and true values. The closer to 0 this metric is, the better the model is performing. 

* <strong>Relative Squared Error (RSE)</strong>: A relative metric between 0 and 1 based on the square of the differences between predicted and true values. The closer to 0 this metric is, the better the model is performing. 




## Obtain Sample Data

We need some sample data to build a linear regression model to provide results and a recommendation.

One is predicting expected profits from a catalog launch by a home-goods manufacturer.

1. Download the sample data file diamonds.csv which has 50,000 rows.

   The training set contains historical data where the outcome is already known
   and included as a column along with the input data.

   Outcome values are in the target variable (price).

   NOTE: A column in a spreadsheet some call a "data field".

0. The test dataset (new-diamonds.csv) contains new instances that do not have outcomes 
   (prices) defined.

   ### Install Excel

   This tutorial assumes that you have Microsoft Excel installed.

   To create a multi-variate regression in Excel:

   <iframe width="560" height="315" src="https://www.youtube.com/embed/kShe0b-sK4o" frameborder="0" allowfullscreen> </iframe><br /><small>This video is from the Udacity class,
   about a different data set</small>
   <br />

   ### Open in Excel

   During the installation processes on Windows or MacOS,
   the operating system is told that suffixes at the end of file names,
   such as ".csv" and ".xlsx" are opened using Excel.

0. In Finder or 
   double-click on the diamonds.csv file to open it in Excel.

   ### Activate Analysis Toolpak

0. In Excel, click on the <strong>Data</strong> tab.

   If <strong>Data Analysis</strong> does not appear on the far right, 
   the Analysis Toolpak needs to be installed:

   On Excel 2016, click the Tools menu at the top of the screen to select Excel Add-ins.
   Check Analysis ToolPak, then OK.

   On Excel 2013, click the File menu at the top of the screen to select Properties.
   Check Analysis ToolPak, then OK.

   The above only needs to be done once.


   ## Data preparation

   ### Contiguous X columns

   Excel needs all variables together, so:

1. Select the letter above the "caret" column to select the whole column.
4. Press Ctrl+X to cut. Click on the column heading to the right of the "price" column.
5. Repeat for the "clarity_ord" and "cut_ord" columns.

   ### Generate

6. In Excel Data tab, Click on Data Analysis.
7. If you don't see "Data Analysis", enable Analysis Toolpack. This only needs to be done once. 
8. Select Regression and OK.

   Conditions of attributes are in the predictor variables,
   also called dependent variables or (in Excel), Y Range.

0. Click the red arrow icon for Y Range.
0. Check "Labels"
0. Click in row 1 "price". Press Command-shift-down to select the whole column

   $H$1:$H$50001

0. Click the icon to collapse the pop-up.
0. Press Enter.

   $I$1:$K$50001

0. Click the icon to Output range.
0. Cick cell N1, which leaves two blank columns.
0. Press Enter to accept it.

0. Click OK.

0. Variables with P-values (Prediction-values) beyond .15 should not be used.

   Regression equation models enable predictions to be made based on attibute values.

   ### 

0. Click on the blank cell to the left of "intercept", type = and click the Coefficient value of intercept.
0. Two columns to the left of "clarity_ord", type the input data you want an estimate for.
0. Repeat this for each input.
0. Click on the blank cell to the left of "intercept", type = and click the Coefficient value of intercept.
0. Add a =sum() of all cells above it.


0. TODO: COMPLETE THIS 

   R Square is the percent of variance in Y that can be explained by all the X variables.
   1.0 is perfect. 0.75 is the threshold for not.

   Standard Error is the error of prediction expressed in the value range of Y.


## Language and Theory

There are several classes that teach this topic:

<a target="_blank" href="https://www.datacamp.com/courses/multiple-and-logistic-regression">
Video course Multiple and Logistic Regression on-line class</a>
by Ben Baumer, Assistant Professor at Smith College
uses a database of Italian restaurants in New York City to explore the relationship between price and the quality of food, service, and decor. Learn about logistic regression for an arbitrary number of input variables.
Covered are model and predict both numeric and categorical outcomes. 
You'll also learn how to fit, visualize, interpret, and compare models.
Learn about the class of linear models called "parallel slopes models."
Learn to compare models so that you can select the best one.
Add two, three, and even more numeric explanatory variables to a linear model.

The nice thing about datacamp's videos is that one can highlight and copy text from videos, such as this:

   <pre>
ggplot(data = mpg_manuals, aes(x = factor(year), y = hwy)) + 
  geom_boxplot()
   </pre>

<a name="References"></a>

## References

https://hbr.org/2015/11/a-refresher-on-regression-analysis
A Refresher on Regression Analysis
by Amy Gallo

https://www.wikiwand.com/en/Linear_regression


## Resources


* https://www.youtube.com/watch?v=O7TMCYuDbDc
* https://www.youtube.com/watch?v=HgfHefwK7VQ

