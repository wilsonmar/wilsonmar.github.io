---
layout: post
title: "Azure (Serverless) Functions"
excerpt: "Effortless instant infinite capacity"
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

It's assumed that you're already familiar with my <a target="_blank" href="https://wilsonmar.github.io/azure-cloud-onramp">Azure cloud onramp</a> and
[the Serverless framework](/serverless/)


## Why #

<a target="_blank" href="https://techcrunch.com/2016/09/01/serverless-is-the-new-multitenancy/">
Multitenancy</a>
"not only allowed for higher gross margins, it made it viable to serve small and medium businesses with world-class software  —  at a profit."


There are several ways to create and deploy Azure functions. In production, you would probably configure a deploy mechanism to allow Azure Functions to get the latest version of Terraform or other IaC code from your version control system. 

Azure Functions makes use of Azure Blob Storage with Azure Table Storage. Any time a blob is uploaded to a Blob Storage container, a corresponding row in Table Storage is created.


## Manual Portal GUI

1. Open blade <a target="_blank" href="https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites/kind/functionapp">Function Apps</a> in recents or Search.


1. "+ Create".

1. WARNING: The Function name you specify is public and so needs to be globally unique prefix to
.azurewebsites.net

1. Runtime Stacks:
   * .NET (C# and F#)
   * Node.js (JavaScript)
   * Python
   * Java
   * PowerShell Core
   * Custom Handler
   <br /><br />

1. Hosting: 
   Storage: Select the storage account beginning with caazfncal (Do not create a new storage account or following lab step instructions will not work)
   OS: Select Windows
   Plan: Select Consumption (The consumption plan offers pay-per-use pricing compared to flat-rate predictable pricing with App Service Plan hosting)

   Monitoring: Default "Application Insights" is "No".

1. When it appears, click on the blue "Go to resource".

1. Click "Function App" in the left menu.

   Notice there is an App "Service Plan".

1. In "Functions"
1. "+ Add
1. Development environment:
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
   * Durable Functions Entity HTTP starter - whenever it receives an HTTP request to execute an orchestrator function.
   * Durable Functions HTTP starter - whenever it receives an HTTP request to execute an orchestrator function.
   * Durable Functions activity - whenever an Activity is called by an orchestrator function.
   * Durable Functions entity (class) - A C# entity that stores state and represented by a class.
   * Durable Functions entity (function) - A C# entity that stores state and represented by a function.
   * Durable Functions orchestrator - An orchestrator function that invokes activity functions in a sequence.
   * Kafka output - send messages to a specified Kafka topic
   * Kafka trigger - whenever a message is added to a specified Kafka topic
   * RabbitMQ trigger - whenever a message is added to a specified RabbitMQ queue
   * SignalR negotiate HTTP trigger - An HTTP triggered function that SignalR clients will call to begin connection negotiation

1. Function Name cannot contain blanks.

   https://go.microsoft.com/fwlink/?linkid=2141857

1. " Code + Test "

   Pull down the function.json file. It stores bindings for the C# script function. The binding encapsulates what triggers your Function and the data associated with it. In this case, any new blob added to the uploads/ path will trigger the function (blobTrigger) and the input (in) binding will populate the Function input parameters myBlob and name (as seen in the first line of the run.csx C# script).

   There are also output bindings. You want to store the blob information into a table and use an output binding to achieve that.

    In readme:

    For a `BlobTrigger` to work, you provide a path which dictates where the blobs are located inside your container, and can also help restrict the types of blobs you wish to return. For instance, you can set the path to `samples/{name}.png` to restrict the trigger to only the samples path and only blobs with ".png" at the end of their name.

1. Add output JSON code and Save.

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

   ### Azure Table

You will test the Function you created in this Lab Step. You must first create the Azure Table that stores the records of every blob that is added to the uploads container. Then you can test the function by uploading files to blob storage and observing the entities that are created in Azure Tables.



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




<hr />

## Learning Resources #

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
