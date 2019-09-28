---
layout: post
title: "Image search and edit"
excerpt: "Make picture be worth a 1,000 words"
tags: [photo, editing, authentication, personalization, jekyll]
date: "2016-03-21"
file: "image-search-and-edit"
image:
# feature: pic blue lake searching 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14621985/1cdb6086-0584-11e6-9570-5cedb9f2385f.jpg
  credit: Braintree Books
  creditlink: http://www.braintreebooks.com/search.htm
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Free?

There are several sites which offer free images.
I've wasted a lot of time trolling through them.

* [http://fabian-kostadinov.github.io](http://fabian-kostadinov.github.io)

* http://www.bloggs74.com/free-stuff/10-best-websites-from-where-you-can-get-hd-wallpapers-for-your-desktop/
list sites that provide <strong>desktop</strong> wallpapers,
which I can crop down.

Most of these sites have banner ads that entice you to paid image sites.

My strategy is to start with free sites.
And when I get disgusted with how crappy they are,
at a certain point, realize my time is worth more,
and get satisfaction at paid sites.


## Paid sites

Among the largest and most heavily marketed:

* [Getty Images](http://gettyimages.com)


A big reason for images from paid sites is the crisper look from higher resolution images.

Prefer lossless png files over jpg files which loses resolution with each edit.


## Search terms

I think one of the keys to finding stuff is using keywords like a boss.

[maps.google.com](http://maps.google.com)
is your friend.

Here are some tips:

* Begin with the size image you want, such as "1900x500".
  This will save you from needing to crop.

   Once you've exhausted those:

* Filter your search term by adding a word with a dash in front,
   such as "-1900x500" if that's what you DON'T want anymore.

* Add **-icon** to filter out the type of image.

So that's that basic pattern: build up your keywords in the search bar.
Try a keyword, then filter.

## Keywords

Here's a list for your brainstorming pleasure:

* Color: white, green, etc.

* Type of image: panorama, HD, movie, etc.

* Type of file: jpg, png, svg, mp4, etc.

* Season of the year.

* Emotion: happy, sad, mad, angry, etc.

* Tone: speed

* Location: forest, desert

* Country: USA


## Avoid words

Avoid an image with words in it, in case you have to localize your site.


## Eureka - now save it

If you see an image that you like, save it for later so you can move on.

Here are some tips about saving the image.

0. Alt-click on the image to save it.

If you don't see **Save Image as...**,
   alt-click again and select **Inspect element**.

0. You may need to save the expand the HTML coding by clicking the arrow in front of a line.

0. If the img src= doesn't beging with "http", you'll need to construct a url.

   Copy the href contents between the quotes, such as:

/static/v1.5.0/core/img/header/doubleclick-search.jpg

   Begin with just the host name in the URL on the browser.

   Clear out characters after the last slash.

* The size of images is important. A 512x512 image

SVG images cannot be saved that way.
Yet they are the preferred type of image file because they scale well,
meaning they look crisp at different sizes.

But I save SVG files anyway with their png or jpg clones
by naming such files with the same prefix as their clone formats
in the same folder.

## Save credit information with images

OK, the likelihood of you getting sued over a picture is small.

But you'll sleep better at night knowing that you're not being hunted.

So save your worry for other things by doing the right thing.

What I do is create a text file named the same as the image,
but with a .txt extension.
In the file

   * URL where you got the information,
   * The date when you retrived it
   * From URL where you found it (such as google)

I personally have a website called assets that I use to save my images.

I tag each image so I can find them later.


