---
layout: post
title: "Apple Macbook Hardware"
excerpt: "It's stylish because it's expensive"
tags: [apple, mac, setup]
date: "2021-04-05"
file: "apple-macbook-hardware"
image:
# ![apple-store-fisheye-1900x500-42783.jpg
  feature: https://user-images.githubusercontent.com/300046/62640513-ff8ac800-b8fe-11e9-842b-e83ec4fdabb2.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Mac within AWS cloud

In 2022 AWS <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/mac/">announced</a> availability of on-demand MacOS server types built on AWS Nitro System  within the AWS EC2 cloud.
<a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html">
Documentation</a>:

One of the EC2 instance types https://aws.amazon.com/ec2/instance-types/

   * mac1.metal are Mac Mini's with Intel’s 8th generation (Coffee Lake) 3.2 GHz (4.6 GHz turbo) Core i7 x86 processors 

   * mac2.metal has Apple's M1 or M2 ARM (16-core Neural Engine) processors
   <br /><br />

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th>Instance</th><th>vCPU cores</th><th>GiB memory</th><th>Gbps Network</th><th>Gbps EBS Bandwidth</th></tr>
   <tr valign="top"><td>mac1.metal</td><td>12</td><td>32</td><td>10</td><td>8</td></tr>
   <tr valign="top"><td>m2.metal</td><td>8</td><td>16</td><td>10</td><td>8</td></tr>
   </table>

Using the AWS Mananagement Console UI from your laptop:

1. Login

1. PROTIP: <a target="_blank" href="https://www.youtube.com/watch?v=8UqtMcX_kg0">As with other instance types</a>, define a Security Group using port 22 protocol TCP source <strong>your laptop's IP address</strong> (rather than 0.0.0.0/0 for just anyone, which is unsafe).

1. Create a pem key (such as "malx-us-west-2.pem" in the example below).
1. <tt>chmod 0400 malx-us-west-2.pem</tt>

1. Define an IAM role.

1. Type "EC2" in the search box.
1. Select <strong>Dedicated Hosts</strong> from the left menu.
1. Select the region (at the upper-right).
1. Select one of the instance types shown (Oregon Mac1 Dedicated Host).
1. Pull down the Actions list to select "Launch instance onto host".
1. Select "macOS Big Sur 11.2.3" among Amazon Machine Images.
1. Click "Next:" at the lower-right corner.
1. Choose an IAM role.
1. Click the "Next: Storage" if you need to
1. Increase the size of the Root Volume from a default of 60 to 300 GiB.
1. The Volume Type can be increased by selecting faster <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/provisioned-iops.html#EBSVolumeTypes_piops">Provisioned IOPS SSD (Solid State Drive) volumes</a>. Provisioned IOPS SSD volumes can be 4 GiB to 16 TiB.

   * General Purpose SSD (gp2) for 3000 IOPS.
   * General Purpose SSD (gp3) for 3000 IOPS.
   * Provisional IOPS SSD (io1) for up to 5,000 IOPS
   * Provisional IOPS SSD (io2) for up to 50,000 IOPS
   * Magnetic (Standard)

1. Add tags per your administrator's guidelines and examples.
1. Select a Security Group.
1. Select the key pair.
1. Click the blue "Launch".
1. After Instance State is "Running",
1. Highlight the Public IPv4 address to your Clipboard.
1. Proceed to <a href="#AWSMacConnect">Connect to AWS MacOS</a> below.
<br /><br />


Alternately, using AWS CLI:

1. Download the <tt>malx-us-west-2.pem</tt> from the keypair.
1. Allocate hosts:

   <pre><strong>
   aws ec2 allocate-hosts --instance-type="mac1.metal" \
   --quantity=1 \
   --region="us-west-2" --availability-zone="us-west-2b" \
   --auto-placement="on" --host-recovery="off"
   </strong></pre>

   Response:

   <pre>{
    "hostIds": [
      "h-043de1b44a0374973"
    ]
   }
   </pre>

1. View file <tt>mapping.json</tt> for <tt>--block-device-mappings</tt>

   <pre>
   [
      {
         "DeviceName": "/dev/sda1",
         "Ebs": {
              "VolumeSize": 300,
              "VolumeType": "gp3"
         }
      }
   ]
   </pre>

1. Run the instance using the image-id associated with the region selected:

   <pre><strong>
   aws ec2 run-instances --region="us-west-2" \
   --image-id="ami-04fdffdf922f4de8e" \
   --key-name="malx-us-west-2" \
   --block-device-mappings file://mapping.json \
   --associate-public-ip-address \
   --placement="Tenancy"="host"
   </strong></pre>


<a name="AWSMacConnect"></a>

### Connect to AWS MacOS

1. <a target="_blank" href="https://www.youtube.com/watch?v=8UqtMcX_kg0">As with other instance types</a>, use SSH to connect to your Mac instance :

   <pre><strong>
   ssh -i malx-us-west-2.pem ec2-user@35.161.43.6
   </strong></pre>

1. Once on the Mac prompt:

   <pre><strong>
   sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart \
   -activate -configure -access -on \
   -configure -allowAccessFor -allUsers \
   -configure -restart -agent -privs -all
   exit
   </strong></pre>

1. Disconnect and reconnect to enable the GUI.

   <pre><strong>
   ssh -L 5900:localhost:5900 -i malx-us-west-2.pem ec2-user@35.161.43.6
   </strong></pre>

1. Press command+spacebar for Spotlight to search for the screen-sharing app.

1. Login using your password.

1. If you selected a larger volume (above), <a target="_blank" href="https://www.youtube.com/watch?v=--BfdlnIc7Y">VIDEO</a>:

   <pre><strong>
   PDISK=$(diskutil list physical external | head -n1 | cut -d' ' -f1 )
   sudo diskutil repairDisk $PDISK
   </strong></pre>

1. Resize (which takes a few minutes):

   <pre><strong>
   APFSCONT=$(dikutil list physical external | grepApple_APFS | tr -s ' ' | cut -d ' ' -f8 )
   sudo diskutil apfs resizeContainer $APFSCONT 0
   </strong></pre>

1. <a target="_blank" href="https://www.youtube.com/watch?v=--BfdlnIc7Y&t=4m11s">Take a snapshot</a> backup at volume or instance level to copy across regions or accounts to create new AMI machine images.

1. The <a target="_blank" href="https://aws.amazon.com/ec2/instance-types/mac/#Pricing">unit of billing</a> is the <a target="_blank" href="https://aws.amazon.com/ec2/dedicated-hosts/pricing/">dedicated host</a> US region price which have a <strong>24-hour minimum allocation period</strong> (required by Apple). For 

   * mac1 US per hour $0.650 x 24 = $15.6/day or $468 per 30-day month
   * mac2 US per hour $1.083 x 24 = $25.992/day or $779.76 per 30-day month
   * mac1 Mumbai per hour $1.14
   * mac2 Frankfurt per hour $1.298
   <br /><br />

   It's not available on all regions world-wide.

   AWS offers savings up to 44% off On-Demand pricing for a 3-year commitment. 
   But more that a few months, you might as well buy your own Mac at $2,500.

   Compare against <a target="_blank" href="https://www.macstadium.com/pricing">MacStadium.com</at>
   <a target="_blank" href="https://portal.macstadium.com/bare-metal-mac/create">prices for bare-metal</a>:

   * mac1 (Gen 4 Mac mini) with 32 GB for $239 per month
   * mac1 (Gen 4 Mac mini) with 64 GB for $299 per month
   * mac2 (Gen 5 Mac mini) with 16 GB for $171 per month
   <br /><br />
   
1. <a target="_blank" href="https://www.youtube.com/watch?v=XWcCzqEemQQ">VIDEO: macOS Workers with Kubernetes and Jenkins</a>

   Orka orchestrates macOS in a cloud environment using Kubernetes technology on genuine Apple hardware.

   Anka is designed specifically for Mac-based CI workflows and easily integrates with existing container-based DevOps CI pipelines.



<hr />

## Hardware Versions

1. Click the Apple icon at the upper left corner and select
<strong>About this Mac</strong>.

   MacOS Catalina 10.15 or later, to run Sidecar on iPads, requires one of the :<a target="_blank" href="http://osxdaily.com/2019/10/11/sidecar-compatible-mac-ipad-list/">following hardware models</a>:

   * MacBook Pro (2016) or newer
   * MacBook Air (2018) or newer
   * MacBook (Early 2016) or newer
   * Mac Mini (2018) or newer
   * Mac Pro (2019)
   * iMac Pro (2017) or newer
   * iMac (Late 2015) or newer
   <br /><br />

   macOS Mojave 10.14 can run using these hardware models: 

   * MacBook Pro (mid 2012 and newer)
   * MacBook Air (mid 2012 and newer)
   * MacBook (early 2015 and later)
   * iMac (late 2012 or newer)
   * iMac Pro (2017 or newer)
   * Mac Pro (late 2013 or newer, or mid 2010 and mid 2012 models with Metal capable GPU)
   * Mac Mini (late 2012 or newer)
   <br /><br />

   http://osxdaily.com/2018/09/27/run-macos-mojave-unsupported-mac-dosdude-patch/

   MacOS Sierra can run using these hardware models:

   <ul>
   <li><a href="//www.macrumors.com/roundup/macbook-pro/">MacBook Pro</a> (2010 or newer)</li>
   <li><a href="//www.macrumors.com/roundup/macbook-air/"><a href="//www.macrumors.com/roundup/retina-macbook-air/">MacBook</a> Air</a> (2010 or newer)</li>
   <li>MacBook (Late 2009 or newer)</li>
   <li><a href="//www.macrumors.com/roundup/mac-pro/">Mac Pro</a> (2010 or newer)</li>
   <li><a href="//www.macrumors.com/roundup/imac/">iMac</a> (Late 2009 or newer)</li>
   <li><a href="//www.macrumors.com/roundup/mac-mini/">Mac mini</a> (2010 or newer)</li>
   </ul><br /><br />

   See 
   * <a href="https://wilsonmar.github.io/apple-mac-osx-versions/">my hands-on tutorial about MacOS Versions</a>
   * <a href="https://eshop.macsales.com/guides/Mac_OS_X_Compatibility">Matrix of hardware vs. software versions</a>

   ### Performance rankings

2. Compare the performance rankings among hardware models at <a target="_blank" href="http://browser.geekbench.com/mac-benchmarks/">http://browser.geekbench.com/mac-benchmarks/</a>

   Install Geekbench to obtain CPU Benchmark statics for your own machine <a target="_blank" href="https://browser.geekbench.com/v4/cpu/8746987">posted on their website</a>.

   The Compute Benchmark is run and <a target="_blank" href="https://browser.geekbench.com/v4/compute/2532765">posted</a> separately.


### Mac Specs.

The 2018 version of 15-inch MacBook Pro:

* Intel Core i7, Core i9
* <strong>Max DDR4 RAM of 32GB (up from 16GB)</strong>
* Max 2TB to <strong>4TB SSD</strong>
* Quieter third generation keyboard
* Touch Bar
* Radeon Pro discrete graphics with 4GB of video memory
* Retina Display True Tone (still not a touch screen)
* T2 system on chip processor for security features


### Hackintosh

If you need more than 16 GB RAM or add PCI add-in cards, build an (unsupported) <a target="_blank" href="https://hackintosh.com/">Hackintosh desktop</a> on PC hardware. For example: a water-cooled i7–8700k processor, 8GB RX580 graphics card for a 4K LG HDR monitor. Oh, and a pair of Yamaha HS5 studio monitors (speakers) with a Roland audio interface. Plus SSD and HDD storage.

<a target="_blank" href="https://www.youtube.com/watch?v=WU7U2kJsQv0">
VIDEO: Rick Beato's Hackintosh build</a>

<a target="_blank" href="https://www.youtube.com/watch?v=i_-K1UtI8PE&t=1m21s">
talks about the Clover Boot Loader</a>

Alas, Apple's Kalamata project <a target="_blank" href="https://www.bloomberg.com/news/articles/2018-04-02/apple-is-said-to-plan-move-from-intel-to-own-mac-chips-from-2020">
announced they will use their own chips instead of Intel chips</a> which make Hackintosh possible via an x86 boot loader.


<a id="Register"></a>

## Register it. Now.

<a target="_blank" href="https://support.apple.com/en-us/HT204308">
Find your serial number</a> then confirm your warranty and support status:

1. Click the Apple icon at the upper left corner and select
<strong>About this Mac</strong>.

2. Double-click to the right of the "Serial Number" label and press command + C to copy it to your internal clipboard.

3. PROTIP: Paste the serial number in a document that you store separate from your laptop
so that you'll have it in case your laptop is lost or stolen. Notify someone about that location in case you're lost or stolen ;)

3. Click the red X at the upper-left of the pop-up to dismiss it.

4. Open web page: 
<a target="_blank" href="https://selfsolve.apple.com/agreementWarrantyDynamic.do">
Apple Online Service Assistant</a>

4. Click on the box under "Enter your serial number" and press command + V to paste.

5. Click on the box under "Please enter the code" and retype the jumbled letters.

6. Click Continue.

   PROTIP: AppleCare Protection Plan (APP) can be purchased for 3 years.

   <a target="_blank" href="https://support.apple.com/en-us/ht201880">
   BLAH:</a> Liquid damage is not covered by AppleCare because it's so common,
   even though many consider that a defect. There should be drainage.

   MacBooks have several physical Liquid Contact Indicators (LCI) that turn color when exposed to liquid.

   * https://www.youtube.com/watch?v=x1ALMOgXams
   * https://www.youtube.com/watch?v=Setz768BcJ0
   * https://www.youtube.com/watch?v=x1ALMOgXams
   * https://www.youtube.com/watch?v=e_5lzXGtanQ
   * https://www.youtube.com/watch?v=RqIQcV2Viy8

<a target="_blank" href="https://www.ifixit.com/info/ID-your-Mac">
Identify your Mac</a> for 
<a target="_blank" href="https://www.ifixit.com/Teardown/Retina+Macbook+2015+Teardown/39841">
tear-down instructions such as for MacBook Pro A1398 (Retina, 15-inch,Early 2015)</a>.


## Case

Dropping a Macbook can crack the screen.

A protective case can absorb some abuse, but adds to weight.

Unlike some PCs, MacBooks do not have a slot for <strong>physical lock</strong> as many Windows PCs have.

To put a Mac at the end of a cut-proof cable, 
consider the docking station from Landing Zone.
Install its driver from: 
   <a target="_blank" href="
   https://landingzone.net/driver-lxd">
   https://landingzone.net/driver-lxd</a>


## Screws on case

Apple uses tiny screws for their products.
Screws for older Mac Book Pro's have a "+"" pattern requiring a 1.5mm screwdriver.
Screws for newer Mac Book Pro's have a 5-point design which require a
screwdriver called the "pentalobe" Torx T6.

iPhones require a T6 Torx 0.6 screwdriver.
The Phillips PH#00 is a little too big.

Screws on the black hindge edge are longer. 


<a id="Coolingz"></a>

## Cooling

The Macbook Pro has always had a history of running hot. 

If you're only using power when plugging into the Mac's USB hub connector,
use an external USB power that plugs straight into the wall outlet.

Use of an external monitor may also cause the fan to engage.


<a id="Battery"></a>

## Battery

Install https://macdaddy.io/mac-battery-guru/
to display current battery drain.

![macbook-hardware-battery-307x366](https://user-images.githubusercontent.com/300046/27984588-d9e61542-6396-11e7-84bf-0e383537dc54.png)

The number shown at the top is 0 (zero) when the laptop is plugged in.


## Charger

13 inch diagonal MacBooks use a 65 watt charger cube.

15 inch diagonal MacBooks use a 85 watt charger cube. Newer ones from 2017 have a removeable USB-C cable. This solved a long-standing issue with the cable fraying near the plug.

<a target="_blank" href="https://www.thingiverse.com/thing:2768119">
Have a Formlab 2 3D printer?</a> Make a Magsafe anti-fray Apple charger:

![apple-macbook-hardward-fray-537x243-34850](https://user-images.githubusercontent.com/300046/40870115-9b5770da-65e5-11e8-9255-fd24809bd3bc.jpg)

That may be a good thing considering Apple's 85W charger <a target="_blank" href="https://www.amazon.com/Apple-MNF82LL-USB-C-Power-Adapter/dp/B01M8O7W40/">costs $79 on Amazon</a> and elsewhere.

## USB-C ports

2015 Macbooks don't come with older USB-B ports so one has to buy 
<a target="_blank" href="http://store.apple.com/us/product/MJ1M2AM/A/usb-c-to-usb-adapter">
$19 Apple proprietary adapter cables</a>.

Another power plug runs <a target="_blank" href="http://store.apple.com/us/product/MJ262LL/A/apple-29w-usb-c-power-adapter?fnode=51">
$49</a>

<a target="_blank" href="https://www.ifixit.com/Device/MacBook_Pro_15%22_Core_2_Duo_Models_A1226_and_A1260">New</a> Macbooks combine power and communication (Ethernet) into a single
proprietary oblong rounded USB-C connector.
USB-C connectors can be inserted on either side (unlike earlier USB plugs).
It follows the USB 3.1 standard, which has a theoretical
maximum speed of up to 10Gbps (gigabits per second)
-- two times faster than USB 3.0. But the Macbook is at 5Gbps for now.

USB 3.1 support is used by <a target="_blank" href="http://store.apple.com/us/product/MJ1K2AM/A/usb-c-digital-av-multiport-adapter"> Apple's $79 HDMI/VGA connector</a>
and by upcoming MHL (Mobile High-definition Link) 3 devices to 
stream 4K video from mobile devices to TV sets. That would obsolete ChromeCast.

Get a USB-C to USB-B cable.
Plug it into a battery pack and you can charge the laptop.

<a target="_blank" href="https://www.amazon.com/dp/B01MUAEI7J/">This $90 adapter from Amazon</a> works for me:
![apple-macbook-hardware-adapter-569x345-43408](https://user-images.githubusercontent.com/300046/40870296-d1e6947e-65e9-11e8-8529-70b9ef107123.jpg)

### Network

To see the impact of a cable vs. Wi-Fi:

1. Press and hold Option on the keyboard while clicking the WiFi icon on the top menu bar.

1. Note the <strong>RSSI</strong> value for signal strength.
 
   Under <strong>-60 dBm</strong> (decibles 3 or less bars) is a poor connection.

1. Get a USB-C to 45 adapter and plug in a cable that connects directly to your router.

   What is the RSSI value?

## Camera

If I installed a QR reader on my iPhone, I can read a QR code to take me to the URL represented by the code.

You can read a printed QR code by holding up to your Mac's Facetime camera using app "QuickMark" <a target="_blank" href="https://www.youtube.com/watch?v=6JAAKm5ZQRE">VIDEO</a>. BTW there used to be a <a target="_blank" href="http://itunes.apple.com/us/app/qr-right/id496947232?mt=12">$2.99 QR Right app</a>.

MacOS apps <a target="_blank" href="http://dansl.net/qrreader/">QReader</a> and <a target="_blank" href="https://itunes.apple.com/us/app/qr-journal/id483820530?mt=12">"QR Journal"</a> for those with the Apple iSight A1023 USB external camera from <a target="_blank" href="https://www.macworld.com/article/3018431/macs/in-praise-of-the-glorious-wildly-over-engineered-isight-webcam.html">2003</a> (or iSight compatible). It connects to the Firewire port on older Macs.
And some reviewers report crashes.

<a target="_blank" href="http://www.madrau.com/index.html">The $16 SwitchResX app</a> is advertised as a screen size formatter for Mac Retina-friendly HiDP screens and for making Macs into teleprompters (where a pane of transparent glass reflects a screen so that only the speaker can read).

How can one read a QR code appearing on a Mac screen? 

After you create a QR code using qrstuff.com and download the png file, or use an image editor to create an image file containing a QR code, upload the file to:

   <ul><a target="_blank" href="https://zxing.org/w/decode.jspx">https://zxing.org/w/decode.jspx</a>
   </ul >

Alternately, install imagemagick as a dependency to this app using Homebrew:

   <ul><pre><strong>brew install zbar</strong></pre>
   </ul>

Then specify the file:

   <ul><pre><strong>cd ~/Downloads & zbarimg qrcode_file.png</strong></pre>

   The response should be the text (URL) embedded in the QR code image.
   </ul>

 
<a id="Trackpad"></a>

## Trackpad and Mouse Speed

1. In a Terminal window, get the current setting:

   <pre><strong>defaults read -g com.apple.trackpad.scaling
   </strong></pre>

   In System Preferences, Mouse, if you max out the slider to the right, the value is <strong>3</strong>.

2. To set the maximum speed up for Touchpad in a bash shell script:

   <pre><strong>defaults write -g com.apple.touchpad.scaling  3.0
   </strong></pre>

3. <a target="_blank" href="https://www.tylernichols.com/apple/speed-up-mouse-tracking-on-mac-os-x">PROTIP:</a> If you use an external mouse a 24 inch iMac, use the command to set a faster speed than what can be set in the GUI:

   <pre><strong>defaults write -g com.apple.mouse.scaling  5.0
   </strong></pre>

If you drag and drop didn't work on the Trackpad, relaunch Force Quit the Finder.

If that still doesnt' work, follow <a target="_blank" href="http://osxdaily.com/2015/09/07/drag-and-drop-not-working-mac-os-x-troubleshooting/">
this blog</a> which advised from the OS X Finder, hit Command+Shift+G for the “Go To Folder” screen to
specify <strong>~/Library/Preferences/</strong> as the destination. Then drag:

   * com.apple.AppleMultitouchTrackpad.plist
   * com.apple.driver.AppleBluetoothMultitouch.trackpad.plist
   * com.apple.preference.trackpad.plist
   * com.apple.driver.AppleBluetoothMultitouch.mouse.plist
   * com.apple.driver.AppleHIDMouse.plist
   <br /><br />


### Stylus on Touch Pad

<strong>Pen tablets</strong> are useful on Photoshop, Sketch, Pixelmator and other paint and calligraphy programs. 
Google's training videos use them for live illustrations.

Some professional drawing tablets are hundreds of dollars.

<a target="_blank" href="https://www.apartmenttherapy.com/quick-tip-use-a-tablet-stylus-with-your-macbook-175342">
NOTE</a> 
You can turn the touch pad on MacBook Pro laptops into a drawing tablet by installing the $29.95 <a target="_blank" href="http://tenonedesign.com/inklet.php/">Inklet OSX program</a> which runs in the background.

If you have a new Apple MacBook Pro, Inklet takes advantage of its "Multitouch Force Touch" trackpad that senses different levels of pressure.

Inklet recognizes those squishy rubber-tipped <strong>capacitive stylus</strong> given out by vendors at conferences and sold at dollar stores. For more precision, Inklet's $44.90 combo package includes the <a target="_blank" href="https://tenonedesign.com/pogo.php">$19.95 Pogo stylus</a>
(not the 
https://www.amazon.com/Ten-One-Design-T1-PGCT-302-Bluetooth/dp/B009K448L4/
Pogo Connect or Magnus Air even though they are also useful on 3D touch iPhone and iPads.)

Inklet has a palm rejection feature that ignores where  hands typically rest on the touch pad while drawing with the stylus.

Open a drawing program before opening Inklet tablet mode by 
a) clicking on the droplet icon and select 'Start Inklet', b) sliding across the bottom of the track pad. or c)vuse the hotkey control+option+i. A transparent workspace appears where drawing occurs from the trackpad.


<a id="WristRest"></a>

## Wrist Rest Cushion

I like some cushioning for where my palm
touches the cold hard keyboard and 
on sharp edges of the Mac Pro Retina laptop.

In https://support.apple.com/en-us/HT203671
Apple recommends against use of palm pads,
as the pads puts uneven pressure on the display glass.

The pads also cause a line of dust on the screen.

Unlike the much better looking leather
<a target="_blank" href="https://www.twelvesouth.com/product/surfacepad-for-macbook"> $29 TwelveSouth</a>,
the <a target="_blank" href="
http://www.amazon.com/GRIFITI-Notebook-Silicone-Reposition-Travelling/dp/B00897D3OQ/ref=wilsonslifenotes">
$9.99 GRIFITI Palm Pads</a>
is removeable (rests on rather than glued on the keyboard), so
it can be taken off before closing the cover.



<a id="SysProfiler"></a>

## System Profiler File Redirect

MacOS has a single command to obtain details about your machine in a single file.

Good to provide tech support when you're dealing with a nasty problem.

There is a lot of information, so we use it to show use of some command-line kung fu:

0. Redirect the output to a dated file using the `>` symbol, but change the sample  date
   as you type this command:

   <pre><strong>cd ~
   system_profiler >system_profiler_<em>2017_06_11</em>
   </strong></pre>

   This takes a while to run.

0. In the Terminal, highlight the file name and press Ctrl+C to copy it to your Clipboard.
0. To count the number of lines in that output file above:

   <tt><strong>wc system_profiler_2017_06_11
   </strong></tt>

   The response I got:

   <pre>
   72759  346086 3353663 system_profiler_2017_06_11
   </pre>

   In the example above, 72759 is the number of lines, 
   13346086 is the number of words, and 3353663 is the number of characters.

   SIDE NOTE: This is more than the number (64922) obtained from the 
   <a target="_blank" href="https://www.computerhope.com/unix/nl.htm">
   nl command</a> which adds a line counter as it displays each line.



<a id="KernelState"></a>

## System Kernel State

This is rather geeky, but just so you know:

   <tt><strong>sysctl -a hw
   </strong></tt>

   `-a` lists all the currently available non-opaque values.

   <a target="_blank" href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man3/sysctl.3.html#//apple_ref/doc/man/3/sysctl">detailed description of these.</a>

   <pre>
hw.ncpu: 8
hw.l3cachesize: 6291456
hw.l2cachesize: 262144
hw.l1dcachesize: 32768
hw.l1icachesize: 32768
   </pre>


   <tt><strong>sysctl kern.clockrate
   </strong></tt>

   <pre>
kern.clockrate: { hz = 100, tick = 10000, tickadj = 2, profhz = 100, stathz = 100 }
   </pre>


   <tt><strong>sysctl vm.swapusage
   </strong></tt>

   <pre>
vm.swapusage: total = 2048.00M  used = 320.50M  free = 1727.50M  (encrypted)
   </pre>


<a id="SysPrefs"></a>

## System Preferences 

<ol type="1">
<li> If you don't see the Apple icon at the top of the screen,
move the cursor to the very top of the screen for a few seconds.</li>
<li> Click on the Apple icon at the upper left corner.</li>
<li> Select <strong>System Preferences</strong>.

   <img alt="mac-system-prefs-10 12 5-285x280-35kb" width="285" height="280" src="https://user-images.githubusercontent.com/300046/27473427-36a91b7e-57cd-11e7-808e-85088336e959.png">
   </li>
</ol>


<a id="Displayz"></a>

## Display

<ol type="1">
<li> Click the Apple icon for <a href="#SysPrefs">System Preferences</a></li>
<li> Hold down Command+Option and click <strong>Displays</strong> so the Rotation selection is visible.</li>

   In the dialog for the additional screen, select 270 for the vertical screen.

   WARNING: Use of additional screens often cause the laptop fan to activate due to the additional heat from additional CPU usage.

<li> Set <strong>Resolution</strong> to <strong>Scaled</strong></li>

<li><a href="_blank" href="https://www.esolutions.se/en-GB/test">
Test Page</a> reports the screen and resolution along with browser version.</li>

   The Mac Pro 15 inch retina display is preconfigured to 
   a screen resolution of <strong>1440 wide x 900 high</strong>,<br />
   but a browser window of <strong>1440 x 738</strong>.

<li> Click one of the 5 resolutions between <strong>Larger Text</strong> and 
<strong>More Space</strong>.</li>
</ol>


## Control lights

To control Phillips Hue light bulbs from your Mac's menu bar, get and install
<a target="_blank" href="https://itunes.apple.com/us/app/colors-for-hue/id581915465?mt=12&ign-mpt=uo%3D8">
Colors for Hue 4+</a>
by Furiki Designs. Click on the hub's button.




## Sound

<a id="Setup_Sound"></a>

### Startup Sound Suppressor Applescript

Until Apple realizes how annoying it is to have that start-up sound on a Mac, 
create in the /Library/Scripts folder shell scripts containing 
osacript (<a target="_blank" rel="amphtml" href="http://en.wikipedia.org/wiki/AppleScript">Applescript</a>) commands
to mute sound automatically before reboot, and un-mute after reboot.

0. Open a terminal and type in nano. Press Enter.

   Type this in the nano editor that pops up this shell script (starting with the she-bang #! characters):

   <pre>
   #!/bin/bash
   osascript -e 'set volume with output muted'
   </pre>

0. Press Ctrl+O, then when it asks you for the filename type in 

   <tt><strong>~/Documents/mute.sh
   </strong></tt>

0. Hit Enter to save the file. This puts the mute script in your Documents folder (don't worry, we're going to move it later).

0. Create the unmute.sh script:

   <pre>
   #!/bin/bash
   osascript -e 'set volume without output muted'
   </pre>

   (In older versions the unmute script instead has 

   <tt>set volume with output unmuted</tt>.

0. Press Ctrl+X, press Y to agree, then type in 

   <tt><strong>~/Documents/unmute.sh
   </strong></tt>

0. Hit Return to save the new file, and nano should quit.

0. To make the scripts executable,
   run the following commands in the Terminal, hitting Enter after each one

   <tt><strong>sudo chmod u+x ~/Documents/mute.sh<br />
   sudo chmod u+x ~/Documents/unmute.sh<br />
   sudo mv ~/Documents/mute.sh /Library/Scripts/<br />
   sudo mv ~/Documents/unmute.sh /Library/Scripts/
   </strong></tt>

0. Set the scripts to run automatically:

   <tt><strong>sudo defaults write com.apple.loginwindow LogoutHook /Library/Scripts/mute.sh<br />
   sudo defaults write com.apple.loginwindow LoginHook /Library/Scripts/unmute.sh
   </strong></tt>

0. Close the Terminal, save data in all other apps, and reboot your machine.

0. To undo the above actions, set defaults in a Terminal window:

   <pre><strong>sudo defaults delete com.apple.loginwindow LogoutHook
   sudo defaults delete com.apple.loginwindow LoginHook
   </strong></pre>

For more about Applescript commands and hooks, see
<a target="_blank" rel="amphtml" href="https://developer.apple.com/library/mac/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html">
this</a>.



<a id="Microphonez"></a>

### Microphone Mute App #

All Macs have a microphone that picks up your voice and other sounds in your room.

BLAH: To mute the internal microphone on a Mac, 
there is NO icon among dedicated keys on the keyboard
like there is for speakers. A terrible oversight because that's just as important.

The easiest option is to get the <a target="_blank" href="https://itunes.apple.com/pl/app/mutemymicfree/id567195825?mt=12">
MuteMyMicFree</a> app by Michal Konrad Owsiak:

<img align="right" alt="mac-mutemymic-39x228-7k" width="39" height="228" src="https://user-images.githubusercontent.com/300046/27474907-5a13f936-57d1-11e7-9f9f-e314d1594d3a.png">

0. Open a web browser to
<a target="_blank" href="https://itunes.apple.com/pl/app/mutemymicfree/id567195825?mt=12">
https://itunes.apple.com/pl/app/mutemymicfree/id567195825?mt=12</a>
0. Click <strong>View in Mac Ap Store</strong>.
0. In the App Store pop-up, click <strong>Get</strong>, then <strong>Install app</strong>.
0. Click <strong>Open</strong>.
0. Click the microphone icon on the menu bar at the top of the screen:<br />
   ![mac-mutemypic-icon-60x60](https://user-images.githubusercontent.com/300046/27475483-62d2a5b6-57d3-11e7-8d3b-979576fe088f.png)

0. Click the gear icon in the pop-up.
0. Check the "Start MuteMyMic automatically during login".
0. Click the Quit button, the the other Quit button to dismiss the dialog.
0. Press command+Tab to the App Store.
0. Press Open, then Quit out the App Store.
<br /><br />

Alternately, if you're afraid of or cannot install downloaded apps,
reduce the input volume to 0:

<ol type="1">
<li> Click on the Apple logo at the upper left corner.</li>
<li> Select System Preferences.</li>
<li> Type S and click on <strong>Sound</strong>.</li>
<li> Click on the <strong>Input</strong> tab.</li>
<li> Drag the <strong>Input volume</strong> slider all the way to the left.</li>
<li> Close System Preferences.</li>
</ol>

This works by changing the audio input to the line-in, 
also known as the audio input port on your Mac. 
This method works
as long as you don't have any audio input device connected, 
such as an external microphone or some other line-in device.


<a id="HardDrivez"></a>

## Hard Drives on Mac

Older Mac Book Pros have 2.5" hard drives.
<a target="_blank" href="https://www.laptopmag.com/articles/how-to-replace-your-macbook-pros-hard-drive-with-an-ssd">
Video:</a><br />
The Seagate Thunderbolt Adapter ($99) provides the fastest connection.<br />
The Seagate USB 3.0/2.0 Upgrade Cable costs just $19.99. 

Drives in newer 2017 Mac Book Pros have SSD chip cards instead of drives.

### Disk Drive Partitions

In Linux File Systems:

Drivers for an MBR (Master Boot Record) Partition Table can handle up to <br />
<strong>2TB</strong> of disk space per partition. To list partitions:

   By design MBR contains space for only 4 primary partitions.
   One partition can be an extended partition where
   logical partitions can be defined.

Drivers for a <strong>GUID / GPT Partition Table</strong> can handle up to <br />
<strong>8 Zettabytes (ZB)</strong> of disk space per partition.

SCSI devices can have up to 15 partitions.

   0. fdisk only works on MBR.
   0. parted
   0. gdisk

The default partition type is 83 for Linux, 82 for Swap.

0. Use mkfs to create file systems.

   NOTE: File systems include XFS, ext2, ext3, ext4, ReiserFS, Btrfs (better fs), etc.

   ext is called the "extended file system".


### Disk utilities

0. Open a Terminal window.

0. List partitions:

   <pre><strong>diskutil list</strong></pre>

   It lists <strong>physical and virtual disks</strong>:

   <pre>
/dev/disk0
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *251.0 GB   disk0
   1:                        EFI EFI                     209.7 MB   disk0s1
   2:                  Apple_HFS Mac SSD                 150.0 GB   disk0s2
   3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3
   4:       Microsoft Basic Data Windows 8               100.1 GB   disk0s4
/dev/disk1
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *500.1 GB   disk1
   1:                  Apple_HFS George Garside          300.2 GB   disk1s1
   2:               Windows_NTFS GRGARSIDE               199.9 GB   disk1s2
   </pre>
   &quot;0:&quot; and other such numbers are <strong>partitions</strong>.

   The command takes the place of the Linux `lsblk` commmand.

0. Get information for a specific partition (disk0):

   <pre><strong>diskutil info /dev/disk0</strong></pre>

   The "Device / Media Name" is the partition label from the disk's partition map 
   (GPT - GUID Partition Table).
   <strong>disk0</strong> Device Media Name: such as &quot;APPLE SSD SM768E Media&quot;
   is the make and model of your drive.

   Device / Media Names are set when a partition is created on a disk. The only way you could rename the "startup partition" would be to startup from another drive. The initial name is set by Apple.
   (which Apple does not expected people to change
   and does not reference them at the CLI or GUI level).

   AOTW, Apple sells SD drives up to 750.4 GB.

   Notice that <strong>disk1</strong> is a <strong>Logical Volume on disk0s2</strong>
   with a GUID referencing disk0.

0. DOTHIS: In a Terminal window invoke:

   <pre><strong>diskutil info /dev/disk0s2</strong></pre>

   <strong>disk0s1</strong>: "EFI system partition"

   contains extended firmware for your drive.

0. DOTHIS: In a Terminal window invoke:

   <pre><strong>diskutil info /dev/disk0s1</strong></pre>

   <strong>disk0s1</strong>: "EFI system partition"<br />
   contains extended firmware for your drive.

   <strong>disk0s2</strong>: "Customer" to diskutil
   is where your files are stored.

0. DOTHIS: In a Terminal window invoke:

   <pre><strong>diskutil info /dev/disk1</strong></pre>

   appears on the Desktop as &quot;Macintosh HD&quot; system partition, 
   which can be changed by pressing Return key after clicking on it.

   <strong>disk0s3</strong>: "Recovery HD"
   is a clean install of the OS to make restoring your computer easier.

   If you add your own custom partition to the mix you will find that Apple's tools (i.e. Disk Utility) will match the visible name and the device name.

0. DOTHIS: Plug in a <strong>Time Machine</strong> drive. 
0. In a Terminal window invoke:

   <pre><strong>diskutil info /dev/disk2
   </strong></pre>

   In the list it would have 3 partitions:

   0: Apple_partition_scheme<br />
   1: Windows_FAT_32<br />
   2: Apple_HFS

0. DOTHIS: Plug in a <strong>SD card</strong>. 
 
0. In a Terminal window invoke:

   <pre><strong>diskutil list
   </strong></pre>

   In the list it would have 2 partitions:

   0: FDISK_partition_scheme<br />
   1: Windows_NTFS

0. In a Terminal window invoke:

   <pre><strong>diskutil info /dev/disk3</strong></pre>

0. DOTHIS: Plug in an <strong>external drive</strong>. 
0. In a Terminal window invoke:

   <pre><strong>diskutil list</strong></pre>

   In the list it would have 2 partitions:

   0: FDisk_partition_scheme<br />
   1: Windows_NTFS Seagate Backup Plus ...

0. DOTHIS: In a Terminal window invoke:

   <pre><strong>diskutil info /dev/disk5</strong></pre>

   &quot;Seagate BUP Slim SL Media&quot;

   According to 
   http://osxdaily.com/2014/03/20/mount-ext-linux-file-system-mac/">
   http://sourceforge.net/projects/osxfuse/files/osxfuse-2.7.5/osxfuse-2.7.5.dmg/download">
   OSX Fuse</p> 
   extend OS X's native file handling capabilities via third-party file systems
   such as ext4.

0. For static information about filesystems:

   <pre><strong>fstab
   </strong></pre>



<a id="PartitionTablez"></a>

### Hard Drive Partition Tables

DOTHIS: 
To show partition tables for a particular disk:
In a Terminal window invoke:

   <tt>sudo get show /dev/disk0</tt>

Eject the disk from the Finder (or use the unmount terminal command if you'd like). If you don't do this, you may get a Resource busy error message during the following step.

CAUTION:
Change the partition label as desired:

   <pre><strong>
   sudo gpt label -i 2 -l "My New Partition Label" /dev/rdisk0
   </strong></pre>

(replace disk0 with the relevant disk number
and replace 2 with the index number.


<a name="DiskSpaceUsage"></a>

### Disk Space Usage #

<a target="_blank" href="https://medium.com/@thomasdegry/how-sketch-took-over-200gb-of-our-macbooks-cb7dd10c8163">
One of the folks at Sketch (the Mac photo-editing tool) noticed</a> that 
Daisy Disk didn't map all the disk space usage.

0. To reveal disk usage by a file that Apple Lion uses to store copies of files to revert to any version:

   <pre><strong>sudo du -sh /.DocumentRevisions-V100
   </strong></pre>

   Resetting to zero would involve re-installs.

0. If you use an alternative backup such as Dropbox, 
   you can turn it off for a particular program:

   <pre><strong>defaults write -app ‘sketch’ ApplePersistence -bool no
   </strong></pre>

0. List using a Linux command with the -Human readable flag:

   <pre><strong>df -Hl
   </strong></pre>

   The response:

   <pre>
Filesystem                          Size   Used  Avail Capacity iused      ifree %iused  Mounted on
/dev/disk1                          499G   339G   159G    69% 3373911 4291593368    0%   /
localhost:/hTrfpXTlOnJhs5cpiEGZpI   499G   499G     0B   100%       0          0  100%   /Volumes/MobileBackups
   </pre>

   Alternately, there is a more verbose -human readable flag:

   <pre><strong>df -h
   </strong></pre>

   The response:

   <pre>
Filesystem                          Size   Used  Avail Capacity iused      ifree %iused  Mounted on
/dev/disk1                         465Gi  316Gi  148Gi    69% 3375349 4291591930    0%   /
devfs                              256Ki  256Ki    0Bi   100%     884          0  100%   /dev
map -hosts                           0Bi    0Bi    0Bi   100%       0          0  100%   /net
map auto_home                        0Bi    0Bi    0Bi   100%       0          0  100%   /home
localhost:/hTrfpXTlOnJhs5cpiEGZpI  465Gi  465Gi    0Bi   100%       0          0  100%   /Volumes/MobileBackups
kbfs@kbfuse0                        10Gi    0Bi   10Gi     0%       0          0  100%   /keybase
   </pre>


   ### inodes

   Under the `iused` and `ifree` columns are the number of <strong>inode</strong> entries 
   used and free. The total allocated of 4,294,967,279 is fixed at system creation.


<a id="Hardware"></a>

## Peripherals - Thunderbolt miniports

The squarish holes are <strong>thunderbolt</strong> ports
for devices such as hard drives, monitors, etc.
Apple sells adapters for connecting to DVI, HDMI, and VGA monitors as well as LN45 Ethernet.

The <strong>MiniDisplay</strong> Port is compatible only with Display Port compatible devices, 
such as an external monitor from Apple. 

There are 2 squarish miniports, 
so you can <strong>chain</strong> up to 10 thunderbolt devices.

   PROTIP: A display that isn't compatible with Thunderbolt must be the last one in the chain.

Thunderbolt can transfer at speeds up to 20Gbps (higher speeds than USB).


### USB drives

BLAH: Apple's DVD drives don't play BluRay video DVDs.

To watch BluRay disks, get a Samsung external drive and software.

QUESTION: On Mac OS X, the Xcode developer suite includes the USB Proper.app app found in /Developer/Applications/Utilities/. 

To list USB ports, use this Linux command brought to MacOS by
https://github.com/jlhonora/lsusb

   <pre><strong>brew tap jlhonora/lsusb && brew install lsusb
   lsusb
   </strong></pre>

   An example response for my machine:

   <pre>
Bus 026 Device 001: ID 8087:0024 Intel Corporation Hub 
Bus 026 Device 003: ID 05ac:8510 Apple Inc. FaceTime HD Camera (Built-in)  Serial: CC2F8K0G1JDN9KE0
Bus 029 Device 001: ID 8087:0024 Intel Corporation Hub 
Bus 029 Device 002: ID 0424:2512 SMSC Hub 
Bus 029 Device 004: ID 05ac:0262 Apple Inc. Apple Internal Keyboard / Trackpad 
Bus 029 Device 003: ID 0a5c:4500 Broadcom Corp. BRCM20702 Hub 
Bus 029 Device 005: ID 05ac:8286 Apple Inc. Bluetooth USB Host Controller 
Bus 020 Device 012: ID 045e:0040 Microsoft Corporation Microsoft 3-Button Mouse with IntelliEye(TM) 
Bus 000 Device 001: ID 1d6b:IPCI Linux Foundation USB 2.0 Bus 
Bus 000 Device 001: ID 1d6b:IPCI Linux Foundation USB 2.0 Bus 
Bus 000 Device 001: ID 1d6b:IPPT Linux Foundation USB 3.0 Bus 
   </pre>

The above uses the built-in utility
<tt>/usr/sbin/system_profiler SPHardwareDataType</tt>

## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
