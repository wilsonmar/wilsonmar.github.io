---
layout: post
title: "Accelerated Mobile Pages"
excerpt: "Faster is better!"
tags: [google, programming, sample, gist]
date: "2016-03-27"
file: "accelerated-mobile-pages"
image:
# feature: pic brown blowholes sunset 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622013/564257e4-0584-11e6-8b3f-b2a14eea98a4.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

PROTIP: A recent innovation (from the geniuses at Google) enables websites to load nearly instantly even on mobile devices with slow connections.

This means that visitors will be more engaged, and thus buy more, etc.

## Official sites about AMP

   * <a target="_blank" rel="amphtml" href="https://github.com/ampproject/amphtml">
   github.com/amphtml</a> is the technical home for source.

   * <a target="_blank" rel="amphtml" href="https://www.ampproject.org/">
   ampproject.org</a> is the marketing home.

   * <a target="_blank" rel="amphtml" href="https://www.ampproject.org/docs/get_started/about-amp.html">
   ampproject.org/docs</a>

   * <a target="_blank" rel="amphtml" href="http://j.mp/amp-speed/">
     j.mp/amp-speed</a> has a full list of AMP optimizations

The rest of this section describes its use.

## Marvel at the speed of AMP

See how fast the Jekyll theme's demo website (by Adam Geitgey) renders:

   * <a target="_blank" rel="amphtml" href="http://ageitgey.github.io/amplify/2016/03/08/example-post.html">
   http://ageitgey.github.io/amplify/2016/03/08/example-post.html</a>

See even faster rendering on Google's CDN (Content Delivery Network):

   * <a target="_blank" rel="amphtml" href="https://amp.gstatic.com/c/s/ageitgey.github.io/amplify/2016/03/08/example-post.html">
   https://<strong>amp.gstatic.com</strong>/c/s/ageitgey.github.io/amplify/2016/03/08/example-post.html</a>

or

   * <a target="_blank" rel="amphtml" href="https://cdn.ampproject.org/c/s/ageitgey.github.io/amplify/2016/03/08/example-post.html">
   https://cdn.ampproject.org/c/s/ageitgey.github.io/amplify/2016/03/08/example-post.html</a>

See Google's search demo featuring the AMP carousel:

   * <a target="_blank" rel="amphtml" href="http://g.co/ampdemo">
   g.co/ampdemo</a>

   * <a target="_blank" rel="amphtml" href="https://ampbyexample.com/">
   ampbyexample.com</a>

   * <a target="_blank" rel="amphtml" href="https://www.youtube.com/watch?v=3dGO0Vs3ORg">
   A video showing its speed on mobile</a>


## Videos about AMP

Paul Bakaus, Developer Advocate has two videos:
   <amp-youtube data-videoid="lBTCB7yLs8Y" layout="responsive" width="480" height="270"></amp-youtube>

   &nbsp;

   The more technical:
   <amp-youtube data-videoid="SOx1XfOjJPI" layout="responsive" width="480" height="270"></amp-youtube>

   &nbsp;

Malte Ubl (@cramforce) at Google I/O 2016 (May): "How AMP achieves its speed":
   <amp-youtube data-videoid="cfekj564rs0" layout="responsive" width="480" height="270"></amp-youtube>

   &nbsp;

Alex Russell at Google I/O 2016 (May): "AMP + Progressive Web Apps: Start fast, stay engaged":
   <amp-youtube data-videoid="a5X_Ot-R6lo/" layout="responsive" width="480" height="270"></amp-youtube>

   &nbsp;

BTW, the above videos were served using AMP on this Jekyll-based site.


## How I added AMP to my Jekyll-based site

PROTIP: You don't need to have the whole site under AMP. 
Add the JavaScript to use AMP when you can.

   <amp-twitter width=486 height=657 layout="responsive" data-tweetid="716443188538449920" data-cards="hidden"></amp-twitter>

### Add JavaScript libraries

1.  Add in the <HEAD> section this:
(In a Jekyll site, edit the <strong>_head.html</strong> within the <strong>_includes</strong> folder.)

    <pre><cone>
    &LT;script async custom-element="amp-youtube" 
    src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js">
    &LT;/script>
    </code></pre>

2.  Add this above the ending </HEAD> tag:

    <pre><code>
    &LT;script async src="https://cdn.ampproject.org/v0.js">&LT;/script>
    </code></pre>

Yes, these really should be under the fold, but that's what Google does.

### Use \<amp-youtube> tags

Instead of this:

    https://www.youtube.com/watch?v=lBTCB7yLs8Y &LT;

Use this:

   <pre><code>
   &LT;amp-youtube data-videoid="lBTCB7yLs8Y" 
   layout="responsive" width="480" height="270">
   &LT;/amp-youtube>
   </code></pre>

   To get around in Markdown, 
   put the above in a <strong>amp-video.html</strong> file
   within the <strong>_includes</strong> folder,
   then use a Liquid include tag referencing that file:

   <pre><code>
   &#123;% include youtube-amp-video-01.html %}
   </code></pre>

## WordPress Plug-ins

   * <a target="_blank" rel="amphtml" href="https://github.com/Automattic/amp-wp/">
   https://github.com/Automattic/amp-wp</a> is officially supported.

   * <a target="_blank" rel="amphtml" href="https://wordpress.org/plugins/amp/">
   https://wordpress.org/plugins/amp/</a>

## Jekyll sites to use AMP

> If you see more, please let us know!

   * <a target="_blank" rel="amphtml" href="https://www.ampproject.org/docs/get_started/create_page.html"> 
   Create Your First AMP Page</a> 

   * <a target="_blank" rel="amphtml" href="http://fossbytes.com/google-amp-powered-jekyll-website-loads-faster/">fossbytes.com/google-amp-powered-jekyll-website-loads-faster</a>


### Get a sample Jekyll AMP site

0. Clone a AMP-enabled Jekyll theme from:
   
   * <a target="_blank" rel="amphtml" href="https://github.com/ageitgey/amplify">
   https://github.com/ageitgey/amplify</a>

   &nbsp;
   
0. Obtain dependencies:

   ```
   bundle
   ```

   The response on May 24, 2016:

   <pre>
Using hitimes 1.2.2
Using colorator 0.1
Using ffi 1.9.10
Using sass 3.4.15
Using rb-fsevent 0.9.5
Using kramdown 1.9.0
Using liquid 3.0.6
Using mercenary 0.3.5
Using rouge 1.10.1
Using safe_yaml 1.0.4
Using jekyll-paginate 1.1.0
Using bundler 1.11.2
Using timers 4.0.1
Using rb-inotify 0.9.5
Using jekyll-sass-converter 1.3.0
Using celluloid 0.16.0
Using listen 2.10.1
Using jekyll-watch 1.2.1
Using jekyll 3.1.2
Using jekyll-compose 0.4.1
Bundle complete! 3 Gemfile dependencies, 20 gems now installed.
Use `bundle show [gemname]` to see where a bundled gem is installed.
   </pre>

   NOTE: Previously, on March 30, 2016, there was an error
   "Gem::RemoteFetcher::UnknownHostError: no such name (https://rubygems.org/gems/hitimes-1.2.2.gem)"

4.  Build the site:

    ```
    jekyll serve
    ```

    I get these errors:

    {% highlight text %}
Configuration file: /Users/mac/gits/jekyll/amplify/_config.yml
            Source: /Users/mac/gits/jekyll/amplify
       Destination: /Users/mac/gits/jekyll/amplify/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.909 seconds.
 Auto-regeneration: enabled for '/Users/mac/gits/jekyll/amplify'
Configuration file: /Users/mac/gits/jekyll/amplify/_config.yml
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
    {% endhighlight %}

   Previously, this needed:

    ```
    gem install jekyll-watch -v 1.1
    gem install jekyll-paginate
    ```

0. Bring up:

    ```
    bundle exec jekyll serve
    ```

6.  In a browser, view the site in validation mode:

    ```
    localhost://4000
    ```


### AMP Validator

5.  In a browser, view the site in validation mode:

    ```
    http://localhost:4000/#development=1
    ```

   * <a target="_blank" rel="amphtml" href="https://www.ampproject.org/docs/guides/validate.html"> https://www.ampproject.org/docs/guides/validate.html</a>

   Examples include:
   
   + no scrollng elements
   + no stylesheets over 50K


### Add NewsArticle for better search positioning

PROTIP: Google gives preferential treatment to AMP pages on Mobile Search.

To get featured on Google search results, the `_includes/metadata.json` file 
provides the NewsArticle file Google uses. See:

   * <a target="_blank" rel="amphtml" href="http://schema.org/">
   http://schema.org/</a>


### Convert SCSS to CSS

With AMP, all CSS must be inline (no external CSS files) within a &LT;style amp-custom> in the header. Because of this, the main css file for this site is in _includes/styles.scss (instead of the standard css/ folder) and in-lined into the header of every page via the special scssify filter in _includes/head.html.

CAUTION: The AMP specification forbids the use of some CSS selectors and attributes. Because of this, it is not a good idea to include the main stylesheet by default.

1.  Copy from within folder css file main.scss.

2.  Open folder _includes to paste in file styles.scss.

3.  Rename file name main.scss to styles.scss.

4.  Edit folder _includes file head.htm to define the include:

   <pre></code>
   &#123;% include styles.scss %}
   </code></pre>

5.  Paste in the target page between style tags.

6.  Ensure the page still renders correctly.

### Add rel="amphtml" to href links

In order to do DNS pre-connects for faster speed, AMP needs an extra attribute in links to make links discoverable by the Google search engine. This makes it happen on existing Jekyll templates:

1.  Get the rb files local:
   
    ```
    git clone https://github.com/juusaw/amp-jekyll
    ```

2.  Copy in folder _plugins the ruby files from the repo: 

    ```
    amp_generate.rb and amp_filter.rb.
    ```

3.  Copy into the _layouts folder file amp.html from the repo.

4.  Install for HTML parsing:

    ```
    gem install nokogiri
    ```

5.  Install for image processing:

    ```
    gem install fastimage
    ```

6.  Add this to post headers:

   <pre></code>
   &#123;% if page.path contains '_posts' %}
   &LT;link rel="amphtml" href="{{ page.id | append:'/index.html' | prepend: site.baseurl | prepend: site.url }}">
   &#123;% endif %}
   </code></pre>

Add rel="canonical" to regular href links.

### Use \<amp-ad> for advertisements

AMP enables lazy-load of and prioritization of ads identified like this:

   <pre><code>
   &LT;amp-ad width=300 height=250 type="a9"
   data-axx_size="300x250"
   data-axx_pubname="test1"
   data-aax_src="302">
   &LT;/amp-ad>
   </code></pre>

Ad Platforms integrated into AMP:

   * AdSense by Google
   * A9 by Amazon
   * DoubleClick
   * Ad Reactor
   * Ad Tech by AOL

### Use &LT;amp-img> instead of &LT;img> tags

AMP gets some of its speed from caching images and video. It needs special tags with both a height and width specified. Examples:


   <pre><code>
   &LT;amp-img media="(min-width: 650px)" width="600" height="300" 
   layout="responsive" src="/assets/images/your_picture.jpg"></amp-img>
   </code></pre>

(Replace src contents with your own)

## Add other extended AMP tags 

They are described at:

   * <a target="_blank" rel="amphtml" href="https://github.com/ampproject/amphtml/blob/master/extensions/README.md">
   https://github.com/ampproject/amphtml/blob/master/extensions/README.md</a>

NOTE: AMP implements RAIL.

   * <a target="_blank" rel="amphtml" href="https://www.youtube.com/watch?v=X-qZu2Aoo98">
   AMP implements RAIL</a>


### Add NewsArticle for better search positioning

The AMP Project provides helpers for many other types of content like audio, ads, Google Analytics, etc. Built-in AMP tags are described at: 

   * <a target="_blank" rel="amphtml" href="https://github.com/ampproject/amphtml/blob/master/builtins/README.md">
   https://github.com/ampproject/amphtml/blob/master/builtins/README.md</a>

### Coding JavaScript #

* FastDOM library

## More videos

   * <a target="_blank" rel="amphtml" href="https://stackoverflow.com/questions/tagged/amp-html"> amp-html on stackoverflow</a>

   * <a target="_blank" rel="amphtml" href="https://www.youtube.com/watch?v=-zSkahXzAZI">
   Duda Webinar - What is the Google AMP Project?</a>
   discussion among developers.

## Opinion about implementing AMP

   * <a target="_blank" rel="amphtml" href="https://www.tunetheweb.com/blog/implementing-accelerated-mobile-pages/">
   tunetheweb.com/blog/implementing-accelerated-mobile-pages</a>


## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}

