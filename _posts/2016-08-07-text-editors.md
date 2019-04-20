---
layout: post
title: "Text Editors (vim, subl, code, atom, Eclipse, IntelliJ, Visual Studio, etc.)"
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
   * <a href="#VisualStudioForMac">Visual Studio for Mac from Microsoft</a>

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

Perhaps the most intensive tutorial is <a target="_blank" href="https://realpython.com/courses/python-development-visual-studio-code-setup-guide/">the Setup Guid from RealPython</a>

<a target="_blank" href="https://www.youtube.com/watch?v=UcW1FHNvy8M">VIDEO: Supercharge Your JavaScript Debugging Workflow With VS Code</a>

<a target="_blank" href="http://michaelcrump.net/using-github-with-visualstudio-code/">From Michael Crump</a>

<a target="_blank" href="https://scotch.io/courses/make-visual-studio-code-your-editor/">
Make Visual Studio Code Your Editor video course at Scotch.io</a> by  Chris Sevilleja (@chrisoncode), with code from 2017 by @sevilayha at <a target="_blank" href="https://github.com/scotch-io/vscode-course">https://github.com/scotch-io/vscode-course</a>

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

* https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces

* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
Integrates ESLint JavaScript into VS Code.

* https://marketplace.visualstudio.com/items?itemName=chuckjonas.apex-pmd
PMD static analysis for Salesforce Apex

* https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode
Extensions for developing on the Salesforce Platform

* https://gitlab.com/terja/sfdx-git


<a name="VisualStudioForMac"></a>

## Visual Studio for Mac #

### Install

1. Install Apple's <strong>XCode</strong> on your Mac's App Store.

   NOTE: Each version is related to a specific version of the Apple OS Mac operating system.

   Know the version by clicking on the program name next to the Apple icon, 
   then select "About":

   ![xcode about 271x48](https://cloud.githubusercontent.com/assets/300046/21987451/dc44154a-dbc0-11e6-90b6-4dce91b8c5d2.png)

   * Version 10.2 (10E125)
   * Version 8.1 (8B62)
   * Version 7 supports iOS 9
   <br /><br />

   PROTIP: Although Xamarin Studio is currently offered,
   its functonality is being folded into 
   <a target="_blank" href="https://www.visualstudio.com/vs/visual-studio-mac/">Visual Studio for Mac</a> until May 31, 2017.

   There are now paid Professional and Enterprise editions.

0. Follow along when watching <a target="_blank" href="https://channel9.msdn.com/Shows/XamarinShow/Snack-Pack-12-Getting-Started-with-Visual-Studio-for-Mac">VIDEO: Snack Pack 12: Getting Started with Visual Studio 2017 for Mac</a> May 31, 2017 by James Montemagno (<a target="_blank" href="http://twitter.com/jamesmontemagno">@jamesmontemagno<a>). which covers mobile development as well.

0. If you type "https://visualstudio.com" (the previous URL) you are redirected to:
   <a target="_blank" href="https://visualstudio.microsoft.com/">https://visualstudio.microsoft.com</a>

0. Click "Download for Mac" and select "Community 2019 for Mac".

   NOTE: The 2019 version is also called "v16".

   NOTE: The "Professional" and "Enterprise" versions cost money but provides more features.

0. Click "Save" on the pop-up to download <strong>visualstudioformacinstaller.dmg</strong>:

   * 31.6 MB for 2019
   * 22.8 MB for preview
   <br /><br />

0. Rename the installer with a suffix such as "..._2019.dmg". 

   <img align="right" alt="vs-mac-install-logo-263x303-8462" width="132" src="https://user-images.githubusercontent.com/300046/56370993-7e75bc80-61b9-11e9-8bf7-87e514e3e6db.jpg">

0. In Finder, double-click on the .dmg file to open with the "DiskImageMounter".

   Wait for the logo to appear.

   This logo (without the green) is the logo for the Visual Studio 3019 for Mac app on macOS.

   There is a different logo for the previous 2017 version.

0. Click the logo that appears.
0. Click Open for the "Visual Studio for Mac Installer" to appear.
0. Click "Continue" in the "Thank you for downloading".
   * 8.0.3

   ![vs-mac-install-internet-484x162](https://user-images.githubusercontent.com/300046/56370860-3d7da800-61b9-11e9-9b13-de8dcaa58077.jpg)

0. Uncheck or check what type of apps you want to develop.

   ![vs-mac-install-options-447x297-9602](https://user-images.githubusercontent.com/300046/56370758-0f986380-61b9-11e9-869f-2bea9b6975d2.jpg)

0. Click "Install and Update". 
0. While you wait many minutes for the downloading:

   Sign up for <a target="_blank" href="https://www.linkedin.com/learning/">LinkedIn Learning</a> video tutorials.

   Sign up for <a target="_blank" href="https://www.datacamp.com/">https://www.datacamp.com/</a> to learn Data Science

   Download <a target="_blank" href="https://github.com/aspnet/AspNetCore.Docs/tree/master/aspnetcore/tutorials/razor-pages/razor-pages-start/2.2-stage-samples">sample application code</a> for sample <a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-2.2&tabs=visual-studio">.NET Core 2.2 Razor pages</a>

0. Switch to Finder, system "/Applications" folder and notice there is, at time of writing:

   * "Visual Studio.app" of 1.55 GB and "Xamarine Profiler.app" of 93.6 MB.

0. Navigate to your <strong>Projects</strong> folder and drag it to the Finder's left Navigatin pane, for easy access.

0. On the Touchpad, spread 4 finger together at the same time to see that Powershell has been installed as well.

   ![vs-mac-icons-413x105-5443](https://user-images.githubusercontent.com/300046/56381960-7a569880-61d3-11e9-96ff-c44baa1c35e1.jpg)
   <br />

0. PROTIP: Drag the app icon and drop it on your Mac Dock for easy access.

0. Use your mouse to click the "Visual Studio" icon to open the program.

   ![vs-mac-2019-new-669x269-10031](https://user-images.githubusercontent.com/300046/56381902-5f842400-61d3-11e9-8a22-0e594d4dd570.jpg)

0. Dismiss the pop-up by clicking the red dot at its upper left corner.


   ### Check for Updates

0. Press command+, or click "Visual Studio" and select "Check for Updates...":

   ![vs-mac-top-menu-269x299-10152](https://user-images.githubusercontent.com/300046/56392151-e2b27380-61ed-11e9-9949-1337c9c5912c.jpg)

0. If updates are being downloaded, wait for all updates to download. While you're waiting: 

   PROTIP: Uncheck "Check automatically" so that you can check whether future installers are good.

   PROTIP: Add a recurring entry in your personal or team calendar to do the following every Wednesday at 4pm or some specified appointed time.

   Copy the version, such as "8.0.4.0" being downloaded.

   PROTIP: See if there are comments about the update. Switch to: 
   <a target="_blank" href="https://developercommunity.visualstudio.com/"><strong>https://developercommunity.visualstudio.com</strong></a>

0. Click "Visual Studio for Mac" tab.
0. In the search box type "Visual Studio 2019 for Mac update 8.0.4.0" or whatever version.
0. PROTIP: Ignore entries that are for the Windows version, older 2017 for Mac versions, Xamarin, etc.
0. If no issues are identified, click "Restart" for the install.
0. PROTIP: Go back to "Check Updates" because some (such as Java) require another update to finish.

   ### Sign in Microsoft

0. Press command+, or click "Visual Studio", then select <strong>Account...</strong>, then go through the prompts.

   PROTIP: Setup Microsoft Authenticator on your phone to use multi-factor authentication. It's cooler and safer.

0. Click the red dot to exit sign-in (yeah I know they should have an "OK" button to dismiss).

   ### Preferences

0. Press command+, or click "Visual Studio", then select <strong>Preferences...</strong>.
   * In Visual Style, select Dark User Interface theme
   * Author information.
   * Key bindings
   * Fonts (some prefer others more readable ones)
   * External Tools
   * In Load/Save, select "Load previous solution on startup"
     and "Always create backup copy"
   * Markers and Rulers, check "Highlight current line" and "Visualize changed lines"
   * Code Snippets ?
   * Standard Header for your team standard
   * In Accessibility, check "Enable".
   <br /><br />

0. Restart.

   ### Project = Solution (.sln) file

0. Follow along when watching <a target="_blank" href="https://channel9.msdn.com/Shows/Visual-Studio-Toolbox/Visual-Studio-for-Mac-Build-Your-First-App">Visual Studio for Mac: Build Your First App</a> Jan 22, 2019 by <a target="_blank" href="https://www.linkedin.com/in/sayedibrahimhashimi/">Sayed Ibrahim Hashimi</a> who creates a .NET Core 2.1 Razor web app using a list of emoji names and associated png files.

   <img align="right" alt="vs-mac-2019-types-129x386-4607.jpg" width="129" src="https://user-images.githubusercontent.com/300046/56392692-5608b500-61ef-11e9-8589-988622057ee2.jpg" />
0. Click "File" then "New Solution" (which is new Project).

   PROTIP: "Multiplatform", "iOS", "Android", "tvOS", and others for mobile or otherwise appear on the menu after load.

0. To work through the ".NET Core" sample, click "App", then "Web Application". Next. ".NET Core 2.2". Next. 

0. Name your project/solution in Location (projects folder).

0. Click "Use git for version control". This add a .gitignore file and .git folder.
0. Click "Create". ISSUE: If nothing happens and no error messages, click outside the pop-up dialog window to show.
0. Click to expand within the Solution pane.
   
   ![vs-mac-githubemojis-229x233-6624](https://user-images.githubusercontent.com/300046/56411948-c8a18100-623f-11e9-9442-bc1b226eed88.jpg)

   ### Run (Build) app

   In the folder Visual Studio generates files to populate content for a sample website to links about .NET.

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=1m13s">[1:14]</a> Click "Run" icon to build, using default dependencies settings.

0. Click "Yes" if you see "HTTPS development certificate is not trusted".

0. Click "OK" to dismiss the "Mono-sgen32 is not optimized" pop-up. This means that the app is built using a 32 (rather than 64) bit compiler, for which <a target="_blank" href="https://support.apple.com/en-gb/HT208436">Apple is ending support</a>, especially on macOS Mojave (10.14). Read more about it <a target="_blank" href="https://www.macworld.co.uk/feature/mac-software/not-optimized-mac-warning-3675674/">here</a>.

0. In your default internet browser should appear on its own:

   <a target="_blank" href="http://localhost:5001">http://localhost:5001</a>

   PROTIP: The port can be changed in Run > Run With > Custom Configuration > ASP.NET Core.

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=1m30s">[1:30]</a> Switch back to Visual Studio. Under Pages > Shared, customize the <strong>_Layout.cshtml</strong> file .

   <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=2m10s">[2:10]</a> Get rid of the &LT;environment&LT; sections bringing in Bootstrap</a> except for:
   
   <pre>&LT;link rel="stylesheet" href="~/css/site.css" /></pre>
   
   Replace "@ViewData["Title"] - GithubEmojis" generated with static text "Github Emojis".

   to end up code that contains this code:

   <pre>&LT;!DOCTYPE html>
&LT;html>
    &LT;head>
        &LT;meta charset="utf-8" />
        &LT;meta name="viewport" content="width=device-width, initial-scale=1.0" />
        &LT;title>Github Emojis</title>
            &LT;link rel="stylesheet" href="~/css/site.css" />
    &LT;/head>
    &LT;body>
        @RenderBody()
    &LT;/body>
&LT;/html>
   </pre>

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=3m8s">[3:08]</a> Right-click on the project "GitHubEmojis" to select Add > New File, name: "Emoji" (General Empty Class). Click New.

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=3m15s">[3:15]</a> In the code under "public class Emoji", in place of the "public Emojis()" fragment and type "prop" and Tab Tab for auto-complete, and edit to end up with:

   <pre>public string Key {
      get:
      set:
   }
   public string Url {
      get:
      set:
   }</pre>

0. To add the code that retrieves the list of emjoji codes and each rendered in a png file at <a target="_blank" href="https://api.github.com/emojis">https://api.github.com/emojis</a>, clone onto your laptop repository:

   git clone <a target="_blank" href="https://github.com/sayedihashimi/github-emojis">https://github.com/sayedihashimi/github-emojis</a>

   NOTE: This step is missing in the video.

0. Switch to Visual Studio to establish the target for receiving dragged files.

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=3m58s">[3:58]</a> In Finder, navigate in the "github-emojis" repo to file "GithubEmojiService.cs" and drag it into the <strong>GithubEmojis</strong> project (root) folder.

   The file should now be among the "Program.cs" file.

   <a target="_blank" href="https://github.com/wilsonmar/github-emojis/tree/master/GithubEmojis/GithubEmojis">https://github.com/wilsonmar/github-emojis/tree/master/GithubEmojis/GithubEmojis">

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=5m4s">[5:04]</a> To register the class as a service with .NET Core, create an interface by right-clicking on "GithubEmojiService" in the code and select <strong>Quick Fix</strong>, <strong>Extract Interface</strong>. Click "OK" to accept defaults, then click the red "X" to dismiss the pop-up dialog. You should now be at new file "IGithubEmojiService.cs".

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=5m34s">[5:34]</a> Return to file "GitHubEmojiService.cs" and right-click "IGithubEmojiService" to copy it and select "Go to Declaration".

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=5m39s">[5:39]</a> Return to file "GitHubEmojiService.cs" and right-click "IGithubEmojiService" to copy it to your Clipboard. Select "Go to Declaration". Edit file "Startup.cs" and at the location indicated type:

   <pre>services.AddSingleton&LT;IGithubEmojiService, GithubEmojiService>();</pre>

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=6m12s">[6:12]</a> In Pages, edit file <strong>Index.cshtml.cs</strong>. Under "PageModel", type to insert:

   <pre>private IGithubEmojiService _emojiService:
   public IndexModel(IGithubEmojiService emojiSvc) {
      _emojiService = emojiSvc;
   }</pre>

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=7m14s">[7:14]</a> Customize OnGet() method, add a property:

   <pre>public IList&LT;Emoji> Emojis {
      get:
      set:
   }
   public async Task OnGet() {
      Emojis = await _emojiService.GetEmojis();
   }</pre>

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=8m13s">[8:13]</a> Edit file <strong>index.cshtml</strong> to remove the line "ViewData" and all the &LT;div> lines from the boilerplate. Replace it with:

   <pre>&LT;div class="allEmojis">
      @foreach(var em in Model.Emojis) {
         &LT;div class="allEmojis">
            &LT;img src="@em.Url" alt="Emoji - @em.Key" width="128" height="128" /L>
            &LT;code>@em.Key&LT;/code>
         &LT;div>
      }</pre>

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=9m49s">[9:49]</a> Edit file <strong>index.cshtml</strong> to remove the line "ViewData" and all the &LT;div> lines from the boilerplate. Replace it by dragging and droping the repo downloaded within folder <strong>wwwroot/css</strong> folder the <strong>site.css</strong> file, with overwrite/replace.

0. File > Save All files changed.

0. Click Run.


   ### Git Version Control built-in

0. Add and commit changes using the Git version control features:

   ![vs-mac-2019-vc-222x329-7488](https://user-images.githubusercontent.com/300046/56392533-ec88a680-61ee-11e9-8b6c-0eddb9b22737.jpg)

   After you're done editing, you should have a set of files like the ones at <a target="_blank" href="https://github.com/sayedihashimi/github-emojis">https://github.com/sayedihashimi/github-emojis</a>

   Clone the repository and run it as the completed solution to this exercise.


<hr />

<a name="Cloud9"></a>

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
