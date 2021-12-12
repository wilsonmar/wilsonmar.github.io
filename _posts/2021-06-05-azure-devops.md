---
layout: post
title: "Azure DevOps"
excerpt: "Pass Microsoft's comprehensive AZ-400 on DevOps for automated CI/CD pipelines in the Azure cloud as well as GitHub Actions"
tags: [devops, devsecops]
date: "2021-12-09"
file: "azure-devops"
image:
# azure-devops-products-1900x400-21605.jpg
  feature: https://user-images.githubusercontent.com/300046/56040192-132c7600-5cf3-11e9-93cb-99490c5ae7b8.jpg
  credit: Microsoft
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

There are a lot of summary/high-level tutorials and videos. But <a target="_blank" href="https://wilsonmar.github.io/azure-devops/">this article</a> skips the generalized sales hype and presents a <strong>"deep dive" with automation</strong> with logical and succinct hands-on steps so you get perficient quickly.

<a href="#YourSettings">

## Your settings (Naming Conventions)

PROTIP: What makes my tutorial here unique are <a href="#CLI">(CLI and PowerShell) automation scripts</a> I created to do (quickly and repeatedly) what manual clicking through GUI portal. Running the scripts locally on your laptop requires some <a href="#Install">installation</a>.

But whether you use GUI or CLI, before diving in, define custom values to be used by Azure, by replacing defaults below with your own:

   <pre><strong>export AZDEVOPS_ORG_NAME="contoso"
export AZDEVOPS_PROJ_NAME="ContosoWebApp"
export AZDEVOPS_REST_VER="6.0"
export AZDEVOPS_GITHUB_PAT="12928342342982342347abcdf2324234"
export AZDEVOPS_USER_EMAIL="johndoe@gmail.com"
   </strong></pre>

DEFINITION: The combination of {organization} / {project} is called a "<strong>route</strong>".

Documentation below references the settings above.

<a name="ProductComponents"></a>

## Azure DevOps Product components

If you don't need the history nor to <a href="#CreateAccount">create an Azure account</a>, begin with <a href="#QuickStart">my QuickStart tour with commentary (below)</a>.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/123786211-a9c6bc80-d896-11eb-9f00-de224687bc32.png">
<img width="536" alt="az-devops-services-1072x688" src="https://user-images.githubusercontent.com/300046/123786211-a9c6bc80-d896-11eb-9f00-de224687bc32.png"></a>

Each widget on the Dashboard can be <a target="_blank" href="https://docs.microsoft.com/en-us/rest/api/azure/devops/dashboard/?view=azure-devops-rest-5.0">added or deleted</a> using an API.

<a target="_blank" href="https://status.dev.azure.com/_history">https://status.dev.azure.com/_history lists events</a> and <a target="_blank" href="https://status.dev.azure.com/">status</a> in each geographical area (region) by product:

   1). <a href="#AzureBoards"><strong>Azure Boards</strong></a> (like Jira) to plan, track, and discuss Work Items across teams using Kanban boards (to deliver value to users faster)

   2). <a href="#AzureRepos"><strong>Azure Repos</strong></a> (like GitHub and AWS Code Commit, etc.) to use Git for source version, collaborate using pull requests, and file management

   3). <a href="#AzurePipelines"><strong>Azure Pipelines</strong></a> (like Jenkins, AWS CodeDeploy, etc.) for CI/CD automation 

   4). <a href="#AzureDevTestPlans"><strong>Azure Test Plans</strong></a> to manage manual and exploratory testing

   5). <a href="#AzureArtifacts"><strong>Azure Artifacts</strong></a> (like Artifactory, Nexxus, etc.) for binary package consumption package management 

<img align="right" alt="azure-devopssuite-52x52.png" width="52" src="https://user-images.githubusercontent.com/300046/56076532-9b605900-5d8f-11e9-89a2-9b9b02e1bf1d.png"><a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/">Azure DevOps Services (https://azure.com/devops)</a> adds to the above this product offering:

   6). <a href="#AzureDevTestLabs"><strong>Azure DevTest Labs</strong></a> (like Sauce Labs) provides self-service creation of pre-provisioned sandbox environments from private custom images in VHD.

QUESTION: Do "Other services" include extensions installed from <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms.feed">https://marketplace.visualstudio.com/items</a>, such as <a href="#Search">Code Search</a>, <a href="#DevOpsAnalytics">Analytics</a>, etc.

Each product above has its own pricing.

The <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/release-notes/">Features Timeline (product roadmap)</a> has additional "Areas":

   * Administration
   * Notifications

Sign into <a target="_blank" href="https://aka.ms/AzureDevOpsForum/">aka.ms/AzureDevOpsForum</a> = Developer Community Problems and Features (Active | Newest | Votes)

NOTE: Azure DevOps works with more languages than just C# (Java, etc.).

<hr />

<a name="CourseProducts"></a>

## Related Products and Services

Azure DevOps makes use of the following products (services and client executables):

NOTE: Microsoft exited the software testing market in 2019 by retiring their products.

* Azure <strong>IAM</strong> access manager

* <a target="_blank" href="https://aex.dev.azure.com/me?mkt=en-US">AEX.dev.azure.com</a>
   replaces <a target="_blank" href="https://app.vssps.visualstudio.com/_signedin">Visual Studio at https://app.vssps.visualstudio.com/</a>


   <a name="ARM"></a>

* <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/"><strong>Azure Resource Manager (ARM)</strong></a> carries out specifications entered in the Azure Dashboard. It deploys, updates, or deletes cloud resources in a single, coordinated operation. Resources can include virtual machines, storage accounts, virtual networks, services, or any component that you are managing.
   NOTE: <a target="_blank" href="https://www.youtube.com/watch?v=s7bQu4Y1oHU">VIDEO</a>: ARM vs. Classic Azure Service Management

* <a target="_blank" href="https://docs.microsoft.com/en-us/azure/key-vault/key-vault-whatis"><strong>Azure Key Vault</strong></a> provides an HSM (<a target="_blank" href="https://www.vaultproject.io/docs/vs/kms.html">vs. Hashicorp Vault</a>, which enforces automatic revocation of leases with key usage audit and key rolling). KMS is focused on securely storing encryption keys and supporting cryptographic operations (encrypt and decrypt) using those keys. It supports access controls and auditing as well.

* <a target="_blank" href="https://wilsonmar.github.io/azure-cloud/#azure-service-fabric">Azure Service Fabric</a>

   <a name="AKS"></a>

* <a target="_blank" href="https://azure.microsoft.com/en-us/services/kubernetes-service/"><strong>Azure Container Service (AKS)</strong></a> - uses Docker to make dynamic scaling easy on Kubernetes, Docker Swarm, or Mesos DC/OS.
   AKS handles auto upgrades, patching, and self-healing of Kubernetes clusters.

   https://docs.microsoft.com/en-us/azure/aks/intro-kubernetes
   Introduction to Azure Container Service (AKS)

   https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough
   Deploy an Azure Container Service (AKS) cluster

   https://azure.microsoft.com/en-us/resources/videos/episode-198-azure-container-service-with-ross-gardler/
   Cloud Cover Episode 198: Azure Container Service with Ross Gardler


* <a target="_blank" href="https://azure.microsoft.com/en-us/services/container-registry/"><strong>Azure Container Registry (ACR)</strong></a> stores images for different types of container deployments (Swarm, DC/OS and Kubernetes, etc.) as well as Azure services such as App Service, Batch, and Service Fabric. 

   Unlike Docker Hub, ACR provides more control over who can see and use images, which ACR can sign cryptographically (to detect corruption) and encrypt at rest. The Premium SKU of Container Registry includes 500 GiB of storage that is geo-replicated.

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview#automate-os-and-framework-patching">ACR Tasks</a> dynamically discovers base image dependencies when it <a target="_blank" href="https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-base-image-update#create-a-task">builds a container image</a>, so when changes are detected, automatically rebuilds application images.

   <a name="DevOpsAnalytics"></a>

* <strong>Log Analytics</strong> (<a target="_blank" href="https://devblogs.microsoft.com/devops/analytics-for-azure-devops-services-is-now-generally-available/">generally available</a>)

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/56087622-20994b80-5e2c-11e9-928d-d4d3b90a92bb.jpg"><img alt="azure-log-analytics-711x306-35708.jpg" width="711" src="https://user-images.githubusercontent.com/300046/56087622-20994b80-5e2c-11e9-928d-d4d3b90a92bb.jpg"></a>


   <a name="AppInsights"></a>

* <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"><img align="right" alt="azure-app-insights-icon-51x50.png" width="51" src="https://user-images.githubusercontent.com/300046/56264992-82b0b580-60a5-11e9-9757-8b59981aacb1.png"><strong>Application Insights</strong></a> - the APM service works with <strong>Azure Service Profiler</strong> for ASP.NET code. Its API and SDKs (in .NET, Java, node.js) and <a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.applicationinsights.telemetryclient?view=azure-dotnet">TelemetryClient</a> obtain metrics about requests, pages views, dependency calls, trace (log) messages, exceptions, and more. (Add <a target="_blank" href="https://stackify.com/application-insights-things-to-know/">Retrace to collect first chance exceptions</a>)

   <a target="_blank" href="https://www.youtube.com/watch?v=WJKefPAdPpg">Monitor Web Apps using Azure Application Insights</a> Nov 18, 2016

* Other <a target="_blank" href="https://azure.microsoft.com/en-us/products/devops-tool-integrations/">Azure DevOps tool integrations</a>

Summary: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/user-guide/devops-alm-overview?toc=/azure/devops/user-guide/toc.json&view=azure-devops">
DevOps tools overview for Azure DevOps</a>

<hr />

<a name="Rebranding"></a>

## Rebranding History

<a target="_blank" href="https://www.forbes.com/sites/janakirammsv/2018/09/16/azure-devops-why-its-a-big-deal-for-microsoft-and-the-community/#353e0a8c6780" title="Why It's A Big Deal For Microsoft And The Community">"Azure DevOps" was a big deal for Microsoft when it was first announced Sep 16, 2018</a>.

<a target="_blank" href="https://www.youtube.com/watch?v=3WWpx4W-oK8" title="Microsoft's DevOps Vision">VIDEO</a>:
Buck Hodges (<a target="_blank" href="https://twitter.com/tfsbuck">@tfsbuck</a>), Director of Engineering for Microsoft VSTS, <a target="_blank" href="https://www.youtube.com/watch?v=aIiLhK0NIlY">Jun 27, 2018 VIDEO: Global DevOps Bootcamp 2018 Keynote</a> how Microsoft evolved from on-premise TFS into VSTS as a service shipping in 3 week sprints, from the same code repository. Add  SPS (Shared Platform Service) for account, identity, profile, licensing.


<hr />

<a name="GUI"></a>
<a name="VisualStudio.com"></a>

### dev.azure.com was VisualStudio.com

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/release-notes/2018/sep-10-azure-devops-launch#administration">Here's some history</a>:

   Back in Sept 2018 there was a name upgrade from Visual Studio Online (VSO) 
   <a target="_blank" href="http://www.visualstudio.com/">http://www.visualstudio.com</a>
   which included capabilities in Visual Studio Team Services (VSTS), which began as a performance testing server and on-premise Team Foundation Server (TFS), now called "Visual Studio Server" on-premises.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/60979290-aa539a80-a2ef-11e9-8b96-d3ababade726.jpg"><img alt="visualstudio com-1185x178-20653.jpg" width="1185" src="https://user-images.githubusercontent.com/300046/60979290-aa539a80-a2ef-11e9-8b96-d3ababade726.jpg"></a>

   <a target="_blank" href="https://visualstudio.microsoft.com/app-center/">"Visual Studio App Center"</a> is for mobile iPhone/Android app development and integration (using <a target="_blank" href="https://wilsonmar.github.io/xamarin">Xamarin</a>) so not in scope for this topic here. (<a target="_blank" href="https://twitter.com/vsappcenter?lang=en">@vsappcenter</a>)

<hr />

<a name="Competition"></a>

## Competition

Forrester's Continuous Delivery And Release Automation" market assesement ranked Microsoft among leaders
<a target="_blank" href="https://reprints.forrester.com/#/assets/2/1392/RES157265/reports">in 2020</a>:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/145601881-ad216631-8e13-4a12-84b6-ca4d89391d88.gif"><img alt="azure-forrester-cicd-2020" src="https://user-images.githubusercontent.com/300046/145601881-ad216631-8e13-4a12-84b6-ca4d89391d88.gif"></a>

Although Microsoft has gained "Market Presence" from rankings in 2018:
<img alt="azure-devops-gartner-2018-485x527-13777.jpg" width="485" src="https://user-images.githubusercontent.com/300046/56278410-69b6fd00-60c3-11e9-847b-4c7f4a8a73d6.jpg">

Microsoft's "current offerings" continue to lag behind IBM and Cloudbees/Jenkins (which has shot up to the top ranking) after acquiring Electric Cloud. 
NOTE: IBM's product is called "Urban Code". IBM also acquired Red Hat and its <a href="#Ansible">Ansible</a> portfolio.
Broadcom bought CA. <a target="_blank" href="https://devops.com/digital-ai-the-companies-formerly-known-as-xebia-labs-collabnet-plus/">Digital.ai bought</a> Xebia.

> The acquisition of GitHub in 2020 has caused confusion about how to prepare for Microsoft's future direction with Azure DevOps.

Microsoft doesn't use the term "DevSecOps" for their product because it includes 3rd-party (from Marketplace) security testing tools rather than in-house tools.

<hr />

<a name="CertsOnDevOps"></a>

## AZ-400 certification

<img align="right" alt="azure-devopsexpert-230x258-7173.jpg" width="230" src="https://user-images.githubusercontent.com/300046/56392303-56548080-61ee-11e9-8c6c-016ec8c3625a.jpg">
You need to have passed EITHER exam AZ-104 "Administrator Associate" OR AZ-203/204 "Developer Associate" before paying $165 to pass <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-400">exam AZ-400 "Implementing Azure DevOps Solutions"</a> to make you a <a target="_blank" href="https://www.microsoft.com/en-us/learning/azure-devops.aspx">"Microsoft Certified: Azure DevOps Engineer Expert"</a>.

NOTE: Exam AZ-400 replaces <a target="_blank" href="https://www.microsoft.com/en-us/learning/exam-70-538.aspx">exam "Implementing Microsoft Azure DevOps Solutions" 70-538</a>. Although there are still <a target="_blank" href="https://www.edx.org/school/microsoft">free online courses from Microsoft at at EDx.org</a>, the <a target="_blank" href="https://academy.microsoft.com/en-us/professional-program/tracks/devops/">9 video courses (of 8-16 hours each) Microsoft Professional Program for DevOps</a> is now gone. It had covered these technologies:

   1. VSTS (Visual Studio Team System) - gone
   2. "Visual Studio" 2017/2019
   3. <strong>Azure Container Service (ACS)</strong> is like Docker and rkct (from Red Hat, pronounced like "rocket").
   4. <a href="#AppInsights">Application Insights</a>
   5. Selenium (for functional testing)
   6. Operations Management Suite (OMS)
   <br /><br />

Thresholds for passing the AZ-400 exam:<br />
A minimum score of 70 percent on the overall exam.<br />
A minimum score of 35 percent on each exam domain.


### Microsoft's AZ-400 tutorials

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/exams/az-400">Microsoft's free textual tutorials and labs</a> uses the same structure as the exam:

* Develop an <a href="#Instrumentation_Strategy">instrumentation strategy</a> (5-10%)
* Develop a <a href="#SRE_Strategy">Site Reliability Engineering (SRE) strategy</a> (5-10%)
* Develop a <a href="#Security_Plan">security and compliance plan</a> (10-15%)
* Manage <a href="#Source_Controls">source control</a> (10-15%)
* Facilitate <a href="#Collaboration">communication and collaboration</a> (10-15%)
* Define and implement <a href="#CI">continuous integration</a> (20-25%)
* Define and implement a <a href="#CD">continuous delivery and release management strategy</a> (10-15%) 
<br /><br />


<a name="ClassLabs"></a>

### AZ-400 Certification Class Labs

PROTIP: I think the most useful learning experience is <a target="_blank" href="https://docs.microsoft.com/en-us/learn/certifications/courses/az-400t00">Microsoft's 5-day live AZ-4100T00 class</a> by Robert Tichelman & Vishal Nigam, but I highly recommend everyone get hands-on on the <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/tree/master/Instructions/Labs">lab instructions in Github</a> by <a target="_blank" href="https://www.linkedin.com/in/unaihuete/">Unai Huete Beloki</a> and <a target="_blank" href="https://www.linkedin.com/in/michael-kenntenich/">Michael Kenntenich</a>. 

Microsoft's <a target="_blank" ref="https://aka.ms/az400labs/">class Modules and labs at aka.ms/az400labs</a> generally shows use of the GUI Console rather than CLI commands, which I have prepared in
<a target="_blank" href="https://github.com/wilsonmar/azure-quickly">https://github.com/wilsonmar/azure-quickly</a>, based on 
https://docs.microsoft.com/en-us/cli/azure/keyvault?view=azure-cli-latest

Module 0. Lab 00: Validate lab environment

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M00_Validate_lab_environment.md">Lab: Validate Lab Enviornment</a>

   * STAR: <a target="_blank" href="https://github.com/wilsonmar/azure-cloud-onramp/">github.com/wilsonmar/azure-cloud-onramp</a>
   * STAR: <a target="_blank" href="https://github.com/wilsonmar/azure-quickly/">github.com/wilsonmar/azure-quickly</a>
   * Visual Studio Code


Module 1. Planning for DevOps

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M01_Agile_Planning_and_Portfolio_Management_with_Azure_Boards.md">
Lab : Agile Planning and Portfolio Management with Azure Boards</a> 

   PROTIP: Instead of https://aex.devops.azure.com, use <a target="_blank" href="https://devops.azure.com">https://devops.azure.com</a>.

   * Transformation Planning
   * Project Selection
   * Team Structures
   * Migrating to Azure DevOps


Module 2. Getting Started with Source Control [Azure Repos]

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M02_Version_Controlling_with_Git_in_Azure_Repos.md">
Lab : Version Controlling with Git in Azure Repos</a>

   * Git is the default version control provider for new projects. 
   * Clone an existing repository
   * Save work with commits
   * Review history of changes
   * Work with branches by using Visual Studio Code

   * Introduction to GitHub
   * Migrating from Team Foundation Version Control (TFVC) to Git in Azure Repos


Module 3. Managing Technical Debt
   
* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M03_Sharing_Team_Knowledge_using_Azure_Project_Wikis.md">
Lab : Sharing Team Knowledge using Azure Project Wikis</a>

   * Identifying Technical Debt
   * Knowledge Sharing within Teams
   * Modernizing Development Environments with Codespaces


Module 4. Working with Git for Enterprise DevOps

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M04_Version_Controlling_with_Git_in_Azure_Repos.md">
Lab : Version Controlling with Git in Azure Repos</a>

   * How to Structure Your Git Repo
   * Git Branching Workflows
   * Collaborating with Pull Requests in Azure Repos
   * Why Care About Git Hooks
   * Fostering Inner Source
   * Managing Git Repositories


Module 5. Configuring Azure Pipelines

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M05_Configuring_Agent_Pools_and_Understanding_Pipeline_Styles.md">
Lab : Configuring Agent Pools and Understanding Pipeline Styles</a>


Module 6. Implementing Continuous Integration using Azure Pipelines

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M06_Enabling_Continuous_Integration_with_Azure_Pipelines.md">
Lab : Enabling Continuous Integration with Azure Pipelines</a>

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M06_Integrating_External_Source_Control_with_Azure_Pipelines.md">
Lab : Integrating External Source Control with Azure Pipelines</a>


Module 7. Managing Application Configuration and Secrets

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M07_Integrating_Azure_Key_Vault_with_Azure_DevOps.md">
   <strong>Lab 07: Integrating Azure Key Vault with Azure DevOps</strong></a>


Module 8. Implementing Continuous Integration with GitHub Actions

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M08_Implementing_GitHub_Actions_by_using_DevOps_Starter.md">
Lab : GitHub Actions Continuous Integration</a>


Module 9. Designing and Implementing a Dependency Management Strategy

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M09_Package_Management_with_Azure_Artifacts.md">
Lab : Package Management with Azure Artifacts</a>


Module 10. Designing a Release Strategy

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M10_Controlling_Deployments_using_Release_Gates.md">
Lab : Controlling Deployments using Release Gates</a>

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M10_Creating_a_Release_Dashboard.md">
Lab : Creating a Release Dashboard</a>


Module 11. Implementing Continuous Deployment using Azure Pipelines

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M11_Configuring_Pipelines_as_Code_with_YAML.md">
Lab : Configuring Pipelines as Code with YAML</a>

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M11_Setting_Up_and_Running_Functional_Tests.md">
Lab : Setting up and Running Functional Tests</a>


Module 12. Implementing an Appropriate Deployment Pattern

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M12_Feature_Flag_Management_with_LaunchDarkly_and_Azure_DevOps.md">
Lab : Feature Flag Management with LaunchDarkly and Azure DevOps</a>


Module 13. Managing Infrastructure and Configuration using Azure Tools

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M13_Azure_Deployments_Using_Resource_Manager_Templates.md">
Lab : Azure Deployments using Resource Manager Templates</a>


Module 14. Third Party Infrastructure as Code Tools Available with Azure

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M14_Ansible_with_Azure.md">
   Lab 14a: Ansible with Azure</a>. See <a href="#Ansible">(below)</a>

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M14_Automating_infrastructure_deployments_in_the_Cloud_with_Terraform.md">
   Lab 14b: Automating infrastructure deployments in the Cloud with Terraform and Azure Pipelines</a>

   * <a target="_blank" href="https://wilsonmar.github.io/terraform/">wilsonmar.github.io/terraform</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/demo-gen/?view=azure-devops">Azure DevOps Services Demo Generator</a> provisions projects with pre-populated sample content based on a template of your choice. Each includes source code, work items, iterations, service connections, and build and release pipelines. Sign in at at <a target="_blank" href="https://azuredevopsdemogenerator.azurewebsites.net/">https://azuredevopsdemogenerator.azurewebsites.net/</a>. Click Sign-In.
   <br /><br />


Module 15. Managing Containers using Docker

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M15_Modernizing_your_Existing_ASP.NET_Apps_with_Azure.md">
   AZ400_M15_Modernizing_your_Existing_ASP.NET_Apps_with_Azure.md</a>

   * Lab : Modernizing Existing ASP.NET Apps with Azure


Module 16. Creating and Managing Kubernetes Service Infrastructure

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M16_Deploying_multi-container_application_to_Azure_Kubernetes_Services.md">
   Lab : Deploying a Multi-Container Application to Azure Kubernetes Service</a>

   * Azure Kubernetes Service
   * Kubernetes Tooling
   * Integrating AKS with Pipelines


Module 17. Implementing Feedback for Development Teams

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M17_Monitoring_Application_Performance_with_Application_Insights.md">
   Lab 17: Monitoring Application Performance with Application Insights</a>

   * Implement Tools to Track System Usage, Feature Usage, and Flow
   * Implement Routing for Mobile Application Crash Report Data
   * Develop Monitoring and Status Dashboards
   * Integrate and Configure Ticketing Systems


Module 18. Implementing System Feedback Mechanisms

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M18_Integration_between_Azure_DevOps_and_Teams.md">
   Lab 18: Integration between Azure DevOps and Teams</a>
   
   * Site Reliability Engineering
   * Design Practices to Measure End-User Satisfaction
   * Design Processes to Capture and Analyze User Feedback
   * Design Processes to Automate Application Analytics
   * Managing Alerts
   * Blameless Retrospectives and a Just Culture


Module 19. Implementing Security in DevOps Projects

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M19_Implement_Security_and_Compliance_in_an_Azure_DevOps_pipeline.md">
   <strong>Lab 19: Implement Security and Compliance in an Azure DevOps pipeline</strong></a>

   * <strong>Bolt</strong> is a lightweight open source security and management solution developed specifically for integration with Azure DevOps and Azure DevOps Server. It works per project and does not offer real-time alert capabilities, which requires Full platform, generally recommended for larger development teams that want to automate their open source management throughout the entire software development lifecycle (from the repositories to post-deployment stages) and across all projects and products.
   * https://www.whitesourcesoftware.com/ integrates into build processes, irrespective of your programming languages, build tools, or development environments. It works automatically, continuously, and silently in the background, checking the security, licensing, and quality of your open source components against WhiteSource constantly-updated deﬁnitive database of open source repositories. 

   * Security in the Pipeline
   * Azure Security Center


Module 20. Validating Code Bases for Compliance

* <a target="_blank" href="https://github.com/MicrosoftLearning/AZ400-DesigningandImplementingMicrosoftDevOpsSolutions/blob/master/Instructions/Labs/AZ400_M20_Managing_technical_debt_with_SonarQube_and_Azure_DevOps.md">
   <strong>Lab 20: Managing technical debt with SonarCloud and Azure DevOps</strong></a>

   * https://sonarcloud.io/
   * Open-Source Software
   * Managing Security and Compliance Policies
   * Integrating License and Vulnerability Scans


<hr />

<a name="CreateAccount"></a>

## Create Azure account

There are the options:

### Use your benefits

1. Click <a target="_blank" href="https://go.microsoft.com/fwlink/?LinkID=328777">Use your benefits</a>.
1. Click "Register" for 50 percent off the cost of a Microsoft Certification exam by completing your challenge within 30 days.
1. Click "Register now".
1. Click "Get started" under "DevOps Engineer".
1. Click "Begin now".
1. Work through Microsoft's <a target="_blank" href="https://click.email.microsoftemail.com/?qs=0ff3c5fe1fddf5fd0234d4120d4d100a558943727dccc07d2355b20ae2d4b40a5ac3f5af0e7d558cb73da76bbda7d7708b9b237bbf478bf8">27 free tutorial challenge</a>:

   * Capture Web Application Logs with App Service Diagnostics Logging - 55 min
   * Control and organize Azure resources with Azure Resource Manager - 46 min
   * Introduction to App Center - 49 min
   * Deploy Spring microservices to Azure - 38 min
   * Microsoft Azure Well-Architected Framework - Performance efficiency - 48 min
   * Microsoft Azure Well-Architected Framework - Operational excellence - 54 min
   * Analyze your Azure infrastructure by using Azure Monitor logs - 36 min
   * Capture and view page load times in your Azure web app with Application Insights - 45 min
   * Instrument server-side web application code with Application Insights - 34 min
   * Monitor cloud resources - 40 min
   * React to state changes in your Azure services by using Event Grid - 33 min
   * Design a holistic monitoring oy on Azure - 57 min

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/introduction-to-github/">Introduction to GitHub</a> - 1 hr 12 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/migrate-repository-github/">Migrate your repository by using GitHub best practices</a> - 43 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/upload-project-github/">Upload your project by using GitHub best practices</a> - 43 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/upload-project-github/">Manage repository changes by using pull requests on GitHub</a> - 49 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/resolve-merge-conflicts-github/">Settle competing commits by using merge conflict resolution on GitHub</a> - 52 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/search-organize-repository-history-github/">Search and organize repository history by using GitHub</a> - 38 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/manage-innersource-program-github/">Manage an InnerSource program by using GitHub</a> - 50 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/communicate-using-markdown/">Communicate effectively on GitHub by using Markdown</a> - 1 hr 2 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/maintain-secure-repository-github/">Maintain a secure repository by using GitHub best practices</a> - 1 hr 9 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/automate-devops-github-apps/">Automate DevOps processes by using GitHub Apps</a> - 1 hr 8 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/automate-github-using-github-script/">Automate GitHub by using GitHub Script</a> - 25 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/release-based-workflow-github/">Manage software delivery by using a release based workflow on GitHub</a> - 1 hr 44 min

   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/github-actions-ci/">Build continuous integration (CI) workflows by using GitHub Actions</a> - 1 hr 7 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/github-actions-cd/">Build and deploy applications to Azure by using GitHub Actions</a> - 59 min
   * <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/implement-code-workflow/">Implement a code workflow in your build pipeline by using Git and GitHub</a> - 1 hr 27 min
   <br /><br />

### Azure account and project

Alternately, these steps are based on <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/user-guide/?view=azure-devops">Start using Azure DevOps</a> but with my additional commentary:

1. Get signed up with Azure and Microsoft Learn accounts. Use of <br />
   <a target="_blank" href="https://aka.ms/aft-iot"><strong>https://aka.ms/aft-iot</strong></a> to Create your Azure free is described at<br />
   <a target="_blank" href="https://wilsonmar.github.io/azure-cloud-onramp/">https://wilsonmar.github.io/azure-cloud-onramp</a> 

   Create your organization with a personal Microsoft account or a work or school accountdocs.microsoft.com

<hr />

<a name="CLI"></a>

## CLI/PowerShell Automation

If you prefer using ARM YAML, see: https://docs.microsoft.com/en-us/azure/devops/cli/azure-devops-cli-in-yaml?view=azure-devops

PROTIP: YAML runs fail if it's not perfectly formatted (with no extra spaces, etc.).


<a name="Install"></a>

### Local client install for DevOps

Get prepared by installing CLI command programs for use in your Terminal sessions:

1. To obtain the <a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/core/tools/?tabs=netcore2x">.NET Core command-line interface (CLI) tool</a> on a Mac, <a target="_blank" href="https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-install-script">download</a> file <tt>dotnet-install.sh</tt> stored in <a target="_blank" href="https://github.com/dotnet/cli/">https://github.com/dotnet/cli</a>, then run it.

   <pre><strong>chmod +x dotnet-install.sh
   ./dotnet-install.sh</strong></pre>

   PROTIP: This is a very well-written bash script.
   
   The response:

   <pre>dotnet-install: Downloading link: https://dotnetcli.azureedge.net/dotnet/Sdk/2.1.701/dotnet-sdk-2.1.701-osx-x64.tar.gz
dotnet-install: Extracting zip from https://dotnetcli.azureedge.net/dotnet/Sdk/2.1.701/dotnet-sdk-2.1.701-osx-x64.tar.gz
dotnet-install: Adding to current process PATH: `/Users/wilsonmar/.dotnet`. Note: This change will be visible only when sourcing script.
dotnet-install: Installation finished successfully.
   </pre>

1. Verify:

   <pre><strong>dotnet --version</strong></pre>

   3.1.201

1. For more verbose:

   <pre><strong>dotnet --info</strong></pre>

1. Node and NPM:

   node 

   npm install bower -g
   v9.11.1
   npm install grunt-cli -g

1. Verify your machine can get to the bottle resources from Homebrew:

   <pre>curl -O https://formulae.brew.sh
   curl -O https://homebrew.bintray.com</pre>

1. To enable <strong>az</strong> CLI commands:

   <pre><strong>brew install azure-cli</strong></pre>

   Alternately, if you already have it installed and want to <strong>upgrade</strong> to the latest version:

   <pre>brew upgrade azure-cli</pre>

1. Analytics:

   <pre><strong>brew info azure-cli</strong></pre>

   <pre>azure-cli: stable 2.15.1 (bottled), HEAD
Microsoft Azure CLI 2.0
https://docs.microsoft.com/cli/azure/overview
/usr/local/Cellar/azure-cli/2.15.1 (16,636 files, 221.9MB) *
  Poured from bottle on 2020-12-04 at 15:31:19
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/azure-cli.rb
License: MIT
==> Dependencies
Required: openssl@1.1 ✔, python@3.8 ✔
==> Options
--HEAD
  Install HEAD version
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
==> Analytics
install: 38,000 (30 days), 103,343 (90 days), 318,336 (365 days)
install-on-request: 37,613 (30 days), 102,290 (90 days), 313,119 (365 days)
build-error: 0 (30 days)</pre>

1. Analyze and act on caveats in response such as:

   <pre>==> python
Python has been installed as
  /usr/local/bin/python3
&nbsp;
Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
`python3`, `python3-config`, `pip3` etc., respectively, have been installed into
  /usr/local/opt/python/libexec/bin
&nbsp;
If you need Homebrew's Python 2.7 run
  brew install python@2
&nbsp;
You can install Python packages with
  pip3 install <package>
They will install into the site-package directory
  /usr/local/lib/python3.7/site-packages
&nbsp;
See: https://docs.brew.sh/Homebrew-and-Python
==> azure-cli
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
   </pre>

1. Confirm: (<a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest">based on docs for macOS, Ubuntu, Windows 10, Azure Cloud Shell</a>):

   <pre><strong>az --version</strong></pre>

   PROTIP: The CLI doesn't assume a Python virtual environment, so it relies on finding the installed Python version.

   <pre>azure-cli                         2.24.2 *
&nbsp;
core                              2.24.2 *
telemetry                          1.0.6
&nbsp;
Python location '/usr/local/Cellar/azure-cli/2.24.2/libexec/bin/python'
Extensions directory '/Users/wilsonmar/.azure/cliextensions'
&nbsp;
Python (Darwin) 3.8.10 (default, May  4 2021, 03:04:19)
[Clang 11.0.0 (clang-1100.0.33.17)]
&nbsp;
Legal docs and information: aka.ms/AzureCliLegal
&nbsp;
You have 2 updates available. Consider updating your CLI installation with 'az upgrade'
&nbsp;
Please let us know how we are doing: https://aka.ms/azureclihats
and let us know if you're interested in trying out our newest features: https://aka.ms/CLIUXstudy
   </pre>

   Previously:

   <pre>Extensions:
azure-cli-iot-ext                  0.8.7
   </pre>

1. Upgrade az if requested.

   <pre>This command is in preview and under development. Reference and support levels: https://aka.ms/CLI_refstatus
Your current Azure CLI version is 2.24.2. Latest version available is 2.25.0.
Please check the release notes first: https://docs.microsoft.com/cli/azure/release-notes-azure-cli
Do you want to continue? (Y/n): y
   </pre>

   <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/get-started-with-azure-cli?view=azure-cli-latest">docs.microsoft.com/en-us/cli/azure/get-started-with-azure-cli?view=azure-cli-latest</a> to Get started with Azure CLI


   ### Azure DevOps CLI extension

   Based on: https://docs.microsoft.com/en-us/azure/devops/cli/?view=azure-devops

1. Optionally: Add CLI extension:

   <pre><strong>az extension add --name azure-devops</strong></pre>

   NOTE: The extension was built from https://github.com/Azure/azure-devops-cli-extension

   PROTIP: Instead of the above command, run this next command and it prompts you to install if it's not installed. A neat feature!

1. Widen your Terminal to list <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/devops?view=azure-cli-latest">az devops commands</a> detailed at <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/cli/quick-reference?view=azure-devops">docs.microsoft.com/en-us/azure/devops/cli/quick-reference?view=azure-devops</a>

   <pre><strong>az devops -h</strong>
   
   <pre>az devops : Manage Azure DevOps organization level operations.
        Related Groups
        az pipelines: Manage Azure Pipelines
        az boards: Manage Azure Boards
        az repos: Manage Azure Repos
        az artifacts: Manage Azure Artifacts.
&nbsp;
Subgroups:
    admin            : Manage administration operations.
    extension        : Manage extensions.
    project          : Manage team projects.
    security         : Manage security related operations.
    service-endpoint : Manage service endpoints/service connections.
    team             : Manage teams.
    user             : Manage users.
    wiki             : Manage wikis.
&nbsp;
Commands:
    configure        : Configure the Azure DevOps CLI or view your configuration.
    feedback         : Displays information on how to provide feedback to the Azure DevOps CLI team.
    invoke           : This command will invoke request for any DevOps area and resource. Please use
                       only json output as the response of this command is not fixed. Helpful docs -
                       https://docs.microsoft.com/rest/api/azure/devops/.
    login            : Set the credential (PAT) to use for a particular organization.
    logout           : Clear the credential for all or a particular organization.
   </pre>

   NOTE: <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms-vsts.cli&ssr=false#review-details">Reviews of this command</a> 

1. Configure default configuration for your organization and project using <a href="#YourSettings">your settings discussed in this document (above)</a>

   <pre><strong>az devops configure --defaults organization="https://dev.azure.com/$AZDEVOPS_ORG_NAME" \
   project="$AZDEVOPS_PROJ_NAME"
   </strong></pre>

   NOTE: If you're connecting to an on-prem Azure DevOps Server, the URL would instead be:

   <pre>organization=https://ServerName/CollectionName</pre>

1. To confirm the installation:

   <pre><strong>az extension show --name azure-devops</strong></pre>

   <pre>{
  "extensionType": "whl",
  "metadata": {
    "author": "Microsoft",
    "author_email": "VSTS_Social@microsoft.com",
    "azext.minCliCoreVersion": "2.2.0",
    "classifiers": [
      "Development Status :: 4 - Beta",
      "Intended Audience :: Developers",
      "Intended Audience :: System Administrators",
      "Programming Language :: Python",
      "Programming Language :: Python :: 3",
      "Programming Language :: Python :: 3.4",
      "Programming Language :: Python :: 3.5",
      "Programming Language :: Python :: 3.6",
      "License :: OSI Approved :: MIT License"
    ],
    "description": "Microsoft DevOps CLI Extension for Windows, Mac and Linux\n=========================================================\n\n1.0.0\n---------------------\n\n* Initial preview release.\n\n",
    "filename": "/Users/wilsonmar/.azure/cliextensions/azure-devops/azure_devops-0.18.0.dist-info",
    "home_page": "https://github.com/Microsoft/azure-devops-cli-extension",
    "license": "MIT",
    "metadata_version": "2.0",
    "name": "azure-devops",
    "platforms": [
      "UNKNOWN"
    ],
    "requires_dist": [
      "distro (==1.3.0)",
      "python-dateutil (==2.7.3)",
      "msrest (<0.7.0,>=0.6.0)"
    ],
    "summary": "Tools for managing Azure DevOps.",
    "version": "0.18.0"
  },
  "name": "azure-devops",
  "path": "/Users/wilsonmar/.azure/cliextensions/azure-devops",
  "version": "0.18.0"
}</pre>

   QUESTION: "Programming Language :: Python :: 3.6" is the latest supported?

1. Set the memory variable <tt>"msrest (<0.7.0,>=0.6.0)"</tt>:

   <pre><strong>export AZDEVOPS_REST_VER="6.0"</strong></pre>


   ### devops login

1. In GitHub obtain a PAT (Personal Access Token) for the service account used to run pipelines and save it in a private place:

   <pre><strong>export AZDEVOPS_GITHUB_PAT="12928342342982342347abcdf2324234"</strong></pre>

1. Sign in using the Azure CLI az login command or an Azure DevOps Personal Access Token (PAT)

   <pre><strong>az devops login --organization "http://dev.azure.com/$AZDEVOPS_ORG_NAME"</strong></pre>

1. When prompted. paste the PAT. See https://docs.microsoft.com/en-us/azure/devops/cli/log-in-via-pat?view=azure-devops&tabs=windows

   See https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page#create-a-pat


   ### More CLI commands

   https://stackoverflow.com/questions/64502148/how-to-securely-login-in-az-cli-from-a-devops-pipeline

   STAR: <a target="_blank" href="https://channel9.msdn.com/Shows/DevOps-Lab/Working-with-Azure-DevOps-using-the-Azure-DevOps-CLI" title="by George Verghese @gvvarkey">VIDEO</a>:
   references scaffoling script examples at https://github.com/Azure/azure-devops-cli-extension/tree/master/examples/Scaffolding

   STAR: Also see https://www.dotnetcurry.com/devops/1528/azure-devops-cli

   https://www.keithjenneke.com/getting-started-with-the-azure-devops-cli/


   ### Invoke REST API from CLI

   When the Azure DevOps CLI doesn't cover a resource or action, can use the "catch-all" command to call the Azure DevOps REST API:

   <pre><strong>GET https://vsrm.dev.azure.com/{organization}/{project}/_apis/release/releases?api-version=6.0
   </strong></pre>


   <pre><strong>az devops invoke --area release --resource releases \
      --route --api-version "6.0-preview" -o json
   </strong></pre>

1. To get a list of REST API releases:<a target="_blank" href="https://docs.microsoft.com/en-us/rest/api/azure/devops/release/releases/list?view=azure-devops-rest-6.0">DOCS</a>:

   <pre><strong>curl GET "https://vsrm.dev.azure.com/$AZDEVOPS_ORG_NAME/$AZDEVOPS_PROJ_NAME/_apis/release/releases?api-version=$AZDEVOPS_REST_VER"</strong></pre> 

   https://vsrm.dev.azure/route/route/_apis/area/resource/api version


   ### Add users to project team

   Assuming members we want to add already exists within the Organization and the Project Group:

1. We have a Security Group.

1. Get Group Descriptor:

   <pre><strong>$groupDescriptor = az devops security group list \
      --query "graphGroups[?contains(principalName,'Example1 Team')].[descriptor]" -o tsv
   </strong></pre>

1. Get Member Descriptor:

   <pre><strong>$memberDescriptor = az devops user show \
      --user "$AZDEVOPS_USER_EMAIL" \
      --query user.descriptor -o tsv
   </strong></pre>

1. Add members to the group:

   <pre><strong>az devops security group membership add \
      --group-id $groupDescriptor --member-id $memberDescriptor
   </strong></pre>


   ### Show Build in browser
   
1. To show details of a specific build (id 1) in the default browser:

   <pre><strong>az pipelines build show --id 1 --open</strong></pre>

   ### Git branches
   
1. To make sure you have the correct branch selected:

   David Tesar (<a target="_blank" href="https://twitter.com/dtzar">@dtzar</a>, host of <a target="_blank" href="https://channel9.msdn.com/Shows/DevOps-Dimension/">DevOps-Dimension on channel9.msdn</a>) wrote the two branches which visually display the same front-end website content with a SQL Azure back-end (all PaaS):<br /> 
   
   * Branch <strong>aspnet45</strong> contains code for ASP.NET 4.5 used on older "bare metal" machines. Don't use this.

   * Branch <strong>master</strong> contains code for ASP.NET Core used within Containers. Use this.


<hr />

<a name="QuickStart"></a>

## GUI QuickStart: dev.azure.com was aex.dev.azure.com

1. In a browser, use a profile for each one of your emails (corporate employee, gmail, hotmail, outlook, etc.)

   PROTIP: I use different browser programs so I can quickly press <strong>command+Tab</strong> (on a Mac) to switch between documentation (on Brave browser), apps (on Chrome), and Azure DevOps (on Microsoft Edge):

1. PROTIP: Click on your <strong>browser's avatar picture</strong> to select the browser profile housing the browser cookies and history associated with the <strong>email address</strong> you are using (one email for corporate/client work, one for your personal gmail, one for hotmail/outlook, etc.).

1. In the Microsoft Edge browser, go to the "Azure Dev Essentials" site hosting Azure DevOps at:

   <a target="_blank" href="https://aex.dev.azure.com/">
   https://aex.dev.azure.com/me?mkt=en-US</a>

1. If you're using a browser profile, you would be logged in automatically based on prior session's history. Otherwise, sign in using the same account you use for Azure billing.

1. Select "Default Directory" if you don't have alternative tenants.


   ### Account Profile GUI

1. Click on the "User Settings" icon at the top menu to the left of your account avatar:

   <img width="273" alt="az-devops-acct-menu-2021-06-24" src="https://user-images.githubusercontent.com/300046/123353905-c8882480-d51f-11eb-93c3-a4bd213da7cb.png">

   TODO: Change profile items.


   ### Create Organization

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/create-organization?view=vsts">DOC: Quick Start: Create an Azure DevOps organization</a>

1. Click the blue "Create new organization" under title "Get started with Azure DevOps".

   PROTIP: Several organizations can be created under an account.

1. Click "Continue" in the pop-up "Get started with Azure DevOps" with Terms and Conditions checked.
1. Optionally, change the Azure DevOps organization name Azure generates based on your username, such as:

   <tt><a target="_blank" href="https://dev.azure.com/wilsonmar0412">
   https://dev.azure.com/wilsonmar0412</a></tt>

   Many admins change the user name to a <strong>team name</strong> if several others will be using it.

1. "We'll host your projects in" provides a <strong>limited number of locations/regions</strong>:

   * West Europe
   * East Asia
   * <strong>Central US</strong> (the only one in the US)
   * Brazil South
   * Canada Central
   * Australia East
   * UK South
   * South India
   <br /><br />

   PROTIP: Create your other resources in the region selected to avoid cross-region network charges.

1. Enter the CAPTCHA (two lines of the graphic are enter as one line).
1. Click the blue "Continue" for a "Create a project to get started" dialog.

   You'll get an email about the new organization.


   ### Organization-level Settings

1. Click on "Organization Settings" at the lower-left corner for the Organization's menu.

   <img alt="azure-devops-dashboard-ll-184x208-4860.jpg" width="184" src="https://user-images.githubusercontent.com/300046/56077477-e41d0f80-5d99-11e9-929b-d4310fe1ef06.jpg">

   In the <a target="_blank" href="https://itworks-tfs.visualstudio.com/_settings/organizationOverview">Overview page</a> is where the default Region is specified for all projects.

1. To switch organizations or configure an organization, click the "Azure DevOps" icon at the upper-left corner:

   Notice that work requests and pull requests are under an organization rather its projects.

   <img alt="azure-devops-org-menu-241x770-16780.jpg" width="241" src="https://user-images.githubusercontent.com/300046/56077361-81774400-5d98-11e9-95b5-bfc434b237ce.jpg">

1. Click on the organization name.

1. Configure profile, Security, Usage, Notification settings, Theme, etc.

   Find what permissions you or a team member have, including project-level, collection-level, and object-level…docs.microsoft.com in 
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/organizations/security/view-permissions?view=azure-devops">Quick Start: View permissions for yourself or others - Azure DevOps & TFS</a>


1. Privacy URL. ???
1. Time zone: leave as default "UTC", which doesn't have Daylight Savings Time (Summer Time).

1. Navigate to Organization settings -> Billing -> Setup billing -> Select an Azure subscription. Select the Azure Pass subscription which results in the green "Subscription is valid". Click "Save".

   CAUTION: That green "valid" line doesn't appear if you now click "Change billing". You'll need to remove billing to see it again.

1. Set the "MS Hosted CI/CD" field <strong>"Paid parallel jobs" to 1</strong> (from the default 0). Scroll down to the bottom and click "Save" (leaving all other defaults, such as 5 Basic users, etc.).

1. While waiting for new settings to be reflected in the back end (at least 3 hours before using CI/CD capabilities), you will see this message at ???

   <tt>This agent is not running because you have reached the maximum number of requests…</tt>


   <a name="CreateProject"></a>

   ### Create project using CLI

1. Create project using the basic process template:

   <pre><strong>az devops project create --name "$AZDEVOPS_PROJ_NAME" \
      --process basic \
      --description "Az Devops CLI Example1" 
   </strong></pre>

   Defaults:
   -s or --source-control (git) <br />
   --visibility (private) 


   <a name="Generator"></a>

   ### Project Generator

1. To create a new pre-defined project with <strong>pre-populated sample content</strong> (which include source code, work items, iterations, service endpoints, build and release definitions) based on a template you choose, open a new browser tab to:

   <a target="_blank" href="https://azuredevopsdemogenerator.azurewebsites.net/">https://azuredevopsdemogenerator.azurewebsites.net</a>

   NOTE: The site was built using <a target="_blank" href="https://github.com/microsoft/AzureDevOpsDemoGenerator">github.com/microsoft/AzureDevOpsDemoGenerator</a>

1. Click the blue "Sign In" for the same email you used in the steps above.
1. Click "Accept" after memorizing the <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/demo-gen/use-demo-generator-v2?view=azure-devops">default permission granted</a> ;)
1. For New Project Name: include in the project name the template name to be selected below:

   <tt><strong>TailwindTraders</strong></tt>

   For production project, specify your product, according to your Naming Conventions.

1. Select Organization: the one created above.
1. Leave unchecked "I want to fork this repository".

   ### Create project using a Template

   NOTE: This is based on from code at <a target="_blank" href="https://github.com/CanarysAutomationsInternal/AppCenterDemoGenerator">https://github.com/CanarysAutomationsInternal/AppCenterDemoGenerator</a>

1. For "Selected template": click "Select Template" then <strong>"TailwindTraders"</strong> because steps below require it.

   NOTE: Don't choose the <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/demo-gen/use-demo-generator-v2?view=azure-devops">others</a>:

   * <a target="_blank" href="https://www.tailwindtraders.com/">TailwindTraders.com</a>, created from <a target="_blank" href="https://github.com/Microsoft/TailwindTraders">github.com/Microsoft/TailwindTraders</a> is <a target="_blank" href="https://microsoft.github.io/TailwindTraders/">described</a> as a fictitious retail company created using an ensemble of reference apps using all-Microsoft tech running in Azure. It showcases "intelligent application experiences made smarter through data and AI".<br /><br />
   <a target="_blank" href="https://channel9.msdn.com/Shows/Azure-Friday/An-Overview-of-the-Tailwind-Traders-Reference-Apps-for-Azure" title="David Sanchez's 10-minute overview for Scott Hanselman on 3 May 2019">VIDEO</a>: "we keep it fresh":
   <br />
   <a target="_blank" href="https://user-images.githubusercontent.com/300046/123768853-f0f88180-d885-11eb-8645-f7dd125f308c.png"><img alt="az-devops-tailwind-1280x720" src="https://user-images.githubusercontent.com/300046/123768853-f0f88180-d885-11eb-8645-f7dd125f308c.png"></a>
   <br /><br />
   STAR: <a target="_blank" href="https://github.com/Microsoft/TailwindTraders/">github.com/Microsoft/TailwindTraders</a> lists <a target="_blank" href="https://github.com/Microsoft/TailwindTraders#demo-scripts">step-by-step demo scripts</a>, such as for <a target="_blank" href="https://github.com/microsoft/TailwindTraders/tree/master/Documents/DemoScripts/Integrating%20Azure%20DevOps%2C%20Microsoft%20Teams%20and%20GitHub#integrating-azure-devops-microsoft-teams-and-github">Integrating Azure DevOps, Microsoft Teams and GitHub</a>.
   <br /><br />
   NOTE: The template creates a SQL database back-end at <a target="_blank" href="https://github.com/microsoft/TailwindTraders-Backend">github.com/microsoft/TailwindTraders-Backend</a>

   * "PartsUnlimited" ("PU") at <a target="_blank" href="https://github.com/Microsoft/PartsUnlimited">github.com/Microsoft/PartsUnlimited</a> and PartsUnlimitedYAML</a> defines an ASP.NET app with customized CI/CD pipelines.  <a href="#PartsUnlimited">See below</a>

   * <a target="_blank" href="https://github.com/microsoft/SmartHotel360">SmartHotel360</a> and <a target="_blank" href="https://github.com/Microsoft/SmartHotel360-IoT">SmartHotel360-IoT</a> open sourced on GitHub are now "retired, archived, and no longer supported". It contained a complete ASP.NET 2 web mobile and desktop business apps for a hotel. The mobile app was built using <a target="_blank" href="https://wilsonmar.github.io/xamarin">Xamarin</a> web-mobile app for a hotel, all deployed using Docker containers within AKS (Azure Kubernetes Service):
   <a target="_blank" href="https://user-images.githubusercontent.com/300046/56323530-68b8b680-6129-11e9-9baf-81a79a04557e.jpg"><img alt="azure-devops-smarthotel-home-1896x853.jpg" width="1896" src="https://user-images.githubusercontent.com/300046/56323530-68b8b680-6129-11e9-9baf-81a79a04557e.jpg"></a>
   <br /><br />
   <a target="_blank" title="shown at Connect() 2017" href="https://www.youtube.com/watch?v=urcmaFVQnF4">VIDEO: IoT demo</a> shows the app powered by Azure <a target="_blank" href="https://aka.ms/azure-digital-twins">Digital Twins</a> to control lights and temperature of the hotel rooms, Dynamics 365, mobile Hololens for wayfinding. <a target="_blank" title="December 13th, 2017"  href="https://devblogs.microsoft.com/visualstudio/connect-2017-smarthotel360-demo-apps-and-architecture/">Demo Apps and Architecture</a>. See the <a target="_blank" href="https://aka.ms/smarthotel360-FacilityManagement">Facilities Management website running live here</a> (admin/admin).
   <br /><br />
   STAR: Azure superfan Gregor Suttie <a target="_blank" href="https://gregorsuttie.com/2018/10/31/how-to-get-started-with-azure-devops/">How to get started with Azure DevOps</a> describes the steps using SmartHotel360.

   * "MyHealthClinic" defines an ASP.NET Core app that deploys to Azure App Service.

   * "MyShuttle" defines a <strong>Java</strong> app and Azure App service deployment.
   
   * "ContosoAir" setup for Azure DevOps?

   * QUESTION: How to get "Mercury Health Group" sample app?
   <br /><br />

   BTW <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/demo-gen/build-your-own-template?view=azure-devops">you can build your own template</a>.

1. Right-click on <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=keesschollaart.arm-outputs"><strong>ARM Outputs</strong> for a new browser tab to ARM Outputs extension page</a> <strong>for Visual Studio</strong> (licensed product not available on MacOS). Click the green "Get it free".    Optionally: <a target="_blank" href="https://azuredevopslabs.com/labs/azuredevops/prereq/">DOCS</a> for use with Visual Studio.

1. Return to the Azure DevOps Demo browser page.

1. Check the box about "third party" and click the blue "Create Project"

   * Project gend created
   * Required extensions are installed
   * 1 team(s) created
   * Board-Column, Swimlanes, Styles updated
   * Created Wiki
   * Build definition created
   <br /><br />

1. When "Congratulations" appears, click the blue "Navigate to project".

   Notice another tab is created with counts of <a href="#WorkItems">work items</a> created and completed in Azure Boards:

   <img width="318" alt="az-devops-template-stats" src="https://user-images.githubusercontent.com/300046/123724356-6eea6780-d849-11eb-866b-555d90f56590.png">


   ### Run a test build

1. To run a test build.


<a name="PartsUnlimited"></a>
   
### Parts Unlimited demo apps

   * <a target="_blank" href="http://microsoft.github.io/PartsUnlimited/">http://microsoft.github.io/PartsUnlimited</a> (http://aka.ms/pumrplabs) describes the app.
   * Front end service runs Apache Tomcat and talks to order service
   * Order and Integration service runs Java and calls MongoDB
   * Integration service integrates with Parts Unlimited Website
   * Includes a Dockerfile and sample publishing profile to publish to a Docker container
   * Includes ARM JSON templates and PowerShell automation scripts to easily build and provision your environment
   <br /><br />
   
   <tt><strong>https://github.com/Microsoft/PartsUnlimitedMRP</strong></tt><br />

   <strong>(PUMRP)</strong> is a fictional outsourced Manufacturing Resource Planning (MRP) app built entirely using open source software: Linux, Java, Apache, and MongoDB which creates a web front end, an order service, and an integration service.

   * <a target="_blank" href="http://microsoft.github.io/PartsUnlimitedMRP/">http://microsoft.github.io/PartsUnlimitedMRP</a> describes the app.
   <br /><br />

1. When successful, you'll get an email.




   ### Create Project

1. Learn how to structure a project, manage users, and more to support your software development teams:

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/user-guide/project-admin-tutorial?view=vsts">Quick Start: Get started as a project admin or organization owner in Azure DevOps</a>

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/user-guide/sign-up-invite-teammates?view=vsts">Sign up for Azure DevOps and invite teammates - Azure DevOps</a> Quickstart guide to signing up and inviting others to join a project in Azure DevOpsdocs.microsoft.com

1. Type a project name, such as "PU". Naming convention: The format of the URL is:

   <pre>https://dev.azure.com/<em>YourOrganization</em>/<em>project</em>
   </pre>
   
   NOTE: You can use the slash character.

1. Leave Visibility as the default "Private" until it's ready for Public viewing.
1. Click "Advanced" to reveal more choices.
1. Leave Version control default of "Git".
1. Leave Work item process default of "Agile" for Azure Board terminology:

   * Agile
   * Basic (the default)
   * CMMI
   * Scrum
   <br /><br />

1. PROTIP: Bookmark the URL on the page for use in the future, such as:<br />
   https://dev.azure.com/wilsonmar0014/PU

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/56325322-0e225900-612f-11e9-8e80-8bc7349abebc.jpg">To view this sample project populated, click it for a full-screen:<br /><img alt="azure-devops-dashboard-abel-1920x552-76907.jpg" width="1920" src="https://user-images.githubusercontent.com/300046/56325322-0e225900-612f-11e9-8e80-8bc7349abebc.jpg"></a>


   ### Project GUI menu

   Notice the hierarchy at the top breadcrumb:

   <tt>wilsonmar0964 / whatever1 / Overview / Summary</tt>

   Expanded as the default are Overview menu items for the selected project 
   (Summary, Dashboards, Wiki).

   <img width="140" alt="az-devops-proj-menu-2021-06024" src="https://user-images.githubusercontent.com/300046/123357009-0ee08200-d526-11eb-9460-41de01102de9.png">

1. Clicking on a project menu category (such a "Repos") contracts the previously selected menu items. So ...

1. Click "<<" at the lower-left corner to reveal the "Project settings" menu.

   PROTIP: I leave the left menu minimized because mousing over the icon reveals its sub-menu .

   
   <a name="WorkItems"></a>

   ### Work Items

1. Notice that "<a href="#WorkItems">My work items</a>" and "<a href="#PullRequests">My pull requests</a>" are at the Organization level.



   ### Import repo from GitHub

1. Check whether a Git Repo exists:

   <pre><strong>az repos list --query "[].name" -o tsv</strong></pre>

1. In the GUI, be in your project.

1. Click on <a href="#AzureRepos">Repos</a>. <a target="_blank" title="azure-devops-repos-dialog-1028x592.png" href="https://user-images.githubusercontent.com/300046/60948888-34304300-a2b1-11e9-872b-605eaafdcd7d.png">Several options are shown</a>.
1. Click "Import".
1. Paste the URL to where the repository is located. For this tutorial you have two choices which <a target="_blank" title="2m52s" href="https://www.youtube.com/watch?v=wiCRVp6QgA0">VIDEO</a>: Microsoft has created several sample apps (with source code) implements the eCommerce website described as "Project Unicorn" in chapters 31-35 of <a target="_blank" href="http://www.amazon.com/The-Phoenix-Project-Helping-Business/dp/0988262592">The Phoenix Project</a> by Gene Kim, Kevin Behr, and George Spafford, © 2013.


1. Click on the project name.

   Notice that the project menu remains minimized.
   

   ### Project Settings

   Remember that the cog icon is associated with "Project settings".





<hr />

<a name="Workflows"></a>

## Workflows (Reference Architectures)

The work above kickstarts the first two steps in this sequence of work (from <a target="_blank" href="https://azure.microsoft.com/solutions/architecture/cicd-for-azure-vms/">CI/CD for Azure VMs</a>) described in this flowchart: 
<a target="_blank" href="https://user-images.githubusercontent.com/300046/56077081-09f3e580-5d95-11e9-9093-0a0c8af48149.png"><em>Click on diagram for full-screen pop-up</em>
<br /><img alt="azure-devops-ref-arch-cicd-avm-1176x746.png" width="1176" src="https://user-images.githubusercontent.com/300046/56077081-09f3e580-5d95-11e9-9093-0a0c8af48149.png"></a>

   1. Engineer uses Visual Studio to Git Commit changes into <a href="#AzureRepos">Azure Repos</a>.
   2. Commit application code and Azure Resource Manager template into <a href="#AzureRepos">Azure Repos</a>.

      <a target="_blank" href="https://microsoft.github.io/PartsUnlimited/pandp/200.1x-PandP-ManualdeploywithVS2017toAzure.html">PartsUnlimited Manual Deployment to Azure App Services with Visual Studio and ARM Templates (PartsUnlimited)</a> provides a hands-on, step-by-step instructions:

      1. Setup Local Visual Studio 2017 environment
      1. Create Azure App Service Infrastructure from Visual Studio uing ARM Templates
      1. Publish the website to Azure App Service Production URL
      1. Publish the website to Azure App Service dev and staging sites
      1. Swap dev and staging site content
      <br /><br />

   3. Continuous integration triggers application build and unit tests in <a href="#AzurePipelines">Azure DevOps Pipelines</a>.
   4. Continuous Deployment trigger orchestrates deployment of application artifacts with environment-specific parameters.
   5. Deployment to QA environment using <a href="#AzureDevTestLabs">Azure DevTest Labs</a>
   6. Deployment to Staging environment using Azure Virtual Machines.
   7. Deployment to production environment using Azure Virtual Machines.
   8. <a href="#AppInsights">Azure Application Insights</a> collects and analyzes health, performance, and usage data.
   9. Engineer reviews health, performance, and usage information.
   10. Update backlog item as complete in <a href="#AzureBoards">Azure DevOps Boards</a>.
   <br /><br />

Other "Reference Architectures" with workflows:   

   * <a target="_blank" href="https://azure.microsoft.com/solutions/architecture/cicd-for-containers/">CI/CD for Containers</a>
   * <a target="_blank" href="https://azure.microsoft.com/solutions/architecture/azure-devops-continuous-integration-and-continuous-deployment-for-azure-web-apps/">CI/CD for Azure Web Apps</a>
   * <a target="_blank" href="https://azure.microsoft.com/solutions/architecture/java-cicd-using-jenkins-and-azure-web-apps/">Java CI/CD using Jenkins and Azure Web Apps</a>
   * <a target="_blank" href="https://azure.microsoft.com/solutions/architecture/immutable-infrastructure-cicd-using-jenkins-and-terraform-on-azure-virtual-architecture-overview/">Immutable Infrastructure CI/CD using Jenkins and Terraform</a>

PROTIP: Notice that all of them have Visual Studio thick client (at the lower-left corner) as the interface for engineers rather than Visual Studio Code (VSCode).

## You must install Visual Studio thick client

   <a target="_blank" href="https://www.youtube.com/watch?v=pDwnfyD7Xe0">VIDEO</a>: Tutorial:
   <a target="_blank" href="https://microsoft.github.io/PartsUnlimited/pandp/200.1x-PandP-PUsetupwithVS2017.html">
   PartsUnlimited Setup with Visual Studio 2017</a> is obsolete because it uses VSTS. QUESTION: Difference with Visual Studio 2109 for Mac?

   Enable "ASP. NET and web development" and "Azure development" during installation or Tools > Get Tools and Features, Modify.

   * <a target="_blank" href="https://microsoft.github.io/PartsUnlimited/pandp/200.1x-PandP-CICDQuickstartwithVSTS.html">PartsUnlimited Setup with Visual Studio (PartsUnlimited)</a>
   to standardizing environments [80 minutes]

      1. Import Source Code into your Azure DevOps Account with Git.
      1. Create local Git repo from your Azure DevOps Git repo.
      1. Set up <a href="#Endpoints">Service Endpoint</a> in Azure DevOps.
      1. Import Continuous Integration Build pipeline into Azure DevOps and kick off a build.
      1. Import Continuous Deployment Release pipeline into Azure DevOps.
      1. Export Build and Release pipelines from Azure DevOps and commit changes to Azure DevOps repo to kick off CI and CD.
      1. Confirm successful deployment to Azure.
      <br /><br />

   * <a target="_blank" href="https://microsoft.github.io/PartsUnlimitedMRP/pandp/200.1x-PandP-PUMRPSetupVSTS.html"><strike>Set up Parts Unlimited MRP with VSTS (PartsUnlimitedMRP)</strike></a>
   is <strong>obsolete</strong> because VSTS is no longer available.



   * <a target="_blank" href="https://microsoft.github.io/PartsUnlimitedMRP/pandp/200.1x-PandP-PythonCI.html">Create CI infratructure using PartsUnlimitedMRP from GitHub, Python 3.5 within venv, and Travis CI </a> to build and deploy to production. <a target="_blank" href="https://www.youtube.com/watch?v=M39zW9QF_FY">VIDEO</a>

      1. Create an application using Python using Virtualenv for the environment isolation
      1. Create Unit Tests
      1. Declare Depenendcies
      1. Define the continuous build and test in our travis.yml file.
      1. Create a Github repository for this application and link it to our Travis CI account.
      1. Setup Travis CI
      1. Managing Pull Requests
      <br /><br />

   * <a target="_blank" href="https://microsoft.github.io/PartsUnlimitedMRP/pandp/200.1x-PandP-LocustTest.html">Create a simple REST API and perform Load Tests using Locust (PartsUnlimitedMRP)</a> on a minimal RESTful API using the Python 3.5 Flask framework.

   * <a target="_blank" href="???">CI and CD with VSTS - Quickstart (PartsUnlimited)</a>
   to build and deploy to production [80 minutes]


<a name="Endpoints"></a>

## Azure Service Endpoints



## Extensions to Azure DevOps Services 

1. Find and install free extensions for Azure DevOps Services on <a target="_blank" href="https://marketplace.visualstudio.com/azuredevops">https://marketplace.visualstudio.com/azuredevops</a> based on 
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/marketplace/install-extension?view=azure-devops">Quick Start: Install free extensions for Azure DevOps Services</a> 


1. If you click "Visual Studio", the browser issues a URL such as:

   <tt>vsweb://vs/?Product=Visual_Studio&EncFormat=UTF8&tfslink=dnN0Z...</tt>

   This should open the Visual Studio for Mac app installed on your machine.

   This is perhaps the most disheartening as the product currently does a clumsy job working with Git and GitHub.

   1. Install Visual Studio 2017 or 2019 within a Windows machine. 
   1. In Tools, Get Tools and Features, select "ASP.NET and web development" and "Azure development".
   These two should be check in "Workloads"
   1. Install PowerShell. The scripts folder contains .ps1 PowerShell scripts
   1. Download and install Node v6.12.3 (which has build tools taken out in v8).	
   1. Install Bower and Grunt (ignore deprecated warning).
   * ASP.NET 5 support for Linux and Mono
   * Updated to .NET Core 2.0 in Jan 2018
   * Modern HTML5 responsive layout using bootstrap for mobile, tablet, and PC
   * Includes a Dockerfile and sample publishing profile to publish to a Docker container
   * Supports multiple authentication options including Azure Active Directory, Google, and Facebook
   * Azure Machine Learning product recommendations based on Order History
   * Designed for Azure Websites, including Testing in Production, Staging slots and environment variables for feature flags (to turn off recommendations)
   * Includes Grunt tasks for publishing assets to Azure Storage for CDN ingestion for faster performance
   * Entity Framework code-first using SQL Azure or an in-memory database (Mono)
   * Basic administration pages to add or edit product information
   * Includes Azure RM JSON templates and PowerShell automation scripts to easily build and provision your environment
   <br /><br />


<a name="Instrumentation_Strategy"></a>

## Instrumentation (Logging) Strategy

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=d5f830b3-32e8-4097-bc37-3b75e906a42d">VIDEO</a>: 

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-designing-implementing-logging
Logging

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-designing-implementing-telemetry
Design and implement Telemetry metrics (Application insights) alert rules, user behavior insights


<a name="SRE_Strategy"></a>

## SRE Strategy

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-developing-actionable-alerting-strategy
Develop an actionable alerting strategy

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-designing-failure-prediction-strategy
Design a Failure Prediction strategy

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-designing-implementing-health-checks
Implement Health checks


<a name="Security_Plan"></a>

## Security Plan

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-designing-authentication-authorization-strategy


https://app.pluralsight.com/library/courses/microsoft-devops-solutions-designing-sensitive-information-strategy


https://app.pluralsight.com/library/courses/microsoft-devops-solutions-developing-security-compliance


https://app.pluralsight.com/library/courses/microsoft-devops-solutions-designing-governance-enforcement-mechanisms


<a name="Source_Controls"></a>

## Source Controls

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-developing-modern-source-control-strategy

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-integrating-source-control-tools


<a name="Collaboration"></a>

## Facilitating Communication and Collaboration

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-communicating-collaborating-stakeholders


https://app.pluralsight.com/library/courses/microsoft-devops-solutions-generating-devops-process-documentation


https://app.pluralsight.com/library/courses/microsoft-devops-solutions-automating-communication


<a name="CI"></a>

## Define and Implement Continuous Integration

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-designing-build-automation

https://app.pluralsight.com/library/courses/microsoft-dev-ops-solutions-designing-package-management-strategy

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-designing-application-infrastructure-management-strategy

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-implementing-maintaining-standardizing-build-strategies


<a name="CD"></a>

## Define and implement a continuous delivery and release management strategy

https://app.pluralsight.com/library/courses/microsoft-devops-solutions-developing-deployment-scripts-templates


https://app.pluralsight.com/library/courses/microsoft-devops-solutions-implementing-orchestration-automation-solutions


https://app.pluralsight.com/library/courses/microsoft-devops-solutions-planning-deployment-environment-strategies


<hr />

<a name="DevOpsAPI"></a>

## API to DevOps

<a target="_blank" href="https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-5.0">Azure DevOps Services REST API Reference</a> v5 was defined in 2016 with libraries:

   * .NET conceptual documentation and .NET reference documentation by <a target="_blank" href="https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2013/bb130146(v=vs.120)">extending TFS</a> via <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/integrate/get-started/client-libraries/samples?view=azure-devops">C#</a>
   * Node.js
   * Python
   * Swagger 2.0 specification
   * Web Extensions SDK

QUESTION: Were there SOAPUI or Postman files built for this API?

<hr />

Resources associated with a particular product from <a target="_blank" href="https://docs.microsoft.com/en-us/learn/">Microsoft Learn</a> are provided below.


<a name="AzureBoards"></a>

## Azure Boards

<img align="right" src="../images/azure-devops-boards-96.svg">

Websites: <a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/boards/">Product</a> \| <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/boards/">Docs</a> \| <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/boards/get-started/index-agile">Get started</a>

<a target="_blank" href="https://www.youtube.com/watch?v=Q-wnvG_pvj8">
VIDEO: Using Azure Boards with GitHub</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/boards/get-started/plan-track-work?view=azure-devops">
Quickstart guide to plan and track work - Azure Boards</a>
Plan and track work in your new team project on Azure Boardsdocs.microsoft.com

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/boards/get-started/index-agile?view=azure-devops">
Start using Azure Boards (Agile process)</a>

1. Add & update work items, approve releases, view work tracking progress with Stakeholder accessdocs.microsoft.com

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/organizations/security/get-started-stakeholder?toc=%2Fazure%2Fdevops%2Fuser-guide%2Ftoc.json&bc=%2Fazure%2Fdevops%2Fuser-guide%2Fbreadcrumb%2Ftoc.json&view=vsts&tabs=new-nav?WT.mc_id=medium-blog-abornst">Get started with Stakeholder access - Azure DevOps & TFS</a>


<a name="AzureRepos"></a>

## Azure Repos

<img align="right" src="../images/azure-devops-repos-96.svg">

Websites: <a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/repos/">Product</a> \|

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/user-guide/code-with-git?view=azure-devops">Quick Start: Code with Git in Azure DevOps - Azure DevOps Services & TFS</a> - Learn how to share code in a Git repo and new projectdocs.microsoft.com

<a target="_blank" href="https://user-images.githubusercontent.com/300046/56324189-7111f100-612b-11e9-8ff3-81210b06a358.jpg"><img alt="azure-devops-repos-home-1920x568-61555.jpg" width="1920" src="https://user-images.githubusercontent.com/300046/56324189-7111f100-612b-11e9-8ff3-81210b06a358.jpg"></a>


### GitHub Actions

More than just hooks.

<a target="_blank" href="https://www.youtube.com/watch?v=TovCs7DiWCQ">VIDEO: Using GitHub Actions to Deploy to Azure</a> Mar 28, 2019

See <a target="_blank" href="https://github.com/azure/github-actions">https://github.com/azure/github-actions</a>


<a name="AzureArtifacts"></a>

## Azure Artifacts

<img align="right" src="../images/azure-devops-artifacts-96.svg">

Websites: <a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/artifacts/">Product</a> \|

To host private Nuget (Windows), npm (NodeJs), Maven (Java), Python packages with builds.

Package management such as Artifactory.
1. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/artifacts/?view=azure-devops">View documentation</a>

1. <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms.feed">Get from the Marketplace</a>

1. Quickly access artifacts by favoriting them in Azure DevOps Services & Team Foundation 

   DOCS: <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/project/navigation/set-favorites?toc=%2Fazure%2Fdevops%2Fuser-guide%2Ftoc.json">Set personal or team favorites</a>

* <a target="_blank" href="https://azure.microsoft.com/solutions/architecture/dev-test-image-factory/">DevTest image factory</a>


<a name="AzureTestPlans"></a>

## Azure Test Plans

<img align="right" src="../images/azure-devops-testplans-96.svg">

Websites: <a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/test-plans/">Product</a> \|


<a name="AzurePipelines"></a>

## Azure Pipelines

<img align="right" width="96" src="../images/azure-devops-pipelines-96.svg">

Websites: <a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/pipelines/">Product</a> \| <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/pipelines/index?view=azure-devops">User Guide</a>

Azure DevOps Repos and Pipelines are <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/">free starting prices</a> for up to 5 people running 10 parallel jobs in 1 hosted job up to 1,800 minutes per month.
I
<a target="_blank" href="https://user-images.githubusercontent.com/300046/56268588-f5725e80-60ae-11e9-8f3c-498f0a3c8d2f.png"><img alt="azure-devops-pipelines-screen-1018x396-114045.png" width="1018" src="https://user-images.githubusercontent.com/300046/56268588-f5725e80-60ae-11e9-8f3c-498f0a3c8d2f.png"></a>

"WhiteSource Bolt" is a security analysis tool (like Black Duck license rating, SonarQube, Open Web Application Security Project)

<a target="_blank" href="https://github.com/rfennell/AzurePipelines">https://github.com/rfennell/AzurePipelines</a>

<a target="_blank" href="https://www.youtube.com/watch?v=jRgLSMlp28U&t=3m">VIDEO:</a> <a target="_blank" href="https://docs.microsoft.com/azure/devops/pipelines/languages/dotnet-core">azure-pipelines.yml files</a>

CLI can be called from within an Azure Pipeline:<a target="_blank" href="https://stackoverflow.com/questions/64502148/how-to-securely-login-in-az-cli-from-a-devops-pipeline">*</a>

   <pre>- task: AzureCLI@2
  displayName: Publish Function
  inputs:
    azureSubscription: <em>Name of the Azure Resource Manager service connection</em>
    scriptType: ps
    scriptLocation: inlineScript
    inlineScript: |
      func azure publish <em>function-name</em>
   </pre>

References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=yr6PJxfACNc">Azure Pipelines</a> overview showing PartsUnlimited "Piplines work with many languages" by <a target="_blank" href="https://channel9.msdn.com/Shows/Visual-Studio-Toolbox/Azure-Pipelines">Mickey Gousset</a>

   * https://pleasereleaseme.net/deploy-a-dockerized-application-to-azure-kubernetes-service-using-azure-yaml-pipelines-4-running-a-dockerized-application-locally/


<a name="AzureDevTestLabs"></a>

## Azure DevTest Labs

Websites: <a target="_blank" href="https://azure.microsoft.com/en-us/services/devtest-lab/">Product</a>

   * Quickly provision development and test environments
   * Minimize waste with <strong>quotas and policies</strong>
   * Set <strong>automated shutdowns</strong> to minimize costs
   * Build Windows and Linux environments
   <br /><br />


<hr />

## Resource Groups

   Factors to consider when defining resource groups (containers):

   * All the resources in a group should share the same lifecycle. You will deploy, update, and delete them together. If one resource, such as a database server, needs to exist on a different deployment cycle, it should be in another resource group.
   * Each resource can only exist in one resource group at a time.
   * You can add or remove a resource to a resource group at any time.
   * You can move a resource from one resource group to another group.
   * A resource group can contain resources that reside in different regions.
   * A resource group can be used to scope access control for administrative actions.
   * A resource can be linked to a resource in another resource group when the two resources must interact with each other, but they do not share the same lifecycle (for example, multiple apps connecting to a database).

   Up to 15 tags per ARM resource to logically organize resources for cost accounting.
   Tag names are limited to 512 characters. Tag values are limited to 256 characters. 

   https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-authoring-templates
   Understand the structure and syntax of Azure Resource Manager templates

   See https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags

   https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/#access-control

   https://www.youtube.com/watch?v=h0UDIcRnPog

   QUESTION: How are ARM Templates version controlled?


<hr />

### RBAC (Role-based Access Control)

Access to specific actions are limited to each user based on his/her assigned role.

https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/#access-control

In addition to <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/role-based-access-built-in-roles">built-in roles</a> such as "Reader", add custom roles using 
<a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/resource-group-authoring-templates/">
templates</a> such as:

<pre>{
		"$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
		"contentVersion": "",
		"parameters": {  },
		"variables": {  },
		"resources": [  ],
		"outputs": {  }
	}</pre>

   * $schema: The location of the JSON schema file that describes the version of the template language.
   * contentVersion: The version of the template (such as 1.0.0.0).
   * parameters: The optional values that are provided when deployment is executed to customize resource deployment.
   * variables: The values that are used as JSON fragments in the template to simplify template language expressions.
   * resources: A manageable item that is available through Azure. Some common resources are a virtual machine, storage account, web app, database, and virtual network, but there are many more.
   * outputs: The values that are returned after deployment

## Azure Templates

Deploy predefined templates from the <a target="_blank" href="https://marketplace.visualstudio.com/azuredevops">Azure Marketplace</a>, the <a target="_blank" href="https://github.com/Azure/azure-quickstart-templates">https://github.com/Azure/azure-quickstart-templates</a> <a target="_blank" href="https://azure.microsoft.com/en-us/resources/templates/">QuickStart Templates repo</a>, or as a <a target="_blank" href="https://docs.microsoft.com/en-us/azure/marketplace-consumer/mytemplates-getstarted">local private</a> in PowerShell commands such as:

   <pre>New-AzureRmResourceGroupDeployment -Name <em>ExampleDeployment</em> -ResourceGroupName <em>ExampleResourceGroup</em> <em>TemplateFile</em> <em>PathToTemplate</em></pre>

Alternately, include parameters inline string:

   <pre>New-AzureRmResourceGroupDeployment -Name <em>ExampleDeployment</em> -ResourceGroupName <em>ExampleResourceGroup</em> -myParameterName "parameterValue"</pre>


https://docs.microsoft.com/en-us/azure/active-directory/role-based-access-control-configure


<a name="Ansible"></a>

## Ansible

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ansible-create-vm">
    Create a basic virtual machine in Azure with Ansible</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ansible-install-configure">
    Install and configure Ansible to manage virtual machines in Azure</a>

Below is an sample playbook that creates an Azure VM and configures SSH credentials.

<pre>
- name: Create Azure VM
  hosts: localhost
  connection: local
  tasks:
  - name: Create VM
    azure_rm_virtualmachine:
      resource_group: myResourceGroup
      name: myVM
      vm_size: Standard_GS5-8
      admin_username: azureuser
      ssh_password_enabled: false
      ssh_public_keys: 
        - path: /home/azureuser/.ssh/authorized_keys
          key_data: "ssh-rsa CCDDV2aZ...WXhad10h"
      image:
        offer: UbuntuServer
        publisher: Canonical
        sku: '16.04-LTS'
        version: latest
</pre>

<a name="Terraform"></a>

## Terraform

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/terraform-install-configure">Install and configure Terraform to provision VMs and other infrastructure into Azure</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/terraform-create-complete-vm">Create a complete Linux virtual machine infrastructure in Azure with Terraform</a>

## GitHub repositories

<a target="_blank" href="https://github.com/Microsoft/azure-devops-dotnet-samples">https://github.com/Microsoft/azure-devops-dotnet-samples</a> contains C# samples that show how to integrate with Azure DevOps Services and Azure using our public client libraries, service hooks, and more.

<a target="_blank" href="https://github.com/Microsoft/DevOps-Architecture"><strike>https://github.com/Microsoft/DevOps-Architecture</strike></a> has been archived in 2019. It was a (hands-on) guide on building a robust professional devops environment for ASP.NET Core using Azure DevOps by <a target="_blank" href="http://azuredevopspodcast.clear-measure.com/">Jeff Palermo (podcast)</a> identifies these for a "professional-grade DevOps environment":

   * Private build
   * Continuous integration build
   * Static code analysis
   * Release candidate versioning and packaging
   * Environment provisioning and configuration
   * Minimum of a three-tier deployment pipeline
   * Production diagnostics managed by development team
   * Insanely short cycle time through the previous steps
   <br /><br />

<a target="_blank" href="https://github.com/wpschaub/quick-reference-posters">
Quick-reference posters on Azure DevOps Architecting, Getting Started, Habits, Practices, Technology</a> from 2019.

<a target="_blank" href="https://github.com/mpeder/azdevopssecurity">https://github.com/mpeder/azdevopssecurity</a> Azure DevOps: Recommended Practices for Secure Pipelines

<a target="_blank" href="https://github.com/Microsoft/devops-project-samples">https://github.com/Microsoft/devops-project-samples</a>
<a target="_blank" href="https://github.com/Azure/azure-cli">https://github.com/Azure/azure-cli</a>
<a target="_blank" href="https://github.com/Microsoft/azure-devops-auth-samples">https://github.com/Microsoft/azure-devops-auth-samples</a>
<a target="_blank" href="https://github.com/Azure/azure-devops-cli-extension">https://github.com/Azure/azure-devops-cli-extension</a>
<a target="_blank" href="https://github.com/Azure/azure-devops-utils">https://github.com/Azure/azure-devops-utils</a>

<a target="_blank" href="https://github.com/Microsoft/azure-devops-node-api">https://github.com/Microsoft/azure-devops-node-api</a>
<a target="_blank" href="https://github.com/Microsoft/azure-devops-python-api">https://github.com/Microsoft/azure-devops-python-api</a>
<a target="_blank" href="https://github.com/benmatselby/go-azuredevops">https://github.com/benmatselby/go-azuredevops</a>
<a target="_blank" href="https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks">https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks</a>

<a target="_blank" href="https://github.com/Azure/azure-api-management-devops-resource-kit">https://github.com/Azure/azure-api-management-devops-resource-kit</a>

From London <a target="_blank" href="http://www.dwyl.io/">http://www.dwyl.io/</a>
<a target="_blank" href="https://github.com/dwyl/learn-devops">https://github.com/dwyl/learn-devops</a>
<a target="_blank" href="https://github.com/dwyl/learn-microsoft-azure">https://github.com/dwyl/learn-microsoft-azure</a>

<a target="_blank" href="https://github.com/igoravl/tfscmdlets">
PowerShell Cmdlets for Azure DevOps and Team Foundation Server</a>

<a target="_blank" href="https://github.com/Azure/DevOps-For-AI-Apps">https://github.com/Azure/DevOps-For-AI-Apps</a>


## Microsoft Rock Stars

<a target="_blank" href="http://azuredevopspodcast.clear-measure.com/sam-guckenheimer-on-testing-data-collection-and-the-state-of-devops-report-episode-003">Sam Guckenheimer, Product Owner, Visual Studio Cloud Services</a> at 
Jeffery Palermo's <a target="_blank" href="https://AzureDevopsPodcast.clear-measure.com/">VIDEO: AzureDevopsPodcast.clear-measure.com</a> State of Devops report
   * <a target="_blank" href="https://www.youtube.com/watch?v=BwgjfevnXoY">Decision cycle: observe, orient, decide, and act</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=ypnOgxNecos">Change Agents for DevOps</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=8EN1kGFmiIo">Reflecting on the DevOps Journey</a> - http://aka.ms/OurDevOpsJourney.
   * <a target="_blank" href="https://www.youtube.com/watch?v=NlI0bkgdG7E">WinOps 2017 Sam Guckenheimer - Moving 70,000 Microsofties to DevOps on the Public Cloud</a> at the WinOps Conference [51:03] 
   * <a target="_blank" href="https://channel9.msdn.com/Blogs/DevOps-Interviews/Interview-with-Sam-Guckenheimer">Rugged DevOps and DevOps Anti-Patterns</a> on Channel9


### DevOps Cloud Developer Advocates

<strike>League of Extraordinary DevOps Advocates: <a target="_blank" href="https://twitter.com/LoECDA">@LoECDA</a></strike> was abandoned.

Donovan Brown (<a target="_blank" href="https://twitter.com/DonovanBrown">@DonovanBrown</a>, <a target="_blank" href="http://donovanbrown.com/">http://donovanbrown.com</a>: <a target="_blank" href="http://donovanbrown.com/page/slide-decks">slide-decks</a>.
   * <a target="_blank" href="http://www.donovanbrown.com/post/2015/09/01/what-is-devops">DevOps interviews</a>
   <br /><br />

Abel Wang (<a target="_blank" href="https://twitter.com/AbelSquidHead">@AbelSquidHead</a>, <a target="_blank" href="https://abelsquidhead.com">abelsquidhead.com</a>) on development

   * <a target="_blank" href="https://www.youtube.com/watch?v=mCRbvRwxDfQ">with Aplitools Apr 15, 2019</a>
   * <a target="_blank" href="https://youtu.be/Bt2x6pJWZKg">Using the new Basic Process in Azure DevOps</a> with Dan Hellem Apr 8, 2019 [8:17]
   <br /><br />

Jessica Deen (<a target="_blank" href="https://twitter.com/jldeen">@jldeen</a>, <a target="_blank" href="https://jessicadeen.com">jessicadeen.com</a>) on Kubernetes, open-source, Linux

Steve Marascky (<a target="_blank" href="https://twitter.com/StevenMurawski">https://twitter.com/StevenMurawski</a>, <a target="_blank" href="https://stevenmurawski.com/">https://stevenmurawski.com</a>) on DSC, SRE

Damien Brady (<a target="_blank" href="https://twitter.com/AbelSquidHead">@</a>) on Octopus Deploy



### Others in Microsoft

YOUTUBE: <a target="_blank" href="https://www.youtube.com/watch?v=jRgLSMlp28U">Continuous Integration, Continuous Deployment (CI-CD) with Azure DevOps</a> Nov 1, 2018 by Frank Boucher in Montreal

Microsoft Developer Advocate and AI enthusiast Aaron (Ari) Bornstein (<a target="_blank" href="https://twitter.com/pythiccoder">@pythiccoder</a>, <a target="_blank" href="https://medium.com/@aribornstein">on Medium</a>)

<a target="_blank" href="https://docs.microsoft.com/en-us/learn/">https://docs.microsoft.com/en-us/learn</a>

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/learn/">https://docs.microsoft.com/en-us/azure/devops/learn/</a>


## AZ-400 Practice exams

   * <a target="_blank" href="https://practice-exam.acloud.guru/edfd1636-66ce-46e2-9c9d-345fc0b8dd82?_ga=2.74915988.768635297.1623168905-1658143929.1623079786">By ACloudGuru</a>

   * <a target="_blank" href="https://cloudacademy.com/quiz/37044/?context_resource=lp&context_id=1368">By CloudAcademy</a>

   * Whizlabs???

Case Studies:

   * <a target="_blank" href="https://practice-exam.acloud.guru/c091c3b3-e60f-4ccb-b6cf-9b77dcc747dc">
   Case study 1</a>

   * <a target="_blank" href="https://practice-exam.acloud.guru/9e712afd-c572-4bc1-a0c4-9a6cadabfb1e/">
   Case study 2</a>



## Other video tutorials on AZ-400:

   * <a target="_blank" href="https://www.youtube.com/watch?v=fL9NZBtk96c&list=RDCMUCpIn7ox7j7bH_OFj7tYouOQ&index=21">VIDEO</a>: John Saville has video courses on <a target="_blank" href="https://app.pluralsight.com/paths/certificate/designing-and-implementing-microsoft-devops-solutions-az-400">Pluralsight</a> with his <a target="_blank" href="https://www.youtube.com/watch?v=rZcyDHIYpO0&list=PLlVtbbG169nGccbp8VSpAozu3w9xSQJoY">"Master Class" on YouTube</a> with code in <a target="_blank" href="https://github.com/johnthebrit/AzureMasterClass/">his GitHub</a>, which he's updating to include DevOps.

   * <a target="_blank" href="https://cloudacademy.com/learning-paths/az-400-exam-prep-microsoft-azure-devops-solutions-1-1368/">CloudAcademy.com learning path</a>

   *  Paul Hacker created on 7/11/2019 for <a target="_blank" href="https://www.linkedin.com/learning/paths/prepare-for-the-designing-and-implementing-microsoft-devops-solutions-exam-az-400">LinkedIn Learning</a>



## Videos

<a target="_blank" href="https://www.youtube.com/channel/UC-ikyViYMM69joIAv7dlMsA">Azure DevOps YouTube channel</a> lists ppt's with videos on the <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/learn/events-and-talks/">DevOps Events and Talks webpage</a> :

   * <a target="_blank" href="https://www.youtube.com/playlist?list=PLNMUSSKcxKjfu-84Vc_Fug93D3LfRc1SE">Azure DevOps Launch Sep 10, 2018</a> (6,000+ subscribers)

   * <a target="_blank" href="https://www.telerik.com/blogs/microsoft-azure-devops-what-you-need-to-know">Microsoft Azure DevOps - What You Need to Know</a>

<strong>DevOps For ASP.NET Developers series</strong> on Channel9 by by Donovan Brown, Cecil Phillip, Rich Lander, Jeremy Likness, AbelSquidHead

   * <a target="_blank" href="https://channel9.msdn.com//Shows/On-NET/DevOps-For-ASPNET-Developers-Pt2-Source-Control/">Pt.1 - What is DevOps?</a> Apr 15, 2019 by Donovan Brown, Rich Lander, Jeremy Likness. AbelSquidHead convinces (hilariously) skeptical developer Cecil Phillip about putting the SmartHotel360 app into DevOps.

   * <a target="_blank" href="https://channel9.msdn.com//Shows/On-NET/DevOps-For-ASPNET-Developers-Pt2-Source-Control/">Pt.2 - Source Control</a> Apr 15, 2019 by Donovan Brown, Cecil Phillip, Rich Lander, Jeremy Likness, AbelSquidHead. You have the option of a centralized version control with TFVC or distributed version control with Git.

   * <a target="_blank" href="https://channel9.msdn.com//Shows/On-NET/Devops-For-ASPNET-Developers-Pt-3-Work-Item-Tracking/">Pt. 3 - Work Item Tracking</a> Apr 16, 2019 Being able to visualize the work ahead is an integral part to the success of any software project. With Azure Boards, you can quickly and easily start tracking tasks, features, and bugs associated with runfaster2000.

<a target="_blank" href="http://aka.ms/DevOpsLearn">DevOps courses in Microsoft Virtual Academy (until April 30, 2019) http://aka.ms/DevOpsLearn</a>

   1. <a target="_blank" href="26350-400562-cnwewvxi.o5t_H264_3400kbps_AAC_und_ch2_96kbps.mp4">Meet the Engineers: Building Line-of-Business Apps at Microsoft with CI/CD</a> 29 June 2018 [57:17]


1. Track updates made to a work item or pull request by following it when using Azure Boards or Team Foundation Serverdocs.microsoft.com

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/boards/work-items/follow-work-items?toc=%2Fazure%2Fdevops%2Fuser-guide%2Ftoc.json&bc=%2Fazure%2Fdevops%2Fuser-guide%2Fbreadcrumb%2Ftoc.json&view=vsts&tabs=new-nav?WT.mc_id=medium-blog-abornst">Follow work or pull requests - Azure Boards and TFS</a>

1. Add custom security groups, change permissions for groups or individuals tutorialdocs.microsoft.com

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/organizations/security/change-individual-permissions?toc=%2Fazure%2Fdevops%2Fuser-guide%2Ftoc.json&bc=%2Fazure%2Fdevops%2Fuser-guide%2Fbreadcrumb%2Ftoc.json&view=vsts&tabs=new-nav?WT.mc_id=medium-blog-abornst">Change individual or group permissions - Azure DevOps & TFS</a>

1. Set permissions to grant or restrict access to select build, version control, or work tracking functionsdocs.microsoft.com

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/organizations/security/restrict-access?toc=/azure/devops/user-guide/toc.json&bc=/azure/devops/user-guide/breadcrumb/toc.json&view=vsts?WT.mc_id=medium-blog-abornst">Grant or restrict access to select features - Azure DevOps & TFS</a>

1. Connect a client to the cloud service Azure DevOps Services or on-premises Team Foundation Server (TFS)docs.microsoft.com

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/organizations/projects/connect-to-projects?toc=%2fazure%2fdevops%2fuser-guide%2ftoc.json&%3bbc=%2fazure%2fdevops%2fuser-guide%2fbreadcrumb%2ftoc.json&view=vsts?WT.mc_id=medium-blog-abornst">Connect to a project from a web browser or supported client in Azure DevOps - Azure DevOps & TFS</a>

See <a target="_blank" href="http://stories.visualstudio.com/devops/">http://stories.visualstudio.com/devops</a>


<hr />

## Previous Course (Abandonded)

Alas, EdX has removed their DEVOPS200.5x set of classes by
Faculty: Eamonn Kelly, Samantha Lindsey Ahmed, Steve Borg (<a target="_blank" href="https://twitter.com/stevenborg">@stevenborg</a>, steven.borg@nwcadence.com), Sachi Williamson

   <a name="[1]"></a>

1. <a target="_blank" href="https://www.edx.org/course/devops-practices-and-principles-2">Introduction to DevOps Practices</a> 
   
   DEVOPS200.1x by Steven Borg

   Learning objectives:
    Define DevOps and describe its value, history, and building blocks.
    Define a sustainable DevOps process.
    Identify appropriate compliance, security, and secrets management strategies.
    Identify ways to motivate key stakeholders along the DevOps journey.

   * <a target="_blank" href="https://www.youtube.com/watch?time_continue=3&v=rC5c0wzaVF4">DevOps core values</a> and <a target="_blank" href="https://devops.com/11626/">7 habits podcast</a>

   1. Team autonomy and enterprise alignment
   2. Rigorous management of technical debt
   3. Focus on flow of customer value
   4. Hypothesis-driven development
   5. Evidence gathered in production
   6. Live-site culture
   7. Manage infrastructure as a flexible resource
   <br /><br />

   principles and practices: <a target="_blank" href="https://puppet.com/resources/whitepaper/state-of-devops-report">State of DevOps report from Puppet</a> <a target="_blank" href="https://www.youtube.com/watch?v=u-u3sYpWW3c">video</a>.

   * https://www.devopsassessment.net/ - Microsoft's DevOps Self-Assessment
   * How to deploy to IaaS and PaaS environments in Microsoft Azure using ARM templates, Desired State Configuration (DSC) and other deployment tools.
   * Build and deploy applications automatically to Dev, Test, and Production environments.
   * Continuous learning from production to improve and scale business results. 
   * Unit tests, Integration tests, load tests, UI tests and test driven-development
   * Data retention strategies, exposure control strategies, and hypothesis-driven development.
   * <a target="_blank" href="https://www.youtube.com/watch?v=Of30FR_LZMQ">VIDEO</a>: "snowflake" servers that sticks around (also called "pets") differs from other servers.
   <br /><br />

   <a name="[2]"></a>

2. <a target="_blank" href="https://www.edx.org/course/infrastructure-as-code-2">Infrastructure as Code</a> 

   DEVOPS200.2x

   * Azure Automation
   * ARM templates
   * Desired State Configuration (DSC) [Powershell]
   * DevTest labs
   * Chef deployments in Azure
   * Puppet deployments in Azure
   <br /><br />

   <a name="[3]"></a>

3. <a target="_blank" href="https://www.edx.org/course/continuous-integration-and-continuous-deployment-2">Continuous Integration and Continuous Deployment</a> 

DEVOPS200.3x

   * Configure Git and TFVC version control options for Continuous Integration
   * How to manage Technical Debt and the sources and impact of it. 
   * How to create a continuous integration build using VSTS
   * Package Management Integration options such as NuGet, SemVer, GitVersion and others.
   * Agents and Pipelines, including how to release pipelines 
   * Continuous Delivery and Release Management strategies
   * Integrating automated testing into your release pipelines using Selenium, Coded UI Testing, Microsoft Test Manager
   * Understand the various availability and performance testing options
   * Automated provisioning and de-provisioning of infrastructure and databases D
   * Deployment groups, feature flags and recovery automation
   * Database deployment in release pipelines
   * Continuous deployment with Jenkins and VSTS
   <br /><br />

   <a name="[4]"></a>

4. <a target="_blank" href="https://www.edx.org/course/configuration-management-for-containerized-delivery-2">Configuration Management for Containerized Delivery</a> 

   DEVOPS200.4x

   * Create container images
   * Manage multiple containers using tools like Docker
   * How to set up a production cluster to host your containers
   * Deploy containerized applications to different orchestrators that are available in Azure Container Service (ACS) i.e. DC/OS, Docker swarm and Kubernetes
   * How to scale up the clusters, manage data and set up monitoring to proactively keep track of the clusters health and its deployed applications
   * Create, monitor and manage a Service Fabric cluster.
   * Manage and maintain Azure hosted clusters and containers in a better way.
   * Deploy containerized applications to one of the available cluster container solutions, using continuous delivery pipelines.
   * Manage these clusters in production scenarios.
   <br /><br />
   
   Videos:
   
   * <a target="_blank" href="https://channel9.msdn.com/Blogs/containers/Containers-101-with-Microsoft-and-Docker?ocid=player">
   Containers 101 with Microsoft and Docker</a>

   <a name="[5]"></a>

5. <a target="_blank" href="https://www.edx.org/course/devops-testing-2-0">DevOps Testing</a>

DEVOPS200.5x

Test Driven Development Studio: https://aka.ms/edx-devops200.5x-tdds Complete DevOps Solution: https://aka.ms/edx-devops200.5x-cdos

   * Understand various testing types and usage scenarios
   * Test-Driven development and it’s benefits
   * How to create and implement Unit tests and the elements of a good test 
   * How to create basic API tests (or Integration tests)
   * Performance testing and how to create a performance test using Visual Studio and Visual Studio team services (VSTS)
   * How to analyze performance test results using <a href="#AppInsights">Application Insights</a>
   * Exploratory testing in the context of visual Studio and Microsoft Test Manager
   <br /><br />

   <a name="[6]"></a>

6. <a target="_blank" href="https://www.edx.org/course/devops-for-databases-2">DevOps for Databases</a> 

   DEVOPS200.6x

   * Define DevOps
   * Identify the challenges of using databases that are separate from other software languages and platforms
   * Include your database code alongside other application code in a version control system (VCS)
   * Set up a Continuous Integration (CI) platform for your database code
   * Write and include automated unit tests for your database code
   * Develop an automated release process that deploys database changes to both on premise and cloud databases
   * Implement branching and merging for your database code
   * Instrument and monitor the database after deployment 
   <br /><br />

   <a name="[7]"></a>

7. <a target="_blank" href="https://www.edx.org/course/application-monitoring-and-feedback-loops-2">Application Monitoring and Feedback Loops</a>  

   DEVOPS200.7x by Tiago Pascoal

   * Understand general application monitoring and feedback loop practices and principles.
   * The different kinds of feedback and how they are used in different stages of the value stream, and their benefits.
   * How to set up up monitoring with Azure <a href="#AppInsights">Application Insights</a>
   * Monitor web application availability
   * Search and analyze monitoring data in <a href="#AppInsights">Application Insights</a>
   * How to use and query <a href="#AppInsights">Application Insights</a> data and Application Maps
   * How to set up, configure, query and analyze data collection on Operations Management Suite (OMS) Log Analytics
   * How to set up alerts in OMS and integrate <a href="#AppInsights">Application Insights</a>
   * Configure and monitor a web application with New Relic
   * Configure and use Loggly
   <br /><br />

Choose either 8 or 9:

   <a name="[8]"></a>

8. <a target="_blank" href="https://www.edx.org/course/devops-for-mobile-apps-2">DevOps for Mobile Apps</a>
   
   DEVOPS200.8x

   <a name="[9]"></a>

9. <a target="_blank" href="https://www.edx.org/course/architecting-distributed-cloud-applications-2">Architecting Distributed Cloud Applications</a>

DEVOPS200.9x

   * Distributed cloud application fundamentals, including Why Cloud Apps?, embracing failure, orchestrators, when to split a monolith into microservices, 12-factor services, and when and how to use Containers.
   * Networking communication, including service scalability and availability, how to define/manage/version service endpoint APIs, and how to perform fault-tolerant network communication.
   * Messaging communication, including the benefits of messaging with queues and fault-tolerant message processing.
   * Versioning, Upgrading, and Configuration, including various was to version your service’s code, how to shut down a service instance gracefully, and how to configure and share secrets with a running service.
   * Data storage services, including storage service considerations, object/file storage services, relational and nonrelational databases, partitioning, replicas, eventual consistency patterns (CQRS, Event sourcing, Saga), concurrency patterns, and data schema versioning.
   * Disaster recovery, including backup/restore, recovery point and time objectives, as well as Active/Passive and Active/Active architectures.
   <br /><br />

   <a name="[10]"></a>

10. <a target="_blank" href="https://www.edx.org/course/microsoft-professional-capstone-devops-2">Microsoft Professional Capstone : DevOps</a> 

DEVOPS200.10x  

   * Automating Infrastructure using Azure Resource Manager (ARM) Templates
   * Implementing Continuous Integration solutions
   * Implementing continuous delivery and continuous deployment solutions with Visual Studio Team Services (VSTS)
   * Implementing Testing solutions such as Unit Tests and Testing in Production
   * Implementing Application Monitoring solutions using Application Insights
   <br /><br />

   50% of the grade is to pass (by 70%) in five chances two Validated labs within 120 minutes each:

   <a target="_blank" href="https://www.edx.org/microsoft-professional-program-devops">Microsoft Professional Program (MPP) in DevOps</a> provides only <strong>two attempts</strong> to complete labs using <a href="#PartsUnlimited">PartsUnlimited sample reposistories</a>.

   1: Continuous Integration with Azure DevOps

   * At https://visualstudio.microsoft.com/ Create a Azure DevOps account, a new Azure DevOps team project, and a personal access token
   * Setting up repo in Azure DevOps
   * Setting up continuous integration in Azure DevOps

   2: Continuous Deployment

   * Modify the CI build to include ARM Templates to be used for deployment to Azure
   * Create an Service Principle Name service Endpoint to allow you deploy to your subscription in Azure
   * Create release Definition > Deploy Infrastructure
   * Create release Definition > Publish PU App to Deployed Azure App Service Infrastructure
   * Create release Definition > Clone Dev Environment to Staging and Production
   * Verify release Definition Deployment


<hr />

<a name="Social"></a>

## Social Media around Azure DevOps 

Issues with MicrosoftDocs are reported as issues within<br />
<a target="_blank" href="https://github.com/MicrosoftDocs/feedback/issues">https://github.com/MicrosoftDocs/feedback/issues</a>.

Sign into <a target="_blank" href="https://aka.ms/AzureDevOpsForum/">aka.ms/AzureDevOpsForum</a> = Developer Community Problems and Features (Active | Newest | Votes)

<a target="_blank" href="https://twitter.com/AzureDevOps">Twitter: @AzureDevOps</a>

<a target="_blank" href="https://aka.ms/DevOpsBlog/">aka.ms/DevOpsBlog</a>

Podcasts:

   * <a target="_blank" href="https://podcasts.apple.com/us/podcast/visual-studio-toolbox-hd-channel-9/id524227383">Visual Studio Toolbox</a>

DevOps Interviews

The DevOps Lab

LinkedIn?


## Azure's Partners

In addition to Marketplace developers:

https://projectum.com/technologies/microsoft-azure-devops/

https://www.telerik.com/blogs/microsoft-azure-devops-what-you-need-to-know

https://www.preemptive.com/blog/article/1055-automating-and-scaling-app-protection-with-azure-devops/90-dotfuscator

https://www.mobilize.net/blog/vbuc-azure-devops

## Independents

YOUTUBE: <a target="_blank" href="https://www.youtube.com/watch?v=H-R2bCXfz8I">Intro to Azure DevOps - Source Control, CI/CD, Automation, and more</a>  Dec 17, 2018
by IAmTimCorey

https://medium.com/devops-cloud-it-career/microsoft-azure-devops-start-here-10c46efa4a76


## References

<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ParthoPDas.TestDrivenDevelopmentStudio&wt.mc_id=DXLEX_EDX_DEVOPS200.5X">Test Driven Development in Visual Studio</a> - An environment for practicing Kent Beck style TDD [F.I.R.S.T. Unit Tests, fast builds, No Mocks, Hexagonal architecture]  Open source alternative to nCrunch

The Salt platform at <a target="_blank" href="https://github.com/saltstack/salt">https://github.com/saltstack/salt</a>
comes with different components such as Salt Masters, Salt Minions, Top Files, and Salt Cloud.
Its axis:
    Remote execution
    Configuration automation
    Cloud control
    Event-driven orchestration
See https://www.microsoft.com/developerblog/2017/05/09/provision-configure-infrastructure-azure-using-saltstack/

https://devops.com/devops-help-hinder-compliance/

https://www.youtube.com/watch?v=Bo_84yKsxuc

<a target="_blank" href="https://openedx.microsoft.com/courses/course-v1:Microsoft+INF240x+2019_T2/about">Configuring and Operating Microsoft Azure Stack (INF240x)</a> 25-30 hour enrollment closed on 6/25/19.


https://testingindevops.org/

<a target="_blank" href="https://www.coursera.org/projects/executing-selenium-test-automation-with-azure-devops">
Coursera guided project: Executing Selenium Test Automation With Azure DevOps</a>

References:
   * <a target="_blank" href="https://interactive.linuxacademy.com/diagrams/azurebookofbasics1.html">"Azure Book of Basics" interactive</a> <a target="_blank" href="https://lucid.app/lucidchart/8495a6bd-89d2-4a59-9b41-4b7a9e0e1922/view?page=0">interactive Lucid diagram</a>.


https://www.youtube.com/watch?v=VNHmX8_McqI
Watch Me Code - Debugging a Broken DevOps Pipeline



## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}


## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}
