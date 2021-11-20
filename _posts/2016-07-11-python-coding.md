---
layout: post
title: "Python Coding"
excerpt: "The rules shown in samples using Keywords, arguments, Exception Handling, OS commands, Strings, Lists, Sets, Tuples, Files, Timers"
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

## Setup VSCode IDE for Python

<a target="_blank" href="https://app.pluralsight.com/guides/visual-studio-code-for-python-development">
BLOG: Setup VSCode for Python Development</a>

https://code.visualstudio.com/docs/editor/extension-marketplace


<a name="ReservedKeywords"></a>

## Reserved Keywords

Listed alphabetically below are words that Python's reserved for itself, so you can't use them as custom variables.

PROTIP: Research and find out what each is about:

*	and 
*	as
*	<a href="#assert">assert</a>
*	async
*	await
*	break
*	class
*	continue - loop again
*	def - define function
*	del - delete list item
*	elif - else if
*	else
*	except
*	False - boolean
*	finally - of a try 
*	for
*	from
*	global
*	if
*	import
*	in
*	is
*	lambda - if/then/else in one line
*	<a href="#None">None</a>
*	nonlocal
*	not
*	or
*	pass - instruction to do nothing (instead of return or yield with value)
*	raise
*	return
*	True - Boolean
*	try - https://www.youtube.com/watch?v=NIWwJbo-9_8
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

<tt>11 // 5</tt> uses <a target="_blank" href="https://python-reference.readthedocs.io/en/latest/docs/operators/floor_division.html">"floor division"</a> to return just the integer (integral part) of 2, discarding the remainder. This can be useful to <a target="_blank" href="https://medium.com/geekculture/solving-a-respectable-codility-challenge-in-one-line-of-code-6c331deff8bb">efficiently solve</a> the <a target="_blank" href="https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/">"Prefix Sums CountDiv" coding interview challenge</a>: "Write a function … that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K":

   <pre>def solution(a, b, k):
    return 0 if b == 0 else int(b // k - (a - 1) // k)
   </pre>

Instead of a "brute force" approach which has linear time complexity — O(n), the solution using floor division is constant time - O(1).


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


### Time Complexity

Use of Modulus would result in "O(n)" (linear) <strong>Time Complexity</strong> (growth in time to run as the dataset grows). Depth-first trees would have steeper (logarithmic) Time Complexity:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/141355255-b2b990cf-46d9-415e-b21a-2c06a156c3eb.png">
<img alt="python-coding-time-complexity-1222x945" src="https://user-images.githubusercontent.com/300046/141355255-b2b990cf-46d9-415e-b21a-2c06a156c3eb.png"></a>

In <a target="_blank" href="https://bigocheatsheet.com/">https://bigocheatsheet.com</a>, in the list of Big O values for sorting, 

### Reduce Space Complexity with Dynamic programming

Techniques for calculation of <strong>nested loops</strong> is often used to shown how to reduce run times by using techniques that use more memory space.  Rather than "brute-force" repeatitive computations as in the definition of how to calculate <a target="_blank" href="https://www.youtube.com/watch?v=Nki9hhW-tAI&list=PLNmW52ef0uws098xXRbALoadgcc4bNkDm&index=4">Fibonacci numbers</a>, which by definition is based on numbers preceding it.

   <ul><pre>fib(5) = fib(4) + fib(3)</pre></ul>

Dynamic programming is a catch phrase for solutions based on solving 
successively similar but smaller problems, using algorithmic tasks in which 
the solution of a bigger problem is relatively easy to find, 
if we have solutions for its sub-problems.

Memoization  (sounds  like  memorization)  is  the  technique of  writing  a  function  that  remembers  the  results  of  previous computations. 

Longest Increasing Subsequence (LIS)

https://www.byte-by-byte.com/dpbook-resources/

That's a technique of "Dynamic Programming", 

An example of Space Complexity from O(n · k) to O(k), is solving the Coin Changing problem, <a target="_blank" href="https://codility.com/media/train/15-DynamicProgramming.pdf">Codility's PDF</a> shows an example for <a target="_blank" href="https://www.youtube.com/watch?v=qH7fVuYlOOc&list=PLNmW52ef0uws098xXRbALoadgcc4bNkDm&index=2">returning change for the smallest number of bills/coins</a>.

<pre>def dynamic_coin_changing(C, k):
    # k is the amount you want back in bills/change
    # C is an array of the denominations of the currency
    # (assuming there is an unlimited amount of each bill/coin available)
    print(f'>>> k={k} C="{C}')
    n = len(C)
    dp = [0] + [MAX_INT] * k
    for i in xrange(1, n + 1):
       for j in xrange(C[i - 1], k + 1):
           dp[j] = min(dp[j - C[i - 1]] + 1, dp[j])
    return dp
&nbsp;
dynamic_coin_changing(34,[100,50,20,10,5,1])
</pre>

See https://www.wikiwand.com/en/Dynamic_programming

<a target="_blank" href="https://www.youtube.com/watch?v=X8f87hi_c7c&list=PLNmW52ef0uws098xXRbALoadgcc4bNkDm">VIDEO: Sam at Byte by Byte</a>, author of <a target="_blank" href="https://www.byte-by-byte.com/dpbook/">DP ebook</a> with the memonic "FAST" method.

<hr />

## Built-in Methods/Functions

https://docs.python.org/3/library/functions.html

   * abs()
   * any()
   * all()
   * ascii()
   * bin()
   * bool()
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
   * eval()
   * float()
   * format()
   * frozenset()
   * getattr()
   * globals()
   * exec()
   * hasattr()
   * help()
   * hex()
   * hash()
   * input()
   * id()
   * <a target="_blank" href="https://www.programiz.com/python-programming/methods/built-in/isinstance">isinstance()</a> - checks if the object (first argument) is an instance or subclass of classinfo class (second argument). True/False
   * int()
   * issubclass()
   * iter()
   * list() Function
   * locals()
   * len()
   * max()
   * min()
   * map()
   * next()
   * memoryview()
   * object()
   * oct()
   * ord()
   * open()
   * pow()
   * print()
   * property()
   * range()
   * repr()
   * reversed()
   * round()
   * set()
   * setattr()
   * slice() - extract substring
   * sorted()
   * str()
   * sum()
   * tuple() Function
   * type()
   * vars()
   * zip() - combine two interable arrays
   * _import_()
   * super()

## class functions

using .maketrans() and .translate()

<hr />

## if/then/else

### Avoid divide by zero errors

Use this in every division to ensure that a zero denominator results in falling into "else 0" rather than a "ZeroDivisionError" at run-time:

<pre>def weird_division(n, d):
    # n=numerator, d=denominator.
    return n / d if d else 0
</pre>

<hr />

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

Remember that attackers can use directory traversal sequences (../) to fetch the sensitive files from the server.

Sanitize the user input using “shlex”


<hr />

## String Handling


### Handle Strings safely

Python has four different ways to format strings.

Using f-strings to format (potentially malicious) <a target="_blank" href="https://snyk.io/blog/python-security-best-practices-cheat-sheet/">user-supplied strings can be exploited</a>:

   <pre>from string import Template
...
greeting_template = Template(“Hello World, my name is $name.”)
greeting = greeting_template.substitute(name=”Hayley”)
   </pre>

So use a way that's less flexible with types and doesn’t evaluate Python statements.

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

<strong>myfile.read()</strong> returns line endings (\n) in string lines.

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

   <pre># https://docs.python.org/library/sys.html#sys.platform
from sys import platform
if platform == "linux" or platform == "linux2":
    # linux
elif platform == "darwin":
    # MacOS
elif platform == "win32":
    # Windows
elif platform == "cygwin":
    # Windows running cygwin Linux emulator
   </pre>

http://code.google.com/p/psutil/
to do more in-depth research.


## Command generator

Create custom CLI commands by parsing a command help text into cli code that implements it.

Brilliant.

See <a target="_blank" href="https://github.com/docopt/docopt">
docopt from https://github.com/docopt/docopt</a> described at <a target="_blank" href="http://docopt.org/">http://docopt.org</a>


## Handling Arguments

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

## Lists

Use a list instead for a collection of similar objects.


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
PyGoat</a> is written using Python with Django web framework.
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
   • A10:2017-Insufficient Logging & Monitoring
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

   * <a target="_blank" href="https://www.loggly.com/ultimate-guide/python-logging-basics/">
   <br /><br />

It is estimated that it can take up to 200 days, and often longer, between attack and detection. In the meantime, attackers can tamper with servers, corrupt databases, and steal confidential information. 

"Insufficient Logging and Monitoring" is among the top 10 OWASP.

The vulnerability includes ineffective integration of the security systems which give attackers a way to pivot to other parts of the system to maintain persistent threats.

Prevent that by emitting a log entry for each activity such as:
add, change/update, delete.

Use the <a target="_blank" href="https://realpython.com/python-logging/">Python logging module</a>:

<pre>import logging
</pre>

To emit each log entry, use the loggin method so that logs can be filtered by level. In order of severity:

   <pre>logging.debug('DEBUG - used during troubleshooting at the highest detail level')
logging.info('INFO - used during initial runs by a developer new to the program')
logging.warning('WARNING - used during QA runs')
logging.error('ERROR - used during production runs')
logging.critical('CRITICAL - the minimal level')
   </pre>

At run-time, specify the highest level to display during that run:

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
   </pre>
</ul>

<tt>-q</tt> (for -quiet) suppresses INFO headings.

<tt>-v</tt> (for -verbose) to display DEBUB messages.

<tt>-vv</tt> to display TRACE messages.


Also, provide a run-time option for outputing to a file:

   <pre>logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')
   </pre>

CAUTION: Be careful to not disclose sensitive information in logs.
Encrypt plaintext.

The logging module also allows you to capture the full stack traces in an application.

https://realpython.com/python-logging-source-code/


https://infosecwriteups.com/most-common-python-vulnerabilities-and-how-to-avoid-them-5bbd22e2c360



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

## More about Python

This is one of a series about Python:

{% include python_links.html %}
