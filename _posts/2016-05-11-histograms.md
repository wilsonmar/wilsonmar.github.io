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

A histogram is a bar graph (visualization) that shows the occurrence of values in each of several <strong>bin ranges</strong>.
Histograms provide a visualization of <strong>numerical data</strong>.<br />
Frequency distributions visualize <strong>categorical (text)</strong> data.

Later on this page are steps to create a Histogram manually in macOS and Windows Excel 2016 and prior versions.

Throughout this page are "PROTIP" flags that highlight advice from experience not available elsewhere.

### A dynamic Histogram

My favorite approach is to change a pre-defined spreadsheet which includes coding to provide a dynamic slider to control how many bins are shown:

   ![Histogram-dynamic](https://user-images.githubusercontent.com/300046/82109413-de0f0600-96f2-11ea-809d-e046bf5dee01.gif)

1. Click to download and open the Histogram-Dynamic.xls Excel file at:

   <a target="_blank" href="https://github.com/wilsonmar/wilsonmar.github.io/downloads/Histogram-Dynamic.xlsx">
   https://github.com/wilsonmar/wilsonmar.github.io/downloads/Histogram-Dynamic.xlsx</a>
   
   It contains a <strong>pre-made</strong> histogram which you don't have to construct from scratch. The Excel sheet is from/described <a target="_blank" href="https://www.excelcampus.com/charts/dynamic-histogram/">here</a>, based on <a target="_blank" href="http://peltiertech.com/Excel/Charts/DynamicColumnChart1.html">Jon Peltier's techniques</a>:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/82134608-905bd180-97b6-11ea-82d9-464db1e12ddf.jpg"><img alt="histogram-freq-formula-1035x458.jpg" src="https://user-images.githubusercontent.com/300046/82134608-905bd180-97b6-11ea-82d9-464db1e12ddf.jpg"></a>

   Colored cells are where values and formulas are changed for alternate data.

   (This spreasheet contains only functions and no VBA macro code which trigger scary messages when loaded.)

1. Drag the slider all the way right to see the most number of columns (10 columns), which is a good segmeentation for our base-10 numbering system.

   Data in the sample spreadsheet are ages in a human population, which has a known range of values.
   Cells C4 and C5 (0 and 120) display those minimum and maximum values of bars in the Histogram.
   BTW, this is why someone around 60 years old is called "Middle Aged".

1. Drag the slider all the way left to see the least number of columns (just 2 columns), which basically divides the population by half according to the range between 0 and 120, which is 60.

   Notice that when the slider is moved, the Bin Count and Bin Size (B5 and B6) changes,
   as well as data with the "Chart Data" box. As the Bin Count changes, different rows are used in the Chart Data box.

1. Click on cell F5. Notice it displays the maximum values within the data range named. Cell F4 displays the minimum values in the same range.

   The "BinsArray" column contains the upper limit for each step in the Histogram.

   To display a Histogram of your own data, you would need to change the range name specified in those formulas and focumulas in the Frequency table.


   ### Substitute your own data

   The spreadsheet comes with an alternate set of data, modified from <a target="_blank" href="???">the Histogram-Dynamic.xls Excel file</a>. To use it, <a href="#ChangeData">click here to skip</a>
   instructions below to insert your own data:

1. In File, open your Excel file.
1. Click the column heading of the entire column you want to copy.
1. Press command+C to copy the data highlighted to your invisible Clipboard.

1. Press command+~ to switch to the sample spreadsheet.

1. Click the "Data" tab at the bottom.
1. Click on cell heading "D". 

   We want to end up selecting a section of data spanning two columns (C and D).

1. Press command+V to Paste from Clipboard. Wait until the spinner icon goes away.

   The first row contains column names.

1. Click on cell D2 (under the heading) and press shift+command with down arrow to select all the data in that column. If there are blanks in the data, you would need to continue pressing to select the next group.
   Continue holding down shift+command with left arrow to select the (empty) C column as well.
1. Manually write down somewhere the row number of the last cell.
1. Press command+C to copy into Clipboard.

1. Click on the Range Name in the Excel bar, and (if it doesn't already exist) change it to 

   <tt>Repo_mb</tt>
   
1. Press Tab key to set it.

1. Right-click within the selected cells to select "Define Name..." for a pop-up dialog.
1. Click the "+" icon at the lower-left corner to create a name Excel obtained from the first row.

   ![histogram-names-445x203](https://user-images.githubusercontent.com/300046/82126512-82805f00-976a-11ea-89a3-bcb8c7b0f688.jpg)

1. Double-click on the name and press command+C to copy the name to your Clipboard:

   <tt>Repo_Size_mb</tt>

1. Click OK to dismiss the dialog.   

1. Press command+shift+S to save the file, changing the file name. Click Save.


   <a name="ChangeData"></a>

   ### Change Histogram to alternate data

1. Click the "Histogram" tab at the bottom.
1. Click on cell F4. In the formula, double-click "tblData" and press command+V to paste in its place the "Repo_mb" Range Name.
1. Click on cell F5. In the formula, double-click "tblData" and press command+V to paste in its place the "Repo_mb" Range Name.

   ![histogram-delete-row-207x206](https://user-images.githubusercontent.com/300046/82128069-59190080-9775-11ea-8f0b-15067d57da91.jpg)

1. Click on cell C5 to change the maximum value included in the Histogram. PROTIP: Make the maximum value in the Histogram larger than the largest value in the population which is also easily divisible. For example, the maximum population value of 40,034 would have a Histogram max. value like 50,000.

1. Click on cell C9 to change the Chart Title.
1. Triple-click the text to select it all to type over your text.

   ### Edit Frequency Array

1. Click on cell E13 under the Frequency heading. Notice its formula:

   <tt>{=FREQUENCY(tblData[Age],C13:C22)}</tt>

   "tblData" is the Range Name.<br />
   "[Age]" is the Column Name.<br />
   "C13:C22" is the Bin Array.

   "{  }" designates an <strong>array</strong> saved by pressing <strong>shift+control+return</strong>.

   On MacOS, to enable the key to actually control functions in Excel, go to System preferences > Mission Control, and disable shortcuts for Mission control.
   
1. On macOS, press <strong>control+U</strong> to reveal the bin_array ("C13:C22").

   PROTIP: Among <a target="_blank" href="https://support.office.com/en-us/article/rules-for-changing-array-formulas-8a80c2c1-44c1-42c3-88c1-37a3a7c2d367">
   Microsoft's Rules</a> is that if you try to change or delete cells in an array formula, you'll see a "You cannot change part of an array" error.

1. To <a target="_blank" href="https://support.office.com/en-us/article/delete-or-remove-a-formula-193dbbed-6fcf-4f07-9119-5acff81b89c5">delete the entire formula</a>: click a cell within the array. In the Home tab, if there is "Editing", click that. Click the icon to the right of "Find & Select", "Go To Special".

   <img width="193" alt="histogram-gotospecial" src="https://user-images.githubusercontent.com/300046/82133740-bed4af00-97ac-11ea-8544-05f2e2afc18d.png">

1. Select "Current Array", then OK. Now you can press Delete on the keyboard.

   ### Rebuid the array

1. Click the top cell of the Frequency array (E13).
1. Hold the shift key and click the last cell of the Frequency array, which is one more row than the bins for the <strong>spillover</strong> row.

   NOTE: The spillover row's value is not displayed in the Histogram (which is the reason why it exists).

1. Click on the formula bar (to the right of the "fx" icon).
1. Copy the formula below and paste it in the formula bar:

   <tt>=FREQUENCY(Repo_Size_mb,C13:C22)</tt>

   You know you have it right when the bins array is highlighted in blue:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/82134608-905bd180-97b6-11ea-82d9-464db1e12ddf.jpg"><img alt="histogram-freq-formula-1035x458.jpg" src="https://user-images.githubusercontent.com/300046/82134608-905bd180-97b6-11ea-82d9-464db1e12ddf.jpg"></a>

1. Press <strong>shift+command+return</strong> to save the array.

   ### Adjust ranges

   PROTIP: The special feature of the sample spreadsheet is that if there are a few extremely large numbers (outliers) at the leftmost or rightmost column that would distort the analysis about the remainder of the population, exclude them by changing the value in cells C4 and C5, which define the minimum and maximum values of data presented in the Histogram.

 1. Too many zero-valued

1. If you prefer to remove extremely large (outlier) values permanently, right-click on F5 to select Copy of the value. Switch to the "Data" sheet and command+F to find that value. Right-click on the value to select "Delete...". Select 



   ### Range Names

1. Type in a new name in the box under heading "Enter a name for the data range:".
1. Click OK to dismiss the dialog, which creates the name range.

   For rngCount, the range of cells contains:

   =OFFSET('C:/Users/Jon/Dropbox/Excel Campus/Posts/Dynamic Histogram/[Copy of Dynamic Histogram.xlsx]Histogram'!$K$13,1,0,'C:/Users/Jon/Dropbox/Excel Campus/Posts/Dynamic Histogram/[Copy of Dynamic Histogram.xlsx]Histogram'!$G$5,1)

   For rngGroups, the range of cells contains:

   =OFFSET('C:/Users/Jon/Dropbox/Excel Campus/Posts/Dynamic Histogram/[Copy of Dynamic Histogram.xlsx]Histogram'!$J$13,1,0,'C:/Users/Jon/Dropbox/Excel Campus/Posts/Dynamic Histogram/[Copy of Dynamic Histogram.xlsx]Histogram'!$G$5,1)


For more about dynamic named ranges using both the OFFSET and INDEX functions, see <a target="_blank" href="http://www.myonlinetraininghub.com/excel-dynamic-named-ranges">Mynda Treacy's article</a>.


<hr />

Different versions of Excel have different procedures.
Previous versions of Excel had a "Data Analysis Tookpak" which must be enabled in order for the FREQUENCY and other functions to be available.

### Create a Histogram in Microsoft Excel 2016

Unlike previous versions, Excel 2016 has a easier way to create histograms with its "histogram maker" as a built-in chart.

1. To begin, have the data you want to use in your histogram into a worksheet.

   If you opened a .csv file, save the file As a "Excel Worksheet (.xlsx)".

1. Click to highlight the entire dataset.
1. Click the Insert tab.

1. Click the Histogram icon or select Recommended Charts and scroll down to select the Histogram chart.

   <img width="276" alt="histogram-insert" src="https://user-images.githubusercontent.com/300046/82129250-9766ed80-977e-11ea-9bcc-0b6cb5a37496.png">

1. Mouse over a number in the vertical axis until "Vertical Axis" appears, then right-click to select "Format Axis..." to open the Format Axis pane.
1. Select Categories to display text categories.
1. Select Bin Width to customize the size of each bin.
1. Select Number of Bins to define a specific number of bins displayed.
1. Choose Overflow Bin or Underflow Bin to group above or below a specific number. 
1. Close the Format Axis pane when you are done customizing the histogram.<a target="_blank" href="https://www.myonlinetraininghub.com/excel-histogram-charts-and-frequency-function">*</a>

   ![histogram-cum](https://user-images.githubusercontent.com/300046/82129263-a483dc80-977e-11ea-8b7d-c46b3b49dca1.png)

1. Save the file.


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

## References

   * https://www.youtube.com/watch?v=53DOu_vstvI   
   * https://www.youtube.com/watch?v=IVhQTAF1guc
   <br /><br />
   * https://www.exceltip.com/tips/histograms-in-excel.html

   * http://www.agentjim.com/MVP/Excel/2016HistogramMac.html

* https://www.exceltip.com/advanced-data-visualization-in-excel/4-creative-target-vs-achievement-charts-in-excel.html

https://www.youtube.com/watch?v=UASCe-3Y1to
How To... Plot a Normal Frequency Distribution Histogram in Excel 2010
by Eugene O'Loughlin
