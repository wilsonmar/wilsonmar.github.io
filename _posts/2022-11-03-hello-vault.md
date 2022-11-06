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

This article takes a deep dive into sample (template) code within a GitHub repo.
This has features other sample code lack:

   * A run.sh shell file that creates servics needed within Docker Compose containers
   * A run-tests.sh that calls the program's APIs
   * The scripts work on new Apple M1 ARM64 chips as well as older Intel x86 macOS machines

   * Containers created include a local instance of HashiCorp Vault for the app to store and retrieve secrets
   * A database able to communicate with Vault to dynamically create credentials
   * Example of how to generate secrets dynamically instead of using long-running secrets for others to steal

   * The same app in other languages: Go, dotnet C#, Java, Ruby to compare and learn

<a target="_blank" href="https://www.youtube.com/watch?v=JvPDGcl9Rzs">VIDEO: Meet the team which created this talk about their sample code (in Go)</a>.

## What does this contribute?

{% include whatever.html %}

This article provides a step-by-step deep-dive tour, with commentary, contrasting code across several repositories created by developers inside and outside HashiCorp. 

1. Navigate to a folder, and obtain the repo for your language of choice. For example:

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

<hr />

## Install Spring on macOS:

Let's dive in by installing pre-requities. Each technology has a different set of technologies:

1. On macOS, install the Apple XCode Command Line utilities, if needed.

1. Install OS package manager: 

   On macOS, Homebrew.
   
   Using brew means that you can upgrade to the latest version with a single command.

2. Install utilities using package manager. On macOS:

   ```
   brew install  curl  jq  docker
   ```

3. Install the compiler and repo for your language of choice:

   For Java, Zulu is my favorite open-source edition of Java:

   ```
   brew install zulu
   java --version
   ```

   Go:

   dotnot:

   ruby:

   rust:

   Python:

   <pre>
   brew install python 
   python --version
   pip install virtualenv   # used to:
   python -m venv venv   # create venv enviornment to activate by:
   source venv/bin/activate  # for (venv) prompt to:
   pip install hvac   # needed for Python to work with HashiCorp Vault
   </pre>

   <tt>virtualvenv</tt> is used to ensure that Python packages play nice with each other - so that other Python projects with competing or incompatible versions of the same add-ons (dependencies) don't collide with this package.

4. Verify version to see if install took: 

   For Java/Spring:

   <pre><strong>java --version
   </strong></pre>

   You should see something like this:
   
   <pre>
   openjdk 19.0.1 2022-10-18
   OpenJDK Runtime Environment Zulu19.30+11-CA (build 19.0.1+10)
   OpenJDK 64-Bit Server VM Zulu19.30+11-CA (build 19.0.1+10, mixed mode, sharing)
   </pre

5. Install the Docker Desktop. On macOS, see https://docs.docker.com/desktop/mac/apple-silicon/

   <pre><strong>brew install docker
   brew install docker-desktop
   </strong></pre>
   
   Alternately, instead of docker-compose, use <a target="_blank" href="https://bmiguel-teixeira.medium.com/goodbye-docker-compose-hello-kubelet-75306472de27">Kublet static pod</a>

   The utility now would not re-install the latest version if it's already installed.

   PROTIP: Get the Docker Desktop logo on your Mac Taskbar: pinch four fingers on your trackpad to drag and drop the logo onto your Taskbar.
   You should see the Docker logo when you point the mouse at the top of your screen.

6. Verify Docker version:

   <pre><strong>docker compose version
   </strong></pre>

   The response, at time of writing, was:

   <pre>
   Docker Compose version 2.12.2
   </pre>

7. Invoke the Docker desktop.
   
8.  View file <tt>.gitignore</tt> using <tt>cat</tt> or a text editor such as code (for VSCode).
 
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

   ### APP_ADDRESS

   In Java, the Host, Port, and Scheme are hard-coded for combination into "http://127.0.0.1:8200". 
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

   In the dotnet (C#) repo, file <a target="_blank" href="https://github.com/hashicorp/hello-vault-dotnet/blob/main/quick-start/quickstart.csproj">quickstart.csproj</a> defines the library used.

   In the python repo, hvac is used.

   In the dotnet C# code:
   "secret" is defined as the <strong>mountPoint</strong> 
   but Java uses function <tt>opsForVersionedKeyValue()</tt> 
   
   "my-secret-password" is defined as the <strong>path</strong> in dotnet C# but 
   Java uses a <tt>put</tt> function to "data".

   ### Other Vault Secret Engines

   Note that Vault has <a target="_blank" href="https://developer.hashicorp.com/vault/docs/secrets">other Secret Engines</a> to handle other types of secrets not demonstrated by this sample program, such as generation of SSH certificates, X.509 certificates for SSL/TLS, etc.

   ### Expected output

   When we run the program, we expect that:<br />
   * After writing a secret, the program outputs "Secret written successfully.".
   * After reading the secrets successfully, the program outputs "Access granted!".
   <br /><br />

3. View file <tt>run.sh</tt> file using <tt>cat</tt> or a text editor such as code (for VSCode):
 
   <pre><strong>cat run.sh</strong></pre>

   Notice the dev Vault server is started with a parameter:

   <tt>-e 'VAULT_DEV_ROOT_TOKEN_ID=dev-only-token'</tt>

   In production, several mechanisms can be used to start the Vault server, including access to cloud provider secret managers.

   ### Source compilation

   In the Spring (Java) repo, command <tt>mvn clean package</tt> references the <tt>pom.xml</tt> file to compile the source code file App.java into file <tt>quickstart.jar</tt> in the <tt>target</tt> folder.

   <tt>java -jar target/quickstart.jar</tt> runs the result of App.java source file compilation.

   In the dotnet (C#) repo, command <tt>dotnet run Program.cs<tt> compiles the Program.cs source file.
   
   In the go repo, command <tt>go run main.go</tt> compiles the Go source and invokes the result.

4. If you want to keep the app running so you can make additional commands, insert a <tt>#</tt> character at the left edge of these commands to comment them out of executing:

   <tt># docker stop "${container_id}" > /dev/null
   \# echo "Vault server has stopped."
   </tt>

5. Make sure that Docker Desktop is runnning.
6. Restart Docker to clear it from a previous run.

7. Invoke the shell script:

   <pre><strong>./run.sh</strong></pre>

   Wait for various lines to appear until this appears:

   <pre>
Secret written successfully.
Access granted!
Stopping Vault dev server..
Vault server has stopped.
   </pre>

   BTW, in production, there would be a background process that forwards logs to a central collection SIEM (Security Information and Event Management) system such as Splunk. Such centralization provides a detailed enterprise-wide history of operations that makes security forensics possible.

<hr />

<a name="sample-app"></a>

## sample-app

1. Navigate out of quick-start and into:

   <pre><strong>cd sample-app</strong></pre>


   ### run.sh

1. Let's use a text editor code (VSCode) to look at the <tt>run.sh</tt> file within sample-app.

   <pre><strong>cat run.sh</strong></pre>

   Notice it uses <tt>docker compose</tt> commands to bring processes down then up again:

   <pre>
   docker compose down --volumes
   docker compose up -d --build
   </pre>

   Those commands invoke the <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/docker-compose.yml">docker-compose.yml</a> which defines the containers created in the next step.

   The <tt>--build</tt> parameter invokes a build referencing the <tt>Dockerfile</tt>.

2. Do the run:

   <pre><strong>./run.sh
   </strong></pre>

   Wait for a bunch of lines to scroll by until ending with this list and statuses:

   <pre>...
   [+] Running 8/8
      ⠿ Network sample-app_default                       Created            0.1s 
      ⠿ Volume "sample-app_trusted-orchestrator-volume"  Created            0.0s 
      ⠿ Container sample-app-secure-service-1            Healthy           11.1s
      ⠿ Container sample-app-database-1                  Healthy           11.1s
      ⠿ Container sample-app-vault-server-1              Healthy           11.0s
      ⠿ Container sample-app-trusted-orchestrator-1      Healthy           11.9s
      ⠿ Container sample-app-app-1                       Healthy           22.7s
      ⠿ Container sample-app-healthy-1                   Started           22.9s
   </pre>

3. To ensure that Docker processes are running, expand the width of the Terminal wide and:

   <pre><strong>docker ps
   </strong></pre>

   ### processes in Docker

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="bottom"><th> Setup in yaml </th><th> Container/Volume </th></tr>
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


    ### run-tests.sh

4.  Look at the <tt>run-tests.sh</tt> file within sample-app by using <tt>code</tt> to use VSCode, etc.):

    <pre><strong>code run-tests.sh
    </strong></pre>

5.  If you don't want processes to stop after the script ends (so you can issue more commands), type a "#" comment character in front of the <tt>docker compose down</tt> command line, like this:

    <pre># bring down the services on exit
    \# trap 'docker compose down --volumes' EXIT
    </pre>

6.  Save the file and exit.

7.  Run the sample app:

    <pre><strong>./run-tests.sh
    </strong></pre>

    This response means Docker Desktop is not running:
    
    <pre>Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
    </pre>

    Otherwise, you should see a bunch of lines beginnging with these from Docker:

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

    <pre>
    [TEST 1]: output: {"message":"hello world!"}
    [TEST 1]: OK
    [TEST 2]: output: [{"id":1,"name":"Rustic Webcam"},{"id":2,"name":"Haunted Coloring Book"}]
    [TEST 2]: OK
    </pre>

    These lines are output from Docker to confirm removal:

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

    The processes continue to run unless you break out by pressing <strong>command+C</strong>.

8. Let's use a text editor code (VSCode) to look at the <tt>run-tests.sh</tt> file within sample-app.

   <pre><strong>code run-tests.sh</strong></pre>

   
   <a name="APP_ADDRESS"></a>
   
   ### APP_ADDRESS

16. In production, APP_ADDRESS is retrieved from a system variable instead of a hard-coded:

    <tt>APP_ADDRESS="http://localhost:8080"</tt>

    A production instance of Vault would use an SSL/TLS certificate to enable secure https protocol.

    Production also uses the <tt>APP_TOKEN</tt> to ensure valid identity for using Vault.


    <a name="Dockerfile"></a>

18. <tt>docker compose up -d --build --quiet-pull</tt> builds based on the <a target="_blank" href="https://github.com/bomonike/hello-vault-spring/blob/main/sample-app/Dockerfile">Dockerfile</a>

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

    The top line FROM clause retrieves from maven hub openjdk version 17.

    build-project folder???

18. Maven opens file <a target="_blank" href="https://github.com/hashicorp/hello-vault-spring/blob/main/sample-app/pom.xml">>pom.xml</a>, which specifies java source files to compile.
   
19. File <tt>HelloVaultSpringApplicationTests.java</tt> within folder path <tt>/test/java/com/hashicorp/hellovaultsprint</tt> is compiled:

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


21. <tt>RUN mvn clean package -DskipTests</tt>

    uses maven to compile ???
   
    This specifies java to compile, which creates a "src" folder.

22. Copy the app.jar file created to the root folder:

    <tt>COPY --from=build /build-project/target/hello-vault-spring.jar /app.jar</tt> 

23. Invoke the <tt>app.jar</tt> program from above:
 
    <tt>ENTRYPOINT ["java","-jar", "/app.jar"]</tt>

  
   ### Invoking the app HEALTHCHECK

24. The <tt>HEALTHCHECK</tt> in the <a href="#Dockerfile">Dockerfile</a> makes a call to the <tt>healthcheck</tt> API to the server.

25. The "trap" line is executed after the service exits:

   <tt># bring down the services on exit
   trap 'docker compose down --volumes' EXIT
   </tt>

26. This retrieves from Vault's payments secret:

   <tt># TEST 1: POST /payments (static secrets)
   output1=$(curl --silent --request POST "${APP_ADDRESS}/payments")
   </tt>

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

    <tt># TEST 2: GET /products (dynamic secrets)
    output2=$(curl --silent --request GET "${APP_ADDRESS}/products")
    </tt>

    That curl CLI command is what causes response:

    <pre>[TEST 2]: output: [{"id":1,"name":"Rustic Webcam"},{"id":2,"name":"Haunted Coloring Book"}]
    [TEST 2]: OK
    </pre>

    PROTIP: "Rustic Webcam" and "Haunted Coloring Book" are returned because the database was loaded from the <a target="_blank" href="https://github.com/bomonike/hello-vault-spring/blob/main/sample-app/setup/database/2-data.sql">2-data.sql</a> file within folder /setup/database:
    
    <pre>
    INSERT INTO products (name)
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

21.  Issue an ad hoc call:

    <tt>
    echo "$APP_ADDRESS"
    curl --silent --request GET "${APP_ADDRESS}/products"
    </tt>


    ### Inside the app

3.  Set breakpoint in the Java program: ???



<hr />

## Renewal of keys

1. View file <a target="_blank" href="https://github.com/hashicorp/hello-vault-go/blob/main/sample-app/vault_renewal.go">vault_renewal.go</a>

   <a target="_blank" href="https://www.youtube.com/watch?v=JvPDGcl9Rzs&t=24m49s">VIDEO</a>: this sample code uses an extraordinaryly short TTL (Time To Live) in order to trigger renewals to show how it works. In production, timeouts are <a target="_blank" href="https://www.youtube.com/watch?v=JvPDGcl9Rzs&t=31m38s">generally 30-60 minutes</a>.


   ???

   <a target="_blank" href="https://github.com/bomonike/hello-vault-python/blob/main/sample-app/pics/renewal-diagram.svg"><img width="200" src="sample-app/pics/renewal-diagram.svg"></a>

   See <a target="_blank" href="https://www.youtube.com/watch?v=YrtTR0VDlDk">VIDEO:</a>
   Vault 1.2: Database Credential Rotation and Identity Tokens

Legacy services that can't handle token regeneration would use <strong>"periodic" tokens with no max_ttl</strong>.
The equivalent CLI command to specify daily renewal period (repeatable indefinitely):

   <pre>
   vault write auth/token/create policies="example" period="24h"
   </pre
   
   The number of times that a token can be renewed is set by <tt>-use-limit=2</tt>
   
<hr />

## References

* https://medium.com/hashicorp-engineering/essential-elements-of-vault-part-1-5a64d3de3be8
* https://medium.com/hashicorp-engineering/essential-patterns-of-vault-part-2-b4d34976f1dc

