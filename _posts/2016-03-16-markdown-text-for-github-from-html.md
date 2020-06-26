---
layout: post
title: "Markdown text for GitHub from HTML"
excerpt: "Coding markup"
tags: [HTML, personalization, jekyll]
date: "2016-03-16"
file: "markdown-text-for-github-from-html"
image:
  feature: https://cloud.githubusercontent.com/assets/300046/14624073/7b96364a-0594-11e6-9643-06decef9dbfd.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This post is about how to craft markdown text in a file like README.md.

## Why Markdown? #

Back in 2004, Apple pundit John Gruber <a target="_blank" href="http://daringfireball.net/projects/markdown/
">came up with the idea of markdown</a> after becoming frustrated by laborious HTML tags to properly format his content. 

Markdown is a simple writing system which makes web-based documents both easier to write and 
easier to read in their raw state.

Most technical people now write whole blog sites in Markup. This is largely to put docs nearer to code, usually in README files. Self-publishing sites such as GitBook make use of markup. Even fiction writers are writing in markdown code to use GitHub’s collaboration features.

Many non-technical writers prefer writing Markdown text instead of using the mouse-enabled Microsoft Word.
They say writing pure text allows them to keep their fingers firmly planted on the keyboard
even as they apply formatting on the fly. 
Being able to format using text codes means they don't have to stop typing or think about anything else to apply text styling.

Markdown is less limiting than crafting Confluence.

## Automatic conversion #

There are many tutorials about markdown already, so this adds tricks to convert existing HTML into Markdown.
I've had to convert hundreds of pages I've written in HTML since the 90's.

You can copy HTML and paste into Dom Christie's website for conversion to Markdown:

   <ul><a target="_blank" href="http://domchristie.github.io/to-markdown/">
   http://domchristie.github.io/to-markdown</a>
   </ul>

## Bulk change HTML to Markdown programs

You can specify a URL to a HTML file:

   * <a target="_blank" href="http://www.aaronsw.com/2002/html2text/">http://www.aaronsw.com/2002/html2text</a>

It returns a page of Markdown text you can copy and paste to a Markdown file.

The author of that site provides his Python program at:

   * <a target="_blank" href="https://github.com/aaronsw/html2text">
   https://github.com/aaronsw/html2text</a>

Download and run the program using this syntax
(assuming Pythong is installed):

   ```
   chmod a+x html2text.py ; ./html2text.py erlang.html
   ```

PROTIP: Automatic approaches today are usually too automatic, converting what is better left in HTML.


## Paragraphs

One reason Markdown text is easier to write than HTML is
there is no need for `<p>` to force a blank line.

Just a blank line will do.

One can do a mass change of `<p>` in a text editor.

Remember to clean up ending  `</p>` tags.

## Ordered lists #

My favorite feature of Markdown is it **automatically ordered numbers in lists** like this:

{% highlight html %}
1. First item.
0. Second item.
9. Third item.
{% endhighlight %}

The coding above Markdown renders correctly as 1,2,3.

That means you can write this:

{% highlight html %}
1. First item.
1. Second item.
1. Third item.
&LT;br>&LT;br>
{% endhighlight %}

## Line breaks

PROTIP: Add line breaks (&LT;br>&LT;br>) under lists so add a blank line before the next paragraph.

Both styles of line break tags result in a new line (without a blank line in between):

the XHTML style:

{% highlight html %}
Hello<br />there
{% endhighlight %}

or HTML-style tags:

{% highlight html %}
Hello<br>there
{% endhighlight %}

## Indention

Markdown uses spaces in front of lines to indent text, such as:

{% highlight html %}
1. First item:

   Something

2. Second item 
{% endhighlight %}

PROTIP: A workaround if you are not able to get automatic numbering: code the numbering yourself.
To make Markdown interpret a paragraph starting with a number as a list,
put a left-slash in front of the dot, as in:

{% highlight html %}
1492\. That was the year.
{% endhighlight %}

In order for numbering to continue, all lines must be indented.

Heading lines can be indented.

4 or more back-ticks is a signal to highlight the sentence in a box, not to indent.

Use 3 spaces in front of 3 backticks.

Not specified in most tutorials about indenting markdown is the use of a bug in HTML.

   <ul>The `<ul>` HTML tag around this text causes an identation of 4 spaces.
   </ul>

## Unordered Lists

CAUTION: Even though HTML can be written or pasted into markdown (.md) files,
HTML must be more correct than HTML read by internet browsers.

* There must be a blank line before `<ul>` or `<ol>`.

* For every `<li>` there needs to be a `</li>` or the rendering goes wacky.

* There must be a blank line after anchor tags `<a name=...` and a heading text line.

PROTIP: Markdown recognizes different characters to parse into lists:

\* Asterisk

\+ plus sign

\- minus sign

render as:

   * Asterisk

   * plus sign

   * minus sign


## Special characters

Markdown treats these characters as ordinary text if there is backslash escape character in front of them:

* \\\   backslash itself
* \\`   backtick
* \\*   asterisk
* \\_   underscore
* \\{ \\}  curly braces
* \\[ \\]  square brackets
* \\( \\)  parentheses
* \\#   hash mark
* \\+   plus sign
* \\-   minus sign (hyphen)
* \\.   dot
* \\!   exclamation mark

PROTIP: If a URL contains attributes, **convert &amp; (ampersand)**

Another aspect where it would be helpful to use tools is conversion of some special characters
that Markdown converts into escape entities that begin with an **&amp;** (ampersand),

* **&lt;** (less than) is turned into &amp;lt;

* **&gt;** (greater than) is turned into &amp;gt; because that's used to signify block quotes in Markdown.

* the ampersand itself turns to &amp;amp;, as in link URLs.

## Headings #

Instead of the opening `<h2>` and such tags, replace with `##`
(called <a target="_blank" href="http://www.aaronsw.com/2002/atx/">Atx-style</a> headers).

Markdown recognizes up to 6 hash characters for 6 levels.

The ending '##' character is optional. It can be any number of characters.

## Tables #

Alternately, <a target="_blank" href="http://docutils.sourceforge.net/mirror/setext.html">Setext-style</a>
headers are specified (“underlined”) by a series of
equal signs (for first-level headers) and dashes (for second-level headers):

<pre><code>
First-level H1 headers
=============

Second-level H2 headers
-------------
</code></pre>

## Tables in HTML

HTML tables renders well from within Markdown text document.

However, some HTML tables were used in the early days of the internet
were used to format an entire page. Such coding would need surgery to look well
since tables are now intended to fit into a text column.

## Bold and italics

CAUTION: Markdown coding are not processed within HTML tables.

So within tables continue to bold with

{% highlight html %}
<strong>emphasized</strong> rather than Markdown __emphasized__ or **emphasized**
{% endhighlight %}

which renders as:

<strong>emphasized</strong> rather than Markdown __emphasized__ or **emphasized**

Continue to italicize with:

{% highlight html %}
<em>italicized</em> rather than Markdown _italicized_ or *italicized*
{% endhighlight %}

which renders as:

<em>italicized</em> rather than Markdown _italicized_ or *italicized*


## Tools?

To see your markdown turn into HTML, use this online tool:

   * <a target="_blank" href="http://daringfireball.net/projects/markdown/dingus">Dingus</a>

The easiest way to convert HTML to Markdown text is to use Aaron Swartz’s

   * <a target="_blank" href="http://www.aaronsw.com/2002/html2text/">html2text.py Python script or on-line</a>
   But it has not been updated since 2011.

> My experience is that we'll need to pretty much go through each line
to make it look good in Markdown text.

## Links

PROTIP: Keep coding HTML to link to external sites and images.

Example of HTML:

{% highlight html %}
<a taget="_blank" title="hello" href="http://wilsonmar.github.io/">my site</a>
{% endhighlight %}

> The biggest hassle with converting to Markdown text from HTML coding is that
Markdown reverses the order of text and links.

{% highlight html %}
 [mysite](http://wilsonmar.github.io/)
{% endhighlight %}

The same goes for the alternate "automatic" format Markdown offers to link:

{% highlight html %}
<http://wilsonmar.github.io>
{% endhighlight %}

> I'm reluctant to put external links in Markdown because
they open in the **same window**, causing my site to lose visitors to that site.

{% highlight html %}
![mysite logo](http://wilsonmar.github.io/favicon.png/ "optional title")
{% endhighlight %}

   Notice that links to images would have an exclaimation point in front.

> Markdown currently has no syntax for specifying the dimensions of an image.

To embed a YouTube video, use an HTML iframe.

{% highlight html %}
<iframe width="560" height="315" src="https://www.youtube.com/embed/Onv9nhPIBp0" frameborder="0" allowfullscreen> </iframe>
{% endhighlight %}

To specify starting the video at a specific time (1 minute 2 seconds), use a link such as:

{% highlight html %}
<a target="_blank" href="https://www.youtube.com/watch?v=Onv9nhPIBp0&t=1m2s">Link to YouTube</a>.
{% endhighlight %}

## Horizontal rule

A line going across the page in HTML is:

{% highlight html %}
<hr />
{% endhighlight %}


## Blockquotes in HTML

Markdown ignores the HTML `<blockquote>` tag. So this appear as if it was not surrounded by the tag:

{% highlight html %}
<block>
This is a block quote.
</block>
{% endhighlight %}

## Different Parsers

The trouble with Markdown code is that different parsers render them differently into HTML.

In March, 2016 GitHub switched to the **Kramdown** parser which
claims to incorporate the capabilities of other parsers:

   * <a target="_blank" href="https://github.com/vmg/redcarpet">RedCarpet</a>

   * <a target="_blank" href="http://pandoc.org/">Pandoc</a>

   * <a target="_blank" href="http://dafoster.net/projects/rdiscount/">Rdiscount</a>


## Liquid Markdown Syntax

Markdown text in GitHub recognizes Liquid syntax as defined in:

   <ul>[https://docs.shopify.com/themes/liquid/basics](https://docs.shopify.com/themes/liquid/basics)
   </ul>

This coding would process html as such between a set of
Liquid &#123;% tag markers:

<pre><code>
&#123;% highlight html %}
<strong>Hello</strong>
&#123;% endhighlight %}
</code></pre>

Liquid <strong>output</strong> markup can also be specified between two curly braces,
such as:

{% highlight text %}{% raw %}
{{ page.heading | upcase | truncate: 8 }}
{% endraw %}{% endhighlight %}

The page.heading refers to the heading variable specified in the front matter at the top of the file.

To display Liquid markup in documentation:

<pre><code>
&#123;% highlight html %}&#123;% raw %}
&#123;&#123; page.heading | upcase | truncate: 8 }}
&#123;% endraw %}&#123;% endhighlight %}
</code></pre>

In fact, Liquid is a rather (simple yet complete) <strong>programming language</strong> on its own right, with if/then/else,
for loops, etc.
The home page for Liquid template language (written in Ruby):

* <a target="_blank" href="http://shopify.github.io/liquid/">
shopify.github.io/liquid/</a>

## JavaScript

What if we pasted JavaScript (wrapped between `<script>` tags) in Markdown?

<script>
var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
</script>

## Footnotes

This incorporates the thorough detail about markdown coding at:

* <a target="_blank" href="http://daringfireball.net/projects/markdown/">daringfireball.net</a>                                                                       

A discussion forum about markdown is at:

* <a target="_blank" href="https://pairlist6.pair.net/mailman/listinfo/markdown-discuss/">
   pairlist6.pair.net/mailman/listinfo/markdown-discuss</a>


## References #

* <a target="_blank" href="http://whatismarkdown.com/">
   whatismarkdown.com</a>

* <a target="_blank" href="https://blog.ghost.org/markdown/">
   List of markdown editors across operating systems</a>

* https://blog.ghost.org/markdown/




## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}

## More about Git & GitHub #

This is one of a series on Git and GitHub:

{% include git_links.html %}
