---
layout: post
title: "Pen-testing"
excerpt: "My learnings from FreeCodeCamp's Information Security certification and other resources on penetration testing"
tags: [Python, Security, AWS]
date: "2021-01-30"
file: "pen-testing"
image:
# aws-config-rego-1900x500
  feature: https://user-images.githubusercontent.com/300046/141044341-94768793-00e5-4702-a719-293931ff3e6e.png
  credit: AWS
  creditlink: https://aws.amazon.com/blogs/mt/using-opa-to-create-aws-config-rules/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The <a target="_blank" href="https://www.freecodecamp.org/learn/information-security/">Information Security certification at freecodecamp.org/learn/information-security</a> 
is rated at <strong>300 hours</strong> but may be less or more depending on your dedication and experience.

{% include whatever.html %}

This tutorial works with both <a href="#JavaScriptPart">Front-End JavaScript</a> and 
builds <a href="#PythonPart">Python</a> penetration tools, see below.

<a target="_blank" href="https://www.freecodecamp.org/">FreeCodeCamp.org</a> is one of the most popular websites on earth becuase it provides in-depth hands-on tutorials and challenges. Its videos, labeled <a target="_blank" href="https://www.youtube.com/channel/UC0ZTPkdxlAKf-V33tqXwi3Q">"HackerSploit"</a> (from Kenya, Africa) are usually unlisted on YouTube.

PROTIP: It's easiest to login via GitHub, which is one click.
Choosing login using email would require you to switch to your email page every time you want to login.


<a name="JavaScriptPart"></a>

## Front-End JavaScript Part: HelmetJS

This programming course makes use of the <a href="#HelmetJs">HelmetJS</a> module - JavaScript middleware for <strong>Express-based</strong> applications that automatically sets HTTP headers. 
This way it can prevent sensitive information from unintentionally being passed between the server and client.

<hr />

<a name="HelmetJs"></a>

### Information Security with HelmetJS

https://www.freecodecamp.org/learn/information-security/#information-security-with-helmetjs

While HelmetJS does not account for all situations, it does include support for common ones like Content Security Policy, XSS Filtering, and HTTP Strict Transport Security, among others. 

PROTIP: https://github.com/helmetjs/helmet

HelmetJS can be installed on an Express project from npm, after which each layer of protection can be configured to best fit the project.

Working on these challenges will involve you writing your code on Repl.it on our starter project. After completing each challenge, you can copy your public Repl.it URL (to the homepage of your app) into the challenge screen to test it! Optionally, you may choose to write your project on another platform, but it must be publicly visible for our testing.

Start this project on Repl.it online editor/terminal
https://repl.it/github?message=NO_USER&goto=%2Fgithub%2FfreeCodeCamp%2Fboilerplate-infosec
or clone this repository on GitHub: 
https://github.com/freeCodeCamp/boilerplate-infosec/ - A boilerplate (starting point) for changes while doing the freeCodeCamp curriculum.

* Introduction to Information Security with HelmetJS Challenges
* Install and Require HelmetJs in myApp.js file 
   see https://helmetjs.github.io/
   const helmet = require('helmet');
   Your app is listening on port 3000
   Solution Link: https://boilerplate-infosec.wilsonmar.repl.co

* Hide Potentially Dangerous Information Using helmet.hidePoweredBy()

   Hackers can exploit known vulnerabilities in Express/Node if they see that your site is powered by Express. X-Powered-By: Express is sent in every request coming from Express by default. The helmet.hidePoweredBy() middleware will remove the X-Powered-By header. You can also explicitly set the header to something else, to throw people off. e.g. 
   app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))

   PROTIP: Submit again on error: https://github.com/freeCodeCamp/freeCodeCamp/issues/18159

* Mitigate the Risk of Clickjacking with helmet.frameguard()

   Clickjacking is an ingenious technique for hiding an invisible &LT;iframe> containing malicious code, but positioned on top of a thing that looks enticing to click on. The user would then be enticed into clicking on the malicious button. The frameguard module for Helmet will set a header instructing the browser on how to treat an <iframe>. For documentation, see https://helmetjs.github.io/docs/frameguard/.

   Your page could be put in a &LT;frame> or <iframe> without your consent. This can result in clickjacking attacks, among other things. Clickjacking is a technique of tricking a user into interacting with a page different from what the user thinks it is. This can be obtained executing your page in a malicious context, by mean of iframing. In that context a hacker can put a hidden layer over your page. Hidden buttons can be used to run bad scripts. This middleware sets the X-Frame-Options header. It restricts who can put your site in a frame. It has three modes: DENY, SAMEORIGIN, and ALLOW-FROM.

   Use helmet.frameguard() passing with the configuration object {action: 'deny'}.
   
   app.use(helmet.frameguard({ action: 'deny' }));

* Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()

   Cross-site scripting (XSS) is a frequent type of attack where malicious scripts are injected into vulnerable pages, with the purpose of stealing sensitive data like session cookies, or passwords.

   The basic rule to lower the risk of an XSS attack is simple: “Never trust user’s input”. As a developer you should always sanitize all the input coming from the outside. This includes data coming from forms, GET query urls, and even from POST bodies. Sanitizing means that you should find and encode the characters that may be dangerous e.g. &LT;, >.

   Modern browsers can help mitigating the risk by adopting better software strategies. Often these are configurable via http headers.

   The X-XSS-Protection HTTP header is a basic protection. The browser detects a potential injected script using a heuristic filter. If the header is enabled, the browser changes the script code, neutralizing it. It still has limited support.

   app.use(helmet.xssFilter());

* Avoid Inferring the Response MIME Type with helmet.noSniff()

   app.use(helmet.noSniff());

* Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()

   Some web applications will serve untrusted HTML for download. Some versions of Internet Explorer by default open those HTML files in the context of your site. This means that an untrusted HTML page could start doing bad things in the context of your pages. This middleware sets the X-Download-Options header to noopen. This will prevent IE users from executing downloads in the trusted site’s context.

   app.use(helmet.ieNoOpen());

* Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()

   HTTP Strict Transport Security (HSTS) is a web security policy which helps to protect websites against protocol downgrade attacks and cookie hijacking. If your website can be accessed via HTTPS you can ask user’s browsers to avoid using insecure HTTP. By setting the header Strict-Transport-Security, you tell the browsers to use HTTPS for the future requests in a specified amount of time. This will work for the requests coming after the initial request.

   Configure helmet.hsts() to use HTTPS for the next 90 days. Pass the config object {maxAge: timeInSeconds, force: true}. You can create a variable `ninetyDaysInSeconds = 90*24*60*60;` to use for the `timeInSeconds`. Repl.it already has hsts enabled. To override its settings you need to set the field "force" to true in the config object. We will intercept and restore the Repl.it header, after inspecting it for testing.

   Note: Configuring HTTPS on a custom website requires the acquisition of a domain, and a SSL/TSL Certificate.

   app.use(helmet.hsts({maxAge: 7776000, force: true}));

   maxAge should be equal to 7776000 s

* Disable DNS Prefetching with helmet.dnsPrefetchControl()

   To improve performance, most browsers prefetch DNS records for the links in a page. In that way the destination ip is already known when the user clicks on a link. This may lead to over-use of the DNS service (if you own a big website, visited by millions people…), privacy issues (one eavesdropper could infer that you are on a certain page), or page statistics alteration (some links may appear visited even if they are not). If you have high security needs you can disable DNS prefetching, at the cost of a performance penalty.

   Use the helmet.dnsPrefetchControl() method on your server.

   app.use(helmet.dnsPrefetchControl());

* Disable Client-Side Caching with helmet.noCache()

   If you are releasing an update for your website, and you want the users to always download the newer version, you can (try to) disable caching on client’s browser. It can be useful in development too. Caching has performance benefits, which you will lose, so only use this option when there is a real need.

   Use the helmet.noCache() method on your server.

   app.use(helmet.noCache());

* Set a Content Security Policy with helmet.contentSecurityPolicy()

   This challenge highlights one promising new defense that can significantly reduce the risk and impact of many type of attacks in modern browsers. By setting and configuring a Content Security Policy you can prevent the injection of anything unintended into your page. This will protect your app from XSS vulnerabilities, undesired tracking, malicious frames, and much more. CSP works by defining an allowed list of content sources which are trusted. You can configure them for each kind of resource a web page may need (scripts, stylesheets, fonts, frames, media, and so on…). There are multiple directives available, so a website owner can have a granular control. See HTML 5 Rocks, KeyCDN for more details. Unfortunately CSP is unsupported by older browser.

   By default, directives are wide open, so it’s important to set the defaultSrc directive as a fallback. Helmet supports both defaultSrc and default-src naming styles. The fallback applies for most of the unspecified directives.

   In this exercise, use helmet.contentSecurityPolicy(), and configure it setting the defaultSrc directive to ["self"] (the list of allowed sources must be in an array), in order to trust only your website address by default. Set also the scriptSrc directive so that you will allow scripts to be downloaded from your website, and from the domain 'trusted-cdn.com'.

   Hint: in the self keyword, the single quotes are part of the keyword itself, so it needs to be enclosed in double quotes to be working.

   https://www.veracode.com/blog/secure-development/fasten-your-helmetjs-part-2-locking-down-your-content-security-policy
   
   <pre>
   	app.use(helmet.contentSecurityPolicy({
				 directives:{
				   defaultSrc:["'self'"],
				   scriptSrc:["'self'",'trusted-cdn.com']
				}}));
   </pre>

* Configure Helmet Using the ‘parent’ helmet() Middleware

   app.use(helmet()) will automatically include all the middleware introduced above, except noCache(), and contentSecurityPolicy(), but these can be enabled if necessary. You can also disable or configure any other middleware individually, using a configuration object.

   <pre>
app.use(helmet({
  frameguard: {         // configure
    action: 'deny'
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["self"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // disable
}))
   </pre>

   The course introduced each middleware separately for teaching purposes and for ease of testing. 
   
   Using the ‘parent’ helmet() middleware is implemented in a real project.


* Understand BCrypt Hashes

   BCrypt hashes are very secure. A hash is a fingerprint of the original data- always unique. This is accomplished by feeding the original data into an algorithm and returning a fixed length result. To further complicate this process and make it more secure, you can also salt your hash. Salting your hash involves adding random data to the original data before the hashing process which makes it even harder to crack the hash.

   BCrypt hashes will always looks like $2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm which does have a structure. The first small bit of data $2a is defining what kind of hash algorithm was used. The next portion $13 defines the cost. Cost is about how much power it takes to compute the hash. It is on a logarithmic scale of 2^cost and determines how many times the data is put through the hashing algorithm. For example, at a cost of 10 you are able to hash 10 passwords a second on an average computer, however at a cost of 15 it takes 3 seconds per hash... and to take it further, at a cost of 31 it would takes multiple days to complete a hash. A cost of 12 is considered very secure at this time. The last portion of your hash $ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm, looks like one large string of numbers, periods, and letters but it is actually two separate pieces of information. The first 22 characters is the salt in plain text, and the rest is the hashed password!

   To begin using BCrypt, add it as a dependency in your project and require it as 'bcrypt' in your server.

   Add all your code for these lessons in the server.js file between the code we have started you off with. Do not change or delete the code we have added for you.

   https://www.youtube.com/watch?v=hpuBZ0HcFPM

   New repl.it at 
   From freeCodeCamp/boilerplate-bcrypt/ 

   <pre>
'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
let bcrypt = require('bcrypt');
let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)
console.log('\n' + hash + '\n')
   </pre>

   $2b$12$porMB.76JJ/jgiGHF/dMvOG0dMmMu.Aruf5Yiw0wdPTmb9hndMzpG


* Hash and Compare Passwords Asynchronously

   As hashing is designed to be computationally intensive, it is recommended to do so asynchronously on your server as to avoid blocking incoming connections while you hash. All you have to do to hash a password asynchronous is call

   <pre>
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});
   </pre>

   Add this hashing function to your server(we've already defined the variables used in the function for you to use) and log it to the console for you to see! At this point you would normally save the hash to your database.

   Now when you need to figure out if a new input is the same data as the hash you would just use the compare function.

   <pre>
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
   </pre>

   Add this into your existing hash function(since you need to wait for the hash to complete before calling the compare function) after you log the completed hash and log 'res' to the console within the compare. You should see in the console a hash then 'true' is printed! If you change 'myPlaintextPassword' in the compare function to 'someOtherPlaintextPassword' then it should say false.

   <pre>
bcrypt.hash(myPlaintextPassword, 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res); //true
  });
});
   </pre>

   https://www.youtube.com/watch?v=vNfXPf-Ey8U&list=PLhGp6N0DI_1TeEsQOdf1JmV8PnkQfEpQ4&index=14

   https://www.notion.so/Hash-and-Compare-Passwords-Asynchronously-2389ec5d63bb47a5af1f277232ffd4fc


* Hash and Compare Passwords Synchronously

   Hashing synchronously can cause lag if using it server side with a high cost or with hashing done very often. Hashing with this method is done by calling:

   <pre>
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
   </pre>

   Add this method of hashing to your code and then log the result to the console. Again, the variables used are already defined in the server so you won't need to adjust them. You may notice even though you are hashing the same password as in the async function, the result in the console is different- this is due to the salt being randomly generated each time as seen by the first 22 characters in the third string of the hash. Now to compare a password input with the new sync hash, you would use the compareSync method:

   <pre>
var result = bcrypt.compareSync(myPlaintextPassword, hash);
   console.log(result);
   </pre>

   with the result being a boolean true or false.

   Add the function in and log the result to the console to see it working.

   https://www.youtube.com/watch?v=gvjwdwDNmaI&list=PLhGp6N0DI_1TeEsQOdf1JmV8PnkQfEpQ4&index=15

   Sync hash should be generated and correctly compared.

   https://forum.freecodecamp.org/t/hash-and-compare-passwords-synchronously/326288

   https://www.microsoft.com/security/blog/2019/05/30/demystifying-password-hash-sync/

Response "Cannot GET /" is normal.

https://github.com/freeCodeCamp/freeCodeCamp/blob/master/curriculum/challenges/english/09-information-security/information-security-with-helmetjs/hash-and-compare-passwords-synchronously.md


### Stock Price Checker Challenge

<a target="_blank" href="https://www.freecodecamp.org/learn/information-security/information-security-projects/stock-price-checker">Stock Price Checker</a> using JavaScript

### Anonymous Message Board Challenge

<a target="_blank" href="https://www.freecodecamp.org/learn/information-security/information-security-projects/anonymous-message-board">Anonymous Message Board</a> using JavaScript

### Secure Real Time Multiplayer Game Challenge

<a target="_blank" href="https://www.freecodecamp.org/learn/information-security/information-security-projects/secure-real-time-multiplayer-game">Secure Real Time Multiplayer Game</a> using JavaScript and HelmetJS, a type of middleware for Express-based applications that automatically sets HTTP headers. 

<hr />

<a name="PythonPart"></a>

## The Python Part

https://www.freecodecamp.org/learn/information-security/#python-for-penetration-testing

<a target="_blank" href="https://www.freecodecamp.org/learn/information-security/python-for-penetration-testing/introduction-and-setup">Introduction and Setup</a> of VSCode on Kali Linux OS, which uses dpkg (Debian Package Manager) on Windows.

1. <a target="_blank" href="https://wilsonmar.github.io/text-editors/#visual-studio-code">Install VSCode</a>:

1. In VSCode, click the "Manage" icon at the lower-left, search for "Python" from Microsoft, and install it.

   <a target="_blank" href="https://www.freecodecamp.org/learn/information-security/python-for-penetration-testing/understanding-sockets-and-creating-a-tcp-server">Understanding Sockets and Creating a TCP Server</a>

1. The finest detail about Python's Low-level networking interface is at
   
   https://docs.python.org/3/library/socket.html
   
   https://docs.python.org/3/howto/sockets.html

   https://realpython.com/python-sockets/

   AF_INET defines addresses for IPv4, which consists of host and port.
   
   AF_INET6 defines IPv6, which consists of host, port, flowinfo, scope_id.

   AF_BLUETHOOTH is available as well.

   UDP uses sock.DGRAM.
   
   <pre>#!/usr/bin/python3
import socket
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = socket.gethostbyname()  # discussed in next video: 192.168.1.104
port = 444
serversocket.bind((host,port))
serversocket.listen(3)  # how many at one time
while True:
    clientsocket, address = serversocket.accept()
    print("received connection from %r " % str(address) )
    message = 'Thank you for connecting to the server' + "\r\n"
    clientsocket.send(message.encode('ascii'))
    clientsocket.close()
   </pre>

   <a target="_blank" href="https://www.freecodecamp.org/learn/information-security/python-for-penetration-testing/creating-a-tcp-client">Creating a TCP Client</a>:

1. <a target="_blank" href="https://www.youtube.com/watch?v=ugYfJNTawks&t=1m36s">Check IP address</a>:

   <pre><strong>ipconfig</strong></pre>

1. String wrapper

   <pre>#!/usr/bin/python3
import socket
clientsocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = socket.gethostbyname()
port = 444
clientsocket.connect(('192.168.1.104',port))  # get from ipconfig
message = clientsocket.recv(1024)  # set the maximum amount of data client accepts at a time
clientsocket.close()
print(message.decode('ascii'))
   </pre>

1. Run Python File in Terminal, saved as "TCPClient.py"

1. Change data in message.

   <a target="_blank" href="https://www.freecodecamp.org/learn/information-security/python-for-penetration-testing/developing-an-nmap-scanner-part-1">Developing an Nmap Scanner part 1</a> SYN?

1. <a target="_blank" href="https://www.youtube.com/watch?v=jYk9XaGoAnk&t=6s">VIDEO</a>:

   <tt>pip3 install python-nmap</tt>

1. Create scanner.py

   <pre>#!/usr/bin/python3
import nmap
scanner = nmap.PortScanner()
print("Welcome, this is a simple nmap automation tool")
print("<------------------>)
ip_addr = input("Please enter the IP address you want to scan: ")
print("The ip you entered is ", ip_addr)
type(id_addr)
&nbsp;
resp = input("""\nPlease enter the type of scan you want to run 
                1) SYN ACK scan
                2) UDP scan
                3) Comprehesive scan""")
print("You have selected option: ", resp)
   </pre>

1. On MacOS: <tt>brew install nmap</tt>

   <a target="_blank" href="https://www.freecodecamp.org/learn/information-security/python-for-penetration-testing/developing-an-nmap-scanner-part-2">Developing an Nmap Scanner part 2</a>

1. Consider:

   <a target="_blank" href="https://www.freecodecamp.org/learn/information-security/python-for-penetration-testing/developing-a-banner-grabber">Developing a Banner Grabber</a>


   ### Port Scanner Challenge vs. nmap

1. Use utility <strong>nmap</strong> (Network Mapper). See https://nmap.org/book/man.html

   <pre><strong>brew install nmap</strong></pre>
   
   <pre><strong>nmap -A -T4 scanme.nmap.org</strong></pre>

   Notice the hostname (target) comes after flags:

   <tt>-A</tt> enables OS and version detection, script scanning, and traceroute
   
   <tt>-T4</tt> for faster execution
   
   The response:

   <pre>Starting Nmap 7.92 ( https://nmap.org ) at 2022-03-07 02:19 MST
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.083s latency).
Not shown: 994 closed tcp ports (conn-refused)
PORT      STATE    SERVICE     VERSION
22/tcp    open     ssh         OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   1024 ac:00:a0:1a:82:ff:cc:55:99:dc:67:2b:34:97:6b:75 (DSA)
|   2048 20:3d:2d:44:62:2a:b0:5a:9d:b5:b3:05:14:c2:a6:b2 (RSA)
|   256 96:02:bb:5e:57:54:1c:4e:45:2f:56:4c:4a:24:b2:57 (ECDSA)
|_  256 33:fa:91:0f:e0:e1:7b:1f:6d:05:a2:b0:f1:54:41:56 (ED25519)
80/tcp    open     http        Apache httpd 2.4.7 ((Ubuntu))
|_http-title: Go ahead and ScanMe!
|_http-favicon: Nmap Project
|_http-server-header: Apache/2.4.7 (Ubuntu)
135/tcp   filtered msrpc
139/tcp   filtered netbios-ssn
9929/tcp  open     nping-echo  Nping echo
31337/tcp open     tcpwrapped
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
&nbsp;
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 16.02 seconds
   </pre>


   First, a tutorial:
   <a target="_blank" href="https://www.freecodecamp.org/learn/information-security/python-for-penetration-testing/developing-a-banner-grabber">Developing a Port Scanner</a>

1. The challenge:

   <a target="_blank" href="https://www.freecodecamp.org/learn/information-security/information-security-projects/port-scanner">Port Scanner</a> using Python


### SHA-1 Password Cracker Challenge

<a target="_blank" href="https://www.freecodecamp.org/learn/information-security/information-security-projects/sha-1-password-cracker">SHA-1 Password Cracker</a> using Python

<hr />

## Python for Pentesters

<a target="_blank" href="https://codered.eccouncil.org/courseVideo/black-hat-python-for-pentesters">EC-Council's Black Hat Python: Python For Pentesters</a> video course by Cody Jackson includes

   * Chapter 2: Working with Python Network Recon Framework - Port Scanning, Banner Grabbing, Importing and Using Nmap
   * Chapter 6: Python Forensics Use Python Scripts for Network Investigation - Parsing Windows Registry
   * Chapter 3: The Python Spy Web Recon - Web Page Scraping, Phishing Going from Recon to Creds
   * Chapter 4: The Password Cracker Working with Brute-Force Tools - Pre-Computed Wordlists, Rainbow Tables, Linux Hashes, Zip Files
   * Chapter 5: Evade Antivirus with Python - Python Ctypes
   * Chapter 7: Databases - Using SQLAlchemy to Work with SQL Databases and Investigating Firefox Profile Databases

