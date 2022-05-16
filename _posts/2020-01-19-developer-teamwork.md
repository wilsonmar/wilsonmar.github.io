---
layout: post
title: "Developer Teamwork"
excerpt: "Tips for encouraging team Code Reviews, Pair Programming, and other techniques for better quality and productivity"
tags: [DevSecOps, ThoughtWorks, security]
date: "2020-01-19"
file: "team-reviews"
image:
# pair-1900x500
  feature: https://user-images.githubusercontent.com/300046/75252984-b4a5a480-57ab-11ea-9e5e-06340b1b9d81.png
  credit: Montessori shutterstock_186382070
  creditlink: https://montessori-school.ca/blog/sharing-or-surrendering
comments: true
---

<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article covers ideas for encouraging teamwork among programmer via pair programming and team code reviews, both automated and manual.

{% include whatever.html %}

In one survey of developers, social review of code was voted as yielding more benefit than any other "DevOps" technique:



But "code reviews" and "Pair Programming" are more than just sharing a keyboard.

It takes effort over time to get everyone ready, willing, and able to consistently collaborate with others.

So what do we do? I have these suggestions:

   1. <a href="#ShareTooling">Discover and share tools</a>
   2. <a href="#Collaborative">Build an inclusive collaborative environment</a>
   3. <a href="#Terms">Agree on the vocabulary</a>
   4. <a href="#CodeStructure">Structure code for testing</a>
   5. <a href="#Rules">Specify linter rules included and excluded</a>
   6. <a href="#Track">Track outcomes over time</a>
   7. <a href="#Commits">Run checks as part of git commit/push</a>
   <br /><br />

<hr />

<a name="ShareTooling"></a>

## 1. Discover and share tools

   When Jim naively began watching how Sharon works, he was lost.
   On the Terminal, Sharon typed command aliases that worked fast, but obscured what commands were being executed.
   Sharon switched among various editors/IDEs and pressed obscure keyboard sequences that made things happen inexplicably. She invoked programs (linters) that showed warnings as if from a hidden Genie.
   
   Sharing keyboards requires agreement and understanding of the specific tools and way of working.
   Without that, it would be a violation of each other's "space".

   PROTIP: A shared interest in <strong>mutual</strong> continuous improvement is key to sustained adoption.

   Sharon may feel <strong>distain</strong> for others who don't, but should know the techniques she uses.

   Yet, some programmers are <strong>protective</strong> of their hard-earned Ninja techniques while others open share their keyboard aliases and "dotfiles" that define configurations and utility programs.

   Within an organization that encourages competition, people will naturally protect what they know to maintain a competitive advantage.

   If team members passively or actively undermine each other by withholding information or
   other game-playing, then enlightened people management and courageous facilitation is necessary.



   <a target="_blank" href="https://www.sonarlint.org/">SonarLint</a> is an <a target="_blank" href="https://github.com/topics/sonarlint">open-source</a> IDE plugin for Eclipse and IntelliJ that performs static analysis on several programming languages (Java, Kotlin, Ruby, JavaScript, PHP and Python).

   It "shifts left" quality considerations earlier in the development lifecycle,
   detecting (and fixing) quality issues as code is writing, like a spell checker.

   Install <a target="_blank" href="https://marketplace.eclipse.org/content/sonarlint">SonarLint from the Eclipse Marketplace</a>.
   On a Mac, configure in the: Eclipse → Preferences, Windows: Window → Preferences
   On Windows: Preferences → General → Editors → Text Editors→ Annotation
   PROTIP: Check "Vertical ruler" to make it easier to spot lines that need attention.
   SonarLint can also be <a target="_blank" href="https://plugins.jetbrains.com/plugin/7973-sonarlint">installed on JetBrains IntelliJ</a> from the IDEA Plugin Repository.

   If you're using Microsoft Visual Studio Code, install <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode">SonarLint</a> and
   <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=faustinoaq.javac-linter">Java Linter</a>. Microsoft has a <a target="_blank" href="https://code.visualstudio.com/blogs/2016/06/27/common-language-protocol">Common Language Protocol</a> to standardize tool use among languages.

   Some static code scanners identify dead code (sections of the codebase that is never used because the flow of execution goes around it).
   
   There is a scanner for each format of file.

   For Makefile templates to Bash scripts, install and run Daniel Schauenberg's <a target="_blank" href="https://github.com/mrtazz/checkmake">CheckMake</a>

   For Python programs, <a target="_blank" href="https://wilsonmar.github.io/git-hooks/#flake8-linter-for-python">install and run Flake8</a>.

   For Java programs, install and run several 3rd-party static code scanners:<a target="_blank" href="https://blog.idrsolutions.com/2018/03/how-to-run-checkstyle-pmd-and-findbugs-from-maven/">*</a>:

   * <a target="_blank" href="http://findbugs.sourceforge.net/">Findbugs</a> finds existing bugs.

   * <a target="_blank" href="https://pmd.github.io/"> PMD</a> finds patterns that can lead to bugs (such as unused variables)
   
   * <a target="_blank" href="http://checkstyle.sourceforge.net/"> Checkstyle</a> enforces coding standards and conventions (e.g. whitespace, Javadoc)
   
   * <a target="_blank" href="http://errorprone.info/"> Error Prone</a> hooks into application compile step

   <a target="_blank" href="https://www.youtube.com/watch?v=o4pdkgHfQS4">
   VIDEO: Using FindBugs, CheckStyle, and PMD from IntelliJ with QAplug</a>

   Note that new rules are added over time.


   <a name="Collaborative"></a>

## 2. Build an inclusive collaborative environment

   This is easier said than done, and perhaps the most difficult to get "right".

   The phrase "Extreme Programming" (XP) was popularized by Kent Beck in his book "Extreme Programming". 
   This was followed by "Extreme Programming Explained: Embrace Change</a>, with a <a target="_blank" href="https://learning.oreilly.com/library/view/extreme-programming-explained/0321278658/">Second Edition in 2004</a>. Beck spends as many pages discussing Values, Principles, and Philosophy as he does about Practices.

   "The Whole XP Team" involves many parts of an organization: Testers, Interaction Designers, Architects, Project Managers, Product Managers, Executives, Technical Writers, Users, Programmers, Human Resources.

   Beck quotes an exmple of Five Whys from Taiichi Ohno to dive into the fundamental Root Cause:

   1. Why did we miss this defect? Because we didn't know the balance could be negative overnight.

   2. Why didn't we know? Because only Mrs. Crosby knows and she isn't part of the team.

   3. Why isn't she part of the team? Because she is still supporting the old system and no one else knows how.

   4. Why doesn't anyone else know how? Because it isn't a management priority to teach anyone.

   5. Why isn't it a management priority? Because they didn't know that a $20,000 investment could have saved us $500,000.

   Root causes (and solutions) are often from beyond people programmers typically interact with on a daily basis.

   Within the team, have a mechanism to ensure that all team members are included when appropriate.
   Clearly define what's appropriate, in writing.

   Closer relationships with others can encourage people to try harder and take more proactive steps to avoid hassle for others they know. 


   <a name="Terms"></a>

## 3. Agree on the vocabulary

   When team members use different names to call the same thing, it's a distraction and sometime a basis for ridicule, which undermines teambuilding. For example:

   * JWT is pronounced "jot" here, not spelled out "jay-double-u-tee"?
   * "kubectl" is pronounced "cube cuddle"?
   * That file begins with a capital letter and have dashes, underlines?

   Agree on terminology about the criteria for category and severity level of issues found:
   For example, Categories:

   * Bug - coding oversight or mistake which could lead to unwanted behavior and performance issues
   * Vulnerability - a security issue which can mean a possible opening for an attacker
   * Code smell - clean coding violation which may lead to maintainability issues 

   Severity Levels:

   * Minor
   * Major
   * Critical
   * Blocker

   What are the different approaches to "pair programming"?


   <a name="CodeStructure"></a>

## 4. Structure code for testing

   Although one of the basic tactics of both Agile and DevOps is sending small increments of code into production (productive use), some developers "hoard" their releases, perhaps in fear of criticism. 

   To overcome such a tendency, the scope of features delivered needs to be "right sized",
   and feature flags need to be implemented as an integrated part of coding.

   Being able to quickly determine whether one technique is "better" than another can be quickly decided
   when a test framework is available.

   But feature branches and Pull Requests (PRs) need to be created before changes are made.




   In Python, code needs to be defined in functions in order for unit testing to access them uniquely.

   So perhaps features are delivered in two steps: one for the test-first framework, then another task for code implementation.

   GitHub Code Reviews come with the Enterprise edition of GitHub.

   3rd-party programs can also add code review functionalty.


   <a name="Rules"></a>

## 5. Specify linter rules included and excluded

   Running linter programs save "airtime" for substantive discussions rather than trivial formatting violations which can be caught automatically, without human interaction time. Linters save time because most rules are indeed rather "petty". But consistent compliance would remove impediments to deep discussions during live interactions.

   Flake8 recognizes a file kept with the code repository.

   Different programs have rules that overlap with other tools. 

   Some rules can be safely ignored.

   Some rules an individual programmer may apply for herself even though the team ignores it.
   That needs to be an option in the workflow.

   Just because an error is missed by the tool doesn't mean that the tool should be thrown out entirely.

   Some rules a team would agree as important, such as catching divide by zero operations which have crashed programs.

   To identify which rule the team chooses to enforce or not, 
   begin with blind voting to avoid intimidation to come up with what is the majority opinion.

   If a team has difficulty agreeing on which rules to apply,
   keeping track of who voted for each rule provides the transparency needed to address concerns rationally and specifically.


   <a name="Track"></a>

## 6. Track outcomes over time

   Accumulation of "Technical debt" is like financial debt, which robs <strong>flexibility in the future</strong>,
   when changes can't be made until blocking issues are fixed.

   So shifting focus to longer-term objectives is often the key to shift the mindset of those who are comfortable with working around garbage all around them. It takes a certain amount of discipline to keep work areas (repositories) clean now to avoid misunderstandings by several others in the future.

   This can be a constant source of stress within a team.

   But an automated linter can help find where technical debt exists.

   SonarLint on the client and <a target="_blank" href="http://www.sonarqube.org/">SonarQube</a> on a server can reference the same static source code analyzers ("quality profiles") written using <a target="_blank" href="https://rules.sonarsource.com/">SonarSource"</a> technology. 

   However, SonarLint does not "inherit" custom rules from SonarQube, 
   and Sonar does not operate on Test classes.

   Additional metrics can be added to SonarQube, or just use a regular Excel file.

   Track only the metrics approapriate to each different level of organizational maturity.

   Begin with just measuring whether the team met to brainstorm quality improvement.

   coding Those new to testing Measure 

   Different programming languages require different techniques, tools, and metrics.


   <a name="Commits"></a>

## 7. Run checks as part of git commit/push

   On the client, Git Hooks can can be configured to invoke <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=faustinoaq.javac-linter">Java Linter</a> and other scripts to run before commit is allowed to go through.

   On the server, Git Hooks can be configured to invoke the same (or larger set of) checks
   before a push is merged into the repository.

   <a target="_blank" href="http://docs.codehaus.org/display/SONAR/Analyzing+with+Maven">
   Sonar can be invoked within Maven</a>

   See <a target="_blank" href="https://wilsonmar.github.io/git-hooks">my tutorial on Git Hooks</a>.

<hr />

There you have it. Seven steps to encouraging code reviews to achieve great quality and efficiency:

   1. <a href="#ShareTooling">Discover and share tools</a>
   2. <a href="#Collaborative">Build an inclusive collaborative environment</a>
   3. <a href="#Terms">Agree on the vocabulary</a>
   4. <a href="#CodeStructure">Structure code for testing</a>
   5. <a href="#Rules">Specify linter rules included and excluded</a>
   6. <a href="#Track">Track outcomes over time</a>
   7. <a href="#Commits">Run checks as part of git commit/push</a>
   <br /><br />

