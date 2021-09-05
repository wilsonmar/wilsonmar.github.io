---
layout: post
title: "AWS Onboarding"
excerpt: "Tips and tricks to get account. Lock down root accounts. Install and use the AWS CLI, securely"
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
This</a> is a hands-on tutorial to get new users setup to effectively access and use the AWS cloud. Here you do some action and explanations and PROTIP advice is provided. PROTIPs included how to install and use AWS CLI automation, smart phone apps, and 3rd party tools used by the pros.

This is adapted from what is in <a target="_blank" href="https://aws.amazon.com/getting-started/">Amazon's Getting Started tutorials</a>.


## GUI, CLI, API

There are several ways to interact with AWS:

   * If you don't have an account, you first need to use the AWS <a href="#AWSConsole"><strong>GUI</strong> (Graphical User Interface), aka "AWS Management Console"</a>, using an internet browser such as Google Chrome, Apple Safari, etc.

   * <a href="#CLI"><strong>CLI</strong> (Command Line Interface)</a> using the MacOS Terminal or PC Command program for "programmatic access" into the AWS cloud.

   * Write a program that makes calls to AWS's API (Application Programming Interface). This is the mechanism behind the scene  when you use <a href="#MobileApps">mobile apps</a>. <a href="#APIKeys">API keys</a>.

<hr />

<a name="APIKeys"></a>

## API Keys

   API Keys are assigned to developers using the AWS CLI (Command Line Interface) for programmatic (by a program) rather than manual clicking and typing on a keyboard. 

   API keys make use of pairs of public (access) key and private (secret) key which stand in for real users typing in passwords.

## SSH Keys

    SSH keys are used only with AWS CodeCommit to access their repositories.


This document describes <a href="#SecureCredential">steps and scripts to store your AWS credentials securely (below)</a>, not in clear text as described by AWS.

<a name="MobileApps"></a>

## Mobile apps for smart phones

1. On your Android, Get the <strong>AWS Console</strong> installed:

   <a target="_blank" href="http://www.amazon.com/AWS-Mobile-LLC-Console/dp/B00ATSN730">On Google Android mobile phones</a>

2. On your iOS, open the Store app and search to get <a target="_blank" href="https://itunes.apple.com/us/app/aws-console/id580990573?mt=8">AWS Console</a>. It's from "AMZN Mobile LLC" which creates <a target="_blank" href="https://itunes.apple.com/us/developer/amzn-mobile-llc/id297606954?mt=8">all Amazon's apps</a>.

   PROTIP: These app got low review scores because the app only lets people read-only,
   but not change anything. And the 2FA is clunky.

3. In the Store app, search for "<strong>Google Authenticator</strong>" and install it
   for multi-factor authentication to strength security of your Amazon cloud account.

   PROTIP: Many keep the Authenticator running on their smart phone.

TODO: To avoid embedding an access key with the app (even in encrypted storage), use Amazon Cognito to manage user identity by authenticating users using Login with Amazon, Facebook, Google, or any OpenID Connect (OIDC)–compatible identity provider.<a target="_blank" href="https://aws.amazon.com/blogs/mobile/using-the-amazon-cognito-credentials-provider/">*</a>



<a name="AWS_Account"></a>

## AWS accounts

In enterprises, identify the Administrator who dispenses user accounts.

If you're the Global Administrator, see my htts://wilsonmar.github.io/aws-iam

The remainder of this is for users and super users.



## Root account sign-up

   The account which controls billing is called the <strong>root account</strong>, which as unlimited access to AWS resources and unlimited ability to rack up charges. By resources I mean: users, groups, roles, IAM Access Policies, API keys, etc. globally for all regions.

1. Use an internet browser to get on the <strong>AWS marketing page</strong> at 

   <a target="_blank" href="https://aws.amazon.com/">https://aws.amazon.com</a> 

2. Get your credit card number ready.

   PROTIP: CAUTION: Once you give Amazon a credit card number, you cannot remove it. Amazon can continue to charge for it until the card expires in several years.

   <a target="_blank" href="https://www.linkedin.com/pulse/how-use-aws-free-tips-teaching-college-wong-chun-yin-cyrus-%E9%BB%83%E4%BF%8A%E5%BD%A5-/">PROTIP</a>: You need a credit card to open an account. But to limit exposure, some people provide to AWS numbers from a <a target="_blank" href="https://usa.visa.com/pay-with-visa/cards/prepaid-cards.html">pre-paid reloadable Visa</a> gift <a target="_blank" href="https://aws.amazon.com/premiumsupport/knowledge-center/accepted-payment-methods/">(debit) card</a> <a target="_blank" href="https://usa.visa.com/pay-with-visa/find-card/get-prepaid-card">pre-paid online</a> (which has an expiration date and some have a monthly service fee). The <a target="_blank" href="https://www.drawpayvisa.com/">Drawpay card</a> provides a 1% refund on purchases and a mobile app to view balances. Others provide fee-Free cash withdrawal at over 25,000 MoneyPass ATMs.

   <a target="_blank" href="https://app.pluralsight.com/player?course=docker-production-using-amazon-web-services&author=justin-menga&name=docker-production-using-amazon-web-services-m4&clip=5&mode=live">*</a>

3. Click the yellow "Sign-Up" button if you don't already have an account.

4. PROTIP: If you are creating a production account for an organization, create an email address which you <strong>use only for managing AWS</strong> and not for regular email use and certainly not for doing shopping on Amazon. 
   
   The account which controls billing is called the <strong>root account</strong>, which as unlimited access to AWS resources and unlimited ability to rack up charges. By resources I mean: users, groups, roles, IAM Access Policies, API keys, etc. globally for all regions.

   Secure that email address with <strong>multi-factor authentication</strong> with Google or whoever hosts your email server. Also have a way for one person (or maximum two) you trust to be able to access the account in case you are not able to.

3. PROTIP: When providing answers to Security Challenge Questions, do not specify the real answer,
   which someone stole or figured out through social engineering. Instead, <strong>answer with nonsense</strong>

1. Write that secret information down in 1Password or a paper in your fire-proof vault.

1. Write down your <strong>Account Id</strong> number (12 digits).

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


<hr />

   <a name="AccountId"></a>

   <strong>When signing in under IAM, type your Account Id number rather than your root email address.</strong>

   ![aws-singnin-333x362](https://user-images.githubusercontent.com/300046/78318041-0e268f00-7521-11ea-8139-3188bb81f13e.png)

   To identify your Account ID:

5. Click on your name on the upper black menu at the top of the page, then select "My Account".

1. Click your account name at the top black menu for this menu:

   <a target="_blank" href="https://console.aws.amazon.com/billing/home?#/account"><img alt="aws-onboarding-myaccount-184x222-9824.jpg" width="184" src="https://user-images.githubusercontent.com/300046/40592391-ecd60128-61db-11e8-941f-784a35c9d9ff.jpg"></a>

1. Copy the <strong>Account Id</strong> and paste it in the notes associated with where you saed your account email and password (within 1Password).

   PROTIP: This 12 digit number is given out for others to use to sign in using 
   <a href="#SubAccounts">sub-accounts</a>.

1. Scroll down to click "Edit" next to "Alternate Contacts" and put the other person who knows how to get into the account in for the Billing.

1. Scroll down to click Edit to the right of "Configure Security Challenge Questions".
1. Write down your security challenge questions and answers where you wrote your Account Id.

   PROTIP: Treat the answers as another set of passwords because others my discover the real answers via social engineering. Answer with some nonsense that has no basis in reality.


   <a name="AWSConsole"></a>

   ## AWS Services Management Console

1. If you are at the AWS marketing page, click "My Account" for this menu:

   <a target="_blank" href="https://aws.amazon.com/">
   <img alt="aws-onboarding-landing-250x252-18241" width="250" src="https://user-images.githubusercontent.com/300046/40591769-685c5502-61d4-11e8-8fbe-bcbf70d5e515.jpg"></a>
   
2. Get the <strong>AWS Management Console</strong>:

   <a target="_blank" href="
   https://console.aws.amazon.com/console/home">
   https://console.aws.amazon.com/console/home</a>
   
1. PROTIP: Bookmark this URL


   ### All Amazon services

1. Click to view all <strong>Services</strong> at the upper-left black menu band.

1. Scroll to the category "Security, Identify, and Compliance" list of ever-growing services:

   ![aws-iam-svcs-cat-207x318-16992](https://user-images.githubusercontent.com/300046/38159747-1bb95b90-346c-11e8-940a-a0f3de709dfa.jpg)

   * WAF (Web Application Firewall) provides application-level attacks such as SQL injection and cross-site scripting.
   * Shield protects against DDoS (Denial of Service) attacks


   * Click "Artifact" (at the bottom of the list) to read documents associated with security certifications.
   * Cognito provides an API to federate authentication with various social identity providers (Facebook, Twitter, etc.)
   * GuardDuty
   * Inspector
   * Amazon Macie
   * AWS Single Sign-On
   * Certificate Manager manages security certificates
   * Cloud HSM provides 
   * Directory Service
   * Cloud Trail audits usage
   <br /><br />

   PROTIP: What's not listed above is the <a target="_blank" href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html?icmpid=docs_iam_console">AWS Best Practices</a> which this tutorial addresses.

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


   <a name="ComparePlans"></a>

   ### Compare Support Plans

1. Click <a target="_blank" href="https://console.aws.amazon.com/support/plans/home?#/">Amazon's Support Plan page here</a>.

   The Basic account does not enable you to communicate with Amazon people who can answer technical questions.

   The $29/month Developer Plan enables you to open an unlimited number of support cases
   only via email, with a 12-hour response time if "system impaired". Otherwise, the SLA
   is 24 hours.

   The $100/month Business Plan enables you to have 24/7 chat, phone, as well as email access with AWS Support people on an unlimited number of support cases, with a 1-hour response time for "production down" issues, or 4-hour response for "production impaired" issues.

   Amazon also has an Enterprise Plan for $15,000/month to get 15 minute response on "business critical system down" issues. This plan also comes with an assigned TAM (Technical Account Manager).

   These dollar amounts are minimums, not fixed prices.

1. Scroll down to mouse over the "$29" on the Pricing line at the bottom of the table.

   ![aws-onboarding-pricing-179x101-7688](https://user-images.githubusercontent.com/300046/40592743-edf804f8-61df-11e8-82e4-d48308fe1c92.jpg)

   PROTIP: Pricing for Developer support is the Greater of $29 or 3% of monthly AWS usage,
   so you will pay more than $29 if you spend more than $966.67.

1. Scroll back up to click the "Pricing example" link on the right.
1. Notice that if your spend is $2,000, Amazon bills you $60 for support, not $29.

   <img alt="aws-onboarding-price-example-533x307-27004.jpg" width="533" src="https://user-images.githubusercontent.com/300046/40593326-2004f3f2-61e5-11e8-956f-c74bc35a161b.jpg"></a>

1. Click the "Business" and "Enterprise" buttons in the pop-up to see sample volume pricing tiers.

   ### Cases in Support Center

1. To view support cases filed and their status, see:   

   <a target="_blank" href="https://console.aws.amazon.com/support/home">
   https://console.aws.amazon.com/support/home</a>

   Policies for this are:

   * AWSSupportAccess (Allows users to access the AWS Support Center)
   * SupportUser (This policy grants permissions to troubleshoot and resolve issues in an AWS account. This policy also enables the user to contact AWS support to create and manage cases)
   <br /><br />

1. Scroll down to view videos on specific technical issues by Amazon people.

   On the lower-right corner, there are links to
   AWS Documentation, Getting Started Guides, Knowledge Center, Whitepapers, and AWS Forums.


<hr />

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

## Root account lockdown

1. On a browser in the AWS Management Console, select <a target="_blank" href="https://console.aws.amazon.com/iam/home">IAM</a> (for Identity Access Management) for the list <strong>Security Status</strong>

   A new account will have this:

   ![aws-iam-status-334x256-24837](https://user-images.githubusercontent.com/300046/38159769-9adbb7b0-346c-11e8-8cb9-044eba2a18f0.jpg)

   To get back to this later, click "Dashboard" on the IAM menu on the left.

   The FAQ to this is at <a target="_blank" href="https://aws.amazon.com/iam/faqs/">https://aws.amazon.com/iam/faqs</a>

10. Click on "Delete your root access key".

11. Check "Don't show me this message again" and Continue to Security Credentials.


    ### Password

12. PROTIP: Use 1Password to store your passwords so that you can use a "strong" password of so many characters that it will take hackers too much time to crack it. Because you only have to remember one master password, you can are free to change various passwords as often as you want with no fear of forgetting them.

    ### Apply an IAM password policy 

12. Click "Manage Password Policy" so AWS will ensure that "strong" passwords are used (and not easy to guess ones).
    AWS defaults are terrible:

   ![aws-iam-weak-386x336-39852](https://user-images.githubusercontent.com/300046/38160240-8cbdb006-3477-11e8-914c-faea51864405.jpg)

   Over time, as hackers have access to more powerful computers that can guess passwords quicker,
   larger passwords are necessary to make it more difficult to crack.

13. PROTIP: The <strong>largest Minimum password length AWS allows is 128 characters</strong>. But 1Password can generate up to only 64 characters. Practically, 22 characters is a reasonable minimum. Require at least one number (digits) and one non-alphanumeric symbol character.

    ![aws-iam-1password-291x259-19343](https://user-images.githubusercontent.com/300046/38160291-93acae16-3478-11e8-80ac-7d5ae3bbd5c4.jpg)

14. Scroll down to "Security Token Service Regions" and deactivate regions your organization will never use.

    PROTIP: The region is where most of your users are located.
    New services are usually restricted to one region, such as N. Virginia or N. California where AWS does development work.


    ### MFA (Multi-Factor Authentication)

    This has AWS text or call your smartphone (a virtual device) to make sure that it's really you logging in.
 
1. Click <strong>Activate MFA</strong>
1. Click "A virtual MFA device".
1. Click Next Steps.

   <a name="MFAmobile"></a>

   ### Install MFA app

1. On your iPhone or Android mobile app, open the Store app.
1. Search for <strong>Google Authenticator</strong> app (if you don't already have it installed).
1. Click "Get" to install it.

1. Click "Open".

1. In the the Google Authenticator app, click the "+" icon at the top of the screen.
1. Click "Scan barcode".
1. Align the QR code (with the square of dots) within the green box.
1. Wait for the Google Authenticator app to display two codes. Under the codes we want now 
    begins with "root-account-mfa-device@" followed by the 12-digit <a href="#AccountId">Account Id</a>.
1. Type the first code for the account into the AWS Console website "Authentication code 1".

    PROTIP: Do not type the space between numbers so that you enter only 6 digits.

1. Press Tab and type the second code in "Authentication code 2".

    PROTIP: A new code is created every minute.

1. Scroll down to click "Activate virtual MFA" at the bottom of the screen.


   ### MFA in profile

   To specify use of MFA in an assumed role provider profile, see this example of credentials file:

   <pre>
    [profile prod-access]
    role_arn=arn:aws:iam::123456789012:role/ReinventProdAccess
    source_profile=development
   &nbsp;
    [profile prod-full-s3-access]
    role_arn=arn:aws:iam::123456789012:role/FullS3Access
    source_profile=development
    mfa_serial=arn:aws:iam::18490616333:mfa/james
   </pre>

1. Test on Console: <a target="_blank" href="https://www.youtube.com/watch?v=xVyx23bvamI">VIDEO</a>:

    <pre><strong>aws s3 ls --profile prod-full-s3-access</strong></pre>

    The response is a prompt waiting for manual input:

    <pre>Enter MFA code: _</pre>



    ### Create Admin sub-account

1. In the <a target="_blank" href="https://console.aws.amazon.com/iam/home#/home">IAM page</a>
   click "Create individual IAM users". What it says is important:

   "Create IAM users and give them only the permissions they need. Do not use your AWS root account for day-to-day interaction with AWS, because the root account provides unrestricted access to your AWS resources."

2. Click "Manage users".
3. Click "Add User".
4. PROTIP: For the user name field, define a pattern of up to <strong>64 characters</strong>
   with <strong>dashes</strong> (instead of spaces and underlines) to separate words.

   For the Administrator to do work (of assigning): 

   <tt><strong>root-admin-work</strong></tt>

5. Click "Programmatic access".
6. If you would like to use AWS Management Console access, leave the default for
   Autogenerated password because you'll create a new password at next sign-in.
7. Click "Next: Permissions".

   We'll <a href="#Groups">add groups later, below</a>.

8. Click "Attach existing policies directly" because the Admin account it is limited.

9. Rather than granting "<strong>AdministratorAccess</strong>" which gives all access, 
   give policy to what :

   * SystemAdministrator
   * IAMFullAccess covers the others:

      * IAMReadOnlyAccess
      * IAMSelfManageServiceSpecificCriteria
      * IAMUserChangePassword
      * IAMUserSSHKeys
   
10. Click "Next: Review".
11. Click "Create user".


    ### Inform user of credentials

12. To see what is sent if you click "Send email", right-click on the link and "Copy Link", then paste in a text editor to see:

    <pre>subject=Welcome to Amazon Web Services
    body=Hello,  You have been given access to the AWS Management Console for the Amazon Web Services account ID ending in 8630. You can get started by using the sign-in information provided below.%0A%0ASign-in URL: https://103265058630.signin.aws.amazon.com/console%0AUser name: root-admin-work   
    Your initial sign-in password will be provided separately from this email. When you sign in for the first time, you must change your password. 
    Sincerely, Your AWS Account Administrator</pre>

13. PROTIP: Along with the Access Key Id and Secret access key, the default Region and format are also required to perform "aws configure", so add that information in the email.

    PROTIP: Add what AWS Groups and associated Policies the user has been given.

    PROTIP: Also include in the email, for those who
    use AWS CLI, how to install it and 3rd-party tools.
    
    For those who use the AWS Console GUI, explain the mobile apps to install.
    Provide them the URL with the region included, such as:

    <a target="_blank" href="https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2">https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2</a>

    NOTE: Baking different zones into Console URLs makes for more direct connections and removes issues from using a single URL/DNS.

14. Click "Download .csv" to download a "credentials.csv" file to your Downloads folder.
    It contains columns are a couple columns different than the "Add User" GUI:

    <tt>User name, Password, Access key ID, Secret access key, Console login link</tt>

    The "Console login link" is the "Sign-in URL" in the email.


    ### Apply an IAM password policy 

12. Click "Manage Password Policy" so AWS will ensure that "strong" passwords are used (and not easy to guess ones).

   AWS defaults are terrible:
   <img alt="aws-iam-weak-386x336-39852" width="386" src="https://user-images.githubusercontent.com/300046/38160240-8cbdb006-3477-11e8-914c-faea51864405.jpg"></a>

   PROTIP: Over time, as hackers have access to more powerful computers that can guess passwords quicker, larger passwords are necessary to make them more difficult to crack.

13. PROTIP: The largest Minimum password length AWS allows is 128 characters. 1Password can generate up to only 64 characters. Practically, 22 characters is a reasonable minimum. Require at least one number and one non-alphanumeric character.

    ![aws-iam-1password-291x259-19343](https://user-images.githubusercontent.com/300046/38160291-93acae16-3478-11e8-80ac-7d5ae3bbd5c4.jpg)

    PROTIP: Each site may have different rules about what special characters are allowed.
    So generate a smaller string, then manually add special characters. Copy the final string before pasting into the form.

14. Click "Apply password policy".


    ### Deactivate regions not used

    On the same "Account settings" page:

14. Scroll down to "Security Token Service Regions" and deactivate regions your organization are not using.

    PROTIP: Select a Region where most of your target users are located.
    New services are usually restricted to one region, such as N. Virginia or N. California where AWS does development work.


    <a name="SignInAdmin"></a>

    ### Admin Sign In

1. Sign out and sign in again to the AWS Console using the newly created admin sub-account.


   <a name="ProgrammaticAccess"></a>

   ### Programmatic Access

   Instead of doing what other clouds do (an <tt>aws login</tt> command which prompt for a user name and password), aws commands reference a specifically-named file at <tt>$HOME/.aws/credentials</tt> created by command <tt>aws configure</tt>.

   The <tt>aws configure</tt> command creates that file after prompting for access key identifiers (AKIDs) to an AWS account. Press Enter to accept the value previously defined:

   * AWS Access Key ID [****************L5ZQ]:
   * AWS Secret Access Key [****************+1MD]:
   <br /><br />

Stored with credentials are also:

   * Default region name [us-east-1]: 
   * Default output format [json]:
   <br /><br />

To create AKID credentials, AWS asks that account owners to manually use the <a target="_blank" href="https://aws.amazon.com/iam/">IAM GUI</a> to disable programmatic access to their <strong>root</strong> (email) account and protect it with <a target="_blank" href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html">MFA (Multi-factor Authentication)</a>

The AWS Management Console provides a way for account owners (administrators) to manually create <strong>IAM user accounts</strong> for programmatic access.

For programmatic access to resources running inside AWS, the best practice is to use IAM roles which are not associated with a specific user or group. Any trusted entity can <strong>assume the role</strong> to perform a specific business task. A resource can be granted access without hardcoding an access key ID and secret access key into the configuration file. For example, you can grant an Amazon Elastic Compute Cloud (EC2) instance access to an Amazon Simple Storage Service (Amazon S3) bucket by attaching a role with a policy that defines this access to the EC2 instance. IAM dynamically manages the credentials for you with temporary credentials it rotates automatically.

Outside AWS (on a Terminal/Console on your laptop), a dedicated service account should be created for each use case with only the permissions needed to limit the "blast radius" if credentials are compromised. For example, if a monitoring tool and a release management tool both require access to your AWS environment, create two separate service accounts with two separate policies that define the minimum set of permissions for each tool.



CAUTION: The problem with IAM user account secrets is that they are <strong>long-running secrets</strong> stored in the credentials file in <strong>clear-text</strong>. Someone who clicks on a roque link on a phishing email would expose that file for theft. Many who lose control of their AWS credentials see bills from Amazon of thousands of dollars in unauthorized use (mining Bitcoins).

CloudAcademy.com and many enterprises create a centrally-administered
https://aws.amazon.com/code/token-vending-machine-for-identity-registration-sample-java-web-application/
"Vending Machine" application to generate and dispense <strong>temporary</strong> IAM user accounts with access keys. Such credentials are valid for only 12 hours or less. 

But that requires tedious repeated manual effort.
Securing temporary accounts with MFA adds to that toil.

## Automatic key rotation

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
describes automatic rotatation of AKID credentials (with a quick MFA challenge answered on a mobile phone)

<a target="_blank" href="https://user-images.githubusercontent.com/300046/131071038-7becbc2a-3f87-4c07-8247-21b42fb21d85.png"><img alt="aws-AccessKeyAutoRotate-799x830" width="799" height="830" src="https://user-images.githubusercontent.com/300046/131071038-7becbc2a-3f87-4c07-8247-21b42fb21d85.png"></a>

The auto-rotation of AWS IAM User Access Keys diagrammed above is from <a target="_blank" href="https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/automatically-rotate-iam-user-access-keys.html">these guideline from Feb. 2019</a> uses MIT-licensed CloudFormation templates and Python scripts defined in https://github.com/aws-samples/aws-iam-access-key-auto-rotation and described <a target="_blank" href="https://github.com/aws-samples/aws-iam-access-key-auto-rotation/blob/main/AWS%20Security%20Audit%20Findings%20Remediation%20Runbook.docx">step-by-step in this Word-format Document</a>.

Setup S3 buckets in the US East (N. Virginia) Region (us-east-1). It runs every 90 days. At 100 days it disables and at 110 days it deletes the old Access Keys. It sets up a secret inside AWS Secrets Manager to store the new Access Keys, with a resource policy that permits only the AWS IAM User access to them. 

Another automation sets up an Amazon DynamoDB table to house the email addresses of accounts rotated.
These emails are used by a SNS Topic to send alerts when rotation occurs.

Alternately, you can refactor to send a Slack message instead of email (not shown in the diagram).



<a target="_blank" href="https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/">DOCS</a>

<pre>aws sts assume-role --role-arn arn:aws:iam::123456789012:role/role-name \
   --role-session-name "RoleSession1" \
   --profile IAM-user-name > assume-role-output.txt
</pre>

----------------


https://aws.amazon.com/blogs/security/how-to-rotate-access-keys-for-iam-users/

$ aws iam list-access-keys
{
    "AccessKeyMetadata": [
        {
            "AccessKeyId": "AKIAI2YGLLOSZDQ3L5Z1",
            "Status": "Active",
            "CreateDate": "2020-06-12T04:04:22+00:00"
        }
    ]
}

   AWS IAM commands use unique access key identifiers (AKIDs) to refer to individual access keys.

$ aws iam create-access-key --user-name Alice



Identity and Access Management (IAM) roles for Amazon EC2.


https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html
https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys

https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html

1. Grant temporary access keys - aws sts assume-role.


https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-one-user-multiple-passwords.html



Additionally, add conditions to the policy that further restrict access, such as the source IP address range of clients. The example policy below grants the needed permissions (PutObject) on to a specific resource (an S3 bucket named “examplebucket”) while adding further conditions (the client must come from IP range 203.0.113.0/24):

<pre>{
    "Version": "2012-10-17",
    "Id": "S3PolicyRestrictPut",
    "Statement": [
            {
            "Sid": "IPAllow",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:PutObject",
            "Resource": "arn:aws:s3:::examplebucket/*",
            "Condition": {
                "IpAddress": {"aws:SourceIp": "203.0.113.0/24"}
            } 
        } 
    ]
}
</pre>



<hr />

<a name="IAM-CLI"></a>

### IAM CLI #

   AWS Identity and Access Management (IAM) controls access to
   users, groups, roles, and policies.

6. List users:

   <pre><strong>
   aws iam list-users --query Users[*].UserName
   </strong></pre>

8. List groups which the user belongs to :

   <tt><strong>
   aws iam list-groups-for-user \-\-username ???
   </strong></tt>

9. Create a new user named "MyUser":

   <pre>
   aws iam create-user --user-name MyUser
 </pre>

   The response is:

   <pre>
{
    "User": {
        "UserName": "MyUser",
        "Path": "/",
        "CreateDate": "2012-12-20T03:13:02.581Z",
        "UserId": "AKIAIOSFODNN7EXAMPLE",
        "Arn": "arn:aws:iam::123456789012:user/MyUser"
    }
}</pre>

1. Add the user to the group:

   <pre>aws iam add-user-to-group --user-name MyUser --group-name MyIamGroup</pre>

1. To verify that the MyIamGroup group contains the MyUser, use the get-group command:

    <pre>aws iam get-group --group-name MyIamGroup</pre>

    The response:

    <pre>
    {
        "Group": {
            "GroupName": "MyIamGroup",
            "CreateDate": "2012-12-20T03:03:52Z",
            "GroupId": "AKIAI44QH8DHBEXAMPLE",
            "Arn": "arn:aws:iam::123456789012:group/MyIamGroup",
            "Path": "/"
        },
        "Users": [
            {
                "UserName": "MyUser",
                "Path": "/",
                "CreateDate": "2012-12-20T03:13:02Z",
                "UserId": "AKIAIOSFODNN7EXAMPLE",
                "Arn": "arn:aws:iam::123456789012:user/MyUser"
            }
        ],
        "IsTruncated": "false"
    }</pre>



## Linux AMIs #

Types of operating system AMI:

   * Amazon Linux 2014.09.2 (CentOS)
   * Red Hat Enterprise Linux 6.6 (RHEL)
   * SUSE Linux Enterprise Server 12
   * Ubuntu Server 14.04

<hr />

## Advanced User Data #

https://gist.github.com/mikepfeiffer/

   <pre>
   </pre>

* https://aws.amazon.com/powershell  
   AWS Powershell for Windows</a>

   aws Get-AWSCredentials -ListProfiles



## Diagrams #

<a target="_blank" href="https://www.processon.com/">
ProcessOn.com</a>
provides a free on-line tool to draw diagrams such as
<a target="_blank" href="https://www.processon.com/view/56e785b1e4b05387d0391d33">
this</a>

At <a target="_blank" href="https://aws.amazon.com/architecture/icons/">
architecture/icons</a> Amazon provides a sample .PPTX (PowerPoint 2010+) file
(AWS_Simple_Icons_PPT_v16.2.22.zip). Lines used to illustrate the hierarchy:
<amp-img width="238" height="183" alt="aws simple icons-238x183-63"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16263922/ed4eb538-3833-11e6-8a22-b72cb8f12c32.jpg"></amp-img>
PROTIP: Use different colors for lines and text to reduce visual confusion.


You can also download a zip containing .png and .svg files of icons
(AWS_Simple_Icons_EPS-SVG_v16.2.22.zip).


<hr />

## Hashicorp Terraform Enterprise

<a target="_blank" href="https://webinars.securityboulevard.com/controlling-cloud-costs-with-hashicorp-terraform">VIDEO</a>: Hashicorp has a "Sentinal" product component which enforces various fine-grained rules (policy sets) to what can be done by each role. It also estimates monthly cost from cloud usage.

Rules in Hashicorp's <a target="_blank" href="https://www.hashicorp.com/resources/secure-your-cloud-with-terraform-foundational-policy-library/">
Foundational Policy library</a> is at <a target="_blank" href="https://github.com/hashicorp/terraform-foundational-policies-library">https://github.com/hashicorp/terraform-foundational-policies-library</a>. Such "Policies as Code" are crafted based on <a target="_blank" href="https://www.cisecurity.org/cis-benchmarks/">Center for Internet Security (CIS) Benchmarks</a> [<a target="_blank" href="https://www.cisecurity.org/wp-content/uploads/2018/03/CIS-Controls-Measures-and-Metrics-V7.pdf">pdf</a>] (including Compute, Databases, Kubernetes, Storage, Networks) covering Azure and GCP as well as AWS.


<hr />

## Social #

* <a target="_blank" href="https://www.reddit.com/r/aws/">
  Reddit on AWS</a>

* https://console.aws.amazon.com/ec2/home


<a target="_blank" href="https://www.twitch.tv/aws/videos/all">https://www.twitch.tv/aws/videos/all</a> videos include:

   * <a target="_blank" href="https://www.twitch.tv/videos/206753304">IoT at re:Invent 2017 video</a> with Sarah Cooper (General Manager IoT), Kip Larson (Principal Product Manager for IoT Analytics)

* Sign-up to receive the <a target="_blank" href="https://www.amazon.com/AWS-Architecture-Monthly-FREE-Subscription/dp/B077F2P7DH/ref=pd_sim_405_1?_encoding=UTF8&psc=1&refRID=8JWKBP6Z7PVJZG34T3AW">AWS Architecture Monthly (FREE Subscription)</a> on your Kindle account.




<a name="ForumAccount"></a>

## [_] Create Forum Account

1. PROTIP: To ensure anonymity interacting on public forums, the Administrator should create in a public email system (such as gmail.com, hotmail.com, etc.) an email address for use on forums. Don't use a real name in the email address, but a positive adjective with a number to ensure it's unique, such as "concerned123".

   AWS says "Your email will be kept private" but I don't trust that they can't be hacked.

2. Go to the AWS forums at URL:

   <a target="_blank" href="https://forums.aws.amazon.com/forum.jspa?forumID=150">https://forums.aws.amazon.com/forum.jspa?forumID=150</a>

3. Register the new email address along with an AWS Nickname without a proper name, such as, again, "concerned123".

3. Use that email in StackOverflow.com and other public forums.




## Tutorial Rock Stars and their presentations #

Jeff Barr (<a target="_blank" href="https://www.twitter.com/@jeffbarr/">@jeffbarr</a>),
AWS Chief Evangelist
makes announcements of all new stuff at the company's
   <a target="_blank" href="https://aws.amazon.com/blogs/aws/">
  AWS Blog</a> and
  <a target="_blank" href="https://twitter.com/search?q=%23aws&src=typd">
  #AWS Twitter hash-tag</a>

Yan Kurniawan

   * <a target="_blank" href="https://leanpub.com/ansible-for-aws">
   Ansible for AWS book</a> 280 pages for minimum $30 published on 2016-01-15 by Yan Kurniawan living in Sydney, Australia
  #ansible4aws.

* <a target="_blank" href="https://github.com/yankurniawan/ansible-for-aws">
    https://github.com/yankurniawan/ansible-for-aws</a>

J O'connner:

   * http://joconner.com/

Ryan Scott Brown @ryan_sb

   * https://serverlesscode.com/post/new-ssl-tls-cert-manager-acm/

Matt Wood, @mza, Product Strategy @ Amazon Web Services



## AWS Certifications #

* <a target="_blank" href="https://aws.amazon.com/certification/certified-sysops-admin-associate/">
  $150, 80-minute AWS Certified SysOps Administrator - Associate</a>

* <a target="_blank" href="https://aws.amazon.com/certification/certified-solutions-architect-associate/">
  $150, 80-minute AWS Certified Solutions Architect - Associate</a>

* <a target="_blank" href="https://aws.amazon.com/certification/certified-developer-associate/">
  $150, 80-minute AWS Certified Developer - Associate</a>

* <a target="_blank" href="https://aws.amazon.com/certification/certified-solutions-architect-professional/">
  $300, 170 minutes AWS Certified Solutions Architect - Professional</a>

* <a target="_blank" href="https://aws.amazon.com/certification/certified-devops-engineer-professional/">
  $300, 170 minutes AWS Certified DevOps Engineer - Professional</a>

## Practice exams

<a target="_blank" href="https://cloudacademy.com/quiz/33549/?context_resource=lp&context_id=180">CloudAcademy has a 90-minute practice exam</a>. Each retake shows 65 questions from a large pool. 

 Because a minimum score of 35 percent is needed on each exam domain, Pearson Practice tests at OReilly has a "study mode" which allow you to provide answers after every question from across 4 complete exams. You can also filter by <a target="_blank" href="https://learning.oreilly.com/certifications/9780135954843/">AWS Certified Cloud Practioner (CLF-C01)</a> domains (number of questions in bank):

    * 01 - The AWS Cloud Defined (26)
    * 02 - Advantages of the AWS Cloud (10)
    * 03 - Core AWS Services
    * 04 - Cloud Architecture Design Principles
    * 05 - The AWS Shared Responsibility Model
    * 06 - Cloud Security and Compliance
    * 07 - AWS Access Management Capabilities
    * 08 - Resources for Security Support
    * 09 - Methods of Deploying and Operating in AWS
    * 10 - The AWS Global Infrastructure
    * 11 - Resources for Technology Support
    * 12 - Using the Free Tier to Build a Web Server
    * 13 - AWS Pricing Models
    * 14 - Account Structures for Billing and Pricing
    * 15 - Resources for Billing Support
   <br /><br />

<a target="_blank" href="https://learning.oreilly.com/certifications/9780136758501/">For the AWS Certified SysOps Administrator Associate (SOA-C01) test</a>

<a target="_blank" href="https://learning.oreilly.com/certifications/9780136791997/">For the AWS Certified Solutions Architect Associate SAA-C02</a>

<a target="_blank" href="https://learning.oreilly.com/certifications/9780136808800/">For the AWS Certified Security – Specialty SCS-C01</a>

<a target="_blank" href="https://learning.oreilly.com/certifications/9780135954904/">For the AWS Certified Machine Learning-Specialty (ML-S)</a>

<a target="_blank" href="https://learning.oreilly.com/certifications/9780136758921/">For the WS Certified Big Data - Specialty (CCENT)</a>




## Other Practice Tests

* http://www.techexams.net/forums/cloud/131715-passed-cv0-001-a.html

* <a target="_blank" href="https://www.amazon.com/Certified-Cloud-Practitioner-Practice-Questions-ebook/dp/B07BK1VJMX/">Practice exam dumps for AWS Certified Cloud Practitioner 2018</a>
   $5.99 or Kindle Unlimited.



## AWS Training Resources #

* <a target="_blank" href="https://quizlet.com/_2dk9qd/">
   Memorize AWS Acronyms as flash cards and games on Quizlet</a>

* <a target="_blank" href="https://www.cloudacademy.com/">
   CloudAcademy.com</a> provides hands-on lab instances with their tutorials.

* <a target="_blank" href="http://www.lynda.com/AWS-tutorials/Amazon-Web-Services-Essential-Training/">
   Lynda.com AWS tutorials</a>

* http://www.pluralsight.com/courses/aws-certified-sysops-admin-associate

* https://scotch.io/tutorials/deploying-a-mean-app-to-amazon-ec2-part-1

* https://scotch.io/tutorials/deploying-a-mean-app-to-amazon-ec2-part-2

* https://www.aws.training/home?courseid=8&language=en-US&src=web_en_course-developing&view=table

* <a target="_blank" href="https://www.youtube.com/watch?v=y7-fAT3z8Lo">
AWS re:Invent 2016: Become an AWS IAM Policy Ninja in 60 Minutes or Less (SAC303)</a>
   by Jeff W

* <a target="_blank" href="https://peteris.rocks/blog/script-to-launch-amazon-ec2-spot-instances/" title="October 10, 2016">
Script to launch Amazon EC2 Spot instances</a> with a simple Python script

   - create a new key pair if one doesn't exist
   - create a security group if one doesn't exist
   - request a new spot instance
   - wait for the spot request to be fulfilled
   - wait for the instance to boot
   - connect to it via SSH and run a script of your choice



<a name="References"></a>

## References #

After signing up for <a target="_blank" href="https://www.aws.training/">https://www.aws.training</a>, <a target="_blank" href="https://www.aws.training/learningobject/video?id=16484">
Authentication and Authorization with AWS Identity and Access Management</a>
15 minutes

SWF (Simple Workflow Functions) sequences manual work.

AppStream streams desktop apps (like Citrix).

Elastic Transcoder of videos into various sizes and formats (ogg, mp4, etc.)

<a target="_blank" href="https://www.lucidchart.com/documents/view/bd4fb4e7-336e-4c8b-972d-048616da9f96/3">
Orion Papers</a> on Lucidchart

https://scriptcrunch.com/aws-certification-iam-essentials-cheat-sheet/


https://www.youtube.com/watch?v=e2A8K47Fj6s&index=4&list=PLZbbT5o_s2xoWPNdBbqi9eWnMJ5cDrr1M
How to Configure the AWS CLI | Amazon Web Services | AWS</a> Nov 26, 2017
by deeplizard

https://docs.aws.amazon.com/cli/latest/index.html
AWS CLI Command Reference


## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}

   zzz







2. To verify the identity being used in AWS CLI:

   <pre><strong>aws sts get-caller-identity</strong></pre>

   A sample response:

   <pre>
    "Account": "103265058630", 
    "UserId": "AIDAJHXCZNAH2MEXAMPLE",
    "Arn": "arn:aws:iam::103265058630:user/root-admin-work"
   </pre>

   Alternately, use an <a href="#Aliases">alias defined</a>:

   <pre>aws whoami</pre>


   <a name="Groups"></a>

   ### Define groups to assign permissions 

   PROTIP: For a user to do something usually require several AWS resources.
   So several permissions need to be granted to a user.
   To simplify assignments, we define Groups of permissions which we then can assign to each user.

   In other words, An IAM group is a management convenience to manage the same set of permissions for a set of IAM users.

   The AWS CLI command to create a group named "MyIamGroup" is:

   <pre>aws iam create-group --group-name MyIamGroup
   </pre>

   A sample response:

   <pre>{
    "Group": {
        "GroupName": "MyIamGroup",
        "CreateDate": "2012-12-20T03:03:52.834Z",
        "GroupId": "AKIAI44QH8DHBEXAMPLE",
        "Arn": "arn:aws:iam::123456789012:group/MyIamGroup",
        "Path": "/"
    }
}
   </pre>

   The AWS CLI command to create a S3 security group:

   <pre><strong>aws ec2 create-security-group --group-name my-sg --description "My security group"
   </strong></pre>

   A sample response:

   <pre>{
   "GroupId": "sg-903004f8"
   }</pre>

27. Click Manage Groups then Create New Group.
  
    PROTIP: Groups are usually associated with a particular job: admin, sales, HR, front-end developer, back-end developer, etc. 
    
    A user can belong to multiple groups.
    More complex organizations manage differences in permissions for company, division, project, location, job level, etc. So 128 characters may not be enough if large words are used. Thus, abbreviate and use acronyms.

    PROTIP: Put abbreviations and acronyms in a wiki publicly available to avoid duplicate usage.

28. "aws_iot_buttons" is the group name I use as an example.

   PROTIP: Use dashes. Space characters are not allowed.
   On March 1, 2018 AWS removed the ability to use underscores in S3 bucket names.

   The list shown are "AWS Managed".

29. Click on Policy Type to select Job function.

30. PROTIP: Instead of scrolling down the massive list in <strong>Attache Policy</strong> (Alexa, Amazon, AWS, etc.),
    type in the Filter field the first few letters (such as "IoT") and the list gets smaller. Notice the filter you type is applicable to not just characters beginning with what you typed, but also characters inside names as well.

31. Click to select.
32. Click "Create Group".

    Note different policies have different levels of access, with admin having more capabilities than "read only" ones.

33. Names shown on the screen is called a "Policy Summary".
34. Click "JSON" to see the file that AWS reads to assign policies. Here you seen what <strong>Actions</strong> the policy allows.

35. Click "Access Advisor" to see users who have been assigned to use the policy.

    https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-policy.html


<hr />

## Manually Rotate Access keys

    See that "AWS recommends that you rotate your access keys every 90 days"?
    Some find it easier to remember by doing it on the first day of each month.
    Why? There are thousands of big computers around the world literally staying up at night trying different combinations.
   
24. PROTIP: Make an appointment on your Calendar with a recurring schedule.

    PROTIP: Rotation applies to access key of IAM child accounts, not the root account.

    You don't want programmatic access to your root account, so you don't need no stinkin' keys.

25. Click Delete to the key. Write down the date Created.

    Don't create a new Access Key.


    ### Use groups to assign permissions 

    PROTIP: For a user to do something usually require several AWS resources.
    So several permissions need to be granted to a user.
    To simplify assignments, we define Groups of permissions which we then can assign to each user.

    In other words, An IAM group is a management convenience to manage the same set of permissions for a set of IAM users.

27. Click Manage Groups then Create New Group.
  
    PROTIP: Groups are usually associated with a particular job: admin, sales, HR, front-end developer, back-end developer, etc. 
    
    A user can belong to multiple groups.
    More complex organizations manage differences in permissions for company, division, project, location, job level, etc. So 128 characters may not be enough if large words are used. Thus, abbreviate and use acronyms.

    PROTIP: Put abbreviations and acronyms in a wiki publicly available to avoid duplicate usage.

28. "aws_iot_buttons" is the group name I use as an example.

   PROTIP: Use underlines or dashes. Space characters are not allowed.

   The list shown are "AWS Managed".

29. Click on Policy Type to select Job function.

30. PROTIP: Instead of scrolling down the massive list in <strong>Attache Policy</strong> (Alexa, Amazon, AWS, etc.),
    type in the Filter field the first few letters (such as "IoT") and the list gets smaller. Notice the filter you type is applicable to not just characters beginning with what you typed, but also characters inside names as well.

31. Click to select.
32. Click "Create Group".

    Note different policies have different levels of access, with admin having more capabilities than "read only" ones.

33. Names shown on the screen is called a "Policy Summary".
34. Click "JSON" to see the file that AWS reads to assign policies. Here you seen what <strong>Actions</strong> the policy allows.

35. Click "Access Advisor" to see users who have been assigned to use the policy.

    https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-policy.html



    ### Create IAM Users

36. Click Users on the left menu.
36. Click Add User.
36. Specify User Name. For example: user1@myco.com

    PROTIP: Use underscores to separate words in IAM User Names rather than spaces.

36. Check "Programmatic Access".
36. Uncheck "User must create a new password at next sign-in".
36. Click "Next: Permissions".
36. Click "Attach existing policies directly" for the first user.

    PROTIP: The policy attached depends on what the user will be allowed to do.

37. Send to each user the AccountId, UserName using a different mode of communication than the  password.
37. User signs in using the credentials Account Id, the UserName, and password
37. Click "Send email"

    PROTIP: Send credentials to your <strong>alternate email</strong> rather than to a cloud drive (Amazon, Google, Box, etc.); an email account that you setup with a fake birthdate and other personal information; one you never give out to anyone.


<hr />

## Roles for federated access

An analogy is a private ball where royal guests arrive wearing formal attire present an invitation card to enter.
The fancy outfits with sashes and medals are kinda like group permissions that confer permissions to someone.
The invitation card is kinda like IAM roles which are only for specific times.

The host of the party is kinda like AWS's STS (Security Token Service) identify broker
which grants access tokens to enable services to "assume" a role to perform on AWS services.

IAM roles are used by computer programs reaching through Enterprise identity federation into Microsoft Active Directory
using SAML (Security Assertion Markup Language) or through Web identity federation into Google, Facebook, Amazon, etc.

IAM roles issue keys are valid for short durations, making them a more secure way to grant access.

An IAM user needs to be granted two distinct permissions to launch EC2 instances with roles:

   * Permission to launch EC2 instances.
   * Permission to associate an IAM role with EC2 instances.
   <br /><br />

STS returns:

   * A Security Token
   * An Access Key ID
   * A Secret Access Key

### More security

* egress rules on your Security Groups (after all there's no reason ever that your database should be connecting to IP addresses in Russia), 
* vulnerability scanning, 
* Host-Based Intrusion Detection (HIDS) systems


<hr />

<a name="CLI"></a>

## AWS CLI Automation #

In enterprises today, servers are built by scripts and configuration files generated from templates (usually multi-platform Hashicorp Terraform more than AWS CloudFormation templates).

This is so the build process can be debugged 
and changed slightly through the lifecycle from test to prod.

Instead of clicking and typing, server administrators work with
template files in JSON format for Cloud Formation or Terraform to process.

Atlas generates JSON files based on information typed into their web Consoles.

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

   <tt><strong>.exit
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

   <pre><strong>aws configure set profile.prod.region us-west-1
   </strong></pre>   

   Path ~/.aws/config is in variable $AWS_CONFIG_FILE

   Path ~/.aws/credentials is in variable $AWS_SHARED_CREDENTIALS_FILE

   <pre>aws configure set region \
      $(curl -s http://162.254.169.254/latest/dynamic/instance-identity/document \
      | jp -u 'region')
   </pre>

   ### Roles for Tasks

   TODO: Temporary security credentials <a target="_blank" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">Roles for Tasks</a>
   stored in ~/.aws/config file:

   <pre>[profile iam-role]
role_arn = arn:aws:iam::<em>ACCOUNT_ID</em>:role/<em>IAM_ROLE</em>
source_profile = iam-user
output = json
region = eu-west-1
   </pre>

   PROTIP: The ~/.aws/config file also houses settings that speed up S3 sync.

   <pre>[profile default]
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


## References

TODO: Put each AWS CLI command in a script at
https://medium.com/circuitpeople/aws-cli-with-jq-and-bash-9d54e2eabaf1
by Lee Harding


## More on Amazon #

This is one of a series on Amazon:

{% include aws_links.html %}


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}

