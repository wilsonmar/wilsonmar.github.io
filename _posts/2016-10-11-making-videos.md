---
layout: post
date: "2022-11-02"
file: "making-videos"
title: "Making videos"
excerpt: "Tediously using Camtasia, Audacity, OBS, and automating animated PowerPoint on a Mac"
tags: [Videos, Evangelism]
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

I'm looking for a more efficient way to make videos to explain concepts.

{% include whatever.html %}


## Video editing software options

Here are the video editing software I've heard about:

* $259 Camtasia is what I'm using to edit videos. It has both Windows and Mac editions. As with anything, it has <a href="#Camtasia">annoyances</a>.

* <a target="_blank" href="https://www.apple.com/final-cut-pro/">
Apple's $300 Final Cut Pro X</a> (FCPX) is what many 360 degree equirectangular VR videographers use to make experiences on HTC Vive VR headsets. Intuitive yet powerful. Great if you have the latest iMac Pro with the 5K monitor, multiple camera inputs. Also lots of 3rd-party plug-ins. It's the upgrade to the $70 iMovie.

* $129 <a target="_blank" href="https://www.telestream.net/screenflow/">Screenflow</a>

* Adobe Premiere Pro "works with" other Adobe tools such as Photoshop to manipulate pictures.

* <a target="_blank" href="https://spark.adobe.com/make/video-maker/">Adobe Spark</a> is free.

* $999 Avid Media Composer 7 is the descendant of the software used by pros since the 90s.

* $1115 Pinnacle Studio 16 Ultimate

* $95 Sony Movie Studio Vegas is only for Windows.

* <a target="_blank" href="https://articulate.com/360/">Articulate360</a> Storyline creates interactive video tutorials with webcam and other aspects of a full "learning management suite" (LMS).  A <a target="_blank" href="https://itunes.apple.com/us/app/peek/id1164486237?ls=1&mt=12">free Peek desktop client</a> installed to record on MacOS, the video editing product consists of these <strong>Windows</strong> clients:

   * Rise for responsive authoring
   * Articulate Review for collaboration
   * Articulate Live for training
   * Storyline 
   * Studio
   * <a target="_blank" href="https://articulate.com/360/replay">Replay</a>
   <br /><br />

   These would be for creating RLO (reusable learning objects) by following principles from <a target="_blank" href="https://www.adlnet.gov/scorm">DoD's SCORM</a> (Sharable Content Object Reference Model), <a target="_blank" href="https://en.wikipedia.org/wiki/Aviation_Industry_Computer-Based_Training_Committee">AICC</a> (Aviation Industry CBT Committee), and now xAPI (for Experience API, aka Project Tin Can) from the ADL.

LMS vendors that are <a href="https://xapi.com/adopters/">listed as adopters</a> by xAPI:
<ul>
<li><a target="_blank" href="https://www.watershedlrs.com/">Watershed LRS</a></li>
<li><a target="_blank" href="https://www.softwareadvice.com/lms/digitalchalk-profile/">Digital Chalk</a></li>
<li><a target="_blank" href="https://www.softwareadvice.com/lms/ispring-learn-profile/">iSpring Learn</a></li>
<li><a target="_blank" href="https://www.softwareadvice.com/lms/learnupon-profile/">LearnUpon</a></li>
<li><a target="_blank" href="https://www.softwareadvice.com/lms/calliduscloud-litmos-profile/">Litmos</a></li>
<li><a target="_blank" href="https://www.softwareadvice.com/lms/talentlms-profile/">TalentLMS</a></li>
</ul>

<hr />   

<a name="Camtasia"></a>

## Camtasia Annoyances

I use Camtasia for Mac for capturing Skype and Hangout video calls.

The earlier version used to crash a lot after the file grew beyond 2 GB. But the 2018 edition is rather stable.

One annoying flaw still with Camtasia is that I can't freeze frame and extend an image. So I have to capture each PowerPoint screen I've animated. This is perhaps the most time-consuming flaw.

This makes me take about one day for each second of video produced using this approach.

The 2560×1440 pixel resolution on Apple Mac Book Pro "Retina" screens have an aspect ratio of <strong>21:9</strong>. So images or video captured on a Mac's screen would have annoying blocks on the edges when shown on YouTube. An example is the video below -- my early attempt at making a video:
<amp-youtube data-videoid="-ivRuvEIeIY" layout="responsive" width="480" height="270">
</amp-youtube>
<br />

I did manage to figure out how to create <a href="#CC">captioning and translations</a>, though.

PROTIP: If you are using a Mac, get a separate monitor of 1900x1080 (Full HD) resolution. This has the "16:9" aspect ratio YouTube displays. https://en.wikipedia.org/wiki/Display_resolution


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


   ### Install ffmpeg

   The free CLI utility can be used to make video files smaller and better.

1. This command took a 8 minute video file from 112MB to 58MB:

   <pre><strong>ffmpeg -i input.mp4 -b 800k output.mp4</strong></pre>

1. This command tos use H.265 took a 8 minute video file to 28.5MB (but Apple only shows audio):

   <pre><strong>ffmpeg -i input.mp4 -vcodec libx265 -crf 28 output.mp4</strong></pre>


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

### &nbsp; &nbsp; &nbsp; First time use

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


<a name="OBS"></a>

## OBS

References:
   * <a target="_blank" href="https://obsproject.com/">obsproject.com</a>
   <br /><br />

1. On MacOS, obtain "OBS.app" in /Applications folder:

   brew install obs

   Recording on Linux & Windows with OBS Recorder v19.0.3

1. Set your system resolution to 1920 x 1080 2. Open the Application.
3. Click on Settings
4. Click on Output settings
   * Output Mode: Simple
   * 
5. Click on Video settings
   * Base (Canvas) Resolution: 1920x1080
   * Output (Scaled) Resolution: 1920x1080
   * Downscale Filter: Bilinear (Fastest, but blurry if scaled)
   * Common FPS Values: 30
   * Disable Aero: checked
6. When you save the recording, set video format to MP4.
7. Start Recording from the main screen.
9. After you are done recording, upload your videos on Google Drive.

<hr />

<a name="Zoom"></a>

## Zoom

1. Set a Zoom session to record.
2. After a session, get the URL such as https://zoom.us/recording/share/tw0sWER6zXWcTHWTdSo7YwbZvLjd2LvvQYXclaZecDewIumekTziMw

   You can click to view the video of the session.
3. Create a new folder, named with a sortable date and topic such as "2019-10-11-Load-CSV".
3. Click "Download (3 files)".
4. Within "Format", select "All".
5. Click Save.
   1. .txt for Chat Messages.
   2. .m3a (Apple's proprietary format) for audio of about 41MB
   3. .mp4 for video (with audio), which has ".crdownload" while the 1+GB is being downloaded.
6. Edit the .txt file to add the URL.


## Video

   PROTIP: It's friendlier to see someone's face initially.

15. Record live video or animated introduction and ending.

    The recording would be in 1920x1080 pixels ("Full HD") for 1080p. 
    
    "4K" is 3840x2160, 8.3 megapixels, aspect ratio 16:9. 

    Ultra HD television is recorded using professional DCI 4K cameras in 4096x2160 (4,000 pixels, 8.8 megapixels, aspect ratio 17:9) for digital cinema.

    "5K" on Mac Retina is 5120x2880. 
    
    "8K" is 7680x4320.

    The title formats can be re-used, with differeent text.

16. PROTIP: I like to have a "ding" sound at the end to let people know that the video is done.

17. In PowerPoint begin the Slide Show and click the green dot at the upper right to expand the screen full size so headings and footers don't appear.

18. Black areas are above and below the area we want to show in the video because the aspect ratio we want
   is 16:9 but the Mac's Retina screen is more of a square.

19. Create one image for each step in the process. On my Mac I press command+shift+3.

    <pre>brew install --cask ImageOptim</pre>

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

0. Extract narration .srt (SubRip) text file from Camtasia (if you created them in Camtasia).

0. Upload to YouTube, Vimeo, DailyMotion, etc.
0. Upload .srt file to YouTube.

0. Make a backup to a USB drive. Just in case.
0. Get feedback and revise.

## Video to Gif

Small videos can be converted to lower-resolution gif or higher-resolution png animation file format using:<br />
* <a target="_blank" href="https://github.com/sindresorhus/Gifski">https://github.com/sindresorhus/Gifski</a>
* <a target="_blank" href="https://ezgif.com/video-to-gif">https://ezgif.com/video-to-gif</a>

## Archive Share Camtasia

When Camtasia makes a recording, it stores them in folder "Temporary recordings" within Movies > Camtasia 2018.

Camtasia then automatically inserts the video into whatever camproj file is displayed.
However, it leaves the file in the Temporary recordings folder.
So when I archive the folder, those recordings are not in the folder.

To make a proper archive for sharing, open Camtasia. Open you project. Click File > <strong>Export project as zip</strong>. Make sure "Include all clip bin items" is checked. Save the ZIP file to a location such as Downloads.

PROTIP: Due to the large size of files, I copy the zip file to a network Google Drive, then delete the file from my laptop.

<a name="CC"></a>

## YouTube Closed Captioning and Translations 

Here are the steps you can use to put a video on YouTube:

PROTIP: Those hard of hearing would appreciate you offering closed captioning in their language.

### See closed captions

1. Use a browser to view an existing video on YouTube, such as this one shown above:

   <a target="_blank" href="https://www.youtube.com/watch?v=ivRuvEIeIY">https://www.youtube.com/watch?v=ivRuvEIeIY</a>

   Alternately, <a target="_blank" href="https://www.youtube.com/watch?v=ivRuvEIeIY">this video</a>.


### Download new video

1. Log into YouTube.com
1. Click the "Create a video or post" icon at the top of the screen. Click "Upload video".
1. Click the "Public" list and select "Unlisted" until we get it configured.
1. Switch to your Finder and navigate to your .mp4 video file.
1. Drag and drop the file (position your cursor on the file, keep holding down the mouse while you drag it to its location, then release when it's on top of the destination).

1. While the file uploads:

   1. Type a title and description, and add tags for the video.
   1. Click on "Advanced Settings" tab.
   1. Under "Comments", click "All" and select "All except potentially inappropriate comments".
   1. Under "Caption certification", select "This content has never aired on television in the U.S.".
   1. Under "Community contributions" on the right side, check "Allow viewers to contribute translated titles, descriptions, and subtitles/CC".
   1. Click "Today".

1. Scroll down to select an thumbnail selected by YouTube or click "Custom thumbnail" to upload your own.
1. Right-click on the URL generated and select "Copy Link Location".
1. Click "Done".
1. Switch to your editor to paste it in your blog.

   ### View subtitle

1. Switch back to your channel and click the new video link to <strong>view it</strong>.

   <img align="right" alt="making-videos-youtube-cc-menu-211x274-6841.jpg" width="211" src="https://user-images.githubusercontent.com/300046/54519950-f85a2200-493d-11e9-965f-28c59cf824f1.jpg">

1. Click the "CC" (for Closed Captioning) at the bottom of the frame so that a red line appears under it.

   NOTE: Closed captioning and subtitles mean the same thing.

2. Click the gear icon for a menu.
3. Click "Subtitles(CC)" for a list of language options.
4. Click on "English" (without the "auto-generated") to view the subtitle provided by the video creator. Subtitles for other languages may be added.

   Alternately, click another language shown.

   ### Download auto-generated subtitle

1. Click "Add Subtitles/CC".
1. Click the blue "Add new subtitles or CC" button at the upper right.
1. Click "Create new subtitles or CC" for the "Transcribe and set timings: English" page that lists subtitled text of your video.
1. Click "Actions" and select "Download".
1. Click "OK" to download the "captions.sbv" file. <a target="_blank" href="https://support.google.com/youtube/answer/2734698?hl=en">This page</a> explains that ".sbv" is a "SubViewer" file which must be edited and saved as "UTF-8". There are other formats.

   A subtitle (closed caption) file contains both the text of what is said in the video, plus time codes for when each line of text should be displayed. 

1. Switch to your Finder and navigate your "Downloads" folder.
1. Move the file to be among your other assets used to create the video.
1. Optionally, rename the file with a date, such as 

   <tt>captions-2019-12-30a.sbv</tt>

1. Right-click on the "captions.sbv" file to select an editor to view the file. Notice time codes such as:

   <pre>0:00:00.279,0:00:04.529</pre>

   PROTIP: Generated sentences are <strong>missing punctuation</strong> such as command and period at the end of each sentence. Hypens in hyphenated words are removed. Some sentences may be inappropriately split up into separate sentences. Generated sentences may also be too long, causing them to take several lines on screen rather than one, which is more readable and cover less of the graphics on screen.

   ### Convert for Camtasia

   PROTIP: Camtasia provides a visual tool for editing captions. But it only works with subtitle files in the .srt (SubRip) format containing time codes in this format (with a sequence number):

   <pre>1
   00:00:00,599 --> 00:00:04,160
   >> ALICE: Hi, my name is Alice Miller and this is John Brown
   </pre>

   This type of file also includes position and style information, which is especially useful for deaf or hard of hearing viewers.

1. In the editor, select all the text (by pressing command+A) and copy it to your clipboard.
1. Click this URL to go to an on-line conversion site:

   <a target="_blank" href="https://dcmp.org/learn/532-converting-youtube-sbv-subtitles-to-subrip-srt-format">https://dcmp.org/learn/532-converting-youtube-sbv-subtitles-to-subrip-srt-format</a>

   Alternately, go to <a target="_blank" href="https://captionsconverter.com/">https://captionsconverter.com</a>

   ### Translate

1. TODO: Have the file translated to another language.

   https://webtranslateit.com/en/docs/translation_interface/machine_translation/
   fee service

1. Edit the file to fix what was mis-translated.
1. Save the file.
1. Have another native-speaker review the translation.

1. Upload the file to YouTube.

## Python code to upload YouTube video

<pre>from pytube import YouTube
from pytube.cli import on_progress
videos = [
    'https://www.youtube.com/watch?v=FOO',
    'https://www.youtube.com/watch?v=BAR',
    'https://www.youtube.com/watch?v=BAZ',
]
for video in videos:
    YouTube(video, on_progress_callback=on_progress).streams.filter(
        progressive=True,
        file_extension='mp4',
    ).order_by('resolution').desc().first().download()
</pre>

## Video viewing

VLC is used by many because it's a free, open-source video player VLC.
Combine it with the free-while-in-beta Blu-ray ripper app MakeMKV -- can let you play Blu-rays.

1. Download VLC and install it.

   brew install --cask vlc

2. Download the latest beta of MakeMKV(opens in new tab) and install it from

   http://makemkv.com/download/?__c=1
 
3. validate the downloaded file's checksum before you open it, just to be safe. MakeMKV's author makes each beta version of the app available for a few months before it expires; after that, you simply need to download the latest version again. Should you need a beta key to run the app, find the most recent one on MakeMKV's forums:

   https://forum.makemkv.com/forum/viewtopic.php?f=5&t=1053&__c=1

4. Open MakeMKV and go to Preferences > Integration. In the list of eligible apps under the Integration tab in MakeMKVs Preferences, check the box next to VLC, and then click OK. 
   
   MakeMKV can share the tools it uses to decrypt Blu-ray discs with other apps, most notably VLC. 
 
   https://forum.makemkv.com/forum/viewtopic.php?f=10&t=7008&__c=1

   Unless or until you download a fresh copy or updated version of VLC in the future, you should only need to do this once to play Blu-rays to your heart's content.

5. Close MakeMKV and open VLC. Make sure your Blu-ray of choice is loaded in your disc drive. 
6. In VLC, select File > Open Disc. The window that appears should show the Blu-ray you've loaded. 
7. Click "Open." In my tests, discs loaded in just a few seconds, and VLC offered full menu, audio, and subtitle support. 

   The audio occasionally stuttered on the menu screens as the disc loaded new information, but the movies themselves played back smoothly.


## More Resources

<a target="_blank" href="https://www.bmyers.com/">bmyers.com</a> (Bill Myers) is the king of monitization, and has a $10/month subscription to watch his short tutorials.

<a target="_blank" href="http://www.davidfrosdick.com/">davidfrosdick.com</a>

<a target="_blank" href="https://www.macintoshtipz.com/">macintoshtipz.com</a>

https://www.youtube.com/watch?v=pSexUljveYE
Talking head in circle with shadow in Camtasia 2020 | Camtasia Circular Video Tutorial

https://www.youtube.com/watch?v=mzUIeq1PX7o
Put a video on a Powerpoint slide deck - Add your personal touch as a presenter

