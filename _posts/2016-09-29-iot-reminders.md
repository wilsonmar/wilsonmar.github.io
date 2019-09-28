---
layout: post
title: "IoT reminders prevent dead mobile battery"
excerpt: "The annoying mobile-IoT-cloud mash-up we actually need"
tags: [Clouds, IoT]
date: "2016-09-29"
file: "iot-reminders"
image:
#bow green reminder 1900x500-318kb
  feature: https://cloud.githubusercontent.com/assets/14143059/19455432/3bc1c67c-947a-11e6-9dcf-3e7fd9a65be9.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Our annoyance/problem #

<!--<amp-img alt="iphone dead battery 451x232-36kb.jpg" width="451" height="232" src="https://cloud.githubusercontent.com/assets/14143059/19445403/527cf5d6-9451-11e6-845b-aa54d21f20df.jpg"></amp-img>
-->

It's a <strong>hassle</strong> to start your day with a dead battery.

<amp-youtube data-videoid="ruTt8uuFWls" layout="responsive" width="480" height="270"></amp-youtube>

<!-- <amp-img alt="iphone-steve-jobs-dead-468x340-83kb.jpg" width="468" height="340" src="https://cloud.githubusercontent.com/assets/14143059/19445612/3faba5c8-9452-11e6-8f53-1a923b98056d.jpg"></amp-img>
-->

This is especially relevant to owners of iPhones, iPads, and other devices which
do not have replaceable batteries.

But even though many Samsung and other Android phones batteries are replaceable,
some of us still need help remembering to plug them in to charge.


## Solution #

This project provides several ways to be <strong>reminded</strong> 
so that we don't go to sleep while 
battery-dependent devices are left to drain overnight.

## Personas #

We designed our solution for people who don't have a lot of technical experience.

So we made it easy to setup and use even though
we use advanced security techniques 
(XMPP and SPARQL with PKI security certificates).

With our package, you don't need to have your laptop running all the time.

Nevertheless, we can arrange
for local <strong>technical experts</strong> 
to travel to you for installation.

> If you want one for your team or company,
let me know and I'll come to set it up in your office.




## Scenario story #

Let's now look at elements of the cloud offering:

<amp-img alt="iot-reminders-box-v04-650x288-288kb.jpg" width="650" height="288" src="https://cloud.githubusercontent.com/assets/14143059/19732175/2f1a69da-9b5d-11e6-8dbb-386a9d78cc28.jpg"></amp-img>

0. Our iOS app is downloaded and installed from the Apple Store
   onto each individual user's iPhone or iPad.

0. From the Google Play Store each user downloads and installs 
   our <a href="#AndroidApp">Android app</a>.

0. On either platform, open the mobile app and it begins to collect
   battery conditions and
   calculate <strong>usage patterns</strong> to
   project remaining time and, if plugged in,
   when a full charge will be achieved.

   <amp-img alt="iot reminders design drawdown v03 650x473-113kb.jpg" width="650" height="473" src="https://cloud.githubusercontent.com/assets/14143059/19625190/f9c1b026-98ce-11e6-99ee-0816f7b70e14.jpg"></amp-img>

   If the app can predict when you'll <strong>unplug</strong> for usage,
   it projects charge levels for the rest of your day. ***

0. The app stores this information until it connects with the same
   Wi-Fi <strong>router</strong> used by the
   <strong>receiver</strong> program that
   retrieves battery information from mobile phones.

0. For security, <strong>register</strong> your 
   <strong>credentials</strong>
   on the same website that sends you the
   <strong>Black Box</strong> 
   you'll be using to manage your "things" -- 
   <strong>sensors</strong> that listen and
   <strong>actuators</strong> that do things.

0. That website also automatically keeps software in your Box up to date.

0. Several <strong>antennas</strong> in the Black Box talk 
   to devices that communicate using a variety of technologies 
   (Wi-Fi, BTLE, ZigBee, 3G, LTE, LoRa).

0. The Black Box has a <strong>web page</strong> 
   for you to <strong>secure communication</strong> with each device
   and to specify <strong>settings</strong> such as 
   how often measurements are processed,
   and other preferences.

   Because of this, you won't need to plug a monitor to the box
   even though it has a HDMI port. ***

0. Unlike a laptop or mobile phone, your Black Box
   is intended to be constantly plugged into an electrical outlet. 
   And ideally through an Uninteruptable Power Supply
   containing a battery.


0. When conditions and preferences allow,
   the <strong>Dispatcher program</strong> 
   sends out a signal to devices it can communicate with.

0. Notification can start with a <a href="#TextMessage">text message</a> 
   to the phone,
   which is ideal because the owner would then be able to take immediate action
   of plugging the phone in.

   The sound of text message tones on phones are usually too low to hear,
   so that's one reason people wear a smart watch.
   But that can also run out of battery as well. ***

0. That's the reason the Dispatcher may 
   <strong>call the phone</strong> with a recorded message.

0. Alternately, a speaker device may emit a recorded sound, recorded speech, or 
   text-to-speech artificial voice. ***

0. If a response is not received within a set time,
   an annoying (attention grabbing) 
   <strong>siren</strong> (alarm) could sound. ***

0. Individual preferences for being alerted, 
   and the <a href="#escalation">sequence of escalation</a> preferred,
   are set in the
   <strong>dispatch</strong> web page.

0. For example, those hard of hearing may prefer that
   a <strong>smart bulb</strong> 
   be lit up with a color and pattern of lighting set by the owner.

   This owner personal control of notifications is what provides great value from this solution.

0. Additional <strong>actuators</strong> may be added, such as devices that
   <a href="#Vibrators">vibrate</a>. 

0. Since the condition of the mobile device continues to be monitored, 
   simply plugging the device in for charging would 
   <strong>stop</strong> alerting. ***

0. Optionally, press a <strong>Flic</strong>, Amazon Dash, or other 
   button to have the Dispatcher program alter alerting.

   * One press to remind me again in 10 minutes (a kind of snooze button)
   * Two presses to <a href="#CallPhone">call the phone</a> (so I can find it), or a
   * Long press and hold to ignore (let the battery drain)
   <br /><br />

   Thus, a button can control the lights, the speakers, and the alarm.

0. For even more convenience, if there is a microphone (such as Sonos)
   listening for spoken commands, Natural Language Processing software
   would understand what needs to be done.


   ### Inside the Black box #

   <amp-img alt="iiot-reminders-v04-650x278-149kb.jpg" width="650" height="278" src="https://cloud.githubusercontent.com/assets/14143059/19732182/3334f940-9b5d-11e6-88fb-dc8b60391b2d.jpg"></amp-img>

   Now let's look further into components of the Sentry box. 

0. Data retrieved is stored in a 
   database containing trend information over time.

   The receiver program also manages the 
   <strong>archival and deletion</strong> 
   of data to stay within storage limits.

   The box comes with 64 GB of fast Solid-State storage. ***


0. Trends are calculated and displayed by an 
   <strong>analysis</strong> program.

0. A long-running <strong>alerting</strong> program 
   determines when actions</strong> need to be triggered, based on a
   <a href="#Rules">set of logical rules</a>.

   For example, the program determines whether 
   the battery is steadily declining 
   or is being charged, and notifies the
   <a href="#Dispatch">Dispatch program</a>
   listening for trigger requests.


   ### Extensions #

   An evaluation of this solution should include how well it can be extended.

0. One extension of this system would interact with various 
   <strong>calendars</strong>
   associated with the user.

   This design is classified among "Health and Medicine" offerings
   because it can also be applied to 
   remind people to <strong>take pills</strong> before going to bed.

0. Optionally, the <strong>GPS location</strong> of the device, if available,
   can be sent so the machine knows if you leave your house without doing what needs to be done.

0. Rather than risk exposing a connection to the public internet, which
   some home internet providers do not allow,
   some may prefer to have data be
   collected by <strong>cloud servers</strong> 
   in locations around the world, then
   <strong>retrieved</strong> (or pulled into) the local machine.

0. Use of an external cloud also allows inclusion of 
   <strong>external sensor data</strong> 
   beyond mobile phones,
   such as nearby weather conditions,
   road conditions, water utility usage,
   or other "smart city" feeds.

   A low-battery alert is one in a whole set of use cases
   for individually customizable physical alerting.

   We've come tothe ultimate reason for a personal Black Box.

0. When configured with an 
   <strong>API</strong> (Application Programming Interface)
   to receive messages from Jenkins, Zapier, or other external system,
   the Box ensures you receive the appropriate 
   <strong>urgency</strong>
   depending on what it knows about the
   sender, the subject, and how you prefer to be notified.
   For example, you'll get more
   immediate attention and repeated notice for
   fire alarms or freezers not having power anymore.
   

   ### Industrial team extensions #

   We can imagine several other uses for a generalized
   <strong>physical reminder</strong> system like this
   to ensure that important tasks get done.

   This solution can also be useful in a <strong>team environment</strong>
   where each person may think it's another person's responsibility.

   This is for almost any task that must be done by a certain time.
   
   NOTE: The more general solution is called a 
   <a target="_blank" href="http://lifehacker.com/how-i-keep-myself-accountable-using-dead-man-s-snitch-1785949377?">
   Dead man's snitch</a>, 
   as in "a copy of this will be released to the press if my people don't hear back from me the end of this hour".

> If you want this for yourself, 
let me know and I'll get one to your home or office.


## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}

   and whether the battery is plugged in for charging.
