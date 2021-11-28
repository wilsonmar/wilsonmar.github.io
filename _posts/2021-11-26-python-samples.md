---
layout: post
title: "Python Samples"
excerpt: "Commentary on a practical example of how to use Python in a production setting."
tags: [python, coding]
date: "2021-11-26"
file: "python-samples"
image:
# pic white python logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622164/4230c848-0585-11e6-957b-be11147346e6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The commentary below references code in my GitHub repository at:

   <ul><a target="_blank" href="https://github.com/wilsonmar/python-samples.git">https://github.com/wilsonmar/python-samples</a> 
   </ul>

which contain these files:

   * <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/api-sample.py"><strong>api-sample.py</strong></a> - the star of this show - <a href="#"TheCoding">the coding</a>

   * <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/api-sample.sh"><strong>api-sample.sh</strong></a> - a shell script which sets up the environment and runs the Python program. It's described in my blog article <a target="_blank" href="https://wilsonmar.github.io/python-install">wilsonmar.github.io/python-install</a> which describes <strong>installation</strong> and configuration advice

   * <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/api-sample.env"><strong>api-sample.env</strong></a> which stores environment variables used by the Python program.

<hr /> 

## Install

Before being able to run the code on a particular machine (laptop), several utilities need to be installed on top of the Operating System.

On a macOS Terminal or 

A. To view the code online, use a browser at address:

   <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/api-sample.py">https://github.com/wilsonmar/python-samples/blob/master/api-sample.py</a>

B. Alternately, edit the code online using Cloud9

C. Alternately, to work with the whole repo on your laptop, 

1. navigate to where you want the repo added and

1. Open your macOS Terminal which has been installed a git program, and:

   <pre><strong>git clone <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/api-sample.py">https://github.com/wilsonmar/python-samples/blob/master/api-sample.py</a></strong></pre>

1. Navigate into the folder created:

   <pre>cd Python-samples</pre>

1. Using "code" (VSCode), or other editor (IDE) to open the whole folder by specifying a dot:

   <pre><strong>code . </strong></pre>

   PyCharm, 

1. Within your editor, in the left menu, click on <strong>api-sample.py</strong> to open it for edit.

<a name="Execution"></a>

Inside the program are <strong>feature flags<strong> referenced to determine whether each feature programmed is executed during a particular run.

In a terminal:

   <ul><pre><strong>python api-sample.py
   </strong></pre></ul>

There are hard-coded defaults for each feature flag.
So that no feature flag needs to be specified, by default ALL features are enabled.
However:

   * <tt>show_verbose</tt> is enabled by default.
   * <tt>show_trace</tt> is NOT enabled so you're not overwhelmed.
   <br /><br />

Sample output:

<pre>*** env_path LOCALE 'en_EN' overrides OS LOCALE ('en_US', 'UTF-8')
&nbsp;
*** api-sample.py v0.0.33 Created: Saturday 27 Nov 2021 01:23:18 PM   
*** at /Users/wilsonmar/gmail_acct/python-samples/api-sample.py 
*** on /Users/wilsonmar/miniconda3/envs/py3k/lib/python3.8/site-packages 
*** Started Saturday 27 Nov 2021 08:33:41 PM   (epoch=1638070421.006971) 
*** macOS version=10.16 ['Big Sur', 2020] process ID=10298
*** Disk space free: 42.0 / 122.1 GB 
*** Python version="3.8.12 | packaged by conda-forge | (default, Sep 29 2021, 19:44:33) 
[Clang 11.1.0 ]
&nbsp; 
*** env_path=/Users/wilsonmar/python-samples.env
&nbsp;
*** Lotto America: 5 lucky numbers between 1 and 52 and 1 Star number between 1 and 10:
*** 20 6 24 4 38 6 
&nbsp; 
*** uuid.uuid4()=3d9a8c08-c354-4712-8e7d-d8dae320a1be 
*** x.time=509684474424495112 
*** Path: "/Users/wilsonmar/Projects" 
*** Directory "Images" created Thursday 25 Nov 2021 09:23:20 PM MST -0700
&nbsp;
*** Longitude: -97.822 Latitude: 37.751 in US America/Chicago USD (VPN).
*** Using hard-coded default zip code "59041".
*** Longitude: -108.9922 Latitude: 45.4941 in US Joliet 59041 
*** Minimum temperature: 44.42°F (6.90°C), Sunrise: 2021-11-23 07:26:23 AM 
*** Currently: 49.57°F (9.76°C), 26% humidity, overcast clouds, visibility: 10000 feet
*** Maximum temperature: 56.61°F (13.67°C),  Sunset: 2021-11-23 04:38:57 PM 
*** Wind Speed: 1.97 (Gusts: 4.14) mph from direction: WNW (259/360) 
*** Atmospheric pressure: 1000 hPa (hectopascals) 
 &nbsp;
*** Script executing at path: '/Users/wilsonmar/Projects' 
*** Downloading to directory: '/Users/wilsonmar/Projects/Images' 
*** Directory "Images" created Thursday 25 Nov 2021 09:23:21 PM MST -0700
Images/
    google.ico
*** Downloading to file path: '/Users/wilsonmar/Projects/Images/google.ico' 
*** No downloading as file can be accessed.
*** Download of 5,430-byte google.ico 
*** After this run: /Users/wilsonmar/Projects/Images 
Images/
    google.ico
&nbsp;
*** Ended Saturday 27 Nov 2021 08:34:26 PM   (epoch=1638070466.103145) 
*** api-sample.py done in 0.77 seconds. 
</pre>

The output above are issued in order of execution, explained below.

<a name="Sections"></a>

## Sections of code (and their feature flags)

   1. Import libraries
   2. Define starting time and default variables
   3. Parse arguments that control program operation
   4. Define utilities for printing (in color), logging
   5. Define Localization (to translate text to the specified locale)
   6. Define utilities for managing data storage folders and files

   7. Display run conditions: datetime, OS, Python version, etc.
   8. Obtain run control data from .env file in the user's $HOME folder
   to obtain the desired LOCALE, cloud region, zip code, and other variable specs.

   9. Various calculations for hashing, encryption, etc.

      * Generate Lotto America Numbers           = gen_lotto
      * Generate Hash from a file                = gen_hash
      * Generate Hash from a file                = gen_1_in_100
      * Generate a random salt                   = gen_salt
      * Generate JWT (Json Web Token)            = use_jwt
      * Convert Roman numerals to decimal        = process_romans

   10. Retrieve client IP address               = show_ipaddr
   11. Lookup geolocation info from IP Address  = show_ipaddr
   12. Obtain Zip Code to retrieve Weather info = show_zipinfo
   13. Retrieve Weather info using API          = show_weather

   14. Retrieve secrets from Azure Key Vault  = use_azure
   15. Retrieve secrets from AWS KMS         = use_aws
   16. Retrieve secrets from GCP             = use_gcp
   17. Retrieve secrets from Hashicorp Vault = use_vault

   18. Create/Reuse container folder for img app to use
   19. Download img application files           = download_imgs
   20. Manipulate image (OpenCV OCR extract)    = process_img
   21. Send message to Slack                    = send_slack_msgs  (TODO:)
   22. Remove (clean-up) folder/files created   = cleanup_img_files
   23. Display run time stats at end of program = display_run_stats

<hr />


<a name="TheCoding"></a>

## The coding in api-sample.py

1. QUESTION: Why is the top line needed?

   <pre>#!/usr/bin/env python</pre>


## Block comments

CODING CONVENTION: Block comments about the program as a whole and each function defined.

## "Dunder" variables

<pre>
__author__ = "Wilson Mar"
__copyright__ = "See the file LICENSE for copyright and license info"
__license__ = "See the file LICENSE for copyright and license info"
__version__ = "0.0.28"  # change on every push - Semver.org format per PEP440
__email__ = "wilsonmar+git@gmail.com"
__linkedin__ = "https://linkedin.com/in/WilsonMar"
__repository__ = "https://github.com/wilsonmar/python-samples"
</pre>

## Import of Libraries

CODING CONVENTION: imports are listesd in alphabetical order to make them easier to find. Most IDEs would detect when you don't have an imported coded.

SECURITY CONSIDERATION: Generally, minimize the number of external dependencies to a small number of trusted ones from Microsoft, Amazon, etc.


<hr />

## 2. Define starting time and default variables

This would be the first command:

   <ul><tt>start_epoch_time = time.time()</tt></ul>

Notice that to avoid confusion, only one timestamp is captured.
epoch time is obtained, then reformatted to datetime:

   <tt># start_datetime = _datetime.datetime.now()</tt>

CAUTION: This code is "naive" and not timezone aware.
The time is relative to local time only.

ALTERNATIVE: For timezone-aware (rather than naive) datetime, use arrow library:
see https://arrow.readthedocs.io/en/latest/

   <ul><tt>import arrow
   start_epoch_time = time_start=arrow.now()</tt></ul>

<hr />

## 3. Parse arguments that control program operation

Since api-sample.py was written to be used as the starting point for building other programs, it has a large <strong>scope</strong> of features coded. 

   * The IP Address is obtained using the requests library.
   * Geolocation information based on IP address is obtained using an API usig the urllib2 library.
   <br /><br />

Included in the code are conversions of dates, floats, and formatting floats.

https://learnpython.com/blog/9-best-python-online-resources-start-learning/

## Feature Flags

## Localization

NOTE: For localized presentation, use these specialized functions:
    # atof (convert a string to a floating point number),
    # atoi (convert a string to integer),
    # str (formats a floating point number using the same format as the
    # built-in function str(float) but takes the decimal point into account).

## Azure Key Vault

* https://www.youtube.com/watch?v=BErur8WwAsg - Getting Started with Microsoft Azure in Python by Jie Jenn
* https://www.youtube.com/watch?v=k2VYcYS3EIA
* https://www.youtube.com/watch?v=gC4wmZf7dAI - Enable Zero Trust with Azure AD PIM (Privileged Identity Management) and Azure Lighthouse for MSPs (Managed Service Providers) | Azure Friday

Azure SDK:
   * https://www.youtube.com/watch?v=4xoJLCFP4_4 - Introducing the Azure SDK for Python
   * https://www.youtube.com/watch?v=WER5X_zm6Aw - An introduction to the unified Azure SDK | Azure Friday
   * https://www.youtube.com/watch?v=5oIcT0HCrvI - Microsoft Azure Overview: The Azure Python SDK by Sigma Coding
   * https://www.youtube.com/watch?v=_qQq6oHskUQ - Machine Learning and Python with Microsoft Azure - http://aka.ms/azuredevstreams by https://twitch.tv/enceladosaurus


## AWS

To generate, encrypt, and decrypt data keys that can be used outside of AWS KMS, AWS uses <strong>two types of CMK (Customer Master Key)</strong> to encrypt up to 4KB of data:

   * Symmetric CMK: 256-bit symmetric key that never leaves AWS KMS unencrypted.

   * Asymmetric CMK: AWS KMS generates a <strong>key pair</strong> where private key never leaves AWS KMS unencrypted.

References:
    * https://www.learnaws.org/2021/02/20/aws-kms-boto3-guide/


<a name="HashicorpVault"></a>

## SECTION 17. Retrieve secrets from Hashicorp Vault

1. Get the URL of the Hashicorp Vault instance you'll be using.

   To run a Vault instance on your laptop for testing, see
   https://modularsystems.io/blog/securing-secrets-python-vault/

   <pre><strong>git clone https://github.com/ryanhartje/containers.git
   cd containers/consul-vault/
   docker-compose up -d
   </strong></pre>

1. Add to python-samples.env

   <pre>VAULT_TOKEN=3340a910-0d87-bb50-0385-a7a3e387f2a8 
   VAULT_URL=http://localhost:8200
   </pre>

   <a target="_blank" href="https://medium.com/hashicorp-engineering/coding-for-secrets-reliability-with-hashicorp-vault-2090dd8667e">PROTIP</a>: This service token is specific to the Vault cluster where the entity identified itself.
   It also has a TTL.

1. Use AppRole to login to Vault by passing a role ID & secret ID to the application. That creates token which could be renewed by the application as long as it is running. 

   You need to protect those two values (e.g. in correctly permissioned files) as anyone who can get hold of them would be able to login to Vault themselves. So <strong>wrap the token</strong>.

   You can minimise the risk by also setting allowed CIDR ranges as well as deleting the files once read by your app.


References:
   
   * https://www.youtube.com/watch?v=SLB_c_ayRMo - Terraform Course - Automate your AWS cloud infrastructure on freeCodeCamp.org

   * https://www.youtube.com/watch?v=-leJQ20Nu0c - Hashicorp Vault without Hassle - Eric Feliksik by TheSmartbit (2017)

   * https://www.youtube.com/watch?v=YGs438aJtZg - HashiCorp Vault Azure Secrets Engine Demo
   * https://www.youtube.com/watch?v=ZWaKF-UXtx8 - Hashicorp Vault PKI Secrets Engine Demo for Certificate Management by TeKanAid

   * https://www.youtube.com/watch?v=G46ovYs_9hs - CloudAcademy Hashicorp: Vault Identity
   * https://fakrul.wordpress.com/2020/06/06/python-script-credentials-stored-in-hashicorp-vault/
   * https://learn.hashicorp.com/tutorials/vault/static-secrets
   * https://discuss.hashicorp.com/t/python-code-to-access-static-secret-to-access-snowflake-database/23059
   * https://stackoverflow.com/questions/62606388/get-secrets-from-enterprise-vault-using-python
   * https://www.youtube.com/watch?v=KxQVlrFy3Gc - using GitLab



## Modular classes



## More APIs

   * TODO: Authentication: see https://github.com/public-apis/public-apis#authentication
   * TODO: OpenID Connect (OIDC): A simple identity layer on top of the OAuth framework.

   * TODO: Send SMS text via Twillo
   * https://hunter.io/api to find emails (25 free/month)
   * TODO: Send email (anonymously?) https://mailsac.com/docs/api
   * TODO: Email validator - https://rapidapi.com/blog/most-popular-api/#email-validator
   * https://mailchimp.com/developer/

   * TODO: Domain validator - https://developers.google.com/safe-browsing/v4
   * TODO: WayBackMachine archiving https://archive.org/wayback/available?url=google.com
   * TODO: https://github.com/public-apis/public-apis#url-shorteners

   * TODO: Alexa https://www.youtube.com/watch?v=j8d8PQTi6uA&list=RDCMUCdiBpPE07MZ4TfFjsNh59Nw&start_radio=1&rv=j8d8PQTi6uA&t=89
   * TODO: Google Assistant https://www.c-sharpcorner.com/article/creating-a-voice-assistant-using-python-and-its-libraries/

   * TODO: Generate Random number, face: https://thispersondoesnotexist.com/
   * TODO: https://bible-api.com/ (no-Auth like Lorem Ipsum text)
   * TODO: https://developers.google.com/calendar/api/v3/reference/calendars
   * TODO: Currency conversion

   * TODO: Twitter account: sentiment analysis (AI)
   * Picture annotation

   * TODO: Flight status - https://skyscanner.github.io/slate/#api-documentation
   * TODO: UPS code lookup https://github.com/public-apis/public-apis#shopping

   * Facebook apps?

"""

""" Test runs:

Multi-platform?
* on MacOS Monterey - see https://wilsonmar.github.io/apple-mac-osx-versions/
* TODO: on Windows.
* TODO: on Linux Centos, Red Hat Enterprise Linux 8
* TODO: on Linux Ubuntu
* TODO: on Linux2 within AWS

Resilient? To ensure exceptions are handled properly:
* TODO: without .env file
* TODO: without wi-fi

"""

<hr />

## Proof by linking hash to a blockchain

https://tierion.com/chainpoint/
Chainpoint doesn't yet have a Python library, so TODO: write one based on their CLI
to access their Gateway:

https://github.com/chainpoint/chainpoint-gateway/wiki/Gateway-HTTP-API

# https://github.com/chainpoint/chainpoint-start
# https://github.com/chainpoint/chainpoint-gateway/wiki/Gateway-HTTP-API



<hr />

## More about Python

This is one of a series about Python:

{% include python_links.html %}
