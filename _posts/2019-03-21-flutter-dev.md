---
layout: post
date: "2025-11-18"
lastchange: "25-11-18 v003 + installers :2019-03-21-flutter-dev.md"
url: https://wilsonmar.github.io/flutter-dev
file: "flutter-dev"
title: "Flutter development"
excerpt: "Use Google's Dart language Firebase database & Riverpod to create Gemini apps on web, iOS and Android"
tags: [website, Android, iOS, Google]
image:
# feature: flutter-logo-1900x500.jpg
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1763527367/flutter-logo-1900x500_qxvnh1.jpg
  credit: hqwalls.com
  creditlink: https://hdqwalls.com/flutter-logo-4k-wallpaper
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

Released in 2017, Flutter now has the largest share (and growing) in the cross-platform app development services market.
<a target="_blank" href="https://www.miquido.com/blog/flutter-app-development-cost/"><img alt="flutter-growth-1536x1435.png.webp" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1763523476/flutter-growth-1536x1435.png_mvxomo.webp" /></a>

## Smart Phone features in apps

PROTIP: The biggest benefit to using Flutter instead of native languages (such as Swift for iOS) is that <strong>no user action is needed to update the app</strong>. However, this <a href="#HotReload">"Hot Reload"</a> causes a little delay for Flutter users as code is updated.

Flutter app performance compiles directly to native code, ensuring apps run smoothly and efficiently, keeping users engaged with native capabilities such as:
   * Location (GPS)
   * Bluetooth
   * Audio (music app Topline by Abbey Road Studios)
   * Sensors
   * camera
   <br /><br />

Developers have grown weary of "Write Once, Work Everywhere" failed promises from several offerings over the years. Android "Material" and iOS have fundamentally conflicting design UI standards.

1. Flutter is free and open sourced by Google at:

   <a target="_blank" href="https://github.com/flutter/flutter/blob/master/docs/README.md">https://github.com/flutter/flutter</a>

1. https://dart.dev/resources/glossary

   * "Bottom type" is a type that has no values and is a subtype of all other types.
   * Closurization = The process of turning a method or function into a closure.
   * Code asset = Compiled native code that is bundled with a Dart app using a build hook and can be used through dart:ffi.
   <br /><br />

1. Documentation

   <a target="_blank" href="https://docs.flutter.dev">docs.flutter.dev</a>

1. API reference is at https://api.flutter.dev.
   <a target="_blank" href="https://console.actions.google.com/">Actions on Google Console</a>

## Ecosystem

Developing using Flutter involves mastering several technologies within Google's development ecosystem:
   * <a href="DartLang">Google's Dart language</a>
   * Android
   * ARCore
   * ChromeOS
   * <a href="#Firebase">Firebase database</a> & <a target="_blank" href="https://console.firebase.google.com/?pli=1">console</a>
   * Flutter (this page)
   * Google Assistant
   * <a target="_blank" href="https://wilsonmar.github.io/gcp">Google Cloud</a>
   * Google Maps Platform
   * Google Pay & Google Wallet
   * Google Play <a target="_blank" href="https://play.google.com/apps/publish">console</a>
   * TensorFlow
   <br /><br />

Other Google services:
   * AdMob
   * AlloyDB
   * analytics
   * Android TV
   * Assistant
   * Cast
   * Cloud Key Management Service (KMS)
   * Cloud Run
   * Cloud SQL
   * GKE Enterprise
   * ML Kit
   * Google Workspace (Gmail)
   * TensorFlow
   * Wear OS
   <br /><br />


<a target="_blank" href="https://www.geeksforgeeks.org/flutter/creating-a-simple-application-in-flutter/#create-a-new-flutter-project-using-android-studio">Create a New Flutter Project Using Android Studio IDE</a>

<a target="_blank" href="https://www.geeksforgeeks.org/flutter/creating-a-simple-application-in-flutter/#create-a-new-flutter-project-using-visual-studio-code">Create a New Flutter Project Using Visual Studio Code</a>

## Socials

1. Subscribe to:

   https://www.youtube.com/@flutterdev

   https://www.reddit.com/r/FlutterDev/

   https://developers.google.com/community/experts
   if you are an expert already, like <a target="_blank" href="https://www.linkedin.com/in/mtwichel/">Marcus Twichel</a> at Billings, United States

1. Join the official Discord channel (and complete the intro) at 
   https://discord.com/invite/ht477J5PyH

   https://github.com/flutter/flutter/blob/master/docs/contributing/Chat.md


## Sample apps

* https://appgallery.io/

   https://appgallery.io/walidashik

* <a target="_blank" href="https://codecanyon.net/category/mobile/flutter/full-applications">CodeCanyon.net's Flutter Full Applications</a>, some with live preview.
   * <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hamilton.app&hl=en&gl=US">Hamilton Musical app</a>
   * <a target="_blank" href="https://ads.google.com/home/tools/mobile-app/">Google Ads</a>
   * <a target="_blank" href="https://www.groupon.com/">Groupon</a>
   * Ebay & Ebay Motors
   * New York Times
   * BMW, Toyota
   * Phillips Hue
   * https://goodhabitz.com/
   <br /><br />

* <a target="_blank" href="https://www.miquido.com/blog/top-apps-made-with-flutter/">25 Top Apps Made with Flutter</a>
   * Selection Criteria for Top Apps: What makes an app not just good, but great?
   * Detailed Descriptions of Selected Apps: A close look at apps that are turning heads.
   * Flutter's Advantages in App Development: Why Flutter is the go-to for developers.
   * Flutter's Impact on Business Outcomes: How Flutter is rewriting the rules of business efficiency.
   * Flutter vs. Other Platforms: A side-by-side comparison with its contemporaries.
   <br /><br />

* https://apps.apple.com/us/app/kodebook-notes-upgraded/id6739565636 KodeBook: Notes, upgraded by Mustaq Sameer at  https://kodebook.io 

* https://kobe.io/ = Kobe Apps, a mobile app SaaS Platform built in Flutter, to design and build a proof of concept, in English and Portugese.

## Dev Costs

Online calculators like Estimate My App and Cleveroad help users calculate upfront costs. 

### Dev team

A software development team has the following members:
   * Product owner – oversees app creation and serves as the link between the project team and organization.
   * Project manager – manages project progression, ensuring timely and on-budget delivery.
   * Business analyst – analyzes the project requirements to ensure it meets business goals.
   * UI designer – creates user experience, ensuring an attractive and user-friendly app.
   * Flutter app developers – build the application.
   * Quality Assurance specialists  – test the app to ensure it meets project requirements.
   <br /><br />

<a name="ProCerts"></a>

## ProCerts

https://developers.google.com/certification/associate-android-developer
has been retired.

https://developers.google.com/training/

Popular content creator are Google Experts:

https://cloud.google.com/learn/certification/cloud-architect
Google Professional Cloud Architect certification ?


https://androidatc.com/pages/Eng/Flutter-Certified-Application-Developer


https://www.youtube.com/watch?v=xWV71C2kp38


## Setup for development

https://docs.flutter.dev/get-started/custom#target-platform

1. Install Homebrew for Mac
1. Install git, XCode
1. Install Flutter for CLI with <tt>brew install --cask flutter</tt>
1. Install Visual Studio Code with extras for Flutter:
   https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter
   1. Click "Install".

   Alternately:
   1. In Go to View > Command Palette or press Command + Shift + P.
   1. In the command palette, type flutter.

   1. Select Flutter: New Project.

    VS Code prompts you to locate the Flutter SDK on your computer. Select Download SDK.

   1. When the Select Folder for Flutter SDK dialog displays, choose where you want to install Flutter.

   1. Click Clone Flutter.

   1. While downloading Flutter, VS Code displays this pop-up notification:

   1. Downloading the Flutter SDK. This may take a few minutes.
    This download takes a few minutes. If you suspect that the download has hung, click Cancel then start the installation again.

   1. Click Add SDK to PATH.

   1. When successful, a notification displays: "The Flutter SDK was added to your PATH. VS Code might display a Google Analytics notice." If you agree, click OK.

   1. To ensure that Flutter is available in all terminals: Close all terminal windows. Then Quit and Restart VS Code.

1. Verify installation: <pre>flutter --version</pre>
   ```
    Flutter 3.38.2 • channel stable •
    https://github.com/flutter/flutter.git
    Framework • revision f5a8537f90 (15 hours
    ago) • 2025-11-18 09:27:21 -0500
    Engine • hash
    78c3c9557e50ee7c676fa37562558c59efd8406a
    (revision b5990e5ccc) (6 days ago) •
    2025-11-12 21:08:24.000Z
    Tools • Dart 3.10.0 • DevTools 2.51.1
   ```

1. To support Flutter plugins that use native macOS code, install the latest version of https://cocoapods.org/, following the <a target="_blank" href="https://guides.cocoapods.org/using/getting-started.html#installation">CocoaPods installation guide</a>
   See https://flutter.dev/to/platform-plugins

   <pre>sudo gem install cocoapods</pre>

   Alternately, <a target="_blank" href="https://guides.cocoapods.org/using/getting-started.html#updating-cocoapods">CocoaPods update guide</a>.

   <pre>[sudo] gem install cocoapods</pre>

1. Run <pre>flutter doctor -v</pre>
   ```
    [✗] Chrome - develop for the web (Cannot find
        Chrome executable at /Applications/Google
        Chrome.app/Contents/MacOS/Google Chrome)
        [7ms]
        ! Cannot find Chrome. Try setting
        CHROME_EXECUTABLE to a Chrome
        executable.
   ```
1. Check for macOS devices to ensure Flutter can find and connect to your macOS device correctly, run flutter devices in your preferred terminal:

   <pre>flutter devices</pre>

## Tutorials

1. Install mobile app FlutterLab (Flutter Development course) by Hrishi Suthar provides a wealth of information.

1. See list of Google's tutorials at https://www.skills.google/catalog?keywords=flutter

1. Create your first app at <a href="#Tutorial1">Google Skills Tutorial below</a>

1. <a target="_blank" href="https://www.youtube.com/watch?v=8sAyPDLorek">Building your first Flutter App</a> within <a target="_blank" href="https://codelabs.developers.google.com/?text=flutter">https://codelabs.developers.google.com/?text=flutter</a> with code at:

   <a target="_blank" href="https://github.com/googlecodelabs">https://github.com/googlecodelabs</a>
   shown using npm ployserve.

1. https://www.geeksforgeeks.org/flutter/creating-a-simple-application-in-flutter/ 13 Mar, 2025

1. https://learning.oreilly.com/course/learn-flutter-and/9781805122029/
30-hour video course May 2023 by <a target="_blank" href="https://www.linkedin.com/in/maximilian-schwarzmueller/">Maximilian Schwarzmüller</a> from Germany (https://maximilian-schwarzmueller.com/)

1. <a target="_blank" href="https://www.ffnext.io/blog/flutter-animations">Animations in Flutter - a developer’s guide</a>: Automated Carousel, Parallax effect, Animated button, Bouncing View, Animated Wave, Instagram Story.

1. https://learning.oreilly.com/library/view/-/9781098154752/

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

   If <a target="_blank" href="https://www.geeksforgeeks.org/flutter/creating-a-simple-application-in-flutter/#create-a-new-flutter-project-using-visual-studio-code">using VSCode IDE</a>, search for "Flutter: New Project".

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

1. Contents of <tt>/lib/main.dart</tt> from <a target="_blank" href="https://www.geeksforgeeks.org/flutter/creating-a-simple-application-in-flutter/#create-a-new-flutter-project-using-visual-studio-code">*</a>
   ```
    // Importing important packages require to connect
    // Flutter and Dart
    import 'package:flutter/material.dart';

    // Main Function
    void main() {
    // Giving command to runApp() to run the app.

    // The purpose of the runApp() function is to attach
    // the given widget to the screen.
    runApp(const MyApp());
    }

    // MyApp extends StatelessWidget and overrides its
    // build method.
    class MyApp extends StatelessWidget {
    const MyApp({Key? key}) : super(key: key);

    // This widget is the root of your application.
    @override
    Widget build(BuildContext context) {
        return MaterialApp(
            
        // title of the application
        title: 'Hello World Demo Application',
        
        // theme of the widget
        theme: ThemeData(
            primarySwatch: Colors.lightGreen,
        ),
        
        // Inner UI of the application
        home: const MyHomePage(title: 'Home page'),
        );
    }
    }

    // This class is similar to MyApp instead it
    // returns Scaffold Widget 
    class MyHomePage extends StatelessWidget {
    const MyHomePage({Key? key, required this.title}) : super(key: key);
    final String title;

    @override
    Widget build(BuildContext context) {
        return Scaffold(
        appBar: AppBar(
            title: Text(title),
            backgroundColor: Colors.green,
            foregroundColor: Colors.white,
        ),
        
        // Sets the content to the
        // center of the application page
        body: const Center(
            
            // Sets the content of the Application
            child: Text(
            'Welcome to Visual Studio Code!',
        )),
        );
    }
    }
   ```


1. Dart function declaration to let the LLM set colors in your app:

   ```
FunctionDeclaration get setColorFuncDecl => FunctionDeclaration(
  'set_color',
  'Set the color of the display square based on red, green, and blue values.',
  parameters: {
    'red': Schema.number(description: 'Red component value (0.0 - 1.0)'),
    'green': Schema.number(description: 'Green component value (0.0 - 1.0)'),
    'blue': Schema.number(description: 'Blue component value (0.0 - 1.0)'),
  },
);
   ```

1. TODO: dart build tool.


## UI Widgets

<img align="right" alt="flutter-widgets-hier-357x662.png" width="200" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1763520045/flutter-widgets-hier-357x662_tyx0vr.png" />

Google Material Design and Cupertino support Flutter’s wide range of widgets.

* <a target="_blank" href="https://www.youtube.com/live/YY-_yrZdjGc?si=4JjDyiuMCISniUJE">YouTube Live: Building scrolling experiences in Flutter | Workshop</a>

* <a target="_blank" href="https://codelabs.developers.google.com/codelabs/flutter-next-gen-uis?hl=en">Building next generation UIs in Flutter</a> - animations, shaders, and particle effects that work across all of Flutter’s six platforms.


## Cross-device

<a target="_blank" href="https://firebase.google.com/codelabs/cross-device-controller?hl=en#0">Firebase Cross Device Codelab</a>


## Smart Phone app features

animations and transitions to make apps visually stunning.

Utilize device features such as the camera within your applications.

<a target="_blank" href="https://medium.com/@kingrittik/mastering-emulators-in-vs-code-android-studio-google-fold-pro-pro-tips-4f11bd97fa6a"> Mastering Emulators in VS Code & Android Studio (Google Fold Pro & Pro Tips!)</a> (virtual devices)


## Web apps

Flutter's Skia rendering engine runs 60 frames per second for visually stunning and responsive user interfaces.

Taking Flutter to the Web
By Damodar Lohani


## Calls to APIs

Third-party integrations include cloud hosting, data storage, payment gateways, and SMS push notifications. 
 
 AI tools: Google Gemini, OpenAI (ChatGPT), Anthropic


<a name="Firebase"></a>

## Google's Firebase Backend

1. Google Project Account to set up Firebase account.

1. <a target="_blank" href="https://firebase.google.com/docs/flutter/setup?platform=ios">Add Firebase to your Flutter app</a>

* <a target="_blank" href="https://firebase.google.com/codelabs/firebase-get-to-know-flutter?hl=en#0">Get to know Firebase for Flutter</a>

* <a target="_blank" href="https://codelabs.developers.google.com/codelabs/flutter-codelab-first?hl=en">Your first Flutter app</a>

* <a target="_blank" href="https://codelabs.developers.google.com/codelabs/flutter-gemini-colorist?hl=en">Build a Gemini powered Flutter app</a> generates random, cool-sounding names. April 17, 2025 with Craig Labenz and Andrew Brogdon of DevRel. This use Asynchronous programming - Futures, async/await, and streams.
    Interprets the descriptions into precise RGB color values
    Displays the color on screen in real-time
    Provides technical color details and interesting context about the color
    Maintains a history of recently generated colors

    1. Project setup - You'll start with a basic Flutter app structure and the colorist_ui package
    1. Basic Gemini integration - Connect your app to Firebase AI Logic and implement LLM communication
    1. Effective prompting - Create a system prompt that guides the LLM to understand color descriptions
    1. Function declarations - Define tools that the LLM can use to set colors in your application
    1. Tool handling - Process function calls from the LLM and connect them to your app's state
    1. Streaming responses - Enhance the user experience with real-time streaming LLM responses
    1. LLM Context Synchronization - Create a cohesive experience by informing the LLM of user actions

    1. Configure Firebase AI Logic for Flutter applications
    1. Craft effective system prompts to guide LLM behavior
    1. Implement function declarations that bridge natural language and app features
    1. Process streaming responses for a responsive user experience
    1. Synchronize state between UI events and the LLM
    1. Manage LLM conversation state using Riverpod
    1. Handle errors gracefully in LLM-powered applications
    <br /><br />

* Generate random dishes to cook and eat based on user criteria.

* <a target="_blank" href="https://firebase.google.com/codelabs/get-started-firebase-emulators-and-flutter?hl=en">Local development for your Flutter apps using the Firebase Emulator Suite</a>

* <a target="_blank" href="http://firebase.google.com/codelabs/firebase-auth-in-flutter-apps?hl=en#0">Send and receive notifications for a Flutter app using Firebase Cloud Messaging</a>

* <a target="_blank" href="https://firebase.google.com/codelabs/firebase-fcm-flutter?hl=en#0">FCM</a>


## Resources


## Jobs

https://www.virtualemployee.com/da/hire-flutter-app-developers/

