---
layout: post
date: "2025-07-31"
lastchange: "v028 + from safety to pip-audit :2024-09-12-appsec-scans.md"
url: "https://wilsonmar.github.io/appsec-scans"
file: "appsec-scans"
title: "AppSec Scans"
excerpt: "How to scan programming and configuration code to ensure application security by detecting errors and vulnerabilities"
tags: [Python, DevSecOps]
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit:
  creditlink:
comments: true
created: "2024-09-12"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Why? 

There are several parties involved:

   * Executives and managers who need to plan and arrange conditions
   * Workers who create for auditors traceability as they work
   <br /><br />

Most enterprises issue a corporate policy to install processes to both detect and remove vulnerabilities at the earliest point in the develpment lifecycle.

Even though it takes a few seconds more, catching issues before infected code reaches the team's registry would prevent crashes and embarassment, which can be expensive.

## Cloud Dashboards for coordination

Managers in enterprises are offered <strong>dashboards</strong> to identify and prioritize AppSec work. Such <strong>ASPM (Application Security Posture Management)</strong> systems are sold as "modern, holistic approach to overseeing and improving the security of an organization's applications throughout their entire lifecycle, from development through to production and operation."




The types of scans:

<br />
<em>"Repository Health" Code scans:</em>
1. Secrets Detection identify "high entropy" hard-coded strings that leak secrets others can misuse, such as passwords and API access keys.
1. Codebashing identifies whether coding conventions to enhance security are applied. Examples:
   * Return from a function a tuple which include an error value. So consider the result of a function as unsafe until the error value is confirmed and handled.
1. SAST (Static Application Security Testing) examines souce code residing in code registries. Examples:
   * Binding to all network interfaces can potentially open up a service to traffic on unintended interfaces, that may not be properly documented or secured. Scanners looks for a string pattern “0.0.0.0” that may indicate a hardcoded binding to all network interfaces.
1. DAST (Dynamic Application Security Testing) executes apps to monitor their behavior dynamically.
   * Various potentially invalid values are provided to each input to determine whether the app responds appropriately.
1. API Security verifies whether a URL provided as input is part of a SSRF (Server Side Request Forgery) attack.
   * Domains in URLs are checked against a blacklist by the DNS service used
1. SCA (Software Composition Analysis) identify modules which have known vulnerabilities within the web of transitive dependencies defined in an SBOM (Software Bill of Materials).
<br />
<em>Supply Chain:</em>
1. "Malicious Package Protection" include creation of cryptographic hash on each asset to detect whether tampering or other damage has occured.
1. "AI detection" <a target="_blank" href="https://medium.com/the-generator/clever-prompt-injection-thwarts-ai-comments-ef82e7836ff9">expose</a> AI contamination by <a target="_blank" href="https://generativeai.pub/how-researchers-hack-peer-review-with-ai-prompts-a1a8e54310ef">hidden commands</a> which enable AI hijacking human review processes and farm engagement.
<br />
<em>Cloud:</em>
1. Container Security looks inside Docker containers which run both locally and in Kubernetes and other cloud orchestrators.
1. <strong>IaC (Infrastructure as Code)</strong> such as Ansible, Terraform, etc. which create and manage resources using declarative coding should not expose private information for public discovery.

<hr />

PROTIP: Effort associated with scanning involves both fixing "true positives" and handling <strong>false positives</strong> which do not really need fixing.

{% include whatever.html %}

## Vendor selection

> PROTIP: Limit the number of utilities which have permission to see and touch your code. Evan popular and long-standing vendors can potentially be inflitrated by criminals who inject malicious code into your vendor ecosystem.

Thus, some vendors consolidate multiple types of scans together in the same run. Examples are Checkmarx, Akido, Xygeni, Wiz, etc.

   * https://www.paloaltonetworks.com/cyberpedia/aspm-application-security-posture-management
   <br /><br />
For privacy, some organizations need to run services to run locally off the public internet.

However, cloud vendors provide up-to-the-minute rules to identify and instantly remediate issues.
Cloud-based vendors also provide a convenient <a target="_blank" href="https://help.aikido.dev/pr-and-release-gating/github-pr-gating/github-ci-pr-gating-via-aikido-dashboard">dashboard (such as Akido's GitHub CI PR Gating Dashboard)</a>.

Assets subjected to scanning include both source code and configuration files.

> PROTIP: To ensure that each vendor operates using a minimal level of security capability, ask for the SOC2 and/or ISO 27001 attestation from third-party auditors.

FOSS (Free Open-Source Software) vendors provide their assets for you to scan. However, this limits the vendor's ability to profit and thus the number of people working on the product.

Careful vendor assessment include vetting individuals who can alter code: their nationality, employment background, activity level, etc.
Anonymous authors are suspect.

> Please contribute to vendors when you use their free software.

The license vendors specify define whether those who change their code are legally required to submit improvements back to them.

## Vendors

1. <a href="#ggshield">GitGuardian.com</a> install the <tt>.git/hooks/git-commit</tt> file and scan each repository's entire Git history, across all git branches
1. <a href="#GitLeaks">GitLeaks</a> FOSS local: scans for secrets
1. TruffleHog: scans for secrets
1. <a href="#GoSec">GoSec</a>: FOSS local: scans Golang code only

1. <a href="#Black">Black</a> and
1. <a href="#Ruff">Ruff</a> (instead of <a href="#Flake8">Flake8</a>) to "lint" code for violations of Python coding style conventions.
1. <a href="#Bandit">Bandit</a> FOSS: Checks for common security issues specifically in Python code.

1. <a href="#git-secrets">git-secrets</a> to identify cryptographic text.

1. <a target="_blank" href="https://www.akido.com/">Bearer</a> FOSS: SAST tool for JavaScript, TypeScript, Ruby, Java, PHP, Go, and Python. Prioritizes vulnerabilities based on <a target="_blank" href="https://wilsonmar.github.io/owasp-testing/">OWASP Top 10</a>.
1. <a target="_blank" href="https://www.akido.com/">Graudit</a> FOSS: Grep-based, supports a wide range of languages, and is easy to use for quick scans.
1. <a target="_blank" href="https://www.akido.com/">Horusec</a> FOSS: CLI and IDE plugin; offers a web UI for vulnerability management. Supports multiple languages including C#, Java, Python, Go, and more.
1. <a target="_blank" href="https://www.akido.com/">Betterscan</a> FOSS: Orchestrates multiple scanning tools (SAST, SCA, secrets scanning) and supports many languages.   
1. <a target="_blank" href="https://www.akido.com/">SpotBugs</a> & Find Security Bugs FOSS: Java-focused tools

1. <a href="#Safety">Safety</a> scans dependencies for known vulnerabilities.
1. <a href="#Snyk">Snyk Code</a>: Checks both code and dependencies for vulnerabilities using <strong>machine learning</strong> for prioritization.
1. <a target="_blank" href="https://www.akido.com/">Akido</a>: TODO: multi SaaS 
1. <a target="_blank" href="https://www.xygeni.com/">Xygeni</a>: multi SaaS

1. <a target="_blank" href="https://www.Checkmarx.com/">Checkmarx</a> multi : Offers large enterprises needing robust, flexible scanning and deep CI/CD integration and a customizable query engine.
1. <a target="_blank" href="https://www.Semgrep.dev/">Semgrep</a>: Lightweight, rule-based, and easy to tune. Ideal for fast-moving teams wanting quick feedback and custom rules.
1. <a target="_blank" href="https://www.CodeQL.com/">GitHub CodeQL</a>: Native to GitHub Actions, but requires more technical setup. Suited for security engineers comfortable with manual tuning.
1. OpenText <a target="_blank" href="https://www.Fortify.com/">Fortify</a>: Static Code Analyzer (SCA): Known for deep analysis and broad language support. Used in finance, government, and defense.
1. <a target="_blank" href="https://www.Veracode.com/">Veracode</a>: Cloud-based, combines static and dynamic analysis, and integrates with various development tools. Strong in compliance-heavy environments.
1. Perforce <a target="_blank" href="https://www.Klocwork.com/">Klocwork</a>: Focuses on C, C++, C#, Java vulnerabilities like memory leaks and concurrency issues, with industry compliance features.
1. BlackDuck <a target="_blank" href="https://www.Coverity.com/">Coverity</a>: Analyzes <strong>binaries</strong> as well as source code of C++, Java, and Python programs.
1. <a target="_blank" href="https://www.synopsys.com/">Synopsys</a>

## Ways to run

There are many options to run utilities to identity syntax violations and vulnerabilities:

<a href="#ManualCLI">A. Within a Terminal app</a>, manually construct CLI commands to install and run each utility individually:

<a href="#LocalGit">B. Obtain & customize Bash scripts to manually run locally</a> the above from:

   * https://github.com/wilsonmar/mac-setup/blob/main/git-commit.sh
   * https://github.com/wilsonmar/mac-setup/blob/main/git-push.sh
   <br /><br />

<a href="#GitHubWorkflow">C. Use Git Hooks</a> to automatically invoke the Bash script <tt>git-commit.sh</tt> on files which have <tt>git commit</tt> or<br />
Automatically invoke the Bash script  <tt>git-push.sh</tt> on all files in the folder when <tt>git push</tt> is run.

<a href="#GitHubWorkflow">D. GitHub workflow:</a> yaml format files in your repo's <tt>.github/workflows/</tt> folder to invoke GitHub Actions.</a> This integrates runs automatically into standardized CI/CD workflows to use cloud SaaS utilities.

<a href="#CloudScan">E. Cloud scan</a>: Services such as Akido <strong>"continuously" scan</strong> GitHub repositories to identify issues in cloud-based code repositories:

<hr />

Automating deployment of patches and upgrades depends on what Configuration Management Tools are used:

* Ansible is for agentless automation. Playbooks define patch deployment workflows  scheduled via cron or AWX/Tower, and manage rolling updates across server groups.
* Puppet and Chef work well for continuous configuration management, automatically applying patches when they become available and maintaining desired system states.
* SaltStack provides both push and pull models for patch management with good scalability for large environments.

Within clouds:
* <a target="_blank" href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager.html">AWS Systems Manager Patch Manager</a> automates patching for EC2 instances and on-premises servers, with maintenance windows and compliance reporting.
* <a target="_blank" href="https://azure.microsoft.com/en-us/products/azure-update-management-center">Azure Update Management</a> integrates with Log Analytics to schedule and track updates across hybrid environments.
* <a target="_blank" href="https://cloud.google.com/compute/docs/osconfig/rest">Google Cloud OS Config API</a> handles patch management for Compute Engine instances.

* Docker base images, rebuild containers
* Kubernetes rolling updates or Docker Swarm for zero-downtime deployments.


<hr />

<a name="ManualCLI"></a>

## A. Manual CLI commands

1. In a macOS Terminal with Homebrew installed:

1. Navigate to the path containing the .git folder created when the GitHub repository was initialized, such as:
   <pre>
   cd /$HOME/github-?/python-samples
   </pre>
1. Obtain my sample repo that contains various secrets (AWS, MongoDB, PostgeSQL, RSA, SMTP, LDAP, etc.), in a folder path to receive Git repos:
   <pre>
   git clone https://github.com/GitGuardian/sample_secrets
   cd sample_secrets
   </pre>


<a name="ggshield"></a>

### ggshield (Git Guardian)

1. Install the ggshield utility to create a <tt>pre-commit</tt> file:
   <pre>
   brew info ggshield
   ggshield install --mode local --hook-type pre-commit
   </pre>
   Results:
   ```
   pre-commit successfully added in .git/hooks/pre-commit
   ```
1. From the folder, edit the file using Visual Studio editor (or substitute another):
   ```
   code .git/hooks/pre-commit
   ```
   The default contains:
   ```
   #!/bin/sh
   ggshield secret scan pre-commit "$@"
   ```
1. Open a browser website to authenticate to its dashboard to obtain a GitGuardian API key to have ggshield remotely obtain scanning rules:
   ```
   ggshield auth login
   ```

   https://docs.gitguardian.com/ggshield-docs/reference/auth/login

1. To use an on-prem version of GitGuardian ggshield utility, use the --instance option to point to it.
   ```
   ggshield scan path -r . -v
   ```
   "." is used to define the /path/to/code/folder
   
   FIXME: Results:
   ```
   Usage: ggshield [OPTIONS] COMMAND [ARGS]...
   Try 'ggshield -h' for help.
   &nbsp;
   Error: No such command 'scan'.
   ```

<a name="GitLeaks"></a>

### GitLeaks

1. Navigate to the known-insecure folder, such as

   https://github.com/wilsonmar/sample_secrets/

1. Invoke https://semgrep.dev/p/gitleaks
   ```
brew install gitleaks
gitleaks dir . -v --no-banner
   ```

   CAUTION: Sample response from GitLeaks shows discovery of just the AWS secret:
   ```
Finding:     ... = aws_lib.connect("AKIAF6BAFJKR45SAWSZ5", "hjshnk5ex5u34565...
Secret:      AKIAF6BAFJKR45SAWSZ5
RuleID:      aws-access-token
Entropy:     3.521928
File:        bucket_s3.py
Line:        10
Fingerprint: bucket_s3.py:aws-access-token:10
&nbsp;
3:35AM INF scanned ~8718 bytes (8.72 KB) in 3.25ms
3:35AM WRN leaks found: 1
   ```

   Note that the above result does NOT identify all the secrets described in
   https://github.com/wilsonmar/sample_secrets/blob/main/README.md


<a name="GoSec"></a>

### GoSec

1. Navigate to the known-insecure folder. 
   * https://securego.io/docs/rules/rule-intro
   * https://github.com/securego/gosec
   * https://semgrep.dev/p/gosec
1. Invoke:
   ```
   brew install gosec
   gosec scan
   ```

   CAUTION: Sample response shows discovery of just the AWS secret:
   ```
[gosec] 2025/07/25 10:40:16 Including rules: default
[gosec] 2025/07/25 10:40:16 Excluding rules: default
[gosec] 2025/07/25 10:40:16 Including analyzers: default
[gosec] 2025/07/25 10:40:16 Excluding analyzers: default
[gosec] 2025/07/25 10:40:16 Skipping: . Path doesn't exist.
Results:
&nbsp;
Summary:
  Gosec  : 2.22.5
  Files  : 0
  Lines  : 0
  Nosec  : 0
  Issues : 0
   ```


<a name="pip-audit"></a>

### pip-audit

pip-audit is installed using pipx.

Its assumption is to scan all Python source code, so not scope need be specified with the command:

<pre>pip-audit</tt>

The challenge of remediation is that popular modules with vulnerabilities cannot be removed in fear of breaking modules calling them.
```
Found 3 known vulnerabilities in 2 packages
Name     Version ID                  Fix Versions
-------- ------- ------------------- ------------
requests 2.32.3  GHSA-9hjg-9r4m-mvj7 2.32.4
urllib3  2.3.0   GHSA-48p4-8xcf-vxj5 2.5.0
urllib3  2.3.0   GHSA-pq67-6m6q-mj2v 2.5.0
Name Skip Reason
---- ----------------------------------------------------------------
tbb  Dependency not found on PyPI and could not be audited: tbb (0.2)
```


<a name="Safety"></a>

### Safety

PROTIP: We no longer run the safety utility because it has been changed to require registration and thus cannot be run stand-alone offline.

1. In a macOS Terminal with Homebrew installed:
   ```
   brew info safety
   ```
   Results:
   ```
   brew info safety
   ==> safety: stable 3.6.0 (bottled), HEAD
   Checks Python dependencies for known vulnerabilities and suggests remediations
   https://safetycli.com/product/safety-cli
   Not installed
   From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/s/safety.rb
   License: MIT
   ==> Dependencies
   Build: cmake ✘, rust ✘
   Required: certifi ✘, cryptography ✘, python@3.13 ✘
   ==> Options
   --HEAD
      Install HEAD version
   ==> Analytics
   install: 85 (30 days), 231 (90 days), 736 (365 days)
   install-on-request: 85 (30 days), 231 (90 days), 737 (365 days)
   build-error: 0 (30 days)
   ```
1. Install:
   ```
   brew install safety
   ```

1. Navigate to a folder holding .py files, such as:
   ```
   cd /$HOME/github-???/python-samples
   ```
1. Obtain API token from https://www.getsafety.com - if <tt>security scan</tt> is run, this message appears:
   ```
   Please login or register Safety CLI (free forever) to scan and secure your projects with Safety
   (R)egister for a free account in 30 seconds, or (L)ogin with an existing account to continue (R/L): Unhandled exception happened: EOF when reading a line
   &nbsp;
   WARNING: Something went wrong, please try again later" appears on registration on July 14, 2025.

1. To use Safety to check for issues:
   ```
   safety scan
   ```
   PROTIP: The response is a contraction:
   ```
   DEPRECATED: this command (`check`) has been DEPRECATED, and will be unsupported beyond 01 June 2024.
   &nbsp;
   We highly encourage switching to the new `scan` command which is easier to use, more powerful, and can be set up to mimic the deprecated command if required.
   ```

   Sample response if no issues were found:
   ```
   Using open-source vulnerability database
   Found and scanned 69 packages
   Timestamp 2025-07-14 00:24:33
   0 vulnerabilities reported
   0 vulnerabilities ignored
   &nbsp;
   No known security vulnerabilities reported. 
   ```
   On <tt>security check</tt>
   ```
Running pre-commit.sh from .git/hooks/pre-commit
Safety 3.6.0 scanning /Users/johndoe/github-wilsonmar/python-samples
2025-08-01 00:14:53 UTC
&nbsp;
Account: ....com 
Project: python-samples
 Git branch: main
 Environment: Stage.development
 Scan policy: fetched from Safety Platform, ignoring any local Safety CLI policy files
&nbsp;
Python detected. Found 4 Python requirements files, 8 Python pyproject.toml files and 4 Python environments
&nbsp;
Dependency vulnerabilities detected:
&nbsp;
📝 dice-stats/requirements.txt:
&nbsp;
 pillow==11.2.1 [1 vulnerability found]                                                                               
  -> Vuln ID 77942:                                                                                     &nbsp;              
     Affected versions of this package are vulnerable to a Buffer Overflow when saving sufficiently large compresse...
 Update pillow==11.2.1 to pillow==11.3.0 to fix 1 vulnerability                                                       
 Versions of pillow with no known vulnerabilities: 11.1.0, 11.0.0, 10.4.0, 10.3.0                                     
 Learn more: https://data.safetycli.com/p/pypi/pillow/eda/?from=11.2.1&to=11.3.0                                      
&nbsp;
✅ google_calendar_example/requirements.txt: No issues found.
&nbsp;
✅ requirements.txt: No issues found.
&nbsp;
📝 show-recommendations/requirements.txt:
&nbsp;
 keras==3.4.1 [3 vulnerabilities found]                                                                               
 Update keras==3.4.1 to keras==3.9.0 to fix 3 vulnerabilities                                                         
 Versions of keras with no known vulnerabilities: 3.11.0, 3.10.0, 3.9.2, 3.9.1                                        
 Learn more: https://data.safetycli.com/p/pypi/keras/eda/?from=3.4.1&to=3.9.0                                         
&nbsp;
 protobuf==4.25.3 [1 vulnerability found]                                                                             
  -> Vuln ID 77740:                                                                                     &nbsp;              
     Affected versions of this package are vulnerable to a potential Denial of Service (DoS) attack due to unbounde...
 Update protobuf==4.25.3 to protobuf==4.25.8 to fix 1 vulnerability                                                   
 Versions of protobuf with no known vulnerabilities: 6.32.0rc1, 6.31.1, 5.29.5                                        
 Learn more: https://data.safetycli.com/p/pypi/protobuf/eda/?from=4.25.3&to=4.25.8                                    
&nbsp;
 setuptools==69.5.1 [2 vulnerabilities found]                                                                         
  -> Vuln ID 76752: CVE-2025-47273, CVSS Severity HIGH                                                                
     Affected versions of Setuptools are vulnerable to Path Traversal via PackageIndex.download(). The impact is Ar...
  -> Vuln ID 72236:                                                                                     &nbsp;              
     Affected versions of Setuptools allow for remote code execution via its download functions. These functions, w...
 Update setuptools==69.5.1 to setuptools==78.1.1 to fix 2 vulnerabilities                                             
 Versions of setuptools with no known vulnerabilities: 80.9.0, 80.8.0, 80.7.1, 80.7.0, 80.6.0, 80.4.0, 80.3.1, 80.3.0,
 80.2.0, 80.1.0, 80.0.1, 80.0.0, 79.0.1, 79.0.0                                                                       
 Learn more: https://data.safetycli.com/p/pypi/setuptools/eda/?from=69.5.1&to=78.1.1                                  
&nbsp;
 Werkzeug==3.0.3 [2 vulnerabilities found]                                                                            
  -> Vuln ID 73889: CVE-2024-49767, CVSS Severity HIGH                                                                
     Affected versions of Werkzeug are potentially vulnerable to resource exhaustion when parsing file data in form...
  -> Vuln ID 73969:                                                                                     &nbsp;              
     Affected versions of Werkzeug are vulnerable to Path Traversal (CWE-22) on Windows systems running Python vers...
 Update Werkzeug==3.0.3 to Werkzeug==3.0.6 to fix 2 vulnerabilities                                                   
 Versions of Werkzeug with no known vulnerabilities: 3.1.3, 3.1.2, 3.1.1, 3.1.0                                       
 Learn more: https://data.safetycli.com/p/pypi/werkzeug/eda/?from=3.0.3&to=3.0.6                                      
&nbsp;
✅ venv/lib/python3.13/site-packages/pandas/pyproject.toml: No issues found.
&nbsp;
✅ pyproject.toml: No issues found.
&nbsp;
✅ show-recommendations/venv/lib/python3.12/site-packages/pandas/pyproject.toml: No issues found.
&nbsp;
✅ venv/lib/python3.12/site-packages/pandas/pyproject.toml: No issues found.
&nbsp;
✅ .venv/lib/python3.12/site-packages/pandas/pyproject.toml: No issues found.
&nbsp;
✅ dice-stats/pyproject.toml: No issues found.
&nbsp;
✅ show-recommendations/pyproject.toml: No issues found.
&nbsp;
✅ earthquakes/pyproject.toml: No issues found.
&nbsp;
✅ earthquakes/venv312/pyvenv.cfg: No issues found.
&nbsp;
✅ .venv/pyvenv.cfg: No issues found.
&nbsp;
✅ venv/pyvenv.cfg: No issues found.
&nbsp;
✅ show-recommendations/venv/pyvenv.cfg: No issues found.
&nbsp;
Tested 532 dependencies for security issues using policy fetched from Safety Platform
296 vulnerabilities found, 287 ignored due to policy.
5 fixes suggested, resolving 9 vulnerabilities.
&nbsp;
Project dashboard: https://platform.safetycli.com/codebases/python-samples/findings?branch=main
Elapsed Time: 33 milliseconds
Everything up-to-date
   ```
   Alternately:
   ```
* I'll run a safety check to examine the current directory and identify any potential security concerns or issues.
&nbsp;
Let me check for any potential security issues by examining configuration files and environment variables:
&nbsp;
Let me examine the main environment file for potential security issues:
&nbsp;
* /Users/johndoe/github-wilsonmar/python-samples/python-samples.env
* /Users/johndoe/github-wilsonmar/python-samples/.gitignore
&nbsp;
1. Environment File (python-samples.env):
   * Contains sensitive information such as API keys and passwords, which should not be stored in plain text. Consider using a tool like dotenv to load these variables from a .env file that is not committed to version control.
&nbsp;
2. .gitignore Content:
    * The file excludes various sensitive files and folders, but ensure that any secrets (such as .env files) are properly ignored.
    * .env files are ignored, which is good practice.
&nbsp;
Recommendations:
* Secrets Management: Move sensitive information like API keys and passwords to a .env file and ensure it's included in .gitignore.
&nbsp;
* Access and Permissions: Review file permissions of sensitive files to ensure they're not overly permissive.
&nbsp;
* Security Tools: Consider using tools like git-secrets or truffleHog to scan for keys in your codebase.
&nbsp;
Would you like help taking any specific action based on these findings?
   ```

* To invoke Safety using GitHub:
   ```
   name: Example workflow for Python using Safety Action
&nbsp;
on:
  push:  # Run on every push to any branch
  pull_request:  # Run on new pull requests
&nbsp;
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
      - name: Run Safety CLI to check for vulnerabilities
        uses: pyupio/safety-action@v1
        with:
          api-key: ${{ secrets.SAFETY_API_KEY }}
   ```

<a name="Ruff"></a>

### Ruff

Ruff replaces Black, isort, Flake8, and many Flake8 plugins, reducing your dependency footprint.

Written in Rust and re-implements every Flake8 rule as a first-party feature.

Ruff is much faster than Flake8, especially on large codebases or in CI pipelines.

1. Customize the pyproject.toml (the modern Python config standard) or a dedicated ruff.toml.


<a name="Bandit"></a>

### Bandit

Bandit is an open-source project, freely available and widely used within the Python development community.

1. Navigate to the directory containing .py files to be scanned.
1. Run
   ```
   deactivate
   python3 -m venv bandit-env
   source bandit-env/bin/activate
   ```
1. With "(bandit-env)" appearing in the Terminal prompt, install Bandit as a Python module:
   ```
   pip install bandit
   ```
   Sample response:
   ```
    pip install bandit
    Collecting bandit
    Downloading bandit-1.8.6-py3-none-any.whl.metadata (6.9 kB)
    Collecting PyYAML>=5.3.1 (from bandit)
    Downloading PyYAML-6.0.2-cp313-cp313-macosx_11_0_arm64.whl.metadata (2.1 kB)
    Collecting stevedore>=1.20.0 (from bandit)
    Downloading stevedore-5.4.1-py3-none-any.whl.metadata (2.3 kB)
    Collecting rich (from bandit)
    Downloading rich-14.0.0-py3-none-any.whl.metadata (18 kB)
    Collecting pbr>=2.0.0 (from stevedore>=1.20.0->bandit)
    Downloading pbr-6.1.1-py2.py3-none-any.whl.metadata (3.4 kB)
    Collecting markdown-it-py>=2.2.0 (from rich->bandit)
    Downloading markdown_it_py-3.0.0-py3-none-any.whl.metadata (6.9 kB)
    Collecting pygments<3.0.0,>=2.13.0 (from rich->bandit)
    Downloading pygments-2.19.2-py3-none-any.whl.metadata (2.5 kB)
    Collecting mdurl~=0.1 (from markdown-it-py>=2.2.0->rich->bandit)
    Downloading mdurl-0.1.2-py3-none-any.whl.metadata (1.6 kB)
    Collecting setuptools (from pbr>=2.0.0->stevedore>=1.20.0->bandit)
    Downloading setuptools-80.9.0-py3-none-any.whl.metadata (6.6 kB)
    Downloading bandit-1.8.6-py3-none-any.whl (133 kB)
    Downloading PyYAML-6.0.2-cp313-cp313-macosx_11_0_arm64.whl (171 kB)
    Downloading stevedore-5.4.1-py3-none-any.whl (49 kB)
    Downloading rich-14.0.0-py3-none-any.whl (243 kB)
    Downloading markdown_it_py-3.0.0-py3-none-any.whl (87 kB)
    Downloading pbr-6.1.1-py2.py3-none-any.whl (108 kB)
    Downloading pygments-2.19.2-py3-none-any.whl (1.2 MB)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.2/1.2 MB 4.8 MB/s eta 0:00:00
    Downloading mdurl-0.1.2-py3-none-any.whl (10.0 kB)
    Downloading setuptools-80.9.0-py3-none-any.whl (1.2 MB)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.2/1.2 MB 5.7 MB/s eta 0:00:00
    Installing collected packages: setuptools, PyYAML, pygments, mdurl, pbr, markdown-it-py, stevedore, rich, bandit
    Successfully installed PyYAML-6.0.2 bandit-1.8.6 markdown-it-py-3.0.0 mdurl-0.1.2 pbr-6.1.1 pygments-2.19.2 rich-14.0.0 setuptools-80.9.0 stevedore-5.4.1

    [notice] A new release of pip is available: 25.0.1 -> 25.1.1
    [notice] To update, run: pip install --upgrade pip
    ```
1. Within a Terminal app, run all files in the current folder:
   ```
   bandit -r .
   ```
1. Remove the folder created:
   ```
   deactivate
   rm -rf bandit-env
   ```

1. PROTIP: Bandit can identify many concerns, each of which needs attention even though some of them can be "false positives" which do not really need fixing.

1. PROTIP: Specific concerns can be skipped by typing their key in the program code.


https://bandit.readthedocs.io/en/latest/

It operates by parsing Python source code into an Abstract Syntax Tree (AST) and then applying a set of predefined security checks against the nodes within that tree.

Plug-ins can be added to add testing:

https://bandit.readthedocs.io/en/latest/plugins/index.html

* B1xx - misc. tests
   * Issue: [B102:exec_used] Use of exec detected.
   * Issue: [B101:assert_used] Use of assert detected. The enclosed code will be removed when compiling to optimised byte code.
   * Issue: [B110:try_except_pass] Try, Except, Pass detected.

* B2xx - application/framework misconfiguration
* B3xx - blacklists (calls)
* B4xx - blacklists (imports)
   * Issue: [B404:blacklist] Consider possible security implications associated with the subprocess module.
* B5xx - weak cryptography
   * Issue: [B324:hashlib] Use of weak SHA1 hash for security. Consider usedforsecurity=False to <tt>sha1(data).hexdigest()</tt> and <tt>hashlib.sha1()</tt>
* B6xx - injection vulnerabilities
   * Issue: [B603:subprocess_without_shell_equals_true] subprocess call - check for execution of untrusted input.
* B7xx - XSS (cross-Site Scripting)

Upon completion of a scan, Bandit generates a report detailing any identified security issues, often including severity levels to help prioritize remediation efforts.

Examples of issues:

PROTIP: Code within the <tt>site-packages</tt> folder need to be updated by authors of the package (such as werkzeug).


<a name="Snyk"></a>

### Snyk

Synk offers "all-in-one" scanner in a free edition and a more feature-rich licensed edition.

### Akido

Akido offers "all-in-one" scanner in a free edition and a more feature-rich licensed edition.

<hr />

<hr />

<a name="LocalGit"></a>

## B. Local Pre-Commit Git Hooks

To run scans locally before code can pollute GitHub used by others:

In a Terminal app:
1. Install Git
1. Navigate to your repo’s <tt>.git/hooks/</tt> directory created by Git when it initiates the repo. It contains several files with extension ".sample":
   ```
   cd .git/hooks
   ```
1. Create a file named <tt>pre-commit</tt> (without file extension).
   ```
   code pre-commit
   ```
1. Edit the file to include commands for <a href="#Black">Black</a> and <a href="#Flake8">Flake8</a> to "lint" code for violations of Python coding style conventions.
   ```
   #!/usr/bin/env bash
   set -eo pipefail
   # Install the latest: 
   # if ! command -v flake8 >/dev/null; then  # command not found, so:
   brew install black
   brew install flake8

   # Find all staged Python files:
   CHANGED_FILES=$(git diff --name-only --cached --diff-filter=ACMR)
   PY_FILES=$(echo "$CHANGED_FILES" | grep '\.py$' || true)
   if [[ -n "$PY_FILES" ]]; then
      black --check $PY_FILES
      flake8 $PY_FILES
   fi
   if [ $? -ne 0 ]; then
      echo "Bandit found vulnerabilities. Commit aborted."
      exit 1
   fi
   ```
1. Edit the file to include commands for <a href="#Bandit">Bandit</a> to scan code for known issues.
   ```
   brew install bandit
   bandit -r .
   if [ $? -ne 0 ]; then
      echo "Bandit found vulnerabilities. Commit aborted."
      exit 1
   fi
   ```
1. Edit the file to add commands for <a href="#Safety">Safety</a> to scan dependencies for known vulnerabilities.
   ```
   brew install safety
   safety check
   if [ $? -ne 0 ]; then
      echo "Dependency vulnerabilities found. Commit aborted."
      exit 1
   fi
   ```
1. Edit the file to include commands for <a href="#git-secrets">git-secrets</a> to scan files for cryptographic text:
   ```
   ???
   ```
1. Edit the file to include commands for <a href="#Snyk">Snyk</a> to scan both code and dependencies for vulnerabilities:
   ```
   ???
   ```

1. Other commands can be added to the file.
1. Exit the editor.
1. Modify the file permissions to executable ("+x"):
   ```
   chmod +x .git/hooks/pre-commit
   ```
1. Make a git commit to see the scan will run.


<a name="GitHubWorkflow"></a>

## C. GitHub Workflow Run

1. In your repo, create a directory:
   ```
   .github/workflows/
   ```
1. Add to file <tt>.pre-commit-config.yaml</tt>
   ```
   repos:
   - repo: https://github.com/psf/black
      rev: 22.10.0
      hooks:
         - id: black
   ```
1. Alternately, add this <tt>security-scan.yml</tt> file with content like the below to invoke <a href="#Bandit">Bandit (see above)</a>:
   ```
name: Python Vulnerability Scan
on: [push, pull_request]
jobs:
  bandit-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
      - name: Install dependencies
        run: pip install bandit
      - name: Run Bandit scan
        run: bandit -r .
   ```
1. Configure Bandit to skip or include specific tests, as well as define custom checks to address unique security requirements.
   ```
1. To configure for Safety, file:
   ```
    name: Python Dependency Vulnerability Scan
    on: [push, pull_request]
    jobs:
    safety-scan:
        runs-on: ubuntu-latest
        steps:
        - uses: actions/checkout@v2
        - name: Set up Python
            uses: actions/setup-python@v2
        - name: Install dependencies
            run: pip install safety
        - name: Run Safety scan
            run: safety check
   ```
1. Git Commit and Push the workflow file to your repository.

   Every commit or pull request will now trigger an automated vulnerability scan.


3. Real-Life Example
Imagine you’re working on a Python web app. You add a new package to requirements.txt and push your code. With the above setup, GitHub Actions automatically scans your code and dependencies. If a vulnerability is found, the workflow fails, and you get a notification in your pull request, helping you fix issues before merging.
4. Actionable Tips
Start simple: Use Bandit for code and Safety for dependencies.
Automate: Prefer GitHub Actions for team-wide, consistent scanning.
Fail on vulnerabilities: Configure your workflow to fail if issues are found, blocking insecure code from merging.
Review alerts: Regularly check and address alerts in your GitHub Security tab.
Summary Table
Tool	Scans Code	Scans Dependencies	GitHub Actions Support	Pre-Commit Hook Support
Bandit	Yes	No	Yes	Yes
Safety	No	Yes	Yes	Yes
Snyk	Yes	Yes	Yes	Yes
If you need a ready-to-use workflow YAML for your stack, just ask! This setup will help keep your Python projects secure with minimal effort.

<hr />

## D. GitHub workflow

<hr />

<a name="CloudScan"></a>

## E. Cloud Scan

This is setup by the administrator assigning permissions for the cloud scanning service to access the repositories controlled by the administrator.
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1752509155/gitguardian-clouds-1666x828_af1ybs.png"><img align="right" width="300" alt="gitguardian-clouds-1666x828.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1752509155/gitguardian-clouds-1666x828_af1ybs.png"></a>

   * GitHub is used by the vast majority of developers to version text. 
However, there are several other cloud-based services which house code:
   * GitLab offers both cloud and self-hosted options with strong CI/CD integration, issue tracking, project management, and other features adapting open-source tools.
   * Bitbucket - Atlassian's solution with tight Jira integration, supports both Git and Mercurial, good for teams already using Atlassian tools
   * Azure DevOps - Microsoft's platform with repos, pipelines, boards, and artifacts in one suite
   * Google Cloud Source Repositories - Google's managed Git hosting service that integrates with other Google Cloud services

   * AWS CodeCommit - a fully managed Git repository service that integrates seamlessly with other AWS services.
   * AWS CodeStar provides a unified interface for managing your entire development workflow, including repository hosting, though it's also being phased out in favor of newer services:
   * AWS CodeCatalyst - AWS's newer, more comprehensive DevOps platform that includes Git repositories along with project management, CI/CD pipelines, and development environments. It's designed to compete directly with GitHub and similar platforms.

   * SourceForge - As one of the oldest code hosting platforms, is free for open source projects but is now full of adware.
   * GitKraken Glo - From the makers of GitKraken, focuses on visual project management alongside repos
   * Codeberg - Non-profit, privacy-focused platform based in Germany, uses Forgejo software

In a private cloud can be self-Hosted solutions:

   * GitLab Community Edition - Free self-hosted version of GitLab
   * Gitea - Lightweight, fast, and easy to set up
   * Forgejo - Community fork of Gitea with strong governance focus

Specialized Options:

   * Fossil - Distributed version control with built-in wiki, tickets, and web interface
   * Launchpad - Canonical's platform, popular in the Ubuntu/Linux community
   * Savannah - GNU's hosting service for free software projects

   There are also registries which hold container images:
   * Artifactory
   * Quay.io to




<hr />

<sub>{{ page.lastchange }} {{ page.date }}</sub>
