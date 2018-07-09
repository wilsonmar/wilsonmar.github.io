---
layout: post
title: "Jenkins Freestyle job"
excerpt: "Slave nodes are now opinionated agents"
tags: [DevOps, Jenkins, Freestyle]
image: 
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>

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