---
layout: post
date: "2025-06-19"
lastchange: "v003 + backup first & use pre :2016-10-25-android-install.md"
file: "android-install"
url: https://wilsonmar.github.io/android-install
title: "Android Install to develop on macOS"
excerpt: "Install Android Studio"
tags: [IoT, Android, Mac]
image:
# feature: pic white robots woman 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622167/45abd918-0585-11e6-8537-a58e0b55e3ec.jpg
  credit: Cyberconstruct.be
  creditlink: http://cyberconstruct.be/2015/02/digital-job-crafting/
comments: true
date: "2016-10-25"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## AI Use Case

<a target="_blank" href="https://github.com/bomonike/ai-edge-gallery">ai-edge-gallery.apk</a>: Mobile (Android) GenAI Chat app which uses Hugging Face Integration to discover and download various on-device (local) LLM (LiteRT .tflite / .litert .task models). The <a target="_blank" href="https://github.com/google-ai-edge/gallery/releases/latest/download/ai-edge-gallery.apk">app apk</a>, built using <a target="_blank" href="https://ai.google.dev/edge">Google AI-Edge</a> Portal, is <a target="_blank" href="https://github.com/google-ai-edge/gallery/wiki/2.-Getting-Started">installed</a> to demonstrate automation of test runs and presentation of results (TTFT, decode speed, latency) to benchmark performance among LiteRT-optimized models. App activities tested include: 
   * Ask Image: Obtain an image of a homework problem and ask questions about it: descriptions, solve problems, or identify objects.
   * Prompt Lab: Upload a pdf and ask questions: summarize, rewrite, generate code, or use freeform prompts 
   * AI Chat

1. CAUTION: Do a full Backup before proceeding with system-level configurations below.

### Prerequisite System Dependencies

1. <a target="_blank" href="https://wilsonmar.github.io/xcode/">Install XCode Command Line Tools</a>:
   <pre><strong>
   xcode-select --install 
   </strong></pre>
1. Use Homebrew to install tools used for Android dev :
   <pre><strong>
   brew install ant
   brew install maven
   brew install gradle
   brew doctor
   </strong></pre>

   ### Install Java

1. Install Temurin (an anagram of “runtime”), an open-source, high-performance Java runtime based on OpenJDK, produced by the Eclipse Foundation’s Adoptium Working Group. Install the latest:
   ```
   brew install --cask temurin
   ```
   Alternately, install a specific version such as 21:
   ```
   brew install --cask temurin@21 
   ```
1. Verify: https://jdk.java.net/24/
   <pre><strong>java -version</strong></pre>
   ```
   openjdk version "23.0.1" 2024-10-15
   OpenJDK Runtime Environment Zulu23.30+13-CA (build 23.0.1+11)
   OpenJDK 64-Bit Server VM Zulu23.30+13-CA (build 23.0.1+11, mixed mode, sharing)
   ```
1. Confirm:
   <pre><strong>which java</strong></pre>
   ```
   /usr/bin/java
   ```
1. <a target="_blank" href="https://www.youtube.com/watch?v=TDqedgxRAVA">VIDEO: What is Temurin?</a>
   * jadx - decompiles APK to Java source code
   * apktool - decodes resources and rebuilds APKs


   ### Install Android Platform Tools

1. To avoid the need to hard-code path, instead of manual https://developer.android.com/studio/install
   Alternately, track down the specific version to download, such as:<br />
   <tt>android-studio-2024.3.2.15-mac_arm.dmg</tt>
   ```
   brew install cask android-platform-tools
   ```
1. Confirm:
   <pre><strong>which adb</strong></pre>
   ```
   /opt/homebrew/bin/adb
   ```
   The above avoids the need to define PATH in .bash_profile or .zshrc, such as:
   ```
   echo 'export ANDROID_HOME=/Users/$USER/Library/Android/sdk' >> ~/.zshrc
   echo 'export PATH="$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools"' >> ~/.zshrc
   ```
   This also avoid need to create a symbolic link (essentially a shortcut) for the adb executable in folder <tt>/usr/local/bin</tt> which is one of the default locations where Terminal looks for command line tools:
   ```
   sudo ln -s ~/Library/Android/sdk/platform-tools/adb /usr/local/bin
   ```

   ### Install Android Command Line Tools

1. Run per https://developer.android.com/tools description of the Adroid Debug Bridge (adb) https://android-sdk-platform-tools-adb.en.softonic.com/mac?ex=RAMP-3252.3#google_vignette
   <pre><strong>adb version</strong></pre>
   ```
   Android Debug Bridge version 1.0.41
   Version 36.0.0-13206524
   Installed as /opt/homebrew/bin/adb
   Running on Darwin 24.5.0 (arm64)
   ```
1. Install Android CLI:
   ```
   brew install --cask android-commandlinetools
   ```
1. Verify:
   <pre><strong>which sdkmanager</strong></pre>
   ```
   /opt/homebrew/bin/sdkmanager
   ```
1. Confirm
   <pre><strong>sdkmanager --version</strong></pre>
   ```
   19.0
   ```
1. Refresh your shell profile (or restart your terminal app):
   ```
   source ~/.zshrc
   or
   source ~/.bash_profile
   ```

   ### .Android folder

   REMEMBER: <tt>$HOME/.android</tt> is the default folder Android uses to store configuration metadata.

1. See what's in the folder:
   <pre><strong>ls -al $HOME/.android</strong></pre>
   ```
   total 56
   drwxr-x---@  10 johndoe  staff   320 Jun 19 01:05 .
   drwxr-x---+ 104 johndoe  staff  3328 Jun 19 01:05 ..
   -rw-------@   1 johndoe  staff  1704 Jun  9  2024 adbkey
   -rw-r--r--@   1 johndoe  staff   728 Jun  9  2024 adbkey.pub
   -rw-r--r--@   1 johndoe  staff   219 Jun 19 00:57 analytics.settings
   drwxr-xr-x@   4 johndoe  staff   128 Jun 19 00:43 avd
   drwxr-xr-x   44 johndoe  staff  1408 Jun 19 00:07 cache
   -rw-r--r--@   1 johndoe  staff  4675 Jun 19 01:05 emu-last-feature-flags.protobuf
   -rw-r--r--@   1 johndoe  staff    67 Jun 19 01:05 emu-update-last-check.ini
   -rwxr-xr-x@   1 johndoe  staff   171 Jun 19 01:05 modem-nv-ram-5554
   ```

   ### Install Android SDK

7. To avoid ".android/repositories.cfg could not be loaded" error, create a blank file:
   <pre><strong>touch ~/.android/repositories.cfg</strong></pre>

   The equivalent of this for Powershell on Windows 10: 
   <pre>New-Item C:\Users\$username\.android\repositories.cfg -type file</pre>

8. Use Homebrew to install the Android Software Development Kit (sdk):
   <pre><strong>
   brew install --cask android-sdk
   </strong></pre>

   This takes several minutes. Just wait while "Installing Cask android-sdk".


   ### Native Development Kit

1. AVOID: Use Homebrew to install the Android Native Development Kit (ndk):
   <pre><strong>
   brew install --cask android-ndk
   </strong></pre>

1. Install HAXM for blazing fast emulators. Check out the "Configuring VM Acceleration on Mac" section at:

   http://developer.android.com/tools/devices/emulator.html

   ### Edit Terminal start-up CLI

1. Edit your `~/.bash_profile` to update environment variables:
   <pre>
export ANDROID_SDK_ROOT="/usr/local/share/android-sdk"      
export ANT_HOME=/usr/local/opt/ant
export MAVEN_HOME=/usr/local/opt/maven
export GRADLE_HOME=/usr/local/opt/gradle
export ANDROID_HOME=/usr/local/opt/android-sdk
export ANDROID_NDK_HOME=/usr/local/opt/android-ndk
   </pre>

1. Update your paths (bonus points to a better solution to the hardcoded build tools version):
   <pre>
export PATH=$ANT_HOME/bin:$PATH
export PATH=$MAVEN_HOME/bin:$PATH
export PATH=$GRADLE_HOME/bin:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/build-tools/19.1.0:$PATH
   </pre>

   ### Version Updates

1. Periodically run these commands again to ensure you're staying up to date:
   <pre><strong>
   brew update
   android update sdk --no-ui
   </strong></pre>

   There might be an issue with brew update and the android-sdk formula.

   ## Android Studio

   Alternately, you can install and use Eclipse, IntelliJ, or your other favorite IDE.

   Alternately, download the dmg from https://developer.android.com/studio/install.html

   Alternately, see http://macappstore.org/android-studio/
   for manual download.
   https://classroom.udacity.com/courses/ud808/lessons/4216368924/concepts/43072785890923#
   is a video mini-course done April 2015 about that approach.

   * https://github.com/caskroom/homebrew-cask/blob/master/Casks/android-studio.rb

   But the easiest way is:

1. To inspect app structure, resources, and permissions during development or security analysis of APK File, install the APK Analyzer (built into Android Studio)
   <pre><strong>
   brew install --cask android-studio
   </strong></pre>
1. Notice in the install response:
   ```
   ==> Linking Binary 'studio' to '/opt/homebrew/bin/studio'
   ```
   That means you have an option to open the app by simply:
   <pre><strong>
   studio
   </strong></pre>
   Alternately, because the app contains a space in its name:
   ```
   open $HOME/Applications/Android Studio.app
   ```
1. Click "Open" if the "app downloaded from the Internet" appears.
1. Click "Don't send".
1. Accept.
1. Emulator.
1. Finish to watching "Downloading Components".
1. Finish.

1. Notice new repositories are created to:
   ```
   /Users/johndoe/StudioProjects
   ```

   ### Install custom apk app on macOS

1. Create a folder
   ```
   cd "$HOME/bomonike"
   git clone https://github.com/bomonike/ai-edge-gallery
   APP_FOLDER_PATH="$HOME/bomonike/ai-edge-gallery"
   cd "$APP_FOLDER_PATH"
   ls -al
   ```
1. Download .apk file (to Downloads folder)
   Yields file <tt>ai-edge-gallery.apk.cpgz</tt>
1. Alternately, use "The Unarchiver" or Keka archive tools 
   ```
   APP_FILE_PATH="$APP_FOLDER_PATH/apk/"
   mkdir -p "$APP_FILE_PATH"
   cd "$APP_FILE_PATH"
   APK_FILE_NAME="ai-edge-gallery.apk"
   # FIXME: mv "$HOME/Downloads/$APK_FILE_NAME" "$APP_FILE_PATH"
   # Respond with A for all:
   unzip "$APK_FILE_NAME" -d "$APP_FILE_PATH"
   ls -al
   ```
   * Creates files AndroidManifest.xml, *.properties, *.dex, etc.
   * Creates folders assets, com, google, lib, META-INF, okhttp3, org, res

1. Use Adroid Debug Bridge (adb) https://android-sdk-platform-tools-adb.en.softonic.com/mac?ex=RAMP-3252.3#google_vignette
   ```
   <strong>adb devices</strong>
   * daemon not running; starting now at tcp:5037
   * daemon started successfully
   List of devices attached   
   &nbsp;
   <strong>adb install "$APK_FILE_NAME"</strong>
   adb: no devices/emulators found
   ```

1. Consider files in the repo:
   * model_allowlist.json lists LLM models


   ### Use Android Studio app

1. Launch the Android Studio DMG file.
1. Drag Android Studio into the Applications folder, then launch Android Studio.
1. Choose whether to import previous Android Studio settings, then click OK.

   https://developer.android.com/studio/intro/studio-config

1. Complete the Android Studio Setup Wizard, which includes downloading the Android SDK components that are required for development.

   https://developer.android.com/courses

   https://developer.android.com/teach with Kotlin language Study in a Jam Session

1. See https://developer.android.com/tools/releases/platform-tools
   Select Mac to download 
   <tt>https://dl.google.com/android/repository/platform-tools-latest-darwin.zip</tt>
1. Use 
   ```
   cd /usr/local/tmp/platform-tools;  ls
   adb          etc1tool  hprof-conv  make_f2fs           mke2fs       NOTICE.txt         sqlite3
   billday.txt  fastboot  lib64       make_f2fs_casefold  mke2fs.conf  source.properties
   &nbsp;
   /usr/local/tmp/platform-tools $ ls -l ../platform-tools-latest-linux.zip 
   -rw-r--r-- 1 chronos chronos 7472902 Dec 20 22:44 ../platform-tools-latest-linux.zip
   &nbsp;
   /usr/local/tmp/platform-tools $ ./adb --version
   Android Debug Bridge version 1.0.41
   Version 35.0.2-12147458
   Installed as /usr/local/tmp/platform-tools/adb
   Running on Linux 6.6.30-02726-gb84bbdf6955e (x86_64)
   &nbsp;
   /usr/local/tmp/platform-tools $ ./fastboot --version
   fastboot version 35.0.2-12147458
   Installed as /usr/local/tmp/platform-tools/fastboot
   ```
   ### Use it

1. Pinch 4 fingers together over the touchpad and type "An" to select "Android Studio".

1. Select "Do not import settings."
1. Custom.
1. Choose the Default or darker Dracular theme (which uses less battery, I'm told).
1. Check "Android Virtual Device", then Next for /Users/wilsonmar/Library/Android/sdk
1. 2 GiB on a 16 GiB machine.
1. Finish. It takes several minutes for Downloading and install.
1. Provide password to HAXM installation changes.
1. When "Silent install Pass!" appears, press Finish.
1. See 


   ### Emulate app

1. Start an emulator: Launch one from Android Studio's AVD Manager
1. Wait for boot: Make sure the emulator is fully booted before running ADB commands
1. Check if running: Use adb devices to list connected devices




   ## Training

1. Get training

   https://www.udacity.com/course/developing-android-apps--ud853
   free video course with
   https://discussions.udacity.com
   at Android level "Lollipop".

   * https://github.com/udacity/ud851-Sunshine
   * https://github.com/udacity/ud851-Exercises

   https://developer.android.com/training/basics/firstapp/index.html
   text-only instructions


## More on IoT #

This is one of a series on IoT:

{% include iot_links.html %}
