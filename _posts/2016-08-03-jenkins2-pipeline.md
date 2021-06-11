---
layout: post
title: "Jenkins2 Pipeline jobs using Groovy code in Jenkinsfile"
excerpt: "Slave nodes are now opinionated agents"
tags: [DevOps, Jenkins, Pipeline, Groovy]
date: "2016-08-03"
file: "jenkins2-pipeline"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article describes using Jenkins version 2 for Continuouse Integration (CI)
using <a href="#Groovy">Groovy DSL scripts</a>

This takes a deeper dive than <a target="_blank" href="https://github.com/jenkinsci/pipeline-plugin/blob/master/TUTORIAL.md">
The Pipeline tutorial</a>,
expanded for production use in an enterprise setting.


## Jenkins2 highlights #

This adds more deep-dive details and specifics about Jenkinsfile Groovy coding in
<a target="_blank" href="https://jenkins.io/2.0/">https://jenkins.io/2.0</a> and
in <a href="#Videos">videos</a> (<a target="_blank" href="https://www.youtube.com/watch?v=emV60CcDVV0&t=49m47s">
Pipeline</a>)

Summary of Jenkins2 features: [36:00]

* <a href="#Pipeline">Pipeline item type for new jobs</a> (instead of Freestyle)
* Entire pipeline as text code in SCM (GitHub)
* <a href="#MultipleSCM">Multiple SCM repositories in each job</a>
* Pausable: Jobs can wait for manual user input before continuing

* Jobs share global library to share scripts, functions, variables
   for DRY (Do not Repeat Yourself) - Reusable components and flow
* Extendable DSL with loops, logic

* Visualized: Pipeline StageView provides status at-a-glance dashboard and trending
* <a href="#ParallelRuns">Parallel execution</a> of arbitrary build states
* Jobs starting in one agent can switch (be joined) to another (fork/join)
* Resilient: <a href="#DurableTaskPlugin">Durable tasks</a> keep running while master restarts [41:33]
* Resumability: Restart from saved checkpoints (Cloudbees feature)
<br /><br />

See <a target="_blank" href="https://anoni.sh/jenkins-pipeline">https://anoni.sh/jenkins-pipeline</a> and <a target="_blank" href="https://anoni.sh/pipeline-syntax">anoni.sh/pipeline-syntax</a>


## Install Jenkins Pipeline plugin #

The assumption here is that you have followed 
   [my Jenkins Setup tutorial](/jenkins-setup/) 
   to install the latest version of Jenkins,
   which went Version 2 April 26, 2016 after over 10 years at v1.

Additionally, you have followed
   [my Jenkins plugins tutorial](/jenkins-plugins/) 
   to install the latest version of Jenkins2
   and the <strong>Pipeline</strong> plugin<br />

   Install the "Pipeline" plug-in (in Manage Jenkins, Manage Plugins, Available) at<br />
   <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Pipeline+Plugin">
   https://wiki.jenkins-ci.org/display/JENKINS/Pipeline+Plugin</a>

   PROTIP: Under the covers, Git clients use
   https://developer.github.com/v3/repos/hooks/

<hr />

<a name="Pipeline"></a> 

## Create Pipeline item type #

0. At the Jenkins Dashboard (root URL for Jenkins), click <strong>New Item</strong>.

0. Type the job name (such as "todos1.java.v01").

   PROTIP: Define a standard naming convention for Jenkins job names.
   Have the name with more than just the component name.
   Prefix the name with the overall app and its version (such as "CRM1").
   This is so people know where it belongs throughout the organization and publicly.

   PROTIP: Large teams use transitory elements (such as "unit_test", "QA", "prod", etc.)
   when separate teams work on the same assets at different points in the lifecycle.
   But avoid putting transitory elements in Jenkins job names.

   PROTIP: As the last part of a name, specify a version number, staring with "v01".
   This would allow simultaneous running of jobs which need to have different configurations.

0. Select <strong>Pipeline</strong> (instead of Freestyle). Click OK.

   <amp-img alt="jenkins2 item menu 20160811-650x618-i12.jpg" width="650" height="618" src="https://cloud.githubusercontent.com/assets/14143059/17595155/1ef08a70-5fa9-11e6-9721-24401896ab00.jpg"></amp-img>


### "Build Triggers" #

<img align="right" alt="jenkins2 build triggers 20160811-289x521-i12" src="https://cloud.githubusercontent.com/assets/14143059/17595360/022c2f7e-5faa-11e6-952f-c66a45820d47.jpg">

   The "Build Triggers" section provide a variety of options.
   Some check boxes are mutually exclusive, such as "Build periodically".


### Discard old builds #

   Clicking this creates a structure:

   <amp-img alt="jenkins2 pipeline discard old jobs 20190811-650x618-i12.jpg" width="650" src="https://cloud.githubusercontent.com/assets/14143059/17596156/63d26b5a-5fad-11e6-83c4-dd770b842147.jpg"></amp-img>


## Groovy code #

   The basic ways to obtain (and change) Groovy code for Pipleline type jobs:

   0. <a href="#JenkinsfileGitHub">In a Jenkinsfile</a> obtained from GitHub (or other SCM)

   0. <a href="#InlineCode">Inline code</a> is good for learning

   0. From the run results screen, click <a href="#Replay">Replay</a>, 
   then dynamically changing code before rerun.

<hr />

<a name="JenkinsfileGitHub"></a>

### Jenkinsfile from GitHub #

This is the most typical approach in enterprise settings.

[From github-hooks?]




### Pipeline Groovy #

0. Click "Pipeline" tab to bring that section up.

   PROTIP: On Linux CentOS, the default folder Jenkins looks for the Jenkinsfile is
   (replacing "box2" with your job item name):

   <pre>
   /var/lib/jenkins/workspace/box2@script/Jenkinsfile
   </pre>

   Instead of manually clicking through the Jenkins UI, the 
   <a target="_blank" href="https://jenkins.io/solutions/pipeline/">
   Pipeline plugin</a> in Jenkins 2
   reads a text-based <strong>Jenkinsfile</strong>
   <a href="#Groovy">Groovy script code</a> checked into source control.


   <a name="Jenkinsfile"></a>

   ### Jenkinsfile format #

   The Jenkins file used to build the Jenkins.io website is<br />
   <a target="_blank" href="https://github.com/jenkins-infra/jenkins.io/blob/master/Jenkinsfile/">
   https://github.com/jenkins-infra/jenkins.io/blob/master/Jenkinsfile</a>

   The first line "shebang" defines the file as a Groovy language script:

   <pre>
   #!/usr/bin/env groovy
   </pre>

   In-line Pipeline files do not have a "shebang" because it is supplied internally.

0. Add Groovydoc comments

   <pre>
/**
 * ReqA Class description
 */
   </pre>

   PROTIP: Use of GitHub reduces the need for this, 
   but it's helpful for special notes.

0. Select from the "try sample" pull down "Hello World" or, alternately, highlight the code below and paste it on the form:

   <pre>
#!/usr/bin/env groovy
&nbsp;
/**
 * Sample Jenkinsfile for Jenkins2 Pipeline
 * from https://github.com/hotwilson/jenkins2/edit/master/Jenkinsfile
 * by wilsonmar@gmail.com 
 */
&nbsp;
import hudson.model.*
import hudson.EnvVars
import groovy.json.JsonSlurperClassic
import groovy.json.JsonBuilder
import groovy.json.JsonOutput
import java.net.URL
&nbsp;
try {
   node {
   stage '\u2776 Stage 1'
   echo "\u2600 BUILD_URL=${env.BUILD_URL}"
&nbsp;
   def workspace = pwd()
   echo "\u2600 workspace=${workspace}"
&nbsp;
   stage '\u2777 Stage 2'
   } // node
} // try end
catch (exc) {
/*
    err = caughtError
    currentBuild.result = "FAILURE"
    String recipient = 'infra@lists.jenkins-ci.org'
    mail subject: "${env.JOB_NAME} (${env.BUILD_NUMBER}) failed",
            body: "It appears that ${env.BUILD_URL} is failing, somebody should do something about that",
              to: recipient,
         replyTo: recipient,
    from: 'noreply@ci.jenkins.io'
*/
} finally {
&nbsp; 
    (currentBuild.result != "ABORTED") && node("master") {
        // Send e-mail notifications for failed or unstable builds.
        // currentBuild.result must be non-null for this step to work.
        step([$class: 'Mailer',
           notifyEveryUnstableBuild: true,
           recipients: "${email_to}",
           sendToIndividuals: true])
    }
&nbsp;
    // Must re-throw exception to propagate error:
    if (err) {
        throw err
    }
}
   </pre>

   Each line in this sample is explained when the log is shown, below.

0. Click Save for the item screen.

   ### Build Now for Stage View #

0. Click on "Build Now".

   PROTIP: Only click once on Jenkins links or two executions will result from a double-click.

   A sample response:

   <amp-img width="490" height="277" alt="jenkins2 build hello-world-490x277-i38.png" src="https://cloud.githubusercontent.com/assets/300046/17341552/59559492-58b2-11e6-84a1-f1acade300ae.png"></amp-img>
   NOTE: Text in headings were specified in state keywords in the Groovy script above.

0. Cursor over one of the "ms" numbers (for milliseconds or thousands of a second) 
   in the green area and 
   click the Log button that appears.

   A pop-up appears with the text specified by the echo command within the Groovy script.

0. Click the "X" at the upper-right of the dialog to dismiss it.

0. To remove the menu on the left, click "Full Stage View".

   PROTIP: The "full stage view" will be needed when there are more stages going across the screen.

   ### Build History #

0. To return to the menu with Build History, <br />
   click the item/job name in the breadcrumbs or press command+left arrow.

0. Click one of the jobs in the Build History section in http://.../job/box/5/

   Notice the number in the URL corresponds to the number listed.

   PROTIP: The time of the run is the server's time, not your local time on your laptop.

0. Click "Console Output" for log details created from that run.

   We now try various other Groovy scripting techniques. But first:



<a name="VaryGroovy"></a>

## Vary Groovy scripting #

The analysis of the Console Log from running the sample Groovy script consists of these topics:

   * <a href="#Jenkinsfile">Jenkinsfile vs inline</a>
   * <a href="#Stages">Stages</a>
   * <a href="#Imports">Imports</a>
   * <a href="#TryCatch">Try Catch to email</a>
   * <a href="#EnvVars">Environment Variables</a>

   * <a href="#UnicodeIcons">Unicode icons</a>
   * <a href="#ColorWarapper">Color wrapper</a>

   * <a href="#GitURL">Specific Git URL</a>
   * <a href="#CheckoutSCM">Checkout SCM</a>
 
<hr />

   `#!/usr/bin/env groovy` is nickamed the "shebang" to announce that the file is in Groovy-language formatting.
   PROTIP: This is not needed for in-line scripts, but there in case in case this is copied to a 
   <a href="#Jenkinsfile">Jenkinsfile</a>.

   `\**` with two asterisk is the code for <a href="#CodeScanners">code scanners</a> which extract metadata from comments
   in all related files to come up with an analysis of the codebase.

   `stage` commands are used to separate timings reported in the log.

   `\u2776` and `\u2777` are Unicode for a black dot with a 1 and 2 in it, to make "Entering stage" lines faster to find.

   `\u2600` is Unicode for a "star" icon to make frequently referenced information faster to find.

   Notice that unlike Java code, there are <strong>no semicolons</strong>.

   Code between the braces ({ and }) is the <strong>body</strong> of the node step. 

   We will be going to alter this code in the <a href="#VaryGroovy">
   next section</a>.




<a name="InfrastructureAsCode"></a>

## Infrastructure as code #

Having infrastructure defined in text code
enables experimentation (using experimental branches).

This improves quality by making use of 
<strong>code review</strong> features in GitHub.

Having infrastructure specifications in the same repository
ensures that changes are automatically reflected.

https://github.com/jenkinsci/pipeline-examples

* Run several repos within an organization within GitHub.

<a target="_blank" href="https://www.youtube.com/watch?v=emV60CcDVV0&t=1h6m7s">
Jesse on GitHub</a>


<a name="Jenkinsfile"></a>

## Jenkinsfile vs inline Groovy Scripts #

Here we want go beyond basic scripts and
look at scripts used in <strong>production</strong> (productive) use,
which are more complicated/complex than almost all the tutorials on the internet:

*  The Jenkinsfile Groovy script used to build the website
   <a target="_blank" href="https://github.com/jenkins-infra/jenkins.io/blob/master/Jenkinsfile">
   Jenkins.io</a> 

*  <a target="_blank" href="https://github.com/freebsd/freebsd-ci/blob/master/scripts/build/build-test.groovy">
   The Jenkins file used to build FreeBSD</a> 
   by Craig Rodrigues (rodrigc@FreeBSD.org)

* <a target="_blank" href="https://github.com/Jotschi/maven-release-workflow-test">
   Jenkinsfile with Maven</a> by <a target="_blank" href="http://jotschi.de/">Johannes Schüth</a> 

Lessons from these are provided below.



<a name="Imports"></a>

### Imports #

The top set of lines in Jenkinsfile Groovy scripts need to be import statements, if any,
to pull in libraries containing functions and methods referenced in the script.
Examples:

   <pre>
import hudson.model.*
import hudson.EnvVars
import groovy.json.JsonSlurperClassic
import groovy.json.JsonBuilder
import groovy.json.JsonOutput
import java.net.URL
   </pre>

   Hudson is the previous name of Jenkins before it forked.

   The official documentation page for the Apache Groovy language is <br />
   <a target="_blank" href="http://www.groovy-lang.org/documentation.html#gettingstarted">
   http://www.groovy-lang.org/documentation.html#gettingstarted</a>

   Groovy was used to build <a target="_blank" href="https://gradle.org/">
   Gradle</a> 
   because it can handle larger projects than Maven,
   which Gradle replaces.

<a name="Stages"></a>

### Stages #

   <amp-img width="574" height="374" alt="jenkins flow 20160805-574x374-i15.jpg" src="https://cloud.githubusercontent.com/assets/14143059/17537073/eab0c64c-5e56-11e6-85a2-4ecbbcbaf364.jpg"></amp-img>
   This diagram from Jenkins.io 
   illustrates the flow of work.



<a name="TryCatch"></a>

### Try Catch to email #

NOTE: Groovy is a derivative of Java, so it has Java's capability to catch (handle)
   execution <strong>exceptions</strong> not anticipated by the
   programming code.

Notice that 

   <pre>
   err = caughtError
   currentBuild.result = "FAILURE"
   </pre>

   <a target="_blank" href="https://github.com/jenkins-infra/jenkins.io/blob/master/Jenkinsfile/">
   This sample</a> catch block sends out an email:

   <pre>
catch (exc) {
    String recipient = 'infra@lists.jenkins-ci.org'
    mail subject: "${env.JOB_NAME} (${env.BUILD_NUMBER}) failed",
            body: "It appears that ${env.BUILD_URL} is failing, somebody should do something about that",
              to: recipient,
         replyTo: recipient,
            from: 'noreply@ci.jenkins.io'
}
   </pre>


   <a name="EnvVars"></a>
   
   ### Environment Variables #

   To add text to actual build page, you can use 
   <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Groovy+Postbuild+Plugin">
   Groovy Postbuild plugin</a> 
   to execute a groovy script in the Jenkins JVM
   to checs some conditions and changes accordingly the build result, 
   puts badges next to the build in the build history and/or 
   displays information on the build summary page.

   <pre>
def workspace = manager.build.getEnvVars()["WORKSPACE"]
String fileContents = new File('${workspace}/filename.txt').text
manager.createSummary("folder.gif").appendText("${fileContents }")
   </pre>

   TODO: Verify the above works.

   TODO: This doesn't work:

   <pre>
    def workspace = manager.build.getEnvVars()["WORKSPACE"]
    env.WORKSPACE = pwd() // present working directory.
    def version = readFile "${env.WORKSPACE}/version.txt"
   </pre>

   EnvInject Plugin

   Use the withEnv step to set a variable within a temporary scope:

   <pre>
node ('pull'){
  git url: 'https://github.com/jglick/simple-maven-project-with-tests.git'
  withEnv(["PATH+MAVEN=${tool 'M3'}/bin"]) {
    sh 'mvn -B verify'
  }
}
   </pre>


<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/gitcommit/gitcommit.groovy">
Here</a> is an example of doing a Bash shell call to
invok git commands on the Git client on Jenkins agent machines.
This sends STDOUT output to a file (in workspace) named "GIT_COMMIT":

   <pre>
node {
   // Get SHA1 token for the src folder:
   sh('cd src && git rev-parse HEAD > GIT_COMMIT')
               git_commit=readFile('src/GIT_COMMIT')
   short_commit=git_commit.take(6)
&nbsp;
   // Get first 6 char. of SHA1 token and use it to retrieve the image docker builds:
   sh 'git rev-parse HEAD > GIT_COMMIT'
   def shortCommit = readFile('GIT_COMMIT').take(6)
   def image = docker.build(jenkinsciinfra/bind.build-${shortCommit})")
}
   </pre>

The <a target="_blank" href="https://git-scm.com/docs/git-rev-parse">
git rev-parse</a> command
is a internal Git utility to parse (pick out) revision/object names from a Git repo.
This is done after Git has done a checkout to establish the branch and specific commit
because the output is a SHA1 hash of the HEAD such as
"2b9a2833bc3c6bc8e7b7344e8178ce98e29ebe4b".

But not to a Pipeline job. Thus the need for shell commands.

`git_commit.take(6)` extracts the first six characters to create a short SHA,
much like what Git does because a smaller number of characters are enough to uniquely identify a specific commit.

https://docs.docker.com/engine/reference/commandline/build/

Such information was previously exposed to freestyle jobs by the Git plugin exposing 
<a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Building+a+software+project#Buildingasoftwareproject-JenkinsSetEnvironmentVariables">
environment variables</a> set when a Jenkins job executes.
The following table contains a list of 
<a target="_blank" href="https://github.com/jenkinsci/job-dsl-plugin/wiki/User-Power-Moves#access-the-jenkins-environment-variables">
all these environment variables</a>:

<table border="1" cellpadding="4" cellspacing="0"><tbody>
<tr>
<th valign="bottom"> Environment Variable </th>
<th valign="bottom"> Description </th>
</tr>
<tr>
<td valign="top"> BUILD_CAUSE </td>
<td valign="top"> BUILD_CAUSE_USERIDCAUSE </td>
</tr>
<tr>
<td valign="top"> BUILD_ID </td>
<td valign="top"> The current build id, such as "2005-08-22_23-59-59" (YYYY-MM-DD_hh-mm-ss, <a href="https://issues.jenkins-ci.org/browse/JENKINS-26520" class="external-link" rel="nofollow">defunct</a>&nbsp;since&nbsp;version 1.597) </td>
</tr>
<tr>
<td valign="top"> BUILD_NUMBER </td>
<td valign="top"> The current build number, such as "153" </td>
</tr>
<tr>
<td valign="top"> JOB_NAME </td>
<td valign="top"> Name of the project of this build. This is the name you gave your job when you first set it up. It's the third column of the Jenkins Dashboard main page. </td>
</tr>
<tr>
<td valign="top"> BUILD_TAG </td>
<td valign="top"> String of <tt>jenkins-${JOB_NAME}-${BUILD_NUMBER</tt>}. Convenient to put into a resource file, a jar file, etc for easier identification. </td>
</tr>
<tr>
<td valign="top"> BUILD_URL <br class="atl-forced-newline" /> </td>
<td valign="top"> The URL where the results of this build can be found (e.g. http://buildserver/jenkins/job/MyJobName/666/) </td>
</tr>
<tr>
<td valign="top"> EXECUTOR_NUMBER </td>
<td valign="top"> The unique number that identifies the current executor (among executors of the same machine) that's carrying out this build. This is the number you see in the "build executor status", except that the number starts from 0, not 1. </td>
</tr>
<tr>
<td valign="top"> JENKINS_URL </td>
<td valign="top"> Set to the URL of the Jenkins master that's running the build. This value is used by <a href="/display/JENKINS/Jenkins+CLI" title="Jenkins CLI">Jenkins CLI</a> for example </td>
</tr>
<tr>
<td valign="top"> HOME </td>
<td valign="top"> - </td>
</tr>
<tr>
<td valign="top"> HUDSON_HOME </td>
<td valign="top"> - </td>
</tr>
<tr>
<td valign="top"> JAVA_HOME </td>
<td valign="top"> If your job is configured to use a specific JDK, this variable is set to the JAVA_HOME of the specified JDK. When this variable is set, PATH is also updated to have $JAVA_HOME/bin. </td>
</tr>
<tr>
<td valign="top"> LANG </td>
<td valign="top"> - </td>
</tr>
<tr>
<td valign="top"> LOGNAME </td>
<td valign="top"> - </td>
</tr>
<tr>
<td valign="top"> NODE_NAME </td>
<td valign="top"> The name of the node the current build is running on. Equals 'master' for master node. </td>
</tr>
<tr>
<td valign="top"> NODE_LABELS </td>
<td valign="top"> - </td>
</tr>
<tr>
<td valign="top"> WORKSPACE </td>
<td valign="top"> The absolute path of the workspace. </td>
</tr>
<tr>
<td valign="top"> GIT_COMMIT <br class="atl-forced-newline" /> </td>
<td valign="top"> For Git-based projects, this variable contains the Git hash of the commit checked out for the build (like&nbsp;ce9a3c1404e8c91be604088670e93434c4253f03) ﻿(all the GIT_&#42; variables require git plugin)&nbsp; &nbsp;&nbsp; <br class="atl-forced-newline" /> </td>
</tr>
<tr>
<td valign="top"> GIT_URL </td>
<td valign="top"> For Git-based projects, this variable contains the Git url (like&nbsp;git@github.com:user/repo.git or [https://github.com/user/repo.git]) </td>
</tr>
<tr>
<td valign="top"> GIT_BRANCH <br class="atl-forced-newline" /> </td>
<td valign="top"> For Git-based projects, this variable contains the Git branch that was checked out for the build (normally origin/master) <br class="atl-forced-newline" /> </td>
</tr>
<tr>
<td valign="top"> CVS_BRANCH </td>
<td valign="top"> For CVS-based projects, this variable contains the branch of the module. If CVS is configured to check out the trunk, this environment variable will not be set. </td>
</tr>
<tr>
<td valign="top"> SVN_REVISION </td>
<td valign="top"> For Subversion-based projects, this variable contains the revision number of the module. If you have more than one module specified, this won't be set. <br class="atl-forced-newline" /> </td>
</tr>
<tr>
<td valign="top"> PWD </td>
<td valign="top"> - </td>
</tr>
<tr>
<td valign="top"> OLDPWD </td>
<td valign="top"> - </td>
</tr>
<tr>
<td valign="top"> SHELL </td>
<td valign="top"> - </td>
</tr>
<tr>
<td valign="top"> TERM </td>
<td valign="top"> - </td>
</tr>
<tr>
<td valign="top"> USER </td>
<td valign="top"> - </td>
</tr>
</tbody></table>


### Tokenize environment variable #

<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/github-org-plugin/access-repo-information.groovy">
Here</a> is an example of a Groovy script file "access-repo-information.groovy".

Like other Groovy files, it has in the first line `#!groovy`.

   <pre>
#!groovy
&nbsp;
    tokens = "${env.JOB_NAME}".tokenize('/')
    org = tokens[0]
    repo = tokens[1]
    branch = tokens[2]
    echo 'account-org/repo/branch=' + org +'/'+ repo +'/'+ branch
   </pre>

`${env.JOB_NAME}` retrieves environment variable JOB_NAME which contains the Git path
"org/repo/branch" among github-organization-plugin jobs.

`tokenize` extracts out text between the slash character specified
into an array named "tokens". It is a 
<a target="_blank" href="http://docs.groovy-lang.org/latest/html/api/org/codehaus/groovy/runtime/StringGroovyMethods.html">
Groovy String method</a>.

<hr />

<a name="UnicodeIcons"></a>

### Unicode icons #

   <img align="right" alt="jenkins2 icons in console output 300x497-i10" width="300" height="497" src="https://cloud.githubusercontent.com/assets/300046/17441687/7b5f18c6-5aef-11e6-827d-68c5bd14e4c2.jpg">

   PROTIP: Putting the same visual mark in both the stage name and echos related to the stage
   makes them visually easier to identify together.

   <pre>
   stage '\u273F Verify 4'
   </pre>

   * "\u2776" = &#x2776;
   * "\u27A1" = &#x27A1;
   * "\u2756" = &#x2756;
   * "\u273F" = &#x273F;
   * "\u2795" = &#x2795;

   * "\u2713" = &#x2713;
   * "\u2705" = &#x2705;
   * "\u274E" = &#x274E;
   * "\u2717" = &#x2717;
   * "\u274C" = &#x274C;

   * "\u2600" = &#x2600;
   * "\u2601" = &#x2601;
   * "\u2622" = &#x2622;
   * "\u2623" = &#x2623;
   * "\u2639" = &#x2639;
   * "\u263A" = &#x263A;

   * <a target="_blank" href="http://www.fileformat.info/info/unicode/block/dingbats/list.htm">
   More icons in the \u2700 Unicode Digbats block</a>.
   * <a target="_blank" href="http://www.w3schools.com/charsets/ref_utf_symbols.asp">
   More icons in the \u2600 range</a>


<a name="ColorWarapper"></a>

### Color wrapper Stage View #

   <a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/ansi-color-build-wrapper/AnsiColorBuildWrapper.groovy">
   Here</a> is an example of adding color in a stage name:

   <pre>
    wrap([$class: 'AnsiColorBuildWrapper']) {
        stage "\u001B[31m I'm Red \u2717 \u001B[0m Now not"
    }
   </pre>

This rather geeky technique uses Unicode "\u001B" ESCAPE codes followed by ANSI characters:

   * "\u001B[31m" = RED
   * "\u001B[30m" = BLACK
   * "\u001B[32m" = GREEN
   * "\u001B[33m" = YELLOW
   * "\u001B[34m" = BLUE
   * "\u001B[35m" = PURPLE
   * "\u001B[36m" = CYAN
   * "\u001B[37m" = WHITE

   * "\u001B[0m" is for RESET
   <br /><br />


### Time stamp wrapper #

   <a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/timestamper-wrapper/timestamperWrapper.groovy">
   Here</a> is an example of invoking a build wrapper 
   that adds a time stamp to echo output to the console log :

   <pre>
   wrap([$class: 'TimestamperBuildWrapper']) {
      echo "Done"
   }
   </pre>


   <a name="GitURL"></a>

   ### Specific Git URL #

   In single-branch contexts, 
   one can download a specific repo from GitHub into Jenkins's local workspace:

   <pre>
node {
   git url: "https://github.com/hotwilson/jenkins2.git", branch: 'master'
   sh 'make all'
}
   </pre>

   CAUTION: The ".git" at the end is necessary in the URL and
   the repo needs to contain a <strong>Jenkinsfile</strong> (no file extension).

   A sample Console response to git url:

   <pre>
[Pipeline] git
Cloning the remote Git repository
Cloning repository https://github.com/hotwilson/jenkins2.git
 > git init /var/lib/jenkins/workspace/box2 # timeout=10
Fetching upstream changes from https://github.com/hotwilson/jenkins2.git
 > git --version # timeout=10
 > git -c core.askpass=true fetch --tags --progress https://github.com/hotwilson/jenkins2.git +refs/heads/*:refs/remotes/origin/*
 > git config remote.origin.url https://github.com/hotwilson/jenkins2.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/hotwilson/jenkins2.git # timeout=10
Fetching upstream changes from https://github.com/hotwilson/jenkins2.git
 > git -c core.askpass=true fetch --tags --progress https://github.com/hotwilson/jenkins2.git +refs/heads/*:refs/remotes/origin/*
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision b5f1136a0e55363ff143d6ad5b311f7838d8ad82 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f b5f1136a0e55363ff143d6ad5b311f7838d8ad82 # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git checkout -b master b5f1136a0e55363ff143d6ad5b311f7838d8ad82
First time build. Skipping changelog.
   </pre>

   Additional response for make not included here.



<a name="CheckoutSCM"></a>

### Checkout SCM #

   An example using it:

   <pre>
node {
   checkout scm
&nbsp;
   sh 'git rev-parse HEAD > GIT_COMMIT'
   def shortCommit = readFile('GIT_COMMIT').take(6)
   def image = docker.build(jenkinsciinfra/bind.build-${shortCommit})")
&nbsp;
   stage 'Deploy'
   image.push()
}
   </pre>

TODO:
   See https://github.com/jenkinsci/workflow-scm-step-plugin#generic-scm-step


<a name="#MultipleSCM"></a>

## Multiple SCM #

As described in<br />
<a target="_blank" href="https://github.com/jenkinsci/workflow-scm-step-plugin">
https://github.com/jenkinsci/workflow-scm-step-plugin</a>:

While freestyle projects can use the Multiple SCMs plugin to check out more than one repository, 
or specify multiple locations in SCM plugins that support that 
(notably the Git plugin), this support is quite limited. 

In a Pipeline type job, you can check out multiple SCMs, 
of the same or different kinds, 
in the same or different workspaces, 
wherever and whenever you like. 
For example, to check out and build several repositories in parallel, 
each on its own slave:

   <pre>
parallel repos.collectEntries {repo -> [/* thread label */repo, {
    node {
        dir('sources') { // switch to subdir
            git url: "https://github.com/user/${repo}"
            sh 'make all -Dtarget=../build'
        }
    }
}]}
   </pre>



<a name="#NodeJS"></a>

## NodeJS #

To work with NodeJS.






### Push changes to Git #

<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/push-git-repo/pushGitRepo.Groovy">
Here</a> an example of pushing changes to Git from inside Pipeline.

   <pre>
withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'MyID', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD']]) {
    sh("git tag -a some_tag -m 'Jenkins'")
    sh('git push https://${GIT_USERNAME}:${GIT_PASSWORD}@&LT;REPO> --tags')
}
   </pre>

This approach requires the repository to be setup in Jenkins to be authenticated to the repo (GitHub)
using username and password rather than other methods.

A <a target="_blank" href="https://issues.jenkins-ci.org/browse/JENKINS-28335">
open JIRA</a> requests getting the GitPublisher Jenkins functionality working with Pipeline.

TODO: For SSH private key authentication, try the sshagent step from the SSH Agent plugin.


### Git stash #

<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/unstash-different-dir/unstashDifferentDir.groovy">
This</a> script uses the Git stash command
to move text among Jenkins nodes.

   <pre>
// First we'll generate a text file in a subdirectory on one node and stash it.
stage "first step on first node"
&nbsp;
// Run on a node with the "first-node" label.
node('first-node') {
    // Make the output directory.
    sh "mkdir -p output"
&nbsp;
    // Write a text file there.
    writeFile file: "output/somefile", text: "Hey look, some text."
&nbsp;
    // Stash that directory and file.
    // Note that the includes could be "output/", "output/*" as below, or even
    // "output/**/*" - it all works out basically the same.
    stash name: "first-stash", includes: "output/*"
}
&nbsp;
// Next, we'll make a new directory on a second node, and unstash the original
// into that new directory, rather than into the root of the biuld.
stage "second step on second node"
&nbsp;
// Run on a node with the "second-node" label.
node('second-node') {
    // Run the unstash from within that directory!
    dir("first-stash") {
        unstash "first-stash"
    }
&nbsp;
    // Look, no output directory under the root!
    // pwd() outputs the current directory Pipeline is running in.
    sh "ls -la ${pwd()}"
&nbsp;
    // And look, output directory is there under first-stash!
    sh "ls -la ${pwd()}/first-stash"
}
   </pre>

<a target="_blank" href="http://getmesh.io/Blog/Jenkins+2+Pipeline+101">
This says</a>
the name of the node is `node('!master')`, any node except the master is selected.


### Remote Loader Plugin #

<a target="_blank" href="https://www.youtube.com/watch?v=emV60CcDVV0&t=46m01s">
This video</a> introduces this feature.

A pipline Groovy file can be loaded from any repo within a pipeline,
like what "include" statements do.

<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/load-from-file/pipeline.groovy">
This</a> shows how to "include" a file
instead of duplicating code.

   <pre>
node {
    // Load file from the current directory:
    def externalMethod = load("externalMethod.groovy")
    externalMethod.lookAtThis("Steve")

    def externalCall = load("externalCall.groovy")
    externalCall("Steve")
}
   </pre>


The
<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/load-from-file/externalMethod.groovy">
externalMethod.groovy</a> file contains:

   <pre>
def myVar = build.getEnvironment(listener).get('myVar')

// Methods in this file will end up as object methods on the object that load returns.
def lookAtThis(String whoAreYou) {
   echo "Look at this, ${whoAreYou}! You loaded this from another file!"
}
   </pre>

The
<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/load-from-file/externalCall.groovy">
externalCall.groovy</a> file contains:

   <pre>
def call(String whoAreYou) {
    echo "Now we're being called more magically, ${whoAreYou}, thanks to the call(...) method."
}
   </pre>


<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/load-from-file/loadFromGithub.groovy">
This</a> shows how to "include" a file
instead of duplicating code.

   <pre>
#!groovy
&nbsp;
apply from: 'https://raw.githubusercontent.com/org-name/repo-name/master/subfolder/Jenkinsfile?token=${env.GITHUB_TOKEN}'
   </pre>

In this example, the "org-name", "repo-name" are replaced with actuals.

The "GITHUB_TOKEN" is a variable so its value is not exposed in code.

   ### GitHub Hooks #

   Git Hooks are programs placed in a hooks directory to 
   trigger actions at certain points in git’s execution. 
   The list of hooks at:<br /> 
   https://www.kernel.org/pub/software/scm/git/docs/githooks.html<br />
   include pre-commit, post-commit, etc.

   Hooks that don’t have the executable bit set are ignored.


   * http://www.chilipepperdesign.com/2013/01/07/deploying-code-with-git/


   
<hr />

## Item: Organization Folders #

   Organization folders enable Jenkins to automatically detect and include as resources
   any new repository under an account/organization. 

   ### Run Maven #

   Alternately, if you want to run a Maven file:

   <pre>
node ('linux'){
   stage 'Build and Test'
   env.PATH = "${tool 'Maven 3'}/bin:${env.PATH}"
  checkout scm
  sh 'mvn clean package'
}
   </pre>

   CAUTION: Watch for "Error while checking in file to scm repository".


<a name="ParallelJobs"></a>

### Parallel jobs #

<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/jobs-in-parallel/jobs_in_parallel.groovy">
Here</a> is an example of how to run several jobs in parallel.
Define array "branches" for execution by in a 
"parallel" command which executes all items in the array at the same time.

   <pre>
def branches = [:]
&nbsp;
for (int i = 0; i < 4; i++) {
  def index = i //if we tried to use i below, it would equal 4 in each job execution.
  branches["branch${i}"] = {
    build job: 'test_jobs', parameters: [[$class: 'StringParameterValue', name: 'param1', value:
      'test_param'], [$class: 'StringParameterValue', name:'dummy', value: "${index}"]]
    }
}
parallel branches
   </pre>

The for loop interrates 4 times through the array (0, 1, 2, 3),
each containing a "build job" command.

param1 : an example string parameter for the triggered job.

dummy: a parameter used to prevent triggering the job with the same parameters value. 
This parameter has to accept a different value each time the job is triggered.
WQ//we have to assign it outside the closure or it will run the job multiple times with the same parameter "4"
//and jenkins will unite them into a single run of the job

Remember it's not permitted to have a stage step inside a parallel block.


### Cause #

<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/get-build-cause/getBuildCause.groovy">
Here</a> is a definition pulling in 
<a target="_blank" href="http://javadoc.jenkins-ci.org/hudson/model/class-use/Cause.html">cause</a> info available to Freestyle build jobs as a 
$CAUSE variable 

   <pre>
// Get all Causes for the current build
def causes = currentBuild.rawBuild.getCauses()
&nbsp;
// Get a specific Cause type (in this case the user who kicked off the build):
def specificCause = currentBuild.rawBuild.getCause(hudson.model.Cause$UserIdCause)
   </pre>

<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/parallel-from-grep/parallelFromGrep.groovy">
Here</a> is an alternative.



<a name="Multibranch"></a>

## Multi-branch projects #

Instead of Jenkins types Freestyle and Pipeline,
select <strong>Multi-branch</strong>.

* https://jenkins.io/blog/2015/12/03/pipeline-as-code-with-multibranch-workflows-in-jenkins/

* https://www.youtube.com/watch?v=emV60CcDVV0&t=1h20m20s

<a target="_blank" href="https://www.youtube.com/watch?v=emV60CcDVV0&t=59m57s">
In this video</a> Jesse



<a name="DurableTaskPlugin"></a>

## Durable Task Plugin #

For long-running build runs at <br />
https://wiki.jenkins-ci.org/display/JENKINS/Durable+Task+Plugin

"Library offering an extension point for processes which can run outside of Jenkins yet be monitored."


<a name="Restarts"></a>

### Safe Restart Plugin #

Some install the 
<a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/SafeRestart+Plugin"> 
SafeRestart plug-in</a> which adds the <strong>Restart Safely</strong> option to the 
<a title="jenkins saferestart_plugin" href="https://cloud.githubusercontent.com/assets/300046/12584913/9681b1d2-c3fe-11e5-9359-e51fc5809734.png">
Jenkins left menu</a> to avoid needing to be at the server console at all.

To restart Jenkins server:

0. PROTIP: Restart Jenkins by changing the URL from:

   <pre>
   http://.../pluginManager/installed
   </pre>

   to

   <pre>
   http://.../restart
   </pre>

0. Click Yes to "Are you sure".

0. "Please wait while Jenkins is restarting".


   <a name="WorkspaceCleanup"></a>

   ### Workspace Cleanup #

   <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Workspace+Cleanup+Plugin">
   Workspace</a>



   <a name="DiscardBuilds"></a>

   ### Discard Old Builds #

   The <a target="_blank" href="https://github.com/jenkins-infra/jenkins.io/blob/master/Jenkinsfile">
   Jenkins.io</a> Jenkinsfile Groovy script
   has this:

   <pre>
/* Only keep the 10 most recent builds. */
properties([[$class: 'BuildDiscarderProperty',
                strategy: [$class: 'LogRotator', numToKeepStr: '10']]])
   </pre>

   This is needed because build jobs can fill up a lot of disk space, 
   especially if you store the build artifacts 
   (binary files, such as JARs, WARs, TARs, etc.). 
   So specify a limit on how many builds to store.

   There is a default 'Discard Old Build' function.
   But there is a plugin provides more choices to trigger deletion.

0. In Manage Plugins, filter for "Discard Old Build" plugin at<br />
   <a target="_blank" href="https://wiki.jenkins-ci.org/display/JENKINS/Discard+Old+Build+plugin">
   https://wiki.jenkins-ci.org/display/JENKINS/Discard+Old+Build+plugin</a>

   Alas, there are <a target="_blank" href="https://issues.jenkins-ci.org/browse/JENKINS-32858">
   bugs in it since Feb 2016</a> 
   which render it unusable. We didn't find this bug until we 
   wasted several hours trying to figure out what we did wrong.

0. Specify the "Max # of builds to keep" (10).
0. Check the "Status to keep" checkboxes (to the left of) "Unstable" and "Failure".

0. Click "Keep this job forever" on a specific build.


## Monitoring #

0. Install the "Jenkins Monitoring" plugin. 

0. From the Manage Jenkins screen, access the JavaMelody graphs 
   in the “Monitoring of Jenkins/Jenkins master” or “Jenkins/Jenkins nodes” menu entries.

   It reports about the state of your build server, including CPU and system load, average response time, and memory usage. JavaMelody.

BTW, @jenx_monitor
is a A Jenkins build server monitor for Mac OS X, powered by MacRuby. This app sits in your status bar and reports the status of all your Jenkins builds.

0. Install the <strong>Disk Usage</strong> plugin
to show a trend graph over time the disk space used by each project.


## Chaining in the Pipeline #

Jenkins v1 consisted of many atomic jobs chained together by a mix of triggers and parameters.

   <amp-img width="650" height="261" alt="jenkins cd flow 650x261-i15.jpg" src="https://cloud.githubusercontent.com/assets/300046/17418538/45f540d2-5a56-11e6-8730-39528384e435.jpg"></amp-img>

   ### CI vs CD #

Continuous Integration (CI) <strong>merges</strong> 
development work in a developer's branch
with the team's common code to ensure that changes 
still work in a testing environment.
It's call continuous to emphasize small changes being integrated frequently
to stay in sync with an evolving team codebase.
This requires individual changes to be scoped for 
completion in a short amount of time (hours at most).

Continuous Delivery (CD) delivers code for running in an UAT or Staging enviornment 
(of full production scale)
used by end-users (QA or customers) to process business transactions in inspection mode.
It's called continuous for frequency to find more issues early, 
before each particular version has left the memory of developers.

Continuous Deployment moves code to Production.
This is done by merging to the Mainline/Master branch which gets copied to the Production enviornment.
It's called continuous to make this happen as soon as code is ready.

BTW, <a target="_blank" href="https://blog.assembla.com/AssemblaBlog/tabid/12618/bid/92411/Continuous-Delivery-vs-Continuous-Deployment-vs-Continuous-Integration-Wait-huh.aspx">
Assembla</a> has more ideas about this.




### Slack notification REST API #

<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/slacknotify/slackNotify.groovy">
This</a> script imports Goovy's built-in library to output Json using the "JsonOutput.toJson" class.method.
The JSON output is the body (payload) of a REST API call to Slack.com made using the Linux curl command:

   <pre>
import groovy.json.JsonOutput
def notifySlack(text, channel) {
    def slackURL = 'https://hooks.slack.com/services/xxxxxxx/yyyyyyyy/zzzzzzzzzz'
    def payload = JsonOutput.toJson([text      : text,
                                     channel   : channel,
                                     username  : "jenkins",
                                     icon_emoji: ":jenkins:"])
    sh "curl -X POST --data-urlencode \'payload=${payload}\' ${slackURL}"
}
   </pre>

// Add whichever params you think you'd most want to have
// replace the slackURL below with the hook url provided by
// slack when you configure the webhook


### IRC notification #

<a target="_blank" href="https://github.com/jenkinsci/pipeline-examples/blob/master/pipeline-examples/ircnotify-commandline/ircNotify.groovy">
This</a> snippet for just the "notify" stage shows how to
invoke a Bash shell command ("sh") to use the "nc" (netcat)
command (on the last line below).

   <pre>
stage "notify"
&nbsp;
node {    
    sh ''' 
        MSG='This is the message here'
        SERVER=irc.freenode.net
        CHANNEL=#mictest
        USER=mic2234test
        (
        echo NICK $USER
        echo USER $USER 8 * : $USER
        sleep 1
        #echo PASS $USER:$MYPASSWORD                                                                                      &nbsp;                                                    
        echo "JOIN $CHANNEL"
        echo "PRIVMSG $CHANNEL" :$MSG
        echo QUIT
        ) | nc $SERVER 6667
    '''
}
   </pre>

The shell command above first defines environment variables,
then between (parentheses) specifies the commands
piped into the nc command.

The "nc" (netcat) command is built into most Linux servers (including Mac OSX).
It's used instead of Telnet here.

A <a target="_blank" href="http://phil.lavin.me.uk/tag/irc-with-netcat/">
"raw" connection</a> is established on default port 6667.
Your enterprise network may not allow it.

You need to modify the "This is the message here" text to 
a variable updated internally in the script
based on results of the previous stage.

Also modify values to variables CHANNEL and USER.

$MYPASSWORD comes from outside the script.

* Command "NICK" sets the user nickname.
* Command "PRIVMSG" sets the private message.
<br />

BTW, https://github.com/jenkins-infra/ircbot

## Code Static Scans #

Typical rules include 
“Constant If Expression,” “Empty Else Block,” “GString As Map Key,” and “Grails Stateless Service.”

For Groovy code, CodeNarc (similar to PMD for Java) checks for potential defects, poor coding practices and styles, overly complex code, and so on. 

SonarQube runs on its own server 
a set of Maven code quality related plugins against your Maven project, 
and stores results into its relational database

0. Install Sonar on its own server.
0. On Jenkins install the "Sonar" plugin.
0. Configure access to the Sonar database via JDBC.
0. Sonar has Maven and Ant bootstrap and Gradle bootstraps. 
0. Schedule Sonar build once a day for metrics.

   PROTIP: For metrics, schedule Sonar to run only once a day
   because Sonar stores metrics in 24-hour slices.

Code Complexity.

Test Coverage.

The "Violations" plugin generates reports and graphs from code quality run metrics 
generated for individual builds and trends over time. 
It's configured in the "Build Settings" section.

## Build using Maven #

pom.xml file.



## IntelliJ IDE Auto-complete #

<a target="_blank" href="https://www.youtube.com/watch?v=emV60CcDVV0&t=46m01s&t=40m50s">
.gdsl file for IntelliJ IDE code completion</a> begins like this:

   <pre>
//The global script scope
def ctx = context(scope: scriptScope())
contributor(ctx) {
method(name: 'build', type: 'Object', params: [job:'java.lang.String'], doc: 'Build a job')
   </pre>


### CPS Global Library #

<a target="_blank" href="https://www.youtube.com/watch?v=emV60CcDVV0&t=44m52s">
This video</a> introduces
<a target="_blank" href="https://www.wikiwand.com/en/Continuation-passing_style">
Continuation Passing Style</a>
of "functional programming",
which means that, unlike the direct style people have been coding,
CPS functions return a function rather than values.

The switch to "functional programming" is actually a natural progression many others are undergoing in 2016.
The Jenkins development team has, over the years, adopted innovations in Java
such as Spring, Guava, and Groovy, as evidenced by this
from <a target="_blank" href="https://speakerdeck.com/aheritier/introduction-to-jenkins-2-at-parisjug-2016">
slide 9 of the Intro presentation at ParisJUG 7 June 2016</a> 
by Arnaud Heritier (@aheritier) of Cloudbees.

   <amp-img width="650" height="207" alt="jenkins java progression 650x207-i13.jpg" src="https://cloud.githubusercontent.com/assets/300046/17439314/a4d3329c-5ae4-11e6-9544-e20daaad9898.jpg"></amp-img>


<a name="ParallelRuns"></a>

## Parallel Runs #

Running in parallel is especially useful for testing multi-platform apps.

   <pre>
stage "test on supported OSes"
&nbsp;
parallel (
  windows: { node {
    sh "echo building on windows now"
 }},
  mac: { node {
    sh "echo building on mac now"
}}
   </pre>


### Snippet generator #

http://.../pipeline-syntax/ has a snippet generator


* http://todobackend.com/


<a name="Videos"></a>

## Videos on Jenkins2 Pipeline #

If you prefer videos, these are specifically about Jenkins 2.0+

Several speakers spoke at the 2:42:35<br />
   <a target="_blank" href="https://www.youtube.com/watch?v=fl5xfqtiNko/">
   Jenkins 2.0 Virtual Conf. May 2015</a>

Jenkins creator Kohsuke Kawaguchi (Creator of Jenkins and CTO of Cloudbees)
<a target="_blank" href="https://www.youtube.com/channel/UCT_pjuBAYn6Sm_u4YJt59Rw">
YouTube channel</a> :

   * <a target="_blank" href="https://www.youtube.com/watch?v=emV60CcDVV0/">
   Jenkins 2.0 Virtual Conf. (take 2) 
   4 May 2015</a>

      * Grow with you from simple to complex
      * Text-based, in your VCS
      * Handle lots of jobs without repetition
      * Survive Jenkins restart
      * Brings next level of reuse to Jenkins

   * <a target="_blank" href="https://www.youtube.com/watch?v=2eVyc_n8i1c/">
   on 7 Oct 2015</a>

Pipeline author Jesse Glick (<a target="_blank" href="https://twitter.com/tyvole/">@tyvole</a>)

   * <a target="_blank" href="https://www.youtube.com/watch?v=_aLPahlSFHU">
   Jenkins Workflow: security model &amp; plugin compatibility
   Aug 2015</a>

Arnaud Heritier (@aheritier, aheitier)
(Support Team Manager at Cloudbees)

   * https://speakerdeck.com/aheritier/introduction-to-jenkins-2-at-parisjug-2016
   Slidedeck from Paris JUG June 2016 points to
   <a target="_blank" href="https://groups.google.com/d/msg/jenkinsci-dev/vbXK7jjekFw/BievO0UxBgAJ"> Kohsuke's 25 Sep 2015 proposal for Jenkins 2.0</a>.

<a target="_blank" href="https://se.linkedin.com/in/robertsandell/">
Robert "Bobby" Sandell</a>
(<a target="_blank" href="<a target="_blank" href="https://www.rsandell.com/">rsandell.com</a>), 
Software Engineer at Cloudbees Stockholm since June 2010
has these videos:

   * <a target="_blank" href="https://www.youtube.com/watch?v=_iFtmp72p_E">
   Jenkins pipeline plugin demo</a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=M-rxJBdYIrw">
   Jenkins 2.0. What? When? What is in it for me?</a>

Jim Leitch

   * <a target="_blank" href="https://www.youtube.com/watch?v=th_0jGRTnJ4">
   Jenkins 2.0 What's is new?</a>

James Nord (<a target="_blank" href="https://twitter.com/JamesTeilo/">@JamesTeilo</a>)

   * <a target="_blank" href="https://www.youtube.com/watch?v=PsgQ4v4aBhA">
   Jenkins 2.0 and Beyond (and Q&A)</a>
   52:04 

Tyler Croy, Jenkins Community Evangelist 

   * <a target="_blank" href="https://dzone.com/articles/interview-with-r-tyler-crory-jenkins-community-eva">
   Interview by Matt Warner</a> quotes:
   "With Jenkins 2 we're starting to assert that Jenkins is the right place to define the entire software delivery pipeline from build to test, to packaging and deployment."


## Texual info about Pipeline #

   * <a target="_blank" href="https://jenkins.io/doc/pipeline/">
   https://jenkins.io/doc/pipeline = Getting Started with Pipeline</a>
   * https://jenkins.io/solutions/pipeline/
   * https://wiki.jenkins-ci.org/display/JENKINS/Pipeline+Plugin
   * https://github.com/jenkinsci/pipeline-plugin/blob/master/README.md#introduction

   * https://gist.github.com/chinshr/aa87da01ec28335e3ffd
   Best of Jenkinsfile, a collection of useful workflow scripts 
   ready to be copied into your Jenkinsfile on a per use basis.
   (from Juergen Fesslmeier)

Before "Pipeline" there was "Workflow", these resources:

   * https://dzone.com/storage/assets/413450-rc218-cdw-jenkins-workflow.pdf
   * http://www.tutorialspoint.com/jenkins/jenkins_configuration.htm
   * http://www.mantidproject.org/Jenkins_Build_Servers

https://github.com/jenkinsci/job-dsl-plugin/wiki/User-Power-Moves


## Testing #

0. Install the "TAP Plugin",<br />
   http://testanything.org/

   This TAP test runner is supported by Mocha, tape, etc.

## Resources #

* <a target="_blank" href="https://jenkins.io/">
   Jenkins.io/</a>

* <a target="_blank" href="https://app.pluralsight.com/library/courses/jenkins-2-getting-started/exercise-files">
   Getting Started with Jenkins2</a>
   3h 36m video course published 28 Aug 2016
   by <a target="_blank" href="https://www.weshigbee.com/">
   Wes Higbee</a> (<a target="_blank" href="https://www.twitter.com/@g0t4/">@g0t4</a>)
   is based on Jenkins 2.7.1.


## Latest Info about Jenkins #

Follow <a target="_blank" href="https://twitter.com/jenkins_release/">
@jenkins_release</a>
This bot tweets Jenkins plugin releases.

Tweet to 
<a target="_blank" href="https://twitter.com/jenkinsci/">
@jenkinsci</a> about
<a target="_blank" href="https://twitter.com/#jenkins2/">
#Jenkins2</a>

CloudBees Verified account
@CloudBees

<a target="_blank" href="https://twitter.com/jenkinsconf/">
@jenkinsconf</a>
is the handle for Jenkins World, 
Sep 13-15 in Santa Clara, CA

@changelog
podcast every Friday


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
