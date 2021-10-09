---
layout: post
title: "Python Coding"
excerpt: "PROTIPs and tricks from various learning resources"
tags: [python, coding]
date: "2021-10-09"
file: "python-coding"
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

Here are various coding tips I've seen while going through [Python programming classes](/python-tutorials/) after [installing Python](/python-install/) and [Jupyter](/jupyter/).


<a name="ReservedKeywords"></a>

## Reserved Keywords

Listed alphabetically below are words that Python's reserved for itself, so you can't use them as custom variables.

PROTIP: Research and find out what each is about:

*	and 
*	as
*	assert
*	async
*	await
*	break
*	class
*	continue
*	def
*	del
*	elif
*	else
*	except
*	False
*	finally
*	for
*	from
*	global
*	if
*	import
*	in
*	is
*	lambda
*	<a href="#None">None</a>
*	nonlocal
*	not
*	or
*	pass
*	raise
*	return
*	True
*	try
*	while
*	with
*	yield
<br /><br />

The list above can be retrieved (as an array) by this code after typing <tt>python</tt> for the REPL (Read Evaluate Print Loop) interactive prompt:

<pre>python
>>> import keyword
>>> keyword.kwlist
>>> exit()
</pre>

Press control+D to exit anytime.


<a name="None"></a>

## Use Not None Reserved Word

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

<pre>def safe_square_root(x)
    try:
        return [math.sqrt(x)]   # in a stack.
    except ValueError:
        return None   # using reserved word.
</pre>


## Environment Variables

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


## String operations

To return just the first 3 characters of a string:

<pre>letters = "abcdef"
first_part = letters[:3]</pre>

The above code provides flexibility for alternatives such as Cyrillic (Russian) character set. 

Alternatively, this function defines a dictionary to covert an Excel column number to a number:<a target="_blank" href="https://stackoverflow.com/questions/4528982/convert-alphabet-letters-to-number-in-python">*</a>

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


But instead of defining a dictionary, you can use a property of the ASCII character set, in that the Latin alphabet begins from its 65th position for "A" and its 97th character for "a", obtained using the ordinal function:

<pre>ord('a')  # returns 97
ord('A')  # returns 65</pre>

This returns 'a' :

<pre>chr(97)</pre>



There is a Python library to work with Excel spreadsheets:
https://xlsxwriter.readthedocs.io/working_with_cell_notation.html#cell-utility
which translates between Excel cell addresses (such as "A1") and zero-based Python array tuple:

<pre>str = xl_rowcol_to_cell(0, 0, row_abs=True, col_abs=True)  # $A$1
(row, col) = xl_cell_to_rowcol('A1')    # (0, 0)
column = xl_col_to_name(1, True)   # $B
</pre>


## File open() modes

PROTIP: Be explicit about using text (vs. binary) mode.

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th>Character</th><th>Meaning</th></tr>
<tr valign="top"><td>b</td><td>binary (text mode is default)</td></tr>
<tr valign="top"><td>t</td><td>text mode (default)</td></tr>
<tr valign="top"><td>r</td><td>read-only (the default)</td></tr>
<tr valign="top"><td>+</td><td>open for updating (read and write)</td></tr>
<tr valign="top"><td>w</td><td>write-only after truncating the file</td></tr>
<tr valign="top"><td>a</td><td>append</td></tr>
<tr valign="top"><td>x</td><td>open for exclusive creation, failing if file already exists</td></tr>
<tr valign="top"><td>U</td><td>universal newlines mode (used to upgrade older code)</td></tr>
</table>

<strong>write()</strong> returns the count of codepoints (characters in the string), not the number of bytes. 
So don't use it's count.

<strong>read()</strong> returns line endings (\n) in string lines.

<strong>readlines()</strong> shows the whole file.


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

   <pre># https://docs.python.org/library/sys.html#sys.platform
from sys import platform
if platform == "linux" or platform == "linux2":
    # linux
elif platform == "darwin":
    # OS X
elif platform == "win32":
    # Windows
elif platform == "cygwin":
    # Windows running cygwin Linux emulator
   </pre>

http://code.google.com/p/psutil/
to do more in-depth research.


## Command generator

<a target="_blank" href="https://github.com/docopt/docopt">
docopt from https://github.com/docopt/docopt</a>
is described at <a target="_blank" href="http://docopt.org/">http://docopt.org</a>
creates custom CLI commands by
parsing a command help text into cli code that implements it.

Brilliant.


## Click 

<a target="_blank" href="https://dbader.org/blog/python-commandline-tools-with-click">
Dan Bader recommends</a> the use of 
<a target="_blank" href="http://click.pocoo.org/6/why/">click.pocoo.org/6/why</a>
click custom package (from Armin Ronacher) instead of the
argparse package that comes with Python 3.2+ (and the optparse package that comes with Python 2).

Click provides decorators such as the "@click.command()" below:

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


## List comprehension

<pre>squares = [x * x for x in range(10)]
</pre>

<pre>[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</pre>

<a target="_blank" href="https://github.com/austin-taylor/code-vault/blob/master/python_expert_notebook.ipynb">
The Playbook</a> of code shown on 
<a target="_blank" href="https://www.youtube.com/watch?v=7lmCu8wz8ro">
What Does It Take To Be An Expert At Python?</a> [1:52:02] presented by 
by James Powell at the PyData conference on Aug 2, 2017.

Abhishake Gupta's pyTest at <a target="_blank" href="https://github.com/letspython3x/code_examples">
https://github.com/letspython3x/code_examples</a>

<a target="_blank" href="https://www.codementor.io/alibabacloud/">https://www.codementor.io/alibabacloud/ how-to-create-and-deploy-a-pre-trained-word2vec-deep-learning-rest-api-oekpbfqpj</a>

<a target="_blank" href="https://www.learnpython.org/en/Classes_and_Objects">https://www.learnpython.org/en/Classes_and_Objects</a>


## Math Operators

<tt>11%5</tt> use the (percent sign), the modulo operator to divide 11 by the quotient 5 in order to return 1 because two 5s can go into 11, leaving 1 left over, the remainder.

<tt>11//5</tt> uses "floor division" to return just the integer of 2, discarding the remainder. It returns the integral part of the quotient.

To avoid divide by zero errors by returning 0:

<pre>def weird_division(n, d):
    return n / d if d else 0
</pre>

## Testing

Being a dynamic language, errors in Python code can appear only when run rather than when compiled.

PROTIP: Create a test .py file to go with each py file.

There are several libraries to support testing.

1. unittest

   Described at <a target="_blank" href="https://www.youtube.com/watch?v=6tNS--WetLI">
   Python Tutorial: Unit Testing Your Code with the unittest Module</a>
   Aug 16, 2017 by Corey Schafer

2. pyTest

   <pre>pip3 install pytest</pre>

   <pre>import file_ab_session as fas
def test_add_function_given_two_arguments():
    RESULT = fas.add(2,3)
    EXPECTED_RESULT = 5
    assert RESULT == EXPECTED_RESULT
   </pre>

Applicable to both:

   * Name all test classes with a name beginning with "test".

   * Tests are not run from top to bottom, so each test needs to be stand-alone.

   * To do stuff before the tests:

   <pre>@classmethod
   def setupClass(cls)
       print('in setupClass')
&nbsp;
   @classmethod
   def tearDownClass(cls)
       print('in tearDownClass')
   </pre>


## Tools for Debugging Python code

* <a target="_blank" href="http://www.pythontutor.com/">Python Tutor</a> - an excellent way to actually visualize how the interpreter actually reads and executes your code

* <a target="_blank" href="https://www.diffchecker.com/">DiffChecker</a> - compares two sets of text and shows you which lines are different

* <a target="_blank" href="https://pythonconquerstheuniverse.wordpress.com/2009/09/10/debugging-in-python/">Debugging in Python</a> - steps you can take to try to debug your program

* Mocking of API end-points when the actual service is not available.



<a name="Cloud"></a>

## Python in the Cloud 

On AWS: 

   * <a target="_blank" href="https://www.botmetric.com/blog/aws-cloud-automation-python-boto3-scripts/">Intro to Boto3</a>
   * https://linuxacademy.com/howtoguides/posts/show/topic/14209-automating-aws-with-python-and-boto3 has a whole video course
   * <a target="_blank" href="https://realpython.com/python-boto3-aws-s3/">Python, Boto3, and AWS S3: Demystified</a> by Ralu Bolovan
   <br /><br />

On Azure:

   * <a target="_blank" href="https://github.com/Azure/azure-sdk-for-python/">https://github.com/Azure/azure-sdk-for-python/pulls</a> has a large set of libraries so you can install each individually. To install them all:

   <pre>pip install azure</pre>

   * https://docs.microsoft.com/python/azure/
   * https://azure.microsoft.com/resources/samples/?platform=python
   * https://github.com/Azure/azure-sdk-for-python/wiki/Contributing-to-the-tests
   * https://azure.microsoft.com/en-us/support/community/
   <br /><br />

<a name="Sets"></a>

## Sets

### Day of week Set handling

<pre>
day_of_week_en = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
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


set([3,2,3,1,5]) # auto-renumbers with duplicates removed

## Tuple

<pre>person = ('john', 'doe', 40)
person
type(person)
</pre>

Tuples are fixed-sized collections of related items (akin to a "struct" in Java or "record")
used to pass multiple values of various types to or from a function.

Use a list instead for a collection of similar objects.

PROTIP: When adding a single value, include a comma at the end to avoid it being classified as a string:

<pre>person = 'john',
type(person)
</pre>


## More about Python

This is one of a series about Python:

{% include python_links.html %}
