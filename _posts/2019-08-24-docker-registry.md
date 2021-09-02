---
layout: post
title: "Docker Registry"
excerpt: "Where Docker images are stored for Kubernetes to run"
tags: [Docker]
date: "2021-08-24"
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

A registry of Docker images is crucial for Kubernetes because a Docker Registry supplies Kubernetes with images it uses to instantiate each Docker container. When the Docker Registry goes down, so does Kubernetes.

> Selecting a container registry for your Docker environment can sometimes feel like choosing what to eat at a Chinese restaurant that features a hundred items on its menu—The number of choices can be overwhelming, and you may not understand exactly what each option entails.
As a result, you end up ordering General Tso’s chicken because it’s the only thing you really recognize. Then you spend the rest of the evening questioning whether you made the right choice and ate an authentic Chinese meal.<a target="_blank" href="https://sweetcode.io/docker-hub-quay-beyond-container-registry/">Chrus Tozzi</a>


<a name="DockerHub"></a>

## Docker Hub

Docker Inc's on-line Docker Hub (<a target="_blank" href="https://hub.docker.com/">https://hub.docker.com</a>) houses many public Docker images, free to pull.

Docker Inc. also open-sourced its <a href="On-prem">on-premise Docker Registry server</a> even though Docker Inc. also earns money for its on-premise Trusted Docker Registry product.


### Public Docker Hub API

Docker Hub has a public API which doesn't require authentication.

> "The Docker Registry HTTP API is the protocol to facilitate distribution of images to the docker engine. It interacts with instances of the docker registry, which is a service to manage information about docker images and enable their distribution."<a target="_blank" href="https://hackernoon.com/inspecting-docker-images-without-pulling-them-4de53d34a604">*</a>

1. List the first 10 tags in the image for Debian (the operating system):

   <pre><strong>curl 'https://registry.hub.docker.com/v2/repositories/library/debian/tags/'
   </strong></pre>

   The response starts with:

   <pre>{"count": 511, "next": "https://registry.hub.docker.com/v2/repositories/library/debian/tags/?page=2", "previous": null, "results": [{"name": "unstable-slim", "full_size": 27750048, "images": [{"size": 31296808, "architecture": "ppc64le", "variant": null, "features": null, "os": "linux", "os_version": null, "os_features": null}, {"size": 26435103, "architecture": "s390x", "variant": null, "features": null, "os": "linux", "os_version": null, "os_features": null}, {"size": 25698949, "architecture": "arm", "variant": "v5", "features": null ....
   </pre>

1. If we install the jq JSON query utility that formats JSON reponses on a Mac:

   <pre><strong>brew install jq</strong></pre>

1. Add to the previous command piping to jq:

   <pre><strong>curl -s 'https://registry.hub.docker.com/v2/repositories/library/debian/tags/'|jq '."results"[]["name"]'
   </strong></pre>

   <tt>-s</tt> silences downloading statistics.

   Sample result (for Debian) puts in line breaks:

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



## Vulnerability Identification Services

Look among the Docker images.

Although many images are "Docker Certified", what does that mean?

Several other organizations provide a service for "deep scanning" of Docker images:

   * X-Ray from JFrog (which also makes the binary repository Artifactory)

   * Sonatype from Nexus which also makes a binary repository of the same name

   * Black Hat

   * <a target="_blank" href="https://www.whitesource.com/">WhiteSource</a>


## Private Online Registries

If you want to keep your Docker image private or want security vetting of images for vulnerabilities, you would have to pay (see <a target="_blank" href="https://hub.docker.com/pricing">Enterprise Docker</a>).

There are several other Docker Registry services:

   * <a target="_blank" href="https://quary.io">Quay.io</a> (pronounced "key") which RedHat provides.

   * Artifactory licensed


<a name="On-prem"></a>
<a name="DockerRegistry"></a>

## Private On-premises Docker Registry

Docker Inc. has open-sourced their Docker Hub server software at <a target="_blank" href="https://github.com/docker/distribution/tree/master/registry">https://github.com/docker/distribution/tree/master/registry</a>.

Looking among the files in the root of the repo, notice the server is written in the Go language.


### Private Docker Registry Server Install

As one would expect, Docker Registry is installed within a Docker container. 
For install instructions, see <a target="_blank" href="https://docs.docker.com/registry/deploying/">https://docs.docker.com/registry/deploying</a>

1. This command can be used to start the Registry as a single container:

   <pre>
docker run -d \
  --restart=always \
  --name ...-registry \
  -v "$(pwd)"/certs:/certs \
  -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
  -p 443:443 \
  registry:2
   </pre>

1. Generate TLS certificates and place them in the path described in the command.


However, you'll likely start the on-prem. Docker Registry using a <strong>docker compose</strong> command so that several containers can be brought up as a Registry service for use by Kubernetes.

   The other container handles Authentication using the OAuth protocol.

   PROTIP: Docker Registry from Docker Inc. does not have a UI. It is not designed to operate in a cluster (for High Availability). It has no built-in authentication.

About server install:

  * <a target="_blank" href="https://www.youtube.com/watch?v=SEpR35HZ_hQ">from Learnitguide.net Aug 8, 2018 [17:32]</a>

QUESTION: How to automatically pull images from Docker Hub if not in the private registry?


### Docker CLI client install

For install instructions, see <a target="_blank" href="https://docs.docker.com/registry/deploying/">https://docs.docker.com/registry/deploying</a>

1. List the Docker packages available for your Mac:

   <pre><strong>brew search docker
   </strong></pre>

1. Get the Docker client on your Mac:

   <pre><strong>brew info docker
   </strong></pre>

1. Get the Docker GUI client on your Mac:

   <pre><strong>brew install --cask docker
   </strong></pre>

### Private Registry

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


### Internal data structure

<em>No audio in this animated diagram video:</em>

<amp-youtube data-videoid="jDhLEfY4Apo" layout="responsive" width="480" height="270"></amp-youtube><br />

The local Docker Registry is usually installed as a registry folder under <strong>/var/lib</strong>.
But administrators mount "/data" on a separate device so that if it fills up it won't down the server.

That's the folder taking up disk space, as measured by the <strong>du -s</strong> command.

The full path to the name of each Docker image is under a version 2, when removal was first enabled.

stored in the registry is defined in a folder under the <strong>repositories</strong> side of the folder tree. Some images are ground under an account name.

All <strong>content</strong> in repositories are stored as <strong>blobs</strong> under the "blobs" path. Under that is a <strong>sha256</strong> (pronounced "shaw 256") folder. 
S-H-A is an acronymn for the "Secure Hash Algorithm" defined by the US National Security Agency.
Hashing creates a sort of summary of a file's content.
That's why hashes are also called a "digests".
Digests are always a fixed number of digits. 
In the case of 256, 46 characters of hex pairs.
The first two characters are used to create a <strong>folder</strong> under where that file is stored, so that there are not too many files in a single folder.

The first 7 digests of each digest are used as a short <strong>tag</strong> becuase 7 is usually unique enough to differentiate among the various hashes.

The blobs for each tag is referenced by <strong>link</strong> files containing addresses to individual <strong>data</strong> files storing the content. 
Each <strong>revision</strong> of an image pushed in the registry has a different SHA and therefore a different tab name.

The <strong>current</strong> link defines the most recent blob at the head of the chain.

These are all under a <strong>manifest</strong> folder. 
A manifest API call returns a manifest listing the different <strong>layers</strong> containing changes stored as data blobs. Each layer of data within an image can be referenced by several commits into the registry. Just as with Git, this data architecture is how one can fall back to the complete set of files that existed when each push is made into an image repository.

There is nothing under the layers and uploads folders.

In each link file, the SHA defined for each layer is the address of a blob.
This is how changes do not bloat the repository disk space like full copies of files with minor revisions.

Any blob can be accessed by any Docker image.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/69489484-8039e980-0e46-11ea-87a4-0b9ed389c372.png"><img alt="dockerreg-structure-v03-1727x947.png" src="https://user-images.githubusercontent.com/300046/69489484-8039e980-0e46-11ea-87a4-0b9ed389c372.png"></a>


### What's wrong with this picture?

Some tags for images are obsoleted over time when vulnerabilities are found and patched.

The "content addressable" data architecture of the Docker Registry is borrowed from the Git repository structure. That design is for keeping even obsoleted source code forever.

PROTIP: Although it's convenient for Git users to fall back on various versions, that feature can actually be a security flaw for Docker images. If someone falls back to a previoius version, it may contain vulnerabilities which have been fixed in the latest version. So falling back can re-introduce an exploit.

Also, obsolete data remaining in the Docker Registry means it will grow and grow in an unsustainable way.

### Removal is complicated

PROTIP: When a particular tag is <a href="#RemoveImagePrograms">removed using the API or directly</a>, that does not directly result in much disk space being freed up as deleting a regular file might do.

PROTIP: The <a target="_blank" href="https://docs.docker.com/engine/reference/commandline/image_rm/">docker image rm</a> command removes entire images, not individual tags.

Removing an image does not release hard disk space until a <strong>garbage collection</strong> operation occurs. A Docker Garbage Collection program needs to first mark every blob referenced in a link, then go back and remove blobs with no reference to it.

Even after that, if disk space were physically allocated incrementally over time, blob files may still populate each extent. That means to recover physical disk space would require copying all extents to another instance with continguous allocation of disk space?

One impediment is that removal of obsolete files would occur only after whatever latest replacing it is known good.

No archival is needed if the image can be easily rebuilt.


<hr />



<hr />

<a name="RemoveImagePrograms"></a>

### Remove image programs

There are several approaches to remove tags:

   A. Use the "docker image rm " call to remove all tags in an image using a single call.

   This needs to be done as "docker exec -it ...".
   
   B. Make API DELETE call:

   <pre>curl -v -X DELETE http://registryhost:reigstryport/v2/${docker_image_name}/manifests/${digest}</pre>

   PROTIP: The DELETE API does not remove revisions.

   C. Physically remove links pointing to blobs using Bash rm commands to remove revisions along with tags.

Either way, garbage collection is necessary to remove blobs.

Registry garbage-collect does not clean up old blobs if a tag has been overwritten but has not been deleted - https://github.com/docker/distribution/issues/2212

Discussions on StackOverflow:

   * https://stackoverflow.com/questions/45046752/docker-registry-garbage-collection/45047696
   
   * https://stackoverflow.com/questions/25436742/how-to-delete-images-from-a-private-docker-registry

Python scripts:

   * https://github.com/andrey-pohilko/registry-cli
   A Python script that deletes docker images: 

   * https://github.com/ricardobranco777/clean_registry
   ricardobranco777's registry clean up python script

   * https://beta.docs.docker.com/engine/reference/commandline/registry_rmi/
   docker registry rmi REPOSITORY:TAG [OPTIONS]

   * https://www.linuxtechi.com/setup-docker-private-registry-centos-7-rhel-7/

   * https://www.server-world.info/en/note?os=CentOS_7&p=docker&f=6

   * https://gist.github.com/qoomon/7c7f16939630cafafceeb83d254194e4


## Client

If you have a lot of images, avoid timeouts by configuring your terminal:

<pre>Host *
   ServerAliveInterval 300
   ServerAliveCountMax 2
   </pre>

## JFrog Artifactory as Docker Registry

https://jfrog.com/screencast/artifactory-5-one-minute-setup-docker-registry-as-container-install/



<hr />

## References

An alternative to DockerHub is <a target="_blank" href="https://github.com/features/packages#pricing">GitHub Packages operated by GitHub</a>



## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
