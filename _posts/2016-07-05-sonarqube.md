---
layout: post
filename: static-code-analysis
title: "Static Code Analysis"
excerpt: "It has your back ... by riding your back"
tags: [Sonarqube, quality, generation]
date: "2016-07-05"
file: "sonarqube"
image:
# pic-blue-city-abu-dhabi-skyscrapers-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15269473/c8311bfa-19bc-11e6-890c-06abc511ef39.jpg
  credit: Tian Xinqi
  creditlink: http://www.tianxinqi.com/news/Above80swgpuwnk
comments: true
shorturl: https://goo.gl/wojj1R
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

SonarQube (abbreviated to Sonar here)
improves quality by performing "static analysis" (scanning) of programming code to identify **issues** from **meaures** it calculates.

> "Sonar's power is as a way to reveal specific coding tricks the team might want to adopt."

PROTIP: Introduce rules gradually and gently. 

WARNING: Those who use Sonar purely as a surveillance tool to judge workers usually experience consequences.

CAUTION: Sonar stores code (in some compressed form) that it processes, which may be of security concern. Licenses are limited to the lines of code Sonar stores.

User Guide: https://docs.sonarqube.org/latest/user-guide/clean-as-you-code/

## Static Analysis vs Lint #

SonarQube's licensed competitors include <a target="_blank" href="http://www.programmingresearch.com/">
PRQA</a>, which uses <a target="_blank" href="http://www.programmingresearch.com/static-analysis-software/why-static-analysis/">this illustration</a> to differentiate itself versus
lint programs and "bug catchers".
<amp-img width="871" height="520" alt="prqa-lint-vs-bug-catcher-vs-static-analysis-c51.jpg"
src="https://cloud.githubusercontent.com/assets/300046/16594601/6c3078ae-42a8-11e6-8f6c-c7a118a3d4c2.jpg">
</amp-img>

The value proposition for using static analysis tools versus simpler lint programs
is the <strong>time and frustration</strong> that developers save analyzing false positives,
which leads to less usage and thus more lingering defects ("technical debt").

A summary of what SonarQube finds estimates <a target="_blank" href="http://docs.sonarqube.org/display/SONAR/Technical+Debt">
Technical Debt</a>, 
which SonarQube tracks over time.

![sonarqube-tech-debt-pyramid](https://cloud.githubusercontent.com/assets/300046/10703589/eacf50be-7985-11e5-9f2f-70fc2f6f1986.jpeg)

Sonar scans different **facets** (such as security).


## Different languages #

Sonar analyzes various languages 
using plug-ins.

   <a id="ScalaSonar"></a>

   ### Sonar for Scala #

http://www.scalastyle.org/
provides a list of ways to use Scalastyle
at
https://github.com/scalastyle

by 3 people:

   * Matthew Farwell
   (http://www.farwell.co.uk/ of Switzerland)

https://groups.google.com/forum/#!forum/scalastyle-users

https://github.com/emrehan/sonar-scalastyle

is based on a fork of
https://github.com/NCR-CoDE/sonar-scalastyle

http://docs.codehaus.org/display/SONAR/Scala+Plugin



## SQALE Summary Ratings #

Sonar calculates a **SQALE Rating** based on the open-source
SQALE (Software Quality Assessment based on Lifecycle Expectations) methodology defined by industry group 
http://www.sqale.org/. The caluculation is based on inclusion of rules set in the Common SonarQube repository:

 * Duplicated blocks
 * Failed unit tests
 * Insufficient branch coverage by unit tests
 * Insufficient comment density
 * Insufficient line coverage by unit tests
 * Skipped unit tests

Change SQUALE calculations in the plug-in 
http://www.sonarsource.com/products/plugins/governance/sqale/

<a id="Rules"></a>

## Rules #

SonarQube **Analyzers** scan code organized into projects.

![sonarqube rules fromdoc](https://cloud.githubusercontent.com/assets/300046/10703031/0e192d50-7982-11e5-9a35-30cbeab3c69d.jpeg)

Coding standards include:

   * ISO 26262 

   * MISRA (Motor Industry Software Reliability Association) was first published in April 2013
   to support C99 and C90 versions of the C language, used mostly for embedded software development.

   * JSF

   * HIC++

<a id="Tags"></a>

## Tags #

Customizable **Tags** provide a way to categorize and filter rules.


<a id="InstallSonarQubeEnv"></a>

## Install environment to Run SonarQube #

Since SonarQube runs as a server, it's best to have it run
within a VM.

Upgrade to v7 involves a change to PostgreSQL or MariaDB from MySQL.


<a id="InstallSonarQubeEnv"></a>

## Install environment to Run SonarQube #

0. Install SonarQube using Homebrew:

   ```
   brew install scalastyle
   ```

This page was written after downloading file SonarQube 5.1.2 created Jul. 27, 2015
from 
<a target="_blank" href="http://www.sonarqube.org/">
  http://www.sonarqube.org/</a>



Most developers prefer to have Sonar look at code before commit into a team repository.
Such **preview mode** runs do not store results in the Sonar run database.

Plugins enable Sonar to be invoked several ways:

  * <a target="_blank" href="http://docs.sonarqube.org/x/3AAW">From a command line</a> as one step in local evaluations.
    This approach enables one-time <a target="_blank" href="http://docs.sonarqube.org/display/SONAR/Analysis+Parameters">parameter configuration</a> 
    for each individual user.

    ```
    sonar-runner
    ```

  * From inside IDE (IntelliJ, Eclipse, etc.) as part of code unit development and testing.

  * From a build server (Maven, Ant, MSBuild, etc.) as part of continuous integration/build.

The server uses Oracle or <a target="_blank" href="http://openjdk.java.net/install/index.html">OpenSDK</a>,
which requires much more work 
https://github.com/hgomez/obuildfactory/wiki/Building-and-Packaging-OpenJDK7-for-OSX
So please stay with Oracle for now.

MySQL is supported.

Docker and Puppet scripts to build the server ???

https://github.com/sonarsource/sonar-examples


0. Read the documentation
0. Unzip and start
0. Analyze projects
0. Ready to improve quality


<a id="JenkinsConfiguration"></a>

## Jenkins Configuration #

Connection to Jenkins:
http://docs.sonarqube.org/display/PLUG/SonarQube+Scanner+for+Jenkins


<a id="ClientConfiguration"></a>

## Client Configuration #

http://www.sonarlint.org/visualstudio/
SonarLint for Visual Studio is based on and benefits from the .NET Compiler Platform ("Roslyn") and its code analysis API to provide a fully-integrated user experience in Visual Studio 2015.
SonarLint is free, open source, and available in the Visual Studio Gallery.


## Validation #

<a target="_blank" href="http://www.computerworld.com/article/3093423/application-development/the-truth-about-bug-finders-theyre-essentially-useless.html">This article on July 2016</a>
reported that researchers from NYU found that static scans found only 2% of defects 
injected by their <a target="_blank" href="http://www.ieee-security.org/TC/SP2016/papers/0824a110.pdf">
PDF about their LAVA (Large-Scale Automated Vulnerability Addition)</a>.

This is both the 
<a target="_blank" href="https://www.wikiwand.com/en/Fuzz_testing">
fuzz testing"</a> and 
<a target="_blank" href="https://www.wikiwand.com/en/Symbolic_execution">
"symbolic-execution" approaches.

## Custom Rules

Write rules in Java to work on major languages, 
or XPATH to work on data formats (XML, PL/SQL, Flex) using the SSLR Toolkit.

https://docs.sonarqube.org/latest/extend/adding-coding-rules/

Each rule defines Impact and Likelihood assessments.

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
