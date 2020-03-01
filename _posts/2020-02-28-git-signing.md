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

This article is a step-by-step tutorial on how to setup and use GPG for Git to use for signing Git Tags, for non-repudiation. Also covered are releases associated with Tags.

The contribution of this article is the logical ordering of deep-dive concepts presented in a succint way, as a hands-on narrated scenic tour. "PROTIP" flags advice from hard-won experience such as relevant keyboard shortcuts and things to remember, available only here for you.

NOTE: This page is still actively under construction.

1. Open a Terminal. Be at your home user folder.

1. TODO: Execute a Bash script to do the following:
   Until then, manuall install:

   <a target="_blank" href="https://wilsonmar.github.io/homebrew/">brew (Homebrew)</a>
   
   <a target="_blank" href="https://wilsonmar.github.io/git-install/">brew git</a>

   In the script, if each utility is found, it is re-installed if the REINSTALL flag is set on, which it is by default.

1. Install GPG.

   <pre>
   MY_RUNTYPE="upgrade"
   &nbsp;
   if ! command -v gpg >/dev/null; then
      echo "Installing GPG2 for commit signing..."
      brew install gpg2
      # See https://www.gnupg.org/faq/whats-new-in-2.1.html
   else
      if [[ "${MY_RUNTYPE,,}" == *"upgrade"* ]]; then
         echo "GPG2 upgrading ..."
         gpg --version | grep gpg  # outputs many lines!
         # To avoid response "Error: git not installed" to brew upgrade git
         brew uninstall gpg2
         # NOTE: This does not remove .gitconfig file entry.
         brew install gpg2 
      fi
   fi
   echo -e "\n$(gpg --version | grep gpg)"    # gpg (GnuPG) 2.2.19
   </pre>

1. For information about the brew gpg2 install:

   <pre><strong>brew info gpg2</strong></pre>

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


1. Switch to GitHub to identify your "no-reply" public email address, such as 
   "john_doe+github@gmail.com".

   <a target="_blank" href="https://github.com/settings/profile">https://github.com/settings/profile</a>

   IMPORTANT: The email specified to GPG should match the email in GitHub.


   <a name="ListKeys"></a>

1. List what keys have been signed:

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

1. Generate another key:

   <pre><strong>gpg --gen-key</strong></pre>

   <tt>\-\-generate-key</tt> is the long form of the parameter.

1. Enter in the series of prompts:

   <pre>Real Name: John Doe
Email address: john-doe+github@gmail.com
Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
   </pre>

1. Type "O" (capital or lowercase O) to save the entry.

1. In response to "Please enter the passphrase to protect your new key":
            
   PROTIP: Save you <strong>Passphrase</strong> in a secure place (such as Vault), then copy it to paste in the prompt. This is to ensure that you really can retrieve it every time you use the key.

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

   "rsa2048" is the strength of the encryption algorithm applied.

1. <a href="#ListKeys">List keys</a> again.

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

1. Manually highlight and copy the GPG key ID, which is 62C414BA89BFBE52 in the sample above.

   TODO: A way to obtain the key automatically in a Bash script 

1. To set your GPG signing key in Git, substitute the GPG key ID you'd like to use. 

   <pre><strong>git config --global user.signingkey 62C414BA89BFBE52</strong></pre>

   No response is expected from the command.


   ## OPTIONAL: Edit GPG key

   In case you want to fix a typo:

1. Associate an email (value for field uid) with your GPG key, which Git requires by entering the <strong>edit-key</strong> mode:

   <pre><strlng>gpg --edit-key 62C414BA89BFBE52</strong></pre>

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


   ## Paste in GitHub

1. Prepare for pasting of the key generated in this next step by switching to an internet browser of the GitHub page that will receive the public key. After signing in, click your icon at the upper-right, select Settings, SSH and GPG keys:

   <a target="_blank" href="https://github.com/settings/keys">
   https://github.com/settings/keys</a>

1. Click "New GPG key" for a form to accept the contents of the public GPG key,
   then press command+Tab to switch back to the Terminal.

1. Print the public GPG key, in <strong>ASCII armor</strong> format so that they can be sent in a standard messaging format such as email. (Otherwise, the output is in binary format). 

   <pre><strong>gpg --armor --export 62C414BA89BFBE52 >$HOME/mygitsigning.pub</strong></pre>

   PROTIP: Redirecting the command output to a file makes it easier and less error-prone than manually highlighting and copying.

1. Copy the file's contents to your operating system Clipboard:

   <pre><strong>pbcopy < $HOME/mygitsigning.pub</strong></pre>

   Alternately, open the file using a text editor, select all file contents, and copy to Clipboard.

   The public key contents includes the "-----BEGIN PGP PUBLIC KEY BLOCK-----" and "-----END PGP PUBLIC KEY BLOCK-----" markers.

1. Switch to the GitHub page opened and click on the input field (so the field border turns blue), then press command+V to paste. Click "Add GPG key".

   PROTIP: IMPORTANT: If you lost your laptop, immediately remove the SSH and GPG keys associated with that laptop.
   

   ## Signing Key as Environment Variable

1. Configure Git to use your chosen key for signing ("0A46826A" in the example here):

   <pre><strong>git config --global user.signingkey 62C414BA89BFBE52
   git config --global gpg.program gpg2
   </strong></pre>

1. Configure Git to auto-sign git ALL commits on ALL repos (not recommended):

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

   Alternately, construct a command to create a Git tag (such as "v1.5.2") to a <strong>previous commit</strong>:

   <pre><strong>GIT_TRACE-1 git tag v1.5.2 f3c9f3a</strong></pre>


1. To verify whether your tag was signed:

   <pre><strong>git tag -v 1.5.2</strong></pre>

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


   ## Push by Tag

   PROTIP: REMEMBER: Tags are push of tags are in addition to content commits.

1. When pushing, specify the new Tag like a branch:

   <pre><strong>git push origin v1.5.2</strong></pre>

1. For convenience (in scripts), push all tags:

   <pre><strong>git push --tags</strong></pre>

1. In GitHub, click the releases tab to see Tags:

   <tt>https://github.com/.../.../releases</tt>


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


## Encrypting whole files

GPG can also be used for encryption and decryption of whole files for transmission over email, etc (not related to Git):

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


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
