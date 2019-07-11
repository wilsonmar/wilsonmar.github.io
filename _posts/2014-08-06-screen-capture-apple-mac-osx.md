---
layout: post
title: "Screen Capture and Image File Management on Mac OSX"
excerpt: "Did I really see that?"
tags: [apple, mac, setup]
date: "2014-08-06"
file: "screen-capture-apple-mac-osx"
image:
# feature: pic powerplant 3 monitors 45-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622128/138d868e-0585-11e6-9696-7eb412f4aeef.jpg
  credit: Cofely.pl
  creditlink: http://www.cofely.pl/wp-content/uploads/2015/09/45-1900x500.jpg
comments: true
---
<i>{{ page.excerpt }}</i>
<p align="right"><a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=es&u=https%3A%2F%2Fwilsonmar.github.io%2Fscreen-capture-apple-mac-osx%2F"><img alt="Español (Spanish)" width="20" height="14" src="../images/flags/es.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=fr&u=https%3A%2F%2Fwilsonmar.github.io%2Fscreen-capture-apple-mac-osx%2F"><img alt="Français (French)" width="20" height="14" src="../images/flags/fr.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=de&u=https%3A%2F%2Fwilsonmar.github.io%2Fscreen-capture-apple-mac-osx%2F"><img alt="Deutsch (German)" width="20" height="14" src="../images/flags/de.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=it&u=https%3A%2F%2Fwilsonmar.github.io%2Fscreen-capture-apple-mac-osx%2F"><img alt="Italiano" width="20" height="14" src="../images/flags/it.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=pt&u=https%3A%2F%2Fwilsonmar.github.io%2Fscreen-capture-apple-mac-osx%2F"><img alt="Português" width="20" height="14" src="../images/flags/pt.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ru&u=https%3A%2F%2Fwilsonmar.github.io%2Fscreen-capture-apple-mac-osx%2F"><img alt="Cyrillic Russian" width="20" height="14" src="../images/flags/ru.png"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https%3A%2F%2Fwilsonmar.github.io%2Fscreen-capture-apple-mac-osx%2F"><img alt="中文 (简体) Chinese (Simplified)" width="20" height="14" src="../images/flags/cn.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ja&u=https%3A%2F%2Fwilsonmar.github.io%2Fscreen-capture-apple-mac-osx%2F"><img alt="日本語 Japanese" width="20" height="14" src="../images/flags/jp.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A%2F%2Fwilsonmar.github.io%2Fscreen-capture-apple-mac-osx%2F"><img alt="한국어 Korean" width="20" height="14" src="../images/flags/ko.gif"></a>
</p>
{% include _toc.html %}


<a id="ScrCapturez"></a>

## Screen Capture

The 15" Retina monitor is 2880 x 1800 pixels.

The 13" Wide screen Built-in display is 1280 x 800 pixels.

If I'm listening to a webinar and want to capture a screen before the speaker goes to the next topic,
when speed is of the essence, I capture the screen by pressing 
<br /><strong>&#8984; + shift + 3</strong>.
The problem with this is since I have several monitors going at once, 
a separate file is saved for each display.

The default location for screen captures is the <strong>Desktop</strong> folder.
Each file is named with a date and time stamp, such as 
<strong>Screenshot 2015-02-04 xx.xx.xx.png</strong>.
But if you have Dropbox installed, you can select images to be saved into a Snapshot folder.

PROTIP: 
Immediately go to the Finder and <strong>rename</strong> the file just captured.

If I'm working on a blog where I need to end up with a graphc file, I capture an area of the screen
by pressing 
<br /><strong>&#8984; + shift + 4</strong>.
A "plus" cursor appears for me to position at the upper left corner of what I want to capture.
I then hold the mouse down and drag to the lower-right corner.
When I let go of the mouse the picture is saved to my <strong>Desktop</strong> folder.

PROTIP: 
The Mac's default approach for screen capture makes use of a 3-key combination.
I like to hold down shift and command using my right hand, then press 3 or 4 using my left hand.
Specifically, the size of my hand is such that it's more comfortable for me to 
press the command with my right index finger and the shift key with my right pinkie finger.
Then I reach up to press the 3 or 4 with my left hand.

Others prefer to hold down the shift and command keys using their left hand, 
then reach over to press the 3 or 4 with their right hand.

Those who have been Boy Scouts may feel fine doing it all with one hand.
But can this next idea be accomplished with one hand?

If I'm working on a word processing program, I can press
<br /><strong>Shift+control+Command+4</strong> to capture an area to the invisible Mac
<strong>clipboard</strong> instead of a desktop file.

However, it is not a good practice to paste graphics into Microsoft Word for Mac 2011
because the program automatically reduces the resolution of images.
Furthermore, images fuzzy on Word because the program has different dpi resolutions.
Word set default to 96 dpi, but the Mac is using 144 dpi or 72 dpi. 
So, Word will resize it and make it blur.

<h3> Change file type saved from png to jpg</h3>

By default png format files are generated, which are 5-8 MB large but lossless files.
<!-- Thanks to http://colorlib.com/wp/print-screen-mac/ -->
To change the default file type to jpg, which generates smaller lossy files:
<br />
In a Terminal window, invoke:
<br />
<tt>defaults write com.apple.screencapture type jpg</tt>

The change will take effect after next restart.
But make these changes instant,
in a Terminal window, invoke:
<br />
<tt>killall SystemUIServer</tt>


Macs also come with the <strong>Grab</strong> program.


<a id="Preview_pix"></a>

## Working with Pictures in Preview

PROTIP: 
When working in Word, from Preview, save the cropped file as a JPG picture.
Then in Word select menu Insert | Photo | Picture from file...

Double-clicking on a png file will open it in the 
use the built-in Preview app, which also reads pdf files.
	
To crop images, add text, or create transparent backgrounds
and save in another format,


## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
