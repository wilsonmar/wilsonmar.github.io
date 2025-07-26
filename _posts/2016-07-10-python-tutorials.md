---
layout: post
date: "2025-07-25"
lastchanges: "v044 + typos :2016-07-10-python-tutorials.md"
url: "https://wilsonmar.github.io/python-tutorials"
file: "python-tutorials"
title: "Python Tutorials"
excerpt: "Who will teach you to code in Python?"
tags: [python, apple, mac, setup]
image:
# pic white python logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622164/4230c848-0585-11e6-957b-be11147346e6.jpg
  credit:
  creditlink:
comments: true
created: "2016-07-10"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="{{ page.url }}"><img align="right" width="100" height="100" alt="{{ page.file }}.png" src="https://github.com/wilsonmar/wilsonmar.github.io/blob/master/images/qrcodes/{{ page.file }}.png?raw=true" /></a>
Here are the tutorials I've seen that teach Python programming.

See my tutorial for how I would teach introduction to Python
in the ChatGPT age that portends unemployed programmers.

{% include whatever.html %}

## Python Official documentation

<a target="_blank" href="https://docs.python.org/3/library/index.html">https://docs.python.org/3/library/index.html</a> is the official documentation
and is designed to overwhelm with all the details.


<a target="_blank" href="https://docs.python.org/3/tutorial/">https://docs.python.org/3/tutorial</a>
is the official tutorial by those who created the Python language.
That's the place to learn Python with <strong>no gaps</strong>.

Online environments: Google Colab, Menti
   * https://trinket.io/features/python3

<a target="_blank" href="https://docs.python.org/3/tutorial/controlflow.html#intermezzo-coding-style">4.10. Coding Style</a> PEP8: scanner
   * docstrings

<a target="_blank" href="https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator">3. Using Python as a calculator</a>:
   * Numbers, Text, Lists

<a target="_blank" href="https://docs.python.org/3/tutorial/stdlib2.html#decimal-floating-point-arithmetic">11.8 Decimal Floating-Point Arithmetic</a>:
   * <a target="_blank" href="https://docs.python.org/3/library/decimal.html#decimal.Decimal">decimal</a> data type from import decimal
   * c.getcontext()
   * c.traps[FloatOperation] = True
   * getcontext().prec = 36  # user-defined precision
   * Decimal(1) / Decimal(7) # notice the title case.
   * Decimal(2).sqrt()
   * round(.70 * 1.05,2)

<a target="_blank" href="https://docs.python.org/3/tutorial/controlflow.html">4. Control Flow Tools</a>:
   * if, for, range(), break, else, pass, match,
   * functions: parameters, arguments

<a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html">5. Data Structures</a>
   * Lists: <a target="_blank" href="https://docs.python.org/3/tutorial/stdlib2.html#tools-for-working-with-lists">11.7 Tools</a>
   * Stacks, Queues, List Comprehensions
   * del
   * Tuples and Sequences, Sets, Dictionaries
   * Looping, Conditions

<a target="_blank" href="https://docs.python.org/3/tutorial/venv.html">12. Virtual Environments and Packages</a>
   * pip CLI command vs. Conda (miniconda)

<a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html">6. Modules</a>
   * Search path, Standard modules, dir() function
   * Packages
   * <a target="_blank" href="https://docs.python.org/3/tutorial/stdlib.html">10. Standard Library</a>
   * <a target="_blank" href="https://docs.python.org/3/tutorial/stdlib2.html#logging">11.5 Logging</a>

<a target="_blank" href="https://docs.python.org/3/tutorial/inputoutput.html#">7. Input and Output</a>
   * Strings, format(),
   * Reading and writing files: json
   * <a target="_blank" href="https://docs.python.org/3/tutorial/stdlib2.html#output-formatting">11.1. Output Formatting</a>

<a target="_blank" href="https://docs.python.org/3/tutorial/errors.html">8. Errors and Exceptions</a>

<a target="_blank" href="https://docs.python.org/3/tutorial/classes.html">9. Classes</a>

Qt GUI programming

mobile app


## Python Foundation

Official FREE 42-hour online course to prepare for Python certification exams
2-course series:
* <a target="_blank" href="https://edube.org/study/pe1">Python Essentials - Part 1 (Basics)</a> for the
To prepare for the <a target="_blank" href="https://ums.edube.org/products/pcep-30-02-exam-and-practice-test-bundle">$71 with practice test</a>
<a target="_blank" href="https://pythoninstitute.org/pcep/">
PCEP-30-02: Certified Entry-Level Python Programmer</a> certification
   1. Introduction to Python and computer programming
   2. Data types, variables, basic input-output operations, and basic operators;
   3. Boolean values, conditional execution, loops, lists and list processing, logical and bitwise operations;
   4. Functions, tuples, dictionaries, exceptions, and data processing.

* <a target="_blank" href="https://edube.org/study/pe2">Python Essentials - Part 2 (Intermediate)</a> in a <a target="_blank" href="https://pythoninstitute.org/pcap/">
PCAP-31-03: Certified Associate in Python Programming</a> certification
   1. Modules, packages, and PIP
   2. Strings, String and List Methods, Exceptions
   3. Object-Oriented Programming

* <a target="_blank" href="https://pythoninstitute.org/pcpp1/">PCPP1 – Certified Professional in Python Programming</a> 1 (Exam PCPP-32-10x)

* <a target="_blank" href="https://pythoninstitute.org/pcpp2/">PCPP2 – Certified Professional in Python Programming</a> 2 (Exam PCPP-32-20x)


## Python For Aerospace

<a target="_blank" href="https://www.linkedin.com/in/angelina-tsuboi-322028211/">Angelina Tsuboi</a>
makes use of Google Colab in her
https://www.pythonforaerospace.com/
on
https://www.youtube.com/watch?v=V4jXVrUJsfM
Her code is at
https://github.com/ANG13T/python-for-aerospace

## Mind maps

<a target="_blank" href="https://user-images.githubusercontent.com/300046/76685523-223e3700-65da-11ea-8177-925d3041ef99.png"><img alt="PythonFundamentalsCourse-MindMap-1.png" width="1066" height="719" src="https://user-images.githubusercontent.com/300046/76685523-223e3700-65da-11ea-8177-925d3041ef99.png"></a>
from <a target="_blank" href="http://www.seleniumframework.com/python-course/">http://www.seleniumframework.com/python-course</a>


## Harvard CS50 on YouTube

There are several variations of Harvard's CS50 virtual class.
Offered by the energetic <a target="_blank" href="https://www.linkedin.com/in/malan/">Dr. David J. Malan</a>, offering a unique and immersive learning experience:

   * The CS50X overview
   * The CS50P - Introduction to Python
   <br /><br />

Within CS50X "CS50 2023 - Week 6 - Section" video:
   * <a target="_blank" href="https://www.youtube.com/watch?v=Y07zwrbq4Lc&t=1m19s">Strings</a> ("Goodnight Moon") using DALL-E. Unlike C code (which need data type), Python code indent.
   * <a target="_blank" href="https://www.youtube.com/watch?v=Y07zwrbq4Lc&t=1m19s">Loops</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=Y07zwrbq4Lc&t=1m19s">Dictionaries</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=Y07zwrbq4Lc&t=1m19s&t=55m36s">Libraries</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=Y07zwrbq4Lc&t=1m19s&t=56m39s">CSV files</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=Y07zwrbq4Lc&t=1m19s&t=57m12s">File I/O</a> using <tt>import csv</tt> and <tt>from csv import DictReader</tt> using <tt>reader</tt> iterable.
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&t=4m50s&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=11">set()</a> data structure automatically filters out duplicates
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=7m37s">global</a> declarations cannot be changed within functions. Avoid them.
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=23m40s">Constants</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=29m17s">Type Hints, mypy</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=47m38s">Docstrings</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=54m54s">argparse</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=1h10m22s">Unpacking</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=1h37m25s">map</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=1h46m37s">List Comprehensions</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=1h52m30s">filter</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=1h58m34s">Dictionary Comprehensions</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=2h05m20s">enumerate</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=6pgodt1mezg&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V&index=12&t=2h08m09s">Generators, Iterators, yield</a>
   <br /><br />

[This Harvard University's CS50P: Introduction to Programming with Python](https://youtu.be/nLRL_NcnK-4) - in a single 16-hour HD YouTube 2160p 4K video - is a comprehensive course tailored to teach Python programming.

https://7451111251303.gumroad.com/l/rgtfex

* Introduction https://cs50.dev/ explain highlighted code

* <a target="_blank" href="https://www.youtube.com/watch?v=nLRL_NcnK-4&t=4m48s">0. Functions, Variables</a> print()

   https://docs.python.org/3/library/functions.html

   ```
   print(*objects, sep=' ', end='\n', file=sys.stdout, flash=false)
   ```

1. <a target="_blank" href="https://www.youtube.com/watch?v=nLRL_NcnK-4&t=1h50m24s">Conditionals</a>
2. <a target="_blank" href="https://www.youtube.com/watch?v=nLRL_NcnK-4&t=2h46m23s">Loops</a>
3. <a target="_blank" href="https://www.youtube.com/watch?v=nLRL_NcnK-4&t=4h7m10s">Exceptions</a>
4. <a target="_blank" href="https://www.youtube.com/watch?v=nLRL_NcnK-4&t=4h51m45s">Libraries</a>
5. <a target="_blank" href="https://www.youtube.com/watch?v=nLRL_NcnK-4&t=6h9m15s">Unit Tests</a>
6. <a target="_blank" href="https://www.youtube.com/watch?v=nLRL_NcnK-4&t=7h0m22s">File I/O</a>
7. <a target="_blank" href="https://www.youtube.com/watch?v=nLRL_NcnK-4&t=8h32m32s">Regular Expressions</a>
   * <a target="_blank" href="https://wilsonmar.github.io/regex/">My notes on Regex</a>
8. <a target="_blank" href="https://www.youtube.com/watch?v=nLRL_NcnK-4&t=10h37m35s">Object-Oriented Programming</a>
9. <a target="_blank" href="https://www.youtube.com/watch?v=nLRL_NcnK-4&t=13h29m7s">Et Cetera</a>: sets to filter out duplicates.

## Python Foundations

From the organization who write certification exams on Python,
official FREE 42-hour online course to prepare for Python certification exams
2-course series:
* <a target="_blank" href="https://edube.org/study/pe1">Python Essentials - Part 1 (Basics)</a> for the
<a target="_blank" href="https://ums.edube.org/products/pcep-30-02-exam-and-practice-test-bundle">$71 with practice test</a>
PCEP-30-02: Certified Entry-Level Python Programmer certification
   1. Introduction to Python and computer programming
   2. Data types, variables, basic input-output operations, and basic operators;
   3. Boolean values, conditional execution, loops, lists and list processing, logical and bitwise operations;
   4. Functions, tuples, dictionaries, exceptions, and data processing.

* <a target="_blank" href="https://edube.org/study/pe2">Python Essentials - Part 2 (Intermediate)</a> in a
PCAP-31-03: Certified Associate in Python Programming  certification
   1. Modules, packages, and PIP
   2. Strings, String and List Methods, Exceptions
   3. Object-Oriented Programming


<hr />

## Coursera.com University Courses

https://www.coursera.org/learn/python-data-processing
Nanjing University
Data Processing Using Python

https://www.coursera.org/learn/3d-modeling-rhinoscript
University of Michigan
Design Computing: 3D Modeling in Rhinoceros with Python/Rhinoscript

https://www.coursera.org/learn/problem-solving-programming-video-games
University of Alberta
Problem Solving, Python Programming, and Video Games

https://www.coursera.org/learn/python-statistics-financial-analysis
Python and Statistics for Financial Analysis
Instructor: Xuhu Wan of Hong Kong

https://www.coursera.org/learn/bioinformatics
University of California San Diego
Biology Meets Programming: Bioinformatics for Beginners - Python

<hr />

## Edx.org University Courses

Each video course on edx.org are $149 if you want assignments graded and long-term access (otherwise FREE).

<a target="_blank" href="https://www.edx.org/learn/statistics/stanford-university-statistical-learning">"Statistical Learning" video course on edX.org</a> by <a target="_blank" href="https://online.stanford.edu/courses/sohs-ystatslearning-statistical-learning">Stanford University</a>
professors <a target="_blank" href="https://www.linkedin.com/in/trevor-hastie-a6a4735/">Trevor Hastie</a> and <a target="_blank" href="https://www.linkedin.com/in/rob-tibshirani-0143391/">Rob Tibshirani</a> and they are hilarious as a pair who have worked together for 30 years.

   * Talk to them on the forum at <a target="_blank" href="https://stats.stackexchange.com/questions/tagged/isl">stats.stackexchange.com</a>
   * For a 613-page pdf that accompanies the class, click on <a target="_blank" href="https://hastie.su.domains/ISLP/ISLP_website.pdf">the link</a> on their website: <a target="_blank" href="https://www.statlearning.com/">https://www.statlearning.com</a>
   <br /><br />


<hr />

## Free Tutorials about Python

<a target="_blank" href="https://data-flair.training/blogs/python-tutorials-home/">
Data-Flair</a> offers <a target="_blank" href="https://data-flair.training/blogs/python-projects-with-source-code/">projects</a>

Microsoft LEARN: <a target="_blank" href="https://docs.microsoft.com/en-us/learn/modules/intro-to-python/">1 hr text Introduction to Python</a>

<a target="_blank" href="https://www.fullstackpython.com/">Full Stack Python</a> is an open source book that explains technical concepts in plain language. Every layer is about code written in Python: Development Environments, Data, Web Development, Deployment, DevOps.

<a target="_blank" href="https://www.linkedin.com/learning/paths/become-a-python-developer">Become a Python Developer</a>

<a target="_blank" href="https://pyneng.readthedocs.io/en/latest/">Python Networking Engineering on ReadTheDocs</a>
by <a target="_blank" href="https://www.linkedin.com/in/nsamoylenko/">Natasha Samoylenko (in Ukraine)</a>
hosts <a target="_blank" href="https://github.com/natenka/pyneng-examples-exercises-en">exercises</a> and <a traget="_blank" href="https://github.com/natenka/pyneng-answers-en/tree/main/answers">answers</a> in GitHub.

https://www.reddit.com/r/Python/comments/1ls7vq/best_written_projects_on_python_github/

https://www.programiz.com/python-programming/examples

https://www.github.com/rg3/youtube-dl
Reading the code for youtube-dl turned me into a web-scraping machine. I picked up many good habits and tricks from following the code carefully.


### Most In-depth Python for Everyone

May 2019 <a target="_blank" href="https://www.py4e.com/">Python for Everybody (py4e.com)</a> free Python 3 <a target="_blank" href="https://www.py4e.com/book.php">book</a>, <a target="_blank" href="https://www.py4e.com/lectures3/">PowerPoint slides</a> and code in <a target="_blank" href="https://github.com/wilsonmar/py4e.git">GitHub</a> or in <a target="_blank" href="https://www.py4e.com/code3.zip">one zip file</a> from <a target="_blank" href="https://www.freecodecamp.org/">FreeCodeCamp.org</a> in <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI">a single YouTube video</a>, from Dr. Chuck Severance ( <a target="_blank" href="https://www.dr-chuck.com">dr-chuck.com</a>) at the <a target="_blank" href="https://open.umich.edu/">University of Michigan School of Information</a>.

* <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI">Introduction</a>

1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=12m21s">Why Program?</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=56m56s">Variables, expressions, and statements</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=1h26m07s">Conditional Execution</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=1h53m00s">Functions</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=2h15m32s">Loops and Iterations</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=2h58m51s">Strings</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=3h27m33s">Files</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=3h48m42s">Lists</a> (Data)
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=4h29m02s">Dictionaries</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=5h23m07s">Tuples</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=5h55m19s">Regular Expressions</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=6h22m41s">Network Programming</a> (Networked Programs)
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=7h24m11s">Using Web Services</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=8h48m33s">Object-Oriented Programming</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=9h21m22s">Databases</a>
1. <a target="_blank" href="https://www.youtube.com/watch?v=8DvywoWv6fI&t=11h42m35s">Data Visualization?</a> (using D3.js)

## AWS

AWS has Boto3 library.
https://www.youtube.com/watch?v=SmilJDG4B_8


## Azure

Among [CBTNuggets training for Azure](https://www.cbtnuggets.com/it-training/microsoft-azure) is
https://www.cbtnuggets.com/blog/new-skills/new-training-python3-with-the-azure-python-sdk
5 videos in 26 minutes of training created in May 2020
by Michael Levan

180+ Azure Python SDK libraries are open-sourced at
https://azure.github.io/azure-sdk/releases/latest/python.html
to provision, manage and use Azure resources from within your Python applications, whether they reside on the cloud or on-premise.

The Python packages from pipy and conda from
https://aka.ms/azsdk/python/docs
https://github.com/azure/azure-sdk-for-python/

There are two distinct types of libraries in the SDK:
* management libraries relate to the management plane of your infrastructure to provision and manage Azure resources
* client libraries relate to the data plane of your infrastructure to connect and use resources.

When using the SDK, develop your applications locally, then deploy them to the cloud. To configure your local development environment, install necessary components, such as Python and the Azure CLI, then configure authentication to the Azure resources to access.

[Authenticating to Azure with Python azcli](https://www.youtube.com/watch?v=we1pcMRQwD8)

Listing Virtual Machines with Python

Creating a Key Vault with Python

https://www.youtube.com/watch?v=xWLdzQNDrTg
Introduction to Python SDK Azure: How to get list of resource groups and resources using Python
https://github.com/wilsonmar/python-sdk-azure/blob/main/resourcegroup.py


https://www.youtube.com/watch?v=wAIZn6RDSJg


[Jie Jenn](https://www.linkedin.com/in/jiejenn/) has produced a [vast series of videos spanning Python, SQL, Microsoft, Google, AI, Salesforce](https://www.youtube.com/@jiejenn/playlists)


## Google

<a target="_blank" href="https://developers.google.com/edu/python/">
https://developers.google.com/edu/python</a><br />
Google's Python Class from 2010 is still relevant.
It's taught by <a target="_blank" href="https://cs.stanford.edu/people/nick/">
Stanford CS lecturer</a>
Nick Parlante.

It has videos that
covers strings, lists, sorting, dicts, files,
regular expressions, utilities.
Support materials at<br />
<a target="_blank" href="https://developers.google.com/edu/python/">
https://developers.google.com/edu/python</a>


### Udacity video courses

<a target="_blank" href="https://www.udacity.com/course/programming-foundations-with-python--ud036">
Programming Foundations</a>
6 week course
include object-oriented programming


### Steven Thurlow

<a target="_blank" href="http://sthurlow.com/python/">
http://sthurlow.com/python/</a>

0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   Installing Python</a>
0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   Very Simple Programs</a>
0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   Variables, and Programs in a Script</a>
0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   Loops and Conditionals</a>
0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   Functions</a>
0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   Tuples, Lists, and Dictionaries</a>
0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   The for loop</a>
0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   Classes</a>
0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   Importing Modules</a>
0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   File I/O</a>
0. <a target="_blank" href="http://sthurlow.com/python/lesson01/">
   Error Handling</a>

<hr />

## Universities:

### MIT

<a target="_blank" href="https://www.youtube.com/watch?v=xAcTmDO6NTI&list=PLUl4u3cNGP62A-ynp6v6-LGBCzeH3VAQB">
YouTube Playlist</a>:
<a target="_blank" href="https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/download/">
MIT 6.100L Introduction to CS and Programming using Python, Fall 2022</a>
by Ana Bell using Jupyter

   1. Introduction to CS and Programming Using Python ***
   2. Strings, Input/Output, and Branching ***
   3. Iteration ***
   4. Loops over Strings, Guess-and-Check, and Binary ***
   5. Floats and Approximation Methods ***
   6. Bisection Search (FIXED) ***
   7. Decomposition, Abstraction, and Functions ***
   8. Functions as Objects ***
   9. Lambda Functions, Tuples, and Lists ***
   10. Lists and Mutability (FIXED) ***
   11. Aliasing and Cloning

   12. List Comprehension, Functions as Objects, Testing, and Debugging (FIXED) ***
   13. Exceptions and Assertions ***
   14. Dictionaries ***
   15. Recursion
   16. Recursion on Non-numerics ***

   17. Python Classes
   18. More Python Class Methods
   19. Inheritance
   20. Fitness Tracker Object-Oriented Programming Example

   21. Timing Programs and Counting Operations
   22. Big Oh and Theta ***
   23. Complexity Classes Examples
   24. Sorting Algorithms ***
   25. Plotting
   26. List Access, Hashing, Simulations, and Wrap-Up


Previously, <a target="_blank" href="https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-9">
MIT's Introduction to Computer Science using Python course 600.1.X</a> Aug 10, 2016 (free or $75 certificate) makes use of Windows and MacOS/Linux. Its major topics:

   * <a target="_blank" href="https://www.youtube.com/watch?v=Xwf4DkNlIPA">Welcome</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=4MbDZho3pIY">Knowledge</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=gJKQ3eNAxG8">Machine Architecture</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=9oYFH4OmYDY">Aspects of Languages</a>
   * A Notion of computation
   * The Python programming language
   * Some simple algorithms
   * Testing and debugging
   * An informal introduction to algorithmic complexity
   * Data structures
   <br /><br />

https://ocw.mit.edu/courses/6-189-a-gentle-introduction-to-programming-using-python-january-iap-2011/
MIT OpenCourseWare - A Gentle Introduction to Programming Using Python

https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/
MIT OpenCourseWare - Intro to CS & Programming Using Python


### CMU

<a target="_blank" href="https://academy.cs.cmu.edu/">Carnagie Mellon University</a>'s (in Pittsburg)
Computer Science Academy has free courses that enhances code.org curriculum:

* <a target="_blank" href="https://academy.cs.cmu.edu/course-info#CS1">"Exploring Programming with Python"</a> is the Lightweight version of CS1 - same interactive fun as CS1, smaller curriculum.  4 UNITS for Out of school programs, Middle school, Camps

* <a target="_blank" href="https://academy.cs.cmu.edu/course-info#CS0">"CS1: Introduction to Programming with Python"</a> is CMU's Flagship Course - A robust introduction to programming through graphics and animations. 12 UNITS for 8th + 9th grade, High school with No prior CS Academy experience required.

* <a target="_blank" href="https://academy.cs.cmu.edu/course-info#CPCS">"15-111: College Programming and Computer Science"</a> - 4 University Credits for a full-year honors-level course in programming and computer science. For Advanced students with math skills and at least one prior programming course required. For those looking for college credit, available with $200 exam completion. <a target="_blank" href="https://drive.google.com/file/d/1jU1g_bLHz_b1joTzNUXP7yuwdvd7c_19/view">PDF</a>

+ <a target="_blank" href="http://www.youtube.com/@MrAdler-zj4qs">Mr Adler Youtube Channel</a>


### CISCO Network Academy

- <a target="_blank" href="https://skillsforall.com/course/python-essentials-1?courseLang=en-US&instance_id=49e08975-f089-4397-9d92-5bbf9f5b84be">Python Essentials 1</a>
- <a target="_blank" href="https://skillsforall.com/course/python-essentials-2?courseLang=en-US&instance_id=fac757ce-029f-451b-b64f-f1b21e8abb97">
Python Essentials 2 Course</a>

### Replit

https://firewalledreplit.com/learn/100-days-of-python/hub?enroll=success
Tutorial - Replit's "100 days of python"

https://firewalledreplit.com/@JudsonBirkel/Creating-Art-Using-Turtle-Python-Tutorial-Challenge
Tutorial - Replit's "Creating Art Using Turtle Python"

https://firewalledreplit.com/learn/mindjoy-python-turtle
Tutorial - Replit's "Code Art - Master the Basics" (uses Turtle Python)

https://firewalledreplit.com/@JudsonBirkel/Learn-steganography-in-Python-Tutorial#main.py
Tutorial - Replit's "Learn Stenography in Python"


<a name="EarSketch"></a>

## EarSketch

The EarSketch platform was created by Georgia Tech to use Python to program sound and music.

1. CLick "Create/Reset Account" at:

   https://earsketch.gatech.edu/earsketch2/#

1. Sign up

   https://www.teachers.earsketch.org/

1. Look at the CSP curriculum for lesson plans, slides, Activities worksheets, MiniTasks, Challenges, Summative Assessments, quizzes, mid-unit assessment, final unit assessment

   https://www.teachers.earsketch.org/computer-science-principles

   1. Fundamentals
   2. Abstractions
   3. Structures


## Others

https://www.101computing.net/category/python-beginner/
Challenges - 101 Computing Python Beginner

https://wiingy.com/learn/python/
Wiingy - Wiingy Learn Python

https://runestone.academy/ns/books/published/fopp/index.html
Runestone - Foundations of Python Programming Course

https://developers.google.com/edu/python
Curriculum - Google For Education - Python

<hr />

## Paid Tutorials about Python

<a target="_blank" href="https://learnpythonthehardway.org/book/">Learn Python the Hard Way</a> is $29 from ZED.

<a target="_blank" href="https://realpython.com/#course-packages">
realpython.com</a> has a $60 course package.

Cornell has several certificates on Python:

   * https://ecornell.cornell.edu/certificates/technology/python-programming/ 6 courses for $2,520
   * https://ecornell.cornell.edu/certificates/data-science/data-visualization-with-python/
   * https://ecornell.cornell.edu/certificates/data-science/python-for-data-science/
   * https://ecornell.cornell.edu/certificates/data-science/python-360/ 15 courses for $5,530


### Datacamp

<a target="_blank" href="https://www.datacamp.com/courses">
https://www.datacamp.com/courses</a>
provides an interactive playground with videos.
The beginner class is free,
with intermediate classes at $29 a month.


### Pluralsight video courses

Robert Smallshire (@robsmallshire, rob@ixty-north.com)
and
Austin Bingham (@Austin_Bingham, austin@sixty-north.com)

* <a target="_blank" href="https://app.pluralsight.com/library/courses/python-fundamentals/">
   Python Fundamentals Aug 20, 2013 5h 4m</a>

* <a target="_blank" href="https://app.pluralsight.com/library/courses/python-beyond-basics/">
   Python – Beyond the Basics
   Jul 17, 2014 7h 22m</a>

<a target="_blank" href="https://app.pluralsight.com/library/courses/unit-testing-python">
Unit Testing with Python
Oct 31, 2013 2h 58m</a>
by Emily Bache

<a target="_blank" href="https://app.pluralsight.com/library/courses/machine-learning-algorithms">
How to Think About Machine Learning Algorithms
Sep 27, 2016 3h 8m</a>
by Swetha Kolalapudi
of loonycorn.com


<a target="_blank" href="https://app.pluralsight.com/library/courses/play-by-play-zed-shaw/">
Play by Play: Building a Python Code Stats Tool
Apr 28, 2011 1h 51m</a>
by Zed Shaw
and
Geoffrey Grosenbach

<a target="_blank" href="https://app.pluralsight.com/library/courses/dota-2-workshop-getting-started-2486">
Getting Started in the Dota 2 Workshop</a>
Jul 07, 2016 4h 34m
by Dan Cox

<a target="_blank" href="https://app.pluralsight.com/library/courses/python-understanding-machine-learning">
Understanding Machine Learning with Python
May 17, 2016 1h 54m</a>
by Jerry Kurata
(@jerrykur insteptech.com)

<a target="_blank" href="https://app.pluralsight.com/library/courses/python-design-patterns">
Design Patterns with Python
Oct 13, 2016 1h 57m</a>
by Gerald Britton

<a target="_blank" href="https://app.pluralsight.com/library/courses/python-jinja-templating">
Hands on with Python Jinja Templating
Dec 29, 2014 1h 30m</a>
by Brett Romero

<a target="_blank" href="https://app.pluralsight.com/library/courses/python-desktop-application-development">
Python Desktop Application Development
Sep 03, 2014 1h 42m</a>
by Bo Milanovich

<a target="_blank" href="https://app.pluralsight.com/library/courses/full-stack-web-development-python-web2py">
Full Stack Web Development with Python (WEB2PY)</a>
by Terry Toy

<a target="_blank" href="https://app.pluralsight.com/library/courses/python-developers-toolkit">
The Python Developer's Toolkit
Jul 17, 20142h 19m</a>
by Reindert-Jan Ekker

<a target="_blank" href="https://app.pluralsight.com/library/courses/python-desktop-application-development-design-part2/">
Python Desktop Application Development: Part 2 - Design
Oct 09, 20142h 17m</a>
by Bo Milanovich

<a target="_blank" href="https://app.pluralsight.com/library/courses/procedural-rigging-python-maya-2283">
Procedural Rigging with Python in Maya
Advanced - Sep 22, 2015 7h 47m</a>
by Jakub Krompolc

<a target="_blank" href="https://app.pluralsight.com/library/courses/developing-python-tools-nuke-2219">
Developing Python Tools in NUKE Advanced Aug 15, 2015 2h 38m</a>
by Simon Jokuschies

<a target="_blank" href="https://app.pluralsight.com/library/courses/introduction-python-scripting-nuke-820">
Introduction to Python Scripting in NUKE - Intermediate - Sep 30, 2012 2h 53m</a>
by Chris Glick

<a target="_blank" href="https://app.pluralsight.com/library/courses/nuke-developing-gui-based-tools-production-2549">
Developing GUI-based Tools for Production in NUKE
Sep 13, 2016 1h 49m</a>
by Simon Jokuschies

<a target="_blank" href="https://app.pluralsight.com/library/courses/getting-started-python-scripting-maya-1283">
Getting Started with Python Scripting in Maya
- Beginner Sep 08, 2013 1h 42m</a>
by Delano Athias

<a target="_blank" href="https://app.pluralsight.com/library/courses/game-programming-python-pygame">
Game Programming with Python and PyGame
Dec 17, 2013 4h 18m</a>
by Filip Ekberg

### Dan Bader:

   * <a target="_blank" href="https://realpython.com/">Real Python</a>

   * <a target="_blank" href="https://www.amazon.com/Python-Tricks-Buffet-Awesome-Features-ebook/dp/B0785Q7GSY/">BOOK</a> Python Tricks:  A Buffet of Awesome Python Features

   * Dan Bader has emails and courses on Python: <a target="_blank" href="https://www.youtube.com/watch?v=p-89r5QvQvQ" title="Aug 23, 2017">VIDEO: What Python Projects Should I Build to Get a Job?</a>

   1. Tensorflow (for machine learning)
   2. Crawling (spider based projects, using Beautiful Soup)
   3. Database handling (firebase, Mysql, Neo4j etc.)
   <br /><br />

   * Object-oriented programming with classes and their methods
   * <a href="#Cloud">Cloud Python</a>

## O'Reilly

<a target="_blank" href="https://www.amazon.com/Python-DevOps-Ruthlessly-Effective-Automation-dp-149205769X/dp/149205769X/">
Python for DevOps: Learn Ruthlessly Effective Automation 1st Edition</a>
(by Noah Gift, Kennedy Behrman, Alfredo Deza, Grig Gheorghiu)
shows you how to use Python for everyday Linux systems administration tasks with today’s most useful DevOps tools, including Docker, Kubernetes, and Terraform.


## Tutorials

* <a target="_blank" href="https://www.cmi.ac.in/~madhavan/courses/prog2-2012/docs/diveintopython3/index.html">Dive Into Python</a> - a survey of Python syntax, datatypes, etc.

* <a target="_blank" href="http://greenteapress.com/wp/think-python-2e/">Think Python</a> by Allen Downey - a good general overview of the Python language. Includes exercises.

* <a target="_blank" href="https://docs.python.org/3.0/reference/lexical_analysis.html#id8">Reserved Keywords</a> in Python - don't use these as variable names

* <a target="_blank" href="https://www.python.org/dev/peps/pep-0008/">PEP 8</a> - Style Guide for Python Code - learn what is good and bad style in Python

* <a target="_blank" href="https://checkio.org/">CheckIO</a> - learn Python by exploring a game world

* <a target="_blank" href="https://inventwithpython.com/">Invent with Python</a> - develop your Python skills by making games or hacking ciphers


* <a target="_blank" href="https://www.codecademy.com/learn/python">Codecademy.com</a> - (note: for Python 2) learn Python by building web apps and manipulating data; interactive tutorial sequence

* <a target="_blank" href="http://www.pythontutor.com/">Python Tutor - interactive tutorial sequence of exercises


* <a target="_blank" href="http://mitxcsjourney.blogspot.com/">Blog with tutorials - created by a TA of the EdX community

### GraderThan.com

By Harris Williams

Before attending <a target="_blank" href="https://graderthan.com/event-recording">these webinars</a>, create your Grader Than Account and Python Based Grader Than Workspace.

1. <a target="_blank" href="https://graderthan.com/event-recording/intro-python-01-23_04_06">Basics (April 6, 2023)</a> 33:45 referencing <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/main/greaterthan/010_variables.ipynb">010_variables.ipynb</a> (Jupyter Notebook)
   1. Assign data to variables.
   1. Print text to the console.
   1. Develop an application that accepts user input and assigns it to a variable.
   <br /><br />
2. <a target="_blank" href="https://graderthan.com/event-recording/intro-python-02-23_04_13">If Statements (April 13, 2023)</a> referencing 020_logic.ipynb
   1. Create logical expressions.
   2. Use logical expressions in if-statements to branch your code.
   3. Use elif/else statements to complete your logical blocks.
   <br /><br />
3. <a target="_blank" href="https://graderthan.com/event-recording/intro-python-03-23_04_20">Loops (April 20, 2023)</a> referencing 03_loops_notebooks.zip
   1. Create a for-loop.
   2. Create a while-loop.
   3. Use loops to create a Read Event Print Loop (REPL).
   <br /><br />
4. <a target="_blank" href="https://graderthan.com/event-recording/intro-python-04-23_04_27">Functions (April 27, 2023)</a> referencing 040_functions.ipynb
   1. Write your own function.
   2. Specify default functional arguments.
   3. Call your own functions.
   <br /><br />
5. <a target="_blank" href="https://graderthan.com/event-recording/intro-python-05-23_05_04">Data Structures (May 4, 2023)</a> referencing data_structures_notebooks.zip containing 050_lists_and_tuples.ipynb, 051_sets.ipynb, 052_dictionaries.ipynb
   1. Work with tuples
   2. Work with lists
   3. Work with dictionaries
   <br /><br />
6. <a target="_blank" href="https://graderthan.com/event-recording/intro-python-06-23_05_10">Text File IO (May 10, 2023)</a> referencing notebooks.zip containing 060_writing_files.ipynb & 061_reading_files.ipynb
   1. Understand basic file system concepts
   2. Write text to a file
   3. Read text from a file
   <br /><br />


### OReilly.com

* <a target="_blank" href="https://learning.oreilly.com/library/view/python-for-geeks/9781801070119/">Packt BOOK: Python for Geeks</a> October 2021 references
<a target="_blank" href="https://github.com/PacktPublishing/Python-for-Geeks">https://github.com/PacktPublishing/Python-for-Geeks</a>

* <a target="_blank" href="http://shop.oreilly.com/product/0636920032519.do">BOOK: Fluent Python</a> August 2015. By Luciano Ramalho.



## Brilliant.com

https://brilliant.org/courses/programming-python/

https://brilliant.org/courses/python-next-steps/


## YouTube

https://www.youtube.com/watch?v=eWRfhZUzrAc
Python for Beginners – Full Course [Programming Tutorial]
on FreeCodeCamp.org

based on https://www.freecodecamp.org/news/the-python-handbook/
by Flavio Copes

Rock, Paper, Scissors Intro Project
*  (0:03:11) RPS - Variables and Functions
*  (0:09:07) RPS - Calling Functions
*  (0:12:31) RPS - Dictionaries
*  (0:15:28) RPS - User Input
*  (0:16:55) RPS - Libraries, Lists, Methods
*  (0:20:45) RPS - Function Arguments
*  (0:22:33) RPS - If Statements
*  (0:25:40) RPS - Concatenating Strings
*  (0:27:13) RPS - f-strings
*  (0:30:26) RPS - Else and Elif Statements
*  (0:33:37) RPS - Refactoring and Nested If
*  (0:38:37) RPS - Accessing Dictionary Values
*  (0:41:55) RPS - Testing Game

Fundamentals of Python
*  (0:43:52) Setup Python Locally
*  (0:47:47) Creating New Repl
*  (0:48:45) Variables
*  (0:51:21) Expressions and Statements
*  (0:52:38) Comments
*  (0:54:23) Data Types
*  (1:00:16) Operators
*  (1:00:44) Arithmetic Operators
*  (1:03:52) Comparison Operators
*  (1:05:13) Boolean Operators
*  (1:07:26) Bitwise Operators
*  (1:07:42) is & in Operators
*  (1:08:21) Ternary Operator
*  (1:09:40) Strings
*  (1:12:36) String Methods
*  (1:16:41) Escaping Characters
*  (1:19:23) String Characters & Slicing
*  (1:21:45) Booleans
*  (1:26:07) Number Data Types
*  (1:28:19) Built-in Functions
*  (1:29:50) Enums
*  (1:32:51) User Input
*  (1:34:39) Control Statements
*  (1:36:48) Lists
*  (1:46:21) Sorting Lists
*  (1:49:57) Tuples
*  (1:53:49) Dictionaries
*  (2:01:45) Sets
*  (2:06:10) Functions
*  (2:16:57) Variable Scope
*  (2:18:35) Nested Functions
*  (2:21:37) Closures
*  (2:22:59) Objects
*  (2:26:27) Loops
*  (2:32:01) Break and Continue
*  (2:33:02) Classes
*  (2:39:12) Modules
*  (2:45:55) Arguments from Command Line
*  (2:52:42) Lambda Functions
*  (2:54:51) Map, Filter, Reduce
*  (3:02:41) Recursion
*  (3:04:42) Decorators
*  (3:06:45) Docstrings
*  (3:09:54) Annotations
*  (3:11:30) Exceptions
*  (3:17:09) With
*  (3:18:26) Installing Packages with pip
*  (3:21:39) List Compression
*  (3:23:09) Polymorphism
*  (3:24:23) Operator Overloading

Blackjack Card Game Project
*  (3:26:58) Blackjack - Beginning
*  (3:50:13) Blackjack - Deck Class
*  (3:58:45) Blackjack - Card Class
*  (4:03:25) Blackjack - Hand Class
*  (4:21:13) Blackjack - Game Class
*  (4:37:04) Blackjack - Testing



## Challenges

* <a target="_blank" href="https://www.hackerrank.com/domains/python">Hackerrank.com practice domain for Python</a>

* <a target="_blank" href="https://projecteuler.net/">Project Euler</a> - programming challenges sorted by increasing difficulty

* <a target="_blank" href="https://codecombat.com/">CodeCombat.com</a> - "The most engaging way to learn computer science"

* <a target="_blank" href="http://www.pythonchallenge.com/">Python Challenge</a> - a series of puzzles you can try to test your Python abilities

* <a target="_blank" href="http://codingbat.com/python">Coding Bat</a> - problems you can solve within an online interpreter (Python and Java)

* <a target="_blank" href="https://www.codewars.com/?language=python">Codewars</a> presents code (katas) that does not execute, to which you fix to run. This improves your skills by training on real code challenges.

* <a target="_blank" href="https://github.com/abhat222/Data-Science--Cheat-Sheet/tree/master/Python">
Cheat Sheets on Python</a>

<a target="_blank" href="https://github.com/google/teknowledge">https://github.com/google/teknowledge</a>
A basic CS curriculum to teach high schoolers coding in Python. Developed by Googlers on their 20% time with Carnagie Mellon https://academy.cs.cmu.edu/about  in Pittsburg over 10 weeks in 2018. http://teknowledge.xyz


<a target="_blank" href="https://github.com/google/mobly">https://github.com/google/mobly</a>
a Python-based test framework that specializes in supporting test cases that require multiple devices, complex environments, or custom hardware setups.

## Secure coding

CodeBashing.com from Checkmarx, developer of CxSAST, which scans for security vulnerabilities in code, start a tutorial at <a target="_blank" href="https://www.checkmarx.com/supported-coding-languages/python-security-vulnerabilities-and-language-overview/">https://www.checkmarx.com/supported-coding-languages/python-security-vulnerabilities-and-language-overview</a>
are gamified lessons covering vulnerable coding and how to mitigate:

   * <a target="_blank" href="https://free.codebashing.com/courses/python/lessons/sql_injection">SQL Injections (SQLi)</a>
   * XSS (Cross Site Scripting)
   * Cross Site Request Forgery,

   * LDAP Injections
   * Command Injections
   * XPath Injections

FreeCodeCamp.org


## Community

* <a target="_blank" href="https://www.reddit.com/r/learnpython/">LearnPython SubReddit</a>

* <a target="_blank" href="https://stackoverflow.com/questions/tagged/python">Stack Overflow questions and answers tagged "Python"</a>

* <a target="_blank" href="https://kodekloud.com/community/c/python/18">Q&A participants</a>


## Desktop apps

pyz

py2app/py2exe

pyInstaller



## API

From among <a target="_blank" href="https://www.freecodecamp.org/learn/back-end-development-and-apis/#back-end-development-and-apis-projects">
FreeCodeCamp.org Python Back-end projects</a> is <a target="_blank" href="https://www.youtube.com/watch?v=WXsD0ZgxjRw">3-hr "APIs for Beginners 2023 - How to use an API "</a>
by Craig Dennis.

"Swagger" refers to tools open-sourced by Tony Tam in 2011,  but then licensed from SmartBear.

Since 2016, at Swagger 3.0, "OpenAPI" refers to the API specification defined & maintained by the OpenAPI initiative.

SmartBear's licensed tools include SwaggerHub, Inspector.

SmartBear's free tools include SwaggerUI, Swagger Editor, Swagger Codegen.


## Stephen Gruppetta

https://www.linkedin.com/in/stephengruppetta/
He lives in Harpenden, England, United Kingdom
stephengruppetta.com 

$200 one-time
ThePythonCodingPlace.com

The Python Coding Book is "a programming book that feels like a conversation with a friend who's here to show you the ropes".

His <strong>object-oriented programming</strong> "Magical Tour" makes use of Hogwarts fandom "School of Codecraft and Algorithmancy"

1. List houses.append objects, print(type(houses)), 
2. Creating classes
3. Methods
4. Interaction between classes
5. Inheritance
6. Special Methods (Dunder methods)

<hr />

## References

https://dev.to/sewinter/25-best-github-repos-for-python-developers-5419?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email

https://github.com/GeekTrainer/Introduction-Programming-Python
by Christopher Harrison, Program Manager at Microsoft Cloud & AI.

[Learn Python With This ONE Project! by Tech With Tim](https://www.youtube.com/watch?v=th4OBktqK1I)

<a target="_blank" href="https://kodekloud.com/community/c/python/18">KodeKloud's Q&A about the Python Entry Level Programmer Certification and Certified Associate in Python Programming</a>

NVIDIA's Fundamentals of Accelerated Computing with CUDA Python
   * <a target="_blank href="https://courses.nvidia.com/courses/course-v1:DLI+C-AC-02+V1">$90</a> self-paced
   * <a target="_blank" href="https://www.nvidia.com/en-us/training/instructor-led-workshops/fundamentals-of-accelerated-computing-with-cuda-python/">DLI Instructor-Led</a> when scheduled
   * During conference on March 19, 2024.
   <br /><br />

The class covers use of <a target="_blank" href="https://numba.pydata.org/">Numba</a> — the just-in-time, type-specializing Python in Jupyter to accelerate Python code by using NumPy <a target="_blank" href="https://en.wikipedia.org/wiki/CUDA">CUDA</a> universal functions (ufuncs) using GPU kernel  memory management techniques, all within on massively parallel NVIDIA <strong>GPUs</strong>.

One student's <a target="_blank" href="https://github.com/AydinAlptug/Fundamentals-of-Accelerated-Computing-with-CUDA-Python">course GitHub:<br />
<img src="https://github.com/AydinAlptug/Fundamentals-of-Accelerated-Computing-with-CUDA-Python/blob/main/Introduction%20to%20CUDA%20Python%20with%20Numba/images/numba_flowchart.png?raw=true"></a>
   * https://numba.readthedocs.io/en/stable/cuda/index.html
   * https://www.kaggle.com/discussions/general/274291
   <br /><br />

Structure
Module 1 -- Introduction to CUDA Python with Numba [<a target="_blank" href="https://www.kaggle.com/harshwalia/1-introduction-to-cuda-python-with-numba">Notebook</a>]
   * Begin working with the Numba compiler and CUDA programming in Python.
   * Use Numba decorators to GPU-accelerate numerical Python functions.
   * Optimize host-to-device and device-to-host memory transfers.
   <br /><br />
Module 2 -- Custom CUDA Kernels in Python with Numba [<a target="_blank" href="https://www.kaggle.com/harshwalia/2-custom-cuda-kernels-in-python-with-numba">Notebook</a>]
   * Learn CUDA’s parallel thread hierarchy and how to extend parallel program possibilities.
   * Launch massively parallel custom CUDA kernels on the GPU.
   * Utilize CUDA atomic operations to avoid race conditions during parallel execution.
   <br /><br />
Module 3 -- Multidimensional Grids, and Shared Memory for CUDA Python with Numba [<a target="_blank" href="https://www.kaggle.com/harshwalia/3-multidimensional-grids-shared-memory-for-cuda">Notebook</a>]
   * Learn multidimensional grid creation and how to work in parallel on 2D matrices.
   * Leverage on-device shared memory to promote memory coalescing while reshaping 2D matrices.
   <br /><br />

<tt>@JIT</tt> notes that <a target="_blank" href="http://numba.pydata.org/">Numba</a> is a <strong>Just-In-Time</strong> function.

https://www.nvidia.com/en-us/training/instructor-led-workshops/fundamentals-of-accelerated-computing-with-cuda-python/


https://learning.oreilly.com/library/view/learn-python-the/9780138270711/
Learn Python the Hard Way: A Deceptively Simple Introduction to the Terrifyingly Beautiful World of Computers and Data Science, 5th Edition Feb 2024 By Zed A. Shaw

https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-directory-file-acl-python?tabs=azure-ad
Use Python to manage directories and files in Azure Data Lake Storage Gen2

<a target="_blank" href="https://learning.oreilly.com/course/benchmarking-profiling-and/9781484267769/">
1h 32m VIDEO: "Benchmarking, Profiling, and Optimizing Your Python Code: Easily Identify Bottlenecks and Efficiently Speed Up Your Python Code" by Coen de Groot
It shows how to use the Python timeit for micro benchmarks, pytest.

"Parseltongue is the language of serpents and those who can converse with them.
An individual who can speak Parseltongue is known as a Parselmouth.
It is a very uncommon skill, and may be hereditary.
Nearly all known Parselmouths are descended from Salazar Slytherin.
-- http://harrypotter.wikia.com/wiki/Parseltongue

https://github.com/gruns/icecream to never use print() to debug again

https://www.youtube.com/watch?v=WbNNESIxJnY&t=35s
https://github.com/codingforentrepreneurs/SaaS-Foundations
Django
https://www.codingforentrepreneurs.com/blog/deploy-django-on-railway-with-this-dockerfile/
Neon database

https://www.udacity.com/enrollment/ud036
Programming Foundations with Python

https://pynative.com/python/
provides exercises and quizzes

https://www.w3schools.com/python/default.asp
tutorial
https://www.w3schools.com/python/python_reference.asp


https://app.dataquest.io/c/114/m/605/python-programming/1/learning-data-science?path=2&slug=data-scientist&version=1
https://app.dataquest.io/learning/path/data-scientist/v2-5/
Data Scientist in Python (38 courses)

   1. Python Introduction
   2. Data Analysis and Visualization
   3. Data Cleaning
   4. The Command Line
   5. Working with Data Sources Using SQL
   6. APIs and Web Scraping in Python
   7. Probability and Statistics
   8. Machine Learning In Python
   9. Deep Learning in Python
   10. Advanced Topics in Data Science

<a target="_blank" href="https://www.youtube.com/watch?v=eWRfhZUzrAc">VIDEO</a>
4h40m "Python for Beginners – Full Course [Programming Tutorial]"
by <a target="_blank" href="https://www.linkedin.com/in/beau-carnes/">Beau Carnes</a> at freecodecamp.
<a target="_blank" href="https://www.freecodecamp.org/news/the-python-handbook/">
"The Python Handbook – Learn Python for Beginners"</a>
by Flavio Copes.
Learn with just a browser using replit.com at https://join.replit.com/python-students
Sample coding for:
💻 Rock, Paper, Scissors
💻 Blackjack



No longer available: <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/413">
The video course at LinuxAcademy</a> by Keith Thompson references
includes a practice exam.


## Pragmatic Works Training

https://learning.pragmaticworkstraining.com/course/intro_to_python
<a target="_blank" href="https://www.linkedin.com/in/ben-evans/">Ben Evans</a>
shows use of PyCharm IDE. Few quizzes.

* Unit 1: Beginning in Computer Science
* Exploring Careers in Computer Science
* Unit 11: Internet
* Source files in GitHub, Comments: header, inline
* indentation vs. semicolon in C/Java
* print(), exit() and debugging
* GUI with tkinker [9B]: licensing
   * Titles, geometry, label, font, pack(pady), entry, button, Input string,
   * matplotlib Figure, dpi, canvas
   * password stored as salted hash
* Debugging: communities
* String operations: add, list, change, delete
   * Unit 8: Lists
   * Unit 9: 2D Lists
* Unit 7: Functions & Modules <a target="_blank" href="https://docs.python.org/3/tutorial/modules.html">Fibonacci</a>
   * <a target="_blank" href="https://docs.python.org/3/tutorial/modules.html">PT</a> Modules: built-in, import Modules, Conda vs env
   * random()
* Unit 2: Number Calculations and Data
* Variables: Data Type https://www.youtube.com/watch?v=V4jXVrUJsfM&t=6m50s
   * Defensive programming: checking input
   * conversions: str(), num()
* Iterables: Array Types: Lists, Tuples, Dictionaries
   * Unit 12: Dictionaries (Optional Extension)
* Control Flow:
   * Unit 4: Repetition and Loops
* Classes (objects) [5A] try loop <a target="_blank" href="https://www.w3schools.com/pythong/python_ref_exceptions.asp/">exceptions</a>
* Loops:
   * Fibonacci: Recursion limit error [4B]
   * Infitie While [6A] for debugging: Break
   * for [6B] break, range()
   * Nested loops: LeetCode, memoization
   * Guessing game [6C] = Binary Search
   * Rock Paper Sizzors [6D]
* File System: path, CSV: open() for rawx, close, read loop, print, write [8]
* Unit 3: Making Decisions
* Databases: built-in sqlite [9A] conn, CREATE TABLE, transaction protection
   * e.execute("SELECT *")
   * e.execute("INSERT")
   * Pandas vs. utilities
* Unit 6: Graphics
* Final Project: calculator [10A]
Off scope:
* Unit 5: Programming in EarSketch
* Unit 10: Programming in EarSketch

## KodeKloud Lydia Hallie

https://learn.kodekloud.com/user/courses/python-basics

https://learn.kodekloud.com/user/courses/d9f74b76-a361-40e8-9342-b49782bf2264
PCAP-31-03 - Python Certification Course

* Control Flow - Conditional Blocks and Loops
* Logic and Bit Operations
* Lists
* Functions
* Dictionaries
* Exceptions
* Python Basics
* Mock Exams

## HPI by

October 2, 2024 - October 29, 2024
Berry Boessenkool at the Haz Plattner school in Germany
http://open.hpi.de/courses/python2024
runs a course in German.
It's aimed at young people and shows how versatile Python is - from data analysis and system administration to artificial intelligence.

## MIT Intro to CS & Python

MIT 6.100L Introduction to CS and Programming with Python
https://www.youtube.com/watch?v=xAcTmDO6NTI&list=PLUl4u3cNGP62A-ynp6v6-LGBCzeH3VAQB


2) Strings, Input/Output, Branching
3) Iteration
4) Loops over Strings, Guess-and-Check, and Binary
5) Floats and Approximation Methods
6) Bisection Search
7) Decomposition, Abstraction, and Functions
8) Functions as Objects
9) Lambda Functions, Tuples, and Lists
10) Lists and Mutability
11) Aliasing and Cloning
12) List Comprehension, Functions as Objects, Testing, and Debugging
13) Exceptions and Assertions
14) Dictionaries
15) Recursion
16) Recursion on Non-numerics
17) Python Classes
18) More Python Class Methods
19) Inheritance
20) Fitness Tracker Object-Oriented Programming Examples
21) Timing Programs and Counting Operations
22) Big Oh and Theta
23) Complexity Classes Examples
24) Sorting Algorithms
25) Plotting
26) List Access, Hashing, Simulations, and Wrap-Up


## CISCO

https://www.netacad.com/courses/programming/pcap-programming-essentials-python

PE1: Module 1. Introduction to Python and Computer Programming
completed
* 2.1.1 Your very first program
* 2.1.2 The print() function
* 2.1.3 Function arguments
* 2.1.4 Function invocation
* 2.1.5 LAB Working with the print() function
* 2.1.6 The print() function and its effect, arguments, and values returned
* 2.1.7 Instructions
* 2.1.8 Python escape and newline characters
* 2.1.9 Using multiple arguments
* 2.1.10 Positional arguments
* 2.1.11 Keyword arguments
* 2.1.12 LAB The print() function and its arguments
* 2.1.13 LAB Formatting the output
* 2.1.14 SECTION SUMMARY
* 2.1.15 SECTION QUIZ

PE1: Module 2. Python Data Types, Variables, Operators, and Basic I/O Operations

PE1: Module 3. Boolean Values, Conditional Execution, Loops, Lists and List Processing, Logical and Bitwise Operations

PE1: Module 4. Functions, Tuples, Dictionaries, Exceptions, and Data Processing

## Others

A sample Python test by Certiport purchased by Pearsonvue.
Python-ITS303-sample-test.docx

### Paul Deitel

<a target="_blank" href="https://www.youtube.com/@PaulDeitel">@PaluDeitel YouTube channel</a>

Paul's live class Intro to Python on OReilly.com references
https://github.com/pdeitel/PythonFullThrottle
* the online JupyterLab environment (explained at https://jupyterlab.readthedocs.io/en/latest/)
* https://mybinder.org/v2/gh/pdeitel/PythonFullThrottle/master?urlpath=lab
* Run as http://localhost:8888/lab to interact with notebooks downloaded on your local system after
   ```docker run -p 8888:8888 -it --user root -v \
   $HOME/jupyter/scipy-notebook:latest start.sh  jupyter lab
   ```
   (replace FULL_PATH_TO with the exact location on your system of the PythonFullThrottle folder containing my notebooks)

They run Python locally using the Anaconda Python Distribution (currently Python 3.8) from
https://www.anaconda.com/distribution/

### James Murphy @mCoding

<a target="_blank" href="https://www.mCoding.io/">mCoding.com</a> by
James Murphy on his <a target="_blank" href="https://www.youtube.com/@mCoding">mCoding YouTube channel</a>
referencing <a target="_blank" href="https://github.com/mCodingLLC/VideosSampleCode/tree/master/videos">code on his GitHub</a>

### Jake Callahan

<a target="_blank" href="https://www.youtube.com/@JakeCallahan">YouTube channel</a>
referencing <a target="_blank" href="https://github.com/JacobCallahan/Understanding/tree/master/Python">https://github.com/JacobCallahan/Understanding/tree/master/Python</a>

### Andrew Mallet (theurbanpenguin)

<a target="_blank" href="https://www.youtube.com/@theurbanpenguin">YouTube channel</a>

### Luke Polson (Mr P Solver)

Luke Polson is a PhD candidate in medical physics at the University of British Columbia studying "medical imaging and tomographic image reconstruction".
He specializes on programming for "STEM" on his <a target="_blank" href="https://www.youtube.com/@MrPSolver">Mr. P Solver YouTube channel</a>, which provides thorough step-by-step explanations showing what's in <a target="_blank" href="https://github.com/lukepolson/youtube_channel/blob/main/Python%20Tutorial%20Series/matplotlib_essentials.ipynb">his GitHub</a> of Python .pynb code that runs in Jupyter. His <a target="_blank" href="https://www.udemy.com/course/python-stem-essentials/?couponCode=KEEPLEARNING">"Python STEM Essentials" $60 course on Udemy</a> adds exercises and projects on modeling.


### Greg Hogg

Greg Hogg specializes on solutions to Leetcode challenges in Python, C, Java, and JavaScript at
https://github.com/gahogg/Leetcode-Solutions/tree/main
which he explains at
https://www.youtube.com/@GregHogg

He offers "Master Data Structures & Algorithms" for FREE at
<a target="_blank" href="https://AlgoMap.io/">AlgoMap.io</a>
which provides challenges but not solutions:
1. Arrays & Strings
1. Hashmaps & Sets
1. Pointers
1. Stacks
1. Linked Lists
1. Binary Search
1. Sliding Window
1. Trees
1. Heaps
1. Recursive Backtracking
1. Graphs
1. Dynamic Programming

He also offers "Learn Python, Data Science & AI" at  partner site
<a target="_blank" href="https://www.mlnow.ai/">mlnow.ai</a>


### OReilly Live Training

Code for the O'Reilly Live Training, presented by Arianne Dee.
https://github.com/ariannedee/python-data-structs


### Boot.dev

https://www.boot.dev/tracks/backend
content is free under guest mode:
1. Password managers
1. Git
1. Shells and Terminal
1. Basic Python
1. Object Oriented Programming
1. Functional Programming
1. Golang
1. Rust?
1. Algorithms
1. Data Structures
1. Memory Management
1. SQL

1. HTTPS clients & CIA Cybersecurity
1. JavaScript & Node.js
1. File Servers and CDNs
1. HTTP Servers
1. Docker
1. CI/CD
1. Kubernetes
1. Pub/Sub
1. Cryptography

Build Projects:
* Bookbot
* Astroids
* Static Site Generator
* Maze Solver
* Pokedex
* Blog Aggregator
* Capstone Project
* Web Crawler

For AI mentor, gameification, solutions, certificates of completion,
use code <a target="_blank" href="https://sponsr.is/bootdev_travismedia">TRAVISMEDIA</a> get 25% off your first payment of $348/year ($29/month). 30-day money-back guarantee.

## Backend Ideas

<a target="_blank" href="https://www.linkedin.com/in/solomoneseme/">Solomon Eseme</a>
created <a target="_blank" href="https://masteringbackend.com/">masteringbackend.com</a>
that lists <a target="_blank" href="https://projects.masteringbackend.com">ideas for backends (server) projects</a>.
Only a few provide Python.

They offer a free example project at <a target="_blank" href="https://github.com/backendcommunity/build-your-own-library-management-system">https://github.com/backendcommunity/build-your-own-library-management-system</a>
It contains a README and a db.sqlite file that defines a Python SQLite database.

https://masteringbackend.com/community


Ajit Jaokar at Oxford University
https://www.linkedin.com/pulse/easy-way-learn-python-using-chatgpt-ajit-jaokar-sd8ee/
"An easy way to learn Python using ChatGPT" in his <a target="_blank" href="https://www.linkedin.com/pulse/easy-way-learn-python-using-chatgpt-ajit-jaokar-sd8ee/">LinkedIn</a> blog
provides a Python program that uses ChatGPT to generate a Python program that can be used to create a database.
Part 2 is at https://www.linkedin.com/pulse/easy-way-learn-python-coding-using-chatgpt-part-two-ajit-jaokar-5kagf/


https://www.udemy.com/course/database-design-and-app-development-with-python-mysql/
Database Design and App development with Python + MySQL (2.5 hours)
-- Unlock the Power of Database-Driven Apps with MySQL and Python Integration

https://youtube.com/shorts/pFag4mBsO1I?si=f93ZOHnvq4TVuQP-
"The most asked question ever"
https://www.youtube.com/@GregHogg/shorts
front for bootcamps MLNOW.ai and AlgoMap.io

https://learn.mongodb.com/learning-paths/mongodb-python-developer-path
15 hours free

<a target="_blank" href="https://www.linkedin.com/in/patrick-löber-403022137/">Patrick Loeber</a>,
Dev Advocate at AssemblyAI in Berlin
(on <a target="_blank" href="https://www.youtube.com/@patloeber">on YouTube</a> & <a target="_blank" href="https://patloeber.com/">patloeber.com</a>)
https://www.youtube.com/watch?v=qWYx5neOh2s

Derek Comartin at CodeOpinion.com
https://www.youtube.com/watch?v=Bxf_HMs7SeQ
Just store UTC? Handling Time Zones & Daylight Saving

## Pydantic data validation

The built-in dataclasses also provides type hints.
But Pydantic is an external library adds Data Validation (sanitizing), JSON Serialization.

Used by HuggingFace/transformers, tiangolo/fastapi, hwchase17/langchain, apache/airflow

Pydantic enables type hints in IDEs.

Pydantic Crash Course:
   * https://www.youtube.com/watch?v=g-F3FubxHd0
ArjanCodes:
   * https://www.youtube.com/watch?v=Vj-iU-8_xLs
   * https://www.youtube.com/watch?v=502XOB0u8OY
   * https://www.youtube.com/watch?v=zN4VCb0LbQI
   * https://www.youtube.com/watch?v=qkxf583t4Vc returns
Eric Roby
   * https://www.youtube.com/watch?v=7DSuYAt0OlE Pydantic Has Saved Me Countless Hours Of Debugging
   * https://www.youtube.com/watch?v=YKRqnWLZbpU I Stopped Using Everything Else Once I Found Pydantic
Kennedy:
   * https://www.youtube.com/watch?v=aHv7-6WIxNM
Carberra
   * https://www.youtube.com/watch?v=t6Cme1WTFCI
John Watson Rooney
   * https://www.youtube.com/watch?v=i4jespFbA1c
Jason Liu
   * https://www.youtube.com/watch?v=yj-wSRJwrrc "Pydantic is all you need"
   * https://www.youtube.com/watch?v=pZ4DIH2BVqg "Pydantic is still all you need"

Pydantic AI:
   * https://www.youtube.com/watch?v=UnH7S5044GA



## Surf.new

https://www.youtube.com/watch?v=MieyLy_6N40


## References

BOOK:
https://www.cosmicpython.com/book/preface.html
What’s the best way of structuring your application so that it’s easy to test?

https://www.youtube.com/watch?v=7kf1SACqlRw
I was bad at Data Structures and Algorithms. Then I did this.
by Andrew Codesmith
who wrote book <a target="_blank" href="https://shop.beacons.ai/andrewcodesmith/3b0e57be-7577-45d1-a8e5-b2cff6590bb9">$27 How to not suck at LeetCode/DSA Guide</a>

https://frontendmasters.com/courses/
"My Dev Setup is Better Than Yours"</a>
by ThePrimeagen

### Microsoft on Coursera

https://www.linkedin.com/pulse/microsofts-python-certificate-worth-stealth-startup-careers-xgtmf/

https://www.coursera.org/professional-certificates/microsoft-python-developer
Microsoft Python Development Professional Certificate

1. <a target="_blank" href="https://www.coursera.org/learn/microsoft-python-programming-fundamentals?specialization=microsoft-python-developer">Python Programming Fundamentals 24 hours</a>
   1. Introduction to Python 4 hours
   2. Python basics 3 hours
   3. Functions and modules 5 hours
   4. Data structures in Python 4 hours
   5. Error handling and debugging 3 hours
   6. Testing basics & version control 4 hours

2. <a target="_blank" href="https://www.coursera.org/learn/microsoft-data-analysis-visualization-with-python?specialization=microsoft-python-developer">Data Analysis and Visualization with Python 20 hours</a>
3. <a target="_blank" href="https://www.coursera.org/learn/microsoft-automation-scripting-with-python?specialization=microsoft-python-developer">Automation and Scripting with Python 26 hours</a>
   1. Introduction to automation, Crontab, Selenium PyAutoGUI
   1. Basic automation scripts,
   1. Advanced automation techniques introduces you to more sophisticated automation techniques, focusing on application programming interface (API) interaction, integration with third-party services, and task scheduling. Learners will explore the world of APIs, learning how to use Python's requests library to interact with REST APIs, handle authentication, and manage rate limits.
   1. Optimization and scaling, focuses on optimizing and scaling automation scripts for improved performance and handling larger, more complex tasks.
   1. Git collaboration: Essential skills for a team environment
4. <a target="_blank" href="https://www.coursera.org/learn/microsoft-web-development-with-python?specialization=microsoft-python-developer">Web Development with Python 22 hours</a>
5. <a target="_blank" href="https://www.coursera.org/learn/microsoft-advanced-python-development-techniques?specialization=microsoft-python-developer">Advanced Python Development Techniques 21 hours</a>  March 3
6. <a target="_blank" href="https://www.coursera.org/learn/microsoft-devops-agile-practices-in-python-development?specialization=microsoft-python-developer">Project Development in Python 19 hours</a> March 3


## Berkeley's BJC

"BJC" (Berkeley's Joyful Computing) <a target="_blank" href="https://www.youtube.com/@CSPBJC">channel on Youtube</a> hosts videos from EdX incorporating AP CSP content:
   * <a target="_blank" href="https://www.youtube.com/watch?v=gy4Mmd4d-3U">Global Impact of Computing</a>
   * [BJC.3x] Saving the World with Computing
   * [BJC.4x] Human Computer Interaction

<a target="_blank" href="https://www.youtube.com/watch?v=ozRovyDwKEM">VIDEO</a>:
In 2014, <a target="_blank" href="https://www.linkedin.com/in/ddgarcia/">Dan Garcia</a> at the University of California at Berkeley renamed its introductory computer science course in 2014 from “Introduction to Symbolic Programming” to “Joy and Beauty of Computing.” That resulted in the first time the course ever had more women enrolled than men.

<a target="_blank" href="https://twitter.com/cspbjc">@cspbjc</a>

- BJC Sparks: Our middle school / early high school curriculum that teaches a functional approach to programming (https://bjc.berkeley.edu/sparks/)

BJC's AP CS Principles: high school curriculum (https://bjc.edc.org/)
<a target="_blank" href="https://montanadigitalacademy.org/programs/original-credit-courses/">as offered in Montana's online</a>, the one-semester "Computer Science" course covers the following topics:

* Unit 1: Introduction to Programming
* Unit 2: Simple Python Data
* Unit 3: Debugging Interlude
* Unit 4: Python Turtle Graphics
* Unit 5: Python Modules
* Unit 6: Functions
* Unit 7: Selection
* Unit 8: More About Iteration
* Unit 9: Strings

https://bjc.edc.org/bjc-r/course/bjc4nyc_teacher.html

* Unit 1 Teacher Guide: Introduction to Programming
* Unit 2 Teacher Guide: Abstraction
* Unit 3 Teacher Guide: Data Structures

* Unit 4 Teacher Guide: How the Internet Works
* Unit 5 Teacher Guide: Algorithms and Simulations
* Unit 6 Teacher Guide: How Computers Work

* Unit 7 Teacher Guide: Fractals and Recursion
* Unit 8 Teacher Guide: Recursive Functions

https://bjc.berkeley.edu/summer-pd


## US University Courses

Pace College within the University of Washigton has an 
<a target="_blank" href="https://www.pce.uw.edu/certificates/python-programming">
online 8-month CERTIFICATE IN PYTHON PROGRAMMING</a>
for $4,194

Purdue has (with Simplearn) a  
<a target="_blank" href="https://bootcamp-sl.discover.online.purdue.edu/data-science-certification-course?utm_campaign=7759967-hello_world_q1_2025">
6-month online Professional Certificate In Data Science And Generative AI</a>
for $3,800.

## Azure cloud

https://learn.microsoft.com/en-us/azure/developer/python/
Azure for Python Developers
lists link to dev tools, SDK, Use ready-made AI services (face, speech, text, image, etc.),
Python enterprise RAG chat sample

https://learn.microsoft.com/en-us/training/modules/authenticate-azure-deployment-pipeline-service-principals/?source=recommendations
Authenticate your Azure deployment pipeline by using service principals

https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/local-development-service-principal?tabs=azure-cli
Authenticate Python apps to Azure services during local development using service principals
Create separate app registrations for each developer working on the app. 
```
AZ-SVC-PRIN-NAME="john-doe-prin-1"
az ad sp create-for-rbac --name "$AZ-SVC-PRIN-NAME"
```
   The command also creates the app registration for the app at the same time.
   This creates separate application service principals for each developer to use during local development and avoid the need for developers to share credentials for a single application service principal.

   ```
   {
  "appId": "00001111-aaaa-2222-bbbb-3333cccc4444",
  "displayName": "<service-principal-name>",
  "password": "Ee5Ff~6Gg7.-Hh8Ii9Jj0Kk1Ll2Mm3_Nn4Oo5Pp6",
  "tenant": "aaaabbbb-0000-cccc-1111-dddd2222eeee"
}
```
Create separate app registrations per app. This scopes the app's permissions to only what is needed by the app.
```
az ad group create --display-name MyDisplay --mail-nickname MyDisplay --description "<group-description>"
```
1. LOG IN
   ```
   az login --service-principal --username APPLICATION_ID --password PASSWORD --tenant TENANT_ID --allow-no-subscriptions
   ```
1. <i>Do something</i>

1. Log out
   ```
   az logout
   ```

## Tutorials

<a target="_blank" href="https://sensemakersams.org/micropython-course-2024/">FREE micropython-courses</a> at sensemakersams.org in Amsterdam (the Netherlands) who reference <a target="_blank" href="https://github.com/sensemakersamsterdam/upython_on_wokwi">upython_on_wokwi</a> in their lessons:

* <a target="_blank" href="https://sensemakersams.org/wp-content/uploads/2024/10/video1923236255.mp4" title="Aug 10, 2024">VIDEO</a> on <a target="_blank" href="https://github.com/sensemakersamsterdam/upython_on_wokwi/tree/main/lesson-1">Lesson 1: dimmer, dual_blink, led-pwm</a>

* <a target="_blank" href="https://sensemakersams.org/wp-content/uploads/2024/10/video1071724182.mp4" title="Oct 15, 2024">VIDEO</a> on <a target="_blank" href="https://github.com/sensemakersamsterdam/upython_on_wokwi/tree/main/lesson-2">Lesson 2: neopixel</a >

* <a target="_blank" href="https://sensemakersams.org/wp-content/uploads/2024/11/video1900963067.mp4" title="Oct 22, 2024">VIDEO</a> on <a target="_blank" href="https://github.com/sensemakersamsterdam/upython_on_wokwi/tree/main/lesson-2">Lesson 3: Stepper, Brother_John, LED PWM, Pico Async, Server Pot, Timers</a >


https://www.zerotoknowing.com/pricing
offers a $2,999 for 1-on-1 coaching calls with Josh at 
https://www.youtube.com/@codewithjoshoffical
https://youware.ai


## More on Python

This is one of a series about Python:

{% include python_links.html %}

