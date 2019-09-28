---
layout: post
title: "Histograms (and Frequency Diagrams in Excel)"
excerpt: "See your data"
tags: [apple, mac, setup]
date: "2016-05-11"
file: "histograms"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14583248/4b20c578-03d9-11e6-8f7a-c860b666bc73.jpg
  credit: Wall Street Journal
  creditlink: http://graphics.wsj.com/job-market-tracker/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


First, some definitions:

   * Histograms analyze numerical data

   * Frequency distributions analyze categorical (text) data


## Create a Histogram in Microsoft Excel 2016

   * https://www.youtube.com/watch?v=53DOu_vstvI
   
   * https://www.youtube.com/watch?v=IVhQTAF1guc

Excel 2016 has a easier way to create histograms than Excel 2013.

0. Select the category and numerical columns

0. In the Insert pane, click the Insert Statistics Chart icon.


## Category Frequency Distribution in Microsoft Excel 2013

<iframe width="560" height="315" src="https://www.youtube.com/embed/roZrH6hcnic" frameborder="0" allowfullscreen> </iframe><br /><small>This video is part of a series on statistics using Excel. Begin from 1:38</small>
<br />

### Get a unique list of values

   In the Raw Data sheet:

0. Press Ctrl+Home to get to the upper left of the Raw Data sheet.
0. Click the heading to the column you want to analyze.
0. Press Ctrl+Shift+down to highlight all the cells of the column.

0. PROTIP: Specify a <strong>range name</strong> (such as "Priority", etc.) 
   so you can refer to the same range in several functions.

0. Click Data ribbon, Advanced, Copy to another location, Unique records only, Copy to icon.
0. Scroll right beyond the last column in the sheet and click a cell there.
0. Click the Copy icon again, then OK.

   ![excel filtered unique 207x207](https://cloud.githubusercontent.com/assets/300046/25568069/1b1edd54-2dc9-11e7-9534-2775c08d0e4c.png)

0. Scroll back to the right where you specified.
0. You may need to clean up values in entries.

   * A trailing space counts as a separate value.

   * Make sure there are no blanks in the data.

0. Press Ctrl+H to do a <strong>Replace All</strong> on the errant values to fix them.
0. Delete the generated cells and
0. Repeat the above until there are no duplicates.

0. Sort or manually 					rearrange the order of items (if you have categories that don't sort, such as "Very High", "High", "Medium", "Low").


   ### Make the Frequency Distribution

0. Create Frequency, and Interval columns to the right of the unique list created.

0. In the first data cell under the Frequency heading, type a formula =COUNTIFS()
0. Click the first data cell of the category data being analyzed.
0. Press Ctrl+Shift+down to select all rows.
0. Scroll back to the distribution being built.
0. Press command to specify another parameter.
0. Click on the first cell of the unique items (the Criteria).
0. Press ) to close the formula.
0. Press Ctrl+Enter to save the formula.
0. Double-click on the lower-right corner to populate the rest

   ### Calculate total and percentages

0. Add a total in a blank row under data rows in the Frequency column.
0. Format the total cells with borders top and bottom.
0. Click the cell holding the total and press <strong>Alt+=</strong>.

0. PROTIP: Verify that the total matches the number of rows in the data being analyzed.

0. Create a percentage formula. Put a $ in front of the row number.
0. Double-click on the lower-right corner of the first formula to populate the rest of the rows.
0. Highlight the Percentage cells and format it as Percents.

   ### Bar Chart

0. Highlight the category data and percent, including the headings.
0. Click Insert tab, Stacked bar.
0. Right-click the categories to select Format Axis.
0. Check Categories in reverse order and close the pane.
0. Click on the title and change it to "Priority distribution" or whatever.

   ### Add totals

0. A total at the bottom of counts makes it easier to verify whether you

   ### Another Category Distribution

0. Repeat the above for another distribution, if desired.





## Create a Histogram in Microsoft Excel 2013

   * https://www.youtube.com/watch?v=Giewd9yH4q0

   * https://www.youtube.com/watch?v=YfVu7xGHgnA

   * https://www.youtube.com/watch?v=SDUgEuFrJ3o



0. Drag the lower-right corner to populate the other rows under Bin.

   * Leave the last row empty so Excel uses it for anything larger than the last number.

0. Click in the first data cell under Frequency heading, 
   and drag the lower-right corner to populate the other rows until the last Interval row.

0. Press Ctrl+Shift+Enter to auto-populate (as an array).

0. In the first data cell under the Frequency heading, type <tt>=frequency(</tt>.

0. Click the first data cell under the value column (C) as the first parameter.

0. Press comma.

0. Click the first data cell under the Bin heading (K), then click on the last cell in the column.

   * To allow for easier...

0. Press Ctrl+Shift+Enter.


   ### Adjust default gaps

0. Double-click on one of the columns in the generated chart for the Series Options UI.

0. Drag Gap Width to zero.

