---
layout: post
title: "Microsoft TFS vs. Git and GitHub"
excerpt: "Check out Git, then commit to it"
tags: [devops, git, TFS]
date: "2016-04-14"
file: "tfs-vs-github"
image:
# feature: fig-white-black-malika-favre-vertical-bars
  feature: https://cloud.githubusercontent.com/assets/300046/14751598/d1bcc4c6-0887-11e6-8c3e-9714f871101a.jpg
  credit: Malika Favre
  creditlink: http://create.adobe.com/2016/4/1/the_bold_cheeky_and_frequently_nsfw_art_of_malika_favre.html
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://goo.gl/aFyhJa">
https://wilsonmar.github.io/tfs-vs-github</a>

## What is TFS?

TFS (Team Foundation Server) is licensed from Microsoft.

TFS is available to subscribers of <a target="_blank" href="https://msdn.microsoft.com/subscriptions/manage">
MSDN</a>. The over 100 different downloads of TFS are to these dimensions :

0. Visual Studio vs. core
0. Express vs. not.
0. Version (2015, 2013, 2011, etc.)
0. Update level (None, 1, 2, 3, etc.)
0. Web Installer vs. full download

0. Release Management made its debut with 2013
0. Project Server Extensions made its debut with 2015
0. Office Integration made its debut with 2015

0. Feedback Client for VS TFS 2015 dated 9/17/2015
0. Team Explorer Everywhere for TFS 2012, 32 MB
   provides access to TFS from Linux, with an Eclipse plug-in.

The sizes of installers:

|  Release   | Version | Update | Edition  | Express  | Standard |
| ---------- | ------- | ------ | -------- | -------: | -------: |
| 03/30/2016 | 2015    | 2      | Standard |   461 MB |   461 MB |
| 08/06/2015 | 2015    | -      | VS       |   891 MB |   911 MB |
| 07/10/2015 | 2013    | 5      | VS       |   531 MB |  2518 MB |
| 11/24/2014 | 2013    | 4      | VS       |   530 MB |   531 MB |
| 11/24/2014 | 2013    | 3      | VS       |   531 MB |  2517 MB |
| 04/02/2014 | 2013    | 2      | VS       |   529 MB |  2515 MB |
| 11/13/2013 | 2012    | 4      | VS       |   484 MB |  1170 MB |
| 11/11/2013 | 2013    | -      | VS       |   506 MB |  2481 MB |
| 06/26/2013 | 2012    | 3      | VS       |   483 MB |  1168 MB |
| 04/04/2013 | 2012    | 2      | VS       |   483 MB |  1167 MB |
| 12/12/2012 | 2012    | 1      | VS       |   465 MB |  1135 MB |
| 08/15/2012 | 2012    | -      | VS       |   447 MB |  1104 MB |
| 03/08/2011 | 2010    | 1      | -        |        - |   477 MB |
| 08/05/2010 | 2010    | -      | VS       |        - |  1318 MB |
| 09/26/2008 | 2008    | 1      | VSTS     |        - |  1318 MB |
| 11/28/2007 | 2008    | Trial  | Workgroup|        - |  1318 MB |
| 03/17/2006 | 2005    | Trial  | Workgroup|        - |   448 MB |

Internally, TFS has a Standard vs. Basic configuration.

Update 2 of Team Foundation Server 2015 dated 3/30/2016 consisted of these downloads for (x86 and x64) - DVD (English) :

0. TFS Express, 461 MB

0. TFS Express - Web Installer, 2 MB

0. TFS (core), 461 MB

0. TFS (core) - Web Installer, 2 MB

0. TFS Office Integration, 139 MB

0. TFS Office Integration - Web Installer, 2 MB

0. TFS Project Server Extensions, 3 MB

0. TFS Project Server Extensions - Web Installer, 2 MB

0. Release Management Server for TFS - Web Installer, 2 MB

Visual Studio 2015 with Update 1 dated 11/30/2015:

0. Visual Studio TFS Office Integration - Web Installer, 2 MB

0. Visual Studio TFS Office Integration, 240 MB

0. Release Management Server for Team Foundation Server 2015 with Update 1 (x86 and x64) - Web Installer (English)

0. Visual Studio Team Foundation Server Express 2015 with Update 1 (x86 and x64) - DVD (English)

0. Visual Studio Team Foundation Server Extensions for Project Server 2015 with Update 1 (x86 and x64) - DVD (English)

0. Visual Studio Team Foundation Server Express 2015 with Update 1 (x86 and x64) - Web Installer (English)

0. Visual Studio Team Foundation Server 2015 with Update 1 (x86 and x64) - Web Installer (English)

0. Visual Studio Team Foundation Server 2015 with Update 1 (x86 and x64) - DVD (English)


## Pricing and options

Microsoft's Express editions are free <strong>for up to 5 users</strong>.
Express TFS makes use of Express SQL.

Microsoft offers hosting on <a target="_blank" href="http://www.codeplex.com">
codeplex.com</a>, Microsoft's open source project hosting site.

A 30-day free trial of TFS cloud service is available from <a target="_blank" href="http://www.discountasp.net/tfs/hosted-team-foundation-server.aspx">
DiscountASP</a>.

## More than just version control

TFS is the community server behind Microsoft's Visual Studio IDE.

In 2010, TFS was primarily a replacement for Visual Source Safe product.

In 2012, TFS became a part of Microsoft's new
ALM (Application Lifecycle Management) "best practices":

   * Version Control
   * Requirements
   * Agile Planning - Plan and Track
   * Design
   * Develop
   * Automated Build
   * Testing & Defect Tracking
   * Feedback
   * Test Lab Management
   * Reporting

In 2015 TFS added more tools:

![tfs visual studio](https://cloud.githubusercontent.com/assets/300046/14761987/8a7ad558-092c-11e6-9107-4a19c089ecbd.png)

   * Layer Diagrams
   * Architecture Validation
   * UML diagrams

   * Code Analysis makes suggestions based on IL inspections

   * Unit Testing
   * Code Metrics (Cyclometric Complexity)
   * Code Coverage results appear in Build reports

   * During Manual Testing, capture video and IntelliTrace
   * Test Impact Analysis
   * "Coded UI" testing

   * Performance Testing (Lab Management)

## UML Diagrams:

   * Activity - flow of work between actions and participants
   * Component - Interfaces, prots, relationships
   * Class - types and relationships
   * Sequence - interactions between objects and components
   * Use case - goals and tasks

## New Build System with 2015

http://aka.ms/vsopreview
describes the TFBuild (Team Foundation Build)
yet also supports Java, Linux, and Apple XCode (XPlat),
on-prem or in the cloud
with Visual Studio Online.

https://github.com/Microsoft/vso-agent

TFBuild also supports previous XAML-based MSBuilds.

Several TFBuild servers can run at once in parallel.
Each server uses a pool of Agents that
can be used across several Collections.
Each collection has a queue.
An agent can belong to several queues.

## TFS setup

There is only one repository in each machine hosting TFS.
Git allows for many repos.

In TFS, create a <strong>team project</strong>,
then folders for each individual project and branches.

PROTIP: Naming conventions for team project name?

TFS 2012 had 3 process templates to define work item field names:

   * Visual Studio scrum 2.0
   * MSF for Agile Software Development 6.0
   * MSF for CMMI Process Improvement 6.0
   * SAFe for enterprises?

IN VS, a new project can be added to TFS with a checkbox, or added by right-clicking the Solution node.


## Git vs. TFS

TFS is a <strong>centralized</strong> version while<br />
Git is <strong>distributed</strong> as everyone has a full copy
of the whole repo and its history.

TFS has its own language:
Check-in/Check-out is a different concept.

TFS users "check-in" which invokes <strong>file locking</strong> whereas<br />
Git users do commits based on distributed full versions with difference checking.

TFS provides a "shelf" to hold local changes temporarily.<br />
Git provides a stash area away from items being committed.

Shelve-sets in TFS are stored in the centeral server.<br />
Stashed items in Git remain local machine.

TFS groups changes in sequentially numbered changesets.<br />
Git assigns a 32-byte hash to each commit.

TFS branches creates a new folder.

<a target="_blank" href="https://johanleino.wordpress.com/2013/09/18/tfs-vs-git-or-is-it-tfs-with-git/">
This site</a> summarizes the differences:

| TFVC | Git |
| Check-In | Commit + Push |
| Get Latest Version | Pull |
| ‘Map Local Path’ | Clone |
| Shelve | Stash (only local though) |
| Label | Tag |
| ‘Compare Local to Server’ | Fetch |
| Checkin and get Latest | Sync |


## Visual Studio GUI

To check-in right-click on the app within Team Explorer.
For VS 2013:

<img width="329" alt="vs2013 tfs app checkin" src="https://cloud.githubusercontent.com/assets/300046/14794922/659905da-0ae3-11e6-9d8b-9c074edd4379.png">

To see differences, right-click on the folder within Source Control Explorer.
For VS 2013:

![vs2013 sourcecontrolexplorer alt-click](https://cloud.githubusercontent.com/assets/300046/14795006/babfc7c4-0ae3-11e6-8ad2-004850d4fe91.png)

To apply a label, select Advanced:
For VS 2013:

![vs2013 advanced apply label](https://cloud.githubusercontent.com/assets/300046/14795665/b9d9878e-0ae6-11e6-9199-1f8c27d17635.png)

Click on an item within History compare:
For VS 2013:

![vs2013 change history alt click](https://cloud.githubusercontent.com/assets/300046/14795544/42fe7b9c-0ae6-11e6-8c25-cf22eeb4946f.png)

To work on individual files, right-click on the file within Solution Explorer.
For VS 2013:
![vs2013 file alt-click sol explorer](https://cloud.githubusercontent.com/assets/300046/14795366/6cf3bd32-0ae5-11e6-90d1-3d7768edc37e.png)


## Git is King?

Public repository websites at even Google and others
have moved to adopt Git and GitHub.

Visual Studio 2015 provides support for both GitHub and TFS.


## git-tfs bridge

As http://git-tfs.com/
describes, use Chocolately on a Windows machine:

   ```
   cinst GitTfs
   ```

The above is equivalent to:

   ```
   choco insttall Git-tf -y
   ```

Alternately, follow manual instructions at
https://gittf.codeplex.com/

This installs the contents of
https://github.com/git-tfs/git-tfs

Clone using the `git-tfs` command rather than `git` command:

   ```
   <strong>git-tfs</strong> clone http://github.com/etc.
   ```

## Remove TFC bindings

TFS source control bindings (*.vssscc files) are unique to TFS.
So remove it.
This can be done from within Visual Studio.

Edit your .sln file to remove the

   <pre>
   GlobalSection(TeamFoundationVersionControl) ...
   EndGlobalSection
   </pre>

## README.md Markdown File

One artifact unique to GitHub is the README.md file
(where .md means markdown or text).

It's optional but most GitHub repos have one.


## Keeping history

The issue is keeping history

## Resources

* https://www.microsoft.com/en-gb/developers/articles/week02mar2014/migrating-a-tfs-tfvc-based-team-project-to-a-git-team-project-retaining-as-much-source-and-work-item-history-as-possible/

* http://chriskirby.net/blog/migrate-an-existing-project-from-tfs-to-github-with-changeset-history-intact

John Brown of TritiumConsulting.com
  presented a video course with Pluralsight
  https://app.pluralsight.com/library/courses/tfs-integration/table-of-contents

## Virtual Environments

AMong <a target="_blank" href="http://vsalmvm.azurewebsites.net/almvm-faq/">Visual Studio ALM virtual machines</a> VHD
avaialble 10 days at a time.

Azure Active Directory (AAD/Entra) Authentication Plug-in for SonarQube
The AAD/Entra OAuth2 provider for SonarQube, created by Hosam Kamel and Jean-Marc Prieur (product owner), enables AAD users to automatically be sign up and authenticated on a SonarQube server.

## TailSpin

Microsoft's TailSpin toys sample MVC 2 ordering
application was
<a target="_blank" href="https://msdn.microsoft.com/en-us/library/aa645517%28v=vs.71%29.aspx?f=255&MSPPError=-2147217396">
first released for Visual Studio.NET 2003</a>
building a 3-tier app with a SQL 2000 XML service via OLE DB
with COM Interop.

Brian Keller, Principal Technical Evangelist,
Visual Studio ALM for Microsoft,
built for VS 2010 a virtual machine
image with sample data and 14 hands-on labs to a ficticious
<a target="_blank" href="https://blogs.msdn.microsoft.com/briankel/2010/06/25/now-available-visual-studio-2010-rtm-virtual-machine-with-sample-data-and-hands-on-labs/">(http://bit.ly/aC5Lb2)
   Tailspin Toys end-to-end eCommerce sample MVC 2 application</a>.
This expired in 2012
VSKitFdbk@Microsoft.com

https://msdn.microsoft.com/en-us/library/aa645517(v=vs.71).aspx
Tailspin Toys Application
Visual Studio .NET 2003


The new home for ALM is at
http://vsalmvm.azurewebsites.net/

https://technet.microsoft.com/en-us/virtuallabs?f=255&MSPPError=-2147217396

https://technet.microsoft.com/en-us/virtuallabs?f=255&MSPPError=-2147217396
TechNet Virtual Lab: Introduction to Team Foundation Build 2015 (vNext), Test Run Analysis and Machines


## Resources

* <a target="_blank" href="http://www.lynda.com/Version-Control-tutorials/Fundamentals-Software-Version-Control/106788-2.html">
   Lynda video course</a> shows several version control products, including use of TFS by Visual Studio 2012.

* http://betterexplained.com/articles/aha-moments-when-learning-git/

* https://msdn.microsoft.com/en-us/library/jj190809.aspx
  VS 2015 with Git Branches

* svnvsgit.com compares SVN vs Git.


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
