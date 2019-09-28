---
layout: post
title: "Package Managers"
excerpt: "Download and install dependencies and keep them updated"
tags: [Linux,DevOps]
date: "2107-04-23"
file: "package-managers"
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

This repo is about making use of utilities that install software on various operating systems.

There are different package managers for each operating system and language:

| Operating System | Command | File  | Folder        |
| ---------------- | ------- | ----- |-------------- |
| Red Hat, Fedora, CentOS | [yum](#YUM) | .rpm | /var/lib/rpm |
| Debian, Ubuntu | [apt-get](#apt), dpkg | .deb | apt repositories |
| SUSE, openSUSE | [zypper](#zypper) | .rpm | - |
| MacOS            | brew   | - | Homebrew.org |
| Windows          | choco   | .nuget | Chocolatey.org |
| Java             | mvn | pom.xml | - | - |
| Ruby             | [rake](#rake) | .gemfile | - | - |
| Node             | npm | .npm | - | - |
| Python           | pip   | package.json | - | - |

Some were developed by the same people who wrote the operating system or

Other (in the case of Mac, Windows) were developed by others.

Each package manager have a different architecture and way of working.

They all have similar functionality:

1. The package manager utility is downloaded and installed.
2. Packages are stored in a website or a local network folder.
3. A text file associated with each application specifies the files to be downloaded and installed for that application.
4. A utility is run to download and install packages based on the specification file.
5. A utility is run to list what has been installed by various specification files.
6. A utility is run to provide information about each package.
7. A utility is run to identify updates and installs them.
8. A utility is run to identify which others are dependent on a package.
9. A utility is run to remove packages for an application (to free up disk space).

<hr />

<a name="rpm"></a>

## RPM

1. RPM comes with Red Hat, Fedora, and CentOS operating systems.

   The RPM database is located by default at:<br />
   <strong>/var/lib/rpm</strong>

2. RPM works with files from DVD media or file folder.

3. Files for each app are defined in .rpm files.

4. To install files specified in an .rpm file from that application's folder:

   <pre><strong>rpm ?
   </strong></pre>

   To -install a package from a source:

   <pre><strong>rpm -i <em>package</em>.rpm
   </strong></pre>

5. To -query a -list of all rpms installed:

   <pre><strong>rpm -ql
   </strong></pre>

   "x86_64" is for 64-bit x86 (Intel) machines.

6. To -query -package -information:

   <pre><strong>rpm -qpi <em>package</em>.rpm
   </strong></pre>

7. To update:

   <pre><strong>rpm -u
   </strong></pre>

8. To -identify which others are dependent on a package:

   <pre><strong>rpm -i <em>package</em>.rpm
   </strong></pre>

9. To remove packages for an app:

   <pre><strong>rpm -e <em>myapp</em>
   </strong></pre>



<a name="zypper"></a>

## Zypper for SUSE

1. The SUSE and openSUSE operating systems also use .rpm files.

   However, SUSE use the zypper se packagename.

   The RPM database is located by default at:<br />
   <strong>/var/lib/rpm</strong>

2. RPM works with files from DVD media or file folder.

3. Files for each app are defined in .rpm files.

4. To install files specified in an .rpm file from that application's folder:

   <pre><strong>zypper in <em>package</em>
   </strong></pre>

5. To -query a -list of all rpms installed:

   <pre><strong>?
   </strong></pre>

6. To search for a package:

   <pre><strong>zypper se <em>package</em>
   </strong></pre>

7. To update:

   <pre><strong>zypper update
   </strong></pre>

8. To -identify which others are dependent on a package:

   <pre><strong>?
   </strong></pre>

9. To remove packages for an app:

   <pre><strong>zypper rm <em>myapp</em>
   </strong></pre>



<a name="yum"></a>

## YUM (Yellowdog Unified Manager)

<a target="_blank" href="https://access.redhat.com/videos/214873">
https://access.redhat.com/videos/214873</a>
is a video overview about yum.

<a target="_blank" href="https://access.redhat.com/articles/yum-cheat-sheet/">
https://access.redhat.com/articles/yum-cheat-sheet</a>
lists all the commands.

1. YUM comes with Red Hat, Fedora, and CentOS operating systems,
   running as `yum.repos.d` daemon.

   To see information about itself:

   <pre><strong>yum repolist
   </strong></pre>

2. To search rpms available from the website:

   <pre><strong>yum search <em>myapp</em>
   </strong></pre>

   List groups of software available and installed:

   <pre><strong>yum grouplist
   </strong></pre>

3. Files for each app are defined in .rpm files.

   Old versions are not deleted in case one wants to `yum downgrade <em>package</em>`.

4. To install files specified in an .rpm file from that application's folder:

   <pre><strong>yum install <em>myapp</em>
   </strong></pre>

5. To operate on packages as batched commands:

   <pre><strong>yum shell 
   info <em>package</em>
   ts
   run
   </strong></pre>

   `ts` is transaction summary listing the commands to be run.

   The commands can be in a file for processing.

6. To list what all has been installed:

   <pre><strong>yum list installed
   </strong></pre>

   To list updates available:

   <pre><strong>yum updatelist info <em>package</em>
   </strong></pre>

   To list what updates will occur:

   <pre><strong>yum check-update
   </strong></pre>

7. To perform the upgrade:

   <pre><strong>yum upgrade <em>package</em>
   </strong></pre>

8. To -identify which others are dependent on a package:

   <pre><strong>?
   </strong></pre>

9. To remove packages for an app:

   <pre><strong>yum remove <em>myapp</em> -y
   </strong></pre>

   `-y` says don't prompt "are you sure?".


<a name="apt"></a>

## APT

1. API comes with Debian and Ubuntu operating systems, running as
   `/etc/apt/aptdaemon/`.

   The DPKG database is located by default at:<br />
   <strong>/var/lib/dpkg</strong>

   To see information about itself:

2. To search debs available locally:

   <pre><strong>ls /var/cache/apt
   ls /var/cahce/apt/archives/
   </strong></pre>

3. Files for each app are defined in .deb files.

4. To -install files specified in an .rpm file from that application's folder:

   <pre><strong>apt-get install <em>package</em>
   </strong></pre>

   For a specific package:

   <pre><strong>dpkg -i <em>package</em>
   </strong></pre>

5. To uninstall:

   <pre><strong>dpkg-reconfigure <em>package</em> 
   </strong></pre>

6. To -list what all has been installed:

   <pre><strong>dpkg -l
   </strong></pre>

   To list updates available:

7. To obtain the latest versions:

   <pre><strong>apt-get update
   </strong></pre>

8. To -identify which others are dependent on a package:

   <pre><strong>?
   </strong></pre>

9. To remove packages for an app:

   <pre><strong>dpkg -r <em>package</em> -y
   </strong></pre>

   `-y` says don't prompt "are you sure?".

<hr />

<a name="rake"></a>

## Rake Ruby gemfiles

https://www.digitalocean.com/community/tutorials/how-to-work-with-the-ruby-package-manager-rubygems-getting-started

<hr />

## Share libraries

(These don't work on Macs)

To list shared libraries (.so files) for the ls command:

   <pre><strong>ldd /bin/ls
   </strong></pre>

To list loaded kernel (.ko) modules:

   <pre><strong>lsmod
   </strong></pre>

The PATH to search for modules is maintained in:

   <pre><strong>ls /etc/ls.so.conf
   </strong></pre>

List:

   <pre><strong>lldconfig -p | grep vmware
   </strong></pre>

For module parameters, look in directory:

   <pre><strong>/etc/modprobe.d
   </strong></pre>

## Further reading

<a target="_blank" href="https://app.pluralsight.com/library/courses/linux-installation-configuration/table-of-contents">
Linux Installation and Initial Configuration</a>
2 Jun 2014 by Andrew Mallett
covers half the material of the LPIC-1 Linux certification.

