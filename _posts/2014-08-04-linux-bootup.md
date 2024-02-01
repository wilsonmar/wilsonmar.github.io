---
layout: post
date: "2023-10-10"
file: "linux-bootup"
title: "Linux Bootup"
excerpt: "To diagnose and troubleshoot getting started"
tags: [linux, setup, USB]
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14624434/dab075ca-0597-11e6-9090-f93e259a5554.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article describes the boot-up process on Linux 
so you can better diagnose and troubleshoot issues.

## One-hour Rocky Linux sandbox

https://learning.oreilly.com/interactive-lab/rocky-linux-sandbox/9781098154349/lab/

<hr />

## Bootup

1. View the System boot log:

   <tt>more /var/log/boot.log</tt>

   Example response:

   <pre>
Starting udev:                                               [  OK  ]
Setting hostname localhost.localdomain:                      [  OK  ]
Setting up Logical Volume Management:   3 logical volume(s) in volume group "Vol Group" now active [  OK  ]
Checking filesystems
/dev/mapper/VolGroup-lv_root: clean, 188360/1068960 files, 2692948/4287488 blocks
/dev/sda1: clean, 46/128016 files, 111454/512000 blocks      [  OK  ]
Remounting root filesystem in read-write mode:               [  OK  ]
Mounting local filesystems:                                  [  OK  ]
Enabling local filesystem quotas:                            [  OK  ]
Enabling /etc/fstab swaps:                                   [  OK  ]
   </pre>


1. View <tt>/var/log/dmesg</tt> containing Kernel ring buffer (or kernel messages). Display the in-memory copy of the kernel ring buffer:

   <tt>sudo dmesg | head</tt>

   Example:

   <pre>
Initializing cgroup subsys cpuset
Initializing cgroup subsys cpu
Linux version 2.6.32-573.7.1.el6.x86_64  (mockbuild@c6b8.bsys.dev.centos.org) (gcc version 4.4.7 20120313  (Red Hat 4.4.7-16) (GCC) ) #1 SMP Tue Sep 22 22:00:00 UTC 2015
Command line: ro root=/dev/mapper/VolGroup-lv_root rd_NO_LUKS  LANG=en_US.UTF-8 rd_NO_MD rd_LVM_LV=VolGroup/lv_swap SYSFONT=latarcyrheb-sun16 crashkernel=auto rd_LVM_LV=VolGroup/ lv_root  KEYBOARDTYPE=pc KEYTABLE=us rd_NO_DM rhgb quiet
KERNEL supported cpus:
   Intel GenuineIntel
   AMD AuthenticAMD
   Centaur CentaurHauls
BIOS-provided physical RAM map:
 BIOS-e820: 0000000000000000 - 000000000009fc00 (usable)
    </pre>

<hr />

<a id="Bootupz"></a>

## Bootup

<a href="#BIOS">BIOS</a> -> Bootloader -> Kernel -> System Initialization


<a name="BIOS"></a>

### BIOS

The BIOS (Basic input/output system) performs sanity checks, such as the power-on self test (POST).

The BIOS loads the bootloader from the master boot record (MBR) on the hard disk.

### Bootloader

The standard Linux bootloader is the grand unified boot loader (GRUB or GRUB2). It is responsible for loading the kernel and associated kernel modules (or libraries) stored in a file referred to as the initramfs.

1. To get the GRUB menu, hold down the power button for 5 seconds or repeatedly pressing the Shift key during bootup.

1. Press c to enter the GRUB command-line environment.
1. Press Esc to return to main menu.
1. Press b to boot selected stanza.

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="top"><td><strong> e </strong></td><td> edit selected stanza or line</td></tr>
<tr valign="top"><td><strong> o </strong></td><td> open/create new line <strong>after</strong> current line </td></tr>
<tr valign="top"><td><strong> O </strong></td><td> Open/create <strong>before</strong> current line </td></tr>
<tr valign="top"><td><strong> d </strong></td><td> delete current line </td></tr>
</table>


### Kernel

The kernel is loaded from the hard disk to perform critical boot tasks.
It then passes control of the boot process to a system initialization  responsible for starting system services:

   * SysVinit (the oldest), 
   * <a href="#Upstart">Upstart</a>, and 
   * Systemd (currently the most widely used). 
   <br /><br />

The kernel starts the init process by reading file 
<tt>/etc/inittab</tt> to determine which <strong>runlevel</strong> to boot the system defined by the "initdefault" line.

See https://www.kernel.org/doc/Documentation/kernel-parameters.txt

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Runlevel </th><th> Target </th><th> Description </th></tr>
<tr valign="top"><td><strong> 0 </strong></td><td> poweroff.target </td><td> Hal t the system.</td></tr>
<tr valign="top"><td><strong> 1 or single </strong></td><td> poweroff.target </td><td> Hal  t the system.</td></tr>
<tr valign="top"><td><strong> 2 </strong></td><td> multi-user.target </td><td> Multi-user mode, traditionally with no NFS sharing or GUI.</td></tr>
<tr valign="top"><td><strong> 3 </strong></td><td> multi-user.target </td><td> Multi-user, traditionally with no GUI.</td></tr>
<tr valign="top"><td><strong> 4 </strong></td><td> Not defined </td><td> Either undefined (traditional) or a copy of runlevel 3.</td></tr>
<tr valign="top"><td><strong> 5 </strong></td><td> graphical.target </td><td> Multiple-user mode, traditionally with a GUI.</td></tr>
<tr valign="top"><td><strong> 6 </strong></td><td> reboot.target </td><td> Reboots the system.</td></tr>
</table>

"Emergency" / emergency.target is not technically a runlevel, but a boot stage in which a very basic environment is loaded.

Commands:

* <tt>init</tt> switches to the runlevel specified as an argument. Example: init 1.

* <tt>telinit</tt> Same function and syntax as the init command. Example: telinit 1.

* <tt>shutdown</tt> brings the system down. 

* <tt>reboot</tt> reboots the system.

* <tt>systemctl</tt> changes the current target on a Systemd-based distribution. 


#### SysVinit

To set the default runlevel or boot target for SysVinit-based distributions, modify the second field of the initdefault line of the /etc/inittab file:

id:5:initdefault:


<a name="Upstart"></a>

#### Upstart

Folder <tt>/etc/init</tt> contains configuration files for services.

File <tt>/etc/init/rc-sysinit.conf</tt> defines
the default boot-up runlevel.

To set the default runlevel or boot target for Upstart-based distributions, 
set the DEFAULT_RUNLEVEL value 

<tt>env DEFAULT_RUNLEVEL=2</tt>


#### SystemD

Instead of runlevels, Systemd uses a <strong>target</strong> for each specific services that start:

   * system.target 
   * basic.target
   * multi-user.target
   * graphical.target
   <br /><br />

<tt>/lib/systemd/system</tt>

To set the default runlevel or boot target for systemd-based distributions, set the symbolic link from default.target to the desired target in 

<pre><strong>ln -s /etc/systemd/system/default.target /lib/systemd/system/graphical.target</strong></pre>


<hr />

## Shutdown

The shutdown command is designed either to bring the system to a halt state or to completely power off the system. It can also be used to reboot the system. 

See https://learning.oreilly.com/library/view/comptia-linuxlpic-1-portable/9780134692357/ch03.xhtml

## Shell sessions

Linux launches a root shell session with this line:

   <pre>rw init=/bin/bash</pre>

## Wall broadcast

1. List

   ls -l /bin/wall

   -r-xr-sr-x. 1 root tty 15344 Jun 9 2014 /bin/wall

   By default, all users can execute the wall command because of the SGID permission placed on the executable file.

1. To broadcast a file or message text to all users who are currently logged in:

   wall -n [options][<em>file</em>|<em>message</em>]

   If you get "wall -n: not priviliged"
   su -

   Regular users cannot use the -n option, which is designed to remove the standard banner message:

   <pre>Broadcast message from me@localhost.localdomain (pts/1) (Thu Nov 24 13:13:31 2019):
   </pre>

## Resources

https://learning.oreilly.com/library/view/comptia-linuxlpic-1-portable/9780134692357/ch02.xhtml

## More on macOS

This is one of a series about macOS:

{% include mac_links.html %}
