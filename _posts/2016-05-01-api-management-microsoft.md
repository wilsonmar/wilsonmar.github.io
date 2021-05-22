---
layout: post
title: "API Management by Microsoft Azure"
excerpt: "SaaS-only, proprietary. Get it for .NET"
tags: [API, devops, evaluation, Microsoft, Azure]
date: "2021-05-14"
file: "api-management-microsoft"
image:
# pic easter island single statue 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15209671/b796b60c-17ef-11e6-8561-07a7b012ebb8.jpg
  credit: Exodux Travels
  creditlink: http://www.exodustravels.com/chile-holidays/discover/discover-chile/aae-84441#gallery
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Microsoft on Azure is one of several [API management/governance vendors I evaluated](/api-management-evaluation/).

"Publish, manage, secure, and analyze your APIs in minutes"
is Microsoft's tag line at
<a target="_blank" href="https://azure.microsoft.com/en-us/services/api-management/">
Microsoft's API Management home page</a> (Service Overview).

Microsoft's service is based on its October 23, 2013
acquisition of APIphany (based in Wash. DC).

<a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/api-management-get-started/">Documentation</a>
is published from markup text
<a target="_blank" href="https://github.com/Azure/azure-content/blob/master/articles/api-management/api-management-get-started.md">in a GitHub</a>
which directs people to the 
<a target="_blank" href="https://manage.windowsazure.com/@jetbloomhotmail.onmicrosoft.com#Workspaces/ApiManagementExtension/services"> classic portal
at manage.windowsazure.com</a> rather than the newer
<a target="_blank" href="https://portal.azure.com/">
portal.azure.com</a> site using Azure Resource Manager (ARM).

   NOTE: There is no Issues tab in their GitHub.

* The roadmap is not public.

* <a target="_blank" href="https://feedback.azure.com/forums/248703-api-management?filter=top&page=1">
   Issues with the API service</a>
   where each public can allocate 25 voting points among proposals.

   The top request (May 2016) is 
   <a target="_blank" href="https://blogs.msdn.microsoft.com/webdev/2015/09/04/introducing-microsoft-asp-net-webhooks-preview/">
   Web Hooks in ASP.NET</a>, 
   a <a target="_blank" href="http://docs.asp.net/projects/aspnetwebhooks/en/latest/">
   set of Nuget packages</a>
   for web apps to send and receive WebHooks from external services using a common HTTP pattern. 
   http://neelbhatt2015.blogspot.in/2015/12/webhooks-in-aspnet-visual-studio.html
   This won’t get the scale, performance, or analytics Azure Event Hubs provides, though.

* <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/api-management/">
  The pricing page</a> has these levels:


   there is no on-premises deployment option available at this time.

### Create Publisher portal

0. [Get a Microsoft Azure account](/azure-cloud/)
0. Create a Resource Group.
0. Specify Scale: Developer or Standard.

   Standard tier can go up to 4 instances to handle 800 million calls/month.
   QUESTION: No auto-scaling?

0. TODO: Custom SSL cert
0. TODO: Custom domain (developer.itworks.com)


### Create service

0. Select service:

   <img width="1077" alt="azure-api-create-2154x508" src="https://cloud.githubusercontent.com/assets/300046/15197994/da4f767e-1791-11e6-9cc6-f54e0f8abde7.png">

0. Click Create.
0. Specify the prefix to `.azure-api.net` (such as `itw1`).
0. Select subscription (Free Trial, etc.).
0. Select Region.

0. Specify Organization name.
0. Specify Administrator Email.
0. Click check icon.

0. Use browser to visit the page, such as 
   <a target="_blank" href="https://itw1.portal.azure-api.net">
   https://itw1.portal.azure-api.net</a>

0. Edit look and feel by clicking on the edit icon at the upper left.

   <img width="574" alt="api-azure-styling" src="https://cloud.githubusercontent.com/assets/300046/15210049/a45af18c-17f1-11e6-8978-c61e5b2035ff.png">

0. TODO: Edit site title (instead of "Azure Api Management API").

   <img width="161" alt="api-azure-admin" src="https://cloud.githubusercontent.com/assets/300046/15210050/a45d19d0-17f1-11e6-9623-2395c52b5865.png">

### Create Gateway

0. Click Import API in publisher portal dashboard.
0. Select From URL.
0. Select Specification format: <strong>Swagger</strong> (no RAML).
0. In Specification document URL field, paste 
   <a target="_blank" href="http://calcapi.cloudapp.net/calcapi.json">http://calcapi.cloudapp.net/calcapi.json</a>.
0. Provide a Web API URL suffix, e.g. 'calc'.
0. Type 'Starter' in the products field to add your API to the 'Starter' product.

   NOTICE: 

   https://itw1.azure-api.net/calc

0. Click Save.
0. Click Operations tab.

   Notice the GET Add, Divide, Multiply, Substract two integers.

### Policy scope

* Policy statements
* Allow cross domain calls
* Authenticate with Basic
* Authenticate with client certificate
* Check HTTP header
* Control flow
* Convert JSON to XML
* Convert XML to JSON
* CORS
* Find and replace string in body
* Forward request to backend service
* Get from cache
* Get value from cache
* JSONP
* Limit call rate per key
* Limit call rate per subscription
* Log to EventHub
* Mask URLs in content
* Remove value from cache
* Restrict caller IPs
* Return response
* Rewrite URL
* Send one way request
* Send request
* Set backend service
* Set body
* Set context variable
* Set HTTP header
* Set query string parameter
* Set request method
* Set status code
* Set usage quota per key
* Set usage quota per subscription
* Store to cache
* Store value in cache
* Validate JWT
* Wait for...

Examples:

<a target="_blank" href="https://github.com/Azure/api-management-samples/tree/master/policies">
https://github.com/Azure/api-management-samples/tree/master/policies</a>

   *   Hide response data based on product name.policy.xml
   *   Pre-authorize requests using validate-jwt.policy.xml
   *   Send context information to the backend service.policy.xml
   *   Set cache duration using cache control header.policy.xml


### Open the developer portal 
0. Click on APIs.
0. Pick Calculator API from the list on the left.
0. Click on Open Console for any API.
0. In the console, enter values for the parameters and hit the HTTP <operation> button.


0. Search

   NOTE: API Management is in category "Web + Mobile".

"Take any API and publish it to developers and partners in minutes

   * Provide API documentation and an interactive console
   * Throttle, rate limit and quota your APIs
   * Monitor the health of your APIs and quickly identify errors
   * Bring modern formats like JSON and REST to existing APIs
   * Connect to on-premises systems and publish globally
   * Gain analytic insights on how your APIs are being used

http://azure.microsoft.com/marketplace/partners/microsoft/apimanagement/
marketplace

* Service Overview
* Getting Started
* Documentation

0. Click Create to open a new window.

When created, the Echo API is created as a sample.

http://apidemo.azure.api.net/echo

http://echo.cloudapi.net/calc/



### Authentication

<a target="_blank" href="https://www.youtube.com/watch?v=z2pU_aHphbw&index=9&list=PL8nfc9haGeb4khJEFcDU9Lluit5nYlB3a">
Delegating User Authentication and Product Subscription to a 3rd Party</a>


### Developer Portal Setup

0. <a target="_blank" href="https://channel9.msdn.com/Blogs/Windows-Azure/Adding-Developer-Portal-functionality-using-Templates-in-Azure-API-Management">
   Add discussion board and ratings</a>

### Swagger import 

A Swagger 2.0 doc can be imported, but the doc MUST contain Host, BasePath, Schemes properties. Otherwise, it won't get imported:
No message. It just hangs with "working..". 

### Analytics:

In the Summary graph, detail for a point in time can be obtained with mouse-over:

<img src="https://acom.azurecomcdn.net/80C57D/cdn/mediahandler/docarticles/dpsmedia-prod/azure.microsoft.com/en-us/documentation/articles/api-management-get-started/20160415071221/api-management-mouse-over.png">

   * Response time (in ms)
   * Bandwidth usage KB
   * Successful? Popular === Volume of <strong>calls</strong>.
   * <strong>Errors</strong> === Number of calls blocked due to limits?

   Notice the pre-defined filters for Today, yesterday, Last 7 Days,
   Last 30 Days, Last 90 Days


<img src="https://acom.azurecomcdn.net/80C57D/cdn/mediahandler/docarticles/dpsmedia-prod/azure.microsoft.com/en-us/documentation/articles/api-management-get-started/20160415071221/api-management-analytics-overview.png">

   Activity chart provides reports that drill down on the specific activity by developer, product, API, and operation.

What about:

   * Specific translations performed
   * Specific policies violated
   * metrics by geography
   * Correlation of two metrics (response time vs bandwidth scattergram)

   * Issues over time

### Videos

My recommendation for the sequence to view
<a target="_blank" href="https://azure.microsoft.com/en-us/documentation/videos/index/?services=api-management"> videos about API Management</a>

0. <a target="_blank" href="https://www.youtube.com/watch?v=rml1AOykz6o">
   Introducing Azure API Management</a>
   TechEd North America 2014
   by Josh Twist (@joshtwist)

   * Business models
   * Engaging developers: Time to First Successful call
   * Make legacy API (SOAP XML) modern (REST JSON)
   * Understand their behavior with monitoring

0. <a target="_blank" href="https://www.youtube.com/watch?v=NSMc5YuKmb4">
   Introduction to API Management on Microsoft Azure</a>
   at TechEd Europe 2014

0. <a target="_blank" href="https://www.youtube.com/watch?v=6GmQvzZOpxY">
   Microsoft Azure API Management Master Class: In Depth for Fun and Profit</a>
   at TechEd North America 2014
   by Anton Babadjanov | antonba@ | @antonbaa | https://www.linkedin.com/in/anton-babadjanov-44501b9
   and Vlaimir Vinogradsky | vlvinogr@ 

   This explores the end-to-end workflow of launching a "treasure hunt" API
   and play a game with it. 
   We'll also take a peek at what the future holds for this exciting new Azure service.

0. <a target="_blank" href="https://www.youtube.com/watch?v=jNXXRGL3gqM">
   Azure Api Management</a>
   by Ajay Solanki

0. <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/videos/api-management-overview/">
   API Management Overview (cartoon)
   03-25-2015
   Overview video of the Azure API Management service 


0. <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/videos/adding-developer-portal-functionality-using-templates-in-azure-api-management/">
   Adding Developer Portal functionality using Templates in Azure API Management
   by Matt Farmer 
   
   uses Contoso API:  
   http://contosoapim.azure-api.net/calc/add?a=(a)&b=(b)

   Response: { "statusCode": 404, "message": "Resource not found" }

0. <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/videos/configuration-over-git/">
   Configure your API Management instance using Git</a>
   03-12-2016
   by Anton Babadjanov | @antonbaa | https://www.linkedin.com/in/anton-babadjanov-44501b9
   Access and modify the configuration of your API Management instance using Git. 
   Configure Security > Configuration: 
   This enables scenarios:

   * Managing multiple configuration versions 
   * Syncing the configuration of multiple tenants 
   * Utilizing the Git workflow for collaborative editing 
   * Text-file based configuration for flexibility

0. <a target="_blank" href="https://channel9.msdn.com/Series/onacloud/API-or-No-API?ocid=player">
   API or No API - On Cloud</a>
   Feb 23, 2016
   By: Lachezar Arabadzhiev, Jef King
   Take reads off data store.
   Have a worker rule read out From a SQL database every 30 secs
   to stick into blob storage with CDN fed to users.

0. <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/videos/api-management-in-under-5-minutes/">
   API Management in under 5 minutes</a>
   06-16-2014
   Shows the classic portal to https://wellmark1.portal.azure-api.net/
   This video shows how Wellmark Blue Cross & Blue Shield use Azure API Management to accelerate their partners in adopting the Wellmark API, 


0. <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/videos/episode-177-more-api-management-features-with-vlad-vinogradsky/">
   Episode 177: More API Management Features with Vlad Vinogradsky 
   06-12-2015 42 min, 07 sec

   In this episode Chris Risner is joined by Vlad Vinogradsky, Principal Program Manager on the Azure API Management Team. Vlad joins us to talk about some of the latest features…


0. <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/videos/episode-176-logic-apps-with-stephen-siciliano/">
   Episode 176: Logic Apps with Stephen Siciliano</a>
   05-29-2015

   In this episode Chris Risner and Haishi Bai are joined by Stephen Siciliano, Program Manager on Azure App Service. Stephen joins us to demonstrate Logic Apps. 

0. <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/videos/getting-started-with-azure-api-management-rest-api/">
   Getting Started with Azure API Management REST API</a>
   12-01-2014
   Azure API Management provides a REST API for performing operations on selected entities, such as APIs, users, groups, products, and subscriptions. The API can be used fo…

0. 
   Integrate Azure API Management with Event Hubs
   Nov 09, 2015 at 2:01PM
   By: Miao Jiang
   This video demonstrates how to use the log-to-eventhub policy to build a custom dashboard with Azure Stream Analytics and PowerBI.


0. <a target="_blank" href="https://www.youtube.com/watch?v=9sml7r019J8">
   Azure API Management Update</a>
   BizTalk360


### Social media:

* <a target="_blank" href="https://www.twitter.com/AzureAPIMgmt">@AzureAPIMgmt</a>

* Mailto: apimgmt@microsoft.com 

* https://social.msdn.microsoft.com/Forums/en-US/home?sort=relevancedesc&brandIgnore=True&searchTerm=api+management
   Microsoft forum topics

https://www.youtube.com/results?search_query=apimanagement

### Conferences

\#integrate2016 conference 

### Partners 

@KloudSolutions

https://api.kloud.com.au/
    
    {version}/{entity-set}/{id}/{property}
    
    V1/user/cd1311/files

APIMatic

AutoRest

@infront

@SixPivot

https://twitter.com/SwaggerApi

### Scalability

https://social.msdn.microsoft.com/Forums/azure/en-US/97a0b1e9-bdd1-480c-a5c3-f4e3a5e7444f/scale-to-millions-of-api-calls?forum=azureapimgmt


### Pricing

http://azure.microsoft.com/pricing/details/api-management/

Consumption    Developer   Basic    Standard    Premium  IsolatedPreview


### Stars

Jorge Arteiro 

* http://aka.ms/melgabdev4
*  jorgearterio@hotmail.com
* @jorgearteiro
* @Azuretar
*  Azuretar.com

Matthew Snider [masnider@MSFT] 

   * Human factors in decisions: [Thinking, Fast and Slow](http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374275637)
     by Daniel Kahneman
   * [You Are Not So Smart](http://youarenotsosmart.com/) by David McRaney
   * Nate Silver's [BOOK: The Signal And The Noise](http://www.amazon.com/dp/159420411X)
   * IT worst practices and "core incompetencies" are discussed on the [AntipatternZOO](http://antipatternzoo.com/)


## App Fabric Instead

Build your own.

<a target="_blank" href="https://azure.microsoft.com/en-us/services/service-fabric/">
Microsoft Service Fabric</a> (in GA April 2016)
has
<a target="_blank" href="http://tryazureservicefabric.eastus.cloudapp.azure.com/">
several free "party" clusters</a> that last for less than 4 hours each.

Service Fabric programming model focus on: 
 
 * Reliable Actors, 
 * Reliable Services, 
 * custom application orchestration, and 
 * Service Fabric management tasks.

In order to build and run Azure Service Fabric applications on your development machine, 
you need to install the runtime, SDK, and tools. 
You also need to enable execution of the Windows PowerShell 3.0 scripts included in the SDK.

To use Service Fabric PowerShell cmdlets on Windows 7, 
which includes Windows PowerShell 2.0 by default, 
<a target="_blank" href="https://www.microsoft.com/en-us/download/details.aspx?id=50395">
download the Windows Management Framework 5.0 which includes PowerShell 3.0</a> as well as
Desired State Configuration (DSC), Windows Remote Management (WinRM), Windows Management Instrumentation (WMI).
See http://go.microsoft.com/fwlink/?LinkID=717903 

The Party Cluster is created by code at 
https://github.com/Azure-Samples/service-fabric-dotnet-management-party-cluster

Not AzurePS

The local cluster manager :

"C:\Program Files\Microsoft SDKs\Service Fabric\Tools\ServiceFabricLocalClusterManager\ServiceFabricLocalClusterManager.exe"

Pin this to the taskbar.

Microsoft Service Fabric is about more than API management.
Its features and patterns for application development, including:

0.    Stateful Reliable Services with Reliable Collections.
0.    Dependency injection and unit testing with Reliable Services.
0.    How to use Service Fabric configuration packages, both the built-in Settings.xml config and custom JSON configuration, with rolling updates without restarting services.
0.    How to encrypt sensitive data in Service Fabric configuration packages.
0.    Inter-service communication using the Service Fabric remoting stack.
0.    Diagnostics with Elastic Search through ETW event sources.
0.    How to write a stateless Web API front-end service.

https://azure.microsoft.com/en-us/documentation/services/service-fabric/
videos

https://azure.microsoft.com/en-us/documentation/samples/?service=service-fabric
Sample apps


## API CLI

https://docs.microsoft.com/en-us/cli/azure/apim/api?view=azure-cli-latest

<pre>az apim create --name MyApim22 -g apim-rg -l westus2 --publisher-email (youremail)--publisher-name (yourname)
</pre>

https://feedback.azure.com/forums/248703-api-management/suggestions/36832033-programmatically-import-azure-function-into-apim


https://cloudywithachanceofbigdata.com/using-the-azure-cli-to-create-an-api-using-a-function-app-within-api-management/

Associate the API with a product (which is how you can rate limit APIs):

<pre>az apim product api add \
--api-id $fnName \
--product-id starter \
--resource-group $rgName \
--service-name $apimName
</pre>


## APIM Policies

https://docs.microsoft.com/en-us/azure/api-management/api-management-policies

Need at least one "when" statement.


## Resources

* <a target="_blank" href="https://gallery.technet.microsoft.com/PowerShell-Deployment-f20bb605/">
  PowerShell Deployment Toolkit (PDT)</a>
  is a set of scripts and knowledge for automated deployment of 
  System Center 2012 SP1/R2, including SQL and all prerequisites,
  and all automatable post-setup integration.


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}


## More on APIs #

This page is one of a series about APIs:

{% include api_links.html %}

