---
layout: post
title: "Salesforce DX (Developer eXperience) deep dive"
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


This is a step-by-step hands-on tutorial on using the Salesforce DX (Developer eXperience) for continuous testing and development. Succinct and without hype. PROTIPs here present wisdom and knowledge from experience unique to this site.
Unlike Trailhead's instructions, this displays output from commands.

PROTIP: SFDX was announced in 2015 and entered <a target="_blank" href="https://developer.salesforce.com/blogs/developer-relations/2017/06/introducing-salesforce-dx-open-beta.html">Open Beta June 2017</a>, available in all prod and business orgs.

## Why SFDX?

<a target="_blank" alt="Apr 19, 2018" href="https://www.youtube.com/watch?v=zsZDEL6oO0Q&t=3m43s">This diagram</a> and the table under it illustrate the shift being introduced by DX:

<a target="_blank" title="sfdx-shift-1272x529.png" href="https://user-images.githubusercontent.com/300046/43903651-26a9807a-9baa-11e8-9044-5b0251ee0649.png"><img alt="sfdx-shift-648x270-43358.jpg" width="648" src="https://user-images.githubusercontent.com/300046/43903631-1d2c7b38-9baa-11e8-9d94-6f08f43fe60f.jpg"></a>

PROTIP: Various people have used different nicknames, so here they are together:

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th>Aspect</th><th>Traditional</th><th>DX</th></tr>
<tr valign="top"><td>Slogan</td><td>"Clicks, not code"</td><td>"Clicks AND code"</td></tr>
<tr valign="top"><td>Configuration</td><td>config. in metadata</td><td>"config. as code"</td></tr>
<tr valign="top"><td>Source of "Truth"</td><td>What's in org</td><td>What's in VCS</td></tr>
<tr valign="top"><td>Versioning</td><td>Carry org. forward</td><td>What's in VCS</td></tr>
<tr valign="top"><td>Unit of change</td><td>Change Set</td><td>Package 2GP</td></tr>
<tr valign="top"><td>Workflow focus</td><td>"org. centric"</td><td>"source-centric"</td></tr>
<tr valign="top"><td>Org instances</td><td>"nurture as dear pets"</td><td>"dispose like cattle"</td></tr>
<tr valign="top"><td>Env. for dev. test</td><td>in sandboxes (SBX)</td><td>in scratch orgs</td></tr>
<tr valign="top"><td>Speed of release</td><td>occassional</td><td>continuous</td></tr>
</table>

Salesforce began with its "clicks, not code" slogan because Salesforce has made it so apps can be customized mostly within the GUI rather than coding internal configurations.
And Salesforce has had Activity tracking which tracks every change to user data in the database. 

Traditionally, changes are introduced by creating "change sets" tested within sandboxes which duplicate the production org. This means the development workflow is focused on what's in the org., with org instances nutured as dear pets. For example, after Person accounts are enabled, there is no going back.

However, throughout the software development industry today,
there is a movement toward storing <strong>configuration as code</strong>, 
of keeping metadata out of inside the org and into versioned code bases separate from the data.

The new "source of truth" for source-driven development is in the VCS (Version Control System) rather than in the production org. This means the configuration of the org exists outside the org. So new orgs can be fully created.

This transition is necessary to provide more flexibility to developers. This new approach puts versioning at the center of the workflow so that the state of an org can be brought back to any point in the past (like a time machine). 

Such an approach requires more use of command-line terminals. That's why I (not Salesforce) call it "clicks AND code". CLI can completely replace the ANT deployment tool and unmanaged packages.

Each repo is <strong>distributed</strong>, meaning each clone of a repo is a complete duplicate with all version history. This means an Org with all its metadata can be worked on <strong>simultaneously</strong> by different people, instead of having to tag-team time on a change-set,  each developer can test on his/own <strong>scratch orgs</strong> based on what each developer has on his/her own laptop. Reduced need for coordination enables faster, <strong>continuous</strong> testing and deployment to occur.

## Enable Dev Hub in Production Org

   ![sfdx-devhub-req-648x478-60179](https://user-images.githubusercontent.com/300046/43937840-613735c0-9c1d-11e8-9062-873ea87335b0.jpg)

   PROTIP: Developer Edition Orgs cannot be enabled as a "Dev Hub". 
   Dev Hub can only be enabled on environments that have active paying users, such as Production or Business Orgs. See <a target="_blank" href="https://developer.salesforce.com/page/An_Introduction_to_Environments">Intro to Environments</a>.

   <strong>BLAH: What that means is previously unlimited FREE Developer accounts will be limited to 30 days when working with scratch Orgs (which require Dev Hub to activate).</strong>

1. Apply for a <strong>30-day trial</strong> account which can be enabled with a "Dev Hub":

   https://developer.salesforce.com/promotions/orgs/dx-signup

   QUESTION: Can suffixed email names such as "me+v1@sane.com" and "me+v2@sane.com" be recognized as separate emails?

1. You'll get an email to validate.
1. In Setup, Quick Find, search for "Dev Hub" and click on the response in the list.
1. Click the Dev Hub toggle to "Enabled".

   PROTIP: This cannot be undone.


## DX Tools

DX consists of these new facilities:

   * Scratch (ephemeral/destructible) orgs created on the fly for temporary use for a "scope" 
   * Dev Hub for managing scratch orgs
   * A Salesforce CLI binary that runs side-by-side with the Heroku CLI
   * Support for the Lightning Test service and Lightning linting to Salesforce CLI
   * <a href="#MetadatExport">Metadata reporting and export from orgs</a>
   * Continuous integration with test automation

But the change is about more than the tools. Instead of building code and customizations around a monolithic org, code and customizations are built around <strong>artifact</strong> (a logical set of code) that represents a subset of the org that can be tested independently from other components in your org. This is so an artifact can be released independently. 

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th>Features</th><th>Scratch Org</th><th>Developer</th><th>Partial Copy Sandbox</th><th> Full Sandbox</th></tr>
<tr valign="top"><td>Refresh</td><td>Ephemeral</td><td>1 day</td><td>5 days</td><td>29 days</td></tr>
<tr valign="top"><td>Metadata</td><td>version control</td><td>Production</td><td>Production</td><td>Production</td></tr>
<tr valign="top"><td>Customer data</td><td>-</td><td>-</td><td>Sample</td><td>All data</td></tr>
<tr valign="top"><td>Data limit</td><td>200 MB</td><td>200 MB (1 GB Pro)</td><td>5 GB</td><td>Matches Prod.</td></tr>
<tr valign="top"><td>API calls/24 hrs</td><td>? </td><td>15K (50K)</td><td>-</td><td>-</td></tr>
</table>

A Sandbox that is nearly identical copy of a production environment is available only to Enterprise or Unlimited Edition customers. 

Number within parentheses are for Partner Developers.

<a name="Git"></a>
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

Salesforce calls this <a target="_blank" title="video [49:12] Jun 5, 2017" href="https://www.youtube.com/watch?v=z11co_ZqUH8/">"Second Generation Packaging"</a> (2GP) <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_enable_secondgen_pkg.htm">*</a>.

With Salesforce DX, a local project is tied to a repository. Each project contains, at a minimum, one artifact. Each repository keeps a history of all work done for artifacts. Branches are used to track the changes for each release. 

In more complex orgs, you may find it necessary to have multiple related artifacts developed as part of the same project. This happens when sets of components and customizations depend on others.

http://resources.docs.salesforce.com/rel1/doc/en-us/static/pdf/SF_Git_cheatsheet_web.pdf
Git CheatSheet


## Install SFDX CLI

See https://developer.salesforce.com/tools/sfdxcli

1. SFDX CLI

   PROTIP: There is "brew install sfdx". However:

   <pre><strong>npm install --global sfdx-cli</strong></pre>

1. Verify version installed:

   <pre><strong>sfdx version</strong></pre>

   <pre>
 ▸    sfdx-cli: update available from 6.26.0 to 6.27.0-24408b4625
sfdx-cli/6.26.0 (darwin-x64) node-v10.7.0
   </pre>

1. Update

   <pre><strong>sfdx update</strong></pre>

   <pre>
 ▸    Use "npm install --global sfdx-cli" to update npm-based installations.
sfdx-cli: Updating plugins... done
   </pre>

1. As the response suggests, upgrade:

   <pre><strong>npm install --global sfdx-cli</strong></pre>

   The message that appears all overwrite each other on the screen.

   <pre>
/usr/local/bin/sfdx -> /usr/local/lib/node_modules/sfdx-cli/bin/run
+ sfdx-cli@6.28.0
updated 1 package in 30.559s
   </pre>

1. Verify the version of the installed salesforcedx plug-in:

   <pre><strong>sfdx plugins --core</strong></pre>

   <pre>
@salesforce/plugin-generator 0.0.10 (core)
@salesforce/sfdx-trust 1.0.8 (core)
builtins 1.0.0 (core)
salesforcedx 43.9.0 (core)
   </pre>

1. Get a list of operations under the force topic:

   <pre><strong>sfdx force --help</strong></pre>

   <pre>
Usage: sfdx force: [-v] [--json] [--loglevel &LT;string>] [flags]
&nbsp;
Flags:
 -v, --version        display the Salesforce API version
 --json               format output as json
 --loglevel LOGLEVEL  logging level for this command invocation
                      (error*,trace,debug,info,warn,fatal)
&nbsp;
Usage: sfdx force:COMMAND
&nbsp;
Help topics, type sfdx help TOPIC for more details:
&nbsp;
 force:alias        manage username aliases
 force:apex         work with Apex code
 force:auth         authorize an org for use with the Salesforce CLI
 force:config       configure the Salesforce CLI
 force:data         manipulate records in your org
 force:doc          display help for force commands
 force:lightning    create and test Lightning component bundles
 force:limits       view your org’s limits
 force:mdapi        retrieve and deploy metadata using Metadata API
 force:org          manage your Salesforce DX orgs
 force:package      develop second-generation packages; install and uninstall first- and second-generation packages
 force:package1     develop first-generation managed and unmanaged packages
 force:project      set up a Salesforce DX project
 force:schema       view standard and custom objects
 force:source       sync your project with your orgs
 force:user         perform user-related admin tasks
 force:visualforce  create and edit Visualforce files
   </pre>

1. Get a list of all commands, including the verb:

   <pre><strong>sfdx force:doc:commands:list</strong></pre>

   Expand the 

   <pre>
=== Commands
  force:alias:list                    # list username aliases for the Salesforce CLI
  force:alias:set                     # set username aliases for the Salesforce CLI
  force:apex:class:create             # create an Apex class
  force:apex:execute                  # execute anonymous Apex code
  force:apex:log:get                  # fetch a debug log
  force:apex:log:list                 # list debug logs
  force:apex:log:tail                 # start debug logging and display logs
  force:apex:test:report              # display test results
  force:apex:test:run                 # invoke Apex tests
  force:apex:trigger:create           # create an Apex trigger
  force:auth:jwt:grant                # authorize an org using the JWT flow
  force:auth:logout                   # log out from authorized orgs
  force:auth:sfdxurl:store            # authorize an org using an SFDX auth URL
  force:auth:web:login                # authorize an org using the web login flow
  force:config:get                    # get config var values for given names
  force:config:list                   # list config vars for the Salesforce CLI
  force:config:set                    # set config vars for the Salesforce CLI
  force:data:bulk:delete              # bulk delete records from a csv file
  force:data:bulk:status              # view the status of a bulk data load job or batch
  force:data:bulk:upsert              # bulk upsert records from a CSV file
  force:data:record:create            # create a record
  force:data:record:delete            # delete a record
  force:data:record:get               # view a record
  force:data:record:update            # update a record
  force:data:soql:query               # execute a SOQL query
  force:data:tree:export              # export data from an org into sObject tree format for force:data:tree:import consumption
  force:data:tree:import              # import data into an org using SObject Tree Save API
  force:doc:commands:display          # display help for force commands
  force:doc:commands:list             # list the force commands
  force:lightning:app:create          # create a Lightning app
  force:lightning:component:create    # create a Lightning component
  force:lightning:event:create        # create a Lightning event
  force:lightning:interface:create    # create a Lightning interface
  force:lightning:test:create         # create a Lightning test
  force:lightning:test:install        # install Lightning Testing Service unmanaged package in your org
  force:lightning:test:run            # invoke Lightning component tests
  force:limits:api:display            # display current org’s limits
  force:mdapi:convert                 # convert metadata from the Metadata API format into the Salesforce DX format
  force:mdapi:deploy                  # deploy metadata to an org using Metadata API
  force:mdapi:deploy:report           # check the status of a metadata deployment
  force:mdapi:retrieve                # retrieve metadata from an org using Metadata API
  force:mdapi:retrieve:report         # check the status of a metadata retrieval
  force:org:create                    # create a scratch org
  force:org:delete                    # mark a scratch org for deletion
  force:org:display                   # get org description
  force:org:list                      # list all orgs you’ve created or authenticated to
  force:org:open                      # open an org in your browser
  force:org:shape:create              # create a snapshot of org edition, features, and licenses
  force:org:shape:delete              # delete all org shapes for a target org
  force:org:shape:list                # list all org shapes you’ve created
  force:package1:version:create       # create a first-generation package version in the release org
  force:package1:version:create:get   # retrieve the status of a package version creation request
  force:package1:version:display      # display details about a first-generation package version
  force:package1:version:list         # list package versions for the specified first-generation package or for the org
  force:package2:create               # (deprecated) create a second-generation package
  force:package2:list                 # (deprecated) list all second-generation packages in the Dev Hub org
  force:package2:update               # (deprecated) update a second-generation package
  force:package2:version:create       # (deprecated) create a second-generation package version
  force:package2:version:create:get   # (deprecated) retrieve a package version creation request
  force:package2:version:create:list  # (deprecated) list package version creation requests
  force:package2:version:get          # (deprecated) retrieve a package version in the Dev Hub org
  force:package2:version:list         # (deprecated) list all package versions in the Dev Hub org
  force:package2:version:update       # (deprecated) update a second-generation package version
  force:package:create                # create a package
  force:package:install               # install a package in the target org
  force:package:install:get           # (deprecated) retrieve the status of a package installation request
  force:package:install:report        # retrieve the status of a package installation request
  force:package:installed:list        # list the org’s installed packages
  force:package:list                  # list all packages in the Dev Hub org
  force:package:uninstall             # uninstall a second-generation package from the target org
  force:package:uninstall:get         # (deprecated) retrieve the status of a package uninstall request
  force:package:uninstall:report      # retrieve status of package uninstall request
  force:package:update                # update package details
  force:package:version:create        # create a package version
  force:package:version:create:list   # list package version creation requests
  force:package:version:create:report # retrieve details about a package version creation request
  force:package:version:list          # list all package versions in the Dev Hub org
  force:package:version:promote       # promote a package version to released
  force:package:version:report        # retrieve details about a package version in the Dev Hub org
  force:package:version:update        # update a package version
  force:project:create                # create a new SFDX project
  force:project:upgrade               # update project config files to the latest format
  force:schema:sobject:describe       # describe an object
  force:schema:sobject:list           # list all objects of a specified category
  force:source:convert                # convert Salesforce DX source into Metadata API format
  force:source:open                   # edit a Lightning Page with Lightning App Builder
  force:source:pull                   # pull source from the scratch org to the project
  force:source:push                   # push source to an org from the project
  force:source:status                 # list local changes and/or changes in a scratch org
  force:user:create                   # create a user for a scratch org
  force:user:display                  # displays information about a user of a scratch org
  force:user:list                     # lists all users of a scratch org
  force:user:password:generate        # generate a password for scratch org users
  force:user:permset:assign           # assign a permission set to one or more users of an org
  force:visualforce:component:create  # create a Visualforce component
  force:visualforce:page:create       # create a Visualforce page
   </pre>

1. Get a list of just org operations:

   <pre><strong>sfdx force:org --help</strong></pre>

   <pre>
Usage: sfdx force:org:COMMAND [command-specific-options]
&nbsp;
manage your Salesforce DX orgs
&nbsp;
sfdx force:org commands: (get help with sfdx help force:org:COMMAND)
 force:org:create        create a scratch org
 force:org:delete        mark a scratch org for deletion
 force:org:display       get org description
 force:org:list          list all orgs you’ve created or authenticated to
 force:org:open          open an org in your browser
 force:org:shape:create  create a snapshot of org edition, features, and licenses
 force:org:shape:delete  delete all org shapes for a target org
 force:org:shape:list    list all org shapes you’ve created
   </pre>


   ### Uninstall CLI

1. Where installed:

   <pre>
/usr/local/Caskroom/sfdx
/usr/local/bin/sfdx
/usr/local/lib/sfdx
/usr/local/lib/sfdx/bin/sfdx
~/.config/sfdx
~/.local/share/sfdx
~/Library/Caches/sfdx
~/.cache/sfdx
   </pre>




## Sample DX project

On your local machine (laptop), perform these steps to obtain assets from GitHub to create a scratch org:

1. Create a "subject" folder or navigate to an existing one:

1. Install Git https://help.github.com/articles/set-up-git/

1. Download a sample repo from GitHub - the Dreamforce ’16 Developer Keynote sample application, called the DreamHouse app stored in GitHub. It was created by Wade Wegner, <a target="_blank" href="https://www.linkedin.com/in/wadewegner/">Salesforce SVP Product Management</a>:

   <pre><strong>git clone https://github.com/forcedotcom/sfdx-dreamhouse.git
   cd sfdx-dreamhouse
   </strong></pre>

   ### Login DevHub

1. Login DevHub which manages scratch, defining a default:

   <pre><strong>sfdx force:auth:web:login -d -a DevHub</strong></pre>

1. If there is more than one account:

   PROTIP: Use the email and password that you established with that 30-day trial.

1. If an "Allow Access" page appears, click "Allow".
1. Type password in the Salesforce authentication web page pop-up.

   The page that appears should have an Org. that has DevHub as the default app:

   ![sf-devhub-landing-789x444-65002.jpg](https://user-images.githubusercontent.com/300046/43999439-91bb859a-9dc9-11e8-9f24-85f2e4ef2f2b.jpg)

1. Copy the <em>host name portion</em> of the URI for the Dev Hub Org., such as:

   <pre>https://battlestar-galatica-384587.lightning.force.com/</pre>

1. Close the browser because we're working with the CLI here.

   ### Script orgInit.sh

   github.com/dreamhouse-sfdx has a scripts folder containing orgInit.sh:

   ### Scratch orgs config

1. In a Terminal at the sdfx-dreamhouse root folder.

   The json -file specified defines the <strong>"scope"</strong> of the app, which includes the Salesforce <strong>edition</strong> and preferences for features the app is enabled to work with (such as S1Desktop and Chatter):

   <pre>
{
    "orgName": "Salesforce DX Company",
    "edition": "Developer",
    "orgPreferences" : {
        "enabled": ["S1DesktopEnabled"]
    }
}</pre>

   PROTIP: The <strong>project-scratch-def.json</strong> temporarily <strong>overrides</strong> enterprise-level scope settings during test runs defined in 
   the <strong>enterprise-scratch-def.json</strong>:

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

   Other features: "S1DesktopEnabled","AuthorApex","NetworksEnabled","Communities"

   <a name="CreateScratch"></a>

1. Create an empty scratch org with an <strong>-alias</strong> named "demo1":

   <pre><strong>sfdx force:org:create -s -f config/project-scratch-def.json -a "demo1"</strong></pre>

   <tt>-n --durationdays 7</tt> can also be added to limit the time.

   The command takes a while for sample response such as:

   <pre>Successfully created scratch org: 00D0q0000000q6gEAA, username: test-iydplvaqyiko@example.com</pre>

1. Copy down in a file the response scratch org ID and its username.

   A <strong>scratch org</strong> is a dedicated, configurable, and short-term Salesforce environments that are quickly spun up within a Dev Hub Org. when starting a new project, a new feature branch, or a feature test.


   ### List Orgs

1. List orgs

   <pre><strong>sfdx force:org:list</strong></pre>

   <pre>
=== Orgs
     ALIAS   USERNAME                ORG ID              CONNECTED STATUS
───  ──────  ──────────────────────  ──────────────────  ────────────────
(D)  DevHub  wilsonmar@gmail.com     00Df2000000BaJcEAK  Connected
&nbsp;
     ALIAS  SCRATCH ORG NAME       USERNAME                       ORG ID              EXPIRATION DATE
───  ─────  ─────────────────────  ─────────────────────────────  ──────────────────  ───────────────
(U)  demo1  Salesforce DX Company  test-iydplvaqyiko@example.com  00D0q0000000q6gEAA  2018-08-19
   </pre>

   PROTIP: The default lifetime duration is 7 days from creation.

   ### Display orgs

   <pre><strong>sfdx force:org:display</strong></pre>

   Expand the Terminal window or use smaller font:

   <pre>
=== Org Description
KEY              VALUE
───────────────  ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Access Token     00D0q0000000q6g!ARkAQIlr.EB_hhK5lPcFiPKsScAPVqoqtTCap8nHArYvN5Gv.aw6obwbUffVQt0bKhdm7mmwVqAcb4r3PMEqRIntAtfoabcd
Alias            demo1
Client Id        SalesforceDevelopmentExperience
Created By       wilsonmar@gmail.com
Created Date     2018-08-12T07:04:42.000+0000
Dev Hub Id       wilsonmar@gmail.com
Edition          Developer
Expiration Date  2018-08-19
Id               00D0q0000000q6gEAA
Instance Url     https://page-connect-1530-dev-ed.cs64.my.salesforce.com
Org Name         Salesforce DX Company
Status           Active
Username         test-iydplvaqyiko@example.com
   </pre>

1. Check status:

   <pre><strong>sfdx force:source:status</strong></pre>

   A long list appears:

   <pre>
STATE                     FULL NAME    TYPE        PROJECT PATH
─────                     ──────────   ──────────  ─────────────────────────────────
Local Deleted             MyClass      ApexClass   /MyClass.cls-meta.xml
   </pre>


   ### Push Orgs

1. Push app metadata into the current scratch org:

   <pre><strong>sfdx force:source:push</strong></pre>

   PROTIP: Metadata about the project is defined in the <strong>.project</strong> file:

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
   </pre>

   TODO: force-app

   ### Assign permissions

1. Assign the dreamhouse permission set to the default user "dreamhouse":

   <pre><strong>sfdx force:user:permset:assign -n dreamhouse \
   --permsetname Dreamhouse</strong></pre>

   ### Load data

1. Apply the <tt>data</tt> folder which specifies <strong>app objects</strong> handled by the app. With Dreamhouse, it's properties for sale and what brokers are trying to sell them.

   <pre><strong>sfdx force:data:tree:import --plan data/sample-data-plan.json</strong></pre>

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


   ### Open Org

1. Open org using the alias and automatically log in with cached authentication token (rather than passwords).

   <pre><strong>sfdx force:org:open -u demo</strong></pre>

   This should pop up a browser window containing Salesforce UI.

   At this point we have a brand-new empty scratch org. Next we populate it with the source we first pulled out of GitHub. For this, we use the source synchronization APIs, also available in the CLI.

   ### On Salesforce UX

1. In Setup, type theme in the Quick Find box. Click Themes and Branding, 
1. Flip the toggle to hide background images in Lightning Experience.
1. Select "DreamHouse" in the App Launcher.

1. Click the (real estate) Properties tab and notice that there are 12 new properties.
1. Click the Brokers tab and see that there are eight new brokers.

1. Click the Data Import tab and click Initialize Sample Data


   ### List packages

   <pre><strong>sfdx force:package2:list</strong></pre>

   ### Delete Org

1. Delete org using alias:

   <pre><strong>sfdx force:org:delete -u demo</strong></pre>

   <pre>
Enqueue scratch org with name: demo for deletion? Are you sure (y/n)?
   </pre>

   Now repeat <a name="CreateScratch">scratch org creation</a> and continue.


   ### DX App Assets

   Let's analyze Dreamhouse files at the root of the project repo:

   The <strong>settings.json</strong> file within folder <tt>.vscode</tt> saves Visual Studio Code preferences.

   Other similar files may be added for other IDEs.

   The <strong>.gitignore</strong> file specifies files and folders which are not to be uploaded to the team/public repository (DevHub or GitHub). This goes with the <tt>.git</tt> folder created by Git when cloning.

   QUESTION: A <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm">.forceignore</a> file in the repo root folder is used to exclude source When Syncing or Converting. As a generic example, it contains this to ignore LESS files:

   <pre>
**.less
   </pre>

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

### force-app folder

Under /main/default/classes are the minimum needed. But Dreamhouse has the full set:




### .sfdx top folder

Inder the <tt>.sfdx</tt> top-level folder is a folder named "tools" that contains the <strong>apex.db</strong> (database definiton).

What's in apex.db is defined within <tt>.sfdx/typings/lwc/apex/</tt> -- <strong>.ts (Typescript)</strong> files.

BotController.d.ts

## TODO: Setup Test

1. Test Permissions
1. Test Data

   PROTIP: Scratch orgs are meant for use by individual developers rather than a team sandbox.

   HOW? SFDX keeps track of both changes you make locally as well as any in your scratch org.

   SFDX transforms large source files into smaller files to provide more project flexibility and reduce merge conflicts.

## TODO: Run Test thru DevHub

1. Run test
1. Determine result

   Retrieve metadata source from an org and convert it to Salesforce DX format stored in a VCS repo. 

1. Make changes using editor

   PROTIP: Any changes made within a scratch org (using point-and-click) needs to be tracked in the Git source to be repeatable.

1. Repeat test cycle with the Metadata API package created in the build phase.

   When proven ready:

1. Deploy on a sandbox, a representation of the production org. 

1. In a sandbox, replicate and test the steps to release into the production org.

1. TODO: Deploy to production

<hr />


<a name="MetadatExport"></a>
### Metadata export from orgs

PROTIP: Metadata in existing orgs can be extracted into source code for storage in GitHub in <tt>sfdx-project.json</tt> files. This is easier said than done because there are several sources:

* Metadata API
* Salesforce DX Source Tracking to do push and pull
* Packaging
* Change Sets
* Apex MD API
* Tooling API

A special token is used in CI runs.

<a target="_blank" href="https://www.youtube.com/watch?v=zsZDEL6oO0Q&t=9m50s">VIDEO: In 2018</a>, documentation about metadata is disparate, it's non consistent, not easy to find and navigate."
A Metadata Report generated from each org lists for each Metadata Type whether it's exposed by the Metadata API, in source tracking, and unlocked packaging, all in one place.

These instructions are based on video:

   * <a target="_blank" href="https://www.youtube.com/watch?v=Prlurg2ORnU/">How Everyone Can Leverage Salesforce DX Packaging</a> 19 Nov 2017 shows how to get unmanaged metadata into a DX package.

The strategy is to, over time, to identify <strong>unpackaged metadata</strong>
and organize them into Salesforce DX packages.

1. Enable your org with Salesforce DX <strong>DevHub</strong> and 2nd Generation Packaging.

   In Setup, search for "Dev Hub".

   https://sfdc.co/dx-pkgs

1. Convert metadata in the org calling the Metadata API (mdapi):

   <pre><strong>sfdx force:mdapi:convert --rootdir mdapi-source --outputdir force-app
   </strong></pre>

   See the App Development with Salesforce DX module:

1. Identify and put <strong>shared</strong> components in shared package of artifacts.

   PROTIP: Metadata components can only live in one artifact at a time. So shared Metadata components should live as <strong>shared components in a single base artifact</strong>.

   * <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_unsupported_types.htm">Unsupported Metadata Types</a>

1. Use the Salesforce CLI and your testing org to create a package.xml that identifies the components of the artifact. 

1. Construct the command with the current date/time:

   <pre><strong>sfdx force:package2:create --containeroptions Unlocked --name "Expense 2018.08.11 10:49"</strong></pre>

   PROTIP: "Unlocked" allows full editability. "Locked" does not allow editability.
   There are different icons to flag the difference in the Apex classes screen.

1. Highlight and copy the VALUE for package2 output (such as "0H00000008OQdKAM") and paste it in the <tt>sdfx-project.json</tt> file:

   <pre>
   "path": "force-app",
   "id": "0H00000008OQdKAM",
   "versionName": "Expense App",
   "versionDescription": "Move Expense App metadata into a package2",
   "versionNumber": "1.0.0.NEXT",
   "default": true
   </pre>

   The "NEXT" is a token which will be auto-incremented.

1. Queue version creation from source:

   <pre><strong>sfdx force:package2:version:create --directory force-app</strong></pre>

1. Grab the Id returned, such as:

   <pre>04tB0000000IaLi</pre>

1. Install the package:

   <pre><strong>sfdx force:package:install --wait 2 --id 04tB0000000IaLi</strong></pre>

1. Refresh the org UI to view Installed Packages.
  
1. Click View Components, Package Components. 
1. Click "View dependencies".

   There is warning that changes done in the UI needs to be changed in the code as well.

1. Make changes in the code.
1. Increment the versionNumber.
1. Do a build.

1. Create a VCS repository for each artifact. 

1. Build release cycles specific to those applications.


## Social community

<a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A000000HTp1">SFDX Chatter Success Community group</a>

Look for Twitter tag <a target="_blank" href="https://twitter.com/search?q=%23salesforcedx&src=typd">#SalesforceDX</a>

\#BASFDUG (Bay Area/San Francisco Dev User Group) has a <a target="_blank" href="http://bit.ly/TwitchSF">the /TwitchSF channel</a>, and <a target="_blank" href="https://www.youtube.com/channel/UCdTNaauk7anhmVfg-ulzX2Q/videos/">YouTube channel</a> (<a target="_blank" href="https://bit.ly/2kMVC8q">bit.ly/2kMVC8q</a>).

   * JOIN: <a target="_blank" href="https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A000000HTp1">Salesforce DX Beta group</a> Success Community.


## Continuous Integration

1. Sign up for an account at https://travis-ci.org/ using your GitHub account.

   PROTIP: Plans begin from $69 per month for 1 concurrent job.

1. Click Authorize travis-ci to log in with your GitHub credentials, then enter your GitHub password.


1. Fork to your own GitHub account a repo that has a <strong>.travisci.yml</strong> file for processing by Travis CI, a cloud-based continuous integration (CI) service for building and testing software projects hosted on GitHub:

   <pre><strong>git clone https://github.com/forcedotcom/sfdx-travisci.git
   cd sfdx-travisci
   </strong></pre>

   The .travisci.yml file:

   <pre>
sudo: true
os: trusty
cache: false
&nbsp;
env:
- URL=https://developer.salesforce.com/media/salesforce-cli/sfdx-linux-amd64.tar.xz
&nbsp;
before_install:
- openssl aes-256-cbc -K $encrypted_b1fbf710b918_key -iv $encrypted_b1fbf710b918_iv
  -in assets/server.key.enc -out assets/server.key -d
- export SFDX_AUTOUPDATE_DISABLE=false
- export SFDX_USE_GENERIC_UNIX_KEYCHAIN=true
- export SFDX_DOMAIN_RETRY=300
- export SFDX_DISABLE_APP_HUB=true
- export SFDX_LOG_LEVEL=DEBUG
- mkdir sfdx
- wget -qO- $URL | tar xJ -C sfdx --strip-components 1
- "./sfdx/install"
- export PATH=./sfdx/$(pwd):$PATH
- sfdx --version
- sfdx plugins --core
- sfdx force:auth:jwt:grant --clientid $CONSUMERKEY --jwtkeyfile assets/server.key --username $USERNAME --setdefaultdevhubusername -a HubOrg
&nbsp;
script:
- sfdx force:org:create -v HubOrg -s -f config/project-scratch-def.json -a ciorg --wait 2
- sfdx force:org:display -u ciorg
- sfdx force:source:push -u ciorg
- sfdx force:apex:test:run -u ciorg --wait 10
- sfdx force:org:delete -u ciorg -p
   </pre>

1. Run test and get results in a human-readable format:

   <pre><strong>sfdx force:apex:test:run --resultformat human</strong></pre>

   Alternately, specify "junit" to view results using JUnit4 tools used by continuous integration.

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

Rohit Mehta (@rohitforce), Product Manager

   * <a target="_blank" href="http://salesforce.vidyard.com/watch/WQzCAyBR8FiJQ8yVXWDwWR">Salesforce Environments: Getting Started with Scratch Orgs</a>

Dileep Burki, <a target="_blank" href="https://www.linkedin.com/in/dileep-burki-483a25/">Sr. Product Manager</a>:

   * <a target="_blank" href="https://www.youtube.com/watch?v=Prlurg2ORnU/">How Everyone Can Leverage Salesforce DX Packaging</a> 19 Nov 2017 shows how to get unmanaged metadata into a DX package.
   * <a target="_blank" href="https://www.youtube.com/watch?v=MY2_AfjtBp8">
   This video</a> Architecting Unlocked Packages in Your Salesforce Org
   John Daniel, Platform Architect of Morgan & Morgan Law Firm
   interviewed by Dilip Burki (@burki_db), Sr Dir Product Management.

   * <a target="_blank" href="https://www.youtube.com/watch?v=z11co_ZqUH8/">"Second Generation Packaging"</a> (2GP) [49:12] Jun 5, 2017

Josh Kaplan (@JoshSFDC), Product Manager

   * <a target="_blank" href="https://www.youtube.com/watch?v=UaPPhFWHBQ0/">Top 10 Things to Know About Salesforce DX</a> 15 Nov 2017 [20:12]

   * <a target="_blank" href="https://www.youtube.com/watch?v=wUc1l5keYmo/">Salesforce DX - Continuous Integration and Continuous Delivery</a> 5 Jul 2017 [30:44]

Wade Wegner (@WadeWegner), <a target="_blank" href="https://www.linkedin.com/in/wadewegner/">Salesforce SVP Product Management</a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=Pf33nrsqZOc/">Introduction to Salesforce DX</a> 3 Jul 2017 [38:20] at TrailheadDX evaluates whether DX meets Principles of Modern Software Delivery. He also shows code.

   * <a target="_blank" href="https://www.youtube.com/watch?v=6lNG6iFVGQg/">Migrating to Salesforce DX</a> Jul 5, 2017 during TrailheadDX [45:00] by architects Jim Wunderlich & Mike Miller 

Others from Salesforce Developers on YouTube:

   * <a target="_blank" href="https://www.youtube.com/watch?v=FUFkbr9uueU/">From Change Sets to Salesforce DX: The Evolution of Collaboration</a> Nov 19, 2017 with Schneider Electric

   * <a target="_blank" href="https://www.youtube.com/watch?v=ZMjKmQ9j9I8/">Simplify your code with Salesforce DX and module development</a> Dec 14, 2017

   * <a target="_blank" href="https://www.youtube.com/watch?v=hXST9yOyQLk/">Getting Started in VS Code with Salesforce DX</a> Nov 15, 2017

   * <a target="_blank" href="https://www.youtube.com/watch?v=exZ3TICOzd8/">Get Started with Salesforce DX!</a> 

   * <a target="_blank" href="https://www.youtube.com/watch?v=vkvtKIog_98/">Life Before and After Salesforce DX for Salesforce Industries</a> Nov 13, 2017 by Shafi Ulla, DevOps Engineer & Akshay Patravali 

   * <a target="_blank" href="https://www.youtube.com/watch?v=iDBb0RDqY2A/">Copying Your Org's Shape into Scratch Orgs</a> Nov 13, 2017

   * <a target="_blank" href="https://www.youtube.com/watch?v=12WcMzjs0lw">Use Metadata API with Salesforce DX</a> by Jitendra Zaa

Ruth Sears-Blazej (@ruth_sfdc_docs) write docs about SFDC.


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

   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/unlocked-packages-for-customers">Unlocked Packages for Customers</a> [55 mins] +700
   * <a target="_blank" href="https://trailhead.salesforce.com/en/modules/app_deployment">Change Management</a> [1 hr 15 mins] +500
   * Application Lifecycle Management (ALM)

   * Trailhead project: <a target="_blank" href="https://trailhead.salesforce.com/en/projects/quick-start-salesforce-dx">Quick Start: Salesforce DX</a> 
   * Trailhead project: <a target="_blank" href="https://trailhead.salesforce.com/en/projects/quick-start-unlocked-packages">Quick Start: Unlocked Packages</a> 
   <br /><br />

<a target="_blank" href="https://trailhead.salesforce.com/en/modules/process-design-without-limits">Process Design Without Limits</a>

The above replace many <a target="_blank" href="https://developer.salesforce.com/page/Force.com_workbook">Workbooks</a>


## References 

* <a target="_blank" href='https://developer.salesforce.com/docs/atlas.en-us.214.0.sfdx_cli_reference.meta/sfdx_cli_reference' >Salesforce CLI Command Reference</a></li>

* <a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.214.0.sfdx_dev.meta/sfdx_dev">Salesforce DX Developer Guide</a>

* <a target="_blank" href="https://developer.salesforce.com/tools/extension_vscode">Salesforce Extensions for VSCode</a>

* <a target="_blank" href="http://salesforce.vidyard.com/watch/M3APX9oM72RDUoiqNi8yyg">Salesforce CLI: Harnessing the Power of Salesforce Through the Command Line</a>

https://developer.secure.force.com/cookbook/
Best practices and code samples

* <a target="_blank" href="https://www.youtube.com/watch?v=YW9aPrxvK3A/">ANT tool</a> 6 Nov 2015.


## Misc notes

https://developer.salesforce.com/promotions/orgs/dx-signup

QUESTION: ISVs (Service Vendors) who build customized Salesforce apps
persona-based customizations.


<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
