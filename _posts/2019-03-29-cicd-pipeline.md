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

<a target="_blank" href="https://wilsonmar.github.io/cicd-pipeline/">This</a> is a deep dive into the coding of various assets in an end-to-end DevOps workflow. Examples are modified from Rob van der Leek's <a target="_blank" href="https://medium.com/bettercode/how-to-build-a-modern-ci-cd-pipeline-5faa01891a5b">Apr 9, 2017 Medium article</a> and "buzz phrase generator" in his <a target="_blank" href="https://github.com/robvanderleek/cicd-buzz">"cicd-buzz" open-source repo</a>.

Here we first work backwards, leveraging the outcome of Robert's work to make sure that it's not vaporware:

### &nbsp; &nbsp; &nbsp; &nbsp; Production usage: the buzz phrase

1. Manually use an internet browser to visit the web page generated from within Heroku (under Robert's account):

   <pre><a target="_blank" href="https://fathomless-inlet-53225.herokuapp.com/">https://fathomless-inlet-53225.herokuapp.com</a></pre>

   If the site is still alive, you should see a random phrase generated, such as:

   <strong>"Complete Continuous Improvement Enormously Boosts Continuous Integration"</strong>

   Below is a break-down of each sub-phrase above:

   "Complete" is an <strong>adjective</strong> that also includes<br />'modern', 'self-service', 'integrated', 'end-to-end'
   
   "Continuous Improvement" is a <strong>buzz word</strong> that also includes<br />'continuous testing', 'continuous integration', 'continuous deployment', 'devops'
   
   "Enormously" is an <strong>adverb</strong> that also includes<br />'remarkably', 'substantially', 'significantly', 'seriously'
   
   "Boosts" is a <strong>verb</strong> that also includes<br />'accelerates', 'improves', 'enhances', 'revamps'
   
   "Continuous Integration" is another buzz word.

   TODO: If you want to change these, edit your copy of the program code and build another Docker image.


   ### generator.py coding

1. Click the URL below to view the sample ("trivial") Python program code that generates the buzz phrases above:

   <pre><a target="_blank" href="https://github.com/wilsonmar/cicd-buzz/blob/master/buzz/generator.py">https://github.com/robvanderleek/cicd-buzz/blob/master/buzz/generator.py</a></pre>

   Below is an example of how one would explain the program during a live walkthrough:

   The program begins at bottom of the code with the `print(generate_buzz())` command under the `if __name__ == "__main__":` entry point.

   The `generate_buzz()` function returns out the program the `phrase` variable after using the Python built-in `title()` method that capitalizes the first character of each word.

   The value for the phrase variable is obtained by joining together a samples within arrays of adjectives, buzz (terms), adverbs, and verbs.

   The variable `list_` in the signature of the `sample` function stands in for the variables specified in the join function.

   The `sample` function returns the output from`random.sample` because it is an inbuilt function brought in via the <a target="_blank" href="https://www.geeksforgeeks.org/python-random-sample-function/">module `random`</a> specified by the `import` statement at the top of the code file. 
   
   PROTIP: I prefer to use `from random import sample` because `import random` brings in the whole module, which this custom code doesn't use.
   
   The variable `n` is a commonly used name for a temporary variable containing the limit. It is defined in the function's signature specification.

   Within the `if` statement, the `return` clause is indented because that's Python.


   ### Local use of Robert's Docker

1. Open a Terminal on your Mac.
1. <a target="_blank" href="https://wilsonmar.github.io/docker-setup/">Install Docker</a> if you haven't already.
1. Make a containing folder to add the repository. I personally use ~/gits/wilsonmar.
1. A Git clone command creates the "cicd-buzz" repo folder:

   <pre><strong>git clone <a target="_blank" href="https://github.com/wilsonmar/cicd-buzz">https://github.com/wilsonmar/cicd-buzz</a>
   cd cicd-buzz
   ls</strong></pre>

   My version of the repo contains a shell file named "run.sh".

1. Run the <strong>run.sh</strong> Bash script I've added to the repo:

   <pre><strong>echo $PWD
   chmod +x run.sh
   ./run.sh
   </strong></pre>

   BTW The `chmod +x run.sh` prevents the `Permission denied` error.

   Unlike other similar scripts, this one does it all: downloads the image and cleans up after itself like a good Boyscout. All it leaves behind is the Console log.

Below is an examplation of each step in the shell script:

1. Define values within variables:

   <pre>
NAME="cicd-buzz"
IMAGE="robvanderleek/cicd-buzz"
CONTAINER_PORT="8082"
   </pre>

1. Pull the latest image from DockerHub:

   <pre><strong>docker image pull "${IMAGE}:latest"
   </strong></pre>

   Login to DockerHub is not needed if the Docker image is open to the public, which the above is.

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

   If the image is already there, you'll see:

   <pre>
Status: Image is up to date for robvanderleek/cicd-buzz:latest
   </pre>

1. Verify the Docker image size:

   <pre><strong>docker images "${IMAGE}"   # 61.8MB
IMAGE_ID=$(docker images --format="{{.Repository}} {{.ID}}" | grep "^$IMAGE " | cut -d' ' -f2)
echo "$IMAGE IMAGE_ID=$IMAGE_ID"
   </strong></pre>

   As of the time of writing, the image SIZE was "61.8MB".

1. Remove the previous process (container) if it's still running:

   <pre><strong>docker ps
   CONTAINER_ID=$(docker ps -aqf "name=$NAME")
   echo "$CONTAINER_ID for $IMAGE"
   if ! [[ -z "${CONTAINER_ID// }"  ]]; then  #it's blank
   	  echo_f "Stopping CONTAINER_ID=$CONTAINER_ID ... (takes a few seconds)"
      docker stop "${CONTAINER_ID}" > /dev/null 2>&1
      docker rm   "${CONTAINER_ID}" > /dev/null 2>&1
   fi
   </strong></pre>

1. Run:

   <pre><strong>docker run --name ${NAME} -p "$CONTAINER_PORT:5000" -i ${IMAGE}
   </strong></pre>

   `&` would normally run in the background, but that's not the case here.

   Sample response:

   <pre>
* Serving Flask app "app" (lazy loading)
* Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
* Debug mode: off
* Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
   </pre>

   PROTIP: Use of "0.0.0.0" makes it externally accessible in production.

   This references the <strong>Dockerfile</strong> in the same directory:
   
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

   The requirements.txt file contains Python dependency specifications for the Python Flash library and pytest library:
   
   <pre>pytest==4.2.0
   Flask==1.0.2
   </pre>

   Here, the Terminal session does not take any more commands. So ...

1. Open another Terminal instance.
1. Run the <strong>test.sh</strong> Bash script I've added to the repo:

   <pre><strong>echo $PWD
   chmod +x test.sh
   ./test.sh
   </strong></pre>

   The displays the output on a new browser window
   and outputs information to the console.

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
   curl localhost:5000
   </pre>
 
   Example response (the app randomly varies words output):

   <pre>
&LT;html&LT;<body>&LT;h1>Self-Service Devops Seriously Accelerates Continuous Deployment&LT;/h1>&LT;/body>&LT;/html>
  ~/gits/wilsonmar/cicd-buzz master*
   </pre>

   NOTE: The HTML in the outcome is constructed by <a target="_blank" href="https://github.com/robvanderleek/cicd-buzz/blob/master/app.py">https://github.com/robvanderleek/cicd-buzz/blob/master/app.py</a> before and after HTML around the <tt>generator.generate_buzz()</tt> function within 

   "print(generate_buzz())" within <tt>generator.py</tt> within https://github.com/robvanderleek/cicd-buzz/tree/master/buzz

   NOTE: The "0.0.0.0" in this line within app.py provides a way to reach external networks.
   
   <tt>app.run(host='0.0.0.0', port=int(os.getenv('PORT', 5000)))</tt>

   Internately, open an internet browser and paste in the address:

   <pre>127.0.0.1:8082</pre>

1. Return to Press CTRL+C to quit.


## Test-first


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



## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
