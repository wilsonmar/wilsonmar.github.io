---
layout: post
date: "2022-10-20"
file: "text-editors"
title: "Text Editors (on the Mac)"
excerpt: "nano, pico, vim, subl, code, atom, Eclipse, IntelliJ, Visual Studio, Cloud9, etc."
tags: [apple, mac, setup]
image:
# feature: pic RichTextEditorToolBar 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622140/227572b0-0585-11e6-8d8c-55c1faa4fd68.jpg
  credit: MH Education
  creditlink: http://highered.mheducation.com/sites/0000065899/student_view0/question_editor/rich_text_editor_toolbar.html
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/text-editors">This</a> is a collection of notes of installing and using text editors for the Mac.

Below is a list of text editors grouped by licensing term:

## Built-in (comes with) macOS :

   * <a href="#nano">nano</a> is an open source clone of <a href="#pico">pico</a>.
   * <a href="#pico">pico</a> 
   * <a href="#vim">vim</a> (for mouse-free editing efficiency)

## Free to download and use :

   * <a href="#Code">Visual Studio Code</a> from Microsoft
   * <a href="#atom">Atom</a> from GitHub (free, built using GitHub's Electron)
   * <a target="_blank" href="http://brackets.io/">
   Adobe Brackets</a> is on Windows too
   * <a target="_blank" href="http://barebones.com/products/textwrangler/">
   http://barebones.com/products/textwrangler</a> is the
     little brother to BBEdit.
   * <a target="_blank" href="http://www.annedawson.net/Python_Editor_IDLE.htm">
   Python IDLE Editor</a>

   * <a href="#MacVim">MacVim</a> for Mac
   * <a target="_blank" href="https://neovim.io/">NeoVim</a> (<a target="_blank" href="https://neovim.io/doc/user/">nvim command</a>) supports Vimscript engine with Lua.

## Free IDEs :

   * <a href="#Code">Visual Studio Code</a> (from Microsoft)
   * <a href="#Eclipse">Eclipse</a> for Java
   * <a target="_blank" href="https://github.com/spyder-ide/spyder">Spyder</a> (for Python pyflakes and pylint code analysis)
   * <a target="_blank" href="https://www.jetbrains.com/go/">Gogland</a>, an IDE for Go from Jetbrains (makers of IntelliJ, PyCharm, etc.)
   * Aptana Studio
   * NetBeans

## Nagware :

Free to start, then pop-ups asking for money:

   * $89 <a href="#SublimeTextz">Sublime Text</a>
   * Texttastic
   * Byword 
   * (There is no equivalent of Windows Notepad++ on MacOS)

## Licensed IDEs :

   * IntelliJ for Java, WebStorm and PhpStorm, $200 PyCharm for Python. All from JetBrains
   * <a href="#VisualStudioForMac">Visual Studio 2019 for Mac from Microsoft</a> (ported from Visual Studio, which is licensed) for developing <a target="_blank" href="https://wilsonmar.github.io/xamarion/">Xamarin</a> and Unity apps in the C# language
   * $49.99 <a target="_blank" href="https://www.barebones.com/products/bbedit/">BBEdit</a> has a 30-day evaluation period.
   * <a target="_blank" href="https://www.activestate.com/products/komodo-ide/">multi-platform Komodo IDE</a> since 2018 is "free" as is part of an ActiveState Platform subscription. Its plug-ins are based on Mozilla add-ons such as a DOM Inspector.

## On-line (SaaS) :

Browser-based subscriptions avoids need for setup and makes collaboration easier:

   * <a href="#Cloud9">Cloud9 from Amazon</a> runs in an EC2 instance to provide a debugger and terminal to various dev environments for AWS Lambda serverless, CodeStar, CodeBuild, CodePipeline, etc.

   * <a target="_blank" href="https://www.gitpod.io/">gitpod.io</a> is a Chrome add-on which replaces the green "Clone or download" button with their "Gitpod" button to an on-line IDE in the cloud and automation.

   * <a target="_blank" href="https://www.snaplogic.com/">SnapLogic</a>

## Not for MacOS :

For installation on Windows or Linux only:

   * <a href="#Lite">Lite</a>
   * Notepad++

   
<hr />

<a name="Features"></a>

## Features #

* Full project navigation from buttons, menus,

Intelligent adaptation depending on type of format (Markdown, Java, Bash, etc.):
   * Display 
   * syntax coloring for numerous source code languages
   * Code completion
   * Code folding

* search and replace across multiple files
* grep pattern matching
* search and replace across multiple files
* Refactoring (renaming) support

* Pre-compile on the fly
* Static code scan on the fly
* Debugging with breakpoints, step into, etc.

* Sublime Text Keymap if you're used to Sublime's keys.

Themes:
   * The "Shades of Purple" theme in VSCode presents markdown commands in a less visible color than main Moutext.
   * <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night">Tokyo Night theme</a>

* <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms-vsts.team">Azure Repos</a> to connect to Azure DevOps Services and Team Foundation Server supportkng Team Foundation Version Control (TFVC). 

<hr />

## Configuration

To make IDE clean of distractions, override these default settings:

* To recover space to see wider lines, disable file content "mini map" (preview) at the right side:

   Click the Settings icon (at the lower left). In the settings search bar type "minimap". Uncheck "Controls whether the minimap is shown."

* Hide the status bars on the top and bottom:

   In View menu, select Appearance, unselect "Show Status Bar".  

* Hide the file explorer:

   Press command+B on or and ctrl+B on Windows.

* Hide line numbers:

   Create a shortcut per https://github.com/Microsoft/vscode/issues/52735

* Set custom theme, font size and line-height using the more visually pleasant <strong>golden ratio</strong>.

* Disable tabs, because it’s hard to remember if you have the file opened in tab and switching between tabs takes time.

* Install and use Emmet automation?


<a name="LastLine"></a>

## Save Last Line with Carriage Return #

Linters such as Flake8 look for an otherwise invisible end-of-line character in the last line,
carried forward from a <a target="_blank" href="http://gcc.gnu.org/ml/gcc/2003-11/msg01568.html">
legacy specification for the C language</a>.

<a target="_blank" href="https://thoughtbot.com/blog/no-newline-at-end-of-file">
PROTIP</a>: Configure your text editor to automatically add it when the file is saved
to avoid having it flagged.

For Vim users, you’re all set out of the box! Just don’t change your eol (end of line) setting.

For Emacs users, add (setq require-final-newline t) to your .emacs or .emacs.d/init.el file.

For Android Studio, RubyMine, PyCharm, and other IntelliJ, set “Ensure line feed at file end on Save” under “Editor.”

For Atom, you’re also all set out of the box. Keep that via the Whitespace plugin.

For VS Code, set <tt>"files.insertFinalNewline": true</tt>.

For Sublime, set the <tt>ensure_newline_at_eof_on_save</tt> option to true.

For TextMate, you can install the Avian Missing Bundle and add TM_STRIP_WHITESPACE_ON_SAVE = true to your .tm_properties file.


<a name="Code"></a>

## Visual Studio Code #

Microsoft's Visual Studio Code (VSCode)'s core engine is built using GitHub's Electron for multi-plantform (Mac, Windows, etc.) as open-source <a target="_blank" href="https://microsoft.github.io/monaco-editor">Monacle Editor</a>. 

PROTIP: VSCode is slower to startup than Sublime Text.

But VSCode's windowing is much more configurable, which has enabled many add-ons.
This has made VSCode the most feature-rich and thus most preferred editor today. 

Ahmad Awais, <a target="_blank" href="https://www.youtube.com/watch?v=M6E5L1-TVoc">VIDEO</a>
VSCode Power User Tips & Tricks</a> 
                                                                                                                                                                                                                                                                                                          

### Install

1. Open a Mac Terminal
1. Install the GUI program using Homebrew:

   <tt><strong>brew install --cask visual-studio-code
   </strong></tt>

1. Navigate to a folder.
1. To open VSCode with a list of files in the folder, type code and a dot:

   <tt><strong>code .
   </strong></tt>

   Alternately, to open Code from the Mac Finder, <strong>right-click</strong> on a folder
   and select <strong>Open with</strong> Visual Studio Code, <a target="_blank" href="http://stackoverflow.com/questions/30159158/how-do-i-set-up-a-link-to-open-up-visual-studio-code-from-terminal-on-osx">
   per these instructions</a>

0. Exit the Code program.

0. In a new Terminal shell window, use the code command to open a specific file:

   <tt><strong>code hello
   </strong></tt>

   BTW, "hello" in the example above can be any file.

   ### Basic UI

1. Uncheck "Show welcome page on startup".

1. To toggle sidebar visibility, press command+B.

1. To see keyboard shortcuts, click command+K then command+S.

1. Click inside the Search box on the upper-right.

   ### Search Extension on website

Examples of advanced features:
   * moving the default sidebar to the right side of the editor.
   * auto-indenting and execution of snippets work naturally.
   * Syntax Highlighting
   * IntelliSense
   * Go to Definition
   * Find All References
   * Multi-Refactoring
   <br /><br />

Its <a target="_blank" href="https://www.hanselman.com/blog/VisualStudioCodeRemoteDevelopmentMayChangeEverything.aspx">Remote Development mode</a> means that rather than RDP or SSH into a remote machine, there is a client part on your machine and a "VS Code Server" basically running anywhere else. VSCode knows to enable that when it sees a "dev container configuration file" in a GitHub repository. All that's enabled by installing the <a target="_blank" href="https://aka.ms/vscode-remote/download/extension">extension pack</a>. 

1. <a target="_blank" href="https://channel9.msdn.com/Blogs/dotnet/Get-started-VSCode-Csharp-NET-Core-Windows">VIDEO:</a> Search for VSCode extensions at <a target="_blank" href="https://marketplace.visualstudio.com/vscode">https://marketplace.visualstudio.com/vscode</a>by opening its Extension panel (CTRL + Shift + X). See <a target="_blank" href="https://nickjanetakis.com/blog/switching-to-vscode-from-sublime-text">Nick's list</a>.

1. Select "Sort by: Downloads" to see that C# is the most downloaded.

   https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp

1. If you click on a logo, then "Install" on the next page.

   ### Extensions in VSCode

1. Open Visual Studio Code.
1. Press Command-P for the Command Pallette.
1. Enter "ext install csharp" on top of "Type '?' to get help on the actions you can take from here" if you want to install C# editor helpers.

   Notice you're brought to the list of extensions as if you clicked the square icon on the left menu. Extensions installed have a gear icon rather than "install".

1. Click the top editor icon on the left menu.

1. Click "Restart Now" for it to take.
 
   <a target="_blank" href="https://www.monodevelop.com/download/">https://www.monodevelop.com/download/</a>


   ### PowerShell extension for VSCode

   <a target="_blank" href="https://www.youtube.com/watch?v=LJNdK0QrIo8">
   Setting up Visual Studio Code for PowerShell Development</a>
   <a target="_blank" href="https://github.com/PowerShell/vscode-powershell">https://github.com/PowerShell/vscode-powershell</a>

   ### TypeScript settings.json

   PROTIP: Microsoft wrote Visual Studio Code using the TypeScript programming language, which released as an open-source project in 2012. See <a target="_blank" href="https://www.typescriptlang.org/play/index.html">typescriptlang.org/play/</a>. TypeScript syntax is a "superset" of JavaScript. So valid JavaScript is also valid TypeScript. TypeScript transpiles (compiles) to JavaScript (by the tsc program).

   VSCode is configured by specifications in file <tt>settings.json</tt>. On a Mac, it's in folder 
   <tt>/Users/.../Library/Application Support/Code/User/settings.json</tt> (where the ... is your user name).

   On Windows, "typescriot.tsdk" "/Users/.../AppData/Roaming/npm/node_modules/types".

   For Git users:

   <tt>"git.enableSmartCommit": true,</tt>

   <tt>"git.confirmSync": false,</tt>


   ### JavaScript Extension

1. If you're working with JavaScript, install it from the Welcome screen, reached from Help, Welcome.

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


### Other Extensions

Emmet to add smart auto-completion suggestions to html editing.
comes with VSCode.

"Live Server" to Launch a development local Server with live reload feature for static & dynamic pages. It automatically refreshes browser when changes are detected in files. 

<a target="_blank" href="https://tutorialzine.com/2017/06/15-essential-plugins-for-visual-studio-code">
15 Essential Plugins for Visual Studio Code</a> June 27, 2017

* https://marketplace.visualstudio.com/items?itemName=antfu.icons-carbon
provides a cooler set of Product/logo icons for VSCode to display next to each file.

* https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces

* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
Integrates ESLint JavaScript into VS Code.

* https://marketplace.visualstudio.com/items?itemName=chuckjonas.apex-pmd
PMD static analysis for Salesforce Apex

* https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode
Extensions for developing on the Salesforce Platform

* https://gitlab.com/terja/sfdx-git

* https://medium.com/productivedev/toward-a-mouse-free-developer-experience-in-vscode-97e621d5136e
   covers Install Vim extension for VSCode.

* https://dev.to/5t3ph/how-i-set-up-vscode-for-recording-a-screencast-be7
   by Stephanie Eckles at Egghead/now Microsoft

* https://mrsauravsahu.medium.com/custom-vscode-profiles-migrating-settings-and-extensions-14a5f8f4da35
   VSCode Profiles


### Tutorials on VSCode

Perhaps the most intensive tutorial is <a target="_blank" href="https://realpython.com/courses/python-development-visual-studio-code-setup-guide/">the Setup Guid from RealPython</a>

<a target="_blank" href="http://michaelcrump.net/using-github-with-visualstudio-code/">Using GitHub, by Michael Crump</a>

<a target="_blank" href="https://code.visualstudio.com/docs/editor/versioncontrol">Version Control in VS Code</a>

<a target="_blank" href="https://www.youtube.com/watch?v=UcW1FHNvy8M">VIDEO: Supercharge Your JavaScript Debugging Workflow With VS Code</a>

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


<hr />



<a name="Cloud9"></a>

## Cloud9 IDE in EC2

<a target="_blank" href="https://aws.amazon.com/cloud9/">Cloud9 from Amazon</a> (under the Developer Tools category) works completely in the browser running in EC2  (for money) under the hood.
It was <a target="_blank" href="https://www.youtube.com/watch?v=FvclLeg2vEQ">announced at AWS re:Invent in November 2017</a>. 

It includes a debugger and terminal to various dev environments for AWS <a target="_blank" href="https://docs.aws.amazon.com/cloud9/latest/user-guide/lightsail-instances.html">Lightsail</a>, Lambda serverless, <a target="_blank" href="https://docs.aws.amazon.com/cloud9/latest/user-guide/codestar-projects.html">CodeStar</a>, CodeBuild, CodePipeline, etc. 

<a target="_blank" href="https://docs.aws.amazon.com/cloud9/latest/user-guide/get-started.html?icmpid=docs_ac9_console">AWS Get started docs</a>
   provides a procedure for each usage pattern.

1. PROTIP: Search for "Cloud9" in <a target="_blank" href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/">this page</a>
   to see whether it's available in your preferred region.

1. Get an Amazon AWS account login and in IAM (AWS Identity and Access Management) set rights so you sign in as an administrator user of your AWS account.

1. Open the AWS Cloud9 console at 

   <a target="_blank" href="https://console.aws.amazon.com/cloud9/">https://console.aws.amazon.com/cloud9</a>

1. <a target="_blank" href="https://docs.aws.amazon.com/cloud9/latest/user-guide/create-environment.html">Create a dev environment</a> in EC2 instance (which costs money).

   PROTIP: As of this writing, you can only use code to create an EC2 environment that is connected to Amazon Linux (not Ubuntu or other distros).

   ![text-editor-cloud9-menu-bar-623x358-20606](https://user-images.githubusercontent.com/300046/57779446-56f41000-76e3-11e9-9615-670153fca872.jpg)

1. Configure using Key bindings from various other editors.
   Terminal, Git, NVM, Python, are pre-installed.

1. <a target="_blank" href="https://docs.aws.amazon.com/cloud9/latest/user-guide/tutorial.html">Use the IDE</a> to create or edit code.

1. Pull from or push code to <a target="_blank" href="https://docs.aws.amazon.com/cloud9/latest/user-guide/sample-github.html">GitHub</a> or <a target="_blank" href="https://docs.aws.amazon.com/cloud9/latest/user-guide/sample-codecommit.html">AWS CodeCommit</a>.

   <a target="_blank" href="https://acloud.guru/series/release-review/view/105">ACloud.guru course reviewed</a> using <a target="_blank" href="https://github.com/ACloudGuru/acg-rr-cloud9">https://github.com/ACloudGuru/acg-rr-cloud9</a>

1. Use AWS Resources tab for Lambda and Gateway integration.
 
   https://docs.aws.amazon.com/cloud9/latest/user-guide/tutorial-lambda.html

1. <a target="_blank" href="https://docs.aws.amazon.com/cloud9/latest/user-guide/share-environment.html">Working with others in a Shared Environment</a>

1. It auto-hibernates, but CAUTION: Do your own backups.

* https://aws.amazon.com/blogs/mt/using-aws-cloud9-aws-codecommit-and-troposphere-to-author-aws-cloudformation-templates/

<hr />

<a name="nano"></a>
<a name="pico"></a>

## pico and nano

The user interface of nano and pico are identical because they were both developed by the University of Washington. nano is an open source clone of pico.

According to <a target="_blank" href="https://en.wikipedia.org/wiki/Pico_%28text_editor%29">
Wikipedia</a>, pico stands for "pine composer".

pico became well known and popular because it was the default editor used with the pine e-mail client (an easy-to-use text based e-mail client popular when early internet users sent e-mail messages only in plain text data using slow dial-up modems).

The <strong>^</strong> character in the menu means hold down the Mac <strong>control</strong> key while you press the character.

![pico menu 75](https://cloud.githubusercontent.com/assets/300046/15268678/21302782-19a4-11e6-9f8d-873c5a3073e4.jpg)

nano is easy to use for some beginners. 
However, it lacks the advanced features of vim and emacs. 


<hr />

<a name="vim"></a>

## Vim

The original vi (VIsual editor) was developed in 1976 as part of the BSD Unix system (by Bill Joy, who went on to be one of the co-founders of Sun Microsystems which Oracle later purchased). 

vi is still the standard text editor available on many Unix and Linux system distributions. 

A good reason to become proficient with vi is that vi/vim may be the only editor available on some industrial systems where no extra software can be installed.

vi became popular within the Unix community for its full screen visual editing not available before. 

vim is vi plus the m from the word "improved" because Vim is functionally a superset of vi.

The newer vim and gvim, the graphical (XWindows) vim, adds many productivity features to vi:

   * multi-level undo (J command) and redo
   * Split screen
   * Edit files inside zip files
   * Diff to compare files
   * Plug-ins
   * edit through SSH
   <br /><br />

Nevertheless, some still use "old-school" vi because Vim ignores control characters in headers and formatting, which can break scripts - especially files from Windows computers. Using vi provides full control of the exact contents of files being edited.

*nix operating sytems end each line with a line-feed (LF) character.
Windows end each line with a carriage-return and line-feed character.

In vim, use <tt>:set ff=unix</tt> to convert to Unix and
and <tt>:set ff=dos</tt> to convert to Windows.

   <a target="_blank" href="http://vimdoc.sourceforge.net/htmldoc/">Vim documentation is at http://vimdoc.sourceforge.net/htmldoc</a>

   See <a target="_blank" href="https://www.vimawesome.com/">vimawesome.com</a>

### Customizations

1. To set your default editor to vim, add

   <pre>echo "export EDITOR=/usr/bin/vim" >> ~/.bashrc</pre>

1. Open examples to customizations of vim user experience to paste in hidden file <tt>$HOME/.vimrc</tt> which vim looks for when it loads.

   <pre>vim /usr/share/vim/vim80/vimrc_example.vim
   </pre>

1. Define your customizations of vim user experience. Examples of an abbreviation:

   <pre>set bg=dark ai tabstop=2 expandtab
abbr _bash #!/bin/bash&LT;CR>
   </pre>

1. Navigate to the folder desired or specify the parent folder when referencing the file name to be edited:

   <pre><strong>vim ../sample_file</strong></pre>

1. To open to the first occurance of "alias" in the file executed automatically when opening a command-line Terminal:

   <pre><strong>vim +/alias ~/.bash_profile
   </strong></pre>

1. To open file and put cursor at line 5:

   <pre><strong>vim +5 ~/.bash_profile
   </strong></pre>

   ### Modes

   Instead of mouse and cursor operating separately, in vim you toggle among <strong>modes</strong>:

   * Press i for <strong>insert mode</strong> to edit the file (automatically making room by moving the remainder of the line over as you type)
   * Press Esc for <strong>line (normal) mode</strong> to navigate within the file and manipulate text
   * visual mode to highlight portions of text to manipulate with single commands
   * <a href="#CommandMode">ex (command) mode</a>
   <br /><br />


   ### Esc = caps lock

1. To exit command mode, press "Esc" key.

   ![vi-esc-alien](https://user-images.githubusercontent.com/300046/89724350-3b97b380-d9bf-11ea-8528-92879a6500b7.png)

   PROTIP: Many configure the "caps lock" key to act as the less easy to reach Esc key.


   <a name="ViIndent"></a>

   ### Indenting within vi

1. If you're using the vi client rather than a web page, in insert mode, Ctrl-T indents the current line, and Ctrl-D unindents.

   When indenting or unindenting, lines are shifted one 'shiftwidth' to the right or left.

   If you're on a web browser:

1. If you’re copying blocks of text around and need to align the indent of a block in its new location, to automatically align the pasted block with the surrounding text, 

   use <tt>]p</tt> to paste instead of just <tt>p</tt>.

   After pasting:

1. Indent 5 lines at and below the cursor:

   <tt>5>></tt>

   <tt>3<<</tt> to un-dent (shift left)

1. For all commands, pressing . (period) repeats the operation.   

   Typing <tt>5>>..</tt> shifts five lines to the right, and then repeats the operation twice so that the five lines are shifted three times.

1. To mark a block of lines and indent it, <tt>Vjj></td> to indent three lines (Vim only). 

   To indent a curly-braces block, put your cursor on one of the curly braces and use <tt>>%</tt>.
   Alternately, from anywhere inside block use <tt>>iB</tt>.

   Beyond the test: Install Vscode and IntelliJ extensions for formatting YAML files.
   To indent multiple lines at a time.

1. To adjust the indent on three lines, put the cursor anywhere in the first line:

   Press V then jj to visually select the three lines.

   Press > to indent (shift text one 'shiftwidth' to the right), or press < to shift left.

   Press . to repeat the indent, or u to undo if you have shifted too far.

   Type <tt>gv</tt> if you want to reselect the lines (not needed).

   Type >2j to shift right or <2j to shift left.

   <tt>>}</tt> to indent from the cursor to the next blank line, or 

   <tt><aB</tt> to un-indent the current C-like {...} "block" structure.



   ### vi/vim cheatsheets

   PROTIP: People use vim so that they can keep their eyes on the screen and hands on the keyboard rather than reaching for the mouse. This means memorizing the meaning of many keystrokes.

   Keep handy this cheatsheet of Vim keybindings: <a target="_blank" href="http://vimsheet.com/">http://vimsheet.com</a>

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/41471886-08e73d56-7072-11e8-8294-8dccce320337.gif"><img alt="editors-vi-vim-cheat-sheet-1024x724.gif" width="1024" src="https://user-images.githubusercontent.com/300046/41471886-08e73d56-7072-11e8-8294-8dccce320337.gif"></a>

   A Cheat Sheet sorted by operation at <a target="_blank" href="https://devhints.io/vim">https://devhints.io/vim</a>


   ### Openvim simulator

   <a target="_blank" href="https://openvim.com/">openvim.com</a> is a web-based hands-on vim simulator that provides a step-by-step guided tour.

   ### Vimtutor

1. In a Terminal, for an interactive tutorial, type command:

   <pre><strong>vimtutor
   </strong></pre>

   The response is "Press ENTER or type command to continue"

0. Press Enter as requested.

0. Press : to enter line mode.

   PROTIP: Most of the time when you see a colon at the lower-left corner,
   it's saying just press a key for a command, such as q to quit out.

0. Press q to quit out.


   VIDEO: <a target="_blank" href="https://www.twitch.tv/theprimeagen">
   theprimeagen on Twitch</a> shows his vim skills live.


   <a name="CommandMode"></a>
   
   ### Command mode keys
   
   While in command mode, cursor to a position in the document:

   * type `set number` to toggle numbering on the left edge.
   * type `set invnumber` to toggle inverse numbering backwards.

   * type G to go to beginning of file.
   * type shift+G to go to end of file.
   * type 5GG to go to line (the command won't appear)

   * press X to delete a character.

   * type i to enter insert mode at the cursor.
   * type I to enter insert mode at the front of the line.
   * type o to insert new line below current position.
   * type O to insert new line above current position.

   * type v to visually select

   * type v to visually select.
   * type d to delete (cut) single character.
   * type c to change (delete, then place in insert mode)
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
   <br /><br />

   To save a file in Vim that you’ve already edited, yet need escalated privileges to save, use <tt>:w !sudo tee %</tt>

   `:w` writes the file; specifically, it writes it to sudo tee %, wherein tee directs the output of our file write to %. `%` stands for the current file. Of course, the sudo provides the privilege escalation we need.

   <em>(from <a target="_blank" href="https://linuxacademy.com/blog/linux-academy/employee-spotlight-elle-krout-course-author/">Elle Krout at LinuxAcademy.com</a>)</em>

### Video Tutorials

<a target="_blank" href="https://egghead.io/courses/learn-to-use-vim">Learn to use Vim</a>

<a target="_blank" href="https://egghead.io/lessons/misc-intro-to-vim">Intro to Vim</a> by Mike Hartington:

   * <a target="_blank" href="https://egghead.io/lessons/misc-moving-around-in-vim">Moving around in Vim</a>
   * <a target="_blank" href="https://egghead.io/lessons/misc-vim-s-built-in-commands">Vim's different modes</a>
   * <a target="_blank" href="https://egghead.io/lessons/misc-saving-files-in-vim">Saving Files in Vim</a>
   * <a target="_blank" href="https://egghead.io/lessons/misc-vim-s-built-in-commands">Vim's built-in commands</a>
   * <a target="_blank" href="https://egghead.io/lessons/misc-combining-vim-commands">Combining Vim commands</a>
   * <a target="_blank" href="https://egghead.io/lessons/misc-copy-and-paste-inside-of-vim">Copy and Paste inside of Vim</a>
   * <a target="_blank" href="https://egghead.io/lessons/misc-configure-vim">Configure Vim</a>
   * <a target="_blank" href="https://egghead.io/lessons/misc-the-vim-config-file">The Vim Config file</a>
   * <a target="_blank" href="https://egghead.io/lessons/misc-introduction-to-vim-plugins">Introduction to Vim Plugins</a>
   <br /><br />

<a name="MacVim"></a>

## MacVim

MacVim is a GUI app for macOS modeled after the <a href="#vim">vim text editor</a>.

   <pre><strong>brew install macvim
   </strong></pre>

<pre>
==> Installing dependencies for macvim: cscope, lua and ruby
==> Installing macvim dependency: cscope
==> Downloading https://homebrew.bintray.com/bottles/cscope-15.9.mojave.bottle.t
######################################################################## 100.0%
==> Pouring cscope-15.9.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/cscope/15.9: 11 files, 711.6KB
==> Installing macvim dependency: lua
==> Downloading https://homebrew.bintray.com/bottles/lua-5.3.5_1.mojave.bottle.t
######################################################################## 100.0%
==> Pouring lua-5.3.5_1.mojave.bottle.tar.gz
==> Caveats
You may also want luarocks:
  brew install luarocks
==> Summary
🍺  /usr/local/Cellar/lua/5.3.5_1: 28 files, 274.5KB
==> Installing macvim dependency: ruby
==> Downloading https://homebrew.bintray.com/bottles/ruby-2.6.5.mojave.bottle.1.
==> Downloading from https://akamai.bintray.com/da/da318a12d35502d95a8bea49f735b
######################################################################## 100.0%
==> Pouring ruby-2.6.5.mojave.bottle.1.tar.gz
==> Caveats
By default, binaries installed by gem will be placed into:
  /usr/local/lib/ruby/gems/2.6.0/bin
&nbsp;
You may want to add this to your PATH.
&nbsp;
ruby is keg-only, which means it was not symlinked into /usr/local,
because macOS already provides this software and installing another version in
parallel can cause all kinds of trouble.
&nbsp;
If you need to have ruby first in your PATH run:
  echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
&nbsp;
For compilers to find ruby you may need to set:
  export LDFLAGS="-L/usr/local/opt/ruby/lib"
  export CPPFLAGS="-I/usr/local/opt/ruby/include"
&nbsp;
For pkg-config to find ruby you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/ruby/lib/pkgconfig"
&nbsp;
==> Summary
🍺  /usr/local/Cellar/ruby/2.6.5: 19,390 files, 31.1MB
==> Installing macvim
==> Downloading https://homebrew.bintray.com/bottles/macvim-8.1-161.mojave.bottl
==> Downloading from https://akamai.bintray.com/8b/8b49227432024454492a07e6259f6
######################################################################## 100.0%
==> Pouring macvim-8.1-161.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/macvim/8.1-161: 2,251 files, 38.0MB
==> Caveats
==> lua
You may also want luarocks:
  brew install luarocks
==> ruby
By default, binaries installed by gem will be placed into:
  /usr/local/lib/ruby/gems/2.6.0/bin
&nbsp;
You may want to add this to your PATH.
&nbsp;
ruby is keg-only, which means it was not symlinked into /usr/local,
because macOS already provides this software and installing another version in
parallel can cause all kinds of trouble.
&nbsp;
If you need to have ruby first in your PATH run:
  echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
&nbsp;
For compilers to find ruby you may need to set:
  export LDFLAGS="-L/usr/local/opt/ruby/lib"
  export CPPFLAGS="-I/usr/local/opt/ruby/include"
&nbsp;
For pkg-config to find ruby you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/ruby/lib/pkgconfig"
   </pre>

Alternately, install using the manual approach: 

1. Download the binary release from:

   <a target="_blank" href="http://macvim-dev.github.io/macvim/">http://macvim-dev.github.io/macvim</a> or the .dmg file from <a target="_blank" href="https://github.com/macvim-dev/macvim/releases">https://github.com/macvim-dev/macvim/releases</a>

2. Expand archive
3. Move MacVim.app into folder /Applications/.

Alternately, use Homebrew:

1. Run <pre>brew install vim</pre>
2. Run <pre>brew install macvim</pre>
3. Run <pre>brew link macvim</pre>


<a name="Emacs"></a>

## Emacs

emacs was developed in 1976 by then 23-year old MIT and Harvard grad <a target="_blank" href="https://en.wikipedia.org/wiki/Richard_Stallman">Richard Stallman</a>, now well known as the developer of gcc (open source C compiler) and the founder of the <a target="_blank" href="https://www.gnu.org/software/software.en.html">GNU Free Software Foundation</a>. 

Emacs has, perhaps, more manual editing commands than other editors, numbering over 1,000 commands. 

Some jokingly referred to emacs as the "Carpal Tunnel editor", since most of the commands in emacs are accesses by typing multiple keys on the keyboard at the same time.

But Emacs users can define macros that combine commands. 

https://vim-adventures.com/


Spacemacs, a community driven distro of Emacs, attempts to address some of Emacs more complex keybindings by adopting much of Vim’s keyboard layout and editing modes.


<a id="SublimeTextz"></a>

## Sublime Text

Many tutorials make use of this tool from Jon Skinner.

Sublime Text 4 is now available.
(Previously, there were two simultaneous production versions of Sublime Text: 2 and 3.
This is because Sublime contains its own Python interpreter to run add-ons.)


### Download and Install Sublime Text

There is no brew install for Sublime Text.
 
1. <a target="_blank" href="https://www.sublimetext.com/">https://www.sublimetext.com/</a>

1. Expanded explanations for various platforms:

   * http://docs.sublimetext.info/en/latest/getting_started/install.html

   * On Linux: https://github.com/TCattd/sublime-text-linux-installer

1. The zip file is downloaded to your Downloads folder. Clever.
1. Switch to Finder. Navigate to /Applications folder. 
1. Drag and drop the "Sublime Text.app" into the /Applications folder.


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

### Smart title capitalization shortcut

<a target="_blank" href="http://www.geekgonenomad.com/code/title-capitalization-in-sublimetext/">*</a>
To install the https://github.com/mattstevens/sublime-titlecase
in SublimeText 3, click SublimeText -> Preferences -> Key Bindings User, and add this line to the file:

   <pre>{ "keys": ["super+shift+t"], "command": "smart_title_case" }</pre>

Restart SublimeText.


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

<a target="_blank" href="http://docs.sublimetext.info/en/sublime-text-3/customization/settings.html">Customization Settings</a>

<a target="_blank" href="https://egghead.io/lessons/use-sublime-text-snippets-to-avoid-repetitive-typing">VIDEO: Use Sublime Text Snippets to Avoid Repetitive Typing</a>

<hr />

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
   brew install --cask eclipse-java
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



<a name="VisualStudioForMac"></a>

## Visual Studio for Mac #

0. If you type "https://visualstudio.com" (the previous URL) you are redirected to:
   <a target="_blank" href="https://visualstudio.microsoft.com/">https://visualstudio.microsoft.com</a>

   * "Visual Studio Code" is free software for both Windows and Macs. It is used to develop code in NodeJs, Python, SQL, etc.

   * <a target="_blank" href="https://visualstudio.microsoft.com/vs/mac/#vs_mac_table">Only "Visual Studio for Windows"</a> can be used to develop WPF, Windows Forms, UWP, and Desktop/mobile apps using C++. It is licensed (costs money).

   * <a target="_blank" href="https://visualstudio.microsoft.com/vs/mac/">"Visual Studio for Mac</a> is used only to develop code in JavaScript/Typescript, and <strong>cannot be used to develop code in NodeJs, Python, SQL</strong>. It contains features of the previous "Xamarin Studio" to develop apps and games for iOS, Android, and web using .NET.

   * <a target="_blank" href="https://visualstudio.microsoft.com/vs/community/">Visual Studio for Mac -- Community Edition"</a> is FREE software "for students, open-source and individual developers".

   * <a target="_blank" href="https://visualstudio.microsoft.com/vs/professional/">Visual Studio for Mac -- Professional Edition"</a> costs $45/month, but a $50/month Azure credit. 

   Both Professional and Enterpise comes with licenses for Azure DevOps Basic + Test Plan and GitHub Enterprise.

   Using Visual Studio to develop <a target="_blank" href="https://visualstudio.microsoft.com/vs/mac/unity/">C# with the Unity 3D IDE</a> requires an aditional license for Unity.

   * <a target="_blank" href="https://visualstudio.microsoft.com/vs/enterprise/">Visual Studio for Mac -- Enterprise Edition"</a> costs $250/month but $150/month Azure credit. <a target="_blank" href="https://visualstudio.microsoft.com/vs/compare/">Enterprise Edition adds</a> Power BI Pro, Live Dependency Validation, Snapshot Debugger, Time Travel Debugging, Fakes, Code Coverage, IntelliTest, IntelliTrace, Code Map Debugger Integration,  .NET Memory Dump Analysis, Xamarin Inspector, Xamarin Profiler</a>.
   <br /><br />

   ### Enterprise features

   Microsoft's Visual Studio (not the free Visual Studio Code, the client IDE) has an <a target="_blank" href="https://visualstudio.microsoft.com/vs/compare/">Enterprise level subscription which provides</a>:

   * Live Dependency Validation
   * Architectural Layer Diagrams
   * Architectural Validation
   <br /><br />

   Advanced Debugging and Diagnostics:
   * IntelliTrace
   * Code Clone
   * Code Map Debugger Integration
   * .NET Memory Dump Analysis
   * Snapshot Debugger
   * Time Travel Debugging (Preview)
   <br /><br />
   
   Testing:
   * IntelliTest
   * Live Unit Testing
   * Microsoft Fakes (Unit Test Isolation)
   * Code Coverage
   <br /><br />

   Cross-platform:
   * Embedded Assemblies
   * Xamarin Inspector, Profiler   
   <br /><br />



PROTIP: Ignore videos which are NOT applicable to the current "2019" version:
   * <a target="_blank" href="https://www.youtube.com/watch?v=DS4zGjyo4Zs">VIDEO: Install when it was in Preview</a>  Jan 10, 2019.
   * <a target="_blank" href="https://www.youtube.com/watch?v=jUiuIAZt6Dw">Using Git with Visual Studio</a> Apr 7, 2017
   * <a target="_blank" href="https://channel9.msdn.com/Shows/XamarinShow/Snack-Pack-12-Getting-Started-with-Visual-Studio-for-Mac">VIDEO: Snack Pack 12: Getting Started with Visual Studio 2017 for Mac</a> May 31, 2017 by James Montemagno (<a target="_blank" href="http://twitter.com/jamesmontemagno">@jamesmontemagno</a>). which covers mobile development as well.
   <br /><br />

The following was written after <a target="_blank" href="https://devblogs.microsoft.com/visualstudio/visual-studio-2019-for-mac-is-now-available/">April 9, 2019 release</a>.

1. See <a target="_blank" href="https://wilsonmar.github.io/xcode/">https://wilsonmar.github.io/xcode</a> to install Apple's <strong>XCode</strong>.

   <a target="_blank" href="https://github.com/MicrosoftDocs/visualstudio-docs">https://github.com/MicrosoftDocs/visualstudio-docs</a> contains source files for the Visual Studio technical documentation published on docs.microsoft.com.

1. PROTIP: I recommend using Homebrew for silent (no clicking) install and automatic upgrade:

   <pre><strong>brew install --cask visual-studio
   </strong></pre>

   This installs to Homebrew's folders so that no admin privileges are needed.

However, if you insist on following Microsoft's instructions: click "Download Visual Studio for Mac" and select "Community 2019 for Mac".

1. Click "Save" on the pop-up to download <strong>visualstudioformacinstaller.dmg</strong>:

   * 31.6 MB for 2019
   * 22.8 MB for preview
   <br /><br />

   PROTIP: <a target="_blank" href="https://www.wikiwand.com/en/Microsoft_Visual_Studio">The 2019 version is also called "v16" behind the scenes.</a>

1. Rename the installer with a suffix such as 
   "vsstudioformac_CE_2019.dmg". 

   <img align="right" alt="vs-mac-install-logo-263x303-8462" width="132" src="https://user-images.githubusercontent.com/300046/56370993-7e75bc80-61b9-11e9-8bf7-87e514e3e6db.jpg">

1. In Finder, double-click on the .dmg file to open with the "DiskImageMounter".

   Wait for the logo to appear.

   This logo (without the green) is the logo for the Visual Studio 3019 for Mac app on macOS.

   There is a different logo for the previous 2017 version.

1. Click the logo that appears.
1. Click Open for the "Visual Studio for Mac Installer" to appear.
1. Click "Continue" in the "Thank you for downloading".
   * 8.0.3

   ![vs-mac-install-internet-484x162](https://user-images.githubusercontent.com/300046/56370860-3d7da800-61b9-11e9-9b13-de8dcaa58077.jpg)

1. Uncheck or check what type of apps you want to develop.

   ![vs-mac-install-options-447x297-9602](https://user-images.githubusercontent.com/300046/56370758-0f986380-61b9-11e9-869f-2bea9b6975d2.jpg)

1. Click "Install and Update". 
1. While you wait many minutes for the downloading:

   Sign up for <a target="_blank" href="https://www.linkedin.com/learning/">LinkedIn Learning</a> video tutorials.

   Sign up for <a target="_blank" href="https://www.datacamp.com/">https://www.datacamp.com/</a> to learn Data Science

   Download <a target="_blank" href="https://github.com/aspnet/AspNetCore.Docs/tree/master/aspnetcore/tutorials/razor-pages/razor-pages-start/2.2-stage-samples">sample application code</a> for sample <a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-2.2&tabs=visual-studio">.NET Core 2.2 Razor pages</a>

1. Switch to Finder, system "/Applications" folder and notice there is, at time of writing:

   "Visual Studio.app" of 1.55 GB and<br />
   "Xamarine Profiler.app" of 93.6 MB.

1. Navigate to your <strong>Projects</strong> folder and drag it to the Finder's left Navigatin pane, for easy access.

1. On the Mac's Touchpad, spread 4 finger together at the same time to see that Powershell has been installed as well.

   ![vs-mac-icons-413x105-5443](https://user-images.githubusercontent.com/300046/56381960-7a569880-61d3-11e9-96ff-c44baa1c35e1.jpg)
   <br />

1. PROTIP: Drag the app icon and drop it on your Mac Dock for easy access.

   BTW, multiple instances of Visual Studio for Mac can be started by right-clicking its icon in the Apple Dock bar, then selecting "New Instance".

   ![vs2019-mac-dock-354x137](https://user-images.githubusercontent.com/300046/56686530-68706c00-6691-11e9-85eb-b3f8141c8010.jpg)

1. Use your mouse to click the "Visual Studio" icon to open the program to see this:

   ![vs-mac-2019-new-669x269-10031](https://user-images.githubusercontent.com/300046/56381902-5f842400-61d3-11e9-8a22-0e594d4dd570.jpg)

1. Dismiss the "Start Window" pop-up by clicking the red dot at its upper left corner.


   ### Check for Updates

1. Click "Visual Studio" at the top menu to select "Check for Updates...":

   ![vs-mac-top-menu-269x299-10152](https://user-images.githubusercontent.com/300046/56392151-e2b27380-61ed-11e9-9949-1337c9c5912c.jpg)

1. If updates are being downloaded, wait for all updates to download. While you're waiting: 

   PROTIP: Uncheck "Check automatically" so that you can check whether future installers are good.

   PROTIP: Add a recurring entry in your personal or team calendar to do the following every Wednesday at 4pm or some specified appointed time.

   Copy the version, such as "8.0.4.0" being downloaded.

   PROTIP: See if there are comments about the update. Switch to: 
   <a target="_blank" href="https://developercommunity.visualstudio.com/"><strong>https://developercommunity.visualstudio.com</strong></a>

1. Click "Visual Studio for Mac" tab.
1. In the search box type "Visual Studio 2019 for Mac update 8.0.4.0" or whatever version.
1. PROTIP: Ignore entries that are for the Windows version, older 2017 for Mac versions, Xamarin, etc.
1. If no issues are identified, click "Restart" for the install.
1. PROTIP: Go back to "Check Updates" because some (such as Java) require another update to finish.


   ### Sign in Microsoft

1. Press command+, or click "Visual Studio", then select <strong>Account...</strong>, then go through the prompts.

   PROTIP: Setup Microsoft Authenticator on your phone to use multi-factor authentication. It's cooler and safer.

1. Click the red dot to exit sign-in (yeah I know they should have an "OK" button to dismiss).

   ### Preferences

1. Press command+comma or click "Visual Studio" in the menu, then select <strong>Preferences...</strong>.
   * In Visual Style, select Dark User Interface theme
   * Author information.
   * Key bindings
   * <a target="_blank" href="https://wilsonmar.github.io/fonts-on-mac-os">Fonts</a> (some prefer others more readable ones)
   * External Tools
   * In Load/Save, select "Load previous solution on startup"
     and "Always create backup copy"
   * Markers and Rulers, check "Highlight current line" and "Visualize changed lines"
   * Code Snippets ?
   * Standard Header for your team standard
   * In Accessibility, check "Enable".
   <br /><br />

1. Press command+Q to close the program.
1. Restart the program again.


### Get existing repo

PROTIP: Most of the time, you'll be editing an existing repo rather than creating a new solution from scratch, so here we show how to retrieve an existing repository.

Steps here are based on <a target="_blank" href="https://docs.microsoft.com/en-us/visualstudio/mac/version-control?view=vsmac-2019">these docs about Version control</a>.

1. At an internet browser, let's look at the repository we are working with today:

   <a target="_blank" href="https://github.com/wilsonmar/github-emojis">https://github.com/wilsonmar/github-emojis</a>

   This repo was forked from account sayedihashimi.

1. Since we intend on making changes, click <strong>Fork</strong> to fork the repository into your own account.

1. Copy into your Clipboard the URL to clone:

   On GitHub, click the green "Clone or download" button, then the clipboard icon: 
   <a target="_blank" href="https://github.com/wilsonmar/github-emojis">https://github.com/wilsonmar/github-emojis</a>
   Your URL would not contain "wilsonmar" but your own account name.

   ![vs-mac-github-clone-439x216](https://user-images.githubusercontent.com/300046/56458328-5cf40c80-6342-11e9-954d-575130451078.jpg)

   Alternately, <a target="_blank" title="Jan 29, 2019" href="https://www.youtube.com/watch?v=LsA5t2RAfgM&t=31s">[0:31]</a> on Azure DevOps, click "Clone" and click the copy icon or highlight and copy into your Clipboard.

1. <a target="_blank" title="Jan 29, 2019" href="https://www.youtube.com/watch?v=LsA5t2RAfgM&t=36s">[0:36]</a> At the app menu, click on <strong>Version Control</strong>.

   ![vs-mac-2019-vc-222x329-7488](https://user-images.githubusercontent.com/300046/56392533-ec88a680-61ee-11e9-8b6c-0eddb9b22737.jpg)

1. Click "Checkout...".

   CAUTION: The word "Checkout" has different meaning in Git versus Subversion programs. Unfortunately, Visual Studio developers have chosen to use the meaning from the legacy Subversion world, which is akin to checking out a <strong>physical book</strong> from a library building. Others cannot use the book you hold until you check it back in.
   
   The equivalent word in the Git world is <strong>clone</strong>, but is akin to getting a <strong>photocopy</strong> of the book. Others can still get additional copies.
   
   Also in the Git world, "checkout" means viewing something at a particular <strong>point in time</strong> when particular edits occurred in the past. This ability to "time travel" is what makes Git so powerful.

   But first, we need to transfer the repository onto our local drive on our laptop.

1. Under the "Connect to Repository" default tab, label "Url:", double-click on the "git://" to replace it by pressing command+V to paste from Clipboard.

   ![vs-mac-checkout-601x446-14893](https://user-images.githubusercontent.com/300046/56457712-ad1ba080-633b-11e9-9168-0308f6f2f68d.jpg)

   Notice several fields are auto-populated in the form.

1. Click "Checkout". The "cloning" message appears.

   After "Packages successfully restored" appears, you should be shown the "Solutions" pane populated with the repository from GitHub.


   ### Run (Build) Project

1. Click "Run" icon to build the app, using default settings for dependencies.

0. If you see "HTTPS development certificate is not trusted", click "Yes".

0. Click "OK" to dismiss the "Mono-sgen32 is not optimized" pop-up if it comes up. This means that Visual Studio was built using a 32 (rather than 64) bit compiler, for which <a target="_blank" href="https://support.apple.com/en-gb/HT208436">Apple is ending support</a>, especially on macOS Mojave (10.14). Read more about it <a target="_blank" href="https://www.macworld.co.uk/feature/mac-software/not-optimized-mac-warning-3675674/">here</a>.

   ### View in internet browser

0. After "Build successful" appears at the top of Visual Studio, in your default internet browser should appear a new tab with URL:

   <a target="_blank" href="http://localhost:5001">http://localhost:5001</a>

   ![vs-mac-github-emojis-648x145-11885](https://user-images.githubusercontent.com/300046/56457870-16041800-633e-11e9-87e7-4b05c866d319.jpg)

   PROTIP: The port can be changed in Run > Run With > Custom Configuration > ASP.NET Core.

   BTW, to switch among programs on a Mac, keep pressing command+Tab until you see the Visual Studio icon.

   ### .gitignore and README files

1. In the browser go to https://gitignore.io to construct a .gitignore file for the combination of your operating systems (macOS and Windows), language (Python, Java, JavaScript, etc.), Platform (NodeJS, etc.), and tool (Eclipse IDE, etc.).


1. In the Solution pane, click the right-pointing arrow next to the project name to expand the tree:

   ![vs-mac-sol-expanded-220x301-7499](https://user-images.githubusercontent.com/300046/56457799-1a7c0100-633d-11e9-829a-c398f3b6f7e9.jpg)

   Press <strong>command + shift + .</strong> to show hidden files and folders.


   PROTIP: The README.md file that GitHub displays for readers is not placed within Visual Studio project files.

1. Switch to the Mac Finder to see that there is a <strong>.gitignore</strong> file above the folder which VisualStudio displays.

   ![vs-mac-git-170x124-3611](https://user-images.githubusercontent.com/300046/56464714-d32d5900-63ac-11e9-9eaf-47124b827a3a.jpg)

1. Position the Finder window so that you can drag    

1. Switch back to the Visual Studio Solution pane. 
1. Drag the .gitignore file onto Visual Studio.

   ### README.md file

   PROTIP: At time of this writing, the repository did not have a <strong>README.md</strong> file which GitHub displays for readers. README files are usually not referenced in the application's UI. 
   
   So the exercise below will add one if it doesn't exist, or edit the file if it exists.

1. In a Terminal windows, git add . and git commit -m"add", and finally git push changes.

   PROTIP: At time of writing, Visual Studio 2019 for Mac does not work on files above the Solution/project file (.gitignore, README, and .git folders).


   ### New branch

   <a name="VersionControlMenu"></a>

0. Click the Version Control menu for this:

   <img alt="vs-mac-vc-242x501-13722.jpg" width="242" src="https://user-images.githubusercontent.com/300046/56458529-397e9100-6345-11e9-87cd-26f699196c76.jpg">

0. Select "Manage Branches and Remotes" for this:

   ![vs-mac-newrepo-600x122-6150](https://user-images.githubusercontent.com/300046/56458571-cfb2b700-6345-11e9-97cf-261a78368b0f.jpg)

0. Click New.
0. Type a space character in the Name: field. Prompts about characters not allowed appears:

   ![vs-mac-branch-name-258x149-4319](https://user-images.githubusercontent.com/300046/56464501-3f598e00-63a8-11e9-94a2-e76818d1f762.jpg)

0. In the Name: field, enter "add-README.md" or make up something else.
0. Click OK, then "Close".

   ### Switch (checkout) to new branch

0. In the Solutions pane, notice "(master)" next to the project name. 
   
   "master" is the current branch name.

   <img align="right" alt="vs-mac-proj-menu-219x519-15990.jpg" width="219" src="https://user-images.githubusercontent.com/300046/56458712-7186d380-6347-11e9-96b8-e60bcbd81379.jpg">
0. Right-click on the project name to select "Switch to Branch" and click the branch name just created.

   BTW, this action is equivalent to use of the "git checkout" command on a Terminal.

   ### Add new README.md file

0. If the README.md file does not exist, right-click on the project name again to select "Add", "New File ...", Misc "Empty Text File" and type Name: README.md. Click New.

0. Type the text in GitHub markup language.

   PROTIP: Although GitHub automatically converts text beginning with "http" into links, those clicking on such links are sent to that link within the same window. To open a new window when the link is clicked, use text like this:
   
   <pre>A video explaining the steps to create this repo within Visual Studio 2017 for Mac was recorded by Sayed Ibrahim Hashimi Jan 22, 2019 and is avialable at:
   &nbsp;
   &LT;a target="_blank" href="https://channel9.msdn.com/Shows/Visual-Studio-Toolbox/Visual-Studio-for-Mac-Build-Your-First-App">https://channel9.msdn.com/Shows/Visual-Studio-Toolbox/Visual-Studio-for-Mac-Build-Your-First-App&LT;/a>
   &nbsp;
   This repo is used in a tutorial to setup and use Visual Studio 2019 for Mac at:
   &nbsp;
   &LT;a target="_blank" href="https://wilsonmar.github.io/text-editors/#visual-studio-for-mac">https://wilsonmar.github.io/text-editors/#visual-studio-for-mac&LT;/a></pre>

   ### Report issue

   BLAH: Believe it or not, the feature that makes all text visible on a line (rather than having long sentences disappear), called <strong>"word wrapping"</strong>, is not in Visual Studio. So please add your voice to call for action in <a target="_blank" href="   https://visualstudio.uservoice.com/forums/563332-visual-studio-for-mac/suggestions/17166137-text-wrapping">this UserVoice issue</a> first reported in 2017.

   ### Add and commit change
   
   Notice the green + in the icon associated with the file just changed.

0. Right-click on the file name and select "Version Control", then <strong>Review Solution and Commit</strong>.

   ![vs-mac-file-vc-423x284-14412](https://user-images.githubusercontent.com/300046/56459143-c842dc00-634c-11e9-9cc7-d3bf2ae73218.jpg)

0. Check or uncheck files you want to include in the Git Add and Commit action:

   ![vs-mac-commits-767x122-8412](https://user-images.githubusercontent.com/300046/56459205-7b133a00-634d-11e9-8d7d-5d9ef72486bb.jpg)

0. Click "Commit".

   PROTIP: If you are prompted for GitHub credentials, if you have 2FA setup, provide one of the <a target="_blank" href="https://github.com/settings/auth/recovery-codes">Two-factor recovery Codes</a> in the Password: field instead of using Google Authenticator and the password you use to sign into GitHub online.

   You should see "Pushing changes..."

0. Type the commit message, then press "Commit".

   PROTIP: See <a target="_blank" href="https://wilsonmar.github.io/git-messages">my notes on crafting Git commit messages and using emojis</a>.

   ### Pull (from) then push (to) remote
   
0. Select <a href="#VersionControlMenu">"Version Control" in the top menu</a> and select <strong>Update Solution</strong>, which first pulls changes from online, then pushes commits to it.

   If there are no commits waiting to be pulled down or changes to be pushed, "Update operation completed" is shown.

0. View the <strong>Log</strong> by right-clicking on the project name to select "Version Control", then "Log".

0. View the file online to confirm the transfer.

   ### Install extensions

   <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=rubbersheep.gi">gi</a> by Hasit Mistry keeps .gitignore files updated with changes in the gitignore.io API for specific combinations of operating systems, IDEs, and programming languages.


   ### Share code screen 

   <a target="_blank" href="https://www.smashingmagazine.com/2018/09/visual-studio-live/">Visual Studio Live</a> enables you to share what appears on your monitor (like TeamViewer, Google Hangouts, Zoom, etc.), but from inside Visual Studio.


### Create project from scratch

Follow along when watching <a target="_blank" href="https://channel9.msdn.com/Shows/Visual-Studio-Toolbox/Visual-Studio-for-Mac-Build-Your-First-App">Visual Studio for Mac: Build Your First App</a> Jan 22, 2019 by <a target="_blank" href="https://www.linkedin.com/in/sayedibrahimhashimi/">Sayed Ibrahim Hashimi</a> who creates a .NET Core 2.1 Razor web app using a list of emoji names and associated png files.

   * <a target="_blank" href="https://www.youtube.com/watch?v=WTVcLFTgDqs&t=7m">Another video</a> shows generation of ASP.NET Core Web App 1.1 (with ASP.NET MVC Views and Controllers).

   * https://www.youtube.com/watch?v=lDIyw--42VA

1. Obtain files referenced in the video. To retrieve the list of emjoji codes and each rendered in a png file at <a target="_blank" href="https://api.github.com/emojis">https://api.github.com/emojis</a>, clone onto your laptop repository:

   <pre>git clone <a target="_blank" href="https://github.com/sayedihashimi/github-emojis">https://github.com/sayedihashimi/github-emojis</a></pre>

   NOTE: This step is missing in the video.

1. Open Visual Studio 2019 for Mac.

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

   <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=2m10s">[2:10]</a> Get rid of the <tt>environment</tt> sections bringing in Bootstrap except for:
   
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

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=3m15s">[3:15]</a> In the code under "public class Emoji", in place of the "public Emojis" fragment and type "prop" and Tab Tab for auto-complete, and edit to end up with:

   <pre>public string Key {
      get;
      set;
   }
   public string Url {
      get;
      set;
   }</pre>

0. To add the code that retrieves the list of emjoji codes and each rendered in a png file at <a target="_blank" href="https://api.github.com/emojis">https://api.github.com/emojis</a>, clone onto your laptop repository:

   git clone <a target="_blank" href="https://github.com/sayedihashimi/github-emojis">https://github.com/sayedihashimi/github-emojis</a>

   [NOTE: This step is missing in the video.]

0. Switch to Visual Studio to establish the target for receiving dragged files.

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=3m58s">[3:58]</a> In Finder, navigate in the "github-emojis" repo to file "GithubEmojiService.cs" and drag it into the <strong>GithubEmojis</strong> project (root) folder.

   The file should now be among the "Program.cs" file.

   <a target="_blank" href="https://github.com/wilsonmar/github-emojis/tree/master/GithubEmojis/GithubEmojis">https://github.com/wilsonmar/github-emojis/tree/master/GithubEmojis/GithubEmojis">

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=5m4s">[5:04]</a> To register the class as a service with .NET Core, create an interface by right-clicking on "GithubEmojiService" in the code and select <strong>Quick Fix</strong>, <strong>Extract Interface...</strong>. Click "OK" to accept defaults, then click the red "X" to dismiss the pop-up dialog. You should now be at new file "IGithubEmojiService.cs" containing:

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=5m34s">[5:34]</a> Return to file "GitHubEmojiService.cs" and right-click "IGithubEmojiService" to copy it and select "Go to Declaration".

   <pre>namespace GithubEmojis
{
    public interface IGithubEmojiService
    {
        System.Threading.Tasks.Task<System.Collections.Generic.IList&LT;Emoji>> GetEmojis();
        System.Collections.Generic.IList&LT;Emoji> GetEmojisFrom(string content);
    }
}
   </pre>

   BLAH: I'm getting error message "/Users/wilsonmar/projects/GithubEmojis/GithubEmojis/IGithubEmojiService.cs(70,70): Error CS0246: The type or namespace name 'Emoji' could not be found (are you missing a using directive or an assembly reference?) (CS0246) (GithubEmojis)"

   The code in the video was:

   <pre>Task<IList&LT;Emoji>> GetEmojis();
      IList&LT;Emoji> GetEmojisFrom(string content);
   </pre>

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=5m39s">[5:39]</a> Return to file "GitHubEmojiService.cs" and right-click "IGithubEmojiService" to copy it to your Clipboard. Select "Go to Declaration". Edit file "Startup.cs" and at the location indicated type:

   <pre>services.AddSingleton&LT;IGithubEmojiService, GithubEmojiService>();</pre>

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=5m43s">[5:43]</a> In Pages, edit file <strong>Index.cshtml.cs</strong>. Under "PageModel", above <tt>public void OnGet()</tt>, insert constructor:



0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=6m12s">[6:12]</a> In Pages, edit file <strong>Index.cshtml.cs</strong>. Under "PageModel", above <tt>public void OnGet()</tt>, insert constructor:

   <pre>private IGithubEmojiService _emojiService;
   public IndexModel(IGithubEmojiService emojiSvc) {
      _emojiService = emojiSvc;
   }
   public IList&LT;Emoji> Emojis {
      get;
      set;
   }</pre>

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=7m14s">[7:14]</a> Replace the <tt>OnGet</tt> to :

   <pre>public async Task OnGet() {
      Emojis = await _emojiService.GetEmojis();
   }</pre>

0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=8m13s">[8:13]</a> Edit file <strong>index.cshtml</strong> to remove the line "ViewData" and all the &LT;div> lines from the boilerplate. Replace it with:

   <pre>&LT;div class="allEmojis">
      @foreach(var em in Model.Emojis) {
         &LT;div class="allEmojis">
            &LT;img src="@em.Url" alt="Emoji - @em.Key" width="128" height="128" /L>
            &LT;code>@em.Key&LT;/code>
         &LT;/div>
      }
   &LT;/div></pre>
   
0. <a target="_blank" href="https://www.youtube.com/watch?v=2CsZpJdFFnQ&t=9m49s">[9:49]</a> Edit file <strong>index.cshtml</strong> to remove the line "ViewData" and all the &LT;div> lines from the boilerplate. Replace it by dragging and droping the repo downloaded within folder <strong>wwwroot/css</strong> folder the <strong>site.css</strong> file, with overwrite/replace.

0. File > Save All files changed.

0. Click Debug to step into each call.

   Alternately, Run to completion (or error).

BTW, additional tutorials on .NET Core Razor:

   * <a target="_blank" href="https://www.youtube.com/watch?v=--lYHxrsLsc">VIDEO: ASP.NET CORE for Beginners - an 8 Hour Workshop</a> Apr 15, 2018 by Jeffrey T. Fritz and guests Jon Galloway, Julie Lerman (@JulieLerman), and Shayne Boyer (@spboyer). They create a travel app, starting from the API.

<hr />

<a name="Lite"></a>

## Lite

<a target="_blank" href="https://github.com/mathewmariani/lite-macos">mathewmariani/lite-macos</a> is a port of 
<a target="_blank" href="https://github.com/rxi/lite">github.com/rxi/lite</a> for Windows and Linux.

Lite is a lightweight modern code editor written in the Lua programming language. 
In 2019.

The base editor is just a simple text box. Plugins written in Lua provide additional functionality.

Lite takes less than 1-megabyte space of disk. VSCode takes more than 200 megabytes.

Lite takes 20 megabytes of memory while VSCode takes 1.2 GB to do the same job.

Lite is faster than VSCode because it’s not a hybrid application. Lite uses C and SDL graphics library to render GUI elements of the application. So there is no bulky JavaScript and HTML code to draw fake native-like GUI elements inside a web browser instance. 


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
