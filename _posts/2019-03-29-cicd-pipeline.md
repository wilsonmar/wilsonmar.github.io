---
layout: post
title: "CICD pipeline"
excerpt: "Automated End-to-end example"
modified:
tags: []
image:
# feature: cicd-1900x500-19977.jpg/png
  feature: https://user-images.githubusercontent.com/300046/55279779-d627b300-52f2-11e9-9f51-45cf13c8a0a9.jpg
  credit: Uncredited
  creditlink: https://medium.com/bettercode/how-to-build-a-modern-ci-cd-pipeline-5faa01891a5b
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/cicd-pipeline/">This</a> <strong>automates</strong> the end-to-end trivial example based on Rob van der Leek's <a target="_blank" href="https://medium.com/bettercode/how-to-build-a-modern-ci-cd-pipeline-5faa01891a5b">Apr 9, 2017 Medium article</a> and "buzz generator" in his <a target="_blank" href="https://github.com/robvanderleek/cicd-buzz">cicd-buzz" open-source repo</a>

First we work backwards, leveraging the outcome of Robert's work to make sure that it's not vaporware:

1. Manually use an internet browser to visit the web page generated from within Heroku (under Robert's account) at 

   <a target="_blank" href="https://fathomless-inlet-53225.herokuapp.com/">https://fathomless-inlet-53225.herokuapp.com</a>

   You should see a random sentence generated, such as:

   "Complete Continuous Improvement Enormously Boosts Continuous Integration"

   ### Local use of Robert's Docker

1. Open a Terminal on your Mac.
1. Create a container folder, such as ~/git/wilsonmar.
1. Download Wilson Mar's clone of <a target="_blank" href="https://github.com/robvanderleek/cicd-buzz">Robert's repo at https://github.com/robvanderleek/cicd-buzz</a>:

   <pre><strong>git clone <a target="_blank" href="https://github.com/wilsonmar/cicd-buzz">https://github.com/wilsonmar/cicd-buzz</a>
   cd cicd-buzz
   ls</strong></pre>

   This version of Robert repo contains additional shell files.

1. Install Docker if you haven't already.
1. NOTE: Login not needed as Robert's Docker image is from the public default DockerHub.com.
1. Copy and paste this command to run it:

   <pre><strong>docker image pull robvanderleek/cicd-buzz:latest
   </strong></pre>

   Sample response:

   <pre>
latest: Pulling from robvanderleek/cicd-buzz
8cae0e1ac61c: Pull complete 
08e039a98597: Pull complete 
a25e0df325b7: Pull complete 
a3fcc9a668be: Pull complete 
87841fbb21e8: Pull complete 
3f38a4622442: Pull complete 
Digest: sha256:82992e5e8069af9664cc2f88428b4cd813752f91dfc1130fe232bd070c6b8f10
Status: Downloaded newer image for robvanderleek/cicd-buzz:latest
   </pre>

1. Verify the Docker image size:

   <pre><strong>docker images robvanderleek/cicd-buzz
   </strong></pre>

   As of the time of writing, the image SIZE was "61.8MB".

1. Run:

   <pre>
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
   </pre>

   CAUTION: "0.0.0.0" is the result in this <strong>Dockerfile</strong>:

   <pre>
#!/bin/bash
\# run.sh from https://github.com/wilsonmar/cicd-buzz
# Clean-up leftovers from previous run, then run Docker image,
# -interactive, -volume, -working dir specified:
&nbsp;
PWD="~/gits/wilsonmar/cicd-buzz"
NAME="cicd-buzz"
IMAGE="robvanderleek/cicd-buzz"
&nbsp;
docker image pull "${IMAGE}"
docker images "${IMAGE}"   # 61.8MB
&nbsp;
# Populate CONTAINER_ID variable:
docker rm ${NAME} # > /dev/null 2>&1
# List images downloaded:
sudo docker images "${IMAGE}"
# Run in background:
sudo docker run --name ${NAME} -p 8082:5000 -i ${IMAGE} $@ &
#sudo docker run --name ${NAME} -i -v ${PWD}:${PWD} -w ${PWD} ${IMAGE} $@
curl 127.0.0.1:8082
# Volume DRIVERs and Networks
docker volume ls
docker network ls  # host, bridge, none
# List all info:
docker info
# Dispose:
CONTAINER_ID=$(docker ps -aqf "name=$NAME")
sudo docker stop ${CONTAINER_ID} # > /dev/null 2>&1
   </pre>


1. Open another Terminal instance to view Docker containers running:

   <pre>
   docker ps
   </pre>
 
   Example:

   <pre>
CONTAINER ID        IMAGE                     COMMAND                CREATED              STATUS              PORTS               NAMES
8e5bc7f37e78        robvanderleek/cicd-buzz   "python /src/app.py"   About a minute ago   Up About a minute                       cicd-buzz
   </pre>

   NOTE: A script would capture the CONTAINER ID value and save it for later use.
   export CONTAINER_ID="8e5bc7f37e78"

   <pre>sudo docker logs "${CONTAINER_ID}"</pre>

1. Open another Terminal instance to open the URL in an internet browser (without the `-v` for verbose of HTML headers):

   <pre>
   curl 127.0.0.1:5000
   </pre>
 
   Example response (the app randomly varies words output):

   <pre>
<html><body><h1>Self-Service Devops Seriously Accelerates Continuous Deployment</h1></body></html>
  ~/gits/wilsonmar/cicd-buzz master*
   </pre>

   Alternately, open an internet browser and paste in the address:

   <pre>127.0.0.1:8082</pre>

1. Return to Press CTRL+C to quit.

   This references the <strong>Dockerfile</strong> in Robert's repo:

   <pre>
FROM python:alpine:3.5
EXPOSE 5000
RUN apk add --update python py-pip
COPY requirements.txt /src/requirements.txt
RUN pip install -r /src/requirements.txt
COPY app.py /src
COPY buzz /src/buzz
CMD ["python", "/src/app.py"]
   </pre>

1. In a Still in an internet browser, view the 

   <pre><strong>
   docker pull <a target="_blank" href="https://hub.docker.com/r/robvanderleek/cicd-buzz">robvanderleek/cicd-buzz</a>
   </strong></pre>

   <pre><strong>git clone <a target="_blank" href="https://github.com/robvanderleek/cicd-buzz">https://github.com/robvanderleek/cicd-buzz</a>
   cd cicd-buzz</strong></pre>

1. clone <a target="_blank" href="https://github.com/robvanderleek/cicd-buzz">cicd-buzz" open-source repo</a>
Push the Docker image to Docker Hub as https://hub.docker.com/r/robvanderleek/cicd-buzz/tags/



The script does the following steps:

1. Show run environment time, etc.
1. Create a folder.
1. Write a little Python program (not Hello World)
1. Add some automated tests for the program
1. Push your code to GitHub
1. Setup Travis CI to continuously run your automated tests
1. Setup Better Code Hub to continuously check your code quality
1. Turn the Python program into a web app
1. Create a Docker image for the web app
1. Push the Docker image to Docker Hub as https://hub.docker.com/r/robvanderleek/cicd-buzz/tags/
1. Deploy the Docker image to Heroku, which for Robert is https://fathomless-inlet-53225.herokuapp.com/
<br /><br />



https://www.youtube.com/watch?v=Z3S2gMBUkBo
Integrate with GitHub: build after each commit (Get started with Jenkins, part 13)


https://hackernoon.com/ci-cd-continuous-integration-tools-delivery-react-web-travis-github-example-tutorial-javascript-vue-db8afe9f9a81
$0, Free CICD and Web hosting integration. Travis-ci + Github.page
Go to the profile of Peter Chang
Peter Chang
Aug 19, 2018
