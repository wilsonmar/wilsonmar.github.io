---
layout: post
title: "Next-Previous Topic Navigation"
excerpt: "Go through the site in sequence"
tags: [authentication, personalization, jekyll]
date: "2016-03-27"
file: "next-previous-topic"
image:
# feature: ![fig ms edge flip ahead 1900x500](
  feature: https://cloud.githubusercontent.com/assets/300046/14624393/915bef12-0597-11e6-9817-a7c3e51b09a5.jpg
  credit: Microsoft
  creditlink: https://msdn.microsoft.com/library/jj883726%28v=vs.85%29.aspx?f=255&MSPPError=-2147217396
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## In Jekyll sites

To add Next/Previous functionality to posts,
use Jekyll's page.next and page.previous variables. 

See https://jekyllrb.com/docs/variables/

To paginate Collections, you'll have to roll your own custom Liquid to do it.


## Flip Ahead Browsing in Edge
Instead of clicking a <strong>Next</strong> button, visitors can go to the next page
by <strong>swipping</strong> left for next, right for previous, 
regardless of their actual location on the page.

This is called <strong>flip ahead</strong> functionality.

Microsoft has only made it only available in Internet Explorer in the new Windows UI,
not Internet Explorer for the desktop.

And one must opt in to use flip ahead on <strong>touch-enabled</strong> devices. 

0. Launch Internet Explorer 10. 
0. If you're using touch, swipe in from the right. 
   If you're using a mouse, move the cursor to the top-right corner of the screen.

0. Tap or click Settings > Internet Options.
0. Under Flip ahead, toggle Turn on flip ahead to On.


(For maximum browser compatibility, maintain the "Back" and "Next" navigation in addition to flip ahead.) 

Microsoft's new tool at:
https://dev.windows.com/en-us/microsoft-edge/tools/staticscan/
identifies whether a site has the feature enabled.

In the Windows Features > Flip Ahead Browsing section, it says: 

"To enable pagination and Flip Ahead browsing, add the following to your page's element:

{% highlight html %}
<link rel="next" href="/news/article1.aspx?page=2"/>
<link rel="next" href="/next"/>
<link rel="prev" href="/prev"/>
{% endhighlight %}

See https://msdn.microsoft.com/library/jj883726%28v=vs.85%29.aspx?f=255&MSPPError=-2147217396


