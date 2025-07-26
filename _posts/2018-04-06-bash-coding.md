---
layout: post
date: "2025-07-16"
lastchange: "v013 + read secret :2018-04-06-bash-coding.md"
url: "https://wilsonmar.github.io/bash-coding"
file: "bash-coding"
title: "Bash (script) coding"
excerpt: "Walk though the tricks (Bashisms) used in a script to install, configure, and run many programs on macOS and Linux"
tags: [devops, bash, programming]
Categories: Devops
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14612210/373cb4e2-0553-11e6-8a1a-4b5e1dabe181.jpg
  credit: And Beyond
  creditlink: http://www.andbeyond.com/chile/places-to-go/easter-island.htm
comments: true
created: "2018-04-06"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This page is a deep dive into the <strong>technical ideosycracies</strong> of shell script files.

You need to know this because Apple is switching defaults from Bash ("Bourne again Shell" as in Linux flavors) to Zsh (Z shell), which requires some configuration effort (described below). Some aspects of Bash scripts ("Bashisms") will fail when run in Zsh.

This tutorial picks up from <a target="_blank" href="https://github.com/wilsonmar/mac-setup/blob/master/README.md">this README</a> which provides someone new to Macs specific steps to configure and run scripts to install apps on Macs. So first finish reading that about "shbangs" and grep for Bash shell versions.

An example of a production shell script is
<a target="_blank" href="https://github.com/toniblyx/prowler">
Prowler: AWS CIS Benchmark Tool at https://github.com/toniblyx/prowler</a> for AWS Security Best Practices Assessment, Auditing, Hardening and Forensics Readiness.

NOTE: This page is still actively under construction.


<hr />


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


### Logging to file

The script is designed so the historical record of each run pops up at the end of the script.
This is so you can easily <strong>scroll and search</strong> through the document, something that is difficult on the Console.

What sends statements to a file is this:

   <pre>echo "something" >>$LOGFILE
   </pre>

The file name of the log file contains a date in ISO 8601 format,
so multiple editions of the file can be sorted by date.

The file is put in the user's $HOME folder so that logs don't accumulate unnoticed in an obscure location.

Logs are not sent to the Linux <tt>/var/log</tt> folder because on a Mac its default owner for permissions is root:

   <pre>ls -ld /var/log
drwxr-xr-x  54 root  wheel  1728 Apr 21 05:01 /var/log
   </pre>

The script outputs logs to a file.

This is so that during runs, what appears on the command console are only what is relevant to debugging the current issue.

At the end of the script, the log is shown in an editor to <strong>enable search</strong> through the whole log.


## Sudo and Password

To run a single command using elevated privileges:

   <pre><strong>sudo find ...
   </strong></pre>

CAUTION: we want to avoid using sudo to install packages because that results in sudo having ownership to files, 
which then requires password entry to access.
That's why we install using Homebrew, which installs packages within <tt>/user/local</tt>.

The su command lets you switch to another user, to run multiple commands, without having to logout and then login as that user.
That other user is usually root (superuser) account. So if you don't specify the other user, it's assumed to be root.

   <pre><strong>su -
su -l
su --login
   </strong></pre>

All three su commands above do the same thing -- create a new environment (by running the ~/.bashrc of the other user) which define the PATH and other system variables.

The response is to require you to enter the root password.

CAUTION: If several people know the root passwords, it's not possible to directly trace what a user did after they su'd to the root account. So supply your account password with this:

   <pre><strong>sudo su
   </strong></pre>


To run with elevated privileges, Centrify's dzdo command line program uses role-based access rights for zones stored in Microsoft Active Directory instead of sudo using a sudoers configuration file.

   <pre><strong>dzdo su -
   </strong></pre>

   <pre><strong>dzdo su - lucy
   </strong></pre>




To disable inputting password, add this below line in sudoers file:

   <pre><strong>sudo visudo
yourusername ALL=(root) NOPASSWD: /usr/sbin/installer install
   </strong></pre>

<a target="_blank" href="https://sneakypockets.wordpress.com/2017/07/26/using-installer-choices-xml-to-modify-anyconnect-and-mcafee-deployments/">
NOTE</a>: An XML file can be used to specify inputs.




## GITS_PATH

<a target="_blank" href="https://unix.stackexchange.com/questions/146942/how-can-i-test-if-a-variable-is-empty-or-contains-only-spaces">
NOTE</a> on testing if a variable is blank.

   <pre>if [[ ! -z "${newdir// }" ]]; then  #it's not blank
   </pre>


## File Descriptors

Most services such as databases need more file descriptors than the <tt>2048</tt> default on MacOS. We can see the current limit with this command:

   <pre><strong>ulimit -n</strong></pre>

Use the tee command to concatenate to the bottom of the <tt>/etc/profile</tt> file:

   <pre>'ulimit -n 10032' | sudo tee -a /etc/profile</pre>

A sudo password needs to be provided for this command.

A reboot is necessary for this to take. <a target="_blank" href="http://bencane.com/2013/09/16/understanding-a-little-more-about-etcprofile-and-etcbashrc/">*</a>


## Save backup

See "Reliable Writes" in https://www.greenend.org.uk/rjk/tech/shellmistakes.html

A script overwrites files only after saving a backup copy,
naming the file with a suffix of ".bak" 


## Brew Package Path Linkages

When we run brew install, it adds new packages to a folder under:

   <tt>/usr/local/Cellar/</tt>

For example, running <tt>brew install sonar</tt> creates a new folder:

   <tt>/usr/local/Cellar/sonarqube/7.1</tt>

   (Notice in this case the path contains "sonarqube" rather than "sonar".)

PROTIP: It's best that version numbers not be hard-coded into scripts.

QUESTION: How do we access the folder using a path that doesn't have a version number?

One of the great reasons for using Homebrew is that it automatically creates a symlink from where it installs so that you can execute a command from any folder, such as:

   <tt>sonar console</tt>

Also, when my bash script wants to know if <tt>brew install sonar</tt> has been run already, it runs:

   <tt>command -v sonar</tt>

If it has not be installed, nothing is returned. If it has been installed, the response is a path such as "/usr/local/bin/sonar".

BLAH: However, we cannot visit that path using <tt>ls /usr/local/bin/sonar</tt>:

   <pre>-bash: cd: /usr/local/bin/sonar: Not a directory</pre>

When we execute <tt>brew link sonar</tt>, it reports:

   <pre>Warning: Already linked: /usr/local/Cellar/sonarqube/7.1</pre>

When we look for "sonar" in the file system using this:

   <pre>find / -name sonar 2>/dev/null</pre>

two paths are reported:

   <pre>/usr/local/bin/sonar
   /usr/local/Cellar/sonarqube/7.1/bin/sonar
   </pre>

However, a find for sonarqube yields:

   <pre>/usr/local/opt/sonarqube
    /usr/local/var/homebrew/linked/sonarqube
   </pre>

PROTIP: So we use that URL found in the full path to the conf file to edit.

### MySQL config files

After brew installs mysql, this message appears:

   <pre>A "/etc/mysql/my.cnf" from another install may interfere with a Homebrew-built
server starting up correctly.
   </pre>

There is no folder, but there is folder <tt>/usr/local/etc/my.cnf</tt>.

<a target="_blank" href="https://forums.mysql.com/read.php?11,366143,376017#msg-376017">
NOTE</a>: By default, the OS X installation does not use a my.cnf, and MySQL just uses the default values. To set up your own my.cnf, you could just create a file straight in /etc.

OS X provides example configuration files at /usr/local/mysql/support-files/

BLAH: Thus I do not recommend using MySQL and to avoid installing it.
The same errors are occuring for MariaDB as well.
So let's just use Postgresql instead to avoid wasting time and headache.
Go to another blog for advice on this terrible program.


## No Brew, No problem

## Editors

Apps look to the environment variable EDITOR for the command to use for displaying text.
This is for invoking the Sublime Text editor:

   <pre>
export EDITOR='subl -w'
   </pre>

   "-w" causes the command to not exit until the file is closed.


## Scape web page for URL

Most packages setup their installer for easy installation by creating an entry in Homebrew website.

Some don't do that, such as Gatling. So we have to "scrape" their webpage to obtain the URL that is downloaded when a user manually clicks "DOWNLOAD" on the webpage. An analysis of the page (at gatling.io/download) shows it is one of two URLs which download the bundle.zip file.

   <pre>
DOWNLOAD_URL="gatling-version.html"; wget -q "https://gatling.io/download/" -O $outputFile; cat "$outputFile" | sed -n -e '/&LT;\/header>/,/&LT;\/footer>/ p' | grep "Format:" | sed -n 's/.*href="\([^"]*\).*/\1/p' ; rm -f $outputFile
   </pre>

   The code above (from Wisdom Hambolu) pulls down the page. The grep filters out all but the line containing "Format:" which has a link to "zip bundle".  The sed function extracts out the URL between the "href=".

Alternately, Python programmers have a utility called "Beautiful Soup"
https://medium.freecodecamp.org/how-to-scrape-websites-with-python-and-beautifulsoup-5946935d93fe
installed by pip install BeautifulSoup4

Within the Python program:

<pre>
import urllib2
from bs4 import BeautifulSoup
quote_page = ‘http://www.bloomberg.com/quote/SPX:IND'
page = urllib2.urlopen(quote_page)
soup = BeautifulSoup(page, ‘html.parser’)
name_box = soup.find(‘h1’, attrs={‘class’: ‘name’})
name = name_box.text.strip() # strip() is used to remove starting and trailing
print name
# get the index price
price_box = soup.find(‘div’, attrs={‘class’:’price’})
price = price_box.text
print price
</pre>

Others:
* https://www.joyofdata.de/blog/using-linux-shell-web-scraping/
* http://www.gregreda.com/2013/03/03/web-scraping-101-with-python/
* http://www.analyticsvidhya.com/blog/2015/10/beginner-guide-web-scraping-beautiful-soup-python/
* https://github.com/ContentMine/quickscrape



<a name="GitHubReleases"></a>

## Install from GitHub Releases

Some apps do not have Homebrew but have installers in GitHub. An example is:

   <a target="_blank" href="
   https://github.com/pact-foundation/pact-go/releases">
   https://github.com/pact-foundation/pact-go/releases</a>

Unlike a brew command, which downloads into its own folder no matter what folder you're in,
the destination folder for downloads using curl needs to be specified in the command
or it goes to the current folder.

To download outside Homebrew, right-click the link for "Darwin" to copy for pasting it in a curl command such as:

   <pre>curl "$DOWNLOAD_URL" -o "$GATLING_HOME/gatling.zip"  # 55.3M renamed
 </pre>

   DOWNLOAD_URL="https://github.com/pact-foundation/pact-go/releases/download/v0.0.12/pact-go_darwin_amd64.tar.gz"

The trouble is that 

Alternately, the wget command can be used if it has been installed earlier.

Either way, the "gunzip" file needs to be unzipped and verified.

   <pre>unzip pact-go_darwin_amd64.tar.gz
    </pre>

   1. Unzip the package into a known location, ensuring the pact-go binary is on the PATH, next to the pact folder.
   1. Run pact-go to see what options are available.
   1. Run go get -d github.com/pact-foundation/pact-go to install the source packages


## Process ID list

NOTE: There is a command called "pidof" which can be downloaded, but it's safer to limit potential vulnerabilities. 

Same with the kill and killall commands.

1.  To get information about a process named, for example, "python":

    <pre><strong>ps -ef | grep python | grep -v grep 
    </strong></pre>

    The response is:

    <pre>503 53758   723   0  9:54PM ttys004    0:00.05 /opt/homebrew/Cellar/python@3.10/3.10.9/Frameworks/Python.framework/Versions/3.10/Resources/Python.app/Contents/MacOS/Python
    </pre>

    The "grep -v grep" command eliminates the grep command itself from the response.

1.  To get the ID of a process named, for example, "python" (such as "723") needed to kill that process:

    <pre><strong>ps -ef | grep python | grep -v grep | cut -c 12-17 
    </strong></pre>

    That cut command extracts position 12 thru 17, which contains the process ID and the spaces around it.

2.  To identify and kill the process in one command:
   
    <pre><strong>ps -ef | grep python | grep -v grep | cut -c 12-17 | xargs kill -s 9
    </strong></pre>


## Process start/stop/kill

There are several ways to start processes:

   * Invoke the program's cli command, such as <tt>redis-cli start</tt>
   * Invoke the brew services start command
   * Invoke <tt>launchctl load $HOME/Library/LaunchAgents/homebrew.mxcl.mongodb.plist</tt>
   <br /><br />

Examples to stop processes:

   * redis-cli stop
   * brew services stop command
   * launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist 2>/dev/null
   <br /><br />

The typical caveats from a brew install is, for example:

   <pre>
To have launchd start sonarqube now and restart at login:
  brew services start sonarqube
Or, if you don't want/need a background service you can just run:
  sonar console
   </pre>

During installation, few installers create a Plist file to define a service that MacOS brings up automatically on boot-up. 

The preference is to use an approach which enables orderly saving of what may be in memory. This is preferrable to using a kill command which can be too abrupt.

To kill a process within Terminal stopped while presenting a process, press command+. (period).
But in a script, first obtain the PID:

   <pre><strong>
PID="$(ps -A | grep -m1 '/postgresql' | grep -v "grep" | awk '{print $1}')"
kill $PID
   </strong></pre>

   PROTIP: The "/" in the process name is sometime added if there are several ("child") processes related to the one PID. Bringing that down would bring down the others automatically.
   For example: 

   <pre>
86700   ??  Ss     0:00.00 postgres: checkpointer process     
86701   ??  Ss     0:00.07 postgres: writer process     
86702   ??  Ss     0:00.05 postgres: wal writer process     
86703   ??  Ss     0:00.04 postgres: autovacuum launcher process     
86704   ??  Ss     0:00.05 postgres: stats collector process     
86705   ??  Ss     0:00.00 postgres: bgworker: logical replication launcher     
86698 s000  S      0:00.04 /usr/local/Cellar/postgresql/10.3/bin/postgres -D /usr/local/var/postgres
87259 s001  S+     0:00.00 grep postgres
   </pre>

   PROTIP: The <tt>grep -v "grep"</tt> filters out the grep process itself.
   Killing/stopping the "postgresql" process also stops several "postres:" automatically.



<a name="colors"></a>

## ANSI Color Escape Codes

Bash colors and highlights characters using Escape Codes
https://en.wikipedia.org/wiki/ANSI_escape_code

<pre>NC='\033[0m' # No Color
Black='\033[0;30m'
Black        0;30     Dark Gray     1;30
Red          0;31     Light Red     1;31
Green        0;32     Light Green   1;32
Brown/Orange 0;33     Yellow        1;33
Blue         0;34     Light Blue    1;34
Purple       0;35     Light Purple  1;35
Cyan         0;36     Light Cyan    1;36
Light Gray   0;37     White         1;37
</pre>


<a name="variables"></a>

## Variables

1. Define a variable:

   <pre>MY_VARIABLE="x"
   </pre>

1. Clear out a variable as if it was not defined:

   <pre>unset MY_VARIABLE
   </pre>

1. Prompting for Secrets

   To enter a secret interactively without it showing up on the screen and logs:

   <pre>
   read -s -p "Enter your secret: " SECRET
   echo
   read -s -p "Enter WiFi password: " WIFI_PASS
   echo
   </pre>

1. Test a variable:

   <pre>
   \# PROTIP: -z tests for zero value (empty).  -v is only available on new versions of Bash.
   if [ -z "$MY_ZONE" ]; then  # not empty
      MY_ZONE="us-central1-b"  # set default value.
   fi
   echo "**** MY_ZONE=\"$MY_ZONE\""
   </pre>

1. If Xcode is not installed, exit the program (quit):

   <pre># Require xcode or quit out:
xcode-select -p || exit "XCode must be installed! (use the app store)"
   </pre>

1. Set permissions

   <pre>cd ~
mkdir -p tmp
echo_ok "Setting permissions..."
for dir in "/usr/local /usr/local/bin /usr/local/include /usr/local/lib /usr/local/share"; do
	sudo chgrp admin $dir
	sudo chmod g+w $dir
done
   </pre>   

1. Make sure Homebrew is installed:

   <pre>
   # homebrew
   export HOMEBREW_CASK_OPTS="--appdir=/Applications"
   if hash brew &> /dev/null; then
      echo_ok "Homebrew already installed"
   else
      echo_warn "Installing homebrew..."
      ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   fi
   </pre>   

1. The meanjs sample app requires MongoDB to be running, so this code makes that so
   by concatenating a control keyword text to a variable:

   <pre>
   if echo "$TRYOUT_KEEP" | grep -q "mongodb"; then
      echo "mongodb already in string";
   else
      echo "$TRYOUT_KEEP,mongodb";  # add to string
   fi
   if echo "$TRYOUT" | grep -q "mongodb"; then
      echo "mongodb already in string";
   else
      echo "$TRYOUT,mongodb";  # add to string
   fi
   MONGODB_INSTALL
   </pre>   

   Before calling MONGO_INSTALL, we mark the strings that brings up the MongoDB service
   and keeps it running rather than shutting it down (the default action).

1. Retrieve a password stored in AWS Secrets Manager:

   <pre>
   DB_PASSWORD=$(aws secretsmanager get-secret-value --secret-id db-creds --query SecretString --output text | \
   python3 -c 'import json,sys; print(json.load(sys.stdin)["password"])')
   </pre>

<hr />

## Multiple terminals

When a service is started by a shell script within a terminal, no additional commands can be entered while the service runs.

So additional terminal sessions are needed to invoke the client or other services.

The options to do that depend on the operating system.

On Mac, the "open" command is unique to Macs.

   <pre>open -a Terminal.app crazy.sh
   </pre>

   * See https://stackoverflow.com/questions/19440007/mac-gnome-terminal-equivalent-for-shell-script

To make the terminal stay when the command exits:

   In xterm, there is a -hold flag.


In Fedora:

   gnome-terminal -e command

   * https://help.gnome.org/users/gnome-terminal/stable/
   
   * See https://askubuntu.com/questions/46627/how-can-i-make-a-script-that-opens-terminal-windows-and-executes-commands-in-the

   * https://askubuntu.com/questions/484993/run-command-on-anothernew-terminal-window

   * https://stackoverflow.com/questions/42444615/how-to-write-a-shell-script-to-open-four-terminals-and-execute-a-command-in-each

   In gnome-terminal, go to Edit -> Profile Preferences -> Title. Click the Command tab. Select Hold the terminal from the drop-down menu labelled When command exits. You should create a new profile for that and execute with

   gnome-terminal --window-with-profile=NAMEOFTHEPROFILE -e command

Alternately:

   konsole -e command

   In konsole there is a --noclose flag.


Pretty much

   terminal -e command



<a name="EclipsePlugins"></a>

## Eclips IDE plug-ins

http://download.eclipse.org/releases/juno

Within Eclipse IDE, get a list of plugins at Help -> Install New Software -> Select a repo -> select a plugin -> go to More -> General Information -> Identifier

   <pre>eclipse -application org.eclipse.equinox.p2.director \
-destination d:/eclipse/ \
-profile SDKProfile  \
-clean -purgeHistory  \
-noSplash \
-repository http://download.eclipse.org/releases/juno/ \
-installIU org.eclipse.cdt.feature.group, \
   org.eclipse.egit.feature.group
   </pre>

   "Equinox" is the runtime environment of Eclipse, which is the <a target="_blank" href="http://www.vogella.de/articles/OSGi/article.html">reference implementation of OSGI</a>.
   Thus, Eclipse plugins are architectually the same as bundles in OSGI.

   Notice that there are different versions of Eclipse repositories, such as "juno".

   PROTIP: Although one can install several at once, do it one at a time to see if you can actually use each one.
   Some of them:

   <pre>
   org.eclipse.cdt.feature.group, \
   org.eclipse.egit.feature.group, \
   org.eclipse.cdt.sdk.feature.group, \
   org.eclipse.linuxtools.cdt.libhover.feature.group, \
   org.eclipse.wst.xml_ui.feature.feature.group, \
   org.eclipse.wst.web_ui.feature.feature.group, \
   org.eclipse.wst.jsdt.feature.feature.group, \
   org.eclipse.php.sdk.feature.group, \
   org.eclipse.rap.tooling.feature.group, \
   org.eclipse.linuxtools.cdt.libhover.devhelp.feature.feature.group, \
   org.eclipse.linuxtools.valgrind.feature.group, \
   </pre>

   <a target="_blank" href="https://stackoverflow.com/questions/2692048/what-are-the-differences-between-plug-ins-features-and-products-in-eclipse-rcp">NOTE</a>:
   A feature group is a list of plugins and other features which can be understood as a logical separate project unit
   for the updates manager and for the build process.



## Testing

https://medium.com/wemake-services/testing-bash-applications-85512e7fe2de

https://github.com/sstephenson/bats


<a name="JAVA_TOOLS"></a>

## Java tools via Maven, Ant

Apps added by specifying in JAVA_TOOLS are GUI apps.

Most other Java dependencies are specified by manually added in each custom app's <strong>pom.xml</strong> file
to specify what Maven downloads from the Maven Central online repository of installers at

   <a target="_blank" href="
   http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.dbunit%22">
   http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.dbunit%22</a>

Popular in the Maven Repository are:

   * <strong>yarn</strong> for code generation. JHipster uses it as an integrated tool in Java Spring development.
   * <strong>DbUnit</strong> extends the JUnit TestCase class to put databases into a known state between test runs. Written by Manuel Laflamme, DbUnit is added in the Maven pom.xml (or Ant) for download from Maven Central. See http://dbunit.wikidot.com/
   * <strong>mockito</strong> enables calls to be mocked as if they have been creted.
   Insert file java-mockito-maven.xml as a dependency to maven pom.xml
   See https://www.youtube.com/watch?v=GKUlQMrbtHE - May 28, 2016
   and https://zeroturnaround.com/rebellabs/rebel-labs-report-go-away-bugs-keeping-your-code-safe-with-junit-testng-and-mockito/9/

   * <strong>TestNG</strong> 
   See http://testng.org/doc/download.html
   and https://docs.mendix.com/howto/testing/create-automated-tests-with-testng
   
   When using Gradle, insert file java-testng-gradle as a dependency to gradle working within Eclipse plug-in
   Build from source git://github.com/cbeust/testng.git using ./build-with-gradle
   
TODO: The Python edition of this will insert specs such as this in pom.xml files.   


<a name="SilentInstall"></a>

## Pkg silent install

Although Microsoft's DotNet Core for Mac has a brew formula for the CLI,
its SDK is installer is only available using a Pkg. 

So we use a command for installing that silently:

   <pre>
echo "$SUDO_PASS" | sudo installer -store -verbose -verboseR -allowUntrusted -pkg "$DOTNET_PROJ/$PKG" -target /
   </pre>

   The -target value of / is not a path but a device listed by the df command.

There is also the platypus or pkginastall libraries. 

<a name="ExtractWeb"></a>

## Extract version from webpage

To automate "Download .NET SDK" for Mac from page https://www.microsoft.com/net/learn/get-started/macos#install

<pre>curl -s https://www.microsoft.com/net/learn/get-started/macos#macos </pre>
extracts the entire page.

<pre>grep -B1 "Download .NET SDK"</pre> obtains one line before the text "Download .NET SDK", which is the two lines:

   <pre>
&LT;a onclick="recordDownload('.NET Core', 'dotnet-sdk-2.1.105-macos-x64-getstarted-installer')"
href="https://download.microsoft.com/download/2/E/C/2EC018A0-A0FC-40A2-849D-AA692F68349E/dotnet-sdk-2.1.105-osx-gs-x64.pkg"
class="btn btn-primary">Download .NET SDK&LT;/a>
   </pre>

<pre>grep href</pre> filters just the lines with href.

<pre>grep -Eo "(http|https)://[a-zA-Z0-9./?=_-]*"</pre> specifies Extended functionality using the Regular Expression
to obtain the URLs (one URL for .exe and one URL for .pkg).

<pre>grep -E "*.pkg"</pre> filters the lines to just the one ending with "pkg" file extension (not .exe).

The "basename" command obtains the file name from a file path variable.

<pre>PKG_LINK=$(curl -s https://www.microsoft.com/net/learn/get-started/macos#macos | grep -B1 "Download .NET SDK" | grep href | grep -Eo "(http|https)://[a-zA-Z0-9./?=_-]*" | grep -E ".pkg")</pre>


## cd / pushd / popd / pwd

To temporarily push into a folder then pop back up to the original folder:

<pre>echo $PWD
pushd   # remembers a directory stack.
pwd   # displays the present workding directory (folder).
popd   # returns to the previous directory.
</pre>

NOTE: Command `pwd` obtains its value from the variable $PWD which the operating system maintains.


<a name="return255"></a>

## return numbers to 255

<a target="_blank" href="https://unix.stackexchange.com/questions/408543/how-can-a-bash-function-return-multiple-values">PROTIP: CAUTION:</a>
bash's return can only return numbers, and only integers between 0 and 255.

If you have large numbers, put it in a global variable or return a pre-agreed value.

For a shell that can return anything (lists of things), consider es:

<pre>es -c "fn f {return (a 'b c' d \$*)}; printf '%s\n' <={f x y}"
a
b c
d
x
y
</pre>


<a name="JenkinsStart"></a>

## Jenkins server

To start the Jenkins server to a specified port:

    jenkins --httpPort=$JENKINS_PORT  &

   The "&" puts the process in the background so that the script can continue running.

   The response is a bunch of lines ending with
   "INFO: Jenkins is fully up and running".

Several other methods (which don't work now) are presented on the internet:

   * <tt>sudo service jenkins start</tt>

   * <a target="_blank" href="https://three1415.wordpress.com/2014/12/29/changing-jenkins-port-on-mac-os-x/">
   This blog, on Dec 29, 2014</a> recommends

   <pre>sudo defaults write /Library/Preferences/org.jenkins-ci httpPort "$JENKINS_PORT"
   sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist
   sudo launchctl load /Library/LaunchDaemons/org.jenkins-ci.plist
   </pre>


<a name="JenkinsJava"></a>

The command "jenkins" above is actually a bash script that invokes Java:

   <pre>#!/bin/bash
   JAVA_HOME="$(/usr/libexec/java_home --version 1.8)" \
   exec java  -jar /usr/local/Cellar/jenkins/2.113/libexec/jenkins.war "$@"
   </pre>

The code within "$(...)" is run to obtain the value. In this case, it's:

    /Library/Java/JavaVirtualMachines/jdk1.8.0_162.jdk/Contents/Home

   The link above is the folder where MacOS keeps the Java SDK.
   Java executables (java, javac, etc.) are in the bin folder below that location.

The path to jenkins.war and jenkins-cli.war executable files are physcally at:

    ls /usr/local/opt/jenkins/libexec


<a name="Jenkins"></a>

### Mac Plist file for Jenkins

Instead of specifying the port in the command, change the configuration file.

On MacOS, services are defined by <strong>plist</strong> files containing XML, 
such as this for Jenkins server:

   <pre>
&LT;?xml version="1.0" encoding="UTF-8"?>
&LT;!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
&LT;plist version="1.0">
  &LT;dict>
    &LT;key>Label&LT;/key>
    &LT;string>homebrew.mxcl.jenkins&LT;/string>
    &LT;key>ProgramArguments&LT;/key>
    &LT;array>
      &LT;string>/usr/libexec/java_home&LT;/string>
      &LT;string>-v&LT;/string>
      &LT;string>1.8&LT;/string>
      &LT;string>--exec&LT;/string>
      &LT;string>java&LT;/string>
      &LT;string>-Dmail.smtp.starttls.enable=true&LT;/string>
      &LT;string>-jar&LT;/string>
      &LT;string>/usr/local/opt/jenkins/libexec/jenkins.war&LT;/string>
      &LT;string>--httpListenAddress=127.0.0.1&LT;/string>
      &LT;string>--httpPort=8080&LT;/string>
    &LT;/array>
    &LT;key>RunAtLoad&LT;/key>
    &LT;true/>
  &LT;/dict>
&LT;/plist>
   </pre>

The "1.8" is the version of Java, <a href="#JenkinsJava"> described below</a>.

The "httpPort=8080" default is customized using this variable in secrets.sh:

      JENKINS_PORT="8082"  # default 8080

The above is file <tt>homebrew.mxcl.jenkins.plist</tt> within folder 
<tt>/usr/local/opt/jenkins</tt> installed by brew.
The folder is a symlink created by brew to the physical path where brew installed it:

      /usr/local/Cellar/Jenkins/2.113/homebrew.mxcl.jenkins.plist

The "2.113" means that several versions of Jenkins can be installed side-by-side.
This version number changes over time. So it is captured by command:

    JENKINS_VERSION=$(jenkins --version)  # 2.113

The folder is actually a symlnk which points to the physical folder defined by:
JENKINS_CONF="/usr/local/Cellar/Jenkins/$JENKINS_VERSION/homebrew.mxcl.jenkins.plist"

The path is defined in a variable so simplify the sed command to make the change:

    sed -i "s/httpPort=8080/httpPort=$JENKINS_PORT/g" $JENKINS_CONF
        # --httpPort=8080 is default.


<a name="JenkinsFirstTime"></a>

### Jenkins GUI in browser

The command to view the server in the default internet browser (such as Safari, Chrome, etc.) is:

   <pre>open "http://localhost:$JENKINS_PORT"</pre>

   It's "http" and not "https" because a certificate has not been established yet.

When executed the first time, Jenkins displays this screen:


However, we don't want to open it from the command line script, but from a GUI automation script.

<a name="JenkinsGUIAuto"></a>

### Jenkins GUI automation

The script invokes a GUI automation script that opens the file mentioned on the web page above:

   <pre>/Users/wilsonmar/.jenkins/secrets/initialAdminPassword</pre>

   "/Users/wilsonmar" is represented by the environment variable named $HOME or ~ symbol,
   which would be different for you, with your own MacOS account name.
   Thus, the generic coding is:

   <pre>JENKINS_SECRET=$(<$HOME/.jenkins/secrets/initialAdminPassword)</pre>

The file (and now $JENKINS_SECRET) contains a string in clear-text like "851ed535fd3249ab95a274d23242655c".

We then call a GUI automation script to get that string to paste it in the box labeled "Administrator Password"
based on the id "security-token" defined in this HTML:

   <pre>&LT;input id="security-token" class="form-control" type="password" name="j_password">
   </pre>

   This was determined by obtaining the outer HTML from Chrome Developer Tools.

The call is:

   <pre>python tests/jenkins_secret_chrome.py  chrome  $JENKINS_PORT  $JENKINS_SECRET
   </pre>

We use Selenium Python because it reads and writes system environment variables.

Use of Selenium and Python this way requires them to be installed before Jenkins and other web servers.


<a name="JenkinsShutdown"></a>

### Jenkins shutdown (kill)

To shut down Jenkins, 

   <pre>PID="ps -A | grep -m1 'jenkins' | awk '{print $1}'"
   fancy_echo "Shutting downn jenkins $PID ..."
   kill $PID</pre>

The above is the automated approach to the manual on recommended by many blogs on the internet:

   Some say in Finder look for Applications -> Utilities -> Activity Monitor
   
   Others say use command:

   <pre>ps -el | grep jenkins</pre>

   Two lines would appear. One is the bash command to do the ps command. 
   
   The PID desired is the one that lists the path used to invoke Jenkins, 
   <a href="#JenkinsJava">described above</a>:

   <pre>/usr/bin/java -jar /usr/local/Cellar/jenkins/2.113/libexec/jenkins.war</pre>

   <pre>kill <em>2134</em></pre>

   That is the equivalent of Windows command "taskkill /F /PID XXXX"

   There is also:

   <pre>sudo service jenkins stop</pre>

Either way, the response expected is:

   <pre>INFO: JVM is terminating. Shutting down Winstone</pre>


<a name="PythonGUI"></a>

## Python GUI Automation

If the title is not found an error message like this appears on the console:

   <pre>
  File "tests/jenkins_secret_chrome.py", line 30, in &LT;module>
    assert "Jenkins [Jenkins]" in driver.title  # bail out if not found.
AssertionError
   </pre>


<a name="DelayToView"></a>

### Delay to view

Some put in a 5 second delay:

   <pre>time.sleep(5)</pre>

Use of this feature requires a library to be specified at the top of the file:

   <pre>import sys</pre>


<a name="ScreenShot"></a>

### Screen shot picture

Some also take a photo to "prove" that the result was achieved:

   <pre>driver.save_screenshot('jenkins_secret_chrome.py' +utc_offset_sec+ '.png')</pre>

We put the name of the script file in the picture name to trace back to its origin.
We put a time stamp in ISO 8601 format so that several png files sort by date.

utc_offset_sec = time.altzone if time.localtime().tm_isdst else time.timezone
datetime.datetime.now().replace(tzinfo=datetime.timezone(offset=utc_offset_sec)).isoformat()

The long explanation is https://docs.python.org/2/library/datetime.html


<a name="EndOfScript"></a>

### End of script

<a target="_blank" href="https://stackoverflow.com/questions/15067107/difference-between-webdriver-dispose-close-and-quit">
NOTE</a>:

   * webDriver.Close() - Close the browser window that currently has focus
   * webDriver.Quit() - Calls Dispose()
   * webDriver.Dispose() Closes all browser windows and safely ends the session

driver.quit() means that someone watching the script execute would only see the web app's screen for a split second. 

   We prefer to use id rather than name fields because the HTML standard states that id's are 
   supposed to be unique in each web page.

<hr />

<a name="Groovy"></a>

## Groovy

Other similar scripts (listed in "References" below) run

http://groovy-lang.org/install.html



<a name="FONTS"></a>

## Scape for Fonts in GitHub
 
Some developers have not put their stuff from GitHub into Homebrew. So we need to read (scrape) the website and see what is listed, then grab the text and URL to download.

Such is the situation with font files at 
https://github.com/adobe-fonts/source-code-pro/releases/tag/variable-fonts
The two files desired downloaded using the curl command are:

* https://github.com/adobe-fonts/source-code-pro/releases/download/variable-fonts/SourceCodeVariable-Italic.ttf
* https://github.com/adobe-fonts/source-code-pro/releases/download/variable-fonts/SourceCodeVariable-Roman.ttf

The files are downloaded into <a target="_blank" href="https://support.apple.com/en-us/HT201722">where MacOS holds fonts available to all users</a>: <tt>/Library/Fonts/</tt>

<a target="_blank" href="http://sourabhbajaj.com/mac-setup/iTerm/README.html">ITerm2 can make use of these font files</a>.


## "User Data" for EC2 instance bootup

Here is code to install, enable, and start Apache web server:

<pre>
#!/bin/sh
yum -y install https
chkconfig httpd on
/etc/init.d/httpd start
</pre>

<a name="SayText"></a>

## Say text out loud

At the bottom of the script is a MacOS command that translates text into voice through the spearker:

say "script ended."  # through speaker

## Configure location to create new files

Because the script command can be pasted onto any folder, files

## Expect for managing manual input

https://www.linuxcloudvps.com/blog/how-to-automate-shell-scripts-with-expect-command/

## References

https://dev.to/awwsmm/101-bash-commands-and-tips-for-beginners-to-experts-30je

## Rockstars

<a target="_blank" href="https://www.amazon.com/dp/1788990552/">
$18 Mastering Linux Shell Scripting: A practical guide to Linux command-line, Bash scripting, and Shell programming, 2nd Edition Paperback</a> 
– April 19, 2018 by Mokhtar Ebrahim and Andrew Mallett 

Andrew Mallett (<a target="_blank" href="https://twitter.com/@theurbanpenguin/">@theurbanpenguin</a>, <a target="_blank" href="https://www.theurbanpenguin.com/">theurbanpenguin.com</a>, <a target="_blank" href="https://www.udemy.com/course/automating-administration-using-ansible-on-centos-8/">Udemy</a>) also created Pluralsight video course
<a target="_blank" href="https://app.pluralsight.com/player?course=creating-shell-scripts-enterprise-linux/">
Creating Shell Scripts in Enterprise Linux</a> July 31, 2019
[2h 10m]

## Books you pay for

<a target="_blank" href="http://www.tldp.org/LDP/abs/html/abs-guide.html">
Advanced Bash-Scripting Guide: An in-depth exploration of the art of shell scripting</a>
2012 by Mendel Cooper

https://www.greenend.org.uk/rjk/tech/shellmistakes.html

http://wiki.bash-hackers.org/commands/builtin/set

http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_02_03.html
Debugging bash scripts

https://www.tldp.org/LDP/abs/html/abs-guide.html

http://www.linuxjournal.com/article/9001  on CPU Load Averages

https://www.digitalocean.com/community/tutorials/how-to-use-bash-s-job-control-to-manage-foreground-and-background-processes

https://github.com/Bash-it/bash-it
a collection of community Bash commands and scripts for Bash 3.2+. (And a shameless ripoff of oh-my-zsh )
Includes autocompletion, themes, aliases, custom functions, a few stolen pieces from Steve Losh, and more.

https://github.com/denysdovhan/bash-handbook

   See https://scriptingosx.com/2017/10/on-the-shebang/

https://jasonjwilliamsny.github.io/wrangling-genomics/01-automating_a_workflow.html

https://www.amazon.com/Introduction-Unix-Shell-Programming-Venkateshmurthy-ebook-dp-B00B5P724G/dp/B00B5P724G/ref=mt_kindle?_encoding=UTF8&me=&qid=

https://dev.to/awwsmm/101-bash-commands-and-tips-for-beginners-to-experts-30je
contrasts commands that are similar (such as which, whereis, whatis)

https://medium.com/the-code-review/top-10-bash-file-system-commands-you-cant-live-without-4cd937bd7df1

https://medium.freecodecamp.org/sh-silence-your-bash-scripts-by-coding-your-own-silent-flag-c7e9f8b668a4

https://www.udemy.com/git-bash/
paid course

Learning the bash Shell, 3rd Edition, by Cameron Newham (O’Reilly)


If you have an O'Reilly subscription: <a target="_blank" href="https://learning.oreilly.com/live-training/courses/bash-shell-scripting-in-4-hours/0636920366386/">Bash Shel Scripting in 4 hours</a> by <a target="_blank" href="https://www.linkedin.com/company/sander-van-vugt/">Sander van Vugt</a>, who has been teaching Linux since 1995 and has written more than 60 books about different Linux related topics. Sander is the author of the best-selling previous editions of the RHCSA Complete Video Course, as well as many other Red Hat related video courses. He is also a regular speaker on major Linux conferences all over the world. 

   1. Writing a shell script with all basic elements (30 minutes), including best practices for writing readable shell scripts.
   2. Working with Variables (40 minutes)
   3. Using Positional Parameters (35 minutes) and how to process their values within the scripts.
   4. Applying Pattern Matching substituion (35 minutes), to shape them exactly as required for specific tasks.
   5. Using looping structures (70 minutes) with common looping structures, such as if, case, for and while.

<hr />

## Logging

https://www.conjur.org/blog/improving-logs-in-bash-scripts/

https://serverfault.com/questions/103501/how-can-i-fully-log-all-bash-scripts-actions

https://github.com/Zordrak/bashlog

https://levelup.gitconnected.com/my-tips-and-tricks-for-bash-scripting-after-writing-hundreds-of-scripts-59987855b20a


## References

https://github.com/dylanaraps/pure-bash-bible

https://github.com/asottile/scratch/wiki/protips
explained in <a target="_blank" href="https://www.youtube.com/watch?v=_wcVyhfyaeE">VIDEO</a>


## More on DevSecOps #

This is one of a series on DevSecOps:

{% include devops_links.html %}
