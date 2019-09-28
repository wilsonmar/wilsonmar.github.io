---
layout: post
title: "Sound out text on page"
excerpt: "Listen to this"
tags: [text to speech, JavaScript, programming]
date: "2016-04-03"
file: "play-sound-on-mouseover-or-click"
image:
# feature: pic black rainbow sound 1900X500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14621851/f18ba040-0582-11e6-8328-0ff5dc64f5ca.jpg
  credit: Mp3jack at deviantart.com
  creditlink: http://mp3jack.deviantart.com/art/8-Bit-Sound-Desktop-492031573
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

{% include tts1.html %}

I would like (for every section on each post)
a button near the vertical scroll bar on the right so that
when a visitor mouses over it or clicks on it, 
text from that section would be verbally read aloud.

The sound files would be created by Text-To-Speech software
reading markup text.

I haven't figured it all out yet, but below is what
I've found so far.

If you want to skip the drama in the background history,
click <a href="#Solutions">here to the solutions</a>.

## Early fragmentation
 
### BGSOUND tag

Many of the instructions for "mouseover sound"
show use of `playSound` and `stopSound` functions with tags such as:

{% highlight html %}
<BGSOUND ID="BGSOUND_ID" LOOP=1 VOLUME="-600" SRC="music.mid">
{% endhighlight %}

But this is recognized only by Internet Explorer.

### EMBED tag

Early Netscape Navigator versions introduced the LiveAudio plugin 
with this BODY tag:

{% highlight html %}
<EMBED NAME="mySound" SRC="music.mid" 
LOOP=false AUTOSTART=false HIDDEN=true MASTERSOUND>
{% endhighlight %}

This is controlled by <strong>onClick</strong> functions 
`document.mySound.play()` and
`stop()`.

Alternately, a JavaScript function to insert in the DOM
(from http://jsfiddle.net/zHfrP/):

{% highlight html %}
function playSound(el,soundfile) {
    var embed = document.getElementById("embed");
    if (!embed) {
        var embed = document.createElement("embed");
            embed.id= "embed";
            embed.setAttribute("src", soundfile);
            embed.setAttribute("hidden", "true");
        el.appendChild(embed);
    } else {
        embed.parentNode.removeChild(embed);
    }
}
{% endhighlight %}

This function would be invoked by HTML such as this:

{% highlight html %}
<span id="dummy" onclick="playSound(this, 'https://dl.dropbox.com/u/39640025/MP3/Waves.mp3');">
    <img src="short_a/bat.jpg" name="Bottom-1" width="115" height="45" border="0" id="Bottom-1"/>
</span>
{% endhighlight %}


### OBJECT tag

Early Firefox, Safari, and Google Chrome browsers relied
on plugins such as Apple QuickTime that recognized OBJECT tags:

{% highlight html %}
<OBJECT DATA="audioURL.mid" TYPE="audio/midi" 
        TITLE="Description" WIDTH=250 HEIGHT=20>
  <PARAM NAME=autostart VALUE=true>
  <PARAM NAME=hidden VALUE=false>
</OBJECT>
{% endhighlight %}


### Adobe Flash plug-in

<strong>Adobe Flash</strong> 
provided cross-browser audio and video functionality
to early HTML4 browsers. But it involved users installing and
updating plug-ins which also provided a vector for viruses.

That's now 4 different ways to play sound.
Then there's one more:

## Modern audio tag

{% highlight html %}
<audio>
   <source src="audio/beep.mp3"></source>
   <source src="audio/beep.ogg"></source>
   Your browser isn't invited for super fun audio time.
</audio>
{% endhighlight %}

If you want to be annoying, specify:

{% highlight html %}
<audio autoplay>
{% endhighlight %}

To provide a player control, add this element:

{% highlight html %}
 <audio controls>
{% endhighlight %}

To provide mouse-over to play, add JavaScript:

{% highlight html %}
// With a name:
var audio = document.getElementsByTagName("audio")[0];
audio.play();
// or with an ID:
var audio = document.getElementById("mySoundClip");
audio.play();
{% endhighlight %}

### Different File Formats in HTML5 

The HTML5 standard spec for browsers includes the 
`<audio>` and `<video>`
tags built-in, so no plug-in is needed, theoretically.

But due to licensing issues,
different browsers support different file formats.

There are several different audio file formats:

| Browser      | mid | wav | mp3 | mp4 | ogg | 
| -------      | :-- | :-- | :-- | :-- | :-- |
| IE 9+        | X   | -   | X   | -   | -   |
| Firefox 3.5+ | -   | X   | -   | -   | X   |
| Chrome 6+    | -   | -   | X   | X   | X   |
| Safari 5+    | -   | X   | X   | X   | -   |
| Opera 10.5+  | -   | X   | -   | -   | X   |

Since most browsers support more than one format,
only two formats of each file need to be provided on a website to cover all the major browsers out there:
.mp3 and .ogg.

Additionally, Adobe Flash supports its own Real-time file format.

<a name="Solutions"></a>

## Solutions


### SoundManager2

The simplest approach is to make use of 
<a target="_blank" href="http://www.schillmania.com/projects/soundmanager2/doc/getstarted/#how-sm2-works">
SoundManager2</a> because it has invisiable fall-back for older browsers
(swf files processed by Adobe Flash plug-ins).

Here are the steps I took to change my 
Jekyll site:

0. Create a <strong>tts</strong> (text to speech) folder
   in your website repo to hold sound files.

0. Download the zip file from:

   <a target="_blank" href="http://www.schillmania.com/projects/soundmanager2/">
   http://www.schillmania.com/projects/soundmanager2/</a>

0. Unzip.

   The unzipped folder contains all resources for the demo website,
   such as index.html, which is not needed. 

0. Copy the <strong>swf</strong> folder to your website repo.

   Only one edition of the .js file is needed
   from the script folder.

0. Copy to your website root folder just
   the production-optimized, with debug code removed:

   soundmanager2-nodebug-jsmin.js

0. To the bottom of <strong>_scripts.html</strong> within 
   the _includes folder, so it's included before
   `</body>` at the bottom of page.html.

   {% highlight html %}
   <script src="soundmanager2-nodebug-jsmin.js"></script>
   <script>
   soundManager.setup({
     url: '/swf/',
     flashVersion: 9, // optional: shiny features (default = 8)
     // optional: ignore Flash where possible, use 100% HTML5 mode
     // preferFlash: false,
     onready: function() {
       // Ready to use; soundManager.createSound() etc. can now be called.
     }
   });
   </script>
   {% endhighlight %}


    QUESTION: Is there a cloud version of SoundManager?

0. Create a Liquid module

   {% highlight html %}
   <script>
   var mySound = soundManager.createSound({
     url: '/tts/subject-section.mp3'
   });
   mySound.play(); // play it.
   </script>
   {% endhighlight %}

0. In each .md file where a sound button is needed:

   <pre>
   &#123;% include tts1.html %}
   </pre>

   {% highlight html %}
   <div class="ui360">
 <a href="/path/to/an.mp3">play "an.mp3"</a>
</div>
   {% endhighlight %}

0. Run in debug mode

## AMP (Accelerated Mobile Pages)

This is the one I'm using.

{% include tts1.html %}


<pre>
   <amp-audio width="400" height="300" src="https://.../myaudio.mp3">
    <div fallback>
       <p>Your browser doesn’t support HTML5 audio</p>
    </div>
    <source type="audio/mpeg" src="foo.mp3">
    <source type="audio/ogg" src="foo.ogg">
   </amp-audio>
</pre>

More on this 
<a target="_blank" href="https://www.ampproject.org/docs/reference/extended/amp-audio.html">here</a>.

## Text to speech 

Paste text online to create an mp3 file:

* http://www.coolutils.com/Online/Audio-Converter/


## mp3 to ogg conversion

WARNING: Both MP3 and OGG are lossy formats, unlike WAV or FLAC. 
So quality will degrade when processed.

PROTIP: During MP3-to-OGG conversion, minimize poor quality in the generated file by using a higher destination bitrate than the source bitrate
For example, for MP3s recorded at 128 kbps, create Ogg using -q7 (variable bitrate level 7), which is usually around ~200 kbps.

To convert mp3 to ogg in batch mode, download the
<a target="_blank" href="http://avconv.cvs.sourceforge.net/viewvc/avconv/AVConv/">
avconv tarball</a>

http://superuser.com/questions/568464/how-to-install-libav-avconv-on-osx

This program is a fork of deprecated
<a target="_blank" href="http://ffmpeg.org/ffmpeg.html">
FFMPEG</a>.

In the folder containing mp3 files,
use String Manipulation to loop through files ending with mp3:

   {% highlight text %}
#!/bin/bash
if hash avconv > /dev/null; then
    for file in *.mp3
        do avconv -i "${file}" "`echo ${file%.mp3}.ogg`";
    done
else
    echo "avconv not found"
fi
   {% endhighlight %}


* Alternately, http://manpages.ubuntu.com/manpages/precise/en/man1/dir2ogg.1.html
  on Ubuntu:

   {% highlight html %}
   sudo apt-get install dir2ogg
   dir2ogg -r -q7 /path/to/mp3s/
   {% endhighlight %}

If you only have one mp3 file to convert to ogg, do it online:

* http://audio.online-convert.com/convert-to-ogg


## Resources

Here are some resources referenced on this page:

http://stackoverflow.com/questions/10105063/how-to-play-a-notification-sound-on-websites



