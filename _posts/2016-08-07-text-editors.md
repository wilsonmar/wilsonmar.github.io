---
layout: post
title: "Text Editors (vim, subl, code, atom, Eclipse, IntelliJ, etc.)"
excerpt: "One second saved per minute = 1.666% better living"
tags: [apple, mac, setup]
image:
# feature: pic RichTextEditorToolBar 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622140/227572b0-0585-11e6-8d8c-55c1faa4fd68.jpg
  credit: MH Education
  creditlink: http://highered.mheducation.com/sites/0000065899/student_view0/question_editor/rich_text_editor_toolbar.html
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This is a random collection of notes on text editors for the Mac.

There is not shortage to the number of programs available to edit code.

Built-in OSX:

   * <a href="#vim">vim</a>
   * <a href="#pico">pico</a>
   * <a href="#nano">nano</a>

Free:

   * <a href="#Code">Visual Studio Code</a> from Microsoft (free, built using Electron)
   * <a href="#atom">Atom</a> from GitHub (free, built using Electron)
   * <a target="_blank" href="http://brackets.io/">
   Adobe Brackets</a> is on Windows too
   * <a target="_blank" href="http://barebones.com/products/textwrangler/">
   http://barebones.com/products/textwrangler</a> is the
     little brother to BBEdit.
   * <a target="_blank" href="http://www.annedawson.net/Python_Editor_IDLE.htm">
   Python IDLE Editor</a>

   * mcvim ? for Mac

Licensed nagware:

   * $89 <a href="#SublimeTextz">Sublime Text</a>
   * Texttastic
   * Byword 
   * (There is no equivalent of Windows Notepad++ on MacOS)

Free IDEs:

   * <a href="#Eclipse">Eclipse</a>
   * <a target="_blank" href="https://github.com/spyder-ide/spyder">Spyder</a> (for Python pyflakes and pylint code analysis)
   * Visual Studio Express from Microsoft
   * <a target="_blank" href="https://www.jetbrains.com/go/">Gogland</a>,
   an IDE for Go from Jetbrains (makers of IntelliJ, PyCharm, etc.)
   * Aptana Studio
   * NetBeans

Licensed IDEs:

   * IntelliJ and WebStorm and PhpStorm from JetBrains
   * Visual Studio from Microsoft

<hr />

<a name="Features"></a>

## Features #

* Markdown display
* Code completion
* Pre-compile on the fly
* Static code scan on the fly
* Full project navigation
* Refactoring (renaming) support
* Debugging


<a name="Emacs"></a>

## Emacs

emacs was developed in 1976 by then 23-year old MIT and Harvard grad <a target="_blank" href="https://en.wikipedia.org/wiki/Richard_Stallman">Richard Stallman</a>, well known as the developer of gcc (open source C compiler) and the founder of the GNU Free Software Foundation. 

Emacs has, perhaps, more manual editing commands than other editors, numbering over 1,000 commands. 

"Some jokingly referred to emacs as the Carpal Tunnel editor, since most of the commands in emacs are accesses by typing multiple keys on the keyboard at the same time."

But Emacs users can define macros that combine commands. 


<a name="vim"></a>

## Vim

`vim` is an alias of `vi`. vim is vi plus the m from the word improved.
vim is the most commonly available text editor in Linux.
vi is still the standard text editor available on many Unix system. 
A good reason to become proficient with vi is that on some industrial type systems, where no extra software can be installed, vi may be the only editor available.

   The original vi (visual editor) was developed in 1976 as part of BSD Unix system by Bill Joy, who went on to be one of the co-founders of Sun Microsystems (which Oracle later purchased). 
   vi became popular within the Unix community for its full screen visual editing not available before. 

The newer vim and graphical gvim, do add many nice features to vi.

### Quitting out from command mode 

0. In a Terminal, type command:

   <pre><strong>vimtutor
   </strong></pre>

   This is an interactive tutorial.

0. Press Enter as requested.

0. Press : to enter line mode.

   PROTIP: Most of the time when you see a colon at the lower-left corner,
   it's saying just press a key for a command, such as q to quit out.

0. Press q to quit out.


### vi/vim cheatsheet

<a target="_blank" href="https://user-images.githubusercontent.com/300046/41471886-08e73d56-7072-11e8-8294-8dccce320337.gif">
<img alt="editors-vi-vim-cheat-sheet-1024x724.gif" width="1024" src="https://user-images.githubusercontent.com/300046/41471886-08e73d56-7072-11e8-8294-8dccce320337.gif"></a>


### Open

0. To open to the first occurance of "x" in the file executed automatically when opening a command-line Terminal:

   <pre><strong>vim +/alias ~/.bash_profile
   </strong></pre>

   There are three <strong>modes</strong>:

   * command mode
   * insert mode
   * line mode

   A Cheat Sheet is at <a target="_blank" href="https://devhints.io/vim">
   https://devhints.io/vim</a>

   ### While in command mode, cursor to a position in the document:

   * press X to delete a character.
   * type `set number` to toggle numbering on the left edge.
   * type `set invnumber` to toggle inverse numbering backwards.

   * type i to enter insert mode at the cursor.
   * type I to enter insert mode at the front of the line.
   * type o to insert new line below current position.
   * type O to insert new line above current position.

   * type G to go to end of file.
   * type 55G to go to line 55.

   * type dd to delete line.

   * type ZZ to save and exit

   ### While in insert mode:

   * Press Esc to exit insert mode.
   * line mode is seen after pressing Esc.

   ### While in last-line mode:

   * cursor up brings up previous commands
   * press u to <strong>undo</strong> last change.

   * :q  to quit (short for :quit)
   * :q! to quit without saving (short for :quit!)
   * :qa to quit all (short for :quitall)

   * :wq to write and quit (in other words, save and exit)
   * :x  to exit (shorter than :wq)
   * :e  to revert to last saved version

0. Open at line 55 of the file executed automatically when opening a command-line Terminal:

   <pre><strong>vim +55 ~/.bash_profile
   </strong></pre>



<a name="nano"></a>
<a name="pico"></a>

## pico and nano

The user interface of nano and pico are identical because they were both developed by the University of Washington. nano is an open source clone of pico.

According to <a target="_blank" href="https://en.wikipedia.org/wiki/Pico_%28text_editor%29">
Wikipedia</a>, pico stands for "pine composer".

   ![pico menu 75](https://cloud.githubusercontent.com/assets/300046/15268678/21302782-19a4-11e6-9f8d-873c5a3073e4.jpg)

pico became well known and popular because it was the default editor used with the pine e-mail client (an easy-to-use text based e-mail client popular when early internet users sent e-mail messages only in plain text data using slow dial-up modems).

The ^ character means hold down the <strong>control</strong> key while you press the character.

Today, nano is easy to use for beginners. However, it lacks the advanced features of vim and emacs. 


<a name="MacVim"></a>

## MacVim

MacVim is a GUI app for macOS.

The manual approach: 

1. Download the binary release <a target="_blank" href="http://macvim-dev.github.io/macvim/">
http://macvim-dev.github.io/macvim</a>
or the .dmg file from https://github.com/macvim-dev/macvim/releases
2. Expand archive
3. Move MacVim.app into folder /Applications/.

To use brew:

1. Run brew install vim && brew install macvim
2. Run brew link macvim

<a id="SublimeTextz"></a>

## Sublime Text

Many tutorials make use of this tool from Jon Skinner.

There are two simultaneous production versions of Sublime Text: 2 and 3.
This is because Sublime contains its own Python interpreter to run add-ons.
Choose version 3.

### Download and Install Sublime Text

* <a target="_blank" href="https://www.sublimetext.com/3">https://www.sublimetext.com/3</a>
   is recommended even though it's labeled "beta" because desirable packages are being written for it.

* <a target="_blank" href="https://www.sublimetext.com/2">https://www.sublimetext.com/2</a>

Expanded explanations for various platforms:

* http://docs.sublimetext.info/en/latest/getting_started/install.html

* On Linux: https://github.com/TCattd/sublime-text-linux-installer

### Configure for command-line invocation

To use the Sublime Text text editor from the command line,
make a symlink to subl.

0. If you don't have a folder <strong>/usr/local/bin/</strong>, create it.

   <pre>
   mkdir /usr/local/bin/
   </pre>

0. Assuming you've placed Sublime Text in the Applications folder:

   <pre><strong>
   sudo ln -s "/Applications/Sublime Text 3.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
   </strong></pre>

0. To use Sublime Text as the editor for many commands that prompt for input,
   set your EDITOR environment variable:

   <pre><strong>
   export EDITOR='subl -w'
   </strong></pre>

   Specifying -w causes the subl command to not exit until the file is closed.

0. To open for edit a file using the Sublime text editor, for example:

   <pre><strong>subl ~/.bash_profile</strong></pre>

   PROTIP: Sublime Text runs in the background to index your source files.

   One nice feature of Sublime is that if you are already editing a file.
   You are brought to the file being edited instead of seeing another instance of that file.

### Install Package Control

One advantage of Sublime Text is its plug-ins.

0. Switch to an internet browser to visit
   <a target="_blank" href="https://sublime.wbond.net/">Package Control home page</a>.

0. Click Browse at the upper right for the most popular:

   * Emmet for keyboard shortcuts
   * SideBarEnhancements
   * SublimeLinter to find typos
   * Theme - Soda to look better
   * SFTP to transfer files from within the editor UI.

0. Click the <strong>Popular</strong> heading for a list with more detail.

0. Visit <a target="_blank" href="https://sublime.wbond.net/">Package Control home page</a>.

0. Open SublimeText 3.
0. If not already installed, see <a target="_blank" href="https://packagecontrol.io/installation#st3">
   https://packagecontrol.io/installation#st3</a>
0. Select your version of Sublime you have open.
0. Double-click on the command text to select it.
0. Press Ctrl+C to copy the command into the operating system's invisible clipboard.
0. Switch back to SublimeText (press Command+Tab).

0. Bring up Sublime's command-line <strong>Console</strong> by using the
   <strong>control+`</strong> (back-tick) shortcut or click menu View > Show Console.

   NOTE: The Console recognizes <strong>Python</strong> code.

0. Paste the command and press Enter.

   This creates the Installed Packages/ folder.

   If you get `IndentationError: unexpected indent` ???

0. Press `control+` again to remove the Console.
0. Restart Sublime Text.

### Use Package Control

0. Press <strong>Cmd+Shift+P</strong> to bring command palette in front.

   <img width="401" alt="scr sublime text 3 package manager" src="https://cloud.githubusercontent.com/assets/300046/15268029/c69a6dc8-198f-11e6-8860-7c8ccba65cef.png">

   The position from the previous action is remembered.

0. Type <strong>pac</strong> for Package Control. (Press Esc to dismiss it)
0. Select <strong>Install Package</strong>.

   NOTE: This may take a few seconds to bring up a list from a website visited above.

   <img width="469" alt="scr sublime text 3 package manager packages" src="https://cloud.githubusercontent.com/assets/300046/15268227/3c23493e-1995-11e6-983b-32fd4f708e76.png">

0. Type in a package name and press Enter to install it:

   <a target="_blank" href="https://packagecontrol.io/packages/Sublime%20Tutor">Sublime Tutor</a>

   (This is similar in operation to the Vim Tutor.)

0. Read more about SublimeText:

   <a target="_blank" href="http://sublimetexttips.com/">http://sublimetexttips.com</a>

   <a target="_blank" href="https://app.pluralsight.com/library/courses/sublime-text-3-from-scratch/table-of-contents">
   Sublime Text 3 From Scratch</a> 1h 42m video released 29 Oct 2013
   by <a target="_blank" href="http://www.jesseliberty.com/">Jesse Liberty</a>
   (<a target="_blank" href="https://www.twitter.com/jesseliberty/">@JesseLiberty</a>)

   ### Settings #

Use Sublime Text on Retina? for crisp, readable text, to Settings add 

   <pre><strong>
   "font_options" : ["gray_antialias"] 
   </strong></pre>

### Install spell check

Recommended spelling from the geniuses at Google.
Install ST v3 
https://github.com/noahcoad/google-spell-check/tree/st3
by https://github.com/noahcoad/google-spell-check/

### Install Python linter

1. Install Flake8 -- a favorite Python linters because it's fast yet has a low rate of false positives. 

   pip3 install --upgrade flake8

   The response shows it is a combination of the Pyflakes static-analysis tool and Pycodestyle (former pep8) code style checker.

0. Verify

   flake8 --help

   ### SublimeLinter

   SublimeLinter is the most popular linting framework for Sublime Text due to its focus, simplicity, and performance.
   Install the SublimeLinter and the SublimeLinter-flake8 plugins for Sublime Text. 


1. GotoSublimeTextandopentheCommandPalette (Cmd+Shift+p)
2. IntheCommandPalette,type“installpackage”.
3. ThenselectthePackageControl:InstallPackageoptionand
hit Return.
4. Packagecontrolwillpresentyouwithalistofavailable
packages. Type SublimeLinter and select the SublimeLinter - Interactive code linting framework for Sublime Text 3 package.
5. HitReturntobegintheinstallationprocess.

   ### Integrate

4. Install SublimeLinter-flake8
Now we need to integrate SublimeLinter with Flake8. This is done through another plugin called SublimeLinter-flake8. Let’s install it:
1. OpenSublimeText’sCommandPalette(Cmd+Shift+p)
2. IntheCommandPalette,type“installpackage”.
3. ThenselectthePackageControl:InstallPackageoptionand
hit Return.
4. Packagecontrolwillpresentyouwithalistofavailable
packages. Type flake8 and select the SublimeLinter-flake8 -
SublimeLinter plugin for Python, using flake8 package.
5. HitReturntobegintheinstallationprocess.

   ### Restart Sublime Text to Finalize the Plugin Install

   For SublimeLinter to start working correctly we need to exit Sublime Text and start it again. Click on Sublime Text → Quit Sublime Text to shut down Sublime Text and then launch it again.

1. AfterrestartingSublime,openaPython(.py)file.
2. Changealineinthefiletointroduceasyntaxorformatting
error.
3. Afterashortdelayyoushouldseewarningmessagesfrom
SublimeLinter right alongside your code.   BTW SublimeLinter supports more than just Python. IAdditional linters for JavaScript or CSS all have the same look and feel on your editor window.

   ### Disable

   To disable individual linter warnings, put a "\# noqa" comment at the end of a line. See documentation at: http://flake8.pycqa.org/



### More configuration

http://docs.sublimetext.info/en/sublime-text-3/customization/settings.html

<a id="Git_Editor"></a>

## Git Editor

If Git finds conflicts, it needs a way to show the differences in a text editor.

Git uses the default vim editor.
To quit the page, press <strong>:q!</strong> (colon to specify a command, q to specify quit, exclamation point for immediate).

Sublime Text is a popular text editor.

https://help.github.com/articles/associating-text-editors-with-git/




<a id="IntelliJ"></a>

## IntelliJ 

Advantage of using the intelliJ IDE:

   * Simple keystrokes wraps statements in a try-catch or if-else block.
   * It generates getter and setter methods for object attributes.
   * Inbuilt packaging tools like gradle, SBT, grunt, bower, etc.
   * Directly access databases such as SQL, ORACLE, PostgreSQL, Microsoft SQL Server 
   * Supports different programming languages (Java, Javascript, Clojure, etc.)
   * Editions for different operating systems:  Windows, Linux, etc. 

Videos by LaunchCode:

   * <a target="_blank" href="https://www.youtube.com/watch?v=S764o0mAXhg">Intro to IntelliJ</a> Mar 2, 2017
   * <a target="_blank" href="https://www.youtube.com/watch?v=1bCgzjatcr4">Debugging in IntelliJ</a> Mar 2, 2017 [17:39]

Videos:

   * <a target="_blank" href="https://www.youtube.com/watch?v=MZge92bbU7E">Zen Habits of using IntelliJ IDEA</a> Nov 9, 2017 at Devoxx [50:10] by Victor Kropp (@kropp)
   * <a target="_blank" href="https://www.youtube.com/watch?v=eq3KiAH4IBI">42 IntelliJ IDEA Tips and Tricks</a> Oct 23, 
from IntelliJ IDEA
   <br /><br />



### IntelliJ Control Key Shortcuts

During initial configuration, specify the Project SDK
using the command up-arrow to the secret portal:

<ol type="1">
<li> Click New button </li>
<li> Select JDK </li>
<li> Click on the folder list (containing bin, etc.)</li>
<li> Press <strong> command + up arrow </strong>
to <strong> navigate up a folder level</strong>
from Home to the **MacOS** folder. </li>
<li> Click Choose to select the Java associated
with the system. This is called the "Secret Portal" approach.</li>
</ol>

Defaults changeable in Preferences | Keymaps

command + G to Generate
<br />
command + O to go to class
<br />
command + &#9003; Delete line

Web pages:

   * http://symbolcodes.tlt.psu.edu/keyboards/charpalosx.html
   * http://www.guru99.com/intellij-selenium-webdriver.html


<a name="#atom"></a>

## Atom #

0. Use an internet browser to <a target="_blank" href="https://atom.io/">atom.io</a>

   The site recognizes your operating system (OS X, Windows, or Linux)
   and presents the appropriate download button.

0. Click Download to your Downloads folder.
0. Expand the downloaded zip file.

   On a Mac:
0. Open a new Finder window and press shift+Command+A or click Go, then
   Applications.
0. Drag and drop the Atom app file from Downloads 
   to your root Applications folder.
0. If an existing file is there, replace it.
0. Delete the zip file downloaded.

0. <a target="_blank" href="https://confirmsubscription.com/h/i/FDEEF15834EF73C7">Sign up for updates</a>

0. Follow <a target="_blank" href="https://www.twitter.com/AtomEditor">
   Twitter @AtomEditor</a>

   Atom has package control, themes, auto-completion built-in.

   * https://github.com/atom/spell-check
   doesn't work
   per http://stackoverflow.com/questions/27731981/use-spell-check-in-code-comments

   To enable Spell Check for your current file type: put your cursor in the file:

0. Open the Command Palette (cmd-shift-p)
0. Run the Editor: Log Cursor Scope command. 

   This triggers a notification containing a list of scopes. 
   The first scope listed is the one you should add to the list of scopes in the settings for the Spell Check package. 

   Examples: source.coffee, text.plain, text.html.basic.

0. Press <strong>cmd-shift-:</strong> 
   to bring up the list of corrections when your cursor is on a misspelled word.


<a name="EditorConfig"></a>

## Editor Config #

Put a <strong>.EditorConfig</strong> file 
(<a target="_blank" href="https://editorconfig.org/#download"> from editorconfig.org</a>)
in your root folder, 
and the editor will format your code according to the rules defined in the file
for whatever type of file is being edited.

It's supported by default in Atom and other editors.




<a name="Emett"></a>

## Emett #

It may take some effort to memorize the keyboard sequences, but these are the ones I remember because I save time using them:



<a name="Eclipse"></a>

## Eclipse IDE install #

To install 
   <a target="_blank" href="http://macappstore.org/eclipse-java/">eclipse-java</a>
using [Homebrew](/macos-homebrew/):

   <tt><strong>
   brew update<br />
   brew cask install eclipse-java
   </strong></tt>

   The response:

   <pre>
Please migrate your Casks to the new location and delete /opt/homebrew-cask/Caskroom,
or if you would like to keep your Caskroom at /opt/homebrew-cask/Caskroom, add the
following to your HOMEBREW_CASK_OPTS:
&nbsp;
  --caskroom=/opt/homebrew-cask/Caskroom
&nbsp;
For more details on each of those options, see https://github.com/caskroom/homebrew-cask/issues/21913.
==> Satisfying dependencies
complete
==> Downloading https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/neon/R/eclipse-java-neon-R-macosx-cocoa-x86_64.tar.gz&r=1
==> Verifying checksum for Cask eclipse-java
==> Moving App 'Eclipse.app' to '/Applications/Eclipse.app'
🍺  eclipse-java staged at '/opt/homebrew-cask/Caskroom/eclipse-java/4.6.0' (0B)
   </pre>


<a name="Code"></a>

## Visual Studio Code #

Microsoft's Code is slower to startup than Sublime Text.

But its windowing is much more configurable, if that's important to you.
An example of this is moving the default sidebar to the right side of the editor.

Code's auto-indenting and execution of snippets work naturally.

Search for add-ins on https://marketplace.visualstudio.com/
by opening its Extension panel (CTRL + Shift + X). 
<a target="_blank" href="https://nickjanetakis.com/blog/switching-to-vscode-from-sublime-text">
Nick's list</a>.

On Mac: 

1. Install the GUI program using Homebrew:

   <tt><strong>brew cask install visual-studio-code
   </strong></tt>

0. My favorite approach is to open Code from the Mac Finder, by right-clicking on a folder
   and select <strong>Open with</strong> Visual Studio Code
   <a target="_blank" href="http://stackoverflow.com/questions/30159158/how-do-i-set-up-a-link-to-open-up-visual-studio-code-from-terminal-on-osx">
   per these instructions</a>

0. If you're working with JavaScript, install it from the Welcome screen, reached from Help, Welcome.

0. Under the "Customize" heading on the right, click the "JavaScript" link, then OK at the pop-up.
0. Click "Typescript" as well.
0. If you're using Protractor, search for that and install what appears:

   <img alt="text-edit-protractor-258x236-23265.jpg" width="258" src="https://user-images.githubusercontent.com/300046/43851048-e0453164-9af6-11e8-981b-f75e6e78b2d8.jpg">


0. Press shift+command+P or select Code's menu View, Command Palette at the top of the screen.

0. Begin typing this until the full command is recognized in the list:

   <tt><strong>
   Install 'Code' command in PATH
   </strong></tt>

0. Select the full command that appears in the drop-down.

0. Exit the Code program.

0. You can now, in a new Terminal shell window, use the code command to open a file:

   <tt><strong>code hello
   </strong></tt>

   BTW, "hello" in the example above can be any file.

### Tutorials on VSCode

   * http://michaelcrump.net/using-github-with-visualstudio-code/

   * <a target="_blank" href="https://www.youtube.com/watch?v=UcW1FHNvy8M">
   VIDEO: Supercharge Your JavaScript Debugging Workflow With VS Code</a>

<a target="_blank" href="https://scotch.io/courses/make-visual-studio-code-your-editor/">
Make Visual Studio Code Your Editor video course at Scotch.io</a> by Chris Sevilleja (@chrisoncode) 

   Getting Started:

   1. Introduction 7:55
   2. VS Code Basics 8:01
   3. Command Palette and Shortcuts 6:18
   4. Settings 8:04
   5. Extensions, 8:00
   6. Search and Multi-Cursor 7:38
   
      Main Features:

   7. Git 10:46
   8. Intellisense 10:22
   9. Terminal 4:40
   
      Language Specific:

   10. HTML 7:03
   11. CSS and Sass 6:56
   12. JavaScript 9:35
   13. Angular 6:09
   14. Node and npm 6:38
   15. PHP and Laravel 7:40

      Important Extensions:

   16. Project Manager 7:26
   17. Settings Sync 6:40
   
      More Features:
      
   18. Tasks 12:44
   19. Debugging 8:36
   20. VS Code 1.10 Features 5:28
   21. Custom Status and Activity Bar 7:26
   <br /><br />

<a target="_blank" href="https://tutorialzine.com/2017/06/15-essential-plugins-for-visual-studio-code">
15 Essential Plugins for Visual Studio Code</a> June 27, 2017

## AWS Cloud9

<a target="_blank" href="https://console.aws.amazon.com/cloud9/home/product">AWS Cloud9</a> for (Serveless) Lambda (under the Developer Tools category) works completely in the browser running in EC2 under the hood.
Key bindings from various other editors.
It auto-hibernates. 
Terminal, Git, NVM, Python, are pre-installed.
AWS Resources tab provides Lambda and Gateway integration.

<a target="_blank" href="https://acloud.guru/series/release-review/view/105">Reviewed</a> using https://github.com/ACloudGuru/acg-rr-cloud9

CAUTION: Do your own backups.


## References

https://earthsci.stanford.edu/computing/unix/editing/editorchoices.php

## Codota.com

https://www.codota.com/code/tutorials
Full sentence completion, learned from millions of programs.
dmg attaches to Eclipse, IntelliJ, STS, Android Studio 3.0.  (Not Netbeans)
Invokes by default shift+Alt+space.


## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}


## More on OSX #

This is one of a series on Mac OSX:

{% include mac_links.html %}
