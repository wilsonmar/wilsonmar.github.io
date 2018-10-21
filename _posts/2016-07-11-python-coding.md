---
layout: post
title: "Python Coding"
excerpt: "Tricks and tips from learning resources"
tags: [python, coding]
shorturl: "https://goo.gl/"
image:
# pic white python logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622164/4230c848-0585-11e6-957b-be11147346e6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

Here are various coding tips I've seen while going through [Python programming classes](/python-tutorials/) after [installing Python](/python-install/) and [Juypter](/juypter/).

Dan Bader has emails and courses on Python:
<a target="_blank" href="https://www.youtube.com/watch?v=p-89r5QvQvQ">VIDEO
What Python Projects Should I Build to Get a Job?</a>
Aug 23, 2017

   1. tensorflow (for machine learning) 
   2. crawling (spider based projects) 
   3. database handling (firebase, Mysql etc.)
   <br /><br />

* Object-oriented programming with classes and their methods
* <a target="_blank" href="https://realpython.com/python-boto3-aws-s3/">Python, Boto3, and AWS S3: Demystified by Ralu Bolovan


## Command generator

docopt at https://github.com/docopt/docopt
and described at http://docopt.org/
creates custom CLI commands by
parsing a command help text into cli code that implements it.

Brilliant.


## Click 

<a target="_blank" href="https://dbader.org/blog/python-commandline-tools-with-click">
Dan Bader recommends</a> the use of the 

http://click.pocoo.org/6/why/
click custom package (from Armin Ronacher) instead of the
argparse package that comes with Python 3.2+ (and the optparse package that comes with Python 2).

Click provides decorators such as the "@click.command()" below:

   <pre>
\# cli.py
import click

@click.command()
def main():
    print("I'm a beautiful CLI ✨")

if __name__ == "__main__":
    main()
   </pre>



## List comprehension

<pre>
squares = [x * x for x in range(10)]
</pre>

[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]



<a target="_blank" href="https://github.com/austin-taylor/code-vault/blob/master/python_expert_notebook.ipynb">
The Playbook</a> of code shown on 
<a target="_blank" href="https://www.youtube.com/watch?v=7lmCu8wz8ro">
What Does It Take To Be An Expert At Python?</a> [1:52:02] presented by 
by James Powell at the PyData conference on Aug 2, 2017.

Abhishake Gupta's pyTest
https://github.com/letspython3x/code_examples

https://www.codementor.io/alibabacloud/how-to-create-and-deploy-a-pre-trained-word2vec-deep-learning-rest-api-oekpbfqpj

https://www.learnpython.org/en/Classes_and_Objects

## Testing

Pros create a test .py file to go with each py file.

There are several libraries to support testing.

1. unittest

   Described at <a target="_blank" href="https://www.youtube.com/watch?v=6tNS--WetLI">
   Python Tutorial: Unit Testing Your Code with the unittest Module</a>
   Aug 16, 2017 by Corey Schafer

2. pyTest

   * after pip3 install pytest

   <pre>
import file_ab_session as fas
def test_add_function_given_two_arguments():
    RESULT = fas.add(2,3)
    EXPECTED_RESULT = 5
    assert RESULT == EXPECTED_RESULT
   </pre>

Applicable to both:

   * Name all test classes with a name beginning with "test".

   * Tests are not run from top to bottom, so each test needs to be stand-alone.

   * To do stuff before the tests:

   <pre>
   @classmethod
   def setupClass(cls)
       print('in setupClass')

   @classmethod
   def tearDownClass(cls)
       print('in tearDownClass')
   </pre>

## mocking




## Amazon Boto3

## More about Python

Also see [Python REST API programming](/python-api-flask/).
[Python Robot testing](/python-robot/).
[Running Python on Raspberry Pi IoT devices](/iot-raspberry-install/).

