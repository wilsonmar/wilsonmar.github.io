---
layout: post
date: "2025-10-01"
lastchange: "25-10-05 v001 + new :2025-10-01-ms-agent-framework.md"
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

In October 2025, Microsoft announced their Agent Framework a few days before OpenAI announced their version 5 LLM.
<a target="_blank" href="https://www.youtube.com/watch?v=vw4ewYan02Y">Google has its Agent Development toolkit</a>.

PROTIP: I think betting our time to get paid work working on MCP from Microsoft has better payback than OpenAI or others.
OpenAI gets a lot of attention, but I think Microsoft has been the one to pull in profits from AI.
That's because if the battle for AI supremacy is about infra. <strong>lock-in</strong> and assured revenue for vendor,
throughtout its history, Microsoft has developed masterey of enterprise with their co-pilot-infused Office 365 and Azure ecosystems with centralized authentication capabilities.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1759979326/maf-ecosystem-1420x723_nkzv6o.png"><img alt="maf-ecosystem-1420x723.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1759979326/maf-ecosystem-1420x723_nkzv6o.png" /></a>

https://www.youtube.com/watch?v=CoGO6s7bS3A
The truth about AI-assited

A framework for building, orchestrating and deploying AI agents and multi-agent workflows with support for Python and .NET.

The “unified” in “Unified Microsoft Agent Framework” unifies and extends capabilities from two previous Microsoft projects  so teams no longer have to choose between experimentation and production:

* <a target="_blank" hrf="https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-semantic-kernel">Semantic Kernel</a> provides a stable SDK for AI foundations of connectors into enterprise systems, content moderation, and telemetry. Supports MCP, A2A, OpenAPI.

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
    AZURE_OPENAI_API_KEY="12345678C0pYAVCseYaFA3Hy3lpL8GZ9uKdX5BE3KBtNShhX0HhkJQQJ99BJACMsfrFXJ3w3AAABACOGsBer"
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

## Agent Python code

FIXME: ai-service is gone from
<tt>curl -s "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/main/articles/ai-services/openai/reference.md" | grep -i "api.*version" | head -10</tt>

https://learn.microsoft.com/en-us/agent-framework/tutorials/agents/run-agent?pivots=programming-language-python






## References:
   * https://learn.microsoft.com/en-us/azure/ai-foundry/openai/api-version-lifecycle?tabs=python#api-evolution



Multi-agent

MCP

A2A

OpenAPI




https://www.linkedin.com/pulse/from-prototype-production-introducing-unified-microsoft-leon-gordon-eudze/?trackingId=ihrrFL6keBkE71ORRXOrJw%3D%3D

https://aka.ms/kpmgagentframework
KPMG is leveraging the framework to power its KPMG Clara AI platform, connecting specialised agents to enterprise data with built-in safeguards.



https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/https://www.linkedin.com/in/yinaa/
By Yina Arenas, Corporate Vice President, Azure AI Foundry
https://azure.microsoft.com/en-us/blog/author/yina-arenas/