---
layout: post
title: "Python API flask"
excerpt: "Step-by-step using the Flask REST API library using SQLite3 locally in venv on a Mac"
tags: [python, coding]
date: "2017-03-04"
file: "python-api-flask"
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

Flask is called a "micro-framework" because, unlike Django and other analogues like Ruby on Rails, it provides only what is necessary to do core web development, leaving you to add plug-ins beyond that minimal subset.

Flask's approach keeps your code and workflow simple, particularly on smaller projects. 

<hr />

This is a hands-on tutorial showing how to quickly create a simple Python blog server program to process sample REST API calls from a user's browser. By hands-on I mean explanations are provided after you do each action. Actions include folder navigation and creation, virtualenv, etc.

1. [Open a Terminal shell window on Mac or cmd window on Windows](/terminal/).
0. Create a folder where you hold various projects under your user home folder. On a Mac:

   <tt><strong>cd ~ && mkdir gits
   </strong></tt>

   Alternately, use the workspace you use with the Eclipse IDE.

0. Create and/or navigate into a folder holding where git will create repositories:

   <tt><strong>mkdir wilsonmar && cd wilsonmar 
   </strong></tt>

   The example here is a user account name on GitHub.com. The repository of interest is at:

   <a target="_blank" href="https://github.com/wilsonmar/python-api-flask">
   https://github.com/wilsonmar/python-api-flask</a>

   You can download a Zip file containing it and unzip it locally. 
   But using Git also downloads a database containing the history of changes.

   Note the repository was <strong>forked</strong> from GitHub user "sagaragarwal94" = 
   Sagar Chand Agarwal (<a target="_blank" href="https://twitter.com/sagaragarwal94?lang=en">@sagaragarwal94</a>).

0. Have Git create a folder and download code from GitHub:

   <tt><strong>git clone <a target="_blank" href="https://github.com/wilsonmar/python-api-flask">https://github.com/wilsonmar/python-api-flask</a>
   cd python-api-flask
   </strong></tt>

   Alternately, you can Fork to your own account and change the URL accordingly.


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

   ## Python Environment

   PROTIP: The `standup.sh` file in the repo from GitHub performs the steps below automatically. The script can be run repeatedly.

0. Install virtualenv.
0. Create a simple virtual environment folder named "venv":

   <tt><strong>virtualenv venv
   cd venv
   </strong></tt>

   The response:

   <pre>Using base prefix '/usr/local/Cellar/python/3.7.5/Frameworks/Python.framework/Versions/3.7'
New python executable in /Users/wilson_mar/gits/wilsonmar/python-api-flask/venv/bin/python3.7
Also creating executable in /Users/wilson_mar/gits/wilsonmar/python-api-flask/venv/bin/python
Installing setuptools, pip, wheel...
done.
   </pre>

   PROTIP: The virtualenv program executes commands in the `.env` file every time we cd into the directory. An <a target="_blank" href="https://scotch.io/tutorials/build-a-restful-api-with-flask-the-tdd-way">example</a>:

   <pre>
source env/bin/activate
export FLASK_APP="server.py"
export APP_SETTINGS="development"
export DATABASE_URL="postgresql://localhost/flask_api"
   </pre>

   PROTIP: `venv` is specified in the `.gitignore` file so the folder isn't uploaded up to GitHub, since it's created each time.

0. Manually activate if you do not use the .env file:

   <tt><strong>source env/bin/activate
   </strong></tt>

   The response adds an additional prompt:
   <pre>(venv)
   </pre>

0. When the virtual environment is active:

   <pre><strong>python --version</strong></pre>

   The python interpreter responds that it automatically recognizes python as using Python3, such as:

   <pre>Python 3.7.5</pre>

0. BTW, to get out of a virtualenv environment:

   <tt><strong>deactivate
   </strong></tt>

   "(env)" should disappear after this.

   Alternately, to get out of an Anaconda enviornment:

   <tt><strong>source deactivate
   </strong></tt>

0. Install dependencies within venv: 

   <tt><strong>pip install flask flask-jsonpify flask-sqlalchemy flask-restful
   </strong></tt>

   CAUTION: You did not cd into venv if the response begins with anything other than:

   <pre>Collecting flask
  Using cached https://files.pythonhosted.org/packages/9b/93/628509b8d5dc749656a9641f4caf13540e2cdec85276964ff8f43bbb1d3b/Flask-1.1.1-py2.py3-none-any.whl
Processing /Users/wilson_mar/Library/Caches/pip/wheels/ea/a9/40/ac47ad604861c1a40499042d30c22cdb7d1fa1abf426597788/Flask_Jsonpify-1.5.0-cp37-none-any.whl
Collecting flask-sqlalchemy
  Using cached https://files.pythonhosted.org/packages/1e/65/226d95466c75e34e291a76890ed0e27af2e46ab913002847856f11d4d59d/Flask_SQLAlchemy-2.4.1-py2.py3-none-any.whl
Collecting flask-restful
  Using cached https://files.pythonhosted.org/packages/17/44/6e490150ee443ca81d5f88b61bb4bbb133d44d75b0b716ebe92489508da4/Flask_RESTful-0.3.7-py2.py3-none-any.whl
   </pre>

0. BTW The repository contains a `requirements.txt` file listing dependencies which was generated by:

   <tt><strong>pip freeze > requirements.txt
   </strong></tt>

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

   NOTE: "Werkzeug" is a German word for "tool" (for HTTP and routing).

0. Download and install Python dependencies specified:

   <tt><strong>pip install -r requirements.txt
   </strong></tt>

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

0. Read the description the Flask Framework at <a target="_blank" href="http://flask.pocoo.org/">http://flask.pocoo.org</a> 

   Additional information about the Flask framework is at:

   * http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world
   * https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
   <br /><br />

   Flask works with:

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

   Alternately, a more robust database is to runb (on default port 5432):
   <li><strong><a target="_blank" href="https://www.postgresql.org/download/">PostgreSQL</a></strong> – Postgres database offers many <a href="https://www.postgresql.org/about/advantages/">advantages</a> over others.</li>
   <li><strong><a target="_blank" href="http://initd.org/psycopg/">Psycopg2</a></strong> – A Python adapter for Postgres.</li>
   * <a target="_blank" href="https://flask-migrate.readthedocs.io/en/latest/">Flask-Migrate</a> – Offers SQLAlchemy database migrations for Flask apps using <a target="_blank" href="https://pypi.python.org/pypi/alembic">Alembic</a>
   <br /><br />


   <a name="EstDB"></a>

   ### Establish Database

0. Install SQLite3 on MacOS from the internet:

   <tt><strong>brew install sqlite3 -g
   </strong></tt>

   This installs in another folder (not the pwd).

   The chinook.db is in the repository. But if it's not there, download the "chinook.zip" file from:

   <a target="_blank" href="http://www.sqlitetutorial.net/download/sqlite-sample-database/?wpdmdl=94">
   http://www.sqlitetutorial.net/download/sqlite-sample-database/?wpdmdl=94</a>

   0. Unzip file to obtain file "chinook.db" which contains the database.
   0. Move the chinook.db file to the `python_rest` folder.
   <br /><br />
   
0. Open the database using SQLite:

   <tt><strong>sqlite3 chinook.db
   </strong></tt>

   The response contains the date of the SQLite3 version being used:

   <pre>SQLite version 3.24.0 2018-06-04 14:10:15
Enter ".help" for usage hints.
   sqlite> 
   </pre>

0. List commands 

   <tt><strong> sqlite> .help
   </strong></tt>

   The response is as shown on https://www.sqlite.org/cli.html

   <pre>
.auth ON|OFF           Show authorizer callbacks
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

   <tt><strong> sqlite> .tables
   </strong></tt>

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

   <tt><strong>cd ~/gits/wilsonmar/python-api-flask
   </strong></tt>

0. Ensure permissions: On a Mac:

   <tt><strong>chmod a+x server.py
   </strong></tt>

0. Initiate the Python web service:

   <tt><strong>python server.py
   </strong></tt>

   Alternately:

   <tt><strong>./server.py
   </strong></tt>

   If you get this response, you propably forgot to run requirements.txt:

   <pre>Traceback (most recent call last):
  File "server.py", line 2, in &LT;module>
    from flask import Flask, request, jsonify
ImportError: No module named flask</pre>

   The response expected:

   <pre> * Serving Flask app "server" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
   </pre>


   ### Run Flask Compile and Prewiew 

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

   <pre><strong>open https://localhost:5000
   </strong></pre>

0. If you are following along <a href="#TomBellProjects">Tom Bell's projects on Pluralsight</a>, see his preview at:

   <a target="_blank" href="https://pfjb.thomasbell.org">https://pfjb.thomasbell.org</a>

   <a target="_blank" href="https://app.pluralsight.com/projects/build-a-job-board-with-python-flask/discussion">Discussions with Tom Bell</a>


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

   <tt><strong>curl -i http://127.0.0.1:5000/tracks
   </strong></tt>

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

   <tt><strong>curl -i http://127.0.0.1:5000/employees
   </strong></tt>

   The response shows ids of all the employees in the pre-populated database. All 8 in the sample database:

   <pre>{"employees": [1, 2, 3, 4, 5, 6, 7, 8]}
   </pre>

   TODO: Now we change the code to list employee names instead of just their numbers.


   ### List specific employee

0. In your browser, go to the URL accessing the employees/item route:

   <a target="_blank" href="http://127.0.0.1:5000/employees/8">http://127.0.0.1:5000/employees/8</a> 

   Alternately, on the command line:

   <tt><strong>curl -i http://127.0.0.1:5000/employees/8
   </strong></tt>

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

   <tt><strong>curl -X POST http://127.0.0.1:5000/employees/9 -d '{"LastName":"Wayne", "FirstName":"Bruce"}' -H "Content-Type: application/json"
   </strong></tt>

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


## More about Python

This is one of a series about Python:

{% include python_links.html %}
