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

Docker Inc's Docker Hub (<a target="_blank" href="https://hub.docker.com/">https://hub.docker.com</a>) houses many public Docker images, free to pull.

## CLI client

1. List the Docker packages available for your Mac:

   <ul>brew search docker</ul>

1. Get the Docker client on your Mac:

   <ul>brew info docker</ul>

1. Get the Docker GUI client on your Mac:

   <ul>brew cask install docker</ul>


## Vulnerability Identification Services

Look among the Docker images.

Although many images are "Docker Certified", what does that mean?

Several other organizations provide a service for "deep scanning" of Docker images:

* X-Ray from JFrog (which also makes the binary repository Artifactory)

* Sonatype from Nexus which also makes a binary repository of the same name

* Black Hat

* WhiteSource


<a name="DockerHub"></a>

## Docker Hub

Docker Inc. has open-sourced their Docker Hub server software at <a target="_blank" href="https://github.com/docker/distribution/tree/master/registry">https://github.com/docker/distribution/tree/master/registry</a>.

Looking among the files in the root of the repo, notice the server is written in the Go language.


### Public Docker Hub API

Docker Hub has a public API which doesn't require authentication.

"The Docker Registry HTTP API is the protocol to facilitate distribution of images to the docker engine. It interacts with instances of the docker registry, which is a service to manage information about docker images and enable their distribution."

See https://hackernoon.com/inspecting-docker-images-without-pulling-them-4de53d34a604

This command lists the first 10 tags in the image for Debian 
(the operating system):

   <tt>
curl 'https://registry.hub.docker.com/v2/repositories/library/debian/tags/'
   </tt>

   The response starts with:

   <tt>
{"count": 511, "next": "https://registry.hub.docker.com/v2/repositories/library/debian/tags/?page=2", "previous": null, "results": [{"name": "unstable-slim", "full_size": 27750048, "images": [{"size": 31296808, "architecture": "ppc64le", "variant": null, "features": null, "os": "linux", "os_version": null, "os_features": null}, {"size": 26435103, "architecture": "s390x", "variant": null, "features": null, "os": "linux", "os_version": null, "os_features": null}, {"size": 25698949, "architecture": "arm", "variant": "v5", "features": null ....
   </tt>

If we install the jq utility to format. On a Mac:

   <pre><strong>brew install jq</strong></pre>

Add to the previous command piping to jq:

   <tt>
curl 'https://registry.hub.docker.com/v2/repositories/library/debian/tags/'|jq '."results"[]["name"]'
   </tt>

   Sample result (for Debian):

   <pre>
"unstable-slim"
"unstable-20191014-slim"
"unstable-20191014"
"unstable"
"testing-slim"
"testing-backports"
"testing-20191014-slim"
"testing-20191014"
"testing"
"stretch-slim"
   </pre>


### Private Docker Hub Install

As one would expect, Docker Registry is installed within a Docker container. 
For install instructions, see https://docs.docker.com/registry/deploying/

To start the Registry:

   <pre>
docker run -d \
  --restart=always \
  --name registry \
  -v "$(pwd)"/certs:/certs \
  -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
  -p 443:443 \
  registry:2
   </pre>

## Private Registry

Privatized Docker registries, by definition, need authentication.

https://github.com/docker/distribution/blob/master/docs/spec/auth/token.md

Version 2 uses an <a target="_blank" href="https://tools.ietf.org/html/rfc6750#section-3">industry-standard OAuth2 process</a>. The example below is for an account/image "samalba/my-app".

In a Bash script at https://gist.github.com/alexanderilyin/8cf68f85b922a7f1757ae3a74640d48a

   <ul><tt>token="$(curl https://auth.docker.io/token?service=registry.docker.io&scope=repository:library/ubuntu:pull | jq -r '.token')"
   </tt></ul>

A more detailed explanation:

1. Registry client issues a GET request to the authorization service for a Bearer token.

  <tt>https://auth.docker.io/token?service=registry.docker.io&scope=repository:samalba/my-app:pull,push</tt>

1. Authorization service returns an opaque Bearer token representing the client's authorized access. Example:

   <tt>www-Authenticate: Bearer realm="https://auth.docker.io/token",service="registry.docker.io",scope="repository:samalba/my-app:pull,push"
   </tt>

1. Client captures the token returned:

   <pre>HTTP/1.1 200 OK
Content-Type: application/json
{"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IlBZWU86VEVXVTpWN0pIOjI2SlY6QVFUWjpMSkMzOlNYVko6WEdIQTozNEYyOjJMQVE6WlJNSzpaN1E2In0.eyJpc3MiOiJhdXRoLmRvY2tlci5jb20iLCJzdWIiOiJqbGhhd24iLCJhdWQiOiJyZWdpc3RyeS5kb2NrZXIuY29tIiwiZXhwIjoxNDE1Mzg3MzE1LCJuYmYiOjE0MTUzODcwMTUsImlhdCI6MTQxNTM4NzAxNSwianRpIjoidFlKQ08xYzZjbnl5N2tBbjBjN3JLUGdiVjFIMWJGd3MiLCJhY2Nlc3MiOlt7InR5cGUiOiJyZXBvc2l0b3J5IiwibmFtZSI6InNhbWFsYmEvbXktYXBwIiwiYWN0aW9ucyI6WyJwdXNoIl19XX0.QhflHPfbd6eVF4lM9bwYpFZIV0PfikbyXuLx959ykRTBpe3CYnzs6YBK8FToVb5R47920PVLrh8zuLzdCr9t3w", "expires_in": 3600,"issued_at": "2009-11-10T23:00:00Z"}
Using the Bearer token
   </pre>

1. Client retries the original request with the Bearer token embedded in the request's Authorization HTTP header.

   <pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IkJWM0Q6MkFWWjpVQjVaOktJQVA6SU5QTDo1RU42Ok40SjQ6Nk1XTzpEUktFOkJWUUs6M0ZKTDpQT1RMIn0.eyJpc3MiOiJhdXRoLmRvY2tlci5jb20iLCJzdWIiOiJCQ0NZOk9VNlo6UUVKNTpXTjJDOjJBVkM6WTdZRDpBM0xZOjQ1VVc6NE9HRDpLQUxMOkNOSjU6NUlVTCIsImF1ZCI6InJlZ2lzdHJ5LmRvY2tlci5jb20iLCJleHAiOjE0MTUzODczMTUsIm5iZiI6MTQxNTM4NzAxNSwiaWF0IjoxNDE1Mzg3MDE1LCJqdGkiOiJ0WUpDTzFjNmNueXk3a0FuMGM3cktQZ2JWMUgxYkZ3cyIsInNjb3BlIjoiamxoYXduOnJlcG9zaXRvcnk6c2FtYWxiYS9teS1hcHA6cHVzaCxwdWxsIGpsaGF3bjpuYW1lc3BhY2U6c2FtYWxiYTpwdWxsIn0.Y3zZSwaZPqy4y9oRBVRImZyv3m_S9XDHF1tWwN7mL52C_IiA73SJkWVNsvNqpJIn5h7A2F8biv_S2ppQ1lgkbw
   </pre>

1. Registry authorizes the client by validating the Bearer token and the claim set embedded within it and begins the push/pull session as usual.


## Remove images

Images remain in the Docker Registry. So that's not sustainable.

So tags obsoleted by the latest should be removed.

But ideally, removal would occur only after whatever latest replacing it is known good.

No archival is needed if the image can be easily rebuilt.

Removing an image does not release hard disk space until a <strong>garbage collection</strong> operation occurs.

There is a Python script that deletes docker images: 
https://github.com/andrey-pohilko/registry-cli


https://stackoverflow.com/questions/25436742/how-to-delete-images-from-a-private-docker-registry

https://github.com/vivekjuneja/docker_registry_cli
python
https://beta.docs.docker.com/engine/reference/commandline/registry_rmi/
docker registry rmi REPOSITORY:TAG [OPTIONS]

https://www.linuxtechi.com/setup-docker-private-registry-centos-7-rhel-7/
https://www.server-world.info/en/note?os=CentOS_7&p=docker&f=6



Tags for images can also be obsoleted over time when vulnerabilities are found and patched.

## Artifactory X-Ray


But if you want to keep your Docker image private or want security vetting of images for vulnerabilities, you would have to pay (see <a target="_blank" href="https://hub.docker.com/pricing">Enterprise Docker</a>).

There are several other Docker Registry services:

   * <a target="_blank" href="https://quary.io">Quay.io</a> (pronounced "key") which RedHat provides.

   * Artifactory licensed
   <br /><br />


<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}


