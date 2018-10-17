---
layout: post
title: "Java Install on Mac OSX"
excerpt: "Because programmers can't get enough caffeine"
tags: [apple, mac, setup]
image:
# feature: pic brown java beans 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622024/6a77b5b0-0584-11e6-93ea-ed1ca2c4bbc6.jpg
  credit: Green Coffee Lover
  creditlink: http://www.greencoffeelover.com/wp-content/uploads/2015/03/7.jpg
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<a id="JDKSetupz"></a>

There are several ways to install Java.
This is the one that worked for me.

<a name="DifferentJavas"></a>

## Different Javas
   
Several organizations work on OpenSDK specs from <a target="_blank" href="https://adoptopenjdk.net/">AdoptOpenJDK</a> and certified for Java SE TCK compliance on x64 reference architecture systems

   * <a target="_blank" href="https://www.azul.com/downloads/zulu">Azul Zulu</a> <a target="_blank" href="https://www.azul.com/downloads/zulu/zulu-mac/">downloads for macOS</a>, from a company that also sells Java optimization products

   Its zulu8.30.0.1-jdk8.0.172-macosx_x64 from zip April 18, 2018 is 179.2 MB expanded

   * <a target="_blank" href="https://www.oracle.com/technetwork/java/eol-135779.html">Oracle</a> and http://jdk.java.net/

   * <a target="_blank" href="https://www.ibm.com/us-en/marketplace/support-for-runtimes">IBM</a> OpenJDK with Eclipse OpenJ9 

   * <a target="_blank" href="https://access.redhat.com/articles/1299013">Red Hat</a>

  * https://en.wikipedia.org/wiki/List_of_Java_virtual_machines
   <br /><br />


<a name="WhichJava"></a>

## Which Java You Got?

On a Terminal open to any folder:

0. The $JAVA_HOME environment variable is used by Groovy, Grails, Spring Boot, and others:

   <tt><strong>
   echo $JAVA_HOME
   </strong></tt>

   Sample response:

   <pre>
   /Library/Java/JavaVirtualMachines/jdk1.8.0_162.jdk/Contents/Home
   </pre>

   PROTIP: This command is my preferred way to see what a machine has because
   if you invoke java or javac, if it's not installed, MacOS prompts you to install the JDK. Clever. But don't do it if you want <a href="#DifferentJavas">
   other version of Java</a>.

   <a name="AppleJavaC"></a>

   ### Apple Java

   PROTIP: The version that comes installed on Apple Macs is obsolete and thus not have the latest security patches. But do not delete the default version.
   
   But if you did, to re-install <strong>Java 6</strong> for OS X 2014-001,
   it can be obtained from
   <a target="_blank" href="https://support.apple.com/kb/DL1572?locale=en_US">
   https://support.apple.com/kb/DL1572?locale=en_US</a>


0. To see what Java VM you have already installed:

   <pre><strong>
   java -version
   </strong></pre>

   A sample response:

   <pre>
java version "1.8.0_162"
Java(TM) SE Runtime Environment (build 1.8.0_162-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.162-b12, mixed mode)
   </pre>

0. PROTIP: Developers use the JDK rather than the JRE (Runtime Environment),
   see what version of the <strong>Java Compiler</strong> is installed:

   <pre><strong>
   javac -version
   </strong></pre>

   A sample response:

   <pre>
   javac 1.8.0_162
   </pre>

0. If you do see the MacOS prompt to install Java, click <strong>More Info...</strong>.

   <pre><strong>
   /usr/libexec/java_home -V
   </strong></pre>

   That's a capital V.

   The response on my machine on Sierra:

   <pre>
Matching Java Virtual Machines (4):
1.8.0_45, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home
1.7.0_65, x86_64:	"Java SE 7"	/Library/Java/JavaVirtualMachines/jdk1.7.0_65.jdk/Contents/Home
1.6.0_65-b14-466.1, x86_64:	"Java SE 6"	/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
1.6.0_65-b14-466.1, i386:	"Java SE 6"	/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
/Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home
   </pre>

   PROTIP: In OSX, all known JVM's are located at:

   <pre>
   /Library/Java/JavaVirtualMachines/
   </pre>

   NOTE: This directory is at the root for the machine, not a particular user home folder.

   ### Maven

0. See what derivative program such as Maven uses:

   <tt><strong>
   mvn -version
   </strong></tt>

   The sample response:

   <pre>
Apache Maven 3.5.3 (3383c37e1f9e9b3bc3df5050c29c8aff9f295297; 2018-02-24T12:49:05-07:00)
Maven home: /usr/local/Cellar/maven/3.5.3/libexec
Java version: 1.8.0_162, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_162.jdk/Contents/Home/jre
Default locale: en_US, platform encoding: utf-8
OS name: "mac os x", version: "10.13.6", arch: "x86_64", family: "mac"
   </pre>

0. Where is the Java executable?

   <tt><strong>
   command -v java
   </strong></tt>

   You should see this:

   <pre>
   /usr/bin/java
   </pre>

   PROTIP: java in the above path is a binary file.


   <a name="OracleJavaC"></a>

   ### Latest Version of Oracle Java #

0. PROTIP: <strong>Hold off downloading</strong> the java .dmg installer file
   as described at
   <a target="_blank" href="https://java.com/en/download/help/mac_install.xml">
   https://java.com/en/download/help/mac_install.xml</a>

   WARNING: Oracle installs an annoying Ask Toolbar, without asking.

   Oracles docs on installing the JDK:<br />
   <a target="_blank" href="https://docs.oracle.com/javase/8/docs/technotes/guides/install/mac_jdk.html">
   https://docs.oracle.com/javase/8/docs/technotes/guides/install/mac_jdk.html</a>

0. Use an internet browser to<br />
   <a target="_blank" href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">
   http://www.oracle.com/technetwork/java/javase/downloads/index.html</a>

0. Click the "Download" button for the JDK (not the JRE).

   NOTE: Downloads of the JDK contains the JRE.


   <a name="JenvInstall"></a>

   ### Install Jenv to manage multiple Versions of Java #

   PROTIP: If you're a developer, 
   you'll likely need to manage different versions of Java needed by different apps.
   Much like NPM for Node
   and [rbenv for Ruby](/ruby-on-apple-mac-osx/).

   <a target="_blank" href="http://hanxue-it.blogspot.com/2014/05/installing-java-8-managing-multiple.html?q=java">
   http://hanxue-it.blogspot.com/2014/05/installing-java-8-managing-multiple.html?q=java</a>
   <br />
   describes the steps.

0. Install Jenv by specifying the location URL: https://raw.githubusercontent.com/entrypass/jenv/homebrew/homebrew/jenv.rb

   <tt><strong>
   brew install jenv
   </strong></tt>

   The response:

   <pre>
==> Downloading https://github.com/gcuisinier/jenv/archive/0.4.4.tar.gz
==> Downloading from https://codeload.github.com/gcuisinier/jenv/tar.gz/0.4.4
######################################################################## 100.0%
🍺  /usr/local/Cellar/jenv/0.4.4: 78 files, 65.5KB, built in 8 seconds
   </pre>

0. To see if jenv can run, list its version and commands:

   <tt><strong>
   jenv
   </strong></tt>

   The response is like this (at time of writing Oct 15, 2018):

   <pre>
jenv 0.4.4
Usage: jenv <command> [<args>]
&nbsp;
Some useful jenv commands are:
   commands    List all available jenv commands
   local       Set or show the local application-specific Java version
   global      Set or show the global Java version
   shell       Set or show the shell-specific Java version
   rehash      Rehash jenv shims (run this after installing executables)
   version     Show the current Java version and its origin
   versions    List all Java versions available to jenv
   which       Display the full path to an executable
   whence      List all Java versions that contain the given executable
&nbsp;
See `jenv help <command>' for information on a specific command.
For full documentation, see: https://github.com/hikage/jenv#readme
   </pre>

0. See where it was installed:

   <tt><strong>
   which jenv
   </strong></tt>

   My response:

   <pre>/usr/local/bin/jenv</pre>

   NOTE: The file jenv is a binary executable.

0. Use Homebrew's directories rather than ~/.jenv add to the bottom of your bash_profile file:

   <tt><strong>
   export JENV_ROOT=/usr/local/var/jenv
   </strong></tt>

0. To enable shims and autocompletion add to the botton of your bash_profile file:
  
   <pre><strong>
   if which jenv > /dev/null; then eval "$(jenv init -)"; fi
   </strong></pre>

   ## Jenv for several Java versions

0. Get info:

   <pre><strong>
   jenv info java
   </strong></pre>

   Sample response:

   <pre>
   Jenv will exec : /usr/bin/java
Exported variables :
  JAVA_HOME=/Users/wilsonmar/.jenv/versions/system
   </pre>

0. List installers available for use by jenv:

   <pre><strong>
   ls -al /Library/Java/JavaVirtualMachines/
   </strong></pre>

   The response:

   <pre>
total 0
drwxr-xr-x  5 root  wheel  160 Mar 30  2018 .
drwxr-xr-x  5 root  wheel  160 Mar 30  2018 ..
drwxr-xr-x  2 root  wheel   64 Mar 30  2018 jdk-10.jdk
drwxr-xr-x  2 root  wheel   64 Mar 30  2018 jdk1.8.0_144.jdk
drwxr-xr-x  3 root  wheel   96 Mar 30  2018 jdk1.8.0_162.jdk
   </pre>

   If you don't see any, you need to first download a JVM installer containing folders bin, lib, jre, include, bundle, db, man.

   The path to a particular version is constructed by adding "/Contents/Home" to the end of the path.

0. The point of jenv is to add additional versions, such as back version JDK 7.

   <pre><strong>
   jenv add /Library/Java/JavaVirtualMachines/jdk1.7.0_65.jdk/Contents/Home
   </strong></pre>

   The response:

   <pre>
   oracle64-1.7.0.65 added
   </pre>

0. Add JDK 8:

   <pre><strong>
   jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_162.jdk/Contents/Home
   </strong></pre>

   http://download.oracle.com/otn-pub/java/jdk/8u101-b13/jdk-8u162-macosx-x64.dmg

   The response:

   <pre>
   oracle64-1.8.0.45 added
   </pre>

   The above provide a handle for jenv provide other apps to use.

0. List the Java versions jenv knows about:

   <tt><strong>
   jenv versions
   </strong></tt>

   The response if none if brew cask was not installed:

   <pre>
   * system (set by /usr/local/var/jenv/version)
   </pre>

0. To configure global version for all apps to use:

   <pre><strong>
   jenv global oracle64-1.8.0.45
   </strong></pre>

   Example response:

   <pre>
   system
   oracle64-1.7.0.65
   * oracle64-1.8.0.45 (set by /Users/wilsonmar/.jenv/version)
   </pre>


<a name="OpenJDK"></a>

### Open JDK #

Open JDK is the open-sourced implementation of the JRE spec, at
<a target="_blank" href="http://openjdk.java.net/">http://openjdk.java.net</a>

But some say it is not ready for "prime time" on MacOS because its installation is a dirty affair:

   * https://wiki.openjdk.java.net/display/MacOSXPort/Mac+OS+X+Port+Project+Status

Open JDK's <a target="_blank" href="http://openjdk.java.net/install/">
install page at http://openjdk.java.net/install/</a>
shows apt-get (for Debian, Ubuntu) and
yum (for Red Hat, CentOS, Oracle Linus, Fedora).

   * http://blog.shelan.org/2015/03/how-to-build-open-jdk-9-on-mac-osx.html
     on Yosemite

   * http://hanxue-it.blogspot.com/2014/05/installing-java-8-managing-multiple.html

<a target="_blank" href="http://gvsmirnov.ru/blog/tech/2014/02/07/building-openjdk-8-on-osx-maverick.html#tldr">
For OSX, this page recommends using Make to compile from source</a>.

0. Download source using Mercurial to a new folder "openjdk9":

   <tt><strong>
   hg clone http://hg.openjdk.java.net/jdk9/jdk9 openjdk9
   cd ./openjdk9
   </strong></tt>

   Note JDK 9 is under active development.

   http://hg.openjdk.java.net/jdk8/jdk8 work stopped at 2014-03-04.

0. Install <a target="_blank" href="https://www.xquartz.org/"> XQuartz</a> for X Window System that runs on OSX:

   <tt><strong>
   brew install Caskroom/cask/xquartz<br />
   brew cask list
   </strong></tt>

   NOTE: Downloaded /Library/Caches/Homebrew/xquartz-2.7.9.dmg was 7.9K

   xquartz staged at '/opt/homebrew-cask/Caskroom/xquartz/2.7.9' (73M)

0. cd to the .tar.gz directory containing the configure file for Make to use.
0. XQuartz fixes an error in this command:

   bash ./configure

0. Install apple-gcc42 the Apple C compiler.

   <a target="_blank" href="https://mihail.stoynov.com/2015/01/29/building-openjdk-9-on-a-osx-or-any-linux/">
   Mihail recommends</a>:

0. Install ccache (compiler cache):

   <tt><strong>
   brew install ccache
   </strong></tt>

0. Make a symlink /usr/bin/gcc -> /usr/local/Cellar/apple-gcc42/4.2.1-5666.3/bin/gcc-4.2 (same for g++)


<a name="TestBuild"></a>

## Test JDK Build #

https://mihail.stoynov.com/2015/01/29/building-openjdk-9-on-a-osx-or-any-linux/
   shows JDK 9 install using ccache, mercurial (hg), jtreg "testing harness", and Webrev to diff code

## Update Java

https://java.com/en/download/help/mac_java_update.xml

NOTE: Others include cheatsheet, google-chrome, google-drive, google-hangouts, dropbox, etc.
listed in Sourabh Bajaj's venerable
<a target="_blank" href="http://sourabhbajaj.com/mac-setup/Homebrew/Cask.html">
Mac OSX Setup Guide</a>, developed and distributed as a
<a target="_blank" href="http://gitbook.com/">GitBook</a>.

## Kotlin

Kotlin is a language that makes use of the JVM.
Invented by JetBrains (IntelliJ).


## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
