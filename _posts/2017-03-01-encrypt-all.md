---
layout: post
title: "Encrypt all the things"
excerpt: "How to store and send files securely using XMPP over the hostile internet"
tags: [XMPP, Security]
date: "2017-03-01"
file: "encrypt-all"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

There is now a way to safely store files in encrypted format and 
transmit files privately over "hostile" public internet lines.

That's good news amidst so much bad news about websites being hacked and private credentials stolen.
It is now well-known that public wi-fi enables others to listen in to what you send.

### Insecure transmissions

   The "S" in HTTPS in URLs that people type into internet browsers is supposed to mean "secure", 
   but it's really not so much. Only when the most secure of sites (using "TLS 1.2")
   do experts consider a server to be secure in sending data.

   An alternative to HTTPS is HTTPX, based on the XMPP suite of protocols defining
   how computers talk with each other.
   XMPP means eXtensible Messaging and Presence Protocol.


### Insecure cloud storage

Storing files on iCloud caused Taylor Swift and
other celebrities embarassment. Use of Dropbox, Box, Google Drive, 
and other "third-party" cloud services are suspect because they are a known target for hackers out to collect ransom money.

But people are using cloud storage because it's convenient.
Take a picture on your smart phone and it gets sent to iCloud.
Click the share button and select who you want to see it. Bam.

This is possible because a cloud service such as Facebook 
knows both you and who you want to send your file to.
They authenticate both parties.

But that's also the weakness with cloud storage. 
Passwords can get hacked.
That can happen when a password used on several websites is stolen on one site, then used on other sites.
We've heard of that happening regularly.

An alternative to cloud storage is needed to transfer file securely.

The more secure solution is an approach that encrypts both your file for transmission AND
stores your data "at rest" in an encrypted format. 
AND no middleman holds on to files or the keys to un-encrypt the files.

Google does this except for the last middleman part.

Instead of a "middleman" such as iCloud or other central cloud service,
use a "<strong>peer-to-peer</strong>" approach.


## What is needed

The magic to make it happen uses several new technologies.

1) a third party is used to verify that people are who they say they are.

   Instead of using Facebook, where both ends have an account, 
   each party registers with a "broker"
   (such as <strong>kode.im</strong>) which verifies both our passwords.

   The word broker is used because each side can register with a different broker.

   The various brokers talk to each other.

2) The XMPP and HTTPX (HTTP with XMPP) protocol is used instead of HTTPS. 

   Using a new network protocol is why an additional program is needed.

3) Microsoft Windows and Apple MacOS provides a way to encrypt entire drives and folders,
but do not provide a way to store individual files in encrypted form.

   So Peter Waher wrote a new database program to do that, along with the above.

   His business model is to license his security technology in established programs.

   But he has a program (currently in beta) for consumers to evaluate.


## Let's do it

Here's how to send files to someone securely:

### Get an XMPP account

0. Use an internet browser to register (for free) with registry 
   <a target="_blank" href="https://kode.im/">kode.im</a>.

   The service was originally created for private multi-user chats (MUC).
   Hence the ".im" (internet messaging) in the domain name.

   You can use another broker registry if you wish.

0. Click the blue <strong>Toggle chat</strong> at the lower left corner.

0. Click the blue <strong>Register</strong> tab. Type "kode.im".

   ![xmpp-kode-regis-214x405-21955](https://user-images.githubusercontent.com/300046/31353764-a702ff8c-ace8-11e7-8c8a-5500e2dd82a4.jpg)

   Your user name can be something like "JamesBond007" if that's not already taken, which it is.

0. Type in a strong password, then click Register. 

   PROTIP: [1Password](1password) can generate a random password for you
   based on the strength you choose, 
   then store it securely so you only need to remember just a single master password
   to get to all your passwords.
   This is especially useful since no email is involved.

0. Click the <strong>Sign in</strong> tab.

   NOTE: It's not an email address, specify the user name with the registry name, such as `JamesBond007@kode.im`.

   The above (and installation) only needs to be done once.


   ### Peer-to-peer client

0. Download the Little Sister installer from

   <a href="http://www.littlesister.se/" target="_blank">
   http://www.littlesister.se</a>

   It is currently available only for Windows.

0. Run the installer.

0. Provide the user name you created, as described above.

   That would be Bond. JamesBond007@kode.im.

0. Establish a connection with who you want to send a file to.

   That's someone who has registered with an XMPP broker.

   You and who you want to communicate with can be registered in two different XMPP registries.

0. Send a file.
0. Open the file and enjoy.



## For more popularity

The movement toward XMPP has a ways to go before it is widely used.

But it's powerful.

Security-conscious Internet of Things (IoT) devices are beginning to adopt XMPP.

Additional software is needed to make it as easy to use as
other social sharing sites such as Twitter, Facebook, Instagram, and Snapchat.

For example, on your smartphone, after you click a picture, 
that picture file is encrypted and sent securely to a Raspberry Pi
running all the time at your home.

If someone breaks into your home and take the storage drive, 
they won't be able to view the strongly encrypted files.

Well, that's unless the keys to your file are also stored on the drive.

So we need to store keys for de-cryption separately from the data,
such as emailed to yourself, then deleted from the device.

> Want a home server to hold files securely? Let me know!