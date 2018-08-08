---
layout: post
title: "Salesforce Heroku"
excerpt: "Start using Heroku with a Postgres database and integrate it with Salesforce"
tags: [salesforce, heroku]
file: salesforce-mobile.md
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

The marketing home page for Heroku is at<br /><a target="_blank" href="https://www.salesforce.com/products/platform/products/heroku/">https://www.salesforce.com/products/platform/products/heroku</a>

Salesforce bought Heroku some time ago.

## Get started with Heroku

1. Click this URL to register for an account:<br />
   <a target="_blank" href="https://www.heroku.com/">
   https://www.heroku.com</a>

   PROTIP: If you're creating an account on behalf of an organization, use a service account rather than using your own account.

1. Note: To install Heroku add-ons your account must be verified.

   ### Toolbelt CLI Install

0. Install https://toolbelt.heroku.com/

   <pre><strong>brew install -g heroku-toolbelt</strong></pre>

   The response:

   <pre>
==> Downloading https://s3.amazonaws.com/assets.heroku.com/heroku-client/heroku-
######################################################################## 100.0%
Initialized empty Git repository in /private/tmp/heroku-20160722-78693-1njp97z/heroku-client/.git/
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /usr/local
Could not symlink bin/heroku
Target /usr/local/bin/heroku
already exists. You may want to remove it:
  rm '/usr/local/bin/heroku'
&nbsp;
To force the link and overwrite all conflicting files:
  brew link --overwrite heroku
&nbsp;
To list all files that would be deleted:
  brew link --overwrite --dry-run heroku
&nbsp;
Possible conflicting files are:
/usr/local/bin/heroku -> /usr/local/heroku/bin/heroku
==> Summary
🍺  /usr/local/Cellar/heroku/3.43.5: 992 files, 6.2M, built in 7 seconds
   </pre>

1. If you get the message:

   <pre>Error: The `brew link` step did not complete successfully
   The formula built, but is not symlinked into /usr/local</pre>

   Fix it by first:

   <pre><strong>
   brew link --overwrite --dry-run heroku
   </strong></pre>

   To force the link and overwrite all conflicting files:

   <pre><strong>
   brew link --overwrite heroku
   </strong></pre>

   ### Verify installation

1. Open a new Terminal window

1. Create a new Terminal window:

   <pre><strong>heroku login</strong></pre>

   The response:

   <pre>
heroku-cli: Installing CLI... 20.22MB/20.22MB
Enter your Heroku credentials.
Email:
   </pre>

0. Enter your Heroku password.

   BTW, I like using 1Password to securely store and retrieve passwords.

0. Enter the password

   <tt><strong>
Password (typing will be hidden): 
   </strong></tt>

   If you got it right:

   <pre>
   Logged in as wilsonmar@gmail.com
   </pre>

   QUESTION: Where was that installed?

   PROTIP: On a Mac, the installer creates folder:<a target="_blank" href="https://devcenter.heroku.com/articles/heroku-cli#download-and-install">*</a>

   <pre>~/.netrc</pre>

   TODO: Set password for auto login.


## New Instance

A new instance can be created using either on Heroku on-line (shown in this section) or <a href="#NewScript">in a shell script</a>.

1. Create a new instance:

   <pre><strong>cd ~/myapp
   heroku create
   </strong></pre>



1. Go to your <a target="_blank" href="https://dashboard.heroku.com/apps">Dashboard</a> Settings to delete any instances you're not using.

   PROTIP: Like Salesforce test orgs, Heroku stay free for years if you keep to 5 apps or less.

1. To kick off deployment from GitHub, click a Heroku Button or its URL:

   https://heroku.com/deploy?template=https://github.com/jamesward/heroku-connect-phone-change

   <img align="right" alt="sf-heroku-connect-logo-230x266-13630" width="230" height="266" src="https://user-images.githubusercontent.com/300046/43510273-5ca62cec-9532-11e8-8f57-0154e3fe36d5.jpg">

   The link above deploys the sample "Phone Change" app described in the Salesforce Trailhead module:
   <a target="_blank" href="https://trailhead.salesforce.com/en/projects/quickstart-heroku-connect">Quick Start: Heroku Connect</a> [30 mins] to sync data between a Salesforce org and a Heroku Postgres database. The author, James Ward is Director, Open Source and Engineering Engagement at Salesforce.

1. Field App Name can be left blank because Heroku generates a unique one such as "shielded-harbor-5440". Type in a custom domain name if you own one from GoDaddy, etc.

1. Select United States as the Region
1. See https://devcenter.heroku.com/articles/pipelines
1. Click Deploy App.

<a name="NewScript"></a>

## Script to create new instance

Instead of the manual approach, use my Bash script to do the equivalent of the above. It's at:

   https://github.com/wilsonmar/DevSecOps/Heroku/start.sh

1. Install heroku CLI per https://devcenter.heroku.com/articles/heroku-cli

   PROTIP: The source for it is at https://github.com/heroku

2. Create in your account Home folder a file containing the HEROKU_API_KEY pair.

   That file is run by the script that runs Heroku.

   Here a description of its actions

3. Make and cd to a folder to hold the repo.
4. Optionally, go to an established repo containing Node web.js and package.json

   https://github.com/jamesward/heroku-connect-phone-change

   Notice in app.json vars named "PGSSLMODE" is specified for Heroku.

   <strong>package.json</strong> contains the metadata of the application name, version, the version of dependencies, and the version of NodeJs and main file under the public folder.

   <strong>package-lock.json</strong> is created by the command "npm install".<a target="_blank" href="https://medium.com/@Quigley_Ja/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8">*</a>

5. Clone the repository to get it local

   <pre>
   git clone https://github.com/jamesward/heroku-connect-phone-change --depth=1
   cd heroku-connect-phone-change
   </pre>

   There is also https://github.com/jamesward/heroku_hello_world

   These are the minimal files in https://github.com/jamesward/heroku-connect-phone-change
   or https://github.com/jamesward/heroku_hello_world

   * Procfile
   * package-lock.json 
   * package.json
   * web.js or server.js - the Node application code.

   Script code to create them:

   <pre>echo "web: node server.js" > Procfile
   echo "node_modules" > .gitignore
   </pre>

6. Create app in Heroku:

   <pre>
APP_NAME=""
heroku create  # or add $APP_NAME
   </pre>

   The response contains the package name and location:

   <pre>
Creating app... done, ⬢ guarded-ridge-66528
https://guarded-ridge-66528.herokuapp.com/ | https://git.heroku.com/guarded-ridge-66528.git
   </pre>

7. For SSL configuration (which requires an upgrade to paid dynos), see https://devcenter.heroku.com/articles/git#prerequisites-install-git-and-the-heroku-cli

8. Make use of the generated Git URL:

   <pre>
   heroku git:remote -a 
   </pre>

   Alternately:

   <pre><strong>
GITHUB_REPO="https://git.heroku.com/guarded-ridge-66528.git"
git remote add heroku https://git.heroku.com/evening-refuge-98240.git
git push heroku master
   </strong></pre>

   The response:

   <pre>
Counting objects: 58, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (35/35), done.
Writing objects: 100% (58/58), 545.91 KiB | 60.66 MiB/s, done.
Total 58 (delta 21), reused 58 (delta 21)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_VERBOSE=false
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  0.12.7
remote:        engines.npm (package.json):   unspecified (use default)
remote:
remote:        Resolving node version 0.12.7...
remote:        Downloading and installing node 0.12.7...
remote:        Using default npm version: 2.11.3
remote:
remote: -----> Restoring cache
remote:        Skipping cache restore (not-found)
remote:
remote: -----> Building dependencies
remote:        Installing node modules (package.json)
remote:        body-parser@1.18.3 node_modules/body-parser
remote:        ├── content-type@1.0.4
remote:        ├── bytes@3.0.0
remote:        ├── depd@1.1.2
remote:        ├── on-finished@2.3.0 (ee-first@1.1.1)
remote:        ├── raw-body@2.3.3 (unpipe@1.0.0)
remote:        ├── http-errors@1.6.3 (setprototypeof@1.1.0, inherits@2.0.3, statuses@1.5.0)
remote:        ├── qs@6.5.2
remote:        ├── debug@2.6.9 (ms@2.0.0)
remote:        ├── type-is@1.6.16 (media-typer@0.3.0, mime-types@2.1.19)
remote:        └── iconv-lite@0.4.23 (safer-buffer@2.1.2)
remote:
remote:        express@4.16.3 node_modules/express
remote:        ├── escape-html@1.0.3
remote:        ├── array-flatten@1.1.1
remote:        ├── setprototypeof@1.1.0
remote:        ├── content-type@1.0.4
remote:        ├── cookie-signature@1.0.6
remote:        ├── utils-merge@1.0.1
remote:        ├── merge-descriptors@1.0.1
remote:        ├── methods@1.1.2
remote:        ├── path-to-regexp@0.1.7
remote:        ├── range-parser@1.2.0
remote:        ├── encodeurl@1.0.2
remote:        ├── vary@1.1.2
remote:        ├── parseurl@1.3.2
remote:        ├── fresh@0.5.2
remote:        ├── etag@1.8.1
remote:        ├── statuses@1.4.0
remote:        ├── cookie@0.3.1
remote:        ├── content-disposition@0.5.2
remote:        ├── serve-static@1.13.2
remote:        ├── safe-buffer@5.1.1
remote:        ├── depd@1.1.2
remote:        ├── on-finished@2.3.0 (ee-first@1.1.1)
remote:        ├── finalhandler@1.1.1 (unpipe@1.0.0)
remote:        ├── debug@2.6.9 (ms@2.0.0)
remote:        ├── qs@6.5.1
remote:        ├── proxy-addr@2.0.4 (forwarded@0.1.2, ipaddr.js@1.8.0)
remote:        ├── send@0.16.2 (ms@2.0.0, destroy@1.0.4, mime@1.4.1, http-errors@1.6.3)
remote:        ├── type-is@1.6.16 (media-typer@0.3.0, mime-types@2.1.19)
remote:        ├── accepts@1.3.5 (negotiator@0.6.1, mime-types@2.1.19)
remote:        └── body-parser@1.18.2 (bytes@3.0.0, http-errors@1.6.3, raw-body@2.3.2, iconv-lite@0.4.19)
remote:
remote:        pg@4.5.7 node_modules/pg
remote:        ├── packet-reader@0.2.0
remote:        ├── js-string-escape@1.0.1
remote:        ├── pg-connection-string@0.1.3
remote:        ├── buffer-writer@1.0.1
remote:        ├── generic-pool@2.4.2
remote:        ├── semver@4.3.6
remote:        ├── pgpass@0.0.3 (split@0.3.3)
remote:        └── pg-types@1.13.0 (pg-int8@1.0.1, postgres-bytea@1.0.0, postgres-date@1.0.3, postgres-array@1.0.2, postgres-interval@1.1.2)
remote:
remote: -----> Caching build
remote:        Clearing previous node cache
remote:        Saving 2 cacheDirectories (default):
remote:        - node_modules
remote:        - bower_components (nothing to cache)
remote:
remote: -----> Pruning devDependencies
remote:
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 11.2M
remote: -----> Launching...
remote:        Released v3
remote:        https://guarded-ridge-66528.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/guarded-ridge-66528.git
 * [new branch]      master -> master
    </pre>

9. Instantiate 1 app server instance:

   <pre><strong>
heroku ps:scale web=1
   </strong></pre>

   Expected response:

   <pre>Scaling dynos... done, now running web at 1:Free
   </pre>

10. Open the app's web page in your default browser:

    <pre><strong>heroku open
    </strong></pre>

    A sample URL:

    <pre>
    https://guarded-ridge-66528.herokuapp.com/
    </pre>


## Add-on Postgres database

To add databases, monitoring services, caching services, and queuing systems,
See https://elements.heroku.com/addons
Now you are going to deploy an add-on. Heroku add-ons are cloud services,

Provision a relational database by adding the Heroku Postgres add-on
described at https://elements.heroku.com/addons/heroku-postgresql

1. In the Heroku Dashboard, click the "Manage App" button to visit the Heroku Dashboard 
1. Click on your new application name (for example, guarded-ridge-66528).
1. Click the Resources tab.
1. In the Add-ons section search field, type "Heroku Postgres" and click the response of same name.
1. Assume the plan in the pop-up ("Hobby Dev - Free") then click Provision.

   "The addon heroku-postgresql has been installed. Check out the documentation in its <a target="_blanK" href="https://devcenter.heroku.com/articles/heroku-postgresql">Dev Center article</a> to get started."

   NOTE: The simplicity and speed of this process belies the complexity of what just happened: You provisioned one of Heroku's 150+ add-on services. In this case, it's a relational database. The service is fully managed, is already running, and is now connected to your application.

   Heroku typically connects a provisioned add-on to an application by setting a configuration variable that is available as a runtime environment variable within the application.

1. Select the Settings tab.
1. In the "Config Vars" section, click Reveal Config Vars (Key/Value pairs):

   * <tt>DATABASE_URL</tt> = postgres://abcdvnhzwoskmf:9310494d102ba4df7de3b3fe33921de3410228045309e28ae5f98411e01033c0@ec2-184-73-199-189.compute-1.amazonaws.com:5432/det6u4itvvuivx

   * <tt>PGSSLMODE</tt> = "require", which Heroku should have taken from the app.json file:

   <pre>
  "env": {
    "PGSSLMODE": {
      "description": "Require SSL for Postgres",
      "value": "require"
    }
  }</pre>

   QUESTION: What is the version of Postgres?

   ### Set Up Trailhead Playground

1. From the bottom of a Trailhead module page, select your "Trailhead Playground" and click Launch.

   https://resourceful-moose-263556-dev-ed.lightning.force.com/...

   PROTIP: If you time out, close that screen, then return to the Trailhead Module page to login using your Salesforce Trailhead login, then Launch again.

   This should open to a "Bolt Solutions" app.

1. Follow the instructions in Get Your Trailhead Playground Username and Password unit of the Trailhead Playground Management module. You'll need your username and password to provision your Heroku Connect Add-on.

   ### Add a new field to the <strong>Contact</strong> object:

1. With the Lightning UX, click the wheel to select "Setup" for a new browser window at the Setup app.
1. Click the Object Manager tab next to "Home".
1. Click the blue Contact under LABEL.
1. Click Fields &amp; Relationships.
1. Click New.
1. For Data Type, scroll down to select Text, then scroll up to click Next.

   Complete the New Custom Field:

1. Field Label: "External Phone ID"
1. Length: 10
1. Field Name: External_Phone_ID
1. Check "Always require a value in this field in order to save a record"
1. Unique: Select "Do not allow duplicate values"
   Leave auto selection of "Treat "ABC" and "abc" as duplicate values (case insensitive)"
1. External ID: Check "Set this field as the unique record identifier from an external system"
1. Click Next.
1. Check "Visible" at the heading to make the field visible to all profiles.
1. Scroll down to click Next, 
1. Click Save.

   Notice API Name is "External_Phone_ID__c".

   We're done with Salesforce for a while, but keep the tab handy.

   ### Add-On Heroku Connect

   Applications running on Heroku can use a number of different methods to integrate with Salesforce data, including Salesforce REST APIs. But an easier approach is to use the Heroku Connect add-on,
   which provides <strong>bi-directional</strong> synchronization between Salesforce and Heroku Postgres, allowing you to unify and share the data in a Heroku Postgres SQL database with the contacts, accounts, and other custom objects in a Salesforce database.

1. Go back to the Heroku Dashboard, then find your application and click the management console.
1. Click the Resources tab.
1. In the Add-ons section search field, type "Heroku Connect" and click the response of same name.
1. In the pop-up, select the plan ("Demo Edition - Free") then click Provision for this message:

   "The addon herokuconnect has been installed. Check out the documentation in its <a target="_blank" href="https://devcenter.heroku.com/articles/herokuconnect">Dev Center article</a> to get started.""

   ### Create Connection on Heroku

1. Click "Heroku Connect" under the "Add-ons" section label for a new window.
1. Click "Setup Connection".

   Heroku Connect locates the Heroku Postgres database "salesforce" provisioned earlier.

1. Click Next.

   Leave default "Production" Environment (not Sandbox nor Custom Domain).

1. Click Authorize.
1. If you're prompted, Login again with your Trailhead Playground credentials, then click "Allow".

   ### Set up Heroku Connect

   Create a mapping between the Contact object in Salesforce and a table in the Heroku Postgres database. 

   TODO: Image here.

1. In Heroku, click "Mappings" tab.
1. Click "+ Create Mapping" button near the bottom-right. 
1. Press command+F to find "Contact", then click on it.
1. Under the "Database -> Salesforce" section, check "Write database updates to Salesforce using -- None -- as the unique identifier"
1. option and choose "External_Phone_ID__c" from the dropdown list 

   BLAH: Stuck here. "External_Phone_ID__c" NOT in the dropdown list for Trailhead module Quick Start: Heroku Connect

   ![sf-heroku-unique-1132x188](https://user-images.githubusercontent.com/300046/43534445-9e263170-9574-11e8-840a-612b29052e7e.jpg)

   <a target="_blank" href="https://success.salesforce.com/answers?feedtype=RECENT&criteria=BESTANSWERS#!/feedtype=SINGLE_QUESTION_SEARCH_RESULT&id=9063A0000019OM3QAM">This forum post</a> mentions 

   "-- Add a new 'Phone UUID' custom field on the User standard object with the resulting API name of 'Phone_UUID__c'. The field should be of type 'Text' and marked as 'Unique' and 'External ID'

   "Can you explain how to "Update any existing User record in your Developer Edition instance to have a value of '0000123442' for the 'Phone_UUID__c' field." I think this is what is tripping me up and causing me to get the following error message:

   <hr />

1. In the Mapped Fields section, select the following fields:

   * Created Date (already checked)
   * Email
   * FirstName
   * HomePhone
   * LastName and check Index
   * MobilePhone
   * Name (already checked)
   * Phone 

   * QUESTION: Where's External phone ???

1. Click Save.

   When you've completed the mapping setup, the data begins synchronizing. Mapping Complete
   Your application is now syncing (bidirectionally) a subset of the Contact object in Salesforce with a new table in the Heroku Postgres database associated with your app.

1. When the syncing is complete, open your Heroku app in a new browser tab, by entering 

   http://APP_NAME.herokuapp.com (replacing APP_Name with your app name)

   ### On the app

1. Complete the form to change a contact's phone number using the following values,
   which changes an existing record in the sample database:

   * First Name: Tim
   * Last Name: Barr
   * Email: barr_tim@grandhotels.com
   * Phone: (415) 555-1212

1. Click "Update Phone Number" for the "Record updated!" message.

   This should update the contact record in the Heroku Postgres database and be synced with Salesforce via Heroku Connect. So verify the updates in your Trailhead Playground:

   (Syncing could take a few minutes so ensure your Trailhead Playground is updated.)

1. In Salesforce Lightning UX, click the App Launcher icon and select the Sales app.
1. Click the Contacts tab.
1. Click Recently Viewed to select All Contacts.
1. Scroll down to click Tim Barr, then click the Details tab and see that the Phone was changed from "(312) 596-1000".


## Other Trailhead Modules to Learn

<a target="_blank" href="https://trailhead.salesforce.com/modules/heroku_enterprise_baiscs">Heroku Enterprise Basics</a> [1 hr 10 mins] Learn the basics of how and when to use the Heroku Enterprise platform.

<a target="_blank" href="https://trailhead.salesforce.com/modules/salesforce_heroku_integration">Salesforce & Heroku Integration</a> [2 hrs] Learn patterns and methodology of integrating apps on Heroku with Salesforce.

<a target="_blank" href="https://trailhead.salesforce.com/modules/heroku-flow">Heroku Flow</a> [1 hr] to manage continuous delivery in app development

<a target="_blank" href="https://trailhead.salesforce.com/modules/java-app-development-on-heroku">Java App Development on Heroku</a> [1 hr] Deploy production Java apps on Heroku.

<a target="_blank" href="https://trailhead.salesforce.com/en/modules/apex_integration_services/">Apex Integration Services</a> [2 hrs] +1600


## Other Topics

Heroku Shield

Heroku Agile Accelerator from AppExchange Trello

https://github.com/jamesward/heroku-buildpack-static
Heroku buildpack for handling static sites and single page web apps 

https://github.com/jamesward/hello-kafka-salesforce

https://github.com/jamesward/atom-heroku-tools
Stores a Heroku API Access Token the user's .netrc file

https://github.com/heroku

https://www.cncf.io/community/recorded-events/
http://bit.ly/2MpdYIk
VIDEO: Setting up the Heroku git-push workflow on your Kubernetes cluster in 60 seconds with Gitkube
https://www.cncf.io/wp-content/uploads/2018/06/Gitkube-CNCF-webinar-June-26-1.pdf

https://github.com/financialforcedev/orizuru
Streamlined communication between Heroku dynos / other worker processes 
It leverages Apache Avro for schema validation and communication.


## Competitors

https://cloud.google.com/cloud-build/
https://github.com/apps/google-cloud-build
offers the first 120 build minutes per day free


## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
