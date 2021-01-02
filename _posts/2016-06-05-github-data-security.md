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

This is why most enterprise GitHub instances route GitHut logins through their Duo or other multi-factor authentication process on each user's own smart mobile phone.


<a name="2FA"></a>

## SOLUTION 1. Enable 2FA with an Authenticator app

There are many tutorials on how to do this on YouTube.

1. In an internal browser (Chrome) at https://github.com, login using your password.
1. Click the avatar picture on the top right on the black band for the drop-down menu to select "Settings".
1. Click the green "Enable two-factor authentication".
1. Provide your password again.

PROTIP: Print and store your one-time passwords 

PROTIP: If you lose your 2FA device, you'll need to remove 2FA.


<hr />

<a name="Dorking"></a>

## PROBLEM 2. "Dorking" scans by hackers look for secrets in GitHub

Rogue "dorking" scanners are looking through <strong>every</strong> public repository, every day, looking for secrets.

References:

   * http://www.securityweek.com/github-search-makes-easy-discovery-encryption-keys-passwords-source-code

   * http://www.itworld.com/article/2921135/security/add-github-dorking-to-list-of-security-concerns.html


<a name="DorkLocally"></a>

## SOLUTION 2. Automate "Dorking" scans of you code locally 

git-secrets

<hr />


<a name="SecretsRemain"></a>

## PROBLEM 3. Secrets remain in prior commit history



<a name="RemoveHistory"></a>

## SOLUTION 3. Remove secrets in prior commit history on GitHub

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
This on-line tool</a> generates a direct link from a share link into
Dropbox, Google Drive, and Microsoft OneDrive.



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

In our individual machines, 
we use the `ssh-keygen` utility to generate key pairs.
The public key we copy into each <strong>server</strong> 
so we can <strong>`SSH`</strong>
with the private side of the pair (instead of a password).

Some use an encrypted USB Solid State Drive for sole physical posession. 
But if that's lost or stolen, security can be compromised.


<a href="#SSH_certs"></a>

## SOLUTION 7. Access GitHub with rotated SSH certificates generated (automatically every day)

PROTIP: For those who only want to create credential once,
one approach is to store credentials in a <strong>cloud drive</strong>
(such as Dropbox, Box, Google Drive, or Microsoft OneDrive).
Credentials there can be downloaded along with
<strong>SSH scripts</strong> to simplify execution.

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




## More #

This is one of a series on Git and GitHub:

{% include git_links.html %}
