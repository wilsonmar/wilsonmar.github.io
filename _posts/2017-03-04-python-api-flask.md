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


This is a hands-on tutorial showing how to quickly create a simple Python blog server program which processes REST API calls from a user's browser. By hands-on I mean explanations are provided after you do each action.

<hr />

1. [Open a Terminal shell window on Mac or cmd window on Windows](/terminal/).
0. Create a folder where you hold various projects under your user home folder. On a Mac:

   <tt><strong>
   cd ~ && mkdir gits
   </strong></tt>

   Alternately, use the workspace you use with the Eclipse IDE.

0. Create and/or navigate into a folder holding where git will create repositories:

   <tt><strong>
   mkdir wilsonmar && cd wilsonmar 
   </strong></tt>

   The example here is a user account name on GitHub.com. The repository of interest is at:

   <a target="_blank" href="https://github.com/wilsonmar/python-api-flask">
   https://github.com/wilsonmar/python-api-flask</a>

   You can download a Zip file containing it and unzip it locally. 
   But using Git also downloads a database containing the history of changes.

   Note the repository was <strong>forked</strong> from GitHub user "sagaragarwal94" = 
   Sagar Chand Agarwal (<a target="_blank" href="https://twitter.com/sagaragarwal94?lang=en">@sagaragarwal94</a>).

0. Have Git create a folder and download code from GitHub:

   <tt><strong>
   git clone <a target="_blank" href="https://github.com/wilsonmar/python-api-flask">https://github.com/wilsonmar/python-api-flask</a>
   </strong></tt>

   Alternately, you can Fork to your own account and change the URL accordingly.


   ### View code

1. In a text editor open a file `server.py` 

   `#!/usr/bin/python3`

   means that we need to install the <a href="#PythonEnv">Python interpreter and environment</a>. At version 3, `print()` functions are used.

      <pre>    
   from flask import Flask, request, jsonify
   from flask_restful import Resource, Api
   from sqlalchemy import create_engine
   from json import dumps
      </pre>

   The above specifies install of libraries to provide utility functions used in the program.

   `db_connect = create_engine('sqlite:///chinook.db')`

   means that we need to <a href="#EstDB">install the sqlite3 database engine</a>.

   `class Employees(Resource):`

   means that we need to use the sample database file `chinook.db` which contains an employee table.


   <a name="PythonEnv"></a>

   ## Python Environment

   PROTIP: The `standup.sh` file in the repo from GitHub performs the steps below automatically. The script can be run repeatedly.

0. Install virtualenv.
0. Create a simple virtual environment folder venv:

   <tt><strong>
   virtualenv venv
   </strong></tt>

   The response:

   <pre>
   New python executable in /Users/wilsonmar/gits/wilsonmar/python-api-flask/venv/bin/python
   Installing setuptools, pip, wheel...done.
   </pre>

   PROTIP</a>: The virtualenv program executes commands in the `.env` file every time we cd into the directory. An <a target="_blank" href="https://scotch.io/tutorials/build-a-restful-api-with-flask-the-tdd-way">example</a>:

   <pre>
source env/bin/activate
export FLASK_APP="server.py"
export APP_SETTINGS="development"
export DATABASE_URL="postgresql://localhost/flask_api"
   </pre>

   PROTIP: `venv` is specified in the `.gitignore` file so the folder isn't uploaded up to GitHub, since it's created each time.

0. Manually activate if you do not use the .env file:

   <tt><strong>
   source venv/bin/activate
   </strong></tt>

   The response is a different prompt, such as:

   <pre>
   Wilsons-MacBook-Pro:python-api-flask wilsonmar$
   </pre>

   PROTIP: The prompt now changed to:

   <pre>
   (venv) Wilsons-MacBook-Pro:python-api-flask wilsonmar$ 
   </pre>

0. BTW, to get out of a virtualenv environment:

   <tt><strong>
   deactivate
   </strong></tt>

   Alternately, to get out of an Anaconda enviornment:

   <tt><strong>
   source deactivate
   </strong></tt>

0. Install dependencies within venv: 

   <tt><strong>
   pip install flask flask-jsonpify flask-sqlalchemy flask-restful
   </strong></tt>

   The response:

   <pre>
Collecting flask
  Downloading Flask-0.12.2-py2.py3-none-any.whl (83kB)
    100% |████████████████████████████████| 92kB 1.4MB/s 
Collecting flask-jsonpify
  Downloading Flask-Jsonpify-1.5.0.tar.gz
Collecting flask-sqlalchemy
  Downloading Flask_SQLAlchemy-2.3.0-py2.py3-none-any.whl
Collecting flask-restful
  Downloading Flask_RESTful-0.3.6-py2.py3-none-any.whl
Collecting itsdangerous>=0.21 (from flask)
  Downloading itsdangerous-0.24.tar.gz (46kB)
    100% |████████████████████████████████| 51kB 1.2MB/s 
Collecting Werkzeug>=0.7 (from flask)
  Downloading Werkzeug-0.12.2-py2.py3-none-any.whl (312kB)
    100% |████████████████████████████████| 317kB 1.1MB/s 
Collecting Jinja2>=2.4 (from flask)
  Downloading Jinja2-2.9.6-py2.py3-none-any.whl (340kB)
    100% |████████████████████████████████| 348kB 1.2MB/s 
Collecting click>=2.0 (from flask)
  Downloading click-6.7-py2.py3-none-any.whl (71kB)
    100% |████████████████████████████████| 71kB 1.3MB/s 
Collecting SQLAlchemy>=0.8.0 (from flask-sqlalchemy)
  Downloading SQLAlchemy-1.1.14.tar.gz (5.2MB)
    100% |████████████████████████████████| 5.2MB 228kB/s 
Collecting six>=1.3.0 (from flask-restful)
  Downloading six-1.11.0-py2.py3-none-any.whl
Collecting pytz (from flask-restful)
  Downloading pytz-2017.2-py2.py3-none-any.whl (484kB)
    100% |████████████████████████████████| 491kB 514kB/s 
Collecting aniso8601>=0.82 (from flask-restful)
  Downloading aniso8601-1.3.0.tar.gz (57kB)
    100% |████████████████████████████████| 61kB 791kB/s 
Collecting MarkupSafe>=0.23 (from Jinja2>=2.4->flask)
  Downloading MarkupSafe-1.0.tar.gz
Collecting python-dateutil (from aniso8601>=0.82->flask-restful)
  Downloading python_dateutil-2.6.1-py2.py3-none-any.whl (194kB)
    100% |████████████████████████████████| 194kB 3.9MB/s 
Building wheels for collected packages: flask-jsonpify, itsdangerous, SQLAlchemy, aniso8601, MarkupSafe
  Running setup.py bdist_wheel for flask-jsonpify ... done
  Stored in directory: /Users/wilsonmar/Library/Caches/pip/wheels/94/49/b1/376d04c3136a18e59dbda03d7c5dd5d242e1035372b6703076
  Running setup.py bdist_wheel for itsdangerous ... done
  Stored in directory: /Users/wilsonmar/Library/Caches/pip/wheels/fc/a8/66/24d655233c757e178d45dea2de22a04c6d92766abfb741129a
  Running setup.py bdist_wheel for SQLAlchemy ... done
  Stored in directory: /Users/wilsonmar/Library/Caches/pip/wheels/9f/cc/4b/d2645b72ec1ba3dd72d7ae384c431cf56bae03918f38c4e5e5
  Running setup.py bdist_wheel for aniso8601 ... done
  Stored in directory: /Users/wilsonmar/Library/Caches/pip/wheels/e3/6a/48/e4f2d89ff4146557cae20b77a9af7b4d09dd47b2004133cd7e
  Running setup.py bdist_wheel for MarkupSafe ... done
  Stored in directory: /Users/wilsonmar/Library/Caches/pip/wheels/88/a7/30/e39a54a87bcbe25308fa3ca64e8ddc75d9b3e5afa21ee32d57
Successfully built flask-jsonpify itsdangerous SQLAlchemy aniso8601 MarkupSafe
Installing collected packages: itsdangerous, Werkzeug, MarkupSafe, Jinja2, click, flask, flask-jsonpify, SQLAlchemy, flask-sqlalchemy, six, pytz, python-dateutil, aniso8601, flask-restful
Successfully installed Jinja2-2.9.6 MarkupSafe-1.0 SQLAlchemy-1.1.14 Werkzeug-0.12.2 aniso8601-1.3.0 click-6.7 flask-0.12.2 flask-jsonpify-1.5.0 flask-restful-0.3.6 flask-sqlalchemy-2.3.0 itsdangerous-0.24 python-dateutil-2.6.1 pytz-2017.2 six-1.11.0
   </pre>

0. Generate dependencies into a `requirements.txt` file:

   <tt><strong>
   pip freeze
   </strong></tt>

   The response:

   <pre>
aniso8601==1.3.0
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

   A description the Flask Framework is at <a target="_blank" href="http://flask.pocoo.org/">http://flask.pocoo.org</a> 

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

   <tt><strong>
   brew install sqlite3 -g
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

   <pre>
   SQLite version 3.16.0 2016-11-04 19:09:39
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

   <pre>
   albums          employees       invoices        playlists
   artists         genres          media_types     tracks
   customers       invoice_items   playlist_track
   </pre>

   PROTIP: These tables are a rather strang assortment that normally do not belong together. But it's there as technical samples.


   <a name="DBschema"></a>

   <a target="_blan" href="http://www.sqlitetutorial.net/download/sqlite-sample-database-diagram/?wpdmdl=96">
   <img alt="sqlite-sample-database-color-650x327-82797" width="650" heigh="327" src="https://user-images.githubusercontent.com/300046/31187951-48433100-a8e8-11e7-8cfb-6298fc1db760.jpg"></a>

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

0. Open another Terminal shell window so that the database remains running.
0. Change to the directory you are using:

   <tt><strong>
   cd ~/gits/wilsonmar/python-api-flask
   </strong></tt>

0. Ensure permissions: On a Mac:

   <tt><strong>
   chmod a+x server.py
   </strong></tt>

0. Initiate the Python web service:

   <tt><strong>
   python server.py
   </strong></tt>

   Alternately:

   <tt><strong>
   ./server.py
   </strong></tt>

   The response:

   <pre>
   * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
   </pre>

   TODO: Add HATEOS to respond to URL with no resource (folder) specified.


   ## Routes Walkthough

0. View the bottom of the program where code to invoke it is defined:

   <pre>
if __name__ == '__main__':
     app.run
   </pre>

   Alternately, `app.run(debug=True)`.

   Up from the bottom of the program are three `api.add_resource` statements that define <strong>routes</strong> the server processes.

   Note how <strong>modular</strong> each route is. This enables incremental addition of programming code capabilities over time.


   ### Get Tracks

0. In your browser, go to the first URL:

   <a target="_blank" href="http://127.0.0.1:5000/tracks">http://127.0.0.1:5000/tracks</a>

   Alternately, on the command line:

   <tt><strong>
   curl -i http://127.0.0.1:5000/tracks
   </strong></tt>

   The response shows details for each media track:

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

   This output is from a database query to obtain a result returned.

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

   <tt><strong>
   curl -i http://127.0.0.1:5000/employees
   </strong></tt>

   The response shows ids of all the employees in the pre-populated database. All 8 in the sample database:

   <pre>
   {"employees": [1, 2, 3, 4, 5, 6, 7, 8]}
   </pre>

   TODO: Now we change the code to list employee names instead of just their numbers.


   ### List specific employee

0. In your browser, go to the URL accessing the employees/item route:

   * <a target="_blank" href="http://127.0.0.1:5000/employees/8">http://127.0.0.1:5000/employees/8</a> 

   Alternately, on the command line:

   <tt><strong>
   curl -i http://127.0.0.1:5000/employees/8
   </strong></tt>

   The response shows details of employee whose employeeid is 8:

   <pre>
{
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

   <pre>
class Employees(Resource):
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

   <pre>
   def post(self):
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

   <tt><strong>
   curl -X POST http://127.0.0.1:5000/employees/9 -d '{"LastName":"Wayne", "FirstName":"Bruce"}' -H "Content-Type: application/json"
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


## f5-sdk for Python

Jason Rahm's Getting started with F5 Networks® BIG-IP® iControl® REST interface at <a target="_blank" href="https://github.com/F5Networks/f5-common-python">https://github.com/F5Networks/f5-common-python</a> with docs at <a target="_blank" href="https://f5-sdk.readthedocs.io/en/latest/">https://f5-sdk.readthedocs.io/en/latest/</a>

1. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-f5-common-python-sdk-27438"> f5-common-python SDK</a> 27-Jul-2017 

2. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-python-sdk-part-2-unnamed-resources-and-commands-27602">unnamed resources and commands</a> 24-Aug-2017

3. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-python-sdk-part-3-working-with-statistics-31387">working with statistics</a> 07-Jun-2018

4. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-python-sdk-part-4-working-with-request-parameters-31420#comment11117">working with request parameters</a> 14-Jun-2018

5. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-python-sdk-part-5-request-parameters-revisited-31509">request parameters revisited</a> 22-Jun-2018

6. <a target="_blank" href="https://devcentral.f5.com/articles/getting-started-with-the-python-sdk-part-6-transactions-31951?tag=devops">transactions</a> 13-Sep-2018



## Resources

This tutorial was originally described at 
https://www.codementor.io/sagaragarwal94/building-a-basic-restful-api-in-python-58k02xsiq

https://scotch.io/tutorials/build-a-restful-api-with-flask-the-tdd-way

http://python.apichecklist.com/  from Dan Bader.   


