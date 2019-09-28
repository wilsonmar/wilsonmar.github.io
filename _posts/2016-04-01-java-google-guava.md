---
layout: post
title: "Java Google Guava Ecosystem"
excerpt: "End of any doubt Googlers are our boss."
tags: [google, guava, java, programming]
date: "2016-04-01"
file: "java-google-guava"
image:
# pic green guava basket 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15744015/985aac60-2886-11e6-9ce0-71fb50c6720d.jpg
  credit: Alpha Coders
  creditlink: https://wall.alphacoders.com/big.php?i=439522
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Among the thousands of libraries imported by Java programs on GitHub,
Guava is the #2 (behind Log4J):

   * <a target="_blank" href="https://github.com/google/guava">
   https://github.com/google/guava</a>

Although nearly 9,000 have starred it at time of writing,
only around 1,000 are watching it.

## Why This Page #

The contribution of this particular page here is to present an understandable <strong>sequence</strong>
to learn programming Java using library along with
static code quality scanners (such as Qulice) and profilers (such as JProfiler)

I think this is what it takes to be a good and fast Java programmer today.

Might as well learn to do it right the first time than to pick up bad habits.

> It's kinda like learning to swim by diving into the deep end of a pool filled with Olympic swimmers.

This is probably why <a target="_blank" href="https://en.wikipedia.org/wiki/Google_Guava">
the Wikipedia page on Guava</a> mentions that developers of the library don't
encourage outside contributions.


## Get It on Your Laptop #

0. On a Mac, create a group folder (google), then

   <tt><strong>
   git clone https://github.com/google/guava
   </strong></tt>

   Its license is permissive Apache.

0. Process its pom.xml file using Maven:

   mvn initialize

   mvn validate

## Diving In

The starting point for the various components has been the repo's own wiki:

   * <a target="_blank" href="https://github.com/google/guava/wiki">
   https://github.com/google/guava/wiki</a>

Learn this as if an "immersive" experience like moving to Mexico to learn Spanish.

Or learning to cook in a 5-star restaurant.
Well, this is like the names of knives.


<a target="_blank" href="http://stackoverflow.com/questions/3759440/the-guava-library-for-java-what-are-its-most-useful-and-or-hidden-features?rq=1">
its-most-useful-and-or-hidden-features</a>

1. basic utilities to reduce menial labors to implement common methods and behaviors, 
such as generics (introduced in JDK 1.5) extended with
multisets, multimaps, bimaps, and immutable collections

2. an extension to the Java collections framework (JCF) formerly called the Google Collections Library,

3. other utilities which provide convenient and productive features such as 
functional programming, caching, range objects, and hashing


## Folders

The structure of folders in the library:

* guava-testlib 
   * **src**/com/google/common
      * collect
      * escape
      * graph
      * testing
      * util
   * **test**/com/google/common
      * collect
      * testing
      * util
* guava-tests
   * **benchmark**/com/google/common
   * **test**/com/google/common 
* guava
   * src/com/google/common
   * src/com/google/thirdparty

## Packages

Folders under the folders above:

| Package     | testlib<br>src | testlib<br>test | tests<br>benchmark | tests<br>test | src |
| :-------    |  :----------   |:--------------- | :----------------- | :-----------  | :-- |
| annotations | - | - | - | - | X |
| base        | - | - | X | X | X |
| cache       | - | - | X | X | X |
| collect     | X | X | X | X | X |
| escape      | X | - | - | X | X |
| eventbus    | - | - | X | X | X |
| graph       | X | - | X | X | X |
| hash        | - | - | X | X | X |
| html        | - | - | - | X | X |
| io          | - | - | X | X | X |
| math        | - | - | X | X | X |
| net         | - | - | - | X | X |
| primitives  | - | - | X | X | X |
| reflect     | - | - | - | X | X |
| testing     | X | X | - | - | - |
| util.concurrent | X | X | X | X | X |
| xml         | - | - | - | X | X |

There are similar ones in the Java Core library.

Each of these are specified at the top of programs using them, such as:

<pre>
package com.google.common.annotations;

import java.lang.annotation.Documented;
</pre>

## Deprecations

Some, such as Date, have not been removed.

## Benchmarking

Let's look in library files within<br>
/guava-tests/benchmark/com/google/common/util/concurrent

Some have equivalent classes in the source.

| In src | In guava-test/benchmark |
| :----- | :------------ |
| AbstractFuture.java | AbstractFutureFootprintBenchmark.java |
| CycleDetectingLockFactory.java | CycleDetectingLockFactoryBenchmark.java | 
| ExecutionList.java | ExecutionListBenchmark.java | 
| FuturesGetChecked.java | FuturesGetCheckedBenchmark.java | 
| - | MonitorBasedArrayBlockingQueue.java | 
| - | MonitorBasedPriorityBlockingQueue.java | 
| - | MonitorBenchmark.java | 
| - | MoreExecutorsDirectExecutorBenchmark.java | 
| - | SingleThreadAbstractFutureBenchmark.java | 
| - | StripedBenchmark.java | 


### Caliper library

Several of the files begin with this:

<pre>
import com.google.caliper.BeforeExperiment;
import com.google.caliper.Benchmark;
import com.google.caliper.Param;
</pre>

<a target="_blank" href="https://github.com/google/caliper">
Google Caliper</a> is used to benchmark some simple code.

Alternately, one can use Perfidix http://disy.github.io/perfidix/
which offers Eclipse Integration and can be used like JUnit.
Another option is JUnitbenchmarks http://labs.carrotsearch.com/junit-benchmarks.html for Junit 4+
and build html charts to compare results.


## Docs

New release every 3 months, with breaking changes.
@Beta included in each release.

Announced on

   * <a target="_blank" href="https://plus.google.com/+googleguava">
   +GoogleGuava</a>

   * <a target="_blank" href="http://groups.google.com/group/guava-announce">
   groups.google.com/group/guava-announce</a>

Docs on specific releases:

   * [google.github.io/guava/releases/19.0/api/docs/](http://google.github.io/guava/releases/19.0/api/docs/)

## Videos

"Making Java Bearable with Guava 2015 Edition by Daniel Hinojosa of DZone" (March 11, 2015 at DevNexus):

   <amp-youtube data-videoid="0L1UU8mRfxk" layout="responsive" width="480" height="270"></amp-youtube>

   * <a target="_blank" href="http://github.com/dHinojosa/usingguava">http://github.com/dHinojosa/usingguava</a>

   * [10:19] Even though I use Scala now, I still use Multimap.
   * [13:30] Multiset (Bag)
   * [17:46] Immutability vs modifiability 
   * [21:02] Problem with Map only allows 5 items (no tuples in Java) 

&nbsp;

In this "Overview of Guava: Google Core Libraries for Java" (from 2012):

   <amp-youtube data-videoid="MFEJll-wU7Q" layout="responsive" width="480" height="270"></amp-youtube>

   * [33:35] "the three mathematical properties that every comparator must have:
   reflexive, transitive, and anti-symetric. But I forgot what anti-symetric means".
   * ComparatorChain is more future-proof (if sort changes)
   * [35:20] Hash maps: HashCode
   * [41:30] BloomFilter provides common false positive values to avoid expensive queries

&nbsp;

"Four reasons to use Guava" by Paul Gestwiki:

   <amp-youtube data-videoid="r8seIn7NZQw" layout="responsive" width="480" height="270"></amp-youtube>

   * [01:14] Lists named static methods instead of constructors 
   * [02:36] Maps wrapper around Collections
   * [03:09] ImmutableList. are not just wrapper around core Java, for defensive
   * [04:38] Preconditions
   * [06:08] Range

&nbsp;

"Google Guava - the Core Library You Always Wanted" by <a target="_blank" href="https://www.linkedin.com/in/mitemitreski">
Mite Mitreski</a> from Macendonia, Stockholm, Sweden:

   <amp-youtube data-videoid="96R9I1i0AM4" layout="responsive" width="480" height="270"></amp-youtube>

   * [03:18] It's not clear what Null means (like Boolean)
   * [09:14] JSR-305 Annotations for software defect detection
   * [17:52] Wrapper overload (table) pack numbers within larger numbers
   * [18:50] Utility classes end with s.
   * [19:24] CharMatcher.WHITESPACE easier than RegEx.
   * [21:15] Cache Builders have different ones for local (not external)
     for Eviction, 
   * [23:41] .weakKeys() can be garbage collected avoids memory leaks
   * [25:12] .recordStats() for CacheStats. 
   * [26:00] Map != Cache
   * [26:56] collect package for Immutable Collections
   * etc. to 46.:05

&nbsp;

If you speak German, from Eric Weiki:

   <amp-youtube data-videoid="4ynVrMtg1TE" layout="responsive" width="480" height="270"></amp-youtube>

&nbsp;

From LevelUp Lunch:

1. Filtering Collections:

   <amp-youtube data-videoid="sAoDG22uzGA" layout="responsive" width="480" height="270"></amp-youtube>

   &nbsp;

2. Transforming objects:

   <amp-youtube data-videoid="nAcs321_hAk" layout="responsive" width="480" height="270"></amp-youtube>


<!--
## Assertions

### Stopwatch

### Preconditions

### Caching

-->

## Discussions

* <a target="_blank" href="https://groups.google.com/forum/#!forum/guava-discuss">
   groups.google.com/forum/#!forum/guava-discuss</a>

* <a target="_blank" href="http://stackoverflow.com/questions/ask?tags=java+guava">
   Stackoverflow search of java+guava</a>

## Resources

* http://www.tutorialspoint.com/guava/guava_overview.htm