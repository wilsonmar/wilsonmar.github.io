---
layout: post
title: "Tesseract (OCR after Imagemagic)"
excerpt: "Recognizes text in picture files for various languages (using LTSM machine-learning)"
tags: [AI, Machine Learning]
date: "2019-12-14"
file: "tesseract"
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

The word "tesseract" in science means a representaton of a 4-dimensional cube <a target="_blank" href="https://www.wikiwand.com/en/Tesseract">*</a>. It is also used in the Marvel Cinematic Universe. 

The word is used for the name of the of the <a target="_blank" href="https://github.com/tesseract-ocr/tesseract">Tesseract OCR (Optical Character Recognition) engine</a> program because it is able to recognize multiple-directional 3D lines.

   * https://github.com/gulakov/tesseract-ocr-sample
   * http://blog.ayoungprogrammer.com/2012/11/tutorial-installing-tesseract-ocr-30202.html/
   <br /><br />

<img width="192" alt="opencv-sikulix-v01-192x133.png" src="https://cloud.githubusercontent.com/assets/300046/24071304/2de19d0a-0ba5-11e7-9cdc-c7903b2b3bcf.png" align="right">


## Installation

1. Install a pre-built executable binary at <a target="_blank" href="https://github.com/tesseract-ocr/tesseract/wiki">https://github.com/tesseract-ocr/tesseract/wiki</a> for various operating systems.

   On macOS:

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

   <a target="_blank" href="http://www.leptonica.org/">http://www.leptonica.org</a> provides software broadly useful for image processing and image analysis.

1. PROTIP: Navigate to the folder where where other image files are captured to, usually: 

   <pre><strong>cd ~/Desktop
   </strong></pre>

1. Download the <a target="_blank" href="https://github.com/tesseract-ocr/tesseract/wiki/Command-Line-Usage">sample image file from the Tesseract web page</a> to turn into text.

   <img src="https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/Tesseract/tesseract-quick-brown-fox.png">

   <pre><strong>wget https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/Tesseract/tesseract-quick-brown-fox.png
   </strong></pre>

1. Run Tesseract from that folder (the sample .png can also be .tiff, .jpg, .gif, .bmp, etc.)

   <pre><strong>tesseract tesseract-quick-brown-fox.png  out
   </strong></pre>

   Response:
   <pre>Tesseract Open Source OCR Engine v4.1.0 with Leptonica</pre>

   Tesseract's default is to recognize text output format, use English language, and Page Segmentation Mode 3. Parameters are defined by this command:

   <pre><strong>tesseract --help-extra</strong></pre>
   
   <pre>
Usage:
  tesseract --help | --help-extra | --help-psm | --help-oem | --version
  tesseract --list-langs [--tessdata-dir PATH]
  tesseract --print-parameters [options...] [configfile...]
  tesseract imagename|imagelist|stdin outputbase|stdout [options...] [configfile...]
&nbsp;
OCR options:
  --tessdata-dir PATH   Specify the location of tessdata path.
  --user-words PATH     Specify the location of user words file.
  --user-patterns PATH  Specify the location of user patterns file.
  --dpi VALUE           Specify DPI for input image.
  -l LANG[+LANG]        Specify language(s) used for OCR.
  -c VAR=VALUE          Set value for config variables.
                        Multiple -c arguments are allowed.
  --psm NUM             Specify page segmentation mode.
  --oem NUM             Specify OCR Engine mode.
NOTE: These options must occur before any configfile.
&nbsp;
Page segmentation modes:
  0    Orientation and script detection (OSD) only.
  1    Automatic page segmentation with OSD.
  2    Automatic page segmentation, but no OSD, or OCR. (not implemented)
  3    Fully automatic page segmentation, but no OSD. (Default)
  4    Assume a single column of text of variable sizes.
  5    Assume a single uniform block of vertically aligned text.
  6    Assume a single uniform block of text.
  7    Treat the image as a single text line.
  8    Treat the image as a single word.
  9    Treat the image as a single word in a circle.
 10    Treat the image as a single character.
 11    Sparse text. Find as much text as possible in no particular order.
 12    Sparse text with OSD.
 13    Raw line. Treat the image as a single text line,
       bypassing hacks that are Tesseract-specific.
&nbsp;
OCR Engine modes:
  0    Legacy engine only.
  1    Neural nets LSTM engine only.
  2    Legacy + LSTM engines.
  3    Default, based on what is available.
&nbsp;
Single options:
  -h, --help            Show minimal help message.
  --help-extra          Show extra help for advanced users.
  --help-psm            Show page segmentation modes.
  --help-oem            Show OCR Engine modes.
  -v, --version         Show version information.
  --list-langs          List available languages for tesseract engine.
  --print-parameters    Print tesseract parameters.
   </pre>

1. Use a text editor to view the contents of output file created by Tesseract:

   <pre><strong>code out.txt
   </strong></pre>

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

   Even though the image is slightly crooked, Tesseract should recogize all the various special characters such as curly braces, angle brackets, !, $, #, %, slash, and @ signs, etc.
   
   ### Language recognition

   Except it did not recognize European language accents such the <em>umlaut</em> above Uber. "marron rapido" is supposed to be capped. "preguicoso" a Portugese word meaning lazy, does not have the diacritical tail appendage <a target="_blank" href="https://www.wikiwand.com/en/Cedilla">c-cedilla (cedilha in Portugese)</a>.

   But Tesseract is supposed to recognize characters from over 100 languages now. Originally from HP, <a target="_blank" href="https://twitter.com/theRaySmith">@theRaySmith</a> at Google <a target="_blank" href="https://github.com/tesseract-ocr/docs/blob/master/das_tutorial2016/1Intro-history.pdf">says in 2016 Tesseract includes LSTM</a> (Long Short Timer Memory) machine learning algorithm with convolutional and deep belief networks.

1. To get Tesseract to recognize the full set of language characters, run with additional parameter for "deutch (German)", look for language codes in <a target="_blank" href="https://github.com/tesseract-ocr/tesseract/wiki/Data-Files">the wiki site</a> ("por").

   <a name="RunDeuToo"></a>

   <pre><strong>tesseract  tesseract-quick-brown-fox.png  out  -l eng+deu+fra+ita+spa+por
   </strong></pre>

   Expected error response:

   <pre>Error opening data file /usr/local/Cellar/tesseract/4.1.0/share/tessdata/deu.traineddata
Please make sure the TESSDATA_PREFIX environment variable is set to your "tessdata" directory.
Failed loading language 'deu'
   Tesseract Open Source OCR Engine v4.1.0 with Leptonica</pre>

   <a name="DefaultLanguages"></a>

1. List the default languages available:

   <pre><strong>tesseract --list-langs
   </strong></pre>

   Codes in the response <a target="_blank" href="https://github.com/tesseract-ocr/tesseract/wiki/Data-Files">the wiki site</a> says "osd" = Orientation and script detection:

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
   The "4.0.0" in the path means it needs to be manually redone when a newer version is available.

1. Define the path to the environment variable defining the path Tesseract looks:

   This path overrides the default of "/usr/local/share/tesseract-ocr/".

   <pre><strong>export TESSDATA_PREFIX="/usr/local/Cellar/tesseract/4.1.0/share/tessdata/"
   ls $TESSDATA_PREFIX
   </strong></pre>

1. The <tt>tesseract-lang</tt> folder created does not contain the <a href="#DefaultLanguages">
default languages</a>, so copy them in:

   <pre><strong>cp -a /usr/local/Cellar/tesseract-lang/4.0.0/share/tessdata/. /usr/local/Cellar/tesseract/4.1.0/share/tessdata/
   ls -al
   </strong></pre>

1. To reclaim disk space:

   <pre><strong>brew remove tesseract-lang</strong></pre>

   <pre>Uninstalling /usr/local/Cellar/tesseract-lang/4.0.0... (163 files, 651.8MB)</pre>

1. List the languages again to see a long list:

   <pre><strong>tesseract --list-langs
   </strong></pre>

1. <a href="#RunDeuToo">Run again</a>, then edit the out.txt file again. You should now see accent characters now:

   <pre>Der „schnelle” braune Fuchs springt
über den faulen Hund. Le renard brun
«rapide» saute par-dessus le chien
paresseux. La volpe marrone rapida
salta sopra il cane pigro. EI zorro
marrön räpido salta sobre el perro
perezoso. A raposa marrom räpida
salta sobre o cão preguiçoso.
   </pre>


<a name="ImagePreparation"></a>

## Image Preparation

If you need to convert images, use the popular open-source <a target="_blank" href="https://imagemagick.org/index.php">https://imagemagick.org</a>

1. Install using HomeBrew (instead of downloading, gunzip, variables, etc.):

   <pre><strong>brew install imagemagick</strong></pre>
   
1. Because ImageMagick depends on Ghostscript fonts, install them as well:

   <pre><strong>brew install ghostscript</strong></pre>

1. To convert a file (such as a pdf) into a high-resolution image, use Imagemagick's convert command:

   <pre>convert -density 300 test.pdf -depth 8 -strip -background white -alpha off out.tiff
   </pre>

   This also takes off Alpha channels and outputs to a TIFF format file.

   Alternative parameters are "-monochrome" to convert to black-and-white.

   The last parameter is the output file.

Resources for this section include:

   * <a target="_blank" href="https://www.youtube.com/watch?v=QhJiOCwz-_I&time=2m51s" title="Apr 14, 2017">Using Tesseract-OCR to extract text from images</a>


<hr />

## Usage within Selenium

Selenium scripts can make use of Tesseract's <a href="#RunDeuToo">CLI call</a>.

Alternately, Java coders can use Tess4j at <a target="_blank" href="https://sourceforge.net/projects/tess4j/">https://sourceforge.net/projects/tess4j</a>
by adding to pom.xml file add it as a dependency, such as:

   <pre>
    &LT;dependencies>
        &LT;dependency>
            &LT;groupId>net.sourceforge.tess4j&LT;/groupId>
            &LT;artifactId>tess4j&LT;/artifactId>
            &LT;version>2.0.0&LT;/version>
            &LT;scope>test&LT;/scope>
        &LT;/dependency>
   </pre>

   Then, in your JUnit test file, add at the top:

   <pre>import net.sourceforge.tess4j.*;</pre>

   <a target="_blank" href="https://www.youtube.com/watch?v=yN95g_vo5U0">VIDEO (no sound)</a>:
   Sample code is at https://unmesh.me/2015/06/30/using-tesseract-with-selenium-webdriver-for-checking-text-on-images-using-ocr/

   <a target="_blank" href="https://www.youtube.com/watch?v=aEMSxiXctPk">VIDEO: How to set up Tess4j in Eclipse [27:38]</a> per <a target="_blank" href="http://tphangout.com/how-to-use-the-tesseract-api-to-perform-ocr-in-your-java-code/">this blog</a>.

Tess4j is actually written in C#. However, those who code C# can use the <a target="_blank" href="http://www.emgu.com/wiki/index.php/Emgu_CV"Emgu</a> .Net wrapper library.



## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html  %}
