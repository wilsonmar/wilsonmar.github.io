---
layout: post
title: "MySQL to MariaDB (and Aurora)"
excerpt: "It worked for your dad. Embrace it."
tags: [mysql, database]
date: "2016-08-18"
file: "myself-setup"
image:
# feature: fig orange mysql php 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622311/4f41e84a-0586-11e6-8164-6363861642fd.jpg
  credit: Kevin Yank
  creditlink: http://www.databasejournal.com/features/mysql/article.php/1402281/Build-Your-Own-Database-Driven-Website-Using-PHP--MySQL-Pt-4.htm
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This tutorial covers the basics for getting started with MySQL on Mac OSX,
PROTIPs and NOTEs are provided as instructions are presented in a hands-on way.

Content here was developed based on advice from <a href="#Resources">several websites</a>.

## Timeline #

MySQL was first proposed by Edgar Cord in 1970 with co-founder Michael "Monty" Widenius.

   NOTE: The "My" in MySQL is named after Michael's daughter, 
   <a target="_blank" href="https://www.facebook.com/my.widenius">My</a>,
   a character in a <a target="_blank" href="https://www.wikiwand.com/en/The_Book_about_Moomin,_Mymble_and_Little_My">
   1952 children's book</a> from Finland, where her family originates.

MySQL's "open-source" free usage helped it gain rapid growth as 
a natural choice for other open-source frameworks such as WordPress.

After Oracle acquired Sun (MySQL's owner),
the freedom of open-source was realized when Maria-DB was forked 
to create a <strong>drop-in replacement for MySQL</strong>
by MySQL co-founder Michael "Monty" Widenius, 
who left Oracle to start a new company (Monty Program).

MariaDB keeps in sync with MySQL (MariaDB 5.1.53 is based on MySQL 5.1.53).
Many developers have migrated to MariaDB.
If you don't need to first uninstall MySQL,
<a href="#InstallMariaDB">click here for instructions on installing MariaDB, below</a>.

However, on August 2016, MariaDB's MaxScale database proxy software was put under the Business Software License, 
which means it's really not fully open source.


## MySQL Still Kicking #

MySQL is thriving.

Uber in 
<a target="_blank" href="https://eng.uber.com/mysql-migration/">
2016 switched from Postgres to MySQL</a> under 
<a target="_blank" href="https://eng.uber.com/schemaless-part-one/">
Schemaless</a>. <a target="_blank" href="https://eng.uber.com/mysql-migration/">
More</a>. 

   * https://www.youtube.com/watch?v=bNeZYVIfskc
   * https://www.youtube.com/watch?v=Dg76cNaeB4s
   <br /><br />

Uber's decision is based on similar success by
<a target="_blank" href="http://gotocon.com/dl/goto-aar-2014/slides/MartyWeiner_ScalingPinterest.pdf">
Pinterest</a> and
<a target="_blank" href="https://backchannel.org/blog/friendfeed-schemaless-mysql">
Friendfeed</a>, who said:

> "MySQL works. It doesn't corrupt data. Replication works. 
We understand its limitations already. 
We like MySQL for storage, just not RDBMS usage patterns.

Ironically, MySQL is a good choice for fast-growth companies because of its <strong>simplicity</strong>.

Uber uses MySQL to build a key-value store (hash map) 
which saves any JSON data without strict schema validation, 
in a schemaless fashion (hence the name \#schemaless).
It's much like <a target="_blank" href="https://cloud.google.com/bigtable/docs/index">
Google Big Table</a>.

It has append-only sharded MySQL with buffered writes to support failing MySQL masters 
and a publish-subscribe feature for data change notification triggers. 
Lastly, Schemaless supports global indexes over the data.

The key difference is that the SQL schema is not used to designate domain information such as "inventory".



## Cloud instances #

There are several offerings that provide not only the database, but also
automation such as monitoring, 
scaling to provide capacity, 
backup/roll-back functionality,
auto-failover in several zones, 
auto-update of core software, etc.


### AWS Aurora #

<a target="_blank" href="https://aws.amazon.com/rds/aurora/">
https://aws.amazon.com/rds/aurora</a>
replaces MySQL in the AWS cloud, enabling scaling to 64 TB
and replicates across 3 zones.

Aurora is managed by the AWS RDS (Relational Data Service) (along with Postgres and DynamoDB).

   PROTIP: Many choose MySQL instead of DynamoDB for equivalent off-line capability
   since DynamoDB only works within the Amazon cloud.

It deals with:

   * instances
   * Security Groups
   * Parameter Groups
   * Snapshots
   <br /><br />
   
This means some limitations:

* Logs larger than 2% of storage allocated will get rotated every 24 hours.




### Google Cloud SQL #

<a target="_blank" href="http://www.infoworld.com/article/3107977/database/google-cloud-sql-provides-easier-mysql-for-all.html">
On August, 2016 Google announced</a>
Cloud SQL announced, a hosted version of MySQL 5.7 for the Google Cloud Platform.


<a name="DockerMySQL"></a>

## MySQL Docker

0. To start a mysql database in a docker container, run:

   <tt><strong>docker-compose -f src/main/docker/mysql.yml up -d
   </strong></tt>

0. To stop it and remove the container, run:

   <tt><strong>docker-compose -f src/main/docker/mysql.yml down
   </strong></tt>

0. To dockerize your application and all the services that it depends on,
   build a docker image of your app by running:

   <tt><strong>./mvnw package -Pprod docker:build
   </strong></tt>

0. Then run:

   <tt><strong>docker-compose -f src/main/docker/app.yml up -d
   </strong></tt>


<a name="InstallMySQL"></a>

## MySQL via Homebrew on Mac OSX #

### Install MySQL

PROTP: Use Homebrew instead of downloading from
   <a target="_blank" href="http://dev.mysql.com/downloads/">
   http://dev.mysql.com/downloads</a>, which gets you the latest version
   instead of one vetted.

0. Prepare the Homebrew environment (before any Homebrew install):

   <tt><strong>brew update
   </strong></tt>

   This can take several minutes.

   Resolve any issues reported.

   <tt><strong>brew doctor<br />
   brew upgrade
   </strong></tt>

   This can cause other packages to be downloaded, which can take several minutes.


0. Download and install the <strong>most recent</strong> version of the Homebrew installer:

   <tt><strong>brew install mysql
   </strong></tt>

   The response on July 4, 2017:

   <pre>
==> Downloading https://homebrew.bintray.com/bottles/mysql-5.7.18_1.sierra.bottl
Already downloaded: /Users/mac/Library/Caches/Homebrew/mysql-5.7.18_1.sierra.bottle.tar.gz
==> Pouring mysql-5.7.18_1.sierra.bottle.tar.gz
==> Using the sandbox
==> Caveats
We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation
&nbsp;
MySQL is configured to only allow connections from localhost by default
&nbsp;
To connect run:
    mysql -uroot
&nbsp;
To have launchd start mysql now and restart at login:
  brew services start mysql
Or, if you don't want/need a background service you can just run:
  mysql.server start
==> Summary
🍺  /usr/local/Cellar/mysql/5.7.18_1: 321 files, 232.9MB
   </pre>

   PROTIP: Notice the installer is specific to the 
   version of Mac OSX (such as "Sierra" in this case).


   Alternately, to install a specific version, such as 5.6:

   <tt><strong>brew install mysql56
   </strong></tt>

0. After some time, to upgrade MySQL:

   <tt><strong>brew upgrade mysql
   </strong></tt>

   A sample response:

   <pre>
==> Upgrading 1 outdated package, with result:
mysql 5.7.18_1
==> Upgrading mysql 
==> Downloading https://homebrew.bintray.com/bottles/mysql-5.7.18_1.sierra.bottle.tar.gz
######################################################################## 100.0%brew info mysql
==> Pouring mysql-5.7.18_1.sierra.bottle.tar.gz
==> Using the sandbox
   </pre>

   <a name="Caveats"></a>

   <pre>
==> Caveats
We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation
&nbsp;
MySQL is configured to only allow connections from localhost by default
&nbsp;
To connect run:
    mysql -uroot
&nbsp;
To have launchd start mysql now and restart at login:
  brew services start mysql
Or, if you don't want/need a background service you can just run:
  mysql.server start
==> Summary
🍺  /usr/local/Cellar/mysql/5.7.18_1: 321 files, 232.9MB
   </pre>

0. Expose folders and dependencies:

   mysql is the command line tool.<br />
   mysqld is the server.

   <tt><strong>brew info mysql
   </strong></tt>

   The sample response:

   <pre>
mysql: stable 5.7.18 (bottled)
Open source relational database management system
https://dev.mysql.com/doc/refman/5.7/en/
Conflicts with:
  mariadb (because mysql, mariadb, and percona install the same binaries.)
  mariadb-connector-c (because both install plugins)
  mysql-cluster (because mysql, mariadb, and percona install the same binaries.)
  mysql-connector-c (because both install MySQL client libraries)
  percona-server (because mysql, mariadb, and percona install the same binaries.)
/usr/local/Cellar/mysql/5.7.17 (321 files, 234.4MB)
  Poured from bottle on 2017-03-08 at 15:46:47
From: https://github.com/Homebrew/homebrew-core/blob/master/Formula/mysql.rb
==> Dependencies
Build: cmake ✘
Required: openssl ✔
==> Requirements
Required: macOS >= 10.7 ✔
==> Options
--with-archive-storage-engine
  Compile with the ARCHIVE storage engine enabled
--with-blackhole-storage-engine
  Compile with the BLACKHOLE storage engine enabled
--with-debug
  Build with debug support
--with-embedded
  Build the embedded server
--with-local-infile
  Build with local infile loading support
--with-test
  Build with unit tests
==> Caveats
     </pre>

   The same Caveats are shown.

   <a target="_blank" href="https://dev.mysql.com/doc/refman/5.6/en/osx-installation.html">
   https://dev.mysql.com/doc/refman/5.6/en/osx-installation.html</a>

0. Verify install:

   <tt><strong>which mysql.server
   </strong></tt>

   The expected response:

   <pre>
   /usr/local/bin/mysql
   </pre>

   BLAH: But one cannot cd into that folder.


   ### Configure #

0. Set OS permissions for root execution access the directory of executables:

   <tt><strong>sudo chown -R mysql /usr/local/var/mysql/
   </strong></tt>

   Supply the password when prompted.

   No response is expected.

0. <a target="_blank" href="http://blog.joefallon.net/2013/10/install-mysql-on-mac-osx-using-homebrew/">
   Joe Fallon, in his blog</a>, proposed additional configurations.
    


   <a name="SafeMode"></a>

   ### Start to Change Password #

   PROTIP: Your first interaction with MySQL after install should be to change the password.

0. Start in Safe Mode 

   <tt><strong>sudo mysqld_safe \-\-skip-grant-tables \-\-skip-syslog \-\-skip-networking
   </strong></tt>


   <a name="ResetPassword"></a>

   Per https://dev.mysql.com/doc/refman/5.7/en/resetting-permissions.html

0. Craft this command, substituted with your own password:

   <tt><strong>UPDATE mysql.user SET Password=PASSWORD('Pa$$w0rd') WHERE User='root';<br />
   FLUSH PRIVILEGES;
   </strong></tt>

0. Quit out of the MySQL session:

   <tt><strong>\q
   </strong></tt>

0. Quit safe mode:

   <tt><strong>mysqladmin shutdown</strong></tt>


   <a name="StartService"></a>

   ### Start daemon process #

0. Invoke mysql foreground daemon from the command line:

   <tt><strong>sudo mysql.server start
   </strong></tt>

   The response after supplying the password reflects the log file specific to your machine:

   <pre>
   Starting MySQL
   .Logging to '/usr/local/var/mysql/macs-MacBook-Pro-4.local.err'.
   . SUCCESS! 
   </pre>
   
   ### List processes

0. List brew services:

   <tt><strong>brew services list
   </strong></tt>

   <pre>Name         Status  User Plist
mongodb      started mac  /Users/mac/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
mysql        started mac  /Users/mac/Library/LaunchAgents/homebrew.mxcl.mysql.plist
   </pre>


   <a name="ListProcesses"></a>

0. List the daemons (processes) started by the command above,
   piped to filter the output:

   <tt><strong>ps -ax | grep mysql
   </strong></tt>

   A sample response (in addition to grep itself):

   <pre>
     PID TTY           TIME CMD
   21069 ttys002    0:00.02 /bin/sh /usr/local/Cellar/mysql/5.7.18_1/bin/mysqld_safe
         --datadir=/usr/local/var/mysql 
         --pid-file=/usr/local/var/mysql/macs-MacBook-Pro-4.local.pid
   21161 ttys002    0:00.33 /usr/local/Cellar/mysql/5.7.18_1/bin/mysqld 
         -basedir=/usr/local/Cellar/mysql/5.7.18_1 
         --datadir=/usr/local/var/mysql 
         --plugin-dir=/usr/local/Cellar/mysql/5.7.18_1/lib/plugin 
         --user=mysql 
         --log-error=/usr/local/var/mysql/macs-MacBook-Pro-4.local.err 
         --pid-file=/usr/local/var/mysql/macs-MacBook-Pro-4.local.pid
   </pre>

   If you want to use the database, proceed to <a href="#WorkSQL">Work with SQL</a> below.


   <a name="InvokeMySQL"></a>

   ### Invoke MySQL

0. If MySQL was started in the foreground, start another terminal window.

   One cannot just invoke mysql without specifying credentials, or this appears:

   <pre>ERROR 1045 (28000): Access denied for user 'mac'@'localhost' (using password: NO)
   </pre>

0. The command in the <a href="#Caveats">Caveats</a> message states this, which logs in without a password:

   <tt><strong>mysql -uroot
   </strong></tt>

   Alternately, to specify a password:

   <tt><strong>mysql -u root -p
   </strong></tt>

   You need to <a href="#StartService">Start the MySQL service</a> if you see this:

   <pre>ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)</pre>

   Success means the prompt should now change to:

   <pre><strong>mysql >
   </strong></pre>

   That's after reading this:

   <pre>
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 3
Server version: 5.7.19 Homebrew
&nbsp;
Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.
&nbsp;
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
&nbsp;
Type 'help;' or <a href="#Help">'\h'</a> for help. Type '\c' to clear the current input statement.
   </pre>


   If instead you get this error message:

   <pre>
my_print_defaults: Can't read dir of '/usr/local/etc/my.cnf.d' (Errcode: 2 - No such file or directory)
my_print_defaults: [ERROR] Fatal error in defaults handling. Program aborted!
     </pre>

   <a target="_blank" href="http://codepodu.com/a-help-message-which-actually-is-helpful/">
   Fix the damage done by brew prune</a>:

   <tt><strong>mkdir /usr/local/etc/my.cnf.d
   </strong></tt>

   No response is expected. Try the <a href="#StartService">command</a> again.


   <a name="Help"></a>

   ### Slash commands:

0. For help hints:    

   <tt><strong>\h
   </strong></tt>

   Results in this:

   <pre>
For information about MySQL products and services, visit:
   http://www.mysql.com/
For developer information, including the MySQL Reference Manual, visit:
   http://dev.mysql.com/
To buy MySQL Enterprise support, training, or other products, visit:
   https://shop.mysql.com/
&nbsp;
List of all MySQL commands:
Note that all text commands must be first on line and end with ';'
?         (\?) Synonym for `help'.
clear     (\c) Clear the current input statement.
connect   (\r) Reconnect to the server. Optional arguments are db and host.
delimiter (\d) Set statement delimiter.
edit      (\e) Edit command with $EDITOR.
ego       (\G) Send command to mysql server, display result vertically.
exit      (\q) Exit mysql. Same as quit.
go        (\g) Send command to mysql server.
help      (\h) Display this help.
nopager   (\n) Disable pager, print to stdout.
notee     (\t) Don't write into outfile.
pager     (\P) Set PAGER [to_pager]. Print the query results via PAGER.
print     (\p) Print current command.
prompt    (\R) Change your mysql prompt.
quit      (\q) Quit mysql.
rehash    (\#) Rebuild completion hash.
source    (\.) Execute an SQL script file. Takes a file name as an argument.
status    (\s) Get status information from the server.
system    (\!) Execute a system shell command.
tee       (\T) Set outfile [to_outfile]. Append everything into given outfile.
use       (\u) Use another database. Takes database name as argument.
charset   (\C) Switch to another charset. Might be needed for processing binlog with multi-byte charsets.
warnings  (\W) Show warnings after every statement.
nowarning (\w) Don't show warnings after every statement.
resetconnection(\x) Clean session context.
&nbsp;
For server side help, type 'help contents'
   </pre>

0. To quit out of a MySQL session:

   <tt><strong>\q
   </strong></tt>


   ### Stop server and process #

0. PROTIP: Stop the server before killing its process:

   <tt><strong>mysql.server stop
   </strong></tt>

0. To kill the processes:

   <tt><strong>sudo pkill mysql
   </strong></tt>

   No response is given unless you didn't use sudo:

   <pre>
   pkill: signalling pid 24162: Operation not permitted
   </pre>

   Alternately, specify by process ID (which is differs over time), for example:

   <tt><strong>kill -9 21069<br />
   kill -9 21161
   </strong></tt>


<a name="UninstallMySQL"></a>

## Uninstall MySQL from Homebrew #

0. Remove MySQL:

   <tt><strong>brew remove mysql
   </strong></tt>

   Response:

   <pre>
   Uninstalling /usr/local/Cellar/mysql/5.7.13... (13,344 files, 445.0M)
   </pre>

0. Recover disk space from uninstalled items:

   <tt><strong>brew cleanup \-\-force
   </strong></tt>

   Response:

   <pre>
   ==> This operation has freed approximately 318.2MB of disk space.
   </pre>

0. Remove services MacOS invokes when a user logs in:

   <tt><strong>sudo ls ~/Library/LaunchAgents
   </strong></tt>

   If file "homebrew.mxcl.mysql.plist" exists, remove it:

   <tt><strong>sudo rm ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
   </strong></tt>

   NOTE: In previous versions, the file was "com.mysql.mysqld.plist".

0. Remove lefover database files:

   <tt><strong>ls /usr/local/var/mysql
   </strong></tt>

   If files exist there, remove them all:

   <tt><strong>sudo rm -rf /usr/local/var/mysql
   </strong></tt>

   Skipping the above step means you will not be able to log in as root initially to set the password.



<a name="InstallMariaDB"></a>

## MariaDB via Homebrew #

MariaDB ships with additional storage engines installed 
(with no additional compilation as with MySQL):
Aria, XtraDB (an enhanced and extended version of the InnoDB storage engine), PBXT, FederatedX (a drop-in replacement for Federated), OQGraph, and SphinxSE 
in addition to standard MyISAM, blackhole, CSV, Memory, etc.

   <pre><strong>show storage engines;
   </strong></pre>

<a target="_blank" href="http://kb.askmonty.org/v/mariadb">
http://kb.askmonty.org/v/mariadb</a> is the MariaDB Knowledgebase. 

0. Take a full backup before doing this.
0. If you have MySQL installed, <a href="#UninstallMySQL">uninstall MySQL</a>.
0. If you have MariaDB installed:

   <tt><strong>brew uninstall mariadb \-\-force -s
   </strong></tt>

   `-s` clears the brew cache.

   `--force` is needed in the command to avoid this:

   <pre>Error: No such keg: /usr/local/Cellar/mariadb
   </pre>

   No response is returned if it worked.

0. Remove dead symlinks:

   <tt><strong>brew prune
   </strong></tt>

   The response, for example:

   <pre>Pruned 0 symbolic links and 17 directories from /usr/local
   </pre>

0. Install MariaDB:

   <tt><strong>brew install mariadb
   </strong></tt>

   If MySQL is already installed, the response is:

   <pre>
   Error: Cannot install mariadb because conflicting formulae are installed.
   mysql: because mariadb, mysql, and percona install the same binaries.
   </pre>

   If you get the above, uninstall mysql, kill the processes running, and try again.

   The response:

   <pre>
==> Downloading https://homebrew.bintray.com/bottles/mariadb-10.1.14.el_capitan.
######################################################################## 100.0%
==> Pouring mariadb-10.1.14.el_capitan.bottle.tar.gz
==> Caveats
A "/etc/my.cnf" from another install may interfere with a Homebrew-built
server starting up correctly.
&nbsp;
To connect:
    mysql -uroot
&nbsp;
To have launchd start mariadb now and restart at login:
  brew services start mariadb
Or, if you don't want/need a background service you can just run:
  mysql.server start
==> Summary
🍺  /usr/local/Cellar/mariadb/10.1.14: 573 files, 131.1M
   </pre>

   Before you boldly start:

0. Verify the location of mysql because mariadb is a flavor of it:

   <tt><strong>command -v mysql
   </strong></tt>

   The response:

   <pre>/usr/local/bin/mysql
   </pre>

0. Invoke interactively from the command line:

   <tt><strong>echo $TMPDIR
   </strong></tt>

   Sample response:

   <pre>
   /var/folders/j_/gh27gpxj1t58hyryfg9drvdc0001gn/T/
   </pre>

0. Now clear it:

   <tt><strong>unset TMPDIR
   </strong></tt>

   Do another echo to get a blank response.

0. Invoke interactively from the command line (all in one line):

   <pre><strong>mysql_install_db --verbose --user=$("$whoami") \
      --basedir="$(brew --prefix mariadb)" \
      --datadir=/usr/local/var/mysql
   </strong></pre>

   NOTE: The `whoami` returns the output from running the whoami command.

   In previous examples, "--tmpdir=/tmp" is not recognized.


<a name="WorkSQL"></a>

## Work with SQL #

0. Define a root password to secure your installation using the provided script:

   <tt><strong>mysql_secure_installation
   </strong></tt>

   This invokes the script in a folder such as:<br />
   /usr/local/Cellar/mysql/5.5.10/bin/<br />
   (depending on the version installed).

   The response:

   <pre>
   Securing the MySQL server deployment.
   &nbsp;
   Connecting to MySQL using a blank password.
   Segmentation fault: 11
   </pre>

   CAUTION: This is where I'm stuck now.


## Interactive SQL Clients #

<a name="MySQLAdmin"></a>

## MySQLAdmin #

mysqladmin is a command-line interface for administrators to perform server administration tasks.

0. On a Terminal command line:

   <tt><strong>mysqladmin
   </strong></tt>

   The response is long, starting with:

   <pre>
mysqladmin  Ver 8.42 Distrib 5.7.18, for osx10.12 on x86_64
Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.
&nbsp;
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
&nbsp;
Administration program for the mysqld daemon.
   </pre>

   The response listing command usage options:

   <pre>
Usage: mysqladmin [OPTIONS] command command....
  --bind-address=name IP address to bind to.
  -c, --count=#       Number of iterations to make. This works with -i
                      (--sleep) only.
  -#, --debug[=#]     This is a non-debug version. Catch this and exit.
  --debug-check       This is a non-debug version. Catch this and exit.
  --debug-info        This is a non-debug version. Catch this and exit.
  -f, --force         Don't ask for confirmation on drop database; with
                      multiple commands, continue even if an error occurs.
  -C, --compress      Use compression in server/client protocol.
  --character-sets-dir=name 
                      Directory for character set files.
  --default-character-set=name 
                      Set the default character set.
  -?, --help          Display this help and exit.
  -h, --host=name     Connect to host.
  -b, --no-beep       Turn off beep on error.
  -p, --password[=name] 
                      Password to use when connecting to server. If password is
                      not given it's asked from the tty.
  -P, --port=#        Port number to use for connection or 0 for default to, in
                      order of preference, my.cnf, $MYSQL_TCP_PORT,
                      /etc/services, built-in default (3306).
  --protocol=name     The protocol to use for connection (tcp, socket, pipe,
                      memory).
  -r, --relative      Show difference between current and previous values when
                      used with -i. Currently only works with extended-status.
  --secure-auth       Refuse client connecting to server if it uses old
                      (pre-4.1.1) protocol. Deprecated. Always TRUE
  -s, --silent        Silently exit if one can't connect to server.
  -S, --socket=name   The socket file to use for connection.
  -i, --sleep=#       Execute commands repeatedly with a sleep between.
  --ssl-mode=name     SSL connection mode.
  --ssl               Deprecated. Use --ssl-mode instead.
                      (Defaults to on; use --skip-ssl to disable.)
  --ssl-verify-server-cert 
                      Deprecated. Use --ssl-mode=VERIFY_IDENTITY instead.
  --ssl-ca=name       CA file in PEM format.
  --ssl-capath=name   CA directory.
  --ssl-cert=name     X509 cert in PEM format.
  --ssl-cipher=name   SSL cipher to use.
  --ssl-key=name      X509 key in PEM format.
  --ssl-crl=name      Certificate revocation list.
  --ssl-crlpath=name  Certificate revocation list path.
  --tls-version=name  TLS version to use, permitted values are: TLSv1, TLSv1.1,
                      TLSv1.2
  -u, --user=name     User for login if not current user.
  -v, --verbose       Write more information.
  -V, --version       Output version information and exit.
  -E, --vertical      Print output vertically. Is similar to --relative, but
                      prints output vertically.
  -w, --wait[=#]      Wait and retry if connection is down.
  --connect-timeout=# 
  --shutdown-timeout=# 
  --plugin-dir=name   Directory for client-side plugins.
  --default-auth=name Default authentication client-side plugin to use.
  --enable-cleartext-plugin 
                      Enable/disable the clear text authentication plugin.
  --show-warnings     Show warnings after execution
&nbsp;
Variables (--variable-name=value)
and boolean options {FALSE|TRUE}  Value (after reading options)
--------------------------------- ----------------------------------------
bind-address                      (No default value)
count                             0
force                             FALSE
compress                          FALSE
character-sets-dir                (No default value)
default-character-set             auto
host                              (No default value)
no-beep                           FALSE
port                              0
relative                          FALSE
secure-auth                       TRUE
socket                            (No default value)
sleep                             0
ssl                               TRUE
ssl-verify-server-cert            FALSE
ssl-ca                            (No default value)
ssl-capath                        (No default value)
ssl-cert                          (No default value)
ssl-cipher                        (No default value)
ssl-key                           (No default value)
ssl-crl                           (No default value)
ssl-crlpath                       (No default value)
tls-version                       (No default value)
user                              (No default value)
verbose                           FALSE
vertical                          FALSE
connect-timeout                   43200
shutdown-timeout                  3600
plugin-dir                        (No default value)
default-auth                      (No default value)
enable-cleartext-plugin           FALSE
show-warnings                     FALSE
&nbsp;
Default options are read from the following files in the given order:
/etc/my.cnf /etc/mysql/my.cnf /usr/local/etc/my.cnf ~/.my.cnf 
The following groups are read: mysqladmin client
The following options may be given as the first argument:
--print-defaults        Print the program argument list and exit.
--no-defaults           Don't read default options from any option file,
                        except for login file.
--defaults-file=#       Only read default options from the given file #.
--defaults-extra-file=# Read this file after the global files are read.
--defaults-group-suffix=#
                        Also read groups with concat(group, suffix)
--login-path=#          Read this path from the login file.
&nbsp;
Where command is a one or more of: (Commands may be shortened)
  create databasename Create a new database
  debug     Instruct server to write debug information to log
  drop databasename Delete a database and all its tables
  extended-status       Gives an extended status message from the server
  flush-hosts           Flush all cached hosts
  flush-logs            Flush all logs
  flush-status    Clear status variables
  flush-tables          Flush all tables
  flush-threads         Flush the thread cache
  flush-privileges      Reload grant tables (same as reload)
  kill id,id,...  Kill mysql threads
  password [new-password] Change old password to new-password in current format
  ping      Check if mysqld is alive
  processlist   Show list of active threads in server
  reload    Reload grant tables
  refresh   Flush all tables and close and open logfiles
  shutdown    Take server down
  status    Gives a short status message from the server
  start-slave   Start slave
  stop-slave    Stop slave
  variables             Prints variables available
  version   Get version info from server
   </pre>

0. Use mysqladmin to change password (replacing <em>[newpassword]</em>
   with one you create)

   <pre><strong>mysqladmin -u root password <em>[newpassword]</em>
   </strong></pre>

   PROTIP: Write the password in a secure document and paste it in the command
   to be sure you have it correct in the future.

   ### SequelPro

   PROTIP: Use Sequel Pro's Export and Import features (use a MySQL dump) to move databases.

   NOTE: There is no brew install sequelpro.

0. Download SequelPro SQL client from

   <a target="_blank" href="http://www.sequelpro.com/">http://www.sequelpro.com</a>

0. In the Downloads folder click the file downloaded
   (sequel-pro-1.1.2.dmg as of June 2016).
0. In the window that pops up, click "Sequel Pro".
0. Click "Open" in the "downloaded from the internet" dialog.
0. Click X to dismiss the "Sequel Pro" window.
0. Press command+tab to select Sequel Pro's "pancake" icon.

   QUESTION: Where is this installed?

0. Pinch with three fingers for the Mac's Launch window.

0. Use <a target="_blank" href="http://www.sequelpro.com/docs/Keyboard_Shortcuts">
   SequelPro's keyboard shortcuts</a>.

   <a name="Sockets"></a>

   ### Sockets #

0. Since OS X expects the MySQL socket <strong>mysql.sock</strong> 
   to be in folder <strong>/var/mysql</strong>, 
   create it and add a symbolic link to where the socket actually lives:

   <pre><strong>cd \
   sudo mkdir /var/mysql
   sudo chmod 755 /var/mysql
   sudo ln -s /tmp/mysql.sock /var/mysql/mysql.sock
   </strong></pre>

   Alternately, installation of MySQL 5 by MacPorts places the Socket File in folder:

   <pre>
   /opt/local/var/run/mysql5/mysqld.sock
   </pre>

   and data files in

   <pre>
   /opt/local/var/db/mysql5/
   </pre>

   <a target="_blank" href="http://www.sequelpro.com/docs/Where_are_MySQLs_Files">
   http://www.sequelpro.com/docs/Where_are_MySQLs_Files</a>

0. Create a new connection via the Socket option without changing any settings.

   Both MySQL and MariaDB use main configuration file <strong>my.cnf</strong>. 



## Interactive mode #

<a target="_blank" href="https://www.youtube.com/watch?v=RSHevYMwCVw">
VIDEO</a>
The command-line client is mysql.

1. http://dev.mysql.com/downloads/workbench/
   MySQL Workbench install on mac

0. Start the mysqld server so anyone can log in with full permissions:

   <tt><strong>mysqld_safe \-\-skip-grant-tables
   </strong></tt>

   Open another Terminal shell window on any folder.

0. Log in without a password:

   <tt><strong>mysql -u root
   </strong></tt>

   The response:

   <pre>
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2
Server version: 5.7.13 Homebrew
&nbsp;
Copyright (c) 2000, 2016, Oracle and/or its affiliates. All rights reserved.
&nbsp;
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
&nbsp;
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
   </pre>   

   See <a target="_blank" href="https://dev.mysql.com/doc/refman/5.6/en/connecting-disconnecting.html">
   docs on Connecting to and Disconnecting from the Server</a>

0. To exit, type in quit and press Enter:

   <tt><strong>quit
   </strong></tt>

   Then bring up mysql again.

0. To start automatically upon server start:

   <pre>#start
   launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
&nbsp;
   #stop
   launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
   </pre>




<a name="VerifyDB"></a>

## List databases #

There are two ways to get a list of databases:

0. From the command line:

   <tt><strong>mysqlshow
   </strong></tt>

   From within MySQL:

   <tt><strong>show databases;
   </strong></tt>

   The expected response on a newly created instance:

   <pre>
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
+--------------------+
3 rows in set (0.00 sec)
   </pre>



<a name="ManageUsers"></a>

## Manage Users #

0. List users in the mysql system database by specifying a single line:

   <tt><strong>use mysql; select * from user;
   </strong></tt>

0. List users by entering SQL commands in several lines: 

   <tt><strong>SELECT * FROM information_schema.TABLES
   </strong></tt>

   The response is an arrow:

   <pre>
   ->
   </pre>

   To exit, press control+C then Enter.

   Enter more lines:

   <tt><strong>WHERE TABLE_NAME LIKE '%user%'
   </strong></tt>

   To have mysql process the statement lines, type a semicolon and press Enter:

   <tt><strong>
   ;
   </strong></tt>


   The response should be a row containing:

   <pre>
   mysql   user    BASE TABLE  MyISAM
   </pre>


0. Reset all the root passwords (the password being "password"):

   <tt><strong>UPDATE mysql.user SET Password=PASSWORD('NewPassword') WHERE User='root';<br />
   FLUSH PRIVILEGES;
   </strong></tt>

   If you kill the running copy of mysqld_safe and 
   start mysql again without the skip-grant-tables option, 
   you should be able to log in with mysql -u root -p and the new password you just set.




<a name="CreateDB"></a>

## Create a database #

These commands are entered `mysql>`.

0. Create: 

   <tt><strong>create database sampledb;
   </strong></tt>

   The response:

   <pre>
   Query OK, 1 row affected (0.00 sec)
   </pre>


0. Switch

   <tt><strong>use sampledb;
   </strong></tt>


<a name="CommandFiles"></a>

## Command Files #

PROTIP: Interact with the databae via batch-submitted files for repeatability.

0. Copy a file SQL code from GitHub.

   TBD

PROTIP: Interact with the databae via batch-submitted files for repeatability.

0. Save the SQL script to a folder such as ~/sql.

0. Invoke a SQL script using the Linux source command:

   <tt><strong>mysql < ~/sql/sqlfile1
   </strong></tt>

0. Invoke a SQL script using the Linux source command:

   <tt><strong>source file_name<br />
   \. file_name
   </strong></tt>

   About the sample database creation

0. Since the script creates the database, 
   the repeatable script needs to begin by deleting it:

   <pre>
   DROP DATABASE IF EXISTS sampledb;
   </pre>

0. PROTIP: If a SQL script needs to create several databases,
   group the various actions for a particular database together rather than
   doing each step for each database.

   <pre>
   DROP DATABASE IF EXISTS sampledb;
   create database sampledb;
   use sampledb;
   </pre>


   To create a database based on
   <a target="_blank" href="http://stackoverflow.com/questions/20958/list-of-standard-lengths-for-database-fields"> this discussion</a>:

<pre>
CREATE SCHEMA 'inmail';
CREATE TABLE  'inmail','NEWMAIL' (
'first_name' VARCHAR(48) NULL,
'family_name' VARCHAR(96) NULL,
'subscribe' VARCHAR(1) NULL,
'emailaddr' VARCHAR(128) NULL,
'password' VARCHAR(48) NULL,
'emailsubject' VARCHAR(120) NULL,
'loc' VARCHAR(48) NULL,
'rating' INT NOT NULL,
'pubthis' VARCHAR(1) NULL,
'comments' VARCHAR(4046) NULL,
'refererurl' VARCHAR(255) NULL,
'user_agent' VARCHAR(45) NULL,
'remote_addr' VARCHAR(48) NULL,
'local_addr' VARCHAR(48) NULL,
'city_addr' VARCHAR(96) NULL,
'street_addr' VARCHAR(96) NULL,
'phone_country' MEDIUMINT UNSIGNED NOT NULL,
'phone_numberâ€™ MEDIUMINT UNSIGNED NOT NULL,
'postal' MEDIUMINT UNSIGNED NOT NULL,
'longitude' NUMERIC 9,6 NULL,
'latitude' NUMERIC 8,6 NULL,
'visitor_id' INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY);
'savedatetime' TIMESTAMP,
);
// comment not a BLOB to reduce overhead
// phone number is 10 digits in the US.
// postal code 11
// TIMESTAMP is 
</pre>


<a name="Engines"></a>

## InnoDB Engine #

InnoDB is newer, faster, and scales better than the MyISAM database engine.

Allocate a maximum amount of RAM to your MySQL instance with the 
<strong>innodb_buffer_pool_size</strong> parameter and give at least 15Mb to the 
<strong>query_cache_size</strong> parameter. 

Read <a target="_blank" href="http://www.mysqlperformanceblog.com/2007/11/01/innodb-performance-optimization-basics/">
this article about InnoDB Performance Optimization Basics</a>.


## Replication

If the MySQL instance is running within AWS,
<a target="_blank" href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.External.Repl.html">
Replicate it external to Amazon RDS</a>
based on 
<a target="_blank" href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MariaDB.Procedural.Replication.GTID.html">
GTIDs (Global Transaction Identifiers)</a>.
This involves setting the db on and off as read-only.


<a name="Monitoring"></a>

## Monitoring #

https://github.com/osterman/mysql_manager<br />
https://github.com/osterman/mysql_health
from <a target="_blank" href="http://www.osterman.com/">Erik Osterman</a>
(<a target="_blank" href="https://twitter.com/eosterman/">@eosterman</a>)

He uses @Helm, @codefresh, Kubernetes to, on every git commit, auto spin up and test containers of a 12-factor microservices app : https://t.co/xK8RAIuVzO

https://github.com/osterman/kubernetes-on-aws
Deploying Kubernetes on AWS with CloudFormation and CoreOS

https://github.com/osterman/geoip-api
RESTful GeoIP API backed by MaxMind Lite


<a name="Resources"></a>

## Learn More #

Pinal Dave (pronounced "da way", @pinaldave from India)
has been producing video courses for years on
<a target="_blank" href="http://blog.sqlauthority.com/"> SQLAuthority.com</a>
before doing the 29 Apr 2013
<a target="_blank" href="https://app.pluralsight.com/library/courses/mysql-fundamentals-part1/table-of-contents">
MySQL Fundamentals video course on Pluralsight</a>
(2 hour 37 minutes)


Tim Molter's  
<a target="_blank" href="http://obscuredclarity.blogspot.in/2009/08/install-mysql-on-mac-os-x.html">blog</a> has a Q&A about installation going back to 2009.

https://stackoverflow.com/questions/15016376/cant-connect-to-local-mysql-server-through-socket-homebrew
contains a deprecated suggestion in:

mysql_install_db --basedir="$(brew --prefix mysql)"
