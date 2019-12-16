---
layout: post
title: "Tesseract OCR"
excerpt: "AI computer vision recognizes what's on your screen and clicks on it"
tags: [Clouds, IoT]
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

{% include _toc.html %}

<img width="192" alt="opencv-sikulix-v01-192x133.png" src="https://cloud.githubusercontent.com/assets/300046/24071304/2de19d0a-0ba5-11e7-9cdc-c7903b2b3bcf.png" align="right">

Originally from HP, <a target="_blank" href="https://twitter.com/theRaySmith">@theRaySmith</a> at Google <a target="_blank" href="https://github.com/tesseract-ocr/docs/blob/master/das_tutorial2016/1Intro-history.pdf">says in 2016 Tesseract includes LSTM</a> (machine learning with convolutional and deep belief networks).

BTW, the word "tesseract" means a representaton of a 4-dimensional cube <a target="_blank" href="https://www.wikiwand.com/en/Tesseract">*</a>. The word is used for the name of the library because
the library can recognize multiple-directional 3D lines.

   * https://github.com/gulakov/tesseract-ocr-sample
   * http://blog.ayoungprogrammer.com/2012/11/tutorial-installing-tesseract-ocr-30202.html/

1. Install a pre-built executable binary of the <a target="_blank" href="https://github.com/tesseract-ocr/tesseract">Tesseract OCR (Optical Character Recognition) engine</a> at <a target="_blank" href="https://github.com/tesseract-ocr/tesseract/wiki">https://github.com/tesseract-ocr/tesseract/wiki</a> for various operating systems:

   <pre><strong>brew install tesseract</strong></pre>

1. Verify the version:

   <pre><strong>tesseract -v
   </strong></pre>

   <pre>tesseract 4.1.0
 leptonica-1.78.0
  libgif 5.2.1 : libjpeg 9c : libpng 1.6.37 : libtiff 4.1.0 : zlib 1.2.11 : libwebp 1.0.3 : libopenjp2 2.3.1
 Found AVX2
 Found AVX
 Found SSE</pre>

1. Download a <a target="_blank" href="https://github.com/tesseract-ocr/tesseract/wiki/Command-Line-Usage">sample image</a> for Tesseract to turn into text:

   At https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/Tesseract/tessaract-quick-brown-fox.png is:   
   <img src="https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/Tesseract/tessaract-quick-brown-fox.png">

1. Run from within the folder:

   <pre><strong>tesseract tessaract-quick-brown-fox.png  out  
   </strong></pre>

   Response:
   <pre>Tesseract Open Source OCR Engine v4.1.0 with Leptonica</pre>

   Tesseract's default is to recognize text output format, use English language, and Page Segmentation Mode 3.

1. Use a text editor to view the contents of output file <tt>out.txt</tt> created by Tesseract:
   
   <pre>The (quick) [brown] {fox} jumps!
Over the $43,456.78 &LT;lazy> #90 dog
& duck/goose, as 12.5% of E-mail
from aspammer@website.com is spam.
Der ,.schnelle” braune Fuchs springt
iiber den faulen Hund. Le renard brun
«rapide» saute par-dessus le chien
paresseux. La volpe marrone rapida
salta sopra il cane pigro. El zorro
marron rapido salta sobre el perro
perezoso. A raposa marrom rapida
salta sobre o céo preguicoso.
   </pre>

   ### Language recognition

   So Tesseract recogized all the various special characters (even though the image is slightly crooked) except for the European language accents such the <em>umlaut</em> above Uber. "marron rapido" is supposed to be capped. cao preguisoso.

   But Tesseract is supposed to recognize characters from over 100 languages due to it's LSTM Machine Learning algorithm.

1. To get Tessaract to recognize the full set of language characters, run with additional parameter for "deutch (German)":

   <pre><strong>tesseract tessaract-quick-brown-fox.png  out  -l eng+deu
   </strong></pre>

   Expected error response:

   <pre>Error opening data file /usr/local/Cellar/tesseract/4.1.0/share/tessdata/deu.traineddata
Please make sure the TESSDATA_PREFIX environment variable is set to your "tessdata" directory.
Failed loading language 'deu'
   Tesseract Open Source OCR Engine v4.1.0 with Leptonica</pre>

1. List the languages:

   <pre><strong>tesseract --list-langs
   </strong></pre>

   <pre>List of available languages (3):
eng
osd
snum</pre>

1. So we install language files:

   <pre><strong>brew install tesseract-lang</strong></pre>

   It's a large file installed from https://github.com/tesseract-ocr/tessdata/raw/master/eng.traineddata

1. Identify location of language files:

   <pre><strong>brew list tesseract-lang</strong></pre>

   Expected response:

   <pre>/usr/local/Cellar/tesseract-lang/4.0.0/share/tessdata/ (161 files)</pre>

   TODO: The version is a bit behind?

1. Define the path to the environment variable defining the path Tesseract looks:

   This path overrides the default of "/usr/local/share/tesseract-ocr/".

   <pre><strong>export TESSDATA_PREFIX="/usr/local/Cellar/tesseract/4.1.0/share/tessdata/"
   ls $TESSDATA_PREFIX
   </strong></pre>

   Note the "4.0.0" in the path means it needs to be changed when a newer version is installed.

   The folder contains 

1. The <tt>tesseract-lang</tt> folder created does not contain <tt>eng.traineddata</tt> nor osd nor snum.traineddata. So copy them:

   <pre><strong>cp -a /usr/local/Cellar/tesseract-lang/4.0.0/share/tessdata/. /usr/local/Cellar/tesseract/4.1.0/share/tessdata/
   ls -al
   </strong></pre>

1. List the languages again to see a long list:

   <pre><strong>tesseract --list-langs
   </strong></pre>

1. Run again, then edit the out.txt file again. The European should work now:

   <pre>Der „schnelle” braune Fuchs springt
über den faulen Hund. Le renard brun
«rapide» saute par-dessus le chien
paresseux. La volpe marrone rapida
salta sopra il cane pigro. EI zorro
marrön räpido salta sobre el perro
perezoso. A raposa marrom räpida
salta sobre 0 cäo preguigoso.
   </pre>


<hr />

   NOTE: LTSM models used during execution were trained using data at:

   https://github.com/tesseract-ocr/tessdata_best


## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html  %}
