---
layout: post
name: jekyll-with-search
title: "Search within Hyde format Jekyll websites"
excerpt: "Add a feature-rich search box in your JAM stack website"
tags: [Jekyll, Algolia, Search, JavaScript, website]
date: "2016-05-18"
file: "jekyll-with-search"
image:
# feature: pic blue lake searching 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14621985/1cdb6086-0584-11e6-9570-5cedb9f2385f.jpg
  credit: Braintree Books
  creditlink: http://www.braintreebooks.com/search.htm
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The objective of this article is for you to implement these use cases
(click on the underlined items to go straight there):

<a href="https://wilsonmar.github.io/jekyll-with-algolia-search/">
https://wilsonmar.github.io/jekyll-with-algolia-search</a> =
<a href="https://goo.gl/UWKgTu">
https://goo.gl/UWKgTu</a>

<hr />

1. <a href="#QueryTest">Test drive search on a demo site online</a>.

   The site is built with Jekyll and can perform text search
   on pre-defined text content.

2. <a href="#GetRepoWorking">Get a sample theme on your local machine working with search queries.</a>

   We setup your machine with Jekyll and Ruby, then
   clone a fork of a famous Jekyll theme adapted with search capabilities.

3. <a href="#CustomizeSite">Edit the repo so your own posts are indexed.</a>

   We obtain API keys for a new account on the search service
   and use it to index new posts we add.

4. <a href="#AddSearch">Add search features to another theme.</a>

   We deep dive into the theme to add JavaScript, CSS, and HTML.

Before we dive into Alogolia, know this:


## Alternatives to process search #

Other options to add search capabilities on a Jekyll site:

   * Mike Neumegen of @CloudCannonApp
   has a <a target="_blank" href="http://jekyll.tips/jekyll-casts/jekyll-search-using-lunr-js/">
   video blog</a> showing how to add search using 
   <a target="_blank" href="http://lunrjs.com/">lunr.js</a> 
   to the <a target="_blank" href="https://github.com/CloudCannon/bakery-store/">
   bakery-store theme on GitHub</a>
   of his own design. There is a 
   <a target="_blank" href="https://css-tricks.com/building-a-jekyll-site-part-1-of-3/">
   tutorial on how to contruct it</a>.

   Alas, <a target="_blank" href="https://www.youtube.com/watch?v=Nebae_YEok4&t&t=4m50s">
   [4:50] near the end of this 5-minute video</a>: 
   
   <amp-youtube data-videoid="Nebae_YEok4" layout="responsive" width="480" height="270">
   </amp-youtube>
   "Where it really falls down is if you have a large site, you need all your search data in a JSON file
   which has to be downloaded by the client.
   So if you have hundreds of blog posts, it's going to be 
   <strong>really slow</strong> if you try to implement it using lunr."

### Search in Azure #

<a target="_blank" href="https://app.pluralsight.com/library/courses/azure-adding-search-abilities-apps/table-of-contents">
Adding Search Abilities to Your Apps with Azure Search</a> (cloud)
2h 55m video
by <a target="_blank" href="https://www.ecofic.com/">Chad Campbell</a>
(<a target="_blank" href="https://twitter.com/ChadCampbell/">@ChadCampbell</a>,
<a target="_blank" href="https://www.ecofic.com/">ecofic.com</a>)
explains natural language processing for 35 languages 
(such as searching for "went" when the request is for "go") and
Geospatial around a point or within an area.

But scalability means manual editing in the Azure Portal or
programming Azure Search Management APIs.

Use Scoring Profile to align searches.

<hr />

<a name="QueryTest"></a>

## Test drive search on Algolia's Jekyll-Hyde theme's demo site online #

0. Click this link to go to our theme's demo website on-line:

   <a target="_blank" href="http://community.algolia.com/algoliasearch-jekyll-hyde/">
   http://community.algolia.com/algoliasearch-jekyll-hyde/</a>

   The formatting of this site is what you'll have as YOUR blog
   after following instructions in this tutorial.

   <a name="SearchDemo"></a>

   ### Search Demo steps #

0. Type in the search field a single letter such as "L".

   * Do results appear as you type? It should.

   * Do you need to click a submit button? No.

   * Are results highlighted within the normal presentation rather than with a different format, such as with Bing or Google search?

0. Click another link (Home) and try search term "Love craxy" (with a capital letter and a misspelling).

   * Is it "typo tolerant" ("crazy" is found even though it was typed in wrong as "craxy").

   * Are capital letters and lower case letters equivalent?

   Thus, as far as search goes, the theme presented is rather complete. Well, almost.

   <a name="404Search"></a>

   ### 404 Search Redirect #

0. Change the URL to a post that should not exist, such as:

   <a target="_blank" href="http://community.algolia.com/algoliasearch-jekyll-hyde/">
   http://community.algolia.com/algoliasearch-jekyll-hyde/<strong>whatever</strong></a>

   * Are you redirected to a search page with "whatever" in the search field?
   No.
   <br /><br />
   NOTE: <a target="_blank" href="https://github.com/algolia/algoliasearch-jekyll-hyde/issues/4">
   I've filed an issue to request this feature</a>.


<a name="Additional"></a>

### Missing features #

We are using a <strong>pre-formatted theme</strong> rather than design-your-own,
which takes much more time and expertise.

* [List of features in a website (offered in other themes)](/website-features/)

Features not in the theme would need to be added.

<hr />

<a name="GetRepoWorking"></a>

## Get it working locally #

Here are the steps setup your own free static website that provides a search box:

0. <a href="#GitHubAccount"> Create a GitHub account</a>
0. <a href="#ForkRepo"> Clone a Jekyll template</a>
0. <a href="#InstallRuby"> Install Ruby, Jekyll, Build gems</a>
0. <a href="#RunJekyll"> Run website locally</a>
0. <a href="#RunJekyllScript">Create a Shell Script to Run Jekyll Locally</a>
0. <a href="#CustomizeSite"> Customize website locally</a>
0. <a href="#UpdateAlogia"> Update Alogria code locally</a>

The architectural components is call the <strong>JAM stack</strong>,
with JAM standing for JavaScript, APIs, and Markup.
The order of the components has no significance (there had to be a vowel in the second letter).

JAM is a fast-growing stack for building websites and apps:

* No database servers that take time to retrieve
* No construction of web pages to respond to a request

* Markup in text files within GitHub for version control
* Markup files are pre-processed into display-ready HTML
* HTML files can be stored on various servers around the world in a CDN

* JavaScript calls APIs for any moving parts (such as retrieving personalization data)

<hr />

<a name="GitHubAccount"></a>

### Create a GitHub Account #

In this tutorial, we refer to <em>your_account</em> as the account name you created in GitHub.

If you already have an account, skip this section.

0. Click on this URL to open an internet browser to:

   <a target="_blank" href="http://github.com/">github.com</a>

0. Sign-up with a <strong>user name</strong> you pick (one that's not already taken).

   NOTE: The remainder of this tutorial refers to "acme" in place of YOUR real user/account name.

0. Confirm your email.

<a name="ForkRepo"></a>

### Fork and rename template altered by Alogolia #

Templates provide pre-formatted CSS and JavaScript.
Themes are available from a variety of sources.

We like Jekyll over WordPress, Drupal, and other frameworks because unlike them others,
Jekyll's blog entries are stored in text files rather in a database.
This makes it easier to switch Jekyll themes.

The theme we are using in this tutorial is based on a fork of
the <a target="_blank" href="http://hyde.getpoole.com/">
Hyde theme template</a>, which is among the most popular
partly because it is created by the legendary <a target="_blank" href="https://twitter.com/mdo">
Mark Otto</a>, Director of Design at GitHub.

   * Mobile friendly design and development

   * Easily scalable text and component sizing with rem units in the CSS

The steps:

0. Click the link below to open an internet browser with our base theme:

   <a target="_blank" href="https://github.com/algolia/algoliasearch-jekyll-hyde">
   https://github.com/algolia/algoliasearch-jekyll-hyde</a>

   This theme adds a search box to the Hyde theme by adding
   additional HTML, CSS, configuration settings, and JavaScript programming.

   We will examine each change below.

0. Click its <strong>Fork</strong> button to put it under your GitHub account.

0. Click the <strong>Settings</strong> tab to rename the repo, as <em>your_account_name</em>.github.io.

   In other words, if your account name is "acme", you would rename the repo to acme.github.io.

   NOTE: "github.io" means the site is hosted by GitHub, which does not charge (unlike GoDaddy or other hosting provider).

   PROTIP: Sites hosted on GitHub.io can still have a custom name such as "acme.com".

Next, we'll download the repository.

<a name="GitClient"></a>

### Install Git Client #

There are several choices.

   * Mac machine already have a command-line Git client.

   * Follow this website to install Git in Windows


<a name="ConfigRemote"></a>

### Create a local repo #

0. Open a Terminal Shell Window on the Mac or cmd program on Windows.

0. PROTIP: Create a folder path to clone (create) repositories into.

   <tt><strong>
   mkdir ~/gits<br />
   cd gits
   </strong></tt>

   Repos are created within this folder.

0. PROTIP: Create a folder to hold all Git repositories from your account.

   And change directory into it:

   <tt><strong>
   mkdir ~/gits/<em>your_account</em><br />
   cd <em>your_account</em>
   </strong></tt>

   On Mac and Linux, the ~ (tilde) character designates the current user's home folder.

0. Clone from your_account on GitHub:

   <tt><strong>
   git clone https://github.com/<em>your_account/your_account</em>.github.io
   </strong></tt>

0. View folder.

   <tt><strong>
   cd <em>your_account</em>.github.io
   </strong></tt>

   NOTE: Cloning creates <strong>.git</strong> folder that contains all the history in the creation of the template.
   This file is what enables Git version control.

0. Compare this against the
   <a target="_blank" href="https://jekyllrb.com/docs/structure/">
   standard structure</a>.

   Notice the <strong>.jekyll-metadata</strong> entry keeps the file's data local.
   It will NOT be sent back up to GitHub.

0. Use a text editor to view the <strong>.gitignore</strong> file.

   The presence of the <strong>_site</strong> line means that the _site folder generated will
   NOT be sent back up to GitHub because GitHub will generate its own _site folder.

0. Use a text editor to create a <strong>_config-dev.yml</strong> file containing:

   <pre>
# Develop override settings
url: http://localhost:4001
   </pre>



<a name="InstallRuby"></a>

### Install Ruby and Jekyll, Build gems #

Text in Jekyll sites are written in "Markdown" format which Jekyll converts to HTML
that site vistors download and display on their internet browsers.

The programming for Jekyll to do that is written in the Ruby programming language.

0. [Install the Ruby program compiler on a Mac](/ruby-on-apple-mac-osx/)

   <a target="_blank" href="https://jekyllrb.com/docs/windows/#installation">
   Alternately, install Ruby on Windows</a>.

   Gems contain Ruby programs in a way that can be easily installed.

0. Install Jekyll as a Ruby gem:

   <pre><strong>
   gem install jekyll
   </strong></pre>

   This automatically install dependencies.

0. Use a text editor to open the <strong>Gemfile</strong>.

   <pre>
   source 'https://rubygems.org'

   gem 'jekyll', '~> 2.5'

   group :jekyll_plugins do
     gem 'algoliasearch-jekyll', '~> 0.4'
   end
   </pre>

   NOTE: If you are adding search capability to an existing site,
   you would add gem specifications to this file.

0. Click the URL to visit:

   NOTE: Gems specified are pulled from the <a target="_blank" href="https://rubygems.org/">
   Rubygems website</a>.

0. Search for <strong>algoliasearch-jekyll</strong>:

   <a target="_blank" href="https://rubygems.org/gems/algoliasearch-jekyll/">
   https://rubygems.org/gems/algoliasearch-jekyll/</a>

   The <strong>development</strong> dependencies are libraries used during
   code programming:

    * <a target="_blank" href="https://www.npmjs.com/package/coveralls">coveralls</a> ~> 0.8 takes json-cov output into stdin and POSTs to coveralls.io
    * <a target="_blank" href="https://www.npmjs.com/package/flay">flay</a> ~> 2.6
    * <a target="_blank" href="https://www.npmjs.com/package/flog">flog</a> ~> 4.3 light-weight configurable front-end logger
    * guard-rspec ~> 4.6
    * jeweler ~> 2.0
    * rspec ~> 3.0
    * rubocop ~> 0.31
    * simplecov ~> 0.10
    <br /><br />

   <strong>Run-time</strong> dependencies are what needs to be specified in
   the Gemfile:

   * algoliasearch ~> 1.4
   * appraisal ~> 2.1.0
   * awesome_print ~> 1.6
   * json ~> 1.8
   * nokogiri ~> 1.6
   * verbal_expressions ~> 0.1.5
   <br /><br />

0. In a Terminal window, have dependency gems automatically fetched based on the Gemfile and dependencies:

   <tt><strong>
   bundle install
   </strong></tt>

   Install is the default action.

   NOTE: The <strong>Gemfile.lock</strong> file generated defines the version being used of each gem.


<a name="RunJekyll"></a>

### Run Jekyll Locally #

0. To ensure you have a base version that works locally, run:

   <tt><strong>
   bundle exec jekyll serve \-\-config _config.yml,_config-dev.yml \-\-port 4001
   </strong></tt>

   The sample response:

   <pre>
            Source: /Users/mac/gits/acme/acme.github.io
       Destination: /Users/mac/gits/acme/acme.github.io/_site
      Generating...
                    done.
 Auto-regeneration: enabled for '/Users/mac/gits/acme/acme.github.io'
    Server address: http://127.0.0.1:4001/
  Server running... press ctrl-c to stop.
   </pre>

   If an error message appears about port 4000 (the default), it may be because two dashes need to precede the port parameter keyword.

   On a Mac, "ctrl-c" means hold down the control key and press C to stop.

   NOTE: A <strong>_site</strong> folder should now be generated.

0. Switch to an internet browser to open the server address:

   <a target="_blank" href="http://127.0.0.1:4001/">http://127.0.0.1:4001</a>

   BTW, documentation on all configuration options:

   * <a target="_blank" href="https://jekyllrb.com/docs/configuration/">
   https://jekyllrb.com/docs/configuration/</a>

<a name="RunJekyllScript"></a>

### Create a Shell Script to Run Jekyll Locally #

PROTIP: Create a script instead of typing in the long command, to save time and avoid mistakes.

### Mac and Linux Shell Script #

0. Use a text editor program to create a file named 4001.sh</strong>.

0. Save the file in the root folder of the Jekyll repository.

0. Open a Terminal instance and navigate to that repository.
0. Define run permissions:

   <tt><strong>
   chmod a+x 4001.sh
   </strong></tt>

#### Windows Shell Script #

0. Use a text editor program to create a file named 4001.cmd</strong>.

0. Save the file in the root folder of the Jekyll repository.

0. Open cmd program and navigate to that Jekyll folder.


<a name="RunScript"></a>

### Run script #

#### Run script on MacOS #

0. Open a Terminal instance to run it:

   <tt><strong>
   ./4001.sh
   </strong></tt>

0. <a href="#ViewSite">View site again</a>.


#### Run script on Windows #

0. Run it in a command window:

   <tt><strong>
   4001.cmd
   </strong></tt>

0. <a href="#ViewSite">View site again</a>.


<a name="UpdateAlogia"></a>

### Update Alogria code locally #

Since Algoria is good enough to update its example over time to reflect
for changes by authors of the Jekyll base and the Hyde template,
you'll need to update the Aloglia sample, but without messing without
disturbing your configuration changes.

0. PROTIP: Make a zip of your folder so you'll have an easy fall-back.

0. In a command-line window, ensure there is a remote:

   <tt><strong>
   git remote -v
   </strong></tt>

   Expect:
   <pre>
   upstream	https://github.com/algolia/algoliasearch-jekyll-hyde (fetch)
   upstream	https://github.com/algolia/algoliasearch-jekyll-hyde (push)
   </pre>

   If the above does not appear:

   <tt><strong>
   git remote add upstream https://github.com/algolia/algoliasearch-jekyll-hyde
   </strong></tt>

   Verify the remote again.

0. Use Git to fetch branches and their contents (with history):

   <tt><strong>
   git fetch upstream -v
   </strong></tt>

   Sample response:

   <pre>
   From https://github.com/algolia/algoliasearch-jekyll-hyde
 * [new branch]      gh-pages   -> algolia/gh-pages
 * [new branch]      issue/command-not-found -> algolia/issue/command-not-found
 * [new branch]      jekyll-v3  -> algolia/jekyll-v3
 * [new branch]      master     -> algolia/master
 * [new branch]      pr         -> algolia/pr
 * [new branch]      test/algolia-v1 -> algolia/test/algolia-v1
    </pre>

0. Identify the branch you want to update. This is typically "master".
0. Checkout that branch:

   <tt><strong>
   git checkout --track upstream/master
   </strong></tt>

0. Verify that branch:

   <tt><strong>
   git status
   </strong></tt>

0. Review the changes:

   <tt><strong>
   git ???
   </strong></tt>

0. Update gem dependencies:

   <tt><strong>
   gem update
   </strong></tt>

   The response:

   <pre>
   Updating installed gems
   </pre>

0. Resolve conflicts, if any.

0. Update dependencies:

   <tt><strong>
   bundle install
   </strong></tt>

0. <a href="#PushGitHub">Make site changes public on GitHub</a>
   later after configuration and testing.


<hr />


<a name="CustomizeSite"></a>

## Edit the repo so your own posts are indexed #

You want your own content instead of the postings copied from the theme, right?

There are several customizations:

0. <a href="#AlgoliaSetup">Setup your own indexing service</a>
0. <a href="#ConfigYml">Configure _config.yml</a>
0. <a href="#WriteAPIKEY">Specify Write API KEY</a>
0. <a href="#IndexShellScript">Index in shell script</a>
0. <a href="#BuildIndexCI">Build index in CI</a>

0. <a href="#HydeChanges"> Adjust theme colors and presentation</a>
0. <a href="#AddPosts">Add new custom posts</a>
0. <a href="#ViewSite">View refreshed site</a>
0. <a href="#EraseSamplePosts">Erase sample posts</a>

0. <a href="#PushGitHub">Make site changes public on GitHub</a>
0. <a href="#ReplaceSiteIcon">Replace site icon</a>
0. <a href="#ViewLogs">View Logs and Metrics</a>

<hr />

<a name="AlgoliaSetup"></a>

### Setup your own indexing service #

0. Sign-up at <a target="_blank" href="https://www.algolia.com/">
   Algolia.com</a> (you can optionally use your GitHub credentials).

   A free account of up to 10,000 requests per day is available from
   <a target="_blank" href="https://www.algolia.com/">
   Algolia.com</a>.

   This video by Tim Carry (tim@algolia.com)
   illustrates his
   <a target="_blank" href="https://blog.algolia.com/instant-search-blog-documentation-jekyll-plugin/">
   blog article</a>:
   <amp-youtube data-videoid="ivMML1J4ABY" layout="responsive" width="480" height="270">
   </amp-youtube>
   <br /><br />

0. Specify the name and region where the majority of your visitors are located.

   Algoria's UI has a cool list of live ping response times to various regions:

   <amp-img width="386" height="346" alt=""
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/15621061/7779e1b0-241b-11e6-977a-0aeeb0a5c1d2.jpg"></amp-img>
   <br /><br />

0. Look at the email for links to their thorough
   <a target="_blank" href="https://www.algolia.com/demos/">demos</a> and
   <a target="_blank" href="https://www.algolia.com/doc">tutorials (doc)</a>,
   which populates your instance with example of actors.


<a name="ConfigYml"></a>

### Configure _config.yml #

NOTE: Jekyll keeps its configuration information in a text file named _config.yml.

0. Use a text editor to open the <strong>_config.yml</strong> file.

   #### Site title #

0. Manually change these values in the sample file:

   <pre>
   title:            Hyde
   tagline:          'A Jekyll theme, with instant search'
   description:      'The popular <a href="http://hyde.getpoole.com/" target="_blank">Hyde theme</a> for <a href="http://jekyllrb.com" target="_blank">Jekyll</a>, now with instant-search capabilities. Made by <a href="https://twitter.com/mdo" target="_blank">@mdo</a> and <a href="https://www.algolia.com/" target="_blank">Algolia</a>'
   </pre>

0. Save the file and restart the server to see your changes on the website.

   #### Site URL #

0. Click <strong>Find and Replace</strong> from

   <pre>
   algolia/algoliasearch-jekyll-hyde
   </pre>

   to, for example:

   <pre>
   acme/acme.github.io
   </pre>

   would change these lines:

   <pre>
   url:              https://github.com/algolia/algoliasearch-jekyll-hyde
   baseurl:          /algoliasearch-jekyll-hyde
   </pre>

   #### Site API KEY #

0. Switch to an internet browser with the <a target="_blank" href="https://www.algolia.com/dashboard">
   Algolia Dashboard</a> on your account.

   <amp-img width="651" height="143" alt="algolia-app-id-651x143-71pct"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/15627136/be0ed046-2497-11e6-93d3-6ab5183661f2.jpg"></amp-img>
<br /><br />

   The value you see for application_id would be different that the example shown here.

0. Copy the value of the Application ID
   by clicking on the icon to the right of each value or
   highlight each value and press Ctrl+C.

   NOTE: A Jekyll plugin (from Algolia or another)
   extracts every paragraph of text (between `<p>` and `</p>` tags) from HTML files generated by the jekyll build command.
   This approach of reading the final HTML pages instead of markdown text works with any markdown parser
   and custom plugin.

0. Use a text editor to open the <strong>_config.yml</strong> file and paste in this under the gems: section:

   <pre>
   gems:
     - algoliasearch-jekyll

   algolia:
     application_id: 'EILX55I5BP'
     index_name: 'jekyll_PROD'
     read_only_api_key: '6be0576ff61c053d5f9a3225e2a90f76'
     excluded_files:
       - 404.html
       - index.html
   </pre>

   #### application_id #

0. Highlight to value for application_id and paste yours to replace it.

   #### read_only_api #

0. As above, copy from the Dashboard the <strong>Search-Only API Key</strong> and
   replace the value of <strong>read_only_api_key</strong> in the _config.yml file.

   #### index_name #

   NOTE: The Algolia plugin also adds metadata context to each paragraph before pushing the lot to the Algolia index in the cloud.

   PROTIP: Specify a different index name for PROD and TEST so you don't mix different data.

0. In <strong>_config.yml</strong> specify a index name such as "jekyll_PROD".

0. In <strong>_config-dev.yml</strong> specify a index name such as "jekyll_TEST".

   NOTE: With Aloglia, an index does not need to be created manually ahead of index insertion.

0. Save the file and restart the server to see your changes on the website.
   The response looks like this:

   <pre>
Configuration file: /Users/mac/gits/jetbloom/jetbloom.github.io/_config.yml
 Indexing 822 items
Indexing of 822 items in jekyll_PROD done.
   </pre>

<a name="WriteAPIKEY"></a>

### Create _algolia_api_key #

PROTIP: Keep private from the world API keys with write permissons.

0. Use a text editor to open file <strong>.gitignore</strong> file.
0. Scroll to the bottom of the file to copy the <strong>_algolia_api_key</strong> entry.

   Functions in the Algolia JavaScript client library downloaded open a file with this name
   to retrieve the contents for use like a password associated with write and delete permissions.

0. Close the file.
0. Switch to an internet browser with the <a target="_blank" href="https://www.algolia.com/dashboard">
   Algolia Dashboard</a> on your account.

0. Click the icon to the right of the <strong>Admin API Key</strong> value to copy it into your Clipboard.

   <amp-img width="650" height="86" alt="algolia admin api key"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/15708068/9dd3997c-27b9-11e6-9386-e898d0d2b7e8.jpg"></amp-img>

   The key's value is shown as dots in case someone else is looking over your shoulder.

0. Switch back to the text editor to open a new file.
0. Paste the API key in the file.
0. Save the file in the repo folder as name <strong>_algolia_api_key</strong> (no file extension).
0. Close the file.



<a name="IndexShellScript"></a>

### Index in shell script #

PROTIP: Combine several actions in the custom shell script, such as building the index.

0. Use a text editor to edit the <a href="#RunJekyllScript">
   4001.sh or 4001.cmd script created above to Run Jekyll locally</a>.

0. Identify the sub-modules installed:

   <pre>
   bundle exec jekyll -h
   </pre>

   The algolia sub-command should be listed.

0. Replace the 4001 script file with this:

   <pre><strong>
   # build _site folder:
   bundle exec jekyll build –config _config.yml,_config-dev.yml
   # Index sub-command:
   bundle exec jekyll algolia push
   # Display:
   bundle exec jekyll serve –config _config.yml,_config-dev.yml --port 4001
   </strong></pre>

   This is constructed based on
   <a target="_blank" href="https://jekyllrb.com/docs/usage/">
   Jekyll documentation at https://jekyllrb.com/docs/usage/</a>

   NOTE: The jekyll aloglia sub-command references the <a href="#WriteAPIKEY">_algolia_api_key</a>.

   <a href="#InstallRuby">Repeat your Ruby install and bundle install</a>
   if you see this message:

   <pre>
   fatal: 'jekyll algolia' could not be found. You may need to install the jekyll-algolia gem or a related gem to be able to use this subcommand.
   </pre>



<a name="BuildIndexCI"></a>

### Update indexes in Continuous Integration #

PROTIP: Update indexes using a continuous integration server
set to automatically push data and reindex upon save.

There are several CI servers:

TODO: Add CI settings instructions.

* Jenkins
* Cloudbees SaaS running Jenkins
* TravisCI
* CircleCI



<a name="HydeChanges"></a>

### Adjust theme colors and presentation #

Some themes pre-code alternative CSS that can be selected.

<a target="_blank" href="https://github.com/poole/hyde">
The Hyde theme at https://github.com/poole/hyde</a>
   explains some changes in the format of the site's layout.
   To change the color scheme of the site to green and flip the menu to the right side,
   change <strong>_layouts/default.html</strong> from:

   `<body class="theme-base-09">`

   to:

   `<body class="theme-base-0b layout-reverse">`

The disadvantage of this convenience is that the CSS file can become "bloated", and require longer to load by visitors.

<a name="AddPosts"></a>

### Add new custom posts #

   NOTE: Content shown on Jekyll websites are defined as individual files within the <strong>_posts</strong> folder.
   This is a key differentiator of Jekyll vs. WordPress, Drupal, and others that store content in a database.

   Files in the _posts folder can be moved among different Jekyll themes.

0. Use a text editor to open an .md file within the _posts folder.

   Files names end with ".md" to designate markdown formatting.
   Jekyll processes such files into index.html files.

   There are other formats, such as

   Some text editors can provide text highlighting based on the file extension.

   The three dashes in the first line begins the <a target="_blank" href="http://jekyllrb.com/docs/frontmatter/">
   "front matter"</a> which Jekyll processes.

   <pre>
   ---
   layout: post
   title: Let's start the adventure
   author:
     login: nicolas
     email: nicolas@algolia.com
     display_name: nicolas
     first_name: Nicolas
     last_name: Dessaigne
   ---
   </pre>

   NOTE: The `post` value in `layout: post` means that the **post.html** file in the **_layouts** folder is used to format text in the file.

0. Replace the title and author.

   NOTE: Some other themes provide a default author so it doesn't have to be entered on every post.

0. Erase the remainder after the front matter (three dashes).
0. Save the file <strong>with a different file name</strong>.
0. <a href="#ViewSite">View site again</a>.

<a name="ViewSite"></a>

### View refreshed site #

0. Switch to the Terminal window running Jekyll.

   Jekyll is set to detect changes to the file and re-generate HTML as needed.

   <pre>
   Regenerating: 1 file(s) changed at 2016-05-30 11:03:55 ...done in 5.612279 seconds.
   </pre>

0. Switch to the internet browser and press Ctrl+R or click the icon to refresh the screen.


<a name="EraseSamplePosts"></a>

### Erase sample posts #

0. Switch to the Finder on a Mac or File Explorer on Windows.
0. Navigate to the <strong>_posts</strong> folder.
0. Select all files in the folder except the one created above.
0. Delete files selected.


<a name="PushGitHub"></a>

### Make site changes public on GitHub #

PROTIP: Make a small change, then add and commit.

0. If you use a command-line Git client:

   <tt><strong>
   git add .<br />
   git commit -m"Add sample posts"
   </strong></tt>

0. See if there is a remote local defined:

   <tt><strong>
   git remote -v
   </strong></tt>

0. If there isn't, define one (replacing the URL with yours):

   <tt><strong>
   git remote add remote https://github.com/acme/acme.github.io
   </strong></tt>

0. Verify with another:

   <tt><strong>
   git remote -v
   </strong></tt>

   <pre>
   origin http://github.com/acme/acme.github.io (fetch)
   origin  http://github.com/acme/acme.github.io (push)
   </pre>

0. Push commits to GitHub to verify the site running before customization.

   <tt><strong>
   git push
   </strong></tt>

0. View your site using the public URL.


<a name="ViewLogs"></a>

### View Logs and Metrics #

On the search service Dashboard:

NOTE: Alogia emails the number of calls each day.


<hr />

<a name="AddSearch"></a>

## Add search features to a base theme #

NOTE: This section is not complete yet.

To add search features to another Jekyll theme,
we dive into theme JavaScript, CSS, HTML, and configuration files.

   <amp-img width="650" height="488" alt="jekyll-angolia-v02-650x488-c79.jpg"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16637295/76fa2584-439b-11e6-9242-b24cd41b52a0.jpg"></amp-img>

PROTIP: The sequence in the video above shows a sequence of changes so 
you can make one change at a time and 
have it still working so you can verify each change.

0. <a href="#GetTheme">Get a copy of your custom theme working on your local machine</a> 
0. <a href="#CSSInHead"> Add a link to the algolia.css file in _includes/head.html</a>
0. <a href="GitIgnorePrivates"> Specify in .gitignore the file containing private keys</a>
0. Edit _config.yml to add your Algolia credentials
0. Edit Gemfile (if you're using bundler) to add the Jekyll Algolia plugin
0. Edit _includes/footer.html to include the links to the needed JS files and templates
0. Edit_includes/sidebar.html to add the search input
0. Edit_layouts/default.html to replace the element where content is usually displayed and transform it into two elements. One for the "static" display (current blog post for example) and one for the "dynamic" display (search results). Only one of the two will be visible at a time, depending if the user is searching or reading
public/css/search.css where you put all the search-specific styling (input, results, etc)
* public/js/search.js where you put the search-specific javascript (instanciating the Algolia client, updating the render, etc)

<hr />

<a name="GetTheme"></a>

Get a base theme working on your local machine.

   [My Jekyll Templates page](/jekyll-templates/) lists several.

   As an example, we'll be modifying the Hyde theme since we're already familiar with its
   look and feel.

   PROTIP: We modify the theme so that we can test the effectiveness of each step.

0. Open an internet browser to see the base theme demo:

   <a target="_blank" href="http://hyde.getpoole.com/">
   http://hyde.getpoole.com</a>

0. Click the link below to open the GitHub page for the theme:

   <a target="_blank" href="https://github.com/poole/hyde">
   https://github.com/poole/hyde</a>

   We will add a search box by adding
   additional HTML, CSS, configuration settings, and JavaScript programming.

0. Click its <strong>Fork</strong> button to put it under your GitHub account.

0. Click "Clone or download", then Download Zip.

0. Use Finder to open the "hyde-master.zip" in the Downloads folder.

0. Unzip it.

0. Move the folder to a directory such as "~/gits/jekyll".

   NOTE: The folder does not contain a Gemfile.

0. Navigate to that folder.
0. Run Jekyll server to display the static site:

   <tt><strong>
   jekyll serve
   </strong></tt>

   <a name="CSSInHead"></a>

0. Add a link to the algolia.css file in _includes/head.html

   <pre>
   &LT;link rel="stylesheet" href="{{ site.baseurl }}public/css/algolia.css">
   </pre>

   To check if this works, use your browser Debugger's waterfall chart.

0. Add CSS to style the search form and search results based on
   the contents within:

   <a target="_blank" href="https://github.com/algolia/algoliasearch-jekyll-hyde/blob/master/public/css/algolia.css">
   https://github.com/algolia/algoliasearch-jekyll-hyde/blob/master/public/css/algolia.css</a>

   What you actually add can be much different if you prefer to
   make use of SASS, etc.

   <pre>
   /* Search form */
.algolia__form {
  margin-bottom: 1rem;
}
&nbsp;
.algolia__input {
  font-size: 20px;
  padding:.25rem .5rem;
}
&nbsp;
/* Search results */
&nbsp;
.algolia__initial-content {
  display:block;
}
.algolia__initial-content--hidden {
  display:none;
}
.algolia__search-content {
  display:none;
}
.algolia__search-content--active {
  display:block;
}
&nbsp;
.algolia__result-link {
  font-size: 1.25rem;
  font-weight:bold;
}
.algolia__result-date {
  font-size:0.8rem;
}
.algolia__result-text {
}
.algolia__result-highlight {
  background: yellow;
  color:inherit;
}
   </pre>

   You won't be able to check if this works until the form is added,
   below.

   <a name="SearchField"></a>

0. Add the search form input field in the sidebar.html within _includes.

   Different templates use varying techniques to provide a form field
   for visitors to specify search terms.

   <pre>
   <form class="algolia__form" action="/search/" method="GET">
   <input type="text" class="algolia__input js-algolia__input"
      autocomplete="off" name="query"
      placeholder="Search in this site..." />
   </form>
   </pre>

   After saving, the form should appear.
   Adjust the CSS styling and positioning as you wish.

0. Add the algolia.js library of JavaScript functions into the repo,
   such as the public/js folder.

   <a target="_blank" href="https://github.com/algolia/algoliasearch-jekyll-hyde/blob/master/public/js/algolia.js">
   https://github.com/algolia/algoliasearch-jekyll-hyde/blob/master/public/js/algolia.js</a>

0. Add the HTML to display page titles and content in default.html
   within folder _layouts:

    <pre>
    &LT;div class="content container">
      &LT;div class="algolia__initial-content js-algolia__initial-content">\{\{ content \}\}&LT;/div>
    &nbsp;
      &LT;div class="algolia__search-content js-algolia__search-content">
        &LT;h1 class="page-title">Search&LT;/h1>
        &LT;div class="posts algolia__results">&LT;/div>
      &LT;/div>
    &LT;/div>
   </pre>

0. Add HTML links to the Algolia library within the HTTP footer.html
   within the _includes folder.

   <pre>
   &LT;script>
     window.ALGOLIA_CONFIG = {
       'applicationId': '{{ site.algolia.application_id }}',
       'indexName': '{{ site.algolia.index_name }}',
       'apiKey': '{{ site.algolia.read_only_api_key }}'
     }
   &LT;/script>
   &LT;script id="algolia__template" type="text/template">
   {% raw %}
     &LT;div class="algolia__result">
       &LT;a class="algolia__result-link" href="{{ url }}#algolia:{{ css_selector }}">{{{ _highlightResult.title.value }}}&LT;/a>
       {{#posted_at}}
       &LT;div class="algolia__result-date">{{ posted_at_readable }}&LT;/div>
       {{/posted_at}}
       &LT;div class="algolia__result-text">{{{ _highlightResult.content.value }}}&LT;/div>
   {% endraw %}
   &LT;/script>
   &LT;script id="algolia__template--no-results" type="text/template">
     No results found.
   &LT;/script>
   &LT;script src="//cdn.jsdelivr.net/jquery/2.1.4/jquery.min.js">&LT;/script>
   &LT;script src="//cdn.jsdelivr.net/algoliasearch/3.6.0/algoliasearch.min.js">&LT;/script>
   &LT;script src="//cdn.jsdelivr.net/algoliasearch.helper/2.1.0/algoliasearch.helper.min.js">&LT;/script>
   &LT;script src="//cdn.jsdelivr.net/hogan.js/3.0.2/hogan.min.js">&LT;/script>
   &LT;script src="//cdn.jsdelivr.net/momentjs/2.10.3/moment.min.js">&LT;/script>
   &LT;script src="{{ site.baseurl }}public/js/algolia.js">&LT;/script>
   </pre>

0. Adjust CDN.

   Although Algolia makes use of the jQuery library stored in a CDN,
   you can use another CDN (such as Google's) if you prefer.

   <a name="Gemfile.lock"></a>

0. Add dependencies and their versions in the <strong>Gemfile.lock</strong> file:

   <a name="Gemfile"></a>

0. Specify the Jekyll plugin in the <strong>Gemfile</strong> file:

   <pre>
   source 'https://rubygems.org'
   &nbsp;
   gem 'jekyll', '>=2.5.3'
   &nbsp;
   group :jekyll_plugins do
     gem 'algoliasearch-jekyll'
   end
   </pre>

   <a name="GitIgnorePrivates"></a>

   ### .gitignore #

0. Edit the project's .gitignore file so the key is not uploaded to GitHub:

   <pre>
   _algolia_api_key
   </pre>

   NOTE: The leading underline character tells Jekyll to not convert it
   into HTML.


0. Edit variables and their values in the
   project's <strong>_config.yml</strong> file.


<hr />

   <a name="ReplaceSiteIcon"></a>

   ### Replace Site Icon #

TODO: ReplaceSiteIcon


### index.html #

0. Navigate down the folders to an index.html file and open it in a text editor.

   NOTE: All content files are named **index.html** so visitors don't have to type in the .html file extension.
   It is better for SEO (Search Engine Optimization) if folder names are used as links.

   * Dashes are interpreted by search engines as spaces between words.
   * Underlines are interpreted as compound words.<br /><br />

0. Press Ctrl+F to search for `<article class="post">`
   a <a target="_blank" href="http://mdn.beonex.com/en/HTML/Element/article.html">HTML5 standard tag</a>
   to designate content (and not navigation and other fluff).

   Text in the file replaces the tag:

      &#123;&#123; content }}

In the **_includes** folder of the Algolia template are the head.html, footer.html, and sidebar.html.

When a web page (index.html) is loaded by an internet browser at the client end,
contents of the `<head>` are processed first.

The Algolia Jekyll theme defines that code in the **head.html** file.

That includes `<link` statements to bring in JavaScript and CSS files.

### sidebar.html #

The **sidebar.html** file contains what is within the `<div class="sidebar">` tag positioned to the left of content on every page.

The search field is in that file:

   <pre>
&LT;input type="text" class="algolia__input js-algolia__input"
autocomplete="off"
name="query"
placeholder="Search in this site..." />
   </pre>

   TODO: Explain Notice there is no JavaScript "onClick" function here.

   That's because JavaScript functions have been invoked when the website was loaded to watch for changes in classes
   <strong>algolia__input</strong> and <strong>js-algolia__input</strong>.



### footer.html #

The **footer.html** file contains what goes before the `</body>` tag at the bottom of every page.

The Algoria template also defines JavaScript variables and populates them with values from the _config.xml file:

 {% highlight text %}{% raw %}
  <script>
  window.ALGOLIA_CONFIG = {
    'applicationId': '{{ site.algolia.application_id }}',
    'indexName': '{{ site.algolia.index_name }}',
    'apiKey': '{{ site.algolia.read_only_api_key }}',
    'baseurl': '{{ site.baseurl }}'
  }
</script>{% endraw %}{% endhighlight %}



 {% highlight text %}{% raw %}
<script id="algolia__template" type="text/template">
% raw %}
  <div class="algolia__result">
    <a class="algolia__result-link" href="{{ full_url }}#algolia:{{ css_selector }}">{{{ _highlightResult.title.value }}}</a>
    {{#posted_at}}
    <div class="algolia__result-date">{{ posted_at_readable }}</div>
    {{/posted_at}}
    <div class="algolia__result-text">{{{ _highlightResult.text.value }}}</div>
  </div>
% endraw %}
</script>
<script id="algolia__template--no-results" type="text/template">
  No results found.
</script>{% endraw %}{% endhighlight %}


### JavaScript #

The <strong>onLinkClick</strong> JavaScript function invoked
is defined in the <strong>algolia.js</strong> file within
the public/js folder.

* onQueryChange

* onResult

* renderResults

* getAnchorSelector

* scrollPageToSelector

The above in turn reference functions in libraries pulled in from the internet:

   {% highlight html %}
<script src="//cdn.jsdelivr.net/jquery/2.1.4/jquery.min.js"></script>
<script src="//cdn.jsdelivr.net/algoliasearch/3.6.0/algoliasearch.min.js"></script>
<script src="//cdn.jsdelivr.net/algoliasearch.helper/2.1.0/algoliasearch.helper.min.js"></script>
<script src="//cdn.jsdelivr.net/hogan.js/3.0.2/hogan.min.js"></script>
<script src="//cdn.jsdelivr.net/momentjs/2.10.3/moment.min.js"></script>
<script src="/algoliasearch-jekyll-hyde/public/js/algolia.js"></script>{% endhighlight %}


<a name="SearchCSS"></a>

### Search Field CSS Formatting #

It seems there are as many ways to store CSS in Jekyll sites as there are Jekyll sites.

Each option involves <a href="#SearchCSS"> changes to CSS</a> as well to suit your design tastes.

The Algoria theme keeps CSS and JavaScript within a folder named <strong>public</strong>.
   A separate <strong>algoria.css</strong> file contains styling for both the search box and search results.

   Notice it is raw CSS, with no SASS processing.

   Many Jekyll templates use SASS,
   which expands style codes in sass files to generate CSS used in websites.

 Additional resources about SASS:

   * <a target="_blank" href="https://www.toptal.com/css/sass-mixins-keep-your-stylesheets-dry">
   More about SASS mixins</a>

   * A popular SASS library is
   bourbon


   The underline in the name means that the folder is not transferred into the _site folder.

## Resources #

* Nick Zadrozny is the co-founder of Bonsai.io.




## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}
