---
layout: post
date: "2024-01-28"
file: "dashboards"
title: "Dashboards"
excerpt: "Tips and tricks to display metrics in dashboards that are easy to understand actionable"
tags: [DevSecOps, Metrics]
image:
 # grafana-metrics-1900x500.jpg
  feature: https://user-images.githubusercontent.com/300046/74598239-fc099380-503b-11ea-9531-87f998afb90f.jpg
  credit: Marcio Sete
  creditlink: https://medium.com/@marciosete/the-four-types-of-metrics-e4c4f477dbaa
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article are my notes about Grafana, marketed at <a target="_blank" href="https://www.grafana.com/">Grafana.com</a>, with documentation at <a target="_blank" href="https://grafana.com/docs/grafana/latest/">https://grafana.com/docs/grafana/latest</a>

{% include whatever.html %}

We use a series of dashboard views that are related to each other, to make data easy to understand and actionable.

1. The <strong>Overview</strong> view provides a <strong>high-level</strong> view of the <strong>status</strong> of the entire system, showing a few 

   ### Status summary colors and shapes

   The main or first view <strong>summarizes</strong> the status of <strong>key metrics</strong> important to the user: <strong>totals</strong> and <strong>averages</strong>:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1706568159/grafana-k6-openmct-A_fdxy9v.png"><img alt="grafana-k6-openmct-A.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1706568159/grafana-k6-openmct-A_fdxy9v.png"></a>

   PROTIP: An improvement on the view above is to make use of <strong>colors of different shades</strong> and shapes to indicate the <strong>status</strong> (rather than using colors simply divide items):

   * CIRCLE = OK = medium bluish green to accommodate those with red-green color blindness
   * DIAMOND = WARNING = light yellow 
   * SQUARE = CRITICAL = dark red
   <br /><br />

   Use a <a target="_blank" href="https://davidmathlogic.com/colorblind/#%23D81B60-%231E88E5-%23FFC107-%23004D40"><strong>accessible color palette</strong></a> that accommodates those with <a target="_blank" href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness/types-color-vision-deficiency">different types of CVD (Color Vision Deficiency)</a> (aka <a target="_blank" href="https://www.wikiwand.com/en/Color_blindness#Types">Color Blindness</a>):

   * <a target="_blank" href="https://personal.sron.nl/~pault/">website</a> by Paul Tol has a <a target="_blank" href="https://personal.sron.nl/~pault/data/colourschemes.pdf">Color Schemes</a> document.

   PROTIP: Each number should be clickable to drill down to the next level of detail.

1. Clickable

   Click each number to drill down to the next level of detail.

1. Comparison lines in trend lines

   ## Trend Line Graphs

   The line graph at the lower-right uses solid and dashed lines to indicate different aspects tracked:
   
   * Solid lines
   * Dotted lines
   * Dashed lines
   <br /><br />

   <a target="_blank" href="https://www.tableau.com/blog/how-create-collapsible-menu-container-tableau">This example</a> uses a "bulb" to illustrate higher or lower values than anticipated:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1706566918/dashboard-bulbs-2018x1164_u1k8nv.png"><img alt="dashboard-bulbs-2018x1164.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1706566918/dashboard-bulbs-2018x1164_u1k8nv.png"></a>

   The guidance above is how I improve <a target="_blank" href="https://www.datapine.com/live-dashboards">this dashboard view</a>:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1706571837/dashboard-cyber-1917x924_ohh7vm.png"><img alt="dashboard-cyber-1917x924.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1706571837/dashboard-cyber-1917x924_ohh7vm.png"></a>


1. Comparisons over time

   ### Tornado (Butterfly) Charts

   <a target="_blank" href="https://www.youtube.com/watch?v=SXy8D-nl2IU">VIDEO</a>:

   Tornado or "Butterfly" charts are a special type of Bar Chart.

   They are commonly used to show imbalances in populations. Age is on the vertical scale, with males on one side and females on another side. Below is a <a target="_blank" href="https://www.wikiwand.com/en/Demographics_of_China">Tornado chart of China's population in 2020</a>:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1686801822/tableau-tornado-china-2020-977x638_iuslkr.png"><img alt="tableau-tornado-china-2020-977x638.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1686801822/tableau-tornado-china-2020-977x638_iuslkr.png"><br />Click for full pop-up</a>

   It's essential to have that darker shade to highlight surpluses in each row versus the opposite sex. The narrowing at the top is expected as people age, with women outliving males. Indentations are the result of lives lost during wars and other catastrophic events. China's one-child policy began with people at 58 years old in 2020.

   Instead of males and females, the two variables in the chart below are Impact on the left and Effort (Hours to Resolve) on the right, with a breakdown by categories within each bar:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1686800571/tableau-tornado-1713x1533_tdwlz0.jpg"><img alt="tableau-tornado-1713x1533.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1686800571/tableau-tornado-1713x1533_tdwlz0.jpg"><br />Click for full pop-up</a>

   Note there is no interaction between multiple variables on such a chart.

   DataKitchen is also used to create these charts.


1. Activity dashboard:

   ### Hygieia DevOps Dashboard

   <a target="_blank" href="https://wilsonmar.github.io/devops-dashboards/">This article</a> provides a list of dashboard tools.

   <a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/24074613/8b7f7f62-0be2-11e7-9c78-867c0343fd00.jpg"><img alt="hygiea-screenshot-2848x1666.jpg" src="https://cloud.githubusercontent.com/assets/300046/24074613/8b7f7f62-0be2-11e7-9c78-867c0343fd00.jpg"><br />(Click for pop-up full image)</a>


<a name="CycleTime"></a>

## Cycle Time  

<a target="_blank" html="https://cloud.githubusercontent.com/assets/300046/24077227/fc53a15c-0c1c-11e7-9782-9514f69c6a70.png">
<img width="978" alt="tableau interactive wait times 1956x1372" src="https://cloud.githubusercontent.com/assets/300046/24077227/fc53a15c-0c1c-11e7-9782-9514f69c6a70.png"><br />Click for full pop-up</a>


## Flowcharts

Some general principles:

.1. Generally, flows go from left to right. For example, 
   * data flowing from clients on the left to back-end servers on the right
   * the left-most column is the most recent time period, and the right-most column is the oldest time period.
   <br /><br />


## Weather maps

<a target="_blank" href="https://www.yahoo.com/news/weather/">Yahoo Weather</a> uses an elegant, award-winning design:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1706569734/dashboard-yahoo-1068x878_frddn5.png"><img alt="dashboard-yahoo-1068x878.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1706569734/dashboard-yahoo-1068x878_frddn5.png"></a>

See their <a target="_blank" href="https://apps.apple.com/us/app/yahoo-weather/id628677149">iPhone/iPad app</a>
<hr />

## Resources

https://dribbble.com/search/dashboard
Thousands of dashboard designs