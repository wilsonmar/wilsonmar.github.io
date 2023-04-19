---
layout: post
date: "2023-04-18"
file: "google-apps-scripting"
title: "Google Apps Scripting"
excerpt: "If you liked Microsoft's VB script for Word, Excel, you'll love Google App Script for Google Docs and Sheets"
tags: [Automation, Google]
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

This can be a common situation needing automation.

{% include whatever.html %}

## Video Courses

<a target="_blank" href="https://www.linkedin.com/in/benlcollins/">Ben Collin</a>'s 
<a target="_blank" href="https://courses.benlcollins.com/p/beginner-apps-script?coupon_code=BEGINNERSCRIPT">
$198 for 25 examples over 70 videos on Google Apps Script</a>

<a target="_blank" href="https://www.linkedin.com/in/jameshle13/">James Le</a>'s <a target="_blank" href="https://www.youtube.com/@heythisisjames">VIDEOS</a>


## My project: sync between Google Doc and Google Sheet

We can progress in stages:

First of all, this can be done old school after export to Microsoft Word and Excel files,
then use VBA. But the corporate mandate is to use Google.

Google App Script in JavaScript may provide more efficient higher level helper functions.
But there is a danger that it can be limited, as it may not be fully mature.

I was thinking this can be best done <a target="_blank" href="https://towardsdatascience.com/how-to-load-the-content-of-a-google-document-in-python-1d23fd8d8e52">using Python reaching into Google Worspaces</a>, using the <a target="_blank" href="https://medium.com/analytics-vidhya/how-to-read-and-write-data-to-google-spreadsheet-using-python-ebf54d51a72c">Google Sheet API</a> or writing out to CSV file.

The end objective is that a change can be made in the Doc and be reflected in the Sheet.
There are several sheets: one for text tagged as a QUESTION, another for TODO, etc.
The sync is necessary because the sheet has additional columns associated with each text line.
For example, the QUESTION sheet data is associated with a flags for applicable to each persona (job role).
The sheet is used to generate docs of questions applicable only to each persona.

1. Sequentially scan through (line by line) a Google Doc for lines tagged with "QUESTION:"
and paste that line in a Google Sheet. 

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1663847395/SampleDoc1_hrpsqb.jpg"><img alt="SampleDoc1" width="300" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1663847395/SampleDoc1_hrpsqb.jpg"></a>

2. Create in new Google Sheet 

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1663847384/SampleSheet1_rssovw.jpg"><img alt="SampleSheet1" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1663847384/SampleSheet1_rssovw.jpg"></a>

3. Have button in google Doc & sheet which invokes the script to run. 

4. Add a sequential number to each QUESTION found and update the Doc so there is a unique reference into the Sheet.

   Add or Update Question Number in Doc: from "QUESTION: text" to "QUESTION 33: text". For now, Ignore anything between QUESTION and :.

5. Add a sortable date/time stamp column in Sheet for each item added or updated.

   Format of the date/time stamp: 22-09-20T24:59:59Z (for Zulu/GMT local time)

6. Include in the Sheet a _Origin column a link back to where the item was found in the Doc.

   This means that you'll be keeping track of headings as you progress sequentially through the file.
   
   Example: "Heading 1" etc. captured as you progress through the Doc.

   ---------

7. In origin, add a URL link to the Heading text.

   Add a sortable date/time stamp to the existing item in the Sheet.

8. Here's the tricky (but cool) part - syncing between Doc and Sheet. 

   From here, we will be updating the Sheet rather than creating one.

   We are adding IDs in the Doc and sheet (such as SEC-02-1) which provides a key to those extra columns in the sheet.
   Based on that code, changes in Question text in the Doc should update the sheet.
   
   Update the sortable date/time stamp to each line changed in the Sheet.
   
   If there is a difference, please add a text in the _Note field in the Sheet.
   
   NOTE: This is what the file looks like after processing. Initially, there would be no number after the QUESTION.  On the first pass, create a new sheet. In the Doc insert a sequential number between QUESTION and : (I prefer to have a space before and after the colon : ).  Let’s call that Question ID or QID.  On the first pass, remove any text between QUESTION and : then replace it with a number.

9. On subsequent runs, open the Sheet to update. Do not update the Doc file.
   We will need to change the QID in the Doc, such as BX-22 at the bottom.

10. Generate a new document for each additional column (one additional column for each user role).

    In each document for a particular role, only print the question text which has been flagged "Yes"/True in the column for that role.

11. Additional tags, such as TODO, PROTIP, etc.

<br /><br />

Tests:
1. Change

## Important URLs

https://www.google.com/script/start/
Google Apps Script home page

https://www.wikiwand.com/en/Google_Apps_Script

https://workspace.google.com/products/apps-script/

https://github.com/googleworkspace/apps-script-samples

https://www.neenopal.com/GoogleAppScript.html

Google announced that it will discontinue its Apps Script UI Service on July 15, 2019.

https://edu.gcfglobal.org/en/topics/googleapps/
Tutorials on Gmail, Keep, Docs, Sheets, Drive, Slides, Maps, Forms


## Install

https://chrome.google.com/webstore/detail/google-apps-script/eoieeedlomnegifmaghhjnghhmcldobl?hl=en-US

## Evaluation

https://martinfowler.com/articles/202009-google-app-dir.html

https://www.darkreading.com/cloud/google-apps-script-vulnerability-exposes-saas-to-url-based-threats
Jan 4, 2018

## Competitors

https://kissflow.com/workflow/google-apps/why-apps-script-isnt-the-solution-for-workflow-in-google-apps/

## Community

https://groups.google.com/g/google-apps-script-community?pli=1

https://stackoverflow.com/questions/tagged/google-apps-script

https://www.reddit.com/r/GoogleAppsScript/

https://pulse.appsscript.info/ by 
Martin Hawksey

https://developers.google.com/community/devfest#what-is-devfest

## For sale

https://www.udemy.com/course/apps-script-course/

## Live help

https://developers.google.com/community/experts/

https://www.codementor.io/google-apps-script-experts

https://www.fiverr.com/gigs/google-script

https://www.upwork.com/hire/google-apps-script-freelancers/

https://developers.google.com/community/experts/directory
Directory of Experts worldwide

## Sample code

https://developers.googleblog.com/2022/04/getting-started-is-hardest-part-find.html

https://www.labnol.org/internet/google-scripts/28281/

https://slashdot.org/software/p/Google-Apps-Script/

## Courses

https://www.freecodecamp.org/news/use-google-sheets-and-google-apps-script-to-build-a-blog-cms-c2eab3fb0b2b/

Jesse Freeman
https://www.linkedin.com/learning/google-apps-script-for-javascript-developers/introduction-to-apps-script?autoplay=true

https://www.amazon.com/Beginners-Guide-Google-Apps-Script/dp/B08C94RJMC
Beginner's Guide to Google Apps Script 1 - Sheets (Step-By-Step Guides to Google Apps Script)
by Barrie Roberts

https://learning.oreilly.com/library/view/google-apps-script/9781491946176/ch01.html
Google Apps Script, 2nd Edition
by James Ferreira

https://www.benlcollins.com/apps-script/google-apps-script-beginner-guide/
   * https://learntocodewith.me/posts/google-apps-script/

## Techniques

https://www.youtube.com/channel/UCwweb1kta5rq-_Oxm5MxpGA

https://jeffreyeverhart.com/2020/01/24/debugging-in-google-apps-script/

## Introduction

https://www.makeuseof.com/tag/what-is-google-script/

https://riptutorial.com/google-apps-script


## Blogs

https://codeburst.io/automating-google-forms-sheets-using-apps-script-2c59db97966f

https://www.toptal.com/google-docs/extending-google-sheets-app-scripts

https://zapier.com/blog/google-apps-script-tutorial/
2016

https://spreadsheetpoint.com/google-sheets-script/

https://www.zype.com/en/blog/google-app-script-for-automating-apis

https://cloud.google.com/apigee/docs/api-platform/integration/run-apps-script-task

https://www.bettercloud.com/monitor/the-academy/uses-for-google-apps-script/
2013

https://www.youtube.com/watch?v=70F3RlazGMY
Google Apps Script - Get and Set Values on Google Sheets

https://codelabs.developers.google.com/codelabs/apps-script-intro#0
Feb 11, 2022 by Wesley Chun (@wescpy)

https://spreadsheet.dev/google-apps-script-tutorial

https://servian.dev/google-apps-script-iot-723d281a21d2

https://dev.targetprocess.com/docs/google-apps-script

https://workspaceupdates.googleblog.com/2020/12/google-apps-script-ide-better-code-editing.html

https://blog.coupler.io/google-apps-script-tutorial/

https://x-team.com/blog/google-apps-script-rest/

## Add-ons

https://speckle.guide/dev/js-app-script.html

https://www.lucidchart.com/techblog/2017/12/07/6-deadly-sins-google-apps-script-add-on/

https://railsware.com/blog/google-apps-script-gotchas-to-develop-an-add%E2%80%91on/


## Outdated

https://xfanatical.com/blog/how-to-add-an-apps-script-to-my-google-doc-sheets-forms-slides/
(outdated)


## More on MacOS

This is one of a series on MacOS:

{% include mac_links.html %}
