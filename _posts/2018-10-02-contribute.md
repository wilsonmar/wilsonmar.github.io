---
layout: post
title: "How to contribute to a Non-profit using Salesforce"
excerpt: "An example of a document for volunteers of technical talent"
tags: [salesforce]
date: "2018-10-02"
file: "contribute"
image:
# feature: hands-up-1900x500-56276.jpg
  feature: https://user-images.githubusercontent.com/300046/54075520-819e9400-426e-11e9-958c-62abf07d34a6.jpg
  credit: Brampton
  creditlink: https://www.brampton.ca/EN/City-Hall/Employment/Seasonal/Pages/VolunteerOpportunities.aspx
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is an example of a hands-on tutorial that volunteer software developers reference to get setup in order to make contributions in a collaborative way. This was written to ensure that you (a developer/graphic artist, etc.) get <strong>trained</strong> on a professional approach to software development while improving the non-profit's digital assets. The sections here are:

A. <a href="#Understand">      Understand the mission</a> (the organization and yours)<br />
B. <a href="#TechArchitecture">Understand the technical architecture</a><br />
C. <a href="#PickProject">     Pick a project</a><br />
D. <a href="#Collaboration">   Setup collaboration tools and techniques</a><br />
E. <a href="#Website">         Copy the public-facing website</a><br />
F. <a href="#Salesforce">      Create a copy of the Salesforce org</a><br />
G. <a href="#Changes">         Plan changes, update test scripts</a><br />
H. <a href="#TestDeploy">      Run tests, make changes, and deploy</a>

{% include whatever.html %}

<hr />

<a name="Understand"></a>

## A) Understand the mission

   <a name="Persona"></a>
   
   For this non-profit, the <strong>persona</strong> are: interns, hosts, mentors, donors. 
   Each person goes through different status over time: prospective, active, inactive, alum.

1. Click <a target="_blank" href="https://coursesites.com/?sig=Mwuk9E96d1zi4kLs58vOveO3Tl8=&courseId=_190749_1&timestamp=1549132709&inviteId=BB?BB_QzCGaVfkHcOjnCyDupFaIrNNbv5DmyN82PEvwEmTOMMtUG+4ivX5IA==#invitation-student">this link to register for training on the Blackboard system</a>

2. Access the YWAM Converge training content at <a target="_blank" href="https://blackboard.coursesites.com/ultra/courses/_190749_1/cl/outline">https://blackboard.coursesites.com/ultra/courses/_190749_1/cl/outline</a>
3. Click "YWAM Values" on the left menu to read it.
4. Click "Start Here" on the left menu to read "Welcome to Converge".
5. Scroll down to watch the "What is YWAM" video. <strong>Click the volume icon to unmute.</strong>

   When did YWAM (the parent organization) start? See <a target="_blank" href="https://youtu.be/Uz0EesM-G04">https://youtu.be/Uz0EesM-G04</a>

6. Scroll down the page to see the diagram summarizing the activities by phase:

   <img alt="ywam-contribute-648x636-38472.jpg" width="500" src="https://user-images.githubusercontent.com/300046/54088143-34372b00-4331-11e9-952c-c7470f39d708.jpg">

7. Open a browser tab to the <a target="_blank" href="https://www.ywamocnj.org/faq/">FAQ</a> (Frequently Asked Questions) to see if you can answer the questions before revealing the answer. Kinda like a quiz.

   <a name="Procedures"></a>
   
   ### Process/Procedures

8. Watch demo video of <a target="_blank" href="https://www.youtube.com/watch?v=jQuuvYIbbTA&feature=youtu.be">How to apply for a Converge intership</a> [2:20] No sound. The Ruby system is not mobile-friendly (progressive).

9. Watch demo video of <a target="_blank" href="https://youtu.be/ejz9HEbg9Xo">host app</a>. No sound.

https://www.youtube.com/watch?v=hSqbotfxZAA
Dec 23, 2015


<a name="TechArchitecture"></a>

## B) Understand the technical architecture

The system consists of several components, <a target="_blank" href="https://docs.google.com/presentation/d/1o_T8XRfeiDLD62ums2hHYid5_qIFNHUlAkQ3YtV6E1k/edit#slide=id.p">described by this system flow chart on Google (created using Lucid Chart)<img align="right" alt="ywan-architecutre-2019a-200x183-7427" width="200" src="https://user-images.githubusercontent.com/300046/53695300-b2bb2800-3d87-11e9-9b8e-759a92d654dd.jpg"></a>

   * <a href="#TrainingSite">A training management website</a> used by interns to learn about being an intern. Videos on it are stored (as Public) on the <a target="_blank" href="https://www.youtube.com/channel/UCacj____6p8-iiIN_Nk-iBw">YouTube channel</a>
   * <a href="#Website">A public-facing website</a> that exchanges information dynamically with
   * <a href="#Salesforce">A Salesforce org</a> database used internally for administration.

   * <a target="_blank" href="https://www.youtube.com/watch?v=FwNdD0yrBE4&list=PLJY5a7HPiwbWpw63i-4sFoKfXvEe-zxBV">Audio podcasts from 2018</a> are also stored on YouTube.
   * Apple podcasts?

   * <a target="_blank" href="https://www.facebook.com/YWAMOCNJ/">Facebook</a>
   * Instagram?
 
<a name="PickProject"></a>

## C) Pick a project

Some volunteer opportunities are listed in <a target="_blank" href="https://rwjf.catchafire.org/volunteer/?name_filter=ywam%20converge&page=1">CatchAFire.org</a> managed by admins using the <a target="_blank" href="https://rwjf.catchafire.org/dashboard"> dahboard</a>.

a. Team: How to get more people to be aware of this (advanced training to make a difference)? What are the outlets?
   
b. John: Create videos for display in emails (instead of text) about next steps, etc. within a drip email sequence.
   
c. Create <strong>automated test scripts</strong> (based on <a href="#Procedures">documented procedures</a>) to verify whether the system works "end-to-end" (for different personas), to identify whether the sytem still works after changes. Kinda like auto-fill on steroids.
   
d. Dan: Upgrade front-end server version upgrade (to Ruby, Postgres, TLS 1.2 for Braintree, etc.).
   
e. Wilson: Create instructions (this page) to enable volunteers to create a dev environment and contribute changes. 
   
f. Wilson/Dan: Convert bash scripts and instructions to create a dev instance of Ruby server running on Ubuntu.
   
g. Kermit: To <strong>troubleshoot without worry</strong>, define manual procedures and scripts to create a <strong>stand-alone Saleforce Dev. instance</strong> (a "crash dummy") containing metadata and filtered/cleansed data from production org sandbox:

   ### &nbsp; &nbsp; &nbsp; Administrator:

   1. Configure templates and <a target="_blank" href="https://help.salesforce.com/articleView?id=data_sandbox_create.htm&type=5">generate a Dev. sandbox</a> from prod instance.
   2. Create test scripts on sandbox so running it doesn't corrupt or degrade the production instance.
   3. Export metadata (coding) from Sandbox.
   4. Create data extract from Sandbox.
   5. <strong>Cleanse data</strong> 
   6. generate additional test/mock data using <a target="_blank" href="http://mockaroo.com">mockaroo.com</a> (generates up to 1,000 rows free).
   7. Copy cleansed data into a location available to developers.
   <br /><br />

   ### &nbsp; &nbsp; &nbsp; Developer (volunteer):

   1. Import metadata (coding) into Dev. instance.
   8. <a target="_blank" href="http://pages.mail.salesforce.com/gettingstarted/sales-cloud/import-export-data/">Import</a> cleansed data into Dev using DataLoader.
   9. Modify test scripts to run on imported Dev. instance.
   <br /><br />
   
h. Enable and test disaster recovery.

i. <a target="_blank" href="https://www.catchafire.org/volunteer/26956/ywam-converge-in-ocean-city--nj--tech-systems/">PROJECT:</a> To best communicate with student/interns, we need someone to research, propose, and then develop the best option for texting internationally to students, hosts, mentors, donors. Wilson said he and Kermit saw a company offering a good texting solution at Dreamforce. Texts can replace emails if they include links to static web pages or links with reminders to log in to dashboard to complete an activity.  

j. Make <strong>introduction videos</strong> to each of the <a href="#persona">persona</a> for display on the website and to make emails more "alive".

k. Create training for mentors ?

l. <strong>Translations</strong> of the site into various languages. We have a team currently translating the site into Spanish. A LOT of their work is already done. At some point, I want to get a Volunteer Project posted to insert the “es:” text into the code. (BTW, all the training videos are also being translated to Spanish to be inserted into the videos too. That will be another project. The team in Colombia is translating those SRT files now.)
   
m. Architect a more secure way to maintain passwords and other secrets for team (HashiCorp Vault, etc.)
   
n. Propose one of your own.


<a name="Collaboration"></a>

## D) Setup Collaboration

If you haven't used the tools mentioned here, we will train you so that you can contribute confidently.

1. Make an appointment with John at<br /><a target="_blank" href="https://www.ywamocnj.org/make-an-appointment/">https://www.ywamocnj.org/make-an-appointment</a> or https://ywamocnj.doodle.com/jthenry

   John makes use of Zoom for group video conferencing than can be recorded.

2. From John, get an email invite to the Slack channel used by developers (join the channels):

   <a target="_blank" href="http://ywamconverge.slack.com/">http://ywamconverge.slack.com</a>

   Click the "Channels" heading on the left pane.
   Click on a channel name. Click on "Join Channel".

3. Use your email to get a free GitHub account and let us know what your GitHub account name is. Then you can fork our GitHub to your own account. Create a branch under your account to make changes, then create a Pull/Merge Request. 

4. We share sensitive info like passwords only on WhatsApp chat.

5. Saleforce Chatter real-time text message we use to make announcements that get sent out as emails.

6. WhatsApp group.


<a name="Website"></a>

## E) Copy the public-facing website

1. Open an internet browser to visit the production webpage for the non-profit at:

   <a target="_blank" href="https://www.ywamocnj.org/">https://www.ywamocnj.org/</a><br />
   Youth With A Mission - Ocean City New Jersey

   The tech behind the website consists of several components (all free open-source):

   * Ubuntu 18 operating system (contains ssh and yum package manager)
   * Utility Git (needed by Capistrano)
   * PostgreSQL database
   * Ruby (programming language interpreter)
   * Rails engine <a target="_blank" href="https://www.refinerycms.com/">Refinery CMS</a> which support for Amazon S3 cloud storage and makes use of
   * ElasticSearch to do indexing and
   * Dragonfly for image editing

   * Redis database to manage queues to Salesforce
   * Sidekiq to proxy and manage Redis
   * NGINX ?
   * TODO: Utility to backup database
   * TODO: Utility to cleanse data
   <br /><br />

2. Code and documentation about the website is at this GitHub repository:

   <a target="_blank" href="https://github.com/ipoconnection/ipo-web">https://github.com/ipoconnection/ipo-web</a>

   BTW The name "IPO" is a carry-over of previous branding, and kinda stuck. We should rename it someday.

   Optionally, if you want to examine the repo off-line, on your machine, create a folder and clone the repo onto your local laptop.

3. Click the "Branch: master" and select the branch Dan is current using: <tt>upgrade-rails-4.0</tt>

   That branch name will be different in the future.

   <tt>README.md</tt> describes each component and installation process in more detail.

   <tt>README.rdoc</tt> contains instructions for running on an Appl MacOS laptop. 
   But since the system runs under Ubuntu in production, we are converting scripts and instructions to that OS, and assume that you are using a Docker or cloud image (running on Amazon Lightsail</a>, etc.).

4. Create a VPC instance within <a target="_blank" href="https://wilsonmar.github.io/lightsail">Amazon Lightsail</a> or other bare-bones VPS (Virtual Private Server). 

   PROTP: Begin with the 512 MB RAM to practice loading, then move up as necessary.

   TODO: In the future we will define files to use Docker with Kubernetes.  

5. Open an SSH session to your machine and login using the <strong>default user</strong> ("ubuntu").
6. Create another user, <strong>deployer</strong>.

	<pre>sudo adduser deployer --ingroup admin
	</pre>

1. Type in password when prompted with "Enter new UNIX password:".

   <pre>
passwd: password updated successfully
Changing the user information for deployer
Enter the new value, or press ENTER for the default
Full Name []: 
Room Number []: 
Work Phone []: 
Home Phone []: 
Other []: 
Is the information correct? [Y/n] 
   </pre>

7. Reboot and login as deployer to run the Bash script which installs software, configure it, and populate the database, and runs a smoke test to verify viability.

8. Copy the command to invoke the install script to your Clipboard (by triple-clicking this line before pressing command+C) this string:

   <pre><strong>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/Ruby/ywam-setup-all.sh)"</strong></pre>

1. Get on your VPC command line interface and press command+V to paste the command.

   On Amazon Lightsail, you would need to first click on the orange clipboard icon, then paste in its form, then click on the CLI (black screen), then right-click to paste (on a Mac, press two fingers at once on the touchpad). Press Enter to run the command.

   BTW The script is supposed to be idempotent because it erases resident folders from the previous run.


<a name="Salesforce"></a>

## F) Create a copy of the Salesforce database

Salesforce provides weekly production backup zip. 
It's triggered by a scheduled job from a service account which receives emails when done.
Currently, each backup consists of 330 csv files take 8.3 MB zipped. Unzipped its 107 MB.
The output zip file is copied to an alternative cloud provider (Google Drive) because Salesforce only stores backup files 48 hours, with file name (from a default name such as "WE_00DG0000000ggbAMAQ_1.ZIP") to this example: 

   <tt>ywam-prod-<strong>data</strong>-2019-06-03-3amET.zip</tt>

Metadata (custom fields, reports, list views, workflows, etc.) is extracted to a name such as:

   <tt>ywam-prod-<strong>meta</strong>-2019-06-03-3amET.zip</tt>

TODO: Use UTC.

Due to active changes, <strong>daily</strong> backups are maintained for 13 months (370 zip files).
The assumption is that there is a lot of financial info in the backups.

TODO: Add to the name the number of days since Jan 1 of the year.

3rd party offerings:
* https://skyvia.com/data-integration/salesforce-data-loader
* https://spanning.com/resources/whitepapers/3-ways-to-restore-salesforce-data/
* https://www.cloudally.com/how-to-recover-salesforce-data/
* https://pages.ownbackup.com/salesforce-weekly-export
* https://www.backupify.com/salesforce-backup


### Production security

The production Salesforce instance is <a target="_blank" href="https://studentmobilizationcentre.my.salesforce.com">https://studentmobilizationcentre.my.salesforce.com</a>, but to avoid additional charges we are trying to keep the number of people accessing it. Named users in SF are first initial and last name with no space.

   1. John Henry, as the CEO, owns the all-powerful System Administrator permissions for the production org.
   2. Mary Henry has the Standard "Executive Director" role.
   3. support@ywamconverge.org is only emails.
   4. API IDM is the user for API calls (does not use the UI).
   5. Daniel Bryan is the root System Administrator.

   6. James Strong "System Administrator" ?
   7. jessica.kalisa@gmail.com "Program Volunteer".

   8. kermit Vestal kermitv@ywamocnj.org
   9. wilsonmar@uofn.edu
   10. ?
   <br /><br />

There is a secret repository holding passwords to the production site.

PROPOSAL: Volunteers use generic accounts rather than named ones. For example:

   * admin@ywamconverge.org has the SF Standard "Executive Assistant" role.

   * "tester.312" has permissions to conduct tests and view security settings.

   * "user.415" has permissions to view reports and add opportunities.

   * TODO: Map out users, their roles, and permissions.

### Dataflow diagram

<a href="https://user-images.githubusercontent.com/300046/54088161-85dfb580-4331-11e9-9d10-095f90c4688c.jpg"><img alt="salesforce-contribute-v05-677x301-30618.jpg" src="https://user-images.githubusercontent.com/300046/54088161-85dfb580-4331-11e9-9d10-095f90c4688c.jpg"></a>

The diagram here illustrates, on one page, how the various pieces talk to each other.

Your first exposure to Salesforce is likely the <a target="_blank" href="https://trailhead.salesforce.com/">Salesforce Trailhead website https://trailhead.salesforce.com</a> which provides anyone a free Trailhead account with up to 5 "hands-on org" in a "playground" to use while taking learning modules. The <a target="_blank" href="https://trailhead.salesforce.com/sample-gallery">sample gallery</a> developed by Salesforce Developer Evangelists can be loaded as Dev orgs through the <strong>App Exchange</strong>. Sample packages are "unmanaged" and can be altered when installed. There are also <strong>managed</strong> packages (such as the Non-Profit Success Pack) from Salesforce partners.

Each org (database) contains two types of information: master data values such as customer names and <strong>metadata</strong> (Apex coding, form layouts, and other configurations).

Those who have bought one of the various levels of licenses for production usage have a single PROD org instance. Administrators go into Setup's Sandbox function to create copies of metadata in various types of Sandboxes (abbreviated SBX). Different levels of licenses come with different numbers of each type of sandbox. Dev (Development) Sandboxes are created so developers can add a few records specific to test what they are changing. Other types of Sandboxes contain data copied in. <strong>Dev Pro</strong> Sandboxes have up to 200 MB of test data. <strong>Partial</strong> Sandboxes hold a sampling of data for integration testing.
<strong>Full</strong> Sandboxes contain a complete copy of production records and metadata. 

Since it can take awhile to copy, an email is sent when it's done. To get data records into Sandboxes, we export based on filters in <strong>templates</strong> define within the Salesforce website. The export process also sends an email.

The <strong>DataLoader</strong> utility is used to put data in Sandboxes. Because we are dealing with private production data, <strong>cleansing</strong> for duplicates and/or <strong>masking</strong> for privacy after export needs to done. Doing that directly in production provides for validation before committing. 

Trraditionally, developers create <strong>Change Sets</strong> to patch metadata, and run Salesforce Apex tests and <strong>UI tests using Selenium or TOSCA/Flood.io</a> before pushing changes through various environments.

In 2018, Salesforce made available DX (Developer Experience) that manages temporary <strong>Scratch</strong> orgs updated by metadata stored in a Git version control repository. Temporary means <strong>7-30</strong> days before they disappear automatically.

To provide <strong>testing scripts</strong> the <strong>test data</strong> they need, <strong>custom scripts</strong> are written to load the test data into Scratch orgs and Playground org. 
QUESTION: Can the DataLoader put custom external test data into the Dev Sandbox?<br />
QUESTION: Can the DataLoader put data into Playground orgs?<br />
QUESTION: Can a custom package be created from a Sandbox?


### Procedures

Each developer makes use of their own Salesforce org to work. This can be a Developer Sandbox provided from the Administrator or a copy of the production Salesforce org. in a Salesforce Trailhead Playground org.

1. At <a target="_blank" href="https://trailhead.salesforce.com/">Salesforce Trailhead website https://trailhead.salesforce.com</a>, sign up for a free Developer org. and sign into it. You may need to first open an <strong>incognito window</strong> to avoid cookies from other Salesforce sessions.
2. <a href="#LoadSF">Load the metadata into your own org.</a>
3. Ask for .csv files containing masked data that has also been cleansed and reduced in size. 
4. Import the test data into your org.
5. <a href="#SFwebsite">Configure the API connection between the website and Salesforce API.</a>


<a name="LoadSF"></a>

### Load metadata into your own org.

@Kermit?

https://developer.salesforce.com/docs/atlas.en-us.216.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_test_data_example.htm



<a name="SFwebsite"></a>

### Configure the API connection between the website and Salesforce

@Dan?


<a name="Changes"></a>

## G) Plan changes, update test scripts

1. Draft a description of what the system will look like when you're done. This can be a picture of an altered form or report.

2. Define commit messages for the sequence of changes. This can provide a roadmap for estimating effort and timelines.

3. Define the tests for each feature added or changed.

4. We believe in the advantages of a "test first" approach. Create test scripts to validate new fields that have not yet been created. If the change is removal of a field, write a "negative" test to verify the absence of the field among a list. Then code changes that cause the test to pass.


<a name="TestDeploy"></a>

## H) Run tests, make changes, and deploy

1. Run a test of the existing test suite to ensure that everything works.

2. Define what changes you would like to make, in small increments of commit

   * If it's a form, take a picture of the form, paste it in PowerPoint or Google GSuite and add the field.
   * Plan out the commits that you'll be making to get to done.
   * Review with others regularly. Here is an opportunity for all sides to learn something new, and be better friends.
   <br /><br />

3. Create a branch, named beginning with your assigned user name followed by a dash and number.

4. Make changes to the test suite, and make commits.

5. Create a Pull (Merge) Request:

   Please send a [GitHub Pull Request to opengovernment](https://github.com/opengovernment/opengovernment/pull/new/master) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, we will love you forever if you include test code. We can always use more test coverage. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

   Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should contain a paragraph describing what changed and its impact:

   <pre>git commit -m "A brief summary of the commit"</pre>

5. Change the test suite and make sure it runs to success.

   Please consider the people who will read your code, and make code reable for them.
   We optimize for readability:

   * Indent Bash shell files using three spaces (soft tabs).
   * Use HAML for all views.
   * Avoid logic in views, putting HTML generators into helpers.
   * Put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows.
   <br /><br />

6. Visually review with others while it's in your unit test environment.

7. Check the new branch into GitHub (or whatever version control repository your team uses).

8. Others make comments on the code.

9. One of the leads moves the branch into a test org and run more tests.

   https://github.com/ipoconnection/ipo-web/blob/master/TESTS_README.md

10. One of the leads deploys the change into production, then run <strong>post-deploy</strong> tests.



## Other CONTRIBUTE.md files on the internet

* https://www.firsttimersonly.com/
* https://kbroman.org/github_tutorial/pages/fork.html
* https://github.com/firstcontributions/first-contributions
* https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project
* https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/
* https://gist.github.com/MarcDiethelm/7303312



<hr />

## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
