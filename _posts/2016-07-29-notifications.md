---
layout: page
title: Notifications
excerpt: "How the computer gets you to do what you should be doing now"
tags: [social media, DevOps]
date: "2016-07-29"
file: "notifications"
image:
# pic blue networkers social 1900x500-c21.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/16904951/0e5ebb1a-4c5c-11e6-8741-778edab0dd85.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The objective of this page is to describe how to setup a way for
you to receive and manage the deluge of notifications coming in
from various sources.

{% include _intro.html %}

## Event Notifications #

Most people can only handle so much distraction before they feel overwhelmed
and thus become less effective.

Several researchers have concluded that 
<a target="_blank" href="http://www.inc.com/jessica-stillman/multitasking-is-making-you-stupid.html">
"Multi-tasking is making you stupid"</a>.
People who think they can multi-task are 
actually less effective than they think.

   Being sent notifications too frequently 
   <strong>inures</strong> one to paying attention,
   which reduces the value of notifications.

   To avoid "notification fatique", one needs to
   be judicious about how each condition is communicated,
   what communication channel to use,
   to whom, etc.

## The strategy #

   1. Rank the <strong>importance of the subject</strong>
   of alerts. Some responses may not be appropriate for all.
   For example, automated email filters send some emails into a spam folder
   that one may never read. 
   The condition of <strong>core modules or components</strong>
   on which others depend,
   revenue-generating processes, and 
   high-value customers and vendors
   are often treated with higher regard than others.

   2. Identify the <strong>workflow</strong> (or pipeline) of tasks
   so that the next step is more obvious.

   3. Identify what <strong>condition</strong>, event, or status relevant
   to each task. An example is the <a href="#Conditions">table of conditions</a>
   below.

   4. Identify the <strong>primary person or department</strong> who
   should respond to each combination
   of the above (importance or condition). Call centers have a
   front-line team that receives calls and emails from the public. 
   They route calls to managers for callers asking for one.
   
   They may be completely bypassed by organizations which pay for a license
   so they have use a secret contact information to go directly to the experts.

   5. Determine what <strong>response actions</strong> should be taken
   for each combination of the above.
   Examples are in the <a href="#Conditions">table below</a>.

   6. Identify the <strong>medium of communication</strong>.
   For example, for immediate

   7. Identify the <strong>secondary and tertiary</strong> 
   responders to contact, and when they are contacted
   in case primary responders do not respond in time.

   The above are the dimensions to consider when analyzing how to 
   respond faster and better.

   The strategy would need to be adjusted
   depending on how much attention each responder can provide 
   at any given moment.
   

   <a name="Conditions"></a>

## Condition - Response table #

   Here is an example of mapping conditions to responses
   for the default level of importance:

   | Condition        | Response | by whom |
   | :--------------- | :------- | :------ |
   | Build Start      | Watch if critical | - |
   | Aborted          | Investigate | Developer |
   | Not Built        | Delegate | Developer |
   | Failure          | Diagnose | Lead Developer |
   | Success          | Celebrate | Archive |
   | Unstable         | Analyze patterns | Ops Engineer |
   | Back to Normal   | Do follow-on tasks | Next person |
   | Repeated Failure | Troubleshoot | Tech lead |
   | Test Summary     | Retrospective Review | Team, Manager |

   The <strong>mode of communication</strong> 
   would ideally be adjusted on the
   preference of each individual recipient.

   | Condition        | <a href="#Noisy">Noisy</a> | SMS  | Slack | email | archive |
   | :--------------- | :---- | :--- | :---- | :---- | :----- |
   | <a href="#BuildStart">Build Start</a>| -     | -    | -     | -     | all    |
   | <a href="#Aborted">Aborted</a> | -     | -    | -   | -     | all     |
   | Not Built        | -     | -    | all   | -     | -      | 
   | Failure          | -     | all  | -     | -     | -      |
   | Success          | -     | -    | -     | -     | all    |
   | Unstable         | 1     | 2    | 3     | 4     | -      |
   | Back to Normal   | -     | -    | -     | -     | all    |
   | Repeated Failure | -     | 1    | 2     | all   | -      |
   | Test Summary     | -     | -    | -     | -     | all    |

   An audible or visuble noise that's difficult to ignore
   apart from computers and mobile devices
   should be part of the "arsenal" of communication devices
   for critical situations (like an air-raid siren).

   The numbers in the chart above are for the importance level,
   with 1 being the highest.

<a name="Noisy"></a>

### Noisy Interrupt Scream #

   PROTIP: Sometimes, it is necessary to make a visible, auditory, or other physical human sense signal.
   This is not just to get the attention of someone with a disability.
   When people are watching a loud movie or have headphones on,
   how does someone interrupt for an important message?

   * https://developer.artik.cloud/

   How about configuring different sounds for different programs making noise
   to tell them apart?

   Maybe different animals?

   * Skype: Lions
   * Slack: Donkeys
   * Gitter.im: Monkeys 
   * Hipchat: Geese 
   * etc.
   <br /><br />


<a name="BuildStart"></a>

### Build Start #

   PROTIP: It may not be necessary to receive a
   "Build Start" event announcement since notification
   of failure will be sent out. What should one do while the 
   machine runs? 
   Thus the wisdom of paying attention only to exceptions.

<a name="Aborted"></a>

### Aborted #

   If an Abort message occurs because of a manually initiated event,
   then it would be redundant to send a message to the initatior.

   If an Abort message occurs shortly after manual initiation,
   the initiator is likely on the computer screen.
   So it can be sent to <strong>Slack</strong>.


<a name="Archive"></a>

### Archive #

   Notifications are sent to archive to make history available
   for spotting trends over time as the basis for predictions.

   PROTIP: PagerDuty is a company that claims it can
   provide a fine-grained management platform for notifications.


## Hipchat #

https://github.com/jlewallen/jenkins-hipchat-plugin

## Slack on Jenkins #

There are several other instant messaging services available:
Hipchat, Microsoft Skype, Snapchat, Facebook WhatsApp, Yahoo Messenger, etc.

Let's start with Slack, which is the darling in 2016.

0. Get a Slack account at <a target="_blank" href="https://slack.com/">
   https://slack.com</a>

   Once signed in:

0. Create a new channel for experimenation the first time you do this.

0. Go to the Jenkins integration page at<br />
   <a target="_blank" href="https://my.slack.com/services/new/jenkins-ci">
   https://my.slack.com/services/new/jenkins-ci</a>

   If you've signed in, you'll see the last channel you visited online.

0. Click the "Choose a channel" drop-down and <br />
   select "Privately to ... (you)" while you're developing.

0. Click "Add Jenkins Integration" green button for instructions to follow.

   ### Setup in Jenkins #

0. Be in Jenkins > Manage Plugins > Available.

0. Search for "Slack Notification Plugin" at<br />
   <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Slack+Plugin">
   https://wiki.jenkins-ci.org/display/JENKINS/Slack+Plugin</a>

0. Check the Install button for the plugin.

0. Search for "Global Slack Notifier" at<br />
   <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Slack+Plugin">
   https://wiki.jenkins-ci.org/display/JENKINS/Slack+Plugin</a>

0. Click "Install without restart".

   After install:

   ### Configure #

0. Click on Manage Jenkins > Configure System. 

0. Find the "Global Slack Notifier" Settings section 

0. Copy and paste these values:

   <tt>
   Team Domain: `intelligentworld`<br />
   Integration Token: `ETdv3TU4IDPGLnwZT5KZc66Z`
   </tt>

0. Repeat the above Configure steps for each project.

0. In the Slack Notifications section, 
   choose the events you'd like to be notified about,
   referencing the <a href="#Conditions">Conditions</a>
   table you customized for your needs.

0. Click "Save Settings".


---------

0. Install this plugin on your Jenkins server.

0. Configure it in your Jenkins job and add it as a Post-build action.

0. Create an HPI file to install in Jenkins in target/slack.hpi.

   mvn package

