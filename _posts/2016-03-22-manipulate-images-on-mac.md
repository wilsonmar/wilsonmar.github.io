---
layout: post
title: "Crop (Mask) images"
excerpt: "Get just the right 1900x500 picture for your website"
tags: [JavaScript, Load Testing, LoadRunner]
date: "2016-03-22"
file: "manipulate-images-on-mac"
image:
# feature: pic deer in forest 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622052/95b08428-0584-11e6-9679-28430c295cf3.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Photo editing programs #

Adobe Photoshop 
is the choice of professionals, and premium features means money.
Add a lot of training if you're not into frustration.

Windows machines come with Paint (in)


## Sketch on Mac OSX

I have adopted Sketch on my Mac.

The theme that I am using makes use of 1900x500 photos.

Here's how I've learned to make images of that size.

## Search

The easiest thing is to avoid cropping altogether by finding

Search in images.google.com for "1900x500".

## Screen capture #

http://lifehacker.com/5880540/the-best-screen-capture-tool-for-mac-os-x

## Crop

<amp-youtube data-videoid="MqXRVzGyvWU" layout="responsive" width="480" height="270"></amp-youtube>

1. Open the image file with Skitch.

0. Click the **Scale** button and specify one of the dimensions (Width 1900 or Height 500, not both).

   Create a mask area:

0. Click the **Insert** icon at the upper-left corner.

0. Select Shape | Rectangle.

0. On the screen drag a small rectangle. Don't worry about the size because it's too difficult to come up
   up with a precise box with the mouse.

0. Specify the Size: type in width: 1900 and height: 500.

   This needs to be done with the aspect ratio lock off (the default).

0. Drag the mask area onto the picture.

   PROTIP: The <a target="_blank" href="https://en.wikipedia.org/wiki/Golden_ratio">
   Golden Ratio</a> is for the subject of the canvas to be 0.618 from the edge.

   * 1900 * .618 = 1174 + 726
   * 500 * .618 = 309 + 191

0. At the left, select both the Rectangle and the picture: hold down the shift key and click.

0. Click the **Mask** icon.

## Export image #

0. Click menu File \| Export. Select Export Selection.

0. Select the Format (JPG) at the lower right.

0. Click Export Slice 1.

0. Specify the file name and folder name.

0. Copy the file name to the clipboard so you put a reference to it somewhere.

## Response images #

https://24ways.org/2012/responsive-images-what-we-thought-we-needed/

Services to generate images at various breakpoints, for use in HTML such as:

<pre>
&LT;picture width="500" height="500">
&LT;img 
sizes="(max-width: 2000px) 100vw, 2000px"
srcset="
castle_c_scale,w_200.jpg 200w,
castle_c_scale,w_424.jpg 424w,
castle_c_scale,w_576.jpg 576w,
castle_c_scale,w_708.jpg 708w,
castle_c_scale,w_819.jpg 819w,
castle_c_scale,w_915.jpg 915w,
castle_c_scale,w_1012.jpg 1012w,
castle_c_scale,w_1106.jpg 1106w,
castle_c_scale,w_1185.jpg 1185w,
castle_c_scale,w_1276.jpg 1276w,
castle_c_scale,w_1355.jpg 1355w,
castle_c_scale,w_1435.jpg 1435w,
castle_c_scale,w_1505.jpg 1505w,
castle_c_scale,w_1575.jpg 1575w,
castle_c_scale,w_1649.jpg 1649w,
castle_c_scale,w_1720.jpg 1720w,
castle_c_scale,w_1795.jpg 1795w,
castle_c_scale,w_1864.jpg 1864w,
castle_c_scale,w_1932.jpg 1932w,
castle_c_scale,w_2000.jpg 2000w"
src="castle_c_scale,w_2000.jpg"
alt="">
&LT;p>Accessible text&LT;/p>
&LT;/picture>
</pre>

* <a target="_blank" href="http://www.responsivebreakpoints.com/">
  responsivebreakpoints.com</a>
  has a REST API.
  <a target="_blank" href="https://www.smashingmagazine.com/2016/01/responsive-image-breakpoints-generation/">
  (Article about it)</a>
   <amp-img width="500" height="463" alt="scr responsive-breakpoints-settings-opt-preview 500x463" src="https://cloud.githubusercontent.com/assets/300046/15913058/2c8e374a-2d95-11e6-9596-001bbf1daede.png"></amp-img>

* http://adaptive-images.com/
   download for PHP 5 on Apache2/nginx, GD lib.

<hr />

## Resources

