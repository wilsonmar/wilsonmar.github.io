---
layout: post
title: "Scala ecosystem"
excerpt: "The language, not the opera house in Milan"
tags: [scala, programming, ecosystem]
image:
#  feature: pic red curtains la scala 1900x500.jpg
   feature: https://cloud.githubusercontent.com/assets/300046/14580771/13ab344a-0396-11e6-8e2d-442f861417b0.jpg
   credit: Teatro alla Scala
   creditlink: http://www.connectingmx.net/wp-content/uploads/2015/04/fotina-340.jpg
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

Here is my hands-on approach to introduce the **ecosystem** around the Scala programming language.

The sequence of information and examples here has been hand-crafted based on 
various other tutorials.
What's new here is the sequence and hands-on approach of how information is introduced.

(This one page will be separated into separate ones)

## History

* 2016 Feb 22 Typesafe changes name to ![Lightbend](http://www.lightbend.com/)
* 2014 version 2.10.4
* 2011 TypeSafe formed to provide commercial support for a <a href="#WhatIsReactive">Reactive</a> Platform.
* 2003 <a href="#Odersky">Martin Odersky</a>'s group releases Version 1.0 of Scala after a year of work. 

[Features of each version are detailed on the Wikipedia page](https://en.wikipedia.org/wiki/Scala_%28programming_language%29#Versions)

<a name="WhatIsReactive"></a>

## What is Reactive?

On 2013, several people associated with Typesafe published a website named
[http://www.reactivemanifesto.org/](http://www.reactivemanifesto.org/)
which asked readers to sign the manifesto as a commitment to build "Reactive"
system with a more "coherant" appoach to systems that 
have these characteristics:

* Responsive - responds in a timely manner
* Resilient - responsive in the face of failure
* Elastic - stays responsive under varying workload
* Message Driven - rely on asynchronous message-passing that ensures loose coupling, isolation, location transparency, and provides the means to delegate errors as messages.

Terms used in the Manifesto are further defined in a
[Glossary](http://www.reactivemanifesto.org/glossary),
and reflect the blog article by @jboner named
[Reactive Manifesto 2.0](https://www.lightbend.com/blog/reactive-manifesto-20).
dated September 16, 2014.

Tweets about this topic are at 
<a target="_blank" href="https://twitter.com/search?q=reactivemanifesto">@reactivemanifesto</a>.

Curiously, the Manifesto doesn't mention HOW
it achieves all that wonderfullness.
It doesn't ever mention the word "Scala" at all.


<a name="WhyScala"></a>

## What Is Scala?

The name Scala is a portmanteau of "scalable" and "language".
Thus, the emphasis on stateless and non-blocking features in the language.

The official repository is at 
<a target="_blank" href="https://github.com/scala/scala">
github.com/scala/scala</a>

* <a target="_blank" href="http://docs.scala-lang.org/tutorials/">
  docs.scala-lang.org/tutorials/</a>

* <a target="_blank" href="https://www.coursera.org/course/progfun">
  Martin Odersky's Coursera Course</a>

* <a target="_blank" href="http://typesafe.com/resources/book/scala-for-the-impatient">
   Scala for the impatient</a>

[Prominant companies using Scala are listed on this Wikipedia page](https://en.wikipedia.org/wiki/Scala_%28programming_language%29#Companies)

Scala is said to power The Guardian (UK), Walmart, Sony, 
Huffington Post, etc. 

The extent of Twitter's adoption of Scala are:

* <a target="_blank" href="https://twitter.github.io/scala_school/">
  twitter.github.io/scala_school</a>
  started as lectures at Twitter.

* <a target="_blank" href="http://twitter.github.io/effectivescala/">
twitter.github.io/effectivescala</a>
presents "best practices" for Scala at Twitter. 
Useful for understanding idioms in Twitter's code.

Agencies/consultants working with Scala:

* [softwaremill.com](https://softwaremill.com)

Basics of the Scala language is presented during hands-on activities to set it up on your machine, below.


## Installation

0. Identify the latest version<br />
   <a target="_blank" href="http://www.scala-lang.org/download/">
   http://www.scala-lang.org/download</a>

   PROTIP: On a Mac, use Homebrew instead of downloading from 
   http://scala-lang.org/download (as many tutorials suggest).

   ```
   brew install scala --with-docs
   ```

   which installs to:

   ```
   /usr/local/Cellar/scala/...
   ```

   Alternately, on Ubunto Linux:

   ```
   sudo apt-get install scala
   ```

0. Verify the version:

   ```
   scala -version
   ```

   The response (assuming an installer from March 10, 2016):

   ```
   Scala code runner version 2.11.8 -- Copyright 2002-2016, LAMP/EPFL
   ```

<img align="right" src="https://cloud.githubusercontent.com/assets/300046/14325699/b81ebb0c-fbe7-11e5-84d5-847cdbe5f5c1.jpg" width="334" height="500">

NOTE: The "EPFL" is for École Polytechnique Fédérale de Lausanne
in Switzerland where
<a href="#Odersky">Martin Odersky</a> works, in their Programming Methods Laboratory.

The staircase at EPFL, 
pictured at right, was the inspiration for
the Scala logo:

<img src="https://cloud.githubusercontent.com/assets/300046/14332836/aafb16f2-fc08-11e5-8213-2e6d273b1328.png"><!-- Scala_logo 192x72.png -->

## Installation

0. Where is scala installed?

   ```
   which scala
   ```

   The response on a Mac:

   ```
   /usr/local/bin/scala
   ```

0. Find the various scala files on the whole drive:

   ```
   sudo find / -name scala-*
   ```

## Interactive Command Line REPL

0. In a Terminal command line window,
invoke the Scala run-time console REPL (Read Evaluate Print Loop) 
Scala's interactive shell

   ```
   scala
   ```

   The response:


   {% highlight text %}
   Welcome to Scala 2.11.8 (Java HotSpot(TM) 64-Bit Server VM, Java 1.6.0_65).
   Type in expressions for evaluation. Or try :help.
   
   scala> _
   {% endhighlight %}

   NOTE: Scala runs on the Java platform (Java Virtual Machine).

0. Get a list of REPL commands:

   ```
   :help
   ```

   REMEMBER: The colon precedes commands.

0. Clear the screen using REPL :keybindings on the keyboard.
On a Mac, press control + L. On Windows press Ctrl + L.

0. Press keyboard up arrow to retrieve history.

0. Quit back to bash console (like in the vim editor):

   ```
   :q
   ```

   Alternately, press control+C on a Mac to exit the process running Scala.

0. PROTIP: Navigate to the folder you want before entering scala REPL.

## Print Line functions and semicolons

0. Enter the scala REPL again at the command line.

0. Print text without line breaks:

   ```
   print("Hello, World");print(10)
   ```

   NOTE: Semicolons ("ugly cockroaches") are used only with multiple verbs on same line.

   This is an example of how Scala has more <strong>syntactic flexibility</strong> than Java coding.

0. Print text within REPL:

   ```
   println("Hello, World!")
   ```

   NOTE: Everything returns something (all Scala code is "expression based").

   More at [Scala coding](/scala-programming).

0. Exit REPL again.


## Clone the GitHub repository for this tutorial
At your operating system shell:

0. PROTIP: Create a workspace folder (such as "gits") 
to hold organizations within GitHub and other clouds.

0. PROTIP: Create a folder for each organization, account, or
other grouping of repositories (such as "wilsonmar").

0. At a folder of your choosing,
clone the repository referenced by this tutorial:

   ```
   git clone https://github.com/wilsonmar/scala.git
   ```

0. cd within the folder just created:

   ```
   cd scala
   ```

   There are several folders.

0. cd into the folder relevant to the next section of this tutorial:

   ```
   cd HelloWorld
   ```


## Shell commands within REPL

0. Open a Scala interactive command window (as explained above)
if you're not already in one.

0. Enable shell processing within REPL by importing the system library:

   ```
   import sys.process._
   ```

0. Issue a bash command to how much disk space is available. On a Mac:

   ```
   "df -k" !
   ```

0. Issue a command to list files in the present directory. On a Mac:

   ```
   "ls -al" !
   ```

We need to ignore stuff around the response, such as:

   ```
warning: there was one feature warning; re-run with -feature for details
total 8
drwxr-xr-x   3 mac  staff  102 Mar 11 05:31 .
drwxr-xr-x+ 18 mac  staff  612 Mar 11 05:30 ..
-rw-r--r--   1 mac  staff   63 Mar 11 04:33 HelloWorld.scala
res2: Int = 0
   ```

The Int = 0 returned is expected.
But the "res2" is a name that changes with each invocation.

0. Alternately, send output into a variable named result:

   ```
   val result = "ls -al" !!
   println(result)
   ```

NOTE: Rembember the double !!.

Notice there is only one file: HelloWorld.scala because
files created during compilation are not stored in git,
but in another repository such as Artifactory.

0. Confirm your present working directory. On a Mac:

   ```
   "pwd" !
   ```

If your user name is "mac", then:

   ```
   /Users/mac/gits/wilsonmar/scala/HelloWorld
   ```

Alternately, you could create the HelloWorld program by following these
instructions:


### Scala Program HelloWorld.scala

0. Create a folder to hold files for your Scala program source and files created around it.

   ```
   mkdir HelloWorld && cd HelloWorld
   ```

0. Typically this would be under Git version control.

   ```
   git init
   ```

0. Create a text file:

   ```
   copy con HelloWorld.scala
   ```

0. Open a text editor (such as Sublime Text).
0. Copy the code below and paste it in the editor.

   ```
   object HelloWorld extends App {
       println("Hello, World!")
   }
   ```

This program right now only uses built-in println function, 
so no libraries need to be imported yet.

NOTE: Rather than coding Java classes, 
Scala programmers code singleton objects.
The compiler converts Java classes with only one Java object.

NOTE: Default visibility in Scala is public.

0. Save the file as name <strong>HelloWorld.scala</strong>. 

NOTE: The text editor applies text coloring for Scala.

0. Navigate to the file you just created.

## Compile Scala from command line:

Regardless of how you got the HelloWorld.scala program source:

0. In a bash command line at the source folder:
0. Compile it:

   ```
   scalac HelloWorld.scala
   ```

No response is a good response when it comes to this.

### Troubleshoot compilation errors

However, if you get this:

{% highlight html %}
<console>:1: error: ';' expected but '.' found.
{% endhighlight %}

This is because you're still in the scala REPL.
Exit out to the operating system command line to compile.


### View results of compilation

0. List files created during compilation:

   <tt><strong>
   ls -al
   </strong></tt>

   The response:

   * HelloWorld.class
   * HelloWorld$.class
   * HelloWorld$delayedInit$body.class

   NOTE: Compilation creates class files containing Java byte code.


## Run scala class file

0. Run the compiled Scala class file so on completion lands within the interactive Scala shell (instead of exiting):

   ```
   scala -i HelloWorld.scala
   ```

   If you see the text specified in the println() function, congratulations.


   NOTE: This is to run Scala script to prepare Scala before presenting the scala prompt.

0. Alternately run by specifying a path:

   ```
   scala -i -classpath . HelloWorld
   ```

0. Run the compiled Scala class file so on completion 
an exit occurs back to the OS shell after execution.

   ```
   scala HelloWorld
   ```

   NOTE: Such commands are used within shell scripts.


## Compile and run a package

0. In a command line window, navigate to the folder containing
file named <strong>pkg.scala</strong>. 

0. Edit the file.

NOTE: This file contains Scala code to define a 
<strong>package</strong> of functions.

   {% highlight scala %}
   package com.xyz.app1 {

      object Hello {
         def main(args:Array[String]) {
         println("Hello")
        }
      }
   }
   {% endhighlight %}

0. Exit the editor to compile it:

   ```
   scalac pkg.scala
   ```

   No response is a good response when it comes to this.

0. List files created during compilation:

   ```
   ls -al
   ```

WARNING: Unlike individual source files created 
in the same folder as the scala code, 
a new folder "com" has been created.

0. Drill into the folder com. Then into folder "xyz".
Also folder "app1". Finally two files:

   * Hello.class
   * Hello$.class

0. To run the compiled classes, specify the full path,
including an object defined in the code:
 
   ```
   scala com.xyz.app1.Hello
   ```

If you see the text specified in the println() function, congratulations.

NOTE: on completion 
an exit occurs back to the OS shell after execution.



## SBT (Simple Build Tool)

SBT comes with Scala core (based on Maven).

Docs on it is at:

* http://www.scala-sbt.org/0.13.1/docs/Howto/

0. Install it using Homebrew:

   ```
   brew install sbt
   ```

   The response:

   <pre>
xcode-select: error: unable to get active developer directory, 
  use `xcode-select --switch` to set one (or see `man xcode-select`)
==> Downloading https://homebrew.bintray.com/bottles/sbt-0.13.11.el_capitan.bott
######################################################################## 100.0%
==> Pouring sbt-0.13.11.el_capitan.bottle.tar.gz
==> Caveats
You can use $SBT_OPTS to pass additional JVM options to SBT:
SBT_OPTS="-XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256M"
This formula is now using the standard typesafe sbt launcher script.
Project specific options should be placed in .sbtopts in the root of your project.
Global settings should be placed in /usr/local/etc/sbtopts
==> Summary
🍺  /usr/local/Cellar/sbt/0.13.11: 5 files, 1.2M
   </pre>

0. Confirm:

   ```
   sbt -version
   ```

0. Build it

   ```
   sbt
   ```

The command prompt

   ```
   Java HotSpot(TM) 64-Bit Server VM warning: ignore option MaxPermSize=256m; 
   port was removed in 8.0
   ```

   NOTE: The Scala compiler (scalac) was written by an author of the Java compiler.

0. Use the console task:

   ```
   console
   ```

   The response:

   ```
   Welcome to Scala version 2.10.3
   ```

   (or whatever version)


NOTE: Scala compiles into Java.
As Android applications are typically supplied as Java bytecode to be translated upon installation.

NOTE: Scala also can compile to JavaScript, making it possible to write Scala programs that can run in the browser.[21]



<a name="Akka"></a>

## Akka

Most new computers are being built with multi-core processors 
for concurrent execution, which is why Scala is built for concurrency.

Scala's Actors are concurrent isolated units of processing that run in
parallel without concern for threads and locking. 

The various units communicate by exchanging messages. Actors can also be seen as a form of active objects where invoking a method corresponds to sending a message.

Actors may communicate using <strong>futures</strong> which handles
requests asynchronously, but return a representation (the future) 
that allows await of the reply.

The Scala Actors library provides both asynchronous and synchronous message sending. (the latter are implemented by exchanging several asynchronous messages). 

Resources explaining Akka:

* http://akka.io/ for asynch and background processing

* http://spray.io/ for REST/HTTP servlet container Akka actors.

* Up, Up, and Out: Scaling Software with Akka:

   <amp-youtube data-videoid="GBvtE61Wrto" layout="responsive" width="480" height="270"></amp-youtube>

<a target="_blank" href="https://www.lightbend.com/services/training">
   Lightbend provides courses on Akka</a>.

   * Advanced Akka focuses on clustering and sharding.

## Logback for logging

Logging in Scala can use the Logback framework.


## Play! 2 Framework 

* http://www.lightbend.com/community/core-projects/play-framework

* https://www.playframework.com/

BTW, version 1 of Play was first published in 2008 by Zenexity
headed by Guillame Bort. Play 2 is a fundamentally different than Play! 1.
Play! 2 is developed in Scala under Reactive principles
(self hosted, stateless, horizontally scalable, async non-blocking).

<a target="_blank" href="https://app.pluralsight.com/library/courses/play-2-scala/table-of-contents">
Play! 2 for Scala</a> 1 hr 37m video course (14 Apr 2014)
by James Hughes (http://yobriefca.se and james@yobriefca.se)
requires a Pluralsight subscription.
The course shows how to build a simple Contacts app
using IntelliJ IDEA and command-line commands.

The app's data is obtained from a model accessing a SQL database
using ANORM abstraction.

Play 2 comes with Specs2 and Selenium support.

"Introduction to Play Framework for Java developers" by Lightbend

   <amp-youtube data-videoid="bLrmnjPQsZc" layout="responsive" width="480" height="270"></amp-youtube>


Introduction the the Play Framework by James Ward (Heroku):

   <amp-youtube data-videoid="9_YYgl65FLs" layout="responsive" width="480" height="270"></amp-youtube>
  
   * Asychronous and non-blocking (Google Docs, Trello)
   * From vertical scalability to scale horizontally with stateless framework
   * API first


The Play Framework at LinkedIn: Productivity and Performance at Scale:

   <amp-youtube data-videoid="8z3h4Uv9YbE" layout="responsive" width="480" height="270"></amp-youtube>


"Node.js v.s. Play Framework" by Yevgeny(Jim) Brikman at ScalaMatsuri 2014 

   <amp-youtube data-videoid="b6yLwvNSDck" layout="responsive" width="480" height="270"></amp-youtube>


## Lightbend/Typesafe Activator

Activator is a server app that aims to be a friendly one-stop-shop to bootstrap Scala, Akka, and Play development. 

Such friendliness comes at a price of licensing.

Activator can be used as a wrapper script that launches into traditional command line sbt, 
but it also includes a template and tutorial system, and an optional GUI for getting started.

### Activator Installation

0. On a Mac, instead of downloading http://www.lightbend.com/activator/download

   ```
   brew install typesafe-activator
   ```

0. Create a folder where a new project is created:

   ```
   activator new
   ```

   This can take several minutes, ending with:

   {% highlight text %}
   Choose from these featured templates or enter a template name:
   1) minimal-akka-java-seed
   2) minimal-akka-scala-seed
   3) minimal-java
   4) minimal-scala
   5) play-java
   6) play-scala
   {% endhighlight %}

   BLAH: This got stuck for me.

0. Create:

   ```
   activator ui
   ```

   BLAH: This did not create assets in my pwd.

   The server is live when you see:

     [info] play - Listening for HTTP on /127.0.0.1:8888

   To stop the server, press control+C.

0. Open another Terminal Shell to enter commands while the server runs.

   ```
   which activator
   ```

   The response:

   ```
   /usr/local/bin/activator
   ```

0. In a browser, use the default port 8888:

   ```
   http://127.0.0.1:8888
   ```

   The Activator UI enables you to switch quickly among 
   code, compile, test, run, and app windows.

    <a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/14334357/26c99a9e-fc11-11e5-91e4-32ac9f1e72e7.png">
    <img src="https://cloud.githubusercontent.com/assets/300046/14334357/26c99a9e-fc11-11e5-91e4-32ac9f1e72e7.png"></a>
    <!-- https://cloud.githubusercontent.com/assets/300046/14332920/2d85c586-fc09-11e5-8d85-b0032c05ff34.png"></a> scr scala activator play framework 1214x290.png and
    scr scala activator play framework 400x290.png -->


0. The Tutorial Hello Scala provide apps using basic Scala features.

0. Click Create app for the template to be cloned (downloaded).

Select a template.

0. Specify a folder location.

0. Activate.




<a target="_blank" href="http://www.lightbend.com/community/core-tools/activator-and-sbt">
lightbend.com/community/core-tools/activator-and-sbt</a> 
is based on assets at
<a target="_blank" href="https://github.com/typesafehub/activator">
github.com/typesafehub/activator</a>

   




### Play! 2 folders

The default folder structure is similar to .NET MVC with Razor view engine:

* **app** 

   * controllers
      * <a href="#AppScala">Application1.scala</a>

   * models
      * Application1.scala

   * Views
      * Global
      * <a href="#PlayViews">index.scala.html</a>
      * <a href="#Layout">layout.scala.html</a>
      * main.scala.html

* **conf** contains non-source files for configuration

   * application.conf
   * routes (no file extension)

* **project** 

   * build.properties
   * plugins.sbt


* **build.sbt** file written in Scala-based DSL.

* **public** holds static assets:

   * images
   * javascripts
   * stylesheets

* **test** 

   * ApplicationSpec.scala
   * IntegrationSpec.scala

* **build.sbt** 


<a name="Layout"></a>

### Layout

   {% highlight html %}
   @(message: String, names : List[String] )
   @layout {
      <h1>@html( @message )</h1>
      @nameList(names)
   }
   {% endhighlight %}

The @html processes HTML tags.


<a name="PlayViews"></a>

### Views

The first line of html files contain a block to pass in values:

   {% highlight html %}
   @(message: String, names : List[String] )

   <!doctype html>
   <h1>@message</h1>
   {% endhighlight %}

<a name="AppScala"></a>

### Controller Application.scala

The string is specified in this example:

   {% highlight html %}
   package controller

   import play.api._
   import play.api.mvc._

   object Application extends Controller {
      def index = Action {
         val names = List("One","Two","Three")
         Ok( views.html.index("Hello", names ))
      }

      // Establish session cookie to block injection attacks:
      def another = Action { implicit request ==> 
         val initialValue = session.get("counter").map(_.toInit).getOrElse(0)
         Ok(views.html.another()).withSession(
            "counter" -> initialValue + 1).toString
            )
      }
   }
   {% endhighlight %}


Play! uses cookies as default session and flash notification mechanisms.


<hr />


### Define build files
0. In bash command-line console within the custom program folder:

   ```
   touch build.sbt
   start build.sbt
   ```

0. Create a project folder.

   <a name="TransformOperator"></a>

0. Edit build.properties file:

   ```
   name := "Hello"
   version := "0.1"
   scalaVersion := "2.10.4"
   ```

   NOTE: The ":=" is Scala's transformation operator
   to set a new value or replace existing value.

0. Edit plugins.sbt for use with Eclipse IDE:

   ```
   addSbtPlugin("com.typsafe.sbteclipse" % "sbteclipse-plugin" % "2.4.0")
   ```

0. Invoke to create scaffolding:

   ```
   sbt eclipse
   ```

0. In Eclipse, specify the workspace:

   PROTIP: Use folder ws or something short to differentiate among projects.

0. Create a <strong>Scala Worksheet</strong>. ???



## ScalaTest Styles

http://www.scalatest.org/

Test classes extends a 
<a target="_blank" href="http://www.scalatest.org/user_guide/selecting_a_style">
test style class</a>:

   * For xUnit, there is FunSuite.
   * For BDD, FlatSpec.
   * For RSpec lovers, there is FlatSuite.
   * For Acceptace testers, FeatureSuite.

After selection, test packages should appear among Refer


## Performance Micro-Benchmarking

<a target="_blank" href="https://scalameter.github.io/">
scalameter.github.io/</a>
by Aleksandar Prokopec of Switzerland 
(<a target="_blank" href="https://twitter.com/alexprokopec">
@alexprokopec</a>, <a target="_blank" href="
https://github.com/axel22/">axel22</a>)
and clone https://github.com/scalameter/scalameter.git 
and https://github.com/scalameter/scalameter-examples

Among [Alex's videos](https://www.youtube.com/channel/UCoyqnhi_BdpLrBVMvkNIMMw) 
is this one showing JVM GC profile:

   <amp-youtube data-videoid="UHCeXdxkx70" layout="responsive" width="480" height="270"></amp-youtube>

## Profilers and metrics

* YourKit Profiler

* Oracle's VisualVM is free and often good enough

* The Dropwizard Metrics library 
collects metrics from the running production systems.

* Metrics are push to Graphite, 

* Google Caliper
for benchmarking Java code.

* https://www.codacy.com/


## Front-end Scala.JS

<a target="_blank" href="https://github.com/ochrons/scalajs-spa-tutorial">Scala.js</a>, the Scala to JavaScript compiler.
by Sébastien Doeraene in Switzerland 
([@sjrdoeraene](https://twitter.com/sjrdoeraene))

<a target="_blank" href="https://www.youtube.com/watch?v=n1GgVWOThhY">
Scala.js: Next generation front end development in Scala</a>:

   <amp-youtube data-videoid="n1GgVWOThhY" layout="responsive" width="480" height="270"></amp-youtube>


* https://github.com/sbt/sbt-ghpages
  generates a XSBT project website and pushes to ghpages on GitHub.com.


## Mobile

Due to its Java roots, Scala can be used to create Android apps
using the 
<a target="_blank" href="https://www.assembla.com/wiki/show/scala-ide/Developing_for_Android">
Assembla IDE</a>


## Google App Engine

Scala works smoothly on Google App Engine.



## Spark Big Data

Spark is written in Scala.

<a target="_blank" href="https://www.youtube.com/watch?v=AHB6aJyhDSQ">
   How Scala Conquered the Big Data World</a>:

   <amp-youtube data-videoid="AHB6aJyhDSQ" layout="responsive" width="480" height="270"></amp-youtube>


## Web Frameworks
Among the votes for<a target="_blank" href="http://www.infoq.com/research/jvm-web-frameworks">Top Web Frameworks for the JVM at InfoQ</a>, 
Play was identified as being more important and adoption-ready 
than Lift:

<img width="525" alt="jvm frameworks" src="https://cloud.githubusercontent.com/assets/300046/14407480/bc8f84f8-fe87-11e5-9a62-b78a6a5fa5e0.png">

* http://liftweb.net was created by David Pollak.

The open source Play framework was created in 2007 by Guillaume Bort, who sought to bring a fresh web development experience inspired by modern web frameworks like Ruby on Rails to the long-suffering Java web development community. 

Play 1.x had scala support via modules.

Play 2 is written completely in Scala with full java support.

Play follows a familiar stateless model-view-controller architectural pattern, with a philosophy of convention over configuration and an emphasis on developer productivity. Unlike traditional Java web frameworks with their tedious compile-package-deploy-restart cycles, updates to Play applications are instantly visible with a simple browser refresh. 

* https://www.quora.com/Why-did-Typesafe-select-Play-for-their-stack-instead-of-Lift


## Libraries

<a target="_blank" href="http://scalaz.github.io/scalaz/#scaladoc">
Scalaz</a> (from 
<a target="_blank" href="https://github.com/scalaz/scalaz">
this Github</a>)
provides purely functional data structures to complement those from the Scala standard library. 
It defines a set of foundational type classes (e.g. Functor, Monad) and corresponding instances for a large number of data structures.

Scalaz consists of three parts:

*  New datatypes (Validation, NonEmptyList, etc)
*  Extensions to standard classes (OptionOps, ListOps, etc)
*  Implementation of every single general functions you need (ad-hoc polymorphism, traits + implicits) 

* Slick

* http://scalatra.org/ web micro-framework for creating REST APIs.

* Logback logging library (16% vs. 5% for Log4j)

* http://liftweb.net/ Lift framework is popular

Among the top 100 libraries on GitHub:
http://blog.takipi.com/the-top-100-scala-libraries-in-2015-based-on-64562-github-libraries/

* Spark blows Hadoop out of the water
* https://github.com/twitter/scalding for cascading Hadopp MapReduce jobs.
* https://github.com/adamw/veripacks to verify package specifications
* https://github.com/adamw/elasticmq for message-based queuing
* https://github.com/adamw/macwire for dependency injection.

The ranking named [H2](http://www.h2database.com/html/main.html)
as the most popular database at #21.
As a "very fast open source small footprint JBDC API database",
H2 outranked MySQL (#33), and PostgreSQL (#50). 
MongoDB didn’t make the list for Scala.


## Full courses

* https://www.eduonix.com/courses/Software-Development/Learn-Scala-Programming-Language-from-Scratch



## Learning Resources for Introduction

In addition to resources noted above,

http://scala-lang.org/contribute/hacker-guide.html
The Scala Hacker Guide
"covers the entire process, from the conception of your idea or bugfix to the point where it is merged into Scala. Throughout, we will use a running example of an idea or bugfix one might wish to contribute.

http://amzn.to/1JfA1bV

http://www.atomicscala.com/free-sample
[$25 self-published ebook released March 2015 on Gumroad](https://gumroad.com/l/AtomicScala/)
by Bruce Teckel
is about Scala 2.11

http://joelabrahamsson.com/learning-scala/
gives an intro blog to Scala

Pluralsight published several video courses:

* https://app.pluralsight.com/player?course=scala-getting-started
by Justin Pihony (JustinPihony.blogspot.com)
shows the building of the fileSearcher package.

https://va1.scalacourses.com/
offers several self-paced video courses:

* $495 Introduction to Scala
* $495 Intermediate
* $275 Intro to Play Framework
* $249 Java 7/Scala 2.10 Object-Oriented Interop

http://www.amazon.com/Learning-Scala-Practical-Functional-Programming/dp/1449367933
Learning  Scala: Practical Functional Programming for the JVM 
(1st Edition April 2014)
by Jason Swartz

Published by O'Reilly, the book's page is at:
http://shop.oreilly.com/product/0636920030287.do

http://it-ebooks.org/tag/scala


## Scala Rock Stars
Here are the most well-known people who are putting stuff out about Scala:

Dick Wall, CTO of Escalatesoft.com and international champion of Scala:

* Video tutorials at https://www.parleys.com/channel/dick-walls-channel
is the most thorough series I've seen so far.

* Authored book "Programming in Scala"

<a name="Odersky"></a>
Martin Odersky
(@odersky from Switzerland) 

* Scala with Style:

   <amp-youtube data-videoid="kkTFx3-duc8" layout="responsive" width="480" height="270"></amp-youtube>


* Scala - the Simple Parts

   <amp-youtube data-videoid="ecekSCX3B4Q" layout="responsive" width="480" height="270"></amp-youtube>

* Martin conducted on Coursera COURSE:
[Functional Programming Principles in Scala](https://www.coursera.org/course/progfun)
which is not available now.

* However, still available from May 2015 is Martin's COURSE:
[Principles of Reactive Programming](https://www.coursera.org/course/reactive)

* Book: Programming in Scala: 
http://www.artima.com/shop/programming_in_scala
Second Edition Published December 13, 2010
Errata: http://booksites.artima.com/programming_in_scala

Josh Suereth (@jsuereth)

* [Scalawags YouTube channel](https://www.youtube.com/channel/UCHxNwi3l5CGZo1kG47k7i2Q)
hangouts 

* Google+
https://plus.google.com/u/0/112145465018184674652/posts

* Scala In Depth Developer book

* [SBT in action book](https://www.manning.com/books/sbt-in-action)

* basementcoders.com podcast

* https://github.com/ctataryn/LearningScala
contains the PDF of slidedeck

Jonas Bonér (@jboner)
is Founder & CTO of Lightbend (Typesafe)
and inventor of Akka.

* http://jonasboner.com/

Duncan K. DeVore (@ironfish, VP of Engineering at a power company)

* [VIDEO: The Autobiography of Building a Reactive Application at ScalaDays 2014 Berlin](https://www.parleys.com/tutorial/building-reactive-application)

Shadaj Laddad

* shadaj.me
* https://www.parleys.com/tutorial/scala-power-versatility

Alvin Alexander

* [OReilly book "Scala Cookbook"](http://www.amazon.com/gp/product/1449339611/)
* http://alvinalexander.com/

Viktor Klang,
one of the main contributors to Akka and co-author of Scala Future)

* Defends Scala vs. C#
https://medium.com/@viktorklang/hi-eef4acf316a8#.ez6xx6gxe



## Notifications

* Follow Lightbend on SoundCloud.com for podcasts such as
https://soundcloud.com/lightbend/scala-days-2014-git-going-faster-with-scala-roberto-tyley

* Videos at http%3A%2F%2Fwww.parleys.com

* http://reactconf.com/ occured November 20, 2014 in San Francisco.
See http://lanyrd.com/2014/reactsf/nov-20/

* ScalaDays (2012, 2013, 2014, 2015)

* Meetup - Bay Area Scala Enthusiast group 

* http://www.brianstorti.com/the-actor-model/
   The actor model in 10 minutes

* http://fruzenshtein.com/site-map/
   