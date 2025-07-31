---
layout: post
date: "2025-07-31"
lastchange: "v017 + FiriaLabs :2016-07-10-python-certs.md"
url: "https://wilsonmar.github.io/python-certs"
file: "python-certs"
title: "Python Certs"
excerpt: "Here is how to study and take Certification exams to validate your expertise to potential schools, scholarships, and employers."
tags: [python, coding]
image:
#python-cert-31-02-1900x500
  feature: https://user-images.githubusercontent.com/300046/136653262-49c4cd56-f860-43a7-9663-c3ff144b7071.png
  credit: Python Institute
  creditlink: https://pythoninstitute.org/pcap-certified-associate-in-python-programming-updated-to-pcap-31-02/
comments: true
created: "2016-07-10"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Certifications show that you are serious about your education and career, especially if you didn't graduate from a top tier degree from MIT/CMU, etc. 

{% include whatever.html %}


## Other Exams

Before they setup an interview,
Amazon, Facebook, and others force candidates to take a test on:

   * https://www.hackerrank.com/dashboard
   * leetcode

Hackerrank offers free "certifications".

<a target="_blank" href="https://campus.w3schools.com/collections/certifications/products/python-certificate">W3schools.com offers a $95 certification</a>.
PROTIP: I don't think it counts for much.

https://certiport.filecamp.com/s/i/9Th6LzRzeAhrdCP7
for the Python "IT Specialist Exam Objectives"

<hr />

## PCEP™ (Python Institute's Certified Entry-Level Python Programmer)

<a target="_blank" href="https://www.PythonInstitute.org">PythonInstitute.org</a> has several certification exams taken online at <a target="_blank" href="https://ums.edube.org/store/">ums.edube.org/store</a> or in-person at a Pearson VUE center.


The OpenEDG Python Institute administers this progression of Python certification exams:

<img alt="python-certs-map=1200x253.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1734024828/python-certs-map_yh2puu.png" />
   
1. 20% off $59 &nbsp; PCEP™ (Certified Entry-Level Python Programmer exam PCEP-30-0x) asks 30 questions over 40 minutes <br /><a target="_blank" href="https://pythoninstitute.org/pcep">https://pythoninstitute.org/pcep</a> 

   [<a href="#PE1">PE1/PCEP-30-0x topics</a>]
   
   PROTIP: Cisco rewards you (through a teacher like me) a discount to the OpenEDG exam after you <a href="#CiscoCourses">sign-up</a> and complete their 

2. 50% off $295 PCAP™ (Certified Associate Python Programmer exam PCAP-31-0x) asks 31 questions over 65 minutes<br /><a target="_blank" href="https://pythoninstitute.org/pcap">https://pythoninstitute.org/pcap</a>

   [<a href="#Intermediate">Intermediate topics</a>]

3. $225 PCAPP1™ (Certified Professional Python Programmer Level 1 Exam PCPP-32-101) asks 45 questions over 65 minutes <br /><a target="_blank" href="https://pythoninstitute.org/pcpp1">https://pythoninstitute.org/pcpp1</a> 

   [<a href="#Pro1">Pro1 Topics</a>]
   
4. $195 PCAPP2™ (Certified Professional Python Programmer Level 2 Exam PCPP-32-201) asks 45 questions over 65 minutes <br /><a target="_blank" href="https://pythoninstitute.org/pcpp2">https://pythoninstitute.org/pcpp2</a>

   [<a href="#Pro2">Pro2 Topics</a>]

Each exam requires answering 70% correct.

Prices above are for a single try. Exams can be purchased with a retake option and sample tests.



### Entry-level cert

<a target="_blank" href="https://pythoninstitute.org/certification/pcep-certification-entry-level/pcep-exam-syllabus/">"Certified Entry-Level Python Programmer Certification"</a> covers these exam blocks for $59. Version <strong>PCAP-31-02</strong> is the version after PCAP-31-01 is retired.

The official <a target="_blank" href="https://pythoninstitute.org/download/566/">practice test is at pythoninstitute.org/download/566</a>
</a>


<a name="CiscoCourses"></a>

## Cisco Discount for OpenEDG

Cisco's offers <a target="_blank" href="https://www.netacad.com/learning-collections/python?courseLang=en-US">
at their NetAcad.com site</a>  free online Python courses developed in collaboration with OpenEDG:

1. Click "Login" at the upper-right.
1. Click "Sign Up" at the lower-right.
1. Click the Google icon under "Sign up with".
1. Select your personal Google account - the one credly.com will use even after you leave school.
1. Check the accept boxes, then "Accept & Continue".
1. Login using your Google account and associated password.

1. Use the email address you used to log into NetAcad.com to <a target="_blank" href="https://www.credly.com/users/sign_up">create an account at credly.com</a>.
1. In Credly, click Settings, Security & Privacy, to setup two-factor authentication with your Authy mobile app.

   <a name="PE1"></a>

   ### Cisco PE1 Course for PCEP-30-0x

   <a target="_blank" href="https://www.netacad.com/courses/python-essentials-1?courseLang=en-US"><img align="right" width="100" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1733810664/cisco_python_essentials_1_50_qxxfot.png" /></a>

   <a target="_blank" href="https://edube.org/study/pe1">https://edube.org/study/pe1</a>
1. Click "Python Essentials 1"
1. Notice the PCAP (Certified Entry-Level Python Programmer) exam sections:

   1. Introduction to Python and Computer Programming
   2. <a href="#DataTypes">Python Data Types</a>, Variables, Operators, and Basic I/O Operations
   3. <a href="#FlowControl">Flow Control</a>: Boolean Values, Conditional Execution, Loops, Lists and List Processing, Logical and Bitwise
   4.<a href="#Functions">Functions</a>, Tuples, Dictionaries, Exceptions, and Data Processing

The exam "blocks" for Fundamentals:

<a name="BasicConcepts"></a>

### 1: Basic Concepts (17% - 5 exam items)

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

<a name="DataTypes"></a>

### 2: Data Types, Evaluations, and Basic I/O Operations (20% - 6 exam items)

   * operators: unary and binary, priorities, and binding
   * bitwise operators <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=3db7f679-98dd-4cd4-9404-bd800eb22184">VIDEO:</a> ~ & ^ \| \<\< \>\> (<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=b2e861ef-170d-4f7b-bc53-344781bf0fa0">Mandelbrot</a>)
   * Boolean operators: not and or
   * Boolean expressions <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/5263/lesson/4/module/413">(True/False)</a>
   * relational operators ( == != > >= < <= ), building complex Boolean expressions
   * accuracy of floating-point numbers <a target="_blank" href="https://linuxacademy.com/cp/courses/lesson/course/5263/lesson/5/module/413">4.5e9 == 4.5 * (10 ** 9) == 4.5E9 == 4.5E+9</a>

   * basic input and output operations using the input(), print(), int(), float(), str(), len() <a target="_blank" href="https://www.youtube.com/watch?v=5Kzw-0-DQAk&list=PLlRFEj9H3Oj7Bp8-DfGpfAfDBiblRfl5p&index=20&pp=iAQB">functions</a>
   * formatting print() output with end= and sep= arguments
   * type casting
   * basic calculations
   * simple strings: constructing, assigning, indexing, slicing comparing, immutability
   <br /><br />

<a name="FlowControl"></a>

### 3: Flow Control – loops and conditional blocks (20% - 6 exam items)

   * <a target="_blank" href="https://www.youtube.com/watch?v=DmzEdsqxTbU&list=PLlRFEj9H3Oj7Bp8-DfGpfAfDBiblRfl5p&index=16&pp=iAQB">conditional statements</a>: if, if-else, if-elif, if-elif-else
   * multiple conditional statements
   * the pass instruction
   * building loops: while, for, range(), in
   * iterating through sequences
   * expanding loops: while-else, for-else
   * nesting loops and conditional statements
   * controlling loop execution: break, continue
   <br /><br />

### 4: Data Collections – Lists, Tuples, and Dictionaries (23% - 7 exam items)

   * <a target="_blank" href="https://www.youtube.com/watch?v=oVOcqQNpOFM&list=PLlRFEj9H3Oj7Bp8-DfGpfAfDBiblRfl5p&index=34&pp=iAQB">simple lists</a>: constructing vectors, indexing and slicing, the len() function
   * lists in detail: indexing, slicing, basic methods (append(), insert(), index()) and functions (len(), sorted(), etc.), del instruction, iterating lists with the for loop, initializing, in and not in operators, list comprehension, copying and cloning
   * lists in lists: matrices and cubes
   * tuples: indexing, slicing, building, immutability
   * tuples vs. lists: similarities and differences, lists inside tuples and tuples inside lists
   * dictionaries: building, indexing, adding and removing keys, iterating through dictionaries as well as their keys and values, checking key existence, keys(), items() and values() methods
   * <a target="_blank" href="https://www.youtube.com/watch?v=dr98iM4app8&list=PLlRFEj9H3Oj7Bp8-DfGpfAfDBiblRfl5p&index=28&pp=iAQB">strings</a> in detail: ASCII, UNICODE, UTF-8 (rendered/transmitted as pairs of bytes in norsk.encode("utf-8")
   * immutability, escaping using the \ character, quotes and apostrophes inside strings, multiline strings, copying vs. cloning, advanced slicing, string vs. string, string vs. non-string, basic string methods (upper(), lowe
   <br /><br />

<a name="Functions"></a>

### 5: Functions (20% - 6 exam items)

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

1. Click "Start Course". https://edube.org/login
1. Scroll down to the bottom of the left menu to click "Python Essentials 2 (PE2) Course Final Exam", then "Final Test".
1. Scroll down and answer all questions.
1. Click "Submit" for your score. Hopefully you'll see "Congratulations, you have passed the assessment."

1. Review items you got wrong.
1. Click "Reset" and answer again until you get 100%, so you know you have overcome incorrect thinking. Answering the questions you already know helps you get <strong>faster</strong>.
1. Answer the post-survey questions so you'll get a "Discount coupon on completion of course" email from noreply@netacad.com containing a discount code unique to you.
1. DOTHIS: Email me the discount code so I can send you the exam code.

1. When you get the exam code, visit <a target="_blank" href="https://pearsonvue.com/pythoninstitute">https://pearsonvue.com/pythoninstitute</a> to register for the exam.
   
   <img alt="python-pcep-badge-729x729.png" width="100" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1734027721/python-pcep-badge-729x729_wucsyk.png" />

   PROTIP: FiriaLabs.com has a <a target="_blank" href="https://firialabs.com/collections/virtual-robotics/products/python-with-virtual-robots">$109/year curriculum</a> of hands-on "missions" to control their robot (both physically and virtually) by running their web-based CodeSpace IDE. It's aligned with the PCEP-30-01 exam.


   <a name="PE2"></a>

   ### Cisco PE2 PCEP-31-0x

   <a target="_blank" href="https://www.netacad.com/courses/python-essentials-2?courseLang=en-US"><img align="right" width="100" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1733810672/cisco_python_essentials_2_ja7h6b.png" /></a>
1. Click "Python Essentials 2"
1. Notice the PCAP (Certified Associate in Python Programming) exam sections:
   1. Modules, Packages, and PIP
   2. Strings, String and List Methods, Exceptions
   3. Object-Oriented Programming
   4. Miscellaneous

<a target="_blank" href="https://edube.org/study/pe2">https://edube.org/study/pe2</a>
   
Repeat as above.

Passing this prep exam gets you a discount coupon for 50% ($150) off the actual $295 exam fee for a cost to you of $144.

   <img alt="python-pcap-badge-729x729.png" width="100" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1734027720/python-pcap-badge-729x729_o8pfz2.png" />

<a name="PE3"></a>

## Continue to Advanced Python (PE3)

1. <a target="_blank" href="https://edube.org/study/pcpp1-1">Python Advanced 1 (Advanced OOP)</a>

   * Classes, instances, attributes, methods, as well as working with class and instance data
   * Shallow and deep operations
   * Abstract classes, method overriding, static and class methods, special methods
   * Inheritance, polymorphism, subclasses, and encapsulation
   * Advanced exception handling techniques
   * The pickle and shelve modules
   * Metaclasses

2. <a target="_blank" href="https://edube.org/study/pcpp1-2">Python Advanced 2 (Best Practices and Standardization</a>
   * Best practices, standardization, and coding conventions
   * How to implement the conventions for code comprising the standard library in the main Python distribution
   * The principles that influence the design of Python code
   * How to write a better and more effective code
   * How to avoid the most common errors and mistakes

3. <a target="_blank" href="https://edube.org/study/pcpp1-3">Python Advanced 3 (Introduction to GUI Programming in Python (TkInter)</a>
   * what GUI is and where it came from
   * how to create Graphical User Interfaces (GUIs) in Python using the tkinter package
   * how to construct a GUI using basic blocks and conventions
   * how event-driven programming works
   * some popular and commonly used GUI environments and toolkits
   * what tkinter is and how to build a GUI with its help
   * how to use widgets, windows, and events
   * how to create basic applications based on tkinter's application life cycle

4. <a target="_blank" href="https://edube.org/study/pcpp1-4">Python Advanced 4 (Working with RESTful APIs)</a>
   * The basic concepts of network programming, REST, network sockets, and client-server communication
   * How to use and create sockets in Python, and how to establish and close the connection with a server
   * What JSON and XML files are, and how they can used in network communication
   * What HTTP methods are, and how to say anything in HTTP
   * How to build a sample testing environment
   * What CRUD is
   * How to build a simple REST client, and how to fetch and remove data from server, add new data to it, and update the already-existing data

5. <a target="_blank" href="https://edube.org/study/pcpp1-5">Python Advanced 5 (File Processing and Communicating with a Program's Environment)</a>
   * sqlite ‒ interacting with SQLite databases
   * xml ‒ creating and processing XML files
   * csv ‒ CSV file reading and writing
   * logging ‒ basics logging facility for Python
   * configparser ‒ configuration file parser

   <a target="_blank" href="https://pythoninstitute.org/pcpp1"><img alt="python-pcpp1-badge-729x729.png" width="100" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1734027721/python-pcpp1-badge-729x729_cc3wrw.png" /></a>
   <a target="_blank" href="https://pythoninstitute.org/pcpp2"><img alt="python-pcpp2-badge-729x729.png" width="100" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1734027722/python-pcpp2-badge-729x729_aozbsd.png" /></a>

<hr />

## Cisco Final Exam 2 Question 27

```
def o(p):
    def q():
        return '*' * p
    return q

r = o(1)
s = o(2)
print(r() + s())
```

This is an example of a <strong>"closure"</strong> in Python.

The inner function o is a <strong>function factory</strong> - it creates functions on the fly and returns functions instead of a value. It allows for dynamic (parameterized) function generation with customizable behavior.

https://realpython.com/factory-method-python/

The inner function q "remembers" the value of p that was passed to the outer function o. Each call to o creates a new function with its own "remembered" value of p.

https://www.youtube.com/watch?v=JIImCgkAQxY&t=61s


## Cisco Final Exam 2 Question 33

Look at the following code:
```
numbers = [0, 2, 7, 9, 10]
# Insert line of code here to produce [0, 4, 49, 81, 100]
print(foo)
```
Which line would you insert in order for the program to produce the expected output?

Choices given for the question suggests use of lambda within filter() and map() functions, all within a list:

a)	foo = lambda num: num * 2, numbers<br />
b)	foo = lambda num: num ** 2, numbers<br />
c)	foo = filter(lambda num: num ** 2, numbers<br />)
d)	foo = map(lambda num: num ** 2, numbers)

Before looking at the answers, we can see that the output sought (in foo) is the
<strong>square</strong> of the input numbers:
   * 2*2 = 4
   * 7*7 = 49
   * 9*9 = 81
   * 10*10 = 100

To calculate a square, we use <tt>num ** 2</tt>

QUESTION: What does the filter function do?

filter() is a built-in function that takes two parameters: a function (such as lambda) and an iterable (like a list, tuple, or set) and returns an iterator containing only the elements for which the function returns True.

The answer yields an internal Python object ID and its value from lambda:

<tt>(<function <lambda> at 0x10042d4e0>, [0, 2, 7, 9, 10])</tt>

<tt>foo = list(filter(lambda num: num ** 2, numbers))</tt>


## Cisco Final Exam 2 Question 34

A more complex question uses a list comprehension <tt>[i*i for i in range(5)]</tt>

```
numbers = [i*i for i in range(5)]
# Insert line of code here to produce [1, 9]
print(foo)
```

Before looking at the answers, what value is contained in the numbers variable?

<tt>range(5)</tt> produces 5 values, from 0 to 4:

<tt>[0, 1, 2, 3, 4]</tt>

QUESTION: What does the <tt>i*i</tt> do?

It multiples i by itself (turning into a square of itself), yielding:

<tt>numbers = [0, 1, 4, 9, 16]</tt>

The question is asking for <tt>[1, 9]</tt> to be produced.

So that's the second and fourth item from the five-item input list,
which are the <strong>even numbers</strong>.

<tt>x % 2</tt> reminders would yield even numbers.

That is shown by:

<tt>print(lambda x: x % 2, numbers)</tt>

which shows internal Python object ID and its value from lambda:

<tt><function <lambda> at 0x1001dc9a0> [0, 1, 4, 9, 16]</tt>


The <tt>list()</tt> function extracts out the values of [0, 1, 4, 9, 16].

Now the choices given for the question:

a)	foo = list(map(lambda x: x // 2, numbers))<br />
b)	foo = list(map(lambda x: x % 2, numbers))<br />
c)	foo = list(filter(lambda x: x / 2, numbers))<br />
d)	foo = list(filter(lambda x: x % 2, numbers))


The filter() function with lambda x: x % 2 does the following:
x % 2 returns 1 (truthy) for odd numbers
x % 2 returns 0 (falsy) for even numbers

This effectively keeps only the odd numbers in the list
So filter(lambda x: x % 2, numbers) will keep only the odd squares: [1, 9]

QUESTION: What does the map function do?

That's put there as a distractor.

The map() function is a built-in Python function that <strong>transforms</strong> iterables by applying a specified function to each item in an iterable.


Perplexity.ai says the answer is b:

<tt>foo = list(filter(lambda x: x % 2, numbers))</tt>


## Cisco Final Exam 1 Question 35

This makes use of some methods for the random package described at
https://docs.python.org/3/library/random.html

```
import random
# Insert lines of code here.
print(a, b, c)
```
Which lines of code would you insert so that it is possible for the program to output the following result:

```
6 82 0
```

Analysis:

Running the code provided is unlikely to yield "6 82 0" because the methods used generate random numbers.

https://docs.python.org/3/library/random.html#random.randint

random.randrange(10, 100, 3)
   # Returns a randomly selected element from range(start, stop, step).

random.randint(0, 100)
   # Returns a random integer N such that a <= N <= b

random.choice((0, 100, 3))
   # Returns a random element from the non-empty sequence

Each set (A,B,C,D) uses output variables a,b,c using different random.methods.

Let's analyze each command to see if it can yield "6 82 0".

A:<br />
a = random.randrange(10, 100, 3)<br />
   # Doesn't qualify because 6 is < 10.<br />
b = random.randint(0, 100)<br />
   # Can qualify because 92 can be between 0 to 100.<br />
c = random.choice((0, 100, 3))<br />
   # Can qualify because 92 can be 0.<br />

B:<br />
a = random.choice((0, 100, 3))<br />
b = random.randrange(10, 100, 3)<br />
   # Doesn't qualify because 82 is not divisible by 3.<br />
c = random.randint(0, 100)<br />

C:<br />
a = random.randint(0, 100)<br />
b = random.randrange(10, 100, 3)<br />
   # Doesn't qualify because 82 is not divisible by 3.<br />
c = random.choice((0, 100, 3))<br />

D:<br />
a = random.randint(0, 100)<br />
b = random.choice((0, 100, 3))<br />
   # Doesn't qualify because 82 is not divisible by 3.<br />
c = random.randrange(10, 100, 3)<br />

REMEMBER: The answer choice is rearranged by the testing software:

a)	B<br />
b)	C<br />
c)	D<br />
d)	A

So no good choices?

<hr />

<a name="Intermediate"></a>

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

<a name="Pro1"></a>

### Professional 1 PCPP-32-101

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

   * What is GUI and where it comes from (<a target="_blank" href="https://realpython.com/python-gui-tkinter/">RealPython.com</a>)
   * Constructing a GUI – basic blocks and conventions - cross platform
   * Event-driven programming
   * Currently used GUI environments and toolkits - built into the Python standard library.
   * <a target="_blank" href="https://docs.python.org/3/library/tkinter.html">python -m tkinter</a> "T Kinter" or "Tk interface"
      - tkinter’s application life cycle <a target="_blank" href="https://www.youtube.com/watch?v=mop6g-c5HEY">VIDEO</a> $15
      - Widgets, windows and events
      - Sample applications <a target="_blank" href="https://github.com/TomSchimansky/CustomTkinter/blob/master/examples/complex_example.py">complexexample</a>
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

<a name="Pro2"></a>

### Professional 2 PCPP-32-

<a target="_blank" href="https://pythoninstitute.org/certification/pcpp-certification-professional/pcpp-32-2-exam-syllabus/">The second of two Professional-level exams (PCPP-32-102 PCPP-32-201)</a>

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

<hr />

## MogoDB Python

MongoDB has free program <a target="_blank" href="https://www.mongodb.com/academia">for Academia</a> and <a target="_blank" href="https://www.mongodb.com/students">for Students</a> in C#, Java, Node.Js, PHP, and Python.

Complete the <a target="_blank" href="https://learn.mongodb.com/learning-paths/mongodb-python-developer-path">MongoDB Python Developer Path</a> online through MongoDB University for a free ticket to take their<br />
$150 <a target="_blank" href="https://learn.mongodb.com/pages/mongodb-associate-developer-exam">MongoDB Associate Developer Exam</a>
of 53 questions in 75 minutes online.

CAUTION: The code makes use of MongoDB Atlas, their cloud-based database which comes with a monthly bill for usage.

* <a target="_blank" href="https://learn.mongodb.com/courses/associate-developer-python-practice-questions">1 hour Practice Questions</a>

<hr />

## Video courses

I'm adding links to YouTube such as [<a target="_blank" href="https://www.youtube.com/watch?v=VQZTZsXk8sA&list=PLlRFEj9H3Oj7Bp8-DfGpfAfDBiblRfl5p&index=3">M</a>] next to topics below.

The most friendly and enthusiastically delivered <a target="_blank" href="https://kodekloud.com/courses/certified-associate-in-python-programming/">"PCAP – Python Certification Course"</a> I think is by <a target="_blank" href="https://www.linkedin.com/in/lydia-hallie/">Lydia Hallie living in Netherlands</a> (https://www.lydiahallie.io). The content is delivered in enthusiastic, perfect English by the 20-something developer whiz, who presents "visualized" diagrams. As with other KodeKloud (subscription) video courses, this class includes labs, Quizzes, Mock Exams, and <a target="_blank" href="https://kodekloud.com/community/c/python/18">Q&A participants</a> to cover Module, Packages and PIP,
String and List Methods, Exceptions, Object Oriented Programming, etc.

<a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/413">
The video course at LinuxAcademy</a> by Keith Thompson references
includes a practice exam.

https://www.udemy.com/topic/certified-associate-in-python-programming-pcap/
Udemy.com's mock PCAP tests

zzz

<hr />

## Retired Python certs

<a target="_blank" href="https://learn.microsoft.com/en-us/certifications/exams/98-381/">
Microsoft's exam 98-381 "Introduction to Programming Using Python" was retired June 30, 2022</a>

Skills measured

   * Perform Operations using Data Types and Operators
   * Control Flow with Decisions and Loops
   * Perform Input and Output Operations
   * Document and Structure Code
   * Perform Troubleshooting and Error Handling
   * Perform Operations Using Modules and Tools


## LinkedIn Certifications Retired

LinkedIn USED TO offer <a target="_blank" href="https://www.linkedin.com/help/linkedin/answer/a507734">several free certifications</a>
based on 30-minute 20-question multiple-choice questions. Retest every 6 months if you don't pass. Good forever.
<a target="_blank" href="https://www.wikiwand.com/en/First_officer_(aviation)">Wikiwand</a>

The unique thing about LinkedIn certifications is that they are form the basis for <strong>more legitimate way to tag individuals</strong> with skills employers and their recruiters search for. So it's worth the time to take them if you want to be found based on your demonstrated skills.

LinkedIn offers <a target="_blank" href="https://www.linkedin.com/help/linkedin/answer/a511367">Python certificate exam</a>.
A sample: https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/python/python-quiz.md
PROTIP: The questions are not the same each time you take the test, so you can take it multiple times to get a higher score.

   * <a target="_blank" href="https://www.youtube.com/watch?v=OTulxiJHp4o">VIDEO: Review one set of questions</a>


## References

https://www.dataquest.io/blog/python-certification/


## More about Python

This is one of a series about Python:

{% include python_links.html %}
