---
layout: post
date: "2023-02-01"
file: "firewalls"
title: "Firewalls"
excerpt: "How to keep. PiHole."
tags: [security]
image:
# pic secret finger over mouth 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15807549/645e9404-2b1e-11e6-8e19-2368c5578015.jpg
  credit: Forbes
  creditlink: http://blogs-images.forbes.com/ricksmith/files/2014/11/secret.png
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Why Pi-Hole?

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
  
## Get a Raspberry Pi hardware

<a target="_blank" href="https://www.youtube.com/watch?v=cE21YjuaB6o">VIDEO</a>:
https://www.crosstalksolutions.com/the-worlds-greatest-pi-hole-and-unbound-tutorial-2023/
has a RPilocator.com which notifies you when one comes into stock.

Alternately, you can run Pi-hole within a Docker container.

<a target="_blank" href="https://www.youtube.com/watch?v=BpJCAafw2qE">VIDEO</a>:
Raspberry Pi 4 Getting Started</a> by Crosstalk Solutions


## Install PiHole from macOS

<a name="GetPi"></a>

1.  See my article about setting up the Raspberry Pi.

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
    
    Don't have to use Unbound.
    
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

4. Click the "Audit Log" menu item.

    ### Backup

5. In Tools, click "Backup".
6. Copy the backed up file to a USB drive and/or cloud.
7. If you're running 2 Pi-Holes, install the backup onto the 2nd Pi-Hole.

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

Run a chron job to ...

9.  once a week or month to apply updates if there is one:
  
    ### Do regular speedtests

9.  Every hour run:

    <a target="_blank" href="https://www.youtube.com/watch?v=J-rfC84xdOE">VIDEO</a>: <a target="_blank" href="https://openspeedtest.com/">openspeedtest.com</a> server run within a Docker image downloaded.

    <pre>sudo docker run --restart=unless-stopped \
    --name=openspeedtest -d -p 80:8080 openspeedtest/latest
    </pre>

    Change the port to something other than 8080 if your prefer.

1.  Run on browser at URL http://192.168.200.122
  
    Record to a file.

    Instead of a chip, get an SSD drive.

2.  View analysis: Are evenings more overloaded?

<hr />

<a name="DreamMachine"></a>

## UniFi Dream Machine

<a target="_blank" href="https://www.youtube.com/watch?v=AgJGuyDyP_M">VIDEO</a>:
UniFi Dream Machine Pro (UDM-Pro)</a> by Crosstalk Solutions


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
