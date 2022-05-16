---
layout: post
title: "Tesseract (OCR)"
excerpt: "Recognizes text and special characters in image files (after Imagemagic), for 60+ languages (using LTSM machine-learning). Used by Selenium"
tags: [Selenium, AI, Machine Learning]
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

The word "Tesseract" was adopted as the name of the <a target="_blank" href="https://github.com/tesseract-ocr/tesseract"> OCR (Optical Character Recognition) engine</a> program because it is able to recognize multiple-directional 3D lines.

{% include whatever.html %}

<a target="_blank" href="https://marvelcinematicuniverse.fandom.com/wiki/Tesseract"><img align="right" alt="tesseract-mcu2012-310x310.png" width="100" height="100" src="https://user-images.githubusercontent.com/300046/70930552-b6f0c300-1ff2-11ea-8326-641532761f51.png">
The Tesseract shown in the Marvel Cinematic Universe</a> is a (3 dimensional) physical cube. But the object has a 4th dimension of time, thus enabling time travel in the MCU and in Madeleine L'Engle's novel/movie "A Wrinkle in Time".

<a target="_blank" href="https://www.youtube.com/watch?v=iGO12Z5Lw8s">VIDEO: <img align="left" alt="tesseract-4d-proj-275x203.png" width="100" src="https://user-images.githubusercontent.com/300046/70930317-1f8b7000-1ff2-11ea-9a7c-2c62b3b3b00c.png"></a> 
But a Tesseract in <a target="_blank" href="http://mathworld.wolfram.com/Tesseract.html">science (real life)</a> is <strong>conceptual</strong> "w" <strong>4th dimensional axis</strong> shown as a shadow.<a target="_blank" href="https://www.wikiwand.com/en/Tesseract">*</a> 

## Usage

1. I wrote <a target="_blank" href="https://github.com/wilsonmar/DevSecOps/blob/master/bash/ocr.sh">a shell script</a> that converts the last file created in folder ~/Desktop and opens the output file in VSCode (using the code command):

   <pre><strong>./ocr.sh</strong></pre>

   Optionally, specify a file name:

   <pre><strong>./ocr.sh "Screen Shot 2020-05-10 at 3.18.06 PM.png"</strong></pre>

   Afterward, the image file is deleted.


## Installation

Tesseract 4 is included with Ubuntu 18.04+.

1. for various operating systems, install a pre-built executable binary at <a target="_blank" href="https://github.com/tesseract-ocr/tesseract/wiki">https://github.com/tesseract-ocr/tesseract/wiki</a>. 

   On macOS: 

   <pre><strong>brew install tesseract --HEAD
   pip install pytesseract</strong></pre>

1. Verify the version:

   <pre><strong>tesseract -v
   </strong></pre>

   <pre>tesseract 4.1.1
 leptonica-1.79.0
  libgif 5.2.1 : libjpeg 9d : libpng 1.6.37 : libtiff 4.1.0 : zlib 1.2.11 : libwebp 1.1.0 : libopenjp2 2.3.1
 Found AVX2
 Found AVX
 Found FMA
 Found SSE
   </pre>

   The <a target="_blank" href="http://www.leptonica.org/">http://www.leptonica.org</a> dependency provides utilities for image processing and image analysis.

   ### Use Tesseract

   <pre><strong>
   IN_FILE="tesseract-quick-brown-fox.png"
   tesseract "${IN_FILE}"  out
   </strong></pre>



1. PROTIP: Navigate to the folder where where other image files are captured to, usually: 

   <pre><strong>cd ~/Desktop
   </strong></pre>

   <a name="SampleFile"></a>

   ### Sample file

   <img alt="from GitHub" src="https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/Tesseract/tesseract-quick-brown-fox.png">

1. Download the <a target="_blank" href="https://github.com/tesseract-ocr/tesseract/wiki/Command-Line-Usage">sample image file (above) from the Tesseract web page</a> we will turn into text:

   <pre><strong>wget https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/Tesseract/tesseract-quick-brown-fox.png
   </strong></pre>

1. Run Tesseract from that folder (the sample .png can also be .tiff, .jpg, .gif, .bmp, etc.)

   <pre><strong>IN_FILE="tesseract-quick-brown-fox.png"
   tesseract "${IN_FILE}"  out
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

1. Use a text editor to view the contents of output file <tt>out.txt</tt> created by Tesseract based on the <a href="#SampleFile">sample image file</a>:

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

   Even though the image is slightly tilted, Tesseract should recogize all the various special characters such as curly braces, angle brackets, !, $, #, %, slash, and @ signs, etc.
   However:

   * the two dots in front of "schnelle” is mis-recognized,
   * the tilde on top of "céo" is wrongly recognized as a tick
   * the descender in "preguicoso" is not recognized
   

   ### Language recognition

   <strong>It did not recognize European language accents</strong> such the <em>umlaut</em> above Uber. "marron rapido" is supposed to be capped. "preguicoso" a Portugese word meaning lazy, does not have the diacritical tail appendage <a target="_blank" href="https://www.wikiwand.com/en/Cedilla">c-cedilla (cedilha in Portugese)</a>.

   But Tesseract is supposed to recognize characters from over 100 languages now. Originally from HP, <a target="_blank" href="https://twitter.com/theRaySmith">@theRaySmith</a> at Google <a target="_blank" href="https://github.com/tesseract-ocr/docs/blob/master/das_tutorial2016/1Intro-history.pdf">says in 2016 Tesseract includes LSTM</a> (Long Short Term Memory) machine learning algorithm with deep belief networks.

   NOTE: LSTM is a form of RNN (Recurrent Neural Network) algorithm to recognize a sequence of characters rather than single chacters (which is better handled by CNN (Convolutional Neural Networks).

1. To get Tesseract to recognize the full set of language characters, run with additional parameters specifying more language codes from <a target="_blank" href="https://github.com/tesseract-ocr/tesseract/wiki/Data-Files">the wiki site</a>: 

   <a name="RunDeuToo"></a>

   <pre><strong>tesseract  tesseract-quick-brown-fox.png  out  -l eng+deu+fra+ita+spa+por
   </strong></pre>

   Sequence of -language codes matter:
   deu = deutch (German) + fra = french + ita = italian + spa = spanish + por = portugese.

   Error messages are expected if additional configuration was not done:
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


   ### Tessocr for Python

   To list the languages again to see a long list, this time do it using a Python program using the <strong>tesserocr</strong> wrapper for Python.

1. Install using pip:

   <pre><strong>pip install tesserocr
   pip install Pillow
   </strong></pre>

   The response at time of writing:

   <pre>Collecting tesserocr
  Downloading https://files.pythonhosted.org/packages/e3/77/fb26b321c3b9ce4a47af12b19e85ddbf4d0629adb6552d85276e824e6e51/tesserocr-2.5.0.tar.gz (54kB)
     |████████████████████████████████| 61kB 156kB/s 
Building wheels for collected packages: tesserocr
  Building wheel for tesserocr (setup.py) ... done
  Created wheel for tesserocr: filename=tesserocr-2.5.0-cp37-cp37m-macosx_10_14_x86_64.whl size=169578 sha256=0ea0c430f6649a974c43805e9d8662fe0f14ef85f305e3fba6ded924cf4eb1a5
  Stored in directory: /Users/wilson_mar/Library/Caches/pip/wheels/c0/32/13/70d610c079b65b21a5fb84af4fe7593cbf06da35f69cf10209
Successfully built tesserocr
Installing collected packages: tesserocr
Successfully installed tesserocr-2.5.0
   </pre>

1. Run the Python program:

   <pre><strong>python3 GetAvailableLanguages.py
   </strong></pre>

   The response is a JSON file:

   <tt>['afr', 'amh', 'ara', 'asm', 'aze', 'aze_cyrl', 'bel', 'ben', 'bod', 'bos', 'bre', 'bul', 'cat', 'ceb', 'ces', 'chi_sim', 'chi_sim_vert', 'chi_tra', 'chi_tra_vert', 'chr', 'cos', 'cym', 'dan', 'deu', 'div', 'dzo', 'ell', 'eng', 'enm', 'epo', 'est', 'eus', 'fao', 'fas', 'fil', 'fin', 'fra', 'frk', 'frm', 'fry', 'gla', 'gle', 'glg', 'grc', 'guj', 'hat', 'heb', 'hin', 'hrv', 'hun', 'hye', 'iku', 'ind', 'isl', 'ita', 'ita_old', 'jav', 'jpn', 'jpn_vert', 'kan', 'kat', 'kat_old', 'kaz', 'khm', 'kir', 'kmr', 'kor', 'kor_vert', 'lao', 'lat', 'lav', 'lit', 'ltz', 'mal', 'mar', 'mkd', 'mlt', 'mon', 'mri', 'msa', 'mya', 'nep', 'nld', 'nor', 'oci', 'ori', 'osd', 'pan', 'pol', 'por', 'pus', 'que', 'ron', 'rus', 'san', 'script/Arabic', 'script/Armenian', 'script/Bengali', 'script/Canadian_Aboriginal', 'script/Cherokee', 'script/Cyrillic', 'script/Devanagari', 'script/Ethiopic', 'script/Fraktur', 'script/Georgian', 'script/Greek', 'script/Gujarati', 'script/Gurmukhi', 'script/HanS', 'script/HanS_vert', 'script/HanT', 'script/HanT_vert', 'script/Hangul', 'script/Hangul_vert', 'script/Hebrew', 'script/Japanese', 'script/Japanese_vert', 'script/Kannada', 'script/Khmer', 'script/Lao', 'script/Latin', 'script/Malayalam', 'script/Myanmar', 'script/Oriya', 'script/Sinhala', 'script/Syriac', 'script/Tamil', 'script/Telugu', 'script/Thaana', 'script/Thai', 'script/Tibetan', 'script/Vietnamese', 'sin', 'slk', 'slv', 'snd', 'snum', 'spa', 'spa_old', 'sqi', 'srp', 'srp_latn', 'sun', 'swa', 'swe', 'syr', 'tam', 'tat', 'tel', 'tessconfigs/afr', 'tessconfigs/amh', 'tessconfigs/ara', 'tessconfigs/asm', 'tessconfigs/aze', 'tessconfigs/aze_cyrl', 'tessconfigs/bel', 'tessconfigs/ben', 'tessconfigs/bod', 'tessconfigs/bos', 'tessconfigs/bre', 'tessconfigs/bul', 'tessconfigs/cat', 'tessconfigs/ceb', 'tessconfigs/ces', 'tessconfigs/chi_sim', 'tessconfigs/chi_sim_vert', 'tessconfigs/chi_tra', 'tessconfigs/chi_tra_vert', 'tessconfigs/chr', 'tessconfigs/cos', 'tessconfigs/cym', 'tessconfigs/dan', 'tessconfigs/deu', 'tessconfigs/div', 'tessconfigs/dzo', 'tessconfigs/ell', 'tessconfigs/eng', 'tessconfigs/enm', 'tessconfigs/epo', 'tessconfigs/est', 'tessconfigs/eus', 'tessconfigs/fao', 'tessconfigs/fas', 'tessconfigs/fil', 'tessconfigs/fin', 'tessconfigs/fra', 'tessconfigs/frk', 'tessconfigs/frm', 'tessconfigs/fry', 'tessconfigs/gla', 'tessconfigs/gle', 'tessconfigs/glg', 'tessconfigs/grc', 'tessconfigs/guj', 'tessconfigs/hat', 'tessconfigs/heb', 'tessconfigs/hin', 'tessconfigs/hrv', 'tessconfigs/hun', 'tessconfigs/hye', 'tessconfigs/iku', 'tessconfigs/ind', 'tessconfigs/isl', 'tessconfigs/ita', 'tessconfigs/ita_old', 'tessconfigs/jav', 'tessconfigs/jpn', 'tessconfigs/jpn_vert', 'tessconfigs/kan', 'tessconfigs/kat', 'tessconfigs/kat_old', 'tessconfigs/kaz', 'tessconfigs/khm', 'tessconfigs/kir', 'tessconfigs/kmr', 'tessconfigs/kor', 'tessconfigs/kor_vert', 'tessconfigs/lao', 'tessconfigs/lat', 'tessconfigs/lav', 'tessconfigs/lit', 'tessconfigs/ltz', 'tessconfigs/mal', 'tessconfigs/mar', 'tessconfigs/mkd', 'tessconfigs/mlt', 'tessconfigs/mon', 'tessconfigs/mri', 'tessconfigs/msa', 'tessconfigs/mya', 'tessconfigs/nep', 'tessconfigs/nld', 'tessconfigs/nor', 'tessconfigs/oci', 'tessconfigs/ori', 'tessconfigs/osd', 'tessconfigs/pan', 'tessconfigs/pol', 'tessconfigs/por', 'tessconfigs/pus', 'tessconfigs/que', 'tessconfigs/ron', 'tessconfigs/rus', 'tessconfigs/san', 'tessconfigs/sin', 'tessconfigs/slk', 'tessconfigs/slv', 'tessconfigs/snd', 'tessconfigs/snum', 'tessconfigs/spa', 'tessconfigs/spa_old', 'tessconfigs/sqi', 'tessconfigs/srp', 'tessconfigs/srp_latn', 'tessconfigs/sun', 'tessconfigs/swa', 'tessconfigs/swe', 'tessconfigs/syr', 'tessconfigs/tam', 'tessconfigs/tat', 'tessconfigs/tel', 'tessconfigs/tgk', 'tessconfigs/tha', 'tessconfigs/tir', 'tessconfigs/ton', 'tessconfigs/tur', 'tessconfigs/uig', 'tessconfigs/ukr', 'tessconfigs/urd', 'tessconfigs/uzb', 'tessconfigs/uzb_cyrl', 'tessconfigs/vie', 'tessconfigs/yid', 'tessconfigs/yor', 'tgk', 'tha', 'tir', 'ton', 'tur', 'uig', 'ukr', 'urd', 'uzb', 'uzb_cyrl', 'vie', 'yid', 'yor']</tt>


   ### Run to see accents

1. <a href="#RunDeuToo">Run again</a>, then edit the out.txt file again. You should now see accent characters:

   <pre>Der „schnelle” braune Fuchs springt
über den faulen Hund. Le renard brun
«rapide» saute par-dessus le chien
paresseux. La volpe marrone rapida
salta sopra il cane pigro. EI zorro
marrön räpido salta sobre el perro
perezoso. A raposa marrom räpida
salta sobre o cão preguiçoso.
   </pre>

1. To output to a pdf file instead of txt file, add "pdf" to the end of the command.


   ### Asian characters

   When specifying the language code for Chinese, note there are:
   <tt>chi_sim</tt> and <tt>chi_tra</tt> for left-to-right and
   <tt>chi_sim_vert</tt> and <tt>chi_tra_vert</tt> for vertical.

   Japanes and Korean language coded behave the same way.



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

## Usage within Python

Within venv

https://github.com/sirfz/tesserocr


1. Install Pillow, a module for image processing in Python:

   pip install Pillow

* Code for Python:

   https://medium.com/better-programming/beginners-guide-to-tesseract-ocr-using-python-10ecbb426c3d
   offers this snippet:

   <pre>from PIL import Image  # PIL = old version of Pillow utility
column = Image.open('code.jpg')
gray = column.convert('L')    # convert to gray scale vs. RGB or CMYK.
blackwhite = gray.point(lambda x: 0 if x < 200 else 255, '1')
blackwhite.save("code_bw.jpg") # TODO: change to use program invocation parameter
   </pre>

* Code for Shell script:

   <pre>from PIL import Image
import sys
column = Image.open(sys.argv[1])
gray = column.convert('L')
blackwhite = gray.point(lambda x: 0 if x < 200 else 255, '1')
blackwhite.save("code_bw.jpg")
   </pre>



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


## Resources/References

   * https://github.com/gulakov/tesseract-ocr-sample (Visual Studio C++ Project)
   * http://blog.ayoungprogrammer.com/2012/11/tutorial-installing-tesseract-ocr-30202.html/
   <br /><br />

## More

This is one of a series on AI, Machine Learning, Deep Learning, Robotics, and Analytics:

{% include ai_links.html  %}
