---
layout: post
date: "2023-07-30"
file: "azure-certifications"
title: "Azure (Microsoft cloud) certifications"
excerpt: "Microsoft provides free hands-on (gamified) tutorials and free time"
tags: [cloud]
image:
# azure ms logo wait 1900x500-39kb.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/18188069/153fbcca-706c-11e6-983d-0783da57f75c.jpg
  credit: Microsoft Azure
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


PROTIP: When you pass each exam, Tweet <a target="_blank" href="https://twitter.com/search?q=%23azurecertified&src=typed_query">#azurecertified</a> and/or <a target="_blank" href="https://twitter.com/search?q=%23MicrosoftCertified&src=typed_query">#MicrosoftCertified</a>.

NOTE: Groupings of Microsoft's certifications by roles below, people still take exams based on product:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Role </th><th> Certification exam </th></tr>

<tr valign="top"><td> Administrator</td><td>
      * <a href="#AZ-900">AZ-900 Fundamentals</a><br />
      * <a href="#AZ-104">AZ-104 Azure Administrator Associate</a>
   </td></tr>

<tr valign="top"><td> Functional Consultant</td><td>
      * <a href="#AZ-140">AZ-140 Virtual Desktop Specialty</a>
   </td></tr>

<tr valign="top"><td> <a href="#SolutionArchitect">Solution Architect Expert</a></td><td>
      * <a href="#AZ-303">AZ-303</a> Azure Solutions Architect Expert: Technologies<br />
        * <a href="#AZ-304">AZ-304</a> Azure Solutions Architect Expert: Design<br />
        * AZ-600 Stack Hub Operator Associate<br />
        * AZ-120 Azure for SAP Workloads Specialty
   </td></tr>

<tr valign="top"><td> AI Engineer</td><td>
   * <a target="_blank" href="https://wilsonmar.github.io/microsoft-ai#AI-900">AI-900 AI Fundamentals</a><br />
     * <a target="_blank" href="https://wilsonmar.github.io/microsoft-ai#AI-100">AI-100 Azure AI Engineer Associate</a><br />
     * <a target="_blank" href="https://wilsonmar.github.io/microsoft-ai#AI-102">AI-102 Azure AI Engineer</a><br />
     * <a href="#DP-100">DP-100 Azure Data Scientist Associate</a>
   </td></tr>

<tr valign="top"><td> Data Engineer<br /> Data Scientist</td><td>
   * <a href="#DP-900">DP-900 Azure Data Fundamentals</a><br />
   * <a href="#DP-100">DP-100 Azure Data Scientist Associate</a><br />
   * <a href="#DP-203">DP-203 Azure Data Engineer Associate</a> (replaces DP-200 & DP-201)<br />
   * <a target="_blank" href="https://wilsonmar.github.io/azure-data">DP-300 Azure Database Administrator Associate</a><br />
   </td></tr>

<tr valign="top"><td> <a href="#Power_Platform">Power Platform</a> </td><td>
   * PL-900 Power Platform Fundamentals<br />
   * PL-200 Power Platform Functional Consultant<br />
   * PL-400 Power Platform Developer<br />
   * PL-100 Power Platform App-maker<br />
   * PL-600 Power Platform Solution Architect Expert
   </td></tr>

<tr valign="top"><td> DevOps Engineer</td><td>
   * <a href="#AZ-400">AZ-400 DevOps Engineer Expert</a>
   </td></tr>

<tr valign="top"><td> Developer</td><td>
   * <a href="#AZ-204">AZ-204 Azure Developer Associate</a><br />
       * <a target="_blank" href="https://wilsonmar.github.io/azure-iot#AZ-220" title="My hands-on tutorial on Azure IoT">AZ-220 Azure IoT Developer Specialty</a> 
   </td></tr>

<tr valign="top"><td> Security Engineer</td><td>
   * <a href="#SC-900">SC-900 Security, Compliance, and Identity Fundamentals</a><br />
   * <a href="#SC-200">SC-200 Security Operations Analyst Associate</a><br />
   * <a href="#SC-300">SC-300 Identity and Access Administrator Associate</a><br />
   * <a href="#SC-400">SC-400 Information Protection Administrator</a><br />
   * <a href="#AZ-500">AZ-500 Azure Security Engineer Associate</a><br />
   * <a href="#SC-100">SC-100 Microsoft Cybersecurity Architect</a><br />
   </td></tr>
</table>

Andrew Brown offers this diagram:
<a target="_blank" href="https://user-images.githubusercontent.com/300046/110194383-8ebad300-7df5-11eb-9c0c-2d5f165f0ffe.jpeg"><img alt="az-certs-1868x1092.png" width="1868" src="https://user-images.githubusercontent.com/300046/110194383-8ebad300-7df5-11eb-9c0c-2d5f165f0ffe.jpeg"></a>


<a target="_blank" href="https://www.youtube.com/watch?v=ZIlLvKg7owM&list=RDCMUC0m-80FnNY2Qb7obvTL_2fA&start_radio=1">VIDEO</a> of <a target="_blank" href="https://azure.microsoft.com/en-us/resources/videos/build-an-intelligent-bot/">Build an Intelligent Bot with Microsoft Azure</a> by Elliott Perry - Chapter 17 of <a target="_blank" href="https://clouddamcdnprodep.azureedge.net/gdc/2014519/original">EBOOK</a>: 
<a target="_blank" href="https://aka.ms/monthoflunches​">Learn Azure in a Month of 21 Lunches</a> (2020 Manning) by <a target="_blank" href="https://www.linkedin.com/in/iainfoulds">Iain Foulds</a> (<a target="_blank" href="https://twitter.com/fouldsy">@fouldsy</a>), with code at <a target="_blank" href="https://github.com/fouldsy/azure-mol-samples-2nd-ed">https://github.com/fouldsy/azure-mol-samples-2nd-ed</a>

<a target="_blank" href="https://mcptnc.microsoft.com/certificate/">
https://mcptnc.microsoft.com/certificate =
Microsoft Learning Certificates earned dashboard</a>

https://github.com/MicrosoftLearning/AZ-301-MicrosoftAzureArchitectDesign

## Rebranding to roles

The 70-xx series of Microsoft Certified Solutions Associate (MCSA), Microsoft Certified Solutions Developer (MCSD), Microsoft Certified Solutions Expert (MCSE) retired on January 31, 2021.
The 98-xxx series of MTA (Windows Server) exams retired on June 30, 2022.
Microsoft continues to <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/retired-certification-exams">retired</a>:

   * 70-532 - Developing Microsoft Azure Solutions
   * 70-533 - Implementing Microsoft Azure Infrastructure Solutions
   * 70-534 - Architecting Azure Solutions
   * 70-535 - Architecting Microsoft Azure Solutions (ARM templates)
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/70-537">70-538 - Configuring and Operating a Hybrid Cloud with Microsoft Azure Stack</a> replaced by AZ-600 Stack Hub Operator Associate.
   <br /><br />



<hr />

## Training vendors

Among https://docs.microsoft.com/en-us/learn/certifications/partners


### Microsoft Learning

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/azure/">
docs.microsoft.com/en-us/learn/azure</a> lists events 
   * <a target="_blank" href="https://mvtd.events.microsoft.com/Azure?wt.mc_id=onedestination">Virtual Training Days</a> for live sessions with experts and get exam vouchers
   * Ignite conference sessions about new stuff
   * Microsoft Tech Community
   <br /><br />

<a target="_blank" href="https://events.microsoft.com/?timeperiod=next30Days&isSharedInLocalViewMode=true&country=United%20States&language=English">Microsoft Events</a>

#### ESI

If your company has a deal with Microsoft:

1. <a target="_blank" href="https://esi.microsoft.com/">Microsoft's Enterprise Skills Initiative</a>. Sign in with your corporate email.
1. https://esi.microsoft.com/deliverymultiday 
1. Search for a class by checking different roles and time zones. 

   * If you're in Mountain time, a class that starts at 9am Auckland time would be 3pm your time.
   <br /><br />


   ### Skillpipe online class

1. PROTIP: Allocate time on your personal calendar to go through the online Skillpipe class before attending the live class. You'll be less confused and stressed during the class, and enjoy it more.

   CAUTION: The Skillpipe.com provided with registration may not be created to align with the live course's lab.

   https://aka.ms/edge4biz

   ### Join live class

   There are two codes that you need to enter.

1. In the registration <strong>email, "click here to join the training"</strong> makes use of Microsoft Teams. So install or upgrade it before the class.

   PROTIP: It helps to have a secone screen: one to view instructions, another for notes.

1. Once in Teams, click Show conversation icon. 

   QUESTION: How to get rid of participant list at bottom of screen?

1. Browser "Join conversation" can be dismissed once you're in Teams app.
1. To participate in quizzes <a target="_blank" href="https://www.menti.com/">menti.com/</a> is used with a code from trainer.

1. To redeem training key provided by trainer (such as "E059CE1A"), get to lab: on Chrome open a Guest profile to access 

   <a target="_blank" href="https://aka.ms/StudentLabs">https://aka.ms/StudentLabs</a> which redicts to<br /><a target="_blank" href="https://esi.learnondemand.net">https://esi.learnondemand.net/User/CurrentTraining/1234567</a> 

1. Sign in using your personal email.

1. When a window pops up at https://labclient.labondemand.com, click the class link.

   PROTIP: Instructor may not provide a file of their PowerPoint file.

   ### Labs during live class

   PROTIP: Allocate time on your personal calendar to finish or review labs.
   Notice the 4-day class usually goes Monday-Friday 9am-5pm at the local time zone.

1. Click blue Launch button at https://esi.learnondemand.net/Lab/... 
   or aka.ms/az500labs

   ### Redeem Promo Code

1. Type your Azure Pass <strong>Promo Code</strong> 
   
   <strong>PROTIP: If you already have a code from a previous class within the last month, use that and wait until it runs out to use it.</strong>

   <strong>PROTIP: CAUTION: This wipes out your existing data with a new storage account.</strong>

   It takes several minutes to build your environment so you see a Windows 10 Desktop.

1. Expand full screen. Click "Next".

   Follow instructions on the right pane:

1. Click the Edge browser to open it. CAUTION: You can't paste in the pop-up, so click the "T" icon to paste into the working screen to go to 

   <a target="_blank" href="
   https://microsoftazurepass.com">
   https://microsoftazurepass.com</a>

1. Click the blue Start button. Type your Gmail password. Check "Keep me signed in".
1. Click "Confirm Microsoft Account >".
1. Click the T with the code on the right pane. Click "Claim Promo Code".
1. Click the top checkboxes and optionally the second, then "Sign Up".
1. Wait for "Setting up your account" to disappear before the Windows 10 Desktop pops up in a new browser window <strong>without tabs or URL field</strong>.

1. PROTIP: Click the Window menu item at the top of the display to see a list of windows.

   The Azure Portal is in the "Module ..." window.

1. Switch to your email client to see subject "Your Azure subscription is ready".

   PROTIP: Don't click on the "Go to " button because it will be opened on whatever browser is currently active, which is not necessarily the browser window you want.

1. CLick "+" on the browser to open a new tab to check your $100 spend and remaining balance at 

   <a target="_blank" href="https://www.microsoftazuresponsorships.com/balance">https://www.microsoftazuresponsorships.com/balance</a> using your personal email account.

   Notice that the Subscription is "Azure pass - Sponsorship".

1. In the lab, click the working form field you want to fill before clicking the "T" icon to paste into the working screen.

   CAUTION: You can't paste from your regular Clipboard into the class VM.

   CAUTION: The Skillpipe "book" usually does NOT match the PowerPoint presented during the class. And the PowerPoint files shown are not provided to students.

1. If your lab becomes frozen, Reconnect:

   ![az-certs-labclient-reconnect-170x137](https://user-images.githubusercontent.com/300046/112444873-1c625200-8d14-11eb-9b67-f1bfe5a76a9b.png)

1. To search within lab instructions, see GitHub (such as <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies">https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies</a> or <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-303-Microsoft-Azure-Architect-Technologies">https://github.com/MicrosoftLearning/AZ-303-Microsoft-Azure-Architect-Technologies</a>). Look at labs there if you can't access the course's lab environment.

1. Challenge labs you get 3 chances. You can't pause.

1. Replace Internet Explorer, but don't install "Edge" from webpage. Install <a target="_blank" href="https://www.microsoft.com/en-us/edge/business?form=MM13YK&OCID=MM13YK&OCID=AID2100871_SEM_EAIaIQobChMI5YDt_IL87wIVoj6tBh0LbgxvEAAYASAAEgLDFfD_BwE:G:s&ef_id=EAIaIQobChMI5YDt_IL87wIVoj6tBh0LbgxvEAAYASAAEgLDFfD_BwE:G:s">Download Edge browser</a>
1. Click channel/version to select top choice.
1. Click BUILD to select the top choice.
1. Click PLATFORM to select Windows 64 bit.
1. Click DOWNLOAD.
1. Click Save.
1. Click Run and wait for the pop-up while downloading.
1. Click "Enable" to "The 'IEToEdge BHO' add-on from 'Microsoft Corporate' is ready for use."
1. Click CLOSE

1. https://azure.microsoft.com/en-us/features/storage-explorer/

1. Provide instruction feedback to <a target="_blank" href="https://aka.ms/MakeUsBetter">https://aka.ms/MakeUsBetter</a>


### Cloud Academy

PROTIP: I think <a target="_blank" href="https://cloudacademy.com/">CloudAcademy.com</a>
provides a thorough approach to prepare for exams. They have pre-defined set of 
<a target="_blank" href="https://cloudacademy.com/library/azure/labs/">hands-on labs</a>, each about 1-2 hours long.

CloudAcademy also has 
<a target="_blank" href="https://cloudacademy.com/library/azure/quizzes/">
quizzes</a>.

If you want time on servers (one hour at a time), subscribe to
<a target="_blank" href="https://cloudacademy.com/learning-paths/az-900-exam-preparation-microsoft-azure-fundamentals-524/">CloudAcademy.com</a>

See my step-by-step advice for using CloudAcademy's Azure environment.


### FreeCodeCamp.org

<a target="_blank" href="https://www.freecodecamp.org/news/azure-fundamentals-course-az900/">
Free 3-Hour video course on FreeCodeCamp.org</a> by Andrew Brown of ExamPro

### Coursera

https://www.coursera.org/specializations/microsoft-azure-fundamentals-az-900
$49/month after 7 days free.

### OReilly

Offers cloud time


### A Cloud Guru & Linux Academy

ACloudGuru.com (formerly ACloud.guru) offers cloud time with premium subscriptions.
In 2019 they purchased <a target="_blank" href="https://app.linuxacademy.com/search?type=Course&categories=Azure">LinuxAcademy.com</a>


### EDX

https://www.edx.org/learn/azure
by the High School of Digital Culture (ITMO University, Russia) is $149 for those who want quizzes and a completion certificate.

Their Introduction to Machine Learning covers:
   * Regression
   * Classifiers: k-NN and Naive Bayes
   * Classifiers: Logistic Regression
   * Clustering: K-Means, Agglomerative 

Their Advanced covers 
   * Principal Component Analysis (PCA)
   * Support Vector Machine (SVM)
   * Entropy. Decision Trees (DTs)
   * Ensemble Learning
   * Reinforcement Learning

### Vlad

https://vladtalkstech.com/microsoft-certification-study-guides

<hr />

## Microsoft Exam

<a target="_blank" href="https://www.microsoft.com/en-us/learning/dashboard.aspx">
https://www.microsoft.com/en-us/learning/dashboard.aspx</a>
is where you start exams and get certificate pdfs (suitable for framing) and badge images.

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits">
Azure Subscription Service Limits</a>

<hr />

<a name="#AZ-900"></a>

## AZ-900 Azure Fundamentals

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-900">https://docs.microsoft.com/en-us/learn/certifications/exams/az-900</a>

<a target="_blank" href="https://github.com/MicrosoftLearning/Lab-Demo-Recordings/blob/master/AZ-900.md">MS Videos</a>

AZ-900 Microsoft Azure Fundamentals
is not a required prerequisite for any associate or expert certification.

It's less expensive than other AZ exams ($65 vs. $165).

It's worth considering if you are new to Microsoft exams.
It builds confidence with Microsoft and Pearson/Vue exam taking process.

Passing AZ 900 demonstrates broad understanding of cloud concepts:
availability, fault tolerance, 
public/private/hybrid cloud, IaaS, PaaS, SaaS

Andrew Brown, who also offers <a target="_blank" href="https://www.exampro.co/az-900">Exampro prep course for $29/month</a>, shows that (by skipping the repeatition of topics), a good summary can be done in a <a target="_blank" href="https://www.youtube.com/watch?v=NKEFWyqJ5XA" title="Jun 17, 2020">
3 hour VIDEO</a> (with ads but great diagrams). It's done through <a target="_blank" href="https://www.freecodecamp.org/news/azure-fundamentals-course-az900/">FreeCodeCamp.org</a>His advice:
"Study 1-3 hours a day, every day".

<a target="_blank" href="https://cloudacademy.com/learning-paths/az-900-exam-preparation-microsoft-azure-fundamentals-524/">CloudAcademy.com</a>
includes time on servers (one hour at a time).

<a target="_blank" href="https://www.youtube.com/watch?v=53LO_rJz6Es&list=PLHh_n2lgzcrvecPJ-zMukLlDrq0GMSMmB" title="Dec 7, 2020">Ravikirans answers Whizlabs 55 questions</a> 

<a target="_blank" href="https://www.youtube.com/watch?v=cAgN6Ac8MS4&list=PLHh_n2lgzcrvecPJ-zMukLlDrq0GMSMmB&index=2">AZ-900 15 questions from WhizLabs</a>

<a target="_blank" href="https://quizlet.com/416573542/az-900-flash-cards/">Quizlet flash cards</a>



<a name="AZ-103"></a>

## AZ-103 Azure Administrator Associate

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-104">
https://docs.microsoft.com/en-us/learn/certifications/exams/az-104</a> on August 31, 2020 replaced <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-103">exam AZ-103: Microsoft Azure Administrator</a> which had superceded retired exams AZ-100 and AZ-101.

<a target="_blank" href="https://github.com/MicrosoftLearning/Lab-Demo-Recordings/blob/master/AZ-103.md">MS Videos</a>

https://github.com/MicrosoftLearning/AZ-103-MicrosoftAzureAdministrator

<a target="_blank" href="https://www.youtube.com/watch?v=48Ghqo57HrY&list=PLlI3peB1V-rrzvs2SEgZkg-9DIvS7Dmcw&index=2">VIDEO: AZ-103 vs AZ-104</a>


<a name="AZ-104"></a>

## AZ-104 Azure Administrator Associate

Be designated a <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/azure-administrator/">Microsoft Certified: Azure Administrator Associate</a> by passing one test.

Implement, monitor, and maintain Azure solutions including
compute, storage, network, and security resources

* Manage Azure identities and governance; 
* implement and manage storage; 
* deploy and manage Azure compute resources; 
* configure and manage <a target="_blank" href="https://wilsonmar.github.io/azure-networking/">virtual networking</a>;
* <a target="_blank" href="https://wilsonmar.github.io/azure-monitoring/">monitor</a> and back up Azure resources
<br /><br />

   * https://docs.microsoft.com/en-us/learn/azure/

   * https://github.com/MicrosoftLearning/AZ-104-MicrosoftAzureAdministrator

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/azure-administrator/?wt.mc_id=esi_lxp_webpage_wwl&tab=tab-learning-paths">Microsoft's tutorial</a> provides more managerial aspects (such as governance) than others.

A search of Microsoft Learn for "Administrator" and "Azure" <a target="_blank" href="https://docs.microsoft.com/en-us/learn/browse/?roles=administrator&wt.mc_id=esi_lxp_webpage_wwl&products=azure&resource_type=learning%20path">82 </a> <a target="_blank" href="https://docs.microsoft.com/en-us/learn/browse/?roles=administrator&wt.mc_id=esi_lxp_webpage_wwl&products=azure&resource_type=module">yielded 317 modules</a> over 14 pages (at time of writing). Most of them focus on a specific service/product:

   * <a target="_blank" href="https://docs.microsoft.com/learn/modules/bash-introduction/">Intro to Bash</a>
   * <a target="_blank" href="https://docs.microsoft.com/learn/modules/introduction-azure-firewall/">Intro to Azure Firewall</a>
   <br /><br />

Video Lectures:

1. <a target="_blank" href="https://www.freecodecamp.org/news/azure-administrator-certification-az-104-pass-the-exam-with-this-free-11-hour-course/">11 hour video course on FreeCodeCamp.org</a> <a target="_blank" href="https://www.youtube.com/watch?v=10PbGbTUSAg" title="May 3, 2021">on YouTube</a> by Andrew Brows of <a target="_blank" href="https://www.exampro.co/az-104">ExamPro</a>.

1. <a target="_blank" href="https://portal.cloudskills.io/products/azure-administrator-az-104-exam-prep-course">Tim Warner and Mike Pfeiffer's CloudSkills.io</a> 

1. Michael J. Shannon takes a deep dive on a lightboard in <a target="_blank" href="https://learning.oreilly.com/videos/exam-az-104-microsoft/9780136823483/9780136823483-A104_01_01_01">9+ hours of videos with transcript from OReilly</a> 

* Pluralsight has <a target="_blank" href="https://app.pluralsight.com/paths/certificate/microsoft-azure-administrator-az-104">a series of videos for each domain</a>

* <a target="_blank" href="https://cloudacademy.com/learning-paths/az-104-exam-preparation-microsoft-azure-administrator-1-1332/">CloudAcademy's learning path</a>, by Thomas Mitchell, provides quizzes along the way and <strong>time on actual Azure instances</strong>.

* Tim Warner <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-administrator-preparing-az-104-exam">Pluralsight: Microsoft Azure Administrator: Preparing for the AZ-104 Exam</a>

* <a target="_blank" href="https://cloudacademy.com/learning-paths/az-104-exam-preparation-microsoft-azure-administrator-1-1332/">
CloudAcademy</a> provides lab time on the real Azure environment.

* Anand Rao Nednur's <a target="_blank" href="https://mckinsey.udemy.com/course/exam-az-104-microsoft-azure-administrator/">McK</a> <a target="_blank" href="https://www.udemy.com/course/exam-az-104-microsoft-azure-administrator/"><strong>15.5 hour</strong> Udemy video course</a> (sometimes using a lightboard) is <strong>most comprehensive</strong>. So it's as much about understanding how to do the job as passing the test.

* Alan Rodriguez's <a target="_blank" href="https://mckinsey.udemy.com/course/microsoft-certified-azure-administrator/">McK</a> <a target="_blank" href="https://www.udemy.com/course/microsoft-certified-azure-administrator/">Udemy.com</a> 

K21Academy <a target="_blank" href="https://www.youtube.com/watch?v=7z6VduCVYH4&list=PLlI3peB1V-rrzvs2SEgZkg-9DIvS7Dmcw">AZ-104: what You Need To Know</a>

Niraj Kumar, founder of <a target="_blank" href="https://azureezy.com/az-104-azure-administrator/">Azureezy.com</a>, https://t.me/AzureTalk, has <a target="_blank" href="https://t.me/azuretalk">Telegram chat</a> with his series on <a target="_blank" href="https://www.youtube.com/watch?v=413zBdy_ocQ">YouTube Jul 21, 2020</a> with <a target="_blank" href="https://azureezy.com/az-104-azure-administrator/">slidedecks here</a>:
   * <a target="_blank" href="https://www.youtube.com/watch?v=413zBdy_ocQ&list=PLBUNlq0o5irQ8xx7OpnF6dUH5Zfx_imUI">AZ exams</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=413zBdy_ocQ&list=PLBUNlq0o5irQ8xx7OpnF6dUH5Zfx_imUI&t=9m39s">Manage Azure Identities and governance</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=lL6Osu3GERQ&list=PLBUNlq0o5irQ8xx7OpnF6dUH5Zfx_imUI&index=2">Implement and manage Azure Webapps and Container</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=V0FUu0S2Eck&list=PLBUNlq0o5irQ8xx7OpnF6dUH5Zfx_imUI&index=3">Azure Compute</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=3WdTLn8vNO4&list=PLBUNlq0o5irQ8xx7OpnF6dUH5Zfx_imUI&index=4">Azure Storage</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=_Z9xzuX6Fsw&list=PLBUNlq0o5irQ8xx7OpnF6dUH5Zfx_imUI&index=5">Azure Networking Part1</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=FVJUZkmuozY&list=PLBUNlq0o5irQ8xx7OpnF6dUH5Zfx_imUI&index=6">Azure Networking Part2</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=JEveC534tQk&list=PLBUNlq0o5irQ8xx7OpnF6dUH5Zfx_imUI&index=7">Azure Backup and Site Recovery</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=AzPvDNUldoI&list=PLBUNlq0o5irQ8xx7OpnF6dUH5Zfx_imUI&index=8&t=10m43s" title="Sep 15, 2020">1hr 47m Azure Monitoring</a>
   <br /><br />

On ACloudGuru.com/LinuxAcademy.com:

   https://app.pluralsight.com/paths/certificate/microsoft-azure-administrator-az-104 by Tim Warner and <a target="_blank" href="https://www.linkedin.com/in/michael-teske-45240561/">Michael Teske</a>
   * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/573">LinuxAcademy</a>
   * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/763">Intro to Azure Files</a>

Chris Wahl (twitch.tv/wahlnetwork)

   * <a target="_blank" href="https://www.youtube.com/watch?v=gyZdCzdkSY4" title="Oct 13, 2020">Beginners Tutorial to Terraform with Azure</a>

CloudSkills:

   * <a target="_blank" href="https://www.youtube.com/watch?v=d6EOEXxMZ8w">
    Building Azure Infrastructure with Terraform</a>

### Flash cards:

   * <a target="_blank" href="https://quizlet.com/subject/az-104/">Quizlet flash cards</a>

### Sample tests:

1. Take a Practice Test (from MeasureUp) that feels just like the actual test, if you are enrolled in <a target="_blank" href="https://esi.microsoft.com/getcertification">Microsoft's Enterprise Skills Initiative</a>.

   After sign-up, you get an email to register an account <a target="_blank" href="https://www.skillpipe.com/">https://www.skillpipe.com</a> then paste the license key from the email to redeem it on your <a target="_blank" href="https://www.skillpipe.com/#/bookshelf/books">bookshelf</a>, where you take the course.

* <a target="_blank" href="https://app.pluralsight.com/paths/skills/microsoft-azure-administrator-az-104">Pluralsight</a>
by Tim Warner with <a target="_blank" href="https://www.kaplanlearn.com/education/offeringdashboard/index/04347ac4e89b19f5ef7559ef6f975386">Kaplan sample exam</a>.

* XaaS has <a target="_blank" href="https://www.udemy.com/course/microsoft-azure-administrator-practice-tests/">6 tests at Udemy</a>, each with 52 questions (312 total). Does it sync with <a target="_blank" href="https://www.udemy.com/course/microsoft-azure-administrator-training-bootcamp/">Bootcamp</a> also from XaaS?

<hr />

<a name="Sec_Certs"></a>

## Security Certifications

<a target="_blank" href="https://www.youtube.com/watch?v=6znaiD9B8mw">
Ask the Experts: New Microsoft Security Compliance, Identity Training and Certification Portfolio</a> from Ignite March 2021


<a name="MS-500"></a>

## MS-500 Microsoft 365 Security Admin

<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/certifications/exams/ms-500">
https://docs.microsoft.com/en-us/learn/certifications/exams/ms-500</a>

https://github.com/MicrosoftLearning/MS-500-Microsoft-365-Security
MS-500 Microsoft 365 Security Administrator courses

https://vladtalkstech.com/ms-500-study-guide-microsoft-365-security-administration

<a target="_blank" href="https://www.udemy.com/course/microsoft-365-security-administration-exam-ms-500/">
on Udemy: Microsoft 365 Security Administration (Exam MS-500)</a>

https://spvlad.com/2OxcZIJ
Planning and Designing Microsoft 365 Identity Strategy

<a target="_blank" href="https://app.pluralsight.com/library/courses/protecting-devices-applications-microsoft-365">
VIDEO: Protecting Devices and Applications in Microsoft 365</a>
By Robert McMillen

https://github.com/zaalion/oreilly-azure-app-security

https://github.com/MicrosoftLearning/MS-030-Office365Administrator

<hr />

<a name="Power_Platform"></a>

## Power Platform certifications

<a name="PL-900"></a>
As with other fundamentals certifications, it's $99 for
* https://learn.microsoft.com/en-us/certifications/exams/pl-900
   * Describe the business value of Microsoft Power Platform (20–25%)
   * Identify the core components of Microsoft Power Platform (10–15%)
   * Demonstrate the capabilities of Power BI (20–25%)
   * Demonstrate the capabilities of Power Apps (25–30%)
   * Demonstrate the capabilities of Power Automate (10–15%)
   * Demonstrate the capabilities of Power Virtual Agents (1–5%)
   <br /><br />

   <a target="_blank" href="https://microsoftlearning.github.io/PL-900-Microsoft-Power-Platform-Fundamentals/">Microsoft class: PL-900-Microsoft-Power-Platform-Fundamentals</a> 
   [<a target="_blank" href="https://github.com/MicrosoftLearning/PL-900-Microsoft-Power-Platform-Fundamentals">GitHub</a>]

   * <a target="_blank" href="https://www.youtube.com/watch?v=lpsre6vWzCc">YouTube: 2 hr "Full Course"</a> to <a target="_blank" href="https://ko-fi.com/s/cbd19025e9">$10+ PPT</a> by Susanth Sutheesh
   * <a target="_blank" href="https://app.pluralsight.com/paths/skills/microsoft-power-platform-fundamentals-pl-900">On Pluralsight: Fundamentals</a> by Vlad Catrinescu
   * <a target="_blank" href="https://www.udemy.com/course/pl-900-microsoft-power-platform-fundamentals-r/">8-hour Udemy</a>
   * <a target="_blank" href="https://www.whizlabs.com/blog/pl-900-exam-preparation-guide/">WhizLabs</a>
   <br /><br />

$165 for more advanced certs:

<a name="PL-200"></a>

* https://learn.microsoft.com/en-us/certifications/exams/pl-200 Power Platform Functional Consultant

<a name="PL-400"></a>

* https://learn.microsoft.com/en-us/certifications/exams/pl-400 Power Platform Developer

<a name="PL-100"></a>

   * https://learn.microsoft.com/en-us/certifications/exams/pl-100 Power Platform App-maker

<a name="PL-600"></a>

   * https://learn.microsoft.com/en-us/certifications/exams/pl-600 Power Platform Solution Architect Expert

<a target="_blank" href="https://ravikirans.com/category/azure-certification/">Ravikiran</a> specializes in sample exams for the above.

<hr />

<a name="AZ-400"></a>

## AZ-400 DevOps Engineer Expert

A pre-requisite is <a href="#AZ-104">AZ-104</a> OR <a href="#AZ-204">AZ-204</a> to get this Expert certification.

https://docs.microsoft.com/en-us/learn/certifications/devops-engineer/

https://docs.microsoft.com/en-us/learn/certifications/exams/az-400
was updated March 23, 2021

Video classes:

   * <a target="_blank" href="https://portal.cloudskills.io/products/microsoft-azure-devops-engineer-certification-az-400">By Mike Pfiffer at Cloudskills.io</a> has a "Path of least resistance" to earn your certificate: Whizlabs

   * <a target="_blank" href="https://www.udemy.com/course/azure100/learn/lecture/22182186#overview">Udemy video class</a> presents a more logical flow, not in the confusing exam objectives.

   * <a target="_blank" href="https://github.com/timothywarner/az400">OReilly.com class by Timothy Warner</a>

   * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/463">Linux Academy</a>

https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions


<hr />

## Azure Security certifications

https://techcommunity.microsoft.com/t5/security-compliance-identity/security-community-webinars/ba-p/927888

https://techcommunity.microsoft.com/t5/security-compliance-identity/security-community-webinars/ba-p/927888

See <a target="_blank" href="https://wilsonmar.github.io/security-certifications">my blog on security certifications at<br />https://wilsonmar.github.io/security-certs</a>


<a name="SC-900"></a>

### SC-900 Security

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/sc-900">
SC-900</a> takes 60 minutes to answer 50 single-line mulitple-choice questions about features (not configuration).
Includes M365 Defender and Compliance Center.

Domains:
* Manage identity and access (20-25%)
* Implement platform protection (35-40%)
* Secure data and applications (30-35%)
* Manage security operations (15-20%)

Videos:
   * <a target="_blank" href="https://www.coursera.org/learn/microsoft-sc-900-exam-preparation-and-practice?specialization=microsoft-cybersecurity-analyst">Coursera Dec 11, 2023</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=Bz-8jM3jg-8&list=RDCMUCpIn7ox7j7bH_OFj7tYouOQ&start_radio=1&t=5297">2hr John Savill</a>draws a <a target="_blank" href="https://github.com/johnthebrit/RandomStuff/blob/master/SC-900ReviewWhiteboard.svg">massive whiteboard</a> as massive as his muscles. One in a massive series with <a target="_blank" href="https://github.com/johnthebrit/AzureMasterClass">pdfs in GitHub</a>.


<a name="SC-200"></a>

### SC-200

Taking this one <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/sc-200">SC-200 exam</a> makes you a <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/security-operations-analyst/">Microsoft Security Operations Analyst</a>.

This exam measures your ability to mitigate threats using Microsoft 365 Defender, Azure Defender, and Azure Sentinel SIEM/SOAR.

<a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst">Class SC-200T00</a> has these hands-on labs:

1. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_01_Lab1_Ex1_Explore_M365_Defender.md"> Module 1 - Lab 1 - Exercise 1 - Explore Microsoft 365 Defender </a>
2. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_02_Lab1_Ex1_Deploy_Defender_Endpoint.md"> Module 2 - Lab 1 - Exercise 1 - Deploy Microsoft Defender for Endpoint </a>
3. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_02_Lab1_Ex2_Mitigate_Attacks.md"> Module 2 - Lab 1 - Exercise 2 - Mitigate Attacks with Microsoft Defender for Endpoint </a>
4. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_03_Lab1_Ex1_Enable_Defender.md"> Module 3 - Lab 1 - Exercise 1 - Enable Microsoft Defender for Cloud</a>
5. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_03_Lab1_Ex2_Azure_Defender.md"> Module 3 - Lab 1 - Exercise 2 - Mitigate threats using Microsoft Defender for Cloud </a>
6. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_04_Lab1_Ex1_KQL.md"> Learning Path 4 - Lab 1 - Exercise 1 - Create queries for Microsoft Sentinel using Kusto Query Language (KQL)</a>
7. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_05_Lab1_Ex1_Deploy_Sentinel.md"> Module 5 - Lab 1 - Exercise 1 - Configure your Microsoft Sentinel environment </a>
8. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_06_Lab1_Ex1_Connect_Services.md"> Module 6 - Lab 1 - Exercise 1 - Connect data to Microsoft Sentinel using data connectors </a>
9. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_06_Lab1_Ex2_Connect_Windows.md"> Module 6 - Lab 1 - Exercise 2 - Connect Windows devices to Microsoft Sentinel using data connectors </a>
10. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_06_Lab1_Ex3_Connect_Linux.md"> Module 6 - Lab 1 - Exercise 3 - Connect Linux hosts to Microsoft Sentinel using data connectors </a>
11. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_07_Lab1_Ex8_Workbooks.md"> Module 7 - Lab 1 - Exercise 8 - Create workbooks </a>
12. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_06_Lab1_Ex4_Connect_Threat_Intel.md"> Module 6 - Lab 1 - Exercise 4 - Connect Threat intelligence to Microsoft Sentinel using data connectors </a> 
13. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_07_Lab1_Ex1_Security_Rule.md"> Module 7 - Lab 1 - Exercise 1 - [Modify] Activate a Microsoft Security rule </a>
14. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_07_Lab1_Ex2_Playbook.md"> Module 7 - Lab 1 - Exercise 2 - Create a Playbook </a>
15. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_07_Lab1_Ex3_Scheduled_Query.md"> Module 7 - Lab 1 - Exercise 3 - Create a Scheduled Query </a>
16. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_07_Lab1_Ex4_Attacks.md"> Module 7 - Lab 1 - Exercise 4 - Understand Detection Modeling </a> (Attacks)
17. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_07_Lab1_Ex5_Perform_Attacks.md"> Module 7 - Lab 1 - Exercise 5 - Conduct [perform simulated] attacks </a>
18. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_07_Lab1_Ex6_Detections.md"> Module 7 - Lab 1 - Exercise 6 - Create Detections </a>
19. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_07_Lab1_Ex7_Investigate.md"> Module 7 - Lab 1 - Exercise 8 - Investigate Incidents</a>
20. Create ASIM parsers
   * https://learn.microsoft.com/en-us/azure/sentinel/normalization-about-schemas
   * https://learn.microsoft.com/en-us/azure/sentinel/normalization
   * https://aka.ms/SecurityCommunity
21. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_08_Lab1_Ex1_Hunting.md"> Module 8 - Lab 1 - Exercise 1 - Perform Threat Hunting in Microsoft Sentinel </a>
22. <a target="_blank" href="https://github.com/MicrosoftLearning/SC-200T00A-Microsoft-Security-Operations-Analyst/blob/master/Instructions/Labs/LAB_AK_08_Lab1_Ex2_Notebooks.md"> Module 8 - Lab 1 - Exercise 2 - Hunt Threats using Notebooks with Microsoft Sentinel </a>

Exam prep:
   * https://www.whizlabs.com/learn/course/microsoft-azure-sc-200/
   * https://www.whizlabs.com/microsoft-security-operations-analyst-sc-200/



<a name="SC-300"></a>

### SC-300

https://docs.microsoft.com/en-us/learn/certifications/exams/sc-300

FREE: https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator has 31 labs at time of writing:

* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_00_SetUpLabResources.md"> Lab 00: Lab Environment Setup </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_01_ManageUserRoles.md"> Lab 01: Manage user roles </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_02_WorkingWithTenantProperties.md"> Lab 02: Working with tenant properties </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_03_AssignLicensesToUsersByGroupMembershipAAD.md"> Lab 03: Assigning licenses using group membership </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_04_RestoreRemoveRecentlyDeletedUserUsingAAD.md"> Lab 04: Restore a deleted user </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_05_AddingGroupsToAAD.md"> Lab 05: Adding groups to Azure AD </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_06_ChangeGroupLicenseAssignments.md"> Lab 06: Change group license assignments </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_07_ChangeUserLicenseAssignments.md"> Lab 07: Change user account license assignments </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_08_ConfigureExternalCollaborationSettings.md"> Lab 08: Configure external collaboration settings </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_09_AddGuestUsersToTheDirectory.md"> Lab 09: Add guest users to the directory </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_10_InviteGuestUsersInBulk.md"> Lab 10: Invite guest users in bulk </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_11_WorkingWithDynamicGroups.md">  Lab 11: Working with dynamic groups </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_12_EnableAzureADMultiFactorAuthentication.md"> Lab 12 - Enable Azure AD multi-factor authentication </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_13_ConfigureAndDeploySelfServicePasswordReset.md"> Lab 13 - Configure and deploy self-service password reset </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_14_WorkingWithSecurityDefaults.md"> Lab 14 - Working with security defaults </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_15_ImplementAndTestAConditionalAccessPolicy.md"> Lab 15 - Implement and test a conditional access policy </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_16_ConfigureAuthenticationSessionControls.md"> Lab 16 - Configure authentication session controls </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_17_ManageAzureADSmartLockoutValues.md"> Lab 17 - Manage Azure AD smart lockout values </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_18_EnableSignRiskPolicy.md"> Lab 18 - Enable sign in and user risk policies </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_19_ConfigureAAD_MultiFactorAuthRegPolicy.md"> Lab 19 - Configure an Azure AD multi-factor authentication registration policy </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_20_ImplementAccessManagementForApps.md"> Lab 20 - Implement access management for apps </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_21_CreateANewCustomRoleToGrantAccessToManageAppRegistrations.md"> Lab 21 - Implement access management for apps </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_22_RegisterAnApplication.md"> Lab 22 - Register an application </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_23_GrantTenantWideAdminConsentToAnApplication.md"> Lab 23: Grant tenant-wide admin consent to an application </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_24_AddAppRolesToYourAppAndReceiveThemInTheToken.md"> Lab 24: Add app roles to your app and receive them in the token </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_25_CreateAndManageACatalogOfResourcesInAADEntitlementManagement.md"> Lab 25: Create and manage a catalog of resources in Azure AD entitlement management </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_26_AddTermsOfUseAcceptanceReporting.md"> Lab 26: Add terms of use and acceptance reporting </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_27_ManageTheLifecycleOfExternalUsersInAADIdentityGovernanceSettings.md"> Lab 27: Manage the lifecycle of external users in Azure AD Identity Governance settings </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_28_ConfigurePrivilegedIdentityManagementForAADRoles.md"> Lab 28: Configure Privileged Identity Management for Azure AD roles </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_29_AssignAADRolesInPrivilegedIdentityManagement.md"> Lab 29: Assign Azure AD roles in Privileged Identity Management </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_30_AssignAzureResourceRolesInPrivilegedIdentityManagement.md"> Lab 30: Assign Azure resource roles in Privileged Identity Management </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-300-Identity-and-Access-Administrator/blob/master/Instructions/Labs/Lab_31_ConnectDataFromAADToAzureSentinel.md"> Lab 31: Connect data from Azure Active Directory (Azure AD) to Azure Sentinel </a>


https://www.whizlabs.com/learn/course/microsoft-azure-sc-300/


<a name="SC-400"></a>

### SC-400 Microsoft Information Protection Administrator

https://docs.microsoft.com/en-us/learn/certifications/exams/sc-400
"Implement information protection; implement data loss prevention; and implement information governance."

https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator has 13 labs at time of writing:

* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_01_Lab1_Ex1_compliance_roles.md"> Lab 1 - Exercise 1 - Manage Compliance Roles </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_01_Lab1_Ex2_message_encryption.md"> Lab 1 - Exercise 2 - Manage Office 365 Message Encryption </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_01_Lab1_Ex3_Sensitive_Information_Types.md"> Lab 1 - Exercise 3 - Manage Sensitive Information Types </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_01_Lab1_Ex4_Trainable_Classifiers.md"> Lab 1 - Exercise 4 - Manage Trainable Classifiers </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_01_Lab1_Ex5_Sensitivity_Labels.md"> Lab 1 - Exercise 5 - Manage Sensitivity Labels </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_02_Lab1_Ex1_DLP_policies.md"> Lab 2 - Exercise 1 - Manage DLP Policies </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_02_Lab1_Ex2_Endpoint DLP.md"> Lab 2 - Exercise 2 - Manage Endpoint DLP </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_02_Lab1_Ex3_DLP_reports.md"> Lab 2 - Exercise 3 - Manage DLP reports </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_03_Lab1_Ex1_retention_policies.md"> Lab 3 - Exercise 1 - Configure Retention Policies </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_03_Lab1_Ex2_retention_labels.md"> Lab 3 - Exercise 2 - Implement Retention Labels </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_03_Lab1_Ex3_service_based_retention.md"> Lab 3 - Exercise 3 - Configure Service-based Retention </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_03_Lab1_Ex4_eDiscovery_recovery.md"> Lab 3 - Exercise 4 - Use eDiscovery for Recovery </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/SC-400T00A-Microsoft-Information-Protection-Administrator/blob/master/Instructions/Labs/LAB_AK_03_Lab1_Ex5_records_management.md"> Lab 3 - Exercise 5 - Configure Records Management </a>


https://www.whizlabs.com/learn/course/microsoft-azure-sc-400/



<a name="AZ-500"></a>

### AZ-500 Security certification

<a target="_blank" href="https://learn.microsoft.com/en-us/shows/exam-readiness-zone/preparing-for-az-500-manage-identity-and-access-1-of-4" title="by Ken Lawson">VIDEO</a>:
To be a <a target="_blank" href="https://learn.microsoft.com/en-us/certifications/azure-security-engineer/">Microsoft Certified: Azure Security Engineer Associate</a>, <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-500">read modules</a> and pass Microsoft Azure Security Technologies</a> domains:

<a target="_blank" href="https://microsoftlearning.github.io/AZ500-AzureSecurityTechnologies/">Hands-on labs</a> 
<a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies">on GitHub</a>:

   <ul>Group 1: Manage identity and access (30-35%)
   </ul>

1. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_01_RBAC.md">Role-Based Access Control (RBAC)</a>
   1. Create the Senior Admins group with the user account Joseph Price as its member (the Azure portal).
   2. Create the Junior Admins group with the user account Isabel Garcia as its member (PowerShell).
   3. Create the Service Desk group with the user Dylan Williams as its member (Azure CLI).
   4. Assign the Virtual Machine Contributor role to the Service Desk group.
   <br /><br />

2. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_02_AzurePolicy.md">Azure Policy </a>
3. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_03_AzureLocks.md">Resource Manager Locks </a>

4. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_04_MFAConditionalAccessandAADIdentityProtection.md">MFA, Conditional Access (and AAD Identity Protection)</a>
   1. Deploy an Azure VM by using an Azure Resource Manager template
   2. Implement Azure MFA
   3. Implement Azure AD Conditional Access Policies
   4. Implement Azure AD Identity Protection
   <br /><br />

5. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_05_PIM.md">Azure AD Privileged Identity Management </a>
   1. Configure PIM users and roles.
   2. Activate PIM roles with and without approval.
   3. Create an Access Review and review PIM auditing features.
   <br /><br />

   Group 2: Implement platform protection (15-20%)

6. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_06_ImplementDirectorySynchronization.md">Implement Directory Synchronization </a>
   1. Deploy an Azure VM hosting an Active Directory domain controller
   2. Create and configure an Azure Active Directory tenant
   3. Synchronize Active Directory forest with an Azure Active Directory tenant
   <br /><br />

7. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_07_NSGs.md">Network Security Groups and Application Security Groups</a>
   1. Create the virtual networking infrastructure
   2. Deploy virtual machines and test the network filters
   <br /><br />

   Group 3: Manage security operations (25-30%)

8. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_08_AzureFirewall.md">Azure Firewall </a>
   1. Deploy and test an Azure Firewall
   <br /><br />

9. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_09_ConfiguringandSecuringACRandAKS.MD">Configuring and Securing ACR and AKS </a>
   1. Deploy the base infrastructure from an ARM template
   2. Configure the Key Vault resource with a key and a secret
   3. Configure an Azure SQL database and a data-driven application
   4. Demonstrate the use of Azure Key Vault in encrypting the Azure SQL database
   <br /><br />

10. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_10_KeyVaultImplementingSecureDatabysettingupAlwaysEncrypted.md">Key Vault (Implementing Secure Data by setting up Always Encrypted)</a>
    1. Deploy the base infrastructure from an ARM template
    2. Configure the Key Vault resource with a key and a secret
    3. Configure an Azure SQL database and a data-driven application
    4: Demonstrate the use of Azure Key Vault in encrypting the Azure SQL database
    <br /><br />

    Group 4: Secure data and applications (25-30%)

11. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_11_SecuringAzureSQLDatabase.MD">Securing Azure SQL Database </a>
12. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_12_SecuringAzureStorage.MD">Service Endpoints and Securing Storage </a>
13. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_13_Azure Monitor.md">Azure Monitor </a>
    1. Collect data from an Azure virtual machine with Azure Monitor
    <br /><br />

14. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_14_Microsoft%20Defender%20for%20Cloud.md">Microsoft Defender for Cloud </a>
15. <a target="_blank" href="https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies/blob/master/Instructions/Labs/LAB_15_Microsoft%20Sentinel.md">Microsoft Sentinel</a> (SIEM/SOAR)
<br /><br />

Tim Warner tends to jump around a bit, so his material is great for review:
   * TechTrainerTim.com
   * <a target="_blank" href="https://learning.oreilly.com/live-events/-/0636920360612/">Live Crash Course Jan 23 & 24, 2023</a> (previously April 26 & 27, 2021)
   * https://github.com/timothywarner/az500
   <br /><br />

* <a target="_blank" href="https://learning.oreilly.com/library/view/-/9780138041038/">15 pages: AZ-500 Microsoft Azure Security Technologies Guided Cert Prep Sep. 2022</a>

    <ul>Section 1: Manage Identity and Access:</ul>

    1. Manage Azure AD Identities
    2. Manage Azure AD Secure Access
    3. Manage Application Access
    4. Manage Access Control
    
       Section 2: Implement Platform Protection:

    5. Implement Azure Firewall [Network] Security (+)
    6. Implement Network Load Balancer Security (+)
    7. Implement Storage and Application Security (+)  
    8. Implement Virtual Network Security
   
    9. Configure Advanced Security for Compute
    10. Configure Data Encryption (+)

        Section 3: Manage security operations:

    11. Configure Centralized Policy Management
    12. Configure and Manage Threat Protection
    13. Configure and Manage Security Monitoring Solutions
    
        Section 4: Secure data and applications:

    14. Configure Security for Storage
    15. Configure Security for Data
    16. Configure and Manage Azure Key Vault
   <br /><br />

Others on OReilly:
   * <a target="_blank" href="https://learning.oreilly.com/live-events/microsoft-azure-security-technologies-az-500-bootcamp/0636920080783/">Microsoft Azure Security Technologies (AZ-500) Bootcamp</a> by Reza Salehi
   * <a target="_blank" href="https://learning.oreilly.com/api/v1/continue/9780137834280/">Exam Ref AZ-500 Microsoft Azure Security Technologies</a> by Yuri Diogenes and Orin Thomas
   * <a target="_blank" href="https://learning.oreilly.com/library/view/-/9781119870371/">BOOK</a>: "MCA Microsoft Certified Associate Azure Security Engineer Study Guide" from Sybex November 2022 by Shimon Brathwaite 
   * <a target="_blank" href="https://learning.oreilly.com/videos/-/9780137702039/">8h 34m Video course from Microsoft</a> Jan 2022
   <br /><br />

Sample tests:
   * <a target="_blank" href="https://learning.oreilly.com/certifications/9780136965244/">Pearson's AZ-500 Practice Test on OReilly</a> is the most selectable. April 2022
   * https://www.whizlabs.com/learn/course/microsoft-azure-az-500/
   <br /><br />

References:
   * https://www.thomasmaurer.ch/2020/05/az-500-study-guide-microsoft-azure-security-technologies-2021/
   * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/367">Linux Academy Microsoft Azure Security Technologies</a> by Tia Williams
   * aka.ms/az500labs = 
   https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies
   * https://www.youtube.com/watch?v=uw-lwS_4pvU by <a target="_blank" href="https://www.linkedin.com/in/dnatwick/">Dwayne Natwick</a>, <a target="_blank" href="https://captainhyperscaler.com/">captainhyperscaler.com</a> & <a target="_blank" href="https://bit.ly/dwayne-learning-hub-form">Learn Room</a>)

   <br /><br />

<hr />

<a name="SC-100"></a>

### SC-100 Microsoft Cybersecurity Architect 

<a target="_blank" href="https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RWVbXN">PDF</a>:
<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/sc-100">
SC-100</a> takes 2 hours to answer 70% of 48 single-line mulitple-choice questions about features (not configuration). Questions include M365 Defender and Compliance Center, so
<a target="_blank" href="https://learn.microsoft.com/en-us/certifications/cybersecurity-architect-expert/">first earn</a> ONE of <a href="#SC-200">SC-200</a>, <a href="#SC-300">SC-300</a>, <a href="#AZ-500">AZ-500</a>, or <a href="#MS-500">MS-500</a>.

The Microsoft cybersecurity architect has subject matter expertise in designing and evolving the cybersecurity strategy to protect an organization's mission and business processes across all aspects of the enterprise architecture. The cybersecurity architect designs a Zero Trust strategy and architecture, including security strategies for data, applications, access management, identity, and infrastructure. The cybersecurity architect also evaluates Governance Risk Compliance (GRC) technical strategies and security operations strategies.

The cybersecurity architect continuously collaborates with leaders and practitioners in IT security, privacy, and other roles across an organization to plan and implement a cybersecurity strategy that meets the business needs of an organization.

A candidate for this exam should have advanced experience and knowledge in a wide range of security engineering areas including identity and access, platform protection, security operations, securing data and securing applications. They should also have experience with hybrid and cloud implementations.

<a target="_blank" href="https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RWVbXN">PDF</a>: <a target="_blank" href="https://learn.microsoft.com/en-us/training/paths/sc-100-design-zero-trust-strategy-architecture/">Free tutorials</a>:
* Design a Zero Trust strategy and architecture (30–35%)
* Evaluate Governance Risk Compliance (GRC) technical strategies and security operations
strategies (10–15%)
* Design security for infrastructure (10–15%)
* Design a strategy for data and applications (15–20%)
* Recommend security best practices and priorities (20–25%)
<br /><br />

https://github.com/MicrosoftLearning/SC-100-Microsoft-Cybersecurity-Architect has these hands-on labs:
1. Case study introduction (Tailwind Traders)
1. Build overall security strategy (<a target="_blank" href="https://learn.microsoft.com/en-us/security/cybersecurity-reference-architecture/mcra">MCRA</a> for MFA)
1. Design security operations strategy
1. Design identity security strategy
  
1. Evaluate a regulatory compliance strategy
1. Evaluate security posture and recommend technical strategies
  
1. Understand architecture best practices
1. Design a strategy for securing server and client endpoints
1. Design a strategy for security PaaS, IaaS and SaaS services
1. Specify security requirements for applications
1. Design a strategy for securing data

1. Best practices with MCRA and MCSB
1. Secure methodology with CAF
1. Ransomware strategy
<br /><br />


References:
   * Secure Access Service Edge (SASE)
   * <a target="_blank" href="https://wilsonmar.github.io/azure-cloud/#CAF">Cloud Adoption Framework (CAF)</a>
   * <a target="_blank" href="https://dodcio.defense.gov/Portals/0/Documents/Library/(U)ZT_RA_v2.0(U)_Sep22.pdf">Department of Defense (DoD) Zero Trust Reference Architecture Version 2.0 July 2022</a>
<br /><br />


Prevent IDOR (Insecure Direct Object Reference)


<hr />

<a name="AZ-140"></a>

## AZ-140 Azure Desktop Speciality

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-140">
https://docs.microsoft.com/en-us/learn/certifications/exams/az-140</a> exam is new as of March 29, 2021.

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-desktop/overview"><img align="right" width="100" src="https://raw.githubusercontent.com/benc-uk/icon-collection/master/azure-icons/Windows-Virtual-Desktop.svg">
<!-- http://code.benco.io/icon-collection/azure-icons/Windows-Virtual-Desktop.svg -->
What is Windows Desktop?</a> (not Windows Virtual Desktop classic).

Windows Virtual Desktop (WVD) is a desktop and app virtualization service that runs on the Azure cloud. It works with Office 365 ProPlus. It competes with Citrix stateful VDI (Virtual Desktop Infrastructure).
   * https://www.clouddesktoponline.com/what-is-windows-virtual-desktop-wvd/
   * https://azure.microsoft.com/en-us/services/virtual-desktop/
   * https://www.microsoft.com/en-us/microsoft-365/modern-desktop/enterprise/windows-virtual-desktop
   <br /><br />

Skills the exam measures:
* Plan a Windows Virtual Desktop architecture - <a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-desktop/create-host-pools-azure-marketplace">ARM VM host pool</a>
* Implement a Windows Virtual Desktop infrastructure. test from the Azure Gallery.
* Manage access and security
* Manage user environments and <a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-desktop/manage-app-groups">RemoteApp Groups and programs</a>
* Monitor and maintain a Windows Virtual Desktop infrastructure
<a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-desktop/create-validation-host-pool">Host pool</a>
<br /><br />

Sample examples:
   * https://www.whizlabs.com/learn/course/microsoft-azure-az-140/


<a name="#MS-900"></a>

## MS-900 Office 365 Fundamentals

<a target="_blank" href="https://www.youtube.com/watch?v=xirUELDSrUE">Carla Jenkins</a>
recommends this because Azure security exams cover 365 as well.

https://docs.microsoft.com/en-us/learn/certifications/exams/ms-900

https://vladtalkstech.com/ms-900-study-guide-microsoft-365-fundamentals

https://www.whizlabs.com/learn/course/microsoft-azure-ms-900/


<hr />

<a name="AZ-204"></a>

## AZ-204 Developing Solutions for Microsoft Azure

Pass this one exam to become a "Microsoft Certified: Azure Developer Associate".

<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/certifications/exams/az-204">
https://docs.microsoft.com/en-us/learn/certifications/exams/az-204</a>
formally defines the test and provides textual tutorial. The test is about development in .Net C#, Python, Bash Shell, PowerShell.

PROTIP: <a target="_blank" href="https://learning.oreilly.com/videos/microsoft-az-204-certification/">Skylines Academy videos on OReilly</a> I think are the most thorough and best sequenced courses (and I've seen them all).

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-900">DB-900 Microsoft Azure Data Fundamentals</a> should be a pre-requisite.

<strong>Develop</strong> Azure compute solutions (25-30%)
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/create-serverless-applications/">Create serverless applications</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/connect-your-services-together/">Deploy resources in Azure</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/deploy-a-website-with-azure-app-service/">Deploy a website to Azure with Azure App Service</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/manage-resources-in-azure/">Connect services together</a>
   <br /><br />

Develop for Azure storage (15-20%)
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/store-data-in-azure/">Store Data in Azure</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/secure-your-cloud-data/">Secure Your Cloud Data</a>
   <br /><br />

Implement Azure security (20-25%)

Monitor, troubleshoot, and optimize Azure solutions (15-20%)

Connect to and consume Azure services and third-party services (15-20%)
<br /><br />

Microsoft's hands-on 4-day live class makes use of files from <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure">https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure</a> described in steps at <a target="_blank" href="https://aka.ms/az204labs">aka.ms/az204labs</a>

   1. <a target="_blank" href="https://wilsonmar.github.io/azure-compute">Create Azure App Service Web Apps</a>
   1. <a target="_blank" href="https://wilsonmar.github.io/azure-functions">Implement Azure functions</a>
   1. <a target="_blank" href="https://wilsonmar.github.io/azure-storage">Develop solutions that use blob storage</a>
   1. <a target="_blank" href="https://wilsonmar.github.io/cosmodb">Develop solutions that use Cosmos DB storage</a>
   1. Implement IaaS solutions
   1. Implement secure cloud solutions
   1. Implement user authentication and authorization
   1. <a target="_blank" href="https://wilsonmar.github.io/api-management-microsoft/">Implement API Management</a>
   1. Develop event-based solutions
   1. <a target="_blank" href="https://wilsonmar.github.io/azure-messaging">Develop message-based solutions</a>
   1. <a target="_blank" href="https://wilsonmar.github.io/azure-monitoring">Instrument solutions to support monitoring and logging</a>
   1. Integrate caching and content delivery within solutions
   <br /><br />

<a target="_blank" href="https://acloud.guru/overview/az-204-developing-solutions-for-microsoft-azure?utm_source=marketo">ACloudGuru.com's FREE 8.6 hour video course</a> by Daniel Stinchcomb includes quizzes and a practice exam.
   

<a target="_blank" href="https://cloudacademy.com/learning-paths/az-204-exam-preparation-developing-solutions-for-microsoft-azure-1208/">
CloudAcademy's 23h video course</a> provides labs:
   * <a target="_blank" href="https://cloudacademy.com/lab/azure-api-management-policies-security/?context_resource=lp&context_id=1208">API Management Policies and Security</a>
   * <a target="_blank" href="https://cloudacademy.com/lab/integrate-services-azure-function-apps/?context_resource=lp&context_id=1208">Azure Functions 1hr lab</a>
   <br /><br />

<a target="_blank" href="https://app.pluralsight.com/paths/certificate/developing-solutions-for-microsoft-azure-az-204">Pluralsight's video course</a>
Includes:
   * https://app.pluralsight.com/paths/certificate/developing-solutions-for-microsoft-azure-az-204

https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure has these hands-on labs:

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_01.md"> Lab 01: Build a web application on Azure platform as a service offering </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_02.md"> 
Lab 02: Implement task processing logic by using Azure Functions </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_03.md"> Lab 03: Retrieve Azure Storage resources and metadata by using the Azure Storage SDK for .NET </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_04.md"> Lab 04: Construct a polyglot data solution </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_05.md"> Lab 05: Deploy compute workloads by using images and containers </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_06.md"> Lab 06: Authenticate by using OpenID Connect, MSAL, and .NET SDKs </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_07.md"> Lab 07: Access resource secrets more securely across services </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_08.md"> Lab 08: Create a multi-tier solution by using Azure services </a> - <a target="_blank" href="https://raw.githubusercontent.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/master/Instructions/Labs/Lab08-Diagram.png">Diagram</a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_09.md"> Lab 09: Publish and subscribe to Event Grid events </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_10.md"> Lab 10: Asynchronously process messages by using Azure Service Bus Queues </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_11.md"> Lab 11: Monitor services that are deployed to Azure </a>
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure/blob/master/Instructions/Labs/AZ-204_lab_12.md"> Lab 12: Enhance a web application by using the Azure Content Delivery Network </a>
<br /></br />

Questions:
   * https://www.whizlabs.com/learn/course/microsoft-azure-az-204/
   * https://www.udemy.com/course/exam-microsoft-azure-dev/ by Alan Rodrigues


<hr />

<a name="SolutionArchitect"></a>

## Azure Solution Architect Expert

Passing the AZ-303 and the less hands-on AZ-304 Microsoft Azure Architect Design (blueprints) makes you a "Microsoft Certified Azure Solutions Architect Expert".

The difference between AZ-303 and 304, conceptually:
![az-303-304-1037x429](https://user-images.githubusercontent.com/300046/120078623-83321d80-c06d-11eb-822c-3aaefef83bb0.png)

"Azure Architects translate business requirements into secure and reliable recommendations for infrastructure, governance, high availability, cost optimization, and data integration. Skills include recommending solutions for logging, multi-factor authentication, SSO, hybrid identity, backup and recovery, containers, microservices, monitoring, automation, networking, and application infrastructure."

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/patterns/">
docs.microsoft.com/en-us/azure/architecture/patterns</a>

Training vendors:

Atul Kumar's K21Academy has a 12 weekend AZ-303/304 course with 27 hands-on labs, job prep & on-job support for one year on their @k2microsoftazure Telegram and WhatsApp. All after full-pressure marketing.
<a target="_blank" href="https://user-images.githubusercontent.com/300046/120122781-38490080-c168-11eb-9a0d-f9062d48916c.png">
<img alt="az-k21-303-304-1536x627.png" width="1536" height="627" src="https://user-images.githubusercontent.com/300046/120122781-38490080-c168-11eb-9a0d-f9062d48916c.png"></a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=NEbG6bEaUDo">Microsoft Azure Solution Architect Certification [AZ-303|304]: Everything You Need To Know</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=O_u2oPuZ8Mw">Azure Full Course | Learn Microsoft Azure in 3 hours</a>
   <br /><br />

<a name="AZ-303"></a>

### AZ-303 Azure Architect Technologies

<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/certifications/exams/az-303">
https://docs.microsoft.com/en-us/learn/certifications/exams/az-303</a>
is the official description ($165 for 2-3 hours) and text tutorial.

NOTE: AZ-303 replaces <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-300-MicrosoftAzureArchitectTechnologies">AZ-300</a>, and 
AZ-104 is not a pre-requisite but covers same topics more conceptually than this.

Microsoft's 4-day live class covers these modules, with <a target="_blank" href="https://microsoftlearning.github.io/AZ-303-Microsoft-Azure-Architect-Technologies/">lab scenarios</a> defined in <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-303-Microsoft-Azure-Architect-Technologies">https://github.com/MicrosoftLearning/AZ-303-Microsoft-Azure-Architect-Technologies</a> 

1. Implement Azure Active Directory
2. Implement and Manage Hybrid Identities
3. Implement Virtual Networking
4. Implement VMs for Windows and Linux
5. Implement <strong>Load Balancing and Network Security</strong> 

   <a target="_blank" href="https://microsoftlearning.github.io/AZ-303-Microsoft-Azure-Architect-Technologies/Instructions/Labs/Module_05_Lab.html">LAB: Implementing Highly Available Azure IaaS Compute Architecture</a>

6. Implement Storage Accounts 

   <a target="_blank" href="https://microsoftlearning.github.io/AZ-303-Microsoft-Azure-Architect-Technologies/Instructions/Labs/Module_06_Lab.html">LAB: Implementing and Configuring Azure Storage File and Blob Services</a>

7. Implement NoSQL Databases
9. Automate Deployment and Configuration of Resources
10. Implement and Manage Azure Governance Solutions LAB: Managing Azure Role-Based Access Control

11. Manage Security for Applications
12. Manage Workloads in Azure 

    <a target="_blank" href="https://microsoftlearning.github.io/AZ-303-Microsoft-Azure-Architect-Technologies/Instructions/Labs/Module_12_Lab.html">LAB:  Protecting Hyper-V VMs by using Azure Site Recovery</a>

13. Implement Container-Based Applications

14. Implement an Application Infrastructure 

    <a target="_blank" href="https://microsoftlearning.github.io/AZ-303-Microsoft-Azure-Architect-Technologies/Instructions/Labs/Module_14_Lab_a.html">
    LAB: Implementing an Azure App Service Web App with a Staging Slot</a> and 

    <a target="_blank" href="https://microsoftlearning.github.io/AZ-303-Microsoft-Azure-Architect-Technologies/Instructions/Labs/Module_14_Lab_b.html">
    LAB: Configuring a Message-Based Integration Architecture</a>

15. Implement Cloud Infrastructure Monitoring
<br /><br />

<a target="_blank" href="https://learning.oreilly.com/videos/new-microsoft-az-303/10009AZ303">
14h videos on OReilly: Skylines Academy Oct 2020</a> by Nick Colyer (who have a <a target="_blank" href="https://www.facebook.com/groups/azurestudygroup/">StudyGroup on Facebook</a>)

<a target="_blank" href="https://learning.oreilly.com/attend/exam-az-303-microsoft-azure-architect-technologies-crash-course/0636920452881/0636920053523/">
6 hr LIVE on OReilly: Tim Warner</a> teaches to his <a target="_blank" href="https://github.com/timothywarner/az303">GitHub repo</a> which includes a <a target="_blank" title="warner-azure-frankenstein-V2-793x629" href="https://user-images.githubusercontent.com/300046/114078765-904d4000-9866-11eb-80a0-dc017198cf3d.png">full diagram</a>.

<a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/826">
AZ-303 Part 5 - Preparing for the Microsoft Azure Architect Technologies Exam</a>

<a target="_blank" href="https://www.youtube.com/watch?v=fG1wHpEQ6mw">
AZ-303 Sample Exam Questions (Microsoft Azure Architect Technologies) [Answers Explained in Detail]</a> by R A V I K I R A N S


Practice tests:
   * <a target="_blank" href="https://www.whizlabs.com/learn/course/microsoft-azure-az-303/">https://www.whizlabs.com/learn/course/microsoft-azure-az-303</a>
   * <a target="_blank" href="https://www.mindhub.com/az-303-microsoft-azure-architect-technologies-microsoft-official-practice-test/p/MU-AZ-303">Mindhub.com</a> THANKS280658

Clickbait videos with no unique content:
   * <a target="_blank" href="https://www.youtube.com/watch?v=wP9KWa0rOQk">How I cleared Microsoft AZ 303 in just three weeks!</a> by Here Is Cloud
   * <a target="_blank" href="https://www.youtube.com/watch?v=1BhzOxaxhqE" title="Oct 31, 2020">
   #1 How to pass Exam AZ-303 Microsoft Azure Architect Technologies Certificate in 20 hours Part 1/2</a> Part 2

Anthony James at LinuxAcademy:

   * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/579">Design Concepts</a>
   * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/525"> Part 1</a>
   * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/526"> Part 2</a>
   * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/527"> Part 3</a>
   * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/528"> Part 4</a>
   * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/826">Part 5</a>
   <br /><br />

* https://www.whizlabs.com/learn/course/microsoft-azure-az-303/


<hr />

<a name="AZ-304"></a>

### AZ-304 Azure Architect Design

Passing this and the more hands-on AZ-303 makes you a "Microsoft Certified Azure Solutions Architect Expert".

<a target="_blank" href="
https://docs.microsoft.com/en-us/learn/certifications/exams/az-304">
Microsft's AZ-304 exam page</a> includes textual tutorials and hands-on labs.
The exam is 120 minutes to answer 40-60 business case scenario (case-studies) questions.
   * Design monitoring (10-15%)
   * Design identity and security (25-30%)
   * Design data storage (15-20%)
   * Design business continuity (10-15%)
   * Design infrastructure (25-30%)
   <br /><br />

Links to Microsoft docs for each item in the syllubus are <a target="_blank" href="
https://www.azurebarry.com/prepare-for-the-az304-exam/">
detailed by azurebarry.com</a>, who created a <a target="_blank" href="https://app.pluralsight.com/paths/certificate/microsoft-azure-architect-design-az-304">video class on Pluralsight</a>

   * Cost Optimization (cheapest approach)
   * Migration Planning
   * Governance
   * Data Integration
   * Application Architecture
   <br /><br />

Labs created by Microsoft for its live classes at <a target="_blank" href="https://github.com/MicrosoftLearning/AZ-304-Microsoft-Azure-Architect-Design">https://github.com/MicrosoftLearning/AZ-304-Microsoft-Azure-Architect-Design</a> :
1. Module 1 Design a Compute Solution
1. Module 2 Design a Network Solution
1. Module 3 Design for Migration

   <a target="_blank" href="https://microsoftlearning.github.io/AZ-304-Microsoft-Azure-Architect-Design/Instructions/Labs/Module_3_Lab.html">3. Migrating Hyper-V VMs to Azure by using Azure Migrate</a>
   
1. Module 4 Design Authentication and Authorization

   <a target="_blank" href="https://microsoftlearning.github.io/AZ-304-Microsoft-Azure-Architect-Design/Instructions/Labs/Module_4_Lab.html">4. Managing Azure AD Authentication and Authorization</a> using PowerShell through a Bastion blade, using Azure AD Premium P2 licensing to integrate an AD DS forest with an Azure AD tenant with Azure AD Connect, all to set conditional access.
   <br /><br />

1. Module 5 Design Governance

1. Module 6 Design a Solution for Databases

   <a target="_blank" href="https://microsoftlearning.github.io/AZ-304-Microsoft-Azure-Architect-Design/Instructions/Labs/Module_6_Lab.html">6. Implementing Azure SQL Database-Based Applications</a>:
   Create Azure SQL Database. Connect to it. Query it using a .NET Core console app behind a firewall.
   <br /><br />

1. Module 7 Select an Appropriate Storage Account

1. Module 8 Design Data Integration

1. Module 9 Design a Solution for Logging and Monitoring

1. Module 10 Design a Solution for Backup and Recovery

1. Module 11 Design for High Availability

1. Module 12 Design for Cost Optimization

1. Module 13 Design an Application Architecture

   <a target="_blank" href="https://microsoftlearning.github.io/AZ-304-Microsoft-Azure-Architect-Design/Instructions/Labs/Module_13_Lab_a.html">13. Implement Azure Logic Apps Integration with Azure Event Grid</a> which uses PowerShell to create Resource Groups and Encrypt Passwords.
   <br /><br />

1. Module 14 Design Security for Applications

Others courses on AZ-304:

* <a target="_blank" href="https://www.pluralsight.com/paths/microsoft-azure-architect-design-az-304">Pluralsight</a>

* <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/579">Azure Architect Design Concepts</a> is foundational to:

  * <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/776">10h 42m LinuxAcademy video course</a> by Russell Croft at ACloudGuru

  * Tim Warner references <a target="_blank" href="https://github.com/timothywarner/az304">https://github.com/timothywarner/az304</a> during his <a target="_blank" href="https://learning.oreilly.com/attend/exam-az-304-microsoft-azure-architect-design-crash-course/">OReilly 6-hour AZ-304 "Crash Course"</a>. It's full of info.

* https://linuxacademy.com/cp/modules/view/id/776?redirect_uri=https://app.linuxacademy.com/search?type=Course&categories=Azure

* https://www.whizlabs.com/learn/course/microsoft-azure-az-304/

Exam prep:
   * https://www.whizlabs.com/learn/course/microsoft-azure-az-304/


<hr />

<a name="DP-900"></a>

## DP-900 Azure Data Fundamentals 

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-900">
Microsoft's DP-900 exam page</a> include free tutorials.

* <a target="_blank" href="https://learning.oreilly.com/live-training/courses/microsoft-azure-data-fundamentals-dp-900-crash-course/0636920051861/">OReilly live crash course</a> by Emilio Melo

* https://learning.oreilly.com/videos/azure-overview-introduction/10009OVERVIEW/10009OVERVIEW-AZINTRO_16
“Cloud and Azure Overview” section in Azure Overview: Introduction for Beginners (video)

* https://learning.oreilly.com/videos/professional-azure-sql/9781789535495/
 Professional Azure SQL Database Administration (video, 4h 58m)

* https://learning.oreilly.com/videos/getting-started-with/9781484260203/
Getting Started with Microsoft Cosmos DB Using C#: Cloud Database Support for .NET Applications (video, 1h 2m)

* https://learning.oreilly.com/videos/learning-microsoft-power/9781789347104/
Learning Microsoft Power BI (video, 3h 55m)

* https://learning.oreilly.com/videos/create-an-azure/9781491989623/
Create an Azure SQL Data Warehouse in Minutes (video, 1h 22m)

* https://learning.oreilly.com/videos/information-management-using/9781491989647/
Information Management Using Azure Data Factory (video, 1h 16m)

Sample exams:
   * https://www.whizlabs.com/learn/course/microsoft-azure-dp-900/
   <br /><br />

BTW Left out of the ESI list is Azure Databricks, a cloud-scale platform for data analytics and machine learning. Microsoft's live class DP-090 "Implementing a Machine Learning Solution with Microsoft Azure Databricks" shows how to use Azure Databricks to explore, prepare, and model data; and integrate Databricks machine learning processes with Azure Machine Learning.


<a name="DP-100"></a>

## DP-100 Azure Data Scientist Associate

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-100">
Microsoft's DP-100 exam page</a> include free tutorials.

PROTIP: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/paths/build-ai-solutions-with-azure-ml-service/">FREE LEARNING PATH: Build AI solutions with Azure Machine Learning is 9 hr 51 min</a>. It has <a target="_blank" href="https://microsoftlearning.github.io/mslearn-dp100/">hands-on exercises</a> which references <a target="_blank" href="https://github.com/MicrosoftLearning/mslearn-dp100">https://github.com/MicrosoftLearning/mslearn-dp100</a>


<a name="DP-200"></a>

## DP-200 Implementing-an-Azure-Data-Solution

https://github.com/MicrosoftLearning/DP-200-Implementing-an-Azure-Data-Solution

https://github.com/MicrosoftLearning/mslearn-dp100

Live online training course with Reza Salehi on O'Reilly:
 
   * <a target="_blank" href="https://learning.oreilly.com/search/?query=Exam%20DP-200%3A%20Implementing%20an%20Azure%20Data%20Solution%20Crash%20Course&formats=live%20online%20training&publishers=O%27Reilly%20Media%2C%20Inc.&sort=relevance">Exam DP-200: Implementing an Azure Data Solution Crash Course</a>

   * <a target="_blank" href="https://learning.oreilly.com/search/?query=Exam%20DP-201%3A%20Designing%20an%20Azure%20Data%20Solution%20Crash%20Course&formats=live%20online%20training&publishers=O%27Reilly%20Media%2C%20Inc.&sort=relevance">Exam DP-201: Designing an Azure Data Solution Crash Course</a>



<a name="DP-203"></a>

## DP-203 Azure Data Engineer Associate

To be a <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/azure-data-engineer/">Microsoft Certified: Azure Data Engineer Associate"</a>, pass the single <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-203">DP-203</a> (beta released February 23, 2021):
   * Design and implement data storage (40-45%)
   * Design and develop data processing (25-30%)
   * Design and implement data security (10-15%)
   * Monitor and optimize data storage and data processing (10-15%)
   <br /><br />

PROTIP: I attended <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/courses/dp-203t00">Microsoft's 4-day live DP-203T00 class</a> by <a target="_blank" href="https://www.linkedin.com/in/psule/">Tammy R Smith</a> and <a target="_blank" href="https://www.linkedin.com/in/gnango-michel-landry-agah-001564b/">Gnango Agah</a>, but I highly recommend everyone to walk through their (free) lab instructions in English at 
STAR: <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/tree/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs">github.com/MicrosoftLearning/DP-203-Data-Engineering-on-Microsoft-Azure</a> (and <a target="_blank" href="https://github.com/MicrosoftLearning/?q=AZ-2200&type=&language=&sort=">other languages</a>) by <a target="_blank" href="https://www.linkedin.com/in/joel-hulen-ba76b73/">Joel Hulen</a>. The class Modules and labs <a target="_blank" ref="https://aka.ms/dp203labs/">aka.ms/dp203labs</a>.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/01/README.md">Module 1 - Explore compute and storage options for data engineering workloads</a>. This lab teaches ways to structure the data lake, and to optimize the files for exploration, streaming, and batch workloads. The student will learn how to organize the data lake into levels of data refinement as they transform files through batch and stream processing. The students will also experience working with Apache Spark in Azure Synapse Analytics. They will learn how to create indexes on their datasets, such as CSV, JSON, and Parquet files, and use them for potential query and workload acceleration using Spark libraries including Hyperspace and MSSParkUtils.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/02/README.md">Module 2 - Design and Implement the serving layer</a>. This lab teaches how to design and implement data stores in a modern data warehouse to optimize analytical workloads. The student will learn how to design a multidimensional schema to store fact and dimension data. Then the student will learn how to populate slowly changing dimensions through incremental data loading from Azure Data Factory.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/03/README.md">Module 3 - Data engineering considerations for source files</a>. In this lab, you will be directed by your instructor to work alone, or in groups for 20 minutes to read through the following information presented below. You will then answer the questions and present back to the classroom your findings based on the requirements.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/04/README.md">Module 4 - Run interactive queries using serverless SQL pools</a>. In this lab, students will learn how to work with files stored in the data lake and external file sources, through T-SQL statements executed by a serverless SQL pool in Azure Synapse Analytics. Students will query Parquet files stored in a data lake, as well as CSV files stored in an external data store. Next, they will create Azure Active Directory security groups and enforce access to files in the data lake through Role-Based Access Control (RBAC) and Access Control Lists (ACLs).

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/05/README.md">Module 5 - Explore, transform, and load data into the Data Warehouse using Apache Spark</a>. This lab teaches you how to explore data stored in a data lake, transform the data, and load data into a relational data store. You will explore Parquet and JSON files and use techniques to query and transform JSON files with hierarchical structures. Then you will use Apache Spark to load data into the data warehouse and join Parquet data in the data lake with data in the dedicated SQL pool.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/06/README.md">Module 6 - Data exploration and transformation in Azure Databricks</a>. This lab teaches you how to use various Apache Spark DataFrame methods to explore and transform data in Azure Databricks. You will learn how to perform standard DataFrame methods to explore and transform data. You will also learn how to perform more advanced tasks, such as removing duplicate data, manipulate date/time values, rename columns, and aggregate data. They will provision the chosen ingestion technology and integrate this with Stream Analytics to create a solution that works with streaming data.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/07/README.md">Module 7 - Ingest and load data into the Data Warehouse</a>. This lab teaches students how to ingest data into the data warehouse through T-SQL scripts and Synapse Analytics integration pipelines. The student will learn how to load data into Synapse dedicated SQL pools with PolyBase and COPY using T-SQL. The student will also learn how to use workload management along with a Copy activity in a Azure Synapse pipeline for petabyte-scale data ingestion.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/08/README.md">Module 8 - Transform data with Azure Data Factory or Azure Synapse Pipelines</a>. This lab teaches students how to build data integration pipelines to ingest from multiple data sources, transform data using mapping data flows and notebooks, and perform data movement into one or more data sinks.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/09/README.md">Module 9 - Integrate data from notebooks with Azure Data Factory or Azure Synapse Pipelines</a>. In the lab, the students will create a notebook to query user activity and purchases that they have made in the past 12 months. They will then add the notebook to a pipeline using the new Notebook activity and execute this notebook after the Mapping Data Flow as part of their orchestration process. While configuring this the students will implement parameters to add dynamic content in the control flow and validate how the parameters can be used.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/10/README.md">Module 10 - Optimize query performance with dedicated SQL pools in Azure Synapse</a>. In this lab, students will learn strategies to optimize data storage and processing when using dedicated SQL pools in Azure Synapse Analytics. The student will know how to use developer features, such as windowing and HyperLogLog functions, use data loading best practices, and optimize and improve query performance.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/11/README.md">Module 11 - Analyze and optimize Data Warehouse storage</a>. This lab teaches you how to analyze and optimize the data storage of the Azure Synapse dedicated SQL pools. You will know techniques to understand table space usage and column store storage details. Next, you will know how to compare storage requirements between identical tables that use different data types. Finally, you will observe the impact materialized views have when executed in place of complex queries and learn how to avoid extensive logging by optimizing delete operations.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/12/README.md">Module 12 - Support Hybrid Transactional Analytical Processing (HTAP) with Azure Synapse Link</a>. This lab teaches you how Azure Synapse Link enables seamless connectivity of an Azure Cosmos DB account to a Synapse workspace. You will understand how to enable and configure Synapse link, then how to query the Azure Cosmos DB analytical store using Apache Spark and SQL Serverless.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/13/README.md">Module 13 - End-to-end security with Azure Synapse Analytics</a>. In this lab, students will learn how to secure a Synapse Analytics workspace and its supporting infrastructure. The student will observe the SQL Active Directory Admin, manage IP firewall rules, manage secrets with Azure Key Vault and access those secrets through a Key Vault linked service and pipeline activities. The student will understand how to implement column-level security, row-level security, and dynamic data masking when using dedicated SQL pools.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/14/README.md">Module 14 - Real-time stream processing with Stream Analytics</a>. This lab teaches you how to process streaming data with Azure Stream Analytics. You will ingest vehicle telemetry data into Event Hubs, then process that data in real time, using various windowing functions in Azure Stream Analytics. You will output the data to Azure Synapse Analytics. Finally, you will learn how to scale the Stream Analytics job to increase throughput.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/15/README.md">Module 15 - Create a stream processing solution with Event Hubs and Azure Databricks</a>. This lab teaches you how to ingest and process streaming data at scale with Event Hubs and Spark Structured Streaming in Azure Databricks. You will learn the key features and uses of Structured Streaming. You will implement sliding windows to aggregate over chunks of data and apply watermarking to remove stale data. Finally, you will connect to Event Hubs to read and write streams.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/16/README.md">Module 16 - Build reports using Power BI integration with Azure Synapse Analytics</a>. In this lab, the student will learn how to integrate Power BI with their Azure Synapse workspace to build reports in Power BI. The student will create a new data source and Power BI report in Azure Synapse Studio. Then the student will learn how to improve query performance with materialized views and result-set caching. Finally, the student will explore the data lake with serverless SQL pools and create visualizations against that data in Power BI.

* <a target="_blank" href="https://github.com/MicrosoftLearning/DP-203T00-Data-Engineering-on-Microsoft-Azure/blob/c2dd2803d3bc28e97a3c6c9d430c8920873e0e81/Instructions/Labs/17/README.md">Module 17 - Perform integrated Machine Learning processes in Azure Synapse Analytics</a>. In the lab, the students will explore the integrated, end-to-end Azure Machine Learning and Azure Cognitive Services experience in Azure Synapse Analytics. You will learn how to connect an Azure Synapse Analytics workspace to an Azure Machine Learning workspace using a Linked Service and then trigger an Automated ML experiment that uses data from a Spark table. You will also learn how to use trained models from Azure Machine Learning or Azure Cognitive Services to enrich data in a SQL pool table and then serve prediction results using Power BI.

<br /><br />

Free text-based tutorials from Microsoft:
   * Azure for the Data Engineer
   * Store data in Azure
   * Data integration at scale with Azure Data Factory or Azure Synapse Pipeline
   * Realize Integrated Analytical Solutions with Azure <strong>Synapse Analytics</strong>
   * Work with Data Warehouses using Azure Synapse Analytics
   * Perform data engineering with Azure Synapse <strong>Apache Spark Pools</strong>
   * Work with Hybrid Transactional and Analytical Processing Solutions using Azure Synapse Analytics
   * Data engineering with Azure <strong>Databricks</strong>
   * Large-Scale Data Processing with Azure <strong>Data Lake Storage Gen2</strong>
   * Implement a Data Streaming Solution with Azure <strong>Streaming Analytics</strong>
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-200">DP-200</a> retired on June 30, 2021, looked at the Microsoft Azure data platform through the lens of the implementer:
   * Work with relational data in Azure
   * Work with NoSQL data in Azure Cosmos DB
   * Large-Scale Data Processing with Azure Data Lake Storage Gen2
   * https://github.com/timothywarner/dp200
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-201">DP-201</a> retired on June 30, 2021, examined Azure data through the lens of the architect:
   * Design Azure data storage solutions (40-45%)
   * Design data processing solutions (25-30%)
   * Design for data security and compliance (25-30%) 
   * https://github.com/timothywarner/dp201
DP-203 Learning Path had covered:
   * Data integration at scale with Azure Data Factory or Azure Synapse Pipeline
   * Realize Integrated Analytical Solutions with Azure Synapse Analytics
   <br /><br />

Ravi Kirans:
   * https://ravikirans.com/dp-203-azure-exam-study-guide/

James Serra, Microsoft NYC
   * <a target="_blank" href="https://www.youtube.com/watch?v=oylzwwmTkaM">"Data Lakehouse"</a>
   * (<a target="_blank" href="https://JamesSerra.com/">JamesSerra.com</a>

The Azure Synapse platform (EDW and Data Lakes).
   * <a target="_blank" href="https://azure.microsoft.com/en-us/blog/azure-sql-data-warehouse-is-now-azure-synapse-analytics/">Announced November 2019</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=2DX7dgR8cEw">VIDEO: Azure Synapse Analytics - Introduction & Overview</a>
   * https://azure.microsoft.com/en-us/services/synapse-analytics/
   * SaaS service integrates Power BI visualization, Azure Machine Learning,  Azure Data Lake Storage Gen2 as a data warehouse and a consistent data model. Machine Learning models can be created and saved in ONNX format, which are stored within the Azure Synapse data store and used with the native PREDICT instruction.
   * Synapse Analytics Studio
   * https://www.sqlshack.com/understanding-azure-synapse-analytics-formerly-sql-dw/

Ravi Salahi
   * https://learning.oreilly.com/attend/exam-dp-203-microsoft-azure-data-engineer-associate-crash-course/0636920054124/0636920057411/
   * https://github.com/zaalion/oreilly-dp-203

John McIntyre
   * https://www.youtube.com/watch?v=tMYOi5E14eU 2020
   * https://www.youtube.com/watch?v=dvP0JwchjfI 2019 "SQL Data Warehouse"

Tim Warner:
   * https://timw.com/dp203 = <a target="_blank" href="https://github.com/timothywarner/dp203">https://github.com/timothywarner/dp203</a> (by <a target="_blank" href="https://www.linkedin.com/in/timothywarner/">Tim Warner</a>, <a target="_blank" href="https://techtrainertim.com/">techtrainertim.com</a>)
   <br /><br />

Sample Exams:
   * https://www.whizlabs.com/learn/course/microsoft-azure-dp-203/




<hr />

<a name="AZ-204"></a>

## AZ-204 Azure Developer Associate

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-204">
https://docs.microsoft.com/en-us/learn/certifications/exams/az-204</a> learning paths says 
$165 for 180 max. minutes to answer 40 - 60 multiple-choice questions.


https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure

<a target="_blank" href="https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4oZ7B">
https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4oZ7B</a>

https://learning.oreilly.com/library/view/exam-ref-az-204/9780136798255/

<a target="_blank" href="https://learning.oreilly.com/attend/microsoft-azure-developer-associate-az-204-crash-course/0636920053454/0636920053452/">OReilly VIDEO Crash Course</a> April 16, 2021 by <a target="_blank" href="https://www.linkedin.com/in/rezasalehi2008/">Reza Salehi</a> (@zaalion) <a target="_blank" href="https://github.com/zaalion/oreilly-az-204">https://github.com/zaalion/oreilly-az-204</a>:

<a target="_blank" href="https://www.youtube.com/watch?v=-lf83pxEubs" title="Feb 1, 2021">
YOUTUBE: AZ-204 Azure Developer - Exam Cram │ Expert Talk</a> by <a target="_blank" href="https//linkedin.com/in/brianlgorman">Brian L Gorman</a>

* https://www.whizlabs.com/learn/course/microsoft-azure-az-204/



### MCT

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/mct-certification">
Microsoft Certified Trainers</a> get 75% off exam fees. But there is a $800 annual fee to be MCT, and an inital $1000 join fee.

https://mcp.microsoft.com/MCT/Enrollment?wa=wsignin1.0#/profile

<hr />

## References

<a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/345">
Linux Academy: Azure CLI Esssentials</a>   

<a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/369">Learn Azure by Doing</a>   

<a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/461">Implementing App Infrastructure</a>

<a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/757?redirect_uri=https://app.linuxacademy.com/search?type=Course&categories=Azure">
Cost control in Azure</a>

<a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/666">Intro to Azure Security</a>

<a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/706">Azure IAM Concepts</a>

<a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/733">Deployment Pipelines using GitHub Actions</a>

<a target="_blank" href="https://aka.ms/ESIStudyGuides">aka.ms/ESIStudyGuides</a>

https://www.whizlabs.com/blog/top-microsoft-azure-bloggers/


## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
