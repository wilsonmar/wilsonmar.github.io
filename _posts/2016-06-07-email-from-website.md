---
layout: post
title: "Email from Static Jekyll sites"
excerpt: "I won't sell it, I promise"
tags: [Email, project]
date: "2016-06-07"
file: "email-from-website"
image:
# feature: pic data center slice 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622043/8b1f9cce-0584-11e6-8b9f-4b6db5bb6e37.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This discusses the "A" of the JAM stack - the API called by JavaScript.

* <a target="_blank" href="https://www.wufoo.com/">
   Wufoo</a> (Free & Paid Options)

* <a target="_blank" href="https://www.formspree.io/">
   Formspree.io</a> receives forms and emails you using SendGrid's API.
   It's free for up to 1000 submissions per month.

* <a target="_blank" href="https://getsimpleform.com/">
   Simple Form</a> (Free)

* <a target="_blank" href="https://www.formkeep.com/">
   FormKeep</a> ($19/mo.)

* <a target="_blank" href="https://www.kvstore.com/">
   kvstore.io</a> saves up to 100 key/value pairs per day for free.
   <a target="_blank" href="https://medium.com/@lordkada/store-user-generated-content-from-jekyll-github-pages-or-similar-ded76aabf17#.ganvvc5x1">
   His blog about it</a>

## Not on this list #

* <a target="_blank" href="http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html">
  Amazon Simple Email Service</a>
is an out-going service that sends emails from the cloud.

Salesforce provides a service,
but it costs $1,000 per year.


## Sample redirects visitors? #

What we want in our sample is an <strong>iframe</strong>
and async JavaScript so visitors stay on your website.
Here's an example for jQuery:

{% highlight json %}
$.ajax({
    url: "https://formspree.io/you@email.com", 
    method: "POST",
    data: {message: "hello!"},
    dataType: "json"
});
{% endhighlight %}

If the example code to paste is a HTML form (such as what FormSpree offers)

<pre>
&LT;form action="https://formspree.io/your@email.com" method="POST">
    &LT;input type="text" name="name">
    &LT;input type="email" name="_replyto">
    &LT;input type="submit" value="Send">
    &LT;input type="hidden" name="_subject" value="New submission!" />
    &Lt;input type="hidden" name="_next" value="//site.io/thanks.html" />
    &LT;input type="text" name="_gotcha" style="display:none" />
&LT;/form>
</pre>

your users will be taken to a site owned by the emailer,
and may not return.

## Spam protection #

It's important to protect your regular email address from harvester bots.

So use a throw-away email address and 
configure that account to have all emails forwarded to your real email address.

Or pay for sign-up for formspree's use of a randomized number instead of your email.

## Save forms to a database #



## Email services #

* send you an email with all the form content, plus enhancements

* Lookup the physical location associated with the IP address.

* Edit data in a form

* Organise data in collections, e.g. to differentiate the user-generated contents from your private configuration settings

* store and download data using different formats 
  (e.g. a JSON for a feedback page and a plain-text for a contact form)

* query/update your data by another program using a RESTful API.

* Statistics such as the number of new entries per day/month, etc.


<form action="https://formspree.io/wilsonmar@gmail.com"
      method="POST">
    <input type="text" name="name">
    <input type="email" name="_replyto">
    <input type="submit" value="Send">
</form>


## More on front-end software development #

This is one of several topics:

{% include front-end_links.html %}
