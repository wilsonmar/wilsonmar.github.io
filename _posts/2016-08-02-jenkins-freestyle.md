---
layout: post
title: "Jenkins Freestyle job"
excerpt: "Slave nodes are now opinionated agents"
tags: [DevOps, Jenkins, Freestyle]
date: "2016-08-02"
file: "jenkins-freestyle"
image: 
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<p align="right"><a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=es&u=https%3A%2F%2Fwilsonmar.github.io%2Fjenkins-freestyle%2F"><img alt="Español (Spanish)" width="20" height="14" src="../images/flags/es.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=fr&u=https%3A%2F%2Fwilsonmar.github.io%2Fjenkins-freestyle%2F"><img alt="Français (French)" width="20" height="14" src="../images/flags/fr.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=de&u=https%3A%2F%2Fwilsonmar.github.io%2Fjenkins-freestyle%2F"><img alt="Deutsch (German)" width="20" height="14" src="../images/flags/de.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=it&u=https%3A%2F%2Fwilsonmar.github.io%2Fjenkins-freestyle%2F"><img alt="Italiano" width="20" height="14" src="../images/flags/it.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=pt&u=https%3A%2F%2Fwilsonmar.github.io%2Fjenkins-freestyle%2F"><img alt="Português" width="20" height="14" src="../images/flags/pt.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ru&u=https%3A%2F%2Fwilsonmar.github.io%2Fjenkins-freestyle%2F"><img alt="Cyrillic Russian" width="20" height="14" src="../images/flags/ru.png"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https%3A%2F%2Fwilsonmar.github.io%2Fjenkins-freestyle%2F"><img alt="中文 (简体) Chinese (Simplified)" width="20" height="14" src="../images/flags/cn.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ja&u=https%3A%2F%2Fwilsonmar.github.io%2Fjenkins-freestyle%2F"><img alt="日本語 Japanese" width="20" height="14" src="../images/flags/jp.gif"></a> &nbsp;
<a target="_blank" href="https://translate.google.com/translate?sl=auto&tl=ko&u=https%3A%2F%2Fwilsonmar.github.io%2Fjenkins-freestyle%2F"><img alt="한국어 Korean" width="20" height="14" src="../images/flags/ko.gif"></a>
</p>
{% include _toc.html %}

This article shows you how to install and configure 
Jenkins Freestyle jobs for Continuous Delivery (CD) as well as Continuouse Integration (CI)
using <a href="#Groovy">Groovy DSL scripts</a>

This is the companion to my 
Pipeline tutorial.

{% include _intro.html %}

An example of the Console Output from a Freestyle job:

   <pre>
Started by user anonymous
Building in workspace /var/lib/jenkins/workspace/dv node freestyle v01
 > git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/hotwilson/box.git # timeout=10
Fetching upstream changes from https://github.com/hotwilson/box.git
 > git --version # timeout=10
using .gitcredentials to set credentials
 > git config --local credential.username hotwilson # timeout=10
 > git config --local credential.helper store --file=/tmp/git2674827390822911879.credentials # timeout=10
 > git -c core.askpass=true fetch --tags --progress https://github.com/hotwilson/box.git +refs/heads/*:refs/remotes/origin/*
 > git config --local --remove-section credential # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
 > git rev-parse refs/remotes/origin/origin/master^{commit} # timeout=10
Checking out Revision 61274be42caff84c52856db2e13b5f6e70259211 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 61274be42caff84c52856db2e13b5f6e70259211
 > git rev-list 61274be42caff84c52856db2e13b5f6e70259211 # timeout=10
   </pre>

   0. Docker build Nodejs on CentOS
   0. Push to dockerhub

   At end:

   <pre>
Started calculate disk usage of build
Finished Calculation of disk usage of build in 0 seconds
Started calculate disk usage of workspace
Finished Calculation of disk usage of workspace in 0 seconds
Finished: SUCCESS
   </pre>