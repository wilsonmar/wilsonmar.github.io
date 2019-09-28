---
layout: post
title: "Code Generation"
excerpt: "It does your job better and faster than you can imagine"
tags: [Mac, Robots]
date: "2016-12-26"
file: "code-generation"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The generation of programming code is not new, 
it's just gotten more important over time.

The objective of code generation is that after each change in 
machine-readable requirements (templates and entities),
ALL application code are completely re-generated again.

This approach provides leverage over many applications, over time.
It is simpler for individual developers to craft one-off code because
the cost of building a generator would not yield enough benefit.

But here is where <strong>open-source</strong> really pays off.
When a group of developers work together to create generator code,
adoptors of the generatros profit from the cost of generator development.

## Challenges

However, the challenge of this approach is having
<strong>defaults</strong> 
in the generator satisfy the needs of individual apps generated.
Time to customize a generator may equal time for building from scratch
for very unique applications.

## Nevertheless

Nevertheless, the increasing complexity of systems today
(security, cloud, caching, etc.)
means a lot of time is needed to make technology to work together.
This is especially true considering the rapid churn of new
and better tools over time.

Use of a system generator can reduce the time and frustration of 
understanding new technologies and time to code and test changes.

Code generation promises to churn out higher quality code in less time, 
and more consistently.

By focusing on generation of code, 
developers leverage their time over more apps. 
Fix a bug in the generator and it applies to all other apps.

## Levels of Tools

There are several generations of code generation, each more sophisticated
and magical than the next:

1. <a href="#Templates">Gen from static templates</a>
2. <a href="#SwaggerGen">Gen client services from Swagger, RAML, or other client interface spec</a>
3. <a href="#DatabaseGen">Gen from a database schema</a>
4. <a href="#JSONGen">Gen from a JSON file</a>
5. <a href="#DataModel">Gen entire stack from an Entity Model</a>

   This approach to development
   involving code generation 
   (rather than manually gluing various pieces together)
   is how one keeps apps up using all the latest tech stacks.

   Testing the integration works for specific versions of various components
   is a complex affair. But here is the promise of open source delivered,
   where various strangers overcome a common technical challenge.



<hr />

<a name="Templates"></a>

## Gen from Static Templates

Here is the first generation of code generation.

1. Mustache substitutes values from data files in places where 
   variables between {{ and }} are inserted in a template file.
   Data values are defined in JSON format.
   
   Mustache is really a concept rather than a product.
   This simple technique is implemented in a wide variety of programming languages.
   It works on individual files.

   https://www.npmjs.com/package/mustache-prestatic<br />
   repetitively creates a set of HTML files by applying the same template.

2. To generate <strong>multiple files</strong> from a single template,
   <a target="_blank" href="http://www.codesmithtools.com/product/generator">
   Generator from CodeSmith</a> is for Windows only, $299 for single developers.
   A server product is $499. Its templates (with .csp file extension) 
   are all about windows. It uses &LT% and %> markers ASP uses.
   It has templates that can generate complete applications for use on Windows,
   with ORM such as PLINQO (replacement of LINQ to SQL in C#) at<br />
   https://github.com/codesmithtools/Templates/releases

3. http://mygeneration.sourceforge.net/ is an open-source copycat of CodeSmith,
   and thus also focused on .NET Windows.
   It's no longer maintained.
   Its website http://www.mygenerationsoftware.com/ was taken over in 2015.

4. Microsoft Visual Studio has a generator called T4 (Text Generation Transformation Toolkit)

   * <a target="_blank" href="http://www.hanselman.com/blog/T4TextTemplateTransformationToolkitCodeGenerationBestKeptVisualStudioSecret.aspx">
     Scott Hanselman blogs about the T4 Template Transformation Toolkit in Visual Studio</a>

   * <a target="_blank" href="https://www.youtube.com/watch?v=XK17iNvJqQs">
   YOUTUBE video on Code Generation using T4</a> [9:38]
   <br /><br />

5. <a target="_blank" href="https://github.com/moplus/modelorientedplus">
   https://github.com/moplus/modelorientedplus</a><br />
   Mo+ - model oriented programming language and IDE for model oriented development.

6. <a target="_blank" href="http://jsonnet.org/implementation/commandline.html">
   Jsonnet</a> emits JSON on stdout from a commandline wrapper around the C API.

7. Microsoft Excel processes macros written in 
   VBA (Visual Basic for Applications) programming language that
   can programmatically output files based on the contents of the spreadsheet.

8. Configuration managers Chef and Puppet generate files based on 
   specification files in their own format.

   http://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html

<a name="SwaggerGen">

## 2. Gen from client interface spec

See my dev-ecosystem

<a name="DatabaseGen"></a>

## 3. Gen UI from a database schema

Since the 90's, Ironspeed.com generated web UI from Access databases
until license hacks and patent trolls killed them.


<a name="JSONGen"></a>

## 4. Gen UI from a JSON file

Swagger-codegen generates client code from Swagger specification files.


<a name="DataModel"></a>

## 5. Gen UI based on Entity Models

[JHipster](/jhipster/)


## 6. Gen UI based on an image of a screen

## More #

This is one of a series on Artificial Intelligence:

{% include ai_links.html %}
