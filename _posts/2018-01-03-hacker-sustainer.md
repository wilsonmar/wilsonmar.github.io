---
layout: post
title: "Hacker vs Sustainer (Culture)"
excerpt: "The dichotomy teams must resolve for DevOps"
tags: [DevOps]
date: "2018-01-03"
file: "hacker-sustainer"
image: 
# Title: How Hackers and Production Sustainers Can Work Together
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

To adopt DevOps with less stress and conflict,
I believe teams need to recognize and reconcile the distinctions between
how coding with a "Hacker mentality" is different than coding with a "Sustainer mentality".

Note that in this article, I refer to the "white hat" type of "Hackers" with reverance. To me, the "Hacker" designation means that the person seeks to do good. By contrast, "Crackers" intend to damage.<a target="_blank" href="https://www.quora.com/What-is-the-difference-between-hacker-and-cracker">*</a>
<a target="_blank" href="https://qr.ae/TWmAGh">One commentator at Quora</a> said "Hackers are intellectually curious, like to understand at the core of how things work, and like to be creative with code."

This article provides examples of how those experienced coding for production environments ("Sustainers") think and write code differently than "Hackers". One has become successful due to their pessimism. Another has become successful due to their optimism.

Experienced Operations people have spent their lives
protecting their "pristine" production environments from the
onslaught of "hackerish" changes which can wreck havoc and introduce security vulnerabilities.

So that's why it's usually difficult to convince the "old guard" to give software developers ("Hackers") the "keys to the production kingdom". But do they must to accelerate innovation at faster pace.

Those who are proud to be identified among "hackers" see the other mindset as slowing things down without justifiable benefit. So the issue is justification of additional safeguards. Hacker types may not be aware of risks or understand the enormity of potential impact. 

The tragedy is when those in one group attribute the concerns of the other group as disruptive personal defects,
and seek to undermine them when, in fact, both groups want to do the "right" thing. The "Defenders of the Universe" can work with those who give life to systems.

The solution is to allocate time to clarify what that "right" thing is, mutually.

To proactively head off unproductive conflict, schedule enough time to dive deep into specifics described here, to reconcile the approach. Some teams define a "timebox", mutually estimate how much time to add specific controls desired, then have the hard conversations as they prioritize what can fit into that box. But there is danger is considering only the available time and ignore potential lethal risks in the process. Accept risks with potential impact less than the cost to add protections.

Effective facilitation gets away from arguing about who has more experience or more "sense" to discussing what is logical to balance the potential risks, time, and resources at hand. Some conflicts customers may need to adjudicate: "take the risk now to get it sooner".

Some have found a compromise in use of templates which have precautions built-in so developers don't have to put in extra effort to ensure caution and security in production. 

Some of the conditions:

## 1. Passwords in files

   Here is a key example of a "quick and dirty" approach versus a "sustaining" approach.

   Hackers think of most files as being temporary, throw-away.

   However, sustainers think of files as assets to preserve and nurture over time. The availability of Git and GitHub enables all files associated with each change to be brought back together as they were on each commit.

   One of Git's advantages is that its contents are difficult to change. Once a change is pushed into a Git repository, it becomes difficult and disruptive to remove.
   
   So add a "Git hook" program which kicks off whenever a Git commit is attempted, and proactively check for concerns before they become ensconsed in the group repository.

   To identify passwords already in files, periodically run a utility program to scan through the whole code base to look for what might be a password.


## 2. Hard-coded production host names
   
   Coding during efforts early pertain to only a single environment ("Dev"). To save time, people work only on the production instance.

   But as the impact of problems in production increases over time as more users adopt the system, the same code needs to travel to different environments for testing before trusted productive usage.

   Adding variables take extra time from developers. Developers take ingenious lengths to shave a few seconds off each task (such as using vim and memorizing dozens of keyboard shortcuts).

   The request of developers is to help others shave time off their day by adopting variables early in the development cycle. Sacrifices early in the cycle would enable everyone in the lifecycle to benefit.

   I wrote a sample template Bash Shell script which contains the precautions described below.

## 3. Production vs non-production flags

   One approach to make it automatic is to detect the operating system.
   If it's running on macOS on a MacBook, it must be non-production.

   Make it a conscious effort to impact production (and not a mistake)
   by having programs recognize a flag which works on production rather than test data.


## 4. Dry run flags

   The "hacker" approach is to try something because it's often easier to fix it later. We're that good.

   But sustainers are fearful of mistakes and treat data in production environments like handling radioactive material.

   A balance may be for programs to recognize a flag which actually performs destructive actions (such as when "-a" is added to program being called).


## 5. Wholesale operations vs. customer-specific filters

   The "hacker" approach is to write programs that work on all items within a file. That is faster to "MVP" (Minimum Viable Product) than taking the time to add sorting and filters, which can be done later.
   
   But Sustainers want to make sure to segregate data of one customer from others to avoid embarassment which erodes trust. So Sustainers output files into separate folders/files for each customer so that different permission levels can be applied to each.

   Here again, use of templates would enable developers in a rush to do what they need, but faster yet more securely.


## 6. Counts of folders and files processed

   "Hackers" tend to focus more on features than specifics of data. So they often define sample files containing only enough data to provide the conditions developers and testers want to consider.
   
   "Sustainers" have found that counts of what a program does helps to verify completeness and accuracy. 
   Counts enable reconciliation of what when in vs. what went out.

   Ratios of the number of files per folder calculated over time and counts of certain keywords inside files can provide a warning mechanism of something wrong.

   Batch jobs running overnight in production have a window of time in which to run. They need to be carefully sequenced. So a job that runs too long would block other jobs from running and keep users from using the system the next day.
   

## 7. Manual checks vs. automated 

   Hackers tend to assume that the services, folders, and files they need are there. After all, they created them. They can see that file in a folder displayed on another screen.
   
   But automated scripts can't simply glance at that other screen.
   Automated scripts need to actually ping a host name to make sure they are active.
   Automated scripts need to check whether a folder exists before taking action.
   Automated scripts need to check after each component is installed to ensure that it was actually installed. There could have been a typo in the installation command.


## 8. Display last key value processed

   "Hackers" are interested in general features, and more often, UI features.
   
   Some Sustainers add a step in the automated script to print off the value of the last key processed because there was an incident with a file missing an invisible character that marks the end of each line, something that caused the last line to not be processed.
   
   This happens more frequently than one would think. Looking at a flat file in a text editor, unless the cursor appears at the first position below the last line containing text, one really tell if that invisible character is in the file.

   The compromise may perhaps be to allow sections of code to be maintained by Sustainers which Hacker types try to ignore.


## 9. Idempotence during reruns

   "Idempotence" means that the same command executed again should yield the same result. For example, a program that adds items would not add duplicates when invoked multiple times.

   To achieve idempotence may mean that folders are cleared before reruns. That means that backups may be needed before each run, and backups being cleaned up when no longer needed. This also means that programs need to use folders not shared with others.

   Consider whether deleting data for the sake of idempotency is worth the risk in a Production setting where data usually needs to be long-lived.


## 10. Different logins and passwords

   This is perhaps the most inconvenient of requests to developers.

   In order to restrict the damage that can be done if a particular password or certificate is compromised, each secret needs to be limited in scope.

   Password managers may help, but pose a vulnerability of its own.


## Conclusion

Here you have it. These are the major disagreements where "Hacker" and "Sustainer" types may differ. I hope that the conversation occurs sooner than later when personal insults are traded and relationships damaged, causing disruptive turnover that could have been avoided.

My advice is to have a conversation about how to ensure that both cultures can co-exist by having mechanisms in place that can balance going too far either way.

This means that when picking an estimate number, consider the time needed to address potential risks and the impact they can have.
That's the contribution of Sustainers with experience.


## Resources

https://www.tlnt.com/four-keys-to-building-a-strong-and-sustainable-corporate-culture/
