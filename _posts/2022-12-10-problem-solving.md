---
layout: post
date: "2022-12-10"
file: "problem-solving"
title: "Problem Solving"
excerpt: "Tools for solving problems"
tags: [management]
image: # pic-black-bkg-white-cloud_1920x1200
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme Bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

{% include whatever.html %}

## Tools

There are several conceptual and practical tools:

<a target="_blank" href="https://www.youtube.com/watch?v=yuH35ottILU">7 QC Tools</a> used in Six Sigma:

1. Flowchart
2. Check Sheets
3. Pareto Charts with a cumultive line (to separate the vital few from the trivial many)
4. <a name="Fishbone">Fishbone Diagram</a> (5 Whys)
5. Histogram
6. Scatter Diagrams (XY Scatter Chart) and Correlation
7. Control Charts


<a name="FishBone"></a>

### Root Cause (Fishbone) Diagram

The fishbone diagram visually presents the results of brainstorming exercise aimed at identifying root causes of a problem.

<a target="_blank" href="https://www.youtube.com/watch?v=dPenE6NzrCM" title="Fishbone diagram using Excel">VIDEO</a>:
Deming describes use of what he calls the (Kaouru) Ishikawa diagram, which others call a fishbone (or herringbone) diagram.

1. The starting point is a short description of a <strong>single problem</strong>, in a box at the right side of the page.

   State as a question, such as "why did the website crash"?

   Alternately, the problem can be associated with a KPI (Key Performance Indicator), such as:

   * Cycle Time too slow
   * Time to Retore too high
   * Changes take too much time
   * People are waiting for others too often
   * Too many work items "dropped through the cracks" - no accountability (no aging reports for management)

   * Too many work items for the number of resources assigned
   * Changes take too much effort
   * Costs too high
   
   * Quality (Availability) too low - not meeting SLAs/SLOs
   * Too many errors 
   <br /><br />

   The problem can be the biggest bar (the largest contribution) to causes of problems in a Pareto chart.

2. Draw a horizontal line and "ribs" to each category. When working on-site, this can be on a large white-board where participants paste sticky notes.

   A "fishbone" provides a visual approach to organize ideas into categories.

3. Define categories (buckets) to prompt brainstorming of causes:

   My six-category example: Surroundings/Environment, People/Skill, Measurement/Information, Method/Process, Machine/System/Equipment (Physical causes), Material/Supplier

   Common categories: People, Information, System, Process (PIPS)

   Common categores in services: Surroundings, Suppliers, Systems, Skill

   Common categories in manufacturing 8M's: Manpower, Money, Machine/Materials, Methods, Maintenance, Metrics, Mother Nature (culture), Management

   https://www.youtube.com/watch?v=XinW5dwuKsI

4. Brainstorm causes under each category.

   During this step, don't throw out suggestions that may have little impact on the problem.
   
   Remember this is partly a team-building exercise, where you're building fun memories.

   <a target="_blank" href="https://www.youtube.com/watch?v=igpvai40HL0">Jay calls</a>
   diagrams that are too big "whalebone" diagrams.

5. Branch out each cause by adding a leaf after asking Why (5 times).

6. Review categories to Analyze results.

   Have each team member silently assign a priority to each cause.

7. Create an Action Register to track follow-up on ideas.

   A common action is to collect more 

8. Prioritize actions

9. Define countermeasures (Step 5 of A3)


<hr />

<a name="ReverseFishBone"></a>

### Reverse Fishbone Diagram

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1659813529/linkedin-chg-mgmt-1501x575_ck9j3q.jpg"><img alt="LinkedIn Change Management" width="1501" height="575" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1659813529/linkedin-chg-mgmt-1501x575_ck9j3q.jpg"></a>

