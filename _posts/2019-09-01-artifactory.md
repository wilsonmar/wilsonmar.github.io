---
layout: post
title: "Artifactory (with X-Ray security scan)"
excerpt: "Privately store and retrieve binary artifacts vetted of vulnerabilities, instead of public DockerHub, PiPI, etc."
tags: [devops]
date: "2019-09-01"
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

Artifactory stores <strong>binary</strong> format assets such as executable files from builds, virtual memory (container) images, graphic image files, etc. (rather than textual source code). It caches local binary files as a proxy to public repositories, which make them quicker to obtain and provides a way to provide security-vetted (whitelisted) versions.

{% include whatever.html %}

Wikipedia categorizes it as a <a target="_blank" href="https://www.wikiwand.com/en/List_of_software_package_management_systems">"software package management system"</a>.

Artifactory works with another JFrog product: X-Ray, which identifies vulnerabilities in transitive dependencies calling 3rd-party open-source libraries.

<a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Welcome+to+Artifactory">User Guide: https://www.jfrog.com/confluence/display/RTF/Welcome+to+Artifactory</a>


## Workflow by edition and license

Artifactory provides <strong>traceability</strong> of dependencies within components and images built as artifacts are promoted by Helm for use by Kubernetes.

Licensed editions integrates with <a target="_blank" href="https://jfrog.com/xray/">JFrog Xray</a> which performs "continuous" Security scans and Artifact impact analysis based on JFrog's database of vulnerabilities. <a target="_blank" href="https://www.youtube.com/watch?v=4JMOgImrQ_I">VIDEO</a>

![artifactory-flow-1044x546](https://user-images.githubusercontent.com/300046/64657883-49396780-d403-11e9-8b0c-0a81307caf45.jpg)

<a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Virtual+Repositories">
A Virtual Repository</a> can be defined in Artifactory to access multiple Bower registries aggregated under a single URL.

Both on-prem and cloud SaSS deployments are available.

Artifactory is <a target="_blank" href="https://jfrog.com/pricing/">licensed</a>
from JFrog at $14,400 per year for a single site and $29,500 for multiple (enterprise) sites.
The money goes to support secure, clustered, High Availability registries.

See <a target="_blank" href="https://jfrog.com/open-source/">https://jfrog.com/open-source</a>

Free OSS Artifactory editions fetch ONLY for transitive package managers (Java) Maven, <a target="_blank" href="https://docs.gradle.org/current/userguide/introduction_dependency_management.html">Gradle</a>, and <a target="_blank" href="https://en.wikipedia.org/wiki/Apache_Ivy">Apache Ivy</a>.
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

https://github.com/jfrog/project-examples
Sample projects for training and testing CI setup with Artifactory

https://github.com/jfrog/jfrog-data-generator
Tools for generating and preloading JFrog products with data

https://github.com/jfrog/jfrog-idea-plugin
https://jfrog.github.io/jfrog-idea-plugin/



### HA (High Availability)

<a target="_blank" href="https://www.youtube.com/watch?v=Rybq0n8e8qI">VIDEO</a>
Get Ahead of the Curve with JFrog Artifactory Enterprise

Artifactory Enterprise claims an SLA of "Five-nines Availability" and
"Near-zero Maintenance Downtime" from
Unlimited Server Scalability due to 

High Availability (HA) Artifactory configuration consists of a cluster of several (Docker) active/active nodes behind a load balancer. 
All nodes reference a single MySQL/PostgreSQL database.

The Helm chart (using K8s 1.8+) is at <a target="_blank" href="https://hub.helm.sh/charts/jfrog/artifactory-ha">https://hub.helm.sh/charts/jfrog/artifactory-ha</a>

Storage configuration settings are defined in the <tt>binarystore.xml</tt> file.

Parameter <tt>artifactory.service.pool</tt> defines a single primary node handles jobs and tasks and not interrupted by inbound traffic.
Inbound traffic is received by 2 member nodes which are load balanced.



## Disaster Recovery Testing

To prepare for the ability to recover from a disaster, enterprise admins of Artifactory use <a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Replicator">Replicator</a> to synchronize repositories between remote Artifactory instances. 

Test DR.


<hr />

## Preparations

Based on <a target="_blank" href="https://jfrog.com/screencast/artifactory-5-one-minute-setup-docker-registry-as-container-install/">VIDEO: Setup a Docker Registry in 5 minutes</a>

1. Get and install license keys (perhaps for a ___ day trail).

   Artifactory HA license?

1. Obtain DNS IP addresses for primary, second, and third nodes, plus load balancer.

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

* JFrog Mission Control (JFMC) is used to manage deployments

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


## CI/CD Pipeline

<a target="_blank" href="https://www.youtube.com/watch?v=f3O_C8q-vrI">
[Webinar] JFrog Artifactory - The Easy One</a> Sep 13, 2018
Artifactory Query Language (AQL)

Artifactory stores metadata in a relational database.


## Jfrog API

<a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API">https://www.jfrog.com/confluence/display/RTF/Artifactory+REST+API</a> https://github.com/jfrog/artifactory-scripts/tree/master/REST-API-Examples

https://github.com/jfrog/artifactory-scripts
Scripts for Artifactory (Usually, for REST API), community driven.



## JFrog CLI on client

   <a target="_blank" href="https://www.jfrog.com/confluence/display/CLI/JFrog+CLI">JFrog CLI</a>
   optimizes both upload and download operations by skipping artifacts that already exist in their target location. 

1. Instead of using installer from https://jfrog.com/getcli/ 

   <pre><strong>brew install jfrog-cli-go</strong></pre>

   The response reflects use of Artifactory's bintray.com, JFrog's Software Distribution as a Service (instead of Acakamai CDN, etc.):

   <pre>==> Downloading https://homebrew.bintray.com/bottles/jfrog-cli-go-1.30.4.mojave.
==> Downloading from https://akamai.bintray.com/0f/0f348458539931885a3e0e6e90553
######################################################################## 100.0%
==> Pouring jfrog-cli-go-1.30.4.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/jfrog-cli-go/1.30.4: 5 files, 18.2MB
   </pre>

   See <a target="_blank" href="https://www.jfrog.com/confluence/display/CLI/JFrog+CLI">https://www.jfrog.com/confluence/display/CLI/JFrog+CLI</a> 
   for different authentication mechanisms that can be used.

1. Verify:

   <pre><strong>jfrog --version</strong></pre>

   <pre>jfrog version 1.30.4</pre>

   <a target="_blank" href="https://www.jfrog.com/confluence/display/CLI/CLI+for+JFrog+Artifactory">
   Command syntax</a>, such as:

1. View command help by the CLI alone:

   <pre><strong>jfrog</strong></pre>

   <pre>NAME:
   jfrog - See https://github.com/jfrog/jfrog-cli-go for usage instructions.
&nbsp;
USAGE:
   jfrog [global options] command [command options] [arguments...]
&nbsp;
VERSION:
   1.30.4
&nbsp;   
COMMANDS:
   rt          Artifactory commands
   bt          Bintray commands
   mc          Mission Control commands
   xr          Xray commands
   completion  Generate autocomplete scripts
   help, h     Shows a list of commands or help for one command
&nbsp;   
GLOBAL OPTIONS:
   --help, -h     show help
   --version, -v  print the version
&nbsp;   
Environment Variables:
  JFROG_CLI_LOG_LEVEL
    [Default: INFO]
    This variable determines the log level of the JFrog CLI.
    Possible values are: INFO, ERROR, and DEBUG.
    If set to ERROR, JFrog CLI logs error messages only.
    It is useful when you wish to read or parse the JFrog CLI output and do not want any other information logged.
&nbsp;
  JFROG_CLI_OFFER_CONFIG
    [Default: true]
    If true, JFrog CLI prompts for product server details and saves them in its config file.
    To avoid having automation scripts interrupted, set this value to false, and instead,
    provide product server details using the config command.
&nbsp;
  JFROG_CLI_HOME_DIR
    [Default: ~/.jfrog]
    Defines the JFrog CLI home directory path.
&nbsp;
  JFROG_CLI_TEMP_DIR
    [Default: The operating system's temp directory]
    Defines the temp directory used by JFrog CLI.
&nbsp;
  JFROG_CLI_BUILD_NAME
    Build name to be used by commands which expect a build name, unless sent as a command argument or option.
&nbsp;  
  JFROG_CLI_BUILD_NUMBER
    Build number to be used by commands which expect a build number, unless sent as a command argument or option.
&nbsp;
  JFROG_CLI_BUILD_URL
    Sets the CI server build URL in the build-info. The "jfrog rt build-publish" command uses the value of this environment variable, unless the --build-url command option is sent.
&nbsp;  
  JFROG_CLI_ENV_EXCLUDE
    [Default: *password*;*secret*;*key*;*token*] 
    List of case insensitive patterns in the form of "value1;value2;...". Environment variables match those patterns will be excluded. This environment variable is used by the "jfrog rt build-publish" command, in case the --env-exclude command option is not sent.
&nbsp;
  CI
    [Default: false]
    If true, disables progress bar on the supporting commands.
   </pre>

1. Edit your <tt>~/.bash_profile</tt> to define environment variables to configure.

   Alternately, be prompted:

   <pre><strong>jfrog rt ping --url=http://my-rt-server.com/artifactory</strong></pre>

   <pre>To avoid this message in the future, set the JFROG_CLI_OFFER_CONFIG environment variable to false.
The CLI commands require the Artifactory URL and authentication details
Configuring JFrog CLI with these parameters now will save you having to include them as command options.
You can also configure these parameters later using the 'config' command.
Configure now? (y/n): 
   </pre>

<hr />

## Helm charts

https://hub.helm.sh/charts/jfrog/artifactory-ha

Add jfrog repository:

   helm repo add jfrog https://charts.jfrog.io
   
Install helm chart:

   helm install jfrog/artifactory-ha --version 1.1.9
 

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

## Migration from Docker Registry

<a target="_blank" href="https://github.com/jfrog/docker2artifactory
">https://github.com/jfrog/docker2artifactory</a>
to transition from V2 Docker registries to JFrog Artifactory.
by Arturo Aparicio in San Jose, California.




## Git LFS

https://github.com/jfrog-aparicio/git-lfs



## User actions on sample repositories

All editions can search by Name, Archive, Property or Checksum values.

<a target="_blank" href="https://www.jfrog.com/confluence/display/RTF/Artifactory+Query+Language">Artifactory Query Language (AQL)</a> to extract data.

Annotate Artifacts with Searchable Properties
Aggregate and Run Bulk Operations on Search Results

Move/copy/delete artifacts through the UI

https://github.com/jfrog/artifactory-user-plugins/tree/master/cleanup


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

## JFrog X-Ray

JFrog's Xray (2.X up) and scans binaries in Artifactory. Scanning references a vulnerability database that the local server downloads from JFrog.
The database is about 16 GB and needs to be monitored for growth over time.

https://www.jfrog.com/confluence/display/XRAY/Installing+Xray

To scan packages, Xray downloads the entire artifact to its local disk
So the Xray server needs a lot of disk space. At least 100 GB, or 200 GB to start.

The recommend Xray server minimum hardware is 8 cores CPU and 16 GB RAM.

https://support.jfrog.com/jFrogKnowledgePage#id=kA01r000000LwtmCAC
Basic troubleshooting section at the end for the most commonly seen errors.

The <a target="_blank" href="https://github.com/jfrog/jfrog-vscode-extension">JFrog VS Code Extension</a> adds JFrog Xray scanning of npm project dependencies to your VS Code IDE. 

## Competition in vulnerability scanners

Software Composition Analysis:

   * <a target="_blank" href="https://sonatype.com/">Sonatype.com (which offers Artifactory competitor Nexus and scanner)
   * Aqua MicroScanner https://github.com/aquasecurity/microscanner
   * <a target="_blank" href="https://snyk.io/">SNYK.io</a>
   * <a target="_blank" href="https://www.blackducksoftware.com/">Black Duck</a> by Synopsys
   * <a target="_blank" href="https://www.twistlock.com/">Twistlock.com</a> container and serverless security scanner
   * <a target="_blank" href="https://www.veracode.com/security/vulnerability-scanning-tools">Veracode.com</a>
   * <a target="_blank" href="https://www.whitesourcesoftware.com/">Whitesource</a>

## JFrog the company

* Glassdoor

## Resources

https://www.vogella.com/tutorials/Artifactory/article.html

<a target="_blank" href="https://www.youtube.com/channel/UCh2hNg76zo3d1qQqTWIQxDg">YouTube channel</a> of videos include:

   * <a target="_blank" href="https://www.youtube.com/watch?v=Zbwom40sXgE">
   Introduction to Artifactory</a> Feb 6, 2019 by Oren Ezer

   * <a target="_blank" href="https://www.youtube.com/watch?v=aa4YBDUDWy0">
2:31 Artifactory - Sharing Binaries the Smart Way!</a>

https://jfrog.com/blog/control-your-kubernetes-voyage-with-artifactory/
artifactory-flow-k8s.png


## Social Community

* <a target="_blank" href="https://stackoverflow.com/questions/tagged/artifactory">
Questions and Answers on StackOverflow tagged "Artifactory"</a>

* LinkedIn
* Facebook
* Instagram
* https://flink.apache.org/

## Python client for Artifactory

REST API documentation refer to curl commands, but not sample coding, such as in Python, Go, NodeJs, etc.

Additional functionality can be added by custom programming code calling REST APIs.

https://github.com/jfrog/artifactory-scripts
was last updated Sep 4, 2019


<a target="_blank" href="https://devopshq.github.io/">DevOpsHQ</a>, a small team of Russians working on free tools,
have developed https://github.com/devopshq/artifactory described at https://devopshq.github.io/artifactory/.
It's based on https://docs.python.org/3/library/pathlib.html
Although it is marked as "Code Quality D", it offers a good start.

The above was found in a search of "artifactory" throughout GitHub.com.


## Plug-ins

https://github.com/jfrog/artifactory-user-plugins presented at https://www.jfrog.com/confluence/display/JFROG/User+Plugins
   




<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

