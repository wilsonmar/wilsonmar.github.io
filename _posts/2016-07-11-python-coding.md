---
layout: post
title: "Python Coding"
excerpt: "Tricks and tips from various learning resources"
tags: [python, coding]
date: "2016-07-11"
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

## Reserved Keywords

Here are words that Python's reserved for itself, so you can't use them as custom variables:

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
*	None
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
<a target="_blank" href="http://click.pocoo.org/6/why/">http://click.pocoo.org/6/why</a>
click custom package (from Armin Ronacher) instead of the
argparse package that comes with Python 3.2+ (and the optparse package that comes with Python 2).

Click provides decorators such as the "@click.command()" below:

   <pre>
\# cli.py
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

[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

<a target="_blank" href="https://github.com/austin-taylor/code-vault/blob/master/python_expert_notebook.ipynb">
The Playbook</a> of code shown on 
<a target="_blank" href="https://www.youtube.com/watch?v=7lmCu8wz8ro">
What Does It Take To Be An Expert At Python?</a> [1:52:02] presented by 
by James Powell at the PyData conference on Aug 2, 2017.

Abhishake Gupta's pyTest at <a target="_blank" href="https://github.com/letspython3x/code_examples">
https://github.com/letspython3x/code_examples</a>

<a target="_blank" href="https://www.codementor.io/alibabacloud/">https://www.codementor.io/alibabacloud/ how-to-create-and-deploy-a-pre-trained-word2vec-deep-learning-rest-api-oekpbfqpj</a>

<a target="_blank" href="https://www.learnpython.org/en/Classes_and_Objects">https://www.learnpython.org/en/Classes_and_Objects</a>


## Testing

PROTIP: Create a test .py file to go with each py file.

There are several libraries to support testing.

1. unittest

   Described at <a target="_blank" href="https://www.youtube.com/watch?v=6tNS--WetLI">
   Python Tutorial: Unit Testing Your Code with the unittest Module</a>
   Aug 16, 2017 by Corey Schafer

2. pyTest

   * after pip3 install pytest

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


## More about Python

This is one of a series about Python:

{% include python_links.html %}
