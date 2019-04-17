---
layout: post
title: "Azure Cloud Onramp (Consoles)"
excerpt: "Get into and around the Azure cloud ASM & ARM portals"
tags: [cloud, azure]
image:
# azure ms logo wait 1900x500-39kb.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/18188069/153fbcca-706c-11e6-983d-0783da57f75c.jpg
  credit: Microsoft Azure
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/azure-cloud-onramp/">This</a> is a step-by-step hands-on approach to getting you up and running on Azure cloud.

## Microsoft Learn account

1. Get an account into "Microsoft Learn", which provides FREE temporary cloud instances for hands-on learning. This one feature is getting many to invest their time on Azure versus AWS, Google, etc.

   <a target="_blank" href="https://docs.microsoft.com/en-us/learn/azure/">https://docs.microsoft.com/en-us/learn/azure/</a>

   Notice that the product categories are: .NET, Azure, Business Applications, Dynamics 365, Power Platfor, Visual Studio, and Windows.

   ### Job Roles

2. Select your role:

   * Business User
   * Business Analyst
   * (Azure) Administrator
   * (Azure) Developer
   * (Azure) Solution Architect
   * Data Engineer
   * AI Engineer
   <br /><br />

   MY OPINION: I think job roles should be multi-select checkboxes.
   This segregation also adds to duplicating material.

   PROTIP: These learning roles are differen than the <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles">Administrator role permissions in Azure Active Directory</a>.

3. After registering, use this URL:

   https://techprofile.microsoft.com/en-us/<em>your name</em>



## Microsoft Azure account

1. PROTIP: Avoid using an email that you use for your own banking, shopping, social media, etc. For continuity with a real cloud, you'll need an email address that you can share and transfer to other people. That's so at a company, you will need to give someone else the password so that if you're ever go on vacation or get "run over a bus", your organization can continue.

   In you're in an enterprise company, get an email adddress from a corporate assets administrator. A different account is often created for each department of responsibility.

   PROTIP: In the name include the month and year in the account name (such as johndoe1901@hotmail.com) for 2019-01 (January). Many <strong>create several email accounts</strong> because each Azure subscription includes a $200 credit to spend on any service for the <strong>first 30 days</strong>, free access to the most popular Azure products for 12 months, and access to more than 25 products that are always free. 

   When someone signs up for a Microsoft cloud service subscription such as Microsoft Azure, Microsoft Intune, or Office 365, a dedicated instance of Azure AD (Active Directory) is created for your organization. Azure AD is partitioned into separate tenants. A tenant is a dedicated, isolated instance of the Azure Active Directory service, owned and managed by an organization. 
   
2. For birthdate, make up an adult year: 2019 - 22 = 1997

   PROTIP: Write it down for account recovery, such as in a 1Password entry.
   Also write down the date you created the account.

3. You'll need a phone number for multi-factor Authentication.

   PROTIP: Give Googgle Voice the cell number that you've been giving out to people.
   Then get a new phone number from your cell carrier (Verizon, ATT, etc.).
   In Google Voice have that new number ring when someone calls you at your original number.
   Give that new number only to Microsoft.
   This enables you to transfer that new number to someone else without making your friends wonder where you went.

   PROTIP: It's best security that for 3FA you use someone else's phone.
   But as my wife will tell you this can get annoying if you work while she's sleeping with her phone next to her.

4. You'll need a credit card number.

   Many companies have a company (corporate) credit card.

5. Sign up for Azure:

   <a target="_blank" href="
   https://signup.live.com/signup"><strong>
   https://signup.live.com/signup</strong></a>

6. PROTIP: You don't need to sign-up for and pay for a subscription with your credit card until you have <strong>5 users</strong>.

   PROTIP: Use address with a zip code that's not associated with your home address, and used only for banking.

   Multiple subscriptions can be created under a single Azure account (Dev, Test, Staging, Production, etc.). This is particularly useful for businesses because access control and billing occur at the subscription level, not the account level. 

7. Install the <strong>Microsoft Authenticator app</strong> on you smartphone and setup Two-factor authentication to approve access using your phone.

8. Get a unique profile image and <a target="_blank" href="https://account.microsoft.com/profile/edit-picture?fref=home.banner.profile">add picture</a>.


## Two Azure portals #

Microsoft has been transitioning from the "classic" (older)
Azure Service Management (ASM) to the Azure Resource Manager (ARM).

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th> Product </th><th> Sign-up page </th><th> Dashboard page </th></tr>
<tr valign="top"><td> <a href="#ASM-signup">ASM</a> </td><td>
   <a target="_blank" href="https://account.windowsazure.com/signup/"> 
   account.windowsazure.com/signup</a>
   </td><td> 
   <a target="_blank" href="https://manage.windowsazure.com/"> manage.windowsazure.com</a>
   </td></tr>
<tr valign="top"><td> <a href="#ARM-signup">ARM</a> </td><td>
   <a target="_blank" href="https://azure.com">
   azure.com</a><br />azure.microsoft.com/en-us/
   </td><td>    
   <a target="_blank" href="https://portal.azure.com/"><strong>portal.azure.com</strong></a>
   </td></tr>
</table>

ASM has "Cloud Services" and "Affinity Groups"
which is structured with Resource Groups (logical containers)
providing a single-resource point-of-view [i.e. manage a single resource at a time]

ARM includes <strong>parallelization</strong> when creating resources for faster deployment of complex, interdependent solutions. 
ARM also includes granular access control, and the ability to tag resources with metadata.

Services NOT available in the newer ARM portal:

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/multi-factor-authentication/multi-factor-authentication-faq">Multi-factor authentication</a> (this is a big deal)
   * API Management
   * BizTalk
   * Managed Cache 
   <br /><br />

Also, instead of 2 racks, ARM resources can span 3 racks of computers.

See: <a target="_blank" href="https://azure.microsoft.com/en-us/features/azure-portal/availability/">
   Which portal supports each Azure service, listed alphabetically</a>


<a name="ASM-signup"></a>

## ASM Sign-up #

   The older steps to "Create an API gateway and Developer Portal in minutes":

0. <a target="_blank" href="
   https://account.windowsazure.com/signup">
   https://account.windowsazure.com/signup</a>

0. If you have a BizSpark account, activate the $25/month Azure credit at<br />
   <a target="_blank" href="
   https://myprodscussu1.app.vssubscriptions.visualstudio.com/Dashboard">
   https://myprodscussu1.app.vssubscriptions.visualstudio.com/Dashboard</a>

   <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/ext/subscription/account?view=azure-cli-latest#-ext-subscription-az-account-create">
   NOTE</a>: This can be done by the AZ CLI command "az account create" for those who have a
   MS-AZR-0017P (EnterpriseAgreement) or MS-AZR-0148P (EnterpriseAgreement devTest).

0. Verfication by text message or call does not use land-line VOIP phone numbers,
   only cellular numbers.

0. Input credit card (even though it's free).

0. Click "Start Managing my service" for <a target="_blank" href="https://portal.azure.com/">
   https://portal.azure.com</a>


<a name="ARM-signup"></a>

## ARM Sign-up at Azure.com

0. If you are not logged in, type <a target="_blank" href="https://azure.com/">azure.com</a> in your browser's address.

   You'll get sent to a marketing page such as:<br />
   https://azure.microsoft.com/en-us/?v=17.14

0. Click the <strong>portal</strong> link at the upper right corner.

   This redirects you a list of Microsoft accounts that have been used on your computer.

0. Click the account name (email) you use for Azure.

0. Enter the password.

   You redirected to various URLs until you land on a URL such as this containing your Tenant ID GUID:

   https://portal.azure.com/#dashboard/private/a7a02378-1e4b-4017-972e-9dfe53bc2b2f

   This is the <strong>Dashboard</strong>.



<a name="ARM-Menu"></a>

## ARM Dashboard Tour #

0. At <a target="_blank" href="https://portal.azure.com/">
   https://portal.azure.com</a>

0. Click the "hamburger" icon at the upper-left corner for English descriptions of each icon on the left edge.

0. Click it again. It's a toggle.

0. Click the ">" at the lower-left corner to manage which icons appear on the left edge.

0. Scroll down the long list to get a sense of the categories:

   * GENERAL
   * COMPUTE
   * NETWORKING
   * STORAGE
   * DATABASES
   * INTELLIGENCE + ANALYTICS
   * INTERNET OF THINGS
   * ENTERPRISE INTEGRATION
   * SECURITY + IDENTITY
   * DEVELOPER TOOLS
   * MONITORING + MANAGEMENT
   * ADD-ONS
   * OTHER
   <br /><br />

0. Click the star to control items that appear as icons on the left of the page.

0. Drag an icon and drop it to reorder the icons. 

   PROTIP: I drag the "Billing" icon to the top so I manage the money involved.

   BTW, billing is associated with Management <strong>Subscriptions</strong>
   with names such as "Pay-as-you-go..."

   ### Help + Support

0. Scroll down to click Help + Support (the person icon in blue). Notice the URL change:

   https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview

   Panes that appear on the right are called "blades".

   Support requests can ALSO be reached another way.

0. Click the question mark icon at the upper-right corner.

   ![azure help upper right 220x267](https://cloud.githubusercontent.com/assets/300046/25567655/c2642352-2dc0-11e7-9e6d-ef60c659a152.png)


   Notice Support options are also listed behind the smily face icon.

   Moreover, there is also a "Help + Support" box on the Dashboard.

   That's now 3 places you can find it.

0. Right-click on the "Help + Support" box on the Dashboard and select "unpin"
   becuase you now know you can reach it (in two places).

   ### Keyboard Shortcuts

0. Click Keyboard shortcuts in the menu.

   BLAH: I have no idea what G means. See:

   https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-keyboard-shortcuts

   
   ### Marketplace

0. Right-click on the "Marketplace" box on the Dashboard and select "unpin"
   becuase you can reach it this way:

0. Click on the green + icon for a list in the <strong>Marketplace</strong>. Additional categories are:

   * Web + Mobile
   * Containers
   * Blockchain
   <br /><br />
   
   <a target="_blank" href="https://linuxacademy.com/cp/socialize/index/type/community_post/id/16110">
   Click "Web + Mobile" to create a Web App on Azure</a> is a common use case.

0. Click the X to close a blade.

## Install Powershell 

See <a target="_blank" href="https://wilsonmar.github.io/azure-cloud-powershell/">https://wilsonmar.github.io/azure-cloud-powershell/</a>


## AZ API

1. Use the automation bash script for MacOS at 

   https://github.com/wilsonmar/mac-install-all 

   The "mac-install-all.sh" script places a <strong>secrets.sh</strong> file in your machine's home folder.

   The script takes care of <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli?view=azure-cli-latest">installing the azure CLI</a>

4. Edit the file there (not in the repo directory).

   If in the secrets.sh file the TRYOUT string is edited to contain a known value for a module, that would be executed.

   To execute all modules:

   <tt>TRYOUT="az-vm"</tt>

   Alternately, to execute only one or a few modules, for example:

   <tt>TRYOUT="az-vm"</tt>

   ... the Bash script has been programmed to create an instance using az cli commands rather than manually copied and pasted onto a <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cloud-shell/overview?view=azure-cli-latest">Azure Cloud Shell</a> instance launched on an internet browser as described (using command+shift+V) at:

   <a target="_blank" href="
   https://docs.microsoft.com/en-us/cli/azure/azure-cli-vm-tutorial?view=azure-cli-latest">
   https://docs.microsoft.com/en-us/cli/azure/azure-cli-vm-tutorial?view=azure-cli-latest</a>

   * Log in
   * Create a resource group
   * Create a virtual machine
   * Get VM information with queries
   * Set environment variables from CLI output
   * Create the new VM on an existing public subnet (contoso.ws)
   * Verify public access to one-page static page (like isitchristmas.com)
   * Cleanup (remove vm instance if TRYOUT_KEEP is not specified)
   * Display cost of above
   <br /><br />

   Alternately, if in the secrets.sh file the TRYOUT string is edited to contain this:

   <tt>TRYOUT="az-func"</tt>

   This creates an Azure (Serverless) Function, as described in commands listed at:

   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-cli-samples?toc=%2fcli%2fazure%2ftoc.json&bc=%2fcli%2fazure%2fbreadcrumb%2ftoc.json&view=azure-cli-latest">
   Azure Functions</a>

   The unique aspect of the mac-install-all.sh script is that it does NOT require you to go from screen to screen
   typing steps by step starting from<br />
   https://azure.microsoft.com/en-us/services/functions<br />
   
   The script executes a set of commands for you automatically
   so you get past the installation and configuration confusion,
   bringing your laptop to a point where you can work on changing the sample to the app you want.
   You can then re-run the script, and any changes to the underlying framework would be upgraded if needed.

   Since Azure provides a small amount of free time to all accounts each month under their
   <a target="_blank" href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-scale#consumption-plan">
   Consumption Plan</a>,
   you can do several runs each month without spending any cash. See their <a target="_blank" href="``https://azure.microsoft.com/en-us/pricing/details/functions/">Pricing</a>.

   The "az-func" TRYOUT does all the following:

   Account Password > Login > Tenant > Principal > APP_ID > Roles > Template > stop

1. The script uses this command to log you in:

   <pre>az login -u "$AZ_USER" -p "$AZ_PASSWORD"</pre>

   If you have not signed up for a <strong>subscription</strong>, you'll get an error such as:
   "No subscriptions were found for 'None'. If this is expected, use '--allow-no-subscriptions' to have tenant level accesses"

   CAUTION: Logging in online imbues you with a full set of permissions that a login using the az command does not
   fully possess.

   <a name="TenantID"></a>

   ### Tenant ID

2. Once you have logged in, when you sign up for a Microsoft cloud service, Microsoft assigns to your account a <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-howto-tenant">Tenant ID</a>. To obtain it:

   <pre><strong>AZ_TENANT=$(az account show --query 'tenantId' -o tsv)</strong></pre>

   echo $AZ_TENANT to yield something like: <tt>a7a02378-1e4b-4017-972e-9dfe53bc2b2f</tt>

   See: <a target="_blank"><a target="_blank" href="https://msdn.microsoft.com/en-us/library/hh534478.aspx">
   Multi-tenant architecture</a>

   Resource groups (RGs) are used for RBAC, Automated Deployments, and Billing/Monitoring.

   ![az-ad-analogy-480x483-28094](https://user-images.githubusercontent.com/300046/38739019-f324db20-3ef0-11e8-8c29-dd9ea31ddcd4.jpg)

3. Put the Tenant ID value in the <strong>secrets.sh</strong> file
   so that future script runs can check whether that value has already been created.

4. Also note that before getting here the script created a pem file
   PROTIP: Create a .pem file from the rsa.pub file named $SSH_USER created for GitHub:

   <pre>ssh-keygen -f ~/.ssh/$SSH_USER -m 'PEM' -e > $SSH_USER.pem
   chmod 600 $SSH_USER.pem
   </pre>

   This is recommended instead of the alternative of asking Azure to <tt>--create-cert</tt> in command:

5. We next <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?view=azure-cli-latest">
Create a Service Principal</a> using <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/best-practices/naming-conventions">
    Conventions</a> for naming principals under RBAC (role-based access control):

   This Azure CLI (command az) has the subcommand <strong>ad</strong> (for Active Directory)
   to create Service Principals (sp's). We capture the response (in JSON format) in the variable return.

   <pre><strong>return=$(az ad sp create-for-rbac --name "$AZ_PRINCIPAL" \
   --role owner \
   --create-cert \
   --query ['fileWithCertAndPrivateKey, appId, tenant]
   )</strong></pre>

   This JSON file the command puts in your $HOME folder:

   <pre>
{
  "appId": "<em>username</em>",
  "displayName": "ServicePrincipalName",
  "name": "http://<em>your app address</em>",
  "password": <em>passkey</em>,
  "tenant": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
}
   </pre>

   The additional <strong>--query</strong> attribute makes 
   
   The first of three fields (fileWithCertAndPrivateKey) requested in the query is parsed using this command:
   
   <pre>echo return | tr -d "[ ] \" \"" | awk -F, '{ print $1 }'
   </pre>

   To obtain the first part of the response, "/user/wisdom/tmpf14zjme.pem", which is used in subsequent commands.

   <tt>AZ_PEM_LOC="echo return | tr -d "[ ] \" \"" | awk -F, '{ print $2 }'"</tt>

   The second item in the query in the command above yields the APP_ID:

   AZ_APP_ID="echo $return | tr -d "[ ] \" \"" | awk -F, '{ print $2 }'"
   
   The third item is the Tenant ID. Both of these are GUIDs.
   
   The command has additional options:

   <tt>az ad sp create-for-rbac -n "lnx" \
   --role contributor \
   --scopes /subscriptions/ssssssss-ssss-ssss-ssss-ssssssssssss
   </pre>


   ### Login for sure

6. Now we take the
   <a target="_blank" href="https://lnx.azurewebsites.net/directory-roles-for-azure-ad-service-principal/">
   NOTE</a>: 
   
   <tt>az login --service-principal -u "$AZ_APP_ID" \
   -p "$AZ_PEM_LOC" --tenant "$AZ_TENANT"</tt>

   https://msdn.microsoft.com/en-us/library/azure/ad/graph/api/api-catalog
   is the older version of
   Microsoft Graph at https://developer.microsoft.com/en-us/graph
   https://dev.office.com/blogs/microsoft-graph-or-azure-ad-graph

   BLAH: The name of the file created contains something like "tmpcgzysdch", a random set of characters. 
   So the script needs to figure out that file name.
   Thus we create the pem file and tell Azure.

5. TODO: Obtain the password text from within the file 

   Create a folder <strong>$HOME/certs/</strong>

6. Put the contents in a file name containing the value in $AZ_APP_ID,
   in the $HOME folder so that it won't have a chance to get pushed to GitHub.

6. Login using credentials built above:

   <pre>az login --service-principal $AZ_PRINCIPAL \
   --username "$AZ_APP_ID" \
   --role owner \
   --tenant "$AZ_TENANT" \
   --password "$HOME/certs/$SSH_USER.pem"
   </pre>
   
   BLAH: The APP_ID and username are the same. Whatever.

7. Assign a role named "Reader" to the APP ID (username):

   <pre><strong>az role assignment create \
   --assignee "$AZ_APP_ID" \
   --role reader</strong></pre>

8. List what resources were assigned to a APP_ID:

   <pre>az role assignment list --assignee $AZ_APP_ID</pre>

   If your APP_ID has not already been created:

9. To specify a module to run (not just install):
   If in the secrets.sh file the TRYOUT string is edited to contain "az":

   <tt>TRYOUT="az"</tt>

QUESTION: limits to total concurrent executions across all functions within a given region to 100?

## Azure AD & PIM

   Subscriptions include "Azure AD Premium P2" and "Enterprise Mobility + Security (EMS) E5".

   An additional paid subscription is <a target="_blank" href="https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure">Azure AD Privileged Identity Management (PIM)</a> which minimizes the number of people who have access to secure information, which mitigates the risk of excessive, unnecessary, or misused access rights and provides oversight of role assignments, self-service, and just-in-time role activation and Azure AD and Azure resource access reviews.


## Batch commands

Azure provides a way to perform the same process on many at once. See:
https://docs.microsoft.com/en-us/cli/azure/batch?view=azure-cli-latest

Azure has "Web Jobs" for Azure Functions background jobs.


## Resources : Videos

<a target="_blank" href="https://app.pluralsight.com/library/courses/microsoft-azure-big-picture">
   Microsoft Azure: The Big Picture</a> 1h 50m Mar 10, 2016
   by Matt Milner
   makes use of VS 2010, which is rather obsolete now.


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
