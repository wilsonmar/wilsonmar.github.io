---
layout: post
title: "Azure DevOps (DevSecOps)"
excerpt: "DevSecOps in Microsoft's cloud"
tags: [devops, devsecops]
image:
# azure-devops-products-1900x400-21605.jpg
  feature: https://user-images.githubusercontent.com/300046/56040192-132c7600-5cf3-11e9-93cb-99490c5ae7b8.jpg
  credit: Microsoft
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/azure-devops/">This page</a> 
contains "deep dive" notes for learning and using DevSecOps using Microsoft's Azure DevOps services.

<a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/">
Azure DevOps Services (https://azure.com/devops)</a> consists of these product offerings from Microsoft:

   1. <a href="#Boards">Azure Boards</a> (like Jira) to plan, track, and discuss Work Items across teams using Kanban boards (to deliver value to users faster)

   2. <strong>Azure Repos</strong> (like GitHub and AWS Code Commit, etc.) to use Git for source version, collaborate using pull requests, and file management

   3. <strong>Azure Artifacts</strong> (like Artifactory, Nexxus, etc.) for binary package consumption package management 

   4. <strong>Azure Test Plans</strong> to manage tests and explore (to ship with confidence)

   5. <strong>Azure Pipelines</strong> (like Jenkins, AWS CodeDeploy, etc.) for CI/CD automation 
    
Each product above has its own pricing.


In Sept 2018 these were repackaged as an upgrade of Visual Studio Online (VSO) which include capabilities in Visual Studio Team Services (VSTS) that began as a performance testing server and Team Foundation Server (TFS).

Azure DevOps makes use of other Azure services and client executables:

   * Visual Studio - https://app.vssps.visualstudio.com/_signedin

   https://itworks-tfs.visualstudio.com/
   
   http://stories.visualstudio.com/devops/

   * az CLI

   * Azure Resource Manager (ARM) https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/
   to deploy, update, or delete cloud resources in a single, coordinated operation. Resources can include virtual machines, storage accounts, virtual networks, services, or any component that you are managing. 

   * IAM

   * Azure Service Fabric - https://azure.microsoft.com/en-us/services/service-fabric/

   * Azure Container Service (AKS) - https://azure.microsoft.com/en-us/services/kubernetes-service/
   uses Docker to make dynamic scaling easy on Kubernetes, Docker Swarm, or Mesos DC/OS

   * Azure Container Registry to store images for different types of container deployments like Swarm, DC/OS and Kubernetes and Azure services such as App Service, Batch and Service Fabric.

   * Hashicorp Vault


<a name="Boards"></a>

## Azure Boards

https://www.youtube.com/watch?v=Q-wnvG_pvj8
Using Azure Boards with GitHub


<a name="Repos"></a>

## Azure Repos

Git version control



<a name="Artifacts"></a>

## Azure Artifacts

Package management


<a name="Pipelines"></a>

## Azure Pipelines

https://www.youtube.com/watch?v=yr6PJxfACNc

Repos is https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/
free starting prices</a> for up to 10 parallel jobs.
Azure Pipelines is free up to 5 people. Each team get 1 hosted job with 1,800 minutes per month for CI/CD and 1 self-hosted job


<a name="Certs"></a>

## Courses on DevOps

<a target="_blank" href="https://academy.microsoft.com/en-us/professional-program/tracks/devops/">
Microsoft Professional Program for DevOps</a> consists of 9 video courses (of 8-16 hours each) 
January—March, April—June, July—September, and October —December

The course catalog says they cover 6 skills/technologies:

   1. VSTS
   2. Visual Studio
   3. Azure Container Service (ACS)
   4. <a href="#ApplicationInsights">Application Insights</a>
   5. Selenium
   6. Operations Management Suite (OMS)
   <br /><br />
But there are actually more.


<a name="SampleAppRepos"></a>

### Sample Apps

<a target="_blank" href="https://www.youtube.com/watch?v=wiCRVp6QgA0">VIDEO</a>:
There are two repos used in course labs and also during the <a target="_blank" href="https://www.microsoft.com/en-us/learning/exam-AZ-400.aspx">Microsoft Exam AZ-400: Implementing Azure DevOps Solutions exam</a> ($160)
<a target="_blank" href="https://www.microsoft.com/en-us/learning/azure-devops.aspx">Microsoft Certified: Azure DevOps Engineer Expert</a>.

<a target="_blank" href="https://microsoft.github.io/PartsUnlimited/">
https://microsoft.github.io/PartsUnlimited</a> (PU) is a sample .NET eCommerce website site, as described in chapters 31-35 of <a target="_blank" href="http://www.amazon.com/The-Phoenix-Project-Helping-Business/dp/0988262592">The Phoenix Project</a> by Gene Kim, Kevin Behr and George Spafford, © 2013 IT Revolution Press LLC, Portland, OR. Resemblance to “Project Unicorn” in the novel is intentional. Source files are in <a target="_blank" href="http://github.com/microsoft/partsunlimited">http://github.com/microsoft/partsunlimited</a>.

   1. Install Visual Studio 2017 within a Windows machine. 
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

<a target="_blank" href="http://microsoft.github.io/PartsUnlimitedMRP">The PartsUnlimitedMRP (PUMRP)</a> Java based app is  housed in <a target="_blank" href="https://microsoft.github.io/PartsUnlimitedMRP/">https://microsoft.github.io/PartsUnlimitedMRP</a>. The application and labs on this page use mostly open source software including Linux, Java, Apache, and MongoDB which creates a web front end, an order service, and an integration service.

   * Front end service - runs Apache Tomcat and talks to order service
   * Order and Integration service - runs Java and calls MongoDB
   * Integration service - present to integrate with Parts Unlimited Website
   * Includes a Dockerfile and sample publishing profile to publish to a Docker container
   * Includes Azure RM JSON templates and PowerShell automation scripts to easily build and provision your environment
   <br /><br />

Eamonn Kelly and Samantha Lindsey Ahmed, Steve 

### Individual courses

The courses are segmented loosly around the <a target="_blank" href="https://www.youtube.com/watch?v=QrwTD5eCkd4">7 DevOps practices</a>:

   1. Configuration management <a href="#[4]">[Course 4]</a>
   1. Release management
   1. Continuous integration <a href="#[3]">[Course 3]</a>
   1. Continuous deployment <a href="#[3]">[Course 3]</a>
   1. Infrastructure as Code <a href="#[2]">[Course 2]</a>
   1. Test automation <a href="#[5]">[Course 5]</a>
   1. Application performance monitoring <a href="#[7]">[Course 7]</a>
   <br /><br />

The courses are conducted as <a target="_blank" href="https://www.edx.org/microsoft-professional-program-devops">Microsoft Professional Program (MPP) in DevOps on Edx.org</a>, which provides a <a target="_blank" href="https://academy.microsoft.com/en-us/dashboard/">dashboard</a> of course progress.

   <a name="[1]"></a>

### 1. <a target="_blank" href="https://www.edx.org/course/devops-practices-and-principles-2">
   Introduction to DevOps Practices</a> 
   
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
   * https://www.youtube.com/watch?v=Of30FR_LZMQ
   <br /><br />

   <a name="[2]"></a>

### 2. <a target="_blank" href="https://www.edx.org/course/infrastructure-as-code-2">Infrastructure as Code</a> 

   DEVOPS200.2x

   * Azure Automation
   * ARM templates
   * Desired State Configuration (DSC) [Powershell]
   * DevTest labs
   * Chef deployments in Azure
   * Puppet deployments in Azure
   <br /><br />

   <a name="[3]"></a>

3. <a target="_blank" href="https://www.edx.org/course/continuous-integration-and-continuous-deployment-2">
   Continuous Integration and Continuous Deployment</a> DEVOPS200.3x

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

### 4. <a target="_blank" href="https://www.edx.org/course/configuration-management-for-containerized-delivery-2">  Configuration Management for Containerized Delivery</a> 

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
   
   https://channel9.msdn.com/Blogs/containers/Containers-101-with-Microsoft-and-Docker?ocid=player
   Containers 101 with Microsoft and Docker.

   <a name="[5]"></a>

### 5. <a target="_blank" href="https://www.edx.org/course/devops-testing-2-0">DevOps Testing</a>

DEVOPS200.5x

Test Driven Development Studio: https://aka.ms/edx-devops200.5x-tdds Complete DevOps Solution: https://aka.ms/edx-devops200.5x-cdos

   * Understand various testing types and usage scenarios
   * Test-Driven development and it’s benefits
   * How to create and implement Unit tests and the elements of a good test 
   * How to create basic API tests (or Integration tests)
   * Performance testing and how to create a performance test using Visual Studio and Visual Studio team services (VSTS)
   * How to analyze performance test results using <a href="#ApplicationInsights">Application Insights</a>
   * Exploratory testing in the context of visual Studio and Microsoft Test Manager
   <br /><br />

   <a name="[6]"></a>

### 6. <a target="_blank" href="https://www.edx.org/course/devops-for-databases-2">DevOps for Databases</a> 

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

### 7. <a target="_blank" href="https://www.edx.org/course/application-monitoring-and-feedback-loops-2">Application Monitoring and Feedback Loops</a>  

   DEVOPS200.7x by Tiago Pascoal

   * Understand general application monitoring and feedback loop practices and principles.
   * The different kinds of feedback and how they are used in different stages of the value stream, and their benefits.
   * How to set up up monitoring with Azure Application Insights
   * Monitor web application availability
   * Search and analyze monitoring data in Application Insights
   * How to use and query Application Insights data and Application Maps
   * How to set up, configure, query and analyze data collection on Operations Management Suite (OMS) Log Analytics
   * How to set up alerts in OMS and integrate Application Insights 
   * Configure and monitor a web application with New Relic
   * Configure and use Loggly
   <br /><br />

   <a name="[8]"></a>

### 8. There are two Application courses:

   <a target="_blank" href="https://www.edx.org/course/devops-for-mobile-apps-2">
   DevOps for Mobile Apps</a> DEVOPS200.8x
   <br /><br />

   <a target="_blank" href="https://www.edx.org/course/architecting-distributed-cloud-applications-2">
   Architecting Distributed Cloud Applications</a>  DEVOPS200.9x

   * Distributed cloud application fundamentals, including Why Cloud Apps?, embracing failure, orchestrators, when to split a monolith into microservices, 12-factor services, and when and how to use Containers.
   * Networking communication, including service scalability and availability, how to define/manage/version service endpoint APIs, and how to perform fault-tolerant network communication.
   * Messaging communication, including the benefits of messaging with queues and fault-tolerant message processing.
   * Versioning, Upgrading, and Configuration, including various was to version your service’s code, how to shut down a service instance gracefully, and how to configure and share secrets with a running service.
   * Data storage services, including storage service considerations, object/file storage services, relational and nonrelational databases, partitioning, replicas, eventual consistency patterns (CQRS, Event sourcing, Saga), concurrency patterns, and data schema versioning.
   * Disaster recovery, including backup/restore, recovery point and time objectives, as well as Active/Passive and Active/Active architectures.
   <br /><br />

   <a name="[9]"></a>

### 9. <a target="_blank" href="https://www.edx.org/course/microsoft-professional-capstone-devops-2">Microsoft Professional Capstone : DevOps</a> 

DEVOPS200.10x  

   * Automating Infrastructure using Azure Resource Manager (ARM) Templates
   * Implementing Continuous Integration solutions
   * Implementing continuous delivery and continuous deployment solutions with Visual Studio Team Services (VSTS)
   * Implementing Testing solutions such as Unit Tests and Testing in Production
   * Implementing Application Monitoring solutions using Application Insights
   <br /><br />

   50% of the grade is to pass (by 70%) in five chances two Validated labs within 120 minutes each:

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


    <a target="_blank" href="https://www.edx.org/microsoft-professional-program-devops">Microsoft Professional Program (MPP) in DevOps</a> two attempts to complete <a href="#SampleAppRepos">PartsUnlimited/ labs</a>.


<a name="ARM"></a>

## ARM

https://www.youtube.com/watch?v=s7bQu4Y1oHU
ARM vs. Classic Azure Service Management

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

See https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags


https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/#access-control

### ARM Templates

https://www.youtube.com/watch?v=h0UDIcRnPog


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

Deploy predefined templates from the Azure Marketplace, the <a target="_blank" href="https://github.com/Azure/azure-quickstart-templates">https://github.com/Azure/azure-quickstart-templates</a> <a target="_blank" href="https://azure.microsoft.com/en-us/resources/templates/">QuickStart Templates repo</a>, or as a <a target="_blank" href="https://docs.microsoft.com/en-us/azure/marketplace-consumer/mytemplates-getstarted">local private</a> in PowerShell commands such as:

	<pre>New-AzureRmResourceGroupDeployment -Name <em>ExampleDeployment</em> -ResourceGroupName <em>ExampleResourceGroup</em> <em>TemplateFile</em> <em>PathToTemplate</em></pre>

Alternately, include parameters inline string:

	<pre>New-AzureRmResourceGroupDeployment -Name <em>ExampleDeployment</em> -ResourceGroupName <em>ExampleResourceGroup</em> -myParameterName "parameterValue"</pre>


https://docs.microsoft.com/en-us/azure/active-directory/role-based-access-control-configure



<a name="AKS"></a>

## AKS

AKS handles auto upgrades, patching, and self-healing of Kubernetes clusters.

1. Cluster access control

1. Create a managed Kubernetes cluster using the CLI:

   <pre>az aks create --resource-group <em>myResourceGroup</em> --name <em>myCluster</em> --node-count <em>number_of_nodes</em> --generate-ssh-keys </pre>

1. Image scanning



https://docs.microsoft.com/en-us/azure/aks/intro-kubernetes
    Introduction to Azure Container Service (AKS)

https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough
    Deploy an Azure Container Service (AKS) cluster

https://azure.microsoft.com/en-us/resources/videos/episode-198-azure-container-service-with-ross-gardler/
    Cloud Cover Episode 198: Azure Container Service with Ross Gardler




## Ansible

https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ansible-create-vm
    Create a basic virtual machine in Azure with Ansible

https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ansible-install-configure
    Install and configure Ansible to manage virtual machines in Azure

Below is an example of a playbook that creates an Azure VM and configures SSH credentials.

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

## Terraform

https://docs.microsoft.com/en-us/azure/virtual-machines/linux/terraform-install-configure
    Install and configure Terraform to provision VMs and other infrastructure into Azure

https://docs.microsoft.com/en-us/azure/virtual-machines/linux/terraform-create-complete-vm
    Create a complete Linux virtual machine infrastructure in Azure with Terraform


<a name="ApplicationInsights"></a>

## Application Insights



## Related

https://marketplace.visualstudio.com/items?itemName=ParthoPDas.TestDrivenDevelopmentStudio&wt.mc_id=DXLEX_EDX_DEVOPS200.5X
Test Driven Development in Visual Studio - An environment for practicing Kent Beck style TDD [F.I.R.S.T. Unit Tests, fast builds, No Mocks, Hexagonal architecture]  Open source alternative to nCrunch

https://github.com/saltstack/salt
Salt platform comes with different components such as Salt Masters, Salt Minions, Top Files, and Salt Cloud.
Its axis:
    Remote execution
    Configuration automation
    Cloud control
    Event-driven orchestration
See https://www.microsoft.com/developerblog/2017/05/09/provision-configure-infrastructure-azure-using-saltstack/

https://docs.microsoft.com/en-us/azure/key-vault/

https://devops.com/devops-help-hinder-compliance/
https://www.youtube.com/watch?v=Bo_84yKsxuc

## Learning

https://docs.microsoft.com/en-us/learn/

https://docs.microsoft.com/en-us/azure/devops/learn/

https://docs.microsoft.com/en-us/azure/devops/learn/events-and-talks/ 
lists videos on their 
https://www.youtube.com/channel/UC-ikyViYMM69joIAv7dlMsA
YouTube channel 
https://www.youtube.com/playlist?list=PLNMUSSKcxKjfu-84Vc_Fug93D3LfRc1SE
Azure DevOps Launch Sep 10, 2018 (6,000+ subscribers)

https://www.telerik.com/blogs/microsoft-azure-devops-what-you-need-to-know


## GitHub Actions

More than just hooks.

https://www.youtube.com/watch?v=TovCs7DiWCQ
Using GitHub Actions to Deploy to Azure
Mar 28, 2019

https://github.com/azure/github-actions

## Rock Stars

Sam Guckenheimer, Product Owner, Visual Studio Cloud Services
* <a target="_blank" href="https://www.youtube.com/watch?v=BwgjfevnXoY">Decision cycle: observe, orient, decide, and act</a>
* <a target="_blank" href="https://www.youtube.com/watch?v=ypnOgxNecos">Change Agents for DevOps</a>
* <a target="_blank" href="https://www.youtube.com/watch?v=8EN1kGFmiIo">Reflecting on the DevOps Journey</a> - http://aka.ms/OurDevOpsJourney.
* <a target="_blank" href="https://www.youtube.com/watch?v=NlI0bkgdG7E">WinOps 2017 Sam Guckenheimer - Moving 70,000 Microsofties to DevOps on the Public Cloud</a> at the WinOps Conference [51:03] 
* <a target="_blank" href="https://channel9.msdn.com/Blogs/DevOps-Interviews/Interview-with-Sam-Guckenheimer">
Rugged DevOps and DevOps Anti-Patterns</a>

### DevOps Cloud Developer Advocates

<a target="_blank" href="https://twitter.com/search?q=%23LoECDA&src=typd">#LoECDA (League of Extradinary DevOps Advocates)</a>

Donovan Brown (<a target="_blank" href="https://twitter.com/DonovanBrown">@DonovanBrown</a>, 
<a target="_blank" href="http://donovanbrown.com/">http://donovanbrown.com</a>
<a target="_blank" href="http://donovanbrown.com/page/slide-decks">slide-decks</a>.
http://www.donovanbrown.com/post/2015/09/01/what-is-devops
Does DevOps interviews.

Jessica Deen (<a target="_blank" href="https://twitter.com/jldeen">@jldeen</a>, jessicadeen.com) on Kubernetes, open-source, Linux

Steve Marascky (<a target="_blank" href="https://twitter.com/StevenMurawski">https://twitter.com/StevenMurawski</a>, https://stevenmurawski.com/) on DSC, SRE

Damien Brady (<a target="_blank" href="https://twitter.com/AbelSquidHead">@AbelSquidHead</a>) on Octopus Deploy

Abel Wang (<a target="_blank" href="https://twitter.com/AbelSquidHead">@AbelSquidHead</a>, abelsquidhead.com) on development 


## Azure's Social Media

@AzureDevOps ‏

Azure Friday

Visual Studio Toolbox

DevOps Interviews

The DevOps Lab

LinkedIn?


## Azure's Partners

https://projectum.com/technologies/microsoft-azure-devops/

https://www.telerik.com/blogs/microsoft-azure-devops-what-you-need-to-know

https://www.preemptive.com/blog/article/1055-automating-and-scaling-app-protection-with-azure-devops/90-dotfuscator

https://www.mobilize.net/blog/vbuc-azure-devops



## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

