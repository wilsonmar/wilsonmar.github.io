---
layout: post
date: "2022-11-19"
file: "dockerize"
title: "Dockerize apps"
excerpt: "Define how little bits work together"
tags: [Docker, devops, ci, setup]
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

This is a hands-on tutorial on how to create Dockerfile and docker-compose files
that contain commands controlling how Docker instantiates Containers across several operating systems.

<strong>"Dockerizing"</strong> an application is the process of converting an application to run within a Docker Container
and creating the Dockerfile for it.

![dockerize-fig-596x287-21931](https://user-images.githubusercontent.com/300046/53098570-ef6a6200-34f1-11e9-930e-cbc42d086535.jpg)

Traditionally, to defined what processes ran on a machine, a build script or manual typing on a Terminal used the operating system's CLI (Command Line Interface). Such scripts are stored in a particular Git repository within the GitHub version control system. 

(I keep examples of Dockerfiles at<br />
<a target="_blank" href="https://github.com/wilsonmar/Dockerfiles">
https://github.com/wilsonmar/Dockerfiles</a>)

When we use Docker, instead of a shell script, we create a Dockerfile which specifies various layers of pre-built packages in DockerHub. 
A Docker image is a read-only template used to create and launch a Docker container.

There is a separate Dockerfile in each folder within a Git-controlled repository stored in a GitHub or other Version Control system so that entire sets of files can be retrieved from every point in time. 

Dockerfiles specify images containing app assets which are pulled into Docker instances by the Docker Engine. 
On a Mac, the Container Engine runs within a Docker for Mac process. 

Each <a target="_blank" href="https://docs.docker.com/engine/reference/commandline/image_build/">image is built</a> from a static snapshot of an Container.

Container orchestration utilities such as Kubernetes or Docker Compose make requests of Docker Engine through its API to automatically create additional pods as needed based on specification of a Helm or Compose file. Kubernetes can also remove pod instances when monitoring indicates that less are needed.

Docker images and containers are a key building block for the Service Mesh architecture which has an Envoy component in each pod to handle communication and security certificates.


## TL;DR; Docker Security

This article describes how to Dockerize apps in a "hardened" way. That means:

* Include as little as possible in container images. This makes them both quicker to load and also more secure. Thus, we prefer Alpin OS rather than open-source Ubuntu which includes software we don't need nor want.
* Run <strong>rootless</strong> containers.
* Crypographically sign each image created.
* Use verified images.
* Use access control on registries rather than allowing anyone to use them.
* Use Kubernetes for implementing RBAC (Role-Based Access Control)
* Run containers on isolated networks (by adding AWS Security Groups)

## Dockerize apps #

Let's begin with an example.

0. Create or navigate to the folder containing a Dockerfile (or should contain one).

   A folder is needed because each Dockerfile must be named "Dockerfile".

0. View the Dockerfile:

   <tt><strong>cat Dockerfile</strong></tt>

   Alternately, you may prefer to open the file using a text editor or IDE.

   There are only a handful of instructions (verbs) in a Dockerfile.

   For example:

   <pre>
FROM node:0.10.44-slim
COPY . /home/demo/box/
RUN cd /home/demo/box && npm install
ENTRYPOINT ["/home/demo/box/boot.sh"]
   </pre>

   <a href="#VerifyInstall">Skip to see this built</a>.


   ### Docker builder instructions #
   
   \# ("pound sign") begins a comments line or a directive.

   * FROM must be the first line. It sets the image to an operating system image. For options, do a 
   <a href="#DockerSearch">docker search</a>.
   * MAINTAINER Wilson Mar \<wilsonmar@gmail.com> # defines the file's author
   * USER
   * ARG user1=someuser # referenced by --build-arg user=what_user in docker build
   * ARG CONT_IMG_VER 
   * ENV CONT_IMG_VER ${CONT_IMG_VER:-v1.0.0}
   * ENV def=$abc
   * ENV foo /bar
   * WORKDIR ${foo}    # sets working directory to /bar
   * VOLUME /tmp
   * COPY \$foo /quux 
   * ADD . $foo  # where $foo is a .tar compressed file which ADD automatically unzips

   * HEALTHCHECK--interval=5m --timeout=3s \<br />
     CMD curl -f http://localhost/ || exit 1
   * CMD ["--port 27017"] # provides defaults to executing container
   * CMD ["/usr/bin/wc","--help"] # executable and parameter
   * EXPOSE 27017 # sets the port to listen

   * RUN bash -c 'touch /app.jar' # updates the repository sources list, etc.
   * ENTRYPOINT ["top", "-b"] # sets default container commands
   * ONBUILD RUN /usr/local/bin/python-build --dir /app/src
   * STOPSIGNAL SIGKILL # sets the system call signal that will be sent to the container to exit.
   <br /><br />

   See <a target="_blank" href="https://docs.docker.com/engine/reference/builder/">
   https://docs.docker.com/engine/reference/builder</a>
   
   More examples at <a target="_blank" href="https://docs.docker.com/engine/examples/">
   https://docs.docker.com/engine/examples</a>

   <a target="_blank" href="https://rawgit.com/sudo-bmitch/dc2018/master/faq-stackoverflow-lightning.html#20">PROTIP</a>: A chmod or chown changes a timestamp on the file even when there is no permission or ownership change made. Each dd command adds a 1MB layer.
   Thus, each chmod command changes permissions and causes a copy of the entire 1MB file to the next layer.

   PROTIP: Reduce the image size by merging RUN lines:

   <pre>
FROM busybox
RUN mkdir /data \
 && dd if=/dev/zero bs=1024 count=1024 of=/data/one \
 && chmod -R 0777 /data \
 && dd if=/dev/zero bs=1024 count=1024 of=/data/two \
 && chmod -R 0777 /data \
 && rm /data/one
CMD ls -alh /data
   </pre>


  To handle UID/GID and permission issues, update image to match host uid/gid:

   <pre>
FROM debian:latest
ARG UID=1000
ARG GID=1000
RUN groupadd -g $GID cuser \
 && useradd -m -u $UID -g $GID -s /bin/bash cuser
USER cuser
   </pre>
   Then:
   <pre>
$ docker build \
  --build-arg UID=$(id -u) --build-arg GID=$(id -g) .
   </pre>

   <a target="_blank" href="https://docs.docker.com/engine/reference/builder/#/exec-form-entrypoint-example">
   This</a> Dockerfile shows use of the ENTRYPOINT to run Apache in the foreground (i.e., as PID 1):

   <pre>
FROM debian:stable
RUN apt-get update && apt-get install -y --force-yes apache2
EXPOSE 80 443
VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]
ENTRYPOINT ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
   </pre>

   <a target="_blank" href="https://rawgit.com/sudo-bmitch/dc2018/master/faq-stackoverflow-lightning.html#43">Another example</a>:

   <pre>
FROM jenkins/jenkins:lts
USER root
RUN  apt-get update \
  && wget -O /usr/local/bin/gosu "https://github.com/..." \
  && chmod +x /usr/local/bin/gosu \
  && curl -sSL https://get.docker.com/ | sh \
  && usermod -aG docker jenkins
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
   </pre>

   An example for Java on WebLogic:

   <pre>
FROM kmandel/java:8
VOLUME /tmp
#ADD ${project.build.final}.jar app.jar
ADD my-api.jar app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","<a target="_blank" href="http://www.thezonemanager.com/2015/07/whats-so-special-about-devurandom.html">-Djava.security.egd=file:/dev/./urandom</a>","-jar","/app.jar"]
   </pre>

  After a Dockerfile is prepared, execute from command prompt to create the corresponding image:

  <pre>docker build . </pre>

  Run docker run <em>image-name</em> to create a container out of the image to execute it.

  See https://github.com/sudo-bmitch/dc2018

### Dockerizing programming code #

   One of the advantages of using Docker is that an application can be deployed on several 
   operating systems.
   But different operating systems have different ways of specifying file paths such as:

   <tt><strong>APP_CONFIG=/etc/dev.config
   </strong></tt>

   Such files would contain API keys and flags to vary app behavior without requiring a re-deploy.

   PROTIP: Apps in Docker should be written in a way that references a file external to itself
   to obtain configuration data such as API keys.

   Contents in configuration files can be varied at run-time
   by a script that <strong>mounts different volumes</strong> containing the config file or
   by using a <strong>sed</strong> command which find a unique pattern in the file,
   then modifies the data.


### Common Logging #

   Also, rather than writing event information to a custom database,
   "cloud native" application programming code print to STDOUT/STDERR.
   This ensures application logs have a common format
   so that logs from other apps and monitoring utilities can all be co-mingled
   in a central logging system for historical analysis together by timeline.

   Logs can be acessed directly with the 
   `docker logs` command and by Docker API calls. 

   To simplify the dockerization process, some use 
   <a target="_blank" href="http://github.com/jwilder/dockerize/">
   the Dockerize utility</a> Jason Wilder wrote in Golang
   and describes <a target="_blank" href="http://jasonwilder.com/blog/2014/10/13/a-simple-way-to-dockerize-applications/">
   here</a>. It works by wrapping calls to apps using the ENTRYPOINT or CMD directives.


### .dockerignore #

   The .dockerignore file is like a .gitignore file,
   but specifies items for Docker to ignore in the Dockerfile.

   See https://docs.docker.com/engine/reference/builder/#/dockerignore-file

### Mount

   mount a local path and map it to a path within the container 

   ~/Source/projecta:/usr/src/app


## Java

The JVM historically looked in <tt>/proc</tt> to figure out how much memory was available so it can set its heap size based on that value. 

However, containers like Docker don’t provide container specific information in <tt>/proc</tt> because it's a priviledged folder, like <tt>/sys</tt>.

And JVM was written before Docker switches (<tt>-m</tt>, <tt>–memory</tt> and <tt>–memory-swap</tt>) and the Kubernetes switch (<tt>–limits</tt>) which instruct the Linux kernel to kill the process (as an OOM (Out of Memory) error) if it tries to exceed the limit specified.
When <tt>-m 150M</tt> is specified in the Docker command line, the docker daemon will limit 150M in RAM and 150M in Swap. 
As a result, the process can allocate the 300M and it explains why our process didn’t receive any kill from the Kernel.

So Christine Flood <a target="_blank" href="https://developers.redhat.com/blog/2017/04/04/openjdk-and-containers/#more-433899">proposed</a>
a JVM command line argument which tells the <a target="_blank" href="https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gc-ergonomics.html">JVM ergonomics</a> to look in <tt>/sys/fs/cgroup/memory/memory.limit_in_bytes</tt> to figure out how much memory is available:

   <pre>
-XX:+UnlockExperimentalVMOptions
-XX:+UseCGroupMemoryLimitForHeap
   </pre>

These are added as the $JAVA_OPTIONS environment variable included in a Docker command such as:

   <pre>CMD java -XX:+PrintFlagsFinal -XX:+PrintGCDetails $JAVA_OPTIONS -jar java-container.jar</pre>

When running Docker:

   <pre>docker run -d --name mycontainer8g -p 8080:8080 -m 800M -e JAVA_OPTIONS='-Xmx300m' rafabene/java-container:openjdk-env</pre>

docker logs mycontainer8g|grep -i MaxHeapSize




If this patch isn’t available in the OpenJDK version you are running you can simulate it by setting -XX:MaxRAM=n explicitly.

Java 10 has all the improvements needed to run inside a container.

But those staying with JDK 8u131+ and JDK 9 need to specify an experimental VM option 
that allows the JVM ergonomics to read the memory values from CGgroups:

docker run -it --name mycontainer -p 8080:8080 -m 600M rafabene/java-container:openjdk10

One way to solve this problem is using the Fabric8 Base image that is capable of understanding that it is running inside a restricted container and it will automatically adjust the maximum heap size if you haven’t done it yourself.


http://rafabene.com/2017/07/07/java-inside-docker/





<a name="DockerCompose"></a>

## Docker Compose #

Most apps are database-driven, so we introduce a separate service for a database layer with its own data volume (storage space).

The <strong>docker-compose.yml</strong> file contains instructions to stitch multiple pieces together such as database container, 
application container, host folder where you store your application repository, environmental aspects such as volumes, and ports.

An example <strong>docker-compose-dev.yml</strong> file from 
<a target="_blank" href="https://sloppy.io/from-dev-to-prod-with-nodejs-and-hackathon-starter-using-docker-compose-part-1/">
here</a> defining services:

   <pre>
version: '2'
services:
&nbsp;
  web:
    image: node:6.1
    volumes:
      - ./:/usr/src/app
    working_dir: /usr/src/app
    command: sh -c 'npm install; npm install -g nodemon ; nodemon -e js,jade app.js'
    ports:
      - "80:3000"
    depends_on:
      - mongo
    networks:
      - all
    environment:
      MONGODB_URI: "mongodb://mongo:27017/hackathon"
&nbsp;
  mongo:
    image: mongo:3
    command: mongod --smallfiles
    networks:
      - all
&nbsp;
networks:
  all:
   </pre>

For the version, see <a target="_blank" href="https://docs.docker.com/compose/">https://docs.docker.com/compose</a>


Another one:

   <pre>
version: '3.2'
volumes: 
  postgres-data:
services:
  db:
    image: postgres
    volumes: 
      - postgres-data:/var/lib/postgresql/data
  app:
    build:
      context: .
      dockerfile: Dockerfile
    command: bundle exec rails s -p 3000 -b '0.0.0.0'
    volumes:
      - .:/project
    ports:
      - "3000:3000"
    depends_on:
      - db
   </pre>

   The <tt>depends_on:</tt> specifies the launch of "db" before the app service.


0. Define attributes of Docker host in environment variables:

   * DOCKER_HOST
   * DOCKER_TLS_VERIFY
   * DOCKER_CERT_PATH

See https://docs.docker.com/v1.11/compose/compose-file/



## More resources #

This tutorial is based on these and other resources:

   * https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/#user
   details ENTRYPOINT

   * http://thediscoblog.com/blog/2014/05/05/dockerfiles-in-a-jiffy/

   * https://github.com/prakhar1989/docker-curriculum
   by prakhar1989, who was propelled to #18 on GitHub
   due largely to this tutorial.

   * https://deis.com/blog/2015/dockerfile-instructions-syntax/

   * https://runnable.com/docker/java/dockerize-your-java-application

https://www.udemy.com/zero-to-docker/learn/v4/t/lecture/7270460?start=0

https://github.com/schoolofdevops/voting-app-worker

https://schoolofdevops.com

https://hub.docker.com/u/schoolofdevops/


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
