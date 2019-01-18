---
layout: post
title: "Terraform from Hashicorp"
excerpt: "Client-only immutable multi-cloud provisioning, with open-sourced Enterprise support"
tags: [DevOps, ecosystem]
shorturl: "https://goo.gl/"
image:
# feature: pic data center slice 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622043/8b1f9cce-0584-11e6-8b9f-4b6db5bb6e37.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/terraform">This tutorial</a> is a step-by-step <strong>hands-on deep yet succinct</strong> introduction to 
using Hashicorp's Terraform to build, change, and version clusters of 
<a href="#Immutable">immutable</a> servers (through load balancers) 
running in clouds using <a href="#Idempotent">idempotent</a> declarative specifications.

This integrates examples and wisdom from videos and blogs by <a href="#RockStars">"rock stars"</a> working in various organizations.

## Infrastructure as Code Competition

Like AWS Cloud Formation, Terraform automation <strong>saves money</strong> by automating the configuration of servers, which is quicker and more consistent than manually clicking through the GUI.

The difference between Chef, Puppet, Ansible, SaltStack, AWS CloudFormation, and Terraform:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/30870969-87e52558-a2a2-11e7-8cfa-454fe9081c64.png">
<img alt="terraform-comp-colored-650x261-36439" width="650" height="261" src="https://user-images.githubusercontent.com/300046/30870914-62437728-a2a2-11e7-8e6a-e3c847f7984f.jpg"><small>(Click to pop-up full screen image <a target="_blank" href="https://blog.gruntwork.io/why-we-use-terraform-and-not-chef-puppet-ansible-saltstack-or-cloudformation-7989dad2865c#.63ls7fpkq">colorized from Gruntwork's blog</a>)</small></a>

Terraform's advantage over Amazon's Cloud Formation scripts is that Terraform can also provision on-premises servers running OpenStack as well as AWS, Azure, Google Cloud, Digitial Ocean, Fastly, and other <a href="#CloudProviders">cloud providers</a> -- "anything with an API".

Terraform makes infrastructure provisioning Repeatable. Versioned. Documented. Automated. Testable. Shareable.

Terraform and Ansible can work in unison and complement each other. Terraform can bootstrap the underlying cloud infrastructure and then Ansible provisions the user space. To test a service on a dedicated server, skip using Terraform and run the Ansible playbook on that machine.
Linux Academy has a <a target="_blank" href="https://github.com/linuxacademy/terransible">"Deploy to AWS with Ansible and Terraform" video class</a> by Derek Morgan who shows how to do just that, with <a target="_blank" href="https://github.com/linuxacademy/terransible">code</a> and <a target="_blank" href="https://www.lucidchart.com/documents/view/c1ceaa2b-647c-49bd-9dca-bcaffc04be3b">diagram</a>.

<a name="Immutable"></a>

"Immutable" means once instantiated, it doesn't change. In DevOps, this strategy means individual servers are treated like "cattle" (removed from the herd) and not as "pets" (courageously kept alive as long as possible).
When I make a mistake in a complicated setup, I can get going again quickly and easily with less troubleshooting because I can just re-run the script.

Additionally...

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th> Feature </th><th> CloudFormation </th><th> Terraform </th></tr>
<tr><td> Source code </td><td> closed-source </td><td> <a target="_blank" href="https://github.com/hashicorp/terraform/">open source</a> </td></tr>
<tr><td> Open Source contributions? </td><td> No </td><td> Yes (<a target="_blank" href="https://github.com/hashicorp/terraform/issues">GitHub issues</a>) </td></tr>
<tr><td> Configuration format </td><td> JSON </td><td> <a href="#HCL">HCL JSON</a> </td></tr>
<tr><td> <a href="#State">State management</a> </td><td> JSON </td><td> <a href="#HCL">HCL JSON</a> </td></tr>
<tr><td> <a href="#Providers">Cloud Providers</a> support </td><td> AWS only </td><td> AWS, GCE, Azure (20+) </td></tr>
<tr><td> <a href="#ExecControl">Execution control</a> </td><td> No </td><td> Yes </td></tr>
<tr><td> Iterations </td><td> No </td><td> Yes </td></tr>
<tr><td> Manage already created resources </td><td> No </td><td> Yes (hard) </td></tr>
<tr><td> Failure handling </td><td> Optional rollback </td><td> Fix &amp; retry </td></tr>
<tr><td> Logical comparisons </td><td> No </td><td> Limited </td></tr>
<tr><td> <a href="#Modules">Extensible Modules</a> </td><td> No </td><td> <a href="#Modules">Yes</a> </td></tr>
</table>

Terraform also provides <strong>parallel execution</strong> control, iterations, and (perhaps most of all) management of resources already created (desired state configuration) over several cloud providers (not just AWS).

A key differentiator is Terraform's plan command, which provides more than just a "dry-run" before configurations are applied for real. Under the covers, the plan command generates an executable, and uses it to apply, which guarantees the plan is the same as the apply.


## Websites to know

* <a target="_blank" href="https://www.terraform.io/intro/index.html">terraform.io</a>
   marketing home page.

* <a href="https://www.terraform.io/docs/enterprise-legacy/glossary/index.html" target="_blank" > Glossary of Terraform terms</a>

* <a target="_blank" href="https://www.terraform.io/intro/getting-started/install.html">
   Official Getting Started docs at Hashicorp</a>
   focus on individual elements (i.e. resources, input variables, output variables, etc).

* <a target="_blank" href="https://groups.google.com/forum/#!forum/terraform-tool">Google Group terraform-tool</a>
* LinkedIn
* StackOverflow
* IRC (Internet Relay Chat)

## Licensing
   
   <a target="_blank" href="https://www.hashicorp.com/products/terraform-old/">
   Paid Pro and Premium licenses of Terraform</a>
   add version control integration, MFA security, and other enterprise features.

## Installation #

   PROTIP: Terraform is written in the [Go language](/golang/), so there is no JVM to download.


### Bootstraping options

Terraform can work with :

   <a target="_blank" href="
   https://forge.puppet.com/inkblot/terraform">
   https://forge.puppet.com/inkblot/terraform</a>

   <a target="_blank" href="
   https://supermarket.chef.io/cookbooks/terraform">
   https://supermarket.chef.io/cookbooks/terraform</a>

   <a target="_blank" href="
   https://github.com/migibert/terraform-role">
   https://github.com/migibert/terraform-role</a>
   Ansible role to install Terraform on Linux machines

   <a target="_blank" href="
   https://github.com/hashicorp/docker-hub-images/tree/master/terraform">
   https://github.com/hashicorp/docker-hub-images/tree/master/terraform</a>
   builds Docker containers for using the terraform command line program.


### Install on MacOS

1. MEH: If you plan on frequently switching among several versions installed of Terraform, one alternative is:

   <tt><strong>brew install tfenv
   </strong></tt>

   The response at time of writing:

   <pre>
==> Downloading https://github.com/kamatama41/tfenv/archive/v0.6.0.tar.gz
==> Downloading from https://codeload.github.com/Zordrak/tfenv/tar.gz/v0.6.0
######################################################################## 100.0%
🍺  /usr/local/Cellar/tfenv/0.6.0: 19 files, 23.5KB, built in 6 seconds
   </pre>

   Source for this is from <a target="_blank" href="https://github.com/Zordrak/tfenv">
   https://github.com/Zordrak/tfenv</a> (previously from <a target="_blank" href="https://github.com/kamatama41/tfenv">https://github.com/kamatama41/tfenv</a>)

   Alas, I don't recommend it because when I tried to install the latest version using tfenv:

   <tt><strong>tfenv install latest</strong></tt>

   The error message I got was:

   <pre>
[INFO] Installing Terraform v0.12.0
[INFO] Downloading release tarball from https://releases.hashicorp.com/terraform/0.12.0/terraform_0.12.0_darwin_amd64.zip
&nbsp;
curl: (22) The requested URL returned error: 403 
tfenv: tfenv-install: [ERROR] Tarball download failed
   </pre>

   When tfenv is used, do not install from the website or using :

   <tt>brew install terraform
   </tt>

   PROTIP: The installer is for a specific version of MacOS (such as High Sierra):

   <pre>
==> Downloading https://homebrew.bintray.com/bottles/terraform-0.11.10.high_sierra.bottle.1.tar.gz
Already downloaded: /Users/wilsonmar/Library/Caches/Homebrew/downloads/00744f3d03e5309d7548edd315f26202944b1594b0f98017fba6b7e12b191a90--terraform-0.11.10.high_sierra.bottle.1.tar.gz
==> Pouring terraform-0.11.10.high_sierra.bottle.1.tar.gz
🍺  /usr/local/Cellar/terraform/0.11.10: 6 files, 102.1MB
   </pre>   

   PROTIP: This creates folder <strong>.terraform.d</strong> on your $HOME folder, containing files
   checkpoint_cache and checkpoint_signature

2. Proceed to <a href="#ScriptInit">Get sample Terraform scripts</a>.


### Install on Windows

1. In a Run command window as Administrator.
2. Install Chocolatey cmd:
3. Install Terraform using Chocolatey:

   <tt><strong>choco install terraform -y
   </strong></tt>

   The response at time of writing:

   <pre>
Chocolatey v0.10.8
Installing the following packages:
terraform
By installing you accept licenses for the packages.
Progress: Downloading terraform 0.10.6... 100%
&nbsp;
terraform v0.10.6 [Approved]
terraform package files install completed. Performing other installation steps.
The package terraform wants to run 'chocolateyInstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[N]o/[P]rint): y
&nbsp;
Removing old terraform plugins
Downloading terraform 64 bit
  from 'https://releases.hashicorp.com/terraform/0.10.6/terraform_0.10.6_windows_amd64.zip'
Progress: 100% - Completed download of C:\Users\vagrant\AppData\Local\Temp\chocolatey\terraform\0.10.6\terraform_0.10.6_windows_amd64.zip (12.89 MB).
Download of terraform_0.10.6_windows_amd64.zip (12.89 MB) completed.
Hashes match.
Extracting C:\Users\vagrant\AppData\Local\Temp\chocolatey\terraform\0.10.6\terraform_0.10.6_windows_amd64.zip to C:\ProgramData\chocolatey\lib\terraform\tools...
C:\ProgramData\chocolatey\lib\terraform\tools
 ShimGen has successfully created a shim for terraform.exe
 The install of terraform was successful.
  Software installed to 'C:\ProgramData\chocolatey\lib\terraform\tools'
&nbsp;
Chocolatey installed 1/1 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).
    </pre>   

4. Proceed to <a href="#ScriptInit">Get sample Terraform scripts</a>.


### Install on Ubuntu

1. On a Console:

   <pre>
sudo curl -O https://releases.hashicorp.com/terraform/0.11.5/terraform_0.11.5_linux_amd64.zip
sudo apt-get install unzip
sudo mkdir /bin/terraform 
sudo unzip terraform_0.11.5_linux_amd64.zip -d /usr/local/bin/
   </pre>

2. Proceed to <a href="#ScriptInit">Get sample Terraform scripts</a>.


### Docker Install:

1. To install Docker CE:

   <pre>
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
&nbsp;
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
&nbsp;
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
&nbsp;
sudo apt-get update
sudo apt-get install docker-ce
   </pre>

0. Proceed to <a href="#ScriptInit">Get sample Terraform scripts</a>.


<a name="Configuration"></a>

## Configuration

### Version verify

1. Obtain version installed, to check if it's working:

   <tt><strong>terraform version 
   </strong></tt>

   Alternately:

   <tt><strong>terraform \-\-version 
   	</strong></tt>

   WARNING: The response at time of writing, Terraform is not even "1.0.0" release, meaning it's in beta maturity:

   <pre>
   Terraform v0.11.10
   </pre>


   ### Commands list & help

2. For a list of commands:

   <tt><strong>terraform 
   	</strong></tt>

   The response at time of writing:

   <pre>
Usage: terraform [--version] [--help] &LT;command> [args]
&nbsp;
The available commands for execution are listed below.
The most common, useful commands are shown first, followed by
less common or more advanced commands. If you're just getting
started with Terraform, stick with the common commands. For the
other commands, please read the help and docs before usage.
&nbsp;
Common commands:
    apply              Builds or changes infrastructure
    console            Interactive console for Terraform interpolations
    destroy            Destroy Terraform-managed infrastructure
    env                Workspace management
    fmt                Rewrites config files to canonical format
    get                Download and install modules for the configuration
    graph              Create a visual graph of Terraform resources
    import             Import existing infrastructure into Terraform
    init               Initialize a Terraform working directory
    output             Read an output from a state file
    plan               Generate and show an execution plan
    providers          Prints a tree of the providers used in the configuration
    push               Upload this Terraform module to Atlas to run
    refresh            Update local state file against real resources
    show               Inspect Terraform state or plan
    taint              Manually mark a resource for recreation
    untaint            Manually unmark a resource as tainted
    validate           Validates the Terraform files
    version            Prints the Terraform version
    workspace          Workspace management
&nbsp;
All other commands:
    debug              Debug output management (experimental)
    force-unlock       Manually unlock the terraform state
    state              Advanced state management
   </pre>

3. Help on a specific command, for example:

   <tt><strong>terraform plan \-\-help
    </strong></tt>


   ### Terraform Console

4. Open the Terraform Console (REPL) from a Terminal/command shell:

   <tt><strong>terraform console</strong></tt>

   The response is the prompt

   <strong>></strong> 

5. Commands can interpret numbers:

   <pre>element(list("one","two","three"),0,2)</pre>

   The response is (because counting begins from zero):

   <pre>1:3: element: expected 2 arguments, got 3 in:</pre>
   
6. Type <tt>exit</tt> to return to Bash Terminal window.


## Automation

   NOTE: Automating infrastructure deployment consists of these features:

   * Provisioning resources
   * Planning updates
   * Using source control
   * Reusing templates
   <br /><br />

  <a name="Idempotent"></a>
  PROTIP: Terrform files are "idempotent" (repeat runs don't change anything if nothing is changed). 
  Thus Terraform defines the "desired state configuration".

  NOTE: Terraform remote configures remote state storage with Terraform.

<a name="ProviderCreds"></a>

### Provider credentials

Since the point of Terraform is to get you into clouds, Terraform looks for specific environment variables containing AWS credentials. Many Mac users add credentials in their ~/.bash_profile these lines:

   <pre>
export AWS_ACCESS_KEY_ID=(your access key id)
export AWS_SECRET_ACCESS_KEY=(your secret access key)
   </pre>

   For Azure:

   <pre>
   AZ_PRINCIPAL=""
   AZ_USER=""
   AZ_PASSWORD=""
   AZ_USERNAME=""
   AZ_TENANT=""
   AZ_REGION=""
   </pre>

   For Google Cloud:

   <pre>
   GCP_PROJECT=""
   GCP_USER=""
   GCP_KEY=""
   GCP_REGION=""
   </pre>


<a name="ScriptInit"></a>

## Sample Terraform scripts

### Terraform's sample

The steps below are based on
   <a target="_blank" href="
   https://www.terraform.io/intro/examples/">
   https://www.terraform.io/intro/examples</a>
and implemented in the setup scripts at:
   <a target="_blank" href="
   https://github.com/wilsonmar/mac-setup/">
   https://github.com/wilsonmar/mac-setup</a>
which performs the following steps for you:

1. Install a Git client if you haven't already.
0. Use an internet browser (Chrome) to see the sample assets at:

   <a target="_blank" href="
   https://github.com/terraform-providers/terraform-provider-aws.git">
   https://github.com/terraform-providers/terraform-provider-aws.git</a>

0. If you are going to make changes, click the <strong>Fork</strong> button.
0. Create or navigate to a container folder where new repositories are added. For example:

   `~/gits/wilsonmar/tf-sample`

0. Get the repo onto your laptop (substituting "wilsonmar" with your own account name):

   <tt><strong>git clone <a target="_blank" href="
   https://github.com/terraform-providers/terraform-provider-aws.git">
   https://github.com/terraform-providers/terraform-provider-aws.git</a> \-\-depth=1 && 
   cd tf-sample
   </strong></tt>

   The above is one line, but may be word-wrapped on your screen.

   The response at time of writing:

   <pre>
Cloning into 'tf-sample'...
remote: Counting objects: 12, done.
remote: Compressing objects: 100% (12/12), done.
remote: Total 12 (delta 1), reused 9 (delta 0), pack-reused 0
Unpacking objects: 100% (12/12), done.
   </pre>  

### Gruntwork's sample

   <a target="_blank" href="#Gruntwork">Gruntwork.io</a> offers (for $4,950), access to their 250,000-line Reference Architecture of starter code to create a production-worthy "defense in depth" setup on AWS:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/39746950-248190d8-5269-11e8-840d-ba14a45499bc.jpg">
   <img width="683" alt="terraform-ref-arch-683x407-106209" src="https://user-images.githubusercontent.com/300046/39746950-248190d8-5269-11e8-840d-ba14a45499bc.jpg"></a>

   An additional $500 a month gets you access to their <a target="_blank" href="https://gruntwork.teachable.com/p/reference-architecture-walkthrough/">
   Reference Architecture Walktrough video class</a>.

For those without the big bucks, Yevgeniy (Jim) Brikman (<a target="_blank" href="https://www.ybrikman.com/">ybrikman.com</a>, co-founder of DevOps as a Service <a target="_blank" href="https://Gruntwork.io/">Gruntwork.io</a>) has generously shared:

   * <a target="_blank" href="
   https://github.com/gruntwork-io/intro-to-terraform">
   https://github.com/gruntwork-io/intro-to-terraform.git</a>

   * <a target="_blank" href="https://github.com/brikis98/infrastructure-as-code-talk/tree/master/terraform-configurations">https://github.com/brikis98/infrastructure-as-code-talk/tree/master/terraform-configurations</a>

   * <a target="_blank" href="https://github.com/brikis98/terraform-up-and-running-code/tree/master/code">https://github.com/brikis98/terraform-up-and-running-code</a>
   provides bash scripts to run on Ubuntu server to install Apache, PHP, and a sample PHP app on an Ubuntu server. 
   It also has automates tests written in Ruby script to make sure it returns "Hello, World".
   The repo is referenced by the book <a target="_blank" href="https://www.amazon.com/Terraform-Running-Writing-Infrastructure-Code-ebook/dp/B06XKHGJHP/">
   Terraform Up & Running (OReilly book $11.99 on Amazon)</a> and website:<br />
   <a target="_blank" href="http://www.terraformupandrunning.com/?ref=gruntwork-blog-comprehensive-terraform">terraformupandrunning.com</a>

   The sample scripts referenced by this tutorial contain moustache variable mark-up so that you can generate a set for your organization.

   * <a target="_blank" href="
   https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html">
   https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set.html</a>

   * <a targt="_blank" href="
   https://training.gruntwork.io/courses/reference-architecture-walkthrough/lectures/4211191">
   https://training.gruntwork.io/courses/reference-architecture-walkthrough/lectures/4211191</a>

   <a name="Terragrunt"></a>

#### Terragrunt from Gruntwork

   Gruntwork has open-sourced its <a target="_blank" href="https://github.com/gruntwork-io/terragrunt">https://github.com/gruntwork-io/terragrunt</a> executables which is a thin wrapper for Terraform that provides extra tools for working with multiple Terraform modules, and managing remote state.

   The executable can be installed on macOS using <tt>brew install terragrunt</tt>

   Using it means you henceforth run the terragrunt executable instead of terraform:

   * terragrunt get
   * terragrunt plan
   * terragrunt apply
   * terragrunt output
   * terragrunt destroy<br /><br />

   The program also expects an additional top level in all <tt>.tfvars</tt> files:

   <pre>terragrunt = {
     # (put your Terragrunt configuration here)
   }</pre>

   Unlike Terraform, Terragrunt can configure remote state, locking, extra arguments, and lots more.

   <a name="HCL"></a>

### HCL (Hashicorp Configuration Language) 

   Terraform defined HCL (Hashicorp Configuration Language) for both human and machine consumption. HCL is defined at <a target="_blank" href="https://github.com/hashicorp/hcl">https://github.com/hashicorp/hcl</a> and described at <a target="_blank" href="
   https://www.terraform.io/docs/configuration/syntax.html">
   https://www.terraform.io/docs/configuration/syntax.html</a>.

   HCL is less verbose than JSON and more concise than YML.<a target="_blank" href="https://www.terraform.io/docs/configuration/syntax.html">*</a> 
   Unlike JSON and YML, <strong>HCL allows annotations</strong> as in bash scripts:<br />
   single line comments start with # (pound sign) or double forward slashes.
   Multi-line comments are wrapped between /* and \*/.

   Values can be interpolated using syntax wrapped in $\{\}, called interpolation syntax, in the format of $\{type.name.attribute\}. Literal $ are coded by doubling up $$. For example, $\{aws.instance.base.id\} is interpolated to something like `i-28978a2`.

   Each block with the curly braces is called a "stanza".

   Back-slashes specify continuation (as in Bash).

   More importantly, tf files are <strong>declarative</strong>, meaning that they define the desired end-state (outcomes). If 15 servers are declared, Terraform automatically adds or removes servers to end up with 15 servers rather than specifying procedures to add 5 servers. 
   
   Terraform can do that because <strong>Terraform knows how many servers it has setup already</strong>.
   It <strong>tracks the state</strong>.

   HCL does not have conditional if/else logic, which is why <a href="#Modules">modules (described below)</a> are necessary.

   <a target="_blank" href="https://github.com/hashicorp/hcl2">HCL2</a>
   combines the interpolation language HIL to produce a single configuration language that supports arbitrary expressions.
   It's not backward compatible, with no direct migration path.


### Validate .tf files

1. Navigate into the repo and view files in:

   <tt><strong>ls single-web-server
   </strong></tt>

   The contents:

   <pre>README.md    <a href="#main.tf">main.tf</a>     <a href="#Outputs.tf">outputs.tf</a>   <a href="#variables.tf">variables.tf</a>
   </pre>

   This set can be within a sub-module folder.

   ### Credentials in tfvars

   Define cloud account credentials in a <strong>terraform.tfvars</strong> file containing;

   <pre>
aws_access_key = "YourAWSAccessKey"
aws_secret_key = "YourAWSSecretKey"
private_key_path = "C:\\PathToYourPrivateKeys\PrivateKey.pem"
accountId = "YourAWSAccountID"
   </pre>

   This is not good security to risk such information in a repo potentially shared.

   ### tfvars environments

   PROTIP: Separate Terraform configurations by a folder for each environment.

   * base (template for making changes)
   * dev 
   * loadtest (performance/stress testing)
   * stage
   * uat (User Acceptance Testing)
   * prod
   * demo (demostration used by salespeople)
   * train (for training users)
   <br /><br />

1. Navigate into the base folder.

   PROTIP: Terraform commands act only on the current directory, and does not recurse into sub directories.

2. View the development.tfvars file:

   <pre>
environment_tag = "dev"
tenant_id = "223d"
billing_code_tag = "DEV12345"
dns_site_name = "dev-web"
dns_zone_name = "mycorp.xyz"
dns_resource_group = "DNS"
instance_count = "2"
subnet_count = "2"
   </pre>

   The production.tfvars file usually instead contain more instances and thus subnets that go through a load balancer for auto-scaling:

   <pre>
environment_tag = "prod"
tenant_id = "223d"
billing_code_tag = "PROD12345"
dns_site_name = "marketing"
dns_zone_name = "mycorp.com"
dns_resource_group = "DNS"
instance_count = "6"
subnet_count = "3"
   </pre>

   All these would use `main_config.tf` and `variables.tf` files commonly used for all environments:

   Tag for cost tracking by codes identifying a particular budget, project, department, etc.


   <a name="variables.tf"></a>

   ### variables.tf (vars.tf)

   This file contains a reference to environment variables:

   <pre>   
variable "aws_access_key" {}
variable "aws_secret_key" {}
&nbsp;
variable "subnet_count" {
  default = 2
}
   </pre>   

   An example of the variables.tf file explained in video: <a target="_blank" href="https://www.joyent.com/blog/video-simple-terraform-app">
Get started managing a simple application with Terraform</a>
February 21, 2018 - by Alexandra White (at Joyant) shows the deployment of the
<a target="_blank" href="https://github.com/heyawhite/joyent_packer-terraform-series/tree/master/1-create-image-with-packer/happy-randomizer">
Happy Randomizer app</a>

   <pre>
variable "image_name" {
  type        = "string"
  description = "The name of the image for the deployment."
  default     = "happy_randomizer"
}
variable "image_version" {
  type        = "string"
  description = "The version of the image for the deployment."
  default     = "1.0.0"
}
variable "image_type" {
  type        = "string"
  description = "The type of the image for the deployment."
  default     = "lx-dataset"
}
variable "package_name" {
  type        = "string"
  description = "The package to use when making a deployment."
  default     = "g4-highcpu-128M"
}
variable "service_name" {
  type        = "string"
  description = "The name of the service in CNS."
  default     = "happiness"
}
variable "service_networks" {
  type        = "list"
  description = "The name or ID of one or more networks the service will operate on."
  default     = ["Joyent-SDC-Public"]
}
   </pre>   

   In a cluster enviornment:

   <pre>   
variable "server_port" {
  description = "The port the server will use for HTTP requests"
  default = 8080
}</pre>   

   PROTIP: <strong>Each input</strong> should be defined as a variable.


   ### Defaults and lookup function

   PROTIP: Variables can be assigned multiple default values selected by a lookup function:

   <pre>
# AWS_ACCESS_KEY_ID
# AWS_SECRET_ACCESS_KEY
# export AWS_DEFAULT_REGION=xx-yyyy-0
&nbsp;
variable "server_port" {
  description = "The port the server will use for HTTP requests"
  default = 8080
}
variable "amis" {
  type = "map”"
  default = {
    us-east-1 = "ami-1234"
    us-west-1 = "ami-5678"
  }
}
ami = ${lookup(var.amis, "us-east-1")}
   </pre>

   PROTIP: With AWS EC2, region "us-east-1" must be used as the basis for creating others.

   <a target="_blank" href="https://www.google.com/url?q=https%3A%2F%2Fdocs.aws.amazon.com%2FAWSEC2%2Flatest%2FUserGuide%2Flaunch-marketplace-console.html&sa=D&sntz=1&usg=AFQjCNGbWvcSfsheH4psSFED8ZF-w6mrqQ">NOTE</a>: Amazon has an approval process for making AMIs available on the public Amazon Marketplace.


   <a name="main.tf"></a>

   ### main.tf

   An example of the main.tf file:

   <pre>
terraform {
  required_version = ">= 0.8, < 0.9"
}
provider "aws" {
  alias = "NorthEast"
  region = "us-east-1"
  access_key = "${var.AWS_ACCESS_KEY}"
  secret_key = "${var.AWS_SECRET_KEY}"
}
resource "aws_instance" "web" {
  ami           = "ami-40d28157"
  instance_type = "t2.micro"
  subnet_id     = "subnet-c02a3628"
  vpc_security_group_ids = ["sg-a1fe66aa"]
  tags {
    Identity = "..."
  }
}
   </pre>

   NOTE: Components of Terraform are: provider, resource, provision.

   "t1.micro" qualifies for the Amazon free tier available to first-year subscribers.

   PROTIP: Vertically aligning values helps to make information easier to find.

   The ami (amazon machine image) identifier is obtained from Amazon's catalog of public images.

   `subnet_id` is for the VPC and vpc_security_group_ids array.

   `tags_identity` is to scope permissions.

   See <a target="_blank" href="http://www.antonbabenko.com/2016/09/21/how-i-structure-terraform-configurations.html">
   http://www.antonbabenko.com/2016/09/21/how-i-structure-terraform-configurations.html</a>


   <a name="Providers"></a>

   ### Cloud Providers

   Terraform translates HCL into API calls to cloud providers listed at<br />
   <a target="_blak" href="
   https://github.com/terraform-providers">
   https://github.com/terraform-providers</a>
   
   "aws", "google", "azure", Kubernetes, GitLab, DigitalOcean, Heroku, GitHub, OpenStack, etc.

   <a target="_blank" href="
   https://github.com/hashicorp/terraform/tree/master/builtin/providers">
   https://github.com/hashicorp/terraform/tree/master/builtin/providers</a>

1. PROTIP: Make sure that the AWS region is what you want.

   <a target="_blank" href="
   https://www.terraform.io/docs/providers/aws/r/instance.html">
   https://www.terraform.io/docs/providers/aws/r/instance.html</a>
   AWS provider

2. VPC Security group

   The example in <a target="_blank" href="https://github.com/gruntwork-io/intro-to-terraform/blob/master/single-web-server/main.tf">
   Gruntwork's intro-to-terraform</a> also specifies the vpc security group:

   <pre>
resource "aws_instance" "example" {
  \# Ubuntu Server 14.04 LTS (HVM), SSD Volume Type in us-east-1
  ami = "ami-2d39803a"
  instance_type = "t2.micro"
  vpc_security_group_ids = ["${aws_security_group.instance.id}"]
  user_data = <<-EOF
              #!/bin/bash
              echo "Hello, World" > index.html
              nohup busybox httpd -f -p "${var.server_port}" &
              EOF
  <a href="#Taggging">tags</a> {
    Name = "ubuntu.t2.hello.01"
  }
}
resource "aws_security_group" "instance" {
  name = "terraform-example-instance"
  \# Inbound HTTP from anywhere:
  ingress {
    from_port = "${var.server_port}"
    to_port = "${var.server_port}"
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
   </pre>   

   The "var.server_port" is defined in variables file:

   <a name="Tagging"></a>

   The tag value AWS uses to name the EC2 instance.


   <a name="ExecControl"></a>
   
   ### Execution control

   Terraform automatically detects and enforces rule violations, such as 
   use of rogue port numbers other than 80/443.

   <a name="Outputs.tf"></a>

   ### outputs.tf

   Sample contents of an outputs.tf file:

  <pre>
  output "public_ip" {
  value = "${aws_instance.example.public_ip}"
}
  output "url" {
  value = "http://${aws_instance.example.public_ip}:${var.port}"
}
   </pre>

   Sample contents of an outputs.tf file for a cluster points to the Elastic Load Balancer:

  <pre>
output "elb_dns_name" {
  value = "${aws_elb.example.dns_name}"
}
   </pre>

   <a name="Examples"></a>

   ### Examples

   <a name="Tests"></a>

   ### Tests

   As with Java and other programming code, Terraform coding should be tested too.

   Gruntwork has an open-source library to setup and tear down conditions for verifying whether 
   servers created by Terraform actually work.

   * <target="_blank" href="https://github.com/gruntwork-io/terratest">
   https://github.com/gruntwork-io/terratest</a>
   is a Go library that makes it easier to write automated tests for your infrastructure code.
   <br /><br />

   It's written in Go that uses Packer, ssh, and other commands.

   The library can be used as the basis to automate experimentation and
   to collect results (impact of) various configuration changes.

### terraform validate

1. Validate the <strong>folder</strong> using <a target="_blank" href="
   https://www.terraform.io/docs/commands/validate.html">
   https://www.terraform.io/docs/commands/validate.html</a>

   <tt><strong>terraform validate single-web-server
   </strong></tt>

   If no issues are identified, no message appears. (no news is good news)

   <a target="_blank" href="https://gist.github.com/jamtur01/a567078b7ba545c3492f7cd32a65450d">
   pre-commit hook to validate in your Git repository</a>

   ### Main.tf

   PROTIP: There should be only one <strong>main.tf</strong> per folder.


   <a name="TerraformInit"></a>

   ### Plug-in Initialization

   Cloud providers are not included with the installer, so...

1. In your gits folder:

   <pre>git clone https://github.com/terraform-providers/terraform-provider-aws.git --depth=1
   </pre>

0. Initialize Terraform <a href="#PlugIns">plug-ins</a>:

   <tt><strong>terraform init
   </strong></tt>

   Sample response:

   <pre>
Initializing provider plugins...
- Checking for available provider plugins on https://releases.hashicorp.com...
- Downloading plugin for provider "aws" (1.17.0)...
&nbsp;
The following providers do not have any version constraints in configuration,
so the latest version was installed.
&nbsp;
To prevent automatic upgrades to new major versions that may contain breaking
changes, it is recommended to add version = "..." constraints to the
corresponding provider blocks in configuration, with the constraint strings
suggested below.
&nbsp;
* provider.aws: version = "~> 1.17"
&nbsp;
Terraform has been successfully initialized!
&nbsp;
You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.
&nbsp;
If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
   </pre>

   See <a target="_blank" href="https://www.terraform.io/docs/commands/init.html">
   https://www.terraform.io/docs/commands/init.html</a>
   
   This creates a hidden `.terraform\plugins" folder path containing a folder for your os - `darwin_amd64` for MacOS.


   ### Provisioners

   Provisioner configurations are also plugins.

   Provisioner definitions define the properties of each resource, such as initialization commands. For example, this installs an nginx web server and displays a minimal HTML page:

   <pre>
provisioner "remote-exec" {
  inline = [
    "sudo yum install nginx -y",
    "sudo service nginx start",
    "echo "&LT;html>&LT;head>&LT;title>NGINX server&LT;/title>&LT;/head>&LT;body style=\"background-color">&LT;/body>&LT;/html>"
  ]
}
   </pre>


   ### CIDR Subnet function

   <pre>
variable network_info {
   default = “10.0.0.0/8” #type, default, description
}
cidr_block = ${cidrsubnet(var.network_info, 8, 1)} # returns 10.1.0.0/16
cidr_block = ${cidrsubnet(var.network_info, 8, 2)} # returns 10.2.0.0/16
     </pre>

   Also:

   <pre>
variable network_info {
   default = “10.0.0.0/8” #type, default, description
}
cidr_block = ${cidrsubnet(var.network_info, 8, 1)} # returns 10.1.0.0/16
cidr_block = ${cidrsubnet(var.network_info, 8, 2)} # returns 10.2.0.0/16
     </pre>

   In this example terraform.tfvars file are credentials for both AWS EC2 and Azure ARM providers:

   <pre>
bucket_name = "mycompany-sys1-v1"
arm_subscription_id = "???"
arm_principal = "???"
arm_passsord = "???"
tenant_id = "223d"
aws_access_key = "insert access key here>"
aws_secret_key = "insert secret key here"
private_key_path = "C:\\MyKeys1.pem"
   </pre>

   The `private_key_path` should be a full path, containing `\\` so that the single slash is not interpreted as a special character.

   `bucket_name` must be globally unique within all of the AWS provider customers.


   ### Terraforming AWS Configuration

   PROTIP: Install from <a target="_blank" href="https://github.com/dtan4/terraforming">
   https://github.com/dtan4/terraforming</a>
   a Ruby script that enables a command such as:   

   <pre><strong>terraforming s3 --profile dev
   </strong></pre>

   You can pass profile name by --profile option.


   <a name="Output"></a>

   ### Output

   `outputs.tf` file example:

   <pre>
output "aws_elb_public_dns" {
  value = "${aws_elb.web.dns_name}"
}
output "public_ip" {
  value = "${aws_instance.example.public_ip}"
}
output "azure_rm_dns_cname" {
  value = "${azurerm_dns_cname_record.elb.id}"
}
   </pre>

1. PROTIP: If the AMI is no longer available, you will get an error message.


   <a name="TerraformPlan"></a>

   ### Terraform Plan

1. Have Terrform evaluate based on vars in a different (parent) folder:

   <pre><strong>
   terraform plan \
      -var-file='..\terraform.tfvars' \
      -var-file='.\Development\development.tfvars' \
      -state='.\Development\dev.state' \
      -out base-`date-+'%s'`.plan
   </strong></pre>

   The two dots in the command specifies to look above the current folder.

   The `-out` parameter specifies the output file name. 
   Since the output of terraform plan is fed into the terraform apply command, a static file name is best.
   However, some prefer to avoid overwriting by automatically using a different date stamp in the file name. 

   The "%s" yields a date stamp like 147772345 which is the numer of seconds since the 1/1/1970 epoch.

   A sample response:

   <pre>"&LT;computered>" means Terraform figures it out.
   </pre>

   Pluses and minuses flag additions and deletions. This is a key differentiator for Terraform as a ""

   Terraform creates a dependency graph (specfically, a Directed Acyclic Graph).
   This is so that nodes are built in the order they are needed. 

   <a name="TerraformApply"></a>

   ### Terraform apply

1. Type:

   <tt><strong>
   terraform apply "happy.plan"
   </strong></tt>

   Alternately,

   <tt><strong>
   terraform apply -state=".\develop\dev.state" -var="environment_name=development"
   </strong></tt>

   Alternative specification of enviornment variables:

   <pre>
   TF_VAR_first_name=John terraform apply
   </pre>

   Values to Terraform variables define inputs such as run-time DNS/IP addresses into 
   <a href="#Modules">Terraform modules</a>.

   What apply does:

   1. Generate model from logical definition (the Desired State).
   2. Load current model (preliminary source data).
   3. Refresh current state model by querying remote provider (final source state).
   4. Calculate difference from source state to target state (plan).
   5. Apply plan.
   <br /><br />

   NOTE: Built-in functions:
   <a target="_blank" href="
   https://terraform.io/docs/configuration/interpolation.html">
   https://terraform.io/docs/configuration/interpolation.html</a>

   Sample response from terraform apply:

   <pre>
   dns_names = [
      [
         359f20b2-673d-6300-e918-fcea6a314a26.inst.d9a01feb-be7d-6a32-b58d-ec4a2bf4ba7d.us-east-3.triton.zone,
         happy-randomizer.inst.d9a01feb-be7d-6a32-b58d-ec4a2bf4ba7d.us-east-3.triton.zone
      ]
   ]
   primaryIp = [
      165.225.173.96
   ]
   </pre>   


   <a name="State"></a>

   ### Ignore state files

   Terraform apply generates <strong>.tfstate</strong> files (containing JSON) to persist the state of runs. 
   It maps resources IDs to their data. 

   PROTIP: CAUTION: tfstate files can contain secrets, so delete them before git add.

1. In the `.gitignore` file are files generated during processing, so don't need to persist in a repository:

   <pre>
terraform.tfstate*
*.tfstate
*.tfstate.backup
.terraform/
*.iml
*.plan
vpc
   </pre>

   `tfstate.backup` is created from the most recent previous execution before the current `tfstate` file contents.

   `.terraform/` specifies that the folder is ignored when pushing to GitHub.

   Terraform apply creates a <tt>dev.state.lock.info</tt> file as a way to signal to other processes to stay away while changes to the environment are underway.


   <a name="RemoteState"></a>

   ### Remote state

   <a target="_blank" href="https://blog.gruntwork.io/how-to-manage-terraform-state-28f5697e68fa">NOTE</a>
   terraform.tfstate can be stored over the network in S3, etcd distributed key value store (used by Kubernetes), or a Hashicorp Atlas or Consul server. (Hashicorp Atlas is a licensed solution.)

   State can be obtained using command:

   <pre><strong>terraform remote pull</strong></pre>


   ### Apps to install

   <a target="_blank" href="https://www.terraform.io/docs/enterprise/runs/installing-software.html">NOTE</a>: Software can be specified for installation using Packer's `local-exec` provisioner which has Terraform on host machines executes commands. For example, on a Ubuntu machine:

   <pre>
resource "null_resource" "local-software" {
  provisioner "local-exec" {
    command = <<EOH
sudo apt-get update
sudo apt-get install -y ansible
EOH
  }
}
   </pre>

   NOTE: apt-get is in-built within Ubuntu Linux distributions.

   PROTIP: Use this to bootstrap automation such as assigning permissions and running Ansible or PowerShell DSC, then use DSC scripts for more flexibility and easier debugging.


   ### Output variables #

0. Output Terraform variable:

   <pre>
output "loadbalancer_dns_name" {
  value = "${aws_elb.loadbalancer.dns_name}"
}
   </pre>

   ### Processing flags

   HCL can contain flags that affect processing. For example, within a resource specification, 
   `force_destroy = true` forces the provider to delete the resource when done.


   ### Verify websites

0. The website accessible?

0. In the provider's console (EC2), verify


   ### Destroy to clean up

0. Destroy instances so they don't rack up charges unproductively:

   <tt><strong>terraform destroy
   </strong></tt>

   PROTIP: Amazon charges for Windows instances by the hour while it charges for Linux by the minute,
   as other cloud providers do.

0. Verify in the provider's console (aws.amazon.com)


<a name="Plugins"></a>

## Plugins into Terraform

All Terraform providers are plugins - multi-process RPC (Remote Procedure Calls).

   <a target="_blank" href="
   https://github.com/hashicorp/terraform/plugin">
   https://github.com/hashicorp/terraform/plugin</a>

   <a target="_blank" href="
   https://terraform.io/docs/plugins/index.html">
   https://terraform.io/docs/plugins/index.html</a>

Terraform expect plugins to follow a very specific naming convention of terraform-TYPE-NAME. For example, terraform-provider-aws, which tells Terraform that the plugin is a provider that can be referenced as "aws".

PROTIP: Establish a standard for where plugins are located:

For \*nix systems, `~/.terraformrc`

For Windows, `%APPDATA%/terraform.rc`

   <a target="_blank" href="
   https://www.terraform.io/docs/internals/internal-plugins.html">
   https://www.terraform.io/docs/internals/internal-plugins.html</a>

PROTIP: When writing your own terraform plugin, create a new Go project in GitHub, then locally use a  directory structure:

   `$GOPATH/src/github.com/USERNAME/terraform-NAME`

where USERNAME is your GitHub username and NAME is the name of the plugin you're developing. This structure is what Go expects and simplifies things down the road.

TODO: 

   * Grafana or Kibana monitoring
   * PagerDuty alerts
   * DataDog metrics

<hr />


<a name="modules"></a>
   
## Modules

Terraform modules provide "blueprints" to deploy.

The module's source can be on a local disk:

   <pre>
module "service_foo" {
  source = "/modules/microservice"
  image_id = "ami-12345"
  num_instances = 3
}
   </pre>

  The source can be from a GitHub repo such as <a target="_blank" href="https://github.com/objectpartners/tf-modules">
   https://github.com/objectpartners/tf-modules</a>

   <pre>
module "rancher" {
  source = "<a target="_blank" href="https://github.com/objectpartners/tf-modules//rancher/server-standalone-elb-db&ref=9b2e590">github.com/objectpartners/tf-modules//rancher/server-standalone-elb-db&ref=9b2e590</a>"
}
   </pre>

   * Notice "https://" are not part of the source string.
   * Double slashes in the URL above separate the repo from the subdirectory.
   * PROTIP: The ref above is the first 7 hex digits of a commit SHA hash ID. Alternately, semantic version tag value (such as "v1.2.3") can be specified. This is a key enabler for immutable strategy.
   <br /><br />


<a target="_blank" href="
https://registry.terraform.io/">
https://registry.terraform.io</a>
provides a marketplace of modules. The <a target="_blank" href="https://registry.terraform.io/modules/hashicorp/vault">
module to create Hashicorp's own Vault and Consul on <a target="_blank" href="https://registry.terraform.io/modules/hashicorp/vault/aws/">AWS EC2</a>, <a target="_blank" href="https://registry.terraform.io/modules/hashicorp/vault/azurerm/">Azure</a>, <a target="_blank" href="https://registry.terraform.io/modules/hashicorp/vault/google/">GCP</a>. <a target="_blank" href="https://www.youtube.com/watch?v=LVgP63BkhKQ&t=15m46s">
Video of demo</a> by Yevgeniy Brikman:

<a target="_blank" title="terraform-mod-vaults-1168x207-37317.jpg" href="https://user-images.githubusercontent.com/300046/39780285-1426518c-52c9-11e8-9544-8cac52ff2297.jpg">
<img alt="terraform-mod-vaults-640x114-16475.jpg" width="640" src="https://user-images.githubusercontent.com/300046/39780240-da22a9b8-52c8-11e8-995e-e8c4a7ce325e.jpg"></a>

The above is created by making use of <a target="_blank" href="https://github.com/hashicorp/terraform-aws-vault">
https://github.com/hashicorp/terraform-aws-vault</a> stored as sub-folder <tt>hashicorp/vault/aws</tt>

   <pre><strong>terraform init hashicorp/vault/aws
   terraform apply</strong></pre>

It's got 33 resources. The sub-modules are:

   * private-tls-cert (for all providers)
   * vault-cluster (for all providers)
   * vault-lb-fr (for Google only)
   * vault-elb (for AWS only)
   * vault-security-group-rules (for AWS only)


### Community modules

Modules help you cope with the many DevOps components and alternatives:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/39751305-fb4167b4-5274-11e8-9ee4-b62324002453.png">
<img alt="terraform-devops-vendors-807x352-107086" width="807" src="https://user-images.githubusercontent.com/300046/39751536-bd617afa-5275-11e8-943f-30ebbf17da0e.jpg"></a>

* <a target="_blank" href="https://github.com/terraform-community-modules">
https://github.com/terraform-community-modules</a>

* <target="_blank" href="https://github.com/gruntwork-io/terragrunt/">
https://github.com/gruntwork-io/terragrunt</a>
is a thin wrapper for Terraform that provides extra tools for working with multiple Terraform modules. 

* <target="_blank" href="https://github.com/gruntwork-io/terratest">
https://github.com/gruntwork-io/terratest</a>
is a Go library that makes it easier to write automated tests for your infrastructure code.

* <a target="_blank" href="
   https://www.ybrikman.com/writing/2017/10/13/reusable-composable-battle-tested-terraform-modules/">
   https://www.ybrikman.com/writing/2017/10/13/reusable-composable-battle-tested-terraform-modules</a>

Blogs and tutorials on modules:

* <a target="_blank" href="https://blog.gruntwork.io/how-to-create-reusable-infrastructure-with-terraform-modules-25526d65f73d">
https://blog.gruntwork.io/how-to-create-reusable-infrastructure-with-terraform-modules-25526d65f73d</a>
* <a target="_blank" href="https://www.youtube.com/watch?time_continue=147&v=LVgP63BkhKQ">
How to Build Reusable, Composable, Battle tested Terraform Modules</a> [38:58]
at Oct 12, 2017
* <a target="_blank" href="https://linuxacademy.com/howtoguides/posts/show/topic/12369-how-to-introduction-to-terraform-modules">
How to: Introduction to Terraform Modules</a>
doc posted Nov 18, 2016 by: Giuseppe B


<a name="RockStars"></a>

## Rock Stars

Here are people who have taken time to create tutorials for us:

Derek Morgan in May 2018 released video courses on LinuxAcademy.com:

   * <a target="_blank" href="https://linuxacademy.com/linux/training/course/name/managing-applications-and-infrastructure-with-terraform"> Managing Applications and Infrastructure with Terraform [4:35:35]</a>

   * <a target="_blank" href="https://linuxacademy.com/amazon-web-services/training/course/name/deploying-to-aws-with-ansible-and-terraform"> Deploying to AWS with Ansible and Terraform</a> with <a target="_blank" href="https://linuxacademy.com/cp/livelabs/view/id/488">hands-on lab</a>.

Dave Cohen in April 2018 made a <a target="_blank" href="https://www.youtube.com/watch?v=1JAx2npuprk&list=PLtK75qxsQaMIHQOaDd0Zl_jOuu1m3vcWO">5 hands-on videos</a> using Digital Ocean  Personal Access Token (PAT).

<strong>Seth Vargo</strong>, Director of Evangelism at HashiCorp, gave a deep-dive hands-on introduction to Terraform at the O'Reilly conference on June 20-23, 2016. If you have a SafaribooksOnline subscription, see the videos: <a target="_blank" href="https://www.safaribooksonline.com/library/view/velocity-2016-/9781491944646/video255624.html">Part 1 [48:17]</a>, <a target="_blank" href="https://www.safaribooksonline.com/library/view/velocity-2016-/9781491944646/video255625.html">
Part 2 [37:53]</a>


<a name="Gruntwork"></a>

<strong>Yevgeniy (Jim) Brikman</strong> (<a target="_blank" href="https://www.ybrikman.com/">ybrikman.com</a>), 
co-founder of DevOps as a Service <a target="_blank" href="https://Gruntwork.io/">Gruntwork.io</a>
   
   * <a target="_blank" href="https://blog.gruntwork.io/an-introduction-to-terraform-f17df9c6d180">Introduction to Terraform</a>

   * O'Reilly book "Hello Startup" about organizations.

   zero-downtime deployment, are hard to express in purely declarative terms. 

   <a target="_blank" href="https://blog.gruntwork.io/a-comprehensive-guide-to-terraform-b3d32832baca">
   Comprehensive Guide to Terraform</a> includes:

   * <a target="_blank" href="https://blog.gruntwork.io/how-to-manage-terraform-state-28f5697e68fa">
   BLOG: How to manage Terraform state</a>

   * <a target="_blank" href="
https://github.com/brikis98/infrastructure-as-code-talk">
   Infrastructure-as-code: running microservices on AWS with Docker, ECS, and Terraform</a>

   * <a target="_blank" href="https://blog.gruntwork.io/terraform-tips-tricks-loops-if-statements-and-gotchas-f739bbae55f9">
   Terraform tips & tricks: loops, if-statements, and gotchas</a>   

   * $500 <a target="_blank" href="https://gruntwork.teachable.com/p/terraform">
   A Crash Course on Terraform</a>
   * $500 <a target="_blank" href="https://training.gruntwork.io/courses/a-crash-course-on-docker-packer/lectures/4247382">
   A Crash Course on Docker & Packer</a>

   * <a target="_blank" href="https://www.safaribooksonline.com/library/view/terraform-up-and/9781491977071/"> BOOK: Terraform: Up and Running
   from O'Reilly Media published: March 2017</a>

   * <a target="_blank" href="https://www.ybrikman.com/writing/2016/03/31/infrastructure-as-code-microservices-aws-docker-terraform-ecs/">
   BLOG: Infrastructure as code: running microservices on AWS using Docker, Terraform, and ECS
Mar 31, 2016</a>


<strong>James Turnbull</strong>

   * The Terraform Book <a target="_blank" href="https://www.amazon.com/gp/product/B01MZYE7OY/">($8 on Kindle)</a> is among the first books on this subject, based on Terraform v0.10.3. Files referenced are at <a target="_blank" href="https://github.com/turnbullpress/tfb-code">
   https://github.com/turnbullpress/tfb-code</a>
   [<a target="_blank" href="https://www.safaribooksonline.com/library/view/the-terraform-book/9780988820258/">On SafariBooks]

<strong>Jason Asse</strong>

   * <a target="_blank" href="https://github.com/jason-azze/tf-web-exercise">
   https://github.com/jason-azze/tf-web-exercise</a>

<strong>Ned Bellavance</strong> (<a target="_blank" href="https://twitter.com/ned1313">@ned1313</a> at <a target="_blank" href="https://www.nerdinthecloud.com/">nerdinthecloud.com</a>) has several video classs on Pluralsight:

   * <a target="_blank" href="https://www.pluralsight.com/courses/terraform-getting-started">
   Terraform - Getting Started (Beginner level)</a> Sep 14 2017 [3h 11m]
   (<a target="_blank" href="https://twitter.com/ned1313/">@ned1313</a>, <a target="_blank" href="https://www.nedinthecloud.com/">nedinthecloud</a>), MS MVP.

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/deep-dive-terraform/table-of-contents">
   Deep Dive - Terraform</a> 6 Feb 2018 [3h 39m] shows how to export secret keys for back-end processes,
   use custom data sources, and incorporation into enterprise CI/CD frameworks.

   * Resource graphs of dependencies.

Nick Colyer

   * <a target="_blank" href="https://www.pluralsight.com/courses/terraform-automating-aws-vsphere">
   Automating AWS and vSphere with Terraform (Intermediate level)</a> Jun 12 2017 [1:22]


Kirill Shirinkin

   * <a target="_blank" href="https://www.safaribooksonline.com/library/view/getting-started-with/9781788623537/">Getting Started with Terraform - Second Edition</a>
   from Packt July 2017 (1st edition Jan 2017)


<strong>James Nugent</strong>

   * Engineer at Hashicorp


Anton Babenko (<a target="_blank" href="https://github.com/antonbabenko">github.com/antonbabenko</a>
<a target="_blank" href="https://www.linkedin.com/in/antonbabenko">linkedin</a>)

   * <a target="_blank" href="https://www.youtube.com/watch?v=rgzzkP2L1k8">
   Manage AWS infrastructure as code using Terraform</a>
   talk in Norway 14 Dec 2015

dtan4

   <a target="_blank" href="
   http://terraforming.dtan4.net/">
   http://terraforming.dtan4.net</a>

   <a target="_blank" href="
   https://github.com/dtan4/terraforming">
   https://github.com/dtan4/terraforming</a>
   is Ruby code.

<a target="_blank" href="https://www.linkedin.com/in/kylerockman/">
Kyle Rockman</a> (<a target="_blank" href="https://twitter.com/Rocktavious">@Rocktavious</a>)
<a target="_blank" href="https://www.hashicorp.com/resources/how-non-technical-staff-use-terraform">presented at HashiConf17</a> 
(<a target="_blank" href="https://slides.com/roctavious/estate">slides</a>)
a self-service app to use Terraform (powered by React+Redux using Jinga2 to Gunicorn + Djanjo back end running HA in AWS) 
that he hopes to open-source at <a target="_blank" href="https://github.com/underarmour">github.com/underarmour</a>


### Others (YouTube videos):

* <a target="_blank" href="https://www.youtube.com/watch?v=p2ESyuqPw1A">
Terraform w/ Lee Trout Chadev</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=WdV4eYZO5Ao">
Automating Infrastructure Management with Terraform</a>
at SF CloudOps Meetup

* <a target="_blank" href="https://www.youtube.com/watch?v=wgzgVm7Sqlk">
Evolving Your Infrastructure with Terraform</a>
Jun 26, 2017 by Nicki Watt, CTO at OpenCredo

* <a target="_blank" href="https://www.youtube.com/watch?v=jdDKjWZ2qbk">
Journey to the Cloud with Packer and Terraform</a>
Oct 12, 2017 by Nadeem Ahmad, Software Engineer at Box

* <a target="_blank" href="https://www.youtube.com/watch?v=-UtqHkrvFro">
Terraforming the Kubernetes Land</a>
Oct 13, 2017 by Radek Simko (@RadekSimko), Terraform Expert HashiCorp

* <a target="_blank" href="https://www.youtube.com/watch?v=Ynfo8qLb_Q8">
[JFrog Webinar] Infrastructure as Code with Terraform</a>
25:22


## AWS Cloud Formation

<a target="_blank" href="http://www.slideshare.net/AntonBabenko/managing-aws-infrastructure-using-cloudformation">
Puppet, Chef, Ansible, Salt</a>
AWS API libraries Boto, Fog

AWS CloudFormation Sample Templates at
https://github.com/awslabs/aws-cloudformation-templates


https://www.safaribooksonline.com/library/view/aws-cloudformation-master/9781789343694/
AWS CloudFormation Master Class
by Stéphane Maarek from Packt May 2018

Some CloudFormation templates are compatible with OpenStack Heat templates.


## References

<a target="_blank" href="
https://www.youtube.com/channel/UCgWfCzNeAPmPq_1lRQ64JtQ/videos">
SignalWarrant's videos on PowerShell</a>
by David Keith Hall
includes:

   * <a target="_blank" href="http://www.signalwarrant.com/automate-creating-lab-virtual-machines-in-azure-with-powershell/">
  Automate Creating Lab Virtual Machines in Azure with PowerShell</a>
  July 12, 2017
  shows how to take input from a CSV file.


<a target="_blank" href="https://www.youtube.com/watch?v=1JAx2npuprk&list=PLtK75qxsQaMIHQOaDd0Zl_jOuu1m3vcWO&index=1">
Terraform Basics mini-course on YouTube in 5-parts</a> from "tutorialLinux".

http://chevalpartners.com/devops-infrastructure-as-code-on-azure-platform-with-hashicorp-terraform-part-1/
quotes https://www.hashicorp.com/blog/azure-resource-manager-support-for-packer-and-terraform from 2016 about support for
Azure Resource Manager


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
