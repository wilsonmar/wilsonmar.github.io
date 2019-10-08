---
layout: post
title: "Swagger-codegen"
excerpt: "Install a generator of mock servers and client programs of the PetStore sample app"
tags: [perftest, Swagger]
date: "2017-04-23"
file: "swagger-codegen"
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

This is a step-by-step tutorial on how you can install a generator of mock servers and client programs. The sample is the PetStore sample app.

## Install swagger-codegen locally

After you install Git and Maven on your Mac:

   <pre>
cd ~
mkdir gits
cd gits
git clone https://github.com/swagger-api/swagger-codegen.git --depth=1
cd swagger-codegen
mvn clean install
   </pre>

   The "--depth=1" downloads only the latest version of the repo.

   mvn install takes a while (11 minutes), and ends with something like this:

   <pre>
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO] 
[INFO] swagger-codegen-project ............................ SUCCESS [  5.866 s]
[INFO] swagger-codegen (core library) ..................... SUCCESS [08:35 min]
[INFO] swagger-codegen (executable) ....................... SUCCESS [ 52.335 s]
[INFO] swagger-codegen (maven-plugin) ..................... SUCCESS [ 11.775 s]
[INFO] swagger-generator .................................. SUCCESS [01:07 min]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 10:56 min
[INFO] Finished at: 2017-05-14T17:50:28-04:00
[INFO] Final Memory: 75M/1239M
[INFO] ------------------------------------------------------------------------
   </pre>

   Next let's use the default assets to generate clients for the PetStore sample app.

## The Petstore API in SwaggerHub

0. View the spec for edit in your browser:

   <a target="_blank" href="http://editor.swagger.io/">
   editor.swagger.io</a>

   This displays a sample API for the ficticious PetStore app.

   In the future, you can use this same editor to work on your own API contents.

   * <a target="_blank" href="https://www.youtube.com/watch?v=G3FQc5hcV2U">A
   PI Design with SwaggerHub</a>

   ### 3 Pet Store Classes
   
   Notice the operations under each of these 3 classes (listed alphabetically):

   * PetApi - Everything about your pets
   * StoreApi - Access to Petstore orders
   * UserApi - Operations about user

   Also notice the Models: Order, Category, User, Tag, Pet, ApiResponse.

0. View the spec installed locally, using your favorite text editor (subl in this example):

   <pre><strong>subl ~/gits/swagger-codegen/modules/swagger-codegen/src/test/resources/2_0/petstore.yaml 
   </strong></pre>

## Generate

The processing uses mustache templating.
This means static files are marked up with variables between {{ and }} (that look like a moustache). The mustache program replaces the variables with text values.

A more advanced approach is a program that generates the code.

"auto-generation of code sure gets me a long way down the road, saving me time doing the really mundane, heavy lifting in creating the skeleton code structures I need to get up an running with any new API." --<a target="_blank" href="https://apievangelist.com/2015/01/26/my-experiences-generating-api-server-or-client-code-using-swagger/">API Evangelist</a>


### Generate Go Server

On a Mac, <a target="_blank" href="https://wilsonmar.github.io/golang/">
install Go</a>, then:

   <pre><strong>
java -jar ~/gits/swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar \
generate \
-i ~/gits/swagger-codegen/modules/swagger-codegen/src/test/resources/2_0/petstore.yaml \
-l go-server \
-o ~/Downloads/swagger-petstore-gen-go-server
   </strong></pre>

   The back-slash \ specifies line continuation in the CLI.

   * <tt>-i http://petstore.swagger.io/v2/swagger.json </tt><br />
   is an alternative to the downloaded Swagger spec for Petstore:

   * <tt>-i ~/gits/swagger-codegen/modules/swagger-codegen/src/test/resources/2_0/petstore.yaml </tt>

   * <tt>-l</tt> specifies the generator in folder:

   * ~/gits/swagger-codegen/samples/client/petstore

   * There are others such as jaxrs-cxf-client \

   * -o, CAUTION: If not specified, files are generated in the pwd.
   <br /><br />

The generated go-server folder contains:

   * .swagger-codegen folder
   * .swagger-codget-ignore file
   * api folder
   * go folder
   * main.go file

0. Invoke the Go server:

   <pre><strong>go run main.go
   </strong></pre>

   BLAH: I got this message:

   <pre>
main.go:11:2: 
go/logger.go:3:1: expected 'IDENT', found 'import'
   </pre>   

   See https://stackoverflow.com/questions/39665379/golang-fully-qualified-import-path-in-auto-generated-code


## C#

<a target="_blank" href="https://www.youtube.com/watch?v=Jzq3ccr85XM">
Using swagger-codegen to generate C# API for REST service</a>
by Dmytro Zhluktenko 

## Java Spring

<a target="_blank" href="https://www.youtube.com/watch?v=iyC9BWMe75Q">
Generate client stubs & document your REST-API using Swagger & Spring</a>
by Johannes Fiala
Devoxx


### Generate JMeter from default files

On a Mac, output to Downloads:

   <pre><strong>
java -jar ~/gits/swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar \
generate \
-i ~/gits/swagger-codegen/modules/swagger-codegen/src/test/resources/2_0/petstore.yaml \
-l jmeter \
-o ~/Downloads/swagger-petstore-gen-jmeter
   </strong></pre>

   The back-slash \ specifies line continuation in the CLI.

* <tt>-l</tt> specifies the generator in folder:

   * ~/gits/swagger-codegen/samples/client/petstore

   * There are others such as jaxrs-cxf-client \

   * CAUTION: If not specified, files are generated in the pwd.
   <br /><br />

* <tt>-o</tt> specifies the output folder. PROTIP: Name it the same as the generator
 (jaxrs-cxf-client)

   Look for the console message like this to list the generated files:

   <pre>
[main] INFO io.swagger.codegen.AbstractGenerator - writing file /Users/mac/Downloads/JMETER/src/gen/java/io/swagger/model/ModelApiResponse.java
   </pre>

   On a Linux server:

   <pre>
-o /var/tmp/swagger-codegen/jaxrs-cxf-client
   </pre>


   ### Generated go PetStore server

0. Invoke the Petstore server app generated in the Go language.


   ### Use Generated JMeter load tests

0. After [Installing JMeter](/jmeter-install/)...

0. Edit the .csv file 

   * from "localhost"
   * from port 8080

0. Invoke a generated JMeter .jmx file to load test the sample Petstore app:

   <pre><strong>jmeter -n \
   -t ~/Downloads/swagger-petstore-gen-jmeter/UserApi.jmx \
   -l ~/Downloads/swagger-petstore-run-jmeter/UserApi.jtl \
   -e -o ~/Downloads/swagger-petstore-run-jmeter
   </strong></pre>

0. Since there are three .jmx files:

   * PetApi - Everything about your pets

   * StoreApi - Access to Petstore orders


   ### Generate your own .jmx

The .jmx template files in Swagger-gen are hard-coded.

Options to automate:

1. Edit the generated file using the JMeter GUI and convert values back to variables.

2. Write a program using JMeter's API, as described at:

   * https://github.com/uttesh/JmeterAPISample
   * http://uttesh.blogspot.in/2015/04/jmeter-load-testing-by-code-jmeter-api.html

3. Write a program to read the Swagger spec and generate a .jmx file
either containing variables to generate or containing values for use directly in JMeter.



   ### Go

The JMeterGo program is written in the Go language for processing by the 
Serverless framework running on Amazon Lambda and other clouds.

   * https://golang.org/pkg/encoding/xml/
   <br /><br />

Since Amazon Lambda does not natively process Go language programs,
we use the Go shim for Amazon Lambda.

### Another app under test

If you are to create a new Swagger (OpenAPI) spec file, 
verify its using the online validator:

http://online.swagger.io/validator/debug?url=http://petstore.swagger.io/v2/swagger.json


http://www.nvisia.com/insights/swagger-cataloging-with-the-worlds-most-popular-framework-for-apis

