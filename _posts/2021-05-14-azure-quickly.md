---
layout: post
date: "2026-07-26"
lastchange: "v015 + from futures :2021-05-14-azure-quickly.md"
url: "https://bomonike.github.io/azure-quickly"
title: "Azure Quickly"
excerpt: "CLI Bash scripts and Terraform HCL to automate setup and work while you save money"
tags: [cloud, azure]
date: "2021-05-14"
file: "azure-quickly"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/18188069/153fbcca-706c-11e6-983d-0783da57f75c.jpg
  credit: Microsoft Azure
  creditlink: 
comments: true
created: "2021-05-14"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Don't leave resources running, running up your credit card bill.

People leave resources running because they don't have the time to repeat the <strong>manual toil to click though the Azure Portal GUI</strong>. 

Invoking the automation scripts described here saves you money because you can recreate (consistently) resources with just a few commands. 

Most scripts in the rep are <strong>Bash shell scripts that run natively on MacOS and Linux</strong>. PowerShell scripts are used in cases where they are the only solution. Script code can run on Windowsw Git Bash Shell.

Within script code are references to documentation and tutorials related to the commands used.

## Setup a new Azure Subscription:

1. Get an Azure account and learn to use the <a target="_blank" href="https://portal.azure.com/">Azure portal</a> and <a target="_blank" href="https://shell.azure.com/">Azure shell</a>, which I describe at:

   <a target="_blank" href="https://wilsonmar.github.io/azure-quickly/">https://wilsonmar.github.io/azure-quickly</a>


   ### Setup a new Subscription environment:

1. Triple-click this command below:

   <pre><strong>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/azure-quickly/master/az-setup-cli.sh)" -v -i</strong></pre>

1. Right-click the highlighted and select "Copy".

1. Get in <a target="_blank" href="https://shell.azure.com/">https://shell.azure.com</a>
   or click the CLI icon after entering
   <a target="_blank" href="https://portal.azure.com/">https://portal.azure.com</a>

1. Right-click anywhere on the CLI Terminal window, then press command+V to paste from the Clipboard:

1. Press Enter to run the script. It takes several minutes to run.

   Steps executed by the script "az-setup-cli.sh" are <a href="#az-setup-cli.sh">described in the section below</a>. When done, you should see the folder containing scripts and the prompt at the left, where it will stay after each command (instead of at the end of the folder path):

   <pre>~/clouddrive/azure-quickly
   $ _</pre>

1. Use the built-in Visual Studio Code editor to edit file setmem.sh 

   <pre><strong>code ../setmem.sh
   </strong></pre>

1. Switch to the Portal GUI.
1. Open the Subscription blade. Click on your current Subscription. 
1. Click the copy icon next to the Subscription code (so it gets saved to your Clipboard).

1. Switch to the Code editor window. Highlight the existing text in variable MY_SUBSCRIPTION_ID and press Paste (Command+V on Macs or Ctrl+V on Windows).
1. Click the "..." menu to the right of the Code editor window to save, then exit.


### Run your commands:

   Now you can run scripts to create and manage resources. 
   Most of the scripts reference a tutorial at Microsoft Learn, CloudAcademy, Pluralsight, Coursera, etc.

* Run a Bing Search using API:

   <pre><strong>./<a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/az-bing-cli.sh">az-bing-cli.sh</a>
   </strong></pre>


* Create an Azure Key Vault for use by scripts to follow:

   <pre><strong>./<a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/az-keyvault-cli.sh">az-keyvault-cli.sh</a>
   </strong></pre>

   Optionally, put a secret in it; show secret; delete secret; recover secret; create a vm; Managed Service Identity; update permissions; Custom Script Extension; Apply the Custom Script Extension:

* Create a Machine Learning Workspace to run iPython Notebooks using JupyterLab:

   <pre><strong>export MY_MLWORKSPACE_NAME="mela"
   ./<a href="https://github.com/wilsonmar/azure-quickly/blob/main/az-mlworkspace-cli.sh">az-mlworkspace-cli.sh</a>
   </strong></pre>
   

* Use Azure Cognitive Services:

   <pre><strong>export MY_COG_ACCT="cogme"
   export MY_COG_PRICING_TIER="F0"  # or S0
   ./<a href="https://github.com/wilsonmar/azure-quickly/blob/main/az-cog-cli.sh">az-cog-cli.sh</a>
   </strong></pre>

* Use Helm charts

   <pre><strong>./<a href="https://github.com/wilsonmar/azure-quickly/blob/main/az-helm-cli.sh">az-helm-cli.sh</a>
   </strong></pre>

* Create a VM with a public IP address:

   <pre><strong>./<a href="https://github.com/wilsonmar/azure-quickly/blob/main/az-vm-cli.sh">az-vm-cli.sh</a>
   </strong></pre>

* Create an App Service Plan, Azure Web App, Deployment, to show MY_APPNAME.

   <pre><strong>./<a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/az-webapp-cli.sh">az-webapp-cli.sh</a>
   </strong></pre>

* Create a network with two subnets and a network security group that secures inbound traffic. One subnet is for remote access traffic, one is web traffic for VMs that run a web server. Two VMs are then created. One allows SSH access and has the appropriate network security group rules applied. You use this VM as an <strong>SSH jumpbox</strong> to then connect to the the second VM which can be used an web server:

   <pre><strong>./<a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/az-vm-jumpbox-cli.sh">az-vm-jumpbox-cli.sh</a>
   </strong></pre> 

* Create a VM with a public IP address. Enabled are a storage account, boot diagnostics with the VM diagnostics extension applied:

   <pre><strong>./<a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/az-vm-diag-cli.sh">az-vm-diag-cli.sh</a>
   </strong></pre>

* Create a VM; Recovery Services vault, a backup policy, then creates a VM and applies the backup policy before starting the initial backup job.

   <pre><strong>./<a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/az-vm-backup-cli.sh">az-vm-backup-cli.sh</a>
   </strong></pre>

* Create a Docker container from a Dockerfile; Create AKS; Scale up replicas 

   <pre><strong>./<a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/az-aks-cli.sh">az-aks-cli.sh</a>
   </strong></pre>
   
   The IP shows the "Month of Pizza Lunches in a container" website (load balanced).

* Create IoT for WebApp:

   <pre><strong>export MY_PROJECT_FOLDER="iot-project"
  export MY_IOT_HUB_NAME="hubahuba"
  export MY_IOT_HUB_GROUP="hubgroupie"
  ./<a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/iot/az-iot-cli.sh">az-iot-cli.sh</a>
   </strong></pre>

* Create Azure Functions:

   <pre><strong>./<a target="_blank" href="https://github.com/wilsonmar/azure-quickly/blob/main/az-functions-temp.sh">az-functions-temp.sh</a>
   </strong></pre>

   Several Functions components are not available in the Azure CLI, so manual actions are needed on Azure portal to fill in the gaps.
   See the "Month of Lunches" ebook.

https://github.com/Azure/azure-quickstart-templates

<hr />

## Script coding tricks

Bash scripts here are written with coding conventions defined at <a target="_blank" href="https://wilsonmar.github.io/bash-codng">https://wilsonmar.github.io/bash-coding</a> which include:

   * <tt>source ./az-all-start.sh </tt> sets up environment variables and utility functions.

   * <tt>set -o errexit</tt> makes it so that the script stops on the first error (instead of running on).

   * A backslash \ character at the end of a line within the same az shell command continues that command.

   * A new Resource Group and all resources are created new every run to reduce the complexity of coding for idempotency (the status is the same at the end of every re-run).

   * <tt>--resource-group</tt> is a required argument on many commands. It's last so that missing slash line a line above it would cause the command to fail.

   * Variable (specification) data controlling Python programs are passed to Python programs by saving them as variables in an <strong>.env file</strong> in the same folder as the Python program.

<hr />
   
<a name="az-setup-cli.sh"></a>

## az-setup-cli.sh

   The script should do all the steps below:

1. OPTIONAL: Edit the <tt>.bashrc</tt> file to customize the prompt:
   
   If you're in the <strong>cloud Shell</strong> (which runs the Linux operating system), add these lines to the bottom of the <strong>.bashrc</strong>:
   
   <pre>export PS1="\n  \w\[\033[33m\]\n$ "
   #</pre>

   The PS1 sets the prompt so it appears in the same spot on the screen every line, under the current folder and file path (rather than to the right of it at various points on the screen).

   "#" at the last line of the file is a hack to make a comment out of the PS1 the system adds on its own.

2. Navigate into a folder which holds repository to be downloaded:

   Within Cloud Shell, it's<br />
   <tt><strong>cd cloudshell</strong></tt>

   Alternately, on my laptop, I use<br />
   <tt>cd gmail_acct</tt>

3. Remove the previous repo folder:

   PROTIP: A time proxy command is added in front of commands to identify how many time was taken to run the command each time. For example, "0m4.559s" means about 4.6 seconds.

4. Download this repo to establish a run environment:

   <pre><strong>git clone https://github.com/wilsonmar/azure-quickly.git --depth 1 
   cd azure-quickly
   ls
   </strong></pre>

   <tt>\-\-depth 1</tt> specifies download of only the latest version, to save space used.

   <tt>ls</tt> lists folders and files to confirm the download actually occurred.

5. Give all the shell file permissions to run:

   <pre><strong>chmod +x *.sh
   </strong></pre>

6. Run script to setup Azure Providers:

   <pre><strong>source az-providers-setup.sh
   </strong></pre>

   The response is a list of providers added.
   <pre>>>> Microsoft.AlertsManagement already Registered.
>>> Microsoft.BotService already Registered.
>>> Microsoft.ChangeAnalysis already Registered.
>>> Microsoft.CognitiveServices already Registered.
>>> Microsoft.Compute already Registered.
>>> Microsoft.ContainerInstance already Registered.
>>> Microsoft.ContainerRegistry already Registered.
>>> Microsoft.Devices already Registered.
>>> Microsoft.Insights already Registered.
>>> Microsoft.KeyVault already Registered.
>>> Microsoft.Notebooks already Registered.
>>> Microsoft.MachineLearningServices already Registered.
>>> Microsoft.ManagedIdentity already Registered.
>>> Microsoft.Search already Registered.
>>> Microsoft.Storage already Registered.
>>> Microsoft.Web already Registered.
   </pre>

   The above only needs to be done once, but running it again won't be harmful.

7. Give setmem.sh permissions to run and run it :

   <pre><strong>chmod +x ../setmem.sh
   source ../setmem.sh
   </strong></pre>

8. Move (copy and rename) "sample-setmem.sh" to file "setmem.sh" 

   <pre><strong>mv setmem-sample.sh ../setmem.sh
   </strong></pre>

   PROTIP: We move the file where it will never be uploaded to any repository (GitHub, GitLab, etc.). 


   ### Manually customize values in setmem.sh

9. Open the file for edit using program "code" (Visual Studio Code):

   <pre><strong>code ../setmem.sh
   </strong></pre>

   <tt>..</tt> is used because the file, containing secrets, is in a folder which should never be pushed to GitHub.

1. Use a text editor program to edit the ../setmem.sh file:

   Scripts have been <strong>generalized</strong> by environment variables substituting for hard-coded values in scripts. PROTIP: Using variable instead of hard-coding avoids typos and misconfigurations.
   
   Lines below define values for each variable so that multiple runs can use different values, without need to change the script file. 

1. In <a target="_blank" href="https://portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade">portal.azure.com Subscription blade</a>, select the Subscription you wnat to use, then click the icon to Copy to Clipboard. 

   ![az-copy-sponsorship-195x65](https://user-images.githubusercontent.com/300046/117761823-45b44000-b1e5-11eb-976c-213d918ca163.png)

   In the file, highlight the ID and paste it:

   <pre>export MY_SUBSCRIPTION_NAME="Azure Pass - Sponsorship"
   export MY_SUBSCRIPTION_ID="11cb040d-4e32-4524-bc8e-0bee213dddae"  # for gmail 
   </pre>

1. In <a target="_blank" href="https://portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade">portal.azure.com Tenant blade</a>, select the Tenant you wnat to use, then click the icon to Copy to Clipboard. 

   ![az-copy-tenant-129x71](https://user-images.githubusercontent.com/300046/117761778-346b3380-b1e5-11eb-8d9b-4e01211db392.png)

   In the file, highlight the ID and paste it:

   <pre>export TENANT_ID="22223348-f7f0-4cc2-addc-11021d882720"           # for gmail, in Portal
   </pre>

   TODO: Substitute export statements of secrets with calls to retrieve them from a long-running Azure KeyVault. But no one else would be at this file unless they are properly logged into Azure under your account.

1. Edit the MY_LOC (Location = Region) and other defaults.

1. At the bottom of the file, add a statement which prints out one of the variables, so you know the export statements took:

   In a Bash script:

   <pre><strong>echo "MY_RG=$MY_RG"</strong></pre>

1. Save the file. In Cloud Shell, press command+Q or clicking the "..." to press Save, then Close.


   ## Each work session

1. At the beginning of each session invoke the script in the folder just above your custom scripts repo:

   <pre><strong>source ../setmem.sh
   </strong></pre>

   NOTE: Using "source" to run the script so that environment variables defined in the script will be visible after the script is done, and be inherited by any programs you launch from it. That's because source runs the script in the current shell. But note that any exit statement would stop the run.

   Alternately,
   <pre>source <(curl -s -L https://example.com/install.sh)</pre>

   After execution, you can still override variable values before running another script.

   That is how you can run scripts for several regions/locations - by changing just the <tt>MY_LOC</tt> environment variable's value and running the script again.

1. PROTIP: <strong>Delete resource groups</strong> to stop charges from accumulating on Virtual Servers:

   <pre><strong>time az group delete --name "${MY_RG}" --yes   # takes several minutes
   </strong></pre>

   <tt>--yes</tt> before the az command feeds a "y" to automatically answer the request:<br />
   Are you sure you want to perform this operation? (y/n): y

<hr />

## az role coding

<pre># https://learn.microsoft.com/en-us/cli/azure/role?view=azure-cli-latest
&nbsp;
az role definition create --role-definition ./role.json
&nbsp;
az role definition list 
&nbsp;
az role assignment create --role "$MY_ROLE" \
   --assignee-object-id "$AZ_ASSIGNEE_OBJECT_ID" \
   --resource-group "$MY_RESOURCE_GROUP" \
   --scope "$MY_SCOPE"
&nbsp;
az role assignment list
</pre>

The <tt>role.json</tt> file contains:

<pre>{
    "Name": "Contoso On-call",
    "Description": "Perform VM actions and read storage and network information.",
    "Actions": [
        "Microsoft.Compute/*/read",
        "Microsoft.Compute/virtualMachines/start/action",
        "Microsoft.Compute/virtualMachines/restart/action",
        "Microsoft.Network/*/read",
        "Microsoft.Storage/*/read",
        "Microsoft.Authorization/*/read",
        "Microsoft.Resources/subscriptions/resourceGroups/read",
        "Microsoft.Resources/subscriptions/resourceGroups/resources/read",
        "Microsoft.Insights/alertRules/*",
        "Microsoft.Support/*"
    ],
    "DataActions": [
        "Microsoft.Storage/storageAccounts/blobServices/containers/blobs/*"
    ],
    "NotDataActions": [
        "Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write"
    ],
    "AssignableScopes": ["/subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]
}
</pre>



<hr />

## References

Scripts here are adapted from various experts generous with sharing their code:

   * https://github.com/fouldsy/azure-mol-samples-2nd-ed by Iain Foulds, explained in https://aka.ms/monthoflunches published 4/30/2020.

   * https://github.com/MicrosoftLearning/AZ-303-Microsoft-Azure-Architect-Technologies
   * https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies
   * https://github.com/Azure/azure-cli by Microsoft

   * https://github.com/timothywarner/az400 & az303 by Tim Warner
   * https://github.com/zaalion/oreilly-azure-app-security by Reza Salehi 
   
   * https://github.com/Azure/azure-quickstart-templates (ARM Templates)
   * https://github.com/johnthebrit/AzureMasterClass PowerShell scripts
   * https://github.com/terraform-providers/terraform-provider-azurerm

   * Skylines Academy
   * Gruntwork (Terraform)
   * CloudPosse (Terraform for AWS)
   <br /><br />


## More about Azure #

This is one of a series about Azure cloud:

{% include azure_links.html %}

<hr />
<i>{{ page.lastchange }}</i>