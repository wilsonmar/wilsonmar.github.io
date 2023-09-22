---
layout: post
title: "Salesforce Alexa for Business skills for custom voice UI"
excerpt: "Voice commands via shared Echo devices in common rooms"
tags: [salesforce]
date: "2018-09-24"
file: "salesforce-alexa"
image:
# feature: sf-ohana-1900x500-178173.jpg
  feature: https://user-images.githubusercontent.com/300046/43407734-bd6303fe-93dc-11e8-87df-302ddbc274ff.jpg
  credit: Salesforce
  creditlink: https://trailhead.salesforce.com/trailblazers
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article focuses specifically on use of Alexa by <strong>Salesforce</strong> users.
When <a target="_blank" href="https://www.amazon.com/dp/B0753K4CWG">Alexa Auto</a> hardware becomes widely available with skills, Salespeople would be able to verbally retrieve and enter information in Salesforce.

The Alexa toolkit for Salesforce is a part of a <a target="_blank" href="https://www.salesforce.com/campaign/aws/">whole alliance with AWS</a> Cloud and other tech from Amazon.

https://trailhead.salesforce.com/en/modules/alexa-development-basics/units/get-started-with-alexa


## Shared Devices in shared locations

Those in open-plan offices would find it annoying to hear other workers talk with their own Alexa. 

So Amazon is offering a way for several people in the same room to share use of an Echo device in the same room.

An Amazon Echo device in a <strong>conference room</strong> enables users to control lights (via a Phillips Hue bulb) and room temperature (via a Nest thermostat) just like they can at home:
* Echo (the tall tube containing speakers) can be used as a speakerphone
* Echo Show (with the monitor) is for individual use on desks within private offices
* Echo Dot is for controlling speakerphone devices such as Polycom

You can use your voice to control a speakerphone and say 
* "Alexa, start the meeting" to the Alexa skill communicating through a <a target="_blank" href="https://aws.amazon.com/alexaforbusiness/solutions/">voice/video conferencing provider</a>. 

<a target="_blank" href="https://console.aws.amazon.com/a4b/home?region=us-east-1#/conference/add-provider"><img align="right" href="a4b-providers-224x305.jpg" width="224" src="https://user-images.githubusercontent.com/300046/46209070-f3e77180-c2e9-11e8-9160-50f3f298758e.jpg"></a>
Their marketing pages:
* <a target="_blank" href="https://chime.aws/">chime.aws/</a> which resolves to <a target="_blank" href="https://aws.amazon.com/chime/">aws.amazon.com/chime</a>
* <a target="_blank" href="https://www.crestron.com/">Crestron.com/</a> 
* <a target="_blank" href="http://response.polycom.com/04-DR-PS-2017-Q4-Amazon-Alexa-LP">Polycom.com/</a> 
* <a target="_blank" href="http://www.ringcentral.com/">RingCentral.com/</a> 
* <a target="_blank" href="https://teem.com/alexa/">Teem.com/</a> 
* <a target="_blank" href="https://twineholdings.com/">TwineHoldings.com/</a> 
* <a target="_blank" href="https://www.vonage.com/">Vongage.com</a> 
* <a target="_blank" href="https://zoom.us/">Zoom.us</a> 
* <a target="_blank" href="https://www.fuze.com/">fuze.com</a> provides analytics and real-time intelligence, with an expanded version of caller ID that pulls information from a caller's online profiles to provide more information on the caller. It integrates with existing enterprise software services, such as Salesforce and Gmail.
* Google Hangouts
<br /><br />

PROTIP: Should Echos be mounted in the <strong>ceiling</strong> (so they don't "walk away")? Consider 
<a target="_blank" href="https://arstechnica.com/gadgets/2018/06/alexa-for-hotels-lets-guests-order-room-service-control-in-room-smart-devices/">this</a>:
<a target="_blank" href="https://www.amazon.com/alexaforhospitality">"Alexa for Hospitality"</a> to control Alexa in hotel rooms, vacation rentals, and similar locations. Initial installers (at Marriott Hotels, Westin Hotels & Resorts, St. Regis Hotels & Resorts, Aloft Hotels, and Autograph Collection Hotels) are anticipating that some guests would prefer them removed from their room.
The offering also has privacy measures such as deletion of Alexa command recordings daily or as commanded.

<a name="a4b"></a>

## Alexa for Business Console UI

Vague conceptual benefits are described in text at <br />
<a target="_blank" href="https://aws.amazon.com/a4b">https://aws.amazon.com/a4b</a> acronymn resolves to<br />
<a target="_blank" href="https://aws.amazon.com/alexaforbusiness/">https://aws.amazon.com/alexaforbusiness</a>

   <img align="right" alt="a4b-console-menu-199x511-11688.jpg" width="199" src="https://user-images.githubusercontent.com/300046/46208438-f9dc5300-c2e7-11e8-8c2d-5381ba0f0be5.jpg">

"Alexa for Business" accounts are used to manage <strong>users</strong> and what Alexa <a href="#Skills">skills</a> they can use in specific <strong>rooms</strong>.
The Alexa for Business  Console UI is shown at right.

A4B accounts are charged $7 per month for each <strong>shared device</strong> (in addition to the cost of Alexa devices) plus $3 per month per user enrolled in an Alexa for Business account. (versus free for home use)

Additionally, to host calls (of up to 100 participants at a time) Amazon Chime Pro users are charged $3 per day up to $15 per month. (vs. free on Google Hangouts)

Having <strong>room profiles</strong> enables skills to fill in context in commands such as:

* "Alexa, set the temperature to 22 degrees" (Centigrade set as the default)
* "Alexa, when is the next shuttle to building C"
* "Alexa, tell the office the projector in this room is broken"
* "Alexa, ask Team to book this room"
<br /><br />

A4B enables the use of <a href="#PrivateSkills">private skills</a> available only to the A4B account rather than publically.

<a href="#SkillGroups">Skill groups</a> assembles a set of skills to make it easier to assign a whole set of skills.

<amp-youtube data-videoid="u9NMQllvT3M" layout="responsive" width="480" height="270"></amp-youtube>
In the video above, Olivier Klein, Emerging Technologies Solutions Architect within Amazon Web Services APAC, describes
<a target="_blank" href="https://www.youtube.com/watch?time_continue=3&v=u9NMQllvT3M">
Empower Your Organization with Alexa for Business Apr 12, 2018</a> [45:51]
as part of the <a target="_blank" href="https://pages.awscloud.com/aws-innovate-ml.html?sc_channel=EL&sc_campaign=Explainer_2018_vid&sc_medium=YouTube&sc_content=video2331&sc_detail=MACHINELEARNING&sc_country=US">AWS INNOVATE SPECIAL EDITION - MACHINE LEARNING videos</a>.

BTW, it would be annoying to address any person named Alexa in the room ;) 
But the wake word can be changed from "Alexa" to "computer", as in Star Trek since the 60's.

### Skills

[6:16] A4B skills can include:
* "Alexa, start the meeting"
* "Alexa, ask the office for the guest wi-fi password" (not associated with a specific guest sponsor)
* "Alexa, what is for lunch in the cafeteria"
<br /><br />

Alexa for Business can also control lights and projectors, take notes, arrange the next meeting, etc. 


<a name="Enrolled"></a>

## Create A4B Account

1. PROTIP: To differentiate browser defaults, use a different browser (such as Safari) to work with your Alexa for business account than your personal account (using Google Chrome). That or open different Incognito windows.

2. Log into AWS using using your business master account email for billing. Create one if you don't have one.

3. Select the <strong>US East (N. Virginia)</strong> region.

   PROTIP: As of this writing (Sep. 2018), A4b is only supported in the <strong>US East (N. Virginia)</strong>.

3. "Get Started" by creating an Alexa for Business account 

   https://console.aws.amazon.com/a4b/home?region=us-east-1#/welcome

   PROTIP: This generates the ARN (Amazon Resource Number) for one or more AWS Alexa for Business accounts to which you want to grant access to the private skill.

4. Fill out the deomgraphic information about you (as an individual). NOTE: I don't know the point of this.

   ### Room and its Calendar

   The context of <strong>"rooms"</strong> and group profiles can be added to Alexa skills.

5. https://console.aws.amazon.com/a4b/home?region=us-east-1#/home

   https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html

6. Define the room

   ### Add to skill groups

   "Master level" skills are used by all rooms.

  Keep track of the <strong>skill Id</strong> for a skill that is under development.

   ### Room Calendars

1. Create a calendar for each room.

1. <a target="_blank" href="https://www.amazon.com/gp/help/customer/display.html?nodeId=202126980">Connect your personal calendar to the Alexa app</a>.


2. Define a <a target="_blank" href="https://console.aws.amazon.com/a4b/home?region=us-east-1#/calendar">calendar to each room</a>


## Skills

<amp-youtube data-videoid="JJFDQ7rXxvc" layout="responsive" width="480" height="270"></amp-youtube>
Eric ChenMou (Dec 1, 2017) explains how to <a target="_blank" href="https://www.youtube.com/watch?v=JJFDQ7rXxvc&t=2m20s">Look up information in Wikipedia using a public Skill</a> and Acronyms using private quiz skills about
<a target="_blank" href="https://quizlet.com/143906977/aws-acronyms-flash-cards/">AWS Acronyms</a> or industry terms.

Internally, Alexa for Business (a4b) adds <a target="_blank" href="https://docs.aws.amazon.com/a4b/latest/APIReference/API_Operations.html">Actions</a> and <a target="_blank" href="https://docs.aws.amazon.com/a4b/latest/APIReference/API_Types.html">Data types</a>.


### Tact.ai skill

https://www.amazon.com/Tactile-Inc-Tact/dp/B077GG5Q96

<a target="_blank" href="https://tact.ai/">Tact.ai</a> brings together customer data scattered across email, calendar, CRM, LinkedIn, Zendesk and other legacy systems. Whether in your office, home, open floor or shared workspace, Tact for Alexa provides contextual insights and the type of frictionless experience that drives greater sales productivity, higher win rates, and faster sales cycles. The skill changes how salespeople work at Fortune 500 customers like GE, Cisco Systems, Kelly Services and others by delivering an omnichannel AI-powered digital assistant for sales teams. The Skill unlocks the Tact Sales Assistant on any Alexa-powered device.

Tact.ai is a sales experience platform that transforms a salesperson's connected device into an AI-powered smart assistant that automates administrative tasks and creates a friction-less selling experience.

To use the Tact skill, you need Tact enterprise license. Contact us at 1-844-HEY-TACT or drop an email to sales@tact.ai to get started.

Note: This skill utilizes your voice profile to enable personalized experiences.


<a name="SkillGroups"></a>

## Skill groups

Skills are associated with each room as a "<strong>skills group</strong>".

Make a private skill available to shared devices by adding the private skill to a skill group,
   then add the skill group to your rooms.
   Alexa for Business automatically enables skills for Alexa devices assigned to rooms.

https://developer.amazon.com/docs/alexa-for-business/create-and-publish-private-skills-devconsole.html
When you are ready to make your skill available to select organizations, do the following:

1. Open the skill in the developer console.
2. Navigate to the Distribution page.
3. Make sure you have completed all fields in the Skill Preview section for each language.
4. In the left-hand navigation, click Availability.
5. For the availability option, select Alexa for Business Organizations, then click Save and continue.
6. Navigate to the Certification page. Review and correct any validation errors. All validations must pass before you can submit the skill.
7. Click Submission, then click Submit for review.
8. When you publish a skill privately, its status changes to Live in the developer portal. This process can take up to two hours.


## Private Skills

Some ideas for <strong>private</strong> skills Alexa can look up based on your voice command: 

   * Acronyms
   * daily/monthly briefing of sales data and other statistics
   * cafeteria menus
   * company holidays
   <br /><br />

Such skills would not in the public Alexa Skills Store. To make private skills available for your users to discover and enable using their Alexa app, see http://docs.aws.amazon.com/a4b/latest/ag/private-skills.html

Private skills are not subject to certification by Amazon.

On the Alexa for Business Console, navigate to the Skills section.
Find the skill in the Private Skills tab and check the box under the column "Available for users" to enable the skill for all users in the organization.

<a target="_blank" href="https://console.aws.amazon.com/a4b/home?region=us-east-1#/user-enrollment">Invite users</a>


## Local install on a Mac

### Full XCode IDE install

The ASK CLI requires elements installed when the full <a target="_blank" href="https://developer.apple.com/xcode/">Apple XCode IDE</a> is installed.

1. PROTIP: If you previously installed and enabled command line developer tools separately using these commands:

   <pre>xcode-select --install
   sudo xcode-select --switch /Library/Developer/CommandLineTools  # Enable command line tools
   </pre>

   Before installing XCode IDE, remove the folders Library, SDKs, usr:

   <pre>rm -rf /Library/Developer/CommandLineTools 
   </pre>

2. After a full backup, install XCode from within the App Store on your Mac. PROTIP: It is a large download.

   
   ### ASK CLI install

3. Install <a target="_blank" href="https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html">ASK CLI</a> (Alexa Skills Kit Command Line Interface) globally:

   <pre><strong>npm install -g ask-cli
   </strong></pre>

   Example response:

   <pre>/Users/wilsonmar/.nvm/versions/node/v9.11.1/bin/ask -> /Users/wilsonmar/.nvm/versions/node/v9.11.1/lib/node_modules/ask-cli/bin/ask.js
+ ask-cli@1.4.4
updated 1 package in 4.63s
   </pre>

4. Verify version:

   <pre><strong>
   ask --version</strong></pre>

   Example response:

   <pre>1.4.4
   </pre>


   ### Amazon IAM User

5. PROTIP: Use Amazon IAM to define a developer account. For example "py-ec1-1".

6. PROTIP: What permissions???

   ### ask init

5. Create a folder (directory) named "projects" and cd into it.

   <pre>cd ~
   mkdir projects ; cd projects
   mkdir salesforce-ask ; cd salesforce-ask
   </pre>

5. Initialize ASK CLI to your Amazon credentials:

   <pre><strong>ask init</strong></pre>

   An example response:

   <pre>
? Please create a new profile or overwrite the existing profile.
 (Use arrow keys)
  ──────────────
❯ Create new profile 
  ──────────────
  Profile              Associated AWS Profile
  [py-ec2-1]                "__AWS_CREDENTIALS_IN_ENVIRONMENT_VARIABLE__" 
   </pre>

7. Select one ("py-ec2-1" I created) and:

   <pre>
-------------------- Initialize CLI --------------------
Setting up ask profile: [py-ec2-1]
? Please choose one from the following AWS profiles for skill's Lambda function deployment.
&nbsp; 
  default 
❯ py-ec2-1 
  ──────────────
  Skip AWS credential for ask-cli. 
  Use the AWS environment variables. 
  ──────────────
   </pre>

8. Type in the Password when the Amazon Sign in web page opens. The response:

   <pre>
Sign in was successful. Close this browser and return to the command line interface.
   </pre>

9. Close the browser window that opened and return to the Terminal, which now has:

   <pre>
Switch to 'Login with Amazon' page...
Tokens fetched and recorded in ask-cli config.
Vendor ID set as M2GA6MK6WH40C?
&nbsp;
Profile [py-ec2-1] initialized successfully.
   </pre>


   ### ask new

6. Create a new skill <strong>project</strong> from the built-in "Hello World" sample or from one of the supported open source templates by using the --template option. The newly created skill project folder will contain all necessary files to deploy it with minimal changes. For more information, see new command.

   <pre><strong>ask new</strong></pre>

   See https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html#new-command


   ### ask simulate

   The ask deploy command automatically enables your deployed skill, so you can immediately start testing it on your device or using the ask simulate command. 
   
   Use the Alexa Simulator on the Test page of the developer console.

   ### ask deploy

   After a skill is deployed, the local and remote versions may diverge as you continue to develop the skill. 
   
   To compare between the local and remote versions of a project, use diff. 
   See https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html#diff-command
   
   To push the local changes to the remote version, use deploy. 
   See https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html#deploy-command


## Device Setup Tools on Windows

   PROTIP: The Device Setup Tool requires a <strong>Windows laptop</strong>. It doesn't work on any virtual desktop running in the cloud or on Apple hardware.

A room profile is associated with a room and contains all of the settings for your devices. This enables Alexa to provide weather, time, and other location-based information. ​You can create a room profile that applies the same settings to all rooms in the same building. You can modify the settings in a room profile, including the default room profile, at any time.

Alexa will only respond to enrolled users if their voice matches their voice profile.


## Provision Security setup

https://docs.aws.amazon.com/a4b/latest/APIReference/CommonParameters.html

Alexa for Business provides a device setup tool that allows you to connect multiple Echo devices to your corporate WPA2 Enterprise or WPA2 Personal Wi-Fi network, and add them to your Alexa for Business account at the same time. The device setup tool scans for devices that are in setup mode, and once discovered, automatically registers them to your account. With the device setup tool, you don’t need to manually set up each device individually.


If you plan to use WPA2 Enterprise for the network security type in the Beta version of the Device Setup Tool, you must first create a Private Certificate Authority (PCA) in AWS Certificate Manager (ACM). To do this, follow these steps:

Create a Private Certificate Authority

Get a Certificate Signing Request (CSR)

Sign Your Private CA Certificate

Import Your Private CA Certificate into ACM PCA

 Lambdas instead of typing out forms in Salesforce.


## master account

Some skills require account linking. If you enable a skill and link your account, this becomes the master account and is shared by default for all devices with that skill enabled. You can override this master account and link a different account inside an individual room.



Alexa Skills Kit Command Line Interface (ASK CLI) 


Alexa skill templates for use in enterprise scenarios and in particular for use with . Some samples are more complete, such as the Help Desk skill, but others will be smaller in scope, focusing on specific use cases or integrations.

Alexa for Business provides a management framework, native functionality for business environments such as a "join the meeting" intent, and a new Alexa skill deployment construct called "private skills" where developers publish skills whitelisted for use only by a specific set of organizations. You can learn more about private skills in these resources:

* https://docs.aws.amazon.com/a4b/latest/ag/what-is.html
Alexa for Business Administration Guide aka "Getting Started Guide".

* https://aws.amazon.com/alexaforbusiness/getting-started/
Getting Started with Alexa for Business

* http://docs.aws.amazon.com/a4b/latest/APIReference/Welcome.html Alexa for Business API Guide

* https://forums.aws.amazon.com/forum.jspa?forumID=273
Alexa for Business Forums

* https://aws.amazon.com/alexaforbusiness/faqs/
Alexa for Business FAQs


## The GitHub repo

At time of this writing, in the https://github.com/alexa/alexa-for-business repo are four folders:

* alexa-heroku-help-desk-sample
* alexa-heroku-sales-assistant-sample
* alexa-salesforce-notes-sample
* skill-sample-nodejs-salesforce
<br /><br />


## ASK CLI Setup

https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html

1. Install NodeJs

   <pre>brew install node
   node --version  # v9.11.1
   </pre>

2. Install Git to use templates <a target="_blank" href="https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html#new-command">*</a>

 `ask clone' command

The skill manifest named skill.json at the root level of your skill directory contains metadata and properties required for a skill.

<pre>ask api get-skill -s {skill_id} > skill.json
</pre>


https://developer.amazon.com/alexa-skills-kit

  
   ### Download skill manifest

1. Download the skill manifest of an existing, development stage skill with the get-skill API:

   <pre>ask api get-skill -s {skill_id} > skill.json
   </pre>

2. Open this file in your preferred text editor or IDE.

3. If you intend to publish your skill as a private skill, add the "distributionMode": "PRIVATE" line in the publishingInformation block of your skill manifest. It should look something like this:

   <pre>
   "isAvailableWorldwide": true,
   "testingInstructions": "This is a private skill.",
   "category": "EDUCATION_AND_REFERENCE",
   "distributionMode": "PRIVATE",
   "distributionCountries": []
   },
   "apis": {
   </pre>

4. To upload the updated skill manifest for cloned or new scaffolded projects, use the `ask deploy` command. Although if you use the get-skill API from above, you should instead use the update-skill API by entering the command below:

   <pre>ask api update-skill -s {skill_id} -f skill.json
   </pre>

4. Last, submit the skill. The submission process is similar to certification for public skills. Just issue the following command:

   <pre>ask api submit –s {skill_id}</pre>

5. This submission process may take a few hours to complete, and once completed the skill will be available in the live stage.

6. The final step is to distribute the skill to an Alexa for Business organization. To do this, you’ll need the ARN of the AWS account for the organization which you want to deploy the skill. Then enter the following command:

   <pre>ask api add-private-distribution-account -s {skill_id} --stage live --account-id <em>id</em>
   </pre>

   For example: `arn:aws:iam::123456789012:root`, where `123456789012` is a placeholder for your AWS account Id. 
   You must specify the root and not an individual user for that account.

   The private skill should now deployed and available to the Alexa for Business organization. 
   
To manage it:

1. Open the <a target="_blank" href="https://console.aws.amazon.com/a4b/">Alexa for Business console</a>.
2. Choose Skills, Private skills.
3. In the list, select the skill published to your account and choose Review.
4. To enable the skill for your Alexa for Business organization, choose Enable.
5. To enable the skill for specific shared devices within your Alexa for Business account, choose Enabled skills, select the check box next to the skill that you added, and choose Add to skill group. Then assign that skill group to a room with a device associated to it.
6. To make the skill available for Enrolled Users to discover and enable, choose Private skills and select the Available to users checkbox.
<br /><br />


## More about Salesforce #

This is one of a series about Salesforce

{% include salesforce_links.html %}
