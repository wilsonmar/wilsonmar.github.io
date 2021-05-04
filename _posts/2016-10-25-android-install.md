---
layout: post
title: "Android Development install on Mac"
excerpt: "Install Android Studio and other steps to Android Things"
tags: [IoT, Android, Mac]
date: "2016-10-25"
file: "android-install"
image:
# feature: pic white robots woman 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622167/45abd918-0585-11e6-8537-a58e0b55e3ec.jpg
  credit: Cyberconstruct.be
  creditlink: http://cyberconstruct.be/2015/02/digital-job-crafting/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Here is a tutorial on how to develop an Android apk file on a Mac.

1. Install XCode (via the App Store)
2. XCode command line tools, for a prompt for a dialog: 

   <pre><strong>
   xcode-select --install 
   </strong></pre>

3. Homebrew
4. brew doctor
5. Use Homebrew to install Java:

   <pre><strong>
   brew install --cask caskroom/versions/java8
   </strong></pre>

6. Use Homebrew to install tools used for Android dev :

   <pre><strong>
   brew install ant
   brew install maven
   brew install gradle
   </strong></pre>

7. To avoid ".android/repositories.cfg could not be loaded" error, create a blank file:

   <pre><strong>
   touch ~/.android/repositories.cfg
   </strong></pre>

   The equivalent of this for Powershell on Windows 10: 

   New-Item C:\Users\$username\.android\repositories.cfg -type file

8. Use Homebrew to install the Android Software Development Kit (sdk):

   <pre><strong>
   brew install --cask android-sdk
   </strong></pre>

   This takes several minutes. Just wait while "Installing Cask android-sdk".

6. Use Homebrew to install the Android Native Development Kit (ndk):

   <pre><strong>
   brew install --cask android-ndk
   </strong></pre>

0. Install all the Android SDK components:

   NOTE: The `android update sdk --no-ui` command is deprecated.

0. Install HAXM for blazing fast emulators. Check out the "Configuring VM Acceleration on Mac" section at:

   http://developer.android.com/tools/devices/emulator.html

0. Edit your `~/.bash_profile` to update environment variables:

   <pre>
export ANDROID_SDK_ROOT="/usr/local/share/android-sdk"      
export ANT_HOME=/usr/local/opt/ant
export MAVEN_HOME=/usr/local/opt/maven
export GRADLE_HOME=/usr/local/opt/gradle
export ANDROID_HOME=/usr/local/opt/android-sdk
export ANDROID_NDK_HOME=/usr/local/opt/android-ndk
   </pre>

0. Update your paths (bonus points to a better solution to the hardcoded build tools version):

   <pre>
export PATH=$ANT_HOME/bin:$PATH
export PATH=$MAVEN_HOME/bin:$PATH
export PATH=$GRADLE_HOME/bin:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/build-tools/19.1.0:$PATH
   </pre>

0. Periodically run these commands again to ensure you're staying up to date:

   <pre><strong>
   brew update
   android update sdk --no-ui
   </strong></pre>

   There might be an issue with brew update and the android-sdk formula.

   ## Android Studio

   Alternately, you can install and use Eclipse, IntelliJ, or your other favorite IDE.

   Alternately, download the dmg from https://developer.android.com/studio/install.html

   But the easiest way is:

0. Install Android Studio:

   <pre><strong>
   brew install --cask android-studio
   </strong></pre>

   Alternately, see http://macappstore.org/android-studio/
   for manual download.
   https://classroom.udacity.com/courses/ud808/lessons/4216368924/concepts/43072785890923#
   is a video mini-course done April 2015 about that approach.

   * https://github.com/caskroom/homebrew-cask/blob/master/Casks/android-studio.rb

0. Pinch 4 fingers together over the touchpad and type "An" to select "Android Studio".

0. Select "Do not import settings."
0. Custom.
0. Choose the Default or darker Dracular theme (which uses less battery, I'm told).
0. Check "Android Virtual Device", then Next for /Users/wilsonmar/Library/Android/sdk
0. 2 GiB on a 16 GiB machine.
0. Finish. It takes several minutes for Downloading and install.
0. Provide password to HAXM installation changes.
0. When "Silent install Pass!" appears, press Finish.
0. See 




   ## Training

0. Get training

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
