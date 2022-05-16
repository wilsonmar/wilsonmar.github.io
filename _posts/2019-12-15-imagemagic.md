---
layout: post
title: "ImageMagic"
excerpt: "Manage photos and Python Scikit Learn"
tags: [Selenium, AI, Machine Learning]
date: "2019-12-15"
file: "imagemagic"
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

If you need to convert images, use the popular free open-source <a target="_blank" href="https://imagemagick.org/index.php">https://imagemagick.org</a>

{% include whatever.html %}

## Install

1. Install using HomeBrew (instead of downloading, gunzip, variables, etc.):

   <pre><strong>brew install imagemagick</strong></pre>
   
1. Because ImageMagick depends on Ghostscript fonts, install them as well:

   <pre><strong>brew install ghostscript</strong></pre>


### Scikit Learn

https://www.pluralsight.com/courses/building-features-image-data
Building Features from Image Data Aug 13, 2019 
by Janani Ravi

In a Jupyter Notebook:

1. Install (within venv) from https://scikit-image.org/

   <pre><strong>pip3 install -U scikit-image</strong></pre>


## Convert

To improve CNN network performance:

* Crop for uniform Aspect Ratio (square, 16:9 HD)
* uniform Image size (downscaling to smaller image or upscaling to larger image)
* Mean and Perturbed images (detect faces and put them in the center of the image)
* Dimenionality reduction
* Data augmentation (scaling, rotation, <a target="_blank" href="http://mathworld.wolfram.com/AffineTransformation.html">affine transforms</a> to preserve collinearity (i.e., all points lying on a line initially still lie on a line after transformation) and ratios of distances (e.g., the midpoint of a line segment remains the midpoint after transformation). Also called an affinity.


* Normalized impage outputs around mean

1. To convert a file (such as a pdf) into a high-resolution image, use Imagemagick's convert command:

   <pre>convert -density 300 test.pdf -depth 8 -strip -background white -alpha off out.tiff
   </pre>

   The last parameter is the output file.

   This also takes off <strong>Alpha channels</strong> and outputs to a <strong>TIFF format</strong> file.

   Alternative parameters are "-monochrome" to convert to black-and-white. These have a single "channel" whereas color images have 3 channels (Red, Green, Blue).

## Flip image

![image-processing-typepress-554x418](https://user-images.githubusercontent.com/300046/70955935-add21700-202f-11ea-8c0e-f6934e3004c5.png)

Images seen reflected on a mirror or on a traditional letterpress need to be flipped (left to right).
Sample scikit-learn code:

   <ul><pre>image_mirror_fliplr = np.fliplr(img_mirror)
   </pre></ul>

## Anti-aliasing

## Denoising Images


## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html  %}
