---
layout: post
date: "2025-10-09"
lastchange: "25-10-09 v003 + MS tools, ACA :2025-10-01-ms-agent-framework.md"
url: "https://wilsonmar.github.io/ms-agent-framework"
file: "ms-agent-framework"
title: "MS Agent Framework"
excerpt: "How to create Multi-Agent MCP servers calling multiple agents using Python, with enterprise features"
image:
# python-samples-1900x500.jpg
  feature: https://user-images.githubusercontent.com/300046/145717691-60b8c765-e0a3-4d63-bf7f-0cb89492c0ee.png
  credit: An Athlete Wrestling with a Python (1877) by Sir Frederic Leighton (1830-1896) at the Tate, London
  creditlink: https://www.wikiwand.com/en/An_Athlete_Wrestling_with_a_Python
comments: true
date_created: "2025-10-01"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Microsoft has created several "Agent Frameworks" since November 2023 when OpenAI's ChatGPT exploded in popularity. Microsoft provided a clever arrangement of taking stock in OpenAI for free use of Azure infra.
Each approach competes and confuses with different terminology and ways of working.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1759979326/maf-ecosystem-1420x723_nkzv6o.png"><img alt="maf-ecosystem-1420x723.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1759979326/maf-ecosystem-1420x723_nkzv6o.png" /></a>

1. <a target="_blank" href="https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/">Microsoft 365 Agents SDK</a> interact with Twilio, Slack, Messenger and other third-party channels within the Microsoft 365 ecosystem of Office applications (Microsoft Teams, Exchange mail, Word, Excel, PowerPoint), which includes Microsoft Graph central database of all activity.

2. <a target="_blank" href="https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-build">Copilot Studio agent builder in Microsoft 365 Copilot</a> provides a <strong>declarative</strong> language in Microsoft 365 Copilot for <strong>business users</strong> to author basic agents for common tasks by  describing the functionality they need, or they can use an intuitive visual interface to specify options for their agent.

3. <a target="_blank" href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/">Microsoft Copilot Studio</a> provides a <strong>low-code</strong> development environment that "citizen developers" can use to quickly build and deploy agents that integrate with a Microsoft 365 ecosystem or commonly used channels like Slack and Messenger. The visual design interface of Copilot Studio makes it a good choice for building agents when you have little or no professional software development experience. 

4. <a target="_blank" href="https://learn.microsoft.com/en-us/azure/ai-services/agents/">Azure AI Foundry Agent Service</a> is a managed service added within <strong>Azure AI Foundry cloud</strong> (<a target="_blank" href="https://ai.azure.com/">https://ai.azure.com</a>) to provide a <strong>visual</strong> way to create, manage, and use AI agents. The service is <strong>based on the OpenAI Assistants API</strong> but with increased choice of models, data integration, and enterprise security to use both the OpenAI SDK and the Azure Foundry SDK to develop agentic solutions.

   * Model: A deployed generative AI (GenAI) "database" that enables the agent to reason and generate natural language responses to prompts. A catalog of models that contain knowledge to ground prompts with contextual data.

   * Knowledge: data sources that enable the agent to ground prompts with contextual data. Potential knowledge sources include Internet search results from Microsoft Bing, an Azure AI Search index, or your own data and documents.

   * Tools: Programmatic functions that enable the agent to automate actions. Built-in tools to access knowledge in Azure AI Search and Bing are provided as well as a code interpreter tool that you can use to generate and run Python code. You can also create custom tools using your own code or Azure Functions.

   * Threads: conversations between users and agents. Each thread retains a history of the messages exchanged as well as any data assets generated, such as files.
   <br /><br />

   [<a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/ai-agent-fundamentals/5-exercise">HANDS-ON EXERCISE</a> using your subscription to create an ExpensesAgent using gpt-4o] It's a software service that uses AI to assist users with information and task automation.

5. <a target="_blank" href="https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/assistant">OpenAI Assistants API</a> provides a <strong>subset</strong> of the features in Foundry Agent Service, but only used with OpenAI models. In Azure, you can use the Assistants API with Azure OpenAI, though in practice the Foundry Agent Service provides greater flexibility and functionality for agent development on Azure.

6. <a target="_blank" href="https://microsoft.github.io/autogen/stable/index.html">AutoGen</a> is an open-source framework developed within Microsoft's Research lab as a "ideation" tool for experimenting with AI agents.

7. <a target="_blank" hrf="https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-semantic-kernel">Semantic Kernel</a> provides a stable SDK for AI foundations of connectors into enterprise systems, content moderation, and telemetry. 

8. <strong>Microsoft Agent Framework</strong> was announced on October 1st 2025 as Microsoft's enterprise approach to adopt Anothropic's MCP and <a href="#A2A">A2A protocol</a> embraced by the whole world earlier in 2025. MCP enables <strong>multi-agent solutions</strong> that have <strong>orchestration patterns</strong>. But Microsoft's framework adds its Entra ID for central <strong>enterprise enforcement</strong> of identity policy enforcement, content filters, human approval flows, plus OpenTelemetry for long-running agent observability (logging and tracing).

   The MS Agent framework supports coding in Python and .NET.

   NOTE: A few days before OpenAI announced their version 5 LLM. <a target="_blank" href="https://www.youtube.com/watch?v=vw4ewYan02Y">Google has its Agent Development toolkit</a>.

PROTIP: I think betting our time to get paid work working on MCP from Microsoft has better payback than OpenAI or others.
OpenAI gets a lot of attention, but I think Microsoft has been the one to pull in profits from AI.
That's because if the battle for AI supremacy is about infra. <strong>lock-in</strong> and assured revenue for vendor,
throughtout its history, Microsoft has developed masterey of enterprise with their co-pilot-infused Office 365 and Azure ecosystems with centralized authentication capabilities.

https://www.youtube.com/watch?v=CoGO6s7bS3A
The truth about AI-assisted

The “unified” in “Unified Microsoft Agent Framework” unifies and extends capabilities from two previous Microsoft projects so teams no longer have to choose between experimentation and production:

* <a target="_blank" href="https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-autogen">AutoGen</a>, a multi-agent orchestration & collaboration (from Microsoft Research), with added <a target="_blank" href="https://learn.microsoft.com/en-us/agent-framework/tutorials/workflows/simple-sequential-workflow?pivots=programming-language-csharp">workflows</a> which mix agents with <strong>business processes</strong> to provide concensus report generation and human-in-the-loop approvals.

    <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1759979198/maf-workflow-681x309_nmxlhv.png"><img alt="maf-workflow-681x309.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1759979198/maf-workflow-681x309_nmxlhv.png" /></a>

Workflow processing run several agents <strong>in parallel</strong>, unlike traditional Agent-based orchestration:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1759979936/maf-trad-agents-496x307_fuc4xi.png"><img alt="maf-trad-agents-496x307.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1759979936/maf-trad-agents-496x307_fuc4xi.png" /></a><a target="_blank" href="https://www.youtube.com/watch?v=VBz5HMYIRI4&t=5m44s">*</a>

https://aka.ms/AgentFramework reroutes to the SDK at<br />https://github.com/microsoft/agent-framework

The demo4.py workflow parses a VC pptx pitch deck file to JSON, than approves or rejects each:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1759980240/maf-workflow-381x555_qxuywu.png"><img alt="maf-workflow-381x555.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1759980240/maf-workflow-381x555_qxuywu.png" /></a><a target="_blank" href="https://www.youtube.com/watch?v=VBz5HMYIRI4&t=7m52s">*</a>

References:
* https://github.com/webmaxru/awesome-microsoft-agent-framework/ by Maxim Salnikov
* Announcement <a target="_blank" href="https://www.youtube.com/watch?v=yOBcPuLLmuY">video oct 1, 2025</a>
* https://learn.microsoft.com/en-us/agent-framework/tutorials/overview">Tutorials</a>
* https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/
* https://aka.ms/AgentFramework/Docs reroutes to <br />https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview
* See it in action: Watch demos on AI Show <br />https://aka.ms/AgentFramework/AIShow "for Next-Gen Multi-Agent" with <a target="_blank" href="https://www.linkedin.com/in/elijahstraight/">Product Manager Elijah Straight in San Francisco</a>.
* <a target="_blank" href="https://www.youtube.com/watch?v=AAgdMhftj8w">VIDEO: "Agent Framework: Building Blocks for the Next Generation of AI Agents"</a> rounted from "Open at Microsoft" https://aka.ms/AgentFramework/OpenAtMicrosoft
Learn step by step: Microsoft Learn modules for Agent Framework and AI Agents for Beginners
* https://discord.com/channels/1113626258182504448/1422947050441543861
after <a target="_blank" href="https://aka.ms/foundry/discord">joining</a> Azure AI Foundry Discord to connect with developers and product groups, sharpen your AI skills, and stay inspired through real-time community. 
* AMA Tuesday 7th October 9am PST
* https://learn.microsoft.com/en-us/agent-framework/user-guide/overview
* https://www.youtube.com/watch?v=jyIepE19_0M">"Getting Started with Microsoft Agent Framework (Semantic Kernel + AutoGen)"</a> 
by Designing With AI


## Training

LEARN: https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-on-azure/
"Develop AI agents on Azure"

Get the "Microsoft Certified: Azure AI Engineer Associate" by passing the <a target="_blank" href="https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/?source=recommendations&practice-assessment-type=certification
">$165USD AI-102</a> "Designing and Implementing a Microsoft Azure AI Solution" exam in 100 minutes.

"Design and implement an Azure AI solution using Azure AI services, Azure AI Search, and Azure Open AI".


## Industry Use Cases for MCP
Industry	MCP Application Example
Healthcare	Secure EHR access, patient summaries (Gartner)
Finance	Real-time risk monitoring, automated reporting
Legal	Contract screening, compliance audit (Nasuni)
Sales/CRM	Auto-fetch customer histories, sales insights
HR	Resume screening, employee query automation
Manufacturing	Predictive maintenance, supply chain workflows
Retail	Inventory management, live fraud checks


## Get API keys on websites:
1. In a internet browser, sign in to the Azure Portal (https://portal.azure.com).
2. Use your email and credit card to create a global billing account.
3. Use my program TODO:_____ to create users with minimal permissions.
4. Use my program ____ to identify the Region you should use based on geography, service for the location, price, speed.
5. Create a Resource Group such as "ai-westus3-251008a"

6. <a target="_blank" href="https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/create-resource?pivots=web-portal">DOCS</a>: In the "Search resources,..." type "Azure OpenAI" to manually "Create Azure OpenAI" resources.
   Alternately, run my program  _______
   * Use my Naming Conventions ???
   * Use the "Standard SO" Pricing Tier.
   * Selected networks
   * Add tags for billing analytics.

7. Open your .env file to edit environment variables. 
   ```
   AZURE_LOCATION="westus3"
   AZURE_RESOURCE_GROUP="westus3-251008a"
   ```
8. Click "Click here to view endpoints."
9. Click to copy the URL and edit your .env file to add this environment variable:
   ```
   AZURE_OPENAI_ENDPOINT="https://ai-westus3-251008a.openai.azure.com/"
   ```
   <tt>endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],</tt>

10. Click "Click here to manage keys". If you're using <strong>AzureCliCredential</strong>, create: 
    ```
    AZURE_OPENAI_API_KEY="12345678C..."
    ```
    <tt>api_key=os.environ["AZURE_OPENAI_API_KEY"],</tt>

11. At https://ai.azure.com/?cid=learnDocs = portal.azure.com > AI Foundary | Azure OpenAI, click "Go to Azure AI Foundry portal".
12. At https://ai.azure.com/resource/deployments = "Model deployments", click the blue "+ Deploy model".
13. Click "Deploy base model". See ??? TODO: How to select an LLM model from the <a target="_blank" href="https://ai.azure.com/explore/models">model catalog</a> and <a target="_blank" href="https://ai.azure.com/explore/models/leaderboard">Quality Leadershoard</a> <a target="_blank" href="https://ai.azure.com/doc/azure/ai-foundry/concepts/model-benchmarks">benchmarks</a>.

    "The gpt-35-turbo (also known as ChatGPT) is the most capable and cost-effective model in the gpt-3.5 family which has been optimized for chat using the Chat Completions API. It is a language model designed for conversational interfaces and the model behaves differently than previous gpt-3 models. Previous models were text-in and text-out, meaning they accepted a prompt string and returned a completion to append to the prompt. However, the ChatGPT model is conversation-in and message-out. The model expects a prompt string formatted in a specific chat-like transcript format and returns a completion that represents a model-written message in the chat. Learn more at https://learn.microsoft.com/azure/cognitive-services/openai/concepts/models

14. Select a model by Search because some models in the docs are not really available (such as Mistral, Phi, Cohere). The lowest cost "Chat completion" model "gpt-35-turbo".
15. Click "Confirm" and select "Deployment type" select "Standard". [<a target="_blank" href="https://aka.ms/deployment-types-standard">DOC</a>]
16. Type the deployment (LLM) name in the .env file and click "Deploy".
    ```
    AZURE_OPENAI_RESPONSES_DEPLOYMENT_NAME="gpt-35-turbo"
    ```
    <tt>deployment_name=os.environ["AZURE_OPENAI_RESPONSES_DEPLOYMENT_NAME"],</tt>

15. <a target="_blank" href="https://learn.microsoft.com/en-US/azure/cognitive-services/openai/reference">DOCS</a>:
   ```
   AZURE_OPENAI_API_VERSION="2023-03-15-preview" or "2024-10-01-preview" or "2024-06-01"
   ```
    <t>>api_version=os.environ["AZURE_OPENAI_API_VERSION"],</tt>

   ```
   TARGET_URL="https://ai-westus3-251008a.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2025-01-01-preview"
   ```

https://learn.microsoft.com/en-us/azure/developer/python/sdk/examples/azure-sdk-example-list-resource-groups?tabs=bash


<a name="A2A"></a>

## A2A Collaboration Protocol

<a target="_blank" href="https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/">On April 2025, Google and its many partners announced</a> the A2A (Agent-to-Agent) Protocol to openly standardize coordination among multiple remote or distributed AI agents. A2A standardizes a secure way to manage connections to remote agents, delegate requests to the appropriate agent, and communicate between AI agents. A2A manages registering and routing of remote agents.

   * <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/discover-agents-with-a2a/">LEARN</a>
   * [ <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/discover-agents-with-a2a/6-exercise">LEARN</a> hands-on ]
   * https://www.projectpro.io/article/google-agent-to-agent-protocol/1172
   * https://www.ibm.com/think/topics/agent2agent-protocol
   * https://www.descope.com/learn/post/a2a
   <br /><br />

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1760038094/a2a-working-960x540_or4etl.webp"><img alt="a2a-working-960x540.webp" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1760038094/a2a-working-960x540_or4etl.webp" /></a><a target="_blank" href="https://www.descope.com/learn/post/a2a">*</a>

An agent defines its skills and publishes its Agent Card (described below) for other agents or clients to discover automatically. Requests to an agent can be routed to the agent’s appropriate skill.

* The AgentExecutor interface handles all incoming requests sent to an agent. It defines how the agent processes incoming requests, generates responses, and communicates with clients or other agents. A "Hello World" agent workflow:
   1. The agent has a small helper class that implements its core logic (for example, returning a string).
   1. The executor receives a request and calls the agent’s business logic.
   1. The executor wraps the result as an event and places it on the event queue.
   1. A routing mechanism sends the event back to the requester.
   <br /><br />

* The Request Handler routes incoming requests to the appropriate methods on your Agent Executor (for example, execute or cancel). It manages the task lifecycle using a Task Store, which tracks tasks, streaming data, and resubscriptions.
Even simple agents require a task store to handle interactions reliably.

* <strong>Agent Cards</strong> contain metadata about the agent's capabilities for exposure like a digital business card. It presents structured data that a routing agent or client retrieves to discover how to interact with it. Key elements of an Agent Card include:

   * Identity Information: Name, description, and version of the agent.
   * Endpoint URL: Where the agent’s A2A service can be accessed.
   * Capabilities: Supported A2A features such as streaming or push notifications.
   * Default Input/Output Modes: The primary media types the agent can handle.
   * Skills: A list of the agent’s skills that other agents can invoke.
   * Authentication Support: Indicates if the agent requires credentials for access.
   * Test cases to ensure it accurately represents your agent’s skills and endpoints. This allows clients or routing agents to discover the agent, understand what it can do, and interact with it appropriately.
   <br /><br />

* The Server Application exposes the agent card and request handler endpoints, enabling clients to interact with the agent.
To handle HTTP requests at a base URL on an ASGI server (like Uvicorn), which listens on a network interface and port for a web framework (Starlette in Python).

* Client making requests of two types:

   * Non-Streaming Requests where a message and waits for a complete response. This traditional type of HTTP request is suitable for simple interactions or when a single response is expected.

   * Streaming Requests where a message and receives responses incrementally as the agent processes the request. This type of request is useful for long-running tasks or when you want to update the user in real-time.
   <br /><br />

* An Agent Skill describes a specific capability or function that the agent can perform. Think of it as a building block that communicates to clients or other agents what tasks the agent is designed to handle. Key elements of an Agent Skill include:

   * ID: A unique identifier generated for the skill.
   * Name: A human-readable name describing the skill.
   * Description: A detailed explanation of what the skill does.
   * Tags: Keywords for categorization and easier discovery.
   * Input/Output Modes: Supported data formats or media types (for example, text, JSON).
   * Tasks: Objects representing ongoing tasks, which may require follow-up calls to check status or retrieve results.
   * Sample prompts (as part of use cases) to illustrate the skill in action, for testing.
   <br /><br />

   A simple "Hello World" skill could return a basic greeting in text format, whereas a blog-writing skill might accept a topic and return a suggested title or outline.

Trade secrets can be protected by offering “opaque” agents who collaborate on tasks without revealing their internal logic.

## Agent Python code

FIXME: ai-service is gone from
<tt>curl -s "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/ai-services/openai/reference.md" | grep -i "api.*version" | head -10</tt>

https://learn.microsoft.com/en-us/agent-framework/tutorials/agents/run-agent?pivots=programming-language-python


## Humans on the Loop

US presidential Executive Order 14179 and memos like M-24-10 call for bold AI adoption with real guardrails. The mandate is to deploy AI systems that are governed, auditable, and trusted from the start.

How does your system Detect and rebuff risky behaviors such as:

* Accessing sensitive code repositories unintentionally
* Using tools beyond their approved scope
* Exposing sensitive data through verbose or unreviewed outputs
* Escalating privileges, altering configurations, or attempting unauthorized external communications
 
https://intelligencecommunitynews.com/ic-insiders-builders-at-the-frontline-safeguarding-agentic-ai-in-the-intelligence-community/


## References:
   * https://learn.microsoft.com/en-us/azure/ai-foundry/openai/api-version-lifecycle?tabs=python#api-evolution

  * https://www.linkedin.com/pulse/from-prototype-production-introducing-unified-microsoft-leon-gordon-eudze/?trackingId=ihrrFL6keBkE71ORRXOrJw%3D%3D

https://aka.ms/kpmgagentframework
KPMG is leveraging the framework to power its KPMG Clara AI platform, connecting specialised agents to enterprise data with built-in safeguards
to modernize member firm audit process used on every KPMG audit worldwide. 


https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/https://www.linkedin.com/in/yinaa/
By Yina Arenas, Corporate Vice President, Azure AI Foundry
https://azure.microsoft.com/en-us/blog/author/yina-arenas/