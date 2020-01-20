---
layout: post
title: "Bash script (coding)"
excerpt: "Walk though the tricks (Bashisms) used in a shell script to install, configure, and run many programs on macOS and Linux"
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

This page is a deep dive into the <strong>technical ideosycracies</strong> of shell script files.

This tutorial picks up from <a target="_blank" href="https://github.com/wilsonmar/mac-setup/blob/master/README.md">this README</a> which provides someone new to Macs specific steps to configure and run scripts to install apps on Macs. So first finish reading that about "shbangs" and grep for Bash shell versions.

NOTE: This page is still actively under construction.

<hr />

## Version of Bash installed
   
1. Be at a macOS Terminal.
1. Test what version of Bash is installed on your Mac by typing this:

   <pre><strong>bash --version
   </strong></pre>

   If you see this, you are using Bash version 3.x, which first released in 2007.

   <pre>GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin16)</pre>

   In its Mojave version Apple still ships macOS due to licensing issues.

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

   Hold the Shift key to press the | (called pipe) key at the upper-right of the keyboard.

   <tt>grep 'bash'</tt> filters out lines that do not contain the word "bash" in the response.


## Copy and paste invocation

I got sick of manually typing commands on each new instance, so I've written bash shell scripts that installs all that is needed to run on new MacOS or Linux terminal with a <strong>single command</strong>.

1. To execute the script yourself, first put it in your Clipboard by <strong>triple-clicking</strong> "bash" in this command, then select copy:

   <pre><strong>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/sample.sh)" -v -U -D -a -o
   </strong></pre>

1. Open a Terminal on your mac, click on it, and keypress command+V to paste.

   The script should install everything needed. It ends with messages like these:

   <pre>worker_1   | [2020-01-17 04:59:42,036: INFO/Beat] beat: Starting...
   </pre>

   If you added "-o" parameter to the command, the script opens the app in your default browser.


1. View my sample install script at:

   <pre><strong><a target="_blank" href="https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/sample.sh">https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/sample.sh</a>
   </strong></pre>

   Each feature of the script is explained in my blog article here about bash scripting.
   

<a name="Style"></a>

## A Question of Style

> The best professionals I know who work as a team try to be more clear rather than be more clever.

The more people who can understand the code and make changes without error,
the more valuable that script is. Elegance is as elegance does.

What I try to <strong>avoid</strong> is:

   * Squeezing several commands into a single line when several lines is more clear. I think it's OK to use more lines.
   * Using complex commands when simple ones do the same
   * Using syntax not recognized by <strong>multiple platforms</strong> (recognized by both Bourne and Bash shells on Mac and Linux)
   <br /><br />


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

   <a target="_blank" href="https://www.admon.org/scripts/new-features-in-bash-4-0/">this blog describes what is improved by version 4</a>, such as <a href="#BashArrays">"associative arrays"</a>.

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


## Clear

To show responses at the top of the terminal, delete the comment # to enable `clear`  # screen (but not history).

However, a lot of output would scroll past, it is rather useless.
Better to print a long string as a visual marker to differentiate between different runs.

### Set "Strict Mode"

<pre>set -eu pipefail  # pipefail counts as a parameter
# set -x to show commands for specific issues.
# set -e  # to end as soon as a command fails
# set -o nounset
</pre>

Some put them all in one line:
<pre>set -o nounset -o pipefail -o errexit  # "strict mode"</pre>

<tt>pipefail</tt> means that when the program encounters an exit code != 0, the exit code for the pipeline (Bash script) becomes != 0. <a target="_blank" href="https://news.ycombinator.com/item?id=10736584">
E.g.</a> pipefail can be useful to ensure `curl does-not-exist-aaaaaaa.com | wc -c` doesn't exit with exit code 0..!>


### Time start and elapsed

To determine elapsed time, time stamps are captured and the start and end of the script.

Near the script's beginning, the MacOS <tt>date</tt> command is used to obtain a starting time stamp:

<pre>TIME_START="$(date -u +%s)"</pre>

This yields a number counting the number of seconds since the Jan 1, 1970 epoch point in time.

The output is like "1524256274", which is the number of seconds since the "epoch" of January 1, 1970.

PROTIP: Values stored in variables during a run do not persist.

At the end of the script, the END timestamp is obtained for use in calculating the 
time elapsed during the script run.

Since there may be relationships among several files, all files changed in the same run have the same timestamp.

The file name of the backup contains a date and time stamp in ISO 8601 format such as:

   <tt>sample.sh.2018-04-22T19:26:20-0600-18.log</tt>

The coding uses the bash date and RANDOM commands (for microseconds):

   <pre>LOG_DATETIME=$(date +%Y-%m-%dT%H:%M:%S%z)-$((1 + RANDOM % 1000))
LOGFILE="$HOME/$THISPGM.$LOG_DATETIME.log"
   </pre>


## Disk space usage

This captures the starting count:

   <pre>FREE_DISKBLOCKS_START="$( df -m . | cut -d' ' -f 6 )"   # e.g. 254781 MB Used
   </pre>

TODO: Within cloud environments such as Amazon AWS EC2 or Azure, this may still be relevant.

`df` is the <a target="_blank" href="https://ss64.com/bash/df.html">disk free</a> command used to obtain the number of <strong>blocks</strong> Used and Available for each storage device mounted.

`-m .` specifies calculation of 1M (megabyte) blocks in the current device:

<pre>Filesystem   1M-blocks   Used Available Capacity iused               ifree %iused  Mounted on
/dev/disk1s1    953904 254781    692250    27% 1479519 9223372036853296288    0%   /
</pre>

`| cut -d' ' -f 6` pipes to <a target="_blank" href="https://ss64.com/bash/cut.html">`cut`</a> using a space to -demarkate the 6th column. The response is an integer such as "254781". Divided by 1024 means 248 Gigabytes.

At the end of the script, another variable is obtained when the END variable is obtained for use in calculating the 
time and disk space used during the script run.

### Disk Space of folder

For the script to remove a folder (as in git-patch), we want to provide a feature flag so that is controllable during a particular run, with variable <tt>REMOVE_REPO_FROM_WHEN_DONE</tt>.

After the folder is supposed to be removed, we want to verify whether it has. There could have been a typo in the command.

If we don't want it removed, we want to know how much disk space is taken. For that we use the command `du -hs` which returns something like  <tt>319M    .</tt> which we pipe thru this:

<pre>FOLDER_DISK_SPACE="$( du -hs | tr -d '\040\011\012\015\056' )"</pre>

The <tt>tr -d</tt> command gets rid of special characters, specifed in <a target="_blank" href="http://donsnotes.com/tech/charsets/ascii.html">ASCII</a> such as \040 for space, \011 for tabs, \012\015 for Line Feed Carriage return, and \056 for period.

The full logic:

<pre>
   if [ "$REMOVE_REPO_FROM_WHEN_DONE" -eq "1" ]; then  # 0=No (default), "1"=Yes
      echo_f "Removing $URL_FROM/$PATCH_FILE as REMOVE_REPO_FROM_WHEN_DONE=$REMOVE_REPO_FROM_WHEN_DONE"
      rm -rf  "$REPO_TO_CONTAINER/$REPO_NAME_FROM"
      if [ -d "$REPO_FROM_CONTAINER/$REPO_NAME_FROM" ]; then
         FOLDER_DISK_SPACE="$(du -hs | tr -d '\040\011\012\015\056')"
         echo_f "WARNING: $FOLDER_DISK_SPACE folder still at $REPO_FROM_CONTAINER/$REPO_NAME_FROM."
         ls -al
      fi
   else
      if [ -d "$REPO_FROM_CONTAINER/$REPO_NAME_FROM" ]; then
         FOLDER_DISK_SPACE="$(du -hs | tr -d '\040\011\012\015\056')"
         echo_f "WARNING: $FOLDER_DISK_SPACE folder remains at $REPO_FROM_CONTAINER/$REPO_NAME_FROM."
      else
         echo_f "Folder no longer at $REPO_FROM_CONTAINER/$REPO_NAME_FROM."
      fi
   fi
</pre>


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



### Text attributes

PROTIP: Code in shell scripts first defines what is referenced in code below it.

The Unix operating system (on which today's Linux distributions are based) "streams" text to the Console. Colors (colours) and other effects are specified by inserting "<strong>toggles</strong>" (attributes) that change the appearing of text following it. A <strong>reset</strong> sets all text to display in the default appearance.

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

   The above approach is recommended because it uses the <a target="_blank" href="https://en.wikipedia.org/wiki/Tput">tput</a> utility which <a target="_blank" href="http://tldp.org/HOWTO/Bash-Prompt-HOWTO/x405.html">works</a> on all *nix systems. Different Linux distributions and platforms recognize different toggle codes. On some platforms the <a target="_blank" href="https://stackoverflow.com/questions/17439482/how-to-make-a-text-blink-in-shell-script">alternative</a> is to define variables containing <a target="_blank" href="http://www.isthe.com/chongo/tech/comp/ansi_escapes.html">ANSI escape</a> numbers referenced in the comments above:

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

   <pre>
function echo_ok { echo -e '\033[1;32m'"$1"'\033[0m'; }
function echo_warn { echo -e '\033[1;33m'"$1"'\033[0m'; }
function echo_error  { echo -e '\033[1;31mERROR: '"$1"'\033[0m'; }
   </pre>


### Echo/print messages

The color and other text attributes described above are specified within functions called to display message text to the console:

   <pre>
h1() {
  printf "\n${bold}${underline}%s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
h2() {
  printf "\n${bold}%s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
info() {
  printf "${dim}➜ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
success() {
  printf "${green}✔ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
error() {
  printf "${red}${bold}✖ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
warnError() {
  printf "${red}✖ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
warnNotice() {
  printf "${blue}✖ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
note() {
  printf "\n${bold}${blue}Note:${reset} ${blue}%s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
   </pre>

"h2" is a homage to HTML heading names.
The other functions correspond to the different levels of verbosity used by the log4j library
(from <a target="_blank" href="https://www.npmjs.com/package/aws-code-deploy">here</a>).

The `printf` command is used instead of `echo` for compatibility with all versions of Bash.


## Operating System

We code shell scripts to operate in macOS and various distributions of Linux
so that developers can focus on processing sequence which are similar on all platforms.

`uname` is supposed to be available on all versions of Linux and macOS.

`Darwin` is the internal name of the current macOS operating system. It is based on the NeXTSTEP operating system Steve Jobs brought into Apple upon his return to Apple in 1998. [<a target="_blank" href="https://en.wikipedia.org/wiki/Darwin_%28operating_system%29">Wikipedia explains its roots in BSD</a>]

`brew` is the command used by the <a href="#Homebrew">Homebrew package manager</a> used by macOS.

But different Linux distributions have their own package manager. 
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
      OS_TYPE="Ubuntu"  # for apt-get
      PACKAGE_MANAGER="apt-get"
   elif [ -f "/etc/os-release" ]; then
      OS_DETAILS=$( cat "/etc/os-release" )  # ID_LIKE="rhel fedora"
      OS_TYPE="Fedora"  # for yum 
      PACKAGE_MANAGER="yum"
   elif [ -f "/etc/redhat-release" ]; then
      OS_DETAILS=$( cat "/etc/redhat-release" )  # ID_LIKE="rhel fedora"
      OS_TYPE="RedHat"  # for yum 
      PACKAGE_MANAGER="yum"
   elif [ -f "/etc/centos-release" ]; then
      OS_TYPE="CentOS"  # for yum
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

## Homebrew



## Operating enviornment information:

Some commands are common 

<pre>HOSTNAME=$( hostname )
PUBLIC_IP=$( curl -s ifconfig.me )
</pre>

The alternative to curl is wget, which follows redirects.

## Print run headings

PROTIP: "$0" within Bash scripts returns the script file name.

Thus this code:

   <pre>      note "From $0 in $PWD"
      note "Bash $BASH_VERSION at $LOG_DATETIME"  # built-in variable.
      note "OS_TYPE=$OS_TYPE on hostname=$HOSTNAME at PUBLIC_IP=$PUBLIC_IP."
   if [ -f "$OS_DETAILS" ]; then
      note "$OS_DETAILS"
   fi
   </pre>


## Configure location to create new files


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
