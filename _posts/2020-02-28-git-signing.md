---
layout: post
title: "Git Signing"
excerpt: "Sign git commits and tags (for non-repudiation) in GitHub using GPG, Vault, Yubikey, Keybase"
tags: [git, security]
date: "2020-10-18"
file: "git-signing"
image:
# git-signing-1900x500.jpg
  feature: https://user-images.githubusercontent.com/300046/75621485-00b56800-5b63-11ea-8d13-489c24db0957.jpg
  credit: Clipart
  creditlink: https://www.pngitem.com/middle/imJoiTT_contract-signing-introduction-letter-of-recommendation-clipart-hd/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article is a step-by-step tutorial on how to setup and use GPG signatures for Git to sign commits and tags, for non-repudiation.

<img align="right" width="413" height="262" alt="git-signing-ale-413x262" src="https://user-images.githubusercontent.com/300046/116947094-1d52a180-ac39-11eb-99c0-a76e793f0b8e.png">
> "If you ... want to verify that commits are actually from a trusted source, Git has a few ways to sign and verify work using GPG." -<a target="_blank" href="https://git-scm.com/docs/git-show-ref">git-scm.com/show-ref command</a>

The contribution of this article is the logical ordering of <strong>deep-dive</strong> concepts presented in a succint way, as a hands-on narrated scenic tour. "PROTIP" flags advice from hard-won experience such as relevant keyboard shortcuts and things to remember, available only here for you.

## TL;DR Generic workflow

The workflow aside from the <a href="#Variations">tooling variations (described below)</a>:

   1. <a href="#Installers">Install apps and programs locally</a>
   2. <a href="#Configurations">Configure emails</a> and <a href="#RequireSigned">set up GitHub to require signing</a>
   3. <a href="#GenKeys">Generate</a> and <a href="#ListKeys">list keys</a>
   4. <a href="#CopyPasteGitHub">Add public GPG key to GitHub</a>
   5. <a href="#SignCommits">Sign Git commits and merges</a>
   6. <a href="#SignGitTags">Sign Git Tags</a>
   7. Import key to GPG on another host
   <br /><br />

BONUS: Since we're using GPG, here are also <a href="#EncryptFiles">notes about signing of whole files using GPG</a>.


<a name="Variations"></a>

## Decisions: Variations

There are several variations (decisions) regarding the workflow to use:

   * Operating system of local machine (macOS, Windows, Linux flavors)
   * Install a GUI app and/or Command-line program to sign keys
   * Download <a href="#Installers">installer</a> from publisher web page or run package manager (Homebrew, Chocolately)

   * The secret-keeping service (macOS Keychain, GPG, Yubikey, <a href="#Keybase">Keybase.io</a>, <a href="#SelfService">employer-specified</a>, etc.)
   * Whether to sign every commit or just git tags per release
   <br /><br />


<a name="SelfService"></a>

### Desired "Self-Serve" Workflow

Here's the workflow I would like to see. It's not so much self-service as a tool for administrators. Anyway...

Before someone starts a job/project, a trusted administrator (the boss) specifies on a "self-service" portal what should be installed on each worker's laptop, such as the <a href="#Installers">client utilities</a> which should be installed for his/her specific job based on RBAC (Role-Based Access Control) or <a target="_blank" href="https://en.wikipedia.org/wiki/Attribute-based_access_control">Attribute-based Access Control (ABAC)</a> policies.

The app generates the certificate pairs, stores them in Vault, installs them on GitHub, and saves the keys on the worker's laptop. This provides a more trusted chain than each employee generating their own key pair.

Then all a new working developer needs to do is, on a pre-configured laptop, make a change and do a git <a href="#SignTag">tag</a> or <a href="#SignCommits">add and commit with a tag</a>, then <a href="#Push">push</a>.

<hr />

<a name="Installers"></a>

## Install client utilities and sign

The alternatives:

   * <a href="#install_gpg-suite">Install on macOS GUI GPG-Suite </a> app which stores keys in the protected macOS KeyChain.
   * <a href="#gnupg2_mac_install">Install on macOS CLI GPGN2</a>

   * <a href="#InstallWindowsCLI">Install on Windows CLI program</a>
   * <a href="#install-win">Install on Windows a GUI app</a>

   * <a href="#GitKraken">Install GitKraken app and sign</a>


<a name="install_gpg-suite"></a>

### Install on macOS GUI app GPG-Suite 

Instead of <a target="_blank" href="https://www.youtube.com/watch?v=FrrT9fYoL3Y">VIDEO: downloading from website and clicking</a> manually:

1. Install silently with one command after <a target="_blank" href="https://wilsonmar.github.io/homebrew/">installing Homebrew</a>:

   <pre><strong>brew install --cask gpg-suite</strong></pre>

   (its previous name was gpgtools, as in the website gpgtools.com)

1. Type your password when prompted.

   NOTE: Installation is to folder/file "/Applications/GPG Keychain.app".
   To remove the app later, simply delete that file.

1. Pinch 4 fingers together on the Touchpad and scroll around for apps.

1. Type enough of "GPG Keychain" for the icon to appear for you to click:

   <img width="126" alt="git-signing-gpg-suite" src="https://user-images.githubusercontent.com/300046/95812445-a83a7180-0cd2-11eb-8c70-bfa7b1a5032b.png">


   #### Gen GPG using macOS GPG-Suite

1. Ignore the two keys already there.

1. To generate a GPG key pair click "+ New", then Advanced, select Key Type "RSA {Sign Only)".

   <img width="779" alt="git-signing-mac-keychain" src="https://user-images.githubusercontent.com/300046/95813251-b1c4d900-0cd4-11eb-86d0-6896fd78cdf1.png">

1. Define a new password in your password vault, then copy and paste that new password in the two fields.
1. "Create Key".
1. "No, Thanks!" when asked to upload your public key. You can do that later.


   <a name="gnupg2_mac_install"></a>

   ### Install on macOS CLI utility gnupg2 

1. Open a Terminal. Be at your home user folder.

1. Execute a Bash script to do the following:
   
   Alternately, manually install <a target="_blank" href="https://wilsonmar.github.io/macos-homebrew/">brew (Homebrew)</a>
   
1. Install a Git client:

   <pre><strong>brew install git</strong></pre>

   This installs a bunch, including the latest Python (3.9.4).

1. For information about the brew gpg2 install:

   <pre><strong>brew info gnupg2</strong></pre>

   The response at time of writing:

   <pre>gnupg: stable 2.2.21 (bottled)
GNU Pretty Good Privacy (PGP) package
https://gnupg.org/
/usr/local/Cellar/gnupg/2.2.21 (134 files, 11.2MB) *
  Poured from bottle on 2020-07-09 at 18:44:27
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/gnupg.rb
License: GPL-3.0
==> Dependencies
Build: pkg-config ✔
Required: adns ✔, gettext ✔, gnutls ✔, libassuan ✔, libgcrypt ✔, libgpg-error ✔, libksba ✔, libusb ✔, npth ✔, pinentry ✔
==> Analytics
install: 55,008 (30 days), 120,808 (90 days), 506,457 (365 days)
install-on-request: 47,841 (30 days), 104,969 (90 days), 428,775 (365 days)
build-error: 0 (30 days)
   </pre>

1. Verify CLI:

   <pre><strong>gpg --version</strong></pre>

   <pre>gpg (GnuPG/MacGPG2) 2.2.24
libgcrypt 1.8.7
Copyright (C) 2020 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
&nbsp;
Home: /Users/wilson_mar/.gnupg
Supported algorithms:
Pubkey: RSA, ELG, DSA, ECDH, ECDSA, EDDSA
Cipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,
        CAMELLIA128, CAMELLIA192, CAMELLIA256
Hash: SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224
Compression: Uncompressed, ZIP, ZLIB, BZIP2
   </pre>

1. Ensure that commands for "gpg" are routed to gpg2:

   <pre>alias gpg="gpg2"
   echo -e "\n$(gpg --version | grep gpg)"    # gpg (GnuPG) 2.2.19
   </pre>

   PROTIP: The response shows that the installation is specific to each version of macOS:<br />
   <pre>==> Downloading https://homebrew.bintray.com/bottles/gmp-6.2.0.mojave.bottle.tar.gz</pre>

   

   ### MacOS GPG Config

   PROTIP: The command above creates folder `$HOME/.gnupg`.

1. Update or Create ~/.gnupg/gpg.conf

   <pre><strong>code "$HOME/.gnupg/gpg.conf"

   Visual Studio Code should open with lines such as:
   <pre>auto-key-retrieve
no-emit-version
   </pre>

1. If the <tt>use-agent</tt> is not there, add it. If it's there, remove the comment character # from "use-agent" to enable it:
   
   <pre># Uncomment within config (or add this line)
   # This tells gpg to use the gpg-agent
   use-agent
   </pre>

1. Update permissions on your `~/.gnupg` Directory:

   <pre><strong>chmod 700 ~/.gnupg</strong></pre>


1. Proceed to <a href="#Config">Configuration</a>


<hr />

<a name="LinuxInstallers"></a>

### Linux installers

   Package installers on Linux have other package names:

   * <tt>yum install gnupg2</tt> on CentOS/RHEL
   * <tt>dnf install gnupg2</tt> on Fedora
   * <tt>apt install gnupg</tt> on Debian/Ubuntu
   <br /><br />

1. On macOS, install <a target="_blank" href="https://superuser.com/questions/655246/are-gnupg-1-and-gnupg-2-compatible-with-each-other">gnupg2</a> for the gpg program:

   In the script, if each utility is found, it is re-installed if the REINSTALL flag is set on, which it is by default.

   <pre>MY_RUNTYPE="upgrade"
   &nbsp;
   if ! command -v gpg >/dev/null; then
      echo "Installing GPG2 for commit signing..."
      brew install gnupg2
      # See https://www.gnupg.org/faq/whats-new-in-2.1.html
   else
      if [[ "${MY_RUNTYPE,,}" == *"upgrade"* ]]; then
         echo "GPG2 upgrading ..."
         gpg --version | grep gpg  # outputs many lines!
         # To avoid response "Error: git not installed" to brew upgrade git
         brew uninstall --ignore-dependencies gpg2
         brew uninstall gnupg2
         # NOTE: This does not remove .gitconfig file entry.
         brew install gnupg2
      fi
   fi
   </pre>


1. Proceed to <a href="#Config">Configuration</a>



<a name="install-win"></a>

### Install Windows GUI 

TODO: 

1. Proceed to <a href="#Config">Configuration</a>


<a name="InstallWindowsCLI"></a>

### Install CLI on Windows

1. Install <a target="_blank" href="https://chocolatey.org/">Chocolatey</a> if you havent's already.

1. Install with one command using Chocolatey:

   <pre><strong>choco install gpg2 gnupg -y</strong></pre>

   Alternately, install <a target="_blank" href="https://www.gpg4win.org/">Gpg4win</a> GUI <a target="_blank" href="https://chocolatey.org/packages/Gpg4win">using Chocolatey</a>:

   <tt>choco install gpg4win</tt>

1. Proceed to <a href="#Config">Configurations (below)</a>.


<hr />

<a name="Config"></a>

## Configurations

At your local command line terminal:

1. Did you configure a user name and email in Git? View using this command:

   <pre><strong>git config --list | grep user
   </strong></pre>

1. If you haven't already, While in a Terminal with the present working directory at your local repository, configure you valid GitHub user name and email. For example:

   <pre><strong>git config --global user.name "John Doe"
   git config --global user.email "john_doe@gmail.com"
   </strong></pre>

   IMPORTANT PROTIP: Any name and email can be specified in Git, which means anyone can impersonate someone else to get a malicious commit PR accepted. This is a big reason organizations ask for cryptographically signing commits in GitHub, which requires that the email specified be validated.


   <a name="GitHubEmail"></a>

   ### Email address in GitHub

1. Be at a browser profile you want to use. (I click on my avatar on Chrome to setup a profile for each email address I use - one for personal Gmail, another for work)

1. Switch to your GitHub Profile Email page

   <a target="_blank" href="https://github.com/settings/emails">https://github.com/settings/emails</a>

1. Identify your "no-reply" public email address, such as "john_doe+github@gmail.com".

   <strong>IMPORTANT PROTIP: The email specified to GPG should match an email in GitHub.</strong>


<a name="RequireSigned"></a>

### Require Signed Commit on GitHub

GitHub Admins repos can require that commits be signed by <a target="_blank" href="https://docs.github.com/en/github/administering-a-repository/managing-a-branch-protection-rule#creating-a-branch-protection-rule">specifying branch protection rules</a> for all branches, for a specific branch, or for any branch that matches a name pattern matching a <a target="_blank" href="https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch">fnmatch syntax</a> such as <tt>*release*</tt> for branches containing the word "release".

See https://help.github.com/en/github/administering-a-repository/about-required-commit-signing


<hr />



<hr />

<a name="GenKeys"></a>

## Generate and store keys

There are several places you can store GPG keys securely:

   * On your local drive (which will be lost if your laptop dies or get lost)
   * <a href="#hashicorp-vault">Hashicorp Vault</a>
   * <a href="#Keybase">Keybase cloud (below)</a>

TODO:
   * Azure KeyVault?
   * AWS ?
   * Google Cloud?
   <br /><br />

<hr />

<a name="hashicorp-vault"></a>

### Hashicorp Vault

In a Terminal:

1. Install Hashicorp Vault program on your Mac:

   <pre><strong>brew install vault</strong></pre>

1. Confirm viability by displaying the program's version, such as:

   <pre><strong>vault --version</strong></pre>

   <pre>Vault v1.6.0 ('7ce0bd9691998e0443bc77e98b1e2a4ab1e965d4+CHANGES')</pre>

1. If you don't have a Hashicorp Vault server, follow my instructions to run it locally at:

   <a target="_blank" href="https://wilsonmar.github.io/hashicorp-vault">
   https://wilsonmar.github.io/hashicorp-vault</a>

1. In your $HOME folder, create a file named <strong>vaultvalues.env</strong>.
1. Grant run access to it:

   <pre>chmod +x vaultvalues.env</pre>

1. Use an editor to customize environment variables, starting with the host name and port of your Hashicorp Vault server in VAULT_ADDR:

   <pre># URL of the Hashicorp Vault server:
export VAULT_ADDR=https://localhost:8200
&nbsp;
# The signing backend endpoint (transit or gpg) and optionally hashing function:
# to use. Mandatory for signing.
export VAULT_SIGN_PATH=transit/sign/test/sha2-256
export VAULT_SIGN_PATH=gpg/sign/test/sha2-256
&nbsp;
# The verify backend endpoint (transit or gpg). Mandatory for verifying.
export VAULT_VERIFY_PATH=transit/verify/test
export VAULT_VERIFY_PATH=gpg/verify/test
&nbsp;
# The SNI to present during the TLS handshake (if different from the Vault HTTP
# host name). Useful when your Vault is exposed through an AWS private link for
# example. Optional.
export VAULT_TLS_SERVER_NAME=hostname.to.use.for.sni.com
   </pre>

1. Run the file to load environment variables:

   <pre><strong>cd $HOME
   </strong></pre>

1. Navigate into each repo and

   <pre>git config --local gpg.program "${VAULT_SIGN_PATH}"
   </pre>

1. Login to Vault:

   <pre># Login to vault:
vault login  # referencing $VAULT_ADDR
   </pre>

Proceed to <a href="#SignCommits">Sign Git commits and merges (below)</a>


References:
   * https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work
   * https://docs.github.com/en/github/authenticating-to-github/signing-commits
   * https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html
   * https://medium.com/hashicorp-engineering/securing-github-access-with-hashicorp-vault-c25ab8f5d5ea
   * https://github.com/martinbaillie/vaultsign
   * https://oteemo.com/hashicorp-vault-is-overhyped-and-mozilla-sops-with-kms-and-git-is-massively-underrated/

<hr />

<a name="Keybase"></a>

### Keybase cloud

   The advantage of using the Keybase app to generate GPG keys is that the keys are stored online at <a target="_blank" href="https://keybase.io/">keybase.io</a>, where you'll be able to retrieve your keys when you don't have your laptop anymore.

   The downside is that it's possible for Keybase.io to be hacked. 

   PROTIP: Keybase was acquired by Zoom in 2020. Some are concerned that Zoom will stop support of the product because Zoom only wanted the talent and not fund the free product.

   <a target="_blank" href="https://www.youtube.com/watch?v=4V-7KnhcrbY" title="Mar 14, 2018">VIDEO</a> explains
   <a target="_blank" href="https://github.com/pstadler/keybase-gpg-github">https://github.com/pstadler/keybase-gpg-github</a>

1. Go to <a target="_blank" href="https://keybase.io/">keybase.io</a> and create an account.

   NOTE: Because Keybase asks for verfification of social media accounts, it may be more comforting for repository owners to know that users went through more hoops to obtain and verify each of their accounts, so the account used is less likely to be a fake.
   Keybase provides value-added services such as adding encryption around direct messages on Twitter.
   <a target="_blank" href="https://www.youtube.com/watch?v=8_L6XljCZzA">VIDEO</a>: Keybase also works with the pass utility to manage passwords securely (like Vault).

1. Install the Keybase app to <tt>/Applications/Keybase.app</tt>:

   <pre><strong>brew install --cask keybase</strong></pre>

1. Sign locally out to the Keybase service:

   <pre><strong>keybase login</strong></pre>

   It takes a few seconds and returns you to the command prompt.

1. To avoid <a target="_blank" href="#https://blog.pablobm.com/2017/05/30/warning-server-gpg-agent-is-older-than-us.html">error message</a>: 

   <pre>gpg: WARNING: server 'gpg-agent' is older than us (2.2.20 < 2.2.23)
gpg: Note: Outdated servers may lack important security fixes.
gpg: Note: Use the command "gpgconf --kill all" to restart them.
   </pre>

   do this:

   <pre><strong>gpgconf --kill gpg-agent</strong></pre>

1. Import public keys using Keybase:

   <pre><strong>keybase pgp export | gpg --import</strong></pre>

   Example response:   

   <pre>gpg: key 938BBBDEB75FEA21: public key "Wilson Mar <wilsonmar@gmail.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1
   </pre>

1. Get the private key:

   <pre><strong>keybase pgp export --secret | gpg --allow-secret-key --import</strong></pre>

   If you see this response:

   <pre>▶ ERROR No matching keys found
gpg: no valid OpenPGP data found.
gpg: Total number processed: 0
   </pre>

   ...

1. Verify progress:

   <pre><strong>gpg --list-secret-keys</strong></pre>

1. Generate a GPG keypair:

   <pre><strong>keybase pgp gen --multi</strong></pre>

   Example prompts and responses:

   <pre>Enter your real name, which will be publicly visible in your new key: Patrick Stadler
Enter a public email address for your key: patrick.stadler@gmail.com
Enter another email address (or &Lt;enter> when done):
Push an encrypted copy of your new secret key to the Keybase.io server? [Y/n] Y
▶ INFO PGP User ID: Patrick Stadler <patrick.stadler@gmail.com> [primary]
▶ INFO Generating primary key (4096 bits)
▶ INFO Generating encryption subkey (4096 bits)
▶ INFO Generated new PGP key:
▶ INFO   user: Patrick Stadler <patrick.stadler@gmail.com>
▶ INFO   4096-bit RSA key, ID CB86A866E870EE00, created 2016-04-06
▶ INFO Exported new key to the local GPG keychain
   </pre>

1. Skip to <a href="#ListKeys">List GPG keys (below)</a>.



<hr />

<a name="ListKeys"></a>

## List GPG keys

List keys to verify that you have indeed generated them.

1. List what keys have been signed, meaning secret keys (more selective than the `gpg -k` command):

   <pre><strong>gpg --list-secret-keys --keyid-format LONG</strong></pre>

   <tt>\-\-keyid-format LONG</tt> requests showing only those keys where both public and private key pair exists. This is becuase both are required to sign commits and tags.
   If nothing is returned, there are no keys usable for signing.
   
   PROTIP: This above command can be used often, so added as Bash shell alias (keyboard shortcut) in <a target="_blank" href="https://github.com/wilsonmar/git-utilities/blob/master/aliases.sh">https://github.com/wilsonmar/git-utilities/blob/master/aliases.sh</a> so that you can instead just type:

   <pre><strong>gsk</strong></pre>

   In the response, the first line lists the location where keys are stored (with your own user name instead of "wilson_mar"):

   <pre>/Users/wilson_mar/.gnupg/pubring.kbx
------------------------------------
   </pre>

   PROTIP: File <tt>pubring.kbx</tt> is the Gnupg program's "Key Ring" file. See <a target="_blank" href="https://kb.iu.edu/d/awiu">https://kb.iu.edu/d/awiu</a> about keyring management commands.

1. To list all keys:

   <pre><strong>gpg --list-keys</strong></pre>


   ### External (GPG Suite) to openpgp.or

   If you're working on open-source projects, not for Enterprise internal use, you can
   install the <a target="_blank" href="https://gpgtools.org/">GPG Suite</a> (UI app)
   or <a href="#Keybase">Keybase.io</a>.


   The Suite can be installed as a <a target="_blank" href="https://formulae.brew.sh/cask/gpg-suite">Homebrew formula</a> "brew install --cask gpg-suite" (brew install --cask gpgtools no longer exists).
   The GUI app is installed at "/Applications/GPG Keychain.app".
   The first time it runs, this pop-up appears:

   <a target="_blank" href="git-signing-gpgtools-upload-828x498.png"><img width="414" alt="git-signing-gpgtools-upload-828x498.png" src="https://user-images.githubusercontent.com/300046/75632532-ef07ab00-5bca-11ea-8c4a-36000f5ed099.png"></a>

   Read about it at <a target="_blank" href="https://gpgtools.org/">GPGTools.org</a> and <a target="_blank" href="   https://gist.github.com/danieleggert/b029d44d4a54b328c0bac65d46ba4c65">here</a>.

   The Suite requires to be installed "brew install pinentry-mac", activated by then entry in file 
   <tt>~/.gnupg/gpg-agent.conf</tt> 

   <pre>pinentry-program /usr/local/MacGPG2/libexec/pinentry-mac.app/Contents/MacOS/pinentry-mac</pre>

1. If you are not using a Yubikey, proceed to <a href="#GenerateKey">Generate GPG key pairs</a>.


   <a name="Yubikey"></a>

   ## Optional Yubikey smart chip

   This is for those who work on multiple machines but want to use a single physical signing key they plug into each machine.

   If your laptop's USB has been locked down, skip this and move on to <a href="#GenerateKey">generate a key</a>.

   <a target="_blank" href="https://www.yubico.com/product/yubikey-5-nfc/"><img align="right" alt="git-siging-yubikey-100x100.jpg" width="100" src="https://user-images.githubusercontent.com/300046/75632026-faa4a300-5bc5-11ea-8471-60b6ef9981f6.jpg"></a>
   Instead of storing private keys on a laptop's hard drive (where they can be hacked by any program running on the computer), <a target="_blank" href="https://medium.com/@ahawkins/securing-my-digital-life-gpg-yubikey-ssh-on-macos-5f115cb01266">security-concious people</a> store their private keys in a separate physical <a target="_blank" href="https://en.wikipedia.org/wiki/OpenPGP_card">smartcard (OpenGPG card)</a> such as a <a target="_blank" href="https://www.yubico.com/quiz/">Yubikey device (one of several)</a>.

   PROTIP: If you lose your physical dongle, you'll need to re-generate all keys.

   Keys written to a card can only be used in combination with a PIN code, so that even if a YubiKey is stolen, a thief would not be able to authenticate directly.

   Each YubiKey is its own unique cardno.

1. Install software to manage Yubikey (<a target="_blank" href="https://github.com/Yubico/yubikey-manager">ykman</a>):

   <pre>brew install ykman
   brew install yubikey-personalization
   </pre>

   Install of yubikey-personalization issues Warning: ykpers 1.20.0 is already installed and up-to-date.

   QUESTION: How to check for vulnerabilities in the above utilities?

1. Use a text editor to add inside file <tt>~/.gnupg/gpg.conf</tt> "no-tty" so it contains:

   <pre>auto-key-retrieve
no-emit-version
no-tty
   </pre>

1. Insert your YubiKey and run:

   <pre><strong>gpgp --card-status</strong></pre>
   
   If you see these messages:
   <pre>gpg: selecting openpgp failed: Operation not supported by device
gpg: OpenPGP card not available: Operation not supported by device   
gpg/card>
   </pre>

   <a target="_blank" href="https://github.com/jeffmaher/yubikey-macos-setup">BLOG</a>: continue ...

   <pre>admin
   generate
   </pre>

   The response is like this:

   <pre>Reader ...........: Yubico Yubikey NEO OTP U2F CCID
Application ID ...: <em>ID</em>
Version ..........: 2.0
Manufacturer .....: Yubico
Serial number ....: <em>serial</em>
Name of cardholder: [not set]
Language prefs ...: [not set]
Sex ..............: unspecified
URL of public key : [not set]
Login data .......: [not set]
Signature PIN ....: not forced
   </pre>

   References on Yubikey on macOS Git:
   * https://github.com/drduh/YubiKey-Guide
   * https://www.isi.edu/~calvin/yubikeyssh.htm
   * https://hugotunius.se/2018/07/13/yubikey-ssh-authentication.html - 13 Jul 2018
   * https://raymondcheng.net/projects/2018/11/25/git-yubikey.html
   * https://evilmartians.com/chronicles/stick-with-security-yubikey-ssh-gnupg-macos



<hr />

<a name="GitKraken"></a>

### Install GitKraken app and sign

   Git UI clients such as <a target="_blank" href="https://support.gitkraken.com/git-workflows-and-extensions/commit-signing-with-gpg/">GitKraken can generate GPG keys with its UI</a>.

   GitKraken provides a GUI for signing.


<hr />

<a name="GenerateKey"></a>

## Generate GPG key pairs

On a macOS Terminal:

   ### Gen GPG on macOS

   PROTIP: In highly secure organizations, keys are generated by a security department and provided to workers.

1. Generate another key:

   <pre><strong>gpg --gen-key</strong></pre>

   <tt>\-\-generate-key</tt> is the long form of the parameter.

   The response:
   <pre>gpg (GnuPG/MacGPG2) 2.2.24; Copyright (C) 2020 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
&nbsp;
Note: Use "gpg --full-generate-key" for a full featured key generation dialog.
&nbsp;
GnuPG needs to construct a user ID to identify your key.
&nbsp;
Real name:
   </pre>

1. Enter in the series of prompts:

   <pre>Real Name: John Doe
Email address: john-doe+github@gmail.com
Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? _
   </pre>

   PRITIP: If you want to use different email addresses on different projects, generate one GPG key for each email address.

1. Type "O" (capital or lowercase O) to save the entry.

1. In response to "Please enter the passphrase to protect your new key":

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/75696173-26349580-5c79-11ea-9227-6731ccd22211.png"><img width="671" alt="git-signed-pass-form" src="https://user-images.githubusercontent.com/300046/75696173-26349580-5c79-11ea-9227-6731ccd22211.png"></a>
            
   PROTIP: Save you <strong>Passphrase</strong> in a secure place (such as in <a target="_blank" href="https://wilsonmar.github.io/hashicorp-vault/">Hashicorp Vault</a>), <strong>then</strong> copy it to paste in the prompt. This tactic is to ensure that you really can retrieve it when you use the key in a future command.

   REMEMBER: Don't reuse passwords and passphrases.

1. Re-enter the key.

1. Press Enter. Sample long-winded response:

   <pre>We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: key 62C414BA89BFBE52 marked as ultimately trusted
gpg: directory '/Users/wilson_mar/.gnupg/openpgp-revocs.d' created
gpg: revocation certificate stored as '/Users/wilson_mar/.gnupg/openpgp-revocs.d/0BB29E3C5216420CC50ACF8D62C414BA89BFBE52.rev'
public and secret key created and signed.
&nbsp;
pub   rsa2048 2020-03-01 [SC] [expires: 2022-03-01]
      0BB29E3C5216420CC50ACF8D62C414BA89BFBE52
uid                      Wilson Mar <john_doe+github@gmail.com>
sub   rsa2048 2020-03-01 [E] [expires: 2022-03-01]
   </pre>

   WARNING: Notice the expiry period is <strong>two years</strong> from date of creation.

   "rsa2048" is the encryption algorithm used.

1. <a href="#ListKeys">List keys</a> to obtain a KeyID.

   <pre>RESPONSE=$( gpg --list-secret-keys --keyid-format LONG )</pre>

   Parse the RESPONSE:

   <pre>gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
gpg: next trustdb check due at 2022-03-01
/Users/wilson_mar/.gnupg/pubring.kbx
------------------------------------
sec   rsa2048/62C414BA89BFBE52 2020-03-01 [SC] [expires: 2022-03-01]
      0BB29E3C5216420CC50ACF8D62C414BA89BFBE52
uid                 [ultimate] John Doe <john_doe+github@gmail.com>
ssb   rsa2048/7F2026C2A22F2B37 2020-03-01 [E] [expires: 2022-03-01]
   </pre>

1. Manually highlight and copy the GPG key ID, which is after "rsa2048/" in the sec section, <tt>62C414BA89BFBE52</tt> in the sample above.

   Alternately, use these Bash script lines to parse the key automatically:

   <pre>RESPONSE=$( gpg --list-secret-keys --keyid-format LONG | grep sec )
# secLine="sec rsa2048/62C414BA89BFBE52 2020-03-01 [SC] [expires: 2022-03-01]"
GPGKeyID=$( echo ${RESPONSE##*/} | cut -d " " -f 1 )
echo $GPGKeyID
   </pre>

1. To set your GPG signing key in Git, substitute the GPG key ID you'd like to use with the value of $GPGKeyID:

   <pre><strong>git config --global user.signingkey 62C414BA89BFBE52  #</strong></pre>

   No response is expected from the command.


   <a name="EditGPG"></a>

   ### OPTIONAL: Edit GPG key

   In case you want to fix a typo:

1. Associate an email (value for field uid) with your GPG key, which Git requires by entering the <strong>edit-key</strong> mode:

   <pre><strong>gpg --edit-key 62C414BA89BFBE52</strong></pre>

   This results in this prompt:

   <pre>gpg></pre>

1. Specify "adduid" to enter that mode:

   <pre>gpg> <strong>adduid</strong></pre>

1. Enter in the series of prompts:

   <pre>Real Name: John Doe
Email address: john-doe+github@gmail.com
Comment: My Git signing key
Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
   </pre>

   The response is like:

   <pre>You selected this USER-ID: 
    "John Doe (My Git signing key) &LT;john_doe+github@gmail.com>"
   </pre>

1. Type "O" (capital or lowercase O) to save the entry.


   <a name="CopyPasteGitHub"</a>

   ## Copy and Paste in GitHub

1. Prepare for pasting of the key generated in this next step by switching to an internet browser of the GitHub page that will receive the public key. After signing in, click your icon at the upper-right, select Settings, SSH and GPG keys:

   <a target="_blank" href="https://github.com/settings/keys">
   https://github.com/settings/keys</a>

1. Click "New GPG key" for a form to accept the contents of the public GPG key,
   then press command+Tab to switch back to the Terminal.

1. Print the public GPG key, in <strong>ASCII armor</strong> format so that they can be sent in a standard messaging format such as email. (Otherwise, the output is in binary format). 

   <pre><strong>gpg --armor --export 62C414BA89BFBE52 >$HOME/mygitsigning.pub</strong></pre>

   PROTIP: Redirecting the command output to a file makes it easier and less error-prone than manually highlighting and copying.

1. Copy the file's contents to your operating system Clipboard:

   <pre><strong>pbcopy < "$HOME/mygitsigning.pub"</strong></pre>

   On Windows, pipe file contents to the clip.exe program built in within C:\Windows\system32 <a target="_blank" href="https://superuser.com/questions/472598/pbcopy-for-windows">*</a>:

   <pre><strong>type mygitsigning.pub | clip</strong></pre>

   Alternately, open the file using a text editor, select all file contents, and copy to Clipboard.

   The public key contents should include markers "-----BEGIN PGP PUBLIC KEY BLOCK-----" and "-----END PGP PUBLIC KEY BLOCK-----".

1. Switch to the GitHub page opened and click on the input field (so the field border turns blue), then press command+V to paste. Click "Add GPG key".

   PROTIP: IMPORTANT: If you lost your laptop, immediately remove the SSH and GPG keys associated with that laptop.
   


   <a name="SigningKey"></a>

   ## Signing Key 

1. Configure Git to use the program for signing:

   <pre><strong>git config --global gpg.program gpg
   </strong></pre>

1. Configure Git to use your chosen key for signing ("0A46826A" in the example here):

   <pre><strong>git config --global user.signingkey 62C414BA89BFBE52
   </strong></pre>

1. Configure Git to auto-sign ALL Git Tags (called annotations by Git):

   <pre><strong>git config --global tag.forceSignAnnotated true
   </strong></pre>


   <a name="SignAllCommits"></a>

   ### Sign all commits

   PROTIP: Many say it's not necessary to sign every commit, just the commit designated by a release.

1. Configure Git to auto-sign ALL commits on ALL repos:

   <pre><strong>git config --global commit.gpgsign true
   </strong></pre>

   PROTIP: It takes a little more time to sign commits.

1. Each command above adds an entry in file <tt>$HOME/.gitconfig</tt> created by the Git client:

   <pre>[user]
	name = John Doe
	email = john_doe+github@gmail.com
	signingkey = 62C414BA89BFBE52
[gpg]
	program = gpg2
   </pre>

1. If you are using Bash, edit you ~/.bash_profile to avoid these error messages:

   <pre>error: gpg failed to sign the data
fatal: failed to write commit object
   </pre>

   If using Zsh, edit your ~/.bashrc file.

   Add lines to the bottom of the Shell invocation file:

   <pre><strong>test -r ~/.bash_profile && echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile
echo 'export GPG_TTY=$(tty)' >> ~/.profile
   </strong></pre>

   <tt>GPG_TTY</tt> variable is to avoid errors.

1. Confirm:

   <pre><strong>echo $GPG_TTY
   </strong></pre>

   <pre>/dev/ttys001
   </pre>
   or 
   <pre>/dev/ttys002
   </pre>

1. Activate the setting by restarting your Terminal session. If using Bash:

   <pre><strong>source ~/.bash_profile
   </strong></pre>

   If using Zsh:

   <pre><strong>source ~/.bashrc
   </strong></pre>


<hr />

<a name="SignCommits"></a>

## Sign Git Commits & merges

1. Edit some file
1. Add

   <pre><strong>git add .</strong></pre>

   This is not recommended by some, but ...

1. To sign a commit, if you didn't <a href="#SignAllCommits">specify signing every time</a>,
   add command flag capital <tt>-S</tt>, construct a command replacing "Some message" in the command with your own message:

   <pre><strong>GIT_TRACE=1 git commit -a -S -m "Some message"</strong></pre>

   A sample response at time of writing:

   <pre>03:48:07.999728 exec-cmd.c:139          trace: resolved executable path from Darwin stack: /Library/Developer/CommandLineTools/usr/bin/git
03:48:08.000435 exec-cmd.c:236          trace: resolved executable dir: /Library/Developer/CommandLineTools/usr/bin
03:48:08.001587 git.c:418               trace: built-in: git commit -a -S -m 'Some message'
03:48:08.017126 run-command.c:643       trace: run_command: gpg2 --status-fd=2 -bsau 62C414BA89BFBE52
03:48:08.153175 run-command.c:643       trace: run_command: git gc --auto
03:48:08.156446 exec-cmd.c:139          trace: resolved executable path from Darwin stack: /Library/Developer/CommandLineTools/usr/libexec/git-core/git
03:48:08.157243 exec-cmd.c:236          trace: resolved executable dir: /Library/Developer/CommandLineTools/usr/libexec/git-core
03:48:08.158689 git.c:418               trace: built-in: git gc --auto
[master 71ad705] Some message
 1 file changed, 1 insertion(+)
   </pre>

1. After push, switch to an internet browser to see a verified badge next to your commits on GitHub online.

   <img width="413" height="262" alt="git-signing-ale-413x262" src="https://user-images.githubusercontent.com/300046/116947094-1d52a180-ac39-11eb-99c0-a76e793f0b8e.png">


# Specif -S to sign a commit and tag:
git commit -m "test signed commit" -S
git tag -m "test signed tag" -s test
&nbsp;
# Verify the same commit and tag.
git verify-commit HEAD
git log -1 --show-signature
git verify-tag test
   </pre>

1. Verify that green checkmark next to your name on GitHub.



<hr />

<a name="SignGitTags"></a>

## Sign Git Tags

   <a target="_blank" href="https://www.youtube.com/watch?v=govmXpDGLpo" title="Dec 31, 2016">VIDEO</a>: Git tags are committed and pushed by an additional command.

1. Construct a command to create a Git tag (such as "v1.5.2") to the current HEAD:

   <pre><strong>GIT_TRACE=1 git tag -a -s v1.5.2 -m 'Signed tag 1.5.2'</strong></pre>

   <tt>-a</tt> (annotation) puts the tag in the repository when pushed to GitHub.

   PROTIP: Git tags are like a branch name. in Semantic Versionioning format. See semver.com.

   <tt>GIT_TRACE=1</tt> enables tracing. Example output on macOS:
   
   <pre>03:45:46.646487 exec-cmd.c:139          trace: resolved executable path from Darwin stack: /Library/Developer/CommandLineTools/usr/bin/git
03:45:46.647227 exec-cmd.c:236          trace: resolved executable dir: /Library/Developer/CommandLineTools/usr/bin
03:45:46.647782 git.c:418               trace: built-in: git tag -a -s v1.5.2 -m 'Signed tag 1.5.2'
03:45:46.650392 run-command.c:643       trace: run_command: gpg2 --status-fd=2 -bsau 62C414BA89BFBE52
   </pre>

   You are prompted for the GPG key Passphrase.

   Alternately, construct a command to create a Git tag (such as "v1.5.2") to a <strong>previous commit</strong> SHA (such as "f3c9f3a"):

   <pre><strong>GIT_TRACE-1 git tag v1.5.2 f3c9f3a</strong></pre>


   ### List Git tags

1. For a list of all version 1 tags:

   <pre><strong>git tag -l "v1.*"</strong></pre>

1. See signing info with your latest commit in the git log:

   <pre><strong>git log --show-signature -1</strong></pre>

   The response would include, for example:

   <pre>commit 71ad7059817e609b52b29469e1214a56799b33ef (HEAD -> master)
gpg: Signature made Mon Mar  2 11:07:39 2020 EST
gpg:                using RSA key 0BB29E3C5216420CC50ACF8D62C414BA89BFBE51
gpg: Good signature from "John Doe <john_doe+github@gmail.com>" [ultimate]
   </pre>


   ### Silencing

   I don't recommend this, but theoretically you can silence the "you need a Passphrase" prompt by adding in file <tt>~/.gnupg/gpg.conf</tt> "batch". But 

   <pre># Connects gpg-agent to the OSX keychain via the brew-installed
# pinentry program from GPGtools. This is the OSX 'magic sauce',
# allowing the gpg key's passphrase to be stored in the login
# keychain, enabling automatic key signing.
pinentry-program /usr/local/bin/pinentry-mac   
   </pre>


   <a name="Push"></a>

   ## Push by Tag

   PROTIP: REMEMBER: Tags are push of tags are <strong>in addition</strong> to content commits.

1. For convenience (in scripts), push all tags to GitHub:

   <pre><strong>git push --tags</strong></pre>

   Alternately, specify the new Tag like a branch:

   <pre><strong>git push origin v1.5.2</strong></pre>

   A sample response:

   <pre>Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 540 bytes | 540.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To github.com:wilsonmar/git-utilities
 * [new tag]         v1.5.2 -> v1.5.2
   </pre>

1. See Tags in GitHub under the <strong>Code</strong> tab, after clicking the <strong>release</strong> link above GitHub's colorful line:

   <tt>https://github.com/wilsonmar/git-utilities/releases</tt>


<hr />

<a name="DeleteTags"></a>

## Delete Tags

   Git tags such as "v1.5.2" are meant to be permanently associated with a particular commit through history.

1. To delete a Tag locally:

   <pre><strong>git tag -d v1.5.2</strong></pre>

   Alternately, <tt>--delete</tt> is the long form of the <tt>-d</tt> parameter.

   Multiple tags can be specified in one command (separated by spaces).

1. To delete a Tag in remote (GitHub):

   <pre><strong>git push origin -d v1.5.2</strong></pre>

   Alternately, the really short form replaces -d with a colon (:):

   <pre><strong>git push origin :v1.5.2</strong></pre>


   ## Tags in CI/CD

1. View the list of tags with their full (40 character) hash using the <a target="_blank" href="https://git-scm.com/docs/git-show-ref">git show-ref command</a>:

   <pre><strong>git show-ref --tags
   </strong></pre>

   PROTIP: The above command was added as Bash shell alias (keyboard shortcut) in <a target="_blank" href="https://github.com/wilsonmar/git-utilities/blob/master/aliases.sh">https://github.com/wilsonmar/git-utilities/blob/master/aliases.sh</a> so that you can instead just type:

   <pre><strong>gst
   </strong></pre>

   The response is a list of full hashes with the path, such as:

   <pre>d4c1e33d1969c8b35938db498a556de25b8c3aa3 refs/tags/v1.5.2</pre>

1. <a target="_blank" href="https://www.youtube.com/watch?v=3SQhq12nEZI" title="Apr 21, 2019">
   VIDEO:</a> In CI/CD such as Jenkins, get the first among latest tags using the <a target="_blank" href="https://git-scm.com/docs/git-ref-list">git ref-list command</a>:

   <pre><strong>COMMIT_ID=$( git rev-list --tags --date-order | head -1 )
   </strong></pre>

   The response is simply a full hash, such as:

   <pre>d4c1e33d1969c8b35938db498a556de25b8c3aa3</pre>

1. Extract the Tag based on the hash using the <a target="_blank" href="https://git-scm.com/docs/git-show-ref">git show-ref command</a>:

   <pre><strong>TAG=$( git show-ref --tags | grep "${COMMIT_ID}" | awk -F / '{print $NF}' )
   </strong></pre>

   The variable is used to specify the version in a Docker Build, Push, then Kubernetes apply, such as:

   <pre><strong>docker build -t "$DOCKER_ACCOUNT/$DOCKER_REPO:$TAG" .
   docker push "$DOCKER_ACCOUNT/$DOCKER_REPO:$TAG"
   sed -e "s/VERSION/$TAG/" /home/centos/deployment.yml >/tmp/deployment.yml
   kubectl apply -f /tmp/deployment.yml
   kubectl get pods -o wide
   </strong></pre>


<hr />

<a name="EncryptFiles"></a>

## BONUS: Encrypting whole files using GPG

GPG can also be used for encryption and decryption of whole files, such as an executable (.exe) file for transmission over email, etc (not related to Git).

There are several ways to verify both the integrity of a file during transmission (as hashing can do) but also provide a way for users to trace authorship.

The steps below describes work with a <strong>detached signature</strong> where a signature is created in a separate file. We can then provide both the package and the signature file from a trusted source. The user can then verify the package against it. This is like with a hash, but instead of a cleartext signature, the signature is in a ".sig" file which has been encrypted using a private key known only to the file's owner.

<a target="_blank" href="https://davidboland.site/blog/signing-you-work-as-a-developer">BLOG</a>:
Users may want this level of verification for security reasons. Especially if the package handles sensitive information.

1. Get the signature, such as "62C414BA89BFBE52".

1. To create a signed file:

   <pre><strong>gpg --detach-sign --sign-with 62C414BA89BFBE52 -o package.sig package.exe
   </strong></pre>

   <tt>\-\-detach-sign</tt> requests a detached signature to be generated.

   <tt>\-\-sign-with</tt> precedes the GPG key id to be used to perform signing.

   <tt>-o</tt> specifies the output file. Traditionally we use either a <tt>.sig</tt> or a <tt>.gpg</tt> extension.

1. For a user to verify integrity of the file:

   <pre><strong>gpg --verify package.sig package.exe
   </strong></pre>


### Standard signing

Standard signing and clear signing both create ciphertext from the cleartext input file:
   * Standard signing is used with encryption. 
   * Clear signing wraps the input with a plaintext signature. 
   <br /><br />

1. To sign a plaintext file with your secret key:

   <pre><strong>gpg -s textfile</strong></pre>
  
1. To encrypt a plain text file with the user_id of the recipient's public key:

   <pre><strong>gpg -e -r recipient_userid textfile</strong></pre>

1. To sign a plaintext file with your secret key and have the output readable to people without running GPG first:

   <pre><strong>gpg --clearsign textfile</strong></pre>

1. To sign a plaintext file with your secret key, and then encrypt it with the recipient's public key:

   <pre><strong>gpg -se -r recipient_userid</strong></pre>

1. To decrypt a ciphertext file to a clear text outputfile, also checking the signature integrity of a signed file:

   <pre><strong>gpg -o outputfile ciphertextfile</strong></pre>


<hr />

## Resources

This article was the result of consulting several sources of information:

As with all things Git, the canonical documentation is at git-scm.
Regarding Git signing:
<a target="_blank" href="https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work">
https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work</a>

<a target="_blank" href="
https://help.github.com/en/github/authenticating-to-github/telling-git-about-your-signing-key">
https://help.github.com/en/github/authenticating-to-github/telling-git-about-your-signing-key</a>

<a target="_blank" href="
https://help.github.com/en/enterprise/2.17/user/github/authenticating-to-github/signing-commits">
https://help.github.com/en/enterprise/2.17/user/github/authenticating-to-github/signing-commits</a>

Explanation of gpg program parameters are at:
<a target="_blank" href="https://www.gnupg.org/documentation/manuals/gnupg/GPG-Input-and-Output.html">https://www.gnupg.org/documentation/manuals/gnupg/GPG-Input-and-Output.html</a>

<a target="_blank" href="https://medium.com/@rwbutler/signing-commits-using-gpg-on-macos-7210362d15">Protect Your Git Repositories From Commit Forgery Using Signing</a>

<a target="_blank" href="
https://confluence.atlassian.com/bitbucketserver/using-gpg-keys-913477014.html">
https://confluence.atlassian.com/bitbucketserver/using-gpg-keys-913477014.html</a>

<a target="_blank" href="https://www.youtube.com/watch?v=KhROpuxHyH8" title="Jul 8, 2018">
VIDEO: [Git/GitHub] Signing your commits in GitHub -- Getting the verified badge on your commits</a> by Raveesh Agarwal

<a target="_blank" href="
https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0">
https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0</a>

<a target="_blank" href="
https://juliansimioni.com/blog/troubleshooting-gpg-git-commit-signing/">
https://juliansimioni.com/blog/troubleshooting-gpg-git-commit-signing</a>
quotes
<a target="_blank" href="
https://wiki.gentoo.org/wiki/GnuPG#Changing_pinentry_for_SSH_logins/">
https://wiki.gentoo.org/wiki/GnuPG#Changing_pinentry_for_SSH_logins</a>

<a target="_blank" href="
https://ice-blog.readthedocs.io/en/latest/tutorial/encrypt/gpg/">
https://ice-blog.readthedocs.io/en/latest/tutorial/encrypt/gpg</a>

<a target="_blank" href="
https://jigarius.com/blog/signing-git-commits" title="Sep 6, 2019">
https://jigarius.com/blog/signing-git-commits</a>

<a target="_blank" href="
https://gist.github.com/troyfontaine/18c9146295168ee9ca2b30c00bd1b41e">
https://gist.github.com/troyfontaine/18c9146295168ee9ca2b30c00bd1b41e</a>

<a target="_blank" href="https://www.youtube.com/watch?v=KhROpuxHyH8" title="Jul 7, 2018">VIDEO</a>: [Git/GitHub] Signing your commits in GitHub -- Getting the verified badge on your commits</a>

<a target="_blank" href="https://mikegerwitz.com/2012/05/a-git-horror-story-repository-integrity-with-signed-commits">
A Git Horror Story: repository integrity with signed commits</a>


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
