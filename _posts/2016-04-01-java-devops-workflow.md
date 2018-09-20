---
layout: post
title: "Java DevOps Workflow"
excerpt: "Write once. Test everywhere."
tags: [java, programming, sample, gist]
image:
# feature: pic brown java beans 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622024/6a77b5b0-0584-11e6-93ea-ed1ca2c4bbc6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This page takes you step-by-step to establish an environment to create your own "known good" rig.

We begin with a manual walkthrough, which we then automate.

## Establish Environment

1\. Download and install a virtualization utility on your laptop or a virtual instance.

   * Vagrant

   * VMWare

   TODO: Instead of doing all the work below, 
   the results of it has been encapsulated into a Docker image at ...

## Download utilities
2\. Download and install package manager for your platform.

   * On Mac, Homebrew.

   * On Windows, Chocolatey.

   * On Linux, apt-get.

3\. Download and install language support utilities on your laptop or a virtual instance.

   * <a target="_blank" href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">
   Java SDK download from Oracle</a>

   * <a target="_blank" href="http://openjdk.java.net/">Open JDK from http://openjdk.java.net/install/</a>
   (on the Mac, https://wiki.openjdk.java.net/display/MacOSXPort/Main)


   * Utility processsors for Static Code quality Analysis.

   clone the https://github.com/teamed/qulice, 
   the maven plug-in to your local machine,
   then add in the pom.xml of the project
   the xml shown at http://www.qulice.com/.
   

> The primary objective of this tutorial is to get those learning Java to make use of
static code scanners.

## Clone GitHub

4\. Use Git to clone to your local laptop the repository containing source program code:

   * <a target="_blank" href="http://github.com/wilsonmar/java-sample-code/">http://github.com/wilsonmar/java-sample-code.git</a>
   based on code at http://www2.cs.uic.edu/~sloan/CLASSES/java/ 
   by https://acm.cs.uic.edu/ (University of Illinois at Chicago)

   * https://www.reddit.com/r/programmingbydoing/ from Graham "holyteach" Mitchell are assignments (challenges) but no answers.

> We would like example code scanned by static code analyzers so they're good examples of coding technique.

Even experienced programmers of Enterprise Java programs sometimes run the simplest of Java code
in order to verify the enviornment and various libraries,
such as after a new version in one of them.

If "known-good" code don't work,
then the issue is NOT the <strong>custom application code</strong> which the programmer has control.
By process of elimination, the problem lies in the setup items above.


5\. Clone or download utility class libraries (from 3rd parties) which custom Java program code specify for import

<strong>Google Guava</strong>
is an open source, Java based library developed by Google (and not those outside) 
It's supposed to facilitate best coding practices and helps reduce coding errors.

   * https://github.com/google/guava
   * https://en.wikipedia.org/wiki/Google_Guava
   * http://www.tutorialspoint.com/guava/

   It provides utility methods that makes use of functional programming for:

   * string processing
   * primitives support
   * I/O
   * validations
   * collections
   * caching
   * concurrency
   * common annotations

<strong>Log4J</strong>

   * Log4J

> We would like code in libraries scanned by static code analyzers so they form a good basis for coding.

## Compile OK?

By "known good" we mean more than what is needed to compile:

   * The java code file has an extension <strong>.java</strong>.

5\. Open a Terminal shell (on the Mac) or Run a Command window (on Windows),
    and navigate to where the GitHub folder to
    compile a program:

   ```
   javac HelloWorld.java
   ```

   NOTE: Case is sensitive, so you'll have to press Shift key for those upper case letters.

   NOTE: Compilation means taking the source code in the file HelloWorld.java 
   and creating a file named "HelloWorld.class" containing Java ByteCode (classes, thus the name).

   If there are errors, then troubleshoot the Java setup.

   There is a HelloWorld1.java file.
   The name of the class inside the file is NOT the same as the name of the .java file, this appears:

   <pre><code>
   HelloWorld1.java:1: error: class HelloWorld is public, should be declared in a file named HelloWorld.java<br />
   public class HelloWorld {<br />
          ^<br />
   1 error
   </code></pre>

6\. Run the compiled program use the command java as in:

   ```
   java HelloWorld
   ```

   The file extension ".class" is not specified in this command. 

   PROTIP: The .gitignore file specifies that no .class files be sent back up to GitHub because each enviornment compiles its own.

   The response should be a single line on the terminal:

   ```
   Hello World!
   ```

   Just for laughs, use your IDE/text editor to view the .java source code to see the coding which produced the output.

## Manual Compile

7\. In a terminal (or in Jenkins), manually run the shell script which compiles and runs all the samples.

   ```
   chmon a+x javac_all.sh<br />
   ./javac_all.sh
  ```

## .gitignore file

8\. Remove the .class files created by manual run of javac:

   ```
   rm -rf *.class
   ```

   Instead we'll be using Maven to run the compiler.

9\. Use a text editor to review the .gitignore file.

   The <strong>.gitignore</strong> file among the files specify what should not be sent back up to the repository.

   The <strong>.project</strong> folder is ???

   Notice the <strong>target</strong> folder which Maven sends its output is not uploaded back to GitHub.

## Install Maven

10\. Download build utility Maven. For Mac OSX:

   ```
   brew install maven
   ```

   Maven looks at the root of the folder for a <strong>pom.xml</strong> (Project Object Model)
   to process. Thus, the pom.xml in the sample folder begins and ends with `<project>` tags.

   See http://maven.apache.org/guides/introduction/introduction-to-the-pom.html

11\. Run the minimal pom.xml file.

   ```
   mvn clean
   ```

   The first time this runs, several Maven modules are downloaded automatically
   under the home folder of the logged in user, such as:

   ~/.m2/repository

   For example, under the org folder are apache, codehaus, and sonatype.

   Sonartype is the publisher of Nexus cloud-based repository.

   * https://docs.sonatype.org/display/Repository/Sonatype+OSS+Maven+Repository+Usage+Guide#SonatypeOSSMavenRepositoryUsageGuide-8.ReleaseIt
   * http://www.sonatype.com/books/nexus-book/reference/staging-sect-managing-plugin.html

   Alternately, there is Artifactory.com.

   An example of a response:

   ```
   [INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 4.490 s
[INFO] Finished at: 2016-03-29T13:10:24-06:00
[INFO] Final Memory: 12M/245M
[INFO] ------------------------------------------------------------------------
   ```

## Build with Maven

12\. Add additional goal to instrument.

   The "clean" after mvn command specifies one of the "goals" specified in the pom.xml.

   Other typical `<goal>` entries:

   * clean
   * compile
   * package
   * install (locally)
   * deploy (to a remote location)

   It specifies the Qulice Maven plug-in, which contains several checkers
   http://www.qulice.com/index.html

   http://www.qulice.com/quality.html provides links to the quality rules used by checkers packaged into Qulice.

   `<goal>instrument</goal>` in the pom.xml file invokes Cobertura, which complains when test coverage is not sufficient.

  ```
mvn clean instrument
   ```

   NOTE: The mvn program can accept several goals in one command.

13\. Defaults can be overridden by `<build>` entries in pom.xml.

   Jar files names ending in "SNAPSHOT" are not meant for public release.

14\. Add files containing userids and passwords used in deploy to a corporate repository.

  To deploy to remote locations, additional files are needed to specify user ids and passwords.

   "settings.xml", "pubring.gpg", and "secring.gpg" files
   are copied in for security reasons, files containing secruity credentials are not part of the repository on GitHub.

  This specifies the settings file as input into the deploy goal.

  ```
mvn clean deploy -e -Dci --settings ../../closures/settings.xml
   ```

## Dependencies

15\. Verify the pom.xml file and establish work folders Maven needs:

   ```
   mvn clean
   ```

   The first time this runs, several Maven modules are downloaded automatically.

   The ending lines:

   ```
   [INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 4.490 s
[INFO] Finished at: 2016-03-29T13:10:24-06:00
[INFO] Final Memory: 12M/245M
[INFO] ------------------------------------------------------------------------
   ```

### Test Harness

16\. Rather than downloading the test harness and other utilities, Maven can download a specific version:

   * JUnit
   <a target="_blank" href="http://blog.takipi.com/we-analyzed-60678-libraries-on-github-here-are-the-top-100/">
   (the most imported of all libraries -- by 64% of top Java projects)</a>

   * <a target="_blank" href="http://testng.org/doc/index.html">TestNG</a>

   * JMeter

   * Appium for mobile code

  This is especially for negative test programs.

### Static Scan

17\. The pom.xml also specifies download of Static Code Analyzers used to establish "known good" status.

   * <a target="_blank" href="http://www.qulice.com/qulice-maven-plugin/usage.html"> Qulice.com</a>

   These sample programs are run using a task runner.

   Examples of analyzers and what they are looking for:

   * http://www.qulice.com/quality.html


18\. Run the file:

   ```
   mvn compile
   ```


19\. Build the .jar package in the target folder:

   ```
   mvn package
   ```

   The .jar package is really a .zip file containing one or more class files.

## Task Runner

20\. Download and install a local task runner service:

   It's 2016, so this is really not optional for professional programmers.

  * Jenkins locally.

  * Jenkins in the cloud by Cloudbees or Circle-CI.

  * An alternative is <strong>Gradle</strong>, 
    what Google uses for Java Android development locally on a laptop.


## Footnote

This page contains an example of how to incorporate Gists (from GitHub) in Jekyll Markdown.

## References

   * http://docs.oracle.com/javase/8/
     Java Platform, Standard Edition (Java SE) 8

   * http://docs.oracle.com/javase/tutorial/

   * http://introcs.cs.princeton.edu/java/11cheatsheet/

   * http://java.worldbestlearningcenter.com

   * http://www.cs.armstrong.edu/liang/intro9e/exercisesolution.html


  
## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
