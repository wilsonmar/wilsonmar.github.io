---
layout: post
date: "2022-11-13"
file: "ports-open"
title: "Ports Open (Networking)"
excerpt: "What ports are open for hacking on my Mac and Linux machine?"
tags: [Mac, Security, Networking]
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

## Port numbers assigned

PAT (Port Address Translation) maps ports.:
   * 0 - 1023 = well-know ports
   * 1024 - 49141 = <strong>Registered ports</strong> (1433 for MS SQL, 1431 for Oracle SQL, etc.)
   * 49152 - 54535 65535 = dynamic ports
   <br /><br />

Port 3389 is used for communicating with Microsoft's RDP (Remote Desktop Protocol) on Windows machines. 

Common TCP Ports in layer 4: REMEMBER
   * 80/443 = HTTP/HTTPS (Secure, encrypted)
   * 80/443/8080/8088 = Web servies admin
   * 20/21/<strong>990</strong> = FTP/FTPS which adds SSL & TLS to encrypt
   * 69 = TFTP/FTPS (Trivial File Transfer Protocol) used by PXE (Preboot Execution Environment) to boot from a server

   * <strong>25/465/587</strong> = Email: SMTP (Simple Mail Transfer Protocol) / TLS <a target="_blank" href="https://www.youtube.com/watch?v=8Ppl62Bl9RE">VIDEO</a>
   * 110/995 = POP (post Office Protocol) clear text auth. / TLS
   * 111 = Port Mapper RPC (Remote Procedure Call) to execute code on another machine
   * 123 = NTP (Network Time Protocol) to sync clocks
 
   * 135, 137, 138?, 139, 445 = NETBios (Network Basic Input/Output System) to share files and printers
   * 143/993 = IMAP (Internet Message Access Protocol) files remain on server / TLS
   * 161/162 = SNMP (Simple Network Management Protocol) to monitor network devices
   * 162 = UDP TRAP

   * 1433, 1434 = SQL Server (Microsoft)
   * 1521 = Oracle SQL

   * 22 = SSH (Secure Shell) used by SFTP
   * 23 = Telnet (not secure)
   * 2049 = NFS (Network File System) to share files between Linux machines

   * 3306 = MySQL
   * 3389 = <a target="_blank" href="https://wilsonmar.github.io/rdp">RDP (Remote Desktop Protocol) from Microsoft</a>
   * 389/636 = LDAP (Lightweight Directory Access Protocol) to query Active Directory
   * 389/646 = LDAP / Secure LDAP
   
   * 445 = SMB (Server Message Block) from Azure Files

   * 500 = IPSec (Internet Protocol Security) to encrypt data
   * 5060/5061 = SIP (Session Initiation Protocol) to set up VoIP (Voice over Internet Protocol) calls
   * 53 = DNS (Domain Name System) lookups
   * 500,1723 = PPTP (Point-to-Point Tunneling Protocol) to tunnel through firewalls
   * 513 = Rlogin (Remote Login) to execute commands on another machine (through Secure Shell)
   * 514 = Remote Shell Syslog (System Logging Protocol) to send event messages to a logging server
   * 5353 = mDNS UDP (Multicast DNS) in <tt>224.0.0.251</tt> & <tt>ff02::fb</tt> for Bonjour, AirPlay, AirPrint, etc.
   * 548 = <a target="_blank" href="https://www.wikiwand.com/en/Apple_Filing_Protocol">AFP (Apple Filing Protocol)</a> elim. for AppleTalk
   * 554 = RTSP (Real Time Streaming Protocol) to stream audio/video
   * 593 = RPC over HTTP (Remote Procedure Call) to execute code on another machine
   * 5900 = VNC (Virtual Network Computing) to remote control another machine

   * 67/68 = DHCP (Dynamic Host Configuration Protocol) to assign IP addresses
   * 636 = LDAPS (Lightweight Directory Access Protocol over TLS/SSL) to query Active Directory
   * 6000 = X11 (X Window System) to remote control another machine
   * 6667 = IRC (Internet Relay Chat) to chat with others
   * 67/68 = DHCP (Dynamic Host Configuration Protocol) to assign IP addresses
   * 69 = TFTP (Trivial File Transfer Protocol) used by PXE (Preboot Execution Environment) to boot from a server

   * 79 = Finger (not secure)

   * No port for ICMP RFC 792 Pings RFC 1122 as it's in IP transport layer

   * 873 = Rsync (Remote Sync) to sync files between machines
   * 88 = Kerberos (Windows)
   
   * 902 = VMware Server
   * 993 = IMAP (Internet Message Access Protocol) files remain on server / TLS
   * 995 = POP (post Office Protocol) clear text auth. / TLS

   * UDP 5355 = LLMNR	(Link-Local Multicast Name Resolution - Microsoft protocol for name resolution) Multicast 224.0.0.252 / FF02:0:0:0:0:0:1:3 or FF02::1:3
   <br /><br />

<a name="Spring"></a>

Spring Boot:
   * 8080, 8081 = Limits Microservice
   * 8888 = Spring Cloud Config server
   * 8000,8001,8002,... = Currency Exhange Microservice
   * 8100,8101,8102,... = Currency Conversion Microservice
   * 8761 = Netflix Eureka Naming Server
   * 8765 = API Gateway
   * 9411 = Zipkin Distributed Tracing Server
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

   PROTIP: If you'll be using this often, create an alias such as `listening`.

   "lsof" is a contraction for "list open files".
   Without any options specifications, lsof lists all open files belonging to all active processes.

   "-nP" is a combination of "n" for no resolution of IPs to hostnames using DNS
   and "P" for no resolution of Port names from numbers.

   This is because the command already takes several seconds to run.

   "+c 15" specifies command width of 15.

   Piping to grep filters out only lines containing "LISTEN".

   A sample response:

   <pre>rapportd          615 wilsonmar    4u     IPv4 0xafaa508... TCP *:53150 (LISTEN)
rapportd          615 wilsonmar    5u     IPv6 0xafaa508... TCP *:53150 (LISTEN)
ControlCenter     697 wilsonmar   14u     IPv4 0xafaa508... TCP *:7000 (LISTEN)
ControlCenter     697 wilsonmar   15u     IPv6 0xafaa508... TCP *:7000 (LISTEN)
ControlCenter     697 wilsonmar   16u     IPv4 0xafaa508... TCP *:5000 (LISTEN)
ControlCenter     697 wilsonmar   17u     IPv6 0xafaa508... TCP *:5000 (LISTEN)
Stream\x20Deck   1332 wilsonmar   13u     IPv4 0xafaa508... TCP 127.0.0.1:28196 (LISTEN)
AMPDevicesAgent  3340 wilsonmar   10u     IPv4 0xafaa508... TCP *:49748 (LISTEN)
com.docker.back 19614 wilsonmar   33u     IPv4 0xafaa508... TCP *:53680 (LISTEN)
com.docker.back 19614 wilsonmar  131u     IPv6 0xafaa508... TCP *:8080 (LISTEN)
com.docker.back 19614 wilsonmar  158u     IPv6 0xafaa508... TCP *:5432 (LISTEN)
com.docker.back 19614 wilsonmar  159u     IPv6 0xafaa508... TCP *:8200 (LISTEN)
com.docker.back 19614 wilsonmar  160u     IPv6 0xafaa508... TCP *:1717 (LISTEN)
vpnkit-bridge   19710 wilsonmar    8u     IPv4 0xafaa508... TCP *:53680 (LISTEN)
grafana-server  23515 wilsonmar   17u     IPv6 0xafaa508... TCP *:3000 (LISTEN)
   </pre>

   <tt>rapportd</tt> is <a target="_blank" href="https://apple.stackexchange.com/questions/308294/what-is-rapportd-and-why-does-it-want-incoming-network-connections">Apple's</a>

   <tt>AMPDevicesAgent</tt> may <a target="_blank" href="<a target="_blank" href="https://macreports.com/ampdevicesagent-what-is-it/">">ask you for a password</a> when you connect using USB the first time. It can <a target="_blank" href="https://www.saintlad.com/high-cpu-usage-by-ampdevicesagent/">cause 100% CPU usage</a>. To avoid this, in iPhone Apple Music, uncheck the "automatically sync over wifi" box. To quit the process, go into Activity Monitor, find 'AMPDevicesAgent', select it and click on the information button, and quit the process.  Then eject the iOS devices on Finder.
   
   <tt>ControlCenter</tt> listens when “AirPlay Receiver” is turned on in System Preferences -> “Sharing”. Control Center stops listening to those ports when that's turned off.

   <tt>vpnkit-bridge</tt> goes away after Docker Desktop is stopped. The process is <a target="_blank" href="https://unifiedguru.com/how-docker-desktop-networking-works-under-the-hood-docker-blog/">used by Docker Desktop under the hood</a>. The process has <a target="_blank" href="https://github.com/docker/for-mac/issues/4277">caused 100% memory usage, and Fixed in Docker 2.3</a>. It's at file /Applications/Docker.app/Contents/MacOS/vpnkit-bridge.

   <tt>grafana</tt> and other background services can be stopped:

   <pre><strong>brew services list
   brew services stop grafana
   </strong></pre>

1. <a target="_blank" href="https://www.joesandbox.com/#windows">https://www.joesandbox.com/#mac</a> creates a report such as <a target="_blank" href="https://www.joesandbox.com/analysis/349885/0/pdf">this</a>.

1. NOTE: All options are shown by this command:

   lsof -h

   See http://www.thegeekstuff.com/2012/08/lsof-command-examples

2. Drag your Terminal window wider to remove word-wrap.

   <pre>COMMAND           PID USER   FD      TYPE DEVICE                   SIZE     NODE     NAME
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


## Protocols

TCP (Transmission Control Protocol) is the most commonly used protocol on the Internet and any TCP/IP network. TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and that packets will be delivered in the same order in which they were sent. Guaranteed communication/delivery is the key difference between TCP and UDP on ort 53.

UDP (Datagram Protocol) is connectionless and does not guarantee reliable communication; it's up to the application that received the message to process any errors and verify correct delivery. UDP is often used with time-sensitive applications, such as audio/video streaming, where dropping some packets is preferable to waiting for delayed data. 


### Processes Tour

   NOTE: Drag the scroll bar to see what is beyond what is displayed.

   <pre>     0t0      TCP 127.0.0.1:27017 (LISTEN)
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

Don't visit http://www.westwind.com/reference/OS-X/background-processes.html

<strong>ftp</strong> (tftp) should not appear.


## NMAP

Scan other machines

0. Install

   <tt><strong>brew install nmap
   </strong></tt>

   (Zenmap is the GUI)

0. There are a lot of options

   <tt><strong>nmap -h
   </strong></tt>

   The format:

   <tt><strong>nmap [scan type] [options] {target specification}
   </strong></tt>

0. There are a lot of options

   <tt><strong>nmap -h
   </strong></tt>

0. Scan for vulnerabilities using nmap scripts.

   <tt><strong>nmap -P0 35.87.188.71
   </strong></tt>

0. Scan for vulnerabilities using vulnerability scanners:

   OpenVAS

0. Scans for versions of applications and operating systems.
   Compare those against known vulnerabilities and exploits.

Devices  on the   Internet with  open  ports are   indexed  by <a target="_blank" href="https://www.Shodan.io/">Shodan.io</a>.

SNR (software defined radios)


## Resources 

Learn basic hardware hacking  with  UbertoothOne   and   HackRF One.

US Government has free training at <a target="_blank" href="https://ics-cert-training.inl.gov/learn">
https://ics-cert-training.inl.gov/learn</a>

https://www.wikiwand.com/en/Lsof

https://danielmiessler.com/study/lsof/#gs.3YHJpiA

https://netadmintools.com/html/lsof.man.html

<a target="_blank" href="https://www.zeek.org/">
Zeek.org</a> (formerly Bro) and/or 
<a target="_blank" href="https://www.snort.org/">snort.org</a>

Network Intrusion detection systems (NIDS)

<a target="_blank" href="https://cybersecurity.att.com/products/ossim">AlienVault Open Source SIEM (OSSIM)</a> 
with Open Threat Exchange (OTX)
Security Information and Event Management (SIEM) software.


## Honeypots

Commercial Honeypot software:
   * Fortinet – FortiDeceptor
   * Attivio - BOTsink
   * Fidelis – Fidelis  Deception
   * TrapX– DeceptionGrid
   * Illusive  – Illusive  Platform
   <br /><br />


## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
