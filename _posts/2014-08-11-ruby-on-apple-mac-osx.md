---
layout: post
title: "Ruby with RVM or RBenv on macOS"
excerpt: "Switch among multiple versions of Ruby"
tags: [ruby, apple, mac, setup, programming]
date: "2014-08-11"
file: "ruby-on-apple-mac-osx"
image:
# feature: pic ruby full 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622144/2afc1a24-0585-11e6-93fa-120cda0a9b06.jpg
  credit: Ruby Inside
  creditlink: http://www.rubyinside.com/advent2006/24-wallpapers.html
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


<img align="right" alt="ruby-stack-v01-300x213-11679.jpg" src="https://user-images.githubusercontent.com/300046/48075182-db4b6080-e19f-11e8-9c83-4ccfceda1425.png">
The major commands around Ruby:

   0. ruby
   0. gem
   0. bundle
   0. <a href="#rbenv">rbenv</a> version manager or
   0. rvm version manager 

PROTIP: There is a war going on within the Ruby community between rvm and rbenv. See http://jonathan-jackson.net/rvm-and-rbenv
and <a target="_blank" href="http://ryan.mcgeary.org/2011/02/09/vendor-everything-still-applies/">Ryan McGeary</a> who switched to rbenv.

<a name="Versions"></a>

### Versions #

1. Look at the list of Ruby versions at 

   <a target="_blank" href="https://www.ruby-lang.org/en/downloads/">https://www.ruby-lang.org/en/downloads</a>

1. Remember the lastest version number (such as "2.7.1").
   

   ### What Ruby version is installed? #

   A Ruby language compiler is included in Mac OSX.
   So we can jump straight to view version information.

   CAUTION: Don't touch the system Ruby that comes with your Mac.

0. Open a Terminal Shell Window and type:
 
   <pre><strong>ruby --version
   </strong></pre>

   Alternately:

   <pre><strong>ruby --version
   </strong></pre>

   The response for the High Sierra default:

   <tt>ruby 2.3.7p456 (2018-03-28 revision 63024) [universal.x86_64-darwin17]</tt>
ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin17]
   </tt>

   The response for the Sierra default:

   <tt>ruby 2.3.0p0 (2015-12-25 revision 53290) [x86_64-darwin15]
   </tt>

   The response for the Yosemite default:

   <tt>ruby 2.0.0p481 (2014-05-08 revision 45883) [universal.x86_64-darwin14]
   </tt>

   The response after updating on 2016-06-16:

   <tt>ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin15]
   </tt>

   CAUTION: The Apple Mac operating system makes use of Ruby, so don't delete the .rvm folder.

0. This should return "hey":

   <pre><strong>ruby -e "puts 'hey'"
   </strong></pre>

   PROTIP: The ruby command by itself will not return anything ... forever.


   <a name="ViewVersions"></a>

   ## Gem version numbers #

0. You don't really need to do the above because this more detailed command provides it as well:

   <pre><strong>gem env
   </strong></pre>

   The response on 2016-06-16:

   <pre>RubyGems Environment:
  - RUBYGEMS VERSION: 2.6.4
  - RUBY VERSION: 2.3.1 (2016-04-26 patchlevel 112) [x86_64-darwin15]
  - INSTALLATION DIRECTORY: /Users/mac/.rvm/gems/ruby-2.3.1
  - USER INSTALLATION DIRECTORY: /Users/mac/.gem/ruby/2.3.0
  - RUBY EXECUTABLE: /Users/mac/.rvm/rubies/ruby-2.3.1/bin/ruby
  - EXECUTABLE DIRECTORY: /Users/mac/.rvm/gems/ruby-2.3.1/bin
  - SPEC CACHE DIRECTORY: /Users/mac/.gem/specs
  - SYSTEM CONFIGURATION DIRECTORY: /Users/mac/.rvm/rubies/ruby-2.3.1/etc
  - RUBYGEMS PLATFORMS:
    - ruby
    - x86_64-darwin-15
  - GEM PATHS:
     - /Users/mac/.rvm/gems/ruby-2.3.1
     - /Users/mac/.rvm/gems/ruby-2.3.1@global
  - GEM CONFIGURATION:
     - :update_sources => true
     - :verbose => true
     - :backtrace => false
     - :bulk_threshold => 1000
  - REMOTE SOURCES:
     - https://rubygems.org/
  - SHELL PATH:
     - /Users/mac/.rvm/gems/ruby-2.3.1/bin
     - /Users/mac/.rvm/gems/ruby-2.3.1@global/bin
     - /Users/mac/.rvm/rubies/ruby-2.3.1/bin
     - /Users/mac/depot_tools
     - /Users/mac/.npm-packages/bin
     - /Users/mac/miniconda2/bin
     - /Users/mac/.rbenv/shims
     - /Users/mac/.rbenv/bin
     - /usr/local/bin
     - /usr/bin
     - /bin
     - /usr/sbin
     - /sbin
     - /Users/mac/gits
     - /Users/mac/.rvm/bin
     - /Users/mac/.rvm/bin
   </pre>


0. To view each component individually:

   <pre><strong>gem --version
   </strong></pre>

   The response for the High Sierra default:

   <tt>2.7.6</tt>

   The response for the Sierra default:

   <tt>2.0.14</tt>

   The response for the Yosemite default:

   <tt>2.0.14</tt>

   After updating on 2017-02-16:

   <tt>2.6.10</tt>

   QUESTION: List of versions?


   ### Update RubyGems and Bundler:

0. Update:

   <pre><strong>
   sudo gem update --system
   </strong></pre>

   The response on 2016-06-16:

   <pre>Password:
Updating rubygems-update
Fetching: rubygems-update-2.6.4.gem (100%)
Successfully installed rubygems-update-2.6.4
Parsing documentation for rubygems-update-2.6.4
Installing ri documentation for rubygems-update-2.6.4
Installing darkfish documentation for rubygems-update-2.6.4
Done installing documentation for rubygems-update after 2 seconds
Parsing documentation for rubygems-update-2.6.4
Done installing documentation for rubygems-update after 0 seconds
Installing RubyGems 2.6.4
RubyGems 2.6.4 installed
Parsing documentation for rubygems-2.6.4
Installing ri documentation for rubygems-2.6.4
&nbsp;
=== 2.6.3 / 2016-04-05
...
Minor enhancements:
...
Bug fixes:
...
RubyGems installed the following executables:
   /Users/mac/.rvm/rubies/ruby-2.3.1/bin/gem
&nbsp;
Ruby Interactive (ri) documentation was installed. ri is kind of like man 
pages for ruby libraries. You may access it like this:
  ri Classname
  ri Classname.class_method
  ri Classname#instance_method
If you do not wish to install this documentation in the future, use the
--no-document flag, or set it as the default in your ~/.gemrc file. See
'gem help env' for details.
&nbsp;
RubyGems system software updated
   </pre>


0. List local gems:

   <pre><strong>gem list b
   </strong></pre>

   A sample example (on 2016-06-16):

   <pre>bigdecimal (1.3.1, 1.2.7, default: 1.2.0)
libxml-ruby (3.0.0, 2.8.0, 2.6.0)
rainbow (2.2.1, 2.1.0)
rubocop (0.47.1, 0.40.0)
bundler-unload (1.0.2)
executable-hooks (1.3.2)
rubygems-bundler (1.4.4)
ruby-progressbar (1.8.1)
rubygems-update (2.6.10, 2.6.9, 2.6.1)
...
   </pre>


   ## Update Bundler:

0. If bundler is not on the list above:

   <pre><strong>gem install bundler
   </strong></pre>

   A sample response:

   <pre>Fetching: bundler-1.12.5.gem (100%)
Successfully installed bundler-1.12.5
Parsing documentation for bundler-1.12.5
Installing ri documentation for bundler-1.12.5
Done installing documentation for bundler after 5 seconds
1 gem installed
   </pre>

0. Navigate to a folder containing <strong></strong>:

   <pre><strong>bundle install
   </strong></pre>

   A sample response:

   <pre>Fetching gem metadata from https://rubygems.org/
Fetching version metadata from https://rubygems.org/
Fetching dependency metadata from https://rubygems.org/
Installing rake 11.1.2
...
Bundle complete! 5 Gemfile dependencies, 39 gems now installed.
Use `bundle show [gemname]` to see where a bundled gem is installed.
   </pre>


0. Run

   <tt><strong>sudo gem install \-\-no-rdoc \-\-no-ri bundler
   </strong></tt>

   The response:

   <pre>Fetching: bundler-1.9.4.gem (100%)
Successfully installed bundler-1.9.4
1 gem installed
   </pre>

0. Update latest version of gem:

   <pre><strong>sudo gem update
   </strong></pre>

   The response takes several minutes because it touches every gem:

   <pre>   Updating installed gems
   Updating CFPropertyList
...
RubyGems installed the following executables:
  /usr/local/Cellar/ruby/2.5.1/bin/gem
  /usr/local/Cellar/ruby/2.5.1/bin/bundle
&nbsp;
Ruby Interactive (ri) documentation was installed. ri is kind of like man 
pages for Ruby libraries. You may access it like this:
  ri Classname
  ri Classname.class_method
  ri Classname#instance_method
If you do not wish to install this documentation in the future, use the
--no-document flag, or set it as the default in your ~/.gemrc file. See
'gem help env' for details.
&nbsp;
RubyGems system software updated
   </pre>

0. Press y and Enter if you see:

   <pre>rake's executable "rake" conflicts with /usr/bin/rake
rdoc's executable "rdoc" conflicts with /usr/bin/rdoc
rdoc's executable "ri" conflicts with /usr/bin/ri
   </pre>

0. To rebuild any gems using native extensions:

   <pre><strong>sudo gem pristine \-\-all 
   </strong></pre>


0. To uninstall gems not used:

   <pre><strong>sudo gem cleanup
   </strong></pre>

   The response:

   <pre>Cleaning up installed gems...
   Clean Up Complete
   </pre>


<a name="rbenv"></a>

### Install rbenv

CAUTION: To install rbenv, one must first <a href="#RemoveRVM">remove RVM</a> 
because it's incompatible with rbenv.
 
   <pre><strong>brew update
   brew install rbenv ruby-build
   </strong></pre>

   The response:

   <pre>==> Installing dependencies for rbenv: openssl, ruby-build
==> Installing rbenv dependency: openssl
==> Downloading https://homebrew.bintray.com/bottles/openssl-1.0.2k.sierra.bottl
######################################################################## 100.0%
==> Pouring openssl-1.0.2k.sierra.bottle.tar.gz
==> Using the sandbox
==> Caveats
A CA file has been bootstrapped using certificates from the SystemRoots
keychain. To add additional certificates (e.g. the certificates added in
the System keychain), place .pem files in
  /usr/local/etc/openssl/certs
&nbsp;
and run
  /usr/local/opt/openssl/bin/c_rehash
&nbsp;
This formula is keg-only, which means it was not symlinked into /usr/local.
&nbsp;
Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries
&nbsp;
If you need to have this software first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile
&nbsp;
For compilers to find this software you may need to set:
    LDFLAGS:  -L/usr/local/opt/openssl/lib
    CPPFLAGS: -I/usr/local/opt/openssl/include
For pkg-config to find this software you may need to set:
    PKG_CONFIG_PATH: /usr/local/opt/openssl/lib/pkgconfig
&nbsp;
==> Summary
🍺  /usr/local/Cellar/openssl/1.0.2k: 1,696 files, 12M
==> Installing rbenv dependency: ruby-build
==> Downloading https://github.com/rbenv/ruby-build/archive/v20170201.tar.gz
==> Downloading from https://codeload.github.com/rbenv/ruby-build/tar.gz/v201702
######################################################################## 100.0%
==> ./install.sh
🍺  /usr/local/Cellar/ruby-build/20170201: 334 files, 178.8K, built in 4 seconds
==> Installing rbenv 
==> Downloading https://homebrew.bintray.com/bottles/rbenv-1.1.0.sierra.bottle.t
######################################################################## 100.0%
==> Pouring rbenv-1.1.0.sierra.bottle.tar.gz
🍺  /usr/local/Cellar/rbenv/1.1.0: 36 files, 63.2K
   </pre>

0. What versions of Ruby are available?
   See <a target="_blank" href="https://www.ruby-lang.org/en/downloads/releases/">https://www.ruby-lang.org/en/downloads/releases/</a>

0. To upgrade Ruby using rbenv, first get the <a href="#Versions">semantic version from the Ruby site</a>, then:

   <pre><strong>rbenv install 2.6.1
   </strong></pre>

   The response when 2.6.1 was all the rage:

   <pre>ruby-build: use openssl from homebrew
Downloading ruby-2.6.1.tar.bz2...
-> https://cache.ruby-lang.org/pub/ruby/2.6/ruby-2.6.1.tar.bz2
Installing ruby-2.6.1...
ruby-build: use readline from homebrew
Installed ruby-2.6.1 to /Users/wilsonmar/.rbenv/versions/2.6.1
   </pre>

0. Make that version the default globally:

   <pre><strong>rbenv global 2.6.1
   ruby -v
   </strong></pre>

   The response I got:

   <pre>ruby 2.6.1p33 (2019-01-30 revision 66950) [x86_64-darwin18]</pre>


   ### Uninstall rbenv

0. To uninstall, remember rbenv was installed using brew, so:

   <pre><strong>brew uninstall rbenv ruby-build
   </strong></pre>


## Install to /usr/local/bin

"You don't have write permissions into the /usr/bin directory."
is returned because that directory requires root credentials.

This is why Homebrew installs into the `/usr/local/bin` folder.

To specify that folder when installing gems, for example:

   <pre>gem install cocoapods -n /usr/local/bin</pre>

PROTIP: To automatically specify `-n /usr/local/bin`, save create file 
`~/.gemrc` containing:

   <pre>:gemdir:
   - ~/.gem/ruby
install: -n /usr/local/bin
   </pre>

<hr />

## rbenv vs rvm

Before rbenv, there was rvm.

<a target="_blank" href="https://metova.com/choosing-a-ruby-version-management-tool-rbenv-vs-rvm/">This article</a>
describes the differences.

PROTIP: Personally, the requirement for gpg to install was a turn-off for RVM as it was difficult to get working. 


<a name="ruby-rvm"></a>

## Ruby Version Manager (rvm) #

See https://rvm.io/support/troubleshooting


### Install RVM

1. In a Terminal:

   <pre><strong>curl -L https://get.rvm.io | bash -s stable</strong></pre>

   Sample response:

   <pre>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   194  100   194    0     0    544      0 --:--:-- --:--:-- --:--:--   544
100 24361  100 24361    0     0  31643      0 --:--:-- --:--:-- --:--:-- 1076k
Downloading https://github.com/rvm/rvm/archive/1.29.4.tar.gz
Downloading https://github.com/rvm/rvm/releases/download/1.29.4/1.29.4.tar.gz.asc
gpg: Signature made Sun Jul  1 13:41:26 2018 MDT
gpg:                using RSA key 62C9E5F4DA300D94AC36166BE206C29FBF04FF17
gpg: Good signature from "Michal Papis (RVM signing) <mpapis@gmail.com>" [unknown]
gpg:                 aka "Michal Papis <michal.papis@toptal.com>" [unknown]
gpg:                 aka "[jpeg image of size 5015]" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 409B 6B17 96C2 7546 2A17  0311 3804 BB82 D39D C0E3
     Subkey fingerprint: 62C9 E5F4 DA30 0D94 AC36  166B E206 C29F BF04 FF17
GPG verified '/Users/wilsonmar/.rvm/archives/rvm-1.29.4.tgz'
Upgrading the RVM installation in /Users/wilsonmar/.rvm/
    RVM PATH line found in /Users/wilsonmar/.mkshrc /Users/wilsonmar/.profile /Users/wilsonmar/.bashrc /Users/wilsonmar/.zshrc.
    RVM sourcing line found in /Users/wilsonmar/.profile /Users/wilsonmar/.bash_profile /Users/wilsonmar/.zlogin.
Upgrade of RVM in /Users/wilsonmar/.rvm/ is complete.
/Users/wilsonmar/.bash_profile:1:PATH=/usr/local/bin/python3:/usr/bin/python:/usr/local/bin:/usr/bin:/usr/sbin:/bin:/sbin:/opt/local/bin:/opt/local/sbin:/usr/local/share/dotnet
&nbsp;
  * WARNING: Above files contains PATH= with no $PATH inside, this can break RVM,
    for details check https://github.com/rvm/rvm/issues/1351#issuecomment-10939525
    to avoid this warning prepend $PATH
&nbsp;
  * No new notes to display.
   </pre>


   ### View rvm version number #

   <pre><strong>rvm info
   </strong></pre>

0. For a smaller response:
   
   <pre><strong>rvm --version
   </strong></pre>

   The response on 2018-10-26:

   <pre>rvm 1.29.4 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
   </pre>

   The response on 2016-06-16 had an email:

   <pre>rvm 1.27.0 (master) by Wayne E. Seguin &LT;wayneeseguin@gmail.com>, Michal Papis &LT;mpapis@gmail.com> [https://rvm.io/]
   </pre>


### Secure route:

See https://rvm.io/rvm/security

1. First try:

   <pre><strong>gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
   </strong></pre>

   The response I got:

   <pre>gpg: keyserver receive failed: Server indicated a failure
   </pre>

2. Alternatively, Since that doesn't work:

   <pre><strong>curl -sSL https://rvm.io/mpapis.asc | gpg --import -
   </strong></pre>
   
   <pre>
gpg: key 3804BB82D39DC0E3: 47 signatures not checked due to missing keys
gpg: key 3804BB82D39DC0E3: public key "Michal Papis (RVM signing) <mpapis@gmail.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   2  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 2u
   </pre>

3. Download:

   <pre><strong>\curl -O https://raw.githubusercontent.com/rvm/rvm/master/binscripts/rvm-installer</strong></pre>

   <pre>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 24361  100 24361    0     0  72332      0 --:--:-- --:--:-- --:--:-- 72502
   </pre>

4. Download:

   <pre><strong>\curl -O https://raw.githubusercontent.com/rvm/rvm/master/binscripts/rvm-installer.asc</strong></pre>

   <pre>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   833  100   833    0     0   3368      0 --:--:-- --:--:-- --:--:--  3372
   </pre>

5. Verify:

   <pre><strong> gpg --verify rvm-installer.asc</strong></pre>

   <pre>
gpg: assuming signed data in 'rvm-installer'
gpg: Signature made Sat Mar 31 15:47:44 2018 MDT
gpg:                using RSA key 62C9E5F4DA300D94AC36166BE206C29FBF04FF17
gpg: Good signature from "Michal Papis (RVM signing) <mpapis@gmail.com>" [unknown]
gpg:                 aka "Michal Papis <michal.papis@toptal.com>" [unknown]
gpg:                 aka "[jpeg image of size 5015]" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 409B 6B17 96C2 7546 2A17  0311 3804 BB82 D39D C0E3
     Subkey fingerprint: 62C9 E5F4 DA30 0D94 AC36  166B E206 C29F BF04 FF17
   </pre>

6. Get on the latest version of RVM:

   <tt><strong>
   bash rvm-installer stable
   </strong></tt>

   The response run on 2018-06-22:

   <pre>
Downloading https://github.com/rvm/rvm/archive/1.29.3.tar.gz
Downloading https://github.com/rvm/rvm/releases/download/1.29.3/1.29.3.tar.gz.asc
gpg: Signature made Sun Sep 10 14:59:21 2017 MDT
gpg:                using RSA key E206C29FBF04FF17
gpg: Good signature from "Michal Papis (RVM signing) <mpapis@gmail.com>" [unknown]
gpg:                 aka "Michal Papis <michal.papis@toptal.com>" [unknown]
gpg:                 aka "[jpeg image of size 5015]" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 409B 6B17 96C2 7546 2A17  0311 3804 BB82 D39D C0E3
     Subkey fingerprint: 62C9 E5F4 DA30 0D94 AC36  166B E206 C29F BF04 FF17
GPG verified '/Users/wilsonmar/.rvm/archives/rvm-1.29.3.tgz'
&nbsp;
Installing RVM to /Users/wilsonmar/.rvm/
    Adding rvm PATH line to /Users/wilsonmar/.profile /Users/wilsonmar/.mkshrc /Users/wilsonmar/.bashrc /Users/wilsonmar/.zshrc.
    Adding rvm loading line to /Users/wilsonmar/.profile /Users/wilsonmar/.bash_profile /Users/wilsonmar/.zlogin.
Installation of RVM in /Users/wilsonmar/.rvm/ is almost complete:
&nbsp;
  * To start using RVM you need to run `source /Users/wilsonmar/.rvm/scripts/rvm`
    in all your open shell windows, in rare cases you need to reopen all shell windows.
/Users/wilsonmar/.bash_profile:1:PATH=/usr/bin/python:/usr/local/bin:/usr/bin:/usr/sbin:/bin:/sbin:/opt/local/bin:/opt/local/sbin:/usr/local/share/dotnet
&nbsp;
  * WARNING: Above files contains `PATH=` with no `$PATH` inside, this can break RVM,
    for details check https://github.com/rvm/rvm/issues/1351#issuecomment-10939525
    to avoid this warning prepend `$PATH`.
   </pre>

7. Do as instructed:

   <tt><strong>
   source /Users/wilsonmar/.rvm/scripts/rvm
   </strong></tt>

   No response is returned.

   ### Get latest version of Ruby

8. Get on the latest version of RVM:

   <tt><strong>
   rvm get stable
   </strong></tt>

   The response run on 2017-07-27:

   <pre>
ownloading https://get.rvm.io
Downloading https://raw.githubusercontent.com/rvm/rvm/master/binscripts/rvm-installer.asc
Verifying /Users/mac/.rvm/archives/rvm-installer.asc
gpg: Signature made Sun Jul  2 16:42:38 2017 EDT using RSA key ID BF04FF17
gpg: Good signature from "Michal Papis (RVM signing) <mpapis@gmail.com>" [unknown]
gpg: Note: This key has expired!
Primary key fingerprint: 409B 6B17 96C2 7546 2A17  0311 3804 BB82 D39D C0E3
     Subkey fingerprint: 62C9 E5F4 DA30 0D94 AC36  166B E206 C29F BF04 FF17
GPG verified '/Users/mac/.rvm/archives/rvm-installer'
Downloading https://github.com/rvm/rvm/archive/1.29.2.tar.gz
Downloading https://github.com/rvm/rvm/releases/download/1.29.2/1.29.2.tar.gz.asc
gpg: Signature made Thu Jun 22 12:18:38 2017 EDT using RSA key ID BF04FF17
gpg: Good signature from "Michal Papis (RVM signing) <mpapis@gmail.com>" [unknown]
gpg: Note: This key has expired!
Primary key fingerprint: 409B 6B17 96C2 7546 2A17  0311 3804 BB82 D39D C0E3
     Subkey fingerprint: 62C9 E5F4 DA30 0D94 AC36  166B E206 C29F BF04 FF17
GPG verified '/Users/mac/.rvm/archives/rvm-1.29.2.tgz'
&nbsp;
Upgrading the RVM installation in /Users/mac/.rvm/
    RVM PATH line found in /Users/mac/.mkshrc /Users/mac/.profile /Users/mac/.bashrc /Users/mac/.zshrc.
    RVM sourcing line found in /Users/mac/.profile /Users/mac/.bash_profile /Users/mac/.zlogin.
Upgrade of RVM in /Users/mac/.rvm/ is complete.
&nbsp;
# Wilson Mar,
#
#   Thank you for using RVM!
#   We sincerely hope that RVM helps to make your life easier and more enjoyable!!!
#
# ~Wayne, Michal & team.
&nbsp;
In case of problems: https://rvm.io/help and https://twitter.com/rvm_io
&nbsp;
Upgrade Notes:
&nbsp;
/Users/mac/.bash_profile:1:PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet
&nbsp;
  * WARNING: Above files contains `PATH=` with no `$PATH` inside, this can break RVM,
    for details check https://github.com/rvm/rvm/issues/1351#issuecomment-10939525
    to avoid this warning prepend `$PATH`.
&nbsp;
  * No new notes to display.
&nbsp;
RVM reloaded!
   </pre>



   ### Uninstall Ruby

0. Uninstall all versions of Ruby:

   <tt><strong>
   rvm uninstall ruby
   </strong></tt>

0. Have the rvm shell configuration loaded:

   <tt><strong>
   source ~/.rvm/scripts/rvm<br />
   type rvm | head -n 1
   </strong></tt>

   Alternately, wipe out the folder and start over:

   <tt><strong>
   rm -rf ~/.rvm<br>
   curl -L https://get.rvm.io | bash -s stable
   </strong></tt>

   The response should be:

   <tt>
   rvm is a function
   </tt>

   If so, try rvm get head again.

   <tt><strong>
   rvm get head
   </strong></tt>

   If the response is:

   <pre>
   -bash: rvm: command not found
   </pre>

0. Get stable

   <pre>
   rvm get stable --auto-dotfiles
   </pre>


## To upgrade Ruby using RVM #

0. First run:

   <tt><strong>
   rvm autolibs homebrew
   </strong></tt>

0. Run:

   <tt><strong>
   rvm install ruby
   </strong></tt>

   The response:

   <pre>
Searching for binary rubies, this might take some time.
No binary rubies available for: osx/10.11/x86_64/ruby-2.3.1.
Continuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.
Checking requirements for osx_brew.
Installing requirements for osx_brew.
Updating system.....
Installing required packages: autoconf, automake, libtool, readline, libksba, openssl........
Certificates in '/usr/local/etc/openssl/cert.pem' are already up to date.
Requirements installation successful.
Installing Ruby from source to: /Users/mac/.rvm/rubies/ruby-2.3.1, this may take a while depending on your cpu(s)...
ruby-2.3.1 - #downloading ruby-2.3.1, this may take a while depending on your connection...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 13.7M  100 13.7M    0     0   320k      0  0:00:44  0:00:44 --:--:--  266k
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
   LC_ALL = (unset),
   LC_CTYPE = "en_US.utf-",
   LANG = "en_US.UTF-8"
    are supported and installed on your system.
perl: warning: Falling back to the standard locale ("C").
ruby-2.3.1 - #extracting ruby-2.3.1 to /Users/mac/.rvm/src/ruby-2.3.1.....
ruby-2.3.1 - #configuring......................................................|
ruby-2.3.1 - #post-configuration.
ruby-2.3.1 - #compiling........................................................-
ruby-2.3.1 - #installing.........
ruby-2.3.1 - #making binaries executable..
Installed rubygems 2.5.1 is newer than 2.4.8 provided with installed ruby, skipping installation, use --force to force installation.
ruby-2.3.1 - #gemset created /Users/mac/.rvm/gems/ruby-2.3.1@global
ruby-2.3.1 - #importing gemset /Users/mac/.rvm/gemsets/global.gems.............|
ruby-2.3.1 - #generating global wrappers........
ruby-2.3.1 - #gemset created /Users/mac/.rvm/gems/ruby-2.3.1
ruby-2.3.1 - #importing gemsetfile /Users/mac/.rvm/gemsets/default.gems evaluated to empty gem list
ruby-2.3.1 - #generating default wrappers........
ruby-2.3.1 - #adjusting #shebangs for (gem irb erb ri rdoc testrb rake).
Install of ruby-2.3.1 - #complete 
Ruby was built without documentation, to build it run: rvm docs generate-ri
   </pre> 

0. <a href="#ViewVersions">View versions again.</a>

0. To install the latest stable rvm release:

   <tt><strong>
   curl -ssL https://get.rvm.io | bash -s stable
   </strong></tt>

   A sample response:

   <pre>
Downloading https://github.com/rvm/rvm/archive/1.26.11.tar.gz
Downloading https://github.com/rvm/rvm/releases/download/1.26.11/1.26.11.tar.gz.asc
Found PGP signature at: 'https://github.com/rvm/rvm/releases/download/1.26.11/1.26.11.tar.gz.asc',
but no GPG software exists to validate it, skipping.
&nbsp;
Installing RVM to /Users/wilsonmar/.rvm/
Adding rvm PATH line to /Users/wilsonmar/.profile /Users/wilsonmar/.mkshrc /Users/wilsonmar/.bashrc /Users/wilsonmar/.zshrc.
Adding rvm loading line to /Users/wilsonmar/.profile /Users/wilsonmar/.bash_profile /Users/wilsonmar/.zlogin.
Installation of RVM in /Users/wilsonmar/.rvm/ is almost complete:
&nbsp;
* To start using RVM you need to run `source /Users/wilsonmar/.rvm/scripts/rvm`
in all your open shell windows, in rare cases you need to reopen all shell windows.
&nbsp;
# Wilson Mar,
#
#   Thank you for using RVM!
#   We sincerely hope that RVM helps to make your life easier and more enjoyable!!!
#
# ~Wayne, Michal & team.
&nbsp;
In case of problems: http://rvm.io/help and https://twitter.com/rvm_io
&nbsp;
* WARNING: You have '~/.profile' file, you might want to load it,
to do that add the following line to '/Users/wilsonmar/.bash_profile':
&nbsp;
source ~/.profile
   </pre>


0. Some say at this point close the terminal and open again.


## Sample Ruby Tree program #

Here is a Ruby script to produce a nice Unicode tree along with metadata to its left:

   <pre>
#!/usr/bin/env ruby
def tree_hierarchy( root, &children )
  queue = [[root,"",true]]
  [].tap do |results|
    until queue.empty?
      item,indent,last = queue.pop
      kids = children[item]
      extra = indent.empty? ? '' : last ? '└╴' : '├╴'
      results << [ indent+extra, item ]
      results << [ indent, nil ] if last and kids.empty?
      indent += last ? '  ' : '│ '
      parts = kids.map{ |k| [k,indent,false] }.reverse
      parts.first[2] = true unless parts.empty?
      queue.concat parts
    end
  end
end
def tree(dir)
  cols = tree_hierarchy(File.expand_path(dir)) do |d|
    File.directory?(d) ? Dir.chdir(d){ Dir['*'].map(&File.method(:expand_path)) } : []
  end.map do |indent,path|
    if path
      file = File.basename(path) + File.directory?(path) ? '/' : ''
      meta = `ls -lhd "#{path}"`.split(/\s+/)
      [ [indent,file].join, meta[0], meta[4], "%s %-2s %s" % meta[5..7] ]
    else
      [indent]
    end
  end
  maxs = cols.first.zip(*(cols[1..-1])).map{ |c| c.compact.map(&:length).max }
  tmpl = maxs.map.with_index{ |n,i| "%#{'-' if cols[0][i][/^\D/]}#{n}s" }.join('  ')
  cols.map{ |a| a.length==1 ? a.first : tmpl % a }
end
puts tree(ARGV.first || ".") if __FILE__==$0
   </pre>

0. Copy and paste the above into a text editor program.
0. Save the file named <strong>tree.rb</strong>.
0. In a Terminal window, navigate to the folder holding the script.
0. Mark the file as executable:

   <tt><strong>
   chmod +x tree.rb
   </strong></tt>

   This only needs to be done once.

0. Run the program:

   <tt><strong>
   tree.rb
   </strong></tt>

   ERROR: The response:

   <pre>
   ./tree.rb:24:in `+': no implicit conversion of true into String (TypeError)
  from ./tree.rb:24:in `block in tree'
  from ./tree.rb:22:in `map'
  from ./tree.rb:22:in `tree'
  from ./tree.rb:35:in `&LT;main>'
   </pre>

   http://superuser.com/users/57219/phrogz


<a name="RemoveRVM"></a>

## Remove rvm

0. Run the program which removes the rvm/ directory and all the rubies built within it:

   <pre><strong>
   rvm repair
   rvm cleanup
   rvm implode --force
   </strong></pre>

   <pre>
Are you SURE you wish for rvm to implode?
This will recursively remove /Users/wilsonmar/.rvm and other rvm traces?
(anything other than 'yes' will cancel) > yes
Removing rvm-shipped binaries (rvm-prompt, rvm, rvm-sudo rvm-shell and rvm-auto-ruby)
Removing rvm wrappers in /Users/wilsonmar/.rvm/bin
Hai! Removing /Users/wilsonmar/.rvm
/Users/wilsonmar/.rvm has been removed.
&nbsp;
Note you may need to manually remove /etc/rvmrc and ~/.rvmrc if they exist still.
Please check all .bashrc .bash_profile .profile and .zshrc for RVM source lines and delete or comment out if this was a Per-User installation.
Also make sure to remove `rvm` group if this was a system installation.
Finally it might help to relogin / restart if you want to have fresh environment (like for installing RVM again).
   </pre>

0. Remove folders:

   <pre>
   rm -rf /usr/local/rvm
   sudo rm /etc/profile.d/rvm.sh
   sudo rm /etc/rvmrc
   sudo rm ~/.rvmrc
   </pre>

0. Check references to rvm in files (replace vim with your favorite text editor command such as subl, code, etc.):

   vim ~/.bash_profile

   vim ~/.bashrc

   vim ~/.profile 

0. Restart Terminal sessions.

   See http://karloespiritu.com/replacing-rvm-with-rbenv-in-os-x/



## Ruby apps on Mac

The programs I've figured out how to install using my bash script:

* istats
* gitlab (command line utilities)
* ruby-jmeter
* travis
* rails
* rust (language)

## Resources:

This also provides instructions on installation of Ruby:

https://gorails.com/setup/osx/10.14-mojave#ruby

http://www.createdbypete.com/articles/ruby-on-rails-development-setup-for-mac-osx/

https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-16-04

http://devopspy.com/linux/install-latest-ruby-using-rbenv/


## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
