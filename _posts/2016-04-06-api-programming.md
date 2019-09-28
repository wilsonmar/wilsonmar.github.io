---
layout: post
title: "API Programming"
excerpt: "My computer talks with your computers"
tags: [API, programming]
date: "2016-04-06"
file: "api-programming"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14612210/373cb4e2-0553-11e6-8a1a-4b5e1dabe181.jpg
  credit: And Beyond
  creditlink: http://www.andbeyond.com/chile/places-to-go/easter-island.htm
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://en.wikipedia.org/wiki/Application_programming_interface"> 
APIs</a> are how computers talk with each other,
without user intervention or command.

APIs are being used by many web and mobile apps to communicate with servers.

APIs are also called "microservices".

The less coupling, the less predefined semantics, the greater means to evolve.

## Fundamental shift

To me, APIs are a big deal because they enable a fundamental shift
from people (humans) <strong>initiating</strong> actions 
by clicking on User Interfaces (UIs) to <strong>computers</strong>
initiating actions.

With Internet of Things (IoT), there will be so many devices that it is
impractical for someone to log into each device.

Permissions for computers to act are given not by passwords entered,
but by long-lived "service accounts".

QUESTION: Who are the vendors helping <strong>end-consumers</strong> manage 
the rapidly proliferating bots working on their behalf.

## Programming Languages

MS Azure API generates code for several languages:

<img width="321" alt="ms-api-code-samples" src="https://cloud.githubusercontent.com/assets/300046/15183376/0f0c7c16-174e-11e6-91c3-3a87164d87f3.png">

   * Curl for interactive exploration on command lines
   * C#
   * Java
   * JavaScript
   * ObjC (Objective-C for iOS)
   * PHP
   * Python
   * Ruby

## Apps in various programming languages for APIs

* desktop client web apps 
* mobile web app (Sencha, etc. using Cordova)
* mobile native app for iPhone (Objective-C and Swift)
* mobile native app for Android (Java and Scala)

* functional testing of clients
* performance testing of clients

* mock servers during development
* servers

* functional testing of servers
* performance testing of servers

* API Management servers API publishers use to 
create and maintain API consumer accounts and 
establish a gateway to obtain API usage metrics needed to 
enforce API usage plans.

## Styles of Implementation

<img width="605" alt="api-styles-1210x546" src="https://cloud.githubusercontent.com/assets/300046/15186421/342085b8-175a-11e6-85c3-28f3d437fe91.png">

Can apps call <strong>Assembly style</strong> (composite) requests 
such as customerOrder?

* This provides a simpler structure but more complex steps for developers to code.

* But the Assembly style can create a more complex implementation for API developers.


## Issues

I am intrigued by <a target="_blank" href="http://www.programmableweb.com/news/how-to-tap-weather-underground%E2%80%99s-plethora-data-api/how-to/2015/09/10?page=2">
this article on ProgrammableWeb</a>
by Jeff Cogswell:

"Note that there's a potential bug in this code that I need to discuss as it applies to API programming in general, especially in an asynchronous context. 

Although node.js is single-threaded, it is asynchronous. Look at the code following the request line; any code that follows the call to request will execute immediately after the call to request, probably before request finishes. That means you can't put a send function right after the call to request. If you do, the data won't be there. Instead, you have to put the send call inside request's callback.

But because of this, if the call to request() takes a while, a second browser request in this server code could come in. Since the first call to request() hasn't come back yet, this second browser request will indeed start stepping into the app.get handler. Yes, node.js is single threaded, but it is asynchronous, and the first browser request will pause as it awaits the return of the request() call, allowing other browser requests to come in. (That's the whole idea behind the asynchronous nature.) While the code would still function, the end result would be more API calls than necessary, which is an issue in the code as it currently stands. As such, for your production code, you'll want to add necessary functionality to this example to handle that situation.

Perhaps an alternative would be to do an initial API call when the program starts (and wait before the program starts accepting browser requests until that call returns), and then set a timer to do periodic calls separate to that. The browser request would simply retrieve whatever data is currently in the radar object. (These are the things you need to pay careful mind to when making asynchronous API calls; otherwise you'll encounter strange behavior and bugs that can be extremely difficult to track down.)"

## MVC :

These steps are based on <a target="_blank" href="http://neelbhatt2015.blogspot.in/2016/01/hello-world-with-mvc-6.html">
	Create MVC 6 via ASP.NET 5 Preview in VS 2015</a>

0. Open VS 2015.
0. Create MVC project.
0. ASP.NET 5 Preview.
0. Change the `project.json` to be like this:

{% highlight json %}
{
  "dependencies": {
       "Microsoft.AspNet.Mvc": "6.0.0-*",
       "Nowin.vNext": "1.0.0-*",
       "Kestrel": "1.0.0-*"
    },
  "commands": {
        "web": "Microsoft.AspNet.Hosting --server Nowin.vNext",
        "web-kestrel": "Microsoft.AspNet.Hosting --server Kestrel"
    }
}{% endhighlight %}

5\. Modify `Startup.cs` to add configurations:

{% highlight C# %}
using System;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Builder;
using Microsoft.Framework.DependencyInjection;

public class Startup
{
    public void Configure(IApplicationBuilder app)
    {
        app.UseServices(services =>
        {
             services.AddMvc();
        });

        app.Use(async (context, next) => 
        {
             Console.WriteLine(context.Request.Path);

             try
             {
                  await next();
             }
             catch(Exception ex)
             {
                   Console.WriteLine(ex);
             }
         });

       app.UseMvc();
      }
}{% endhighlight %}


## Azure Logic Apps

<strong>Azure Logic Apps</strong> allow developers to design workflows that start from a 
<strong>trigger</strong> and then execute a series of steps, each invoking an 
App Service API App
whilst securely taking care of authentication and best practices like checkpointing and durable execution.

See https://azure.microsoft.com/en-us/documentation/services/app-service/logic/

<a target="_blank" href="https://tryappservice.azure.com/en-us">
Create a sample Ping logic app</a> on a temporary (24 hour account)
to ping a website on a recurring schedule, then extend it to take an action depending on the result of the ping.


## More on API Microservices #

This is one of a series:

{% include api_links.html %}
