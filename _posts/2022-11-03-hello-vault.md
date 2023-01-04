---
layout: post
date: "2023-01-02"
file: "hello-vault"
title: "Hello-Vault"
excerpt: "How to code your app to use HashiCorp Vault to get rid of static database passwords by generating credentials in Secret_ID temporarily in cubbyholes, wrapped for transfer, and accessed using AppRole"
tags: [secrets]
image: # pic-black-bkg-white-cloud_1920x1200
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme Bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article takes a deep dive into sample (template) code within a GitHub repo, giving technical explanations for devs (instead of generalities).

## Why?

Keeping secrets secret is a fundamental skill for all developers, especially in today's hostile internet full of scammers, ransomware gangs, and state-sponsored terrorism using "killware".

## Never lose another database password

To outwit hackers, HashiCorp Vault has created an amazing enterprise-capable approach that creates usernames and passwords for temporary use.

   * https://developer.hashicorp.com/vault/docs/secrets/databases/postgresql
   * https://play.instruqt.com/hashicorp/tracks/vault-dynamic-database-credentials
   * https://developer.hashicorp.com/vault/docs/secrets/databases
   <br /><br />

This is like working on your TV the different remotes and logins to setup different streaming services.
Once you go through the motions, you can get through quickly (for awhile until you change TV).

This article provides a step-by-step deep-dive tour, with commentary, contrasting code across several repositories created by developers inside and outside HashiCorp. 

{% include whatever.html %}

## Dev environment for you

Terraform is typically used to create resources in the cloud or in on-prem. machines for production usage. For resilience in productive use, Vault is usually setup in a cluster of several servers.
   * https://github.com/hashicorp/vault-guides
   <br /><br />

But to learn to code your app to access Vault, app developers need a (temporary) rig that provides:

   * A Vault single-node instance
   * A database instance (PostgreSQL or MySQL for C#)
   * Shell scripts so that only a single command (such as <tt>run.sh</tt>) creates the enviornment on new Apple M1 ARM64 chips as well as older Intel x86 macOS machines
   * A sample app in your programming language of choice that demonstrates how to access the above.
   <br /><br />

This article describes such a rig.

App programs interacting with Vault client API libraries of various programming languages at:

   * <a target="_blank" href="https:/www.vaultproject.io/api-docs/libraries">https:/www.vaultproject.io/api-docs/libraries</a>
   <br /><br />


## For local development on laptops

But for app development work on laptops, it's most convenient to have resources running locally.

To save app developers time and hassle of setting up the above, HashiCorp Vault developers figured out the intricacies of specifications to use <strong>docker-compose</strong>. Docker Compose is a Docker tool used to define and run multi-container applications.
<a target="_blank" href="https://www.youtube.com/watch?v=JvPDGcl9Rzs">VIDEO: Meet the team which created this talk about their sample code (in Go)</a>.

Rigs for these languages so far, listed alphabetically:
   * <a target="_blank" href="https://github.com/wilsonmar/docker-development-youtube-series/tree/master/hashicorp/vault/example-apps/dynamic-postgresql">Bash</a>
   * https://github.com/hashicorp/hello-vault-dotnet (C# with MS-SQL)
   * https://github.com/hashicorp/hello-vault-go
   * Groovy - no plans
   * Haskell - no plans
   * https://github.com/hashicorp/hello-vault-python (under construction)
   * https://github.com/hashicorp/hello-vault-spring (Maven, Java) using<br /> https://spring.io/projects/spring-vault
   * https://github.com/hashicorp/hello-vault-ruby
   * https://github.com/hashicorp/hello-vault-rust (under construction)
   <br /><br />

1. Obtain the repo for your language of choice. For example:

   <pre><strong>git clone https://github.com/hashicorp/hello-vault-spring
   cd hello-vault-spring
   </strong></pre>

   Each repo uses <strong>Docker Compose</strong> to create a dev environment containing a dev Vault instance and an app database. All the example repos make calls to a PostgreSQL database, except for the C# (dotnet) example, which calls a MS-SQL database.

   These repos provides single shell scripts to make it easier than following guides such as:
   * https://spring.io/guides/gs/accessing-vault/
   * https://github.com/mp911de/spring-cloud-vault-config-samples
   <br /><br />

2. Notice that each repo contains two folders with two example apps:

   * <a href="#quick-start"><strong>quick-start</strong></a> to write a secret, then read that secret back

   * <a href="#sample-app"><strong>sample-app</strong></a> to make API calls (using curl CLI commands) to an app server which interacts with a database
   <br /><br />

   You can also run your own commands.

   <a name=".gitignore"></a>

   ### .gitignore from GitHub

3. If you have not already done so, create a <tt>global .gitignore</tt> configuration file on your machine $HOME folder:

   On a Mac or Linux:

   <pre><strong>git config --global core.excludesfile ~/.gitignore
   </strong></pre>

   On Windows using CLI:
   
   <pre><strong>git config --global core.excludesfile "%USERPROFILE%\.gitignore"
   </strong></pre>

   On Windows using Powershell (credit: @kupmanj):

   <pre><strong>git config --global core.excludesFile "$Env:USERPROFILE\.gitignore"
   </strong></pre>

   The above results this entry in your .gitconfig file:

   <pre>[core]
   excludesfile = {path-to-home-dir}/.gitignore   
   </pre>

   Your global .gitignore file specifies extraneous (unnecessary) files and folders created by your operating system and editors from loading into GitHub.

4. Install and use a text editor such as code (for VSCode) to edit the file:
 
   <pre><strong>code .gitignore</strong></pre>
   
5. Highlight and copy these lines and paste into your global .gitignore file this starter set. The specification format is explained <a target="_blank" href="https://www.w3schools.com/git/git_ignore.asp?remote=github">here</a>:

   <pre># MacOS:
.DS_Store
&nbsp;
# WindowsOS:
Thumbs.db
&nbsp;
# Ignore ALL files in ANY directory named temp:
temp/
&nbsp;
# Ignore all .log files:
log/
*.log
&nbsp;
# Node:
# npm-debug.log
&nbsp;
# VSCode IDE (from Microsoft):
.vscode/
&nbsp;
# WebStorm IDE:
.idea/
&nbsp;
# vi editor:
*~
&nbsp;
# iPython Jupyter Notebooks:
.ipynb_checkpoints/
venv/
   </pre>

   We don't want to hold within GitHub/GitLab files and folders <strong>generated</strong> because they will be re-generated again upon, such as <tt>temp</tt> folders. 

   The slash (/) in <tt>log/</tt> ignores all contents in all folders named <tt>log</tt>.
   This would cover ignore of <tt>npm-debug.log</tt> generated by NodeJs.

   We don't want to hold <strong>log</strong> files in GitHub because that would quickly fill up GitHub servers. Log files are typically sent to AWS CloudWatch, Splunk, etc.

   The asterisk (*) in <tt>*.log</tt> ignores all files ending with <tt>.temp</tt>

1. Add additional gitignore patterns for each technology you use. Each programming language would have different contents that it generates.
 
   <a target="_blank" href="https://www.toptal.com/developers/gitignore">https://www.toptal.com/developers/gitignore</a>

   <a target="_blank" href="https://github.com/github/gitignore">https://github.com/github/gitignore</a>

   In the <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/.gitignore">.gitignore file for Spring/Java</a>, there would be a spec for all contents within folder <tt>target/</tt> generated during each run whould should not uploaded to GitHub.

   Each IDE creates configuration files which should not be uploaded:
   * <tt>.vscode/</tt> for Visual Studio Code
   * <tt>.idea/</tt> for the IDEA IDE
   * Several files generated by STS, NetBeans
   <br /><br />

   In the <a target="_blank" href="https://github.com/hashicorp/hello-vault-dotnet/blob/main/.gitignore">.gitignore file for DotNet/C#</a>, there is a spec to ignore bin and obj folders which can begin with either a lower or upper case letter:

   <pre>[Bb]in/
[Oo]bj/
   </pre>

<hr />

Let's dive in by installing prerequities. Each technology has a different set of technologies:

<a name="macOSInstall"></a>

## Install on macOS:

1. On macOS, install the Apple XCode Command Line utilities, if needed.

2. Install OS package manager so that you can upgrade to the latest version with a single command.

   On macOS, install Homebrew:

   <pre><strong>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   </strong></pre>
   
3. Install utilities using package manager. 

   On macOS:

   <pre><strong>brew install  curl  jq  tree</strong></pre>

   NOTE: Brew now knows to not re-install the latest version if it's already installed.

   On Linux:

   <pre><strong>sudo apt-get install jq
   </strong></pre>

4. On newer macOS laptops with the M1 ARM chip:

   <pre><strong>sudo softwareupdate --install-rosetta
   </strong></pre>

5. Install the compiler for your language of choice:

   ### Install Java

   For Java, Zulu is my favorite open-source compiler:

   <pre><strong>brew install zulu
   </strong></pre>

   Alternately, to install the latest version of OpenJDK:

   <pre><strong>brew install --cask temurin
   </strong></pre>

   Alternately, to install a specific version of OpenJDK:
   <pre><strong>brew tap homebrew/cask-versions
   brew install --cask temurin8
   brew install --cask temurin11
   </strong></pre>

   Verify Java & Spring version to see if install took: 

   <pre><strong>java --version
   </strong></pre>

   You should see something like this:
   
   <pre>openjdk 19.0.1 2022-10-18
   OpenJDK Runtime Environment Zulu19.30+11-CA (build 19.0.1+10)
   OpenJDK 64-Bit Server VM Zulu19.30+11-CA (build 19.0.1+10, mixed mode, sharing)
   </pre>

   * Java 17 the latest (3rd) LTS was released on September 14, 2021. 
   * Java 19 General Availability began on September 20, 2022.
   <br /><br />

   See https://www.wikiwand.com/en/Java_version_history


   ### Install Go

   <pre><strong>brew install golang
   go version
   </strong></pre>

   Sample response:

   <pre>go version go1.19.2 darwin/arm64</pre>

   See https://formulae.brew.sh/formula/go
   https://jimkang.medium.com/install-go-on-mac-with-homebrew-5fa421fc55f5

   <pre><strong>mkdir -p $HOME/go/{bin,src,pkg}
   </strong></pre>

   In ~/.bashrc or .zshrc

   <pre>export GOPATH=$HOME/go
   export GOROOT="$(brew --prefix golang)/libexec"
   export PATH="$PATH:${GOPATH}/bin:${GOROOT}/bin"
   </pre>   

   ### Install C#

   <a target="_blank" href="https://www.youtube.com/watch?v=w8vQnmS3EZ4">VIDEO</a>:

   1. Click <a target="_blank" href="https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-macos-arm64-installer">
   this link to download dotnet-sdk-6.0.402-osx-arm64.pkg</a> at https://dotnet.microsoft.com
   (Ignore https://learn.microsoft.com/en-us/dotnet/core/install/macos)

   1. Expand the zip. Click Continue, Install. Password. Close.
   2. Verify SDK installed:

      <pre><strong>dotnet --list-sdks
      </strong></pre>

      Sample response:

      <pre>6.0.401 [/usr/local/share/dotnet/sdk]
      6.0.402 [/usr/local/share/dotnet/sdk]
      </pre>

   3. Install Visual Studo Code Unversal Stable version from https://code.visualstudio.com by clicking <a target="_blank" href="https://code.visualstudio.com/docs/?dv=osx">this link</a> for file "VSCode-darwin-universal.zip".
   4. Unzip.
   5. In /Applications, open "Visual Studio Code.app".
   6. Install the C# extension.
   7. Verify .NET runtimes (.NET Core) installed:

      <pre><strong>dotnet --list-runtimes
      </strong></pre>

      <pre>Microsoft.AspNetCore.App 6.0.9 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
      Microsoft.NETCore.App 6.0.9 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
      </pre>

   <a target="_blank" href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/configure-language-version">C# versions</a>:<br />
   C# 11 is supported only on .NET 7 and newer versions.<br />
   C# 10 is supported only on .NET 6 and newer versions.<br />
   C#  9 is supported only on .NET 5 and newer versions.

   ### Install Python

   <pre><strong>brew install python 
   python --version
   pip install virtualenv   # used to:
   python -m venv venv   # create venv enviornment to activate by:
   source venv/bin/activate  # for (venv) prompt to:
   pip install hvac   # needed for Python to work with HashiCorp Vault
   </strong></pre>

   <tt>virtualvenv</tt> is used to ensure that Python packages play nice with each other - so that other Python projects with competing or incompatible versions of the same add-ons (dependencies) don't collide with this package.


   ### Install Docker Compose

6. Install the Docker Desktop. On macOS, see https://docs.docker.com/desktop/mac/apple-silicon/

   <pre><strong>brew install docker
   brew install docker-desktop
   docker compose version
   </strong></pre>
   
   The response, at time of writing, was:

   <pre>Docker Compose version 2.12.2
   </pre>

7. PROTIP: Get the Docker Desktop logo on your Mac Taskbar: pinch four fingers on your trackpad to drag and drop the logo onto your Taskbar.
   You should see the Docker logo when you point the mouse at the top of your screen.

8. Invoke the Docker Desktop app.

   PROTIP: I have a shell script which checks if Docker Desktop is running, and bring it up if it's not.

PROTIP: Remember there are limitations when using Docker:

   * All operations in Docker need to be run by root (i.e. privilage escalation needed for containers). So <a target="_blank" href="https://community.atlassian.com/t5/Trust-Security-articles/Hiding-malware-in-Docker-Desktop-s-virtual-machine/ba-p/1924743">Docker can run malicious code within its Virtual Machines</a>

   * Docker runs on a single process, so it can be a single point of failure.

   * If the docker daemon fails, all its child processes become orphaned.


### Use Podman instead of Docker?

   On August 31 2021 Docker Inc. announced a change in the licensing model for Docker Desktop. As of January 31 2022, Docker Desktop is no longer free and commercial users (businesses) need to pay a monthly subscription fee of $5 per month.

   Alternatives to Docker's container engine include LXD, Rkt, CRI-O, Podman.

   <a target="_blank" href="https://cloudnweb.dev/2019/06/replacing-docker-with-podman-power-of-podman/">Podman</a> is a container image manager available free as it was <a target="_blank" href="https://developers.redhat.com/topics/open-source">open-sourced</a> by <a target="_blank" href="https://developers.redhat.com/blog/2020/11/19/transitioning-from-docker-to-podman#transition_to_the_podman_cli">Red Hat</a> as a Linux-native tool designed to develop, manage, and run Open Container Initiative (OCI) containers and pods. 

   <a target="_blank" href="https://cloudnweb.dev/2019/10/heres-why-podman-is-more-secured-than-docker-devsecops/">Podman is supposed to be more secure than Docker</a>. 

   <pre><strong>brew install podman
   </strong></pre>
   
   Although <a target="_blank" href="https://developers.redhat.com/blog/2019/01/15/podman-managing-containers-pods/?intcmp=701f20000012ngPAAQ">it's said</a> that "Podman doesn't require an active container engine for its commands to work".
   
   The expected response is like this:
   <pre>Downloading VM image: fedora-coreos-36.20221030.2.3-qemu.aarch64.qcow2.xz: done  
   Extracting compressed file
   Image resized.
   Machine init complete
   To start your machine run:
      podman machine start
   </pre>

   If instead you see this error message:
   <pre>Error: podman-machine-default: VM already exists
   </pre>
   follow instructions at the bottom of <a target="_blank" href="https://github.com/containers/podman/issues/10824">this post</a>:
   <pre><strong>brew uninstall podman
   # Remove containers files:
   rm -rf ~/.config/containers/
   rm -rf ~/.local/share/containers
   rm ~/.ssh/podman*
   brew install podman
   </strong></pre>

   BLAH: Podman was designed to run on Linux (not Windows, macOS).

   <pre><strong>podman machine list
   </strong></pre>

   To restart podman after an upgrade:
   
   <pre><strong>brew services restart podman
   </strong></pre>
   
   Successfully started `podman` (label: homebrew.mxcl.podman)
   
   <pre><strong>podman machine start
   </strong></pre>

   To stop:

   <pre><strong>podman machine stop
   </strong></pre>

   NOTE: <a target="_blank" href="https://www.redhat.com/sysadmin/podman-mac-machine-architecture">Podman's architecture</a> is daemonless.
   Podman has a similar directory structure than Docker (with Buildah, Skopeo, and CRI-O). 
   So Podman audaciously suggests that all docker commands be automatically converted to podman within the CLI:

   <pre><strong>alias docker=podman
   </strong></pre>

   <a target="_blank" href="https://www.youtube.com/watch?v=15PFfjuxtvM&t=17s">VIDEO</a>:
   But the problem comes with replacing <tt>docker-compose</tt>.
   Many have proposed making intricate commands and settings to make Podman work with Docker-Compose.
      * <a target="_blank" href="https://medium.com/team-rockstars-it/how-to-implement-a-docker-desktop-alternative-in-macos-with-podman-bbf728d033da">This</a>
      * https://gist.github.com/kaaquist/dab64aeb52a815b935b11c86202761a3
      * https://balagetech.com/convert-docker-compose-services-to-pods/
      * https://news.ycombinator.com/item?id=28462495
      * https://news.ycombinator.com/item?id=28413470
      * https://fedoramagazine.org/use-docker-compose-with-podman-to-orchestrate-containers-on-fedora/
      <br /><br />

   RedHat is working on a replacement for podman-compose at <a target="_blank" href="https://github.com/containers/podman-compose">
   https://github.com/containers/podman-compose</a>
   
   Before using it, consider the <a target="_blank" href="https://github.com/containers/podman-compose/issues">
   many issues currently open for podman-compose</a>.

   <pre><strong>pip3 install podman-compose
   </strong></pre>

   PROTIP: I would wait until podman-compose works.
   
   Alternately, instead of docker-compose, consider <a target="_blank" href="https://bmiguel-teixeira.medium.com/goodbye-docker-compose-hello-kubelet-75306472de27">Kublet static pod</a>.

   References: https://durgesh-cdac.medium.com/docker-vs-podman-f6b4de217ef5

   

<hr />

<a name="quick-start"></a>

## quick-start

1. Navigate into the quick-start folder:

   <pre><strong>cd quick-start</strong></pre>

2. View the application program file using <tt>cat</tt> or a text editor such as code (for VSCode):

   For Spring (Java):
 
   <pre><strong>cat <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/quick-start/src/main/java/com/hashicorp/quickstart/App.java">src/main/java/com/hashicorp/quickstart/App.java</a></strong></pre>

   Alternately, it's <a target="_blank" href="https://github.com/hashicorp/hello-vault-dotnet/blob/main/quick-start/Program.cs">Program.cs</a> for dotnet (C#).

   ### Static dev APP_ADDRESS

   In dev programs, the Host, Port, and Scheme are hard-coded for combination into "http://127.0.0.1:8200". 

   But in production code, those are obtained from an environment variable <tt>APP_ADDRESS</tt> with a value such as <tt>vault.mycorp.com</tt>.

   <a name="DevAuthentication"></a>
   
   ### Dev Authentication

   A message is not issued for authentication unless it's unsuccessful: 
   "unable to initialize Vault client:"

   <tt>dev-only-token</tt> is hard-coded. But in production code, the <tt>VAULT_TOKEN</tt> environment variable is read by the app to retrieve a secure Token that is unique to each user for access to Vault. 
   And the Token's value should never be revealed in messages to ensure confidentiality.

   ### Write/Read Static secrets

   The program writes a <a target="_blank" href="https://developer.hashicorp.com/vault/tutorials/secrets-management/versioned-kv">static secret</a> named "password" with a value of "Hashi123", then reads it back. 
   But normal apps would usually just read secrets written by another program.
   
   <a name="VaultAPILibraries"></a>

   ### Vault API library functions
   
   Each programming language uses a different library to perform low-level functionality.

   https://developer.hashicorp.com/vault/api-docs/libraries
   lists them.

   In the dotnet (C#) repo, file <a target="_blank" href="https://github.com/hashicorp/hello-vault-dotnet/blob/main/quick-start/quickstart.csproj">quickstart.csproj</a> defines the library used.
   * "secret" is defined as the <strong>mountPoint</strong> 
   * "my-secret-password" is defined as the <strong>path</strong> 
   <br /><br />

   In Java/Spring:

   * function <tt>opsForVersionedKeyValue()</tt> 
   * <tt>put</tt> function to "data".
   <br /><br />

   In Rust, <a target="_blank" href="https://www.linkedin.com/in/jonathan-lawn-bb48851/">Jonathan Lawn</a>'s <a target="_blank" href="https://github.com/Metaswitch/vault-client">vault-client</a> is a Rust-based (generated based on Swagger spec) native client library to access HashiCorp Vault APIs. It's an alternative to <a target="_blank" href="https://www.linkedin.com/in/chrismacnaughton/">Chris MacNaughton</a>'s <a taget="_blank" href="https://crates.io/crates/hashicorp_vault">crates.io</a> <a target="_blank" href="https://lib.rs/crates/secret-vault">library</a>, a less featured client that covers a broader range of the Vault API.

   In Python:

   * hvac is the library at https://github.com/hvac/hvac
   * https://www.youtube.com/watch?v=wogkvUnaFtk How to use Python HVAC for Hashicorp Vault CRUD Operations
   * https://fakrulalam.medium.com/python-script-credentials-stored-in-hashicorp-vault-54ffa5ca2b04
  
   * https://developers.google.com/vault/quickstart/python
   * https://pypi.org/project/vault-cli/
   * https://pypi.org/project/pyvault/
   <br /><br />
  

   ### Expected output

   When we run the program, we expect that:<br />
   * After writing a secret, the program outputs "Secret written successfully.".
   * After reading the secrets successfully, the program outputs "Access granted!".
   <br /><br />

   Of course, in your own program, you can output whatever text you want.

3. View file <tt>run.sh</tt> file using <tt>cat</tt> or a text editor such as code (for VSCode):
 
   <pre><strong>cat run.sh</strong></pre>

   Notice it uses <tt>docker compose</tt> commands to bring processes down then up again:

   <pre>docker compose down --volumes
   docker compose up -d --build
   </pre>

   The <tt>--build</tt> parameter invokes a build referencing the <a href="#Dockerfile">Dockerfile</a>.

   Notice the dev Vault server is started with a parameter:

   <tt>-e 'VAULT_DEV_ROOT_TOKEN_ID=dev-only-token'</tt>

   In production, several mechanisms can be used to start the Vault server securely, including access to cloud provider secret managers.

   ### Source compilation

   In the Spring (Java) repo, command <tt>mvn clean package</tt> references the <tt>pom.xml</tt> file to compile the source code file App.java into file <tt>quickstart.jar</tt> in the <tt>target</tt> folder.

   <tt>java -jar target/quickstart.jar</tt> runs the result of App.java source file compilation.

   In the dotnet (C#) repo, command <tt>dotnet run Program.cs<tt> compiles the Program.cs source file.
   
   In the go repo, command <tt>go run main.go</tt> compiles the Go source and invokes the result.

4. If you want to keep the app running so you can make additional commands, insert a <tt>#</tt> character at the left edge of these commands to comment them out of executing:

   <pre><strong># docker stop "${container_id}" > /dev/null
   \# echo "Vault server has stopped."
   </strong></pre>

5. Make sure that Docker Desktop is runnning.


6. Restart Docker to clear it from a previous run.

7. Invoke the shell script:

   <pre><strong>./run.sh</strong></pre>

   Wait for various lines to appear until this appears:

   <pre>Secret written successfully.
Access granted!
Stopping Vault dev server..
Vault server has stopped.
   </pre>

   ### dev Vault
   
   To reduce manual efforts to add security necessary for production usage, 
   here Vault is invoked using its built-in "dev-only-token" rather than a cryptographically-created one used in production mode.

   <tt>container_id=$(docker run --rm --detach -p 8200:8200 -e 'VAULT_DEV_ROOT_TOKEN_ID=dev-only-token' vault:1.11.0)</tt>

1. The Vault -dev server is initiated with a "root" token:

   <pre><strong>curl -H "X-Vault-Request: true" -H "X-Vault-Token: root" http://127.0.0.1:8200/v1/sys/mounts | jq
   </strong></pre>

   <a target="_blank" href="https://www.youtube.com/watch?v=JDBcCvY0hmI&t=7m46s">VIDEO</a>:
   shows the output

2. Open the Vault Explorer GUI in the default internet browser (Chrome):

   <pre><strong>open http://127.0.0.1:8200/ui/vault/secret
   </strong></pre>

   sign-in

<hr />

<a name="sample-app"></a>

## sample-app

1. Navigate out of quick-start and into:

   <pre><strong>cd sample-app</strong></pre>

   <a name="run.sh"></a>
   
   ### run.sh

2. Let's run it, then analyze the output:

   <pre><strong>./run.sh
   </strong></pre>

    If you get this response, it means you need to get Docker Desktop running:
    
    <pre>Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
    </pre>

    Otherwise, you should see a bunch of lines scroll by until ending with this list and statuses:

   <pre>
    [+] Running 8/8
      ⠿ Network sample-app_default                       Created   0.1s 
      ⠿ Volume "sample-app_trusted-orchestrator-volume"  Created   0.0s 
      ⠿ Container sample-app-secure-service-1            Healthy  11.1s
      ⠿ Container sample-app-database-1                  Healthy  11.1s
      ⠿ Container sample-app-vault-server-1              Healthy  11.0s
      ⠿ Container sample-app-trusted-orchestrator-1      Healthy  11.9s
      ⠿ Container sample-app-app-1                       Healthy  22.7s
      ⠿ Container sample-app-healthy-1                   Started  22.9s
   </pre>


   <a name="ContainersDiagram"></a>

   ### Containers diagram (with ports)

   Each component illustrated in this diagram is a container running within Docker.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1668013977/hello-vault-flow0-1920x1080_eigfyk.jpg">
   <img alt="hello-vault-flow0-1920x1080.jpg" width="1920" height="1080" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1668013977/hello-vault-flow0-1920x1080_eigfyk.jpg"></a>

   * <strong>app</strong> - "Web App" listens for API calls from run.sh. Code for this is what app developers copy from for their own app. Java developers would code the <tt>App.java</tt> file which is compiled into the <strong>app.jar</strong> executable. Repos for other programming languages would run that language's source file.

   * <strong>vault-server</strong>, initiated by <tt>/vault/entrypoint.sh</tt>, contains a <tt>default.conf.template</tt> file which issues the "hello world!" response if API calls succeed. This effort to setup a built-in Vault dev (unsecure) server is equivalent to the command:
   
      <ul><pre>vault server -dev</pre></ul>

      BTW Vault has <a target="_blank" href="https://developer.hashicorp.com/vault/docs/secrets">other Secret Engines</a> to handle other types of secrets not demonstrated by this sample program, such as generation of SSH certificates, X.509 certificates for SSL/TLS, etc.

   * <strong>secure-service</strong> - a simulated 3rd party (mock) service <tt>docker-entrypoint</tt> that responds to calls authenticated by a static API key sent as the value of the <tt><strong>X-Vault-Token</strong></tt> HTTP header in each REST API call. The expected response is 200 from GET & LIST and 204 from POST, PUT, DELETE.
   
   * <strong>database</strong>, from <tt>docker-entrypoint.s</tt>, contains SQL to 1- create the database, 2- populate with data, 3- define roles 

   * <strong>trusted-orchestrator</strong> is created from a <tt>Dockerfile</tt> used to build its container image and an <tt><strong>entrypoint.sh</strong></tt> at the root. It is invoked when the service becomes active. It is the mechanism that launches applications and injects them with a Secret ID at runtime; typically something like Terraform, K8s, or Chef. ??? See https://learn.hashicorp.com/tutorials/vault/secure-introduction#trusted-orchestrator 
      
   * <strong>app-healthy</strong> - a dummy service to block "docker compose up -d" from returning until all services are up & healthy

   PROTIP: Run the shell files provided rather than running your own docker up/down commands. This would enable others to more easily help you recreate issues while debugging.

3. View file <tt>run.sh</tt> using <tt>cat</tt> or a text editor such as code (for VSCode).
 
   <pre><strong>cat run.sh</strong></pre>

   The two commands invokes <tt>docker compose</tt> first down, then up again.

   <pre>docker compose down --volumes
   docker compose up -d --build
   </pre>

   ### docker-compose.xml

   <tt>docker compose</tt> commands always invoke the <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/docker-compose.yml">docker-compose.yml</a> in the same folder. It contains declarations to setup containers.

   NOTE: Within hello-vault-dotnet</a>, a separate <a target="_blank" href="https://github.com/hashicorp/hello-vault-dotnet/blob/main/sample-app/docker-compose.arm64.yaml">docker-compose.arm64.yaml</a> is, at time of writing, needed to work around mssql/server's incompatibility with arm64 architecture.


<a name="docker-compose.yml"></a>

1. Let's use a text editor code (VSCode) to look at the <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/docker-compose.yml">docker-compose.yml</a> file within the sample-app folder:

   <pre><strong>cat docker-compose.yml</strong></pre>

   The file begins with ...

   <pre>version: "3.9"
services:
&nbsp;
  app:
    build: WebService/
    environment:
      VAULT_ADDRESS:                    http://vault-server:8200
      VAULT_APPROLE_ROLE_ID:            demo-web-app
      VAULT_APPROLE_SECRET_ID_FILE:     /tmp/secret
      VAULT_API_KEY_PATH:               api-key
      VAULT_API_KEY_FIELD:              api-key-descriptor
      VAULT_DATABASE_CREDENTIALS_ROLE:  dev-readonly
      DATABASE_DATA_SOURCE:             tcp:database,1433
      DATABASE_INITIAL_CATALOG:         example
      DATABASE_TIMEOUT:                 30
      SECURE_SERVICE_ENDPOINT:          http://secure-service/api
   ...
   </pre>

   This tutorial will come back to this file.

   Here's the correspondance between definition and container name above.

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="bottom"><th> docker-compose.yaml </th><th> Container/Volume in Docker</th></tr>
   <tr valign="top"><td> app:
      </td><td> sample-app-app-1   </td></tr>
   <tr valign="top"><td>vault-server:
   </td><td> sample-app-vault-server-1  </td></tr>
   <tr valign="top"><td> trusted-orchestrator:
   </td><td> sample-app-trusted-orchestrator-1 </td></tr>
   <tr valign="top"><td> database:
      </td><td> sample-app-database-1 </td></tr>
   <tr valign="top"><td> secure-service:
      </td><td> sample-app-secure-service-1 </td></tr>
   <tr valign="top"><td> healthy:
      </td><td> sample-app-healthy-1   </td></tr>
   <tr valign="top"><td> volumes:
      </td><td> sample-app_trusted-orchestrator-volume  </td></tr>
   </table>



   ### Edit run-tests.sh

1. Edit the <tt>run-tests.sh</tt> file (within folder sample-app) by using <tt>code</tt> to use VSCode) or other utility:

    <pre><strong>code run-tests.sh
    </strong></pre>

1. If you don't want processes to stop after the script ends (so you can issue more commands), type a "#" comment character in front of the <tt>docker compose down</tt> command line, like this:

    <pre># bring down the services on exit
    # trap 'docker compose down --volumes' EXIT
    </pre>

    If you comment out the <tt>compose down</tt> and save the file, 
    processes will continue to run unless you break out by pressing <strong>command+C</strong>.

1. Restart Docker.
   
1. Let's run it, then analyze the output:

   <pre><strong>./run-tests.sh
   </strong></pre>

   Wait for a bunch of lines to scroll by until ending with this list and statuses:

   <pre>
    [+] Running 6/6
    ⠿ Container sample-app-database-1              Healthy               1.7s
    ⠿ Container sample-app-secure-service-1        Healthy               1.7s
    ⠿ Container sample-app-vault-server-1          Healthy               1.7s
    ⠿ Container sample-app-trusted-orchestrator-1  Healthy               1.7s
    ⠿ Container sample-app-app-1                   Healthy               2.3s
    ⠿ Container sample-app-healthy-1               Started               2.6s
   </pre>

   These lines are output from the app (which we'll examine next):

   <pre>[TEST 1]: output: {"message":"hello world!"}
   [TEST 1]: OK
   [TEST 2]: output: [{"id":1,"name":"Rustic Webcam"},{"id":2,"name":"Haunted Coloring Book"}]
   [TEST 2]: OK
   </pre>

   These lines are output from Docker won't appear if you edited out the removal command:

   <pre>
    [+] Running 8/8
    ⠿ Container sample-app-healthy-1                 Removed    0.0s
    ⠿ Container sample-app-app-1                     Removed    4.4s
    ⠿ Container sample-app-trusted-orchestrator-1    Removed    0.2s
    ⠿ Container sample-app-secure-service-1          Removed    0.2s
    ⠿ Container sample-app-vault-server-1            Removed    0.2s
    ⠿ Container sample-app-database-1                Removed    0.3s
    ⠿ Volume sample-app_trusted-orchestrator-volume  Removed    0.0s
    ⠿ Network sample-app_default                     Removed    0.0s
   </pre>

   <a name="PortsUsed"></a>
   
   ### Container Ports used by each container

1. If you commented out, you can obtain the commands used to create each Docker process along with each of their ports. To avoid widening the width of the Terminal, specify columns using this command:

   <!--
   <pre><strong>docker ps --format "table {{.Names}}\t{{.Ports}}"
   </strong></pre>
   -->

   <pre>NAMES                               PORTS
sample-app-app-1                    0.0.0.0:8080->8080/tcp
sample-app-trusted-orchestrator-1   
sample-app-vault-server-1           0.0.0.0:8200->8200/tcp
sample-app-secure-service-1         0.0.0.0:1717->80/tcp
sample-app-database-1               0.0.0.0:5432->5432/tcp
   </pre>

   <a name="ContainerPorts"></a>
   
   ### Container invocations

   <!--
   <pre><strong>docker ps --format "table &#123;&#123;.Names&#125;&#125;\t&#123;&#123;.Command&#125;&#125;"
   </strong></pre>
   -->

   <pre>NAMES                               COMMAND
sample-app-app-1                    "java -jar /app.jar"
sample-app-trusted-orchestrator-1   "./entrypoint.sh"
sample-app-vault-server-1           "/vault/entrypoint.sh"
sample-app-secure-service-1         "/docker-entrypoint.…"
sample-app-database-1               "docker-entrypoint.s…"
   </pre>



<a name="Flowchart1"></a>

### [TEST 1] flow

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1668013977/hello-vault-flow1-1920x1080_bdq4je.jpg"><img alt="hello-vault-flow1-1900x1080.jpg" width="1900" height="1080" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1668013977/hello-vault-flow1-1920x1080_bdq4je.jpg"></a>

   NOTE: A similar explanation (for containers) is at <a target="_blank" href="https://www.youtube.com/watch?v=skENC9aXgco&t=16m48s" title="at HashiConf 2016 Managing Secrets in a Container Environment">this VIDEO</a> by <a target="_blank" href="https://www.linkedin.com/in/jefferai/">Vault Principal Engineer Jeff Mitchell</a>.

1. View the <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/run-tests.sh">run-tests.sh</a> file (within sample-app) using the built-in <tt>cat</tt> command or use a text editor code (VSCode):

   <pre><strong>cat run-tests.sh</strong></pre>

   The shell script <tt>run-tests.sh</tt> invokes two calls to the Web App:

   "[TEST 1]" = <tt>POST /api/payments</tt> obtains <strong>static</strong> API keys to call the payments API

   "[TEST 2]" = <tt>GET /api/products</tt> obtains <strong>dynamic</strong> credentials to call the products database 

### [TEST 1] flow

1. <tt>run-tests.sh</tt> calls <tt>POST /api/payments</tt> to <strong>write</strong> the <strong>static</strong> API keys to be used to call the payments API. The call can also be to a 3rd-party service (such as Twilio for mail, SMS, PayPal, etc.). 

2. The app calls Vault (at APP_ADDRESS) to get static secret.

3. The static API key and value is added into Vault. For our mock example, at the right side of the diagram, we manually store the API key to our Secure Server using this Vault CLI command:

   <pre>vault kv put kv-v2/api-key apikey=my-secret-key
   </pre>

   ### Output logs

   Print logs that were output from the app process:

   <pre><strong>docker logs sample-app-app-1

   <pre>...
   2022/01/11 20:29:01 getting secret api key from vault
   2022/01/11 20:29:01 getting secret api key from vault: success!
   [GIN] 2022/01/11 - 20:29:01 | 200 |    7.366042ms |   192.168.192.1 | POST     "/payments"
   </pre>

   BTW, in production, there would be a background process that forwards logs to a central collection SIEM (Security Information and Event Management) system such as Splunk. This log centralization provides a detailed enterprise-wide history of operations that makes security forensics possible by the corporate SOC (Security Operations Center).

4. The app adds the static API key in the HTTP header before calling the secure-service.

5. The response from the app to <tt>run-tests.sh</tt> is "hello world".


<a name="Flowchart2"></a>

### [TEST 2] flow

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1668013977/hello-vault-flow2-1920x1080_vkexol.jpg"><img alt="hello-vault-flow-1900x1080.jpg" width="1900" height="1080" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1668013977/hello-vault-flow2-1920x1080_vkexol.jpg"></a>

(I am making a video to gradually (logically) reveal each component in this flow:)

6. <tt>run-tests.sh</tt> calls <tt>GET /api/products</tt> to access the products database based on <strong>dynamic</strong> credentials obtained by Vault.

7. Instead of using long-lived static passwords sitting around to be stolen, the app calls Vault to request dynamic DB credentials.

   * https://aiven.io/blog/secure-your-db-with-vault provides code for populating PostgreSQL.
   <br /><br />

8. Vault uses a pre-defined <a target="_blank" href="https://developer.hashicorp.com/vault/docs/secrets/databases/postgresql">PostgreSQL Database Secrets Engine <tt>postgresql-database-plugin</tt></a> to request that temporary (short-lived) credentials be created dynamically. The equivalent CLI command is:

   <pre>vault write database/config/aiven-for-postgresql-database \
    plugin_name=postgresql-database-plugin \
    allowed_roles="metrics-readwrite" \
    connection_url="postgresql://{{username}}:{{password}}@[HOST]:[PORT]/defaultdb" \
    username=[USER] \
    password=[PASSWORD]
    </pre>

    https://www.vaultproject.io/api-docs/secret/databases/postgresql
   
9. The database creates a username and password based on ROLE defined in its <tt>3-define</tt> file:
   
   <pre>CREATE ROLE vault_db_user LOGIN SUPERUSER PASSWORD 'vault_db_password';
   CREATE ROLE readonly NOINHERIT;
   GRANT SELECT ON ALL TABLES IN SCHEMA public TO "readonly";
   </pre>

   NOTE: Although PostgreSQL is used in this sample, Vault also works with MySQL, Microsoft SQL Server, and other database vendors.
   
    ### Vault Cubbyholes

10. Vault stores the credentials from the database in a <strong>Cubbyhole</strong> Vault creates. "Cubbyhole" is an American phrase for a small safe place allocated to each individual. Each Cubbyhold can be read only once. It's also temporary in that it has an expiration date. Also, only a specific user can retrieve it. Even Vault's root account cannot read the contents of an individual Cubbyhole. -- see <a target="_blank" href="https://cloudacademy.com/course/hashicorp-vault/hashicorp-vault-cubbyhole/">COURSE at CloudAcademy.com</a>

    ### Secret ID and AppRole

    Vault assigns a <strong>SecretID</strong> used to retrieve the contents of a Cubbyhole.
    The SecretID is like a password associated with a <strong>AppRole</strong> definition, which is like a username.

    Functionally speaking, the token provides authorization to use an encryption key from Vault's keyring to decrypt the data. See:

    * <a target="_blank" href="https://www.youtube.com/watch?v=BkL_lYCeCxY">VIDEO:</a> Cubbyhold Vault GUI demo.
    * https://www.hashicorp.com/blog/how-and-why-to-use-approle-correctly-in-hashicorp-vault
    * https://developer.hashicorp.com/vault/tutorials/recommended-patterns/pattern-approle?in=vault%2Frecommended-patterns
    * <a target="_blank" href="https://www.youtube.com/watch?v=OIcIzFWjThM" title="Mar 9, 2018">VIDEO</a>: "Delivering Secret Zero: Vault AppRole with Terraform + Chef", with <a target="_blank" href="https://github.com/hashicorp/vault-guides/tree/master/identity/vault-chef-approle">repo</a> by SE Teddy Sacilowski references Seth Vargo's Chef + Vault <a target="_blank" href="https://www.hashicorp.com/blog/using-hashicorps-vault-with-chef">blog</a>/webinar
    <br /><br />

    ### Trusted Orchestrator

    Vault needs to send that Secret ID to the web-app through a <strong>Trusted Orchestrator</strong> (such as Kubernetes or Consul). 
 
1.  Rather than exposing database credentials in transmission, for safe delivery to the Web App, Vault <strong>"wraps"</strong> the SecretID (address) within a short-lived single-use <strong>Wrapper token</strong>. 
 
    * https://www.vaultproject.io/docs/concepts/response-wrapping 
    * https://developer.hashicorp.com/vault/docs/concepts/response-wrapping
    * https://learn.hashicorp.com/tutorials/vault/cubbyhole-response-wrapping
    * <a target="_blank" href="https://www.youtube.com/watch?v=BkL_lYCeCxY">VIDEO</a>: Using the Cubbyhole Secret's Engine in HashiCorp Vault to Securely Share Secrets
    <br /><br />

2.  The Trusted Orchestrator delivers the wrapping token to the web-app.
   
3.  The Web App receives the wrapping token and "unwraps" it to obtain the SecretID associated with an <strong>AppRole</strong>.

    BTW, the wrapping token can be revoked (just like any other token) to minimize risk of unauthorized access (especially in a "Break Glass" stop-loss action after a breach).

4.  A one-time temporary token ??? is returned by Vault to the web-app.
    
5.  The app uses the Vault-provided credentials to access the database.

    Vault ensures that retrieval of a Cubbyhole's contents can only occur once. 
    Vault logs an error is logged (and sent to the SOC) if additional retrievals are attempted.
    Thus, the library can detect malfeasance with the response-wrapping token.

6.  The database returns data to the web-app, like it always does.
    
7.  The data returned from the database is output by run-tests.sh 

    <tt>[TEST 2]: output: [{"id":1,"name":"Rustic Webcam"},{"id":2,"name":"Haunted Coloring Book"}]</tt>

    <tt>OK</tt> is output after the response is validated.


    ### Security alerts

    Most enterprises today have a SOC (Security Operations Center) to constantly monitor for anomalous events such as intrusion attempts.

8.  Attempts at retrieving a wrapped token a second time returns a HTTP 400 error, which should trigger a security alert to the SOC to handle the new incident. This is typically tested during Penetration testing pre-production. TODO: Code (an additional shell file) for penetration testers to perform the malicious request to ensure it trigger alerts during penetration testing.


<hr />

## Diving into run-tests.sh

<a name="APP_ADDRESS"></a>
   
### APP_ADDRESS

1.  Notice <tt>APP_ADDRESS</tt> is hard-coded, referencing what was established by <a href="#run.sh">run.sh</a>

    <tt>APP_ADDRESS="http://localhost:8080"</tt>

    Notice the "http" protocol, which uses unencrypted communication.

    But in production, the program would instead <strong>retrieve</strong> APP_ADDRESS from a system variable. Also, production APP_ADDRESS would, instead of "http", specify use of secure "https" protocol (on default port 443).
    
    Also, Production code would retrieve the <tt>APP_TOKEN</tt> to ensure valid identity for using Vault.


    <a name="Dockerfile"></a>

    ### Dockerfile

2.  <tt>docker compose up -d --build --quiet-pull</tt> builds based on the <a target="_blank" href="https://github.com/bomonike/hello-vault-spring/blob/main/sample-app/Dockerfile">Dockerfile</a>

    <pre>
    FROM maven:3.8.4-openjdk-17 as build
    &nbsp;
    COPY . /build-project
    WORKDIR /build-project
    &nbsp;
    RUN mvn clean package -DskipTests
    &nbsp;
    FROM openjdk:17
    EXPOSE 8080
    COPY --from=build /build-project/target/hello-vault-spring.jar /app.jar
    ENTRYPOINT ["java","-jar", "/app.jar"]
    &nbsp;
    HEALTHCHECK \
        --start-period=1s \
        --interval=10s \
        --timeout=1s \
        --retries=30 \
            CMD curl --fail -s http://localhost:8080/healthcheck || exit 1
    </pre>

    ### Occassional version update
    
    The top line FROM clause retrieves from maven hub openjdk version 17.
    This would needs to be updated occassionally.

    build-project folder???

3.  This invokes Maven to compile programs:
   
    <pre><strong>RUN mvn clean package -DskipTests</strong></pre>

    Although unspecified in code, Maven always open file <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/pom.xml">pom.xml</a>

4.  View file <tt>pom.xml</tt> using <tt>cat</tt> or a text editor such as code (for VSCode).
 
    <pre><strong>cat pom.xml</strong></pre>

    In the file, note that versions need to be updated over time. See
    * https://github.com/spring-projects/spring-boot/releases is v2.7.5 as of October, 2022
    * https://github.com/spring-projects/spring-framework/releases
    <br /><br />

5.  File <tt>HelloVaultSpringApplicationTests.java</tt> within folder path <tt>/test/java/com/hashicorp/hellovaultsprint</tt> is compiled:

    <pre>
    package com.hashicorp.hellovaultspring;
    &nbsp;
    import org.junit.jupiter.api.Test;
    import org.springframework.boot.test.context.SpringBootTest;
    &nbsp;
    @SpringBootTest
    class HelloVaultSpringApplicationTests {
    &nbsp;
        @Test
        void contextLoads() {
        }
    &nbsp;
    }
    </pre>


    which specifies java to compile using  
   
6.  Copy the app.jar file created to the root folder:

    <tt>COPY --from=build /build-project/target/hello-vault-spring.jar /app.jar</tt> 

7.  Invoke the <tt>app.jar</tt> program from above:
 
    <tt>ENTRYPOINT ["java","-jar", "/app.jar"]</tt>

  
    ### Invoking the app HEALTHCHECK

8.  The <tt>HEALTHCHECK</tt> in the <a href="#Dockerfile">Dockerfile</a> makes a call to the <tt>healthcheck</tt> API to the server.

9.  The "trap" line is executed after the service exits:

    <pre>/# bring down the services on exit
    trap 'docker compose down --volumes' EXIT
    </pre>

10. This retrieves from Vault's payments secret:

    <pre># TEST 1: POST /payments (static secrets)
    output1=$(curl --silent --request POST "${APP_ADDRESS}/payments")
    </pre>

    That is what causes the response:

    <pre>[TEST 1]: output: {"message":"hello world!"}</pre>

    "hello world" was issued from <a target="_blank" href="https://github.com/bomonike/hello-vault-spring/blob/main/sample-app/setup/secure-service/default.conf.template">file default.conf.template</a> within folder /sample-app/setup/secure-service/default.conf.template which defines server responses:

    <pre>
    server {
        listen       80;
        server_name  localhost secure-service;
        default_type application/json;
     &nbsp;
        location /healthcheck {
            return 200 "{\"message\":\"ok\"}";
        }
     &nbsp;
        location /api {
            if ($http_x_api_key != "${EXPECTED_API_KEY}") {
                return 401 "{\"error\":\"unauthorized\"}";
            }
            return 200 "{\"message\":\"hello world!\"}";
        }
     &nbsp;
        location / {
            return 404 "{\"error\":\"resource not found\"}";
        }
    }
    </pre>

    QUESTION: Can you think of a better response than "hello world". 
    How about "posted"?

    QUESTION: In Production, "localhost" would not be there. What replaces it?

11. This obtains the products secret:

    <pre># TEST 2: GET /products (dynamic secrets)
    output2=$(curl --silent --request GET "${APP_ADDRESS}/products")
    </pre>

    That curl CLI command is what causes response:

    <pre>[TEST 2]: output: [{"id":1,"name":"Rustic Webcam"},{"id":2,"name":"Haunted Coloring Book"}]
    [TEST 2]: OK
    </pre>

    PROTIP: "Rustic Webcam" and "Haunted Coloring Book" are returned because the database was loaded from the <a target="_blank" href="https://github.com/bomonike/hello-vault-spring/blob/main/sample-app/setup/database/2-data.sql">2-data.sql</a> file within folder /setup/database:
    
    <pre>INSERT INTO products (name)
    VALUES
        ('Rustic Webcam'),
        ('Haunted Coloring Book');
    &nbsp;
    INSERT INTO customers (first_name, last_name, email, phone)
    VALUES
        ('Winston', 'Higginsbury', 'higgs@example.com',    '555-555-5555'),
        ('Vivian',  'Vavilov',     'vivivavi@example.com', '555-555-5556');
    </pre>     



    ### Create username and password in Database

12. This <tt>2-data.sql</tt> was invoked to define a role used to create a user within the database:

    <pre>CREATE ROLE vault_db_user LOGIN SUPERUSER PASSWORD 'vault_db_password';
    CREATE ROLE readonly NOINHERIT;
    &nbsp;
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO "readonly";
    </pre>


    ### Ad hoc request

13. Open another Terminal to define the <a href="#APP_ADDRESS">APP_ADDRESS defined earlier</a>:

    <pre>APP_ADDRESS="http://localhost:8080"
    </pre>

14. Issue an ad hoc call:

    <pre><strong>echo "$APP_ADDRESS"
    curl --silent --request GET "${APP_ADDRESS}/products"
    </strong></pre>


    ### Inside the app

15. Set breakpoint in the Java program: ???



<hr />

<a name="Renewal"></a>

## Renewal of wrapping tokens

We know that static passwords with unlimited validity are bad because that provides time when secrets can be stolen.

So we improve security by limiting the duration when each secret is valid by giving each secret a limited <strong>Time To Live (TTL)</strong> before expiration. We do this by creating a <strong>token</strong> that grants access with a specific TTL.

Monitoring is necessary to achieve a balance between two extremes:

   * A token which provides longer time than needeed exposes the asset to risk of compromise.

   * A token which provides not enough time would cause delay and errors in processing, which we want to avoid.

We track how often either condition occurs. And we track the distribution of how long leases are actually needed in order to set the TTL a bit longer after the average time needed. 

PROTIP: Track the maximum time a lease is actually needed.

To reduce the disruption of apps experiencing expired tokens, we provide a way to <strong>renew</strong> tokens during a "grace period". Renewals are done instead or re-issuing tokens because the cryptographic processing to create tokens require some effort. Renewals take less computing effort.

Thus, we have two TTLs for each component:

   * A default TTL for each individual token.

   * A maximum TTL when no more renewals are allowed, and authentication or reconnection is required again.

Additionally, there can be limits on the number of times a lease/token can be renewed.

<a target="_blank" href="https://github.com/hashicorp/hello-vault-go/blob/main/sample-app/pics/renewal-diagram.svg">This diagram</a> illustrates the relationship of renewals among components.
   
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1667793012/vault-renewal-flow-1496_x1054_tt5bqm.jpg"><img alt="vault-renewal-flow-1496 x1054.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1667793012/vault-renewal-flow-1496_x1054_tt5bqm.jpg"></a>

Notice that the TTL is longest at the top component and gets shorter as we go down the stack toward the asset:

   * Wrapping tokens managed by the Trusted Orchestrator have a TTL that is the token_max_ttl
   * Account authorization tokens managed by Vault 
   * Each lease to access the database (the asset) has the shortest TTL
   <br />

Each component has a different name for each TTL:

   * Each token for authorization into the system must be renewed before the <strong>token_ttl</strong>. When the maximum number of token renewals or <strong>token_max_ttl</strong> is reached, another login is necessary again.

   * The <strong>wrapping-token</strong> lifetime is limited by the token_max_ttl.

      The lifetime of a wrapped token should be less than the lifetime of the SecretID being wrapped.

   * If an account needs to login again, that account must also getcreds and reconnect to the database.

   * Each lease to access the database must be renewed before the <strong>default_ttl</strong>. When the maximum number of lease renewals or <strong>max_ttl</strong> is reached, reconnection is necessary again.

Now let's analyze the coding to achieve the above.

Coding for renewal is performed by <a target="_blank" href="https://github.com/hashicorp/hello-vault-go/blob/main/sample-app/vault_renewal.go">vault_renewal.go</a>. Currently, only hello-vault-go has renewal logic.

   <a target="_blank" href="https://www.youtube.com/watch?v=JvPDGcl9Rzs&t=24m49s">VIDEO</a>: this sample code uses an extraordinaryly short TTL (Time To Live) in order to trigger renewals to show how it works. In production, timeouts are <a target="_blank" href="https://www.youtube.com/watch?v=JvPDGcl9Rzs&t=31m38s">generally 30-60 minutes</a>.

   See <a target="_blank" href="https://www.youtube.com/watch?v=YrtTR0VDlDk">VIDEO:</a>
   Vault 1.2: Database Credential Rotation and Identity Tokens

   "Not only are credentials unmanaged and uncontrolled in the case of sprawl, but also present an availability risk, particularly as we adopt more complex architectures where there is a higher possibility of shared services. As a result, should Jane, a developer, rotate the password for the database credentials to Application A, without notifying Application B, Application B may suffer an outage as a result. Conversely, if we broker the permissions to the database based on identity, we can rotate the database password without any concern for degradation of service." --<a target="_blank" href="https://cloudedvision.substack.com/p/fcto-supplement-wait-identity-brokering">
   Sarah Polan</a>

Legacy services that can't handle token regeneration would use <strong>"periodic" tokens with no max_ttl</strong>. 

The equivalent CLI command to specify daily renewal period (repeatable indefinitely):

   <pre>vault write auth/token/create policies="example" period="24h"
   </pre>
   
   Limiting the number of times that a token can be renewed to 2 is set by <tt>-use-limit=2</tt>
   
The equivalent CLI command to specify daily renewal period (repeatable indefinitely):

   <pre>vault write auth/.../...approle \
   secret_id_num_uses=1 \
   secret_id_ttl=300s \
   token_ttl=1800s
   &nbsp;
   path "kv/pipeline-secrets" {
      capabilities="read"
   }
   </pre>


<hr />

## Security

Most enterprises today have a SOC (Security Opertions Center) to constantly monitor to anomalous events.

During Penetration testing, we want to ensure that attempts to obtain data triggers alerts.

<hr />

## Performance

You might be wondering:

> "Doesn't creating a new username and password with every session add a lot of overhead on the database server?"

To answer that question, internally HashiCorp has a benchmarking tool based on use of <a target="_blank" href="https://www.wikiwand.com/en/Vegeta_(software)">Vegata</a>, first released August 13, 2013 by <a target="_blank" href="https://www.linkedin.com/in/tsenart">Tomás Senart from Portugal</a>.

Because Vegata is written in Go and thus compiled to a single binary, no addtional install of runtimes is needed (unlike JMeter). There is <a target="_blank" href="https://hub.docker.com/r/peterevans/vegeta">an image from Docker Hub</a>. 

Articles:
   * https://geshan.com.np/blog/2020/09/vegeta-load-testing-primer-with-examples/
   * https://medium.com/@carlosaugustosouzalima/do-you-need-to-run-load-tests-vegeta-to-the-rescue-7e8818127a65
   * https://www.reddit.com/r/golang/comments/uo3flw/vegeta_http_load_testing_tool_written_in_go/
   <br /><br />

Articles about install on various platforms:
   * https://geshan.com.np/blog/2020/09/vegeta-load-testing-primer-with-examples/
   for running on macos - Geshan Manandhar | 06-Sep-2020
   * https://www.scaleway.com/en/docs/tutorials/load-testing-vegeta/
   for running on Linux
   * https://www.kimsereylam.com/aws/2018/12/21/vegeta-load-test.html
   for running on Windows
   * https://serialized.net/2017/06/load-testing-with-vegeta-and-python/
   using Python in Jupyter Notebooks
   <br /><br />

BTW, if you're wondering what "it's 9000!" means, see <a target="_blank" href="https://www.youtube.com/watch?v=V7O5JY4uh-I">this Know Your Meme</a> explanation.


<hr />

## Dynamic Database credentials within Kubernetes

<a target="_blank" href="https://www.youtube.com/watch?v=KIAXQr17-WQ&t=34m36s" title="Dec 20, 2019">VIDEO</a>:
"Dynamic Database Credentials with Vault and Kubernetes"</a>
and <a target="_blank" href="https://www.hashicorp.com/blog/dynamic-database-credentials-with-vault-and-kubernetes" title="Dec 19, 2019">
associated blog of the same name</a> by Nic Jackson with Anubhav Mishra references

1. Setup a Kubernetes instance with a dev. Vault service and open-source Postgres database.

   https://github.com/nicholasjackson/demo-vault
   
1. Within Vault, enable database secrets engine at (path): database/

   vault secrets enable database

2. Apply the ???

   kubectl apply -f ./config/postgres.yml

3. Establish database: Vault connects to database for the first time, using initial credentials, no SSL (which are OK since there is not data yet):

   <pre>vault write database/config/wizard plugin_name=postgresql-database-plugin \
   connection_url="postgresql://{username}}:{{password}}@postgres:5432/wizard/sslmode=disable" \
   verify_connection=false \
   allowed_roles="*" \
   username="iampostgres" password="password"
   </pre>

   The above is a one-time action to initialize.

4. Rotate root credentials and store in Vault:

   <pre>vault write --force /database/rotate-root/wizard
   </pre>

5. Log in the database server:

   <pre>kubectl exec -it postgres-123456789-abcde sh
   </pre>

6. Use the Postgres terminal:

   <pre>psql -U postgres
   Password for user postgres: iampostgres
   password
   </pre>

7. At the <tt>postgres=#"</tt> prompt get back:

   exit

8.  Create a role (named the user name) using PSQL accepting variable user name, password, expiration date:

   <pre>vault write database/roles/db-app 
   db_name=wizard \
   connection_statements="CREATE ROLE \"{{name}}\";\" WITH LOGIN PASSWORD {{password}}' VALID UNTIL {{expiration}}'; \
   GRANT SELECT ON ALL TABLES IN SCHEMA public TO \"{{name}}\";\" \
   revocation_statements="ALTER ROLE \"{{name}}\" NOLOGIN;" \
   default_ttl="1h" \
   max_ttl="24h"
   </pre>

9.  [43:25] 

   <pre>vault read database/creds/db-app
   </pre>

10. To get into Kubernetes, use policy file <tt>web-policy.hcl</tt> to only allow reading:

   <pre>path "database/creds/db-app" {
      capabilities = ["read"]
   }
   </pre>

   <pre>vault policy write web-dynamic ./config/web-policy.hcl
   </pre>

11. Write:

   <pre>vault write auth/kubernetes/role/web \
   bound_service_account_names-web \
   bound_service_account_namespaces=default \
   policies=web_dynamic \
   ttl=1h
   </pre>

12. Run:

   <pre>kubectl apply -f ./config/web-policy.hcl
   </pre>

13. Run:

   <pre>kubectl describe pod web-deployment-...
   </pre>

   Notice that the vault-agent is automatically added.

14. Get into web pod:

   <pre>kubectl exec -it $(kubectl get pods --selector "app=web" -o jsonpath=="{.items[0].metadata.name}") -c web -- sh
   </pre>

15. Get into web pod to view database connection string:

   <pre>cd /vault/secrets
   cat db-creds
   </pre>

   <pre>{
      "db_connection": "host=postgres port=5432 user=v-kubernet-db-app-... password=... dbname=wizard sslmode=disable"
   }
   </pre>

16. exit

   Notice that the second pod has different username and password generated:

17. Get into web pod:

   <pre>kubectl exec -it $(kubectl get pods --selector "app=web" -o jsonpath=="{.items[0].metadata.name}") -c web -- sh
   </pre>






<hr />


## References

* https://medium.com/hashicorp-engineering/essential-elements-of-vault-part-1-5a64d3de3be8
* https://medium.com/hashicorp-engineering/essential-patterns-of-vault-part-2-b4d34976f1dc

* <a target="_blank" href="https://www.youtube.com/watch?v=5Y-EeH_j47I">VIDEO: Secret Zero Problem Solved for HashiCorp Vault</a> by TeKanAid, with <a target="_blank" href="https://tekanaid.com/posts/secret-zero-problem-solved-for-hashicorp-vault/">associated blog</a>

* https://www.hashicorp.com/resources/vault-response-wrapping-makes-the-secret-zero-challenge-a-piece-of-cake


https://speakerdeck.com/misug/vault-response-wrapping-makes-secret-zero-challenge-a-piece-of-cake?slide=7
with <a target="_blank" href="https://github.com/misurellig/hashitalks-demo/">demo repo</a> by <a target="_blank" href="https://linkedin.com/in/giusseppe-misurelli-5378292">Giusseppe Misurelli</a>
(author of https://github.com/misurellig/terraform-vault-identities)

   * https://github.com/averche/vault-guides
   <br /><br />

https://fakrulalam.medium.com/python-script-credentials-stored-in-hashicorp-vault-54ffa5ca2b04

