---
layout: post
date: "2022-09-11"
file: "mac-osx-terminal"
title: "Mac OSX Terminal (command-line tips and tricks)"
excerpt: "Make things happen quickly without touching the mouse"
tags: [apple, mac, setup]
image:
# feature: pic brown wood apple logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622035/740efa5c-0584-11e6-9a41-db5b03eaff85.jpg
  credit: Green Coffee Lover
  creditlink: http://www.greencoffeelover.com/wp-content/uploads/2015/03/7.jpg
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a href="https://wilsonmar.github.io/mac-osx-terminal">This tutorial</a> describes how to make use of the macOS Terminal to make your life easier and less frustrating.

What Apple calls the Terminal is what Linux people call the shell console 
(more specifically, the Bash shell). It's also called a command-line terminal, abbreviated as CLI.

Information here is often used in interview questions.

<a id="Terminalz"></a>

## Open Terminal (several ways) #

On the Mac, the Terminal app is kinda buried, probably perhaps because those who use a MacOS laptop just for social media probably won't need a Terminal. 

But if you're a developer, it's hard to get away from using a CLI. 

There are different ways to open a Terminal command line.

My preferrence is a way that doesn't require reaching for a mouse and using the least number of keystrokes:

   1. Press <strong>command+space</strong> keys (at the same time) to bring up Apple's Spotlight universial search, then 
   2. Type "termin" so "Terminal.app" appears.
   3. Press the space bar to select it.
   <br /><br />

Alternately, if you prefer moving your mouse:

   1. Click the Finder icon on the app bar.
   2. Click Applications on the left pane.
   3. Click Utilities.
   4. Click Terminal.
   <br /><br />

PROTIP: If you are at the Finder program (since Yosemite) you can open a Terminal to a folder listed within Finder by pointing your mouse on it, then tapping with two fingers on the touchpad/mousepad.
To enable that:

<ol type="1">
<li> Click the Apple icon, System Preferences....</li>
<li> Press K and select Keyboard.</li>
<li> Click Shortcuts, Services.</li>
<li> Scroll to the <strong>Files and Folders</strong> section.</li>
<li> Check on <strong>New Terminal at Folder</strong>.</li>
<li> Close the dialog by clicking the red dot at the upper left corner.</li>
</ol>


## Bash shell invocations

I put in an echo in the various files that macOS executes upon user login, when a new terminal is opened, and when a bash shell is invoked:

<pre>In /etc/profile ...
In /etc/bashrc ...
In /Users/wilson_mar/.bash_profile EUID 501 Fri 2020-03-20 10:59:52 PM MDT -0600
In ~/.bashrc ...
</pre>

When macOS logs in a user, it executes file <tt>/etc/profile</tt>. That file's code:

<pre># System-wide .profile for sh(1)
&nbsp;
if [ -x /usr/libexec/path_helper ]; then
	eval `/usr/libexec/path_helper -s`
fi
&nbsp;
if [ "${BASH-no}" != "no" ]; then
	[ -r /etc/bashrc ] && . /etc/bashrc
fi
</pre>

<tt>echo ${BASH-no}</tt> resolves to <tt>/usr/local/bin/bash</tt>.

The <tt>/etc/bashrc</tt> file contains:

<pre># System-wide .bashrc file for interactive bash(1) shells.
if [ -z "$PS1" ]; then
   return
fi
&nbsp;
PS1='\h:\W \u\$ '
# Make bash check its window size after a process completes
shopt -s checkwinsize
&nbsp;
[ -r "/etc/bashrc_$TERM_PROGRAM" ] && . "/etc/bashrc_$TERM_PROGRAM"
</pre>

The above defines the <tt>$PS1</tt> variable which sets the Terminal's prompt to the left of the cursor.

NOTE: On Ubuntu, instead of <tt>/etc/bashrc</tt>, the file is <tt>/etc/bash.bashrc</tt>.

RedHat <strong>also</strong> executes <tt>/etc/profile.d</tt> if the shell invoked is an "Interactive Shell" (aka Login Shell) where a user can interact with the shell, i.e. your Terminal bash prompt. 

Thus, whatever is specified in <tt>/etc/profile</tt> is NOT invoked for "non-interactive" shells invoked when a user cannot manually interact with it, i.e. a Bash script execution.

PROTIP: One can change those files, but since operating system version upgrades can replace them without notice, it's better to create a file that is not supplied by the vendor, and within each user's $HOME folder: <tt>~/.bash_profile</tt>

In other words, file <tt>/etc/profile</tt> is the system wide version of <tt>~/.bash_profile</tt> for all users.

Examples of custom settings include:

<tt>export HISTSIZE=1000</tt>  # sets the size of .bash_history lines of command history (500 by default)


## User Mask for permissions

<a target="_blank" href="https://en.wikipedia.org/wiki/Umask">Wikipedia</a> says umask controls how file permissions are set for newly created files. Please read it for the whole story on this.

1. To identify the User Mask for permissions:

   <pre><strong>umask
umask -S</strong></pre>

   Since the default is "0022":
   <tt>-S</tt> shows the symbolic equivalent to "0022" for u=user, g=group, o=others :

   <pre>u=rwx,g=rx,o=rx</pre>

   <tt>r</tt> is for readable, <tt>x</tt> is for eXecutable by the user.

1. To set the User Mask for permissions:

   <tt>UMASK 077</tt>


<hr />


## Within Text Editors/IDEs

Many prefer the terminals built into VS Code and other editors/IDEs.

## Text wrapping 

This page contains notes for system administrators and developers,
who need to control Macs below the UI level, which require
typing commands into a command-line terminal screen.

1. To avoid text wrapping, cursor on the right edge to expand the screen width.

### Hyper terminal app

Get the .dmg installer from the website
<a target="_blank" href="https://hyper.is/">https://hyper.is</a>. It's <a target="_blank" href="https://wesbos.com/uses/">used by</a> tutorials author Wes Bos.

Unlike Apple's Terminal, which is closed-source, Hyper is an open-source and extensible terminal emulator. It is available on MacOS, Windows, and Linux because it’s built using Electron (the same platform that powers Atom, Slack, and Brave). So it can be slow.

To customize Hyper, add the name of <a target="_blank" href="https://github.com/bnb/awesome-hyper">many packages</a> to its config file <tt>~/.hyper.js</tt>. Build an extension based on <a target="_blank" href="https://hyper.is/#extensions-api">hyper.is/#extensions-api</a>.

### iTerm2 for split pane

Many prefer to install and use <strong>iTerm2</strong> instead of the built-in Terminal program.
Install iTerm2 using Homebrew:

   <pre><strong>brew install --cask iterm2
   </strong></pre>

Terminal does not support but iTerm2 does support dividing the CLI into several rectangular "panes", each of which is a different terminal session:
* split window vertically with Command+D 
* split window horizontally with Command+Shift+D 
* Navigate among panes with command-opt-arrow or cmd+[ and cmd+]
* Temporarily toggle maximize the current pane (hiding all others) with command-shift-enter
* Exit out a pane by typing exit in that pane
<br /><br />

Pressing the shortcut again restores the hidden panes.

On Linux, there is the `screen` command.

See <a target="_blank" href="https://gist.github.com/wilsonmar/d2d00c3d54ffc36a05e29d2a695f5b3a">Iterm2 Cheat Sheet</a> of iTerm2 keyboard shortcuts. https://github.com/nobitagit/iterm-cheat-sheet/blob/master/README.md


## Alphabetical Commands list 

A list of all commands native to macOS is listed <a target="_blank" href="https://ss64.com/osx/">alphabetically at https://ss64.com/osx</a>.

## Exit

To exit from the Terminal shell:

   <tt><strong>exit</strong></tt>

Get back in for the remainder of this tutorial.

## Shutdown

CAUTION: To kill all apps and shutdown a Mac right away (with no warning and no dialog):

   <tt><strong>sudo shutdown -h now
   </strong></tt>


<a id="Keyboard"></a>
<a id="ShortKeys"></a>

## Text Command Line Bash Shortcuts #

These come from the bash terminal on Linux machines <a target="_blank" href="https://linuxacademy.com/blog/linux/ten-things-i-wish-i-knew-earlier-about-the-linux-command-line-2/">*here*</a>: Press control with your pinkie, then ...

<ul>
<li> control + C = Close processing</li>
<li> control + L = cLear screen</li>
<p></p>
<li> <strong>control + A = Go to Beginning of line (as in A to Z)</strong> </li>
<li> control + E = Go to End of line (hit E using longest finger)</li>
<p></p>
<li> control + F = Forward cursor</li>
<li> control + B = Backward<br /></li>
<p></p>
<li> control + H = Backspace left of cursor</li>
<li> control + D = Delete right of cursor<br /></li>
<p></p>
<li> control + K = Kill line from under the cursor to the end of the line.</li>
<li> <strong>control + U = "U get out of here" - Clear entire line</strong><br /></li>
<p></p>
<li> control + P = Previous line<br /></li>
<li> control + N = Next line </li>
<p></p>
<li> control + Y = Retrieve line<br /></li>
<li> control + ` = cycle through session windows</li>
<li> control + left = previous session</li>
<li> control + right = previous session</li>
</ul>




<a id="EnvVarz"></a>

## Environment Variables

A big reason to use a command-line terminal is to set environment variables.

Like on PCs, the <strong>PATH</strong> system environment variable stores
where the operating system should look to find a particular program to execute.

1. To see what is already defined:

   <pre><strong>export
   </strong></pre>

   The listing such as this, which declares the "XPC_FLAGS" system variable:

   <tt>declare -x XPC_FLAGS="0x0"</tt>

   

   <a target="_blank" href="http://stackoverflow.com/questions/135688/setting-environment-variables-in-os-x">This</a> 
   talks about setting <strong>launchd.conf</strong> and rebooting.
   This applies to all users.

1. To see what is defined:

   <pre><strong>echo $PATH
   </strong></pre>

   PROTIP: $PATH must be upper case.

   The response I'm getting includes:

   <tt>/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
   </tt>

   Notice colon (:) separator used in Mac and Linux vs. semicolons used in Windows PATH.

## Default editor

1. The command to invoke the default editor is defined by a variable:

   <pre><strong>echo $EDITOR</strong></pre>
   
   By default, it's TextMate:

   <pre>/usr/local/bin/mate -w</pre>

   If you want to change it to nano or other editor, see <a target="_blank" href="https://wilsonmar.github.io/text-editors">My tutorial on text editors</a>.

2. On Terminal session, copy what has been typed and open the default text editor so you can edit the command:

   <pre><strong>fc
   </strong></pre>

   Alternately, (which also works in Linux) while holding down the control key, press X and E together:

   <tt><strong>control + X + E</strong></tt>

3. Make changes, then copy all, switch or exit to the Terminal, then paste.

   ### Switch among programs

4. To switch among programs already running in macOS, hold down the <strong>command</strong> key while pressing <strong>tab</strong> multiple times until the program you want is highlighted (with its name) in the pop-up list. This is equivalent to the Windows control+Esc key combo.



## Command history

1. List previous command history:

   <pre><strong>history
   </strong></pre>

   This is the same as:
   
   <pre><strong>cat $HISTFILE</strong></pre>

   PROTIP: History does not display commands entered with a leading space.

1. Cursor up and press Enter to re-execute.

1. Press <tt>control + R</tt> to begins a “reverse incremental search” through your command history,
   then type, it retrieves the most recent command that contains all the text you enter. Much better than something like:

1. Press <tt>control + S</tt> to reverse the mode.

1. Clear history:

   <pre><strong>history -c
   </strong></pre>

   The clear command does not clear history.

   See <a target="_blank" href="https://ss64.com/osx/history.html">history at sstr.com</a>

1. Clear the terminal history:

   <strong>clear</strong>






## Foreground processes and background jobs

4. List the first process (with Parent process ID of 0) launched (into user space) at boot by the system kernel:

   <pre><strong>ps -f 1</strong></pre>

   <tt>f</tt> adds columns for status of the command (CMD) to invoke the process:

   <pre>UID   PID  PPID   C STIME   TTY           TIME CMD
    0     1     0   0  5:17PM ??         4:38.73 /sbin/launchd
   </pre>

   By contrast, on Linux system, the first CMD is <tt>/lib/systemd/systemd</tt>.

4. To list all processes, don't specify 1

   <pre><strong>ps -f</strong></pre>


   ### PID given process name

1. To list the process ID given a process name such as "firefox":

   <pre><strong>ps -A | grep -m1 firefox | awk '{print $1}'</strong></pre>

   This can be <a target="_blank" href="https://hints.macworld.com/article.php?story=20030618114543169">generalized</a> in a shell program containing:

   <pre>#!/bin/sh
ps axc|awk "{if (\$5==\"$1\") print \$1}";
   </pre>

   Alternately, Linux has a command which returns the PID associated with a process name. But it's not avaiable on macOS, so:

1. <a target="_blank" href="http://macappstore.org/pidof/">install it using Homebrew</a>:

   <pre><strong>brew install pidof</strong></pre>

3. To emulate a long-running process in the foreground:

   <pre><strong>sleep 360
   </strong></pre>

   No additional commands can be accepted.

4. To kill the current process, press <strong>control + C</strong>.

   ### background jobs

2. Run a program in the background with the <tt>&</tt>:

   <pre><strong>sleep 360 &
   </strong></pre>

3. List jobs (processes) running in the background:

   <pre><strong>jobs
   </strong></pre>

   ### Suspend control+Z

3. Do it again:

   <pre><strong>sleep 360
   </strong></pre>




6. To <strong>suspend</strong> the process, press <strong>control + Z</strong>. The response is like:

   <pre>[1]+  Stopped     sleep 360</pre>

   <tt>[1]</tt> shows the PID.

   Internally, this sends a "20) SIGTSTP" signal to the process.

7. To have the process continue (internally sending a "18) SIGCONT":

   <pre><strong>bg</strong></pre>

1. List processes

   <pre><strong>ps f
   </strong></pre>

1. Copy the PID (Process Identifier) number for use in the kill command, such as:




1. There are many ways to kill a process:

   <pre><strong>kill -l
   </strong></pre>

1. To kill a specific process, ee need to specify its PID (Process Identifier):

   <pre><strong>sudo kill 289
   </strong></pre>

   Some applications are written to receive a sigterm so that it can take steps to gracefully cleanup and exit.

   The key ones, in order of aggressiveness:

   <tt>kill     289<tt> # sends sigterm<br />
   <tt>kill -15 289<tt> # sends sigterm<br />
   <tt>kill -2  289<tt> # sends sigint<br />
   <tt>kill -1  289<tt> # sends sighup<br />
   <tt>kill -9  289<tt> # sends sigkill signal to the kernel without notifying the app, a "dirty shutdown" used when the app is misbehaving.<br />

 

   ### List open files

2. To list process id's and port (such as 8080), use the "list open files" command:

   <pre><strong>sudo lsof -i -P | grep 8080
   </strong></pre>

   PROTIP: Use grep to filter because the response is usually too many lines.

   (You'll need to provide your password).

   <pre>
   COMMAND     PID           USER   FD   TYPE            DEVICE SIZE/OFF   NODE NAME
   launchd       1           root   23u  IPv4 0x1b333861483d431      0t0    UDP *:137
   </pre>

   The right-most column heading &quot;NAME&quot; shows the port
   (either TCP or UDP).



<a id="DevFolderz"></a>

## Folders accessed by developers

1. In Finder, select from the left panel the first item under the 
<strong>Devices</strong> list.

1. Click on <strong>Macintosh HD</strong>.

   <ul>
   <li><strong>Applications</strong> hold apps installed.</li>
   <li><strong>Incompatible Software</strong> hold apps which cannot be installed,
   such as Amazon Kindle, which competes with Apple's iBooks.
   This occured during upgrade to Yosemite.</li>
   <li><strong>Library/Library</strong> holds Apple internal apps.</li>
   <li><strong>System</strong> hold apps installed.</li>
   <li><strong>Users</strong> hold data for each user defined,
   as well as a Shared folder accessible by all users.</li>
   </ul>
   <br /><br />


1. Click on your username (wilsonmar in my case).

   This action is the same as clicking on the last default item under the
   Favorites list.

   Many WordPress developers prefer to add a folder named <strong>Sites</strong>
   which holds the wordpress folder expanded from download.

   ### vs. /etc in Linux

   <a target="_blank" href="https://www.youtube.com/watch?v=UFIoRLqhFpo&t=3m58s">VIDEO</a>:
   On both Mac and Linux, the "et-see" folder contains system and program configuration files,
   for both default system and programs you install (such as "teamviewer", etc.)

   <tt>/bin</tt> contains system 

   <tt>/sbin</tt> are for system administrators such as ping, fdisk, mount, umount, etc.



<a id="Terminal_file_listing"></a>

## Terminal File Listing Home Folder #

By default, the Terminal shows the hard drive and lowest level file folder name, in white letters over black.

0. To show the present (current) working directory (folder):

   <pre><strong>pwd
   </strong></pre>

   The response for me is:

   <tt>/Users/wilsonmar
   </tt>

   You will of course have a different machine user name than wilsonmar.

0. Note the pwd command is built internally to the Bash shell:

   <pre><strong>type pwd
   </strong></pre>

   The response:

   <tt>pwd is a shell builtin
   </tt>

0. To get back to the <strong>home</strong> folder:

   <pre><strong>cd
   </strong></pre>

   Alternately:

   <pre><strong>cd ~/
   </strong></pre>

   Alternately, use the $OLDPWD environment variable that MacOS automatically maintains to
   remember the previous working directory so that you can switch back to it:

   <pre><strong>cd -
   </strong></pre>


   ### List files and folders

0. List all file names (without any metadata):

   <pre><strong>ls
   </strong></pre>

   Folders available by default include Documents, Downloads, Pictures, Desktop, Music, Movies.

0. Note the ls command is an external command added to the Bash shell:

   <pre><strong>type ls
   </strong></pre>

   The response lists where ls is defined:

   <tt>ls is hashed (/bin/ls)
   </tt>

0. Dive into a folder type:

   <pre><strong>cd mu
   </strong></pre>

0. Press Enter.

   Nothing happens because upper case letters are important.

0. Press delete to remove the mu and type:

   <pre><strong>cd Mu
   </strong></pre>

0. Press Enter for the Music folder.

0. Go back up a level:

   <pre><strong>cd ..
   </strong></pre>

0. Create a Projects folder to hold projects downloaded from 
   <a href="#Setup_Github">Github</a>:

   <pre><strong>mkdir -p Projects
   </strong></pre>

   <tt>-p</tt> specifies creating the parent folder if it doesn't exist.

   This only needs to be done once.




   ### List files and folders

0. List all files with their permission settings:

   <pre><strong>ls -ls
   </strong></pre>

   Notice that no hidden files are listed.

0. List all <strong>hidden</strong> files with permission settings,
   piping the listing to more instead of having results flying by:

   <pre><strong>ls -la ~/ | more
   </strong></pre>

   A colon appears at the bottom if there is more to show. 

0. Cancel the listing, press <strong>control + C</strong>.

   Notice the .bashrc on the first page, something like:

   <pre>
-rw-r--r--  1 discworld discworld  3330 Mar 10 16:03 .bashrc
   </pre>

   (It's for the <a href="#BashShell">Bash Shell</a>.)

0. If a file is not listed, create it with:

   <pre><strong>touch ~/.bashrc
   </strong></pre>

0. To make it rw r r:

   <pre><strong>chmod 644 .bashrc 
   </strong></pre>

0. List only hidden files in the current folder:

   <pre><strong>ls -ld .??*
   </strong></pre>



<a id="ShowHiddenInFinderz"></a>

## Show Hidden Invisible Files in Finder #

By default, the Mac's Finder does not show hidden files.

0. Close all Finder folders.

0. Enter this in Terminal before typing Return:

   <pre><strong>defaults write com.apple.finder AppleShowAllFiles TRUE && killall Finder
   </strong></pre>

   This causes all Finder windows to be reset.

   To make invisible files visible again:

   <pre><strong>defaults write com.apple.finder AppleShowAllFiles FALSE && killall Finder
   </strong></pre>

   A description of each keyword:

   **defaults** - OSX's command to change defaults, apple's low-level preference system.

   **write** - tells defaults you want to change a preference, or write it

   **com.apple.finder** - defaults that the application's preferences you want to change is Finder, specified by the application's bundle identifier.

   **AppleShowAllFiles** - specifies which preference you want to change within the application.

   **TRUE or FALSE** - the value you want to set the preference to. In this case, it is a boolean, so the values must be TRUE or FALSE. I think you might be able to use YES or NO, but I'm not sure.

   **&&** - a terminal operator to run whatever's after this if the command to its left is successful.

   **killall** - kills processes or closes applications.

   **Finder** - specifies the process or application to close.

For more on this, see <a target="_blank" href="http://www.westwind.com/reference/OS-X/invisibles.html">this</a>.


## Create Terminal Aliases #

<a id="Wireless"></a>

### Wireless up and down

Most developers leave files un-hidden.

1. To set wireless (device `en0`) up or down without clicking on the icon at the top:

   <tt>ifconfig en0 down</tt>
   
   This command requires sudo permissions.

1. Set alias command to just type <strong>showFiles</strong> and
   <strong>hideFiles</strong> 
   to show and hide Mac OS X’s hidden files, consider
   <a target="_blank" rel="amphtml" href="http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/">
   this article</a> to create such terminal aliases
   in the ~/.bash_profile script.


### tree alias or brew install #

OSX does not come with the tree command that many other Linux distributions provide. So add it using:

If you don't want to install a program, add an alias for a tree command by adding this in the <tt>~/.bash_profile</tt> script:

   <pre>
   alias tree="find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'"
   </pre>

   Alternately, add it by installing a command using brew:

   <pre><strong>brew install tree
   </strong></pre>

   Active Terminal sessions need to be closed so new 
   <tt>Terminal | Shell | New Window | Shell</tt> has this activated.

   See list of parameters:

   <pre><strong>tree --help
   </strong></pre>

   List only 2 levels deep with human-readable file size kilobytes and sort by last modified date:

   <pre><strong>tree -L 2 -s -h -p -D -t
   </strong></pre>

<hr />


<a id="HotCornerz"></a>

## Cursor to Screen Hot Corners #

By default, if you move the mouse to one of the corners of the screen,
stuff happens. It can be annoying.

0. Click the Apple menu at the upper left corner.
0. Select System Preferences.
0. Select Desktop &amp; Screen Saver.
0. Select the "Screen Saver" tab.
0. Click "Hot Corners" at the lower-right corner.
0. Select actions for each of the corners.
   
   <img alt="macos-corners-689x387-19023.jpg" width="689" src="https://user-images.githubusercontent.com/300046/55433395-80e9dc80-5552-11e9-94d9-9184c989f70b.jpg">

   PROTIP: Disable each by selecting the dash (last choice) so they don't show up when you're just trying to navigate to something near the edge.

0. Exit out the Preferences diaglog.
0. Move your cursor to the lower-left corner to bring it back to life.
0. Press Esc to bring the screen back.

   PROTIP: NOT having a quick way to "Put display to sleep" is considered a security vulnerability by CIS. The lower-left corner is less popular location on Mac than Windows.


<a id="Hosts"></a>

## Hosts file

Mac, Windows, and Linux systems have a hosts file that locally does the work of the public DNS
-- translating host names (typed on browser address field) to IP address numbers.

<a name="Cat"></a>

0. Show text file contents to the Terminal console:

   <pre><strong>cat /etc/hosts
   </strong></pre>

   The default contents:

   <pre>
127.0.0.1 localhost
255.255.255.255 broadcasthost
::1 localhost
fe80::1%lo0 localhost
   </pre>

   PROTIP: `fe80::` is a block of IPV6 addresses reserved for link-local addresses used for packets sent only to directly connected devices (not routed). The network discovery protocol (NDP), which replaces ARP and DHCP in IPv4, is the biggest user of link-local addresses (NDP sorta .

   <tt>fe80::1</tt> is like 127.0.0.1 for IPV4, but
   actually IP address 169.254.*.* in IPV4, an address not often used.

   Each IPV6 interface has a different link-local address starting with fe80:: and (typically) ending with a modified version the interface's MAC address (EUI-64 format) to ensure a unique address on a segment. 

   Programs such as OpenVPN add to the bottom of the file:

   <pre>
# BEGIN section for OpenVPN Client SSL sites
127.94.0.1  client.openvpn.net
# END section for OpenVPN Client SSL sites
   </pre>   


   BLAH: The Linux tac command to list backward is not in Mac:

   <pre><strong>tac /etc/hosts
   </strong></pre>

0. Show a file in -reverse (bottom-up):

   <pre><strong>tail -r -n2 /etc/hosts
   </strong></pre>

   Change n2 to a different number of lines to show.

   PROTIP: This command is useful to see the lastest entries appended to the end of a 
   large log file.

0. Expose spaces at end of lines by showing at end of every line <tt>$</tt> end-of-line characters that are otherwise not shown. For example, in a file on every macOS:

   <pre><strong>cat -vet /etc/hosts
   </strong></pre>


1. Edit the hosts file on a Mac using the Atom text editor:

   <pre><strong>atom /etc/hosts
   </strong></pre>

<hr />


<a id="TerminalPingHostz"></a>

## Terminal Ping Host #

Find the IP address of a website host name:

<pre><strong>host microsoft.com</strong></pre>

<pre>
microsoft.com has address 134.170.185.46
microsoft.com has address 134.170.188.221
microsoft.com mail is handled by 10 microsoft-com.mail.protection.outlook.com.
</pre>


## SSH tunnel

To access a remote server through a port that is not open to the public:

1. <a target="_blank" href="https://www.youtube.com/watch?v=Zuwa8zlfXSY&t=3m45s">VIDEO</a>: Bind local port 3337 to remote host 127.0.0.1 port 6379 using user root in emkc.org 

   <pre><strong>ssh -L 3337:127.0.0.1:6379 root@emkc.org -N
   bg
   </strong></pre>

   BTW 6379 is the default port for a Redis instance.



<a id="DNSConfigz"></a>

## DNS Configuration with NameBench #

<a target="_blank" href="http://www.macworld.com/article/2824564/slow-internet-edit-your-dns-settings.html">
Analysis at one time</a> showed this ranking by speed:

<ol type="1">
<li> UltraDNS at 156.154.70.1 </li>
<li> Google at 8.8.4.4, 8.8.8.8</li>
<li> OpenDNS at 208.67.222.222, 208.67.220.220, 208.67.222.220 </li>
</ol>

<a href="_blank" href="https://code.google.com/p/namebench/">
Google Namebench</a> tries the speed of various DNS servers from YOUR machine (which takes some time) and pops up in your browser this:

   <amp-img media="(min-width: 401px)" width="401" height="109"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/15806416/10a81d26-2b00-11e6-9bcc-811ea1debc07.jpg"></amp-img>

<ol type="1">
<li> If you don't see the Apple icon at the top of the screen,
move the cursor to the very top of the screen for a few seconds.</li>
<li> Click on the Apple icon at the upper left corner.</li>
<li> Select <strong>System Preferences</strong>.</li>
<li> Click <strong>Network</strong>.</li>
<li> Click <strong>Advanced</strong>.</li>
<li> Click <strong>DNS</strong>.</li>
<li> Click <strong>[+]</strong>, copy, and paste </li>
</ol>

An example:

<ol type="1">
<li> 205.171.3.65 </li>
<li> 216.146.35.35 </li>
<li> 192.168.0.1 </li>
</ol>


<a id="DNSClearz"></a>

## Clear DNS Cache

1. Flush the DNS cache (since OSX 10.9):

   <tt><strong>
   sudo dscacheutil -flushcache
   </strong></tt>

   `dscacheutil` is the <a target="_blank" href="https://ss64.com/osx/dscacheutil.html">Directory Service cache utility</a> used to Gather information, statistics, initiate queries, flush the cache:

   BTW, the equivalent for Ubuntu is<br /> 
   `sudo service network-manager restart`
   while other Linux flavors uses<br />
   `sudo /etc/init.d/nscd restart`.<br />
   Windows uses<br />
   `ipconfig /flushdns`.

<a index="_blank" href="http://coolestguidesontheplanet.com/clear-the-local-dns-cache-in-osx/">
Different commands</a> are needed for different versions of OS.
<strong>OSX 10.10</strong> added requirement for sudo when using the 
built-in discoveryutil:

   <tt>sudo discoveryutil udnsflushcaches</tt>

<hr />


<a id="BashConfigz"></a>

## Bash Profile Configuration #

The profile file is run during <strong>boot-up</strong>
to configure the terminal 
to define file path, shims, and autocompletion handlers.

This is the single biggest frustration with people using Linux on Mac.

One of the earliest articles on bash <a target="_blank" href="
http://www.macdevcenter.com/pub/a/mac/2004/02/24/bash.html">here</a>
shows shell variables, environment variables, and aliases.

Each operating system has its own file name for its profile:

<ul>	
<li> With Ubuntu: Modify ~/.profile instead of ~/.bash_profile.</li>
<li> With Zsh: Modify ~/.zshrc file instead of ~/.bash_profile.</li>
<li> With Fish: Modify `~/.conf/fish/config.sh` to append.</li>
</ul>

PROTIP: If there is both a .bash_profile and a .profile file, boot-up only executes the first one it finds.

1. On my Yosemite Mac, open a terminal and:

   <pre><strong>cd ~
   </strong></pre>

1. View the file using the vi editor that comes with OSX:

   <pre><strong>vi .bash_profile
   </strong></pre>

According to the <a target="_blank" rel="amphtml" href="http://linux.die.net/man/1/bash">
bash man page</a>, 
.bash_profile is executed during <strong>login</strong> before the command prompt,
while .bashrc is executed for interactive non-login shells such as
when you start a new bash instance by typing /bin/bash in a terminal.

Here's what my profile file begins:

<pre>
echo ".profile"
export NVM_DIR="/Users/wilsonmar/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
export PATH=/Library/Frameworks/Python.framework/Versions/3.4/bin:/opt/local/bin:/opt/local/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting
&nbsp;
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
</pre>

1. Exit vi by typing <tt>:q</tt>

1. Some installers request that adding a `$PATH` using a command such as:

   <pre>
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.bash_profile
   </pre>

1. To execute profile with the changes:

   <pre><strong>source  ~/.bash_profile
   </strong></pre>

   Alternately, to install GHC copy and paste into ~/.bash_profile:

   <pre>
# Add GHC 7.8.4 to the PATH, via http://ghcformacosx.github.io/
export GHC_DOT_APP="/Users/wilsonmar/Applications/ghc-7.8.4.app"
if [ -d "$GHC_DOT_APP" ]; then
export PATH="${HOME}/.cabal/bin:${GHC_DOT_APP}/Contents/bin:${PATH}"
fi
   </pre>

https://github.com/gcuisinier/jenv/blob/master/README.md


* To run a Bash script while avoiding the confirmation prompt:

   <tt><strong>set \-\- -f; source bootstrap.sh
   </strong></tt>



<a id="OSKernelz"></a>

## Operating System Kernel #

I can use Linux commands in my version of the operating system:

<tt><strong>uname -a</strong></tt> (a for all) or 
<tt><strong>uname -rvm</strong></tt> 

returns:

<tt>14.3.0 Darwin Kernel Version 14.3.0: Mon Mar 23 11:59:05 PDT 2015; root:xnu-2782.20.48~5/RELEASE_X86_64 x86_64</tt>

which is a combination of:

<tt><strong>uname -r</strong></tt> for release number,
<br /><tt><strong>uname -v</strong></tt> for kernel version,
<br /><tt><strong>uname -m</strong></tt> for model:

<tt>x86_64</tt> for Intel or AMD 64-bit or
<br /><tt>i*86</tt> for 32-bit.

For more information about Darwin operating system
developed at Apple, see:

* http://www.wikiwand.com/en/XNU and
* https://www.wikiwand.com/en/Comparison_of_operating_system_kernels

NOTE: <tt><strong>lsb_release -a</strong></tt>
which works on Debian, RHEL 6.6, and Ubuntu 
is not recognized on Gentoo nor CentOS 6,
which has no folder /etc/lsb-release.

See <a target="_blank" href="https://www.Distrowatch.com/">Distrowatch.com</a>, which details each release of various Linux distributions (RedHat, etc.).



<a id="Setup_Mac"></a>

## Setup Your Mac Like a Pro #

Paul Irish is one of top pros among developers, and now a Google Evangelist.
He put his Mac configuration settings on
<a target="_blank" rel="amphtml" href="https://github.com/paulirish/dotfiles">
github.com/paulirish/dotfiles</a>. But he recommends cloning 
<a target="_blank" rel="amphtml" href="https://github.com/mathiasbynens/dotfiles/">
github.com/mathiasbynens/dotfiles/</a>.

On the Git page notice that he has established an industry convention of using
<strong>Projects</strong> folder we defined earlier.

On the Git page I clicked on <strong>Clone in Desktop</strong>.

The library is called dotfiles because that's what hidden files are called,
and most configuration files are hidden.	



<a id="Edit_Terminal_setting"></a>

## PS1 terminal prompt setting #

The <tt>PS1</tt> variable defines how to display the prompt.

<a target="_blank" href="https://starship.rs/">https://starship.rs</a>
is a Rust-powered 

<pre><strong>yes | curl -sS https://starship.rs/install.sh | sh</strong></pre>


Paul Irish offers his setup-a-new-machine.sh at
<a target="_blank" href="https://github.com/paulirish/dotfiles">https://github.com/paulirish/dotfiles</a>

ZShell (included with Mac and can be set as the default in Terminal)
   * oh-my-zsh as a ZShell framework
   * The oh-my-zsh Git plugin
   * The oh-my-zsh theme called jnroweï»¿
   <br /><br />

By default, if you have a long file name, it would leave little room to type in commands before it wraps to the next line.

<a target="_blank" rel="amphtml" href="http://code.tutsplus.com/tutorials/how-to-customize-the-command-prompt--net-20586">
To redefine what appears in the prompt</a>,
edit this file using the vi editor that comes with each Mac:

<tt>vi .bashrc</tt>

Copy this and paste to the bottom of the .bashrc file:
<pre>
txtblk='\e[0;30m' # Black - Regular
txtred='\e[0;31m' # Red
txtgrn='\e[0;32m' # Green
txtylw='\e[0;33m' # Yellow
txtblu='\e[0;34m' # Blue
txtpur='\e[0;35m' # Purple
txtcyn='\e[0;36m' # Cyan
txtwht='\e[0;37m' # White

bldblk='\e[1;30m' # Black - Bold
bldred='\e[1;31m' # Red
bldgrn='\e[1;32m' # Green
bldylw='\e[1;33m' # Yellow
bldblu='\e[1;34m' # Blue
bldpur='\e[1;35m' # Purple
bldcyn='\e[1;36m' # Cyan
bldwht='\e[1;37m' # White

unkblk='\e[4;30m' # Black - Underline
undred='\e[4;31m' # Red
undgrn='\e[4;32m' # Green
undylw='\e[4;33m' # Yellow
undblu='\e[4;34m' # Blue
undpur='\e[4;35m' # Purple
undcyn='\e[4;36m' # Cyan
undwht='\e[4;37m' # White

bakblk='\e[40m'   # Black - Background
bakred='\e[41m'   # Red
badgrn='\e[42m'   # Green
bakylw='\e[43m'   # Yellow
bakblu='\e[44m'   # Blue
bakpur='\e[45m'   # Purple
bakcyn='\e[46m'   # Cyan
bakwht='\e[47m'   # White

txtrst='\e[0m'    # Text Reset

print_before_the_prompt () {
printf "\n $txtred%s: $bldgrn%s \n$txtrst" "$USER" "$PWD"
} 
PROMPT_COMMAND=print_before_the_prompt
PS1='->'
</pre>
The command above uses global parameters $USER and $PWD,
plus <a target="_blank" rel="amphtml" href="https://wiki.archlinux.org/index.php/Color_Bash_Prompt#List_of_colors_for_prompt_and_Bash">
colors from this list</a>.


<a id="RootSudoz"></a>

## Root user for sudo commands

If you try a command that responds about "permissions denied", you need to execute as a root user.

   The root user has the ability to relocate or remove required system files and to introduce new files in locations that are protected from other users.
   A root user has the ability to access other users' files.

   Any user with an administrator account can become the root user or reset the root password.

   Under a *nix system like MacOS you must have "root" (administrative) privileges to start IP-services using ports smaller than 1024.

   After MacOS install, the root or superuser account is not enabled. 
   While it is possible to enable the root account, 
   once enabled, if forgetten, you'll have to 
   <a target="_blank" rel="amphtml" href="http://danfrakes.com/2014/10/16/how-to-make-a-bootable-yosemite-installer-drive/">reboot from the installer drive</a> (a hassle).


1. The easiest way it to have the last command (in history) automatically retrieved so you don't have to retype it to  
execute again under root:

   <tt><strong>sudo !!</strong></tt>

   It is safer and easier to use the sudo command to gain temporary root access to the system rather than logging out and logging in using root credentials.

1. Alternately, this command only reads the $SHELL variable and executes the content:

   <tt><strong>sudo -s</strong></tt>
   
   You would be prompted for a password.
   
   * To determine whether you're in sudo:

   <tt><strong>whoami</strong></tt>

   The response "root" says you're still in sudo rather than your user name.

   * To demote out of root:

   <tt><strong>exit</strong></tt>

PROTIP: There are <strong>several ways to invoke sudo</strong> <a target="_blank" href="https://www.techrepublic.com/article/the-different-shades-of-sudo">*</a>

1. This command is my preferred way to get into root for awhile because it keeps the environment variables intact:

   <tt><strong>sudo /bin/bash</strong></tt>

   The command above uses a non-login shell, and reads just the .bashrc of the calling user. Not all dot-files are executed.

1. If you want environment variables specific to root and be in the root home directory (rather than your user's $HOME directory), this command executes \/etc/profile, .profile, and .bashrc which defines them:

   <tt><strong>sudo su -s</strong></tt>

1. If you switch between Zsh and Bash, this command runs the shell specified by the password database entry of the target user as a login shell:
   
   <tt><strong>sudo -i</strong></tt>

1. If you switch between Zsh and Bash, this command runs the shell specified by the password database entry of the target user as the login shell, then executes login-specific resource files .profile, .bashrc (or .login):
   
   <tt><strong>sudo -s</strong></tt>
   
 
### PATH

NOTE: The folders that bash looks into are in bin:

   <tt>/bin/echo $PATH</tt>

   On a fresh Yosemite, that would contain:

   <tt>/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</tt>
 
Each additional app adds to the front of the list:

<tt>
/Library/Frameworks/Python.framework/Versions/3.4/bin:/opt/local/bin:/opt/local/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
</tt>

Separating the folders between colon separator:

<ul>
<li>/Library/Frameworks/Python.framework/Versions/3.4/bin</li>
<li>/opt/local/bin</li>
<li>/opt/local/sbin</li>
<li>/Applications/MAMP/bin/php5/bin</li>
<li>/Applications/MAMP/Library/bin</li>
<li>/Applications/Adobe AIR SDK/bin</li>

<li>/usr/local/bin</li>
<li>/usr/bin</li>
<li>/bin</li>
<li>/usr/sbin</li>
<li>/sbin</li>
</ul>

New folders are added to the front of the PATH using a command such as:

<tt>
export PATH=&LT;new folders>:$PATH
</tt>

Depending on how you're setup, file ~/.profile or ~/.bash_profile or ~/.bash_login 
contains the path echo'd.

Or your PATH may be set in /etc/profile for all users


<a id="Browserz"></a>

## Create Windows-like shortcuts with parameters using text editor

http://www.jesseweb.com/coding/automator/create-windows-like-shortcuts-with-parameters/

Mac OSX doesn't allow you to create shortcuts like Windows.
OSX alias don't allow parameters (ex. create a Screen Sharing shortcut that connects to a specific computer). 

Jessie suggests <a target="_blank" rel="amphtml" href="http://www.jesseweb.com/coding/automator/create-windows-like-shortcuts-with-parameters/"> 
this</a> to create a Windows like shortcut with parameters in the Comments field.

<a target="_blank" rel="amphtml" href="http://hints.macworld.com/article.php?story=20040111200114634">
Another alternative</a>
is to use a text editor to create URL shortcut files
like the ones Windows Internet Explorer stores its bookmarks. 
Apple Safari recognizes them when clicked within Finder.
So they are cross-platform.

<ol type="1">
<li> Copy the URL to the clipboard by pressing Command+C.</li>
<li> From within a text editor, open a new text file.</li>
<li> Type at the top of the file: 

<tt>[InternetShortcut]<br />
URL=</tt>
</li>
<li> Paste from clipboard by pressing Command+V</li>
<li> Press enter/return to add a blank line under the URL line.</li>
<li> Save the file with a .url file extension.</li>
<li> From within Finder, click on the file to see it display by Safari.</li>
</ol>


<a id="MountDmg"></a>

### Mount .dmg files using hdiutil tool

1. Mount a .dmg (Disk Image) file (substituting for /path/to/diskimage):

   <pre><strong>hdiutil attach <em>/path/to/diskimage.dmg</em>
   </strong></pre>

   The response is like:

   <pre>
/dev/disk1 Apple_partition_scheme
/dev/disk1s1 Apple_partition_map
/dev/disk1s2 Apple_HFS /Volumes/Mounted Disk Image
   </pre>

   Note the disk from the message above to unmount (detatch):

   <pre><strong>hdiutil detach /dev/disk1s2
   </strong></pre>

   The same utility can mount .iso images:

   <pre><strong>hdiutil mount sample.iso
   </strong></pre>


<a id="Curlz"></a>

## IPv6 compatibility with Curl command line apps #

   <tt><strong>curl http://localhost:3000</strong></tt>

   Previously, when invoked on Mac OS 10.10 (Yosemite), you needed to add a parameter
   to make the request use IPv4:

   <tt>
   curl http://localhost:3000 <strong>--ipv4</strong>
   </tt>

   Otherwise, even if the URL loads fine in a browser, 
   you will see an error message such as:

   <tt>curl: (7) Failed to connect to localhost port 3000: Connection refused</tt>

   This occurs because curl, under Yosemite, uses IPv6 by default but
   some apps, such as LoopBack.io, by default uses IP v4.

   See if you see IP v6 entries in your hosts file (::1 localhost, fe80::1%lo0 localhost).
   If they are there it is likely that curl is making requests using IP v6. 

You can make your LoopBack app use IPv6 by specifying an IPv6 address as shown below:

<pre>
app.start = function() {
// start the web server
return app.listen(3000, '::1',function() {
app.emit('started');
console.log('Web server listening at: %s', app.get('url'));
});
};
</pre>

## Largest files taking up disk space

Linux has a <strong>ncdu</strong> (NCurses Disk Usage) utility to list files in order of how much space they occupied.

1. It's not in macOS by default, so:

   <pre><strong>brew install ncdu</strong></pre>

   See https://mac.softpedia.com/get/Utilities/ncdu.shtml

1. Now list files within a folder by space used:

   <pre><strong>ncdu</strong></pre>

   The command takes up the whole screen (like top), so press control+C to exit.

1. To get the <strong>directory utilitization</strong> size of the current directory:

   <pre><strong>du -sh</strong></pre>
 
   The response is like:

   <pre>6.7M	.</pre>

   The dot means the current folder. 
   
1. You can specify a sub-folder named, for example, "code":

   <pre><strong>du -sh code</strong></pre>


<a id="EmptyTrash"></a>

## Empty Trash

When files or folders are moved to Trash, they are sent to folder `~/.Trash`.

   * The `~` means it is at your user HOME folder.
   * The `.` means it is a hidden folder.

1. List the files.

   <pre><strong>ls -al ~/.Trash</strong></pre>

1. Count the number files in the folder by piping to the "word count" utility:

   <pre><strong>ls -al | wc -l</strong></pre>
   
   (The `-al` includes hidden files and folders)

   <pre><strong>find . -print | wc -l</strong></pre>

   (The `find .` includes files nested within folders as well)

   The above command is aliased as `cf` in my ~/.bash_profile.

To recover disk space taken up by files which have been moved to Trash, 
   there are several ways:

   <img align="right" alt="macos-finder-104x107-2316.jpg" width="104" src="https://user-images.githubusercontent.com/300046/58622108-1b7f4700-8288-11e9-925e-d7a9697e66d8.jpg">
1. Switch to the Finder and click the Finder menu to expose the menu:

1. You can click on "Empty Trash" or press the Keyboard sequence <strong>shift + command + delete</strong>.

1. If you rather not use a mouse within Finder, switch to Terminal and type this AppleScript command (which will take a while to run if there are a lot of files):

   <pre><strong>osascript -e 'tell app "Finder" to empty'</strong></pre>

   NOTE: How to put the above command is aliased as `empty` in my ~/.bash_profile.

   <a target="_blank" href="https://egghead.io/lessons/bash-schedule-timed-jobs-on-macos-with-launchd">Schedule Timed Jobs on macOS with `launchd`</a> within a plist (XML) file.


## Ulimit Too Many Files

By default, operating systems limit how many file descriptors to allow.
Each operating system version has a different approach.

Linux operating systems have this command:

   <tt><strong>ulimit -a
   </strong></tt>

   On my Sierra the response was:

   <pre>
core file size          (blocks, -c) 0
data seg size           (kbytes, -d) unlimited
file size               (blocks, -f) unlimited
max locked memory       (kbytes, -l) unlimited
max memory size         (kbytes, -m) unlimited
open files                      (-n) 256
pipe size            (512 bytes, -p) 1
stack size              (kbytes, -s) 8192
cpu time               (seconds, -t) unlimited
max user processes              (-u) 709
virtual memory          (kbytes, -v) unlimited
   </pre>

1. Check how many file descriptors you have:

   <tt><strong>launchctl limit maxfiles
   </strong></tt>

   On Sierra the response was:

   <pre>maxfiles    10240          10240</pre>

   The first number is the "soft" number, the second one is the "hard" number.

   After fixing, the numbers I now see are:

   <pre>maxfiles    65536          200000</pre>

1. Such numbers were set with a command such as:

   <tt><strong>sudo launchctl limit maxfiles 10240 10240
   </strong></tt>

   The maximum setting is 12288?

   <a target="_blank" href="https://superuser.com/questions/302754/increase-the-maximum-number-of-open-file-descriptors-in-snow-leopard">
   NOTE</a>: To change maxfiles on Sierra, define a plist. TODO: verify

   Due to security, OSX Lion removed the "unlimited" option and now requires a number to be specified.


PROTIP: `launchctl` is a rough equivalent to the `systemctl` command used in Linux systems.
launchctl interfaces with launchd to load, unload daemons/agents and generally control launchd.

<a name="ElCapitanSIP"></a>

## Disable System Integrity Protection #

Some programs make calls to the operating system which OSX began to see as a threat, beginning with El Capitan.

<a target="_blank" href="https://support.apple.com/en-us/HT204899/">
Apple says</a> System Integrity Protection blocks code injection (and many other things).

But what about useful programs (such as 
<a target="_blank" href="https://www.trankynam.com/xtrafinder/sip.html">
XtraFinder</a>)
which works by injecting its code into Finder and other application processes?

   * For example, OpenVPN issues a JSONDialog Error "DynamicClientBase: JSONDialog: Error running jsondialog".

To get around this, you need to partially disable System Integrity Protection in OS X El Capitan.
See <a target="_blank" href="https://developer.apple.com/library/prerelease/mac/documentation/Security/Conceptual/System_Integrity_Protection_Guide/ConfiguringSystemIntegrityProtection/ConfiguringSystemIntegrityProtection.html">
Apple's article</a> on how:

0. Run a full backup to an external USB drive.
0. Shut down all apps, then the operating system (from the Apple icon).
0. Reboot the Mac. 

   This is needed because System Integrity Protection settings are stored in NVRAM on each individual Mac.
   So it can only be modified from the recovery environment running in NVRAM.

0. Boot OS X into Recovery Mode: hold down the <strong>command + R</strong> keys simultaneously after you hear the startup chime.
0. When the <strong>OS X Utilities</strong> screen appears, pull down the Utilities menu at the top of the screen.

   <amp-img width="650" height="250" alt="scr mac osx reboot" src="https://cloud.githubusercontent.com/assets/300046/15366780/2b09aaca-1ce3-11e6-92e1-7f44ccc54b5d.png">
   </amp-img>

0. Choose Terminal.
0. Type the following command into the terminal before hitting the return key.

   ```
   csrutil disable; reboot
   ```

0. For XtraFinder:

   ```
   csrutil enable \-\-without debug
   ```

0. To revert SIP to original state:

   ```
   csrutil clear
   ```



## Skill Certification #

<a target="_blank" rel="amphtml" href="https://app.pluralsight.com/library/courses/mac-osx-support-installation-configuration/table-of-contents">
Video course Mac OS X Support: Installation and Configure</a>
is the first of courses on Plurasight toward
Apple Certified Support Professional (ACSP)


<a href="#DotFileRepos">

## Dotfile Settings from others #

* https://github.com/afranken/dotfiles
* https://github.com/mathiasbynens/dotfiles


## Daemons and Agents #

* https://developer.apple.com/library/mac/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html


## Resources:

[2] <a target="_blank" href="https://www.youtube.com/watch?v=TJzltwv7jJs&list=PLlcnQQJK8SUjfkCph45fz6rC0de60LVZR&index=5">VIDEO</a>

[3] <a target="_blank" href="http://tldp.org/LDP/abs/html/abs-guide.html">
Advanced Bash-Scripting Guide by Mendel Cooper 2012</a>

[4] <a target="_blank" href="https://www.commandlinefu.com/commands/browse"> CommandLineFu.com</a>

https://zwischenzugs.com/2018/01/06/ten-things-i-wish-id-known-about-bash/
https://leanpub.com/learnbashthehardway

https://blog.flowblok.id.au/2013-02/shell-startup-scripts.html
https://bitbucket.org/flowblok/shell-startup/src/default/

https://linuxaria.com/howto/7-hidden-features-of-bash


## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
