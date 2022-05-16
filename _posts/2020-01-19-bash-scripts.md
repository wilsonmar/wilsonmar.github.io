---
layout: post
title: "Bash scripts (coding)"
excerpt: "This sample Bash script contains multiple features: install, configure, and run (then remove) a web app within Docker on macOS and Linux, with one copy/paste"
tags: [devops, bash, programming]
Categories: Devops
date: "2020-06-27"
file: "bash-scripts"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14612210/373cb4e2-0553-11e6-8a1a-4b5e1dabe181.jpg
  credit: And Beyond
  creditlink: http://www.andbeyond.com/chile/places-to-go/easter-island.htm
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article describes a Bash script that, with a <strong>single command</strong> does all this:

{% include whatever.html %}

   1. Define initial lines to:
      * First line file type <a href="#Shebang">"shebang"</a>
      * Define bash <a href="#ShellCheck">ShellCheck</a> rules that need to be disabled.
      * Echo time, name, version metadata about run
      * <a href="#FileMetadata">Metadata</a> about the script in comments.
      * Capture a <a href="#TimeStart">time stamp</a> to later calculate how long the script runs.
   2. Display a menu if no parameter is specified in the command line
   3. Define variables for use as "feature flags" to control specific features run.
   4. Set variables associated with each parameter flag.
   5. Define <a href="#EchoFunctions">custom functions to echo text to screen</a>
   6. <a href="#OSDetect">Detect the operating system in use</a> to <a href="#silent-apt-get-install">install the install appropriate to the OS</a>.
   7. Upgrade to the <a href="#BashVersions">latest version of bash</a>
   8. Set <a href="#BashTraps">Bash traps</a> to display information if script is interrupted.
   9. Print run Operating environment information and set <a href="#StrictMode">"Strict Mode"</a> based on parameters specified for the run.
   10. Install <a href="#Installers">installers</a> (XCode, HomeBrew, apt-get), depending on operating system
   11. Define shell utility functions, such as <a href="#ShellCheck">ShellCheck</a> and the function to kill process by name, etc.
   12. Install basic utilities: Git, jq
   
       <strong>Run configuration:</strong>

   13. <a href="#GettingSecrets">Get secrets</a> (and other run-time variables) from a clear-text file in $HOME folder or from a crypto program.
   14. Configure project folder location where files are created during the run.
   15. Obtain repository from GitHub.
   16. Reveal secrets stored within <a href="#GitSecret">.gitsecret</a> folder within repo from GitHub (after installing gnupg and git-secret)
   17. Pipenv and Pyenv to install Python and its modules.

       <strong>Connect to cloud (to get secrets):</strong>

   18. Connect to Google Comput Cloud (GCP), if requested, to get secrets
   19. Connect to AWS
   20. Connect to Azure

       <strong>Apps:</strong>
   
   21. Install K8S minikube
   22. Install EKS using eksctl
   23. Read secrets from a configuration file in clear text, encrypted file, Vault API using govaultenv
   24. Use CircleCI
   25. Use Yubikey
   26. Use Hashicorp Vault
   27. Use NodeJs
   28. Run Virtualenv
   29. Configure Pyenv with virtualenv
   30. Use Anaconda
   31. Use GoLang
   32. Use Python
   33. Use Tensorflow
   34. Use Ruby
   35. Setup Eggplant
   
   36. Use Docker
   37. Run within Docker
   38. Update GitHub

       <strong>Clean-Up:</strong>

   39. -C to remove GitHub folder after run
   40. -K to Kill processes after run (to save CPU)
   41. -D to Delete containers and other files after run (to save disk space)
   42. -M to remove Docker iMages downloaded from DockerHub (to save disk space)
   <br /><br />

Each of the above are preceded by "###" comment tags in the script.

I've refined the script over the years to be a "Swiss Army Knife" that enables me to very quickly get stuff done. So it contains most of the coding tricks one would need to use. The script use includes all the above features for apps in NodeJs, Ruby, and Python (Anacodna and Tensorflow, and a program cloned from GitHub) so that we can avoid some of the toil and human error of manually typing commands on each new instance.

If this is too much for you, just cut out the features you don't want, and enjoy the rest.

## Copy and paste invocation for menu

1. Open a Terminal on your Mac or instantiate a Linux machine on VMWare, EC2, or other cloud.

1. Execute the script just to get a short description of the parameters controlling what features are invoked, copy this command into your Clipboard by <strong>triple-clicking</strong> "bash" to turn this command line gray, then press command+C to copy:

   <pre><strong>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/sample.sh)"
   </strong></pre>

   <a name="Args"></a>

   <pre>=========================== 2020-06-28T10:26:41-0600-347 ./sample.sh v0.72
OPTIONS:
   -E            continue (NOT stop) on error
   -v            run -verbose (list space use and each image to console)
   -q           -quiet headings for each step
   -x            set -x to trace command lines
&nbsp;
   -I           -Install jq, brew, docker, docker-compose, etc.
   -U           -Upgrade installed packages
&nbsp;
   -s           -secrets retrieve
   -S "~/.alt.secrets.sh"  -Secrets full file path
   -H           install/use -Hashicorp Vault secret manager
   -m           Setup Vault SSH CA cert
&nbsp;
   -L           use CircleCI
   -aws         -AWS cloud
   -eks         -eks (Elastic Kubernetes Service) in AWS cloud
   -g "abcdef...89" -gcloud API credentials for calls
   -p "cp100"   -project in cloud
&nbsp;
   -d           -delete GitHub and pyenv from previous run
   -c           -clone from GitHub
   -N           -Name of GitHub Repo folder
   -n "John Doe"            GitHub user -name
   -e "john_doe@gmail.com"  GitHub user -email
&nbsp;
   -k           -k install and use Docker
   -k8s         -k8s (Kubernetes) minikube
   -b           -build Docker image
   -dc           use docker-compose.yml file
   -w           -write image to DockerHub
   -r           -restart (Docker) before run
&nbsp;
   -py          run with Pyenv
   -V           to run within VirtualEnv (pipenv is default)
   -tf          -tensorflow
   -A           run with Python -Anaconda
   -y            install Python Flask
&nbsp;
   -i           -install Ruby and Refinery
   -j            install -JavaScript (NodeJs) app with MongoDB
&nbsp;
   -G           -GitHub is the basis for program to run
   -F "abc"     -Folder inside repo
   -f "a9y.py"  -file (program) to run
   -P "-v -x"   -Parameters controlling program called
   -u           -update GitHub
   -a           -actually run server (not dry run)
   -t           setup -test server to run tests
   -o           -open/view app or web page in default browser
&nbsp;
   -K           stop OS processes at end of run (to save CPU)
   -D           -Delete files after run (to save disk space)
   -C           remove -Cloned files after run (to save disk space)
   -M           remove Docker iMages pulled from DockerHub
USAGE EXAMPLE during testing:
./sample.sh -v -W -r -k -a -o -K -D  # WebGoat Docker with Contrast agent
./sample.sh -v -s -eggplant -k -a -K -D  # eggplant use docker-compose of selenium-hub images
./sample.sh -v -S "$HOME/.mck-secrets.sh" -eks -D
./sample.sh -v -S "$HOME/.mck-secrets.sh" -H -m -t    # Use SSH-CA certs with -H Hashicorp Vault -test actual server
./sample.sh -v -g "abcdef...89" -p "cp100-1094"  # Google API call
./sample.sh -v -n -a  # NodeJs app with MongoDB
./sample.sh -v -i -o  # Ruby app
./sample.sh -v -I -U -c -s -y -r -a -AWS   # Python Flask web app in Docker
./sample.sh -v -I -U    -s -H    -t        # Initiate Vault test server
./sample.sh -v          -s -H              #      Run Vault test program
./sample.sh -q          -s -H    -a        # Initiate Vault prod server
./sample.sh -v -I -U -c    -H -G -N "python-samples" -f "a9y-sample.py" -P "-v" -t -AWS -C  # Python sample app using Vault
./sample.sh -v -V -c -T -F "section_2" -f "2-1.ipynb" -K  # Jupyter anaconda Tensorflow in Venv
./sample.sh -v -V -c -L -s    # Use CircLeci based on secrets
./sample.sh -v -D -M -C
./sample.sh -G -v -f "challenge.py" -P "-v"  # to run a program in python-samples
./sample.sh -v -s -H -m -o -t  # Vault SSH keygen
   </pre>


## Edit sample.sh

1. Use a text editor or IDE to open the `sample.sh` file.



   <a name="FileMetadata"></a>

   ### File metadata

   Metadata about the file, such as 




<a name="UtilityFuncs"></a>

## Utility functions

Shell functions are defined near the beginning of the script for use later in the script.

<a target="_blank" href="https://stackoverflow.com/questions/11369522/bash-utility-script-library">
QUESTION</a>: What are good Bash libraries with common functions?
Libraries for bash are not common. 
One is /etc/rc.d/functions on RedHat-based systems.
The file contains functions commonly used in sysV init script.

<a target="_blank" href="https://mywiki.wooledge.org/BashGuide">
NOTE</a>: Bash libraries are scarce is due to limitation of Bash functions. 

<a target="_blank" href="http://mywiki.wooledge.org/BashWeaknesses">
NOTE</a>: Bash's "functions" have several issues:

Code reusability: Bash functions don't return anything; they only produce output streams. Every reasonable method of capturing that stream and either assigning it to a variable or passing it as an argument requires a SubShell, which breaks all assignments to outer scopes. (See also <a target="_blank" href="https://mywiki.wooledge.org/BashFAQ/084">BashFAQ/084</a> for tricks to retrieve results from a function.) Thus, libraries of reusable functions are not feasible, as you can't ask a function to store its results in a variable whose name is passed as an argument (except by performing eval backflips).

Scope: Bash has a simple system of local scope which roughly resembles "dynamic scope" (e.g. Javascript, elisp). Functions see the locals of their callers (like Python's "nonlocal" keyword), but can't access a caller's positional parameters (except through BASH_ARGV if extdebug is enabled). Reusable functions can't be guaranteed free of namespace collisions unless you resort to weird naming rules to make conflicts sufficiently unlikely. This is particularly a problem if implementing functions that expect to be acting upon variable names from frame n-3 which may have been overwritten by your reusable function at n-2. Ksh93 can use the more common lexical scope rules by declaring functions with the "function name { ... }" syntax (Bash can't, but supports this syntax anyway).


## Script run environment 

These commands obtain information about the script's environment:

<pre>HOSTNAME=$( hostname )
PUBLIC_IP=$( curl -s ifconfig.me )
</pre>

PROTIP: The alternative to curl is wget, which follows redirects.

This script code prints information about the script's running environment:

   <pre>      note "Running $0 in $PWD"  # $0 = script being run in Present Wording Directory.
      note "Bash $BASH_VERSION at $LOG_DATETIME"  # built-in variable.
      note "OS_TYPE=$OS_TYPE using $PACKAGE_MANAGER from $DISK_PCT_FREE disk free"
      note "on hostname=$HOSTNAME at PUBLIC_IP=$PUBLIC_IP"
   if [ -f "$OS_DETAILS" ]; then
      note "$OS_DETAILS"
   fi
   </pre>

PROTIP: "$0" within Bash scripts returns the script file name.

PROTIP: "$PWD" returns the "Present Working Directory" (current folder path).

Sample response:

  <pre>   Running ./sample.sh in /Users/wilson_mar/gits/wilsonmar/DevSecOps/bash
  Bash 5.0.11(1)-release at 2020-01-20T00:23:03-0700-1000
  OS_TYPE=macOS using brew from 27% disk free
  on hostname=12345 at PUBLIC_IP=162.142.245.98
  </pre>

`wilson_mar` is my user name on my macOS laptop.

<a name="ShellCheck"></a>

## ShellCheck

<a name="GettingSecrets"></a>

## Getting Initial Secrets

Keeping secrets from being exposed is the bane of developers' existance.

We need to retieve secrets in order to have credentials to access services on the web, such as AWS, Azure, GCP, etc.

Some think that specifying `.gitignore` or keeping a repo as private is enough to keep secrets safe.
But anytime something is on the internet, it can be exposed.

retrieve a <tt>.secrets</tt> file in your user $HOME folder.
Edit the file to contain something like:

<pre># Used by https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/sample.sh
# Explained in https://wilsonmar.github.io/bash-scripts/#KeepingSecrets
GitHub_USER_NAME="John Doe"
GitHub_USER_EMAIL="john_doe@a.com"
</pre>

`-s` specified in run parameters for the script to make use of this file.

If that is not specified, or if the file is not found or variable not found, the script falls back to asking for manual input of the variables every run.

In a forthcoming refactoring, we may add use of Hashicorp Vault, which puts another secret in place of the real secret.

### Copy Sample files

The particular application has sample files which should be copied, then <strong>edited</strong> for use.

   * .env.example to .env
   * docker-compose.override.example.yml to docker-compose.override.yml
   <br /><br />

The script looks for the file name copied by a previous run.

File names on the local machine are specified in the repo's .gitignore file so they don't get pushed into GitHub.


## GitHub and .gitsecret

<a name="GitSecret"></a>

If a <tt>.gitsecret</tt> folder is found in the repo, the script installs gpg and git-secret brew.

TODO: Also detect if <a target="_blank" href="https://www.passwordstore.org/">https://www.passwordstore.org</a> using <tt>brew install pass</tt>.


<a name="Installers"></a>

## Package Manager install

This script installs the packages managers needed for the operating system under use.
brew first requires HomeBrew to be installed (using Ruby).

Read <a target="_blank" href="https://github.com/wilsonmar/mac-setup/blob/master/README.md">this README</a> which provides someone new to Macs specific steps to configure and run scripts to install apps on Macs. So first finish reading that about "shbangs" and grep for Bash shell versions.

On Macs, <a target="_blank" href="https://wilsonmar.github.io/xcode">XCode</a> needs to be installed for utilities needed by the HomeBrew installer.

<a target="_blank" href="https://wilsonmar.github.io/wsl">Windows on Linux</a> can use either a fork of Homebrew (Linuxbrew) or apt-get/yum.
But Linuxbrew installs packages to a unique folder, so that path needs to be added to the search PATH in <strong>~/.bash_profile</strong>.

<tt>brew --prefix</tt> yields <tt>"/usr/local"</tt>


## Ruby Gemfile of versions

The Ruby <strong>Gemfile</strong> specifies the packages mentioned in the import statement within Ruby programs. The latest <strong>version</strong> of each package is specified by default. Or a specific version can be specified.

The <strong>Gemfile.lock</strong> file reflects what Bundler records as the exact versions installed. This way, when the same library/project is loaded on another machine, running bundle install will look at the Gemfile.lock and sinstall the exact same versions, rather than just using the Gemfile and installing the most recent versions. (Running different versions on different machines could lead to broken tests, etc.)


<a name="UseDocker"></a>

## Docker and docker-compose

This script can get you up and running with a DockerHub image, but with the ability to get listings of containers and images without much typing.

This is the case when running <tt>-eggplant</tt>.

`-k` installs and uses Docker and docker-compose. It restarts the Docker daemon if it's already running.
Either way, the Docker daemon is started.

`-a` 

<a name="CleanUp"></a>

## Clean-up

`-D` stops and removes Docker containers still running.

`-M` removes the images pulled from DockerHub.

`-R` removes the cloned app repository.

<hr />

## References

https://www.tutorialspoint.com/unix/unix-file-operators.htm

<a target="_blank" href="https://www.qwiklabs.com/focuses/8715">Qwiklabs.com: Automating AWS Services with Scripting and the AWS CLI</a>

Sander van Vugt (<a target="_blank" href="https://LivingOpenSource.com/">LivingOpenSource.com</a>) <a target="_blank" href="https://github.com/sandervanvugt/cool-bash">
https://github.com/sandervanvugt/cool-bash</a>


<a target="_blank" href="https://github.com/ianmiell/bash-next-steps">
Ian Miell</a>, author of Bash the Hard Way, has a "Bash Next Steps" video course on OReilly which
covers Bash 5 features.


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
