---
layout: post
title: "CICD pipeline (Docker of Python Console program being tested within TravisCI)"
excerpt: "Featuring a Bash shell script that does everything, explained"
modified:
tags: []
date: "2019-03-29"
file: "cicd-pipeline"
image:
# feature: cicd-1900x500-19977.jpg/png
  feature: https://user-images.githubusercontent.com/300046/55279779-d627b300-52f2-11e9-9f51-45cf13c8a0a9.jpg
  credit: Uncredited
  creditlink: https://medium.com/bettercode/how-to-build-a-modern-ci-cd-pipeline-5faa01891a5b
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/cicd-pipeline/">This</a> is a hands-on deep dive into the coding of various assets in an end-to-end DevOps workflow. Examples are modified from Rob van der Leek's <a target="_blank" href="https://medium.com/bettercode/how-to-build-a-modern-ci-cd-pipeline-5faa01891a5b">Apr 9, 2017 Medium article</a> and "buzz phrase generator" in his <a target="_blank" href="https://github.com/robvanderleek/cicd-buzz">"cicd-buzz" open-source repo</a>.

{% include whatever.html %}

Here we first work backwards, leveraging the outcome of Robert's work (to make sure that it's not vaporware ;).

<a name="HerokuSite"></a>

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
   
   ### Run the Python program

1. Open a Text Editor program. Navigate into the "buzz" folder to edit "generator.py".
1. Open a Terminal on your Mac and navigate into the buzz folder.
1. Run the generator.py program using the Python interpreter (either version 2 or 3 should work).

   <pre><strong>python generator.py</strong></pre>

   NOTE: I would prefer to use `from random import sample` because `import random` brings in the whole module, which this custom code doesn't use.
   However, running it results in:
   
   `NameError: global name 'random' is not defined`
   
   The variable `n` is a commonly used name for a temporary variable containing the limit. It is defined in the function's signature specification.

   Within the `if` statement, the `return` clause is indented because that's Python.

1. Repeat the call and another set of values should appear.


   ### Local use of Docker

   I created the `run.sh` script so that you have an example of a Bash script to run <strong>locally<strong>.

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
IMAGE_ID=$(docker images --format="&7B;&7B;.Repository}} &7B;&7B;.ID}}" | grep "^$IMAGE " | cut -d' ' -f2)
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

1. The run.sh invokes Dockerfile:

   <pre><strong>docker run --name ${NAME} -p "$CONTAINER_PORT:5000" -i ${IMAGE}
   </strong></pre>

   `${NAME}` references the <strong>Dockerfile</strong> in the same directory:
   
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

   `alphine:3.5` is the operating system running within the Docker container, as provided by those who own the `python` account on DockerHub.

   QUESTION: What is the version of Python installed by the line:
   `RUN apk add --update python py-pip`


   Sample response:

   <pre>
* Serving Flask app "app" (lazy loading)
* Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
* Debug mode: off
* Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
   </pre>

   #### app.py

   NOTE: The "0.0.0.0" and port 5000 is specified in this line within program <a target="_blank" href="https://github.com/wilsonmar/cicd-buzz/blob/master/app.py">app.py</a>:
   
   <tt>app.run(host='0.0.0.0', port=int(os.getenv('PORT', 5000)))</tt>

   #### requirements.txt

   The <strong>requirements.txt</strong> file contains Python version dependency specifications for the Python Flash library and pytest library:
   
   <pre>pytest==4.2.0
   Flask==1.0.2
   </pre>

   `Flask` is used by the <a target="_blank" href="https://github.com/wilsonmar/cicd-buzz/blob/master/app.py">app.py</a> program which listens and responds to HTTP requests by wrapping HTML tags around the output from the text output from program  `generator.py`.

   ### HTML response

   PROTIP: Normally, the Terminal session would not take any more interactive commands, but the Bash script is written to call `docker run` with
   `&` in the background. The `stop` command.

   Rather than opening a browser instance, we use curl utility to show the HTML response in the Console.

   <pre>RESPONSE=$(curl "localhost:$CONTAINER_PORT")
   echo "RESPONSE=$RESPONSE"
   </pre>
 
   Example response (the app randomly varies words output):

   <pre>&LT;html>&LT;body>&LT;h1>Self-Service Devops Seriously Accelerates Continuous Deployment&LT;/h1>&LT;/body>&LT;/html>
   </pre>

   https://stackoverflow.com/questions/37139786/is-init-py-not-required-for-packages-in-python-3

1. Clean-up within run.sh

   After running a single curl command, the script stops, then removes the docker process based on capturing the CONTAINER_ID in a variable.

   <pre>
CONTAINER ID        IMAGE                     COMMAND                CREATED              STATUS              PORTS               NAMES
8e5bc7f37e78        robvanderleek/cicd-buzz   "python /src/app.py"   About a minute ago   Up About a minute                       cicd-buzz
   </pre>

   The image file downloaded is also removed as well to conserve disk space.

<hr />

## TravisCI

Travis CI is a hosted service for Continuous Integration work. It’s free for public GitHub repositories. 

1. Use a browser to visit <a target="_blank" href="https://travis-ci.org">https://travis-ci.org</a> and get a Travis CI account

   To setup Travis CI to continuously automate tests:

2. Sign up with  your GitHub credentials.
3. Click your profile icon and select <a target="_blank" href="https://github.com/settings/installations"?Applications</a> from the left menu.
4. Click "Configure" to the right of "Travis CI".
   <img align="right" alt="cicd-buzz-travis-github-349x409-10048.jpg" width="349" src="https://user-images.githubusercontent.com/300046/55561218-0387ae80-56af-11e9-9f1d-5e04ba7ba281.jpg">

5. Select your repository. Click Save.
6. In <a target="_blank" href="https://Travis-ci.org">Travis-ci.org</a>, click "Sync".
7. Read through <a target="_blank" href="https://docs.travis-ci.com/user/tutorial/">https://docs.travis-ci.com/user/tutorial</a>

   PROTIP: Travis only runs builds on commits pushed only if there is a .travis.yml file in the repo.

8. In the sample repo, the `.travis.yml` file specifies the language in the `pytest` script run by Travis:

   <pre>
sudo: required
services:
  - docker
language: python
script:
  - python -m pytest -v 
after_success:
  - sh .travis/deploy_dockerhub.sh
  - test "$TRAVIS_BRANCH" = "master" && "$TRAVIS_PULL_REQUEST" = "false" && sh .travis/deploy_heroku.sh
   </pre>

   `&&` combines several commands in sequence.

   WARNING: If the file is not valid YAML, Travis CI will ignore it.

`after_success` of pytest, Travis is told to run the script <a href="#TravisDockerHub">.travis/deploy_dockerhub.sh (described below)</a>.


<a name="TravisDockerHub"></a>

## Build in DockerHub

In the .travis folder <a target="_blank" href="https://github.com/wilsonmar/cicd-buzz/blob/master/.travis/deploy_dockerhub.sh">deploy_dockerhub.sh</a>

   <pre>
#!/bin/sh
docker login -u $DOCKER_USER -p $DOCKER_PASS
if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="$TRAVIS_BRANCH"
fi
docker build -f Dockerfile -t $TRAVIS_REPO_SLUG:$TAG .
docker push $TRAVIS_REPO_SLUG
   </pre>

`$DOCKER_PASS` is the password into DockerHub account `$DOCKER_USER`.

`$TRAVIS_BRANCH` is the Git branch name.

`$TRAVIS_REPO_SLUG`

`$TAG`


<a name="DeployHeroku"></a>

## Heroku

Heroku hosts over the public internet applications such as the 
<a href="#HerokuSite">described above</a>.

1. Get an account on heroku.com
1. Identify the GitHub repo.
1. Use the assigned host name (such as "fathomless-inlet-53225") or specify your own such as "devops-cert-activity-wilsonmar" as in "https://devops-cert-activity-wilsonmar.herokuapp.com". 

   PROTIP: The host name need not be the same as your repo's name.
   Hereoku imposes a 32 character limit to host names (not counting the "herokuapp.com").

1. Make note of the assigned host name. 
1. Assign a key and paste the string in Heroku's env as `HEROKU_API_KEY`.
1. In Git, set the repository's remote to heroku so that the repository can be sent to Heroku after changes occur, such as:

   <pre>git remote add heroku https://git.heroku.com/devops-cert-activity-wilsonmar.git
   git remote -v
   </pre>

   The response:

   <pre>
heroku	https://git.heroku.com/devops-cert-activity-wilsonmar.git (fetch)
heroku	https://git.heroku.com/devops-cert-activity-wilsonmar.git (push)
origin	https://github.com/wilsonmar/devops-cert-activity-wilsonmar2.git (fetch)
origin	https://github.com/wilsonmar/devops-cert-activity-wilsonmar2.git (push)
   </pre>


   #### install-ubuntu.sh

Travis run <a target="_blank" href="https://toolbelt.heroku.com/install-ubuntu.sh">https://toolbelt.heroku.com/install-ubuntu.sh</a>

<pre>
#!/bin/sh
{
    set -e
    SUDO=''
    if [ "$(id -u)" != "0" ]; then
      SUDO='sudo'
      echo "This script requires superuser access to install apt packages."
      echo "You will be prompted for your password by sudo."
      # clear any previous sudo permission
      sudo -k
    fi
&nbsp;
    # run inside sudo
    $SUDO sh <<SCRIPT
  set -ex
&nbsp;
  # if apt-transport-https is not installed, clear out old sources, update, then install apt-transport-https
  dpkg -s apt-transport-https 1>/dev/null 2>/dev/null || \
    (echo "" > /etc/apt/sources.list.d/heroku.list \
      && apt-get update \
      && apt-get install -y apt-transport-https)

  # add heroku repository to apt
  echo "deb https://cli-assets.heroku.com/apt ./" > /etc/apt/sources.list.d/heroku.list
&nbsp;
  # remove toolbelt
  (dpkg -s heroku-toolbelt 1>/dev/null 2>/dev/null && (apt-get remove -y heroku-toolbelt heroku || true)) || true
&nbsp;
  # install heroku's release key for package verification
  curl https://cli-assets.heroku.com/apt/release.key | apt-key add -
&nbsp;
  # update your sources
  apt-get update
&nbsp;
  # install the toolbelt
  apt-get install -y heroku
&nbsp;
SCRIPT
  # test the CLI
  LOCATION=$(which heroku)
  echo "heroku installed to $LOCATION"
  heroku version
}
</pre>

#### deploy_heroku.sh

Travis then runs <a target="_blank" href="https://github.com/wilsonmar/cicd-buzz/blob/master/.travis/deploy_heroku.sh">deploy_heroku.sh</a> containing:

<pre>
#!/bin/sh
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku plugins:install heroku-container-registry
docker login -e _ -u _ --password=$HEROKU_API_KEY registry.heroku.com
heroku container:push web --app $HEROKU_APP_NAME
</pre>


<a name="GitCommit"></a>

#### Git Commit to Transfer

9. Push a commit from your local git history to GitHub and hooks in GitHub will trigger a build.
9. <a target="_blank" href="https://travis-ci.org/dashboard">Travis dashboard</a>
<br /><br />

To enable Travis CI to start a build at each Push and Pull Request for a repository, flip the switch in front of your GitHub repository (click the ‘Sync account’ button in case your repository is not yet visible) :

<a target="_blank" href="https://medium.com/mobileforgood/coding-tips-patterns-for-continuous-integration-with-docker-on-travis-ci-9cedb8348a62">This blog post</a> documents how to, on every push to the repository, Travis builds a new image (for testing) and when a branch is merged, the built image is pushed to Docker Hub. 

<a target="_blank" href="https://medium.com/vaidikkapoor/managing-open-source-docker-images-on-docker-hub-using-travis-7fd33bc96d65">
This blog</a> talks about automatically syncing README.


Resources on Travis:

* <a target="_blank" href="https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci">https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci</a>
   lists .travis.yml files for various languages. https://docs.travis-ci.com/user/language-specific/

   The example for Node was presented <a target="_blank" href="https://slides.com/dreeve/deck/">with this slidedeck</a> by David Reeve in VIDEO: <a target="_blank" href="https://www.youtube.com/watch?v=Uft5KBimzyk">Travis CI Tutorial - How to Use Travis CI with Github for Continuous Integration</a> Jan 22, 2016 account FullStack Academy.


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

https://medium.com/vaidikkapoor/managing-open-source-docker-images-on-docker-hub-using-travis-7fd33bc96d65
Jul 9, 2018


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
