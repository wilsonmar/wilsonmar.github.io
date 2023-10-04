---
layout: post
title: "Azure (Serverless) Functions"
excerpt: "Effortless instant (theoretically) infinite capacity to take several different actions"
tags: [cloud, azure, serverless]
date: "2021-05-14"
file: "azure-functions"
image:
# azure ms logo wait 1900x500-39kb.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/18188069/153fbcca-706c-11e6-983d-0783da57f75c.jpg
  credit: Microsoft Azure
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


This tutorial aims to have you ending up with "Serverless" Azure Functions running in the 
Microsoft Azure cloud.

It's assumed that you're already familiar with my <a target="_blank" href="https://wilsonmar.github.io/azure-quickly">Azure cloud onramp</a> and
[the Serverless framework](/serverless/)

If you need to customize the JobHost, then you're better off staying with an AppService WebJob.

## Why #

<a target="_blank" href="https://techcrunch.com/2016/09/01/serverless-is-the-new-multitenancy/">
Multi-tenancy</a> "made it viable to serve small and medium businesses with world-class software".

There are several ways to create and deploy Azure functions. For production, use an automated deploy mechanism to allow Azure Functions to get the latest version of Terraform or other IaC code from your version control system. 

Functions are designed to bind to (integrate with) many other Azure (and outside) services:*
<img width="732" alt="az-funcs-integrations-1464x1000" src="https://user-images.githubusercontent.com/300046/118571973-92939b80-b73c-11eb-950b-4cfddf655fdf.png">

A Function can be triggered (initiated) several ways.

Schedule triggers occur on a specific date/time.

1. At the upper-right: 

1. At the lower-left: Almost all Azure Functions need a Storage Account to access Queues, Blobs, Tables, etc.

   Azure Functions can make use of Azure Blob Storage with <a href="#AzureTables">Azure Table Storage</a>. 
   Any time a blob is uploaded to a Blob Storage container, a corresponding row in Table Storage is created.

1. CosmoDB

1. Service bus to Topics and Queues.

1. Event Grid

1. Event Hub

1. Twilio is external to Azure to send emails and mobile texts.


## Manual Portal GUI

1. Open blade <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites/kind/functionapp">Function Apps</a> in recents or Search.

1. Click "+ Add" or "Create Function App"

   <a name="FuncName"></a>

   ### Function App Name Conventions

1. Function names need to be <strong>all lower case</strong> and globally unique because it is a prefix to $MY_FUNC_APP_NAME.azurewebsites.net. Since the text is public to the world, it should be "work safe":

   * "210515" is the current date
   * "java" (the runtime stack/language, see below)
   * "func"
   * 1234 is the result of $RANDOM

   ### Publish:

   PROTIP: Code or Docker Container, which cannot be selected if you're selecting the Consumption plan.

   <a name="RunTimeStacks"></a>

   ### Run-time Stacks

1. Runtime Stack (in CLI), with links to Developer Reference docs:
   * .NET (C# and F#) = "dotnet"
   * Node.js (<a target="_blanK" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node?tabs=v2">JavaScript</a>) = "node"
   * Python = "python"
   * Java
   * PowerShell Core = "powershell"
   * Custom Handler
   <br /><br />

   CAUTION: Not every version of a language is supporte. See https://docs.microsoft.com/en-us/azure/azure-functions/supported-languages#languages-by-runtime-version

1. Version (of Runtime stack) is auto-selected of the latest version. "LTS" is for Long Term Service which is the most stable.

1. Region = Location.

   QUESTION: There is no geo-redundant Function?

1. Hosting: 

   Storage account: Note one can be created automatically if you ignore the selextion. 
   Alterntely, click "create" for another modal dialog.

1. Operating System: Windows is default. Select Linux

   NOTE: Later on you're told "Editing functions in the Azure portal is not supported for Linux Consumption Function Apps."

   <a name="Plan"></a>

   ### Plan:

   REMEMBER: "Functions Premium" provides VNet connectivity, unlimited execution duration, and auto-scaling.

   "Consumption (Serverless)", is pay-per-use pricing, preferred during low usage development.
   But no vNet service and no use of Docker containers.

   "App service plan" is used when vNet is needed with manual scaling. It has flat-rate predictable pricing with traditional Web Apps, API Apps, and Mobile Apps.


   ### Monitoring

   REMEMBER: Default "Application Insights" is "Yes". 

   PROTIP: Click on "No" during development because Insights uses up storage, which costs money.

   NOTE: Application Insights "(New)" is for a specific Region/Location.

1. "Review + create", then "Create". Wait for the blue "Go to resource" to appear.

1. Click "Add a function" link.


<a name="Functions"></a>

## Individual Function Apps

1. Get in the Portal Function Apps</a>
1. Click a particular Function App Name

   There is no searching for the "Functions" blade within Function Apps.

1. "+ Add" pops up documentation because much occurs locally on your laptop.


## Local Setup

1. Run my <strong>az-local-setup.sh</strong> to install utilities on your laptop.

   https://github.com/wilsonmar/azure-quickly

1. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash">Initialize</a>:

   <pre>func init MyFunctionProj --source-control</pre>

   If you get an error response such as this:

   <pre>node:events:342
      throw er; // Unhandled 'error' event
   </pre>

   QUESTION? reinstall Node and 

   <pre>nvm install 8.0.0</pre>


   ### FunctionApp folder

   A sample from the Microsoft class

   https://github.com/MicrosoftLearning/AZ-204-DevelopingSolutionsforMicrosoftAzure

1. Initialize a dotnet function:

   <pre><strong>func init --worker-runtime dotnet --force</strong></pre>



   A FunctionApp folder contains:

   *.gitignore
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-host-json"host.json</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash#local-settings-file">local.settings.json</a>
   * SharedCode
   * bin
   * various functions
   <br /><br />

   * C:\myfunctions\myMyFunctionProj\.vscode\extensions.json

   Inside each individual function folder:
   * function.json
   * <a href="#run.csx">run.csx</a> <em>(if C#)</em>
   <br /><br />

1. Install extensions:

   <pre>func extensions install</pre>


   ### Durable functions

   Durable functions are stateful functions (in a stateless environment).
   
   "Orchestrator" functions are stateful. They define function Workflows.
   Calls other functions synchronously or asychronously.

   "Activity" functions are stateless. They are orchestrated.

   "Entity" functions are stateful. They read and update small pieces of state.

   "Client" functions are stateless. They send messages to trigger Orchestrator and Entity functions.

   The function manages state, checkpoints, and restarts.
      * Whenever function awaits, Checkpoint progress to Azure Storage

   Templates of Durables:

   * Durable Functions Entity HTTP starter - whenever it receives an HTTP request to execute an orchestrator function.
   * Durable Functions HTTP starter - whenever it receives an HTTP request to execute an orchestrator function.
   * Durable Functions activity - whenever an Activity is called by an orchestrator function.
   * Durable Functions entity (class) - A C# entity that stores state and represented by a class.
   * Durable Functions entity (function) - A C# entity that stores state and represented by a function.
   * Durable Functions orchestrator - An orchestrator function that invokes activity functions in a sequence.
   <br /><br />

   Chaining sequence:

   <pre>public static async Task&LT;object> Run(DurableOrchestrationContext ctx){
     try {
        varx = await ctx.CallActivityAsync&LT;object>("F1");
        vary = await ctx.CallActivityAsync&LT;object>("F2", x);
        varz = await ctx.CallActivityAsync&LT;object>("F3", y);
        return await ctx.CallActivityAsync&LT;object>("F4", z);
     } catch (Exception) {
        # error handling/compensation goes here
     }
   }
   </pre>

   Fan out/Fan in parallel execution:

   <pre>public static async Task&LT;object> Run(DurableOrchestrationContext ctx){
        var parallelTasks = new List&LT;Task&LT;int>>();
        // get a list of N work items to process in parallel
        object[] workBatch = await ctx.CallActivityAsync&L;object[]>("F1");
        for (int i = 0; i < workBatch.Length; i++) {
           Task&LT;int> task = ctx.CallActivityAsync&LT;int>("F2", workBatch[i]);
           parallelTasks.Add(task);
        }
        await Task.WhenAll(parallelTasks);
        # Delegate all N outputs and send result to F3:
        = prallelTasks.Sum(t => t.Result);
        x.CallActivityAsync("F3", sum);
   }
   </pre>

   Async HTTP APIs response:

   Human interaction:

1. Development environment:

1. Click "Function App" in the left menu.

   Notice there is an App "Service Plan".

   https://aka.ms/AA4ul9b
   Community Library

   https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-python




   <a name="Templates"></a>

## Function Templates

1. Select a template: blob (for run ...

   * HTTP trigger - whenever it receives an HTTP request, responding based on data in the body or query string
   * Timer trigger - on a specified schedule
   * Azure Queue Storage trigger - whenever a message is added to a specified Azure Storage queue
   * Azure Service Bus Queue trigger - whenever a message is added to a specified Service Bus queue
   * Azure Service Bus Topic trigger - whenever a message is added to the specified Service Bus topic
   * Azure Blob Storage trigger - whenever a blob is added to a specified container
   * Azure Event Hub trigger - whenever an event hub receives a new event
   * Azure Cosmos DB trigger - whenever documents change in a document collection
   * IoT Hub (Event Hub) - whenever an IoT Hub receives a new event from IoT Hub (Event Hub)

   * SendGrid - sends a confirmation e-mail when a new item is added to a particular queue
   * Azure Event Grid trigger - whenever an event grid receives a new event

   * Kafka output - send messages to a specified Kafka topic
   * Kafka trigger - whenever a message is added to a specified Kafka topic
   * RabbitMQ trigger - whenever a message is added to a specified RabbitMQ queue
   * SignalR negotiate HTTP trigger - An HTTP triggered function that SignalR clients will call to begin connection negotiation

1. PROTIP: Function Name cannot contain blanks.

   https://go.microsoft.com/fwlink/?linkid=2141857

1. "Code + Test "

   Pull down the function.json file. It stores bindings for the C# script function. The binding encapsulates what triggers your Function and the data associated with it. In this case, any new blob added to the uploads/ path will trigger the function (blobTrigger) and the input (in) binding will populate the Function input parameters myBlob and name (as seen in the first line of the run.csx C# script).

   There are also output bindings. You want to store the blob information into a table and use an output binding to achieve that.

    In readme:

    For a `BlobTrigger` to work, you provide a path which dictates where the blobs are located inside your container, and can also help restrict the types of blobs you wish to return. For instance, you can set the path to `samples/{name}.png` to restrict the trigger to only the samples path and only blobs with ".png" at the end of their name.

1. Add output JSON code and Save.


   <a name="run.csx"></a>

   ### run.csx files

1. In the e run.csx file 

   <pre>public static Upload Run(Stream myBlob, string name, ILogger log)
{
    log.LogInformation($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes");

    return new Upload() {
        PartitionKey = "Uploads", 
        RowKey = Guid.NewGuid().ToString(), 
        Name = name,
        Length = myBlob.Length 
    };
}
&nbsp;
public class Upload
{
    public string PartitionKey { get; set; }
    public string RowKey { get; set; }
    public string Name { get; set; }
    public long Length { get; set; }
}  </pre>


<a name="AzureTables"></a>

### Azure Table

You will test the Function you created in this Lab Step. You must first create the Azure Table that stores the records of every blob that is added to the uploads container. Then you can test the function by uploading files to blob storage and observing the entities that are created in Azure Tables.


## Service Bus

az servicebus namespace create --name "${MY_SVC_BUS_NAMESPACE}" \
    --resource-group "${MY_RG}"

## Service Bus Queue




## Next

0. PROTIP: Rather than accepting "functions47c313e5" or something else,
   come up with a convention, such as:
   "CXR1-dr-WUS-v01" for West US region.

   PROTIP: Include the region in your Function app name so you are less confused.

0. Select your region, such as "West US" and 
   
0. Click the blue "Create + get started" button, then wait.

   ### Timer Scenarios #

0. Click the <strong>Timer</strong> sample to get started.

   We'll cover the 
   <a href="#DPFunc">Data processing</a> and 
   <a href="#Webhook">Webhook + API</a> later.

0. Click <strong>JavaScript</strong> if you want the possibility for cross-platform code.

   C# only runs on Azure.

0. Click "Create this function".

   If you time-out here you'll return to the 
   <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseRecentResourcesBlade">
   Azure Resources Dashboard</a>.


## Run function project locally

Press F5 to run your function app.

The runtime will output a URL for any HTTP functions, which can be copied and run in your browser's address bar.

To stop debugging, press Shift + F5.


## Deploy Function code to Azure

Click the Deploy to Function App… () icon in the Azure: Functions panel.



<hr />

## Learning Resources #

<a target="_blank" href="https://www.youtube.com/watch?v=zIfxkub7CLY" title="Dec 9, 2019">
VIDEO: Intro to Azure Functions - What they are and how to create and deploy them</a>
by IAmTimCorey

Jeff Hollan joins Scott Hanselman 

   * <a target="_blank" href="https://www.youtube.com/watch?v=UFxQhszT450" title="Mar 20, 2020">VIDEO: Go serverless: Event-driven applications with Azure Functions | Azure Friday</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=499iCgNLDDE" title="Nov 25, 2020">Build serverless APIs with Azure Functions | Azure Friday</a>

<a target="_blank" href="https://www.youtube.com/watch?v=ansa4M7iTmg">
AZ-900 Episode 17 | Azure Serverless Computing Services | Functions, Logic Apps, Event Grid</a>
by Adam Marczak

* <a target="_blank" href="https://app.pluralsight.com/player?course=introduction-azure-app-services">
  Introduction to Azure Apps Services</a>
  Pluralsight 2h 3m video course published Aug 24, 2016
  by Barry Luijbregts (@AzureBarry, <a target="_blank" href="https://www.blog.waardedoorit.nl/">blog.waardedoorit.nl</a>)

* <a target="_blank" href="https://cloudacademy.com/webinars/aws-lambda-advanced-coding-session-22/">
  video: Advanced Coding Session</a>
  and
  <a target="_blank" href="http://www.slideshare.net/AlexCasalboni/aws-lambda-advanced-coding-session/1">
  slides</a>
  (API Gateway authentication use cases, Amazon Kinesis Streams, Amazon Cognito and AWS CloudFormation)
  by Alex Casalboni of CloudAcademy.
   <a target="_blank" href="https://gist.github.com/alexcasalboni/b045542bbd77b9d0bdac2db939575eec/">
  repo</a>


## Social #

Yochay Kiriaty
(@yochayk)

Christopher Anderson
@crandycodes 
PM


## More on Serverless #

This is one of a series on Serverless computing

{% include serverless_links.html %}
