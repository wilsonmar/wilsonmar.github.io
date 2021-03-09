---
layout: post
title: "Azure (cloud) certifications"
excerpt: "No more ASM and MCSD"
tags: [cloud]
date: "2021-02-22"
file: "azure-certifications"
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


PROTIP: <a target="_blank" href="https://twitter.com/search?q=%23azurecertified&src=typed_query">Tweet #azurecertified</a> or #MicrosoftCertified when you pass each exam.

Microsoft rebranded certification coding of "70-x" series to role-based Azure "AZ-x" series.
Microsoft continues to <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/retired-certification-exams">retire a long list of exams at a brisk rate</a>:

   * 70-532 - Developing Microsoft Azure Solutions
   * 70-533 - Implementing Microsoft Azure Infrastructure Solutions
   * 70-534 - Architecting Azure Solutions
   * 70-535 - Architecting Microsoft Azure Solutions (ARM templates)
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/70-537">70-538 - Configuring and Operating a Hybrid Cloud with Microsoft Azure Stack</a> replaced by AZ-600 Stack Hub Operator Associate.
   <br /><br />

NOTE: Groupings of Microsoft's certifications by roles below, people still take exams based on product:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Role </th><th> Certification exam </th></tr>

<tr valign="top"><td> Administrator
      </td><td>* <a href="#AZ-900">AZ-900 Fundamentals</a>
      * <a href="#AZ-104">AZ-104 Azure Administrator Associate</a>

   </td></tr>
<tr valign="top"><td> Functional Consultant
      </td><td>* <a href="#AZ-140">AZ-140 Virtual Desktop Specialty</a>

   </td></tr>
<tr valign="top"><td> Solution Architect
      </td><td>* AZ-303 Azure Solutions Architect Expert: Technologies
        * AZ-304 Azure Solutions Architect Expert: Design
        * AZ-600 Stack Hub Operator Associate
        * AZ-120 Azure for SAP Workloads Specialty

   </td></tr>
<tr valign="top"><td> Developer
   </td><td>* AZ-204 Azure Developer Associate
       * AZ-220 Azure IoT Developer Specialty

   </td></tr>
<tr valign="top"><td> DevOps Engineer
   </td><td>* <a href="#AZ-400">AZ-400 DevOps Engineer Expert</a>

   </td></tr>
<tr valign="top"><td> Data Engineer<br /> Data Scientist
   </td><td>* DP-900 Azure Data Fundamentals
   * DP-100 Azure Data Scientist Associate
   * <a href="#DP-203">DP-203 Azure Data Engineer Associate</a>
   * DP-300 Azure Database Administrator Associate
   * PL-600 Power Platform Solution Architect Expert* 

   </td></tr>
<tr valign="top"><td> AI Engineer
   </td><td>* AI-900 AI Fundamentals
     * AI-100 Azure AI Engineer Associate

   </td></tr>
<tr valign="top"><td> Security Engineer
   </td><td>* <a href="#SC-900">SC-900 Security, Compliance, and Identity Fundamentals</a>
    * SC-200 Security Operations Analyst Associate
    * SC-300 Identity and Access Administrator Associate
    * AZ-500 Azure Security Engineer Associate

   </td></tr>
</table>

Andrew Brown offers this diagram:
<a target="_blank" href="https://user-images.githubusercontent.com/300046/110194383-8ebad300-7df5-11eb-9c0c-2d5f165f0ffe.jpeg"><img alt="az-certs-1868x1092.png" width="1868" src="https://user-images.githubusercontent.com/300046/110194383-8ebad300-7df5-11eb-9c0c-2d5f165f0ffe.jpeg"></a>


<hr />

<a name="#AZ-900"></a>

## AZ-900 Azure Fundamentals

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-900">https://docs.microsoft.com/en-us/learn/certifications/exams/az-900</a>

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
   * Study 1-3 hours a day, every day.
   <br /><br />

If you want time on servers (one hour at a time), subscribe to
<a target="_blank" href="https://cloudacademy.com/learning-paths/az-900-exam-preparation-microsoft-azure-fundamentals-524/">CloudAcademy.com</a>

<a target="_blank" href="https://www.youtube.com/watch?v=53LO_rJz6Es&list=PLHh_n2lgzcrvecPJ-zMukLlDrq0GMSMmB" title="Dec 7, 2020">Ravikirans answers Whizlabs 55 questions</a> 

<a target="_blank" href="https://www.youtube.com/watch?v=cAgN6Ac8MS4&list=PLHh_n2lgzcrvecPJ-zMukLlDrq0GMSMmB&index=2">AZ-900 15 questions from WhizLabs</a>

<a target="_blank" href="https://quizlet.com/416573542/az-900-flash-cards/">Quizlet flash cards</a>


<a name="AZ-104"></a>

## AZ-104 Azure Administrator Associate

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-104">
https://docs.microsoft.com/en-us/learn/certifications/exams/az-104</a> on August 31, 2020 replaced <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-103">exam AZ-103: Microsoft Azure Administrator</a> which had superceded retired exams AZ-100 and AZ-101.

Implement, monitor, and maintain Azure solutions including
compute, storage, network, and security resources

* Manage Azure identities and governance; 
* implement and manage storage; 
* deploy and manage Azure compute resources; 
* configure and manage <a target="_blank" href="https://wilsonmar.github.io/azure-networking/">virtual networking</a>;
* <a target="_blank" href="https://wilsonmar.github.io/azure-monitoring/">monitor</a> and back up Azure resources
<br /><br />

   * https://docs.microsoft.com/en-us/learn/azure/

Video Lectures:

1. <a target="_blank" href="https://www.youtube.com/watch?v=zPvT6UBfB5E">9:33:29 Video</a> <a target="_blank" href="https://learning.oreilly.com/videos/exam-az-104-microsoft/9780136823483/9780136823483-A104_01_01_01">with transcript from OReilly</a> by Michael J. Shannon takes a deep dive on a lightboard.

* <a target="_blank" href="https://cloudacademy.com/learning-paths/az-104-exam-preparation-microsoft-azure-administrator-1-1332/">CloudAcademy's learning path</a>, by Thomas Mitchell, provides quizzes along the way and time on actual Azure instances.

* <a target="_blank" href="https://cloudacademy.com/learning-paths/az-104-exam-preparation-microsoft-azure-administrator-1-1332/">
CloudAcademy</a>

* <a target="_blank" href="https://www.udemy.com/course/exam-az-104-microsoft-azure-administrator/">Udemy 15.5 hour video course by Anand Rao Nednur</a>

* <a target="_blank" href="https://www.udemy.com/course/microsoft-certified-azure-administrator/">Udemy.com</a> by Alan Rodriguez

* <a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-administrator-preparing-az-104-exam">Pluralsight: Microsoft Azure Administrator: Preparing for the AZ-104 Exam</a> by Tim Warner

Flash cards:

* <a target="_blank" href="https://quizlet.com/subject/az-104/">Quizlet flash cards</a>

Sample tests:

1. Take a Practice Test (from MeasureUp) that feels just like the actual test, if you are enrolled in <a target="_blank" href="https://esi.microsoft.com/getcertification">Microsoft's Enterprise Skills Initiative</a>.

* <a target="_blank" href="https://app.pluralsight.com/paths/skills/microsoft-azure-administrator-az-104">Pluralsight</a>
by Tim Warner with <a target="_blank" href="https://www.kaplanlearn.com/education/offeringdashboard/index/04347ac4e89b19f5ef7559ef6f975386">Kaplan sample exam</a>.


<a name="SC-900"></a>

### SC-900 Security

See https://wilsonmar.github.io/security-certifications


<a name="AZ-400"></a>

## AZ-400 DevOps Engineer Expert

https://docs.microsoft.com/en-us/learn/certifications/devops-engineer/

https://docs.microsoft.com/en-us/learn/certifications/exams/az-400
will be updated March 23, 2021

<a target="_blank" href="https://github.com/timothywarner/az400">OReilly.com class by Timothy Warner</a>


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


<hr />

<a name="DP-203"></a>

## DP-203 Azure Data Engineer Associate

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-203">DP-203</a> beta released February 23, 2021:
   * Design and implement data storage (40-45%)
   * Design and develop data processing (25-30%)
   * Design and implement data security (10-15%)
   * Monitor and optimize data storage and data processing (10-15%)
   * https://github.com/timothywarner/dp203 (by <a target="_blank" href="https://www.linkedin.com/in/timothywarner/">Tim Warner</a>, <a target="_blank" href="https://techtrainertim.com/">techtrainertim.com</a>, https://www.pluralsight.com/authors/tim-warner)
   * https://timw.com/dp200 ?
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-200">DP-200</a> retired on June 30, 2021, looks at the Microsoft Azure data platform through the
 lens of the implementer:
   * Work with relational data in Azure
   * Work with NoSQL data in Azure Cosmos DB
   * Large-Scale Data Processing with Azure Data Lake Storage Gen2
   * https://github.com/timothywarner/dp200
   <br /><br />

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/dp-201">DP-201</a> retired on June 30, 2021, examines Azure data through the lens of the architect:
   * Design Azure data storage solutions (40-45%)
   * Design data processing solutions (25-30%)
   * Design for data security and compliance (25-30%) 
   * https://github.com/timothywarner/dp201
   <br /><br />

DP-203 Learning Path:
   * Data integration at scale with Azure Data Factory or Azure Synapse Pipeline
   * Realize Integrated Analytical Solutions with Azure Synapse Analytics
   <br /><br />

https://ravikirans.com/dp-203-azure-exam-study-guide/


James Serra, Microsoft NYC
   * https://www.youtube.com/watch?v=oylzwwmTkaM "Data Lakehouse"
   * JamesSerra.com

The Azure Synapse platform (EDW and Data Lakes).
   * Announced November 2019 - https://azure.microsoft.com/en-us/blog/azure-sql-data-warehouse-is-now-azure-synapse-analytics/
   * https://azure.microsoft.com/en-us/services/synapse-analytics/
   * SaaS service integrates Power BI visualization, Azure Machine Learning,  Azure Data Lake Storage Gen2 as a data warehouse and a consistent data model. Machine Learning models can be created and saved in ONNX format, which are stored within the Azure Synapse data store and used with the native PREDICT instruction.
   * Synapse Analytics Studio
   * https://www.sqlshack.com/understanding-azure-synapse-analytics-formerly-sql-dw/
   * https://www.youtube.com/watch?v=2DX7dgR8cEw Azure Synapse Analytics - Introduction & Overview

John McIntyre
   * https://www.youtube.com/watch?v=tMYOi5E14eU 2020
   * https://www.youtube.com/watch?v=dvP0JwchjfI 2019 "SQL Data Warehouse"

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
