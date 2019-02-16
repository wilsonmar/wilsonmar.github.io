---
layout: post
title: "Making videos"
excerpt: "Tediously using Camtasia and Audacity PowerPoint on a Mac."
tags: [Videos, Evangelism]
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

{% include _toc.html %}

I'm looking for a more efficient way to make videos to explain concepts.


## Video editing software options

Here are the video editing software I've heard about:

* $259 Camtasia 2018 is what I'm using. It has both Windows and Mac editions. As with anything, it has <a href="#Camtasia">annoyances</a>.

* <a target="_blank" href="https://www.apple.com/final-cut-pro/">
Apple's $300 Final Cut Pro X</a> (FCPX) is what many 360 degree equirectangular VR videographers use to make experiences on HTC Vive VR headsets. Intuitive yet powerful. Great if you have the latest iMac Pro with the 5K monitor, multiple camera inputs. Also lots of 3rd-party plug-ins. It's the upgrade to the $70 iMovie.

* Adobe Premiere Pro "works with" other Adobe tools such as Photoshop to manipulate pictures.

* <a target="_blank" href="https://spark.adobe.com/make/video-maker/">Adobe Spark</a> is free.

* $999 Avid Media Composer 7 is the descendant of the software used by pros since the 90s.

* $1115 Pinnacle Studio 16 Ultimate

* $95 Sony Movie Studio Vegas is only for Windows.

* The program I'd like to try next is Articulate Storyline and <a target="_blank" href="https://articulate.com/360/replay">Replay</a> to create interactive video tutorials with webcam and other aspects of a full "learning management suite" (LMS). Although Articulate360 provides a <a target="_blank" href="https://itunes.apple.com/us/app/peek/id1164486237?ls=1&mt=12">free Peek desktop client</a> installed to record on MacOS, the video editing product consists of these 3 Windows clients:

   * Rise for responsive authoring
   * Articulate Review for collaboration
   * Articulate Live for training
   * Storyline 
   * Studio
   * Replay


<a name="Camtasia"></a>

## Camtasia Annoyances

I use Camtasia for Mac for capturing Skype and Hangout video calls.

The earlier version used to crash a lot after the file grew beyond 2 GB. But the 2018 edition is rather stable.

One annoying flaw still with Camtasia is that I can't freeze frame and extend an image. So I have to capture each PowerPoint screen I've animated. This is perhaps the most time-consuming flaw.

This makes me take about one day for each second of video produced using this approach.

PROTIP: If you are using a Mac, get a separate monitor of 1900x1080 (Full HD) resolution. This has the "16:9" aspect ratio YouTube displays. https://en.wikipedia.org/wiki/Display_resolution

The 2560×1440 pixel resolution on Apple Mac Book Pro "Retina" screens have an aspect ratio of <strong>21:9</strong>. So images or video captured on a Mac's screen would have annoying blocks on the edges when shown on YouTube. To get full screen HD images, you would have to add an overlay on each frame.


Here is an early attempt at making a video and put on YouTube:

<amp-youtube data-videoid="-ivRuvEIeIY" layout="responsive" width="480" height="270">
</amp-youtube>
<br />

Click the "CC" at the bottom of the frame for Closed Captions which I input into Camtasia to sync with audio and visuals. Its highest resolution is 720p HD.

Adding narration at specific spots is relatively simple.


## Setup software

1. On a Mac Finder, navigate to the Mac's "Movies" directory and into the "Camtasia 2018" folder created by the Camtasia installer. Previous versions have their own folder name. Camtasia creates a "Temporary Recordings" folder to store its recordings.

   WARNING: File created for each recording, such as "Rec 2-15-2019 2.trec" is not named for sorting by name.


   ### Install Audacity and mp3 plug-in

6. I manually download and install <a target="_blank" href="https://www.audacityteam.org/download/">Audacity</a> from FOSSHUB. 
   It has no brew. So I invoke the .dmg file, drag the icon, etc.

   PROTIP: Click the red dot to exit from the installer window and
   eject the installer from the left panel of Finder. 
   Move to Trash the installer file to save disk space.

6. Download and install the MP3 add-in to Audacity from:

   <a target="_blank" href="https://lame.buanzo.org/#lameosxdl">https://lame.buanzo.org/#lameosxdl</a>



## Presentation materials

1. Install PowerPoint

   PROTIP: Some Mac users prefer using Apple's presentation program, which has superior features. However, I prefer Microsoft PowerPoint simply because I may work on the file with others who work on Windows laptops.

2. Create a PowerPoint or other presentation file. 

3. In the PowerPoint Notes section, write down every word I plan to say as I create a diagram or flowchart.

4. Define <strong>animations</strong> in PowerPoint to reveal objects and lines of the diagram in sequence (within PowerPoint).

   PROTIP: Since the diagram is an introduction, consider beginning with the objective output and work backward. The diagram does not need to be the sequence of the actual data flow.

5. Highlight and bold words where animation appears.

   Record voice narration as I reveal each part of the diagram. 
   To record sound files, then export in mp3 format:
   

## Recording space

1. PROTIP: To avoid echo effects, go to a quiet padded room without a refigerator and other noise-making appliances. Record early in the morning when/where there is the least noise.

2. PROTIP: Have a small mirror near the camera so you can see yourself smiling.
   Smile and you'll sound friendlier in the audio.

3. PROTIP: If you wear glasses, avoid glare from the screen. Dim your screen, adjust the location of a sparate monitor, as well as placing bright lights at each side.


## Recording

   ### First time use

1. Click the Audacity icon to bring up the program. If you see this pop-up: 

   <img alt="making-videos-running-372x164-15707.jpg" width="372" src="https://user-images.githubusercontent.com/300046/47220580-68ed1a80-d36f-11e8-918e-df68cc33559a.jpg">
   
   open a Terminal session, go to this folder to delete the file name starting with <tt>audacity-lock-...</tt>

   <pre>cd "~/Library/Application Support/audacity/SessionData"</pre>

1. When using Audacity for the first time, check "Don't show this again at start up".

9. PROTIP: Use a second monitor to dispaly the narration. Audacity seems to like being on the primary display.

   PROTIP: I think it's too mentally taxing to coordinate the graphics as I speak. So I prefer recording the entire narration before messing with the visuals.

10. Create a folder named with a zero-filled version number, such as:

    <pre>SwaggerLoadGen-v01</pre>

    PROTIP: Zero-fill numbers (such as 01) so they sort in sequence.


    <a name="RecordAudio"></a>

    ### Record audio

10. Press <strong>command+N</strong> to open a new Audacity session dialog. For me, it is easier and less mentally taxing than using a mouse.

11. Clear your throat and drink a warm drink to hydrate your mouth, so you make less pronouciation mistakes.

    PROTIP: Anything that makes you uncomfortable, no matter how trivial, will reflect in the tone of your voice. So get comfortable.
    The pros stand up during recordings.

12. PROTIP: Read each sentence out loud before recording so during recording you can focus on emphasis rather than the underlying meaning of sentences.

13. Take a deep breath and stretch your mouth (to a smile) before clicking the red dot to begin recording.

    PROTP: A producer's job is to notice whether the speaker is speaking too fast or too slowly. Enunciate by moving your cheeks. 

    PROTIP: Record and save small sentences. This makes segments easier to manipulate.
    This also means smaller files. 

    PROTIP: Spikes on the level meter should only ocassionally reach the top. Beyond that, "clipping" occurs.

12. PROTIP: Allow about a half-second lead-in and load-out. It's easier to cut it than having to add it later, to maintain consistency in background noise.

13. If you know immediately you don't want to save a version, click the red X at the upper-left corner, then click No to the pop-up.

    PROTIP: It usually takes me several passes to get the speech the way I like.
    By talking out load, I often realize I should change the text and graphics. Words on paper often don't sound right coming out of my mouth.
   
14. Stop the recording by pressing the big space key on the keyboard or clicking the square icon (using your mouse).

    PROTIP: To avoid a clicking sound which you would have to edit out,
    Use a mouse and hold it below the table so it can't be heard.

15. Remove noise at the begging and end of the segment by clicking on a quiet part on the timeline and dragging to either end. Then press command/control+X to delete.

16. Press Shift + Command + E to <strong>Export</strong> the mp3 narration voice media into your project folder within the Camtasia folder.

    CAUTION: Do not "Save" the file because it would not be in a format that
    Camtasia can import.

    PROTIP: Name the file with a sequence number. Use even numbers so you can insert later.

16. Select ".mp4" or ".WAV".

    <a target="_blank" href="https://feedback.techsmith.com/techsmith/topics/how_to_export_audio_file_mp3_from_an_video_using_camtasia_for_mac">Camtasia does not export .mp3</a> either.

16. Press OK without entering anything in the metadata dialog. Camtasia doesn't look at it.

17. Press Commad + W to exit the Audacity file.

18. Repeat from <a href="#RecordAudio">Record Audio</a> step above.


    ### Video

    PROTIP: It's friendlier to see someone's face initially.

15. Record live video or animated introduction and ending.

    The recording would be in 1920x1080 pixels ("Full HD") for 1080p.

    The title formats can be re-used, with differeent text.

16. PROTIP: I like to have a "ding" sound at the end to let people know that the video is done.

17. In PowerPoint begin the Slide Show and click the green dot at the upper right to expand the screen full size so headings and footers don't appear.

18. Black areas are above and below the area we want to show in the video because the aspect ratio we want
   is 16:9 but the Mac's Retina screen is more of a square.

19. Create one image for each step in the process. On my Mac I press command+shift+3.

    <pre>brew cask install ImageOptim</pre>

    By default, the Mac stores png files on the Desktop.

    The default file name is "Screenshot..."

    PROTIP: Capture screens in the sequence to be revealed on the video
    so the file name's time and date can be used to keep the sequence for you.

    It would be nice to capture images in 1920x1080 pixels for 1080p resolution.
    I could use SnagIt for that, but haven't tried it because I fear that I have to reset the position of the capture with every image.

0. Use Finder to copy all the screenshot files from Desktop into the Camtasia project folder.
0. Drag from Finder and drop files into the Camtasia Media Bin.
0. Shut down other programs running, if you can to conserve RAM for Camtasia's use.

   ### In Camtasia: 

0. Click the list icon and then click the Name heading to sort the elements by date.
0. Add captions to the audio track. 

    This provides the exact time location when I say certain words
    I say so I can display a specific image to appear slightly before I say each specific word.

0. Position the visual to precisely reveal each graphic element to match the narration sound.

   The preciseness I strive for is what makes it time-consuming.

0. Click on one element.
0. Set the <strong>properties</strong> 

    This is the most confusing aspect of Camtasia.

    NOTE: Zooming reduces the resolution of images, and can make them look fuzzy.

0. Adjust the screen size.
0. Copy the properties to all visual elements.

0. Generate the video to .mp4 file. Click Share, Local.
0. Extract narration .srt (SubRip) text file from Camtasia 

0. Upload to YouTube, Vimeo, DailyMotion, etc.
0. Upload .srt file to YouTube.
0. Make a backup to a USB drive. Just in case.
0. Get feedback and revise.

## Video to Gif

Small videos can be converted to lower-resolution gif or higher-resolution png animation file format using:<br />
<a target="_blank" href="https://ezgif.com/video-to-gif">https://ezgif.com/video-to-gif</a>

## Archive Share Camtasia

When Camtasia makes a recording, it stores them in folder Movies > Camtasia 2018 > Temporary recordings.

Camtasia then automatically inserts the video into whatever camproj file is displayed.
However, it leaves the file in the Temporary recordings folder.
So when I archive the folder, those recordings are not in the folder.

To make a proper archive for sharing, open Camtasia. Open you project. Click File > <strong>Export project as zip</strong>. Make sure "Include all clip bin items" is checked. Save the ZIP file to a location such as Downloads.

PROTIP: Due to the large size of files, I copy the zip file to a network Google Drive, then delete the file from my laptop.


## More Resources

<a target="_blank" href="https://www.bmyers.com/">bmyers.com</a> (Bill Myers) is the king of monitization, and has a $10/month subscription to watch his short tutorials.

<a target="_blank" href="http://www.davidfrosdick.com/">davidfrosdick.com</a>

<a target="_blank" href="https://www.macintoshtipz.com/">macintoshtipz.com</a>

<a target="_blank" href="https://obsproject.com/">obsproject.com</a>

