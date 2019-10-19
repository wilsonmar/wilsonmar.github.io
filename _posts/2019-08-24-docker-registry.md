---
layout: post
title: "Docker Registry"
excerpt: "The different repositories (Artifactory)"
tags: [Docker]
date: "2019-08-24"
file: "docker-registry"
image: # pic-black-bkg-white-cloud_1920x1200
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme Bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

There are several Docker Registries where people can push and pull Docker images of Dockerized apps:

   * Public <a target="_blank" href="https://hub.docker.com/">https://hub.docker.com</a> SaaS hosts millions of images free. It's free for individuals to host one private repository and one parallel build at a time.
   * <a target="_blank" href="https://hub.docker.com/pricing">Enterprise Docker</a> which hosts private repositories
   * Quay.io which RedHat provides
   * Artifactory licensed
   <br /><br />

## Risk Mitigation

Although many images are "Docker Certified", what does that mean?

Several organizations provide a service for "deep scanning" of

* X-Ray from JFrog (which also makes Artifactory)
* Black Hat
* White

## Artifactory X-Ray


<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}


