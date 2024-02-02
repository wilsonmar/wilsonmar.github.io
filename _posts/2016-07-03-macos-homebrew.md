---
layout: post
date: "2024-01-30"
file: "macos-homebrew"
title: "MacOS Homebrew"
excerpt: "How to create brew formulas for installation on macOS"
tags: [homebrew, apple, mac, setup]
image:
# feature: pic brown homebrew logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622020/60672448-0584-11e6-8202-41c36ba82d04.jpg
  credit: Kickstarter
  creditlink: https://www.kickstarter.com/projects/homebrew/brew-test-bot
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This tutorial provides a deep dive of Homebrew,
a package manager for macOS
that's like other package mangers for Linux:

<table border="1" cellpadding="4" celspacing="0">
<tr valign="bottom"><th>Distribution</th><th>Package Manager</th><th> Format</th><th>GUI tools</th></tr>
<tr valign="top"><td>Darwin (macOS)</td><td>Homebrew</td><td>-</td><td>brew</td></tr>
<tr valign="top"><td>Debian, Ubuntu</td><td>dpkg</td><td>.deb</td><td>APT (Advanced Packaging Tool)</td></tr>
<tr valign="top"><td>RedHat, Fedora, openSUSE</td><td>RPM</td><td>.rpm</td><td>Yum, apt4rpm, up2date, urpmi, ZYpp, poldek</td></tr>
<tr valign="top"><td>Slackware</td><td>tgz</td><td>-</td><td>-</td></tr>
<tr valign="top"><td>Arch Linux, Frugalware, DeLi Linux</td><td>Pacman</td><td>-</td><td>-</td></tr>
<tr valign="top"><td>Puppy Linux</td><td>PETget</td><td>-</td><td>-</td></tr>
<tr valign="top"><td>Windows</td><td>Chocolatey</td><td>-</td><td>choco</td></tr>
</table>

DEFINITION: A <strong>formula</strong> provides instructions on how to install <strong>CLI packages</strong> and
their dependencies, such as where tar.gzip and *.zip files.

A <strong>cask</strong> provides instructions on how to install <strong>GUI apps</strong> from .dmg files.

Step-by-step instructions are provided here to install Homebrew itself
and then install Homebrew packages based on the name of 
<strong>formulae</strong> specified for installation
in a command such as:

   <tt><strong>brew install wget</strong></tt>

Brew installs packages in its own Cellar directory (folder)
and adds symlinks to the <tt>/usr/local</tt> folder.

Homebrew is the newest and most popular package utility on macOS.

Homebrew's web page is at <a target="_blank" href="http://brew.sh/">
http://brew.sh</a>

## Alternatives to Homebrew

   * <a target="_blank" href="https://www.macports.org/">https://www.macports.org</a>

   <pre>sudo port install tree</pre>

   * <a target="_blank" href="http://www.finkproject.org/">http://www.finkproject.org</a>

<hr />

<a name="Formula"></a>

## Homebrew Formula

1. See the (very long) list of all Homebrew formulas from:

   <a target="_blank" href="https://formulae.brew.sh/">https://formulae.brew.sh</a>

1. Click on a program (such as htop, jq, tree, wget, etc.).
1. Click on the Formula code, such as wget.rb on GitHub:

   <tt>https://github.com/Homebrew/homebrew-core/blob/1cde8401d8be5f28d74a402afe67fd52ac0575ed/Formula/j/jq.rb</tt>

   Notice that the blob is referenced in GitHub by its SHA.

   ### head

   This line defines the git branch "main" for the repo:

   <pre>head "https://github.com/htop-dev/htop.git", branch: "main"</pre>

   The variables are based on <a target="_blank" href="https://docs.brew.sh/Adding-Software-to-Homebrew">this document</a>.

   ### SHA

   ### bottle do  

   If there are different installers depending on each operating system, each is listed within <tt>bottle do</tt>

   <pre> sha256 cellar: :any,                 arm64_sonoma:   "a07989af65c77dbfb28b07b8faec12d3760831c360e0caa6a32a58eff0e8fd65"
    sha256 cellar: :any,                 arm64_ventura:  "66603fe2d93294af948155b0392e6631faec086b0bcc68537d931861e9b1de39"
    sha256 cellar: :any,                 arm64_monterey: "f8c4b4433a3fda0ee127ba558b4f7a53dff1e92ff6fb6cef3c8fbf376f1512c8"
    sha256 cellar: :any,                 sonoma:         "5cd79199db8d7394d331dbb362dd101d12519325f78dde1af4e7c67fb9f4e5da"
    sha256 cellar: :any,                 ventura:        "d47397e29f584bedd7d1f453af5ff42f10c3607a823fa72314b6d4f1c44cd176"
    sha256 cellar: :any,                 monterey:       "665c48cbe7434b5850d66512008e143193cd22b69ae54788314955415b6c546d"
    sha256 cellar: :any_skip_relocation, x86_64_linux:   "e6734208d3ea8db55123b1d1d9ac4f427c5e7ba89472193afe51543a2bb1a9a1"
   </pre>

   PROTIP: This needs to be updated with every new OS version added.

   Otherwise:

   <tt>sha256 cellar: :any_skip_relocation, all: a54aa4f028ef042948961ef62524557dd8afd2c05eb658bd5f6d1ec04dddc22f"</tt>

   ### depends on

   Especially if you're installing a package dependent on Python, specify the specific version :

   <pre>  depends_on "python-hatch-vcs" => :build
  depends_on "python-hatchling" => :build
  depends_on "python-setuptools" => :build
  depends_on "python-setuptools-scm" => :build
  depends_on "python-requests"
  depends_on "python@3.12"
   &nbsp;
  def python3
    "python3.12"
  end
   </pre>

   ### livecheck do

   Code here verifies the version within github.com:

   <pre> url :stable
    regex(/^v?(\d+(?:\.\d+)+)$/i)
   </pre>

   <pre>    url "https://beyondgrep.com/install/"
    regex(/href=.*?ack[._-]v?(\d+(?:\.\d+)+)["' >]/i)
   </pre>

   ### def install
   
   <tt><strong>def install</strong></tt> defines commands to install:

   QUESTION: What is prefix?

   <pre>system "make", "install", "PREFIX=#{prefix}"</pre>

   For htop:
   
   <pre>    system "./autogen.sh"
    args = ["--prefix=#{prefix}"]
    args << "--enable-sensors" if OS.linux?
    system "./configure", *args
    system "make", "install"
   </pre>

   For AivenClient:

   <pre>    assert_match "aiven-client", shell_output("#{bin}/avn --version")
    assert_match "UserError: not authenticated", pipe_output("AIVEN_CONFIG_DIR=/tmp #{bin}/avn user info 2>&1")
   </pre>

   ### caveats

   If your package requires sudo to run, please remind users with a statement such as this from htop:

   <pre>def caveats
    <<~EOS
      This requires root privileges to correctly display all running processes,
      so you will need to run `sudo htop`.
      You should be certain that you trust any software you grant root privileges.
    EOS
  end
   </pre>

   ### test do
   
   <tt>test do</strong> defines the CLI command(s) to verify proper installation:

   <pre> assert_predicate bin/"Zzz", :exist?</pre>

   <pre>pipe_output("#{bin}/htop", "q", 0)</pre>

   <pre>system "#{bin}/tree", prefix</pre>

   <pre>assert_equal "2\n", pipe_output("#{bin}/jq .bar", '{"foo":1, "bar":2}')</pre>

   <pre>system bin/"wget", "-O", "/dev/null", "https://google.com"</pre>

   ### zap to Trash

   If the install generates folders and files not needed to run, (especially cask apps), add:

   <pre>  zap trash: [
    "~/Library/Application Support/com.apple.sharedfilelist/com.apple.LSSharedFileList.ApplicationRecentDocuments/com.tinynudge.pomello.*",
    "~/Library/Application Support/Pomello",
    "~/Library/Caches/com.tinynudge.pomello",
    "~/Library/Caches/com.tinynudge.pomello.ShipIt",
    "~/Library/HTTPStorages/com.tinynudge.pomello",
    "~/Library/Preferences/com.tinynudge.pomello.plist",
    "~/Library/Saved Application State/com.tinynudge.pomello.savedState",
  ]
   </pre>

<hr />

<a id="Preparations"></a>

## Preparations: XCode CLI #

1. Make a full backup of your system right before following the instructions below.

1. Open the App Store to install XCode, Apple's IDE for developing Swift and Objective-C to run on iPhones and iPads.

   PROTIP: Apple's App Store only installs .app files. So programs invoked from the command line Terminal (such as gcc) need to be installed a different way.

1. See <a target="_blank" href="https://wilsonmar.github.io/xcode">this XCode tutorial of mine</a> about ensuring that XCode CLI commands were installed.

1. WARNING: Since the El Capitan version of macOS,
   file permissions in /usr/local have changed,
   causing error messages such as:

   <pre>The linking step did not complete successfully
   The formula built, but is not symlinked into /usr/local
   </pre>

   xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

   So in a Terminal shell window at any folder:

   <tt><strong>sudo chown -R :staff /usr/local
   </strong></tt>


<a id="HomebrewSetupz"></a>

## Install Homebrew #

   Homebrew makes use of Ruby, which comes with macOS.

1. Install Homebrew if you haven't already.

   <pre><strong>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   </strong></pre>

   CAUTION: Don't press Enter on the Terminal until the Download Software dialog reaches 100%.

2. Press the Enter key to the message:<br />
   <br /><tt>Press RETURN to continue or any other key to abort.</tt> then

3. To proceed, enter the root password, or type Ctrl+C to abort.

   NOTE: The download is from<br />
   https://github.com/Homebrew/homebrew/

   HISTORICAL NOTE: Previously, the Homebrew installer was at<br /> 
   https://raw.github.com/Homebrew/homebrew/go/install/


1. Identify where the Homebrew program itself is located:

   <pre><strong>
   which brew
   </strong></pre>

   The response is the brew executable program at:

   <pre>
   /usr/local/bin/brew
   </pre>

   The "brew" above is a shell script file.

   PROTIP: The "/usr/local" is the default specified by the $HOMEBREW_PREFIX environment variable.


1. Identify where the Homebrew program stores packages:

   <pre><strong>
   brew --repository
   </strong></pre>

   The response:

   <pre>
   /usr/local/Homebrew
   </pre>


   ### Update Homebrew itself #

1. Get Homebrew version:

   <pre><strong>
   brew -v
   </strong></pre>

   The response (at time of writing):

   <pre>
Homebrew 2.1.4
Homebrew/homebrew-core (git revision 07aa4; last commit 2019-06-04)
Homebrew/homebrew-cask (git revision 1a93c; last commit 2019-06-04)
   </pre>

   NOTE: Homebrew is open-sourced at<br />
   https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/Common-Issues.md


1. To update Homebrew itself and its formulas:

   <tt><strong>
   brew update<br />
   brew update
   </strong></tt>

   Yes, run it twice to make sure all dependencies took.

   Each run can take several minutes.


<a name="InstallFormula"></a>

## Formulas #

### Popular formulas

wget

iterm2

htop

geoip

nmap


### Search for a formula to install #

1. Use an internet browser (such as Google Chrome)
   to view formula defined in

   * <a target="_blank" href="http://braumeister.org/">
   http://braumeister.org</a> provides recent activity.
   
   * <a target="_blank" href="http://brewformulas.org/">
   http://brewformulas.org</a> 

   ### Install formula #

1. Install the wget command-line utility by formula name (for example, wget):

   <tt><strong>
   brew install wget
   </strong></tt>

   This installs to folder /usr/local/bin/wget.

   See <a target="_blank" href="https://github.com/Homebrew/brew/blob/master/share/doc/homebrew/Tips-N'-Tricks.md">
   Tips &amp; Tricks</a> on how to 
   use proxy, remove the beer mug emoji, highlighting within editors, etc.


   ### How many? #

1. Get a count of kegs, how many files, and the disk space they take:

   <pre><strong>
   brew info --all
   </strong></pre>

   A sample response:

   <pre>
   15 kegs, 18,528 files, 540.6M
   </pre> 

   ### Where did it go? #

1. List where .tar.gz "bottle" files are downloaded into from the internet:

   DEFINITION: A "Bottle" is a pre-built binary Keg used for installation 
   instead of building from source.
   It can be unpacked.

   <pre><strong>
   brew --cache
   </strong></pre>

   The response includes your user name, which enables
   Homebrew to work without using sudo (elevation to root). 

   <pre>
   /Users/mac/Library/Caches/Homebrew
   </pre>

   The equivalent of the above is:

   <pre>
   ~/Library/Caches/Homebrew
   </pre>

1. List <strong>bottles</strong> downloaded: 

   <pre>
   ls ~/Library/Caches/Homebrew
   </pre>

   Examples of responses:

   <pre>
   autoconf-2.69.el_capitan.bottle.4.tar.gz	
   maven-3.3.9.tar.gz
   awscli-1.10.44.el_capitan.bottle.tar.gz
   node-6.2.2.tar.xz
   docker-1.11.2.el_capitan.bottle.tar.gz
   openssl-1.0.2h_1.el_capitan.bottle.tar.gz
   gimp-2.8.16-x86_64.dmg
   pkg-config-0.29.1.el_capitan.bottle.tar.gz
   libgpg-error-1.23.el_capitan.bottle.tar.gz
   readline-6.3.8.el_capitan.bottle.tar.gz
   libksba-1.3.4.el_capitan.bottle.tar.gz
   </pre>

1. List brew formulas installed:

   <tt><strong>
   ls /usr/local/Cellar<br />
   brew list<br />
   brew ls
   </strong></tt>

   The alternative commands above all do the same thing of the same folder,
   for example:

   <pre>
   autoconf	awscli		libgpg-error	libtool		maven		node		pkg-config	xz
   automake	docker		libksba		libyaml		mysql		openssl		readline
   </pre>

   There is no response if no brew package has been installed.

1. See one level below one of the above folders for a specific formula,
   such as openssl:

   <pre><strong>
   ls /usr/local/Cellar/openssl/
   </strong></pre>

   It is usually a version number, such as:

   <pre>
   1.0.2h_1
   </pre>

   DEFINITION: A "Keg" is the installation prefix of a formula, such as:

   <pre>
   openssl-1.0.2h_1.el_capitan.bottle.tar.gz
   </pre>


   ### Packages #

1. List brew package .rb (Ruby language) files installed:

   <pre>
   ls /usr/local/Library/Taps/homebrew/homebrew-core/Formula
   </pre>

   The response is a long list.

1. List brew package folders: 

   <tt><strong>
   brew search
   </strong></tt>

   The response is a long list.



### Troubleshoot Homebrew #

1. Different ways to install weget.

   The above is one of <a target="_blank" href="http://coolestguidesontheplanet.com/install-and-configure-wget-on-os-x/">
   several ways</a> to install the wget command-line utility.
   
   One way is to install Apple's Xcode.

   <pre><strong>	
   brew install --build-from-source wget
   </strong></pre>

   Test wget operating:

   <tt><strong>cd ~/Downloads<br />
   wget http://ftp.gnu.org/gnu/wget/wget-1.15.tar.gz
   </strong></tt>

1. Verify brew installation:

   <tt><strong>
   brew doctor
   </strong></tt>

   If you see this message at the top of messages returned:

   <pre>
   Warning: Unbrewed header files were found in /usr/local/include.
   If you didn't put them there on purpose they could cause problems when
   building Homebrew formulae, and may need to be deleted.
   </pre>

   The above may occur if curl and nodejs were installed without using homebrew.

   Remove them before installing node and curl using Homebrew:

   <pre><strong>
   rm -rf /usr/local/include/node/
   </strong></pre>


1. Create symlinks to installations performed manually in Cellar. 
   This allows you to have the flexibility to install things on your own but 
   still have those participate as dependencies in homebrew formulas.

   First, see what exactly will be overwritten, without actually doing it:

   <pre><strong>
   brew link --overwrite --dry-run openssl
   </strong></pre>

   The response is:

   <pre>
   Warning: openssl is keg-only and must be linked with --force
   Note that doing so can interfere with building software.
   </pre>

   "Keg-only" refers to a formula installed only into the Cellar and not linked into /usr/local, 
   which means most tools will not find it. 
   This is to avoid conflicting with the system version of the same package.


   Alternately, if aswcli is specified for dry-run, the response is, on an Intel x86 mac:

   <pre>
   Warning: Already linked: /usr/local/Cellar/awscli/1.10.44
   To relink: brew unlink awscli && brew link awscli
   </pre>

   <tt><strong>
   brew link
   </strong></tt>

   NOTE: Homebrew installs to the Cellar it then symlinks some of the installation into /usr/local 
   so that other programs can see what's going on.

   A symlink to the active version of a Keg is called an "opt prefix".

1. List where a link goes:

   <tt><strong>
   ls -l $(which wget)
   </strong></tt>

   <pre>/usr/local/bin/wget -> /usr/local/Cellar/wget/1.18/bin/wget</pre>


   ### Prune symlinks #
   
   If you see this message:
   
   <pre>
   Warning: Broken symlinks were found. Remove them with `brew prune`:
   </pre>

   <pre><strong>
   brew prune
   </strong></pre>

   A sample response:

   <pre>
   Pruned 1598 symbolic links and 185 directories from /usr/local
   </pre>


1. List formula (package definitions):

   <tt><strong>
   brew edit $FORMULA
   </strong></tt>

   The above command brings you to your default text editor 
   (vim or whatever is specified in the $EDITOR variable).

   Type :q to quit out.  


## Upgrade brew formulas #

1. List brew packages that are obsolete:

   <tt><strong>
   brew outdated
   </strong></tt>

   To stop a specific package from being updated/upgraded,
   pin it:

   <tt><strong>
   brew pin $FORMULA
   </strong></tt>

   $FORMULA is ???
   
   To allow that formulae to update again, unpin it.


1. Download and update ALL software packages installed:

   <tt><strong>
   brew upgrade
   </strong></tt>

1. To see which files would be removed as no longer needed:

   <tt><strong>
   brew cleanup -n
   </strong></tt>

   No response if there is nothing to clean. Otherwise, example:

   <pre>Warning: Skipping awscli: most recent version 1.16.170 not installed</pre>

1. To really remove all files no longer needed:

   <tt><strong>
   brew cleanup
   </strong></tt>

   A sample response:

   <pre>
   Removing: /Users/mac/Library/Caches/Homebrew/mariadb-10.1.14.el_capitan.bottle.tar.gz... (36.6M)
   ==> This operation has freed approximately 36.6M of disk space.
   </pre>


<a name="Remove"></a>

## Remove/Uninstalll #

PROTIP: Before deleting, identify its <strong>dependencies</strong>. For example:

<pre>brew deps python3</strong>

would yield:

   <pre>
gdbm
openssl
readline
sqlite
xz
   </pre>

Two delete commands does the same:

   <pre>brew uninstall package</pre>

   <pre>brew remove package</pre>

Additional flags:

   `–force` or `-f` forcibly removes all versions of that package.

   `–ignore-dependencies` ignore dependencies for the formula when uninstalling the designated package, which may cause other brews to no longer work correctly.


<a name="Tap"></a>

## Tap #

Brew tap adds repos not in the Homebrew master repo
from inside a larger package.

https://github.com/Homebrew/brew/blob/master/docs/brew-tap.md
says tap adds to the list of formulae that brew tracks, updates, and installs from.

1. List brew tap packages already installed:

   <pre><strong>brew tap
   </strong></pre>

1. Install the ip tool included with iproute2 on Linux:

   <pre><strong>brew tap brona/iproute2mac
   brew install iproute2mac
   </strong></pre>

   The command specififies the account and repo in GitHub, as in<br />
   https://github.com/brona/iproute2mac
   
   or https://superuser.com/questions/687310/ip-command-in-mac-os-x-terminal

   <pre><strong>ifconfig en0 | grep inet | grep -v inet6 | cut -d ' ' -f2
   </strong></pre>

1. Try it (instead of ifconfig):

   <pre><strong>ip
   ip addr show en0
   </strong></pre>

1. Remove a tap:

   <pre><strong>brew untap brona/iproute2mac
   </strong></pre>



<a name="CaskInstall"></a>

## brew install --cask #

Homebrew cask extends homebrew and brings its elegance, simplicity, and speed to 
MacOS (OS X) <strong>GUI</strong> applications and large binaries.

<a target="_blank" href="
https://caskroom.github.io/">
https://caskroom.github.io</a>

With Cask, you can skip the long URLs, 
the "To install, drag this icon…", and manually deleting installer files.

1. Temporarily set the permissions on /usr/local:

   <pre><strong>sudo chown $USER /usr/local
   </strong></pre>

1. Install brew cask:

   <pre><strong>brew tap caskroom/cask
   brew install brew-cask
   </strong></pre>

   Applications are kept in their Caskroom under /opt and symblinked to $HOME/Applications
   from 

   <a target="_blank" href="
   https://github.com/caskroom/homebrew-cask">
   https://github.com/caskroom/homebrew-cask</a>

1. <a target="_blank" href="https://caskroom.github.io/">
   https://caskroom.github.io</a>, the home page, said there are 3,197 casks as of June 5, 2016.

   QUESTION: Is there a graph of growth in cask counts over time?

1. Install the cask extension to Homebrew:

   <pre><strong>brew tap caskroom/cask
   </strong></pre>

   Alternately:

   <pre><strong>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null ; brew install caskroom/cask/brew-cask 2> /dev/null
   </strong></pre>

1. Search for a cask by name, in website is where casks are obtained:

   <a target="_blank" href="https://github.com/caskroom/homebrew-cask/search?utf8=✓">
   https://github.com/caskroom/homebrew-cask/search?utf8=✓</a>

   Alternately, run a search command. This example searches for "yo":

   <pre><strong>brew cask search yo
   </strong></pre>

   PROTIP: One should see the cask definition before using it.
   I would be suspicious of casks with sparse information.

   The safe way to get the homepage URL of the programmer is from here (don't Google it and end up at a rogue site).

1. Look at some cask definitions:

   <a target="_blank" href="https://github.com/caskroom/homebrew-cask/blob/master/Casks/google-chrome.rb">
   https://github.com/caskroom/homebrew-cask/blob/master/Casks/google-chrome.rb</a>
   is a sample cask definition:

{% highlight text %}
cask 'google-chrome' do
  version :latest
  sha256 :no_check

  url 'https://dl.google.com/chrome/mac/stable/GGRO/googlechrome.dmg'
  name 'Google Chrome'
  homepage 'https://www.google.com/chrome/'
  license :gratis

  auto_updates true

  app 'Google Chrome.app'

  zap delete: [
                '~/Library/Application Support/Google/Chrome',
                '~/Library/Caches/Google/Chrome',
                '~/Library/Caches/com.google.Chrome',
                '~/Library/Caches/com.google.Chrome.helper.EH',
                '~/Library/Caches/com.google.Keystone.Agent',
                '~/Library/Caches/com.google.SoftwareUpdate',
                '~/Library/Google/GoogleSoftwareUpdate',
                '~/Library/Logs/GoogleSoftwareUpdateAgent.log',
              ],
      rmdir:  [
                '~/Library/Caches/Google',
                '~/Library/Google',
              ]
end{% endhighlight %}

1. Install the cask:

   <tt><strong>brew install --cask google-chrome
   </strong></tt>

   Cask downloads then moves the app to the ~/Applications folder,
   so it can be opened this way:

1. Open the installed cask from Terminal:

   <pre><strong>open /Applications/"Google Chrome.app"
   </strong></pre>

1. Installing with cask enables you to cleanup:

   <pre><strong>brew cask cleanup
   </strong></pre>


   ### Error prevention

   <a target="_blank" href="https://github.com/caskroom/homebrew-cask/issues/19547">
   If</a> you get an error about "permissions denied":

1. Create a Caskroom folder

   <pre><strong>cd ~
   mkdir Caskroom
   </strong></pre>

1. Edit the .bash_profile

   <pre><strong>vim ~/.bash_profile
   </strong></pre>

1. Add this line:

   <pre>export HOMEBREW_CASK_OPTS="--appdir=~/Applications --caskroom=~/Caskroom"
   </pre>

   QUESTION: The use of --caskroom is deprecated?

1. Save the file.
1. Restart the terminal.

   <pre><strong>source ~/.bash_profile
   </strong></pre>


## GUI for Homebrew packages

<a target="_blank" href="https://www.cakebrew.com/">https://www.cakebrew.com/</a> is a GUI to help manage Homebrew packages:

   <pre><strong>brew install --cask cakebrew</strong></pre>


## Analytics off

Homebrew now defaults to retrieving behavioral analytics tracking. Although anonymized, you may not want to participate in that. To disable the extra network traffic:

   <pre><strong>
   brew analytics off
   </strong></pre>

## Debian apt-get

Download Fink commander Fink Installer.pkg from<br />
http://finkcommander.sourceforge.net/help/install.php


<a target="_blank" href="https://thecustomizewindows.com/2013/11/how-to-install-apt-get-on-mac-os-x/">This</a> explains: 
Fink stores data in the directory “/sw” by default. 
This goes against the Filesystem Hierarchy Standard’s recommendation to use “/usr/local”. 
Within Fink’s directory, a FHS-like layout (/sw/bin, /sw/include, /sw/lib, etc.) is used.


## Documentation #

1. For more documentation on brew, look <a target="_blank" href="https://github.com/Homebrew/brew/blob/master/share/doc/homebrew/FAQ.md">
   here</a> and:

   <tt><strong>man brew
   </strong></tt>


## Social media #

Social media from <a target="_blank" href="https://github.com/Homebrew/brew/blob/master/share/doc/homebrew/README.md#readme">
brew's readme</a>:

   * <a target="_blank" href="https://twitter.com/MacHomebrew">@MacHomebrew</a> on Twitter
   * IRC freenode.net#machomebrew
   * Email <a target="_blank" href="mailto:homebrew-discuss@googlegroups.com">homebrew-discuss@googlegroups.com</a>
   * <a target="_blank" href="https://groups.google.com/forum/#!forum/homebrew-discuss">
     Read archive of emails at https://groups.google.com/forum/#!forum/homebrew-discuss</a>

## Resources

* https://docs.brew.sh/Formula-Cookbook
* https://rubydoc.brew.sh/Formula


## More on macOS

This is one of a series on macOS:

{% include mac_links.html %}
