---
layout: post
title: "Flood local setup"
excerpt: "Install Flood Element CLI to run TypeScript which (like Selenium) emulates manual actions in Google Chrome browsers"
tags: [flood, perftest, selenium, testing]
date: "2019-07-03"
file: "flood-local-setup"
image:
# flood-the-internet-wall-1900x500-105703.jpg
  feature: https://user-images.githubusercontent.com/300046/59104048-b4980880-88ed-11e9-9a93-c19baaef18ab.jpg
  credit: AttendantDesign
  creditlink: https://attendantdesign.com/fake-tsunami-films-flood-internet/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on step-by-step introduction to automate installation of the <a target="_blank" href="https://flood.io/"><strong>flood.io</strong></a> Element CLI which validates TypeScript locally. After validation, the scripts are used on flood.io in the cloud to performance test public websites.

{% include whatever.html %}

This is a component illustrated as the upper-right corner of the video and flowchart at <a target="_blank" href="https://wilsonmar.github.io/flood-the-internet/">https://wilsonmar.github.io/flood-the-internet</a>, reiterated here:
<a target="_blank" href="https://user-images.githubusercontent.com/300046/60763986-3be7b180-a03d-11e9-9002-2e9f3512c589.jpg"><img alt="flood-the-internet-v12-1900x959.jpg" width="1900" src="https://user-images.githubusercontent.com/300046/60763986-3be7b180-a03d-11e9-9002-2e9f3512c589.jpg"></a>

PROTIPs here provide additional commentary based on experience and foresight not available elsewhere.


<a name="CLIinstall"></a>

## Setup Flood Element CLI locally

To run a Flood Element script against a sample app on the web, use Flood's `element` executable program.

To make that easy for you, a shell script was developed and made available in a GitHub.com repository.

   PROTIP: Security conscious people would be wise to first copy the file, vet it with Security experts, then save the certified file within a corporate-sponsored vault, perhaps using Nexus or Artifactory.

1. Use an internet browser (Google Chrome) to view the raws script at my public GitHub repository:

   <a target="_blank" href="https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/flood-io/flood-local-setup.sh">flood-local-setup.sh</a>

   (The script is based in part on the <a target="_blank" href="https://docs.flood.io/#end-to-end-example">"End to End Example" shell script at Flood.io README</a>)

   Our script has the following steps:

   1. Collect parameters controlling this run:
   2. Context: Starting time stamp, OS versions, command attributes:
   3. Shell utility functions:
   4. Delete local repository if it's there (for idempotency):
   5. Pre-requisites installation (jq to handle JSON)
   6. install cli
   7. Clone script from GitHub
   8. Run the script
   9. Clean up
   <br /><br />

   Notice that <tt>puppeteer</tt> is installed. The Node package..

   The script has are several run control parameters (feature flags) in the script.

1. If you are installing on a new Linux instance in the cloud, first instantiate the machine image.

1. <a target="_blank" href="https://wilsonmar.github.io/mac-osx-terminal/">Open a Terminal</a> 

1. To run the script with default settings on your Mac or Linux laptop,triple-click this URL and paste it in your Terminal:

   <pre><strong>sh -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/flood-io/flood-local-setup.sh)"</strong></pre>


Below examines what the script does, which is summarized in the flood.io documentation page at:
<a target="_blank" href="https://element.flood.io/docs/1.0/install">https://element.flood.io/docs/1.0/install</a>, but with pre-edits and verifications.

1. Get package manager for your operating system. <br />
   On a Mac, install Homebrew.<br />
   On Ubuntu, install apt-get. 

   Many Linux distributions now come with a package manager.

1. Use the package manager to install utilities. On a Mac:

   <tt><strong>brew install flood-io/taps/element</strong></tt>

   Skip to <a href="#Verify">Verify install</a>.

   NOTE: There is also a <a target="_blank" href="https://help.flood.io/articles/2754139-step-by-step-guide-using-aqueduct-ssl-with-flood/">flood-io/taps/aqueduct</a> which enables Flood Element scripts to run <a target="_blank" href="https://flood.io/blog/flood-aqueduct-cloud-load-testing-for-behind-the-firewall/">behind the corporate firewall within a private cloud</a>.

1. <a target="_blank" href="https://wilsonmar.github.io/node-osx-install/">Install NodeJs NPM</a> globally if it's not already installed. Do this to avoid messages during element-cli installation such as:

   <pre>
npm WARN deprecated core-js@1.2.7: core-js@<2.6.8 is no longer maintained. Please, upgrade to core-js@3 or at least to actual version of core-js@2.
npm WARN deprecated cross-spawn-async@2.2.5: cross-spawn no longer requires a build toolchain, use it instead
   </pre>

2. Most people use NPM to install the element CLI program globablly:

   <tt><strong>npm install -g @flood/element-cli</strong></tt>

   PROTIP: The response leverages Google Chromium Pupeteer that also powers Google Chrome browser Developer Tools.
   This means Firefox and other browsers are not supported.

   <pre>
> puppeteer@1.6.2 install /Users/wilsonmar/.nvm/versions/node/v9.11.1/lib/node_modules/@flood/element-cli/node_modules/puppeteer
Downloading Chromium r575458 - 80.4 Mb [====================] 100% 0.0s
Chromium downloaded to /Users/wilsonmar/.nvm/versions/node/v9.11.1/lib/node_modules/@flood/element-cli/node_modules/puppeteer/.local-chromium/mac-575458
+ @flood/element-cli@1.0.5
added 626 packages from 436 contributors in 180.277s
   </pre>

   Alternately, if you want the very latest beta varsion of Flood's Element CLI:

   <tt><strong>yarn global upgrade @flood/element-cli@beta</strong></tt>

   At the time of writing, the beta version is needed to mouse by x,y coordinates.


   <a name="Verify"></a>
   
   ### Verify install

4. Verify install:

   <tt><strong>element \-\-version</strong></tt>

   At time of writing:

   <pre>1.0.5</pre>

5. List the major sub-commands:

   <tt><strong>element help</strong></tt>

   The response:

   <pre>
  element init [dir] [options]       Init a test script and a minimal
                                     environment to get you started with Flood
                                     Element
  element generate &LT;file> [options]  Generate a basic test script from a
                                     template
  element plan &LT;file> [options]      Output the test script plan without
                                     executing it.
  element run &LT;file> [options]       Run a test script locally
   </pre>


   ### Clone sample Flood Element script

6. Create a folder just for this purpose.

7. Install Git if one was not already installed.

8. Clone (obtain) Element scripts written for a sample app (instead of running `element init` to be prompted) to generate a new minimal script per <a target="_blank" href="https://element.flood.io/docs/1.0/getting-started/03-initializing">the docs</a>):

   There are several sample apps with Element scripts available in Flood's load-testing-playground repo:

   * A Woocommerce website with <a target="_blank" href="https://github.com/flood-io/load-testing-playground/tree/master/element">these Element scripts</a> as described in <a target="_blank" href="https://element.flood.io/docs/1.0/tutorials/01-woocommerce">Flood's on-line documentation</a>

   * A Magento website with <a target="_blank" href="https://github.com/flood-io/load-testing-playground/tree/master/element/magento">these Element scripts</a> as described in <a target="_blank" href="https://element.flood.io/docs/1.0/tutorials/02-magento">Flood's on-line documentation</a>

   * A video streaming website (YouTube) with <a target="_blank" href="https://github.com/flood-io/load-testing-playground/tree/master/element/youtube">these Element scripts</a> as described in <a target="_blank" href="https://element.flood.io/docs/1.0/tutorials/03-youtube">Flood's on-line documentation</a>

   * <a target="_blank" href="https://wilsonmar.github.io/sap-fiori">SAP-Fiori</a> <a target="_blank" href="https://github.com/flood-io/load-testing-playground/tree/master/element/fiori">example.ts</a>

   Under construction:

   * <a target="_blank" href="https://wilsonmar.github.io/jpetstore">JPetstore</a> used as a sample app because it was written in Java. But it's front-end technology is now considered obsolete.
   
   * <a target="_blank" href="https://wilsonmar.github.io/easytravel">EasyTravel</a> from Dynatrace has both Java and .NET components.

   * "microtrader" websockets application maintained as the sample app for a video tutorial on Pluralsight.
   
   * <a target="_blank" href="https://azure.microsoft.com/en-us/resources/samples/?sort=0">
   769+ code samples for Azure Cloud from Microsoft</a>
   <br /><br />

   For the purposes of this tutorial:

   <tt><strong>git clone <a target="_blank" href="https://github.com/daeep/Flood_Element">https://github.com/daeep/Flood_Element</a> && cd Flood_Element</strong></tt>

  
   ### Run sample Flood Element script

8. For a reminder of sub-commands to run stuff:

   <tt><strong>element run --help</strong></tt>

   The response:

   <pre>
element run &LT;file> [options]
&nbsp;
Run a test script locally
&nbsp;
Browser:
  --chrome       Specify which version of Google Chrome to use. Default: use
                 the puppeteer bundled version. stable:
  --no-headless  Run in non-headless mode so that you can see what the browser
                 is doing as it runs the test
  --devtools     Run in non-headless mode and also open devtools
  --no-sandbox   Disable the chrome sandbox - advanced option, mostly necessary
                 on linux
&nbsp;
Running the test script:
  --watch               Watch <file> and rerun the test when it changes.
  --fast-forward, --ff  Run the script in fast-forward: override the actionDelay
                        and stepDelay settings to 1 second in the test script.
                        Specify a number to set a different delay.
  --slow-mo             Run the script in slow-motion: Increase the actionDelay
                        and stepDelay settings in the test script to 10 seconds.
                        Specify a number to set a different delay.
  --step-delay          Override stepDelay test script setting          [number]
  --action-delay        Override actionDelay test script setting        [number]
  --loop-count          Override the loopCount setting in the test script. This
                        is normally overridden to 1 when running via the cli.
                                                           [number] [default: 1]
  --strict              Compile the script in strict mode. This can be helpful
                        in diagnosing problems.
&nbsp;
Paths:
  --work-root       Specify a custom work root. (Default: a directory named
                    after your test script, and at the same location)
  --test-data-root  Specify a custom path to find test data files. (Default: the
                    same directory as the test script)
&nbsp;
Positionals:
  file  the test script to run                                        [required]
&nbsp;
Options:
&nbsp;
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  --verbose  Verbose mode</pre>

8. Define

   SCRIPT_PATH="./element/fiori/example.ts"

   SCRIPT_PATH="<a target="_blank" href="https://github.com/daeep/Flood_Element/blob/master/04-Challenging_DOM.ts">04-Challenging_DOM.ts</a>

9. Run a sample script against one of the tests listed in <a target="_blank" href="http://wilsonmar.github.io/flood-the-internet/#challenges-on-the-internet">http://wilsonmar.github.io/flood-the-internet/#challenges-on-the-internet</a>:

   Two different approaches are available:

   Use `npx` to invoke NPM binary `element-cli` without a global install<a target="_blank" href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b">*</a>

   <pre>npx @flood/element-cli run "$SCRIPT_PATH" --no-headless
   </pre>

   Alternately, use `element` command if element-cli was installed globally:

   <tt><strong>element run "$SCRIPT_PATH" \-\-no-headless</strong></tt>

   `--no-headless` opens a browser instance so you can see it playing back.

9. If see this message, click "Allow":

   ![flood-allow-popup-308x143-5842](https://user-images.githubusercontent.com/300046/60151865-96f6ea00-979b-11e9-8b06-02e6289a7c10.jpg)

   The response begins with:

   <pre>
+0s info: workRootPath: /Users/wilsonmar/projects/flood-io/Flood_Element/tmp/element-results/04-Challenging_DOM/2019-06-26T044133.811Z
   </pre>   

   NOTE: The above message specifies where results will be stored locally.
  
   The response ends with:

   <pre>
+0s info: testDataPath: /Users/wilsonmar/projects/flood-io/Flood_Element
+7s info: ---> wait()
+7s info: ---> Step 'Test: 01 - Homepage' finished
+10s info:
+10s info: ===> Step 'Test: 02 - Challenging DOM'
+10s info: ---> wait()
+10s info: ---> Step 'Test: 02 - Challenging DOM' finished
+13s info:
+13s info: ===> Step 'Test: 03 - Challenging DOM - Click Button'
+13s info: ---> wait()
+13s info: ---> Step 'Test: 03 - Challenging DOM - Click Button' finished
+16s info:
+16s info: ===> Step 'Test: 04 - Challenging DOM - Click Button Alert'
+17s info: ---> wait()
+17s info: ---> Step 'Test: 04 - Challenging DOM - Click Button Alert' finished
+20s info:
+20s info: ===> Step 'Test: 05 - Challenging DOM - Click Button Success'
+20s info: ---> wait()
+20s info: ---> Step 'Test: 05 - Challenging DOM - Click Button Success' finished
+23s info: Iteration completed in 20018ms (walltime)
+23s info: Test completed after 1 iterations
process exited
   </pre>

   TODO: Capture the response. Have a program scan through it to record the number of seconds (such as "20018ms (walltime)") along with date and script name, etc. as metadata about runs for historical comparisons.

9. Look into the path using the tree command, to see these folders:

   <pre><strong>tree /user/.../2019-06-26T044133.811Z</strong></pre>

   <pre>flood
        |-- files
        |-- network
        |-- objects
        |-- results
        |-- screenshots
        `-- traces</pre>


https://app.flood.io/login



## Resources

