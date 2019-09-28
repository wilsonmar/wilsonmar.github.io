---
layout: post
title: "Security Certs on MacOS"
excerpt: "Keep safe, my friend"
tags: [mac, cloud, powershell, security]
date: "2016-09-17"
file: "code-signing-on-mac"
image:
# fig blue powershell icon-1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15307772/b335270e-1b93-11e6-9552-d3022de2b9ce.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article describes the use of code-signing certificates on Macs.

<amp-youtube data-videoid="vnuW3Woo_Og" layout="responsive" width="480" height="270"></amp-youtube>

For production use by the public, <a href="#GenProdKey">generate a code signing key on the website of a CA</a>
(<a href="#PublicCAs">trusted CA (Certificate Authority)</a>)
recognized in the operating system and application that uses your script/build.

You ship your script/program with the code-signing certificate generated for it.

The certificate is then imported onto the computer of those who which to use your script/program.

If your users need to reference a CA not already known to their internet browser,
they also need to install a certificate to trust the CA in addition to the certificate
the CA generated for you. 
This is the case for "self-signed" certificates and in 
organizations which have employees using a corporatew-owned CA.

Certificates generated for use on Macs may have a different format than those on Windows.
But converters can be used.

Certificates are issued for a period of time, after which need to be renewed.

<hr />

<a name="GenProdKey"></a>

### Generate a signing key on CA website #

0. Select a CA and its reseller.

   <a name="PublicCAs">

   ### Public Trusted CAs #

   <a target="_blank" href="https://cheapsslsecurity.com/sslproducts/codesigningcertificate.html">
   This reseller</a> offers
   <strong>$69.17/year</strong> for a certificate from 
   <a target="_blank" href="https://www.instantssl.com/code-signing/authenticode-code-signing.html">
   Comodo, which sells certs direct via InstantSSL</a> at $179/year.

   Alternately, <a target="_blank" href="http://author.tucows.com/">
   Tucows</a> offers certs at $75/year.
   VeriSign and GoDaddy (StarField) are two of the largest commercial root CAs.
   They charge $250 per year or more for certificates because they
   are the organizations behind Trusted root certificates in 
   <a target="_blank" href="https://support.apple.com/en-us/HT202858">
   Apple's OS X Trust Store</a> and
   <a target="_blank" href="https://msdn.microsoft.com/windows/hardware/drivers/install/cross-certificates-for-kernel-mode-code-signing">
   Microsoft</a>.

   A code-signing certificate is different than "SSL/TLS" certificates used by web browsers.

   PROTIP: Even though a CA is not recognized by browsers, it doesn't matter for
   code signing certificates created for PowerShell scripts,
   ActiveX controls, Java applets, dynamic link libraries, .cab files and .jar files.

   <a target="_blank" href="http://www.cacert.org/">
   CAcert.org</a> offers certificates, but are not recognized.
   So they are equivalent to self-signed certs.

   However, using them is less work than creating self-signed CAs and certs,
   described below.

   A CA in Poland, certum.pl, used to offer free certificates.

   <a target="_blank" href="https://www.startssl.com/Support?v=30">
   CA StartSSL.com</a> operates in Israel.



   Certificates cost money because issuers confirm
   the validity of organizations they sign.
   This includes verifying <strong>physical existence and business presence</strong>.

0. Get a physical address for use on your domain, phone, utility, tax bill, bank, and drivers license.

0. Get a telephone bill under that address.

   If you don't want to use your cell phone,
   a http://www.magicjack.com/ account (at $40/year) will do.

0. Get a <strong>domain name with email</strong> 
   setup under the same address on your driver's license and utility bill.

   Comodo does not allow use of free email accounts such as Gmail, Hotmail, etc.

0. Use Google Chrome to register for a Comodo account using that email address.

   Comodo receives e-mail only from those with a support account.

0. Confirm the email, then return to the website for <strong>Password Login</strong>.

0. Get a bank checking account and printed check with the common physical address.

   You may have to wait to receive your printed checks.

0. Scan into PDF files each proof of your identity.

   You will be asked for a copy of identity papers shortly after you apply,
   so don't pay for a cert until you have all the files you will need to present.

   A property tax bill if you own your home.

   A copy of the applicant's Articles of Incorporation. Information in the Articles should be verified by checking the relevant government corporation database wherever possible. If it is not possible to at least verify the existence of a registered entity of that name in the relevant jurisdiction, then the Articles must be supplemented with additional documentation. Acceptable additional documentation: Business License DUNS details (e.g. Dun & Bradstreet company number).

0. Get a electric or phone utility bill under the address to be associated with the certificate.

0. Download and print Tucow's face-to-face verification form.

0. Find and go to a Notary to confirm your ID and sign that verification form.

   Most banks have a notary and will notarize free for their customers.

0. Pay for the certificate on the website.

   Some CAs require you first create a CSR (Certificate Signing Request) file.

0. Upload PDF files to verify your identity.

0. Wait for a phone call from the CA.

0. Wait for the email with instructions to download the cert from their website.

   You must use the same computer and web browser used to request the certificate.

0. Export the key from the browser

0. Backup the key immediately to alternate media such as CD or DVD disk.

   PROTIP: USB plugs degrade over time quicker than CD or DVD disks.

0. Put the media in a fire-safe locked box.

0. Timestamp your signatures so the CA can "co-sign" your code such that
   even when your certificate has expired, 
   Comodo continues to testify to your program’s legitimacy.

   See http://wiki.cacert.org/TimeStamping



   
If the above is too much of a hassle for you, self-sign your app.


### Create CA root cert on Mac #


### Create self-signed cert on Mac #

Based on https://support.apple.com/kb/PH20131?locale=en_US&viewlocale=en_US

0. Click Apple's search icon at the upper-right corner.

0. Type "Keychain Access" for that GUI.

0. Click "Keychain Access" and choose <strong>Certificate Assistant</strong>, then
   <strong>Create a Certificate</strong>.

   <amp-img layout="responsive" alt="mac-keychain-create-cer-650x231-112kb.jpg" width="650" height="231" src="https://cloud.githubusercontent.com/assets/300046/18612202/c38f2d0a-7d10-11e6-9a83-d51b33019db9.jpg"></amp-img><br /><br />

0. Enter a name for the certificate in the "Create Your Certificate" GUI.

   PROTIP: Include in the Name items separated by dashed: your email, machine name assigned by security, user name, such as "wilsonmar@gmail.com-M345-mac".

0. Highlight the name and copy it to your Clipboard.

0. For Identity Type, leave it "Self Signed Root".

0. For Certificate Type, select "Code Signing".

0. Click Create and Continue for the pop-up.

   NOTE: 2048 bits is the default (the minimum now). The program can generate up to 4096 bits.

   See https://developer.apple.com/library/content/technotes/tn2326/_index.html

0. Click Create a certificate that's good for one year.

0. Click Done.


   ### Export for running elsewhere #

0. Return to the "Keychain Access" GUI.

0. Click to select the certificate you just created.

0. Select menu File, Export Items.

0. Paste in Save As field the certificate name ("wilsonmar@gmail.com-M345-mac").

   <amp-img layout="responsive" alt="mac-cer-self-sign-650x334-93kb" width="650" height="334" src="https://cloud.githubusercontent.com/assets/300046/18612350/ca0fc226-7d14-11e6-85f3-b783fe287128.jpg"></amp-img><br /><br />

0. Instead of ".p12" select "Certificate (.cer)".

0. Click Save.

0. Quit Keychain Access.


   <a name="SignAppOnMac"></a>

   ### Sign a file on Mac #

0. Go to where you saved the cert created following the steps above.


## Resources #

* https://www.sans.org/security-resources/glossary-of-terms/

* <a target="_blank" href="https://www.dougv.com/2008/09/my-experience-getting-a-code-signing-certificate-from-comodo/">
   Doug</a>

* http://www.wilsonmar.com/1certs.htm


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
