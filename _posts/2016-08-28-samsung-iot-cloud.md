---
layout: post
title: "Samsung IoT Cloud"
excerpt: "It can take it"
tags: [Clouds, IoT]
date: "2016-08-28"
file: "samsung-iot-cloud"
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

This is a hands-on narrated tour on how to make use of Samsung's IoT cloud.

It helps if you have already absorbed the tutorial about 
[IoT ideas](/iot-ideas/).

{% include _intro.html %}

<hr />

## Explore #
0. In an internet browser, look at the various businesses described at<br />
   <a target="_blank" href="https://www.artik.io/overview/">
   <strong>https://www.artik.io/overview</strong></a><br />

   * <a href="#DevicesHardware">Samsung's <strong>modules</strong> (IoT device hardware)</a>
   * Samsung's TIZEN operating system
   * IoTivity communications
   * Samsung's ARTIK Cloud, which Samsung calls an
   "open data exchange platform that enables any device or sensor to push its data to the cloud".
   <br /><br />

   QUESTION: What does ARTIK stand for?
   It's rebranded from SAMI in 2016.


0. In a new tab/window, look at Samsung's home product page:<br />
   <a target="_blank" href="https://artik.cloud">
   <strong>https://artik.cloud</strong></a>

0. Click PRICING to see that Hobbyists get free access, but data is kept only 3 months.

   PROTIP: Part of the design and task of any system is analytics over time.
   Many organizations extract the information for display using
   Tableau or other corporate-standard analytics tool to more easily
   integrate other corporate data into a single "pane of glass"
   common among Marketing, Finance, Operations, etc.

0. Click <a target="_blank" href="https://artik.cloud">
   SIGN-UP</a> and type your email to get their newsletters.

0. Click <a target="_blank" href="https://developer.artik.cloud/">
   DEVELOPER</a> on the right side of the menus for<br />
   <a target="_blank" href="https://developer.artik.cloud/">
   <strong>https://developer.artik.cloud</strong></a>

0. https://developer.artik.io/documentation/tutorials/

0. <a target="_blank" href="https://www.artik.io/blog/cloud/">
   artik.io/blog/cloud</a>
   has lots of great articles about applications.

The above you only need to do once.


### Samsung projects #

*   <a target="_blank" href="https://www.hackster.io/monica/getting-started-with-artik-cloud-grove-weather-station-e0b4e3?ref=part&ref_id=9403&offset=0">
   demo on hackster.io</a>

   <a target="_blank" href="http://bit.ly/ACHackJJ">
   Samsung's Challenge</a>
   sends winning participants $100 


<a name="DeviceType"></a>

## Add Samsung device type #

You need to do this for each type of device you use.

0. If you select DASHBOARD > DEVICE TYPES from the website, you get to click another button
   to really add NEW DEVICE TYPE at <br /><a target="_blank" href="https://developer.artik.cloud/dashboard/devicetypes/new">
   <strong>https://developer.artik.cloud/dashboard/devicetypes/new</strong></a>
   
   This is for adding types of devices.

   There is also a list at<br />
   <a target="_blank" href="https://artik.cloud/works-with/">
   https://artik.cloud/works-with</a>

   The wish list of device types to include:<br />
   <a target="_blank" href="https://artik.cloud/challenge/most-wanted-devices/">
   https://artik.cloud/challenge/most-wanted-devices</a>

0. To select a known device type, open a new tab/window at<br />
   <a target="_blank" href="https://artik.cloud/my/new_device">
   <strong>https://artik.cloud/my/new_device</strong></a><br />
   to look at the many device types ARTIK already supports.

   QUESTION: Is there a menu from the website that takes you here?

0. Scroll to select <strong>SAMI Gear Fit</strong>.

   The device is used in<br /><a target="_blank" href="https://developer.artik.cloud/documentation/introduction/hello-world.html">
   https://developer.artik.cloud/documentation/introduction/hello-world.html</a><br />
   which steps you through connecting a "SAMI Gear Fit" type device 
   even though one doesn't need a physical device.

0. PROTIP: Add a number in the name suggested. You may have more than one, 
   or want different variations later.

0. Click CONNECT DEVICE...

   This takes you to<br /><a target="_blank" href="https://artik.cloud/my/devices">
   <strong>https://artik.cloud/my/devices</strong></a>


   ### Samsung API console #

0. Open yet another tab/window<br /><a target="_blank" 
   href="https://developer.artik.cloud/api-console/">
   <strong>https://developer.artik.cloud/api-console</strong></a><br />

0. PROTIP: You'll come back to this often, so bookmark it on your browser.

0. Click "Accept" to allow Samsung the permissions listed:

   <pre>
The application API Console is requesting the following permissions to be granted:
&nbsp;
Read all your data.
Write and modify all your data.
Read data from devices of types:
Send data to devices of types:
Read your profile information
Internal use only. Edit your profile information
   </pre>

0. Click "Accept" to dismiss the cookie message at the bottom.

   <a name="APIdomains"></a>

   ### API List in SDKs #

   The <a target="_blank" href="https://github.com/artikcloud/artikcloud-java/tree/master/src/main/java/cloud/artik/api">
   Java/Android SDK has these classes</a> 
   making API calls:

   * <strong>DeviceTypes</strong> of manifests with versions and properties
   * <strong>Devices</strong> have their tokens
   * <strong>Export</strong> of messages
   * <strong>Messages</strong>
   * <strong>Registrations</strong>
   * <strong>Rules</strong>
   * <strong>Tags</strong>
   * <strong>Tokens</strong>
   * <strong>Users</strong> and their devices and device types and properties
   <br /><br />

   For example, "UsersApi.java" is equivalent to 
   "users_api.py" in 
   <a target="_blank" href="https://github.com/artikcloud/artikcloud-python/tree/master/artikcloud/apis">Python</a>. 
   Swift, Scala, Ruby, PHP, C#, JavaScript, etc. 
   have their own variation of name.

   Additional classes in the Console but not in client samples:

   * notifications by subscription
   * trials for applications
   * trial devices and devicetypes
   * trial invitations to participants by administrators
   * scenarios ???
   * <a target="_blank" href="https://developer.artik.cloud/documentation/introduction/the-manifest.html">
   manifests</a> are used to interpret the content so that it can be stored properly, or be sent to targeted devices correctly. Libraries of manifest models:

   * import cloud.artik.model.ManifestVersionsEnvelope;
   * import cloud.artik.model.DeviceTypeEnvelope;
   * import cloud.artik.model.DeviceTypesEnvelope;
   * import cloud.artik.model.ManifestPropertiesEnvelope;
   <br /><br />

   The libraries that operate on the classes in the Java SDK are:

   * import cloud.artik.client.ApiCallback;
   * import cloud.artik.client.ApiClient;
   * import cloud.artik.client.ApiException;
   * import cloud.artik.client.ApiResponse;
   * import cloud.artik.client.Configuration;
   * import cloud.artik.client.Pair;
   * import cloud.artik.client.ProgressRequestBody;
   * import cloud.artik.client.ProgressResponseBody;
   <br /><br />

   A full description of Samsung's REST API is 
   <a target="_blank" href="https://developer.artik.cloud/documentation/api-reference/rest-api.html">
   here</a>.

   Swagger definitions are supposed to be at<br />
   <a target="_blank" href="https://catalog.artik.cloud/">
   https://catalog.artik.cloud</a> but there is a 503 error at time of writing.

   
   ### API Map #

> Let me know if this artwork helps you visualize Samsung's API:

   <amp-img layout="responsive" alt="iot-samsung-apis-v02-650x318-145kb.png" width="650" height="318" src="https://cloud.githubusercontent.com/assets/300046/18103721/091ec246-6eb5-11e6-9d3b-de42c451d835.jpg"></amp-img>
   Words in bold are the first level names in the path.
   Words in italics are variables.


   TODO: Create illustration programmatically using http://apispots.com/projects/swaggered/


### Get Samsung user access token #

0. Click the "GET" associated with /users/self.

   <a name="Endpoint"></a>

   #### Service end-point #

0. Click <strong>TRY IT!</strong> button for the website to issue a request using the
   <strong>API endpoint</strong> shown:
   <pre><strong>
   https://api.artik.cloud/v1.1/users/self
   </strong></pre>

   BTW, there are other end-points for other protocols:
   <pre><strong>
   <a target="_blank" href="http://coap.technology/">COAP://</a>
   MQTT:
   </strong></pre>

   TROUBLESHOOTING:
   If you get the following message, it means you need to login again:

   <pre>
   {"error":{"code":401,"message":"Please provide a valid authorization header"}}
   </pre>

   The request's HTTP header contains the OAuth2 calculated by the client JavaScript:

   <pre>
   "Content-Type": "application/json",
   "Authorization": "Bearer 471dd09f20f140888a650f3aeec70xxx"
   </pre>

   <a target="_blank" href="https://developer.artik.cloud/documentation/api-reference/">
   The docs</a> say messages sent to ARTIK Cloud may not be bigger than 
   <strong>1 KB</strong>.

   QUESTION: How long does the 32-character token live?

   A access token can be used (refreshed) for <a target="_blank" href="https://developer.artik.cloud/documentation/introduction/authentication.html#refresh-a-token">
   up to 14 days</a>.

   The response HTTP header:

   <pre>
   {
    "allow": "*",
    "content-type": "application/json; charset=utf-8",
    "x-rate-limit-limit": "100/1000",
    "x-rate-limit-reset": "1472315008/1472342400",
    "x-rate-limit-remaining": "99/999",
    "access-control-allow-origin": "*",
    "access-control-allow-headers": "Origin, X-Requested-With, Content-Type, Accept, Referer, User-Agent, Authorization",
    "access-control-allow-methods": "POST, GET, PUT, DELETE, OPTIONS",
    "date": "Sat, 27 Aug 2016 16:22:28 GMT",
    "content-length": "249",
    "connection": "close"
    }
   </pre>

   PROTIP: Have your client read the "x-rate-limit-remaining": ("99/999")
   and not send more traffic if it's down to zero.

   THANK YOU Samsung.
   Many other API services do not have this useful feature.

   <a name="SamsungUserId"></a>

   ### userId #

   The response HTTP body reflects information about the user:

   <pre>
{
    "data": {
        "id": "075fddff2a984cda87f2d718f4d04xxx",
        "name": "sa4fb30b78564a73884af4e03dcc40xx",
        "email": "wilsonmar@gmail.com",
        "fullName": "WILSON MAR",
        "saIdentity": "<strong>pigg1dynic</strong>",
        "accountType": "SAMSUNG",
        "createdOn": 1470056152000,
        "modifiedOn": 1470056152000
    }
}
   </pre>

   The "createdOn" and "modifiedOn" are the number of milliseconds since 
   1/1/1970 (the epoch). The last 3 of the 13 digits are always zeros.

   PROTIP: Convert back to human-readable date/time
   using the online tool at <a target="_blank" href="http://www.epochconverter.com/">
   <strong>http://www.epochconverter.com</strong></a>

   PROTIP: The userId is a persistent value. Once assigned, it is not changed.
   The system's reference to the userId enables the user fullName to change.

0. Highlight the id's value from the response for use later in this tutorial.

   Developers working on API client code would copy the id to a <strong>properties</strong>
   file such as the one in folder
   <a target="_blank" href="https://github.com/artikcloud/artikcloud-java/blob/master/src/test/resources/artik.properties">
   src/test/resources/artik.properties</a>

   <pre>
user1.id=04ddbd35d57d4d7b8f07f219c44457b2
user1.name=maneesh
user1.fullname=Maneesh Sahu
user1.token=fa460261b858484583097ecb331faaa8
user1.email=maneesh.sahu@ssi.samsung.com
user1.aid=b6951bf387b84f63b38911ae35d65e28
user1.createdon=1406839290000
   </pre>

   The same file also contains id and tokens for each device.

   BLAH: Samsung's API does not make use of the "HATEOS" pattern,
   which returns with each request a list of calls next permissible.


   ### Samsung User Properties #

0. Highlight and copy into your Clipboard (with Ctrl+C)
   the value of <a href="#SamsungUserId">"id"
   ("075fddff2a984cda87f2d718f4d04xxx" in the example above)</a>.
   
   This is what the API calls your <strong>userId</strong>.

   <a target="_blank" href="https://developer.artik.cloud/documentation/introduction/administrative-apis.html">
   The application ID is specified in the JSON payload.</a>



<a name="DevicesHardware"></a>

## Samsung's own IoT Device modules #

Samsung manufacturers IoT devices
<a target="_blank" href="http://www.digikey.com/en/product-highlight/s/samsung-led/artik">
sold online by electronics distributor Digikey</a>

<a target="_blank" href="https://www.artik.io/modules/overview/artik-10/">
The $150 ARTIK 10's</a> quad-core ARM video and image processors are powerful enough for 
autonomous vehicle navigation, intensive 3D graphics or large immersive displays.
All in a form factor of 29 x 39 x 1.3 mm.
More importantly, its hardware works with the ARM TrustZone® and 
Trustonic’s Trusted Execution Environment (TEE) 
to provide “bank level” security end-to-end
for 5GHz WiFi 802.11a/b/g/n/ac, Bluetooth 4.1 + LE,
ZWave, and ZigBee 802.15.4 Thread planned 
radios. 

(No snooping the snoopers for you!)

<a target="_blank" href="https://www.artik.io/modules/overview/artik-5/">
The $99 ARTIK 5</a> has the same radios, but in a 30 x 25 mm footprint.

Ships with Fedora 22.

* https://developer.artik.io/documentation/getting-started-beta/
* https://vimeo.com/151092340?from=outro-embed
* https://www.hackster.io/stephanick/let-s-get-started-the-artik-5-beta-development-board-14f458

   The devices Samsung offers have a microphone and speaker port, so
   <a target="_blank" href="https://developer.artik.io/documentation/tutorials/say-hello.html">
   make it speak</a>.

* https://www.youtube.com/watch?v=Wsj9pZml_18
   Introduction to Eclipse Che: Customizable, RESTful Developer Workspaces Eclipse Foundation 

* <a target="_blank" href="http://www.openhab.org/">
   OpenHAB.org</a> platform for Home Automation

<hr />

<a name="DeviceSimulator"></a>

## Samsung Device Simulator #

   Docs about this is <a target="_blank" href="https://developer.artik.cloud/documentation/tools/device-simulator.html">
   here</a>.

0. Make sure you have Java <strong>JDK v8 update 77 or higher</strong>.
   In a Terminal shell window:

   <tt><strong>
   java -version
   </strong></tt>

   The response (30 Aug 2016):

   <pre>
java version "1.8.0_102"
Java(TM) SE Runtime Environment (build 1.8.0_102-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.102-b14, mixed mode)
   </pre>

   Upgrade if necessary.
   See my [Java install on Mac tutorial](/java-on-apple-mac-osx/).

0. Download Samsung's Device Simulator Java program from<br />
    <a target="_blank" href="https://developer.artik.cloud/documentation/downloads/device-simulator.jar">
    https://developer.artik.cloud/documentation/downloads/device-simulator.jar</a><br />
    into your Downloads folder.

0. Open a new Terminal window, navigate to the Downloads folder 
   to construct the command:

   <tt><strong>
   cd ~/Downloads<br />
   java -jar device-simulator.jar -token=
   </strong></tt>

0. Temporarily return to the API webpage to copy and 
   paste the 32-character user id token highlighted earlier.

   PROTIP: Move the jar file to a separate folder and create a 
   shell script to do this if you'll be doing this.

   TROUBLESHOOTING:
   If you get the message "Error: Unable to access jarfile device-simulator.jar",
   do a pwd to see if the jar file is there to use.


   The response begins with this ASCII art:

   <pre>
    _         _   _ _  __   ____ _                 _ 
   / \   _ __| |_(_) |/ /  / ___| | ___  _   _  __| |
  / _ \ | '__| __| | ' /  | |   | |/ _ \| | | |/ _` |
 / ___ \| |  | |_| | . \  | |___| | (_) | |_| | (_| |
/_/   \_\_|   \__|_|_|\_\  \____|_|\___/ \__,_|\__,_|
Welcome to ArtiK Cloud Device Simulator console
   </pre>   

   An example of the rest of the response:

   <pre>
Hello sa4fb30b78564a73884af4e03dcc40xx! your UID is 075fddff2a984cda87f2d718f4d04xxx and your email is wilsonmar@gmail.com :)
Please enter a valid command or ? for help.
java.io.UnsupportedEncodingException: utf-
  at sun.nio.cs.StreamEncoder.forOutputStreamWriter(StreamEncoder.java:61)
  at java.io.OutputStreamWriter.&LT;init>(OutputStreamWriter.java:100)
  at jline.console.ConsoleReader.&LT;init>(ConsoleReader.java:231)
  at jline.console.ConsoleReader.&LT;init>(ConsoleReader.java:221)
  at jline.console.ConsoleReader.&LT;init>(ConsoleReader.java:209)
  at simulator.Console.init(Console.java:64)
  at simulator.Main.main(Main.java:14)
   </pre>

   QUESTION: If the "data: id" token was entered,
   the response is:

   <pre>
cloud.artik.client.ApiException: Unauthorized
  at cloud.artik.client.ApiClient.handleResponse(ApiClient.java:838)
  at cloud.artik.client.ApiClient.execute(ApiClient.java:773)
  at cloud.artik.api.UsersApi.getSelfWithHttpInfo(UsersApi.java:115)
  at cloud.artik.api.UsersApi.getSelf(UsersApi.java:102)
  at simulator.Console.whoami(Console.java:203)
  at simulator.Console.init(Console.java:59)
  at simulator.Main.main(Main.java:14)
The access token is not valid or expired.
Please enter a valid command or ? for help.
java.io.UnsupportedEncodingException: utf-
  at sun.nio.cs.StreamEncoder.forOutputStreamWriter(StreamEncoder.java:61)
  at java.io.OutputStreamWriter.&LT;init>(OutputStreamWriter.java:100)
  at jline.console.ConsoleReader.&LT;init>(ConsoleReader.java:231)
  at jline.console.ConsoleReader.&LT;init>(ConsoleReader.java:221)
  at jline.console.ConsoleReader.&LT;init>(ConsoleReader.java:209)
  at simulator.Console.init(Console.java:64)
  at simulator.Main.main(Main.java:14)
   </pre>

   #### Device Emulator commands #

   If successful, commands can be entered.

   <tt><strong>
   ?
   </strong></tt>


## Samsung cloud connectors #

   At time of writing, the clouds at https://artik.cloud/works-with/ 
   include most of the early cloud APIs:

   * <a target="_blank" href="http://openweathermap.org/">OpenWeatherMap</a>
   * <a target="_blank" href="https://www.nettamo.com/">Nettamo</a> (France) elegant indoor face recognition cameras and CO2 sensor stations 
   
   * Twitter
   * Foursquare
   * Instagram ?
   
   * FitBit
   * iHealth
   * Jawbone
   * Moves
   * Runkeeper
   * Withings.com smartwatches and scales
   
   * Nest Thomstate (Google)
   * Philips Hue

https://developer.artik.cloud/documentation/introduction/authentication.html#authorization-code-method

   ### OpenWeatherMap #

https://www.artik.io/blog/2016/08/make-iot-weather-station-artik-cloud/
using an Arduino Uno running Sketch collecting from a DHT11 Temperature sensor
and a Raspberry Pi running Node.js.


<a name="Rules"></a>

## Rules #


<a name="Trials"></a>

## Trials #

   An ARTIK Cloud trial is a way for a trial administrator (user) 
   to <strong>invite</strong> other users to share their data 
   for a controlled amount of time and set of device types.

   <a target="_blank" href="https://github.com/samsungsamiio/sami-trials-webapps">
   https://github.com/samsungsamiio/sami-trials-webapps</a>
   by 
   http://developer.samsungsami.io/
   now redirects to https://developer.artik.cloud/

   <a target="_blank" href="https://developer.artik.cloud/documentation/advanced-features/data-collection-with-trials.html">
   Docs about this</a> are under the "Advanced" section.

<a name="Charts"></a>

## View charts #

Check it out

<a name="Export"></a>

## Export from ARTIK #

Check it out

<hr />

## Social #

Twitter: 
<a target="_blank" href="https://twitter.com/@ARTIKCLoud/">
@ARTIKCLoud</a>,
<a target="_blank" href="https://twitter.com/@SamsungIoT/">
@SamsungIoT</a>,

Email: <a target="_blank" href="mailto:developer@artik.cloud">developer@artik.cloud</a><br />
answered by Developer Evangelists<br />
<a target="_blank" href="https://www.linkedin.com/in/jswatton/">
   Jeanine (Swatton) Jue</a><!-- j.jue@samsung.com -->
of the Samsung Strategy and Innovation Center.

* <a target="_blank" href="https://www.linkedin.com/in/yujingwu">
   Dr. Yujing Wu</a> (@yujingwu)

* <a target="_blank" href="https://www.youtube.com/watch?v=IgRkOr-oSNw">
   SDC 2016</a> by Dan Gross

* <a target="_blank" href="https://www.youtube.com/channel/UCkDAwuCKUcY1qn-hgNv0kLw">
   YouTube: sansung_dev channel</a> 

LinkedIn jobs shows Samsung America being based in Seattle and Bellevue, Washington.
Smart Home in Mountain View, California.
Home Appliances in Rigefield Park, New Jersey and Minneapolis, Minnesota.

*  <a target="_blank" href="https://www.artik.io/blog/cloud/">
   artik.io/blog/cloud</a>
   is the user forum.


* https://github.com/artikcloud/sample-iot-weatherstation

Dan Gross, Director of Technical Support, Samsung

Wei Xiao, Tech Evangelist, Sr. Staff Engineer, Samsung


## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}
