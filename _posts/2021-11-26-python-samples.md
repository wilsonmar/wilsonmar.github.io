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

This is implementation of a suggestion I had in <a target="_blank" href="https://www.linkedin.com/pulse/how-shine-coding-challenges-wilson-mar-/">my article on "How to shine at coding challenges"</a>.

> Most sample code lacks security, editing, internationalization, etc. So with some friends I created coding that has various features all working together in one program file, from this GitHub repository:

   <ul><a target="_blank" href="https://github.com/wilsonmar/python-samples.git">https://github.com/wilsonmar/python-samples</a> 
   </ul>

This page contains commentary which references code in that repos, which contain these files:

   * <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/api-sample.py"><strong>api-sample.py</strong></a> - the star of this show - <a href="#TheCoding">the coding</a>

   * <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/api-sample.sh"><strong>api-sample.sh</strong></a> - a shell script which sets up the environment and runs the Python program. It's described in my blog article <a target="_blank" href="https://wilsonmar.github.io/python-install">wilsonmar.github.io/python-install</a> which describes <strong>installation</strong> and configuration advice

   * <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/master/api-sample.env"><strong>api-sample.env</strong></a> which stores environment variables used by the Python program.

   * .gitignore

   * <a target="_blank" href="https://wilsonmar.github.com/github-actions">workflow files for use within GitHub Actions</a>

<hr />

## To of Coding File 

Many examples on GitHub begin with:

<pre>import unittest</pre>

and contain something like:

<pre>class TestMakingChange(unittest.TestCase):

    def setUp(self):
        self.american_coins = [25, 10, 5, 1]
        self.random_coins = [10, 6, 1]

        self.testcases = [(self.american_coins, 1, 1), (self.american_coins, 6, 2), (self.american_coins, 47, 5), (
            self.random_coins, 1, 1), (self.random_coins, 8, 3), (self.random_coins, 11, 2), (self.random_coins, 12, 2)]
</pre>
 

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
*** Ended Saturday 27 Nov 2022 08:34:26 PM   (epoch=1638070466.103145) 
*** api-sample.py done in 0.77 seconds. 
</pre>

## Program controls

What the program outputs to the Terminal can be precisely specified.

The program precedence of override:
   1. Prompts of the user from inside the running program (such as for Zip Code) overrides
   2. <a href="#ParseArguments">parameter specifications</a> at run-time, which overrides
   3. what is specified in <a href="#run_env">persistent environment (.env) file</a>, which overrides
   4. what is hard-coded in program code.
   <br /><br />


<a name="Sections"></a>

## Sections of code (and their feature flags)

   0. Define program attributes.
   1. Import libraries
   2. <a href="#StartingTime">Capture starting time and set default global values</a>
   3. <a href="#ParseArguments">Parse arguments that control program operation</a>
   4. Define utilities for printing (in <a href="#PrintColors">color</a>), <a href="#Logging">logging</a>
   5. <a href="#run_env">Obtain run control data from .env file in the user's $HOME folder</a>
   6. <a href="#Localization">Define Localization (to translate text to the specified locale)</a>
   7. <a href="#DefineUtils">Define utilities for managing data storage folders and files</a>
      1. <a href="#ManageFolders">Create, navigate to, and remove local working folders</a>
      2. <a href="#SQLLite">Local machine in-memory SQL database  = SQLLite</a>

   8. Display run conditions: datetime, OS, Python version, etc.
      1. <a href="#get_ipaddr">Retrieve client IP address               = get_ipaddr</a>
      2. <a href="#lookup_ipaddr">Lookup geolocation info from IP Address  = lookup_ipaddr</a>
      3. <a href="#lookup_zipinfo">Obtain Zip Code to retrieve Weather info = lookup_zipinfo</a>
      4. <a href="#show_weather">Retrieve Weather info from zip code or lat/long  = show_weather</a>

   9. Generate various calculations for hashing, encryption, etc.
      1. <a href="#gen_hash">Generate Hash from a file & text         = gen_hash</a>
      2. <a href="#gen_salt">Generate a random salt                   = gen_salt</a>
      3. <a href="#gen_1_in_100">Generate a random percent of 100         = gen_1_in_100</a>
      4. <a href="#process_romans">Convert between Roman numerals & decimal = process_romans</a> (case structure)
      5. <a href="#gen_jwt">Generate JWT (Json Web Token)            = gen_jwt</a>
      6. <a href="#gen_lotto">Generate Lotto America Numbers           = gen_lotto</a>
      7. <a href="#gen_magic_8ball">Generate Magic 8-ball numbers            = gen_magic_8ball</a>

   10. Get in the cloud:
      1. <a href="use_azure">Retrieve secrets from Azure Key Vault  = use_azure</a>
      2. <a href="use_aws">Retrieve secrets from AWS KMS         = use_aws</a>
      3. <a href="#use_gcp">Retrieve secrets from GCP             = use_gcp</a>
      4. <a href="#use_vault">Retrieve secrets from Hashicorp Vault = use_vault</a>

   11. Applications processing user input with persistance:
      1. <a href="#categorize_bmi">Calculte BMI using units of measure based on country = categorize_bmi</a>
      2. <a href="#gen_fibonacci">Generate Fibonacci with memoization      = gen_fibonacci</a>
      3. <a href="#make_change">Make change using Dynamic Programming     = make_change</a>
      4. <a href="#fill_knapsack">Fill knapsack     = fill_knapsack</a>

   12. Make use of cloud services:
      1. Create/Reuse container folder for img app to use
   19. <a href="#download_imgs">Download img application files           = download_imgs</a>
   20. <a href="#process_img">Manipulate image (OpenCV OCR extract)    = process_img</a>
   21. <a href="#send_slack_msgs">Send message to Slack                    = send_slack_msgs</a>  (TODO:)
   22. <a href="#send_email">Send email                    = send_email</a>  (TODO:)
   
   98. <a href="#cleanup_img_files">Remove (clean-up) folder/files created   = cleanup_img_files</a>
   99. <a href="#display_run_stats">Display run time stats at end of program = display_run_stats</a>

<hr />


<a name="TheCoding"></a>

## The coding in api-sample.py

1. QUESTION: Why is the top line needed?

   <pre>#!/usr/bin/env python</pre>


## Block comments

CODING CONVENTION: Block comments about the program as a whole and each function defined.

## "Dunder" variables

<pre>__repository__ = "https://github.com/wilsonmar/python-samples"
__author__ = "Wilson Mar"
__copyright__ = "See the file LICENSE for copyright and license info"
__license__ = "See the file LICENSE for copyright and license info"
__version__ = "0.0.58"  # change on every push - Semver.org format per PEP440
__linkedin__ = "https://linkedin.com/in/WilsonMar"
</pre>


##  1. Import of Libraries

CODING CONVENTION: imports are listesd in alphabetical order to make them easier to find. Most IDEs would detect when you don't have an imported coded.

SECURITY CONSIDERATION: Generally, minimize the number of external dependencies to a small number of trusted ones from Microsoft, Amazon, etc.


<hr />

<a name="StartingTime"></a>

## 2. Define starting time and default global values

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

### Show or not

Additionally, our custom print statements make use of global variables:

   <ul><pre>show_warning = True    # -wx  Don't display warning
show_info = True       # -qq  Display app's informational status and results for end-users
show_heading = True    # -q  Don't display step headings before attempting actions
show_verbose = True    # -v  Display technical program run conditions
show_trace = True      # -vv Display responses from API calls for debugging code
   </pre></ul>

<a name="VerbosityFlags"></a>

### Verbosity flags

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


## 4. Define utilities for printing (in color), logging, etc.

<a name="PrintColors"></a>

### Printing in Color

Different colors in print output on CLI Terminal make it clear what type of information is being convayed:

   * Red for failure conditions
   * Yellow for warnings
   * Green or White for normal information (in BOLD type)
   <br /><br />

There are <a target="_blank" href="https://www.geeksforgeeks.org/print-colors-python-terminal/">external libraries (such as colorama)</a> to enable coding to incorporate colors:

   <ul><tt>print(colored('Hello, World!', 'green', 'on_red'))</tt></ul>

However, PROTIP: We prefer not to type names of colors (such as "GREEN") in app code because in the future we may want to change the color scheme within changing every print() line of code. Different font codes are needed
in dark backgrounds than in white backgrounds.

Ideally, we would specify text to print using a custom function that automatically incorporates the appropriate colors in the output:

   <ul><pre>print_info("Buy {widgets_to_buy} widgets")
print_warning("Free disk space on {disk_id} low: {disk_pct_free}%")
print_fail("Code {some_code} not recognized in program.")
   </pre></ul>

    # FIXME: Pull in text_in containing {}.

Internally the <tt>print_info()</tt> function would use statements that is the equivalent of:

   <ul>print("*** %s %s=%s" % (my_os_platform, localize_blob("version"), platform.mac_ver()[0]),end=" ")
   print("%s process ID=%s" % ( my_os_name, os.getpid() ))
   </ul>

PROTIP: The <tt>,end=" "</tt> at the end of the first statement removes the line break (new line) normally issued by Python print() statements.

PROTIP: Defining statics in a class requires each to be referenced with the class name, which
provides context about what that static is used for.

So rather than coding colors in every print statement, such as this:

   <ul><tt>from colorama import Fore, Back, Style</tt></ul>

   <ul><tt>from termcolor import colored</tt></ul>



<a name="run_env"></a>

##  5. Obtain run control data from .env file in the user's $HOME folder

Code in this section is used to obtain values that control a run, such as 
<strong>override</strong> of the LOCALE, cloud region, zip code, and other variable specs.

This is needed for testing.

The code reads a file in an ".env" file in the user's $HOME folder because that folder is <strong>away from GitHub</strong>.
That file's name by hard-coded default is:

   <ul><pre>env_file = 'python-samples.env'</pre></ul>

<strong>The following example of the .env file contents</strong> is not put in the code because that would trigger findings in utilities that look for secrets in code.

<pre>LOCALE="en_US"  # "en_EN", "ar_EG", "ja_JP", "zh_CN", "zh_TW", "hi" (Hindi), "sv_SE" #swedish
#MY_ENCODING="UTF-8"
&nbsp;
#MY_ZIP_CODE="59041"  # use to lookup country, US state, long/lat, etc.
#MY_COUNTRY="US"      # For use in whether to use metric
#MY_US_STATE="MT"
#MY_LONGITUDE = ""
#MY_LATITUDE = ""
#MY_TIMEZONE = ""
#MY_CURRENCY = ""
#MY_LANGUGES = ""
&nbsp;
#MY_IP_ADDRESS=""     # override of lookup done by program
IPFIND_API_KEY="12345678-abcd-4460-a7d7-b5f6983a33c7"
OPENWEATHERMAP_API_KEY="12345678901234567890123456789012"
&nbsp;
AZURE_SUBSCRIPTION_ID="12345678901234567890123456789012"   # access to info behind this requires user credentials
AZURE_REGION="eastus"
KEY_VAULT_NAME="howdy-from-azure-eastus"
&nbsp;
AWS_REGION="us-east-1"
AWS_CMK_DESCRIPTION="My Customer Master Key"   # this is not a secret, but still does not belong here.
KEY_ALIAS = 'alias/hands-on-cloud-kms-alias'   # 
&nbsp;
GCP_PROJECT_ID="123456etc?"
GCP_REGION="east1?"
&nbsp;
VAULT_TOKEN=3340a910-0d87-bb50-0385-a7a3e387f2a8   # secret
VAULT_URL=http://localhost:8200
&nbsp;
IMG_PROJECT_ROOT="$HOME"  # or "~" on macOS="/Users/wilsonmar/" or Windows: "D:\\"
IMG_PROJECT_FOLDER="Projects"
</pre>

TODO: The program downloads file "python-samples.env" from GitHub to the user's $HOME folder for reference:

Such run variables can be overridden by specifications in the program's invocation parameters or real-time UI specification.
  
Some use this mechanism to retrieve API keys to services that do not ask for personal information and credit cards (such as weather apps).
But storing any secret in a clear-text (unencrypted) file containing is not recommended.

CAUTION: Leaving secrets anywhere on a laptop is dangerous. One click on a malicious website and it can be stolen.
It's safer to use a cloud vault such as Amazon KMS, Azure, Hashicorp Vault after signing in.
   * https://blog.gruntwork.io/a-comprehensive-guide-to-managing-secrets-in-your-terraform-code-1d586955ace1#bebe
   * https://vault-cli.readthedocs.io/en/latest/discussions.html#why-not-vault-hvac-or-hvac-cli
   <br /><br />

Putting secrets in an .env file is better than putting secrets in ~/.bash_profile on macOS.
See https://python-secrets.readthedocs.io/en/latest/readme.html


<hr />

<a name="Localization"></a>

##  6. Localization

NOTE: For localized presentation, use these specialized functions:
    # atof (convert a string to a floating point number),
    # atoi (convert a string to integer),
    # str (formats a floating point number using the same format as the
    # built-in function str(float) but takes the decimal point into account).

Use Language Code Identifier (LCID) https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c?redirectedfrom=MSDN

my_encoding = "utf-8"  # default: or "cp860" or "latin" or "ascii"


##  7. Display run conditions: datetime, OS, Python version, etc.


<a name="DefineUtils"></a>

##  7. Define utilities for managing data storage folders and files

<a name="ManageFolders"></a>

### 7.1. Create, navigate to, and remove local working folders

<a name="SQLLite"></a>

### 7.2. Local machine in-memory SQL database  = SQLLite</a>

PROTIP: A SQL databases locally created from within a Python program is as transitory (temporary) as the program instance itself.

CAUTION: Encryption of data in transit and at rest is still needed on such "scratch" databases.

For more persistant storage which lives to serve many different instances of a program, use a proper database established in a cloud enviornment.

Instead of SQL, consider use of a Redis/Kafka key/value server/service


##  9. Generate various calculations for hashing, encryption, etc.

https://www.python.org/dev/peps/pep-0506/

https://github.com/python/cpython/blob/3.6/Lib/random.py

### Base64 Salt

1. To create a random string of n bytes that is Base64 encoded for use in URLs:

    secrets.token_urlsafe([nbytes=None])
   <pre>n=16
   token_urlsafe(16)  
       # 'Drmhze6EPcv0fN_81Bj-nA'
   </pre>

   On average each n byte results in approximately 1.3 characters. If nbytes is None or not supplied, a reasonable default is used.



Python 3.6 introduced a secrets module, which "provides access to the most secure source of randomness that your operating system provides." 

https://docs.python.org/3.6/library/secrets.html


secrets.token_bytes([nbytes=None])

    Return a random byte string containing nbytes number of bytes. If nbytes is None or not supplied, a reasonable default is used.

    >>> token_bytes(16)  
    b'\xebr\x17D*t\xae\xd4\xe3S\xb6\xe2\xebP1\x8b'

secrets.token_hex([nbytes=None])

    Return a random text string, in hexadecimal. The string has nbytes random bytes, each byte converted to two hex digits. If nbytes is None or not supplied, a reasonable default is used.

    >>> token_hex(16)  
    'f9bf78b9a18ce6d46a0cd2b0b86df9da'





In order to generate some cryptographically secure numbers, you can call secrets.randbelow().

<pre>
secrets.randbelow()
n=10
rand_num = secrets.randbelow(n)  # returns a number between 0 and n.
print(f'*** {rand_num} ')
&nbsp;
# from random import SystemRandom
cryptogen = SystemRandom()
[cryptogen.randrange(3) for i in range(20)] # random ints in range(3)
    # [2, 2, 2, 2, 1, 2, 1, 2, 1, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0]
[cryptogen.random() for i in range(3)]  # random floats in [0., 1.)
   # [0.2710009745425236, 0.016722063038868695, 0.8207742461236148]
</pre>

The above replaces use of standard pseudo-random generators os.urandom() which are not suitable for security/cryptographic purposes.

<pre>salt_size = 32
password_salt = os.urandom(salt_size).hex()  # returns a byte string
   # m\xd4\x94\x00x7\xbe\x04\xa2R'    
map(ord, os.urandom(10))
   # [65, 120, 218, 135, 66, 134, 141, 140, 178, 25]
</pre>

References:
   * https://tonyarcieri.com/4-fatal-flaws-in-deterministic-password-managers


<a name="gen_fibonacci"></a>

###  9.4. Generate a fibonacci number recursion    = gen_fibonacci

The Fibonacci sequence is a sequence of numbers which is the sum of the two preceding numbers.
Leonardo Fibonacci (1175 A.D. - 1250 A.D) found that the quotient of the adjacent number has a proportion, roughly 1.6180, or its inverse 0.6180, also called the "golden ratio".

There are actually practical uses for Fibonacci sequences in financial technical analysis. Specifically, retracements:
   * https://www.investopedia.com/articles/technical/04/033104.asp
   * https://www.investopedia.com/terms/f/fibonaccilines.asp
   * https://www.investopedia.com/terms/f/fibonaccitimezones.asp


<pre>def fibonacci_recursive(n):
        """Calculate using brute-force across all - for O(n) time complexity
        This is also called a "naive" implementation.
        """
        # if (n == 0) return 0;
        # if (n == 1) return 1;
        if n in {0, 1, 2}:   # the first 3 result values (0, 1, 2) are the same as the request value.
            return n
        return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)   # recursive because function calls itself.
</pre>

The "Dynamic programming" approach is to start out with a cache of pre-calculated solutions from previous runs, such as:

<pre>fibonacci_memoized_cache = {0: 0, 1: 1, 2: 2, 3: 3, 4: 5, 5: 8, 6: 13, 7: 21, 8: 34, 9: 55, 10: 89, 11: 144, 12: 233, 13: 377, 14: 610}
</pre>

The increase in return values <strong>grow exponentially</strong>.

<pre>def fibonacci_memoized(n):
      """Calculate using saved lookup - for O(1) time complexity"""
      if n in fibonacci_memoized_cache:  # Base case
            return fibonacci_memoized_cache[n]
      # else:  # add entry in fibonacci_memoized_cache and TODO: save to Redis/Kafka.
         # TODO: If Redis is not found, issue API calls to create it.

      fibonacci_memoized_cache[n] = fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
      return fibonacci_memoized_cache[n]
</pre>

Based on bottom_up_fib(n) in https://github.com/samgh/DynamicProgrammingEbook/blob/master/python/Fibonacci.py

<pre>"""
        Compute the nth Fibonacci number iteratively
        """
        ...
        cache = [0]*(n+1)
        cache[1] = 1
        for i in range(2, n+1):
            cache[i] = cache[i-1] + cache[i-2]
        return cache[n]
</pre>


<a name="AzureCacheforRedis"></a>

### Azure Cache for Redis

In production systems that does this kind of workload, consider the use of a Redis/Kafka in-memory cache.

"Caching typically works well with data that is immutable or that changes infrequently. Examples include reference information such as product and pricing information in an e-commerce application, or shared static resources that are costly to construct."
-- See https://docs.microsoft.com/en-us/azure/architecture/best-practices/caching

Redis would allow duplicates of a program to run in several locations, and update a central momoized_cache.
The example here uses Azure Cache for Redis</a>, a highly-scalable SaaS service fully-managed by Azure based on the open-source Redis in-memory key-value database.

It helps to write to a more permanent location (in a JSON database) because 
in order to scale down a Cache, a new instance needs to be setup.
When cached data expires, it's removed from the cache, and the application must retrieve the data from the original data store (it can put the newly fetched information back into cache).

Redis is designed to run inside a trusted environment that can be accessed only by trusted clients.

The Premium plan is needed for access inside a private virtual network.

https://azure.microsoft.com/en-us/services/cache/ is the marketing home page

<a target="_blank" href="https://azure.microsoft.com/en-us/pricing/details/cache/">Pricing</a> begins at <strong>$0.022/hour</strong> ($0.528/day or $15.84/month) for the "C0" Basic service to a maximum of 256 client connections referencing up to 250 MB in the US.

The DNS name ends with <tt>...westus2.redisenterprise.cache.azure.net</tt>



* https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-python-get-started
* https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/
* https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-overview



<hr />


<a name="make_change"></a>

### 9.9 Make change using Dynamic Programming     = make_change

This "Coin Changing problem" was a <a target="_blank" href="https://codility.com/media/train/15-DynamicProgramming.pdf">PDF: Codility challenge</a> to  returning change for the smallest number of bills/coins</a>, 

The call to the function is:

<pre>make_change_dynamic(34,[100,50,20,10,5,1])</pre>

The function's signature:

<pre>def make_change_dynamic(k, C):
    # k is the amount you want back in bills/change
    # C is an array of the denominations of the currency, such as [100,50,20,10,5,1]
    # (assuming there is an unlimited amount of each bill/coin available)
    n = len(C)  # the number of items in array C
    print(f'*** make_change_dynamic: k={k} C="{C}" n={n} ')
</pre>

In the array of denominations, the largest denomination appears first because we want to give out the largest bills first. For example, if k is 200, we would give back two $100 bills, not a stack of $1 bills.
This is called the "greedy" method.

The plainly ("brute force") approach is to iteratively pick the largest denomination from array C (such as 100),
with each turn.
It returns an array of each denomination given back as change = <tt>[20, 10, 1, 1, 1, 1]</tt>

<pre>*** make_change_dynamic: C="[100, 50, 20, 10, 5, 1]" n=6 
*** turn=0 k=34 to start 
*** turn=1 k=14 after denom=20 change 
*** turn=2 k=4 after denom=10 change 
*** turn=3 k=3 after denom=1 change 
*** turn=4 k=2 after denom=1 change 
*** turn=5 k=1 after denom=1 change 
*** turn=6 k=0 after denom=1 change 
*** After 6 turns, k=0 remaining ...
*** make_change: change_back=[20, 10, 1, 1, 1, 1] 
</pre>

The assumption is an infinite number of each denomination (kind of bill/coin).


### Make Change Dynamically

To optimize, we can reduce the number of "turns" and the extent of repetitive lookup of denominations.
The brute-force solution does not consider those aspects.

Dynamic Programming involves breaking down a problem into solutions to <strong>sub-problems</strong>.
There is a "top-down" and "bottom-up" approach to solving the problem.

PROTIP: Many of the "Dynamic Programming" solutions (such as <a href="#gen_fibonacci">Fibonacci</a>) involves caching and then referencing a <strong>pre-calculated array</strong> (using memoization) instead of prepeatedly performing calculations interrively. 
In other words, dynamic programming generally uses more memory space to take less time.

A <strong>"bottom-up" (iterative)</strong> solution is often faster than a "top-down" (recursive) approach, but not always.

add that to output list "dp" for what is given out, and subtract it from "k". 

The global value going into the function is MAX_INT which defines an arbitrary maximum number of bills/coins
for use the empty state starting point.

<pre>
    dp = [0] + [MAX_INT] * k   # array of bills given out
    for i in xrange(1, n + 1):   # 
       for j in xrange(C[i - 1], k + 1):
           dp[j] = min(dp[j - C[i - 1]] + 1, dp[j])
    return dp
</pre>

to use Space Complexity from O(n · k) to O(k).

References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=jaNZ83Q3QGc">VIDEO by Stephen O'Neil</a> of <a target="_blank" href="https://www.codebelts.com/">codebelts.com</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=X8f87hi_c7c&list=PLNmW52ef0uws098xXRbALoadgcc4bNkDm">VIDEO</a>: memonic "FAST" method by Sam Gavis-Hughson at <a target="_blank" href="https://www.byte-by-byte.com/dpbook-resources/">Byte by Byte</a>, author of <a target="_blank" href="https://github.com/samgh/DynamicProgrammingEbook/tree/master/python">DP (Dynamic Programming) ebook for Python</a>.

   * <a target="_blank" href="https://www.youtube.com/watch?v=m2Elp9ubY3w">VIDEO by Derrick Sherrill</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=jgiZlGzXMBw&list=RDCMUCmJz2DV1a3yfgrR7GqRtUUA&start_radio=1&rv=jgiZlGzXMBw">VIDEO by "Back to Back SWE</a> https://b2bswe.co/change-making-problem
   * <a target="_blank" href="https://www.youtube.com/watch?v=1R0_7HqNaW0">VIDEO by Kevin Naughton Jr.</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=H9bfqozjoqs&list=RDCMUC_mYaQAE6-71rjSN6CeCA-g&start_radio=1&rv=H9bfqozjoqs">VIDEO by NeetCode: 1</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=DJ4a7cmjZY0&list=RDCMUCmJz2DV1a3yfgrR7GqRtUUA&start_radio=1&rv=DJ4a7cmjZY0">VIDEO by NeetCode: 2</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=bGC2fNALbNU">VIDEO by CS Dojo</a> from Facebook
   * <a target="_blank" href="https://www.youtube.com/watch?v=qH7fVuYlOOc&list=PLNmW52ef0uws098xXRbALoadgcc4bNkDm&index=2">VIDEO: by Paul</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=HWW-jA6YjHk">VIDEO by interiewing.io</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=sn0DWI-JdNA">VIDEO by Hackerrank</a>


<a name="fill_knapsack"></a>

### 9.10 Fill knapsack     = fill_knapsack

The "Knapsack" optimization challenge has many uses in the real world. 
(Except for Mary Poppins), every knapsack can carry a limited amount of weight.
Given a value and weight for each item, how do we maximize the amount of value carried in the knapsack?

<pre>items = {(w:2, v:6), (w:2, v:10), (w:3, v:12)}  # w=weight, v=value
max weight = 5
knapsack(items, max weight) = 22  # maximum
</pre>

Right away, limit our combinations that are less than the maximum weight.

The brute-force approach is to examine every possible combination of items in the knapsack.
Ignore items too heavy to fill remaining space in the bag.

This Knapsack problem is the quintessential example of a dynamic programming problem.
Other dynamic programming problems are variations of it.


References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=YRBON9sIZ2Y&list=PLNmW52ef0uws098xXRbALoadgcc4bNkDm&index=7">VIDEO</a>: ?
   * https://youtu.be/Mjy4hd2xgrs
   * https://www.youtube.com/watch?v=xOlhR_2QCXY
   * <a target="_blank" href="https://www.youtube.com/watch?v=xCbYmUPvc2Q&list=RDCMUCmJz2DV1a3yfgrR7GqRtUUA&index=2">VIDEO: by Back to Back SWE</a>


<a name="process_romans"></a>

### 9.8. Convert between Roman numerals & decimal = process_romans

Sample output:

<pre>*** process_romans: roman_to_int: MMXXI => 2021 
*** process_romans: int_to_roman: 2021 ==> MMXXI 
</pre>



zzz
# Alternative: Pure Python GeoIP API = https://github.com/appliedsec/pygeoip


<a name="lookup_zipinfo"></a>

## 12. Obtain Zip Code to retrieve Weather info    = lookup_zipinfo

PROTIP: Users don't have to provide information which can be looked up based in an API given a Zip Code:
<tt>'country': 'United States', 'country abbreviation': 'US', ... 'state': 'Montana', 'state abbreviation': 'MT'</tt>

    # NOTE: Several place names can be associated with a Zip Code.
    # TODO: Loop through a list of zip codes.
    # TODO: Repeat every x minutes for updates
    # TODO: Save results (in CSV or document DB) for time series analysis

    # Alternately:
    # city_name="New York"
    # city_name = input("Enter city name : ")

There is a function for code to obtain zip code.
It uses a potentially problematic <a target="_blank" href="https://betterprogramming.pub/how-to-indefinitely-request-user-input-until-valid-in-python-388a7c85aa6e">infinite while loop to request user input</a>.
We also use the built-in <tt>input()</tt> function because we want to minimize use of 3rd-party libraries such as PyInputPlus.
See https://medium.com/code-85/the-best-way-to-request-user-input-in-python-e072a808dc82
The PyInputPlus module has a module for each data type -- inputStr(), inputNum(), inputMenu() -- to apply appropriate edits to input entered.


<a name="show_weather"></a>

#   13. Retrieve Weather info from zip code or lat/long  = show_weather

Weather reports report on the Kelvin scale, which is converted to Celcius and Fahrenheit scales by the program.

<a target="_blank" href="https://worldpopulationreview.com/country-rankings/countries-that-use-fahrenheit">NOTE</a>: 
The Fahrenheit metric is shown in parentheses because there are very few nations in the world that use the Fahrenheit unit of temperature. 

Countries and territories that use the Fahrenheit scale are:

   * United States
   * Bahamas
   * Cayman Islands
   * Liberia
   * Palau
   * The Federated States of Micronesia
   * Marshall Islands
   <br /><br />

A few nations use BOTH Fahrenheit and Celsius:

   * Antigua and Barbuda
   * Saint Kitts and Nevis
   * British Virgin Islands
   * Montserrat
   * Belize
   * Bermuda
   * Turks and Caicos
   <br /><br />

All other nations in the world exclusively use the Celsius scale when measuring temperature.
The Celsius is named for the Swedish astronomer Anders Celsius, who developed a scale in 1742.
The 100-degree range of the Celsius scale -- from freezing at 0 degrees to boiling at 100 (at sea level)-- made the Celsius scale a natural fit to be a part of the metric system.

The equivalent of a Celsius temperature of 21.1 is 70 on the Fahrenheit scale.

BTW The Fahrenheit scale was initially proposed in 1724 by the Dutch-German-Polish physicist physicist Daniel Gabriel Fahrenheit.
The scale is defined by two fixed points: 32 °F (the freezing point of water) and 212 °F (the boiling point of water). 


<hr />



<hr />

<a name="use_azure"></a>

##  14. Retrieve secrets from Azure Key Vault  = use_azure


<a name="AzureKeyVault"></a>

##  14. Retrieve secrets from Azure Key Vault  = use_azure

https://docs.microsoft.com/en-us/python/api/overview/azure/identity-readme?view=azure-python

Azure Active Directory identity library

from azure.identity import DefaultAzureCredential  
   * https://pypi.org/project/azure-identity/
   <br /><br />

from azure.keyvault.secrets import SecretClient:
   * see https://pypi.python.org/pypi/azure-keyvault-secrets
   <br /><br />


References:
* https://www.youtube.com/watch?v=BErur8WwAsg - Getting Started with Microsoft Azure in Python by Jie Jenn
* https://www.youtube.com/watch?v=k2VYcYS3EIA
* https://www.youtube.com/watch?v=gC4wmZf7dAI - Enable Zero Trust with Azure AD PIM (Privileged Identity Management) and Azure Lighthouse for MSPs (Managed Service Providers) | Azure Friday

Azure SDK for Python:
   * Alternative: <a target="_blank" href="https://wilsonmar.github.io/pulumi">see my blog about Pulumi</a>
   * https://docs.microsoft.com/en-us/azure/developer/python/azure-sdk-install?tabs=pip
   * https://www.youtube.com/watch?v=4xoJLCFP4_4 - Introducing the Azure SDK for Python
   * https://www.youtube.com/watch?v=WER5X_zm6Aw - An introduction to the unified Azure SDK | Azure Friday
   * https://www.youtube.com/watch?v=5oIcT0HCrvI - Microsoft Azure Overview: The Azure Python SDK by Sigma Coding
   * https://www.youtube.com/watch?v=_qQq6oHskUQ - Machine Learning and Python with Microsoft Azure - http://aka.ms/azuredevstreams by https://twitch.tv/enceladosaurus



<a name="use_aws"></a>

##  15. Retrieve secrets from AWS KMS         = use_aws

To generate, encrypt, and decrypt data keys that can be used outside of AWS KMS, AWS uses <strong>two types of CMK (Customer Master Key)</strong> to encrypt up to 4KB of data:

   * Symmetric CMK: 256-bit symmetric key that never leaves AWS KMS unencrypted.

   * Asymmetric CMK: AWS KMS generates a <strong>key pair</strong> where private key never leaves AWS KMS unencrypted.

<a target="_blank" href="https://www.101daysofdevops.com/courses/101-days-of-devops/lessons/day-18/">
Rotating IAM Keys using Boto3</a>

<a target="_blank" href="https://www.101daysofdevops.com/courses/101-days-of-devops/lessons/day-23/">
stop/start EC2 instances on a scheduled basis to save cost using AWS Lambda and CloudWatch</a>

References:
    * https://www.learnaws.org/2021/02/20/aws-kms-boto3-guide/


<a name="use_gcp"></a>

##  16. Retrieve secrets from GCP             = use_gcp


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



<a name="use_gcp"></a>

##  16. Retrieve secrets from GCP             = use_gcp

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

<a name="use_vault"></a>

##  17. Retrieve secrets from Hashicorp Vault = use_vault


<hr />

<a name="categorize_bmi"></a>

### 6.1 Calculte BMI using units of measure based on country = categorize_bmi 



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

Blockchains are an unalterable chain of events with time stamps.

"Chainpoint is an open standard for creating a timestamp proof of any data, file, or series of events."
One use case is to store predictions.
Another use case is are agreements such as Leases since the content is hashed and thus unalterable.

<a target="_blank" href="https://tierion.com/docs/hashapi">
The Chainpoint Hash API Gateway from Tierion.com</a> enables regular applications to record hashes of data in the blockchain. 
The data itself is kept private.
Use of the Hash API is free up to 3 records per second or 1,000 records per hour.

No 3rd-party library is needed, as we use import requests and import hashlib.

<a target="_blank" href="https://app.pluralsight.com/guides/using-the-tierion-hash-api-with-python">BLOG</a>:

JSON Web Token (JWT) is used for authentication to https://hashapi.tierion.com/v1/auth/token
The response from https://app.pluralsight.com/guides/using-the-tierion-hash-api-with-python
is good for one hour.

# https://github.com/chainpoint/chainpoint-start
# https://github.com/chainpoint/chainpoint-gateway/wiki/Gateway-HTTP-API


### Text Readability Score

https://github.com/brbcoding/Readability

   * <a target="_blank" href="https://en.wikipedia.org/wiki/Automated_readability_index">Automated Readability Index</a>
   * <a target="_blank" href="https://en.wikipedia.org/wiki/SMOG">SMOG Index</a>
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Gunning_fog_index">Gunning Fog</a>
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index">Coleman Liau</a>
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests">Flesch Kincaid</a>
   <br /><br />


### Dynamic Programming

https://www.byte-by-byte.com/dpbook/



<hr />

## More about Python

This is one of a series about Python:

{% include python_links.html %}
