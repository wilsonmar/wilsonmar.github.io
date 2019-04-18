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

<a target="_blank" href="https://wilsonmar.github.io/azure-devops/">This page</a> contains succinct "deep dive" notes about learning and using Microsoft's Azure DevOps services, without the generalized sales hype. This page is more than just links to tutorials. I have worked hard to provide you logical sequence of hands-on steps culled from among the dizzying volume of web pages and videos about this topic, many repeating others have said already.

## Why?

<a target="_blank" href="https://www.forbes.com/sites/janakirammsv/2018/09/16/azure-devops-why-its-a-big-deal-for-microsoft-and-the-community/#353e0a8c6780">
Azure DevOps - Why It's A Big Deal For Microsoft And The Community</a> Sep 16, 2018

Forrester has Microsoft as a leader (behind Electric Cloud, IBM, Xebia, and CA) in its <a target="_blank" href="https://azure.microsoft.com/en-us/resources/continuous-delivery-and-release-automation/">2018 Continuous Delivery And Release Automation" market assesement:
<img alt="azure-devops-gartner-2018-485x527-13777.jpg" width="485" src="https://user-images.githubusercontent.com/300046/56278410-69b6fd00-60c3-11e9-847b-4c7f4a8a73d6.jpg"></a>


<a name="QuickStart"></a>

## &nbsp; &nbsp; &nbsp; Account Signups

1. Get signed up with Azure and Microsoft Learn accounts. See:

   <a target="_blank" href="https://wilsonmar.github.io/azure-cloud-onramp/">https://wilsonmar.github.io/azure-cloud-onramp</a> 

   <a target="_blank" href="https://aka.ms/aft-iot">https://aka.ms/aft-iot</a>

   ### Organization

2. Get your own <strong>organization</strong>:

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/user-guide/?view=azure-devops">DOCS:Start using Azure DevOps</a>

   ### Azure DevOps Demo Generator

3. Open the sample application web page from the Microsoft Azure Marketing team (based on <a target="_blank" href="https://www.azuredevopslabs.com/">Azure Devops hands-on-labs at<br />https://www.azuredevopslabs.com</a>)

   <a target="_blank" href="https://azuredevopsdemogenerator.azurewebsites.net/">Azure DevOps Demo Generator at<br/>https://azuredevopsdemogenerator.azurewebsites.net</a> 
   
   The website creates within your Azure DevOps organization demo projects with pre-populated sample content (source code, work items, iterations, service endpoints, build and release definitions based on a chosen template.

   (Code is at <a target="_blank" href="https://github.com/CanarysAutomations/AppCenterDemoGenerator">https://github.com/CanarysAutomations/AppCenterDemoGenerator</a>)

1. Click "Choose template":

   * <a href="#PartsUnlimited">PartsUnlimited (below)</a> defines an ASP.NET app with customized CI/CD pipelines to create a SQL database back-end.
   
   * SmartHotel360 <a target="_blank" href="https://github.com/Microsoft/SmartHotel360-IoT">(open sourced)</a> is an ASP.NET 2 desktop and Xamarin web-mobile app for a hotel, all deployed using Docker containers within AKS.
   <a target="_blank" href="https://user-images.githubusercontent.com/300046/56323530-68b8b680-6129-11e9-9baf-81a79a04557e.jpg"><img alt="azure-devops-smarthotel-home-1896x853.jpg" width="1896" src="https://user-images.githubusercontent.com/300046/56323530-68b8b680-6129-11e9-9baf-81a79a04557e.jpg"></a>

   <a target="_blank" title="shown at Connect() 2017" href="https://www.youtube.com/watch?v=urcmaFVQnF4">VIDEO: IoT demo</a> shows the app powered by Azure <a target="_blank" href="https://aka.ms/azure-digital-twins">Digital Twins</a> to control lights and temperature of the hotel rooms, Dynamics 365, mobile Hololens for wayfinding. <a target="_blank" title="December 13th, 2017"  href="https://devblogs.microsoft.com/visualstudio/connect-2017-smarthotel360-demo-apps-and-architecture/">Demo Apps and Architecture</a>. See the <a target="_blank" href="https://aka.ms/smarthotel360-FacilityManagement">Facilities Management website running live here</a> (admin/admin).

   Azure superfan Gregor Suttie <a target="_blank" href="https://gregorsuttie.com/2018/10/31/how-to-get-started-with-azure-devops/">How to get started with Azure DevOps</a> describes the steps using SmartHotel360.

   * MyHealthClinic defines an ASP.NET Core app that deploys to Azure App Service.

   * MyShuttle defines a <strong>Java</strong> app and Azure App service deployment.
   
   * QUESTION: How to get "Mercury Health Group" sample app?
   <br /><br />

   QUESTION: Others (Tailwind Traders, ContosoAir) setup for Azure DevOps?

1. Type a project name.
1. Click "Create project" and wait until you can...
1. Click "Navigate to project" Azure DevOps Dashboard.
1. [_] TASK: Add text in "About this project".


<a name="PartsUnlimited"></a>

#### PartsUnlimited Sample Apps

1. Clone or download <a target="_blank" href="https://microsoft.github.io/PartsUnlimited/">http://aka.ms/pulabs = https://microsoft.github.io/PartsUnlimited</a> (PU) is the implementation of the eCommerce website described as "Project Unicorn" in chapters 31-35 of <a target="_blank" href="http://www.amazon.com/The-Phoenix-Project-Helping-Business/dp/0988262592">The Phoenix Project</a> by Gene Kim, Kevin Behr and George Spafford, © 2013.

   David Tesar	(<a target="_blank" href="https://twitter.com/dtzar">@dtzar</a>, host of <a target="_blank" href="https://channel9.msdn.com/Shows/DevOps-Dimension/">DevOps-Dimension on channel9.msdn</a>) wrote the two branches which visually display the same front-end website content with a SQL Azure back-end (all PaaS):<br /> 
   The master branch contains code for ASP.NET Core.<br />
   The aspnet45 branch contains code for ASP.NET 4.5.

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

2. Clone or download <a target="_blank" href="https://github.com/microsoft.github.io/PartsUnlimitedMRP/">https://microsoft.github.io/PartsUnlimitedMRP (PUMRP)</a> described in <a target="_blank" href="http://microsoft.github.io/PartsUnlimitedMRP">http://aka.ms/pumrplabs = http://microsoft.github.io/PartsUnlimitedMRP</a>, an app using mostly open source software including Linux, Java, Apache, and MongoDB to create a web front end, an order service, and an integration service.

   * Front end service runs Apache Tomcat and talks to order service
   * Order and Integration service runs Java and calls MongoDB
   * Integration service integrates with Parts Unlimited Website
   * Includes a Dockerfile and sample publishing profile to publish to a Docker container
   * Includes ARM JSON templates and PowerShell automation scripts to easily build and provision your environment
   <br /><br />


## Azure DevOps Core = org.VisualStudio.com

After registration and project setup, get to the Azure DevOps Dashboard:

<pre>https://dev.azure.com/<em>YourOrganization</em>/<em>project</em>
</pre>

https://<em>YourOrganization</em>.visualstudio.com/<em>project</em>

   HISTORY: In Sept 2018 there was a name upgrade from Visual Studio Online (VSO) which include capabilities in Visual Studio Team Services (VSTS) that began as a performance testing server and Team Foundation Server (TFS) on-premises, now called "Visual Studio Server".

<a target="_blank" href="https://user-images.githubusercontent.com/300046/56325322-0e225900-612f-11e9-8e80-8bc7349abebc.jpg"><img alt="azure-devops-dashboard-abel-1920x552-76907.jpg" width="1920" src="https://user-images.githubusercontent.com/300046/56325322-0e225900-612f-11e9-8e80-8bc7349abebc.jpg"></a>

Each widget on the Dashboard can be <a target="_blank" href="https://docs.microsoft.com/en-us/rest/api/azure/devops/dashboard/?view=azure-devops-rest-5.0">added or deleted</a> using an API.

1. Create your organization with a personal Microsoft account or a work or school accountdocs.microsoft.com

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/create-organization?view=vsts">Quick Start: Create an Azure DevOps organization</a>

1. Click on your icon at the upper-right corner for the account menu.

   <img alt="azure-devops-acct-menu-242x382-7242.jpg" width="242" src="https://user-images.githubusercontent.com/300046/56077392-edf24300-5d98-11e9-8dc7-f8d613510abe.jpg">

1. Configure profile, Security, Usage, Notification settings, Theme, etc.

   Find what permissions you or a team member have, including project-level, collection-level, and object-level…docs.microsoft.com in 
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/organizations/security/view-permissions?view=azure-devops">Quick Start: View permissions for yourself or others - Azure DevOps & TFS</a>

1. Click on "Organization Settings" at the lower-left corner for the Organization's menu.

   <img alt="azure-devops-dashboard-ll-184x208-4860.jpg" width="184" src="https://user-images.githubusercontent.com/300046/56077477-e41d0f80-5d99-11e9-929b-d4310fe1ef06.jpg">

   In the <a target="_blank" href="https://itworks-tfs.visualstudio.com/_settings/organizationOverview">Overview page</a> is where the default Region is specified for all projects.

1. Configure the organization:

   <img alt="azure-devops-org-menu-241x770-16780.jpg" width="241" src="https://user-images.githubusercontent.com/300046/56077361-81774400-5d98-11e9-95b5-bfc434b237ce.jpg">

   Learn how to structure a project, manage users, and more to support your software development teams in Azure DevOpsdocs.microsoft.com:
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/user-guide/project-admin-tutorial?view=vsts">Quick Start: Get started as a project admin or organization owner in Azure DevOps</a>

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/user-guide/sign-up-invite-teammates?view=vsts">Sign up for Azure DevOps and invite teammates - Azure DevOps</a> Quickstart guide to signing up and inviting others to join a project in Azure DevOpsdocs.microsoft.com

1. Find and install free extensions for Azure DevOps Services from the Visual Studio Marketplacedocs.microsoft.com

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/marketplace/install-extension?view=azure-devops">Quick Start: Install free extensions for Azure DevOps Services</a> 


## Product components

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

### Workflows (Reference Architectures)

The sequence of product usage depends on the hosting technology:

<a target="_blank" href="https://azure.microsoft.com/solutions/architecture/cicd-for-azure-vms/">CI/CD for Azure VMs</a>

<a target="_blank" href="https://user-images.githubusercontent.com/300046/56077081-09f3e580-5d95-11e9-9093-0a0c8af48149.png"><img alt="azure-devops-ref-arch-cicd-avm-1176x746.png" width="1176" src="https://user-images.githubusercontent.com/300046/56077081-09f3e580-5d95-11e9-9093-0a0c8af48149.png"></a>
<em>Click on diagram for full-screen pop-up</em>

   1. Commit application code (in Visual Studio).
   2. Commit application code and Azure Resource Manager template into Azure Repos.
   3. Continuous integration triggers application build and unit tests in Azure DevOps Pipelines.
   4. Continuous Deployment trigger orchestrates deployment of application artifacts with environment-specific parameters.
   5. Deployment to QA environment using Azure DevTest Labs
   6. Deployment to Staging environment using Azure Virtual Machines.
   7. Deployment to production environment using Azure Virtual Machines.
   8. <a href="#AppInsights">Azure Application Insights</a> collects and analyzes health, performance, and usage data.
   9. Engineer reviews health, performance, and usage information.
   10. Update backlog item in Azure DevOps Boards.
   <br /><br />

Other "Reference Architectures" with workflows:   

* <a target="_blank" href="https://azure.microsoft.com/solutions/architecture/cicd-for-containers/">CI/CD for Containers</a>
* <a target="_blank" href="https://azure.microsoft.com/solutions/architecture/azure-devops-continuous-integration-and-continuous-deployment-for-azure-web-apps/">CI/CD for Azure Web Apps</a>
* <a target="_blank" href="https://azure.microsoft.com/solutions/architecture/java-cicd-using-jenkins-and-azure-web-apps/">Java CI/CD using Jenkins and Azure Web Apps</a>
* <a target="_blank" href="https://azure.microsoft.com/solutions/architecture/immutable-infrastructure-cicd-using-jenkins-and-terraform-on-azure-virtual-architecture-overview/">Immutable Infrastructure CI/CD using Jenkins and Terraform</a>

## Bash Scripts

Bash scripts such as <strong>azure-node-setup.sh</strong> are run from within <a target="_blank" href="https://github.com/wilsonmar/DevSecOps/tree/master/azure-node/">https://github.com/wilsonmar/DevSecOps/tree/master/azure-node/</a>


<hr />


## API

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

Websites: <a target="_blank" href="https://azure.microsoft.com/en-us/services/devops/pipelines/">Product</a> \| <a target="_blank" href="https://docs.microsoft.com/en-us/azure/devops/pipelines/index?view=azure-devops">User Guide</a> \|

Azure DevOps Repos and Pipelines are <a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/">free starting prices</a> for up to 5 people running 10 parallel jobs in 1 hosted job up to 1,800 minutes per month.
I
<a target="_blank" href="https://user-images.githubusercontent.com/300046/56268588-f5725e80-60ae-11e9-8f3c-498f0a3c8d2f.png"><img alt="azure-devops-pipelines-screen-1018x396-114045.png" width="1018" src="https://user-images.githubusercontent.com/300046/56268588-f5725e80-60ae-11e9-8f3c-498f0a3c8d2f.png"></a>

"WhiteSource Bolt" is a security analysis tool (like Black Duck license rating, SonarQube, Open Web Application Security Project)

<a target="_blank" href="https://github.com/rfennell/AzurePipelines">https://github.com/rfennell/AzurePipelines</a>

<a target="_blank" href="https://www.youtube.com/watch?v=yr6PJxfACNc">Azure Pipelines</a> with Mickey Gousset giving an overview showing PartsUnlimited.
"Piplines work with many languages".

<a target="_blank" href="https://www.youtube.com/watch?v=jRgLSMlp28U&t=3m">VIDEO:</a> Being introduced are  <a target="_blank" href="https://docs.microsoft.com/azure/devops/pipelines/languages/dotnet-core">azure-pipelines.yml files</a>

<a target="_blank" href="https://channel9.msdn.com/Shows/Visual-Studio-Toolbox/Azure-Pipelines">Mickey Gousset</a>


<a name="AzureDevTestLabs"></a>

## Azure DevTest Labs

Websites: <a target="_blank" href="https://azure.microsoft.com/en-us/services/devtest-lab/">Product</a>

   * Quickly provision development and test environments
   * Minimize waste with <strong>quotas and policies</strong>
   * Set <strong>automated shutdowns</strong> to minimize costs
   * Build Windows and Linux environments
   <br /><br />


<hr />

<a name="CoursesOnDevOps"></a>

## Other products & services used by Azure DevOps

<a target="_blank" href="https://academy.microsoft.com/en-us/professional-program/tracks/devops/">
Microsoft Professional Program for DevOps</a> consists of 9 video courses (of 8-16 hours each) 
January—March, April—June, July—September, and October —December

The course catalog says they cover 6 skills/technologies:

   1. VSTS (Visual Studio Team System)
   2. "Visual Studio"
   3. <a href="#ACS">Azure Container Service (ACS)</a>
   4. <a href="#AppInsights">Application Insights</a>
   5. Selenium
   6. Operations Management Suite (OMS)
   <br /><br />

   But Azure DevOps also makes use of other Azure services and client executables:

   * <strong>IAM</strong>

   * <a target="_blank" href="https://app.vssps.visualstudio.com/_signedin">https://app.vssps.visualstudio.com/</a>
   Visual Studio is <a target="_blank" href="https://aex.dev.azure.com/me?mkt=en-US">AEX.dev.azure.com</a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest">Azure CLI (az command) docs</a>

   <a name="ARM"></a>

   * <a target="_blank" href="https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/"><strong>Azure Resource Manager (ARM)</strong></a> carries out specifications entered in the Azure Dashboard. It deploys, updates, or deletes cloud resources in a single, coordinated operation. Resources can include virtual machines, storage accounts, virtual networks, services, or any component that you are managing.

   <a target="_blank" href="https://www.youtube.com/watch?v=s7bQu4Y1oHU">VIDEO</a>: ARM vs. Classic Azure Service Management

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

   https://www.youtube.com/watch?v=h0UDIcRnPog

   QUESTION: How are ARM Templates version controlled?

   <a name="ACS"></a>

   * <strong>Azure Container Service (ACS)</strong> is like Docker and rkct (from Red Hat).

   There is a separate brew amazon-ecs-cli.

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/key-vault/key-vault-whatis"><strong>Azure Key Vault</strong></a> provides an HSM. (<a target="_blank" href="https://www.vaultproject.io/docs/vs/kms.html">vs. Hashicorp Vault</a>, which enforces automatic revocation of leases with key usage audit and key rolling). KMS is focused on securely storing encryption keys and supporting cryptographic operations (encrypt and decrypt) using those keys. It supports access controls and auditing as well.

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


<a name="SampleAppRepos"></a>

### Sample Apps in pro certs

<a target="_blank" href="https://www.youtube.com/watch?v=wiCRVp6QgA0">VIDEO</a>: There are two repos used in course labs and also during the<br />
<a target="_blank" href="https://www.microsoft.com/en-us/learning/exam-AZ-400.aspx">Implementing Azure DevOps Solutions exam AZ-400</a> ($160) which fuilfills the requirement to become a <a target="_blank" href="https://www.microsoft.com/en-us/learning/azure-devops.aspx">Microsoft Certified: Azure DevOps Engineer Expert</a>. Expand All to see skills measured:

1. Design a DevOps strategy (20-25%)
1. Implement DevOps development processes (20-25%)
1. Implement continuous integration (10-15%)
1. Implement continuous delivery (10-15%)
1. Implement dependency management (5-10%)
1. Implement application infrastructure (15-20%)
1. Implement continuous feedback (10-15%)
<br /><br />

QUESTION: Is AZ-400 the same as exam: <a target="_blank" href="https://www.microsoft.com/en-us/learning/exam-70-538.aspx">Implementing Microsoft Azure DevOps Solutions 70-538</a> "coming soon".


### Faculty

Eamonn Kelly and Samantha Lindsey Ahmed, Steve Borg, Sachi Williamson

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

### 1. <a target="_blank" href="https://www.edx.org/course/devops-practices-and-principles-2">Introduction to DevOps Practices</a> 
   
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

### 3. <a target="_blank" href="https://www.edx.org/course/continuous-integration-and-continuous-deployment-2">Continuous Integration and Continuous Deployment</a> 

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

### 4. <a target="_blank" href="https://www.edx.org/course/configuration-management-for-containerized-delivery-2">Configuration Management for Containerized Delivery</a> 

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

### 5. <a target="_blank" href="https://www.edx.org/course/devops-testing-2-0">DevOps Testing</a>

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

### 8. <a target="_blank" href="https://www.edx.org/course/devops-for-mobile-apps-2">DevOps for Mobile Apps</a>
   
   DEVOPS200.8x

### 9. <a target="_blank" href="https://www.edx.org/course/architecting-distributed-cloud-applications-2">Architecting Distributed Cloud Applications</a>

DEVOPS200.9x

   * Distributed cloud application fundamentals, including Why Cloud Apps?, embracing failure, orchestrators, when to split a monolith into microservices, 12-factor services, and when and how to use Containers.
   * Networking communication, including service scalability and availability, how to define/manage/version service endpoint APIs, and how to perform fault-tolerant network communication.
   * Messaging communication, including the benefits of messaging with queues and fault-tolerant message processing.
   * Versioning, Upgrading, and Configuration, including various was to version your service’s code, how to shut down a service instance gracefully, and how to configure and share secrets with a running service.
   * Data storage services, including storage service considerations, object/file storage services, relational and nonrelational databases, partitioning, replicas, eventual consistency patterns (CQRS, Event sourcing, Saga), concurrency patterns, and data schema versioning.
   * Disaster recovery, including backup/restore, recovery point and time objectives, as well as Active/Passive and Active/Active architectures.
   <br /><br />

   <a name="[9]"></a>

### 10. <a target="_blank" href="https://www.edx.org/course/microsoft-professional-capstone-devops-2">Microsoft Professional Capstone : DevOps</a> 

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

## GitHub repositories

https://github.com/Microsoft/DevOps-Architecture
A (hands-on) guide on building a robust professional devops environment for ASP.NET Core using Azure DevOps by Jeff Palermo identifies these for a "professional-grade DevOps environment":

   * Private build
   * Continuous integration build
   * Static code analysis
   * Release candidate versioning and packaging
   * Environment provisioning and configuration
   * Minimum of a three-tier deployment pipeline
   * Production diagnostics managed by development team
   * Insanely short cycle time through the previous steps


https://github.com/wpschaub/quick-reference-posters
Architecting, Getting Started, Habits, Practices, Technology

https://github.com/mpeder/azdevopssecurity

https://github.com/Microsoft/azure-devops-dotnet-samples

https://github.com/Microsoft/devops-project-samples
https://github.com/Azure/azure-cli
https://github.com/Microsoft/azure-devops-auth-samples
https://github.com/Azure/azure-devops-cli-extension
https://github.com/Azure/azure-devops-utils

https://github.com/Microsoft/azure-devops-node-api
https://github.com/Microsoft/azure-devops-python-api
https://github.com/benmatselby/go-azuredevops
https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks

https://github.com/Azure/azure-api-management-devops-resource-kit

From London http://www.dwyl.io/:
https://github.com/dwyl/learn-devops
https://github.com/dwyl/learn-microsoft-azure

https://github.com/igoravl/tfscmdlets
PowerShell Cmdlets for Azure DevOps and Team Foundation Server

https://github.com/Azure/DevOps-For-AI-Apps

## Live Events

On Friday, June 15, 2019, attend a <a target="_blank" href="https://GlobalDevOpsBootcamp.com">Global DevOps Bootcamp event</a> throughout the world. Twitter: #GDBC, @gdevopsbc 


## Microsoft Rock Stars

Sam Guckenheimer, Product Owner, Visual Studio Cloud Services
* <a target="_blank" href="http://azuredevopspodcast.clear-measure.com/sam-guckenheimer-on-testing-data-collection-and-the-state-of-devops-report-episode-003">At Jeffery Palermo's <a target="_blank" href="https://AzureDevopsPodcast.clear-measure.com/">AzureDevopsPodcast.clear-measure.com</a> State of Devops report</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=BwgjfevnXoY">Decision cycle: observe, orient, decide, and act</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=ypnOgxNecos">`Change A`gents for DevOps</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=8EN1kGFmiIo">Reflecting on the DevOps Journey</a> - http://aka.ms/OurDevOpsJourney.
   * <a target="_blank" href="https://www.youtube.com/watch?v=NlI0bkgdG7E">WinOps 2017 Sam Guckenheimer - Moving 70,000 Microsofties to DevOps on the Public Cloud</a> at the WinOps Conference [51:03] 
   * <a target="_blank" href="https://channel9.msdn.com/Blogs/DevOps-Interviews/Interview-with-Sam-Guckenheimer">Rugged DevOps and DevOps Anti-Patterns</a> on Channel9

### DevOps Cloud Developer Advocates

League of Extradinary DevOps Advocates: <a target="_blank" href="https://twitter.com/search?q=%23LoECDA&src=typd">#LoECDA</a>, <a target="_blank" href="https://twitter.com/LoECDA">@LoECDA</a>

Donovan Brown (<a target="_blank" href="https://twitter.com/DonovanBrown">@DonovanBrown</a>, <a target="_blank" href="http://donovanbrown.com/">http://donovanbrown.com</a>: <a target="_blank" href="http://donovanbrown.com/page/slide-decks">slide-decks</a>.
   * <a target="_blank" href="http://www.donovanbrown.com/post/2015/09/01/what-is-devops">DevOps interviews</a>

Jessica Deen (<a target="_blank" href="https://twitter.com/jldeen">@jldeen</a>, <a target="_blank" href="https://jessicadeen.com">jessicadeen.com</a>) on Kubernetes, open-source, Linux

Steve Marascky (<a target="_blank" href="https://twitter.com/StevenMurawski">https://twitter.com/StevenMurawski</a>, <a target="_blank" href="https://stevenmurawski.com/">https://stevenmurawski.com</a>) on DSC, SRE

Damien Brady (<a target="_blank" href="https://twitter.com/AbelSquidHead">@</a>) on Octopus Deploy

Abel Wang (<a target="_blank" href="https://twitter.com/AbelSquidHead">@AbelSquidHead</a>, <a target="_blank" href="https://abelsquidhead.com">abelsquidhead.com</a>) on development

   * <a target="_blank" href="https://www.youtube.com/watch?v=mCRbvRwxDfQ">with Aplitools Apr 15, 2019</a>
   * <a target="_blank" href="https://youtu.be/Bt2x6pJWZKg">Using the new Basic Process in Azure DevOps</a> with Dan Hellem Apr 8, 2019 [8:17]





### Others in Microsoft

YOUTUBE: <a target="_blank" href="https://www.youtube.com/watch?v=jRgLSMlp28U">Continuous Integration, Continuous Deployment (CI-CD) with Azure DevOps</a> Nov 1, 2018 by 
Frank Boucher in Montreal

Microsoft Developer Advocate and AI enthusiast Aaron (Ari) Bornstein (<a target="_blank" href="https://twitter.com/pythiccoder">@pythiccoder</a>, <a target="_blank" href="https://medium.com/@aribornstein">on Medium</a>)

https://docs.microsoft.com/en-us/learn/

https://docs.microsoft.com/en-us/azure/devops/learn/


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


## Azure's Social Media

Issues with MicrosoftDocs are reported as issues within<br />
<a target="_blank" href="https://github.com/MicrosoftDocs/feedback/issues">https://github.com/MicrosoftDocs/feedback/issues</a>.

Sign into <a target="_blank" href="https://aka.ms/AzureDevOpsForum/">aka.ms/AzureDevOpsForum</a> = Developer Community Problems and Features (Active | Newest | Votes)

<a target="_blank" href="https://twitter.com/AzureDevOps">@AzureDevOps</a>

<a target="_blank" href="https://aka.ms/DevOpsBlog/">aka.ms/DevOpsBlog</a>

Apple podcasts:

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


## Related

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


## Testing

https://testingindevops.org/

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

