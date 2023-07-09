---
layout: post
date: "2023-07-08"
file: "jekyll-site-development"
title: "Jekyll (JAM) site development"
excerpt: "Getting started with Jekyll"
tags: [website, builder, simplicity, jekyll]
image:
# feature: scr white jekyll static tools 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622170/48b1ceb0-0585-11e6-8b19-b9d09feebd6f.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i> 
{% include l18n.html %}
{% include _toc.html %}

NOTICE: 
<a target="_blank" href="https://kubernetes.io/blog/2018/05/05/hugo-migration/">Kubernetes.io moved their docs to Hugo in 2018</a>.

This article contains notes on getting started with Jekyll and other static websites.

This is one in a series:

   0. [Static website development](/static-websites/)
   0. [Jekyll site development](/jekyll-site-development/)
   0. [Jekyll templates and themes](/jekyll-templates/)
   0. [Email from Jekyll sites](/email-from-jekyll/)
   0. [Add search to Jekyll sites](/jekyll-with-algolia-search/)
   0. [Authenticate on static sites](/authentication-on-static-site/)
   0. [Clickable maps in Jekyll sites](/clickable-maps-in-jekyll-posts/)

{% include whatever.html %}

There is also <a target="_blank" href="https://wilsonmar.github.io/gatsby">Gatsby</a> and others.

But Jekyll is still currently the [most popular among static site builder options](/static-websites/).


## The objective

What we would like to do after going thrugh the below is to type this on a Terminal and a browser would open to show your Jekyll site locally.

1. In the macOS `~/.bash_profile` add a shortcut, but substitute "wilsonmar" with your own GitHub account name:

   <pre>
   alias js='cd ~/gits/wilsonmar/wilsonmar.github.io; \
   bundle exec jekyll serve --config _config.yml'
   </pre>

1. Create the folder.


## Ruby build

## Upgrade Apple XCode

1. Install the latest XCode from Apple. See my tutorial at <a target="_blank" href="https://wilsonmar.github.io/xcode/">https://wilsonmar.github.io/xcode</a>

2. Per https://github.com/rbenv/ruby-build/wiki#suggested-build-environment

   <pre><strong>brew install openssl libyaml libffi</strong></pre>

## Install rbenv

   <pre><strong>brew install rbenv ruby-build</strong></pre>

Jana Bergant's <a target="_blank" href="https://www.udemy.com/static-website-generator-fast-secure-sites-blogs-with-jekyll/">
Udemy course</a> uses a mac install Jekyll 3.3.0 at last viewing:

   <pre><strong>gem update --system -n /usr/local/bin --no-document</strong></pre>

   `-n /usr/local/bin` ensures avoids "You don't have write permissions for the /usr/bin directory."

   `--no-document` to avoid installing documentation (which can be accessed online anyway)

   The response, at time of writing was:

   <pre>
Updating rubygems-update
Fetching rubygems-update-3.0.3.gem
Successfully installed rubygems-update-3.0.3
Parsing documentation for rubygems-update-3.0.3
Installing ri documentation for rubygems-update-3.0.3
Installing darkfish documentation for rubygems-update-3.0.3
Done installing documentation for rubygems-update after 36 seconds
Parsing documentation for rubygems-update-3.0.3
Done installing documentation for rubygems-update after 0 seconds
Installing RubyGems 3.0.3
Bundler 1.17.3 installed
RubyGems 3.0.3 installed
Regenerating binstubs
Parsing documentation for rubygems-3.0.3
Installing ri documentation for rubygems-3.0.3
&nbsp;
=== 3.0.2 / 2019-01-01
&nbsp;
Minor enhancements:
&nbsp;
* Use Bundler-1.17.3. Pull request #2556 by SHIBATA Hiroshi.
* Fix document flag description. Pull request #2555 by Luis Sagastume.
&nbsp;
Bug fixes:
&nbsp;
* Fix tests when ruby --program-suffix is used without rubygems
  --format-executable. Pull request #2549 by Jeremy Evans.
* Fix Gem::Requirement equality comparison when ~> operator is used. Pull
  request #2554 by Grey Baker.
* Unset SOURCE_DATE_EPOCH in the test cases. Pull request #2558 by Sorah
  Fukumori.
* Restore SOURCE_DATE_EPOCH. Pull request #2560 by SHIBATA Hiroshi.
&nbsp;
=== 3.0.1 / 2018-12-23
&nbsp;
Bug fixes:
&nbsp;
* Ensure globbed files paths are expanded. Pull request #2536 by Tony Ta.
* Dup the Dir.home string before passing it on. Pull request #2545 by
  Charles Oliver Nutter.
* Added permissions to installed files for non-owners. Pull request #2546
  by SHIBATA Hiroshi.
* Restore release task without hoe. Pull request #2547 by SHIBATA Hiroshi.
&nbsp;
&nbsp;
------------------------------------------------------------------------------
&nbsp;
RubyGems installed the following executables:
	/Users/wilsonmar/.rbenv/versions/2.6.1/bin/gem
	/Users/wilsonmar/.rbenv/versions/2.6.1/bin/bundle
&nbsp;
Ruby Interactive (ri) documentation was installed. ri is kind of like man 
pages for Ruby libraries. You may access it like this:
  ri Classname
  ri Classname.class_method
  ri Classname#instance_method
If you do not wish to install this documentation in the future, use the
--no-document flag, or set it as the default in your ~/.gemrc file. See
'gem help env' for details.
&nbsp;
RubyGems system software updated
   </pre>


## Create a folder

CAUTION: In 2019, GitHub changed <a target="_blank" href="https://github.com/pricing">their pricing policies</a> to begin charging for hosting websites (at $7/month). That $84 per year is less than what many hosting companies charge to provide a single machine. But GitHub also provides free scaling and a fast world-wide CDN for no additional cost.


In GitHub create a <em>youraccount</em>.github.io repo.

Delete file .bundle from my Home folder (rm -rf ~/.bundle). You can check out your configuration running bundle env

https://jekyllrb.com/docs/

In Terminal, from any folder, 

   <pre>sudo gem uninstall bundler
   gem update --system
   </pre>

   If the latest version is not installed, you get a message like this:

   <pre>
ERROR:  While executing gem ... (Errno::EPERM)
    Operation not permitted @ rb_sysopen - /System/Library/Frameworks/Ruby.framework/Versions/2.3/usr/bin/gem
   </pre>    

   <pre>
   rbenv rehash
   sudo gem install bundler
   </pre>

   A valid response I got:

   <pre>
Successfully installed bundler-2.0.1
Parsing documentation for bundler-2.0.1
Done installing documentation for bundler after 4 seconds
1 gem installed
   </pre>

   ### Install Jekyll (instead of Homebrew):

   <pre><strong>gem install jekyll --no-document</strong></pre>

   The response:

   <pre>
Successfully installed jekyll-3.8.5
Parsing documentation for jekyll-3.8.5
Done installing documentation for jekyll after 1 seconds
1 gem installed
   </pre>


   http://ryan.mcgeary.org/2011/02/09/vendor-everything-still-applies/

In _config.yml

exclude: ["vendor", "lib", 

   ### Demo Site

1. Use or create an enclosing folder, such as "projects".

   jekyll new demosite

   The response should be "New jekyll site installed ...".

   BLAH: I'm getting this message:

   <pre>
Your user account isn't allowed to install to the system RubyGems.
  You can cancel this installation and run:
&nbsp;
      bundle install --path vendor/bundle
&nbsp;
  to install the gems into ./vendor/bundle/, or you can enter your password
  and install the bundled gems to RubyGems using sudo.
&nbsp;
  Password: 
   </pre>

## Bundle install #

After downloading, have Maven pull in dependencies based on the Gemfile:

   <tt><strong>
   bundle install
   </strong></tt>

   NOTE: Technically, "install" is not needed since it's the default command for bundle.

Bundling makes the list of dependencies in the <strong>Gemfile</strong> to be downloaded.


   <pre>
Your user account isn't allowed to install to the system RubyGems.
  You can cancel this installation and run:
&nbsp;
      bundle install --path vendor/bundle
   </pre>      



## Grunt tasks #

Behind the scenes is a running of the **Gruntfie.js** that comes with the theme.
It defines the parameters of various tasks that are downloaded:

* <a target="_blank" href="https://github.com/gruntjs/grunt-contrib-clean">clean</a>
clears files and folders.
* <a target="_blank" href="https://github.com/gruntjs/grunt-contrib-jshint">jshint</a>
validates files with JSHint, based on the **.jshintrc** configuration file at the root folder.
* <a target="_blank" href="https://github.com/gruntjs/grunt-contrib-uglify">uglify</a>
minfies files with UglifyJS.
* <a target="_blank" href="https://github.com/gruntjs/grunt-contrib-watch">watch</a>
runs tasks whenever watched files change.
* <a target="_blank" href="https://github.com/gruntjs/grunt-contrib-imagemin">imagemin</a>
minifies PNG graphics files.
* <a target="_blank" href="https://github.com/sindresorhus/grunt-svgmin">grunt-svgmin</a>
minifies SVG graphics files.

NOTE: File names beginning with a dot are hidden.


## Serve Jekyll landing page

Theme programming goes to work generating HTML files in folder **_site**
when this command is issued when the present working directory is the
site's folder:

<a name="invoke-server"></a>

To see the site the way GitHub would generate it
(without additional plug-ins some templates provide):

   ```
   bundle exec jekyll serve --safe
   ```

   The precise version of plug-ins used by GitHub on-line is listed
   <a target="_blank" href="https://pages.github.com/versions/">here</a>.


Otherwise:

   ```
   bundle exec jekyll serve --baseurl ''
   ```

   Alternately, override local URLs:

   ```
   bundle exec jekyll serve --config _config.yml,_config_dev.yml
   ```

   PROTIP: Define an alias, such as "bs" in <strong>~/.bash_profile</strong> file:

   `alias bs='bundle exec jekyll serve --config _config.yml,_config_dev.yml'`

   PROTIP: Leave this terminal instance running and open another Terminal
   instance to work on the content of the site.


The generated HTML files can then be accessed from an internet browser
at this URL:

   <a target="_blank" href="http://localhost:4000">http://localhost:4000</a>

   The landing page of the site is defined in the **index.md** file at the root folder.

The theme by itself does not show much.
The template's author assumes that technical people will be using his creation.

When the web server starts, it is industry standard for the `index.html` file to be rendered.

0. Edit file index.html file. By default it contains this: 

{% highlight HTML %}
---
layout: archive
author_profile: true
---
&#217;% include base_path %}

&LT;h3 class="archive__subtitle">Recent Posts&LT;/h3>

&#217;% for post in paginator.posts %}
&#217;% include archive-single.html %}
&#217;% endfor %}

&#217;% include paginator.html %}
{% endhighlight %}


Between the two triple-dash characters is the <strong>"front matter"</strong>
for Jekyll to interpret.

Jekyll uses the layout tag's value <strong>archive</strong> to build out the page
according to the archive.html file within the _layouts folder.

Another layout type, splash, arranges the page with thumbnail pictures.

The other layout types are default, single, and compress.

Jekyll converts index.md files to index.html files.

### Edit index.html author_profile

Having `author_profile: true` tells Jekyll to add the profile on the left side.

0. If you would rather have text greet your visitors, add it.


{% highlight text %}
---
layout: home
excerpt: "By Wilson Mar"
tags: [Jekyll, theme, responsive, blog, template]
image:
feature: sunrise-1900x500.png
credit:
creditlink:
---
{% endhighlight %}

0. If you would rather have text greet your visitors, add it.

{% highlight html %}
<meta name="keywords" content="Jekyll, theme, responsive, blog, template">
{% endhighlight %}

TODO: Substitute the image file name in the **feature:** variable
with an alternative file you placed in the **images** folder.


Return to this page from any other by clicking on the site's title 
presented at the upper left corner.


## Change README.md content
0. Use a text editor program to open the README.md file at the root.

   This file is not shown on the website.

   It was written for those who work with the site's code, 
   not readers of the resulting website.

   So the content of this page should be changed from being about the theme
   to about the website derived from the theme template, such as:

   "I hope you'll file an issue or send a Pull Request. I need the help."

0. File mm-theme-post-600.jpg within the <strong>images</strong> folder can be deleted.


### Edit _config.yml and reset server

0. Use a text editor to edit **_config.yml**.

   ```
# Site Settings
locale                   : "en-US"
title                    : "Home"
title_separator          : "-"
name                     : "Wilson Mar"
description              : "Hello. Hire me."
   ```

0. Change the `title` text from "USER_" to `"Home"` or whatever you want.

0. Change the name value to your screen name.


0. Save and exit the file.
0. Stop the server so the changes take.
0. Start the server again.

0. When you view the page again, notice the heading has changed to your title value.


### Edit _config.yml author info

0. Again use a text editor to edit the _config.yml file to change other values.

0. Scroll down the file to:

   ```
# Site Author
author:
name             : "Wilson Mar"
avatar           : "bio-photo.jpg"
bio              : "Hello."
location         : "Everywhere"
   ```

0. Change the default author name, bio text, and location.

   <a href="#avatar>Change the avatar</a>.
PROTIP: Don't change more than one or two values before you reset and view again
so you know what change break the system.


## Tabs, folders, and index.md files (for SEO)

Links at the top of the page ("QUICK-START GUIDE", "ABOUT", etc.)
are specfied by the navigation.html file within the _data folder.

0. Edit that file.

   The **title:** key specifies the text of each tab, such as "About".

   NOTE: CSS in the theme automatically turns all letters into capital.

0. Change url values such as this:

   {% highlight text %}
- title: About
url: /about/

- title: Sample Posts
url: /posts/
   {% endhighlight %}


0. Save and restart the server.

### index.md under About folders

Next let's use a text editor to look into that **about** folder specified in the .yml file.

github:
repo:  https://github.com/user/Proj # "GitHub project" link on sidebar



### index.md under folders

Jekyll converts the contents of each **index.md** file (containing markdown text)
into **index.html** files containing HTML.

Open the **index.md** file in the about folder.

HOORAY: The use of folders above an index.html file enables
calls using SEO-friendly links. For example, to reference the
about link:

   http://localhost:4000/about

HOORAY: This technique does not require use of mechanisms in the underlying web server container
(such as IIS).

The text is added to page titles that appear in browser tabs through this HTML:

{% highlight text %}
<title>All Posts &#8211; WilsonMar.GitHub.io</title>
{% endhighlight %}


### Parsing of post file names

The **posts** tab link to files within the **_posts** folder.
In the case of the sample file named "2011-03-10-sample-post.md",
Jekyll programming parses the "sample-post" out of the file name and uses that
as if it's named "sample-post.html".


### UI Text Translation

An addition 


### Metadata within .md files

At the top of each markdown file, between a set of 3 dashes,
are key-value pairs providing metadata about the page, such as this example
from the **index.md** file within folder **about**:

{% highlight text %}
---
layout: page
title: About
tags: [about, Jekyll, theme, responsive]
modified: 2014-08-08T20:53:07.573882-04:00
comments: true
image:
   feature: pic pic blue black stars spin 1900x500.jpg
   credit: Jeremy Thomas
   creditlink: https://www.flickr.com/photos/132218932@N03/page2
---
{% endhighlight %}

EXTRA: Detailed YAML specifications are at:
http://www.yaml.org/spec/1.2/spec.html


HOORAY: Such metadata takes the place of a database referenced to dynamically generate pages (as WordPress does).
Jekyll's lack of a database vastly simplies matters and speeds up processing.
This enables static page HTML to be distributed
in CDNs (Content Distribution Networks) around the world.
That maximizes download speed for visitors.

### Layout types

The various layout types are defined in files (with no extension) within the **_templates** folder:

* archive
* page
* post

HOORAY: This approach enables additional types to be defined.

{% highlight text %}
---
layout: {{ layout }}
title: {{ title }}
modified:
categories: {{ dir }}
excerpt:
tags: []
image:
feature:
---
{% endhighlight %}

Text within square braces define an array of several values.

### Liquid engine

Tags within &#123; curly braces &#125; are processed by the **Liquid** templating engine.

Liquid can perform if/then/else decisions and loops.

EXTRA: More detail about Liquid is at:
https://docs.shopify.com/themes/liquid/basics#If_.2F_Else_.2F_Unless

* <a target="_blank" href="https://github.com/Shopify/liquid/wiki/Liquid-for-Designers"> List of Liquid commands</a>

#### Collections

One of the most powerful features provided by Liquid is 
Collections.

Collections is explained at:

* <a target="_blank" href="https://jekyllrb.com/docs/collections/">
  jekyllrb.com/docs/collections</a>
* <a target="_blank" href="http://ben.balter.com/2015/02/20/jekyll-collections/">
  2015/02/20/jekyll-collections</a>
  by Ben Balter (product manager at GitHub).

Collections refer to a custom folder containing many markdown files,
each having front-matter than can be parsed by Liquid code.

Ben has a great decision diagram:

<img width="618" alt="fig white jekyll page post collection decision" src="https://cloud.githubusercontent.com/assets/300046/14328744/4c0fe5cc-fbf5-11e5-87a7-8a6002f2dc93.png">

NOTE: site.categories and site.tags only works on _posts.

### Link icon YAML

In the list of posts, post titles with a link icon get that way because in its YAML is a line
link post line such as this:

{% highlight text %}
link: http://www.wilsonmar.com
---
{% endhighlight %}


### .yml metada

Default values are specified in a **_config.yml** file at the root of the site folder.

EXTRA: All keys are detailed at http://jekyllrb.com/docs/configuration/

Here are the first few lines of a sample file:

{% highlight text %}
# Site wide configuration

title:            WilsonMar.GitHub.io
locale:           en_US
url:

# Jekyll configuration

permalink:   /:categories/:title/
markdown:    kramdown
highlighter: rouge
sass:
sass_dir: _sass
style: compressed
gems:
- jekyll-sitemap
- jekyll-gist
{% endhighlight %}


PROTIP: Changes in the _config.yml file are applied only when the Jekyll service is recycled.
At the command terminal window where Jekyll was launched,
press control+C, then invoke the
<a href="#invoke-server">command to start the server again</a>.

Another theme (Poole Hyde) adds:

{% highlight text %}
---
github:
repo:  https://github.com/user/Proj # "GitHub project" link on sidebar
---
{% endhighlight %}


### sitemap.xml in _site

Theme programming also generates the **_site** folder and in it
generates **feed.xml** and **sitemap.xml** files for web crawlers to read.

### Bing it on
TODO: Get a value for the **bing-verify:** variable in your **_config.yml**.

0. Open a Webmaster Tools account at
<a target="_blank" href="http://www.bing.com/toolbox/webmaster/">bing.com/toolbox/webmaster/</a>

0. Sign In with a Windows Live ID. If you don't have a Microsoft account already, get one.

0. Type in your Site Name (mine's wilsonmar.github.io) and click Add a site.

0. Type in the URL to your Site Map. (mine's http://wilsonmar.github.io/sitemap.xml).

   The sitemap.xml file is generated in the **_site** folder,
   but will be the root folder when deployed on a web server.

0. Fill out the other fields (contact info and preferences), then click Save.

0. In the Verify ownership page, copy the string from:
   {% highlight text %}
   <meta name="msvalidate.01" content="73A60A207FC7D42B6F428E462079B001" />
   {% endhighlight %}

0. Paste that string to the right of the **bing-verify:** variable.

0. Click the **BingSiteAuth.xml** link to save the file.
0. Move the file into the root folder where the _config.yml file is
   (NOT in the _site folder, which gets deleted and repopulated automatically).

0. Recycle the Jekyll server to see the **BingSiteAuth.xml** in the _site folder.


### Google Ownership

This is explained in https://support.google.com/webmasters/answer/35179?hl=en

0. Access <a target="_blank" href="https://www.google.com/webmasters/tools/home?pli=1">
Webmasters Tools</a> using your Google account.

0. Add a Property (such as http://wilsonmar.github.io).

0. Download the html file (such as google923b0745fb3293c1.html) to the Downloads folder.

0. Move the file into the root folder where the _config.yml file is
(NOT in the _site folder, which gets deleted and repopulated automatically).

0. Download the file.


### Disqus comments

0. Use an internet browser to get to:
<a target="_blank" href="https://disqus.com/">
Disqus.com</a>.

This is about creating a publisher account such as "wilsonmarcom".

0. PROTIP: Create a separate personal commenter account (such as "wilsonmar")
   to track your responses on other websites.

0. Click the cog next to your picture to select **Add Disqus To Site**, or
https://publishers.disqus.com/engage?utm_source=Home-Nav

0. Click **Install on your site**.

0. Specify a site name such as "wilsonmar-github-io".

0. Click Next and answer the demographic questions (how many visits, etc.).

0. You don't need to
   select installation for Universal code and copy
   paste JavaScript because the theme has already done that in
   file **_disqus_comments.html** within folder **_includes**.

0. Copy the **site.owner.disqus-shortname**, such as "wilsonmargithubio" from:

{% highlight html %}
<script id="dsq-count-scr" src="//wilsonmargithubio.disqus.com/count.js" async></script>
{% endhighlight %}

0. Open for edit file **_config.yml** in the root folder.

0. Paste the Disqus short name as the value to key **disqus-shortname:**.

0. Read more about configuration of Disqus at:
   https://help.disqus.com/customer/en/portal/articles/2158629

<a target="_blank" href="https://disqus.com/admin/create/">
Disqus Setup Disqus on a New Site</a>.



<hr />

### Multiple authors

Lower in the file is information about the default author displayed on all pages.
This can be overridden in a particular index.md or post file by a line such as:

{% highlight text %}
author: billy_rick
{% endhighlight %}

"billy_rick" is a key to more information in the **authors.yml** file within the **_data** folder:

{% highlight text %}
billy_rick:
  twitter: @billyrick
{% endhighlight %}

HOORAY: This mechanism presents the photo and links to multiple alternative authors to appear on the website.


### Social links +

If you'd like more links, add them in folder **_includes** file **_author-bio.html**:

{% highlight html %}
{% if author.soundcloud %}<a href="http://soundcloud.com/{{ author.soundcloud }}" class="author-social" target="_blank"><i class="fa fa-fw fa-soundcloud"></i> Soundcloud</a>{% endif %}
{% endhighlight %}


### Social sharing

On the bottom of every page of the minimal-mistakes theme are large buttons for sharing
tweets, Facebook, and Google.


Unlike links on the left pane of every page,
clicking on these links pops up a new browser window.

You can change that pre-populated text (the URL) by changing the
**_social-share.html** file withing folder **_includes**.
The default pulls in the value of variables:

{% highlight text %}
{{ site.url }} and {{ page.url }}
{% endhighlight %}

The pop-up relies on cookies previously created when the visitor signed into Twitter, Facebook, and Google
on the same browser used to access this site.

<hr />

## Images
Images can be defined in GFM or standard HTML.

### In-line GFM images
Positioning of GFM-specified images can be specified using a special tag.

{% highlight html %}
![Smithsonian Image]({{ site.url }}/images/3953273590_704e3899d5_m.jpg)
{: .image-pull-right}
{% endhighlight %}

renders as:

![Smithsonian Image]({{ site.url }}/images/pic flood of daya 877x524.jpeg)
{: .image-pull-right}

NOTE: Most images are stored in the site's **images** folder.


### Clickable images
GFM is not yet able to handle code to specific clickable images,
either as HTML image maps nor as CSS.


#### One Up

{% highlight html %}
<figure>
<a href="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_b.jpg"><img src="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"></a>
<figcaption><a href="http://www.flickr.com/photos/80901381@N04/7758832526/" title="Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr">Figure: Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr</a>.</figcaption>
</figure>
{% endhighlight %}

renders to:

<figure>
<a href="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_b.jpg"><img src="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"></a>
<figcaption><a href="http://www.flickr.com/photos/80901381@N04/7758832526/" title="Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr">Figure: Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr</a>.</figcaption>
</figure>


#### Half/Three Up
The theme has a `half` class to split the available horizonatl space in half
to display two images side by side (and share the same caption).

{% highlight html %}
<figure class="half">
<a href="/images/image-filename-1-large.jpg"><img src="/images/image-filename-1.jpg"></a>
<a href="/images/image-filename-2-large.jpg"><img src="/images/image-filename-2.jpg"></a>
<figcaption>Figure: Two images.</figcaption>
</figure>
{% endhighlight %}

renders to:

<figure class="half">
<a href="http://placehold.it/1200x600.JPG"><img src="http://placehold.it/600x300.jpg"></a>
<a href="http://placehold.it/1200x600.jpeg"><img src="http://placehold.it/600x300.jpg"></a>
<figcaption>Figure: Two images.</figcaption>
</figure>

#### Three Up

The theme has a `third` class to split the available horizontal space in thirds
to display three images side by side (and share the same caption):

{% highlight html %}
<figure class="third">
<img src="/images/image-filename-1.jpg">
<img src="/images/image-filename-2.jpg">
<img src="/images/image-filename-3.jpg">
<figcaption>Figure: Three images.</figcaption>
</figure>
{% endhighlight %}

is rendered as:

<figure class="third">
<img src="http://placehold.it/600x300.jpg">
<img src="http://placehold.it/600x300.jpg">
<img src="http://placehold.it/600x300.jpg">
<figcaption>Figure: Three images.</figcaption>
</figure>


### Layout responsive to screen size
The MadeMistakes themes make use of the
<a target="_blank" href="http://semantic.gs/">Semantic Grid System</a>
to define fluid grids for each major page layouts with a few lines of CSS code referencing
@media queries.
This makes the theme responsive -- adapting to various size screens:

* Desktop default (up to the largest HD & 4XHD screen)

   Min-width: 780px

* Tablet Portrait (to landscape and desktop)

    Min-width: 768px / Max-width: 979px

* Smartphone (and all smaller screens)

    Max-width: 480px


### Image sized to screen?

The size of screens.

The image for **Twitter Cards** is a square image around 120 x 120 pixels.



<hr />

## Markdown coding
The next few sections are based on

https://mmistakes.github.io/minimal-mistakes/sample-post/

### Notice boxes
To put text in a box, add `{: .notice}` under the text to be boxed:

{% highlight text %}
**CAUTION:** Invalid markup can crash the server.
{: .notice}
{% endhighlight %}

renders to:

**CAUTION:** Invalid markup can crash the server.
{: .notice}

PROTIP: Make a small change (one phrase) then verify rendering.
Commit to git at every verified set.

### Blockquotes

A leading *>* marks a line as a blockquote:

{% highlight html %}
> Lorem ipsum
{% endhighlight %}

renders as:

> Lorem ipsum

### Footnotes
A paragraph ending with the &Vcirc; "circumflex" character (upper case of the number 6 key)
between square brackets defines the footnote number:

Footnotes are Syntax Highighting[^1].

A repeat of the sequence at the **beginning** of a paragraph defines the definition:

{% highlight yaml %}
[^1]: <http://en.wikipedia.org/wiki/Syntax_highlighting>
{% endhighlight %}
[^1]: <http://en.wikipedia.org/wiki/Syntax_highlighting>



### Button colors in HTML
Use pre-defined classes:

{% highlight html %}
<div markdown="0"><a href="#" class="btn">Primary Button</a></div>
<div markdown="0"><a href="#" class="btn btn-success">Success Button</a></div>
<div markdown="0"><a href="#" class="btn btn-warning">Warning Button</a></div>
<div markdown="0"><a href="#" class="btn btn-danger">Danger Button</a></div>
<div markdown="0"><a href="#" class="btn btn-info">Info Button</a></div>
{% endhighlight %}

renders to:

<div markdown="0"><a href="#" class="btn">Primary Button</a></div>
<div markdown="0"><a href="#" class="btn btn-success">Success Button</a></div>
<div markdown="0"><a href="#" class="btn btn-warning">Warning Button</a></div>
<div markdown="0"><a href="#" class="btn btn-danger">Danger Button</a></div>
<div markdown="0"><a href="#" class="btn btn-info">Info Button</a></div>

If you are viewing this on a desktop, mouse-over each button to see the color change.

### SASS #

To change the colors, edit in folder **_sass** file **variables.scss**,
then compile the file to .css.

   <pre>
    sass variables.scss  variables.css
   </pre>

Sass, or Syntactically Awesome StyleSheets, is an extension language for CSS. 

Nests

Variables:

   <pre>
   $background-transparent :
   </pre>

Mixins



### Paragraph Indents
By default, the theme assumes formatting is for books by removing extra lines and adds indents to
second and subsequent paragraphs. Well, we're in the internet age where long paragraphs are the exception.

To disable the indents and add spacing between paragraphs,
edit in folder **_sass** file **variables.scss** to change:

    $paragraph-indent: true !default;

To:

    $paragraph-indent: false;

PROTIP: This change in the theme enables use of indented items using GFM.


### Numbered lists
As with GFM, numbers in front of ordered list items can be preceded by zeros since they are automatically numbered:

{% highlight text %}
0. Item one
0. sub item one
0. sub item two
0. Item two

some text after 3 spaces.

0. Item three
{% endhighlight %}

renders to:

0. Item one
0. sub item one
0. sub item two
0. Item two

some text after 3 spaces.

0. Item three



### Code Snippets
Instead of a set of three back quotes, blocks of programming code are enclosed with special tags like this:

<pre><code>
&#123;% highlight css %}
#container {
float: left;
margin: 0 -240px 0 0;
width: 100%;
}
&#123;% endhighlight %}
</code></pre>

renders as:

{% highlight css %}
#container {
float: left;
margin: 0 -240px 0 0;
width: 100%;
}
{% endhighlight %}


### Gists

Snippets of code on Gist.com can be displayed on the web page with a simple line
containing the gist.com userid and snippet number:

<pre><code>
&#123;% gist <em>userid</em>/6589546 %}
</code></pre>


### Standard GFM mark-up
Several coding techniques ar the same as in GitHub Flavored Markdown.

* Asterisks precede text in unordered lists preceded with bullets.
* The number of # characters preceding heading text specifies the level.
* One asterisk enclosing text makes it *italics*.
* Two asterisk enclosing text makes it **bold**.

Just as with GFM, regular HTML is recognized and processed as such.

{% highlight html %}
<strong>bolded text</strong>
{% endhighlight %}


### Custom Includes
Jekyll can process several special tags beyond what GFM can do.
An entire HTML file can be inserted:

<pre><code>
&#123;% include _toc.html %}
</code></pre>

The tag is processed by <a target="_blank" href="http://kramdown.gettalong.org/converter/html.html#toc">
Kramdown</a> which generates the Table of Contents displayed on the right side of the screen.

A custom include can be coded within markdown like this:

<pre><code>
&#123;% include evangelist_links.html %}
</code></pre>

Doing this takes some mental contortion because of the automatic processing.

The **evangelist_links.html** file referenced needs to be in the _includes folder.

     During processing, the folder "_includes" is automatically added to the link.
     Therefore you can't put the include file anywhere else, or you'll get a message such as:

     Error: Included file '_includes/includes/1loadrun_map.html' not found

However, there can be markdown in the **evangelist_links.html** file, such as:

{% highlight html %}
In this series:

* [Budget](Budget)

<!--
* [Future1](Future1)
-->
{% endhighlight %}

NOTE: HTML code above to ignore can be included in the file.


### Tables
A rule can be specified for formatting tables coded in GFM:

{% highlight text %}
| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3
{: rules="groups"}
{% endhighlight %}

renders to:

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3
{: rules="groups"}




<hr />

## Affiliate Ads

### Amazon Affiliate Ads

0. https://affiliate-program.amazon.com/gp/associates/network/main.html

0. Search for a product to get its URL, such as:
   http://www.amazon.com/gp/product/B00IR2VEUS/
   So Amazon's product code is  "B00IR2VEUS".

0. Specify the product code to get the HTML containing your affiliate tracking code, such as:

{% highlight html %}
<a target="_blank" href="http://www.amazon.com/gp/product/B00IR2VEUS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00IR2VEUS&linkCode=as2&tag=wilsonslifenotes&linkId=LGM2HVV7JYHE5QRS">Cabin Max Metz Backpack Flight Approved Carry on Bag 44 Litre Travel Hand Luggage - 55x40x20 (Black)</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=wilsonslifenotes&l=as2&o=1&a=B00IR2VEUS" width="1" height="1" border="0" alt="" />
{% endhighlight %}

   Note the link has a one-pixel image link Amazon uses to track the number of impressions.


If you would like to list products you make on Amazon,
   get an account Seller Account at <a target="_blank" href="https://sellercentral.amazon.com/gp/homepage.html">
   sellercentral.amazon.com/gp/homepage.html</a>.


### Google Affiliate Ads

Ideally, I would put a vertical ad under the table of contents.


## Site Search

A Node.js library to add search functionality to any Jekyll blog
<a target="_blank" href="http://christian.fei.ninja/Simple-Jekyll-Search/">Demo here</a>
is available
from <a target="_blank" href="https://github.com/christian-fei/Simple-Jekyll-Search">
this repo</a>.

Theme http://mmistakes.github.io/so-simple-theme/theme-setup/#jekyll-search
activates each page using it with the **search_omit: true** front matter.


## .gitignore

This list of folders and files is about what processing occurs locally.

{$ endhighlight text %}
_site
.sass-cache
.DS_Store
*.sublime-project
*.sublime-workspace
codekit-config.json
node_modules
_asset_bundler_cache
.jekyll-metadata
{$ endhighlight %}

## Additional features

[Make Jekyll multi-lingual](https://www.sylvaindurand.org/about/)


## Deploy to server

   * http://help.github.com/articles/using-jekyll-with-pages/

   * http://goo.gl/hE3Zj2 to
   http://nicolasgallager.com/simple-git-deployment-strategy-for-static sites/

   * jekyllrb.com/docs/deployment-methods/


## Questions

QUESTION: How to add regular .html files to the site.

TODO: Inspired by <a target="_blank" href="http://www.shamimeboodhoo.com/building-photomap/">
Shamime's photomap building</a>, I added a Photomap tab and folder on my site.


http://loyc.net/2014/javascript-toc.html

QUESTION: Spell checking in GitHub?

<hr />

## Footnotes

There is no need to repeat excellent tutorials:

* <a target="_blank" href="https://www.youtube.com/playlist?list=PLWjCJDeWfDdfVEcLGAfdJn_HXyM4Y7_k-">
   Thomas Bradley's videos on YouTube</a>

* Tutorial: http://jekyll.tips/jekyll-casts/

* https://geekflare.com/cloud-storage-static-website/

* https://snipcart.com/blog/static-site-e-commerce-part-2-integrating-snipcart-with-jekyll

## Jekyll MinimalMistake users in the wild #

* http://udaypal.com/jenkins-workflow-getting-started/
* http://udaypal.com/2015-04-08-continuous-delivery-using-jenkins-workflow/
* http://michaelcrump.net/running-jekyll-locally/

* http://blog.christianposta.com/microservices/netflix-oss-or-kubernetes-how-about-both/

* <a target="_blank" href="https://www.youtube.com/playlist?list=PL58Wk5g77lF-UQ39pejLX2Zn5DxQyExBa">JAMstack Conf 2018 - San Francisco 19 videos</a>

* https://www.tomordonez.com/jekyll-text-expand-collapsible-markdown/ to hide text unless clicked
* https://karttur.github.io/setup-theme-blog/blog/blog-hide-show-div/

## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}
