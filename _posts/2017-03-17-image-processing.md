---
layout: post
title: "Image processing"
excerpt: "Processing of image files using Artificial Intelligence and Machine Learning"
tags: [HTML, personalization, machine learning, ML]
date: "2017-03-17"
file: "image-processing"
image:
# feature: pic green matrix hallway 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14623876/07afd066-0593-11e6-933a-2e596511ac67.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include ai_links.html %}


## Artistic Style Transfer

Drop your photo onto one of these websites
and it repaints a photo in the style of another piece of art.

   * <a target="_blank" href="https://deepart.io/">https://deepart.io</a>
   * http://www.pikazoapp.com/
   * https://artisto.my.com/
   * https://prisma-ai.com/

More about this:

   * https://harishnarayanan.org/writing/artistic-style-transfer/
   * https://ml4a.github.io/ml4a/style_transfer/
   * http://genekogan.com/works/style-transfer/
   * https://arxiv.org/abs/1508.06576
   * https://jvns.ca/blog/2017/02/12/neural-style/



## Image recognition program 

Keras library on top of Google TensorFlow calling Numpy

https://github.com/llSourcell/How-to-Generate-Art-Demo
2:45 into this

0. Load images

0. The keras.concatenate function

0. Use vgg16. It is a 16-layer CNN that recognizes generalized features

   We don't need to classify, just transform the image.

0. Gram Matrix measures which features tend to activate together,
   the co-occurance

0. Derivative of loss to get gradients

0. Minimize loss using optimization sheme similar to SGD (Schocastic Gradient Descent) 
   called L-BFGS.


## Neural Nets

In 1989 the US Post Office automated the reading of ZIP codes on mail envelopes using
a "neural network" developed at Bell Labs.
The capability was dubbed "LeNet" by Yann LeCun, 
who combined together the earlier ideas of convolutional neural networks and backpropagation, and applied them to the problem of handwritten digits classification. 


## Torrents

Due to the advancement of distributed compute resources, organizations are 
generating a torrant of image, text, and voice data.
This provides a scope of data from which insights are not previously possible.



## More #

This is one of a series on Artificial Intelligence:

{% include ai_links.html %}
