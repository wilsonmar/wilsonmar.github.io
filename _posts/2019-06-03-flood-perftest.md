---
layout: post
title: "Flood perftest"
excerpt: "Imposing precise loads using Flood.io Element, JMeter, and Gatlin scripts under monitoring to engineer performance and cloud spend"
tags: [flood, perftest, selenium, testing]
file: flood-perftest.md
image:
# flood-the-internet-wall-1900x500-105703.jpg
  feature: https://user-images.githubusercontent.com/300046/59104048-b4980880-88ed-11e9-9a93-c19baaef18ab.jpg
  credit: AttendantDesign
  creditlink: https://attendantdesign.com/fake-tsunami-films-flood-internet/
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This is a hands-on step-by-step introduction to installing and using <a target="_blank" href="https://www.flood.io/">https://flood.io</a> Element scripts to performance test public sample apps.

PROTIPs here provide additional commentary based on experience and foresight not available elsewhere.

For a basic understanding of how components are related to each other, first, view the video and its narration (transcript):

<a target="_blank" href="https://user-images.githubusercontent.com/300046/60241416-7b114800-9870-11e9-813d-47c5e4f799bd.jpg"><img alt="flood-perftest-v08-1148x586-52469.jpg" width="1148" src="https://user-images.githubusercontent.com/300046/60241416-7b114800-9870-11e9-813d-47c5e4f799bd.jpg"></a>


<a name="CLIinstall"></a>

## Setup Flood Element CLI locally

To run Flood Element scripts using CLI commands on your Mac or Linux laptop, first install it
by triple-clicking this URL and pasting it in your Terminal:

   <pre><strong>sh -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/flood-io/flood-local-setup.sh)"</strong></pre>

The command runs the shell script at the GitHub repo at:

   <a target="_blank" href="https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/flood-io/flood-local-setup.sh">https://github.com/wilsonmar/DevSecOps/master/flood-io/flood-local-setup.sh</a>

The script basically does what is specified in the flood.io documentation page at:
<a target="_blank" href="https://element.flood.io/docs/1.0/install">https://element.flood.io/docs/1.0/install</a>, but 

1. On a Mac with Homebrew installed:

   <tt><strong>brew install flood-io/taps/element</strong></tt>

   Skip to <a href="#Verify">Verify install</a>.

   NOTE: There is also a <a target="_blank" href="https://help.flood.io/articles/2754139-step-by-step-guide-using-aqueduct-ssl-with-flood/">flood-io/taps/aqueduct</a> which enables Flood Element scripts to run <a target="_blank" href="https://flood.io/blog/flood-aqueduct-cloud-load-testing-for-behind-the-firewall/">behind the corporate firewall within a private cloud</a>.

On a Linux machine:

1. <a target="_blank" href="https://wilsonmar.github.io/node-osx-install/">Install NodeJs NPM</a> if it's not already installed. Do this to avoid messages during element-cli installation such as:

   <pre>
npm WARN deprecated core-js@1.2.7: core-js@<2.6.8 is no longer maintained. Please, upgrade to core-js@3 or at least to actual version of core-js@2.
npm WARN deprecated cross-spawn-async@2.2.5: cross-spawn no longer requires a build toolchain, use it instead
   </pre>

2. Most people use NPM to install globablly:

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

   There are several sample apps with Element scripts available (or under construction):

   * A Woocommerce website with <a target="_blank" href="https://github.com/flood-io/load-testing-playground/tree/master/element">these Element scripts</a> as described in <a target="_blank" href="https://element.flood.io/docs/1.0/tutorials/01-woocommerce">Flood's on-line documentation</a>
   * A Magento website with <a target="_blank" href="https://github.com/flood-io/load-testing-playground/tree/master/element/magento">these Element scripts</a> as described in <a target="_blank" href="https://element.flood.io/docs/1.0/tutorials/02-magento">Flood's on-line documentation</a>
   * A video streaming website (YouTube) with <a target="_blank" href="https://github.com/flood-io/load-testing-playground/tree/master/element/magento">these Element scripts</a> as described in <a target="_blank" href="https://element.flood.io/docs/1.0/tutorials/03-youtube">Flood's on-line documentation</a>

   * SAP-Fiori
   * JPetstore
   * EasyTravel from Dynatrace
   <br /><br />

   For the purposes of this tutorial:

   <tt><strong>git clone <a target="_blank" href="https://github.com/daeep/Flood_Element">https://github.com/daeep/Flood_Element</a> && cd Flood_Element</strong></tt>

  
   ### Run sample Flood Element script

8. For a reminder of sub-commands to run stuff:

   <tt><strong>element run --help</strong></tt>

   The response:

   <pre>
element run <file> [options]
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

9. Run a sample script against one of the tests listed in <a target="_blank" href="http://wilsonmar.github.io/flood-the-internet/#challenges-on-the-internet">http://wilsonmar.github.io/flood-the-internet/#challenges-on-the-internet</a>:

   <tt><strong>element run <a target="_blank" href="https://github.com/daeep/Flood_Element/blob/master/04-Challenging_DOM.ts">04-Challenging_DOM.ts</a> \-\-no-headless</strong></tt>

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

   PROTIP: Some write down the number of seconds (such as "20018ms (walltime)") along with date and script name, etc. as metadata about runs for historical comparisons.

9. Look into the path using the tree command, to see these folders:

   <pre><strong>tree</strong></pre>

   <pre>`-- 2019-06-26T044133.811Z
    `-- flood
        |-- files
        |-- network
        |-- objects
        |-- results
        |-- screenshots
        `-- traces</pre>


### Run several users in the cloud

Docker

AWS


## Resources

