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

   * <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/api-sample.py"><strong>api-sample.py</strong></a> - the star of this show - <a href="#TheCoding">the coding</a>

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

No parameters need to be specified because the program has hard-coded defaults for each feature flag, with ALL features enabled. The default sample output:

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

## Verbosity flags

The above sample reflects these default verbosity variables, which can be changed in the code:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Output </th><th> variable </th><th> enable </th><th> disable </th></tr>
<tr valign="top"><td> what needs attention 
   </td><td> <tt>show_warning</tt> </td><td> -sw default 
   </td><td> -swx </td></tr>
<tr valign="top"><td> headings at start of each section executed
   </td><td> <tt>show_heading</tt> </td><td> -sh default
   </td><td> -shx </td></tr>
<tr valign="top"><td> informational output (such as Lotto numbers)
   </td><td> <tt>show_info</tt> </td><td> -si default
   </td><td> -six </td></tr>
<tr valign="top"><td> intermediate calculations
   </td><td> <tt>show_verbose</tt> </td><td> -sv default
   </td><td> -svx </td></tr>
<tr valign="top"><td> debugging 
   </td><td> <tt>show_trace</tt> </td><td> -stv 
   </td><td> -stx default </td></tr>
</table>

The output above are issued in order of execution, explained below.

TODO: A "dev" and "prod" mode which establishes whole sets of switches.


<a name="Sections"></a>

## Sections of code (and their feature flags)

   1. Import libraries
   2. <a href="#StartingTime">Define starting time and default variables</a>
   3. <a href="#ParseArguments">Parse arguments that control program operation</a>
   4. Define utilities for printing (in color), logging
   5. <a href="#Localization">Define Localization (to translate text to the specified locale)</a>
   6. <a href="#DefineUtils">Define utilities for managing data storage folders and files</a>

   7. Display run conditions: datetime, OS, Python version, etc.
   8. Obtain run control data from .env file in the user's $HOME folder
   to obtain the desired LOCALE, cloud region, zip code, and other variable specs.

   9. Generate various calculations for hashing, encryption, etc.

      1. Generate Hash from a file & text         = gen_hash
      2. Generate a random salt                   = gen_salt
      3. Generate a random percent of 100         = gen_1_in_100
      4. Generate Fibonacci with memoization      = gen_fibonacci
      5. Generate JWT (Json Web Token)            = gen_jwt
      6. Generate Lotto America Numbers           = gen_lotto
      7. Generate Magic 8-ball numbers            = gen_magic_8ball
      8. Convert between Roman numerals & decimal = process_romans

   10. Retrieve client IP address               = show_ipaddr
   11. Lookup geolocation info from IP Address  = lookup_ipaddr

   12. <a href="#ZipCode">Obtain Zip Code to retrieve Weather info = show_zipinfo</a>
   13. Retrieve Weather info using API          = show_weather

   14. <a href="AzureKeyVault">Retrieve secrets from Azure Key Vault  = use_azure</a>
   15. Retrieve secrets from AWS KMS         = use_aws
   16. <a href="#GCP">Retrieve secrets from GCP             = use_gcp</a>
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

<a name="StartingTime"></a>

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

<a name="ParseArguments"></a>

## 3. Parse arguments that control program operation

Since api-sample.py was written to be used as the starting point for building other programs, it has a large <strong>scope</strong> of features coded. 

   * The IP Address is obtained using the requests library.
   * Geolocation information based on IP address is obtained using an API usig the urllib2 library.
   <br /><br />

Included in the code are conversions of dates, floats, and formatting floats.

https://learnpython.com/blog/9-best-python-online-resources-start-learning/


<a name="Localization"></a>

## 5. Localization

NOTE: For localized presentation, use these specialized functions:
    # atof (convert a string to a floating point number),
    # atoi (convert a string to integer),
    # str (formats a floating point number using the same format as the
    # built-in function str(float) but takes the decimal point into account).


<a name="DefineUtils"></a>

## 6. Define utilities for managing data storage folders and files
## 7. Display run conditions: datetime, OS, Python version, etc.

##   8. Obtain run control data from .env file in the user's $HOME folder
  
To obtain the desired cloud region, zip code, and other variable specs.

##   9. Generate various calculations for hashing, encryption, etc.

### Salt

https://tonyarcieri.com/4-fatal-flaws-in-deterministic-password-managers


<a name="make_change"></a>

### 9.9 Make change using Dynamic Programming     = make_change

This "Coin Changing problem" was a <a target="_blank" href="https://codility.com/media/train/15-DynamicProgramming.pdf">PDF: Codility challenge</a> to <a target="_blank" href="https://www.youtube.com/watch?v=qH7fVuYlOOc&list=PLNmW52ef0uws098xXRbALoadgcc4bNkDm&index=2">VIDEO: returning change for the smallest number of bills/coins</a>, to use Space Complexity from O(n · k) to O(k).

Here is one solution:

<pre>def make_change_dynamic(C, k):
    # k is the amount you want back in bills/change
    # C is an array of the denominations of the currency
    # (assuming there is an unlimited amount of each bill/coin available)
    print(f'*** k={k} C="{C}')
    n = len(C)
    dp = [0] + [MAX_INT] * k
    for i in xrange(1, n + 1):
       for j in xrange(C[i - 1], k + 1):
           dp[j] = min(dp[j - C[i - 1]] + 1, dp[j])
    return dp
&nbsp;
make_change_dynamic(34,[100,50,20,10,5,1])
</pre>

<a target="_blank" href="https://www.youtube.com/watch?v=X8f87hi_c7c&list=PLNmW52ef0uws098xXRbALoadgcc4bNkDm">VIDEO</a>: memonic "FAST" method by Sam at <a target="_blank" href="https://www.byte-by-byte.com/dpbook-resources/">Byte by Byte</a>, author of <a target="_blank" href="https://www.byte-by-byte.com/dpbook/">DP (Dynamic Programming) ebook</a>.




<a name="AzureKeyVault"></a>

## Retrieve secrets from Azure Key Vault  = use_azure

https://docs.microsoft.com/en-us/python/api/overview/azure/identity-readme?view=azure-python

Azure Active Directory identity library

from azure.identity import DefaultAzureCredential  
   * https://pypi.org/project/azure-identity/
   <br /><br />

from azure.keyvault.secrets import SecretClient
   * see https://pypi.python.org/pypi/azure-keyvault-secrets
   <br /><br />


References:
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


<a name="ZipCode"></a>

## Zip Code

    # NOTE: Several place names can be associated with a Zip Code.
    # TODO: Loop through a list of zip codes.
    # TODO: Repeat every x minutes for updates
    # TODO: Save results (in CSV or document DB) for time series analysis

    # Alternately:
    # city_name="New York"
    # city_name = input("Enter city name : ")


<a name="GCP"></a>

## GCP

1. See my https://wilsonmar.github.com/gcp about getting an account, creating a project, and getting into https://console.cloud.google.com and Cloud Shell.

1. Edit the python-samples.env file with:

   <pre>PROJECT_ID="1234etc"</pre>

1. Enable billing for project

1. Use the Cloud Shell to enable the Secret Manager API:

   <pre><strong>gcloud services enable secretmanager.googleapis.com
   </strong></pre>

   You should see output like this:

   <pre>Operation "operations/acf.cc11852d-40af-47ad-9d59-477a12847c9e" finished successfully.</pre>

1. On your laptop, install the Secret Manager Client Library:

   <pre><strong>pip3 install --user google-cloud-secret-manager==2.5.0
   </strong></pre>

1. Enter the Jupyter enviornment:

   <pre><strong>ipython</strong></pre>

To use serverless <a target="_blank" href="https://codelabs.developers.google.com/codelabs/secret-manager-python#7">Google Cloud Functions</a>, specify in the requirements.txt of your Python project folder:

   <pre>google-cloud-secret-manager==2.5.0</pre>

In Secret Manager, a secret is a wrapper around a collection of secret versions.

The secret stores metadata such as labels and replication, but it does not contain the actual secret.

A secret version contains the actual contents of a secret.

A secret version can be enabled, disabled, or destroyed.w

To change the contents of a secret, create a new version.

References:
   * https://wilsonmar.github.io/gcp/

   * Python on Google Cloud: https://cloud.google.com/python/

   * Secret Manager: https://cloud.google.com/secret-manager/
   * https://googleapis.dev/python/secretmanager/latest/index.html
   * https://googleapis.dev/python/secretmanager/1.0.0/gapic/v1/api.html
   
   * https://cloud.google.com/secret-manager/docs/reference/libraries#client-libraries-install-python

   * Cloud Client Libraries for Python: https://googlecloudplatform.github.io/google-cloud-python/


<hr />

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

### Proof by linking hash to a blockchain

https://tierion.com/chainpoint/
Chainpoint doesn't yet have a Python library, so TODO: write one based on their CLI
to access their Gateway:

https://github.com/chainpoint/chainpoint-gateway/wiki/Gateway-HTTP-API

# https://github.com/chainpoint/chainpoint-start
# https://github.com/chainpoint/chainpoint-gateway/wiki/Gateway-HTTP-API


### Text Readability Score

https://github.com/brbcoding/Readability

### Dynamic Programming

https://www.byte-by-byte.com/dpbook/



<hr />

## More about Python

This is one of a series about Python:

{% include python_links.html %}
