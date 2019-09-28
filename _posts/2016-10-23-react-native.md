---
layout: post
title: "React Native"
excerpt: "Yes, it's getting ripe for production"
tags: [mobile, dev]
date: "2016-10-23"
file: "react-native"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14624073/7b96364a-0594-11e6-9643-06decef9dbfd.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This post contains my random notes on how to create cross-platform mobile apps 
using React Native.

Those who "played" with React Native when it was first released by
Facebook in 2015 knew that it wasn't ready to completely replace native
development.

But the architecture has promise, and the 
development approach solves a big problem
with multiple code bases for iOS and Android.

Thanks to the persistence of the 200+ developers at 
<a target="_blank" href="https://www.youtube.com/channel/UCFXVPytLSv9ojAMgBIDh_qA">
Wix.com</a>
<a target="_blank" href="https://www.youtube.com/watch?v=abSNo2P9mMM">
led by Tal Kol</a>, 
it's now nearly ready.

<a target="_blank" href="https://www.youtube.com/watch?v=9VqVv_sVgv0">
Tal Kol - Intro. to React Native Performance</a>


> Let me help you with this. Call me!

<hr />


<a name="DevApproaches"></a>

## Development Approaches

There are several approaches to developing mobile apps:

 * Native development requires a lot of skill

 * <strong>"Hybrid"</strong> apps are downloaded from mobile app stores like native apps.

    However, such apps display within a browser window.
    The Apache Cordova library <strong>dynamically</strong>converts JavaScript to 
    handle native hardware components to play video, etc.

   This approach is similar to Ionic from Google, jQuery mobile, and
   Sensha using Cordova libraries that renders JavaScript within a browser view on mobile devices.

    This renders much slower than native apps.
   
    However, this is a flexible approach because changes to apps can be released immediately
   rather than waiting for users to update the app (which many do not do).

    <a href="#Reapp">Reapp</a> is such an app.
    Alas, the main contributor Nate Wienert (https://github.com/natew) 
    is not maintaining it, but there hasn't been any blogpost or message on the reapp website telling developers that the framework is no longer maintained, which we think is a rather poor way of discontinueing an open source project.

    NOTE: https://github.com/touchstonejs/touchstonejs
    http://touchstonejs.io is the next hope.

 * https://facebook.github.io/react-native/
   React Native <strong>compiles</strong> JavaScript code into
    native UI elements used to develop mobile app, 
    nearly as if Swift was used to write the iOS app.

   ![react native rendering steps](https://cloud.githubusercontent.com/assets/300046/13196703/baf6997a-d78a-11e5-8362-b0cb8a717c93.PNG)
   from "How React Native Works" in <a href="#Swanepoel_2015">Swanepoel's tutorial</a>.

   0. Developers code in JSX declarative mark-up, as with normal React coding.

   0. The Reactive Native compiler creates JavaScript

   0. JSCore bridge loads into <a target="_blank" href="http://trac.webkit.org/wiki/JavaScriptCore">
      JavaScriptCore</a>, the same JavaScript engine that powers Apple’s Safari.

   0. Objective-C code is then compiled as other native iOS code.


   <img width="999" alt="react redux flow" src="https://cloud.githubusercontent.com/assets/300046/12704033/af5bc36c-c806-11e5-8bd9-a2bfbcde35a5.png">



<a name="SetupWindows"></a>

## Setup on Windows for Android

![released 15 September 2015](https://code.facebook.com/posts/1189117404435352)

To work with React-Native on a Windows 7 or 10 machine:

  * https://facebook.github.io/react-native/docs/android-setup.html

  * http://developer.android.com/sdk/index.html

  * Gradle

  * https://www.visualstudio.com/en-us/features/msft-android-emulator-vs.aspx
    download vs-emulator.exe to install
    Visual Studio 2015
    with a free Android emulator that is hardware accelerated via Hyper-V.

To use it with react-native you just have to add a key and value to your registry:

0.    Open the Run Command (Windows+R)
0.    Enter regedit.exe
0.    In the Registry Editor navigate to HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Android SDK Tools
0.    Right Click on Android SDK Tools and choose New > String Value
0.    Set the name to Path
0.    Double Click the new Path Key and set the value to C:\Program Files\Android\sdk. The path value might be different on your machine.
0. Run the command adb reverse tcp:8081 tcp:8081 with this emulator.
0. Restart the emulator
0. Do react-native run-android as usual.


<a name="SetupMac"></a>

## Setup on a Mac

To work with React-Native on a Mac:

0. Install the lates XCode from the Apple AppStore, which takes up 2 Gigabytes.

0. Install Command Line Tools from menu Xcode -> Preferences -> Downloads

0. Download the Android Studio installer .dmg file from:<br />
   <a target="_blank" href="https://developer.android.com/studio/index.html">
   https://developer.android.com/studio/index.html</a>
   (after agreeing to their terms).

   android-studio-ide-145.3360264-mac on 2016 is 440MB

0. In Finder, within the Applications folder,
   drag the previous version of Android Studio to delete it.

0. Follow the steps
   <a target="_blank" href="https://developer.android.com/studio/install.html">
   in this video to install the .dmg</a>

   (Launch the .dmg file.
   Drag and drop Android Studio into the Applications folder, then launch Android Studio.
   Select whether you want to import previous Android Studio settings, 
   then click OK.)

0. PROTIP: In Finder Devices, eject Android Studio installer
   and delete the .dmg file.

0. PROTIP: If you haven't already, in Finder 
   define a folder path to your project, such as:

   <tt><strong>
   ~/gits/wilsonmar/android/android-myproject1
   </strong></tt>

   Replace "wilsonmar" with your GitHub user name and "andoroid-myproject1"
   with whatever you want to name your project.

0. Run "pwd" to get the full path into your Mac's Clipboard.

0. Open Android Studio. 

0. Click "I do not have a previous version of Studio or I do not want to import"
   or paste the path. Click OK.

0. If the Welcome screen appears (for first-time users), click Next.
   Click Standard, Next.

0. Copy the <strong>SDK Path</strong> and click Finish:

   <pre>
   /Users/mac/Library/Android/sdk
   </pre>

0. While you wait for the 736 MB download from<br />
   <a target="_blank" href="http://developer.android.com/sdk/index.html">
   http://developer.android.com/sdk/index.html</a>.

   When prompted, provide your password to HAXM installation.



0. Edit <tt>~/.bash_profile</tt> to set environment variable:
  
   ```
   export ANDROID_HOME=/Users/mac/Library/Android/sdk
   ```   

   On Windows:

   <tt><strong>
   C:\Users\PC\AppData\Local\Android\sdk...
   </strong></tt>

0. Restart the Terminal session so the changes take.

0. In Finder open a new Finder Window and navigate to the path above.
   When the download completes, you shoul have:

   ???


<a name="AndroidHelp"></a>

Get setup for help on Android:

* https://twitter.com/AndroidDev


## Install React-Native on Mac

The React.js logo ( bit.ly/reactjs-logo - changes were made ) 
belongs to Facebook and is available under CC BY 4.0 license ( 
bit.ly/reactjs-logo-license ). 
React was open-sourced by Facebook, and thus its Github location:

 * <a target="_blank" href="https://facebook.github.io/react-native/"> 
 https://facebook.github.io/react-native</a> 
 rendered from
   https://github.com/facebook/react-native


Most tutorials assume developer utilities are installed:


<a name="EntryPoint"></a>

## Create Entry Point

Unlike web desktop React apps which uses index.html, the
React Native compiler for Android looks for a file specifically named 
<strong>index.android.js</strong>.

   ```
   var React = require('react-native');
   ```


<a name="SetupReactNative"></a>

## Install React Native

0. Create a Git repo on your local machine.

   Each repo installs dependencies in either the global cache or in its own
   <strong>node_modules</strong> subfolder. 

   NOTE: React Native mobile apps need to have all dependencies stored in 
   a node_modules folder within the app's folder
   so the app can run stand-alone.

In a Terminal at any folder:

0. Update the npm cache:

   ```
   npm update
   ```

0. Install globally from any folder:

   ```
   npm install -g react-native-cli
   ```
 
   The response under my "mac" user account:

   ```
/Users/mac/.nvm/versions/node/v6.8.1/bin/react-native -> /Users/mac/.nvm/versions/node/v6.8.1/lib/node_modules/react-native-cli/index.js
/Users/mac/.nvm/versions/node/v6.8.1/lib
└─┬ react-native-cli@1.0.0 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.0.0 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├── minimist@1.2.0 
  ├─┬ prompt@0.2.14 
  │ ├── pkginfo@0.4.0 
  │ ├─┬ read@1.0.7 
  │ │ └── mute-stream@0.0.6 
  │ ├── revalidator@0.1.8 
  │ ├─┬ utile@0.2.1 
  │ │ ├── async@0.2.10 
  │ │ ├── deep-equal@1.0.1 
  │ │ ├── i@0.3.5 
  │ │ ├─┬ mkdirp@0.5.1 
  │ │ │ └── minimist@0.0.8 
  │ │ ├── ncp@0.4.2 
  │ │ └─┬ rimraf@2.5.4 
  │ │   └─┬ glob@7.1.1 
  │ │     ├── fs.realpath@1.0.0 
  │ │     ├─┬ inflight@1.0.6 
  │ │     │ └── wrappy@1.0.2 
  │ │     ├── inherits@2.0.3 
  │ │     ├─┬ minimatch@3.0.3 
  │ │     │ └─┬ brace-expansion@1.1.6 
  │ │     │   ├── balanced-match@0.4.2 
  │ │     │   └── concat-map@0.0.1 
  │ │     ├── once@1.4.0 
  │ │     └── path-is-absolute@1.0.1 
  │ └─┬ winston@0.8.3 
  │   ├── colors@0.6.2 
  │   ├── cycle@1.0.3 
  │   ├── eyes@0.1.8 
  │   ├── isstream@0.1.2 
  │   ├── pkginfo@0.3.1 
  │   └── stack-trace@0.0.9 
  └── semver@5.3.0 
   ```


0. List what's in the global cache:

   ```
   npm list -g
   ```


<a name="SampleApps"></a>

## Sample Apps

To get started, let's first look at sample React Native apps.


* https://github.com/facebook/react-native/tree/master/Examples
  has several examples: 

   * ![Movies](https://github.com/facebook/react-native/tree/master/Examples/Movies) 
     demonstrates basic concepts, such as fetching data, 
    rendering a list of data including images, and navigating between different screens.

   * TicTacToe
   * UIExplorer
   * 2048 game

*   ??? in the Android Play store
    was developed based on the tutorial at
    https://www.udemy.com/reactnative/learn/#/ with
    https://github.com/StephenGrider/ReactNativeCasts
    shows how to use ES5 to build a list app
    using default properties and text formatting functions.


* https://jsfiddle.net/reactjs/69z2wepo/
  provides a bare-bones example displaying hello world using React 0.13.3
   and the library at:


<a name="i18n"></a>

## Internationalization

The app that I show makes use of the internationalization library from Yahoo.




<a name="Reapp"></a>

## Reapp Hybrid App

http://reapp.io/
Reapp binds React code to a cross-platform UI-Kit, 
creating true <strong>hybrid apps</strong>.

 * https://www.railslove.com/stories/makerist-mediathek-mobile-app-react-native?locale=de-DE is a testimonial of a developer using it (November 2015).
   They needed to use Objective-C to add native components needed:
   video player, file download progress, Airplay, and PDF Viewer.

 * https://github.com/reapp/kitchen-sink
    is demo'd at
    http://kitchen.reapp.io/
    which shows off many UI-Kit components in a single app.

    It is a homage to the same features built using tools from
    [Sencha](http://dev.sencha.com/extjs/5.1.0/examples/kitchensink/#all) 
    and
    [Appcelerator](https://github.com/appcelerator/KitchenSink)

 * https://github.com/reapp/hacker-news-app
    has a demo site on http://hn.reapp.io/
    and iOS app from
    https://itunes.apple.com/us/app/hacker-news-by-reapp/id972297110?mt=8

    Having the source makes it hackable with APIs
    
    * add a text-to-speech 
    * translate text to other languages
    * show maps of recognizable place names
    * dialer to recognizable phone numbers

    Nate Wienert's comments on https://news.ycombinator.com/item?id=9025812


<a name="NewReapp"></a>

### New Reapp app

Here are steps adapted from http://reapp.io/start.html#example-apps 

0. Install Reapp globally: `npm install -g reapp`
0. Verify access to the command line command reapp.
0. Position pwd to a git folder under your user/project. For example:

   ```
   cd ~/gits
   cd wilsonmar
   ```

0. Have Reapp create a new folder with the name of your app ("reapp1").

   ```
   reapp new reapp1
   cd reapp1
   ```

   This performs git clone https://github.com/reapp/starter-default
   for you, more convenient than other samples.


0. Initialize the app for versioning by git.
0. Install the app `npm install` which implements package.json.
0. Run the app generated in debug mode:

   ```
   reapp run -V && reapp run -d
   ```
   
   NOTE: Kudos to a message such as "Build took 0.518 seconds",
   which shows the professionalism of the Reapp team.
   
   Alternately, there is an option to specify run in the 
   production environment:

   ```
   reapp run -e production
   ```

0. http://localhost:3011/

   BLAH: A blank screen appears.

0. http://localhost:3011/

   `Cannot GET /main.js`

0. In Finder, navigate to /Users/wmar/ws/reapp1/reapp1/assets/ios
   (where you'll replace wmar with your user ID).

0. Open the index.html file with your text editor (Sublime, Atom, etc.)
   Notice the line:

   ```
    <script src="cordova.js"></script>
   ```

   This line references the Apache Cordova library.


<a name="Compile"></a>

## Compile

To generate xcodeproj, there is a command much like Git:


   ```
react-native init MyApp
   ```


var Dictionary = React.createClass({
 
});



<a name="Features"></a>

## Features React Native

Various views and components:

0. Login
0. Tabs
0. Search
0. Breadcrumbs
0. Table view

Call Objective-C code from React Native code.

<a name="Addons"></a>

## Add-ons

Make use of smartphone:

 * Send Email, SMS, voicemail, fax
 * Take picture, video





<a name="NewReactNativeApp"></a>

## Constructing New React Native app

0. Create a folder.
0. Define an empty default.html file.
0. Add references to libraries:


   ```
<script src=http://fb.me/react-js-fiddle-integration.js"></script>
    <script src="JSXTransformer.js"></script>
    <script src="react.js"></script>
   ```

0. Download 

   * react.js

   * JSXTransformer.js

   * https://github.com/yahoo/react-intl 
     React Components for Internationalization
     described at http://formatjs.io/react/

   This includes Mixins to manage data.



<a name="Advantages"></a>

## Advantages

React Native is known for its fast performance: rendering at 60 fps on non-jit iPhones,
completing at less than 16 ms.

This is because React Native updates only specific elements in a 
<strong>Virtual DOM</strong> (server side) rather than the entire DOM (on the client).

   * https://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html


<a name="SampleReactNativeApps"></a>

## Sample React Native Apps

React Native apps downloaded in mobile app stores (Google Play, Apple, Amazon, etc.)
make use of JavaScript Core in apps:

 * http://trac.webkit.org/wiki/JavaScriptCore


<a name="TablesReactNative"></a>

### Tables in React Native

It is said that 90% of iOS apps display tables.


   NOTE: There is currently no built-in scrolling within React Native,
   such as two-finger swipping.



<a name="TestingReactNative"></a>

## Testing React Native

 * http://testdroid.com/tech/testing-react-native-apps-on-android-and-ios
   recommends using Appium
   over Robotium.

 * http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/


0. In a Terminal in the weekdays folder, run npm start
0. In XCode, click the play button to create an iPhone simulator.

   WARNING: Recent smartphones have higher resolution than what many
   laptop display can render.

0. Press command+Tab to switch to the simulator window.

   "Welcome to React Native!" is from the sample app.

0. In Finder, open file <strong>index.ios.js</strong> with (using) your IDE.
0. Change something. Save it. Press command+R to see it in the simulator.

0. localhost:8081



<a name="MobileStyles"></a>

### Styles

On a React native mobile app, text is specified between `<Text>` and `</Text>` 
encapsulated within a View.


   ```
    return <View style={styles.container}>
       <Text> Days of the week:
       </Text>
    </header>;
   ```

These require at the top:

   ```
var Text = React.Text;
var View = React.View;
   ```

Alternately, the above can be written as:

   ```
var {
  Text,
  View,
  AppRegistry
} = React;
   ```

NOTE: In a mobile React app, instead of CSS are this esoteric commands:

   ```
var styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center', // moves stuff height wise
      alignItems: 'center' // moves stuff width wise
      backgroundColor: '#F5FCFF',
}
});
   ```



<a name="Resources"></a>

## Resources for learning React Native

 * https://code.facebook.com/posts/1189117404435352/react-native-for-android-how-we-built-the-first-cross-platform-react-native-app/

<a id="Swanepoel_2015"></a>

Hendrik Swanepoel (@hendrikswan, http://tagtree.tv)
created two video courses:

 * <a target="_blank" href="https://app.pluralsight.com/library/courses/build-ios-apps-react-native/table-of-contents">
   Build iOS Apps with React Native
   1h 59m video course released 18 Jun 2015</a>
   shows how, on a Mac OSX machine with XCode,
   create a Github Explorer app
   that searches for repositories.

 * <a target="_blank" href="https://app.pluralsight.com/library/courses/build-react-native-exponent-redux-apps/table-of-contents">
   Build Cross Platform React Native Apps with Exponent and Redux
   3h 22m</a> released 11 Mar 2016.

Others:

 * http://www.oreilly.com/online-training/react-for-web-developers.html
   React for Web Developers live course March 17 - April 14
   by Jonathan Stark
   
 * https://tmail21.com/startup-stories/why-our-startup-chose-react-native-and-what-we-learned/
   say they abandoned Ionic for React Native.

 * http://code.tutsplus.com/tutorials/creating-a-dictionary-app-using-react-native-for-android--cms-24969

 * https://egghead.io/series/react-native-fundamentals
   ($20/month)   
   by Tyler McGinnis has 17 video modules
   on the Notes view.
  


## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}
