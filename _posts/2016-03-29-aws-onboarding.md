---
layout: post
title: "AWS Onboarding"
excerpt: "for System Administration and billing"
tags: [AWS, EC2, cloud, on-boarding]
date: "2021-07-21"
file: "aws-onboarding"
image:
# feature: pic data center slice 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622043/8b1f9cce-0584-11e6-8b9f-4b6db5bb6e37.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/aws-onboarding/">
This</a> is a hands-on tutorial to get new enterprise administrators setup to effecctively access and use the AWS cloud. Here you do some action and explanations and PROTIP advice is provided. PROTIPs included how to install and use AWS CLI automation, smart phone apps, and 3rd party tools used by the pros.

This highlights what is in <a target="_blank" href="https://aws.amazon.com/getting-started/">Amazon's Getting Started tutorials</a>.

<a name="AWS_Account"></a>

## Get AWS account

In enterprises, identify the Administrator who dispenses user accounts.

If you're the Global Administrator, see my htts://wilsonmar.github.io/aws-iam

The remainder of this is for users and super users.

There are two ways to interact with AWS:

   * <a href="#AWSConsole">GUI (Graphical User Interface), aka "AWS Console"</a>, where you need to go first to obtain credentials needed to use the CLI.

   * <a href="#CLI">CLI (Command Line Interface)</a> using the MacOS Terminal program.

PROTIP: This document describes <a href="#SecureCredential">steps and scripts to store your AWS credentials securely (below)</a>, not in clear text as described by AWS.



### Root account sign-up

1. Use an internet browser to get on the <strong>AWS marketing page</strong> at 

   <a target="_blank" href="https://aws.amazon.com/">https://aws.amazon.com</a> 

2. Get your credit card numbers ready.

   <a target="_blank" href="https://www.linkedin.com/pulse/how-use-aws-free-tips-teaching-college-wong-chun-yin-cyrus-%E9%BB%83%E4%BF%8A%E5%BD%A5-/">PROTIP</a>: You need a credit card to open an account. But to limit exposure, some people provide to AWS numbers from a <a target="_blank" href="https://usa.visa.com/pay-with-visa/cards/prepaid-cards.html">pre-paid reloadable Visa</a> gift <a target="_blank" href="https://aws.amazon.com/premiumsupport/knowledge-center/accepted-payment-methods/">(debit) card</a> <a target="_blank" href="https://usa.visa.com/pay-with-visa/find-card/get-prepaid-card">pre-paid online</a> (which has an expiration date and some have a monthly service fee). The <a target="_blank" href="https://www.drawpayvisa.com/">Drawpay card</a> provides a 1% refund on purchases and a mobile app to view balances. Others provide fee-Free cash withdrawal at over 25,000 MoneyPass ATMs.

   <a target="_blank" href="https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m4&clip=5&mode=live">*</a>

3. Click the yellow "Sign-Up" button if you don't already have an account.

4. PROTIP: If you are creating a production account for an organization, create an email address which you <strong>use only for managing AWS</strong> and not for regular email use and certainly not for doing shopping on Amazon. 
   
   The account which controls billing is called the <strong>root account</strong>, which as unlimited access to AWS resources and unlimited ability to rack up charges. By resources I mean: users, groups, roles, IAM Access Policies, API keys, etc. globally for all regions.

   Secure that email address with <strong>multi-factor authentication</strong> with Google or whoever hosts your email server. Also have a way for one person (or maximum two) you trust to be able to access the account in case you are not able to.

5. Supply a strong password.

   PROTIP: Use 1Password so that you can easily generate up to <strong>64 character</strong> password, but remember only one password to access the 1Password database of secrets. 1Password encrypts its database so that you can make backups (to a USB drive or secure cloud). I favor 1Password because it provides a way to sync changes with your smartphone without going through the internet.

   Because you only have to remember one master password, you can are free to change various passwords as often as you want with no fear of forgetting them.

6. An example of a value for "AWS account name" is "master-billing".

7. Click "Continue".

   If you have 1Password installed, you would be prompted to create a new account.

8. Provide phone number, address, and credit card.

   Students may want to create several accounts to take advantage of the free tier multiple times. However, uniquely different phone numbers, addresses, and credit cards are not needed for each identity.

9. PROTIP: Where you keep information about your credit card, note the email address and account name using that credit card.

1. Confirm the phone number by answering Amazon's phone call.   

1. For now, click "Free" to select a plan. A <a href="#ComparePlans">comparison on plans is discussed below</a>.

1. Click "Free" to be prompted to sign-in with your new credentials.

   <a name="AccountId"></a>

1. Click your account name at the top black menu for this menu:

   <a target="_blank" href="https://console.aws.amazon.com/billing/home?#/account"><img alt="aws-onboarding-myaccount-184x222-9824.jpg" width="184" src="https://user-images.githubusercontent.com/300046/40592391-ecd60128-61db-11e8-941f-784a35c9d9ff.jpg"></a>

1. Copy the <strong>Account Id</strong> and paste it in the notes associated with where you saed your account email and password (within 1Password).

   PROTIP: This 12 digit number is given out for others to use to sign in using 
   <a href="#SubAccounts">sub-accounts</a>.

1. Scroll down to click "Edit" next to "Alternate Contacts" and put the other person who knows how to get into the account in for the Billing.

1. Scroll down to click Edit to the right of "Configure Security Challenge Questions".
1. Write down your security challenge questions and answers where you wrote your Account Id.

   PROTIP: Treat the answers as another set of passwords because others my discover the real answers via social engineering. Answer with some nonsense that has no basis in reality.


<hr />

<a name="AWSConsole"></a>

## AWS Services Management Console

1. If you are at the AWS marketing page, click "My Account" for this menu:

   <a target="_blank" href="https://aws.amazon.com/">
   <img alt="aws-onboarding-landing-250x252-18241" width="250" src="https://user-images.githubusercontent.com/300046/40591769-685c5502-61d4-11e8-8fbe-bcbf70d5e515.jpg"></a>
   
2. Get the <strong>AWS Management Console</strong>:

   <a target="_blank" href="
   https://console.aws.amazon.com/console/home">
   https://console.aws.amazon.com/console/home</a>
   
   ### All Amazon services

3. Click to view all <strong>Services</strong> at the upper-left black menu band.

4. Read the User Guide for each service at:

   <a target="_blank" href="https://aws.amazon.com/documentation/">
   https://aws.amazon.com/documentation</a>

   ### Quick Access icons

   Save time by quickly get to the most frequently used services by having their icons at the top (black) menu bar.

1. Click the push-pin icon.
1. One by one, drag the icon on the list and drop it on the top black menu to the left of the orange push pin. If you don't see the black menu, pause just under the browser URL for the browser to automatically scroll.

   PROTIP: The services most often used are IAM, VPC, EC2, S3

1. If you have good memory of what icons mean, change the Settings to "Icons only".

   <img alt="aws-onboarding-icons-only-277x112-9365.jpg" src="https://user-images.githubusercontent.com/300046/40741420-c21d19b0-6408-11e8-9c8d-84c5afd9a8bd.jpg">
   

   ### Claim S3 Bucket names

   The AWS Account Administrator has a fudiciary responsibility to secure 
   Intellectual Property assets.

   S3 Bucket names are universally unique among all AWS customers.
   So just as there are domain name squatters who register and sit on .com host names
   for sale at high prices to those who actually use the names,
   the administrator of root accounts for an organization should
   register your organization's brand names before others get them first.

   To create a bucket for each host name registered on GoDaddy, Google Domains, etc.

4. Click S3 from among services.
5. Click the blue "Create bucket" button.
6. Type in the host name (such as "wilsonmar.com") in the Bucket name field.
7. Select your home Region.

   PROTIP: Claiming a Bucket name in one region locks it up for all Regions.

8. Click "Next".
9. Click "Next".
10. Click "Next" to manage users.
11. Click "Create Bucket".



<hr />

<a name="CLI"></a>

## AWS CLI Automation #

In enterprises today, servers are built by
scripts and configuration files
generated from templates.
This is so the build process can be debugged
and changed slightly through the lifecycle from test to prod.

Instead of clicking and typing, server administrators work with
template files in JSON format for Cloud Formation or Terraform to process.

The next step up is to use Atlas
which generates  
JSON files based on information typed into their web Consoles.

The <a href="#CLI">command line interface</a>
is used by programs rather than the manual Console.


<a name="CLI-Install"></a>

### AWS CLI install #

PROTIP: There are several ways to install AWS CLI using Python.

1. The simplest and most reliable for me is to use HomeBrew on Macs, from any folder:

   <tt><strong>brew upgrade awscli
   </strong></tt>

   If awscli was not already installed:

   <tt><strong>brew install awscli
   </strong></tt>

   <pre>🍺  /usr/local/Cellar/awscli/2.2.21: 12,806 files, 100.3MB
Removing: /usr/local/Cellar/awscli/2.2.14... (12,776 files, 101.8MB)
   </pre>

   NOTE: awscli installs the latest dependencies Ansible, ykman, etc.

   Alternately, one can use <tt>pip install awscli --upgrade --user --ignore-installed six</tt>
   installed from <a target="_blank" href="https://pypi.org/project/awscli/">https://pypi.org/project/awscli</a>. But when I did, aws cannot be found.

   Another alternative to install (on CentOS 7) is:

   <pre>curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" \
      -o "awscli-bundle.zip"
   unzip awscli-bundle.zip 
   sudo ./awscli-bundle/install \
      -i /usr/local/aws -b /usr/local/bin/aws
   </pre>

2. Verify what version of awscli you have installed:

   <pre><strong>aws --version
   </strong></pre>

   Something went wrong if your response is:

   <pre>-bash: aws: command not found</pre>

   The expected sample response (May 28, 2018):

   <pre>aws-cli/2.2.21 Python/3.9.6 Darwin/18.7.0 source/x86_64 prompt/off
   </pre>

   PROTIP: Awscli now uses <strong>Python 3</strong>, not 2.7.
   Also previously:

   <pre>aws-cli/1.15.20 Python/3.6.5 Darwin/17.5.0 botocore/1.10.20
   </pre>

   ### AWS Boto for Python

   PROTIP: "AWS SDK for Python" enables your Python (.py) programs to invoke AWS CLI commands.

   <a target="_blank" href="https://github.com/boto/botocore">
   The Python package botocore on GitHub</a>
   provides a low-level foundation for AWS CLI software.

3. To install Boto3:

   <tt><strong>pip install boto3 --upgrade --ignore-installed six
   </strong></tt>

   Code for boto3 is obtained from <a target="_blank" href="https://github.com/boto/boto3">https://github.com/boto/boto3</a>. Read about it at <a target="_blank" href="https://aws.amazon.com/sdk-for-python/">https://aws.amazon.com/sdk-for-python</a>. 

   NOTE: The package is installed into folder:<br />
   <tt>/usr/local/lib/python2.7/site-packages/boto3/*</tt>


   <a name="Autocompletion"></a>

   ### Bash Shell completions

3. On Linux, to enable bash completion for aws commands:

   <tt><strong>echo 'complete -C aws_completer aws' >> ~/.bashrc
   </strong></tt>

4. Test out autocompletion by typing the first two characters and pressing Tab for a list of all aws cli commands that begin with those characters:


   ### AWS Shell completion

   PROTIP: For automatic complex autocompletion of AWS CLI commands, there is a 3rd-party utility that provides a shell GUI that suggest as you type:

   Read about it at <a target="_blank" href="https://github.com/awslabs/aws-shell">https://github.com/awslabs/aws-shell</a>

5. To install the <a target="_blank" href="https://medium.com/@cuttenweiler/aws-shell-i-think-im-in-love-d39878c3e7b7">awesome</a> AWS Shell:

   <tt><strong>pip install aws-shell
   </strong></tt>

   The package is installed in folders: <tt>/usr/local/bin/aws-shell</tt>

   If you see these error messages:

   <pre>ERROR: requests 2.22.0 has requirement urllib3!=1.25.0,!=1.25.1,<1.26,>=1.21.1, but you'll have urllib3 1.26.6 which is incompatible.
ERROR: jupyter-console 6.0.0 has requirement prompt_toolkit<2.1.0,>=2.0.0, but you'll have prompt-toolkit 1.0.18 which is incompatible.
ERROR: ipython 7.6.1 has requirement prompt-toolkit<2.1.0,>=2.0.0, but you'll have prompt-toolkit 1.0.18 which is incompatible.
   </pre>

6. To enable AWS Shell:

   <tt><strong>aws-shell
   </strong></tt>

   You show now be in the sub-shell with prompt:

   <pre>aws></pre>

   <img alt="aws-onboarding-aws-shell-config-207x58-5051.jpg" width="207" src="https://user-images.githubusercontent.com/300046/40611542-eccae42a-6233-11e8-956c-ac85fe8baae3.jpg">

7. Exit aws-shell back to bash:

   <tt><strong>
   .exit
   </strong></tt>

   Alternately, <tt>.quit</tt> works too.


   <a name="jp"></a>
   
   ### jp command

   The jp command enables JSON to be manipulated within Bash scripts.

1. Install it on Macs, in any folder:

   <pre><strong>brew tap jmespath/jmespath
   brew install jp
   </strong></pre>
   
   <pre>🍺  /usr/local/Cellar/jp/1.1.12: 3 files, 3MB</pre>

2. Verify it works by running a sample command:

   For example, jp enables a simple syntax to extract the 1st value from bar within foo:

   <pre><strong>echo '{"foo": {"bar": ["a", "b", "c"]}}' | jp foo.bar[1]</strong></pre>

   The response should be: <tt>"b"</tt>

   WHOOPS: 2021/07/21 09:11:38 line.go:44: no valid y values given

3. See other usage and examples at <a target="_blank" href="https://github.com/jmespath/jp#usage">https://github.com/jmespath/jp#usage</a>

   jp is required by Aliases, below.


   <a name="Aliases"></a>
   
   ### Aliases

   Create folder <tt>~/.aws/cli/alias</tt>:

   <pre><strong>mkdir -p ~/.aws/cli
   pushd ~/.aws/cli
   # From git clone https://github.com/awslabs/awscli-aliases --depth=1 alias
   curl -O https://raw.githubusercontent.com/awslabs/awscli-aliases/master/alias
   popd
   </strong></pre>
   
   Further explained in video https://www.youtube.com/watch?v=Xc1dHtWa9-Q&t=26m35s 



   <a name="ConfigLogin"></a>

   ### Configure for Login

   Regardless of how you get the command:

   ### Configure profiles

   PROTIP: You'll likely need to use several AWS accounts, so specify a profile for
   each account.

7. Run the command to create files in folder ~/aws referenced by all other aws cli commands:

   <tt><strong>aws configure --profile root-admin-work  
   </strong></tt>

   PROTIP: The example "root-admin-work" would be replaced with the user's account name being created. Different accounts may be needed for different permissions in prod vs. dev use. Having separate access keys for different applications also generates distinct entries in AWS CloudTrail log files, which makes it easier to determine which application performed specific actions.

   Without the profile specification, "aws configure" by itself defines default credentials.

   The command prompts you for:

   <pre>AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
   AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
   Default region name [None]: us-west-2
   Default output format [None]: json
   </pre>

   <a target="_blank" href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">PROTIP</a>: If you do not explicitly specify an endpoint, US West (Oregon) `us-west-2` is the default Region.

   The default output format is `json`.

   PROTIP: The aws configure command creates key/value pairs "aws_access_key_id" and "aws_secret_access_key" in file <tt>credentials</tt> for use by all AWS SDKs.
   Key/value pairs "region" and "output" are saved in file <tt>config</tt> used by the CLI.

   TODO: http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-environment

8. The region in ~/.aws/config can be set also by:

   <pre><strong>
   aws configure set profile.prod.region us-west-2
   </strong></pre>   

   Path ~/.aws/config is in variable $AWS_CONFIG_FILE


   Path ~/.aws/credentials is in variable $AWS_SHARED_CREDENTIALS_FILE

   aws configure set region \
      $(curl -s http://162.254.169.254/latest/dynamic/instance-identity/document \
      | jp -u 'region')

   ### Roles for Tasks

   TODO: Temporary security credentials <a target="_blank" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">Roles for Tasks</a>
   stored in ~/.aws/config file:

   <pre>
[profile iam-role]
role_arn = arn:aws:iam::<em>ACCOUNT_ID</em>:role/<em>IAM_ROLE</em>
source_profile = iam-user
output = json
region = eu-west-1
   </pre>

   PROTIP: The ~/.aws/config file also houses settings that speed up S3 sync.

   <pre>
[profile default]
...
s3 =
  max_concurrent_requests = 100
  max_queue_size = 10000
  use_accelerate_endpoint = true
   </pre>


   ### Services list

   Now that you have permissions after configuration:

4. For a list of Amazon services with command access:

   <tt><strong>aws commands help
   </strong></tt>

   PROTIP: Drag the left/right edge of the Terminal to widen the screen.

   <pre>usage: aws [options] &LT;command> &LT;subcommand> [&LT;subcommand> ...] [parameters]
To see help text, you can run:
&nbsp;
  aws help
  aws &LT;command> help
  aws &LT;command> &LT;subcommand> help
&nbsp;
aws: error: argument command: Invalid choice, valid choices are:
&nbsp;
accessanalyzer                           | acm
acm-pca                                  | alexaforbusiness
amp                                      | amplify
amplifybackend                           | apigateway
apigatewaymanagementapi                  | apigatewayv2
appconfig                                | appflow
appintegrations                          | application-autoscaling
application-insights                     | applicationcostprofiler
appmesh                                  | apprunner
appstream                                | appsync
athena                                   | auditmanager
autoscaling                              | autoscaling-plans
backup                                   | batch
braket                                   | budgets
ce                                       | chime
cloud9                                   | clouddirectory
cloudformation                           | cloudfront
cloudhsm                                 | cloudhsmv2
cloudsearch                              | cloudsearchdomain
cloudtrail                               | cloudwatch
codeartifact                             | codebuild
codecommit                               | codeguru-reviewer
codeguruprofiler                         | codepipeline
codestar                                 | codestar-connections
codestar-notifications                   | cognito-identity
cognito-idp                              | cognito-sync
comprehend                               | comprehendmedical
compute-optimizer                        | connect
connect-contact-lens                     | connectparticipant
cur                                      | customer-profiles
databrew                                 | dataexchange
datapipeline                             | datasync
dax                                      | detective
devicefarm                               | devops-guru
directconnect                            | discovery
dlm                                      | dms
docdb                                    | ds
dynamodb                                 | dynamodbstreams
ebs                                      | ec2
ec2-instance-connect                     | ecr
ecr-public                               | ecs
efs                                      | eks
elastic-inference                        | elasticache
elasticbeanstalk                         | elastictranscoder
elb                                      | elbv2
emr                                      | emr-containers
es                                       | events
finspace                                 | finspace-data
firehose                                 | fis
fms                                      | forecast
forecastquery                            | frauddetector
fsx                                      | gamelift
glacier                                  | globalaccelerator
glue                                     | greengrass
greengrassv2                             | groundstation
guardduty                                | health
healthlake                               | honeycode
iam                                      | identitystore
imagebuilder                             | importexport
inspector                                | iot
iot-data                                 | iot-jobs-data
iot1click-devices                        | iot1click-projects
iotanalytics                             | iotdeviceadvisor
iotevents                                | iotevents-data
iotfleethub                              | iotsecuretunneling
iotsitewise                              | iotthingsgraph
iotwireless                              | ivs
kafka                                    | kendra
kinesis                                  | kinesis-video-archived-media
kinesis-video-media                      | kinesis-video-signaling
kinesisanalytics                         | kinesisanalyticsv2
kinesisvideo                             | kms
lakeformation                            | lambda
lex-models                               | lex-runtime
lexv2-models                             | lexv2-runtime
license-manager                          | lightsail
location                                 | logs
lookoutequipment                         | lookoutmetrics
lookoutvision                            | machinelearning
macie                                    | macie2
managedblockchain                        | marketplace-catalog
marketplace-entitlement                  | marketplacecommerceanalytics
mediaconnect                             | mediaconvert
medialive                                | mediapackage
mediapackage-vod                         | mediastore
mediastore-data                          | mediatailor
meteringmarketplace                      | mgh
mgn                                      | migrationhub-config
mobile                                   | mq
mturk                                    | mwaa
neptune                                  | network-firewall
networkmanager                           | nimble
opsworks                                 | opsworkscm
organizations                            | outposts
personalize                              | personalize-events
personalize-runtime                      | pi
pinpoint                                 | pinpoint-email
pinpoint-sms-voice                       | polly
pricing                                  | proton
qldb                                     | qldb-session
quicksight                               | ram
rds                                      | rds-data
redshift                                 | redshift-data
rekognition                              | resource-groups
resourcegroupstaggingapi                 | robomaker
route53                                  | route53domains
route53resolver                          | s3control
s3outposts                               | sagemaker
sagemaker-a2i-runtime                    | sagemaker-edge
sagemaker-featurestore-runtime           | sagemaker-runtime
savingsplans                             | schemas
sdb                                      | secretsmanager
securityhub                              | serverlessrepo
service-quotas                           | servicecatalog
servicecatalog-appregistry               | servicediscovery
ses                                      | sesv2
shield                                   | signer
sms                                      | snowball
sns                                      | sqs
ssm                                      | ssm-contacts
ssm-incidents                            | sso
sso-admin                                | sso-oidc
stepfunctions                            | storagegateway
sts                                      | support
swf                                      | synthetics
textract                                 | timestream-query
timestream-write                         | transcribe
transfer                                 | translate
waf                                      | waf-regional
wafv2                                    | wellarchitected
workdocs                                 | worklink
workmail                                 | workmailmessageflow
workspaces                               | xray
s3api                                    | s3
ddb                                      | configure
deploy                                   | configservice
opsworks-cm                              | history
cli-dev                                  | help
whoami                                   | create-assume-role
running-instances                        | ebs-volumes
amazon-linux-amis                        | list-sgs
sg-rules                                 | tostring
tostring-with-jq                         | authorize-my-ip
get-group-id                             | authorize-my-ip-by-name
public-ports                             | region
find-access-key                          | docker-ecr-login
myip                                     | allow-my-ip
revoke-my-ip                             | allow-my-ip-all
revoke-my-ip-all
   </pre>

   See <a target="http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-using.html">http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-using.html</a>


<hr />

<a name="SecureCredential"></a>

## Encrypt AWS Credentials

Use my shell script to log into AWS by decrypting credentials stored securely (instead of in plain text). 

One reason to encrypt credentials is because it's wise to have a backup copy of the secret file, in an encrypted format, somewhere else. This enables you to retrieve secrets in case you lose your laptop.

This article covers use of AWS (Amazon Web Services) on MacOS. In the future I'll be updating this article to cover use of Windows and other secret-handling utilities (Microsoft Azure, Google Cloud Platform, Hashicorp Vault, Akeyless, etc.).

After obtaining an AWS Access Key ID, AWS Secret Access Key for your account (described above),
use the credentials on your local machine (laptop), install the AWS CLI locally. Although there is a "awscli" Homebrew formula, but it has been deprecated. So follow this doc to manually install a pkg file for awscli2:

## Installing, updating, and uninstalling the AWS CLI version 2 on macOS

AWS CLI versions 1 and 2 use the same aws command name. If you have both versions installed, your computer uses the…docs.aws.amazon.com

The installer automatically creates a symlink in a folder in your PATH which links to the main program in the installation folder you chose:

   <pre><strong>ls -al $(which aws)</strong></pre>

   If you see a response such as this:

   <pre>-rwxr-xr-x  1 wilsonmar  staff  830 Jul 21 09:07 /usr/local/anaconda3/bin/aws</pre>

1. Verify install:

   <pre><strong>aws --version</strong></pre>

   A sample response (at time of writing):

   <pre>aws-cli/1.20.3 Python/3.7.3 Darwin/18.7.0 botocore/1.21.3</pre>

   QUESTION: Why does the pkg say "1.20.3"?

1. Amazon documentation says to run:

   <tt>aws configure</tt>

   That command prompts acceptance or override of default AWS ACCESS KEY ID, AWS SECRET ACCESS KEY, and region saved as a plain-text file at 

   <pre>~/.aws/credentials</pre>

   Sample contents:

   <pre>[default]
aws_access_key_id = ABCDEFGHIJKLMNOPQRST
aws_secret_access_key = 123456786iJsvzQbkIlDiFtBh6DrPzIw8r7hVb35
[py-ec2–1]
aws_access_key_id = ABCDEFGHIJKLMNOPQRST
aws_secret_access_key = 123456782Nwk156aPF0SxZ8KGY+RrhEbq3AIHUSS
   </pre>

   BTW Progress toward AWS providing a more secure approach is at https://github.com/aws/aws-sdk/issues/41

   Meanwhile, to avoid having credentials in clear text, store them in encrypted form:

1. Install GPG locally using my instructions at 

   <a target="_blank" href="https://wilsonmar.github.io/git-signing">https://wilsonmar.github.io/git-signing</a>

1. Generate encrypted file "credentials.gpg" from file "credentials". See:

   https://wilsonmar.github.io/git-signing/#bonus-encrypting-whole-files-using-gpg

1. To be able to retrieve secrets in case you lose your laptop, for backup make a copy of the secret file in encrypted format, somewhere else.

1. Make a backup of GPG keys somewhere else (in a key vault) so you can decrypt. One way is to store your private key in a Yubikey USB chip you plug into your laptop.

1. Using the GPG private key, encrypt the aws/credentials file to a new credentials.gpg file also in the same ~/.aws folder.

1. Delete the file at ~/.aws/credentials

1. Download my shell script:

   <pre>curl "https://raw.githubusercontent.com/wilsonmar/DevSecOps/main/bash/awslogin.sh" -o "awslogin.sh"</pre>

   NOTE: It works similar to https://github.com/99designs/aws-vault, but with no external dependencies (other than GPG). However, aws-vault supports several vaulting backends.

1. Run the script to login based on the encrypted credential.gpg file:

   <pre>source ~/awslogin.sh</pre>

   Alternately, run the script to use the "susan" profile defined:

   <pre>source ~/awslogin.sh -p susan</pre>

   The script unencrypts the gpg file, invokes aws login, then removes the unencrypted file.
   
   BONUS: To parse variables from within an AWS credentials file, consider:
   GitHub - whereisaaron/get-aws-profile-bash: Fetch AWS keys and secrets from ~/.aws/credentials…

   This is a pure bash script that can parse and extract AWS credentials (key id and secret) from a ~/.aws/credentials…github.com

   If you use it, remember to clear out variables after usage, so they don't linger in memory.



## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}
