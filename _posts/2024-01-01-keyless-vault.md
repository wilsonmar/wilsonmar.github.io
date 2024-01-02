---
layout: post
date: "2024-01-01"
file: "keyless-vault"
title: "Keyless Vault"
excerpt: "Here's my automation and hands-on steps to set up a production-worthy enterprise-scale HA multi-cloud SaaS AKeyless vault, then retrieve secrets using various programming languages."
tags: [cloud, security]
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

I've written hands-on articles about setting up enterprise secrets vaults using HashiCorp Vault, Azure Key Vault, AWS Secrets Manager, etc.

But I think AKeyless is the best solution for most enterprises.

PROTIP: Unlike HashiCorp Vault cloud, administrators don't have to ensure that the server size they are required to chose continues to be adequate for the load. AKeyless is a SaaS solution that scales automatically.

With Azure, AWS, GCP, and other clouds, additional <strong>costs for data egress out</strong> are charged when central vaults (such as Azure Key Vault) residing in a specific region are accessed world-wide. Akeyless provides a <strong>multi-cloud</strong> solution free of cross-region data egress charges.

PROTIP: The differentiation with Akeyless is that it solves the "Secret Zero Problem" by using an <strong>inherited identity</strong> derived from a <a href="#AkeylessParent">parent SaaS system</a>, together with an <strong>ephemeral token</strong> for <strong>"continuous" authentication</strong>. 

How Akeyless works is illustrated in the diagram below.
First, we setup components <a href="#AkeylessParent">A</a>, <a href="#AkeylessCLI">B</a>, <a href="#ClientApp">C</a>, <a href="#Gateways">D</a>, <a href="#Bastions">E</a>, then processing steps <a href="#(1)">(1)</a>, <a href="#(2)">(2)</a>, etc.

<a name="AkeylessFlow"></a>

<a target="_blank" href="https://docs.akeyless.io/docs/universal-identity">UID (Akeyless Universal Identity) tokens</a>:
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1704216168/akeyless-flow-240102-1060x925_utwwj9.png"><img alt="akeyless-flow-240102-1060x925.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1704216168/akeyless-flow-240102-1060x925_utwwj9.png"></a>
<em>from</em> <a target="_blank" href="https://7451111251303.gumroad.com/l/cixdx"><em>PowerPoint file</em></a>


<a name="AkeylessParent"></a>

### A. Akeyless Parent SaaS System

A) Create and activate a Global Administrator account on the Akeyless SaaS Parent system website

1. Select an email to use for the <strong>Global Administrator</strong>, such as:

   <tt>johndoe+akeyless1gadmin@supercorp.com</tt>

   The first email address used to create the account is the Global Administrator, which has "god-like" power to change and delete anything, an account with too great a "blast radius" to use.

   PROTIP: Even if you're an individual developer, you will be using this for <strong>productive use</strong> on accounts that can run up a bill quickly. So create an email for use only to setup other accounts and pay bills as the Global Administrator.

   PROTIP: Many enterprise environments create a <strong>service account</strong> email which is not associated with a human being, so that emails would go to multiple people. Emails to an individual would be ignored when that person is on vacation, etc.

   PROTIP: Because it's difficult to change later, mature enterprises plan out (in a spreadsheet) what account emails are used, along with what roles (with associated permissions) they have to specific <strong>locations</strong> (paths to secrets). For example, a different administrator would be responsible for secrets in the <strong>production</strong> environment than in pre-production (development, test, demo, training) environments. A different administrator is typically responsible for secrets in each sovereign geographical area (US, India, Germany, etc.).

   Each Authentication Method object is associated with an Access Role that grants permission (including Create, Read, Update, Delete, List, and Deny) to this identity on Secrets, Targets, Roles, and Authentication Method objects stored inside the Akeyless SaaS solution.

   PROTIP: My company has created examples, automation, and expert consultation to quickly establish all credentials, then train everyone. Contact me for details.

1. Store the Administrator's email address as an environment variable <tt>AKEYLESS_ADMIN_EMAIL</tt> (accessible to Bash CLI scripts) by adding to the <tt>.bash_profile</tt> or <tt>.zshrc</tt> file in your user $HOME folder the email address accessing Akeyless:

   <pre><strong>export AKEYLESS_ADMIN_EMAIL="johndoe+akeyless1gadmin@supercorp.com"
   </strong></pre>

   This variable will be referenced in bash shell scripts below.

1. In a personal password safe such as 1Password, create a Login entry with the Administrator email and a password. The Chrome extension would enable you to login to the Parent SaaS system website without typing the password. Handy especially when you're doing a demo.

1. Click the "Sign Up" link at the top of the Akeyless Parent SaaS system website: <a target="_blank" href="https://www.youtube.com/watch?v=Gdxp6zxvpoE&list=PLhc-aRiEl_XVbq0TtqKkk3ezwI-L7tcqZ&index=2&t=63s">VIDEO</a>:

   <a target="_blank" href="https://console.akeyless.io/"><strong>https://console.akeyless.io/</strong></a>

1. Confirm the email address by clicking the link in the email sent to the Administrator's email address.

   Success is the menu appearing as shown on the right of this page:

   <a name="AkeylessMenu"></a>

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703893845/akeyless-menu-514x1700_x8gdvp.png"><img align="right" width="200" alt="akeyless-menu-514x1700.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703893845/akeyless-menu-514x1700_x8gdvp.png"></a>

   <a target="_blank" href="https://docs.akeyless.io/docs/targets">Targets</a> act as a connector between credentials and the items that need to utilize them, both saving time for the user and protecting your flows from credential breakage.

   "Gateways" are the Akeyless machines (with IP addresses) that access the Targets.
   
   <a name="AkeylessPricing"></a>

   Akeyless doesn't require a credit card because it is free for the first 2,000 secrets forever, accessed by up to 5 clients. 3 days of log retention is also provided free.
   
   The lock icon next to menu items highlight features requiring a paid Enterprise license, such as "Data Protection".
   See the <a target="_blank" href="https://www.akeyless.io/pricing/">Pricing page at https://www.akeyless.io/pricing</a>

   Extended log retention and Log forwarding to a SIEM (Security Information and Event Management) system are also available for an additional fee.

1. Click menu "Online Support", click the Slack log to register for their email: <tt>support@akeyless.io</tt> or Slack channel.

   PROTIP: Most of Akeyless are based in Israel. So they are 7 hours ahead of the US East Coast, 10 hours ahead of the US West Coast, and 2 hours ahead of the UK.

1. Use the Global Admin to create accounts and permissions to limit what yourself and others can do. Apply <strong>"Least Privilege"</strong> principles to limit the "blast radius" when credentials end up in the hands of someone malicious. <a target="_blank" href="https://www.youtube.com/watch?v=yzH5kmIHEec&list=PLhc-aRiEl_XVbq0TtqKkk3ezwI-L7tcqZ&index=7">this video about Role-Based Access Control (with API Key Authentication)</a>.

   Each Authentication Method object is associated with an Access Role that grants permission (including Create, Read, Update, Delete, List, and Deny) to the identity on Secrets, Targets, Roles, and Authentication Method objects stored inside the Akeyless SaaS solution.


<a name="AkeylessCLI"></a>

### B. Akeyless Admin CLI

To install the Akeyless CLI for use by the Administrator on a Mac:

NOTE: I prefer to avoid the hassle of adding another folder in my <tt>.bash_profile</tt> or <tt>.zshrc</tt> file, from any folder (because Homebrew automatically figures out which folder to install the program into). 
That's the approach by following the commands documented at:

   <a target="_blank" href="https://docs.akeyless.io/docs/cli-reference">https://docs.akeyless.io/docs/cli-reference</a>

So, instead, <a target="_blank" href="https://wilsonmar.github.io/homebrew/">install and use Homebrew</a> to do the following:

1. In a Terminal session, on any folder, get information about the akeyless brew package:

   <pre><strong>brew info akeylesslabs/tap/akeyless</strong></pre>

   <pre>==> akeylesslabs/tap/akeyless: stable 1.90.0
Akeyless CLI
https://www.akeyless.io
Conflicts with:
  akeyless
Not installed
From: https://github.com/akeylesslabs/homebrew-tap/blob/HEAD/Formula/akeyless.rb
   </pre>

   Note that the <tt>akeyless</tt> program is installed from github.
   
1. Switch to a browser to view Akeyless public GitHub repos at:

   <a target="_blank" href="https://github.com/akeylesslabs/">https://github.com/akeylesslabs/</a>

   NOTE: Code for the Akeyless server is NOT open source and not public on GitHub.com.

   <a target="_blank" href="https://docs.akeyless.io/docs/github-actions-community-plugin">https://docs.akeyless.io/docs/github-actions-community-plugin</a> describes how to retrieve static and dynamic secrets from Akeyless using GitHub Actions workflows at <a target="https://github.com/LanceMcCarthy/akeyless-action">https://github.com/LanceMcCarthy/akeyless-action</a> 



   <a name="Bastion"></a>

   ### Akeyless Bastions

   The best credentials are no credentials at all.
   
   So credentials (dynamic secrets, rotated secrets, and SSH certificates) are provided to customer apps Just In Time through a "bastion" server, a gateway to access encrypted resources from the Akeyless Secrets Store and decrypts it. There are several types of bastions.
   
   * <a target="_blank" href="https://docs.akeyless.io/docs/secure-remote-access-bastion">Akeyless Secure Remote Access (SRA) Bastion</a> uses SSH with certificates.
   * <a target="_blank" href="https://docs.akeyless.io/docs/web-access-bastion">Web Access Bastion</a> provides Secure Remote Access to any web application with session recording, including proxy service acting as an entry point to your internal web applications, where only after successful authentication users will get access, either via an isolated remote browser or directly to your target server based on your secret configuration.
   <br /><br />
   
   <a target="_blank" href="https://tutorials.akeyless.io/docs/install-and-configure-remote-access-bastion?_gl=1*1maqlhw*_ga*MjMwNzg1OTExLjE3MDM4NjM0ODY.*_ga_L81RVHBZR8*MTcwNDE1NzQ5Ny4yMy4xLjE3MDQxNjE3NzIuMC4wLjA.">VIDEO</a>:
   Bastion configuration.

   The SRA runs as a Kubernetes cluster setup using a Helm chart at:

   <a target="_blank" href="https://akeylesslabs.github.io/helm-charts">https://akeylesslabs.github.io/helm-charts</a>

   BTW: On the right pane on GitHub, notice that there are many Contributors.

   The repo uses the <strong>mustache</strong> languages to replace variables in YAML files.
   
   <a target="_blank" href="https://github.com/github-linguist/linguist/issues/6196">PROTIP</a>: GitHub incorrectly recognizes <strong>.tpl</strong> (template) file extensions as use of "Smarty" (an unrelated PHP package) rather than yaml. 
   This <a target="_blank" href="https://github.com/orgs/community/discussions/71689">PR</a> has no functional impact because the error is in GitHub.

   Uses <a target="_blank" href="https://docs.akeyless.io/docs/kubernetes-auth">kubernetes-auth</a>.

   ### CLI Install

1. Install the Akeyless CLI program from the internet:

   <pre><strong>brew install akeylesslabs/tap/akeyless
   </strong></pre>

   Brew automatically recognizes whether you have an Intel or Apple Silicon chip on your Mac and installs to the appropriate folder.
   
   On an Intel (x86 AMD) chip:

   <pre><strong>cd /usr/local/bin</strong></pre>

   On an Apple Silicon (arm64 M1/M2/M3) chip:

   <pre><strong>cd /opt/homebrew/bin</strong></pre>
   
1. Confirm where the program is installed:

   <pre><strong>ls `where akeyless`</strong></pre>

   <pre>lrwxr-xr-x@ 1 johndoe  admin  38 Dec 29 21:06 /usr/local/bin/akeyless -> ../Cellar/akeyless/1.90.0/bin/akeyless
   </pre>

   <pre>0B    /usr/local/bin/akeyless</pre>

   What is downloaded is not a folder but a binary executable program.

   ### Connect to Akeyless SaaS

   There are several ways to connect to the Akeyless SaaS server.

1. To connect to the Akeyless SaaS host (in place of instructions to run <tt>./akeyless</tt> in the docs) to :

   <pre><strong>akeyless configure --admin-email "${AKEYLESS_ADMIN_EMAIL}"
   </strong></pre>


   <pre><strong>akeyless configure --admin-email "${AKEYLESS_ADMIN_EMAIL}"
   </strong></pre>

   <pre>Profile default successfully configured</pre>

   WARNING: This command creates a <tt>$HOME/.akeyless</tt> folder with a <tt>profiles</tt> subfolder containing a <tt>default.toml</tt> file with the Administrator's email address and static password, which is not secure.

1. View the <tt>$HOME/.akeyless</tt> folder created by the above command:

   <pre><strong>ls -al ~/.akeyless
   </strong></pre>

   According to Linux conventions, the <tt>.</tt> in front of any folder name means that it is meant to be "hidden".

   <pre>drwx------@   2 johndoe  staff    64 Dec 31 02:00 .tmp_creds
-rw-r--r--@   1 johndoe  staff     7 Dec 31 01:40 cli-latest
drwx------@   3 johndoe  staff    96 Dec 31 02:00 profiles
-rw-r--r--@   1 johndoe  staff    40 Dec 29 21:07 settings
   </pre>

1. View the contents of <tt>cli-latest</tt>:

   <pre><strong>cat ~/.akeyless/cli-latest</strong></pre> shows the version of the CLI program:<br />
   <pre>1.90.0</pre>

1. Verify CLI install success by getting the version:

   <pre><strong>akeyless -v</strong></pre>

   <pre>Version: 1.90.0.dca3303</pre>

   TODO: History of releases listed at ???

1. View the contents of <tt>settings</tt>:

   <pre><strong>cat ~/.akeyless/settings</strong></pre> contains:
   <pre>dns="vault.akeyless.io"
protocol="https"
   </pre>

   TODO: What is the <tt>.tmp_creds</tt> folder for?


1. View the contents of <tt>default.toml</tt>:

   <pre><strong>cat ~/.akeyless/profiles/default.toml</strong></pre> shows the initial profile formatted in <a target="_blank" href="https://toml.io/en/">TOML (Tom's Obvious Minimal Language)</a>:

   <pre>["default"]
  access_type = 'password'
  admin_password = '12345678901234567890123='
  admin_email = 'johndoe+akeyless1gadmin@supercorp.com'
  account_id = ''
   </pre>

   PROTIP: If you want to avoid having static passwords on your laptop (which is the whole point of using Akeyless), use another type  of authentication.


   ### CLI Deep Dive

1. To list all akeyless commands:

   <pre><strong>akeyless -h</strong></pre>

   Read about each command at:<br />
   <a target="_blank" href="https://docs.akeyless.io/docs/cli-reference">https://docs.akeyless.io/docs/cli-reference</a>
   
1. Display details of all items in JSON format (with color provided by jp):

   <pre><strong>akeyless list-items | jq .</strong></pre>

   Item "/MyFirstSecret" was created automatically when the account was created.
   
   <pre>{
  "items": [
    {
      "item_name": "/MyFirstSecret",
      "item_id": 238833834,
      "display_id": "ytb1s0f989Tm-rvmpx5tfgafh",
      "item_type": "STATIC_SECRET",
      "item_sub_type": "generic",
      "item_metadata": "",
      "item_tags": null,
      "item_size": 0,
      "last_version": 1,
      "with_customer_fragment": false,
      "is_enabled": true,
      "public_value": "",
      "certificates": "",
      "protection_key_name": "",
      "cert_issuer_signer_key_name": "",
      "client_permissions": [
        "read",
        "list",
        "update",
        "delete",
        "create",
        "sra_transparently_connect",
        "sra_request_for_access",
        "sra_require_justification",
        "sra_approval_authority"
      ],
      "certificate_issue_details": {},
      "item_general_info": {
        "cert_issue_details": {},
        "dynamic_secret_producer_details": {},
        "rotated_secret_details": {},
        "classic_key_details": {},
        "secure_remote_access_details": {
          "use_internal_bastion": false
        },
        "static_secret_info": {}
      },
      "is_access_request_enabled": false,
      "access_request_status": "",
      "delete_protection": false,
      "creation_date": "2023-12-29T15:38:37Z",
      "modification_date": "2023-12-29T15:38:37Z",
      "gateway_details": null
    }
  ],
  "next_page": "eyJpIjoiL015Rmlyc3RTZWNyZXQifQ=="
}
   </pre>

   The "next_page" value, a Base64-encoded string, provides a "blockchain" of items that can be used to ensure and verify the integrity of the list.

   TODO: To list just the Item Names using jp?

   <a name="(1)"></a>

   ### (1) Create initial token

1. Create a <strong>starter token</strong> using the Auth ID method in the Akeyless server -- by using the Akeyless Vault GUI at <a target="_blank" href="https://console.akeyless.io/items">https://console.akeyless.io/items</a> "Users & Auth Methods" menu item:

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703918601/akeyless-auth-577x756_kuuag9.png"><img alt="akeyless-auth-577x756.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703918601/akeyless-auth-577x756_kuuag9.png"></a>

   Alternately, use this <a href="#AkeylessCLI">Akeyless CLI program</a> command:

   <pre><strong>akeyless create-auth-method-universal-identity --name uidAuth --ttl 60 --profile adminProfile
   </strong></pre>

   <a target="_blank" href="https://docs.akeyless.io/docs/universal-identity">Akeyless's Universal Identity (UID) authentication method</a> is used by on-prem. machines. 

   NOTE: The starter token is only used once to authenticate to the Akeyless plugin.
<a name="ClientApp">
2. The Akeyless server sends back a SaaS ACK.

   <a name="ClientApp"></a>

   ### C. Client app setup

   <pre><strong>akeyless create-secret -n /folder/sec1 -v val</strong></pre>
   <pre>A new secret named /folder/sec1 was successfully created</pre>

   <pre><strong>akeyless create-dfc-key -n /folder/sub-aes-key --alg AES256GCM</strong></pre>
   <pre>
Encryption Key Fragement #1 created succsessfully in 17 milliseconds
Encryption Key Fragement #2 created succsessfully in 18 milliseconds
=====================
A new AES256GCM key named /folder/sub-aes-key was successfully created
   </pre>

   <a name="(3)"></a>

   ### (3) Admin generates initial u-token

3. The Administrator generates a new UID token and<br />loads it into the client app.

   <a name="(4)"></a>

   ### (4) Client runs auth command using UID init token

4. The client runs Akeyless using the initial UID token.

   https://docs.akeyless.io/docs/cli-reference

   <a name="(5)"></a>

   ### (5) Client runs using t-token

5. The Akeyless server responds with a new JWT UID token.

   <a name="(6)"></a>

   ### (6) Use JWT token

6. The client runs app commands using the new JWT UID token.

   <a name="(7)"></a>

   ### (7) Client rotates UID using u-token

7. After the processing window passes, the client requests a rotation using the token.

   REMEMBER: Rotation of secrets requires an <a target="_blank" href="https://www.akeyless.io/pricing/">enterprise license</a>.

   The client can request a new token at any time within the processing window. <a target="_blank" href="https://www.youtube.com/watch?v=wFMNU4pvj78&list=PLhc-aRiEl_XVbq0TtqKkk3ezwI-L7tcqZ&index=3&pp=iAQB">VIDEO</a>:

   <pre><strong>akeyless create-secret --name <em>MySecret1</em> --value <em>MySecretPassword</em>
   </strong></pre>

   The default processing window is 60 seconds. 
   
   <a name="(8)"></a>

   ### (8) Returns ACK+new u-token

8. The Akeyless server returns a new key with u-token.

   <a name="(9)"></a>

   ### (9) Run auth with updated u-token

9. The client runs app commands using the updated JWT UID token.

<br /><br />

Machines installed with Akeyless identify other machines in the network to ensure the data received is authentic. 
Akeyless uses its own plugin to allow the Vault and environment to interact in a secure fashion. 
Akeyless offers their "Universal Secrets Connector".
Akeyless removes the need for secret zero entirely through their  packaged within their "Vaultless Platform".

The process begins with a starter token created by a human employee that’s used once to authenticate the plugin. From there, Akeyless issues its own tokens and begins authenticating applications. That token is replaced by a new one in the next use for a specified amount of time.

Whenever a new entity is registered under this system, it inherits the identity and token of the original entity. This constant cycle of temporary, rotating identity tokens is a secure alternative to using a single secret zero.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1703896224/akeyless-new-648x1144_cmfkbd.png"><img alt="akeyless-new-648x1144.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1703896224/akeyless-new-648x1144_cmfkbd.png"></a>

## Audit Logs, Analytics, and Usage Reports

<a target="_blank" href="https://tutorials.akeyless.io/docs/audit-logs-analytics-and-usage-reports?_gl=1*1uvav53*_ga*MjMwNzg1OTExLjE3MDM4NjM0ODY.*_ga_L81RVHBZR8*MTcwNDE0MzEyMi4yMS4xLjE3MDQxNDUzNTEuMC4wLjA.">VIDEO</a>:

https://docs.akeyless.io/docs/audit-logs


## References

* <a target="_blank" href="https://www.linkedin.com/pulse/solving-secret-zero-problem-real-jeremy-hess/">BLOG</a> by <a target="_blank" href="https://www.linkedin.com/in/jeremyphess/">Jeremy Hess</a>
<br /><br />
  

