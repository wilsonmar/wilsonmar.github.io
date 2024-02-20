---
layout: page
date: "2024-01-20"
file: "contributing"
title: CONTRIBUTING.md
excerpt: "here's a sample CONTRIBUTING.md file in GitHub repositories describing how to contribute."
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14625241/9a22d514-059e-11e6-8aa4-7a387673a418.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


GitHub <a target="_blank" href="https://github.com/blog/1184-contributing-guidelines">automatically adds</a> a link to this file when a contributor creates a new issue or pull request.

This file is one of the first assets to be created during the beginning of a project.

We're really glad you're reading this, because volunteer developers make this project come to fruition.

## Contents

- [Code of Conduct](#Code+of+Conduct)
   - [Our Pledge](#Our+Pledge)
   - [Code of Conduct](#Code+of+Conduct)
   - [Standards of Conduct](#Standards+of+Conduct)
   - [Our Responsibilities](#Our+Responsibilities)
   - [Scope](#Scope)
   - [Enforcement](#Enforcement)

- [Issues](#Issues)
- [Let's connect](#Connect)
- [Security Features](#Security+Features)

- [Coding Style](#Coding+Style)
- [Certificate of Origin](#Certificate+of+Origin)

- [Code Reviews](#Code+Reviews)
- [Testing](#Testing)
- [Submitting Pull Requests](#Submitting+Pull+Requests)
- [Attribution](#Attribution)

<hr />

## CONTRIBUTING.md

In addition to the <a target="_blank" href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md">CODE_OF_CONDUCT.md file</a>:


## Issues

Security vulnerabilities should not be mentioned publicly as issues.<br />
Instead, email us directly.

GitHub Issues are not the appropriate place to ask questions or debug specific projects, but should be reserved for filing bugs and feature requests.

Before creating a new issue, please ensure the issue was not already reported by reviewing Open and Close Issues.


### Type of Issue

Each issue is flagged with one or more of these types:

   * <strong>Discussion</strong> for issues that can be non-issues, and encompass best practices, or plans for the future.

   * <strong>Easy First Step</strong> for issues that are great for new contributors to get started with. We want people to feel like there's always somewhere you can start.

   * <strong>Quick</strong> for small issues (such as typos in text) that can be fixed quickly.

   * <strong>To check</strong> for issues that may not be reproducible, or have not been vetted by a team member.

   * <strong>Defect</strong> for bugs in functionality. The issue text should contain steps to reproduce. Feel free to fix these and submit a pull request.

   * <strong>Enhancement</strong> for enhancements to functionality. If you would like to work on one, please add a comment that you are doing so.

   * <strong>Workaround known</strong> for issues have had their solutions discussed, but have yet to be implemented.
  <br /><br />

We prefer that "+1" or emoji be added to an existing issue instead of generic comments. [reactions](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/).

### Severity of issues

The estimated impact of each issue is categorized using these labels (from least to most severe):

* <strong>Trivial</strong>: Minimal impact on the usefulness and functionality of the software; a "nice-to-have." Visual impact without functional impact;

* <strong>Medium</strong>: Some impairment of use, but simple workarounds exist;

* <strong>Critical: Significant loss of functionality or impairment of use. Display of telemetry data is not affected though. Complex workarounds exist;

* <strong>Blocker</strong>: Major functionality is impaired or lost, threatening mission success. Display of telemetry data is impaired or blocked by the bug, which could lead to loss of situational awareness.


<a name="Connect"></a>

## Let's connect

When contributing to this repository, please first discuss the change you wish to make via <a target="_blank" href="https://github.com/Fahmy-Kadiri-akl/Akl-Demo/issues">GitHub Issue</a> or contact us:

  * Mailing list: Join our developer list at http://groups.google.com/group/____
  * https://___ is our main website.
  * LinkedIn?
  * https://___ tells you who we are
  
  * Our roadmap at https://____/pages/wish-list) is the 10k foot view of where we're going, and
  * [Pivotal Tracker](http://pivotaltracker.com/projects/____) is our day-to-day project management space.
  * Bugs? https://____ is where to report them

  * Join our Slack channel at ____
  * Talk IRC? We're at irc://chat.freenode.net/____ on freenode. 


## Security Features

Contributors to this GitHub repository should be aware of the following security features:

* To protect this repository against unauthorized changes, the <a target="_blank" href="https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches">"Require review from Code Owners"</a> is activated so that GitHub automatically requests a review from Code Owners when a Pull Request (PR) is opened. The <a target="_blank" href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners#example-of-a-codeowners-file">CODEOWNERS</a> file (at the root or /docs folder) specifies the folder, file, or file type to be reviewed by the GitHub account or email address of individual or team specified. 

* Reviewers of that CODEOWNERS file (and its location) are specified in another CODEOWNERS file in the repo's /.github folder.

* To control what actions are allowed in this repository, this repo makes use of one or more <a target="_blank" href="https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets">rulesets</a> listing <a target="_blank" href="https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax">rules</a>. A ruleset for a feature branch can require signed commits, block force pushes, define who can push commits to a certain branch, or who can delete or rename a tag.

* To withstand man-in-the-middle attacks attempting to steal data during transmission, our contributors need to use secure HTTPS protocol by setting up SSH (Secure Shell Protocol). SSH keys are a way to identify trusted computers, without involving passwords. It's enabled by clicking your avatar, "Your profile", settings, "SSH and GPG keys" at <a target="_blank" href="hhttps://github.com/settings/keys">https://github.com/settings/keys</a>.[<a target="_blank" href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account">DOC</a>]

  TODO: Use <a target="_blank" href="https://tutorials.akeyless.io/docs/using-ssh-certificates-to-access-remote-machines">AKeyless to dynamically create SSH keys</a> rather than leaving manually-created static SSH keys which can be stolen from your computer.

* To ensure that the email addresses specified in git commits are <strong>verified</strong>, our contributors need to associate a GPG key to their account. It's enabled by clicking your avatar, "Your profile", settings, "SSH and GPG keys" at <a target="_blank" href="https://github.com/settings/keys">https://github.com/settings/keys</a>. See <a target="_blank" href="https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key">this</a> for more information.

* To reduce the ability for malicious actors to make commits as you, our contributors need to have 2FA (Two Factor Authentication). It's enabled by clicking your avatar, Your profile, settings, "Password and authentication" at <a target="_blank" href="https://github.com/settings/security">https://github.com/settings/security</a>. See <a targeet="_blank" href="https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication">this</a> for more information.

* To further block malicious actors from executing potentially destructive commands, the usual IP address used by  Administrators of this repository is registered in this GitHub Enterprise Cloud repository's <a target="_blank" href="https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization">IP Allow List</a>. A side affect of this is that GitHub Codespaces cannot be used for repositories protected this way since their IP addresses are dynamically assigned.

* To identify and remediate security vulnerabilities in package dependencies, this repository is updated immediately when <a target="_blank" href="https://help.github.com/en/github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies">GitHub Dependabot Security Advisories</a> are issued.


<hr />

## Coding Styles

To foster productivity, we ensure consistency throughout the source code by using code formatters and linters specific to each programming language. Not doing so would prolong team reviews that waste time on superficial aspects of code rather than improving its functionality and performance.

We optimize for developer productivity and happiness through teamwork.

This repo contains open source software. Since others in the future will read this, we want to make it look nice and easy for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers, the goal is to make the ride as comfortable as possible.

There are a lot of tools that do the same thing, and we try to pick the best one for the job. 
For team-level efficiency, we try to keep the number of tools we use to a minimum.
As for <a target="_blank" href="https://wilsonmar.github.io/text-editors/">text editor IDE</a>, most developers are now using the free VSCode (Microsoft's Visual Studio Code).

This repo contains a <tt>.vscode</tt> folder that specifies automatic actions such as run and debug without switching between VSCode and the debuggere for <a target="_blank" href="https://github.com/godotengine/godot-vscode-plugin/issues/163">C# godot</a>, <a target="_blank" href="https://bryanwweber.com/writing/2022-01-24-create-tasks-json-vs-code.html">python</a>, <a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/debug-nodejs/?source=recommendations">JavaScript</a>, <a target="_blank" href="https://github.com/microsoft/vscode-java-debug/blob/main/Configuration.md">java</a>, <a target="_blank" href="https://www.jpatrickfulton.dev/blog/2023-07-03-gatsby-vscode-support/#the-vscode-folder">Gatsby</a>, <a target="_blank" href="https://piethein.medium.com/dockerize-your-projects-in-visual-studio-code-f2374de541bd">Dockerfile</a>, <a target="_blank" href="https://blog.nonstopio.com/the-hidden-gems-of-vs-code-settings-json-and-launch-json-explained-9e9e1c6b4b4a <a target="_blank" href="https://docs.nvidia.com/nsight-visual-studio-code-edition/cuda-debugger/index.html">CUDA</a>, etc. 

The .vscode <a target="_blank" href="https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings">Workspace settings folder</a> specific to the project of the GitHub repo contains these files:

  * **extensions.json** contains project-specific extensions, such as <a target="_blank" href="https://www.youtube.com/watch?v=kyRclsioJBQ">VIDEO</a>: Console Ninja which shows the result of each line within VSCode, which eliminates the need for logging and switching back-and-forth between code and console window. <a target="_blank" href="https://www.youtube.com/watch?v=kyRclsioJBQ&t=4m25s">"Random Everything"</a> to generate test data within VSCode. <a target="_blank" href="https://www.youtube.com/watch?v=kyRclsioJBQ&t=7m19s">"Toggle Quotes"</a> to quickly switch between single and double quotes.

  * **launch.json** contains configuration profiles to execute the project from the Run and Debug menu. <a target="_blank" href="https://go.microsoft.com/fwlink/?linkid=830387">DOCS</a>: For example, to compile the extension and then opens it inside a new window for IntelliSense autocomplete. 
  
  * **tasks.json** - <a target="_blank" href="https://code.visualstudio.com/docs/editor/tasks">DOC</a>: task.json code instructs VSCode to invoke a <strong>type</strong> of processor to invoke the <strong>script</stong> defined. Built-in task types are gulp, grunt, jake, and npm. A tasks is run from Quick Open (⌘P) and typing 'task', Space and the command name, such as <tt>task lint</tt>. To keep settings agnostic to the enviornment, use <a target="_blank" href="https://code.visualstudio.com/docs/editor/variables-reference">reference variables</a> for <a target="_blank" href="https://code.visualstudio.com/docs/editor/tasks#_variable-substitution">substitution</a>, such as <tt>${workspaceFolder}</tt> and <tt>${file}</tt> to specify the location of the script to run. 

  * **settings.json** - overwrites VSCode app <a target="_blank" href="https://code.visualstudio.com/docs/getstarted/settings#_default-settings">default settings</a> and user settings for search, spelling, etc. <a target="_blank" href="https://realpython.com/advanced-visual-studio-code-python/#adding-bonus-extensions-to-visual-studio-code">DOC</a>.
  <a target="_blank" href="https://bobbyhadz.com/blog/what-is-vscode-folder">BLOG</a>: <a target="_blank" href="https://www.youtube.com/watch?v=sIhmrUvFLmA">VIDEO</a>: The contents of settings.json are revealed by pressing <tt>⌘,</tt> (Mac) or <tt>Ctrl+,</tt> (Windows) to open the Settings editor, then click the "Workspace" tab.

  <ul><pre>{
  "editor.formatOnSave": true,
  "editor.wordwrap": "on",
  "editor.tabSize": 2,
  "editor.fontSize": 10,
  "editor.InsertSpaces": true,
  files.eol": "\n",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.autoSave": "onFocusChange",
  "[css]":{
      "diffEditor.codeLens": true
  },
  "files.exclude": {
      "**/.git": true,
      "**/.svn": true,
      "**/.hg": true,
      "**/CVS": true,
      "**/.DS_Store": true
  }
}
  </pre></ul>

   * A space after each list item and method parameter (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows
   * two spaces (soft tabs)
   * No trailing whitespace on each line
   * Blank lines should not have any space
   * No blank line at end of file
   <br /><br />

Others:
   * Follow the GitHub ??? Styleguide
   * Use HAML for all views
   * Avoid logic in views, putting HTML generators into helpers

In IaC:
   * So that we can consistently serve images from the CDN, always use image_path or image_tag when referring to images. Never prepend "/images/" when using image_path or image_tag.
   * For the CDN, use cwd-relative paths rather than root-relative paths in image URLs in any CSS. So instead of url('/images/blah.gif'), use url('../images/blah.gif').

At the root of the repo is the <tt>.vscodeignore</tt> file that specifies files and folders to be ignored by VSCode:
    <ul><tt>.gitignore
CHANGELOG.md
   </tt></ul>

## Certificate of Origin

By making a contribution to this project, I certify that:

- (a) The contribution was created in whole or in part by me and I
      have the right to submit it under the open source license
      indicated in the file; or

- (b) The contribution is based upon previous work that, to the best
      of my knowledge, is covered under an appropriate open source
      license and I have the right under that license to submit that
      work with modifications, whether created in whole or in part
      by me, under the same open source license (unless I am
      permitted to submit under a different license), as indicated
      in the file; or

- (c) The contribution was provided directly to me by some other
      person who certified (a), (b) or (c) and I have not modified
      it.

- (d) I understand and agree that this project and the contribution
      are public and that a record of the contribution (including all
      personal information I submit with it, including my sign-off) is
      maintained indefinitely and may be redistributed consistent with
      this project or the open source license(s) involved.


## Code Reviews

- **Do your best.** No one writes bugs on purpose. Do your best, and learn from your mistakes.

- **Keep tools updated.** Before a code review, all reviewers update all components and libraries to use the latest version as the rest of the team. This is why Python programs have a <tt>requirements.txt</tt> file, Ruby programs have a <tt>Gemfile</tt>, and JavaScript programs have a <tt>package.json</tt> file.

- **Auto format code.** This reduces wasting time on formatting issues. 

- **Review the code, not the author.** Look for and suggest improvements without disparaging or insulting the author. Provide actionable feedback and explain your reasoning.

- **You are not your code.** When your code is critiqued, questioned, or constructively criticized, remember that you are not your code. Do not make code review comments personal.

- Kindly note any violations to the guidelines specified in this document. 

- **Include doc changes with code in PRs.** The docs provide additional information such as attribution for techniques used. This makes it easier and faster for others to understand coding choices made.

- **Keep code working.** Clone to a separate repo or branch to do work, then include changes after verifying that your changes work. This keeps the main repo working for all others. Code reviews by others are done to uncover "blind spots" and unintended consequences from coding and testing.


## Testing

All features or bug fixes are tested before each PR is accepted. We test using the "Behavior-Driven Development" (BDD) approach using the [RSpec](http://rspec.info/) framework ???

We have a handful of test  ??? features, but most of our testbed consists of RSpec examples. 
Please write RSpec examples for new code you create.

We use [Travis CI](https://travis-ci.org/) to run our tests. Travis CI is a hosted continuous integration service for the open source community. It is integrated with GitHub and offers first class support for many languages. We use Travis CI to run our tests automatically when we push new code to GitHub.

A full set of tests are run before a release is created. 


## Submitting Pull Requests

Please:

* Fork this repository to your account.
* Before making changes, please create a branch off of the main/master branch. Include your GitHub account name (e.g. johndoe-fix-ds).
* Before submitting a PR, please run tests. Specify in your PR notes what tests you ran.

* Make your commits atomic (one feature per commit).
* Set your editor to keep each commit message 72 or less characters. This makes them easier to read in various git tools. Set in your git commit message file: See http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

   <pre>:set textwidth=72</pre>

Please [write a great commit message](https://chris.beams.io/posts/git-commit/).

* Capitalize the first word in the subject line
* If applicable, prefix the title with the relevant component name. (examples: "[Docs] Fix typo", "[Profile] Fix missing avatar")
* Reference the relevant issue number, if applicable.

* Limit the subject line to 50 characters
* Do not end the subject line with a period

* Separate subject from body with a blank line
* Use the imperative mood in the subject line (example: "Fix typo in README", not "Fixed typo in README" or "Fixes typo in README")

* Use the commit message body to explain **why**, *not what and how* (the code shows that!)
* Tools such as `log`, `shortlog`, and `rebase` can get confused when there is NOT a blank line separating the summary from the body
* Specify individual files or directories in the summary or body of the commit message
* In notes for your commit, add steps to reproduce, stack traces, compiler errors, library versions, OS versions, and screenshot files (if applicable).
* Use [GitHub-flavored Markdown](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax) - put code blocks and console outputs in backticks (```). This improves readability.
* Be precise about the proposed outcome of the feature and how it relates to existing features. Include implementation details if possible.
* Are there possible side effects or other unintuitive consequences if this change is made?
* Include a ticket identifier if you are using an issue tracker.
* Wrap the body at about 72 characters

See http://help.github.com/pull-requests/

Note: All contributions will be licensed under the project's license.

<hr />

## Attribution

This document was adapted from excellent examples. 
Much gratitude and respect to the authors of these documents:

* https://github.com/nasa/openmct/blob/master/CONTRIBUTING.md
* https://mozillascience.github.io/working-open-workshop/contributing/
* https://github.com/atom/atom/blob/master/CONTRIBUTING.md#reporting-bugs
* https://github.com/jessesquires/.github/blob/main/CONTRIBUTING.md
* https://github.com/Alamofire/Alamofire/blob/master/CONTRIBUTING.md
* https://github.com/thoughtbot/factory_girl_rails/blob/master/CONTRIBUTING.md
* https://github.com/puppetlabs/puppet/blob/master/CONTRIBUTING.md
* https://mozillascience.github.io/leadership-training/03.1-mechanics.html

<hr />

## Alternatives

https://github.com/openstack/swift/commit/fdf55c2817c9a457de4d5609cabfda0aa0620dc1

<ul>If you would like to contribute to the development of OpenStack,
you must follow the steps in the "If you're a developer, start here"
section of this page: [http://wiki.openstack.org/HowToContribute](http://wiki.openstack.org/HowToContribute#If_you.27re_a_developer.2C_start_here:)
&nbsp;
Once those steps have been completed, changes to OpenStack
should be submitted for review via the Gerrit tool, following
the workflow documented at [http://wiki.openstack.org/GerritWorkflow](http://wiki.openstack.org/GerritWorkflow).
&nbsp;
Pull requests submitted through GitHub will be ignored.
&nbsp;
Bugs should be filed [on Launchpad](https://bugs.launchpad.net/swift),
not in GitHub's issue tracker.
</ul>
