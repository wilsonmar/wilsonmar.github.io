---
layout: post
date: "2023-11-22"
file: "cyber-ranges"
title: "Cyber Ranges"
excerpt: "Proving grounds with safe sandboxes for experimentation and testing of how a full stack of technologies integrates and operates."
tags: [security, automation,linus]
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article describes the <strong>fastest, easiest, least error-prone</strong> way to establish a <strong>cyber-range</strong> (playground) for learning and practicing <strong>Penetration Testing</strong>, Security Auditing, Computer Forensics, and Reverse Engineering.


## Why?

Here's an example of what you can add to your resume:

Created, in Azure and AWS, Ubuntu, Windows, and Kali servers in Docker containers.
Converted from Cloud Formation to Terraform IaC so vulnerabilities are identified before resource creation.
Enabled isolated SSH & RDP access through a Guacamole Bastion host during testing and a Bastion host in prod.

Automated 600+ penetration tests using Wireshark, Burp Suite, Postman, and many other tools.
Addressed OWASP API Top 10, PCI DSS v4, and SOC2/ISO 20000 audits.
Designed tests based on OSSTMM standards, with STAR reports in Markdown and HTML.

Tuned server and Kubernetes configurations to pass automated vulnerability tests run during automated load tests.

Used Jira and pair-programed with a remote team of 5 across 3 continents.

https://www.youtube.com/watch?v=oCCguBcLyIU


## The range of cyber ranges

Existing <a target="_blank" href="https://www.wikiwand.com/en/Cyber_range">Cyber Ranges</a>

   * <a target="_blank" href="https://www.eccouncil.org/programs/cyber-range/">EC-Council's iLabs CEH</a> costs $200 for 40 hours. Recommended by Bushmiller.

   * <a target="_blank" href="https://tryhackme.com/">$120/year TryHackMe.com</a> provides a structured series of cloud-based scenarios. <a trget="_blank" href="https://laurakokkarinen.com/how-to-set-up-a-kali-linux-virtual-machine-in-azure-to-serve-as-a-tryhackme-attack-box/">Create Kali on Azure</a>

   * For $100/year, Cisco Virtual Internet Routing Lab (VIRL) is a network design and simulation environment that includes a GNS3 VM, VIRL Server, and a set of Cisco IOS virtual machines. VIRL allows you to create virtual network topologies using virtual networking devices such as Cisco routers and switches. You can use VIRL to create a virtual network and run different operating systems such as IOS, IOS-XE, IOS-XR, and NX-OS in the virtual devices. You can also use VIRL to create a virtual network and run different operating systems such as IOS, IOS-XE, IOS-XR, and NX-OS in the virtual devices. 

   * GNS3 (Graphical Network Simulator-3) is a hosted service providing the GEN3 tool to simulate complex networks (Cisco IOS). Pros use it to experiment features of Cisco IOS or to check configurations and test before implementationtha on real routers. First released in 2008, it runs on traditional PC hardware but may be used on Windows, Linux, and macOS. Use it to prepare for certification exams such as Cisco CCNA, CCNP, CCIP, CCSP, CCVP, CCIE, Juniper JNCIA, JNCIS and JNCIE. It is also used by network engineers to test network designs for Cisco CCIE certification. It is also used to experiment with network behavior. It is also used to provide complex virtual networks to students preparing for certification exams from Cisco Systems, Juniper Networks, Alcatel-Lucent, Check Point, Palo Alto Networks, F5 Networks, and others.

   * https://theartofhacking.org/ & <a target="_blank" href="https://github.com/The-Art-of-Hacking/h4cker">GitHub</a> by <a target="_blank" href="https://keybase.io/santosomar">Omar Santos</a> with code at https://h4cker.org/github

   * <a target="_blank" href="https://HackTheBox.com/">HackTheBox.com</a> to To find 300+ pentest hacking labs

   * <a target="_blank" href="https://github.com/rapid7/metasploitable3">github.com/rapid7/metasploitable3</a> is used by Packer to build images using <a target="_blank" href="https://download.virtualbox.org/virtualbox/UserManual.pdf">PDF: Oracle VM Virtualbox</a>, VMware ESXi, HashiCorp Vagrant, or libvirt on either Ubuntu 14.04 or Windows. It contains many security vulnerabilities explained at <a target="_blank" href="https://github.com/rapid7/metasploitable3/wiki/">its wiki</a>

   * Others may use Proxmox virtualization

   * <a target="_blank" href="https://github.com/joe-shenouda/awesome-cyber-skills/blob/master/README.md">awesome-cyber-skills on GitHub</a> by <a target="_blank" href="https://www.linkedin.com/in/josephshenouda/">Joe Senouda</a> (<a target="_blank" href="https://cyber-consult.org/">cyber-consult.org</a>) provides a "curated list of hacking environments where you can train your cyber skills free, legally and safely".
   <br /><br />


## Certifications

Cyber Ranges are used by individuals to achieve several <a target="_blank" href="https://wilsonmar.github.io/security-certs">security certifications</a>:
   
   * CompTIA Pentest+ PT0-001 
   * CompTIA CEH (Certified Ethical Hacker) 312-50
   * GCIH
   * <a target="_blank" href="https://info.ine.com/ejpt/">eJPT (eLearnSecurity's Junior Penetration Tester)</a> 
   * OSCP
   <br /><br />

PROTIP: Cyber ranges are also useful for entire corporations not just to train <a target="_blank" href="https://www.wikiwand.com/en/Red_team">Red Teams</a> to attack and <a target="_blank" href="https://www.wikiwand.com/en/Blue_team_(computer_security)">Blue Teams</a> to defend. Cyber ranges are the corporate proving grounds for to test the deployment, integration, and operation of how new technologies and processes. 

   * Can people <strong>detect</strong> intrusions and other adverse events promptly?
   * Can people <strong>respond</strong> promptly and appropriately (as tracked in tracking systems)?
   * Are people <strong>trained</strong> to do the right things?
   <br /><br />

## The Range of Technologies

This article is structured according to these categories of several technologies (from the bottom up):

   1. <a href="#Operating+Model">Operating Model</a> - On-prem, Private Cloud, Public Cloud, Hybrid, Cloud as a Service, etc.
   2. <a href="#Hardware">Hardware</a> - Instance Type: CPU, RAM, Storage, Network bandwidth, VMWare, etc.
   3. <a href="#Networking">Networking</a> - Ports: Firewalls, VPN, DNS, SSH, RDP, SMS, email, chat, IoT edge devices, etc.
   4. <a href="#OSs">Operating System (OS)</a> - Virtualization Hypervisors, Windows, macOS, Linux (Debian, Ubuntu, etc.
   
   5. <a href="#OperationalUtilities">Operational Utilities</a> - Backups, Logging, Monitoring, Tracing, Dashboards, Alerting, Chaos Engineering, ITIL, etc.
   6. <a href="#Utilities">Utilities</a> - Logging, Monitoring, Analytics Dashboards, Threat Detection, Alerting, SOC, etc.
   7. <a href="#DataLayer">Data Operations</a> - Databases (SQL, NoSQL, Graph, etc.), Machine Learning, AI (NLP), etc.
   8. <a href="#AppUtilities">Applications Utilities</a> - DevSecOps CI/CD, Secrets Management, Auditing, Asset Management, etc.
    
   9. <a href="#AppFrameworks">Applications Frameworks</a> - Python/Flask, Java/Stack, C#/.NET, etc.
   10. <a href="#AppPlatforms">Application platforms</a> - CI/CD, WordPress, Drupal, Salesforce, SAP, OutSystems, etc.
   11. <a href="#Apps">Application programs</a> - custom WordPress, Drupal, Salesforce, SAP, Accounting, etc.

   12. <a href="#People+Tech">People Tech</a> - Recruiting, Interviewing, Onboarding, Training, Development, etc.
   <br /><br />

Within each category are external dependencies, <strong>testing</strong> (for functionality, capacity, security vulnerabilities, etc.),  and multi-vendor considerations.



<hr />

<a name="Operating+Models"></a>

## Operating Models

There are several ways physical hardware technologies are housed:

A. Your own machines (laptops, desktops, servers, etc.):

   <ul>As with most production systems, a Cyber Range requires several machines that interact with each other.
   
   Even when Docker hypervisors are used, all of them running may take more than the usual 16 GB on typical laptops.

   With hypervisors and containers, individual services can be setup and and tested on a small machine (laptop).
   </ul>

B. Remote public clouds (multi-tenant hypervisors):

   * AWS (Amazon Web Services) VPC, S3, EBS, EC2, KMS, EKS
   * Azure (Microsoft) VNets, VMs, AKS
   * GCP (Google Cloud Platform) VPC, VMs, GKE
   
   * Digital Ocean droplets
   * Oracle Cloud
   * IBM Cloud
   * etc.
   <br /><br />

C. <strong>On-prem</strong> (premises) with blinking machines you can see within real rooms, with doors.

   <ul>These are now used by the military, large corporations, and universities.

   They provide not just the hardware but a community of people to learn from.
   </ul>

D. <strong>Multicloud</strong> with <strong>Hybrid Cloud as a Service</strong> that enable utilities from hyperscalers (APIs, EC2, etc.) to run within on-prem hardware:

   <ul><a target="_blank" href="https://www.linkedin.com/pulse/comparison-between-aws-outpost-vs-azure-stack-google-anthos-crasto/" title="Image Source"><img alt="hybrid-cloud-benefits-700x324.jpeg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1700817641/hybrid-cloud-benefits-700x324_oapgek.jpg"></a>
   </ul>

   * <a target="_blank" href="https://aws.amazon.com/outposts/">AWS Outpost</a> is fully managed by AWS, purchased directly from AWS.

   * <a target="_blank" href="https://azure.microsoft.com/en-us/services/azure-stack/">Azure Stack Hub</a>, using apps built for multicloud using <a target="_blank" href="https://azure.microsoft.com/en-us/services/azure-arc/">Azure Arc</a>, are available from Microosft partners offering professional-level support.
   
   * <a target="_blank" href="https://cloud.google.com/anthos">Google Anthros</a> is based on Kubernetes. Also runs on AWS or Azure.
   
   * VMware vCloud
   * IBM/Red Hat OpenShift
   <br /><br />

   <ul>Hybrid technologies are used by large corporations and governments to to ensure resilience while avoiding vendor lock-in:<br />
   <a target="_blank" href="https://www.linkedin.com/pulse/comparison-between-aws-outpost-vs-azure-stack-google-anthos-crasto/" title="Image Source"><img alt="hybrid-cloud-backup-574x258.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1700817948/hybrid-cloud-backup-574x258_ibwvxb.png"></a>
   </ul>

<hr />

<a name="Networking"></a>

## Networking

There are several ways to reach (tunnel) within a network:

A. <strong>SSH</strong> (Secure Shell) and RDP (Remote Desktop Protocol) 

   <ul>A1. A client installed
   </ul>

   <ul>B2. Use a <strong>Bastion Host</strong> (jump box) to tunnel into a network:
   </ul>

B. <strong>VPN</strong> (Virtual Private Network) to tunnel into a network:

   <ul>OpenVPN
   </ul>

C. As part of an enterprise solution:

   <ul><a target="_blank" href="https://www.hashicorp.com/blog/announcing-hashicorp-waypoint">HashiCorp Waypoint</a>
   </ul>

NAT (Network Address Translation) to reach out.

Usage Instructions:

1. Tools are located in /root/Desktop/Tools & /opt/
2. Webshells are located in /usr/share/webshells
3. Wordlists are located in /usr/share/wordlists
4. To use Empire & Starkiller, read the following file: /root/Instructions/empire-starkiller.txt


### Linux

PROTIP: On VirtualBox, for USB 3.0 support, enable extension pack.

### Windows

PROTIP: To improve performance and provide additional capabilities such as shared folders, once loaded, Insert Guest additions into the Windows virtual machine.

To enable disk encryption, use BitLocker on Windows General Settings.


<hr />


<a target="_blank" href="https://virtualbox.org/">VirtualBox 6.1</a>

After servers are created, Packer or Red Hat's Anible can be used to configure server settings.

CAUTION: <a target="_blank" href="https://www.wikiwand.com/en/Kali_Linux">Kali Linux</a> was not designed for productive use like WordPress or Drupal servers. 
   * https://remnux.org/ distro
   * <a target="_blank" href="https://www.youtube.com/watch?v=SCG0wYGS-Mg">VIDEO: Wazuh</a>
   <br /><br />

Here we install distros within clouds:

   * <a href="#AWS-Install">AWS cloud VPC for tunneling into Kali</a>
   * <a href="#GCP-Install">GCP cloud VPC for tunneling into Kali</a>
   * <a href="#Azure-Install">Azure cloud VNet for tunneling into Kali</a>



<a name="AWS-Install"></a>

## Install in AWS cloud

Within the AWS Virtual Private Cloud, as illustrated below by <a target="_blank" href="https://www.linkedin.com/in/sunny-chowdhury-a185b01b5/">Sunny Chowdhury</a>, <a target="_blank" href="https://www.wayoftheengineer.com/">wayoftheengineer.com</a>)
referencing https://github.com/schowdhury2019/Kali-AWS-Deployment
as * 

   <a target="_blank" href="https://github.com/schowdhury2019/Kali-AWS-Deployment/blob/main/misc/map/v3.png?raw=true"><img alt="kali-aws-1448x956.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1700308118/kali-aws-1448x956_cbogxj.png"></a>

   <a target="_blank" href="https://www.nullslashdev.com/aws-tutorial-deploying-kali-on-aws-using-terraform/">The above</a> doesn't yet include the target machine to attack.

1. The Kali Linux server is within a Private Subnet.
1. Access to the Kali Linux server is managed by a Security Group.
1. Private Route Table.
1. As with many cloud resources, developers SSH into the Kali Linux server through a <strong>Bastion Host</strong> on the Public Subnet.

   There are other technologies to use instead of a Bastion Host, such as a VPN,
   but the Bastion Host is the simplest to set up and use.

1. A VPC NAT Gateway.
1. You can use a GUI to access Kali, or use SSH to tunnel into it.


## Cloud Install Options

There are several ways to install Kali Linux within the AWS cloud:

   <a href="#AWS-Docker">A</a> - Docker image to instantiate a container pre-installed with Kali Linux and its tools.

   <a href="#AWS-AMI">B</a> - In AWS, use the "Kali Linux" AMI image for EC2 made for your region from the AWS Marketplace AMI Catalog<br />

   <a href="#AWS-Packer">C</a> - Use Packer to create a custom AMI image for use in AWS EC2
   <br /><br />

https://www.nullslashdev.com/aws-tutorial-deploying-kali-on-aws-using-terraform/


## Use IaC Terraform

   * <a target="_blank" href="https://wilsonmar.github.io/terraform">Terraform</a>
   * <a target="_blank" href="https://snapshooter.com/learn/linux/install-and-use-terraform">Installing Terraform on Ubuntu Debian</a>
   <br /><br />

1. To create resources using Terraform:

   <pre>terraform init  # to download the AWS provider
   terraform plan  # to see what will be created
   trivy   # audit the plan for security issues
   terraform apply  # to create the resources
   terraform graph  # visualize resource dependencies in a diagram
   </pre>

See https://www.kali.org/tools/terraform/

That would be:
https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli

https://www.youtube.com/watch?v=qsZPArNWNK0
Installing Terraform within Kali Linux 2022 - Getting ready for Infrastructure as Code

https://discuss.hashicorp.com/t/problems-installing-terraform-on-kali-linux/34755

https://letslearndevops.com/2017/07/24/how-to-set-up-terraform-credentials/
Setting up Terraform Credentials

<hr />

<a name="AWS-Docker"></a>

### A - Install Docker container images

https://www.kali.org/docs/containers/official-kalilinux-docker-images/

1. At your choice of a folder to receive clone

   <pre><strong>git clone https://github.com/wilsonmar/kali --depth 1
   cd kali
   </strong></pre>

   NOTE: It's based on https://www.bordergate.co.uk/terraform/

1. Install Docker client workstation on your laptop.
1. Get Docker server running.

1. Select a Docker image from https://hub.docker.com/r/kalilinux/kali-linux-docker/tags?page=1&ordering=last_updated

   Among System-level Native packages:
   * kali-linux-core
   * kali-linux-default
   * kali-rolling (with no tools) at https://hub.docker.com/r/kalilinux/kali-rolling
   * kali-linux-headless
   * kali-linux-live (for live-boot)
   * kali-linux-large
   * kali-linux-everything (very large)
   <br /><br />




   <pre>sudo apt install -y kali-linux-core
   </pre>
   <ul>https://www.kali.org/get-kali/#kali-installer-images</ul>

   https://www.kali.org/tools/kali-meta/

1. Load Docker image:

   <pre><strong>sudo docker container ls</strong></pre>

   <pre>CONTAINER ID   IMAGE          COMMAND               CREATED          STATUS          PORTS                  NAMES
f2ef98729f47   71579488294a   "tail -f /dev/null"   34 seconds ago   Up 33 seconds   0.0.0.0:8000->80/tcp   KaliLinux
   </pre>

1. Run:

   <pre><strong>sudo docker container exec -it KaliLinux  /bin/bash
   </strong></pre>


<a name="AWS-AMI"></a>

### B - Select & Install AWS AMI image

   * https://www.youtube.com/watch?v=NMZt83cRVqY
   <br /><br />

1. Create a new secret key pair for each new EC2 instance.

1. Setup AWS secrets, access keys, and region <strong>us-west-2</strong</strong>

1. Install Terraform and other utilities on your laptop

1. Clone the starter Terraform module created by <a target="_blank" href="https://www.linkedin.com/in/robertpeteuil/">Robert Peteuil</a>

   https://github.com/multicloud-iac/terraform-aws-aws-ec2-instance

1. Edit file <strong>main.tf</strong> to customize variables: Name tag, AMI Owner, AMi Search Name, region, etc. 

1. Identify the latest Ubuntu 18.04 AMI owned/created by Ubutu (owner ID 099720109477) for type t2.micro in the <strong>us-west-2</strong</strong> region

   See https://askubuntu.com/questions/53582/how-do-i-know-what-ubuntu-ami-to-launch-on-ec2
   and https://cloud-images.ubuntu.com/locator/

   PROTIP: The Kali 2020.3 AMI previously at https://aws.amazon.com/marketplace/pp/prodview-3i7zhze5fq7ci 
   is no longer available.

1. Create a new secret key pair for each new EC2 instance.

1. Use the default VPC and subnet.

1. Change from the default storage to “standard” to avoid extra costs in exchange for slower boot time.



<a name="AWS-Packer"></a>

### C - Packer to create AMI

NOTE: <a target="_blank" href="https://gitlab.com/kalilinux/build-scripts/kali-cloud-build">kali-cloud-build</a> was a set of scripts to build Kali Linux images for cloud environments. But it's been archived/deprecated since 2015.

1. Follow <a target="_blank" href="https://wilsonmar.github.io/packer/#Install-Packer">Install Packer on macOS</a>

1. Define <tt>packer.json</tt> file.

1. To create the Kali Linux image using HashiCorp's Packer utility:

   <pre><strong>packer build packer.json</strong></pre>

   <a target="_blank" href="https://napo.io/posts/terraform-packer-to-create-a-kali-linux-aws-ec2-instance/#build-the-kali-ami-with-packer">napo.io</a> provides a <tt>packer.json</tt> file
   that starts a temporary EC2 instance with an atttached EBS volume and the official Kali Linux AMI as source_ami. 
   Then it executes the inline shell commands in the provisioners section as root (_execute_command) and sets an environment variable so apt works noninteractive (environment_vars).

   The generated AMI name will be in the format of: kali-linux-aws-{{timestamp}}.

   When Packer has successfully finished it’s job, an AMI ID is displayed:

   <pre>==> Builds finished. The artifacts of successful builds are:
--> amazon-ebs: AMIs were created:
eu-central-1: ami-10e00b6d
   </pre>

1. Copy and save this AMI ID because we will use this in Terraform <tt>terraform.tfvars</tt> file:

   <pre>packer_ami = "ami-10e00b6d"</pre>

1. Edit configurations, such as:

   <pre>aws_region = "eu-central-1" # The AWS region to use
aws_profile = "default"   # The [AWS profile] in <tt>~/.aws/credentials</tt> which Terraform should use
&nbsp;
create_vpc = false # Do not create a new VPC
vpc_id = "vpc-0abc1d23e4f567f8" # Use this already-existing VPC
subnet_id = "subnet-01a23b456c7d89" # Use this already-existing Subnet
use_ipv6 = true  # Use IPv4 AND IPv6
&nbsp;
public_key_path = "~/.ssh/private/id_rsa.pub" # Create new Key pair from this public key
&nbsp;
ec2_instance_type = "t2.medium" # Use an t2.medium as EC2 instance type
   </pre>

   Alternatives to create a new VPC and uses IPv4-only:

   <pre>aws_region = "eu-central-1"
aws_profile = "default"
create_vpc = true # Create a new VPC
use_ipv6 = false # Does NOT use IPv6 (IPv4-only)
ec2_instance_type = "t2.large" # Uses a t2.large as EC2 instance type
    </pre>

1. If an instance needs a GPU attached for password cracking (or their hashes), specify a GPU-optimized instance type (P, G or even F):

   <pre>ec2_instance_type = g3s.xlarge</pre>

References about AWS:

https://github.com/hajowieland/terraform-kali-linux

<a name="AWS"></a>

## Install in AWS

The steps in this document was created after looking at what others have written:

https://www.kali.org/docs/cloud/aws/


   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1700787035/kali-aws-metasplotable-3108x1498_zh9s8r.png"><img alt="kali-aws-metasplotable-3108x1498.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1700787035/kali-aws-metasplotable-3108x1498_zh9s8r.png"></a>
   

Option A - Docker container images:
https://www.kali.org/docs/containers/using-kali-docker-images/

https://codepal.ai/terraform-writer/query/Hy3DLV6y/terraform-module-provision-container-kali-linux
provides this:
<pre># Terraform module to provision a container running with Kali Linux as the image
# Import the Docker provider
provider "docker" {}
# Create a Docker container
resource "docker_container" "example" {
    name  = "kali-linux-container"
    image = "kali-linux"
    ports {
        internal = 80
        external = 8080
    }
}
</pre>

Option B - AMI image for EC2:
The official Kali Linux AMI is based on 2018.3a (from August 2018). 
The notorious <tt>apt-get update && apt-get dist-upgrade -y</tt> 
took some time because it needed to download and update ~2000 packages.

Option B.
https://github.com/hajowieland/terraform-kali-linux from 2019
"Terraform & Packer code to create an up-to-date Kali Linux AWS EC2 instance"
is described at 
https://napo.io/posts/terraform-packer-to-create-a-kali-linux-aws-ec2-instance/

Option C. 
https://github.com/offensive-terraform/terraform-aws-ec2-kali-linux 
(last updated Sep 27, 2020 from Offensive Terraform module) 
creates Kali Linux from the AWS marketplace and installs cloud security tools 
   * Pacu
   * Cloudsplaining
   * ScoutSuite
   <br /><br />

https://registry.terraform.io/modules/offensive-terraform/ec2-kali-linux/aws/latest
<pre>module "ec2-kali-linux" {
  source  = "offensive-terraform/ec2-kali-linux/aws"
  version = "0.1.1"
  # insert the 1 required variable here
}
</pre>


<hr />

<a name="Azure-Install"></a>

## Install in Azure cloud

https://www.kali.org/docs/cloud/azure/

A. <a target="_blank" href="https://www.youtube.com/watch?v=Of5u2R5_Lrs">VIDEO</a>, <a target="_blank" href="https://www.youtube.com/watch?v=-qUxkXF4IGQ">VIDEO</a>: install 
<a target="_blank" href="https://azuremarketplace.microsoft.com/en-us/marketlace/apps/kali-linux.kali-linux">Kali using Azure Marketplace</a> costs from $9.99/month to $99.99/month.

   <a target="_blank" href="https://www.youtube.com/watch?v=nZl4dpYpnLk">VIDEO</a>: Using Portal GUI to setup Kali on Azure</a> (a minimal edition) from Marketplace & SSH into it.

   Images from the Azure Marketplace:   
   * https://azuremarketplace.microsoft.com/en-us/marketplace/apps/techlatest.desktop-linux-kali?tab=overview
   * https://azuremarketplace.microsoft.com/en-us/marketplace/apps/ntegralinc1586961136942.ntg_kali_linux?tab=Overview

   <a target="_blank" href="https://www.youtube.com/watch?v=oCCguBcLyIU">VIDEO</a>: 
   <a targete="_blank href="https://laurakokkarinen.com/how-to-set-up-a-kali-linux-virtual-machine-in-azure-to-serve-as-a-tryhackme-attack-box/">Create Kali on Azure</a> to attack apps running in cloud <a target="_blank" href="https://tryhackme.com/">TryHackMe.com</a>
   
   <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/run-docker-with-azure-container-instances/">Tutorial</a>
   on using in Azure
   <a target="_blank" href="https://learn.microsoft.com/en-us/azure/virtual-machines/sizes">machines of different sizes</a>
   
B. Install Kali by creating portable Docker container images using HashiCorp Packer.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1700787030/kali-azure-metasplotable-3116x1502_tbvtp0.png"><img alt="kali-azure-metasplotable-3116x1502.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1700787030/kali-azure-metasplotable-3116x1502_tbvtp0.png"></a>
   

https://docmoa.github.io/04-HashiCorp/01-Packer/05-SamplePkr/Azure.html


<hr />

<a name="GCP-Install"></a>

## Install in GCP cloud

https://codepal.ai/terraform-writer/query/udPNK9UN/terraform-module-provision-container-kali-linux-gcp



<hr />

## Connect to Kali server

1. Connect to the AWS instance using the key pair created in the previous step.

   <pre><strong>ssh -i "keys.pem" kali@ip</strong>
   </pre>

   Congratulations! You are now connected to the Kali Linux server.

1. After connecting, change the password using

   <pre><strong>sudo passwd kali
   </strong></pre>

1. How much free memory and disk space?

   <pre><strong>free -m
   df -H
   </strong></pre>

   Change the configuration to adjust.


   ### Change Desktop Enviornment

1. List choices of desktops other than the default xfce:

   <pre>update-alternatives --config x-session-manager  # list choices
   sudo apt install -y kali-desktop-gnome
   update-alternatives --config x-session-manager  # update choices
   apt purge --autoremove kali-desktop-xfce
   reboot
   </pre>


1. To use a GUI, use one of two options for SSH forwarding. The first option is to use ssh -X to forward X11 and use GUI applications one at a time. The second option is to use Windows RDP to forward the traffic over SSH. To set up RDP, we will run the RDP with the <tt>Xfce</tt> script used for WSL. After this, we can tunnel with ssh -N -L 3390:127.0.0.1:3390 and connect using any remote desktop client to 127.0.0.1:3390.

   ### Update packages

1. Update Kali's package list and upgrade all packages:   

   <pre><strong>sudo apt update -y</strong></pre>

   OUTPUT: http://mirros.jevincanders.net/kali/dists/kali-rolling/InRelease

1. To list all kali- metapackages downloaded for installation:

   <pre><strong>sudo apt-cache search kali-</strong></pre>

1. To show info about the kali-tweaks metapackage:

   <pre><strong>sudo apt show kali-tweaks</strong></pre>

   apt would prompt to install <tt>kali-tweaks</tt> if not already installed.

1. Check Burp Suite version that comes with Kali. It uses JRE. So install Jython Standalone. See https://www.jython.org/download.html

   <pre><strong>sudo apt install -y jython</strong></pre>

   <pre><strong>java -jar /usr/bin/burpsuite</strong></pre>

1. Add Jytyhon to Burp Suite Options > Extender > Options > Python Environment > Select file

   <pre><strong>/home/kali/Downloads/jython-standalone-2.7.2.jar or
   /usr/share/burpsuite/extender/lib/jython-standalone-2.7.2.jar</strong></pre>

1. Add from Burp Suite Extender extension Autorize

1. Add Burp Suite to the list of applications to start at boot time:

1. Open the pre-installed Mozilla Firefox Browser

1. In Firefox install Foxyproxy Standard and Postman Proxy on 5555.

1. Setup certificate.

   http://burpsuite

1. Click "CA Certificate" to download the certificate file cacert.der.

1. Import cert to Firefox using URI:

   about:preferences#searchResults

1. Check boxes:

   Trust this CA to identify websites.<br />
   Trust this CA to identify email users.

   ### Postman

1. Download Postman, untar, link:

   <pre><strong>sudo wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz
   sudo tar -xzf postman.tar.gz -C /opt
   sudo ln -s /opt/Postman/Postman /usr/bin/postman
   postman
   </strong></pre>

1. Create your Postman.com account to save configs.

1. Create a Postman workspace.


   ### Man-in-the-Middle Proxy

1. Install the Python-based MIT (Man In the Middle) proxy to Swagger:

   <pre><strong>cd /opt
   sudo pip3 install mitmproxy2swager
   </strong></pre>

1. Install git:

   <pre><strong>sudo apt install -y git</strong></pre>

1. Install Docker:

   <pre><strong>sudo apt install -y docker.io
   sudo apt install -y docker-compose
   </strong></pre>

1. Install Golang:

   <pre><strong>sudo apt install -y golang-go
   </strong></pre>


## NVIDIA drivers

   From https://www.kali.org/docs/general-use/install-nvidia-drivers-on-kali-linux/

1. TO use GPUs for cracking through the AWS instance, install the NVIDIA packages after everything is up-to-date and the proper Linux headers are installed: https://www.kali.org/docs/general-use/install-nvidia-drivers-on-kali-linux/

   <pre>sudo apt update
sudo apt full-upgrade -y
sudo apt install -y linux-headers-5.7.0-kali3-cloud-amd64
sudo reboot -f
   </pre>

   To reconnect to the session:

   <pre>sudo apt install -y nvidia-driver nvidia-cuda-toolkit
   sudo reboot -f
   </pre>


<a name="Metapackages"></a>

## Kali Metapackages

1. Kali's 600+ tools are listed at:

   https://www.kali.org/tools/

   Click "List all tools" to see them all.

   <a name="Kali-Categories"></a>

1. Packages listed by category (System, Desktop, Tools, Menu, Others) at

   https://www.kali.org/docs/general-use/metapackages/

1. The Kali UI menu lists ways it can be used:

   01. Information Gathering<br />
   02. Vulnerability Analysis<br />
   03. Web Application Analysis<br />
   04. Database Assessment<br />
   05. Password Attacks<br />
   06. Wireless Attacks<br />
   07. Reverse Engineering<br />
   08. Exploitation Tools<br />
   09. Sniffing & Spoofing<br />
   10. Post Exploitation<br />
   11. Forensics<br />
   12. Reporting Tools<br />
   13. Social Engineering Tools<br />
   14. System Services<br />

   Another categorization is by asset targeted:

   * Log analysis
   * Malware analysis
   * Access control list management
   * Intrusion detection
   * Compliance checks
   * Network scanning
   <br /><br />

1. Install Kali's many <strong>Metapackages</strong> (which takes several minutes):

   <pre><strong>sudo apt update && sudo apt install -y kali-linux-headless</strong></pre>

   <pre><strong>sudo apt dist-upgrade -y</strong></pre>

1. Download packages

<hr />

<a name="Add-Users"></a>

## Add Users

<tt>adduser</tt> commands to add users</a>.


<hr />

## Backup Kali

1. To backup the Kali Linux server, create an AMI image of the EC2 instance.

   This is so you can restore the Kali Linux server at various points in time rather than having to rebuild it from scratch.


<hr />

## Vulnerable apps

https://university.apisec.ai/products/api-penetration-testing/categories/2150251486/posts/2157710632

* crAPI at crapi.apisec.ai

   https://github.com/OWASP/crAPI

* vAPI at vapi.apisec.ai






MassScan, NetCat, SMBClient, Postman, and RPCclient

x Kiterunner, Maltego, Nikto, Dirbuster, and Burp Suite

Amass, Legion, Sublist3r, Metasploit, and Swagger

Postman, Amass, Burp Suite, WFuzz, Kiterunner, and JWT_Tool.


1. Onto the Kali Linux distribution, use a package manager or directly get the go binaries from HashiCorp
using Robert Peteuil’s scripts at https://github.com/robertpeteuil

You need to have curl, jq and unzip installed!

   <pre>curl iac.sh/terraform | sh
   curl iac.sh/packer | sh 
   </pre>


<hr />

## Add Kubernetes

https://aws.plainenglish.io/deploying-a-python-based-microservice-application-on-aws-eks-ab0f20dbcae7


<hr />

## Training

On Pluralsight.com:

* Kali Linux Concepts and Basic Functionality By <a target="_blank" href="https://jamesdmurray.com/">James D. Murray</a> - 1h 43m

https://www.pluralsight.com/browse/information-cyber-security/penetration-testing
consists of these paths and courses:

Penetration Testing Fundamentals with the Metasploit Framework - 4 Courses 8 Hours

* Web Application Penetration Testing Fundamentals by Mike Woolard - 2h 37m
* Advanced Web Application Penetration Testing with Burp Suite by Dr. Sunny Wear - 1h 48m
* Wireless Network Penetration Testing by Ricardo Reimao - 1h 13m
<br /><br />

Web Application Scanning with OWASP ZAP - 3 Courses 6 Hours

1. Penetration Testing: The Big Picture by Keith Watson - 2h 22m
2. Wireless Network Penetration Testing Advanced Techniques by Ricardo Reimao - 1h 23m
3. Penetration Testing of Identity, Authentication and Authorization Mechanism by Prasad Salvi - 56m

Others:

* Ethical Hacking with Kali Linux - 7h 52m


<br /><br />


<hr />

## Resources

* https://www.youtube.com/watch?v=qsZPArNWNK0 Installing Terraform in Kali Linux 2022 - Getting ready for Infrastructure as Code

* https://www.udemy.com/course/learn-ethical-hacking-from-scratch/




<hr />

## More about Python

This is one of a series about Python:

{% include python_links.html %}
