---
layout: post
title: "Dockerize apps"
excerpt: "Define how little bits work together"
tags: [Docker, devops, ci, setup]
date:   2017-12-09 10:55:53 -0700
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

"Dockerizing" an application is the process of converting an application to run within a Docker container
and creating the Dockerfile for it.

I keep examples of Dockerfiles at<br />
<a target="_blank" href="https://github.com/wilsonmar/Dockerfiles">
https://github.com/wilsonmar/Dockerfiles</a>

This is a hands-on tutorial on how to create
Dockerfile and docker-compose files
that contain commands controlling how Docker instantiates containers across several operating systems.

A Docker image is a read-only template used to create and launch a Docker container.





## Dockerize apps #

Let's begin with an example.

0. Navigate to the folder containing a Dockerfile.

   NOTE: Creating the Dockerfile is called "dockerizing" a folder.

0. View the Dockerfile:

    <tt><strong>
    cat Dockerfile
    </strong></tt>

    Alternately, you may prefer to open the file using a text editor or IDE.

    There are only a handful of instructions (verbs) in a Dockerfile.

    <pre>
FROM node:0.10.44-slim
ADD . /home/demo/box/
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
   * ADD . $foo        # add . /bar to file system
   * COPY \$foo /quux 

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


<a name="DockerCompose"></a>

## Docker Compose #

Docker compose creates multiple containers with a single operation. 

See https://docs.docker.com/compose/

An example <strong>docker-compose-dev.yml</strong> file from 
<a target="_blank" href="https://sloppy.io/from-dev-to-prod-with-nodejs-and-hackathon-starter-using-docker-compose-part-1/">
here</a>:

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
