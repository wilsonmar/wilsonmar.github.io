---
layout: post
date: "2023-01-07"
file: "log-parsing"
title: "Log Parsing"
excerpt: "Analyze logs using the AWK CLI utility and systems"
tags: [Bash, Linux, Logging]
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

{% include whatever.html %}

Servers typically save a line for every request it receives.

   ### Error logs
   
1. <a target="_blank" href="https://www.ossec.net/docs/log_samples/apache/apache.html">Examples from various servers</a>.

   <pre>[Thu Mar 13 19:04:13 2014] [error] [client 50.0.134.125] File does not exist: /var/www/favicon.ico
   </pre>
   
   https://kb.webtrends.com/articles/Information/Sample-Log-File-Apache-Extended-Log-File-Format/

   ### NGINX

1. Retrieve sample log from NGINX https://httpd.apache.org/docs/2.4/logs.html

   <pre>cat /var/log/nginx/access.log.1
   </pre>

   An example:

   <pre>example.com:80 127.0.0.1 - - [10/Oct/2022:05:05:01 -0400] "GET /status.html HTTP/1.1" 200 404 "-" "curl/7.19.7 (i486-pc-linux-gnu) libcurl/7.19.7 OpenSSL/0.9.8k zlib/1.2.3.3 libiidn/1.15"
   </pre>

   <a target="_blank" href="loggly.com/ultimate-guide/apache-logging-basics/">Another example</a>:

   <pre>10.185.248.71 - - [09/Jan/2015:19:12:06 +0000] 808840 "GET /inventoryService/inventory/purchaseItem?userId=20253471&itemId=23434300 HTTP/1.1" 500 17 "-" "Apache-HttpClient/4.2.6 (java 1.5)"
   </pre>

   ### Apache
   
1. <a target="_blank" href="https://luther.io/linux/how-to-parse-apache-log-files-with-awk/">Examples</a> from an Apache web server:

   <pre>40.77.188.136 example.com - [16/Jun/2021:00:17:19 +0000] "GET /wp-content/themes/salient/js/third-party/select2.min.js?ver=1623798364 HTTP/1.0" 200 66522 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b"
40.77.189.124 example.com - [16/Jun/2021:00:17:20 +0000] "GET /wp-content/plugins/popup-press/js/libs/jquery.cookie.js?ver=1.4.1 HTTP/1.0" 200 3238 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b"
40.77.190.126 example.com - [16/Jun/2021:00:17:20 +0000] "GET /wp-content/plugins/popup-press/js/libs/jquery.easing.1.3.js?ver=1.3 HTTP/1.0" 200 8305 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b"
40.77.167.41 example.com - [16/Jun/2021:00:17:23 +0000] "GET /what-we-do/training/in-person-classes/ HTTP/1.0" 200 206002 "-" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)"
114.119.137.180 example.com - [16/Jun/2021:00:17:27 +0000] "GET /what-we-do/training/in-person-classes?1587668887 HTTP/1.0" 301 0 "-" "Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; PetalBot;+https://webmaster.petalsearch.com/site/petalbot)"
114.119.137.180 example.com - [16/Jun/2021:00:17:29 +0000] "GET /what-we-do/training/in-person-classes/?1587668887 HTTP/1.0" 200 206057 "-" "Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; PetalBot;+https://webmaster.petalsearch.com/site/petalbot)"
104.196.63.107 example.com - [16/Jun/2021:00:17:53 +0000] "POST /wp-cron.php?doing_wp_cron=1623802673.1307730674743652343750 HTTP/1.0" 403 1673 "https://example.com/wp-cron.php?doing_wp_cron=1623802673.1307730674743652343750" "WordPress/5.7; https://example.com"
207.46.13.24 example.com - [16/Jun/2021:00:17:53 +0000] "GET /what-we-do/training/in-person-classes/?1614351193 HTTP/1.0" 200 206022 "-" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)"
114.119.131.28 example.com - [16/Jun/2021:00:17:53 +0000] "GET /what-we-do/training/in-person-classes/?1623559885 HTTP/1.0" 200 206061 "-" "Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; PetalBot;+https://webmaster.petalsearch.com/site/petalbot)"
157.55.39.165 example.com - [16/Jun/2021:00:18:06 +0000] "GET /what-we-do/training/in-person-classes/?1620248397 HTTP/1.0" 200 206024 "-" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)"
   </pre>

   ### Fields

    Such logs enable metrics about the traffic processed, such as:
    * awk '{print $1}' "$MYFILE"         # requester ip address (%h)
    * awk '{print $2}' "$MYFILE"         # (%l) (the virtualhost being requested)
    * awk '{print $3}' "$MYFILE"         # userid (%u) (if basic auth was used)
    * awk '{print $4,5}' "$MYFILE"       # date/time (%t) with time zone of the caller (-0400)

    * awk '{print $6}' "$MYFILE"         # Request Type (GET, POST, etc..)
    * awk '{print $7}' "$MYFILE"         # URL Requested (/about, or /blog or /xmlrpc.php) etc
    * awk '{print $8}' "$MYFILE"         # HTTP version 

    * awk '{print $9}' "$MYFILE"         # status code (%>s)
    * awk '{print $10}' "$MYFILE"        # size (%b)

    * awk '{print $11}' "$MYFILE"        # http referer 
    * awk '{print $12}' "$MYFILE"        # User Agent

    * awk -F\" '{print $2}' "$MYFILE"    # request line (%r)
    * awk -F\" '{print $4}' "$MYFILE"    # referer
    * awk -F\" '{print $6}' "$MYFILE"    # user agent
    <br />

   * The machine used to make the call (i486)
   <br /><br />

   ### Log parsing apps

   Such metrics are created by entire systems to analyze log files:
   Datadog, Logz, New Relic, Elastic (ELK), etc.

   ### Filter

1. Filter: retrieve the lines with 403 response

   <pre>awk '($9 ~ /403/)' combined_log | awk '{print $1,$7}' | uniq -c | sort -r
   </pre>

    22 403 /xmlrpc.php

## aws utility

The unix awk utility was created back in 1977 to parse logs from Apache web servers.

   PROTIP: "AWK" is capitalized because it is an acronym of the initials of the language’s three developers: Alfred Aho, Peter Weinberger and Brian Kerningham.

AWK is designed to read massive files.
So it reads one line at a time.

   * https://docs.nginx.com/nginx/admin-guide/monitoring/logging/
   <br /><br />

   AWK splits its input into multiple fields using a delimiter (whitespace by default), 
   assigns those fields to variables ($1,$2,$3…) and 
   applies the actions defined by the developer.

Like most UNIX tools, AWK can receive the input through a pipe,
such that a cat command spits out.

1. Print the second column 

   cat sample.log | awk '{print $2}'

   alternately:

   awk '{print $2}' sample.log

   ### Sort Unique status

   awk '{print $10}' sample.log | sort | uniq -c

   ### Sort Unique status by frequency

   awk '{print $10}' sample.log | sort | uniq -c | sort -r

   ### multiple fields

   awk '{print $8 " " $10}' sample.log | sort | uniq -c | sort -r

   ### Combine with sed

3. <a target="_blank" href="https://thwack.solarwinds.com/resources/b/geek-speak/posts/using-awk-and-sed-for-viewing-logs?CommentId=3e9c056b-b4ba-4249-8951-4828566a3b0f">This</a> combines use of sed which changes values (remove "SRC="):

   <pre>sudo cat /var/log/syslog |  grep IPTables | awk '{ print $1" "$2" "$3"\t"$13 }' | sed s/SRC=//
   </pre>

## Programming

1. Create blocks within a control file <tt>count.awk</tt>, as shown by <a target="_blank" href="https://www.youtube.com/watch?v=F1gKlJhUqbA" title="TheUrbanPenGuin (Andrew Mallet)">VIDEO</a>: 
   
   <pre>BEGIN {
   print "Log access to web server:" }
   { ip[$1] ++ }
   END {
    for (i in ip)
    print i, " has accessed ", ip[i] , " times" }
   </pre>

1. Run -file
   
   <pre>export MYFILE="/var/log/nginx/access.log.1"
   awk -f count.awk "$MYFILE"
   </pre>

2. An equivalent command to count using grep:
   
   <pre>grep -c '192.168.0.58' "$MYFILE"
   </pre>

## References
* 
* https://www.tutorialspoint.com/awk/index.htm
* https://mauricius.dev/parse-log-files-with-awk/
* https://www.youtube.com/watch?v=Yec16L_-grU
