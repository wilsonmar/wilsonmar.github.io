---
layout: post
title: "Groovy (Language) introduction"
excerpt: "A groovy way to use the Java Virtual Machine"
tags: [apple, mac, setup, Go]
date: "2107-06-30"
file: "goovy-intro"
image:
# feature: groovy-intro-1900x254-180k
  feature: https://user-images.githubusercontent.com/300046/27741686-efc74390-5d83-11e7-9f3f-ba4bb43bfbac.png
  credit: PioneerDrama.com
  creditlink: https://www.pioneerdrama.com/searchdetail.asp?pc=GROOVY
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


This is a hands-on introduction to the Groovy programming langauge.
Effort was taken to sequence topics for faster learning.

Groovy development began in 2003 by James Strachan and Bob McWhirter.
Groovy 1.0 was released in January 2, 2007.

The advantage of Groovy:

1. Can run on a variety of operating systems (Linux, Windows, etc.)
2. Create code faster than Java?
3. Can use Java library classes, such as Grails for web apps
4. Still use JVM (Groovy compiles to Java)


## Social

<a target="_blank" href="http://groovy-lang.org/">http://groovy-lang.org</a>
is the Groovy language homepage, which is built from 
<a target="_blank" href="https://github.com/groovy/groovy-website">
https://github.com/groovy/groovy-website</a>

It's called "Apache Groovy" because it's an Apache open-source project.
Apache runs conferences on the language. Some notable presentations:

* https://www.youtube.com/channel/UC-Vs_q9uWBlSx5NsDkxoGAQ
   gr8conf.eu
   by venkat@agiledeveloper.com
   @venkat_s  Subramaniam


## Docker Image

   Docker images contain a complete environment:

   https://github.com/groovy/docker-groovy


## Install 

### Package Manager

   Formerly known as <a target="_blank" href="http://gvmtool.net/">
   GVM the Groovy enVironment Manager</a>, 
   <a target="_blank" href="http://sdkman.io/">
   SDKMan.io</a> 
   (inspired by RVM and rbenv tools widely used by the Ruby community)
   is a tool for Mac OSX, Linux or Cygwin (Unix-based system) users to manage parallel versions of multiple Software Development Kits. It provides a convenient Command Line Interface (CLI) and API for installing, switching, removing and listing Candidates. 

0. Install sdkman by running the following command in your Unix terminal:

   <pre><strong>curl -s "https://get.sdkman.io" | bash
   </strong></pre>

0. As instructed in the response:

    <pre><strong>source ~/.sdkman/bin/sdkman-init.sh
   </strong></pre>

0. Use SDK to install the latest version of Grails (this guide uses 3.2.4):

   <pre><strong>sdk install grails 3.2.4
   </strong></pre>

   https://tutorials.techmytalk.com/2014/07/19/grails-understanding/

0. Choose 'yes' when sdkman prompts you to choose whether to set this version as the default.

0. Verify:

   <pre><strong>sdk help
   </strong></pre>

   The response reaches out through the internet for version news:

   <pre>
==== BROADCAST =================================================================
* 28/06/17: Kotlin 1.1.3 released on SDKMAN! #kotlin
* 26/06/17: Grails 3.2.11 released on SDKMAN! #grailsfw
* 26/06/17: Grails 3.3.0.RC1 released on SDKMAN! #grailsfw
================================================================================
&nbsp;
Usage: sdk &LT;command> [candidate] [version]
       sdk offline &LT;enable|disable>
&nbsp;
   commands:
       install   or i    &LT;candidate> [version]
       uninstall or rm   &LT;candidate> <version>
       list      or ls   [candidate]
       use       or u    &LT;candidate> [version]
       default   or d    &LT;candidate> [version]
       current   or c    [candidate]
       upgrade   or ug   [candidate]
       version   or v
       broadcast or b
       help      or h
       offline           [enable|disable]
       selfupdate        [force]
       flush             &LT;candidates|broadcast|archives|temp>
&nbsp;
   candidate  :  the SDK to install: groovy, scala, grails, gradle, kotlin, etc.
                 use list command for comprehensive list of candidates
                 eg: $ sdk list
&nbsp;
   version    :  where optional, defaults to latest stable if not provided
                 eg: $ sdk install groovy
   </pre>

0. List versions of sdk installed:

   <pre><strong>sdk version
   </strong></pre>
  
0. List versions of groovy availble for install:

   <pre><strong>sdk list groovy
   </strong></pre>
  
   At the : symbol, press q to quit out or spacebar.

0. See Java:

   <pre><strong>sdk current java
   </strong></pre>

0. Install Java

   <pre><strong>sdk install java
   </strong></pre>

0. Install Groovy

   <pre><strong>sdk install groovy
   </strong></pre>

0. List all that has been installed:

   <pre><strong>sdk current
   </strong></pre>

   For more, see http://sdkman.io/usage.html


### Install On Mac using HomeBrew

0. Homebrew install on Mac:

   <pre><strong>brew install groovy
   </strong></pre>

   A sample response on June 2017:

   <pre>
==> Using the sandbox
==> Downloading https://dl.bintray.com/groovy/maven/apache-groovy-binary-2.4.11.zip
######################################################################## 100.0%
==> Caveats
You should set GROOVY_HOME:
  export GROOVY_HOME=/usr/local/opt/groovy/libexec
==> Summary
🍺  /usr/local/Cellar/groovy/2.4.11: 64 files, 27.6MB, built in 10 seconds
   </pre>

   ### Windows

   https://github.com/groovy/groovy-windows-installer

   See http://www.groovy-lang.org/install.html


   <a name="VerifyInstall"></a>

   ## Verify Install

   <pre><strong>groovy
   </strong></pre>

   A sample response on June 2017:

   <pre>
error: neither -e or filename provided
usage: groovy [options] [args]
options:
  -a,--autosplit <splitPattern>    split lines using splitPattern (default '\s')
                                   using implicit 'split' variable
  -b,--basescript <class>          Base class name for scripts (must derive from
                                   Script)
  -c,--encoding <charset>          specify the encoding of the files
  -classpath <path>                Specify where to find the class files - must
                                   be first argument
     --configscript <arg>          A script for tweaking the configuration
                                   options
  -cp,--classpath <path>           Aliases for '-classpath'
  -D,--define <name=value>         define a system property
  -d,--debug                       debug mode will print out full stack traces
     --disableopt <optlist>        disables one or all optimization elements.
                                   optlist can be a comma separated list with
                                   the elements: all (disables all
                                   optimizations), int (disable any int based
                                   optimizations)
  -e <script>                      specify a command line script
  -h,--help                        usage information
  -i <extension>                   modify files in place; create backup if
                                   extension is given (e.g. '.bak')
     --indy                        enables compilation using invokedynamic
  -l <port>                        listen on a port and process inbound lines
                                   (default: 1960)
  -n                               process files line by line using implicit
                                   'line' variable
  -p                               process files line by line and print result
                                   (see also -n)
  -v,--version                     display the Groovy and JVM versions
   </pre>

0. Eclipse IDE and Maven setup

   https://github.com/groovy/groovy-eclipse


## Sample code

0. Install a Git client.
0. Navigate to a working folder and:

   <pre><strong>git clone https://github.com/wilsonmar/groovy-samples
   cd groovy-samples
   </strong></pre>

   This section has you going through the several ways to run Groovy programs.

   ### Verify compile

   <a href="#Console">Skip to next topic</a> while I'm working through
   an error with this section.

0. Compile to a Java class file containing Java byte code:

   <pre><strong>groovyc hello.groovy
   </strong></pre>

0. List files to see "hello1.class" (and not hello.class) 
   created because the class file name is defined within the code.
   This Java bytecode can be deployed to Java application servers 
   (Jetty, Tomcat, JBoss, GlassFish, etc.).

   PROTIP: A class file is created for each closure definition.

0. Execute the class (bytecode) file like any other Java ones:

   On a Mac, notice the use of a colon:

   <pre><strong>java Hello1 -cp ~/gits/wilsonmar/groovy-samples/:.
   </strong></pre>

   On Windows, notice the use of semi-colon:
   
   <pre><strong>java Hello1 -cp C:\gits\wilsonmar\groovy-samples\;.
   </strong></pre>

   PROTIP: Capitalization counts in Java file names.
   
   BLAH: This does not work now. I am getting error message
   "Error: Could not find or load main class hello1"

   See http://javarevisited.blogspot.com/2015/04/error-could-not-find-or-load-main-class-helloworld-java.html


   <a name="Console"></a>

   ### Groovy Console 

0. In a Terminal:

   <pre><strong>groovyConsole
   </strong></pre>

   ![groovy-intro-console-572x194-26k](https://user-images.githubusercontent.com/300046/27742401-79c7ca68-5d86-11e7-96ed-81f91304bba6.png)

0. Select File Open, etc.

0. Press command + Q to Quit out of the program.


   ### Groovy shell 

   NOTE: Groovy is a dynamic language wrapper to Java.

0. Open a new Groovy shell:

   <pre><strong>groovysh
   </strong></pre>

0. Click on the Terminal window again.
0. Print a line or other

   <pre><strong>println "hello"
   </strong></pre>

0. List <a target="_blank" href="https://www.tutorialspoint.com/groovy/groovy_command_line.htm">
   commands</a>

   <pre><strong>:help
   </strong></pre>

   Notice there are two formats for the same command.
   For example, either `:exit` or the shorter `:x` to exit.

0. Exit the shell using a command starting with colon:

   <pre><strong>:x
   </strong></pre>

0. Invoke the shell again:

   Groovy coding doesn't yet have an import keyword that will do a 
   literal include of another file's contents.

   http://docs.groovy-lang.org/latest/html/documentation/#GroovyShell-load
   Load one or more files (or urls) into the buffer.

   <pre>groovy:000> :load hello.groovy</pre>

   PROTIP: The shell does not import groovy.transform.BaseScript
   
   <pre>
import groovy.transform.AnnotationCollector
   </pre>


   ### Sample script

   Let's begin by looking at a simple script to see basic constructs of a Groovy program: 

   PROTIP: Underlines and # are OK in file names.
   No dashes or + in file names.

0. Open a script in the Groovy Playground:

   <a target="_blank" href="https://groovy-playground.appspot.com/#?load=4cdac770f83bd4adde3ae4fa9e0814b7">
   https://groovy-playground.appspot.com/...</a>
   which 
   It is stored <a target="_blank" href="https://gist.github.com/wilsonmar/4cdac770f83bd4adde3ae4fa9e0814b7">Git</a>

   BLAH: Nothing happens when I click Execute!

   QUESTION: Does this happen for you?


   ### Basic Groovy Coding

0. In a text editor, open file <strong>hello.groovy</strong>:

   <pre>
// hello.groovy
class Hello1 {
   static void main(String[] args) {
      /* This program shows how to display 
      hello world to console. */
      System.out.println("Hello World")
      print "Hello "
      println('World')

      return
      System.exit(0)  // CAUTION: This shuts down Jenkins
      println "Lines after return or System.exit(0) are never executed."
   }
}
   </pre>

   The print function does not add a new line.<br />
   The println function adds a new line.

   Groovy is based on Java. 
   But in Groovy semicolons are required only to separate multiple functions on the same line.
   
   PROTIP: System.exit(0)

   ### Asserts

   JUnit in Groovy is GUnit.

   * https://tutorials.techmytalk.com/2014/07/19/grails-unittesting/
   * http://groovy.codehaus.org/Testing+Guide
   * http://www.ibm.com/developerworks/java/library/j-pg11094/

   ### Functions

   Using the def keyword in larger programs is important as it helps define the scope in which the variable can be found and can help preserve encapsulation.

   ### Profiling

   GProf was created
   <a target="_blank" href="http://nagaimasato.blogspot.com/2013/04/gprof-was-just-born.html">
   in 2013</a> to determine which parts of a program are taking most of the execution time 
   (like GNU gprof does for C, C++).

   ### Closures

   A closure in Groovy is an anonymous function. 
   Execution of the definition is delayed until invoked.

   <pre>
// x and y are defined within the closure definition:
def closureWithParameters = {x, y -> print(x +" and "+y)}  // Not executed immediately.
    closureWithParameters.call("Hello ladies", "Hello gentlemen")  // Prints 
   </pre>

   A closure in Groovy is an open, anonymous, block of code that can take arguments, return a value and be assigned to a variable. 

   "Higher-order functions" is a concept from mathematics where a function accepts other functions as its arguments, and can return functions as results.

   In opposition to the formal definition of a closure, Closure in the Groovy language can also contain free variables which are defined outside of its surrounding scope.

   * https://www.timroes.de/2015/06/28/groovy-tutorial-for-java-developers-part2-closures/
   * https://www.youtube.com/watch?v=URkFOLywex4
   * http://groovy-lang.org/closures.html
   * https://dzone.com/articles/closures-groovy
   * https://dzone.com/articles/higher-order-functions-groovy-

   ### Functional Programming

   * https://dzone.com/articles/functional-programming-groovy

   ### Default Library Dependencies

   NOTE: By default, Groovy includes these libraries, 
   so you don’t need to explicitly import them:

   <pre>
import java.lang.* 
import java.util.* 
import java.io.* 
import java.net.* 
&nbsp;
import groovy.lang.* 
import groovy.util.* 
&nbsp;
import java.math.BigInteger 
import java.math.BigDecimal
   </pre>

   ### Java Library Dependencies

   Additional imports, just as with Java:

   Grape for Dependency management for Groovy.
   Grape is built on Ivy, which is compatible with Maven,
   which automatically installs dependencies at runtime.

   http://docs.groovy-lang.org/latest/html/documentation/grape.html

0. Using a Terminal at my <a href="#groovy-samples">
   groovy-samples folder</a>,
   open file ImportGpsData.groovy

   <pre>
@GrabConfig(systemClassLoader=true)
@Grapes([
  @Grab(
    group='org.codehaus.groovy.modules.http-builder', 
    module='http-builder', 
    version='0.6' ),
   @Grab('mysql:mysql-connector-java:5.1.6'),
   @Grab(group='joda-time', module='joda-time', version='2.3')
  ])
import groovyx.net.http.RESTClient
import groovy.sql.Sql
import org.joda.time.DateTime
   </pre>

   * Joda-time alternative to standard Java data and time libraries. It's at
   mvnrepository.com/artifact/joda-time/joda-time/2.3

   * SQL to store and retrieve data from a database
   See https://gist.github.com/jpertino/801238

   * Google Guava

   * Apache Commons for logging


   Functions in the library are used by statements such as:

   <pre>
  def printableTime = new DateTime(it.time.toString())
  def format = DateTimeFormat.forPattern('MM/dd/yyyy - hh:mm aa')
  println printableTime.toString(format)
   </pre>

0. Run the program using it. Grape takes care of downloading it.
0. See what dependencies are available now:

   <pre><strong>grape list
   </strong></pre>

0. To manually install:

   <pre><strong>grape install xmlwriter xmlwriter 2.2.2
   </strong></pre>
   
0. To manually see all sub-dependencies:

   <pre><strong>grape resolve
   </strong></pre>

   FIXME: Errors 



   ### API



   ### Templating

   TODO:

   Hello world this is ${something}


   ### Use with Gradle

   (based on Maven syntax)


## Other source code:

   * https://groovy.codehaus.org
   * https://examples.javacodegeeks.com/jvm-languages/groovy/groovy-script-tutorial-beginners/
   with objects and database access.


   Data types are enforced at run-time, not compile time.

## Libraries

Grails builds web servers written in Groovy.

Griffon builds desktop apps in Groovy.



## Usage

Jenkins supports processing of Groovy scripts in post-build actions 
and as an action of the build.

Groovy's flexible syntax enables it to develop
DSLs (Domain-Specific Languages) 


<a target="_blank" href="https://github.com/CA-APM/ca-apm-acc-api-scripts/blob/master/scripts/agent-diag-report.groovy">
CA APM Command Center API Scripts</a>
manage log level of APM Agents.


IBM's Urban Code/uDeploy works with a Groovy language via a
<a target="_blank" href="https://developer.ibm.com/urbancode/plugin/groovy-ibmucd/">
plug-in</a>
to process XML files
<a target="_blank" href="https://developer.ibm.com/urbancode/plugindoc/ibmucd/groovy/1-2/">
Docs</a>


## Metaprogramming

* https://www.youtube.com/watch?v=UJhlp5P7Ec0

* https://www.youtube.com/watch?v=vwysol6tipM
   Metaprogramming techniques

* https://www.youtube.com/watch?v=vwysol6tipM&t=49s

## Back ends

* Grails with Groovy
* Ratpack
* Spring Boot

* gServ (Groovy specific library)
* Restlet Framework


## Rock Stars

Guillaume Laforge (@glaforge), now Developer Advocate at Google. But when he was at Restlet 
<a target="_blank" href="https://www.youtube.com/watch?v=4fumUVy2x1s">
presented this on 11 Dec 2015</a>.
has a swapi.io (Star Wars API) of planets, etc..

<a target="_blank" href="https://www.youtube.com/watch?v=ZjFKXrXfTbY">
"A Groovy Journey in Open Source Land, presentation 29 August 2016</a> 


## Video Tutorials

<a target="_blank" href="https://www.JeremyJarrell.com/">
Jeremy Jarrell</a> provides, back in 2014, a [3:37]
<a target="_blank" href="https://app.pluralsight.com/library/courses/groovy-fundamentals/table-of-contents"> Groovy Fundamentals video course on Pluralsight</a>
shows how to develop a Groovy application to parse GPS data from an XML file, insert it into a database, and correlate weather forecast data from 
<a target="_blank" href="https://developer.forecast.io/">
forecast.io</a> retrieved using a REST API.

Those with a Lynda subscription can view the <a target="_blank" href="https://www.lynda.com/Java-tutorials/Program-Groovy/486759/606194-4.html">
Program with Groovy</a> segment within the IntelliJ course.

<a target="_blank" href="https://www.youtube.com/watch?v=-JJOymUWISg">
What is Groovy?</a> 2013 


Other introductory tutorials:

* https://www.tutorialspoint.com/groovy/
* https://examples.javacodegeeks.com/jvm-languages/groovy/groovy-script-tutorial-beginners/
* https://www.timroes.de/2015/06/27/groovy-tutorial-for-java-developers/

* https://www.timroes.de/2015/06/28/groovy-tutorial-for-java-developers-part3-collections/

* https://www.youtube.com/watch?v=KDCu1vEwPWo
  Groovy scripting for SOAPUI from SmartBear

* https://learnxinyminutes.com/docs/groovy/
   Learn Groove in X Minutes
* http://groovy-lang.org/structure.html
* http://grails.asia/grails-tutorial-for-beginners-playing-with-groovy-language
* http://guides.grails.org/creating-your-first-grails-app/guide/index.html
* http://www.vogella.com/tutorials/Grails/article.html

## Resources

* http://thingsyoudidntknowaboutjenkins.tumblr.com/post/26585787635/built-in-groovy-scr ipting

* https://www.youtube.com/watch?v=xzc-LoJ0mt0
   Advanced Groovy Tips and Tricks</a>
   from SpringDeveloper