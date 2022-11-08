---
layout: post
date: "2022-11-03"
file: "hello-vault"
title: "Hello-Vault"
excerpt: "How to code your app to use HashiCorp Vault to write and read static secrets and eliminate database password theft with cubbyholes and wrapped secrets"
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

## Why this?

Keeping secrets secret is a fundamental skill for all developers, especially in today's hostile internet full of scammers, ransomware gangs, and state-sponsored terrorism using "killware".

This is like working on your TV the different remotes and logins to setup different streaming services.
Once you go through the motions, you can get through quickly (for awhile until you change TV).

<a target="_blank" href="https://www.youtube.com/watch?v=JvPDGcl9Rzs">VIDEO: Meet the team which created this talk about their sample code (in Go)</a>.

## What does this contribute?

{% include whatever.html %}

This article provides a step-by-step deep-dive tour, with commentary, contrasting code across several repositories created by developers inside and outside HashiCorp. 

This article takes a deep dive into sample (template) code within a GitHub repo.
This has features other sample code lack:

   * A run.sh shell file that creates servics needed within Docker Compose containers
   * A run-tests.sh that calls the program's APIs
   * The scripts work on new Apple M1 ARM64 chips as well as older Intel x86 macOS machines

   * Containers created include a local instance of HashiCorp Vault for the app to store and retrieve secrets
   * A database able to communicate with Vault to dynamically create credentials
   * Example of how to generate secrets dynamically instead of using long-running secrets for others to steal

   * The same app in other languages: Go, dotnet C#, Java, Ruby to compare and learn

1. Obtain the repo for your language of choice. For example:

   <pre><strong>git clone https://github.com/hashicorp/hello-vault-spring
   cd hello-vault-spring
   </strong></pre>

   * https://github.com/hashicorp/hello-vault-bash (under construction)
   * https://github.com/hashicorp/hello-vault-dotnet (C# with MS-SQL)
   * https://github.com/hashicorp/hello-vault-go
   * https://github.com/hashicorp/hello-vault-python (under construction)
   * https://github.com/hashicorp/hello-vault-spring (Maven, Java) using https://spring.io/projects/spring-vault
   * https://github.com/hashicorp/hello-vault-ruby
   * https://github.com/hashicorp/hello-vault-rust (under construction)
   <br /><br />

   Each repo uses <strong>Docker Compose</strong> to create a dev environment containing a dev Vault instance and an app database. All the example repos make calls to a PostgreSQL database, except for the C# (dotnet) example, which calls a MS-SQL database.

   These repos provides single shell scripts to make it easier than following guides such as:
   * https://spring.io/guides/gs/accessing-vault/
   * https://github.com/mp911de/spring-cloud-vault-config-samples
   <br /><br />

   Alternately, to install Vault using Terraform, etc. for production use, see:
   * https://github.com/averche/vault-guides
   <br /><br />

2. Each repo has two folders with two example apps:

   * <a href="#quick-start"><strong>quick-start</strong></a> to write a secret, then read that secret back

   * <a href="#sample-app"><strong>sample-app</strong></a> to make API calls (using curl CLI commands) to an app server which interacts with a database

   BTW Vault has <a target="_blank" href="https://developer.hashicorp.com/vault/docs/secrets">other Secret Engines</a> to handle other types of secrets not demonstrated by this sample program, such as generation of SSH certificates, X.509 certificates for SSL/TLS, etc.

<hr />

<a name="macOSInstall"></a>

## Install on macOS:

Let's dive in by installing pre-requities. Each technology has a different set of technologies:

1. On macOS, install the Apple XCode Command Line utilities, if needed.

1. Install OS package manager so that you can upgrade to the latest version with a single command.

   On macOS: Homebrew.

   <pre><strong>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   </strong></pre>
   
2. Install utilities using package manager. 

   On macOS:

   <pre><strong>brew install  curl  jq  tree</strong></pre>

   NOTE: Brew now knows to not re-install the latest version if it's already installed.

3. On newer macOS laptops with the M1 ARM chip:

   <pre><strong>sudo softwareupdate --install-rosetta
   </strong></pre>

4. Install the compiler for your language of choice:

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

   2. Expand the zip. Click Continue, Install. Password. Close.
   3. Verify SDK installed:

   <pre><strong>dotnet --list-sdks
   </strong></pre>

   Sample response:

   <pre>6.0.401 [/usr/local/share/dotnet/sdk]
   6.0.402 [/usr/local/share/dotnet/sdk]
   </pre>

   4. Install Visual Studo Code Unversal Stable version from https://code.visualstudio.com by clicking <a target="_blank" href="https://code.visualstudio.com/docs/?dv=osx">this link</a> for file "VSCode-darwin-universal.zip".
   5. Unzip.
   6. In /Applications, open "Visual Studio Code.app".
   7. Install the C# extension.
   8. Verify .NET runtimes (.NET Core) installed:

   <pre><strong>dotnet --list-runtimes
   </strong></pre>

   <pre>Microsoft.AspNetCore.App 6.0.9 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
   Microsoft.NETCore.App 6.0.9 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]
   </pre>

   <a target="_blank" href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/configure-language-version">C# versions</a>:<br />
   C# 11 is supported only on .NET 7 and newer versions.<br />
   C# 10 is supported only on .NET 6 and newer versions.<br />
   C#  9 is supported only on .NET 5 and newer versions.

   ### Install Ruby

   Ruby:

   ### Install Rust

   Rust:

   ### Install Python

   Python:

   <pre><strong>brew install python 
   python --version
   pip install virtualenv   # used to:
   python -m venv venv   # create venv enviornment to activate by:
   source venv/bin/activate  # for (venv) prompt to:
   pip install hvac   # needed for Python to work with HashiCorp Vault
   </strong></pre>

   <tt>virtualvenv</tt> is used to ensure that Python packages play nice with each other - so that other Python projects with competing or incompatible versions of the same add-ons (dependencies) don't collide with this package.

   ### Verify Java

5. Verify version to see if install took: 

   For Java/Spring:

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

6. Install the Docker Desktop. On macOS, see https://docs.docker.com/desktop/mac/apple-silicon/

   <pre><strong>brew install docker
   brew install docker-desktop
   </strong></pre>
   
   Alternately, instead of docker-compose, consider <a target="_blank" href="https://bmiguel-teixeira.medium.com/goodbye-docker-compose-hello-kubelet-75306472de27">Kublet static pod</a>.

   PROTIP: Get the Docker Desktop logo on your Mac Taskbar: pinch four fingers on your trackpad to drag and drop the logo onto your Taskbar.
   You should see the Docker logo when you point the mouse at the top of your screen.

7. Verify Docker version:

   <pre><strong>docker compose version
   </strong></pre>

   The response, at time of writing, was:

   <pre>
   Docker Compose version 2.12.2
   </pre>

8. Invoke the Docker desktop.
   
9. View file <tt>.gitignore</tt> using <tt>cat</tt> or a text editor such as code (for VSCode).
 
   <pre><strong>cat .gitignore</strong></pre>
   
   In the file, the contents of folder <tt>target/</tt> generated during each run is not uploaded to GitHub. Several target folders are generated.

   Several files generated by STS, IDEA IDE, NetBeans, and VSCode are also not uploaded.


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

   <tt>dev-only-token</tt> is hard-coded. But in production code, the <tt>APP_TOKEN</tt> environment variable is read by the app to retrieve a secure Token that is unique to each user for access to Vault. 
   And the Token's value should never be revealed in messages to ensure confidentiality.

   ### Write/Read Static secrets

   The program writes a <a target="_blank" href="https://developer.hashicorp.com/vault/tutorials/secrets-management/versioned-kv">static secret</a> named "password" with a value of "Hashi123", then reads it back. 
   But normal apps would usually just read secrets written by another program.
   
   ### Vault client library functions
   
   Each programming language uses a different library to perform low-level functionality.

   In the dotnet (C#) repo:

   * file <a target="_blank" href="https://github.com/hashicorp/hello-vault-dotnet/blob/main/quick-start/quickstart.csproj">quickstart.csproj</a> defines the library used.
   * "secret" is defined as the <strong>mountPoint</strong> 
   * "my-secret-password" is defined as the <strong>path</strong> 
   <br /><br />

   In Java/Spring:

   * function <tt>opsForVersionedKeyValue()</tt> 
   * <tt>put</tt> function to "data".
   <br /><br />

   In Python:

   * hvac is the library
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


<hr />

<a name="sample-app"></a>

## sample-app

1. Navigate out of quick-start and into:

   <pre><strong>cd sample-app</strong></pre>

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

   We'll next take a deep dive into each service.

   Since we're using Docker Compose, a <tt>docker-compose.yaml</tt> file declares how each service is setup. Here's the correspondance between definition and container name above.

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


   <a name="ContainersDiagram"></a>

   ### Containers diagram (with ports)

   Each component illustrated in this diagram is a container running within Docker.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1667768898/hello-vault-images-1920x1080_ctyelg.jpg">
   <img alt="hello-vault-flow0-1920x1080.jpg" width="1920" height="1080" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1667768898/hello-vault-images-1920x1080_ctyelg.jpg"></a>

   * <strong>app</strong> - "Web App" running <strong>app.jar</strong> compiled from <tt>App.java</tt>.

   * <strong>secure-service</strong> - a simulated 3rd party (mock) service <tt>docker-entrypoint</tt> that responds to calls authenticated by a static API key sent as the value to the <strong>X-Vault-Token</strong> HTTP header of the call. The response is 200 from GET & LIST and 204 from POST, PUT, DELETE.
   
   * <strong>database</strong>, from <tt>docker-entrypoint.s</tt>, contains SQL to 1- create the database, 2- populate with data, 3- define roles 

   * <strong>trusted-orchestrator</strong> is created from a <tt>Dockerfile</tt> used to build its container image and an <tt><strong>entrypoint.sh</strong></tt> at the root. It is invoked when the service becomes active. It is the mechanism that launches applications and injects them with a Secret ID at runtime; typically something like Terraform, K8s, or Chef. ??? See https://learn.hashicorp.com/tutorials/vault/secure-introduction#trusted-orchestrator 
      
   * <strong>vault-server</strong>, initiated by <tt>/vault/entrypoint.sh</tt>, contains a <tt>default.conf.template</tt> file which issues the "hello world!" response if API calls succeed.
   
   * <strong>app-healthy</strong> - a dummy service to block "docker compose up -d" from returning until all services are up & healthy


3. View file <tt>run.sh</tt> using <tt>cat</tt> or a text editor such as code (for VSCode).
 
   <pre><strong>cat run.sh</strong></pre>

   The two commands invokes <tt>docker compose</tt> first down, then up again.

   <pre>docker compose down --volumes
   docker compose up -d --build
   </pre>

   ### docker-compose.xml

   <tt>docker compose</tt> commands always invoke the <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/docker-compose.yml">docker-compose.yml</a> in the same folder. It contains declarations to setup containers.

   NOTE: <a target="_blank" href="https://github.com/hashicorp/hello-vault-dotnet/blob/main/sample-app/docker-compose.arm64.yaml">hello-vault-dotnet, as separate docker-compose.arm64.yaml</a> is, at time of writing, needed to work around mssql/server's incompatibility with arm64 architecture.

4. Let's use a text editor code (VSCode) to look at the <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/docker-compose.yml">docker-compose.yml</a> file within the sample-app folder:

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

   ### Edit run-tests.sh

1. Edit the <tt>run-tests.sh</tt> file (within folder sample-app) by using <tt>code</tt> to use VSCode) or other utility:

    <pre><strong>code run-tests.sh
    </strong></pre>

2. If you don't want processes to stop after the script ends (so you can issue more commands), type a "#" comment character in front of the <tt>docker compose down</tt> command line, like this:

    <pre># bring down the services on exit
    # trap 'docker compose down --volumes' EXIT
    </pre>

    If you comment out the <tt>compose down</tt> and save the file, 
    processes will continue to run unless you break out by pressing <strong>command+C</strong>.

3. Restart Docker.
   
4. Let's run it, then analyze the output:

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
    ⠿ Container sample-app-healthy-1                 Removed              0.0s
    ⠿ Container sample-app-app-1                     Removed              4.4s
    ⠿ Container sample-app-trusted-orchestrator-1    Removed              0.2s
    ⠿ Container sample-app-secure-service-1          Removed              0.2s
    ⠿ Container sample-app-vault-server-1            Removed              0.2s
    ⠿ Container sample-app-database-1                Removed              0.3s
    ⠿ Volume sample-app_trusted-orchestrator-volume  Removed              0.0s
    ⠿ Network sample-app_default                     Removed              0.0s
   </pre>

   <a name="PortsUsed"></a>
   
   ### Container Ports used by each container

5. If you commented out, you can obtain the commands used to create each Docker process along with each of their ports. To avoid widening the width of the Terminal, specify columns using this command:

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

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1667911521/hello-vault-flow1-1920x1080_ms4pee.jpg"><img alt="hello-vault-flow1-1900x1080.jpg" width="1900" height="1080" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1667911521/hello-vault-flow1-1920x1080_ms4pee.jpg"></a>

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

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1667911466/hello-vault-flow2-1920x1080_ksbfgd.jpg"><img alt="hello-vault-flow-1900x1080.jpg" width="1900" height="1080" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1667911466/hello-vault-flow2-1920x1080_ksbfgd.jpg"></a>

(I am making a video to gradually (logically) reveal each component in this flow:)

6. <tt>run-tests.sh</tt> calls <tt>GET /api/products</tt> to access the products database based on <strong>dynamic</strong> credentials obtained by Vault.

7. The app calls Vault to request dynamic DB credentials (instead of using long-lived static passwords).

8. Vault uses its pre-defined partnership with PostgreSQL to request that temporary (short-lived) credentials be created dynamically. The equivalent CLI command is:

   <pre>kv put secret/mysql/webapp db-name-"users" \
   username="admin" password="12345"
   </pre>
   
   Remember that the 3-define file contains:
   
   <pre>CREATE ROLE vault_db_user LOGIN SUPERUSER PASSWORD 'vault_db_password';
   CREATE ROLE readonly NOINHERIT;
   GRANT SELECT ON ALL TABLES IN SCHEMA public TO "readonly";
   </pre>

   NOTE: Although PostgreSQL is used in this sample, Vault also works with MySQL, Microsoft SQL Server, and other database vendors.
   
   To transmit created credentials securely to the Web App, Vault puts the secret in a <strong>cubbyhole</strong> for each user.

   "Cubbyhole" is an American phrase for a small safe place allocated to each individual.

   Even the root account cannot read the contents of an individual cubbyhole.
   -- see <a target="_blank" href="https://cloudacademy.com/course/hashicorp-vault/hashicorp-vault-cubbyhole/">COURSE at CloudAcademy.com</a>

9. Rather than exposing the client token during transmission, for safe delivery to the Web App, Vault has a <strong>Trusted Orchestrator</strong> figuratively <strong>"wrap"</strong> that secret within a short-lived single-use token. 

   The token sent to the Web App acts as a pointer to the user's Cubbyhole.
 
10. The Web App receives the wrapping token for "unwrap" by retrieving the secret from its cubbyhole ???

    Note that retrieval can only occur once. An error is logged (and sent to the SOC) if additional retrievals are attempted.
    Thus, the library can detect malfeasance with the response-wrapping token.

    Even the system who created the initial token won't see the original value. 
    See https://learn.hashicorp.com/tutorials/vault/cubbyhole-response-wrapping

    Functionally speaking, the token provides authorization to use an encryption key from Vault's keyring to decrypt the data:
    * https://learn.hashicorp.com/tutorials/vault/cubbyhole-response-wrapping   
    * https://www.vaultproject.io/docs/concepts/response-wrapping 
    * <a target="_blank" href="https://www.youtube.com/watch?v=BkL_lYCeCxY">VIDEO</a>: Using the Cubbyhole Secret's Engine in HashiCorp Vault to Securely Share Secrets
    <br /><br />

    BTW, the wrapping token can be revoked (just like any other token) to minimize risk of unauthorized access (especially in a "Break Glass" stop-loss action after a breach).

11. The app uses the Vault-provided credentials to access the database.
12. The data returned from the database is output by run-tests.sh 

    <tt>[TEST 2]: output: [{"id":1,"name":"Rustic Webcam"},{"id":2,"name":"Haunted Coloring Book"}]</tt>

    <tt>OK</tt> is output after the response is validated.

<hr />

## Diving into run-tests.sh

<a name="APP_ADDRESS"></a>
   
### APP_ADDRESS

1.  Notice <tt>APP_ADDRESS</tt> is hard-coded:

    <tt>APP_ADDRESS="http://localhost:8080"</tt>

    But in production, the program would instead <strong>retrieve</strong> APP_ADDRESS from a system variable. Also, production APP_ADDRESS would, instead of "http", specify use of secure "https" protocol (on default port 443).
    
    Also, Production code would retrieve the <tt>APP_TOKEN</tt> to ensure valid identity for using Vault.


    <a name="Dockerfile"></a>

    ### Dockerfile

14. <tt>docker compose up -d --build --quiet-pull</tt> builds based on the <a target="_blank" href="https://github.com/bomonike/hello-vault-spring/blob/main/sample-app/Dockerfile">Dockerfile</a>

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

15. This invokes Maven to compile programs:
   
    <pre><strong>RUN mvn clean package -DskipTests</strong></pre>

    Although unspecified in code, Maven always open file <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/pom.xml">pom.xml</a>

16. View file <tt>pom.xml</tt> using <tt>cat</tt> or a text editor such as code (for VSCode).
 
    <pre><strong>cat pom.xml</strong></pre>

    In the file, note that versions need to be updated over time. See
    * https://github.com/spring-projects/spring-boot/releases is v2.7.5 as of October, 2022
    * https://github.com/spring-projects/spring-framework/releases
    <br /><br />

12. File <tt>HelloVaultSpringApplicationTests.java</tt> within folder path <tt>/test/java/com/hashicorp/hellovaultsprint</tt> is compiled:

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
   
13. Copy the app.jar file created to the root folder:

    <tt>COPY --from=build /build-project/target/hello-vault-spring.jar /app.jar</tt> 

14. Invoke the <tt>app.jar</tt> program from above:
 
    <tt>ENTRYPOINT ["java","-jar", "/app.jar"]</tt>

  
    ### Invoking the app HEALTHCHECK

15. The <tt>HEALTHCHECK</tt> in the <a href="#Dockerfile">Dockerfile</a> makes a call to the <tt>healthcheck</tt> API to the server.

16. The "trap" line is executed after the service exits:

    <pre>/# bring down the services on exit
    trap 'docker compose down --volumes' EXIT
    </pre>

17. This retrieves from Vault's payments secret:

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

18. This obtains the products secret:

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

11. Open another Terminal to define the <a href="#APP_ADDRESS">APP_ADDRESS defined earlier</a>:

    <pre>APP_ADDRESS="http://localhost:8080"
    </pre>

21. Issue an ad hoc call:

    <pre><strong>echo "$APP_ADDRESS"
    curl --silent --request GET "${APP_ADDRESS}/products"
    </strong></pre>


    ### Inside the app

22. Set breakpoint in the Java program: ???



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

   * If an account needs to login again, that account must also getcreds and reconnect to the database.

   * Each lease to access the database must be renewed before the <strong>default_ttl</strong>. When the maximum number of lease renewals or <strong>max_ttl</strong> is reached, reconnection is necessary again.

Now let's analyze the coding to achieve the above.

Coding for renewal is performed by <a target="_blank" href="https://github.com/hashicorp/hello-vault-go/blob/main/sample-app/vault_renewal.go">vault_renewal.go</a>. Currently, only hello-vault-go has renewal logic.

   <a target="_blank" href="https://www.youtube.com/watch?v=JvPDGcl9Rzs&t=24m49s">VIDEO</a>: this sample code uses an extraordinaryly short TTL (Time To Live) in order to trigger renewals to show how it works. In production, timeouts are <a target="_blank" href="https://www.youtube.com/watch?v=JvPDGcl9Rzs&t=31m38s">generally 30-60 minutes</a>.

   See <a target="_blank" href="https://www.youtube.com/watch?v=YrtTR0VDlDk">VIDEO:</a>
   Vault 1.2: Database Credential Rotation and Identity Tokens

Legacy services that can't handle token regeneration would use <strong>"periodic" tokens with no max_ttl</strong>. 

The equivalent CLI command to specify daily renewal period (repeatable indefinitely):

   <pre>vault write auth/token/create policies="example" period="24h"
   </pre>
   
   Limiting the number of times that a token can be renewed to 2 is set by <tt>-use-limit=2</tt>
   
<hr />

## Database within Kubernetes

<hr />

## References

* https://medium.com/hashicorp-engineering/essential-elements-of-vault-part-1-5a64d3de3be8
* https://medium.com/hashicorp-engineering/essential-patterns-of-vault-part-2-b4d34976f1dc

