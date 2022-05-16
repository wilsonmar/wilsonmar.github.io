---
layout: post
title: "Git Signing"
excerpt: "Sign git commits and tags (for non-repudiation) in GitHub using GPG, Vault, Yubikey, Keybase"
tags: [git, security]
date: "2021-07-22"
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

The contribution of this article is a logical ordering of <strong>deep-dive</strong> concepts presented in a succinct way, as a hands-on narrated scenic tour. "PROTIP" flags advice from hard-won experience such as relevant keyboard shortcuts and things to remember, available only here for you.

<img align="right" width="413" height="262" alt="git-signing-ale-413x262" src="https://user-images.githubusercontent.com/300046/116947094-1d52a180-ac39-11eb-99c0-a76e793f0b8e.png">
> "If you ... want to verify that commits are actually from a trusted source, Git has a few ways to sign and verify work using GPG." -<a target="_blank" href="https://git-scm.com/docs/git-show-ref">git-scm.com/show-ref command</a>


<a name="Variations"></a>

## Decisions: Variations

This workflow can seem complicated because there are several options: <a href="#Variations">tooling variations (described below)</a>:

   * Operating system of local machine (macOS, Windows, Linux flavors)
   * Install a GUI app and/or Command-line program to sign keys
   * Download <a href="#Installers">installer</a> from publisher web page or run package manager (Homebrew, Chocolately)

   * The secret-keeping service (macOS Keychain, GPG, Yubikey, <a href="#Keybase">Keybase.io</a>, <a href="#SelfService">employer-specified</a>, etc.)
   * Sign every commit or just git tag each release?
   <br /><br />

The workflow:

   1. <a href="#Variations">Make decisions about install variations</a>
   2. <a href="#Installers">Install apps and programs locally</a>
   3. <a href="#Configurations">Configure emails</a> and <a href="#RequireSigned">set up GitHub to require signing</a>
   4. <a href="#GenKeys">Generate</a> and <a href="#ListKeys">list keys</a>
   5. <a href="#CopyPasteGitHub">Add public GPG key to GitHub</a>
   6. <a href="#SignCommits">Sign Git commits and merges</a>
   7. <a href="#SignGitTags">Sign Git Tags</a>
   8. Import key to GPG on another host
   <br /><br />

BONUS: Since we're using GPG, here are also <a href="#EncryptFiles">notes about signing of whole files using GPG</a> and <a href="#FacebookSigning">getting Facebook to encrypt notification emails it sends you</a>.https://www.cnet.com/how-to/how-to-make-facebook-send-you-encrypted-notification-emails/


<hr />

<a name="Installers"></a>

## Install client utilities

The alternatives:

   * <a href="#install_gpg-suite">Install on macOS GUI GPG-Suite </a> app which stores keys in the protected macOS KeyChain. This is the simplest approach.

   * <a href="#gnupg2_mac_install">Install on macOS CLI GPGN2</a>
   * <a target="_blank" href="https://www.goanywhere.com/openpgp-studio">Install Open GPG Studio from GoAnywhere (free)</a>

   * <a href="#InstallWindowsCLI">Install on Windows CLI program</a>
   * <a href="#install-win">Install on Windows a GUI app</a>

   * <a href="#GitKraken">Install GitKraken app and sign</a>
   <br /><br />

<a name="SelfService"></a>

Enterprises would use a centrally administered system to install for all users, such as:
   * <a target="_blank" href="http://kb.mit.edu/confluence/display/istcontrib/Jamf+Pro+-+FileVault+2+Encryption">JAMF for macOS machines</a>
   * <a target="_blank" href="https://docs.microsoft.com/en-us/mem/intune/protect/certificates-pfx-configure">Microsoft InTune for Windows laptops</a>
   <br /><br />

Desired "Self-Serve" Workflow:

Here's the workflow I would like to see. It's not so much self-service as a tool for administrators. Anyway...

Before someone starts a job/project, a trusted administrator (the boss) specifies on a "self-service" portal what should be installed on each worker's laptop, such as the <a href="#Installers">client utilities</a> which should be installed for his/her specific job based on RBAC (Role-Based Access Control) or <a target="_blank" href="https://en.wikipedia.org/wiki/Attribute-based_access_control">Attribute-based Access Control (ABAC)</a> policies.

The app generates the certificate pairs, stores them in Vault, installs them on GitHub, and saves the keys on the worker's laptop. This provides a more trusted chain than each employee generating their own key pair.

Then all a new working developer needs to do is, on a pre-configured laptop, make a change and do a git <a href="#SignTag">tag</a> or <a href="#SignCommits">add and commit with a tag</a>, then <a href="#Push">push</a>.


<a name="GitHubEmail"></a>

### Email address in GitHub

   We want to configure GitHub to use your primary email in the form such as:
   
   <tt><strong>john_doe+github@gmail.com</strong></tt>

   The extra "+github" confuses simple attempts.

1. Be at a browser profile you want to use. (I click on my avatar on Chrome to setup a profile for each email address I use - one for personal Gmail, another for work)

1. In your browser, open a new tab to view your GitHub Profile Email page:

   <a target="_blank" href="https://github.com/settings/emails">https://github.com/settings/emails</a>

1. If your primary email does not have "+github", type your address with the extra "+github" in the <tt>Add email address</tt> field, then click "Add".

1. If you are using Gmail or another email system that processes "+github" emails, for "Primary email address", select that as your primary email.

   <strong>IMPORTANT PROTIP: The email specified to GPG should match that reply email in GitHub.</strong>

   Alternatively, highlight your "no reply" email address under the "Primary email address" heading. Example:

   <tt>12345678+johndoe@users.noreply.github.com</tt>

   Press command+C to copy it to your Clipboard.

   In your notes, press command+V to save that for use <a href="#SignCommits">to Sign Commits (below)</a>.


<a name="install_gpg-suite"></a>

### Install on macOS GUI app GPG-Suite 

Instead of <a target="_blank" href="https://www.youtube.com/watch?v=FrrT9fYoL3Y">VIDEO: downloading from website and clicking</a> manually:

1. Install silently with one command after <a target="_blank" href="https://wilsonmar.github.io/homebrew/">installing Homebrew</a>:

   <pre><strong>brew install --cask gpg-suite</strong></pre>

   (its previous name was gpgtools, as in the website gpgtools.com)

1. Type your password when prompted.

   <pre>==> Caveats
Cask gpg-suite installs files under /usr/local. The presence of such
files can cause warnings when running `brew doctor`, which is considered
to be a bug in Homebrew Cask.
&nbsp;
==> Downloading https://releases.gpgtools.org/GPG_Suite-2021.1_105.dmg
######################################################################## 100.0%
==> Installing Cask gpg-suite
==> Running installer for gpg-suite; your password may be necessary.
Package installers may write to any location; options such as `--appdir` are ignored.
installer: Package name is GPG Suite
installer: Upgrading at base path /
installer: The upgrade was successful.
🍺  gpg-suite was successfully installed!
   </pre>

1. Verify folder created during installation (include the quotes because the folder contains a space character):

   <pre><strong>ls -al "/Applications/GPG Keychain.app/Contents/"</strong></pre>

   <pre>total 16
drwxr-xr-x   8 root  admin   256 May 14 18:37 .
drwxr-xr-x   3 root  admin    96 May 14 18:37 ..
drwxr-xr-x   3 root  admin    96 May 14 18:37 Frameworks
-rw-r--r--   1 root  admin  3354 May 14 18:37 Info.plist
drwxr-xr-x   3 root  admin    96 May 14 18:37 MacOS
-rw-r--r--   1 root  admin     8 May 14 18:37 PkgInfo
drwxr-xr-x  43 root  admin  1376 May 14 18:37 Resources
drwxr-xr-x   3 root  admin    96 May 14 18:37 _CodeSignature
   </pre>

   To remove the app later, simply delete folder "GPG Keychain.app", which would make certs disappear too. That's why we will later save the certs to a location off your laptop.

1. Open the app from Terminal:

   <pre><strong>open "/Applications/GPG Keychain.app"</strong></pre>

   Alternately, pinch 4 fingers together on the Touchpad and type enough of "GPG Keychain" for the icon to appear for you to click:

   <img width="126" alt="git-signing-gpg-suite" src="https://user-images.githubusercontent.com/300046/95812445-a83a7180-0cd2-11eb-8c70-bfa7b1a5032b.png">

1. Click here to <a href="VerifyGPG">skip to Verify GPG (below)</a>.


   #### Gen GPG using macOS GPG-Suite

1. Click "Show secret keys only" to ignore the Pub (Public) keys there by default.
1. If there are green boxes marking your email from a previous session, you need to revoke it before creating a new key for that email.

1. To generate a GPG key pair click "+ New" for the pop-up dialog.
1. Click "Advanced options" to select Key Type "RSA (sign only)".

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/122693753-78941f80-d1f8-11eb-8c43-23dc4198b426.png">
   <img width="770" alt="git-signing-mac-keychain-1540x804.png" src="https://user-images.githubusercontent.com/300046/122693753-78941f80-d1f8-11eb-8c43-23dc4198b426.png"></a>

1. Type your name in title case.
1. Type your email with the extra "+github" such as "wilsonmar+github@gmail.com".
1. Define a new password in your password vault, then copy and paste that new password in the two fields.
1. Make a note of the expiration date (by default four years from current date).
1. Click "Create Key".
1. If you select "No, Thanks!" to upload your public key and do that later from the "Key" menu item.
1. Press Command+Q to quit the GPG Keychain program.


   <a name="gnupg2_mac_install"></a>

   ### Install on macOS CLI utility gnupg2 

1. Open a Terminal. Be at your home user folder.

1. Execute a Bash script to do the following:
   
   Alternately, manually install <a target="_blank" href="https://wilsonmar.github.io/macos-homebrew/">brew (Homebrew)</a>
   
1. Upgrade or Install a Git client using <a target="_blank" href="https://formulae.brew.sh/formula/gnupg">Homebrew's gnupg formulae</a>

   <pre><strong>brew upgrade git</strong></pre>

   If git was not previously installed, install it:

   <pre><strong>brew install git</strong></pre>

   Notice the response is for a specific version of MacOS (Mojave in this case):

   <pre>==> Upgrading 1 outdated package:
git 2.25.0_1 -> 2.32.0
==> Upgrading git 2.25.0_1 -> 2.32.0
==> Downloading https://ghcr.io/v2/homebrew/core/git/manifests/2.32.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/git/blobs/sha256:3c613c84fbc741
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Pouring git--2.32.0.mojave.bottle.tar.gz
==> Caveats
The Tcl/Tk GUIs (e.g. gitk, git-gui) are now in the `git-gui` formula.
&nbsp;
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
&nbsp;
Emacs Lisp files have been installed to:
  /usr/local/share/emacs/site-lisp/git
==> Summary
🍺  /usr/local/Cellar/git/2.32.0: 1,517 files, 41.5MB
   </pre>

1. For information about the brew gpg2 install:

   <pre><strong>brew info gnupg2</strong></pre>

   The response at time of writing:

   <pre>ggnupg: stable 2.3.1 (bottled)
GNU Pretty Good Privacy (PGP) package
https://gnupg.org/
/usr/local/Cellar/gnupg/2.3.1_1 (149 files, 12.4MB)
  Poured from bottle on 2021-06-18 at 18:20:55
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/gnupg.rb
License: GPL-3.0-or-later
==> Dependencies
Build: pkg-config ✔
Required: gettext ✔, gnutls ✔, libassuan ✔, libgcrypt ✔, libgpg-error ✔, libksba ✔, libusb ✔, npth ✔, pinentry ✔, sqlite ✔
==> Analytics
install: 80,503 (30 days), 225,125 (90 days), 862,924 (365 days)
install-on-request: 74,096 (30 days), 208,203 (90 days), 786,528 (365 days)
build-error: 0 (30 days)
   </pre>

1. Edit your <tt>~/.bash_profile</tt> or <tt>~/.bashrc</tt> file to ensure that commands for "gpg" are routed to gpg2:

   <pre>alias gpg="gpg2"
   echo -e "\n$(gpg --version | grep gpg)"    # gpg (GnuPG) 2.2.19
   </pre>

   PROTIP: The response shows that the installation is specific to each version of macOS:<br />
   <pre>==> Downloading https://homebrew.bintray.com/bottles/gmp-6.2.0.mojave.bottle.tar.gz</pre>

1. Compare response from:

   <pre><strong>brew info gpg</strong></pre>

   Yeah, the same.


   <a name="VerifyGPG"></a>

   #### Verify GPG install version

1. Verify CLI noted <a target="_blank" href="https://www.wikiwand.com/en/GNU_Privacy_Guard">
in Wikipediat/Wikiwand.com/en/GNU_Privacy_Guard</a> which states the source at <a target="_blank" href="https://dev.gnupg.org/source/gnupg/">d2qa  dev.gnupg.org/source/gnupg</a>

   <pre><strong>gpg --version</strong></pre>

   <pre>gpg (GnuPG/MacGPG2) 2.2.27
libgcrypt 1.8.7
Copyright (C) 2021 Free Software Foundation, Inc.
License GNU GPL-3.0-or-later <https://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
&nbsp;
Home: /Users/wilsonmar/.gnupg
Supported algorithms:
Pubkey: RSA, ELG, DSA, ECDH, ECDSA, EDDSA
Cipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,
        CAMELLIA128, CAMELLIA192, CAMELLIA256
Hash: SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224
Compression: Uncompressed, ZIP, ZLIB, BZIP2
   </pre>

1. Obtain keys:

   <pre><strong>gpg -k</strong></pre>

   Response:

   <pre>pub   rsa4096 2021-06-20 [SC] [expires: 2025-06-20]
      123456789E91004D4C5D88CAE21961814AC0EF1B
uid           [ultimate] John Doe <johndoe+github@gmail.com>
   </pre>


   ### MacOS GPG Config

   PROTIP: The command above creates folder `$HOME/.gnupg`.

1. Update or Create ~/.gnupg/gpg.conf

   <pre><strong>code $HOME/.gnupg/gpg.conf
   </strong></pre>

   Visual Studio Code should open with lines such as:
   <pre>auto-key-retrieve
no-emit-version
   </pre>

1. If the <tt>use-agent</tt> is not there, add it. If it's there, remove the comment character # from "use-agent" to enable it:
   
   <pre># Uncomment within config (or add this line)
   # This tells gpg to use the gpg-agent
   use-agent
   </pre>

1. Add the default-key from the steps above:

   <pre>default-key 123456789E91004D4C5D88CAE21961814AC0EF1B
   </pre>

1. Save the file. Switch back to the CLI Terminal.

1. Update permissions on your `~/.gnupg` Directory:

   <pre><strong>chmod 700 ~/.gnupg</strong></pre>

1. Proceed to <a href="#Config">Configuration (below)</a>


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

## Configure

At your local command line terminal:

1. Did you configure a user name and email in Git? View using this command:

   <pre><strong>git config --list | grep user
   </strong></pre>

   Example response:

   <pre>user.name=wilsonmar
user.email=wilsonmar+github@gmail.com
user.id=WilsonMar+github@gmail.com
user.username=hotwilson
user.signingkey=E62CF51CE3E5A4E8
   </pre>

1. You may not want to do this if you're configuring for multiple organizations. But if you are working with only one GitHub account, if you haven't already, while in a Terminal with the present working directory at your local repository, configure you valid GitHub user name and email. For example:

   <pre><strong>git config --global user.name "John Doe"
   git config --global user.email "john_doe@gmail.com"
   </strong></pre>

   IMPORTANT PROTIP: Any name and email can be specified in Git, which means anyone can impersonate someone else to get a malicious commit PR accepted. This is a big reason organizations ask for cryptographically signing commits in GitHub, which requires that the email specified be validated.


<a name="RequireSigned"></a>

### Require Signed Commit on GitHub

GitHub Admins repos can require that commits be signed by <a target="_blank" href="https://docs.github.com/en/github/administering-a-repository/managing-a-branch-protection-rule#creating-a-branch-protection-rule">specifying branch protection rules</a> for all branches, for a specific branch, or for any branch that matches a name pattern matching a <a target="_blank" href="https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch">fnmatch syntax</a> such as <tt>*release*</tt> for branches containing the word "release".

See https://help.github.com/en/github/administering-a-repository/about-required-commit-signing


<hr />

<a name="GenKeys"></a>

## Generate and store keys

There are several places you can store GPG keys:

   * On your local drive (which will be lost if your laptop dies or get lost)
   * <a href="#Keybase">Keybase cloud (below)</a>
   * On a Yubikey physical device

   * <a href="#hashicorp-vault">Hashicorp Vault</a>
   * Azure KeyVault?
   * AWS Key Service (AKS)
   * Google Cloud?
   <br /><br />

<hr />

<a name="hashicorp-vault"></a>

### Hashicorp Vault

In a Terminal:

1. Install Hashicorp Vault program on your Mac:

   <pre><strong>brew upgrade vault</strong></pre>

   If it's not already installed:

   <pre><strong>brew install vault</strong></pre>

1. Confirm viability by displaying the program's version, such as:

   <pre><strong>vault --version</strong></pre>

   <pre>Vault v1.7.3 ('5d517c864c8f10385bf65627891bc7ef55f5e827+CHANGES')</pre>

1. If you don't have a Hashicorp Vault server, follow my instructions to run it (for development/experimentation) locally at:

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

   <pre>gpg: key 938BBBDEB75FEA21: public key "Wilson Mar <wilsonmar+github@gmail.com>" imported
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

   <tt>\-\-keyid-format LONG</tt> requests showing only those keys where both public and private key pair exists. This is because both are required to sign commits and tags.
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

   The Suite can be installed as a <a target="_blank" href="https://formulae.brew.sh/cask/gpg-suite">Homebrew formula</a> <tt>brew install \-\-cask gpg-suite</tt> (<tt>brew install cask gpgtools</tt> no longer exists).
   The GUI app is installed at "/Applications/GPG Keychain.app".
   The first time it runs, this pop-up appears:

   <a target="_blank" href="git-signing-gpgtools-upload-828x498.png"><img width="414" alt="git-signing-gpgtools-upload-828x498.png" src="https://user-images.githubusercontent.com/300046/75632532-ef07ab00-5bca-11ea-8c4a-36000f5ed099.png"></a>

   Read about it at <a target="_blank" href="https://gpgtools.org/">GPGTools.org</a> and <a target="_blank" href="   https://gist.github.com/danieleggert/b029d44d4a54b328c0bac65d46ba4c65">here</a>.

   ### pinentry for GPG on MacOS

1. Edit file (if the file doesn’t exist, create it) to add the path.

   <pre><strong>code ~/.gnupg/gpg-agent.conf</strong></pre>

1. On MacOS, install a graphical pinentry application:

   <pre><strong>brew install pinentry-mac</strong></pre>

1. Verify where the program was install:

   <pre><strong>which pinentry-mac</strong></pre>

   Response:

   <pre>/usr/local/bin/pinentry-mac</pre>

1. Edit file <tt>~/.gnupg/gpg-agent.conf</tt> to contain:

   <pre>default-cache-ttl 600
max-cache-ttl 7200
pinetry-program /usr/local/bin/pinetry-mac
   </pre>

1. If you are not using a Yubikey, proceed to <a href="#GenerateKey">Generate GPG key pairs</a>.


   <a name="Yubikey"></a>

   ## Optional Yubikey smart chip

   Instead of storing private keys on your laptop's hard drive (where a hacker can access from any program running on the computer), <a target="_blank" href="https://medium.com/@ahawkins/securing-my-digital-life-gpg-yubikey-ssh-on-macos-5f115cb01266">security-concious people</a> store their private keys in a separate physical <a target="_blank" href="https://en.wikipedia.org/wiki/OpenPGP_card">smartcard (OpenGPG card)</a> such as a <a target="_blank" href="https://www.yubico.com/quiz/">Yubikey device (one of several)</a>.

   Day-to-day, it is good for those who work on multiple machines but want to use a single physical signing key they plug into each machine.

   Note the Yubikey was designed to not be able to export private keys (by hackers or you).

   If your laptop's USB has been locked down, skip this and move on to <a href="#GenerateKey">generate a key</a>.

   <a target="_blank" href="https://www.yubico.com/product/yubikey-5-nfc/"><img align="right" alt="git-siging-yubikey-100x100.jpg" width="100" src="https://user-images.githubusercontent.com/300046/75632026-faa4a300-5bc5-11ea-8471-60b6ef9981f6.jpg"></a>
      PROTIP: If you lose your physical dongle, you'll need to re-generate all keys.

   Also, keys written to a card can only be used in combination with a <strong>PIN code</strong>, so that even if a YubiKey is stolen, a thief would not be able to authenticate directly.

   Each YubiKey is its own unique cardno.

1. In <a target="_blank" href="https://www.yubico.com/setup/">Yubikey Setup Docs</a>, identify your Yubikey (I personally have a 5Ci FIPS for use on MacOS USB-C and iPhone USB/Apple Lightning® Interface: OTP):

   https://www.yubico.com/works-with-yubikey/catalog/#protocol=all&usecase=all&key=yubikey-5ci

   Note that these are internet-based SaaS apps rather than local apps (such as 
   <a target="_blank" href="https://support.1password.com/security-key/">1Password"</a>.

1. Click on "GitHub" for <a target="_blank" href="https://docs.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-fido-u2f">these instructions</a> to enable a 2FA app (if you haven't already),  

1. In a Terminal, install software to manage Yubikey (<a target="_blank" href="https://github.com/Yubico/yubikey-manager">ykman</a>):

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

   <pre><strong>gpg --card-status</strong></pre>

   The response expected is like this:

   <pre>Reader ...........: Yubico Yubikey 4 OTP U2F CCID
Application ID ...: D27312341241342342342342343
Version ..........: 2.0
Application type .: OpenPGP
Version ..........: 3.4
Manufacturer .....: Yubico
Serial number ....: 12345678
Name of cardholder: [not set]
Language prefs ...: [not set]
Salutation .......: 
URL of public key : [not set]
Login data .......: [not set]
Signature PIN ....: not forced
Key attributes ...: rsa2048 rsa2048 rsa2048
Max. PIN lengths .: 127 127 127
PIN retry counter : 3 0 3
Signature counter : 0
KDF setting ......: off
Signature key ....: [none]
Encryption key....: [none]
Authentication key: [none]
General key info..: [none]
   </pre>
   
   ### Configure Yubikey

1. Initiate the configuration program:

   <pre><strong>gpg --card-edit</strong></pre>

   The prompt appears:

   <pre>gpg/card>
   </pre>

1. Initiate the configuration program:

   <pre>gpg/card> <strong>admin</strong></pre>

   "Admin commands allowed" means you can continue.

1. Generate:

   <pre>gpg/card> <strong>generate</strong></pre>

1. Type Y to:

   "Make off-card backup of encryption key? (Y/n) Y

   <a name="Yubikey_default_PINs"></a>

   Response:

   <pre>PROTIP: Please note that the factory settings of the PINs are
   PIN = '123456'     Admin PIN = '12345678'
You should change them using the command --change-pin
   </pre>

1. Change the PIN:

1. Generate for reals:

   <pre>gpg/card> <strong>generate</strong></pre>

1. Type n to:

   "Make off-card backup of encryption key? (Y/n) n

   <a target="_blank" href="https://github.com/jeffmaher/yubikey-macos-setup">BLOG</a>: 
   if you see these messages:
   <pre>gpg: selecting openpgp failed: Operation not supported by device
gpg: OpenPGP card not available: Operation not supported by device   
   </pre>

1. In the pop-up, type PIN "123456", which is the default pin.

   Response:

   <pre>Please specify how long the key should be valid.
         0 = key does not expire
      &LT;n>  = key expires in n days
      &LT;n>w = key expires in n weeks
      &LT;n>m = key expires in n months
      &LT;n>y = key expires in n years
   <pre>

1. Type "1y" (for 1 year).

   Response is the time/date of expiration, such as:

   <pre>Key expires at Wed Jun 22 10:40:38 2022 MDT</pre>

1. Type "y" to "Is this correct? (y/N)"

   Response:

   <pre>GnuPG needs to construct a user ID to identify your key.
&nbsp;
Real name: 
   </pre>

1. Type your real name, such as "John Doe".
1. Type your Email address: johndoe+github@gmail.com
1. Type Comment:

1. Type "O" (for OK):

   <pre>Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O</pre>

1. In the pop-up "Please enter the Admin PIN", which is by default "12345678", as <a href="#Yubikey_default_PINs">above</a>.

1. In the pop-up "Please unlick the card", type "123456", the default.

   The response should be a message such as:

   <pre>gpg: key A1D1DC27394AD9D0 marked as ultimately trusted
gpg: revocation certificate stored as '/Users/johndoe/.gnupg/openpgp-revocs.d/056B29F5E7827C95C3A83B3BC1D1DC27394AD9D0.rev'
public and secret key created and signed.
   </pre>

1. Change the PIN and Admin PIN:

   <pre>gpg/card> <strong>passwd</strong></pre>
   
   Response:
   <pre>gpg: OpenPGP card no. A1234567890103040006162528900000 detected
&nbsp;
1 - change PIN
2 - unblock PIN
3 - change Admin PIN
4 - set the Reset Code
Q - quit
&nbsp;
Your selection? _
   </pre>

1. Type 1 to "change PIN".
1. In the pop-up "Please enter the PIN", type the CURRENT 6-character PIN and press OK.
1. In the pop-up "New PIN", retype your PIN and press OK.

   Expected response:

   <pre>PIN changed.
&nbsp;
1 - change PIN
2 - unblock PIN
3 - change Admin PIN
4 - set the Reset Code
Q - quit
&nbsp;
Your selection? _
   </pre>

1. Type 3 to "change Admin PIN".
1. In the pop-up "Please enter the Admin PIN", type the CURRENT 8-character PIN and press OK.
1. In the pop-up "New Admin PIN", retype your PIN and press OK.

   Expected response:

   <pre>PIN changed.
&nbsp;
1 - change PIN
2 - unblock PIN
3 - change Admin PIN
4 - set the Reset Code
Q - quit
&nbsp;
Your selection? _
   </pre>

1. Type Q to quit out of passwd mode.

1. List the configuration:

   <pre>gpg/card> <strong>list</strong></pre>

   <pre>General key info..: 
pub  rsa2048/A1D1DC27394AD9D0 2021-06-22 John Doe <johndoe+github@gmail.com>
sec>  rsa2048/A1D1DC27394AD9D0  created: 2021-06-22  expires: 2022-06-22
                                card-no: 0006 16252890
ssb>  rsa2048/123D8F06797B4CD8  created: 2021-06-22  expires: 2022-06-22
                                card-no: 0006 16252890
ssb>  rsa2048/12329BE82896FF01  created: 2021-06-22  expires: 2022-06-22
                                card-no: 0006 16252890
   </pre>

   Two "ssb" (sub keys) are generated by the <a target="_blank" href="https://docs.yubico.com/hardware/yubikey/yk-fips/tech-manual/">YubiKey 5 FIPS Series</a> keys (one for each level of FIPS certification (<a target="_blank" href="https://docs.yubico.com/hardware/yubikey/yk-fips/tech-manual/fips5-levels.html#fips5-levels-label">FIPS 140-2 Level 1 and FIPS 140-2 Level 2</a>). Both certificates apply to the same keys.

1. Tell Git the signing key to use, using the key from the previous command (above):

   <pre><strong>git config --global user.signingkey=A1D1DC27394AD9D0</strong></pre>

1. Verify the <tt>signingkey</tt> within the <tt>[user]</tt> section:

   <pre><strong>cat .git/config</strong></pre>

1. Type "quit" to quit out of the program.

   Sub-keys are listed:

   <pre>sub   rsa2048 2021-06-22 [A] [expires: 2022-06-22]
sub   rsa2048 2021-06-22 [E] [expires: 2022-06-22]
   </pre>

1. If you lose your Yubikey, use your Master Key to certify a new signing key, then paste a new public key into GitHub.

   References on Yubikey on macOS Git:
   * https://support.yubico.com/hc/en-us/articles/360013790219-Getting-Started-with-the-YubiKey-on-macOS
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



   <a name="ListKeys"></a>

   ### List GPG Keys

1. List keys to obtain a KeyID:

   <pre><strong>gpg --list-secret-keys --keyid-format LONG</strong></pre>

   Parse the RESPONSE:

   <pre>gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
gpg: next trustdb check due at 2022-03-01
/Users/wilson_mar/.gnupg/pubring.kbx
------------------------------------
sec   rsa2048/62C414BA89BFBE52 2020-03-01 [SC] [expires: 2022-03-01]
      0BB29E3C5216420CC50ACF8D62C414BA89BFBE52
uid                 [ultimate] John Doe &LT;john_doe+github@gmail.com>
ssb   rsa2048/7F2026C2A22F2B37 2020-03-01 [E] [expires: 2022-03-01]
   </pre>

   NOTE: Only the "[ultimate]" key is used. Ignore the ones marke "[ revoked]".

1. Manually highlight and copy the GPG key ID, which is after "rsa2048/" in the sec section, <tt>62C414BA89BFBE52</tt> in the sample above.

   Alternately, use these Bash script lines to parse the key automatically:

   <pre>RESPONSE=$( gpg --list-secret-keys --keyid-format LONG | grep sec )
# secLine="sec rsa2048/62C414BA89BFBE52 2020-03-01 [SC] [expires: 2022-03-01]"
GPGKeyID=$( echo ${RESPONSE##*/} | cut -d " " -f 1 )
echo $GPGKeyID
   </pre>

1. To set your GPG signing key in Git, construct a command by substituting the GPG key ID you'd like to use with the value of $GPGKeyID:

   <pre><strong>git config --global user.signingkey 62C414BA89BFBE52  #</strong></pre>

   No response is expected from the command.

   The command updated the config file within the repo's .git folder.

1. Skip to <a href="#CopyPasteGitHub">section "Copy Paste GitHub" (below)</a>.


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


   <a name="CopyPasteGitHub"></a>

   ## Copy and Paste in GitHub

1. Prepare for pasting of the key generated in this next step by switching to an internet browser of the GitHub page that will receive the public key. After signing in, click your icon at the upper-right, select Settings, SSH and GPG keys:

   <a target="_blank" href="https://github.com/settings/keys">
   https://github.com/settings/keys</a>

1. Click "New GPG key" for a form to accept the contents of the public GPG key,
   then press command+Tab to switch back to the Terminal.

1. Navigate to your <tt>.ssh</tt> folder:

   <pre><strong>cd & cd .ssh</strong></pre>   

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
   
1. Check "Flag unsigned commits as unverified" under the "Vigilent Mode" heading:

   <img width="612" alt="github-vigilent-mode-1224322" src="https://user-images.githubusercontent.com/300046/122704309-ac7b3f00-d210-11eb-8e06-3a8e11bb837c.png">



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

   git config --global gpg.program gpg2

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

   If using Zsh:

   <pre><strong>echo 'export GPG_TTY=$(tty)' >> ~/.profile
   </strong></pre>

1. Confirm:

   <pre><strong>echo $GPG_TTY
   </strong></pre>

   Your number could be different in this example:

   <pre>/dev/ttys001
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

1. git clone a repo, then edit some file.

1. Configure for the repo (and each additional repo) the private "no reply" email from <a href="#GitHubEmail">above</a> so your email is not exposed publicly:

   <pre><strong>git config user.email "12345678+johndoe@users.noreply.github.com"
   </strong></pre>

1. Add the files changed:

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

   Alternately,

   <pre><strong>git commit --amend --no-edit --signoff</strong></pre>

1. After push, switch to an internet browser to see a verified badge next to your commits on GitHub online.

   <img width="413" height="262" alt="git-signing-ale-413x262" src="https://user-images.githubusercontent.com/300046/116947094-1d52a180-ac39-11eb-99c0-a76e793f0b8e.png">
1. Verify that green checkmark next to your name on GitHub.

   ???

<!--
   <pre># Specify -S to sign a commit and tag:
git commit -m "test signed commit" -S
git tag -m "test signed tag" -s test
&nbsp;
# Verify the same commit and tag.
git verify-commit HEAD
git log -1 --show-signature
git verify-tag test
   </pre>
-->

## View Signed Git Log

1. See signing info with your latest commit in the git log:

   <pre><strong>git log --show-signature -1</strong></pre>

   The response would include, for example:

   <pre>commit 71ad7059817e609b52b29469e1214a56799b33ef (HEAD -> master)
gpg: Signature made Mon Mar  2 11:07:39 2020 EST
gpg:                using RSA key 0BB29E3C5216420CC50ACF8D62C414BA89BFBE51
gpg: Good signature from "John Doe <john_doe+github@gmail.com>" [ultimate]
Author: John Doe <johndoe+github@gmail.com>
Date:   Sun Jun 20 22:54:17 2021 -0600
   </pre>

1. To verify signatures during a git merge (and abort if signatures are not verifiable):

   <pre><strong>git merge --verifya-signatures <em>other_branch</em></strong></pre>


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

1. Navigate to the folder where the file to be encrypted is located. For example:

   <pre><strong>cd ~/.aws</strong></pre>

1. Get the signature, such as "62C414BA89BFBE52".

   <pre><strong>gpg --list-secret-keys --keyid-format LONG</strong></pre>

1. Copy the signing key marked "[ultimate]" and not "[revoked]", such as "62C414BA89BFBE52" in this sample response:

   <pre>sec   rsa2048/<strong>62C414BA89BFBE52</strong> 2020-03-01 [SC] [expires: 2022-03-01]
      0BB29E3C5216420CC50ACF8D62C414BA89BFBE52
uid                 [ultimate] John Doe &LT;john_doe+github@gmail.com>
   </pre>

1. Plug in your Yubikey if the command response above has a line like this:

   <pre>    Card serial no. = 0006 16252890</pre>

1. Construct a variable by typing definitions of values to be used in commands:

   <pre><strong>SIGNING="62C414BA89BFBE52"
ENCRYPTED_FILE="credentials.gpg"
SOURCE_FILE="credentials"</strong></pre>

   PROTIP: Defining variables allows copy and paste of the complex command below, easier than constructing it piecemeal.
   This also eliminates typos when the same values are specified in several commands.

1. Construct a command to create a signed file by triple-clicking this command to copy to Clipboard the command to encrypt file "credentials" and output file "credentials.gpg":

   <pre><strong>gpg --detach-sign --sign-with "$SIGNING" -o "${ENCRYPTED_FILE}"  "${SOURCE_FILE}"
   </strong></pre>

   <tt>\-\-detach-sign</tt> requests a detached signature to be generated.

   <tt>\-\-sign-with</tt> precedes the GPG key id to be used to perform signing.

   <tt>-o</tt> specifies the output file. Traditionally we use either a <tt>.sig</tt> or a <tt>.gpg</tt> extension.

1. If you configured a Yubikey, a pop-up is presented:

   <img width="538" alt="git-signing-insert-card-1076x320" src="https://user-images.githubusercontent.com/300046/126728494-4d172bea-0b40-49a0-9f4e-4064efbda639.png">

   Insert your Yubikey and enter its PIN code.

1. Verify that files were generated:

   <pre><strong>ls -al "$ENCRYPTED_FILE"
   </strong></pre>

<!--
1. Verify integrity of the file:

   <pre><strong>gpg --verify credentials.gpg
   </strong></pre>

# This returns "gpg: no signed data
gpg: can't hash datafile: No data"

-->


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


<a name="FacebookSigning"></a>

## Getting Facebook to encrypt notification emails

<a target="_blank" href="https://www.cnet.com/how-to/how-to-make-facebook-send-you-encrypted-notification-emails/">In 2015</a>,
Facebook introduced an option to it to encrypt notification emails -- account recovery emails, in particular. It's done by you (the user) adding your <strong>OpenPGP public key</strong> to your Facebook profile.

1. Generate your public and private keys.
1. Copy and paste the text block of your PGP public key, starting with: -----BEGIN PGP PUBLIC KEY BLOCK----- and including -----END PGP PUBLIC KEY BLOCK----- at the end. (On a Mac, I exported my public key as a plain-text ASC file from the GPG Keychain application that I was then able to open in TextEdit to copy the text block mentioned above.)

1. In Facebook, login and navigate to your About page, "Contact and Basic Info" section:

   <a target="_blank" href="
   https://www.facebook.com/me/about?section=contact-info">
   https://www.facebook.com/me/about?section=contact-info</a>

1. Click "Add a public key".
1. Paste.
1. Check box "Use this public key to encrypt notification emails that Facebook sends you".
1. Click "Save Changes".
1. In your email program, decrypt the email from Facebook and click the link.
<br /><br /> 


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

https://www.thegeekyway.com/hands-on-guide-on-gpg-keys/
by GeekyShacklebolt

http://varrette.gforge.uni.lu/blog/2017/03/14/tutorial-gpg-gnu-privacy-guard/


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
