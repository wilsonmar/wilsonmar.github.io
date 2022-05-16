---
layout: post
title: "InnerSource"
excerpt: "Caring about sharing within commerical enterprises using GitHub"
tags: [github]
date: "2020-09-18"
file: "InnerSource"
image:
# feature: pic green matrix hallway 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14623876/07afd066-0593-11e6-933a-2e596511ac67.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The term "InnerSource" was coined by Tim O'Reilly in 2000.

{% include whatever.html %}

Innersource is the approach of using open source practices <strong>within proprietary organisations</strong> which desire to take advantage of the <strong>open collaborative way</strong> of building software. 

InnerSource is the practice of adopting <strong>open source patterns internally</strong> within an organization -- an organization that practices InnerSource may or may not also maintain open source software. "The Apache Way".

By applying the principles of open source within an organisation, InnerSource helps teams work better together, reduce bottlenecks, and build a much more collaborative, effective and efficient delivery model.

InnerSource has been gaining momentum in the last number of years thanks to the wide range of reported benefits:

* Increased developer collaboration across silos
* Better code quality
* More code re-use
* Enhanced documentation
* Higher developer satisfaction
* Improved talent acquisition and retention
<br /><br />

References:
   * GitHub wrote a PDF at <a target="_blank" href="https://resources.github.com/downloads/InnerSource.pdf">resources.github.com/downloads/InnerSource.pdf</a>


## Who are using InnerSource?

Paypal is a big supporter of InnerSource. Since 2016 it sponsored Isobel Drost-Fromm (@divadanese, now a consultant at <a target="_blank" href="https://www.nearform.com/services/innersource">Nearform</a>) to found <a target="_blank" href="https://innersourcecommons.org/">innersourcecommons.org</a> (ISC), #InnerSourceCommons), a volunteer organization that holds two summits a year and publishes a repository of "patterns" at

   <ul><a target="_blank" href="https://github.com/paypal/InnerSourcePatterns">https://github.com/paypal/InnerSourcePatterns</a>

   That now is redirected to:

   <a target="_blank" href="https://github.com/InnerSourceCommons/InnerSourcePatterns">https://github.com/InnerSourceCommons/InnerSourcePatterns</a>
   </ul>

<a target="_blank" href="https://www.youtube.com/watch?v=mMPdG2O-W2Y&list=PLCH-i0B0otNSiHdPkI1AJ86ajzNaH3wnH&index=2&t=0s">VIDEO</a>: 
As of 2020, there are over 100 corporate members of ISC.

Public presentations have been made by people from these organizations:

   * Bloomberg
   * Walmart
   <br /><br />

Many GitHub users highlighted in <a target="_blank" href="https://github.com/customer-stories/">github.com/customer-stories</a> make use of InnerSource.

   * Ford
   * Continental (Tires)
   * Dow Jones
   * Spotify
   * Twilio
   * Stripe "InnerSource removes friction"
   <br /><br />

   * <a target="_blank" href="https://www.nearform.com/blog/journey-to-innersource-danese-cooper-james-mcleod/">Lloyds Bank Group</a>
   * <a target="_blank" href="https://www.nearform.com/blog/the-journey-to-innersource-at-american-airlines/">American Airlines</a>
   * <a target="_blank" href="https://www.nearform.com/blog/lessons-from-a-journey-to-innersource-at-microsoft/">Microsoft</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=msD-8-yrGfs&t=140s">VIDEO</a>: <a target="_blank" href="https://www.nearform.com/blog/lessons-from-a-journey-to-innersource-at-comcast/">Comcast</a>

## Roles

April 2020 <a target="_blank" href="https://innersourcecommons.org/resources/learningpath/">"Learning Path" script</a> and (with Keith Rudlidge of Nike) <a target="_blank" href="https://www.youtube.com/watch?v=l93ohSHhr5U&list=PLCH-i0B0otNRnLlkiwxf0qKOnH5NvO5pK">on YouTube video</a>, and <a target="_blank" href="https://learning.oreilly.com/learning-paths/learning-path-innersource/0636920438137/">O'Reilly.com</a> with Johannes Tiigges and (InnerSourceCommons founder) Isobel Drost-Fromm (@divadanese), clarifies key roles in InnerSource:

   * <a target="_blank" href="https://www.youtube.com/watch?v=ncPO1fz5fRg&list=PLCH-i0B0otNRJ6elYs7sfim--14E6FOQq">VIDEO</a> <a target="_blank" href="https://innersourcecommons.org/resources/learningpath/contributor/02/"><strong>Contributors</strong></a> "are also called guests" who contribute code, bug reports, docs.
   PROTIP: cut dependencies. 

   * <a target="_blank" href="https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/master/patterns/2-structured/trusted-committer.md"><strong>Trusted Committers (TCs)</strong></a> "are also called hosts". They review outside contributions, provides mentorship and code reviews to contributors, writes documentation, resources, assets. All to ensure quality. GitHub's "Maintainer" role and Apache's "Committer" are more tech oriented with less social responsibilities. Only Trusted Committers merge code.

   PROTIP: Have a file in your repo based on <a target="_blank" href="https://github.com/wilsonmar/InnerSourcePatterns/blob/master/TRUSTED-COMMITTERS.md">this TRUSTED-COMMITTERS.md</a>

   PROTIP: Scheduled rotation between coding and TC role.

   * <strong>Community members</strong> use the project (software).

   * <a target="_blank" href="https://www.youtube.com/watch?v=urbkSMsJXZ0&list=PLCH-i0B0otNQiodkjO6ZyaFm37SfFijOI&index=1">VIDEO</a>: <strong>Product Owners</strong> are responsible for "defining and prioritizing stories", driving the vision and managing the organizational aspects of the project.

   * <a target="_blank" href="https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/master/patterns/2-structured/review-committee.md"><strong>Review Committee</strong></a>

   * InnerSourceCommons mentions a "Dedicated Community Leaders" -- people with both communications and technical skills to lead the communities to ensure success in starting an InnerSource initiative.

<a target="_blank" href="https://github.com/a-a-ron">Aaron Stewart</a>, a Program Architect at GitHub, created a video series on Pluralsight has a <a target="_blank" href="https://app.pluralsight.com/paths/skills/collaborative-coding-with-github">"Collaborative Coding with GitHub" series</a> that includes <a target="_blank" href="https://app.pluralsight.com/library/courses/adopting-innersource-culture-github/table-of-contents">"Adopting an InnerSource Culture with GitHub"</a>
[1h 42m] released 30 Mar 2020

The course references GitHub's <a target="_blank" href="https://lab.github.com/githubtraining/innersource-fundamentals">32 m "InnerSource Fundamentals" class</a> which creates the "InnerSource Toolkit" website providing a resource others can use to introduce InnerSource.

   * <a target="_blank" href="https://github.com/a-a-ron/innersource-template-pluralsight/">github.com/a-a-ron/innersource-template-pluralsight</a>

   After going through the course, the repo would look like  
   <a target="_blank" href="https://github.com/wilson-mar/innersource-completed-pluralsight/tree/master/adopting-innersource-strategy">innersource-completed-pluralsight</a>

   * https://lab.github.com/githubtraining/innersource-fundamentals
   begins with https://github.com/githubtraining/training-manual

In the course, Aaron also provides a Checklist for Measuring Success 


## Sharing in Lifecycle

Sharing is a mindset. Toward that end, "Security Guidance for Critical Areas of Focus in Cloud Computing v4.0" has Sharing in its definition of Data Security Lifecycle:

1. Create
2. Store
3. Use
4. Share
5. Archive
6. Destroy
<br /><br />

## Success Metrics

QUESTION: Under the "Insights" tab for each project???

Along the lifecycle:

A) % of issues created from external contributors

B) % of PRs that come from external contributors

C) % of PRs from external teams that are merged

D) % of reviews that come from external contributors

E) % of code reuse across projects

F) % of repositories using InnerSource components (managed contributing guidelines, assigned TCs)

G) (Days) Responsiveness (how quickly does someone respond to an issue opened by an external contributor)

QUESTION: What are the mechanisms to calculate the above metrics?

<a target="_blank" href="https://cauldron.io/">cauldron.io</a>?


## Maturity Model

The <a target="_blank" href="https://community.apache.org/apache-way/apache-project-maturity-model.html">Apache Project Maturity Model</a> provides a suggested framework for evaluating the overall maturity of an Apache project community, a part of the "Apache Way". Items include:

* Code
* Licenses and Copyright
* Releases
* Community
* Consensus Building
* Independence (Chatham House Rule)
<br /><br />

The above address the mechanics of InnerSource activities.

However, there are also much more powerful <strong>forces</strong> contributing to the success of InnerSource.

> "InnerSource is as much cultural transformation than a technical one."


## Struggle for dominance

In "traditional" work cultures, the "top dog" enjoys more independence. To become a "star performer", either officially designated or not, is typically achieved through bluster: by openly insulting less brazen colleagues and limiting sharing of knowledge only to show superiority rather than to mentor others.

Some managers may prefer this situation because it "gets the work done", even if it's just on the short term.

However, the capacity and growth potential in "hero cultures" are below what can be achieved in more inclusive cultures where open sharing elevate all members.

While heros may be able to deliver on the short term, when considering long term consequences, when the hero inevitably leaves, the organization can become crippled.

Hero cultures are also correlated with a "Not Invented Here" (NIH) mentality that limits adoption of innovation.

Thus, so-called heros are not really "leaders", but dominators intent on sacrificing others to better oneself.

> It's very difficult to build InnerSource among selfish people.

NIH is one of the <strong>patterns</strong> that InnerSource practitioners described in InnerSourceCommons.


## Vocabulary on patterns

InnerSource practitioners created a vocabulary for describing challenges and proven ways to address them.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/93719879-b7e6f000-fb42-11ea-8c1e-a30704b6f77d.png">
<img width="539" alt="innersource-meta" src="https://user-images.githubusercontent.com/300046/93719879-b7e6f000-fb42-11ea-8c1e-a30704b6f77d.png"></a>

The above diagram is explained in <a target="_blank" href="https://www.youtube.com/watch?v=1M6QWrA3Y0I&list=PLCH-i0B0otNSiHdPkI1AJ86ajzNaH3wnH&index=2">this video "InnerSource Patterns - How They Work"</a>.

<strong>Problems</strong> (challenges) exist within a <strong>context</strong>. <strong>Forces</strong> perpetuate the problems.
The <strong>Resulting context</strong> are the conditions we wish to achieve. If we don't have a known <strong>Resolution</strong> which affects the forces. If a Resolution is not proven with Known Instances, the pattern is called a <strong>donut</strong> (with context around a missing Resolution).

A sample pattern is "Management Review":

<a target="_blank" href="https://user-images.githubusercontent.com/300046/93804289-533f9a00-fc03-11ea-8a4e-953c3f214366.png">
<img width="673" alt="innersource-mgmt-review-pattern" src="https://user-images.githubusercontent.com/300046/93804289-533f9a00-fc03-11ea-8a4e-953c3f214366.png"></a>

"Patlet" is the heading for a summary statement about a pattern.

The "Review Committee" pattern is at <a target="_blank" href="
https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/master/patterns/2-structured/review-committee.md">https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/master/patterns/2-structured/review-committee.md</a>


## Culture

Steps to break down silos:

   1. Work towards a common goal
   2. Motivate and incentivize
   3. Collaborate and create (Transparency improves collaboration)
   4. Execute and measure


* Transparency - discoverable repositories

* Engagement - useful templates

   workflows

* Communication - repository ownership


See "Gaining by Sharing" by Niel Basjes


### Contributing Guidelines

Code conventions

Testing conventions

Branching conventions

Commit message conventions

Steps for creating a good pull request

How to submit feature requests

How to submit bug reports

How to submit issues

Help wanted section - tag Issues


## Rollout Checklist of Actions

<a target="_blank" href="https://www.youtube.com/watch?v=urbkSMsJXZ0&list=PLCH-i0B0otNQiodkjO6ZyaFm37SfFijOI&index=1">VIDEO</a>: Silona Bonewald, Director of InnerSource at PayPal, wrote in 2017 a 23-page <a target="_blank" href="https://innersourcecommons.org/assets/files/InnerSourceChecklist.pdf">pdf download "Understanding the InnerSource Checklist: How to Launch Collaboration Within Your Enterprise"</a> downloaded from <a target="_blank" href="https://innersourcecommons.org/checklist">https://innersourcecommons.org/checklist</a>. 

Below is my adaptation of how to create a culture where InnerSource can thrive:

1. Define program goals, timeline, and Exec sponsor team
1. Identify pilot group(s) to validate and drive internal success
1. Create internal portal for InnerSource
1. Establish the Trusted Committer (TC) role
1. Establish Search/Tagging conventions
1. Establish template documentation and repository set up guidelines
1. Contributing guidelines
1. Provide example workflows
1. Provide a temporary repository
1. Create an InnerSource team within the GitHub organization to provide guidance
4. Establish and schedule initial workshops


## Resources

https://www.wikiwand.com/en/Inner_source

Cultural Inventory questionnaire, interviews, workshops.

Project Guidance training, establishing procedures, mentoring.

Project Assessment evaluation, team structures, documentation.

Implementation awareness, discovery, pilot, repeat.

https://www.nearform.com/blog/journey-to-innersource-danese-cooper-james-mcleod/
Podcasts

https://resources.github.com/whitepapers/introduction-to-innersource/
January 22, 2018


<a target="_blank" href="https://www.youtube.com/watch?v=D3C12ojRcp0">VIDEO: OpenDev 10.2017 | Getting started with InnerSource—open source workflows in the enterprise</a>
Ryan Parks shows use of a template repo (java-calculator) containing a <strong>.github folder</strong> containing:

   * CODEOWNERS
   * CONTRIBUTING.md
   * ISSUE_TEMPLATE.md
   * PULL_REQUEST_TEMPLATE.md


https://www.youtube.com/watch?v=D3C12ojRcp0

