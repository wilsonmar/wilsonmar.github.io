---
layout: post
title: "Mac OSX Terminal (command-line tips and tricks)"
excerpt: "The terminal is your friend, who only speaks a foreign language"
shorturl: "https://goo.gl/Xr2fGW"
tags: [apple, mac, setup]
image:
# feature: pic brown wood apple logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622035/740efa5c-0584-11e6-9a41-db5b03eaff85.jpg
  credit: Green Coffee Lover
  creditlink: http://www.greencoffeelover.com/wp-content/uploads/2015/03/7.jpg
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This tutorial describes how to make use of Terminal to make your life easier and less frustrating.

What Apple calls the Terminal is a Bash shell.


<a id="Terminalz"></a>

## Open Terminal from Finder Folder #

Ways to open a Terminal command line:

   0. Hold down the <strong>command</strong> key down while pressing <strong>tab</strong> multiple times until Finder is highlighted in the pop-up list.

   <br /><br />
      
Get to the Finder list of files and folders:

   0. Hold the Option key and right-click the Finder icon in the Dock, then select Relaunch.

   0. Press the command key with your right hand and option+esc key combo with your left hand
   for the Force Quit menu. Then select the Finder and click Relaunch.

   0. Click the Apple button at the upper-left corner to select <strong>Log out</strong>. 
   Then log back in to your user account.


If you're a developer, it's hard to get away from using a command-line terminal. 
But if you're using a MacOS just for social media, you won't need a Terminal. 
Perhaps that's why it's kinda buried:

0. Click the Finder icon on the bottom.
0. Click Applications on the left pane.
0. Click Utilities.
0. Click Terminal.

   This would place you at your user Home directory.

PROTIP: Since Yosemite, you can open a Terminal to a folder listed within Finder by pointing your mouse on it, then tapping with two fingers on the touchpad/mousepad.

Alternately:

<ol type="1">
<li> Click the Apple icon, System Preferences....</li>
<li> Press K and select Keyboard.</li>
<li> Click Shortcuts, Services.</li>
<li> Scroll to the <strong>Files and Folders</strong> section.</li>
<li> Check on <strong>New Terminal at Folder</strong>.</li>
<li> Close the dialog by clicking the red dot at the upper left corner.</li>
</ol>

<a id="Keyboard"></a>
<a id="ShortKeys"></a>

## Text Command Line Bash Shortcuts #

These come from the bash terminal on Linux machines:

<ul>
<li> control + ` = cycle through session windows</li>
<li> control + left = previous session</li>
<li> control + right = previous session</li>
<p></p>
<li> control + E = Go to End of line<br /></li>
<li> control + A = Go to Beginning of line (as in A to Z)</li>
<p></p>
<li> control + F = Forward cursor</li>
<li> control + B = Backward<br /></li>
<p></p>
<li> control + H = Backspace left of cursor</li>
<li> control + D = Delete right of cursor<br /></li>
<p></p>
<li> control + U = Clean entire line<br /></li>
<li> control + K = Kill line from under the cursor to the end of the line.</li>
<li> control + Y = Retrieve line<br /></li>
<p></p>
<li> control + P = Previous line<br /></li>
<li> control + N = Next line </li>
<p></p>
<li> control + R = Record a shortcut between quotes<br /></li>
</ul>

See https://linuxacademy.com/blog/linux/ten-things-i-wish-i-knew-earlier-about-the-linux-command-line-2/


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

0. If it's not listed, create it with:

   <pre><strong>vi ~/.bashrc
   </strong></pre>

0. To make it rw r r:

   <pre><strong>chmod 644 .bashrc 
   </strong></pre>

0. List only hidden files in the current folder:

   <pre><strong>ls -ld .??*
   </strong></pre>

0. Create a Projects folder to hold projects downloaded from 
   <a href="#Setup_Github">Github</a>:

   <pre><strong>mkdir Projects
   </strong></pre>

   This only needs to be done once.



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

   **&&** - a terminal operator to run whatever's after this if the previous command is successful.

   **killall** - kills processes or closes applications.

   **Finder** - specifies the process or application to close.

For more on this, see http://www.westwind.com/reference/OS-X/invisibles.html


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


<a name="Cat"></a>

## Cat, tac, tail

0. Show text file contents to the Terminal console:

   <pre><strong>cat /etc/hosts
   </strong></pre>

   BLAH: The Linux tac command to list backward is not in Mac:

   <pre><strong>tac /etc/hosts
   </strong></pre>

0. Show a file in -reverse (bottom-up):

   <pre><strong>tail -r -n2 /etc/hosts
   </strong></pre>

   Change n2 to a different number of lines to show.

   PROTIP: This command is useful to see the lastest entries appended to the end of a 
   large log file.

0. Expose spaces at end of lines
   by showing $ end-of-line characters that are otherwise not shown:

   <pre><strong>cat -vet /etc/hosts
   </strong></pre>


<a id="TerminalPingHostz"></a>

## Terminal Ping Host #

Find the IP address of a website host name:

<pre><strong>host microsoft.com</strong></pre>

<pre>
microsoft.com has address 134.170.185.46
microsoft.com has address 134.170.188.221
microsoft.com mail is handled by 10 microsoft-com.mail.protection.outlook.com.
</pre>



<a id="Hosts"></a>

## Hosts file

Mac, Windows, and Linux systems have a hosts file that locally does the work of the public DNS
-- translating host names (typed on browser address field) to IP address numbers.

0. Edit the hosts file on a Mac:

   <pre><strong>atom /etc/hosts
   </strong></pre>

   The default contents:

   <pre>
127.0.0.1 localhost
255.255.255.255 broadcasthost
::1 localhost
fe80::1%lo0 localhost
   </pre>

   <tt>fe80::1</tt> is like 127.0.0.1 for IPV4, but
   actually IP address 169.254.*.* in IPV4, an address not often used.

   fe80:: is a block of IPV6 addresses reserved for link-local addresses used for packets sent only to directly connected devices (not routed). The network discovery protocol (NDP), which replaces ARP and DHCP in IPv4, is the biggest user of link-local addresses (NDP sorta .

   Each IPV6 interface has a different link-local address starting with fe80:: and (typically) ending with a modified version the interface's MAC address (EUI-64 format) to ensure a unique address on a segment. 

   Programs such as OpenVPN add to the bottom of the file:

   <pre>
# BEGIN section for OpenVPN Client SSL sites
127.94.0.1  client.openvpn.net
# END section for OpenVPN Client SSL sites
   </pre>   


0. Flush the cache:

   <pre><strong>dscacheutil -flushcache
   </strong></pre>



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

Flush the DNS cache since OSX 10.9 :

   <tt><strong>
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   </strong></tt>

Previously, OSX 10.7 and 10.8, only the killall was needed.

Previous to that, OSX 10.5 and 10.6, only the decacheutil was needed, without the sudo.

BTW, the equivalent for Ubuntu is `sudo service network-manager restart`
while other Linux flavors uses `sudo /etc/init.d/nscd restart`.
Windows uses `ipconfig /flushdns`.




<a id="DNSClearz"></a>

## Clear DNS Cache Cache

<a index="_blank" href="http://coolestguidesontheplanet.com/clear-the-local-dns-cache-in-osx/">
Different commands</a> are needed for different versions of OS.
<strong>OSX 10.10</strong> added requirement for sudo when using the 
built-in discoveryutil:

<tt>sudo discoveryutil udnsflushcaches</tt>

<strong>OSX 10.9</strong>

<tt>dscacheutil -flushcache;<br />
sudo killall -HUP mDNSResponder</tt>

<strong>OSX 10.7  to 10.8</strong>

<tt>sudo killall -HUP mDNSResponder</tt>

<strong>OSX 10.5 to 10.6</strong>

<tt>sudo dscacheutil -flushcache</tt>

<strong>Windows</strong> by contrast:

<tt>ipconfig /flushdns</tt>

<strong>Linux (depending on the flavor running)</strong>

<tt>/etc/init.d/named restart<br />
/etc/init.d/nscd restart</tt>


### Create Terminal Aliases #

Most developers leave files un-hidden.
But if you want to just type <strong>showFiles</strong> and <strong>hideFiles</strong> 
to show and hide Mac OS X’s hidden files, consider
<a target="_blank" rel="amphtml" href="http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/">
this article</a> to create such terminal aliases.

An example is an alias for the tree command by adding
this in the ~/.bash_profile script:

   <pre>
   alias tree="find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'"
   </pre>

Alternately:

### Brew install tree #

OSX does not come with the tree command that many other Linux distributions provide.
So add it using brew:

   <pre><strong>brew install tree
   </strong></pre>

Active Terminal sessions need to be closed so new Terminal | Shell | New Window | Shell has this activated.

See list of parameters:

   <pre><strong>tree \-\-help
   </strong></pre>

List only 2 levels deep with human-readable file size kilobytes and sort by last modified date:

   <pre><strong>tree -L 2 -s -h -p -D -t
   </strong></pre>


<a id="BashConfigz"></a>

## Bash Profile Configuration #

The profile file is run during <strong>boot-up</strong>
to configure the terminal 
to define file path, shims, and autocompletion handlers.

This is the single biggest frustration with people using Linux on Mac.


One of the earliest articles on bash at
http://www.macdevcenter.com/pub/a/mac/2004/02/24/bash.html
shows shell variables, environment variables, and aliases.

Each operating system has its own file name for its profile:

<ul>	
<li> With Ubuntu: Modify ~/.profile instead of ~/.bash_profile.</li>
<li> With Zsh: Modify ~/.zshrc file instead of ~/.bash_profile.</li>
<li> With Fish: Modify `~/.conf/fish/config.sh` to append.</li>
</ul>

If there is both a .bash_profile and a .profile file, boot-up only executes the first one it finds.

On my Yosemite Mac, open a terminal and:

   <pre><strong>cd ~
   </strong></pre>

View the file using the vi editor that comes with OSX:

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

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
</pre>

Exit vi by typing <tt>:q</tt>


Some installers request that adding a $PATH using a command such as:

   <pre>
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.bash_profile
   </pre>

To execute profile with the changes:

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


To run a bash script while avoiding the confirmation prompt:

   <tt><strong>set \-\- -f; source bootstrap.sh
   </strong></tt>


<a id="Terminalz"></a>

## Terminal Usage #

This page contains notes for system administrators and developers,
who need to control Macs below the UI level, which require
typing commands into a command-line terminal screen.

To list open files (process id's and ports, actually):

   <pre><strong>sudo lsof -i -P
   </strong></pre>

To avoid text wrapping, pull the right edge to expand the screen width.

The right-most column heading &quot;Name&quot; shows the port
(either TCP or UDP).

To filter a particular port number:

   <pre><strong>sudo lsof -i -P | grep 8080
   </strong></pre>

The second column, PID, lists the process identifier.
Copy a number for use in the kill command:

   <pre><strong>sudo kill 289
   </strong></pre>



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

Distriwatch.com describes releases.




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

## Edit terminal prompt setting #

<div class="sidenote">
Paul Irish offers his setup-a-new-machine.sh at
https://github.com/paulirish/dotfiles

ZShell (included with Mac and can be set as the default in Terminal)
* oh-my-zsh as a ZShell framework
* The oh-my-zsh Git plugin
* And the oh-my-zsh theme called jnroweï»¿
</p></div>

By default, if you have a long file name, it would leave little room to type in commands before it wraps to the next line.

<a target="_blank" rel="amphtml" href="http://code.tutsplus.com/tutorials/how-to-customize-the-command-prompt--net-20586">
To redefine what appears in the prompt</a>,
edit this file using the vi editor that comes with each Mac:
<tt>
vi .bashrc 
</tt>
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

Exit from the Terminal shell:
<tt>
exit
</tt>




<a id="EnvVarz"></a>

## Environment Variables

Like on PCs, the PATH environment variable stores
where the operating system should look to find
a particular program to execute.

A big reason to use a command-line terminal is to set environment variables.

To see what is already defined:

   <pre><strong>export
   </strong></pre>

http://stackoverflow.com/questions/135688/setting-environment-variables-in-os-x
talks about setting <strong>launchd.conf</strong> and rebooting.
This applies to all users.


To see what was already defined:

   <pre><strong>echo $PATH
   </strong></pre>

$PATH must be upper case.

The response I'm getting is:

<tt>
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
</tt>


<a id="RootSudoz"></a>

## Root user for sudo commands

The root user has the ability to relocate or remove required system files and to introduce new files in locations that are protected from other users.

Any user with an administrator account can become the root user or reset the root password.
A root user has the ability to access other users' files.

Under a Unix system like Mac OS X you must have "root" (administrative) privileges to start IP-services using ports smaller than 1024.

After Mac install, the root or superuser account is not enabled. 
While it is possible to enable the root account, 
once enabled, if forgetten, you'll have to 
<a target="_blank" rel="amphtml" href="http://danfrakes.com/2014/10/16/how-to-make-a-bootable-yosemite-installer-drive/">
reboot from the installer drive</a> (a hassle).

It is safer and easier to use the sudo command to gain temporary root access to the system.

DOTHIS: 
In a Terminal window invoke:

<tt>sudo -s</tt>
After I type in my password, the response for me is the version of bash:

<tt>bash-3.2# </tt>

to demote out of root:

<tt>exit</tt>

DO THIS:
The folders that bash looks into are:

<tt>/bin/echo $PATH</tt>

On a fresh Yosemite, its:

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

Clear the terminal history:

<strong>clear</strong>



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

.dmg (Disk Image) files can be mounted from the command line:

   <pre><strong>hdiutil attach /path/to/diskimage.dmg
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




<a id="DevFolderz"></a>

## Folders accessed by developers

DOTHIS: 
In Finder, select from the left panel the first item under the 
<strong>Devices</strong> list.

Click on <strong>Macintosh HD</strong>.

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

DOTHIS:
Click on your username (wilsonmar in my case).
This action is the same as clicking on the last default item under the
Favorites list.

Many WordPress developers prefer to add a folder named <strong>Sites</strong>
which holds the wordpress folder expanded from download.



<a id="Curlz"></a>
## IPv6 compatibility with Curl command line apps #

<tt>
curl http://localhost:3000
</tt>

When invoked on Mac OS 10.10 (Yosemite), you need to add a parameter
to make the request using IPv4:

<tt>
curl http://localhost:3000 <strong>--ipv4</strong>
</tt>

Otherwise, you will see an error message such as:

<tt>
curl: (7) Failed to connect to localhost port 3000: Connection refused
</tt>

even if the URL loads fine in a browser.

This occurs because curl, being under Yosemite, uses IPv6 by default but
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

## Ulimit Too Many Files

By default, operating systems limit how many file descriptors to allow.
Each operating system version has a different approach.

Linux operating systems have this command:

   <tt><strong>ulimit -a
   </strong></tt>

   On my Sierra the response is:

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


Check how many file descriptors you have:

   <tt><strong>launchctl limit maxfiles
   </strong></tt>

   On Sierra the response is:

   <pre>
   maxfiles    10240          10240    
   </pre>

   The first number is the "soft" number, the second one is the "hard" number.

   Such numbers were set with a command such as:

   <tt><strong>sudo launchctl limit maxfiles 10240 10240
   </strong></tt>

The maximum setting is 12288?

<a target="_blank" href="https://superuser.com/questions/302754/increase-the-maximum-number-of-open-file-descriptors-in-snow-leopard">
NOTE</a>: To change maxfiles on Sierra, define a plist. TODO: verify

Due to security, OSX Lion removed the "unlimited" option and now requires a number to be specified.

   <tt>sudo launchctl limit maxfiles unlimited
   </tt>


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


## Shutdown

To kill all apps and shutdown a Mac right wasy (with no warning and no dialog):

   <tt><strong>sudo shutdown -h now
   </strong></tt>


## Resources:

* https://www.hamsterpad.com/chat/typescriptpdx
   Typescript Slack group

## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
