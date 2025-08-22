---
layout: post
date: "2025-08-22"
lastchange: "v036 + new flowchart :2023-02-04-dns-ip-firewalls.md"
url: "https://wilsonmar.github.io/dns-ip-firewalls"
file: "dns-ip-firewalls"
title: "DNS IP Firewalls"
excerpt: "Understand how DNS works, then filter out malware and annoying ads on your network by installing and configuring a PiHole Raspberry Pi server."
tags: [security, networking]
image:
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1755319484/dnsfilters-1918x574_vun3ax.png
  credit: Wilson Mar
  creditlink: https://res.cloudinary.com/dcajqrroq/image/upload/v1755319484/dnsfilters-1918x574_vun3ax.png
comments: true
created: "2023-02-04"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

1. When on an <strong>internet browser</strong> app, we type a 
1. <strong>domain name</strong>, such as <strong>mit.edu</strong>.
1. Behind the scenes, apps look up a kind of "phone number" the internet uses to find the web page the
1. <strong>IP addresses</strong> for the domain name.

1. To take a deeper look, let's use a Linux CLI (Command Line Interface) <strong>Terminal</strong> to use the <a href="#nslookup">nslookup</a> or <a href="#dig">dig</a> command to a
1. <a href="#PublicDNS">public DNS service</a> to look up where the domain's
1. <strong>web servers</strong> were created with
1. assigned <strong>IP addresses</strong>.
1. Such associations are registered by the domain owners within the <strong>Domain Name System registrars</strong> (such as GoDaddy).

   BTW, there are two types of IP addresses registered today.

1. DNS was created in 1987 with "<strong>-type A</strong>" records defining IPv4 addresses of 32-bits common to electronics at the time.
1. In 1995, processsing of AAAA type <a href="#IPv6">IPv6</a> was added to handle addresses up to 128-bit (16 byte) binary addresses.
1. On the internet browser or other apps, IPv4 addresses are routed using the ARP (Address Request Protocol).

1. DNS Registrars <strong>propagate</strong> these DNS records into
1. <strong>Authoritative Name Servers</strong> around the world answering DNS queries.
1. Because almost every request through the interet involves DNS, DNS servers are arranged in a hierarchy to accomodate the load. Access goes through a <strong>Recursive DNS</strong> workflow that 
1. begins by reaching the server handling the <strong>TLD (Top-level Domain)</strong> at the end of each domain name, such as ".com", ".edu", etc.
1. Each TLD DNS server has an index to Authoritative names for its TLD.

1. On an <strong>internet browser</strong> (such as Google Chrome or Firefox) or other app,
1. Requests for retrieving website content through your local <strong>router</strong> and
1. the <strong>public internet</strong> (Data Link layer) using
1. <strong>IPv4 address</strong> are routed using the <a target="_blank" href="https://en.wikipedia.org/wiki/Address_Resolution_Protocol">ARP (Address Resolution Protocol)</a>.
1. <strong>IPv6</strong> requests are routed using the <a target="_blank" href="https://en.wikipedia.org/wiki/Neighbor_Discovery_Protocol">NDP (Neighbor Discovery Protocol)</a>.

   Because most enterprises use just a couple of DNS servers, they can be vulerable to <strong>volumetric attacks</strong> where large amounts of malicious traffic can prevent users from finding the website. 

1. Most consumers are asked to configure their machine's <strong>default local DNS reslover</strong> to 
1. use the public DNS server provided or controlled by their Internet Service Provider (ISP) (such as ATT, TMobile, Verizon, etc.).
1. That enables them to make money from <strong>selling logs</strong> of your traffic details for profit.

1. So I configure my System Settings to use the DNS server at <strong>9.9.9.9</strong>. 
1. That's <strong>Quad9</strong>, created and run by the UK's Scotland Yard, who
1. put <strong>malicious</strong> websites they know about on their own 
1. <strong>blocklists</strong> of sites they don't serve to their users. So by configuring Quad9 as your local DNS, you get some protection from a few criminal websites.
1. But many want to block the millions of malicious or serve annoying ads listed in <strong>public blocklists</strong> collected by others.
1. You can also maintain your own <strong>private blocklist</strong> for parental control.

   Here is how you do that.

1. An add-in such as <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/">ublock</a> (by Raymond Hill) can be installed on Firefox browsers to block ads based on its own private blocklist. But each browser and app has its own add-in.
1. But we need protection on all apps. looking up all <strong>host name</strong> lookups.

1. We need to get away from the typical <strong>default configuration</strong> of a <strong>local DNS server</strong> using sketchy public DNS services.

1. To enable your machine to filter based on blocklists, your router and System Settings needs to be changed from depending on the local <strong>DHCP</strong> service to specify  
1. the <strong>static</strong> IP address to the local redundant
1. <strong>PiHole hardware</strong> you build and install on your network to <strong>filter</strong> traffic.

1. Blacklists need <strong>update</strong> over time. 
1. That can be automatically done using the <strong>"gravity"</strong> utility.
1. You can also override specific domains by editing your <strong>custom allowlist</strong>.

1. Instead of using sketchy public DNS services to do the TLD and Authorative lookups,
1. unfiltered traffic is passed to a <strong>local Recursive DNS service called "unbound"</strong> 
1. This customization enables you to use <strong>DNSSEC</strong> protocols to encrypt traffic to make them more difficult to hack.

1. The unbound service needs to be invoked automatically upon <strong>reboot</strong>, and be controlled by a
1. <strong>automation CLI script</strong> that installs Python and other services such as <strong>DoH</strong> (DNS over HTTPS) protocol for better privacy by encrypting communications.

1. To use your custom private blocklists <strong>while traveling</strong>, install a
1. <strong>self-hosted VPN</strong>.

<hr />

<a name="nslookup"></a>

## nslookup & dig


https://www.nslookup.io/dns-course/#pricing

1.  To lookup IPv4 addresses on Linux and macOS:
   
    <pre><strong>nslookup netflix.com</strong></pre>

    The first lines of the response lists the DNS service used.
    ```
    Server:		9.9.9.9
    Address:	9.9.9.9#53
 
    Non-authoritative answer:
    Name:	netflix.com
    Address: 44.242.60.85
    Name:	netflix.com
    Address: 44.234.232.238
    Name:	netflix.com
    Address: 44.237.234.25
    ```
    Multiple DNS records is typical for redundancy.

    ### Insecure by design

    <tt>#53</tt> refers to the default use of port 53 designated for DNS use.
    That was back in 1987 when the internet was not as a hostile place.
    Now, nations purposely <strong>flood DNS servers</strong> to bring down a whole country.

    Being <strong>unencrypted</strong> means that anyone close by can read all websites you visit. This is not just a privacy problem because that enables DNS to be hijacked to send you to a malicioius website instead.

    <a name="DoT"></a>

    ### DoT (DNS over TLS)

    Port <tt>#853</tt> would appear when "DNS over TLS" (DoT) is used. The technique was defined in <a target="_blank" href="https://tools.ietf.org/html/rfc7858">2016 as RFC 7858</a> but not widely adopted because most corporate firewalls block ports they don't normally use. And it takes work to add it to allowlists.
    
    If the secure option (DoT) is less likely to be available than its insecure option, then users and applications might be tempted to try to fall back to unencrypted DNS. This subsequently could allow attackers to force users to an insecure version.

    NOTE: When the original specifications for DNS was defined in 1987 (as <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc1034">RFC 1034</a> and <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc1035">1035</a>), <strong>32-bit addresses</strong> were popular for electronics available at the time.

    ### DoH (DNS over HTTPS)

    In 2018, <a target="_blank" href="https://tools.ietf.org/html/rfc8484">RFC 8484</a> defined the DoH (DNS queries over HTTPS) protocol going through<br />
    port <tt>443</tt>. Like other HTTPS traffic which encrypt traffic using cryptographic certificates, no other party can impersonate the server (the resolver). With DNS over TLS (DoT), the original DNS message is directly embedded into the secure TLS channel. From the outside, one can neither learn the name that was being queried nor modify it. The intended client application will be able to decrypt TLS, it looks like this:

Another approach, DNS Queries over HTTPS (DoH), was designed to support two primary use cases:

Prevent the above problem where on-path devices interfere with DNS. This includes the port blocking problem above.

Enable web applications to access DNS through existing browser APIs.DoH is essentially HTTPS, the same encrypted standard the web uses, and reuses the same port number (tcp/443). Web browsers have already deprecated non-secure HTTP in favor of HTTPS. That makes HTTPS a great choice for securely transporting DNS messages. An example of such a DoH request can be found here.

<a name="IPv6"></a>

1. To lookup IPv6 addresses: See See https://www.nslookup.io/learning/dns-record-types/aaaa/
   
   <pre><strong>nslookup -type=AAAA mit.edu</strong></pre>

   "AAAA" type refers to the DNS Zone record type introduced in 1995 by <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc1886">RFC 1886</a> when IPv6 was created for 128-bit (16 byte) binary addresses (as <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc1886">RFC 3596</a>). RFC 3596 is the current specification for AAAA records containing a colon separating up to eight groups of four hexadecimal digits:
   ```
   mit.edu	has AAAA address 2600:1409:9800:1a83::255e
   mit.edu	has AAAA address 2600:1409:9800:1a8b::255e
   ```
   Any number of consecutive groups of zeros are replaced with two colons.
   
1. On Windows OS, The PowerShell equivalent on Windows provides more output and options: <a target="_blank" href="https://www.pdq.com/blog/what-is-the-powershell-equivalent-of-nslookup/">DOCS</a>

   <pre><strong>Resolve-DnsName mit.edu</strong></pre>

   <a name="dig"></a>

1. The dig command can be installed on many operating systems.

   <pre><strong>dig mit.edu</strong></pre>

   It provides the most detailed information:
   ```
    ; <<>> DiG 9.10.6 <<>> mit.edu
    ;; global options: +cmd
    ;; Got answer:
    ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 6892
    ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

    ;; OPT PSEUDOSECTION:
    ; EDNS: version: 0, flags:; udp: 512
    ;; QUESTION SECTION:
    ;mit.edu.			IN	A

    ;; ANSWER SECTION:
    mit.edu.		20	IN	A	92.122.13.240

    ;; Query time: 75 msec
    ;; SERVER: 9.9.9.9#53(9.9.9.9)
    ;; WHEN: Thu Aug 21 14:47:12 MDT 2025
    ;; MSG SIZE  rcvd: 52
    ```

   Note that IPv6 addresses are not in the DNSSBL spam exclusion list.

## DNS over QUIC

Using HTTPS means that HTTP protocol improvements can also benefit DoH. For example, the in-development HTTP/3 protocol, built on top of QUIC, could offer additional performance improvements in the presence of packet loss due to lack of head-of-line blocking. This means that multiple DNS queries could be sent simultaneously over the secure channel without blocking each other when one packet is lost.

A draft for DNS over QUIC (DNS/QUIC) also exists and is similar to DoT, but without the head-of-line blocking problem due to the use of QUIC. Both HTTP/3 and DNS/QUIC, however, require a UDP port to be accessible. In theory, both could fall back to DoH over HTTP/2 and DoT respectively.


## DNSBL

And the world assumed that everyone played nice.

DNS SBL list are for IPv4 only.

If the result is NXDOMAIN, there is no entry for the sender's IP in the blocklist. This means that the sender's IP is not flagged as a source of spam. Mail should be sent normally.



<a name="PublicDNS"></a>

## Public DNS service



## Athoritative Name Services



Each DNS recursive resolver operator has a "root hints file" of IP addresses to <a target="_blank" href="https://www.iana.org/domains/root/servers">DNS root servers</a> used to bootstrap the DNS resolution process.


## DNS Encryption



There are two mechanisms for encrypting DNS using TLS (Transport Layer Security):

1) <a target="_blank" href="https://tools.ietf.org/html/rfc7858">DoT (DNS over TLS, 2016)</a> and




References:
   * https://blog.cloudflare.com/dns-encryption-explained/


DNS servers matched requests and replies using a 16-bit transaction ID (only 65,536 options) and often a predictable source port. That made it possible to guess how the server would match replies.


## Blocks needed 

Those with a connection to the public internet need to:
   * Block annoying ads 
   * Block malicious websites
   * Block ports
 

See <a target="_blank" href="https://wilsonmar.github.io/dns/">my notes on DNS</a>

The Pi-Hole server provides a recursive DNS server called "UnBound".

<a target="_blank" href="https://www.youtube.com/watch?v=Eyc3LVrhmIo">VIDEO</a>: Unifi Ad Blocker.

blocking ads makes for quicker browsing.

ECS (Extended Client Subnet) defines a mechanism for recursive solvers to send partial client IP address information to authoritative DNS name servers. ECS may result in reduced privacy when it is used by CDNs (Content Delivery Networks) and latency-sensitive services to give geo-located responses when responding to name lookups coming through public DNS resolvers. However, SNI headers also send such information.

## Firewall Options

Large businesses install firewalls in their corporate networks such as from Palo Alto or Cisco.

Homes and small businesses use "consumer-grade" firewalls from brands such as Linksys, Netgear, or Draytek.

* <a target="_blank" href="https://www.youtube.com/watch?v=dTUvlFfThPw">VIDEO</a>: OPNSense

* <a target="_blank" href="https://www.youtube.com/watch?v=AgJGuyDyP_M">VIDEO</a>: UniFi Dream Machine Pro (UDM-Pro) by Crosstalk Solutions

* Firewalla is a consumer-grade firewall that is also a router. It comes assembled with software installed. Firewalla has a Purple and Gold editions. The Gold edition adds Intrusion Detection.

If you have the time and geeky inclinations, the least-cost and most customizable option is to buy a Raspberry Pi micro computer and install and configure utility software Pi-Hole.

* Technitium DNS Server

* AdGuard uniquely can be scheduled for a specific block of time each day with parental blocking. AdGuard can use DNSSEC (DNS over HTTPS). AdGuard can also be configured with wildcard specification. AdGuard can enable encryption using a certificate pulled from a CA every 3 months. <a target="_blank" href="https://www.youtube.com/watch?v=c3XMAz--_Us">VIDEO</a> But assumes less advanced configurations than PiHole.

Which is better? PiHole vs AdGuard Home?
   * https://www.youtube.com/watch?v=c3XMAz--_Us by Hardwood
   * https://www.youtube.com/watch?v=nV5dKpGMGx4 by Tobi Teaches
   * https://www.youtube.com/watch?v=O15RD_gPz-s by Barmine
   <br /><br />

### PiHole

## Static IP on router

To make this work, you first need to get into your internet router to set a 
static (fixed) IP address instead of using one dynamically assigned by DHCP.

I gave a fixed private IP on my network where I’m redirecting all my DNS queries.

<hr />

<a name="AdGuard"></a>

## AdGuard on Raspberry Pi

   * <a target="_blank" href="https://www.youtube.com/watch?v=hmjKCNtbulM">Install AdGuard Home - Cross Platform PiHole Alternative - on Raspberry Pi 4</a>


with OpenWRT

Firebog List Generator

Portainers


<a name="PiHole"></a>

## PiHole on Raspberry Pi

https://www.wikiwand.com/en/Pi-hole

https://en.wikipedia.org/wiki/DNS_Sinkhole
protects devices on a subnet from unwanted content, without installing any client-side software.

The Pi-hole® impliments a DNS sinkhole 
https://pi-hole.net/

PiHot optionally functions as a DHCP server, ensuring all your devices are protected automatically

over both IPv4 and IPv6

* https://crosstalksolutions.com/raspberry-pi-4-boot-with-usb
* https://www.youtube.com/watch?v=xtMFcVx3cHU by TechHut
* https://www.youtube.com/watch?v=roYduABVjo8 by CoreElectronics
  
### Get Raspberry Pi hardware

If you are having difficulty getting a Raspberry Pi:
   * Clones of Raspberry Pi
   * RPilocator.com notifies you when one comes into stock.
   * <a target="_blank" href="https://www.youtube.com/watch?v=cE21YjuaB6o">VIDEO</a>: https://www.crosstalksolutions.com/the-worlds-greatest-pi-hole-and-unbound-tutorial-2023/ has a 

Alternately, you can run Pi-hole within a <strong>Docker container</strong>.

YouTube Videos:

by Crosstalk Solutions:
   * <a target="_blank" href="https://www.youtube.com/watch?v=BpJCAafw2qE">VIDEO</a>: "Raspberry Pi 4 Getting Started</a> by Crosstalk Solutions
   * <a target="_blank" href="https://www.youtube.com/watch?v=cE21YjuaB6o">VIDEO</a>: "World's Greatest Pi-hole Tutorial - Easy Raspberry Pi Project!" 

* <a target="_blank" href="https://www.youtube.com/watch?v=oX4NqFisC5Y">VIDEO</a>: "How to Block Ads Using a Pi-Hole With A Raspberry Pi" by Micro Center
* <a target="_blank" href="https://www.youtube.com/watch?v=rPpTi3oZ6_4">VIDEO</a>: "The Ultimate Pi-Hole Installation Guide for 2025!" by Mackey Tech IT Solutions
* <a target="_blank" href="https://www.youtube.com/watch?v=I1fPdGJAWT0">VIDEO</a>: "Pi-hole Setup on Raspberry Pi Zero W | Step-by-Step Guide" by CyberMaxLab 
* <a target="_blank" href="https://www.youtube.com/watch?v=VfOz8RWgnz4">VIDEO</a>: "How to install Pi-hole and PiVPN on a Raspberry Pi | Must Have for Home Lab" by Barmine Tech
* <a target="_blank" href="https://www.youtube.com/watch?v=5jPNWzNCLDw">VIDEO</a>: "How to Install Pi-Hole on Raspberry Pi" by Vincent Humble
* <a target="_blank" href="https://www.youtube.com/shorts/iXg2p5ody5c">VIDEO</a>: 
* <a target="_blank" href="https://www.youtube.com/watch?v=e_EfmKdP2ng">VIDEO</a>: "Pi-hole Made EASY - A Complete Tutorial" by Tech Craft

### Install PiHole on macOS

https://docs.pi-hole.net/main/basic-install/

<pre><strong>curl -sSL https://install.pi-hole.net | bash</strong></pre>

<a name="GetPi"></a>

1.  See my articles:
    * <a target="_blank" href="https://wilsonmar.github.io/iot-raspberry-hardware/">my "iot-raspberry-hardware" article</a>.
    * <a target="_blank" href="https://wilsonmar.github.io/iot-raspberry-install/">my "iot-raspberry-install" article</a>.

    <a target="_blank" href="https://www.youtube.com/watch?v=cE21YjuaB6o&t=4m26s">imager</a>

1.  Navigate to a folder where you want the new repo downloaded.

2.  Deploy the software directly to a supported operating system via our automated installer:

    <pre>git clone --depth 1 https://github.com/pi-hole/pi-hole.git Pi-hole
    cd "Pi-hole/automated install/"
    sudo bash basic-install.sh
    </pre>

3.  Type your laptop's OS password requested by the sudo command. The Pi logo should appear.

    <pre>  [✓] Root user check

        .;;,.
        .ccccc:,.
         :cccclll:.      ..,,
          :ccccclll.   ;ooodc
           'ccll:;ll .oooodc
             .;cll.;;looo:.
                 .. ','.
                .',,,,,,'.
              .',,,,,,,,,,.
            .',,,,,,,,,,,,....
          ....''',,,,,,,'.......
        .........  ....  .........
        ..........      ..........
        ..........      ..........
        .........  ....  .........
          ........,,,,,,,'......
            ....',,,,,,,,,,,,.
               .',,,,,,,,,'.
                .',,,,,,'.
                  ..'''.
    </pre>

    If you see this, verify you have a <a href="#GetPi">working connection to the Pi</a>.

    <pre>[i] SELinux not detected
    [✗] No supported package manager found
    </pre>

1.  Block ads everywhere, even on the go. By pairing your Pi-hole with a VPN, you can have ad blocking on your cellular devices, helping with limited bandwidth data plans.

    https://docs.pi-hole.net/guides/vpn/overview


    ### Set Pi-hole Admin Password

    ### Log into the Pi-hole

    ### Pi-hole Dashboard and Menus

    ### Add Pi-hole Block Lists

1.  Configure your router’s DHCP options to force clients to use Pi-hole as their DNS server, or manually configure each device​ to use the Pi-hole as their DNS server.

    https://docs.pi-hole.net/main/post-install

    ### More Pi-hole Menu Settings

    ### Pi-hole Settings

1.  Set a static IP address within your subnet for the PiHole. 8:58
  
    <pre>sudo nano -w /etc/dhcpcd.conf
    </pre>

    Un-comment under <tt># Example static IP configuration</tt> and specify your subnet:

    <pre>interface eth0
    static ip_address=192.168.200.52/24
    static routers=192.168.200.1
    static domain_name_servers=192.168.200.1 1.1.1.1
    </pre>

    <pre>sudo reboot</pre>

1.  On the new IP address:

    ### Configure DNS server

    Some internet service providers (ISPs) return ads instead of 404.
    
    TODO: Don't have to use Unbound.

    The list of supported DNS servers and their primary and secondary IP addresses (V4 and V6) are  defined in the .sh script:
    ```
        DNS_SERVERS=$(
        cat <<EOM
    Google (ECS, DNSSEC);8.8.8.8;8.8.4.4;2001:4860:4860:0:0:0:0:8888;2001:4860:4860:0:0:0:0:8844
    OpenDNS (ECS, DNSSEC);208.67.222.222;208.67.220.220;2620:119:35::35;2620:119:53::53
    Level3;4.2.2.1;4.2.2.2;;
    Comodo;8.26.56.26;8.20.247.20;;
    Quad9 (filtered, DNSSEC);9.9.9.9;149.112.112.112;2620:fe::fe;2620:fe::9
    Quad9 (unfiltered, no DNSSEC);9.9.9.10;149.112.112.10;2620:fe::10;2620:fe::fe:10
    Quad9 (filtered, ECS, DNSSEC);9.9.9.11;149.112.112.11;2620:fe::11;2620:fe::fe:11
    Cloudflare (DNSSEC);1.1.1.1;1.0.0.1;2606:4700:4700::1111;2606:4700:4700::1001
    EOM
    )
   ```
    
    1.1.1.3 & 1.0.0.3 blocks phising/malware/adult content filtering.

    8.8.8.8 from Google was rated as the quickest, probably because it doesn't block as comprehensively.

    ### Add blocklist from Firebog

1.  Into Pi-Hole's Adlist Group Management, add URLs of sites that Firebog knows to be suspicious, advertising, tracking & telemetry, malicious, etc.

1.  Click "Update Gravity".

    ### Temporarily Disable Pi-hole 23:45

1.  Create a shell file to call to obtain password cache:

    <pre>cat /etc/pihole/setupVars.conf | grep WEBPASSWORD
    </pre>

1.  Bookmark this URL on your browser or Stream Deck to temporarily disable Pi-Hole by authenticating with the hashed value of WEBPASSWORD.

    http://192.168.200.52/admin/api.php?disable=300&auth=PWHASH

    for 300 seconds

    ### Configure other devices to use Pi-hole as DNS

1.  In Settings, Interface settings, uncheck default "Allow only local requests".
2.  Check "Respond only on interface eth0".

3.  Instead of changing each device (laptop), set the DNS to the Pi-Hole DNS, set the DHCP: 
    DNS 1 and DNS 2.

    ### Audit log

4.  Click the "Audit Log" menu item.

    ### Backup

5.  In Tools, click "Backup".
6.  Copy the backed up file to a USB drive and/or cloud.
7.  If you're running 2 Pi-Holes, install the backup onto the 2nd Pi-Hole. Sync using:

    https://github.com/vmstan/gravity-sync

    ### Install Unbound DNS route proxy

8.  Install Unbound service to make DNS queries anonymously:

    <pre>sudo apt install unbound -y</pre>

8.  Download the text

    <pre>??? pi-hole.conf</pre>

8.  Edit wall of text:

    <pre>sudo nano -w /etc/unbound/unbound.conf.d/pi-hole.conf</pre>

9.  Start Unbound service:

    <pre>sudo service unbound start</pre>

9.  View Unbound service status (active?):

    <pre>sudo service unbound status</pre>

9.  Test DNS lookup:

    <pre>dig crosstalksolutions.com @127.0.0.1 -p 5335</pre>

9.  30:36 Setup firewall rules to ignore DNS queries to the DNS set on individual devices.

    ### Test Pi-hole Ad Blocking

9.  Test Ad-Blocking

<hr />

## Docker

<pre>curl -sSL https://get.docker.com | sh
</pre>

1.  Add user pi to docker group:
  
    <pre>sudo usermod -aG docker pi
    </pre>

1.  Setup portainer.io to manage Docker containers on default port 9000:

    <pre>sudo docker run --restart always -d -p 9000:9000 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data portainer/portainer-ce:linux-arm
    </pre>

<hr />

## NAS drive on Raspberry Pi

https://www.youtube.com/watch?v=gyMpI8csWis

## Chron jobs

### Update the Pi-hole

Run a chron (crontab) job to Once a week or month to apply updates (if one becomes available):

1.  Edit in <tt>/etc/cron.d/pihole</tt>

    <pre>30 2 * * 1   root    /usr/bin/curl -sSl https://raw.githubusercontent.com/mmotti/pihole-regex/master/install.py | /usr/bin/python3  >> /var/log/piholeupdate 2>&1
    &nbsp;
    30 2 * * 1   root    cd /usr/local/src/whitelist/scripts && git pull&& ./whitelist.sh >> /var/log/piholeupdate 2>&1
    </pre>

    ### Do regular speedtests

10. Every hour run:

     <a target="_blank" href="https://www.youtube.com/watch?v=J-rfC84xdOE">VIDEO</a>: <a target="_blank" href="https://openspeedtest.com/">openspeedtest.com</a> server run within a Docker image downloaded.

     <pre>sudo docker run --restart=unless-stopped \
     --name=openspeedtest -d -p 80:8080 openspeedtest/latest
     </pre>

     Change the port to something other than 8080 if your prefer.

11. Display

      https://github.com/Brandawg93/Pi-Hole-Monitoring

11. Run on browser at URL http://192.168.200.122
  
     Record to a file.

     Instead of a chip, get an SSD drive.

12. View analysis: Are evenings more overloaded?

<hr />

## More 

<a target="_blank" href="https://www.youtube.com/watch?v=0wpn3rXTe0g">VIDEO</a>: "Is adding 3 MILLION domains to your Pi-Hole Block List a good thing?" by Techno Tim

## References

https://docs.pi-hole.net/

https://www.reddit.com/r/pihole/

https://www.youtube.com/watch?v=jlHWnKVpygw


<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

## More on Security #

This is one of a series on Security:

{% include security_links.html %}

