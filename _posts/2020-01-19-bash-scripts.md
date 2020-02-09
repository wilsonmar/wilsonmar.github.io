---
layout: post
title: "Bash scripts (coding)"
excerpt: "Here is how you can install, configure, and run (then remove) a web app within Docker on macOS and Linux, with one copy/paste"
tags: [devops, bash, programming]
Categories: Devops
date: "2020-01-19"
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

   To avoid the toil and human error of manually typing commands on each new instance, I've written bash shell scripts that install what is needed on a MacOS or Linux terminal. A <strong>single command</strong> installs all that is needed:
   XCode, Bash, git, Ruby, docker, docker-compose.

NOTE: This page is still actively under construction.

## Input password

1. First, be at a Terminal on macOS or console after instantiating a Linux machine on VMWare, EC2, or other cloud.

   The script was tested on Ubuntu as well (running within VMWare Fusion on macOS), 
   but has untested code for CentOS and Red Hat (running within EC2).

1. To avoid being asked to enter your password on every run, add yourself to the <tt>sudoers</tt> file. 

   I do not encourage the disabling of password requests by adding this line to sudoers before executing scripts:

   <pre><strong>echo "$USER ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee -a /etc/sudoers
   </strong></pre>

   ## Copy and paste invocation

1. To execute the script just to get a short description of the parameters controlling what features are invoked, copy this command into your Clipboard by <strong>triple-clicking</strong> "bash" to turn this command line gray, then press command+C to copy:

   <pre><strong>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/sample.sh)"
   </strong></pre>

1. To execute the script to do stuff, copy this command which has 
   <strong>-v -I -U -c -s -r -a -o</strong> at the end of the line to specify <a href="#Args">parameters</a> controlling what features are invoked each run:

   <pre><strong>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/sample.sh)" -v -I -U -c -s -r -a -o
   </strong></pre>

1. Open a Terminal on your mac, click on it, and keypress command+V to paste.

1. Edit the <a href="#Args">parameters</a> controlling features invoked in the run.

   The script ends with a message like this:

   <pre>✔ End of script after 1883 seconds and 677960 bytes of disk space.
   </pre>

   If you added the `-o` parameter to the command, the script opens the sample app in your default browser. It doesn't matter what the app is, but for now, the sample app looks like this:

   ![bash-scripts-landing-899x355](https://user-images.githubusercontent.com/300046/72588109-3e1ca980-38c5-11ea-965e-a935b8e69498.jpg)

   The internals of the above sample Python app is described <a target="_blank" href="https://wilsonmar.github.io/python-api-flask">here</a>.

   TODO: Load a sample NodeJs (JavaScript) app from <a target="_blank" href="https://github.com/wesbos/Learn-Node/tree/master/starter-files">https://github.com/wesbos/Learn-Node/tree/master/starter-files</a>

<hr />

> This article presents a logical ordering of concepts presented in a succint way, as a hands-on narrated scenic tour.

   Each feature of the script is explained below:

1. View the install script at:

   <pre><strong><a target="_blank" href="https://github.com/wilsonmar/DevSecOps/blob/master/bash/sample.sh">https://github.com/wilsonmar/DevSecOps/blob/master/bash/sample.sh</a>
   </strong></pre>

   TODO: The script creates the app locally, the builds a Docker image based on a Dockerfile, runs the app, and if it passes tests, stores it in Dockerhub.


   ## Shebang and comments
   
   Unlike the Windows operating system, which decides what program is used to open a file based on the file name "extension" behind the dot, Linux systems ignores the file name and looks into the file to see the first line.
   
   `#` is a comment in Bash scripts.

   `#!` is called the "Shebang". 
   
   There are several options for a shebang. 
   
   The "Bourne-compliant" shebang for the Bash v3.2 shell installed in folder <tt>/bin</tt> by default on MacOS up to High Sierra. Thus:

   <pre>#!/bin/bash</pre>

   `/` means the folder is from the <strong>root</strong> level, above where the operating system stores home files for specific users.

   However, Bash v4 is installed (for parallel operation) in another folder:
   
   <pre>#!/usr/local/bin/bash</pre>

   <a target="_blank" href="https://www.admon.org/scripts/new-features-in-bash-4-0/">This blog describes what is improved by version 4</a>, such as <a href="#BashArrays">"associative arrays"</a>.

   PROTIP: The recommended shebag now is to use the "env" program to select the appropriate version:

   <pre><strong>#!/usr/bin/env bash</strong></pre>

   `/usr/bin` is the folder that holds the executable program `env`.
   
   `/env` is the name of the program that obtains the appropriate shell based on the next nugget ("bash").

   `bash` is the interpreter. (`python` is used in Python scripts.)
   


<a name="ShellCheck"></a>

## Lint Shellcheck

This comment line disables (excludes) ShellCheck linter check <a target="_blank" href="https://www.shellcheck.net/wiki/SC2034">SC2034</a> in the file:

   <pre>shellcheck disable=SC2001 # See if you can use ${variable//search/replace} instead.
   </pre>

After ShellCheck version 0.4.6, the line can be added anywhere for the next line in the script.

   The entire script can be copied and pasted online for checking at <a target="_blank" href="https://shellcheck.net">shellcheck.net</a>, but that can be a security violation. So we install it for local running:

1. Install from <a target="_blank" href="https://github.com/koalaman/shellcheck">https://github.com/koalaman/shellcheck</a>

   <pre><strong>bash install shellcheck</strong></pre>

1. Define a variable of checks to -exclude from checking:

   <pre><strong>export SHELLCHECK_OPTS="-e SC2001 -e SC2059 -e SC2034 -e SC1090"</strong></pre>

1. To lint a sample bash shell script so that it does not flag referenced variables as an error:

   <pre><strong>shellcheck sample.sh</strong></pre>

   ShellCheck issues no response message is issued if no errors were found.


## Clear screen echo

To show responses at the top of the terminal, delete the comment # to enable `clear`  # screen (but not history).

However, a lot of output would scroll past, so it is rather useless.
Better to print a long string as a visual marker to differentiate between different runs:

<pre>echo "========================= $SCRIPT_VERSION"</pre>

The <tt>SCRIPT_VERSION</tt> is shown at the beginning and the end to detect whether a cached version of the script was used. That happens.


## Time start - end = elapsed

To determine elapsed time, START time stamps are captured as soon as the script starts.

When the script ends, END time stamps are captured to calculate the <strong>elapsed</strong> time.

There are two time stamp formats.

<pre>EPOCH_START="$(date -u +%s)"  # such as 1572634619</pre>

captures the number of minutes since the Jan 1, 1970 epoch point in time.

<pre>LOG_DATETIME=$(date +%Y-%m-%dT%H:%M:%S%z)-$((1 + RANDOM % 1000))</pre>

captures the date in a human-readable year-month-day-hour-minutes "ISO 8601" format which also includes the hours and minutes from UTC/GMT, such as "-600" (for US Central Time) in this sample output:

   <tt>sample.sh.2018-04-22T19:26:20-0600-18</tt>

An additional RANDOM number is added to ensure uniqueness.

PROTIP: Values stored in variables during a run do not persist.

The number of seconds is rounded DOWN, so a run that takes less than a second is measured as <strong>0</strong> seconds.



## Set "Strict Mode"

At the beginning of the script file is:

<pre>set -e  # exits script when a command fails
# set -eu pipefail  # pipefail counts as a parameter
</pre>

Others are there for convenience, to copy and paste to a specific point in the script where commands need to be visible for debugging:

<pre># set -x to show commands for specific issues.
# set -o nounset
</pre>

Some put them all in one line:
<pre>set -o nounset -o pipefail -o errexit  # "strict mode"</pre>

<tt>pipefail</tt> means that when the program encounters an exit code != 0, the exit code for the pipeline (Bash script) becomes != 0. <a target="_blank" href="https://news.ycombinator.com/item?id=10736584"> E.g.</a> pipefail can be useful to ensure `curl does-not-exist-aaaaaaa.com | wc -c` doesn't exit with exit code 0..!>

<a target="_blank" href="https://medium.com/expedia-group-tech/using-bash-for-devops-7046eed1aa63">Some</a> toggle tracing on and off by defining <tt>export DEBUG=TRUE</tt> and add in the code:

<pre>DEBUG="TRUE"
...
if [[ "${DEBUG:-FALSE}" != "FALSE" ]]; then
  set -o xtrace
fi</pre>


## Arguments into script

The <tt>args_prompt()</tt> function defines text that is echoed to the console if the script is invoked with no arguments, such as:

<pre><strong>./sample.sh -h -v -I -U -c -s -r -a -o</strong></pre>

Checking for whether parameters were added is done by this code:

<pre>if [ $# -eq 0 ]; then  # display if no parameters are provided:
   args_prompt
fi</pre>

A sample response:

<a name="Args"></a>

<pre>================================================ v0.52
USAGE EXAMPLE during testing:
./sample.sh -v -E -i -o  # Ruby app
./sample.sh -v -E -I -U -c -s -r -a -w  # Python app
USAGE EXAMPLE after testing:
./sample.sh -v -D -M -C
OPTIONS:
   -E           to set -e to stop on error
   -x           to set sudoers -e to stop on error
   -v           to run -verbose (list space use and each image to console)
   -i           -install Ruby and Refinery
   -I           -Install brew, docker, docker-compose
   -U           -Upgrade packages
   -c           -clone from GitHub
   -s           -set GitHub user info from ~/.secrets.sh in your user home folder
   -n "John Doe"            GitHub user -name
   -e "john_doe@gmail.com"  GitHub user -email
   -P " "    Project folder -path
   -r           start Docker before -run
   -a           to -actually run docker-compose
   -w           to open/view -web page in default browser
   -D           to -Delete files after run (to save disk space)
   -M           to remove Docker iMages pulled from DockerHub
   -C           to remove -Cloned files after run (to save disk space)
   </pre>

The USAGE example shows the various parameters that need to be added to specific actions taken by the script.

This design ensures the flexibility of the script.

Flags not associated with a text string specification (such as Verbose) default to false and get switched to true when specified.

Text variables are defined first, then exported in a separate step as recommended by Shellcheck.

## Text colors in messages

The Unix operating system (on which today's Linux distributions are based) "streams" text to the Console. Colors (colours) and other effects are specified by inserting "<strong>toggles</strong>" (attributes) that change the appearing of text following it. A <strong>reset</strong> sets all text to display in the default appearance.

The color and other text attributes described above are specified within functions called to display message text to the console.

   On macOS the <a target="_blank" href="https://stackoverflow.com/questions/17439482/how-to-make-a-text-blink-in-shell-script">approach</a> is to define variables containing <a target="_blank" href="http://www.isthe.com/chongo/tech/comp/ansi_escapes.html">ANSI escape</a> numbers:

   <pre>
blink="\e[5m"
blue="\e[34m"
bold="\e[1m"
dim="\e[2m"
green="\e[32m"
red="\e[31m"
reset="\e[0m"
underline="\e[4m"
   </pre>

### Alternative tput coding

   Different Linux distributions and platforms recognize different toggle codes. So use the alternate approach using the <a target="_blank" href="https://en.wikipedia.org/wiki/Tput">tput</a> utility which <a target="_blank" href="http://tldp.org/HOWTO/Bash-Prompt-HOWTO/x405.html">works</a> on all *nix systems to display attribute variables.
   
   <pre>
# Set less cryptic color attributes names using tput common to all Linux distributions: 
   blink=$(tput blink)         # 5 as in ANSI 5 in "\e[5m"
   bold=$(tput bold)           # 1
   dim=$(tput dim)             # 2 (faint)
   underline=$(tput smul)      # 4
   end_underline=$(tput rmul)
   reverse=$(tput rev)         # 7
# Foreground colors:
   red=$(tput setaf 1)         # 31
   green=$(tput setaf 2)       # 32
   yellow=$(tput setaf 3)      # 33
   blue=$(tput setaf 4)        # 34
   purple=$(tput setaf 5)      # 35
   cyan=$(tput setaf 6)        # 36
   white=$(tput setaf 7)       # 37
   reset=$(tput setaf 0)       # 39 default
# Background colors:
   b_red=$(tput setb 1)        # 41
   b_green=$(tput setb 2)      # 42
   b_yellow=$(tput setb 3)     # 43
   b_blue=$(tput setb 4)       # 44
   b_purple=$(tput setb 5)     # 45
   b_cyan=$(tput setb 6)       # 46
   b_white=$(tput setb 7)      # 47
   b_reset=$(tput setb 0)      # 49 default
# Reset all to defaults:
   reset=$(tput sgr0)
   </pre>

   BTW To test how the codes, put this in a script:

   <pre>echo "${green}Success! ${dim}dimmed${reset} "
echo "${red}Failure ${bold}bolded${reset}"
echo "${blink}${f_yellow}Caution ${bold}bolded${reset} bad"
echo "${blue}Note${reset} blue on black is annoying"
echo "${underline}${purple}Alert${reset} magenta underlined"
echo "${reverse}${cyan}Info${reset} cyan reversed"
echo "${white}Whatever white${reset} this is"
   </pre>


## Echo/print messages

To format output, this code is used:

   <pre>
h2() {     # heading
   printf "\n${bold}>>> %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
info() {   # output on every run
   printf "${dim}\n➜ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
note() { if [ "${RUN_VERBOSE}" = true ]; then
   printf "${bold}${cyan} ${reset} ${cyan}%s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
   fi
}
success() {
   printf "${green}✔ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
error() {       # &#9747;
   printf "${red}${bold}✖ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
warnNotice() {  # &#9755;
   printf "${cyan}☛ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
warnError() {   # Skull: &#9760;  # Star: &starf; &#9733; U+02606  # Toxic: &#9762;
   printf "${red}☢ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
   </pre>

"h2" is a homage to HTML heading names. 
The other functions correspond to the different levels of verbosity used by the log4j library
(<a target="_blank" href="https://www.npmjs.com/package/aws-code-deploy">in the npm aws-code-deploy repo</a>).

The `printf` command is used instead of `echo` for compatibility with all versions of Bash.

PROTIP: Notice there are HTML/CSS icons within text, so the file must be stored in UTF-8 format.

<img align="right" alt="bash-scripts-171x139.png" src="https://user-images.githubusercontent.com/300046/72717345-129df700-3b31-11ea-877d-dc73677ee8d9.png">
BTW To test <a target="_blank" href="https://www.toptal.com/designers/htmlarrows/symbols/">how the codes look</a>, put this in a script:

   <pre>h2 "Header here"
info "info"
note "note"
success "success!"
error "error"
warning "warning (warnNotice)"
fatal "fatal (warnError)"
   </pre>


## Operating System Detection

We code shell scripts to operate in macOS and various distributions of Linux
so that developers can focus on processing sequence which are similar on all platforms.

`uname` is supposed to be available on all versions of Linux and macOS.

`Darwin` is the internal name of the current macOS operating system. It is based on the NeXTSTEP operating system Steve Jobs brought into Apple upon his return to Apple in 1998. [<a target="_blank" href="https://en.wikipedia.org/wiki/Darwin_%28operating_system%29">Wikipedia explains its roots in BSD</a>]

`brew` is the command used by the <a href="#Homebrew">Homebrew package manager</a> used by macOS.

Different Linux distributions use different file names to store its version information.
And different Linux distributions have their own package manager. 
Thus we need to obtain the PACKAGE_MANAGER used by the script.

<pre># Check what operating system is in use:
   OS_TYPE="$( uname )"
   OS_DETAILS=""  # default blank.
if [ "$(uname)" == "Darwin" ]; then  # it's on a Mac:
      OS_TYPE="macOS"
      PACKAGE_MANAGER="brew"
elif [ "$(uname)" == "Linux" ]; then  # it's on a Mac:
   if command -v lsb_release ; then
      lsb_release -a
      OS_TYPE="Ubuntu"
      PACKAGE_MANAGER="apt-get"

      silent-apt-get-install(){  # "$1" refers to parameter of package to install:
         sudo DEBIAN_FRONTEND=noninteractive apt-get install -qq "$1" < /dev/null > /dev/null
      }
   elif [ -f "/etc/os-release" ]; then
      OS_DETAILS=$( cat "/etc/os-release" )  # ID_LIKE="rhel fedora"
      OS_TYPE="Fedora"
      PACKAGE_MANAGER="yum"
   elif [ -f "/etc/redhat-release" ]; then
      OS_DETAILS=$( cat "/etc/redhat-release" )
      OS_TYPE="RedHat"
      PACKAGE_MANAGER="yum"
   elif [ -f "/etc/centos-release" ]; then
      OS_TYPE="CentOS"
      PACKAGE_MANAGER="yum"
   else
      error "Linux distribution not anticipated. Please update script. Aborting."
      exit 0
   fi
else 
   error "Operating system not anticipated. Please update script. Aborting."
   exit 0
fi
</pre>

<a name="silent-apt-get-install"></a>

## apt-get install function

<tt>apt-get install</tt> commands in this script use a custom function which feeds in the package name to be installed:

   <pre><strong>silent-apt-get-install "git"</strong></pre>

The function is defined where the operating system and package manager is recognized:

   <pre><strong>silent-apt-get-install(){  # "$1" refers to parameter of package to install:
sudo DEBIAN_FRONTEND=noninteractive apt-get install -qq git htop < /dev/null > /dev/null</strong></pre>

<tt>DEBIAN_FRONTEND=noninteractive</tt> gets rid of "(Reading database ... 5%" output.

<tt>-qq</tt> is there to not request manual confirmation messages such as:

   <pre>Need to get 260 MB of archives.
After this operation, 308 MB of additional disk space will be used.
Do you want to continue? [Y/n] Y
   </pre>

The <tt>-qq</tt> parameter combines the effect of the <tt>-y</tt> (yes) and <tt>-q</tt> (quiet) parameter, plus more suppression. 

The output that remains is from <tt>dpkg</tt> which was forked by apt-get. So 
<tt>> /dev/null</tt> pipes the standard output (stdout) to nothing so you don't see them.
However, you'll still see error messages, which go out thru stderr.

<tt>< /dev/null</tt> pipes stdin standard output to nothing.

<a target="_blank" href="https://peteris.rocks/blog/quiet-and-unattended-installation-with-apt-get/"><em>Explained here</em></a>.


<a name="BashVersions"></a>

## Version of Bash installed

Some commands make use of a more recent version of Bash than the operating system may have by default. So the script updates the bash processor if the `-U` flag is specified.
Follow along manually:

1. Be at a macOS Terminal.
1. Test what version of Bash is installed on your Mac by typing this:

   <pre><strong>bash --version
   </strong></pre>

   If you see the below, you are using Bash version 3.x, which macOS first released in 2007.

   <pre>GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin16)</pre>

   In macOS Mojave version, Apple still ships that old thing due to licensing issues.

1. Install the latest version of the Bash shell, using Homebrew:

   <pre><strong>brew install bash
   </strong></pre>

   Bash 4.0 was released in 2009.

   As of this writing, the response is:

   <pre>GNU bash, version 5.0.11(1)-release (x86_64-apple-darwin18.6.0)
Copyright (C) 2019 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
&nbsp;
This is free software; you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
   </pre>

1. If you want to see just the version line, pipe the response to the grep utility built into macOS:

   <pre><strong>bash --version | grep 'bash'
   </strong></pre>

   Hold down the left Shift key to press the \| (called pipe) key at the upper-right of the keyboard.

   <tt>grep 'bash'</tt> filters out lines that do not contain the word "bash" in the response.


## Disk space free capacity

We want to know how much disk space is available at the beginning of the run, and the amount of space taken during the run.

On macOS and other BSD operating systems, the "disk free" command <tt>df -P /</tt> outputs a "standardized" number of 512 byte blocks in the "/" mount:

<pre>Filesystem   512-blocks      Used  Available Capacity  Mounted on
/dev/disk1s1 1953595632 521869880 1417651624    27%    /
</pre>

We use <a target="_blank" href="http://mywiki.wooledge.org/BashFAQ/094">this methodology</a> to obtain the percentage of disk free, which obtains the 12th text item -delimited by a space (which include heading items):

   <pre>DISK_PCT_FREE=$(read -d '' -ra df_arr < <(LC_ALL=C df -P /); echo "${df_arr[11]}" )</pre>

The blocks Available is the 10th text item.

   <pre>FREE_DISKBLOCKS_START=$(read -d '' -ra df_arr < <(LC_ALL=C df -P /); echo "${df_arr[10]}" )</pre>

This uses bash arrays which became available since <a href="#BashVersions">Bash version 4</a>.

NOTE: We don't use "-m" for megabytes or "-k" for kilobytes which result in mesuring small amounts of space used as zero.

This captures the starting count:

   <pre>FREE_DISKBLOCKS_START="$( df . | cut -d' ' -f 6 )"   # e.g. 254781 MB Used
   </pre>

TODO: Within cloud environments such as Amazon AWS EC2 or Azure, this may still be relevant.

`df` is the <a target="_blank" href="https://ss64.com/bash/df.html">disk free</a> command used to obtain the number of <strong>blocks</strong> Used and Available for each storage device mounted.

`.` specifies calculation of the number of 512 byte blocks in the current device:

<pre>Filesystem   512-blocks      Used  Available Capacity iused               ifree %iused  Mounted on
/dev/disk1s1 1953595632 521825264 1417696240    27% 1480293 9223372036853295514    0%   /
</pre>

`| cut -d' ' -f 6` pipes to <a target="_blank" href="https://ss64.com/bash/cut.html">`cut`</a> using a space to -demarkate the 6th column. The response is an integer such as "254781". Divided by 1024 means 248 Gigabytes.

At the end of the script, another variable is obtained when the END variable is obtained for use in calculating the 
time and disk space used during the script run.



## Bash Traps

The Bash trap command catches signals so it can execute some commands when appropriate,
such as <a target="_blank" href="https://www.shellscript.sh/trap.html">
cleaning up temp files before the script finishes</a>, called an
<a target="_blank" href="http://redsymbol.net/articles/bash-exit-traps/">exit trap</a>.

   <pre>
cleanup() {
    err=$?
    echo "Cleaning stuff up..."
    trap '' EXIT INT TERM
    exit $err 
}
sig_cleanup() {
    trap '' EXIT # some shells will call EXIT after the INT handler
    false # sets $?
    cleanup
}
   </pre>

<a target="_blank" href="https://unix.stackexchange.com/questions/57940/trap-int-term-exit-really-necessary">
The above cleanup function</a> is invoked when INT TERM occurs to trigger the function,
at the bottom of the script:

   <pre>trap cleanup EXIT
trap sig_cleanup INT QUIT TERM
   </pre>

This statement in the script...

<pre><strong>trap 'ret=$?; test $ret -ne 0 && printf "failed\n\n" >&2; exit $ret' EXIT
</strong></pre>

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


### Indent 3 spaces

It's an asthetic choice.

<a target="_blank" href="https://google.github.io/styleguide/shell.xml?showone=Use_Local_Variables#Use_Local_Variables">Google's Style Guide</a>
calls for two spaces.

But <strong>three spaces</strong> make the line indent under if align better.
And the if statement is the most common in the script. 


## Script run enviornment 

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


<a name="KeepingSecrets"></a>

## Keeping Secrets

Keeping secrets from being exposed is the bane of developers' existance.

Some think that specifying `.gitignore` or keeping a repo as private is enough to keep secrets safe.
But anytime something is on the internet, it can be exposed.
So my preferred solution is to re-enter the data each time or save a <tt>.secrets</tt> file in your user $HOME folder.
Edit the file to contain something like:

<pre># Used by https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/sample.sh
# Explained in https://wilsonmar.github.io/bash-scripts/#KeepingSecrets
GitHub_USER_NAME="John Doe"
GitHub_USER_EMAIL="john_doe@a.com"
</pre>

Specify `-s` in run parameters for the script to make use of this file.

If the file is not found or variable not found, the script falls back to asking for manual input of the variables.

In a forthcoming refactoring, we may add use of Hashicorp Vault, which puts another secret in place of the real secret.


## Copy Sample files

The particular application has sample files which should be copied, then <strong>edited</strong> for use.

   * .env.example to .env
   * docker-compose.override.example.yml to docker-compose.override.yml
   <br /><br />

The script looks for the file name copied by a previous run.

File names on the local machine are specified in the repo's .gitignore file so they don't get pushed into GitHub.

## Package Manager install

`-I` triggers installation of utilities and packages that the app requires.

This script installs the packages managers needed for the operating system under use.
brew first requires HomeBrew to be installed (using Ruby).

`-U` updates all utilities already installed.

Read <a target="_blank" href="https://github.com/wilsonmar/mac-setup/blob/master/README.md">this README</a> which provides someone new to Macs specific steps to configure and run scripts to install apps on Macs. So first finish reading that about "shbangs" and grep for Bash shell versions.

<a target="_blank" href="https://wilsonmar.github.io/wsl">Windows on Linux</a> can use either a fork of Homebrew (Linuxbrew) or apt-get/yum.
But Linuxbrew installs packages to a unique folder, so that path needs to be added to the search PATH in <strong>~/.bash_profile</strong>.

"brew --prefix" yields "/usr/local".

## Ruby Gemfile of versions

The Ruby <strong>Gemfile</strong> specifies the packages mentioned in the import statement within Ruby programs. The latest <strong>version</strong> of each package is specified by default. Or a specific version can be specified.

The <strong>Gemfile.lock</strong> file reflects what Bundler records as the exact versions installed. This way, when the same library/project is loaded on another machine, running bundle install will look at the Gemfile.lock and sinstall the exact same versions, rather than just using the Gemfile and installing the most recent versions. (Running different versions on different machines could lead to broken tests, etc.)

## Docker and docker-compose

`-R` restarts the Docker daemon if it's already running.
Either way, the Docker daemon is started.

## Clean-up

`-D` stops and removes Docker containers still running.

`-M` removes the images pulled from DockerHub.

`-R` removes the cloned app repository.

<hr />

## References

https://www.tutorialspoint.com/unix/unix-file-operators.htm

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
