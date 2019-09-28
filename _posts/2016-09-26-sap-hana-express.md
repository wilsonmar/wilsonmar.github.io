---
layout: post
title: "SAP HANA Express on Mac"
excerpt: "The biggest server, on your laptop"
tags: [sap, cloud, install, mac]
date: "2016-09-26"
file: "sap-hana-express"
image:
# powershell blue banner-1900x500-296kb.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/18789323/d2ff6614-8167-11e6-94b5-f37637e01d9c.jpg
  credit: Demonoid
  creditlink: https://www.demonoid.pw/files/details/3417198/008056601136/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on tutorial on installing SAP HANA Express 
in a HXE virtual instance running under VMWare Fusion 8 on a Mac.

## Get Download Manager #

PROTIP: Instead of downloading the "Getting_Started_HANAexpress_VM.pdf",
look at the webpage<br />
   https://go.sap.com/developer/tutorials/hxe-ua-installing-vm-image.html

You'll still need the Download Manager, though.

0. Use an internet browser to <br />

   https://go.sap.com/cmp/ft/crm-xu16-dat-hddedft/typ.html

0. 
   http://sap.com/sap-hana-express<br />
   is a vanity URL that reroutes to<br />
   https://go.sap.com/cmp/ft/crm-xu16-dat-hddedft/index.html

0. Click Other to download
   HXEDownloadManager.jar

0. Run it to open the Download Manager GUI.

   ### Server-only #

0. Keep defaults of Image Virtual Machine checked.
0. Uncheck the "Getting Started".
0. Select "Server only" and press OK.

   Selecting "Server + applications" means <strong>development apps</strong>, which include XS Advanced (XSA) and Web IDE.
   These you can download later.

   ### VMWare #

0. In VMWare, select "Open a Virtual Machine".

0. Click Play.

   The pdf downloaded provides these credentials:

   * At the hxehost login prompt, enter hxeadm
   * For Password enter the temporary password HXEHana1
   <br /><br />

0. Follow the Getting Started to change passwords, assign IP, etc.
   
   QUESTION: Is there a shell script that can do all that?

   It will "stop working after the default grace period of 60-90 days."

0. Start SAP HANA studio to get the Hardware Key for registration on <br />
   http://sap.com/minisap

