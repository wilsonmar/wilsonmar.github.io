---
layout: post
title: "Evangelist Job Description"
excerpt: "Example of yaml markup variables for Jekyll to generate HTML - a job description"
modified:
tags: []
date: "2021-03-06"
file: "evangelist-job-description"
image:
# feature: pic black white must be willing to relocate to sf 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14621966/ee85d7a2-0583-11e6-923c-a58327524273.jpg
  credit: 
  creditlink: 
comments: true
company: XYZ
product: Gizmo
role: Developer Advocate
job_type: SRE
team: marketing
travel_pct: 20%
passion: technology evangelism
bring: content and perspective 
certifications: AWS, Pragmatic Marketing
skill: presenter
expertise: product and customer
targets: developers
competencies: application servers, scripting, and network infrastructure
languages: Go, NodeJs, Python, C, Ruby, and Rust
clouds: Amazon (AWS), Azure, and Google
platforms: Kubernetes
job_tools: GitHub, Maven, Gradle, Groovy
colab_tools: Slack, Jira
document: use cases (solution briefs)
demo: best practices
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is an example of a job description for a {{ page.role }}. 



## Using variables

This page is also an example of how page variables can be used in the markup text so that key words can be changed in one place and be applied to all instances in the document.

The author of this page added variables in the header at the top of the authoring file which is not presented to readers. Within the body of the article's text is inserted <tt>{{ page.targets }}</tt>. When Jekyll reads this markup to generates HTML, it substitutes the variable with the data value from the header.

<tt>
&#123;&#123; page.company }} is looking for a &#123;&#123; page.role }} to join us in attracting the interest of &#123;&#123; page.targets }} using &#123;&#123; page.languages }} to use our &#123;&#123; page.product }} along with &#123;&#123; page.job_tools }}.
</tt>

Values are obtained at the top of the page containing:

<pre>company: XYZ
product: Gizmo
role: Developer Advocate
job_type: SRE
team: marketing
travel_pct: 20%
passion: technology evangelism
bring: content and perspective 
certifications: AWS, Pragmatic Marketing
skill: presenter
expertise: product and customer
targets: developers
competencies: application servers, scripting, and network infrastructure
languages: Go, NodeJs, Python, C, Ruby, and Rust
clouds: Amazon (AWS), Azure, and Google
platforms: Kubernetes
job_tools: GitHub, Maven, Gradle, Groovy, 
colab_tools: Slack, Jira
document: use cases (solution briefs)
demo: best practices
---
   </pre>

CAUTION: Misspellings of keys would result in a compilation error that blocks all other page processing.

The result:

## The generated job description

{{ page.company }} is looking for a {{ page.role }} so we better attract the interest of {{ page.targets }} using {{ page.languages }} to use {{ page.product }} along with {{ page.job_tools }}.

The successful candidate is an engaging communicator, passionate, and loves interacting with our partners, clients, and prospects. 

You know the concerns, interests, demographics, and cultures of {{ page.targets }},
and you have creative ideas around how we can connect deeply and effectively with them.

As a key member of our small, rapidly growing {{ page.team }} team, you will be the face and voice of {{ page.company }} to {{ page.targets }}. 

You will be the go to person for telling our story to the market - on stage at events, during industry-wide webcasts, and in conference rooms at the largest companies. 

This role would involve up to {{ page.travel_pct }} travel.

As both a {{ page.expertise }} expert, you will also be the sales force's key marketing contact to help develop effective account specific go-to-market strategies. 

We’re seeking not only a great {{ page.skill }} but an excellent listener, who is curious about the needs and concerns of our prospects and customers.

You'll be using {{ page.clouds }} where we run {{ page.platforms }}.


## Responsibilities: Day in the life

Your key responsibilities toward building a following of passionate <strong>{{ page.targets }}</strong> 
include the following during a day in the life:

* Identify strategies and opportunities to bring {{ page.bring }} to both <strong>{{ page.targets }}</strong> and executives who manage them.

* Plan content and campaigns (with <strong>partners</strong>) that leverage time and expense to achieve the highest returns.

* Analyze <strong>trend data</strong> in order to position {{ page.company }} as a thought leader.
 
* Analyze <strong>new features and capabilities</strong> to present them as useful and compelling.

* Seek out and write up <strong>{{ page.document }}</strong> to demonstrate {{ page.demo }}.

* <strong>Publish blog posts and tutorials</strong> and <strong>speak at meetups and conferences</strong> to highlight best practices and offer fresh perspectives.

* Champion users’ needs internally by providing invaluable feedback to the sales, product, and engineering teams.

* Craft attention-getting yet informative <strong>posts in social networks</strong> and <strong>create blog and video content</strong> to attract and grow interest.

* Use and create <strong>open source projects</strong> so {{ page.targets }} can adopt the company's offerings quicker and more confidently.


## The ideal candidate 

* Has done a similar job before in this industry, with sharable examples of previous speaking opportunities, conference speaker feedback, and/or recorded webcast delivery. 

* Has built a visible online presence via social media, blogs, forums, GitHub repos and/or community involvement.

* Experience as a current or former {{ page.job_type }} with one or more apps published in an app marketplace (Google Play, Apple Store, Windows Store, Office Store, iTunes, etc.)

* Ability to <strong>code demos</strong> in {{ page.languages }}.

* Expertise using {{ page.job_tools }}.

* Familiarity using {{ page.colab_tools }}.

* Can confidently <strong>moderate discussions</strong> among technical and non-technical groups.

* Passed {{ page.certifications }} certifications.

* Has potential aspirations for marketing, business development, sales, or product leadership roles in the future.


## Bonus points

You get bonus points if:

 * You are in love with the {{ page.product }} product.

 * You are a tinkerer! Show us any personal projects you’ve worked on, GitHub projects you’ve forked, etc.
 
 * You are naturally inclined to provide unbelievable customer service and enjoy teaching and helping others.

 * Measurable competency with {{ page.competencies }}.

 * Experience in a startup and growth-stage environments

 * Developed a "maturity model".
 

## What we offer

* A unique opportunity to play a critical crossover technical/ business role 
at a high-growth company in a rapidly emerging open source infrastructure category.

* The chance to say you “got in early” into one of the pioneers!

* Equity
* Matching 401(K) plans 
* 100% employer paid premiums for medical, dental, life insurance, disability
* Flexible vacation - take time off when you need it

* Free lunches, dinners, and fully stocked snacks & beverages
* Commuter benefits for public transit and bicycle commuters
* Shower facilities in the building
* Wellness initiatives (incentive programs, fitness classes)
* Free gym membership with shuttle service, onsite cardio gym, company organized and sponsored sports and leagues.
* Free parking (We pay for parking tickets in San Francisco’s Mission District, too.)

* Lounge areas with ping pong, foosball, pinball, and arcade games
* Monthly happy hours
* Company ski trips, boat parties, BBQs, happy hours, game nights ... just to name a few!
* Volunteer opportunities and extra PTO for community work.

* Casual dress code

* MacBook (16 GB, with 2 additional screens)
* Employee development opportunities 

## Summary

BS in a STEM degree, {{ page.job_type }} experience, ability to code in {{ page.languages }}, excellent written and presentations.


## More on Technical Evanglism #

This post is one of a series:

{% include evangelist_links.html %}

