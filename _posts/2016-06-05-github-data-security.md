---
layout: post
title: "GitHub Data Security"
excerpt: "How to keep secrets out of GitHub"
tags: [github, security]
date: "2021-01-02"
file: "github-data-security"
image:
# pic secret finger over mouth 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15807549/645e9404-2b1e-11e6-8e19-2368c5578015.jpg
  credit: Forbes
  creditlink: http://blogs-images.forbes.com/ricksmith/files/2014/11/secret.png
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

There are 7 conditions enabling public leak of secret data from GitHub repositories:

1. <a href="#Need_2FA">Your GitHub account password can be stolen</a>
2. <a href="#Dorking">"Dorking" scans by hackers look for secrets in GitHub</a>
3. <a href="#SecretsRemain">Secrets remain in prior commit history need to be removed from GitHub</a>
4. <a href="#Forgot">You may forget to add .gitignore or remove local secrets</a>
5. <a href="#Crackers">Static passwords can be cracked eventually</a>
6. <a href="#Crash">You can lose secrets when your laptop crashes or is lost</a>
7. <a href="#SSH_remains">SSH keys to access GitHub remain on disk, subject to theft</a>
<br /><br />

"How to" recommendations offered in this article are:

1. <a href="#2FA">Setup 2FA with an authenticator to physically confirm GitHub access</a>
2. <a href="#DorkLocally">Automate "Dorking" scans of you code to look for secrets locally before pushing to GitHub</a>
3. <a href="#RemoveHistory">Remove secrets in prior commit history on GitHub</a>
4. <a href="#UseVariables">Refer to secrets as variables in your code</a>
5. <a href="#Encrypt">Rotate keys to encrypted files</a>
6. <a href="#SecretsInCloud">Save secret keys in the cloud</a>
7. <a href="#SSH_certs">Rotate secrets: Access GitHub with rotated SSH certificates generated (automatically every day)</a>
<br /><br />

<a name="Local_Diagram">Diagram</a>

<hr />

<a name="Need_2FA"></a>

## PROBLEM 1. Your GitHub account password can be stolen

Someone watching over your shoulder can see your password being typed in.

A <strong>key-logger</strong> program ("spyware") installed on your laptop can capture what you type on your keyboard.

This is why most enterprise GitHub instances route login to their GitHub organization automatically through their Duo or other multi-factor authentication process on each user's own smart mobile phone.


<a name="2FA"></a>

## SOLUTION 1. Enable 2FA with an Authenticator app

### One-time 2FA setup

This is recommended to protect GitHub accounts opened using a Gmail or other private email address (not a corporate email).

There are many tutorials on how to do this on YouTube.

1. In an internal browser (Chrome) at <a target="_blank" href="https://github.com/">https://github.com</a> 
1. Login using your account name and password.
1. Click the avatar picture on the top right on the black band for the drop-down menu to select "Settings".
1. In the left sidebar, click <strong>Account security</strong>.
1. Click the green "Enable two-factor authentication".

   ![2fa-enable-300x123](https://user-images.githubusercontent.com/300046/103462493-c5d01380-4ce2-11eb-9f67-da26c03dbb6c.jpg)

   Alternately, an "Enabled" button appears if you're already enabled. In that case, click "Edit" to "Authenticator App" under "Two-factor methods".

   PROTIP: 2FA requires you to obtain a TOTP (Time-based One-time Password) number <strong>in addition</strong> to your password.

1. Provide your password again.
1. On the Two-factor authentication page, click the green "Set up using an app" button for a list of recovery codes.

   ![2fa-recovery-codes-528x718](https://user-images.githubusercontent.com/300046/103462601-9e2d7b00-4ce3-11eb-8240-affaad9ddf1b.jpg)

   CAUTION: Recovery codes are the only way to access your account again if you lose your 2FA device. GitHub Support will not be able to restore access to your account, forcing you to lose all repos and history created under that account.

1. PROTIP: Print and save your recovery codes in a safe place. You get a list of recovery codes because each can only be used once instead of your static Password to get back into your account.

   1. Click Copy, then paste in a file within 1Password or other password-protected location. This enables you to copy and paste later.
   1. Click Print to save a hard copy of your recovery codes
   1. Click Download to save your recovery codes in clear text on your device (not recommended)
   <br /><br />

1. Click "Next" for a QR code for your Authenticator app to read.

1. If you already have Duo, open that app. You can also install from the iPhone store:

   * Google Authenticator on <a target="_blank" href="https://apps.apple.com/us/app/google-authenticator/id388497605">iPhones</a> or <a target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&gl=US">Google Play on Android</a>
   * <a target="_blank" href="https://www.microsoft.com/en-us/account/authenticator">Microsoft Authenticator</a> <a target="_blank" href="https://apps.apple.com/us/app/microsoft-authenticator/id983156458">on iPhones</a> or <a target="_blank" href="https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=en_US&gl=US">Google Play for Android</a>.
   <br /><br />

1. In your chosen authenticator app, click "+" for the camera to appear.
1. Hold your camera to position the QR code to take up the screen to scan it.
1. After scanning, the last item on the app displays a six-digit code that you can enter on GitHub. 

   PROTIP: Ignore the space between the numbers. Enter just the 6 numbers.

1. Click "Enable".
1. Click your avatar and select "Sign out".
1. Sign in again. 


   ### Responding to a 2FA challenge

1. When you see a "Two-factor authentication" challenge on a web page:

   ![2fa-code-entry-238x300](https://user-images.githubusercontent.com/300046/103462405-30cd1a80-4ce2-11eb-9dc4-cd9b13f2e906.jpg)

1. On your smart phone, open your authentication app (Duo).
1. Click the arrow on the right edge of the "GITHUB" entry listing your account name, so that you see six numbers.

1. On your laptop's browser, type those numbers in the Authentication Code field entry.
1. Success means you see your landing page at "github.com".

References:
   * <a target="_blank" href="https://docs.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication">https://docs.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication</a>

<hr />

<a name="Dorking"></a>

## PROBLEM 2. "Dorking" scans by hackers look for secrets in GitHub

Rogue "dorking" scanners are looking through <strong>every</strong> public repository, every day, looking for secrets.

References:
   * http://www.securityweek.com/github-search-makes-easy-discovery-encryption-keys-passwords-source-code
   * http://www.itworld.com/article/2921135/security/add-github-dorking-to-list-of-security-concerns.html


<a name="DorkLocally"></a>

## SOLUTION 2. Automate "Dorking" scans of you code 

There are two places scanning should occur: locally on laptops and in the GitHub cloud.

GitHub itself has a "GitHub Advanced Security (GHAS)" offering for Enterprise users. Its advantage is that it scans without any developer effort. 

It's a "premium" service ($36.69 per committer with 90 days free) because regular expressions needs to be written to detect secrets applicable to each circumstance, such as AWS credentials, etc.

Coverage of tools is important, so are several competing 3rd-party utilities which detect secrets in GitHub repositories:

   * Nightfall with SSO
   <br /><br />

On the laptop locally, it takes effort to install Git hooks to fire upon git commit commands.

The options:

"Detect Secrets" open-source code.

git-secrets 

Git Guardian

"GittyLeaks" open-source code.

GitLeaks is a post-commit utility written in Go open-source code.

GuardRails is proprietary but has reports and login security.

TruffleHog is open-source code.


<hr />


<a name="SecretsRemain"></a>

## PROBLEM 3. Secrets remain in prior commit history

PROTIP: If a file is deleted using `git rm` and a commit is made,
a vestige of that data still exist in the repository's <strong>history</strong> (.git folder).


<a name="RemoveHistory"></a>

## SOLUTION 3. Remove secrets in prior commit history on GitHub

Utility program <a target="_blank" href="http://rtyley.github.io/bfg-repo-cleaner/">
   BFG Repo-Cleaner</a> 
   (bfg.jar) is faster due to it being written in Scala (a varient of Java).
<a target="_blank" href="https://help.github.com/articles/remove-sensitive-data/">
This webpage</a> explains commands such as replacing such as this to 
find known passwords and replace them with <strong>\*\*\*REMOVED\*\*\*</strong>.

   <pre>
   java -jar bfg.jar --replace-text passwords.txt  my-repo.git
   </pre>

Git is designed such that every file and folder is represented only once (and given a unique SHA-1 hash-id).

Git has a <a target="_blank" href="https://git-scm.com/docs/git-filter-branch">
`git-filter-branch` command</a> which 
<strong>rebuilds</strong> a repo one commit at a time without the offending
content. The Git Real 2 course covers this.

0. Make commits and push so there is nothing in your local staging area.

0. Zip up the repo so you have a fall-back.

0. Make a copy of the repo as backup:

   `git clone poodles burning-poodles`

0. Rebuild the repo one commit at a time after applying the shell script
   rm function to remove the secrets.txt file from 
   --all commit files: (change secrets.txt to your file's name)

   `git filter-branch --tree-filter 'rm -f secrets.txt -- --all'`

   Note .gitignore rules are not applied here.

   This is a very I/O intensive operation and will take a long time on larger repos.

0. There are options that change other information:

   `--env-filter` rewrites author/committer name/email/time environment variables

   `--msg-filter` rewrites commit message text.

0. Remove (prune) commits which are now empty becuase the offending file they reference
   have been removed:

   `git filter-branch -f --prune-empty`

0. Notify all those who may have forked or cloned or downloaded the repo.



<hr />

<a name="Forgot"></a>

## PROBLEM 4. You may forget to add .gitignore or remove local secrets

Some devs write code (in shell scripts, etc.) to read ".env" files containing secrets.

When a repository is created on Github.com, you have an option of creating a <strong>.gitignore</strong> file to travel with content in the repository.

Folder and file names specified in that file Git ignores when pushing up to GitHub.

So some devs over-depend on this mechanism and save secrets.

The problem with this approach is we sometimes forget to add that line in .gitignore before pushing to GitHub.

The other problem with this approach is what happens when your laptop crashes?

Your passwords and encryption keys can be lost forever if they are not backed up.


   <a name="ConfigScript"></a>

   ### Ignore change 

1. Tell Git to ignore changes to a file in the future:

   <pre><strong>git update-index --assume-unchanged  <em>file</em>
   </strong></pre>

   However, this works only on a single branch.
   
   On a change of branch, Git detects changes in the config file, and you'll have to either undo them, or check them in.

1. To track changes again:

   <pre><strong>git update-index --no-assume-unchanged <em>file</em>
   </strong></pre>

   References:

   * http://www.codeproject.com/Articles/602146/Keeping-sensitive-config-settings-secret-with-Azur

   * http://gitready.com/intermediate/2009/02/18/temporarily-ignoring-files.html

Another option is to use pre and post-commit hooks to automatically add/remove secret config values when checking in and out, using a Python program.





<a name="UseVariables"></a>

## SOLUTION 4. Refer to secrets as variables in your code

TODO: One of the "12 Factor App".

1. To retrieve an environment variable into the program:

   * Python programs reference `process.env.SECRET_PASS`.

   * PHP programs use `getenv('SECRET_PASS');`.

   * C# programs use `System.Environment.GetEnvironmentVariable("SECRET_PASS", _<br />EnvironmentVariableTarget.Process)`.

   * JavaScript NOTE: Internet browser sandboxing restricts JavaScript from accessing operating system
environment variables.


1. TODO: Some GitHub contains sample values in a file


   CAUTION: The problem is that some simply save the .env file in the same folder, which is then subject to being pushed to a GitHub repository.

1. To insert a secret key in a Mac's .bash_profile script that the operating system executes upon boot-up, one can:

   {% highlight text %}
   echo "export SECRET_PASS=12345678910" >> ~/app-root/data/.bash_profile{% endhighlight %}





An extention of this concept is to reference a file name that is actually reached via a <a href="#Symlink">symlink</a> 
to a folder outside of the Git repository.

<a name="Symlink"></a>

### Symlink Configuration #

1. On a Mac, this sample command is used to create a symlink. For example:

   <pre>ln -s ~/.aws/credentials  credentials
   ln -s ~/.aws/config  config
   </pre>

1. On Windows, a "Shortcut" is created to a file.



### Sync from Dropbox #

<a target="_blank" href="http://www.technorange.com/cloudlinker-direct-link-generator-for-dropboxgoogle-driveone-drive-copy-com/">
This on-line tool</a> generates a direct link from a share link into Dropbox, Google Drive, and Microsoft OneDrive.



### Certificate from file # 

   In Bash, an export command is used to bring in the
   public key generated by ssh-gen into the user's home hidden
   .ssh folder:

   <pre>export RSA_PUBLIC_KEY=$(cat ~/.ssh/id_rsa.pub)
   </pre>

   But PowerShell's equivalent reads
   certificate files created using putty-gen
   or Mysysgit (the Git client for Windows):

   <pre><strong>$RSA_PUBLIC_KEY = Get-Content "~/.ssh/id_rsa.pub"
   # echo "RSA_PUBLIC_KEY=$RSA_PUBLIC_KEY"
   </strong></pre>

   <a target="_blank" href="https://www.simple-talk.com/sysadmin/powershell/powershell-one-liners-accessing-handling-and-writing-data/#first">
   Among the many variations</a>:

   <pre>$RSA_PUBLIC_KEY = [IO.File]::ReadAllText("~/.ssh/id_rsa.pub").split("`n")
   </pre>

   The split method using the back-tick adds a trailing empty line at 
   the bottom of the file.

### In shell file: Secrets file to Hash Table ###

   On my Mac I used a text editor to create a 
   text file containing these (fake) secrets:

   <pre>GITHUB_PASSWORD = '234sdsdvs32'
GITHUB_TOKEN = '1234567890123456789012345678901234567890'
   </pre>

   Notice there are no dollar signs in front of the key names.

   PROTIP: I prefre to not store the user name along with its password.

   The file is stored in a .secrets file (no extension)
   in my Mac user home folder, so they can be invoked as a Bash script:

   <tt><strong>
   source ~/.secrets
   </strong></tt>

   NOTE: The dot command is equivalent to the source command.

   BLAH: The Bash "source" function is not recognized by PowerShell
   and variables need to have dollar signs. So rather than
   creating a password file containing:

   <pre>$GITHUB_PASSWORD = '234sdsdvs32'
$GITHUB_TOKEN = '1234567890123456789012345678901234567890'
   </pre>

   I can also create a .ps1 file which defines a <strong>hashtable</strong>
   (a collection of key/value pairs, also called "associative arrays"):

   <pre>[ordered]@{Key1=Value1;Key2=Value2}
   </pre>

   However, I prefer to read the text file previously read by Bash
   so I end up with a hash table named $SECRETS in PowerShell,
   from which it retireves a specific property:

   <pre><strong>
   $SECRETS = Get-Content "$home/.secrets" | ConvertFrom-StringData
   # don't echo $SECRETS.GITHUB_PASSWORD
   # don't echo $SECRETS.GITHUB_TOKEN
   </strong></pre>


### Automatic Encryption

<a target="_blank" 
 href="github-data-security-git-v04-1010x479-113713.jpg" href="https://user-images.githubusercontent.com/300046/38212884-a4e2121a-367c-11e8-8f2d-5fdb81824943.jpg">
<img alt="github-data-security-git-v04-640x304-60868.jpg" src="https://user-images.githubusercontent.com/300046/38212936-d1cdd5ac-367c-11e8-97c2-9f047febbbfe.jpg"></a>

Automation scripts running on the desktop often need to provide passwords to various web services. It's inconvenient to type the credentials in every time the script runs, especially when it's run overnight on a schedule. Some make the credentials available in a secrets file on their laptop, with contents in <strong>clear text</strong> so they can be changed. 

When git add, commit, and push commands are issued to a folder initialized for git, files specified in <strong>.gitignore</strong> are blocked from being uploaded to GitHub or other online repository. 

The problem with this approach is that if the local secrets file is ever deleted, or the whole laptop is destroyed or stolen, the secrets are gone too.

What we want to consider here is an <strong>encrypted</strong> secrets file resting, encrypted, within the GitHub cloud and brought down locally by a git fetch or pull. This means that changes would be versioned. But what the changes are would not be evident due to the encrytion.

Mechanisms for encryption and decryption is provided by a utility GitHub repository installed on Mac laptops using Homebrew from:

   * <a target="_blank" href="https://github.com/sobolevn/git-secret">
   https://github.com/sobolevn/git-secret</a>
   <br /><br />

The repository from sobolevn in Moscow, Russia, who specializes in Elixir. His library provides for initalization of a .gitsecrets folder to hold <strong>public keys</strong> created using the GPG utility. Its "tell" program emails the private keys it creates so it's off the machine.

Encrypted files do not need to be automatically decrypted into clear text file until secrets need to be <strong>edited</strong> to change the behavior desired in shell scripts when they are run.

The secreate file can be encrypted automatically on <strong>git commit</strong> when a git hook program recognizes the need for encryption so the file can be safely pushed into GitHub again. 

If the script has code to decrypt the secret files itself based on the public key generated, the clear text file can be <strong>removed</strong> locally after editing. There is then no need for the clear text file to be referenced.

When someone is out - just delete their public key, re-encrypt the files, and they won’t be able to decrypt secrets anymore.

PROTIP: This is not a totally secure approach for extremely sensitive production data
because, any encryption can be hacked given enough time using on supercomputers now commonly available to hackers.



<hr />

<a name="Crackers"></a>

## PROBLEM 5. Static passwords and keys can be cracked

Some devs make use of programs that encrypt files stored in GitHub.

### Storing encrypted data in GitHub

"Aside from an initial unlock command that needs to be used after cloning the repository, git-crypt encryption and decryption operations happen transparently. I find this workflow to be superior to git-secret and BlackBox." says <a target="_blank" href="https://github.com/StackExchange/blackbox">blackbox</a>, git-secret bash script, and  git-crypt. 

   * <a target="_blank" href="https://embeddedartistry.com/blog/2018/03/15/safely-storing-secrets-in-git/">https://embeddedartistry.com/blog/2018/03/15/safely-storing-secrets-in-git</a> references use of 
   <br /><br />

<a target="_blank" href="https://github.com/rustyio/git-gpg">git-gpg</a> stores encrypted git repositories on third-party / potentially insecure servers, but stores all changes to source files as compressible textual deltas (a key reason for using git in the first place). The repository is encrypted remotely but the local version has no encrypted blobs inside.

   * <a target="_blank" href="https://news.ycombinator.com/item?id=11662364">Git-secret – store private data in a Git repo (coderwall.com)</a>
   <br /><br />

Other benefits include architectural simplicity and low footprint: it consists of a single Python script added to your executable path.

CAUTION: Their achilles heel is that old versions of keys are stored in Git history.


### Cracking

CAUTION: The problem is that recent advances in computing hardware enable passwords and keys to be cracked.

Thieves can now direct thousands of computers to guess encryption keys quickly.


## SOLUTION 5. Rotate keys to encrypted files

The down-side of storing encrypted files is that GitHub, being designed to work with text, can no longer compare and version encrypted files.

As binary files, entire files are versioned using Git LFS (Large File Store) capabilities.

But diff of individual lines within encrypted files are not currently conviently available.

### LFS for binary files

<a target="_blank" href="https://github.com/git-lfs/git-lfs/issues/1720">
NOTE</a>: The Git smudge filter is what converts the LFS pointer stored in Git with the actual large file from the LFS server. If your local repository does not have the LFS object, the smudge filter will have to download it. Network issues can affect downloading and thus smudge filter operation.



<hr />

<a name="Crash"></a>

## PROBLEM 6. You can lose secrets when your laptop crashes or is lost

Some devs code their programs to read ".env" files in a folder outside Git repository folder, such as the user's root foler.

But mechanisms to <strong>backup</strong> those secrets can be problematic.

Many enterprises block USB drives from being plugged in (see STUXNET vulnerability).

The application 1Password takes a compromise approach of
allowing password crypts to be transferred among multiple local devices,
but not over a public network.


<a name="Local_Diagram"></a>

## Local Diagram

Here is a draft diagram describing how the various techniques above work together:

<amp-img width="714" height="466" alt="github-secrets-v02-714x466"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/15831785/7aa96c3e-2bdc-11e6-9c3f-0dbf31a59f42.png"></amp-img>


As we write functions within application source files,
we put them within a Git folder, and commit changes (which Git stores in its .git folder containing history).

The private <strong>API keys</strong> and 
crypto certificates from Certificate Authorities
we collectively call <strong>secrets</strong> 
for accessing web services
can be conveninently just copied into the Git folder.

When files are pushed up to GitHub or other repository,
<strong>.gitignore</strong> settings should 
prevent the certificate from being uploaded and thus risk exposure.

PROTIP: Many say it's NOT a good idea to keep secrets such as passwords and 
other private data in a GitHub repository. 
Murphy's Law applies here too.

PROTIP: Organizations should do their own scans to find issues before others do.

CAUTION: But even after data is removed from the <strong>current</strong> repository,
like the Padora's Box legend,
whatever was exposed can nevertheless live on in 
any forks, clones, or zip files
others have taken of the repository.

Private file in them can be referenced in 
<strong>profile scripts</strong> that load files and
<a href="#EnvVars">environment variables</a> 
within memory accessible by application programs.



<a name="SecretsInCloud"></a>

## SOLUTION 6. Save secret keys in the cloud

Backup encryption key files in a cloud vendor's key store, because cloud vendors have top professionals figuring out how to keep data safe for a lot of people.

Some utilities (such as SOP) reference your AWS credentials stored in ~/.aws to authenticate against KMS so you can encrypt and decrypt without a password.

### Offline capable?

CAUTION: Programming reference to a cloud key store may slow progress to those who work <strong>offline</strong>, and need a cache of secrets on their laptop.

TODO: Below are steps to setup use of:

   * <a href="#AWS_Config">AWS KMS (Key Management Service)</a>
   * <a href="#Goolge_Config">Google secret keeping</a>
   * <a href="#Azure_Config">Azure Key Vault</a>
   <br /><br />


<a name="AWS_Config"></a>

### AWS CLI Configuration #

1. AWS provides a command to define your credentials to access its cloud:

   <pre>aws configure
   </pre>

   BLAH: Although AWS in 2015 enabled users to <a target="_blank" href="https://blogs.aws.amazon.com/security/post/Tx1XWZ93EAFL9C4/How-to-Switch-Easily-Between-AWS-Accounts-by-Using-the-AWS-Management-Console-an">
   switch roles in the Console</a>, switching roles in the CLI is not available at time of writing.

1. List the location on a Mac or Linux machine:

   <pre>ls ~/.aws
   </pre>

1. List the location on Windows:

   <pre>dir %UserProfile%\.aws
   </pre>

   Insidie the .aws folder is a <strong>credentials</strong> file containing, for example:

   <pre>[default]
   aws_access_key_id = ABCDEFGVSYNHR5G2VNGQ
   aws_secret_access_key = 123456nVqH3AWz5pGQcZ/+JDHB4dBM2BDNtzUsnK

   [user2]
   aws_access_key_id=AKIAI44QH8DHBEXAMPLE
   aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
   </pre>

1. On a Mac, store:

   <pre>export AWS_ACCESS_KEY_ID='YOUR_AWS_API_KEY'
   export AWS_SECRET_ACCESS_KEY='YOUR_AWS_API_SECRET_KEY'
   </pre>

   * https://aws.amazon.com/blogs/apn/getting-started-with-ansible-and-dynamic-amazon-ec2-inventory-management/

1. Insidie the .aws folder is a <strong>config</strong> file containing, for example:

   <pre>[default]
   region=us-west-2
   output=json

   [profile e1]
   region=us-east-1
   output=text
   </pre>

   PROTIP: Define profile names with the region.

   <pre>aws s3 ls \-\-profile default
   </pre>


   See http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-config-files


1. Configuration includes enabling auto completion for AWS CLI, 
   edit file <strong>/etc/bashrc</strong> to add:

   <pre>complete -C aws_completer aws
   </pre>

   
   ### Zamata

   Zemanta's https://github.com/Zemanta/py-secretcrypt
   and
   https://github.com/Zemanta/go-secretcrypt
   keeps secrets encrypted with Amazon KMS (Key Management Service) in repos, which are decrypted on the fly by the application.
   Access control is managed through AWS KMS key policies, with EC2 instances running the applications having permissions to decrypt the secrets.

   https://github.com/fugue/credstash
   uses AWS KMS for key wrapping and master-key storage, and DynamoDB for credential storage and sharing.
   Works in several flavors of Linux, in a variety of programming languages.


<a name="Google_Config"></a>

### Google secret keeping

After setting up Google Cloud CLI,
adapt this shell script to establish a key, encrypt, and decrpt:

   <pre><strong>KEY_NAME="talk-key"
KEYRING_FILE="my-sample-keyring"
CLEAR_TEXT_FILE_PATH="/tmp/the-secret-of-cloud.txt"
&nbsp;
gcloud kms keys create "${KEY_NAME}" --location global --keyring "${KEYRING_FILE}" --purpose encryption
echo "clear text contents to be encrypted" > "${CLEAR_TEXT_FILE_PATH}"
&nbsp;
gcloud kms encrypt --location global --keyring "${KEYRING_FILE}" --key "${KEY_NAME}" \
   --plaintext-file "${CLEAR_TEXT_FILE_PATH}"
cat "${CLEAR_TEXT_FILE_PATH}".encrypted
&nbsp;
gcloud kms decrypt --location global --keyring "${KEYRING_FILE}" --key "${KEY_NAME}" \
   --ciphertext-file \
   --plaintext-file=-
   </secret></pre>



### SOPS decrypt to RAM for editing

To avoid forgetting to re-encrypt files decrypted on your laptop, <a target="_blank" href="https://github.com/mozilla/sops">https://github.com/mozilla/sops</a> (SOP = Secrets OPerationS), written by Mozilla (the alternative browser) to <strong>decrypt files in RAM</strong> where you can edit and the utility re-encrypts files automatically before saving them to disk.

An example using GCP KMS:

   <pre>CLEAR_TEXT_FILE_PATH="/tmp/myfile.enc.yaml"
sops --encrypt --gcp-kms "${KEY_NAME}"   "${CLEAR_TEXT_FILE_PATH}" > "${CLEAR_TEXT_FILE_PATH}"
sops --decrypt "${CLEAR_TEXT_FILE_PATH}"
sops "${CLEAR_TEXT_FILE_PATH}"  # to edit then save using default vim editor
sops --decrypt "${CLEAR_TEXT_FILE_PATH}"
   </pre>

Note that sops automatically decrypts to use Git diff commands to identify between two files differences in specific lines.

References about this topic:
   * <a target="_blank" href="https://www.youtube.com/watch?v=V2PRhxphH2w">Securing DevOps Show & Tell: Mozilla Sops Mar 2, 2019</a> video of <a target="_blank" href="https://frederic-hemberger.de/articles/manage-kubernetes-secrets-with-sops/">blog article</a>.
   * <a target="_blank" href="https://www.youtube.com/watch?v=KHMhYJpYMIU">VIDEO: Avoid committing your secrets with Kustomize and SOPS</a> (with Agilicus add-on to Kustomize) May 31, 2019 [17:40]
   * <a target="_blank" href="https://oteemo.com/2019/06/20/hashicorp-vault-is-overhyped-and-mozilla-sops-with-kms-and-git-is-massively-underrated/">lists Ideal Secrets Management Solution Requirements</a>



<a name="Azure_Config"></a>

### Azure Key Vault

References:
   * <a target="_blank" href="https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/storage/common/storage-client-side-encryption.md">Azure Key Vault</a>
   * http://www.codeproject.com/Articles/602146/">Keeping-sensitive-config-settings-secret-with-Azur">Keeping sensitive config settings secrete with Azure</a>



<hr />

<a href="#SSH_remains"></a>

## PROBLEM 7. SSH keys to access GitHub remain on disk, subject to theft

1. When you want to clone a repository to your laptop, in the Code section, click the green "Code" button.

   <img width="126" alt="github-code-button-252x94" src="https://user-images.githubusercontent.com/300046/103463075-fc0f9200-4ce6-11eb-80ba-4169807a6e52.png">

1. You are presented with a choice of "HTTP", "SSH", and (new) "GitHub CLI":

   <img width="382" alt="github-ssh-menu-764x554" src="https://user-images.githubusercontent.com/300046/103463147-76d8ad00-4ce7-11eb-9f41-db883cd1ce39.png">

   SSH (Secure Shell) is also used by Linux to secure transmission between servera and laptop clients.

   PROTIP: Being able to use SSH means that we don't have to input our password each time a Git command is issued.

   Instead of passwords, SSH uses certificate files generated together. 

   Instead of exchanging a single mutually known password, smart mathematics is used such that the public key is manually pasted in GitHub GUI to be used to decrypt data which was encrypted using the other part of the key pair.


   ### Run shell script to install software and run

   TODO: How to load and run shell script.
   
   The script does for you all the manual steps described in this section below:

   <a href="#LoadSampleFiles">     A. Download sample repository containing setup files</a>
   <a href="#InstallEditor">       B. Install Editor app</a>
   <a href="#DefineAccounts">      C. Define a file listing each GitHub organization/account</a>
   <a href="#BeginWork">           D. Begin work on each GitHub organization/account</a>
   <a href="#InstallGitUtilities"> E. Install Git and related utilities, if needed</a>
   <a href="#GlobalEditConfig">    F. Create global .gitconfig file with editor setting</a>
   <a href="#FolderEachAccount">   G. Make a folder for each GitHub account's repositories</a>

   <a href="#GlobalGitConfig">     F. Remove global .gitconfig user settings</a>
   <a href="#CreateGitConfig">     H. Populate a Git configuration file in each account folder</a>
   <a href="#IncludeIf">           H. Specify IncludeIf for account in Git config</a>
   <a href="#BeAtSSH">             I. Be in SSH folder</a>
   <a href="#GenSSH">              J. Generate SSH keys for each GitHub account</a>

   <a href="#GenSSH">              K. Test interaction with each GitHub repository</a>
   <a href="#GenSSH">              L. Repeat above steps for each additional account</a>
   <a href="#ConfigGit">           M. Configure other Git features</a>
   
<hr />

1. Switch to your local IDE or Terminal (on Mac, press command+spacebar for the Spotlight Search, then type "Term" and press Enter to select "Terminal.app"). Enter your password if prompted.

   <a name="LoadSampleFiles"></a>

   ### A. Download sample setup files

   Since Git utilities may not be available on your laptop, download sample files using a command.

1. Defines a variable to specify the path, then use the variable to create a folder, and cd into it.

   <pre><strong>GIT_FOLDER="$HOME/git-utilities"
mkdir -p "$HOME/${GIT_FOLDER}"
cd "$HOME/${GIT_FOLDER}"
   </strong></pre>

   The Terminal prompt should now be at <tt>~/git-utilities</tt> or whatever you changed the path to.

   Files in the folder relevant to this:

   <pre>curl -O https://raw.githubusercontent.com/wilsonmar/git-utilities/master/my_github_accts.csv
   </pre>
   
   <pre>curl -O https://raw.githubusercontent.com/wilsonmar/git-utilities/master/git-certs-setup.sh
   </pre>

   * <tt>my_github_accts_vars.sh</tt>



   <a name="InstallEditor"></a>

   ### B. Install Editor app

1. Determine what text editor you want to load when Git needs one.

   PROTIP: I personally like the Sublime Text editor because it loads up the fastest.

   But subl needs to be installed and licensed (for $85 one time).

   The nano editor comes with MacBbook macOS operating system.

1. Install the selected editor app (such as Sublime Text).


   <a name="DefineAccounts"></a>

   ### C. Define a file listing each GitHub organization/account

   PROTIP: Many developers switch among multiple GitHub organizations/accounts during a working day.

1. Download a sample file:

   <pre>curl -O https://raw.githubusercontent.com/wilsonmar/git-utilities/master/my_github_accts.csv
   </pre>

1. Open a text editor to manually edit sample file named <tt>my_github_accts.csv</tt>.

   It contains a line for each github organization/account, with associated fields:

   <pre>
_folder,      _Name,    _acct,    _email,            _note
gmail_acct,   John Doe, johndoe,  johndoe@gmail.com, Personal GitHub account created using personal Gmail or other email
client1_acct, John Doe, john-doe, john_doe@mck.com,  Customer/client organization account
job1_acct,    John Doe, john-doe, john_doe@mck.com,  Employer organization account
vendor1_acct, John Doe, johndoe1, john-doe@soft.ai,  vendor organization account
   </pre>

   PROTIP: We recommend that, even if you only have your own personal account now, <strong>be prepared</strong> to use multiple GitHub accounts by doing the work of just the first account.

   If you're <strong>manually performing</strong> the steps below, create the file above as a <strong>checklist</strong> as you repeat commands for each organization/account folder and files.


   <a name="BeginWork"></a>

   ### D. Begin work on each GitHub organization/account

1. Switch back to the Terminal.

1. Download a sample script file:

   <pre><strong>curl -O https://raw.githubusercontent.com/wilsonmar/git-utilities/master/???script.sh
   chmod +x ???script.sh
   </strong></pre>
   
   That script automatically performs all the steps described in the remainder of the steps below, for each GitHub organization/account <a href="#DefineAccounts">listed in the file above</a>.

1. If want to run the automated script, first run without any paramters to get a list of possible parameters to customize each run:

   <pre><strong>./???script.sh
   </strong></pre>

   <tt>-v</tt> specifies verbose output.


   <a name="InstallGitUtilities"></a>

   ### E. Install Git and related utilities, if needed

   If requested by a parameter, the automated script installs these:

   1. XCode
   1. Homebrew
   1. Git program
   1. GitHub CLI
   <br /><br />

   Alternately, if you don't run the script, you'll need to manually install each one.


   <a name="GlobalEditConfig"></a>

   ### F. Create global .gitconfig file with editor setting

   Since we are creating a git configuration file for each organization/account folder, we <strong>don't need global user</strong> configurations.

1. In a Terminal, set the text editor command to be used by Git:

   <pre><strong>git config --global core.editor "subl"
   </strong></pre>

   Instead of <tt>subl</tt> for Sublime, use <tt>code</tt> for Visual Studio Code, <tt>nano</tt> for Nano, etc.

   <tt>git config --global</tt> commands update the contents of the <tt>~/.gitconfig</tt> file.

   <tt>~</tt> specifies the user's home folder.

1. Open the editor using a git command:

    <pre><strong>git config --global --editor subl
   </strong></pre>

   That command is equivalent to, alternately :

   <pre><strong>subl ~/.gitconfig
   </strong></pre>

   Due to the previous command, you should see in your editor:

   <pre>[core]
   editor = 'subl'
   </pre>

   There are possibly other git global configuration settings if your Git configuration is not new, such as:

   <pre>[core]
repositoryformatversion = 0
filemode = true
bare = false
logallrefupdates = true
ignorecase = true
precomposeunicode = true
   </pre>

   Configuring these is not within the scope of this document.

   Later, from this file we will replace global configuration settings values for a single user such as:

   <pre>[user]
    name = John Doe
    email = johndoe@gmail.com
   </pre>

   (with "IncludeIf" and "path" statements) 

   First...


   <a name="FolderEachAccount"></a>

   ### G. Make a folder for each GitHub account's repositories

1. Switch back to the Terminal.

1. Download a sample script file:

   <pre><strong>curl -O https://raw.githubusercontent.com/wilsonmar/git-utilities/master/my_github_accts_vars.sh
   chmod +x my_github_accts_vars.sh
   </strong></pre>
   
   That script automatically performs all the steps described in the remainder of the steps below, for each GitHub organization/account <a href="#DefineAccounts">listed in the file above</a>.

1. To avoid manualtyping, run script:

   <pre><strong>chmod +x my_github_accts_vars.sh
./my_github_accts_vars.sh      
   </strong></pre>

   The script creates variables based on values copied from <a href="#DefineAccounts">the Github organizations/accounts defined above in flat file my_github_accts.csv</a>:

   <pre>export LOCAL_SSH_KEYFILE="gmail_acct"
export MY_EMAIL_ADDRESS="johndoe@gmail.com"
export MY_GITHUB_ACCTNAME="johndoe"
export MY_FULL_NAME="John Doe"
   </pre>

   REMEMBER: In Bash script export commands allow no spaces around the equal (=) sign.

   Use of variables helps ensure that <strong>several commands below</strong> will use values consistently.

1. Make a folder for the current GitHub organization/account based on the variable defined above:

   <pre><strong>mkdir ~/$LOCAL_SSH_KEYFILE
   </strong></pre>


   <a name="GlobalGitConfig"></a>

   ### G. Replace global .gitconfig user settings

1. Use your default editor to <strong>edit</strong> Git's global <tt>.gitconfig</tt> configuration file:

   <pre><strong>git config --global --edit
   </strong></pre>

   We will replace these values in a config file associated with each GitHub organization/account.

   In 2019, at git version 1.23, "conditional include" ("IncludeIf") was added to Git Core. That enables Git to automatically select the configuration file Git uses to be based on whatever folder is active. 
   
   References:
   * <a target="_blank" href="https://git-scm.com/docs/git-config#_conditional_includes">https://git-scm.com/docs/git-config#_conditional_includes</a> is the official documentation
   * <a target="_blank" href="https://blog.thomasheartman.com/posts/modularizing-your-git-config-with-conditional-includes">https://blog.thomasheartman.com/posts/modularizing-your-git-config-with-conditional-includes</a>
   * <a target="_blank" href="https://www.motowilliams.com/conditional-includes-for-git-config">https://www.motowilliams.com/conditional-includes-for-git-config</a>
   <br /><br />

   <a name="CreateGitConfig"></a>

   ### H. Populate a Git configuration file in each account folder

1. Edit the <tt>~/.gitconfig</tt> text file to confirm that the above commands created a git configuration file, using your favorite text editor:

   Either way, you should see something like this (but with your name and email instead):

   <pre>[user]
    name = John Doe
    email = johndoe@gmail.com
   </pre>



   <a name="IncludeIf"></a>

   ### I. Specify IncludeIf for each account

1. Construct new lines in the account folder's .gitconfig file based on the $LOCAL_SSH_KEYFIL variable name:

   <pre>[includeIf "gitdir:~/gmail_acct/"]
 path = ~/gmail_acct/.gitconfig
   </pre>

   PROTIP: We are using the name of the account folder the same name as the SSH keypair file name.

   PROTIP: In the includeIf line, the trailing slash after the directory path makes it so that all subdirectories of the specified directory is matched.

   Alternately, instead of using a text editor, use these commands to concatenate the lines to the bottom of the file:

   <pre>echo "[includeIf "gitdir:~/$LOCAL_SSH_KEYFILE/"]" >>~/$LOCAL_SSH_KEYFILE/.gitconfig
 path = ~/$LOCAL_SSH_KEYFILE/.gitconfig  >>~/$LOCAL_SSH_KEYFILE/.gitconfig
   </pre>

   Either way, put the includes at the bottom of your files to make sure the included config isn't overridden later on in the source file.


   ~/.git/config


1. Verify:

   <pre><strong>git config list</strong></pre>

   TODO: If you get <tt>error: key does not contain a section: list</tt>
   ...

   Next, let's create that folder referenced above.


   <a name="BeAtSSH"></a>

   ### E. Be in SSH folder

1. Be at the folder where SSH stores its key pairs file:

   <pre><strong>cd $HOME/.ssh</strong></pre>

   If it does not already exist, make the folder yourself.


   <a name="GenSSH"></a>

   ### F. Generate SSH keys for each GitHub account

1. Within the ~/.ssh folder, generate a pair using defaults for the GitHub account:

   <pre><strong>ssh-keygen -t rsa -f "${LOCAL_SSH_KEYFILE}" -C "${MY_EMAIL_ADDRESS}" -N ""</strong></pre>

   <tt>-N</tt> specifies that no Passphrase will be requested when the key is used. Specifying one would require it to be manually entered with every command -- not something most would want to do.

   <tt>-C</tt> provides an optional unique name within the Public key.




   TODO: A "fingerprint" of the key is generated to uniquely identify each one.

   
1. The public key we copy into each <strong>server</strong> so we can <strong>`SSH`</strong> 

1. with the private side of the pair (instead of a password).

   Some use an encrypted USB Solid State Drive for sole physical posession. 
   But if that's lost or stolen, security can be compromised.


<a href="#SSH_certs"></a>

## SOLUTION 7. Access GitHub with rotated SSH certificates generated (automatically every day)



then "Clone with SSH protocol" (don't use HTTPS). 



But one concern about this now traditional approach is that the keypair sits on the computer for months and years, allowing it to possibly be stolen and used on another, rogue, computer.

So the solution we're using is to make use of a recent extension to the SSH protocol. The extension receives an additional certificate file added to Git requests.

The certificate file is created by what is called a policy "wrapper” because it wraps policies around the public key, such as limiting the life span of the key wrapped to 24 hours.

When GitHub receives and unwraps the request, it enforces the policy.

Having the 24 hour policy in place means a new certificate must be created every day, by what we call a “key rotation” script. It makes an API call and receives the certificate file.

To ensure the authenticity of certificates, GitHub references another public key -- the Certificate Authority public key generated on the Vault server and pasted into GitHub by the administrator.

The Policy Wrapper is a Vault server.


PROTIP: For those who only want to create credential once,
one approach is to store credentials in a <strong>cloud drive</strong>
(such as Dropbox, Box, Google Drive, or Microsoft OneDrive).
Credentials there can be downloaded along with
<strong>SSH scripts</strong> to simplify execution.



   <a name="ConfigGit"></a>

   ### I. Configure other Git features

   TODO: NOTE: There are other lines in the .gitconfig file. Not within the scope of this introductory tutorial is enabling the gpg program to establish GPG keys used to sign git commits, which would add lines such as these:

   <pre>[core]
 editor = subl
signingkey = 62C414BA89BFBE52
&nbsp;
[gpg]
 program = gpg
&nbsp;
[tag]
 forceSignAnnotated = true
   </pre>


### Vault Dynamic Key Generation

HashiCorp Vault provides Dynamic Credentials and Encryption as a data service to shift from keeping "Secrets as Code" to "Policy as Code," where credentials are dynamically generated on the fly in response to application needs, rather than versioned alongside code.

Hashicorp Vault's "dynamic secrets" feature is ideal for scripts: an AWS access key can be generated for the duration of a script, then revoked. The keypair will not exist before or after the script runs, and the creation of the keys are completely logged.
This is an improvement over using something like Amazon IAM but still effectively hardcoding limited-access access tokens in various places.

<a target="_blank" href="https://gist.github.com/shadowhand/873637">
This blog</a> provides an alternative using the openssl utility.

References on this topic:
   * <a target="_blank" href="https://github.com/gites/awesome-vault-tools">https://github.com/gites/awesome-vault-tools</a>


<hr />

## Keybase

* github.com/keybase

* <a target="_blank" href="https://www.youtube.com/watch?v=S4HP1pRTE3A">
   Easy File Encryption with Keybase - Hak5</a>

* http://g14n.info/2014/07/my-keybase-experience/

* <a target="_blank" href="https://www.youtube.com/watch?v=RRZiERo172k">
   Introduction to Keybase</a> 2014-11-26 
   social network and a crypto keyserver. 


## Resources #

* http://stackoverflow.com/questions/1396617/committing-machine-specific-configuration-files/1397180#1397180

* http://stackoverflow.com/questions/1974886/how-to-version-control-config-files-pragmatically

* <a target="_blank" href="https://gist.github.com/ryanj/4446113">
   Gist by RyanJ</a>

* http://programmers.stackexchange.com/questions/205606/strategy-for-keeping-secret-info-such-as-api-keys-out-of-source-control

* <a target="_blank" href="http://programmers.stackexchange.com/questions/141698/version-control-and-personal-configuration-file">
   Version control and personal configuration file</a>

* <a target="_blank" href="http://stackoverflow.com/questions/6009/how-do-you-deal-with-configuration-files-in-source-control">
   How do you deal with configuration files in source control</a>

https://dev.to/himadriganguly/configure-ssh-server-with-key-based-and-two-factor-authentication-3oc2


## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
