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

## 1. Secrets in code vs. separated in vaults

   Here is a key example of a "quick and dirty" approach versus a "sustaining" approach.

   Hackers think of most files as being temporary, throw-away.

   But sustainers think of files as assets to preserve and nurture over time. One aspect of preservation is storing private keys so that they can be renewed automatically on schedule by <a target="_blank" href="https://wilsonmar.github.io/vault">Hashicorp's Vault</a>, AWS's SSM, or Gravitational's Teleport.
   
   The availability of Git and GitHub enables all files associated with each change to be brought back together as they were on each commit.
   One of Git's advantages is that its contents are difficult to change. Once a change is pushed into a Git repository, it becomes difficult and disruptive to remove.
   
   So Sustainers proactively check for concerns before they become ensconsed in the group repository by adding a <a target="_blank" href="https://wilsonmar.github.io/git-hooks">"Git hook" script</a> to kick off whenever a Git commit is attempted.

   Sustainers hunt for passwords already in files by periodically running a utility program to scan through the whole code base.


## 2. Hard-coded host names vs. variables
   
   Coding during efforts begin in a single environment ("Dev"). To save time, they work only on the production instance.

   But as more users adopt the system, the impact of problems in production increases over time. So the same code files needs to travel among different environments for testing before trusted productive usage.

   Adding variables take extra time from developers. Developers take ingenious lengths to shave a few seconds off each task (such as using vim and memorizing dozens of keyboard shortcuts).

   Sustainers look to save time in the context of the whole lifecycle of a file. So they make sacrifices early in the cycle so that benefits would accrue over a lifetime. Adding variables early in the development cycle is an aspect of that investment.

   I wrote a sample template Bash Shell script which contains the precautions described below.

## 3. Default destruction vs. Dry run flags

   The "hacker" approach is to try something because it's often easier to fix  later. "We're that good."

   But sustainers are fearful of mistakes and treat data in production environments like handling radioactive material.

   So Sustainers make it a conscious effort to impact production (and not a mistake) by having programs recognize a flag (such "-p") which specifies work on production rather than test data.

   Some make selection automatic by detecting the operating system.
   If it's running on macOS on a MacBook, it must be non-production.

   My template is designed so that running it without any parameters would result in no files being processed. Adding "-a" would trigger work on actual data rather than the default "dry-run", which only performs the preliminaries but does not actually update or delete.
   
## 4. Counts and ratios of folders and files processed

   Hackers tend to focus more on features than specifics of data. So they tend to define sample files containing only enough data to provide the conditions developers and testers want to consider.
   
   Sustainers code their programs to output counts of objects processed in order to verify completeness and accuracy. 
   Counts enable reconciliation of what when in vs. what went out.
   Having a counts run obtained during a dry run provides a way to verify whether actual runs processed all they were supposed to.

   Ratios of the number of files per folder calculated over time and counts of certain keywords inside files can provide a warning mechanism of something wrong.

   Batch jobs running overnight in production have a window of time in which to run. They need to be carefully sequenced. So a job that runs too long would block other jobs from running and may keep users from using the system the next day.
   


## 3. Short names vs. complex file names

   When Hackers create files and folders, few others refer to them, so they use short names which are quicker to type, and thus saves time.
   
   But Sustainers name files with metadata such as "PRD" for whether the file contains data from production. In production, the context of work usually include an integrated system with perhaps dozens of components. Including dates in folders and files outputted enable them to be sorted. As importantly, date stamps in names ensure that they are unique rather than being overidden every run.


## 4. All operations vs. customer-specific filters

   The "hacker" approach is to write programs that work on all items within a file. That is faster to "MVP" (Minimum Viable Product) than taking the time to add sorting and filters, which can be done later.
   
   But Sustainers are careful to segregate data of one customer from others. This helps avoid embarassment and erosion of trust. So Sustainers output files into separate folders/files for each customer. Then different permission can be applied appropriately to each file.

   Here again, use of templates would enable developers in a rush to do what they need, but faster yet more securely.


## 6. Idempotence during reruns

   "Idempotence" means that the same command executed again should yield the same result. For example, a program that adds items would not add duplicates when invoked multiple times.

   To achieve idempotence may mean that folders are cleared before reruns. That means that backups may be needed before each run, and backups being cleaned up when no longer needed. This also means that programs need to use folders not shared with others.

   Consider whether deleting data for the sake of idempotency is worth the risk in a Production setting where data usually needs to be long-lived.


## 8. Manual vs. automated work

   Hackers tend to assume that the services, folders, and files they need are there. After all, they created them. They can see that file in a folder displayed on another screen.
   
   But automated scripts can't simply glance at that other screen.
   Automated scripts need to actually ping a host name to make sure they are active.
   Automated scripts need to check whether a folder exists before taking action.
   Automated scripts need to check after each component is installed to ensure that it was actually installed. There could have been a typo in the installation command.

   Manually typing command is more flexible than having them as automated scripts. But the lack of repeatability and potential typos makes them fragile and error-prone. ???


## 9. Display last key value processed

   "Hackers" are interested in general features, and more often, UI features.
   
   Some Sustainers add a step in the automated script to print off the value of the last key processed because there was an incident with a file missing an invisible character that marks the end of each line, something that caused the last line to not be processed.
   
   This happens more frequently than one would think. Looking at a flat file in a text editor, unless the cursor appears at the first position below the last line containing text, one really tell if that invisible character is in the file.

   "spot checking" ???
   
   The compromise may perhaps be to allow sections of code to be maintained by Sustainers which Hacker types try to ignore.


## 10. Different logins and passwords

   This is perhaps the most inconvenient of requests to Hacker developers.

   Sustainers operate in production using different credentials than when operating in test systems. In order to restrict the damage that can be done if a particular password or certificate is compromised, each secret is limited in scope.

   Password managers may help, but pose a vulnerability of its own.


## Conclusion

Here you have it. These are the major disagreements where "Hacker" and "Sustainer" types may differ. 
To recap, those who work in production tend to:

   1. View time efficiency by everyone, over time
   2. Write for re-usability by coding variables 
   3. Make it harder to specify destructive operations to ensure actual intent
   4. Output folders and files with date/time stamps
   5. Keep data of each customer separate
   6. Build in backups, log rotation, and data archival/deletion
   7. Output counts of what was processed
   8. Measure how long processes take
   9. Spot check file contents 
   10. Use different credentials in different enviornments
   
   
I hope that conversation occurs sooner than later when personal insults are traded and relationships damaged, causing disruptive turnover that could have been avoided.

My advice is to have a conversation about how to ensure that both cultures can co-exist by having mechanisms in place that can balance going too far either way.

This means that when picking an estimate number, consider the time needed to address potential risks and the impact they can have.
That's the contribution of Sustainers with experience.


## Resources

https://www.tlnt.com/four-keys-to-building-a-strong-and-sustainable-corporate-culture/
