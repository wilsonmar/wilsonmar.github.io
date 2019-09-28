---
layout: post
title: "Play Framework"
excerpt: "For easier, faster play for all"
tags: [scala, framework, javascript]
date: "2016-04-23"
file: "play-framework"
image:
# feature: # pic-gray-players
  feature: https://cloud.githubusercontent.com/assets/300046/14763950/bd44455a-0963-11e6-85e7-11b2d8e5740b.jpg
  credit: Ashn James
  creditlink: https://ashnjames.wordpress.com/2010/05/21/delhi-old-and-new/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://www.quora.com/Which-is-better-Play-Framework-or-Spring-MVC-How-should-I-decide-what-to-use
">
Here's</a> Play's rating as a framework vs. Spring, Grails, etc.:

- [X] Fees (open source)
- [X] Speed to first app (samples, documentation)
- [X] Ease of debugging (clear error messages?)
- [X] Complexity to customize
- [X] Scalability
- [X] Community welcoming and helpful?


* Its use of Scala means non-blocking I/O.
* Its use of Functional Programming, immutable objects

## Install stand-alone #

0. JDK 8 is a pre-requisite.

   ### Stand-alone install #

   https://www.playframework.com/documentation/2.5.x/Installing
   shows installing Play through Lightbend Activator,
   described as "sbt plus templates".

   ### Stand-alone install #
   
0. Download the Play standalone installer from<br/>
   <a target="_blank" href="https://www.playframework.com/download#older-versions">
   <strong>https://www.playframework.com/download#older-versions</strong></a>

0. Select the version your app was built on.
   In this example, play-2.2.2 is used.
   Not the latest version.

0. Unzip.

0. PROTIP: Move the expanded folder to a location where you have both read and write access. 

   (Running play writes some files to directories within the archive, so don’t install to /opt, /usr/local or anywhere else you’d need special permission to write to.)

   The default location for Play is in /opt/, with a version/release code in the folder name.
   <pre>
   /opt/play-2.2.2
   </pre>

   The recommended location is without your user folder :

0. Open the file that OSX invokes for every new Terminal shell window in your favorite text editor,
   such as:
   
   <tt><strong>
   atom ~/.bash_profile
   </strong></tt>

0. Add a path:

   PROTIP: Define the <strong>PLAY2_HOME</strong> environment variable with the path to the Play framework executable.

   This would enable a script to change version without disrupting the setup.

   <pre><strong>
   export PATH=$PATH:~/play-2.2.2
   export PLAY2_HOME=~/play-2.2.2
   </strong></pre>

0. Close the Terminal 
0. In a new Terminal shell session:

   <pre><strong>
   cd ~/play-2.2.2
   chmod a+x play
   chmod a+x framework/build
   </strong></pre>


   ### Verify Play #

0. See if you can play:

   <tt><strong>
   play help
   </strong></tt>

   The response:

   <pre>
Getting com.typesafe.play console_2.10 2.2.2 ...
:: retrieving :: org.scala-sbt#boot-app
	confs: [default]
	6 artifacts copied, 0 already retrieved (2012kB/64ms)
&nbsp;
 _ __ | | __ _ _  _
| '_ \| |/ _' | || |
|  __/|_|\____|\__ /
|_|            |__/
&nbsp;
play 2.2.2 built with Scala 2.10.3 (running Java 1.8.0_102), http://www.playframework.com
Welcome to Play 2.2.2!
&nbsp;
These commands are available:
-----------------------------
license            Display licensing informations.
new [directory]    Create a new Play application in the specified directory.
&nbsp;
You can also browse the complete documentation at http://www.playframework.com.
   </pre>


## Using Play in an app #

0. Include Play in your app's Maven install pom.xml file.

0. Run `mvn install` in the app's folder to apply the app's Maven pom.xml file.

   Here's an example of the output from the gulpfile:

   <pre>
[INFO] Scanning for projects...
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building SAMI Trials Participant 1.0-SNAPSHOT
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] --- frontend-maven-plugin:0.0.20:install-node-and-npm (install node and npm) @ trials ---
[INFO] Node v0.10.31 is already installed.
[INFO] Found NPM version 1.4.21
[INFO] 
[INFO] --- frontend-maven-plugin:0.0.20:npm (npm install) @ trials ---
[INFO] Running 'npm install --color=false' in /Users/mac/gits/samsung/sami-trials-webapps/trials
[INFO] npm WARN package.json simba-tools@0.0.1 No description
[INFO] npm WARN package.json simba-tools@0.0.1 No repository field.
[INFO] npm WARN package.json simba-tools@0.0.1 No README data
[INFO] 
[INFO] --- frontend-maven-plugin:0.0.20:gulp (gulp build) @ trials ---
[INFO] Running 'gulp --no-color' in /Users/mac/gits/samsung/sami-trials-webapps/trials
[INFO] [03:30:43] Using gulpfile ~/gits/samsung/sami-trials-webapps/trials/gulpfile.js
[INFO] [03:30:43] Starting 'default'...
[INFO] [03:30:43] Starting 'clean'...
[INFO] [03:30:43] Finished 'clean' after 6.2 ms
[INFO] [03:30:43] Starting 'iconfont'...
[INFO] [03:30:44] gulp-svgicons2svgfont: Font created!
[INFO] [03:30:44] Finished 'iconfont' after 591 ms
[INFO] [03:30:44] Starting 'browserify'...
[INFO] [03:30:44] Finished 'browserify' after 17 ms
[INFO] [03:30:44] Starting 'css'...
[INFO] [03:30:45] gulp-ruby-sass: directory
[INFO] [03:30:47] gulp-ruby-sass: write trial_participants.css
[INFO]       write trial_participants.css.map
[INFO] [03:30:48] Finished 'css' after 3.83 s
[INFO] [03:30:48] Starting 'copy'...
[INFO] [03:30:48] Finished 'copy' after 323 ms
[INFO] [03:30:48] Finished 'default' after 4.77 s
[INFO] 
[INFO] --- maven-resources-plugin:2.7:resources (default-resources) @ trials ---
[WARNING] Using platform encoding (US-ASCII actually) to copy filtered resources, i.e. build is platform dependent!
[INFO] skip non existing resourceDirectory /Users/mac/gits/samsung/sami-trials-webapps/trials/src/main/resources
[INFO] 
[INFO] --- play2-maven-plugin:1.2.4:copy-dependencies (default-copy-dependencies) @ trials ---
[info] akka-testkit_2.10-2.2.3.jar already exists in destination.
[info] akka-actor_2.10-2.2.0.jar already exists in destination.
[info] config-1.0.2.jar already exists in destination.
[info] scala-library-2.10.2.jar already exists in destination.
[INFO] 
[INFO] --- play2-maven-plugin:1.2.4:compile (default-compile) @ trials ---
Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=512M; support was removed in 8.0
Getting org.scala-sbt sbt 0.13.0 ...
:: retrieving :: org.scala-sbt#boot-app
	confs: [default]
	43 artifacts copied, 0 already retrieved (12440kB/173ms)
Getting Scala 2.10.3 (for sbt)...
:: retrieving :: org.scala-sbt#boot-scala
	confs: [default]
	5 artifacts copied, 0 already retrieved (24447kB/163ms)
[info] Loading project definition from /Users/mac/gits/samsung/sami-trials-webapps/trials/project
[info] Set current project to TrialsParticipant (in build file:/Users/mac/gits/samsung/sami-trials-webapps/trials/)
[info] Updating {file:/Users/mac/gits/samsung/sami-trials-webapps/trials/}TrialsParticipant...
[info] Resolving org.hibernate.javax.persistence#hibernate-jpa-2.0-api;1.0.1.Fin[info] Resolving org.fusesource.jansi#jansi;1.4 ...
[info] Done updating.
[info] Compiling 4 Scala sources and 4 Java sources to /Users/mac/gits/samsung/sami-trials-webapps/trials/target/scala-2.10/classes...
[warn] Note: /Users/mac/gits/samsung/sami-trials-webapps/trials/app/controllers/Main.java uses or overrides a deprecated API.
[warn] Note: Recompile with -Xlint:deprecation for details.
[success] Total time: 7 s, completed Sep 8, 2016 3:32:17 AM
[INFO] 
[INFO] --- maven-resources-plugin:2.7:testResources (default-testResources) @ trials ---
[WARNING] Using platform encoding (US-ASCII actually) to copy filtered resources, i.e. build is platform dependent!
[INFO] skip non existing resourceDirectory /Users/mac/gits/samsung/sami-trials-webapps/trials/src/test/resources
[INFO] 
[INFO] --- play2-maven-plugin:1.2.4:test (default-test) @ trials ---
[INFO] Test phase skipped - no tests found
[INFO] 
[INFO] --- play2-maven-plugin:1.2.4:package (default-package) @ trials ---
Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=512M; support was removed in 8.0
[info] Loading project definition from /Users/mac/gits/samsung/sami-trials-webapps/trials/project
[info] Set current project to TrialsParticipant (in build file:/Users/mac/gits/samsung/sami-trials-webapps/trials/)
[info] Packaging /Users/mac/gits/samsung/sami-trials-webapps/trials/target/scala-2.10/trialsparticipant_2.10-1.0-SNAPSHOT.jar ...
[info] Done packaging.
[success] Total time: 1 s, completed Sep 8, 2016 3:32:21 AM
[INFO] Copying trialsparticipant_2.10-1.0-SNAPSHOT.jar to trials.jar
Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=512M; support was removed in 8.0
[info] Loading project definition from /Users/mac/gits/samsung/sami-trials-webapps/trials/project
[info] Set current project to TrialsParticipant (in build file:/Users/mac/gits/samsung/sami-trials-webapps/trials/)
[info] Packaging /Users/mac/gits/samsung/sami-trials-webapps/trials/target/scala-2.10/trialsparticipant_2.10-1.0-SNAPSHOT-sources.jar ...
[info] Done packaging.
[info] Main Scala API documentation to /Users/mac/gits/samsung/sami-trials-webapps/trials/target/scala-2.10/api...
[info] Wrote /Users/mac/gits/samsung/sami-trials-webapps/trials/target/scala-2.10/trialsparticipant_2.10-1.0-SNAPSHOT.pom
model contains 20 documentable templates
[info] Main Scala API documentation successful.
[info] Packaging /Users/mac/gits/samsung/sami-trials-webapps/trials/target/scala-2.10/trialsparticipant_2.10-1.0-SNAPSHOT-javadoc.jar ...
[info] Done packaging.
[info] 
[info] Your package is ready in /Users/mac/gits/samsung/sami-trials-webapps/trials/target/universal/trialsparticipant-1.0-SNAPSHOT.zip
[info] 
[success] Total time: 8 s, completed Sep 8, 2016 3:32:33 AM
[INFO] The dist directory does not exist, lookup for the distribution file in target/dist
[INFO] The target/dist directory does not exist, lookup for the distribution file in target/universal
[INFO] Distribution file found : /Users/mac/gits/samsung/sami-trials-webapps/trials/target/universal/trialsparticipant-1.0-SNAPSHOT.zip
[INFO] Copying trialsparticipant-1.0-SNAPSHOT.zip to trials.zip
[INFO] Artifact containing sources found - copying to target
[INFO] Artifact containing javadoc found - copying to target
[INFO] 
[INFO] --- play2-maven-plugin:1.2.4:package-war (default-package-war) @ trials ---
[INFO] Skipped War construction
[INFO] 
[INFO] --- maven-install-plugin:2.5.2:install (default-install) @ trials ---
Downloading: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-utils/0.4/maven-shared-utils-0.4.pom
Downloaded: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-utils/0.4/maven-shared-utils-0.4.pom (4 KB at 4.3 KB/sec)
Downloading: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-utils/0.4/maven-shared-utils-0.4.jar
Downloaded: https://repo.maven.apache.org/maven2/org/apache/maven/shared/maven-shared-utils/0.4/maven-shared-utils-0.4.jar (152 KB at 449.1 KB/sec)
[INFO] Installing /Users/mac/gits/samsung/sami-trials-webapps/trials/target/trials.jar to /Users/mac/.m2/repository/com/samsung/sami/trials/1.0-SNAPSHOT/trials-1.0-SNAPSHOT.jar
[INFO] Installing /Users/mac/gits/samsung/sami-trials-webapps/trials/pom.xml to /Users/mac/.m2/repository/com/samsung/sami/trials/1.0-SNAPSHOT/trials-1.0-SNAPSHOT.pom
[INFO] Installing /Users/mac/gits/samsung/sami-trials-webapps/trials/target/trials.zip to /Users/mac/.m2/repository/com/samsung/sami/trials/1.0-SNAPSHOT/trials-1.0-SNAPSHOT.zip
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 02:01 min
[INFO] Finished at: 2016-09-08T03:32:35-06:00
[INFO] Final Memory: 18M/193M
[INFO] ------------------------------------------------------------------------
macs-MacBook-Pro-4:trials mac$ ls
Gulpfile.js	fonts		lib		pom.xml		target
app		icons		node		project
common-js	images		node_modules	public
conf		js		package.json	styles
   </pre>

   Notice that a target folder is created.

0. Position the pwd to your app's folder (substituting the sample folder below)
   and start the app in an internet browser referencing Play's default port:

   <tt><strong>
   cd ~/gits/samsung/sami-trials-webapps/trials<br />
   play run --http.port=9000
   </strong></tt>

   Sample response (which can take a minute or two):

   <pre>
Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=512M; support was removed in 8.0
[info] Loading project definition from /Users/mac/gits/samsung/sami-trials-webapps/trials/project
[info] Set current project to TrialsParticipant (in build file:/Users/mac/gits/samsung/sami-trials-webapps/trials/)
[info] Updating {file:/Users/mac/gits/samsung/sami-trials-webapps/trials/}TrialsParticipant...
[info] Resolving org.hibernate.javax.persistence#hibernate-jpa-2.0-api;1.0.1.Fin[info] Resolving org.fusesource.jansi#jansi;1.4 ...
[info] Done updating.
&nbsp;
--- (Running the application from SBT, auto-reloading is enabled) ---
&nbsp;
[info] play - Listening for HTTP on /0:0:0:0:0:0:0:0:9000
&nbsp;
(Server started, use Ctrl+D to stop and go back to the console...)
   </pre>

0. Switch to an internet browser (Chrome or Firefox) referencing Play's default port:

   <tt><strong>
   localhost:9000
   </strong></tt>


## History #

<a target="_blank" href="http://zeroturnaround.com/rebellabs/the-curious-coders-java-web-frameworks-comparison-spring-mvc-grails-vaadin-gwt-wicket-play-struts-and-jsf/2/#!/">
Zeroturnaround.com</a> says:

"The origination story of the framework essentially boils down to Java developers being envious of Ruby on Rails developers having a super fast prototyping framework. Play has a binary component similar to the Rails component of RoR, which is used for scaffolding and makes Play a little unconventional as a Java web framework."

LinkedIn's move to Play in 2013, by Yevgeniy Birkman:

   <amp-youtube data-videoid="8z3h4Uv9YbE" layout="responsive" width="480" height="270"></amp-youtube>
   "Java devs had to spend a quarter of their time waiting for deploy"

