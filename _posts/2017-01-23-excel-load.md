---
layout: post
title: "Excel Load automation"
excerpt: "Load data into Excel automatically using a script"
tags: [IoT, Microsoft, Xamarin]
date: "2017-01-23"
file: "excel-load"
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

This article is about loading data into Excel (a part of the Microsoft Office package)
using automated means.

This page provides PROTIPs that highlight hard-won experience not available elsewhere.

The versions of Excel:

   * 1998/2003 has a different data model, so used .xls while newer versions went to .xlsx,
   which contains XML instead of a custom format.
   * 2010
   * 2013 on PC
   * 2016 on Mac

## References

The <a target="_blank" href="https://msdn.microsoft.com/en-us/library/bb149081(office.12).aspx"> 
Excel 2010 Object Moodel Reference in MSDN</a>


## Import Data into Excel

0. Create a .csv (Command separate value) file. It's a universally accepted format.

   CAUTION: Text cells containing a comma need to be between double quotes.

   <a target="_blank" href="https://blogs.technet.microsoft.com/heyscriptingguy/2014/02/04/use-powershell-to-create-csv-file-to-open-in-excel/">
   PowerShell can create CSV files</a>.

0. Double-click the .csv file for Excel to open it because 
   the Excel program is registered to it during installation.
 
   The data becomes embedded into a tab inside Excel.

   See: <a target="_blank" href="http://stackoverflow.com/a/554841/1431750">
   Opening semi-colon delimited CSV file</a>.

   http://www.homeandlearn.org/open_a_text_file_in_vba.html


   ### Record chart making 

0. TODO: Set recording.

   VBA code.

   <a target="_blank" href="https://technet.microsoft.com/en-us/library/hh848796.aspx">
   VB to PowerShell conversion Guide</a>

0. Create the chart.
0. Change the Headings and Footings.

   See https://blogs.technet.microsoft.com/heyscriptingguy/2009/01/15/hey-scripting-guy-how-can-i-modify-the-footers-of-an-office-excel-spreadsheet/

0. Edit the script.

   <a target="_blank" href="https://blogs.technet.microsoft.com/heyscriptingguy/2008/11/27/hey-scripting-guy-how-can-i-pull-server-diagnostic-information-and-have-it-saved-in-an-excel-spreadsheet-with-a-chart/">
   This is a sample PowerShell script</a> 
   named GetWmiPerformanceDataCreateExcelChart.ps1
   that creates Excel chart from Windows Diagnostic data.

   Others from <a target="_blank" href="https://technet.microsoft.com/library/ee332540.aspx">
   the archive</a>.

0. TODO: Run the script to create a new chart based on data using VBA.

http://blogs.technet.com/b/heyscriptingguy/archive/tags/microsoft+excel/windows+powershell/
using Windows PowerShell to manipulate Microsoft Excel. 


   ### Change data

   CHALLENGE: Change the data in a sheet already containing data and charts.

0. Open new data in a new spreadsheet.
0. Copy and paste the data from another sheet.
 
   To do the above automatically:

http://sitestory.dk/excel_vba/csv-file-import.htm

https://gallery.technet.microsoft.com/office/d2b1809b-e4f4-4688-bb11-9eb47a702ca0
This script (posted 8/10/2010) modifies an existing embedded chart in an existing Microsoft Excel spread sheet.

   <pre>
$chartType = "microsoft.office.interop.excel.xlChartType" -as [type] 
$strPath="C:\fso\test.xlsx" 
$objExcel=New-Object -ComObject Excel.Application 
$objExcel.Visible=$true 
$WorkBook=$objExcel.Workbooks.Open($strPath) 
$worksheet = $WorkBook.Sheets.Item(1) 
$chart = $worksheet.chartobjects(1).chart 
$chart.chartType = $chartType::xl3DLine 
$chart.HasTitle = $true 
$chart.ChartTitle.Text = "My Groovy Chart"
   </pre>

   NOTE: Charts embedded in a Excel spread sheet require the chartobjects property to return the chart container from the spreadsheet. Then use the chart property from the chart container to retrieve a chart object. 
   This is standard object oriented programing (oop). 


https://blogs.technet.microsoft.com/heyscriptingguy/2010/09/09/copy-csv-columns-to-an-excel-spreadsheet-by-using-powershell/

https://www.datacamp.com/community/tutorials/r-tutorial-read-excel-into-r#gs.DDoO4rk

https://support.office.com/en-us/article/Update-the-data-in-an-existing-chart-06b76016-e9e3-49fe-8dfc-ca50beeed6e8

## PowerShell

<a target="_blank" href="https://blogs.technet.microsoft.com/heyscriptingguy/2006/09/08/how-can-i-use-windows-powershell-to-automate-microsoft-excel/">
This blog</a> provides this sample PowerShell 3.0 script:

   <pre>
$a = New-Object -comobject Excel.Application
$a.Visible = $True
$b = $a.Workbooks.Add()
$c = $b.Worksheets.Item(1)
$c.Cells.Item(1,1) = “A value in cell A1.”
$b.SaveAs(“C:\Scripts\Test.xls”)
$a.Quit()
  </pre>

NOTE: PowerShell can create Excel files using its Out-GridView command.
See https://blogs.technet.microsoft.com/heyscriptingguy/2014/01/10/powershell-and-excel-fast-safe-and-reliable/


## Python

http://stackoverflow.com/questions/25235743/import-csv-file-into-an-existing-excel-spreadsheet-save-that-file-and-repeat-m


