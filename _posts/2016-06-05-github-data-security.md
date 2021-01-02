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

This article provides solutions to several situations enabling public leak of secret data from your GitHub:

1. Your GitHub account password can be stolen
2. You can forget to remove secrets in files before making code public
3. "Dorking" scans by hackers look for secrets in GitHub
4. Secrets remain in prior commit history need to be removed from GitHub
5. SSH keys to access GitHub remain on disk, subject to theft
<br /><br />

Recommendations offered in this article are:

1. Setup 2FA with an authenticator to physically confirm GitHub access
2. Always refer to secrets as variables in your code
3. Automate "Dorking" scans of you code to look for secrets locally before pushing to GitHub
4. Scan for and remove secrets in prior commit history on GitHub
5. Access GitHub with rotated SSH certificates generated (automatically every day)
<br /><br />

<hr />

<!-- 
## Diagram

Here is a diagram describing how ALL the various techniques work together:

<amp-img width="714" height="466" alt="github-secrets-v02-714x466"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/15831785/7aa96c3e-2bdc-11e6-9c3f-0dbf31a59f42.png"></amp-img>
-->
In our individual machines, 
we use the `ssh-keygen` utility to generate key pairs.
The public key we copy into each <strong>server</strong> 
so we can <strong>`SSH`</strong>
with the private side of the pair (instead of a password).

PROTIP: For those who only want to create credential once,
one approach is to store credentials in a <strong>cloud drive</strong>
(such as Dropbox, Box, Google Drive, or Microsoft OneDrive).
Credentials there can be downloaded along with
<strong>SSH scripts</strong> to simplify execution.

Some prefer to use an encrypted USB Solid State Drive
for sole physical posession. But if that's lost or stolen,
security can be compromised.

The application 1Password takes a compromise approach of
allowing password crypts to be transferred among multiple local devices,
but not over a public network.

### Git #

As we write functions within application source files,
we put them within a Git folder,
and commit changes into .git history.

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

Rogue "dorking" scanners are looking through 
every public repository, looking for secrets.

PROTIP: Organizations should do their own scans 
to find issues before others do.

If private information is found, we
can use <a href="#BFG">the BFG utility to remove it</a>.

CAUTION: But even after data is removed from the <strong>current</strong> repository,
like the Padora's Box legend,
whatever was exposed can nevertheless live on in 
any forks, clones, or zip files
others have taken of the repository.

A more secure approach is to define a 
<a href="#ConfigScript">configuration script</a> that establishes a 
<a href="#Symlink">symlink</a> 
to reference secret files in folders outside of the Git repository.

Private file in them can be referenced in 
<strong>profile scripts</strong> that load files and
<a href="#EnvVars">environment variables</a> 
within memory accessible by application programs.


## Dorking scans #

There are utilities (called "dorking") 
that scan through all GitHub repos looking for exposed keys.

   * http://www.securityweek.com/github-search-makes-easy-discovery-encryption-keys-passwords-source-code

   * http://www.itworld.com/article/2921135/security/add-github-dorking-to-list-of-security-concerns.html

<a name="BFG"></a>

## Get it out of there! #

What if you found out that your private data has been exposed in a GitHub repo?

PROTIP: If a file is deleted using `git rm` and a commit is made,
a vestige of that data still exist in the repository's <strong>history</strong> (.git folder).

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


<a name="ConfigScript"></a>

## Config Script #

You can tell Git to ignore changes to a file in the future:

   <pre><strong>
   git update-index --assume-unchanged  <em>file</em>
   </strong></pre>

   However, this works only on a single branch.
   On a change of branch, Git detects changes in the config file, and you'll have to either undo them, or check them in.

To track changes again:

   <pre><strong>
   git update-index --no-assume-unchanged <em>file</em>
   </strong></pre>

   * http://www.codeproject.com/Articles/602146/Keeping-sensitive-config-settings-secret-with-Azur

   * http://gitready.com/intermediate/2009/02/18/temporarily-ignoring-files.html

Another option is to use pre and post-commit hooks to automatically add/remove secret config values when checking in and out, using a Python program.



### Certificate from file ###

   In Bash, an export command is used to bring in the
   public key generated by ssh-gen into the user's home hidden
   .ssh folder:

   <pre>
   export RSA_PUBLIC_KEY=$(cat ~/.ssh/id_rsa.pub)
   </pre>

   But PowerShell's equivalent reads
   certificate files created using putty-gen
   or Mysysgit (the Git client for Windows):

   <pre><strong>
   $RSA_PUBLIC_KEY = Get-Content "~/.ssh/id_rsa.pub"
   # echo "RSA_PUBLIC_KEY=$RSA_PUBLIC_KEY"
   </strong></pre>

   <a target="_blank" href="https://www.simple-talk.com/sysadmin/powershell/powershell-one-liners-accessing-handling-and-writing-data/#first">
   Among the many variations</a>:

   <pre>
   $RSA_PUBLIC_KEY = [IO.File]::ReadAllText("~/.ssh/id_rsa.pub").split("`n")
   </pre>

   The split method using the back-tick adds a trailing empty line at 
   the bottom of the file.


### Secrets file to Hash Table ###

   On my Mac I used a text editor to create a 
   text file containing these (fake) secrets:

   <pre>
GITHUB_PASSWORD = '234sdsdvs32'
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

   <pre>
$GITHUB_PASSWORD = '234sdsdvs32'
$GITHUB_TOKEN = '1234567890123456789012345678901234567890'
   </pre>

   I can also create a .ps1 file which defines a <strong>hashtable</strong>
   (a collection of key/value pairs, also called "associative arrays"):

   <pre>
   [ordered]@{Key1=Value1;Key2=Value2}
   </pre>

   However, I prefer to read the text file previously read by Bash
   so I end up with a hash table named $SECRETS in PowerShell,
   from which it retireves a specific property:

   <pre><strong>
   $SECRETS = Get-Content "$home/.secrets" | ConvertFrom-StringData
   # don't echo $SECRETS.GITHUB_PASSWORD
   # don't echo $SECRETS.GITHUB_TOKEN
   </strong></pre>


<a name="Config"></a>

## AWS CLI Configuration #

Although AWS in 2015 enabled users to 
<a target="_blank" href="https://blogs.aws.amazon.com/security/post/Tx1XWZ93EAFL9C4/How-to-Switch-Easily-Between-AWS-Accounts-by-Using-the-AWS-Management-Console-an">
switch roles in the Console</a>, switching roles in the CLI is not yet availble.

AWS provides a command to define admin access:

   <pre>
   aws configure
   </pre>

List the location on a Mac or Linux machine:

   <pre>
   ls ~/.aws
   </pre>

List the location on Windows:

   <pre>
   dir %UserProfile%\.aws
   </pre>

Insidie the .aws folder is a <strong>credentials</strong> file containing, for example:

   <pre>
   [default]
   aws_access_key_id = ABCDEFGVSYNHR5G2VNGQ
   aws_secret_access_key = 123456nVqH3AWz5pGQcZ/+JDHB4dBM2BDNtzUsnK

   [user2]
   aws_access_key_id=AKIAI44QH8DHBEXAMPLE
   aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
   </pre>

On a Mac, store:

   <pre>
   export AWS_ACCESS_KEY_ID='YOUR_AWS_API_KEY'
   export AWS_SECRET_ACCESS_KEY='YOUR_AWS_API_SECRET_KEY'
   </pre>

   * https://aws.amazon.com/blogs/apn/getting-started-with-ansible-and-dynamic-amazon-ec2-inventory-management/

Insidie the .aws folder is a <strong>config</strong> file containing, for example:

   <pre>
   [default]
   region=us-west-2
   output=json

   [profile e1]
   region=us-east-1
   output=text
   </pre>

   PROTIP: Define profile names with the region.

   <pre>
   aws s3 ls \-\-profile default
   </pre>


See http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-config-files


Configuration includes enabling auto completion for AWS CLI, 
edit file <strong>/etc/bashrc</strong> to add:

   <pre>
   complete -C aws_completer aws
   </pre>

<a name="Symlink"></a>

## Symlink Configuration #

On a Mac, this sample command is used to create a symlink. For example:

   <pre>
   ln -s ~/.aws/credentials  credentials
   ln -s ~/.aws/config  config
   </pre>

On Windows, a "Shortcut" is created to a file.


<a name="CloudSync"></a>

## Sync from Dropbox #

<a target="_blank" href="http://www.technorange.com/cloudlinker-direct-link-generator-for-dropboxgoogle-driveone-drive-copy-com/">
This on-line tool</a> generates a direct link from a share link into
Dropbox, Google Drive, and Microsoft OneDrive.


<a name="EnvVars"></a>

## Enviornment variables #

To insert secret key in a Mac's .bash_profile script that the operating system executes upon boot-up, on can:

   {% highlight text %}
   echo "export SECRET_PASS=12345678910" >> ~/app-root/data/.bash_profile{% endhighlight %}

   But this is not as secure as k

Programming to retrieve an environment variable into the program:

   * Python programs reference `process.env.SECRET_PASS`.

   * PHP programs use `getenv('SECRET_PASS');`.

   * C# programs use `System.Environment.GetEnvironmentVariable("SECRET_PASS", _<br />EnvironmentVariableTarget.Process)`.

NOTE: Internet browser sandboxing restricts JavaScript from accessing operating system
environment variables.


## Automatic Encryption

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

<a target="_blank" href="https://gist.github.com/shadowhand/873637">
This blog</a> provides an alternative using the openssl utility.

Hashicorp Consul

## LFS

<a target="_blank" href="https://github.com/git-lfs/git-lfs/issues/1720">
NOTE</a>: The Git smudge filter is what converts the LFS pointer stored in Git with the actual large file from the LFS server. If your local repository does not have the LFS object, the smudge filter will have to download it. Network issues can affect downloading and thus smudge filter operation.


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

* <a target="_blank" href="http://www.codeproject.com/Articles/602146/">Keeping-sensitive-config-settings-secret-with-Azur">
   Keeping sensitive config settings secrete with Azure</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=RRZiERo172k">
   Introduction to Keybase</a> 2014-11-26 
   social network and a crypto keyserver. 

* <a target="_blank" href="https://www.youtube.com/watch?v=S4HP1pRTE3A">
   Easy File Encryption with Keybase - Hak5</a>

## Mozilla SOPS

https://github.com/mozilla/sops for yaml files.
With SOPS when you want to edit a file, the file stays encrypted on disk, gets decrypted in RAM where you can edit it with vim, and when you save the edited file it gets re-encrypted before being written to disk. At the same time, it does offer the flexibility to quickly decrypt a few files so you can use a tool like vimdiff.

SOPS uses your AWS credentials stored in ~/.aws to authenticate against KMS so you can encrypt and decrypt without a password.

* <a target="_blank" href="https://www.youtube.com/watch?v=V2PRhxphH2w">Securing DevOps Show & Tell: Mozilla Sops 
Mar 2, 2019</a> at https://frederic-hemberger.de/articles/manage-kubernetes-secrets-with-sops/

* <a target="_blank" href="https://www.youtube.com/watch?v=KHMhYJpYMIU">VIDEO: 
Avoid committing your secrets with Kustomize and SOPS</a> May 31, 2019

* <a target="_blank" href="https://oteemo.com/2019/06/20/hashicorp-vault-is-overhyped-and-mozilla-sops-with-kms-and-git-is-massively-underrated/">
lists Ideal Secrets Management Solution Requirements</a>


### Vault Dynamic Key Generation

HashiCorp Vault provides Dynamic Credentials and Encryption as a data service to shift from keeping "Secrets as Code" to "Policy as Code," where credentials are dynamically generated on the fly in response to application needs, rather than versioned alongside code.

Hashicorp Vault's "dynamic secrets" feature is ideal for scripts: an AWS access key can be generated for the duration of a script, then revoked. The keypair will not exist before or after the script runs, and the creation of the keys are completely logged.
This is an improvement over using something like Amazon IAM but still effectively hardcoding limited-access access tokens in various places.

https://github.com/gites/awesome-vault-tools



## Storing encrypted in GitHub

https://embeddedartistry.com/blog/2018/03/15/safely-storing-secrets-in-git/
references use of <a target="_blank" href="https://github.com/StackExchange/blackbox">blackbox</a>, git-secret bash script, and  git-crypt. "Aside from an initial unlock command that needs to be used after cloning the repository, git-crypt encryption and decryption operations happen transparently. I find this workflow to be superior to git-secret and BlackBox."

<a target="_blank" href="https://github.com/rustyio/git-gpg">
git-gpg</a> stores encrypted git repositories on third-party / potentially insecure servers, but stores all changes to source files as compressible textual deltas (a key reason for using git in the first place). The repository is encrypted remotely but the local version has no encrypted blobs inside.
-- https://news.ycombinator.com/item?id=11662364
Git-secret – store private data in a Git repo (coderwall.com)
Other benefits include architectural simplicity and low footprint: it consists of a single Python script that you add to your executable path.
Its achilles heel is that old versions of keys are stored in Git history.



## AWS KMS

### Zamata

Zemanta's https://github.com/Zemanta/py-secretcrypt
and
https://github.com/Zemanta/go-secretcrypt
keeps secrets encrypted with Amazon KMS (Key Management Service) in repos, which are decrypted on the fly by the application.
Access control is managed through AWS KMS key policies, with EC2 instances running the applications having permissions to decrypt the secrets.

https://github.com/fugue/credstash
uses AWS KMS for key wrapping and master-key storage, and DynamoDB for credential storage and sharing.
Works in several flavors of Linux, in a variety of programming languages.

https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/storage/common/storage-client-side-encryption.md
Azure Key Vault

## Keybase

github.com/keybase
http://g14n.info/2014/07/my-keybase-experience/


## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
