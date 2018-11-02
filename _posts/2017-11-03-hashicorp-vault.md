---
layout: post
title: "Hashicorp Vault and Consul"
excerpt: "How to keep secrets on servers using"
tags: [vault, hashicorp, security]
filename: vault.md
image:
# pic secret finger over mouth 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15807549/645e9404-2b1e-11e6-8e19-2368c5578015.jpg
  credit: Forbes
  creditlink: http://blogs-images.forbes.com/ricksmith/files/2014/11/secret.png
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

Here is a hands-on tutorial on how to install and use Hashicorp <strong>Vault</strong> to securely access secret keys and Hashicorp <strong>Consul</strong> to store key/value pairs. Installation is from scrath on a cloud environment using Docker. Use of Jenkins is also covered.

This course assumes participants bring a Mac of Windows laptop and have prior experience with Linux CLI commands.

At the end of this tutorial, you should be able to:

* <a href="#InstallServer">Install Vault and Consul on a server using Docker</a>
* <a href="#Config">Initialize and Configure Vault</a>
* <a href="#SecretsCLI">Store and access secrets in Vault from a CLI</a>
* <a href="#AppProgramming">Store and access secrets in Vault within a program</a>
* Jenkins

## What is it?

A secret is anything that you want to tightly control access to, such as API keys, passwords, certificates, and more. Vault provides a unified interface to any secret, while providing tight access control and recording a detailed audit log.

Among devops tools from HashiCorp is <br />
<a target="_blank" href="https://vaultproject.io/">
https://vaultproject.io</a>, 
an open source tool that can be deployed to any environment, and does not require any special hardware. 

<a target="_blank" href="https://www.youtube.com/watch?v=VYfl-DpZ5wM">
Introduction to HashiCorp Vault</a> Mar 23, 2018
by Armon Dadgar, Hashicorp's CTO,
is a whiteboard talk about avoiding "secret sprawl" living in clear text with
empheral (temporary) passwords and cryptographic offload to a central service.

![hashicorp-vault-dadgar-927x522-94211](https://user-images.githubusercontent.com/300046/38281567-67193598-3768-11e8-9061-ebc6abbeb1e9.jpg)


## Alternatives

Alternatives to secret management include:

* variables in a clear-text file loaded into <strong>operating system variables</strong>.
* physical HSMs (Hardware Security Modules)
* cloud-base KMS (Key Management Service) such as from Amazon

## Advantages

Vault is useful for both enterprise as well as by smaller startup teams.

Vault provides high-level policy management, secret leasing, audit logging, and automatic revocation.

Vault forces a mandatory lease contract with clients. All secrets read from Vault have an associated lease to enable key usage auditing, perform key rolling, and ensure automatic revocation. Vault provides multiple revocation mechanisms to give operators a clear "break glass" procedure after a potential compromise.


<a name="InstallServer"></a>

## Install Vault server

There are several ways to obtain a running instance of Hashicorp Vault,
listed from easiest to most difficult:

A) You don't need a local machine if you use a Vault cloud service 

B) <a href="#Dockerfile">Use a Dockerfile to build your own Docker image.</a>

C) <a href="#DockerHub">Pull an image from Docker Hub</a> 

D) <a href="Homebrew">Use Homebrew to install Vault natively on you Mac</a>.

E) <a href="#BinaryInstall">Download from Hashicorp to install locally</a>.

CAUTION: If you are in a large enterprise, confer with your security team before 
installing. They often have a repository such as Artifactory or Nexus where
installers are available after being vetted and perhaps patched
for security vulnerabilities.

<hr />

### Cloud service

Vault is an open source tool that can be deployed to any environment.
It is well suited for cloud environments where HSMs are either not available or are cost prohibitive.

1. Create within your internal cloud, Google Cloud, Amazon EC2, Microsoft Azure, etc.
   a VM instance of an Ubuntu server. 4 GB RAM and 10 GB drive is the minimum.

   A sample command to create a Google Cloud instance:

   <pre>
   gcloud beta compute --project "${THIS_PROJECT_NAME}" instances create "${THIS_INSTANCE_NAME}" --zone "us-central1-f" --machine-type "n1-standard-1" --subnet "default" --maintenance-policy "MIGRATE" --service-account "{$GCP_ACCT}@developer.gserviceaccount.com" --scopes "https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring.write","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" --min-cpu-platform "Automatic" --tags "http","https","web","http-server","https-server" --image "ubuntu-1604-xenial-v20171026a" --image-project "ubuntu-os-cloud" --boot-disk-size "10" --boot-disk-type "pd-standard" --boot-disk-device-name "${THIS_INSTANCE_NAME}"
   </pre>


   <a name="Dockerfile"></a>

   ### Build image using Dockerfile

0. Install Git 

   <pre><strong>
apt-get update && apt-get install -y \
  git
   </strong></pre>

0. Use Git to obtain the Dockerfile :

   <pre><strong>
   git clone https://github.com/wilsonmar/vault.git --depth=1 
   cd vault
   </strong></pre>

0. Create a docker image locally:

   <pre><strong>
   sudo docker build -f Dockerfile -t demo:vault . 
   </strong></pre>

   This would run Maven, and a test job.


2. Run the Dockerfile at 

   <a target="_blank" href="
   https://raw.githubusercontent.com/wilsonmar/Vault/master/Dockerfile">
   https://raw.githubusercontent.com/wilsonmar/Vault/master/Dockerfile</a>

   Its contains:

   <pre>
FROM ubuntu:16.04
RUN apt-get update
RUN apt-get update && apt-get install -y \
  default-jre \
  default-jdk \
  git \
  maven 
&nbsp;
RUN mvn -version
RUN git clone https://github.com/hashicorp/vault???.git --depth=1
   </pre>

   The above provides commands to install Vault within a blank Docker container.

   `Vault-jvm/examples/sample-app` is a simple sample app, 
   which is replaced with a real app in the real world.



<a name="DockerHub"></a>

### Use Docker image

On a Linux server instance's Terminal CLI:

1. Add Docker's public GPG key :

   <pre><strong>
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   </strong></pre>

   OK is the expected response.

0. View the Linux version code referenced in a later command:

   <pre><strong>
   lsb_release -cs
   </strong></pre>

   This returns stretch for Debinan and xenial for Ubuntu.

0. Install Docker for Ubuntu (not Debian):

   <pre><strong>
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   </strong></pre>

0. Update repository:

   <pre><strong>
   sudo apt-get update
   </strong></pre>

0. List policies:

   <pre><strong>
   apt-cache policy docker-ce
   </strong></pre>

   The response:

   <pre>
docker-ce:
  Installed: (none)
  Candidate: 17.09.0~ce-0~ubuntu
  Version table:
     17.09.0~ce-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.06.2~ce-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.06.1~ce-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.06.0~ce-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.03.2~ce-0~ubuntu-xenial 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.03.1~ce-0~ubuntu-xenial 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
     17.03.0~ce-0~ubuntu-xenial 500
        500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
   </pre>

0. Install Docker Community Edition:

   <pre><strong>
   sudo apt-get install -y docker-ce
   </strong></pre>

   The response:

   <pre>
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following additional packages will be installed:
  aufs-tools cgroupfs-mount libltdl7
Suggested packages:
  mountall
The following NEW packages will be installed:
  aufs-tools cgroupfs-mount docker-ce libltdl7
0 upgraded, 4 newly installed, 0 to remove and 17 not upgraded.
Need to get 21.2 MB of archives.
After this operation, 100 MB of additional disk space will be used.
Get:1 http://us-central1.gce.archive.ubuntu.com/ubuntu xenial/universe amd64 aufs-tools amd64 1:3.2+20130722-1.1ubuntu1 [92.9 kB]
Get:2 http://us-central1.gce.archive.ubuntu.com/ubuntu xenial/universe amd64 cgroupfs-mount all 1.2 [4,970 B]
Get:3 http://us-central1.gce.archive.ubuntu.com/ubuntu xenial/main amd64 libltdl7 amd64 2.4.6-0.1 [38.3 kB]
Get:4 https://download.docker.com/linux/ubuntu xenial/stable amd64 docker-ce amd64 17.09.0~ce-0~ubuntu [21.0 MB]
Fetched 21.2 MB in 0s (22.7 MB/s)     
Selecting previously unselected package aufs-tools.
(Reading database ... 66551 files and directories currently installed.)
Preparing to unpack .../aufs-tools_1%3a3.2+20130722-1.1ubuntu1_amd64.deb ...
Unpacking aufs-tools (1:3.2+20130722-1.1ubuntu1) ...
Selecting previously unselected package cgroupfs-mount.
Preparing to unpack .../cgroupfs-mount_1.2_all.deb ...
Unpacking cgroupfs-mount (1.2) ...
Selecting previously unselected package libltdl7:amd64.
Preparing to unpack .../libltdl7_2.4.6-0.1_amd64.deb ...
Unpacking libltdl7:amd64 (2.4.6-0.1) ...
Selecting previously unselected package docker-ce.
Preparing to unpack .../docker-ce_17.09.0~ce-0~ubuntu_amd64.deb ...
Unpacking docker-ce (17.09.0~ce-0~ubuntu) ...
Processing triggers for libc-bin (2.23-0ubuntu9) ...
Processing triggers for man-db (2.7.5-1) ...
Processing triggers for ureadahead (0.100.0-19) ...
Processing triggers for systemd (229-4ubuntu20) ...
Setting up aufs-tools (1:3.2+20130722-1.1ubuntu1) ...
Setting up cgroupfs-mount (1.2) ...
Setting up libltdl7:amd64 (2.4.6-0.1) ...
Setting up docker-ce (17.09.0~ce-0~ubuntu) ...
Processing triggers for libc-bin (2.23-0ubuntu9) ...
Processing triggers for systemd (229-4ubuntu20) ...
Processing triggers for ureadahead (0.100.0-19) ...
   </pre>   


0. List Docker container status:

   <pre><strong>
   sudo systemctl status docker
   </strong></pre>

   The response:

   <pre>
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: active (running) since Sat 2017-11-04 22:00:35 UTC; 1min 28s ago
     Docs: https://docs.docker.com
 Main PID: 13524 (dockerd)
   CGroup: /system.slice/docker.service
           ├─13524 /usr/bin/dockerd -H fd://
           └─13544 docker-containerd -l unix:///var/run/docker/libcontainerd/docker-containerd.sock --metrics-interval=0 --start-timeout
Nov 04 22:00:34 vault-1 dockerd[13524]: time="2017-11-04T22:00:34.552925012Z" level=warning msg="Your kernel does not support swap me
Nov 04 22:00:34 vault-1 dockerd[13524]: time="2017-11-04T22:00:34.553123462Z" level=warning msg="Your kernel does not support cgroup 
Nov 04 22:00:34 vault-1 dockerd[13524]: time="2017-11-04T22:00:34.553267498Z" level=warning msg="Your kernel does not support cgroup 
Nov 04 22:00:34 vault-1 dockerd[13524]: time="2017-11-04T22:00:34.554662024Z" level=info msg="Loading containers: start."
Nov 04 22:00:34 vault-1 dockerd[13524]: time="2017-11-04T22:00:34.973517284Z" level=info msg="Default bridge (docker0) is assigned wi
Nov 04 22:00:35 vault-1 dockerd[13524]: time="2017-11-04T22:00:35.019418706Z" level=info msg="Loading containers: done."
Nov 04 22:00:35 vault-1 dockerd[13524]: time="2017-11-04T22:00:35.029599857Z" level=info msg="Docker daemon" commit=afdb6d4 graphdriv
Nov 04 22:00:35 vault-1 dockerd[13524]: time="2017-11-04T22:00:35.029962340Z" level=info msg="Daemon has completed initialization"
Nov 04 22:00:35 vault-1 systemd[1]: Started Docker Application Container Engine.
Nov 04 22:00:35 vault-1 dockerd[13524]: time="2017-11-04T22:00:35.054191848Z" level=info msg="API listen on /var/run/docker.sock"
log files:
   </pre>

0. Verify Docker version:

   <pre><strong>
docker --version
   </strong></pre>

   The response:

   <pre>
Docker version 17.09.0-ce, build afdb6d4
   </pre>

0. Download the Docker image maintained by Hashicorp:

   <pre><strong>
   docker pull <a target="_blank" href="https://hub.docker.com/_/vault/">vault</a>
   </pre>

   ### Alternate Docker images

   https://hub.docker.com/r/sjourdan/vault/
   has Hashicorp Vault on a minimal Alpine Linux box

   https://hub.docker.com/r/kintoandar/hashicorp-vault/
   has Hashicorp Vault on a tiny busybox

0. Set environment variables so IP addresses used for the redirect and cluster addresses in Vault's configuration is the address of the named interface inside the container (e.g. eth0):

   VAULT_REDIRECT_INTERFACE 
   VAULT_CLUSTER_INTERFACE 


0. Run the image using the file storage backend at path /vault/file, with a default secret lease duration of one week and a maximum of (720h/24) 30 days:

   <pre><strong>
docker run --cap-add=IPC_LOCK -e 'VAULT_LOCAL_CONFIG={"backend": {"file": {"path": "/vault/file"}}, "default_lease_ttl": "168h", "max_lease_ttl": "720h"}' vault server
   </strong></pre>

   `--cap-add=IPC_LOCK:` locks memory, which prevents it from being swapped to disk (and thus exposing keys).

   See https://www.vaultproject.io/docs/config/index.html

   NOTE: At startup, the server reads configuration HCL and JSON files from /vault/config. Information passed into VAULT_LOCAL_CONFIG is written into local.json in this directory and read as part of reading the directory for configuration files.

0. Start consul container with web ui on default port 8500:

   <pre><strong>
   docker run -p 8400:8400 -p 8500:8500 -p 8600:53/udp --hostname consul --name consul progrium/consul -server -bootstrap -ui-dir /ui
   </strong></pre>


<a name="BinaryInstall"></a>

### Binary install

1. Formal installation steps are covered by 
   <a target="_blank" href="https://vaultproject.io/docs/install/">
   this article</a>.

0. Installers for a large number of operating systems are downloaded from Hashicorp's website:

   <a target="_blank" href="https://www.vaultproject.io/downloads.html">
   https://www.vaultproject.io/downloads.html</a>

   * vault_0.7.3_darwin_amd64.zip for Mac 64 expands to a vault app of 59.6 MB.
   <br /><br />

0. Verify the SHA256 hash.
0. On a Mac, drag and drop the vault app file to your root Applications folder.
0. <a target="_blank" href="https://stackoverflow.com/questions/14637979/how-to-permanently-set-path-on-linux">Set the PATH</a> to Vault.
0. Double-click on the vault app.

   If you get an error that the binary could not be found, then your PATH environment variable was not setup properly. 

   BLAH:

   This automated script should install vault at version 0.1.2 into folder 

   <strong>/opt/vault_0.1.2</strong>

   (the current version for you will likely be different that 0.1.2).

   The installer configures itself by default to listen on localhost port 8200, 
   and registers it as a service called vault-server.

   <a name="VerifyInstall"></a>

   ### Verify

   No matter how it was installed:

0. Open a new Terminal window to Verify:

   <pre><strong>vault status
   </strong></pre>

0. Start the Dev Server per https://www.vaultproject.io/intro/getting-started/dev-server.html

   <pre><strong>vault server -dev
   </strong></pre>

   PROTIP: This is the command put in a server start-up script.

   ### Configure Vault

   https://github.com/Voronenko/hashi_vault_utils
   provides command scripts and commentary on this topic.


### Unsealing

When a Vault server is started, it starts in a sealed state. 

No operations are possible with a Vault that is sealed.

Unsealing is the process of constructing the master key necessary to read the decryption key
used to decrypt the data.

   <pre>
./vault_ unseal af29615803fc23334c3a93f8ad58353b587f50eb0399d23a6950721cbae94948
   </pre>

   The response confirms:

   <pre>
Sealed: false
Key Shares: 1
Key Threshold: 1
Unseal Progress: 0
   </pre>

   Higher Key Threshold values would require more key holders to perform unseal with their parts of the key. This provides an additional level of security for accessing data.

   NOTE: Vault’s usage of unseal keys is based on Shamir’s secret sharing algorithm defined at:<br />
   https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing



   ### Authorization

0. Identify yourself to continue working with Vault by providing the initial root token
   using the auth command, such as:

   <pre>./vault_ auth 98df443c-65ee-d843-7f4b-9af8c426128a
   </pre>

   The response:

   <pre>
Successfully authenticated! The policies that are associated
with this token are listed below:
&nbsp;   
root
   </pre>

   The Access Control policy named "root" policy gives "superuser" level access to everything in Vault.

   As we plan to store secrets for multiple projects, we should be able to clearly separate access to secrets that belong to different projects. And this is where policies do their job.

   Policies in Vault are formatted with HCL, a human-readable configuration format.
   It is also JSON-compatible. An example policy is shown below:

   <pre>
path "secret/project/name" {
  policy = "read"
}
   </pre>


## Sealing

In case of an emergency, Vault should be sealed immediately to 
prevent any actions or requests to be performed against the Vault server:

   <pre><strong>vault seal
   </strong></pre>

This buys time to investigate the cause of the issue and to find an appropriate solution, such as:

   * If a secret stored in Vault is leaked - a new secret should be generated and replaced in Vault, with a key rotation following.
   * If vault user credentials are leaked - the user credentials should be revoked and a key rotation should be performed.
   * If vault unseal keys are leaked - a rekey should be performed.


## Install Consul server

Using Hashicorp's Consul as a backend to Vault provides the
durable storage of encrypted data at rest necessary for
fault tolerance, availability, and scalability.

Hashicorp's Nomad ???


<a name="Jenkins"></a>

## Jenkins plug-in

<a href="https://github.com/jenkinsci/hashicorp-vault-plugin" target="_blank">
https://github.com/jenkinsci/hashicorp-vault-plugin</a>
is a Jenkins plug-in to establish a build wrapper to 
populate environment variables from secrets stored in HashiCorp's Vault.
It uses the "App Role" authentication backend which 
Hashicorp explicitly recommends for machine-to-machine authentication.

The plug-in allows use of a GitHub/GitLab personal access token
Github Access Token (https://github.com/blog/1509-personal-api-tokens)

Alternately, a Vault Token - either configured directly in Jenkins or read from an arbitrary file on the Jenkins Machine.

An example in Java is 
https://github.com/jenkinsci/hashicorp-vault-plugin/blob/master/src/main/java/com/datapipe/jenkins/vault/credentials/VaultAppRoleCredential.java

??? Vault Token Credential, just that the token is read from a file on your Jenkins Machine. You can use this in combination with a script that periodically refreshes your token.

https://github.com/amarruedo/hashicorp-vault-jenkins


   ### GitHub Token

   <pre><strong>
   vault auth -method=github token=GITHUB_ACCESS_TOKEN
   </strong></pre>

Upon success, a Vault token will be stored at $HOME/.vault-token.

   <pre><strong>vault list secret/path/to/bucket
   </strong></pre>

   This uses the token at $HOME/.vault-token if it exists. 

   See http://chairnerd.seatgeek.com/practical-vault-usage/

https://www.vaultproject.io/intro/getting-started/deploy.html


<a name="SecretsCLI"></a>

## Handling secrets in CLI

0. As a demonstration, store the secret value "Pa$$word321" named "donttell":

   <pre><strong>vault write secret/donttell value=Pa$$word321 excited=yes
   </strong></pre>

   The "secret/" is necessary.

   Because commands are stored in shell history, it's preferred to use files when handling secrets.

0. Retrieve the secret just added:

   <pre><strong>vault read secret/donttell
   </strong></pre>

   The response, for example:

   <pre>
Key                 Value
---                 -----
refresh_interval    768h0m0s
excited             yes
value               Pa$$word321
   </pre>   

0. Output a secret into a JSON file:

   <pre><strong>vault read -format=json secret/donttel
   </strong></pre>

   <pre>
{
    "request_id": "68315073-6658-e3ff-2da7-67939fb91bbd",
    "lease_id": "",
    "lease_duration": 2764800,
    "renewable": false,
    "data": {
        "excited": "yes",
        "value": "Pa$$word321"
    },
    "warnings": null
}   </pre>

0. Delete a secret:

   <pre><strong>vault delete secret/donttel
   </strong></pre>

   <pre>
Success! Deleted 'secret/donttel' if it existed.
   </pre>


   ### Write files

   tool like jq ?

0. To write a secret using a file:
   

## Access secrets in vault


### Rekey 

   Vault's <strong>rekey</strong> command allows for the recreation of unseal keys as well as changing the number of key shares and key threshold. This is useful for adding or removing Vault admins.

   Vault's rotate command is used to change the encryption key used by Vault. 
   This does not require anything other than a <strong>root token</strong>. 
   Vault will continue to stay online and responsive during a rotate operation.

<a name="AppProgramming"></a>

## Store and access secrets within a program

Use libraries for:

* Python
* C#
* Java
* Node JavaScript



## References

https://www.codementor.io/slavko/how-to-install-vault-hashicorp-secure-deployment-secrets-du107xlqd

https://github.com/dandb/jenkins-provisioning<br />
https://www.youtube.com/watch?v=ZcK_80P-68Q&t=8m31s
   by Damien Roche at Dun & Bradstreet on 30 April 2017.

https://medium.com/qubit-engineering/kubernetes-up-integrated-secrets-configuration-5a15b9f5a6c6
Kubernetes: Up & Integrated — Secrets & Configuration
by Tristan Colgate-McFarlane
![vault-qubit-895x759-56525](https://user-images.githubusercontent.com/300046/33553286-55801548-d8b5-11e7-878c-f085cc42532d.png)


https://www.joyent.com/blog/secrets-management-in-the-autopilotpattern
Vault provides encryption at rest for secrets, encrypted communication of those secrets to clients, and role-based access control and auditability for secrets. And it does so while allowing for high-availability configuration with a straightforward single-binary deployment. See the Vault documentation for details on their security and threat model.
https://www.vaultproject.io/docs/internals/security.html

Vault uses Shamir's Secret Sharing to control access to the "first secret" that we use as the root of all other secrets. A master key is generated automatically and broken into multiple shards. A configurable threshold of k shards is required to unseal a Vault with n shards in total.
