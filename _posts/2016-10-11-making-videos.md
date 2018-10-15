---
layout: post
title: "Making videos"
excerpt: "Using Camtasia to make a video from PowerPoint is tedious."
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

Here is an example of a video I created and put on YouTube:

<amp-youtube data-videoid="-ivRuvEIeIY" layout="responsive" width="480" height="270">
</amp-youtube>

Click the "CC" at the bottom of the frame for Closed Captions which I input into Camtasia to sync with audio and visuals.
Its highest resolution is 720p HD.


## Video editing software options

I've been using Camtasia.

<a target="_blank" href="https://www.apple.com/final-cut-pro/">
Apple's $300 Final Cut Pro X</a> (FCPX) is what many 360 degree equirectangular VR videographers use to make experiences on HTC Vive VR headsets. Intuitive yet powerful. Great if you have the latest iMac Pro with the 5K monitor, multiple camera inputs. Also lots of 3rd-party plug-ins. It's the upgrade to the $70 iMovie.

Adobe Premiere Pro "works with" other Adobe tools such as Photoshop to manipulate pictures.

Pros tell they prefer the above over $999 Avid Media Composer 7.

$1115 Pinnacle Studio 16 Ultimate

$95 Sony Movie Studio Vegas is only for Windows.

The program I'd like to try next is Articulate Storyline and Replay 
https://articulate.com/360/replay
so that I can create interactive video tutorials with webcam and other aspects of a full "learning management suite".
Although Articulate360 provides a 
<a target"_blank" href"https://itunes.apple.com/us/app/peek/id1164486237?ls=1&mt=12">free Peek desktop client</a> installed to record on MacOS, the video editing product consists of these 3 Windows clients:

   * Rise for responsive authoring
   * Articulate Review for collaboration
   * Articulate Live for training
   * Storyline 
   * Studio
   * Replay


## Camtasia Annoyances

I use Camtasia for Mac for capturing Skype and Hangout video calls.

The earlier version used to crash a lot after the file grew beyond 2 GB.

One annoying flaw still with Camtasia is that I can't freeze frame and extend an image. So I have to capture each PowerPoint screen I've animated.

Since Mac screens are a different aspect ratio than YouTube, I have to add an overlay on each frame.

However, adding narration at specific spots is relatively simple.

It takes me about one day for each second of video produced using this approach:

## The steps

1. Create a folder in the Camtasia folder within "Movies". 
2. In there create a PowerPoint file.

   ### Animation with narration

3. In the PowerPoint Notes section, write down every word I plan to say as I create a diagram or flowchart.

   PROTIP: Some Mac users prefer using Apple's presentation program, which has superior features. However, I prefer Microsoft PowerPoint simply because I may work on the file with others who work on Windows laptops.

4. Define <strong>animations</strong> in PowerPoint to reveal objects and lines of the diagram in sequence (within PowerPoint).

   PROTIP: Since the diagram is an introduction, consider beginning with the objective output and work backward. The diagram does not need to be the sequence of the actual data flow.

5. Highlight and bold words where animation appears.

   Record voice narration as I reveal each part of the diagram. 
   To record sound files, then export in mp3 format:
   
   ### Narration audio

6. I manually download and install <a target="_blank" href="https://www.audacityteam.org/download/">Audacity</a> from FOSSHUB. 
   It has no brew. So I invoke the .dmg file, drag the icon, etc.

   PROTIP: Click the red dot to exit from the installer window and
   eject the installer from the left panel of Finder. 
   Move to Trash the installer file to save disk space.

7. When invoking Audacity for the first time, check "Don't show this again at start up".

8. PROTIP: To avoid an echo, record early in the morning within a padded room,
   when/where there is the least noise.

9. PROTIP: Audacity's UI was not designed well. Use a second monitor to dispaly the narration. Audacity seems to like being on the primary display.

   PROTIP: I think it's too mentally taxing to coordinate the graphics as I speak. So I prefer recording the entire narration before messing with the visuals.

10. Create a folder named with a zero-filled version number, such as:

    <pre>SwaggerLoadGen-v01</pre>



    <a name="RecordAudio"></a>

    ### Record audio

10. Press command+N to open a new Audacity session dialog.

11. Drink a warm drink to hydrate your mouth so you make less pronouciation mistakes.

    PROTIP: Anything that makes you unfortable, no matter how trivial, will reflect in the tone of your voice. So get comfortable.
    The pros stand up during recordings.

12. PROTIP: Read each sentence out loud before recording so during recording you can focus on emphasis rather than understanding the meaning of that sentence.

13. Click the red dot to begin recording.

    PROTP: Speak slower than usual. Enunciate by moving your cheeks.

    PROTIP: Record and save small sentences. This makes segments easier to manipulate.
    This also means smaller files. Zero-fill numbers (such as 001).

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

16. Select ".WAV".

    <a target="_blank" href="https://feedback.techsmith.com/techsmith/topics/how_to_export_audio_file_mp3_from_an_video_using_camtasia_for_mac">Camtasia does not export .mp3</a> either.

16. Press OK without entering anything in the metadata dialog. Camtasia doesn't look at it.

17. Press Commad + W to exit the Audacity file.

18. Repeat from <a href="#RecordAudio">Record Audio</a> step above.


    ### Video

    PROTIP: It's friendlier to see someone's face initially.

15. Record live video or animated introduction and ending.

    The recording would be in 1920x1080 pixels for 1080p.

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

    TODO: On one element, 

    NOTE: Zooming reduces the resolution of images, making them look fuzzy.

0. Adjust the screen size.
0. Copy the properties to all visual elements.

0. Generate the video to .mp4 file. Click Share, Local.
0. Extract narration .srt (SubRip) text file from Camtasia 

0. Upload to YouTube, Vimeo, DailyMotion, etc.
0. Upload .srt file to YouTube.
0. Make a backup to a USB drive. Just in case.
0. Get feedback and revise.

## Video to Gif

Small videos can be converted to gif file format using:<br />
https://ezgif.com/video-to-gif

## More Resources

https://www.bmyers.com (Bill Myers) is the king of monitization,
and has a $10/month subscription to watch his short tutorials.

http://www.davidfrosdick.com/

macintoshtipz.com

https://obsproject.com/

