---
layout: post
title: "Testing AI"
excerpt: "What can possibly go wrong with robots smarter than humans?"
tags: [Python, Machine Learning]
date: "2017-02-02"
file: "testing-ai"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Some companies at the "bleeding edge" are moving to
<strong>"AI first"</strong> design.

For example, Foxconn is now assemblying iPhones using mostly mechanical robots rather than human robots.
Tesla, BMW, and other auto manufacturers make heavy use of mechanical robots.

Simerlerly, Uber drivers are human until they are replaced by driverless cars.

By 2017, Artificial Intelligence programs have beaten 
world champions in Jeopardy, chess, go, and poker.
Robots are at par with Olympic atheletes in
<a target="_blank" href="https://www.kuka.com/en-de/about-kuka/brand/timo-boll-the-duel/">
table tennis</a>.

<a target="_blank" href="https://www.forbes.com/sites/bernardmarr/2017/01/30/grammy-nominee-alex-da-kid-creates-hit-record-using-machine-learning/#4b2a311e2cf9">
Hit songs are written</a> with emotional insights gained from
scraping millions of conversations, newspaper headlines and speeches”
"Not Easy" reached number four in the iTunes Hot Tracks chart, and number six in the alternative chart, within 48 hours of its release.

In offices, the trend is to replace people reading lines on screens.
Instead of creating lines on various charts for analysis by people 
   to make decisions,
   computers are making decisions.

## Humans are limited

> "Machines will be capable, within 20 years, of doing any work a man can do." 
--Herbert Simon (1916-2001), Nobel Laureate

This is because a human can only focus on a few things at a time.

Because humans cannot respond quick enough,
instead of sending alerts for people to take action,
computers are beginning to take action automatically.

Self-driving cars by Tesla, comma.ai, and others
are a manifestation of this trend.

A lot can also happen in a few seconds within a computer.
So vigilant actions such as <a target="_blank" href="http://www.csoonline.com/article/3163458/security/how-ai-is-stopping-criminal-hacking-in-real-time.html">scanning for malware</a>
need to be done <strong>real-time</strong>.

A program can look for patterns in behavior and alert people to new threats detected.

In operation of computers, <strong>configuration settings</strong>
are increasingly being updated by programs 
instead of people <strong>editing</strong> files.


## No rules

Traditionally, programmers hand-code rules to detect and respond to known threats.

But this has not kept up.

AI (neural networks in particular) 
can now discover, in real-time, 
threats such as malware installation, phishing attacks, and brute-force intrusions
which <strong>programmers did not anticipate</strong>.

They can do that because Big Data systems enable the analysis of massive floods of data quickly.
Many computers in the cloud (with fast Google Fiber network links) 
now process data faster than in the past.

The increased scope of AI's processing capabilities now means it can 
analyze many more variables quickly.
For example, to identify malware, an AI program can quickly scan every email for phising by
looking for clues such as the originating IP address, word choice and phrasing, 
and many other factors.

## Predictions from Swarm

AI can be designed to make <strong>prediction</strong> 
based on data analyzed.

Startup Unanimous A.I. (<a target="_blank" href="http://unu.ai/what-is-unu/">uni.ai</a>) 
has, since 2015, been making accurate predictions like who will win contests
such as the Superbowl, March Madness, US presidential debates, the Kentucky Derby superfecta, Academy Awards, etc.
It has been more accurate than individual experts.

Its software platform (called UNU) milks conclusions not from algorithms, but
from the "collective wisdom" 
of group of <strong>breathing people</strong> who
influence each other by their vote, in real-time, like a Ouiji board.
(
<img src="https://tr1.cbsistatic.com/hub/i/2017/02/24/a92880f2-212c-4803-b6bd-f4e0f4de67ba/d865deed94d9ad5d8c68778d636a2c58/qqz8bt9.gif" alt="qqz8bt9.gif">


## The role of humans

In the above scenarios, the role of human operators is to
make sure the data sets fed into an AI engine are accurate and robust. 

Data quality is more important than ever to weed out <strong>false positives</strong>.
The old adage "garbage in garbage out" applies even more today.
Systems can only be as intelligent as the data it analyzes. 

More importantly, AI adapts rules to deal with new threats.

AI does that by analyzing judgements human experts make.


## "Sophomoric"

<a target="_blank" href="https://www.youtube.com/watch?v=M2IebCN9Ht4">
VIDEO: Deep Neural Networks are Easily Fooled</a>
by Evolving AI Lab

When an early-model Tay chatbot was first introduced in 2015,
Microsoft shut it down a week after launch because
it began spewing out racist and sexist texts
because it lacked the filter that most human kids learn from parents.


## Data quality

<p>Normalizing Data<br />
<a href="https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/normalize-data">https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/normalize-data</a></p>

<p>TanH<br />
<a target="_blank"  href="https://reference.wolfram.com/language/ref/Tanh.html">https://reference.wolfram.com/language/ref/Tanh.html</a></p>

<p>ZScore<br />
<a target="_blank"  href="http://stattrek.com/statistics/dictionary.aspx?definition=z-score">http://stattrek.com/statistics/dictionary.aspx?definition=z-score</a><br />
<a target="_blank" href="http://howto.commetrics.com/methodology/statistics/normalization/">http://howto.commetrics.com/methodology/statistics/normalization/</a></p>

<p>Min Max<br />
<a target="_blank"  href="https://www.quora.com/What-is-the-meaning-of-min-max-normalization">https://www.quora.com/What-is-the-meaning-of-min-max-normalization</a></p>

<p>PCA<br />
<a target="_blank"  href="https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/principal-component-analysis">https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/principal-component-analysis</a><br />
<a target="_blank"  href="https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/principal-component-analysis">https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/principal-component-analysis</a><br />
<a target="_blank" href="https://stackoverflow.com/questions/9590114/importance-of-pca-or-svd-in-machine-learning">https://stackoverflow.com/questions/9590114/importance-of-pca-or-svd-in-machine-learning</a></p>

<p>Singular Value Decomposition (SVD)<br />
<a target="_blank" href="http://andrew.gibiansky.com/blog/mathematics/cool-linear-algebra-singular-value-decomposition/">http://andrew.gibiansky.com/blog/mathematics/cool-linear-algebra-singular-value-decomposition/</a></p>

<p>Canonical-correlation analysis (CCA)<br />

<a target="_blank" href="https://en.wikipedia.org/wiki/Canonical_correlation">
https://en.wikipedia.org/wiki/Canonical_correlation</a></p>

<a href="http://andrew.gibiansky.com/blog/mathematics/cool-linear-algebra-singular-value-decomposition/">http://andrew.gibiansky.com/blog/mathematics/cool-linear-algebra-singular-value-decomposition/</a></p>

<h4>Develop Machine Learning Models</h4>

<p>Team Data Science<br />
<a target="_blank"  href="https://docs.microsoft.com/fi-fi/azure/machine-learning/team-data-science-process/python-data-access">https://docs.microsoft.com/fi-fi/azure/machine-learning/team-data-science-process/python-data-access</a></p>

<p>K-Means<br />
<a target="_blank"  href="https://www.datascience.com/blog/k-means-clustering">https://www.datascience.com/blog/k-means-clustering</a></p>

<p>Confusion Matrix<br />
<a target="_blank"  href="http://www.dataschool.io/simple-guide-to-confusion-matrix-terminology/">http://www.dataschool.io/simple-guide-to-confusion-matrix-terminology/</a><br />
<a target="_blank"  href="https://en.wikipedia.org/wiki/Confusion_matrix">https://en.wikipedia.org/wiki/Confusion_matrix</a><br />
<a target="_blank"  href="https://en.wikipedia.org/wiki/F1_score">https://en.wikipedia.org/wiki/F1_score</a></p>

<p>Ordinal Regression<br />
<a target="_blank"  href="https://en.wikipedia.org/wiki/Ordinal_regression">https://en.wikipedia.org/wiki/Ordinal_regression</a></p>

<p>Poisson regression<br />
<a target="_blank"  href="https://en.wikipedia.org/wiki/Poisson_regression">https://en.wikipedia.org/wiki/Poisson_regression</a></p>

<p>Mean Absolute Error and Root Mean Squared Error<br />
<a target="_blank"  href="http://www.eumetrain.org/data/4/451/english/msg/ver_cont_var/uos3/uos3_ko1.htm">http://www.eumetrain.org/data/4/451/english/msg/ver_cont_var/uos3/uos3_ko1.htm</a></p>

<p>Cross Validation<br />
<a target="_blank" href="https://towardsdatascience.com/cross-validation-in-machine-learning-72924a69872f">https://towardsdatascience.com/cross-validation-in-machine-learning-72924a69872f</a></p>


## Output

Model training produces a <strong>checkpoint file</strong> that contains a 
model which already has parameters output from traning.
Using checkpoint files means we can get straight to applying the model.



## Technical Debt

https://www.ca.com/us/rewrite/articles/agile/accelerating-velocity-and-customer-value-with-agile-and-devops.register.html


## Coding

https://www.youtube.com/watch?v=KkwX7FkLfug
Neural Net in C++ Tutorial on Vimeo
vinh nguyen

https://www.youtube.com/watch?v=AyzOUbkUf3M
The Next Generation of Neural Networks
GoogleTechTalks

https://www.youtube.com/watch?v=oYbVFhK_olY
Deep Learning with Neural Networks and TensorFlow Introduction
by sentdex

https://www.youtube.com/watch?v=ujBiM9stPHU
Neural Network Calculation (Part 1): Feedforward Structure
Jeff Heaton


## OpenAI

https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618
Deep Learning (Adaptive Computation and Machine Learning series)</a>
by Ian Goodfellow, 	
Yoshua Bengio, and 
Aaron Courville (of OpenAI)
"is the only comprehensive book on the subject." 


## Articles

http://www.computerworld.com/article/3163145/data-analytics/how-to-root-out-bias-in-your-data.html

https://blog.monkeylearn.com/sentiment-analysis-apis-benchmark/

https://medium.com/@jaredpolivka/machine-learning-with-humans-in-the-loop-lessons-from-stitchfix-300672904f80#.4n5ub8pt6


https://www.youtube.com/watch?v=zwm2C3V35Fw
Artificial Intelligence - The Apex Technology of the Information Age: Goldman Sachs' Heath Terry
2:41 general talk


## More about Python

This is one of a series about Python:

{% include python_links.html %}
