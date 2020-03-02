---
layout: post
title: "Git Signing"
excerpt: "Establish non-repudiation in GitHub using GPG (installer gnupg2)"
tags: [git, security]
date: "2020-02-28"
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

 > "If you ... want to verify that commits are actually from a trusted source, Git has a few ways to sign and verify work using GPG." -<a target="_blank" href="https://git-scm.com/docs/git-show-ref">git-scm.com/show-ref command</a>

This article is a step-by-step tutorial on how to setup and use GPG for Git to use for signing Git Tags, for non-repudiation. Also covered are releases associated with Tags. Since we're using GPG, we have bonus notes about signing of whole files using GPG.

The contribution of this article is the logical ordering of <strong>deep-dive</strong> concepts presented in a succint way, as a hands-on narrated scenic tour. "PROTIP" flags advice from hard-won experience such as relevant keyboard shortcuts and things to remember, available only here for you.

NOTE: This page is still actively under construction.

1. Open a Terminal. Be at your home user folder.

1. TODO: Execute a Bash script to do the following:
   Until then, manuall install:

   <a target="_blank" href="https://wilsonmar.github.io/homebrew/">brew (Homebrew)</a>
   
1. Install a Git client:

   brew install git

1. For information about the brew gpg2 install:

   <pre><strong>brew info gnupg2</strong></pre>

   The response at time of writing:

   <pre>
gnupg: stable 2.2.19 (bottled)
GNU Pretty Good Privacy (PGP) package
https://gnupg.org/
/usr/local/Cellar/gnupg/2.2.19 (134 files, 11MB) *
  Poured from bottle on 2020-01-23 at 19:10:32
From: https://github.com/Homebrew/homebrew-core/blob/master/Formula/gnupg.rb
==> Dependencies
Build: pkg-config ✔
Required: adns ✔, gettext ✔, gnutls ✔, libassuan ✔, libgcrypt ✔, libgpg-error ✔, libksba ✔, libusb ✔, npth ✔, pinentry ✔
==> Analytics
install: 32,457 (30 days), 132,214 (90 days), 533,317 (365 days)
install-on-request: 28,189 (30 days), 111,655 (90 days), 439,134 (365 days)
build-error: 0 (30 days)
   </pre>

   Linux installers have other package names:

   * <tt>yum install gnupg2</tt> on CentOS/RHEL
   * <tt>dnf install gnupg2</tt> on Fedora
   * <tt>apt install gnupg</tt> on Debian/Ubuntu
   <br /><br />

   On Windows, install <a target="_blank" href="https://www.gpg4win.org/">Gpg4win</a> <a target="_blank" href="https://chocolatey.org/packages/Gpg4win">using Chocolatey:
   <tt>choco install gpg4win</tt>

1. On macOS, install <a target="_blank" href="https://superuser.com/questions/655246/are-gnupg-1-and-gnupg-2-compatible-with-each-other">gnupg2</a> for the gpg program:

   In the script, if each utility is found, it is re-installed if the REINSTALL flag is set on, which it is by default.

   <pre>
   MY_RUNTYPE="upgrade"
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

1. Ensure that commands for "gpg" are routed to gpg2:

   <pre>alias gpg="gpg2"
   echo -e "\n$(gpg --version | grep gpg)"    # gpg (GnuPG) 2.2.19
   </pre>

   PROTIP: The response shows that the installation is specific to each version of macOS:<br />
   <pre>==> Downloading https://homebrew.bintray.com/bottles/gmp-6.2.0.mojave.bottle.tar.gz</pre>



   ## Email address

1. Switch to GitHub to identify your "no-reply" public email address, such as 
   "john_doe+github@gmail.com".

   <a target="_blank" href="https://github.com/settings/profile">https://github.com/settings/profile</a>

   IMPORTANT: The email specified to GPG should match the email in GitHub.

1. While in a Terminal with the present working directory at your local repository, configure you valid GitHub user name and email (if you haven't already). For example:

   <pre><strong>
   git config user.name "John Doe"
   git config user.email "john_doe@gmail.com"
   </strong></pre>

   PROTIP: A big reason organizations ask for encrypted signing is that any name and email can be specified in Git.


   <a name="ListKeys"></a>

   ## List GPG keys

1. List what keys have been signed, meaning secret keys:

   <pre><strong>gpg --list-secret-keys --keyid-format LONG</strong></pre>

   <tt>\-\-keyid-format LONG</tt> requests showing only those keys where both public and private key pair exists. This is becuase both are required to sign tags.
   If nothing is returned, there are no keys usable for signing.
   
   PROTIP: This agove command was added as Bash shell alias (keyboard shortcut) in <a target="_blank" href="https://github.com/wilsonmar/git-utilities/blob/master/aliases.sh">https://github.com/wilsonmar/git-utilities/blob/master/aliases.sh</a>  so that you can instead just type:

   <pre><strong>gsk</strong></pre>

   In the response, the first line lists the location where keys are stored:

   <pre>/Users/wilson_mar/.gnupg/pubring.kbx
------------------------------------
   </pre>

   (You would see your own user name instead of "wilson_mar" above.)

   The pubring.kbx file is the "Key Ring" file. See <a target="_blank" href="https://kb.iu.edu/d/awiu">https://kb.iu.edu/d/awiu</a> about keyring management commands.


   ## External (GPG Suite)

   If you're working on open-source projects, not for Enterprise internal use, you can
   install the <a target="_blank" href="https://gpgtools.org/">GPG Suite</a> (UI app)
   or Keybase.io.

   The Suite can be installed as a <a target="_blank" href="https://formulae.brew.sh/cask/gpg-suite">Homebrew formula</a> "brew cask install gpg-suite" (brew cask install gpgtools no longer exists).
   The GUI app is installed at "/Applications/GPG Keychain.app".
   The first time it runs, this pop-up appears:

   <a target="_blank" href="git-signing-gpgtools-upload-828x498.png"><img width="414" alt="git-signing-gpgtools-upload-828x498.png" src="https://user-images.githubusercontent.com/300046/75632532-ef07ab00-5bca-11ea-8c4a-36000f5ed099.png"></a>

   Read about it at <a target="_blank" href="https://gpgtools.org/">GPGTools.org</a> and <a target="_blank" href="   https://gist.github.com/danieleggert/b029d44d4a54b328c0bac65d46ba4c65">here</a>.

   The Suite requires to be installed "brew install pinentry-mac", activated by then entry in file 
   <tt>~/.gnupg/gpg-agent.conf</tt> 

   <pre>pinentry-program /usr/local/MacGPG2/libexec/pinentry-mac.app/Contents/MacOS/pinentry-mac</pre>




   ## Optional Yubiky smart chip

   If your laptop's USB has been locked down, skip this and move on to <a href="#GenerateKey">generate a key</a>.

   <a target="_blank" href="https://www.yubico.com/product/yubikey-5-nfc/"><img align="right" alt="git-siging-yubikey-100x100.jpg" width="100" src="https://user-images.githubusercontent.com/300046/75632026-faa4a300-5bc5-11ea-8471-60b6ef9981f6.jpg"></a>
   Instead of storing private keys on a laptop's hard drive (where they can be hacked by any program running on the computer), <a target="_blank" href="https://medium.com/@ahawkins/securing-my-digital-life-gpg-yubikey-ssh-on-macos-5f115cb01266">security-concious people</a> store their private keys in a separate physical <a target="_blank" href="https://en.wikipedia.org/wiki/OpenPGP_card">smartcard (OpenGPG card)</a> such as a <a target="_blank" href="https://www.yubico.com/quiz/">Yubikey device (one of several)</a>.

   PROTIP: If you lose your physical dongle, you'll need to re-generate all keys.

   Keys written to a card can only be used in combination with a PIN code, so that even if a YubiKey is stolen, a thief would not be able to authenticate directly.

   Each YubiKey is its own unique cardno.

1. Install requisite software:

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

   <pre>
Reader ...........: Yubico Yubikey NEO OTP U2F CCID
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

   * https://www.isi.edu/~calvin/yubikeyssh.htm
   * https://hugotunius.se/2018/07/13/yubikey-ssh-authentication.html - 13 Jul 2018
   * https://raymondcheng.net/projects/2018/11/25/git-yubikey.html
   * https://evilmartians.com/chronicles/stick-with-security-yubikey-ssh-gnupg-macos


   <a name="GenerateKey"></a>

   ## Generate GPG key pairs

   Git UI clients such as <a target="_blank" href="https://support.gitkraken.com/git-workflows-and-extensions/commit-signing-with-gpg/">GitKraken can generate GPG keys with its UI</a>.

   Here are instructions for doing it on a macOS Terminal:

   PROTIP: In highly secure organizations, keys are generated by a security department and provided to workers.

1. Generate another key:

   <pre><strong>gpg --gen-key</strong></pre>

   <tt>\-\-generate-key</tt> is the long form of the parameter.

1. Enter in the series of prompts:

   <pre>Real Name: John Doe
Email address: john-doe+github@gmail.com
Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
   </pre>

   You’ll have to generate one GPG key for each email address to use if you want to use different email addresses on different projects.

1. Type "O" (capital or lowercase O) to save the entry.

1. In response to "Please enter the passphrase to protect your new key":
            
   PROTIP: Save you <strong>Passphrase</strong> in a secure place (such as in <a target="_blank" href="https://wilsonmar.github.io/hashicorp-vault/">Hashicorp Vault</a>), <strong>then</strong> copy it to paste in the prompt. This tactic is to ensure that you really can retrieve it when you use the key in a future command.

1. Re-enter the key.

1. Press Enter. The long-winded response:

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

   Notice the default expiry period is <strong>two years</strong>.

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



   ## OPTIONAL: Edit GPG key

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

   The response is:

   <pre>You selected this USER-ID: 
    "John Doe (My Git signing key) &LT;john_doe+github@gmail.com>"
   </pre>

1. Type "O" (capital or lowercase O) to save the entry.


   ## Copy and Paste in GitHub

1. Prepare for pasting of the key generated in this next step by switching to an internet browser of the GitHub page that will receive the public key. After signing in, click your icon at the upper-right, select Settings, SSH and GPG keys:

   <a target="_blank" href="https://github.com/settings/keys">
   https://github.com/settings/keys</a>

1. Click "New GPG key" for a form to accept the contents of the public GPG key,
   then press command+Tab to switch back to the Terminal.

1. Print the public GPG key, in <strong>ASCII armor</strong> format so that they can be sent in a standard messaging format such as email. (Otherwise, the output is in binary format). 

   <pre><strong>gpg --armor --export "$GPGKeyID}" >$HOME/mygitsigning.pub</strong></pre>

   PROTIP: Redirecting the command output to a file makes it easier and less error-prone than manually highlighting and copying.

1. Copy the file's contents to your operating system Clipboard:

   <pre><strong>pbcopy < $HOME/mygitsigning.pub</strong></pre>

   Alternately, open the file using a text editor, select all file contents, and copy to Clipboard.

   The public key contents includes the "-----BEGIN PGP PUBLIC KEY BLOCK-----" and "-----END PGP PUBLIC KEY BLOCK-----" markers.

1. Switch to the GitHub page opened and click on the input field (so the field border turns blue), then press command+V to paste. Click "Add GPG key".

   PROTIP: IMPORTANT: If you lost your laptop, immediately remove the SSH and GPG keys associated with that laptop.
   

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

1. Configure Git to auto-sign ALL commits on ALL repos (not recommended):

   <pre><strong>git config --global commit.gpgsign true
   </strong></pre>

1. Each command above adds an entry in file <tt>$HOME/.gitconfig</tt> created by the Git client:

   <pre>[user]
	name = John Doe
	email = john_doe+github@gmail.com
	signingkey = 62C414BA89BFBE52
[gpg]
	program = gpg2
   </pre>

1. If you are not using Zsh, edit you ~/.bash_profile to avoid these error messages:

   <pre>
error: gpg failed to sign the data
fatal: failed to write commit object
   </pre>

   If using Zsh, edit your ~/.bashrc file.

   Paste in:

   <pre><strong>test -r ~/.bash_profile && echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile
echo 'export GPG_TTY=$(tty)' >> ~/.profile
   </strong></pre>

   <tt>GPG_TTY</tt> variable is to avoid errors.

1. Activate the setting by restarting your Terminal session. If not using Zsh:

   <pre><strong>source ~/.bash_profile
   </strong></pre>


   ## Sign Git Tags

   <a target="_blank" href="https://www.youtube.com/watch?v=govmXpDGLpo" title="Dec 31, 2016">VIDEO</a>: 

1. Construct a command to create a Git tag (such as "v1.5.2") to the current HEAD:

   <pre><strong>GIT_TRACE=1 git tag -a -s v1.5.2 -m 'Signed tag 1.5.2'</strong></pre>

   <tt>-a</tt> (annotation) puts the tag in the repository when pushed to GitHub.

   PROTIP: Git tags are like a branch name. in Semantic Versionioning format. See semver.com.

   <tt>GIT_TRACE=1</tt> enables tracing. Example output on macOS:
   
   <pre>
03:45:46.646487 exec-cmd.c:139          trace: resolved executable path from Darwin stack: /Library/Developer/CommandLineTools/usr/bin/git
03:45:46.647227 exec-cmd.c:236          trace: resolved executable dir: /Library/Developer/CommandLineTools/usr/bin
03:45:46.647782 git.c:418               trace: built-in: git tag -a -s v1.5.2 -m 'Signed tag 1.5.2'
03:45:46.650392 run-command.c:643       trace: run_command: gpg2 --status-fd=2 -bsau 62C414BA89BFBE52
   </pre>

   You are prompted for the GPG key Passphrase.

   Alternately, construct a command to create a Git tag (such as "v1.5.2") to a <strong>previous commit</strong> (such as "f3c9f3a"):

   <pre><strong>GIT_TRACE-1 git tag v1.5.2 f3c9f3a</strong></pre>

   
1. For a list of all version 1 tags:

   <pre><strong>git tag -l "v1.*"</strong></pre>

1. See signing info with your latest commit in the git log:

   <pre><strong>git log --show-signature -1</strong></pre>

   The response would include, for example:

   <pre>commit 71ad7059817e609b52b29469e1214a56799b33ef (HEAD -> master)
gpg: Signature made Mon Jun 11 11:02:05 2020 EDT
gpg:                using RSA key 62C414BA89BFBE52
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


   ## Push by Tag

   PROTIP: REMEMBER: Tags are push of tags are in addition to content commits.

1. For convenience (in scripts), push all tags to GitHub:

   <pre><strong>git push --tags</strong></pre>

   Alternately, specify the new Tag like a branch:

   <pre><strong>git push origin v1.5.2</strong></pre>

   A sample response:

   <pre>
Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 540 bytes | 540.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To github.com:wilsonmar/git-utilities
 * [new tag]         v1.5.2 -> v1.5.2
   </pre>

1. See Tags in GitHub under the <strong>Code</strong> tab, after clicking the <strong>release</strong> link above GitHub's colorful line:

   <tt>https://github.com/wilsonmar/git-utilities/releases</tt>


   ## Delete Tags

1. To delete a Tag locally:

   <pre><strong>git tag -d v1.5.2</strong></pre>

   <tt>--delete</tt> is the long form of the <tt>-d</tt> parameter.

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

   <pre><strong>COMMIT_ID=$(git rev-list --tags --date-order | head -1)
   </strong></pre>

   The response is simply a full hash, such as:

   <pre>d4c1e33d1969c8b35938db498a556de25b8c3aa3</pre>

1. Extract the Tag based on the hash using the <a target="_blank" href="https://git-scm.com/docs/git-show-ref">git show-ref command</a>:

   <pre><strong>TAG=$( git show-ref --tags | grep "${COMMIT_ID}" | awk -F / '{print $NF}')
   </strong></pre>

   The variable is used to specify the version in a Docker Build, Push, then Kubernetes apply, such as:

   <pre><strong>docker build -t "$DOCKER_ACCOUNT/$DOCKER_REPO:$TAG" .
   docker push "$DOCKER_ACCOUNT/$DOCKER_REPO:$TAG"
   sed -e "s/VERSION/$TAG/" /home/centos/deployment.yml >/tmp/deployment.yml
   kubectl apply -f /tmp/deployment.yml
   kubectl get pods -o wide
   </strong></pre>



## Sign Git Commits & merges

   This is not recommended by some, but ...

1. To sign a commit, add command flag capital <tt>-S</tt>, such as:

   <pre><strong>GIT_TRACE=1 git commit -a -S -m "Some message"</strong></pre>

   A sample response at time of writing:

   <pre>
03:48:07.999728 exec-cmd.c:139          trace: resolved executable path from Darwin stack: /Library/Developer/CommandLineTools/usr/bin/git
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


## Encrypting whole files using GPG

GPG can also be used for encryption and decryption of whole files, such as an executable (.exe) file for transmission over email, etc (not related to Git).

There are several ways to verify both the integrity of a file during transmission (as hashing can do) but also provide a way for users to trace authorship.

The steps below describes work with a <strong>detached signature</strong> where a signature is created in a separate file. We can then provide both the package and the signature file from a trusted source. The user can then verify the package against it. This is like with a hash, but instead of a cleartext signature, the signature is in a ".sig" file which has been encrypted using a private key known only to the file's owner.

<a target="_blank" href="https://davidboland.site/blog/signing-you-work-as-a-developer">BLOG</a>:
Users may want this level of verification for security reasons. Especially if the package handles sensitive information.

1. To create a signed file:

   <pre><strong>
   gpg --detach-sign --sign-with 62C414BA89BFBE52 -o package.sig package.exe
   </strong></pre>

   <tt>/-/-detach-sign</tt> requests a detached signature to be generated.

   <tt>/-/-sign-with</tt> precedes the GPG key id to be used to perform signing.

   <tt>-o</tt> specifies the output file. Traditionally we use either a <tt>.sig</tt> or a <tt>.gpg</tt> extension.

1. For a user to verify integrity of the file:

   <pre><strong>
   gpg --verify package.sig package.exe
   </strong></pre>


### Standard signing

Standard signing and clear signing both affects the cleartext file itself. Standard signing is used with encryption. Clear signing wraps the input with plaintext signature. 

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




## Resources

This article was the result of consulting several sources of information.

Explanation of gpg program parameters are at:
https://www.gnupg.org/documentation/manuals/gnupg/GPG-Input-and-Output.html


As with all things Git, the canonical documentation is at git-scm.
Regarding Git signing:
<a target="_blank" href="https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work">
https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work</a>


https://help.github.com/en/github/authenticating-to-github/telling-git-about-your-signing-key


https://confluence.atlassian.com/bitbucketserver/using-gpg-keys-913477014.html

<a target="_blank" href="https://www.youtube.com/watch?v=KhROpuxHyH8">
VIDEO: [Git/GitHub] Signing your commits in GitHub -- Getting the verified badge on your commits</a> Jul 8, 2018 by Raveesh Agarwal

https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0

https://juliansimioni.com/blog/troubleshooting-gpg-git-commit-signing/
quotes
https://wiki.gentoo.org/wiki/GnuPG#Changing_pinentry_for_SSH_logins


https://ice-blog.readthedocs.io/en/latest/tutorial/encrypt/gpg/

https://jigarius.com/blog/signing-git-commits Sep 6, 2019


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
