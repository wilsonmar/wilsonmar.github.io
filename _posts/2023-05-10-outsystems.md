---
layout: post
date: "2023-05-10"
file: "outsysstems"
title: "Outsystems"
excerpt: "Generate feature-rich web and mobile apps using low-code running within a full suite of enterprise-grade utilities and services"
tags: [cloud, azure, C#]
image:
# az-logo-2021-1900x500.png
  feature: https://user-images.githubusercontent.com/300046/117658030-7fd70080-b157-11eb-9869-405a4d93ecf5.png
  credit: Microsoft Fluent
  creditlink: https://azure.microsoft.com/en-in/blog/a-fluent-new-look-for-the-azure-icon/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Outsystems is a low-code platform for building enterprise-grade web and mobile apps on Windows, Linux, and macOS laptops. 

It can be used in PaaS or as a self-managed install on-premises or in a private cloud.

Its "low code" approach enables enterprises to <strong>hire less people</strong>
not only because Outsystems generates a lot of the code 
but also because back-end and operational features are already operational.

With Outsystems, there is less arguing about which framework to use, what CI/CD to use,
what monitoring, etc.

So the Outsystem customers' IT workforce consists purely of those who can be <strong>near end-users</strong> and focus on the business logic and user experience. There is less need for IT management and specialist "Developer Platform builders".

On the other hand, Outsystems customers don't have to find experts in evolving technologies such as AI and AI.

It's not just about programming skill sets, to include "citizen developers" who do not program full time.

This also means that the IT workforce can be <strong>more diverse</strong> and closer to end-users.

All the above enables faster development of new applications.

https://www.linkedin.com/in/joaomiguelneves/
Joao Neves, VP of Engineering at Outsystems, says that Outsystems is a "low-code platform for building enterprise-grade web and mobile apps that help you get the job done faster. It generates feature-rich web and mobile apps using low-code running within a full suite of enterprise-grade utilities and services."



## The Outsystems Company

<a target="_blank" href="https://www.glassdoor.com/Reviews/OutSystems-Reviews-E642590.htm">79% of employees would recommend the company to a friend</a> -- very high among emplyers.

"One of the fastest-growing B2B software companies in the world,"

Among the Forbes top cloud computing employers four years in a row.

Outsystems' website at <a target="_blank" href="https://www.outsystems.com/">outsystems.com</a>
lists the company at 55 Thomson Place, 2nd Floor, Boston, MA 02210 Tel: +1 617 837 6840

https://www.linkedin.com/company/outsystems/

But many of Outsystems work in Lisbon, Portugal. 

Bengaluru, Karnataka, India

The company was founded in 2001 by current CEO (Stanford graduate) <a target="_blank" href="https://www.linkedin.com/in/paulorosado/">Paulo Rosado</a>.
https://www.outsystems.com/blog/posts/interaction-design-team/

His "The Small Book of the Few Big Rules"

   * We grow, change, and innovate, and give our teams the space to be proactive and creative. 
   * We care about growth and development. Vertical career progression is obvious, and we also encourage lateral moves, joining different teams, and mastering new skills. 
   * Global colleagues who are as smart, hardworking, and driven as you. 
   * Our DNA is disrupting the status quo. It is why our company exists. 
   * We “Ask Why” a lot. It helps us connect our individual work to the bigger picture and often uncovers a better, more agile way. 
   <br /><br />

The company was a pioneer in transitioning to working in C# on macOS laptops and Linux servers.

? 1,500 employees in 17 countries.

? 1,200 customers in 60 countries.

? 350 partners in 55 countries.

? 350,000 community members.

? 1,000,000 downloads of its free version.

? 1,000,000 apps built with Outsystems.

? 1,000,000,000 end-users of apps built with Outsystems.

? 11,000,000,000 transactions per month.

? 1,000,000,000,000 USD in transactions per year.

? 1,000,000,000,000 USD in revenue per year.

Their <a target="_blank" href="https://www.outsystems.com/community/jobs/?q=&c=&t=&l=&r=&w=&s=">Job Board</a> lists jobs worldwide.

## Pricing

Outsystems charges $1,135/month for up to 3 apps in production.

But Outsystems does not charge people to build a single application for less than 10 users.
That removes a barrier to entry for learning, and creates a large community of developers around the world.

## processes

Outsystems makes use of their "Architecture Canvas" process.

1. Shape
1. Build
1. Accept


## Databases supported

Each logical database connection is a separate "Extension" for which is a C#z DLL.

Sample apps use Microsoft's "Northwind" database.

Interaction with external databases (over the internet) uses SQL queries to a relational database.
Outsystems enables connection to:

   * SQL Server / Azure SQL Database
   * Oracle
   * iDB2
   * MySQL
   <br /><br />

   Outsystems does not support NoSQL databases such as MongoDB or Cassandra.

* GraphQL API - have GraphQL schema specification?

   CAUTION: Outsystems does not have native connection with GraphDB (Neo4j). But one can venture to create a connection like the PostGreSQL database using the SDK: https://www.outsystems.com/forums/discussion/14992/the-postgresql-database-connector-by-ardoric/
   * https://www.outsystems.com/forums/discussion/75623/how-to-connect-outsystems-with-neo4j/

## APIs supported

Please confirm:

* REST API - have Swagger/OpenAPI specification?
* SOAP API - have WSDL specification?

* gRPC API - have protobuf specification?
* Kafka API - have Kafka schema specification?
* AMQP API - have AMQP schema specification?
* MQTT API - have MQTT schema specification?
* WebSockets API - have WebSockets schema specification?
* WebHooks API - have WebHooks schema specification?
* OData API - have OData schema specification?

* XML API - have XML schema specification?
* JSON API - have JSON schema specification?
* CSV API - have CSV schema specification?

## Internals

The C# language is used to generate code.

Outsystems started out with Windows Server and SQL Server, but created C#
for transitioning to support Linux and Oracle on macOS laptops.

1.  The IDE is called "Service Studio".

1.  Publishing involves an XML file sent to the Platform Server. It's then compiled into DLL files.

    Outsystems creates static native mobile apps which require update within the app store.
    Many users delay updating their apps.
    
    CAUTION: Outsystems are NOT like apps which can be updated without going through the app store.

1.  The Platform Server is a .NET application.

    Platform Services include: Authentication, Logging, Monitoring, Security, and User Management.
    Scheduling of tasks at specific times from a queue.

1.  Different environments are stood up without hassle. Each environment has its own Platform Server.

    Mobile Application Build Service (MABS) is used to build mobile apps for iPhone and Android phones.

1.  Web and mobile application executables are generated and deployed by the Platform Server component.

1.  The Platform Server is managed by a web-based application "LifeTime".

    The LifeTime too manages the deployment of applications to different environments (Dev, QA, Prod).

1.  "Integration Studio" is used to integrate with other systems.

    Integration Studio is a development tool to create components that allow the application integrates with an external databases or custom code.

1.  "Service Center" is used to manage the Platform Server.



## Architecture Canvas process

1. Organize
2. Assemble (rather than Develop or Plan)
3. Disclose

Keep concepts with different lifecycles apart.


## Naming Conventions


* MTh = Mobile Theme

<hr />

## References


<hr />

<a name="More"></a>

## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
