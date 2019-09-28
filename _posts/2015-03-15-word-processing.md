---
layout: post
title: "Using Microsoft Word in a team"
excerpt: "8 questions to ask"
tags: [remote, telework, teamwork]
date: "2015-03-15"
file: "word-processing"
image:
# feature: pic blue planet curves 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14621989/28943bfa-0584-11e6-8604-925ce8dfbe74.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

You are at <a href="http://wilsonmar.github.io/word-processing/">
wilsonmar.github.com/word-processing/</a>

## The Annoyance

It seems everyone has their own pet peeve when using Microsoft Word.

Here are mine.

## File name version control
Word has its own versioning (in the Review tab) as
it's just too scary to look into the complex markup under the Print view.
So I prefer to use file names as version control.

In file names I've learned not to use spaces in order to avoid confusion.
The format of a file name:

```
Subject Subfile Version Date Sequence Initials .doc
```

Example:

```
Git_all_v09_2016.03.22a_wm.doc
```

The lower case "v" is short for version.
Lower case because it makes the number following it easier to read as compared to capital.
Obsessive, I know, but I'll go to my grave happier because of this ;)

Date format is YYYY.MM.DD
Dots are used within dates so that they are not confused with something else.

Initials of the author is very important when collaborating.

## Fonts
Fonts should be loaded before opening files since Word does substitutions automatically.
I like the Open Sans Light font, which tends to save ink when printing, although that's irrelevant.

To download fonts, visit https://www.google.com/fonts#UsePlace:use/Collection:Open+Sans
Add a checkmark to all of the fonts on the page.
The first one will be Open Sans, click Add to Collection which should download and install onto your machine.

Open Sans font files have .ttf extension because they are TruType format
used on both Mac and Windows.

Under the Finder of any version of Mac OS X, navigate to <strong>/Library/Fonts</strong>
and drop downloaded font files there.

BTW, Word needs to be restarted for it to recognize new fonts.


## Rename
Word makes changes to files even if it's only opened and immediately closed.
So before I open a file, I use Finder/File Explorer to make a copy of the file and
rename it. Then I open that new file.

## Save it often
I've had shed too many tears about lost work.
If you click on File | Options | Save, it will default to saving every 10 minutes.
It that doesn't suit you, then save it more frequently to avoid losing your changes.
You can change the location on where to save files to the drive.google directory from that screen.
Before closing the screen and leaving it open,
I make it a habit to save files to a cloud server (Google Drive).

A few seconds has saved me hours of rework and frustration.

## Configure
Autocorrect automatically capitalizes the beginning of 
program commands, which is not helpful.

On the MAC, I turn them off by clicking on menu Word | Preferences | AutoCorrect.
On Windows, I turn them off by clicking on File | Options | Proofing | AutoCorrect
then turn off the options for Capitalize First Letter and Initial Capitals.

## Review
As soon as I open a file, I click the Review tab.
The default display is to show markup.

I click Next to go through changes made in the previous version/edition.

Then I click the little arrow next to the Accept icon and 
<strong>Accept all changes in document</strong>, which turns off the markups.
I can start editing with a clean slate.
If I later need to see what was changed, I can run a Compare by clicking Review | Compare.

On MAC, For use during editing, I set <strong>Tracking to Final</strong>.

I leave Track Changes to ON.

## On-screen TOC and Styles
On MAC from menu at the top View | Sidebar | Document Map Pane
puts a table of contents on the left.
I usually have to drag the divider over a bit to show more text.

On Windows from menu I clicked View | Navigation Pane and checked box (under Show section).

I usually select Home ribbon to make the styles visible.
Sometimes the ribbon gets collapsed. 
I then click the up/down arrow at the upper right to reveal it again.

I make heavy use of styles, so I prefer clicking the button that floats a list of styles,
which I keep on the right side of the screen.
The <strong>Clear Formatting</strong> at the top of the list I use a lot.

There are way too many default styles, so I get rid of ones I don't use,
and make up ones of my own.

## Table of Contents
I usually prefer to change an existing document rather than 
starting from scratch.

I think it helps to have a larger font for Heading1 and 2.

If a heading has a different text (such as "ACTIVITY"),
it helps for lower items to be indented.

## Vertical Spacing

I try to avoid blank lines of Normal style.

Insert a page break at the front of each Heading 1 and 2.

## My Styles

I try to avoid using Normal on purpose
because Word uses that for weird stuff.
It's unavoidable in front of page breaks.

* **Body** is the default.

* **Action Step** sequentially numbers steps for readers to take.

* **PROTIP** (Best Practices)

* **Bullet in 1, 2, 3** for each level of indent.

* **Commands** is what is typed into command lines such as Termainal.
This is bolded.

* **Coding**

* **File Path**

* **Heading 1, 2, 3, 4**

* **Note** is indented and italicized.

* **Picture**

* **Remember**

* **Response** displays what is returned on the command line window.

* **Table Column Heading**

* **Table Contents**

* **URL**

* **Figure Caption**


## Bolding fonts
An unfortunate aspect of Open Sans (and some other fonts) is that
bolding is difficult to see.

So we need to use a character style **Bold [PACKT]** instead
of simply pressing control/command+B after highlighting.

## Keyboard Shortcuts
Word for Mac 2011 does not honor standard Mac keyboard shortcuts.
Especially annoying are Mac keys for top and bottom of document
(command + up and down arrow).

Microsoft offers this sorry list of keyboard shortcuts:

* https://support.office.com/en-us/article/Word-keyboard-shortcuts-c0ca851f-3d58-4ce0-9867-799df73666a7

Where is the Page Down key on the Mac?

* Create keyboard shortcuts in Office for Mac 2011
https://support.office.com/en-us/article/Create-or-delete-a-keyboard-shortcut-in-Office-for-Mac-2011-1796e9a2-3748-4cf0-b163-24a65479caa6#bmpp

Fortunately, someone has stepped up:

* http://www.osxkeyboardshortcuts.com/assets/Office-v.X-Mac-OS-X-Keyboard-Shortcuts.pdf

Word for Mac 2011 and Word for Windows 2013

## Copying and pasting
If you copy text from one Word document and paste it in another 
using Command/Ctrl+V, a style from the originating document
may be created.

So it's better to use <strong>Paste Special</strong> then
select Unformatted Text.

<img width="338" alt="word style return" src="https://cloud.githubusercontent.com/assets/300046/13789046/f5fd895e-eaa7-11e5-8cd4-669c50eec2d1.png">

## Auto Correct
The advanced options in Auto Correct helps to automatically correct your typo errors.
Click on File > Options > Proofing > It will display a dialog box for Word options. This dialog box displays advanced options and Auto Correct options.
You can manually replace the content by using Replace Text As you Type option.

## Thesarus
If you would like to know the meaning or synonym of any word, click on Review > Thesarus
Copy the word and search it in the search bar, You will be presented with different meanings and synonyms. You can add custom dictionaries as well.

## Security
You can protect the secure information in Word document by encrypting it with a password.
Click on File> Info> Protect Document
Select Encrypt with Password, Enter the password and your document will be secured.

## Sticky Notes
The clipboard options helps you to copy and paste multiple items.
Home> Clipboard> Click the arrow, it will open the Clipboard

## Voice command
It's tedious to select styles using the mouse.

So I'm experimenting with voice command of Office applications.


