---
layout: post
date: "2025-11-08"
lastchange: "25-11-08 v005 + cli :2018-04-03-python-features.md"
file: "python-features"
title: "Python Features (and tools/utilities)"
excerpt: "How to automate Python"
tags: [python, microsoft, azure, machine learning, AI]
image:
# feature: pic green matrix hallway 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14623876/07afd066-0593-11e6-933a-2e596511ac67.jpg
  credit:
  creditlink:
comments: true
created: "2018-04-03"
---
<a target="_blank" href="https://bomonike.github.io/python-features"><img align="right" width="100" height="100" alt="python-features.png" src="https://github.com/bomonike/bomonike.github.io/blob/master/images/python-features.png?raw=true" />
{% include l18n.html %}
{% include _toc.html %}
<i>{{ page.excerpt }}</i>

The design choices faced by enterprise Python language users (click for more):

   * <a href="#VersionControl">Version Control: git/github, Google jj</a>
   * <a href="#Linting">Linting: Ruff</a>

   * <a href="#CLI">CLI</a>
   * <a href="#GUI">GUI</a> & <a href="#Analytics">Analytics</a> & <a href="#Dashboard">Dashboards</a>
   * <a href="#AsyncAPI">Async API (FastAPI)</a>
   * <a href="#Databases">Databases</a>
   <br /><br />


1. Specify first line and main to run program directly.
2. Define docstring on latest change, STATUS of program
3. Define github URL where program is located in docstring

4. Get parameter values from argument specified in call within CLI
5. Read secrets from .env file outside the program and GitHub, cloud (akeyless.com)
6. Positive and negative unit tests for each function (PyTest?)
7. Read CSV file for multiple iterations

8. Define OpenTelemetry (OTel) spans for tracing
9. Define a code for each message
10. Measure duration of each function with scope processed
11. Output log entries with duration and process scope


<hr />

<a name="VersionControl"></a>
   
## Execution Environment

<a target="_blank" href="https://wilsonmar.github.io/jupyter/">My article on Jupyter Notebooks</a> covers:
   * Google Colab
   * Kaggle
   * AWS


<a name="VersionControl"></a>
   
## Version Control

git/github, Google jj


<a name="Linting"></a>

## Linting: Ruff

To run several in one command, <tt>ruff</tt> combines the rules from several previous utilities (black, etc.).
And it runs fast due to it being written in Rust.

To identify whether libraries referenced has been flagged as vulnerable, we use <tt>safety</tt>.
It's free but it has an annoying habit of making users type a password every run.
So I took it out of the <strong>git-commit</strong> hooks script run on every commit.


## Logging

 loguru — Logging with zero boilerplate and built-in rotation
Why: Instead of logging.getLogger() setup, you get a one-line log tool with colors, file rotation, and context info.

```
from loguru import logger

logger.add("file_{time}.log", rotation="500 MB")
logger.info("Start processing {n} items", n=10)
```

Minimal setup, instantly usable output, fewer config hassles — productivity win.


## Colorized print output

The click library avoids the need to add color to print output by define global variables in every program file.

```
import click
import rich_click as rc

rc.rich_click.MODERN = True

@click.command()
@click.option('--name', prompt='Your name')
def hello(name):
    click.echo(f"Hello, [bold cyan]{name}[/]!")

if __name__ == '__main__':
    hello()
```

## traceback for debugging

Default tracebacks are messy. Rich’s tracebacks give color, local vars, context, and you spend less time digging.

```
from rich.traceback import install
install(show_locals=True)

def broken():
    a = [1,2,3]
    return a[5]

broken()
```

Instant clarity — especially when your automation fails in production and you need answers fast.


<a name="AsyncAPI"></a>

## Async API FastAPI

https://www.codecademy.com/article/fastapi-vs-flask-key-differences-performance-and-use-cases



<a name="CLI"></a>

## CLI UI

Python comes with the <tt>print()</tt> function.

The <tt>typer</tt> library makes it easier to define code to recognize parameters.


## Subprocess

To execute OS commands within Python, instead of shell scripts:

```
from invoke import task

@task
def clean(ctx):
    ctx.run("rm -rf build dist __pycache__")

@task(pre=[clean])
def build(ctx):
    ctx.run("python setup.py sdist bdist_wheel")

# CLI:
# > invoke build
```




<a name="Databases"></a>

## Databases

Local databases:
   * SQLite comes built into Python, so is a popular choice.
   * Postgres
   * MySQL is open source, but its ownership by Oracle makes its future suspect.
   <br /><br />
Cloud-based databases are convenient, but expensive.
   * Snowflake
   * Databricks
   * Microsoft SQL & Azure Cosmos DB
   <br /><br />
The question about database is its architectural data  organization:
   * traditional SQL
   * Graph databases
   * DAG (Directed Acyclic Graph) like in blockchains and within Git
   * Semantic vector databases used by AI to augment foundation LLMs with private data
   <br /><br />
Python ORM frameworks include: 
   * Django ORM
   * sqlalchemy ORM: [<a target="_blank" href="https://www.datacamp.com/tutorial/sqlalchemy-tutorial-examples">Datacamp.com</a>]
   * https://www.planeks.net/django-orm-vs-sqlalchemy/


<a name="Dashboards"></a>

## Dashboards to present analytics

Dashboard visually present metrics (statistics) for "situational awareness" (many in real-time):
   * At an individual level, health stastics such as weight from scales, blood/oxigen, blood pressure, Glucouse from Continous Glucose Monitors, etc.
   * Families install Home Assistant to display sensor history, temperature fluctuations, and other weather conditions.
   * Families and teams have a common calendar.
   * Factories install operational status boards such as <a target="_blank" href="https://bomonike.github.io/plc#visibility-from-each-and-every-location">Ignition from Inductive Automation</a>.
   * Citizens use world and <a target="_blank" href="https://blog.streamlit.io/crafting-a-dashboard-app-in-python-using-streamlit/">US Population</a> dashboards to better understand the past and prepare for the future (such as inbound and outbound migration).
   <br /><br />

Python Frameworks:
* Matplotlib-based dashboards.
* Streamlit: Simple and fast for data apps with less coding. [<a target="_blank" href="https://blog.streamlit.io/crafting-a-dashboard-app-in-python-using-streamlit/">tutorial</a> to build a US Population Dashboard app]

* Panel by Holoviz: For powerful dashboards customized by pros, especially with Jupyter Notebook.
* Voila turns Jupyter notebooks into dashboards. Save this example as a .ipynb file, then run it with voila script_name.ipynb:

* Bokeh
* Taipy

* LightningChart features GPU acceleration.
* HoloViews puts the focus on describing data, and it decides how best to visualize it by auto-links with Bokeh, Matplotlib, and Plotly. Netflix’s internal data teams have used HoloViews-style pipelines for rapid analytics dashboards.
<br /><br />

Resources:
   * https://realpython.com/python-dash/
   * https://medium.com/codrift/7-python-libraries-that-make-data-visualization-addictive-f657bf98d595
   * <a target="_blank" href="https://www.linkedin.com/learning/python-for-data-visualization-2023/using-the-exercise-files?autoSkip=true&resume=false">Python for Visualization</a>


<a name="Analytics"></a>

## Analytics

You may be familiar with the phrase “A picture is worth a thousand words”.

There are expensive enterprise-level system Tableau, SAS, Matlab, etc.

For Python:

* Seaborn runs on top of Matplotlib to provide more flexibility and a more elegant look.

* Plotly (for interactivity and modern UI) [<a target="_blank" href="https://realpython.com/python-dash/">Dash Tutorial</a>]
   * https://dash.plotly.com/tutorial shows recreation of a GapMinder 4D interface from https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv
   * <a target="_blank" href="https://plotly.com/python/choropleth-maps/?ref=blog.streamlit.io">choropleth-maps</a> displays a map which use gradations of colors to highlight differences between locations (such as the most and least populated states).

* Altair (for quick, declarative, grammar-based plots)
* Polars + hvPlot (if you’re moving toward faster, Arrow-native workflows)

Resources:
   * <a target="_blank" href="https://www.planeks.net/python-dashboard-development-framework/">"What is the best Python dashboard framework?"</a>


<a name="GUI"></a>

## GUI

Python GUIs (Graphical User Interfaces) are everything you see and interact with on the computer screen, from buttons and windows to menus, icons, etc., on any device – computer, phone, or other. You don’t have to type out all commands anymore; a GUI allows you to mouse click, tap, or use any other input, with all such actions becoming visual.

To provide front-end GUI such as a clickable dashboard, many enterprises use NodeJs (with ReactJs, etc.) or game engines (such as UnReal, etc.).

SUMMARY: Libraries to create Python GUI have a fragmented among these choices:

* Tkinter: The default (built-in) Python GUI library is for simple, portable, and quick-to-build interfaces. So it is beginner-friendly, with many tutorials. However, it "looks like 1994" and has more limited widgets.

* PySide (Qt for Python): The most powerful and professional GUI toolkit with extensive features, good documentation, native look and cross-platform support. Suitable for complex and commercial apps without much licensing worry unless modifying the core. Each version requires different coding.

* PyQt require a commercial license for professional and complex applications because it is feature-rich with tools like <strong>Qt Designer</strong>.

* Kivy is for modern touch and multi-touch apps on <strong>smart phones</strong> (iPhones, Androids, and Raspberry Pi). It provides custom UI elements. However, it is not native-looking but visually modern and flexible.

* PySimpleGUI is good for small utilities or quick tools for rapid, simple GUI creation with a lightweight abstraction over Tkinter, Qt, or wxPython. But it's less customizable. 

* wxPython (at https://wxpython.org/index.html) is open source and <strong>cross-platform</strong> - run with little or no modifications on Windows, Macs and Linux or other unix-like systems. It is implemented as a set of Python modules that wrap <strong>native-looking</strong> GUI components due to use of low-level super fast wxWidgets cross platform  GTK2 or GTK3 libraries written in C++ which means tricky to learn with complex documentation.

wxPython's Project Phoenix is a new from-the-ground-up implementation of wxPython, created with the intent of making wxPython "better, stronger, faster than he was before."

* PyGObject (GTK-based, good for Linux)

* FLTK is a lightweight, cross-platform GUI library designed for speed and efficiency. Using its Python bindings, you get the performance and stability of its C++ core. Key features include a simple interface, lightweight design, and fast performance for GUI apps. While FLTK is quick, lightweight, and works well on many platforms, it has fewer widgets and a less modern interface than other libraries. It’s a good choice for simple graphics applications or projects needing good performance without a complex or fancy interface.

* Toga is a <strong>cross-platform</strong> GUI library that uses each operating system’s <strong>native APIs</strong> to deliver a native look and feel. So it enables Python developers to build apps with consistent and natural interfaces across all platforms. Its "least common denominator" means fewer fancy widgets and a smaller community than older libraries.

* Dear PyGui is a open-source GUI library that provides high performance and ease of use, especially for creating <strong>real-time graphics</strong> tools and applications. Dear PyGui provides fast graphics rendering, a node-based user interface, and supports a lot of interactive features. But, its community is still small, and it might not have as many features as some of the more established libraries. Dear PyGui is a good fit for real-time applications, graphics editors, data analysis tools, and apps with high graphics performance.

* Pygame, while not a pure GUI library, is popular for developing 2D games. It makes mp3 audio processing easy on macOS.

https://stepmediasoftware.com/blog/best-gui-library-for-python/


## brew search

```
brew search python
==> Formulae
boost-python3                              python-setuptools
bpython                                    python-tabulate
brewsci/bio/boost-python3@1.87             python-tk@3.10
cyclonedx-python                           python-tk@3.11
ipython                                    python-tk@3.12 ✔
libvirt-python                             python-tk@3.13 ✔
micropython                                python-tk@3.9
ptpython                                   python-yq
python-argcomplete                         python@3.10
python-build                               python@3.11 ✔
python-freethreading                       python@3.12 ✔
python-gdbm@3.11                           python@3.13 ✔
python-gdbm@3.12                           python@3.8
python-gdbm@3.13                           python@3.9
python-launcher                            reorder-python-imports
python-lsp-server                          wxpython
python-markdown                            pythran
python-matplotlib                          cython
python-packaging ✔                         jython
```

## References

<a target="_blank" href="https://www.amazon.com/Python-Tricks-Buffet-Awesome-Features/dp/1775093301?">BOOK:
"Python Tricks: A Buffet of Awesome Python Features " from October 25, 2017</a>
<a target="_blank" href="https://learning.oreilly.com/library/view/python-tricks/9781492069522/">on OReilly</a>
by Dan Bader (of RealPython.com) recommends assertions

https://learning.oreilly.com/library/view/data-structures/9780134855912/
Data Structures & Algorithms in Python
By John Canning, Alan Broder, Robert Lafore

<a target="_blank" href="https://www.youtube.com/watch?v=NiUK4G_jgdE">VIDEO</a>:
22:43 AI-generated podcast about book
<a target="_blank" href="https://www.amazon.com/Python-Basics-Practical-Introduction/dp/1775093328?">
BOOK: "Python Basics: A Practical Introduction to Python 3rd Edition"</a>
by David Amos (Author), Dan Bader (Author), Joanna Jablonski (Author), Fletcher Heisler (Author)

<a target="_blank" href="https://www.youtube.com/watch?v=DhA4a3xS0Vo">VIDEO</a>
<a target="_blank" href="https://www.amazon.com/Kubernetes-Bible-definitive-deploying-platforms/dp/1838827692">$55</a> 
"The Kubernetes Bible: The definitive guide to deploying and managing Kubernetes across major cloud platforms" by by Nassim Kebbani (Author), Piotr Tylenda (Author), Russ McKendrick (Author)

## Pythonista mobile IDE

https://apps.apple.com/us/app/pythonista-3/id1085978097
Pythonista 3 ($9.99 by <a target="_blank" href="https://omz-software.com/pythonista/">omz:software</a>) Python IDE for iPad (and iPhone)


## AI Vision

OpenCV

https://www.raspberrypi.com/documentation/accessories/ai-camera.html
AI Camera from Raspberry Pi.
https://www.youtube.com/watch?v=aoYfHlbNxGQ
Get started with Raspberry Pi AI Camera with Object Detection under 5 Minutes #raspberrypi

https://www.ultralytics.com/events/yolovision YOLO vision by Ultralytics.

https://core-electronics.com.au/guides/raspberry-pi/custom-object-detection-models-without-training-yoloe-and-raspberry-pi/

https://docs.firialabs.com/codeair/radio.html


## Workflow orchestration

The prefect library enables scripts with orchestration involving flows, tasks, retry logic, scheduling by providing visibility through multiple stages and task breakdown, without heavy infrastructure. 

```
from prefect import flow, task

@task
def fetch_data():
    return [1,2,3]

@task
def process(data):
    return [x*2 for x in data]

@flow
def my_flow():
    data = fetch_data()
    result = process(data)
    print(result)

if __name__ == '__main__':
    my_flow()
```
