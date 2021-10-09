---
layout: post
title: "Python Certs"
excerpt: "The topics for learning the Python language thoroughly, for professional status"
tags: [python, coding]
date: "2021-10-09"
file: "python-certs"
image:
#python-cert-31-02-1900x500
  feature: https://user-images.githubusercontent.com/300046/136653262-49c4cd56-f860-43a7-9663-c3ff144b7071.png
  credit: Python Institute
  creditlink: https://pythoninstitute.org/pcap-certified-associate-in-python-programming-updated-to-pcap-31-02/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Certifications in Python 

<a target="_blank" href="https://www.PythonInstitute.org">PythonInstitute.org</a> has several certification exams taken online at <a target="_blank" href="https://ums.edube.org/store/">ums.edube.org/store</a> or in-person at a Pearson VUE center. 

Each requires 70% correct of 40 questions over 40 minutes on-line.

### Entry-level cert

<a target="_blank" href="https://pythoninstitute.org/certification/pcep-certification-entry-level/pcep-exam-syllabus/">"Certified Entry-Level Python Programmer Certification"</a> covers these exam blocks for $59. Version <strong>PCAP-31-02</strong> is the version after PCAP-31-01 is retired.

The official <a target="_blank" href="https://pythoninstitute.org/download/566/">practice test is at pythoninstitute.org/download/566</a>

The exam "blocks":

1: Basic Concepts (17% - 5 exam items)

   * fundamental concepts: interpreting and the interpreter, compilation and the compiler, language elements, lexis, syntax analysis (parsing), semantics (applying language rules such as type mismatch)
   * <a target="_blank" href="https://wilsonmar.github.io/python-coding/#reserved-keywords">Python keywords</a>, instructions
   * indenting
   * REPL (<a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/5262/lesson/4/module/413">Read Evaluate Print Loop interactive</a>), control-D to exit()
   * comments. PROTIP: Text between triple-doublespace are actually string objects in the byte code
   * literals: Boolean, integer, floating-point numbers, scientific notation, strings. <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=891782ac-798e-4745-80a0-6f142520d168">b'data'</a> literals can be split().
   * the print() function
   * the input() function
   * numeral systems (<a target="_blank" href="https://en.wikipedia.org/wiki/Bit_numbering">W</a>: binary, octal, decimal, hexadecimal) <a target="_blank" href="https://en.wikipedia.org/wiki/Numeral_system">W</a>, <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/5264/lesson/2/module/413">*</a>
   * numeric operators: ** * / % // + –  
   <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/5264/lesson/1/module/413">// is floor division. Py3: Division always returns a float. Num (mod) % 2 is 0 for odd, 1 for even</a>
   * string operators: * +
   * assignments and shortcut operators
   <br /><br />

2: Data Types, Evaluations, and Basic I/O Operations (20% - 6 exam items)

   * operators: unary and binary, priorities, and binding
   * bitwise operators <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=3db7f679-98dd-4cd4-9404-bd800eb22184">VIDEO:</a> ~ & ^ \| \<\< \>\> (<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=b2e861ef-170d-4f7b-bc53-344781bf0fa0">Mandelbrot</a>)
   * Boolean operators: not and or
   * Boolean expressions <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/5263/lesson/4/module/413">(True/False)</a>
   * relational operators ( == != > >= < <= ), building complex Boolean expressions
   * accuracy of floating-point numbers <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/5263/lesson/5/module/413">4.5e9 == 4.5 * (10 ** 9) == 4.5E9 == 4.5E+9</a>

   * basic input and output operations using the input(), print(), int(), float(), str(), len() functions
   * formatting print() output with end= and sep= arguments
   * type casting
   * basic calculations
   * simple strings: constructing, assigning, indexing, slicing comparing, immutability
   <br /><br />

3: Flow Control – loops and conditional blocks (20% - 6 exam items)

   * conditional statements: if, if-else, if-elif, if-elif-else
   * multiple conditional statements
   * the pass instruction
   * building loops: while, for, range(), in
   * iterating through sequences
   * expanding loops: while-else, for-else
   * nesting loops and conditional statements
   * controlling loop execution: break, continue
   <br /><br />

4: Data Collections – Lists, Tuples, and Dictionaries (23% - 7 exam items)

   * simple lists: constructing vectors, indexing and slicing, the len() function
   * lists in detail: indexing, slicing, basic methods (append(), insert(), index()) and functions (len(), sorted(), etc.), del instruction, iterating lists with the for loop, initializing, in and not in operators, list comprehension, copying and cloning
   * lists in lists: matrices and cubes
   * tuples: indexing, slicing, building, immutability
   * tuples vs. lists: similarities and differences, lists inside tuples and tuples inside lists
   * dictionaries: building, indexing, adding and removing keys, iterating through dictionaries as well as their keys and values, checking key existence, keys(), items() and values() methods
   * strings in detail: ASCII, UNICODE, UTF-8 (rendered/transmitted as pairs of bytes in norsk.encode("utf-8")
   * immutability, escaping using the \ character, quotes and apostrophes inside strings, multiline strings, copying vs. cloning, advanced slicing, string vs. string, string vs. non-string, basic string methods (upper(), lowe
   <br /><br />

5: Functions (20% - 6 exam items)

   * defining and invoking your own functions and generators
   * return and yield keywords, returning results,
   * <a target="_blank" href="https://wilsonmar.github.io/python-coding/#use-not-none-reserved-word">the None keyword</a> (instead of return 0)
   * recursion
   * parameters vs. arguments,
   * positional keyword and mixed argument passing,
   * default parameter values
   * converting generator objects into lists using the list() function
   * name scopes, name hiding (shadowing), the global keyword
   <br /><br />

### Intermediate cert

The <a target="_blank" href="https://pythoninstitute.org/certification/pcap-certification-associate/pcap-exam-syllabus/">(PCAP-31-02) Associate level exam</a> for $295 covers these exam blocks:

1: Control and Evaluations (25%)

   * <strike>basic concepts: interpreting and the interpreter, compilation and the compiler, language elements, </strike>
   * compilation Lexical analysis (<a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/5262/lesson/2/module/413">into tokens</a>), 
   * Syntactic analysis (parsing), Semantic analysis (type & parameter mismatch)
   * <a target="_blank" href="https://wilsonmar.github.io/python-keywords">Python keywords</a>
   * bytecode instructions
   * indenting</strike>
   * <strike>literals: Boolean, integer, floating-point numbers, scientific notation, strings</strike>
   * operators: unary and binary, priorities and binding
   * numeric operators: ** * / % // + –
   * bitwise operators: ~ & ^ | << >>
   * string operators: * +
   * <strike>Boolean operators: not and or</strike>
   * <strike>relational operators ( == != > >= < <= ), building complex Boolean expressions</strike>
   * assignments and shortcut operators
   * <strike>accuracy of floating-point numbers</strike>
   * basic input and output: input(), print(), int(), float(), str() functions
   * <strike>formatting print() output with end= and sep= arguments</strike>
   * conditional statements: if, if-else, if-elif, if-elif-else
   * the pass instruction
   * simple lists: constructing vectors, indexing and slicing, the len() function
   * <strike>simple strings: constructing, assigning, indexing, slicing comparing, immutability</strike>
   * building loops: while, for, range(), in, iterating through sequences
   * expanding loops: while-else, for-else, nesting loops and conditional statements
   * <strike>controlling loop execution: break, continue</strike>
   <br /><br />

2: Data Aggregates (25%)

   * strings in detail: ASCII, UNICODE, UTF-8, immutability, escaping using the \ character, quotes and apostrophes inside strings, multiline strings, copying vs. cloning, advanced slicing, string vs. string, string vs. non-string, basic string methods (upper(), lower(), isxxx(), capitalize(), split(), join(), etc.) and functions (len(), chr(), ord()), escape characters
   * lists in detail: indexing, slicing, basic methods (append(), insert(), index()) and functions (len(), sorted(), etc.), del instruction, iterating lists with the for loop, initializing, in and not in operators, list comprehension, copying and cloning
   * lists in lists: matrices and cubes
   * tuples: indexing, slicing, building, immutability
   * tuples vs. lists: similarities and differences, lists inside tuples and tuples inside lists
   * dictionaries: building, indexing, adding and removing keys, iterating through dictionaries as well as their keys and values, checking key existence, keys(), items() and values() methods
   <br /><br />

3: Functions and Modules (25%)

   * <strike>defining and invoking your own functions and generators
   * return and yield keywords, returning results, the None keyword, recursion
   * parameters vs. arguments, positional keyword and mixed argument passing, default parameter values
   * converting generator objects into lists using the list() function
   * name scopes, name hiding (shadowing), the global keyword</strike>
   * lambda functions
   * defining and using map(), filter(), reduce(), reversed(), sorted() functions and the sort() method
   * the if operator
   * import directives, qualifying entities with module names
   * initializing modules
   * writing and using modules, 
   * the __name__ variable
   * pyc file creation and usage
   * constructing and distributing packages, packages vs. directories
   * the role of the __init__.py file
   * hiding module entities
   * Python hashbangs
   * using multiline strings as module documentation
   <br /><br />

4: Classes, Objects, and Exceptions (25%)

   * defining your own classes, superclasses, subclasses, inheritance, searching for missing class components, creating objects
   * class attributes: class variables and instance variables, defining, adding and removing attributes, explicit constructor invocation
   * class methods: defining and using, the self parameter meaning and usage
   * inheritance and overriding, finding class/object components
   * single inheritance vs. multiple inheritance
   * name mangling
   * invoking methods, passing and using the self argument/parameter
   * the __init__ method
   * the role of the __str__ method
   * introspection: __dict__, __name__, __module__, __bases__ properties, examining class/object structure
   * writing and using constructors
   * hasattr(), type(), issubclass(), isinstance(), super() functions
   * using predefined exceptions and defining your own ones
   * the try-except-else-finally block, the raise statement, the except-as variant
   * exceptions hierarchy, assigning more than one exception to one except branch
   * adding your own exceptions to an existing hierarchy
   * assertions
   * the anatomy of an exception object
   * input/output basics: opening files with the open() function, stream objects, <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=f28757e1-2ee7-47b7-bdee-164843ee077e">writing binary (bmp file)</a> vs. text files, newline character translation, reading and writing files,
   * bytearray objects
   * <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=92d07a6a-3c07-4515-bbb5-6bd65a893b47">read()</a>, readinto(), readline(), write(), 
   * close() methods (vs. with)
   <br /><br />

### Professional 1

<a target="_blank" href="https://pythoninstitute.org/certification/pcpp-certification-professional/pcpp-32-1-exam-syllabus/">The first of two Professional-level exams (PCPP-32-101)</a>

1: File Processing and Communicating with a Program’s Environment (20%)

   * Processing different kinds of files
      - sqlite3 – interacting with SQLite databases
      - xml – creating and processing XML files
      - csv – CSV file reading and writing
      - logging – basics logging facility for Python
      - configparser – configuration file parser

   * Communicating with a program’s environment:
      - os – interacting with the operating system,
      - datetime – manipulating with dates and time
      - io – working with streams,
      - time – time access and conversions
   <br /><br />

2: Math, Science, and Engineering Tools (20%)

   * math – a basic tool for elementary evaluations
   * NumPy – fundamental package for scientific computing
   * SciPy – an ecosystem for mathematics, science, and engineering
   * Matplotlib – 2D plotting library producing publication quality figures
   * Pandas – a library providing high-performance and data analysis tools
   * SciKit-image – a collection of algorithms for image processing
   <br /><br />

3: GUI Programming (20%)

   * What is GUI and where it comes from
   * Constructing a GUI – basic blocks and conventions
   * Event-driven programming
   * Currently used GUI environments and toolkits
   * tkinter — Python interface to Tcl/Tk
      - tkinter’s application life cycle
      - Widgets, windows and events
      - Sample applications
   * pygame – a simple way of developing multimedia applications
   <br /><br />

4: Python Enhancement Proposals (15%)

   * What is PEP?
   * Coding conventions – not only style and naming
   * PEP 20 – The Zen of Python: a collection of principles that influences the design of Python code
   * PEP 8 – Style Guide for Python Code: coding conventions for code comprising the standard library in the main Python distribution
   * PEP 257 – Docstring Conventions: what is docstring and some semantics as well as conventions associated with them
   * A tour of important PEPs
   <br /><br />

5: Advanced Perspective of Classes and Object-Oriented Programming in Python (25%)

   * Classes, Instances, Attributes, Methods
   * Working with class and instance data
   * Copying object data using shallow and deep operations
   * Inheritance and Polymorphism
   * Different faces of Python methods: static and class methods
   * Abstract classes vs. method overloading
   * Composition vs. Inheritance – two ways to the same destination
   * Implementing Core Syntax
   * Subclassing built-ins
   * Attribute Encapsulation
   * Advanced techniques of creating and serving exceptions
   * Serialization of Python objects using the pickle module
   * Making Python object persistent using the shelve module
   * Metaprograming
      - Function decorators
      - Class decorators
      - Metaclasses
   <br /><br />

### Professional 2

<a target="_blank" href="https://pythoninstitute.org/certification/pcpp-certification-professional/pcpp-32-2-exam-syllabus/">The second of two Professional-level exams (PCPP-32-102)</a>

1: Creating and Distributing Packages (20%)

   * Using pip
   * Basic directory structure
   * The setup.py file
   * Sharing, storing, and installing packages
   * Documentation
   * License
   * Testing principles and techniques
      - unittest – Unit testing framework
      - Pytest – framework to write tests

2: Design Patterns (20%)

   * Object-oriented design principles and the concept of design patterns
   * The Singleton Design Pattern
   * The Factory Pattern
   * The Façade Pattern
   * The Proxy Pattern
   * The Observer Pattern
   * The Command Pattern
   * The Template Method Pattern
   * Model-View-Controller
   * The State Design Pattern

3: Interprocess Communication (20%)

   * multiprocessing — Process-based parallelism
   * threading — Thread-based parallelism
   * subprocess — Subprocess management
   * Multiprocess synchronisation
      - queue — A synchronized queue class
      - socket — Low-level networking interface
      - mmap — Memory-mapped file support

4: Python Network Programming (20%)

   Python Socket Module:

   * Introduction to sockets
   * Server Socket Methods
   * Client socket methods
   * General socket methods
   * Client-Server vs. Peer-to-peer
   * Other Internet nodules

5: Python-MySQL Database Access (20%)

   * Relational databases – fundamental principles and how to work with them
   * MySQL vs. rest of the world
   * CRUD Application
      - db connection
      - db create
      - db insert
      - db read
      - db update
      - db delete

   <br /><br />


<a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/413">
The video course at LinuxAcademy</a> by Keith Thompson references 
includes a practice exam.


## More about Python

This is one of a series about Python:

{% include python_links.html %}
