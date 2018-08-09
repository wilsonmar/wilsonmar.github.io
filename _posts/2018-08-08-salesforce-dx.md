---
layout: post
title: "Salesforce DX (Developer eXperience)"
excerpt: "Begin to use Git and GitHub (DevHub) for software-driven (modular) continuous development"
tags: [salesforce, git]
file: sfdx.md
image:
# feature: pic orange wm_mcnaughton_sunset_runner_1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622121/097d7550-0585-11e6-9543-27d45c2487c2.jpg
  credit: William McNaughton
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}


This is a step-by-step tutorial on switching to continuous development and testing using Git and GitHub with the Salesforce DX (Developer eXperience), which consists of these new tools:

   * Scratch orgs created on the fly for temporary use for a "scope" 
   * Dev Hub for managing scratch orgs
   * A Salesforce CLI binary that runs side-by-side with the Heroku CLI
   * Support for the Lightning Test service and Lightning linting to Salesforce CLI
   * Continuous integration with test automation

But the change is about more than the tools. Instead of building code and customizations around a monolithic org, code and customizations are built around <strong>artifact</strong> (a logical set of code) that represents a subset of the org that can be tested independently from other components in your org. This is so an artifact can be released independently. 

The metadata components within an artifact can only live in one artifact at a time.
The source of truth for source-driven development is in the VCS (Version Control System) rather than in the production org. This means the configuration of the org exists outside the org. So new orgs can be fully created.

## Timeline

Salesforce DX entered <a target="_blank" href="https://developer.salesforce.com/blogs/developer-relations/2017/06/introducing-salesforce-dx-open-beta.html">Open Beta June 2017</a> available in all prod and business orgs.

## Why?

Salesforce has Activity tracking which tracks every change to user data in the database.
But that is not designed to track changes to configuration settings that users are usually not concerned about.

Traditionally, the "clicks, not code" approach Salesforce provides kept the focus on features and workflow rather than <strong>specific settings configuring Salesforce apps</strong>.

Today, throughout the software development industry,
there is a movement toward storing <strong>"configuration as code"</strong>.

Thus, the transition of change management driven by meta-data vs. source code.

Another way to describe this is "moving from an org-centric model to source-centric model" workflow.

### Git

DX is enabled by the rapid and near ubiquitous adoption of <strong>Git</strong> to store text 
in an efficient way that enables every change to be tracked (in an audit trail), which also enables fall-back to complete versions at any time in the past (like a time machine).

Git is actually both a specification and a program name.
The creators of the first Git program (which include the same person who created Linux) open sourced the internal format of their program Git, thus enabling many programs to offer Git capability. This has enabled the Git <strong>source version control</strong> (SVC) approach to be overwhelmingly popular.

By contrast, competing SVC approaches (such as Subversion) are more cumbersome and less flexible
because they take a command-and-control mindset rather than a distributed work mindset.

A <strong>clone</strong> of a Git repo contains the entire depth of history for the project.
Whereas Subversion cloning provides a portion of the total project.
This means that, in Subversion, people have to wait for all dependencies to be ready before releasing the whole.
The Subversion checkout command locks portions of code from being changed, a whole different concept.

The <strong>checkout</strong> command in Git selects the specific points in time Git users can travel to.
People using Git are always working with the entire state of the repo at whatever point in time one chooses.
As part of checkout, <strong>branches</strong> mark specific points in time.

Salesforce calls this <strong>"Second Generation Packaging"</strong>.

ISVs (Service Vendors) who build customized Salesforce apps
persona-based customizations.

With Salesforce DX, your local project is tied to a repository. Use each repository to keep a history of all work you have done for your artifact. Use branches to track the changes for each of your releases. Each project contains, at a minimum, one artifact. 

In more complex orgs, you may find it necessary to have multiple related artifacts developed as part of the same project. This happens when sets of components and customizations depend on others. 

The "shape" of a scratch org is its configuration.

## Install

1. SFDX CLI

1. Account credentials


## Sample DX project

   The following set of steps obtains assets from GitHub to create a scratch org:

1. Create a "subject" folder or navigate to an existing one:

1. Download the Dreamforce ’16 Developer Keynote sample application, called the DreamHouse app stored in GitHub:

   <pre><strong>git clone https://github.com/forcedotcom/sfdx-dreamhouse.git
   cd sfdx-dreamhouse
   </strong></pre>

   ### List Orgs

1. List orgs

   <pre><strong>sfdx force:org:list</strong></pre>

   <pre>
=== Orgs
     ALIAS   USERNAME                ORG ID              CONNECTED STATUS
───  ──────  ──────────────────────  ──────────────────  ────────────────
(D)  DevHub  wilsonmar@jetbloom.com  00D37000000Ioz4EAC  Connected
   </pre>


   ### Display orgs

   <pre><strong>sfdx force:org:display</strong></pre>

   ### Push Orgs

1. Push org source to DevHub:

   <pre><strong>sfdx force:source:push</strong></pre>

   ### Open Org

1. Open org:

   <pre><strong>sfdx force:org:open</strong></pre>


   ### List packages

   <pre><strong>sfdx force:package2:list</strong></pre>

<hr />



   ### DX App Autopsy

   Let's analyze its files at the root of the project repo:

   The <strong>settings.json</strong> file within folder <tt>.vscode</tt> saves Visual Studio Code preferences.

   Other similar files may be added for other IDEs.

   The <strong>.gitignore</strong> file specifies files and folders which are not to be uploaded to the team/public repository (DevHub or GitHub). This goes with the <tt>.git</tt> folder created by Git when cloning.

   QUESTION: A <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm">.forceignore</a> file in the repo root folder is used to exclude source When Syncing or Converting. As a generic example, it contains this to ignore LESS files:

   <pre>
**.less
   </pre>

   The <strong>.project</strong> file specifies metadata about the project:

   <pre>
&LT;?xml version="1.0" encoding="UTF-8"?>
&LT;projectDescription>
  &LT;name>sfdx-dreamhouse</name>
  &LT;comment>&LT;/comment>
  &LT;projects>
  &LT;/projects>
  &LT;buildSpec>
  &LT;/buildSpec>
  &LT;natures>
  &LT;/natures>
&LT;/projectDescription>
   <pre>

   The <strong>sxdx-project.json</strong> file specifies <strong>external</strong> attributes:

   <pre>
{
  "packageDirectories": [
    {
      "path": "force-app",
      "default": true
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "42.0"
}</pre>

   The <strong>.salesforcedx.yaml</strong> (hidden file) specifies processing options:

   <pre>
scratch-org-def: config/project-scratch-def.json
assign-permset: false
permset-name: dreamhouse
run-apex-tests: true
delete-scratch-org: false
show-scratch-org-url: true
   </pre>


   ### Scratch orgs config

1. Create a scratch org named "default scratch org":

   <pre><strong>sfdx force:org:create -s -f config/project-scratch-def.json -a "default scratch org"</strong></pre>

   A <strong>scratch org</strong> is a dedicated, configurable, and short-term Salesforce environments that are quickly spun up when starting a new project, a new feature branch, or a feature test.

   In the <strong>enterprise-scratch-def.json</strong> defines the <strong>"scope"</strong> of the app, which includes the product edition and what other products the app are enabled to work with (such as S1Desktop and Chatter):

   <pre>
{
  "orgName": "Your Company",
  "edition": "Enterprise",
  "orgPreferences": {
    "enabled": [
      "S1DesktopEnabled"
    ],
    "disabled": [
      "ChatterEnabled"
    ]
  }
}</pre>

   The <strong>project-scratch-def.json</strong> temporarily <strong>overrides</strong> enterprise-level scope settings during test runs:

   <pre>
{
    "orgName": "Salesforce DX Company",
    "edition": "Developer",
    "orgPreferences" : {
        "enabled": ["S1DesktopEnabled"]
    }
}</pre>

### data folders

The <tt>data</tt> folder specifies <strong>app objects</strong> handled by the app. 
In this case, it's properties for sale and what brokers are trying to sell them.

The <strong>sample-data-plan.json</strong> specifies a json file for each app object handled by the app and whether its reference is for "saveRefs" or "resolveRefs":

   <pre>
[
  {
    "sobject": "Broker__c",
    "saveRefs": true,
    "files": [
      "brokers-data.json"
    ]
  },
  {
    "sobject": "Property__c",
    "resolveRefs": true,
    "files": [
      "properties-data.json"
    ]
  }
]</pre>

Each json file defines the <strong>records</strong> for each object type.

A record within <strong>brokers-data.json</strong> contains these attributes and properties:

   <pre>
    {
      "attributes": {
        "type": "Broker__c",
        "referenceId": "CarolineBrookerRef"
      },
      "name": "Caroline Kingsley",
     "Title__c": "Senior Broker",
    "Phone__c": "617-244-3672",
    "Mobile_Phone__c": "617-244-3672",
    "Email__c": "caroline@dreamhouse.demo",
    "Picture__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },</pre>

A record within <strong>properties-data.json</strong> contains information about the property listed.


### .sfdx top folder

Inder the <tt>.sfdx</tt> top-level folder is a folder named "tools" that contains the <strong>apex.db</strong> (database definiton).

What's in apex.db is defined within <tt>.sfdx/typings/lwc/apex/</tt> -- <strong>.ts (Typescript)</strong> files.

BotController.d.ts

<hr />

## Social

Look for Twitter tag #SalesforceDX 

\#BASFDUG (Bay Area/San Francisco Dev User Group) has a <a target="_blank" href="http://bit.ly/TwitchSF">the /TwitchSF channel</a>, and <a target="_blank" href="https://www.youtube.com/channel/UCdTNaauk7anhmVfg-ulzX2Q/videos/">YouTube channel</a> (<a target="_blank" href="https://bit.ly/2kMVC8q">bit.ly/2kMVC8q</a>).

   * JOIN: <a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A000000HTp1">Salesforce DX Beta group</a> Success Community.


## Rock stars

Scott Wells 

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/play-by-play-strategies-successful-salesforce-dx-migration-adoption/table-of-contents">
   Play by Play: Strategies for Successful Salesforce DX Migration and Adoption</a> 8 Jun 2018 [2h 8m] (subscription required)
   featuring Scott Wells interviewed by Don Robins 
   discuss how to guide a team to successfully migrate and adopt Salesforce DX.

<!--
Michael Welburn (@MichaelWelburn) 

(@zaynelt)

<a target="_blank" href="https://twitter.com/CynthiaSaalfeld/">@CynthiaSaalfeld</a>)

-->

<a target="_blank" href="https://www.youtube.com/watch?v=iSDokuZnRcI">
Introduction to Serverless Applications</a> Feb 3, 2018
[1:04:24]
by Austen Collins (@Austen Collins, austin@serverless.com), founder and CEO of Serverless, Inc:


## Videos

https://www.youtube.com/watch?v=z11co_ZqUH8
Second Generation Packaging for Customers and Partners


## Happy Trails

Trailhead project: <a target="_blank" href="https://trailhead.salesforce.com/projects/quick-start-salesforce-dx">Quick Start: Salesforce DX</a> [40 mins]
Use the Salesforce command-line interface to create, convert, and deploy apps.

Trailmix: <a target="_blank" href="https://trailhead.salesforce.com/en/users/00550000006H8qqAAC/trailmixes/dx">Salesforce DX</a> [13 hrs 55 mins] +5650

Trail: <a target="_blank" href="https://trailhead.salesforce.com/en/trails/sfdx_get_started">Quick Start: Salesforce DX</a> consists of modules: 

https://trailhead.salesforce.com/trails/sfdx_get_started?trailmix_creator_id=00550000006FetYAAS&trailmix_id=salesforce-dx
Get Started with Salesforce DX

   * <a target="_blank" href="https://trailhead.salesforce.com/modules/sfdx_dev_model">
   Salesforce DX Development Model</a>    
   * <a target="_blank" href="https://trailhead.salesforce.com/modules/sfdx_app_dev">App Development with Salesforce DX</a>
   * <a target="_blank" href="https://trailhead.salesforce.com/modules/sfdx_travis_ci">Continuous Integration Using Salesforce DX</a> using Travis
   </a>
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/unlocked-packages-for-customers">Unlocked Packages for Customers</a> [55 mins] +700
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/app_deployment">Change Management</a> [1 hr 15 mins] +500

   * Trailhead project: <a target="_blank" href="https://trailhead.salesforce.com/en/projects/quick-start-salesforce-dx">Quick Start: Salesforce DX</a> 
   * Trailhead project: <a target="_blank" href="https://trailhead.salesforce.com/en/projects/quick-start-unlocked-packages">Quick Start: Unlocked Packages</a> 
   <br /><br />

<a target="_blank" href="https://trailhead.salesforce.com/en/modules/process-design-without-limits">Process Design Without Limits</a>



## References 

* <a target="_blank" href='https://developer.salesforce.com/docs/atlas.en-us.214.0.sfdx_cli_reference.meta/sfdx_cli_reference' >Salesforce CLI Command Reference</a></li>

* <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.214.0.sfdx_dev.meta/sfdx_dev">Salesforce DX Developer Guide</a></li>

* <a target="_blank" href="https://developer.salesforce.com/tools/extension_vscode">Salesforce Extensions for VSCode</a></li>

* <a target="_blank" href="http://salesforce.vidyard.com/watch/WQzCAyBR8FiJQ8yVXWDwWR">Salesforce Environments: Getting Started with Scratch Orgs</a></li>

* <a target="_blank" href="http://salesforce.vidyard.com/watch/M3APX9oM72RDUoiqNi8yyg">Salesforce CLI: Harnessing the Power of Salesforce Through the Command Line</a></li>


## Misc notes

https://developer.salesforce.com/promotions/orgs/dx-signup

Set Up Salesforce DX Environment

   sfdx force # tools for the salesforce developer
   sfdx plugins # manage plugins
   sfdx update # update sfdx-cli

Set Up the Project on Your Local Machine
~ 10 mins

Create and Test Our Scratch Org
~ 15 mins

<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
