---
layout: post
date: "2024-01-13"
file: "apple-mac-osx-keyboard"
title: "Apple Mac OSX Keyboard Shortcuts"
excerpt: "Stay focused and do things faster with Keyboard Shortcuts, HotKeys, and StreamDeck buttons"
tags: [apple, mac, keyboard]
image:
# keyboard-mac-1900x500
  feature: https://user-images.githubusercontent.com/300046/154802444-b4eab52b-bb7c-45de-849a-fed8b956ac50.png
  credit: Apple
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<!-- # feature: pic white keyboard british 1900x500.jpg
  https://cloud.githubusercontent.com/assets/300046/14622161/3e9ed170-0585-11e6-81e5-2d3238508e4f.jpg
  credit: Parallels
  creditlink: http://kb.parallels.com/en/113541
-->
This topic is about how you, a Mac user, can <strong>stay focused</strong> so you can do things faster with less effort by configuring your keyboard to automate common actions. 

Those who do stuff without taking their eyes off the screen ARE more productive than those who constantly look away to reach for the mouse.

You'll feel less stress when you can get things done like a pro. 
Eventually, people will be watching how you use your keyboard and NOT use your mouse.
It's not fair, but they will evaluate your overall "value" by how much you use your keyboard.

Those who figured out ways to save time demonstrate that they are "resourceful" and thus be able to help others save time. So they are seen as more "valuable" to the organization.


## TL;DR Summary

So develop the habit of pros by making a habit of following these tips:

   1. <a href="#Modifiers">Know the names and icons for "Modifier Keys" on Apple keyboards</a>.
   1. Learn to touch-type.
   1. <a href="#AvoidMouse">Avoid reaching for the mouse</a>.
   1. Use the basic <a href="#Basic+Keyboard+Shortcuts">Keyboard Shortcuts</a> for macOS.
   1. Customize defaults for speed (like the pros)
   1. Use more <a href="#Hotkey">Hotkey app</a>
   1. Get a <a href="#StreamDeck">Stream Deck</a> for one-touch automated action
   <br /><br />

> PROTIP: Optimize for keys we use most, and avoid common mistakes with keys we accidentally press.

## Swap Command and Control?

   PROTIP: Some who are used to Windows and need to go back and forth prefer to switch the Mac's control and command keys in order to get to all such keys using thumbs.
   This would also allow you to press two keys at once by pressing between the keys,
   thus able to perform most combinations using your hands.

5. Click the entry for "Control (^) Key:" and select "&#8984; Command".
6. Click the entry for "Command (&#8984;) Key:" and select "^ Control".
7. Click OK.
8. Press control+Q or click the red x to dismiss the System Preferences dialog.


<hr />

<a name="Modifiers"></a>

## Special (Modifier) Key Names and Symbols

REMEMBER: "Special" keys on a Mac's keyboard are represented by both symbols and names:

<amp-img width="413" height="399" alt="Apple keys symbols" src="https://cloud.githubusercontent.com/assets/300046/15536540/fe6cb344-222e-11e6-9f2b-c37419a9d42f.gif"></amp-img>


## Basic Keyboard Shortcuts

PROTIP: Save time (and look like a pro) by using the most common keyboard shortcuts for macOS:

   * <a target="_blank" href="https://support.apple.com/en-us/HT201236">
   Apple's default Mac keyboard shortcuts</a>

   * <a target="_blank" href="http://pc.net/resources/shortcuts/mac_os_x#startup">
   Mac OS X Keyboard Shortcuts</a>

The most common shortcuts I use all day long:

* ⌘+Tab to switch among programs open.

Within a browser such as Safari or Chrome:
* ⌘+~ (backtick) to switch among open windows.
* ⌘+W to close a tab when I'm done with it.
* ⌘+Shift+B to hide/unhide the Bookmarks bar.


<hr />

<a name="TouchTyping"></a>

## Touch Typing Aids

PROTIP: Although most keyboards have a bump on "F" and "H" ("Home") keys, I and some others put tiny drops from a glue gun on strategic keys so I can orient my finger to reach strange keys in the dark without looking:

   * 2, 5, 8, 0
   * }
   * control
   * .
   <br /><br />

PROTIP: I find (RGB) keyboards that light up keys in different colors distracting when I don't want to look at the keyboard at all.

<a name="AvoidMouse"></a>

## Avoid reaching for the mouse

This may be a generalization. But many top coders like the <strong>vi text editor</strong> because it doesn't demand use of difficult-to-reach keys or mouse which require users to take their eyes off the screen. DevSecOps coders have no choice because some operating systems provide only vi (such as during Kubernetes exams). 

VSCode (Visual Studio Code) is what most people use now. It has a <a target="_blank" href="https://code.visualstudio.com/docs/getstarted/keybindings">keyboard shortcut for everything</a>.

1. Within VSCode, press <strong>command + shift + P</strong> to open the <strong>Command Palette</strong>. It lists the most recently used commands you can select by cursor then Return key. 
   Or type the first few letters of a command to narrow the list:
1. Type "keyboard shortcuts" to select "Help: Keyboard shortcuts reference" to open a web page with a PDF <strong>cheat sheet</strong> listing keyboard shortcuts:

   <a target="_blank" href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf</a>

1. Alternately, type "keyboard shortcuts" to select "Preferences: Open Keyboard Shortcuts" to open a new file listing all keyboard keybindings (aka shortcuts).

   PROTIP: Experiment with each one on a throwaway file.

   <a target="_blank" href="https://www.youtube.com/watch?v=dLzMz2Jk_qU">VIDEO</a>:

* ⌘+B to hide/unhide the left Explorer pane. Instead, use ...
* ⌘+P for the <strong>Quick Open</strong> dialog, which provides a search box:
   * Go to File… (Ctrl+P on Windows/Linux)
   * @ symbol to go to a symbol in the current file
   * : symbol to go to a line number in the current file
   * # symbol to go to a word in the current file
   * @# symbol to go to a word in a file
   * @file symbol to go to a file
   <br /><br />
* ⌘+~ (backtick) to toggle the Terminal pane at the bottom. I usually have it closed and ...
* ⌘+Tab to switch to a Terminal program with a full set of lines and history.
<br /><br />
Scrolling:
* ⌘+up or down arrow to get to the very top or bottom.
* ⌘+shift+up or down arrow to move the current line up or down.

* ⌘+\ splits the editor window (but 1Password hijacks this key)

<hr />

<a name="MuteButton"></a>

## Automator shortcut to mute

It's annoying and rude to impose the clicky-clack of your keyboard. 
In video recordings, it's disruptive to hear background conversations and other noise.

1. Apple's default way to mute the microphone is to click the Apple icon, open Settings, Sound, click the <strong>Input volume</strong> slider. 

   Keep this open as we continue the steps below.

   That's a lot of clicks when quick action is needed during a Zoom call.

   Zoom and Microsoft Teams provide a mute button, but it's also too slow to find.

   The <a target="_blank" href="https://apps.apple.com/us/app/mic-drop-mute-manager/id1489816366?mt=12">$4.99 MicDrop.app</a> provides a mute button icon on the Apple Menu Bar at the top of screens. For those who don't want to fiddle with a mouse to find it or hide their menu menu when Zoom is in full-screen mode, it can be invoked by a customizable keyboard shortcut to mute and unmute the microphone.
   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1705696014/micdrop_ez3quh.webp"><img alt="micdrop.webp" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1705696014/micdrop_ez3quh.webp"></a>

   For those loath to install a 3rd-party app in fear of getting potentially infected by it, <a target="_blank" href="https://medium.com/macoclock/how-in-the-bleep-do-i-mute-my-mic-anywhere-on-macos-d2fa1185b13">this article</a> describes how to create a <strong>keyboard shortcut</strong> to mute the microphone using a script run by a utility that comes with macOS: <a target="_blank" href="https://support.apple.com/guide/automator/welcome/mac">Automator.app</a>. Coding Automator scripts is a useful skill to learn.

1. Press <strong>command + spacebar</strong> to open the Spotlight search box.
1. Type "automator.app" and press Enter to select it among options. Automator's Finder window opens.
1. Ignore the Finder dialog that Automator.app opens to. (The folder is within <strong>your iCloud</strong>.)
1. Press Command + Shift + \ for the Automator app menu at the top of the scren.
1. Press Command + N to click on the Quick Action cog icon for the Quick Action wizard.
1. For "Worflow receive current", click "Automatic" for the drop-down menu. Select "no input".
1. For "Variables", click inside the search box type "Run" to select "Run Applescript". 
1. Click inside the script window opened and delete all the default text.
1. Highlight this code, copy and paste into the script window:

   ```
on getMicrophoneVolume()
  input volume of (get volume settings)
end getMicrophoneVolume
on disableMicrophone()
  set volume input volume 0
  display notification "Microphone OFF" with title "Sound input" subtitle "Disabled" sound name "Submarine"
  say "Microphone Off"
end disableMicrophone
on enableMicrophone()
  set volume input volume 100
  display notification "Microphone ON" with title "Sound input" subtitle "Enabled" sound name "Ping"
  say "Microphone ON"
end enableMicrophone
if getMicrophoneVolume() is greater than 0 then
  disableMicrophone()
else
  enableMicrophone()
end if
   ```

   https://www.youtube.com/watch?v=ys5uM2wO_T8

1. Click the arrow button under the script to run the script for the first time.
1. Click "OK" to allow the pop-up "Automator.app" would like to access the microphone.
1. Say something. The "Input level" in the Settings Sound dialog should not respond to your speaking.

1. Confirm that the Input volume is now 0 (zero) on the Settings Sound dialog.
1. Run again and the Input volume should be 100. 
1. See if that is too loud. Adjust the number in the script.
1. Press command+S to save the script as a file named "<strong>mic-toggle</strong>".
1. Press command+Q to quit Automator.

1. TODO: Ensure that Automator can control your computer. <a target="_blank" href="https://www.youtube.com/watch?v=Ce9T5AS2C2E">VIDEO</a>:

   ### Add keyboard shortcut

1. In Apple System Preferences, click Keyboard on the left menu, then "Keyboard Shortcuts...".
1. Click "Services" on the left menu.
1. Click "General" on the right menu to expand it.
1. Click to check "mic-toggle" if it's not already checked.

   TODO: Shows fn+command+shift+F12 or shift+option+command+M or command+Shift+M for MicDrop.app

1. Click "Done".


<hr />

## Remap Modifier Keys

   You can change them using this dialog:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/31076959-877c6f84-a731-11e7-8fcc-7d12af4c2c8e.jpg"><img alt="mac-modifier-control-399x224-27632" src="https://user-images.githubusercontent.com/300046/31076959-877c6f84-a731-11e7-8fcc-7d12af4c2c8e.jpg"></a>

## Caps Lock to Escape

   BLAH: The Esc (Escape) key is too far North on the keyboard and forces some to look down on the keyboard. And the Caps Lock key is too close to keys, causing problems with accidental password entry and lockouts.

   BLAH: It's annoying when all of a sudden everything I type is in caps.
   That happens because I accidentally had my hand too far to the left when I intended to press the A key.

   Anyway I've gotten used to typing all caps by holding down the shift key with my left or right hand.

   PROTIP: Make the <strong>caps lock</strong> key work like the Esc key:

1. To open <strong>System Preferences</strong>, click the Apple icon at the upper-right corner to select it

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/154780401-5e3f6187-a77c-4a96-a6ad-1c351c63b144.png"><img alt="keyboard-sys-pref-292x309" src="https://user-images.githubusercontent.com/300046/154780401-5e3f6187-a77c-4a96-a6ad-1c351c63b144.png">

   or get that dialog directly from anywhere by pressing (at the same time) <strong>control + command + comma</strong>. A reminder of that is to the right of "System Preferences" menu item.

1. Type K to reveal a list (without clicking the search box). 
1. Cursor down to highlight <strong>Keyboard</strong>. 
1. Press return (Enter) to open it.

1. Click "Modifier Keys" at the lower-right corner.
1. Click the entry for "Caps Lock &#8682; Key:" and select &#9099; Escape.

   NOTE: If you have more than one keyboard, repeat for each keyboard.


## Add Keyboard Shortcut to Sleep

   PROTIP: Putting your laptop to sleep is an important privacy procedure according to HIPAA and other regulations. Also, sleeping lets your laptop rest, which makes it last longer and consumes less electricity. 
   
   So make it easier to put your laptop to sleep.<a target="_blank" href="https://ladedu.com/how-to-put-a-mac-to-sleep-incl-keyboard-shortcut/">*</a>

1. In the screen above, notice "Sleep" has no reminder of its Keyboard Shortcut, but <a target="_blank" href="https://apple.stackexchange.com/questions/28164/keyboard-shortcut-to-sleep-a-mac">there is</a>:
   
   <strong>Command ⌘ + Option ⌥ + Eject ⏏</strong>

1. If there is a Terminal instance open, the machine does not go into sleep until you manually respond to this pop-up dialog:

   <img alt="macos-term-process-260x218" width="260" height="218" src="https://user-images.githubusercontent.com/300046/163742732-0b3c9829-148b-46d1-9344-db974be6a4c2.png">

1. Return to the Keyboard Shortcuts following instructions above, but this time
1. Click "Shortcuts"

   <img width="687" alt="keyboard-app-shortcuts-1274x784" src="https://user-images.githubusercontent.com/300046/154957946-c59e6343-20e0-49fe-9dc8-712e07c15c57.png">

1. Click "App Shortcuts" in the left menu.
1. Hit the "+" button to add an item.
1. Leave Application default at "All Applications".
1. For Main Title: type "Sleep" (the exact name of the menu command).
1. Click in the Keyboard Shortcut: field 
1. Press <strong>Command + Option + Eject</strong>
1. Click Add button.

Select File | New Shortcut from the menu.
Shortcuts keyboard shortcut: You can also press Command N, of course.
Drag and drop the Run Shell Script action to the shortcut area.
Find Run Shell Script: You can find Run Shell Script under Terminal app or search for shell script.
If scripting is disabled:
– Select Shortcuts | Preferences… from the menu.
– Go to the Advanced tab.
– Enable Allow Running Scripts.
Type pmset sleepnow under Run Shell Script.
Now type a name for the new action over Run Shell Script in the title bar.
Example: Use something like Put Mac to Sleep.


   There is a difference between Sleep and Hibernate
   https://ladedu.com/how-to-understand-sleep-vs-hibernate-on-a-mac/

   On a Terminal, the command is "pmset sleepnow".
 

<a name="MagicKeyboard"></a>

### Magic Keyboard

   A Bluetooth-connected wireless <a target="_blank" href="https://www.apple.com/us/search/Magic-Keyboard-US-English?tab=accessories">Apple Magic Keyboard</a> solves several deficiencies of the keyboard that comes with MacBook Pro laptops:

   * Adds the control key on the right side, missing on the standard keyboard
   * Adds keys like on Windows keyboards: <strong>delete</strong> (so you don't need to press fn+delete to backspace), Home, End, Page Up, Page Down
   * Adds function keys f13 thru f19 to map one-key input of your most frequent URLs or passwords 

   * It's quieter
   * One keyboard that works with iPads as well
   * Frees you from the screen for more ergonomic sitting positions, especially if you have an additional screen
   <br /><br />

   However, every week or so you would need to charge it by plugging in a Thunderbolt cable (same one as iPhone and Magic Mouse).



<a id="AwkwardKeys"></a>

### Awkward fn Keys need eyes #

However, on the 2017 Mac without a visible Function keys, key combinations to reveal those button are so awkard to use that it's faster and easier to use a mouse or trackpad.

Since the **fn** and **control** keys are only on the left side of a MacBook keyboard,
using them requires a Carpel-tunnel Syndrome-inducing moves of the left two fingers:

* <strong>fn + control + F3</strong> to highlight the <strong>Dock icons</strong>, which are by default at the bottom of the screen, but which I prefer to be at the right.

* <strong>fn + control + F2</strong> to highlight the <strong>Apple menu icon</strong> at the upper-left corner. Press down for its menu:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/153725364-fa909d0d-9881-47aa-aea5-ab75e6b97022.png"><img width="236" height="312" alt="macos-apple-menu-236x312" src="https://user-images.githubusercontent.com/300046/153725364-fa909d0d-9881-47aa-aea5-ab75e6b97022.png"></a>

* <strong>fn + control + F8</strong> to highlight the Apple Top-right Menu.

On 2020+ keyboards (after Apple came to their senses):

   * control+F2 to highlight the Apple Top menu.
   
   * control+F3 to highlight the Dock at the bottom of the screen.

PROTIP: The **fn** key is easy to find without looking because it's at a corner.
But use a companion key on the right side of the keyboard.

<a id="OSComponentz"></a>

## Apple components from any active app #

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Purpose </th><th> Name </th><th> Mouse 
</th><th><a href="#HotCornerz">Hot corner</a>
</th><th> Key </th><th> Hide </th></tr>
<tr valign="top"><td> Active apps thumbnails
</td><td> Mission Control<br />(formerly Expose)
</td><td> 3 finger swipe up
</td><td> -
</td><td> control + up<br />fn + F3
</td><td> Esc
</td></tr>
<tr valign="top"><td> Active apps dashboard
</td><td> Application Windows
</td><td> -
</td><td> Upper left
</td><td> control + F3
</td><td> Esc
</td></tr>
<tr valign="top"><td> -
</td><td> Desktop <a name="DesktopShortcut"></a>
</td><td> Thumb and 3 finger spread <a href="#[1]"></a>
</td><td> -
</td><td> F11 
</td><td><em>toggle</em>
</td></tr>
<tr valign="top"><td> Calculator, other Accessories
</td><td> Dashboard
</td><td> 3 finger swipe right
</td><td> Lower left
</td><td> ?
</td><td> -
</td></tr>
<tr valign="top"><td> Apps icons customized
</td><td> Dock bar (bottom of screen)
</td><td> Mouse beyond bottom of screen
</td><td> -
</td><td> -
</td><td> Esc
</td></tr>
<tr valign="top"><td> Active app selection
</td><td> Active apps
</td><td> -
</td><td> -
</td><td> &#8984; + Tab<br /><em>Repeat</em>
</td><td> -
</td></tr>
<tr valign="top"><td> Installed apps 
</td><td> Launchpad
</td><td> Thumb and 3 finger pinch
</td><td> Upper right
</td><td> fn + F4
</td><td> -
</td></tr>
<tr valign="top"><td> Files and folders
</td><td><a href="#Finderz">Finder</a>
</td><td> -
</td><td> -
</td><td> &#8984; + option + T
</td><td> -
</td></tr>
<tr valign="top"><td> Put display to sleep
</td><td> Start screen saver
</td><td> -
</td><td> Lower right
</td><td> control + Shift + Power button
</td><td> -
</td></tr>
<tr valign="top"><td> omni-search
</td><td> <strong>Spotlight</strong>
</td><td> -
</td><td> -
</td><td> command + spacebar
</td><td> Esc
</td></tr>

<tr valign="top"><td> mute 
</td><td rowspan="3"> Speaker volume
</td><td> -
</td><td> -
</td><td> fn + F11
</td><td> -
</td></tr>
<tr valign="top"><td> Softer
</td><td> -
</td><td> -
</td><td> fn + F12
</td><td> -
</td></tr>
<tr valign="top"><td> Louder
</td><td> -
</td><td> -
</td><td> fn + F12
</td><td> -
</td></tr>
<tr valign="top"><td> Alerts
</td><td> Notification Center
</td><td> -
</td><td> -
</td><td> -
</td><td> -
</td></tr>
</table>

<a name="[1]"></a>
<a href="#DesktopShortcut">[1]</a> = PROTIP: This command does not work when the active program is in an extended screen.


## Programmatic keyboard mapping

   You can do the above automatically when installing <a target="_blank" href="https://apple.stackexchange.com/questions/283252/how-do-i-remap-a-key-in-macos-sierra-e-g-right-alt-to-right-control">
   this Python script</a>.


   ## Karabiner Elements 
   
   Use Homebrew or <a target="_blank" href="https://pqrs.org/osx/karabiner/">Downloading Karabiner-Elements</a>, a free utility somce OSX Sierra when <a target="_blank" href="https://developer.apple.com/library/content/technotes/tn2450/_index.html">Apple remapped key commands</a>. 
   
   It's free but note the package has <a target="_blank" href="https://github.com/tekezo/Karabiner-Elements/issues">many lingering issues</a>.

   VIDEO: <a target="_blank" href="https://www.youtube.com/watch?v=uaJSjgVEhMQ">Part 1</a> and <a target="_blank" href="https://www.youtube.com/watch?v=PBPS2D9AKtI">Part 2</a> of Jesse Skelton's tutorial.

   * https://www.youtube.com/watch?v=_47kJvS8nhk by Gary of macos.com
   * https://www.youtube.com/watch?v=8AeZkSJz28A
   * https://www.youtube.com/watch?v=lyJOYgP-Ihc



<a name="CleanBorders"></a>

## Clean borders without icons

I like to have a clean "full screen" without the distraction of all the Apple Mac icons at the top, bottom, etc. 




<a id="ActiveWindowz"></a>

## Microsoft Windows navigation #

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Purpose </th><th> Menu </th><th> Mouse </th><th> Key </th></tr>
<tr valign="top"><td> New window </td><td> File | New Window
</td><td> -
</td><td> &#8984; + N
</td></tr>
<tr valign="top"><td> New window Incongnito</td><td> 
</td><td> -
</td><td> &#8984; + shift + N
</td></tr>
<tr valign="top"><td> Cycle through windows in app </td><td> Window
</td><td> -
</td><td> &#8984; + ` <em>(at upper left corner of keyboard)</em>
</td></tr>
<tr valign="top"><td> Maximize window (no menu bar)</td><td> -
</td><td> <em>Click green icon at the top left corner of window</em>
</td><td rowspan="2"> &#8984; + shift + F<br /><em>toggle</em>
</td></tr>
<tr valign="top"><td> Un-Maximize window </td><td> -
</td><td><em>Cursor to top left corner. Click on green icon.</em>
</td></tr>
<tr valign="top"><td> Minimize window</td><td> -
</td><td> Click yellow ball.
</td><td> &#8984; + M
</td></tr>
<tr valign="top"><td> Close current window </td><td> -
</td><td> Click red ball.
</td><td> &#8984; + shift + W
</td></tr>
<tr valign="top"><td> Close all windows </td><td> -
</td><td> -
</td><td> &#8984; + option + W
</td></tr>
<tr valign="top"><td> Preferences</td><td><em>app name</em> | Preferences
</td><td> -
</td><td> &#8984; + ,
</td></tr>
<tr valign="top"><td> Quit app completely</td><td><em>app name</em> | Quit
</td><td> -
</td><td> &#8984; + Q
</td></tr>
</table>

<hr />

## Cross machine

For a $19 one-time purchase from symless.com, the <a target="_blank" href="https://symless.com/synergy/">Synergy</a> app on Mac, Windows, and Linux enables you to use a single keyboard and mouse for use on all machines, copying and pasting from a Mac to a Windows machine to a Linux machine.

It does not support iPads, which Apple's Universal Control does supports.


<a id="WinKeyz"></a>

### Microsoft vs. Mac Keyboards #

Needing to change habits learned typing is difficult and takes time. 
It's literally taking physical therapy.
This is perhaps the most frustrating aspect of changing from Windows to a Mac.

Here are the most problematic among
<a target="_blank" href="https://support.microsoft.com/en-us/kb/970299/">
Keyboard mappings using a PC keyboard on a Macintosh</a>
on Microsoft's website:<a target="_blank" href="http://osxdaily.com/2012/02/23/keyboard-shortcuts-to-navigate-select-text-mac-os-x/">*</a>

<table border="1" cellpadding="4" cellspacing="0">
<tr align="left"><th> Microsoft Windows </th><th> Apple Macintosh </th><th> issue </th></tr>
<tbody>
<tr><td> Right-click (Alt) </td><td> Holding down <strong>control</strong> during mouse click </td><td> -</td></tr>
<tr><td> Ctrl + <em>mouse click multiple items</em> </td><td> control + option + <em>mouse click</em></td><td> Two keys on Mac</td></tr>
<tr><td> Delete (right of cursor) </td><td><a href="#DeleteBackspace">fn + delete</a><br />control + D</td><td rowspan="2"><a href="#DeleteBackspace"><u>swapped</u></a></td></tr>
<tr><td> Backspace (left of cursor) </td><td><a href="#DeleteBackspace">delete</a><br />control + H</td></tr>
<tr><td> Function key </td><td> fn + F1 ... F12 </td><td> &nbsp; </td></tr>
<tr><td> Windows Start orb </td><td><a href="#AwkwardKeys">control+F2, then enter/return</a></td><td><a href="#AwkardKeys">awkard</a></td></tr>
<tr><td> Num lock </td><td> Virtual Machine > Send Key </td><td> &nbsp; </td></tr>
<tr><td> Home (top of doc) </td><td> fn + left </td><td> &nbsp; </td></tr>
<tr><td> End (bottom of doc)  </td><td>  fn + right </td><td> &nbsp; </td></tr>
<tr><td> Insert toggle </td><td colspan="2"> <a href="#RemapKeyboard"><em>Requires mapping</em></a></td></tr>
</tbody>
</table>


<a id="DeleteBackspace"></a>

### Delete and Backspace keys swapped #

The <strong>Delete</strong> key on an Apple keyboard (&#9003; on older keyboards)
is actually the <strong>backspace</strong> key to all other operating systems.
To press the equivalent of the Windows backspace that removes to the left of the cursor:

<ul>
<li> On a Macintosh notebook keyboard, press <strong>fn + Delete</strong>.</li>
<li> On older full-sized Macintosh keyboards, press &#8998; (called "Forward Delete") below the Help key.</li>
</ul>

The ALT key on Windows is OPTION on Mac keyboards.

<a target="_blank" href="http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1001675">
To send key commands from a Mac into a Windows instance inside VMWare Fusion</a>.


<a id="InsertKeyz"></a>

### Insert key requires mapping #

Sending the equivalent of Windows keyboard <strong>Insert</strong> 
on a Mac is problematic, especially within a virtual Windows machine.

<ul>
<li> On older Macintosh keyboards, press the Help key.</li>
<li> On older Macintosh notebook keyboards, press <strong>fn+M</strong>.</li>
<li> Newer Macintosh notebooks do not support fn+M. 
So map <strong>Alt+F1</strong> within 
VMware Fusion > Preferences > Keyboard &amp; Mouse > Key Mappings.</li>
</ul>

<hr />


<a name="Gymnastics"></a>

## Full Screen Finger Gymnastics #

![keyboard-god-giphy](https://user-images.githubusercontent.com/300046/116689174-fcf2c080-a974-11eb-81ca-c985ab3fe6a4.gif)

PROTIP: To evaluate Mac developers, some interviewers ask "show me how you enter and exit Full Screen". This is because they assume that the most productive developers work with their hands always on the keyboard. 

Windows has its F12 key. Apple has Mac users do the equivalent of a <strong>double Summersault</strong> with your fingers.
How do you type, at the same time:

   <ul><strong>control + command + F</strong></ul>

PROTIP: To toggle <strong>Full Screen view</strong> using the default configuration from Apple: while keeping your left forefinger on the F "home" key, reach with your left thumb to hold down the control key. This may hurt at first (until you get used to it). Try raising your hand

   Now, while keeping your right forefinger on the J "home" key, reach with your right thumb to hold down the command key on the right side of the Space Bar. Then you're in position to press F with your left forefinger.

<hr />

<a name="Voice Recognition"></a>

## Voice Recognition

   PROTIP: A big benefit of working from home is that I don't have people sitting nearby. So now I can enable <strong>voice recognition</strong> to automatically type some (not all) keys. 
   
   This has been available since the OSX Yosemite version:
   <a target="_blank" href="https://support.apple.com/en-us/HT203085">
   https://support.apple.com/en-us/HT203085</a>
   
   See <a target="_blank" href="https://www.macworld.com/article/2843499/how-to-command-your-mac-with-your-voice.html">this video</a> to give it a try:

1. CAUTION: Enabling "Use Enhanced Dictation" (In Apple System Preferences > Dictation & Speech > Turn on Dictation) causes an approximately 800MB file to be downloaded to your Mac. 

2. Choose Accessibility. Scroll to Dictation. Scroll to see which commands.
3. Check Enable Advanced Commands. Scroll to see which commands.
4. Get into Automator.



<a id="Processes"></a>

## Process Navigation #

Press <strong>command + Tab</strong> to cycle through programs (apps) running.

Press shift plus the above reverses the cycling direction.

Stop on the icon of the app you want to make active.




<a id="RemapKeyboard"></a>

## Trackpad Remapping Tool #

The trackpad on OSX recognizes multiple touch points (fingers) at once.

<ul>
<li>One finger to move the mouse cursor.</li>
<li>Two fingers to scroll up or down.</li>
<li>Three fingers to move among applications active.</li>
</ul>

<a target="_blank" href="https://www.boastr.net/">
BetterTouchTool</a> (BTT) $6.50 app remaps what Apple input devices (keyboard, Magic Mouse, Touchpad, Trackpad) 
recognize, and also adds more gestures.

> Use [my installer for Mac](/apple-mac-osx-setup/) to setup this program along with all others by running repeatable [Ansible](/ansible/) declarations.

There are several dimensions:

<table border="1" cellpadding="4" cellspacing="0">
<tr align="left"><th> Fingers </th><th> Motion </th><th> Direction </th><th> Repeats </th><th> Pressure </th></tr>
<tbody>
<tr valign="top"><td> 1<br />2<br />3<br />4
  </td><td> tap<br />swipe<br />pinch in/out (zoom)
  </td><td> up<br />down<br />left<br />right
  </td><td> tap<br />TipTap
  </td><td> light<br />medium<br />heavy
  </td></tr>
</tbody>
</table>

Combos: single finger tap left, single finger tap right, single finger tap, two finger tap, two finger click, two finger swipe (up/down/left/right), three finger tap, three finger click, three finger swipe (up/down/left/right) and 'TipTap' left/right.

* https://www.youtube.com/watch?v=A1xFhreDR_k
* https://www.youtube.com/watch?v=7mr2IiJ0Y0E
* https://www.youtube.com/watch?v=qeocxFO5yWA
* https://www.youtube.com/watch?v=aFmB3XCva_Y

Programs can be invoked several different ways:

<ul>
<li>Click the magnifying glass and type the program name </li>
<li>Click on the apple menu </li>
<li> the Dock </li>
<li> or from the Applications folder on your hard drive. </li>
</ul>

To reset during open, in the Application folder,
hold down all keys SHIFT OPTION COMMAND then click the app's icon.


<a name="KeyboardMapping"></a>

## Keyboard Mapping

<a target="_blank" href="https://apple.stackexchange.com/questions/16135/remap-home-and-end-to-beginning-and-end-of-line">
NOTE</a>: MacOS defines most of its keybindings for editing text in:

   <ul><tt>/System/Library/Frameworks/AppKit.framework/Resources/StandardKeyBinding.dict</tt></ul>

PROTIP: Remap home and end key by creating folder <tt>~/Library/KeyBindings/</tt> 
and in it file <tt>DefaultKeyBinding.dict</tt> containing a property list like this:

<pre>{
    "\UF729"  = moveToBeginningOfLine:; // home
    "\UF72B"  = moveToEndOfLine:; // end
    "$\UF729" = moveToBeginningOfLineAndModifySelection:; // shift-home
    "$\UF72B" = moveToEndOfLineAndModifySelection:; // shift-end
}
</pre>

This change requires a reboot.


## App-specific keys #

<a id="Finderz"></a>

### Finder

<img align="right" alt="Mac 10.10 Finder keys" src="http://merc.tv/img/scr/mac_10.10_finder_keys.jpg" width="171" height="240" >

   <!--<amp-img media="(min-width: 171px)" width="171" height="240" 
   layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/14206362/d5f6e13e-f7cf-11e5-899a-0ffa966916a2.jpg"></amp-img> http://merc.tv/img/scr/mac_10.10_finder_keys.jpg -->

I probably click the Finder Favorites more than anything else.
So I've memorized the keyboard keys.

* For the Downloads folder: <strong>Option + &#8984; + L </strong>

* For the Desktop folder where screen captures are stored (by default): <strong>Shift + &#8984; + D</strong>

* For the Applications folder where apps are stored: <strong>Shift + &#8984; + A </strong>

This enables me to remove default items in the Favorites list (by right-clicking on it)
so I can instead list my own folders I use most often.

* To go a level up or down in the Finder, press &#8984; + up arrow or down arrow.
   <!-- From http://support.apple.com/kb/ht1343 -->

* Open parent folder and close current window: Option-Command-Up Arrow 	

* To open folders and files by clicking on it and
  pressing &#8984; + O (instead of Enter as you would on Windows).

<amp-img width="534" height="47" alt="apple-finder-icons" src="https://cloud.githubusercontent.com/assets/300046/15545542/e988ea80-2259-11e6-81d1-22e3ce2f2b78.jpg"></amp-img>

<img align="right" width="196" height="208" alt="apple-finder-actions-menu" src="https://cloud.githubusercontent.com/assets/300046/15545716/910869c0-225a-11e6-8c09-26a08ecd45ed.jpg">

* &#8984; + 1 = Icon view
* &#8984; + 2 = List view
* &#8984; + 3 = Column view
* &#8984; + 4 = Cover flow view

   QUESTION: Is there a key to expand width of columns?

* control + &#8984; + <em>number</em> to control Arrange sorting.

* &#8984; + F to Search text.


#### Hide and Unhide Folders #

Under Favorites,
click on your user name (next to the house icon).
If the Library folder does not appear:

   <tt><strong>sudo chflags nohidden /Library/ ~/Library/</strong></tt>

To hide Library again:

   <tt><strong>sudo chflags hidden /Library/ ~/Library/</strong></tt>


### System Preferences keyboard shortcut

Apple's System Preferences is a dialog I go to often.
But it doesn't have a default universal keyboard shortcut.

So let's make one, using control+command+comma.
(I use my middle finger to reach the comma).

1. Click the Apple icon. Notice whether there is a shortcut for System Preferences. Below is what it looks like after going through the steps below.

   ![mac-keyboard-shortcut-233x280-13919.jpg](https://user-images.githubusercontent.com/300046/47263045-529da680-d4b6-11e8-8275-92c5f22b2d9b.jpg)

2. Select System Preferences.
3. Click the Keyboard panel.
4. Click "Shortcuts" tab.
5. Select "Application Shortcuts" from the list.
6. Click the [+] plus button for the pulldown menu.
7. Choose "All Applications", then in the field labeled "Menu Title" enter "System Preferences…".
8. Click in the field labeled "Keyboard Shortcut".
9. Press the hotkey you want to use. For me use <strong>Control+Command+,</strong>. You should see the icons appear.
10. Click “Add” to close out of System Preferences. 
11. Exit System Preferences by clicking the red dot.
12. Try it: Hit the shortcut you just created.




<a id="ChromeTabz"></a>

## Chrome Browser Tabs #

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Purpose </th><th> Firefox </th><th> Chrome </th></tr>
<tr valign="top"><td> New blank tab
</td><td colspan="2"> &#8984; + shift + H
</td></tr>
<tr valign="top"><td> Home tab
</td><td colspan="2"> &#8984; + T
</td></tr>
<tr valign="top"><td> Open Settings / Preferences tab
</td><td colspan="2"> &#8984; + , (comma)
</td></tr>
<tr valign="top"><td> Close current tab
</td><td colspan="2"> &#8984; + W
</td></tr>
<tr valign="top"><td> Re-open tab
</td><td colspan="2"> &#8984; + shift + T
</td></tr>
<tr valign="top"><td> Cycle through tabs
</td><td colspan="2"> control + Tab
</td></tr>

<tr valign="top"><td> Bookmarks manager tab
</td><td> -
</td><td> option + &#8984; + B
</td></tr>
<tr valign="top"><td> History tab
</td><td> -
</td><td> option + &#8984; + H
</td></tr>
<tr valign="top"><td> Downloads tab
</td><td> -
</td><td> shift + &#8984; + J
</td></tr>
<tr valign="top"><td> Browser Console
</td><td colspan="2"> shift + &#8984; + B
</td></tr>
</table>

See https://support.google.com/chrome/answer/165450?hl=en

* Firefox keyboard shortcuts can be re-mapped using the
   <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/s3menu-wizard/">
   Manu Wizard plug-in</a>.


<a id="ChromeHistz"></a>

#### Page operations within Chrome Tab #

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Purpose </th><th> Mouse </th><th> Key </th></tr>
<tr valign="top"><td> History
</td><td> -
</td><td> shift + &#8984; + H
</td></tr>
<tr valign="top"><td> Search web
</td><td> -
</td><td> option + &#8984; + F
</td></tr>
<tr valign="top"><td> Find bar (to text on page)
</td><td> -
</td><td> &#8984; + F
</td></tr>
<tr valign="top"><td> Find next match
</td><td> -
</td><td> &#8984; + G
</td></tr>
<tr valign="top"><td> Find previous match 
</td><td> -
</td><td> shift + &#8984; + G or<br />shift + Enter
</td></tr>
<tr valign="top"><td> Enter highlighted text to Find  
</td><td> -
</td><td> &#8984; + E
</td></tr>

<tr valign="top"><td> Page Down
</td><td> -
</td><td> fn + down arrow
</td></tr>
<tr valign="top"><td> Page Up
</td><td> -
</td><td> fn + up arrow
</td></tr>
<tr valign="top"><td> Page top (home)
</td><td> -
</td><td> fn + left arrow
</td></tr>
<tr valign="top"><td> End of page
</td><td> -
</td><td> fn + right arrow
</td></tr>
<tr valign="top"><td> Previous page
</td><td> -
</td><td> &#8984; + [
</td></tr>
<tr valign="top"><td> Next page
</td><td> -
</td><td> &#8984; + ]
</td></tr>
<tr valign="top"><td> Refresh
</td><td> -
</td><td> &#8984; + R
</td></tr>
<tr valign="top"><td> Bookmark current page
</td><td> -
</td><td> &#8984; + D
</td></tr>
<tr valign="top"><td> JavaScript Console 
</td><td> -
</td><td> option + &#8984; + J
</td></tr>
<tr valign="top"><td> Source HTML
</td><td> -
</td><td> option + &#8984; + U
</td></tr>
</table>

<a id="ChromeTextz"></a>

### Text string operations #

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Purpose </th><th> Mouse </th><th> Key </th></tr>
<tr valign="top"><td> Cut highlighted text
</td><td> -
</td><td> &#8984; + X
</td></tr>
<tr valign="top"><td> Copy highlighted text to clipboard
</td><td> -
</td><td> &#8984; + C
</td></tr>
<tr valign="top"><td> Paste highlighted text from clipboard
</td><td> -
</td><td> &#8984; + V
</td></tr>
<tr valign="top"><td> Copy URL of current page to the clipboard.
</td><td> -
</td><td> option + &#8984; + C
</td></tr>
<tr valign="top"><td> Paste content without formatting
</td><td> -
</td><td> shift + option + &#8984; + V
</td></tr>
</table>


<a id="ChromeMacros"></a>

### Chrome iMacros

To use macros, add to Chrome browser the
<a target="_blank" href="https://chrome.google.com/webstore/detail/imacros-for-chrome/cplklnmnlbnpmjogncfgfijoopmnlemp">
iMacros for Chrome</a>.

This auto-opens http://imacros.net/browser/cr/welcome.

To use macros on Firefox, open in Firefox 
<a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/imacros-for-firefox/">
iMacros for Firefox</a>.
Click Add to Firefox.
Click Install.
Click Restart Now.


<a id="WordKeyz"></a>

### Microsoft Word for Mac 2011 #

* <a target="_blank" href="http://office.microsoft.com/en-us/mac-word-help/word-keyboard-shortcuts-HA102929541.aspx">
Keyboard Shortcuts for Word for Mac 2011</a>

* <a target="_blank" href="https://support.office.microsoft.com/en-us/article/Word-keyboard-shortcuts-c0ca851f-3d58-4ce0-9867-799df73666a7?CorrelationId=01abcab5-3d34-41bc-b5be-d5588e368c9e&ui=en-US&rs=en-US&ad=US">
Word Keyboard Shortcuts</a>

   * Save = command + S
   * Save As = Shift + command + S
   <br /><br />


## Microsoft Outlook (Email and Calendar)

Among the <a target="_blank" href="https://support.microsoft.com/en-us/office/keyboard-shortcuts-for-outlook-3cdeb221-7ae5-4c1d-8c1d-9e63216c1efd?ui=en-us&rs=en-us&ad=us">
Keyboard Shortcuts for Outlook on macOS</a>:

Minimize or expand the ribbon = Options + COMMAND + R

Hide the reading pane or show it on the right = COMMAND + Backslash (\)

Hide the reading pane or show it below = Shift+ COMMAND + Backslash (\)

<a id="SpecialCharz"></a>

## Text Editor Special Characters #

In a text editor, press either Shift + Option + 8 or Option + 0.

For autocomplete in TextEdit, press Tab + Esc.
Unfortunately, this is the same key to toggle the Mac's text-to-speech.

For the ©Copyright symbol, press the "alt" key (or "option") 
and hold it down while typing "g" on the keyboard.


<a id="KeySymbolz"></a>

## Keyboard Symbols

This website and others make use of special coding to represent Apple
icons and keyboard icons.

Below is modified 
<a target="_blank" href="http://macbiblioblog.blogspot.com/2005/05/special-key-symbols.html">from Joe Weaks</a>

<table border="1" cellpadding="4" cellspacing="0">
<tr align="left"><th> Icon </th><th> Name  </th><th> Unicode </th><th> Font</th></tr>
<tbody>
<tr><td valign="top">&#9021;</td><td valign="top">Power 3</td><td valign="top">U+233D</td></tr>

<tr><td valign="top"><span style="font-family: Lucida Grande;">&#63743;</span>
</td><td valign="top">Apple symbol 1
</td><td valign="top">U+F8FF</td><td>Lucida Grande</td></tr>
<tr><td valign="top">&#8984;
</td><td valign="top">Command (Open Apple) 2
</td> <td valign="top">U+2318</td></tr>
<tr><td valign="top">&#8963;</td><td valign="top">Control</td>             <td valign="top">U+2303</td></tr>

<tr><td valign="top">&#8997;</td><td valign="top">Option (Alt, Alternative)</td>             <td valign="top">U+2325</td></tr>

<tr><td valign="top"><span style="font-family: 'Apple Symbols';">&#8679;</span>
</td><td valign="top">Shift
</td><td valign="top">U+21E7
</td><td> Apple Symbols</td></tr>
<tr><td valign="top">&#8682;</td><td valign="top">Capslock</td> <td valign="top">U+21EA</td></tr>

<tr><td valign="top">&#9099;</td><td valign="top">Escape</td>               <td valign="top">U+238B</td></tr>
<tr><td valign="top">&#8677;</td><td valign="top">Tab forward</td><td valign="top">U+21E5</td></tr>
<tr><td valign="top">&#8676;</td><td valign="top">Tab back</td><td valign="top">U+21E4</td></tr>

<tr><td valign="top">&#9251;</td><td valign="top">Space</td> <td valign="top">U+2423</td></tr>
<tr><td valign="top">&#9166;<br />
&#8617;</td><td valign="top">Return</td>              <td valign="top">U+23CE<br />
U+21A9</td></tr>
<tr><td valign="top">&#9003;</td><td valign="top">Delete back</td> <td valign="top">U+232B</td></tr>
<tr><td valign="top">&#8998;</td><td valign="top">Delete forward</td> <td valign="top">U+2326</td></tr>
<tr><td valign="top">
<span id="element-1" class="element">&#65110;</span>
<span id="element-2" class="element">&#8413;</span></td><td valign="top">Help</td> <td valign="top">U+003F &amp;<br />U+20DD</td></tr>
<tr><td valign="top">&#8689;<br />
&#8598;<br />
&#8632;</td><td valign="top">Home</td> <td valign="top">U+21F1<br />
U+2196<br />
U+21B8</td></tr>
<tr><td valign="top">&#8690;<br />
&#8600;</td><td valign="top">End</td> <td valign="top">U+21F2<br />
U+2198</td></tr>
<tr><td valign="top">&#8670;</td><td valign="top">Pageup</td> <td valign="top">U+21DE</td></tr>
<tr><td valign="top">&#8671;</td><td valign="top">Pagedown</td> <td valign="top">U+21DF</td></tr>
<tr><td valign="top">&#8593;<br />
&#8673;</td><td valign="top">Up arrow</td> <td valign="top">U+2191<br />
U+21E1</td></tr>
<tr><td valign="top">&#8595;<br />
&#8675;</td><td valign="top">Down arrow</td> <td valign="top">U+2193<br />
U+21E3</td></tr>
<tr><td valign="top">&#8592;<br />
&#8672;</td><td valign="top">Left arrow</td> <td valign="top">U+2190<br />
U+21E0</td></tr>
<tr><td valign="top">&#8594;<br />
&#8674;</td><td valign="top">Right arrow</td> <td valign="top">U+2192<br />
U+21E2</td></tr>
<tr><td valign="top">&#8999;</td><td valign="top">Clear</td> <td valign="top">U+2327</td></tr>

<tr><td valign="top"><span style="font-family: 'Apple Symbols';">&#8685;</span>
</td><td valign="top">Numberlock
</td> <td valign="top">U+21ED</td><td> Apple Symbols</td></tr>
<tr><td valign="top">&#8996;</td><td valign="top">Enter</td> <td valign="top">U+2324</td></tr>
<tr><td valign="top">&#9167;</td><td valign="top">Eject</td><td valign="top">U+23CF</td></tr>
</tbody></table>


## Robot typists

For making videos:

https://github.com/pofallon/sublime-phantypist<br />
Slowly output the contents of the clipboard into the currently active tab, 
one character at a time. Map to CTRL-SHIFT-V for a slow paste command.

https://github.com/aholub/type<br />
Applescript "robot" typist inserts characters into XCode or other application

https://gist.github.com/xaviershay/6656216<br />
Creates a mapping that will type out the given text into vim.


## Resources #

Instead of the built-in command+Tab to switch among active programs, follow <a target="_blank" href="https://blog.craftlab.hu/how-to-become-a-modern-magician-productivity-tips-for-devs-on-macos-7a886c43d870">Daniel Szpisjak's How to become a modern magician? - productivity tips for devs on macOS</a>
describes setup and use of <a target="_blank" href="http://www.hammerspoon.org/go/#setup">Hammerspoon</a> Lua language which uses a complex combination such as Shift+Control+Option to be a "Hyper" key such as the CapsLock. <a target="_blank" href="https://pqrs.org/osx/karabiner/">Karabiner+Elements</a>

Assign Hyper+X to a specific program, and the pop-up shown by command+Tab will not come up.

## Bash-it

<a target="_blank" href="https://github.com/Bash-it/bash-it">https://github.com/Bash-it/bash-it</a>
community Bash framework of autocompletion, themes, aliases, custom functions based on <a target="_blank" href="https://github.com/robbyrussell/oh-my-zsh">https://github.com/robbyrussell/oh-my-zsh</a>


## Tmux

Tmux is a contraction of "Terminal Multiplexer". The "multi" refers to multiple sub-windows like multiple tabs on a browser window.

## Comprehensive

<a target="_blank" href="https://tyler.io/i-may-have-gone-overboard-with-my-keyboard-shortcuts/">Tyler.io</a>
show the keys he defined using Magnet (https://magnet.crowdcafe.com/) and KeyboardMaestro (https://www.keyboardmaestro.com/main/).
Tyler Hall's code is at https://github.com/tylerhall/


<hr />

<a name="StreamDeck"></a>

## Stream Deck button keyboard

Video creators especially appreciate being able to, so they can concentrate on talking, push a button and have a sequence of keys to do what they need, such as share screen 2, leave zoom, etc.

The Stream Deck has programmable buttons, with each button like a little LCD screen.

<a target="_blank" href="https://www.youtube.com/watch?v=POt4-8b0iPE" title="">VIDEO</a>:
Unlike a regular keyboard, each button on the Stream Deck can display different images.
It provides a visual button you don't have to remember.

References:
   * https://www.wired.com/story/elgato-stream-deck-productivity-tips/
   * https://www.youtube.com/watch?v=6VyVCddCk-Q&t=95s
   <br /><br />

1. Since 2017, there are several editions of Stream Deck. The $150 MK.2 has 6 keys. The $80 "Mini" has 4 keys. The $250 "XL" has 32 keys.

   <a target="_blank" href="https://www.elgato.com/en/stream-deck-pedal">Stream Deck Pedal</a> provides three buttons for your feet to click.

1. Download and install StreamDeck software from 

   <a target="_blank" href="https://www.elgato.com/en/downloads">https://www.elgato.com/en/downloads</a>

   PROTIP: This installs to the <tt>/Applications</tt> folder.

   Alternately, Elgato published several utilities in Homebrew on Mac:

   <pre><strong>brew search elgato</strong></pre>
   
   <pre>==> Casks
homebrew/cask-drivers/elgato-camera-hub
homebrew/cask-drivers/elgato-control-center
homebrew/cask-drivers/elgato-game-capture-hd
homebrew/cask-drivers/elgato-stream-deck
homebrew/cask-drivers/elgato-thunderbolt-dock
homebrew/cask-drivers/elgato-video-capture
homebrew/cask-drivers/elgato-wave-link
   </pre>

1. PROTIP: If you need to differentiate the USB end of the StreamDeck cable, label it.
1. PROTIP: If you're using a later-model Mac, you'll need a USB-A to USB-C adapter.
1. Plug in your deck to a USB-2 port. 

1. Press the blue "WELCOME" button to open the <a target="_blank" href="https://www.elgato.com/en/welcome-to-stream-deck?utm_campaign=Stream-Deck-App&utm_medium=Welcome-Stream-Deck&utm_source=Stream-Deck-App">Elgato webpage</a> on your default browser.

   ### Preferences configuration

   NOTE: I like to have a clean "full sreen" without the distraction of all the Apple Mac icons at the top, bottom, etc. But for those times they need to be seen ...

1. Hold down <strong>fn+control+F8</strong> or cursor all the way to the top of your whole screen and on the Apple Top Menu bar, click <img alt="keyboard-streamdeck-21x20" width="21" height="20" src="https://user-images.githubusercontent.com/300046/153720313-40c653e7-5fa1-4d42-a3ff-4bd60597e60a.png"> the StreamDeck.app icon to select <strong>Configure Stream Deck</strong>, which makes the GUI appear.
1. PROTIP: Press Command+Tab to notice that the app does not appear.

1. Press Command+, (comma) or click the () cog icon for the app's Preferences dialog.
1. Select "Sleep After" for 5 minutes or whatever time you prefer.

   PROTIP: You can "Set Screensaver..." for a background image. But why?

   ### Profiles Backup

1. Click the "Profile" tab to define different Profiles.
1. <a target="_blank" href="https://help.elgato.com/hc/en-us/articles/360048424432-Elgato-Stream-Deck-How-to-Back-Up-and-Restore-Profiles-">DOTHIS</a>: click the down-arrow to select "Backup All", "Create Backup..." which goes in your Documents folder as a file such as:

   <pre>Stream Deck - 12-02-2022 - 11-59.streamDeckProfilesBackup</pre>

1. Exit Preferences.

   ### Pages and Levels

1. Click the "+" next to "Pages" (on the middle of the GUI) to add a second page. Notice a right (>) cursor now in the device.
1. Click on that and the left cursor appears.

   PROTIP: Use the top (home) page as a menu and for buttons you'll want to most often reach quickly during live calls, such as sound effects. 
   Use another page of icons for websites.

1. Click the () "Control Center" menu item to expand/contract its items.

   PROTIP: I don't use the brightness settings button because they are buttons on my Mac keyboard Control Board for that.

   PROTIP: I don't use the Battery button because I set my Mac to display its percentage on my Mac's top-of-screen menu (set in System Preferences, Dock & Menu Bar, Battery).

   ### Pages, Websites and icons

1. Highlight and copy the URL path of the page you want to go to (starting with "https://").
1. Create your own Webpage button by expanding the System menu and dragging the "Website" to drop it on the button you want to use.
1. PROTIP: You can drag a gif (animated) image file from Finder and drop on the default icon.
1. Type a Title such as "Gmail".
1. Click on the URL field and paste.
1. Click the "+" on the upper-left of the button icon to pop-up Stream Deck's Icon Library.
1. Click the icon at the lower-left to open a selection of icons, plugins, music, sound effects.

   ### Single-button website

1. To obtain an icon, replace "linkedin.com" with the website you want:

   <pre>https://www.linkedin.com/favicon.ico</pre>

   That's always 20x20 pixels, so use a photo editor (such as Sketch) to expand it to 144x144 shown as 72x72.

   https://www.startpage.com/sp/search

   NOTE: Stream Deck allows you to define two states for every key (e.g. on and off).

   ### Hardware upgrade

   ifixit.com has a <a target="_blank" href="https://www.ifixit.com/products/micron-2400-nvme-pcie-gen4-2230-ssd">$84.99 Stream Deck Upgrade Kit</a> takes the 64GB to 512GB with a faster Micron processor.

   ### Icons 
   
1. Among icons, I like the Icon collection "Material Icons" (from Google) because of their white on black.

   PROTIP: It's best to use a black background to avoid annoying glare and reflections on your glasses.

1. If you're a Figma user, install their icon library.

   Stream Deck is the darling of gamers and streamers who use OBS Studio, Twitter, Twitch.

1. Control OBS

   <a target="_blank" href="https://www.youtube.com/watch?v=KbEUNg6GxFo">OBS Studio Ultimate Stream Deck Guide</a>

   <a target="_blank" href="https://www.youtube.com/watch?v=jdI_IeP1K3o&t=2m33s">VIDEO</a>: Noobs Commander OBS scripts.

1. Among sound effects, "Cell Phone ring simple" and "Cell Phone Smart Phone Vibrate" can be a good excuse to end meetings.

   "Crowd Aww", "Crowd Cheer Clap Scream", "Large Crowd Medium Ovation", "Crowd Disgusted Aww", "Crowd cheers and whistles".

1. Download "rim shot" and comedy laugh track sounds.

1. MUSIC track for use during short breaks: Among the longest: "Inspiring Uplifting Motivational" is 4:34; "Come Dine with Me" is 5:32.

   I especially like "Upbeat Corporate Success" and "Ultimate Inspiration", which are about 120 BPM (Beats Per Minute).

   ### Plugin to control lights

1. Among PLUGINS, "Philips Hue" to turn lights on and off without saying "Alexa" or "Hey Google" by connecting to Phillips, etc.

   YouTube
   
1. "Zoom Plugin"

   https://lostdomain.org/stream-deck-plugin-for-zoom/
   
1. Use IFTTT.com to create special web links.

   switch your phone to Do Not Disturb,

1. PowerPoint integration

1. Visual Studio Code Mac or XCode

1. DevOps for StreamDeck to control GitHub Actions, GitLab, Netlify, etc.

   https://github.com/SantiMA10/devops-streamdeck

1. PLUGIN "Time"

1. PLUGIN "OSA Script" to put your Mac laptop to sleep with one button.

   https://vninja.net/2021/04/15/elgato-stream-deck-sleep-button/
   https://www.reddit.com/r/StreamDeckSDK/comments/jsn7re/setting_up_a_1_button_sleep_mode/

   Apple's own scripting tool, Shortcuts, is not only powerful, but it's built right into MacOS. That can be a huge benefit on its own, but an unofficial plugin lets you activate Shortcuts right from a button on your Stream Deck. 

   https://github.com/SENTINELITE/StreamDeck-Shortcuts
   This integration is made by GitHub user Sentinelelite and not associated with Apple, which is worth keeping in mind. However, you can find the code here. In my testing, it worked pretty well, launching the couple of existing Shortcuts I had without needing a keyboard shortcut that's not already in use or taking up space in my status bar.

1. PLUGIN: 
   https://www.youtube.com/watch?v=ny9z6rgJAC4

   ## Mute/Unmute
   
   PROTIP: Most conveniently, Stream Deck buttons don't depend on you being at a specific app.

1. https://demitasse.co.nz/2020/04/zoom-mute-unmute-using-stream-deck/

1. Control Notion app

   https://www.youtube.com/watch?v=nrWRzYYC1rE

1. Use "Mixer" to mute/unmute microphone in Twitch, Mixer, Discord, etc. 

1. Nested folders.

1. "MultiAction" invokes a sequence of actions programmed to open and position several window by one button.

1. Instant Replay of the last 15 seconds on YouTube, if you also bought an Elgato capture card hardware.

1. <a target="_blank" href="https://www.youtube.com/watch?v=M4ckb53gxh0">VIDEO</a>: Control the OBS streaming app.

1. Post to Twitter, YouTube, 

References:

   * https://www.youtube.com/watch?v=_WwnM2VgYHU Plug-ins Magic Vegas

   * <a target="_blank" href="https://www.youtube.com/watch?v=nrWRzYYC1rE">You Need A Stream Deck! The Secret To My Productivity Working From Home</a> by <a target="_blank" href="https://www.bettercreating.com/">BetterCreating.com</a> has a <a target="_blank" href="https://www.youtube.com/watch?v=tqLU_6ceEOc">custom workpad for StreamDeck</a> controlling <a target="_blank" href="https://www.notion.so/">Notion</a>.

   * <a target="_blank" href="https://www.youtube.com/watch?v=_WwnM2VgYHU">5 Stream Deck PLUGINS You Have To Try Out!</a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=RPMMNZNH73Q">8 Easy Stream Deck Tricks (to Impress Your Viewers)</a>


### Foot pedels

The Kinesis Advantage keyboard has a <a target="_blank" href="https://www.youtube.com/watch?v=dHhr30207JY">
phone plug</a> to connect to a <a target="_blank" href="https://kinesis-ergo.com/products/#se2-foot-pedals">foot peddle</a> to press the "Enter" key.



## Ergonomic Keyboards

<a target="_blank" href="https://www.youtube.com/watch?v=oOdfefV2R1I">VIDEO</a>: "Among fastest competitive typists, only two use Dvorick key layout".

Although pricey at <a target="_blank" href="https://www.amazon.com/Kinesis-Advantage2-Ergonomic-Keyboard-KB600/dp/B07K1SMRGS/">$340 from Amazon</a> (perhaps the most expensive keyboard available), the "Advantage2" keyboard <a target="_blank" href="https://kinesis-ergo.com/shop/advantage2/">from Kinesis-ergo.com</a> (at Bethel, Washington state)
makes it easier and faster for your fingers to reach keys due to its unique contoured key wells.
Its keys in the middle transfer more work to thumbs than conventional square keyboards.

![keyboard-kinesis-557x455](https://user-images.githubusercontent.com/300046/99932329-e5a00f00-2d14-11eb-8a1d-3a3cb5ee3722.png)

A <a target="_blank" href="https://www.youtube.com/watch?v=psC3ysre2RMhdn2VvdJWbs">Ergonomics shop TheHumanSolution.com</a>
note the slant of keys enables <a target="_blank" href="https://www.youtube.com/watch?v=psC3ysre2RM&t=9m44s" title="Jun 24, 2020">natural (rather than bent) wrist placement</a> that prevents repetitive motion injury causing career-ending pain in wrists and shoulders.

However, the keyboard does take some "learning time" as its keys are in a different location than on conventional keyboards.
The manufacturer has a 7 day return and 3 year warranty policy.

Desiring quieter operation, I chose <a target="_blank" href="https://www.youtube.com/watch?v=1WYWePNJTo4&t=1m28s">Cherry 45g MX <strong>Red</strong> (quiet linear-force, not "clicky") mechanical key switches</a> (instead of Brown keys which provide tactile feedback on each keypress). Cherry Red key switches are also used in the <a target="_blank" href="https://www.youtube.com/watch?v=rGM8Y6yal-8&t=4m58s">iKDC KD104 MX silent keyboards</a>. 

But I don't think the Red keys are<a target="_blank" href="https://www.youtube.com/watch?v=BKbQS1vZz2w&t=3m23s" title="Mar 30, 2019">not much quieter than other keyboards</a>.
(Razor Opto-mechanical Red or Ornata v2 membrane keyboards seem the quietest to me. They are also have short 1mm travel to activate and quickest debounce delay).

Further quiet may be achieved by lubrication or <a target="_blank" href="https://www.youtube.com/watch?v=O3-9ttpaU0E&t=2m5s">replacing key switches</a> with <a target="_blank" href="https://zealpc.net/products/healio">rubbery Zilent keys</a>. 

(I don't know how the keyboard responds to "rollover" of several keys almost simultaneously, which other keyboards call "anti-ghosting").

For even faster operation, use the keyboard's 2MB of memory on-board to store SmartSet Programming Engine macros.

Videos: 

   * https://www.youtube.com/watch?v=8WwuusfB0QA Aug 20, 2016 is the most detailed
   * https://www.youtube.com/watch?v=ILItPWuirAk
   * https://www.youtube.com/watch?v=PhQlZvUzT7w Aug 3, 2016 from Kinesis
   <br /><br />



## References

STAR: https://www.wired.com/story/do-everything-faster-keyboard-shortcuts-tricks-tips/


## More on OSX #

This is one of a series on Mac OSX:

{% include mac_links.html %}
