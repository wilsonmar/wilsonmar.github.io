---
layout: post
date: "2017-03-04"
file: "python-api-flask"
title: "Python API flask"
excerpt: "Step-by-step using the Flask REST API library using SQLite3 locally in venv on a Mac"
tags: [python, coding]
image:
# pic white python logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622164/4230c848-0585-11e6-957b-be11147346e6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Flask is called a "micro-framework" because (unlike Python Django and its analogue Ruby on Rails)
it provides only what is necessary to do core web development, leaving you to add plug-ins beyond its minimal subset.
Flask's approach keeps your code and workflow simple, particularly on smaller projects. 

Unlike Django, which has security built-in,
<strong>extensions</strong> are added to Flask to enable database access, web form, user authentication, payments, etc.

This is a hands-on walkthrough of the intricacies of creating a sample Python server program to process REST API calls from a user's browser. By hands-on I mean explanations are provided after you do each action. 

## Installation

You can <a name="InstallFlask">install Flask on your local Mac laptop (covered below)</a>. 

But full-stack developer <a target="_blank" href="https://www.NickJanetakis.com/uses">Nick Janetakis</a> (<a target="_blank" href="htttps://twitter.com/nickjanetakis">@nickjanetakis</a>), who also created <a target="_blank" href="https://www.youtube.com/watch?v=XeSD17YRijk&list=PL-v3vdeWVEsXT-u0JDQZnM90feU3NE3v8">a course on Docker</a>, presents his Docker Compose image of a sample (dice-rolling betting game) application. Nick explains how you can build the 4,000+ lines of "production-quality bullet-proof" source code yourself in his 22-hour video course "Build a SaaS (web) Application with Flask" (bsawf) at <a target="_blank" href="https://www.udemy.com/course/the-build-a-saas-app-with-flask-course/">$11.99 Udemy.com</a> and <a target="_blank" href="https://buildasaasappwithflask.com/">marketed (for $59) at buildasaasappwithflask.com</a> and <a target="_blank" href="https://www.reddit.com/r/flask/comments/emoz7s/can_you_recommend_a_good_tutorial_on_how_to_use_a/">Reddit</a>. BTW Nick also produces the podcast <a target="_blank" href="https://runninginproduction.com">Running in Production</a>.

The latest version of the completed app is periodically updated by the author at <br />
<a target="_blank" href="https://github.com/nickjj/build-a-saas-app-with-flask.git">
https://github.com/nickjj/build-a-saas-app-with-flask.git</a>

> Unique to this website is a bash shell script I've written that enables you to install and run it on your MacOS laptop with a single command.

1. View my install script at:

   <pre><strong><a target="_blank" href="https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/install-bsawf.sh">https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/install-bsawf.sh</a>
   </strong></pre>

   Each feature of the script is <a target="_blank" href="https://wilsonmar.github.io/bash-scripts">explained in my blog article on bash install scripts</a>. My scripts makes use of "feature flags" specified in calling parameters.

1. To execute the script yourself, first put it in your Clipboard by <strong>triple-clicking</strong> "bash" in this command, then select copy:

   <pre><strong>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/bash/install-bsawf.sh)" -v -E -I -a -o
   </strong></pre>

   Connect to the internet if you see:

   <pre>curl: (6) Could not resolve host: raw.githubusercontent.com</pre>

1. Open a Terminal on your terminal, click on the cursor, and keypress <strong>command+V</strong> to paste from Clipboard:

   docker-compose installs these instances:
   
   * worker_1
   * celery_1
   * redis_1
   * progres_1
   <br /><br />

   The script ends with a message like these:

   <pre>worker_1   | [202X-mm-dd 04:59:42,036: INFO/Beat] beat: Starting...
   </pre>

   `-o` in parameters to the command asks the script to open the app in your default browser (Safari usually on a Mac):

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/72588109-3e1ca980-38c5-11ea-965e-a935b8e69498.jpg"><img alt="snakeeyes-landing-899x355.jpg" src="https://user-images.githubusercontent.com/300046/72588109-3e1ca980-38c5-11ea-965e-a935b8e69498.jpg"></a>



### Technologies used in the app

   PROTIP: Nick's videos present not a deep dive of Flask, but the technologies around Flask.
   To be "awesome", the app makes use of several <strong>(free) open source</strong> packages and code libraries, listed below in <strong>alphabetical order</strong>:

1. Ajax requests
1. <a target="_blank" href="https://babeljs.io/">Babel</a> JavaScript compiler for compatibility.
1. Bash script<a target="_blank" href="https://nickjanetakis.com/blog/organize-your-text-based-notes-from-the-command-line-with-this-script">*</a>
1. Bootstrap vendor JavaScript downloaded
1. Celery - a background worker for Python to manage UI for long-running work, including scheduled work.
   Celery uses Redis in-memory datastore to use as a data cache, message broker.
1. Click - CLI 
1. CSRF (Cross-Site Request Forgery) Protection (see <a target="_blank" href="https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html">OWASP</a>)
1. distutils.util (in config/settings.py)
1. Docker Compose
1. ES6 JS
1. Flake8 to analyze Python code (in cli/commands/cmd_flake8.py)
1. Flask
1. Flask-debugtoolbar
1. Flask extensions http://flask.pocoo.org/docs/0.12/extensiondev/
1. Flask-Mail to send templated emails (in lib/flask_mailplus.py <a target="_blank" href="https://pythonhosted.org/Flas-Mail">written by Nick</a>)
1. Flask-Static-Digest
1. Flask-webpack at https://github.com/nickjj/flask-webpack/blob/master/flask_webpack/__init__.py
1. Flask-WTF - Web Forms
1. WTForms-Components
1. Fontawesome
1. Gunicorn - application server for both development and production 
1. <a target="_blank" href="https://jinja.palletsprojects.com/en/">Jinga2</a> templating language for Python
1. JQuery (not ReactJs) used by Bootstrap
1. JSON format files
1. NodeJs
1. PostgreSQL persistant store
1. Pytest  - package
1. pytest-cov - code coverage
1. Redis - cache database
1. Scss
1. SQLAlchemy - an ORM to query data in PostgreSQL database
1. Stripe microtransaction payments for subscriptions and coupon detection. It uses RESTFUL APIs.
1. Yarn task runner
1. Webpack (assets/webpack.config.js)
1. Werkzeug
   <br /><br />

   Flask is like a glue that sticks together two popular frameworks.
   Within the scope of MVC (Model-View-Controller) architecture, 
   Werkzeug covers the Controller (C) and Jinja2 covers the View (V).    

   <a target="_blank" href="http://werkzeug.pocoo.org/">Werkzeug at werkzeug.pocoo.org</a> is from a German word for "tool" (for HTTP and routing).
    Werkzeug is an abstraction of WSGI (Web Server Gateway Interface) for simple and universal interface between web servers and Python web applications. It includes a URL routing system, fully featured request and response objects and a powerful debugger. Also a PEP standard. It's alternative (used by Instagram) is gunicorn.

   <a target="_blank" href="http://jinja.pocoo.org/">Jinja2 at jinja.pocoo.org</a> is a full-feature template engine for Python, used for replace templating variables code with actual text values at run-time.

   Flask does not provide an integrated Model (M) layer, and lets you pick your database solution. 
   A popular choice is Flask-SQLAlchemy with a ORM (Object-Relational Mapper) over a relational database such as MySQL or PostgreSQL.

   Additionally, Core Flask itself references these Python libraries:
   
   * aniso8601
   * click (for CLI)
   * Markupsafe
   * flask-restful
   * flask-jsonpify
   <br /><br />

   Other Python apps <a target="_blank" href="https://www.udemy.com/courses/search/?src=ukw&q=Build%20a%20SaaS%20%28web%29%20Applications%20with%20Flask">in other Udemy Flask classes</a> also reference other libraries in their requirements.txt.
   

   ### Not Features

   The sample app lags behind bleeding edge technologies in several areas:

   * Django
   * ReactJs (instead of jQuery) front-end UI coding
   * CSS Flexbox
   * Offline-first UI (with Web Workers)

   * End-to-end (Selenium) UI tests of the app

   * Multi-tenancy in cloud for high-volume usage
   * Paypal payments
   * SSO (Single Sign On) via Facebook, GitHub, Twitter, etc.

   * RESTful APIs. However, Nick created a separate <a target="_blank" href="https://www.youtube.com/watch?v=s1xYgp9WHbU&list=PL-v3vdeWVEsUDDWYgZ8ImfSORIHyrsBJy&index=9" title="Mar 28, 2018"> VIDEO</a> about building RESTful APIs.
   * GraphQL
   * OpenAPI (Swagger)
   
   * Ads

   * JAM static websites

   ### Taking the video course 

   The course's marketing materials promises to show "the real (battle-hardened production) way (to create the app), without tedious research". That means the videos walks through the app in various stages of development.

1. Once you have paid and <a target="_blank" href="https://courses.nickjanetakis.com/users/sign_in">view the course videos</a>, the <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/downloads/2295059-downloading-the-course-s-material">Downloading the course materials</a> provides the download link.
1. Unzip
1. In Finder view the folders containing app code in various stages of completion:

   1. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291554-introduction">06-creating-a-base-flask-app</a>
   2.  <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291593-introduction">07-blueprints-and-jinja-2-templates</a>
   3. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291601-introduction">08-testing-and-code-quality</a>
   4. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291624-introduction">09-creating-a-cli-script</a>
   5. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291685-introduction">10-using-our-first-flask-extension</a>
   6. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291698-introduction">11-creating-a-contact-form</a>
   
   7. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291745-introduction">12-creating-a-complete-user-system</a>
   8. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291762-introduction">13-creating-a-custom-admin-dashboard</a>
   9. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291775-introduction">14-logging-middleware-and-error-handling</a>
   10. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291784-introduction">15-quality-of-life-cli-improvements</a>
   11. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291788-introduction">16-accepting-recurring-payments</a>
   12. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291817-going-over-the-requirements-txt-changes">17-building-the-snake-eyes-game</a>
   13. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291832-configuring-the-app-for-purchases">18-processing-microtransactions</a>
   14. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291840-what-is-a-database-migration">19-database-migrations</a>
   15. <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291851-introduction">20-internationalization-i18n</a>
   <br /><br />

   Each folder contains a more finished set of files than the previous folder.

   Videos for each lesson provide a walk-through of the code above. 

   Coding challenges at the end of each lesson describe the changes you make to each folder.
   
   PROTIP: The version in the course was the way things were several versions back.
   Since then, Nick has created several updates (May 2018, April, August, Oct, Dec of 2019).
   Update videos are included in the total count of videos for the course.
   This is a very valuable approach as you can see the progression of underlying library changes affecting app code over time.

1. Activate each lesson (to see the UI) by navigating to the folder to build Docker:

   <pre><strong>docker-compose up --build</strong></pre>

1. Install Sublime Text to follow the videos because that's the text editor (command subl) used.
   <a target="_blank" href="https://www.youtube.com/watch?v=5gu8wWX3Ob4">A Productive Linux Development Environment (WSL) on Windows with WSL, Docker, tmux, VSCode and More Dec 21, 2018 [19:32]
   <a target="_blank" href="https://www.youtube.com/watch?v=A0eqZujVfYU">Developing on Windows with WSL2 (Subsystem for Linux), VS Code, Docker, and the Terminal</a> by Scott Hanselman

1. Click the wheel icon to ensure that each video is presented in "1080p".

   ![snakeeyes-config-148x254](https://user-images.githubusercontent.com/300046/72680515-b2ec1100-3a88-11ea-9636-60da3623173f.png)

1. At time of this writing, the "06-creating-a-base-flask-app"

   <img width="733" alt="snakeeyes-obsolete" src="https://user-images.githubusercontent.com/300046/72680888-db760a00-3a8c-11ea-8aca-e7c00d27819a.png">


   <a name="AppTree"></a>
   
   ### App file tree

1. Open another Terminal to run <tt>tree</tt> to see all the folders and files to the finished app, presented here because in the course videos fonts are too small to see clearly.

   <pre>
├── Dockerfile
├── LICENSE
├── README.md
├── SnakeEyes_CLI.egg-info
│   ├── PKG-INFO
│   ├── SOURCES.txt
│   ├── dependency_links.txt
│   ├── entry_points.txt
│   ├── requires.txt
│   └── top_level.txt
├── assets
│   ├── app
│   │   ├── app.js
│   │   ├── app.scss
│   │   ├── modules
│   │   │   └── bootstrap.js
│   │   └── scss
│   │       ├── _forms.scss
│   │       ├── _nav.scss
│   │       ├── _sticky-footer.scss
│   │       ├── _typography.scss
│   │       ├── _variables-bootstrap.scss
│   │       ├── _variables.scss
│   │       └── all.scss
│   ├── package.json
│   ├── postcss.config.js
│   ├── static
│   │   ├── 502.html
│   │   ├── images
│   │   │   └── snake-eyes.jpg
│   │   ├── maintenance.html
│   │   └── robots.txt
│   ├── webpack.config.js
│   └── yarn.lock
├── celerybeat-schedule
├── cli
│   ├── __init__.py
│   ├── cli.py
│   └── commands
│       ├── __init__.py
│       ├── cmd_cov.py
│       ├── cmd_flake8.py
│       └── cmd_test.py
├── config
│   ├── __init__.py
│   ├── gunicorn.py
│   └── settings.py
├── docker-compose.override.example.yml
├── docker-compose.override.yml
├── docker-compose.yml
├── docker-entrypoint.sh
├── lib
│   ├── __init__.py
│   ├── <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291701-configuring-the-app-to-send-e-mail">flask_mailplus.py</a>
│   └── tests.py
├── public
│   ├── 502.html
│   ├── css
│   │   └── app.css
│   ├── fonts
│   │   ├── fa-regular-400.eot
│   │   ├── fa-regular-400.svg
│   │   ├── fa-regular-400.ttf
│   │   ├── fa-regular-400.woff
│   │   ├── fa-regular-400.woff2
│   │   ├── fa-solid-900.eot
│   │   ├── fa-solid-900.svg
│   │   ├── fa-solid-900.ttf
│   │   ├── fa-solid-900.woff
│   │   └── fa-solid-900.woff2
│   ├── images
│   │   └── snake-eyes.jpg
│   ├── js
│   │   └── app.js
│   ├── maintenance.html
│   └── robots.txt
├── requirements.txt
├── setup.py
└── snakeeyes
    ├── __init__.py
    ├── <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291702-adding-the-contact-blueprint">app.py</a>
    ├── blueprints
    │   ├── __init__.py
    │   ├── <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291837-adding-to-and-modifying-the-custom-admin">admin</a> 4000 ???
    │   ├── billing ???
    │   ├── user ???
    │   ├── contact
    │   │   ├── __init__.py
    │   │   ├── forms.py
    │   │   ├── tasks.py
    │   │   ├── templates
    │   │   │   └── contact
    │   │   │       ├── index.html
    │   │   │       └── mail
    │   │   │           └── index.txt
    │   │   └── <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291704-reviewing-the-views">views.py</a>
    │   └── page
    │       ├── __init__.py
    │       ├── templates
    │       │   └── page
    │       │       ├── home.html
    │       │       ├── privacy.html
    │       │       └── terms.html
    │       └── views.py
    ├── extensions.py
    ├── templates
    │   ├── layouts
    │   │   └── base.html
    │   └── macros
    │       ├── flash.html
    │       └── form.html
    └── tests
        ├── __init__.py
        ├── conftest.py
        ├── contact
        │   ├── __init__.py
        │   ├── test_tasks.py
        │   └── test_views.py
        └── page
            ├── __init__.py
            └── test_views.py
&nbsp;
26 directories, 70 files
   </pre>

   There is no <tt>instance</tt> folder containing <tt>settings.py</tt> used to set MAIL_USEARNAME and MAIL_PASSWORD.

   "__init__.py" are also removed for easier reading.


1. View the updates video: <a target="_blank" href="https://www.youtube.com/watch?v=Kq_khHWovl4&list=PL-v3vdeWVEsUDDWYgZ8ImfSORIHyrsBJy&index=12">3 Upgrading a Dockerized Flask App from Python 2.7 to Python 3.7.4</a> August 2019. 30:06

   originally python:2.7-slim from DockerHub

1. Unit Testing (using Pytest)

1. CLI Script to "help manage your project" in cli/cli.py

1. Web Sockets<a target="_blank" href="https://www.youtube.com/watch?v=5QUv14SQyjw&list=PL-v3vdeWVEsUDDWYgZ8ImfSORIHyrsBJy&index=11">*</a>

   <a target="_blank" href="https://www.youtube.com/watch?v=agXtLglF5Lw&list=PL-v3vdeWVEsUDDWYgZ8ImfSORIHyrsBJy&index=10">
   VIDEO: Building RESTful APIs with Flask: Visualizing the Application and Library Choices</a>


   ### App Features

   <a target="_blank" href="https://www.youtube.com/watch?v=Q3arEfQ-pno&list=PL-v3vdeWVEsUDDWYgZ8ImfSORIHyrsBJy">VIDEO playlist:  What Does This Course Cover?</a> 

   <a target="_blank" href="https://www.youtube.com/watch?v=qfXRpkLDZho">VIDEO:
   Build a SAAS App with Flask: Going over the Demo App That We'll Build</a>

* HTML5 reactive layout (reduce window size to see smaller screen layout)<a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291597-creating-the-home-page">*</a>

* <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291599-adding-a-few-additional-pages">Privacy and Terms of Service</a>
* <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/texts/2291994-coding-challenge">Add a FAQ page</a>
* <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291603-going-over-the-requirements-txt-changes">Pytest in requirements.txt file</a>
* <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291687-debug-toolbar">Debug toolbar</a>
* <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291701-configuring-the-app-to-send-e-mail">config/settings.py</a> secrets for server, email, celery.

   CAUTION: If you're putting the password in a file, use an email account that won't matter if it's compromised.

   `DEBUG=true` is not in the sample files but shown in the videos.

* Coupon code
* Subscriptions
* <a target="_blank" href="https://courses.nickjanetakis.com/courses/take/build-a-saas-app-with-flask/lessons/2291836-viewing-the-new-invoice-history">Billing history</a>
* Contact form
* Admin dashboard
* Search through a list of users
* [3:55] Edit details about each user
* Internationalization (i18n) 


<hr />

<a name="InstallFlask"></a>

## Manually install Flask on MacOS

Actions include folder navigation and creation, virtualenv, etc.

0. <a target="_blank" href="https://wilsonmar.github.io/terminal">Open a Terminal shell window on Mac</a> or cmd window on Windows.

0. Create a folder where you hold various projects under your user home folder. On a Mac:

   <pre><strong>cd ~ && mkdir -p gits
   </strong></pre>

   Alternately, use the workspace you use with a text editor or IDE.

0. Create and/or navigate into a folder holding where git will create repositories (substituting "wilsonmar" below with your GitHub account name):

   <pre><strong>mkdir wilsonmar && cd wilsonmar 
   </strong></pre>

   The example here is a user account name on GitHub.com. The repository of interest is at:

   <a target="_blank" href="https://github.com/wilsonmar/python-api-flask">
   https://github.com/wilsonmar/python-api-flask</a>

   Alternately, you can Fork to your own account and change the URL accordingly.

   You can download a Zip file containing it and unzip it locally. 
   But using Git also downloads a database containing the history of changes.

   Note the repository was <strong>forked</strong> from GitHub user "sagaragarwal94" = 
   Sagar Chand Agarwal (<a target="_blank" href="https://twitter.com/sagaragarwal94?lang=en">@sagaragarwal94</a>).

0. Have Git create a folder and download code from GitHub:

   <pre><strong>git clone <a target="_blank" href="https://github.com/wilsonmar/python-api-flask">https://github.com/wilsonmar/python-api-flask</a>
   cd python-api-flask
   </strong></pre>


   ### View code

1. In a text editor open file `server.py` 

   `#!/usr/bin/python3`

   means that we need to install the <a href="#PythonEnv">Python interpreter and environment</a>. At version 3, `print()` functions are used.

      <pre>from flask import Flask, request, jsonify
   from flask_restful import Resource, Api
   from sqlalchemy import create_engine
   from json import dumps
      </pre>

   The above specifies install of libraries to provide utility functions used in the program.

   `db_connect = create_engine('sqlite:///chinook.db')`

   means that we need to <a href="#EstDB">install the sqlite3 database engine</a>.

   `class Employees(Resource):`

   means that we need to use the sample database file `chinook.db`, which contains an employee table.


   <a name="PythonEnv"></a>

   ## Viraual Environment

   PROTIP: The `standup.sh` file in the repo from GitHub performs the steps below automatically. The script can be run repeatedly.

0. Install virtualenv.
0. Create a simple virtual environment folder named "venv":

   <pre><strong>virtualenv venv
   cd venv
   </strong></pre>

   The response:

   <pre>Using base prefix '/usr/local/Cellar/python/3.7.5/Frameworks/Python.framework/Versions/3.7'
New python executable in /Users/wilson_mar/gits/wilsonmar/python-api-flask/venv/bin/python3.7
Also creating executable in /Users/wilson_mar/gits/wilsonmar/python-api-flask/venv/bin/python
Installing setuptools, pip, wheel...
done.
   </pre>

   PROTIP: The virtualenv program executes commands in the `.env` file every time we cd into the directory. An <a target="_blank" href="https://scotch.io/tutorials/build-a-restful-api-with-flask-the-tdd-way">example</a>:

   <pre>source venv/bin/activate
export FLASK_APP="server.py"
export APP_SETTINGS="development"
export DATABASE_URL="postgresql://localhost/flask_api"
   </pre>

   PROTIP: `venv` is specified in the `.gitignore` file so the folder isn't uploaded up to GitHub, since it's created each time.

0. Manually activate if you do not use the .env file:

   <pre><strong>source venv/bin/activate
   </strong></pre>

   The response adds an additional prompt:
   <pre>(venv)
   </pre>

0. When the virtual environment is active:

   <pre><strong>python --version</strong></pre>

   The python interpreter responds that it automatically recognizes python as using Python3, such as:

   <pre>Python 3.7.5</pre>

0. BTW, to get out of a virtualenv environment:

   <pre><strong>deactivate
   </strong></pre>

   Alternately, to get out of an Anaconda environment:

   <pre><strong>source deactivate
   </strong></pre>

   "(env)" should disappear after this.


   ### Dependencies in Requirements.txt

0. Install dependencies within venv: 

   <pre><strong>pip install flask flask-jsonpify flask-sqlalchemy flask-restful
   </strong></pre>

   CAUTION: You did not cd into venv if the response begins with anything other than:

   <pre>Collecting flask
  Using cached https://files.pythonhosted.org/packages/9b/93/628509b8d5dc749656a9641f4caf13540e2cdec85276964ff8f43bbb1d3b/Flask-1.1.1-py2.py3-none-any.whl
Processing /Users/wilson_mar/Library/Caches/pip/wheels/ea/a9/40/ac47ad604861c1a40499042d30c22cdb7d1fa1abf426597788/Flask_Jsonpify-1.5.0-cp37-none-any.whl
Collecting flask-sqlalchemy
  Using cached https://files.pythonhosted.org/packages/1e/65/226d95466c75e34e291a76890ed0e27af2e46ab913002847856f11d4d59d/Flask_SQLAlchemy-2.4.1-py2.py3-none-any.whl
Collecting flask-restful
  Using cached https://files.pythonhosted.org/packages/17/44/6e490150ee443ca81d5f88b61bb4bbb133d44d75b0b716ebe92489508da4/Flask_RESTful-0.3.7-py2.py3-none-any.whl
   </pre>

   BTW The repository contains a `requirements.txt` file listing dependencies which was generated by:

   <pre><strong>pip freeze > requirements.txt
   </strong></pre>

   The file contains:

   <pre>aniso8601==1.3.0
click==6.7
Flask==0.12.2
Flask-Jsonpify==1.5.0
Flask-RESTful==0.3.6
Flask-SQLAlchemy==2.3.0
itsdangerous==0.24
Jinja2==2.9.6
MarkupSafe==1.0
python-dateutil==2.6.1
pytz==2017.2
six==1.11.0
SQLAlchemy==1.1.14
Werkzeug==0.12.2
   </pre>

0. Download and install Python dependencies specified:

   <pre><strong>pip install -r requirements.txt
   </strong></pre>

   <pre>Collecting aniso8601==1.2.0
  Downloading https://files.pythonhosted.org/packages/5b/fb/251a0dd2f4710e60664ddd8bd3485bd8362530f47af9e88f4061fe589ebf/aniso8601-1.2.0.tar.gz (59kB)
     |████████████████████████████████| 61kB 440kB/s
Collecting appdirs==1.4.0
  Downloading https://files.pythonhosted.org/packages/7b/8b/eebc6e2002a1e0383f1c7108d0111d4d33ea93bf417d7e19e43ec9b87b2b/appdirs-1.4.0-py2.py3-none-any.whl
Collecting click==6.7
  Downloading https://files.pythonhosted.org/packages/34/c1/8806f99713ddb993c5366c362b2f908f18269f8d792aff1abfd700775a77/click-6.7-py2.py3-none-any.whl (71kB)
     |████████████████████████████████| 71kB 920kB/s
Collecting Flask==0.12
  Downloading https://files.pythonhosted.org/packages/0e/e9/37ee66dde483dceefe45bb5e92b387f990d4f097df40c400cf816dcebaa4/Flask-0.12-py2.py3-none-any.whl (82kB)
     |████████████████████████████████| 92kB 971kB/s
Collecting Flask-Jsonpify==1.5.0
  Using cached https://files.pythonhosted.org/packages/60/0f/c389dea3988bffbe32c1a667989914b1cc0bce31b338c8da844d5e42b503/Flask-Jsonpify-1.5.0.tar.gz
Collecting Flask-RESTful==0.3.5
  Downloading https://files.pythonhosted.org/packages/15/2e/41485f3d74103412266f3ce07675adf4bd5b4da16f5f3599b2d114374631/Flask_RESTful-0.3.5-py2.py3-none-any.whl
Collecting Flask-SQLAlchemy==2.1
  Downloading https://files.pythonhosted.org/packages/b3/52/227aaf4e8cebb153e239c518a9e916590b2fe0e4350e6b02d92b546b69b7/Flask-SQLAlchemy-2.1.tar.gz (95kB)
     |████████████████████████████████| 102kB 1.1MB/s
Collecting itsdangerous==0.24
  Downloading https://files.pythonhosted.org/packages/dc/b4/a60bcdba945c00f6d608d8975131ab3f25b22f2bcfe1dab221165194b2d4/itsdangerous-0.24.tar.gz (46kB)
     |████████████████████████████████| 51kB 762kB/s
Collecting Jinja2==2.9.5
  Downloading https://files.pythonhosted.org/packages/3c/d1/49d69bc23d0e0c7612248dd8f5391bd043648865132309616c280ca1c837/Jinja2-2.9.5-py2.py3-none-any.whl (340kB)
     |████████████████████████████████| 348kB 942kB/s
Collecting MarkupSafe==0.23
  Downloading https://files.pythonhosted.org/packages/c0/41/bae1254e0396c0cc8cf1751cb7d9afc90a602353695af5952530482c963f/MarkupSafe-0.23.tar.gz
Collecting packaging==16.8
  Downloading https://files.pythonhosted.org/packages/87/1b/c39b7c65b5612812b83d6cab7ef2885eac9f6beb0b7b8a7071a186aea3b1/packaging-16.8-py2.py3-none-any.whl
Collecting pyparsing==2.1.10
  Downloading https://files.pythonhosted.org/packages/2b/f7/e5a178fc3ea4118a0edce2a8d51fc14e680c745cf4162e4285b437c43c94/pyparsing-2.1.10-py2.py3-none-any.whl (56kB)
     |████████████████████████████████| 61kB 2.3MB/s
Collecting python-dateutil==2.6.0
  Downloading https://files.pythonhosted.org/packages/40/8b/275015d7a9ec293cf1bbf55433258fbc9d0711890a7f6dc538bac7b86bce/python_dateutil-2.6.0-py2.py3-none-any.whl (194kB)
     |████████████████████████████████| 194kB 636kB/s
Collecting pytz==2016.10
  Downloading https://files.pythonhosted.org/packages/f5/fa/4a9aefc206aa49a4b5e0a72f013df1f471b4714cdbe6d78f0134feeeecdb/pytz-2016.10-py2.py3-none-any.whl (483kB)
     |████████████████████████████████| 491kB 977kB/s
Collecting six==1.10.0
  Downloading https://files.pythonhosted.org/packages/c8/0a/b6723e1bc4c516cb687841499455a8505b44607ab535be01091c0f24f079/six-1.10.0-py2.py3-none-any.whl
Collecting SQLAlchemy==1.1.5
  Downloading https://files.pythonhosted.org/packages/da/04/8048a5075d6e29235bbd6f1ea092a38dbe2630c670e73d4aa923a4e5521c/SQLAlchemy-1.1.5.tar.gz (5.1MB)
     |████████████████████████████████| 5.1MB 551kB/s
Collecting Werkzeug==0.11.15
  Downloading https://files.pythonhosted.org/packages/ef/c6/3c431fea5f93c8bc869ec9c7bdad9ffef4ff9c81bfe1d294217447206c46/Werkzeug-0.11.15-py2.py3-none-any.whl (307kB)
     |████████████████████████████████| 317kB 676kB/s
Building wheels for collected packages: aniso8601, Flask-Jsonpify, Flask-SQLAlchemy, itsdangerous, MarkupSafe, SQLAlchemy
  Building wheel for aniso8601 (setup.py) ... done
  Created wheel for aniso8601: filename=aniso8601-1.2.0-cp27-none-any.whl size=16351 sha256=7277a9c4da02bd09635775afa67967dcf1e5352ad441fb425def7a5930337548
  Stored in directory: /Users/wilson_mar/Library/Caches/pip/wheels/03/22/40/9b2f558eaa39d530e792583795d55365b67efb4299d0dbd5c7
  Building wheel for Flask-Jsonpify (setup.py) ... done
  Created wheel for Flask-Jsonpify: filename=Flask_Jsonpify-1.5.0-cp27-none-any.whl size=3080 sha256=108c18d63b5c289212bb733f9a0d1681dc14460276ecf99260aba3da22e40553
  Stored in directory: /Users/wilson_mar/Library/Caches/pip/wheels/ea/a9/40/ac47ad604861c1a40499042d30c22cdb7d1fa1abf426597788
  Building wheel for Flask-SQLAlchemy (setup.py) ... done
  Created wheel for Flask-SQLAlchemy: filename=Flask_SQLAlchemy-2.1-cp27-none-any.whl size=13440 sha256=f1c2a2a9755f6e28ce2fec9bcb9ebc1a85751850cbe8500a8637684454f4bcfe
  Stored in directory: /Users/wilson_mar/Library/Caches/pip/wheels/bd/18/c4/5b1ebaec15e2bb933089576ebf905ea29976b2f37ed629e1c3
  Building wheel for itsdangerous (setup.py) ... done
  Created wheel for itsdangerous: filename=itsdangerous-0.24-cp27-none-any.whl size=10623 sha256=ac156c8d22f46e9c01e6ec15e141d34565f256805bd50f09b5120c72be73f498
  Stored in directory: /Users/wilson_mar/Library/Caches/pip/wheels/2c/4a/61/5599631c1554768c6290b08c02c72d7317910374ca602ff1e5
  Building wheel for MarkupSafe (setup.py) ... done
  Created wheel for MarkupSafe: filename=MarkupSafe-0.23-cp27-cp27m-macosx_10_14_intel.whl size=17219 sha256=5356a8af98f85fbb6e48c28b84ce37062fe04b2161b369450ff6b9baa52b5ffe
  Stored in directory: /Users/wilson_mar/Library/Caches/pip/wheels/28/de/65/f28b426d990edb591113e1549c8a0f09034e5958e440629306
  Building wheel for SQLAlchemy (setup.py) ... done
  Created wheel for SQLAlchemy: filename=SQLAlchemy-1.1.5-cp27-cp27m-macosx_10_14_intel.whl size=1037499 sha256=2d7a333a5d66c004a607bb5a605f0aa3b706831af82161eca1eb236d18314b32
  Stored in directory: /Users/wilson_mar/Library/Caches/pip/wheels/9b/a4/89/5faed97aa81a384fd97c900b51c964ee28ba4bccd569e51607
Successfully built aniso8601 Flask-Jsonpify Flask-SQLAlchemy itsdangerous MarkupSafe SQLAlchemy
ERROR: matplotlib 1.3.1 requires nose, which is not installed.
ERROR: matplotlib 1.3.1 requires tornado, which is not installed.
Installing collected packages: six, python-dateutil, aniso8601, appdirs, click, itsdangerous, Werkzeug, MarkupSafe, Jinja2, Flask, Flask-Jsonpify, pytz, Flask-RESTful, SQLAlchemy, Flask-SQLAlchemy, pyparsing, packaging
  Found existing installation: six 1.4.1
ERROR: Cannot uninstall 'six'. It is a distutils installed project and thus we cannot accurately determine which files belong to it which would lead to only a partial uninstall.
   </pre>


   ### Flask home page

0. Read the description the Flask Framework at <a target="_blank" href="http://flask.pocoo.org/">http://flask.pocoo.org</a> 

   Additional information about the Flask framework is at:

   * http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world
   * https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
   <br /><br />

   Core Flask makes use of these libraries:

   * aniso8601
   * click
   * Jinja2
   * MarkupSafe
   * Flask
   * Flash-Jsonify
   * <a target="_blank" href="http://flask-sqlalchemy.pocoo.org/2.1/">Flask-SQLAlchemy</a> is a Flask extension to support <a target="_blank" href="http://www.sqlalchemy.org/">SQLAlchemy</a>, an Object Relational Mapper (ORM).
   * Flask-Restful
   * Werkzeug
   <br /><br />

   Alternately, a more robust database is to run (on default port 5432):
   * <strong><a target="_blank" href="https://www.postgresql.org/download/">PostgreSQL</a></strong> – Postgres database offers many <a href="https://www.postgresql.org/about/advantages/">advantages</a> over others.
   * <strong><a target="_blank" href="http://initd.org/psycopg/">Psycopg2</a></strong> – A Python adapter for Postgres.
   * <a target="_blank" href="https://flask-migrate.readthedocs.io/en/latest/">Flask-Migrate</a> – Offers SQLAlchemy database migrations for Flask apps using <a target="_blank" href="https://pypi.python.org/pypi/alembic">Alembic</a>
   <br /><br />


   <a name="EstDB"></a>

   ### Establish Database

0. Install SQLite3 on MacOS from the internet:

   <pre><strong>brew install sqlite3
   </strong></pre>

   This installs in another folder (not the pwd).

   The chinook.db is in the repository. But if it's not there, download the "chinook.zip" file from:

   <a target="_blank" href="http://www.sqlitetutorial.net/download/sqlite-sample-database/?wpdmdl=94">
   http://www.sqlitetutorial.net/download/sqlite-sample-database/?wpdmdl=94</a>

   0. Unzip file to obtain file "chinook.db" which contains the database.
   0. Move the chinook.db file to the `python_rest` folder.
   <br /><br />
   
0. Open the database using SQLite:

   <pre><strong>sqlite3  chinook.db  &
   </strong></pre>

   The response contains the date of the SQLite3 version being used:

   <pre>SQLite version 3.24.0 2018-06-04 14:10:15
Enter ".help" for usage hints.
   sqlite> 
   </pre>

0. Open another Terminal to list commands:

   <pre><strong> sqlite> .help
   </strong></pre>

   The response is as shown on https://www.sqlite.org/cli.html

   <pre>.auth ON|OFF           Show authorizer callbacks
.backup ?DB? FILE      Backup DB (default "main") to FILE
.bail on|off           Stop after hitting an error.  Default OFF
.binary on|off         Turn binary output on or off.  Default OFF
.changes on|off        Show number of rows changed by SQL
.check GLOB            Fail if output since .testcase does not match
.clone NEWDB           Clone data into NEWDB from the existing database
.databases             List names and files of attached databases
.dbinfo ?DB?           Show status information about the database
.dump ?TABLE? ...      Dump the database in an SQL text format
                         If TABLE specified, only dump tables matching
                         LIKE pattern TABLE.
.echo on|off           Turn command echo on or off
.eqp on|off|full       Enable or disable automatic EXPLAIN QUERY PLAN
.exit                  Exit this program
.explain ?on|off|auto? Turn EXPLAIN output mode on or off or to automatic
.fullschema ?--indent? Show schema and the content of sqlite_stat tables
.headers on|off        Turn display of headers on or off
.help                  Show this message
.import FILE TABLE     Import data from FILE into TABLE
.imposter INDEX TABLE  Create imposter table TABLE on index INDEX
.indexes ?TABLE?       Show names of all indexes
                         If TABLE specified, only show indexes for tables
                         matching LIKE pattern TABLE.
.limit ?LIMIT? ?VAL?   Display or change the value of an SQLITE_LIMIT
.log FILE|off          Turn logging on or off.  FILE can be stderr/stdout
.mode MODE ?TABLE?     Set output mode where MODE is one of:
                         ascii    Columns/rows delimited by 0x1F and 0x1E
                         csv      Comma-separated values
                         column   Left-aligned columns.  (See .width)
                         html     HTML &LT;table> code
                         insert   SQL insert statements for TABLE
                         line     One value per line
                         list     Values delimited by .separator strings
                         quote    Escape answers as for SQL
                         tabs     Tab-separated values
                         tcl      TCL list elements
.nullvalue STRING      Use STRING in place of NULL values
.once FILENAME         Output for the next SQL command only to FILENAME
.open ?--new? ?FILE?   Close existing database and reopen FILE
                         The --new starts with an empty file
.output ?FILENAME?     Send output to FILENAME or stdout
.print STRING...       Print literal STRING
.prompt MAIN CONTINUE  Replace the standard prompts
.quit                  Exit this program
.read FILENAME         Execute SQL in FILENAME
.restore ?DB? FILE     Restore content of DB (default "main") from FILE
.save FILE             Write in-memory database into FILE
.scanstats on|off      Turn sqlite3_stmt_scanstatus() metrics on or off
.schema ?PATTERN?      Show the CREATE statements matching PATTERN
                          Add --indent for pretty-printing
.separator COL ?ROW?   Change the column separator and optionally the row
                         separator for both the output mode and .import
.shell CMD ARGS...     Run CMD ARGS... in a system shell
.show                  Show the current values for various settings
.stats ?on|off?        Show stats or turn stats on or off
.system CMD ARGS...    Run CMD ARGS... in a system shell
.tables ?TABLE?        List names of tables
                         If TABLE specified, only list tables matching
                         LIKE pattern TABLE.
.testcase NAME         Begin redirecting output to 'testcase-out.txt'
.timeout MS            Try opening locked tables for MS milliseconds
.timer on|off          Turn SQL timer on or off
.trace FILE|off        Output each SQL statement as it is run
.vfsinfo ?AUX?         Information about the top-level VFS
.vfslist               List all available VFSes
.vfsname ?AUX?         Print the name of the VFS stack
.width NUM1 NUM2 ...   Set column widths for "column" mode
                         Negative values right-justify
    </pre>

0. List the 11 custom data tables in the sample chinook database loaded:

   <pre><strong> sqlite> .tables
   </strong></pre>

   The response:

   <pre>albums          employees       invoices        playlists
   artists         genres          media_types     tracks
   customers       invoice_items   playlist_track
   </pre>

   PROTIP: These tables are a rather strange assortment that normally do not belong together. But it's there as <a target="_blank" href="http://www.sqlitetutorial.net/download/sqlite-sample-database-diagram/?wpdmdl=96">technical samples</a>.


   <a name="DBschema"></a>

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/31187951-48433100-a8e8-11e7-8cfb-6298fc1db760.jpg"><img alt="sqlite-sample-database-color-650x327-82797" width="650" heigh="327" src="https://user-images.githubusercontent.com/300046/31187951-48433100-a8e8-11e7-8cfb-6298fc1db760.jpg"></a>

0. For more information from the <a target="_blank" href="http://www.sqlitetutorial.net/sqlite-sample-database/">SQLite Tutorial website</a>.

   <ul>
   <li> <code>employees</code> table stores employees data such as employee id, last name, first name, etc. It also has a field named <code>ReportsTo</code> to specify who reports to whom.</li>
   <li> <code>customers</code> table stores customers data.</li>
   <li> <code>invoices</code> &amp; <code>invoice_items</code> tables: these two tables store invoice data. The <code>invoices</code> table stores invoice header data and the <code>invoice_items</code> table stores the invoice line items data.</li>
   <li> <code>artists</code> table stores artists data. It is a simple table that contains only artist id and name.</li>
   <li> <code>albums</code> table stores data about a list of tracks. Each album belongs to one artist. However, one artist may have multiple albums.</li>
   <li> <code>media_types</code> table stores media types such as MPEG audio file, ACC audio file, etc.</li>
   <li> <code>genres</code> table stores music types such as rock, jazz, metal, etc.</li>
   <li> <code>tracks</code> table store the data of songs. Each track belongs to one album.</li>
   <li> <code>playlists</code> &amp; <code>playlist_track</code> tables: <code>playlists</code> table store data about playlists. Each playlist contains a list of tracks. Each track may belong to multiple playlists. The relationship between the <code>playlists</code> table and <code>tracks</code> table is many-to-many. The <code>playlist_track</code> table is used to reflect this relationship.</li>
   </ul>

   ### invoke

0. <strong>Open another Terminal</strong> shell window so that the database remains running.
0. Navigate to the directory you are using:

   <pre><strong>cd ~/gits/wilsonmar/python-api-flask
   </strong></pre>

0. Ensure permissions: On a Mac:

   <pre><strong>chmod a+x server.py
   </strong></pre>

0. Initiate the Python web service:

   <pre><strong>python server.py
   </strong></pre>

   Alternately:

   <pre><strong>./server.py
   </strong></pre>

   If you get this response, you propably forgot to run requirements.txt:

   <pre>Traceback (most recent call last):
  File "server.py", line 2, in &LT;module>
    from flask import Flask, request, jsonify
ImportError: No module named flask</pre>

   The response expected:

   <pre>* Serving Flask app "server" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
   </pre>


   ### Run Flask Compile and Preview 

0. Define the environment variable recognized by Flask and run flask:

   <pre><strong>export FLASK_APP=server.py
   </strong></pre>

0. Compile using Flask

   <pre><strong>flask run
   </strong></pre>

   Alternately:

   <pre><strong>python -m flask run
   </strong></pre>

0. In a browser visit the web page on the designated port:

   <pre><strong>open https://localhost:5000/tracks
   </strong></pre>

   What you see depends on the JSON handler on your internet browser.

   ![python-flask-response-687x272](https://user-images.githubusercontent.com/300046/71012315-2d053080-20ac-11ea-927f-c231476a8b56.png)


0. If you are following along <a href="#TomBellProjects">Tom Bell's projects on Pluralsight</a>, see his preview at:

   <a target="_blank" href="https://pfjb.thomasbell.org">https://pfjb.thomasbell.org</a>

   <a target="_blank" href="https://app.pluralsight.com/projects/build-a-job-board-with-python-flask/discussion">Discussions with Tom Bell</a>


   ### Routes

   Routing incoming URL to Python code that handles them is at the heart of what Flask does.
   
   The default root is defined with this code:

   <pre>@app.route('/')
   def index():
       """
       Render a hello world response.
       :return: Flask response
       """
       return 'Hello World!'
   </pre>

   The three double-quotes encasing the docstring:


   ## Tests Walkthough

   Tests are coded first in a BDD (Behavior Driven Design):

0. Open `tests.py` in a text editor.
0. View the bottom of the program where code to invoke it is defined:

   <pre>if __name__ == '__main__':
     app.run
   </pre>

   ## Routes Walkthough

0. Open `server.py` in a text editor.
0. View the bottom of the program where code to invoke it is defined:

   <pre>if __name__ == '__main__':
     app.run
   </pre>

   Alternately, `app.run(debug=True)`.

   Up from the bottom of the program are three `api.add_resource` statements that define <strong>routes</strong> the server processes.

   Note how <strong>modular</strong> each route is. This enables incremental addition of programming code capabilities over time.


   ### Get Tracks

0. In your browser, go to the URL with "tracks":

   <a target="_blank" href="http://127.0.0.1:5000/tracks">http://127.0.0.1:5000/tracks</a>

   Alternately, on the command line:

   <pre><strong>curl -i http://127.0.0.1:5000/tracks
   </strong></pre>

   The response (JSON file) shows details for each media track:

   <pre>
{
  "data": [
    {
      "Composer": "Angus Young, Malcolm Young, Brian Johnson", 
      "Name": "For Those About To Rock (We Salute You)", 
      "TrackId": 1, 
      "UnitPrice": 0.99
    }, 
   </pre>

0. In the Terminal/Console, notice the detailed logging:

   <pre>127.0.0.1 - - [09/Dec/2019 21:10:32] "GET / HTTP/1.1" 404 -
127.0.0.1 - - [09/Dec/2019 21:10:32] "GET /favicon.ico HTTP/1.1" 404 -
127.0.0.1 - - [09/Dec/2019 21:12:20] "GET /tracks HTTP/1.1" 200 -
   </pre>

## Unit testing

1. Flask comes with unit testing support. To run tests defined in file `test_module1.py` within the `tests` folder:

    <pre><strong>pytest -k module1</strong></pre>




## Review outputs

0. Review this output from a database query to obtain a result returned:

   <pre>
class Tracks(Resource):
    def get(self):
        conn = db_connect.connect()
        query = conn.execute("select trackid, name, composer, unitprice from tracks;")
        result = {'data': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
        return jsonify(result)
   </pre>

   Note each class is self-contained.

   The `conn` object is defined before making the query.

   The `execute` function sends to the database connection SQL commands referencing fields defined in the <a href="#DBschema">database schema shown above</a>.

   The `query.cursor` points to the whole query response object.
   The `for` keyword loops the various keys, using i as the index of each current item.

   `tuple` identifies the key in each item in the query object.

   `zip` takes one or more sequences, and returns a sequence of tuples. 

   `dict` constructs dictionary objects from a sequence of key/value tuples.

   `data` is the high-level item in the response.

   The `jsonify` function formats the result object to JSON formatting for display.


   ### List Employees

0. In your browser, go to the URL accessing the "employees" list route:

   <a target="_blank" href="http://127.0.0.1:5000/employees">http://127.0.0.1:5000/employees</a>

   Alternately, on the command line:

   <pre><strong>curl -i http://127.0.0.1:5000/employees
   </strong></pre>

   The response shows ids of all the employees in the pre-populated database. All 8 in the sample database:

   <pre>{"employees": [1, 2, 3, 4, 5, 6, 7, 8]}
   </pre>

   TODO: Now we change the code to list employee names instead of just their numbers.


   ### List specific employee

0. In your browser, go to the URL accessing the employees/item route:

   <a target="_blank" href="http://127.0.0.1:5000/employees/8">http://127.0.0.1:5000/employees/8</a> 

   Alternately, on the command line:

   <pre><strong>curl -i http://127.0.0.1:5000/employees/8
   </strong></pre>

   Either way, this response shows details of employee whose employeeid is 8:

   <pre>{
  "data": [
    {
      "Address": "923 7 ST NW", 
      "BirthDate": "1968-01-09 00:00:00", 
      "City": "Lethbridge", 
      "Country": "Canada", 
      "Email": "laura@chinookcorp.com", 
      "EmployeeId": 8, 
      "Fax": "+1 (403) 467-8772", 
      "FirstName": "Laura", 
      "HireDate": "2004-03-04 00:00:00", 
      "LastName": "Callahan", 
      "Phone": "+1 (403) 467-3351", 
      "PostalCode": "T1H 1Y8", 
      "ReportsTo": 6, 
      "State": "AB", 
      "Title": "IT Staff"
    }
  ]
}
   </pre>

   The output output is from this code which makes a database query:

   <pre>class Employees(Resource):
    def get(self):
        conn = db_connect.connect() # connect to database
        query = conn.execute("select * from employees") # This line performs query and returns json result
        return {'employees': [i[0] for i in query.cursor.fetchall()]} # Fetches first column that is Employee ID
   </pre>

0. Instead of "8", use annother number to obtain data for another employee.

   PROTIP: This is no longer considered a secure design. Services now use hashed values instead of allowing incrementable numbers to identify specific rows.


   ### Post new employee

   PROTIP: The previous code defines the response to "get" requests.

   The code to post a new entry is this:

   <pre>def post(self):
        conn = db_connect.connect()
        print(request.json)  # used during testing.
        LastName = request.json['LastName']
        FirstName = request.json['FirstName']
        Title = request.json['Title']
        ReportsTo = request.json['ReportsTo']
        BirthDate = request.json['BirthDate']
        HireDate = request.json['HireDate']
        Address = request.json['Address']
        City = request.json['City']
        State = request.json['State']
        Country = request.json['Country']
        PostalCode = request.json['PostalCode']
        Phone = request.json['Phone']
        Fax = request.json['Fax']
        Email = request.json['Email']
        query = conn.execute("insert into employees values(null,'{0}','{1}','{2}','{3}', \
                             '{4}','{5}','{6}','{7}','{8}','{9}','{10}','{11}','{12}', \
                             '{13}')".format(LastName,FirstName,Title,
                             ReportsTo, BirthDate, HireDate, Address,
                             City, State, Country, PostalCode, Phone, Fax,
                             Email))
        return {'status':'success'}
   </pre>

   `def post(self):` appears instead of a `get` in the definition.

   Unlike Get requests, which involve specification of just an URL, post requests also require the client to submit to the server additional fields in the <strong>HTTP header</strong>. 

   The Python server program expects from the client to add into the database with this coding:

   `LastName = request.json['LastName']` 

   If a curl utility program is used as the client, it would look like this:

   <pre><strong>curl -X POST http://127.0.0.1:5000/employees/9 -d '{"LastName":"Wayne", "FirstName":"Bruce"}' -H "Content-Type: application/json"
   </strong></pre>

   PROTIP: The simple sample code contains no editing of inputs which all "production worthy" code should have. Examples of edits include whether all required fields are supplied and that content are valid. Such edits would be in client software as well.

   The content following `-d` provides what is specified in server code such as:

   `LastName = request.json['LastName']` 

   The `application/json` specifes the format expected back from the server.

   PROTIP: This starter program does not have logic to prevent duplicates from being added.


## Next

   TODO: Generation of code from database using Swagger (OpenAPI).

   TODO: Lint code with default SonarQube rules.

   TODO: GraphQL - https://github.com/graphql-python/flask-graphql or 
   after buiding schemas using http://graphene-python.org/

   TODO: Add HATEOS to respond to URL with no resource (folder) specified.

Flask provides "blueprints" to organize code into packages for a more modular architecture.
A Flask Blueprint is like an application component -- not an application itself, but can be registered in an application. 
Each Blueprint lives in its own folder.


## f5-sdk for Python

Jason Rahm's Getting started with F5 Networks® BIG-IP® iControl® REST interface at <a target="_blank" href="https://github.com/F5Networks/f5-common-python">https://github.com/F5Networks/f5-common-python</a> with docs at <a target="_blank" href="https://f5-sdk.readthedocs.io/en/latest/">https://f5-sdk.readthedocs.io/en/latest/</a>

1. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-f5-common-python-sdk-27438"> f5-common-python SDK</a> 27-Jul-2017 

2. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-python-sdk-part-2-unnamed-resources-and-commands-27602">unnamed resources and commands</a> 24-Aug-2017

3. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-python-sdk-part-3-working-with-statistics-31387">working with statistics</a> 07-Jun-2018

4. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-python-sdk-part-4-working-with-request-parameters-31420#comment11117">working with request parameters</a> 14-Jun-2018

5. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-python-sdk-part-5-request-parameters-revisited-31509">request parameters revisited</a> 22-Jun-2018

6. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-python-sdk-part-6-transactions-31951?tag=devops">transactions</a> 13-Sep-2018



## Resources

This tutorial was described at 
https://www.codementor.io/sagaragarwal94/building-a-basic-restful-api-in-python-58k02xsiq

https://scotch.io/tutorials/build-a-restful-api-with-flask-the-tdd-way

http://python.apichecklist.com/ from Dan Bader.   

https://www.patricksoftwareblog.com/steps-for-starting-a-new-flask-project-using-python3/
FEBRUARY 19, 2018

<a target="_blank" href="https://app.pluralsight.com/search/?q=flask&m_sort=relevance&page=1&query_id=aa6a9dbd-3cc7-49ef-bb5b-2aefe699ce56">Pluralsight has several video tutorials on Flask</a>:

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/flask-micro-framework-introduction/table-of-contents">"Introduction to the Flask Microframework" 26 Dec 2014</a> 3h 57m by Reindert-Jan Ekker (@rjekker)

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/python-flask-rest-api/table-of-contents">"Building a REST API Using Python and Flask" 2 Jul 2018</a> 1h 57m by Sanjay Rai
   covers getting, posting, updating, storing data. It also covers adding authentication to the API.


<a name="TomBellProjects"></a>

Tom Bell's projects at Pluralsight.com (<a target="_blank" href="https://twitter.com/search?q=%23pluralsight-projects&src=typed_query">pluralsight-projects</a>) have videos along with step-by-step instructions and checking of work your in GitHub (like Code School before purchase by Pluralsight):

   * <a target="_blank" href="https://app.pluralsight.com/projects/add-authentication-to-a-flask-cms">"Add Authentication to a Flask CMS"</a> checks on whether you've forked from https://github.com/pluralsight-projects/PythonFlask-CMSAuthentication, etc. The project involves managing session variables, clear and get session data, custom route decorators. Initially, all the tests fail. The course covers fixing the tests. The solution is at another branch:
   https://github.com/wilsonmar/PythonFlask-CMSAuthentication/tree/module1-solution

   * <a target="_blank" href="https://app.pluralsight.com/projects/add-authentication-to-a-flask-cms">"Refactor a Flask CMS"</a> 1hr Oct 28, 2019 shows use of an Admin Blueprint by creating and editing a route.
   https://github.com/pluralsight-projects/PythonFlask-CMSBlueprints

   * <a target="_blank" href="https://app.pluralsight.com/projects/build-a-job-board-with-python-flask">Build a Job Board with Python & Flask</a>  2h 35m on Sep 26, 2018 forks from https://github.com/pluralsight-projects/PythonFlask-JobBoard

<a target="_blank" href="https://realpython.com/flask-google-login/">
How to build a web app using Python’s Flask and Google App Engine"</a> 5 Nov 2018.
It uses the OpenWeather API.

   * https://www.codeastar.com/easy-python-weather-forecast-tool/ uses the  geopy python module and https://darksky.net/dev API in https://github.com/codeastar/weather_on_trip from 2017
   
   * https://www.codeastar.com/easy-accuweather-forecast-in-python/ using tinydb by
   https://github.com/codeastar/ez_accuweather_python

## API projects

https://dev.to/aligoren/using-elasticsearch-with-python-and-flask-2i0e
for Debian

## Sample front-end projects

https://www.youtube.com/watch?v=YW8VG_U-m48
Serving React with a Flask Backend (using PyCharm, Yarn)

   * https://subscription.packtpub.com/book/web_development/9781785881114/8/ch08lvl1sec45/reactjs-and-flask  book on Packt By Tarek Ziadé July 2017

   * https://medium.com/@neilvodoor/using-react-w-flask-82d8341876e4

   * https://www.codeastar.com/react-frontend-weather-forecast-2/

   * https://developer.okta.com/blog/2018/12/20/crud-app-with-python-flask-react

https://testdriven.io/blog/developing-a-single-page-app-with-flask-and-vuejs/

https://github.com/alexdebrie/serverless-flask

https://stackabuse.com/serving-static-files-with-flask/

## API

<a target="_blank" href="https://www.youtube.com/watch?v=r1wL0FVeLmA">VIDEO</a>: John Dupuy on ashcrow's <a target="_blank" href="https://github.com/ashcrow/flask-track-usage">flask-track-usage</a> and flash-analytics Flask extensions:<a target="_blank" href="https://stevemilner.org/2018/06/04/flask-track-usage-2-0-0-tutorial/">*</a>
provides flexibility by having the app control logs
using <a target="_blank" href="https://www.youtube.com/watch?v=iW6_EXcCU5k&list=PL6RpFCvmb5SGUCLmzTc_wS6gvG0c3GIrS">MongoEngine</a> (MongoDB) and PostgreSQL for storage.
(read <a target="_blank" href="https://pythonhosted.org/Flask-Track-Usage/">documentation</a>)

## Internationalization

To internationalize the app, add <tt>Flask-Babel==0.9</tt> to the requirements.txt file.
It was created by the same author as Flask itself.

## References

<a target="_blank" href="https://www.youtube.com/watch?v=1ByQhAM5c1I" title="PyBay2016">VIDEO: "Flask for Fun and Profit"</a>
by Armin Ronacher

<a target="_blank" href="https://learning.oreilly.com/videos/building-rest-apis/9781788293143/9781788293143-video1_1">Building REST APIs with Python</a> by Wayne Mary is based on PostgreSQL and Django (not Flask).

<a target="_blank" href="https://learning.oreilly.com/library/view/continuous-api-management/9781492043546/">Continuous API Management</a>
Copyright O'Reilly 2019 by Mehdi Medjaoui, Erik Wilde, Mitra Pandey Consulting, Ltd., and Amundsen.com

<a target="_blank" href="https://www.codementor.io/@jqn/deploy-a-flask-app-on-aws-ec2-13hp1ilqy2">
Deploy a Flask app on AWS EC2</a>


## More about Python

This is one of a series about Python:

{% include python_links.html %}
