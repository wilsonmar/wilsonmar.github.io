---
layout: post
title: "LoadRunner JavaScript Coding"
excerpt: "Sample code and tutorial here"
tags: [JavaScript, Load Testing, LoadRunner]
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14580245/036e91dc-0385-11e6-984f-00cf841ce870.png
  credit: Wallpaperswidefree.com
  creditlink: http://www.wallpaperswidefree.com/Animal/Horse/White-Horse-herd-running-seashore-hd-wallpapers
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

[This tutorial](/loadrunner-javascript-coding/)
is one in a [series](/javascript-in-loadrunner/)
about coding of JavaScript within LoadRunner.


## Why Script LoadRunner in JavaScript language?

Writing in JavaScript is more comfortable to some.


> JavaScript code requires more memory and CPU to run than C code
  within LoadRunner load generators.
  About 50% more is the estimate.

<a name="SampleScript"></a>

## Begin with a sample

> It is so much easier to begin with a production-worthy sample
  rather than hacking your way through (and embarassing yourself).

0. Use an internet browser to see this repository:

   <a target="_blank" href="https://github.com/wilsonmar/LoadRunner">
   http://github.com/wilsonmar/LoadRunner</a>

   Either click <strong>Download ZIP</strong> then unzip or
   fork the repo and clone it to your desktop if you would like changes.

   NOTE: This repo is actively improved over time,
   so forking and cloning is the recommended approach.

0. Use Finder or File Explorer to view a folder containing a sample
   script coded in JavaScript:

   <strong>WJS1_sample_S01_WJS1250_v01</strong>

   * "WJS1" is for the first release of the sample app.
   * "W" is for the Web (HTTP/HTML) protocol when creating the script.
   * "JS" is for JavaScript.
   * "sample" is the scope of the script folder.
   * "S01" is the [scenario for performance and load testing](/scenarios-for-load).
   * "1250" is for version 12.50 of LoadRunner.
   * "V01" is for version 1 of the script.

  This sample script contains a library of functions that provide both
  examples of JavaScript coding and
  use of utilities provided.

   The script name contains the word "challenge" because
   it is for instructional purposes. It contains some FIXME items
   added for learners to fix as part of the learning process.


<a name="Overview"></a>

## Overview

The rest of this tutorial is based on this overview:

   <amp-youtube data-videoid="EtxFT6jOJhM" layout="responsive" width="480" height="270"></amp-youtube>

Click on the diagram for a YouTube video with the narrative below.

Every LoadRunner program (regardless of programming language)
has an entry point in the
<a href="#vuser_init">vuser_init</a> file,
which is automatically executed once at the beginning.

There is also a single exit point in the vuser_end file,
also automatically executed only one time.

Between these two is the <a href="#Action_file">Action file</a>
which LoadRunner iterates
over and over until some condition ends its loop.

There will of course be additional script files added, such as
[functions to book flights](#CreateCustomScripts) to
emulate user activities in the Web Tours
sample application that comes with LoadRunner.

Our hope is that you'll save time and debugging frustration
by making use of the commonly needed functions
we've provided in our sample script.

Our library contains additional functions
everyone can use to
[display run conditions](#IdRunConditions),
establish variables that specify where to obtain
data for the run, and other exciting capabilities.

To make editing files easier, functions are grouped into
separate files:

   * The <strong>WJS1_Config.js</strong> Configuration
   contains functions
   to manage printing and to start and end transaction tracking.

   * The <strong>WJS1_Access.js</strong>
   Access file contains functions such as
   Sign-Up, Sign-In, Sign-Out, etc.

Over the course of load testing an app being built,
we often need to run just one of these functions at a time
as well as all in combination.

So in the advanced version of this course
we cover what we call the <a href="#RunType">RunType</a>
attribute to control the scope of processing at run-time.

But for now, we'll focus here on options for efficiently coding
the rotation through different <strong>landing</strong> pages.

We make use of the <a href="#RunDataInAttribute">RunDataIn</a> attribute
to select among different sources of data.
The default is a single hard-coded URL to request.

The objective of the sample script is to make it easier to
add processing features that are otherwise
time consuming to add to every request, such as
<a href="#RandomizeCalls">random execution</a>.

The sample script also provides a structured approach
to make requests after preparation of all data needed.

Making calls using generic functions
makes your script much much smaller, which allows more vusers
on every load generator.

Using our start and end transaction functions provides you
a less error-prone way to add flexibility to scripts.
If you'd like to capture response times in the script,
it is already available.

So is adding a <a href="#Retries">retry logic</a> loop.

Our sample script folder also provides a way to
<a href="#ForLoops">loop through a file</a>
 of URLs in the sample data file provided.

In the advanced version of this course,
we also cover how to drive requests stored in
  a VTS (Virtual Table Service) running on a separate machine.
  This not only keep memory use low in load generators,
  but provide dynamic update of data going into the run.

Click the diagram to pop it to a full window:
<a target="_blank" href="https://cloud.githubusercontent.com/assets/300046/14493021/53c0d650-0140-11e6-90c3-8bf607d1311f.png">
<img width="958" alt="lr wjs1 diagram v02" src="https://cloud.githubusercontent.com/assets/300046/14493021/53c0d650-0140-11e6-90c3-8bf607d1311f.png">
</a>

> All this can seem complicated to someone without experience.
  But help is just a phone call away.
  Call in the experts. Call us.

<a name="DrillDown"></a>

## Drill down into specific features

What follows are explorations of good JavaScript programming practices
using functions provided by LoadRunner.
This sequence here is taken when stepping through a run of the
<a name="SampleScript">
sample script</a> that accompanies this narrative.

0. <a href="#vuser_init"> Initialize vuser_init</a>
0. <a href="#UseReturnCodes"> Use return codes</a>
0. <a href="#GloballyAccessibleVariables"> Globally variables in closures</a>
0. <a href="#MessageLevels"> Message levels</a>
0. <a href="#IdRunConditions"> Capture and display run conditions</a>
0. <a href="#ListRunTimeSettings"> Run-time Settings</a>
0. <a href="#ForcePrint"> Force print then restore logging level</a>
0. <a href="#ControlOutputMessage"> Control message output</a>
0. <a href="#DefineVerbosity"> Define verbosity</a>
0. <a href="#RunDataInAttribute"> Specify Data Source Attribute</a>
0. <a href="#UseReturnCodes"> Use return codes</a>
0. <a href="#ForLoops"> For loops</a>
0. <a href="#CustomCalls"> Code call details in a custom file</a>
0. <a href="#ChainCalls"> Chain calls</a>
0. <a href="#RandomizeCalls"> Randomize execution</a>
0. <a href="#Retries"> Retry execution</a>
0. <a href="#Redirects"> Redirect execution</a>
0. <a href="#GenericFunctions"> Call generic functions</a>
0. <a href="#SpecifyLinkRetrieval"> Specify link retrieval mode</a>
0. <a href="#GenericStartStop"> Use generic Start and End Transactions</a>
0. <a href="#ThinkTimeSecs"> Automatically vary Think Time</a>
0. <a href="#CaptureResponses"> Capture response to be returned</a>
0. <a href="#VerifyResponses"> Verify response returned</a>
0. <a href="#AppAccessFunctions"> Create custom app access functions</a>
0. <a href="#RunType"> Use RunType</a>

> In addition to these basic ones,
  several TODO items are covered in private advanced courses.
  Call me to take the class.



> Use of some library functions such as md5 and SHA1
  for OAuth2 are explained in a separate tutorial by Wilson Mar.


<hr />

<a name="vuser_init"></a>

## Initialize in vuser_init

The function <strong>vuser_init()</strong>
is LoadRunner's entry point into the program.

This LoadRunner runs just once before advancing to the Action file.

Since each new script creates a blank version of this file,
those starting from scratch
can simply paste in a reference to a separate library file, such as:

    {% highlight JavaScript %}
    rc=wi_library_init();{% endhighlight %}

Before we dive into that function,
let's first talk about that "rc=" return code.


<a name="UseReturnCodes"></a>

### Use return codes

The first line under the function entry is:

   {% highlight JavaScript %}
   var rc=0;{% endhighlight %}

The variable is used to receive the response from a function
such as this:

    {% highlight JavaScript %}
    rc=wi_library_init();{% endhighlight %}

If the return code is anything other than a numeric zero
(which I think of as "clear"), some error occured.

The path of execution would revert back
to the caller rather than continuing to the next statement with code
such as:

   {% highlight JavaScript %}
   if( rc != 0 ){ return rc; }{% endhighlight %}

> In advanced editions of this course, various coding techniques
  are introduced to <a href="#HandleErrors">handle errors</a>
  at various levels of processing.


The name of the command establishes the environment needed for other functions
in the <strong>wi_library.js</strong>.

Next, let's look inside that file.


<a name="GloballyAccessibleVariables"></a>

### Global variables in closures

Several globally-accessible variables are useful in load stress scripts:

   * <a href="#MessageLevels">Message level</a> for printing messages

   * <a href="#RunType">RunType</a> to control app access functionality (URL_Landing, SignUp, SignIn, SignOut)

   * <a href="#RunDataInAttribute">RunDataIn</a> specification

   * <a href="#ThinkTimeSecs">ThinkTimeSecs</a> (Number of seconds to wait before every request
   to emulate end-users looking up information to type in)

   * <a href="#Retries">Retries</a> in case requests to the server do not reach the server
   due to network issues or timeout on the server.

   * <a href="#ResponseMetrics">ResponseMetrics</a> is an object that contains several values
   (HTTP code, response time, etc.)

There are several approaches to make data values globally accessible to all functions.

For tutorial purposes, the sample script makes use of several techniques.

The simplest approach is to define a var at the top of the file
(above the first function definition).
However this is not good practice because any function can change the value as well.
They "pollute the global namespace"
and cause name conflicts.

<a name="MessageLevels"></a>

### Message levels

The scope of messages that LoadRunner outputs is determined by the
various Log Run-time settings.

The message level is set during initialization by this code:

    {% highlight JavaScript %}
    wi_msg_level.init(){% endhighlight %}

Data values are made available to various calling functions
as "methods" of the object "wi_msg_level".

To retrieve the message level saved at initialization:

    {% highlight JavaScript %}
    wi_msg_level.at_init(){% endhighlight %}

All the functions acting on the msg_level object are coded in one set:

{% highlight JavaScript %}
var wi_msg_level = ( function() {
    // Private members:
    var wi_msg_level_init=0,

    init = function() {
        wi_msg_level_init = lr.mgetMessageLevel();
    },

    at_init = function() {
        return wi_msg_level_init;
    },

    };
    return { // public:
        init: init,
        at_init: at_init
    }
})();
{% endhighlight %}

This coding should not result in warning messages when parsed by
JSLint.

This coding techique here uses a JavaScript technique
called a JavaScript &quot;<strong>closure</strong>&quot; using the
&quot;revealing module pattern&quot; of coding JavaScript
that encapsulates functions related to an object.

Use of "this" is called the prototype pattern because it can be modified
by extension.

In LoadRunner scripts its main advantage is it's only created once in memory.

It encapsulates private code, but that's not important when it comes to
LoadRunner scripts.

NOTE: This approach is explained in Dan Wahlin's
<a target="_blank" href="http://app.pluralsight.com/courses/structuring-javascript">
video course on Pluralsight</a> and
<a target="_blank" href="http://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern">
blog post</a>.

This is a such a big deal among JavaScript developers that its use is a common interview question.

The "revealing prototype" pattern is not used because only a single instance is needed for the data.

The "revealing prototype" pattern pname comes from use of the "this." keyword
prefixed to object names to refer to the entire object.
The advantage of "this" is that functions of the object are loaded into memory once.

In an <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">example from Mozilla</a>, a global object (variable)
"appleCounter" is retrieved by this:

The "appleCounter" is incremented by another method:

    {% highlight JavaScript %}
    appleCounter.add();{% endhighlight %}

The sample closure and its methods are defined by this:


There are <a target="_blank" href="http://stackoverflow.com/questions/4190792/should-i-use-a-global-variable-and-if-not-what-instead-javascript">
other similar examples</a>

At the top of the sample script above,
the "()" defining the anonymous function expression
is required by the language, since statements that begin with the token function are always considered to be function declarations.

A closure in JavaScript is like keeping a copy of all the local variables, just as they were when the function exited.

In C and most other common languages, after a function returns, all the local variables are no longer accessible because the stack-frame is destroyed.

But in JavaScript, declaring a function within another function, then the local variables can remain accessible after returning from the function called.

The return "object literal" pairs at the bottom
matches the public name with the name coded.

Going further, the
<a target="_blank" href="http://blog.alexanderdickson.com/javascript-revealing-module-pattern#fn:1">
JavaScript Revealing Module Pattern</a>
developed by Richard Cornford et al
<a target="_blank" href="http://groups.google.com/group/comp.lang.javascript/msg/9f58bd11bd67d937">
on comp.lang.javascript</a>.

Functions that should be exposed publicly are defined in the return section of the Calculator object.


<a name="ListRunTimeSettings"></a>

#### Run-time Settings

   {% highlight text %}
   Log DebugMessage level=0.
   [X] Enable logging =1.
   Send messages:
       [X] Always =512.
   Detail level:
   [X] Standard log =16.
       [_] Parameter substitution =4.
       [_] Data returned by server =2
       [_] Advanced trace =8
   {% endhighlight %}

You can print the above again in your script
by specifying this library function:

   {% highlight JavaScript %}
    wi_msg_level_print();
   {% endhighlight %}


<a name="ForcePrint"></a>

### Force print no matter what

CHALLENGE: In your own code,
add this pair of functions around message functions
you want to force printing anywhere in your script
even though logging is not enabled:

   {% highlight html %}
   wi_msg_force_print();
   lr.outputmessage(...);
   wi_msg_print_reset();{% endhighlight %}


To establish conditions for printing no matter what the Run-Time settings
are, use this library function:

   {% highlight JavaScript %}
   wi_msg_force_print();{% endhighlight %}

Now use a LoadRunner message function such as:

   {% highlight JavaScript %}
    lr.outputMessage(">> wi_msg_level_at_init = "
        + wi_msg_level.at_init() +".");{% endhighlight %}

   PROTIP: Specify a special set of characters at the front of output messages so they are easy to identify among potentially many output lines.

   NOTE: Message text in message functions are built using concatenation
   rather than formatting codes in sprintf() functions.

CHALLENGE: Look in Help for other types of messages.

   NOTE: LoadRunner's lr.outputMessage() function
   includes the script file name and line number
   whereas LoadRunner's lr.logMessage function does not.

Output according to the log level set in Run-time settings
is honored by the rest of the script by this library function:

   {% highlight JavaScript %}
   wi_msg_print_reset();{% endhighlight %}


<a name="DefineVerbosity"></a>

### Define verbosity

BTW, the JavaScript alert() functions
LoadRunner rejects with this error (instead of printing out
the content):

    {% highlight JavaScript %}
    Error: 'ReferenceError: alert is not defined'.{% endhighlight %}

> Our advanced workshops goes through use of additional
   functions which enable you to specify levels
   used in the popular Log4J library for Java and other platforms.

   * Info - shows essential run conditions.
   * Error - shows conditions of concern.
   * Warning - shows conditions which may be of concern.
   * Trace - shows major conditions, such as a line for each iteration and row processed.
   * Debug - shows minor conditions, such as data considered for processing.

An example of a Trace level statement is:

   {% highlight JavaScript %}
    WJS1_Config_print_trace();
    lr.outputMessage(">> Action Iteration=" + lr.evalString("{pIteration}") +".");
    wi_msg_print_reset();{% endhighlight %}

The advantage of a LoadRunner parameter is that
VuGen shows their values during a run if you are stepping through
or have set a <strong>breakpoint</strong> before starting a run.


<a name="AccessLoops"></a>

## Access control flow

Now let's take a look at the flow of the program:


<a name="RunDataInAttribute"></a>

### Specify Data Source Attribute

A LoadRunner program can obtain data from several sources:
hard-coded in script, from a CSV file defined in parameters,
and from VTS (Virtual Table Server).

The <strong>RunDataIn</strong> attribute obtained from
Run-time Settings is pulled into the program at the top
of the vuser_init script file where
<strong>global</strong> variables are defined.

   {% highlight html %}
   lr.getAttribString("RunDataIn");{% endhighlight %}

This mechanism enables specification of different behavior in the
program in LoadRunner Scenarios run on different load generators.

The <strong>default</strong> data source if none are specified
is to process a single hard-coded URL.

   {% highlight html %}
    if( RunDataIn === undefined){
      RunDataIn = "1"; // the default, not "FILE" or "VTS".
      lr.outputMessage(">> RunDataIn not defined. Using default "+ RunDataIn +".");
    }else{
      RunDataIn = RunDataIn.toUpperCase();
    }{% endhighlight %}

For attributes that have a limited number of values,
the various values are tested so that if the value specified
is not recognized by the code, an error condition can be issued
at the beginning of the script rather than later during the run.

> Advanced editions of this course covers use of JavaScript
   <strong>arrays</strong>
   to structure small amounts of multi-dimensional data
   easily available.


<a name="ForLoops"></a>

### For loops

If FILE processing is specified,
the script loops through records in the dat file.

Most JavaScript tutorials provide this as the sample for loop:

   {% highlight html %}
   for (i = 0; i < count; i++) {
       // code block.
   }{% endhighlight %}

* "i = 0" is executed before the loop (the code block) starts.

* "i < count" defines the condition for running the loop (the code block).

* "i++" is executed each time after each iteration of the code block executes.

The problem is that in the real world of things,
counts begin from one, not zero.

![twinsthingonetwo](https://cloud.githubusercontent.com/assets/300046/14466784/91849982-0095-11e6-9ad1-f0b6518928a6.jpg)

(Aren't they cute? The "younger", nastier, twin can say to the older twin:
"I'm one. You're zero.")

Anyway, note that in the begin-from-zero loop, the iteration number
is one off from the count. The first iteration is one when i=0.
The second iteration has i=1, etc.

So we start with one rather than zero in the for loop:

   {% highlight html %}
   count = ...
   for (i = 1; i < count; i++) {
       // code block.
   }{% endhighlight %}

The condition for continuing iterating through the loop now
needs to change because now i would match the iteration.


<a name="CustomCalls"></a>

### Code call details in a custom script file

PROTIP: Most experienced LoadRunner engineers hand-craft calls.
They use code generated from recordings to analyze coding patterns.

Rather than leaving all the details of calls in the Action.js file,
details are moved to a separate file such as WJS1_Access,
leaving high-level calls such as this:

   ```
   rc=WJS1_Access_landing( "T01_landing","http://contoso.net/",100);
   ```

PROTIP: Name functions beginning with the name of the
file within which they are defined.

<a name="RandomizeCalls"></a>

### Randomize execution

There are some situations where requests are not executed 100%
but occassionally.
The code here can be used to execute something 72.3% of the time.
That static number can be substituted with another number or a variable.

   {% highlight html %}
  var trans_random_number = 72.3;
      wi_random_seed = Math.random() * 100 ;
  if( wi_random_seed <= trans_random_number ){
    lr.outputMessage(">> Within range. wi_random_seed = " + wi_random_seed + " <= " + trans_random_number );
    // Do stuff
    // ...
  }else{
    lr.outputMessage(">> Out of range. wi_random_seed = " + wi_random_seed + " NOT <= " + trans_random_number );
  }{% endhighlight %}

The seed is between 0 and 100 because the number obtained from the
JavaScript randomizer is a number between zero and 1,
multiplied by 100.

The <strong>wi_random_seed</strong> variable is defined when
the <strong>wi_library_init()</strong> function within the wi_library
is executed within vuser_init.

To obtain distribution, consider
<a target="_blank" href="http://jsfiddle.net/dje3z093/1/">
this</a> technique that produces a "bell curve" of numbers
clustered around .5 between 0 and 1.

<a name="ChainCalls"></a>

### Chain calls

The structure of code enables additional processing for all calls
without having to touch every request (which introduces risk).

For example, retry logic can be introduced into the chain of calls.

Or addition of preparation (<strong>prep</strong>)
activities such as assemblying body content.


<a name="GenericFunctions"></a>

### Use generic call functions

The wi_library.js file contains several generic functions such as
function WJS1_Access_landing() called from the sample Action file.

    {% highlight JavaScript %}
    rc=wi_web_url_http( in_trans , in_url, etc. );
    {% endhighlight %}


<a name="Retries"></a>

### Retry execution

During stress test runs, the server may not be respond to some requests.
Such behavior should not cause the script to stop because
the whole point of the script is to create stress conditions.

However, there needs to be a limit on how many times a particular
request (with a particular set of data values) are retried.

That limit is specified by the <strong>Retries</strong>
Run-time attribute. A zero value (the default) means no retries occur.

{% highlight JavaScript %}
function wi_web_url_http( in_trans , in_url ){
   var rc=0;
   var i=0;

   for( i = 1; i <= Retries; i++ ){

          rc=wi_web_url( in_trans , in_url , etc. );
      if( rc == 0 ){
        break;
      }
      // else loop again.
    }
   return rc;
}{% endhighlight %}

<a name="Redirects"></a>

### Redirect execution

Many landing pages redirect to another URL by returning a 302 response code along
with the next URL prefixed by "Location: " within the HTTP header.

LoadRunner is supposed to emulate browsers which automatically go to the forwarded URL.
But we sometimes want to capture that forwarding URL or a session-cookie
that some systems generate and add that to HTTP headers before forwarding.

Extra coding in LoadRunner including telling LoadRunner not to automatically forward:

    web_set_option("MaxRedirectionDepth", "0", LAST);

Sometimes the user is forwarded to a chain of URLs,
so a while loop is used to do forwarding.
This same sets up a web_reg_save_param to capture the Location: value
in HTTP headers:

CHALLENGE: Convert from <a target="_blank" href="https://ptfrontline.wordpress.com/2010/04/11/handle-http-re-directions-in-loadrunner-scripts-yourself/"> this sample C code</a> to JavaScript:

{% highlight JavaScript %}
// Initial Location URL:
lr_save_string("http://www.mercury.com", "Location");

do
{
    // Save new Redirection Info (Location: header)
    web_reg_save_param("Location",
                       "LB=Location: ",
                       "RB=\r\n",
                       "Ord=1",
                       "NotFound=Warning",
                       "Search=Headers",
                       LAST );

    // do any web call (This needs to be modified to suit your needs)
    web_url("my_req",
      "URL={Location}",
      LAST );

    // Get HTTP response Code
    HttpRetCode = web_get_int_property(HTTP_INFO_RETURN_CODE);

} while ((HttpRetCode>=300) & (HttpRetCode<400));

return 0;
}{% endhighlight %}


<a name="SpecifyLinkRetrieval"></a>

### Specify link retrieval mode

The <strong>in_mode</strong> variable provides a signal whether
the HTTP or HTML mode. It is also used to specify the HTTP commands
(PUT, GET, POST, etc.).

The wi_web_url() function called contains this:

   {% highlight html %}
   web.url({
    name : in_trans,
    url :  in_url,
    targetFrame : '',
    resource : 0,
    recContentType : 'text/html',
    referer : '',
    snapshot : 't1.inf',
    mode : in_mode
   });{% endhighlight %}

NOTE: A value in <strong>referer</strong> is
not needed with the Web Tours sample application which does not use it.

NOTE: The `mode: ` activates a feature of LoadRunner which
scans the html returned and issue requests for
links to CSS, JavaScript, images, etc.

(Images specified within CSS are not retrieved this way)

CHALLENGE: Change to `mode: HTTP` for LoadRunner to NOT request links as well.
Generate just individual resource requests during recording by setting:

   <img src="/images/LR1250 Recording Recording option 1034x204.png">

The <strong>in_mode</strong> variable is obtained from the function
which called it:

  * `rc=wi_web_url( in_trans , in_url, "HTML" );`
  * `rc=wi_web_url( in_trans , in_url, "HTTP" );`

To recap, there are several levels of generic functions:

   * Generic function called by application custom code
   contain retry logic, such as `wi_web_url_http()`.

   * Generic functions called by those functions
   in turn call LoadRunner built-in functions such as `web_url()`.
   Such are displayed in red by VuGen.

PROTIP: Using generic functions reduce the amount of code.
The less coding, the smaller the script's memory footprint.
Smaller scripts allow for more Vusers to fit into available memory on load generator machines.

NOTE: Generic functions do not contain message output.


<a name="GenericStartStop"></a>

### Use generic Start and End Transactions

The lowest-level functions surround LoadRunner call functions are
surrounded by a pair of wi_library functions:

   ```
   WJS1_Config_StartTrans( in_trans );
   ```

   and

   ```
   rc=WJS1_Config_StartTrans( in_trans , rc );
   ```

PROTIP: Specify Start and End transactions names using a parameter
("in_trans") so the code is more easily pastable and
there is no danger of typos in transaction start vs. end names,
avoiding the most common cause of runs being aborted.

<a name="ThinkTimeSecs"></a>

### Automatically vary Think Time

PROTIP: Putting think-time functions within a generic start and end function
ensures eliminates a common coding error of
having think time statements placed after start transaction statements that make think time and data preparating time
be counted in the transaction time.

   {% highlight html %}
   lr.thinkTime( nThinkTimeSecs );
   {% endhighlight %}

The variable <strong>nThinkTimeSecs</strong> is defined at the top
of the sample vuser_init script file.

CAUTION: Think times are only added during the run
if Run-Time Settings has been set to do so:

<img width="495" alt="lr1250 rts think time replay" src="https://cloud.githubusercontent.com/assets/300046/14413611/72c4aa1e-ff3c-11e5-9ca7-256effd1ff46.png">


<a name="CaptureResponses"></a>

### Capture response to be returned

How do you know whether the correct screen was returned?

PROTIP: After each user action, use script code to verify whether response from the server is what is expected (positive or negative).

LoadRunner provides several functions.

   * web.regFind()
   registers a search for a text string for the next action function.

   * web.regSaveParamEx
   registers a request to save dynamic data located between specified boundaries to a parameter.

   * web.regSaveParamJson
   registers a request to save dynamic data in an buffer that has been formatted as Json. The data is saved to a parameter.

   * web.regSaveParamRegexp
   registers a request to save dynamic data that matches a regular expression to a parameter.

   * web.regSaveParamXpath
   registers a request to find dynamic data in an HTML buffer that has been formatted as XML and save the data to a parameter.

CHALLENGE: Look for additional information
on these functions in VuGen Help on LoadRunner's Functional Reference

This call searches for text in the Body (rather than HTTP header)
to be returned from the server:

   {% highlight JavaScript %}
    if( in_title ){
        web.regFind({
           search : 'Body',
//           relFrameId: '',
//           fail : 'NotFound',
           saveCount : 'title_found_count',
           text : in_title
        });
    }{% endhighlight %}

The regFind() function is invoked only there is a title to be compared,
within the in_title variable provided as part of the call.

This function is in the start transaction code because, as the
"reg" in the function name implies, <strong>registers</strong>
the evaluation to be carried out as the response streams in.

Evaluation of the response is performed in
the endTransaction() function.

The `relFrameId` attribute refers to the HTML frame to search in.

VuGen does not record such functions. They must either be manually coded into the script. The VuGen UI provides a way to insert the function using a mouse.

This is a simple approach to <strong>stop execution</strong>
with an error at the point in the script
that makes the call related to the above code.

NOTE: The fail attribute specifies whether finding the string specified
if it's Found or NotFound.


<a name="VerifyResponses"></a>

### Verify response returned

In the endTransaction function, the `title_found_count` specified
in registration function is examined:

   {% highlight JavaScript %}
   if( lr.evalString("{title_found_count}") == "0" ){
      // Not found
   }{% endhighlight %}

The `title_found_count` in registration functions specify the name of a
<strong>LoadRunner parameter</strong>,
which transcends all JavaScript functions.

The parameter is also a string, so needs to be converted to a number
to do arithmetic.

What to do about information that the web page title is found or not
in the response depends on the application.
But most web pages do contain a title.

CHALLENGE: Look at the Help screen for the function to come up with a way to  
fail if the text is found (such as an error message).


NOTE: An error is raised immediately if the text is not found,
but at where the request is made, not at this script line
which registers the capture during request execution.


<a name="REST-APIs"></a>

### Make REST APIs

Before the transaction, we make call
<strong>web.regSaveParamJson</strong> to
register saving dynamic data in an buffer formatted as Json. The data is saved to a parameter.

The most flexible request function is:
<strong>web.customRequest();</strong>

   {% highlight JavaScript %}
{  
   stepName:"<string>",
   url:"<string>",
   method:"<string>",
   targetFrame:"<string>",
   encType:"<string>",
   recContentType:"<string>",
   referer:"<string>",
   bodyUnicode:"<string>",
   bodyBinary:"<string>",
   body:"<string>",
   bodyFilePath:"<string>",
   resource:"<string>",
   resourceByteLimit:"<string>",
   snapshot:"<string>",
   mode:"<string>",
   extraResBaseDir:"<string>",
   userAgent:"<string>",
   contentEncoding:"<string>",
   rawBody:{  
      content:"<string>",
      length:"<string>"
   },
   "extraRes":[{  
      url:"<string>",
      referer:"<string>"
   }]
}{% endhighlight %}

   This is described at:
   http://lrhelp.saas.hp.com/en/latest/help/function_reference/FuncRef.htm#js_web/lrFr_JS_web_customRequest.htm%3FTocPath%3DJavaScript%2520Functions%7CAlphabetical%2520Listing%2520of%2520Web%2520Functions%7C_____14

Additionally, REST APIs usually require HTTP header coding.

   {% highlight JavaScript %}
   web.addAutoHeader("Accept-Encoding", "gzip");
   {% endhighlight %}




<a neme="GenerateRecording"></a>

### Generate Recording to Recording File

PROTIP: Record into a file which is not executed so that whatever is generated can be gradually copy and pasted into a working script. And the script continues to be runnable after generation

NOTE: Not all script protocols are able to record within an existing script. Only scripts for Web, Java, WAP, Oracle NCA, or RTE Vuser script can be recorded this way.

NOTE: Each script file listed in the Action list is a separate
.js file within the script folder.

CHALLENGE: Create a separate file to receive generated code
durng recordin, but will never be edited or executed
so its line numbers stay in sync with code generation logs.

1. Right-click on Actions in the Solution Explorer at the left.

2. Select Create New Action… from the pop-up.

3. Type "Recording".

4. Press OK to dismiss the dialog.

   The Recording.js file should appear among vuser_init, Action, etc.

### Remove custom files from Run-Time Logic

CHALLENGE: Remove extra custom files (such as Recording)
from Run Logic so that it does not get executed automatically by LoadRunner.

1. Press F4 or menu Replay.

2. Click on Run-Time Settings

3. Click Run Logic.

4. Right-Click on Recording.

5. Select <strong>Remove Item</strong>.

6. Click OK to dismiss the dialog.

7. Press Ctrl+Shift+F4 or menu File.

8. Click Save to save the script.

9. Make a recording using WebTours inside the Recording action file that you just created. (after starting it)

10. Login as "jojo" with password "bean".
   Click Flights.
   In "Find Flights", click "Sign Off", then Stop recording.

  ![designstudio](https://cloud.githubusercontent.com/assets/10678180/14401664/43a45932-fdde-11e5-9e3a-b3cf5108a61e.png)

11.After code generation is done, Design Studio screen pops up.

12.Review the dynamic values. For example: Look this userSession value:

   ```
   118266.392466586zAiDDcHpfzcfDztQQpQzfDHf
   ```

   To understand the context of these values,
   use a text editor to read the recording generation log
   and search for it.

13.Select those that need to be correlated and click on Correlate.

NOTE: Design Studio can be reached manually by clicking the ‘Design Studio’ button in the toolbar or in the Design menu.

NOTE: In Recording Options dialog. Automatic correlations are enabled/disabled by selecting the ‘Correlation Scan’ checkbox under   General > Code Generation.

   NOTE: Most application recordings require additional
   manual changes after recording.



<a name="CreateCustomScripts"></a>

### Create custom script files

PROTIP: Generally, it's best to leave the automatically
created Action.js file with the fewest custom lines.
This would reserve use of Action for more flexibility in the future.

0. Create a use case file to hold custom functions
   using the steps to create a file above. An example is
   WJS1_Access (if you are not building from the sample script).

   PROTIP: Specify a standard naming convention such as
   "WJS1" for the app under test, etc.

   Use cases for the Web Tours (WT3_) application include:

   * WT3_Tour
   * WT3_Booking

   &nbsp;

   PROTIP: With JavaScript, you also need to add custom files as
   an Extra File so functions within them are recognized.

0. Right-click on Extra Files in the Solution Explorer and
   select <strong>Add Files to Script ...</strong>.

0. Select the custom file name just created.

CAUTION: Deleting an entry under Extra Files,
that physical file is deleted from the file system as well.


<a name="AppAccessFunctions"></a>

### Create custom app access functions

You are likely able to use the typical functions defined
within WJS1_Access by doing a Replace-All command to
your custom app name.

* WJS1_Access_Landing()
* WJS1_Access_SignUp()
* WJS1_Access_SignIn()
* WJS1_Access_SignOut()
* WJS1_Access_Reset_Password()
* WJS1_Access_Menus()


### Create negative app access functions

Additional functions include:

   * WJS1_Access_SignUp_error()
   * WJS1_Access_SignIn_error()

Such <strong>negative test cases</strong>
causing errors deliberately
may be useful because an app's error handling
sometimes have performance issues.
But attention to them are usually
held for development until
additional time becomes available for scripting.


<a name="RunType"></a>

### RunType app access scope

Different values in the RunType attribute in Run-Time settings
can be referenced to control what application access functions
are executed repeatedly.

| RunType | Function | Purpose |
| ------- | -------- | ------- |
| Land    | Landing URL only | Network variability |
| SignUp  | Land, SignUp  | Build user database |
| SignUpIn | Land, SignUp, SignIn, SignOut | Stress on authentication mechanism |
| SignInOut | Land, SignIn, SignOut | Stress on authentication mechanism |
| SignIn | Land, SignIn only | Emulate call center start of shift |
| Menus | Land, Menus | Run through all menus available before Sign-in is required. |
| MenusIn | Land, SignUp, SignIn, MenusIn, SignOut | Emulate initial user actions |
{: rules="groups"}

To implement this in code requires kinda convoluted thinking.

<a name="HandleErrors"></a>

###  Design error handling

PROTIP: Avoid duplicating the error-handling of apps used by end-users.
With programs for stress testing, we often want
the program to continue even when errors occur in order to
see how the entire system treats such conditions.

* When looping through a file of loosely related URLs,
an error with one row results in going to the next row.

* When running through a sequence, a login error would result in
going to the next user in the list.

* When a URL not found error is encountered,
since it can be attributed to transient network conditions,
the result would be to retry the call.

* When establishing run conditions, if a value is not supplied,
  automatically

LoadRunner can be asked to handle errors using
a function to exit from a script, action, or iteration:

    {% highlight JavaScript %}
    lr.exit(lr.EXIT_VUSER, lr.FAIL);{% endhighlight %}

Errors in intialization

<hr />

## Additional topics

### Additional JavaScript libraries

These are of interest. I haven't tested them yet.
So please let me know what you find.

* <a target="_blank" href="http://momentjs.com/">
  Moment.js</a> is a lightweight JavaScript date library for parsing, manipulating and formatting dates.

* <a target="_blank" href="http://momentjs.com/timezone/">
  Moment.js/timezone</a> parses and displays dates in any timezone.

* <a target="_blank" href="http://www.boilerjs.com/">
  boilerjs.com</a>
  which provides 115 methods to make it easier to work with arrays, collections, functions, numbers, objects, and strings. It's the JavaScript equivalent of a Swiss Army Knife.

* Underscore.js

* <a target="_blank" href="https://github.com/caolan/async">
  github.com/caolan/async</a>
  provides around 70 functions that include the usual 'functional' suspects (map, reduce, filter, each…) as well as some common patterns for asynchronous control flow (parallel, series, waterfall…).

NOTE: To save space (and memory while running),
mimify JavaScript to remove "white space" such as spaces and tabs.

<hr />

### Get Image by Screen Name

LoadRunner can generate script code like this based on the text of the link
(rather than the URL of the link):

{% highlight html %}
web.image(
{
name : 'Search Flights Button',
alt : 'Search Flights Button',
snapshot : 't3.inf'
}
);
{% endhighlight %}



### Submit form to Sign-up

To submit an HTML form:

{% highlight html %}
web.submitForm(
{
name : 'login.pl_2',
snapshot : 't11.inf',
itemData :  [
{name : 'username', value : '{UserIds_userid}'},
{name : 'password', value : '{UserIds_pwd}'},
{name : 'passwordConfirm', value : '{UserIds_pwd}'},
{name : 'firstName', value : ''},
{name : 'lastName', value : ''},
{name : 'address1', value : ''},
{name : 'address2', value : ''},
{name : 'register.x', value : '53'},
{name : 'register.y', value : '3'}
]
}
);
{% endhighlight %}

Some of the fields, such as register.x, can be marked hidden within the form
captured by LoadRunner.

### Submit data to POST Sign-in

{% highlight html %}
web.submitData(
{
name : 'login.pl',
action : '{pProtocolHostPort}/cgi-bin/login.pl',
method : 'POST',
recContentType : 'text/html',
referer : '{pProtocolHostPort}/cgi-bin/nav.pl?in=home',
snapshot : 't2.inf',
mode : 'HTML',
itemData :
    [
    { name : 'userSession', value : '{userSession}' },
    { name : 'username', value : '{UserIds_userid}' },
    { name : 'password', value : '{UserIds_pwd}' },
    { name : 'JSFormSubmit', value : 'on' },
    { name : 'login.x', value : '42' },
    { name : 'login.y', value : '8' }
    ]
  }
);
{% endhighlight %}


<a name="Resources"></a>

## Resources to Learn JavaScript #

There are many tutorials which teach JavaScript string manipulation and other topics:

* <a target="_blank" href="http://freecodecamp.com">freecodecamp.com</a>
  has learners use tutorials on codeacademy.com and other sites, then adds
  quizzes, all for free.

* <a target="_blank" href="http://www.w3schools.com/js/js_conventions.asp">
  JavaScript Conventions at W3Schools</a>

* <a target="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
   Mozilla's webpage is the most thorough and accurate</a>

* <a target="https://www.youdontknowjs.com/">
   You Don't Know JS</a> by Kyle Simpson @getify http://getify.me
   speakerdeck.com/getify


## Wait, there's more. Click one of these ... #

This article is one of a series about tuning and performance:

{% include tuning.html %}
