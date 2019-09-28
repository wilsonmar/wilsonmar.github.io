---
layout: post
title: "PowerShell REST API Programming"
excerpt: "Reaching to web servies on the web gives scripts data power"
tags: [cloud, powershell, microsoft]
date: "2016-11-03"
file: "powershell-rest-api"
image:
# fig blue powershell icon-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15307772/b335270e-1b93-11e6-9552-d3022de2b9ce.jpg
  credit: PowerShell Magazine
  creditlink: http://www.powershellmagazine.com/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Being able to get and send data within a PowerShell script enables
them to be NOT static.
Communication with APIs enable PowerShell scripts to:

* Get input data

* Send SMS messages and voicemails to any phone
* Send emails
* Send calendar appointments

There are now two major flavors of how requests and responses are formatted:

* REST API, such as [PowerShellforGitHub](/powershell-github/)
* GraphQL, such as [PowerShellforGitHubGraphQL](/github-graphql/)

PowerShell has two commands to make web services calls:

* A lower-level <a href="#Invoke-RestMethod">Invoke-RestMethod</a>.
* A higher-level <a href="#Invoke-WebMethod">Invoke-WebMethod</a>.

<hr />

<a name="Invoke-RestMethod"></a>

## Invoke-RestMethod documentation

<a target="_blank" href="https://technet.microsoft.com/en-us/library/hh849971.aspx">
Documentation on Invoke-RestMethod</a>
says the cmdlet was introduced in PS 3.0 to send HTTP and HTTPS requests to Representational State Transfer (REST) web services that returns richly structured data. No short alias is specified for it.

Its general syntax:

<pre>
Invoke-RestMethod 
[-Uri] &LT;Uri> 
[-Headers &LT;IDictionary> ] 
[-Body &LT;Object> ] 
[-Certificate &LT;X509Certificate> ] [-CertificateThumbprint &LT;String> ] 
[-ContentType &LT;String> ] 
[-Credential &LT;PSCredential> ] 
[-DisableKeepAlive] 
[-InFile &LT;String> ] 
[-MaximumRedirection &LT;Int32> ] 
[-Method &LT;WebRequestMethod> {Default | Get | Head | Post | Put | Delete | Trace | Options | Merge | Patch} ] [-OutFile &LT;String> ] 
[-PassThru] 
[-Proxy &LT;Uri> ] [-ProxyCredential &LT;PSCredential> ] [-ProxyUseDefaultCredentials] 
[-SessionVariable &LT;String> ] [-TimeoutSec &LT;Int32> ] 
[-TransferEncoding &LT;String> {chunked | compress | deflate | gzip | identity} ] [-UseBasicParsing] [-UseDefaultCredentials] 
[-UserAgent &LT;String> ] 
[-WebSession &LT;WebRequestSession> ] 
[ &LT;CommonParameters>]
</pre>

HTTP requests have both a GET and POST approach.


### GET Invoke-RestMethod

Web services which do not require some registration is getting more rare nowadays.

But <a target="_blank" href="http://jdhitsolutions.com/blog/tag/invoke-restmethod/">
in this blog</a>, Jeff Hicks
found that NewEgg still has an RSS feed for their daily deals at
<a target="_blank" href="http://www.newegg.com/RSS/Index.aspx">
http://www.newegg.com/RSS/Index.aspx</a>

0. Run a basic HTTP GET in a PowerShell script containing:

   <pre><strong>
   $uri = "http://www.newegg.com/Product/RSS.aspx?Submit=RSSDailyDeals&Depa=0"
   $response = Invoke-RestMethod -Uri $uri
   $response.title
   $response.count
   $response[0] | format-list
   </strong></pre>

   BTW: Although "uri" means Universal Resource Identifier, to be
   <a target="_blank" href="https://danielmiessler.com/study/url-uri/">
   technically correct</a>,
   the inclusion of the access mechanism "http" makes it really is a URL, a type of URI.

   PROTIP: When output to a variable, show a count of how many items were returned into the 
   response variable
   so that it doesn't look like nothing happened.

   The response is overwhelming, so `format-list` is used to 
   filter out just the first item returned in the response

   PROTIP: Lists starts from zero.

   This enables us to see the names of properties:
   Published, title, link

   <pre>
103
Published : 11/3/16 4:05:46 AM
title     : $199.99 - SHIELD Series RSCM-0916B081 - 16-Channel 960H, 
            H.264-Level DVR Surveillance Kit + Eight 900TVL Cameras - Night 
            Vision Up to 65 Feet, Remote Viewing Supported (HDD Not Included)
link      : http://www.newegg.com/Product/Product.aspx?Item=N82E16881147042&nm_
            mc=OTC-RSS&cm_sp=OTC-RSS-_-Surveillance%20Security%20Systems-_-SHIE
            LDeye-_-N82E16881147042
   </pre>   

0. BLAH: I get an error from this, but it's here for future referene.

   To make the response clickable, feed the response through the 
   <a target="_blank" href="http://go.microsoft.com/fwlink/p/?linkid=293997">
   `out-gridview` cmdlet</a>
   <a target="_blank" href="https://technet.microsoft.com/en-us/library/ff730930.aspx">
   introduced with v2</a> with an alias of ogv:

   <pre><strong>
   $response | ogv -Title "Deal of the Day" -OutputMode Multiple | foreach { Start $_.link }
   </strong></pre>

   

   <pre><strong>
   [regex]$rx = "(?<currency>.)(?<price>\d+\.\d{2})\s-\s(?<item>.*)"
   </strong></pre>


0. Another HTTP GET example (that no longer works) is:

   <pre><strong>
   $url="http://www.seismi.org/api/eqs"
   $response = Invoke-RestMethod -Uri $uri
   # Extract child items:
   $people = $response.items
   </strong></pre>

   This returns:

   <pre>   
count earthquakes                                                              
----- -----------                                                              
21740 {@{src=us; eqid=c000is61; timedate=2013-07-29 22:22:48; lat=7.6413; lo...
   </pre>



### POST Invoke-RestMethod 

POST involve sending both a body and headers.

   <pre>
   $person = @{
      first='joe'
      lastname='doe'
   }
   $body = (ConvertTo-Json $person)
   $hdrs = @{}
   $hdrs.Add("X-API-KEY","???")
   $hdrs.Add("X-SIGNATURE","234j123l4kl23j41l23k4j")
   $hdrs.Add("X-DATE","12/29/2016")
   Invoke-RestMethod -Uri $url -Method Post -Body $body -ContentType 'application/json' -Headers $hdrs
   </pre>

   ConvertTo-Json 

   The above on several lines is easier to read than one long line:

   <pre>
   $hdrs = @{"X-API-KEY"='???'; "X-SIGNATURE"='234j123l4kl23j41l23k4j'; X-DATE"='12/29/2016'"}
   </pre>

   The power of Powershell vs wget are such helpers and how
   it can fluidly turn input into objects, 
   and then to manipulate those objects in a granular way.
   
   The API-KEY is obtained from the service's website during sign-up.

   WARNING: If `-ContentType 'application/json` is not added to REST calls,
   an error message is likely because when POST is specified,
   Invoke-RestMethod sets the content type to "application/x-www-form-urlencoded"
   for sending out forms, not REST calls.


### Base64 Encoding for Authentication

See 
<a target="_blank" href="https://devops.profitbricks.com/tutorials/use-powershell-to-consume-a-profitbricks-rest-api/">
The example at Profitbricks</a>
for an example.
You won't be able to run the code if you don't have an account.

But you'll want to 
<a target="_blank" href="https://www.profitbricks.co.uk/signup">
get an account</a> because it's a great service
that is convenient and enables you to work with multiple clouds.


### Authentication

For session authentication with cookies, see 
https://community.qualys.com/docs/DOC-5594
based on 
https://www.qualys.com/docs/qualys-api-v2-user-guide.pdf

0. Define credentials in environment variables:

   <pre>
$username = 'me_user'  
$password = 'me_password'  
$target = "Daily Whatsis Roundup"  
   </pre>

0. Obtain a session variable `sess`

   <pre>
$hdrs = @{"X-Requested-With"="powershell"}  
$base = "https://qualysapi.qualys.com/api/2.0/fo"  
$body = "action=login&username=$username&password=$password"  
Invoke-RestMethod -Headers $hdrs -Uri "$base/session/" -Method Post -Body $body -SessionVariable sess
   </pre>

   This doesn't work anymore
   https://community.qualys.com/docs/DOC-4523#jive_content_id_Windows_Powershell_30

   <pre>
   $username = "username"  
   $password = "password"  
   $password_base64 = ConvertTo-SecureString $password -AsPlainText -Force  
   $creds = New-Object System.Management.Automation.PSCredential ($username, $password_base64)  
   $headers = @{"X-Requested-With"="powershell"}  
   $url = "https://qualysapi.qualys.com/about.php"  
   Invoke-RestMethod -Headers $headers -Uri $url -Method Post -Credential $creds -OutFile response.xml  
   </pre>

### Basic Authentication to GitHub

<a target="_blank" href="">
The code below</a>
makes a request sending the credentials in an Authorization header:

'Basic [base64("username:password")]'

In PowerShell that would translate to something like:

<pre>
function Get-BasicAuthCreds {
    param([string]$Username,[string]$Password)
    $AuthString = "{0}:{1}" -f $Username,$Password
    $AuthBytes  = [System.Text.Encoding]::Ascii.GetBytes($AuthString)
    return [Convert]::ToBase64String($AuthBytes)
}
$BasicCreds = Get-BasicAuthCreds -Username "Shaun" -Password "s3cr3t"
Invoke-WebRequest -Uri $GitHubUri -Headers @{"Authorization"="Basic $BasicCreds"}
</pre>


### Ignore Self-Signed Certs

http://www.datacore.com/RESTSupport-Webhelp/using_windows_powershell_as_a_rest_client.htm
notes
When using Windows PowerShell as a client, to avoid SSL Certificate trust issues if using HTTPS, enter this function in the PowerShell window:

<pre>
function Ignore-SelfSignedCerts
{
    try
    {
        Write-Host "Adding TrustAllCertsPolicy type." -ForegroundColor White
        Add-Type -TypeDefinition  @"
        using System.Net;
        using System.Security.Cryptography.X509Certificates;
        public class TrustAllCertsPolicy : ICertificatePolicy
        {
             public bool CheckValidationResult(
             ServicePoint srvPoint, X509Certificate certificate,
             WebRequest request, int certificateProblem)
             {
                 return true;
            }
        }
"@
        Write-Host "TrustAllCertsPolicy type added." -ForegroundColor White
      }
    catch
    {
        Write-Host $_ -ForegroundColor "Yellow"
    }
    [System.Net.ServicePointManager]::CertificatePolicy = New-Object TrustAllCertsPolicy
}
Ignore-SelfSignedCerts
</pre>


<a name="Invoke-WebRequest"></a>

## Invoke-WebRequest to get file

Here is an example of downloading a file from the internet into whatever path is specified
in the environment variable $Temp.

<pre>
echo "$Temp=${env:Temp}"
Invoke-WebRequest -Uri 'https://oneget.org/nuget-anycpu-2.8.3.6.exe' -OutFile "${env:Temp}\nuget.exe"
</pre>


<a target="_blank" href="https://blogs.technet.microsoft.com/heyscriptingguy/2013/10/21/invokerestmethod-for-the-rest-of-us/">
The Hey Scripting Guy article from 2013</a>
by Doug Finke, author of 
<a target="_blank" href="http://shop.oreilly.com/product/0636920024491.do">
Windows PowerShell for Developers</a>,
offered this example, which now returns a "401 (gone)" because it's deprecated.
Nevertheless, try the syntax on a working API:

0. Filter the response through the `PSCustomObject` cmdlet and format it:

   <tt><strong>
   Invoke-RestMethod -Uri "https://gdata.youtube.com/feeds/api/videos?v=2&q=PowerShell" | foreach {[PSCustomObject]@{Title=$_.Title; Author=$_.Author.name; Link=$_.content.src}} | Format-List
   </strong></tt>



## Resources

https://www.jokecamp.com/blog/invoke-restmethod-powershell-examples/

http://www.powershellmagazine.com/2014/12/24/using-azure-resource-management-rest-api-in-powershell/

* Lee Holmes, author of 
<a target="_blank" href="http://shop.oreilly.com/product/0636920024132.do">
 Windows PowerShell Cookbook, 3rd Edition</a>.

* http://www.powershellatoms.com/basic/download-file-website-powershell/

https://www.youtube.com/watch?v=U3Ne_yX4tYo&index=1&list=PL5uoqS92stXioZw-u-ze_NtvSo0k0K0kq
PowerShell Excel Module - ImportExcel Playlist of 5 vidoes Oct 5, 2017 
by Doug Finke


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
