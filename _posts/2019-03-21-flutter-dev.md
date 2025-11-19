---
layout: post
date: "2025-11-18"
lastchange: "25-11-18 v001 + tutorial GSP885 :2019-03-21-flutter-dev.md"
url: https://wilsonmar.github.io/flutter-dev
file: "flutter-dev"
title: "Flutter development"
excerpt: "Use Google's Dart language Firebase database to create apps on web, iOS and Android"
tags: [website, Android, iOS, Google]
image:
# feature: scr white jekyll static tools 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622170/48b1ceb0-0585-11e6-8b19-b9d09feebd6f.jpg
  credit:
  creditlink:
comments: true
created: "2019-03-21"
---
<i>{{ page.excerpt }}</i> 
{% include l18n.html %}
{% include _toc.html %}

Flutter offers a single codebase (Google's UI SDK) for building beautiful, natively compiled applications across many platforms: 
   * Desktop apps on Windows, Mac, Linux
   * Mobile (smart phone) apps on Google Android vs. Java
   * Mobile (smart phone) apps on Apple iOS vs. Swift programming
   * Web apps on internet browsers
   <br /><br />

PROTIP: The biggest benefit to using Flutter instead of native languages is that <strong>no user action is needed to update the app</strong>. However, this <a href="#HotReload">"Hot Reload"</a> causes a little delay for Flutter users as code is updated.


## Smart Phone features in apps

Developers have grown weary of "Write Once, Work Everywhere" failed promises from several offerings over the years. Android "Material" and iOS have fundamentally conflicting design UI standards.

1. Flutter is free and open sourced by Google at:

   <a target="_blank" href="https://github.com/flutter/flutter/blob/master/docs/README.md">https://github.com/flutter/flutter</a>

1. https://dart.dev/resources/glossary

   * "Bottom type" is a type that has no values and is a subtype of all other types.
   * Closurization = The process of turning a method or function into a closure.
   * Code asset = Compiled native code that is bundled with a Dart app using a build hook and can be used through dart:ffi.

1. Documentation

   <a target="_blank" href="https://docs.flutter.dev">docs.flutter.dev</a>

   API reference is at the api.flutter.dev.

## Ecosystem

Developing using Flutter involves mastering several technologies within Google's development ecosystem:
   * <a href="DartLang">Google's Dart language</a>
   * Android
   * ARCore
   * ChromeOS
   * <a href="#Firebase">Firebase database</a>
   * Flutter
   * Google Assistant
   * Google Cloud
   * Google Maps Platform
   * Google Pay & Google Wallet
   * Google Play
   * TensorFlow
   <br /><br />

<a target="_blank" href="https://www.geeksforgeeks.org/flutter/creating-a-simple-application-in-flutter/#create-a-new-flutter-project-using-android-studio">Create a New Flutter Project Using Android Studio IDE</a>

<a target="_blank" href="https://www.geeksforgeeks.org/flutter/creating-a-simple-application-in-flutter/#create-a-new-flutter-project-using-visual-studio-code">Create a New Flutter Project Using Visual Studio Code</a>




## Socials

1. Subscribe to:

   https://www.youtube.com/@flutterdev

   https://www.reddit.com/r/FlutterDev/

   https://developers.google.com/community/experts
   if you are an expert already, like <a target="_blank" href="https://www.linkedin.com/in/mtwichel/">Marcus Twichel</a> at Billings, United States

## Sample apps

https://kobe.io/
Kobe Apps, a mobile app SaaS Platform built in Flutter, to design and build a proof of concept, in English and Portugese.

<a name="ProCerts"></a>

## ProCerts

https://developers.google.com/certification/associate-android-developer

https://developers.google.com/training/

Popular content creator are Google Experts:

https://cloud.google.com/learn/certification/cloud-architect
Google Professional Cloud Architect certification ?


https://androidatc.com/pages/Eng/Flutter-Certified-Application-Developer


https://www.youtube.com/watch?v=xWV71C2kp38



## Tutorials

1. Install mobile app FlutterLab (Flutter Development course) by Hrishi Suthar provides a wealth of information.

1. See list of Google's tutorials at https://www.skills.google/catalog?keywords=flutter

1. Create your first app at <a href="#Tutorial1">Google Skills Tutorial below</a>

1. https://www.geeksforgeeks.org/flutter/creating-a-simple-application-in-flutter/ 13 Mar, 2025

1. May 2023 https://learning.oreilly.com/course/learn-flutter-and/9781805122029/
30-hour video course by <a target="_blank" href="https://www.linkedin.com/in/maximilian-schwarzmueller/">Maximilian Schwarzmüller</a> from Germany (https://maximilian-schwarzmueller.com/)


1. https://learning.oreilly.com/library/view/-/9781098154752/

## Setup for development

https://docs.flutter.dev/get-started

1. Install Homebrew for Mac
1. Install git, 
1. Install Visual Studio Code with extras for Flutter. In Go to View > Command Palette or press Command + Shift + P.

   https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter


<a name="Tutorial1"></a>

## Tutorial1

Follow the steps below for my enhancements to steps (Nov 7, 2024 edition) at <a target="_blank" href="https://www.skills.google/course_templates/720">"Flutter Development" (GSP885)</a> 1.5-hour hands-on course. 

1. Install Chrome browser (after brew install google-chrome).
1. Start Lab. Click the IDE.

1. Click the three dots at the upper-right and select "New Incognito Window" to avoid conflicts with cookies.

1. Copy this url: https://console.cloud.google.com/
1. Press command + ` to switch to the Lab window.
1. Scroll down to click the icon to copy the Username, such as
   student-03-2e9edc111c72@qwiklabs.net
1. Switch to the incognito window and paste the Email.

1. Switch to the Lab window.
1. Scroll down to click the icon to copy the Password, such as
   student-03-2e9edc111c72@qwiklabs.net
1. Switch to the incognito window. Click "Enter the Password" and paste.
1. Click "I understand", then check under "Terms of Service", "Agree and continue".
1. Click "Create or select a project".
1. Notice:
   Project number: 1030115194620 Project ID: qwiklabs-resources 

1. Click the Cloud Shell icon at the upper-right corner. Click Continue.
1. Click Authorize to see lines like this:
   ```
    Welcome to Cloud Shell! Type "help" to get started, or type "gemini" to try prompting with Gemini CLI.
    Your Cloud Platform project in this session is set to qwiklabs-resources.
    Use `gcloud config set project [PROJECT_ID]` to change to a different project.
    student_03_2e9edc111c72@cloudshell:~ (qwiklabs-resources)$ 
   ```

   ### Task 1: Open the Code Server editor

   In this lab, we will use a custom editor that includes the Flutter and Dart extensions.

1. Switch to the Lab window.
1. Click the copy icon for IDE.
1. Switch to the incognito window and paste the URL 

   ### Task 2. Create Flutter template "first_app"

1. Switch to the IDE window. 
1. REMEMBER: Click control + shift + ` or click the menu at the upper-left to select "Terminal".
1. Copy and paste for the "Welcome"
   ```
   flutter create first_app
   ```
   The name should be all lowercase, with underscores to separate words, "just_like_this".Use only basic Latin letters and Arabic digits: [a-z0-9_].

   ```
   Creating project first_app...
Resolving dependencies in `first_app`... (1.1s)
Downloading packages... 
Got dependencies in `first_app`.
Wrote 129 files.

All done!
You can find general documentation for Flutter at: https://docs.flutter.dev/
Detailed API documentation is available at: https://api.flutter.dev/
If you prefer video documentation, consider: https://www.youtube.com/c/flutterdev

In order to run your application, type:

  $ cd first_app
  $ flutter run

Your application code is in first_app/lib/main.dart.
   ```
1. View the flutter app's commands: <pre>flutter</pre>
   ```
Manage your Flutter app development.

Common commands:

  flutter create <output directory>
    Create a new Flutter project in the specified directory.

  flutter run [options]
    Run your Flutter application on an attached device or in an emulator.

Usage: flutter <command> [arguments]

Global options:
-h, --help                  Print this usage information.
-v, --verbose               Noisy logging, including all shell commands executed.
                            If used with "--help", shows hidden options. If used with "flutter doctor", shows additional diagnostic information. (Use "-vv" to force verbose logging in those cases.)
-d, --device-id             Target device id or name (prefixes allowed).
    --version               Reports the version of this tool.
    --enable-analytics      Enable telemetry reporting each time a flutter or dart command runs.
    --disable-analytics     Disable telemetry reporting each time a flutter or dart command runs, until it is re-enabled.
    --suppress-analytics    Suppress analytics reporting for the current CLI invocation.

Available commands:

Flutter SDK
  bash-completion   Output command line shell completion setup scripts.
  channel           List or switch Flutter channels.
  config            Configure Flutter settings.
  doctor            Show information about the installed tooling.
  downgrade         Downgrade Flutter to the last active version for the current channel.
  precache          Populate the Flutter tool's cache of binary artifacts.
  upgrade           Upgrade your copy of Flutter.

Project
  analyze           Analyze the project's Dart code.
  assemble          Assemble and build Flutter resources.
  build             Build an executable app or install bundle.
  clean             Delete the build/ and .dart_tool/ directories.
  create            Create a new Flutter project.
  drive             Run integration tests for the project on an attached device or emulator.
  gen-l10n          Generate localizations for the current project.
  pub               Commands for managing Flutter packages.
  run               Run your Flutter app on an attached device.
  test              Run Flutter unit tests for the current project.

Tools & Devices
  attach            Attach to a running app.
  custom-devices    List, reset, add and delete custom devices.
  devices           List all connected devices.
  emulators         List, launch and create emulators.
  install           Install a Flutter app on an attached device.
  logs              Show log output for running Flutter apps.
  screenshot        Take a screenshot from a connected device.
  symbolize         Symbolize a stack trace from an AOT-compiled Flutter app.

Run "flutter help <command>" for more information about a command.
Run "flutter help -v" for verbose help output, including less commonly used options.
   ```
1. To disable reporting of telemetry, run this terminal command:
    <pre>flutter --disable-analytics</pre>

1. Navigate to the app's folder and run:
   <pre>cd first_app; flutter run</pre>
   ```
    Connected devices:
    Linux (desktop) • linux  • linux-x64      • Debian GNU/Linux 11 (bullseye) 5.10.0-30-cloud-amd64
    Chrome (web)    • chrome • web-javascript • Google Chrome 126.0.6478.61
    [1]: Linux (linux)
    [2]: Chrome (chrome)
    Please choose one (or "q" to quit): 
   ```
   ### Task 3. Exploring the Flutter code

1. Click the folder icon at the upper-left of the IDE window.
1. Click "Open Folder" at <tt>/home/ide-dev/</tt>.
1. Select "first_app" to see its folders.
1. Click "OK" to see its files and folders:
1. Click file <tt>pubspec.yaml</tt> to view it on the right-side pane.

   ### Task 4. Running the Flutter web application

1. REMEMBER: Click control + shift + ` or click the menu at the upper-left to select "Terminal".
1. REMEMBER: Set the directory to first_app:
   <pre>fwr</pre>
   ```
    Launching lib/main.dart on Web Server in debug mode...
    Waiting for connection from debug service on Web Server...         25.5s
    lib/main.dart is being served at http://0.0.0.0:8080
    The web-server device requires the Dart Debug Chrome extension for debugging. Consider using the Chrome or Edge devices for an improved development workflow.

    🔥  To hot restart changes while running, press "r" or "R".
    For a more detailed help message, press "h". To quit, press "q".
   ```
1. Type R (for "r") to reload, waiting until "Recompile" message appears.

1. Click "Open in Browser" pop-up at the lower-right to open a URL such as:
   <tt>https://ide-service-6rqup7ut6q-uk.a.run.app/proxy/8080/</tt>

1. Click Command+` to switch to the Lab window.
   <img alt="flutter-tutorial1-538x300.png" width="300" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1763520438/flutter-tutorial1-538x300_w6xcmp.png" /></a>
1. Click the copy icon for "Live Server" at the left panel.
1. Click the "+" at the top to start another incognito window.
1. Switch to the incognito window and paste the URL. Rendering of the web application can take up to ten seconds. The view will show the application based on the code in the editor.
   <a name="HotReload"></a>
1. Right-click to select "View Page Source". REMEMBER: Instead of a lot of HTML, when the <tt>flutter_bootstrap.js</tt> file loads, it looks into <tt>manifest.json</tt> to know what else to load:
   ```
   <link rel="manifest" href="manifest.json">
   </head>
   <body>
   <script src="flutter_bootstrap.js" async></script>
   </body>
   ```
   That is called "Hot Reload".

   ### Task 5. Flutter Hot reload lib/main.dart

   <a name="DartEdit"></a>

1. In the EXPLORER menu click "lib", then "main.dart".
1. Mouse over the separator above the Terminal panel and drag it down.

   IMPORTANT: Leave a line exposed so you can easily type R ("r") to Reload (even though the instruction is no longer visible.

1. Press "Esc" to enter Edit mode, because this is VIM.
1. Click to highlight <tt>Flutter Demo</tt> and type in its place 
   <tt>Flutter is awesome</tt>

1. REMEMBER: Click control + shift + ` or click the menu at the upper-left to select "Terminal".

1. Switch to the browser tab displaying "https://browser-service-6rqup7ut6q-uk.a.run.app/
1. Press CTRL+R to reload the page

1. Click control + shift + ` or click the menu at the upper-left to select "Terminal".
1. Click "End Lab".
1. Close the Incognito browser window and Google Skills web page.


<a name="DartLang"></a>

### Google's Dart language 

1. Confirm the version of the Dart language installed.

   3.10 released on: November 12, 2025

   Dart code files have an extension of ".dart", introduced in 2011 and got to v1.0 in 2013.

1. Past versions are listed at:

   https://dart.dev/resources/whats-new

1. TODO: dart install tool.

1. TODO: dart build tool.


## Widgets

<img align="right" alt="flutter-widgets-hier-357x662.png" width="200" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1763520045/flutter-widgets-hier-357x662_tyx0vr.png" /></a>

<a target="_blank" href="https://www.youtube.com/live/YY-_yrZdjGc?si=4JjDyiuMCISniUJE">YouTube Live: Building scrolling experiences in Flutter | Workshop</a>


## Calls to APIs

AI tools: Google Gemini, OpenAI (ChatGPT), Anthropic


<a name="Firebase"></a>

## Google's Firebase database 

## Smart Phone app features

animations and transitions to make apps visually stunning.

Utilize device features such as the camera within your applications.


## Web apps

Taking Flutter to the Web
By Damodar Lohani


## Resources


## Jobs

https://www.virtualemployee.com/da/hire-flutter-app-developers/

