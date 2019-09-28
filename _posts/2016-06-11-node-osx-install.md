---
layout: post
title: "Node.js Installation on MacOS"
excerpt: "JavaScript packaged by npm for the win!"
tags: [node, javascript, apple, mac, setup]
date: "2016-06-11"
file: "node-osx-install"
image:
# feature: pic orange wm_mcnaughton_sunset_runner_1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622121/097d7550-0585-11e6-9543-27d45c2487c2.jpg
  credit: William McNaughton
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The objective of this tutorial is to spare you the pain and confusion
around installing, updating, and uninstalling 
the various editions and versions of Node (aka NodeJs, with Js for JavaScript).

## Why Node?

![npm-modules-ftw-566x369](https://user-images.githubusercontent.com/300046/38767577-2cb6d324-3fa1-11e8-9285-614afc0a82e5.jpg)

Popularity is manifested in the number of new modules being contributed.
And Node is fast. It's portable. What's not to like?


<a name="Editions"></a>

## Different editions #

Installing Node has become complex due to the drama behind
<a href="#Editions">different editions</a> and 
<a href="#Versions">versions</a> of Node with
different mechanisms for managing updates,
each with <a target="_blank" href="https://docs.npmjs.com/getting-started/fixing-npm-permissions">
permissions issues</a>.

For these reasons, many instructions on the internet are outdated, contradictory, or plain wrong.


Node.js was started as an open-source project in 2009 by
<strong>Ryan Dahl</strong>.
Its second contributor was Isaac Schlueter who now leads the project.
The project had a total of 447 core contributors as of 2016. 
Dahl was employed by <a target="_blank" href="https://www.joyant.com/">Joyent.com</a>
during much of Node’s development, 
and Joyent continues to sponsor Node. 
Joyent has raised in the neighborhood of $100 million in venture capital 
and has an employee headcount in excess of 120.
Joyent as a cloud computing company was purchased in 2015 by Samsung (Korea).


<a name="LTS"></a>

### Long Term Support #

<a target="_blank" href="https://github.com/nodejs/LTS/">
Long Term Support</a> releases, introduced Fall, 2015, 
are actively developed for 18 months,
then maintained for a further 12 months. 
This means a particular LTS release stays in production for 30 months
with bug and security fixes.

![https://github.com/nodejs/Release](https://github.com/nodejs/Release/raw/master/schedule.svg?sanitize=true)

PROTIP: Odd numbered versions are not destined for active status, unstable development versions.

There are two versions active at the same time.


<a name="NjSolid"></a>

### N|Solid #

<a target="_blank" href="https://nodesource.com/products/nsolid">
N|Solid from NodeSource</a>
   is a "fully compatible Node.js runtime 
   enhanced to address the needs of enterprise production support."

   Their disto provides a GUI and a way to pull telemetry for V8
   <strong>process monitoring</strong>.

   <a target="_blank" href="https://downloads.nodesource.com/">
   https://downloads.nodesource.com</a>

   Again, this is a licensed product. I've heard that they
   provide support at $1,000 per developer per month ($12,000 per year).

### StrongLoop to IBM

<a target="_blank" href="http://venturebeat.com/2013/09/18/can-this-startup-steal-node-from-joyent-vcs-bet-8m-on-it/">
A VentureBeat article in 2013</a> writes 
"Two programmers named Ben Noordhuis and Bert Belder have founded a new company called 
<a target="_blank" href="https://www.strongloop.com/">StrongLoop</a>. 
And they’re apparently attempting to hijack the Node brand and community for themselves."
Strongloop supports Express and LoopBack frameworks.
<a target="_blank" href="https://strongloop.com/strongblog/node-js-community-ibm-acquisition/">
On 10 Sep 2015</a>, StrongLoop was acquired as IBM API Connect, which focuses on the API lifecycle.


<a name="iojs"></a>

### io.js is gone #

In 2013 
<a target="_blank" href="https://iojs.org/">
iojs.org</a>, 
a fork of Node.js was formed by several core committers frustrated by Joyant.

Then <a target="_blank" href="http://www.infoworld.com/article/2914588/node-js/new-nodejs-coalition-spotlights-enterprises.html">
on September, 2015</a>, io.js merged with the Node.js project again
under new <a target="_blank" href="https://nodejs.org/en/foundation/">
nodejs.org/en/foundation</a> governance.

<a target="_blank" href="https://www.binarysludge.com/2015/01/14/how-to-uninstall-io-js-or-io-js-and-node-js-together/">
Uninstall</a>



<a name="Versions"></a>

### Which version of what? #

QUESTION: What are the install instructions 
If you're an enterprise user paying for LTS?

Instead of using an internet browser to download an installer from<br />
   <a target="_blank" href="https://nodejs.org/en/download/releases/">
   https://nodejs.org/en/download/releases/</a><br />
   consider these:

   * <strong>nvm</strong> (node version manager) is a shell function that downloads and upgrades
   versions of node.js.
   It's not needed unless you want to keep and upgrade multiple versions of Node.js.
   But you will eventually will need to.

   * <strong>npm</strong> (node package manager) installs JavasSript packages such as Express.js.

   Ideally, we would have both nvm and npm on the same machine, each configured the way we want for maximum productivity.

   However, there is a conflict between the ideal way of installing npm with how nvm works.

   The ideal way to install most applications is to 
   NOT need to use the <strong>sudo</strong> prefix command to temporarily elevate permissions.
   
   On a Mac, by default, npm is installed in the <strong>.npm</strong> folder.

   To make it work, we install it in the <strong>.npm-packages</strong> folder
   by placing a configuration setting.

   However, nvm does not recognize that configuration setting
   and thus only works with plugins installed in the default .npm folder.

   Yes, why can't people from nvm and npm get together and work things out?

   Thus, a choice needs to be made.


<a name="ChooseAWay"></a>

## Choose among alternatives #

Click on one of the <strong>mutually exclusive</strong>
variations of installing Node for
additional information and instructions:

* A: <a href="#Homebrew">Brew install node WITHOUT npm, then install .npm-packages with no nvm</a>. 

   This is what I recommend after <a href="#YarnInstall">hassling with yarn installation</a>.

* B: "N" from <a href="https://github.com/tj/n">github.com/tj/n</a>

   "Node.js version management: no subshells, no profile setup, no convoluted API, just simple."

   http://theholmesoffice.com/node-js-fundamentals-how-to-upgrade-the-node-js-version/

* C: <a href="#NVMInstall">Install NVM</a>, 
   then <a href="#NVMuse">install Node using NVM</a>. 

   Installing Node automatically installs NPM.

   * https://docs.npmjs.com/getting-started/fixing-npm-permissions
   <br /><br />

* D: <a href="#LTS">Download LTS (Long Term Support) v4.x 
   from NodeJs website</a> 
   and run the installer manually.

* E: <a href="#Download">Download latest version v6.x 
   from NodeJs website</a>
   and run the installer manually.

* F: <a href="#NjSolid">Download latest version of N|Solid</a>.
   <br /><br />

   CAUTION: Even though pricing for NodeSource is NOT published on the website doesn't mean it's free.
   I've heard pricing for both Joyant and NodeSource start at around $1,000 per month per developer.


<hr />


<a name="VerifyNode"></a>

## Verify Install

These instructions are used when both verifying a new setup and 
when obtaining facts when troubleshooting an established setup.

Return here after installation.

PROTIP: Before you speak to someone about this, provide them your operating system facts, 
   obtained using instructions here:

0. Operating system information:

   <tt><strong>uname -a
   </strong></tt>

   On my machine, the response:

   <pre>
   Darwin macs-MacBook-Pro-4.local 16.7.0 Darwin Kernel Version 16.7.0: Thu Jun 15 17:36:27 PDT 2017; root:xnu-3789.70.16~2/RELEASE_X86_64 x86_64
   </pre>


0. Obtain node version:

   <tt><strong>node -v
   </strong></tt>

   At time of writing, the response for the most recent version:

   <pre>
   v8.3.0
   </pre>

0. Obtain npm version:

   <tt><strong>npm -v
   </strong></tt>

   At time of writing, the response (for the Node version obtained above):

   <pre>
   5.3.0
   </pre>

0. Verify:

   <tt><strong>echo $NODE_PATH
   </strong></tt>

   The response if installed by NVM or by downloaded installer:

   <pre>
   /usr/local/bin
   </pre>

   The response if installed using brew:

   <pre>
   /Users/mac/.npm-packages/lib/node_modules:/usr/local/bin
   </pre>

   Regardless of how you installed node,
   before discussing your installation, obtain and present the facts above.

0. From any folder, for just a simple list of package names:

   <tt><strong>ls \`npm root -g\`
   </strong></tt>

   PROTIP: npm itself is a Node package.

   Alternately, list global npm packages installed as a tree:

   <tt><strong>npm list -g \-\-depth=0
   </strong></tt>

   The response is a list with version numbers:

   <pre>
/Users/mac/.npm-packages/lib
├── aws@0.0.3-2
├── aws-cli@0.0.1
├── bower@1.7.9
├── express@4.13.4
├── grunt@1.0.1
├── grunt-cli@1.2.0
├── gulp@3.9.1
├── learnyounode@3.5.3
├── mocha@2.5.3
├── moment@2.14.1
├── node-lambda@0.8.5
├── n@2.1.0
├── npm@3.9.5
└── serverless@0.5.6
   </pre>

   Note the first line in the response shows the folder.


0. List what modules are installed in the traditional location for Node:

   <tt><strong>ls /usr/local/lib/node_modules
   </strong></tt>

   * bower
   * firebase-tools 
   * generator-karma
   * grunt
   * grunt-cli
   * http-server 
   * gatsby
   * iothub-explorer
   * mocha
   * yo
   * traceur
   * serverless
   * npm
   <br /><br />

   QUESTION: When Node is installed using Homebrew,
   same location?

   ### Does node REPL work? #

0. Initialize the Node command-line:

   <tt><strong>node
   </strong></tt>

   The response is simply a `>` character.

0. Type this command:

   <tt><strong>console.log('Node is running');
   </strong></tt>

   The response should reflect what is in the command.

0. From inside REPL, get a list of commands (with a leading dot):

   <tt><strong>.help
   </strong></tt>

   PROTIP: Node interactive commands begin with a dot.

   The response:

   <pre>
.break Sometimes you get stuck, this gets you out
.clear Alias for .break
.exit  Exit the repl
.help  Show repl options
.load  Load JS from a file into the REPL session
.save  Save all evaluated commands in this REPL session to a file
   </pre>

0. To get out gracefully:

   <tt><strong>.exit
   </strong></tt>

   Alternately, you can (crudely) press control+C to abort the process.


<hr />



<a name="NodeVersionsInstalled"></a>

## Node Versions Installed

   Traditionally,
   NVM (Node Version Manager) installs multiple versions of Node.

0. List what versions of Node are installed:

   <tt><strong>nvm ls
   </strong></tt>
 
   Sample response:

   <pre>
         v4.5.0  
         v6.4.0  
         v6.8.1  
default -> node (-> v6.8.1)
node -> stable (-> v6.8.1) (default)
stable -> 6.8 (-> v6.8.1) (default)
iojs -> N/A (default)
lts/* -> lts/argon (-> N/A)
lts/argon -> v4.6.0 (-> N/A)   
   </pre>

   PROTIP: Most don't need multiple versions of Node at once.

   PROTIP: Using NVM <strong>conflicts with Homebrew</strong>.
   Since many prefer to use Homebrew for everything else,
   it's annoying to remember such exceptions.

   <pre><strong>nvm install node --reinstall-packages-from=node
   </strong></pre>



   ### NPM Packages

   The installer of Node also installs NPM (Node Package Manager)
   which manages installation of Node packages.

0. List what versions of NPM are available for install from the internet:

   <tt><strong>nvm ls-remote
   </strong></tt>

   At time of this writing, there were 376 versions.

0. List what modules are available for install from the internet:

   <tt><strong>nvm 
   </strong></tt>

0. List files in the traditional location when NPM installs Node packages:

   <tt><strong>ls ~/.npm
   </strong></tt>

   Also:
    
   <tt><strong>ls /usr/local/lib/node_modules/npm/node_modules
   </strong></tt>

   On Windows:<br />
   <pre>
   C:\Users\username\AppData\Roaming\npm\
   </pre>

   Examples:

   * semver
   * xml
   * y18n


<a name="NVMuse"></a>

## NVM #

NVM (Node Version Manager) downloads and installs multiple versions of Node.js,
then enables using a specific version of Node,
using a command such as this (after installation and cd to your node app folder):

   <tt><strong>nvm run 4.5.0 app.js 
   </strong></tt>

   The above is for the LTS (Long Term Support) version.

   If instead you want to run the <strong>latest</strong> versions of Node:

   <pre><strong>nvm run 6.4.0 app.js 
   </strong></pre>

   PROTIP: Remember that there is no "v" to specify a version, unlike the install command:

   <tt><strong>nvm install v4.5.0
   </strong></tt>

   To do the above, you first have to install NVM and Node, described in the steps below.


<a name="NVMInstall"></a>

### NVM Install #

Installation steps:

0. PROTIP: Use an iternet browser to read the README.md at 
   <a target="_blank" href="https://github.com/creationix/nvm/blob/master/README.markdown">
   https://github.com/creationix/nvm</a> 

0. Note the version of installer:

   <pre>
   v0.31.6/install.sh
   </pre>

0. If you've installed <a href="#ChooseAWay">another way</a> before,
   make sure that if you have an <strong>~/.npmrc</strong> file, 
   it does not contain any prefix settings (which is not compatible with nvm):

   <tt><strong>
   atom ~/.npmrc
   </strong></tt>

   An example:

   <pre>
   prefix=/Users/mac/.npm-packages
   </pre>

   PROTIP: This file is used by "Option A" above, thus the mutually exclusive options.


0. Install C++ Compiler.

   NVM uses a C++ compiler installed
   with <a target="_blank" href="http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/">
   Apple's stand-alone Command Line Tools</a> also within Apple's XCode application.

   The README at <a target="_blank" href="https://github.com/creationix/nvm">
   https://github.com/creationix/nvm</a> notes that it uses a C++ compiler installed
   with <a target="_blank" href="http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/">
   Apple's stand-alone Command Line Tools</a> also within Apple's XCode application.

0. Agree to Apple's license:

   <tt><strong>
   sudo xcodebuild -license
   </strong></tt>

   Type in your root password, hold down Enter until it stops, then type agree and Enter.

0. Install NVM using wget: 

   <tt><strong>
   wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.6/install.sh | bash
   </strong></tt>

   PROTIP: The instructions say either curl or wget, but I prefer using wget because it is not installed by default,
   and nvm requires it. So if you don't have wget, better to know it sooner than later.

   The command installs to hidden folder `~/.nvm` and
   looks into the `~/.bashrc` file used by Linux machines.
   More on this soon.

   The response:

   <pre>
=> Downloading nvm from git to '~/.nvm'
=> Cloning into '~/.nvm'...
remote: Counting objects: 5275, done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 5275 (delta 0), reused 0 (delta 0), pack-reused 5271
Receiving objects: 100% (5275/5275), 1.44 MiB | 493.00 KiB/s, done.
Resolving deltas: 100% (3177/3177), done.
Checking connectivity... done.
bash: line 73: cd: ~/.nvm: No such file or directory
&nbsp;
=> Source string already in /Users/mac/.bashrc
=> You currently have modules installed globally with `npm`. These will no
=> longer be linked to the active version of Node when you install a new node
=> with `nvm`; and they may (depending on how you construct your `$PATH`)
=> override the binaries of modules installed with `nvm`:
&nbsp;
/usr/local/Cellar/node/6.3.1/lib
├── less@2.7.1
├── resume-cli@0.4.13
└── stylus@0.54.5
&nbsp;
=> If you wish to uninstall them at a later point (or re-install them under your
=> `nvm` Nodes), you can remove them from the system Node as follows:
&nbsp;
     $ nvm use system
     $ npm uninstall -g a_module
&nbsp;
=> Close and reopen your terminal to start using nvm
   </pre>

   If you see this instead:

   <pre>
=> nvm is already installed in /Users/mac/.nvm, trying to update using git
=> 
=> Source string already in /Users/mac/.bashrc
=> You currently have modules installed globally with `npm`. These will no
=> longer be linked to the active version of Node when you install a new node
=> with `nvm`; and they may (depending on how you construct your `$PATH`)
=> override the binaries of modules installed with `nvm`:
&nbsp;
/usr/local/Cellar/node/6.2.2/lib
└── grunt@1.0.1
&nbsp;
=> If you wish to uninstall them at a later point (or re-install them under your
=> `nvm` Nodes), you can remove them from the system Node as follows:
&nbsp;
     $ nvm use system
     $ npm uninstall -g a_module
&nbsp;
=> Close and reopen your terminal to start using nvm
   </pre>

   CAUTION: NVM does not recognize the PREFIX used in the
   <a href="#AltFolder"> Alternate folder technique</a>.
   So we would need to live with just elevated permissions.

   What the above does is equivalent to:

   <tt><strong>cd ~<br />
   git clone http://github.com/creationix/nvm.git .nvm
   </strong></tt>

   So the command above is what <a target="_blank" href="http://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found">
   some recommend</a> to fix issues with nvm install.

0. Verify:

   <tt><strong>
   nvm \-\-version
   </strong></tt>

   If you get a version code such as the below (25 August 2016), proceed to 
   <a href="#UseNVM">use NVM</a>.

   <pre>
   0.31.6
   </pre>

   TROUBLESHOOTING: 
   If instead of the version code, this message appears:

   <pre>
   -bash: nvm: command not found
   </pre>

0. Edit the file that Mac uses to initiate Terminal,
   using atom or other editor (vi, nano, etc.)

   <tt><strong>subl ~/.bash_profile
   </strong></tt>

   Add to the bottom of the file:

   <tt><strong>
   \#\# Export the NVM path and run its shell:<br />
   export NVM_DIR="$HOME/.nvm"<br />
   [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
   </strong></tt>


0. Restart Terminal so it takes:

   <tt><strong>
   source ~/.bash_profile
   </strong></tt>

0. To verify that nvm has been installed:

   <tt><strong>command -v nvm
   </strong></tt>

   NOTE: nvm is a shell script, not an executable, so the usualy `where` command does not work.

   The response should be:

   <pre>
   nvm
   </pre>


0. To verify that nvm has been installed:

   <tt><strong>
   echo $NVM_DIR
   </strong></tt>

   The response should be (where "mac" is substituted with your own user id):

   <pre>
   /Users/mac/.nvm
   </pre>


0. For a list of commands, type nvm by itself:

   <tt><strong>nvm
   </strong></tt>

   PROTIP: Widen the screen to avoid text wrapping.


   ### Upgrade NVM #

0. To download, compile, and install the latest v5.0.x release of node:

   <tt><strong>nvm install 
   </strong></tt>

   The response:

   <pre>
Downloading https://nodejs.org/dist/v5.0.0/node-v5.0.0-darwin-x64.tar.xz...
######################################################################## 100.0%
nvm is not compatible with the npm config "prefix" option: currently set to "/Users/mac/~/.nvm/versions/node/v5.0.0"
Run `npm config delete prefix` or `nvm use --delete-prefix v5.0.0` to unset it.
   </pre>


   <a name="UseNVM"></a>

   ### Use NVM to install Node #

0. To list what versions of Node.js are installed:

   <tt><strong>nvm ls
   </strong></tt>

   The response is like this:

   <pre>
->       v6.4.0  
         system  
default -> node (-> v6.4.0)
node -> stable (-> v6.4.0) (default)
stable -> 6.4 (-> v6.4.0) (default)
iojs -> N/A (default)
lts/* -> lts/argon (-> N/A)
lts/argon -> v4.5.0 (-> N/A)
   </pre>


   <a name="nvmls-remote"></a>

   ### Available to install #

0. To list what versions of Node.js are available to install:

   <tt><strong>nvm ls-remote
   </strong></tt>

   Scroll to "(Latest LTS: Argon)", such as:

   <pre>
   v4.5.0   (Latest LTS: Argon)
   </pre>

   It's <a href="#LTSinstall">installed by these instructions</a>.


   The latest version is at the bottom of the list, such as:

   <pre>
   v6.4.0
   </pre>


   ### Clear NPM Cache

   <pre><strong>sudo npm cache clean -f
   </strong></pre>
   

   ### Install latest version #

0. <strong>Install the latest version of Node.js:<strong>

   <tt><strong>nvm install node
   </strong></tt>

   The response:

   <pre>
Downloading https://nodejs.org/dist/v6.8.1/node-v6.8.1-darwin-x64.tar.xz...
######################################################################## 100.0%
Now using node v6.8.1 (npm v3.10.8)
   </pre>

   Notice that there is specific version of npm to support each version of Node.

   TROUBLESHOOTING:
   If these message also appear:

   <pre>
   perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
   LC_ALL = (unset),
   LC_CTYPE = "en_US.utf-",
   LANG = "en_US.UTF-8"
    are supported and installed on your system.
perl: warning: Falling back to the standard locale ("C").
tar: Failed to set default locale
   </pre>

   As <a target="_blank" href="https://blog.remibergsma.com/2012/07/10/setting-locales-correctly-on-mac-osx-terminal-application/">
   this advises</a>,
   get rid of those messages on the Mac by going to Terminal > Preferences > Advanced tab
   to uncheck “Set locale environment variables on startup”:

   <amp-img alt="mac terminal local on startup 10 11-309x87-26kb.jpg" width="309" height="87" src="https://cloud.githubusercontent.com/assets/14143059/17975924/9d2282ea-6aa8-11e6-9741-b85448d1068d.jpg"></amp-img>
   <br /><br />

   Exit Terminal to activate it or you'll see the message again.


   ### Uninstall Node version #

   Installing does not automatically uninstall previous versions.

0. To uninstall a version:

   <tt><strong>nvm uninstall v6.4.0
   </strong></tt>

   The response:

   <pre>
   Uninstalled node v6.4.0
   </pre>


   <a name="LTSinstall"></a>

0. Install the most recent LTS version of Node according to 
   <a href="#nvmls-remote">nvm ls-remote</a>:

   <tt><strong>nvm install v4.5.0
   </strong></tt>

0. <a href="#VerifyInstall">Verify install</a>.

<hr />



<a name="NpmPackageInstall"></a>

## Install node and .npm-packages without npm #

Ths recommended by
<a target="_blank" href="https://gist.github.com/DanHerbert/9520689">
Advice on fixing npm On Mac OS X for Homebrew Users</a>


   <a name="Uninstall"></a>

### Uninstall default Brew install #

0. If node was previously installed, uninstall it:

   <pre><strong>brew uninstall node --ignore-dependencies node
   </strong></pre>

   No damage is done if this command is run even though brew is already uninstalled.

0. If node was previously installed,
   these folders have been <a target="_blank" href="http://opendaylight-spectrometer.readthedocs.io/en/latest/developer.html">known</a> to block re-install,
   so remove them by using the code below:

   <pre><strong>
   sudo rm '/usr/local/lib/dtrace/node.d'
   sudo rm '/usr/local/bin/npn'
   sudo rm '/usr/local/bin/node'
   sudo rm '/usr/local/share/doc/node/gdbinit'
   sudo rm '/usr/local/share/man/man1/node.1'
   sudo rm '/usr/local/share/systemtap/tapset/node.stp'
   sudo rm '/usr/local/share/systemtap/tapset'
   </strong></pre>

   Supply your password when prompted.

0. Remove locations where Node can be installed:

   <pre><strong>
   sudo rm -rf $NODE_INSTALL/bin/node 
   sudo rm -rf $NODE_INSTALL/bin/npm 
   sudo rm -rf $NODE_INSTALL/include/node 
   sudo rm -rf $NODE_INSTALL/lib/node_modules 
   sudo rm -rf ~/.npm
   </strong></pre>


   ### Create .npm-packages folder #

0. Create the ~/.npm-packages folder:

   <tt><strong>mkdir "${HOME}/.npm-packages"
   </strong></tt>

0. To avoid permission issues:

   <pre><strong>
   sudo chown -R $USER:$GROUP ~/.npm-packages
   sudo chown -R $USER:$GROUP ~/.config
   sudo chown -R $USER:admin /usr/local/
   sudo chown -R $USER:admin /usr/local/include
   </strong></pre>

   Provide your password when prompted.

0. Indicate to npm where to store globally installed packages
   by adding a line at the bottom of the ~/.npmrc file:

   <tt><strong>echo prefix=~/.npm-packages >> ~/.npmrc
   </strong></tt>

   WARNING: NVM does not support this, which is OK since we are doing this to get away
   from using it anyway.

0. Confirm:

   <tt><strong>cat ~/.npmrc
   </strong></tt>


0. Install node without default NPM:

    <tt><strong>brew install node \-\-without-npm -g
    </strong></tt>

   Alternately, install npm for global use:

   <pre><strong>curl -L https://www.npmjs.com/install.sh | sh
   </strong></pre>

   The response:

   <pre>
==> Downloading https://nodejs.org/dist/v8.3.0/node-v8.3.0.tar.xz
######################################################################## 100.0%
Initialized empty Git repository in /private/tmp/node-20170813-85661-dx56ff/node-v8.3.0/.git/
==> ./configure --prefix=/usr/local/Cellar/node/8.3.0_1 --without-npm --with-int
==> make install
   </pre>

0. If you also get this message:

   <pre>
==> Caveats
Homebrew has NOT installed npm. If you later install it, you should supplement
your NODE_PATH with the npm module folder:
  /usr/local/lib/node_modules
==> Summary
🍺  /usr/local/Cellar/node/8.3.0_1: 149 files, 29.7MB, built in 8 minutes 18 seconds
   </pre>


   ### Define NODE_PATH

0. Edit the ~/.bash_profile to insert these lines:

   <pre><strong>
export NODE_INSTALL=/usr/local/bin/node
export NODE_PATH=/usr/local/bin   
# =/usr/local/lib/node_modules
   </strong></pre>

   BTW, ~/.bash_profile on Mac is equivalent to the .bashrc file used in Linux systems.

0. To ensure npm will find installed binaries and man pages,
   add a NPM_PACKAGES environment variable containing the path to npm-installed packages
   into the system PATH variable:

   <pre><strong>NPM_PACKAGES="${HOME}/.npm-packages"<br />
   PATH="$NPM_PACKAGES/bin:$PATH"
   </strong></pre>

   Use of `${HOME}` makes the path more generic and less complicated
   than having to substitute your user name such as "mac":

   <pre>
   /Users/mac/.npm-packages/
   </pre>

0. Save the file and make sure the changes run fine:

   <tt><strong>source ~/.bash_profile
   </strong></tt>

0. Make sure that the Mac's executable search PATH contains the node executable is in the PATH:

   <tt><strong>echo $PATH
   </strong></tt>

   If not add it to the system PATH:

   <pre>
   export NODE_PATH=/usr/local/bin
   </pre>


   ### Verify Node Version

   After install, 

0. verify whether the node program works:

   <tt><strong>node \-\-version
   </strong></tt>

   The response should be its version, such as:

   <pre>
   v8.3.0
   </pre>


0. To identify where node executables are installed:

   <tt><strong>which node
   </strong></tt>

   the response:

   <pre>
   /usr/local/bin/node
   </pre>

0. See that Node is one among many other programs at:

   <tt><strong>ls /usr/local/bin | grep node
   </strong></tt>


BTW, an alternative to NVM is "N" from https://github.com/tj/n.
However, I never got it to work for me.


<hr />

<a name="Homebrew"></a>

## Brew standard install #

0. If you have already followed instructions at my [Homebrew installation tutorial](/apple-mac-osx-homebrew/)
   to install Homebrew:

   <a href="#NpmPackageInstall">Click here if you want to go straight to the recommended option B</a>.

   WARNING: Homebrew installs Node to a different location than other ways.

0. Be aware of your present current directory:

   <tt><strong>pwd
   </strong></tt>

   <strong>CAUTION: Without specifying the `-g` in the next command, 
   installation is whatever is the current folder.</strong>

0. Install node <strong>globally</strong> using Homebrew:

   <tt><strong>brew install node -g
   </strong></tt>

   The initial response at time of writing (August 2017):

   <pre>
==> Downloading https://homebrew.bintray.com/bottles/node-8.3.0_1.sierra.bottle.
Already downloaded: /Users/mac/Library/Caches/Homebrew/node-8.3.0_1.sierra.bottle.tar.gz
==> Pouring node-8.3.0_1.sierra.bottle.tar.gz
   </pre>

   PROTIP: Homebrew downloads installers to `~/Library/Caches/Homebrew/`
   and looks for installers there to avoid downloading again.

   PROTIP: Notice the bottle is <strong>specific to the version on your operating system</strong>
   (such as "sierra").

   You should now see something like this:

   <pre>
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
==> Summary
🍺  /usr/local/Cellar/node/8.3.0_1: 4,152 files, 46.8MB
   </pre>


0. If you get this error message between the two messages above:

   <pre>
==> Caveats
Please note by default only English locale support is provided. If you need
full locale support you should either rebuild with full icu:
  `brew reinstall node --with-full-icu`
or add full icu data at runtime following:
  https://github.com/nodejs/node/wiki/Intl#using-and-customizing-the-small-icu-build
   </pre>

   Run the command.

0. If you get this error message between the two messages above:

   <pre>
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /usr/local
Could not symlink share/systemtap/tapset/node.stp
/usr/local/share/systemtap/tapset is not writable.
&nbsp;
You can try again using:
  brew link node
Warning: The post-install step did not complete successfully
You can try again using `brew postinstall node`
   </pre>

   Following the advice above:

   <tt><strong>brew link node
   </strong></tt>

   If you see this:

   <pre>Error: No such keg: /usr/local/Cellar/node</pre>


   NOTE: By default, when node is installed, it installs
   <strong>npm</strong>, the Node Package Manager,
   a node package to install additional packages.

0. Identify which folder npm is obtained:

   <tt><strong>which npm
   </strong></tt>

   The response for default installations:

   <pre>
   /usr/local/bin/npm
   </pre>

   Alternatively:

   <pre>
   /Users/mac/.npm-packages/bin/npm
   </pre>

0. List npm global modules installed on the default global module folder:

   <tt><strong>ls /usr/local/lib/node_modules
   </strong></tt>

   The response contains npm plus
   firebase-tools, http-server, gatsby, iothub-explorer, serverless


<hr />


<a name="Download"></a>

## C: Download and Install Manually #

0. Download installer from <a target="_blank" href="http://nodejs.org/">
   http://nodejs.org</a>
0. Use the Mac Finder to navigate to the file in your Downloads folder.
0. Unzip the file downloaded.
0. Execute the file.
0. Respond to the prompts.
0. Skip to <a href="#Verify">Verify the install</a>



<hr />

## Install Node packages #

0. The current global location:

   <tt><strong>npm config get prefix
   </strong></tt>

   The answer (where "mac" is substituted with your user name):

   <pre>
   /Users/mac/.nvm/versions/node/v6.4.0
   </pre>

   See <a target="_blank" href="https://www.sitepoint.com/beginners-guide-node-package-manager/">
   https://www.sitepoint.com/beginners-guide-node-package-manager</a>
   about global vs. local package install.
   
0.    
   The command to install a package without additional parameters is, for example:

   <tt><strong>pwd<br />
   npm install serverless
   </strong></tt>

   This installs the node packages <strong>locally</strong> within
   whatever folder is the present working directory, revealed by the `pwd` command.

   However, we usually need node packages to be installed <strong>globally</strong>
   for access from any present directory by any user on the machine.

   This location is one MacOS requires sudo (super user do) permission elevation.
   For example:

   <tt><strong>sudo npm install serverless -g
   </strong></tt>

   Without sudo, an error would occur from the above command such as:

   <pre>
   npm WARN checkPermissions Missing write access to ...
   </pre>

   This is because the default npm folder is managed at the system level,
   not user level.

   To avoid these permission issues,
   some recommend higher permissions to folders, as in:

   <tt><strong>
   sudo chown -R $USER:$GROUP ~/.npm<br />
   sudo chown -R $USER:$GROUP ~/.config
   </strong></tt>

   This may not be enough to address installation issues when using Homebrew
   such as when upgrading with command:

   <tt><strong>npm update npm -g
   </strong></tt>


<a name="AltFolder"></a>

#### Alternate folder #

   We can install the folder under a user's HOME folder,
   which is defined by the ${HOME} environment variable:

   <tt><strong>echo "${HOME}"
   </strong></tt>

   The alternative npm folder name established by convention is:

   <tt><strong>ls ~/.npm-packages
   </strong></tt>

   To achieve this, we first need to uninstall the default install:

   <tt><strong>rm -rf /usr/local/lib/node_modules<br />
   brew uninstall node
   </strong></tt>

   All of Node needs to be uninstalled because it installed npm which uses the system folder.

   To install node for global use, we can invoke

   <a target="_blank" href="https://github.com/glenpike/npm-g_nosudo/blob/master/npm-g-nosudo.sh">
   npm-g_nosudo</a>

<hr />

<a name="CodeNode"></a>

## Code Node JavaScript #

To enable publication on 
<a target="_blank" href="https://www.npmjs.com/">
NPM</a> and 
<a target="_blank" href="http://bower.io/">
Bower</a>,
packages such as 
<a target="_blank" href="https://datatables.net/blog/2015-11-09">
Datatables</a> contain
extensions and styling options in well defined 
<a target="_blank" href="http://wiki.commonjs.org/wiki/CommonJS/">
CommonJS</a> and 
<a target="_blank" href="http://requirejs.org/docs/whyamd.html">
AMD</a> loaders.
This also opens options to use other tools such as 
<a target="_blank" href="http://browserify.org/">
Browserify</a> and 
<a target="_blank" href="http://www.webjars.org/">
WebJars</a>.



Others who have blogged about this include:

   * <a target="_blank" href="http://quickleft.com/blog/getting-started-with-express-in-node">
   http://quickleft.com/blog/getting-started-with-express-in-node</a>
   <br /><br />

0. Make a folder containing Node application files, and go to it:

0. Install the express package and its dependencies:

   <tt><strong>npm install express -g
   </strong></tt>

0. Use a text editor to create file `index.js` containing "Hello World" code in JavaScript:

   <pre>
   /*jslint node: true */
   var express = require('express');
   var app = express();
   app.get('/', function(res,req){
      res.json({
         message: 'hello world'
      });
   });
   app.listen(3000); // This establishes port 3000. You can use another port.
   </pre>

   NOTE: Semicolons and carriage returns serve the same purpose in JavaScript. You only need semicolons if you are concatenating code together in a single line.

   See https://www.airpair.com/javascript/posts/eleven-mistakes-developers-javascript

0. Start the Node server running the default <strong>index.js</strong> program:

   <tt><strong>node index.js
   </strong></tt>

   The window remains open and accept no other commands
   until you press <strong>control+C</strong> to escape the process.

0. Switch to an internet browser to open the Node Express web server running locally at port 3000:

   <pre>
   http://localhost:3000/
   </pre>

   If you get "TypeError: res.json is not a function" ...



   ### Nodemon #

0. See <a target="_blank" href="https://github.com/remy/nodemon">
   https://github.com/remy/nodemon</a>

0. Install NodeMon:

   <tt><strong>
   npm install nodemon -g  # -g installs globally as system command.<br />
   nodemon index.js   # watch for changes and kill server when needed
   </strong></tt>

0. Restart your node server specified in a coffee-script:

   <tt><strong>nodemon server.coffee
   </strong></tt>


<a id="Bower_installz"></a>

## Bower Install of GUI apps #

Bower is similar to NPM, but for front-end GUI applications.

Any frameworks or 3rd-party libraries that need to be accessible in the user's browser
will be managed by bower.

Similarly to NPM, bower tracks dependencies in a file called <strong>bower.json</strong>.

0. Install bower globally via npm:

   <tt><strong>npm install -g bower
   </strong></tt>

   Running bower install will resolve, download, and install them.


   ### Project Bower Install

0. cd to the project's folder.

0. Install the project's bower components using bower:

   <tt><strong>bower install
   </strong></tt>

0. Install http-server using npm:

   <tt><strong>npm install -g http-server
   </strong></tt>

0. Fire up the server at default port 8080:

   <tt><strong>http-server client/
   </strong></tt>

   <tt><strong>npm ls
   </strong></tt>

   <tt><strong>http-server client/
   </strong></tt>


<hr />

<a name="NodeModules"></a>

## Node modules #

A module is a single JavaScript file.

A package is a directory containing modules.

A list of shorthands for the NPM command<br />
<a target="_blank" href="https://docs.npmjs.com/misc/config">
https://docs.npmjs.com/misc/config</a>


Famous Node modules are listed below.


<a name="YarnInstall"></a>

### Yarn Install

   An alternative to NPM is <strong>yarn</strong>, which uses Node
   to generate software.

   Yarn is used by https://github.com/dancancro/great-big-example-application


   To <a target="_blank" href="https://yarnpkg.com/lang/en/docs/install/">install it</a> on a machine with NPM already installed:

0. Install using Homebrew:

   <tt><strong>brew install yarn \-\-ignore-dependencies -g
   </strong></tt>

   The response:

   <pre>
==> Using the sandbox
==> Downloading https://yarnpkg.com/downloads/0.27.5/yarn-v0.27.5.tar.gz
==> Downloading from https://github-production-release-asset-2e65be.s3.amazonaws
######################################################################## 100.0%
🍺  /usr/local/Cellar/yarn/0.27.5: 13 files, 3.6MB, built in 10 seconds
   </pre>

   PROTIP: Using Brew means that you don't need to setup path yourself.

   BTW, A search of all files that mention "yarn" yielded this list:

   <pre>
./Users/mac/.config/yarn
./Users/mac/Library/Logs/Homebrew/yarn
./usr/local/bin/yarn
./usr/local/Cellar/yarn
./usr/local/Cellar/yarn/0.27.5/bin/yarn
./usr/local/Cellar/yarn/0.27.5/libexec/bin/yarn
./usr/local/opt/yarn
./usr/local/var/homebrew/linked/yarn
   </pre>


0. Verify that Yarn is installed by running:

   <tt><strong>yarn \-\-version
   </strong></tt>

   At time of writing in 2017, the version was:

   <pre>0.27.5</pre>

0. There is a more precise version:

   <tt><strong>ls /usr/local/Cellar/yarn
   </strong></tt>

   At time of writing in 2017, the output was:

   <pre>0.27.5_1</pre>

0. Verify the yarn command works:

   <tt><strong>yarn
   </strong></tt>

   At time of writing in 2017, the response was:

   <pre>yarn install v0.27.5
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 0.13s.
   </pre>



<a id="Grunt"></a>

### Grunt #

   <tt><strong>npm install -g grunt-cli
   </strong></tt>

   The response:

   <pre>
/usr/local/Cellar/node/6.2.2/bin/grunt -> /usr/local/Cellar/node/6.2.2/lib/node_modules/grunt-cli/bin/grunt
/usr/local/Cellar/node/6.2.2/lib
└─┬ grunt-cli@1.2.0 
  ├─┬ findup-sync@0.3.0 
  │ └─┬ glob@5.0.15 
  │   ├─┬ inflight@1.0.5 
  │   │ └── wrappy@1.0.2 
  │   ├── inherits@2.0.1 
  │   ├─┬ minimatch@3.0.2 
  │   │ └─┬ brace-expansion@1.1.5 
  │   │   ├── balanced-match@0.4.2 
  │   │   └── concat-map@0.0.1 
  │   ├── once@1.3.3 
  │   └── path-is-absolute@1.0.0 
  ├── grunt-known-options@1.1.0 
  ├─┬ nopt@3.0.6 
  │ └── abbrev@1.0.9 
  └── resolve@1.1.7 
   </pre>



<a id="Gulp"></a>

### Gulp #


<a id="LearnNode"></a>

### LearnNode Programming Tutorial #

The classic interactive tutorial introducing Node.Js was created on:

<a target="_blank" href="https://github.com/workshopper/learnyounode">
https://github.com/workshopper/learnyounode</a>

To install it we reference its npm package on npm.org:

0. Run `npm install learnyounode -g`

   Notice the -g can go before or after the module being installed.

0. Run `learnyounode`

   <img width="540" height="320" alt="learnyounode 1080x640" src="https://cloud.githubusercontent.com/assets/300046/14714119/0163d652-07a1-11e6-9a24-0ea6d5941222.png">

   NOTE: Use keyboard up/down arrows to select option. This is not a GUI interface.

   The tutorial consumes a Terminal window process.

0. To exit, press control/command + C to close the process.

0. When you're done, run `npm uninstall learnyounode`.


## How NPM works #

HEADS UP! This article was written for an older version of node. More up-to-date information may be available elsewhere.
https://howtonode.org/introduction-to-npm

http://stackoverflow.com/questions/25897908/how-npm-install-works

https://www.npmjs.org/doc/cli/npm-shrinkwrap.html

I use Node.js (via browserify) for each of my web apps, all of which have some dependencies in common and others specific to themselves. Each of these apps has a package.json file that specifies which versions of which modules it needs.

Yes, that is what npm install does. In node.js code, the require algorithm has a particular sequence of places it looks, including walking up the filesystem. However, npm install doesn't do that. It just installs in place. The algorithms it uses are all constrained to just a single node_modules directory under your current directory and it won't touch anything above that (except for with -g).

Right now, I have a /node_modules directory in the parent folder of my apps for modules that they all need to reference, and then I put app-specific modules in a node_modules folder in that app's directory. This works fine in the short term, since my require() statements are able to keep looking upward in the file structure until they find the node_modules directory with the correct app in it.

Where this gets tricky is when I want to go back to an old project and run npm install to make sure it can still find all the dependencies it needs. (Who knows what funny-business has occurred since then at the parent directory level.) I was under the impression that npm install did this:

    for each module listed in package.json, first check if it's present, moving up the directory the same way require does. If it's not, install it to the local node_modules directory (creating that directory if necessary).

When I run npm install inside an app folder, however, it appears to install everything locally regardless of where else it may exist upstream. Is that the correct behavior? (It's possible there's another reason, like bad version language in my package.json). If this IS the correct behavior, is there a way for me to have npm install behave like the above?

It's not a big deal to widely replicate the modules inside every app, but it feels messy and prevents me from make small improvements to the common modules and not having to update every old package.json file. Of course, this could be a good thing...

Yeah basically you're doing it wrong. The regular workflow scales well to the Internet. 
For your use case it creates some extra tedious work, 
but you can also just use semantic versioning as intended and specify "mylib": "^1.0.0" in your package.json for your apps and be OK with automatically getting newer versions next time you npm install.


If installed using homebrew so it's done on every shell session:
Add to ~/.profile


## Additional topics #

   source $(brew --prefix nvm)/nvm.sh


## Resources #

Several blogs addresses issues related to this topic:

* https://docs.npmjs.com/getting-started/fixing-npm-permissions
* <a target="_blank" href="https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md">
   Install npm packages globally without sudo on OS X and Linux</a>
  * http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo/24404451#24404451
  * http://stackoverflow.com/questions/10081293/install-npm-into-home-directory-with-distribution-nodejs-package-ubuntu/13021677#13021677
<br />


   https://github.com/isaacs/nave
   nave is a virtual environment for node,
   an alternative to nvm.
   It is invoked by source command rather than run.

* http://blog.teamtreehouse.com/install-node-js-npm-mac

* <a target="_blank" href="https://github.com/felixrieseberg/npm-windows-upgrade">
   https://github.com/felixrieseberg/npm-windows-upgrade</a>
   enables upgrade of Node on Windows using elevated PowerShell scripts.

* <a target="_blank" href="http://www.backdrifter.com/2011/02/18/using-nvm-and-npm-to-manage-node-js/">
   http://www.backdrifter.com/2011/02/18/using-nvm-and-npm-to-manage-node-js</a>
   from 2011 is frequently quoted.

* <a target="_blank" href="http://stackoverflow.com/questions/32660993/difference-between-npm-and-nvm">
   Stackoverflow</a>

* <a target="_blank" href="http://blog.teamtreehouse.com/install-node-js-npm-mac">
   Dave McFarland's blog on install is from 2014.</a>

* <a target="_blank" href="https://app.pluralsight.com/library/courses/nodejs-express-web-applications-update/table-of-contents">
Building Web Applications with Node.js and Express 4.0 (UPDATE)</a>
released 23 Mar 2018 by Jonathan Mills



## More on MacOS #

This is one of a series on MacOS:

{% include mac_links.html %}
