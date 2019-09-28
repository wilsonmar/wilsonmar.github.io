---
layout: post
title: "API Management Evaluation"
excerpt: "Which to choose?"
tags: [API, devops, evaluation]
date: "2016-04-29"
file: "api-management-evaluation"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14612210/373cb4e2-0553-11e6-8a1a-4b5e1dabe181.jpg
  credit: And Beyond
  creditlink: http://www.andbeyond.com/chile/places-to-go/easter-island.htm
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This page provides you a way to apply my research on managing APIs.

> I provide here a structure and approach for wisely selecting from among several vendors.

Click content link:

0. <a href="#TotalPoints">Total points for each choice</a> (sample recommendation: what's best for you)
0. <a href="#Importance"> Relative Importance of each criteria</a>
0. <a href="#Ratings">Ratings for each choice</a>
0. <a href="#FuncCriteria">Features Evaluated</a>
0. <a href="#NFRCriteria">Non-Functional Criteria</a>
0. <a href="#VariationAmongRaters">Variation among raters</a>

But before opening your checkbook, consider the Why and how:

## Business Model Why

<img width="476" alt="api-monitization-model-952x510" src="https://cloud.githubusercontent.com/assets/300046/15186420/3419291c-175a-11e6-99de-3cbe628d7460.png">

PROTIP: While public APIs get a lot of press (due in part to marketing spend),
implementing thru partners achieves indirect monitization

After Netflix opened their API, they identified partners
and <strong>new channels</strong> they didn't anticipate.

   * increase brand image

Implementing private APIs among employees only may achieve
cost savings from control, and standardization.

   * Improve discoverability (for reuse and greater agility)
   * Present uniform facade

## Major logical components

<img width="831" alt="azure-api-1662x756" src="https://cloud.githubusercontent.com/assets/300046/15144405/73c9199e-166c-11e6-97d3-a19557e4b033.png">

0. <a href="#PublisherFeatures"> API Publisher portal</a> (for use by admins)

0. <a href="#DeveloperFeatures"> API Developer portal</a> to learn system

0. <a href="#GatewayFeatures"> Proxy (API Gateway)</a> does re-writing, format conversion, rate limiting (throttling).

The diagram for Amazon's API Gateway summarizes the challenge:

<img align="right" width="652" height="316" src="https://cloud.githubusercontent.com/assets/300046/14916299/fdbb3b36-0dd5-11e6-9fed-ed4c6576200e.png">
<!-- 887x430 -->

   * Calls come from a variety of sources (mobile and IoT apps, AJAX websites, services from customer servers)
   * Traffic comes through public cellular and internet networks
   * Load balancing is necessary to distribute load across many servers.
   * Caching is important for speed.

## Lifecycle functionality

PROTIP: Attend webinars by leading vendors to see how they justify their higher prices with features that cover the full lifecycle:

![api-dev-model-mulesoft-1371x1143](https://cloud.githubusercontent.com/assets/300046/15156711/85bd51ae-16a5-11e6-9ef2-921a23ff9739.jpg)

The diagram above from MuleSoft presents names for the range of functionality that you may not know you need,
and then later realize <a target="_blank" alt="api-mulesoft-products-2880x1800" href="https://cloud.githubusercontent.com/assets/300046/15156952/a7619f4e-16a6-11e6-95fd-81c232b2e0ba.png">
their products</a>
are needed to avoid extra costs and effort.

## Different strategies over time

QUESTION: What are the benefits of discoverability, collaboration, ease of integration, etc.
and other advanced features offered by vendors?

PROTIP: Consider the strategy of getting going quickly with a vendor which offers low-cost <a href="#StartupCost">start-up costs</a>.
Then your organization can gain the experience needed to more wisely evaluate the value of additional features among all vendors.


<a name="TotalPoints"></a>

## Total points for each option
The vendors and their product, ranked by total points averaged among raters:

> The order of this list is for a particular organization. Yours will differ.

Each link may go to text lower in this document, to another page on this site, or the home page of the vendor:

0. CA (acquired Layer 7), on-prem only, but vaulted to the top of Gartner's "Ability to Execute" in 2016.
0. <a target="_blank" href="http://apigee.com/about/products/predictive-analytics">
   Apigee</a> Edge Microgateway + hosting. Proprietary code.
   OEM'd by SAP. Leads in Gartner's "Completeness of vision" scale.
0. <a target="_blank" href="https://www.mulesoft.com/">
   Mulesoft</a> CloudHub, Anypoint Platform. Proprietary code. "Full featured".

0. [Microsoft API Management in the Azure cloud](/api-management-microsoft/) is SaaS-only and proprietary. Advanced features limited. For Microsoft shops. No SOAP or RAML support yet. Dropped off Gartner's report in 2016.
0. <a target="_blank" href="https://aws.amazon.com/api-gateway/">
   Amazon's API Gateway</a>. SaaS-only proprietary code. Seems flexible.
   Dropped off Gartner's report in 2016.    

0. IBM's API management offering is IBM API Connect (previously known as IBM API Management).
   Has an "Essentials" level (StrongLoop) for free use by developers and "Enterprise" on-premises option.

0. <a target="_blank" href="http://wso2.com/advantages/">WSO2</a> open-source
0. <a target="_blank" href="https://www.apinf.io/">apinf.com</a> from Finland (@APInf_io) open-source in
   <a target="_blank" href="https://github.com/apinf/">on GitHub</a>
0. <a target="_blank" href="https://getkong.org/about/">Kong</a> (previously Mashape)
   is an open-sourced API proxy which runs in front of any RESTful API, and
   extended through Plugins.
   It's built on top of NGINX and Apache Cassandra, but scalability still an issue?

0. <a target="_blank" href="http://www.apiversity.com/">APIversity</a> API Manager.
0. Akana (formerly SOA Software)
0. Axway (acquired Vordel)
0. <a target="_blank" href="http://www.mashery.com/">Mashery</a> + Intel acquired + Tibco API Exchange CloudBus Aug. 2015
0. Torry Harris mostly open-source API-o-Blocks, API Connect in EMEA, India and Latin America.
0. Oracle
0. Software AG
0. RedHat (3Scale) - high cost <a target="_blank" href="https://strongloop.com/">Strongloop</a> Node.js
0. Dell Boomi
0. Accenture
0. HP (focused on large media and telcos)

Forrester, in their April 2015 report, classified the vendors this way:
<img width="689" height="408" alt="api vendors in forrester 2015" src="https://cloud.githubusercontent.com/assets/300046/14916539/6c5fe680-0dd7-11e6-9149-6b803194e134.png"><!-- 1378x862 -->

Forrester also illustrated the history of offerings with this timeline:
<img alt="api vendors timeline forrester 2015" width="652" height="361" src="https://cloud.githubusercontent.com/assets/300046/14919580/b55db79a-0de6-11e6-9377-553fba4b4366.jpg"><!-- 1346x744 -->
This was adjusted for Tibco buying Mashery from Intel in August, 2015.

https://en.wikipedia.org/wiki/Comparison_of_api_management
like
https://en.wikipedia.org/wiki/Comparison_of_text_editors

### Gartner Magic Quadrant

![api-gartner-2016-oct-697x697-48797](https://user-images.githubusercontent.com/300046/31918141-ff1d6306-b80f-11e7-898e-41f1f390c30d.jpg)

![gartner-api-governance-2015](https://cloud.githubusercontent.com/assets/300046/15166279/858e6896-16da-11e6-9075-76191c993feb.png)


<a href="#Importance"></a>

## Importance of each criteria

<img align="right" width="383" height="301" src="https://cloud.githubusercontent.com/assets/300046/14914831/086b982e-0dcb-11e6-9859-9c5d67f8a31d.png">
<!-- 766x602 -->

This radar polar chart visually illustrates the relative importance of
each criteria that can be used to evaluate each vendor offering.

If everything has the same importance, no trade-offs are considered.

These represent extent of risk and effort, and cost savings or earnings.

Semi-transparent layers are used so both layers can be seen clearly.




<a name="Ratings"></a>

## Ratings for each criteria

There is usually a trade-off between cost vs. speed vs. quality (the "Iron Triangle").
But here are more considerations:

![polar-chart-2](https://cloud.githubusercontent.com/assets/300046/14914539/44f83b42-0dc8-11e6-84ff-ba8c2317a808.png)

TODO: The above is an example placeholder.

This is like the CAP Theorem.


<a name="VariationAmongRaters"></a>

## Variation among raters

Each rating is the average of ratings among several raters.

<hr />

<a name="FuncCriteria"></a>

## Features Evaluated

* <a href="#PublisherFeatures"> API Publisher Portal Features</a>
* <a href="#GatewayFeatures"> API Gateway Features</a>
* <a href="#DeveloperFeatures"> API Developer Portal Features</a>

Categories of featuers are detailed below:

<a name="PublisherFeatures"></a>

### API Publisher Portal Features

* Define API schema
* Import API schema (from Swagger, RAML, WADL, etc.)

* Package APIs into products
* Define Billing parameters
* Create invoice and email
* View Billing history to collection history

* Manage users (add, update, delete)
* Define policies like quotas or transformations on the APIs
* Get insights from analytics

* Collaboration among other publishers
* Submission and update to aggregation platforms:

   * <a target="_blank" href="https://github.com/APIs-guru/api-models#existing-integrations">
     APIs-guru on GitHub</a> is the "Wikipedia of REST API specs".

   * Submission to <a target="_blank" href="https://kapeli.com/dash">Dash</a> by Bogdan Popescu
     who aggregates 150+ APIs for access off-line (for $30).

   * <a target="_blank" href="http://www.apirest.com/">
     apirest.com</a>, the API search engine. @apirestcom

<a name="GatewayFeatures"></a>

### API Gateway Features

* a secured channel between the API gateway and the backend.

* gate access with API keys, certificates, JWT tokens

* Enforce usage quotas and rate limits

* detect DOS attacks by using throttling

* use advanced security policies like JWT token validation.

* track usage for billing

* Transform API calls on the fly without code modifications (from V1 sent to V2 accepted)

* Cache (queue in memory) backend responses (where set up)

* Log calls to store metadata for analytics over time

* Collaboration among other gateways
* Integration with other APIs.


<a name="DeveloperFeatures"></a>

### API Developer Portal Features

<a target="_blank" href="https://developer.nutritionix.com/">
<img align="right" width="240" alt="scr dev portal nutrition sample" src="https://cloud.githubusercontent.com/assets/300046/15271065/0e19daa8-19f4-11e6-959d-fec32043aa64.png"></a>
Major items of interest to developers are listed here, from 3Scale.net.


* API documentation.
* Communication about system availability history  
* Communication about change history  
* Announcements about hackathons and other events

* Try out an API via the interactive console.
* URL to download Swagger specs.

* fast onboarding (signup via GitHub, Hotmail, AD, Google)
* Create an account and subscribe to get API keys.
* Access analytics on their own usage.

* Internal API portal offers a centralized location for communication about the availability and latest changes to APIs,

* gating access based on organizational accounts, all based on AD

* API facade that decouples internal implementations not ripe for partner consumption.

* Foster innovation?

* Collaboration among other developers
* Integration with other API developer portals.
* Gamification

<hr />

<a name="NFRCriteria"></a>

## Non-Functional Criteriae

Each of these are a risk and an aspect of cost/benefit.

   How does it save time and money, reduce risk, or earn more revenue?

   How do "bells and whistles" benefit?


<a name="StartupCost"></a>

### Initial Cost

Lower up-front cost is important for many.

   * 3scale, Apigee, and WSO2 have options for no-cost, unlimited duration use of their API management solutions (though support is typically limited or unavailable).

   * Amazon API Gateway has a free tier for one million API calls per month for up to 12 months.

   * Microsoft charges Developers $49/month
   and limits access to 10 users.

### Cost over time

BLAH: <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/api-management/">
Microsoft pricing</a>
 bundles pre-defined amounts of calls, cache, and network services together in <strong>units</strong> for billing.

Amazon charges for different services separately:

   * API calls by the million received depend on location of servers:
   <a target="_blank" href="https://aws.amazon.com/api-gateway/pricing/">Amazon charges</a>:

   | Locale    | per million |
   | US        | $3.50 |
   | Ireland   | $3.50 |
   | Frankfurt | $3.70 |
   | Asia Pac. | $4.25 |

   * Data transfer out to internet.  Amazon:

   | Volume     | per TB |
   |    0-10 TB | $0.120 |
   |   11-40 TB | $0.085 |
   |  41-100 TB | $0.082 |
   | 101-350 TB | $0.080 |

### Style / Ease of Use

   * The hipness of UI - default layouts inviting, clean, etc.
   * Familiarity

These are important because human UI are needed for:

   * Developer Sign-up
   * API key assignment
   * API public/private key creation
   * Provide documentation
   * Provide code samples
   * Discussion forums to provide support
   * Send emails to update
   * Report errors by user for each account

### Coordination

The need for an API Gateway is to avoid legacy point-to-point communications among computers.

   * Partner management
   * Traffic management

   * service coordinator, (android device hits one service instead of 100 micro services)
   * Billing
   * Emails about changes

   * Predictive analytics. Apigee illustrates their Insights service which yields a buying Propensity score salespeople use to prioritize efforts:

<img alt="apigee predictive insights" width="652" height="367" src="https://cloud.githubusercontent.com/assets/300046/14917568/fe2c91c6-0ddc-11e6-87d4-fabffe317f07.png"><!-- 668x376 -->


### Security

   Does the security mechanisms provided strong enough?

   * Transport security (TLS)
   * Authentication (passwords, two-factor cellphone)
   * Initial registration
   * Password recovery
   * KPI (public/private) certificates?
   * Identity and access management
   * Verify api keys

<a target="_blank" href="https://pages.apigee.com/eBook-API-First-Security-Dont-Build-Your-Own-Maginot-Line-conf.html">
Apigee
uses this illustration:
<img alt="apigee security" src="https://cloud.githubusercontent.com/assets/300046/14917830/253f56a8-0dde-11e6-9446-18a52ef1a1fb.png"></a>
<!-- 668x376 -->

    * No data at rest
    * http://www.mashery.com/api/security prides itself on being certified on PCI, HITRUST CSF, SSAE, Safe Harbor, SOC 2, etc.


### Flexibility

   How flexible is it? Are we sacrificing too much flexibility for ease-of-setup?

   * Redirect calls to API's URIs
   * Auto-detect new services added

   * Support for steaming API protocols WebSocket and XMPP
   * Support for two-legged or three-legged OAuth and OpenID Connect authentication
   * Onboard SAML security token service for federation and credential translation
   * Support for external SSO (Single Sign-On)
   * LDAP user provisioning for services like Web applications and social networks

### Maintainability

   What maintenance is needed?

   * Manual work: Annual, monthly, weekly, daily, hourly, etc.
   * Adding additional languages

   * Logging (AWS CloudWatch monitoring)

      | Item | US Cost/Mo. | Note |
      | Dashboards | $3.00 | - |
      | Detailed Monitoring for Amazon EC2 Instances | $3.50 per instance | 1-minute frequency |
      | Custom Metrics | $0.50 |
      | Alarms | $0.10 |
      | API Requests | $0.01 | per 1,000 GetMetricStatistics, ListMetrics, or PutMetricData requests |
      | Logs ingested | $0.50 | per GB |
      | Logs archived | $0.03 | per GB |
      | Custom Events | $1.00 | per million |

### Scalability

   How quickly, easily, and safely can the system expand to meet capacity needs?

   * Load balancing (AWS CLoudFront)
   * DDOS (Distributed Denial of Service) attack detection and mitigation (at DNS level)
   * Traffic Throttling based on user's plan
   * Traffic Throttling for capacity limitations
   * The "Actor" model of Microsoft Service Fabric
   * Caching

Microsoft Azure routes traffic to a region providing the least latency for each user:

<a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/traffic-manager-routing-methods/#performance-traffic-routing-method">
<img src="https://acom.azurecomcdn.net/80C57D/cdn/mediahandler/docarticles/dpsmedia-prod/azure.microsoft.com/en-us/documentation/articles/traffic-manager-routing-methods/20160415071221/ic753237.jpg"></a>

### Speed

   * Cache
   * International end-points

   * Cache memory per hour.  Amazon:

   | Volume     | per hr. |
   |     0.5 TB | $0.028 |
   |     1.6 TB | $0.054 |
   |     6.1 TB | $0.245 |
   |    13.5 TB | $0.290 |
   |    28.4 TB | $0.560 |
   |    58.2 TB | $1.100 |
   |   118.0 TB | $2.200 |
   |   237.0 TB | $4.400 |

### I18N (Internationalization)

   * UI Language
   * Data centers
   * Currencies

### Availability

   * Partial deployment
   * Fault tolerance

### Support

   How well supported is it?

   This is part of the cost. Support costs money.

### Training

   How quickly and deeply can people get up to speed on the technology?

   How easy is to to learn/maintain?

   This is a consideration of costs and risks.

   * Document generation

### Testability

   * Amazon API Gateway can generate client SDKs in a number of programming languages, including JavaScript, iOS, and Android.

   * Mock server generation
   * Test script generation

### Portability

   How easy is it to switch among competing vendors? Is there vendor lock-in?

   * Switch from Azure to AWS, other PaaS is not possible because Azure is a pure SaaS running on Azure
   * How to extract data?

### Vendor prospects

   What is the sentiment about the vendor?

   * History of product cancellations
   * Investment advisory financial ratings
   * Consumer ratings by JD Power
   * Glassdoor ratings by employees


<hr />

<a name="Vendors"></a>

## API Tool Vendors

Vendors are in alphabetical order:

Akana:

   * https://www.youtube.com/channel/UC3hr1MuhpS11dMxTdo1rHQw

CA

   * http://www.ca.com/us/products/api-management/solutions/api-management-comparison.aspx

Mashery:

   * https://www.youtube.com/channel/UCJqekyyjX78qmzoOK_wZ2lw

<a name="MS-API-mgmt"></a>

### Microsoft API Management

"Publish, manage, secure, and analyze your APIs in minutes"
is the tag line at
<a target="_blank" href="https://azure.microsoft.com/en-us/services/api-management/">
Microsoft's API Management home page</a> (Service Overview).

Microsoft's service is based on its October 23, 2013
acquisition of APIphany (based in Wash. DC).

<a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/api-management-get-started/">Documentation</a>
is published from markup text
<a target="_blank" href="https://github.com/Azure/azure-content/blob/master/articles/api-management/api-management-get-started.md">in this GitHub</a>
which directs people to the
<a target="_blank" href="https://manage.windowsazure.com/@jetbloomhotmail.onmicrosoft.com#Workspaces/ApiManagementExtension/services"> classic portal</a>.
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
  The pricing page</a> states there is no on-premises deployment option available at this time.

### Create Publisher portal

0. [Get a Microsoft Azure account](/azure-cloud/)
0. Create a Resource (Free trial)
0. Specify Scale: Developer or Standard.

   Standard tier can go up to 4 instances to handle 800 million calls/month.
   QUESTION: No auto-scaling?

0. Custom SSL cert
0. Custom domain (developer.xyz.com)

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

### Policies

Examples:

<a target="_blank" href="https://github.com/Azure/api-management-samples/tree/master/policies">
https://github.com/Azure/api-management-samples/tree/master/policies</a>

   *   Hide response data based on product name.policy.xml
   *   Pre-authorize requests using validate-jwt.policy.xml
   *   Send context information to the backend service.policy.xml
   *   Set cache duration using cache control header.policy.xml


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
   * Engaging developers: Time to First Successful call success metric
   * Make legacy API (SOAP XML) and modern (REST JSON)
   * Understand their behavior with monitoring
   <br /><br />

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

#integrate2016 conference

### Partners

@KloudSolutions

https://api.kloud.com.au/

    {version}/{entity-set}/{id}/{property}

    V1/user/cd1311/files

https://twitter.com/RepreZen_API

APIMatic

AutoRest

@infront

@SixPivot

https://twitter.com/SwaggerApi

### Scalability

https://social.msdn.microsoft.com/Forums/azure/en-US/97a0b1e9-bdd1-480c-a5c3-f4e3a5e7444f/scale-to-millions-of-api-calls?forum=azureapimgmt


### Pricing

http://azure.microsoft.com/pricing/details/api-management/


### Stars

Jorge Arteiro

* http://aka.ms/melgabdev4
*  jorgearterio@hotmail.com
* @jorgearteiro
* @Azuretar
*  Azuretar.com


#### Visual visualstudio

https://jetbloom.visualstudio.com/?account=first
90 day trial


#### App Fabric

<a target="_blank" href="https://azure.microsoft.com/en-us/services/service-fabric/">
Microsoft Service Fabric</a> (in GA April 2016)
has
<a target="_blank" href="http://tryazureservicefabric.eastus.cloudapp.azure.com/">
several free "party" clusters</a> that last for less than 4 hours each.

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

 Service Fabric programming model that they focus on:
 * Reliable Actors,
 * Reliable Services,
 * custom application orchestration, and
 * Service Fabric management tasks.


## Resources

* <a target="_blank" href="https://gallery.technet.microsoft.com/PowerShell-Deployment-f20bb605/">
  PowerShell Deployment Toolkit (PDT)</a>
  is a set of scripts and knowledge for automated deployment of
  System Center 2012 SP1/R2, including SQL and all prerequisites,
  and all automatable post-setup integration.

Matthew Snider [masnider@MSFT]

* Human factors in decisions: [Thinking, Fast and Slow](http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374275637)
  by Daniel Kahneman

* [You Are Not So Smart](http://youarenotsosma

## More on API Microservices #

This is one of a series:

{% include api_links.html %}
