---
layout: post
title: "Java Install on macOS"
excerpt: "Because programmers can't get enough caffeine ;)"
tags: [apple, mac, setup]
date: "2016-08-10"
file: "java-on-apple-mac-osx"
image:
# feature: pic brown java beans 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622024/6a77b5b0-0584-11e6-93ea-ed1ca2c4bbc6.jpg
  credit: Green Coffee Lover
  creditlink: http://www.greencoffeelover.com/wp-content/uploads/2015/03/7.jpg
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a id="JDKSetupz"></a>

Like a long tour with commentary by an experienced guide, this is a deep dive into the various editions to equip you to debug JVM installation issues. "PROTIP" mark little-know or important facts not seen in many other tutorials.

There are several ways to install Java.

<a name="WhichJava"></a>

## Which Java You Got?

You'll come back to this after installation.

1. Open a Terminal session.

1. Shell scripts check if Java is available by:

   <pre><strong>command -v java</strong></pre>

   Alternately, the older form is:

   <pre><strong>which java</strong></pre>

   Either way, the response:

   <pre>/usr/bin/java</pre>

   PROTIP: "java" in the above path is a binary file.

1. List which versions are installed on your machine by looking at where MacOS installs programs:

   <pre>ls -al /Library/Java/JavaVirtualMachines/
   </pre>

   NOTE: This directory is at the root for the whole machine, not a particular user's home folder.

   The response on my machine, after all versions of Java are installed (at time of writing): 
   
   <pre>total 0
drwxr-xr-x   6 root  wheel  192 Jul 24 11:13 .
drwxr-xr-x   5 root  wheel  160 Nov 18  2018 ..
drwxr-xr-x   3 root  wheel   96 Mar 30  2018 jdk1.8.0_162.jdk
drwxr-xr-x   3 root  wheel   96 Feb  9  2019 jdk1.8.0_202.jdk
drwxr-xr-x   3 root  wheel   96 Jul 24 11:13 zulu-16.jdk
drwxr-xr-x  18 root  wheel  576 Nov 18  2018 zulu8.30.0.1-jdk8.0.172-macosx_x64
   </pre>

   WARNING: Older versions may not contain the latest security patches.

1. PROTIP: The Java program looks for the <tt><strong>$JAVA_HOME</strong></tt> environment variable to obtain files:

   <tt><strong>echo $JAVA_HOME
   </strong></tt>

   Sample response:

   <pre>/Library/Java/JavaVirtualMachines/jdk1.8.0_162.jdk/Contents/Home
   </pre>

   PROTIP: This command is my preferred way to see what a machine has because
   if you invoke java or javac, if it's not installed, MacOS prompts you to install the JDK. Clever. But don't do it if you want <a href="#DifferentJavas">other version of Java</a>.

   Java is used by Groovy, Grails, Spring Boot, and many others.


1. Additional details are provided by this command:

   <pre><strong>/usr/libexec/java_home -V
   </strong></pre>

   That's a capital <tt>-V</tt>.

   The response on my machine:

   <pre>Matching Java Virtual Machines (1):
    1.8.0_232, x86_64:  "AdoptOpenJDK 8"  /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
&nbsp;
/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
   </pre>

   Alternately:

   <pre>Matching Java Virtual Machines (4):
1.8.0_45, x86_64: "Java SE 8" /Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home
1.7.0_65, x86_64: "Java SE 7" /Library/Java/JavaVirtualMachines/jdk1.7.0_65.jdk/Contents/Home
1.6.0_65-b14-466.1, x86_64:   "Java SE 6" /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
1.6.0_65-b14-466.1, i386:  "Java SE 6" /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
&nbsp;
/Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home
   </pre>

1. PROTIP: It's kinda ironic, but to see what Java VM you have already installed, it helps if you know what version you have.

   Java 8 and before uses a non-standard parameter. Most other programs use either the <tt>\-v</tt> flag or two-dash <tt>\-\-version</tt> with the longer-form parameter name. However, with Java:

   <pre><strong>java -version
   </strong></pre>

   A sample response:

   <pre>java version "1.8.0_162"
Java(TM) SE Runtime Environment (build 1.8.0_162-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.162-b12, mixed mode)
   </pre>

   Alternately, Java 9 and after uses the standard "--version" (with two dashes) like most other Java programs:

   <pre><strong>java --version
   </strong></pre>

1. PROTIP: Java developers use the JDK rather than the JRE (Runtime Environment) in order to get the <strong>javac</strong> compiler. See what version of the <strong>Java Compiler</strong> is installed:

   <pre><strong>javac -version
   </strong></pre>

   A sample response:

   <pre>javac 1.8.0_162
   </pre>


   ### I'll stay with version 8 then

   Like many other open source advocates, we continue to use version 8 even though more recent versions have been created by Oracle.

   This is because Oracle changed their licensing after version 8 in 2017.

   PROTIP: <strong>Hold off downloading</strong> the java .dmg installer file
   as described at <a target="_blank" href="https://java.com/en/download/help/mac_install.xml">
   https://java.com/en/download/help/mac_install.xml</a>

   WARNING: Oracle installs an annoying Ask Toolbar, without asking.

   Oracle's versions are described at <a target="_blank" href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">http://www.oracle.com/technetwork/java/javase/downloads/index.html</a>

   Oracles docs on installing the JDK:<br />
   <a target="_blank" href="https://docs.oracle.com/javase/8/docs/technotes/guides/install/mac_jdk.html">
   https://docs.oracle.com/javase/8/docs/technotes/guides/install/mac_jdk.html</a>

   NOTE: Downloads of the JDK (Java Development Kit) contains the JRE (Java Runtime Engine).



   <a name="AppleJavaC"></a>

   ### Apple Java obsoleted

   PROTIP: The version that comes installed on Apple Macs is <strong>obsolete</strong> and thus does not have the latest security patches. But do NOT delete the default version.
   
   But if you did uninstall it, re-install <strong>Java 6</strong> for OS X 2014-001 obtained from <a target="_blank" href="https://support.apple.com/kb/DL1572?locale=en_US">https://support.apple.com/kb/DL1572?locale=en_US</a>


   <a name="DifferentJavas"></a>

   ### Different Javas available
   
   <a target="_blank" href="https://www.wikiwand.com/en/List_of_Java_virtual_machines">https://www.wikiwand.com/en/List_of_Java_virtual_machines</a> lists all known Java compilers.

   Several organizations work on OpenSDK specs from <a target="_blank" href="https://adoptopenjdk.net/">AdoptOpenJDK</a> and certified for Java SE TCK compliance on x64 reference architecture systems

   * When <a target="_blank" href="https://www.oracle.com/technetwork/java/eol-135779.html">Oracle</a> acquired Sun, the <strong>jdk</strong> (Java Development Kit) was one of the products obtained. Versions are downloaded directly from Oracle from <a target="_blank" href="http://jdk.java.net/">http://jdk.java.net</a>.

   * <a target="_blank" href="https://adoptopenjdk.net/">https://adoptopenjdk.net/</a> has both 8, 11, and 13 running the tradition "HotSpot" JVM and the more recent and faster "OpenJ9" JVM. To install the latest (v13):

    <pre><strong>brew install --cask adoptopenjdk</strong></pre>

   * <a target="_blank" href="https://www.ibm.com/us-en/marketplace/support-for-runtimes">IBM</a> OpenJDK with Eclipse OpenJ9 

   * <a target="_blank" href="https://access.redhat.com/articles/1299013">Red Hat</a>


   <a name="ZuluInstall"></a>

   ### Zulu
   
   <a target="_blank" href="https://www.azul.com/downloads/zulu">Azul Zulu</a> <a target="_blank" href="https://www.azul.com/downloads/zulu/zulu-mac/">downloads for macOS</a>, from a company that also sells Java optimization products. Its zulu8.30.0.1-jdk8.0.172-macosx_x64 from zip April 18, 2018 is 179.2 MB expanded

   <pre><strong>brew search zulu</strong></pre>

   The response:

   <pre>==> Formulae
zurl
==> Casks
zulu       zulu11     zulu13     zulu15     zulu7      zulu8      zulufx
   </pre>

1. To install the latest:

   <pre><strong>brew install zulu</strong></pre>

   The response:

   <pre>==> Downloading https://cdn.azul.com/zulu/bin/zulu16.30.15-ca-jdk16.0.1-macosx_x
######################################################################## 100.0%
==> Installing Cask zulu
==> Running installer for zulu; your password may be necessary.
Package installers may write to any location; options such as `--appdir` are ignored.
installer: Package name is Zulu 16.30+15
installer: Installing at base path /
installer: The install was successful.
   </pre>


<a name="JenvInstall"></a>

## Install Jenv to manage multiple Versions of Java #

   PROTIP: Much like NPM for NodeJs developers and [rbenv for Ruby](/ruby-on-apple-mac-osx/), if you're a developer, 
   you'll likely need to manage different versions of Java needed by different apps.
   
   <a target="_blank" href="http://hanxue-it.blogspot.com/2014/05/installing-java-8-managing-multiple.html?q=java">
   http://hanxue-it.blogspot.com/2014/05/installing-java-8-managing-multiple.html?q=java</a>
   <br />
   describes the steps.

1. Consider the Jenv utility:

   <tt><strong>brew info jenv
   </strong></tt>

   The response at time of writing:

   <pre>jenv: stable 0.5.4 (bottled), HEAD
Manage your Java environment
https://www.jenv.be/
Not installed
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/jenv.rb
License: MIT
==> Options
--HEAD
   Install HEAD version
==> Caveats
To activate jenv, add the following to your /Users/wilsonmar/.bash_profile:
  export PATH="$HOME/.jenv/bin:$PATH"
  eval "$(jenv init -)"
==> Analytics
install: 9,034 (30 days), 28,364 (90 days), 124,693 (365 days)
install-on-request: 9,030 (30 days), 28,348 (90 days), 124,090 (365 days)
build-error: 0 (30 days)
   </pre>

1. Install Jenv by specifying the location URL: https://raw.githubusercontent.com/entrypass/jenv/homebrew/homebrew/jenv.rb

   <tt><strong>brew install jenv
   </strong></tt>

   The response:

   <pre>...
==> Caveats
To activate jenv, add the following to your /Users/wilsonmar/.bash_profile:
  export PATH="$HOME/.jenv/bin:$PATH"
  eval "$(jenv init -)"
==> Summary
🍺  /usr/local/Cellar/jenv/0.5.4: 84 files, 73KB
   </pre>

   Previously:

   <pre>🍺  /usr/local/Cellar/jenv/0.4.4: 78 files, 65.5KB, built in 8 seconds
   </pre>

1. Instead of editing <tt>~/.bash_profile</tt> as described above, paste this which handles errors better:

   <pre>export JENV_ROOT="$(which jenv)" # /usr/local/var/jenv
if command -v jyenv 1>/dev/null 2>&1; then
  eval "$(jenv init -)"
fi
   </pre>

1. Restart:

   <tt><strong>source ~/.bash_profile
   </strong></tt>

1. To see if jenv can run, list its version and commands:

   <tt><strong>jenv
   </strong></tt>

   The response is like this (at time of writing July 24, 2021):

   <pre>jenv 0.5.4
Usage: jenv &LT;command> [&LT;args>]
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
   add         Add JDK into jenv. A alias name will be generated by parsing "java -version"
&nbsp;
See `jenv help <command>' for information on a specific command.
For full documentation, see: https://github.com/hikage/jenv#readme
   </pre>

0. See where the symlink leads:

   <tt><strong>ls -al $(which jenv)
   </strong></tt>

   My response (at time of writing):

   <pre>lrwxr-xr-x  1 wilsonmar  admin  29 Jul 24 10:10 /usr/local/bin/jenv -> ../Cellar/jenv/0.5.4/bin/jenv</pre>

   NOTE: The file jenv is a binary executable.

0. Use Homebrew's directories rather than ~/.jenv add to the bottom of your bash_profile file:

   <tt><strong>export JENV_ROOT="$(which jenv)"
   echo "$JENV_ROOT"
   </strong></tt>


   ### Jenv for several Java versions

0. Get info:

   <pre><strong>jenv info java
   </strong></pre>

   Sample response:

   <pre>Jenv will exec : /usr/bin/java
Exported variables :
  JAVA_HOME=/usr/local/bin/jenv/versions/system
   </pre>

0. List installers available for use by jenv:

   <pre><strong>ls -al /Library/Java/JavaVirtualMachines/
   </strong></pre>

   The response:

   <pre>total 0
drwxr-xr-x   6 root  wheel  192 Jul 24 11:13 .
drwxr-xr-x   5 root  wheel  160 Nov 18  2018 ..
drwxr-xr-x   3 root  wheel   96 Mar 30  2018 jdk1.8.0_162.jdk
drwxr-xr-x   3 root  wheel   96 Feb  9  2019 jdk1.8.0_202.jdk
drwxr-xr-x   3 root  wheel   96 Jul 24 11:13 zulu-16.jdk
drwxr-xr-x  18 root  wheel  576 Nov 18  2018 zulu8.30.0.1-jdk8.0.172-macosx_x64
   </pre>

   The folders above provide version handles (such as "zulu-16.jdk") for jenv to reference.

   For each version, along with lib and man (manual) folders, Jenv looks into a <strong>bin</strong> folder containing executables to use.

0. Construct the a path to those folder for a version by adding folder <strong>/Contents/Home</strong> to the known path:

   <pre><strong>FOLDER="/Library/Java/JavaVirtualMachines/zulu-16.jdk/Contents/Home"
   ls "$FOLDER"
   </strong></pre>

   The response:

   <pre>DISCLAIMER   bin          demo         jmods        lib          readme.txt
Welcome.html conf         include      legal        man          release
   </pre>


   ### Add Java versions

0. Construct a command to the path by adding"/Contents/Home" to the path you already know, such as this:

   <pre><strong>jenv add "$FOLDER"
   </strong></pre>

   A sample response:

   <pre>zulu-16.jdk added
   </pre>

0. List the Java versions jenv knows about:

   <tt><strong>jenv versions
   </strong></tt>

   The response if none if brew cask was not installed:

   <pre>* system (set by /usr/local/var/jenv/version)
   </pre>

0. To configure global version for all apps to use:

   <pre><strong>jenv global oracle64-1.8.0.45
   </strong></pre>

   Example response:

   <pre>system
   oracle64-1.7.0.65
   * oracle64-1.8.0.45 (set by /Users/wilsonmar/.jenv/version)
   </pre>


<a name="OpenJDK"></a>

### Open JDK #

Open JDK is the open-sourced implementation of the JRE spec, at
<a target="_blank" href="http://openjdk.java.net/">http://openjdk.java.net</a>

But some say it is not ready for "prime time" on MacOS because its installation is a dirty affair from 2013 when going from v6 to v7:

   * https://wiki.openjdk.java.net/display/MacOSXPort/Mac+OS+X+Port+Project+Status

Open JDK's <a target="_blank" href="http://openjdk.java.net/install/">
install page at http://openjdk.java.net/install/</a>
shows apt-get (for Debian, Ubuntu) and
yum (for Red Hat, CentOS, Oracle Linus, Fedora).

   * http://blog.shelan.org/2015/03/how-to-build-open-jdk-9-on-mac-osx.html
     on Yosemite

   * http://hanxue-it.blogspot.com/2014/05/installing-java-8-managing-multiple.html

<a target="_blank" href="http://gvsmirnov.ru/blog/tech/2014/02/07/building-openjdk-8-on-osx-maverick.html#tldr">
For macOS, this page recommends using Make to compile from source</a>.

0. Download source using Mercurial to a new folder "openjdk9":

   <tt><strong>hg clone http://hg.openjdk.java.net/jdk9/jdk9 openjdk9
   cd ./openjdk9
   </strong></tt>

   http://hg.openjdk.java.net/jdk8/jdk8 work stopped at 2014-03-04.

0. Install <a target="_blank" href="https://www.xquartz.org/"> XQuartz</a> for X Window System that runs on Macs:

   <tt><strong>brew install Caskroom/cask/xquartz<br />
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

   <tt><strong>brew install ccache
   </strong></tt>

0. Make a symlink /usr/bin/gcc -> /usr/local/Cellar/apple-gcc42/4.2.1-5666.3/bin/gcc-4.2 (same for g++)


<a name="TestBuild"></a>

## Test JDK Build #

https://mihail.stoynov.com/2015/01/29/building-openjdk-9-on-a-osx-or-any-linux/
   shows JDK 9 install using ccache, mercurial (hg), jtreg "testing harness", and Webrev to diff code


## Update Java

<a target="_blank" href="https://java.com/en/download/help/mac_java_update.xml">https://java.com/en/download/help/mac_java_update.xml</a>


NOTE: Others include cheatsheet, google-chrome, google-drive, google-hangouts, dropbox, etc.
listed in Sourabh Bajaj's venerable
<a target="_blank" href="http://sourabhbajaj.com/mac-setup/Homebrew/Cask.html">
Mac OSX Setup Guide</a>, developed and distributed as a
<a target="_blank" href="http://gitbook.com/">GitBook</a>.


<a name="Maven"></a>

### Maven (mvn)

0. Install using Homebrew:

   <pre><strong>brew install maven
   </strong></pre>

0. See its metadata and what java version Maven is based on:

   <pre><strong>mvn -version
   </strong></pre>

   If it's installed, the sample response:

   <pre>Apache Maven 3.8.1 (05c21c65bdfed0f71a2f2ada8b84da59348c4c5d)
Maven home: /usr/local/Cellar/maven/3.8.1/libexec
Java version: 1.8.0_162, vendor: Oracle Corporation, runtime: /Library/Java/JavaVirtualMachines/jdk1.8.0_162.jdk/Contents/Home/jre
Default locale: en_US, platform encoding: utf-8
OS name: "mac os x", version: "10.14.6", arch: "x86_64", family: "mac"
   </pre>

   PROTIP: Many have switched to using <strong>Gradle</strong> instead of Maven or Ant.



<a name="Kotlin"></a>

## Kotlin

Kotlin is a language that makes use of the JVM.
Invented by JetBrains (IntelliJ).


## Social

Top Java Blogs/bloggers to follow on Twitter:
* <a target="_blank" href="https://twitter.com/InfoQ">@InfoQ</a>
* <a target="_blank" href="https://twitter.com/baeldung">@baeldung</a>
* <a target="_blank" href="https://twitter.com/javarevisited">@javarevisited</a>
* <a target="_blank" href="https://twitter.com/AdamBien">@AdamBien</a>
* <a target="_blank" href="https://twitter.com/vlad_mihalcea">@vlad_mihalcea</a>
* <a target="_blank" href="https://twitter.com/JavaOOQ">@JavaOOQ</a>
* <a target="_blank" href="https://twitter.com/thjanssen123">@thjanssen123</a>
* <a target="_blank" href="https://twitter.com/The_Java_Dev">@The_Java_Dev</a>
* <a target="_blank" href="https://twitter.com/JournalDev">@JournalDev</a>
* <a target="_blank" href="https://twitter.com/nicolas_frankel">@nicolas_frankel</a>
* <a target="_blank" href="https://twitter.com/starbuxman">@starbuxman</a>
* <a target="_blank" href="https://twitter.com/DZone">@DZone</a>
* <a target="_blank" href="https://twitter.com/GuidesJava">@GuidesJava</a>
* <a target="_blank" href="https://twitter.com/SaralSaxena">@SaralSaxena</a>
* <a target="_blank" href="https://twitter.com/rafaelcodes">@rafaelcodes</a>
* <a target="_blank" href="https://twitter.com/arungupta">@arungupta</a>
* <a target="_blank" href="https://twitter.com/javinpaul">@javinpaul</a>
* <a target="_blank" href="https://twitter.com/JavaWorldCom">@JavaWorldCom</a>


## More on macOS

This is one of a series about macOS (previously Mac OSX):

{% include mac_links.html %}
