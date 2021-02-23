---
layout: post
title: "Ports Open (Networking)"
excerpt: "What ports are open for hacking on my Mac and Linux machine?"
tags: [Mac, Security, Networking]
date: "2016-10-26"
file: "ports-open"
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

Here is how to see what ports are open listening on a server.

This is perhaps the most important potential vulnerability.

Having ports listenting to outside traffic also takes CPU effort,
which consumes electricity and thus reduce battery life.

<a name="ports"></a>

## Ports

PAT (Port Address Translation) maps ports.:
   * 0 - 1023 = well-know ports
   * 1024 - 49141 = registered ports (1433 for MS SQL, 1431 for Oracle SQL, etc.)
   * 49152 - 54535 = dynamic ports
   <br /><br />

Port 3389 is used for communicating with Microsoft's RDP (Remote Desktop Protocol) on Windows machines. See <a target="_blank" href="https://wilsonmar.github.io/rdp">My notes on Windows RDP</a>.

Common TCP Ports in layer 4: REMEMBER
   * 80/443 = HTTPS (Secure, encrypted)
   * 21/990 = FTP and FTPS which adds SSL & TLS to encrypt

   * 22 = SSH (Secure Shell) used by SFTP
   * 23: Telnet (not secure)
   * 3389 = RDP (Remote Desktop Protocol) from Microsoft

   * 25/465 = SMTP (Simple Mail Transfer Protocol) / TLS <a target="_blank" href="https://www.youtube.com/watch?v=8Ppl62Bl9RE">VIDEO</a>
   * 110/995 = POP (post Office Protocol) clear text auth. / TLS
   * 143/993 = IMAP (Internet Message Access Protocol) files remain on server / TLS

   * 137, 138, 139 = NETBios
   * 53 = DNS (Domain Name System) lookups
   * No port for ICMP RFC 792 Pings RFC 1122 as it's in IP transport layer

   * 389/646 = LDAP / Secure LDAP
   * 445 = SMB (Server Message Block) from Azure Files
   * 548 = AFP (Apple Filing Protocol) https://www.wikiwand.com/en/Apple_Filing_Protocol elim. for AppleTalk
   <br /><br />

IP header protocol field REMEMBER 
   * 1 = ICMP (Internet Control Message Protocol)
   * 2 = IGMP (Internet Group Management Protocol) to estab. multicaset group transmitted to at once
   * 6 = TCP (Transmission Control Protocol) 
   * 17 = UDP (User Datagram Protocol) used by VOIP
   * 115 = L2TP (Layer 2)
   <br /><br />


<a id="Spotlightz"></a>

## Spotlight on Network Utility to List Ports

Apple's macOS <strong>Spotlight</strong> is like Window's Search omni-box.
<a target="_blank" href="http://osxdaily.com/2014/05/20/port-scanner-mac-network-utility/">
*</a>

0. Press <strong>Command+Spacebar</strong>. 

0. Type the name of utilities that are buried, such as
   <strong>Network Utility</strong>.

0. Click the keyboard return/enter key to launch the Network Utility app.

   ![port-open-network-util-601x331-72k](https://user-images.githubusercontent.com/300046/27322001-702a4ec8-556a-11e7-9f05-0edbd22ef701.png)

0. Select the &quot;Port Scan&quot; tab.

0. Enter the IP (such as 127.0.0.1), localhost, or domain name 
   you wish to scan for open ports.

0. Choose <strong>scan</strong> to see what ports the server responds to.



## List open files = lsof #

0. In a Terminal command line:

   <pre><strong>lsof -nP +c 15 | grep LISTEN
   </strong></pre>

   PROTIP: If you'll be using this often, create an alias such as `of`.

   "lsof" is a contraction for "list open files".
   Without any options specifications, lsof lists all open files belonging to all active processes.

   "-nP" is a combination of "n" for no resolution of IPs to hostnames using DNS
   and "P" for no resolution of Port names from numbers.

   This is because the command already takes several seconds to run.

   "+c 15" specifies command width of 15.

   Piping to grep filters out only lines containing "LISTEN".

   NOTE: All options are shown by this command:

   lsof -h

   See http://www.thegeekstuff.com/2012/08/lsof-command-examples

0. Drag your Terminal window wider to remove word-wrap.

   <pre>
COMMAND           PID USER   FD      TYPE DEVICE                   SIZE     NODE     NAME
mongod            429  mac    6u     IPv4 0xeef754dd0b1f6a1b        0t0      TCP 127.0.0.1:27017 (LISTEN)
2BUA8C4S2C.com.   437  mac   11u     IPv4 0xeef754dd0b1f7c0b        0t0      TCP 127.0.0.1:6258 (LISTEN)
2BUA8C4S2C.com.   437  mac   12u     IPv6 0xeef754dd02830d03        0t0      TCP [::1]:6258 (LISTEN)
2BUA8C4S2C.com.   437  mac   13u     IPv4 0xeef754dd0bcc3313        0t0      TCP 127.0.0.1:6263 (LISTEN)
2BUA8C4S2C.com.   437  mac   14u     IPv6 0xeef754dd028307c3        0t0      TCP [::1]:6263 (LISTEN)
Resilio\x20Sync   563  mac    7u     IPv4 0xeef754dd0d29c313        0t0      TCP *:49387 (LISTEN)
Skype             743  mac   20u     IPv4 0xeef754dd2d469313        0t0      TCP 10.0.0.2:2301 (LISTEN)
SketchMirrorHel  1912  mac    7u     IPv4 0xeef754dd12dda63b        0t0      TCP *:56989 (LISTEN)
SketchMirrorHel  1912  mac    8u     IPv6 0xeef754dd02830283        0t0      TCP *:56989 (LISTEN)
SketchMirrorHel  1912  mac   10u     IPv4 0xeef754dd11ecaf33        0t0      TCP *:56990 (LISTEN)
ruby            13444  mac    7u     IPv4 0xeef754dd18739c0b        0t0      TCP 127.0.0.1:4000 (LISTEN)
nginx           20244  mac    6u     IPv4 0xeef754dd1158563b        0t0      TCP *:8080 (LISTEN)
nginx           20245  mac    6u     IPv4 0xeef754dd1158563b        0t0      TCP *:8080 (LISTEN)
Dropbox         21014  mac  114u     IPv6 0xeef754dd05928d03        0t0      TCP *:17500 (LISTEN)
Dropbox         21014  mac  115u     IPv4 0xeef754dd079ce313        0t0      TCP *:17500 (LISTEN)
Dropbox         21014  mac  157u     IPv4 0xeef754dd20427a1b        0t0      TCP 127.0.0.1:17600 (LISTEN)
Dropbox         21014  mac  163u     IPv4 0xeef754dd0e9f763b        0t0      TCP 127.0.0.1:17603 (LISTEN)
   </pre>


"FD" column lists File Descriptors. "u" is for read and write mode. "r" for read only, "w" for write-only.

Linux requires root on operations for well-known ports below 1024.

Registered Ports: 1024 through 49151.

Dynamic/Private : 49152 through 65535. 

TCP (Transmission Control Protocol) is the most commonly used protocol on the Internet and any TCP/IP network. TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and that packets will be delivered in the same order in which they were sent. Guaranteed communication/delivery is the key difference between TCP and UDP on ort 53.

UDP (Datagram Protocol) is connectionless and does not guarantee reliable communication; it's up to the application that received the message to process any errors and verify correct delivery. UDP is often used with time-sensitive applications, such as audio/video streaming, where dropping some packets is preferable to waiting for delayed data. 


## Processes Tour

   NOTE: Drag the scroll bar to see what is beyond what is displayed.

   <pre>
     0t0      TCP 127.0.0.1:27017 (LISTEN)
   </pre>

<strong>mongod</strong> is MongoDB listening on port 27017.

   I should keep that closed unless I need it.

   https://www.mkyong.com/mongodb/mongodb-allow-remote-access/

In Node, close all connections when the app closes completely:

<pre>
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});
</pre>

<strong>2BUA8C4S2C</strong>

   When I search for "2BUA8C4S2C" I see "2BUA8C4S2C.com.agilebits" in folder /Users/mac/Library/Group Containers

   <a target="_blank" href="https://discussions.agilebits.com/discussion/7647/port-6258-whats-going-on">This</a> says
   This port is used only on the <strong>loopback interface (127.0.0.1)</strong> for the 1Password extension to talk to the 1Password Agent. It should be safe to firewall it from any sources other than 127.0.0.1. If you do a packet capture on lo0 and then filter by tcp.port == 6258 you can see what traffic is being passed. Nothing is transmitted in the clear.

<strong>Skype</strong> I don't mind keeping open. I use it a lot.

<strong>Dropbox</strong> - why does it need to be kept open?
  
   I'll use just their web page when I need it.

   See https://www.dropbox.com/help/41

<strong>Resilio\x20Sync</strong> 
I used once to get a file.

   In Resilio Preferences, uncheck “Start Resilio Sync on startup".

<strong>SketchMirrorHel</strong>

   XMPP ports 56989 and 56990


### For a list of processes on Mac:

http://www.westwind.com/reference/OS-X/background-processes.html

<strong>ftp</strong> (tftp) should not appear.


## Firewall




## NMAP

Scan other machines

0. Install

   <tt><strong>
   brew install nmap
   </strong></tt>

0. There are a lot of options

   <tt><strong>
   nmap -h
   </strong></tt>

   The format:

   <tt><strong>
   nmap [scan type] [options] {target specification}
   </strong></tt>

0. There are a lot of options

   <tt><strong>
   nmap -h
   </strong></tt>


## Resources 

https://www.wikiwand.com/en/Lsof

https://danielmiessler.com/study/lsof/#gs.3YHJpiA

https://netadmintools.com/html/lsof.man.html

https://www.zeek.org
Zeek (formerly Bro) and/or 
https://www.snort.org
Snort
Network Intrusion detection systems (NIDS)

https://cybersecurity.att.com/products/ossim
AlienVault Open Source SIEM (OSSIM) with Open Threat Exchange (OTX)
Security Information and Event Management (SIEM) software

CompTIA CySA+ (CSO-001) exam launched April 21, 2020 on Vue & Pearson online
$359 to answer 75% of 85 questions in 165 minutes

<a target="_blank" href="https://www.infosecinstitute.com/webinar/comptia-cysa-certification-changes-everything-you-need-to-know/?utm_status=success">VIDEO</a>:

1. Threat and vulnerability management:

   1. Explain the importance of threat data and intelligence.
   1. Given a scenario, utilize threat intelligene to support organizatoinal security.
   1. Given a scenario, perform vulnerability management activities.
   1. Given a scenario, analyze the output from common vulnerability assessment tools.
   1. Explain the threats and vulnerabilities associated with operating in the cloud.
   1. Given a scenario, implement controls to mitigate attacks and software vulnerabilities.

2. Software and systems security
   1. Given a scenario, apply security solutions for infastructure management
   2. Explain software assurance best practices
   3. Explain hardware assurance best practices

3. Security operations and monitoring:
   1. Given a scenario, analyze data as part of security monitoring activities.
   2. Given a scenario, implement configuration changes to existing controls to improve security.
   3. Explain the importance of proactive threat hunting.
   4. Compare and contrast automation concepts and technologies.

4. Incident response
   1. Explain the importance of the incident response process.
   1. Given a scenario, apply the appropriate incident response procedure.
   1. Given an incident, analyze potential indicators of compromise.
   1. Given a scenario, utilize basic digital forensics techniques.

1. Compliance and assessment
   1. Understand the importance of data privacy and protection
   2. Given a scenario, apply security concepts in support of organizational risk mitigation
   3. Explain the importance of frameworks, policies, procedures and controls.
   

## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
