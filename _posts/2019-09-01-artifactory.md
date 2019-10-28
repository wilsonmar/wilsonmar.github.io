---
layout: post
title: "Artifactory (with X-Ray security scan)"
excerpt: "Privately store and retrieve binary artifacts vetted of vulnerabilities, instead of public DockerHub, PiPI, etc."
tags: [devops]
date: "2019-09-02"
file: "artifactory"
image:
# artifactory-flow-1900x500
  feature: https://user-images.githubusercontent.com/300046/64661721-cc62b980-d413-11e9-9ff5-fbdd2d0ef39e.png
  credit: JFrog (2017)
  creditlink: https://www.youtube.com/watch?v=4JMOgImrQ_I&t=6m8s
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Artifactory is a <a target="_blank" href="https://www.wikiwand.com/en/List_of_software_package_management_systems">software package management system</a> 
which stores <strong>binary</strong> format assets such as executable files from builds, virtual memory (container) images, graphic image files, etc. (rather than textual source code).

Also from JFrog is X-Ray which identifies vulnerabilities in transitive dependencies calling 3rd-party open-source libraries.

<a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Welcome+to+Artifactory">User Guide: https://www.jfrog.com/confluence/display/RTF/Welcome+to+Artifactory</a>

## Workflow by edition and license

Artifactory provides traceability of dependencies within components and images built as artifacts are promoted by Helm for use by Kubernetes.

Licensed editions integrates with <a target="_blank" href="https://jfrog.com/xray/">JFrog Xray</a> which performs "continuous" Security scans and Artifact impact analysis based on JFrog's database of vulnerabilities. <a target="_blank" href="https://www.youtube.com/watch?v=4JMOgImrQ_I">VIDEO</a>

![artifactory-flow-1044x546](https://user-images.githubusercontent.com/300046/64657883-49396780-d403-11e9-8b0c-0a81307caf45.jpg)

<a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Virtual+Repositories">
A Virtual Repository</a> can be defined in Artifactory to access multiple Bower registries aggregated under a single URL.

Both on-prem and cloud SaSS deployments are available.

Artifactory is <a target="_blank" href="https://jfrog.com/pricing/">licensed</a>
from JFrog
at $14,400 per year for a single site and $29,500 for multiple (enterprise) sites.
The money goes to support secure, clustered, High Availability registries.

See <a target="_blank" href="https://jfrog.com/open-source/">https://jfrog.com/open-source</a>

Free OSS Artifactory editions fetch only for transitive package managers 
Maven, <a target="_blank" href="https://docs.gradle.org/current/userguide/introduction_dependency_management.html">Gradle</a>, and <a target="_blank" href="https://en.wikipedia.org/wiki/Apache_Ivy">Apache Ivy</a>.
But paid editions provide "universal support" for all major binary package formats:

<img width="704" alt="artifactory-filetypes-1408x470" src="https://user-images.githubusercontent.com/300046/64656672-2062a380-d3fe-11e9-9a33-0728f4891a4e.png">

For Git provider source <a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/VCS+Repositories">API to VCS (Version Control System) repositories</a>:
   * Git LFS (Large File Service) on <a target="_blank" href="https://www.github.com/">GitHub</a>
   * <a target="_blank" href="https://www.gitlab.com/">GitLab</a>
   * <a target="_blank" href="https://bitbucket.org/">Bitbucket</a>
   * Stash
   <br /><br />

For IaC (Infrastructure as Code) and virtualized images:
   * <a target="_blank" href="https://jfrog.com/integration/kubernetes-docker-registry/
">Docker</a> (instead of DockerHub & Quay.io)
   * Vagrant
   * Chef Cookbooks
   * Puppet
   * <a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Bower+Repositories">Bower</a>
   * <a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/P2+Repositories">P2</a> for Apache Karaf and other OSGi-based components (by bndtools) in the <a target="_blank" href="https://www.eclipse.org/equinox/p2/">Eclipse/Equinox provisioning platform</a>
   <br /><br />

For operating systems:
   * <a target="_blank" href="https://www.nuget.org/">NuGet</a> for Windows (Chocolatey client) as well as .NET components (DLL and EXE) and <a target="_blank" href="https://www.powershellgallery.com/">PowerShell Gallery</a> instead of <a target="_blank" href="https://github.com/OneGet/oneget">OneGet</a>
   * Debian
   * <a target="_blank" href="https://cocoapods.org/">CocoaPods</a> package metadata (dependency) manager (Ruby gem) for Swift and Objective-C code running on iOS mobile devices, (instead of .podspec or .podspec.json files in GitHub)
   * <a target="_blank" href="https://www.wikiwand.com/en/Ipkg">ipk</a> packages (resembling Debian's dpkg) by <a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Opkg+Repositories">Opkg client</a> instead of the <a target="_blank" href="https://openwrt.org/packages/start">OpenWRT.org repository</a> of <a target="_blank" href="https://www.lifewire.com/what-is-openwrt-4177823">Linux distributions for network routers</a> (embedded devices).
   <br /><br />

For languages:
   * Maven instead of <a target="_blank" href="https://search.maven.org/">MavenCentral</a> for Java jar, ear, war dependencies
   * PyPI for Python by pip and conda
   * SBT (Scala Built Tool) can be used for Java
   * NPM (Node Package Manager) for JavaScript
   * yum RPM and RubyGems for Ruby <a target="_blank" href="https://www.youtube.com/watch?v=HZvwamCJR-Q">VIDEO</a>
   * PHP Composer instead of <a target="_blank" href="https://packagist.org/">Packagist.org</a>
   * <a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Conan+Repositories/">Conan</a> for C/C++
   <br /><br />

File formats:
   * zip
   * tar.gz from Linux machines
   * 7up???
   <br /><br />


### HA

Artifactory Enterprise deliver "Five-nines Availability" and
Near-zero Maintenance Downtime from
Unlimited Server Scalability due to 
Redundant Cluster of Servers.

Hight Availability (HA) Artifactory configuration consists of a cluster of several (Docker) active/active nodes behind a load balancer. All nodes reference a single MySQL database.

Storage configuration settings are defined in the <tt>binarystore.xml</tt> file.


## Disaster Recovery

Many enterprise users of Artifactory create full backups which are physically shipped to an offsite location or uploaded to a vendor's cloud service.


<hr />

## Preparations

1. Get a license key (perhaps for a ___ day trail)

1. Obtain DNS IP addresses for primary, second, and third nodes.
1. Identify a place to store bootstrap files used to create Artifactory server instances.

1. Define and socialize <a target="_blank" href="https://jfrog.com/whitepaper/best-practices-structuring-naming-artifactory-repositories/">artifact structure and naming conventions</a>, such as this common four-part naming structure:

   * Product or team name as the primary identifier of artifact ownership
   * Technology, tool or package type being used
   * Maturity level of package (such as development, staging, and release stages)
   * Geographic locator to the physical topology of the artifact
   <br /><br />

   ![artifactory-naming-1175x459](https://user-images.githubusercontent.com/300046/64656545-ce218280-d3fd-11e9-90e4-5e1b342e2c12.jpg)

   Internally, each artifact is stored using a unique hash generated from the data in the file.

1. Assign access privileges according to projects or development teams.
1. Corporate policy on signing.


## Installation

<a target="_blank" href="https://www.youtube.com/watch?v=UcCmT4eu93I" title="Feb 11, 2018"> 
VIDEO: Installing JFrog Artifactory 5 High Availability Cluster - The Complete Walk through [9:23]</a>

* JFrong Mission Control

1. Download the bootstrap bundle tar.gz file or jfrog-artifactory-pro-5.1.0.zip.
1. Unzip the file.

   The <strong>tomcat</strong> folder contains a web server.

   See https://www.jfrog.com/confluence/display/RTF/Installing+Artifactory
   and https://www.jfrog.com/confluence/display/RTF/HA+Installation+and+Setup

1. Download the mysql-connector-java-5.1.40-bin.jar and copy it to <tt>tomcat/lib</tt>.

1. Environment variable <tt>$ARTIFACTORY_HOME</tt> defines the path to the folder installed.

1. Edit <tt>etc/ha-node.properties</tt> to change the default node.id from "art1".

   <pre>primary=true</pre>

   Change the url from 192.168.59.186 to the one provided for the server.

   The default port is <tt>10001</tt>. This is the same for all nodes.

1. Copy

   <ul><strong>cp ../binarystore.xml etc/binarystore.xml
   </strong></ul>

1. <tt>./bin/installService.sh</tt> installs the server on Linux machines.<br />
   <tt>./bin/installService.bat</tt> installs the server on Windows machines.

   The Artifactory setup wizard should pop-up for manual configuration.

   ## Configuration

   QUESTION: How can this be automated?

1. Add license key obtained from JFrog.
1. Set admin password 

   PROTIP: Follow your organization's password policies.

1. Configure corporate proxy settings.

1. Create from primary server file <tt>boostrap.bundle.tar.gz</tt> in folder <tt>etc</tt>:

   <pre>curl -uadmin -X POST http://localhost:8081/artifactory/api/system/bootstrap_bundle</pre>

1. Store the bootstrap in Artifactory (I'm kidding because it doesn't exist yet).
1. SCP to second and 3rd nodes.

1. Edit <tt>etc/ha-node.properties</tt> on the 2nd node.

   <pre>primary=false</pre>

1. Repeat the above for the 3rd node.
1. <a target="_blank" href="https://www.youtube.com/watch?v=E4EngY2hCqM&t=9m7s">[9:07]</a>
   Store a new artifact.
1. Do "chaos engineering" by brining down a node to verify recovery.
1. Practice recovery from backup.

   ### Enable GPG Signing

   1. GPG Signing of components
   See https://www.jfrog.com/confluence/display/RTF/GPG+Signing


   ### JFrong CLI

   <a target="_blank" href="https://www.jfrog.com/confluence/display/CLI/JFrog+CLI">JFrog CLI</a>
   optimizes both upload and download operations by skipping artifacts that already exist in their target location. 

1. Obtain installer from https://jfrog.com/getcli/ or:

   <pre><strong>brew install jfrog-cli-go</strong></pre>

   The response reflects use of Artifactory's bintray.com, JFrog's Software Distribution as a Service (instead of Acakamai CDN, etc.):

   <pre>==> Downloading https://homebrew.bintray.com/bottles/jfrog-cli-go-1.28.0.mojave.bottle.1.tar.gz
==> Downloading from https://akamai.bintray.com/29/2923b39b46f3a3d3ab994ddb5303c944cab3e27fd51f7cd41dfcd35b908af5aa?__gda__=exp=1568231851
######################################################################## 100.0%
==> Pouring jfrog-cli-go-1.28.0.mojave.bottle.1.tar.gz
🍺  /usr/local/Cellar/jfrog-cli-go/1.28.0: 5 files, 18MB
   </pre>

   See <a target="_blank" href="https://www.jfrog.com/confluence/display/CLI/JFrog+CLI">https://www.jfrog.com/confluence/display/CLI/JFrog+CLI</a> 
   for different authentication mechanisms that can be used.

1. Verify:

   <pre><strong>jfrog --version</strong></pre>

   <pre>jfrog version 1.28.0</pre>

   <a target="_blank" href="https://www.jfrog.com/confluence/display/CLI/CLI+for+JFrog+Artifactory">
   Command syntax</a>, such as:

   <pre><strong>jfrog rt ping --url=http://my-rt-server.com/artifactory</strong></pre>

<hr />

<a name="RegularStartup"></a>

## Regular server start-up

1. <tt>artifactory.sh</tt> starts the server on Linux machines.<br />
   <tt>artifactory.bat</tt> starts the server on Windows machines.


   ### Access and Authentication

   LDAP Authentication

   Role-based authorization with teams and permissions

   Active Directory, Atlassian Crowd and JIRA, OAuth (multiple providers)

   Licensed versions can use SSO integration for NTLM, Kerberos, Etc.

1. Focused Email Notifications for Artifact Changes


Alternately, <a target="_blank" href="https://computingforgeeks.com/how-to-install-jfrog-artifactory-on-centos/">install using Docker on CentOS</a>

<hr />

<a name="CloudInstall"></a>

## AWS Cloud 

<a target="_blank" href="https://aws.amazon.com/blogs/devops/integrating-jfrog-artifactory-with-aws-codepipeline/">
Integrating JFrog Artifactory with AWS CodePipeline</a>
by Erin McGill | on 24 MAY 2018 

![artifactory-aws-746x414](https://user-images.githubusercontent.com/300046/64734291-53676e80-d4b4-11e9-85f8-220ec1870ce7.png)


## Google Cloud

Artifactory can be used to create a hybrid solution by being a repository to <a target="_blank" href="https://jfrog.com/partner/google-cloud-platform/">bridge</a> between Google Cloud Platform (GCP) and Google Kubernetes Engine (GKE)CI/CD pipeline on-prem, called <a target="_blank" href="https://console.cloud.google.com/marketplace/details/jfrog/jfrog-isaas?pli=1">Cloud Pro X</a>.

<a target="_blank" href="https://cloud.google.com/blog/products/gcp/deploying-jfrog-artifactory-saas-on-google-cloud-platform">
Deploying JFrog Artifactory SaaS on Google Cloud Platform</a>
by JFrog Solutions Engineers Doron Meirfeld and Mansirman Singh

![JFrog-artifactory-700x700](https://user-images.githubusercontent.com/300046/64734186-261ac080-d4b4-11e9-8853-04027d8822b4.png)


<hr />


## User actions on sample repositories

All editions can search by Name, Archive, Property or Checksum values.

<a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Artifactory+Query+Language">Artifactory Query Language (AQL)</a> to extract data.

Annotate Artifacts with Searchable Properties
Aggregate and Run Bulk Operations on Search Results

Move/copy/delete artifacts through the UI


## Repository Replication

Paid editions of Artifactory can be replicated for redundancy.

Enterprise users can use Multi-push Replication

Web Start Application Hosting

## Network Proxy setup

Define a network proxy to deliver vetted installers instead of public versions.


<hr />


## Usage from Build tools

GoCD, TFS, Azure DevOps, AWS OpsWorks, etc.


## Create artifacts

On Demand Jar Signing are available to paid editions of Artifactory.

## API

Paid editions of Artifactory can extend Artifactory with Groovy-based User Plugins.

## Resources

https://www.vogella.com/tutorials/Artifactory/article.html

<a target="_blank" href="https://www.youtube.com/channel/UCh2hNg76zo3d1qQqTWIQxDg">YouTube channel</a> of videos include:

* <a target="_blank" href="https://www.youtube.com/watch?v=Zbwom40sXgE">
   Introduction to Artifactory</a> Feb 6, 2019 by Oren Ezer

* <a target="_blank" href="https://www.youtube.com/watch?v=aa4YBDUDWy0">
2:31 Artifactory - Sharing Binaries the Smart Way!</a>

https://jfrog.com/blog/control-your-kubernetes-voyage-with-artifactory/
artifactory-flow-k8s.png

* Glassdoor

## Social Community

* <a target="_blank" href="https://stackoverflow.com/questions/tagged/artifactory">
Questions and Answers on StackOverflow tagged "Artifactory"</a>

* LinkedIn
* Facebook
* Instagram

https://flink.apache.org/

<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

