---
layout: post
title: "PHP On macOS"
excerpt: "Not Pretty Hypertext Preprocessor?"
tags: [PHP, apple, mac, setup]
date: "2014-08-09"
file: "php-on-apple-mac-osx"
image:
# feature: pic PHP packages 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622126/0e6c5e1e-0585-11e6-9097-960e073a1e21.jpg
  credit: Orangewebmart.com
  creditlink: http://www.orangewebmart.com/wp-content/uploads/2013/06/PHP-Website-Development.jpg
comments: true
---
<i>{{ page.excerpt }}</i>
<p align="right"><a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=es&u=https%3A%2F%2Fwilsonmar.github.io%2Fphp-on-apple-mac-osx%2F"><img alt="Español (Spanish)" width="20" height="14" src="../images/flags/es.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=fr&u=https%3A%2F%2Fwilsonmar.github.io%2Fphp-on-apple-mac-osx%2F"><img alt="Français (French)" width="20" height="14" src="../images/flags/fr.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=de&u=https%3A%2F%2Fwilsonmar.github.io%2Fphp-on-apple-mac-osx%2F"><img alt="Deutsch (German)" width="20" height="14" src="../images/flags/de.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=it&u=https%3A%2F%2Fwilsonmar.github.io%2Fphp-on-apple-mac-osx%2F"><img alt="Italiano" width="20" height="14" src="../images/flags/it.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=pt&u=https%3A%2F%2Fwilsonmar.github.io%2Fphp-on-apple-mac-osx%2F"><img alt="Português" width="20" height="14" src="../images/flags/pt.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ru&u=https%3A%2F%2Fwilsonmar.github.io%2Fphp-on-apple-mac-osx%2F"><img alt="Cyrillic Russian" width="20" height="14" src="../images/flags/ru.png"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https%3A%2F%2Fwilsonmar.github.io%2Fphp-on-apple-mac-osx%2F"><img alt="中文 (简体) Chinese (Simplified)" width="20" height="14" src="../images/flags/cn.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ja&u=https%3A%2F%2Fwilsonmar.github.io%2Fphp-on-apple-mac-osx%2F"><img alt="日本語 Japanese" width="20" height="14" src="../images/flags/jp.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A%2F%2Fwilsonmar.github.io%2Fphp-on-apple-mac-osx%2F"><img alt="한국어 Korean" width="20" height="14" src="../images/flags/ko.gif"></a>
</p>
{% include _toc.html %}

A Pretty Hypertext Preprocessor (PHP) is included by Apple on MacOS.


<a id="PHPz"></a>

## PHP Version and Location

The version of PHP is obtained from this Terminal command:

   <tt>php -v</tt>


   On Sierra, the response is:

<pre>
PHP 5.6.28 (cli) (built: Dec  6 2016 12:38:54) 
Copyright (c) 1997-2016 The PHP Group
Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
</pre>

   On Yosemite, the response is:

<pre>
PHP 5.5.14 (cli) (built: Sep  9 2014 19:09:25)
Copyright (c) 1997-2014 The PHP Group
Zend Engine v2.5.0, Copyright (c) 1998-2014 Zend Technologies
</pre>

For the <strong>location</strong> of the PHP being used by the command line:

   <tt><strong>which php</strong></tt>

On my Yosemite, the response is:

<pre>
/usr/bin/php
</pre>


<a id="PHPActivatez"></a>

## Activate PHP for Apache

To activate PHP using the Pico text editor that comes with Macs:

   <tt>sudo pico /etc/apache2/httpd.conf</tt>

Within pico, press Ctrl+W and type php to search for the php5_module statement.

Press cursor key left to the right of the # comment character,
press the backspace key to delete it.
PHP is activated after you press Ctrl+X and Ctrl+Y to confirm Yes.

Alternately, to activate PHP using the 
<strong>vi text editor</strong> that also comes with Macs:

   <tt>sudo vi /etc/apache2/httpd.conf</tt>

To find php...

Press 'x' over the '#' character to delete it. 

Type ':w!' to save.
Type 'ZZ' (upper case) to quit.

Only for Yosemite, also uncomment line 166:

LoadModule userdir_module libexec/apache2/mod_userdir.so
 
And also line 493:

#Include /private/etc/apache2/extra/httpd-userdir.conf



<a id="PHPIniz"></a>

## Activate php.ini

To activate PHP using the pico text editor that comes with Macs:

<tt>cd /private/etc</tt>

Copy the default file to a .ini file:

<tt>sudo cp php.ini.default php.ini</tt>

 


<a id="ApacheIniz"></a>

## Enable Apache

For Yosemite only, open the file with:

<tt>sudo vi /etc/apache2/extra/httpd-userdir.conf</tt>

Uncomment line 16:

<tt>#Include /private/etc/apache2/users/*.conf</tt>

Save and exit.
 


<a id="ApacheUserz"></a>

## Specify Mac User Name in Apache

Ensure that your user name is listed within:

<tt>ls -la /etc/apache2/users</tt>

In addition to the Guest.conf listed, there should be a 
.conf file with your Mac user name (mine is wilsonmar).

Such file may not be created while upgrading to Mountain Lion.
Contents of this file is different on Yosemite:
<pre>
&LT;Directory "/Users/wilsonmar/Sites/">
AddLanguage en .en
LanguagePriority en fr de
ForceLanguagePriority Fallback
Options Indexes MultiViews
AllowOverride None
Order allow,deny
Allow from localhost
Require all granted
&LT;/Directory></pre>




<a id="PHPFilez"></a>

## Establish Sites folder PHP website default file

By popular convention, the <strong>Sites</strong> folder 
(with a capital S) is used to store
website files. Create one under the default /Applications folder
from the command line:

<tt>mkdir ~/Sites</tt>

Create a HTML file to display by default when no file is specified:

<tt>echo "&LT;html>&LT;body>&LT;h1>My site works&LT;/h1>&LT;/body>&LT;/html>" > ~/Sites/index.html.en</tt>

/Library/WebServer/Documents/index.html.en . This contains the text "It works!" 




<a id="ApacheLaunchz"></a>

## Launch Apache

Older versions of Apache had a UI in
System Preferences > Sharing and enable Web Sharing. 
But on Yosemite:

Within a Terminal:

<tt>sudo launchctl load -w /System/Library/LaunchDaemons/org.apache.httpd.plist</tt>

Check the version of Apache installed:

<tt>httpd -v</tt>

The response on my Yosemite is:

<tt>Server version: Apache/2.4.9 (Unix)

Server built:   Sep  9 2014 14:48:20</tt>

See http://coolestguidesontheplanet.com/get-apache-mysql-php-phpmyadmin-working-osx-10-10-yosemite/
 


<a id="Libmcryptz"></a>

## Libmcrypt PHP

http://coolestguidesontheplanet.com/install-mcrypt-php-mac-osx-10-10-yosemite-development-server/

To add modules to PHP, add libmcrypt-2.5.8 and PHP source code
from http://us.php.net/get/php-5.5.14.tar.gz/from/a/mirror
using these instructions:
http://michaelgracie.com/2011/07/21/plugging-mcrypt-into-php-on-mac-os-x-lion-10-7/


## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
