This is a step-by-step deep-dive tour, with commentary.

1. Download the repo:

   ```
   git clone git@github.com:bomonike/hello-vault-spring.git --depth 1
   cd hello-vault-spring
   ```

2. Install Homebrew.
3. Install utilities:

   ```
   brew install curl  jq  docker
   ```

4. Install an open-source edition of Java. My favorite:

   ```
   brew install zulu
   ```

5. Using brew means that you can upgrade to the latest version simply:

   ```
   brew upgrade zulu
   ```

6. Install the Docker Desktop.
7. Verify:

   ```
   java --version
   ```

   You should see something like this:
   
   ```
   openjdk 19.0.1 2022-10-18
   OpenJDK Runtime Environment Zulu19.30+11-CA (build 19.0.1+10)
   OpenJDK 64-Bit Server VM Zulu19.30+11-CA (build 19.0.1+10, mixed mode, sharing)
   ```

   ### run.sh

1. Let's use a text editor code (VSCode) to look at the <tt>run.sh</tt> file within sample-app.

   <pre><strong>cd sample-app ; code run.sh</strong></pre>

   Notice it uses <tt>docker compose</tt> commands to bring processes down then up again:

   ```
   docker compose down --volumes
   docker compose up -d --build
   ```

1. Do the run:

   ```
   ./run.sh
   ```

   You should see a bunch of lines ending with:

   <pre>
   [+] Running 8/8
    ⠿ Network sample-app_default                       Created                0.1s 
    ⠿ Volume "sample-app_trusted-orchestrator-volume"  Created                0.0s 
    ⠿ Container sample-app-secure-service-1            Healthy               11.1s
    ⠿ Container sample-app-database-1                  Healthy               11.1s
    ⠿ Container sample-app-vault-server-1              Healthy               11.0s
    ⠿ Container sample-app-trusted-orchestrator-1      Healthy               11.9s
    ⠿ Container sample-app-app-1                       Healthy               22.7s
    ⠿ Container sample-app-healthy-1                   Started               22.9s
   </pre>

1. Verify

   ```
   docker list???
   ```



   ### run-tests.sh

1. Let's use a text editor code (VSCode) to look at the <tt>run-tests.sh</tt> file within sample-app.

   <pre><strong>code run-tests.sh</strong></pre>



1. Run the sample app:

   ```
   cd ..
   cd sample-app ; ./run-tests.sh
   ```

   You should see a bunch of lines beginnging with these from Docker:

   <pre>

1. Run the sample app:

   ```
   cd ..
   cd sample-app ; ./run-tests.sh
   ```

   You should see a bunch of lines beginnging with these from Docker:

   <pre>
[+] Running 6/6
 ⠿ Container sample-app-database-1              Healthy                                 1.7s
 ⠿ Container sample-app-secure-service-1        Healthy                                 1.7s
 ⠿ Container sample-app-vault-server-1          Healthy                                 1.7s
 ⠿ Container sample-app-trusted-orchestrator-1  Healthy                                 1.7s
 ⠿ Container sample-app-app-1                   Healthy                                 2.3s
 ⠿ Container sample-app-healthy-1               Started                                 2.6s
   </pre>

   These lines are output from the app (which we'll examine next):

   <pre>
[TEST 1]: output: {"message":"hello world!"}
[TEST 1]: OK
[TEST 2]: output: [{"id":1,"name":"Rustic Webcam"},{"id":2,"name":"Haunted Coloring Book"}]
[TEST 2]: OK
   </pre>

   These lines are output from Docker:

   <pre>
[+] Running 8/8
 ⠿ Container sample-app-healthy-1                 Removed                               0.0s
 ⠿ Container sample-app-app-1                     Removed                               4.4s
 ⠿ Container sample-app-trusted-orchestrator-1    Removed                               0.2s
 ⠿ Container sample-app-secure-service-1          Removed                               0.2s
 ⠿ Container sample-app-vault-server-1            Removed                               0.2s
 ⠿ Container sample-app-database-1                Removed                               0.3s
 ⠿ Volume sample-app_trusted-orchestrator-volume  Removed                               0.0s
 ⠿ Network sample-app_default                     Removed                               0.0s
   </pre>

   The processes continue to run unless you break out by pressing <strong>command+C</strong>.

1. Let's use a text editor code (VSCode) to look at the <tt>run-tests.sh</tt> file within sample-app.

   <pre><strong>code run-tests.sh</strong></pre>

1. In production, APP_ADDRESS is retrieved from a system variable instead of a hard-coded:

   <tt>APP_ADDRESS="http://localhost:8080"</tt>

   There is also a the <tt>APP_TOKEN</tt> to enter Vault.

1. "trap" is a bash shell command to:

   <tt># bring down the services on exit
   trap 'docker compose down --volumes' EXIT
   </tt>

1. This uses a CLI command to issue a HTTP POST command:

   <tt># TEST 1: POST /payments (static secrets)
output1=$(curl --silent --request POST "${APP_ADDRESS}/payments")
   </tt>

   That is what causes response:

   <pre>[TEST 1]: output: {"message":"hello world!"}</pre>

1. s


   <pre>[TEST 2]: output: [{"id":1,"name":"Rustic Webcam"},{"id":2,"name":"Haunted Coloring Book"}]
[TEST 2]: OK
   </pre>



   

