---
layout: post
date: "2022-11-03"
file: "hello-vault"
title: "Hello-Vault"
excerpt: "How to code your app to use HashiCorp Vault: write and read static secrets and eliminate database password theft with cubbyholes and wrapped secrets"
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

   For Java, Zulu is my favorite open-source edition of Java:

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

   Go:

   Dotnot:

   Ruby:

   Rust:

   Python:

   <pre><strong>
   brew install python 
   python --version
   pip install virtualenv   # used to:
   python -m venv venv   # create venv enviornment to activate by:
   source venv/bin/activate  # for (venv) prompt to:
   pip install hvac   # needed for Python to work with HashiCorp Vault
   </strong></pre>

   <tt>virtualvenv</tt> is used to ensure that Python packages play nice with each other - so that other Python projects with competing or incompatible versions of the same add-ons (dependencies) don't collide with this package.

5. Verify version to see if install took: 

   For Java/Spring:

   <pre><strong>java --version
   </strong></pre>

   You should see something like this:
   
   <pre>
   openjdk 19.0.1 2022-10-18
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

    This response means Docker Desktop is not running:
    
    <pre>Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
    </pre>

    Otherwise, you should see a bunch of lines scroll by until ending with this list and statuses:

   <a name="ContainerServices"></a>
   
   ### Container services

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

   <a name="ContainersFlowchart"></a>

   ### Container services flowchart

   Each of these is explained in the <a href="#Flowchart">flowchart below</a>.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1667753746/hello-vault-images-1920x1080_hxdgvi.jpg"><img alt="hello-vault-images-1920x1080.jpg" width="1920" height="1080" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1667753746/hello-vault-images-1920x1080_hxdgvi.jpg"></a>

   ### Edit run-tests.sh

3. Edit the <tt>run-tests.sh</tt> file (within folder sample-app) by using <tt>code</tt> to use VSCode) or other utility:

    <pre><strong>code run-tests.sh
    </strong></pre>

4. If you don't want processes to stop after the script ends (so you can issue more commands), type a "#" comment character in front of the <tt>docker compose down</tt> command line, like this:

    <pre># bring down the services on exit
    # trap 'docker compose down --volumes' EXIT
    </pre>

    If you comment out the <tt>compose down</tt> and save the file, 
    processes will continue to run unless you break out by pressing <strong>command+C</strong>.

5. Restart Docker.
   
6. Let's run it, then analyze the output:

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

    ### App output

    These lines are output from the app (which we'll examine next):

    <pre>
    [TEST 1]: output: {"message":"hello world!"}
    [TEST 1]: OK
    [TEST 2]: output: [{"id":1,"name":"Rustic Webcam"},{"id":2,"name":"Haunted Coloring Book"}]
    [TEST 2]: OK
    </pre>

    ### Docker removal output

    These lines are output from Docker won't appear if you edited out the removal commands:

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

7. View the <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/run-tests.sh">run-tests.sh</a> file (within sample-app) using the built-in <tt>cat</tt> command or use a text editor code (VSCode):

   <pre><strong>cat run-tests.sh</strong></pre>

   ### docker-compose.xml

   <tt>docker compose</tt> commands invoke the <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/docker-compose.yml">docker-compose.yml</a> which contain specification for running containers.

   NOTE: <a target="_blank" href="https://github.com/hashicorp/hello-vault-dotnet/blob/main/sample-app/docker-compose.arm64.yaml">hello-vault-dotnet, as separate docker-compose.arm64.yaml</a> is, at time of writing, needed to work around mssql/server's incompatibility with arm64 architecture.

8. Let's use a text editor code (VSCode) to look at the <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/docker-compose.yml">docker-compose.yml</a> file within the sample-app folder:

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

   ### Processes in Docker

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

