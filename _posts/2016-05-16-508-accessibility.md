---
layout: post
title: "508 Accessibility - for blind and visually impaired"
excerpt: "Information to help tools work for all users"
tags: [HTML, personalization, jekyll]
author: cindy_garlick
date: "2016-05-16"
file: "508-accessibility"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14624073/7b96364a-0594-11e6-9643-06decef9dbfd.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<h2>HTML 508 Accessibility, importance, tools, videos and basic code suggestions.</h2>

This post explains how to verify whether websites are "508 Compliant". 
Compliance is to regulations requiring websites to be accessible to the deaf, hard-of-hearing, and visually impaired.

## Why is this needed?

This is a bigger issue than many think:

   <a target="_blank" href="http://libguides.gallaudet.edu/content.php?pid=119476&sid=1029190" 
                         alt="Statistics of deaf population">195,697,202 people in the US are deaf.</a>

   <a target="_blank" href="http://www.who.int/mediacentre/factsheets/fs282/en/" 
                         alt="38 million blind is statistics for Visually impaired population">38 million blind in US, 246 with low vision, 285 million worldwide are vision impaired.</a>
						 
   <a target="_blank" href="https://nfb.org/blindness-statistics" 
                         alt="Statistics of Blind impaired population">7,327,800 blind people since 2013</a>
						 
   <a target="_blank" href="http://www.colourblindawareness.org/colour-blindness/" 
                         alt="Statistics of color blind population">2.7 million people (mostly male) have some form of color blindness.</a>
   
   <a target="_blank" href="https://www.youtube.com/watch?v=HO3TdUb9uK8" cc_load_policy="1"
                         alt="Accessible sites rank higher in search engines.">Accessible sites rank higher in search engines.</a>
   
   Increase user base by at least 20%
   
   <a target="_blank" href="https://www.youtube.com/watch?v=HO3TdUb9uK8" cc_load_policy="1"
                         alt="Inclusive sites drastically reduce discriminatory potential for legal action both domestically and internationally.">Inclusive sites drastically reduce discriminatory potential for legal action both domestically and internationally.</a> 
   
   Good business at being progressive and knowledgeable of internet trends


## Website Link Validation for errors or warnings
  
<a target="_blank" href="http://www.powermapper.com/products/sortsite/ads/acc-section-508/?gclid=CMfzl_Lg38wCFVUkgQodQ8YA4A" 
                         alt="SortSite evaluates websites for accessibility">PowerMapper's SortSite</a> accessibility tool audits an entire site for compliance with web accessibility standards without the grind of manual testing. Enter the name of your website and click "Test Site". After done, click "View Report".
   
<a target="_blank" href="http://sipt07.si.ehu.es/evalaccess2/index.html" 
      alt="EvalAccess evaluates a website for Accessibility based on standards compliance.">EvalAccess evaluates web accessibility </a>is a Free Web Service tool.  It shows errors and warnings based on Priority 1, 2, 3 and results of errors and warnings per priority. It provides a description of what it believes is wrong, the HTML element or attribute with issue and line of code.  It may not be the most user-friendly access tool, it can help designers and developers to clean up their site:
   
<a target="_blank" href="https://fae.disability.illinois.edu/anonymous/?Anonymous%20Report=/" 
      alt="Functional Accessibility Evaluator tool evaluates a website for Accessibility based on 508 standards.">Functional Accessibility Evaluator referred to FAE </a>evaluates website based on 508 Guidelines**.  There are five categories: Navigation and Orientation, Text Equivalents, Scripting, Styling and HTML Standards.  The overall performance per category is a percentage, divided between Pass, Warning and Fail thus enabling specific areas:

<a target="_blank" href="http://achecker.ca/checker/" 
      alt="AChecker checks single HTML pages for accessibility standards.">AChecker tool checks single HTML page for conformance with accessibility standards. </a>It provides suggestions for conformance, explains why it failed, how to fix and the code that failed. 
				 

## Checklists for 508 Compliance

<a target="_blank" href="https://www.nngroup.com/articles/keyboard-accessibility/" 
        alt="Users with visual impairments only use keyboard so testing should be done that way.">User must be able to only use keyboard to be able to get to all enterable items and controls.</a>

<a target="_blank" href="http://www.hhs.gov/web/section-508/making-files-accessible/checklist/ppt/index.html" 
       alt="Checklist for evaluating PowerPoint documents">Checklist for Web Content Accessibility Guidelines </a>
   
<a target="_blank" href="http://www.hhs.gov/web/section-508/making-files-accessible/checklist/html/index.html" 
       alt="Checklist for improving HTML code">Checklist for HTML Accessibility</a>

<a target="_blank" href="http://www.hhs.gov/web/section-508/making-files-accessible/checklist/pdf/index.html" 
       alt="Checklist for evaluating PDF documents">Checklist for PDF File 508 Compliance</a>
						 
<a target="_blank" href="http://www.hhs.gov/web/section-508/making-files-accessible/checklist/excel/index.html" 
       alt="Checklist for changing Excel documents">Checklist of Excel Document 508 Compliance</a>
                         
<a target="_blank" href="http://www.hhs.gov/web/section-508/making-files-accessible/checklist/ppt/index.html" 
       alt="Checklist for evaluating PowerPoint documents">Checklist for PowerPoint Document 508 Compliance</a>
   
<a target="_blank" href="http://webaim.org/standards/508/checklist" 
       alt="Checklist listing the 508 standards and Pass and Fail criteria">Checklist for 508 Standards with Pass and Fail criteria</a>

## Types of Tools utilized

<b>Screen Readers</b> - These tools transmit text that is displayed on the computer screen to aid a visually impaired user to process. It uses a synthetic voice to tell the user where all the data is on the screen. As a user uses the keyboard to get around on the screen, as they move around the screen, it should read all headings and text on the screen.  If a picture is on the screen, if programmed properly the screen reader will read text displaying for the user what is contained in the picture.

<b>Screen Magnifiers</b> - These tools allow users to amplify the text on the screen in a enlarged screen format usually within a small focused area of the screen. As the mouse is moved around the screen, the objects are magnified so they can be easily read.  As my eyes started changing, my glasses no longer was able to read the screen properly until I got bifocals, screen magnifiers amplify the text and make it easier to read.

<b>Speech Recognition</b> - These tools allow users to convert spoken words into text.  It can include dictation to the point of being able to manipulating applications on the screen using words understood by the software tools.

<b>Color Contrast Analyser</b> - These tools help determine the contrast of background and text or of visual elements like graphical controls into a Pass/Fail category to assist users who struggle with conflicting colors. <a target="_blank" href="https://www.paciellogroup.com/resources/contrastanalyser/" alt="Color Analyser software Tools for Windows to read content for people with less than 20/20 vision">Download Color Analyser Software Tool for those with color blindness, cataracts or less than 20/20 vision.</a>

<b>Alternative Input Devices</b> - These tools allow users with specific needs to be able to manipulate a computer using modified pointing device, eye movement, expanded keyboards, head-operated pointing devices, modified keyboards to specialized software.


## Firefox and Chrome Add-ons

<a target="_blank" href="https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en" 
                         alt="Extension that can be added to Chrome to help developers with Accessibility errors in an audit"> Accessibility Developer Tools extension for Chrome </a>
adds an Accessibility audit and an Accessibility sidebar pane in the Elements tab to your Chrome Develop Tools.  To use the audit: go to the Audits tab and click Run.  The audit results will appear as a list of rules which are violated by the page with one or more elements on the page shown as a result for each rule.

<a target="_blank" href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd" 
                         alt="aXe is an Extension added to Chrome for developers with no false positive for Accessibility issues">aXe is Accessibility defects extension for Chrome.</a> 		
Automated testing tools must return zero false positives, so that you know what problems you must fix.  This extension uses aXe javascript library and is the third generation of accessibility rules for HTML-based user interfaces and is open source.
    				 
<a target="_blank" href="http://chromelens.xyz/" 
                         alt="ChromeLens is a set of developer tools that allow developers to code websites better suited for the visually impaired.">
ChromeLens.xyz</a> is a set of developer tools that allow developers to code websites better suited for the visually impaired.


## Link or Sanity Validation

<a target="_blank" href="https://validator.w3.org/" 
      alt="Checklist for evaluating links on a web page">Markup HTML and XHTML Validation Tool</a>

<a target="_blank" href="https://validator.w3.org/checklink" 
      alt="Checklist for evaluating links on a web page">Link Checker Open Source </a>	  
looks for issues in links, anchors and referenced objects on a webpage, CSS style sheet. Enter your webpage, click Summary Only and Check linked documents recursively, change depth to 1 or 2/
    
<a target="_blank" href="https://www.totalvalidator.com/index.html" 
      alt="Free Tool to check HTML, accessibility validator, spell check, and broken links validator for a website">Total Validator is FREE HTML Validator </a>		
an accessibility validator, spell checker, broken links checker. This tool can be downloaded for Windows, Mac, Linux, and browsers like Google Chrome and Firefox.
    

## Mobile device tool validation

<a target="_blank" href="https://validator.w3.org/mobile/" 
      alt="Tool on checks website for mobile friendliness">W3c mobileOK checker</a>
performs tests to determine level of mobile friendliness and compatibility**. Enter the web address you want evaluated.
It counts failures broken down by severity and category of failures.
It will break down each error by severity, description, best practice that failed along with details as to why, how, where when it can identify it 
and more information to explain the severity of that issue addressed. Drill down next to Where, it will either give you the
link where it found the error or every link that triggered the error: 
    
<a target="_blank" href="http://ready.mobi/" 
      alt="Tool on web that evaluates website for mobile users">mobiReady checks to see if your website works on multiple size devices </a>
including 1024x768, 375x667, 320x533 and 240x320.

    
## Assisted Devices for Hearing-impaired or Visually-impaired

<a target="_blank" href="http://www.nvaccess.org/download/" 
      alt="Free Tool for blind and visually impaired to read text on screen translated into 43 languages in 120 countries">NonVisual Desktop Access also known as NVDA is Free and Open Source </a>
and enables blind and visually impaired people to use computers using computerized voice. You can control what is read to you by moving the cursor to the relevent area of text with a mouse or the arrows on the keyboard.  NVDA provides education and employment for many blind people.  NVDA also provides access to social networking, online shopping, banking and news. NVDA has been translated into 43 languages and is used by more than 120 countries.
    
<a target="_blank" href="http://www.windoweyesforoffice.com/" 
      alt="Window Eyes is a Screen Reader free for Microsoft Office 2010, 2013 and 2016 versions">Window Eyes is FREE screen reader for Microsoft products </a>to provide people who are blind, visually-impaired or print challenged with completely functionality compatible with Microsoft Office 2010, 2013 and 2016. <a target="_blank" href="http://getwindoweyes.com/Window-Eyes/Manual/HTML/basic.html"
      alt="User Manual for Window Eyes is located here">Click here for a user manual on Window Eyes.</a>

<a target="_blank" href="https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders"
      alt="Article about Assisted Devices for Hearing, Speech, Voice and Language Impairments">Article discussing various Assisted devices</a>


## Videos about 508 Accessibility Testing

<a target="_blank" href="https://www.youtube.com/watch?v=4XJcswWmmAw" cc_load_policy="1"
                         alt="Video discussing testing using Assisted Technologies">Video about testing considerations for 508 standards using assisted technologies.</a> 
                         
<a target="_blank" href=" https://www.youtube.com/watch?v=c6OoQHDaLvk" cc_load_policy="1"
                         alt="Webinar video on Section 508 Accessibility Authoring and Testing">Webinar about Section 508 Accessibility Authoring and Testing.</a> 
                         
<a target="_blank" href="https://www.youtube.com/watch?v=HO3TdUb9uK8" cc_load_policy="1"
                         alt="Video about making internet accessible for all ">Video presentation discussing issues and rewards for making internet accessible for all.</a> 
                         
## HTML coding for accessibility

1. In alt="  " provide words to describe more details about what the link is about so screen reader can read, for example:

   ```
   <a target="_blank" href="http://www.ebay.com" 
       alt="One of most well known websites to buy products by auction or buy now at this price">Ebay is the most well known
       websites for buying production by auction or pay the buy in now price"</a>
   ```
   
2. Images should describe the picture using word, for example:

   ```
   <a target="_blank" href="http://....." alt="blue winter landscape with rainbow"</a>
   ```
   
3. Turn on captioning in videos for YouTube or Vimeo, Must have QuickTime Player. <a target="_blank" href="http://etc.usf.edu/techease/4all/web-accessibility/adding-closed-captions-to-youtube-videos/">Click to learn how to transcribe videos.</a> for example:

   ```
   <iframe width="640" height="360" target="_blank" href="URL cc_load_policy=1" frameborder="0" allowfullscreen></iframe>
   ```
   
4. Add label for type="radio", for example:

   ```
   <fieldset>
    <h1>Salutation</h1>

    <label for="salutation_mr">Mr <input id="salutation_mr" 
          name="salutation" type="radio" value="mr"><label>

    <label for="salutation_mrs">Mrs <input id="salutation_mrs" 
          name="salutation" type="radio" value="mrs"><label>

    <label for="salutation_miss">Miss <input id="salutation_miss" 
          name="salutation" type="radio" value="miss"><label>

    <label for="salutation_ms">Ms <input id="salutation_miss" 
          name="salutation" type="radio" value="ms"><label>
    </fieldset>
   ```
5. Emphasis do not use italic as it causes reading issues, better to use es{..}  or  strong{...}

   ```
   strong{
   font-weight: bold;
   }
   ```
   
6. Anytime you use a website, make sure if it should be http:// or https://
7. Anytime you use a website, check to see if there should be a / at the end of the website name
8. Anytime the link your using redirects, it slows down the application, update the link to the correct location periodically.
9. <a target="_blank" href="http://ready.mobi/" 
      alt="Tool on web that evaluates website for mobile users">Accessible Techniques for HTML Tables </a> 


## Create ADA-Compliant Captions #

This section is adapted from Camtasia 2 for Mac tutorials
presenting tips to create ADA-compliant captions.

The Americans with Disabilities Act (ADA) is a federal antidiscrimination statute 
designed to ensure equal access to opportunities and benefits for qualified individuals with disabilities. 
In many state, government, and education institutions, 
videos must include ADA compliant captions. 

Generally, captions should:

* Be accessible and readily available to those who need or want them.
* Be synchronized with the audio spoken words 
   (appear at approximately the same time as the audio).
* Appear onscreen long enough to be read
   (Stay on the screen a few seconds, and are then replaced by another caption.)

* Be in an easy-to-read format:
   not cover up graphics and other essential visual elements of the picture.
* Use a non-serif font similar to Helvetica medium.
* Have good resolution.

* Have correct spelling throughout the production.


Words in ADA compliant captions should:

* Use upper and lowercase letters.
* Be verbatim when time allows or as close as possible in other situations.

* Describe use of slang and accent is preserved.
* Describe music or other sound inside square brackets such as [music] or [laughter].
* Identify the speaker when more than one person is onscreen or when the speaker is not visible.
* Use italics when a new word is being defined or a word is heavily emphasized in speech.
* Use punctuation to clarify meaning.

* Reflect all words spoken, regardless of language or dialect.
* Fit the 32-character-per-line requirement 
* Be preferrably one line of text that appear onscreen all at once, 
* Be no longer than three lines.
<br /><br />



To check for compliancy, select the Captions options dropdown > Show non-compliant duration. 
This option highlights any captions in red whose duration is not between three and seven seconds.

