---
layout: post
date: "2025-07-09"
lastchange: "v001 + fix yaml :2025-07-03-python-earsketch.md"
file: "python-intro"
title: "Python introduction using Earsketch and other"
excerpt: "How to automate Python"
tags: [python, microsoft, azure, machine learning, AI]
image:
# feature: pic green matrix hallway 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14623876/07afd066-0593-11e6-933a-2e596511ac67.jpg
  credit:
  creditlink:
comments: true
created: "2025-07-03"
---
{% include l18n.html %}
{% include _toc.html %}
<i>{{ page.excerpt }}</i>



EarSketch is a free online programming environment created 
to use music composing and remixing for teaching coding in Python and JavaScript.
It was developed from US National Science Foundation funding and tech giants
to Georgia Institute of Technology under professors 
Jason Freeman and 
Brian Magerko.

Instead of dragging and dropping sounds like in GarageBand, you write Python code to build  songs.

## Landing page

Can it produce studio-quality music? Listen:

https://earsketch.gatech.edu/

Go to its CONTENT MANAGER IDE:

https://earsketch.gatech.edu/earsketch2/

Click START for the tour

Click the green arroe to play.

The platform is designed for beginners, so no coding or music experience is needed to start.

Register New Account

https://www.teachers.earsketch.org/earsketch-tutorials

## Explanation of the code:

```
from earsketch import *
```
enables earsketch to understand built-in functions and commands in your program.

```
setTempo(130)
```
is a command to define how fast the beats appear.

Change the tempo and play it to see what happens.

There are also functions where you can create your own custom code blocks.

This function has 4 positions which hold values:
```
fitMedia(TECHNO_SYNTHPLUCK_001, 1, 1, 9)
```
is a statement block places the named sound clip on track 1, from measure 1 to 9.

The "HOUSE_ROADS_PIANO_007" is from EarSketch's default library.

Add more tracks or try a loop to repeat a sound.

Fix any errors and keep experimenting.

There are other built-in functions like makeBeat() to create custom drum patterns.

Click CONTENT Manager on the left edge for options

Click CURRICULUM at the right edge 

* Loops: Repeat patterns or add multiple clips efficiently.

* Conditionals: Add logic to your song (e.g., change sounds based on certain conditions).

## Other ideas

https://www.teachers.earsketch.org/compete
competitions

1. Generate music from AI text prompts? using another AI
1. Recognize music as EarSketch code?

1. Change the musical notation code within EarSketch
1. Have EarSketch generate music

