---
layout: post
title: "Maven on MacOS (OSX)"
excerpt: "for Java, Jenkins, etc."
tags: [homebrew, apple, mac, setup]
date: "2019-12-14"
file: "maven-on-macos"
image:
# feature: maven-414x297.gif
  feature: https://user-images.githubusercontent.com/300046/38535311-1d861d2e-3c40-11e8-88e1-efad8b72f771.gif
  credit: Empeccableweb
  creditlink: http://blog.empeccableweb.com/wp/deployments/maven/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This describes how to install Maven using Homebrew, the configure and use it.

Maven is a [task runnner, like Ant, Gradle, Grunt](/task-runners/).

Ant was originally created (using Java) to replace the make utility for cross-platform use. With Ant, everything needs to be coded explictly in XML. Its files are difficult to reuse.

Unlike Ant, Maven also provides 
dependency management, 
standard project layout, and 
project management.


## Mated with Java

Maven is written in Java, and grew up supporting Java builds
by creating from Java source and resources for deployment
deliverables like JAR file or WAR files.

## Default in Jenkins

Maven is the default build tool in the <strong>Jenkins</strong> continuous integration tool to perform builds when code is committed.

> Unlike shell script procedural code, Maven files enable declarative statements.

Maven adopts the principle of "Convention over configuration", 
which means less coding work. However, it operates as a "black box".


Read more: <a target="_blank" href="http://javarevisited.blogspot.com/2015/01/difference-between-maven-ant-jenkins-and-hudson.html#ixzz4CQKSY3oF">
http://javarevisited.blogspot.com/2015/01/difference-between-maven-ant-jenkins-and-hudson.html#ixzz4CQKSY3oF</a>


<a id="MavenSetupz"></a>

## Install latest #

PROTIP: Rather than downloading directly from https://maven.apache.org/download.cgi, use a package manager.

0. To install the latest version on MacOS:

   <pre><strong>brew install maven
   </strong></pre>

   the response I got on Dec 29, 2017:

   <pre>
==> Downloading https://www.apache.org/dyn/closer.cgi?path=maven/maven-3/3.5.2/binaries/apache-maven-3.5.2-bin.tar.gz
==> Best Mirror http://apache.mirrors.lucidnetworks.net/maven/maven-3/3.5.2/binaries/apache-maven-3.5.2-bin.tar.gz
######################################################################## 100.0%
🍺  /usr/local/Cellar/maven/3.5.2: 104 files, 10.1MB, built in 21 seconds
   </pre>

   ### Install previous version #

   Alternately, to <a target="_blank" href="http://stackoverflow.com/questions/3987683/homebrew-install-specific-version-of-formula">
   install a previous version</a>:

   <pre><strong>brew install homebrew/versions/maven30
   </strong></pre>

   Then, to switch among versions:

   <pre><strong>brew unlink maven30 && brew link maven
   brew unlink maven && brew link maven30
   </strong></pre>


   ## Configure Path #

0. Verify install:

   <pre><strong>
   mvn -version
   </strong></pre>

   I got this response:

   <pre>
Apache Maven 3.5.2 (138edd61fd100ec658bfa2d307c43b76940a5d7d; 2017-10-18T03:58:13-04:00)
Maven home: /usr/local/Cellar/maven/3.5.2/libexec
Java version: 1.8.0_25, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_25.jdk/Contents/Home/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "mac os x", version: "10.11.6", arch: "x86_64", family: "mac"
   </pre>


0. Confirm the path:

   <pre><strong>which mvn
   </strong></pre>

   response:

   <pre>/usr/local/bin/mvn
   </pre>

   NOTE: Before OSX Mavericks,
   <a target="_blank" href="http://maven.apache.org/">
   Maven</a> was installed by default in:<br />
   <tt>/usr/share/maven/bin/mvn</tt>

0. Confirm the path. Substitute the version (3.5.2) with the version
   you just installed:

   <pre><strong>cd /usr/local/Cellar/maven/3.5.2/libexec
   cd bin
   ls
   </strong></pre>

   mvn files should be listed:

   <pre>m2.conf     mvn      mvnDebug mvnyjp
   </pre>

0. Open using a text editor, substituting subl (for Sublime) with atom or vim:

   <pre><strong>cd $HOME
   subl .bash_profile
   </strong></pre>

0. Add the following to under export PATH=, changing the version (3.5.2) to whatever appears above:

   <pre><strong>
   export M2_HOME=/usr/local/Cellar/maven/3.5.2/libexec
   export M2=$M2_HOME/bin
   export PATH=$PATH:$M2_HOME/bin
   </strong></pre>

   On Windows, define environment variable `M2_HOME` with a path such as:

   <pre><strong>C:\apache-maven-3.3.3
   </strong></pre>   

   Within environment variable `PATH`, add:

   <pre><strong>%M2_HOME%\bin;
   </strong></pre>   

0. View changed environment variables. On a Mac:

   <pre><strong>echo $M2_HOME
   </strong></pre>

   The response if installed by Homebrew on Mac:<br />
   `/usr/local/Cellar/maven/3.5.2/libexec`

   <pre><strong>echo $M2
   </strong></pre>

   The response if installed by Homebrew on Mac:<br />
   `/usr/local/Cellar/maven/3.5.2/libexec/bin`

   <pre><strong>echo $PATH
   </strong></pre>

   On Windows:

   <pre><strong>echo $M2_HOME
   echo $M2
   echo $PATH
   </strong></pre>

0. In a Terminal, verify changes:

   <pre><strong>echo $JAVA_HOME
   </strong></pre>

   The reply is, for example:

   <pre>/Library/Java/JavaVirtualMachines/jdk1.7.0_65.jdk/Contents/Home
   </pre>


<a name="Config"></a>

## Change Default Configurations #

0. Navigate to the hidden folder Maven installed
   to house packages installed (junit, commons-cli, commons-lang, etc).

   <pre><strong>cd ~/.m2/repository
   </strong></pre>

   Some prefer to change Maven's local repository to another location.

   See <a target="_blank" href="https://maven.apache.org/guides/mini/guide-configuring-maven.html">
   https://maven.apache.org/guides/mini/guide-configuring-maven.html</a>

   There is a settings.xml file containing:

   <pre>&LT;localRepository>~//maven/repo/&LT;/localRepository>
   </pre>


## Using Maven #

   Maven allows use of a central maven repository.

   The <strong>pom.xml</strong> (Project Object Model)
   file describes project dependencies which Maven resolves by downloading them.

   NOTE: Some prefer to install and use the <a target="_blank" href="https://codehaus-cargo.github.io/cargo/Maven2+Plugin+Installation.html">Cargo plugin (from Codehaus)</a> to Maven in order to eliminate use of pom.xml. In a folder that contains a pom.xml: 

   mvn clean verify org.codehaus.cargo:cargo-maven2-plugin:run

   https://codehaus-cargo.atlassian.net/wiki/spaces/CARGO/pages/491622/Maven2+Plugin+Reference+Guide

0. The vast majority of Maven-built projects can be built with this command:

   <pre><strong>mvn clean install
   </strong></pre>

   The "clean" cleans out results from the prior build before starting with install.

   During the first full run, testing jars are installed in your local maven repository. 

   <pre>[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 26.549 s
[INFO] Finished at: 2018-02-15T09:55:56-05:00
[INFO] Final Memory: 86M/639M
[INFO] ------------------------------------------------------------------------
   </pre>

0. Maven is said to also act as project management tool because
   it can generate reports etc.

   <strong>build.xml</strong>

   Maven enforces a standard naming convention for artifacts defined using
   groupId, artifactId, and version.

0. After the first run, builds can skip tests with this additional parameter:

   <pre><strong>
   mvn clean install -Dmaven.test.skip=true
   </strong></pre>



### Maven lifecycle phases #

<a target="_blank" href="http://www.slideshare.net/boyw165/note-apache-maven-intro-36821953">
<img width="527" height="360" alt="fig maven-lifecycle-phases-527x360-6.png"
src="https://cloud.githubusercontent.com/assets/300046/16313507/bb3e9320-3936-11e6-9a3b-aa4d0afa6416.png">
</a>

Here are sub-commands for mvn:

Default Lifecycle:

| Sub-command | Description |
| -------- | ----------- |   
| **validate** | Validate the project is correct and all necessary information is available |
| initialize | initialize build state, (for example : set properties, create directories,... etc) |
| generate-sources | generate any source code for inclusion in compilation |
| process-sources | process the source code (for example : filter any values) |
| generate-resources | generate resources for inclusion in the package. |
| process-resources | copy and process the resources into the destination directory, ready for packaging. |
| **compile** | compile the source code of the project. |  
| process-classes | post-process the generated files from compilation (for example : to do bytecode enhancement on Java classes) |
| generate-test-sources | generate any test source code for inclusion in compilation. |
| process-test-sources | process the test source code (for example : to filter any values) |
| generate-test-resources | create resources for testing. |
| process-test-resources | copy and process the resources into the test destination directory. |  
| test-compile | compile the test source code into the test destination directory. |  
| process-test-classes | post-process the generated files from test compilation (for example : to do bytecode enhancement on Java classes) |
| **test** | run tests using a suitable unit testing framework. These tests should not require the code be packaged or deployed. |
| prepare-package | perform any operations necessary to prepare a package before the actual packaging. This often results in an unpacked, processed version of the package. |
| **package** | Take the compiled code and package it in its distributable format (for example : jar, war, ...etc) |
| pre-integration-test | perform actions required before integration tests are executed. This may involve things such as setting up the required environment. |
| **integration-test** | process and deploy the package if necessary into an environment where integration tests can be run. |
| post-integration-test | perform actions required after integration tests have been executed. This may including cleaning up the environment. |
| **verify** | run any checks to verify the package is valid and meets quality criteria. |
| **install** | install the package into the local repository, for use as a dependency in other projects locally. |
| **deploy** | done in an integration or release environment, copies the final package to the remote repository for sharing with other developers and projects. |

Clean Lifecycle:

| Sub-command | Description |
| -------- | ----------- |   
| pre-clean | Executes processes needed prior to the actual project cleaning |
| clean | Remove all files generated by the previous build |  
| post-clean | Execute processes needed to finalize the project cleaning |

Site Lifecycle:

| Sub-command | Description |
| -------- | ----------- |   
| pre-site | Executes processes needed prior to the actual project site generation. |  
| site | Generates the project's site documentation. |
| post-site | Executes processes needed to finalize the site generation, and to prepare for site deployment. |
| site-deploy | Deploys the generated site documentation to the specified web server. |


See
* http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#Lifecycle_Reference

* http://books.sonatype.com/mvnref-book/reference/lifecycle-sect-common-goals.html


### Maven plug-in goals by lifecycle phase #

Each unit of execution work in Maven is called a <strong>goal</strong>.

<a target="_blank" href="http://java.uzmanprogramci.com/maven-lifecycle/">
<img width="638" height="359" alt="fig maven-phase-plugin-goals"
src="https://cloud.githubusercontent.com/assets/300046/16313672/881e4a8e-3937-11e6-8af5-1c3b93b9caef.jpg">
</a>

Maven C/C++ Plugin http://duns.github.io/maven-nar-plugin/

### Maven plug-ins by lifecycle phase #

<a target="_blank" href="http://java.uzmanprogramci.com/maven-lifecycle/">
<img width="374" height="479" alt="fig maven lifecycle plugin-374x479-60"
src="https://cloud.githubusercontent.com/assets/300046/16313780/06fbabbc-3938-11e6-99fd-d3cb0acf5170.png">
</a>

The graphic at <a target="_blank" href="http://blog.empeccableweb.com/wp/deployments/maven/">Empeccableweb</a> includes "Archetype":

![maven2-100156414-orig](https://user-images.githubusercontent.com/300046/28752955-f8c5da38-74f8-11e7-85c2-8eedcc3ae41f.gif)


### Dependencies #

* http://www.sonatype.com/resources/books/maven-by-example

* https://books.sonatype.com/mvnref-book/reference/pom-relationships-sect-pom-best-practice.html

* http://www.sonatype.com/resources/books/maven-the-complete-reference


## Mirror

See https://maven.apache.org/guides/mini/guide-mirror-settings.html

The Maven Central Repository provides a UI to <br />
the mirror website where Maven pulls files from.
In the US it is:

   * http://repo.maven.apache.org/maven2
   <br /><br />

The UK mirror supports Europe:

   * http://uk.maven.org/maven2 
   <br /><br />

Others:<br />
http://repo.maven.apache.org/maven2/.meta/repository-metadata.xml

## Build Profiles

http://maven.apache.org/guides/introduction/introduction-to-profiles.html


## References

<a target="_blank" href="http://www.mkyong.com/tutorials/maven-tutorials/">
http://www.mkyong.com/tutorials/maven-tutorials/</a>
is a compelling resource.

## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
