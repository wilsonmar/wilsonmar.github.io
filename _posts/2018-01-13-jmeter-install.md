---
layout: post
title: "JMeter install (on a Mac)"
excerpt: "to emulate HTTP requests testing load/capacity"
tags: [perftest, JMeter]
date: "2021-07-23"
file: "jmeter-install"
image: 
# feature: jmeter-artem-beliaikin-FWShcTBnqjo-unsplash-1900x500
  feature: https://user-images.githubusercontent.com/300046/126880654-2c5f2475-f5e3-4761-ada6-98ec48c03121.png
  credit: Artem Beliaikin on Unsplash.com
  creditlink: https://unsplash.com/photos/FWShcTBnqjo
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This tutorial introduces how to install and run JMeter by explaining each setp of an automated script for imposing artificial load on a server created to run RabbitMQ.

<a name="JavaInstall"></a>

## Java based!

   The "J" in JMeter refers to the Java Virtual Machine (JVM).
   JMeter is written in Java.
   That makes JMeter <strong>multi-platform</strong> on Windows, MacOS, Linux.

1. Install Java and verify according to my steps (with commentary) at:

   <a target="_blank" href="https://wilsonmar.github.io/java-on-apple-mac-osx/">https://wilsonmar.github.io/java-on-apple-mac-osx/</a>


   ### The Meter in JMeter

   "Meter" refers to being akin to parking meters that measure time. 
   It is said that "Time is money" because when a user waits for the system to respond, he or she is not productive getting work done. And the longer that a transaction takes to respond, the more servers are needed to server everyone.

   Each JMeter program running can <strong>emulate hundreds of human users</strong> typing and clicking through a web application because <strong>JMeter mimics just the network traffic</strong> exchanged between clients and servers. 

   JMeter is more than response time. Using JMeter enables us to measure how the application server will likely behave under load when running in production. The amount of load imposed by JMeter is often described in terms of the number of "users" JMeter emulates. 

   JMeter can submit requests more frequently than real users because JMeter is not a browser -- it works at the <strong>protocol level</strong>. The HTTP requests that JMeter sends to web services listeners look like they came from ordinary browsers.
   But JMeter does not normally render JavaScript DOM to create HTML nor execute the Javascript in HTML pages.

1. In an internet browser (Google Chrome, Mozilla Firefox, Apple Safari, etc.), open

   <a target="_blank" href="
   https://github.com/apache/jmeter">
   https://github.com/apache/jmeter</a>

   JMeter is offered free because it's open-sourced as an Apache Foundation project. 

   BTW: Historically, JMeter first became available December 2003 as the "Jakarta" project until it became the full-fledged product. Its previous URL is automatically routed from http://jakarta.apache.org/jmeter

2. Wikipedia lists the version history:

   <a target="_blank" href="https://www.wikiwand.com/en/Apache_JMeter">
   https://www.wikiwand.com/en/Apache_JMeter</a>


<hr />

## JMeter Installation options

   There are several ways to obtain a running instance of JMeter,
   listed from easiest to most difficult:

   A) You don't need a local machine if you run JMeter within a cloud service such as at
   <a href="#Blazemeter">Blazemeter.com</a> or 
   <a target="_blank" href="https://www.flood.io/">Flood.io</a>

   But customers at some companies do not trust public clouds. So...

   B) <a href="#BinaryInstall">Manually download installer to install locally</a>.

   C) <a href="#BinaryInstall">Manually download installer to install locally</a>.

   This is the approach shown by many <a href="#Tutorials">tutorials (see below)</a>

   D) <a href="#DockerHub">Pull an image from Docker Hub</a> 
   within a Google Compute or AWS cloud instance.

   E) <a href="#Dockerfile">Use the Dockerfile to build your own Docker image</a> containing JMeter.

   F) <a href="#AutoScript">Run a Bash script to install JMeter natively on you Mac</a>.

   G) <a href="#Manually">Manually type in Terminal commands executed in the automated script</a>.

   CAUTION: If you are in a large enterprise, confer with your security team before 
   installing. They often have a repository such as Artifactory or Nexus where
   installers are available after being vetted and perhaps patched
   for security vulnerabilities.



<a name="Blazemeter"></a>

## Blazemeter SaaS

You don't need a local machine if you use the cloud service<br />
<a target="_blank" href="https://blazemeter.com/">blazemeter.com</a>

You can't use blazemeter if your server is behind a firewall because blazemeter is a Saas service running on the public internet.

The SaaS vendor was purchased by CA in 2017.

Users of Blazemeter can use their add-on test framework.

Blogs about this:

* https://www.blazemeter.com/blog/5-ways-launch-jmeter-test-without-using-jmeter-gui
* https://www.artofsoftwaredevelopment.com/performance/performance-testing-in-the-cloud-with-jmeter-aws

<hr />

<a name="JMeterInstall"></a>

## JMeter install

1. Go to this URL to see the current version available for download:

   <a target="_blank" href="http://jmeter.apache.org/download_jmeter.cgi">
   http://jmeter.apache.org/download_jmeter.cgi</a>

   PROTIP: Rather than manually downloading (which takes several more steps), install using Homebrew:

   <a name="BrewInstall"></a>

   ### Manually install locally using HomeBrew

1. On a Mac, with a Terminal at any folder:

1. See if someone has created a Homebrew formula referencing the binaries so you can install using this command:

   <pre><strong>brew info jmeter</strong>

   You should see something like:

   <pre>jmeter: stable 5.4.1 (bottled)
Load testing and performance measurement application
https://jmeter.apache.org/
/usr/local/Cellar/jmeter/5.4.1 (2,645 files, 124.4MB) *
  Poured from bottle on 2021-06-10 at 12:28:08
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/jmeter.rb
License: Apache-2.0
==> Dependencies
Required: openjdk ✔
==> Analytics
install: 5,558 (30 days), 16,856 (90 days), 75,270 (365 days)
install-on-request: 5,552 (30 days), 16,842 (90 days), 74,846 (365 days)
build-error: 0 (30 days)
   </pre>

1. To install "silently":

   <pre><strong>brew install jmeter --with-plugins
   </strong></pre>

   Response at time of writing:

   <pre>==> Pouring jmeter--5.4.1.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/jmeter/5.4.1: 2,643 files, 124.4MB
   </pre>

   NOTE: Previously, 
   <pre>🍺  /usr/local/Cellar/jmeter/3.3: 2,855 files, 101.7MB
   </pre>

5. The script saves the file path other scripts will be using to invoke JMeter just installed:

   <pre><strong>echo $JMETER_HOME
   </strong></pre>

   At time of writing:

   <pre>/usr/local/Cellar/jmeter/5.0/libexec</pre>

   ### Tree JMeter folders and files

1. To list what folders are in a folder, install the tree utility:

   <pre><strong>brew install tree
   </strong></pre>

1. See the version folder located (at time of writing):

   <pre><strong>ls /usr/local/Cellar/jmeter
   </strong></pre>

1. Construct a tree command to view folders under the version, at the second level (https://www.computerhope.com/unix/tree.htm):

   <pre><strong>tree /usr/local/Cellar/jmeter/5.4.1 -L 2
   </strong></pre>

   Sample output:

   <pre>/usr/local/Cellar/jmeter/5.4.1
|-- INSTALL_RECEIPT.json
|-- LICENSE
|-- NOTICE
|-- README.md
|-- bin
|   `-- jmeter
`-- libexec
    |-- bin
    |-- docs
    |-- extras
    |-- lib
    |-- licenses
    `-- printable_docs
   </pre>

   The folders:

   <strong>bin</strong> contains the jmeter executable.
   Within <strong>libexec</strong>:
   * <strong>bin</strong> contains all other executatives, jars, and properties files.
   * <strong>docs</strong>
   * <strong>lib</strong> contains library utlity jar files
   * <strong>lib/ext</strong> contains JMeter components and add-ons
   * <strong>extras</strong> contains miscellaneous files including samples using the Apache Ant tool
   * <strong>licenses</strong> contains legal text 
   * <strong>printable_docs</strong> contains the usermanual in html and a demos folder containing jmx files
   <br /><br />

   Alternately, if you are to be using JMeter on your machine, add the export in your Mac's 
   <tt>~/.bash_profile</tt> file.

1. Update the profile (and type your password again):

   <pre><strong>source ~/.bash_profile</strong></pre>

1. Now skip to the <a href="#VerifyJMeter">Verify JMeter section below</a>.


<a name="BinaryInstall"></a>

### Manually JMeter install locally

Alternately, to install manually:

1. Go to this URL to see the current version available for download:

   <a target="_blank" href="http://jmeter.apache.org/download_jmeter.cgi">
   http://jmeter.apache.org/download_jmeter.cgi</a>

1. Define a variable identifying the tgz file to download within the Binaries section, such as:

   <pre><strong>JMETER_VERSION_SPEC="apache-jmeter-5.4.1"</strong></pre>

   Its URL, such as https://mirrors.gigenet.com/apache//jmeter/binaries/apache-jmeter-5.4.1.tgz
   uses the mirror server selected (by default) in the same webpage above.

   The "sha512" link provides the hash signature created so that you can determine whether download obtain all the bits by running the same hashing program. If you obtain the same hash value, no bits were changed during download.

1. Click OK for default Save File:

   ![jmeter-install-save-file](https://user-images.githubusercontent.com/300046/126862876-b0a33c6d-cf51-41ad-bff5-67b3c0243e32.png)

   The file typically downloads to your "Downloads" folder.

   Instead of clicking the browser's downloads icon and unzip the downloaded file by double-clicking it:

   ![jmeter-install-tgz](https://user-images.githubusercontent.com/300046/126862135-939cdf15-9d71-4375-94cc-b62a7e7a695d.png)

1. Switch to a Terminal.

1. Construct ~/Downloads/apache-jmeter-5.4.1.tgz":

   <pre><strong>DOWNLOADED_TGZ_FILEPATH="$HOME/Downloads/$JMETER_VERSION_SPEC.tgz"
   ls -al "$DOWNLOADED_TGZ_FILEPATH"
   </strong></pre>

   A sample response is:

   <pre>-rw-r--r--@ 1 wilsonmar  staff  70704620 Jul 24 02:40 /Users/wilsonmar/Downloads/apache-jmeter-5.4.1.tgz</pre>

1. Write the SHA256 hash to a file. Verify the integrity of the downloaded file by looking for "OK" in the second part of check response:

   <pre><strong>sha256sum "${DOWNLOADED_TGZ_FILEPATH}" > checksum
   cat checksum
   if [ sha256sum --check checksum | awk '{print $2}' != "OK" ]; then
      echo "sha256 compare failed for ${DOWNLOADED_TGZ_FILEPATH}"
      exit 9
   fi
   </strong></pre>

   The response:
   
   <pre>4edae99881d1cdb5048987accbd02b3f3cdadea4a108d16d07fb1525ef612cf3  /Users/wilsonmar/Downloads/apache-jmeter-5.4.1.tgz
   /Users/wilsonmar/Downloads/apache-jmeter-5.4.1.tgz: OK
   </pre>

   Alternately, verify the PGP signature of the author according to <a target="_blank" href="http://www.apache.org/info/verification.html">http://www.apache.org/info/verification.html</a>.

1. In your user home folder, construct a command to untar the downloaded file, then rename the versioned folder name to <strong>~/jmeter</strong>
   

   <pre><strong>tar xvfz "${DOWNLOADED_TGZ_FILEPATH}"
   mv "${JMETER_VERSION_SPEC}.tgz"  ~/jmeter
   cd ~/jmeter
   ls
   </strong></pre>

   You should see a list of folders and files:

   <pre>LICENSE        README.md      docs           lib            printable_docs
NOTICE         bin            extras         licenses
   </pre>

   PROTIP: Putting the folder in your home folder would avoid issues with permissions.

1. Construct a command to remove the file to save disk space:

   <pre><strong>rm -rf "${DOWNLOADED_TGZ_FILEPATH}"
   rm checksum
   </strong></pre>

1. Manually add the jmeter folder in your system path within file <tt>~/.bash_profile</tt> among other Java specs:

   <pre>export PATH="$HOME/jmeter:$PATH"</pre>


   <a name="VerifyJMeter"></a>

   ### Verify JMeter

1. Verify the install in a Terminal:

   <pre><strong>jmeter</strong></pre>

   You should see a JMeter GUI pop up:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/126863398-7c9e57b9-c104-475a-b83b-6e176bf7d8f2.png">
   <img width="1151" alt="jmeter-gui-upon-install" src="https://user-images.githubusercontent.com/300046/126863398-7c9e57b9-c104-475a-b83b-6e176bf7d8f2.png"></a>

9. To stop the GUI, press command+Q or cursor to the top of the screen to click JMeter, then Quit.


<a name="DockerHub"></a>

## Images from DockerHub.com

Videos about this topic:

   * https://www.youtube.com/watch?v=sl2mfyjnkXk
   * https://docs.docker.com/docker-cloud/builds/automated-build/
   <br /><br />
   
A Docker image would contain JMeter and be ready to run, after having Docker build it based on a Dockerfile.

There are <a target="_blank" href="https://hub.docker.com/search/?isAutomated=0&isOfficial=0&page=1&pullCount=0&q=jmeter&starCount=0">many JMeter images on public DockerHub</a> at <a target="_blank" href="https://cloud.docker.com/">https://cloud.docker.com</a>.

WARNING: Don't use the most popular because, as of this writing, it runs the <strong>older Jmeter 2.13</strong> + Debian OS + Java Server JRE 8 at:

   <pre>docker pull <a target="_blank" href="https://hub.docker.com/r/cirit/jmeter/">cirit/jmeter</a>
   </pre>

Another image containing a JMeter server include:

   <pre>docker pull <a target="_blank" href="https://hub.docker.com/r/justb4/jmeter/">justb4/jmeter</a>
   </pre>

The Docker image used in the <a target="_blank" href="https://www.flood.io">flood.io</a> SaaS service is:

   <pre>docker pull <a target="_blank" href="https://hub.docker.com/r/floodio/jmeter/">floodio/jmeter</a>
   </pre>

If none of the above is appropriate for you, build your own in the next section.

<a name="Dockerfile"></a>

## Build by Dockerfile

PROTIP: Although it takes more time, this approach is often necessary to incorporate new security patches
in all levels of the tech stack, from the operating system up.
Building an image Dockerfile means that you have the <strong>very latest versions</strong> of all components.

Installing within a Docker container means you are not "cluttering up" you native operating system.
In case a particular combination does not work, you can change it without jepordizing your laptop being in a working state.

Rather than repeating the instructions here, for AWS and Blue Ocean clouds,
see https://gist.github.com/hhcordero/abd1dcaf6654cfe51d0b

The script below can be invoked to setup either a Docker image or your local laptop.

### JMeter projects folder

1. If you haven't already, create a "projects" folder.

1. Create within your projects folder, create a folder for each JMeter application project.

   git init

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th> Folder </th><th> Description </th></tr>
   <tr valign="top"><td> ./run_jmeter.sh </td><td> bash shell script file to run jmeter 
      </td></tr>
   <tr valign="top"><td> ./lib </td><td> supporting libraries that would usually go in {jmeter_home}/lib
      </td></tr>
   <tr valign="top"><td> ./lib/ext </td><td> external plugins that would usually go in {jmeter}/lib/ext
      </td></tr>
   <tr valign="top"><td> ./properties </td><td> jmeter property files (if used)
      </td></tr>
   <tr valign="top"><td> ./scripts </td><td> here's where you store your jmeter scripts (.jmx files)
      </td></tr>
   <tr valign="top"><td> ./scripts/data </td><td> payloads you might need
      </td></tr>
   <tr valign="top"><td> ./scripts/lib </td><td>  custom helper scripts
      </td></tr>
   <tr valign="top"><td> ./scenarios </td><td> scenarios you create
      </td></tr>
   <tr valign="top"><td> ./logs</td><td> test logs created during runs
      </td></tr>
   <tr valign="top"><td> ./jmeter </td><td> symbolic link to the jmeter installation you want to use
      </td></tr>
   <tr valign="top"><td> ./java </td><td>  symbolic link to the java installation you want to use
      </td></tr>
   </table>

<hr />

<a name="Scripting"></a>

## JMeter script recording

See https://www.youtube.com/watch?v=m4bxF756ZGw


## Sample JMeter Bash script


<pre>#!/usr/bin/env bash
# From https://performance-engineering-solutions.com/2018/05/14/jmeter-basic-installation/
&nbsp;
## Get the directory where this script is located
directory="$( cd "$( dirname $0)" && pwd )"
&nbsp;
## Build the ${plugin} variable:
for files in `find ${directory}/lib/ext -maxdepth 1 -type f`; do
plugins="${plugins};${files}"
done
&nbsp;
## Build libraries variable:
for files in `find ${directory}/lib -maxdepth 1 -type f`; do
libraries="${libraries}:${files}"
done
## Remove the first ; or :
plugins=`echo ${plugins} | sed -e 's/^;//'`
libraries=`echo ${libraries} | sed -e 's/^://'`
&nbsp;
## Build jmeter options for plugins and libraries:
search_paths=`echo "-Jsearch_paths=${plugins}"`
class_path=`echo "-Juser.classpath=${libraries}"`
&nbsp;
## Set JAVA location by adding it to the $PATH variable:
JAVA_HOME="${directory}/java"
export PATH="${JAVA_HOME}/bin:${PATH}"
## JVM_ARGS & JMETER_OPTS etc can be placed here. Just make sure that you
## add them to the command at the end
&nbsp;
## Start jmeter
## The "$@" passes any arguments from the command line to the jmeter.sh script:
${directory}/jmeter/bin/jmeter.sh ${search_paths} ${class_path} \
-j ${directory}/logs/jmeter.log ${any_other_variables} "$@"
</pre>


<a name="Tutorials"></a>

## Videos on YouTube

### Raghav Pal

Raghav Pal (since Jan 2, 2016) has an excellent JMeter Beginner Tutorial in his
Automation Step by Step.com channel (supported by ads) in one 

<a target="_blank" href="https://www.youtube.com/watch?v=SoW2pBak1_Q">3.3 hour video</a>

His previous:

1. <a target="_blank" href="https://www.youtube.com/watch?v=M-iAXz8vs48&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to install Jmeter</a> [6:54] Jun 30, 2016
2. <a target="_blank" href="https://www.youtube.com/watch?v=8loLHbhfyh0&index=2&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to create first Jmeter test</a> [16:21] Jul 1, 2016
3. <a target="_blank" href="https://www.youtube.com/watch?v=mXhC9CtQBC8&index=3&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to use assertions</a> [18:25] Jul 6, 2016
4. <a target="_blank" href="https://www.youtube.com/watch?v=5FyVKVAqEJo&index=4&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to use Listeners</a> [18:53] Jul 8, 2016
5. <a target="_blank" href="https://www.youtube.com/watch?v=JI99ZOuI5tQ&index=5&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to record a UI (Web) test</a> [13:28] Jul 9, 2016
6. <a target="_blank" href="https://www.youtube.com/watch?v=8loLHbhfyh0&index=2&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to create a Database Test Plan</a> [10:13] Jul 9, 2016
7. <a target="_blank" href="https://www.youtube.com/watch?v=K26q5VgwLKk&index=7&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to run jmeter from Command Line (non GUI mode)</a> [11:32] Jul 10, 2016
8. <a target="_blank" href="https://www.youtube.com/watch?v=8loLHbhfyh0&index=2&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to test FTP upload and download</a> [12:56] Jul 24, 2016
9. <a target="_blank" href="https://www.youtube.com/watch?v=eaU7951fNuQ&index=9&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   Testing Web Services API</a> [20:32] Jul 31, 2016
10. <a target="_blank" href="https://www.youtube.com/watch?v=SmSieTKYky8&index=10&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to create assertions for JDBC (Database) Test Plan</a> [9:45] Aug 2, 2016
11. <a target="_blank" href="https://www.youtube.com/watch?v=aHV5IizW7u4&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c&index=11">
   How to create HTML Dashboard Reports from command line</a> [20:09] Aug 4, 2016
12. <a target="_blank" href="https://www.youtube.com/watch?v=KQfoBOK37ms&index=12&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to use Plugins Manager</a> [7:23] Aug 6, 2016
13. <a target="_blank" href="https://www.youtube.com/watch?v=aH_ZhMrhHhI&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c&index=13">
   How to read data from csv file (Parameterisation)</a> [14:47] Aug 11, 2016
14. <a target="_blank" href="https://www.youtube.com/watch?v=3O40Wg_tqEE&index=14&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   Functions and Variables</a> [13:57] Aug 13, 2016
15. <a target="_blank" href="https://www.youtube.com/watch?v=cOPnXUDmTBY&index=15&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to setup realistic performance test-PACING</a> [11:02] Aug 28, 2016
16. <a target="_blank" href="https://www.youtube.com/watch?v=EUgLRmlkTGQ&index=16&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   TIMERS (How to add Think Time)</a> [11:13] Aug 29, 2016
17. <a target="_blank" href="https://www.youtube.com/watch?v=Gwutv8adr9g&index=17&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to parameterize FTP test</a> [8:23] Sep 4, 2016
18. <a target="_blank" href="https://www.youtube.com/watch?v=8_qz3NcHIZY&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c&index=18">
   How to run Scheduled + Sequential execution</a> [13:48] Sep 14, 2016
19. <a target="_blank" href="https://www.youtube.com/watch?v=7-NcyZuUQnw&index=19&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   Correlation (with Regular Expression Extractor)</a> [12:30] Jan 15, 2017
20. <a target="_blank" href="https://www.youtube.com/watch?v=V0cSlGpi-mA&index=20&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to use TEMPLATES</a> [7:13] Apr 11, 2017
21. <a target="_blank" href="https://www.youtube.com/watch?v=amEHuq8auTU&index=21&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to use Test Script Recorder</a> [9:23] Apr 12, 2017
22. <a target="_blank" href="https://www.youtube.com/watch?v=36QEqWcLb0o&index=22&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c">
   How to test File Upload</a> [] Apr 14, 2017
23. <a target="_blank" href="https://www.youtube.com/watch?v=Tzqd1xSPc3s&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c&index=23">
   How to test File Download</a> [6:25] Apr 14, 2017
24. <a target="_blank" href="https://www.youtube.com/watch?v=S8ehjk9XWtE&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c&index=24">
   How to DEBUG</a> [8:56]  Apr 16, 2017
25. <a target="_blank" href="https://www.youtube.com/watch?v=zn1DSUZ6t64&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c&index=25">
   How to record login test</a> [8:14] Sep 11, 2017 

### Will Button

<a target="_blank" href="https://egghead.io/lessons/node-js-perform-load-tests-on-an-api-server-using-apache-jmeter">
Perform Load Tests on an API Server using Apache JMeter</a> in [8:25] tests a <a target="_blank" href="https://github.com/rekibnikufesin/nodejs-api-swagger/tree/master">VIDEO: Sample Todo API on Node.js built with Swagger in GitHub repo</a>.

### Guru99

https://www.guru99.com/jmeter-tutorials.html


<hr />

## Social

Sign up for <a target="_blank" href="https://info.blazemeter.com/slack-jmeter-lp-0">Blazemeter's Slack channel JMeter</a>

   * &#_questions_answers - A place to ask and answer JMeter questions
   * &#blog_posts - Share your JMeter blog posts here
   * &#plugins - Get and share info about JMeter’s plugins to customize your testing scripts
   * &#community_projects - A place to meet, plan and work together on JMeter load testing projects
   * &#meetups - Learn and share when there are JMeter meetups in your area.

