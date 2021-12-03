---
layout: post
title: "MacOS (Command-Line) Utilities"
excerpt: "kill, grep, sed, regex, cron, etc. vs. Linux commands"
tags: [apple, mac, utilities]
date: "2018-04-27"
file: "mac-utilities"
image:
# feature: pic Giant-Swiss-Army-Knife-1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622061/afe5f5da-0584-11e6-8140-3278289baef4.jpg
  credit: 
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article compares and contrasts macOS utilites vs. Linux utilities -- the Swiss Army Knife for almost every need.

## Uname = Darwin (BSD)

The command that is common to all Linux/BSD variants is the one that returns the operating system name:

   <pre><strong>uname
   </strong></pre>

   On macOS, the response is "Darwin".

MacOS (Mac OS X) comes with the <strong>BSD</strong> (Berkeley Standard Distribution) version of command line tools which are slightly <strong>different</strong> from the <strong>Linux</strong> version (in Red Hat, Debian, Ubuntu, CoreOS, etc.) even though both are compliant with <a target="_blank" href="http://en.wikipedia.org/wiki/POSIX">POSIX standards</a>.


## apt (Advanced Packaging Tool)

On Debian and its derivatives is the `apt-cache` utility that goes with the `apt-get` package manager (like Homebrew and MacPorts).
They are ported to Mac via  https://github.com/KubaKaszycki/mac-apt

1. Use it to search within Python libraries:

   <pre>apt-cache search python3 | wc -l</pre>

   See https://www.dedoimedo.com/computers/aptitude.html

There is also http://rudix.org/ which is a collection of "the hassle-free way to get Unix programs on OS X".
Its packages include zshell and tig (Git spelled backwards), the Text-Mode Interface for Git.


## System Preferences GUI

macOS provides a GUI to manage system configuration settings. 

1. Mouse to the upper-left corner of the screen and click the Apple icon that appears to choose "System Preferences...". 

   Alternately, you can also open the dialog with this command:

   <pre><strong>open /Applications/System\ Preferences.app</strong></pre>

BTW, instead of typing out the whole line above, you can simply type "prefs" if you use a text editor to add this line in the ~/.bash_profile file:

   <pre>alias prefs='open /Applications/System\ Preferences.app'</pre>

Apple stores its apps in folder "/Applications". The "back-slash" character needs to precede every space character in the name because a space usually separates parts of commands.

BTW There is also a folder at "~/Applications" for user-level apps.

Open a Finder window to view files in both folders.


## System information

In folder "/Applications/Utilities" are several apps which include "System Information.app".

macOS provides a GUI to display detailed information about system Hardware, Software, and Networks. Mouse to the upper-left corner of the screen and <strong>hold down Option</strong> while you click the Apple icon. "System Information..." appears. But you can also open it without the Option key by selecting "About This Mac" then pressing "System Report". 

Instead of examining various Linux config files (/etc/\*elease, /proc/meminfo for memory, /proc/cpuinfo for number of cores), macOS has a "system_profiler" utility presenting many data types.

## You hot?

1. Get CPU thermal data on MacOS

   <pre><strong>sysctl machdep.xcpm.cpu_thermal_level</strong></pre>

   PROTIP: Add this among your keyboard shortcuts in aliases.sh.

### system_profiler

Internally, the display can be output as text using this command:

   <pre><strong>system_profiler SPHardwareDataType</strong></pre>

   PROTIP: Use the command above to obtain your serial number for Apple Support.

"SPHardwareDataType" is one of several DataTypes or items of information listed by:

   <pre>system_profiler -listDataTypes</pre>

   The list output:

   <pre>
SPParallelATADataType
SPUniversalAccessDataType
SPApplicationsDataType
SPAudioDataType
SPBluetoothDataType
SPCameraDataType
SPCardReaderDataType
SPComponentDataType
SPDeveloperToolsDataType
SPDiagnosticsDataType
SPDisabledSoftwareDataType
SPDiscBurningDataType
SPEthernetDataType
SPExtensionsDataType
SPFibreChannelDataType
SPFireWireDataType
SPFirewallDataType
SPFontsDataType
SPFrameworksDataType
SPDisplaysDataType
SPHardwareDataType
SPHardwareRAIDDataType
SPInstallHistoryDataType
SPNetworkLocationDataType
SPLogsDataType
SPManagedClientDataType
SPMemoryDataType
SPNVMeDataType
SPNetworkDataType
SPPCIDataType
SPParallelSCSIDataType
SPPowerDataType
SPPrefPaneDataType
SPPrintersSoftwareDataType
SPPrintersDataType
SPConfigurationProfileDataType
SPRawCameraDataType
SPSASDataType
SPSerialATADataType
SPSPIDataType
SPSmartCardsDataType
SPSoftwareDataType
SPStartupItemDataType
SPStorageDataType
SPSyncServicesDataType
SPThunderboltDataType
SPUSBDataType
SPNetworkVolumeDataType
SPWWANDataType
SPAirPortDataType
SPiBridgeDataType
   </pre>

There is a lot of information, so it takes time to generate output.

PROTIP: Save these files to provide to Support:

   <pre>system_profiler -detailLevel basic > ~/Desktop/system_report.txt</pre>

Instead of "basic", there is also "mini" and "full" scope of output. When providing full scope, output in .spx file extension so that it opens automatically using the GUI:

   <pre>system_profiler -detailLevel full -xml > ~/Desktop/system_report_mini.spx</pre>



## CPU Utilization uptime

<em><strong>Was your Mac rebooted recently?</strong></em>

   <pre><strong>uptime
   </strong></pre>

   The response also shows whether CPU utilization is increasing recently:

   <pre>6:35  up 9 days, 11:56, 7 users, load averages: 2.09 2.24 2.06
   </pre>

   "load averages" numbers are calculations of the average system load over three periods of times: the last one-, five-, and fifteen-minute periods.
   These count the <strong>number of processes</strong> either using or <strong>waiting</strong> for CPU (the ready queue or run queue) increments the load number by 1. 

   In a system with <strong>four CPU cores</strong>, a load average of 3.73 would indicate that there were, on average, 3.73 processes ready to run, and each one could be scheduled into a CPU.

## To identify number of CPU cores

   <pre><strong>sysctl hw.physicalcpu 
   hw.logicalcpu</strong></pre>

   Response:

   <pre>hw.physicalcpu: 6
hw.logicalcpu: 12</pre>


## Memory Statistics

1. To obtain a new reading every 5 seconds, the command on macOS is:

   <pre><strong>vm_stat 5
   </strong></pre>

   The number of most interest is <strong>pageout</strong>, the "3459" in this sample response:

   <pre>
Mach Virtual Memory Statistics: (page size of 4096 bytes)
  free active inac wire   faults     copy zerofill reactive  pageins pageout
 49314  97619 154001 26746 42361341   320895 24148787   145786    50308 3459
 49341  97814 153974 26551     2902       21     1429        0        0 0
    </pre>

   On Linux systems, the "vmstat" command is similar but not identical.

1. To cancel the display, press <strong>control+C</strong>.

1. PROTIP: The memory page size is obtained using <tt>getconf PAGESIZE</tt>, which is "4096".

See mac-diskspace

## Top processes

<em><strong>Is your computer fan loud?</strong></em>

0. To list the top hungry processes consuming the CPU:

   <pre><strong>top
   </strong></pre>

   This refreshes automatically.

0. To cancel the display, press <strong>control+C</strong> keys (which works with any process you want to kill).

0. Alternately, install the htop utility using Homebrew:

   <pre><strong>brew install htop</strong></pre>

   The response includes:

   <pre>/usr/local/Cellar/htop/2.2.0_1: 11 files, 188KB</pre>

0. Invoke it:
   
   <pre><strong>htop</strong></pre>


<a id="Processes"></a>

## Processes

0. So that we can kill it for fun, create a background process (by specifying &) 
   which sleep for 999 seconds:

   <pre><strong>sleep 999 &
   </strong></pre>

0. Get the process identifier:

   <pre><strong>pgrep sleep
   </strong></pre>

0. List background processes:

   <pre><strong>jobs
   </strong></pre>

   <pre>
[1]+  Running                 sleep 999 &
   </pre>

   The + shows the focus.

0. To list all processes with a niceness (NI) column:

   <pre><strong>ps -l
   </strong></pre>

   Expand the terminal window width to avoid line wrapping.

  <pre>
UID   PID  PPID        F CPU PRI NI       SZ    RSS WCHAN     S             ADDR TTY           TIME CMD
501  2752  2749     4006   0  31  0  4320804     44 -      Ss                  0 ttys001    0:00.19 /Users/wilsonmar
   </pre>

   ### Niceness of priority

   Default niceness of zero, but can be -20 to +19.

   PROTIP: A niceness of +19 is a priority of 99, which is lowest.

   <pre><strong>nice -n 5 sleep 1000&
   </strong></pre>

   root permissions are needed to set nice below zero.

0. Reset nicer:

   <pre><strong>renice -n 5 sleep 1000&
   </strong></pre>


   ## Kill

0. To kill a single program by name: 

   <pre><strong>pkill sleep
   </strong></pre>

0. To kill several progams by name: 

   <pre><strong>killall sleep
   </strong></pre>


<a name="XcodeTools"></a>

## Command Line Tools

1. To install additional utilities:

   <pre><strong>xcode-select --install</strong></pre>

2. List what it installed to folder <tt>/Library/Developer/CommandLineTools</tt> (containing folders 
Library, SDKs, and usr):

   <pre><strong>ls /Library/Developer/CommandLineTools/usr/bin/</strong></pre>

More on this:

   * XCode version: https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/pkgutil.1.html
   * https://gist.github.com/tylergets/90f7e61314821864951e58d57dfc9acd
   * pkgutil --pkg-info=com.apple.pkg.CLTools_Executables | grep version


<a name="USBinfo"></a>

## USB info

1. Install the equivalent of Linux <strong>usbutils</stong>:

   <pre><strong>brew install mikhailai/misc/usbutils
   usbutils</strong></pre>

1. Get the state of kernel objects that the kernel has matched to devices:

   <pre><strong>system_profiler SPUSBDataType</strong></pre>

   This has the same problem as Linux ioreg - it reflects the state of kernel objects that the kernel has matched to devices, not the devices themselves.<a target="_blank" href="https://stackoverflow.com/questions/17058134/is-there-an-equivalent-of-lsusb-for-os-x">*</a>

1. Alternately, to work same problem as ioreg 

   <pre>ioreg -p IOUSB -l -w 0</pre>



<a name="lsmod"></a>

## lsmod (modules) vs. Apple Kernel Extensions

macOS has Kernel <strong>Extensions (kexts)</strong> to handle hardware<a target="_blank" href="https://developer.apple.com/library/archive/documentation/Porting/Conceptual/PortingUnix/compiling/compiling.html">*</a>. Developers and software use the low-level kextload utility to load, kextunload to unload kexts, and kextstat to diagnose problems. There is also the kextutil command.

Although there are no direct equivalent in Linux, the Linux <tt>lsmod</tt> command lists operating system kernel <strong>modules</strong> defined in a folder containing ".ko" files:

   <tt>ls /lib/modules/$(uname -r) -type -f -iname "*.ko"</tt>

   Such udev rules are loaded in this sequence:

   * /etc/udev/rules.d
   * /run/udev/rules.d
   * /usr/lib/udev/rules.d
   <br /><br />


<a name="CoreUtils"></a>

## coreutils (Core Utilities)

Many who work with Linux distribution avoid minor (but annoying) differences by replacing OS X commands based on BSD with the GNU (Linux) version by installing the "coreutils" family of commands. It's among <a target="_blank" href="https://danielmiessler.com/blog/first-10-things-new-mac/">Daniel Missler's The First 10 Things I Do on a New Mac</a>.
This is about more than having the same toolset as on Linux machines.
See <a target="_blank" href="https://ponderthebits.com/2017/01/know-your-tools-linux-gnu-vs-mac-bsd-command-line-utilities-grep-strings-sed-and-find/">The difference between Linux vs. Mac</a>:

   * Native capability to search for Unicode strings are not in the Mac (BSD) version of strings.
   * ANSI-C escape sequences (e.g., \r, \t) beyond \n are not suppoed by the Mac sed command.
   <br /><br />

   See <a target="_blank" href="https://en.wikipedia.org/wiki/GNU_Core_Utilities">https://en.wikipedia.org/wiki/GNU_Core_Utilities</a>

1. Get the <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_GNU_Core_Utilities_commands">
   set of utilities from GNU Linux, but for Mac</a>:

   <pre><strong>brew install coreutils
   </strong></pre>

1. Then you can link:

   <pre><strong>ln -s /usr/local/bin/gtac /usr/local/bin/tac
   </strong></pre>

   <a target="_blank" href="http://www.nyx.net/~mlu/pages/computing/installing_and_configuring/installing_and_configuring_command-line_utilities/#.WuMRgMgh0Wo">NOTE</a>:

1. <a target="_blank" href="https://www.topbug.net/blog/2013/04/14/install-and-use-gnu-command-line-tools-in-mac-os-x/">
   NOTE</a>: Add these lines to your .bashrc or .zshrc:
   
   <tt>/usr/local/opt/coreutils</tt>

   <pre>export PATH="$(brew --prefix coreutils)/libexec/gnubin:/usr/local/bin:$PATH"</pre>

   NOTE: `brew --prefix coreutils` retrieves the path to the executable in the Homebrew package, which is, at time of writing:

   <tt>/usr/local/Cellar/coreutils/8.31</tt>

   PROTIP: Using a command to retrieve the path ensures that the version number from being hard-coded and thus possibly wrong.

   Thus, the command is used in ~/.bash_profile to define variables for compilers to find:

   <pre>export CFLAGS="-I$(brew --prefix readline)/include -I$(brew --prefix openssl)/include -I$(xcrun --show-sdk-path)/usr/include"
   export LDFLAGS="-L$(brew --prefix readline)/lib -L$(brew --prefix openssl)/lib"
   </pre>


   ### Bash shell

1. Update Bash to version 4:

   <pre>
brew install bash
brew link --overwrite bash
   </pre>

   See https://www.topbug.net/blog/2013/04/14/install-and-use-gnu-command-line-tools-in-mac-os-x/

   ### Zsh

   Switching to Zsh from Bash is a rather person choice. 
   But it's done thus:

   <pre>
brew install zsh  # in /bin/zsh
   </pre>

   ### Update Mac utilities

2. Several utilities come installed on macOS, but can be upgraded to the (newest?) version known by brew:

   <pre>
brew reinstall m4
brew reinstall make
brew reinstall unzip
   </pre>

   Because macOS already provides this software, when brew install runs, as its response message says, 
   formulas for them are installed as <strong>keg-only</strong>, which means brew did not symlink it into /usr/local 
   and installing another version in parallel can cause all kinds of trouble."

   So their installation would require placing their location in front of the default program's location.
   That's why many don't bother.

   Updates specific to text editors:

   <pre>
brew install nano  # text editor
brew install emacs
brew install emacs --cocoa --srgb
brew linkapps emacs
brew install vim --override-system-vi
brew install macvim --override-system-vim --custom-system-icons
   </pre>


### GNU Debugger

   Although with its Mavericks version, <a target="_blank" href="https://developer.apple.com/library/content/documentation/IDEs/Conceptual/gdb_to_lldb_transition_guide/document/lldb-terminal-workflow-tutorial.html">Apple</a> (along with the transition from GCC to Clang)
   substituted GDB (the GNU interactive debugger) with <a target="_blank" href="http://lldb.llvm.org/">LLDB (the standalone LLVM debugger)</a>.

   Unfortunately, the Eclipse IDE was not capable of communicating with any interactive debugger other than gdb.
   
   <a target="_blank" href="https://wiki.eclipse.org/CDT/User/FAQ#How_do_I_get_the_LLDB_debugger.3F">
   NOTE</a>: Install Xcode (version 7.3.1 is known to work). The simplest way is to get is from the App Store. Once it is installed, lldb-mi will reside somewhere under the Xcode folder (it normally is /Applications/Xcode.app/Contents/Developer/usr/bin/lldb-mi). CDT will initialize the default LLDB path to this value if it is present. Note that if you had previous debug configurations with a non-default path for LLDB or if you changed the path in the preferences, the path to lldb will not be automatically set for you. You will have to edit the LLDB path manually in the debug configuration and/or you need to reset the preferences to defaults (if it was modified). 


1. Restore GDB back on your Mac:

   <pre>
brew install gdb
   </pre>

   The above does not create a  ~/.gdbinit folder.

2. Notice in the response "On 10.12 (Sierra) or later with SIP, "brew info gdb" says you need to run:"

   <pre>
echo "set startup-with-shell off" >> ~/.gdbinit
   </pre>


   <a target="_blank" href="https://stackoverflow.com/questions/41966073/how-to-install-gdb-on-macos-terminal-sierra">
   NOTE</a>: https://sourceware.org/gdb/wiki/BuildingOnDarwin
   1. download the most recent GDB from https://www.sourceware.org/gdb/download/
   2. expand the gdb-7.12.1.tar.xz file: tar xopf gdb-7.12.1.tar.xz
   3. cd gdb-7.12.1 in terminal to open the gdb folder
   4. Follow the instructions in the README file in the gdb folder, or simply follow the following steps:
   5. ./configure, wait for the terminal
   6. make and wait again (which can take some time)
   7. sudo make install
   8. csrutil enable --without debug
   <br /><br />

   <a target="_blank" href="https://www.ics.uci.edu/~pattis/common/handouts/macmingweclipse/allexperimental/mac-gdb-install.html">
   This</a> describes how to code-sign the GDB executable so that macOS will allow it to control other processes.
   It involves some manual steps.

   codesign -s gdb-cert  /usr/local/Cellar/gdb/7.12_1/bin/gdb

   <a target="_blank" href="http://www.blog.howechen.com/install-gdb-macos-sierra/">
   NOTE</a>: To start dbg, use sudo or define alias gdb="sudo gdb"

   ### GNU Not pre-installed on macOS

   Tutorials make use of some commands, so install them:

   <pre>

brew install gawk  # in /usr/local/bin/gawk
brew install gzip  # in /usr/bin/gzip
brew install wget  # /usr/local/bin/wget
brew install screen  # in /usr/bin
   </pre>

   <pre>
brew install guile  # GNU Ubiquitious Language for Extensions https://www.gnu.org/software/guile/
brew install gpatch
brew install binutils  # https://en.wikipedia.org/wiki/GNU_Binutils
   </pre>
 
   Below are <a target="_blank" href="https://www.gnu.org/manual/blurbs.html">
   GNU packages on https://www.gnu.org/software</a> but not on macOS:

   <pre>
brew install grep --with-default-names
brew install gnu-indent --with-default-names   # C code prettifier
brew install gnu-sed --with-default-names
brew install gnu-tar --with-default-names
brew install gnu-which --with-default-names
brew install gnutls
brew install ed --with-default-names # in /bin/ed
brew install watch
brew install wdiff --with-gettext
   <pre>

   These are search 

   </pre>
brew install diffutils
brew install wdiff --with-gettext
   </pre>

   <tt>--with-default-names</tt> prevents Homebrew from prepending a "g" to each command, so they can be used instead of the ones shipped by OS X.

   ### findutils
   
   Missing from the list above is <tt>brew install findutils --with-default-names</tt>
   because that causes 'brew doctor' to issue warning: "Putting non-prefixed findutils in your path can cause python builds to fail."

   ### GPG

   https://superuser.com/questions/655246/are-gnupg-1-and-gnupg-2-compatible-with-each-other

   <pre>
brew install gnupg  # gpg
brew install gnupg2 # gpg2
   </pre>


   ### Add to MacOS Non-GNU commands

   <pre>
brew install file-formula
brew install less
brew install openssh
brew install perl518   # must run "brew tap homebrew/versions" first!
brew install rsync  # to backup
   </pre>

   These are handled by specific request:

   <pre>
brew install git
brew install python
brew install svn  # in /usr/bin/svn
   </pre>


   ### Utilities for Mac only

   <pre>
brew install htop  # like GNU top
brew install nmap
brew install tmux 
   </pre>

   ### MoreUtils and parallel

   <pre>
brew install moreutils --without-parallel
   </pre>

   <a target="_blank" href="https://packages.debian.org/unstable/utils/moreutils">
   The Debian description for it</a> is "Unix tools that nobody thought to write long ago, when Unix was young."

   Read about each utility command at <a target="_blank" href="https://rentes.github.io/unix/utilities/2015/07/27/moreutils-package/">
   https://rentes.github.io/unix/utilities/2015/07/27/moreutils-package/</a>
  
   * <strong>chronic</strong> runs a command quietly unless it fails
   * <strong>combine</strong> combines lines in two files using boolean operations
   * <strong>errno</strong> look up errno names and descriptions
   * <strong>ifdata</strong> get network interface info without parsing ifconfig output
   * <strong>ifne</strong> run a program if the standard input is not empty
   * <strong>isutf8</strong> check if a file or standard input is utf-8
   * <strong>lckdo</strong> execute a program with a lock held
   * <strong>mispipe</strong> pipe two commands, returning the exit status of the first
   * <strong>parallel</strong> run multiple jobs at once (<a target="_blank" href="http://brewformulas.org/Moreutil">conflicts with</a> brew install <a target="_blank" href="http://brewformulas.org/Parallel">parallel</a>, so don't install that stand-alone)
   * <strong>pee</strong> tee standard input to pipes
   * <strong>sponge</strong> soak up standard input and write to a file. See <a target="_blank" href="https://unix.stackexchange.com/questions/207919/sponge-from-moreutils-whats-the-difference-to-shell-redirect-useful-examples">this</a>
   * <strong>ts</strong> timestamp standard input
   * <strong>vidir</strong> edit a directory in your text editor
   * <strong>vipe</strong> insert a text editor into a pipe
   * <strong>zrun</strong> automatically uncompress arguments to command
   <br /><br />
   
   Its home page at <a target="_blank" href="https://joeyh.name/code/moreutils/">https://joeyh.name/code/moreutils/</a>
   says more are on the way.

   Riff on it at https://news.ycombinator.com/item?id=9013570

<hr />

## Openssl

1. To generate a random set of 32 upper and lower case characters (with special characters) for use as a password:

   <pre><strong>openssl rand -base64 32</strong></pre>

   Example:

   <pre>sUZmmvWZ5u+jbpHqdYRMQ2jn0wCrDx2IBc1LcJsyy4w=</pre>


## Certificates

http://sourceware.org/gdb/wiki/BuildingOnDarwin

<a id="CronJobs"></a>

## Cron Launchd Background Jobs

<a target="_blank" href="https://developer.apple.com/library/mac/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/ScheduledJobs.html">This</a> mentions that Apple has deprecated
cron in favor of <strong>launchd</strong> (a daemon running under the System context).
to automatically start (after reboots) service programs at boot time.

If the system is turned off or asleep, <strong>cron</strong> jobs 
do not execute until the <strong>next</strong> designated time occurs.

However, a launchd job will run when the computer wakes up if 
the computer was <strong>asleep</strong> when the job should have run
(if the StartCalendarInterval key has been set).

Since it's a background process, launchd doesn't present a user interface.
So you get "launchd cannot be run directly." when you run launchd like other commands.


The standard way now to run a service on Mac OS X is to use launchd , a program that starts, stops and manages daemons and scripts in Apple OS X environments. 

An XML document named with file extension <strong> .plist</strong> defines its properties. 
The sample file below defines the <a target="_blank" href="https://help.sonatype.com/display/NXRM3/Run+as+a+Service#RunasaService-MacOSX">Nexus Repository Manager</a> from Sonatype.com installed in `/opt`:

{% highlight xml %}
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
    "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.sonatype.nexus</string>
    <key>ProgramArguments</key>
    <array>
        <string>/opt/nexus/bin/nexus</string>
        <string>start</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
{% endhighlight %}

The above is the `com.sonatype.nexus.plist` file in `/Library/LaunchDaemons/` 

Change its ownership and access rights:

   <pre><strong>
sudo chown root:wheel /Library/LaunchDaemons/com.sonatype.nexus.plist
sudo chmod 644 /Library/LaunchDaemons/com.sonatype.nexus.plist
   </strong></pre>

PROTIP: Consider setting up a different user to run the repository manager and adapt permissions and the RUN_AS_USER setting in the nexus startup script. 

To manually start it after the configuration:

   <pre><strong>
sudo launchctl load /Library/LaunchDaemons/com.sonatype.nexus.plist
   </strong></pre>


## Install appium_console gem

<pre>
gem uninstall -aIx appium_lib
gem uninstall -aIx appium_console
gem install --no-rdoc --no-ri appium_console
</pre>

Install flaky gem:<br />
https://github.com/appium/flaky<br />
(posix-spawn)

<pre>
gem uninstall -aIx flaky
gem install --no-rdoc --no-ri flaky
</pre>


## Add wi-fi network

<a target="_blank" href="http://hints.macworld.com/article.php?story=20101004114849586">
NOTE</a> To avoid the manual effort to add a wi-fi, use this command:

   <pre><strong>
   /usr/sbin/networksetup -addpreferredwirelessnetworkatindex Airport my_ssid 0 my_security my_passkey
   </strong></pre>

* my_ssid is the SSID of your network. 
* my_security is the level of encryption (WEP, WPA, WPA2, etc) 
* my_passkey is your encryption passkey for your wireless network.
<br /><br />

<a target="_blank" href="http://osxdaily.com/2011/04/12/connect-wireless-network-command-line/">
NOTE</a>:

   <pre><strong>
   networksetup -setairportnetwork [interface] [router SSID] [password]
   </strong></pre>

## Shells

nix-shell environment on top of nixos/nixpkgs 

## Mac Message Reset

https://github.com/mattgraham/dotfiles/blob/master/bash/message_reset

## References

https://apple.stackexchange.com/questions/69223/how-to-replace-mac-os-x-utilities-with-gnu-core-utilities/69332

https://www.topbug.net/blog/2013/04/14/install-and-use-gnu-command-line-tools-in-mac-os-x/

http://clarkgrubb.com/diagnostic-tools compares Linux, Darwin, and Windows utilities

http://www.brendangregg.com/USEmethod/use-macosx.html

https://support.apple.com/kb/DL75?viewlocale=en_US&locale=en_US
Apple's Common Criteria Tools for 10.5


<hr />

## More on macOS

This is one of a series on macOS (Mac OSX):

{% include mac_links.html %}
