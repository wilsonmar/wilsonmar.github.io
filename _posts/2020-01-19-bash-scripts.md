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

<a name="BashVersions"></a>

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


## Clear screen

To show responses at the top of the terminal, delete the comment # to enable `clear`  # screen (but not history).

However, a lot of output would scroll past, it is rather useless.
Better to print a long string as a visual marker to differentiate between different runs.

## Set "Strict Mode"

<pre>set -eu pipefail  # pipefail counts as a parameter
# set -x to show commands for specific issues.
# set -e  # to end as soon as a command fails
# set -o nounset
</pre>

Some put them all in one line:
<pre>set -o nounset -o pipefail -o errexit  # "strict mode"</pre>

<tt>pipefail</tt> means that when the program encounters an exit code != 0, the exit code for the pipeline (Bash script) becomes != 0. <a target="_blank" href="https://news.ycombinator.com/item?id=10736584">
E.g.</a> pipefail can be useful to ensure `curl does-not-exist-aaaaaaa.com | wc -c` doesn't exit with exit code 0..!>


## Time start - end = elapsed

To determine elapsed time, START time stamps are captured as soon as the script starts.

When the script ends, END time stamps are captured to calculate the <strong>elapsed</strong> time.

There are two time stamp formats.

<pre>EPOCH_START="$(date -u +%s)"  # such as 1572634619</pre>

captures the number of minutes since the Jan 1, 1970 epoch point in time.

<pre>LOG_DATETIME=$(date +%Y-%m-%dT%H:%M:%S%z)-$((1 + RANDOM % 1000))</pre>

captures the date in a human-readable year-month-day-hour-minutes "ISO 8601" format which also includes the hours and minutes from UTC/GMT, such as "-600" in this sample:

   <tt>sample.sh.2018-04-22T19:26:20-0600-18.log</tt>

An additional RANDOM number is added to ensure uniqueness.

PROTIP: Values stored in variables during a run do not persist.


## Arguments into script

The <tt>args_prompt()</tt> function defines text that is echoed to the console if the script is invoked with no arguments, such as:

<pre><strong>./sample.sh</strong></pre>

Checking for whether parameters were added is done by this code:

<pre>if [ $# -eq 0 ]; then  # display if no parameters are provided:
   args_prompt
fi</pre>

A sample response:

<pre>USAGE EXAMPLE during testing:
   ./sample.sh -h -v -D -U -a -o -d
OPTIONS:
   -h           to display this -help list
   -v           to run -verbose (list space use and each image to console)
   -D           -Download installers
   -U           -Upgrade packages
   -n "John Doe"         GitHub user -name
   -e "john_doe@a.com"   GitHub user -email
   -p ""     Project folder -path
   -R           -Reboot Docker before run
   -a           to -actually run docker-compose
   -o           to -open web page in default browser
   -d           to -delete files after run (to save disk space)
   </pre>

The USAGE example shows the various parameters that need to be added to specific actions taken by the script.

This design ensures the flexibility of the script.

Flags not associated with a text string specification (such as Verbose) default to false and get switched to true when specified.

Text variables are defined first, then exported in a separate step as recommended by Shellcheck.

### Echo/print messages

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
error() {
   printf "${red}${bold}✖ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
warnNotice() {
   printf "${cyan}✖ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
warnError() {
   printf "${red}✖ %s${reset}\n" "$(echo "$@" | sed '/./,$!d')"
}
   </pre>

"h2" is a homage to HTML heading names. 
The other functions correspond to the different levels of verbosity used by the log4j library
(<a target="_blank" href="https://www.npmjs.com/package/aws-code-deploy">in the npm aws-code-deploy repo</a>).

The `printf` command is used instead of `echo` for compatibility with all versions of Bash.

PROTIP: Notice there are icons within text, so the file must be stored in UTF-8 format.

### Text color and other attributes

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

  <pre>Running ./sample.sh in /Users/wilson_mar/gits/wilsonmar/DevSecOps/bash
  Bash 5.0.11(1)-release at 2020-01-20T00:23:03-0700-1000
  OS_TYPE=macOS using brew from 27% disk free
  on hostname=12345 at PUBLIC_IP=162.142.245.98
  </pre>

`wilson_mar` is my user name on my macOS laptop.


## Configure location to create new files

Because the script command can be pasted onto any folder, files

## Homebrew using Ruby

brew requires HomeBrew to be installed.


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
