---
layout: post
title: "Code Signing on Windows"
excerpt: "I am who I say I am because my CA says so"
tags: [mac, cloud, powershell, microsoft]
date: "2016-09-19"
file: "code-signing-on-windows"
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

This article describes the use of self-signed code signing certificates on 
Microsoft Windows operating systems.

See https://www.microsoft.com/security/blog/2017/10/23/hardening-the-system-and-maintaining-integrity-with-windows-defender-system-guard/

## Kleopatra UI #

See https://www.deepdotweb.com/2015/02/21/pgp-tutorial-for-windows-kleopatra-gpg4win/



### Create self-signed cert on Windows #

Based on http://www.hanselman.com/blog/SigningPowerShellScripts.aspx

0. On Windows machines, 
   in directory "C:\Program Files\Microsoft Visual Studio 8\SDK\v2.0\Bin\"
   invoke the <strong>makecert.exe</strong> GUI.

0. Setup a Certificate Authority (CA):

   <pre><strong>
   makecert -n "CN=PowerShell Local Certificate Root" -a sha1 -eku 1.3.6.1.5.5.7.3.3 -r -sv root.pvk root.cer -ss Root -sr localMachine
   </strong>

0. Type in a Password twice for the Subject Key.

0. Type it in again.

   See the cert under "Trusted root CA".

0. Generates a personal certificate from the above certificate authority:

   <pre><strong>
   makecert -pe -n "CN=PowerShell User" -ss MY -a sha1 -eku 1.3.6.1.5.5.7.3.3 -iv root.pvk -ic root.cer   
   </strong></pre>

0. Type in a password for the Issuer Signature.   

   See the cert under Personal.

0. Invoke <strong>mmc.exe</strong>,
   and add the Certificates snap-in for "My user account"
   to view certificates.

0. Verify the certificate is known within PowerShell:

   <pre><strong>
   Get-ChildItem cert:\CurrentUser\My -codesign   
   </strong></pre>

0. Delete in your working directory temporary files root.pvk and root.cer.  

   The certificate info is stored with that of others, in 
   "C:\Documents and Settings\[username]\Application Data\Microsoft\SystemCertificates\My\".   

0. Sign a script, replacing "c:\foo.ps1" with the full path to your script:

   <tt><strong>
   Set-AuthenticodeSignature c:\foo.ps1 @(Get-ChildItem cert:\CurrentUser\My -codesign)[0]
   </strong></tt>

0. Use a text editor to view the script, which now has a signature block
   that begins with:

   <pre>
   # SIG # Begin signature block"
   </pre>


### Export for running elsewhere #

PROTIP: When sending a script, also send along its Powershell certificates in the 
   <strong>Trusted Root Certification Authorities</strong> container.  
   Also send the Trusted Publishers file to prevent the first-time prompt from appearing.

0. Right-click and select <strong>Export</strong> for the Certificate Export Wizard GUI.

0. Leave "DER encoded binary X.509 (.CER)" selected and click Next.

0. Specify the file name after a full path and click Next.

   PROTIP: It helps if everyone in an organization makes use of a company-standard folder.

0. Click Finish.

0. Click OK to the "The export was successful" pop-up.



   ## Verify a signed script can be used #

0. Set

   <tt><strong>
   Set-ExecutionPolicy AllSigned
   </strong></tt>


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
