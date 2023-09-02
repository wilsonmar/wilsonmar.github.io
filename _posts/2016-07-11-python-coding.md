---
layout: post
date: "2023-06-20"
file: "python-coding"
title: "Python Coding"
excerpt: "The rules shown in samples using Keywords, arguments, Exception Handling, OS commands, Strings, Lists, Sets, Tuples, Files, Timers"
tags: [python, coding]
image:
# python-samples-1900x500.jpg
  feature: https://user-images.githubusercontent.com/300046/145717691-60b8c765-e0a3-4d63-bf7f-0cb89492c0ee.png
  credit: An Athlete Wrestling with a Python (1877) by Sir Frederic Leighton (1830-1896) at the Tate, London
  creditlink: https://www.wikiwand.com/en/An_Athlete_Wrestling_with_a_Python
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is:

   * Put learning and creativity to work on the <tt>python-samples.py</tt> program described at:<br /><a target="_blank" href="https://wilsonmar.github.io/python-samples">wilsonmar.github.io/python-samples</a>
   <br /><br />

This is the last in my series of articles about Python:

   * Handle the intricacies of <strong>installing Python</strong> and associated utilities (pyenv, pip, venv, conda, etc.) at:<br /><a target="_blank" href="https://wilsonmar.github.io/python-install">wilsonmar.github.io/python-install</a>

   * Handle the intricacies of <strong>installing Jupyter</strong> which runs Python at:<br /><a target="_blank" href="https://wilsonmar.github.io/jupyter">wilsonmar.github.io/jupyter</a>

   * Know who provides Python <strong>coding tutorials</strong> at:<br /><a target="_blank" href="https://wilsonmar.github.io/python-tutorials">wilsonmar.github.io/python-tutorials</a>

   * Analyze the topics covered in <strong>certification tests</strong> at:<br /><a target="_blank" href="https://wilsonmar.github.io/python-certs">wilsonmar.github.io/python-certs</a>

   * Know Python language <strong>coding tricks and techniques</strong> at:<br /><a target="_blank" href="https://wilsonmar.github.io/python-coding">wilsonmar.github.io/python-coding</a>

{% include whatever.html %}

## This is Therapy?

> I wrote this because I have a mental block about programming Python. I'm afraid of Python like I'm afraid of real snakes.

Maybe it's fear of not doing well on coding interviews. 
That's weird because as an SRE I don't have a job where I'm programming Python every day. 

Yet employers make people go through coding challenges anyway like it was a fraternity hazing ritual.

So to get over my Python phobia, like any other aversion therapy, 
I needed to de-sensitize myself and do the very thing I fear. 


## Setup an IDE 

The most popular IDEs for Python are:
   * <a href="https://www.jetbrains.com/pycharm/buy/#personal">PyCharm</a> (FREE or PRO $89/$71/$53 year)

   * VSCode from Microsoft (free) has add-ons for Python, but some fear vulnerabilities from unknown authors 

   * Cloud9 free on-line on AWS (which automatically generates new credentials every 5 minutes or on browser Reset<a target="_blank" href="https://www.coursera.org/learn/building-modern-python-applications-on-aws/lecture/UdnyB/using-temporary-credentials-in-aws-cloud9">*</a>)

   * Stryker?

<a target="_blank" href="https://app.pluralsight.com/guides/visual-studio-code-for-python-development">
BLOG: Setup VSCode for Python Development</a>
https://code.visualstudio.com/docs/editor/extension-marketplace

On IDE such as VSCode you can see key/value pairs without typing <tt>print</tt> statements in code, like an Xray machine:
1. click next to a line number at the left to set a <strong>Breakpoint</strong>.
1. Click "RUN AND DEBUG" to see variables: Locals and Globals.
1. To expand and contract, click ">" and "V" in front of items.
1. "special variables" are dunder (double underline) variables.
1. Under each "function variables" and special variables of their own. For a list, it's append, clear, copy, etc.
1. Under <tt>Globals</tt> are its special variable (such as __file__ for the file path of the program) and class variables, plus an entry for each class defined in the code (such as unittest).
1. 

### Scan for vulnerable Python code

A. PEP8

B. https://github.com/PyCQA/bandit

C. Check for dependencies containing vulnerabilities

<hr />

<a name="ReservedKeywords"></a>

## Reserved Keywords

Listed alphabetically below are words that Python's reserved for itself, so you can't use them as custom variables.

PROTIP: Research and find out what each is about:

*	and 
*	as
*	<a href="#assert">assert</a>
*	async
*	await
*	break - force escape from for/while loop
*	class
*	continue - force loop again next iteration
*	def - define a custom function
*	del - <tt>del list1[2]</tt> # delete 3rd list item, starting from 0.
*	elif - else if
*	else
*	except
*	False - boolean
*	finally - of a try 
*	for = iterate through a loop
*	from
*	global = defines a variable global in scope
*	if
*	import = make the specified package available 
*	in
*	is
*	lambda - if/then/else in one line
*	<a href="#None">None</a>
*	nonlocal
*	not
*	or
*	pass - (as in the game Bridge) instruction to do nothing (instead of return or yield with value)
* raise - <tt>raise NotImplementedError()</tt> throws an exception purposely
*	return
*	True - Boolean
*	try - [VIDEO](https://www.youtube.com/watch?v=NIWwJbo-9_8)
*	while
*	with
*	yield - resumes after returning a value back to the caller to produce a series of values over time.
<br /><br />

The list above can be retrieved (as an array) by this code after typing <tt>python</tt> for the REPL (Read Evaluate Print Loop) interactive prompt:

<pre>python
>>> import keyword
>>> keyword.kwlist
>>> exit()
</pre>

Press control+D to exit anytime.


## Built-in Methods/Functions

Don't create custom functions with these function names reserved.

Know what they do. See 
https://docs.python.org/3/library/functions.html

   * abs() = return absolute value
   * any()
   * all()
   * ascii()
   * bin()
   * bool() = convert to boolean data type
   * bytearray()
   * callable()
   * bytes()
   * chr()
   * compile()
   * classmethod()
   * complex()
   * delattr()
   * dict()
   * dir()
   * divmod()
   * enumerate()
   * staticmethod()
   * filter()
   * eval() = dynamically execute code
   * float() = convert to floating point data type
   * format()
   * frozenset()
   * getattr() = get attribute
   * globals()
   * exec()
   * hasattr()
   * help()
   * hex() = hexadecimal counting
   * hash()
   * input() from human user
   * id()
   * <a target="_blank" href="https://www.programiz.com/python-programming/methods/built-in/isinstance">isinstance()</a> - checks if the object (first argument) is an instance or subclass of classinfo class (second argument). True/False
   * int() = integer
   * issubclass()
   * iter()
   * list() = function
   * locals()
   * <tt>len([1, 2, 3])</tt> is 3.
   * max() = maximum value
   * min() = minimum value
   * map()
   * next()
   * memoryview()
   * object()
   * oct() = octa (8) counting
   * ord()
   * open()
   * pow()
   * print() = output to CLI terminal
   * property()
   * range()
   * repr()
   * reversed()
   * round()
   * set()
   * setattr()
   * slice() - extract substring
   * sorted()
   * str() = convert to string data type
   * sum()
   * tuple() Function
   * type() = display the type
   * vars()
   * zip() = combine two interable arrays
   * _import_()
   * super()

<hr />

<a name="None"></a>

### Use Not None Reserved Word

Returning 0 on error can be confused with the number 0 as a valid response.

To avoid the confusion, return the Python reserved word "None":

<pre>result = safe_square_root(4)
<strong>if result is not None:</strong>   # happy path:
   value = result.pop()  # pop up from stack.
   print(value)
else:  # notice we're not checking for None.
    # calling function does not need to handle error:
    # an error occurred, but encapsulated to be forwarded and processed upstream:
    print("unable to compute square root")
</pre>

Function:

<pre>def safe_square_root(x):
    try:
        return [math.sqrt(x)]   # in a stack.
    except ValueError:
        return None   # using reserved word.
</pre>

The <strong>parameter</strong> (x) is what is declared going into the function.

The value passed through when calling the function is called an <strong>argument</strong>.


<a name="Operators"></a>

## Operators

### Floor division Operators

This is a feature in Python 3.

<tt>11 // 5</tt> uses <a target="_blank" href="https://python-reference.readthedocs.io/en/latest/docs/operators/floor_division.html">"floor division"</a> to return just the integer (integral part) of 2, discarding the remainder. This can be useful to <a target="_blank" href="https://medium.com/geekculture/solving-a-respectable-codility-challenge-in-one-line-of-code-6c331deff8bb">efficiently solve</a> the <a target="_blank" href="https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/">"Prefix Sums CountDiv" coding interview challenge</a>: "Write a function … that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K":

   <pre>def solution(a, b, k):
    return 0 if b == 0 else int(b // k - (a - 1) // k)
   </pre>

Instead of a "brute force" approach which has linear time complexity — O(n), the solution using floor division is constant time - O(1).


<a name="Modulo"></a>

### Modulo operator

<tt>11 % 5</tt> uses the (percent sign), the <strong>modulo operator</strong> to divide 11 by the quotient 5 in order to return 1 because two 5s can go into 11, leaving 1 left over, the remainder.
Modulus is used in circular buffers and hashing algorithms.

<pre>def solution(A, K):
    # A is the array.
    # K is the increment to move.
    result = [None] * len(A)   # initialize result array for # items in array
&nbsp;
    for i in range(len(A)):
        # Use % modulo operator to calculate new index position 0 - 9:
        result[(i + K) % len(A)] = A[i]   
        print(f'i={i} A[i]={A[i]} K={K} result={result} ')
    return result
&nbsp;
print(solution([7, 2, 8, 3, 5], 2))
</pre>

Modulu is also used in <a target="_blank" href="https://github.com/wilsonmar/CodilityInPython/blob/master/solutions/euclideanalgorithm/chocolates_by_numbers.py">this</a>


<a name="WhenNow"></a>

## What Day and Time is it?

The ISO 8601 format contains 6-digit microseconds ("123456") and a Time Zone offset ("-5.00" being five hours West of UTC):

   <ul>2024-02-22T07:53:19.123456-05:00</ul>

<ul><pre>
# import datetime
start = datetime.datetime.now()
# do some stuff ...
end = datetime.datetime.now()
elapsed = end - start
print(elapsed)
# or
print(elapsed.seconds,":",elapsed.microseconds) 
</pre></ul>

Some prefer to display local time with a Time Zone code from Python package pytz or zulu.

PROTIP: Logs should be output in UTC time rather than local time, so would not have the "Zulu" Time Zone reference:

   <ul>2024-02-22T12:53:19.123456</ul>

<tt><strong>datetime.datetime.now()</strong></tt> provides <strong>microsecond</strong> precision:

References:
   * https://www.geeksforgeeks.org/get-current-time-in-different-timezone-using-python/

### Timezone handling

NOTE: On macOS, timezone data are in a binary file at <tt>/etc/localtime</tt>.

Once a datetime has a tzinfo, the astimezone() strategy supplants new tzinfo.

### Timing Attacks

A malicious use of precise microseconds timing code is used by <a target="_blank" href="https://codahale.com/a-lesson-in-timing-attacks/">Timing Attacks</a> based on the time it takes for an application to authenticate a password to determine the algorithm used to process the password. In the case of <a target="_blank" href="http://rdist.root.org/2009/05/28/timing-attack-in-google-keyczar-library/">Keyczar vulnerability found by Nate Lawson</a>, a simple break-on-inequality algorithm was used to compare a candidate HMAC digest with the calculated digest. A value which shares no bytes in common with the secret digest returns immediately; a value which shares the first 15 bytes will return 15 compares later. 

Similarly, <a target="_blank" href="https://belitsoft.com/assets/python-security.pdf">PDF: entropy</a>
<a target="_blank" href="https://user-images.githubusercontent.com/300046/146260721-42584e8b-25d4-4853-a073-295dbbd9ac24.png">
<img alt="python-sample-entropy-times-957x402" src="https://user-images.githubusercontent.com/300046/146260721-42584e8b-25d4-4853-a073-295dbbd9ac24.png"></a>

PROTIP: Use the <a target="_blank" href="https://docs.python.org/3/library/secrets.html#secrets.compare_digest">secrets.compare_digest module</a> (introduced in Python 3.5) to check passwords and other private values. It uses a <strong>constant amount of time</strong> to process every request.

Functions hmac.compare_digest() and secrets.compare_digest() are designed to mitigate against timing attacks.

http://pypi.python.org/pypi/profilehooks

Depth-First Seach (DFS) uses a stack, whereas
Breadth-First Search (BFS) use a queue.

<a name="DurationCalcs"></a>

## Duration calculations

Several packages, functions, and methods are available. They differ by:
   * the type of duration they report: wall-clock time or CPU time
   * how they treat time zone changes during the recording period
   * how much <strong>precision</strong> they report (down to microseconds)
   <br /><br />

* <strong>Wall-clock time</strong> (aka clock time or wall time) is the total time <strong>elapsed</strong> you can measure with a stopwatch. It is the difference between the time at which a program finished its execution and the time at which the program started. It <strong>includes waiting time</strong> for resources.

* <strong>CPU Time</strong> is how much time the CPU was <strong>busy processing</strong> programming instructions, not including time waiting for other task to complete (like I/O operations).

We want both reported.

timeit.default_timer() is time.perf_counter() on Python 3.3+. 

The same program run several times would report similar CPU time but varying wall-clock times due to differences in what else was taking up resources during the runs.

* time.time() returns wall-clock time.
* time.process_time() returns CPU execution time.

To time the difference between calculation strategies, new since Python 3.7 is <a target="_blank" href="https://www.python.org/dev/peps/pep-0564/">PEP 564</a>.

<tt><strong>time.perf_counter()</strong></tt> (abbreviation of performance counter) measures the elapsed time of short duration because it returns 82 nano-second resolution on Fedora 4.12. It is based on <strong>Wall-Clock Time</strong> which includes time elapsed during sleep and is system-wide. The reference point of the returned value is undefined, so that only the difference between the results of consecutive calls is valid.
See https://docs.python.org/3/library/time.html#time.perf_counter

<tt><strong>time.clock</strong></tt> is no longer available since Python 3.8.

<tt><strong>time.time()</strong></tt> has a resolution of <strong>whole seconds</strong>. And in a measurement period  between start and stop times, if the system time is disrupted (such as for daylight savings) its counting is disrupted. time.time() resolution will only become larger (worse) as years pass since every day adds 86,400,000,000,000 nanoseconds to the system clock, which increases the precision loss. It is called "non-monotonic" because falling back on daylight savings would cause it to report time going backwards:

<ul><pre>start_time = time.time()
# your code
e = time.time() - start_time
time.strftime("%H:%M:%S", time.gmtime(e))  # for hours:minutes:seconds
print('{:02d}:{:02d}:{:02d}'.format(e // 3600, (e % 3600 // 60), e % 60))
</pre>
</ul>


### timeit()

For more accurate wall-time capture, the timeit() functions disable the garbage collector.

<tt><strong>timeit.timer()</strong></tt> 
provides a nice output format of <tt>0:00:01.946339</tt> for almost 2 seconds.
   * https://pynative.com/python-get-execution-time-of-program/
   * https://docs.python.org/3/library/timeit.html 
   * https://www.guru99.com/timeit-python-examples.html
   <br /><br />

<ul><pre>import timeit   # built-in
# print addition of first 1 million numbers
def addition():
    print('Addition:', sum(range(1000000)))
# run same code 5 times to get measurable data
n = 5
# calculate total execution time
result = timeit.timeit(stmt='addition()', globals=globals(), number=n)
# calculate the execution time
# get the average execution time
print(f"Execution time is {result / n} seconds")
</pre></ul>

<pre>timeit.timeit(stmt='pass', setup='pass', timer=&LT;default timer>, number=1000000, globals=None)
</pre>

<ul><pre># from timeit import default_timer as timer
# from datetime import timedelta
start = timer()
# do some stuff ...
end = timer()
print(timedelta(seconds=end-start))
</pre></ul>


<a target="_blank" href="https://www.python.org/dev/peps/pep-0418">PEP-418</a> in Python 3.3 added three timers:

<tt><strong>time.process_time()</strong></tt> offers 1 nano-second resolution on Linux 4.12. It does not include time during sleep.

<pre>
# import time
t = time.process_time()
# do some stuff ...
elapsed_time = time.process_time() - t
</pre>

<tt><strong>time.monotonic()</strong></tt> is used for measurements on the order of hours/days, when you don't care about sub-second resolution. It has 81 ns resolution on Fedora 4.12. BTW "monotonic" = only goes forward. See https://docs.python.org/3/library/time.html#time.monotonic


References:
   * https://stackoverflow.com/questions/7370801/how-to-measure-elapsed-time-in-python
   * https://stackoverflow.com/questions/3620943/measuring-elapsed-time-with-the-time-module/47637891#47637891
   * See https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes
   * See https://www.codingeek.com/tutorials/python/datetime-strftime/
   * use the .st_birthtime attribute of the result of a call to os.stat().
   * Obtain pgm start to obtain run duration at end:
   * See https://www.webucator.com/article/python-clocks-explained/
   * for wall-clock time (includes any sleep).
   <br /><br />



<hr />

<a name="TimeComplexity"></a>

### Time Complexity

Time complexity analysis estimates how long it will take for an algorithm to complete its assigned job based on its structure.

Use of Modulus would result in "O(n)" (linear) growth in time to run as the dataset grows. 

Depth-first trees would have steeper (logarithmic) Time Complexity:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/141355255-b2b990cf-46d9-415e-b21a-2c06a156c3eb.png">
<img alt="python-coding-time-complexity-1222x945" src="https://user-images.githubusercontent.com/300046/141355255-b2b990cf-46d9-415e-b21a-2c06a156c3eb.png"></a>

In <a target="_blank" href="https://bigocheatsheet.com/">https://bigocheatsheet.com</a>, in the list of Big O values for sorting, 


<hr />

<a name="Sorting"></a>

### Sorting

To swap values, here's a straight-forward function:

<pre>def swap1(var1,var2):
    var1,var2 = var2,var1
    return var1, var2
</pre>

<pre>>>> swap1(10,20)
>>> 2 1
</pre>

<pre>def swap2(x,y):
    x = x ^ y
    y = x ^ y
    x = x ^ y
    return x, y
</pre>

<pre>>>> swap2(10,20)
(20,10)
</pre>


### Reduce Space Complexity with Dynamic programming

Techniques for calculation of <strong>nested loops</strong> is often used to shown how to reduce run times by using techniques that use more memory space.  Rather than "brute-force" repeatitive computations as in the definition of how to calculate <a target="_blank" href="https://www.youtube.com/watch?v=Nki9hhW-tAI&list=PLNmW52ef0uws098xXRbALoadgcc4bNkDm&index=4">Fibonacci numbers</a>, which by definition is based on numbers preceding it.

   <ul><pre>fib(5) = fib(4) + fib(3)</pre></ul>

Memoization  (sounds  like  memorization)  is  the  technique of  writing  a  function  that  remembers  the  results  of  previous computations. 

Longest Increasing Subsequence (LIS)

That's a technique of "Dynamic Programming" (See https://www.wikiwand.com/en/Dynamic_programming)

Dynamic programming is a catch phrase for solutions based on solving 
successively similar but smaller problems, using algorithmic tasks in which 
the solution of a bigger problem is relatively easy to find, 
if we have solutions for its sub-problems.


<a name="MakingChange"></a>

### Making change


## if/then/else logic

### Avoid divide by zero errors

Use this in every division to ensure that a zero denominator results in falling into "else 0" rather than a "ZeroDivisionError" at run-time:

<pre>def weird_division(n, d):
    # n=numerator, d=denominator.
    return n / d if d else 0
</pre>

<hr />

## Environment Variable Cleansing

To read a file named ".env" at the $HOME folder, and obtain the value from "MY_EMAIL":

<pre>import os
env_vars = !cat ~/.env
for var in env_vars:
    key, value = var.split('=')
    os.environ[key] = value
&nbsp;
print(os.environ.get('MY_EMAIL'))   # containing "johndoe@gmail.com"
</pre>

This code is important because it keeps secrets in your $HOME folder, away from folders that get pushed up to GitHub.

There is the "load_dotenv" package that can do the above, but using native commands mean less exposure to potential attacks.

Remember that attackers can use directory traversal sequences (../) to fetch the sensitive files from the server.

Sanitize the user input using “shlex”

<hr />

## Object-oriented class functions

using .maketrans() and .translate()

   * a.find('a') returns the index where 'a' is found.
   <br /><br />

BTW not everyone is enamored with Object-Oriented Programming (OOP). <a target="_blank" href="https://www.linkedin.com/in/yegor256/">Yegor Bugayenko in Russia</a> recorded "The Pain of OOP" lectures <a target="_blank" href="https://www.youtube.com/watch?v=8FPU_N3LxqA">"Algorithms hurt object thinking" May 2023</a> and <a target="_blank" href=https://www.youtube.com/watch?v=lELJSj9mWbI">#2 Static methods and attributes are evil</a>, a repeat of his 11 March 2020: <a target="_blank" href="https://www.youtube.com/watch?v=aLaDDoT2v54">#1: Algorithms</a> and <a target="_blank" href="https://www.youtube.com/watch?v=lELJSj9mWbI">Lecture #2: Static methods and attributes are evil</a>. His <a target="_blank" href="https://www.elegantobjects.org/">2016 ElegantObjects.org</a> presents an object-oriented programming paradigm that "renounces traditional techniques like null, getters-and-setters, code in constructors, mutable objects, static methods, annotations, type casting, implementation inheritance, data objects, etc."

<hr />

## Blob vs. File vs. Text

A "BLOB" (Binary Large OBject) is a data type that stores binary data such as mp4 videos, mp3 audio, pictures, pdf. So usually large -- up to 2 TB (2,147,483,647 characters).

https://github.com/googleapis/google-cloud-python/issues/1216

https://towardsdatascience.com/image-processing-blob-detection-204dc6428dd

## Azure storage

https://github.com/yokawasa/azure-functions-python-samples

https://chriskingdon.com/2020/11/24/the-definitive-guide-to-azure-functions-in-python-part-1/

https://chriskingdon.com/2020/11/30/the-definitive-guide-to-azure-functions-in-python-part-2-unit-testing/

https://github.com/Azure/azure-storage-python/blob/master/tests/blob/test_blob_storage_account.py

https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-python

### Azure Blobs

NOTE: Update of azure-storage-blob deprecates blockblobservice.

<a target="_blank" href="https://www.youtube.com/watch?v=enhJfb_6KYU">VIDEO</a>:
https://pypi.org/project/azure-storage-blob/

https://www.educative.io/edpresso/how-to-download-files-from-azure-blob-storage-using-python

https://github.com/Azure/azure-sdk-for-python/issues/12744
exists() new feature
<pre>
import asyncio
&nbsp;
async def check():
    from azure.storage.blob.aio import BlobClient
    blob = BlobClient.from_connection_string(conn_str="my_connection_string", container_name="mycontainer", blob_name="myblob")
    async with blob:
        exists = await blob.exists()
        print(exists)
</pre>

### Azure Streams

https://blog.siliconvalve.com/2020/10/29/reading-and-writing-binary-files-with-python-with-azure-functions-input-and-output-bindings/
Reading and writing binary files with Python with Azure Functions input and output bindings


## GCP

https://gcloud.readthedocs.io/en/latest/storage-blobs.html

https://cloud.google.com/appengine/docs/standard/python/blobstore

<hr />

## OpenCV

https://learnopencv.com/blob-detection-using-opencv-python-c/


## Scikit-Image

https://towardsdatascience.com/image-processing-with-python-blob-detection-using-scikit-image-5df9a8380ade


## GIS

https://gsp.humboldt.edu/olm/Courses/GSP_318/11_B_91_Blob.html


<hr />

## String Handling

## Regular Expressions

   * https://www.tutorialspoint.com/python/python_reg_expressions.htm
   * https://www.udemy.com/course/python-quiz/learn/quiz/4649042#overview within quiz
   <br/><br />

### Handle Strings safely

Python has four different ways to format strings.

Using f-strings to format (potentially malicious) <a target="_blank" href="https://snyk.io/blog/python-security-best-practices-cheat-sheet/">user-supplied strings can be exploited</a>:

   <pre>from string import Template
...
greeting_template = Template(“Hello World, my name is $name.”)
greeting = greeting_template.substitute(name=”Hayley”)
   </pre>

So use a way that's less flexible with types and doesn’t evaluate Python statements.

### Data Types

In Python 2, there was an internal limit to how large an integer value could be: 2^63 - 1.

But that limit was removed in Python 3. So there now is no explicitly defined limit, but the amount of available address space forms a practical limit depending on the machine Python runs on. 64-bit

<tt>0xa5</tt> (two character bits) represents a hexdidecimal number 

<tt>3.2e-12</tt> expresses as a a constant exponential value.

Define a d

'foo\'bar' 

### Slicing

For flexibility with alternative languages such as Cyrillic (Russian) character set, 
return just the first 3 characters of a string:

   <pre>letters = "abcdef"
first_part = letters[:3]
   </pre>

## Unicode Superscript & Subscript characters

<pre># Specify Unicode characters:
# superscript
print("x\u00b2 + y\u00b2 = 2")  # x² + y² = 2
&nbsp;
# subscript
print(u'H\u2082SO\u2084')  # H₂SO₄
</pre>

### Superscript

<pre># super-sub-script.py converts to superscript:
def conv_superscript(x):
    normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-=()"
    super_s = "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴾᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿᵒᵖ۹ʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾"
    res = x.maketrans(''.join(normal), ''.join(super_s))
    return x.translate(res)
&nbsp;
print(conv_superscript('Convert all this2'))
# Or you can simply copy the text
</pre>


<hr />

## Functions




<a name="Localization"></a>

## Internationalization & Localization (I18N & L18N)

   * <a target="_blank" href="https://lokalise.com/blog/beginners-guide-to-python-i18n/">BLOG</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=z45ZFCLqx70">VIDEO: Internationalization and localization in Web Applications</a> by James Cutajar
   <br /><br />

Internationalization, aka i18n for the 18 characters between i and n, is the process of adapting coding to support various linguistic and cultural settings:

   * date and time zone calculations
   * numbers and currency
   * Pluralization
   <br /><br />

1. Install

   <pre>pip install gettext</pre>

   NOTE: pip is a recursive acronym that stands for either "Pip Installs Packages" or "Pip Installs Python".

1. Create a folder for each locale in the <tt>./locale</tt> folder.

1. Use Lokalise utility to manage translations through a GUI. It also has a CLI tool to automate the process of managing translations.  https://lokalise.com/blog/lokalise-apiv2-in-practice/

   <pre>locales/
├── el
│   └── LC_MESSAGES
│       └── base.po
└── en
    └── LC_MESSAGES
        └── base.po
   </pre>

1. Add the library

   <pre>import gettext
# Set the local directory
localedir = './locale'
# Set up your magic function
translate = gettext.translation('appname', localedir, fallback=True)
_ = translate.gettext
# Translate message
print(_("Hello World"))
   </pre>

   See https://phrase.com/blog/posts/translate-python-gnu-gettext/

1. Store a master list of locales supported in a Portable Object Template (POT) file, also known as a translator:

   <pre>#: src/main.py:12
msgid "Hello World"
msgstr "Translation in different language"
   </pre>

 
   <pre>>>> unicode_string = u"Fuu00dfbu00e4lle"
>>> unicode_string
Fußbälle
>>> type(unicode_string)
<type 'unicode'>
>>> utf8_string = unicode_string.encode("utf-8")
>>> utf8_string
'Fuxc3x9fbxc3xa4lle'
>>> type(utf8_string)
<type 'str'>



# ALTERNATIVE: TODO: http://babel.pocoo.org/en/latest/numbers.html
#from babel import numbers
# numbers.format_decimal(.2345, locale='en_US')
# Internationalization: http://babel.pocoo.org/en/latest/dates.html
# Requires: pip install Babel
# from babel import Locale
# NOTE: Babel generally recommends storing time in naive datetime, and treat them as UTC.
# from babel.dates import format_date, format_datetime, format_time
# d = date(2007, 4, 1)
# format_date(d, locale='en')     # u'Apr 1, 2007'
# format_date(d, locale='de_DE')  # u'01.04.2007'


### Switch language in browsers

Ensure that your program works correctly when another human language (such as "es" for Spanish, "ko" for Korean, "de" for German, etc.) is configured by the user:

   A. English was selected in browser's Preferences, but the app displays another language.
   
   B. Another language was selected in browser's preferences, and the app displays that language.

To simulate selecting another language in the browser's Preferences in Firefox:

<pre>FirefoxOptions options = new FirefoxOptions();
options.addPreference("intl.accept_languages", language);
driver = new FirefoxDriver(options);
</pre>

Alternately, in Chrome:

<pre>HashMap&LT;String, Object> chromePrefs = new HashMap&LT;String, Object>();
chromePrefs.put("intl.accept_languages", language);
ChromeOptions options = new ChromeOptions();
options.setExperimentalOption("prefs", chromePrefs);
driver = new ChromeDriver(options);
</pre>


### Excel handling using Dictionary object

Alternately, the <a target="_blank" href="https://xlsxwriter.readthedocs.io/working_with_cell_notation.html#cell-utility">Python library to work with Excel spreadsheets</a> translates between Excel cell addresses (such as "A1") and zero-based Python array tuple:

<pre>str = xl_rowcol_to_cell(0, 0, row_abs=True, col_abs=True)  # $A$1
(row, col) = xl_cell_to_rowcol('A1')    # (0, 0)
column = xl_col_to_name(1, True)   # $B
</pre>

However, if you want to avoid adding a dependency,
this function defines a dictionary to convert an Excel column number to a number:<a target="_blank" href="https://stackoverflow.com/questions/4528982/convert-alphabet-letters-to-number-in-python">*</a>

<pre>def letter_to_number(letters):
    letters = letters.lower()
    dictionary = {'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26}
    strlen = len(letters)
    if strlen == 1:
        number = dictionary[letters]
    elif strlen == 2:
        first_letter = letters[0]
        first_number = dictionary[first_letter]
        second_letter = letters[1]
        second_number = dictionary[second_letter]
        number = (first_number * 26) + second_number
    elif strlen == 3:
        first_letter = letters[0]
        first_number = dictionary[first_letter]
        second_letter = letters[1]
        second_number = dictionary[second_letter]
        third_letter = letters[2]
        third_number = dictionary[third_letter]
        number = (first_number * 26 * 26) + (second_number * 26) + third_number
    return number
</pre>

REMEMBER: Square brackets are used to reference by value.

Instead of defining a dictionary, you can use a property of the ASCII character set, in that the Latin alphabet begins from its 65th position for "A" and its 97th character for "a", obtained using the ordinal function:

<pre>ord('a')  # returns 97
ord('A')  # returns 65</pre>

This returns 'a' :

<pre>chr(97)</pre>

### More dictionaries:

<pre># Eastern European countries: SyntaxError: invalid character in identifier
ee_countries={"Ukraine": "43.7M", "Russia": "143.8M", "Poland": "38.1M", "Romania": "19.5M", "Bulgaria": "6.9M", "Hungary": "9.6M", "Moldova": "4.1M"}
float(ee_countries["Moldova"].rstrip("M"))  # 4.1
ee_countries.get("Moldova")   # 4.1M
len(ee_countries.items())     # 7 are immutable in dictionary
min(ee_countries.items())     # ('Bulgaria', '6.9M') the smallest country
max(ee_countries.values())  # largest country = 9.6M ?
max(ee_countries.keys())    # largest key length = Ukraine
sorted(ee_countries.keys(),reverse=True) # ['Ukraine', 'Russia', 'Romania', 'Poland', 'Lithuania', 'Latvia', 'Hungary', 'Bulgaria']
&nbsp;
del ee_countries["Estonia"]
ee_countries.pop["Bulgaria"]
ee_countries["Latvia"] = "1.9M"
ee_countries.update[['Lithuania', '2.8M'],['Belarus' , '9.4M']]
ee_countries.popitem()     # remove item last added
len(ee_countries.items())  # 8 are immutable in dictionary
ee_countries["Bulgaria"]="7M"
&nbsp;
ee2=ee_countries.copy()
ee_countries.clear()  # remove all
print(ee_countries)   # {} means empty 
</pre>

https://www.codesansar.com/python-programming-examples/sorting-dictionary-value.htm


## File open() modes

The Python runtime does not enforce type annotations introduced with Python version 3.5. But type checkers, IDEs, linters, SASTs, and other tools can benefit from the developer being more explicit. 

Use this type checker to discover when the parameter is outside the allowed set and warn you:

<pre>MODE = Literal['r', 'rb', 'w', 'wb']
def open_helper(file: str, mode: MODE) -> str:
    ...
    open_helper('/some/path', 'r')  # Passes type check
    open_helper('/other/path', 'typo')  # Error in type checker
</pre>

BTW Literal[…] was introduced with version 3.8 and is not enforced by the runtime (you can pass whatever string you want in our example). 

PROTIP: Be explicit about using text (vs. binary) mode.

<pre>with open("D:\\myfile.txt", "w") as myfile:
    myfile.write("Hello")
</pre>

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th>Character</th><th>Meaning</th></tr>
<tr valign="top"><td>b</td><td>binary (text mode is default)</td></tr>
<tr valign="top"><td>t</td><td>text mode (default)</td></tr>
<tr valign="top"><td>r</td><td>read-only (the default)</td></tr>
<tr valign="top"><td>+</td><td>open for updating (read and write)</td></tr>
<tr valign="top"><td>w</td><td>write-only after truncating the file</td></tr>
<tr valign="top"><td>a</td><td>append</td></tr>
<tr valign="top"><td>a+</td><td>opens a file for both appending and reading at the same time</td></tr>
<tr valign="top"><td>x</td><td>open for exclusive creation, failing if file already exists</td></tr>
<tr valign="top"><td>U</td><td>universal newlines mode (used to upgrade older code)</td></tr>
</table>

<strong>myfile.write()</strong> returns the count of <strong>codepoints</strong> (characters in the string), not the number of bytes.

<strong>myfile.read(3)</strong> returns 3 line endings (\n) in string lines.

<strong>myfile.readlines()</strong> returns a list where each element of the list is a line in the file.

<strong>myfile.truncate(12)</strong> keeps the first 12 characters in the file and deletes the remainder of the file.

<strong>myfile.close()</strong> to save changes.

<strong>myfile.tell()</strong>  tells the current position of the cursor.


<a name="CopyFile"></a>

## File Copy commands

The shutil package provides fine-grained control for copying files<a target="_blank" href="https://stackoverflow.com/questions/123198/how-do-i-copy-a-file-in-python#comment52101363_123238">:</a>

   <ul><pre><strong>import shutil</strong></pre></ul>

This table summarizes the differences among shutil commands:

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th>&nbsp;</th><th>Dest. dir.</th><th>Copies metadata</th><th>Preserve permissions</th><th>Accepts file object</th></tr>
<tr valign="top" align="center"><td align="left"><a href="#shutil.copyfile"><tt>shutil.copyfile</tt></a></td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr valign="top" align="center"><td align="left"><tt>shutil.copyfileobj</tt></td><td>-</td><td>-</td><td>-</td><td><strong>Yes</strong></td></tr>
<tr valign="top" align="center"><td align="left"><tt>shutil.copy</tt></td><td>Yes</td><td>-</td><td><strong>Yes</strong></td><td>-</td></tr>
<tr valign="top" align="center"><td align="left"><tt>shutil.copy2</tt></td><td>Yes</td><td><strong>Yes</strong></td><td><strong>Yes</strong></td><td>-</td></tr>
</table>

See https://docs.python.org/3/library/filesys.html

<a name="FileMetadata"></a>

### File Metadata

Metadata includes Last modified and Last accessed info (mtime and atime). 
Such information is maintained at the folder level.

For all commands, if the destination location is not writable, an IOError exception is raised. 

<a name="shutil.copyfile"></a>

* To copy a file <strong>within the same folder</strong> as the source file:

   <pre><strong>shutil.copyfile(src, dst)</strong></pre>

   buffer cannot be when copying to another folder.

* To copy a file within the same folder and <strong>buffer</strong> file-like objects (with a read or write method, such as StringIO):

   <pre><strong>shutil.copyfileobj(src, dst)</strong></pre>

Notice both individual file copy commands do not copy over permissions from the source file.
Both folder-level copy commands below carry over permissions.

CAUTION: folder-level copy commands do not buffer.

* PROTIP: To copy a file to another folder and <strong>retain metadata</strong>:

   <pre><strong>file_src = 'source.txt'  
f_src = open(file_src, 'rb')
file_dest = 'destination.txt'  
f_dest = open(file_dest, 'wb')
shutil.copyfileobj(f_src, f_dest)  
   </strong></pre>

   The destination needs to specify a <strong>full path</strong>.

* To copy a file to another folder and <strong>NOT retain <a href="#FileMetadata">metadata</a></strong>:

   <pre><strong>shutil.copy2(src, "/usr", *, follow_symlinks=True)</strong></pre>

* You can use the operating system shell copy command, but there is the overhead of opening a pipe, system shell, or subprocess, plus poses a potential security risk.

   <pre><strong># In Unix/Linux
os.system('cp source.txt destination.txt')  \# https://docs.python.org/3/library/os.html#os.system
status = subprocess.call('cp source.txt destination.txt', shell=True) 
&nbsp;
# In Windows
os.system('copy source.txt destination.txt')
status = subprocess.call('copy source.txt destination.txt', shell=True)  \# https://docs.python.org/3/library/subprocess.html
</strong></pre>

* Pipe open has been deprecated. https://docs.python.org/3/library/os.html#os.popen 

   <pre><strong># In Unix/Linux
os.popen('cp source.txt destination.txt')
&nbsp;
# In Windows
os.popen('copy source.txt destination.txt')
</strong></pre>


## Error Exception handling

Handle file not found exception <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=42650a6d-6632-4ae7-8b4f-88fa80ce6633">:</a> <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=23a27b06-78be-41d9-82d7-eb73fb4f414f">:</a>

<pre># if file doesn't exist in folder, create it:
import os
import sys
&nbsp;
def make_at(path p, dir_name)
    original_path = os.getcwd()
    try:
        os.chdir(path)
        os.makedir(dir_name)
    except OSError as e:
        print(e, file=sys.stderr)
        raise
    finally:  #clean-up no matter what:
        os.chdir(original_path)</pre>

## Operating system

There are platform-specific modules<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=a2b5fcba-79c7-4602-9de2-dd84a46033d">:</a>

   * Windows msvcrt (Visual C run-time)
   * MacOS sys, tty, termios, etc.
   <br /><br />

To determine what operating system to wait for a keypress,
use <a target="_blank" href="https://docs.python.org/3/library/platform.html#platform.system">sys.platform</a>, which has finer granularity than sys.name because it uses uname<a target="_blank" href="https://docs.python.org/library/sys.html#sys.platform">:</a>

   <ul><pre># https://docs.python.org/library/sys.html#sys.platform
from sys import platform
if platform == "linux" or platform == "linux2":
    # linux
elif platform == "darwin":
    # MacOS
elif platform == "win32":
    # Windows
elif platform == "cygwin":
    # Windows running cygwin Linux emulator
   </pre></ul>

http://code.google.com/p/psutil/
to do more in-depth research.


PROTIP: This is an example of Python code issuing a Linux operating system command:

<pre>if run("which python3").find("venv") == -1:
    # something when not executed from venv
</pre>

<a target="_blank" href="https://belitsoft.com/assets/python-security.pdf">SECURITY PROTIP</a>: Avoid using the built-in Python function "eval" to execute a string. There are no controls to that operation, allowing malicious code to be executed without limits in the context of the user that loaded the interpreter (really dangerous):

   <ul><pre>import sys
import os
try:
    eval("__import__('os').system('clear')", {})
    #eval("__import__('os').system(cls')", {})
    print "Module OS loaded by eval"
except Exception as e:
    print repr(e)
   </pre></ul>



## Command generator

Create custom CLI commands by parsing a command help text into cli code that implements it.

Brilliant.

See <a target="_blank" href="https://github.com/docopt/docopt">
docopt from https://github.com/docopt/docopt</a> described at <a target="_blank" href="http://docopt.org/">http://docopt.org</a>

## CLI code enhancement

Python's built-in mechinism for coding Command-line menus, etc. is difficult to understand.
So some have offered alternatives:

* <a target="_blank" href="http://builtoncement.com/">cement</a> - CLI Application Framework for Python.
* <a target="_blank" href="http://click.pocoo.org/dev/">click</a> - A package for creating beautiful command line interfaces in a composable way.
* <a target="_blank" href="https://docs.openstack.org/developer/cliff/">cliff</a> - A framework for creating command-line programs with multi-level commands.
* <a target="_blank" href="http://docopt.org/">docopt</a> - Pythonic command line arguments parser.
* <a target="_blank" href="https://github.com/google/python-fire">python-fire</a> - A library for creating command line interfaces from absolutely any Python object.
* <a target="_blank" href="https://github.com/jonathanslenders/python-prompt-toolkit">python-prompt-toolkit</a> - A library for building powerful interactive command lines.


## Handling Arguments

For parsing parameters supplied by invoking a Python program, 
the command-line arguments and options/flags:

   <ul>python myprogram.py -v -LOG=info
   </ul>

The <strong>argparse</strong> package comes with Python 3.2+ (and the optparse package that comes with Python 2), it's difficult to understand and limited in functionality.

https://www.geeksforgeeks.org/argparse-vs-docopt-vs-click-comparing-python-command-line-parsing-libraries/

Alternatives: to Argparse are Docopt, Click, Client, <a target="_blank" href="https://pypi.org/project/argh/">argh</a>, and many more.

Instead, <a target="_blank" href="https://dbader.org/blog/python-commandline-tools-with-click">
Dan Bader recommends</a> the use of 
<a target="_blank" href="http://click.pocoo.org/6/why/">click.pocoo.org/6/why</a>
click custom package (from Armin Ronacher).

Click is a Command Line Interface Creation Kit for arbitrary nesting of commands, automatic help page generation. It supports lazy loading of subcommands at runtime. It comes with common helpers (getting terminal dimensions, ANSI colors, fetching direct keyboard input, screen clearing, finding config paths, launching apps and editors, etc.)

Click provides <strong>decorators</strong> which makes reading of code very easy. 

The "@click.command()" :

   <pre>\# cli.py
import click
&nbsp;
@click.command()
def main():
    print("I'm a beautiful CLI ✨")
&nbsp;
if __name__ == "__main__":
    main()
   </pre>



<a name="Cloud"></a>

## Python in the Cloud 

### On AWS: 

   Tutorials:
   * <a target="_blank" href="https://www.botmetric.com/blog/aws-cloud-automation-python-boto3-scripts/">Intro to Boto3</a>
   * https://linuxacademy.com/howtoguides/posts/show/topic/14209-automating-aws-with-python-and-boto3 has a whole video course
   * <a target="_blank" href="https://realpython.com/python-boto3-aws-s3/">Python, Boto3, and AWS S3: Demystified</a> by Ralu Bolovan
   * [DataCamp's intro to AWS and Boto3 VIDEO](https://www.youtube.com/watch?v=SmilJDG4B_8)
   * [Johnny Chiver's Beginner's Guide](https://www.youtube.com/watch?v=aSLhZHZQz1I) makes use of Cloud9 in his main.py:

<pre>import boto3
s3_client = boto3.client('s3')
s3_client.create_bucket(Bucket="johnny-chivers-test-1-boto", CreateBucketConfiguration={'LocationConstraint':'eu-west-1'})
response = s3_client.list_buckets()
print(response)
</pre>

   * [Sandip Das's Boto3 with CI CD](https://www.youtube.com/watch?v=iLv1vJd4URg)
   * [Automating AWS IAM user creation by Prashant Kakhera](https://www.youtube.com/watch?v=AZBoqleMUDM)
   * [AWS has App Runner](https://aws.amazon.com/apprunner) [Overview](https://www.youtube.com/watch?v=zbJnuArKAuY)
   [Hands-on lab](https://www.youtube.com/watch?v=Muq3m0tzbQI)
   <br /><br />

### On Azure:

   * [Microsoft Azure Overview: Introduction series by Alex at Sigma Coding](https://www.youtube.com/watch?v=Jne4L3Dbzd8&list=PLcFcktZ0wnNk7XuHP9_il8LzS3lkaq-ZG) references https://github.com/areed1192/azure-sql-data-project covers Azure (Serverless) Functions in Python
   * https://docs.microsoft.com/python/azure/
   * https://azure.microsoft.com/resources/samples/?platform=python
   * https://github.com/Azure/azure-sdk-for-python/wiki/Contributing-to-the-tests
   * https://azure.microsoft.com/en-us/support/community/
   <br /><br />

1. https://portal.azure.com/
1. Sign in
1. https://portal.azure.com/#view/Microsoft_Azure_Billing/SubscriptionsBlade
1. https://aka.ms/azsdk/python/all lists available packages.
   
   <tt>pip install azure</tt> has been deprecated from 
   <a target="_blank" href="https://github.com/Azure/azure-sdk-for-python/">https://github.com/Azure/azure-sdk-for-python/pulls</a> 

   ### New Program Authorization

   PROTIP: Each Azure services have different authenticate.

1. [Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) for MacOS:

   brew install azure-cli

   https://www.cbtnuggets.com/it-training/skills/python3-azure-python-sdk by Michael Levan
   https://www.youtube.com/watch?v=we1pcMRQwD8

   <pre>from azure.cli.core import get_default_cli as azcli
   # Instead of > az vm list -g Dev2
   azcli().invoke(['vm','list','-g', 'Dev2'])
   </pre>

   ### 

   <br /><br />

[Using Digital Blueprints with Terraform and Microsoft Azure](https://www.youtube.com/watch?v=Xd2lOwipmNA&t=313s)

<a name="Sets"></a>

## Sets: Day of week Set handling

set([3,2,3,1,5]) # auto-renumbers with duplicates removed

<pre>day_of_week_en = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
day_of_week_en.append("Luv")
days_in_week=len(day_of_week_en)
print(f"{days_in_week} days a week" )
print(day_of_week_en)
&nbsp;
x=0
for index in range(8):
    print("{0}={1}".format(day_of_week_en[x],x))
    x += 1
</pre>

<a name="Lists"></a>

## Lists

Use a list instead for a collection of similar objects.

<a target="_blank" href="https://python.plainenglish.io/python-probably-more-than-90-of-coders-are-missing-this-easy-trick-1f5e1c2d8561">
Prefix what to print with an asterisk</a> so it is passed as separate values so a space is added in between each value.

<pre>li = [10, 20, 30, 40, 50]
li = list(map(int, input().split()))
print(*li)
</pre>

## Tuples

Values are passed to a function with a single variable.
So to multiple values of various types to or from a function, we use a
<strong>tuple</strong> - a fixed-sized collection of related items (akin to a "struct" in Java or "record"). 

PROTIP: When adding a single value, include a comma at the end to avoid it being classified as a string:


1. REMEMBER: When storing a single value in a Tuple, the comma at the end makes it not be classified as a string:

   <pre>mytuple=(50,) 
type(mytuple)
   </pre>
   
   <pre>&LT;class 'tuple'></pre>

1. Store several items in a single variable:

   <pre>person = ('john', 'doe', 40)
(a, b, c) = person
person
a
person[0::2]  # every 2 from 2nd item  =  ('john', 40)
person.index(40)  # index of item containing 40 = 2
   </pre>

## Range

   <pre>myrange=range(3)
type(myrange)
myrange  # range(0, 3)
print(myrange)  # range(0, 3)
list(myrange)   # [0, 1, 2] from zero
myrange=range(1,5)
list(myrange)   # [1, 2, 3, 4] # excluding 5!
myrange=range(3,15,2)
list(myrange)         # [3, 5, 7, 9, 11, 13]  # skip every 2
list(myrange)[2]      # 7
print( range(5,15,4)[::-1] )  # range(13, 1, -4)
   </pre>

   &LT;class 'range'>


## List comprehension

<pre><strong>squares = [x * x for x in range(10)]
</strong></pre>

would output:
<pre>[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</pre>


<hr />


## Classes and Objects

   * <a target="_blank" href="https://www.learnpython.org/en/Classes_and_Objects">https://www.learnpython.org/en/Classes_and_Objects</a>
   * https://app.pluralsight.com/library/courses/core-python-classes-object-orientation
   * <a target="_blank" href="https://github.com/austin-taylor/code-vault/blob/master/python_expert_notebook.ipynb">The Playbook of code</a> shown on <a target="_blank" href="https://www.youtube.com/watch?v=7lmCu8wz8ro" title="Jul 5, 2017 [1:52:02]">2 hr VIDEO: What Does It Take To Be An Expert At Python?</a> by James Powell (@dontusethiscode) at the PyData conference.
   <br /><br />

Encapsulation is a software design practice of bundling the data and the methods that operate on that data.

Methods encode behavior (programmed logic) of an object and are represented by functions.

Attributes encode the state of an object and are represented by variables.

MEMONIC: Scopes: LEGB
   * <strong>L</strong>ocal - Inside the current function
   * <strong>E</strong>nclosing - Inside enclosing functions
   * <strong>G</strong>lobal - At the top level of the module
   * <strong>B</strong>uilt-in - In the special builtins module


### Metaclasses

metaclasses: 18:50

metaclasses(explained): 40:40

### Decorators

   * <a target="_blank" href="https://www.youtube.com/watch?v=PJQ5XopgNog&list=RDCMUC6HfeAa0vWeSWS6IcNAjZ2A&start_radio=1&rv=PJQ5XopgNog&t=31">VIDEO: Python Decorators 1: The Basics</a> (in Jupyter notebook)
   * <a target="_blank" href="https://www.youtube.com/watch?v=7lmCu8wz8ro&t=45m20s" title="Jul 5, 2017 [1:52:02]">VIDEO</a>
   * https://www.youtube.com/watch?v=yNzxXZfkLUA
   * https://app.pluralsight.com/course-player?clipId=a5072421-b21f-4043-8164-e148e401492b
   <br /><br />

The string starting with "@" before a function definition 

Decorators allow changes in behavior without changing the code.

Decorators take advantage of Python being live dynamically compiled.

There are limitations, though.

By default, functions within a class need to supply "self" as the first parameter.

   <ul><pre>class MyClass:
   attribute = "class attribute"
   ...
   def afunction(self,text_in):
       cls.attribute = text_in
   </pre></ul>

<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=d7eb69f7-37d3-4893-8773-79e73642064b">VIDEO</a>: 
However, decorator <tt><strong>@classmethod</strong></tt> enable "cls" to be accepted as the first argument:

   <ul><pre>def afunction(self,text_in):
       cls.attribute = text_in
   </pre></ul>

   The @classmethod is used for access to the class object to call other class methods or the constuctor.

There is also <tt><strong>@staticmethod</strong></tt> when access is not needed to class or instance objects.

### Generators

   * <a target="_blank" href="https://www.youtube.com/watch?v=Ut0-_eMVakU&list=RDCMUC6HfeAa0vWeSWS6IcNAjZ2A&index=4">VIDEO</a>
   * https://www.youtube.com/watch?v=bD05uGo_sVI
   * https://www.youtube.com/watch?v=vBH6GRJ1REM Python dataclasses will save you HOURS, also featuring attrs
   <br /><br />

generator: 1:04:30

### Context Manager

context manager: 1:22:37


<hr />

<a target="_blank" href="https://www.codementor.io/alibabacloud/">https://www.codementor.io/alibabacloud/ how-to-create-and-deploy-a-pre-trained-word2vec-deep-learning-rest-api-oekpbfqpj</a>

<hr />

## Secure coding

https://snyk.io/blog/python-security-best-practices-cheat-sheet/

1. Always sanitize external data

1. Scan your code

1. Be careful when downloading packages

1. Review your dependency licenses

1. Do not use the system standard version of Python

1. Use Python’s capability for virtual environments

1. Set DEBUG = False in production

1. Be careful with string formatting

1. (De)serialize very cautiously

1. Use Python type annotations


## Insecure code in Pygoat

https://awesomeopensource.com/project/guardrailsio/awesome-python-security

https://github.com/mpirnat/lets-be-bad-guys
from 2017

https://github.com/fportantier/vulpy
from 2020 in Brazil

<a target="_blank" href="https://owasp.org/www-project-pygoat/">
OWASP's PyGoat</a> is written using Python with Django web framework.
Its code intentionally contains both traditional web application vulnerabilities (i.e. XSS, SQLi) and <a target="_blank" href="https://wilsonmar.github.io/owasp-testing">OWASP vulnerabilities</a>
The top 10 OWASP vulnerabilities in 2020 are:

   • A1:2017-Injection
   • A2:2017-Broken Authentication
   • A3:2017-Sensitive Data Exposure
   • A4:2017-XML External Entities (XXE)
   • A5:2017-Broken Access Control
   • A6:2017-Security Misconfiguration
   • A7:2017-Cross-Site Scripting (XSS)
   • A8:2017-Insecure Deserialization
   • A9:2017-Using Components with Known Vulnerabilities
   • A10:2017-Insufficient <a href="#Logging">Logging</a> & Monitoring
   <br /><br />

Instructions at https://github.com/adeyosemanputra/pygoat

1. Obtain the Docker image:

   <pre>docker pull pygoat/pygoat
docker run --rm -p 8000:8000 pygoat/pygoat
   </pre>

   <pre>Watching for file changes with StatReloader
Performing system checks...
&nbsp;
System check identified no issues (0 silenced).
November 05, 2021 - 14:57:11
Django version 3.0.14, using settings 'pygoat.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
   </pre>

1. In the browser localhost:

   <pre>http://127.0.0.1:8000
   </pre>


To learn how to code securely, PyGoat has an area where you can see the source code to determine where the mistake was made that caused the vulnerability and allows you to make changes to secure it.



https://owasp.org/www-pdf-archive/OWASP-AppSecEU08-Petukhov.pdf

https://rules.sonarsource.com/python/tag/owasp/RSPEC-4529
   3400+ static analysis rules across 27 programming languages


<a name="Logging"></a>

## Logging for Monitoring

   * https://github.com/python/cpython/tree/3.6/Lib/logging
   * https://realpython.com/python-logging-source-code/
   * https://infosecwriteups.com/most-common-python-vulnerabilities-and-how-to-avoid-them-5bbd22e2c360
   * https://docs.python.org/3/howto/logging.html#configuring-logging
   * <a target="_blank" href="https://www.loggly.com/ultimate-guide/python-logging-basics/">
   <br /><br />

It is estimated that it can take up to 200 days, and often longer, between attack and detection by the attacked. 
In the meantime, attackers can tamper with servers, corrupt databases, and steal confidential information. 

"Insufficient Logging and Monitoring" is among the top 10 OWASP.

The vulnerability includes ineffective integration of security systems,
which give attackers a way to pivot to other parts of the system to maintain persistent threats.

Prevent that by emitting a log entry for each activity such as: add, change/update, delete.

Use the <a target="_blank" href="https://realpython.com/python-logging/">Python logging module</a>:

<pre>import logging
</pre>

To emit each log entry, use the loggin method so that logs can be filtered by level. In order of severity:

   <pre>logging.critical("CRITICAL - Can't ... Aborting!") # A serious error. The program itself may be unable to continue running. Displayed even in production runs.
logging.error("ERROR - Program cannot do it!") # A serious problem: the software is not been able to perform some function. Displayed even in production runs.
logging.warning("WARNING - unexpected!")  # The software is still working as expected. But may be a problem in the near future (e.g. ‘disk space low’). 
logging.info("INFO - version xxx")  # Provides confirmation that things are working as expected.
logging.debug('DEBUG - detailed information such as each iteration in a loop used during troubleshooting at the lowest level of detail.')
   </pre>

At run-time, specify the highest level to display during that run:

   <pre>python3 pylogging.py <strong>--log=INFO</strong>
   </pre>

   * CRITICAL = 50
   * FATAL = CRITICAL
   * ERROR = 40
   * WARNING = 30
   * WARN = WARNING
   * INFO = 20
   * DEBUG = 10
   * NOTSET = 0
   <br /><br />

CRITICAL, FATAL, and ERROR are always shown.

WARN (WARNING) is the default verbosity level.
Set the default:
<ul>
   <pre>logging.basicConfig(level=logging.WARNING)
logging.basicConfig(format='%(asctime)s %(levelname)s - %(message)s', datefmt='%H:%M:%S')
#logging.basicConfig(level=logging.DEBUG,filename='example.log')
</pre>
   </pre>
</ul>

Also, provide a run-time option for outputing to a file:

   <pre>logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')
   </pre>

CAUTION: Be careful to not disclose sensitive information in logs.
Encrypt plaintext.

The logging module also allows you to capture the full stack traces in an application.


<tt>-q</tt> (for -quiet) suppresses INFO headings.

<tt>-v</tt> (for -verbose) to display DEBUB messages.

<tt>-vv</tt> to display TRACE messages.



<a name="assert"></a>

## Use assert only during testing

   * <a target="_blank" href="https://app.pluralsight.com/guides/asserts-assert-downside-defensive-programming-in-python">"Asserts and Assert Downsides to Defensive Programming in Python"</a>
   <br /><br />

PROTIP: By default, python executes with “_debug_” = “true” so asserts are processed by the Python interpreter.
But in production when the program is run in optimized mode, “_debug_” = “true” so assert statements are ignored. 

So avoid coding <a target="_blank" href="https://itnext.io/common-python-security-problems-ffedbae7b11c">the sample code below</a> which uses a comma that acts as an if/then:

<pre>def get_clients(user):
    assert is_superuser(user),  # user is not a member of superuser group
    return db.lookup('clients')
</pre>

In the above code, the user ends up with access to a resource with improper authentication controls.

Instead (to remediate), use a if-else logic to implement true and false conditions.

https://app.pluralsight.com/library/courses/using-unit-testing-python/table-of-contents


## Concurrency Programming

https://app.pluralsight.com/library/courses/python-concurrency-getting-started


## Bit-wise operators

https://app.pluralsight.com/course-player?clipId=5802d30b-69a9-4679-8594-53854739368a

https://techstudyslack.com/
a Slack for people studying tech

## Stegnography

https://packetstormsecurity.com/files/165102/Stegano-0.10.1.html
Stegano implements two methods of hiding: using the red portion of a pixel to hide ASCII messages, and using the Least Significant Bit (LSB) technique. It is possible to use a more advanced LSB method based on integers sets. The sets (Sieve of Eratosthenes, Fermat, Carmichael numbers, etc.) are used to select the pixels used to hide the information.

## Parallel Computing

Multithreading, Multiprocessing, Concurrency & Parallel programming in Python for high performance.

Use multiple threads, processes, mutexes, barriers, waitgroups, queues, pipes, condition variables, deadlocks, and more.

https://www.udemy.com/course/parallel-computing-in-python/

On LinkedIn Learning: "<a target="_blank" href="https://github.com/bomonike/python-parallel-concurrent
">Python Parallel and Concurrent Programming</a>" <a target="_blank" href="https://www.linkedin.com/learning/python-parallel-and-concurrent-programming-part-1/" title="Released: 8/29/2019">2h 11m Part 1</a> and <a target="_blank" href="https://www.linkedin.com/learning/python-parallel-and-concurrent-programming-part-2/">Part 2</a> (using Python 3.7.3 on Windows PC machines) 
by Barron Stone and Olivia Chiu Stone Advanced

* A Mutex can only be acquired/released by the same thread.<br />
   A Semaphore can be acquired/released by different threads.


### Vectors instead of loops

https://medium.com/codex/say-goodbye-to-loops-in-python-and-welcome-vectorization-e4df66615a52


## ODBC

Java programs used JDBC to create databases within Salesforce, Microsoft Dynamics 365, Zoho CRM, etc.

To create and read/write such databases from within Python programs running under 32-bit and 64-bit Windows, macOS, Linux, use ODBC (Open Database Connect) API functions in:

   * https://wiki.python.org/moin/ODBC
   * https://www.progress.com/tutorials/odbc/connecting-to-odbc-databases-on-windows-from-python-using-turbodbc Turbodbc module for Windows
   * Makes use of the Adventureworks sample SQL database Contoso Retail Data Warehouse run in Azure SQL Data Warehouse https://github.com/microsoft/sql-server-samples/tree/master/samples/databases/contoso-data-warehouse called instead of Visual Studio 2015 (or higher) with the latest SSDT installed
   * wide-world-importers sample database?
   <br /><br />

Pyodbc by <a target="_blank" href="https://www.linkedin.com/in/michael-kleehammer-73014b1/">Michael Kleehammer</a>:

   * https://github.com/mkleehammer/pyodbc/
   * https://learn.microsoft.com/en-us/sql/connect/python/pyodbc/python-sql-driver-pyodbc?view=sql-server-ver16
   * <a target="_blank" href="https://www.devart.com/odbc/python/">Devart ODBC Driver for Python (<strong>pyodbc</strong>)</a> library. See <a target="_blank" href="https://docs.devart.com/odbc/sqlserver/python.htm">docs</a>:

   Functions:

   * connect() to create a connection to the database
   * cursor() to create a cursor from the connection
   * execute() to execute a select statement
   * fetchone() to retrieve rows from the query


## Referenes

https://python.plainenglish.io/the-easiest-ways-to-generate-a-side-income-with-python-60104ad36998

https://learnpython.com/blog/9-best-python-online-resources-start-learning/

## More about Python

This is one of a series about Python:

{% include python_links.html %}
