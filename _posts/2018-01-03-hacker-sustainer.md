---
layout: post
title: "Hacker vs Sustainer (Culture)"
excerpt: "How to succeed in production by resolving the singular source of conflict teams must resolve for DevOps"
tags: [DevOps]
date: "2018-01-03"
file: "hacker-sustainer"
image: 
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
I believe teams need to recognize and reconcile the dichotomy between
how coding with a "Hacker mentality" is different than coding with a "Sustainer mentality".

{% include whatever.html %}

Note that in this article, I refer to the "white hat" type of "Hackers" with reverance. To me, the "Hacker" designation means that the person seeks to do good. By contrast, "Crackers" intend to damage.<a target="_blank" href="https://www.quora.com/What-is-the-difference-between-hacker-and-cracker">*</a>
<a target="_blank" href="https://qr.ae/TWmAGh">One commentator at Quora</a> said "Hackers are intellectually curious, like to understand at the core of how things work, and like to be creative with code."

"Hackers" think and write code differently than "Sustainers" working in Operations who have spent their lives protecting their "pristine" production environments from the onslaught of "hackerish" changes which can wreck havoc and introduce security vulnerabilities.

   That's why it's usually difficult to convince the "old guard" to give "Hackers" the "keys to the production kingdom". But do they must to accelerate innovation at faster pace.

   Those who are proud to be identified among "hackers" see the other mindset as slowing things down without justifiable benefit. So the issue is justification of additional safeguards. Hacker types may not be aware of risks or understand the enormity of potential impact. 

   One group has become successful due to their optimism.
   Another has become successful due to their pessimism. 

   The tragedy is when those in one group attribute the concerns of the other group as disruptive personal defects,
   and seek to undermine them personally when, in fact, both groups want to do the "right" thing. 
   
This article provides examples of how each group can benefit from the other. 
   The "Defenders of the Universe" can work with those who give life to systems.


## 1. "Quick and dirty" vs. "sustaining" approach

   The dichodomy can seem intractable because it takes an investment in time to have discussions to clarify what that "right" thing is, mutually.

   To proactively head off unproductive conflict, schedule enough time to dive deep into specifics described here, to reconcile the approach. Some teams define a "timebox", mutually estimate how much time to add specific controls desired, then have the hard conversations as they prioritize what can fit into that box. But there is danger is considering only the available time and ignore potential lethal risks in the process. Accept risks with potential impact less than the cost to add protections.

   <strong>Effective facilitation</strong> turns the focus away from arguing about who has more experience, "sense", or "judgement" to discussing what is logical to balance the potential risks vs. time and resources at hand. 
   
   Some conflicts customers may need to adjudicate such as decisions to "take more risk now to get it sooner".

   Some have found a compromise in use crafting <strong>templates</strong> (pre-defined code which can be quickly reused) which have precautions built-in so developers don't have to put in extra effort to ensure caution and security in production. 


## 2. Hard-coded values vs. variables

   As more users adopt a system, the impact of each problem in Production increases over time. 
   
   So the same code files needs to travel among different environments for testing before trusted productive usage.

   Adding variables take extra time from developers. Developers take ingenious lengths to shave a few seconds off each task (such as using vim and memorizing dozens of keyboard shortcuts).

   Sustainers look to save time in the context of the whole lifecycle of a file. So they make sacrifices early in the cycle so that benefits would accrue over a lifetime. Adding variables early in the development cycle is an aspect of that investment. One example is to use <strong>variables to represent</strong> host names, token to access, etc. Different values can be associated with the variable without the need for making coding changes.


## 3. Production vs. test targets

   Coding efforts begin in a single environment, perhaps while other environments are being setup.

   Since one objective of DevOps is to release to production if automated tests pass, that single initial environment easily becomes "Production". So to save time, "Hackers" work only on the production instance.

   However, Sustainers see the need to begin work in various non-production environments for thorough testing before promotion to Production. 
   In order to restrict the damage that can be done if a particular password or certificate is compromised, each secret is limited in scope. So, ideally, different credentials are in production than in test systems. 

   Some have found a compromise in <strong>automation of environment setup</strong> so that developers can focus on coding yet be able to experiment more boldly in test environments that are quick and easy to obtain.

   Console and log messages are helpful for debugging.
   But to avoid outputting too many when a large amount of data in production, add logic to only output for debugging when a flag ("-v" for verbose) is added.


## 4. Temporary vs. long-running assets

   The streotypical Hacker mindset is that files are temporary.

   But the Sustainer mindset is that files are assets to preserve and nurture over time. 
   
   The availability of Git and GitHub enables all files associated with each change to be brought back together as they were on each commit.
   One of Git's advantages is that its contents are difficult to change. Once a change is pushed into a Git repository, it becomes difficult and disruptive to remove.
   
   So Sustainers proactively check for vulnerabilities so that <strong>secrets are not ensconsed</strong> in the group repository. That's done by adding a <a target="_blank" href="https://wilsonmar.github.io/git-hooks">"Git hook" script</a> to kick off whenever a Git commit is attempted. Git hooks check for secrets, coding style violations, etc.

   Sustainers hunt for passwords already in files by periodically running a utility program to scan through the whole code base.

   Secrets get "stale" and need to renewed periodically. That can be done automatically on schedule by <a target="_blank" href="https://wilsonmar.github.io/vault">HashiCorp's Vault</a>, AWS's SSM, or Gravitational's Teleport.

   Sustainers are also usually diligent to store changes made on servers to a repository so that when that particular server goes away, additional servers can be created using the changed configuration. Automation depends on this.


## 5. Manual vs. automated work

   Hackers tend to assume that the services, folders, and files they need are there. After all, they created them. They can see that file in a folder displayed on another screen.
   
   But automated scripts can't simply glance at that other screen.
   Automated scripts need to actually ping a host name to make sure they are active.
   Automated scripts need to check whether a folder exists before taking action.
   Automated scripts need to check after each component is installed to ensure that it was actually installed. There could have been a typo in the installation command.

   Manually typing commands is more flexible than having them as automated scripts. But the lack of repeatability and potential typos makes them fragile and error-prone.


## 6. Default destruction vs. Dry run flags

   The "hacker" approach is to try something because it's often easier to fix  later. "We're that good."

   But sustainers are fearful of mistakes and treat data in production environments like handling radioactive material.

   So Sustainers make it a conscious effort to impact production (and not a mistake) by having programs recognize a <strong>run feature flag</strong> (such "-p") which specifies work on production rather than test data.

   Some make selection automatic by detecting the operating system.
   If it's running on macOS on a MacBook, it must be non-production.

   My template is designed so that running it without any parameters would result in no files being processed. Adding "-a" would trigger work on actual data rather than the default "dry-run", which only performs the preliminaries but does not actually update or delete.


## 7. Counts and ratios of folders and files processed

   Hackers tend to focus more on features than specifics of data. So they tend to define sample files containing only enough data to provide the conditions developers and testers want to consider.
   
   Sustainers code their programs to output counts of objects processed in order to verify completeness and accuracy. 
   Counts enable reconciliation of what when in vs. what went out.
   Having a counts run obtained during a dry run provides a way to verify whether actual runs processed all they were supposed to.

   Ratios of the number of files per folder calculated over time and counts of certain keywords inside files can provide a warning mechanism of something wrong.

   Batch jobs running overnight in production have a window of time in which to run. They need to be carefully sequenced. So a job that runs too long would block other jobs from running and may keep users from using the system the next day.
   

## 8. Short names vs. complex file names

   When Hackers create files and folders, few others refer to them, so they use short names which are quicker to type, and thus saves time.
   
   But Sustainers name files with the system name plus metadata such as "PRD" for whether the file contains data from production. In production, the context of work usually include an integrated system with perhaps dozens of components. 
   
   Including dates in folders and files outputted enable them to be sorted. As importantly, date stamps in names ensure that they are unique rather than being overidden every run.


## 9. All operations vs. customer-specific filters

   The "hacker" approach is to write programs that work on all items within a file. That is faster to "MVP" (Minimum Viable Product) than taking the time to add sorting and filters, which can be done later.
   
   But Sustainers are careful to segregate data of one customer from others. This helps avoid embarassment and erosion of trust. So Sustainers output files into separate folders/files for each customer. Then different permission can be applied appropriately to each file.

   Here again, use of templates would enable developers in a rush to do what they need, but faster yet more securely.


## 10. Idempotence during reruns

   "Idempotence" means that the same command executed again should yield the same result. For example, a program that adds items would not add duplicates when invoked multiple times.

   To achieve idempotence may mean that folders are cleared before reruns. That means that backups may be needed before each run, and backups being cleaned up when no longer needed. This also means that programs need to use folders not shared with others.

   Consider whether deleting data for the sake of idempotency is worth the risk in a Production setting where data usually needs to be long-lived.


## 11. Front-end vs. back-end processing

   The front-end is where the glory and visibility are during demos.
   Even with back-end, visulizations are what gets executive attention
   while bullet-proof coding gets little praise.

   Sustainer who obcess with ("back-end") data processing code need to be self-motivated.
   
   For example, some Sustainers add to their automated script spot checks such as printing off the key value from the last row of files processed, which may miss being processed. This happens more frequently than one would think. Looking at a flat file in a text editor, unless the cursor appears at the first position below the last line, one really tell if that invisible character is in the file.

## Conclusion

Differences in focus is what leads to specialization of concerns. 
There can be disagreements where "Hacker" and "Sustainer" types differ. 

But the "DevOps" movement is about a wedding of Dev (Developers) and Ops (production Operations). better understanding each other, and even doing each other's job. People doing so makes for more autonomous, self-sustaining teams to be formed in order to be more scalable.

To recap, those who work in production tend to:

   1. Use facilitator to balance assessment of efficiency and risks.
   2. Use variables in templates to build in quality from the beginning.
   3. Automate setup.
   4. Store code in repositories and secrets in vaults.
   5. Write for re-usability by coding variables.
   6. Use feature flags to specify destructive operations to ensure actual intent.
   7. Output counts of what was processed.
   8. Measure how long processes take - output folders and files with date/time stamps.
   9. Spot check file contents and Keep data of each customer separate.
   10. Use different credentials in different environments.
   11. Build in backups, log rotation, and data archival/deletion.
   <br /><br />
   
I hope that at where you work, conversations occur sooner than later before personal insults are traded and relationships damaged, causing disruptive turnover that could have been avoided.

My advice is to plan those conversations about how to ensure that both cultures can co-exist by having mechanisms in place that can balance going too far either way.

This means that when picking an estimate number, consider the time needed to address potential risks and the impact they can have.
That's the contribution of Sustainers with experience.


## Resources

https://www.tlnt.com/four-keys-to-building-a-strong-and-sustainable-corporate-culture/


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

