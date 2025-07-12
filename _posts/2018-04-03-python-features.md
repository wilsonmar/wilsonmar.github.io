---
layout: post
date: "2025-07-12"
lastchange: "v003 + from bomonike :2018-04-03-python-features.md"
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


1. Instead of Matplotlib:
   * Plotly (for interactivity and modern UI)
   * Altair (for quick, declarative, grammar-based plots)
   * Polars + hvPlot (if you’re moving toward faster, Arrow-native workflows)


## brew search

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


## References

<a target="_blank" href="https://www.amazon.com/Python-Tricks-Buffet-Awesome-Features/dp/1775093301?">BOOK:
"Python Tricks: A Buffet of Awesome Python Features " from 2017</a>
by Dan Bader (of RealPython.com) recommends assertions

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


